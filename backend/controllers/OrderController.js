import { Sequelize } from "sequelize";
import Order from "../models/OrderModel.js";
import Product from "../models/ProductModel.js";

export const createOrder = async (req, res) => {
  try {
    const {
      product_name,
      name,
      quantity,
<<<<<<< HEAD
      status,
      price,
      type,
      noresi,
=======
      price,
      type,
>>>>>>> origin/master
      no_hp,
      email,
      alamat,
      note,
    } = req.body;

<<<<<<< HEAD
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
=======
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
>>>>>>> origin/master
      no_hp,
      email,
      alamat,
      note,
<<<<<<< HEAD
=======
      image: imagePaths.join(","), // Include the image in the product creation
>>>>>>> origin/master
    });

    res.status(201).json({
      msg: "Order created successfully",
      status_code: 201,
      order,
    });
  } catch (error) {
    console.error("Error creating order:", error.message);
<<<<<<< HEAD
    res.status(500).json({ message: "Internal Server Error" });
  }
=======
    res.status(500).json({ message: "Internal Server Error" });
  }
>>>>>>> origin/master
};

export const getOrders = async (req, res) => {
  try {
<<<<<<< HEAD
    const orders = await Order.findAll();

    if (orders.length === 0) {
      return res.status(400).json({
        msg: "No orders found",
        status_code: 400,
      });
    }
=======
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
>>>>>>> origin/master

    res.status(200).json({
      msg: "Orders List",
      status_code: 200,
<<<<<<< HEAD
      orders,
    });
  } catch (error) {
    console.error("Error fetching orders:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
=======
      orders: ordersWithImageUrl,
    });
  } catch (error) {
    console.error("Error fetching orders:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
>>>>>>> origin/master
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

<<<<<<< HEAD
export const updateOrderType = async (req, res) => {
  try {
    const { type } = req.body; // Mendapatkan nilai type dari body request
    const { id } = req.params; // Mendapatkan id pesanan dari parameter route

    // Periksa apakah ada nilai type yang diberikan
=======
export const updateOrder = async (req, res) => {
  try {
    const { type, noresi, price } = req.body; // Get type and noresi from request body
    const { id } = req.params; // Get order ID from route parameters

    // Validate the presence of type in the request body
>>>>>>> origin/master
    if (!type) {
      return res.status(400).json({
        msg: "Type is required",
        status_code: 400,
      });
    }

<<<<<<< HEAD
    // Perbarui pesanan hanya untuk kolom type
    const [updatedRows] = await Order.update({ type }, {
      where: { id }, // Filter pesanan berdasarkan id
    });

    // Periksa apakah ada pesanan yang diperbarui
=======
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
>>>>>>> origin/master
    if (updatedRows === 0) {
      return res.status(404).json({
        msg: "Order not found",
        status_code: 404,
      });
    }

<<<<<<< HEAD
    // Dapatkan pesanan yang diperbarui
    const updatedOrder = await Order.findByPk(id);

    res.status(200).json({
      msg: "Order type updated successfully",
=======
    // Get the updated order
    const updatedOrder = await Order.findByPk(id);

    res.status(200).json({
      msg: "Order updated successfully",
>>>>>>> origin/master
      status_code: 200,
      order: updatedOrder,
    });
  } catch (error) {
<<<<<<< HEAD
    console.error("Error updating order type:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

=======
    console.error("Error updating order:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};



>>>>>>> origin/master
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

