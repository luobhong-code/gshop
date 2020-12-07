"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RECEIVE_SEARCH_SHOPS = exports.CLEAR_CART = exports.DECREMENT_FOOD_COUNT = exports.INCREMENT_FOOD_COUNT = exports.RECEIVE_INFO = exports.RECEIVE_RATINGS = exports.RECEIVE_GOODS = exports.RESET_USER_INFO = exports.RECEIVE_USER_INFO = exports.RECEIVE_SHOPS = exports.RECEIVE_CATEGORYS = exports.RECEIVE_ADDRESS = void 0;
// 包含n个mutatin的type名称常量
var RECEIVE_ADDRESS = 'receive_address'; //接收地址

exports.RECEIVE_ADDRESS = RECEIVE_ADDRESS;
var RECEIVE_CATEGORYS = 'receive_categorys'; //接收食品分类数组

exports.RECEIVE_CATEGORYS = RECEIVE_CATEGORYS;
var RECEIVE_SHOPS = 'receive_shops'; //接收商家数组

exports.RECEIVE_SHOPS = RECEIVE_SHOPS;
var RECEIVE_USER_INFO = 'receive_user_info'; //接收用户信息

exports.RECEIVE_USER_INFO = RECEIVE_USER_INFO;
var RESET_USER_INFO = 'reset_user_info'; //重置用户信息

exports.RESET_USER_INFO = RESET_USER_INFO;
var RECEIVE_GOODS = 'receive_goods'; // 接收商品数组

exports.RECEIVE_GOODS = RECEIVE_GOODS;
var RECEIVE_RATINGS = 'receive_ratings'; // 接收商家评价数组

exports.RECEIVE_RATINGS = RECEIVE_RATINGS;
var RECEIVE_INFO = 'receive_info'; // 接收商家信息

exports.RECEIVE_INFO = RECEIVE_INFO;
var INCREMENT_FOOD_COUNT = 'increment_food_count'; //增加food中的count值

exports.INCREMENT_FOOD_COUNT = INCREMENT_FOOD_COUNT;
var DECREMENT_FOOD_COUNT = 'decrement_food_count'; //减少food中的count值

exports.DECREMENT_FOOD_COUNT = DECREMENT_FOOD_COUNT;
var CLEAR_CART = 'clear_cart'; //清空购物车

exports.CLEAR_CART = CLEAR_CART;
var RECEIVE_SEARCH_SHOPS = 'receive_search_shops'; //接收搜索的商家信息

exports.RECEIVE_SEARCH_SHOPS = RECEIVE_SEARCH_SHOPS;