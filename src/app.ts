import express, {Application, Request, Response, Router} from 'express';
import routes from './routes';
import exphbs from 'express-handlebars';
import path from 'path';
import Sequelize_stock from './models/product';
//import stock  from './models/product';
//import { Model } from 'sequelize/types';
import { Sequelize, Model, DataTypes } from 'sequelize';
//import routerdb from './create_db';

class App {
  public app: Application;
  public port: number;
  //private db_stock = Sequelize_stock;
  //public stock: Model;
 
  constructor(controllers: any, port: number) {
    this.app = express();
    this.port = port;
 
    this.initializeMiddlewares();
    this.initializeControllers(controllers);
    this.initializeTemplateEngine();
  };
 
  private initializeMiddlewares() {
    //TODO ggf. Inhalt aus routes hierhin schieben
    console.log('init Middleware...');
    this.app.use(routes);

    //try {
    //  async() => await this.db_stock.authenticate();
    //  console.log('...Test: Stock-Database connected');
//      const stock = async() => {
//        await Model.stock.sync({force: true})
//        console.log("..Stock synchronisiert")
//      };
//      stock();
//      this.stock.findAll()
//        .then(products => console.log(products))
//        .catch(err => console.log(err))
    //} catch (error) {
    //  console.error('...Unable to connect to the database:', error);
    //}
  };

  public initializeTemplateEngine() {
    this.app.set('view engine', 'handlebars');
    this.app.engine(
      'handlebars',
      exphbs({
        defaultLayout: 'main',
        layoutsDir: path.join(__dirname, '../views/layouts')
      }));
    const csspath: string = path.join(__dirname, '../public');
    this.app.use(express.static(csspath));
    //this.app.get('/', (req: Request, res: Response) => {res.render('main')});
    console.log("Test: template engine initilized");
  };
 
  private initializeControllers(controllers: any) {
    controllers.forEach((controller: any) => {
      this.app.use('/', controller.router);
    });
  };
 
  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  };
};
 
export default App;