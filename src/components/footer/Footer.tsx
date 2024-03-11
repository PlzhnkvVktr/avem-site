import { Link } from "react-router-dom"
import s from './Footer.module.css'

type Props = {
    
}

export const Footer: React.FC<Props> = () => {
  
    return (
      <footer>
        <div className={s.link_container}>
          <div className={s.section_container}>
            <Link to={'/'}>Продукция</Link>
            <Link to={'/'}>Проекты</Link>
            <Link to={'/'}>Услуги</Link>
            <Link to={'/'}>Документация</Link>
            <Link to={'/'}>Сервис и гарантии</Link>
            <Link to={'/'}>Подбор оборудования</Link>
          </div>
          <div className={s.categories_container}>
            <h2>ПРОДУКЦИЯ</h2>
            <Link to={'/'}>Испытания электродвигателей</Link>
            <Link to={'/'}>Испытания машин постоянного тока</Link>
            <Link to={'/'}>Испытания трансформаторов</Link>
            <Link to={'/'}>Высоковольтные установки</Link>
            <Link to={'/'}>Нагрузочные модули</Link>
            <Link to={'/'}>Лаборатории проверки средств защиты</Link>
            <Link to={'/'}>Приборы</Link>
            <Link to={'/'}>Прочее оборудование</Link>
          </div>
          <div className={s.contacts_container}>
            <h2>КОНТАКТЫ</h2>
            <p>346400 Ростовская обл., г. Новочеркасск ул. 26 Бакинских комиссаров, 11В</p>
            <p>8-863-526-07-82</p>
            <p>SALES@AVEM.RU</p>
            <div className={s.socialnetwork_container}>
                <a href="#" target="_blank"><img src="http://localhost/wordpress/wp-content/uploads/2022/11/free-icon-vkontakte-4494517.png" alt="" /></a>
                <a href="https://www.youtube.com/user/mariamagomedova61" target="_blank"><img src="http://localhost/wordpress/wp-content/uploads/2022/11/free-icon-youtube-4494485.png" alt="" /></a>
                <a href="#" target="_blank"><img src="http://localhost/wordpress/wp-content/uploads/2022/11/free-icon-telegram-2111646.png" alt="" /></a>
                <a href="#" target="_blank"><img src="http://localhost/wordpress/wp-content/uploads/2022/11/free-icon-instagram-4494488.png" alt="" /></a>
            </div>
          </div>
        </div> 
      </footer>
    )
}