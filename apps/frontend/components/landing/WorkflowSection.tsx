import Card from "@/components/ui/Card";
import { Link2, Upload, Sparkles, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Link2,
    title: "Connect Accounts",
    description: "Link your Instagram and Facebook accounts in seconds with secure OAuth.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    number: "02",
    icon: Upload,
    title: "Add Your Videos",
    description: "Upload videos or paste URLs. AI analyzes content and suggests timing.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Let the AI Post Daily",
    description: "Sit back while AgentInc automatically posts your content and tracks engagement.",
    gradient: "from-green-500 to-emerald-500",
  },
];

export function WorkflowSection() {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-purple-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-block rounded-full border border-purple-200 bg-white px-4 py-2 text-[#7C3AED]">
            How It Works
          </div>
          <h2 className="text-3xl font-semibold text-gray-900 md:text-4xl">
            Get started in <span className="text-[#7C3AED]">3 simple steps</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-600">
            From setup to automation in under 5 minutes.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-0 right-0 top-1/2 hidden h-0.5 -translate-y-1/2 bg-gradient-to-r from-blue-200 via-purple-200 to-green-200 lg:block" />
          <div className="relative z-10 grid gap-8 lg:grid-cols-3">
            {steps.map((step, index) => (
              <Card
                key={step.number}
                className="rounded-2xl border-2 border-transparent bg-white p-8 shadow-lg transition hover:border-[#7C3AED] hover:shadow-xl"
              >
                <div className="mb-6 flex items-center justify-between">
                  <div className="text-6xl font-semibold text-gray-200">{step.number}</div>
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${step.gradient} text-white shadow-lg`}
                  >
                    <step.icon className="h-8 w-8" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                <p className="mt-3 text-sm text-gray-600">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="mt-6 flex items-center gap-2 text-sm text-[#7C3AED]">
                    <span>Next step</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">Ready to automate your social media?</p>
          <div className="mt-2 flex items-center justify-center gap-2 text-[#7C3AED]">
            <span>Start your free trial</span>
            <ArrowRight className="h-5 w-5" />
          </div>
        </div>
      </div>
    </section>
  );
}
