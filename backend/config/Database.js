import { Sequelize } from "sequelize";

const db = new Sequelize('db_name','db_username','db_password',{
    host: 'localhost',
    dialect: 'postgres'
});

export default db;