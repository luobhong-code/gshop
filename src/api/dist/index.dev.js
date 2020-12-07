"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reqShops = exports.reqFoodTypes = exports.reqAddress = void 0;

var _ajax = _interopRequireDefault(require("./ajax"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var BASE_URL = 'http://localhost:4000'; // 1、 根据经纬度获取位置详情

var reqAddress = function reqAddress(geohash) {
  return (0, _ajax["default"])("/position/".concat(geohash));
}; // 2、 获取食品分类列表


exports.reqAddress = reqAddress;

var reqFoodTypes = function reqFoodTypes() {
  return (0, _ajax["default"])('/index_category');
}; // 3、 根据经纬度获取商铺列表


exports.reqFoodTypes = reqFoodTypes;

var reqShops = function reqShops(longitue, latitude) {
  return (0, _ajax["default"])('./shops', {
    longitue: longitue,
    latitude: latitude
  });
}; // 4、 根据经纬度和关键字搜索商铺列表
// 5、 获取一次性验证码
// 6、 用户名密码登陆
// 7、 发送短信验证码
// 8、 手机号验证码登陆
// 9、 根据会话获取用户信息
// 10、 用户登出


exports.reqShops = reqShops;