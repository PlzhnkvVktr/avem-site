import { current } from "@reduxjs/toolkit"
import { totalmem } from "os"
import React from "react"


type Props = {
    itemPerPage: number,
    totalItem: number,
    currentPage: [number, React.Dispatch<React.SetStateAction<number>>]
}

export const Pagination: React.FC<Props> = ({...props}) => {
    
  const pageNumber = []
    
  const nextPage = () => props.currentPage[1](next => next + 1)
  const prevPage = () => props.currentPage[1](next => next - 1)
  const paginate = (pageNumber: number) => props.currentPage[1](pageNumber)

  for (let i = 1; i <= Math.ceil(props.totalItem / props.itemPerPage); i++) {
      pageNumber.push(i)
  }

  if (pageNumber.length < 2) return <></>

  return (
    <ul className="pagination">
      {props.currentPage[0] != 1 && <button onClick={prevPage} className="page-link">Предыдущая</button>}
        {
          pageNumber.map(number => 
            <li key={number}>
              <a className={(props.currentPage[0] == number) ? "page-link page-link-active" : "page-link"} onClick={() => paginate(number)}>
                {number}
              </a>
            </li>)
        }
      {props.currentPage[0] != pageNumber.length && <button onClick={nextPage} className="page-link">Следующая</button>}
    </ul>
  )
}