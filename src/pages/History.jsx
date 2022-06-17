//Imports
import UserOrders from '../components/UserOrders';
import AdminOrders from '../components/AdminOrders';
import { useContext, useEffect, useState } from 'react';
import UserContext from '../UserContext';
import { Button } from 'react-bootstrap'
import { Link, Navigate, useNavigate } from 'react-router-dom';

//Function
export default function HistoryPage() {

	const [ allOrders, setAllOrders ] = useState([])

	const adminData = () => {
		// fetch('https://herokuapp.com/orders/all')
		fetch('http://localhost:8000/orders/all')
		.then(res => res.json())
		.then(data => {
			console.log(data)
			setAllOrders(data)
		})
	}

	useEffect(() => {
		adminData()
	}, [])

	const [ userOrders, setUserOrders ] = useState([])

	const userData = () => {
		// fetch('https://herokuapp.com/orders/userOrder')
		fetch('http://localhost:8000/orders/userOrder')
		.then(res => res.json())
		.then(data => {
			console.log(data)
			setUserOrders(data)
		})
	}

	useEffect(() => {
		userData()
	}, [])

	const { user } = useContext(UserContext);

	return(

		(user.accessToken !== null) ? 

		<Navigate to="/" />

		:

		<>
			<h1>Orders</h1>
			{(user.isAdmin === true)?
			<AdminOrders ordersData={allOrders} fetchData={adminData}/>
			:
			<UserOrders ordersData={userOrders} fetchData={userData}/>
			}
		</>
	)
}
