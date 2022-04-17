import {
  createLogger,
  format,
  Logger,
  transports,
} from 'winston';

export const SystemLogger: Readonly<Logger> = createLogger({
  level: 'info',
  format: format.json(),
  defaultMeta: {},
  transports: [
    new transports.File({
      dirname: 'logs',
      filename: 'error.log',
      level: 'error',
    }),

    new transports.File({ dirname: 'logs', filename: 'log.log', level: 'log' }),

    new transports.File({
      dirname: 'logs',
      filename: 'warning.log',
      level: 'warn',
    }),

    new transports.File({
      dirname: 'logs',
      filename: 'verbose.log',
      level: 'verbose',
    }),
  ],
});
