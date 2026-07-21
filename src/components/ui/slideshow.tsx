import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "motion/react"

import heroLcp from "@/assets/hero-lcp.jpg"
import cottonbro10047061 from "@/assets/pexels-cottonbro-10047061.jpg"
import cottonbro10679204 from "@/assets/pexels-cottonbro-10679204.jpg"
import cottonbro10677492 from "@/assets/pexels-cottonbro-10677492.jpg"
import pixelCotton from "@/assets/pixel cotton.jpg"
import { FlowButton } from "@/components/ui/flow-button"

const slides = [
  {
    img: heroLcp,
    text: ["Less Noise.", "More Identity."],
  },
  {
    img: cottonbro10047061,
    text: ["Wear Your Perspective"],
  },
  {
    img: cottonbro10679204,
    text: ["Built for the Bold"],
  },
  {
    img: pixelCotton,
    text: ["The Future of", "Modern Fashion"],
    position: "center -40px",
  },
  {
    img: cottonbro10677492,
    text: ["Crafted for Those", "Who Stand Apart"],
  },
]

const AUTO_SLIDE_DELAY = 4000

export default function Component() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const slideTimer = window.setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, AUTO_SLIDE_DELAY)

    return () => window.clearInterval(slideTimer)
  }, [])

  return (
    <section
      className="relative h-[calc(100svh-116px)] min-h-[520px] overflow-hidden bg-black text-white"
      aria-roledescription="carousel"
      aria-label="Featured fashion"
    >
      {slides.map((slide, index) => (
        <img
          key={slide.img}
          src={slide.img}
          alt={index === current ? slide.text.join(" ") : ""}
          width={1920}
          height={1080}
          loading={index === 0 ? "eager" : "lazy"}
          fetchPriority={index === 0 ? "high" : "auto"}
          decoding="async"
          aria-hidden={index !== current}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out motion-reduce:transition-none ${
            index === current
              ? "opacity-100"
              : "pointer-events-none opacity-0"
          }`}
          style={{ objectPosition: slide.position || "center" }}
        />
      ))}

      <div className="relative z-10 flex h-full items-end px-8 pb-16 pt-24 sm:px-12 lg:px-16">
        <AnimatePresence initial={false} mode="wait">
          <motion.h1
            key={current}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{
              opacity: { duration: 0.35 },
              y: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
            }}
            className="absolute bottom-10 left-8 flex max-w-6xl flex-col text-left text-5xl font-black uppercase leading-none tracking-tight sm:left-12 sm:text-7xl lg:left-16 lg:text-7xl"
          >
            {slides[current].text.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </motion.h1>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-6 right-6 z-20 sm:bottom-10 sm:right-8">
        <FlowButton
          text="Buy Now"
          variant="light"
          aria-label="Buy now"
          className="px-6 py-2.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        />
      </div>

      <div
        className="absolute right-6 top-6 z-20 rounded-full bg-black/40 px-4 py-2 text-sm font-semibold tabular-nums text-white backdrop-blur"
        aria-live="polite"
        aria-atomic="true"
      >
        {String(current + 1).padStart(2, "0")} /{" "}
        {String(slides.length).padStart(2, "0")}
      </div>
    </section>
  )
}
