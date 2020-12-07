"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _Login = _interopRequireDefault(require("../pages/Login/Login.vue"));

var _Shop = _interopRequireDefault(require("../pages/Shop/Shop.vue"));

var _ShopGoods = _interopRequireDefault(require("../pages/Shop/ShopGoods/ShopGoods.vue"));

var _ShopRatings = _interopRequireDefault(require("../pages/Shop/ShopRatings/ShopRatings.vue"));

var _ShopInfo = _interopRequireDefault(require("../pages/Shop/ShopInfo/ShopInfo.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// import MSite from '../pages/MSite/MSite.vue'
// import Search from '../pages/Search/Search.vue'
// import Order from '../pages/Order/Order.vue'
// import Profile from '../pages/Profile/Profile.vue'
var MSite = function MSite() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('../pages/MSite/MSite.vue'));
  });
};

var Search = function Search() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('../pages/Search/Search.vue'));
  });
};

var Order = function Order() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('../pages/Order/Order.vue'));
  });
};

var Profile = function Profile() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('../pages/Profile/Profile.vue'));
  });
};

//声明使用插件
_vue["default"].use(_vueRouter["default"]);

var _default = new _vueRouter["default"]({
  //所有路由
  router: [{
    path: './msite',
    component: MSite,
    //返回路由组件的函数,只有执行此函数才会加载路由组件，
    meta: {
      showFooter: true
    }
  }, {
    path: './search',
    component: Search,
    meta: {
      showFooter: true
    }
  }, {
    path: './order',
    component: Order,
    meta: {
      showFooter: true
    }
  }, {
    path: './profile',
    component: Profile,
    meta: {
      showFooter: true
    }
  }, {
    path: '/',
    redirect: '/msite'
  }, {
    path: '/login',
    component: _Login["default"]
  }, {
    path: '/shop',
    component: _Shop["default"],
    children: [{
      path: '/shop/goods',
      component: _ShopGoods["default"]
    }, {
      path: '/shop/ratings',
      component: _ShopRatings["default"]
    }, {
      path: '/shop/info',
      component: _ShopInfo["default"]
    }, {
      path: '',
      redirect: '/shop/goods'
    }]
  }]
});

exports["default"] = _default;