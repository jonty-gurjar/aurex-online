import { useEffect, useState } from 'react'
import { Check, Slash } from 'lucide-react'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/coss-breadcrumb'

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

function CheckoutInput({ placeholder, type = 'text' }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full border-0 border-b border-black/20 bg-transparent px-0 py-2 text-sm text-[#161b1f] outline-none placeholder:text-black/35 focus:border-[#161b1f]"
    />
  )
}

function CheckoutSection({ title, children }) {
  return (
    <section>
      <h2 className="text-2xl font-semibold text-[#161b1f] sm:text-3xl">{title}</h2>
      {children}
    </section>
  )
}

function ChoiceRow({ name, title, detail, price, checked, brand }) {
  return (
    <label className="flex cursor-pointer items-center gap-3 border-b border-black/15 py-4">
      <input
        type="radio"
        name={name}
        defaultChecked={checked}
        className="size-4 accent-[#161b1f]"
      />
      <span className="min-w-0 flex-1">
        <span className="block text-sm font-bold text-[#161b1f]">{title}</span>
        {detail ? <span className="block text-xs text-black/45">{detail}</span> : null}
      </span>
      {brand ? <span className="text-sm font-black text-[#161b1f]">{brand}</span> : null}
      {price ? <span className="text-sm font-semibold text-[#161b1f]">{price}</span> : null}
    </label>
  )
}

