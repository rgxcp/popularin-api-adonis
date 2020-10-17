'use strict'

const Schema = use('Schema')

class CommentLikeSchema extends Schema {
  up() {
    this.create('comment_likes', (table) => {
      table.increments('id')
      table.integer('user_id').unsigned().notNullable()
      table.integer('comment_id').unsigned().notNullable()
      table.timestamp('created_at').nullable()
      table.timestamp('updated_at').nullable()
    })
  }

  down() {
    this.drop('comment_likes')
  }
}

module.exports = CommentLikeSchema
