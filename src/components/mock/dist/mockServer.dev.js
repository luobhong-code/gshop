"use strict";

var _mockjs = _interopRequireDefault(require("mockjs"));

var _data = _interopRequireDefault(require("./data.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*
使用mockjs提供mock数据接口
 */
// 返回goods的接口
_mockjs["default"].mock('/goods', {
  code: 0,
  data: _data["default"].goods
}); // 返回ratings的接口


_mockjs["default"].mock('/ratings', {
  code: 0,
  data: _data["default"].ratings
}); // 返回info的接口


_mockjs["default"].mock('/info', {
  code: 0,
  data: _data["default"].info
}); // export default ???  不需要向外暴露任何数据, 只需要保证能执行即可