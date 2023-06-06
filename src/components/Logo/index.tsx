import React from 'react'
import { Link } from 'react-router-dom'

import './index.scss'

export default function Logo(): JSX.Element {
  return (
	<div className = 'logo'>
      <Link to = '/'>Logo</Link>
  </div>
  )
}
