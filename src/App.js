import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import ProductList_venkat from './components/ProductList_venkat';
import Cart_venkat from './components/Cart_venkat';
import Checkout_venkat from './components/Checkout_venkat';
import OrderConfirmation_venkat from './components/OrderConfirmation_venkat';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <Router>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">ShopEase</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Products</Nav.Link>
              <Nav.Link href="/cart">
                Cart ({cartItems.reduce((sum, item) => sum + item.quantity, 0)})
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<ProductList_venkat addToCart={addToCart} />} />
        <Route
          path="/cart"
          element={
            <Cart_venkat
              cartItems={cartItems}
              updateQuantity={updateQuantity}
              removeFromCart={removeFromCart}
            />
          }
        />
        <Route
          path="/checkout"
          element={
            cartItems.length > 0 ? (
              <Checkout_venkat cartItems={cartItems} clearCart={clearCart} />
            ) : (
              <Navigate to="/cart" replace />
            )
          }
        />
        <Route path="/confirmation" element={<OrderConfirmation_venkat />} />
      </Routes>
    </Router>
  );
}

export default App;
