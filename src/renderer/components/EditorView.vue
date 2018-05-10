<template>
    <body @contextmenu.prevent="$refs.ctxMenu.open" @click="affectClickedElement($event)">
        <toolbar></toolbar>
        <visual-engine></visual-engine>
        <context-menu id="context-menu" ref="ctxMenu">
            <div class="context-menu fluid ui vertical buttons">
                <button id="add-node" class="ui button">
                    Add a node element
                </button>
                <button id="add-child" class="ui button">
                    Add a child element
                </button>
                <button @click="onDelete()" id="delete" class="ui button">
                    Delete
                </button>
            </div>
        </context-menu>
    </body>
</template>
<script>
    import contextMenu from 'vue-context-menu'
export default {
      name: 'editor',
      components: { contextMenu },
      methods: {
        affectClickedElement (event) {
          this.$clickedNode = event.target
        },
        onDelete () {
          console.log('we have to get the children node whereas as we are able to get the parent node')
          console.log('deleted element')
          console.log(this.$clickedNode)
        }
      }
}
</script>