import { AboutCompany } from "../components/AboutCompany/AboutCompany"
import { ProductLinks } from "../components/ProductsLinks/ProductLinks"
import { Carousel } from "../components/Slider/Slider"

type Props = {
    
}

export const Main: React.FC<Props> = () => {
  
    return (
      <main>
        {/* <ProductLinks /> */}
        {/* <AboutCompany /> */}
        <Carousel />
      </main>
    )
}