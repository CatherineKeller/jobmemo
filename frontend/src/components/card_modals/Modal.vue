<template>
  <div v-bind:id="listId" class="modal-overlay">
    <div class="modal">
      <header class="modal-card-head">
        <div class="modal-card-title">
          <slot name="title"></slot>
        </div>
        <button class="modal-close" aria-label="close" @click="closeModal">X</button>
      </header>
      <section class="modal-card-body">
        <slot name="body"></slot>
      </section>
      <footer class="modal-card-foot">
        <button type="submit" class="button is-success" @click="sendModal">Envoyer</button>
        <button class="button" @click="cancel">Annuler</button>
      </footer>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      listId: Number,
    },
    methods: {
      sendModal() {
        this.$emit('send-modal');
        this.closeModal();
      },
      cancel() {
        // this.$emit('cancel');
        this.closeModal();
      },
      closeModal() {
        this.$emit('close-modal');
      }
    }
  }
</script>

<style lang="scss" scoped>
.modal {
  text-align: center;
  background-color: white;
  height: 500px;
  width: 500px;
  margin-top: 10%;
  padding: 60px 0;
  border-radius: 20px;

  &-overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    background-color: #000000da;
  }
  &-close {
    cursor: pointer;
  }
}
</style>