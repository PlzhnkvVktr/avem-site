import React from 'react'
import s from './Header.module.css'
import { Link } from 'react-router-dom'

type Props = {
    
}

export const Header: React.FC<Props> = () => {
  
    return (
      <header>
          <div className={s.header}>
              <div className={s.header_block}>
                <div className={s.search_panel}>
                    <Link to="/">

                    </Link>
                    <div className={s.servis_menu}>
                        <Link to="/products">Посты</Link>
                        <Link to="/cart">Корзина</Link>
                        <Link to="/products">Посты</Link>
                        <Link to="/cart">Корзина</Link>
                        <hr />
                    </div>
                </div>
                <div className={s.contact_menu}>
                    <span>Покупателям</span>
                    <p><a href="tel:+780025655225">8-800-256-552-25 &#9742;</a></p>
                    <span>Поставщикам</span>
                    <p><a href="tel:+780025655225">8-800-256-552-25 &#9742;</a></p>
                    <a href="mailto:sales@avem.ru">sales@avem.ru</a>
                </div>
              </div>
          </div>
      </header>
    )
}