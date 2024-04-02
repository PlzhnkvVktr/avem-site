import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import s from "./NewsPage.module.css"
import { fetchNews } from "../../store/reducers/ActionCreators"

type Props = {
    
}

export const NewsPage: React.FC<Props> = () => {

  const dispatch = useAppDispatch()
  const {news, isLoading, error} = useAppSelector(state => state.newsReducer)
  
  useEffect(() => {
    dispatch(fetchNews())
  }, [])
  
    return (
      <div className={s.news_item_container}>
        {news.map(
          (item, key) => 
          <div className={s.news} key={key}>
            <h2>{item.title}</h2>
            {/* {item.message.split("\n").map(
              it => 
              <p>{it}</p>
              )
            } */}
            <div dangerouslySetInnerHTML={{ __html: item.message }} />
            <hr/>
          </div>
        )}
      </div>
    )
}