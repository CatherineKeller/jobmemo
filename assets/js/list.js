// export const listModule = {
const listModule = {

  /**
   * Méthode permettant de rajouter une liste dans le DOM
   * @param {{id: Number, name: String}} list
   */
  makeListInDOM(list) {
    // Template
    const templateListElm = document.querySelector('#templateList');
    // Clone template
    const cloneListElm = document.importNode(templateListElm.content, true);

    // List Content
    // J'ajoute l'id de la liste
    const listElm = cloneListElm.querySelector('[data-list-id]');
    const listId = list.id;
    listElm.dataset.listId = listId;

    // Title
    const titleElm = cloneListElm.querySelector('.list_title');
    titleElm.textContent = list.list_type.name;

    // Je récupère le container des listes
    const listsContainerElm = document.querySelector('.lists-container');
    // Je rajoute ma liste dans le DOM
    listsContainerElm.appendChild(cloneListElm);
  },

  /**
   * Méthode qui va récupérer les listes depuis l'API
   */
  async getListsFromAPI() {
    try {
      const response = await fetch('http://localhost:3000/lists');
      if(!response.ok) {
        throw new Error('Erreur de chargement des données');
      }
      const lists = await response.json();
      for(const list of lists) {
        listModule.makeListInDOM(list);

        for(const card of list.cards) {
          cardModule.makeCardInDOM(card);
        }
      }
    } catch (error) {
      console.trace(error);
    }
  }

}
