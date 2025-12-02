// components/ui/Button.tsx
import * as React from "react";
import clsx from "clsx";

type ButtonVariant = "primary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-[#7C3AED] to-[#9B5CFF] text-white shadow-lg shadow-purple-500/30 hover:brightness-105",
  outline:
    "border-2 border-slate-200 bg-white text-slate-900 hover:border-[#7C3AED] hover:text-[#7C3AED]",
  ghost: "bg-transparent text-slate-600 hover:text-slate-900",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-base",
  lg: "h-12 px-7 text-base sm:text-lg",
};

export default function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex w-full items-center justify-center gap-2 rounded-2xl font-semibold transition disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#7C3AED]";

  return (
    <button
      {...props}
      className={clsx(base, variantClasses[variant], sizeClasses[size], className)}
    >
      {children}
    </button>
  );
}
