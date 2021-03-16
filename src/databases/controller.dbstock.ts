/* DEPRICATED
 DBStockController war inital zum Manipulieren der Datenbank gedacht. Hat sich
 als Sackgasse/als unnoetig erwiesen

import {Router, Request, Response}  from 'express';
import Sequelize_stock from '../models/product';
import product from '../models/product';

class DBStockController {
  public router = Router();
  public product = product;
  private sequelize_stock = Sequelize_stock;

  constructor() {
    this.establishConnection();
  };

  public displayAvailableStock(res: Response, req: Request) {
    console.log("displayAvailable reached");
    res.render('main');
  };

  private establishConnection() {
    try {
      async() => await this.sequelize_stock.authenticate();
      console.log('Test: Stock-Database connected');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  };
};

export default DBStockController;

*/