import HealthController from './../app/controllers/HealthController'
import logger from './../helpers/logger'

module.exports = (server, routes, prefix = '/health') => {
  logger.info('Routes - Health - OK')

  routes.get('/', HealthController.index)

  server.use(prefix, routes)
}
