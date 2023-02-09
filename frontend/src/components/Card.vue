<template>
  <div class="card" v-bind:data-card-id="card.id">
    <button class="delete" @click="deleteCard">X</button>
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
  import { deleteCard } from "../service/database";

  export default {
    components: {
      Interview
    },
    props: {
      card: Object,
    },
    methods: {
      async deleteCard() {
        console.log("deleteCard()");
        await deleteCard(this.card.id);
        this.$emit("deleted");
      }
    }
  }
</script>

<style lang="scss" scoped>
  strong {
    font-weight: 700;
  }
  .card {
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0,0,0,.1);
    padding: 1rem;
    position: relative;
    line-height: 1.2;

    &:not(:last-child) {
      margin-bottom: 1rem;
    }

    &_status {
      position: absolute;
      top: 0;
      right: 0;
      text-transform: uppercase;
      font-size: .7rem;
      text-align: right;
      display: inline-block;
      padding: 0.2rem 0.4rem;
      & span {
        font-weight: 700;
      }
      // colors
      &.inprogress {
        background-color: #dfdfdf;
      }
      &.won {
        background-color: #a5ff7c;
      }
      &.refuse {
        background-color: #ffc1a5;
      }
    }

    &_title {
      font-size: 1.2rem;
      font-weight: 700;
      margin-bottom: .5rem;
    }

    &_contact-phone:before {
      content: "Tél.";
    }

    &_compagny,
    &_contact,
    &_interviews {
      margin-top: .5rem;
    }

    &_compagny-type {
      padding: 0.1rem 0.3rem;
      border-radius: 5px;
      &.esn {
        background-color: rgb(241, 195, 255);
      }
      &.pme {
        background-color: #a9ce97;
      }
      &.tpe {
        background-color: #a9ce97;
      }
      &.grande {
        background-color: #a9ce97;
      }
    }
  }
  .card_infos {
    font-size: .9rem;
  }

  // Entretiens
  .card_interviews {

  }
</style>