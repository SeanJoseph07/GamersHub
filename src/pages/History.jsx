import UserOrders from '../components/UserOrders';
import AdminOrders from '../components/AdminOrders';
import { useContext, useEffect, useState } from 'react';
import UserContext from '../UserContext';
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';

export default function HistoryPage() {

	const [ allOrders, setAllOrders ] = useState([])

	const fetchData = () => {
		// fetch('https://herokuapp.com/')
		fetch('http://localhost:8000/')
		.then(res => res.json())
		.then(data => {
			console.log(data)
			setAllOrders(data)
		})
	}

	useEffect(() => {
		fetchData()
	}, [])

	const { user } = useContext(UserContext);

	return(
		<>
			<h1>Orders</h1>
			{(user.isAdmin === true)?
			<AdminOrders ordersData={allOrders} fetchData={fetchData}/>
			:
			<UserOrders ordersData={allOrders}/>
			}
		</>
	)
}
