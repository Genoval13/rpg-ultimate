const knex = require('../db/knex');

const createChar = (req, res) => {
  knex('characters')
   .insert({
     name: req.body.name,
     race: req.body.race,
     class: req.body.class,
     stats: req.body.stats,
     proficiencies: req.body.proficiencies,
     background: req.body.background,
     inventory: req.body.inventory
   });
};

const getChar = (req, res) => {
  knex('characters')
    .orderBy('charId', 'asc')
    .then((char) => res.send(char));
}

module.exports = {createChar}