import React from 'react'
import { Outlet } from 'react-router-dom'

import Footer from '../Footer'
import Header from '../Header'
import Sidebar from '../Sidebar'

import './index.scss'

export default function Layout(): JSX.Element {
  return (
	<div className = 'layout'>
		<div className="container">
			<Header />
			<div className = 'layout__content'>
				<div className = 'layout__content__sidebar'>
					<Sidebar />
				</div>

				<main className = 'layout__main'>
					<Outlet />
				</main>
			</div>
		<Footer />
		</div>

	</div>
  )
}
