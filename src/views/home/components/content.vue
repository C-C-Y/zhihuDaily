<template>
  <div class="list"
       v-if="articles.length" ref="artical" >
    <home-swiper></home-swiper>
    <ul class="art-chunk border-bottom"
        v-for="(chunk,index) of articles"
        :key="index">
      <li class="chunk-time">{{returnDate(chunk.date)}}</li>
      <li class="art-item"
          v-for="item of chunk.stories"
          :key="item.id" @click="enterArticle(item.id)">
        <span class="item-title">{{item.title}}</span>
        <img :src="item.images[0]"
             alt=""
             class="item-img">
      </li>
    </ul>
    <load-animation v-if="loadShow"></load-animation>
  </div>
</template>

<script>
// import BScroll from "better-scroll";
import HomeSwiper from "./swiper";
import { mapState } from "vuex";
import LoadAnimation from "@/common/loadAnimation";
export default {
  name: "HomeContent",
  components: {
    HomeSwiper,
    LoadAnimation
  },
  data() {
    return {
      articles: [],
      loadShow: false,
      addEvent: false,
      loadData: false,
      scroll_top: 0,
      i: null
    };
  },
  methods: {
    enterArticle(id) {
      this.$router.push({ name: "articles", params: { id } });
    },
    returnDate(da) {
      let month = da.substr(4, 2);
      month = Number(month) + "月";
      let day = da.substr(6, 2);
      day = Number(day) + "日";
      return month + day;
    },
    getParams() {
      let date = new Date();
      let today = date.getDate();
      let num = this.articles.length;
      let yeaterday = date.setDate(today - num + 1);
      let paramsDate = new Date(yeaterday);
      let paramsDay = paramsDate.getDate() + "";
      let paramsMonth = paramsDate.getMonth() + 1 + "";
      paramsDay = paramsDay.length === 1 ? "0" + paramsDay : paramsDay;
      paramsMonth = paramsMonth.length === 1 ? "0" + paramsMonth : paramsMonth;
      let params = paramsDate.getFullYear() + "" + paramsMonth + paramsDay;
      return params;
    },
    getArticalList() {
      let params = this.getParams();
      let url =
        "https://zhihu-daily.leanapp.cn/api/v1/before-stories/" + params;
      this.$axios.get(url).then(res => {
        let data = res.data.STORIES;
        this.articles.push(data);
      });
    },
    scrollEvent() {
      clearTimeout(this.i);
      this.i = setTimeout(() => {
        this.addEvent = true;
        let scrollTop =
          document.documentElement.scrollTop || document.body.scrollTop;
        let clientHeight =
          document.documentElement.clientHeight || document.body.clientHeight;
        let scrollHeight = document.documentElement.scrollHeight;
        this.scroll_top = scrollTop;
        if (scrollTop >= scrollHeight - clientHeight) {
          this.loadShow = true;
          if (!this.loadData) {
            this.loadData = true;
            this.getArticalList();
          }
        }
      }, 50);
    }
  },
  computed: {
    ...mapState(["menuShow"])
  },
  updated() {
    if (!this.addEvent) {
      document.addEventListener("scroll", this.scrollEvent);
    }
  },
  watch: {
    articles() {
      this.loadShow = false;
      this.loadData = false;
    }
  },
  created() {
    this.getArticalList();
  },
  activated() {
    document.addEventListener("scroll", this.scrollEvent);
    document.documentElement.scrollTop = this.scroll_top;
  },
  deactivated() {
    document.removeEventListener("scroll", this.scrollEvent);
  }
};
</script>

<style lang="stylus" scoped>
.border-bottom
  &:before
    background-color #aaa
    bottom 0.2rem
.list
  position relative
  top 1.2rem
  width 100%
  background-color #ddd
  z-index 5
  color #333
  .art-chunk
    padding 0.4rem 
    .chunk-time
      font-size 0.4rem
    .art-item
      overflow hidden
      margin-top 0.2rem
      padding 0.25rem 0.4rem
      border-radius 0.12rem
      background-color #fff
      .item-img
        float right
        width 2rem
        height 2rem
      .item-title
        float left
        font-size 0.4rem
        width 3rem
        height 2rem

</style>
