import Vue from 'vue'
import Router from 'vue-router'
import Recommend from './../components/reconmend/reconmend'
import Rank from './../components/rank/rank'
import Search from './../components/search/search'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Recommend',
      name: 'Recommend',
      component: Recommend
    },
    {
      path: '/Rank',
      name: 'Rank',
      component: Rank
    },
    {
      path: '/Search',
      name: 'Search',
      component: Search
    }
  ]
})
