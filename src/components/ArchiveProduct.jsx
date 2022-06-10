import { Button } from 'react-bootstrap';
import Swal from 'sweetalert2';

export default function ArchiveProduc({product, isActive, fetchData}) {

	const archiveToggle = (productId) => {
		// fetch(`https://passion-inside.herokuapp.com/products/${productId}/archive`, {
		fetch(`http://localhost:8000/products/${productId}/archive`, {
			method: 'PUT',
			headers: {
				Authorization: `Bearer ${localStorage.getItem('accessToken')}`
			}
		})
		.then(res => res.json())
		.then(data => {
			if(data === true) {
				Swal.fire({
					title: "Success",
					icon: "success",
					text: "Item successfully disabled"
				})
				fetchData()
			} else {
				Swal.fire({
					title: "Error",
					icon: "error",
					text: "Something went wrong"
				})
			}
		})
	}

	//for activating the course
	const activateToggle = (productId) => {
		// fetch(`https://passion-inside.herokuapp.com/products/${productId}/activate`, {
		fetch(`http://localhost:8000/products/${productId}/activate`, {
			method: 'PUT',
			headers: {
				Authorization: `Bearer ${localStorage.getItem('accessToken')}`
			}
		})
		.then(res => res.json())
		.then(data => {
			if(data === true) {
				Swal.fire({
					title: "Success",
					icon: "success",
					text: "Item successfully enabled"
				})
				fetchData()
			} else {
				Swal.fire({
					title: "Error",
					icon: "error",
					text: "Something went wrong"
				})
			}
		})
	}

	return (
		<>
			{isActive ?
				<Button variant="danger" size="sm" onClick={() => archiveToggle(product)}>Disable</Button>
				:
				<Button variant="success" size="sm" onClick={() => activateToggle(product)}>Enable</Button>

			}
			
		</>
		)
}
