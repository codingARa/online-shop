'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Stock extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Stock.init({
    product_id: DataTypes.INTEGER,
    amount: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    author: DataTypes.STRING,
    isbn: DataTypes.STRING,
    image: DataTypes.STRING,
    price: DataTypes.REAL
  }, {
    sequelize,
    modelName: 'Stock',
  });
  return Stock;
};