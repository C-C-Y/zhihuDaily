<template>
  <div class="my-header">
    <div class="my-return"
         @click="returnHome()">
      <svg class="icon return-icon"
           aria-hidden="true">
        <use xlink:href="#icon-fanhui"></use>
      </svg>
    </div>
    <div class="searchBox">
      <svg class="icon search-icon"
           aria-hidden="true">
        <use xlink:href="#icon-sousuo"></use>
      </svg>
      <input type="text"
             class="searchText">
    </div>
    <button class="config"
            @click="showDelete()"
            :disabled="!canclick">{{config}}</button>
  </div>
</template>

<script>
export default {
  name: "CollectedHeader",
  methods: {
    showDelete() {
      this.$store.commit("showDelete");
    },
    returnHome() {
      this.$router.push("/");
      this.$store.commit("hideDelete");
    }
  },
  props: ["canclick"],
  computed: {
    config() {
      if (this.$store.state.deleteMenu) {
        return "取消";
      } else {
        return "编辑";
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/common.styl'
.my-header
  display flex
  height $headerHeight
  line-height $headerHeight
  background-color $homeBgc
  color #fff
  font-size 0.4rem
  .searchBox
    flex 1
    position relative
    background-color #fff
    line-height 0.6rem
    margin 0.3rem
    border-radius 0.1rem
    .search-icon
      margin-left 0.2rem
      color #666
    .searchText
      position absolute
      margin 0 0.2rem
      width 4rem
      height 0.6rem
      font-size 0.35rem
      color #333
  .my-return
    margin-left 0.2rem
  .config
    background-color $homeBgc
    color #fff
    margin-right 0.2rem
    letter-spacing 0.05rem
</style>
