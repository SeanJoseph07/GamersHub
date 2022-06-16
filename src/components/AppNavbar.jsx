//Imports
	import { React, useState, useContext } from 'react'
	import styled from 'styled-components'
	import SearchIcon from '@mui/icons-material/Search';
	import Badge from '@mui/material/Badge';
	import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
	import {mobile} from '../responsive';
	import { Link } from 'react-router-dom';
	import UserContext from '../UserContext';
	import { Navbar, Nav } from 'react-bootstrap';

//Styled
	const Container = styled.div`
		height: 60px;
		background-color: teal;
		${mobile({
			height: "50px"
		})}
	`;

	const Wrapper = styled.div`
		padding: 10px 20px;
		display: flex;
		justify-content: space-between;
		${mobile({
			padding: "10px 0px"
		})}
	`;

	const Left = styled.div`
		flex: 1;
		display: flex;
	`;

	const Icon = styled.span`
		font-size: 14px;
		cursor: pointer;
		${mobile({
			display: "none"
		})}
	`

	const SearchContainer = styled.div`
		// border: 1px solid lightgray;
		display: flex;
		align-items: center;
		margin-left: 25px;
		padding: 5px;
	`

	const Input = styled.input`
		border: none;
		${mobile({
			width: "50px"
		})}
	`

	const Center = styled.div`
		flex: 1;
		text-align: center;
	`;

	const Logo = styled.h1`
		font-weight: bold;
		${mobile({
			fontSize: "24px"
		})}
	`

	const Right = styled.div`
		flex: 1;
		// display: flex;
		align-item: center;
		justify-content: flex-end;
		flex-flow: reverse;
		${mobile({
			justifyContent: "center", flex: 2
		})}
	`;

	const MenuItem = styled.div`
		font-size: 14px;
		cursor: pointer;
		margin-left: 15px;
		margin-right: 4px;
		${mobile({
			fontSize: "12px", marginLeft: "10px"
		})}
	`


//Function
	const AppNavbar = () => {

		const { user } = useContext(UserContext);

		return (
			<Container>
				<Wrapper>
					<Left>
						<Icon>
							GH
						</Icon>
						<SearchContainer>
							<Input placeholder="Search"/>
							<SearchIcon style={{color:"gray", fontSize:16}}/>
						</SearchContainer>
					</Left>
					<Center>
						<Logo>GAMER'S HUB</Logo>
					</Center>
					<Right>
						<MenuItem as={Link} to="/">Home</MenuItem>
						<MenuItem as={Link} to="/products">Products</MenuItem>
						{(user.accessToken !== null) ?
						<MenuItem as={Link} to="/logout">Logout</MenuItem>

						:

						<>
						<MenuItem as={Link} to="/register">Register</MenuItem>
						<MenuItem as={Link} to="/login">Sign in</MenuItem>
						</>
						}
						
						{(user.accessToken !== null && user.isAdmin === true) ?
						
						<>
						</>

						:

						<>
						<MenuItem as={Link} to="/history">History</MenuItem>
						<MenuItem as={Link} to="/cart">Cart</MenuItem>
						<ShoppingCartTwoToneIcon/>
						</>
						}

					</Right>
				</Wrapper>
			</Container>
		)
	}

	export default AppNavbar