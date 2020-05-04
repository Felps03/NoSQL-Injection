import winston from 'winston';

const configLog = {
  levels: {
    error: 0,
    warn: 1,
    info: 2,
    verbose: 3,
    debug: 4,
    silly: 5
  },
  colors: {
    error: 'red',
    warn: 'yellow',
    info: 'green',
    verbose: 'cyan',
    debug: 'blue',
    silly: 'magenta'
  },
  transports: [
    new winston.transports.File({
      filename: './app.log',
      maxFiles: 5,
      maxsize: 10000000,
      tailable: true,
      level: 'debug'
    }),
    new winston.transports.Console({
      colorize: true,
      level: 'debug',
      format: winston.format.combine(winston.format.colorize())
    })
  ]
};

const logger = new winston.createLogger({
  level: 'debug',
  levels: configLog.levels,
  transports: configLog.transports
});

module.exports = logger;
