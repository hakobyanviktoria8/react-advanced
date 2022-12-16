import React from 'react'
import "./../../util/styles/Pagination.css"

export const Pagination = ({totalPage}) => {
    const pageArr = Array.from({length: totalPage}, (_, i) => i + 1)
    console.log(totalPage, pageArr);
  return (
    <div className="pagination">
        {pageArr.map(page => <button key={page}>{page}</button>)}
    </div>
  )
}
