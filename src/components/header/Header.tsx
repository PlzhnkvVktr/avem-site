import React, { useEffect } from 'react'
import s from './Header.module.css'
import { Link } from 'react-router-dom'
import logo from '../../image/logo.ico'
import { Navbar } from '../navbar/Navbar'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { fetchPages } from '../../store/reducers/ActionCreators'
import { IPage } from '../../models/IPage'
import { IProduct } from '../../models/IProduct'
import {ICategory} from "../../models/ICategory";

type Props = {
  categories: ICategory[]
  pages: IPage[]
}

export const Header: React.FC<Props> = ({categories, pages}) => {
  
    return (
      <header>
        <div className={s.search_panel}>
          <Link to="/">
            <img 
              className={s.logo}
              src={logo}
              alt="Лого сайта"
            />
          </Link>
          <div className={s.servis_menu}>
            {pages.map((item, key) => {
              if (item.isVisibility && item.isNavbar) {
                return (<Link to={item.path} key={key} className={s.links}>{item.name}</Link>)
              }
            } 
            )}
            <hr />
            <Navbar pages={pages} categories={categories} />
          </div>
          <div className={s.contact_menu}>
            {/* <button className={s.humburger_button}>&#9776;</button> */}
            <span>Покупателям</span>
            <p><a href="tel:+780025655225">8-800-256-552-25</a></p>
            <span>Поставщикам</span>
            <p><a href="tel:+780025655225">8-800-256-552-25</a></p>
            <a href="mailto:sales@avem.ru">sales@avem.ru</a>
          </div>
          {/* <div className={s.humburger_button_container}>
            <button className={s.humburger_button}>&#9776;</button>
          </div> */}

        <div className="hamburger-menu">
          <input id="menu__toggle" type="checkbox" />
          <label className="menu__btn" htmlFor="menu__toggle">
            <span></span>
          </label>

        <ul className="menu__box">
            {
              categories.map((item, key) =>
                  <li key={key}><Link className="menu__item" to={"/products/category/" + item.id}>{item.name}</Link></li>
              )
            }
            <hr></hr>
            {pages.map((item, key) => {
              if (item.isVisibility && item.isNavbar) {
                return (<li key={key}><Link to={item.path} className="menu__item">{item.name}</Link></li>)
              }
            }
            )}
        </ul>
      </div>
        </div>
      </header>
    )
}

{/* <div className={s.search_panel}>
              <Link to="/">
                <img 
                    src={logo}
                    alt="Лого сайта"
                />
              </Link>
              <div className={s.servis_menu}>
                  <Link to="/products">Посты</Link>
                  <Link to="/cart">Корзина</Link>
                  <Link to="/products">Посты</Link>
                  <Link to="/cart">Корзина</Link>
                  <hr />
                  <Navbar />
              </div>
          </div>
          <div className={s.contact_menu}>
              <span>Покупателям</span>
              <p><a href="tel:+780025655225">8-800-256-552-25 &#9742;</a></p>
              <span>Поставщикам</span>
              <p><a href="tel:+780025655225">8-800-256-552-25 &#9742;</a></p>
              <a href="mailto:sales@avem.ru">sales@avem.ru</a>
          </div> */}