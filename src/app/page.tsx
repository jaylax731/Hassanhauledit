import Link from "next/link";
import Image from "next/image";
import BeforeAfter from "@/components/BeforeAfter";
import FAQAccordion from "@/components/FAQAccordion";

const faqs = [
  { q: "How does pricing work?", a: "We price by trailer load size. Final cost depends on volume, weight, and item type. We confirm everything before we start — no surprises." },
  { q: "Do I need to move anything outside?", a: "No. We handle all the lifting, from inside the home, garage, or basement. You just point." },
  { q: "Do you offer same-day pickup?", a: "We do our best. Call or text early and we'll tell you what's available." },
  { q: "What's the difference between junk removal and trailer rental?", a: "Junk removal means we do all the work — we load and haul. Trailer rental means we drop off the trailer, you load it at your pace, and we pick it up and dispose of everything." },
  { q: "What items can't you take?", a: "Hazardous waste, chemicals, and asbestos. Paint, tires, and batteries may carry extra disposal fees." },
  { q: "Can I send photos for a quote?", a: "Yes — and we recommend it. Photos let us give you an accurate number fast. Use the contact form." },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center bg-stone-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(249,115,22,0.10),_transparent_55%)]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 bg-stone-800/80 border border-stone-700 rounded-full px-4 py-1.5 mb-8">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-semibold text-stone-300 tracking-wide">Same-Day Pickup Available</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[0.92] text-stone-50 mb-6">
                Junk Gone.<br />
                <span className="text-orange-500">Same Day.</span>
              </h1>

              <p className="text-stone-400 text-lg leading-relaxed mb-10 max-w-md">
                Local junk removal and trailer rentals. Simple pricing. Real results.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact"
                  className="bg-orange-500 hover:bg-orange-400 text-white font-bold uppercase tracking-wide px-8 py-4 rounded-sm transition-all duration-200 hover:shadow-xl hover:shadow-orange-500/25 text-sm text-center"
                >
                  Get a Free Quote
                </Link>
                <a href="tel:+15164766455"
                  className="border border-stone-700 hover:border-stone-500 text-stone-300 hover:text-stone-50 font-bold uppercase tracking-wide px-8 py-4 rounded-sm transition-all duration-200 text-sm text-center"
                >
                  Call Now — 516-476-6455
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-6 text-sm text-stone-500">
                {["Free Quotes", "Licensed & Insured", "No Hidden Fees", "Locally Owned"].map((b) => (
                  <div key={b} className="flex items-center gap-2">
                    <span className="text-orange-500">✓</span> {b}
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Before/After preview */}
            <div className="relative">
              <BeforeAfter />
            </div>
          </div>
        </div>
      </section>

      {/* ── Two Services ── */}
      <section className="bg-stone-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold uppercase tracking-widest text-orange-500 mb-3 block">Two Ways to Haul</span>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-stone-50">Pick Your Option</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Junk Removal */}
            <div className="bg-stone-900 border-2 border-orange-500 rounded-sm p-8 flex flex-col">
              <div className="text-4xl mb-4">🚛</div>
              <h3 className="text-2xl font-black text-stone-50 mb-2">Junk Removal</h3>
              <p className="text-stone-400 text-sm mb-6">We do all the work.</p>
              <ul className="flex flex-col gap-3 flex-1 mb-8">
                {["We do the lifting", "We load everything", "We haul it away", "Fastest option", "Great for large cleanouts"].map((i) => (
                  <li key={i} className="flex items-center gap-3 text-stone-300 text-sm">
                    <span className="text-orange-500 flex-shrink-0">✓</span> {i}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="block text-center bg-orange-500 hover:bg-orange-400 text-white font-bold uppercase tracking-wide text-sm py-3.5 rounded-sm transition-all duration-200">
                Get a Quote
              </Link>
            </div>

            {/* Trailer Rental */}
            <div className="bg-stone-900 border-2 border-stone-700 rounded-sm p-8 flex flex-col hover:border-stone-600 transition-all duration-200">
              <div className="text-4xl mb-4">🏗️</div>
              <h3 className="text-2xl font-black text-stone-50 mb-2">Trailer Rental</h3>
              <p className="text-stone-400 text-sm mb-6">Load it yourself. We handle the rest.</p>
              <ul className="flex flex-col gap-3 flex-1 mb-8">
                {["We drop off the trailer", "You load at your pace", "Keep it overnight", "We pick up & dispose", "Great for DIY projects"].map((i) => (
                  <li key={i} className="flex items-center gap-3 text-stone-300 text-sm">
                    <span className="text-orange-500 flex-shrink-0">✓</span> {i}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="block text-center border border-stone-700 hover:border-stone-500 text-stone-300 hover:text-stone-50 font-bold uppercase tracking-wide text-sm py-3.5 rounded-sm transition-all duration-200">
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Before & After ── */}
      <section className="bg-stone-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-orange-500 mb-4 block">Real Jobs. Real Results.</span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-stone-50 leading-tight mb-6">
                From Cluttered<br />to Cleared.
              </h2>
              <p className="text-stone-400 leading-relaxed mb-8">
                This garage was packed floor-to-ceiling. One call. One haul. Done.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[{ stat: "Same Day", label: "Turnaround" }, { stat: "1 Call", label: "To Book" }, { stat: "0", label: "Items Left Behind" }, { stat: "100%", label: "Satisfaction" }].map(({ stat, label }) => (
                  <div key={label} className="bg-stone-950 border border-stone-800 p-4 rounded-sm text-center">
                    <div className="text-2xl font-black text-orange-500">{stat}</div>
                    <div className="text-stone-500 text-xs mt-1">{label}</div>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="inline-block bg-orange-500 hover:bg-orange-400 text-white font-bold uppercase tracking-wide px-8 py-4 rounded-sm transition-all duration-200 text-sm hover:shadow-xl hover:shadow-orange-500/25">
                Book Your Cleanout
              </Link>
            </div>
            <div>
              <BeforeAfter />
            </div>
          </div>
        </div>
      </section>

      {/* ── Trailer Photo / Weight Warning ── */}
      <section className="bg-stone-950 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Photo */}
            <div className="relative rounded-sm overflow-hidden" style={{ aspectRatio: "4/3" }}>
              <Image
                src="/trailer.jpg"
                alt="Trailer loaded with concrete and heavy debris"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 to-transparent" />
              <div className="absolute bottom-4 left-4 bg-orange-500 text-white text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-sm">
                Concrete Haul — Weight Matters
              </div>
            </div>

            {/* Text */}
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-orange-500 mb-4 block">Heavy Materials</span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-stone-50 leading-tight mb-6">
                Weight Changes<br />the Price.
              </h2>
              <p className="text-stone-400 leading-relaxed mb-6">
                Dump fees are calculated by weight — not just volume. Heavy materials cost more to dispose of. We'll always tell you upfront.
              </p>

              <div className="space-y-3 mb-8">
                <div className="text-stone-400 text-sm font-semibold uppercase tracking-widest mb-3">Surcharges may apply for:</div>
                {["Concrete, brick & stone", "Dirt & roofing material", "Mattresses & appliances", "Tires & paint", "Pianos & safes"].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-stone-300 text-sm">
                    <span className="text-orange-500 flex-shrink-0">⚠</span> {item}
                  </div>
                ))}
              </div>

              <div className="bg-stone-900 border border-orange-500/30 rounded-sm p-5">
                <p className="text-stone-300 text-sm leading-relaxed">
                  <span className="text-orange-500 font-bold">Send a photo.</span> We&apos;ll give you an accurate quote before we show up — no surprises on the day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section className="bg-stone-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold uppercase tracking-widest text-orange-500 mb-3 block">Transparent Pricing</span>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-stone-50">How We Price It</h2>
            <p className="mt-4 text-stone-400 max-w-md mx-auto">By trailer load. No hourly rates.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Mini Haul", label: "¼ Trailer", price: "$149", best: "A few items, small cleanout", popular: false },
              { name: "Half Haul", label: "½ Trailer", price: "$299", best: "Apartment, garage, mixed load", popular: true },
              { name: "Full Haul", label: "Full Trailer", price: "$499", best: "Estate, basement, full cleanout", popular: false },
            ].map(({ name, label, price, best, popular }) => (
              <div key={name}
                className={`relative bg-stone-950 rounded-sm p-8 flex flex-col border-2 transition-all duration-200 ${popular ? "border-orange-500" : "border-stone-800 hover:border-stone-700"}`}
              >
                {popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="bg-orange-500 text-white text-xs font-black uppercase tracking-widest px-4 py-1 rounded-full whitespace-nowrap">Most Popular</span>
                  </div>
                )}
                <div className="mb-5">
                  <h3 className="text-xl font-black text-stone-50">{name}</h3>
                  <span className="text-orange-500 text-xs font-bold uppercase tracking-wide">{label}</span>
                </div>
                <div className="mb-5">
                  <span className="text-stone-500 text-xs">Starting at</span>
                  <div className="text-5xl font-black text-stone-50">{price}</div>
                </div>
                <p className="text-stone-500 text-sm mb-8 flex-1">{best}</p>
                <Link href="/contact"
                  className={`w-full text-center font-bold uppercase tracking-wide text-sm py-3 rounded-sm transition-all duration-200 ${popular ? "bg-orange-500 hover:bg-orange-400 text-white" : "border border-stone-700 hover:border-stone-500 text-stone-300 hover:text-stone-50"}`}
                >
                  Book This Haul
                </Link>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-stone-500 text-sm">
            Final pricing depends on weight, item type, and labor. Heavy materials may carry additional fees.{" "}
            <Link href="/pricing" className="text-orange-500 hover:text-orange-400">Full details →</Link>
          </p>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="bg-stone-950 py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold uppercase tracking-widest text-orange-500 mb-3 block">The Process</span>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-stone-50">Three Steps. Done.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Request a Quote", desc: "Call, text, or fill out the form. Send a photo for the fastest response." },
              { step: "02", title: "We Schedule Pickup", desc: "Same-day or next-day in most cases. We confirm before we show up." },
              { step: "03", title: "It's Gone", desc: "We load everything, haul it away, and leave the space clean." },
            ].map(({ step, title, desc }) => (
              <div key={step} className="bg-stone-900 border border-stone-800 rounded-sm p-8 group hover:border-stone-700 transition-all duration-200">
                <div className="text-5xl font-black text-stone-800 group-hover:text-stone-700 transition-colors duration-200 mb-4 leading-none">{step}</div>
                <div className="w-8 h-0.5 bg-orange-500 mb-4" />
                <h3 className="text-lg font-bold text-stone-50 mb-2">{title}</h3>
                <p className="text-stone-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="bg-stone-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold uppercase tracking-widest text-orange-500 mb-3 block">Reviews</span>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-stone-50">What Customers Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Maria T.", label: "Homeowner", body: "Showed up on time, loaded everything, left the place cleaner than they found it. Will 100% call again." },
              { name: "Derek R.", label: "Property Manager", body: "My go-to for move-out cleanouts. Fast, fair, and always professional. Couldn't run my units without them." },
              { name: "Linda K.", label: "Estate Cleanout", body: "What seemed overwhelming was done in a few hours. Respectful team. Fair price. Highly recommend." },
            ].map(({ name, label, body }) => (
              <div key={name} className="bg-stone-950 border border-stone-800 p-8 rounded-sm hover:border-stone-700 transition-all duration-200">
                <div className="flex gap-0.5 mb-5">
                  {[1,2,3,4,5].map((i) => <span key={i} className="text-orange-500">★</span>)}
                </div>
                <p className="text-stone-300 text-sm leading-relaxed mb-6">&ldquo;{body}&rdquo;</p>
                <div className="font-bold text-stone-50 text-sm">{name}</div>
                <div className="text-stone-500 text-xs">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-stone-950 py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold uppercase tracking-widest text-orange-500 mb-3 block">Questions</span>
            <h2 className="text-3xl font-black tracking-tight text-stone-50">Common Questions</h2>
          </div>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="bg-orange-500 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-4 leading-tight">
            Ready to Clear It Out?
          </h2>
          <p className="text-orange-100 text-lg mb-10">
            Call, text, or get a quote online. We&apos;ll take care of the rest.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact"
              className="bg-white text-orange-500 hover:bg-stone-50 font-bold uppercase tracking-wide px-8 py-4 rounded-sm transition-all duration-200 text-sm w-full sm:w-auto text-center shadow-xl"
            >
              Get a Free Quote
            </Link>
            <a href="tel:+15164766455"
              className="border-2 border-white/60 hover:border-white text-white font-bold uppercase tracking-wide px-8 py-4 rounded-sm transition-all duration-200 text-sm w-full sm:w-auto text-center"
            >
              Call 516-476-6455
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
