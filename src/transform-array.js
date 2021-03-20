const CustomError = require('../extensions/custom-error')

module.exports = function transform(/* arr */) {
  if (!Array.isArray(arguments[0]) || arguments[0].length < 0) {
    throw new Error()
  }
  let newArr = []

  for (let i = 0; i < arguments[0].length; i++) {
    switch (arguments[0][i]) {
      case '--discard-next':
        i++
        break
      case '--discard-prev':
        {
          if (newArr.length && arguments[0][i - 2] != '--discard-next') {
            newArr.pop()
          }
        }
        break
      case '--double-next':
        {
          if (i < arguments[0].length - 1) {
            newArr.push(arguments[0][i + 1])
          }
        }
        break
      case '--double-prev':
        {
          if (i > 0 && arguments[0][i - 2] != '--discard-next') {
            newArr.push(arguments[0][i - 1])
          }
        }
        break
      default:
        newArr.push(arguments[0][i])
    }
  }
  return newArr
}
