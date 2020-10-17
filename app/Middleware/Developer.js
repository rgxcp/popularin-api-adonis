'use strict'

class Developer {
  async handle({ request }, next) {
    await next()
  }
}

module.exports = Developer
