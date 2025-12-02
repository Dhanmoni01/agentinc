import Card from "@/components/ui/Card";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import { Clock, TrendingUp, Users, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Content Creator",
    avatar:
      "https://images.unsplash.com/photo-1745434159123-4908d0b9df94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    quote:
      "AgentInc completely transformed how I manage my social media. I've saved 10+ hours weekly and my engagement has doubled.",
    metric: "Saved 10+ hrs weekly",
    icon: Clock,
  },
  {
    name: "Marcus Chen",
    role: "Digital Marketing Manager",
    avatar:
      "https://images.unsplash.com/photo-1672685667592-0392f458f46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    quote:
      "The AI-powered captions are incredible. Our engagement rate jumped from 2.1% to 4.8% in just one month.",
    metric: "128% engagement boost",
    icon: TrendingUp,
  },
  {
    name: "Emily Rodriguez",
    role: "Agency Owner",
    avatar:
      "https://images.unsplash.com/photo-1689600944138-da3b150d9cb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    quote:
      "We manage 20+ client accounts with AgentInc. Automation and analytics let us scale without hiring more staff.",
    metric: "Managing 20+ accounts",
    icon: Users,
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-gradient-to-br from-purple-50 to-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-block rounded-full border border-purple-200 bg-white px-4 py-2 text-[#7C3AED]">
            Testimonials
          </div>
          <h2 className="text-3xl font-semibold text-gray-900 md:text-4xl">
            Loved by <span className="text-[#7C3AED]">thousands</span> of creators
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-600">
            See what our customers have to say about AgentInc.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.name}
              className="rounded-2xl bg-white p-8 shadow-lg transition hover:shadow-xl"
            >
              <div className="mb-6 flex items-center gap-1">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="mb-6 text-gray-700">&quot;{testimonial.quote}&quot;</p>
              <div className="mb-6 flex items-center gap-4">
                <ImageWithFallback
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-purple-100 bg-purple-50 p-3 text-sm text-[#7C3AED]">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#7C3AED] text-white">
                  <testimonial.icon className="h-4 w-4" />
                </span>
                {testimonial.metric}
              </div>
            </Card>
          ))}
        </div>

        <div className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-8 text-center text-gray-600 sm:grid-cols-3">
          <div>
            <div className="text-4xl font-semibold text-gray-900">10K+</div>
            Active Users
          </div>
          <div>
            <div className="text-4xl font-semibold text-gray-900">500K+</div>
            Posts Scheduled
          </div>
          <div>
            <div className="text-4xl font-semibold text-gray-900">4.9/5</div>
            Average Rating
          </div>
        </div>
      </div>
    </section>
  );
}
