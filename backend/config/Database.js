import { Sequelize } from "sequelize";

<<<<<<< HEAD
const db = new Sequelize('apotik', 'root', 'root123', {
=======
const db = new Sequelize('apotik', 'root', '', {
>>>>>>> origin/master
    host: 'localhost',
    dialect: 'mysql'
})

export default db;
