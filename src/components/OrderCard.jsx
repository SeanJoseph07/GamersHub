//Imports
import { useState, useEffect, useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Navigate, useNavigate, Link } from 'react-router-dom';
import UserContext from '../UserContext';

//Function
export default function OrderCard({orderProp}) {
	debugger;
	const { _id, userId, products } = orderProp;

	const { user } = useContext(UserContext);



	return(
	<Card className="my-4" >
		<Card.Body>
			<Card.Title> { _id } </Card.Title>

			<Card.Subtitle>User:</Card.Subtitle>
			<Card.Text> { userId } </Card.Text>

			<Card.Subtitle>Products:</Card.Subtitle>
			<Card.Text>${ products } </Card.Text>

		</Card.Body>
	</Card>
	)
}

OrderCard.propTypes = {
	orderProp: PropTypes.shape({
		_id: PropTypes.string.isRequired,
		userId: PropTypes.string.isRequired,
		products: PropTypes.array.isRequired
	})
}