import {Router, Response, Request} from 'express';
import User from './interface.user';
import * as bodyParser from 'body-parser';
 
class LoginControls {
  public router = Router();
  public path = '/login';
 
  constructor() {
    this.intializeRoutes();
  }
 
  public intializeRoutes() {
    this.router.get(this.path, this.getLoginForm);
    this.router.post(this.path, this.placeItemToCart);
  }
 
  //LoginForm zurueckgeben
  getLoginForm = (req: Request, res: Response) => {
    //res.send(this.cartlist);
    res.render('login');
  }
 
  placeItemToCart = (req: Request, res: Response) => {
      console.log('Test: new User');
    }
  }
 
export default LoginControls;