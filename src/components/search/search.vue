<template>
  <div class="search">
    <div class="liubai"></div>
    <div class="input-wrapper">
      <div class="wrapper">
        <div class="icon"><img src="./../../assets/search.svg" alt="" class="img"></div>
        <input type="text" class="inp" v-model="inputData"/>
        <div class="icon" @click="clean"><img src="./../../assets/quxiao.svg" alt="" class="img"></div>
      </div>
    </div>
    <div v-show="tabshow" class="hot-music">
      <div class="title">热门搜索</div>
      <div class="hot-wrapper">
        <a href="#" class="music" v-for="(music, index) in hotMusic.hotkey" :key="index">{{music.k}}</a>
      </div>
    </div>
    <div v-show="!tabshow" class="search-data" ref="serchData">
      <ul class="content">
        <a href="#" v-for="(item, index) in searchMusic" :key="index">
          <li class="list">
            <div class="icon">
              <img src="./../../assets/music.svg" class="img">
            </div>
            <div class="text">
              <div class="name">{{item.name}}</div>
              <div class="songer">
                <span v-for="(name, index_name) in item.singer" :key="index_name">{{name.name}}</span>
              </div>
            </div>
          </li>
        </a>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
// import { getDiscList } from './../../api/recommend.js'
import Bscroll from 'better-scroll'
import { searchWangYi, searchUrl, searchHot, searchQQ } from './../../api/search'
export default {
  data () {
    return {
      tabshow: true,
      data: [],
      hotMusic: [],
      searchMusic: [],
      inputData: ''
    }
  },
  watch: {
    searchMusic () {
      this._initScroll()
    },
    inputData () {
      this.tabshow = false
      this._getSearchQQ(this.inputData)
    }
  },
  created () {
    // this._getSearch()
    // this._getData()
    // this._getJsonpData()
    // 得到酷狗数据
    // this._getDiscList()
    this._getHotcList()
    // this._getSearchQQ()
  },
  methods: {
    _initScroll () {
      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new Bscroll(this.$refs.serchData, {
            click: true,
            probeType: 3
          })
        } else {
          this.scroll.refresh()
        }
      })
    },
    _getSearch () {
      searchWangYi('张杰', 1, 30).then((res) => {
        if (res.status === 1) {
          console.log('失败二')
        }
        console.log('失败一')
      }).catch(function (error) {
        console.log(error)
      })
      console.log('失败')
    },
    _getData () {
      this.$http.get('/apiSearch').then((response) => {
        this.data = (response.body).substring(0, response.body.length - 1)
        this.data = this.data.substring(1, response.body.length - 1)
        this.data = JSON.parse(this.data)
        if (this.data.status === 1) {
          console.log(this.data)
        }
      })
    },
    _getJsonp () {
      this.$jsonp('http://mobilecdn.kugou.com/api/v3/search/song', {
        keyword: '张杰',
        page: 1,
        pagesize: 30,
        showtype: 1
      }).then(json => {
      // 返回数据 json， 返回的数据就是json格式
        console.log(json)
      }).catch(err => {
        console.log(err)
      })
      console.log('asd')
    },
    _getJsonpData () {
      searchWangYi('邓紫琪', 1, 30).then((res) => {
        console.log(res)
      }).catch((res) => {
        console.log(res)
      })
    },
    /* 使用vue-resource jsonp得到搜狗搜索数据 */
    _getDiscList () {
      var urls = searchUrl('张杰', 1, 30)
      this.$http.jsonp(urls, {}, {
        jsonp: '_callback'
      })
        .then((data) => {
          if (data.data.status === 1) {
            this.data = data.data
            // console.log(this.data.data.info[0].songname_original)
          }
        })
    },
    /* 使用vue-resource jsonp得到热歌数据 */
    _getHotcList () {
      var url = searchHot()
      this.$http.jsonp(url, {jsonp: 'jsonpCallback'})
        .then((data) => {
          if (data.body.code === 0) {
            this.hotMusic = data.body.data
            // console.log(this.data.data.info[0].songname_original)
          }
        })
    },
    /* 使用vue-resource jsonp得到QQ搜索数据 */
    _getSearchQQ (word) {
      var url = searchQQ(word)
      this.$http.jsonp(url, {jsonp: 'jsonpCallback'})
        .then((data) => {
          if (data.body.code === 0) {
            this.searchMusic = data.body.data.song.list
            // console.log(this.searchMusic)
            // console.log(this.data.data.info[0].songname_original)
          }
        })
    },
    clean () {
      this.tabshow = true
      this.inputData = ''
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "./../../common/stylus/mixin.styl"
.search
  .liubai
    height 10px
    width 100%
  .input-wrapper
    width 100%
    height 56px
    background #f4f4f4
    .wrapper
      position absolute
      top 104px
      left 10%
      width 80%
      height 36px
      .icon
        font-size 0
        height 36px
        width 36px
        float left
        background #fff
        .img
          height 26px
          width 26px
          margin 5px
      .inp
        height 95%
        width 70%
        border none
        border-radius 5px
        float left
  .hot-music
    margin 20px 10px 20px 10px
    height 150px
    overflow hidden
    .title
     font-weight bold
    .hot-wrapper
      margin-top -10px
      .music
        display block
        width auto
        padding 0 10px 0 10px
        border 1px rgba(0,0,0,.6) solid
        float left
        height 30px
        line-height 30px
        border-radius 50px
        font-size 14px
        color #000
        margin-right 14px
        margin-bottom 10px
        &:first-child
          color #fc4524
          border 1px #fc4524 solid
  .search-data
    position absolute
    top 150px
    right 0
    bottom 0
    left 0
    overflow hidden
    .content
      .list
        width 100%
        height 55px
        display flex
        border-px(rgba(0,0,0,0.2))
        &:last-child
          border-px(rgba(255,255,255,0.0))
        .icon
          flex 0 0 55px
          height 55px
          .img
            height 21px
            width 21px
            margin 17px
        .text
          flex 1
          height 55px
          .name
            height 30px
            line-height 30px
            color #000
          .songer
            height 25px
            line-height 25px
            font-size 12px
            color: #808080
            span
              margin-right 10px
</style>
