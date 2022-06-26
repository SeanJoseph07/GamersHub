/*//Imports
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
} */ 

////////

//Imports
import { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import EditOrder from './EditOrder';

//Function
export default function UserOrders(props) {
	const { ordersData, fetchData } = props;

	const [ orders, setOrders ] = useState([])

	useEffect(() => {

		const ordersArr = ordersData.map(order => {
			return (
				<tr key={order._id}>
					<td>{order._id}</td>
					<td>{order.userEmail}</td>
					<td>{order.productId}</td>
					<td>{order.status}</td>
					<td>{order.orderedOn}</td>
				</tr>
			)
		})
		setOrders(ordersArr)
	}, [ordersData, fetchData])

	return(
		<>
			<div className="text-center my-4">
				<h1>My Orders</h1>
			</div>
			
			<Table striped bordered hover responsive>
				<thead className="bg-dark text-white">
					<tr>
						<th>Order ID</th>
						<th>Email</th>
						<th>Product</th>
						<th>Status</th>
						<th>Ordered On</th>
					</tr>
				</thead>

				<tbody>
					{ orders }
				</tbody>
			</Table>

		</>

		)
}