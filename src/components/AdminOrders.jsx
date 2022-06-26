//Imports
import { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import EditOrder from './EditOrder';

//Function
export default function AdminOrders(props) {
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
				<h1>All Orders</h1>
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
					{orders}
				</tbody>
			</Table>

		</>

		)
}






/*//Imports
import { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import EditOrder from './EditOrder';

//Function
export default function AdminOrders(props) {
	const { ordersData, fetchData } = props;

	const [ orders, setOrders ] = useState([])

	const [ prod, setProd ] = useState([])

	useEffect(() => {

		const ordersArr = ordersData.map(order => {
			return (
				<tr key={order._id}>
					<td>{order.email}</td>
				</tr>
			
			let prodArr = order.map(prod => {
				return(
					<tr key={prod._id}>
						<td>{prod._id}</td>
						<td>{prod.productId}</td>
					</tr>
					)}
			)
		})
		setOrders(ordersArr)
		console.log('ordersArr', ordersArr);
	}, [ordersData, fetchData])

	console.log('props', props);
	console.log('ordersData', ordersData);
	console.log('orders', orders)

	return(
		<>
			<div className="text-center my-4">
				<h1>All Orders</h1>
			</div>
			
			<Table striped bordered hover responsive>
				<thead className="bg-dark text-white">
					<tr>
						<th>Email</th>
						<th>Order ID</th>
						<th>Products</th>
					</tr>
				</thead>

				<tbody>
					{ orders }
				</tbody>
			</Table>

		</>

		)
}*/
