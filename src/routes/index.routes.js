import { Router } from 'express'

import health from './health.routes'
import auth from './auth.routes'

module.exports = server => {
  server.use((req, res, next) => {
    health(server, new Router())
    auth(server, new Router())
    next()
  })
}
