const { DataTypes } = require("sequelize");
const { connection } = require("../database/connection");
const { Extintor } = require("./Extintor");


const Vistoria = connection.define('Vistoria', {
  idVistoria: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true
  },
  janeiro: {
    type: DataTypes.DATEONLY,
    allowNull: true,
    defaultValue: null
  },
  fevereiro: {
    type: DataTypes.DATEONLY,
    allowNull: true,
    defaultValue: null    
  },
  marco: {
    type: DataTypes.DATEONLY,
    allowNull: true,
    defaultValue: null 
  },
  abril: {
    type: DataTypes.DATEONLY,
    allowNull: true,
    defaultValue: null 
  },
  maio: {
    type: DataTypes.DATEONLY,
    allowNull: true,
    defaultValue: null 
  },
  junho: {
    type: DataTypes.DATEONLY,
    allowNull: true,
    defaultValue: null 
  },
  julho: {
    type: DataTypes.DATEONLY,
    allowNull: true,
    defaultValue: null 
  },
  agosto: {
    type: DataTypes.DATEONLY,
    allowNull: true,
    defaultValue: null 
  },
  setembro: {
    type: DataTypes.DATEONLY,
    allowNull: true,
    defaultValue: null 
  },
  outubro: {
    type: DataTypes.DATEONLY,
    allowNull: true,
    defaultValue: null 
  },
  novembro: {
    type: DataTypes.DATEONLY
  },
  dezembro: {
    type: DataTypes.DATEONLY
  }
},
  {
    tableName: 'vistoria',
    timestamps: false
  }
);

Extintor.hasOne(Vistoria, {
  foreignKey: 'idExtintor',
  onDelete: 'CASCADE'
})

module.exports = { Vistoria };