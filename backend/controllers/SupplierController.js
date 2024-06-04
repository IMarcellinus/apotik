import User from "../models/SupplierModel.js";

export const getSuppliers = async (req, res) => {
    try {
        const suppliers = await User.findAll();

        if (suppliers.length === 0) {
            return res.status(400).json({
                msg: "No suppliers found",
                status_code: 400,
            });
        }

        res.status(200).json({
            msg: "User List",
            status_code: 200,
            supplier: suppliers,
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};


