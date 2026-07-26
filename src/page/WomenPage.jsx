import { useRef, useState } from 'react'
import { ArrowRight, ChevronLeft, ChevronRight, Heart } from 'lucide-react'

import womenImage from '@/assets/women.jpeg'
import topsImage from '@/assets/Tops.jpg'
import weddingImage from '@/assets/Dresses.jpg'
import rusticImage from '@/assets/Women Shirt.jpg'
import accessoriesImage from '@/assets/accessoires.jpg'
import ringsImage from '@/assets/Rings.jpg'
import sunglassesImage from '@/assets/Sunglass-Dark-Green.jpg'
import jeansImage from '@/assets/Women Jeans.jpg'
import jacketsImage from '@/assets/Women Leather Jacket.jpg'
import oversizedImage from '@/assets/Oversized Blazed.jpg'
import satindressImage from '@/assets/Satin Dress.jpg'
import widejeansImage from '@/assets/widejeanswomen.jpg'
import knitsweaterImage from '@/assets/Kint Sweater.jpg'
import leatherbagImage from '@/assets/Leather Bag.jpg'
import sneakerwImage from '@/assets/Sneakers-W.jpg'
import summerImage from '@/assets/Summer-edit.jpg'
import officeImage from '@/assets/Office-wear.jpg'
import eveningImage from '@/assets/Evening.jpg'
import minimalImage from '@/assets/Minimal.jpg'
import { FlowButton } from '@/components/ui/flow-button'

const categories = [
  { name: 'Dresses', image: weddingImage, position: 'center', href: '/product-details?product=shirts' },
  { name: 'Tops', image: topsImage, position: 'center', href: '/product-details?product=tshirts' },
  { name: 'Jackets', image: jacketsImage, position: '62% center', href: '/product-details?product=jackets' },
  { name: 'Jeans', image: jeansImage, position: 'center', href: '/product-details?product=jeans' },
  { name: 'Shirts', image: rusticImage, position: 'center', href: '/product-details?product=shirts' },
  { name: 'Rings', image: ringsImage, position: 'center', href: '/product-details?product=accessories' },
]

const newArrivals = [
  { name: 'Oversized Blazer', price: '₹ 6,900', image: oversizedImage, position: '72% center' },
  { name: 'Satin Dress', price: '₹ 5,500', image: satindressImage, position: 'center -0px' },
  { name: 'Wide Leg Jeans', price: '₹ 4,200', image: widejeansImage, position: 'center' },
  { name: 'Knit Sweater', price: '₹ 3,800', image: knitsweaterImage, position: 'center' },
  { name: 'Leather Bag', price: '₹ 7,200', image: leatherbagImage, position: 'center' },
  { name: 'Everyday Sneakers', price: '₹ 4,900', image: sneakerwImage, position: 'center' },
]

const bestSellers = [
  ...newArrivals,
  { name: 'Siza Sunglasses', price: '₹ 2,000', image: sunglassesImage, position: 'center' },
  { name: 'Evening Column Dress', price: '₹ 7,900', image: rusticImage, position: 'center' },
]

const trends = [
  { name: 'Summer Edit', image: summerImage, position: '25% center' },
  { name: 'Office Wear', image: officeImage, position: 'center -25px' },
  { name: 'Evening Collection', image: eveningImage, position: 'center -25px' },
  { name: 'Minimal Basics', image: minimalImage, position: 'center' },
]

const journal = [
  { image: womenImage, position: '72% center', alt: 'Modern tailored womenswear' },
  { image: weddingImage, position: 'center', alt: 'Elegant occasion styling' },
  { image: rusticImage, position: 'center', alt: 'Editorial neutral fashion' },
  { image: accessoriesImage, position: 'center', alt: 'Curated fashion accessories' },
]

const getProductDetailKey = (name) => {
  const value = name.toLowerCase()
  if (value.includes('jean') || value.includes('denim')) return 'jeans'
  if (value.includes('blazer') || value.includes('jacket')) return 'jackets'
  if (value.includes('dress') || value.includes('shirt')) return 'shirts'
  if (value.includes('bag') || value.includes('sneaker') || value.includes('sunglass')) return 'accessories'
  return 'tshirts'
}

