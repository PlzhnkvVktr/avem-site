import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import s from "./ProductPage.module.css"
import { fetchProductItem, fetchProductsByCategory } from "../../store/reducers/ActionCreators"
import { Link, useParams } from "react-router-dom"
import { Tab, Tabs } from "react-bootstrap"
import { Loader } from "../../components/Loader/Loader"
import { Error } from "../../components/Error/Error"

type Props = {}

export const ProductPage: React.FC<Props> = () => {


  const params = useParams()
  const dispatch = useAppDispatch()
  const {product, isLoading, error} = useAppSelector(state => state.productItemReducer)
  
  useEffect(() => {
    dispatch(fetchProductItem(params.id as string))
  }, [])

  if (isLoading) return <Loader />
  if (error) return <Error error={error} />
  
    return (
      <main>
        <div className={s.product_container}>
          <Tabs
            defaultActiveKey="home"
            id="justify-tab-example"
            className="mb-3"
            justify
          >
            <Tab eventKey="home" title="Описание">
              <div dangerouslySetInnerHTML={{ __html: product.description }} />
            </Tab>
            <Tab eventKey="profile" title="Характеристика">
              <div dangerouslySetInnerHTML={{ __html: product.characteristic }} />
            </Tab>
            <Tab eventKey="longer-tab" title="Спецификация">
              <div dangerouslySetInnerHTML={{ __html: product.specification }} />
            </Tab>
            <Tab eventKey="contact" title="Узнать больше">
              <div dangerouslySetInnerHTML={{ __html: product.additionally }} />
            </Tab>
          </Tabs>
        </div>
      </main>
    )
}