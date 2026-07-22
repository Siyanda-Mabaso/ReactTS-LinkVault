import React from 'react'
import './SearchBar.css'
 const SearchBar = () => {
  return (
    <div className='search-container'>
        <input 
        type="text"
        placeholder='Search Links'
        className='search-input' />

        <button className='search-btn'> Search </button>
    </div>
  )
}
export default SearchBar;