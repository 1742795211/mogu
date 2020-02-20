// pages/cart/chidcpns/cart-list/cart-list.js

const app = getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    goods: {
      type: Object,
      value: {}
    },
    index: {
      type: Number
    },
    cartList: {
      type: Array,
      value: []
    }
    
  },

  /**
   * 组件的初始数据
   */
  data: {
   
      checked: false
     
    

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onCheckClick(e) {
      // 1.查找到对应的商品
      

      const goods = app.globalData.cartList.find(item => item.idd == this.properties.goods.idd)
      
      // 2.获取当前商品的index
      const index = e.currentTarget.dataset.index;



      this.properties.goods.checked = !this.properties.goods.checked
      const caetList = app.globalData.cartList
      console.log(caetList)
      console.log(this.properties.goods.checked)
      this.setData({
        checked: this.properties.goods.checked
      })
      app.changeGoodsState(index, goods)
      
      
      
      

      
    this.triggerEvent('parentEvent')

      
      
      
      // 3.回调
     
    },
  }
})
