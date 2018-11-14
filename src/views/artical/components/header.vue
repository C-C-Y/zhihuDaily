<template>
  <div class="headBox">
    <router-link class="icon-return" tag="div" to="/">
      <svg class="icon"
           aria-hidden="true">
        <use xlink:href="#icon-fanhui"></use>
      </svg>
    </router-link>
    <div class="icon-support icon-right">
      <svg class="icon support"
           aria-hidden="true">
        <use xlink:href="#icon-dianzan"></use>
      </svg>
      {{ArtExtraInfo.popularity}}
    </div>
    <div class="icon-comment icon-right ">
      <svg class="icon comment"
           aria-hidden="true">
        <use xlink:href="#icon-pinglun"></use>
      </svg>
      {{ArtExtraInfo.comments}}
    </div>
    <div class="icon-share icon-right">
      <svg class="icon share "
           aria-hidden="true">
        <use xlink:href="#icon-fenxiang"></use>
      </svg>
    </div>
    <div class="icon-collect icon-right">
      <svg class="icon clollect"
           aria-hidden="true">
        <use xlink:href="#icon-shoucang1"></use>
      </svg>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "HomeHeader",
  data() {
    return {
      commentAmount: 1,
      supportAmount: 2
    };
  },
  computed: {
    ...mapState(["ArtExtraInfo"])
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/common.styl'
.headBox
  position relative
  line-height 1.2rem
  height 1.2rem
  background-color $homeBgc
  color #fff
  font-size 0.5rem
  .icon-return
    float left
    margin-left .25rem
    color #fff
  .icon-right
    float right
    margin-right  .5rem
</style>
