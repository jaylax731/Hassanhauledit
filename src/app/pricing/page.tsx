import type { Metadata } from "next";
import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Pricing & Services | HassanHauledit",
  description:
    "Simple, transparent trailer-based junk removal pricing. Choose Mini, Half, or Full Haul. Starting at $149 with no hidden fees.",
};

const plans = [
  {
    name: "Mini Haul",
    label: "1/4 Trailer Load",
    price: "$149",
    tagline: "Quick & affordable",
    color: "border-stone-700",
    popular: false,
    best: "A few bulky items, small cleanout, bags & boxes, a piece or two of furniture.",
    includes: [
      "Up to 1/4 trailer capacity",
      "In-home pickup included",
      "All labor included",
      "Responsible disposal",
      "Clean-up after haul",
    ],
    examples: [
      "1–3 furniture pieces",
      "Small office cleanout",
      "Bags & boxes",
      "Single appliance",
      "Light yard debris",
    ],
  },
  {
    name: "Half Haul",
    label: "1/2 Trailer Load",
    price: "$299",
    tagline: "Most popular choice",
    color: "border-orange-500",
    popular: true,
    best: "Apartment cleanouts, garage junk, multiple furniture pieces, mixed household items.",
    includes: [
      "Up to 1/2 trailer capacity",
      "In-home pickup included",
      "All labor included",
      "Responsible disposal",
      "Clean-up after haul",
      "Priority scheduling",
    ],
    examples: [
      "Apartment cleanout",
      "Garage cleanout",
      "3–6 furniture pieces",
      "Multiple appliances",
      "Yard debris haul",
    ],
  },
  {
    name: "Full Haul",
    label: "Full Trailer Load",
    price: "$499",
    tagline: "Best value for big jobs",
    color: "border-stone-700",
    popular: false,
    best: "Estate cleanouts, full basement or garage, construction debris, move-out junk.",
    includes: [
      "Full trailer capacity",
      "In-home pickup included",
      "All labor included",
      "Responsible disposal",
      "Clean-up after haul",
      "Priority scheduling",
      "Multi-room coordination",
    ],
    examples: [
      "Full estate cleanout",
      "Basement + garage combo",
      "Construction debris",
      "Move-out full house",
      "Office decommission",
    ],
  },
];

const addOns = [
  { item: "Heavy materials (concrete, dirt, rocks)", note: "Additional fee based on weight" },
  { item: "Mattresses", note: "$25–$50 per mattress (disposal fee)" },
  { item: "Appliances with refrigerant (AC, fridges)", note: "$25–$75 per unit" },
  { item: "Tires", note: "$15–$25 per tire" },
  { item: "Paint / household chemicals", note: "Call for availability — some areas only" },
  { item: "Extra labor (stairs, long carry, narrow access)", note: "Quoted on-site" },
  { item: "Hazardous materials", note: "Not accepted — contact local disposal authority" },
  { item: "Same-day / rush scheduling", note: "Small convenience fee may apply" },
];

