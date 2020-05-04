import httpCodes from '../../helpers/enums/httpCodes';
import logger from '../../helpers/logger';
import User from '../schemas/User';

const isObject = params => {
  return new Promise((resolve, reject) => {
    Object.keys(params).forEach(v => {
      if (typeof params[v] === 'object') return reject(false);
    });
    resolve(true);
  });
};

class AuthController {
  async index(req, res) {
    logger.info('AuthController - Index - OK');

    const user = await User.find({});

    return res.status(httpCodes.OK).send(user);
  }

  async create(req, res) {
    logger.info('AuthController - Create - OK');
    try {
      const user = await User.create(req.body);

      return res.status(httpCodes.OK).send(user);
    } catch (error) {
      return res.status(httpCodes.BAD_REQUEST).send({ result: 'user/pass not create' });
    }
  }

  async login(req, res) {
    logger.info('AuthController - Auth - OK');
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ email, password });

      return res.status(httpCodes.OK).send(user);
    } catch (error) {
      return res.status(httpCodes.BAD_REQUEST).send({ result: 'user/pass not found' });
    }
  }

  async loginSecurity(req, res) {
    logger.info('AuthController - Auth - OK');

    try {
      const { email, password } = req.body;
      await isObject({ email, password });

      const user = await User.findOne({ email, password });

      return res.status(httpCodes.OK).send(user);
    } catch (error) {
      return res.status(httpCodes.BAD_REQUEST).send({ result: 'user/pass not found' });
    }
  }
}

export default new AuthController();
