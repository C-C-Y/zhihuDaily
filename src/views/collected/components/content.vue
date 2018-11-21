<template>
  <div class="my-collections">
    <ul class="art-chunk">
      <li class="collection-item border-bottom"
          v-for="item of dataList"
          :key="item.id"
          @click="enterArtical(item.id)">
        <span class="item-title">{{item.title}}</span>
        <img :src="item.images[0]"
             alt=""
             class="item-img">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CollectedConetnt",
  props: {
    dataList: {
      type: Array
    }
  },
  methods: {
    enterArtical(id) {
      this.$router.push({ name: "artical", params: { id } });
    }
  }
};
</script>

<style lang="stylus" scoped>
li
  margin 0
.border-bottom
  &:before
    background-color #666
.my-collections
  position absolute
  top 1.2rem
  bottom 0
  width 100%
  background-color #ddd
  z-index 5
  color #333
  .art-chunk
     padding 0.1rem 0.4rem
    .collection-item
      overflow hidden
      margin .2rem auto 0 auto
      padding 0.25rem 0.4rem
      border-radius 0.12rem
      background-color #fff
      .item-img
        float right
        width 2.2rem
        height 1.7rem
      .item-title
        float left
        font-size 0.38rem
        width 3.5rem
        height 1.7rem
        text-overflow ellipsis
</style>
