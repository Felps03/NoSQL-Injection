import httpCodes from '../../helpers/enums/httpCodes.js';
import logger from '../../helpers/logger.js';

class HealthController {
  async index(req, res) {
    logger.info('HealthController - Index - OK');

    return res.status(httpCodes.OK).json({ message: 'Welcome to Sis Digital' });
  }
}

export default new HealthController();
