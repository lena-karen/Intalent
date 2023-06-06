import React, {useState, useEffect} from 'react'
import Form from '../../components/Form'
import Title from '../../components/Title'
import { useParams } from 'react-router-dom'

import './index.scss'

export default function LogInPage() {
  const [currentPage, setCurrentPage] = useState('')
  const {route} = useParams()

  useEffect(() => {
    if (route) setCurrentPage(route)
  }, [route])

  return (
	<section className = 'login'>
    <Title type = 'h1'>{currentPage === 'login' ? 'Log in' : 'Register'}</Title>
		<Form route = {route} />
  </section>
  )
}
