import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import s from "./ProductPage.module.css"

type Props = {
    
}

export const ProductPage: React.FC<Props> = () => {

  const dispatch = useAppDispatch()
  const {news, isLoading, error} = useAppSelector(state => state.newsReducer)
  console.log(news)
  
    return (
      <div className={s.news_item_container}>
        {/* {news.map(
          item => 
          <div className={s.news}>
            <h2>{item.title}</h2>
            {item.message.split("\n").map(
              it => 
              <p>{it}</p>
              )
            }
            <hr/>
          </div>
        )} */}
        <p>UUUUUU</p>
      </div>
    )
}