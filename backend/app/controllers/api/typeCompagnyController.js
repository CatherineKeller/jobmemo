/**
 * @typedef {object} typeCompagny
 * @property {string} name - in french the name
 * @property {string} code - the code typeCompagny

/**
 * @typedef {object} error
 * @property {string} error - description error
 */

const debug = require('debug')('jobmemo:typeCompagnyController');
const {
  TypeCompagny,
} = require('../../models');

const typeCompagnyController = {

  /**
   * Display all typeCompagny
   * @returns {object} an object with all types Compagny
   */
  async getAllTypesCompagny(_, res) {
    debug('typeCompagny.getAllTypesCompagny');
    const typesCompagny = await TypeCompagny.findAll({
      order: [
        ['name', 'ASC'],
      ],
    });

    // Réponse
    return res.status(200).json(typesCompagny);
  },
};

module.exports = typeCompagnyController;
