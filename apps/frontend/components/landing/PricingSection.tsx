import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "Free",
    period: "",
    description: "Perfect for individuals getting started",
    features: [
      "Up to 3 social accounts",
      "10 posts per month",
      "Basic analytics",
      "Email support",
      "AI caption suggestions",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$19",
    period: "/mo",
    description: "For serious content creators",
    features: [
      "Up to 10 social accounts",
      "Unlimited posts",
      "Advanced analytics",
      "Priority support",
      "AI caption & hashtag generator",
      "Best time to post suggestions",
      "Custom branding",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Agency",
    price: "$49",
    period: "/mo",
    description: "For agencies and teams",
    features: [
      "Unlimited social accounts",
      "Unlimited posts",
      "White-label reports",
      "24/7 dedicated support",
      "Full AI suite",
      "Team collaboration",
      "API access",
      "Custom integrations",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-block rounded-full bg-purple-100 px-4 py-2 text-[#7C3AED]">
            Pricing
          </div>
          <h2 className="text-3xl font-semibold text-gray-900 md:text-4xl">
            Simple, <span className="text-[#7C3AED]">transparent pricing</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-600">
            Start free, upgrade as you grow. No hidden fees.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative rounded-3xl p-8 transition ${
                plan.highlighted
                  ? "scale-[1.02] border-2 border-[#7C3AED] shadow-2xl"
                  : "border border-gray-200 shadow-lg"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#A78BFA] px-4 py-1 text-sm text-white">
                  <Sparkles className="h-3 w-3" />
                  Most Popular
                </div>
              )}

              <div className="mb-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900">{plan.name}</h3>
                <p className="mt-2 text-sm text-gray-500">{plan.description}</p>
              </div>

              <div className="mb-8 text-center">
                <span className="text-5xl font-semibold text-gray-900">{plan.price}</span>
                {plan.period && <span className="text-gray-500">{plan.period}</span>}
              </div>

              <ul className="mb-8 space-y-4 text-sm text-gray-700">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-purple-100">
                      <Check className="h-3 w-3 text-[#7C3AED]" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                size="lg"
                variant={plan.highlighted ? "primary" : "outline"}
                className={plan.highlighted ? "" : "text-gray-900"}
              >
                {plan.cta}
              </Button>
            </Card>
          ))}
        </div>

        <p className="mt-12 text-center text-gray-600">
          All plans include a 7-day free trial. No credit card required.
        </p>
      </div>
    </section>
  );
}
