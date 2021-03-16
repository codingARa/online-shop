/*
zentrale App-Class:
- wird von server.ts instanziiert
- loopt ueber alle Controller-Classes, um deren Methoden zu nutzen
*/

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
    //mit initialer Route
    this.app.use(routes);
  };

  //handlebar als Template-Engine angeben & konfigurieren
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
  };
 
  //Loop ueber alle Controller-Classes, um dort definierte Methoden verwenden
  //zu koennen
  private initializeControllers(controllers: any) {
    controllers.forEach((controller: any) => {
      this.app.use('/', controller.router);
    });
  };

  //zentrale Methode fuer Server
  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  };
};
 
export default App;