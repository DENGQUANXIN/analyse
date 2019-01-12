<template>
<div class="analy-body-zhihu">
  <left-menus @get-type="setTypeID" v-bind:list-types="listTypes" v-bind:default-type="defaultType"/>
  <div class="analy-content-zhihu">
    <div v-for="(listItem, listKey) in listTypes">
      <div v-for="item in listItem">
      <Card class="show-card-zhihu" v-if="item == typeId" style="width: 1200px; height: 700px;">
        <div class="show-chart-chart-zhihu" :id="item"></div>
      </Card>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import LeftMenus from './LeftMenus'
import * as zhOptions from './options/zhihu'
require('echarts/map/js/china.js')

export default {
  name: 'Zhihu',
  data() {
    return ({
      listTypes: {
        "文章分析": ['文章类别', '文章词云', '作者性别分布', '点赞评论数'],
        "评论分析": ['评论者性别分布', '评论者位置分布', '评论者行业分布']
      },
      defaultType: "文章分析",
      typeId: "文章类别",
      options: {
        "文章类别": zhOptions.classfication,
        "文章词云": zhOptions.articleCloud,
        "作者性别分布": zhOptions.authorGender,
        "点赞评论数": zhOptions.commentsCount,
        "评论者性别分布": zhOptions.gender,
        "评论者位置分布": zhOptions.locations,
        "评论者行业分布": zhOptions.industry,
        "评论情感分析": zhOptions.sentiment
      }
    })
  },
  components: {
    'left-menus': LeftMenus
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
      let myChart = this.$echarts.init(document.getElementById(typeId))
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
