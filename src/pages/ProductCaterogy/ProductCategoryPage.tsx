import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import s from "./ProductCategoryPage.module.css"
import { Link, useParams } from "react-router-dom"
import Image from 'react-bootstrap/Image'
import viu from "../../image/product/viu.jpg"
import nag from "../../image/product/nag.jpg"
import dvm from "../../image/product/dvm.jpg"
import stand from "../../image/product/stand.jpg"
import dcp from "../../image/product/dcp.jpg"
import tranformation from "../../image/product/tranformation.jpg"
import { fetchProductsBySubcategory } from "../../store/reducers/ActionCreators"
import { ProductItem } from "../../components/ProductItem/ProductItem"

type Props = {
    
}

export const ProductCategoryPage: React.FC<Props> = () => {

  const params = useParams()
  const dispatch = useAppDispatch()
  const {products, isLoadingProduct, errorProduct} = useAppSelector(state => state.productReducer)

  useEffect(() => {
    dispatch(fetchProductsBySubcategory(params.id as string))
  }, [params.id])
  
    return (
      <main>
        <div className={s.product_container}>
          {products.map(
            (item, key) =>
              <ProductItem
                product={item}
                key={key}
              />
          )}
        </div>
      </main>
    )
}
