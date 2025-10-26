import type { SVGProps } from "react";

export default function GoogleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 18 18"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path
        fill="#EA4335"
        d="M17.64 9.204a8.84 8.84 0 0 0-.163-1.836H9v3.472h4.844a4.15 4.15 0 0 1-1.798 2.718v2.257h2.908c1.704-1.567 2.686-3.877 2.686-6.611Z"
      />
      <path
        fill="#34A853"
        d="M9 18c2.43 0 4.468-.806 5.957-2.18l-2.908-2.258c-.808.542-1.842.861-3.049.861-2.344 0-4.328-1.586-5.036-3.711H1.957v2.331A9 9 0 0 0 9 18Z"
      />
      <path
        fill="#FBBC05"
        d="M3.964 10.712a5.44 5.44 0 0 1 0-3.423V4.957H1.957a9 9 0 0 0 0 8.086z"
      />
      <path
        fill="#4285F4"
        d="M9 3.546c1.32 0 2.508.454 3.44 1.347l2.58-2.58C13.462.985 11.424 0 9 0A9 9 0 0 0 1.957 4.957l2.007 2.332C4.672 5.132 6.656 3.546 9 3.546Z"
      />
    </svg>
  );
}
