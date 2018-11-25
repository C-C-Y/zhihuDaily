<template>
  <div class="my-content"
       ref="content">
    <div>
    <div class="my-content-img">
      <img :src="articleContent.image" alt="图片" class="my-img">
    </div>
    <div class="my-content-text" v-html="articleContent.body"  ref="artContnent">
    </div>
     
    </div>
  </div>
</template>
article
<script>
import { mapState } from "vuex";
export default {
  name: "ArticleContent",
  methods: {},
  computed: {
    ...mapState(["articleContent"])
  },
  data() {
    return {
      startY: 0
    };
  },
  updated() {},
  watch: {
    articleContent() {
      this.$nextTick(() => {
        let _this = this;
        this.$refs.artContnent.addEventListener("touchstart", function() {
          _this.startY = event.touches[0].clientY;
        });
        this.$refs.artContnent.addEventListener("touchmove", function() {
          let scrollY = document.documentElement.scrollTop;
          let endY = event.changedTouches[0].clientY;
          if (scrollY < 60) {
            let opacity = (60 - scrollY) / 60;
            _this.$store.commit("showArtHeader", opacity);
          } else if (_this.$store.state.artHeadShow && scrollY >= 60) {
            _this.$store.commit("hideArtHeader");
          }
          if (
            endY - _this.startY > 20 &&
            scrollY > 60 &&
            !_this.$store.state.artHeadShow
          ) {
            _this.$store.commit("showArtHeader");
          }
        });
      });
    }
  }
};
</script>

<style  src="styles/articleCss.css" >
</style>
<style lang="stylus" scoped>
.my-content
  position absolute
  top 1.2rem
  bottom 0
  left 0
  right 0
  z-index 4
  .my-content-img
    position relative
    overflow hidden
    height 0
    padding-bottom 53.3%
    background-color #ccc
    .my-img
      width 100%
      height 4rem
  .my-content-text
    margin-top -4rem  
</style>
