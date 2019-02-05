
exports.up = function(knex, Promise) {
  return knex.schema.createTable('characters', function (table) {
    table.increments('charId');
    table.string('name');
    table.string('race');
    table.string('class');
    table.string('stats');
    table.string('proficiencies');
    table.string('background');
    table.string('inventory');
    table.timestamps();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('characters');
};
