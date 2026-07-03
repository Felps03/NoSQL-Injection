import { z } from 'zod';

import httpCodes from '../../helpers/enums/httpCodes.js';
import logger from '../../helpers/logger.js';
import User from '../schemas/User.js';

const loginSchema = z.object({
  email: z.email(),
  password: z.string().min(1)
});

class AuthController {
  // Vulnerable on purpose: email/password go straight from req.body into the Mongo
  // query, so an attacker can send an operator (e.g. { "$gt": "" }) instead of a
  // real password and bypass the check. Local/controlled demo only.
  async vulnerableLogin(req, res) {
    logger.info('AuthController - Vulnerable Login - OK');
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ email, password });

      return res.status(httpCodes.OK).send(user);
    } catch (error) {
      return res.status(httpCodes.BAD_REQUEST).send({ result: 'user/pass not found' });
    }
  }

  // Mitigation: Zod rejects the request before email/password ever reach the
  // Mongo query, so an operator payload fails validation instead of being executed.
  async safeLogin(req, res) {
    logger.info('AuthController - Safe Login - OK');

    const parsed = loginSchema.safeParse(req.body);

    if (!parsed.success) {
      return res.status(httpCodes.BAD_REQUEST).json({
        error: 'Invalid request payload',
        details: parsed.error.issues
      });
    }

    try {
      const { email, password } = parsed.data;

      const user = await User.findOne({ email, password });

      return res.status(httpCodes.OK).send(user);
    } catch (error) {
      return res.status(httpCodes.BAD_REQUEST).send({ result: 'user/pass not found' });
    }
  }
}

export default new AuthController();
