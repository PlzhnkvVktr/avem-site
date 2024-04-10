import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import s from "./ContactsPage.module.css"
import { fetchNews } from "../../store/reducers/ActionCreators"
import React from "react"
import { Link } from "react-router-dom"

type Props = {
    
}

export const ContactsPage: React.FC<Props> = () => {
  
    return (
      <div className={s.contacts_container}>
        <h1>Контакты</h1>
        <div className={s.feedback}>
          <strong>Юридический адрес:</strong>
          <p>346411, Ростовская обл., г. Новочеркасск, ул.26 Бакинских комиссаров, 11в</p>
          <p>ИНН 6150045308</p>
          <p>КПП 615001001</p>
          <strong>Почтовый адрес:</strong>
          <p>346411, Ростовская обл., г. Новочеркасск, ул.26 Бакинских комиссаров, 11в, Группа компаний ООО НПП "АВЭМ" и ООО "Авиаагрегат-Н"</p>
          <strong>За дополнительной информацией обращайтесь по телефонам:</strong>
          <p><strong>Приемная:</strong> +7 (8635) 26-04-55 </p>
          <p><strong>Вопросы по поставке оборудования и заключения договоров:</strong></p>
          <p>8-950-856-28-87, 8 (8635) 29-92-37, 26-07-82. </p>
          <p><strong>Директор:</strong> Сулейманов Умаркади Магомедович</p>
          <p><strong>Управляющий:</strong> Кетов Александр Анфианович</p>
          <p><strong>Начальник отдела маркетинга и внешнеэкономических связей:</strong> Солодилова Ольга Владимировна</p>
          <p><strong>Зам.начальника отдела по тендерным процедурам:</strong> Магомедова Мария Умаркадиевна</p>
          <p><strong>Начальник производства:</strong> Сражаев Сергей Николаевич</p>
          <p><strong>Начальник отдела информационных технологий:</strong> Брежнев Иван Михайлович</p>
          <p><strong>Начальник снабжения и отдел логистики:</strong> Мордвинцева Татьяна Ивановна</p>
          <p><strong>Снабжение:</strong> +7 (8635) 24-51-24</p>
          <p><strong>Вопросы по финансам:</strong> +7 (8635) 26-04-55</p>
          <strong>E-mail:</strong>
          <p><strong>Техническая поддержка:</strong> support@avem.ru</p>
          <p><strong>Отдел главного конструктора:</strong> ogk@avem.ru</p>
          <p><strong>Отдел снабжения:</strong> supply@avem.ru</p>
          <p><strong>Отдел снабжения:</strong> itsector@avem.ru</p>
          <p><strong>Коммерческий отдел:</strong> sales@avem.ru</p>
        </div>
        <div dangerouslySetInnerHTML={{ __html: 
          `<div style="display:flex;justify-content:center;position:relative;overflow:hidden;">
            <a href="https://yandex.ru/maps/org/aviaagregat_n/1099292295/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">Авиаагрегат-Н</a>
            <a href="https://yandex.ru/maps/238/novocherkassk/category/electrical_products/184107066/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:14px;">
            Электротехническая продукция в Новочеркасске
            </a>
            <iframe src="https://yandex.ru/map-widget/v1/?ll=40.069771%2C47.428896&mode=search&oid=1099292295&ol=biz&z=18.06" width="560" height="400" frameborder="1" allowfullscreen="true" style="position:relative;">
            </iframe>
          </div>` }} />
      </div>
    )
}
