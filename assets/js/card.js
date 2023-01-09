export const cardModule = {
  makeCardInDOM(card){
    console.log(card);
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
    titleElm.textContent = card.title;
    // Compagny Name
    const compagnyNameElm = cloneCardElm.querySelector('.card_compagny-name');
    compagnyNameElm.textContent = card.compagny_name;
    // Compagny Type
    const compagnyTypeElm = cloneCardElm.querySelector('.card_compagny-type span');
    compagnyTypeElm.textContent = card.type_compagny.name;
    // Status
    const cardStatusElm = cloneCardElm.querySelector('.card_status span');
    cardStatusElm.textContent = card.status.name;

    // Je récupère le container des listes
    const cardContainerElm = document.querySelector('.list_cards');
    // Je rajoute ma liste dans le DOM
    cardContainerElm.appendChild(cloneCardElm);
  }

}
