import Link from "next/link";
import Image from "next/image";
import BeforeAfter from "@/components/BeforeAfter";
import AnimatedStats from "@/components/AnimatedStats";
import FAQAccordion from "@/components/FAQAccordion";

// ── Data ──────────────────────────────────────────────────────────────────────

const whatWeRemove = [
  { icon: "🛋️", label: "Furniture" },
  { icon: "🧊", label: "Appliances" },
  { icon: "🧱", label: "Construction Debris" },
  { icon: "🏠", label: "Garage Cleanouts" },
  { icon: "🪣", label: "Basement Cleanouts" },
  { icon: "🏡", label: "Estate Cleanouts" },
  { icon: "🌿", label: "Yard Waste" },
  { icon: "⛏️", label: "Concrete & Brick" },
  { icon: "🛁", label: "Hot Tubs" },
  { icon: "🏚️", label: "Sheds" },
  { icon: "🛏️", label: "Mattresses" },
  { icon: "📦", label: "Household Junk" },
];

const gallery = [
  {
    src: "/trailer1.jpg",
    title: "Metal & Scrap Removal",
    location: "Long Island",
    desc: "Full trailer load of scrap metal, pipes, and salvage material hauled and disposed of in a single visit.",
  },
  {
    src: "/trailer2.jpg",
    title: "Construction Debris",
    location: "Queens",
    desc: "Post-renovation wood, drywall, and mixed debris removed quickly. Property cleared the same day.",
  },
  {
    src: "/trailer4.jpg",
    title: "Furniture & Wood Removal",
    location: "West Babylon",
    desc: "Full load of furniture, wood pieces, and household debris hauled from a residential property.",
  },
];

const longIsland = [
  "West Babylon","Babylon","Lindenhurst","Deer Park",
  "Bay Shore","Islip","Huntington","Farmingdale",
  "Massapequa","Wantagh","Levittown",
];

const queens = [
  "Howard Beach","Ozone Park","Glendale","Ridgewood",
  "Forest Hills","Rego Park","Astoria","Long Island City","Jamaica",
];

