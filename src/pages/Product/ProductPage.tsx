import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import s from "./ProductPage.module.css"
import { fetchProductsByCategory } from "../../store/reducers/ActionCreators"

type Props = {
    category: number
}

export const ProductPage: React.FC<Props> = ({category}) => {

  const dispatch = useAppDispatch()
  const {products, isLoading, error} = useAppSelector(state => state.productReducer)
  
  useEffect(() => {
    dispatch(fetchProductsByCategory(category))
  }, [])

  console.log([products])
  
    return (
      <div className={s.product_container}>
        {products.map(
          item => 
          <div>
            <p>{item.name}</p>
            <p>{item.description}</p>
          </div>
        )}
      </div>
    )
}