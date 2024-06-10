import { Sequelize } from "sequelize";

const db = new Sequelize('apotik', 'root', 'root123', {
    host: 'localhost',
    dialect: 'mysql'
})

export default db;
