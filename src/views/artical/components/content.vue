<template>
  <div class="my-content"
       ref="content">
    <div>
    <div class="my-content-img">
      <img :src="articalContent.image" alt="图片" class="my-img">
    </div>
    <div class="my-content-text" v-html="articalContent.body" v-if="cssLoadSucc">
    </div>
     
    </div>
  </div>
</template>

<script>
// import BScroll from "better-scroll";
import { mapState } from "vuex";
export default {
  name: "ArticalContent",
  methods: {},
  computed: {
    ...mapState(["articalContent"])
  },
  data() {
    return {
      cssLoadSucc: false
    };
  },
  /*  created() {
    this.$nextTick(function() {
      this.scroll = new BScroll(this.$refs.content, {
        pullUpLoad: {
          threshold: 50
        },
        scrollbar: {
          fade: true,
          interactive: false
        }
      });
    });
  }, */
  watch: {
    articalContent(val) {
      let head = document.getElementsByTagName("head")[0];
      let link = document.createElement("link");
      link.rel = "stylesheet";
      link.setAttribute("media", "all");
      link.setAttribute("type", "text/css");
      let href = val.css[0];
      link.id = "artCss";
      link.href = href;
      head.appendChild(link);
      this.cssLoadSucc = true;

      // head.appendChild(link);
    }
  }
};
</script>

<style lang="stylus" scoped>

.my-content
  position absolute
  top 1.2rem
  bottom 0
  left 0
  right 0
  
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
