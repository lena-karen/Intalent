import React, {FC} from 'react'
import './index.scss'
import { IconContext } from 'react-icons'
import { CSSProperties } from '@emotion/serialize'

interface IconProp{
	icon: React.ReactNode,
	style?: Object,
	title?: string,
	className?: Object
}

export const Icon: FC<IconProp> = ({title, icon, style = {}, className}) => {
	return (
		<div className={`icon__wrapper ${className}`}>
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

// export const ComponentWithBorder = (Component: React.FC<IconProp>) => (props: IconProp) => {
// 	return (<div style={{border: '1px solid gray'}}><Component {...props} /></div>)
// }

// export const IconWithBorder = ComponentWithBorder(Icon)

