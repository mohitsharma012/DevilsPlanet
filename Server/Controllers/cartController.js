import cartModel from "../Models/cartModel.js";

// Function to add a product to the cart
const addToCart = async (req, res) => {
  try {
    const userId = req.user.id;
    const { productId, size, qty } = req.body;
    const cart = await cartModel.findOne({ userId });

    if (cart) {
      // If the cart already exists for the user
      const product = cart.cartItems.find(
        (item) => item.productId == productId && item.size == size
      );

      if (product) {
        // If the product already exists and same size in the cart then update the quantity
        product.qty += qty;
      } else {
        // If the product with a different size or new product does not exist in the cart
        cart.cartItems.push({ productId, size, qty });
      }

      await cart.save();
      return res.json({ success: true, message: "Cart updated successfully" });
    } else {
      // If the cart does not exist for the user
      const newCart = new cartModel({
        userId,
        cartItems: [{ productId, size, qty }],
      });

      await newCart.save();
      return res.json({ success: true, message: "Cart created successfully" });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
};


//Function to Get all items in the cart
const getCart = async (req, res) => {
  try {
    const userId = req.user.id;
    const cart = await cartModel.findOne({ userId });
    if (cart) {
      return res.json(cart);
    } else {
      return res.json({ message: "Cart is empty" });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
};

// Function to remove an item from the cart
const removeFromCart = async (req, res) => {
  try {
    const userId = req.user.id;
    const { id } = req.params;

    const cart = await cartModel.findOne({ userId });
    if (cart) {
      const index = cart.cartItems.findIndex((item) => item._id == id);
      if (index === -1) {
        return res.json({ message: "Item not found in cart" });
      }
      cart.cartItems.splice(index, 1);
      await cart.save();
      return res.json({ message: "Item removed from cart" });
      
    } else {
      return res.json({ message: "Cart is empty" });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
};

export { addToCart, getCart, removeFromCart };
