import AuthController from '../app/controllers/AuthController.js';
import logger from '../helpers/logger.js';

export default (server, routes, prefix = '/auth') => {
  logger.info('Routes - Auth - OK');

  routes.post('/vulnerable/login', AuthController.vulnerableLogin);
  routes.post('/safe/login', AuthController.safeLogin);

  server.use(prefix, routes);
};
