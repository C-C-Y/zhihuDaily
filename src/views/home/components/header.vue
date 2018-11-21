<template>
  <div class="headBox">
    <div class="icon-menu left" @click.stop="handleShowMenu()">
      <svg class="icon menu"
           aria-hidden="true">
        <use xlink:href="#icon-liebiao"></use>
      </svg>
    </div>
    <div class="message left">
     {{date}}
    </div>
    <div class="icon-config right">
      <svg class="icon config"
           aria-hidden="true">
        <use xlink:href="#icon-msnui-triangle-down"></use>
      </svg>
    </div>
    <div class="icon-alert right">
      <svg class="icon alert"
           aria-hidden="true">
        <use xlink:href="#icon-tixing"></use>
      </svg>
    </div>

  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "HomeHeader",
  data() {
    return {
      date: "首页"
    };
  },
  methods: {
    ...mapMutations({
      handleShowMenu: "menuShowChange"
    })
  }
};
</script>

<style lang="stylus" scoped>
@import "~styles/common.styl"
.headBox
  position fixed
  top 0
  left 0
  right 0
  z-index 10
  line-height $headerHeight
  height $headerHeight
  background-color $homeBgc
  color #fff
  font-size .5rem
  .left
    float left
    margin-left .7rem
  .icon-menu 
    margin-left .4rem
  .right
    float right  
    margin-right .7rem 
</style>
