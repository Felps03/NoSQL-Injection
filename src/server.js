import 'dotenv/config';

import app from './app.js';
import { connectDatabase } from './database/index.js';
import logger from './helpers/logger.js';

const port = process.env.PORT || 3333;

try {
  await connectDatabase();

  app.listen(port, () => {
    logger.info(`Server running on port ${port}`);
  });
} catch (error) {
  logger.error(error.message);
  process.exit(1);
}
