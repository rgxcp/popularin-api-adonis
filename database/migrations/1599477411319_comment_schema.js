'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CommentSchema extends Schema {
  up() {
    this.create('comments', (table) => {
      table.increments('id')
      table.integer('user_id').unsigned().notNullable()
      table.integer('review_id').unsigned().notNullable()
      table.string('comment_detail', 300).notNullable().collate('utf8mb4_unicode_ci')
      table.date('comment_date').notNullable()
      table.timestamp('created_at').nullable()
      table.timestamp('updated_at').nullable()
      table.timestamp('deleted_at').nullable()
    })
  }

  down() {
    this.drop('comments')
  }
}

module.exports = CommentSchema
