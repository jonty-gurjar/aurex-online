import { createElement, useRef, useState } from 'react'
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Heart,
  LockKeyhole,
  RotateCcw,
  Star,
  Truck,
} from 'lucide-react'

import heroImage from '@/assets/MenPage.jpg'
import menEditorialImage from '@/assets/Trousers-3.avif'
import streetImage from '@/assets/Hoodlie.jpg'
import streetwearImage from '@/assets/Streetwear.jpg'
import boldImage from '@/assets/pexels-cottonbro-10679204.jpg'
import apartImage from '@/assets/pexels-cottonbro-10677492.jpg'
import perspectiveImage from '@/assets/pexels-cottonbro-10047061.jpg'
import shoesImage from '@/assets/Boost shoes.jpg'
import shirtImage from '@/assets/Shirt.jpg'
import jeansImage from '@/assets/Loose Jeans.jpg'
import jacketImage from '@/assets/Jackets.jpg'
import tshirtImage from '@/assets/T-Shirt-Oversized.jpg'
import accessoriesImage from '@/assets/Sunglass-Dark-Green.jpg'
import { FlowButton } from '@/components/ui/flow-button'

const categories = [
  { name: 'T-Shirts', image: tshirtImage, product: 'tshirts' },
  { name: 'Shirts', image: shirtImage, product: 'shirts' },
  { name: 'Jackets', image: jacketImage, product: 'jackets' },
  { name: 'Jeans', image: jeansImage, product: 'jeans' },
  { name: 'Trousers', image: menEditorialImage, product: 'trousers' },
  { name: 'Sunglass', image: accessoriesImage, product: 'accessories' },
]

const newArrivals = [
  { name: 'Oversized T-Shirt', price: '₹ 2,500', image: tshirtImage },
  { name: 'Oxford Shirt', price: '₹ 3,500', image: shirtImage },
  { name: 'Bomber Jacket', price: '₹ 6,900', image: jacketImage },
  { name: 'Loose Straight Jeans', price: '₹ 4,000', image: jeansImage },
  { name: 'Cargo Pants', price: '₹ 4,200', image: menEditorialImage },
  { name: 'Leather Sneakers', price: '₹ 4,900', image: shoesImage },
  { name: 'Oversized Hoodie', price: '₹ 3,900', image: streetImage },
  { name: 'Crossbody Bag', price: '₹ 3,200', image: accessoriesImage },
]

const bestSellers = [
  { name: 'Heavyweight Tee', price: '₹ 2,800', image: tshirtImage },
  { name: 'Relaxed Fit Jeans', price: '₹ 4,200', image: jeansImage },
  { name: 'Leather Jacket', price: '₹ 7,900', image: jacketImage },
  { name: 'Oversized Hoodie', price: '₹ 3,900', image: streetImage },
  { name: 'Cargo Pants', price: '₹ 4,200', image: menEditorialImage },
  { name: 'Chelsea Boots', price: '₹ 5,500', image: shoesImage },
  { name: 'Classic Shirt', price: '₹ 3,500', image: shirtImage },
  { name: 'Square Sunglasses', price: '₹ 2,000', image: accessoriesImage },
]

const trends = [
  { name: 'Streetwear', image: streetwearImage, position: 'center' },
  { name: 'Smart Casual', image: perspectiveImage, position: 'center' },
  { name: 'Essentials', image: boldImage, position: 'center' },
  { name: 'Premium Denim', image: apartImage, position: 'center' },
]

const editorialImages = [
  { image: streetImage, alt: 'Aurex men’s streetwear editorial' },
  { image: perspectiveImage, alt: 'Modern menswear perspective' },
  { image: boldImage, alt: 'Bold modern tailoring' },
  { image: apartImage, alt: 'Premium men’s fashion look' },
]

const features = [
  { icon: Truck, title: 'Free Shipping', text: 'Free delivery on orders over ₹2999.' },
  { icon: LockKeyhole, title: 'Secure Payment', text: '100% safe and encrypted checkout.' },
  { icon: Star, title: 'Premium Quality', text: 'Crafted with premium fabrics and attention to detail.' },
  { icon: RotateCcw, title: 'Easy Returns', text: 'Simple 7-day return and exchange policy.' },
]

function ProductCard({ product, wished, onWishlist, onAddToCart }) {
  return (
    <article className="group">
      <div className="relative aspect-[4/5] overflow-hidden bg-[#f1f1ef]">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
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
        <h3 className="font-semibold">{product.name}</h3>
        <p className="shrink-0 text-sm font-semibold">{product.price}</p>
      </div>
    </article>
  )
}

