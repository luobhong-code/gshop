"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mutationTypes = require("./mutation-types");

var _api = require("../api");

// 通过mutation间接更新state的多个方法的对象
var _default = {
  //异步获取地址
  getAddress: function getAddress(_ref) {
    var commit, state, geohash, result, address;
    return regeneratorRuntime.async(function getAddress$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            commit = _ref.commit, state = _ref.state;
            //发送异步ajax请求
            geohash = state.latitude + ',' + state.longitude;
            _context.next = 4;
            return regeneratorRuntime.awrap((0, _api.reqAddress)(geohash));

          case 4:
            result = _context.sent;

            //提交一个mutation
            if (result.code === 0) {
              address = result.data;
              commit(_mutationTypes.RECEIVE_ADDRESS, {
                address: address
              });
            }

          case 6:
          case "end":
            return _context.stop();
        }
      }
    });
  },
  //异步获取食品分类列表
  getCategorys: function getCategorys(_ref2) {
    var commit, result, address;
    return regeneratorRuntime.async(function getCategorys$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            commit = _ref2.commit;
            _context2.next = 3;
            return regeneratorRuntime.awrap((0, _api.reqFoodCategorys)());

          case 3:
            result = _context2.sent;

            //提交一个mutation
            if (result.code === 0) {
              address = result.data;
              commit(_mutationTypes.RECEIVE_CATEGORYS, {
                categorys: categorys
              });
            }

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    });
  },
  //异步获取商家列表
  getShops: function getShops(_ref3) {
    var commit, state, longitude, latitude, result, shops;
    return regeneratorRuntime.async(function getShops$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            commit = _ref3.commit, state = _ref3.state;
            //发送异步ajax请求
            longitude = state.longitude, latitude = state.latitude;
            _context3.next = 4;
            return regeneratorRuntime.awrap((0, _api.reqShops)(longitude, latitude));

          case 4:
            result = _context3.sent;

            //提交一个mutation
            if (result.code === 0) {
              shops = result.data;
              commit(_mutationTypes.RECEIVE_SHOPS, {
                shops: shops
              });
            }

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    });
  },
  //同步记录用户信息
  recordUser: function recordUser(_ref4, userInfo) {
    var commit = _ref4.commit;
    commit(_mutationTypes.RECEIVE_USER_INFO, {
      userInfo: userInfo
    });
  },
  //异步获取用户信息
  getUserInfo: function getUserInfo(_ref5) {
    var commit, result, userInfo;
    return regeneratorRuntime.async(function getUserInfo$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            commit = _ref5.commit;
            _context4.next = 3;
            return regeneratorRuntime.awrap((0, _api.reqUserInfo)());

          case 3:
            result = _context4.sent;

            if (result.code === 0) {
              userInfo = result.data;
              commit(_mutationTypes.RECEIVE_USER_INFO, {
                userInfo: userInfo
              });
            }

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    });
  },
  //异步登出
  logout: function logout(_ref6) {
    var commit, result, userInfo;
    return regeneratorRuntime.async(function logout$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            commit = _ref6.commit;
            _context5.next = 3;
            return regeneratorRuntime.awrap((0, _api.reqLogout)());

          case 3:
            result = _context5.sent;

            if (result.code === 0) {
              userInfo = result.data;
              commit(_mutationTypes.RESET_USER_INFO);
            }

          case 5:
          case "end":
            return _context5.stop();
        }
      }
    });
  },
  // 异步获取商家信息
  getShopInfo: function getShopInfo(_ref7) {
    var commit, result, info;
    return regeneratorRuntime.async(function getShopInfo$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            commit = _ref7.commit;
            _context6.next = 3;
            return regeneratorRuntime.awrap((0, _api.reqShopInfo)());

          case 3:
            result = _context6.sent;

            if (result.code === 0) {
              info = result.data;
              commit(RECEIVE_INFO, {
                info: info
              });
            }

          case 5:
          case "end":
            return _context6.stop();
        }
      }
    });
  },
  // 异步获取商家评价列表
  getShopRatings: function getShopRatings(_ref8) {
    var commit, result, ratings;
    return regeneratorRuntime.async(function getShopRatings$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            commit = _ref8.commit;
            _context7.next = 3;
            return regeneratorRuntime.awrap((0, _api.reqShopRatings)());

          case 3:
            result = _context7.sent;

            if (result.code === 0) {
              ratings = result.data;
              commit(RECEIVE_RATINGS, {
                ratings: ratings
              }); //数据更新了，通知一下组件

              callback && callback();
            }

          case 5:
          case "end":
            return _context7.stop();
        }
      }
    });
  },
  // 异步获取商家商品列表
  getShopGoods: function getShopGoods(_ref9, callback) {
    var commit, result, goods;
    return regeneratorRuntime.async(function getShopGoods$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            commit = _ref9.commit;
            _context8.next = 3;
            return regeneratorRuntime.awrap((0, _api.reqShopGoods)());

          case 3:
            result = _context8.sent;

            if (result.code === 0) {
              goods = result.data;
              commit(RECEIVE_GOODS, {
                goods: goods
              }); //数据更新了，通知一下组件

              callback && callback();
            }

          case 5:
          case "end":
            return _context8.stop();
        }
      }
    });
  },
  //同步更新food中的count值
  updateFoodCount: function updateFoodCount(_ref10, _ref11) {
    var commit = _ref10.commit;
    var isAdd = _ref11.isAdd,
        food = _ref11.food;

    if (isAdd) {
      commit(_mutationTypes.INCREMENT_FOOD_COUNT, {
        food: food
      });
    } else {
      commit(_mutationTypes.DECREMENT_FOOD_COUNT, {
        food: food
      });
    }
  },
  //同步清空购物车
  clearCart: function clearCart(_ref12) {
    var commit = _ref12.commit;
    commit(_mutationTypes.CLEAR_CART);
  },
  // 异步获取商家评价列表
  searchShops: function (_searchShops) {
    function searchShops(_x, _x2) {
      return _searchShops.apply(this, arguments);
    }

    searchShops.toString = function () {
      return _searchShops.toString();
    };

    return searchShops;
  }(function _callee(_ref13, keyword) {
    var commit, state, geohash, result, ratings;
    return regeneratorRuntime.async(function _callee$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            commit = _ref13.commit, state = _ref13.state;
            geohash = state.latitude + ',' + state.longitude;
            _context9.next = 4;
            return regeneratorRuntime.awrap((0, _api.reqSearchShop)(geohash, keyword));

          case 4:
            result = _context9.sent;

            if (result.code === 0) {
              ratings = result.data;
              commit(_mutationTypes.RECEIVE_SEARCH_SHOPS, {
                searchShops: searchShops
              });
            }

          case 6:
          case "end":
            return _context9.stop();
        }
      }
    });
  })
};
exports["default"] = _default;