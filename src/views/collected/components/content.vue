
<template>
  <div class="my-collections">

    <div class="collection-item"
         v-for="item of dataList"
         :key="item.id">
      <div class="item-content border-bottom"
           :class="{moveLeft:deleteMenu}"
           @click="enterArtical(item.id)">
        <span class="item-title">{{item.title}}</span>
        <img :src="item.images[0]"
             alt=""
             class="item-img">
      </div>
      <input type="checkbox"
             v-model="deleteList"
             class="item-delete"
             :key="item.id"
             :value="item.id">
    </div>
    <div class="config-menu"
         v-if="deleteMenu">
      <span class="clearall"
            @click="clearAll()">一键清空</span><span class="delete" :class="{redcolor:deleteList.length}"
            @click="deleteItem()">{{"删除" + deleteLength}}</span>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "CollectedConetnt",
  props: {
    dataList: {
      type: Array
    }
  },
  data() {
    return {
      deleteList: []
    };
  },
  methods: {
    enterArtical(id) {
      this.$router.push({ name: "artical", params: { id } });
    },
    deleteItem() {
      this.deleteList.forEach(item => {
        this.$store.commit("handleCollect", item);
      });
      this.$store.commit("showDelete");
      this.deleteList = [];
      this.$emit("reload");
    },
    ...mapMutations(["clearAll"])
  },
  computed: {
    ...mapState(["deleteMenu"]),
    deleteLength() {
      if (this.deleteList.length) {
        return "(" + this.deleteList.length + ")";
      } else {
        return "";
      }
    }
  }
};
</script>

<style lang="stylus" scoped>

.border-bottom
  &:before
    background-color #555
.my-collections
  position absolute
  top 1.2rem
  left 0
  right 0
  bottom 0
  background-color #ddd
  color #333
  overflow hidden
  .collection-item
    position relative
    .item-content
      overflow hidden
      margin 0.4rem 0.4rem
      padding 0.25rem 0.4rem
      border-radius 0.12rem
      background-color #eee
      z-index 2
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
    .item-delete
      position absolute
      top 50%
      transform translateY(-50%)
      right 0.6rem
      width 0.8rem
      height 0.8rem
      z-index 1
  .config-menu
    position fixed
    display flex
    bottom 0
    left 0
    right 0
    height 1rem
    line-height 1rem
    font-size 0.4rem
    text-align center
    background-color #eee
    .clearall
      flex 1
    .delete
      flex 1
.moveLeft
  transform translateX(-1.5rem)
.redcolor
  color red  
</style>
