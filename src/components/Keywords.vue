<template>
  <div id="analy-body">
    <left-menu @get-type="setTypeID" v-bind:list-types="listTypes"/>
    <div id="analy-content">
    <div v-for="(item, index) in listTypes">
        <iframe v-if="index == typeId" :src="'../../static/'+ index +'.html'" :key='index' :name='item' width="1400" height="860" frameborder="0"></iframe>
    </div>
    </div>
  </div>
</template>

<script>
import LeftMenu from './LeftMenu'

export default {
  name: 'Keywords',
  data() {
    return({
      listTypes: ['政治', '文化', '社会'],
      typeId: 0
    })
  },
  components: {
    'left-menu': LeftMenu
  },
  methods: {
    setTypeID(msg){
      this.typeId = msg
    }
  }
}
</script>

<style>
#analy-body {
  display: flex;
  flex-direction: row;
}
#analy-content {
  margin: 50px 100px;
}

.show-card {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.show-chart-keywords {
  width: 800px;
  height: 400px;
}
</style>
