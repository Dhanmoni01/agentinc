import { FormEvent, ReactNode, useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import GoogleIcon from "@/components/icons/GoogleIcon";
import {
  ArrowRightIcon,
  LockIcon,
  MailIcon,
  UserIcon,
  VideoIcon,
} from "@/components/icons/Lucide";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [agree, setAgree] = useState(false);
  const [errors, setErrors] = useState<Partial<typeof formData> & { terms?: string }>(
    {}
  );

  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validate = () => {
    const nextErrors: typeof errors = {};
    if (!formData.name) {
      nextErrors.name = "Name is required";
    } else if (formData.name.length < 2) {
      nextErrors.name = "Enter at least 2 characters";
    }

    if (!formData.email) {
      nextErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      nextErrors.email = "Enter a valid email";
    }

    if (!formData.password) {
      nextErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      nextErrors.password = "At least 8 characters";
    }

    if (!formData.confirmPassword) {
      nextErrors.confirmPassword = "Confirm your password";
    } else if (formData.confirmPassword !== formData.password) {
      nextErrors.confirmPassword = "Passwords must match";
    }

    if (!agree) {
      nextErrors.terms = "You must agree to continue";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!validate()) return;
    alert("Account created! (stub)");
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
          Create your AgentInc account 🚀
        </h1>
        <p className="text-sm text-slate-500">
          Start automating your social media today
        </p>
      </div>

      <form onSubmit={onSubmit} className="space-y-5">
        <Field label="Full Name" error={errors.name}>
          <InputRow>
            <UserIcon className="h-5 w-5 text-slate-400" />
            <input
              className="flex-1 border-none bg-transparent text-slate-900 outline-none placeholder:text-slate-400"
              type="text"
              placeholder="John Doe"
              value={formData.name}
              onChange={(event) => handleChange("name", event.target.value)}
            />
          </InputRow>
        </Field>

        <Field label="Email" error={errors.email}>
          <InputRow>
            <MailIcon className="h-5 w-5 text-slate-400" />
            <input
              className="flex-1 border-none bg-transparent text-slate-900 outline-none placeholder:text-slate-400"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={(event) => handleChange("email", event.target.value)}
            />
          </InputRow>
        </Field>

        <Field label="Password" error={errors.password}>
          <InputRow>
            <LockIcon className="h-5 w-5 text-slate-400" />
            <input
              className="flex-1 border-none bg-transparent text-slate-900 outline-none placeholder:text-slate-400"
              type="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={(event) => handleChange("password", event.target.value)}
            />
          </InputRow>
        </Field>

        <Field label="Confirm Password" error={errors.confirmPassword}>
          <InputRow>
            <LockIcon className="h-5 w-5 text-slate-400" />
            <input
              className="flex-1 border-none bg-transparent text-slate-900 outline-none placeholder:text-slate-400"
              type="password"
              placeholder="••••••••"
              value={formData.confirmPassword}
              onChange={(event) =>
                handleChange("confirmPassword", event.target.value)
              }
            />
          </InputRow>
        </Field>

        <div className="space-y-2 text-sm text-slate-600">
          <label className="flex items-start gap-3">
            <input
              type="checkbox"
              className="mt-1 h-4 w-4 rounded border-slate-300 text-[#7C3AED] focus:ring-[#7C3AED]"
              checked={agree}
              onChange={(event) => {
                setAgree(event.target.checked);
                setErrors((prev) => ({ ...prev, terms: undefined }));
              }}
            />
            <span>
              I agree to the{" "}
              <a className="text-[#7C3AED] hover:underline" href="#">
                Terms of Service
              </a>{" "}
              and{" "}
              <a className="text-[#7C3AED] hover:underline" href="#">
                Privacy Policy
              </a>
            </span>
          </label>
          {errors.terms && (
            <p className="text-xs text-rose-500">{errors.terms}</p>
          )}
        </div>

        <Button
          type="submit"
          disabled={!agree}
          className="gap-2 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#9B5CFF] py-0 text-base font-semibold shadow-lg shadow-purple-500/30 disabled:cursor-not-allowed disabled:opacity-100 disabled:brightness-90"
        >
          Create Account
          <ArrowRightIcon className="h-5 w-5" />
        </Button>
      </form>

      <Divider>or sign up with</Divider>

      <Button type="button" variant="outline" className="h-12 rounded-xl">
        <GoogleIcon className="mr-2 h-4 w-4" />
        Continue with Google
      </Button>

      <p className="mt-8 text-center text-sm text-slate-600">
        Already have an account?{" "}
        <Link href="/login" className="text-[#7C3AED] hover:underline">
          Login
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

function InputRow({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-12 items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 focus-within:border-[#7C3AED] focus-within:bg-white">
      {children}
    </div>
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
