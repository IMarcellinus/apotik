// OrderModel.js
import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const OrderModel = db.define("orders", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  product_name: {
    type: DataTypes.STRING(255),
<<<<<<< HEAD
    allowNull: false,
=======
    allowNull: true,
>>>>>>> origin/master
    references: {
      model: 'products',
      key: 'name'
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  },
<<<<<<< HEAD
=======
  image: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
>>>>>>> origin/master
  name: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  status: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  price: {
    type: DataTypes.BIGINT,
<<<<<<< HEAD
    allowNull: false,
=======
    allowNull: true,
>>>>>>> origin/master
  },
  type: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  noresi: {
    type: DataTypes.STRING(255),
<<<<<<< HEAD
    allowNull: false,
=======
    allowNull: true,
>>>>>>> origin/master
  },
  no_hp: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  alamat: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  note: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
}, {
  freezeTableName: true,
  timestamps: true,
  createdAt: "created_at",
  updatedAt: "updated_at"
});

export default OrderModel;
