<template>
    <div id='tree'></div>
</template>

<script>
import vis from 'vis'

export default {
  name: 'tree',
  components: { },
  data () {
    return {
      nodes: [
        { id: 0, label: 'Root' },
        { id: 1, label: 'Node 1' },
        { id: 2, label: 'Node 2' },
        { id: 3, label: 'Child' },
        { id: 4, label: 'Child' }
      ],
      edges: [
        { from: 0, to: 1, group: 0 },
        { from: 0, to: 2, group: 1 },
        { from: 1, to: 3, group: 1 },
        { from: 2, to: 4, group: 2 }
      ],
      options: {
        width: (window.innerWidth - 25) + 'px',
        height: (window.innerHeight - 75) + 'px',
        physics: {
          enabled: false
        },
        nodes: {
          shape: 'box',
          font: {
            size: 15
          }
        },
        edges: {
          smooth: {
            enabled: false // setting to true enables curved lines
            // type: "dynamic",
            // roundness: 0.5
          }
        }
      },
      container: '',
      network: null
    }
  },

  computed: {
    graph_data () {
      return {
        nodes: this.nodes,
        edges: this.edges
      }
    }
  },

  mounted () {
    this.container = document.getElementById('tree')
    this.network = new vis.Network(
      this.container,
      this.graph_data,
      this.options
    )
  }
}
</script>
