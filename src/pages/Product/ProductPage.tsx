import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import s from "./ProductPage.module.css"
import { fetchProductItem, fetchProductsByCategory } from "../../store/reducers/ActionCreators"
import { Link, useParams } from "react-router-dom"
import { Tab, Tabs } from "react-bootstrap"

type Props = {}

export const ProductPage: React.FC<Props> = () => {


  const params = useParams()
  const dispatch = useAppDispatch()
  const {product, isLoading, error} = useAppSelector(state => state.productItemReducer)
  
  useEffect(() => {
    dispatch(fetchProductItem(params.id as string))
  }, [])

  
    return (
      <main>
        <div className={s.product_container}>
        <Tabs
          defaultActiveKey="profile"
          id="justify-tab-example"
          className="mb-3"
          justify
        >
          <Tab eventKey="home" title="Описание">
            <div dangerouslySetInnerHTML={{ __html: product.name }} />
          </Tab>
          <Tab eventKey="profile" title="Характеристика">
            <div dangerouslySetInnerHTML={{ __html: product.description }} />
          </Tab>
          <Tab eventKey="longer-tab" title="Спецификация">
            <div dangerouslySetInnerHTML={{ __html: product.additionally }} />
          </Tab>
          <Tab eventKey="contact" title="Узнать больше">
            <div dangerouslySetInnerHTML={{ __html: product.characteristic }} />
          </Tab>
        </Tabs>
          {/* <p>{product.id}</p>
          <p>{product.name}</p>
          <p>{product.description}</p>
          <p>{product.specification}</p>
          <p>{product.additionally}</p>
          <p>{product.characteristic}</p> */}
        </div>
      </main>
    )
}