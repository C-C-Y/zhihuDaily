<template>
  <div>
  <collected-header></collected-header>
  <collected-content :dataList = "articleList"></collected-content> 
  </div>
</template>

<script>
import CollectedHeader from "./components/header.vue";
import CollectedContent from "./components/content.vue";
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
  created() {
    /*  let idlist = JSON.parse(localStorage.idList);
    console.log(idlist); */
    let idList = Object.keys(this.$store.state.collectIdList);
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
};
</script>

<style lang="stylus" scoped>
</style>
