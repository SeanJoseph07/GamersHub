//Imports
	import { React, useContext, useEffect, useState } from 'react'
	import styled from 'styled-components'
	import Footer from '../components/Footer'
	import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
	import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
	import {mobile} from '../responsive'
	import UserContext from '../UserContext';
	import { Link, Navigate, useNavigate } from 'react-router-dom';

//Styled
	const Container = styled.div`
		
	`

	const Wrapper = styled.div`
		padding: 20px;
		${mobile({
			padding: "10px"
		})}
	`
	
	const Title = styled.h1`
		font-weight: 300;
		text-align: center;
	`
	
	const Top = styled.div`
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 20px;
	`
	
	const TopButton = styled.button`
		padding: 10px;
		font-weight: 600;
		cursor: pointer;
		border: ${props => props.type === "filled" && "none"};
		background-color: ${props => props.type === "filled" ? "black" : "transparent"};
		color: ${props => props.type === "filled" && "white"};
	`

	const TopTexts = styled.div`
		${mobile({
			display: "none"
		})}
	`

	const TopText = styled.span`
		text-decoration: underline;
		cursor: pointer;
		margin: 0px 10px;

	`
	/*&:hover{
		text-decoration: underline;
	}*/

	
	const Bottom = styled.div`
		display: flex;
		justify-content: space-between;
		${mobile({
			flexDirection: "column"
		})}
	`
	
	const Info = styled.div`
		flex: 3
	`

	const Product = styled.div`
		display: flex;
		justify-content: space-between;
		${mobile({
			flexDirection: "column"
		})}
	`

	const ProductDetail = styled.div`
		flex: 2;
		display: flex;
	`

	const Image = styled.img`
		width: 200px;
	`

	const Details = styled.div`
		padding: 20px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	`

	const ProductName = styled.span`
		
	`

	const ProductId = styled.span`
		
	`

	const ProductColor = styled.span`
		width: 20px;
		height: 20px;
		border-radius: 50%;
		background-color: ${(props) => props.color};
	`

	const ProductSize = styled.span`
		
	`

	const PriceDetail = styled.div`
	  flex: 1;
	  display: flex;
	  flex-direction: column;
	  align-items: center;
	  justify-content: center;
	`;

	const ProductAmountContainer = styled.div`
	  display: flex;
	  align-items: center;
	  margin-bottom: 20px;
	`;

	const ProductAmount = styled.div`
	  font-size: 24px;
	  margin: 5px;
	  ${mobile({
			flexDirection: "column"
		})}
	`;

	const ProductPrice = styled.div`
	  font-size: 30px;
	  font-weight: 200;
	  ${mobile({
			marginBottom: "20px"
		})}
	`;

	const Hr = styled.hr`
	  background-color: #eee;
	  border: none;
	  height: 1px;
	`;

	const Summary = styled.div`
	  flex: 1;
	  border: 0.5px solid lightgray;
	  border-radius: 10px;
	  padding: 20px;
	  height: 50vh;
	`;

	const SummaryTitle = styled.h1`
	  font-weight: 200;
	`;

	const SummaryItem = styled.div`
	  margin: 30px 0px;
	  display: flex;
	  justify-content: space-between;
	  font-weight: ${(props) => props.type === "total" && "500"};
	  font-size: ${(props) => props.type === "total" && "24px"};
	`;

	const SummaryItemText = styled.span``;

	const SummaryItemPrice = styled.span``;

	const SummaryButton = styled.button`
	  width: 100%;
	  padding: 10px;
	  background-color: black;
	  color: white;
	  font-weight: 600;
	`;
 
//Function
const Cart = () => {

	const { user } = useContext(UserContext);

	return (

		(user.accessToken !== null) ? 

		<Navigate to="/home" />

		:

		<Container>
			<Wrapper>
				<Title>YOUR BAG</Title>
				<Top>
					<TopButton >CONTINUE SHOPPING</TopButton>
					<TopTexts>
						{/*<TopText>Shopping Bag(2)</TopText>
						<TopText>Your Wishlist(0)</TopText>*/}
					</TopTexts>
					<TopButton type="filled">CHECKOUT!</TopButton>
				</Top>
				<Bottom>
					<Info>
						<Product>
							<ProductDetail>
								<Image src="https://img.freepik.com/free-vector/vintage-badge-hand-holding-joystick-vector-illustration-round-label-with-gamepad_74855-11224.jpg?size=338&ext=jpg&ga=GA1.2.1257493612.1654058438"/>
								<Details>
									<ProductName>
										<strong>Product: </strong>Sample Name
									</ProductName>
									<ProductId>
										<strong>Id: </strong>Sample Id
									</ProductId>
									<ProductColor color="black"/>
									<ProductSize>
										<strong>Size: </strong>Sample Size
									</ProductSize>
								</Details>
							</ProductDetail>
							<PriceDetail>
								<ProductAmountContainer>
									<AddCircleOutlineOutlinedIcon/>
									<ProductAmount>2</ProductAmount>
									<RemoveCircleOutlineOutlinedIcon/>
								</ProductAmountContainer>
								<ProductPrice>$ 30</ProductPrice>
							</PriceDetail>
						</Product>
						<Hr/>
						<Product>
							<ProductDetail>
								<Image src="https://img.freepik.com/free-vector/vintage-badge-hand-holding-joystick-vector-illustration-round-label-with-gamepad_74855-11224.jpg?size=338&ext=jpg&ga=GA1.2.1257493612.1654058438"/>
								<Details>
									<ProductName>
										<strong>Product: </strong>Sample Name
									</ProductName>
									<ProductId>
										<strong>Id: </strong>Sample Id
									</ProductId>
									<ProductColor color="black"/>
									<ProductSize>
										<strong>Size: </strong>Sample Size
									</ProductSize>
								</Details>
							</ProductDetail>
							<PriceDetail>
								<ProductAmountContainer>
									<AddCircleOutlineOutlinedIcon/>
									<ProductAmount>2</ProductAmount>
									<RemoveCircleOutlineOutlinedIcon/>
								</ProductAmountContainer>
								<ProductPrice>$ 30</ProductPrice>
							</PriceDetail>
						</Product>
					</Info>
					<Summary>
						<SummaryTitle>ORDER SUMMARY</SummaryTitle>
						<SummaryItem>
							<SummaryItemText>Subtotal</SummaryItemText>
							<SummaryItemPrice>$ 80</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem>
							<SummaryItemText>Estimated Shipping</SummaryItemText>
							<SummaryItemPrice>$ 5.90</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem>
							<SummaryItemText>Shipping Discount</SummaryItemText>
							<SummaryItemPrice>$ -5.90</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem>
							<SummaryItemText>Total</SummaryItemText>
							<SummaryItemPrice type="total">$ 80</SummaryItemPrice>
						</SummaryItem>
						<SummaryButton>CHECKOUT NOW!</SummaryButton>
					</Summary>
				</Bottom>
			</Wrapper>
			<Footer/>
		</Container>
	)
}

export default Cart