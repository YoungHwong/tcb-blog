const cloud = require('wx-server-sdk');
const axios = require('axios');

cloud.init();

// 云函数入口函数
exports.main = async (event, context) => {

  //Axios文档 https://www.npmjs.com/package/axios
  let response = await axios({
    method: 'get',
    url: 'http://t.weather.sojson.com/api/weather/city/101280601'
  });

  return response.data;

}