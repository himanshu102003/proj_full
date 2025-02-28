# ShopEase Mini E-Commerce Cart System

A simple shopping cart system built with React & NodeJS that allows users to browse products, manage their cart, and complete checkout.

## Features

- View products fetched from backend API
- Add products to cart
- Update product quantities
- Remove items from cart
- Dynamic total price calculation
- Checkout form with validation
- Order confirmation
- Protected checkout route

## Tech Stack

- Frontend: React, React Router, React Bootstrap, Formik, Yup
- Backend: Node.js, Express
- State Management: React Hooks (useState)
- Form Validation: Formik with Yup
- Styling: Bootstrap

## Setup Instructions

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the backend server:
   ```bash
   npm run server
   ```

3. Start the React development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view the application

## Project Structure

- `/src/components/` - React components
  - `Cart_hari.js` - Shopping cart management
  - `ProductList_hari.js` - Displays available products
  - `Checkout_hari.js` - Checkout form with validation
  - `OrderConfirmation_hari.js` - Order confirmation page
- `/server/` - Backend API
  - `server.js` - Express server with product endpoints

## API Endpoints

- GET `/api/products` - Fetch all available products

## Author

[Himanshu]

## License

MIT
