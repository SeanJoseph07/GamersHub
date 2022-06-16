//Imports
import { useState, useEffect } from 'react';
import ProductCard from './ProductCard'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';

//Function
export default function	UserView({productsData}) {

	const[products, setProducts] = useState([])

	useEffect(() => {
		const productsArr = productsData.map(product => {
			//only render the active products
			if(product.isActive === true) {
				return(
					<ProductCard key={product._id} productProp={product}/>
					)
			} else {
				return null
			}
		})
		setProducts(productsArr)
	}, [productsData])

	return(
		<>
			{ products }
		</>
		)
}  
