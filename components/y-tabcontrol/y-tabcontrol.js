// components/y-tabcontrol/y-tabcontrol.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tilte:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    controlindex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
      click(event){
        const index = event.currentTarget.dataset.index;
      
        this.setData({
          controlindex: index
        
        })
      //传出index
      const  data = {index:this.data.controlindex}
      this.triggerEvent("tabclick",data,{})

      }
  }
})
