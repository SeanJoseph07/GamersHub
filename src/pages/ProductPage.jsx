import UserView from '../components/UserView';
import AdminView from '../components/AdminView';
import { useContext, useEffect, useState } from 'react';
import UserContext from '../UserContext';
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';

export default function ProductPage() {

	const [ allProducts, setAllProducts ] = useState([])

	const fetchData = () => {
		// fetch('https://passion-inside.herokuapp.com/products/all')
		fetch('http://localhost:8000/products/all')
		.then(res => res.json())
		.then(data => {
			console.log(data)
			setAllProducts(data)
		})
	}

	useEffect(() => {
		fetchData()
	}, [])

	const { user } = useContext(UserContext);

	return(
		<>
			<h1>Products</h1>
			{(user.isAdmin === true)?
			<AdminView productsData={allProducts} fetchData={fetchData}/>
			:
			<UserView productsData={allProducts}/>
			}
		</>
	)
}
