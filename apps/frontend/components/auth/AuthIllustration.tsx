import type { ReactNode } from "react";
import {
  BarChart3Icon,
  CalendarIcon,
  HeartIcon,
  TrendingUpIcon,
  UsersIcon,
  VideoIcon,
} from "@/components/icons/Lucide";

export default function AuthIllustration() {
  return (
    <div className="relative flex h-full w-full items-center justify-center p-10">
      <div className="absolute inset-0 rounded-[48px] bg-gradient-to-br from-[#7C3AED]/15 via-purple-50 to-[#9B5CFF]/15 blur-[2px]" />
      <div className="absolute inset-6 rounded-[40px] bg-white/40 blur-sm" />

      <div className="relative z-10 w-full max-w-lg">
        <div className="rounded-[32px] border border-white/50 bg-white/95 p-8 shadow-[0px_40px_120px_-40px_rgba(72,39,255,0.45)]">
          <div className="flex items-center justify-between">
            <p className="text-base font-semibold text-slate-900">
              Analytics Overview
            </p>
            <span className="rounded-full bg-emerald-100 px-3 py-0.5 text-xs font-medium text-emerald-700">
              Live
            </span>
          </div>

          <div className="mt-6 flex h-32 items-end gap-3 rounded-2xl bg-gradient-to-br from-purple-100 to-fuchsia-50 p-4">
            {[45, 70, 35, 90, 60].map((height, idx) => (
              <div
                key={idx}
                className="flex-1 rounded-xl bg-gradient-to-t from-[#7C3AED] to-[#9B5CFF]"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>

          <div className="mt-6 grid grid-cols-3 gap-4 text-sm">
            {[
              { label: "Posts", value: "247" },
              { label: "Reach", value: "84K" },
              { label: "Growth", value: "+24%", accent: "text-emerald-600" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl bg-slate-50/80 px-4 py-3 text-slate-900"
              >
                <p className="text-xs text-slate-500">{item.label}</p>
                <p className={`text-xl font-semibold ${item.accent ?? ""}`}>
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <FloatingCard className="-left-14 -top-24 w-48">
            <div className="mb-3 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 text-white">
                <CalendarIcon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  Next Post
                </p>
                <p className="text-xs text-slate-500">in 2 hours</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-600">
              <span className="h-2 w-2 rounded-full bg-[#7C3AED]" />
              Instagram
            </div>
          </FloatingCard>

          <FloatingCard className="-right-8 -top-12 w-44" delay="1s">
            <div className="mb-2 flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 text-white">
                <HeartIcon className="h-4 w-4" />
              </div>
              <TrendingUpIcon className="h-4 w-4 text-emerald-500" />
            </div>
            <p className="text-2xl font-semibold text-slate-900">12.4K</p>
            <p className="text-xs text-slate-500">Total engagement</p>
          </FloatingCard>

          <FloatingCard className="-left-16 top-16 w-52" delay="1.5s">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#7C3AED] to-[#9B5CFF] text-white">
                <VideoIcon className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  Video Posts
                </p>
                <p className="text-xs text-slate-500">87 this month</p>
              </div>
            </div>
          </FloatingCard>

          <FloatingCard className="-right-12 top-20 w-44" delay="0.5s">
            <div className="mb-3 flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-green-500 text-white">
                <UsersIcon className="h-4 w-4" />
              </div>
              <span className="text-sm font-semibold text-slate-900">
                Audience
              </span>
            </div>
            <p className="text-xl font-semibold text-slate-900">45.2K</p>
            <div className="flex items-center gap-1 text-xs text-emerald-600">
              <TrendingUpIcon className="h-3 w-3" />
              +18% growth
            </div>
          </FloatingCard>

          <FloatingCard className="left-1/2 top-32 h-16 w-16 -translate-x-1/2 rounded-2xl bg-gradient-to-br from-[#7C3AED] to-[#9B5CFF] text-white" delay="1.2s">
            <BarChart3Icon className="h-8 w-8" />
          </FloatingCard>
        </div>
      </div>
    </div>
  );
}

function FloatingCard({
  children,
  className,
  delay,
}: {
  children: ReactNode;
  className?: string;
  delay?: string;
}) {
  return (
    <div
      className={`animate-float absolute rounded-2xl border border-white/70 bg-white p-4 shadow-[0_30px_70px_-35px_rgba(31,40,76,0.7)] ${className ?? ""}`}
      style={{ animationDelay: delay }}
    >
      {children}
    </div>
  );
}
