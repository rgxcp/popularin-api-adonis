'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PointSchema extends Schema {
  up () {
    this.create('points', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('points')
  }
}

module.exports = PointSchema
