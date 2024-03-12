import React from 'react'
import s from './ProductLinks.module.css'
import { Link } from 'react-router-dom'

type Props = {
    
}

export const ProductLinks: React.FC<Props> = () => {
  
    return (
      <div className={s.products_links_container}>
        <Link to={'/'}>Испытания электродвигателей</Link>
        <Link to={'/'}>Испытания машин постоянного тока</Link>
        <Link to={'/'}>Испытания трансформаторов</Link>
        <Link to={'/'}>Высоковольтные установки</Link>
        <Link to={'/'}>Нагрузочные модули</Link>
        <Link to={'/'}>Лаборатории проверки средств защиты</Link>
        <Link to={'/'}>Приборы</Link>
        <Link to={'/'}>Прочее оборудование</Link>
      </div>
    )
}