import React from 'react'

import './index.scss'

interface TitleProps {
	children: React.ReactNode
	type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
	className?: string

}
export const Title = ({type, children, className}: TitleProps, {...props}) => {
  switch (type) {
		case 'h1':
			return <h1 className = {['h1', className].join(' ')} {...props}>{children}</h1>
		case 'h2':
			return <h2 className = {['h2', className].join(' ')} {...props}>{children}</h2>
		case 'h3':
			return <h3 className = {['h3', className].join(' ')} {...props}>{children}</h3>
		case 'h4':
			return <h4 className = {['h4', className].join(' ')} {...props}>{children}</h4>
		case 'h5':
			return <h5 className = {['h5', className].join(' ')} {...props}>{children}</h5>
		default:
			return <h6 className = {['h6', className].join(' ')} {...props}>{children}</h6>
	}
}
