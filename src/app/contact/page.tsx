import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Trailer Trucks Junk Removal — Long Island & Queens",
  description:
    "Contact Trailer Trucks Junk Removal. Call, text, or email for curbside junk pickup starting at $99 and trailer drop-offs for $300 flat. Serving Long Island and Queens.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-stone-900 pt-36 pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(249,115,22,0.08),_transparent_50%)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-sm font-black uppercase tracking-widest text-orange-500 mb-4 block">
            Get in Touch
          </span>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-stone-50 mb-4">
            Ready to Get the<br />
            <span className="text-orange-500">Junk Gone?</span>
          </h1>
          <p className="text-stone-400 text-lg max-w-xl mx-auto leading-relaxed">
            Call, text, or email — we respond fast. Snap a photo of your junk and we&apos;ll give you a price right away.
          </p>
        </div>
      </section>

      {/* Main contact cards */}
      <section className="bg-stone-950 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">

            {/* Phone */}
            <a
              href="tel:+15164766455"
              className="group flex flex-col items-center text-center bg-stone-900 border-2 border-stone-800 hover:border-orange-500 rounded-sm p-10 transition-all duration-200"
            >
              <div className="w-16 h-16 bg-orange-500/10 border border-orange-500/30 rounded-sm flex items-center justify-center mb-5 group-hover:bg-orange-500/20 transition-colors duration-200">
                <span className="text-3xl">📞</span>
              </div>
              <div className="text-xs font-black uppercase tracking-widest text-stone-500 mb-2">Call or Text</div>
              <div className="text-2xl font-black text-stone-50 group-hover:text-orange-400 transition-colors duration-200">
                516-476-6455
              </div>
              <div className="mt-3 text-stone-500 text-sm">Fastest way to reach us</div>
            </a>

            {/* Email 1 */}
            <a
              href="mailto:trailertrucksjunk@gmail.com"
              className="group flex flex-col items-center text-center bg-stone-900 border-2 border-stone-800 hover:border-orange-500 rounded-sm p-10 transition-all duration-200"
            >
              <div className="w-16 h-16 bg-orange-500/10 border border-orange-500/30 rounded-sm flex items-center justify-center mb-5 group-hover:bg-orange-500/20 transition-colors duration-200">
                <span className="text-3xl">✉️</span>
              </div>
              <div className="text-xs font-black uppercase tracking-widest text-stone-500 mb-2">Email</div>
              <div className="text-base font-black text-stone-50 group-hover:text-orange-400 transition-colors duration-200 break-all">
                trailertrucksjunk@gmail.com
              </div>
              <div className="mt-3 text-stone-500 text-sm">We reply within the hour</div>
            </a>

            {/* Email 2 */}
            <a
              href="mailto:hassan@hassansoldit.com"
              className="group flex flex-col items-center text-center bg-stone-900 border-2 border-stone-800 hover:border-orange-500 rounded-sm p-10 transition-all duration-200"
            >
              <div className="w-16 h-16 bg-orange-500/10 border border-orange-500/30 rounded-sm flex items-center justify-center mb-5 group-hover:bg-orange-500/20 transition-colors duration-200">
                <span className="text-3xl">✉️</span>
              </div>
              <div className="text-xs font-black uppercase tracking-widest text-stone-500 mb-2">Email</div>
              <div className="text-base font-black text-stone-50 group-hover:text-orange-400 transition-colors duration-200 break-all">
                hassan@hassansoldit.com
              </div>
              <div className="mt-3 text-stone-500 text-sm">Alternative email</div>
            </a>
          </div>

          {/* Divider info row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            <div className="bg-stone-900 border border-stone-800 rounded-sm p-6 text-center">
              <div className="text-xs font-black uppercase tracking-widest text-stone-500 mb-2">Service Area</div>
              <div className="text-stone-50 font-bold">Long Island &amp; Queens, NY</div>
            </div>
            <div className="bg-stone-900 border border-stone-800 rounded-sm p-6 text-center">
              <div className="text-xs font-black uppercase tracking-widest text-stone-500 mb-2">Hours</div>
              <div className="text-stone-50 font-bold">Mon–Sat: 7 AM – 7 PM</div>
              <div className="text-stone-400 text-sm mt-1">Same-day often available</div>
            </div>
            <div className="bg-stone-900 border border-stone-800 rounded-sm p-6 text-center">
              <div className="text-xs font-black uppercase tracking-widest text-stone-500 mb-2">Response Time</div>
              <div className="text-stone-50 font-bold">Usually within 1 hour</div>
              <div className="text-stone-400 text-sm mt-1">Text for fastest reply</div>
            </div>
          </div>

          {/* Photo tip */}
          <div className="bg-orange-500/10 border border-orange-500/30 rounded-sm p-8 text-center max-w-2xl mx-auto">
            <div className="text-4xl mb-4">📸</div>
            <h3 className="text-stone-50 font-black text-xl mb-2">Snap It. Text It. Trash It.</h3>
            <p className="text-stone-400 leading-relaxed mb-6">
              The fastest way to get a quote is to text a photo of your junk to{" "}
              <span className="text-orange-400 font-black">516-476-6455</span> with your town.
              We&apos;ll reply with a price fast — no in-person estimate needed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="sms:+15164766455"
                className="bg-orange-500 hover:bg-orange-400 text-white font-black uppercase tracking-wide px-8 py-4 rounded-sm transition-all duration-200 text-sm shadow-lg"
              >
                📸 Text a Photo
              </a>
              <a
                href="tel:+15164766455"
                className="border-2 border-stone-700 hover:border-stone-500 text-stone-300 hover:text-white font-black uppercase tracking-wide px-8 py-4 rounded-sm transition-all duration-200 text-sm"
              >
                📞 Call 516-476-6455
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing reminder */}
      <section className="bg-stone-900 border-t border-stone-800 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-xs font-black uppercase tracking-widest text-orange-500">Simple Flat-Rate Pricing</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex items-center gap-5 bg-stone-950 border border-stone-800 rounded-sm p-6">
              <div className="text-4xl">🚛</div>
              <div>
                <div className="text-xs font-black uppercase tracking-widest text-stone-500 mb-1">Curbside Pickup</div>
                <div className="text-stone-50 font-black text-xl">Starting at $99</div>
                <div className="text-stone-400 text-sm mt-1">Put it out — we haul it away</div>
              </div>
            </div>
            <div className="flex items-center gap-5 bg-stone-950 border border-stone-800 rounded-sm p-6">
              <div className="text-4xl">🏗️</div>
              <div>
                <div className="text-xs font-black uppercase tracking-widest text-stone-500 mb-1">Trailer Drop-Off</div>
                <div className="text-stone-50 font-black text-xl">$300 flat rate</div>
                <div className="text-stone-400 text-sm mt-1">Includes up to 1 ton</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
