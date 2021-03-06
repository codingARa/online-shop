import { Sequelize, Model, DataTypes } from 'sequelize';

const Sequelize_stock = new Sequelize({
  dialect: 'sqlite',
  storage: '../database/stock.db'
});

const stock = Sequelize_stock.define('init_datenbank', {
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


stock.sync().then(() => {console.log('table created')});

//const init = async () => {
//  await Sequelize_stock.sync() // force true will drop the table if it already exists
//  console.log('Tables have synced!')
//}
//init()

const findProducts = async () => {
  try {
    const allProdcuts = await stock.findAll()
    console.log(',,,,,,,,,,,,,,,,,,,,,')
    console.log(allProdcuts) //console.log allCampus, see what you get?
  } catch (err) {
    console.log(err)
  }
}
findProducts() 

export default Sequelize_stock;