<template>
  <div class="menu" v-if="menuShow" >
    <div class="menu-header">
      <img src="@/assets/picture/1.jpg"
           alt="头像"
           class="picture">
      <a href="#"
         class="login">登录</a>
    </div>
    <div class="menu-content">
      <a href="#"
         class="collection border-bottom">
        <svg class="icon collection-icon"
             aria-hidden="true">
          <use xlink:href="#icon-shoucang1"></use>
        </svg>
        <span class="collection-text">我的收藏</span>
      </a>
      <a href="#"
         class="download border-bottom">
        <svg class="icon download-icon"
             aria-hidden="true">
          <use xlink:href="#icon-xiazai"></use>
        </svg>
        <span class="download-text">我的下载</span>
      </a>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from "vuex";
export default {
  name: "HomeMenu",
  computed: {
    ...mapState(["menuShow"])
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/common'
.border-bottom
  &:before
    border-color #bbb
.menu
  position absolute
  top 0
  left 0
  bottom 0
  width 70%
  z-index 20
  background-color #fff
  .menu-header
    display flex
    align-items center
    height 3rem
    background-color $menuBgc
    .picture
      width 1.2rem
      height 1.2rem
      border-radius .6rem
      margin-left 20%
    .login
      margin-left 15%
      color #fff
      font-size 0.45rem
  .menu-content
    font-size 0.4rem
    .collection
    .download
      display block
      height 1.2rem
      line-height 1.2rem
      text-align center
      background-color rgba(200,200,200,0.5)
      .collection-text
      .download-text  
        margin-left .3rem
        
</style>
