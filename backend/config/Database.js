import { Sequelize } from "sequelize";

const db = new Sequelize('apotik', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

export default db;
