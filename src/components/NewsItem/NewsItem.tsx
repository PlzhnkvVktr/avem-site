import React from 'react'
import s from './NewsItem.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { INews } from '../../models/INews'

type Props = {
    news: INews
}

export const NewsItem: React.FC<Props> = ({news}) => {

  
    const router = useNavigate()
  
    return (
      <div className={s.news_item_container}>
        <h2>{news.title}</h2>
        <p>{news.message}</p>
      </div>
    )
}