import { createElement, useRef, useState } from 'react'
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Heart,
  Leaf,
  RotateCcw,
  Sparkles,
  Truck,
} from 'lucide-react'

import kidsImage from '@/assets/Kids.jpg'
import tshirtImage from '@/assets/T-shirt-men.jpg'
import jacketImage from '@/assets/Jackets.jpg'
import jeansImage from '@/assets/Loose Jeans.jpg'
import shoesImage from '@/assets/Boost shoes.jpg'
import shirtImage from '@/assets/Fashion Wool Shirt.jpg'
import denimjeansImage from '@/assets/Denim jeans.jpg'
import streetImage from '@/assets/pexels-cottonbro-9834553.jpg'
import backpackImage from '@/assets/School Backpack.jpg'
import logocapImage from '@/assets/Logo cap.jpg'
import { FlowButton } from '@/components/ui/flow-button'

const categories = [
  { name: 'Boys', image: kidsImage, position: '60% center' },
  { name: 'Girls', image: kidsImage, position: '25% center' },
  { name: 'T-Shirts', image: tshirtImage, position: 'center' },
  { name: 'Hoodies', image: kidsImage, position: '55% center' },
  { name: 'Bottoms', image: jeansImage, position: 'center' },
  { name: 'Shoes', image: shoesImage, position: 'center' },
]

const newArrivals = [
  { name: 'Graphic T-Shirt', price: '₹ 1,299', image: tshirtImage },
  { name: 'Denim Jacket', price: '₹ 2,799', image: jacketImage },
  { name: 'Hoodie Set', price: '₹ 2,499', image: kidsImage, position: '55% center' },
  { name: 'Cargo Joggers', price: '₹ 1,899', image: jeansImage },
  { name: 'Everyday Sneakers', price: '₹ 2,299', image: shoesImage },
  { name: 'Cotton Dress', price: '₹ 2,199', image: kidsImage, position: '25% center' },
  { name: 'Polo Shirt', price: '₹ 1,599', image: shirtImage },
  { name: 'School Backpack', price: '₹ 1,999', image: backpackImage },
]

const bestSellers = [
  { name: 'Printed Tee', price: '₹ 1,299', image: tshirtImage },
  { name: 'Aurex Hoodie', price: '₹ 2,199', image: kidsImage, position: '58% center' },
  { name: 'Relaxed Joggers', price: '₹ 1,699', image: jeansImage },
  { name: 'Denim Jeans', price: '₹ 1,999', image: denimjeansImage },
  { name: 'Cotton Dress', price: '₹ 2,199', image: kidsImage, position: '25% center' },
  { name: 'Play Sneakers', price: '₹ 2,299', image: shoesImage },
  { name: 'Logo Cap', price: '₹ 899', image: logocapImage },
  { name: 'School Backpack', price: '₹ 1,999', image: backpackImage },
]

const trends = [
  { name: 'School Essentials', image: kidsImage, position: 'center' },
  { name: 'Weekend Wear', image: streetImage, position: 'center' },
  { name: 'Summer Collection', image: kidsImage, position: '25% center' },
  { name: 'Winter Layers', image: kidsImage, position: '72% center' },
]

const ageGroups = [
  { age: '0–2 Years', color: 'bg-[#fff3c4]', position: '20% center' },
  { age: '3–5 Years', color: 'bg-[#dceeff]', position: '38% center' },
  { age: '6–9 Years', color: 'bg-[#f7f3ee]', position: '62% center' },
  { age: '10–14 Years', color: 'bg-[#e8e8e8]', position: '78% center' },
]

const features = [
  { icon: Sparkles, title: 'Soft & Skin-Friendly', text: 'Gentle, breathable materials for all-day comfort.' },
  { icon: Leaf, title: 'Premium Quality', text: 'Made with durable fabrics for everyday play.' },
  { icon: Truck, title: 'Free Shipping', text: 'Free delivery on qualifying orders.' },
  { icon: RotateCcw, title: 'Easy Returns', text: '7-day hassle-free returns and exchanges.' },
]

const getProductDetailKey = (name) => {
  const value = name.toLowerCase()
  if (value.includes('jean') || value.includes('denim')) return 'jeans'
  if (value.includes('jacket')) return 'jackets'
  if (value.includes('jogger') || value.includes('cargo')) return 'trousers'
  if (value.includes('shirt') || value.includes('dress')) return 'shirts'
  if (value.includes('sneaker') || value.includes('backpack') || value.includes('cap')) return 'accessories'
  return 'tshirts'
}

