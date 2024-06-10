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

    if (
        !name ||
        !product_name ||
        !quantity ||
        !status ||
        !price ||
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

export const updateOrderType = async (req, res) => {
  try {
    const { type } = req.body; // Mendapatkan nilai type dari body request
    const { id } = req.params; // Mendapatkan id pesanan dari parameter route

    // Periksa apakah ada nilai type yang diberikan
    if (!type) {
      return res.status(400).json({
        msg: "Type is required",
        status_code: 400,
      });
    }

    // Perbarui pesanan hanya untuk kolom type
    const [updatedRows] = await Order.update({ type }, {
      where: { id }, // Filter pesanan berdasarkan id
    });

    // Periksa apakah ada pesanan yang diperbarui
    if (updatedRows === 0) {
      return res.status(404).json({
        msg: "Order not found",
        status_code: 404,
      });
    }

    // Dapatkan pesanan yang diperbarui
    const updatedOrder = await Order.findByPk(id);

    res.status(200).json({
      msg: "Order type updated successfully",
      status_code: 200,
      order: updatedOrder,
    });
  } catch (error) {
    console.error("Error updating order type:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getOrdersByType = async (req, res) => {
  try {
    const { type } = req.params; // Dapatkan nilai tipe dari parameter rute
    const orders = await Order.findAll({ where: { type: {
      [Sequelize.Op.like]: `%${type}%`
    } } }); // Cari pesanan berdasarkan tipe

    if (orders.length === 0) {
      return res.status(404).json({
        msg: "No orders found for the specified type",
        status_code: 404,
      });
    }

    res.status(200).json({
      msg: `Orders with type ${type}`,
      status_code: 200,
      orders,
    });
  } catch (error) {
    console.error("Error fetching orders by type:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

