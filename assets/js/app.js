// import Sortable from 'sortablejs';
import { cardModule } from './card';
import { listModule } from './list';
// import { cardModule } from './card';

const app = {
  init: function () {
    console.log('app.init !');
    app.addListenerToActions();
    listModule.getListsFromAPI();
  },
  /**
   * Ajoute les écouteurs d'évènements au chargement de ma page
   */
  addListenerToActions: function () {
    // Ajout d'une card
    const formAddCardElm = document.querySelector('#card_add form');
    formAddCardElm.addEventListener('submit', cardModule.handleAddCardForm);
  }
};

document.addEventListener('DOMContentLoaded', app.init );
