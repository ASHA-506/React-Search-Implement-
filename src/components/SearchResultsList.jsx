import React from 'react'
import "./SearchResultsList.css"
import SearchResults from './SearchResults'

export default function SearchResultsList({results}) {
  return (
    <div className='results-list'>
{
    results.map((result,id)=>{
        return <SearchResults result={result} key={id}/>
    })
}
    </div>
  )
}
{/* <div key={id}>{result.first_name}</div> replaced by <SearchResults result={result} key={id}/> */}