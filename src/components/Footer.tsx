import Link from "next/link";

// Footer
const services = [
  "Furniture Removal",
  "Appliance Removal",
  "Garage Cleanouts",
  "Basement Cleanouts",
  "Apartment Cleanouts",
  "Estate Cleanouts",
  "Yard Debris",
  "Construction Debris",
];

export default function Footer() {
  return (
    <footer className="bg-stone-950 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-orange-500 rounded-sm flex items-center justify-center flex-shrink-0">
                <span className="text-white font-black text-sm">H</span>
              </div>
              <span className="text-stone-50 font-black text-lg tracking-tight">
                Hassan<span className="text-orange-500">Hauled</span>It
              </span>
            </Link>
            <p className="text-stone-400 text-sm leading-relaxed mb-6">
              Fast, reliable junk removal for homeowners, renters, and businesses.
              You point. We haul.
            </p>
            <div className="flex flex-col gap-2 text-sm text-stone-400">
              <a
                href="tel:+15164766455"
                className="hover:text-orange-500 transition-colors duration-200 flex items-center gap-2"
              >
                <span>📞</span> 516-476-6455
              </a>
              <a
                href="mailto:hassan@hassansoldit.com"
                className="hover:text-orange-500 transition-colors duration-200 flex items-center gap-2"
              >
                <span>✉️</span> hassan@hassansoldit.com
              </a>
              <span className="flex items-center gap-2">
                <span>📍</span> Serving Your Local Area
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-stone-50 font-bold text-sm uppercase tracking-widest mb-5">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                { href: "/", label: "Home" },
                { href: "/pricing", label: "Pricing & Services" },
                { href: "/our-story", label: "Our Story" },
                { href: "/contact", label: "Contact Us" },
                { href: "/contact", label: "Get a Free Quote" },
              ].map(({ href, label }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-stone-400 hover:text-orange-500 text-sm transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-stone-50 font-bold text-sm uppercase tracking-widest mb-5">
              What We Remove
            </h4>
            <ul className="flex flex-col gap-3">
              {services.map((s) => (
                <li key={s} className="text-stone-400 text-sm">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-stone-50 font-bold text-sm uppercase tracking-widest mb-5">
              Book a Haul
            </h4>
            <p className="text-stone-400 text-sm leading-relaxed mb-6">
              Same-day and next-day pickups available. Send us a message and we&apos;ll get back to you fast.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-orange-500 hover:bg-orange-400 text-white text-sm font-bold uppercase tracking-wide px-6 py-3 rounded-sm transition-all duration-200 hover:shadow-lg hover:shadow-orange-500/20 w-full text-center"
            >
              Get a Free Quote
            </Link>
            <div className="mt-4 flex flex-col gap-2">
              <div className="flex items-center gap-2 text-xs text-stone-500">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block animate-pulse" />
                Same-Day Availability
              </div>
              <div className="flex items-center gap-2 text-xs text-stone-500">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block" />
                Locally Owned & Operated
              </div>
              <div className="flex items-center gap-2 text-xs text-stone-500">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block" />
                Free, No-Obligation Quotes
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-stone-500 text-sm">
            © {new Date().getFullYear()} HassanHauledit. All rights reserved.
          </p>
          <p className="text-stone-600 text-xs">
            Locally owned & operated · Fast · Fair · Reliable
          </p>
        </div>
      </div>
    </footer>
  );
}
