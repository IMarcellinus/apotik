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
      no_hp,
      email,
      alamat,
      note,
    } = req.body;

    let imagePaths = [];

    // If type is 2, process the images and skip product_name check
    if (type == 2) {
      if (!req.files || req.files.length === 0) {
        return res.status(400).json({
          msg: "Images are required for type 2",
          status_code: 400,
        });
      }
      imagePaths = req.files.map((file) => file.path);
    } else {
      // For other types, product_name is required
      if (!product_name) {
        return res.status(400).json({
          msg: "Product name is required",
          status_code: 400,
        });
      }
      // Check if product exists
      const product = await Product.findOne({ where: { name: product_name } });
      if (!product) {
        return res.status(400).json({
          msg: "Product not found",
          status_code: 400,
        });
      }
    }

    // Create the order
    const order = await Order.create({
      product_name: type === 2 ? null : product_name,
      name,
      quantity,
      status: 0,
      price,
      type,
      no_hp,
      email,
      alamat,
      note,
      image: imagePaths.join(","), // Include the image in the product creation
    });

    res.status(201).json({
      msg: "Order created successfully",
      status_code: 201,
      order,
    });
  } catch (error) {
    console.error("Error creating order:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getOrders = async (req, res) => {
  try {
    const { type, id } = req.query;
    let orders;

    // Jika ada query 'id'
    if (id) {
      orders = await Order.findAll({ where: { id } });
      if (orders.length === 0) {
        return res.status(404).json({
          msg: `Order with ID ${id} not found`,
          status_code: 404,
        });
      }

      const order = orders[0].toJSON();
      const { image, ...orderData } = order;
      const imageUrlArray = image.split(',').map(img => `http://localhost:5000/${img}`);
      const orderWithImageUrl = {
        ...orderData,
        imageUrl: imageUrlArray
      };

      return res.status(200).json({
        msg: "Order Details",
        status_code: 200,
        order: orderWithImageUrl,
      });
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
      return res.status(404).json({
        msg: "No orders found",
        status_code: 404,
      });
    }

    const ordersWithImageUrl = orders.map(order => {
      const { image, ...orderData } = order.toJSON();
      const imageUrlArray = image.split(',').map(img => `http://localhost:5000/${img}`);

      return {
        ...orderData,
        imageUrl: imageUrlArray
      };
    });

    res.status(200).json({
      msg: "Orders List",
      status_code: 200,
      orders: ordersWithImageUrl,
    });
  } catch (error) {
    console.error("Error fetching orders:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
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
    const { type, noresi, price } = req.body; // Get type and noresi from request body
    const { id } = req.params; // Get order ID from route parameters

    // Validate the presence of type in the request body
    if (!type) {
      return res.status(400).json({
        msg: "Type is required",
        status_code: 400,
      });
    }

    // Prepare the update object
    let updateData = {};

    // Set status based on type
    if (type == 1) {
      updateData.status = 1;
      updateData.price = price;
    } else if (type == 2 && noresi) {
      updateData.status = 2;
      updateData.noresi = noresi;
    } else if (type == 3) {
      updateData.status = 3;
    } else if (type == 2 && !noresi) {
      return res.status(400).json({
        msg: "noresi is required for type 2",
        status_code: 400,
      });
    }

    // Update the order with the new status (and noresi if applicable)
    const [updatedRows] = await Order.update(updateData, {
      where: { id }, // Filter the order by ID
    });

    // Check if any order was updated
    if (updatedRows === 0) {
      return res.status(404).json({
        msg: "Order not found",
        status_code: 404,
      });
    }

    // Get the updated order
    const updatedOrder = await Order.findByPk(id);

    res.status(200).json({
      msg: "Order updated successfully",
      status_code: 200,
      order: updatedOrder,
    });
  } catch (error) {
    console.error("Error updating order:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
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

