import { useEffect, useState } from 'react'
import {
  ArrowLeft,
  ArrowDown,
  Box,
  CalendarDays,
  ChevronDown,
  CheckCircle2,
  Heart,
  Info,
  PackageCheck,
  RotateCcw,
  Ruler,
  ShieldCheck,
  Slash,
  Star,
  Truck,
  ZoomIn,
} from 'lucide-react'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/coss-breadcrumb'
import { FlowButton } from '@/components/ui/flow-button'
import hoodieImage from '@/assets/T-Shirt-Oversized.jpg'
import hoodieFlatImage from '@/assets/T-Shirt-Oversized-1.jpg'
import hoodieBackImage from '@/assets/T-Shirt-Oversized-2.jpg'
import hoodieDetailImage from '@/assets/T-Shirt-Oversized-3.jpeg'
import creamHoodieImage from '@/assets/Hoodlie.jpg'
import sweatshirtImage from '@/assets/Fashion Wool Shirt.jpg'
import zipUpHoodieImage from '@/assets/Zip up Hoodlie.jpg'
import essentialHoodieImage from '@/assets/Essential Hoodie.jpg'
import shirtProductImage from '@/assets/Shirt.jpg'
import shirtFlatImage from '@/assets/Shirt-1.png'
import shirtFaceImage from '@/assets/Shirt-2.png'
import shirtDetailImage from '@/assets/Shirt-3.jpg'
import jacketProductImage from '@/assets/Jackets.jpg'
import jacketBackImage from '@/assets/Jackets-1.jpg'
import jacketFlatImage from '@/assets/Jackets-2.jpg'
import jacketDetailImage from '@/assets/Jackets-3.jpg'
import jeansProductImage from '@/assets/Loose Jeans.jpg'
import jeansFullImage from '@/assets/Loose Jeans-1.jpeg'
import jeansBackImage from '@/assets/Loose Jeans-2.jpeg'
import jeansBack30Image from '@/assets/Loose Jeans-3.jpeg'
import trousersProductImage from '@/assets/Trousers-3.avif'
import trousersFrontImage from '@/assets/Trousers.avif'
import trousersBackImage from '@/assets/Trousers-2.avif'
import trousersZoomImage from '@/assets/Trousers-4.avif'
import accessoriesProductImage from '@/assets/Sunglass-Dark-Green.jpg'
import sunglassProductImage from '@/assets/Sunglass-Dark-Green-1.jpeg'
import sunglassFaceImage from '@/assets/Sunglass-Dark-Green-2.jpeg'
import sunglassBoxImage from '@/assets/Sunglass-Dark-Green-3.jpeg'
import womenTopsImage from '@/assets/Tops.jpg'
import womenDressesImage from '@/assets/Dresses.jpg'
import womenJacketsImage from '@/assets/Women Leather Jacket.jpg'
import womenJeansImage from '@/assets/Women Jeans.jpg'
import womenShirtsImage from '@/assets/Women Shirt.jpg'
import ringsImage from '@/assets/Rings.jpg'

const CART_STORAGE_KEY = 'aurex_cart_items'
const INITIAL_SHOPPING_BAG = []

function loadStoredCart() {
  try {
    const data = localStorage.getItem(CART_STORAGE_KEY)
    return data ? JSON.parse(data) : INITIAL_SHOPPING_BAG
  } catch {
    return INITIAL_SHOPPING_BAG
  }
}

const sizes = ['S', 'M', 'L', 'XL', 'XXL']
const initialDeliveryCountdown = (2 * 60 * 60) + (30 * 60) + 25
const colorOptions = [
  { name: 'Charcoal White', value: 'white' },
  { name: 'Black', value: 'black' },
  { name: 'Grey', value: 'grey' },
  { name: 'Brown', value: 'blue' },
]

