import { useState } from 'react'
import { ArrowRight, Heart, Star } from 'lucide-react'

import heroImage from '@/assets/hero-lcp.jpg'
import womenImage from '@/assets/women.jpeg'
import kidsImage from '@/assets/Kids.jpeg'
import menImage from '@/assets/Men.jpg'
import menPageImage from '@/assets/MenPage.jpg'
import streetImage from '@/assets/pexels-cottonbro-9834553.jpg'
import perspectiveImage from '@/assets/pexels-cottonbro-10047061.jpg'
import boldImage from '@/assets/pexels-cottonbro-10679204.jpg'
import apartImage from '@/assets/pexels-cottonbro-10677492.jpg'
import tshirtImage from '@/assets/T-shirt-men.jpg'
import shirtImage from '@/assets/Fashion Wool Shirt.jpg'
import jacketImage from '@/assets/Jackets.jpg'
import jeansImage from '@/assets/Loose Jeans.jpg'
import shoesImage from '@/assets/Boost shoes.jpg'
import accessoriesImage from '@/assets/Sunglass-Dark-Green.jpg'
import weddingImage from '@/assets/Wedding.jpeg'
import { FlowButton } from '@/components/ui/flow-button'

const products = [
  { name: 'Structured Blazer', price: '₹ 6,900', image: womenImage, badge: 'NEW', rating: '4.9' },
  { name: 'Heavyweight Tee', price: '₹ 2,800', image: tshirtImage, badge: 'NEW', rating: '4.8' },
  { name: 'Satin Evening Dress', price: '₹ 7,500', image: weddingImage, badge: 'LIMITED', rating: '4.9' },
  { name: 'Oxford Shirt', price: '₹ 3,500', image: shirtImage, badge: 'NEW', rating: '4.7' },
  { name: 'Leather Trucker', price: '₹ 7,900', image: jacketImage, badge: 'LIMITED', rating: '4.9' },
  { name: 'Wide Leg Denim', price: '₹ 4,200', image: jeansImage, badge: 'NEW', rating: '4.6' },
  { name: 'Leather Sneakers', price: '₹ 4,900', image: shoesImage, badge: 'NEW', rating: '4.8' },
  { name: 'Square Sunglasses', price: '₹ 2,000', image: accessoriesImage, badge: 'LIMITED', rating: '4.7' },
  { name: 'Modern Overshirt', price: '₹ 4,500', image: streetImage, badge: 'NEW', rating: '4.8' },
  { name: 'Relaxed Tailoring', price: '₹ 6,400', image: perspectiveImage, badge: 'LIMITED', rating: '4.9' },
  { name: 'Kids Hoodie Set', price: '₹ 2,499', image: kidsImage, badge: 'NEW', rating: '4.8' },
  { name: 'Minimal Essentials', price: '₹ 3,200', image: boldImage, badge: 'NEW', rating: '4.7' },
]

const newConfig = {
  eyebrow: 'Aurex / New',
  heading: 'New season arrivals',
  hero: heroImage,
  primaryHeading: 'Just dropped',
  primaryText: 'The newest pieces, available now.',
  primaryProducts: products,
  secondHeading: 'Trending this week',
  secondItems: [
    { name: "Men's Picks", image: menPageImage, href: '/men' },
    { name: "Women's Picks", image: womenImage, href: '/women' },
    { name: "Kids' Picks", image: kidsImage, href: '/kids' },
  ],
  collectionHeading: 'New collections',
  collections: [
    { name: "Summer '26", image: womenImage },
    { name: 'Essentials', image: boldImage },
    { name: 'Denim', image: jeansImage },
    { name: 'Outerwear', image: jacketImage },
  ],
  bannerEyebrow: 'Campaign 01',
  bannerHeading: 'First look',
  bannerText: 'A first glimpse at the silhouettes defining the new season.',
  bannerImage: perspectiveImage,
  recommendedHeading: 'Recommended for you',
}

const featuredConfig = {
  eyebrow: 'Curated by Aurex',
  heading: 'Featured collection',
  text: 'Discover the most loved pieces selected by our designers.',
  hero: perspectiveImage,
  primaryHeading: "Editor's picks",
  primaryText: 'Considered pieces chosen for design, quality, and lasting relevance.',
  primaryProducts: products.slice(0, 8),
  secondHeading: 'Trending categories',
  secondItems: [
    { name: 'Streetwear', image: streetImage, href: '#' },
    { name: 'Minimal', image: boldImage, href: '#' },
    { name: 'Luxury', image: womenImage, href: '#' },
    { name: 'Essentials', image: apartImage, href: '#' },
  ],
  collectionHeading: 'Best sellers',
  collections: [
    { name: 'Modern Tailoring', image: perspectiveImage },
    { name: 'Premium Denim', image: jeansImage },
    { name: 'Everyday Leather', image: jacketImage },
    { name: 'New Accessories', image: accessoriesImage },
  ],
  bannerEyebrow: 'Aurex Limited',
  bannerHeading: 'Made in limited numbers',
  bannerText: 'Elevated materials. Precise construction. Pieces designed to remain rare.',
  bannerImage: menImage,
  recommendedHeading: 'Customer favorites',
}

