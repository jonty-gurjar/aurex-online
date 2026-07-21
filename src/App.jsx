import React from 'react'
import { BannerNewFeature } from '@/page/banner-new-feature'
import { DemoOne } from '@/page/DemoOne'
import FeaturedCollections from '@/page/FeaturedCollections'
import HeroSlideshow from '@/page/hero-slideshow'
import WearToWedding from '@/page/WearToWedding'
import MenPage from '@/page/MenPage'
import WomenPage from '@/page/WomenPage'
import KidsPage from '@/page/KidsPage'
import NewFeaturedPage from '@/page/NewFeaturedPage'
import GiftPage from '@/page/GiftPage'
import ProductDetailsPage from '@/page/ProductDetailsPage'
import CartPage from '@/page/CartPage'
import LoginPage from '@/page/LoginPage'
import FashionFooter from '@/components/FashionFooter'
import Navbar from '@/components/ui/navbar'

const App = () => {
  const pathname = window.location.pathname.replace(/\/+$/, '') || '/'

  if (pathname === '/login') {
    return <LoginPage />
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <BannerNewFeature />
      <Navbar />
      {pathname === '/men' ? (
        <MenPage />
      ) : pathname === '/women' ? (
        <WomenPage />
      ) : pathname === '/kids' ? (
        <KidsPage />
      ) : pathname === '/new' ? (
        <NewFeaturedPage variant="new" />
      ) : pathname === '/featured' ? (
        <NewFeaturedPage variant="featured" />
      ) : pathname === '/gift' ? (
        <GiftPage />
      ) : pathname === '/product-details' ? (
        <ProductDetailsPage />
      ) : pathname === '/cart' ? (
        <CartPage />
      ) : (
        <main>
          <HeroSlideshow />
          <FeaturedCollections />
          <WearToWedding />
          <DemoOne />
        </main>
      )}
      <FashionFooter />
    </div>
  )
}

export default App
