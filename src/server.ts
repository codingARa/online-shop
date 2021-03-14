import App from './app';
import CartControls from './cart/controller.cart';
import LoginControls from './login/controller.login';
//import * as express from 'express';
//import exphbs from 'express-handlebars';

const controllers: any = [
  new CartControls(),
  new LoginControls()
];
const app = new App(controllers, 5000);

app.listen();