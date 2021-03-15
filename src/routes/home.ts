import {Request, Response, Router} from 'express';
const stock_model: any = require('./../../models/index');
const stock = stock_model.Stock;
const home: Router = Router();

const home_path: string[] = ['/', '/home']

home.get(home_path, (req: Request, res: Response) => {
  //stock.findAll({plain: true, raw: true})
  stock.findAll({raw: true})
    .then((Stock: any) => {
      res.render('main', {Stock})
      console.log(Stock);
    })
    //.then((Stock: any) => console.log(Stock))
  })


  //res.render('main');
//    home.get('/', (req: Request, res: Response) => {
//      return stock_db.Stocks.findAll()
//        .then((product: any) => res.send(product))
//        .catch((err: Error) => {
//          console.log('There was an error querying contacts', JSON.stringify(err))
//          return res.send(err)
//        });
//    });

export default home;