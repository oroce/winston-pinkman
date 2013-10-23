"use strict";

var
  util = require( "util" ),
  slice = Array.prototype.slice;

module.exports = function WinstonPinkman( instance ){
  if( !( this instanceof WinstonPinkman ) ){
    return new WinstonPinkman( instance );
  }
  var _log = instance.log;

  instance.log = function _overridenLog( level, message ){
    var args = slice.call( arguments, 2 );
    if( typeof message === "string" || typeof message === "number" ){
      message = util.format( "%s, bitch!", message );
    }

    _log.apply( instance, [ level, message ].concat( args ) );
  };
};