//dependencies and imports
	import React from 'react'
	import styled from 'styled-components'
	import FacebookIcon from '@mui/icons-material/Facebook';
	import LinkedInIcon from '@mui/icons-material/LinkedIn';
	import GitHubIcon from '@mui/icons-material/GitHub';
	import TwitterIcon from '@mui/icons-material/Twitter';
	import YouTubeIcon from '@mui/icons-material/YouTube';
	import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
	import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
	import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
	import {mobile} from '../responsive'

//styled
	const Left = styled.div`
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 20px;
	`
	const Container = styled.div`
		display: flex;
		${mobile({
			flexDirection: "column"
		})}
	`
	const Logo = styled.h1`
		.
	`

	const Description = styled.p`
		margin: 20px 0px
	`

	const SocialContainer = styled.div`
		display: flex;
	`

	const SocialIcon = styled.div`
		width: 40px;
		height: 40px;
		border-radius: 50%;
		color: white;
		background-color: ${props => props.color};
		display: flex;
		align-items: center;
		justify-content: center;
		margin-right: 20px;
	`

	const Center = styled.div`
		flex: 1;
		padding: 20px;
		${mobile({
			diplay: "none"
		})}
	`

	const Title = styled.h3`
		margin-bottom: 30px;
	`

	const List = styled.ul`
		margin: 0;
		padding: 0;
		list-style: none;
		display: flex;
		flex-wrap: wrap;
	`

	const ListItem = styled.li`
		width: 50%;
		margin-bottom: 10px;
	`

	const Right = styled.div`
		flex: 1;
		padding: 20px;
		${mobile({
			backgroundColor: "#fff8f8"
		})}
	`

	const ContactItem = styled.div`
		margin-bottom: 20px;
		display: flex;
		align-items: center;
	`

	const Payment = styled.img`
		
	`

//function
	const Footer = () => {
		return (
			<Container>
				<Left>
					<Logo>GAMER'S HUB</Logo>
					<Description>
					Your one stop shop for any of your gaming needs
					</Description>
					<SocialContainer>
						<SocialIcon color="#4267B2">
							<FacebookIcon/>
						</SocialIcon>
						<SocialIcon color="#0E76A8">
							<LinkedInIcon/>
						</SocialIcon>
						<SocialIcon color="#171515">
							<GitHubIcon/>
						</SocialIcon>
						<SocialIcon color="#1DA1F2">
							<TwitterIcon/>
						</SocialIcon>
						<SocialIcon color="#FF0000">
							<YouTubeIcon/>
						</SocialIcon>
					</SocialContainer>
				</Left>
				<Center>
					<Title>
						Useful Links
					</Title>
					<List>
						<ListItem>Home</ListItem>
						<ListItem>Products</ListItem>
						<ListItem>PS4</ListItem>
						<ListItem>PS5</ListItem>
						<ListItem>PSVITA</ListItem>
						<ListItem>SWITCH</ListItem>
						<ListItem>XBOX</ListItem>
						<ListItem>Order Tracking</ListItem>
						<ListItem>Wishlist</ListItem>
						<ListItem>Terms</ListItem>
					</List>
				</Center>
				<Right>
					<Title>
						Contact
					</Title>
					<ContactItem>
						<RoomOutlinedIcon style={{marginRight: "10px"}}/> 1st St, Santa Mesa, Manila, Metro Manila
					</ContactItem>
					<ContactItem>
						<PhoneAndroidOutlinedIcon style={{marginRight: "10px"}}/> +63 956 051 3403
					</ContactItem>
					<ContactItem>
						<AlternateEmailOutlinedIcon style={{marginRight: "10px"}}/> josephseankyle@gmail.com
					</ContactItem>
					<Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
				</Right>
			</Container>
		)
	}

	export default Footer