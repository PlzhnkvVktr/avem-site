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
import { fetchProductsBySubategory } from "../../store/reducers/ActionCreators"

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
  const {products, isLoading, error} = useAppSelector(state => state.productReducer)

  useEffect(() => {
    dispatch(fetchProductsBySubategory(params.id as string))
  }, [])
  
    return (
      <main>
        1
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

export const categoryes1 = [
  {
    name: "Испытательное оборудование",
    items: [
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
  },
  {
    name: "Автомобильная электромеханика",
    items: [
      {
        title: "Электромеханический усилитель рулевого управления (ЭУРУ)",
        image: viu,
        link: "/products/category/2.1"
      }, 
      {
        title: "Стартер-генераторная установка (СГУ)",
        image: nag,
        link: "/products/category/2.2"
      }
    ]
  },
  {
    name: "Приборы",
    items: [
      {
        title: "Мегаомметры АВЭМ-9",
        image: viu,
        link: "/products/category/3.1"
      }, 
      {
        title: "Прибор измерительный Амперметр АВЭМ-7",
        image: nag,
        link: "/products/category/2.2"
      }
    ]
  }
  
]