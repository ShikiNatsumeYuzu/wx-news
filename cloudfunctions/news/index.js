// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const rp = require("request-promise")

// 云函数入口函数
exports.main = async(event, context) => {
  let host = `https://www.mxnzp.com/api`

  let newsType = `/news/types?`
  let newsList = `/news/list?typeId=${event.typeId}&page=${event.page}&`
  let newsDetail = `/news/details?newsId=${event.newsId}&`

  let app = `app_id=nrfu2cqkggqpq6ir&app_secret=VkRVNXpuZkQ0WVNsZ2Jlb1hkNDBtZz09`
  let url = ""

  event.code == 100 && (url = host + newsType + app)
  event.code == 200 && (url = host + newsList + app)
  event.code == 300 && (url = host + newsDetail + app)

  return rp(url)
    .then(res => {
      return res;
    })
    .catch(err => {
      console.log(err)
    })
}