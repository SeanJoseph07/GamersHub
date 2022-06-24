//Imports
import UserOrders from '../components/UserOrders';
import AdminOrders from '../components/AdminOrders';
import { useContext, useEffect, useState } from 'react';
import UserContext from '../UserContext';
import { Button } from 'react-bootstrap'
import { Link, Navigate, useNavigate } from 'react-router-dom';

//Function
export default function ProductPage() {

	const [ allOrders, setAllOrders ] = useState([])

	const { user } = useContext(UserContext);

	const fetchData = () => {
		// fetch('https://skygamershub.herokuapp.com/orders/all')
		if (user.isAdmin === true) {
			fetch('http://localhost:8000/orders/all'
			, {
				method: 'GET', 
				headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${user.accessToken}`}
			})
			.then(res => res.json())
			.then(data => {
				// console.log(data)
				setAllOrders(data)
			})
		} else if (user.isAdmin !== true) {
			fetch('http://localhost:8000/orders/userOrder'
			, {
				method: 'GET', 
				headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${user.accessToken}`}
			})
			.then(res => res.json())
			.then(data => {
				// console.log(data)
				setAllOrders(data)
			})
		}
	}

	useEffect(() => {
		fetchData()
	}, [])


	return(
		(user.accessToken !== null) ?
			<>
				<h1>Orders</h1>
				{(user.isAdmin === true)?
				<AdminOrders ordersData={allOrders} fetchData={fetchData}/>
				:
				<UserOrders userOrders={allOrders} fetchData={fetchData}/>
				}
			</>
		:
		<Navigate to="/" />
	)
}

//Imports
/*import UserOrders from '../components/UserOrders';
import AdminOrders from '../components/AdminOrders';
import { useContext, useEffect, useState } from 'react';
import UserContext from '../UserContext';
import { Button } from 'react-bootstrap'
import { Link, Navigate, useNavigate } from 'react-router-dom';

//Function
export default function HistoryPage() {

	const [ orders, setOrders ] = useState([])

	const fetchData = (user) => {

		if(user !== null && user.accessToken === null)
			return <Navigate to="/" />

		console.log(user.isAdmin);

		let url = user.isAdmin
			? 'http://localhost:8000/orders/all'
			: 'http://localhost:8000/orders/userOrders';
		// fetch('https://herokuapp.com/orders/all')

		fetch(url, {
			method: 'GET', 
			headers: { 'Content-Type': 'application/json'}
		})
		.then(res => res.json())
		.then(data => {
			console.log(data)
			setOrders(data)
		})
	}

	useEffect(() => {
		fetchData(UserContext)
	}, [])

	const { user } = useContext(UserContext);

			// console.log(fetchData);
	return(

		<>
			<h1>Orders</h1>
			{
				(user.isAdmin)
				? <AdminOrders ordersData={orders}/>
				: <UserOrders ordersData={orders}/>
			}
		</>
	)
}*/