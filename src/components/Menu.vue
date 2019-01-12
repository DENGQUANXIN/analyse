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
            Wordcloud: ['新闻统计词云', 'ios-cloud'],
            Connection: ['新闻关联分析', 'ios-repeat'],
            Chart: ['西藏图表统计', 'ios-stats'],
            Zhihu: ['知乎西藏话题', 'ios-book'],
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
