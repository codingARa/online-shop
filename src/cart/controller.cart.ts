import {Router, Response, Request} from 'express';
import CartItem from './interface.cartitem';
import Product from './interface.product';
import * as bodyParser from 'body-parser';
 
class CartControls {
  public router = Router();
  public path = '/cart';
  private cartlist: CartItem[] = [];
 
  constructor() {
    this.intializeRoutes();
  }
 
  public intializeRoutes() {
    this.router.get(this.path, this.getCartList);
    this.router.post(this.path, this.placeItemToCart);
  }
 
  //gesamte Cart-Liste zurueckgeben
  getCartList = (req: Request, res: Response) => {
    //res.send(this.cartlist);
    res.render('cart');
  }
 
  placeItemToCart = (req: Request, res: Response) => {
    //TODO: her muss ich noch das item aus dem body herausbekommen
//    const selectedproduct: Product = request.body;
//    if(this.cartlist.length == 0){
//
//      //neues Item an Cart-List haengen mit amount = 1
//      const newitem: CartItem;
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
      console.log('Test: Item placed in cart');
    }
  }
 
export default CartControls;