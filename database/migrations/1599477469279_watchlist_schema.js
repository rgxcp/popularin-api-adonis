'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class WatchlistSchema extends Schema {
  up () {
    this.create('watchlists', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('watchlists')
  }
}

module.exports = WatchlistSchema
