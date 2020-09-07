'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ReviewLikeSchema extends Schema {
  up () {
    this.create('review_likes', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('review_likes')
  }
}

module.exports = ReviewLikeSchema
