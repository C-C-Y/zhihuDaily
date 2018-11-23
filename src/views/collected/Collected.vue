<template>
  <div>
    <collected-header :canclick=idList></collected-header>
    <collected-content :dataList="articleList"
                       v-if="idList"
                       @reload="getData()"></collected-content>
    <div v-else
         class="showEmpty">收藏列表空空如也</div>
  </div>
</template>

<script>
import CollectedHeader from "./components/header.vue";
import CollectedContent from "./components/content.vue";
import { mapState } from "vuex";
export default {
  name: "collected",
  data() {
    return {
      articleList: []
    };
  },
  components: {
    CollectedHeader,
    CollectedContent
  },
  computed: {
    ...mapState(["collectIdList"]),
    idList() {
      return Object.keys(this.collectIdList).length !== 0;
    }
  },
  methods: {
    getData() {
      let idList = Object.keys(this.collectIdList);
      let ajaxList = [];
      let dataList = [];
      idList.forEach(item => {
        let getContent = this.$axios.get(
          "https://zhihu-daily.leanapp.cn/api/v1/contents/" + item
        );
        ajaxList.push(getContent);
      });
      this.$axios
        .all(ajaxList)
        .then(result => {
          result.forEach(ite => {
            dataList.push(ite.data.CONTENTS);
          });
        })
        .catch(err => {
          console.log(err);
        });
      this.articleList = dataList;
    }
  },
  created() {
    this.getData();
  }
};
</script>

<style lang="stylus" scoped>
.showEmpty
  position absolute
  top 1.2rem
  left 0
  right 0
  bottom 0
  display flex
  justify-content center
  align-items center
  background-color #ddd
  color #333
  font-size 0.8rem
</style>
