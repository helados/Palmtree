<template>
  <body>
    <div class="ui aligned center aligned grid">
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


    <div class="copyright">
        <p>Made with <i class="red heart icon"></i>by &nbsp; <a class="helados" href="https://github.com/helaos">Helados</a></p>
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
