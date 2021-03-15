import App from './app';
import CartControls from './cart/controller.cart';
import LoginControls from './login/controller.login';
//import 'dotenv/config';
//import validateEnv from './utils/validateEnv';
const stock_db: any = require('../models/index');
const stock_model: any = require('../models/stock');
 
//validateEnv();

//console.log(stock_db);
//console.log(stock_model);

//stock_model.Stocks.findAll()
//  .then((product:any) => console.log(product))

//Liste an verwendeten Controllern, die der App uebergeben werden
const controllers: any = [
  new CartControls(),
  new LoginControls()
];


//Instanz der App
const app = new App(controllers, 5000);
app.listen();