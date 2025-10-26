import type { ReactNode } from "react";
import AuthIllustration from "./AuthIllustration";

export default function AuthLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8f6ff] via-white to-white">
      <header className="flex h-14 items-center justify-between border-b border-slate-200 bg-slate-900 px-4 text-white shadow-sm md:px-8">
        <div className="flex items-center gap-3 text-sm">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-slate-800 font-semibold">
            AI
          </span>
          <span className="hidden text-slate-200 sm:block">
            Post Automation Dashboard ▾
          </span>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <span className="hidden items-center gap-1 text-slate-200 lg:flex">
            <span className="text-slate-500">⌘</span>Figma
          </span>
          <button className="inline-flex items-center rounded-xl bg-violet-500 px-4 py-2 font-medium shadow hover:bg-violet-600">
            Share
          </button>
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-10 lg:flex-row lg:items-start lg:px-8 lg:py-16">
        <section className="relative hidden flex-1 lg:flex">
          <AuthIllustration />
        </section>
        <section className="flex flex-1 items-center justify-center">
          {children}
        </section>
      </main>
    </div>
  );
}
