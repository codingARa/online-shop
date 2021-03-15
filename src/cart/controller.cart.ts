import {Router, Response, Request} from 'express';
const stock_model: any = require('./../../models/index');
const stock = stock_model.Stock;
//import CartItem from './interface.cartitem';
//import Product from './interface.product';
//localStorage = require('./../../public/js/main');
//import * as bodyParser from 'body-parser';
//Datenbank

class CartControls {
  public router = Router();
  public path = '/cart';
  //private cartlist: CartItem[] = [];
  private altlist: any[] = [];
 
  constructor() {
    this.intializeRoutes();
  }
 
  public intializeRoutes() {
    this.router.get(this.path, this.getCartList);
    this.router.get('/selected/:id', this.placeItemToCart);
  }
 
  //gesamte Cart-Liste zurueckgeben und anzeigen
  getCartList = (req: Request, res: Response) => {
   let unique_product_ids = this.altlist.filter((v, i, a) => a.indexOf(v) === i);
   console.log(unique_product_ids);

   return stock.findAll({where: {id: unique_product_ids}, raw: true})
    //.then((cartitem: any) => console.log('found', cartitem))
    .then((cartitem: any) => res.render('cart', {cartitem}))
  }
 
  placeItemToCart = (req: Request, res: Response) => {
    this.altlist.push(req.params.id);
    console.log(this.altlist);
    //TODO: confirmation
    res.redirect('/');
  }
}
 
export default CartControls;