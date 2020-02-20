
import {basURL} from '../config.js';


export default function request(options) {
  return new Promise(
    (resolve, reject) => {
      wx.request({
        url: basURL + options.url,
        method: options.method || 'get',
        data: options.data || {},

        success: function (res) {//请求成功回调
          resolve(res)
        },
        fail: function () {
          resolve(reject)

        }

      })


    }


  )











}