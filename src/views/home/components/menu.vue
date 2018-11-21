<template>
  <transition name="menu">
  <div class="menu"
       v-show="menuShow">
    <div class="menu-left">
      <div class="menu-header">
        <img src="@/assets/picture/1.jpg"
             alt="头像"
             class="picture">
        <a href="#"
           class="login">登录</a>
      </div>
      <div class="menu-content">
        <a
           class="collection border-bottom"  @click="enterCollection()">
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
    <div class="menu-right" @click="hideMenu()"></div>
  </div>
  </transition>
</template>

<script>
// @ is an alias to /src
import { mapState, mapMutations } from "vuex";
export default {
  name: "HomeMenu",
  computed: {
    ...mapState(["menuShow"])
  },
  methods: {
    ...mapMutations({
      hideMenu: "menuShowChange"
    }),
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
    border-color #bbb
.menu-enter-active
.menu-leave-active
  transition all .3s ease-out
  transform translateX(0)
  opacity 1
.menu-enter
.menu-leave-to
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
    background-color #fff
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
  .menu-right
    margin-left 60%
    height 100%
</style>
