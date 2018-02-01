<template>
  <body>
    <div class="ui middle aligned center aligned grid">
      <div class="column">
        <img class="logo" src="static/img/logo.png">
        <div style="margin-bottom:10vh"></div>
      </div>
    </div>

    <div class="ui four column grid">
      <div class="row">
        <div class="column"></div>
        <div class="column">
          <button class="fluid ui blue button choice-button">New project</button>
        </div>
        <div class="column">
          <button class="fluid ui circle blue button choice-button">Open a project</button>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
  export default {
    name: 'landing-page',
    components: { },
    methods: { }
  }
</script>
