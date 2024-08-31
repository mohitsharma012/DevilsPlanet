import productModel from "../Models/productsModel.js";

// Function to get all products
const getAllProducts = async (req, res) => {
  try {
    const products = await productModel.find({});
    res.status(200).json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Function to get products by category
const getProductsByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const products = await productModel.find({ category: category });

    if (products.length === 0) {
      return res.status(404).json({ message: "No products found" });
    }

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Function to create a new product
const createProduct = async (req, res) => {
  try {
    const { name, category, description, price, image, countInStock } =
      req.body;

    const product = new productModel({
      name,
      category,
      description,
      price,
      image,
      countInStock,
    });

    await product.save();
    res
      .status(200)
      .json({ success: true, message: "Product added successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
};

// Get Specific Product Details by ID
const getProductById = async (req, res) => {
  try {
    const product = await productModel.findById(req.params.id);

    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
};




export { getAllProducts, getProductsByCategory, createProduct, getProductById };
