// pages/detail/detail.js
import {
  getdetail,
  getRecommends,
  GoodsInfo,
  ShopInfo,
  ParamInfo,
} from '../../service/data/detail.js'

const  app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:'',
    topImages: [],
    baseInfo: {},
    shopInfo: {}, 
    detailInfo: {},
    paramInfo: {},
    commentInfo: {},
    recommends: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取传入的id
    this.setData({
      id:options.id
    })
   
    // 2.请求商品详情数据
    this._getdetailData()

    // 3.请求推荐的数据
    this._getRecommends()

  },
  _getdetailData(){
    getdetail(this.data.id).then(res => {
      console.log(res)
      const data = res.data.result;

      const topimages = data.itemInfo.topImages;

      const baseInof = new GoodsInfo(data.itemInfo, data.columns, data.shopInfo.services)
      

      
      const shopInfo = new ShopInfo(data.shopInfo);


      const detailInfo = data.detailInfo;

      

      const paramInfo = new ParamInfo(data.itemParams.info, data.itemParams.rule)

    
      let commentInfo = {}
      if (data.rate && data.rate.cRate > 0) {
        commentInfo = data.rate.list[0]
      }

      this.setData({
        topImages: topimages,
        baseInfo: baseInof,
        shopInfo: shopInfo,
        detailInfo: detailInfo,
        paramInfo: paramInfo,
        commentInfo: commentInfo
      })


    })
  },
  _getRecommends() {
    getRecommends().then(res => {
      console.log(res)
      
      this.setData({
        recommends: res.data.data.list
      })
    })
  },
  onAddCart(){
    //获取商品对象
    const obj = {}
    obj.idd = this.data.id;
    obj.imageURL = this.data.topImages[0];
    obj.title = this.data.baseInfo.title;
    obj.desc = this.data.baseInfo.desc;
    obj.price = this.data.baseInfo.realPrice;


    //加入购物车列表
    app.addToCart(obj)

    //加入成功提示
    wx.showToast({
      title: '加入购物车成功',
    })


  }


})