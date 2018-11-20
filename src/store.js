import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    menuShow: false,
    artHeadShow: true,
    articalContent: {},
    ArtExtraInfo: {},
    longComments: [],
    shortComments: [],
    headerOpacity: 1
  },
  mutations: {
    menuShowChange(state) {
      state.menuShow = !state.menuShow;
    },
    getArtContent(state, data) {
      state.articalContent = data;
    },
    getExtraInfo(state, data) {
      state.ArtExtraInfo = data;
    },
    hideArtHeader(state) {
      state.headerOpacity = 0;
      state.artHeadShow = false;
    },
    showArtHeader(state, opacity = 1) {
      state.headerOpacity = opacity;
      state.artHeadShow = true;
    },
    clearArtical(state) {
      state.articalContent = {};
      state.ArtExtraInfo = {};
    },
    clearComments(state) {
      state.longComments = [];
      state.shortComments = [];
    },
    getLongComments(state, data) {
      state.longComments = data;
    },
    getShortComments(state, data) {
      state.shortComments = data;
    }
  },
  actions: {
    loadArtContent({ commit }, id) {
      axios
        .get("https://zhihu-daily.leanapp.cn/api/v1/contents/" + id)
        .then(res => {
          let data = res.data.CONTENTS;
          commit("getArtContent", data);
        });
    },
    loadExtraInfo({ commit }, id) {
      axios
        .get("https://zhihu-daily.leanapp.cn/api/v1/contents/extra/" + id)
        .then(res => {
          let data = res.data.DES;
          commit("getExtraInfo", data);
        });
    },
    loadComment({ commit }, id) {
      let getLongComments = axios.get(
        "https://zhihu-daily.leanapp.cn/api/v1/contents/" +
          id +
          "/long-comments"
      );
      let getShortComments = axios.get(
        "https://zhihu-daily.leanapp.cn/api/v1/contents/" +
          id +
          "/short-comments"
      );
      axios.all([getLongComments, getShortComments]).then(
        axios.spread((longRes, shortRes) => {
          let data1 = longRes.data.COMMENTS.comments;
          let data2 = shortRes.data.COMMENTS.comments;
          commit("getLongComments", data1);
          commit("getShortComments", data2);
        })
      );
    }
  }
});
