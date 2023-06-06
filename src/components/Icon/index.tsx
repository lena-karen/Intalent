import React from 'react'
import './index.scss'
import { IconContext } from 'react-icons'

interface IconProp{
	icon: React.ReactNode,
	style?: Object,
	title?: string,
	styleContainer?: Object
}

export const Icon = ({title, icon, style = {}, styleContainer = {}}: IconProp) => {
	return (
		<div className={['icon__wrapper', {styleContainer}].join(' ')}>
			{
				title && <p>{title}</p>
			}
			<IconContext.Provider value={style}>
				<div className='icon__wrapper__context'>
					{icon}
				</div>
			</IconContext.Provider>
		</div>
	)
}


