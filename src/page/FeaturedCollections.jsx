import React from 'react'
import Jeans from '@/assets/Loose Jeans.jpg'
import yellow from '@/assets/T-shirt-men.jpg'
import Sweatshirt from '@/assets/Fashion Wool Shirt.jpg'
import sunglass from '@/assets/Sunglass-Dark-Green.jpg'
import shoes from '@/assets/Boost shoes.jpg'
import jacket from '@/assets/Jackets.jpg'

const collections = [
  {
    name: 'Loose Straight Jeans',
    price: '₹ 4000.00',
    image: Jeans,
    position: 'cover 0px',

  },
  {
    name: 'Cotton T-Shirt',
    price: '₹ 2500.00',
    image: yellow,
    position: 'center 0px',
  },
  {
    name: 'Blouson jacket',
    price: '₹ 6900.00',
    image: jacket,
  },
  {
    name: 'Oversized Fit Sweatshirt',
    price: '₹ 3500.00',
    image: Sweatshirt,
  },
  {
    name: 'Chelsea boots',
    price: '₹ 4000.00',
    image: shoes,
  },
  {
    name: 'Siza Dark Green Square Sunglasses',
    price: '₹ 2,000.00',
    image: sunglass,
  },
]

const FeaturedCollections = () => {
  return (
    <section className="bg-white px-5 py-20 text-[#111111] sm:px-8 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-8 max-w-md text-center">
          <h2 className="text-4xl font-black uppercase tracking-tight sm:text-5xl">
            New Collection
          </h2>
          <p className="mt-3 text-sm font-medium leading-relaxed text-black/70">
            Our latest collection, where classic and contemporary styles
            converge in perfect harmony.
          </p>
        </div>

        <div className="grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {collections.map((item) => (
            <article key={item.name}>
              <div
                className="aspect-[1.13/1] overflow-hidden rounded-2xl bg-[#f3f2ee] bg-cover bg-center"
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundPosition: item.position || 'center',
                }}
                role="img"
                aria-label={item.name}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="sr-only"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-extrabold tracking-tight">
                  {item.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-black/35">
                  {item.description}
                </p>
                <p className="mt-2 text-xl font-extrabold">{item.price}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedCollections
