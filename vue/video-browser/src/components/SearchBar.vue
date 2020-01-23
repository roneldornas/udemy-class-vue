<template>
    <div>
      <input @input="onInput" />
    </div>
</template>

<script>
export default {
  name: 'SearchBar',
  methods: {
      onInput: function(event) {
        this.$emit('term-change', event.target.value);
      }
  }
};
</script>

<style scoped>
  input {
    width: 75%;
  }

  div {
    text-align: center;
    margin: 20px;
  }
</style>