function ProductCard({ product, wished, onWishlist, onAddToCart }) {
  const detailHref = `/product-details?product=${getProductDetailKey(product.name)}`

  return (
    <article className="group">
      <div className="relative aspect-[4/5] overflow-hidden bg-[#f1efeb]">
        <a href={detailHref} aria-label={`View ${product.name} details`} className="block h-full w-full">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            style={{ objectPosition: product.position }}
          />
        </a>
        <button
          type="button"
          onClick={onWishlist}
          aria-label={`${wished ? 'Remove' : 'Add'} ${product.name} ${wished ? 'from' : 'to'} wishlist`}
          aria-pressed={wished}
          className="absolute right-3 top-3 grid size-10 place-items-center rounded-full bg-white/90 transition hover:bg-white"
        >
          <Heart className={`size-5 ${wished ? 'fill-[#111] text-[#111]' : 'text-[#111]'}`} />
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

export default function WomenPage() {
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
          src={womenImage}
          alt="Aurex women’s collection"
          width={2048}
          height={1152}
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover object-[67%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/20 to-transparent" />
        <div className="relative flex min-h-[640px] flex-col items-start justify-end gap-8 px-8 pb-16 sm:min-h-[720px] sm:px-12 sm:pb-20 lg:flex-row lg:items-end lg:justify-between lg:px-16 lg:pb-24">
          <div className="max-w-3xl text-white">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/75">Women’s Collection</p>
            <h1 className="mt-4 text-5xl font-black uppercase leading-[0.9] tracking-[-0.045em] sm:text-7xl lg:text-7xl">
              Elegance in every detail
            </h1>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <FlowButton
              text="Shop Collection"
              variant="light"
              onClick={() => document.querySelector('#new-arrivals')?.scrollIntoView({ behavior: 'smooth' })}
            />
            <button
              type="button"
              onClick={() => document.querySelector('#new-arrivals')?.scrollIntoView({ behavior: 'smooth' })}
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
              <a href={category.href} key={category.name} className="group">
                <div className="aspect-[3/4] overflow-hidden bg-[#f5f2ed]">
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

      <section id="new-arrivals" className="bg-[#f5f2ed] px-5 py-16 sm:px-8 sm:py-24 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-4xl font-black uppercase tracking-tight sm:text-6xl">New arrivals</h2>
              <p className="mt-3 text-sm text-black/55 sm:text-base">
                Fresh styles crafted with modern silhouettes and premium fabrics.
              </p>
            </div>
            <a href="#best-sellers" className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider">
              View all <ArrowRight className="size-4" />
            </a>
          </div>
          <div className="mt-10 grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
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
        <img src={weddingImage} alt="Sophisticated women’s occasion collection" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative flex min-h-[620px] items-end px-5 pb-16 text-white sm:px-10 lg:px-16 lg:pb-20">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-white/70">The occasion edit</p>
            <h2 className="mt-4 text-5xl font-black uppercase leading-none tracking-tight sm:text-7xl">Designed to be seen</h2>
            <p className="mt-5 text-white/80">Sophisticated essentials made for every occasion.</p>
            <FlowButton text="Discover More" variant="light" className="mt-8" />
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
                <div className="relative aspect-[4/5] overflow-hidden bg-[#eaeaea]">
                  <img src={trend.image} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" style={{ objectPosition: trend.position }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
                  <h3 className="absolute bottom-6 left-6 text-2xl font-black uppercase text-white">{trend.name}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="best-sellers" className="bg-[#f5f2ed] px-5 py-16 sm:px-8 sm:py-24 lg:px-16">
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
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-black/45">Editorial</p>
            <h2 className="mt-2 text-4xl font-black uppercase tracking-tight sm:text-6xl">Style journal</h2>
            <p className="mt-4 text-black/55">Explore curated looks and everyday inspiration.</p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-5">
            {journal.map((item, index) => (
              <div key={item.alt} className={`overflow-hidden bg-[#eaeaea] ${index % 2 ? 'mt-8' : ''}`}>
                <img src={item.image} alt={item.alt} loading="lazy" className="aspect-[3/4] h-full w-full object-cover transition-transform duration-700 hover:scale-105" style={{ objectPosition: item.position }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#111] px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-16">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-white/50">Aurex insiders</p>
          <h2 className="mt-3 text-4xl font-black uppercase tracking-tight sm:text-6xl">Join the community</h2>
          <p className="mt-5 max-w-xl text-sm leading-6 text-white/60 sm:text-base">
            Be the first to discover new collections and exclusive offers.
          </p>
          <form
            className="mt-9 flex w-full max-w-xl flex-col gap-3 sm:flex-row"
            onSubmit={(event) => {
              event.preventDefault()
              setSubscribed(true)
            }}
          >
            <label htmlFor="women-email" className="sr-only">Email address</label>
            <input
              id="women-email"
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
