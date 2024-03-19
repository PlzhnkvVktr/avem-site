import React from 'react'
import s from './Navbar.module.css'
import { Link } from 'react-router-dom'

type Props = {
    
}

export const Navbar: React.FC<Props> = () => {
  
    return (
      <nav>
        <div className={s.main_menu}>
          <button className={s.button_main_menu}>ПРОДУКЦИЯ</button>
          <button className={s.button_main_menu}>ПРОЕКТЫ</button>
          <button className={`${s.button_main_menu} ${s.minor_links}`}>УСЛУГИ</button>
          <button className={`${s.button_main_menu} ${s.minor_links}`}>ДОКУМЕНТАЦИЯ</button>
          <button className={`${s.button_main_menu} ${s.minor_links}`}>СЕРВИС И ГАРАНТИИ</button>
          <button className={s.button_main_menu}>ПОДБОР ОБОРУДОВАНИЯ</button>
          <button className={`${s.button_main_menu} ${s.additional_links}`}>ЕЩЕ</button>
        </div>
        <div className={s.uber_menu}>

        </div>
    </nav>
    )
}