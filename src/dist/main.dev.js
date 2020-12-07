"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _mintUi = require("mint-ui");

var _vueLazyload = _interopRequireDefault(require("vue-lazyload"));

var _App = _interopRequireDefault(require("./App.vue"));

var _router = _interopRequireDefault(require("./router"));

var _store = _interopRequireDefault(require("./store"));

require("./mock/mockServer");

var _loading = _interopRequireDefault(require("./common/imgs/loading.gif"));

require("./filters");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//加载mockServer即可
//加载过滤器
//注册全局组件标签
_vue["default"].component(_mintUi.Button.name, _mintUi.Button); //<mt-button>


_vue["default"].use(_vueLazyload["default"], {
  //内部自定义一个指令lazy
  loading: _loading["default"]
});

new _vue["default"]({
  el: '#app',
  render: function render(h) {
    return h(_App["default"]);
  },
  router: _router["default"],
  //使用上vue-router
  store: _store["default"] //使用上vuex

});