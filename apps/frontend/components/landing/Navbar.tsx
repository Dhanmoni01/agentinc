import Link from "next/link";
import Button from "@/components/ui/Button";
import { Video } from "lucide-react";

export function Navbar() {
  const links = [
    { href: "#features", label: "Features" },
    { href: "#pricing", label: "Pricing" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#docs", label: "Docs" },
  ];

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2 text-gray-900 text-xl font-semibold">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#7C3AED] to-[#A78BFA]">
            <Video className="h-5 w-5 text-white" />
          </span>
          AgentInc
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="inline-flex h-10 items-center justify-center rounded-full border-2 border-slate-200 px-5 text-sm font-semibold text-slate-900 transition hover:border-[#7C3AED] hover:text-[#7C3AED]"
          >
            Login
          </Link>
          <Button className="w-auto rounded-full px-6 py-0 text-sm" size="sm">
            Get Started →
          </Button>
        </div>
      </div>
    </nav>
  );
}
