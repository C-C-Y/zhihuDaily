<template>
  <div class="headBox" v-show="artHeadShow" ref=articalHeader>
    <div class="icon-return" @click="returnHome()">
      <svg class="icon"
           aria-hidden="true">
        <use xlink:href="#icon-fanhui"></use>
      </svg>
    </div>
    <div class="icon-support icon-right">
      <svg class="icon support"
           aria-hidden="true">
        <use xlink:href="#icon-dianzan"></use>
      </svg>
      {{ArtExtraInfo.popularity}}
    </div>
    <div class="icon-comment icon-right " @click="enterComment()">
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
  methods: {
    returnHome() {
      this.$router.push("/", this.clearArtical);
    },
    clearArtical() {
      this.$store.commit("clearArtical");
    },
    enterComment() {
      let _this = this;
      this.$router.push({
        name: "comment",
        params: { id: _this.$route.params.id }
      });
    }
  },
  computed: {
    ...mapState(["ArtExtraInfo", "artHeadShow", "headerOpacity"])
  },
  watch: {
    headerOpacity(val) {
      this.$refs.articalHeader.style.opacity = val;
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/common.styl'
.headBox
  position fixed
  top 0 
  right 0
  left 0
  z-index 5
  line-height 1.2rem
  height 1.2rem
  background-color $homeBgc
  color #fff
  font-size 0.45rem
  .icon-return
    float left
    margin-left .25rem
    color #fff
  .icon-right
    float right
    margin-right  .4rem
  
</style>
