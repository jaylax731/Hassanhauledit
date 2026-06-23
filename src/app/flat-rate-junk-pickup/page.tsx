import type { Metadata } from "next";
import Image from "next/image";
import TrailerTrashForm from "@/components/TrailerTrashForm";

export const metadata: Metadata = {
  title: "Flat-Rate Junk Pickup Long Island & Queens | Trailer Trash Junk Removal",
  description:
    "Trailer Trash Junk Removal offers curbside junk pickup starting at $99 and trailer drop-offs for $300 flat rate in Long Island and Queens. Snap it, text it, and we'll haul it away.",
};

const faqs = [
  { q: "How much is curbside pickup?", a: "Curbside pickup starts at $99. Text a photo to 516-476-6455 and we'll confirm the price before we come." },
  { q: "How much is trailer drop-off?", a: "Trailer drop-off is $300 flat rate and includes up to 1 ton." },
  { q: "How do I get a quote?", a: "Snap it, text it, and we'll trash it. Text a photo of the junk to 516-476-6455 and include your town." },
  { q: "Do I have to bring the junk outside?", a: "For curbside pickup, yes — put it by the curb, driveway, garage, or another easy-access spot. For full-service loading, contact us for a custom quote." },
  { q: "How long can I keep the trailer?", a: "We'll confirm timing when you book. Most trailer drop-offs are short-term cleanout rentals." },
  { q: "What items may cost more?", a: "Heavy materials, concrete, yard waste, oversized loads, or loads over 1 ton may require a custom quote." },
];

const gallery = [
  { src: "/trailer1.jpg", caption: "Scrap metal hauled", badge: "Junk gone fast" },
  { src: "/trailer2.jpg", caption: "Construction debris removed", badge: "Trailer drop-off" },
  { src: "/trailer3.jpg", caption: "Trailer ready for your load", badge: "Ready to fill" },
  { src: "/trailer4.jpg", caption: "Furniture & wood removal", badge: "Local junk pickup" },
  { src: "/trailer5.jpg", caption: "Curbside furniture pickup", badge: "Curbside pickup" },
  { src: "/trailer.jpg", caption: "Heavy debris hauled", badge: "Garage cleanout" },
];