export default function MenPage() {
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

    container.scrollBy({
      left: direction * container.clientWidth * 0.8,
      behavior: 'smooth',
    })
  }

  return (
    <main className="bg-white text-[#111]">
      <section className="relative min-h-[640px] overflow-hidden sm:min-h-[720px]">
        <img
          src={heroImage}
          alt="Aurex modern menswear collection"
          width={4000}
          height={2267}
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />
        <div className="relative flex min-h-[640px] flex-col items-start justify-end gap-8 px-8 pb-16 sm:min-h-[720px] sm:px-12 sm:pb-20 lg:flex-row lg:items-end lg:justify-between lg:px-16 lg:pb-24">
          <div className="max-w-3xl text-white">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/75">Men’s Collection</p>
            <h1 className="mt-4 text-5xl font-black uppercase leading-[0.9] tracking-[-0.045em] sm:text-7xl lg:text-7xl">
              Crafted for the modern man
            </h1>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <FlowButton
              text="Shop Collection"
              variant="light"
              onClick={() => document.querySelector('#men-new-arrivals')?.scrollIntoView({ behavior: 'smooth' })}
            />
            <button
              type="button"
              onClick={() => document.querySelector('#men-new-arrivals')?.scrollIntoView({ behavior: 'smooth' })}
              className="rounded-full border border-white px-7 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[#111]"
            >
              New Arrivals
            </button>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-black/45">Explore the edit</p>
          <h2 className="mt-2 text-4xl font-black uppercase tracking-tight sm:text-5xl">Shop by category</h2>
          <div className="mt-10 grid grid-cols-2 gap-x-3 gap-y-8 sm:grid-cols-3 sm:gap-x-5 lg:grid-cols-6">
            {categories.map((category) => (
              <a href={`/product-details?product=${category.product}`} key={category.name} className="group">
                <div className="aspect-[3/4] overflow-hidden bg-[#f5f5f5]">
                  <img
                    src={category.image}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-3 text-sm font-bold uppercase tracking-[0.1em]">{category.name}</h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="men-new-arrivals" className="bg-[#f5f5f5] px-5 py-16 sm:px-8 sm:py-24 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-4xl font-black uppercase tracking-tight sm:text-6xl">New arrivals</h2>
              <p className="mt-3 text-sm text-black/55 sm:text-base">
                Discover premium essentials built for every season and every occasion.
              </p>
            </div>
            <a href="#men-best-sellers" className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider">
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
          src={streetImage}
          alt="Aurex everyday menswear editorial"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative flex min-h-[620px] items-end px-5 pb-16 text-white sm:px-10 lg:px-16 lg:pb-20">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-white/70">Aurex essentials</p>
            <h2 className="mt-4 text-5xl font-black uppercase leading-none tracking-tight sm:text-7xl">Built for everyday</h2>
            <p className="mt-5 max-w-xl text-white/80">
              Clean silhouettes, premium fabrics, and effortless style made for modern living.
            </p>
            <FlowButton text="Explore Collection" variant="light" className="mt-8" />
          </div>
        </div>
      </section>

      <section className="overflow-hidden px-5 py-16 sm:px-8 sm:py-24 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-end justify-between gap-5">
            <h2 className="text-4xl font-black uppercase tracking-tight sm:text-6xl">Trending now</h2>
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
                <div className="relative aspect-[4/5] overflow-hidden bg-[#e9e4dc]">
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

      <section id="men-best-sellers" className="bg-[#f5f5f5] px-5 py-16 sm:px-8 sm:py-24 lg:px-16">
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
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-black/45">Lookbook</p>
              <h2 className="mt-2 text-4xl font-black uppercase tracking-tight sm:text-6xl">Men’s editorial</h2>
              <p className="mt-4 text-black/55">
                Explore curated looks inspired by modern minimalism and everyday luxury.
              </p>
            </div>
            <FlowButton text="View Lookbook" />
          </div>
          <div className="mt-10 grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-5">
            {editorialImages.map((item, index) => (
              <div key={item.alt} className={`overflow-hidden bg-[#e9e4dc] ${index % 2 ? 'mt-8' : ''}`}>
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  className="aspect-[3/4] h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1c1c1c] px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-black uppercase tracking-tight sm:text-5xl">Why choose Aurex</h2>
          <div className="mt-10 grid gap-px bg-white/15 sm:grid-cols-2 lg:grid-cols-4">
            {features.map(({ icon: Icon, title, text }) => (
              <article key={title} className="bg-[#1c1c1c] p-7 sm:p-8">
                {createElement(Icon, {
                  className: 'size-7 stroke-[1.5]',
                  'aria-hidden': true,
                })}
                <h3 className="mt-8 text-sm font-bold uppercase tracking-[0.14em]">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/55">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#e9e4dc] px-5 py-20 sm:px-8 sm:py-28 lg:px-16">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-black/45">Aurex insiders</p>
          <h2 className="mt-3 text-4xl font-black uppercase tracking-tight sm:text-6xl">Join the Aurex community</h2>
          <p className="mt-5 max-w-xl text-sm leading-6 text-black/60 sm:text-base">
            Get early access to exclusive drops, new collections, and member-only offers.
          </p>
          <form
            className="mt-9 flex w-full max-w-xl flex-col gap-3 sm:flex-row"
            onSubmit={(event) => {
              event.preventDefault()
              setSubscribed(true)
            }}
          >
            <label htmlFor="men-email" className="sr-only">Email address</label>
            <input
              id="men-email"
              type="email"
              required
              placeholder="Email Address"
              className="min-h-12 flex-1 border border-black/30 bg-white px-5 text-sm outline-none transition placeholder:text-black/40 focus:border-black"
            />
            <FlowButton type="submit" text="Subscribe" className="min-h-12 justify-center" />
          </form>
          {subscribed && <p className="mt-4 text-sm text-black/60" role="status">Thank you for subscribing.</p>}
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 sm:py-24 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-black/45">Follow the movement</p>
              <h2 className="mt-2 text-4xl font-black uppercase tracking-tight sm:text-6xl">@Aurex</h2>
            </div>
            <a href="#" className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider">
              Follow us <ArrowRight className="size-4" />
            </a>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
            {[streetImage, perspectiveImage, boldImage, apartImage, heroImage, menEditorialImage].map((image, index) => (
              <a href="#" key={image} aria-label={`View Aurex post ${index + 1}`} className="group overflow-hidden bg-[#f5f5f5]">
                <img
                  src={image}
                  alt=""
                  loading="lazy"
                  className="aspect-square h-full w-full object-cover transition duration-500 group-hover:scale-105 group-hover:brightness-75"
                />
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