const productCatalog = {
  tshirts: {
    title: 'T Shirt Oversized',
    price: '₹4,999',
    oldPrice: '₹7,499',
    colorName: 'Charcoal White',
    description: 'Premium heavyweight cotton T-shirt with an oversized fit for comfort and everyday modern style.',
    detailText: 'Crafted from high-quality heavyweight cotton, this T-shirt delivers structure, comfort, and durability. The oversized fit and bold graphic make it a versatile staple for any wardrobe.',
    detailImage: hoodieDetailImage,
    gallery: [
      { image: hoodieImage, label: 'Oversized T-shirt front' },
      { image: hoodieFlatImage, label: 'Oversized T-shirt flat lay' },
      { image: hoodieBackImage, label: 'Oversized T-shirt back' },
      { image: hoodieDetailImage, label: 'Oversized T-shirt detail' },
    ],
  },
  shirts: {
    title: 'Oxford Shirt',
    price: '₹3,499',
    oldPrice: '₹4,999',
    colorName: 'Classic White',
    description: 'A clean long-sleeve shirt cut for smart casual days, office dressing, and evening plans.',
    detailText: 'Made with a smooth woven fabric and a structured collar, this shirt is built for repeated wear while keeping a crisp modern silhouette.',
    detailImage: shirtProductImage,
    gallery: [
      { image: shirtProductImage, label: 'Oxford shirt front' },
      { image: shirtFlatImage, label: 'Styled shirt look' },
      { image: shirtFaceImage, label: 'Shirt fabric detail' },
      { image: shirtDetailImage, label: 'Shirt close detail' },
    ],
  },
  jackets: {
    title: 'Vegan Leather Trucker Jacket',
    price: '₹7,999',
    oldPrice: '₹10,999',
    colorName: 'Black',
    description: 'A sharp vegan leather jacket with a structured trucker fit and premium everyday finish.',
    detailText: 'Designed with a clean collar, durable panels, and a modern regular fit, this jacket adds polish to T-shirts, shirts, and denim looks.',
    detailImage: jacketProductImage,
    gallery: [
      { image: jacketProductImage, label: 'Vegan leather jacket front' },
      { image: jacketBackImage, label: 'Jacket styling detail' },
      { image: jacketFlatImage, label: 'Jacket outfit' },
      { image: jacketDetailImage, label: 'Jacket texture detail' },
    ],
  },
  jeans: {
    title: 'Loose Straight Jeans',
    price: '₹4,299',
    oldPrice: '₹5,999',
    colorName: 'Washed Blue',
    description: 'Loose straight-leg jeans with a relaxed seat, clean fall, and durable everyday denim feel.',
    detailText: 'Built from sturdy denim with a comfortable loose cut, these jeans are made for daily rotation and pair easily with tees, shirts, and jackets.',
    detailImage: jeansProductImage,
    gallery: [
      { image: jeansProductImage, label: 'Loose straight jeans' },
      { image: jeansFullImage, label: 'Denim styling' },
      { image: jeansBack30Image, label: 'Jeans outfit' },
      { image: jeansBackImage, label: 'Denim detail' },
    ],
  },
  trousers: {
    title: 'Relaxed Cargo Trousers',
    price: '₹4,499',
    oldPrice: '₹6,499',
    colorName: 'Olive',
    description: 'Relaxed trousers with a clean utility shape, easy movement, and refined streetwear styling.',
    detailText: 'Designed with a relaxed leg and practical everyday comfort, these trousers work with sneakers, boots, oversized tees, and jackets.',
    detailImage: trousersProductImage,
    gallery: [
      { image: trousersProductImage, label: 'Relaxed trousers' },
      { image: trousersFrontImage, label: 'Trouser fit detail' },
      { image: trousersBackImage, label: 'Trouser outfit' },
      { image: trousersZoomImage, label: 'Trouser fabric detail' },
    ],
  },
  accessories: {
    title: 'Sunglass Dark Green',
    price: '₹2,999',
    oldPrice: '₹4,499',
    colorName: 'Dark Green',
    description: 'A polished accessory pick designed to finish daily outfits with a clean premium accent.',
    detailText: 'Compact, useful, and easy to style, this accessory set adds a finished look to casual, smart casual, and travel outfits.',
    detailImage: accessoriesProductImage,
    gallery: [
      { image: accessoriesProductImage, label: 'Dark green accessory set' },
      { image: sunglassProductImage, label: 'Accessory styling' },
      { image: sunglassFaceImage, label: 'Accessory outfit' },
      { image: sunglassBoxImage, label: 'Accessory detail' },
    ],
  },
}

const shippingDetails = [
  { icon: PackageCheck, label: 'Discount', value: 'Disc 50%' },
  { icon: Box, label: 'Package', value: 'Regular Package' },
  { icon: CalendarDays, label: 'Delivery Time', value: '3-4 Working Days' },
  { icon: Truck, label: 'Estimation Arrive', value: '10 - 12 October 2024' },
]

