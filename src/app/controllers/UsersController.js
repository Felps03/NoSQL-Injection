import httpCodes from '../../helpers/enums/httpCodes.js';
import logger from '../../helpers/logger.js';
import User from '../schemas/User.js';

class UsersController {
  async index(req, res) {
    logger.info('UsersController - Index - OK');

    const users = await User.find({});

    return res.status(httpCodes.OK).send(users);
  }

  async create(req, res) {
    logger.info('UsersController - Create - OK');
    try {
      const user = await User.create(req.body);

      return res.status(httpCodes.OK).send(user);
    } catch (error) {
      return res.status(httpCodes.BAD_REQUEST).send({ result: 'user/pass not create' });
    }
  }
}

export default new UsersController();
