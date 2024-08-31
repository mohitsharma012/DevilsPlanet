import orderModel from "../models/ordersModel.js";

export const createOrder = async (req, res) => {
    try {
        const userId = req.body.id;

        const {
            orderItems,
            shippingAddress,
            paymentMethod,
            totalPrice,
        } = req.body;

        if (orderItems && orderItems.length === 0) {
            return res.status(400).json({ message: "No order items" });
        }

        const order = new orderModel({
            userId, 
            orderItems,
            shippingAddress,
            paymentMethod,
            totalPrice,
        });

        const createdOrder = await order.save();

        res.status(201).json(createdOrder);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error, unable to create order" });
    }
};

export default createOrder;
