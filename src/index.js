module.exports = function getZerosCount(number) {
  var i = 0;
  i = Math.floor(number/5) + Math.floor(number/Math.pow(5,2)) + Math.floor(number/Math.pow(5,3)) + 
  Math.floor(number/Math.pow(5,4)) + Math.floor(number/Math.pow(5,5)) + Math.floor(number/Math.pow(5,6)) + 
  Math.floor(number/Math.pow(5,7)) + Math.floor(number/Math.pow(5,8)) + Math.floor(number/Math.pow(5,9)) + 
  Math.floor(number/Math.pow(5,10)) + Math.floor(number/Math.pow(5,11)) + Math.floor(number/Math.pow(5,12)) +
  Math.floor(number/Math.pow(5,13));
  return i;
}
