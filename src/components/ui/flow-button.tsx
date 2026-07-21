"use client"

import { ArrowRight } from "lucide-react"
import type { ButtonHTMLAttributes } from "react"

type FlowButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  text?: string
  variant?: "dark" | "light"
  keepRounded?: boolean
}

export function FlowButton({
  text = "Modern Button",
  variant = "dark",
  className = "",
  type = "button",
  keepRounded = false,
  ...props
}: FlowButtonProps) {
  const isLight = variant === "light"

  return (
    <button
      type={type}
      className={`group relative flex cursor-pointer items-center gap-1 overflow-hidden rounded-[100px] border-[1.5px] bg-transparent px-8 py-3 text-sm font-semibold transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] ${
        keepRounded ? "hover:rounded-[100px]" : "hover:rounded-[12px]"
      } hover:border-transparent hover:text-white active:scale-[0.95] ${
        isLight
          ? "border-white bg-white text-[#111111]"
          : "border-[#333333]/40 text-[#111111]"
      } ${className}`}
      {...props}
    >
      <ArrowRight
        className={`absolute left-[-25%] z-[9] size-4 fill-none transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:left-4 group-hover:stroke-white ${
          "stroke-[#111111]"
        }`}
      />

      <span className="relative z-[1] -translate-x-3 transition-all duration-[800ms] ease-out group-hover:translate-x-3">
        {text}
      </span>

      <span
        className={`absolute left-1/2 top-1/2 size-4 -translate-x-1/2 -translate-y-1/2 rounded-[50%] opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:size-[220px] group-hover:opacity-100 ${
          isLight ? "bg-black" : "bg-[#111111]"
        }`}
      />

      <ArrowRight
        className={`absolute right-4 z-[9] size-4 fill-none transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:right-[-25%] group-hover:stroke-white ${
          "stroke-[#111111]"
        }`}
      />
    </button>
  )
}
