<template>
  <div class="my-header">
    <router-link class="my-return" to="/" tag="div">
      <svg class="icon return-icon"
           aria-hidden="true">
        <use xlink:href="#icon-fanhui"></use>
      </svg>
    </router-link>
    <div class="searchBox">
      <svg class="icon search-icon"
           aria-hidden="true">
        <use xlink:href="#icon-sousuo"></use>
      </svg>
    <input type="text" class="searchText">
    </div>
    <span class="config">编辑</span>
  </div>
</template>

<script>
export default {
  name: "CollectedHeader"
};
</script>

<style lang="stylus" scoped>
@import "~styles/common.styl"
.my-header
  display flex
  height $headerHeight
  line-height $headerHeight
  background-color $homeBgc
  color #fff
  font-size .4rem
  .searchBox
    flex 1
    position relative 
    background-color #fff
    line-height .6rem
    margin .3rem
    border-radius .1rem
    .search-icon
      margin-left .2rem
      color #666
    .searchText
      position absolute 
      margin 0 .2rem 
      width 4rem
      height .6rem
      font-size .35rem
      color #333
  .my-return
    margin-left .2rem
  .config
    margin-right .2rem
    letter-spacing .05rem
</style>
