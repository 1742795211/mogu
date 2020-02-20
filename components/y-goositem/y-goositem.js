// components/y-goositem/y-goositem.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    goodslist:{
      type:Object,
      value:{}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    itemClick(){
      //获取id
      const id = this.data.goodslist.iid 
  
     

      //跳转
      wx.navigateTo({
        url: '/pages/detail/detail?id='+id,                                                                              
      })
    }

  }
})
