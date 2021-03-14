import { Sequelize, Model, DataTypes } from 'sequelize';

const Sequelize_stock = new Sequelize({
  dialect: 'sqlite',
  storage: '../database/stock.db'
});

const product = Sequelize_stock.define('product', {
  // Model attributes are defined here
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false
  },
  isbn: {
    type: DataTypes.STRING,
    allowNull: false
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.REAL,
    allowNull: false
  },
}, {});


export default Sequelize_stock;