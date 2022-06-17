//Imports
import { useState, useEffect } from 'react';
import OrderCard from './OrderCard'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';

//Function
export default function	UserView({ordersData}) {

	const[orders, setOrders] = useState([])

	useEffect(() => {
		const ordersArr = ordersData.map(order => {
				return(
					<OrderCard key={order._id} orderProp={order}/>
					)
		})
		setOrders(ordersArr)
	}, [ordersData])

	return(
		<>
			{ orders }
		</>
		)
}  
