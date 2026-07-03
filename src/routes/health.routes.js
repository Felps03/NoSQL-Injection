import HealthController from '../app/controllers/HealthController.js';
import logger from '../helpers/logger.js';

export default (server, routes, prefix = '/health') => {
  logger.info('Routes - Health - OK');

  routes.get('/', HealthController.index);

  server.use(prefix, routes);
};