const productBenefits = [
  { icon: Truck, title: 'Free Shipping', text: 'On orders over ₹4,999' },
  { icon: RotateCcw, title: 'Easy Returns', text: '30-day return policy' },
  { icon: ShieldCheck, title: 'Secure Payment', text: '100% secure checkout' },
]

const detailPoints = [
  'Oversized fit',
  'Soft & heavyweight fabric',
  'Adjustable drawstring hood',
  'Ribbed cuffs and hem',
  'Unisex style',
]

const shopCategories = [
  { name: 'Dresses', image: womenDressesImage, position: 'center', href: '/product-details?product=shirts' },
  { name: 'Tops', image: womenTopsImage, position: 'center', href: '/product-details?product=tshirts' },
  { name: 'Jackets', image: womenJacketsImage, position: '62% center', href: '/product-details?product=jackets' },
  { name: 'Jeans', image: womenJeansImage, position: 'center', href: '/product-details?product=jeans' },
  { name: 'Shirts', image: womenShirtsImage, position: 'center', href: '/product-details?product=shirts' },
  { name: 'Rings', image: ringsImage, position: 'center', href: '/product-details?product=accessories' },
]

const relatedProducts = [
  { name: 'Minimal Hoodie', price: '₹4,599', image: creamHoodieImage },
  { name: 'Classic Sweatshirt', price: '₹4,199', image: sweatshirtImage },
  { name: 'Zip Up Hoodie', price: '₹5,499', image: zipUpHoodieImage },
  { name: 'Essential Hoodie', price: '₹4,999', image: essentialHoodieImage },
]

