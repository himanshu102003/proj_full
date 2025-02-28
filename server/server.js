const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Sample product data
const products = [
  {
    id: 1,
    name: "Laptop Pro X",
    price: 999.99,
    description: "High-performance laptop for professionals",
    image: "https://via.placeholder.com/300x200"
  },
  {
    id: 2,
    name: "Smartphone Y",
    price: 499.99,
    description: "Latest smartphone with advanced features",
    image: "https://via.placeholder.com/300x200"
  },
  {
    id: 3,
    name: "Wireless Headphones",
    price: 149.99,
    description: "Premium wireless headphones with noise cancellation",
    image: "https://via.placeholder.com/300x200"
  }
];

// GET products endpoint
app.get('/api/products', (req, res) => {
  res.json(products);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
