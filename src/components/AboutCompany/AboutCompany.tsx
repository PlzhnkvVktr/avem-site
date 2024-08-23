import React, { useEffect } from 'react'
import s from './AboutCompany.module.css'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { fetchNews } from '../../store/reducers/ActionCreators'
import { NewsFeedItem } from '../NewsFeedItem/NewsFeedItem'
import { Spinner } from '../common/Spinner/Spinner'

type Props = {
    
}

export const AboutCompany: React.FC<Props> = () => {
  
  const dispatch = useAppDispatch()
  const {news, isLoading, error} = useAppSelector(state => state.newsReducer)
  const newsList = news.slice(0, 4)

  useEffect(() => {
    dispatch(fetchNews())
  }, [])

    return (
      <div className={s.about_container}>
        <div className={s.info_container}>
          <h1>ООО "АВИААГРЕГАТ-Н"</h1>
          <p>
            Крупнейший производитель испытательного оборудования на территории бывших стран СНГ.
            Все средства измерений, входящие в состав КСПАДа, имеют копии свидетельств об утверждении типа или сведения о
            включении средств измерений в Госреестр РФ, либо же свидельтва о калибровке, а так же имеют свидетельства,
            отметки в паспорте или клеймо на корпусе о первимчной проверке, копии методик проверки. Так же все 
            приборы имеют декларации Таможенного союза.
          </p>
          <Link to={'/about'} className={s.all_news_link}>Читать далее</Link>
        <img src="https://sgm.by/slider/build/1.jpg" alt=""  />
        </div>
        <div className={s.news_container}>
          <h2>НОВОСТИ</h2>
           {isLoading && <Spinner />}
           {newsList.map(item =>
              <NewsFeedItem 
                key={item.id} 
                news={item}
              />
              )
            }
            <Link to={'/news'} className={s.all_news_link}>Читать все новости</Link>
        </div>
      </div>
    )
}