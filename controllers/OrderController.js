import { Sequelize } from "sequelize";
import Order from "../models/OrderModel.js";
import Product from "../models/ProductModel.js";

export const createOrder = async (req, res) => {
  try {
    const {
      product_name,
      name,
      quantity,
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

    // Create the order
    const order = await Order.create({
      product_name,
      name,
      quantity,
      status: 0,
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
    const { type, id } = req.query;
    let orders;

    // Jika ada query 'id'
    if (id) {
      orders = await Order.findAll({ where: { id } });
    }
    // Jika ada query 'type'
    else if (type) {
      // type 0 -> get all orders
      if (type === '0') {
        orders = await Order.findAll();
      }
      // type 1 -> tampilkan type 1
      else if (type === '1') {
        orders = await Order.findAll({ where: { type: 1 } });
      }
      // type 2 -> tampilkan type 2
      else if (type === '2') {
        orders = await Order.findAll({ where: { type: 2 } });
      }
      // Jika nilai type tidak valid
      else {
        return res.status(400).json({
          msg: "Invalid type value",
          status_code: 400,
        });
      }
    }
    // Jika tidak ada query, tampilkan semua orders
    else {
      orders = await Order.findAll();
    }

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

export const updateOrder = async (req, res) => {
  try {
    const { type, noresi } = req.body; // Mendapatkan nilai type dan noresi dari body request
    const { id } = req.params; // Mendapatkan id pesanan dari parameter route

    // Periksa apakah ada nilai type dan noresi yang diberikan
    if (!type || !noresi) {
      return res.status(400).json({
        msg: "Type and noresi are required",
        status_code: 400,
      });
    }

    // Perbarui pesanan untuk kolom type dan noresi
    const [updatedRows] = await Order.update({ type, noresi }, {
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
      msg: "Order type and noresi updated successfully",
      status_code: 200,
      order: updatedOrder,
    });
  } catch (error) {
    console.error("Error updating order type and noresi:", error.message);
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

