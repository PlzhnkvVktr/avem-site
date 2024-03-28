import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import s from "./ProductCategoryPage.module.css"

type Props = {
    
}

export const ProductCategoryPage: React.FC<Props> = () => {

  const dispatch = useAppDispatch()
  const {products, isLoading, error} = useAppSelector(state => state.productReducer)
  console.log(products)
  
    return (
      <>
        
      </>
    )
}