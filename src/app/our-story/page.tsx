import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Story | HassanHauledit",
  description:
    "Learn how HassanHauledit was built on hard work, honesty, and a simple belief that junk removal should be easy, fast, and stress-free for every customer.",
};

const values = [
  {
    icon: "⚡",
    title: "Speed",
    desc: "We respond fast, show up on time, and get the job done efficiently. Your time matters.",
  },
  {
    icon: "🤝",
    title: "Honesty",
    desc: "What we quote is what you pay. No bait-and-switch. No invoicing surprises after the haul.",
  },
  {
    icon: "💰",
    title: "Fair Pricing",
    desc: "Simple, transparent trailer-based pricing that anyone can understand. No hidden fees.",
  },
  {
    icon: "✨",
    title: "Clean Service",
    desc: "We treat every home with respect — no scrapes, no mess left behind, no attitude.",
  },
];

const milestones = [
  {
    year: "The Beginning",
    title: "One trailer. One mission.",
    desc: "HassanHauledit started with a simple observation: people have too much junk and too little help getting rid of it. Hassan loaded up a trailer and started making the calls other companies wouldn't.",
  },
  {
    year: "Building Trust",
    title: "Word spread fast.",
    desc: "Happy customers became repeat customers. Neighbors told neighbors. The phone kept ringing — not because of fancy marketing, but because the work spoke for itself. On time. Clean. Honest.",
  },
  {
    year: "Growing the Business",
    title: "Bigger jobs. Same standards.",
    desc: "From single-item pickups to full estate cleanouts, we scaled without cutting corners. Every job, big or small, gets the same attention to detail and the same commitment to fair pricing.",
  },
  {
    year: "Today",
    title: "Your trusted local hauler.",
    desc: "HassanHauledit is your go-to junk removal service. We haul for homeowners, renters, landlords, realtors, and businesses — whoever needs the clutter gone, we're on it.",
  },
];

