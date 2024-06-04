import Product from "../models/ProductModel.js";

export const getProducts = async (req, res) => {
    try {
      const products = await Product.findAll();
  
      if (products.length === 0) {
        return res.status(400).json({
          msg: "No products found",
          status_code: 400,
        });
      }
  
      res.status(200).json({
        msg: "products List",
        status_code: 200,
        products: products,
      });
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: "Internal Server Error" });
    }
  };