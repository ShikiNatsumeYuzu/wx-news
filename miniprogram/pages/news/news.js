// pages/news/news.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current: '0',
    current_scroll: '0',
    newsType: []
  },

  handleChange({
    detail
  }) {
    this.setData({
      current: detail.key
    });
  },

  handleChangeScroll({
    detail
  }) {
    this.setData({
      current_scroll: detail.key
    });
  },

  newsList() {
    wx.cloud
      .callFunction({
        name: "news",
        data: {
          code: 100
        }
      })
      .then(res => {
        let result = JSON.parse(res.result)
        let newsType = result.data
        newsType.splice(13, 1)
        newsType.splice(14, 1)
        let top = newsType.splice(12, 1)
        let yaowen = newsType.splice(9, 1)
        let arr = top.concat(...yaowen)
        newsType.unshift(...arr)
        this.setData({
          newsType
        })
      })
      .catch(err => {
        console.log(err)
      })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.newsList();
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