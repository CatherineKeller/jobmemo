<template>
  <main>
    <div class="lists-container">
      <List
        v-for="list of lists"
        :key="list.id"
        :list="list"
        @cardCreated="refreshLists()"
        @cardDeleted="refreshLists()"
      />
    </div>
  </main>
</template>

<script>
  import { fetchAllLists } from "../service/database";
  import List from "./List.vue";

  export default {
    components: {
      List
    },
    data() {
      return {
        lists: []
      }
    },
    async created() {
      this.refreshLists();
    },
    methods: {
      async refreshLists() {
        this.lists = await fetchAllLists();
        if (!this.lists) {
          throw new Error('Erreur de chargement des données');
        }
      },
    }
  }
</script>

<style scoped>

</style>
