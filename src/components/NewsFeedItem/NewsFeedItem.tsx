import React from 'react'
import s from './NewsFeedItem.module.css'
import { Link } from 'react-router-dom'
import { INews } from '../../models/INews'

type Props = {
    news: INews
}

export const NewsFeedItem: React.FC<Props> = ({news}) => {
  
    return (
      <div className={s.news_item_container}>
        <h3><Link to={"/news/" + news.id}>{news.title}</Link></h3>
      </div>
    )
}