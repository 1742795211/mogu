// pages/home/home.js

import { getMultiData,grtGoodsData} from '../../service/data/home.js';

const types = ['pop','new','sell'];
const back = 1000;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners: [],
    recommend: [],
    goods: {
      pop: { page: 0, list: [] },
      new: { page: 0, list: [] },
      sell: { page: 0, list: [] },

    },
    currentType:'pop',
    scrolbacklTop:false,
   
    load:false,
    tabtop:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //请求轮播图数据
    this._getMultiData()   
    //请求商品数据
    this._grtGoodsData('pop')
    this._grtGoodsData('new')
    this._grtGoodsData('sell')
    
  },


  // ----------------------网络请求-----------------
  _getMultiData() {  //请求轮播图数据
    getMultiData().then(res => {
     
      const banners = res.data.data.banner.list.map(item => {
        return item.image
      })

      const recommend = res.data.data.recommend.list
      //将拿到的数据放到data中
      this.setData({
        banners: banners,
        recommend: recommend
      })


    })
  },
  _grtGoodsData(type){
    //获取页码
    const page = this.data.goods[type].page+1
    //发送网络请求
    grtGoodsData(type, page).then(res =>{
      
    //取出数据
      const list =res.data.data.list;

    //存入数据
     
      const oldlist = this.data.goods[type].list;

      oldlist.push(...list)

      
      
      const typekey = `goods.${type}.list`;
      const pagekey = `goods.${type}.page`;
      
      this.setData({
        [typekey]: oldlist,
        [pagekey]: page
      })

    })

    


  },



//  --------------------------事件监听------------------
  tabclick(event) {//取出y-tabcontrol点击时的index
    const index = event.detail.index
   
    // 设置 type
    this.setData({
      currentType: types[index]
    })

  },

onReachBottom(){//页面滚动到底部是回调
  //上拉加载更多
  this._grtGoodsData(this.data.currentType) 

},
onPageScroll(options){//监听页面滚动位置

const scrollTop = options.scrollTop;

this.setData({
  scrolbacklTop: scrollTop >= back

})

  const top = scrollTop >=this.data.tabtop;
  if (top != this.data.isTabFixd){
    console.log(this.data.tabtop, scrollTop)
    this.setData({
      isTabFixd: top
    })
  }


},
  handload(){//监听图片是否加载完成
      
  },
  tabcontrolload(){
    wx.createSelectorQuery().select('#tabcontrol').boundingClientRect(rect =>{
      console.log(rect)
      this.data.tabtop = rect.top
    }).exec()
  }

})