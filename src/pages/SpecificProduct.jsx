//Imports
	import {useState, useEffect, useContext} from 'react';
	import {Container, Card, Button} from 'react-bootstrap';
	import UserContext from '../UserContext';
	import Swal from 'sweetalert2';
	import {useParams, Link, useNavigate} from 'react-router-dom';

//Function
	export default function SpecificProduct(){
		console.log(`*****************SP*************`)
		const { productId } = useParams();
		const [ name, setName ] = useState('');
		const [ description, setDescription ] = useState('');
		const [ price, setPrice ] = useState(0);
		useEffect(() => {
			// fetch(`https://herokuapp.com/products/${ productId }`)
			fetch(`http://localhost:8000/carts/products/${ productId }`)
			.then(res => res.json())
			.then(data => {
				setName(data.name)
				setDescription(data.description)
				setPrice(data.price)
				console.log(`inside then data`)
				console.log(`name`, name)
				console.log(`description`, description)
				console.log(`price`, price)
				console.log(`setName`, setName)
				console.log(`setDescription`, setDescription)
				console.log(`setPrice`, setPrice)
				console.log(`data`, data)
				console.log(`***********************`)
			})
		}, [])
		const { user } = useContext(UserContext);

		//checkout function
		const checkout = (productId) => {
			// fetch('https://herokuapp.com/users/checkout', {
			fetch('http://localhost:8000/users/checkout', {
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
		return(
			<Container>
				<h1>{name}</h1>
				<Card>
					<Card.Header>
						<h4>{ name }</h4>
					</Card.Header>

					<Card.Body>
						<Card.Text>{ description }</Card.Text>
						<h6>Price: Php { price }</h6>
					</Card.Body>
					<Card.Footer>
					{user.accessToken !== null ?
						<Button variant='danger' onClick={() => checkout(productId)}>Buy</Button>
						:
						<Button variant='danger' as={Link} to="/login">Login to make a purchase</Button>
					}
					</Card.Footer>
				</Card>
			</Container>
			)
	}