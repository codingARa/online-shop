import { Router } from 'express';
import { Sequelize, Model, DataTypes } from 'sequelize';

const Sequelize_stock = new Sequelize({
  dialect: 'sqlite',
  storage: '../database/new_stock.db'
});

const stock = Sequelize_stock.define('product', {
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

const routerdb: Router = Router();
routerdb.get('/add', (req, res) => {
    const data = {
        product_id: 1,
        amount: 10,
        title: 'Titel',
        description: 'Awesome book',
        author: "me",
        isnb: '3-1234',
        image: "img",
        price: 9.99
    }

    let {product_id, amount, title, description, author, isnb, image, price} = data;

    stock.create({product_id, amount, title, description, author, isnb, image, price})
        .then(data => res.redirect('/'));
});


export default routerdb;