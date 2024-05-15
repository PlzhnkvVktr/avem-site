import { useEffect, useLayoutEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import s from "./ProductsListPage.module.css"
import { fetchProductsByCategory } from "../../store/reducers/ActionCreators"
import { Link, useParams } from "react-router-dom"
import Col from "react-bootstrap/esm/Col"
import Image from 'react-bootstrap/Image';
import { Loader } from "../../components/Loader/Loader"
import { Error } from "../../components/Error/Error"

type Props = {
}

export const ProductsListPage: React.FC<Props> = () => {

  const params = useParams()
  const dispatch = useAppDispatch()
  const {products, isLoading, error} = useAppSelector(state => state.productReducerByCategory)
  
  // products.filter(item => item.subcategory == 1).map
  
  useEffect(() => {
    dispatch(fetchProductsByCategory(params.id as string))
  }, [params.id])

  if (isLoading) return <Loader />
  if (error) return <Error error={error} />
  
    return (
      <main>
        2
        <div className={s.product_container}>
          {
            products.map(
              (item, key) => 
              <div key={key} className={s.item_container}>
                  <Image src={item.card_img} thumbnail />
                <div>
                  <h2><Link to={"/products/" + item.id}>{item.name}</Link></h2>
                </div>
              </div>
            ) 
          }
        </div>
      </main>
    )
}



// {products.map(
//   (item, key) => {
//     if (params.id?.includes(".")) {
//       return (
//         <div key={key} className={s.item_container}>
//             <Image src={item.card_img} thumbnail />
//           <div>
//             <h2><Link to={"/products/" + item.id}>{item.name}</Link></h2>
//           </div>
//         </div>
//       ) 
//     } else {
//       return (
//         <div key={key} className={s.item_container}>
//             <Image src={item.card_img} thumbnail />
//           <div>
//             <h2><Link to={"/products/" + item.id}>{item.name}</Link></h2>
//           </div>
//         </div>
//       ) 
//     }
//   }
// )}