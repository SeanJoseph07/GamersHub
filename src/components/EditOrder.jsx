//Imports
import { useState, useEffect } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import Swal from 'sweetalert2'

//Function
export default function EditOrder({order, fetchData}){
	//{}
		const [ showEdit, setShowEdit ] = useState(false)

		const [orderId, setOrderId] = useState('');
		const [name, setName] = useState('');
		const [description, setDescription] = useState('');;
		const [price, setPrice] = useState(0);

		const openEdit = (orderId) => {
			fetch(`https://skygamershub.herokuapp.com/orders/${ orderId }`)
			// fetch(`http://localhost:8000/orders/${ orderId }`)
			.then(res => res.json())
			.then(data => {
				console.log(data)

				setOrderId(data._id)
				setName(data.name)
				setDescription(data.description)
				setPrice(data.price)
			})
			setShowEdit(true)
		}
		const closeEdit = () => {
			setShowEdit(false)
			setName('')
			setDescription('')
			setPrice(0)
		}

		const editOrder = (e, orderId) => {
			e.preventDefault();
			fetch(`https://skygamershub.herokuapp.com/orders/${orderId}`, {
			// fetch(`http://localhost:8000/orders/${orderId}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${localStorage.getItem('accessToken')}`
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
				if(data === true) {
					Swal.fire({
						title: 'Success',
						icon: 'success',
						text: 'Item successfully updated'
					})
					fetchData()
					closeEdit()
				} else
					Swal.fire({
						title: 'Error',
						icon: 'error',
						text: 'Please try again'
					})
					fetchData()
					closeEdit()
			})
		}

	//{}
	return(
		<>
			<Button variant='primary' size="sm" onClick={() => openEdit(order)}>
				Update
			</Button>

			<Modal show={showEdit} onHide={closeEdit}>
				<Form onSubmit={e => editOrder(e, orderId)}>
					<Modal.Header closeButton>
						<Modal.Title>Edit Order</Modal.Title>
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
						<Button variant="secondary" onClick={closeEdit}>Close</Button>
						<Button variant="success" type="submit">Submit</Button>
					</Modal.Footer>

				</Form>
			</Modal>
		</>
		)
}
