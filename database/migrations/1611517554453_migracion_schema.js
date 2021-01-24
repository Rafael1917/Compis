'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MigracionSchema extends Schema {
  up () {
    this.create('personas', (table) => {
      table.increments()
      table.string('nombre', 80).notNullable()
      table.string('appa', 80).notNullable()
      table.string('apma', 80).notNullable()
      table.string('sexo', 80).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('migracions')
  }
}

module.exports = MigracionSchema
