<template>
  <Modal
    :listId="listId"
    @cancel-modal="cancel()"
    @close-modal="$emit('close-modal')"
    @send-modal="validateForm()"
  >
    <template #title>Ajouter un nouveau Job</template>
    <template #body>
      <form action="" method="POST">
        <div class="job_title">
          <label for="job_title">Titre *</label>
          <input id="job_title" type="text" v-model="title" aria-required="true" required="required">
          <div class="error" v-if="error.title">{{error.title}}</div>
        </div>
        <div>
          <label for="job_candidacy">Type d'offre <span>*</span></label>
          <select id="job_candidacy" v-model="candidacy_id" name="candidacy_id">
            <option disabled value="">Choisissez</option>
            <option v-for="candidacy in typesList.typesCandidacies" :key="candidacy.id" :value="candidacy.id">
              {{ candidacy.name }}
            </option>
          </select>
          <div class="error" v-if="error.candidacy_id">{{error.candidacy_id}}</div>
        </div>
        <label for="job_description">Description</label>
        <input id="job_description" type="text" v-model="description" name="description">
        <div>
          Entreprise
          <div>
            <label for="job_compagnyName">Nom *</label>
            <input id="job_compagnyName" type="text" v-model="compagny_name" name="compagny_name">
            <div class="error" v-if="error.compagny_name">{{error.compagny_name}}</div>
          </div>
          <div>
            <label for="job_compagnyAdresse">Adresse</label>
            <input id="job_compagnyAdresse" type="text" v-model="compagny_address" name="compagny_address">
          </div>
          <div>
            <label for="job_compagnyLink">Lien Web</label>
            <input id="job_compagnyLink" type="text" v-model="link" name="link">
            <div class="error" v-if="error.link">{{error.link}}</div>
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
            <div class="error" v-if="error.contact_email">{{error.contact_email}}</div>
          </div>
          <div>
            <label for="job_contactPhone">Téléphone</label>
            <input id="job_contactPhone" type="tel" v-model="contact_phone" name="contact_phone">
          </div>
        </div>
        <div>
          <label for="job_typeCompagny">Type d'entreprise <span>*</span></label>
          <select id="job_typeCompagny" v-model="type_compagny_id" name="type_compagny_id">
            <option disabled value="">Choisissez</option>
            <option v-for="type in typesList.typesCompagny" :key="type.id" :value="type.id">
              {{ type.name }}
            </option>
          </select>
          <div class="error" v-if="error.link">{{error.link}}</div>
        </div>
        <input type="hidden" v-model="list_id" name="list_id">
        <input type="hidden" v-model="status_id" name="status_id">
        <div class="error" v-if="error.type_compagny_id">{{error.type_compagny_id}}</div>
      </form>
    </template>

  </Modal>

</template>

<script>
  import { createCard, fetchAllTypesCompagny, fetchAllCandidacies } from "../../service/database";
  import Modal from "./Modal.vue";
  import { schemas } from "../validation/card.schemas";

  export default {
    components: {
      Modal,
    },
    props: {
      listId: Number,
      // modaleTypesCompagny: Array,
      // modaleTypesCandidacies: Array,
      typesList: Object,
    },
    // inject: ['listsObject'],
    data() {
      return {
        title: '',
        description: '',
        link: '',
        compagny_name: '',
        compagny_address: '',
        contact_name: '',
        contact_firstname: '',
        contact_email: '',
        contact_phone: '',
        notes: '',
        position: 1,
        status_id: 1,
        candidacy_id: '',
        type_compagny_id: '',
        list_id: this.listId,
        error: [],
        errors: [],
      }
    },
    // async created() {
    //   this.listTypesCompagny();
    //   this.listCandidacies();
    // },
    methods: {
      initForm() {
        // Initialisation des champs
        this.title = '';
        this.description ='';
        this.link = '';
        this.compagny_name = '';
        this.compagny_address = '';
        this.contact_name = '';
        this.contact_firstname = '';
        this.contact_email = '';
        this.contact_phone = '';
        this.notes = '';
        this.candidacy_id = '';
        this.type_compagny_id = '';
        this.error = {};    
      },

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
        this.$emit("created");
        this.$emit('close-modal');

        // Initialisation des champs
        this.initForm();
      },
      validateForm() {
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
          list_id: this.listId,
        };
        const { error } = schemas.validate(cardToCreate, { abortEarly: false });
        if (!error) {
        // form data is valid
          this.createCard();
        } else {
          // form data is invalid, show the error messages
          const errors = error.details.map(error => ({message: error.message, key: error.context.key }));
          console.log("ERRORS", errors);
          this.error = {};
          errors.forEach(error => {
            this.error[error.key] = error.message;
          });
        }
      },
      cancel() {
        console.log("cancel()");
        // Initialisation des champs
        this.initForm();
        this.$emit('close-modal');
      }
      // async listTypesCompagny() {
      //   this.typesCompagny = await fetchAllTypesCompagny();
      //   if (!this.typesCompagny) {
      //     throw new Error('Erreur de chargement des données');
      //   }
      // },
      // async listCandidacies() {
      //   this.candidacies = await fetchAllCandidacies();
      //   if (!this.candidacies) {
      //     throw new Error('Erreur de chargement des données');
      //   }
      // }


    }
  };
</script>