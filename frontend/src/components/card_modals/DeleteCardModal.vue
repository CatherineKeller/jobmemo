<template>
  <Modal
    @cancel-modal="cancel()"
    @close-modal="$emit('close-modal')"
    @send-modal="$emit('delete-card')"
  >
    <template #title>Souhaitez-vous supprimer le Job ?</template>
    <template #body></template>
    <template #valid>Supprimer</template>
    <template #cancel>Annuler</template>
  </Modal>
</template>

<script>
  import Modal from "./Modal.vue";

  export default {
    components: {
      Modal,
    },
    methods: {
      cancel() {
        this.$emit('close-modal');
      },
    }
  };

  
</script>