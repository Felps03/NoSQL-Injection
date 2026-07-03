import { config } from 'dotenv';
import express from 'express';

import logger from './helpers/logger.js';
import routes from './routes/index.routes.js';

config({ quiet: true });

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
    this.exceptionHandler();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    routes(this.server);
  }

  exceptionHandler() {
    this.server.use((err, req, res, next) => {
      logger.error(err.stack);

      if (process.env.NODE_ENV === 'development') {
        return res.status(500).json({ error: err.message, stack: err.stack });
      }

      return res.status(500).json({ error: 'Internal server error' });
    });
  }
}

export default new App().server;