function ProductCard({ product, wished, onWishlist, onAddToCart }) {
  const detailHref = `/product-details?product=${getProductDetailKey(product.name)}`

  return (
    <article className="group">
      <div className="relative aspect-[4/5] overflow-hidden bg-[#f7f3ee]">
        <a href={detailHref} aria-label={`View ${product.name} details`} className="block h-full w-full">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            style={{ objectPosition: product.position || 'center' }}
          />
        </a>
        <button
          type="button"
          onClick={onWishlist}
          aria-label={`${wished ? 'Remove' : 'Add'} ${product.name} ${wished ? 'from' : 'to'} wishlist`}
          aria-pressed={wished}
          className="absolute right-3 top-3 grid size-10 place-items-center rounded-full bg-white/90 transition hover:bg-white"
        >
          <Heart className={`size-5 text-[#111] ${wished ? 'fill-[#111]' : ''}`} />
        </button>
        <div className="pointer-events-none absolute inset-x-4 bottom-5 z-10 translate-y-2 opacity-0 transition duration-300 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 focus-within:pointer-events-auto focus-within:translate-y-0 focus-within:opacity-100">
          <FlowButton
            type="button"
            onClick={onAddToCart}
            text="Add to cart"
            className="w-full justify-center rounded-full !border-[#111] !bg-[#111] px-3 py-3 text-xs uppercase tracking-[0.14em] !text-white shadow-lg hover:rounded-[12px]"
          />
        </div>
      </div>
      <div className="mt-4 flex items-start justify-between gap-4">
        <a href={detailHref} className="font-semibold transition hover:text-black/60">
          {product.name}
        </a>
        <p className="shrink-0 text-sm font-semibold">{product.price}</p>
      </div>
    </article>
  )
}

