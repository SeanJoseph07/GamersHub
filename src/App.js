//Imports
  import { useState } from 'react';
  import './App.css';
  import 'bootstrap/dist/css/bootstrap.min.css';
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
  import History from './pages/History'
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
              <Route path="/history" element={ <History /> } />
              <Route path="/checkout" element={ <Checkout /> } />
              <Route path="/cart" element={ <Cart /> } />
              <Route path="*" element={ <NotFound /> } />
            </Routes>
          </Container>
          <Footer/>
        </BrowserRouter>
      </UserProvider>
    );
  };