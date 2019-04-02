//app.js
App({
  onLaunch: function () {
    //初始化云开发
    wx.cloud.init({
      traceUser: true
    });
    //打开调试
    wx.setEnableDebug({
      enableDebug: true
    });
  },
  globalData: {
    blog: {}
  }
});
