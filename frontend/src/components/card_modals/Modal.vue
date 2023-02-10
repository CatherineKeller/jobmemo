<template>
  <div v-bind:id="listId" class="modal-wrapper">
    <div class="modal-overlay">
      <div class="modal">
        <header class="modal_head">
          <div class="modal_head-title">
            <slot name="title"></slot>
          </div>
          <button class="modal_head-close" aria-label="close" @click="closeModal">✕</button>
        </header>
        <section class="modal_body">
          <slot name="body"></slot>
        </section>
        <footer class="modal_foot">
          <button type="submit" class="modal_button modal_button-action" @click="sendModal"><slot name="valid"></slot></button>
          <button class="modal_button modal_button-cancel" @click="cancelModal"><slot name="cancel"></slot></button>
        </footer>
      </div>
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
      },
      cancelModal() {
        this.$emit('cancel-modal');
      },
      closeModal() {
        this.$emit('close-modal');
      },
    }
  }
</script>

<style lang="scss" scoped>

.modal {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  background-color: white;
  height: 80vh;
  min-height: 670px;
  max-height: 700px;
  width: 80%;
  margin-top: 10vh;
  border-radius: 20px;

  .tiny & {
    min-height: 200px;
    max-height: 100px;
    width: 700px;
    margin-top: 25vh;
  }

  &-overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    background-color: rgba(0,0,0,.7);
  }
  &-close {
    cursor: pointer;
  }
  // Head de la modale
  &_head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 0.5rem 0.5rem 3rem ;
    background-color: #f2f2f2;
    border-radius: 20px 20px 0 0;
    text-transform: uppercase;
    color: #5c5c5c;

    &-title {
      font-size: 1.5rem;
      font-weight: 700;
    }
    &-close {
      background-color: transparent;
      border: none;
      font-size: 1.5rem;
      transition: all .5s;
      border-radius: 50%;
      width: 3rem;
      height: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        cursor: pointer;
        background-color: #5c5c5c;
        color: white;
      }
    }
  }

  // Body de la modale
  &_body {
    padding: 2rem 3rem;
    text-align: left;

    &-title {
      font-weight: 700;
      font-size: 1.3rem;
    }
  }

  // Footer de la modale
  &_foot {
    height: 5rem;
  }
}

.modal::v-deep .modal_body {
  &-title {
    font-weight: 700;
    margin: 1rem 0;
  }
}


.modal::v-deep .modal_foot {
  // Buttons de la modale
  @mixin darkenColor($color) {
    &:hover {
      background-color: darken($color, 20%);
    }
  }
  $color-action: #43ad2e;
  $color-cancel: #e0e0e0;
  & .modal_button {
    border: none;
    border-radius: 1rem;
    padding: 1rem 2rem;
    font-size: 1.2rem;
    font-weight: 700;
    text-transform: uppercase;
    transition: all .5s;
    margin: 0 1rem;
    background-color: #F2F2F2;

    &:hover {
      cursor: pointer;
    }
    &-action {
      background-color: $color-action;
      color: white;
      @include darkenColor($color-action);
    }
    &-cancel {
      background-color: $color-cancel;
      @include darkenColor($color-cancel);
    }
  }
}
</style>