import coatImage from '@/assets/women.jpeg'
import dressImage from '@/assets/Satin Dress.jpg'
import robeImage from '@/assets/Women Leather Jacket.jpg'

const shoppingBag = [
  {
    name: 'Top Coat Armon',
    size: 'M',
    color: 'Black',
    quantity: 1,
    price: '₹ 1,320.00',
    image: coatImage,
  },
  {
    name: 'Dress Bastet',
    size: 'S',
    color: 'Black',
    quantity: 1,
    price: '₹ 910.00',
    image: dressImage,
  },
  {
    name: 'Robe Ninti',
    size: 'M',
    color: 'Black',
    quantity: 1,
    price: '₹ 1,530.00',
    image: robeImage,
  },
]

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
  return (
    <main className="bg-[#f4f4f4] px-5 py-10 text-[#161b1f] sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1440px] border-t border-black/10 pt-8">
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
                className="mt-7 w-full bg-[#161b1f] px-6 py-4 text-xs font-black uppercase tracking-wider text-white transition hover:bg-black"
              >
                Pay and place order
              </button>
            </CheckoutSection>
          </form>

          <aside>
            <h2 className="text-3xl font-semibold text-[#161b1f]">Shopping Bag (3)</h2>

            <ul className="mt-8 divide-y divide-black/15 border-b border-black/15">
              {shoppingBag.map((item) => (
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
                      <div className="flex gap-2">
                        <dt>Quantity:</dt>
                        <dd>{item.quantity}</dd>
                      </div>
                    </dl>
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
              <p>₹ 3,760.00</p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}
