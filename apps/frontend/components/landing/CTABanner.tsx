import Button from "@/components/ui/Button";
import { ArrowRight, Sparkles } from "lucide-react";

export function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#7C3AED] to-[#6D28D9] py-20 text-white">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute left-10 top-10 h-32 w-32 rounded-full border-2 border-white" />
        <div className="absolute bottom-10 right-10 h-40 w-40 rounded-full border-2 border-white" />
        <div className="absolute left-1/3 top-1/2 h-24 w-24 rounded-full border-2 border-white" />
      </div>
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm backdrop-blur-sm">
          <Sparkles className="h-4 w-4" />
          Join 10,000+ creators automating their content
        </div>
        <h2 className="text-3xl font-semibold md:text-4xl">Ready to save hours every week?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-xl text-purple-100">
          Start your free 7-day trial today. No credit card required. Cancel anytime.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            size="lg"
            className="w-full items-center justify-center rounded-full bg-white text-[#7C3AED] hover:bg-gray-100 sm:w-auto"
          >
            Sign Up Free
            <ArrowRight className="h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full rounded-full border-2 border-white text-white hover:bg-white/10 sm:w-auto"
          >
            Schedule a Demo
          </Button>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-8 text-sm text-purple-100">
          <span className="flex items-center gap-2">
            <CheckIcon /> Free 7-day trial
          </span>
          <span className="flex items-center gap-2">
            <CheckIcon /> No credit card required
          </span>
          <span className="flex items-center gap-2">
            <CheckIcon /> Cancel anytime
          </span>
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
  );
}
