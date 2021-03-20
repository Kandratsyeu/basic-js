const CustomError = require('../extensions/custom-error')

module.exports = class DepthCalculator {
  calculateDepth(/* arr */) {
    return JSON.stringify(arguments[0]) == JSON.stringify(arguments[0].flat(1))
      ? 1
      : this.calculateDepth(arguments[0].flat(1)) + 1
  }
}
