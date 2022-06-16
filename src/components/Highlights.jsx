//Imports
	import { Card } from 'react-bootstrap';
	import styled from 'styled-components';
	import { React, useState, useContext } from 'react';
	import SearchIcon from '@mui/icons-material/Search';
	import Badge from '@mui/material/Badge';
	import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
	import {mobile} from '../responsive';
	import { Link } from 'react-router-dom';
	import UserContext from '../UserContext';


//Styled
	const Container = styled.div`
		${mobile({
			height: "50px"
		})}
	`;

	const Wrapper = styled.div`
		padding: 10px 20px;
		display: flex;
		justify-content: space-between;
		${mobile({
			padding: "10px 0px",
			flexDirection: "column"
		})}
	`;

	const Left = styled.div`
		flex: 1;
		border: 3px solid red;
		background-color: lightgray;
		align-items: center;
		text-align: center;
		justify-content: center;
		margin: 15px;
	`;

	const Center = styled.div`
		flex: 1;
		border: 3px solid red;
		background-color: lightgray;
		align-items: center;
		text-align: center;
		justify-content: center;
		margin: 15px;
	`;

	const Right = styled.div`
		flex: 1;
		border: 3px solid red;
		background-color: lightgray;
		align-items: center;
		text-align: center;
		justify-content: center;
		margin: 15px;
	`;


//Function
	const Highlights = () => {

		const { user } = useContext(UserContext);

		return (
			<Container>
				<Wrapper>
					<Left>
						<h2>Your Most Trusted Tech Store</h2>
						100% All Brand New & Original. Shop with confidence!
					</Left>
					<Center>
						<h2>Fast Shipping Nationwide</h2>
						Ships in 24 Hours! Express and Same-Day Delivery within Metro Manila!
					</Center>
					<Right>
						<h2>100% Safe and Secure</h2>
						All Transactions are Fully Encrypted with State of the Art Technology!
					</Right>
				</Wrapper>
			</Container>
		)
	}

	export default Highlights