'use strict'

const Schema = use('Schema')

class ReviewSchema extends Schema {
  up() {
    this.create('reviews', (table) => {
      table.increments('id')
      table.integer('user_id').unsigned().notNullable()
      table.integer('tmdb_id').unsigned().notNullable()
      table.specificType('rating', 'double').unsigned().notNullable()
      table
        .text('review_detail', 'longtext')
        .notNullable()
        .collate('utf8mb4_unicode_ci')
      table.date('review_date').notNullable()
      table.date('watch_date').notNullable()
      table.timestamp('created_at').nullable()
      table.timestamp('updated_at').nullable()
      table.timestamp('deleted_at').nullable()
    })
  }

  down() {
    this.drop('reviews')
  }
}

module.exports = ReviewSchema
