<template>
  <div class="modal">
    <header class="modal-card-head">
      <div class="modal-card-title">
        <slot name="title"></slot>
      </div>
      <button class="modal-close" aria-label="close" @click="closeModal"></button>
    </header>
    <section class="modal-card-body">
      <slot name="body"></slot>
    </section>
    <footer class="modal-card-foot">
      <button type="submit" class="button is-success" @click="send">Envoyer</button>
      <button class="button" @click="cancel">Annuler</button>
    </footer>
  </div>
</template>

<script>
  export default {
    props: {
    },
    methods: {
      send() {
        this.$emit('send');
        // this.closeModal();
      },
      cancel() {
        // this.$emit('cancel');
        // this.closeModal();
      },
      closeModal() {
        // this.closeModal();
      }
    }
  }
</script>