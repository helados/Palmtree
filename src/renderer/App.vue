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
    overflow: hidden;
    background-color: #535760;
  }

  body.draggable {
    -webkit-user-select: none;
    -webkit-app-region: drag;
  }

  .choice-button { height: 10vh; }

  img.logo {
    min-width: 475px;
    width: 45%;
    max-width: 670px;
    margin-top: 4em;
    filter: grayscale(0.3);
  }

  .copyright {
    position: fixed;
    bottom: 2%;
    left: 50%;
    transform: translateX(-50%);
    font-size: 1.3em;
    color: white;
  }

</style>
