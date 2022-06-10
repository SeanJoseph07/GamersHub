import { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import Swal from 'sweetalert2';

export default function AddProduct({fetchData}) {

	const [ name, setName ] = useState('');
	const [ description, setDescription ] = useState('');
	const [ price, setPrice ] = useState(0);

	const [ showAdd, setShowAdd ] = useState(false);

	//Functions to handle opening and closing of our Modal
	const openAdd = () => setShowAdd(true);
	const closeAdd = () => setShowAdd(false); 

	const addProduct = (e) => {
		e.preventDefault();

		// fetch('https://passion-inside.herokuapp.com/products/create', {
		fetch('http://localhost:8000/products/create', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${ localStorage.getItem('accessToken') }`
			},
			body: JSON.stringify({
				name: name,
				description: description,
				price: price
			})
		})
		.then(res => res.json())
		.then(data => {
			console.log(data)

			if(data){
				Swal.fire({
					title: 'Success',
					icon: 'success',
					text: 'Product successfully added'
				})

				//Close our modal
				closeAdd()

				fetchData()
			}else {
				Swal.fire({
					title: 'error',
					icon: 'error',
					text: 'Please try again'
				})

				fetchData()
			}

			//reset all states input
			setName('')
			setDescription('')
			setPrice(0)
		})


	}

	return(
		<>
			<Button variant="secondary" onClick={openAdd}>Add New Product</Button>

			{/* Add Modal */}

			<Modal show={showAdd} onHide={closeAdd}>
				<Form onSubmit={e => addProduct(e)}>
					<Modal.Header closeButton>
						<Modal.Title>Add Product</Modal.Title>
					</Modal.Header>

					<Modal.Body>
						<Form.Group>
							<Form.Label>Name</Form.Label>
							<Form.Control 
							      type="text"
							      required
							      value={name}
							      onChange={e => setName(e.target.value)}
							 />
						</Form.Group>

						<Form.Group>
							<Form.Label>Description</Form.Label>
							<Form.Control 
							      type="text"
							      required
							      value={description}
							      onChange={e => setDescription(e.target.value)}
							 />
						</Form.Group>

						<Form.Group>
							<Form.Label>Price</Form.Label>
							<Form.Control 
							      type="number"
							      required
							      value={price}
							      onChange={e => setPrice(e.target.value)}
							 />
						</Form.Group>
					</Modal.Body>

					<Modal.Footer>
						<Button variant="secondary" onClick={closeAdd}>Close</Button>
						<Button variant="success" type="submit">Submit</Button>
					</Modal.Footer>

				</Form>
			</Modal>
		</>

		)
}
