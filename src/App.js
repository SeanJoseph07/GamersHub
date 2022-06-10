//Imports
  import { useState } from 'react';
  import './App.css';
  import AppNavbar from './components/AppNavbar';
  import Home from './pages/Home';
  import ProductPage from './pages/ProductPage';
  import Register from './pages/Register'
  import Login from './pages/Login'
  import Logout from './pages/Logout'
  import SpecificProduct from './pages/SpecificProduct'
  import NotFound from './pages/NotFound';
  import Footer from './components/Footer';
  import { Container } from 'react-bootstrap';
  import { UserProvider } from './UserContext';
  import Cart from './pages/Cart'
  import Checkout from './pages/Checkout'
  import { BrowserRouter, Routes, Route } from 'react-router-dom';

//function
  export default function App() {

    const [ user, setUser ] = useState({
      accessToken: localStorage.getItem('accessToken'),
      isAdmin: localStorage.getItem('isAdmin') === 'true'
    })

    const unsetUser = () => {
      localStorage.clear()
    }

    return (
      <UserProvider value = {{ user, setUser, unsetUser }}>
        <BrowserRouter>
          <AppNavbar />
          <Container>
            <Routes>
              <Route path="/" element={ <Home /> } />
              <Route path="/products" element={ <ProductPage /> } />
              <Route path="/register" element={ <Register /> } />
              <Route path="/login" element={ <Login /> } />
              <Route path="/logout" element={ <Logout /> } />
              <Route path="/products/:productId" element={ <SpecificProduct /> } />
              <Route path="*" element={ <NotFound /> } />
              <Route path="/cart" element={ <Cart /> } />
              <Route path="/checkout" element={ <Checkout /> } />
            </Routes>
          </Container>
          <Footer/>
        </BrowserRouter>
      </UserProvider>
    );
  };