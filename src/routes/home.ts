import {Request, Response, Router} from 'express';
//const db = require('../../models');
const home: Router = Router();
//const stock_db: any = require('../../models/index');
//const stock_model: any = require('../../models/stock');

const home_path: string[] = ['/', '/home']

home.get(home_path, (req: Request, res: Response) => {
  res.render('main');
//    home.get('/', (req: Request, res: Response) => {
//      return stock_db.Stocks.findAll()
//        .then((product: any) => res.send(product))
//        .catch((err: Error) => {
//          console.log('There was an error querying contacts', JSON.stringify(err))
//          return res.send(err)
//        });
//    });
});

export default home;