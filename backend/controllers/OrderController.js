import { Sequelize } from "sequelize";
import Order from "../models/OrderModel.js";
import Product from "../models/ProductModel.js";

export const createOrder = async (req, res) => {
  try {
    const {
      product_name,
      name,
      quantity,
      status,
      price,
      type,
      noresi,
      no_hp,
      email,
      alamat,
      note,
    } = req.body;

    // Check if product exists
    const product = await Product.findOne({ where: { name: product_name } });
    if (!product) {
      return res.status(400).json({
        msg: "Product not found",
        status_code: 400,
      });
    }

    // Collect image paths from the uploaded files
    const imagePaths = req.files.map((file) => file.path);

    if (
        !name ||
        !product_name ||
        !quantity ||
        !status ||
        !price ||
        imagePaths.length === 0 ||
        !type ||
        !noresi ||
        !no_hp ||
        !email ||
        !alamat ||
        !note 
      ) {
        return res.status(400).json({
          msg: "All fields are required",
          status_code: 400,
        });
      }

    // Create the order
    const order = await Order.create({
      product_name,
      name,
      quantity,
      status,
      price,
      image: imagePaths.join(","),
      type,
      noresi,
      no_hp,
      email,
      alamat,
      note,
    });

    res.status(201).json({
      msg: "Order created successfully",
      status_code: 201,
      order,
    });
  } catch (error) {
    console.error("Error creating order:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getOrders = async (req, res) => {
  try {
    const orders = await Order.findAll();

    if (orders.length === 0) {
      return res.status(400).json({
        msg: "No orders found",
        status_code: 400,
      });
    }

    res.status(200).json({
      msg: "Orders List",
      status_code: 200,
      orders,
    });
  } catch (error) {
    console.error("Error fetching orders:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getOrderById = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Order.findByPk(id);

    if (!order) {
      return res.status(404).json({
        msg: "Order not found",
        status_code: 404,
      });
    }

    res.status(200).json({
      msg: "Order details",
      status_code: 200,
      order,
    });
  } catch (error) {
    console.error("Error fetching order by id:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
