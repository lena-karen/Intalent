import React, {useEffect, useState} from 'react'
import Form from '../../components/Form'
import Title from '../../components/Title'
import { Link, useParams } from 'react-router-dom'

import './index.scss'
export default function RegistrationPage() {
	const [currentPage, setCurrentPage] = useState('')
	const {route} = useParams()
  
	useEffect(() => {
	  if (route) setCurrentPage(route)
	}, [route])
  return (
	<section className = 'registration'>
		<Title type = 'h1'>{currentPage === 'login' ? 'Log in' : 'Register'}</Title>
		<Form route = {route} />
		<Link to = '/login'>Already registered?</Link>
	</section>
  )
}
