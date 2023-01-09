const { Card } = require('../models');

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
      ]
    });

    // Réponse
    res.status(200).json(cards);
  },
};

module.exports = cardController;
