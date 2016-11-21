console.log( 'js' );

// example function that adds two numbers it receives as args
var addTwo = function( bert, ernie ){
  console.log( 'in addTwo', bert, ernie );
  return bert + ernie;
}; // end addTwo

// example function that tells if one number is larger than another
var isBigger = function( oscar, bigBird ){
  console.log( 'in isBigger:', oscar, bigBird );
  // check if oscar is bigger than bigBird
  // return true if so
  var bigger = false;
  if( oscar > bigBird ){
    bigger = true;
  }
  return bigger;
}; // end isBigger

// example car object
var cardTest = {
  suit: 'h',
  number: '3'
}; // end obj

// array deck
var deck = [];
