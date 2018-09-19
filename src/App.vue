<template>
  <div id="app">
    <m-header></m-header>
    <m-title></m-title>
    <div class="router-wrapper">
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
import MHeader from './components/m-header/m-header'
import Recommend from './components/reconmend/reconmend'
import MTitle from './components/m-title/m-title'
export default {
  name: 'App',
  components: {
    MHeader,
    Recommend,
    MTitle
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "assets/reset.css"
html
  position absolute
  top 0
  right:0
  left:0
  bottom:0
</style>
