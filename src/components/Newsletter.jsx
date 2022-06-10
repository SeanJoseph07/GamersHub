//dependencies and imports
	import React from 'react'
	import styled from 'styled-components'
	import SendSharpIcon from '@mui/icons-material/SendSharp';
	import {mobile} from '../responsive'

//styled
	const Container = styled.div`
		height: 35vh;
		background-color: #fcf5f5;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		margin-top: 10vh;
	`

	const Title = styled.h1`
		font-size: 40px;
		margin-bottom: 20px;
	`

	const Description = styled.div`
		font-size: 20px;
		font-weight: 300;
		margin-bottom: 20px;
		${mobile({
			textAlign: "center"
		})}
	`

	const InputContainer = styled.div`
		width: 50%;
		height: 35px;
		background-color: white;
		display: flex;
		justify-content: space-between;
		border: 1px solid lightgray;
		${mobile({
			width: "80%"
		})}
	`

	const Input = styled.input`
		border: none;
		flex: 8;
		padding-left: 20px;
	`

	const Button = styled.button`
		flex: 1;
		border: none;
		background-color: teal;
		color: white;
	`

//function
	const Newsletter = () => {
		return (
			<Container>
				<Title>Newsletter</Title>
				<Description>Stay updated with our available and upcoming products, as well as monthly discounts</Description>
				<InputContainer>
					<Input placeholder="Your email" />
					<Button>
						<SendSharpIcon/>
					</Button>
				</InputContainer>
			</Container>
		)
	}

	export default Newsletter