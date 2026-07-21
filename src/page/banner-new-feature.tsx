import { ArrowRight } from "lucide-react"

import { Banner } from "@/components/ui/banner"

function BannerNewFeature() {
  return (
    <Banner className="bg-black text-foreground">
      <div className="w-full">
        <p className="flex justify-center text-sm">
          <a href="#" className="group text-white">
            <span className="me-1 text-base leading-none">✨</span>
            Get 25% Off This Summer Sale. Grab It Fast!!
            <ArrowRight
              className="-mt-0.5 ms-2 inline-flex opacity-60 transition-transform group-hover:translate-x-0.5"
              size={16}
              strokeWidth={2}
              aria-hidden="true"
            />
          </a>
        </p>
      </div>
    </Banner>
  )
}

export { BannerNewFeature }
