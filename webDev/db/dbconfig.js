// const Sequelize= require('sequelize');
// const password='Uttam@010977384';
const Sequelize= require('sequelize');
const password='1234';

const sequelize = new Sequelize('abhijeet', 'root', password, {
    host: 'localhost',
    dialect:'mysql' /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
  });

  const connect=async ()=>{
    try {
        await  sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
  }

  connect();
  module.exports=sequelize