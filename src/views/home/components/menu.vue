<template>
  <transition name="menu">
    <div class="menu"
         v-show="menuShow"
         @touchmove.prevent>
      <div class="menu-left">
        <div class="menu-header">
          <img src="@/assets/picture/1.jpg"
               alt="头像"
               class="picture">
          <a href="#"
             class="login">登录</a>
        </div>
        <div class="menu-content">
          <a class="collection border-bottom"
             @click="enterCollection()">
            <svg class="icon collection-icon"
                 aria-hidden="true">
              <use xlink:href="#icon-shoucang1"></use>
            </svg>
            <span class="collection-text">我的收藏</span>
          </a>
          <a href=""
             class="download border-bottom" @click.prevent>
            <svg class="icon download-icon"
                 aria-hidden="true">
              <use xlink:href="#icon-xiazai"></use>
            </svg>
            <span class="download-text">我的下载</span>
          </a>
           <footer class="my-footer border-top">
            <p>Designed by CCY</p> <a href="https://github.com/C-C-Y/zhihuDaily" class="gitHub">https://github.com/C-C-Y/zhihuDaily</a>
          </footer> 
        </div>
      </div>
      <div class="menu-right"
           @click="hideMenu()"></div>
    </div>
  </transition>
</template>

<script>
// @ is an alias to /src
import { mapState } from "vuex";
export default {
  name: "HomeMenu",
  computed: {
    ...mapState(["menuShow"])
  },
  methods: {
    hideMenu() {
      this.$store.commit("menuShowChange");
    },
    enterCollection() {
      this.$router.push("collected");
      this.$store.commit("menuShowChange");
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/common'
.border-bottom
  &:before
    background-color #bbb
.border-top
  &:before
    background-color #aaa
    top -.2rem    
.menu-enter-active, .menu-leave-active
  transition all 0.3s ease-out
  transform translateX(0)
  opacity 1
.menu-enter, .menu-leave-to
  transform translateX(-100%)
  opacity 0
.menu
  position fixed
  top 0
  bottom 0
  width 100%
  z-index 20
  overflow hidden
  .menu-left
    width 65%
    height 100vh
    float left
    background-color #eee
    .menu-header
      display flex
      align-items center
      height 2.3rem
      background-color $menuBgc
      .picture
        width 1rem
        height 1rem
        border-radius 0.5rem
        margin-left 20%
      .login
        margin-left 15%
        color #fff
        font-size 0.45rem
    .menu-content
      font-size 0.4rem
      .collection, .download
        display block
        height 1.2rem
        line-height 1.2rem
        text-align center
        background-color rgba(200, 200, 200, 0.5)
        .collection-text, .download-text
          margin-left 0.3rem
      .my-footer 
        margin-top 7rem
        font-size .35rem
        color #444 
        text-align center 
        .gitHub
          display block
          margin-top .05rem 
  .menu-right
    margin-left 60%
    height 100%
</style>
