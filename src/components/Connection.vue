<template>
<div class="analy-body-conn">
  <div class="analy-content-conn">
    <div class="show-search">
      <Input class="search-input" @on-search="getConnect" size="large" search enter-button="搜索" placeholder="请输入关联中心词"/>
    </div>
    <div v-for="(item, index) in listTypes">
      <Card class="show-card-conn" v-if="index == typeId" style="width: 1200px; height: 700px;">
        <div class="show-chart-conn" :id="'chart' + index"></div>
      </Card>
    </div>
  </div>
</div>
</template>

<script>
import LeftMenu from './LeftMenu'
import * as connectionOps from './options/connection'
import {analyseBackUrls} from './options/urls'
import { log } from 'util';

export default {
  name: 'Connection',
  data() {
    return ({
      listTypes: ['关联分析'],
      typeId: 0,
      options: [
        connectionOps.connection
      ]
    })
  },
  components: {
    'left-menu': LeftMenu
  },
  methods: {
    getConnect(msg) {
      if(msg == ''){
        alert('请输入中心词')
        return
      }
      this.$http.post(analyseBackUrls.connect, {centerword: msg}).then((response) => {
        if(response.data.state == 0){
          this.showConn(response.data.data)
        } else {
          alert("关联关系不存在")
        }
      }, (response) => {
        alert("获取关联词出错")
      });
    },
    drawLine(typeId) {
      let myChart = this.$echarts.init(document.getElementById('chart' + typeId))
      myChart.setOption(this.options[typeId])
    },
    showConn(sourceData) {
      let words = []
      let data = []
      sourceData.connectword.slice(0,20).map((v, k) => {
          words.push(v.name)
          data.push(v.value)
      })
      this.options[0].angleAxis.data = words
      this.options[0].series[0].data = data
      this.options[0].radiusAxis.max = data[0] + 1
      this.drawLine(0)
    }
  }
}
</script>

<style>
.analy-body-conn {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.analy-content-conn {
  margin: 50px 350px;
}

.show-search {
  margin-top: -20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
}

.search-input {
  width: 400px;
}

.show-card-conn {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.show-chart-conn {
  width: 1198px;
  height: 700px;
}
</style>
