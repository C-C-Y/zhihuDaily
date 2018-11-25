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
          <p class="extraInfo">
            <span class="commentTime">{{getTime(lComment.time)}}</span>
            <svg class="icon"
                 aria-hidden="true">
              <use xlink:href="#icon-dianzan"></use>
            </svg>
            {{lComment.likes}}
          </p>
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
          <p class="extraInfo">
            <span class="commentTime">{{getTime(sComment.time)}}</span><svg class="icon"
                 aria-hidden="true">
              <use xlink:href="#icon-dianzan"></use>
            </svg>
            {{sComment.likes}}
          </p>
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
  },
  methods: {
    getTime(time) {
      let UTCtime = new Date(time * 1000);
      let hours = UTCtime.getHours();
      let minutes = UTCtime.getMinutes();
      let month = UTCtime.getMonth() + 1;
      let day = UTCtime.getDate();
      let nowDate = new Date();
      let nowMonth = nowDate.getMonth() + 1;
      let nowday = nowDate.getDate();
      minutes = minutes < 10 ? "0" + minutes : minutes;
      return nowMonth === month
        ? day === nowday
          ? hours + ":" + minutes
          : day + "日" + " " + hours + ":" + minutes
        : month + "月" + day + "日" + " " + hours + ":" + minutes;
    }
  }
};
</script>


<style lang="stylus" scoped>
.border-bottom
  &:before
    background-color #888
p
  margin 0
.my-long-comment, .my-short-comments
  color #616466
  font-family 'Helvetica Neue', Helvetica, Arial, Sans-serif
.my-long-comment
  margin-top 1.2rem
.my-short-comments
  margin-bottom 0.7rem
.my-comment-info
  height 0.9rem
  line-height 0.9rem
  background-color #ddd
  font-size 0.38rem
  padding-left 0.2rem
  letter-spacing 0.1rem
.my-comment-item
  overflow hidden
  padding 0.3rem 0.4rem
  .my-critics-logo
    width 0.8rem
    height 0.8rem
    border-radius 0.4rem
    float left
  .my-comment-text
    margin-top 0.2rem
    margin-left 1rem
    font-size 0.34rem
    line-height 0.5rem
    .my-critics-name
      margin-bottom 0.25rem
      font-size 0.36rem
      font-weight 600
    .extraInfo
      margin-top 0.2rem
      padding-right 0.5rem
      font-size 0.35rem
      text-align right
      .commentTime
        margin-right 0.3rem
</style>