const faqs = [
  { q: "How does pricing work?", a: "We price by trailer load size — Mini (¼ load), Half, or Full. Final cost depends on volume, weight, and material type. We always confirm pricing before starting." },
  { q: "Do I need to move anything outside?", a: "No. We handle all lifting — from inside the home, garage, or basement. You just point to what needs to go." },
  { q: "Do you offer same-day pickup?", a: "Yes. Call or text early and we'll do everything we can to accommodate same-day." },
  { q: "What's trailer rental vs. junk removal?", a: "Junk removal means we do all the work. Trailer rental means we drop the trailer, you load it at your pace, then we pick it up and dispose of everything." },
  { q: "What items can't you take?", a: "Hazardous waste, chemicals, and asbestos. Paint, tires, and batteries may carry extra disposal fees — we'll tell you upfront." },
  { q: "Can I send photos for a quote?", a: "Yes — we strongly recommend it. Photos let us give you an accurate quote fast with no back-and-forth." },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center bg-stone-900 overflow-hidden">
        {/* Background photo */}
        <div className="absolute inset-0">
          <Image
            src="/trailer5.jpg"
            alt="HassanHauledit junk removal trailer loaded with furniture"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-stone-900/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-900 via-stone-900/90 to-stone-900/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 w-full">
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-stone-800/80 border border-stone-700 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-semibold text-stone-300 tracking-wide">Same-Day Pickup Available</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[0.92] text-stone-50 mb-4">
              Junk Gone.<br />
              <span className="text-orange-500">Same Day.</span>
            </h1>

            <p className="text-stone-300 text-lg mb-3 leading-relaxed">
              Long Island &amp; Queens junk removal, trailer rentals, cleanouts, and debris hauling.
            </p>
            <p className="text-stone-400 text-base mb-10">
              Honest pricing, fast response, and real results — guaranteed.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact"
                className="bg-orange-500 hover:bg-orange-400 text-white font-bold uppercase tracking-wide px-8 py-4 rounded-sm transition-all duration-200 hover:shadow-xl hover:shadow-orange-500/25 text-sm text-center"
              >
                Get a Free Quote
              </Link>
              <a href="tel:+15164766455"
                className="border border-stone-600 hover:border-stone-400 text-stone-300 hover:text-white font-bold uppercase tracking-wide px-8 py-4 rounded-sm transition-all duration-200 text-sm text-center"
              >
                Call Now — 516-476-6455
              </a>
            </div>

            {/* Trust badges */}
            <div className="mt-8 flex flex-wrap gap-6 text-sm text-stone-500">
              {["Free Quotes", "No Hidden Fees", "Locally Owned"].map((b) => (
                <div key={b} className="flex items-center gap-2">
                  <span className="text-orange-500">✓</span> {b}
                </div>
              ))}
            </div>

            {/* Stats */}
            <AnimatedStats />
          </div>
        </div>
      </section>

      {/* ── WHAT WE REMOVE ── */}
      <section className="bg-stone-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold uppercase tracking-widest text-orange-500 mb-3 block">Full-Service Hauling</span>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-stone-50">What We Remove</h2>
            <p className="mt-3 text-stone-400">If it needs to go, we haul it.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {whatWeRemove.map(({ icon, label }) => (
              <div key={label}
                className="bg-stone-900 border border-stone-800 hover:border-orange-500/30 rounded-sm p-5 text-center transition-all duration-200 group cursor-default"
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-200">{icon}</div>
                <div className="text-stone-300 text-xs font-semibold leading-tight">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TWO WAYS TO HAUL ── */}
      <section className="bg-stone-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold uppercase tracking-widest text-orange-500 mb-3 block">Two Services</span>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-stone-50">Pick Your Option</h2>
            <p className="mt-3 text-stone-400">Two ways to get the job done. Both are simple.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Service */}
            <div className="bg-stone-950 border-2 border-orange-500 rounded-sm p-8 flex flex-col">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 bg-orange-500/15 border border-orange-500/30 rounded-sm flex items-center justify-center text-2xl">🚛</div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-orange-500 mb-0.5">Option 1</div>
                  <h3 className="text-xl font-black text-stone-50">Full Service Junk Removal</h3>
                </div>
              </div>
              <p className="text-stone-400 text-sm mb-6">We handle every part of the job. You don&apos;t lift a finger.</p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-3">We Handle</div>
                  {["Lifting", "Loading", "Cleanup", "Disposal"].map((i) => (
                    <div key={i} className="flex items-center gap-2 text-stone-300 text-sm py-1">
                      <span className="text-orange-500 text-xs">✓</span> {i}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-3">Best For</div>
                  {["Garage cleanouts", "Basements", "Estate cleanouts", "Heavy items"].map((i) => (
                    <div key={i} className="flex items-center gap-2 text-stone-400 text-sm py-1">
                      <span className="text-stone-600 text-xs">—</span> {i}
                    </div>
                  ))}
                </div>
              </div>

              <Link href="/contact"
                className="block text-center bg-orange-500 hover:bg-orange-400 text-white font-bold uppercase tracking-wide text-sm py-3.5 rounded-sm transition-all duration-200 mt-auto"
              >
                Get a Quote
              </Link>
            </div>

            {/* Trailer Rental */}
            <div className="bg-stone-950 border-2 border-stone-700 hover:border-stone-600 rounded-sm p-8 flex flex-col transition-all duration-200">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 bg-stone-800 border border-stone-700 rounded-sm flex items-center justify-center text-2xl">🏗️</div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-0.5">Option 2</div>
                  <h3 className="text-xl font-black text-stone-50">Trailer Rental</h3>
                </div>
              </div>
              <p className="text-stone-400 text-sm mb-6">We drop off the trailer. You load at your own pace. We pick up and dispose.</p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-3">We Handle</div>
                  {["Deliver trailer", "Pickup & disposal", "Dump fees", "Scheduling"].map((i) => (
                    <div key={i} className="flex items-center gap-2 text-stone-300 text-sm py-1">
                      <span className="text-orange-500 text-xs">✓</span> {i}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-3">Best For</div>
                  {["DIY projects", "Renovations", "Weekend cleanups", "Self-paced jobs"].map((i) => (
                    <div key={i} className="flex items-center gap-2 text-stone-400 text-sm py-1">
                      <span className="text-stone-600 text-xs">—</span> {i}
                    </div>
                  ))}
                </div>
              </div>

              <Link href="/contact"
                className="block text-center border border-stone-700 hover:border-orange-500 hover:text-orange-400 text-stone-300 font-bold uppercase tracking-wide text-sm py-3.5 rounded-sm transition-all duration-200 mt-auto"
              >
                Book a Trailer
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRAILER RENTAL PROCESS ── */}
      <section className="bg-stone-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Photo */}
            <div className="relative rounded-sm overflow-hidden order-2 lg:order-1" style={{ aspectRatio: "4/3" }}>
              <Image
                src="/trailer3.jpg"
                alt="HassanHauledit rental trailer ready for delivery"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/50 to-transparent" />
              <div className="absolute bottom-4 left-4 bg-orange-500 text-white text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-sm">
                Our Rental Trailer
              </div>
            </div>

            {/* Steps */}
            <div className="order-1 lg:order-2">
              <span className="text-sm font-semibold uppercase tracking-widest text-orange-500 mb-4 block">Trailer Rental</span>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-stone-50 mb-10">
                How Trailer Rental Works
              </h2>

              <div className="flex flex-col gap-6">
                {[
                  { n: "1", title: "We Deliver the Trailer", desc: "We drop it off at your property at a time that works for you." },
                  { n: "2", title: "Load It at Your Own Pace", desc: "Take your time. Fill it up however you need — no rush." },
                  { n: "3", title: "Keep It Overnight", desc: "The trailer stays until you're done. Most rentals are next-day pickup." },
                  { n: "4", title: "We Pick It Up", desc: "We come back and haul the trailer away — you don't have to be home." },
                  { n: "5", title: "We Dispose of Everything", desc: "We handle all dump fees, sorting, and responsible disposal." },
                ].map(({ n, title, desc }) => (
                  <div key={n} className="flex gap-5">
                    <div className="w-9 h-9 bg-orange-500/10 border border-orange-500/30 rounded-sm flex items-center justify-center flex-shrink-0">
                      <span className="text-orange-500 font-black text-sm">{n}</span>
                    </div>
                    <div>
                      <h4 className="text-stone-50 font-bold text-base mb-1">{title}</h4>
                      <p className="text-stone-400 text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <Link href="/contact"
                  className="inline-block bg-orange-500 hover:bg-orange-400 text-white font-bold uppercase tracking-wide px-8 py-4 rounded-sm transition-all duration-200 text-sm hover:shadow-xl hover:shadow-orange-500/25"
                >
                  Book a Trailer
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── RECENT HAULS GALLERY ── */}
      <section className="bg-stone-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold uppercase tracking-widest text-orange-500 mb-3 block">Portfolio</span>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-stone-50">Recent Hauls</h2>
            <p className="mt-3 text-stone-400">Real jobs. Real results.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {gallery.map(({ src, title, location, desc }) => (
              <div key={title} className="group bg-stone-950 border border-stone-800 hover:border-stone-700 rounded-sm overflow-hidden transition-all duration-200">
                <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
                  <Image
                    src={src}
                    alt={title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4">
                    <div className="text-orange-500 text-xs font-bold uppercase tracking-widest">{location}</div>
                    <div className="text-stone-50 font-black text-lg leading-tight">{title}</div>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-stone-400 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/contact"
              className="inline-block border border-stone-700 hover:border-stone-500 text-stone-300 hover:text-stone-50 font-bold uppercase tracking-wide px-8 py-3.5 rounded-sm transition-all duration-200 text-sm"
            >
              Get a Quote for Your Job
            </Link>
          </div>
        </div>
      </section>

      {/* ── BEFORE & AFTER ── */}
      <section className="bg-stone-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-orange-500 mb-4 block">Transformation</span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-stone-50 leading-tight mb-5">
                From Cluttered<br />to Cleared.
              </h2>
              <p className="text-stone-400 text-lg mb-4">One call. One haul. Done.</p>
              <p className="text-stone-500 text-sm leading-relaxed mb-10">
                This Long Island garage was packed floor-to-ceiling with years of accumulated junk.
                We cleared it completely in a single visit.
              </p>
              <Link href="/contact"
                className="inline-block bg-orange-500 hover:bg-orange-400 text-white font-bold uppercase tracking-wide px-8 py-4 rounded-sm transition-all duration-200 text-sm hover:shadow-xl hover:shadow-orange-500/25"
              >
                Book Your Cleanout
              </Link>
            </div>
            <div>
              <BeforeAfter />
            </div>
          </div>
        </div>
      </section>

      {/* ── HEAVY MATERIALS ── */}
      <section className="bg-stone-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-orange-500 mb-4 block">Important Note</span>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-stone-50 leading-tight mb-5">
                Heavy Materials Require<br />Special Disposal
              </h2>
              <p className="text-stone-400 leading-relaxed mb-6">
                Concrete, brick, dirt, roofing materials, and dense debris carry additional dump fees based on weight.
                We always explain all costs <span className="text-stone-200 font-semibold">upfront before any work begins</span>.
              </p>

              <div className="space-y-2.5 mb-8">
                {["Concrete, brick & stone", "Dirt & roofing material", "Mattresses & appliances", "Tires & paint", "Pianos & safes"].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-stone-400 text-sm">
                    <span className="text-orange-500 flex-shrink-0 text-base">⚠</span> {item}
                  </div>
                ))}
              </div>

              <div className="bg-stone-950 border border-orange-500/20 rounded-sm p-5">
                <p className="text-stone-300 text-sm leading-relaxed">
                  <span className="text-orange-500 font-bold">Send us a photo</span> and we&apos;ll give you an accurate quote before we show up — no surprises on the day of your haul.
                </p>
              </div>

              <div className="mt-8">
                <Link href="/contact"
                  className="inline-block bg-orange-500 hover:bg-orange-400 text-white font-bold uppercase tracking-wide px-8 py-4 rounded-sm transition-all duration-200 text-sm hover:shadow-xl hover:shadow-orange-500/25"
                >
                  Get a Photo Quote
                </Link>
              </div>
            </div>

            {/* Photo */}
            <div className="relative rounded-sm overflow-hidden" style={{ aspectRatio: "4/3" }}>
              <Image
                src="/trailer.jpg"
                alt="Trailer loaded with concrete debris — heavy material removal Long Island"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 to-transparent" />
              <div className="absolute bottom-4 left-4 bg-orange-500 text-white text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-sm">
                Concrete Haul — Heavy Material
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICE AREA ── */}
      <section className="bg-stone-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold uppercase tracking-widest text-orange-500 mb-3 block">Service Area</span>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-stone-50">
              Proudly Serving Long Island &amp; Queens
            </h2>
            <p className="mt-3 text-stone-400">Junk removal and trailer rentals across the entire area.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Long Island */}
            <div className="bg-stone-900 border border-stone-800 rounded-sm p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-8 bg-orange-500 rounded-full" />
                <h3 className="text-xl font-black text-stone-50">Long Island</h3>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {longIsland.map((town) => (
                  <div key={town} className="flex items-center gap-2 text-stone-400 text-sm py-1.5">
                    <span className="text-orange-500 text-xs">✓</span> {town}
                  </div>
                ))}
              </div>
            </div>

            {/* Queens */}
            <div className="bg-stone-900 border border-stone-800 rounded-sm p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-8 bg-orange-500 rounded-full" />
                <h3 className="text-xl font-black text-stone-50">Queens</h3>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {queens.map((town) => (
                  <div key={town} className="flex items-center gap-2 text-stone-400 text-sm py-1.5">
                    <span className="text-orange-500 text-xs">✓</span> {town}
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-5 border-t border-stone-800">
                <p className="text-stone-500 text-xs">Don&apos;t see your area? Call us — we may still be able to help.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="bg-stone-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold uppercase tracking-widest text-orange-500 mb-3 block">Why Hassan Hauled It</span>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-stone-50">
              Why Homeowners Choose Us
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: "👤", title: "Owner Operated", desc: "No franchises. No middlemen. Hassan runs every job personally." },
              { icon: "💰", title: "Transparent Pricing", desc: "We quote before we start. What we say is what you pay." },
              { icon: "⚡", title: "Fast Response Times", desc: "Same-day service available. We pick up the phone." },
              { icon: "🏗️", title: "Heavy Material Experience", desc: "Concrete, brick, roofing debris — we've handled it all." },
              { icon: "🚛", title: "Trailer Rental Option", desc: "Flexible hauling for DIY projects and weekend cleanups." },
              { icon: "📍", title: "Locally Owned", desc: "Based on Long Island. Serving our neighbors every day." },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="bg-stone-950 border border-stone-800 hover:border-orange-500/20 rounded-sm p-7 transition-all duration-200">
                <div className="text-3xl mb-4">{icon}</div>
                <h3 className="text-stone-50 font-bold text-base mb-2">{title}</h3>
                <p className="text-stone-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="bg-stone-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold uppercase tracking-widest text-orange-500 mb-3 block">Reviews</span>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-stone-50">What Customers Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Maria T.", label: "West Babylon", body: "Showed up on time, loaded everything, and cleaned up afterward. Highly recommend." },
              { name: "Derek R.", label: "Ozone Park, Queens", body: "The trailer rental was perfect for our renovation project. Easy process, fair price." },
              { name: "Linda K.", label: "Bay Shore", body: "Quick, professional, and honest pricing. The garage cleanout took less than two hours." },
            ].map(({ name, label, body }) => (
              <div key={name} className="bg-stone-900 border border-stone-800 p-8 rounded-sm hover:border-stone-700 transition-all duration-200">
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

      {/* ── PRICING ── */}
      <section className="bg-stone-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold uppercase tracking-widest text-orange-500 mb-3 block">Simple Pricing</span>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-stone-50">Trailer-Based Pricing</h2>
            <p className="mt-3 text-stone-400">No hourly rates. Pick your load size.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
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
                <div className="mb-4">
                  <h3 className="text-xl font-black text-stone-50">{name}</h3>
                  <span className="text-orange-500 text-xs font-bold uppercase tracking-wide">{label}</span>
                </div>
                <div className="mb-5">
                  <span className="text-stone-500 text-xs block">Starting at</span>
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

          <div className="bg-stone-950 border border-stone-800 rounded-sm p-6 max-w-3xl mx-auto">
            <h4 className="text-stone-50 font-bold text-sm mb-3">Final pricing depends on:</h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {["Weight", "Material type", "Labor required", "Disposal costs"].map((f) => (
                <div key={f} className="flex items-center gap-2 text-stone-400 text-sm">
                  <span className="text-orange-500 text-xs">✓</span> {f}
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-stone-800">
              <p className="text-stone-500 text-sm">
                For heavy materials — <Link href="/contact" className="text-orange-500 hover:text-orange-400">send a photo for an accurate quote.</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-stone-950 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold uppercase tracking-widest text-orange-500 mb-3 block">Questions</span>
            <h2 className="text-3xl font-black tracking-tight text-stone-50">Common Questions</h2>
          </div>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="bg-orange-500 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-4 leading-tight">
            Ready to Clear It Out?
          </h2>
          <p className="text-orange-100 text-lg mb-10">
            Serving Long Island and Queens. Call, text, or get a quote online.
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
