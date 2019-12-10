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
      wx.cloud
        .callFunction({
          name: "news",
          data: {
            code: 200,
            typeId: 514,
            page: this.data.page
          }
        })
        .then(res => {
          let rows = JSON.parse(res.result)
          let newsList = rows.data
          this.setData({
            [`newsList[${this.data.newsList.length}]`]: newsList,
            page: this.data.page + 1
          })
        })
        .catch(err => {
          console.log(err)
        })
    },
    dateil(event) {
      let id = event.target.dataset.id
      let url = `/pages/details/details?id=${id}`
      wx.navigateTo({
        url
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