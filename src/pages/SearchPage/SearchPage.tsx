import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import s from "./SearchPage.module.css"
import { fetchNews } from "../../store/reducers/ActionCreators"
import React from "react"
import { Link } from "react-router-dom"
import { Button, Col, Form, Row } from "react-bootstrap"

type Props = {
    
}

export const SearchPage: React.FC<Props> = () => {
  
    return (
      <main>
        <Form>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col>
          <Col xs="auto">
            <Button type="submit">Найти</Button>
          </Col>
        </Row>
      </Form>
      </main>
    )
}