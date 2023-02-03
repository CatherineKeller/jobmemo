<template>
  <div class="interview">
    <div class="card_interview-type"></div>
    <div class="card_interview-date">{{ interviewDate }}</div>
    <div class="card_interview-comment">{{ interview.comment }}</div>
  </div>
</template>

<script>
  import dayjs from 'dayjs';

  export default {
    components: {

    },
    props: {
      interview: Object
    },
    data() {
      return {
        interviewDate: dayjs(this.interview.date).format('[Le] DD/MM/YYYY [à] HH[h]mm'),
      }
    },
  }
</script>