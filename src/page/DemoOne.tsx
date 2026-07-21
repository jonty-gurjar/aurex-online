import { CardsParallax, type iCardItem } from "@/components/ui/scroll-cards"
import kidsImage from "@/assets/Kids.jpeg"
import manImage from "@/assets/Men.jpg"
import weddingImage from "@/assets/accessoires.jpg"
import womenImage from "@/assets/women.jpeg"

const cardItems: iCardItem[] = [
  {
    title: "Man",
    src: manImage,
    link: "#",
    textColor: "white",
  },
  {
    title: "Women",
    src: womenImage,
    link: "#",
    textColor: "white",
  },
  {
    title: "Kids",
    src: kidsImage,
    link: "#",
    textColor: "white",
  },
  {
    title: "Accessoires",
    src: weddingImage,
    link: "#",
    textColor: "white",
  },
]

const DemoOne = () => {
  return <CardsParallax items={cardItems} />
}

export { DemoOne }
