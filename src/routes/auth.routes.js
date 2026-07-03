import AuthController from '../app/controllers/AuthController.js';
import logger from '../helpers/logger.js';

export default (server, routes, prefix = '/auth') => {
  logger.info('Routes - Auth - OK');

  routes.get('/', AuthController.index);
  routes.post('/create', AuthController.create);
  routes.post('/login', AuthController.login);
  routes.post('/loginSecurity', AuthController.loginSecurity);

  server.use(prefix, routes);
};
