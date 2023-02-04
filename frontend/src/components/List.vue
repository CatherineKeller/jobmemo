<template>
  <div v-bind:id="'list_' + list.id" class="list" :class=[list.list_type.code] v-bind:data-list-id="list.id">
    <div class="list_title">{{ listTitle }}</div>
    <div class="list_cards">
      <span v-if="list.cards.length === 0">Aucune offre</span>
      <Card
        v-for="card of list.cards"
        :key="card.id"
        class="card"
        :card="card"
        @deleted="$emit('cardDeleted')"
      />
    </div>
    <CreateCardModal
      :listId="list.id"
      @created="$emit('cardCreated')"
    />
  </div>
</template>

<script>
  import Card from "./Card.vue";
  import { CreateCardModal } from "./card_modals";

  export default {
    components: {
      Card,
      CreateCardModal,
    },
    props: {
      list: Object,
    },
    data() {
      return {
        listTitle: this.listname(this.list),
      }
    },
    methods: {
      listname(list) {
        let listNameFr;
        switch (list.list_type.code) {
          case 'added':
          listNameFr = 'Je vais postuler';
            break;
          case 'applied':
          listNameFr = 'J\'ai postulé';
            break;
          case 'renewed':
          listNameFr = 'J\'ai relancé';
            break;
          case 'interview':
          listNameFr = 'J\'ai un entretien';
            break;
          case 'completed':
          listNameFr = 'Terminé';
            break;
          default:
        }
        return listNameFr;
      }
    }
  }
</script>