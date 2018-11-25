<template>
  <div id="app">
    <keep-alive exclude="articles,comment,collected">
    <router-view/>
    </keep-alive>
  </div>
</template>
<style lang="stylus">
body
  font-family 'Helvetica Neue', Helvetica, Arial, Sans-serif
.icon
  width: 1em; height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
</style>
