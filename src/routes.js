import { Router } from 'express';
import cors from 'cors';

import StudentController from './app/controllers/StudentController';

const routes = Router();
routes.use(cors());

routes.get('/', (req, res) => res.json({ result: 'TEST-API' }));

// ROUTES PARA STUDENTS
routes.post('/students', StudentController.store);
routes.get('/students', StudentController.index);
routes.get('/students/:uid', StudentController.show);
routes.put('/students/:uid', StudentController.update);
routes.delete('/students/:uid', StudentController.delete);

export default routes;
