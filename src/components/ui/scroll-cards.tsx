import { ArrowUpRight } from "lucide-react"

import { cn } from "@/lib/utils"

export type iCardItem = {
  title: string
  src: string
  link: string
  textColor?: "white" | "black" | string
}

type CardsParallaxProps = {
  items: iCardItem[]
}

const textColorClasses: Record<string, string> = {
  white: "text-white",
  black: "text-[#111111]",
}

function CardsParallax({ items }: CardsParallaxProps) {
  return (
    <section className="bg-white px-5 py-20 text-[#111111] sm:px-8 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-4xl font-black uppercase leading-none tracking-tight sm:text-5xl">
            New Collection
          </h2>
          <p className="mt-4 text-sm font-medium leading-relaxed text-black/70 sm:text-base">
            Scroll through curated outdoor journeys built for movement,
            altitude, and unforgettable views.
          </p>
        </div>

        <div className="space-y-8">
          {items.map((item, index) => (
            <article
              key={item.title}
              className="sticky overflow-hidden rounded-[28px] bg-[#111111] shadow-2xl shadow-black/15"
              style={{ top: `${96 + index * 14}px` }}
            >
              <a
                href={item.link}
                className="group relative block min-h-[460px] overflow-hidden sm:min-h-[540px]"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  width={1600}
                  height={1000}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/10" />

                <div
                  className={cn(
                    "relative z-10 flex min-h-[460px] flex-col justify-between p-6 sm:min-h-[540px] sm:p-10",
                    textColorClasses[item.textColor || "white"] || "text-white",
                  )}
                >
                  <div className="flex justify-end">
                    <span className="grid size-11 place-items-center rounded-full bg-white text-[#111111] transition group-hover:rotate-45">
                      <ArrowUpRight size={20} aria-hidden="true" />
                    </span>
                  </div>

                  <div className="max-w-2xl">
                    <h3 className="text-4xl font-black uppercase leading-none tracking-tight sm:text-6xl">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export { CardsParallax }
