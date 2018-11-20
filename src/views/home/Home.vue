<template>
  <div class="home">
    <home-header></home-header>
    <home-menu></home-menu>
    <home-content></home-content> 
  </div>
</template>

<script>
// @ is an alias to /src

import HomeHeader from "./components/header";
import HomeMenu from "./components/menu";
import HomeContent from "./components/content";

export default {
  name: "home",
  components: {
    HomeHeader,
    HomeMenu,
    HomeContent
  },
  activated() {
    let artCss = document.getElementById("artCss");
    if (artCss) {
      let head = document.getElementsByTagName("head")[0];
      head.removeChild(artCss);
    }
  }
};
</script>

<style lang="stylus" scoped>
</style>
