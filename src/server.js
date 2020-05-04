import cluster from 'cluster';
import os from 'os';

import app from './app';

if (cluster.isMaster) {
  for (let index = 0; index < os.cpus().length; index++) {
    cluster.fork();
  }
} else {
  app.listen(process.env.PORT || 3333);
}
