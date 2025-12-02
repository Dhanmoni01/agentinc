import clsx from "clsx";
import { PropsWithChildren } from "react";

type CardProps = PropsWithChildren<{
  className?: string;
}>;

export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={clsx(
        "rounded-2xl border border-slate-100 bg-white shadow-sm",
        className,
      )}
    >
      {children}
    </div>
  );
}
