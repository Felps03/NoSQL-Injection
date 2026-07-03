import UsersController from '../app/controllers/UsersController.js';
import logger from '../helpers/logger.js';

export default (server, routes, prefix = '/users') => {
  logger.info('Routes - Users - OK');

  routes.get('/', UsersController.index);
  routes.post('/', UsersController.create);

  server.use(prefix, routes);
};
