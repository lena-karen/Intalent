import React, {FC} from 'react'

import './index.scss'

interface ButtonProps {
	title: string
	className?: string
	handleClick?: () => void
	type?: 'button' | 'submit' | 'reset',
	isDisabled?: boolean
}
export default function Button({title, className, handleClick, type = 'button', isDisabled}: ButtonProps, {...props}) {
  return (
	<button className = {['btn', className].join(' ')} onClick = {handleClick} type = {type} {...props} disabled = {isDisabled}>
		{title}
	</button>
  )
}