const faqs = [
  {
    q: "Are these prices firm or estimates?",
    a: "The prices shown are starting minimums based on load size. Final pricing depends on the actual volume, weight, item type, number of stairs, and any required extra labor. We always confirm the price with you before we begin — no surprises.",
  },
  {
    q: "What if my load falls between sizes?",
    a: "No problem. We'll assess the load on-site and charge the closest matching tier — or a prorated amount if it's clearly between sizes. We're always upfront about it.",
  },
  {
    q: "Do I pay upfront or after the job?",
    a: "We typically collect payment after the job is complete and you're satisfied. We accept cash, Venmo, Zelle, and major credit cards.",
  },
  {
    q: "Is there a minimum job fee?",
    a: "Our minimum service charge is the Mini Haul rate starting at $149. We don't do single-item pickups below that threshold.",
  },
  {
    q: "What areas do you serve?",
    a: "We serve the local area and surrounding towns. Contact us with your address and we'll confirm availability. Travel fees may apply for jobs beyond our standard service radius.",
  },
  {
    q: "Do you donate or recycle any items?",
    a: "Yes! When items are in usable condition, we try to donate them to local charities or recycling programs before sending anything to the landfill. Just let us know if you have any preferences.",
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-stone-900 pt-36 pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(249,115,22,0.10),_transparent_50%)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-orange-500 mb-4 block">
            Transparent Pricing
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-stone-50 mb-5">
            Simple. Fair. <span className="text-orange-500">No Surprises.</span>
          </h1>
          <p className="text-stone-400 text-lg max-w-2xl mx-auto leading-relaxed">
            We price by trailer load — not by the hour. Pick your size, we haul it away, and you only pay
            for what you need. Simple as that.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="bg-stone-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map(({ name, label, price, tagline, color, popular, best, includes, examples }) => (
              <div
                key={name}
                className={`relative bg-stone-900 border-2 ${color} rounded-sm flex flex-col transition-all duration-200 hover:shadow-2xl ${
                  popular ? "hover:shadow-orange-500/10 lg:-mt-4 lg:mb-4" : "hover:shadow-black/50"
                }`}
              >
                {popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="bg-orange-500 text-white text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full whitespace-nowrap">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Header */}
                <div className={`p-8 border-b ${popular ? "border-orange-500/30" : "border-stone-800"}`}>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h2 className="text-2xl font-black text-stone-50">{name}</h2>
                      <span className="text-sm font-semibold text-orange-500 uppercase tracking-wide">
                        {label}
                      </span>
                    </div>
                    <span className="text-xs font-semibold text-stone-500 bg-stone-800 px-2 py-1 rounded">
                      {tagline}
                    </span>
                  </div>

                  <div className="flex items-baseline gap-1 mt-4">
                    <span className="text-stone-500 text-sm font-semibold">Starting at</span>
                  </div>
                  <div className="text-5xl font-black text-stone-50 mb-4">{price}</div>

                  <p className="text-stone-400 text-sm leading-relaxed">
                    <span className="font-semibold text-stone-300">Best for:</span> {best}
                  </p>
                </div>

                {/* What's included */}
                <div className="p-8 flex-1">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-4">
                    What&apos;s Included
                  </h4>
                  <ul className="flex flex-col gap-2 mb-8">
                    {includes.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-stone-300">
                        <span className="text-orange-500 mt-0.5 flex-shrink-0">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <h4 className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-4">
                    Common Examples
                  </h4>
                  <ul className="flex flex-col gap-2">
                    {examples.map((ex) => (
                      <li key={ex} className="flex items-start gap-2 text-sm text-stone-400">
                        <span className="text-stone-600 mt-0.5 flex-shrink-0">—</span>
                        {ex}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="p-8 pt-0">
                  <Link
                    href={`/contact?size=${encodeURIComponent(name)}`}
                    className={`w-full block text-center font-bold uppercase tracking-wide text-sm py-4 rounded-sm transition-all duration-200 ${
                      popular
                        ? "bg-orange-500 hover:bg-orange-400 text-white hover:shadow-lg hover:shadow-orange-500/25"
                        : "border border-stone-700 hover:border-stone-500 text-stone-300 hover:text-stone-50"
                    }`}
                  >
                    Book a {name}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-stone-500 text-sm">
            Not sure what size you need?{" "}
            <Link href="/contact" className="text-orange-500 hover:text-orange-400 transition-colors duration-200">
              Send us a photo and we&apos;ll recommend the right load.
            </Link>
          </p>
        </div>
      </section>

      {/* Add-On Fees */}
      <section className="bg-stone-900 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold uppercase tracking-widest text-orange-500 mb-3 block">
              Additional Fees
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-stone-50 mb-4">
              Add-On & Special Item Fees
            </h2>
            <p className="text-stone-400 max-w-xl mx-auto">
              Some items require extra handling or special disposal. We&apos;ll always tell you upfront
              before adding any additional charges.
            </p>
          </div>

          <div className="bg-stone-950 border border-stone-800 rounded-sm overflow-hidden">
            {addOns.map(({ item, note }, i) => (
              <div
                key={item}
                className={`flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-6 py-4 ${
                  i !== addOns.length - 1 ? "border-b border-stone-800" : ""
                } hover:bg-stone-900 transition-colors duration-150`}
              >
                <span className="text-stone-200 text-sm font-medium">{item}</span>
                <span className="text-stone-400 text-sm flex-shrink-0 sm:text-right">{note}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-stone-800/50 border border-stone-700 rounded-sm">
            <p className="text-stone-400 text-sm text-center">
              <span className="text-orange-500 font-semibold">💡 Pro tip:</span> Send us photos before booking
              and we&apos;ll flag any add-on fees in your quote before you commit.
            </p>
          </div>
        </div>
      </section>

      {/* How We Price */}
      <section className="bg-stone-950 py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-orange-500 mb-3 block">
                Our Pricing Philosophy
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-stone-50 mb-5">
                We price fair. Always.
              </h2>
              <p className="text-stone-400 leading-relaxed mb-4">
                Junk removal pricing can feel confusing. Hourly rates, hidden fees, bait-and-switch quotes —
                we&apos;ve heard the horror stories. That&apos;s why we built a simple system:
                you tell us the load size, we give you a starting price, and we confirm everything in writing before we begin.
              </p>
              <p className="text-stone-400 leading-relaxed">
                If there&apos;s ever a question about pricing, we&apos;ll talk through it on-site before a single item gets loaded.
                No surprises. No awkward conversations after the job.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {[
                { icon: "📏", title: "We Assess the Load", desc: "We look at what you've got before we quote. Load size estimates are confirmed in person." },
                { icon: "🗣️", title: "We Quote Before We Haul", desc: "Final price is confirmed with you before any item is loaded. You approve first." },
                { icon: "💳", title: "Pay After You're Happy", desc: "We collect payment after the job is done and you're satisfied with the result." },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="bg-stone-900 border border-stone-800 p-5 rounded-sm flex gap-4">
                  <span className="text-2xl flex-shrink-0">{icon}</span>
                  <div>
                    <h4 className="font-bold text-stone-50 text-sm mb-1">{title}</h4>
                    <p className="text-stone-400 text-xs leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-stone-900 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold uppercase tracking-widest text-orange-500 mb-3 block">
              Pricing FAQ
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-stone-50">
              Pricing Questions Answered
            </h2>
          </div>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange-500 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white mb-4">
            Ready to get started?
          </h2>
          <p className="text-orange-100 mb-8 max-w-xl mx-auto">
            Send us a message or photo and we&apos;ll send back a custom quote — usually within the hour.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-orange-500 hover:bg-stone-50 font-bold uppercase tracking-wide px-8 py-4 rounded-sm transition-all duration-200 shadow-xl text-base"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}
