'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up() {
    this.create('users', (table) => {
      table.increments('id')
      table.string('full_name').notNullable().collate('utf8mb4_unicode_ci')
      table.string('username').unique().notNullable().collate('utf8mb4_unicode_ci')
      table.string('email').unique().notNullable().collate('utf8mb4_unicode_ci')
      table.string('profile_picture').notNullable().collate('utf8mb4_unicode_ci')
      table.string('password').notNullable().collate('utf8mb4_unicode_ci')
      table.string('api_token').unique().notNullable().collate('utf8mb4_unicode_ci')
      table.timestamp('created_at').nullable()
      table.timestamp('updated_at').nullable()
      table.timestamp('deleted_at').nullable()
    })
  }

  down() {
    this.drop('users')
  }
}

module.exports = UserSchema
