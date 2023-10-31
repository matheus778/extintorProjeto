const { DataTypes } = require('sequelize');
const { connection } = require('../database/connection');

const Fabricante = connection.define('Fabricante', {
  idFabricante: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: DataTypes.STRING
  },
  telefone: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
  endereco: {
    type: DataTypes.STRING
  }
}, {
  tableName: 'fabricante',
  timestamps: false
});

module.exports = { Fabricante };