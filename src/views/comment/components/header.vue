<template>
  <div class="comment-header"
       >
    <div class="icon-close" @click="closeComment()">
      <svg class="icon "
           aria-hidden="true">
        <use xlink:href="#icon-guanbi"></use>
      </svg>
    </div>
    <span class="commentLength">{{"全部"+ArtExtraInfo.comments+"条评论"}}</span>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "CommentHeader",
  methods: {
    closeComment() {
      this.$router.go(-1);
      this.$store.commit("clearComments");
    }
  },
  computed: {
    ...mapState(["ArtExtraInfo"])
  }
};
</script>

<style lang="stylus" scoped>
@import "~styles/common.styl"
.comment-header
  position fixed
  top 0
  left 0
  right 0
  z-index 2
  height $headerHeight
  line-height $headerHeight
  display flex
  font-size 0.45rem
  background-color $homeBgc
  color #fff
  font-family 'Helvetica Neue', Helvetica, Arial, Sans-serif
  .icon-close
    margin-left 0.5rem
  .commentLength
    margin-left .4rem
    letter-spacing 0.1rem
    
</style>
