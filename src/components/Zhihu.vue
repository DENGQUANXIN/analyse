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
import {analyseBackUrls} from './options/urls'
import { log } from 'util';
require('echarts/map/js/china.js')
require('echarts-liquidfill')

export default {
  name: 'Zhihu',
  data() {
    return ({
      listTypes: {
        "文章分析": ['文章类别', '文章词云', '作者性别分布', '点赞评论数'],
        "评论分析": ['评论者性别分布', '评论者位置分布', '评论者行业分布', '评论者专业分布', '评论情感分析']
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
        "评论者专业分布": zhOptions.major,
        "评论情感分析": zhOptions.sentiment
      }
    })
  },
  components: {
    'left-menus': LeftMenus
  },
  mounted() {
    this.getZhihu()
  },
  updated() {
    this.getZhihu()
  },
  methods: {
    getZhihu() {
      this.$http.post(analyseBackUrls.zhihu, {subtype: this.typeId}).then((response) => {
        if(response.data.state == 0){
          var content = response.data.data.content
          switch(response.data.data.typeId){
            case 0:
            case 2:
              var sum = 0
              this.options[this.typeId].series[0].data = content.data
              content.data.forEach(v=>{  
                  sum += v.value
              });
              this.options[this.typeId].series[1].data[0].value = sum
              break;
            case 1:
              this.options[this.typeId].series[0].data = content.data
              break;
            case 3:
              this.options[this.typeId].yAxis.data = content.label
              this.options[this.typeId].series[0].data = content.comments
              this.options[this.typeId].series[1].data = content.likes
              break;
            case 4:
              this.options[this.typeId].series[0].data = content.political
              this.options[this.typeId].series[1].data = content.culture
              this.options[this.typeId].series[2].data = content.social
              break;
            case 5:
              this.options[this.typeId].series[0].data = content.politics
              var effectPolitics = content.politics.sort(function (a, b) {
                return b.value[2] - a.value[2];
              }).slice(0, 10)
              this.options[this.typeId].series[1].data = effectPolitics

              this.options[this.typeId].series[2].data = content.culture
              var effectCulture = content.culture.sort(function (a, b) {
                return b.value[2] - a.value[2];
              }).slice(0, 10)
              this.options[this.typeId].series[3].data = effectCulture

              this.options[this.typeId].series[4].data = content.social
              var effectSocial = content.social.sort(function (a, b) {
                return b.value[2] - a.value[2];
              }).slice(0, 10)
              this.options[this.typeId].series[5].data = effectSocial
              break;
            case 6:
            case 7:
              this.options[this.typeId].xAxis[0].data = content.labels
              this.options[this.typeId].series[0].data = content.politics
              this.options[this.typeId].series[1].data = content.culture
              this.options[this.typeId].series[2].data = content.social
              break;
            case 8:
              var temp = content.politics[0].value/(content.politics[1].value+content.politics[0].value)
              this.options[this.typeId].series[0].data[0].value = temp.toFixed(2)
              temp = content.culture[0].value/(content.culture[1].value+content.culture[0].value)
              this.options[this.typeId].series[1].data[0].value = temp.toFixed(2)
              temp = content.social[0].value/(content.social[1].value+content.social[0].value)
              this.options[this.typeId].series[2].data[0].value = temp.toFixed(2)
            default:
              break;
          }
          this.drawLine(this.typeId)
        } else {
          this.drawLine(this.typeId)
        }
      }, (response) => {
        console.log("获取知乎数据出错");
      });
    },
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
