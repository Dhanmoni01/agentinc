// components/ui/Button.tsx
import * as React from "react";
import clsx from "clsx";

export default function Button({
  children,
  className,
  variant = "primary",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline";
}) {
  const base =
    "inline-flex h-11 w-full items-center justify-center rounded-lg text-sm font-medium transition focus:outline-none";
  const styles =
    variant === "primary"
      ? "bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow hover:from-violet-700 hover:to-fuchsia-600"
      : "border border-slate-300 bg-white text-slate-800 hover:bg-slate-50";
  return (
    <button {...props} className={clsx(base, styles, className)}>
      {children}
    </button>
  );
}
