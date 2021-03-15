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
  private total: Number = 0;
 
  constructor() {
    this.intializeRoutes();
  }
 
  public intializeRoutes() {
    this.router.get(this.path, this.getCartList);
    this.router.get('/selected/:id', this.placeItemToCart);
    this.router.get('/cart/delete/:id', this.deleteItemFromCart);
    this.router.get('/cart/checkout', this.checkout);
  }
 
  //gesamte Cart-Liste zurueckgeben und anzeigen
  getCartList = (req: Request, res: Response) => {
   let unique_product_ids: any = this.altlist.filter((v, i, a) => a.indexOf(v) === i);

   //json-Object im key: unique_product_id, value: Anzahl Produkten mit id im Cart
   let occurances: any = {};
   for (let i=0; i < this.altlist.length; i++) {
     if (occurances[this.altlist[i]] === undefined) {
       occurances[this.altlist[i]] = 1;
     } else {
       occurances[this.altlist[i]]++;
     }
   };

   // gewaehlte Items aus Datenbank holen
   return stock.findAll({where: {id: unique_product_ids}, raw: true})
    // ... Menge der Items und total (Gesamtsumme) berechnen 
    .then((found_list: any) =>  {

      for (let i = 0; i < found_list.length; i++) {
        let currentid = found_list[i]["id"];
          found_list[i]["menge"] = occurances[currentid];

          // Einzelsumme
          found_list[i]["sum"] = found_list[i]["menge"] * found_list[i]["price"];

          this.total += found_list[i]["sum"];
      }
      return found_list;
    }
    )
    // ... modifiziertes cartitem mit Menge und Einzelsumme an cart weitergeben
    // TODO: unklar, wie ich this.total alleinstehend uebersende
    .then((cartitem: any) => res.render('cart', {cartitem}))
  }
 
  placeItemToCart = (req: Request, res: Response) => {
    this.altlist.push(req.params.id);
    console.log(this.altlist);
    //TODO: confirmation
    res.redirect('/');
  }

  deleteItemFromCart = (req: Request, res: Response) => {
    //TODO: 
    // - item entfernen
    // - Moeglichkeit: id aus this.altlist entfernen, und this.total
    //   zuruecksetzen; mit redirect wird sollte alles wieder korrekt berechnet
    //   werden
    console.log("Item entfernen");
    res.redirect('/cart');
  }

  checkout = (req: Request, res: Response) => {
    //TODO: Checkout
    // - Cart loeschen, indem this.altlist = [] gesetzt wird
    console.log("Checkout");
    res.redirect('/');

  }
}

 
export default CartControls;