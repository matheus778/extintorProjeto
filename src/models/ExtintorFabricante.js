const { DataTypes } = require('sequelize');
const { connection } = require('../database/connection');
const { Extintor } = require('./Extintor');
const { Fabricante } = require('./Fabricante');

const ExtintorFabricante = connection.define('ExtintorFabricante', {
  idFabricante: {
    type: DataTypes.INTEGER
  },
  idExtintor: {
    type: DataTypes.INTEGER
  }
}, {
  tableName: 'fabricante_extintor',
  timestamps: false
});

// relação entre as tabelas
Extintor.belongsToMany(Fabricante, {
  through: 'ExtintorFabricante',
  foreignKey: 'idExtintor',
  otherKey: 'idFabricante'
});

Fabricante.belongsToMany(Extintor, {
  through: 'ExtintorFabricante',
  foreignKey: 'idFabricante',
  otherKey: 'idExtintor'
});

module.exports = { ExtintorFabricante };