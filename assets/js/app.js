// import Sortable from 'sortablejs';
import { listModule } from './list';
// import { cardModule } from './card';

const app = {
  init: function () {
    console.log('app.init !');
    listModule.getListsFromAPI();
  },
};

document.addEventListener('DOMContentLoaded', app.init );
