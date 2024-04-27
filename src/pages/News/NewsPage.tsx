import { useEffect, useLayoutEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import s from "./NewsPage.module.css"
import { fetchNews } from "../../store/reducers/ActionCreators"
import React from "react"
import { Link, useLocation } from "react-router-dom"

type Props = {
    
}

export const NewsPage: React.FC<Props> = () => {

  const dispatch = useAppDispatch()
  const {news, isLoading, error} = useAppSelector(state => state.newsReducer)
  const { pathname } = useLocation()

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
    dispatch(fetchNews())
  }, [])
  
    return (
      <main>
        <div className={s.news_item_container}>
          {news.map(
            (item, key) => 
            <div className={s.news} key={key}>
              <h2><Link to={"/news/" + item.id}>{item.title}</Link></h2>
              <div dangerouslySetInnerHTML={{ __html: item.message }} />
              <hr/>
            </div>
          )}
        </div>
      </main>
    )
}