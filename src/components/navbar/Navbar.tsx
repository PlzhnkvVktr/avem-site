import React from 'react'
import s from './Navbar.module.css'
import { Link } from 'react-router-dom'
import { categoryes } from '../../pages/ProductCaterogy/ProductCategoryPage'
import { IPage } from '../../models/IPage'

type Props = {
    pages: IPage[]
}

export const Navbar: React.FC<Props> = ({pages}) => {
  
    return (
      <nav className={s.navbar}>
        {/* <div className={s.main_menu}>
          <button className={s.button_main_menu}>ПРОДУКЦИЯ</button>
          <button className={s.button_main_menu}>ПРОЕКТЫ</button>
          <button className={`${s.button_main_menu} ${s.minor_links}`}>УСЛУГИ</button>
          <button className={`${s.button_main_menu} ${s.minor_links}`}>ДОКУМЕНТАЦИЯ</button>
          <button className={`${s.button_main_menu} ${s.minor_links}`}>СЕРВИС И ГАРАНТИИ</button>
          <button className={s.button_main_menu}>ПОДБОР ОБОРУДОВАНИЯ</button>
          <button className={`${s.button_main_menu} ${s.additional_links}`}>ЕЩЕ</button>
        </div>
        <div className={s.uber_menu}>

        </div> */}

      <ul className={s.topmenu}>
        <li><Link to="" className={s.active}>ПРОДУКЦИЯ<span className={`${s.fa} ${s.fa_angle_down}`}></span></Link>
          <ul className={s.submenu}>
            <li><Link to="/products_subcategory">Испытательное оборудование<span className={`${s.fa} ${s.fa_angle_down}`}></span></Link>
              <ul className={s.submenu}>
                {categoryes.map((item, key) => <li key={key}><Link to={item.link}>{item.title}</Link></li>)}
              </ul>
            </li>
            <li><Link to="/products/category/2">Автомобильная электромеханика<span className={`${s.fa} ${s.fa_angle_down}`}></span></Link>
              {/* <ul className={s.submenu}>
                <li><Link to="">Электромеханический усилитель рулевого управления (ЭУРУ)</Link></li>
                <li><Link to="">Стартер-генераторная установка (СГУ)</Link></li>
                <li><Link to="">Имитатор управляющих сигналов</Link></li>
                <li><Link to="">Универсальный мотор-редуктор</Link></li>
                <li><Link to="">Информационная поддержка жизненного цикла изделия</Link></li>
              </ul> */}
            </li>
            <li><Link to="/products/category/3">Приборы<span className={`${s.fa} ${s.fa_angle_down}`}></span></Link>
              {/* <ul className={s.submenu}>
                <li><Link to="">Мегаомметры АВЭМ-9</Link></li>
                <li><Link to="">Прибор измерительный Амперметр АВЭМ-7</Link></li>
                <li><Link to="">Измерители электрического сопротивления постоянному току ИКАС-10 </Link></li>
                <li><Link to="">Киловольтметр КВМ</Link></li>
                <li><Link to="">Индикатор параметров питания АВЭМ-10</Link></li>
                <li><Link to="">Вольтметр АВЭМ - 3</Link></li>
                <li><Link to="">Амперметр</Link></li>
                <li><Link to="">Вольтметр АВЭМ - 4</Link></li>
                <li><Link to="">Установки испытательные высоковольтные ВИУ (малотоковые)</Link></li>
                <li><Link to="">Измерительный комплекс активного сопротивления (ИКАС-8) - мост постоянного тока для измерения сопротивления</Link></li>
                <li><Link to="">Анализатор качества электроэнергии (ППЦ)</Link></li>
              </ul> */}
            </li>
            <li><Link to="/products/category/4">Другое оборудование<span className={`${s.fa} ${s.fa_angle_down}`}></span></Link>
              {/* <ul className={s.submenu}>
                <li><Link to="">Индукционный регулятор напряжения</Link></li>
                <li><Link to="">Импульсная станция</Link></li>
                <li><Link to="">Быстродействующий компенсатор реактивной мощности</Link></li>
                <li><Link to="">Универсальный сварочный электромуфтовый аппарат</Link></li>
                <li><Link to="">Универсальный сетевой измерительный блок</Link></li>
                <li><Link to="">Индукционный нагреватель</Link></li>
                <li><Link to="">Пульт управления промышленным сепаратором</Link></li>
                <li><Link to="">Ножницы рычажные ручные</Link></li>
                <li><Link to="">Автоматизированные и/или ручные стенды по проверке различных датчиков</Link></li>
                <li><Link to="">Мойка для подшипников и мелких деталей</Link></li>
                <li><Link to="">Выпрямители</Link></li>
                <li><Link to="">Умножители напряжения</Link></li>
                <li><Link to="">Пресс гидравлический для опрессовки катушек кэм (для выпечки пазовой изоляции)</Link></li>
                <li><Link to="">Информационная поддержка жизненного цикла изделия</Link></li>
                <li><Link to="">Электропечь</Link></li>
                <li><Link to="">Преобразователь частоты</Link></li>
              </ul> */}
            </li>
            <li><Link to="/products/category/5">Гидравлическое оборудование<span className={`${s.fa} ${s.fa_angle_down}`}></span></Link>
              {/* <ul className={s.submenu}>
                <li><Link to="">Стенд для испытания толкателей электрогидравлических</Link></li>
              </ul> */}
            </li>
            <li><Link to="/products/category/6">Учебные демонстрационные стенды<span className={`${s.fa} ${s.fa_angle_down}`}></span></Link>
              {/* <ul className={s.submenu}>
                <li><Link to="">Стенд гидравлический универсальный СГУ-250</Link></li>
                <li><Link to="">Автоматизированный стенд для испытания электропневматических и электромагнитных аппаратов электроподвижного состава</Link></li>
              </ul> */}
            </li>
            <li><Link to="/products/category/7">Измерительные системы<span className={`${s.fa} ${s.fa_angle_down}`}></span></Link>
              {/* <ul className={s.submenu}>
                <li><Link to="">Система измерительная для стендовых испытаний узлов и агрегатов вертолётов СИЛиС</Link></li>
              </ul> */}
            </li>
          </ul>
        </li>
        <li><Link to="">ПРОЕКТЫ</Link></li>
        <li><Link to="/search">НАЙТИ</Link></li>
        <li><Link to="">ДОКУМЕНТАЦИЯ</Link></li>
        <li><Link to="">СЕРВИС И ГАРАНТИИ</Link></li>
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