"use strict";

var _moment = _interopRequireDefault(require("moment"));

var _vue = _interopRequireDefault(require("vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//自定义过滤器
_vue["default"].filter('date-format', function (value) {
  var formatStr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'YYYY-MM-DD HH:mm:ss';
  // return moment(value).format(formatStr)
  return format(value, formatStr);
});