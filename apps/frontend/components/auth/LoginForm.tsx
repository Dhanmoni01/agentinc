import { FormEvent, ReactNode, useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import GoogleIcon from "@/components/icons/GoogleIcon";
import {
  ArrowRightIcon,
  LockIcon,
  MailIcon,
  VideoIcon,
} from "@/components/icons/Lucide";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  );

  const validate = () => {
    const nextErrors: typeof errors = {};
    if (!email) {
      nextErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      nextErrors.email = "Enter a valid email";
    }

    if (!password) {
      nextErrors.password = "Password is required";
    } else if (password.length < 6) {
      nextErrors.password = "Must be at least 6 characters";
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!validate()) return;
    alert("Login successful! (stub)");
  };

  return (
    <div className="w-full max-w-md rounded-[32px] border border-white/80 bg-white px-6 py-8 shadow-[0px_40px_120px_-45px_rgba(72,39,255,0.35)] sm:px-10">
      <div className="mb-8 text-center">
        <div className="mb-5 flex items-center justify-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#7C3AED] to-[#9B5CFF] text-white shadow-lg shadow-purple-500/40">
            <VideoIcon className="h-6 w-6" />
          </div>
          <span className="text-2xl font-semibold text-slate-900">AgentInc</span>
        </div>
        <h1 className="text-2xl font-semibold text-slate-900">
          Welcome back 👋
        </h1>
        <p className="text-sm text-slate-500">
          Log in to manage your automated posts.
        </p>
      </div>

      <form onSubmit={onSubmit} className="space-y-5">
        <Field label="Email" error={errors.email}>
          <div className="flex h-12 items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 focus-within:border-[#7C3AED] focus-within:bg-white">
            <MailIcon className="h-5 w-5 text-slate-400" />
            <input
              className="flex-1 border-none bg-transparent text-slate-900 outline-none placeholder:text-slate-400"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
        </Field>

        <Field label="Password" error={errors.password}>
          <div className="flex h-12 items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 focus-within:border-[#7C3AED] focus-within:bg-white">
            <LockIcon className="h-5 w-5 text-slate-400" />
            <input
              className="flex-1 border-none bg-transparent text-slate-900 outline-none placeholder:text-slate-400"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
        </Field>

        <div className="flex items-center justify-between text-sm text-slate-600">
          <label className="flex cursor-pointer items-center gap-2">
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-slate-300 text-[#7C3AED] focus:ring-[#7C3AED]"
              checked={remember}
              onChange={(event) => setRemember(event.target.checked)}
            />
            Remember me
          </label>
          <a className="text-[#7C3AED] hover:underline" href="#">
            Forgot password?
          </a>
        </div>

        <Button
          type="submit"
          className="gap-2 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#9B5CFF] py-0 text-base font-semibold shadow-lg shadow-purple-500/30"
        >
          Login
          <ArrowRightIcon className="h-5 w-5" />
        </Button>
      </form>

      <Divider>or continue with</Divider>

      <div className="grid grid-cols-2 gap-3">
        <Button type="button" variant="outline" className="h-12 rounded-xl">
          <GoogleIcon className="mr-2 h-4 w-4" />
          Google
        </Button>
        <Button type="button" variant="outline" className="h-12 rounded-xl">
          <span className="mr-2 text-lg">🐱</span> GitHub
        </Button>
      </div>

      <p className="mt-8 text-center text-sm text-slate-600">
        Don&apos;t have an account?{" "}
        <Link href="/register" className="text-[#7C3AED] hover:underline">
          Sign up free
        </Link>
      </p>
    </div>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <label className="block text-sm font-medium text-slate-800">
      {label}
      <div className="mt-2">{children}</div>
      {error && <p className="mt-1 text-xs text-rose-500">{error}</p>}
    </label>
  );
}

function Divider({ children }: { children: ReactNode }) {
  return (
    <div className="relative my-8 text-center text-xs uppercase tracking-wide text-slate-400">
      <span className="relative z-10 bg-white px-4">{children}</span>
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-slate-200" />
      </div>
    </div>
  );
}
