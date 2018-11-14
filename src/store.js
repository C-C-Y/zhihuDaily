import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    menuShow: false,
    homeSwiperData: [],
    articals: [],
    articalContent: {},
    ArtExtraInfo: {}
  },
  mutations: {
    handleShowMenu(state) {
      state.menuShow = !state.menuShow;
    },
    getHomeSwiper(state, res) {
      state.homeSwiperData = res;
    },
    getArtlist(state, res) {
      state.articals.push(res);
    },
    getArtContent(state, res) {
      state.articalContent = res;
    },
    getExtraInfo(state, res) {
      state.ArtExtraInfo = res;
    }
  },
  actions: {
    loadSwiper({ commit }) {
      axios
        .get("https://zhihu-daily.leanapp.cn/api/v1/last-stories")
        .then(res => {
          let swiperData = res.data.STORIES.top_stories;
          commit("getHomeSwiper", swiperData);
        });
    },
    loaArticals({ commit, state }) {
      let date = new Date();
      let today = date.getDate();
      let num = state.articals.length;
      let yeaterday = date.setDate(today - num + 1);
      let pramsDate = new Date(yeaterday);
      let pramsDay = pramsDate.getDate() + "";
      let pramsMonth = pramsDate.getMonth() + 1 + "";
      pramsDay = pramsDay.length === 1 ? "0" + pramsDay : pramsDay;
      pramsMonth = pramsMonth.length === 1 ? "0" + pramsMonth : pramsMonth;
      let prams = pramsDate.getFullYear() + "" + pramsMonth + pramsDay;
      let url = "https://zhihu-daily.leanapp.cn/api/v1/before-stories/" + prams;
      axios.get(url).then(res => {
        let data = res.data.STORIES;
        commit("getArtlist", data);
      });
    },
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
    }
  }
});
