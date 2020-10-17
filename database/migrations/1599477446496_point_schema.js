'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PointSchema extends Schema {
  up() {
    this.create('points', (table) => {
      table.increments('id')
      table.integer('user_id').unsigned().notNullable()
      table.integer('type_id').unsigned().notNullable()
      table.specificType('total', 'tinyint').notNullable()
      table
        .enu('type', ['FAVORITE', 'REVIEW', 'WATCHLIST'])
        .notNullable()
        .collate('utf8mb4_unicode_ci')
      table.timestamp('created_at').nullable()
      table.timestamp('updated_at').nullable()
    })
  }

  down() {
    this.drop('points')
  }
}

module.exports = PointSchema
