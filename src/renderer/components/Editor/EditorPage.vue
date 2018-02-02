<template>
    <body>
    <div class="ui aligned center aligned grid">
        <div class="column">
            <img @click="onHome" class="logo-header" src="static/img/logo_head.png">
        </div>
    </div>

    <visual-engine></visual-engine>


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
