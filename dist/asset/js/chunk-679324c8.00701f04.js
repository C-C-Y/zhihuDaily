(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-679324c8"],{"2c2a":function(t,e,n){"use strict";var a=n("9f2d"),i=n.n(a);i.a},"44c0":function(t,e,n){"use strict";var a=n("c472"),i=n.n(a);i.a},"5b41":function(t,e,n){},9755:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"articles"},[n("articles-header"),n("articles-content")],1)},i=[],c=(n("cadf"),n("551c"),n("097d"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.artHeadShow,expression:"artHeadShow"}],ref:"ArticleHeader",staticClass:"headBox"},[n("div",{staticClass:"icon-return",on:{click:function(e){t.returnHome()}}},[n("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#icon-fanhui"}})])]),n("div",{staticClass:"icon-support icon-right"},[n("svg",{staticClass:"icon support",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#icon-dianzan"}})]),t._v("\n    "+t._s(t.ArtExtraInfo.popularity)+"\n  ")]),n("div",{staticClass:"icon-comment icon-right ",on:{click:function(e){t.enterComment()}}},[n("svg",{staticClass:"icon comment",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#icon-pinglun"}})]),t._v("\n    "+t._s(t.ArtExtraInfo.comments)+"\n  ")]),n("div",{staticClass:"icon-share icon-right"},[n("svg",{staticClass:"icon share ",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#icon-fenxiang"}})])]),n("div",{staticClass:"icon-collect icon-right",on:{click:function(e){t.collect()}}},[n("svg",{staticClass:"icon",class:{collect:t.isCollected},attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#icon-shoucang1"}})])])])}),s=[],r=n("be94"),o=n("2f62"),l={name:"HomeHeader",methods:{returnHome:function(){this.$router.push("/",this.clearArticle)},clearArticle:function(){this.$store.commit("clearArticle")},enterComment:function(){var t=this;this.$router.push({name:"comment",params:{id:t.$route.params.id}})},collect:function(){this.$store.commit("handleCollect",this.$route.params.id),window.localStorage||alert("由于您开启了无痕浏览或禁止本地缓存,关闭网页则会清空收藏列表")}},computed:Object(r["a"])({},Object(o["c"])(["ArtExtraInfo","artHeadShow","headerOpacity"]),{isCollected:function(){return this.$store.state.collectIdList[this.$route.params.id]}}),watch:{headerOpacity:function(t){this.$refs.ArticleHeader.style.opacity=t}}},u=l,d=(n("ce65"),n("2877")),h=Object(d["a"])(u,c,s,!1,null,"ec984e7a",null);h.options.__file="header.vue";var m=h.exports,f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"content",staticClass:"my-content"},[n("div",[n("div",{staticClass:"my-content-img"},[n("img",{staticClass:"my-img",attrs:{src:t.articleContent.image,alt:"图片"}})]),n("div",{ref:"artContnent",staticClass:"my-content-text",domProps:{innerHTML:t._s(t.articleContent.body)}})])])},v=[],p={name:"ArticleContent",methods:{},computed:Object(r["a"])({},Object(o["c"])(["articleContent"])),data:function(){return{startY:0}},updated:function(){},watch:{articleContent:function(){var t=this;this.$nextTick(function(){var e=t;t.$refs.artContnent.addEventListener("touchstart",function(){e.startY=event.touches[0].clientY}),t.$refs.artContnent.addEventListener("touchmove",function(){var t=document.documentElement.scrollTop,n=event.changedTouches[0].clientY;if(t<60){var a=(60-t)/60;e.$store.commit("showArtHeader",a)}else e.$store.state.artHeadShow&&t>=60&&e.$store.commit("hideArtHeader");n-e.startY>20&&t>60&&!e.$store.state.artHeadShow&&e.$store.commit("showArtHeader")})})}}},C=p,$=(n("44c0"),n("9b13"),Object(d["a"])(C,f,v,!1,null,"de6c4eb0",null));$.options.__file="content.vue";var w=$.exports,b={name:"articles",components:{ArticlesHeader:m,ArticlesContent:w},created:function(){this.$store.dispatch("loadArtContent",this.$route.params.id),this.$store.dispatch("loadExtraInfo",this.$route.params.id)}},g=b,x=(n("2c2a"),Object(d["a"])(g,a,i,!1,null,"051e0697",null));x.options.__file="Articles.vue";e["default"]=x.exports},"9b13":function(t,e,n){"use strict";var a=n("b738"),i=n.n(a);i.a},"9f2d":function(t,e,n){},b738:function(t,e,n){},c472:function(t,e,n){},ce65:function(t,e,n){"use strict";var a=n("5b41"),i=n.n(a);i.a}}]);
//# sourceMappingURL=chunk-679324c8.00701f04.js.map