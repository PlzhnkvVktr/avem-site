import React from 'react'
import s from './Navbar.module.css'
import { Link } from 'react-router-dom'
import { IPage } from '../../models/IPage'
import { IProduct } from '../../models/IProduct'
import {ICategory} from "../../models/ICategory";

type Props = {
    pages: IPage[]
    categories: ICategory[]
}

export const Navbar: React.FC<Props> = ({pages, categories}) => {

    return (
      <nav className={s.navbar}>
      <ul className={s.topmenu}>
        <li><Link to="/#" className={s.active}>ПРОДУКЦИЯ<span className={`${s.fa} ${s.fa_angle_down}`}></span></Link>
          <ul className={s.submenu}>
            {
              categories.map((item, key) =>
                  <li><Link to={"/products/category/" + item.id}>{item.name}<span
                      className={`${s.fa} ${s.fa_angle_down}`}></span></Link>
                    <ul className={s.submenu}>
                      {item.subcategories.map((item, key) => <li key={key}><Link to={"/products/subcategory/" + item.path}>{item.name}</Link></li>)}
                    </ul>
                  </li>
              )
            }
          </ul>
        </li>
        <li><Link to="">ПРОЕКТЫ</Link></li>
        <li><Link to="/search">НАЙТИ</Link></li>
        <li><Link to="/selection">ПОДБОР ОБОРУДОВАНИЯ</Link></li>
        <li><Link to="">О КОМПАНИИ</Link>
          <ul className={s.submenu}>
            {pages.map((item, key) => {
                if (item.isVisibility && !item.isNavbar) {
                  return (<li><Link to={item.path} key={key} className={s.links}>{item.name}</Link></li>)
                }
              })
            }
          </ul>
        </li>
      </ul>
    </nav>
    )
}
