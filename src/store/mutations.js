import Vue from "vue";
export default {
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
  },
  handleCollect(state, id) {
    if (!state.collectIdList[id]) {
      Vue.set(state.collectIdList, id, true);
      try {
        if (!localStorage.idList) {
          let collectIdList = {};
          collectIdList[id] = true;
          localStorage.setItem("idList", JSON.stringify(collectIdList));
        } else {
          let collectIdList = JSON.parse(localStorage.getItem("idList"));
          collectIdList[id] = true;
          localStorage.setItem("idList", JSON.stringify(collectIdList));
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      Vue.delete(state.collectIdList, id);
      try {
        let collectIdList = JSON.parse(localStorage.getItem("idList"));
        delete collectIdList[id];
        localStorage.setItem("idList", JSON.stringify(collectIdList));
      } catch (error) {
        console.log(error);
      }
    }
  }
};
