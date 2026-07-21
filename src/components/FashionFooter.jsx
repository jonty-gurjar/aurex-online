import {
  ChevronDown,
  Headphones,
  LockKeyhole,
  RotateCcw,
  Truck,
} from "lucide-react"
import { createElement } from "react"
import aurexLogo from "@/assets/Aurex.png"
import { FlowButton } from "@/components/ui/flow-button"

const footerGroups = [
  {
    title: "Shop",
    links: ["New Arrivals", "Men", "Women", "Collections", "Best Sellers", "Sale"],
  },
  {
    title: "Customer Care",
    links: [
      "Contact Us",
      "FAQ",
      "Shipping & Delivery",
      "Returns & Exchanges",
      "Order Tracking",
      "Size Guide",
    ],
  },
  {
    title: "About Aurex",
    links: ["Our Story", "Sustainability", "Careers", "Press", "Affiliate Program"],
  },
]

const features = [
  { icon: Truck, title: "Free shipping", detail: "On orders over $99" },
  { icon: RotateCcw, title: "Easy returns", detail: "30-day return policy" },
  { icon: LockKeyhole, title: "Secure payment", detail: "100% secure checkout" },
  { icon: Headphones, title: "24/7 support", detail: "We're here to help" },
]

const payments = ["VISA", "MC", "AMEX", "Apple Pay", "G Pay", "PayPal", "Shop Pay", "Klarna"]

function FashionFooter() {
  return (
    <footer className="bg-[#111] text-white">
      <section className="border-b border-white/15">
        <div className="mx-auto grid max-w-7xl grid-cols-2 px-5 sm:px-8 lg:grid-cols-4 lg:px-12">
          {features.map(({ icon: Icon, title, detail }, index) => (
            <div
              key={title}
              className={`flex min-h-32 items-center gap-4 border-white/15 py-7 ${
                index % 2 === 0 ? "pr-3" : "border-l pl-4 sm:pl-6"
              } ${index > 1 ? "border-t lg:border-t-0" : ""} ${
                index > 0 ? "lg:border-l lg:pl-7" : "lg:pr-7"
              }`}
            >
              {createElement(Icon, {
                "aria-hidden": true,
                className: "size-6 shrink-0 stroke-[1.4] text-white/80",
              })}
              <div>
                <h2 className="text-xs font-semibold uppercase tracking-[0.12em]">{title}</h2>
                <p className="mt-1.5 text-xs text-white/50">{detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
        <div className="grid gap-14 lg:grid-cols-[1.25fr_2fr] lg:gap-20">
          <div>
            <a href="#" className="inline-flex flex-col" aria-label="Aurex Fashion home">
              <img
                src={aurexLogo}
                alt="Aurex"
                width="850"
                height="218"
                className="h-auto w-44 brightness-0 invert sm:w-52"
              />
            </a>
            <p className="mt-7 max-w-sm text-sm leading-6 text-white/60">
              Timeless style. Modern edge.
              <br />
              Premium fashion for those who define their own standard.
            </p>
          </div>

          <nav aria-label="Footer navigation" className="grid gap-10 sm:grid-cols-3">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h2 className="text-xs font-semibold uppercase tracking-[0.14em]">{group.title}</h2>
                <ul className="mt-6 space-y-3.5">
                  {group.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-sm text-white/55 transition-colors hover:text-white">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-16 grid gap-12 border-t border-white/15 pt-12 lg:grid-cols-[1.25fr_2fr] lg:gap-20">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.12em]">
              Sign up &amp; get 10% off
            </h2>
            <p className="mt-4 max-w-md text-sm leading-6 text-white/55">
              Be the first to know about new arrivals, exclusive offers and style updates.
            </p>
            <form
              className="mt-6 flex max-w-md flex-col items-start gap-5"
              onSubmit={(event) => event.preventDefault()}
            >
              <div className="flex w-full border-b border-white/60">
                <label htmlFor="footer-email" className="sr-only">Email address</label>
                <input
                  id="footer-email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="Enter your email address"
                  className="min-w-0 flex-1 bg-transparent py-3 text-sm text-white outline-none placeholder:text-white/40"
                />
              </div>
              <FlowButton
                type="submit"
                text="Subscribe"
                variant="light"
              />
            </form>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.14em]">Contact us</h2>
            <address className="mt-6 space-y-3 text-sm not-italic leading-6 text-white/55">
              <p><a href="mailto:hello@aurexfashion.com" className="hover:text-white">hello@aurex.com</a></p>
              <p><a href="tel:+16471234567" className="hover:text-white">+1 (647) 123 4567</a></p>
              <p>123 Fashion Street, Toronto, ON M5V 2T6, Canada</p>
            </address>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-8 border-t border-white/15 pt-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-x-7 gap-y-3">
            {["Privacy Policy", "Terms & Conditions", "Accessibility"].map((link) => (
              <a key={link} href="#" className="text-xs text-white/45 transition-colors hover:text-white">
                {link}
              </a>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-7 text-xs">
            <button type="button" className="flex items-center gap-2 text-white/60 hover:text-white">
              <span aria-hidden="true">🇨🇦</span> Canada (CAD $)
              <ChevronDown className="size-3" />
            </button>
            <button type="button" className="flex items-center gap-2 text-white/60 hover:text-white">
              English <ChevronDown className="size-3" />
            </button>
          </div>
        </div>

        <div className="mt-8 flex flex-col-reverse gap-7 lg:flex-row lg:items-center lg:justify-between">
          <p className="text-[11px] uppercase tracking-wide text-white/40">
            © 2026 Aurex. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-1.5" aria-label="Accepted payment methods">
            {payments.map((payment) => (
              <span
                key={payment}
                className="grid h-6 min-w-10 place-items-center rounded-sm bg-white px-2 text-[8px] font-bold text-[#111]"
              >
                {payment}
              </span>
            ))}
          </div>
        </div>
      </section>
    </footer>
  )
}

export default FashionFooter
