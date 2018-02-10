<template>
    <body @contextmenu.prevent="$refs.ctxMenu.open">
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
                <button id="delete" class="ui button">
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
    components: { contextMenu }
  }
</script>