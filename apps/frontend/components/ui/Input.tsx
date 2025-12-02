// components/ui/Input.tsx
import * as React from "react";
import clsx from "clsx";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  leftIcon?: React.ReactNode;
};

export default function Input({ label, leftIcon, className, ...props }: Props) {
  return (
    <div className="w-full">
      {label && (
        <label className="mb-1 block text-sm font-medium text-slate-700">
          {label}
        </label>
      )}
      <div className={clsx("relative", className)}>
        {leftIcon && (
          <div className="pointer-events-none absolute inset-y-0 left-0 flex w-10 items-center justify-center text-slate-400">
            {leftIcon}
          </div>
        )}
        <input
          {...props}
          className={clsx(
            "h-11 w-full rounded-lg border border-slate-200 bg-slate-50/70 px-3",
            leftIcon ? "pl-10" : "pl-3",
            "text-sm text-slate-900 placeholder-slate-400 outline-none focus:border-violet-400 focus:bg-white"
          )}
        />
      </div>
    </div>
  );
}
