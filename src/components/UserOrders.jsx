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
	const { userOrders, fetchData } = props;

	const [ orders, setOrders ] = useState([])

	useEffect(() => {
		let x = 1;
		const ordersArr = userOrders.map(order => {
			return(
				<tr key={order._id}>
					<td>{order._id}</td>
					<td>{order.userId}</td>
					<td>{order.products}</td>
					{/*<th>ORDER ID</th>
					<th>UserId</th>
					<th>Products</th>*/}
				</tr>/*,
				console.log(`Order`),
				console.log(order),
				console.log(order._id),
				console.log(order.userId),
				console.log(order.products),
				x++*/
				)
		})
		setOrders(ordersArr)
	}, [userOrders, fetchData])

	return(
		<>
			<div className="text-center my-4">
				<h1>My Orders</h1>
			</div>
			
			<Table striped bordered hover responsive>
				<thead className="bg-dark text-white">
					<tr>
						<th>ORDER ID</th>
						<th>UserId</th>
						<th>Products</th>
					</tr>
				</thead>

				<tbody>
					{ orders }
				</tbody>
			</Table>

		</>

		)
}