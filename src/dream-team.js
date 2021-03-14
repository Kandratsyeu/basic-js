const CustomError = require('../extensions/custom-error')

module.exports = function createDreamTeam(/* members */) {
  return Array.isArray(arguments[0])
    ? arguments[0]
        .filter((el) => typeof el === 'string')
        .map((el) => el.trim().toUpperCase()[0])
        .sort((a, b) => a.charCodeAt() - b.charCodeAt())
        .join('')
    : false
}
