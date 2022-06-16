//Imports
	import { Link } from 'react-router-dom';
	import styled from 'styled-components';
	import {mobile} from '../responsive';

//Styled
	const Container = styled.div`
		${mobile({
			height: "50px"
		})}
	`;

	const Wrapper = styled.div`
		padding: 10px 20px;
		display: flex;
		justify-content: space-between;
		${mobile({
			padding: "10px 0px",
			flexDirection: "column"
		})}
	`;

	const Image = styled.img`
		
	`;

	const h1 = styled.h1`
		display: flex;
		align-items: center;
		text-align: center;
		justify-content: center;
	`;

//Function
export default function Banner(props) {
	/*return (
		<Row>
			<Col className="p-5">

				<Image variant="top" src="https://img.freepik.com/free-vector/vintage-badge-hand-holding-joystick-vector-illustration-round-label-with-gamepad_74855-11224.jpg?size=338&ext=jpg&ga=GA1.2.1257493612.1654058438" />
				<h1 className="mb-3">Gamer's Hub</h1>
				<p className="mb-3">Your Total Gaming Store</p>
				<Button variant="primary" as={Link} to="/products">Get your games!</Button>
			</Col>
		</Row>
		)
}
*/

return (
			<Container>
				<Wrapper>
					<Image src="https://img.freepik.com/free-vector/vintage-badge-hand-holding-joystick-vector-illustration-round-label-with-gamepad_74855-11224.jpg?size=338&ext=jpg&ga=GA1.2.1257493612.1654058438" />
					<h1>Your Total Gaming Store</h1>
				</Wrapper>
			</Container>
		)
	}