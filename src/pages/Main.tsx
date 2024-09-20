import { AboutCompany } from "../components/AboutCompany/AboutCompany"
import { ProductLinks } from "../components/ProductsLinks/ProductLinks"
import { Carousel } from "../components/Slider/Slider"
import { ICategory } from "../models/ICategory"

type Props = {
  categories: ICategory[]
}

export const MainPage: React.FC<Props> = ({categories}) => {
  
    return (
      <main>
        <ProductLinks categories={categories} />
        <Carousel />
        <AboutCompany />
      </main>
    )
}