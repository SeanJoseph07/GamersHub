import { useState, useEffect, useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Navigate, useNavigate, Link } from 'react-router-dom';
import UserContext from '../UserContext';

export default function ProductCard({productProp}) {

	const { _id, name, description, price } = productProp;

	const { user } = useContext(UserContext);

	return(
	<Card className="my-4" >
		<Card.Body>
			<Card.Title> { name } </Card.Title>

			<Card.Subtitle>Description:</Card.Subtitle>
			<Card.Text> { description } </Card.Text>

			<Card.Subtitle>Price:</Card.Subtitle>
			<Card.Text>Php  { price } </Card.Text>

			{(user.accessToken !== null) ? 
			<Button variant="primary" as={ Link } to={`/products/${_id}`}>Details</Button>
			:
			<>
				<Button variant="primary" disabled>Details</Button>
				<Button variant='secondary' as={Link} to="/login">Login to make a purchase</Button>
			</>
			}
		</Card.Body>
	</Card>
	)
}

ProductCard.propTypes = {
	//shape method is used to check if a prop object has the same specific shape of data types
	productProp: PropTypes.shape({
		//Define the properties and their expected types
		name: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired
	})
}