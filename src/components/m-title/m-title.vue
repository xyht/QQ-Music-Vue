<template>
  <div class="title">
    <div class="tab-item">
      <router-link to="Recommend" class="link">
        推荐
      </router-link>
    </div>
    <div class="tab-item" >
      <router-link to="Rank" class="link">
        排行榜
      </router-link>
    </div>
    <div class="tab-item">
      <router-link to="Search" class="link">
        搜索
      </router-link>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.title
  width 100%
  height 40px
  display flex
  .tab-item
    flex 1
    text-align center
    line-height 40px
    color rgba(7,17,27,0.7)
    background #ffffff
    .link
      color rgba(7,17,27,0.7)
      display block
      width 100%
      height 96%
    .router-link-active
      color #31c27c
      border-bottom 2px #31c27c solid
</style>
