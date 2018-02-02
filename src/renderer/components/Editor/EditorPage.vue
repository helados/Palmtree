<template>
    <body>
    <div class="ui aligned center aligned grid">
        <div class="column">
            <img @click="onHome" class="logo-header" src="static/img/logo_head.png">
            <div style="margin-bottom:10vh"></div>
        </div>
    </div>
    <div class="ui raised text container segment">
        <h2 class="ui header">Editor</h2>
        <network></network>
    </div>

    </body>
</template>

<script>
  export default {
    name: 'editor-page',
    components: { },
    methods: {
      onHome () {
        this.$router.push({name: 'landing-page'})
      }
    }
  }
</script>