function formatCountdown(totalSeconds) {
  const hours = Math.floor(totalSeconds / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60

  return [hours, minutes, seconds].map((value) => String(value).padStart(2, '0')).join(':')
}

export default function ProductDetailsPage() {
  const productKey = new URLSearchParams(window.location.search).get('product') || 'tshirts'
  const product = productCatalog[productKey] || productCatalog.tshirts

  const [cartItems, setCartItems] = useState(loadStoredCart)
  const [isCartOpen, setIsCartOpen] = useState(false)

  // Keep localStorage in sync
  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems))
  }, [cartItems])

  const handleAddToCart = () => {
    const cartItem = {
      name: product.title,
      size: selectedSize,
      color: product.colorName,
      quantity: 1,
      price: product.price,
      image: activeImage.image,
    }

    setCartItems((prevItems) => {
      const existingIndex = prevItems.findIndex(
        (item) => item.name === cartItem.name && item.size === cartItem.size
      )

      let updated
      if (existingIndex > -1) {
        updated = prevItems.map((item, idx) =>
          idx === existingIndex ? { ...item, quantity: item.quantity + 1 } : item
        )
      } else {
        updated = [...prevItems, cartItem]
      }
      return updated
    })

    setIsCartOpen(true)
  }
  const gallery = product.gallery
  const [selectedSize, setSelectedSize] = useState('S')
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [wished, setWished] = useState(false)
  const [deliveryCountdown, setDeliveryCountdown] = useState(initialDeliveryCountdown)
  const activeImage = gallery[activeImageIndex]

  const showNextImage = () => {
    setActiveImageIndex((index) => (index + 1) % gallery.length)
  }

  useEffect(() => {
    const timer = window.setInterval(() => {
      setDeliveryCountdown((seconds) => (seconds > 0 ? seconds - 1 : 0))
    }, 1000)

    return () => window.clearInterval(timer)
  }, [])

  useEffect(() => {
    setActiveImageIndex(0)
  }, [productKey])

  return (
    <main className="bg-white px-5 py-8 text-[#111] sm:px-8 lg:px-16">
      <style>
        {`
          @keyframes product-image-in {
            from {
              opacity: 0;
              transform: translateY(14px) scale(0.985);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
        `}
      </style>
      <div className="mx-auto max-w-7xl">
        <Breadcrumb className="flex items-center gap-3 text-sm text-black/45">
          <a href="/men" aria-label="Back to men page" className="grid size-9 place-items-center rounded-full transition hover:bg-black/5">
            <ArrowLeft className="size-5 text-[#111]" />
          </a>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/" className="font-semibold text-black/45 hover:text-[#111]">
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-black/35">
              <Slash />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink href="/men" className="font-semibold text-black/45 hover:text-[#111]">
                MenPage
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-black/35">
              <Slash />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage className="font-semibold text-black/55">Product details</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <section className="mt-10 grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
          <div className="grid gap-4 sm:grid-cols-[96px_1fr]">
            <div className="order-2 grid grid-cols-4 gap-3 sm:order-1 sm:grid-cols-1">
              {gallery.map((item, index) => (
                <button
                  type="button"
                  key={item.label}
                  onClick={() => setActiveImageIndex(index)}
                  aria-label={`Show ${item.label}`}
                  className={`aspect-[3/4] overflow-hidden rounded-2xl border bg-[#f2f2f2] transition hover:border-[#111] ${
                    activeImageIndex === index ? 'border-[#111]' : 'border-transparent'
                  }`}
                >
                  <img src={item.image} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
              <button
                type="button"
                aria-label="Move image gallery down"
                onClick={showNextImage}
                className="hidden min-h-14 place-items-center rounded-full border border-black/10 transition hover:bg-black hover:text-white sm:grid"
              >
                <ArrowDown className="size-5" />
              </button>
            </div>

            <div className="order-1 overflow-hidden rounded-[22px] bg-[#f3f3f3] sm:order-2">
              <div className="relative isolate aspect-[4/5] max-h-[760px] overflow-hidden rounded-[22px]">
                <img
                  key={activeImage.label}
                  src={activeImage.image}
                  alt={activeImage.label}
                  className="h-full w-full rounded-[22px] object-cover object-center [animation:product-image-in_450ms_ease-out]"
                  fetchPriority="high"
                />
                <button
                  type="button"
                  aria-label="Zoom product image"
                  className="absolute bottom-5 right-5 grid size-12 place-items-center rounded-full bg-white text-[#111] shadow-sm transition hover:scale-105"
                >
                  <ZoomIn className="size-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="lg:pt-4">
            <div className="inline-flex min-h-9 items-center rounded-full bg-[#f3f3f3] px-5 text-sm font-semibold">
              New Arrival
            </div>
            <h1 className="mt-5 max-w-xl text-4xl font-black leading-tight tracking-tight sm:text-5xl">
              {product.title}
            </h1>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="size-5 fill-[#111] text-[#111]" />
                ))}
              </div>
              <span className="text-sm font-semibold text-black/60">4.8 (128 reviews)</span>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <p className="text-3xl font-black">{product.price}</p>
              <p className="text-lg font-semibold text-black/35 line-through">{product.oldPrice}</p>
              <span className="rounded-md bg-[#111] px-3 py-1.5 text-xs font-bold text-white">33% OFF</span>
            </div>
            <p className="mt-5 max-w-xl text-base leading-7 text-black/65">
              {product.description}
            </p>

            <div className="mt-6 flex min-h-11 items-center gap-3 rounded-full border border-black/10 px-4 text-sm text-black/60 shadow-sm">
              <Info className="size-5 shrink-0 text-black/55" />
              <span>
                Order in <strong className="text-[#111]" aria-live="polite">{formatCountdown(deliveryCountdown)}</strong> to get
                next day delivery
              </span>
            </div>

            <div className="mt-7 border-t border-black/10 pt-6">
              <div className="flex items-center gap-2 text-sm">
                <span className="font-bold">Color:</span>
                <span className="text-black/70">{product.colorName}</span>
              </div>
              <div className="mt-4 flex gap-3">
                {colorOptions.map((color, index) => (
                  <button
                    type="button"
                    key={color.name}
                    aria-label={`Select ${color.name}`}
                    className={`size-10 rounded-full border p-1 transition hover:scale-105 ${
                      index === 0 ? 'border-[#111]' : 'border-transparent'
                    }`}
                  >
                    <span className="block h-full w-full rounded-full" style={{ backgroundColor: color.value }} />
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-7">
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm font-semibold text-black/50">Size: <span className="text-[#111]">{selectedSize}</span></p>
                <button type="button" className="flex items-center gap-2 text-sm font-semibold underline">
                  <Ruler className="size-4" />
                  Size Guide
                </button>
              </div>
              <div className="mt-4 grid grid-cols-5 gap-3">
                {sizes.map((size) => (
                  <button
                    type="button"
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`min-h-12 rounded-xl border text-sm font-bold transition ${
                      selectedSize === size ? 'border-[#111] bg-[#111] text-white' : 'border-black/10 bg-white text-[#111] hover:border-[#111]'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6 flex gap-4">
              <FlowButton
                text="Add to Cart"
                onClick={handleAddToCart}
                className="min-h-16 flex-1 justify-center !rounded-full !border-black !bg-black text-base font-bold !text-white hover:!rounded-full [&>span:first-of-type]:!text-white [&_svg]:!stroke-white cursor-pointer"
              />
              <button
                type="button"
                onClick={() => setWished((current) => !current)}
                aria-label={wished ? 'Remove from wishlist' : 'Add to wishlist'}
                aria-pressed={wished}
                className="grid size-16 place-items-center rounded-xl border border-black/10 transition hover:bg-black/5"
              >
                <Heart className={`size-6 ${wished ? 'fill-[#111]' : ''}`} />
              </button>
            </div>

            <div className="mt-7 grid gap-4 sm:grid-cols-3">
              {productBenefits.map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex items-start gap-3">
                  <Icon className="mt-0.5 size-5 shrink-0" />
                  <div>
                    <p className="text-xs font-black">{title}</p>
                    <p className="mt-1 text-xs text-black/55">{text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-7 rounded-3xl border border-black/10 p-5 sm:p-6">
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-2xl font-semibold">Description &amp; Fit</h2>
                <ChevronDown className="size-5 rotate-180" />
              </div>
              <p className="mt-4 max-w-2xl leading-7 text-black/55">
                {product.detailText}
              </p>
            </div>

            <div className="mt-4 rounded-3xl border border-black/10 p-5 sm:p-6">
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-2xl font-semibold">Shipping</h2>
                <ChevronDown className="size-5 rotate-180" />
              </div>
              <div className="mt-7 grid gap-6 sm:grid-cols-2">
                {shippingDetails.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-center gap-4">
                    <span className="grid size-11 place-items-center rounded-full bg-black/5">
                      <Icon className="size-5" />
                    </span>
                    <span>
                      <span className="block text-xs font-semibold text-black/35">{label}</span>
                      <span className="mt-1 block text-sm font-semibold">{value}</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-10 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:py-20">
          <div>
            <div className="flex flex-wrap gap-8 border-b border-black/10 text-sm">
              {['Details', 'Materials', 'Size & Fit', 'Shipping & Returns'].map((tab, index) => (
                <button
                  type="button"
                  key={tab}
                  className={`pb-4 font-semibold ${index === 0 ? 'border-b-2 border-[#111] text-[#111]' : 'text-black/55'}`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <p className="mt-7 max-w-xl leading-7 text-black/70">
              {product.detailText}
            </p>
            <div className="mt-7 space-y-4">
              {detailPoints.map((point) => (
                <div key={point} className="flex items-center gap-3 text-sm font-semibold">
                  <CheckCircle2 className="size-5" />
                  {point}
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl bg-[#f3f3f3]">
            <img src={product.detailImage} alt={`${product.title} detail`} className="aspect-[16/10] h-full w-full object-cover" />
          </div>
        </section>

        <section className="border-t border-black/10 py-16 lg:py-20">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-black/45">Explore the edit</p>
              <h2 className="mt-2 text-3xl font-black uppercase tracking-tight sm:text-5xl">Shop by category</h2>
            </div>
            <a href="/women" className="text-sm font-bold uppercase tracking-wider">
              View all
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-x-3 gap-y-8 sm:grid-cols-3 sm:gap-x-5 lg:grid-cols-6">
            {shopCategories.map((category) => (
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
        </section>

        <section className="pb-16 lg:pb-20">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-3xl font-black tracking-tight">You May Also Like</h2>
            <a href="/men" className="text-sm font-bold">View All →</a>
          </div>
          <div className="mt-7 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {relatedProducts.map((product) => (
              <article key={product.name} className="overflow-hidden rounded-2xl border border-black/10 bg-white">
                <div className="aspect-[4/3] bg-[#f3f3f3]">
                  <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
                </div>
                <div className="flex items-center justify-between gap-3 p-4">
                  <div>
                    <h3 className="text-sm font-black">{product.name}</h3>
                    <p className="mt-1 text-sm font-bold">{product.price}</p>
                  </div>
                  <button type="button" aria-label={`Add ${product.name} to wishlist`} className="grid size-10 place-items-center rounded-full transition hover:bg-black/5">
                    <Heart className="size-5" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>

      {/* Cart Drawer */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${
          isCartOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop overlay */}
        <div
          onClick={() => setIsCartOpen(false)}
          className="absolute inset-0 bg-black/50 backdrop-blur-[2px] cursor-pointer"
        />

        {/* Drawer container */}
        <div
          className={`absolute right-0 top-0 bottom-0 w-full max-w-[440px] bg-white text-[#161b1f] shadow-2xl flex flex-col transition-transform duration-300 ease-out ${
            isCartOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between border-b border-black/10 px-6 py-5">
            <h2 className="text-xl font-bold">Shopping Bag ({cartItems.reduce((acc, item) => acc + item.quantity, 0)})</h2>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1 text-black/55 hover:text-black transition cursor-pointer"
            >
              <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Drawer Body (Scrollable list) */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {cartItems.length > 0 ? (
              <ul className="divide-y divide-black/10">
                {cartItems.map((item, idx) => {
                  const itemPrice = parseFloat(item.price.replace(/[^\d.]/g, '')) || 0
                  const itemTotalFormatted = (itemPrice * item.quantity).toLocaleString('en-IN', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })
                  return (
                    <li key={`${item.name}-${item.size}-${idx}`} className="flex gap-4 py-5">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-24 w-18 object-cover object-top rounded-md bg-black/5"
                      />
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between gap-2">
                            <h3 className="text-sm font-bold line-clamp-1">{item.name}</h3>
                            <p className="text-sm font-semibold text-right">₹{itemTotalFormatted}</p>
                          </div>
                          <p className="text-xs text-black/45 mt-1">Size: {item.size} | Color: {item.color}</p>
                        </div>
                        <div className="flex items-center justify-between mt-2">
                          {/* Qty select */}
                          <div className="flex items-center gap-2 border border-black/10 px-2 py-0.5 rounded">
                            <button
                              type="button"
                              onClick={() => {
                                const updated = cartItems.map((itm, i) =>
                                  i === idx ? { ...itm, quantity: Math.max(0, itm.quantity - 1) } : itm
                                ).filter(itm => itm.quantity > 0)
                                setCartItems(updated)
                              }}
                              className="text-sm font-semibold text-black/50 hover:text-black cursor-pointer px-1"
                            >
                              -
                            </button>
                            <span className="text-xs font-semibold w-4 text-center">{item.quantity}</span>
                            <button
                              type="button"
                              onClick={() => {
                                const updated = cartItems.map((itm, i) =>
                                  i === idx ? { ...itm, quantity: itm.quantity + 1 } : itm
                                )
                                setCartItems(updated)
                              }}
                              className="text-sm font-semibold text-black/50 hover:text-black cursor-pointer px-1"
                            >
                              +
                            </button>
                          </div>
                          {/* Remove button */}
                          <button
                            type="button"
                            onClick={() => {
                              const updated = cartItems.filter((_, i) => i !== idx)
                              setCartItems(updated)
                            }}
                            className="text-xs text-red-600 hover:underline cursor-pointer"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </li>
                  )
                })}
              </ul>
            ) : (
              <div className="h-full flex flex-col items-center justify-center py-12 text-center">
                <p className="text-sm text-black/45">Your shopping bag is empty.</p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="mt-4 text-xs font-bold uppercase tracking-wider underline cursor-pointer"
                >
                  Shop Now
                </button>
              </div>
            )}
          </div>

          {/* Drawer Footer */}
          {cartItems.length > 0 && (
            <div className="border-t border-black/10 px-6 py-6 bg-black/[0.01]">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-black/60">Subtotal</span>
                <span className="text-lg font-bold">
                  ₹
                  {cartItems.reduce((sum, item) => {
                    const priceNum = parseFloat(item.price.replace(/[^\d.]/g, '')) || 0
                    return sum + priceNum * item.quantity
                  }, 0).toLocaleString('en-IN', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </span>
              </div>
              <a
                href="/cart"
                className="block w-full text-center bg-[#161b1f] hover:bg-black text-white text-xs font-bold uppercase py-4 tracking-wider transition rounded-full mb-3"
              >
                Checkout
              </a>
              <button
                onClick={() => setIsCartOpen(false)}
                className="block w-full text-center text-xs font-bold uppercase py-2 tracking-wider hover:underline cursor-pointer"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
