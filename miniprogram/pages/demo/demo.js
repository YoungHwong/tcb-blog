Page({

  //获取用户信息
  login: function() {
    wx.cloud.callFunction({
      name: 'login',
      data: {
        text: 'Yellowsun'
      }
    }).then(res => {
      console.log(res);
      this.alert('当前用户openid', res.result.openid);
    });
  },

  //发送HTTP请求
  http: function() {
    wx.cloud.callFunction({
      name: 'http'
    }).then(res => {
      console.log(res);
      this.alert();
      //this.alert(res.result.cityInfo.city + "当前气温", res.result.data.wendu + '°C');
    });
  },

  //删除文章
  deleteblog: function() {
    const db = wx.cloud.database();
    const bolgId = 'XJwtHnffS3SWWTJr';
    db.collection('blog').doc(bolgId).remove()
      .then(res => {
        console.log(res);
        this.alert();
      });
  },

  //查询排序
  getorderblog: function() {
    const db = wx.cloud.database()
    db.collection('blog').orderBy('view', 'asc').get() //根据阅读量升序排列
      .then((res) => {
        console.log(res);
        this.alert();
      });
  },

  //条件查询
  gethotblog: function() {
    const db = wx.cloud.database();
    const _ = db.command;
    db.collection('blog').where({
        view: _.gt(500).and(_.lt(1000)) //查询阅读量为500~1000的文章
      })
      .get()
      .then((res) => {
        console.log(res);
        this.alert();
      });
  },

  //返回部分字段
  getbasicblog: function() {
    const db = wx.cloud.database();
    //返回仅封面、标题、正文
    db.collection('blog').field({
        cover: true,
        title: true,
        context: true
      })
      .get()
      .then(res => {
        console.log(res);
        this.alert();
      });
  },

  //更新数据
  updatetitle: function() {
    const db = wx.cloud.database();
    const bolgId = 'XJy-Pt7E7L4wAqs-';
    db.collection('blog').doc(bolgId).update({
      data: {
        title: '新的标题'
      }
    }).then(res => {
      console.log(res);
      this.alert();
    });
  },

  //通用弹窗
  alert: function(title = '调用成功', content = '返回结果见控制台') {
    wx.showModal({
      title,
      content,
      showCancel: false
    });
  },

})