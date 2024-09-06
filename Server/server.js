import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// Database connection
import connectDB from "./Config/db.js";

// Routes Import
import isAuthorized from "./Middleware/isAuthorized.js";
import ProductRouter from "./Routes/ProductRoute.js";
import userRoute from "./Routes/userRoute.js";
import cartRoute from "./Routes/cartRoute.js";

const app = express();
dotenv.config();

// Allow all origins
app.use(cors());

// or for more control
const corsOptions = {
  origin: '*', // Allow all origins
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // If you need to allow credentials (cookies, etc.)
};
app.use(cors(corsOptions));



// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// database connection
connectDB();

// api endpoints
app.use("/api/product", ProductRouter);
app.use("/api/user", userRoute);
app.use("/api/cart", isAuthorized, cartRoute);

app.get("/", (req, res) => {
  res.send("Server is working");
});

app.listen(process.env.PORT, () => {
  console.log("Server is running on", process.env.URL + process.env.PORT);
});
