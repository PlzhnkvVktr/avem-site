import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import { fetchNewsItem } from "../../store/reducers/ActionCreators"
import { Link, useParams } from "react-router-dom"
import s from "./NewsItemPage.module.css"

type Props = {
    
}

export const NewsItemPage: React.FC<Props> = () => {

    const params = useParams()
    const dispatch = useAppDispatch()
    const {newsItem, isLoading, error} = useAppSelector(state => state.newsItemReducer)

    useEffect(() => {
      dispatch(fetchNewsItem(params.id as string))
    }, [])

      return (
        <main>
            <div className={s.news_container}>
              <h2>{newsItem.title}</h2>
              <div dangerouslySetInnerHTML={{ __html: newsItem.message }} />
            </div>
        </main>
      )
}