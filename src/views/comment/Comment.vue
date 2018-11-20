<template>
  <div>
    
    <div v-if="showContent">
      <comment-header></comment-header>
      <comment-content></comment-content>
    </div>
    <load-animation v-else></load-animation>
  </div>
</template>

<script>
import CommentHeader from "./components/header.vue";
import CommentContent from "./components/content.vue";
import LoadAnimation from "@/common/loadAnimation";
export default {
  name: "comment",
  components: {
    CommentContent,
    CommentHeader,
    LoadAnimation
  },
  computed: {
    showHeader() {
      return this.$store.state.ArtExtraInfo.comments;
    },
    showContent() {
      return (
        this.$store.state.ArtExtraInfo.long_comments &&
        this.$store.state.longComments &&
        this.$store.state.shortComments
      );
    }
  },
  created() {
    this.$store.dispatch("loadComment", this.$route.params.id);
    this.$store.dispatch("loadExtraInfo", this.$route.params.id);
  }
};
</script>

<style lang="stylus" scoped>
</style>
