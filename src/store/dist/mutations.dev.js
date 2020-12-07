"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _mutationTypes = require("./mutation-types");

var _RECEIVE_ADDRESS$RECE;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = (_RECEIVE_ADDRESS$RECE = {}, _defineProperty(_RECEIVE_ADDRESS$RECE, _mutationTypes.RECEIVE_ADDRESS, function (state, _ref) {
  var address = _ref.address;
  state.address = address;
}), _defineProperty(_RECEIVE_ADDRESS$RECE, _mutationTypes.RECEIVE_CATEGORYS, function (state, _ref2) {
  var categorys = _ref2.categorys;
  state.categorys = categorys;
}), _defineProperty(_RECEIVE_ADDRESS$RECE, _mutationTypes.RECEIVE_SHOPS, function (state, _ref3) {
  var shops = _ref3.shops;
  state.shops = shops;
}), _defineProperty(_RECEIVE_ADDRESS$RECE, _mutationTypes.RECEIVE_USER_INFO, function (state, _ref4) {
  var userInfo = _ref4.userInfo;
  state.userInfo = userInfo;
}), _defineProperty(_RECEIVE_ADDRESS$RECE, _mutationTypes.RESET_USER_INFO, function (state) {
  state.userInfo = {};
}), _defineProperty(_RECEIVE_ADDRESS$RECE, _mutationTypes.INCREMENT_FOOD_COUNT, function (state, _ref5) {
  var food = _ref5.food;

  if (!food.count) {
    //第一次增加
    //food.count=1//新增属性（没有数据绑定）
    // 对象，属性名，属性值
    _vue["default"].set(food, 'count', 1); //让新增的属性也有数据绑定
    //将food添加到cartFoods中


    state.cartFoods.push(food);
  } else {
    food.count++;
  }
}), _defineProperty(_RECEIVE_ADDRESS$RECE, _mutationTypes.DECREMENT_FOOD_COUNT, function (state, _ref6) {
  var food = _ref6.food;

  if (food.count) {
    //只有值大于0才去减
    food.count--;

    if (food.count === 0) {
      //将food从cartFood中移除
      state.cartFoods.splice(state.cartFoods.indexOf(food), 1);
    }
  }
}), _defineProperty(_RECEIVE_ADDRESS$RECE, _mutationTypes.CLEAR_CART, function (state) {
  //清除food中count
  state.cartFoods.forEach(function (food) {
    return food.count = 0;
  }); //移除购物车中所有购物项

  state.cartFoods = [];
}), _defineProperty(_RECEIVE_ADDRESS$RECE, RESET_GOODS, function (state, _ref7) {
  var searchShops = _ref7.searchShops;
  state.searchShops = searchShops;
}), _RECEIVE_ADDRESS$RECE);

exports["default"] = _default;