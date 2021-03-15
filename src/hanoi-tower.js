const CustomError = require('../extensions/custom-error')

module.exports = function calculateHanoi(/*disksNumber, turnsSpeed*/) {
  let answer = {}
  answer.turns = Math.pow(2, arguments[0]) - 1
  answer.seconds = Math.floor(answer.turns / (arguments[1] / 3600))
  return answer
}
