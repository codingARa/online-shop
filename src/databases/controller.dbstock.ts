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

  //public intializeRoutes() {
    //this.router.post(this.path, this.placeItemToCart);
  //}

  public displayAvailableStock(res: Response) {
    //this.router.get(['/', '/home'], (req: Request, res: Response) => {
      //console.log(this.product.showAllSchemas);
      console.log("displayAvailable reached");
      res.render('main');
    //});
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