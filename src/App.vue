<template>
  <div id="app">
    <keep-alive exclude="artical,comment">
    <router-view/>
    </keep-alive>
    
  </div>
</template>
<style lang="stylus">
.icon
  width: 1em; height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
</style>
