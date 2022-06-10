//dependencies and imports
	import React from 'react'
	import styled from 'styled-components'

//styled
	const Container = styled.div`
		height: 30px;
		background-color: gold;
		color: red;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 14px;
		font-weight: 500;
	`

//function
	const Announcement = () => {
		return (
			<Container>
				Super Deal! Free Shipping on Orders Over $50
			</Container>
		)
	}

	export default Announcement