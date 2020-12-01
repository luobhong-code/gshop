"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _MSite = _interopRequireDefault(require("../pages/MSite/MSite.vue"));

var _Search = _interopRequireDefault(require("../pages/Search/Search.vue"));

var _Order = _interopRequireDefault(require("../pages/Order/Order.vue"));

var _Profile = _interopRequireDefault(require("../pages/Profile/Profile.vue"));

var _Login = _interopRequireDefault(require("../pages/Login/Login.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 路由器对象模块
//声明使用插件
_vue["default"].use(_vueRouter["default"]);

var _default = new _vueRouter["default"]({
  //所有路由
  router: [{
    path: './msite',
    component: _MSite["default"]
  }, {
    path: './search',
    component: _Search["default"],
    meta: {
      showFooter: true
    }
  }, {
    path: './order',
    component: _Order["default"],
    meta: {
      showFooter: true
    }
  }, {
    path: './profile',
    component: _Profile["default"],
    meta: {
      showFooter: true
    }
  }, {
    path: '/',
    redirect: '/msite'
  }, {
    path: '/login',
    component: _Login["default"]
  }]
});

exports["default"] = _default;