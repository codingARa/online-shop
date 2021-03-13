import express, {Application} from 'express';
import routes from './routes';
import { Console } from 'node:console';
//import * as bodyParser from 'body-parser';
 
class App {
  public app: Application;
  public port: number;
 
  //constructor(controllers, port) {
  constructor(port: number) {
    this.app = express();
    this.port = port;
 
    this.initializeMiddlewares();
    //this.initializeControllers(controllers);
  }
 
  private initializeMiddlewares() {
    this.app.use(routes);
    console.log('init Middleware');
  }
 
//  private initializeControllers(controllers) {
//    controllers.forEach((controller) => {
//      this.app.use('/', controller.router);
//    });
//  }
 
  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  }
}
 
export default App;