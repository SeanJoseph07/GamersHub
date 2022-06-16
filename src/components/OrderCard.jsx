//Imports
import { useState, useEffect, useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Navigate, useNavigate, Link } from 'react-router-dom';
import UserContext from '../UserContext';

//Function
export default function OrderCard({orderProp}) {

	const { _id, name, description, price } = orderProp;

	const { user } = useContext(UserContext);



	return(
	<Card className="my-4" >
		<Card.Body>
			<Card.Title> { name } </Card.Title>

			<Card.Subtitle>Description:</Card.Subtitle>
			<Card.Text> { description } </Card.Text>

			<Card.Subtitle>Price:</Card.Subtitle>
			<Card.Text>${ price } </Card.Text>

			{(user.accessToken !== null) ? 
			<Button variant="primary" as={ Link } to={`/orders/${_id}`}>Details</Button>
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

OrderCard.propTypes = {
	//shape method is used to check if a prop object has the same specific shape of data types
	orderProp: PropTypes.shape({
		//Define the properties and their expected types
		name: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired
	})
}