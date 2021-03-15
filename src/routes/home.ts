import {Request, Response, Router} from 'express';
const home: Router = Router();
//Datenbank
const stock_model: any = require('./../../models/index');
const stock = stock_model.Stock;

const home_path: string[] = ['/', '/home']

// Alle Waren anzeigen auf /home
home.get(home_path, (req: Request, res: Response) => {
  stock.findAll({raw: true})
    .then((Stock: any) => {
      res.render('main', {Stock})
      //console.log(Stock);
    })
  })

//home.get('/selected/:id', (req: Request, res: Response) => {
  //const id = parseInt(req.params.id);
  //console.log(id);
  //console.log(req.params.product_id);
  //console.log("HI!!!");
//  res.redirect('/');
//});


export default home;