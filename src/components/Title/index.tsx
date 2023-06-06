import React, {FC} from 'react'

import './index.scss'

interface TitleProps {
	children: React.ReactNode
	type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

}
export default function Title({type, children}: TitleProps, {...props}) {
  switch (type) {
		case 'h1':
			return <h1 className = 'h1' {...props}>{children}</h1>
		case 'h2':
			return <h2 className = 'h2' {...props}>{children}</h2>
		case 'h3':
			return <h3 className = 'h3' {...props}>{children}</h3>
		case 'h4':
			return <h4 className = 'h4' {...props}>{children}</h4>
		case 'h5':
			return <h5 className = 'h5' {...props}>{children}</h5>
		default:
			return <h6 className = 'h6' {...props}>{children}</h6>
	}
}
