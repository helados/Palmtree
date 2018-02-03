<template>
    <div class="ui aligned center aligned grid">
        <div class="column">
            <img @click="onHome" class="logo-header" src="static/img/logo_head.png">
        </div>
    </div>
</template>

<script>
  export default {
    name: 'toolbar',
    components: { },
    methods: {
      onHome () {
        this.$router.push({name: 'home'})
      }
    }
  }
</script>