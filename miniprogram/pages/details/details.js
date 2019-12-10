const { $Toast } = require('../dist/base/index.js');
// pages/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: "",
    detail: [],
    content: []
  },

  newsDetail() {
    wx.cloud
      .callFunction({
        name: "news",
        data: {
          code: 300,
          newsId: this.data.id
        }
      })
      .then(res => {
        let rows = JSON.parse(res.result)
        let content = rows.data.content
        content = content.replace(/(&\w+;)/ig, "")
        content = content.match(/[^>]+(?=<\/\w+>)/img)
        this.setData({
          detail: rows.data,
          content
        })
      })
      .catch(err => {
        this.handleError()
      })
  },

  handleError() {
    $Toast({
      content: '请求超时,请稍后再试',
      type: 'error'
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let id = options.id
    this.setData({
      id
    })
    this.newsDetail();
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})