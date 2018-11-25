<template>
  <div class="headBox" v-show="artHeadShow" ref=ArticleHeader>
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
    <div class="icon-collect icon-right" @click="collect()">
      <svg class="icon" :class="{collect:isCollected}"
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
      this.$router.push("/", this.clearArticle);
    },
    clearArticle() {
      this.$store.commit("clearArticle");
    },
    enterComment() {
      let _this = this;
      this.$router.push({
        name: "comment",
        params: { id: _this.$route.params.id }
      });
    },
    collect() {
      this.$store.commit("handleCollect", this.$route.params.id);
      if (!window.localStorage) {
        alert("由于您开启了无痕浏览或禁止本地缓存,关闭网页则会清空收藏列表");
      }
    }
  },
  computed: {
    ...mapState(["ArtExtraInfo", "artHeadShow", "headerOpacity"]),
    isCollected() {
      return this.$store.state.collectIdList[this.$route.params.id];
    }
  },
  watch: {
    headerOpacity(val) {
      this.$refs.ArticleHeader.style.opacity = val;
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
  line-height $headerHeight
  height $headerHeight
  background-color $homeBgc
  color #fff
  font-size 0.48rem
  .icon-return
    float left
    margin-left .25rem
    color #fff
  .icon-right
    float right
    margin-right  .48rem
  .collect
    color #e24
</style>
