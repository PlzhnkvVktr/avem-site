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

type Props = {
    
}
export const categoryes = [
    {
      title: "ВЫСОКОВОЛЬТНЫЕ ИСПЫТАТЕЛЬНЫЕ УСТАНОВКИ (ВИУ)",
      image: viu,
      link: "/products/subcategory/1"
    }, 
    {
      title: "НАГРУЗОЧНЫЕ УСТРОЙСТВА",
      image: nag,
      link: "/products/subcategory/2"
    }, 
    {
      title: "ДИАГНОСТИКА ВРАЩАЮЩИХСЯ МАШИН",
      image: dvm,
      link: "/products/subcategory/3"
    }, 
    {
      title: "КОМПЛЕКСНЫЙ СТЕНД ДЛЯ ПРОВЕРКИ ЭЛЕКТРИЧЕСКИХ МАШИН",
      image: stand,
      link: "/products/subcategory/4"
    }, 
    {
      title: "ДИАГНОСТИКА КАБЕЛЬНОЙ ПРОДУКЦИИ",
      image: dcp,
      link: "/products/subcategory/5"
    }, 
    {
      title: "ПРОВЕРКА ТРАНСФОРМАТОРОВ",
      image: tranformation,
      link: "/products/subcategory/6"
    }
  ]


export const ProductCategoryPage: React.FC<Props> = () => {

  const params = useParams()
  const dispatch = useAppDispatch()
  const {products, isLoading, error} = useAppSelector(state => state.productReducerBySubcategory)

  useEffect(() => {
    dispatch(fetchProductsBySubcategory(params.id as string))
  }, [params.id])
  
    return (
      <main>
        <div className={s.product_container}>
          {products.map(
            (item, key) => 
            <div key={key} className={s.item_container}>
                <Image src={item.card_img} thumbnail />
              <div>
                <h2><Link to={"/products/" + item.id}>{item.name}</Link></h2>
              </div>
            </div>
          )}
        </div>
      </main>
    )
}
