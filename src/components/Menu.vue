<template>
  <div>
    <Menu @on-select="turnUrl" mode="horizontal" :active-name="activeName">
        <MenuItem v-for="(value, key) in menuList" :key="key" :name="key">
            <Icon :type="value[1]" />
            {{value[0]}}
        </MenuItem>
    </Menu>
  </div>
</template>
<script>
    export default {
      data() {
        return ({
          menuList: {
            Wordcloud: ['统计词云', 'ios-cloud'],
            // Keywords: ['情感分析', 'ios-heart'],
            Chart: ['图表统计', 'ios-stats'],
            Connection: ['关联分析', 'ios-repeat'],
            Zhihu: ['知乎评论分析', 'ios-book'],
            Xzmap: ['统计地图', 'ios-navigate']
          },
          activeName: 'Wordcloud'
        })
      },
      mounted() {
        this.activeName = this.$route.path.substr(1)
      },
      methods: {
        turnUrl(name) {
          this.$router.push(name)
        }
      }
    }
</script>
<style>
.ivu-menu-horizontal {
  padding-left: 240px;
}
</style>
