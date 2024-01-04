import { Sequelize } from "sequelize";

const db = new Sequelize('crud-express_db','postgres','danstech',{
    host: 'localhost',
    dialect: 'postgres'
});

export default db;