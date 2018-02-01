<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'palmtree'
  }
</script>

<style>
  body {
    background-color: #535760;
  }

  .choice-button {
    height: 10vh;
  }

  img.logo {
    margin-top: 4em;
    filter: grayscale(0.3);
  }

</style>
