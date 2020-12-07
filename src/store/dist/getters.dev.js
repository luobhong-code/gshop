"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
// 包含多个基于state的getter计算属性的对象
var _default = {
  totalCount: function totalCount(state) {
    return state.cartFoods.reduce(function (preTotal, food) {
      return preTotal + food.count;
    }, 0);
  },
  totalPrice: function totalPrice(state) {
    return state.cartFoods.reduce(function (preTotal, food) {
      return preTotal + food.count * food.price;
    }, 0);
  },
  positionSize: function positionSize(state) {
    return state.ratigs.reduce(function (preTotal, rating) {
      return preTotal + (rating.rateType === 0 ? 1 : 0);
    }, 0);
  }
};
exports["default"] = _default;