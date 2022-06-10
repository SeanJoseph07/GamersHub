import { Table } from 'react-bootstrap';
import { useContext, useEffect, useState } from 'react';
import UserContext from '../UserContext';


export default function CheckoutOrder () {
	const [ allProducts, setAllProducts ] = useState([])

	const fetchData = () => {
		// fetch('https://passion-inside.herokuapp.com/users/checkout')
		fetch('http://localhost:8000/users/checkout')
		.then(res => res.json())
		.then(data => {
			console.log(data)
			//storing all the data to our useState
			setAllProducts(data)
		})
	}

	useEffect(() => {
		fetchData()
	}, [])

	const { user } = useContext(UserContext);

	return(
		<>
		<Table striped bordered hover responsive className="text-center">
			<thead>
				<tr>
					<th>ID</th>
					<th>NAME</th>
					<th>PRICE</th>
					<th>ACTIONS</th>
				</tr>
			</thead>

			<tbody>
				
			</tbody>
		</Table>
		</>
		)
}
