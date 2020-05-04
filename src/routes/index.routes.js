import { Router } from 'express';

import auth from './auth.routes';
import health from './health.routes';

module.exports = server => {
  server.use((req, res, next) => {
    health(server, new Router());
    auth(server, new Router());
    next();
  });
};
