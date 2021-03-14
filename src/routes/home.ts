import {Request, Response, Router} from 'express';
const home: Router = Router();

const home_path: string[] = ['/', '/home']

home.get(home_path, (req: Request, res: Response) => {
    res.render('main');
});

export default home;