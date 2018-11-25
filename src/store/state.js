let defaultList = {};
try {
  if (localStorage.idList) {
    defaultList = JSON.parse(localStorage.idList);
  }
} catch (error) {
  console.log(error);
}
/* 
这里设置的意义是当刷新或者打开此网页时,收藏列表会读取缓存的列表,此后不会影响网页未关闭前的任何操作
只是一个初始化列表的操作
*/
export default {
  menuShow: false,
  artHeadShow: true,
  deleteMenu: false,
  articleContent: {},
  ArtExtraInfo: {},
  longComments: [],
  shortComments: [],
  headerOpacity: 1,
  collectIdList: defaultList
};
