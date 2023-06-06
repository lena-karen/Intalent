import React from 'react'

import { MdKeyboardDoubleArrowRight } from 'react-icons/md'
import { IconContext } from 'react-icons'
import './index.scss'

export default function Sidebar() {
	const categories = [
		{
			id: 1,
			title: 'Medicine'
		},
		{
			id: 2,
			title: 'Lawyer'
		},
		{
			id: 3,
			title: 'Media'
		},
		{
			id: 4,
			title: 'Appartments'
		},
		{
			id: 5,
			title: 'Study'
		},
		{
			id: 6,
			title: 'Insurance'
		},
		{
			id: 7,
			title: 'In house'
		},
		{
			id: 8,
			title: 'Renovation'
		},
	]
  return (
	<aside className = 'sidebar'>
		{
			categories.map(category => (
				<div className = 'sidebar__link__block' key = {category.id}>
					<a href = '#' className = 'sidebar__link__block__a'>{category.title}
						<IconContext.Provider value={{style: {fill: 'white'}}}>
							<MdKeyboardDoubleArrowRight />
						</IconContext.Provider>
					</a>
				</div>

					
				
			))	
		}
	</aside>
  )
}