export default function FlatRateJunkPickup() {
  return (
    <>
      {/* ── STICKY MOBILE CTA ── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden shadow-2xl">
        <div className="flex">
          <a
            href="tel:+15164766455"
            className="flex-1 bg-stone-900 text-white font-black text-sm py-4 text-center border-r border-stone-700"
          >
            📞 Call / Text
          </a>
          <a
            href="sms:+15164766455"
            className="flex-1 bg-orange-500 text-white font-black text-sm py-4 text-center"
          >
            📸 Text a Photo
          </a>
        </div>
      </div>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center bg-stone-900 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/truck6.png"
            alt="Trailer Trash Junk Removal truck serving Long Island and Queens"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-stone-900/65" />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-900 via-stone-900/85 to-stone-900/25" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24 w-full">
          {/* Brand name */}
          <div className="flex items-center gap-3 mb-8">
            <span className="text-orange-500 font-black text-base tracking-tight uppercase">🚛 Trailer Trash</span>
            <span className="w-1 h-1 rounded-full bg-stone-600" />
            <span className="text-stone-400 text-sm">Junk Removal</span>
          </div>

          {/* Tagline */}
          <div className="inline-block bg-orange-500/15 border border-orange-500/30 rounded-full px-4 py-1.5 mb-6">
            <span className="text-orange-400 text-xs font-black uppercase tracking-widest">
              Trailer Trash: Where Junk Gets Dumped.
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[0.9] text-white mb-5">
            Your Space Called.<br />
            <span className="text-orange-500">It Wants the<br className="hidden sm:block" /> Junk Gone.</span>
          </h1>

          <p className="text-stone-300 text-lg max-w-xl leading-relaxed mb-2">
            Curbside pickups starting at <strong className="text-white">$99</strong> and trailer drop-offs for <strong className="text-white">$300 flat</strong> across Long Island and Queens.
          </p>
          <p className="text-orange-400 font-bold text-sm uppercase tracking-widest mb-8">
            Snap it. Text it. Trash it.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a
              href="tel:+15164766455"
              className="bg-orange-500 hover:bg-orange-400 text-white font-black uppercase tracking-wide px-8 py-4 rounded-sm transition-all duration-200 text-sm text-center shadow-xl hover:shadow-orange-500/30"
            >
              📞 Call / Text 516-476-6455
            </a>
            <a
              href="sms:+15164766455"
              className="border-2 border-white/40 hover:border-orange-400 hover:text-orange-400 text-white font-black uppercase tracking-wide px-8 py-4 rounded-sm transition-all duration-200 text-sm text-center"
            >
              📸 Text a Photo for Quote
            </a>
            <a
              href="/contact"
              className="border-2 border-white/20 hover:border-white/50 text-stone-300 hover:text-white font-black uppercase tracking-wide px-8 py-4 rounded-sm transition-all duration-200 text-sm text-center"
            >
              Contact Us
            </a>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-2">
            {[
              "Curbside from $99",
              "Trailer drop-off $300 flat",
              "Includes up to 1 ton",
              "Fast photo quotes",
              "Long Island & Queens",
            ].map((b) => (
              <span
                key={b}
                className="bg-white/10 border border-white/15 text-stone-300 text-xs font-semibold px-3 py-1.5 rounded-full"
              >
                ✓ {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── TWO OFFERS ── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sm font-black uppercase tracking-widest text-orange-500 mb-3 block">Two Simple Options</span>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-stone-900">
              Choose How You Want the Junk Gone
            </h2>
            <p className="mt-3 text-stone-500 text-lg">Two easy options. One simple goal: get the junk dumped.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Curbside Pickup */}
            <div className="border-2 border-orange-500 rounded-2xl overflow-hidden shadow-xl shadow-orange-500/10 flex flex-col">
              <div className="relative h-56 overflow-hidden flex-shrink-0">
                <Image
                  src="/trailer5.jpg"
                  alt="Curbside junk pickup Long Island Queens"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-orange-500 text-white text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-full">
                    From Curbside to Cleared Out
                  </span>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-5">
                  <div>
                    <h3 className="text-2xl font-black text-stone-900">Curbside Pickup</h3>
                    <p className="text-stone-500 text-sm mt-1">Put it out. We'll take it.</p>
                  </div>
                  <div className="text-right flex-shrink-0 ml-4">
                    <div className="text-xs text-stone-400 uppercase tracking-wide">Starting at</div>
                    <div className="text-4xl font-black text-orange-500 leading-none">$99</div>
                  </div>
                </div>

                <p className="text-stone-600 text-sm leading-relaxed mb-6">
                  Have furniture, bags, boxes, appliances, or a small pile you need gone? Put it by the curb, driveway, or garage and Trailer Trash will come haul it away.
                </p>

                <div className="mb-6 flex-1">
                  <div className="text-xs font-black uppercase tracking-widest text-stone-400 mb-3">Best For</div>
                  <div className="flex flex-wrap gap-2">
                    {["Furniture", "Boxes & bags", "Appliances", "Moving junk", "Garage junk", "Quick cleanouts", "Small junk piles"].map((t) => (
                      <span key={t} className="bg-orange-50 text-orange-600 text-xs font-semibold px-3 py-1.5 rounded-full border border-orange-100">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href="sms:+15164766455"
                  className="block w-full text-center bg-orange-500 hover:bg-orange-400 text-white font-black uppercase tracking-wide py-4 rounded-xl transition-all duration-200 text-sm shadow-lg shadow-orange-500/20"
                >
                  📸 Text a Photo for Quote
                </a>
              </div>
            </div>

            {/* Trailer Drop-Off */}
            <div className="border-2 border-stone-200 hover:border-orange-300 rounded-2xl overflow-hidden shadow-lg flex flex-col transition-all duration-200">
              <div className="relative h-56 overflow-hidden flex-shrink-0">
                <Image
                  src="/trailer3.jpg"
                  alt="Trailer drop-off junk removal Long Island Queens"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-stone-900 text-white text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-full">
                    We Drop It. You Fill It. We Dump It.
                  </span>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-5">
                  <div>
                    <h3 className="text-2xl font-black text-stone-900">Trailer Drop-Off</h3>
                    <p className="text-stone-500 text-sm mt-1">Fill it at your own pace.</p>
                  </div>
                  <div className="text-right flex-shrink-0 ml-4">
                    <div className="text-xs text-stone-400 uppercase tracking-wide">Flat rate</div>
                    <div className="text-4xl font-black text-stone-900 leading-none">$300</div>
                    <div className="text-xs text-stone-500 mt-0.5">Includes up to 1 ton</div>
                  </div>
                </div>

                <p className="text-stone-600 text-sm leading-relaxed mb-6">
                  Need more room than a curbside pickup? Trailer Trash drops off the trailer, you fill it with junk at your own pace, and we come back to haul it all away.
                </p>

                <div className="mb-6 flex-1">
                  <div className="text-xs font-black uppercase tracking-widest text-stone-400 mb-3">Best For</div>
                  <div className="flex flex-wrap gap-2">
                    {["Garage cleanouts", "Basement junk", "Moving cleanouts", "Weekend projects", "DIY cleanouts", "Bigger junk piles", "Household clutter"].map((t) => (
                      <span key={t} className="bg-stone-100 text-stone-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-stone-200">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href="sms:+15164766455"
                  className="block w-full text-center bg-stone-900 hover:bg-stone-800 text-white font-black uppercase tracking-wide py-4 rounded-xl transition-all duration-200 text-sm"
                >
                  📦 Book Trailer Drop-Off
                </a>
              </div>
            </div>
          </div>

          <p className="text-center text-stone-400 text-sm mt-6">
            ⚠ Heavy materials, concrete, yard waste, oversized loads, or loads over 1 ton may require a custom quote.
          </p>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="bg-orange-500 py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white">
              Snap It. Text It. Trash It.
            </h2>
            <p className="mt-3 text-orange-100 text-lg">The easiest junk removal process on Long Island.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { n: "1", emoji: "📸", title: "Snap It", desc: "Take a quick photo of what needs to go." },
              { n: "2", emoji: "💬", title: "Text It", desc: "Send it to 516-476-6455 with your town. We'll confirm the price fast." },
              { n: "3", emoji: "🚛", title: "Trash It", desc: "Choose curbside pickup or trailer drop-off and we'll haul it away." },
            ].map(({ n, emoji, title, desc }) => (
              <div key={n} className="bg-white/15 border border-white/20 rounded-2xl p-8 text-center">
                <div className="text-5xl mb-4">{emoji}</div>
                <div className="text-orange-200 text-xs font-black uppercase tracking-widest mb-2">Step {n}</div>
                <h3 className="text-xl font-black text-white mb-3">{title}</h3>
                <p className="text-orange-100 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="tel:+15164766455"
              className="inline-block bg-white text-orange-500 hover:bg-orange-50 font-black uppercase tracking-wide px-10 py-4 rounded-xl transition-all duration-200 text-sm shadow-xl"
            >
              📞 Call / Text 516-476-6455
            </a>
          </div>
        </div>
      </section>

      {/* ── WHAT WE TAKE ── */}
      <section className="bg-stone-50 py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-black uppercase tracking-widest text-orange-500 mb-3 block">We Take It All</span>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-stone-900">
              The Stuff You&apos;re Done Looking At
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "🛋️ Furniture", "🛏️ Mattresses", "📦 Boxes", "🗃️ Bags",
              "🧊 Appliances", "🏠 Garage junk", "🪣 Basement junk",
              "🚚 Moving junk", "🏡 Household clutter", "🏗️ Small renovation debris",
            ].map((item) => (
              <span
                key={item}
                className="bg-white border border-stone-200 text-stone-700 font-semibold text-sm px-5 py-3 rounded-full shadow-sm hover:border-orange-300 hover:text-orange-600 transition-all duration-200"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE ── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sm font-black uppercase tracking-widest text-orange-500 mb-3 block">Why Trailer Trash</span>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-stone-900">
              Junk Removal Without the Dumpster Drama
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {[
              { icon: "💵", title: "Two Flat-Rate Options", desc: "Curbside from $99. Trailer drop-off $300. No hourly confusion, no surprise bills." },
              { icon: "📸", title: "Fast Photo Quotes", desc: "Text a photo and get a price fast. No in-person estimate required." },
              { icon: "✅", title: "Clear Pricing Upfront", desc: "We confirm the price before we come. What we say is what you pay." },
              { icon: "📍", title: "Local Long Island & Queens", desc: "We're your neighbors. Local service, real people, fast response." },
              { icon: "⚡", title: "Same-Day Junk Pickup", desc: "Text us early and we'll do everything we can to get it done today." },
              { icon: "🏗️", title: "Trailer Drop-Off Option", desc: "Great for moving, cleanouts, weekends, and bigger junk piles." },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="bg-stone-50 border border-stone-100 hover:border-orange-200 rounded-2xl p-7 transition-all duration-200">
                <div className="text-3xl mb-4">{icon}</div>
                <h3 className="text-stone-900 font-black text-base mb-2">{title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-orange-50 border border-orange-100 rounded-2xl p-8 text-center max-w-2xl mx-auto">
            <p className="text-stone-800 text-lg leading-relaxed font-semibold">
              Trailer Trash keeps it simple:{" "}
              <span className="text-orange-500 font-black">send the photo, pick your option, and get your space back.</span>
            </p>
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section className="bg-stone-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-black uppercase tracking-widest text-orange-500 mb-3 block">Real Jobs</span>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white">
              From Curbside to Cleared Out
            </h2>
            <p className="mt-3 text-stone-400">Real pickups. Real cleanouts. Real space back.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {gallery.map(({ src, caption, badge }) => (
              <div key={src} className="group relative overflow-hidden rounded-xl" style={{ aspectRatio: "4/3" }}>
                <Image
                  src={src}
                  alt={caption}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <span className="bg-orange-500 text-white text-xs font-black uppercase tracking-widest px-2.5 py-1 rounded-full">
                    {badge}
                  </span>
                  <p className="text-white text-xs mt-2 font-medium">{caption}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="sms:+15164766455"
              className="inline-block bg-orange-500 hover:bg-orange-400 text-white font-black uppercase tracking-wide px-8 py-4 rounded-xl transition-all duration-200 text-sm shadow-lg"
            >
              📸 Text a Photo — Get a Quote
            </a>
          </div>
        </div>
      </section>

      {/* ── SERVICE AREA ── */}
      <section className="bg-stone-50 py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-sm font-black uppercase tracking-widest text-orange-500 mb-3 block">Where We Haul</span>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-stone-900 mb-5">
            Trailer Trash Serves Long Island &amp; Queens
          </h2>
          <p className="text-stone-600 leading-relaxed max-w-2xl mx-auto mb-10">
            Trailer Trash Junk Removal offers <strong>curbside junk pickup</strong> and <strong>trailer drop-off junk removal</strong> across Long Island and Queens.
            Whether you need <strong>same-day junk pickup</strong>, <strong>furniture removal</strong>, a <strong>garage cleanout</strong>,
            <strong> basement cleanout</strong>, or <strong>moving junk removal</strong> — we&apos;ve got a flat-rate option ready.
            Text your town and a photo for the fastest <strong>junk removal Long Island</strong> and <strong>junk removal Queens</strong> quote.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {[
              "West Babylon", "Babylon", "Bay Shore", "Islip", "Lindenhurst",
              "Deer Park", "Huntington", "Farmingdale", "Massapequa", "Wantagh",
              "Levittown", "Howard Beach", "Ozone Park", "Glendale", "Ridgewood",
              "Forest Hills", "Rego Park", "Jamaica", "Astoria", "Long Island City",
            ].map((town) => (
              <span key={town} className="bg-white border border-stone-200 text-stone-600 text-sm px-4 py-2 rounded-full font-medium">
                📍 {town}
              </span>
            ))}
          </div>

          <a
            href="sms:+15164766455"
            className="inline-block bg-orange-500 hover:bg-orange-400 text-white font-black uppercase tracking-wide px-8 py-4 rounded-xl transition-all duration-200 text-sm shadow-lg shadow-orange-500/25"
          >
            📸 Text Your Town + Photo
          </a>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-black uppercase tracking-widest text-orange-500 mb-3 block">Questions</span>
            <h2 className="text-3xl font-black tracking-tight text-stone-900">Common Questions</h2>
          </div>
          <div className="flex flex-col divide-y divide-stone-100">
            {faqs.map(({ q, a }) => (
              <details key={q} className="group py-5">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <span className="text-stone-900 font-bold text-base pr-4 group-open:text-orange-500 transition-colors duration-200">
                    {q}
                  </span>
                  <span className="text-orange-500 text-xl flex-shrink-0 transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="text-stone-500 text-sm leading-relaxed mt-4">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUOTE FORM ── */}
      <section className="bg-stone-50 py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-sm font-black uppercase tracking-widest text-orange-500 mb-3 block">Get a Quote</span>
            <h2 className="text-3xl font-black tracking-tight text-stone-900">
              Not Ready to Text? Fill This Out.
            </h2>
            <p className="mt-3 text-stone-500">We&apos;ll get back to you fast — usually within the hour.</p>
          </div>
          <TrailerTrashForm />
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="bg-orange-500 py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-3 leading-[0.95]">
            Your Space Called.<br />
            It Still Wants the Junk Gone.
          </h2>
          <p className="text-white font-black text-base mb-2 uppercase tracking-widest">
            Trailer Trash: Where Junk Gets Dumped.
          </p>
          <p className="text-orange-100 text-base mb-10 mt-4">
            Text us a photo, choose curbside pickup or trailer drop-off, and we&apos;ll help you get the junk gone fast.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+15164766455"
              className="bg-white text-orange-500 hover:bg-orange-50 font-black uppercase tracking-wide px-10 py-4 rounded-xl transition-all duration-200 text-sm w-full sm:w-auto text-center shadow-xl"
            >
              📞 Call / Text 516-476-6455
            </a>
            <a
              href="sms:+15164766455"
              className="border-2 border-white/60 hover:border-white text-white font-black uppercase tracking-wide px-10 py-4 rounded-xl transition-all duration-200 text-sm w-full sm:w-auto text-center"
            >
              📸 Text a Photo for Quote
            </a>
          </div>
        </div>
      </section>

      {/* Spacer for mobile sticky bar */}
      <div className="h-16 md:hidden" />
    </>
  );
}
