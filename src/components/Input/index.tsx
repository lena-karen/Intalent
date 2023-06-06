import React from 'react'
import './index.scss'

interface InputProps{
	className: string,
	type: 'text' | 'email' | 'password',
	placeholder: string,
	register?: any
	rules?: Object
	name: string
}

export const Input = ({className, type, placeholder, register, name, rules, ...props}: InputProps) => {
	return (
		<input 
			className = {['input', className].join(' ')} 
			type = {type}
			placeholder = {placeholder}
			name = {name}
			id = {name}
			{...register(name, rules)}
			{...props}
		/>
	)
}


