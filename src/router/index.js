import Vue from 'vue'
import Router from 'vue-router'
import Wordcloud from '@/components/Wordcloud'
import Keywords from '@/components/Keywords'
import Connection from '@/components/Connection'
import Chart from '@/components/Chart'
import Zhihu from '@/components/Zhihu'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: 'Wordcloud'
    },
    {
      path: '/wordcloud',
      name: 'Wordcloud',
      component: Wordcloud
    },
    {
      path: '/keywords',
      name: 'Keywords',
      component: Keywords
    },
    {
      path: '/connection',
      name: 'Connection',
      component: Connection
    },
    {
      path: '/chart',
      name: 'Chart',
      component: Chart
    },
    {
      path: '/zhihu',
      name: 'Zhihu',
      component: Zhihu
    }
  ]
})
