<template>
  <div id="analy-body">
    <left-menu @get-type="setTypeID" v-bind:list-types="listTypes"/>
    <div id="analy-content">
    <div v-for="(item, index) in listTypes">
      <Card class="show-card" v-if="index == typeId" style="width: 1200px; height: 700px;">
        <img src="../assets/result1.jpg" style="width: 650px" />
      </Card>
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
      console.log(this.typeId);
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
