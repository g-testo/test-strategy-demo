const winston = require('winston');
require('winston-papertrail').Papertrail;

class LoggerService {
    constructor() {
        this.logger = winston.createLogger({
            transports: [
                new winston.transports.Console(),
                new winston.transports.Papertrail({
                    host: process.env.PAPERTRAIL_HOST,
                    port: process.env.PAPERTRAIL_PORT,
                    logFormat: (level, message) => `${level}: ${message}`
                })
            ]
        });
    }

    logInfo(message) {
        this.logger.info(message);
    }

    logWarning(message) {
        this.logger.warn(message);
    }

    logError(message) {
        this.logger.error(message);
    }

    logCritical(message) {
        this.logger.log('critical', message);
    }
}

module.exports = LoggerService;