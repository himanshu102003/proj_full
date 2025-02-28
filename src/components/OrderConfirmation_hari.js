import React from 'react';
import { Container, Card } from 'react-bootstrap';
import { useLocation, Navigate } from 'react-router-dom';

const OrderConfirmation_hari = () => {
  const location = useLocation();
  
  if (!location.state?.orderDetails) {
    return <Navigate to="/" replace />;
  }

  const { orderDetails } = location.state;

  return (
    <Container className="mt-4">
      <Card>
        <Card.Header as="h2">Order Confirmation</Card.Header>
        <Card.Body>
          <Card.Title>Thank you for your order, {orderDetails.name}!</Card.Title>
          <Card.Text>
            Your order has been received and will be processed shortly.
            <br />
            Order details have been sent to: {orderDetails.email}
          </Card.Text>
          
          <h5>Order Summary:</h5>
          <ul>
            {orderDetails.items.map(item => (
              <li key={item.id}>
                {item.name} x {item.quantity} - ${(item.price * item.quantity).toFixed(2)}
              </li>
            ))}
          </ul>
          
          <h5>Total: ${orderDetails.total.toFixed(2)}</h5>
          
          <h5>Shipping Address:</h5>
          <p>{orderDetails.address}</p>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default OrderConfirmation_hari;
