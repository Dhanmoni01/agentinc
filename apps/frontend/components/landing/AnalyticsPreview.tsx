import Card from "@/components/ui/Card";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import { TrendingUp, Eye, Heart, Share2, MessageCircle } from "lucide-react";
const chartData = [
  { day: "Mon", engagement: 240 },
  { day: "Tue", engagement: 380 },
  { day: "Wed", engagement: 290 },
  { day: "Thu", engagement: 470 },
  { day: "Fri", engagement: 520 },
  { day: "Sat", engagement: 690 },
  { day: "Sun", engagement: 580 },
];

const topPosts = [
  {
    id: 1,
    thumbnail:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=400&fit=crop",
    platform: "Instagram",
    engagement: "4.8K",
    color: "#E1306C",
  },
  {
    id: 2,
    thumbnail:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=400&fit=crop",
    platform: "Facebook",
    engagement: "3.2K",
    color: "#1877F2",
  },
  {
    id: 3,
    thumbnail:
      "https://images.unsplash.com/photo-1607695208254-b69d673f18ca?w=400&h=400&fit=crop",
    platform: "Instagram",
    engagement: "2.9K",
    color: "#E1306C",
  },
];

export function AnalyticsPreview() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-block rounded-full bg-purple-100 px-4 py-2 text-[#7C3AED]">
            Analytics
          </div>
          <h2 className="text-3xl font-semibold text-gray-900 md:text-4xl">
            Insights that <span className="text-[#7C3AED]">drive growth</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-600">
            Real-time analytics dashboard to track what matters most.
          </p>
        </div>

        <Card className="rounded-3xl border-2 border-purple-100 bg-gradient-to-br from-white to-purple-50 p-8 shadow-2xl">
          <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            <Stat icon={Eye} label="Total Reach" value="127.5K" delta="+24% this week" />
            <Stat icon={Heart} label="Likes" value="18.2K" delta="+18% this week" />
            <Stat
              icon={MessageCircle}
              label="Comments"
              value="2.4K"
              delta="+32% this week"
            />
            <Stat icon={Share2} label="Shares" value="1.8K" delta="+45% this week" />
          </div>

          <div className="mb-6 rounded-2xl bg-white p-6 shadow-sm">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-gray-900">Engagement Trends</h3>
              <span className="text-sm text-gray-500">Last 7 days</span>
            </div>
            <div className="h-64">
              <div className="flex h-full items-end justify-between gap-3 rounded-2xl bg-gradient-to-b from-white to-purple-50 p-6">
                {chartData.map((point) => (
                  <div key={point.day} className="flex flex-1 flex-col items-center">
                    <div className="flex h-full w-full items-end justify-center">
                      <div
                        className="w-8 rounded-full bg-gradient-to-b from-[#7C3AED] to-[#9B5CFF]"
                        style={{ height: `${(point.engagement / 700) * 100}%` }}
                      />
                    </div>
                    <span className="mt-2 text-xs font-medium text-gray-500">{point.day}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-gray-900">Top Performing Posts</h3>
            <div className="grid gap-4 md:grid-cols-3">
              {topPosts.map((post) => (
                <div key={post.id} className="group relative">
                  <div className="aspect-square overflow-hidden rounded-xl bg-gray-200">
                    <ImageWithFallback
                      src={post.thumbnail}
                      alt="Top post"
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 flex items-end rounded-xl bg-gradient-to-t from-black/60 to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="text-white">
                      <div className="mb-1 flex items-center gap-1 text-xs">
                        <span
                          className="h-2 w-2 rounded-full"
                          style={{ backgroundColor: post.color }}
                        />
                        {post.platform}
                      </div>
                      <div className="flex items-center gap-1 text-sm">
                        <Heart className="h-3 w-3" />
                        {post.engagement}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}

function Stat({
  icon: Icon,
  label,
  value,
  delta,
}: {
  icon: typeof Eye;
  label: string;
  value: string;
  delta: string;
}) {
  return (
    <div className="rounded-2xl bg-white p-4 shadow-sm">
      <div className="mb-2 flex items-center gap-2">
        <Icon className="h-5 w-5 text-purple-500" />
        <span className="text-sm text-gray-500">{label}</span>
      </div>
      <div className="text-2xl font-semibold text-gray-900">{value}</div>
      <div className="mt-1 flex items-center gap-1 text-sm text-green-600">
        <TrendingUp className="h-3 w-3" />
        {delta}
      </div>
    </div>
  );
}
