<template>
  <div class="card" v-bind:data-card-id="card.id">
    <div class="card_status" :class=[card.status.code]>
      Statut : {{ card.status.name }}
    </div>
    <div class="card_title">{{ card.title }}</div>
    <div class="card_candidacy" :class=[card.candidacy.code]>
      {{ card.candidacy.name }}
    </div>
    <div class="card_compagny card_infos">
      <strong>Entreprise</strong> : 
      <span class="card_compagny-name">
        {{ card.compagny_name }}
      </span>
      <span class="card_compagny-type" :class=[card.type_compagny.code]>
        Type : {{ card.type_compagny.name }}
      </span>
      <div class="card_compagny-address">
        {{ card.compagny_address }}
      </div>
    </div>
    <div class="card_contact card_infos">
      <div>
        <strong>Contact</strong> : 
        <span class="card_contact-name">{{ card.contact_name }}</span> 
        <span class="card_contact-firstname">{{ card.contact_firstname }}</span>
      </div>
      <div class="card_contact-email">{{ card.contact_email }}</div>
      <div class="card_contact-phone">{{ card.contact_phone }}</div>
    </div>
    <div class="card_interviews card_infos" v-if="card.card_interviews.length > 0 && card.list_id >= 4">
      <div><strong>Entretiens</strong></div>
      <Interview
        v-for="interview of card.card_interviews"
        :key="interview.id"
        class="interview"
        :interview="interview"
      />
    </div>
  </div>
</template>

<script>
  import Interview from "./Interview.vue";
  export default {
    components: {
      Interview
    },
    props: {
      card: Object,
    },
    data() {

    },
  }
</script>