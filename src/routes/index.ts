import { Router } from 'express';

const routes = Router();

routes.get('/', (request, response) =>
  response.json({ message: 'Helloooo World!!!!' }),
);

export default routes;
