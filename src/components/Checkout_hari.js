import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Container, Button, Form as BootstrapForm } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const checkoutSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name is too short')
    .required('Name is required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required'),
  address: Yup.string()
    .min(10, 'Address is too short')
    .required('Address is required'),
});

const Checkout_hari = ({ cartItems, clearCart }) => {
  const navigate = useNavigate();

  const handleSubmit = (values, { setSubmitting }) => {
    // Simulate order submission
    setTimeout(() => {
      setSubmitting(false);
      clearCart();
      navigate('/confirmation', { 
        state: { 
          orderDetails: {
            ...values,
            items: cartItems,
            total: cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
          }
        }
      });
    }, 1000);
  };

  return (
    <Container className="mt-4">
      <h2>Checkout</h2>
      <Formik
        initialValues={{
          name: '',
          email: '',
          address: ''
        }}
        validationSchema={checkoutSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form>
            <BootstrapForm.Group className="mb-3">
              <BootstrapForm.Label>Name</BootstrapForm.Label>
              <Field
                name="name"
                as={BootstrapForm.Control}
                isInvalid={touched.name && errors.name}
              />
              {touched.name && errors.name && (
                <BootstrapForm.Control.Feedback type="invalid">
                  {errors.name}
                </BootstrapForm.Control.Feedback>
              )}
            </BootstrapForm.Group>

            <BootstrapForm.Group className="mb-3">
              <BootstrapForm.Label>Email</BootstrapForm.Label>
              <Field
                name="email"
                type="email"
                as={BootstrapForm.Control}
                isInvalid={touched.email && errors.email}
              />
              {touched.email && errors.email && (
                <BootstrapForm.Control.Feedback type="invalid">
                  {errors.email}
                </BootstrapForm.Control.Feedback>
              )}
            </BootstrapForm.Group>

            <BootstrapForm.Group className="mb-3">
              <BootstrapForm.Label>Address</BootstrapForm.Label>
              <Field
                name="address"
                as={BootstrapForm.Control}
                component="textarea"
                rows={3}
                isInvalid={touched.address && errors.address}
              />
              {touched.address && errors.address && (
                <BootstrapForm.Control.Feedback type="invalid">
                  {errors.address}
                </BootstrapForm.Control.Feedback>
              )}
            </BootstrapForm.Group>

            <Button 
              type="submit" 
              disabled={isSubmitting || cartItems.length === 0}
            >
              {isSubmitting ? 'Placing Order...' : 'Place Order'}
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default Checkout_hari;
