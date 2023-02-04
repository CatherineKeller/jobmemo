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
    debug('cardController.getAllCards');
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
    return res.status(200).json(cards);
  },

  async getOneCard(_, res) {

  },

  /**
   * Add a job
   * @returns {job} an object with the added job
   */
  async createCard(req, res) {
    debug(req.body, 'cardController.createCard');
    // Parsing
    const {
      title, link, compagny_name, compagny_address, contact_name, contact_firstname, contact_email,
      contact_phone, status_id, candidacy_id, type_compagny_id, list_id, position,
    } = req.body;

    // Tests
    if (!list_id) {
      return res.status(400).json({ error: "Missing body parameter: 'list_id'." });
    }
    // Si la liste dans laquelle la carte apparaitra n'existe pas, on bloque
    if (!await cardController.doesListExist(list_id)) {
      return res.status(400).json({ error: "Invalid body parameter: 'list_id' does not exist." });
    }
    if (!title) {
      return res.status(400).json({ error: "Missing body (or empty) parameter: 'title'." });
    }
    // Si il y a une position mais pas au format number, on bloque
    if (position && Number.isNaN(position)) {
      return res.status(400).json({ error: "Invalid type: 'position' should be a number." });
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
    return res.status(201).json(card);
  },
  doesListExist: async (listId) => {
    const list = await List.findByPk(listId);
    return !!list; // Si list est null, alors ça vaut false. Si list vaut { ... } ça vaut true.
  },

  /**
   * Update a job
   * @returns {job} an object with the updated job
   */
  async updateCard(req, res) {
    // Parsing
    const { id: cardId } = req.params;
    const {
      title, link, compagny_name, compagny_address, contact_name, contact_firstname, contact_email,
      contact_phone, status_id, candidacy_id, type_compagny_id, list_id, position,
    } = req.body;

    // Tests
    if (!title && !link && !compagny_name && !compagny_address && !contact_name
      && !contact_firstname && !contact_email && !contact_phone && !status_id
      && !candidacy_id && !type_compagny_id && !list_id && !position) {
      return res.status(400).json({ error: 'Invalid body. Should provide at least a property' });
    }
    // Si la liste dans laquelle la carte apparaitra n'existe pas, on bloque
    if (list_id && !await cardController.doesListExist(list_id)) {
      return res.status(400).json({ error: "Invalid body parameter: 'list_id' does not exist." });
    }

    // Traitement

    // On récupère la carte à modifier
    const card = await Card.findByPk(cardId);
    if (!card) {
      return res.status(404).json({ error: 'Card not found.' });
    }

    if (title) card.title = title;
    if (link) card.link = link;
    if (compagny_name) card.compagny_name = compagny_name;
    if (compagny_address) card.compagny_address = compagny_address;
    if (contact_name) card.contact_name = contact_name;
    if (contact_firstname) card.contact_firstname = contact_firstname;
    if (contact_email) card.contact_email = contact_email;
    if (contact_phone) card.contact_phone = contact_phone;
    if (status_id) card.status_id = status_id;
    if (candidacy_id) card.candidacy_id = candidacy_id;
    if (type_compagny_id) card.type_compagny_id = type_compagny_id;
    if (list_id) card.list_id = list_id;
    if (position) card.position = position;

    await card.save();

    // Réponse
    return res.status(200).json(card);
  },

  /**
   * Delete a job
   * @returns
   */
  async deleteCard(req, res) {
    const { id: cardId } = req.params;

    const card = await Card.findByPk(cardId);
    if (!card) {
      return res.status(404).json({ error: 'Card not found.' });
    }

    // Traitement
    await card.destroy();

    // Réponse
    return res.status(204).end();
  },
};

module.exports = cardController;
