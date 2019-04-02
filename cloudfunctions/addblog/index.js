const cloud = require('wx-server-sdk');

// 云函数入口函数
exports.main = async (event, context) => {
  let {
    cover,
    title,
    content,
    userInfo
  } = event;

  let openId = userInfo.openId; // 作者的openId

  //初始化
  cloud.init();

  let result = null;
  
  try {
    // 数据库引用
    const db = cloud.database();
    // 集合引用
    const collection = db.collection('blog');
    // 写入记录
    result = await collection.add({
      data: {
        cover,
        title,
        content,
        _openid: openId,
        view: 0
      }
    });
  }
  catch(e) {
    return {
      code: 1, // 添加数据失败
      msg: e.message
    };
  }

  console.log(result);

  return {
    code: 0,
    data: {
      id: result._id
    }
  };
};
