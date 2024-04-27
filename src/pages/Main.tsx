import { AboutCompany } from "../components/AboutCompany/AboutCompany"
import { ProductLinks } from "../components/ProductsLinks/ProductLinks"
import { Carousel } from "../components/Slider/Slider"

type Props = {
    
}

export const MainPage: React.FC<Props> = () => {
  
    return (
      <main>
        <ProductLinks />
        <AboutCompany />
        <Carousel />
        {/* <News /> */}
      </main>
    )
}