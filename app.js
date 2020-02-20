//app.js
App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  },
  addToCart(obj) {
    // 1.判断是否已经添加进来
    console.log(obj)
    const oldInfo = this.globalData.cartList.find((item) => item.idd === obj.idd)
    console.log(oldInfo)
    if (oldInfo) {
      oldInfo.count += 1
    } else {
      obj.count = 1
      obj.checked = false
      this.globalData.cartList.push(obj)
    }
    console.log(this.globalData.cartList)
    // 2.购物车回调
    if (this.addCartCallback) {
      this.addCartCallback()
    }
  },
  globalData: {
    cartList: []
  },
  changeGoodsState(index, goods){
    console.log(goods)
    const checked = goods.checked
    goods.checked = !checked
    console.log(goods)
    this.globalData.cartList[index] = goods
    console.log(this.globalData.cartList)
  }

})
