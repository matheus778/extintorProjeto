const { DataTypes } = require('sequelize');
const { connection } = require('../database/connection');

const Extintor = connection.define('Extintor', {
  idExtintor: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  numeroDeSerie: {
    type: DataTypes.STRING
  },
  anoFabricacao: {
    type: DataTypes.DATEONLY
  },
  capacidadeNominal: {
    type: DataTypes.STRING
  },
  classeExtintor: {
    type: DataTypes.STRING
  },
  agenteExtintor: {
    type: DataTypes.STRING
  },
  vencRecarga: {
    type: DataTypes.DATEONLY
  },
  vencTesteHidroestatico: {
    type: DataTypes.DATEONLY
  },
}, {
  tableName: 'extintor',
  timestamps: false
});

module.exports = { Extintor };