export default function OurStoryPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-stone-900 pt-36 pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(249,115,22,0.08),_transparent_50%)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-orange-500 mb-4 block">
            Our Story
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-stone-50 mb-6 leading-tight">
            Built on Hard Work.
            <br />
            <span className="text-orange-500">Delivered With Pride.</span>
          </h1>
          <p className="text-stone-400 text-lg max-w-2xl mx-auto leading-relaxed">
            HassanHauledit isn&apos;t a franchise or a big national chain. It&apos;s a locally owned,
            locally operated junk removal service built from the ground up — one haul at a time.
          </p>
        </div>
      </section>

      {/* Main Story */}
      <section className="bg-stone-950 py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-orange-500 mb-4 block">
                How It Started
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-stone-50 mb-6">
                You point. We haul. That&apos;s always been the idea.
              </h2>
              <div className="space-y-5 text-stone-400 leading-relaxed">
                <p>
                  HassanHauledit was born from a straightforward frustration: junk removal companies that
                  were unreliable, overpriced, or just plain hard to deal with. Too many no-shows. Too many
                  vague quotes that ballooned after the job was done. Too little respect for the customer&apos;s time and home.
                </p>
                <p>
                  So we decided to do it differently. Starting with a single trailer and a commitment to showing up
                  every time, we built a reputation the old-fashioned way — by doing the work, doing it right,
                  and charging fairly for it.
                </p>
                <p>
                  The name? It&apos;s a nod to a simple truth: when you book with us, it gets done.
                  Hassan hauled it. That&apos;s the whole story.
                </p>
              </div>
            </div>

            <div className="bg-stone-900 border border-stone-800 rounded-sm p-8">
              <h3 className="text-xl font-bold text-stone-50 mb-6">By the Numbers</h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { stat: "500+", label: "Jobs Completed" },
                  { stat: "5★", label: "Average Rating" },
                  { stat: "Same Day", label: "Avg. Response Time" },
                  { stat: "100%", label: "Locally Operated" },
                ].map(({ stat, label }) => (
                  <div key={label} className="text-center">
                    <div className="text-4xl font-black text-orange-500 mb-1">{stat}</div>
                    <div className="text-stone-400 text-sm">{label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-stone-800">
                <p className="text-stone-400 text-sm leading-relaxed italic">
                  &ldquo;I don&apos;t just haul junk. I solve problems. When someone calls me, it&apos;s usually
                  because they&apos;ve been putting something off or they&apos;re in the middle of a stressful
                  situation. My job is to make that one part easy.&rdquo;
                </p>
                <div className="mt-4">
                  <div className="font-bold text-stone-200 text-sm">Hassan</div>
                  <div className="text-stone-500 text-xs">Founder, HassanHauledit</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-stone-900 py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold uppercase tracking-widest text-orange-500 mb-3 block">
              Our Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-stone-50">
              How We Got Here
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-stone-800 md:left-1/2" />

            <div className="flex flex-col gap-12">
              {milestones.map(({ year, title, desc }, i) => (
                <div
                  key={year}
                  className={`relative flex gap-8 md:gap-0 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 -translate-x-1/2 md:left-1/2 top-3 w-3 h-3 rounded-full bg-orange-500 flex-shrink-0 z-10" />

                  {/* Content */}
                  <div
                    className={`pl-12 md:pl-0 md:w-1/2 ${
                      i % 2 === 0 ? "md:pr-10 md:text-right" : "md:pl-10"
                    }`}
                  >
                    <span className="text-xs font-bold uppercase tracking-widest text-orange-500 mb-2 block">
                      {year}
                    </span>
                    <h3 className="text-lg font-bold text-stone-50 mb-2">{title}</h3>
                    <p className="text-stone-400 text-sm leading-relaxed">{desc}</p>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-stone-950 py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold uppercase tracking-widest text-orange-500 mb-3 block">
              What We Stand For
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-stone-50">
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="bg-stone-900 border border-stone-800 p-6 rounded-sm text-center hover:border-orange-500/30 transition-all duration-200"
              >
                <div className="text-4xl mb-4">{icon}</div>
                <h3 className="text-stone-50 font-bold text-lg mb-3">{title}</h3>
                <p className="text-stone-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community / Local commitment */}
      <section className="bg-stone-900 py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-orange-500 mb-4 block">
                Community First
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-stone-50 mb-5">
                Locally owned. Community focused.
              </h2>
              <div className="space-y-4 text-stone-400 leading-relaxed">
                <p>
                  We&apos;re not a franchise. We don&apos;t subcontract your job to a stranger. When you book with HassanHauledit,
                  you know exactly who&apos;s showing up — and that person is invested in doing the job right.
                </p>
                <p>
                  We care about our community because we live here too. When we can, we donate usable items to local
                  charities, repurpose materials responsibly, and keep as much out of the landfill as possible.
                  Doing good work means doing it responsibly.
                </p>
                <p>
                  Our goal is simple: be the junk removal company that people in this area actually trust. The kind
                  you&apos;d recommend to your neighbor without hesitation.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {[
                { icon: "🏘️", title: "Locally Operated", desc: "We live and work in the same community we serve. Your business keeps a local family going." },
                { icon: "♻️", title: "Responsible Disposal", desc: "We sort what can be donated or recycled before anything goes to the landfill." },
                { icon: "📞", title: "Real Person Answers", desc: "When you call, you talk to someone who knows your job and can answer your questions." },
                { icon: "🌟", title: "Reputation-Driven", desc: "We earn every review. Our reputation is our marketing — and we protect it on every job." },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="flex gap-4 bg-stone-950 border border-stone-800 p-5 rounded-sm">
                  <span className="text-2xl flex-shrink-0">{icon}</span>
                  <div>
                    <h4 className="font-bold text-stone-50 mb-1">{title}</h4>
                    <p className="text-stone-400 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange-500 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white mb-4">
            Ready to work with us?
          </h2>
          <p className="text-orange-100 mb-8">
            Get a free, no-obligation quote today. We&apos;ll get back to you fast and make the whole thing easy.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-orange-500 hover:bg-stone-50 font-bold uppercase tracking-wide px-8 py-4 rounded-sm transition-all duration-200 shadow-xl text-base w-full sm:w-auto text-center"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/pricing"
              className="border-2 border-white/60 hover:border-white text-white font-bold uppercase tracking-wide px-8 py-4 rounded-sm transition-all duration-200 text-base w-full sm:w-auto text-center"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
