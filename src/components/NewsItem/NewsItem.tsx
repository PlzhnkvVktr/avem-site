import React from 'react'
import s from './NewsItem.module.css'
import { Link } from 'react-router-dom'
import { INews } from '../../models/INews'

type Props = {
    news: INews
}

export const NewsItem: React.FC<Props> = ({news}) => {
  
    return (
      <div className={s.news_item_container}>
        <p>
          {news.title}
        </p>
      </div>
    )
}