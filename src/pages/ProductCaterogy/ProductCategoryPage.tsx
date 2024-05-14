import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import s from "./ProductCategoryPage.module.css"
import { Link } from "react-router-dom"
import Image from 'react-bootstrap/Image'
import viu from "../../image/product/viu.jpg"
import nag from "../../image/product/nag.jpg"
import dvm from "../../image/product/dvm.jpg"
import stand from "../../image/product/stand.jpg"
import dcp from "../../image/product/dcp.jpg"
import tranformation from "../../image/product/tranformation.jpg"

type Props = {
    
}
export const categoryes = [
    {
      title: "ВЫСОКОВОЛЬТНЫЕ ИСПЫТАТЕЛЬНЫЕ УСТАНОВКИ (ВИУ)",
      image: viu,
      link: "/products/category/1.1"
    }, 
    {
      title: "НАГРУЗОЧНЫЕ УСТРОЙСТВА",
      image: nag,
      link: "/products/category/1.2"
    }, 
    {
      title: "ДИАГНОСТИКА ВРАЩАЮЩИХСЯ МАШИН",
      image: dvm,
      link: "/products/category/1.3"
    }, 
    {
      title: "КОМПЛЕКСНЫЙ СТЕНД ДЛЯ ПРОВЕРКИ ЭЛЕКТРИЧЕСКИХ МАШИН",
      image: stand,
      link: "/products/category/1.4"
    }, 
    {
      title: "ДИАГНОСТИКА КАБЕЛЬНОЙ ПРОДУКЦИИ",
      image: dcp,
      link: "/products/category/1.5"
    }, 
    {
      title: "ПРОВЕРКА ТРАНСФОРМАТОРОВ",
      image: tranformation,
      link: "/products/category/1.6"
    }
  ]


export const ProductCategoryPage: React.FC<Props> = () => {

  const dispatch = useAppDispatch()
  const {products, isLoading, error} = useAppSelector(state => state.productReducer)

  const TEST_EQUIPMENT = [""]
  
    return (
      <main>
        <div className={s.product_container}>
          {categoryes.map(
            (item, key) => 
            <div key={key} className={s.item_container}>
                <Image src={item.image} thumbnail />
              <div>
                <h2><Link to={item.link}>{item.title}</Link></h2>
              </div>
            </div>
          )}
        </div>
      </main>
    )
}