import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";

const services = [
  { icon: "🛋️", title: "Furniture Removal", desc: "Couches, beds, tables, dressers — we load it all." },
  { icon: "🧊", title: "Appliance Removal", desc: "Fridges, washers, dryers, stoves, and more." },
  { icon: "🏠", title: "Garage Cleanouts", desc: "Clear out years of clutter in a single haul." },
  { icon: "🪣", title: "Basement Cleanouts", desc: "Box by box or full load — we handle it all." },
  { icon: "🏢", title: "Apartment Cleanouts", desc: "Moving out? We'll take care of what's left behind." },
  { icon: "🌿", title: "Yard Debris", desc: "Branches, brush, mulch, and landscape waste." },
  { icon: "🧱", title: "Construction Debris", desc: "Drywall, wood, tiles, roofing scraps, and more." },
  { icon: "📦", title: "Move-Out Junk", desc: "Leaving furniture or boxes? We've got it." },
  { icon: "🏡", title: "Estate Cleanouts", desc: "Respectful, thorough cleanouts for any home." },
  { icon: "💼", title: "Office Junk Removal", desc: "Desks, chairs, electronics, and office clutter." },
];

const pricing = [
  {
    name: "Mini Haul",
    label: "1/4 Trailer Load",
    price: "$149",
    best: "Small cleanouts, a few bulky items, bags & boxes, small furniture.",
    popular: false,
  },
  {
    name: "Half Haul",
    label: "1/2 Trailer Load",
    price: "$299",
    best: "Apartment cleanouts, garage junk, multiple furniture pieces, yard debris.",
    popular: true,
  },
  {
    name: "Full Haul",
    label: "Full Trailer Load",
    price: "$499",
    best: "Estate cleanouts, construction debris, full garage/basement cleanouts.",
    popular: false,
  },
];

const testimonials = [
  {
    name: "Maria T.",
    location: "Homeowner",
    body: "Hassan showed up on time, loaded everything without any fuss, and left the area cleaner than he found it. Will 100% be calling again.",
    rating: 5,
  },
  {
    name: "Derek R.",
    location: "Property Manager",
    body: "I manage several rental units and HassanHauledit is my go-to for move-out cleanouts. Fast, affordable, and always professional.",
    rating: 5,
  },
  {
    name: "Linda K.",
    location: "Estate Cleanout",
    body: "We had an estate cleanout that seemed overwhelming. The team made it easy and respectful. Couldn't have asked for better service.",
    rating: 5,
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Request Your Quote",
    desc: "Fill out our quick form or give us a call. Tell us what you've got and we'll get back to you fast — often same day.",
  },
  {
    step: "02",
    title: "Schedule Your Pickup",
    desc: "We'll confirm a time that works for you. Same-day and next-day slots are available in most areas.",
  },
  {
    step: "03",
    title: "We Haul It Away",
    desc: "Our team shows up on time, loads everything, and leaves the space clean. You don't lift a finger.",
  },
];

const whyUs = [
  { icon: "⚡", title: "Fast Response", desc: "We reply quickly and offer same-day or next-day pickups when available." },
  { icon: "💰", title: "Fair Pricing", desc: "Simple, transparent trailer-based pricing with no surprise fees." },
  { icon: "🤝", title: "Clean & Respectful", desc: "We treat your home with care. No mess, no damage, no attitude." },
  { icon: "🛡️", title: "Licensed & Insured", desc: "You're covered. We operate professionally on every single job." },
];

