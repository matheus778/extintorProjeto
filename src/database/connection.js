const { Sequelize } = require('sequelize');

const connection = new Sequelize('controledeextintor', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  logging:false
});

module.exports = {connection}; 