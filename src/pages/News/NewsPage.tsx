import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import s from "./NewsPage.module.css"
import { fetchNews } from "../../store/reducers/ActionCreators"
import React from "react"
import { Link } from "react-router-dom"

type Props = {
    
}

export const NewsPage: React.FC<Props> = () => {

  const dispatch = useAppDispatch()
  const {news, isLoading, error} = useAppSelector(state => state.newsReducer)

  useEffect(() => {
    dispatch(fetchNews())
    setTimeout(() => {
      console.log(news[0])
    }, 1000)
  }, [])
  
    return (
      <div className={s.news_item_container}>
        {news.map(
          (item, key) => 
          <div className={s.news} key={key}>
            <h2><Link to={"/news/" + item.id}>{item.title}</Link></h2>
            {/* {item.message.split("\n").map(
              it => 
              <p>{it}</p>
              )
            } */}
            {/* <div dangerouslySetInnerHTML={{ __html: item.title }} /> */}
            <div dangerouslySetInnerHTML={{ __html: item.message }} />
            
            <hr/>
          </div>
        )}
      </div>
    )
}