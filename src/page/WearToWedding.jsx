import React from 'react'
import { ArrowRight } from 'lucide-react'
import weddingImage from '@/assets/Rustic Autumn Wedding.jpg'

function FlowButton({ text = 'See Details' }) {
  return (
    <button
      type="button"
      className="group relative mt-8 flex cursor-pointer items-center gap-1 overflow-hidden rounded-[100px] border-[1.5px] border-[#111111] bg-[#111111] px-12 py-4 text-sm font-bold text-white shadow-lg transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:rounded-[12px] hover:text-[#111111] active:scale-[0.95]"
    >
      <ArrowRight className="absolute left-[-25%] z-[9] size-4 fill-none stroke-white transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:left-5 group-hover:stroke-[#111111]" />

      <span className="relative z-[1] -translate-x-3 transition-all duration-[800ms] ease-out group-hover:translate-x-3">
        {text}
      </span>

      <span className="absolute left-1/2 top-1/2 size-4 -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-white opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:size-[220px] group-hover:opacity-100" />

      <ArrowRight className="absolute right-5 z-[9] size-4 fill-none stroke-white transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:right-[-25%] group-hover:stroke-[#111111]" />
    </button>
  )
}

const WearToWedding = () => {
  return (
    <section className="bg-white px-5 py-16 text-[#111111] sm:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div
          className="h-[260px] overflow-hidden rounded-[28px] bg-[#f3f2ee] bg-cover bg-center sm:h-[360px] lg:h-[430px]"
          style={{ backgroundImage: `url(${weddingImage})` }}
          role="img"
          aria-label="Wedding fashion collection"
        >
          <img
            src={weddingImage}
            alt="Wedding fashion collection"
            className="sr-only"
          />
        </div>

        <div className="mx-auto mt-10 flex max-w-3xl flex-col items-center text-center">
          <h2 className="text-4xl font-black uppercase leading-none tracking-tight sm:text-5xl lg:text-6xl">
            Wear To Wedding
          </h2>
          <p className="mt-5 text-sm font-medium leading-relaxed text-black/70 sm:text-base">
            A symphony of contemporary elegance and timeless craftsmanship, designed to make every wedding moment unforgettable. ✨
          </p>
          <FlowButton text="See Details" />
        </div>
      </div>
    </section>
  )
}

export default WearToWedding
