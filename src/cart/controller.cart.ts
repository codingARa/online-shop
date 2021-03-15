import {Router, Response, Request} from 'express';
import CartItem from './interface.cartitem';
import Product from './interface.product';
import * as bodyParser from 'body-parser';
//localStorage = require('./../../public/js/main');
//import * as bodyParser from 'body-parser';
//Datenbank
const stock_model: any = require('./../../models/index');
const stock = stock_model.Stock;



//console.log(window.localStorage.getItem('cart'));
//console.log(window.sessionStorage)
 
class CartControls {
  public router = Router();
  public path = '/cart';
  private cartlist: CartItem[] = [];
  private altlist: any[] = [];
 
  constructor() {
    this.intializeRoutes();
  }
 
  public intializeRoutes() {
    this.router.get(this.path, this.getCartList);
    this.router.post('/cart', this.placeItemToCart);
    //this.router.get('/selected/:id', this.placeItemToCart);
  }
 

  //gesamte Cart-Liste zurueckgeben
  getCartList = (req: Request, res: Response) => {

    //let id_list = localStorage.getItem('cart');
//    let id_list = window.sessionStorage.getItem('cart');
//    if (!id_list) {
//      console.log('nothing found yet.')
//    } else {
//      console.log(id_list);
//    }
//    res.render('cart');
  };
 
  placeItemToCart = (req: Request, res: Response) => {
    console.log(req.body);
    res.render('cart');
  }
    //const selectedproduct: Product = req.params.id;
    //this.cartlist.push(selectedproduct);
//    const selectedproduct: Product = stock.findById(req.params.id);
//    if(this.cartlist.length == 0){
//      const newitem: CartItem;
//      Object.entries(selectedproduct).forEach(
//        //([key, value]) => newitem = {String(key): selectedproduct[value]}
//        ([key, value]) => newitem[key] = selectedproduct[value]
//      );
//      this.cartlist.push(newitem);
//      newitem 
//    }

    //this.altlist.push(req.params.id);
    //console.log(this.altlist);
    //console.log("....");
    //console.log(req.body);

    //res.redirect('/');
//
//      //neues Item an Cart-List haengen mit amount = 1
//      Object.entries(selectedproduct).forEach(
//        //([key, value]) => newitem = {String(key): selectedproduct[value]}
//        ([key, value]) => newitem[key] = selectedproduct[value]
//      );
//      this.cartlist.push(newitem);
//
//    } else {
//      //amount erhoehen
//    
      //response.send();
      //console.log('Test: Item placed in cart');
    //}
}
 
export default CartControls;