import AuthController from './../app/controllers/AuthController'
import logger from './../helpers/logger'

module.exports = (server, routes, prefix = '/auth') => {
  logger.info('Routes - Auth - OK')

  routes.get('/', AuthController.index)
  routes.post('/create', AuthController.create)

  server.use(prefix, routes)
}
