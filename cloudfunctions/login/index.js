// 引入SDK
const cloud = require('wx-server-sdk')

// 初始化云函数
cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()

  return {
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
  }
}