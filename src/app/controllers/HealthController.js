import httpCodes from '../../helpers/enums/httpCodes';
import logger from '../../helpers/logger';

class HealthController {
  async index(req, res) {
    logger.info('HealthController - Index - OK');

    return res.status(httpCodes.OK).json({ message: 'Welcome to Sis Digital' });
  }
}

export default new HealthController();