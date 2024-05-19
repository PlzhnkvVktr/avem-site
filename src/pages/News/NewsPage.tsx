import { useEffect, useLayoutEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import s from "./NewsPage.module.css"
import { fetchNews } from "../../store/reducers/ActionCreators"
import React from "react"
import { Link, useLocation } from "react-router-dom"
import { Pagination } from "../../components/common/Pagination/Pagination"

type Props = {
    
}

export const NewsPage: React.FC<Props> = () => {

  const dispatch = useAppDispatch()
  const {news, isLoading, error} = useAppSelector(state => state.newsReducer)
  const { pathname } = useLocation()

  const currentPage = useState(1)
  const newsPerPage = useState(5)

  const lastIndex = currentPage[0] * newsPerPage[0]
  const firstIndex = lastIndex - newsPerPage[0]
  const page = news.slice(firstIndex, lastIndex)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname, page])

  useEffect(() => {
    dispatch(fetchNews())
  }, [])
  
    return (
      <main>
        <div className={s.news_item_container}>
          {page.map(
            (item, key) => 
            <div className={s.news} key={key}>
              <h2><Link to={"/news/" + item.id}>{item.title}</Link></h2>
              <div dangerouslySetInnerHTML={{ __html: item.message }} />
              <hr/>
            </div>
          )}
        </div>
        <Pagination 
          itemPerPage={newsPerPage[0]}
          totalItem={news.length}
          currentPage={currentPage}
        />
      </main>
    )
}