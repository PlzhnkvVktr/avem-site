import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import s from "./SearchPage.module.css"
import { fetchProductsByName } from "../../store/reducers/ActionCreators"
import React from "react"
import { Link } from "react-router-dom"
import { Button, Col, Form, Row } from "react-bootstrap"
import Image from 'react-bootstrap/Image'
import { Loader } from "../../components/Loader/Loader"
import { Error } from "../../components/Error/Error"
import { Pagination } from "../../components/common/Pagination/Pagination"
import no_image from "../../image/product/no_image.png"
import { ProductItem } from "../../components/ProductItem/ProductItem"

type Props = {
    
}

export const SearchPage: React.FC<Props> = () => {
  
  const dispatch = useAppDispatch()
  const {products, isLoadingProduct, errorProduct} = useAppSelector(state => state.productReducer)
  const findProductName = useState("")

  const currentPage = useState(1)
  const productsPerPage = useState(5)

  const lastIndex = currentPage[0] * productsPerPage[0]
  const firstIndex = lastIndex - productsPerPage[0]
  const page = products.slice(firstIndex, lastIndex)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [page])
  
    return (
      <main>
        <Form action="javascript:void(0)" className="search_panel">
          <Row>
            <Col xs="auto">
              <Form.Control
                type="text"
                placeholder="Найти продукт"
                className=" mr-sm-2"
                // value={findProductName[0]}
                onChange={(value) => findProductName[1](value.target.value)}
              />
            </Col>
            <Col xs="auto">
              <Button type="button" className={s.searchButton} onClick={() => dispatch(fetchProductsByName(findProductName[0]))}>Найти</Button>
            </Col>
          </Row>
        </Form>
        <div className={s.product_container}>
          {
            page.map(
              (item, key) => 
              <ProductItem
                product={item}
                key={key}
              />
            ) 
          }
        </div>
        <Pagination 
          itemPerPage={productsPerPage[0]}
          totalItem={products.length}
          currentPage={currentPage}
        />
      </main>
    )
}