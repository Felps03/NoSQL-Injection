import httpCodes from '../../helpers/enums/httpCodes';
import logger from '../../helpers/logger';

import User from '../schemas/User';

class AuthController {
  async index(req, res) {
    logger.info('AuthController - Index - OK');

    const user = await User.find({});

    return res.status(httpCodes.OK).send(user);
  }

  async create(req, res) {
    logger.info('AuthController - Index - OK');

    const user = await User.create(req.body);

    return res.status(httpCodes.OK).send(user);
  }
}

export default new AuthController();