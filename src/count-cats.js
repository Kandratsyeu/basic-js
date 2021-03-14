const CustomError = require('../extensions/custom-error')

module.exports = function countCats(/* matrix */) {
  return arguments[0].flat().filter((element) => element === '^^').length
}
