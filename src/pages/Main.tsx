import { AboutCompany } from "../components/AboutCompany/AboutCompany"
import { ProductLinks } from "../components/ProductsLinks/ProductLinks"

type Props = {
    
}

export const Main: React.FC<Props> = () => {
  
    return (
      <main>
        {/* <ProductLinks /> */}
        <AboutCompany />
      </main>
    )
}