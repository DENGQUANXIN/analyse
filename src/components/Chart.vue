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
import {analyseBackUrls} from './options/urls'
import * as chartOps from './options/chart'
require('echarts/map/js/province/xizang.js')

export default {
  name: 'Chart',
  data() {
    return ({
      listTypes: ['地区生产总值', '城镇单位工资', '固定资产投资', '财政收支', '各市县人口分布', '各市县GDP'],
      typeId: 0,
      options: [
        chartOps.total,
        chartOps.salary,
        chartOps.invest,
        chartOps.income,
        chartOps.population,
        chartOps.gdpDistribution
      ]
    })
  },
  components: {
    'left-menu': LeftMenu
  },
  mounted() {
    this.getChart()
  },
  updated() {
    this.getChart()
  },
  methods: {
    getChart() {
      this.$http.post(analyseBackUrls.chart, {typeId: this.typeId}).then((response) => {
        if(response.data.state == 0){
          switch(this.typeId){
            case 0:
              var years = response.data.data.content.years
              var data = response.data.data.content.data
              this.options[this.typeId].xAxis[0].data = years
              this.options[this.typeId].series[0].data = data
              break
            case 1:
              var average = response.data.data.content.average
              var total = response.data.data.content.total
              this.options[this.typeId].xAxis[0].data = average.years
              this.options[this.typeId].xAxis[1].data = total.years
              this.options[this.typeId].series[0].data = average.data
              this.options[this.typeId].series[1].data = total.data
              break
            case 2:
              var total = response.data.data.content.total
              var property = response.data.data.content.property
              this.options[this.typeId].yAxis.data = total.years
              this.options[this.typeId].series[0].data = total.data
              this.options[this.typeId].series[1].data = property.data
              break
            case 3:
              var income = response.data.data.content.income
              var outcome = response.data.data.content.outcome
              this.options[this.typeId].yAxis.data = income.years
              this.options[this.typeId].series[0].data = income.data
              this.options[this.typeId].series[1].data = outcome.data
              break
            case 4:
              var population = response.data.data.content.population
              var education = response.data.data.content.education
              for(var i=0,len=population.length; i<len; i++){
                population[i]['education'] = education[population[i]['name']]
              }
              this.options[this.typeId].series[0].data = population
              break
            case 5:
              var data = response.data.data.content['2017年']
              this.options[this.typeId].series[0].data = data
              break
          }
          this.drawLine(this.typeId)
        } else {
          this.drawLine(this.typeId)
        }
      }, (response) => {
        console.log("获取图表出错");
      });
    },
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
  width: 1198px;
  height: 600px;
}
</style>
