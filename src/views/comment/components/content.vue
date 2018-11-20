<template>
  <div>
    <div class="my-long-comment">
      <p class="border-bottom my-comment-info">{{ArtExtraInfo.long_comments+"条长评"}}</p>
      <div class="my-comment-item border-bottom"
           v-for="lComment of longComments"
           :key="lComment.id">
        <img :src="lComment.avatar"
             alt=""
             class="my-critics-logo">
        <div class="my-comment-text">
          <p class="my-critics-name">{{lComment.author}}</p>
          <p>{{lComment.content}}</p>
        </div>
      </div>
    </div>
    <div class="my-short-comments">
      <p class="border-bottom my-comment-info">{{ArtExtraInfo.short_comments+"条短评"}}</p>
      <div class="my-comment-item border-bottom"
           v-for="sComment of shortComments"
           :key="sComment.id">
        <img :src="sComment.avatar"
             alt=""
             class="my-critics-logo">
        <div class="my-comment-text">
          <p class="my-critics-name">{{sComment.author}}</p>
          <p>{{sComment.content}}</p>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "CommentCotent",
  computed: {
    ...mapState(["ArtExtraInfo", "longComments", "shortComments"])
  }
};
</script>


<style lang="stylus" scoped>
.border-bottom
  &:before  
    background-color  #888
p
  margin 0 
.my-long-comment
.my-short-comments
  color #616466
  font-family 'Helvetica Neue', Helvetica, Arial, Sans-serif     
.my-long-comment
  margin-top 1.2rem
.my-short-comments
  margin-bottom .7rem  
.my-comment-info
  height 0.9rem
  line-height 0.9rem
  background-color #ddd
  font-size 0.38rem
  padding-left .2rem
  letter-spacing 0.1rem
.my-comment-item
  overflow hidden
  padding .3rem .4rem 
  .my-critics-logo
    width 0.8rem
    height 0.8rem
    border-radius 0.4rem
    float left
  .my-comment-text
    margin-top .2rem 
    margin-left 1rem 
    font-size .34rem
    line-height .5rem
    .my-critics-name
      font-size .36rem
      font-weight 600
      margin-bottom .25rem
</style>
