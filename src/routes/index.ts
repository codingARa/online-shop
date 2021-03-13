import { Router } from 'express';
import home from './home';

const routes = Router();

routes.use(['/', '/home'], home);

export default routes;