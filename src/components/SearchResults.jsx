import React from 'react'
import "./SearchResults.css"

export default function SearchResults({result}) {
  return (
    <div className='search-result'
    onClick={(e)=>alert(`you clicked on ${result.first_name}`)}>
      {result.first_name}
    </div>
  )
}
