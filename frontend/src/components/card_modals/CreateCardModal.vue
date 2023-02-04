<template>
  <Modal
    @send="createCard()"
  >
    <template #title>Ajouter un nouveau Job</template> -->
    <template #body>
      <form action="" method="POST">
        <label for="job_title">Titre *</label>
        <input id="job_title" type="text" v-model="title">
        <label for="job_description">Description</label>
        <input id="job_description" type="text" v-model="description">
        <div>
          Entreprise
          <div>
            <label for="job_compagnyName">Nom *</label>
            <input id="job_compagnyName" type="text" v-model="compagny_name">
          </div>
          <div>
            <label for="job_compagnyAdresse">Adresse</label>
            <input id="job_compagnyAdresse" type="text" v-model="compagny_address">
          </div>
          <div>
            <label for="job_compagnyLink">Lien Web</label>
            <input id="job_compagnyLink" type="text" v-model="link">
          </div>
        </div>
        <div>
          Contact
          <div>
            <label for="job_contactName">Nom</label>
            <input id="job_contactName" type="text" v-model="contact_name">
          </div>
          <div>
            <label for="job_contactFirstName">Prénom</label>
            <input id="job_contactFirstName" type="text" v-model="contact_firstname">
          </div>
          <div>
            <label for="job_contactEmail">Email</label>
            <input id="job_contactEmail" type="email" v-model="contact_email">
          </div>
          <div>
            <label for="job_contactPhone">Téléphone</label>
            <input id="job_contactPhone" type="tel" v-model="contact_phone">
          </div>
        </div>
        
        <input type="hidden" v-model="list_id">
        <input type="hidden" v-model="status_id">
        <input type="hidden" v-model="candidacy_id">
        <input type="hidden" v-model="type_compagny_id">

      </form>
    </template>

  </Modal>

</template>

<script>
  import { createCard } from "../../service/database";
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
      }
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
      }
    }
  };
</script>