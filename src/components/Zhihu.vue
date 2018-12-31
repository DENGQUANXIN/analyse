<template>
<div class="analy-body-zhihu">
  <left-menu @get-type="setTypeID" v-bind:list-types="listTypes" />
  <div class="analy-content-zhihu">
    <div v-for="(item, index) in listTypes">
      <Card class="show-card-zhihu" v-if="index == typeId" style="width: 1200px; height: 700px;">
        <div class="show-chart-chart-zhihu" :id="'chart' + index"></div>
      </Card>
    </div>
  </div>
</div>
</template>

<script>
import LeftMenu from './LeftMenu'
import * as zhOptions from './options/zhihu'
require('echarts/map/js/province/xizang.js')

export default {
  name: 'Zhihu',
  data() {
    return ({
      listTypes: ['评论性别分布', '评论者行业分布', '文章类别', '评论情感分析'],
      typeId: 0,
      options: [
        zhOptions.gender,
        zhOptions.industry,
        zhOptions.classfication,
        zhOptions.sentiment
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
.analy-body-zhihu {
  display: flex;
  flex-direction: row;
}

.analy-content-zhihu {
  margin: 50px 100px;
}

.show-card-zhihu {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.show-chart-chart-zhihu {
  width: 1198px;
  height: 600px;
}
</style>
