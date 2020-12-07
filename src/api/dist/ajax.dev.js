"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ajax;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// ajax请求函数模块
// 返回值：是promise对象(异步返回的数据是：response.data)
function ajax(url) {
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'GET';
  return new Promise(function (resolve, reject) {
    // 执行异步ajax请求
    // 成功了调用resolve()
    // 失败了调用reject()
    var promise;

    if (type === 'GET') {
      // 准备 url query 参数数据
      var dataStr = ''; //数据拼接字符串

      Object.keys(data).forEach(function (key) {
        dataStr += key + '=' + data[key] + '&';
      });

      if (dataStr !== '') {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'));
        url = url + '?' + dataStr;
      } //发送 get 请求


      promise = _axios["default"].get(url);
    } else {
      // 发送 post 请求
      promise = _axios["default"].post(url, data);
    }

    promise.then(function (response) {
      // 成功了调用resolve()
      resolve(response.data);
    })["catch"](function (error) {
      // 失败了调用reject()
      reject(error);
    });
  });
  return promise;
}