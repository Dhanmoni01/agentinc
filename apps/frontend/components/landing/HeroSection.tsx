import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { Play, TrendingUp, Calendar, BarChart3 } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-purple-50 -z-10" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full text-[#7C3AED] mb-6">
              <div className="w-2 h-2 bg-[#7C3AED] rounded-full animate-pulse" />
              <span className="text-sm">Now with AI-powered analytics</span>
            </div>
            <h1 className="text-gray-900 mb-6 leading-tight text-4xl md:text-5xl font-semibold">
              Automate Your Social Media. <br />
              <span className="text-[#7C3AED]">Grow Effortlessly.</span>
            </h1>
            <p className="text-gray-600 text-xl mb-8 max-w-xl mx-auto lg:mx-0">
              Schedule, post, and analyze content across Instagram and Facebook — powered by AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-[#7C3AED] hover:bg-[#6D28D9] text-lg px-8 w-full sm:w-auto">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="gap-2 w-full sm:w-auto">
                <Play className="w-5 h-5" />
                Watch Demo
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-6 justify-center lg:justify-start text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <CheckIcon />
                No credit card required
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon />
                7-day free trial
              </div>
            </div>
          </div>

          <div className="relative">
            <Card className="p-6 rounded-2xl shadow-2xl bg-white relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="text-gray-900">Post Analytics</div>
                <div className="text-sm text-gray-500">Last 7 days</div>
              </div>
              <div className="h-40 bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl mb-4 flex items-end justify-around p-4">
                {[60, 80, 45, 90, 70].map((height, idx) => (
                  <div
                    key={idx}
                    className="w-8 bg-[#7C3AED] rounded-t"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: "Reach", value: "24.5K" },
                  { label: "Engagement", value: "3.2K" },
                  { label: "Posts", value: "47" },
                ].map((stat) => (
                  <div key={stat.label} className="p-3 bg-gray-50 rounded-lg">
                    <div className="text-gray-500 text-xs mb-1">{stat.label}</div>
                    <div className="text-gray-900">{stat.value}</div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="absolute -left-8 top-16 w-56 p-4 rounded-2xl shadow-xl bg-white z-20 hidden lg:block">
              <div className="flex items-center gap-3 mb-3">
                <Calendar className="w-5 h-5 text-[#7C3AED]" />
                <div className="text-gray-900 text-sm">Scheduled</div>
              </div>
              <div className="text-xs text-gray-600">Next post in 2 hours</div>
              <div className="mt-2 p-2 bg-purple-50 rounded-lg">
                <div className="text-xs text-gray-700">Instagram • @brandname</div>
              </div>
            </Card>

            <Card className="absolute -right-8 bottom-16 w-56 p-4 rounded-2xl shadow-xl bg-white z-20 hidden lg:block">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-green-500" />
                  <div className="text-gray-900 text-sm">Growth</div>
                </div>
                <div className="text-green-500 text-sm">+24%</div>
              </div>
              <div className="flex items-end gap-1 h-12">
                {[40, 60, 50, 80, 100].map((height, idx) => (
                  <div
                    key={idx}
                    className="w-6 bg-green-200 rounded-t"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
            </Card>

            <Card className="absolute -left-12 -bottom-8 w-48 p-3 rounded-2xl shadow-xl bg-white z-20 hidden lg:block">
              <div className="flex items-center gap-2 mb-2">
                <BarChart3 className="w-4 h-4 text-blue-500" />
                <div className="text-gray-900 text-xs">Engagement Rate</div>
              </div>
              <div className="text-2xl text-gray-900">4.8%</div>
              <div className="text-xs text-green-600">↑ 0.8% vs last week</div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
  );
}
