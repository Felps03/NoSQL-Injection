import AuthController from '../app/controllers/AuthController';
import logger from '../helpers/logger';

module.exports = (server, routes, prefix = '/auth') => {
  logger.info('Routes - Auth - OK');

  routes.get('/', AuthController.index);
  routes.post('/create', AuthController.create);
  routes.post('/login', AuthController.login);
  routes.post('/loginSecurity', AuthController.loginSecurity);

  server.use(prefix, routes);
};
