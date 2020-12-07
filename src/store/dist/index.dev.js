"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vuex = _interopRequireDefault(require("vuex"));

var _state = _interopRequireDefault(require("./state"));

var _mutations = _interopRequireDefault(require("./mutations"));

var _actions = _interopRequireDefault(require("./actions"));

var _getters = _interopRequireDefault(require("./getters"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// vuex最核心的管理对象store
_vue["default"].use(vuex);

var _default = new _vuex["default"].Store({
  state: _state["default"],
  mutations: _mutations["default"],
  actions: _actions["default"],
  getters: _getters["default"]
});

exports["default"] = _default;