// components/top/top.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    newsList: [],
    page: 1
  },

  /**
   * 组件的方法列表
   */
  methods: {
    newsTop() {
      let page = this.data.page
      wx.cloud
        .callFunction({
          name: "news",
          data: {
            code: 200,
            typeId: 522,
            page
          }
        })
        .then(res => {
          let rows = JSON.parse(res.result)
          let newsList = rows.data
          page++
          this.setData({
            [`newsList[${this.data.newsList.length}]`]: newsList,
            page
          })
        })
        .catch(err => {
          console.log(err)
        })
    }
  },

  lifetimes: {
    attached: function() {
      // 在组件实例进入页面节点树时执行
      this.newsTop();
    }
  }
})