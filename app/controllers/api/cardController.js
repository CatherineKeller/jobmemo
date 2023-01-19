/* eslint-disable max-len */
/* eslint-disable camelcase */

/**
 * @typedef {object} job
 * @property {string} title - title of the job
 * @property {string} compagny_name - name of the compagy
 * @property {string} compagny_address - address of the compagy
 * @property {string} link - link of the compagny
 * @property {string} contact_name - name of the contact
 * @property {string} contact_firstname - firstname of the contact
 * @property {string} contact_email - email of the contact
 * @property {string} contact_phone - phone of the contact
 * @property {number} status_id - id (FK) status of candidacy (inprogress,won,refuse)
 * @property {number} candidacy_id - id (FK) candidacy of job (offer,spontaneous,network,other)
 * @property {number} type_compagny_id - id (FK) type compagny of job (esn,tpe,pme,ge,startup,cabinet_recrutement)
 * @property {number} list_id - id (FK) columns (status of search) (added,applied,renewed,interview,completed)
 * @property {number} position - position of the card
 */

/**
 * @typedef {object} error
 * @property {string} error - description error
 */

const debug = require('debug')('jobmemo:cardController');
const {
  Card, List, Status, Candidacy, TypeCompagny,
} = require('../../models');

const cardController = {
  /**
   * Display all jobs
   * @returns {object} an object with all jobs
   */
  async getAllCards(_, res) {
    debug('get all jobs');
    const cards = await Card.findAll({
      order: [
        ['position', 'ASC'],
        ['created_at', 'DESC'],
      ],
      include: [
        { association: 'status' },
        { association: 'candidacy' },
        { association: 'type_compagny' },
        { association: 'card_interviews' },
      ],
    });

    // Réponse
    res.status(200).json(cards);
  },

  /**
   * Add a job
   * @returns {job} an object with the added job
   */
  async createCard(req, res) {
    // Parsing
    const {
      title, link, compagny_name, compagny_address, contact_name, contact_firstname, contact_email,
      contact_phone, status_id, candidacy_id, type_compagny_id, list_id, position,
    } = req.body;

    // Tests
    if (!title) {
      return res.status(400).json({ error: "Missing body (or empty) parameter: 'title'." });
    }

    if (!list_id) {
      return res.status(400).json({ error: "Missing body parameter: 'list_id'." });
    }

    // Si il y a une position mais pas au format number, on bloque
    if (position && Number.isNaN(position)) {
      return res.status(400).json({ error: "Invalid type: 'position' should be a number." });
    }

    // Si la liste dans laquelle la carte apparaitra n'existe pas, on bloque
    if (!await cardController.doesListExist(list_id)) {
      return res.status(400).json({ error: "Invalid body parameter: 'list_id' does not exist." });
    }

    // Traitement
    const card = await Card.create({
      title,
      link,
      compagny_name,
      compagny_address,
      contact_name,
      contact_firstname,
      contact_email,
      contact_phone,
      status_id: parseInt(status_id, 10),
      candidacy_id: parseInt(candidacy_id, 10),
      type_compagny_id: parseInt(type_compagny_id, 10),
      list_id: parseInt(list_id, 10),
      // On prend la position demandée, mais si cette position est undefined, on met 0
      position: position ? parseInt(position, 10) : 0,
    });

    const status = await Status.findByPk(status_id);
    card.dataValues.status = status;

    const candidacy = await Candidacy.findByPk(candidacy_id);
    card.dataValues.candidacy = candidacy;

    const type_compagny = await TypeCompagny.findByPk(type_compagny_id);
    card.dataValues.type_compagny = type_compagny;

    // Réponse
    res.status(201).json(card);
  },
  doesListExist: async (listId) => {
    const list = await List.findByPk(listId);
    return !!list; // Si list est null, alors ça vaut false. Si list vaut { ... } ça vaut true.
  },
};

module.exports = cardController;