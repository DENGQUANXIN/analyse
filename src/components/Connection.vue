<template>
<div class="analy-body-conn">
  <div class="analy-content-conn">
    <div class="show-search">
      <Input class="search-input" @on-search="searchConn" size="large" search enter-button="搜索" placeholder="请输入关联中心词"/>
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
  mounted() {
    this.drawLine(this.typeId)
  },
  updated() {
    this.drawLine(this.typeId)
  },
  methods: {
    drawLine(typeId) {
      let myChart = this.$echarts.init(document.getElementById('chart' + typeId))
      myChart.on("mouseover", function(data) {
          // 取消节点连接线触发效果
          if (data.dataType == "edge") {
              myChart.dispatchAction({
                  type: 'unfocusNodeAdjacency',
                  seriesIndex: 0
              });
          }
      })
      myChart.setOption(this.options[typeId])
    },
    searchConn(msg) {
      let sourceData = {
          centerWord: '西藏',
          content: [
              {name: '云南', value: 100},
              {name: '大雪', value: 140},
              {name: '暴雪', value: 190},
              {name: '雨雪', value: 200},
              {name: '四川', value: 250},
              {name: '中方', value: 340},
              {name: '加拿大', value: 400},
              {name: '美国', value: 500},
              {name: '新疆', value: 510}
          ]
      }
      let links = []
      let data = []
      data.push({
          name: sourceData.centerWord,
          category: 0,
          symbolSize: 100
      })
      sourceData.content.map((v, k) => {
          data.push({
              name: v.name,
              value: v.value,
              category: 1
          })

          links.push({
              source: 0,
              target: k+1,
              value: v.value
          })
      })
      if(msg != ""){
        this.options[0].series[0].data = data
        this.options[0].series[0].links = links
      } else {
        this.options[0].series[0].data = []
        this.options[0].series[0].links = []
      }
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
  width: 800px;
  height: 700px;
}
</style>
