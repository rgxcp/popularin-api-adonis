'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FollowingSchema extends Schema {
  up() {
    this.create('followings', (table) => {
      table.increments('id')
      table.integer('user_id').unsigned().notNullable()
      table.integer('following_id').unsigned().notNullable()
      table.timestamp('created_at').nullable()
      table.timestamp('updated_at').nullable()
    })
  }

  down() {
    this.drop('followings')
  }
}

module.exports = FollowingSchema
