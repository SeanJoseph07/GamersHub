//dependencies and imports
	import React from 'react'
	import styled from 'styled-components'
	import {mobile} from '../responsive'
	import { useState, useEffect, useContext} from 'react';
	import UserContext from '../UserContext';
	import Swal from 'sweetalert2';
	import { Navigate, useNavigate, Link } from 'react-router-dom';

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
		width: 40%;
		background-color: white;
		align-items: center;
		justify-content: center;
		border: 3px solid black;
		${mobile({
			width: "75%"
		})}
	`

	const inputHolder = styled.div`
		display: flex;
		margin: 4px;
	`

	const Title = styled.h1`
		font-size: 24px;
		font-weight: 300;
		text-align: center;
		margin: 10px;
		margin-top: 0px;
	`

	const Form = styled.form`
		display: flex;
		flex-wrap: wrap;
	`

	const Inputs = styled.input`
		flex: 1;
		min-width: 40%;
		margin: 6px;
		padding: 10px;
	`

	const Agreement = styled.span`
		font-size: 12px;
		margin: 20px 0px;
	`

	const Button = styled.button`
		width: 25%;
		border: none;
		padding: 8px 10px;
		margin: 15px;
		background-color: #6441a5;
		color: white;
		cursor: pointer;
		align-items: center;
		justify-content: space-between;
		text-decoration: none;
		text-align: center;
	`

	const mutedText = styled.p`
		opacity: 60%;
	`

	const Links = styled.p`

	`

//function
	const Register = () => {

		const navigate = useNavigate()

		const { user, setUser } = useContext(UserContext);

		const [ name, setName ] = useState('');
		const [ email, setEmail ] = useState('');
		const [ password, setPassword ] = useState('');
		const [ verifyPassword, setVerifyPassword ] = useState('');

		const [ isActive, setIsActive ] = useState(true);
		useEffect(() => {
				if((email !== '' && password !== '' && verifyPassword !=='') && (password === verifyPassword)){
					setIsActive(true)
				} else {
					setIsActive(false);
				}
			}, [email, password, verifyPassword])

		function registerUser(e) {
			e.preventDefault();
			// fetch('https://herokuapp.com/users/register', {
			fetch('http://localhost:8000/users/register', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					name: name,
					email: email,
					password: password,
					verifyPassword: verifyPassword
				})
			})
			.then(response => response.json())
			.then(data => {
				if(data.accessToken === undefined) {
					localStorage.setItem('accessToken', data.accessToken);
					setUser({
						accessToken: data.accessToken
					})
					Swal.fire({
						title: 'Success!',
						icon: 'success',
						text: 'You successfully registered!'
					})
				} else {
					Swal.fire({
						title: 'Ooopsss!',
						icon: 'error',
						text: 'Something went wrong. Check your credentials.'
					})
				}
				setName('')
				setEmail('')
				setPassword('')
				setVerifyPassword('');
			})
			navigate('/login')
		}

		return (
			<Container className="mb-5">
				<Wrapper>
					<Title>CREATE AN ACCOUNT</Title>
					<Form onSubmit={e => registerUser(e)}>
						<inputHolder>
							Your Name
							<Inputs
							type="name"
							placeholder="First and last name"
							required
							value={name}
							onChange={e => setName(e.target.value)}
							/>
						</inputHolder>
						<inputHolder>
							Email
							<Inputs
							type="email"
							placeholder="Email"
							required
							value={email}
							onChange={e => setEmail(e.target.value)}
							/>

						</inputHolder>
						<inputHolder>
							Password
							<Inputs
							type="password"
							placeholder="Password"
							required
							value={password}
							onChange={e => setPassword(e.target.value)}
							/>
						</inputHolder>
						<inputHolder>
							Re-enter password
							<Inputs
							type="password"
							placeholder="Re-enter Password"
							required
							value={verifyPassword}
							onChange={e => setVerifyPassword(e.target.value)}
							/>
						</inputHolder>
						<Agreement>By creating an account, you agree to the Gamer Hub's Conditions of Use and Privacy Notice.</Agreement>
						<Button as={Link} to="/">CANCEL</Button>
						{ isActive ? 
						<Button type="submit">CREATE</Button>
						:
						<Button type="submit" disabled>CREATE</Button>
						}
					</Form>
					<Links  as={Link} to="/login">Sign into your account</Links>
				</Wrapper>
			</Container>
		)
	}

	export default Register;
