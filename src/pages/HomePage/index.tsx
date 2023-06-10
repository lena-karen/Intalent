import React from 'react'
import { FormattedMessage } from 'react-intl'

export default function HomePage() {
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

	</div>
  )
}
