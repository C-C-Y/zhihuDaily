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
    ...mapMutations(["handleShowMenu"])
  }
};
</script>

<style lang="stylus" scoped>
@import "~styles/common.styl"
.headBox
  line-height 1.2rem
  height 1.2rem
  background-color $homeBgc
  color #fff
  font-size .5rem
  .left
    float left
    margin-left .5rem
  .right
    float right  
    margin-right .5rem 
</style>
