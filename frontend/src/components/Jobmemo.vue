<template>
  <main>
    <!-- <div v-if="false">
        Loading...
      </div>
    <div v-else class="lists-container"> -->
    <div class="lists-container">
      <List
        v-for="list of lists"
        :key="list.id"
        :list="list"
        :typesList="{
          typesCompagny: typesCompagny,
          typesCandidacies: typesCandidacies,
        }"
        @cardCreated="refreshLists()"
        @cardDeleted="refreshLists()"
      />
      <div id="modals"></div>
    </div>
  </main>
</template>

<script>
  import { fetchAllLists, fetchAllTypesCompagny, fetchAllCandidacies } from "../service/database";
  import List from "./List.vue";

  export default {
    components: {
      List,
    },

    data() {
      return {
        lists: [],
        typesCompagny: [],
        typesCandidacies: [],
        // isLoading: true,
      }
    },
    
    created() {
      this.refreshLists();
      this.listTypesCompagny();
      this.listCandidacies();
      // this.loadingLists();
    },

    // provide() {
    //   return {
    //     listsObject: {
    //       typesCompagny: this.typesCompagny,
    //       typesCandidacies: this.typesCandidacies,
    //     },
    //   }
    // },
    
    methods: {
      async refreshLists() {
        this.lists = await fetchAllLists();
        if (!this.lists) {
          throw new Error('Erreur de chargement des données');
        }
      },
      // async loadingLists() {
      //   this.typesCompagny = await fetchAllTypesCompagny();
      //   if (!this.typesCompagny) {
      //     throw new Error('Erreur de chargement des données');
      //   }
      //   this.typesCandidacies = await fetchAllCandidacies();
      //   if (!this.typesCandidacies) {
      //     throw new Error('Erreur de chargement des données');
      //   }
      //   this.isLoading = false;
      // },
      async listTypesCompagny() {
        this.typesCompagny = await fetchAllTypesCompagny();
        if (!this.typesCompagny) {
          throw new Error('Erreur de chargement des données');
        }
        this.isLoading = false;
      },
      async listCandidacies() {
        this.typesCandidacies = await fetchAllCandidacies();
        if (!this.typesCandidacies) {
          throw new Error('Erreur de chargement des données');
        }
        this.isLoading = false;
      }
    },
  }
</script>

<style lang="scss" scoped>
  .lists-container {
    display: flex;
    column-gap: .5rem;
    row-gap: 1rem;
    flex-wrap: wrap;
  }
</style>
