import React from 'react'
import Logo from '../Logo'

import './index.scss'

export default function Footer(): JSX.Element {
  return (
	<footer className = 'footer'>
      <Logo />
      <p>Copyright &copy; {new Date().getFullYear()} </p>
  </footer>
  )
}
