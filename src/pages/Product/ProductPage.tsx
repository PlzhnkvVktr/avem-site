import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import s from "./ProductPage.module.css"
import { fetchProductItem, fetchProductsByCategory } from "../../store/reducers/ActionCreators"
import { Link, useParams } from "react-router-dom"

type Props = {}

export const ProductPage: React.FC<Props> = () => {


  const params = useParams()
  const dispatch = useAppDispatch()
  const {product, isLoading, error} = useAppSelector(state => state.productItemReducer)
  
  useEffect(() => {
    dispatch(fetchProductItem(params.id as string))
    console.log(params.id)
  }, [])

  
    return (
      <div className={s.product_container}>
        <p>{product.id}</p>
        <p>{product.name}</p>
      </div>
    )
}