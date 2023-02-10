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
    <div v-if="list.list_type.code != 'completed'">
      <button @click="showModal = true" class="button">+ Ajouter un Job</button>
      <Teleport to="#modals">
        <CreateCardModal
          v-if="showModal"
          @close-modal="showModal = false"
          :listId="list.id"
          :typesList="typesList"
          :key="list.id"
          @created="$emit('cardCreated')"
        />
      </Teleport>
    </div>
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
      // typesCompagny: Array,
      // typesCandidacies: Array,
      typesList: Object,
    },
    data() {
      return {
        listTitle: this.listname(this.list),
        showModal: false,
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
      },
      test() {
        console.log('test')
      }

    }
  }
</script>

<style lang="scss" scoped>
  .list {
    width: calc(100% / 4 - .5rem);
    background-color: #F2F2F2;
    padding: 1rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    min-width: 250px;

    &_title {
      font-weight: 1.3rem;
      font-weight: 700;
      text-align: center;
      text-transform: uppercase;
      margin-bottom: 1rem;
    }
    &_cards {
      flex-grow: 1;
    }

    &.completed {
      width: calc(100% - .5rem);
      & .list_cards {
        display: flex;
        column-gap: 1rem;
        row-gap: 1rem;
        flex-wrap: wrap;
      }
      & .card {
        margin: 0;
        width: 300px;
      }
    }
    // &:not(:last-child){
    //   border-right: 1px solid #666666;
    // }
  }
</style>