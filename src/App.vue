<template>
  <div id="app">
    <arcTabs></arcTabs>
  </div>
</template>

<script>
import arcTabs from './lib/index'
export default {
  name: 'app',
  data () {
    return {
    }
  },
  components:{
    arcTabs
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
}
</style>
