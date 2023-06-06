import React from 'react'
import { Input } from '../Input'
import { CiSearch } from 'react-icons/ci'
import { IconContext } from 'react-icons'
import './index.scss'

export default function Search() {
  const iconStyles = {
    //position: 'absolute', 
    right: '5%', 
    fill: 'black', 
    cursor: 'pointer'
  }
  return (
	<div className = 'search'>
      <input type = "text" placeholder = 'Search...' className = 'search__input' />
      <IconContext.Provider value = {{ style: iconStyles}}>
        <span className = 'search__icon'>
          <CiSearch />
        </span>
      </IconContext.Provider>

  </div>
  )
}
