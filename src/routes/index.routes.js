import { Router } from 'express';

import auth from './auth.routes.js';
import health from './health.routes.js';
import users from './users.routes.js';

export default server => {
  health(server, new Router());
  users(server, new Router());
  auth(server, new Router());
};
