var
  winston = require( "winston" ),
  logger = new ( winston.Logger )({
    transports: [
      new ( winston.transports.Console )()
    ]
  });
require( ".." )( logger );

logger.log( "info", "Hey Mr. White" ); // should equal "Hey Mr. White, bitch!"