import React from 'react'
import Form from '../../components/Form'
import { Link, useParams } from 'react-router-dom'

import './index.scss'
export default function RegistrationPage() {
	const { route } = useParams()

  return (
	<section className = 'registration'>
		<p>Registration</p>
		<Form route = {route} />
		<Link to = '/login'>Already registered?</Link>
	</section>
  )
}
