"use strict";

var
  winston = require( "winston" ),
  memoryTransport = new ( winston.transports.Memory )(),
  logger = new ( winston.Logger )({
    transports: [
      memoryTransport
    ]
  });

require( ".." )( logger );

describe( "should postfix with bitch", function(){
  beforeEach(function(){
    memoryTransport.clearLogs();
  });
  it( "should work with string", function(){
    logger.log( "info", "What's up" );

    memoryTransport.writeOutput[0].should.eql( "info: What's up, bitch!" );
  });

  it( "should work with numbers", function(){
    logger.log( "info", 1 );

    memoryTransport.writeOutput[0].should.eql( "info: 1, bitch!" );
  });

  it( "should work with string and error level", function(){
    logger.log( "error", "Something is wrong" );

    memoryTransport.errorOutput[0].should.eql( "error: Something is wrong, bitch!" );
  });

  it( "should not touch objects", function(){
    logger.log( "info", {"mr": "white"} );

    memoryTransport.writeOutput[0].should.eql( "info:  mr=white" );
  });
});
