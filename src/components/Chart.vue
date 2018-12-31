<template>
<div class="analy-body-chart">
  <left-menu @get-type="setTypeID" v-bind:list-types="listTypes" />
  <div class="analy-content-chart">
    <div v-for="(item, index) in listTypes">
      <Card class="show-card-chart" v-if="index == typeId" style="width: 1200px; height: 700px;">
        <div class="show-card-chart" :id="'chart' + index"></div>
      </Card>
    </div>
  </div>
</div>
</template>

<script>
import LeftMenu from './LeftMenu'
import * as chartOps from './options/chart'

export default {
  name: 'Chart',
  data() {
    return ({
      listTypes: ['地区生产总值', '工资', '固定资产投资', '财政收支'],
      typeId: 0,
      options: [
        chartOps.total,
        chartOps.salary,
        chartOps.invest,
        chartOps.income
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
.analy-body-chart {
  display: flex;
  flex-direction: row;
}

.analy-content-chart {
  margin: 50px 100px;
}

.show-card-chart {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.show-card-chart {
  width: 800px;
  height: 600px;
}
</style>
