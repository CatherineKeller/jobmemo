/**
 * @typedef {object} candidacy
 * @property {string} name - in french the name
 * @property {string} code - the code candidacy

/**
 * @typedef {object} error
 * @property {string} error - description error
 */

const debug = require('debug')('jobmemo:candidacyController');
const {
  Candidacy,
} = require('../../models');

const candidacyController = {

  /**
   * Display all Candidacies
   * @returns {object} an object with all Candidacies
   */
  async getAllCandidacies(_, res) {
    debug('typeCompagny.getAllTypesCompagny');
    const candidacies = await Candidacy.findAll({
      order: [
        ['name', 'ASC'],
      ],
    });

    // Réponse
    return res.status(200).json(candidacies);
  },
};

module.exports = candidacyController;
