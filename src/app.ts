import express, {Application, Request, Response, Router} from 'express';
import routes from './routes';
import exphbs from 'express-handlebars';
import path from 'path';
 
class App {
  public app: Application;
  public port: number;
 
  constructor(controllers: any, port: number) {
    this.app = express();
    this.port = port;
 
    this.initializeMiddlewares();
    this.initializeControllers(controllers);
    this.initializeTemplateEngine();
  };
 
  private initializeMiddlewares() {
    //TODO ggf. Inhalt aus routes hierhin schieben
    this.app.use(routes);
    console.log('init Middleware');
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
    this.app.get('/', (req: Request, res: Response) => {res.render('main')});
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