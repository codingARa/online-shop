// Startpunkt der Server-Seite zur Instanziierung der App-Class und Uebergabe
// der Controller-Classes

import App from './app';
import CartControls from './cart/controller.cart';
//import LoginControls from './login/controller.login';

//Liste an verwendeten Controllern, die der App uebergeben werden
const controllers: any = [
  new CartControls(),
  //new LoginControls()
];

//Instanz der App
const app = new App(controllers, 5000);
app.listen();