import request from '../netweek/netweek.js';


export function getMultiData(){
  return request({
    url:  '/home/multidata'
  })
}

export function grtGoodsData(type,page){
  return request({
    url: '/home/data',
    data:{
      type: type,
      page: page
    }
  })
}