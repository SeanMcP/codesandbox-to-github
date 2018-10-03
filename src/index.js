import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

import './styles.css'

const Container = styled.div`
	background: #fff;
	border-radius: 0.5em;
	box-shadow: 0 0.125em 0.25em rgba(0, 0, 0, 0.125);
	margin: 1em;
	padding: 1em 2em;
`

const Heading = styled.h1`
	text-align: center;
`

const App = () => (
	<Container>
		<Heading>
			CodeSandbox{' '}
			<span role="img" aria-label="heart">
				❤️
			</span>{' '}
			GitHub
		</Heading>
	</Container>
)

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
