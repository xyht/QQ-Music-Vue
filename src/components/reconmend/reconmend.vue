<template>
  <div class="recommend">

    <div class="scroll">
      <div class="wrapper" ref="wrapper">
        <ul class="content">
          <van-swipe :autoplay="3000">
            <a v-for="(item, index) in slider" :href="item.linkUrl" :key="index">
              <van-swipe-item>
                <img class="img" :src="item.picUrl">
              </van-swipe-item>
            </a>
          </van-swipe>
          <h1>热门歌单推荐</h1>
          <li v-for="(item, index) in discList" :key="index" class="list">
            <div class="icon"><img v-lazy="item.imgurl" class="img" ></div>
            <div class="text">
              <div class="name">{{item.creator.name}}</div>
              <div class="desc">{{item.dissname}}</div>
            </div>
          </li>
        </ul>
        <div class="loading-content" v-show="!discList.length">
          <loading></loading>
        </div>
      </div>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
import Loading from './../../base/loading/loading'
import {getRecommend, getDiscList} from './../../api/recommend.js'
import Bscroll from 'better-scroll'

export default {
  data () {
    return {
      slider: [],
      discList: []
    }
  },
  watch: {
    'discList' () {
      this.$nextTick(() => {
        this._initScroll()
      })
    }
  },
  created () {
    this._getRecommend()
    this._getDiscList()
  },
  methods: {
    _getRecommend () {
      getRecommend().then((res) => {
        if (res.code === 0) {
          this.slider = res.data.slider
        }
      })
    },
    _getDiscList () {
      getDiscList().then((res) => {
        if (res.code === 0) {
          this.discList = res.data.list
        }
      })
    },
    _initScroll () {
      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new Bscroll(this.$refs.wrapper, {
            click: true,
            probeType: 3
          })
        } else {
          this.scroll.refresh()
        }
      })
    }
  },
  components: {
    Loading
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  li
    list-style none

  .recommend
    .wrapper
      position absolute
      left: 0;
      right 0
      top: 84px
      bottom 0
      width: 100%;
      overflow: hidden;
      .content
        h1
          height 26px
          line-height 26px
          text-align center
          color rgba(7,17,27,0.7)
          font-weight lighter
        .list
          display flex
          .icon
            flex 0 0 80px
            .img
              width 60px
              padding 5px 10px 6px 10px
              height 60px
          .text
            flex 1
            display flex
            flex-direction column
            .name
              flex-direction: column
              justify-content: center
              line-height: 28px
              overflow: hidden
              flex 1
              font-size 14px
              color rgba(7,17,27,0.8)
            .desc
              flex-direction: column
              justify-content: center
              line-height: 35px
              flex 1
              font-size 12px
              color rgba(7,17,27,0.5)
      .loading-container
        position: absolute
        width: 100%
        top: 50%
        transform: translateY(-50%)
    .img
      width 100%
</style>
