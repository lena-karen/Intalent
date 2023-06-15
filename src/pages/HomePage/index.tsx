import React from 'react'
import { FormattedMessage } from 'react-intl'
import { useDispatch } from 'react-redux'
import { signUpRequestAction, logInRequestAction } from '../../redux'
export default function HomePage() {
	const dispatch= useDispatch()


  return (
	<div>
		<h1>		
			<FormattedMessage
         		id = "home.title"
         		defaultMessage="Welcome"
       		/>
		</h1>
		<p>
			<FormattedMessage
         		id = "home.content"
         		defaultMessage="Intalent"
       		/>
		</p>
		{/* <button onClick={request}>Test</button> */}
	</div>
  )
}
