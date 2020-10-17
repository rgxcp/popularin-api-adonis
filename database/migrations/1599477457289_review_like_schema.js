'use strict'

const Schema = use('Schema')

class ReviewLikeSchema extends Schema {
  up() {
    this.create('review_likes', (table) => {
      table.increments('id')
      table.integer('user_id').unsigned().notNullable()
      table.integer('review_id').unsigned().notNullable()
      table.timestamp('created_at').nullable()
      table.timestamp('updated_at').nullable()
    })
  }

  down() {
    this.drop('review_likes')
  }
}

module.exports = ReviewLikeSchema
