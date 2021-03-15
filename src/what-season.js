const CustomError = require('../extensions/custom-error')

module.exports = function getSeason(/* date */) {
  try {
    if (arguments[0] && arguments[0].valueOf() == arguments[0].getTime()) {
      let month = arguments[0].getMonth()
      switch (true) {
        case month < 2:
          return 'winter'
          break
        case month < 5:
          return 'spring'
          break
        case month < 8:
          return 'summer'
          break
        case month < 11:
          return 'fall'
          break
        case month == 11:
          return 'winter'
      }
    } else {
      return 'Unable to determine the time of year!'
    }
  } catch (e) {
    throw new Error('Error')
  }
}
