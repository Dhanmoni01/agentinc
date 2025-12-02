import Card from "@/components/ui/Card";
import {
  Calendar,
  Sparkles,
  BarChart3,
  Clock,
  Target,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Auto-Post Scheduling",
    description: "Schedule posts weeks in advance across multiple platforms. Set it and forget it.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Sparkles,
    title: "AI Caption & Hashtag Generator",
    description: "Generate engaging captions and trending hashtags with our AI-powered assistant.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: BarChart3,
    title: "Cross-Platform Analytics",
    description: "Track performance across Instagram and Facebook with a unified dashboard.",
    gradient: "from-green-500 to-emerald-500",
  },
];

const secondary = [
  {
    icon: Clock,
    title: "Optimal Timing",
    description: "AI suggests the best time to post based on engagement patterns.",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: Target,
    title: "Audience Insights",
    description: "Understand your audience demographics and what content resonates most.",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    icon: Zap,
    title: "Instant Publishing",
    description: "Post immediately or schedule for later. Full control at your fingertips.",
    gradient: "from-yellow-500 to-orange-500",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-block rounded-full bg-purple-100 px-4 py-2 text-[#7C3AED]">
            Features
          </div>
          <h2 className="text-3xl font-semibold text-gray-900 md:text-4xl">
            Everything you need to <br />
            <span className="text-[#7C3AED]">automate social media</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-xl text-gray-600">
            Powerful features designed to save you time and grow your audience.
          </p>
        </div>

        <div className="mb-12 grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="rounded-2xl border border-gray-100 p-8 shadow-sm transition-shadow hover:shadow-lg"
            >
              <div
                className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.gradient}`}
              >
                <feature.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
              <p className="mt-3 text-sm text-gray-600">{feature.description}</p>
            </Card>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {secondary.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl bg-gray-50 p-6 transition-colors hover:bg-gray-100"
            >
              <div
                className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${feature.gradient}`}
              >
                <feature.icon className="h-5 w-5 text-white" />
              </div>
              <h4 className="text-base font-semibold text-gray-900">{feature.title}</h4>
              <p className="mt-2 text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
