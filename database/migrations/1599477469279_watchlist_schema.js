'use strict'

const Schema = use('Schema')

class WatchlistSchema extends Schema {
  up() {
    this.create('watchlists', (table) => {
      table.increments('id')
      table.integer('user_id').unsigned().notNullable()
      table.integer('tmdb_id').unsigned().notNullable()
      table.timestamp('created_at').nullable()
      table.timestamp('updated_at').nullable()
    })
  }

  down() {
    this.drop('watchlists')
  }
}

module.exports = WatchlistSchema
