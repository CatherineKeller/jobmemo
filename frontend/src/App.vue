<template>
  <Header />
  <Jobmemo />
</template>

<script>
  import Header from './components/Header.vue';
  import Jobmemo from './components/Jobmemo.vue';

  export default {
    components: {
      Header,
      Jobmemo,
    },
    data() {
      return {
      }
    },    
  }
</script>

<style lang="scss">
  .error {
    color: red;
  }

  // Variables globales
  $color-primary: rgb(44, 44, 44);

  // Columns
  .col-2 {
    display: flex;
    column-gap: 2rem;
    & > * {
      width: 50%;
    }
  }

  // Global style for a form
  .form_line {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    color: $color-primary;

    &:not(:last-child) {
      margin-bottom: 1rem;
    }

    & label {
      width: 25%;

      & span {
        color: red;
      }
    }
    & input,
    & select {
      &.required {
        &:required {
          border-color: orange;
        }
        &:valid {
          border-color: green;
        }
      }
    }
    & input {
      flex-grow: 1;
      border: 1px solid #ccc;
      padding: .5rem;
      &::placeholder {
        font-style: italic;
      }
    }
    & select {
      flex-grow: 1;
      border: 1px solid #ccc;
      padding: .5rem;
    }

    & .error {
      width: 100%;
      margin: .4rem 0 0 25%;
      font-size: .9rem;
      font-style: italic;
    }

  }

  // Buttons
  .button {
    padding: .5rem 1rem;
    border: 0;
    background-color: rgb(209, 209, 209);
    color: $color-primary;
    transition: all .2s;
    width: 100%;
    font-size: 1.1rem;
    margin-top: 2rem;

    &:hover {
      cursor: pointer;
      background-color: $color-primary;
      color: white;
    }
  }
</style>
