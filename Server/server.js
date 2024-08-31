import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Database connection
import connectDB from './Config/db.js';

// Routes Import
import isAuthorized from './Middleware/isAuthorized.js';
import ProductRouter from './Routes/ProductRoute.js';
import userRoute from './Routes/userRoute.js';
import cartRoute from './Routes/cartRoute.js';

const app = express();                  
dotenv.config();


// middlewares
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }));

// database connection
connectDB();

// api endpoints
app.use('/api/product', ProductRouter);
app.use('/api/user', userRoute);
app.use('/api/cart', isAuthorized ,cartRoute);







app.get('/', (req, res) => {
  res.send('Server is working');
});

app.listen(3000, () => {
  console.log('Server is running on', process.env.URL + process.env.PORT);
});