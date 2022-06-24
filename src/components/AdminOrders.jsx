//Imports
import { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import EditOrder from './EditOrder';

//Function
export default function AdminOrders(props) {
	const { ordersData, fetchData } = props;

	const [ orders, setOrders ] = useState([])

	const [ prod, setProd ] = useState([])

	useEffect(() => {

		const {ordersArr} = ordersData.map(order => {
			console.log('***ORDERSDATA.MAP***')
			return (
				<tr key={order.orders._id}>
					<td>{order.email}</td>
					<td>{order._id}</td>
					<td>{order.orders}</td>
				</tr>,
				console.log('order.email', order.email),
				console.log('order.orders._id', order.orders._id),
				console.log('order.orders.productId', order.orders.productId)
			)
		})
		setOrders(ordersArr)
		console.log('ordersArr', ordersArr);
	}, [ordersData, fetchData])

	console.log('***AFTER-USE_EFFECT***')

	/*useEffect(() => {

		const {props: {ordersData: {_id, email, orders: {productId, orderedOn, status, _id: orderId} } } } = props.map(order => {
			return (
				<tr key={orderId}>
					<td>{email}</td>
					<td>{email}</td>
					<td>{email}</td>
					<td>{email}</td>
				</tr>
			)
		})
		setOrders(orderId, email, productId, orderedOn, status)
		console.log('orders', orders);
	}, [ordersData, fetchData])*/

	/*console.log('props', props);
	console.log('orders', orders)*/

	console.log('ordersData', ordersData);



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
