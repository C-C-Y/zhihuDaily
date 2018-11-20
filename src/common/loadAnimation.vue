<template>
  <div class="ballBox">
    <div class="ballOne"></div>
    <div class="ballTwo"></div>
    <div class="ballThree"></div>
  </div>
</template>

<script>
export default {
  name: "LoadAnimation"
};
</script>

<style lang="stylus" scoped>
@import '~styles/common.styl'
@keyframes myload
  0%,80%,100%
    transform scale(0)
  40%
    transform scale(1)  
.ballBox
  display flex
  justify-content center
  margin-bottom .4rem
  .ballOne,.ballTwo,.ballThree
    display inline-block
    width .5rem
    height .5rem
    border-radius .25rem
    background-color $homeBgc
    animation myload 1.4s infinite ease-in-out
  .ballOne
    animation-delay -.32s
  .ballTwo
    margin-left .5rem
    animation-delay -.16s
  .ballThree
    margin-left .5rem  
</style>
