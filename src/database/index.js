import mongoose from 'mongoose';

import logger from '../helpers/logger.js';

export async function connectDatabase() {
  const { MONGO_URL } = process.env;

  if (!MONGO_URL) {
    throw new Error('Missing required environment variable: MONGO_URL');
  }

  await mongoose.connect(MONGO_URL);

  logger.info('MongoDB connected');
}
