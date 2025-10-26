import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const IconBase = ({ children, className, ...props }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    {children}
  </svg>
);

export const CalendarIcon = (props: IconProps) => (
  <IconBase {...props}>
    <rect x="3" y="4" width="18" height="18" rx="3" />
    <path d="M8 2v4M16 2v4M3 11h18" />
  </IconBase>
);

export const TrendingUpIcon = (props: IconProps) => (
  <IconBase {...props}>
    <path d="M3 17 9 11l4 4 7-7" />
    <path d="M14 8h6v6" />
  </IconBase>
);

export const VideoIcon = (props: IconProps) => (
  <IconBase {...props}>
    <rect x="2" y="7" width="15" height="12" rx="2" />
    <path d="m22 7-5 4v6l5 4z" />
  </IconBase>
);

export const UsersIcon = (props: IconProps) => (
  <IconBase {...props}>
    <circle cx="9" cy="7" r="3" />
    <path d="M2 21v-1a5 5 0 0 1 5-5h4" />
    <circle cx="17" cy="11" r="3" />
    <path d="M22 21v-1a5 5 0 0 0-5-5h-1" />
  </IconBase>
);

export const HeartIcon = (props: IconProps) => (
  <IconBase {...props}>
    <path d="M20.8 4.6a4.5 4.5 0 0 0-6.4 0L12 7l-2.4-2.4a4.5 4.5 0 0 0-6.4 6.4l2.4 2.4L12 21l6.4-7.6 2.4-2.4a4.5 4.5 0 0 0 0-6.4Z" />
  </IconBase>
);

export const BarChart3Icon = (props: IconProps) => (
  <IconBase {...props}>
    <path d="M3 3v18" />
    <rect x="7" y="9" width="4" height="8" rx="1" />
    <rect x="13" y="5" width="4" height="12" rx="1" />
    <rect x="19" y="11" width="4" height="6" rx="1" />
  </IconBase>
);

export const MailIcon = (props: IconProps) => (
  <IconBase {...props}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 6-10 7L2 6" />
  </IconBase>
);

export const LockIcon = (props: IconProps) => (
  <IconBase {...props}>
    <rect x="4" y="11" width="16" height="10" rx="2" />
    <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    <path d="M12 15v2" />
  </IconBase>
);

export const UserIcon = (props: IconProps) => (
  <IconBase {...props}>
    <circle cx="12" cy="7" r="4" />
    <path d="M5.5 21a7 7 0 0 1 13 0" />
  </IconBase>
);

export const ArrowRightIcon = (props: IconProps) => (
  <IconBase {...props}>
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </IconBase>
);
