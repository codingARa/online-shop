import { Router, Request, Response } from 'express';
import home from './home';
import routerdb from '../create_db';

const routes : Router = Router();

routes.use(['/', '/home'], home);
routes.use('/add', routerdb);
//routes.use((req: Request, res: Response) => res.status(404).send('404. Page not found'));

export default routes;