import React, { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import s from "./ProductsListPage.module.css"
import {fetchCategoryById} from "../../store/reducers/ActionCreators"
import { useParams } from "react-router-dom"
import { SubcategoryItem} from "../../components/ProductItem/ProductItem"
type Props = {

}

export const ProductsListPage: React.FC<Props> = () => {

  const params = useParams()
  const dispatch = useAppDispatch()
  const {category, isLoading, error} = useAppSelector(state => state.categoryItemReducer)
  
  useEffect(() => {
    dispatch(fetchCategoryById(params.id as string))
    console.log(category.subcategories)
  }, [params.id])

  // if (isLoadingProduct) return <Loader />
  // if (errorProduct) return <Error error={errorProduct} />
  
  return (
    <main>
      <div className={s.product_container}>
        {
          category.subcategories.map(
            (item, key) => 
              <SubcategoryItem
                  subcategory={item}
                  key={key}
              />
          ) 
        }
      </div>
    </main>
  )
}
