<template>
  <div id="app">
    <arcTabs :data="data" :unit='unit'></arcTabs>
  </div>
</template>

<script>
import arcTabs from './lib/index'
export default {
  name: 'app',
  data () {
    return {
      data:[1,2,3,4,5,6,7,8],
      unit:'月'
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
