<template>
    <body @contextmenu.prevent="$refs.ctxMenu.open">
        <toolbar></toolbar>
        <visual-engine></visual-engine>
        <context-menu id="context-menu" ref="ctxMenu">
            <div class="fluid ui vertical buttons">
                <button class="ui labeled icon button">
                    <i class="code icon"></i>
                    Add a node
                </button>
                <button class="ui labeled icon button">
                    <i class="add icon"></i>
                    Add a child
                </button>
                <button class="ui labeled icon button">
                    <i class="trash icon"></i>
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