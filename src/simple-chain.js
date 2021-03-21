const CustomError = require('../extensions/custom-error')

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length
  },
  addLink(value) {
    this.chain.push(`( ${String(value)} )`)
    return this
  },
  removeLink(position) {
    if (
      position > this.chain.length ||
      typeof position != 'number' ||
      position % 1 !== 0
    ) {
      try {
        throw new Error('error')
      } finally {
        this.chain = []
      }
    } else {
      this.chain.splice(position - 1, 1)
      return this
    }
  },
  reverseChain() {
    this.chain.reverse()
    return this
  },
  finishChain() {
    try {
      return this.chain.join('~~')
      throw new Error('er')
    } finally {
      this.chain = []
    }
  },
}

module.exports = chainMaker
