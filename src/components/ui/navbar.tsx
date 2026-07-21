"use client"

import { Menu, Search, ShoppingBag } from "lucide-react"
import * as React from "react"

import aurexLogo from "@/assets/Aurex-small.png"
import { Button } from "@/components/ui/button"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

interface MenuItem {
  title: string
  url: string
}

interface NavbarProps {
  logo?: {
    url: string
    src: string
    alt: string
    title: string
  }
  menu?: MenuItem[]
  auth?: {
    login: {
      text: string
      url: string
    }
  }
}

const defaultMenu: MenuItem[] = [
  { title: "Men", url: "/men" },
  { title: "Women", url: "/women" },
  { title: "Kids", url: "/kids" },
  { title: "New & Featured", url: "/new" },
  { title: "Gift", url: "/gift" },
]

export default function Navbar({
  logo = {
    url: "/",
    src: aurexLogo,
    alt: "Aurex logo",
    title: "Aurex",
  },
  menu = defaultMenu,
  auth = {
    login: { text: "Login", url: "/login" },
  },
}: NavbarProps) {
  const [openSearch, setOpenSearch] = React.useState(false)
  const searchSuggestions = menu.filter((item) =>
    ["Men", "Women", "Kids", "New & Featured"].includes(item.title)
  )

  const handleSearchSelect = (url: string) => {
    setOpenSearch(false)
    window.location.href = url
  }

  return (
    <header className="border-border bg-background">
      <div className="relative mx-auto flex h-20 w-full max-w-8xl items-center justify-between px-6">
        <nav className="hidden items-center gap-5 xl:flex">
          {menu.map((item) => (
            <a
              key={item.title}
              className="whitespace-nowrap text-base font-semibold text-foreground transition-colors hover:text-muted-foreground"
              href={item.url}
            >
              {item.title}
            </a>
          ))}
        </nav>

        <a
          href={logo.url}
          className="hidden items-center xl:absolute xl:left-1/2 xl:top-1/2 xl:flex xl:-translate-x-1/2 xl:-translate-y-1/2"
        >
          <img
            src={logo.src}
            className="h-10 w-auto"
            alt={logo.alt}
            width={166}
            height={40}
          />
          <span className="sr-only">{logo.title}</span>
        </a>

        <a href={logo.url} className="flex items-center xl:hidden">
          <img
            src={logo.src}
            className="h-8 w-auto"
            alt={logo.alt}
            width={133}
            height={32}
          />
          <span className="sr-only">{logo.title}</span>
        </a>

        <div className="ml-auto hidden items-center gap-5 xl:flex">
          <Button
            variant="ghost"
            size="icon"
            className="size-10 rounded-full"
            onClick={() => setOpenSearch(true)}
          >
            <Search className="size-6" />
            <span className="sr-only">Search</span>
          </Button>
          <Button asChild variant="ghost" size="icon" className="size-10 rounded-full">
            <a href="/cart">
              <ShoppingBag className="size-6" />
              <span className="sr-only">Cart</span>
            </a>
          </Button>
          <a
            href={auth.login.url}
            className="text-base font-semibold text-foreground transition-colors hover:text-muted-foreground"
          >
            {auth.login.text}
          </a>
        </div>

        <div className="ml-auto flex items-center gap-2 xl:hidden">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
            onClick={() => setOpenSearch(true)}
          >
            <Search className="size-5" />
            <span className="sr-only">Search</span>
          </Button>
          <Button asChild variant="ghost" size="icon" className="rounded-full">
            <a href="/cart">
              <ShoppingBag className="size-5" />
              <span className="sr-only">Cart</span>
            </a>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Menu className="size-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent className="overflow-y-auto">
              <SheetHeader>
                <SheetTitle>
                  <a href={logo.url} className="flex items-center gap-2">
                    <img
                      src={logo.src}
                      className="h-8 w-auto"
                      alt={logo.alt}
                      width={133}
                      height={32}
                    />
                    <span className="sr-only">{logo.title}</span>
                  </a>
                </SheetTitle>
              </SheetHeader>
              <div className="my-6 flex flex-col gap-5 px-4">
                {menu.map((item) => (
                  <a
                    key={item.title}
                    href={item.url}
                    className="text-lg font-semibold text-foreground"
                  >
                    {item.title}
                  </a>
                ))}
                <div className="border-t border-border pt-5">
                  <a
                    href={auth.login.url}
                    className="text-lg font-semibold text-foreground"
                  >
                    {auth.login.text}
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <CommandDialog open={openSearch} onOpenChange={setOpenSearch}>
        <CommandInput placeholder="Search products, collections..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup className="text-gray-500" heading="Suggestions">
            {searchSuggestions.map((item) => (
              <CommandItem
                key={item.title}
                className="text-gray-800 dark:text-gray-200"
                onSelect={() => handleSearchSelect(item.url)}
              >
                {item.title}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </header>
  )
}
