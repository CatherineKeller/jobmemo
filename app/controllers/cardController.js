const { Card, List } = require('../models');

const cardController = {
  getAllCards: async (_, res) => {
    const cards = await Card.findAll({
      order: [
        ['position', 'ASC'],
        ['created_at', 'DESC']
      ],
      include: [
        { association: 'status' },
        { association: 'candidacy' },
        { association: 'type_compagny' },
        { association: 'card_interviews' },
      ]
    });

    // Réponse
    res.status(200).json(cards);
  },
  createCard: async (req, res) => {
    // Parsing
    const { title, link, compagny_name, compagny_address, contact_name, contact_firstname, contact_email, contact_phone, status_id, candidacy_id, type_compagny_id, list_id, position } = req.body;
    console.log(req.body);

    // Tests
    if (! title) {
      return res.status(400).json({ error: "Missing body (or empty) parameter: 'title'." });
    }

    if (! list_id) {
      return res.status(400).json({ error: "Missing body parameter: 'list_id'."});
    }

    if (position && isNaN(position)) { // Si il y a une position mais pas au format number, on bloque
      return res.status(400).json({ error: "Invalid type: 'position' should be a number." });
    }

    if (! await cardController.doesListExist(list_id)) { // Si la liste dans laquelle la carte apparaitra n'existe pas, on bloque
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
      status_id: parseInt(status_id),
      candidacy_id: parseInt(candidacy_id),
      type_compagny_id: parseInt(type_compagny_id),
      list_id: parseInt(list_id),
      position: position ? parseInt(position) : 0, // On prend la position demandée, mais si cette position est undefined, on met 0
    });

    // Réponse
    res.status(201).json(card);
  },
  doesListExist: async (listId) => {
    const list = await List.findByPk(listId);
    return !! list; // Si list est null, alors ça vaut false. Si list vaut { ... } ça vaut true.
  },
};

module.exports = cardController;
