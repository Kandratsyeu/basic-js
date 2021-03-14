const CustomError = require('../extensions/custom-error')

const MODERN_ACTIVITY = 15
const HALF_LIFE_PERIOD = 5730

module.exports = function dateSample(/* sampleActivity */) {
  const SAMPLE_ACTIVITY =
    typeof arguments[0] === 'string'
      ? Math.abs(parseFloat(arguments[0]))
      : false

  return SAMPLE_ACTIVITY &&
    arguments[0] == SAMPLE_ACTIVITY &&
    SAMPLE_ACTIVITY < MODERN_ACTIVITY
    ? Math.ceil(
        Math.log(MODERN_ACTIVITY / SAMPLE_ACTIVITY) /
          (Math.log(2) / HALF_LIFE_PERIOD)
      )
    : false
}
