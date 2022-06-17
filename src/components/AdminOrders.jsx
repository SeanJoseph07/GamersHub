//Imports
import { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import EditOrder from './EditOrder';

//Function
export default function AdminView(props) {

	const { ordersData, adminData } = props;

	const [ orders, setOrders ] = useState([])


	useEffect(() => {
		const ordersArr = ordersData.map(order => {
			return(
				<tr key={order._id}>
					<td>{order._id}</td>
					<td>{order.name}</td>
					<td>{order.description}</td>
					<td>{order.price}</td>
					<td>
						<EditOrder order={order._id} fetchData={adminData}/>
					</td>
				</tr>
				)
		})
		setOrders(ordersArr)
	}, [ordersData])


	return(
		<>
			<div className="text-center my-4">
				<h1>Admin Dashboard</h1>
			</div>
			
			<Table striped bordered hover responsive>
				<thead className="bg-dark text-white">
					<tr>
						<th>ID</th>
						<th>NAME</th>
						<th>DESCRIPTION</th>
						<th>PRICE</th>
					</tr>
				</thead>

				<tbody>
					{ orders }
				</tbody>
			</Table>

		</>

		)
}
