<template>
  <div class="home"
       ref="home">
    <home-header></home-header>
    <home-menu ref="menu"></home-menu>
    <home-content></home-content>
    <!-- <home-swiper :swiperData="swiperData"></home-swiper>
    <home-artical></home-artical> -->
  </div>
</template>

<script>
// @ is an alias to /src

import HomeHeader from "./components/header";
import HomeMenu from "./components/menu";
import HomeContent from "./components/content";
/* import HomeSwiper from "./components/swiper";
import HomeArtical from "./components/artical"; */

export default {
  name: "home",
  components: {
    HomeHeader,
    HomeMenu,
    /*  HomeSwiper,
    HomeArtical */
    HomeContent
  },
  methods: {
    getHomeData() {
      this.$store.dispatch("loadSwiper");
      this.$store.dispatch("loaArticals");
    },
    menuHidden() {
      let _this = this;
      let Home = this.$refs.home;
      Home.addEventListener("click", function() {
        if (
          !_this.$refs.menu.$el.contains(event.target) &&
          _this.$store.state.menuShow
        ) {
          _this.$store.commit("handleShowMenu");
        }
      });
    }
  },
  created() {
    this.getHomeData();
  },
  mounted() {
    this.menuHidden();
    let articalCss = document.getElementById("artCss");
    let head = document.getElementsByTagName("head")[0];
    if (articalCss) {
      head.removeChild(articalCss);
    }
  }
};
</script>

<style lang="stylus" scoped>
</style>