export default function CartPage() {
  const [bagItems, setBagItems] = useState(loadStoredCart)
  const [checkoutStatus, setCheckoutStatus] = useState('idle')

  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(bagItems))
  }, [bagItems])

  const handleRemove = (name) => {
    setCheckoutStatus('idle')
    setBagItems((prev) => prev.filter((item) => item.name !== name))
  }

  const handleUpdateQuantity = (name, newQty) => {
    setCheckoutStatus('idle')

    if (newQty <= 0) {
      handleRemove(name)
    } else {
      setBagItems((prev) =>
        prev.map((item) =>
          item.name === name ? { ...item, quantity: newQty } : item
        )
      )
    }
  }

  const handlePlaceOrder = () => {
    if (bagItems.length === 0 || checkoutStatus === 'loading') return

    setCheckoutStatus('loading')
    setTimeout(() => {
      setCheckoutStatus('complete')
    }, 1200)
  }

  const total = bagItems.reduce((sum, item) => {
    const priceNum = parseFloat(item.price.replace(/[^\d.]/g, '')) || 0
    return sum + priceNum * item.quantity
  }, 0)

  const formattedTotal = total.toLocaleString('en-IN', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })

  return (
    <main className="bg-[#f4f4f4] px-5 py-10 text-[#161b1f] sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1440px] border-t border-black/10 pt-8">
        <Breadcrumb className="mb-8 flex items-center gap-3 text-sm text-black/45">
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
              <BreadcrumbPage className="font-semibold text-black/55">Cart</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <h1 className="text-6xl font-black uppercase leading-none tracking-normal text-[#161b1f] sm:text-7xl lg:text-8xl">
          Checkout
        </h1>

        <div className="mt-12 grid gap-14 lg:grid-cols-[minmax(0,1.35fr)_minmax(380px,0.9fr)] lg:gap-20">
          <form className="space-y-16">
            <CheckoutSection title="Information">
              <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                <h3 className="text-sm font-bold">Personal Information</h3>
                <p className="text-xs text-black/45">
                  Already have an account?{' '}
                  <a href="#" className="font-semibold text-[#161b1f]">
                    Log in
                  </a>
                </p>
              </div>

              <div className="mt-4 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                <CheckoutInput placeholder="First name" />
                <CheckoutInput placeholder="Last name" />
                <CheckoutInput placeholder="Phone number" />
                <CheckoutInput placeholder="Email" type="email" />
              </div>

              <h3 className="mt-10 text-sm font-bold">Shipping Information</h3>
              <div className="mt-4 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                <CheckoutInput placeholder="Country / Region" />
                <CheckoutInput placeholder="City" />
                <CheckoutInput placeholder="Address" />
                <CheckoutInput placeholder="Zip / Postal code" />
              </div>

              <label className="mt-5 flex items-center gap-2 text-xs text-black/50">
                <input type="checkbox" defaultChecked className="size-4 accent-[#161b1f]" />
                I agree to data processing
              </label>
            </CheckoutSection>

            <CheckoutSection title="Delivery">
              <div className="mt-8">
                <ChoiceRow
                  name="delivery"
                  title="Standart Delivery"
                  detail="Delivery within 5-7 days"
                  price="Free"
                  checked
                />
                <ChoiceRow
                  name="delivery"
                  title="Express Shipping"
                  detail="Delivery within 1-2 days"
                  price="₹ 50.00"
                />
              </div>
            </CheckoutSection>

            <CheckoutSection title="Payment">
              <div className="mt-8">
                <ChoiceRow name="payment" title="Credit card" brand="VISA  MC" checked />
                <div className="grid gap-x-8 gap-y-3 border-b border-black/15 pb-4 sm:grid-cols-2">
                  <CheckoutInput placeholder="Card number" />
                  <CheckoutInput placeholder="Cardholder name" />
                  <CheckoutInput placeholder="Expiration date (MM/YY)" />
                  <CheckoutInput placeholder="CVV" />
                </div>
                <ChoiceRow name="payment" title="PayPal" brand="PayPal" />
                <ChoiceRow name="payment" title="Apple Pay" brand="Pay" />
              </div>

              <label className="mt-5 flex items-center gap-2 text-xs text-black/50">
                <input type="checkbox" defaultChecked className="size-4 accent-[#161b1f]" />
                I agree to data processing
              </label>

              <button
                type="button"
                disabled={bagItems.length === 0 || checkoutStatus === 'loading'}
                onClick={handlePlaceOrder}
                className="mt-7 flex w-full items-center justify-center gap-2 border border-[#161b1f] bg-white px-6 py-4 text-xs font-black uppercase tracking-wider text-[#161b1f] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#161b1f] hover:text-white hover:shadow-xl hover:shadow-black/15 active:translate-y-0 disabled:border-black/10 disabled:bg-white/60 disabled:text-black/25 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-sm"
              >
                {checkoutStatus === 'complete' ? (
                  <>
                    <Check className="size-4" />
                    Order complete
                  </>
                ) : checkoutStatus === 'loading' ? (
                  'Placing order...'
                ) : (
                  'Pay and place order'
                )}
              </button>
            </CheckoutSection>
          </form>

          <aside>
            <h2 className="text-3xl font-semibold text-[#161b1f]">Shopping Bag ({bagItems.length})</h2>

            {bagItems.length > 0 ? (
              <>
                <ul className="mt-8 divide-y divide-black/15 border-b border-black/15">
                  {bagItems.map((item) => (
                    <li
                      key={item.name}
                      className="grid grid-cols-[88px_1fr] gap-4 py-4 sm:grid-cols-[116px_1fr_auto]"
                    >
                      <img
                        src={item.image}
                        alt=""
                        className="h-32 w-22 object-cover object-top sm:h-36 sm:w-28"
                      />
                      <div>
                        <h3 className="text-base font-bold text-[#161b1f]">{item.name}</h3>
                        <dl className="mt-5 space-y-1 text-sm text-black/45">
                          <div className="flex gap-2">
                            <dt>Size:</dt>
                            <dd>{item.size}</dd>
                          </div>
                          <div className="flex gap-2">
                            <dt>Color:</dt>
                            <dd>{item.color}</dd>
                          </div>
                          <div className="flex gap-2 items-center">
                            <dt>Quantity:</dt>
                            <dd className="flex items-center gap-2">
                              <button
                                type="button"
                                onClick={() => handleUpdateQuantity(item.name, item.quantity - 1)}
                                className="flex items-center justify-center size-6 rounded-full border border-black/10 text-xs text-black/60 hover:border-[#161b1f] hover:text-[#161b1f] transition cursor-pointer"
                              >
                                -
                              </button>
                              <span className="w-4 text-center text-sm font-semibold text-[#161b1f]">{item.quantity}</span>
                              <button
                                type="button"
                                onClick={() => handleUpdateQuantity(item.name, item.quantity + 1)}
                                className="flex items-center justify-center size-6 rounded-full border border-black/10 text-xs text-black/60 hover:border-[#161b1f] hover:text-[#161b1f] transition cursor-pointer"
                              >
                                +
                              </button>
                            </dd>
                          </div>
                        </dl>
                        <button
                          type="button"
                          onClick={() => handleRemove(item.name)}
                          className="mt-3 text-xs font-medium text-black/45 underline underline-offset-2 hover:text-[#161b1f] transition duration-200 cursor-pointer"
                        >
                          Remove
                        </button>
                      </div>
                      <p className="col-span-2 text-base font-semibold text-[#161b1f] sm:col-span-1">
                        {item.price}
                      </p>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex">
                  <input
                    type="text"
                    placeholder="Promocode"
                    className="min-w-0 flex-1 border-0 border-b border-black/20 bg-transparent py-3 text-sm outline-none placeholder:text-black/35"
                  />
                  <button className="w-36 bg-black/10 px-4 py-3 text-xs font-semibold uppercase text-black/60 transition hover:bg-black/15 sm:w-40">
                    Apply
                  </button>
                </div>

                <dl className="mt-6 divide-y divide-black/15 border-b border-black/15 text-sm">
                  <div className="flex justify-between py-3">
                    <dt>Shipping</dt>
                    <dd>Free</dd>
                  </div>
                  <div className="flex justify-between py-3">
                    <dt>Discount</dt>
                    <dd>₹ 0.00</dd>
                  </div>
                </dl>

                <div className="mt-8 flex items-center justify-between text-3xl">
                  <p>Total:</p>
                  <p>₹ {formattedTotal}</p>
                </div>
              </>
            ) : (
              <div className="mt-8 py-12 text-center border border-dashed border-black/15 rounded-lg bg-black/[0.02]">
                <p className="text-sm font-medium text-black/45">Your shopping bag is empty.</p>
                <a
                  href="/"
                  className="mt-4 inline-block text-xs font-bold uppercase tracking-wider text-[#161b1f] hover:underline"
                >
                  Continue Shopping
                </a>
              </div>
            )}
          </aside>
        </div>
      </div>
    </main>
  )
}
