import { Router } from 'express';

import auth from './auth.routes.js';
import health from './health.routes.js';

export default server => {
  server.use((req, res, next) => {
    health(server, new Router());
    auth(server, new Router());
    next();
  });
};
