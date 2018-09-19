<template>
  <div class="m-header">
    <div class="icon"></div>
    <div class="title">QQ音乐</div>
    <div class="bt-guanzhu">关注我们</div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .m-header
    width 100%
    height 44px
    background #31c27c
    .icon
      width 44px
      height 44px
      float left
      background url("QQMusic.png") no-repeat center center
      background-size 60%
    .title
      float left
      width 30%
      height 44px
      line-height 44px
      font-size 18px
      font-weight lighter
      color #fff
    .bt-guanzhu
      width 21%
      height 28px
      float right
      margin 8px 10px 8px 10px
      text-align center
      line-height 28px
      background #149c5a
      border-radius 20px
      font-size 14px
      color #fff
</style>
