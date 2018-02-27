module.exports = function getZerosCount(number) {
  var i = 0;
  while (number > 0) {
    number = Math.floor(number / 5);
    i = i + number;
  }
  return i;
}
