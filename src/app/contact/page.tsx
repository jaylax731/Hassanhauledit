import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import ContactFormWrapper from "@/components/ContactFormWrapper";

export const metadata: Metadata = {
  title: "Contact & Free Quote | HassanHauledit",
  description:
    "Request a free junk removal quote. Fill out our quick form and we'll get back to you fast — often within the hour. Same-day pickup available.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-stone-900 pt-36 pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(249,115,22,0.08),_transparent_50%)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-orange-500 mb-4 block">
            Get a Free Quote
          </span>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-stone-50 mb-4">
            Let&apos;s Get That Junk Gone.
          </h1>
          <p className="text-stone-400 text-lg max-w-xl mx-auto leading-relaxed">
            Fill out the form below and we&apos;ll get back to you fast — usually within the hour during business hours.
            Include photos for the fastest, most accurate quote.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-stone-950 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Contact Info */}
              <div className="bg-stone-900 border border-stone-800 rounded-sm p-6">
                <h3 className="text-stone-50 font-bold text-sm uppercase tracking-widest mb-5">
                  Contact Us Directly
                </h3>
                <div className="space-y-4">
                  <a
                    href="tel:+15551234567"
                    className="flex items-center gap-3 text-stone-300 hover:text-orange-500 transition-colors duration-200 group"
                  >
                    <div className="w-10 h-10 bg-stone-800 group-hover:bg-orange-500/10 rounded-sm flex items-center justify-center flex-shrink-0 transition-colors duration-200">
                      <span className="text-lg">📞</span>
                    </div>
                    <div>
                      <div className="text-xs text-stone-500 mb-0.5">Phone / Text</div>
                      <div className="font-semibold text-sm">(555) 123-4567</div>
                    </div>
                  </a>

                  <a
                    href="mailto:info@hassanhauleditsrc.com"
                    className="flex items-center gap-3 text-stone-300 hover:text-orange-500 transition-colors duration-200 group"
                  >
                    <div className="w-10 h-10 bg-stone-800 group-hover:bg-orange-500/10 rounded-sm flex items-center justify-center flex-shrink-0 transition-colors duration-200">
                      <span className="text-lg">✉️</span>
                    </div>
                    <div>
                      <div className="text-xs text-stone-500 mb-0.5">Email</div>
                      <div className="font-semibold text-sm">info@hassanhauleditsrc.com</div>
                    </div>
                  </a>

                  <div className="flex items-center gap-3 text-stone-300">
                    <div className="w-10 h-10 bg-stone-800 rounded-sm flex items-center justify-center flex-shrink-0">
                      <span className="text-lg">📍</span>
                    </div>
                    <div>
                      <div className="text-xs text-stone-500 mb-0.5">Service Area</div>
                      <div className="font-semibold text-sm">Your Local Area & Surrounding Towns</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-stone-900 border border-stone-800 rounded-sm p-6">
                <h3 className="text-stone-50 font-bold text-sm uppercase tracking-widest mb-5">
                  Business Hours
                </h3>
                <div className="space-y-2">
                  {[
                    { day: "Monday – Friday", hours: "7:00 AM – 7:00 PM" },
                    { day: "Saturday", hours: "8:00 AM – 5:00 PM" },
                    { day: "Sunday", hours: "By appointment" },
                  ].map(({ day, hours }) => (
                    <div key={day} className="flex justify-between text-sm">
                      <span className="text-stone-400">{day}</span>
                      <span className="text-stone-200 font-medium">{hours}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-2 text-xs text-stone-500">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  Same-day pickup often available — call to check
                </div>
              </div>

              {/* Photo tip */}
              <div className="bg-orange-500/10 border border-orange-500/30 rounded-sm p-5">
                <div className="text-2xl mb-2">📸</div>
                <h4 className="font-bold text-stone-50 text-sm mb-2">Send Photos = Faster Quote</h4>
                <p className="text-stone-400 text-xs leading-relaxed">
                  Attaching photos of your junk helps us give you an accurate quote right away — no
                  back-and-forth needed. Snap a quick pic and attach it below.
                </p>
              </div>

              {/* Pricing link */}
              <div className="bg-stone-900 border border-stone-800 rounded-sm p-5">
                <h4 className="font-bold text-stone-50 text-sm mb-2">Not sure what size you need?</h4>
                <p className="text-stone-400 text-xs leading-relaxed mb-3">
                  Check out our pricing page for load size guides and starting rates.
                </p>
                <Link
                  href="/pricing"
                  className="text-orange-500 hover:text-orange-400 text-sm font-semibold transition-colors duration-200"
                >
                  View pricing guide →
                </Link>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-stone-900 border border-stone-800 rounded-sm p-8">
                <h2 className="text-xl font-bold text-stone-50 mb-2">Request a Free Quote</h2>
                <p className="text-stone-400 text-sm mb-8">
                  Fields marked with <span className="text-orange-500">*</span> are required.
                </p>
                <Suspense fallback={<div className="text-stone-500 text-sm">Loading form...</div>}>
                  <ContactFormWrapper />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-stone-900 border-t border-stone-800 py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: "⚡", label: "Fast Response", sub: "Usually within 1 hour" },
              { icon: "💰", label: "Free Quotes", sub: "No obligation, ever" },
              { icon: "🛡️", label: "Licensed & Insured", sub: "Fully covered" },
              { icon: "✨", label: "Clean Service", sub: "No mess left behind" },
            ].map(({ icon, label, sub }) => (
              <div key={label} className="flex flex-col items-center gap-2">
                <span className="text-2xl">{icon}</span>
                <div className="font-bold text-stone-50 text-sm">{label}</div>
                <div className="text-stone-500 text-xs">{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
