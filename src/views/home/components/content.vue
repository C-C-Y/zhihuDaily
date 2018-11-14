<template>
  <div class="content"
       ref="content">
    <div>
      <home-swiper></home-swiper>
      <div class="art-chunk border-bottom"
           v-for="artical in articals"
           :key="artical.date">
        <p class="art-time">{{artical.date}}</p>
        <ul>
          <li class="art-item "
              v-for="item in artical.stories"
              :key="item.id"
              @click.stop="enterArtical(item.id)">
            <span class="item-info">{{item.title}}</span>
            <img :src="item.images[0]"
                 alt="图片"
                 class="item-img">
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import HomeSwiper from "./swiper";
import { mapState } from "vuex";
export default {
  name: "HomeContent",
  components: {
    HomeSwiper
  },
  methods: {
    enterArtical(id) {
      this.$router.push({ name: "artical", params: { id } });
    }
  },
  computed: {
    ...mapState(["articals"])
  },
  mounted() {
    this.$nextTick(function() {
      if (!this.$refs.content) {
        return;
      }

      this.scroll = new BScroll(this.$refs.content, {
        click: true,
        pullUpLoad: {
          threshold: 50
        },
        scrollbar: {
          fade: true,
          interactive: false
        }
      });

      console.log(this.scroll);
      this.scroll.on("pullingUp", () => {
        this.$store.dispatch("loaArticals").then(() => {
          this.scroll.finishPullUp();
        });
      });
    });
  }
};
</script>

<style lang="stylus" scoped>
/*
better-scroll使用必须外层div限制宽高 position设置成fixed和absolute都可以,relative有时失效
 */
.border-bottom
  &:before
    background-color #aaa
    bottom 0.2rem
.content
  position absolute
  top 1.2rem
  bottom 0
  left 0
  right 0
  overflow hidden
  width 100%
  background-color #ddd
  .art-chunk
    padding 0.4rem 0.2rem
    .art-time
      font-size 0.4rem
    .art-item
      display flex
      justify-content space-between
      overflow hidden
      margin 0.3rem auto
      padding 0.25rem 0.4rem
      border-radius 0.12rem
      background-color #fff
      .item-img
        width 2rem
        height 2rem
      .item-info
        font-size 0.45rem
</style>
