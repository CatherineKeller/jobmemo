const cardModule = {
  makeCardInDOM(card){
    // Template
    const templateCardElm = document.querySelector('#templateCard');
    // Clone template
    const cloneCardElm = document.importNode(templateCardElm.content, true);

    // List Content
    // J'ajoute l'id de la liste
    const cardElm = cloneCardElm.querySelector('[data-card-id]');
    const cardId = card.id;
    cardElm.dataset.cardId = cardId;

    // Title
    const titleElm = cloneCardElm.querySelector('.card_title');
    console.log(card);
    titleElm.textContent = card.title;

    // Je récupère le container des listes
    const cardContainerElm = document.querySelector('.list_cards');
    // Je rajoute ma liste dans le DOM
    cardContainerElm.appendChild(cloneCardElm);
  }

}
