<template>
  <div class="rank">
    <div class="wrapper" ref="wrapperRank">
      <div class="content">
        <div class="liubai"></div>
        <ul>
          <a v-for="(item, index) in TopList" :key="index" class="list" @click="gotodesc(item.id)">
            <div class="icon">
              <img v-lazy="item.picUrl" class="img">
            </div>
            <div class="text">
              <div class="name">{{item.topTitle}}</div>
              <div class="ranklist">
                <ul>
                  <li v-for="(ranklist, index) in item.songList" :key="index" class="ranklist-item">
                    {{ranklist.songname}}-{{ranklist.singername}}
                  </li>
                </ul>
              </div>
            </div>
            <div class="goto">

            </div>
          </a>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Bscroll from 'better-scroll'
import {getTopList} from '../../api/rank'

export default {
  data () {
    return {
      TopList: []
    }
  },
  created () {
    this._getTopList()
    this._initScroll()
  },
  methods: {
    _getTopList () {
      getTopList().then((res) => {
        if (res.code === 0) {
          this.TopList = res.data.topList
        }
      })
    },
    _initScroll () {
      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new Bscroll(this.$refs.wrapperRank, {
            click: true,
            probeType: 3
          })
        } else {
          this.scroll.refresh()
        }
      })
    },
    gotodesc (id) {
      let url = 'https://y.qq.com/w/toplist.html?ADTAG=myqq&from=myqq&channel=10007100&id=' + id + '&type=top'
      window.location.href = url
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.rank
    /*background #f4f4f4*/
  .wrapper
    position absolute
    left: 0;
    right 0
    top: 84px
    bottom 0
    width: 100%;
    overflow: hidden;
    background #f4f4f4
    .content
      .liubai
        width 100%
        height 10px
      .list
        display flex
        background #fff
        margin 10px 0 10px 0
        &:first-child
          margin-top 0
        .icon
          flex 0 0 120px
          .img
            height 100px
            width 100px
            margin 0 10px 0 10px
        .text
          flex 1
          display flex
          flex-direction column
          width 55%
          .name
            flex 4
            width 90%
            line-height 30px
            font-size 16px
            font-weight 300
            word-break:keep-all
            white-space:nowrap;
            overflow:hidden;
            text-overflow:ellipsis;
          .ranklist
            flex 9
            font-size 14px
            .ranklist-item
              font-size 12px
              font-weight lighter
              color rgba(7,17,27,0.6)
              padding 4px 10px 4px 0
              word-break:keep-all
              white-space:nowrap;
              overflow:hidden;
              text-overflow:ellipsis;
</style>
