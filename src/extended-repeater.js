const CustomError = require('../extensions/custom-error')

module.exports = function repeater(/* str, options */) {
  let addition = Array(arguments[1].additionRepeatTimes || 1)
    .fill(
      arguments[1].hasOwnProperty('addition')
        ? String(arguments[1].addition)
        : ''
    )
    .join(arguments[1].additionSeparator || '|')
  return Array(arguments[1].repeatTimes || 1)
    .fill(String(arguments[0]) + addition)
    .join(arguments[1].separator || '+')
}
