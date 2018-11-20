<template>
  <div class="artical">
    <artical-header ></artical-header>
    <artical-content></artical-content>
  </div>
</template>

<script>
import ArticalHeader from "./components/header";
import ArticalContent from "./components/content";
export default {
  name: "artical",
  components: {
    ArticalHeader,
    ArticalContent
  },
  created() {
    this.$store.dispatch("loadArtContent", this.$route.params.id);
    this.$store.dispatch("loadExtraInfo", this.$route.params.id);
  }
};
</script>

<style lang="stylus" scoped>

</style>
