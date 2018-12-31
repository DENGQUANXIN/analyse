<template>
<div class="analy-body-word">
  <left-menu @get-type="setTypeID" v-bind:list-types="listTypes" />
  <div class="analy-content-word">
    <div v-for="(item, index) in listTypes">
      <Card class="show-card-word" v-if="index == typeId" style="width: 1200px; height: 700px;">
        <div class="show-chart-word" :id="'chart' + index">
        </div>
      </Card>
    </div>
  </div>
</div>
</template>

<script>
import LeftMenu from './LeftMenu'
import * as wordcloudOps from './options/wordcloud'
require('echarts-wordcloud')

let maskImage = new Image()
export default {
  name: 'WordCloud',
  data() {
    return ({
      listTypes: ['政治', '文化', '社会'],
      typeId: 0,
      picPaths: ['/static/0.jpg', '/static/0.jpg', '/static/2.jpg'],
      options: [
        wordcloudOps.politics,
        wordcloudOps.culture,
        wordcloudOps.social
      ]
    })
  },
  components: {
    'left-menu': LeftMenu
  },
  mounted() {
    this.getWordcloud()
    this.drawLine(this.typeId)
  },
  updated() {
    this.getWordcloud()
    this.drawLine(this.typeId)
  },
  methods: {
    getWordcloud() {
      this.$http.post('http://127.0.0.1:8000/wordcloud', {typeId: this.typeId}).then((response) => {
        if(response.data.state == 0){
          this.options[this.typeId].series[0].data = response.data.data.content
          this.drawLine(this.typeId)
        } else {
          this.drawLine(this.typeId)
        }
      }, (response) => {
        console.log("获取词云出错");
      });
    },
    setTypeID(msg) {
      this.typeId = msg
    },
    drawLine(typeId) {
      let myChart = this.$echarts.init(document.getElementById('chart' + typeId))
      let options = this.options
      maskImage.onload = function() {
        options[typeId].series[0].maskImage
        myChart.setOption(options[typeId])
      }
      maskImage.crossOrigin = 'anonymous'
      maskImage.src = this.picPaths[typeId]
    },
  }
}
</script>

<style>
.analy-body-word {
  display: flex;
  flex-direction: row;
}

.analy-content-word {
  margin: 50px 100px;
}

.show-card-word {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.show-chart-word {
  width: 800px;
  height: 800px;
}
</style>
