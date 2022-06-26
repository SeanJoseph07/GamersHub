//Imports
	import {useState, useEffect, useContext} from 'react';
	import {Container, Card, Button} from 'react-bootstrap';
	import UserContext from '../UserContext';
	import Swal from 'sweetalert2';
	import {useParams, Link, useNavigate} from 'react-router-dom';

//Function
	export default function SpecificProduct(){
		const { productId, productName } = useParams();
		const [ name, setName ] = useState('');
		const [ description, setDescription ] = useState('');
		const [ price, setPrice ] = useState(0);
		const [ qty, setQty ] = useState(1);
		useEffect(() => {
			fetch(`https://skygamershub.herokuapp.com/products/${ productId }`)
			// fetch(`http://localhost:8000/carts/products/${ productId }`)
			.then(res => res.json())
			.then(data => {
				setName(data.name)
				setDescription(data.description)
				setPrice(data.price)
			})
		}, [])
		const { user } = useContext(UserContext);

		const add = () => {
			setQty(prevCount => prevCount + 1)
		}
		const minus = () => {
			if (qty > 1) {
			setQty(prevCount => prevCount - 1)
			}
		}

		//addToCart function
		const addToCart = (productId) => {
			fetch('https://skygamershub.herokuapp.com/users/addToCart', {
			// fetch('http://localhost:8000/users/addToCart', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${localStorage.getItem('accessToken')}`
				},
				body: JSON.stringify({
					productId: productId
				})
			})
			.then(res => res.json())
			.then(data => {
				console.log(data)
				if(data){
					Swal.fire({
						title: 'Success!',
						icon: 'success',
						text: `You have successfully added ${name} to your cart`
					})
				} else {
					Swal.fire({
						title: 'Error',
						icon: 'error',
						text: 'Something went wrong. Please try again'
					})
				}
			})
		}

		//order function
		const order = (productId) => {
			fetch('https://skygamershub.herokuapp.com/orders/order', {
			// fetch('http://localhost:8000/orders/order', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${localStorage.getItem('accessToken')}`
				},
				body: JSON.stringify({
					productId: productId
				})
			})
			.then(res => res.json())
			.then(data => {
				console.log(`FE DATA`, data)
				if(data){
					Swal.fire({
						title: 'Success!',
						icon: 'success',
						text: `You have successfully ordered ${name}.`
					})
				} else {
					Swal.fire({
						title: 'Error',
						icon: 'error',
						text: 'Something went wrong. Please try again!'
					})
				}
			})
		}

		return(
			<Container>
				<h1>Product Details</h1>
				<Card>
					<Card.Header>
						<h4>Name: { name }</h4>
					</Card.Header>

					<Card.Body>
						<Card.Text>Description: { description }</Card.Text>
						<h6>Price: ${ price }</h6>
						<span>
							<Button variant="secondary" type="button" style={{ width: "15px", borderRadius: "50%", border: "2px-solid-black" }} onClick={minus}>-</Button>
							<span>Qty: {qty}</span>
							<Button variant="secondary" type="button" style={{ width: "15px", borderRadius: "50%", border: "2px-solid-black" }} onClick={add}>+</Button>
						</span>
					</Card.Body>
					<Card.Footer>
						<Button variant='primary' as={Link} to="/products">Back</Button>
					{user.accessToken !== null ?
						<>
							<Button variant='danger' onClick={() => addToCart(productId)}>addToCart</Button>
							<Button variant='danger' onClick={() => order(productId)}>Purchase</Button>
						</>
						:
						<Button variant='danger' as={Link} to="/login">Login to make a purchase</Button>
					}
					</Card.Footer>
				</Card>
			</Container>
			)
	}