import axios from "axios";
export default {
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
      "https://zhihu-daily.leanapp.cn/api/v1/contents/" + id + "/long-comments"
    );
    let getShortComments = axios.get(
      "https://zhihu-daily.leanapp.cn/api/v1/contents/" + id + "/short-comments"
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
};
