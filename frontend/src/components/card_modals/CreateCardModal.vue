<template>
  <Modal
    @send="createCard()"
  >
    <template #title>Ajouter un nouveau Job</template>
    <template #body>
      <form action="" method="POST">
        <label for="job_title">Titre *</label>
        <input id="job_title" type="text" v-model="title">
        <label for="job_description">Description</label>
        <input id="job_description" type="text" v-model="description" name="description">
        <div>
          Entreprise
          <div>
            <label for="job_compagnyName">Nom *</label>
            <input id="job_compagnyName" type="text" v-model="compagny_name" name="compagny_name">
          </div>
          <div>
            <label for="job_compagnyAdresse">Adresse</label>
            <input id="job_compagnyAdresse" type="text" v-model="compagny_address" name="compagny_address">
          </div>
          <div>
            <label for="job_compagnyLink">Lien Web</label>
            <input id="job_compagnyLink" type="text" v-model="link" name="link">
          </div>
        </div>
        <div>
          Contact
          <div>
            <label for="job_contactName">Nom</label>
            <input id="job_contactName" type="text" v-model="contact_name" name="contact_name">
          </div>
          <div>
            <label for="job_contactFirstName">Prénom</label>
            <input id="job_contactFirstName" type="text" v-model="contact_firstname" name="contact_firstname">
          </div>
          <div>
            <label for="job_contactEmail">Email</label>
            <input id="job_contactEmail" type="email" v-model="contact_email" name="contact_email">
          </div>
          <div>
            <label for="job_contactPhone">Téléphone</label>
            <input id="job_contactPhone" type="tel" v-model="contact_phone" name="contact_phone">
          </div>
        </div>
        <div>
          <label for="job_typeCompagny">Type d'entreprise</label>
          <select id="job_typeCompagny" v-model="type_compagny_id" name="type_compagny_id">
            <option disabled value="">Choisissez</option>
            <option v-for="type in typesCompagny" :key="type.id" :value="type.id">
              {{ type.name }}
            </option>
          </select>
        </div>
        <input type="hidden" v-model="list_id" name="list_id">
        <input type="hidden" v-model="status_id" name="status_id">
        <input type="hidden" v-model="candidacy_id" name="candidacy_id">
      </form>
    </template>

  </Modal>

</template>

<script>
  import { createCard } from "../../service/database";
  import { fetchAllTypesCompagny } from "../../service/database";
  import Modal from "./Modal.vue";

  export default {
    components: {
      Modal,
    },
    props: {
      listId: Number
    },
    data() {
      return {
        title: "",
        description: '',
        link: 'https://',
        compagny_name: '',
        compagny_address: '',
        contact_name: '',
        contact_firstname: '',
        contact_email: '',
        contact_phone: '',
        notes: '',
        position: 1,
        status_id: 1,
        candidacy_id: 1,
        type_compagny_id: 1,
        list_id: this.listId,
        typesCompagny: [],
      }
    },
    async created() {
      this.listTypesCompagny();
    },
    methods: {
      async createCard() {
        console.log("createCard()");
        const cardToCreate = {
          title: this.title,
          description: this.description,
          link: this.link,
          compagny_name: this.compagny_name,
          compagny_address: this.compagny_address,
          contact_name: this.contact_name,
          contact_firstname: this.contact_firstname,
          contact_email: this.contact_email,
          contact_phone: this.contact_phone,
          notes: this.notes,
          position: this.position,
          status_id: this.status_id,
          candidacy_id: this.candidacy_id,
          type_compagny_id: this.type_compagny_id,
          listId: this.listId
        };
        console.log(cardToCreate);
        await createCard(cardToCreate);
        // this.content = "";
        this.$emit("created");
      },
      async listTypesCompagny() {
        this.typesCompagny = await fetchAllTypesCompagny();
        console.log(typesCompagny);
        if (!this.typesCompagny) {
          throw new Error('Erreur de chargement des données');
        }
      }
    }
  };
</script>