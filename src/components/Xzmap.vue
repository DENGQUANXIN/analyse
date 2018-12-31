<template>
<div class="analy-body-map">
  <left-menu @get-type="setTypeID" v-bind:list-types="listTypes" />
  <div class="analy-content-map">
    <div v-for="(item, index) in listTypes">
      <Card class="show-card-map" v-if="index == typeId" style="width: 1200px; height: 700px;">
        <div class="show-chart-map" :id="'chart' + index"></div>
      </Card>
    </div>
  </div>
</div>
</template>

<script>
import LeftMenu from './LeftMenu'
import * as mapOptions from './options/xzmap'
require('echarts/map/js/province/xizang.js')

export default {
  name: 'Zhihu',
  data() {
    return ({
      listTypes: ['人口数量分布', 'GDP分布'],
      typeId: 0,
      options: [
        mapOptions.population
      ]
    })
  },
  components: {
    'left-menu': LeftMenu
  },
  mounted() {
    this.drawLine(this.typeId)
  },
  updated() {
    this.drawLine(this.typeId)
  },
  methods: {
    setTypeID(msg) {
      this.typeId = msg
    },
    drawLine(typeId) {
      let myChart = this.$echarts.init(document.getElementById('chart' + typeId))
      myChart.setOption(this.options[typeId]);
    }
  }
}
</script>

<style>
.analy-body-map {
  display: flex;
  flex-direction: row;
}

.analy-content-map {
  margin: 50px 100px;
}

.show-card-map {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.show-chart-map {
  width: 1198px;
  height: 600px;
}
</style>
