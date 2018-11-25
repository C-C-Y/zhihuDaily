<template>
  <div class="articles">
    <articles-header ></articles-header>
    <articles-content></articles-content>
  </div>
</template>

<script>
import ArticlesHeader from "./components/header";
import ArticlesContent from "./components/content";
export default {
  name: "articles",
  components: {
    ArticlesHeader,
    ArticlesContent
  },
  created() {
    this.$store.dispatch("loadArtContent", this.$route.params.id);
    this.$store.dispatch("loadExtraInfo", this.$route.params.id);
  }
};
</script>

<style lang="stylus" scoped>

</style>
