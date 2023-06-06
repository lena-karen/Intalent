import React from 'react'
import Form from '../../components/Form'
import { useParams } from 'react-router-dom'

import './index.scss'

export default function LogInPage() {
  const {route} = useParams()
  return (
	<section className = 'login'>
    <p>Log in</p>
		<Form route = {route} />
  </section>
  )
}