const getProductDetailKey = (name) => {
  const value = name.toLowerCase()
  if (value.includes('jean') || value.includes('denim')) return 'jeans'
  if (value.includes('blazer') || value.includes('jacket') || value.includes('trucker')) return 'jackets'
  if (value.includes('tailoring')) return 'trousers'
  if (value.includes('shirt') || value.includes('dress') || value.includes('overshirt')) return 'shirts'
  if (value.includes('sneaker') || value.includes('sunglass')) return 'accessories'
  return 'tshirts'
}

function ProductCard({ product, wished, onWishlist, onAddToCart, showRating }) {
  const detailHref = `/product-details?product=${getProductDetailKey(product.name)}`

  return (
    <article className="group">
      <div className="relative aspect-[4/5] overflow-hidden bg-[#f3f2ef]">
        <a href={detailHref} aria-label={`View ${product.name} details`} className="block h-full w-full">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
        </a>
        <span className="absolute left-3 top-3 bg-white px-3 py-1.5 text-[10px] font-black tracking-[0.15em]">
          {product.badge}
        </span>
        <button
          type="button"
          onClick={onWishlist}
          aria-label={`${wished ? 'Remove' : 'Add'} ${product.name} ${wished ? 'from' : 'to'} wishlist`}
          aria-pressed={wished}
          className="absolute right-3 top-3 grid size-10 place-items-center rounded-full bg-white/90"
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
      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          <a href={detailHref} className="font-semibold transition hover:text-black/60">
            {product.name}
          </a>
          {showRating && (
            <p className="mt-1 flex items-center gap-1 text-xs text-black/55">
              <Star className="size-3 fill-[#111]" /> {product.rating}
            </p>
          )}
        </div>
        <p className="shrink-0 text-sm font-semibold">{product.price}</p>
      </div>
    </article>
  )
}

