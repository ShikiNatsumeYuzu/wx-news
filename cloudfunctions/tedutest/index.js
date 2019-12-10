// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
// 功能:向公司发送请求
// 1:引入模块 request-promise
const rp = require("request-promise")
// 2:创建变量url 公司网址
// 3:向网址发请求
// 云函数入口函数
exports.main = async(event, context) => {
  let url = "http://www.tmooc.cn";
  return rp(url)
    .then(res => {
      return res;
    })
    .catch(err => {
      console.log(err)
    })
}