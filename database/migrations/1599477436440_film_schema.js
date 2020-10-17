'use strict'

const Schema = use('Schema')

class FilmSchema extends Schema {
  up() {
    this.create('films', (table) => {
      table.increments('id')
      table.integer('tmdb_id').unique().unsigned().notNullable()
      table.specificType('genre_id', 'smallint').unsigned().notNullable()
      table.string('title').notNullable().collate('utf8mb4_unicode_ci')
      table.date('release_date').notNullable()
      table.string('poster').notNullable().collate('utf8mb4_unicode_ci')
      table.timestamp('created_at').nullable()
      table.timestamp('updated_at').nullable()
    })
  }

  down() {
    this.drop('films')
  }
}

module.exports = FilmSchema
