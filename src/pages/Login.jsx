//dependencies and imports
	import {React, useState, useEffect, useContext} from 'react'
	import styled from 'styled-components'
	import {mobile} from '../responsive'
	import Swal from 'sweetalert2';
	import UserContext from '../UserContext';
	import {Navigate, useNavigate, Link} from 'react-router-dom';

//styled
	const Container = styled.div`
		width: 100vw;
		height: 60vh;
		background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url("") center;
		background-size: cover;
		display: flex;
		align-items: center;
		justify-content: center;
	`

	const Wrapper = styled.div`
		padding: 20px;
		width: 25%;
		background-color: white;
		border: 3px solid black;
		${mobile({
			width: "75%"
		})}
	`

	const Title = styled.h1`
		font-size: 24px;
		font-weight: 300;
		text-align: center;
	`

	const Form = styled.form`
		display: flex;
		flex-direction: column;
	`

	const Inputs = styled.input`
		flex: 1;
		min-width: 40%;
		margin: 10px 10px 0px 0px;
		padding: 10px;
	`

	const ButtonHolder = styled.div`
		display: flex;
		justify-content: center;
	`

	const Button = styled.button`
		width: 25%;
		border: none;
		padding: 6px 4px;
		margin: 8px 10px 15px 10px;
		background-color: #6441a5;
		color: white;
		cursor: pointer;
		align-items: center;
		justify-content: space-between;
		text-decoration: none;
		text-align: center;
	`

	const Links = styled.a`
		margin: 4px 0px;
		font-size: 12;
		text-decoration: none;
		color: black;
		cursor: pointer;

		&:hover{
			text-decoration: underline;
		}
	`

//function
	export default function Login () {

		const navigate = useNavigate();

		const { user, setUser } = useContext(UserContext);

		const [ email, setEmail ] = useState('');
		const [ password, setPassword ] = useState('');

		const [ isActive, setIsActive ] = useState(true);

		useEffect(() => {
			if (email !== '' && password !== '') {
				setIsActive(true);
			} else {
				setIsActive(false);
			}
		}, [email, password])

		function authentication(e) {
			e.preventDefault();

			// fetch('https://herokuapp.com/users/login', {
			fetch('http://localhost:8000/users/login', {
				method: 'POST', 
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					email: email,
					password: password
				})
			})
			.then(response => response.json())
			.then(data => {
				console.log(data);
				if(data.accessToken !== undefined){
					localStorage.setItem('accessToken', data.accessToken)
					setUser({
						accessToken: data.accessToken
					})
					Swal.fire({
						title: 'Yay',
						icon: 'success',
						text: 'You are now logged in!'
					})
					// fetch('https://herokuapp.com/users/details', {
					fetch('http://localhost:8000/users/details', {
						headers: {
							Authorization: `Bearer ${data.accessToken}`
						}
					})
					.then(res => res.json())
					.then(data => {
						console.log(data)

						if(data.isAdmin === true){
							localStorage.setItem('isAdmin', data.isAdmin)
							setUser({
								isAdmin: data.isAdmin
							})
							navigate('/products')
						} else {
							navigate('/')
						}
					})
				} else {
					Swal.fire({
						title: 'Oops',
						icon: 'error',
						text: 'Something went wrong, check your credentials.'
					})
				}
				setEmail('');
				setPassword('');
			})
		}

		return (

			(user.accessToken !== null) ? 

			<Navigate to="/home" />

			:

			<Container>
				<Wrapper>
					<Title>SIGN IN</Title>
					<Form onSubmit={e => authentication(e)}>
						<Inputs
						type="email"
						placeholder="Email"
						required
						value={email}
						onChange={e => setEmail(e.target.value)}
						/>
						<Inputs
						type="password"
						placeholder="Password"
						required
						value={password}
						onChange={e => setPassword(e.target.value)}
						/>
						<ButtonHolder>
							<Button as={Link} to="/">Cancel</Button>
							{isActive ?
							<Button variant="primary" type="Submit" className="mt-3">Login</Button>
							:
							<Button variant="primary" type="Submit" className="mt-3" disabled>Submit</Button>
							}
						</ButtonHolder>
						<Links >Forgot Password?</Links>
						<Links as={Link} to="/register">Register new account</Links>
					</Form>
				</Wrapper>
			</Container>
		)
	}
