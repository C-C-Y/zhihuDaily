
<template>
  <div class="swiper">
    <swiper :options="swiperOption"
            ref="mySwiper" v-show="swiperData.length">
      <swiper-slide v-for="item of swiperData"
                    :key=item.id><img class="swiper-img"
             :src="item.image" @click="enterDetail(item.id)">
        <div class="swiper-info">{{item.title}}</div>
      </swiper-slide>
      <div class="swiper-pagination"
           slot="pagination"></div>

    </swiper>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "HomeSwiper",
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination", // 轮播点
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, //修改swiper的父元素时，自动初始化swiper
        autoplay: 6000, // 整个轮播滑动总时间
        autoplayDisableOnInteraction: false, // 手动滑动后是否继续自动轮播 false为开启
        speed: 1000 //一个轮播页面滑动的时间
      },
      swiperData: []
    };
  },
  methods: {
    enterDetail(artId) {
      this.$router.push({ name: "artical", params: { id: artId } });
    }
  },
  created() {
    this.$axios
      .get("https://zhihu-daily.leanapp.cn/api/v1/last-stories")
      .then(res => {
        this.swiperData = res.data.STORIES.top_stories;
      });
  }
};
</script>

<style lang="stylus" scoped>
.swiper >>>.swiper-pagination-bullet
  background-color #fff
.swiper
  position relative
  height 0
  width 100%
  padding-bottom 53.3%
  .swiper-img
    width 100%
    height 4rem
  .swiper-info
    position absolute
    bottom 30px
    text-align center
    color #fff
    width 100%
    font-size 0.4rem
</style>