const faqs = [
  {
    q: "How does pricing work?",
    a: "Our pricing is based on trailer load size — Mini (1/4 load), Half, or Full. Final price may vary based on weight, item type, labor required, stairs, and disposal fees. We always confirm pricing before we start.",
  },
  {
    q: "Do I need to move items outside?",
    a: "Nope! We handle the heavy lifting. Just point to what needs to go and we'll take care of the rest — inside the home, garage, or basement.",
  },
  {
    q: "Can you remove heavy items?",
    a: "Yes. We handle heavy furniture, appliances, and construction debris regularly. Additional fees may apply for extra-heavy materials like concrete or pianos.",
  },
  {
    q: "Do you offer same-day pickup?",
    a: "We do our best! Same-day availability depends on our schedule. Reach out early and we'll do everything we can to make it work.",
  },
  {
    q: "What items can't you take?",
    a: "We can't haul hazardous waste, chemical drums, or asbestos materials. Some items like paint, tires, or batteries may carry additional disposal fees. Ask us when you book.",
  },
  {
    q: "Can I send photos for a quote?",
    a: "Yes — and we encourage it! Photos help us give you an accurate quote faster. Use the contact form to describe your job and attach photos if possible.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-stone-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(249,115,22,0.12),_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(249,115,22,0.06),_transparent_50%)]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 text-center">
          <div className="inline-flex items-center gap-2 bg-stone-800/80 border border-stone-700 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-semibold text-stone-300 tracking-wide">
              Same-Day Pickup Available
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none text-stone-50 mb-2">
            Junk Gone Fast.
          </h1>
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none">
            <span className="text-orange-500">Hassan</span>
            <span className="text-stone-300"> Hauled It.</span>
          </h2>

          <p className="mt-8 text-lg md:text-xl text-stone-400 max-w-2xl mx-auto leading-relaxed">
            Local junk removal with simple pricing, fast response, and no hassle.
            You&apos;ve got junk. We&apos;ve got a trailer. Let&apos;s make it disappear.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="bg-orange-500 hover:bg-orange-400 text-white font-bold uppercase tracking-wide px-8 py-4 rounded-sm transition-all duration-200 hover:shadow-xl hover:shadow-orange-500/30 text-base w-full sm:w-auto text-center"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/pricing"
              className="border border-stone-600 hover:border-stone-400 text-stone-300 hover:text-stone-50 font-bold uppercase tracking-wide px-8 py-4 rounded-sm transition-all duration-200 text-base w-full sm:w-auto text-center"
            >
              See Pricing
            </Link>
          </div>

          <div className="mt-14 flex flex-wrap items-center justify-center gap-8 text-sm text-stone-500">
            {["Free Quotes", "Licensed & Insured", "No Hidden Fees", "Locally Owned"].map((badge) => (
              <div key={badge} className="flex items-center gap-2">
                <span className="text-orange-500">✓</span>
                <span>{badge}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-stone-600">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-stone-600 to-transparent" />
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-stone-950 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold uppercase tracking-widest text-orange-500 mb-3 block">
              Simple Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-stone-50">
              How It Works
            </h2>
            <p className="mt-4 text-stone-400 max-w-xl mx-auto">
              Three easy steps to a clutter-free space.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorks.map(({ step, title, desc }) => (
              <div
                key={step}
                className="relative bg-stone-900 border border-stone-800 rounded-sm p-8 hover:border-stone-700 transition-all duration-200 group"
              >
                <span className="text-6xl font-black text-stone-800 group-hover:text-stone-700 transition-colors duration-200 leading-none block mb-4">
                  {step}
                </span>
                <div className="w-10 h-0.5 bg-orange-500 mb-4" />
                <h3 className="text-xl font-bold text-stone-50 mb-3">{title}</h3>
                <p className="text-stone-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Remove */}
      <section className="bg-stone-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold uppercase tracking-widest text-orange-500 mb-3 block">
              Full-Service Removal
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-stone-50">
              What We Remove
            </h2>
            <p className="mt-4 text-stone-400 max-w-xl mx-auto">
              If you can point to it, we can haul it. Here&apos;s what we handle every day.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {services.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="bg-stone-950 border border-stone-800 p-5 rounded-sm group hover:border-orange-500/40 hover:bg-stone-900 transition-all duration-200 cursor-default"
              >
                <div className="text-3xl mb-3">{icon}</div>
                <h3 className="text-stone-50 font-bold text-sm mb-1">{title}</h3>
                <p className="text-stone-500 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="bg-stone-950 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold uppercase tracking-widest text-orange-500 mb-3 block">
              Simple Pricing
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-stone-50">
              Trailer-Based Pricing
            </h2>
            <p className="mt-4 text-stone-400 max-w-xl mx-auto">
              No hourly rates. No surprise bills. Pick your load size and we handle the rest.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricing.map(({ name, label, price, best, popular }) => (
              <div
                key={name}
                className={`relative bg-stone-900 rounded-sm p-8 flex flex-col transition-all duration-200 hover:shadow-xl border-2 ${
                  popular
                    ? "border-orange-500 hover:shadow-orange-500/10"
                    : "border-stone-800 hover:border-stone-700 hover:shadow-black/50"
                }`}
              >
                {popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="bg-orange-500 text-white text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full whitespace-nowrap">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-2xl font-black text-stone-50 mb-1">{name}</h3>
                  <span className="text-sm font-semibold text-orange-500 uppercase tracking-wide">
                    {label}
                  </span>
                </div>

                <div className="mb-6">
                  <span className="text-sm text-stone-500 font-semibold">Starting at</span>
                  <div className="text-5xl font-black text-stone-50 mt-1">{price}</div>
                </div>

                <p className="text-stone-400 text-sm leading-relaxed mb-8 flex-1">
                  <span className="font-semibold text-stone-300">Best for:</span> {best}
                </p>

                <Link
                  href="/contact"
                  className={`w-full text-center font-bold uppercase tracking-wide text-sm py-3 rounded-sm transition-all duration-200 ${
                    popular
                      ? "bg-orange-500 hover:bg-orange-400 text-white hover:shadow-lg hover:shadow-orange-500/25"
                      : "border border-stone-700 hover:border-stone-500 text-stone-300 hover:text-stone-50"
                  }`}
                >
                  Book This Haul
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-stone-500 text-sm mb-4">
              Final pricing depends on weight, item type, labor, stairs, and disposal fees.
            </p>
            <Link
              href="/pricing"
              className="text-orange-500 hover:text-orange-400 text-sm font-semibold transition-colors duration-200"
            >
              View full pricing details →
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-stone-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-orange-500 mb-3 block">
                Why HassanHauledit
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-stone-50 mb-6">
                The junk removal company that actually shows up.
              </h2>
              <p className="text-stone-400 leading-relaxed mb-8">
                We built HassanHauledit on a simple idea: make junk removal easy, honest, and worth your time.
                No runaround, no hidden fees, no waiting around all day. Just a truck, a crew, and a job done right.
              </p>
              <Link
                href="/our-story"
                className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 font-semibold transition-colors duration-200"
              >
                Read our story <span>→</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whyUs.map(({ icon, title, desc }) => (
                <div
                  key={title}
                  className="bg-stone-950 border border-stone-800 p-6 rounded-sm hover:border-stone-700 transition-all duration-200"
                >
                  <div className="text-2xl mb-3">{icon}</div>
                  <h3 className="font-bold text-stone-50 mb-2">{title}</h3>
                  <p className="text-stone-400 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-stone-950 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold uppercase tracking-widest text-orange-500 mb-3 block">
              Customer Reviews
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-stone-50">
              Don&apos;t take our word for it
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map(({ name, location, body, rating }) => (
              <div
                key={name}
                className="bg-stone-900 border border-stone-800 p-8 rounded-sm hover:border-stone-700 transition-all duration-200"
              >
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: rating }).map((_, i) => (
                    <span key={i} className="text-orange-500 text-lg">★</span>
                  ))}
                </div>
                <p className="text-stone-300 leading-relaxed mb-6 text-sm">&ldquo;{body}&rdquo;</p>
                <div>
                  <div className="font-bold text-stone-50 text-sm">{name}</div>
                  <div className="text-stone-500 text-xs">{location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-stone-900 py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold uppercase tracking-widest text-orange-500 mb-3 block">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-stone-50">
              Common Questions
            </h2>
          </div>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-orange-500 py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-4 leading-tight">
            From Cluttered to Cleared — Fast.
          </h2>
          <p className="text-orange-100 text-lg mb-10 max-w-xl mx-auto">
            Ready to reclaim your space? Get a free, no-obligation quote today and we&apos;ll
            get back to you faster than you can say &ldquo;haul it away.&rdquo;
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-orange-500 hover:bg-stone-50 font-bold uppercase tracking-wide px-8 py-4 rounded-sm transition-all duration-200 text-base w-full sm:w-auto text-center shadow-xl"
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
