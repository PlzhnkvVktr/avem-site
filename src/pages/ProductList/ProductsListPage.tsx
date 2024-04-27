import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import s from "./ProductsListPage.module.css"
import { fetchProductsByCategory } from "../../store/reducers/ActionCreators"
import { Link, useParams } from "react-router-dom"

type Props = {
}

export const ProductsListPage: React.FC<Props> = () => {


  const params = useParams()
  const dispatch = useAppDispatch()
  const {products, isLoading, error} = useAppSelector(state => state.productReducerByCategory)
  
  useEffect(() => {
    dispatch(fetchProductsByCategory(params.id as string))
    console.log(params)
  }, [])

  
    return (
      <main>
        <div className={s.product_container}>
          {products.map(
            item => 
            <div className={s.item_container}>
              <img />
              <div>
                <h2><Link to={"/products/" + item.id}>{item.name}</Link></h2>
              </div>
            </div>
          )}
        </div>
      </main>
    )
}