export default function KidsPage() {
  const trendingRef = useRef(null)
  const [wishlist, setWishlist] = useState([])
  const [cartCount, setCartCount] = useState(0)
  const [subscribed, setSubscribed] = useState(false)

  const toggleWishlist = (name) => {
    setWishlist((current) =>
      current.includes(name) ? current.filter((item) => item !== name) : [...current, name],
    )
  }

  const scrollTrending = (direction) => {
    const container = trendingRef.current
    if (!container) return
    container.scrollBy({ left: direction * container.clientWidth * 0.8, behavior: 'smooth' })
  }

  return (
    <main className="bg-white text-[#111]">
      <section className="relative min-h-[640px] overflow-hidden sm:min-h-[720px]">
        <img
          src={kidsImage}
          alt="Aurex kids collection"
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/20 to-transparent" />
        <div className="relative flex min-h-[640px] flex-col items-start justify-end gap-8 px-8 pb-16 sm:min-h-[720px] sm:px-12 sm:pb-20 lg:flex-row lg:items-end lg:justify-between lg:px-16 lg:pb-24">
          <div className="max-w-3xl text-white">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/75">Aurex Kids</p>
            <h1 className="mt-4 text-5xl font-black uppercase leading-[0.9] tracking-[-0.045em] sm:text-7xl lg:text-7xl">
              Made for little adventures
            </h1>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <FlowButton
              text="Shop Kids"
              variant="light"
              onClick={() => document.querySelector('#kids-new-arrivals')?.scrollIntoView({ behavior: 'smooth' })}
            />
            <button
              type="button"
              onClick={() => document.querySelector('#kids-new-arrivals')?.scrollIntoView({ behavior: 'smooth' })}
              className="rounded-full border border-white px-7 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[#111]"
            >
              New Arrivals
            </button>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-black/45">Find their favourites</p>
          <h2 className="mt-2 text-4xl font-black uppercase tracking-tight sm:text-5xl">Shop by category</h2>
          <div className="mt-10 grid grid-cols-2 gap-x-3 gap-y-8 sm:grid-cols-3 sm:gap-x-5 lg:grid-cols-6">
            {categories.map((category) => (
              <a href="#kids-new-arrivals" key={category.name} className="group">
                <div className="aspect-[3/4] overflow-hidden bg-[#f7f3ee]">
                  <img
                    src={category.image}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ objectPosition: category.position }}
                  />
                </div>
                <h3 className="mt-3 text-sm font-bold uppercase tracking-[0.1em]">{category.name}</h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="kids-new-arrivals" className="bg-[#f7f3ee] px-5 py-16 sm:px-8 sm:py-24 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-4xl font-black uppercase tracking-tight sm:text-6xl">New arrivals</h2>
              <p className="mt-3 text-sm text-black/55 sm:text-base">
                Fresh styles crafted for comfort, movement, and everyday adventures.
              </p>
            </div>
            <a href="#kids-best-sellers" className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider">
              View all <ArrowRight className="size-4" />
            </a>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-x-3 gap-y-10 sm:gap-x-5 lg:grid-cols-4">
            {newArrivals.map((product) => (
              <ProductCard
                key={product.name}
                product={product}
                wished={wishlist.includes(product.name)}
                onWishlist={() => toggleWishlist(product.name)}
                onAddToCart={() => setCartCount((count) => count + 1)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="relative min-h-[620px] overflow-hidden">
        <img
          src={kidsImage}
          alt="Kids exploring in comfortable Aurex outfits"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover object-[65%_center]"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative flex min-h-[620px] items-end px-5 pb-16 text-white sm:px-10 lg:px-16 lg:pb-20">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-white/70">Everyday comfort</p>
            <h2 className="mt-4 text-5xl font-black uppercase leading-none tracking-tight sm:text-7xl">Play. Explore. Grow.</h2>
            <p className="mt-5 text-white/80">Soft fabrics, playful designs, and everyday comfort for active kids.</p>
            <FlowButton text="Discover Collection" variant="light" className="mt-8" />
          </div>
        </div>
      </section>

      <section className="overflow-hidden px-5 py-16 sm:px-8 sm:py-24 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-end justify-between gap-5">
            <h2 className="text-4xl font-black uppercase tracking-tight sm:text-6xl">Trending for kids</h2>
            <div className="flex gap-2" aria-label="Trending collection controls">
              <button
                type="button"
                onClick={() => scrollTrending(-1)}
                aria-label="Previous trending items"
                className="grid size-11 place-items-center rounded-full border border-black/20 transition hover:bg-[#111] hover:text-white"
              >
                <ChevronLeft className="size-5" />
              </button>
              <button
                type="button"
                onClick={() => scrollTrending(1)}
                aria-label="Next trending items"
                className="grid size-11 place-items-center rounded-full border border-black/20 transition hover:bg-[#111] hover:text-white"
              >
                <ChevronRight className="size-5" />
              </button>
            </div>
          </div>
          <div
            ref={trendingRef}
            className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {trends.map((trend) => (
              <article key={trend.name} className="group min-w-[78%] snap-start sm:min-w-[45%] lg:min-w-[31%]">
                <div className="relative aspect-[4/5] overflow-hidden bg-[#dceeff]">
                  <img
                    src={trend.image}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ objectPosition: trend.position }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
                  <h3 className="absolute bottom-6 left-6 text-2xl font-black uppercase text-white">{trend.name}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="kids-best-sellers" className="bg-[#f7f3ee] px-5 py-16 sm:px-8 sm:py-24 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-end justify-between">
            <h2 className="text-4xl font-black uppercase tracking-tight sm:text-6xl">Best sellers</h2>
            <p className="text-sm font-semibold" aria-live="polite">{cartCount} in cart</p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-x-3 gap-y-10 sm:gap-x-5 lg:grid-cols-4">
            {bestSellers.map((product) => (
              <ProductCard
                key={product.name}
                product={product}
                wished={wishlist.includes(product.name)}
                onWishlist={() => toggleWishlist(product.name)}
                onAddToCart={() => setCartCount((count) => count + 1)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 sm:py-24 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-black uppercase tracking-tight sm:text-6xl">Shop by age</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {ageGroups.map((group) => (
              <a href="#kids-new-arrivals" key={group.age} className={`group relative aspect-[4/5] overflow-hidden ${group.color}`}>
                <img
                  src={kidsImage}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
                  style={{ objectPosition: group.position }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <h3 className="absolute bottom-6 left-6 text-2xl font-black uppercase text-white">{group.age}</h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#dceeff] px-5 py-16 sm:px-8 sm:py-20 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-black uppercase tracking-tight sm:text-5xl">Why choose Aurex Kids</h2>
          <div className="mt-10 grid gap-px bg-black/10 sm:grid-cols-2 lg:grid-cols-4">
            {features.map(({ icon: Icon, title, text }) => (
              <article key={title} className="bg-[#dceeff] p-7 sm:p-8">
                {createElement(Icon, { className: 'size-7 stroke-[1.5]', 'aria-hidden': true })}
                <h3 className="mt-8 text-sm font-bold uppercase tracking-[0.14em]">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-black/55">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 sm:py-24 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-black/45">Style gallery</p>
              <h2 className="mt-2 text-4xl font-black uppercase tracking-tight sm:text-6xl">Little style icons</h2>
            </div>
            <FlowButton text="View Gallery" />
          </div>
          <div className="mt-10 grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-5">
            {['20% center', '42% center', '64% center', '82% center'].map((position, index) => (
              <div key={position} className={`overflow-hidden bg-[#fff3c4] ${index % 2 ? 'mt-8' : ''}`}>
                <img
                  src={kidsImage}
                  alt={`Aurex kids style look ${index + 1}`}
                  loading="lazy"
                  className="aspect-[3/4] h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  style={{ objectPosition: position }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#111] px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-16">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-white/50">Aurex insiders</p>
          <h2 className="mt-3 text-4xl font-black uppercase tracking-tight sm:text-6xl">Join the Aurex family</h2>
          <p className="mt-5 max-w-xl text-sm leading-6 text-white/60 sm:text-base">
            Be the first to know about new kids&apos; collections, seasonal drops, and exclusive offers.
          </p>
          <form
            className="mt-9 flex w-full max-w-xl flex-col gap-3 sm:flex-row"
            onSubmit={(event) => {
              event.preventDefault()
              setSubscribed(true)
            }}
          >
            <label htmlFor="kids-email" className="sr-only">Email address</label>
            <input
              id="kids-email"
              type="email"
              required
              placeholder="Email Address"
              className="min-h-12 flex-1 border border-white/30 bg-transparent px-5 text-sm outline-none transition placeholder:text-white/40 focus:border-white"
            />
            <FlowButton type="submit" text="Subscribe" variant="light" className="min-h-12 justify-center" />
          </form>
          {subscribed && <p className="mt-4 text-sm text-white/70" role="status">Thank you for subscribing.</p>}
        </div>
      </section>
    </main>
  )
}
