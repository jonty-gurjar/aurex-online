import { ArrowRight } from 'lucide-react'

import accessoriesImage from '@/assets/Sunglass-Dark-Green.jpg'
import birthdayImage from '@/assets/Birthday.png'
import festiveImage from '@/assets/Festive.jpeg'
import ValentineImage from '@/assets/Valentine.jpeg'
import heroImage from '@/assets/Gift.jpeg'
import hoodieImage from '@/assets/Kids.jpeg'
import perfumeImage from '@/assets/Married.jpeg'
import shirtImage from '@/assets/T-shirt-men.jpg'
import sneakerImage from '@/assets/Boost shoes.jpg'
import travelImage from '@/assets/Corporte.jpeg'
import walletImage from '@/assets/pexels-cottonbro-10047061.jpg'
import weddingImage from '@/assets/Anniversary.png'
import { FlowButton } from '@/components/ui/flow-button'

const occasions = [
  { name: 'Birthday', image: birthdayImage },
  { name: 'Anniversary', image: perfumeImage },
  { name: 'Wedding', image: weddingImage },
  { name: 'Valentine', image: ValentineImage },
  { name: 'Festive Gifts', image: festiveImage },
  { name: 'Corporate Gifts', image: travelImage },
]

const categories = [
  { name: 'Gift Boxes', image: heroImage },
  { name: 'T-Shirts', image: shirtImage },
  { name: 'Hoodies', image: hoodieImage },
  { name: 'Accessories', image: accessoriesImage },
  { name: 'Watches', image: walletImage },
  { name: 'Sneakers', image: sneakerImage },
]

const giftSets = [
  { name: 'Premium Gift Box', image: heroImage },
  { name: 'Hoodie + Cap Set', image: hoodieImage },
  { name: 'Wallet + Belt Set', image: walletImage },
  { name: 'Perfume Gift Set', image: perfumeImage },
  { name: 'Travel Essentials', image: travelImage },
  { name: 'Luxury Accessories Box', image: accessoriesImage },
]

export default function GiftPage() {
  const scrollToGifts = () => {
    document.querySelector('#gift-occasions')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main className="bg-white text-[#111]">
      <section className="relative min-h-[640px] overflow-hidden sm:min-h-[720px]">
        <img
          src={heroImage}
          alt=""
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-black/10" />
        <div className="relative flex min-h-[640px] items-end px-6 pb-16 sm:min-h-[720px] sm:px-12 sm:pb-20 lg:px-16 lg:pb-24">
          <div className="flex w-full flex-col items-start justify-between gap-9 lg:flex-row lg:items-end">
            <div className="max-w-4xl text-white">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/70">Aurex gifting</p>
              <h1 className="mt-4 text-5xl font-black uppercase leading-[0.9] tracking-[-0.045em] sm:text-7xl lg:text-7xl">
                Give style. Share the moment.
              </h1>
              
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              <FlowButton text="Shop Gifts" variant="light" onClick={scrollToGifts} />
              <button
                type="button"
                onClick={() => document.querySelector('#gift-categories')?.scrollIntoView({ behavior: 'smooth' })}
                className="rounded-full border border-white px-7 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[#111]"
              >
                Explore Collection
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="gift-occasions" className="px-5 py-16 sm:px-8 sm:py-24 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-black/45">Find the perfect gesture</p>
          <h2 className="mt-2 text-4xl font-black uppercase tracking-tight sm:text-6xl">Shop by occasion</h2>
          <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
            {occasions.map((occasion) => (
              <a
                href="#curated-gift-sets"
                key={occasion.name}
                className="group relative aspect-[4/5] overflow-hidden bg-[#eee] md:aspect-[4/3]"
              >
                <img src={occasion.image} alt="" loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent" />
                <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-3 text-white sm:inset-x-6 sm:bottom-6">
                  <h3 className="text-lg font-black uppercase sm:text-2xl">{occasion.name}</h3>
                  <ArrowRight className="size-5 shrink-0 transition-transform group-hover:translate-x-1" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="gift-categories" className="bg-[#f5f2ed] px-5 py-16 sm:px-8 sm:py-24 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-black uppercase tracking-tight sm:text-6xl">Gift categories</h2>
          <div className="mt-10 grid grid-cols-2 gap-x-3 gap-y-8 sm:grid-cols-3 lg:grid-cols-6 lg:gap-5">
            {categories.map((category) => (
              <a href="#curated-gift-sets" key={category.name} className="group">
                <div className="aspect-[3/4] overflow-hidden bg-white">
                  <img src={category.image} alt="" loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <div className="mt-4 flex items-center justify-between gap-2">
                  <h3 className="font-bold uppercase">{category.name}</h3>
                  <ArrowRight className="size-4 shrink-0 transition-transform group-hover:translate-x-1" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="curated-gift-sets" className="px-5 py-16 sm:px-8 sm:py-24 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-black/45">Ready to give</p>
          <h2 className="mt-2 text-4xl font-black uppercase tracking-tight sm:text-6xl">Curated gift sets</h2>
          <div className="mt-10 grid grid-cols-2 gap-x-3 gap-y-10 sm:grid-cols-3 sm:gap-x-5 lg:grid-cols-6">
            {giftSets.map((gift) => (
              <article key={gift.name} className="group">
                <div className="aspect-[4/5] overflow-hidden bg-[#f3f2ef]">
                  <img src={gift.image} alt={gift.name} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <h3 className="mt-4 font-semibold">{gift.name}</h3>
                <button type="button" className="mt-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
                  View gift <ArrowRight className="size-3.5" />
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative min-h-[600px] overflow-hidden">
        <img src={weddingImage} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative flex min-h-[600px] items-end px-5 pb-16 text-white sm:px-10 lg:px-16 lg:pb-20">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-white/70">The finishing touch</p>
            <h2 className="mt-4 text-5xl font-black uppercase leading-none tracking-tight sm:text-8xl">Wrapped with style</h2>
            <p className="mt-5 max-w-xl text-white/75">Beautifully packaged gifts made to impress.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