export default function NewFeaturedPage({ variant = 'new' }) {
  const config = variant === 'featured' ? featuredConfig : newConfig
  const [wishlist, setWishlist] = useState([])
  const [cartCount, setCartCount] = useState(0)
  const [subscribed, setSubscribed] = useState(false)

  const toggleWishlist = (name) => {
    setWishlist((current) =>
      current.includes(name) ? current.filter((item) => item !== name) : [...current, name],
    )
  }

  return (
    <main className="bg-white text-[#111]">
      <section className="relative min-h-[640px] overflow-hidden sm:min-h-[720px]">
        <img src={config.hero} alt="" fetchPriority="high" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-black/5" />
        <div className="relative flex min-h-[640px] flex-col items-start justify-end gap-8 px-8 pb-16 sm:min-h-[720px] sm:px-12 sm:pb-20 lg:flex-row lg:items-end lg:justify-between lg:px-16 lg:pb-24">
          <div className="max-w-3xl text-white">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/70">{config.eyebrow}</p>
            <h1 className="mt-4 text-5xl font-black uppercase leading-[0.9] tracking-[-0.045em] sm:text-7xl lg:text-7xl">
              {config.heading}
            </h1>
          </div>
          <div className="flex shrink-0 flex-wrap items-center justify-end gap-3">
            <button
              type="button"
              className="rounded-full border border-white px-7 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[#111]"
            >
              {variant === 'new' ? 'Explore Collection' : 'View Lookbook'}
            </button>
            <FlowButton
              text={variant === 'new' ? 'Shop New' : 'Shop Featured'}
              variant="light"
              onClick={() => document.querySelector('#primary-products')?.scrollIntoView({ behavior: 'smooth' })}
            />
          </div>
        </div>
      </section>

      <section id="primary-products" className="bg-[#f5f5f2] px-5 py-16 sm:px-8 sm:py-24 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-end justify-between gap-5">
            <div>
              <h2 className="text-4xl font-black uppercase tracking-tight sm:text-6xl">{config.primaryHeading}</h2>
              <p className="mt-3 text-black/55">{config.primaryText}</p>
            </div>
            <p className="shrink-0 text-sm font-semibold" aria-live="polite">{cartCount} in cart</p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-x-3 gap-y-10 sm:gap-x-5 lg:grid-cols-4">
            {config.primaryProducts.map((product) => (
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
          <h2 className="text-4xl font-black uppercase tracking-tight sm:text-6xl">{config.secondHeading}</h2>
          <div className={`mt-10 grid gap-4 ${config.secondItems.length === 3 ? 'lg:grid-cols-3' : 'sm:grid-cols-2 lg:grid-cols-4'}`}>
            {config.secondItems.map((item) => (
              <a href={item.href} key={item.name} className="group relative aspect-[4/5] overflow-hidden bg-[#eaeaea]">
                <img src={item.image} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
                <h3 className="absolute bottom-6 left-6 text-2xl font-black uppercase text-white">{item.name}</h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f5f2ed] px-5 py-16 sm:px-8 sm:py-24 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-black uppercase tracking-tight sm:text-6xl">{config.collectionHeading}</h2>
          <div className="mt-10 grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-5">
            {config.collections.map((collection) => (
              <article key={collection.name} className="group">
                <div className="aspect-[3/4] overflow-hidden bg-white">
                  <img src={collection.image} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <h3 className="mt-4 text-lg font-black uppercase">{collection.name}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative min-h-[650px] overflow-hidden">
        <img src={config.bannerImage} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative flex min-h-[650px] items-end px-5 pb-16 text-white sm:px-10 lg:px-16 lg:pb-20">
          <div className="flex w-full flex-col items-start gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
            <div className="max-w-3xl text-left">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-white/70">{config.bannerEyebrow}</p>
              <h2 className="mt-4 text-5xl font-black uppercase leading-none tracking-tight sm:text-8xl">{config.bannerHeading}</h2>
              <p className="mt-5 max-w-xl text-white/75">{config.bannerText}</p>
            </div>
            <FlowButton text="Discover More" variant="light" className="shrink-0 self-end lg:self-auto" />
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 sm:py-24 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-black uppercase tracking-tight sm:text-6xl">{config.recommendedHeading}</h2>
          <div className="mt-10 grid grid-cols-2 gap-x-3 gap-y-10 sm:gap-x-5 lg:grid-cols-4">
            {products.slice(4, 8).map((product) => (
              <ProductCard
                key={product.name}
                product={product}
                wished={wishlist.includes(product.name)}
                onWishlist={() => toggleWishlist(product.name)}
                onAddToCart={() => setCartCount((count) => count + 1)}
                showRating={variant === 'featured'}
              />
            ))}
          </div>
        </div>
      </section>

      {variant === 'featured' && (
        <section className="bg-[#111] px-5 py-16 text-white sm:px-8 sm:py-24 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <div className="flex items-end justify-between">
              <h2 className="text-4xl font-black uppercase tracking-tight sm:text-6xl">@Aurex</h2>
              <a href="#" className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider">
                Follow us <ArrowRight className="size-4" />
              </a>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
              {[streetImage, womenImage, kidsImage, perspectiveImage, apartImage, menImage].map((image, index) => (
                <a href="#" key={`${image}-${index}`} aria-label={`View Aurex post ${index + 1}`} className="overflow-hidden">
                  <img src={image} alt="" loading="lazy" className="aspect-square h-full w-full object-cover transition duration-500 hover:scale-105 hover:brightness-75" />
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className={`${variant === 'featured' ? 'bg-[#f5f2ed] text-[#111]' : 'bg-[#111] text-white'} px-5 py-20 sm:px-8 sm:py-28 lg:px-16`}>
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <p className="text-xs font-bold uppercase tracking-[0.28em] opacity-50">Aurex insiders</p>
          <h2 className="mt-3 text-4xl font-black uppercase tracking-tight sm:text-6xl">Join the community</h2>
          <p className="mt-5 max-w-xl text-sm leading-6 opacity-60 sm:text-base">
            Get early access to new collections, limited releases, and member-only offers.
          </p>
          <form
            className="mt-9 flex w-full max-w-xl flex-col gap-3 sm:flex-row"
            onSubmit={(event) => {
              event.preventDefault()
              setSubscribed(true)
            }}
          >
            <label htmlFor={`${variant}-email`} className="sr-only">Email address</label>
            <input
              id={`${variant}-email`}
              type="email"
              required
              placeholder="Email Address"
              className="min-h-12 flex-1 border border-current/30 bg-transparent px-5 text-sm outline-none placeholder:opacity-40"
            />
            <FlowButton
              type="submit"
              text="Subscribe"
              variant={variant === 'featured' ? 'dark' : 'light'}
              className="min-h-12 justify-center"
            />
          </form>
          {subscribed && <p className="mt-4 text-sm opacity-60" role="status">Thank you for subscribing.</p>}
        </div>
      </section>
    </main>
  )
}
