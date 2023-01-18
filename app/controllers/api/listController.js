const { List } = require('../../models');

const listController = {
  getAllLists: async (_, res) => {
    const lists = await List.findAll({
      order: [
        ['position', 'ASC'],
        ['cards', 'position', 'ASC'],
      ],
      include: [
        {
          association: 'cards',
          include: [
            { association: 'status' },
            { association: 'candidacy' },
            { association: 'type_compagny' },
            { association: 'card_interviews' },
          ],
        },
        {
          association: 'list_type',
        },
      ],
    });
    // Attention avec cette approche de deep includes pour les API REST :
    // on alourdit grandement la taille (en bits) de la réponse API donc son temps de réponse
    // (via le temps de transfert sur le réseau)
    res.status(200).json(lists);
  },

};

module.exports = listController;
