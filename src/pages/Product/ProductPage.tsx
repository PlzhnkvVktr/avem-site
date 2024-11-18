import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import s from "./ProductPage.module.css"
import { fetchProductItem, fetchProductsByCategory } from "../../store/reducers/ActionCreators"
import { Link, useParams } from "react-router-dom"
import { Accordion, Tab, Tabs } from "react-bootstrap"
import { Loader } from "../../components/Loader/Loader"
import { Error } from "../../components/Error/Error"
import { IProduct } from "../../models/IProduct"
import { API_URL } from "../../const/const"
import { ICategory } from "../../models/ICategory"

type PropsProductPage = {
  categories: ICategory[]
}
type PropsTitle = {
    product: IProduct
}
type PropsProductPageNavigation = {
  categories: ICategory[]
}

export const ProductPage: React.FC<PropsProductPage> = ({categories}) => {


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
          <ProductPageNavigation categories={categories} />
          <div className={s.product_info_container}>
            <ProductPageTitle product={product} />
            <Tabs
              defaultActiveKey="home"
              id="justify-tab-example"
              className="mb-3"
              justify
            >
              <Tab className="tabs_product" eventKey="home" title="Описание">
                <div dangerouslySetInnerHTML={{ __html: product.description }} />
              </Tab>
              <Tab className="tabs_product" eventKey="profile" title="Характеристика">
                <div dangerouslySetInnerHTML={{ __html: product.characteristic }} />
              </Tab>
              <Tab className="tabs_product" eventKey="longer-tab" title="Спецификация">
                <div dangerouslySetInnerHTML={{ __html: product.specification }} />
              </Tab>
              <Tab className="tabs_product" eventKey="contact" title="Узнать больше">
                <div dangerouslySetInnerHTML={{ __html: product.additionally }} />
              </Tab>
            </Tabs>
          </div>
          
        </div>
      </main>
    )
}

export const ProductPageTitle: React.FC<PropsTitle> = ({ product }) => {
  const [scale, setScale] = useState(1);

  const handleZoomIn = () => {
    setScale(2);
  };

  const handleZoomOut = () => {
    // setScale(Math.max(scale / 1.25, 1));
    setScale(1)
  };

  return (
    <div className={s.product_title_container}>
      <div
        className={s.product_title_container_image}
        style={{ transform: `scale(${scale})` }}
        // onClick={handleZoomIn}
      >
        <img src={API_URL + product.card_img} />
        <button onClick={handleZoomIn}>+</button>
      </div>
      <div className={s.product_title_container_description}>
        <p>{product.card_description}</p>
      </div>
    </div>
  );
};


export const ProductPageNavigation: React.FC<PropsProductPageNavigation> = ({categories}) => {


  return (
    
    <div className={s.product_navigation_container}>
      <Accordion defaultActiveKey="0" flush>
        {
          categories.map((item, key) => 
          // <p>{item.name}</p>
          <Accordion.Item key={key} eventKey={item.id} >
            <Accordion.Header>{item.name}</Accordion.Header>
              <Accordion.Body>
                <Accordion defaultActiveKey="0" flush>
                   {
                    item.subcategories.map(itemSub =>
                      <div>
                        <Link to={"/products/subcategory/" + itemSub.path}>{itemSub.name}</Link>
                      </div>
                    )
                  }
                </Accordion>
              </Accordion.Body>
          </Accordion.Item>
          )
        }
      </Accordion>
    </div>
  )
}
