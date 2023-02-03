<template>
  <div v-bind:id="'list_' + list.id" class="list" :class=[list.list_type.code] v-bind:data-list-id="list.id">
    <div class="list_title">{{ listTitle }}</div>
    <!-- <button @click="addCard" v-bind:title="message">Ajouter une offre {{ addOffreMessage }}</button>
    <p>{{ inputMessage }} {{ compteur }}</p>
    <input v-model="inputMessage" />
    <p v-if="seen">Message caché true/false</p> -->
    <div class="list_cards">
      <span v-if="list.cards.length === 0">Aucune offre</span>
      <Card
        v-for="card of list.cards"
        :key="card.id"
        class="card"
        :card="card"
      />
    </div>
  </div>
</template>

<script>
  import Card from "./Card.vue";
  export default {
    components: {
      Card,
    },
    props: {
      list: Object,
    },
    data() {
      return {
        listTitle: this.listname(this.list),
        // compteur: 0,
        // message: this.listname(this.list),
        // addOffreMessage: '',
        // inputMessage: 'Hello',
        // seen: false,
      }
    },
    created() {
      
    },
    mounted() {
      setInterval(() => {
        this.compteur++
      }, 1000)
    },
    methods: {
      addCard() {
        this.addOffreMessage = 'ok';
        // this.$emit('add-card', this.list.id);
      },
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