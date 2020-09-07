'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FilmSchema extends Schema {
  up () {
    this.create('films', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('films')
  }
}

module.exports = FilmSchema
