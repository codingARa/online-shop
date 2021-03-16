import { Router, Request, Response } from 'express';
import home from './home';
import routerdb from '../create_db';

const routes : Router = Router();

routes.use(['/', '/home'], home);
routes.use('/add', routerdb);

export default routes;