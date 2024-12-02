const express = require('express');
const dotenv = require('dotenv');
const {connectDB} = require('./db/config')
const shippingRoutes = require('./routes/shippingRoutes')

dotenv.config();

const app = express();
app.use(express.json());

app.use("/api/shipping",shippingRoutes)

// Start the server
const PORT = process.env.PORT || 3000;

connectDB().then(
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  })
)

 
module.exports = app;