webpackJsonp([10,17,52],{

/***/ 1020:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(36)();
// imports


// module
exports.push([module.i, ".widget-container {\n  position: relative;\n  height: 100%;\n  width: 100%; }\n\n.widget-container > .title {\n  border-bottom: 1px solid #cdcdcd;\n  background-color: #f5f5f5;\n  padding-right: 10px;\n  color: black;\n  position: relative;\n  overflow: hidden;\n  text-align: left;\n  height: 40px;\n  width: 100%; }\n\n.widget-container > .title > label {\n  white-space: nowrap;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  margin-left: 27px;\n  margin-top: 10px; }\n\n.widget-container > .content {\n  background-color: white;\n  position: relative;\n  overflow: hidden;\n  height: 100%;\n  width: 100%; }\n", ""]);

// exports


/***/ }),

/***/ 1021:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Viewer = __webpack_require__(1024);

var _Viewer2 = _interopRequireDefault(_Viewer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Viewer2.default;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1022:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _getPrototypeOf = __webpack_require__(20);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _getOwnPropertyDescriptor = __webpack_require__(373);

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = (0, _getOwnPropertyDescriptor2.default)(object, property);

  if (desc === undefined) {
    var parent = (0, _getPrototypeOf2.default)(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

/***/ }),

/***/ 1023:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(36)();
// imports


// module
exports.push([module.i, ".label-container {\n  position: relative;\n  overflow: hidden;\n  font-size: 100%;\n  color: #343434;\n  height: 100%;\n  float: left; }\n", ""]);

// exports


/***/ }),

/***/ 1024:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _assign = __webpack_require__(46);

var _assign2 = _interopRequireDefault(_assign);

var _typeof2 = __webpack_require__(99);

var _typeof3 = _interopRequireDefault(_typeof2);

var _regenerator = __webpack_require__(216);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(215);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _toConsumableArray2 = __webpack_require__(371);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _promise = __webpack_require__(65);

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(18);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Toolkit = function () {
  function Toolkit() {
    (0, _classCallCheck3.default)(this, Toolkit);
  }

  (0, _createClass3.default)(Toolkit, null, [{
    key: 'guid',


    ///////////////////////////////////////////////////////////
    //
    //
    ///////////////////////////////////////////////////////////
    value: function guid() {
      var format = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'xxxxxxxxxxxx';


      var d = new Date().getTime();

      var guid = format.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == 'x' ? r : r & 0x7 | 0x8).toString(16);
      });

      return guid;
    }

    /////////////////////////////////////////////
    //mobile detection
    //
    /////////////////////////////////////////////

  }, {
    key: 'loadDocument',


    /////////////////////////////////////////////////////////
    // Load a document from URN
    //
    /////////////////////////////////////////////////////////
    value: function loadDocument(urn) {

      return new _promise2.default(function (resolve, reject) {

        var paramUrn = !urn.startsWith('urn:') ? 'urn:' + urn : urn;

        Autodesk.Viewing.Document.load(paramUrn, function (doc) {

          resolve(doc);
        }, function (error) {

          reject(error);
        });
      });
    }

    /////////////////////////////////////////////////////////
    // Return viewables
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'getViewableItems',
    value: function getViewableItems(doc) {
      var roles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ['3d', '2d'];


      var rootItem = doc.getRootItem();

      var items = [];

      var roleArray = roles ? Array.isArray(roles) ? roles : [roles] : [];

      roleArray.forEach(function (role) {

        items = [].concat((0, _toConsumableArray3.default)(items), (0, _toConsumableArray3.default)(Autodesk.Viewing.Document.getSubItemsWithProperties(rootItem, { type: 'geometry', role: role }, true)));
      });

      return items;
    }

    /////////////////////////////////////////////////////////
    // Toolbar button
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'createButton',
    value: function createButton(id, className, tooltip, handler) {

      var button = new Autodesk.Viewing.UI.Button(id);

      button.icon.style.fontSize = '24px';

      button.icon.className = className;

      button.setToolTip(tooltip);

      button.onClick = handler;

      return button;
    }

    /////////////////////////////////////////////////////////
    // Control group
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'createControlGroup',
    value: function createControlGroup(viewer, ctrlGroupName) {

      var viewerToolbar = viewer.getToolbar(true);

      if (viewerToolbar) {

        var ctrlGroup = new Autodesk.Viewing.UI.ControlGroup(ctrlGroupName);

        viewerToolbar.addControl(ctrlGroup);

        return ctrlGroup;
      }
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'getLeafNodes',
    value: function getLeafNodes(model, dbIds) {

      return new _promise2.default(function (resolve, reject) {

        try {

          var _instanceTree = model.getData().instanceTree;

          dbIds = dbIds || _instanceTree.getRootId();

          var dbIdArray = Array.isArray(dbIds) ? dbIds : [dbIds];

          var leafIds = [];

          var getLeafNodesRec = function getLeafNodesRec(id) {

            var childCount = 0;

            _instanceTree.enumNodeChildren(id, function (childId) {

              getLeafNodesRec(childId);

              ++childCount;
            });

            if (childCount == 0) {

              leafIds.push(id);
            }
          };

          for (var i = 0; i < dbIdArray.length; ++i) {

            getLeafNodesRec(dbIdArray[i]);
          }

          return resolve(leafIds);
        } catch (ex) {

          return reject(ex);
        }
      });
    }

    /////////////////////////////////////////////////////////
    // get node fragIds
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'getFragIds',
    value: function getFragIds(model, dbIds) {
      var _this = this;

      return new _promise2.default(function () {
        var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(resolve, reject) {
          var i, _ret;

          return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.prev = 0;
                  return _context2.delegateYield( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                    var instanceTree, dbIdArray, leafIds, fragIds;
                    return _regenerator2.default.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            instanceTree = model.getData().instanceTree;


                            dbIds = dbIds || instanceTree.getRootId();

                            dbIdArray = Array.isArray(dbIds) ? dbIds : [dbIds];
                            _context.next = 5;
                            return Toolkit.getLeafNodes(model, dbIdArray);

                          case 5:
                            leafIds = _context.sent;
                            fragIds = [];


                            for (i = 0; i < leafIds.length; ++i) {

                              instanceTree.enumNodeFragments(leafIds[i], function (fragId) {
                                fragIds.push(fragId);
                              });
                            }

                            return _context.abrupt('return', {
                              v: resolve(fragIds)
                            });

                          case 9:
                          case 'end':
                            return _context.stop();
                        }
                      }
                    }, _callee, _this);
                  })(), 't0', 2);

                case 2:
                  _ret = _context2.t0;

                  if (!((typeof _ret === 'undefined' ? 'undefined' : (0, _typeof3.default)(_ret)) === "object")) {
                    _context2.next = 5;
                    break;
                  }

                  return _context2.abrupt('return', _ret.v);

                case 5:
                  _context2.next = 10;
                  break;

                case 7:
                  _context2.prev = 7;
                  _context2.t1 = _context2['catch'](0);
                  return _context2.abrupt('return', reject(_context2.t1));

                case 10:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, _this, [[0, 7]]);
        }));

        return function (_x3, _x4) {
          return _ref.apply(this, arguments);
        };
      }());
    }

    /////////////////////////////////////////////////////////
    // get leaf node fragIds
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'getLeafFragIds',
    value: function getLeafFragIds(model, leafId) {

      var instanceTree = model.getData().instanceTree;

      var fragIds = [];

      instanceTree.enumNodeFragments(leafId, function (fragId) {
        fragIds.push(fragId);
      });

      return fragIds;
    }

    /////////////////////////////////////////////////////////
    // Node bounding box
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'getWorldBoundingBox',
    value: function getWorldBoundingBox(model, dbId) {
      var _this2 = this;

      return new _promise2.default(function () {
        var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(resolve, reject) {
          var fragIds, fragList, fragbBox, nodebBox;
          return _regenerator2.default.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.prev = 0;
                  _context3.next = 3;
                  return Toolkit.getFragIds(model, dbId);

                case 3:
                  fragIds = _context3.sent;

                  if (fragIds.length) {
                    _context3.next = 6;
                    break;
                  }

                  return _context3.abrupt('return', reject('No geometry, invalid dbId?'));

                case 6:
                  fragList = model.getFragmentList();
                  fragbBox = new THREE.Box3();
                  nodebBox = new THREE.Box3();


                  fragIds.forEach(function (fragId) {

                    fragList.getWorldBounds(fragId, fragbBox);
                    nodebBox.union(fragbBox);
                  });

                  return _context3.abrupt('return', resolve(nodebBox));

                case 13:
                  _context3.prev = 13;
                  _context3.t0 = _context3['catch'](0);
                  return _context3.abrupt('return', reject(_context3.t0));

                case 16:
                case 'end':
                  return _context3.stop();
              }
            }
          }, _callee3, _this2, [[0, 13]]);
        }));

        return function (_x5, _x6) {
          return _ref2.apply(this, arguments);
        };
      }());
    }

    /////////////////////////////////////////////////////////
    // Gets properties from component
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'getProperties',
    value: function getProperties(model, dbId) {
      var requestedProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;


      return new _promise2.default(function (resolve, reject) {

        try {

          var dbIdInt = parseInt(dbId);

          if (isNaN(dbIdInt)) {

            return reject(dbId + ' is not a valid integer');
          }

          if (requestedProps) {

            var propTasks = requestedProps.map(function (displayName) {

              return Toolkit.getProperty(model, dbIdInt, displayName, 'Not Available');
            });

            _promise2.default.all(propTasks).then(function (properties) {

              resolve(properties);
            });
          } else {

            model.getProperties(dbIdInt, function (result) {

              if (result.properties) {

                return resolve(result.properties);
              }

              return reject('No Properties');
            });
          }
        } catch (ex) {

          return reject(ex);
        }
      });
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'getProperty',
    value: function getProperty(model, dbId, displayName, defaultValue) {

      return new _promise2.default(function (resolve, reject) {

        try {

          model.getProperties(dbId, function (result) {

            if (result.properties) {

              result.properties.forEach(function (prop) {

                prop.dbId = dbId;

                if (typeof displayName === 'function') {

                  if (displayName(prop.displayName)) {

                    resolve(prop);
                  }
                } else if (displayName === prop.displayName) {

                  resolve(prop);
                }
              });

              if (defaultValue) {

                return resolve({
                  displayValue: defaultValue,
                  displayName: displayName,
                  dbId: dbId
                });
              }

              reject(new Error('Not Found'));
            } else {

              reject(new Error('Error getting properties'));
            }
          });
        } catch (ex) {

          return reject(ex);
        }
      });
    }

    /////////////////////////////////////////////////////////
    // Gets all existing properties from component  dbIds
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'getPropertyList',
    value: function getPropertyList(viewer, dbIds) {
      var _this3 = this;

      var model = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;


      return new _promise2.default(function () {
        var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(resolve, reject) {
          var propertyTasks, propertyResults, properties;
          return _regenerator2.default.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.prev = 0;


                  model = model || viewer.activeModel || viewer.model;

                  propertyTasks = dbIds.map(function (dbId) {

                    return Toolkit.getProperties(model, dbId);
                  });
                  _context4.next = 5;
                  return _promise2.default.all(propertyTasks);

                case 5:
                  propertyResults = _context4.sent;
                  properties = [];


                  propertyResults.forEach(function (propertyResult) {

                    propertyResult.forEach(function (prop) {

                      if (properties.indexOf(prop.displayName) < 0) {

                        properties.push(prop.displayName);
                      }
                    });
                  });

                  return _context4.abrupt('return', resolve(properties.sort()));

                case 11:
                  _context4.prev = 11;
                  _context4.t0 = _context4['catch'](0);
                  return _context4.abrupt('return', reject(_context4.t0));

                case 14:
                case 'end':
                  return _context4.stop();
              }
            }
          }, _callee4, _this3, [[0, 11]]);
        }));

        return function (_x9, _x10) {
          return _ref3.apply(this, arguments);
        };
      }());
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'getBulkPropertiesAsync',
    value: function getBulkPropertiesAsync(model, dbIds, propFilter) {
      var _this4 = this;

      return new _promise2.default(function () {
        var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(resolve, reject) {
          var propTasks, propRes, filteredRes, propFilterArray;
          return _regenerator2.default.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  if (!(typeof propFilter === 'function')) {
                    _context5.next = 9;
                    break;
                  }

                  propTasks = dbIds.map(function (dbId) {

                    return _this4.getProperty(model, dbId, propFilter, 'Not Found');
                  });
                  _context5.next = 4;
                  return _promise2.default.all(propTasks);

                case 4:
                  propRes = _context5.sent;
                  filteredRes = propRes.filter(function (res) {

                    return res.displayValue !== 'Not Found';
                  });


                  resolve(filteredRes.map(function (res) {

                    return {
                      properties: [res],
                      dbId: res.dbId
                    };
                  }));

                  _context5.next = 11;
                  break;

                case 9:
                  propFilterArray = Array.isArray(propFilter) ? propFilter : [propFilter];


                  model.getBulkProperties(dbIds, propFilterArray, function (result) {

                    resolve(result);
                  }, function (error) {

                    reject(error);
                  });

                case 11:
                case 'end':
                  return _context5.stop();
              }
            }
          }, _callee5, _this4);
        }));

        return function (_x11, _x12) {
          return _ref4.apply(this, arguments);
        };
      }());
    }

    /////////////////////////////////////////////////////////
    // Maps components by property
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'mapComponentsByProp',
    value: function mapComponentsByProp(model, propFilter, components, defaultProp) {
      var _this5 = this;

      return new _promise2.default(function () {
        var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(resolve, reject) {
          var results, propertyResults, componentsMap;
          return _regenerator2.default.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  _context6.prev = 0;
                  _context6.next = 3;
                  return Toolkit.getBulkPropertiesAsync(model, components, propFilter);

                case 3:
                  results = _context6.sent;
                  propertyResults = results.map(function (result) {

                    var prop = result.properties[0];

                    return (0, _assign2.default)({}, prop, {
                      dbId: result.dbId
                    });
                  });
                  componentsMap = {};


                  propertyResults.forEach(function (result) {

                    var value = result.displayValue;

                    if (typeof value == 'string') {

                      value = value.split(':')[0];
                    }

                    if (!componentsMap[value]) {

                      componentsMap[value] = [];
                    }

                    componentsMap[value].push(result.dbId);
                  });

                  return _context6.abrupt('return', resolve(componentsMap));

                case 10:
                  _context6.prev = 10;
                  _context6.t0 = _context6['catch'](0);
                  return _context6.abrupt('return', reject(_context6.t0));

                case 13:
                case 'end':
                  return _context6.stop();
              }
            }
          }, _callee6, _this5, [[0, 10]]);
        }));

        return function (_x13, _x14) {
          return _ref5.apply(this, arguments);
        };
      }());
    }

    /////////////////////////////////////////////////////////////
    // Runs recursively the argument task on each node
    // of the data tree
    //
    /////////////////////////////////////////////////////////////

  }, {
    key: 'runTaskOnDataTree',
    value: function runTaskOnDataTree(root, taskFunc) {

      var tasks = [];

      var runTaskOnDataTreeRec = function runTaskOnDataTreeRec(node) {
        var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;


        if (node.children) {

          node.children.forEach(function (childNode) {

            runTaskOnDataTreeRec(childNode, node);
          });
        }

        var task = taskFunc(node, parent);

        tasks.push(task);
      };

      runTaskOnDataTreeRec(root);

      return _promise2.default.all(tasks);
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'drawBox',
    value: function drawBox(viewer, min, max, material, overlayId) {

      var geometry = new THREE.Geometry();

      geometry.vertices.push(new THREE.Vector3(min.x, min.y, min.z));
      geometry.vertices.push(new THREE.Vector3(max.x, min.y, min.z));

      geometry.vertices.push(new THREE.Vector3(max.x, min.y, min.z));
      geometry.vertices.push(new THREE.Vector3(max.x, min.y, max.z));

      geometry.vertices.push(new THREE.Vector3(max.x, min.y, max.z));
      geometry.vertices.push(new THREE.Vector3(min.x, min.y, max.z));

      geometry.vertices.push(new THREE.Vector3(min.x, min.y, max.z));
      geometry.vertices.push(new THREE.Vector3(min.x, min.y, min.z));

      geometry.vertices.push(new THREE.Vector3(min.x, max.y, max.z));
      geometry.vertices.push(new THREE.Vector3(max.x, max.y, max.z));

      geometry.vertices.push(new THREE.Vector3(max.x, max.y, max.z));
      geometry.vertices.push(new THREE.Vector3(max.x, max.y, min.z));

      geometry.vertices.push(new THREE.Vector3(max.x, max.y, min.z));
      geometry.vertices.push(new THREE.Vector3(min.x, max.y, min.z));

      geometry.vertices.push(new THREE.Vector3(min.x, max.y, min.z));
      geometry.vertices.push(new THREE.Vector3(min.x, max.y, max.z));

      geometry.vertices.push(new THREE.Vector3(min.x, min.y, min.z));
      geometry.vertices.push(new THREE.Vector3(min.x, max.y, min.z));

      geometry.vertices.push(new THREE.Vector3(max.x, min.y, min.z));
      geometry.vertices.push(new THREE.Vector3(max.x, max.y, min.z));

      geometry.vertices.push(new THREE.Vector3(max.x, min.y, max.z));
      geometry.vertices.push(new THREE.Vector3(max.x, max.y, max.z));

      geometry.vertices.push(new THREE.Vector3(min.x, min.y, max.z));
      geometry.vertices.push(new THREE.Vector3(min.x, max.y, max.z));

      var lines = new THREE.Line(geometry, material, THREE.LinePieces);

      viewer.impl.addOverlay(overlayId, lines);

      viewer.impl.invalidate(true, true, true);

      return lines;
    }

    /////////////////////////////////////////////////////////
    // Set component material
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'setMaterial',
    value: function () {
      var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7(model, dbId, material) {
        var fragIds, fragList;
        return _regenerator2.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return Toolkit.getFragIds(model, dbId);

              case 2:
                fragIds = _context7.sent;
                fragList = model.getFragmentList();


                fragIds.forEach(function (fragId) {

                  fragList.setMaterial(fragId, material);
                });

              case 5:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function setMaterial(_x16, _x17, _x18) {
        return _ref6.apply(this, arguments);
      }

      return setMaterial;
    }()

    /////////////////////////////////////////////////////////
    // Recursively builds the model tree
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'buildModelTree',
    value: function buildModelTree(model) {
      var createNodeFunc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;


      //builds model tree recursively
      function _buildModelTreeRec(node) {

        instanceTree.enumNodeChildren(node.dbId, function (childId) {

          var childNode = null;

          if (createNodeFunc) {

            childNode = createNodeFunc(childId);
          } else {

            node.children = node.children || [];

            childNode = {
              dbId: childId,
              name: instanceTree.getNodeName(childId)
            };

            node.children.push(childNode);
          }

          _buildModelTreeRec(childNode);
        });
      }

      //get model instance tree and root component
      var instanceTree = model.getData().instanceTree;

      var rootId = instanceTree.getRootId();

      var rootNode = {
        dbId: rootId,
        name: instanceTree.getNodeName(rootId)
      };

      _buildModelTreeRec(rootNode);

      return rootNode;
    }

    /////////////////////////////////////////////////////////
    // Recursively execute task on model tree
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'executeTaskOnModelTree',
    value: function executeTaskOnModelTree(model, task) {

      var taskResults = [];

      function _executeTaskOnModelTreeRec(dbId) {

        instanceTree.enumNodeChildren(dbId, function (childId) {

          taskResults.push(task(model, childId));

          _executeTaskOnModelTreeRec(childId);
        });
      }

      //get model instance tree and root component
      var instanceTree = model.getData().instanceTree;

      var rootId = instanceTree.getRootId();

      _executeTaskOnModelTreeRec(rootId);

      return taskResults;
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'hide',
    value: function hide(viewer) {
      var dbIds = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var model = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;


      try {

        model = model || viewer.activeModel || viewer.model;

        viewer.hide(dbIds);

        var targetIds = Array.isArray(dbIds) ? dbIds : [dbIds];

        var tasks = targetIds.map(function (dbId) {

          return new _promise2.default(function (resolve) {

            viewer.impl.visibilityManager.setNodeOff(dbId, true);

            resolve();
          });
        });

        return _promise2.default.all(tasks);
      } catch (ex) {

        return _promise2.default.reject(ex);
      }
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'show',
    value: function show(viewer) {
      var dbIds = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var model = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;


      try {

        model = model || viewer.activeModel || viewer.model;

        viewer.show(dbIds);

        var targetIds = Array.isArray(dbIds) ? dbIds : [dbIds];

        targetIds.forEach(function (dbId) {

          viewer.impl.visibilityManager.setNodeOff(dbId, false);
        });

        return _promise2.default.resolve();
      } catch (ex) {

        return _promise2.default.reject(ex);
      }
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'isolateFull',
    value: function () {
      var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee8(viewer) {
        var dbIds = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
        var model = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        var targetIds, targetLeafIds, leafIds, leafTasks;
        return _regenerator2.default.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.prev = 0;


                model = model || viewer.activeModel || viewer.model;

                viewer.isolate(dbIds);

                targetIds = Array.isArray(dbIds) ? dbIds : [dbIds];
                _context8.next = 6;
                return Toolkit.getLeafNodes(model, targetIds);

              case 6:
                targetLeafIds = _context8.sent;
                _context8.next = 9;
                return Toolkit.getLeafNodes(model);

              case 9:
                leafIds = _context8.sent;
                leafTasks = leafIds.map(function (dbId) {

                  return new _promise2.default(function (resolveLeaf) {

                    var show = !targetLeafIds.length || targetLeafIds.indexOf(dbId) > -1;

                    viewer.impl.visibilityManager.setNodeOff(dbId, !show);

                    resolveLeaf();
                  });
                });
                return _context8.abrupt('return', _promise2.default.all(leafTasks));

              case 14:
                _context8.prev = 14;
                _context8.t0 = _context8['catch'](0);
                return _context8.abrupt('return', _promise2.default.reject(_context8.t0));

              case 17:
              case 'end':
                return _context8.stop();
            }
          }
        }, _callee8, this, [[0, 14]]);
      }));

      function isolateFull(_x24) {
        return _ref7.apply(this, arguments);
      }

      return isolateFull;
    }()

    ///////////////////////////////////////////////////////////////////
    // Rotate selected fragments
    //
    ///////////////////////////////////////////////////////////////////

  }, {
    key: 'rotateFragments',
    value: function rotateFragments(viewer, fragIds, axis, angle, center) {
      var model = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;


      var quaternion = new THREE.Quaternion();

      quaternion.setFromAxisAngle(axis, angle);

      model = model || viewer.activeModel || viewer.model;

      fragIds.forEach(function (fragId) {

        var fragProxy = viewer.impl.getFragmentProxy(model, fragId);

        fragProxy.getAnimTransform();

        var position = new THREE.Vector3(fragProxy.position.x - center.x, fragProxy.position.y - center.y, fragProxy.position.z - center.z);

        position.applyQuaternion(quaternion);

        position.add(center);

        fragProxy.position = position;

        fragProxy.quaternion.multiplyQuaternions(quaternion, fragProxy.quaternion);

        fragProxy.updateAnimTransform();
      });
    }

    /////////////////////////////////////////////////////////
    // A fix for viewer.restoreState
    // that also restores pivotPoint
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'restoreStateWithPivot',
    value: function restoreStateWithPivot(viewer, state) {
      var filter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var immediate = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;


      var onStateRestored = function onStateRestored() {

        viewer.removeEventListener(Autodesk.Viewing.VIEWER_STATE_RESTORED_EVENT, onStateRestored);

        var pivot = state.viewport.pivotPoint;

        setTimeout(function () {

          viewer.navigation.setPivotPoint(new THREE.Vector3(pivot[0], pivot[1], pivot[2]));
        }, immediate ? 0 : 1250);
      };

      viewer.addEventListener(Autodesk.Viewing.VIEWER_STATE_RESTORED_EVENT, onStateRestored);

      viewer.restoreState(state, filter, immediate);
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'getComponentsByParentName',
    value: function getComponentsByParentName(name, model) {

      var instanceTree = model.getData().instanceTree;

      var rootId = instanceTree.getRootId();

      var parentId = 0;

      instanceTree.enumNodeChildren(rootId, function (childId) {

        var nodeName = instanceTree.getNodeName(childId);

        if (nodeName.indexOf(name) > -1) {

          parentId = childId;
        }
      });

      return parentId > 0 ? Toolkit.getLeafNodes(model, parentId) : [];
    }

    /////////////////////////////////////////////////////////
    // Creates a standard THREE.Mesh out of a Viewer
    // component
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'buildComponentMesh',
    value: function buildComponentMesh(viewer, model, dbId, faceFilter, material) {

      var vertexArray = [];

      // first we assume the component dbId is a leaf
      // component: ie has no child so contains
      // geometry. This util method will return all fragIds
      // associated with that specific dbId
      var fragIds = Toolkit.getLeafFragIds(model, dbId);

      var matrixWorld = null;

      var meshGeometry = new THREE.Geometry();

      fragIds.forEach(function (fragId) {

        // for each fragId, get the proxy in order to access
        // THREE geometry
        var renderProxy = viewer.impl.getRenderProxy(model, fragId);

        matrixWorld = matrixWorld || renderProxy.matrixWorld;

        var geometry = renderProxy.geometry;

        var attributes = geometry.attributes;

        var positions = geometry.vb ? geometry.vb : attributes.position.array;

        var indices = attributes.index.array || geometry.ib;

        var stride = geometry.vb ? geometry.vbstride : 3;

        var offsets = [{
          count: indices.length,
          index: 0,
          start: 0
        }];

        for (var oi = 0, ol = offsets.length; oi < ol; ++oi) {

          var start = offsets[oi].start;
          var count = offsets[oi].count;
          var index = offsets[oi].index;

          for (var i = start, il = start + count; i < il; i += 3) {

            var a = index + indices[i];
            var b = index + indices[i + 1];
            var c = index + indices[i + 2];

            var vA = new THREE.Vector3();
            var vB = new THREE.Vector3();
            var vC = new THREE.Vector3();

            vA.fromArray(positions, a * stride);
            vB.fromArray(positions, b * stride);
            vC.fromArray(positions, c * stride);

            if (!faceFilter || faceFilter(vA, vB, vC)) {

              var faceIdx = meshGeometry.vertices.length;

              meshGeometry.vertices.push(vA);
              meshGeometry.vertices.push(vB);
              meshGeometry.vertices.push(vC);

              var face = new THREE.Face3(faceIdx, faceIdx + 1, faceIdx + 2);

              meshGeometry.faces.push(face);
            }
          }
        }
      });

      meshGeometry.applyMatrix(matrixWorld);
      meshGeometry.computeFaceNormals();
      meshGeometry.computeVertexNormals();

      // creates THREE.Mesh
      var mesh = new THREE.Mesh(meshGeometry, material);

      mesh.dbId = dbId;

      return mesh;
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'selectiveExplode',
    value: function selectiveExplode(viewer, scale, excludedFragIds) {
      var model = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;


      model = model || viewer.activeModel || viewer.model;

      var svf = model.getData();

      var mc = model.getVisibleBounds(true).center();

      var fragList = model.getFragmentList();

      var pt = new THREE.Vector3();

      //Input scale is in the range 0-1, where 0
      //means no displacement, and 1 maximum reasonable displacement.
      scale *= 2;

      //If we have a full part hierarchy we can use a
      //better grouping strategy when exploding
      if (svf.instanceTree && svf.instanceTree.nodeAccess.nodeBoxes && scale !== 0) {

        var scaledExplodeDepth = scale * (svf.instanceTree.maxDepth - 1) + 1;
        var explodeDepth = 0 | scaledExplodeDepth;
        var currentSegmentFraction = scaledExplodeDepth - explodeDepth;

        var it = svf.instanceTree;
        var tmpBox = new Float32Array(6);

        (function explodeRec(nodeId, depth, cx, cy, cz, ox, oy, oz) {

          var oscale = scale * 2;

          // smooth transition of this tree depth
          // from non-exploded to exploded state
          if (depth == explodeDepth) oscale *= currentSegmentFraction;

          it.getNodeBox(nodeId, tmpBox);

          var mycx = 0.5 * (tmpBox[0] + tmpBox[3]);
          var mycy = 0.5 * (tmpBox[1] + tmpBox[4]);
          var mycz = 0.5 * (tmpBox[2] + tmpBox[5]);

          if (depth > 0 && depth <= explodeDepth) {
            var dx = (mycx - cx) * oscale;
            var dy = (mycy - cy) * oscale;
            var dz = (mycz - cz) * oscale;

            //var omax = Math.max(dx, Math.max(dy, dz));
            ox += dx;
            oy += dy;
            oz += dz;
          }

          svf.instanceTree.enumNodeChildren(nodeId, function (dbId) {

            explodeRec(dbId, depth + 1, mycx, mycy, mycz, ox, oy, oz);
          }, false);

          svf.instanceTree.enumNodeFragments(nodeId, function (fragId) {

            if (excludedFragIds.indexOf(fragId.toString()) < 0) {

              pt.x = ox;
              pt.y = oy;
              pt.z = oz;

              fragList.updateAnimTransform(fragId, null, null, pt);
            }
          }, false);
        })(svf.instanceTree.getRootId(), 0, mc.x, mc.y, mc.x, 0, 0, 0);
      } else {

        var boxes = fragList.fragments.boxes;

        var nbFrags = fragList.getCount();

        for (var fragId = 0; fragId < nbFrags; ++fragId) {

          if (excludedFragIds.indexOf(fragId.toString()) < 0) {

            if (scale == 0) {

              fragList.updateAnimTransform(fragId);
            } else {

              var box_offset = fragId * 6;

              var cx = 0.5 * (boxes[box_offset] + boxes[box_offset + 3]);
              var cy = 0.5 * (boxes[box_offset + 1] + boxes[box_offset + 4]);
              var cz = 0.5 * (boxes[box_offset + 2] + boxes[box_offset + 5]);

              cx = scale * (cx - mc.x);
              cy = scale * (cy - mc.y);
              cz = scale * (cz - mc.z);

              pt.x = cx;
              pt.y = cy;
              pt.z = cz;

              fragList.updateAnimTransform(fragId, null, null, pt);
            }
          }
        }
      }
    }
  }, {
    key: 'mobile',
    get: function get() {

      return {

        getUserAgent: function getUserAgent() {
          return navigator.userAgent;
        },
        isAndroid: function isAndroid() {
          return this.getUserAgent().match(/Android/i);
        },
        isBlackBerry: function isBlackBerry() {
          return this.getUserAgent().match(/BlackBerry/i);
        },
        isIOS: function isIOS() {
          return this.getUserAgent().match(/iPhone|iPad|iPod/i);
        },
        isOpera: function isOpera() {
          return this.getUserAgent().match(/Opera Mini/i);
        },
        isWindows: function isWindows() {
          return this.isWindowsDesktop() || this.isWindowsMobile();
        },
        isWindowsMobile: function isWindowsMobile() {
          return this.getUserAgent().match(/IEMobile/i);
        },
        isWindowsDesktop: function isWindowsDesktop() {
          return this.getUserAgent().match(/WPDesktop/i);
        },
        isAny: function isAny() {

          return this.isAndroid() || this.isBlackBerry() || this.isIOS() || this.isWindowsMobile();
        }
      };
    }
  }]);
  return Toolkit;
}();

exports.default = Toolkit;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Viewer.Toolkit.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1025:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Viewer = __webpack_require__(1028);

var _Viewer2 = _interopRequireDefault(_Viewer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Viewer2.default;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1027:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _WidgetContainer = __webpack_require__(1030);

var _WidgetContainer2 = _interopRequireDefault(_WidgetContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _WidgetContainer2.default;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1028:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _promise = __webpack_require__(65);

var _promise2 = _interopRequireDefault(_promise);

var _toConsumableArray2 = __webpack_require__(371);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _assign = __webpack_require__(46);

var _assign2 = _interopRequireDefault(_assign);

var _getPrototypeOf = __webpack_require__(20);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(18);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _EventsEmitter = __webpack_require__(372);

var _EventsEmitter2 = _interopRequireDefault(_EventsEmitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MultiModelExtensionBase = function (_EventsEmitter$Compos) {
  (0, _inherits3.default)(MultiModelExtensionBase, _EventsEmitter$Compos);

  /////////////////////////////////////////////////////////
  // Class constructor
  //
  /////////////////////////////////////////////////////////
  function MultiModelExtensionBase(viewer) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var defaultOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    (0, _classCallCheck3.default)(this, MultiModelExtensionBase);

    // bindings

    var _this = (0, _possibleConstructorReturn3.default)(this, (MultiModelExtensionBase.__proto__ || (0, _getPrototypeOf2.default)(MultiModelExtensionBase)).call(this, viewer));

    _this.onModelCompletedLoad = _this.onModelCompletedLoad.bind(_this);
    _this.onObjectTreeCreated = _this.onObjectTreeCreated.bind(_this);
    _this.onModelRootLoaded = _this.onModelRootLoaded.bind(_this);
    _this.onExtensionLoaded = _this.onExtensionLoaded.bind(_this);
    _this.onModelActivated = _this.onModelActivated.bind(_this);
    _this.onGeometryLoaded = _this.onGeometryLoaded.bind(_this);
    _this.onToolbarCreated = _this.onToolbarCreated.bind(_this);
    _this.onModelBeginLoad = _this.onModelBeginLoad.bind(_this);
    _this.onModelUnloaded = _this.onModelUnloaded.bind(_this);
    _this.onSelection = _this.onSelection.bind(_this);

    _this.__onModelActivated = _this.__onModelActivated.bind(_this);
    _this.__onModelUnloaded = _this.__onModelUnloaded.bind(_this);
    _this.__onModelLoaded = _this.__onModelLoaded.bind(_this);

    _this.defaultOptions = defaultOptions;

    _this.options = (0, _assign2.default)({}, defaultOptions, options);

    _this.viewer = viewer;

    // read the modelQueue to detect currently loaded models
    // when the extension gets loaded
    var models = viewer.impl.modelQueue().getModels();

    _this.models = models.map(function (model) {

      model.guid = model.guid || _this.guid();

      return model;
    });

    _this.initializeEvents();
    return _this;
  }

  /////////////////////////////////////////////////////////
  // Extension Id
  //
  /////////////////////////////////////////////////////////


  (0, _createClass3.default)(MultiModelExtensionBase, [{
    key: 'load',


    /////////////////////////////////////////////////////////
    // Load callback
    //
    /////////////////////////////////////////////////////////
    value: function load() {

      return true;
    }

    /////////////////////////////////////////////////////////
    // Unload callback
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'unload',
    value: function unload() {
      var _this2 = this;

      this.viewerEvents.forEach(function (event) {

        _this2.viewer.removeEventListener(event.id, _this2[event.handler]);
      });

      if (this.eventSink) {

        this.eventSink.off('model.activated', this.__onModelActivated);

        this.eventSink.off('model.unloaded', this.__onModelUnloaded);

        this.eventSink.off('model.loaded', this.__onModelLoaded);
      }

      return true;
    }

    /////////////////////////////////////////////////////////
    // Reload callback, in case the extension is re-loaded
    // more than once
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'reload',
    value: function reload() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};


      this.options = (0, _assign2.default)({}, this.defaultOptions, this.options, options);

      return true;
    }

    /////////////////////////////////////////////////////////
    // Invoked when extension gets loaded
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'onExtensionLoaded',
    value: function onExtensionLoaded(event) {}

    //console.log('MultiModelExtensionBase.onExtensionLoaded')


    /////////////////////////////////////////////////////////
    // Invoked when the model starts to load
    // The geometry and instanceTree may not be available
    // at this time
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'onModelBeginLoad',
    value: function onModelBeginLoad(event) {}

    //console.log('MultiModelExtensionBase.onModelBeginLoad')


    /////////////////////////////////////////////////////////
    // Triggered by ModelLoader extension when a model is
    // selected in a multi-model environment
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'onModelActivated',
    value: function onModelActivated(event) {}

    //console.log('MultiModelExtensionBase.onModelActivated')


    /////////////////////////////////////////////////////////
    // Invoked when model root node has been loaded
    // Extensions that do not require access to full
    // model geometry or component tree may use that
    // event to know a new model has been loaded
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'onModelRootLoaded',
    value: function onModelRootLoaded(event) {
      var _this3 = this;

      this.viewerEvent([Autodesk.Viewing.OBJECT_TREE_CREATED_EVENT, Autodesk.Viewing.GEOMETRY_LOADED_EVENT]).then(function (args) {

        _this3.onModelCompletedLoad(args[0]);
      });
    }

    /////////////////////////////////////////////////////////
    // Invoked when object tree is fully loaded.
    // Extensions that are interested in using the
    // instanceTree need to use that event to make sure
    // it is available
    //
    ////////////////////////////////////////////////////////

  }, {
    key: 'onObjectTreeCreated',
    value: function onObjectTreeCreated(event) {}

    //console.log('MultiModelExtensionBase.onObjectTreeCreated')


    /////////////////////////////////////////////////////////
    // Invoked when geometry is fully loaded
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'onGeometryLoaded',
    value: function onGeometryLoaded(event) {}

    //console.log('MultiModelExtensionBase.onGeometryLoaded')


    /////////////////////////////////////////////////////////
    // Invoked after onObjectTreeCreated and onGeometryLoaded
    // have both been fired
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'onModelCompletedLoad',
    value: function onModelCompletedLoad(event) {}

    //console.log('MultiModelExtensionBase.onModelCompletedLoad')


    /////////////////////////////////////////////////////////
    // Invoked once the viewer toolbar has been created
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'onToolbarCreated',
    value: function onToolbarCreated(event) {}

    //console.log('MultiModelExtensionBase.onToolbarCreated')


    /////////////////////////////////////////////////////////
    // Triggered by ModelLoader extension when a model has
    // been unloaded as per user request
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'onModelUnloaded',
    value: function onModelUnloaded(event) {}

    //console.log('MultiModelExtensionBase.onModelUnloaded')


    /////////////////////////////////////////////////////////
    // Invoked when a model is being selected
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'onSelection',
    value: function onSelection(event) {}

    //console.log('MultiModelExtensionBase.onSelection')


    /////////////////////////////////////////////////////////
    //Sink Events
    //
    /////////////////////////////////////////////////////////

  }, {
    key: '__onModelLoaded',
    value: function __onModelLoaded(event) {

      this.models = [].concat((0, _toConsumableArray3.default)(this.models), [event.model]);

      this.onModelBeginLoad(event);
    }
  }, {
    key: '__onModelActivated',
    value: function __onModelActivated(event) {

      this.onModelActivated(event);
    }
  }, {
    key: '__onModelUnloaded',
    value: function __onModelUnloaded(event) {

      this.models = this.models.filter(function (model) {

        return model.guid !== event.model.guid;
      });

      this.onModelUnloaded(event);
    }

    /////////////////////////////////////////////////////////
    // Initialize all events for the extension
    // Each event will invoke a predefined handler
    // implemented or not by the derived extension
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'initializeEvents',
    value: function initializeEvents() {
      var _this4 = this;

      if (this.options.eventSink) {

        // event object passed in options
        this.eventSink = this.options.eventSink;

        this.eventSink.on('model.loaded', this.__onModelLoaded);

        this.eventSink.on('model.activated', this.__onModelActivated);

        this.eventSink.on('model.unloaded', this.__onModelUnloaded);
      }

      this.viewerEvents = [{
        id: Autodesk.Viewing.EXTENSION_LOADED_EVENT,
        handler: 'onExtensionLoaded'
      }, {
        id: Autodesk.Viewing.OBJECT_TREE_CREATED_EVENT,
        handler: 'onObjectTreeCreated'
      }, {
        id: Autodesk.Viewing.MODEL_ROOT_LOADED_EVENT,
        handler: 'onModelRootLoaded'
      }, {
        id: Autodesk.Viewing.GEOMETRY_LOADED_EVENT,
        handler: 'onGeometryLoaded'
      }, {
        id: Autodesk.Viewing.TOOLBAR_CREATED_EVENT,
        handler: 'onToolbarCreated'
      }, {
        id: Autodesk.Viewing.AGGREGATE_SELECTION_CHANGED_EVENT,
        handler: 'onSelection'
      }];

      this.viewerEvents.forEach(function (event) {

        _this4.viewerEvent(event.id, _this4[event.handler]);
      });
    }

    /////////////////////////////////////////////////////////
    // Async viewer event
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'viewerEvent',
    value: function viewerEvent(eventId, handler) {
      var _this5 = this;

      if (handler) {

        this.viewer.addEventListener(eventId, handler);
        return;
      }

      var eventIdArray = Array.isArray(eventId) ? eventId : [eventId];

      var eventTasks = eventIdArray.map(function (id) {
        return new _promise2.default(function (resolve) {
          var __handler = function __handler(args) {
            _this5.viewer.removeEventListener(id, __handler);
            resolve(args);
          };
          _this5.viewer.addEventListener(id, __handler);
        });
      });

      return _promise2.default.all(eventTasks);
    }
  }], [{
    key: 'ExtensionId',
    get: function get() {

      return 'Viewing.Extension.MultiModelExtensionBase';
    }
  }]);
  return MultiModelExtensionBase;
}(_EventsEmitter2.default.Composer(Autodesk.Viewing.Extension));

exports.default = MultiModelExtensionBase;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Viewer.MultiModelExtensionBase.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1029:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var CONST_VAR = {
  SORT_DESC: 'desc',
  SORT_ASC: 'asc',
  AWAIT_BEFORE_CELL_EDIT: 1,
  SIZE_PER_PAGE: 10,
  NEXT_PAGE: '>',
  NEXT_PAGE_TITLE: 'next page',
  LAST_PAGE: '>>',
  LAST_PAGE_TITLE: 'last page',
  PRE_PAGE: '<',
  PRE_PAGE_TITLE: 'previous page',
  FIRST_PAGE: '<<',
  FIRST_PAGE_TITLE: 'first page',
  PAGE_START_INDEX: 1,
  ROW_SELECT_BG_COLOR: '',
  ROW_SELECT_NONE: 'none',
  ROW_SELECT_SINGLE: 'radio',
  ROW_SELECT_MULTI: 'checkbox',
  CELL_EDIT_NONE: 'none',
  CELL_EDIT_CLICK: 'click',
  CELL_EDIT_DBCLICK: 'dbclick',
  SIZE_PER_PAGE_LIST: [10, 25, 30, 50],
  PAGINATION_SIZE: 5,
  PAGINATION_POS_TOP: 'top',
  PAGINATION_POS_BOTTOM: 'bottom',
  PAGINATION_POS_BOTH: 'both',
  NO_DATA_TEXT: 'There is no data to display',
  SHOW_ONLY_SELECT: 'Show Selected Only',
  SHOW_ALL: 'Show All',
  EXPORT_CSV_TEXT: 'Export to CSV',
  INSERT_BTN_TEXT: 'New',
  DELETE_BTN_TEXT: 'Delete',
  SAVE_BTN_TEXT: 'Save',
  CLOSE_BTN_TEXT: 'Close',
  FILTER_DELAY: 500,
  SCROLL_TOP: 'Top',
  SCROLL_BOTTOM: 'Bottom',
  FILTER_TYPE: {
    TEXT: 'TextFilter',
    REGEX: 'RegexFilter',
    SELECT: 'SelectFilter',
    NUMBER: 'NumberFilter',
    DATE: 'DateFilter',
    CUSTOM: 'CustomFilter'
  },
  FILTER_COND_EQ: 'eq',
  FILTER_COND_LIKE: 'like',
  EXPAND_BY_ROW: 'row',
  EXPAND_BY_COL: 'column',
  CANCEL_TOASTR: 'Pressed ESC can cancel',
  REMOTE_SORT: 'sort',
  REMOTE_PAGE: 'pagination',
  REMOTE_CELL_EDIT: 'cellEdit',
  REMOTE_INSERT_ROW: 'insertRow',
  REMOTE_DROP_ROW: 'dropRow',
  REMOTE_FILTER: 'filter',
  REMOTE_SEARCH: 'search',
  REMOTE_EXPORT_CSV: 'exportCSV',
  DEFAULT_CSV_SEPARATOR: ','
};

CONST_VAR.REMOTE = {};
CONST_VAR.REMOTE[CONST_VAR.REMOTE_SORT] = false;
CONST_VAR.REMOTE[CONST_VAR.REMOTE_PAGE] = false;
CONST_VAR.REMOTE[CONST_VAR.REMOTE_CELL_EDIT] = false;
CONST_VAR.REMOTE[CONST_VAR.REMOTE_INSERT_ROW] = false;
CONST_VAR.REMOTE[CONST_VAR.REMOTE_DROP_ROW] = false;
CONST_VAR.REMOTE[CONST_VAR.REMOTE_FILTER] = false;
CONST_VAR.REMOTE[CONST_VAR.REMOTE_SEARCH] = false;
CONST_VAR.REMOTE[CONST_VAR.REMOTE_EXPORT_CSV] = false;

var _default = CONST_VAR;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(CONST_VAR, 'CONST_VAR', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/Const.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/Const.js');
}();

;

/***/ }),

/***/ 1030:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(371);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _assign = __webpack_require__(46);

var _assign2 = _interopRequireDefault(_assign);

var _getPrototypeOf = __webpack_require__(20);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(18);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(26);

var _reactDom2 = _interopRequireDefault(_reactDom);

__webpack_require__(1031);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WidgetContainer = (_temp = _class = function (_React$Component) {
  (0, _inherits3.default)(WidgetContainer, _React$Component);

  function WidgetContainer() {
    (0, _classCallCheck3.default)(this, WidgetContainer);
    return (0, _possibleConstructorReturn3.default)(this, (WidgetContainer.__proto__ || (0, _getPrototypeOf2.default)(WidgetContainer)).apply(this, arguments));
  }

  (0, _createClass3.default)(WidgetContainer, [{
    key: 'renderTitle',


    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////


    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////
    value: function renderTitle() {

      if (!this.props.showTitle) {

        return _react2.default.createElement('div', null);
      }

      if (this.props.renderTitle) {

        return this.props.renderTitle();
      }

      return _react2.default.createElement(
        'div',
        { className: 'title' },
        _react2.default.createElement(
          'label',
          null,
          this.props.title
        )
      );
    }

    ///////////////////////////////////////////////////////////////////
    //
    //
    ///////////////////////////////////////////////////////////////////


    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'renderChildren',
    value: function renderChildren() {
      var _this2 = this;

      if (this.props.dimensions) {

        return _react2.default.Children.map(this.props.children, function (child) {

          var newProps = (0, _assign2.default)({}, child.props, {
            dimensions: _this2.props.dimensions
          });

          return _react2.default.cloneElement(child, newProps);
        });
      }

      return this.props.children;
    }

    ///////////////////////////////////////////////////////////////////
    //
    //
    ///////////////////////////////////////////////////////////////////

  }, {
    key: 'render',
    value: function render() {

      var classNames = ['widget-container'].concat((0, _toConsumableArray3.default)(this.props.className.split(' ')));

      var height = this.props.showTitle ? 'calc(100% - 40px)' : '100%';

      return _react2.default.createElement(
        'div',
        { className: classNames.join(' '), style: this.props.style },
        this.renderTitle(),
        _react2.default.createElement(
          'div',
          { className: 'content', style: { height: height } },
          this.renderChildren()
        )
      );
    }
  }]);
  return WidgetContainer;
}(_react2.default.Component), _class.propTypes = {
  className: _propTypes2.default.string,
  showTitle: _propTypes2.default.bool }, _class.defaultProps = {
  showTitle: true,
  className: '' }, _temp);
exports.default = WidgetContainer;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "WidgetContainer.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1031:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1020);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(37)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(1020, function() {
			var newContent = __webpack_require__(1020);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1032:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;;(function(factory) {
    'use strict';
    /* global window: false, define: false, module: false */
    var root = typeof window === 'undefined' ? null : window;

    if (true) {
        !(__WEBPACK_AMD_DEFINE_RESULT__ = function(){ return factory(root); }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof module !== 'undefined') {
        module.exports = factory(root);
    } else {
        root.DOMPurify = factory(root);
    }
}(function factory(window) {
    'use strict';

    var DOMPurify = function(window) {
        return factory(window);
    };

    /**
     * Version label, exposed for easier checks
     * if DOMPurify is up to date or not
     */
    DOMPurify.version = '0.8.9';

    /**
     * Array of elements that DOMPurify removed during sanitation.
     * Empty if nothing was removed.
     */
    DOMPurify.removed = [];

    if (!window || !window.document || window.document.nodeType !== 9) {
        // not running in a browser, provide a factory function
        // so that you can pass your own Window
        DOMPurify.isSupported = false;
        return DOMPurify;
    }

    var document = window.document;
    var originalDocument = document;
    var DocumentFragment = window.DocumentFragment;
    var HTMLTemplateElement = window.HTMLTemplateElement;
    var Node = window.Node;
    var NodeFilter = window.NodeFilter;
    var NamedNodeMap = window.NamedNodeMap || window.MozNamedAttrMap;
    var Text = window.Text;
    var Comment = window.Comment;
    var DOMParser = window.DOMParser;
    var useDOMParser = false; // See comment below

    // As per issue #47, the web-components registry is inherited by a
    // new document created via createHTMLDocument. As per the spec
    // (http://w3c.github.io/webcomponents/spec/custom/#creating-and-passing-registries)
    // a new empty registry is used when creating a template contents owner
    // document, so we use that as our parent document to ensure nothing
    // is inherited.
    if (typeof HTMLTemplateElement === 'function') {
        var template = document.createElement('template');
        if (template.content && template.content.ownerDocument) {
            document = template.content.ownerDocument;
        }
    }
    var implementation = document.implementation;
    var createNodeIterator = document.createNodeIterator;
    var getElementsByTagName = document.getElementsByTagName;
    var createDocumentFragment = document.createDocumentFragment;
    var importNode = originalDocument.importNode;

    var hooks = {};

    /**
     * Expose whether this browser supports running the full DOMPurify.
     */
    DOMPurify.isSupported =
        typeof implementation.createHTMLDocument !== 'undefined' &&
        document.documentMode !== 9;

    /* Add properties to a lookup table */
    var _addToSet = function(set, array) {
        var l = array.length;
        while (l--) {
            if (typeof array[l] === 'string') {
                array[l] = array[l].toLowerCase();
            }
            set[array[l]] = true;
        }
        return set;
    };

    /* Shallow clone an object */
    var _cloneObj = function(object) {
        var newObject = {};
        var property;
        for (property in object) {
            if (object.hasOwnProperty(property)) {
                newObject[property] = object[property];
            }
        }
        return newObject;
    };

    /**
     * We consider the elements and attributes below to be safe. Ideally
     * don't add any new ones but feel free to remove unwanted ones.
     */

    /* allowed element names */
    var ALLOWED_TAGS = null;
    var DEFAULT_ALLOWED_TAGS = _addToSet({}, [

        // HTML
        'a','abbr','acronym','address','area','article','aside','audio','b',
        'bdi','bdo','big','blink','blockquote','body','br','button','canvas',
        'caption','center','cite','code','col','colgroup','content','data',
        'datalist','dd','decorator','del','details','dfn','dir','div','dl','dt',
        'element','em','fieldset','figcaption','figure','font','footer','form',
        'h1','h2','h3','h4','h5','h6','head','header','hgroup','hr','html','i',
        'img','input','ins','kbd','label','legend','li','main','map','mark',
        'marquee','menu','menuitem','meter','nav','nobr','ol','optgroup',
        'option','output','p','pre','progress','q','rp','rt','ruby','s','samp',
        'section','select','shadow','small','source','spacer','span','strike',
        'strong','style','sub','summary','sup','table','tbody','td','template',
        'textarea','tfoot','th','thead','time','tr','track','tt','u','ul','var',
        'video','wbr',

        // SVG
        'svg','altglyph','altglyphdef','altglyphitem','animatecolor',
        'animatemotion','animatetransform','circle','clippath','defs','desc',
        'ellipse','filter','font','g','glyph','glyphref','hkern','image','line',
        'lineargradient','marker','mask','metadata','mpath','path','pattern',
        'polygon','polyline','radialgradient','rect','stop','switch','symbol',
        'text','textpath','title','tref','tspan','view','vkern',

        // SVG Filters
        'feBlend','feColorMatrix','feComponentTransfer','feComposite',
        'feConvolveMatrix','feDiffuseLighting','feDisplacementMap',
        'feFlood','feFuncA','feFuncB','feFuncG','feFuncR','feGaussianBlur',
        'feMerge','feMergeNode','feMorphology','feOffset',
        'feSpecularLighting','feTile','feTurbulence',

        //MathML
        'math','menclose','merror','mfenced','mfrac','mglyph','mi','mlabeledtr',
        'mmuliscripts','mn','mo','mover','mpadded','mphantom','mroot','mrow',
        'ms','mpspace','msqrt','mystyle','msub','msup','msubsup','mtable','mtd',
        'mtext','mtr','munder','munderover',

        //Text
        '#text'
    ]);

    /* Allowed attribute names */
    var ALLOWED_ATTR = null;
    var DEFAULT_ALLOWED_ATTR = _addToSet({}, [

        // HTML
        'accept','action','align','alt','autocomplete','background','bgcolor',
        'border','cellpadding','cellspacing','checked','cite','class','clear','color',
        'cols','colspan','coords','datetime','default','dir','disabled',
        'download','enctype','face','for','headers','height','hidden','high','href',
        'hreflang','id','ismap','label','lang','list','loop', 'low','max',
        'maxlength','media','method','min','multiple','name','noshade','novalidate',
        'nowrap','open','optimum','pattern','placeholder','poster','preload','pubdate',
        'radiogroup','readonly','rel','required','rev','reversed','role','rows',
        'rowspan','spellcheck','scope','selected','shape','size','span',
        'srclang','start','src','step','style','summary','tabindex','title',
        'type','usemap','valign','value','width','xmlns',

        // SVG
        'accent-height','accumulate','additivive','alignment-baseline',
        'ascent','attributename','attributetype','azimuth','basefrequency',
        'baseline-shift','begin','bias','by','clip','clip-path','clip-rule',
        'color','color-interpolation','color-interpolation-filters','color-profile',
        'color-rendering','cx','cy','d','dx','dy','diffuseconstant','direction',
        'display','divisor','dur','edgemode','elevation','end','fill','fill-opacity',
        'fill-rule','filter','flood-color','flood-opacity','font-family','font-size',
        'font-size-adjust','font-stretch','font-style','font-variant','font-weight',
        'fx', 'fy','g1','g2','glyph-name','glyphref','gradientunits','gradienttransform',
        'image-rendering','in','in2','k','k1','k2','k3','k4','kerning','keypoints',
        'keysplines','keytimes','lengthadjust','letter-spacing','kernelmatrix',
        'kernelunitlength','lighting-color','local','marker-end','marker-mid',
        'marker-start','markerheight','markerunits','markerwidth','maskcontentunits',
        'maskunits','max','mask','mode','min','numoctaves','offset','operator',
        'opacity','order','orient','orientation','origin','overflow','paint-order',
        'path','pathlength','patterncontentunits','patterntransform','patternunits',
        'points','preservealpha','r','rx','ry','radius','refx','refy','repeatcount',
        'repeatdur','restart','result','rotate','scale','seed','shape-rendering',
        'specularconstant','specularexponent','spreadmethod','stddeviation','stitchtiles',
        'stop-color','stop-opacity','stroke-dasharray','stroke-dashoffset','stroke-linecap',
        'stroke-linejoin','stroke-miterlimit','stroke-opacity','stroke','stroke-width',
        'surfacescale','targetx','targety','transform','text-anchor','text-decoration',
        'text-rendering','textlength','u1','u2','unicode','values','viewbox',
        'visibility','vert-adv-y','vert-origin-x','vert-origin-y','word-spacing',
        'wrap','writing-mode','xchannelselector','ychannelselector','x','x1','x2',
        'y','y1','y2','z','zoomandpan',

        // MathML
        'accent','accentunder','bevelled','close','columnsalign','columnlines',
        'columnspan','denomalign','depth','display','displaystyle','fence',
        'frame','largeop','length','linethickness','lspace','lquote',
        'mathbackground','mathcolor','mathsize','mathvariant','maxsize',
        'minsize','movablelimits','notation','numalign','open','rowalign',
        'rowlines','rowspacing','rowspan','rspace','rquote','scriptlevel',
        'scriptminsize','scriptsizemultiplier','selection','separator',
        'separators','stretchy','subscriptshift','supscriptshift','symmetric',
        'voffset',

        // XML
        'xlink:href','xml:id','xlink:title','xml:space','xmlns:xlink'
    ]);

    /* Explicitly forbidden tags (overrides ALLOWED_TAGS/ADD_TAGS) */
    var FORBID_TAGS = null;

    /* Explicitly forbidden attributes (overrides ALLOWED_ATTR/ADD_ATTR) */
    var FORBID_ATTR = null;

    /* Decide if ARIA attributes are okay */
    var ALLOW_ARIA_ATTR = true;

    /* Decide if custom data attributes are okay */
    var ALLOW_DATA_ATTR = true;

    /* Decide if unknown protocols are okay */
    var ALLOW_UNKNOWN_PROTOCOLS = false;

    /* Output should be safe for jQuery's $() factory? */
    var SAFE_FOR_JQUERY = false;

    /* Output should be safe for common template engines.
     * This means, DOMPurify removes data attributes, mustaches and ERB
     */
    var SAFE_FOR_TEMPLATES = false;

    /* Specify template detection regex for SAFE_FOR_TEMPLATES mode */
    var MUSTACHE_EXPR = /\{\{[\s\S]*|[\s\S]*\}\}/gm;
    var ERB_EXPR = /<%[\s\S]*|[\s\S]*%>/gm;

    /* Decide if document with <html>... should be returned */
    var WHOLE_DOCUMENT = false;

    /* Decide if all elements (e.g. style, script) must be children of
     * document.body. By default, browsers might move them to document.head */
    var FORCE_BODY = false;

    /* Decide if a DOM `HTMLBodyElement` should be returned, instead of a html string.
     * If `WHOLE_DOCUMENT` is enabled a `HTMLHtmlElement` will be returned instead
     */
    var RETURN_DOM = false;

    /* Decide if a DOM `DocumentFragment` should be returned, instead of a html string */
    var RETURN_DOM_FRAGMENT = false;

    /* If `RETURN_DOM` or `RETURN_DOM_FRAGMENT` is enabled, decide if the returned DOM
     * `Node` is imported into the current `Document`. If this flag is not enabled the
     * `Node` will belong (its ownerDocument) to a fresh `HTMLDocument`, created by
     * DOMPurify. */
    var RETURN_DOM_IMPORT = false;

    /* Output should be free from DOM clobbering attacks? */
    var SANITIZE_DOM = true;

    /* Keep element content when removing element? */
    var KEEP_CONTENT = true;

    /* Tags to ignore content of when KEEP_CONTENT is true */
    var FORBID_CONTENTS = _addToSet({}, [
        'audio', 'head', 'math', 'script', 'style', 'template', 'svg', 'video'
    ]);

    /* Tags that are safe for data: URIs */
    var DATA_URI_TAGS = _addToSet({}, [
        'audio', 'video', 'img', 'source', 'image'
    ]);

    /* Attributes safe for values like "javascript:" */
    var URI_SAFE_ATTRIBUTES = _addToSet({}, [
        'alt','class','for','id','label','name','pattern','placeholder',
        'summary','title','value','style','xmlns'
    ]);

    /* Keep a reference to config to pass to hooks */
    var CONFIG = null;

    /* Ideally, do not touch anything below this line */
    /* ______________________________________________ */

    var formElement = document.createElement('form');

    /**
     * _parseConfig
     *
     * @param  optional config literal
     */
    var _parseConfig = function(cfg) {
        /* Shield configuration object from tampering */
        if (typeof cfg !== 'object') {
            cfg = {};
        }

        /* Set configuration parameters */
        ALLOWED_TAGS = 'ALLOWED_TAGS' in cfg ?
            _addToSet({}, cfg.ALLOWED_TAGS) : DEFAULT_ALLOWED_TAGS;
        ALLOWED_ATTR = 'ALLOWED_ATTR' in cfg ?
            _addToSet({}, cfg.ALLOWED_ATTR) : DEFAULT_ALLOWED_ATTR;
        FORBID_TAGS = 'FORBID_TAGS' in cfg ?
            _addToSet({}, cfg.FORBID_TAGS) : {};
        FORBID_ATTR = 'FORBID_ATTR' in cfg ?
            _addToSet({}, cfg.FORBID_ATTR) : {};
        ALLOW_ARIA_ATTR     = cfg.ALLOW_ARIA_ATTR     !== false; // Default true
        ALLOW_DATA_ATTR     = cfg.ALLOW_DATA_ATTR     !== false; // Default true
        ALLOW_UNKNOWN_PROTOCOLS = cfg.ALLOW_UNKNOWN_PROTOCOLS || false; // Default false
        SAFE_FOR_JQUERY     = cfg.SAFE_FOR_JQUERY     ||  false; // Default false
        SAFE_FOR_TEMPLATES  = cfg.SAFE_FOR_TEMPLATES  ||  false; // Default false
        WHOLE_DOCUMENT      = cfg.WHOLE_DOCUMENT      ||  false; // Default false
        RETURN_DOM          = cfg.RETURN_DOM          ||  false; // Default false
        RETURN_DOM_FRAGMENT = cfg.RETURN_DOM_FRAGMENT ||  false; // Default false
        RETURN_DOM_IMPORT   = cfg.RETURN_DOM_IMPORT   ||  false; // Default false
        FORCE_BODY          = cfg.FORCE_BODY          ||  false; // Default false
        SANITIZE_DOM        = cfg.SANITIZE_DOM        !== false; // Default true
        KEEP_CONTENT        = cfg.KEEP_CONTENT        !== false; // Default true

        if (SAFE_FOR_TEMPLATES) {
            ALLOW_DATA_ATTR = false;
        }

        if (RETURN_DOM_FRAGMENT) {
            RETURN_DOM = true;
        }

        /* Merge configuration parameters */
        if (cfg.ADD_TAGS) {
            if (ALLOWED_TAGS === DEFAULT_ALLOWED_TAGS) {
                ALLOWED_TAGS = _cloneObj(ALLOWED_TAGS);
            }
            _addToSet(ALLOWED_TAGS, cfg.ADD_TAGS);
        }
        if (cfg.ADD_ATTR) {
            if (ALLOWED_ATTR === DEFAULT_ALLOWED_ATTR) {
                ALLOWED_ATTR = _cloneObj(ALLOWED_ATTR);
            }
            _addToSet(ALLOWED_ATTR, cfg.ADD_ATTR);
        }
        if (cfg.ADD_URI_SAFE_ATTR) {
            _addToSet(URI_SAFE_ATTRIBUTES, cfg.ADD_URI_SAFE_ATTR);
        }

        /* Add #text in case KEEP_CONTENT is set to true */
        if (KEEP_CONTENT) { ALLOWED_TAGS['#text'] = true; }

        // Prevent further manipulation of configuration.
        // Not available in IE8, Safari 5, etc.
        if (Object && 'freeze' in Object) { Object.freeze(cfg); }

        CONFIG = cfg;
    };

   /**
     * _forceRemove
     *
     * @param  a DOM node
     */
    var _forceRemove = function(node) {
        DOMPurify.removed.push({element: node});
        try {
            node.parentNode.removeChild(node);
        } catch (e) {
            node.outerHTML = '';
        }
    };

   /**
     * _removeAttribute
     *
     * @param  an Attribute name
     * @param  a DOM node
     */
    var _removeAttribute = function(name, node) {
        DOMPurify.removed.push({
            attribute: node.getAttributeNode(name),
            from: node
        });
        node.removeAttribute(name);
    };

   /**
     * _initDocument
     *
     * @param  a string of dirty markup
     * @return a DOM, filled with the dirty markup
     */
    var _initDocument = function(dirty) {
        /* Create a HTML document */
        var doc, body;

        /* Fill body with bogus element */
        if (FORCE_BODY) {
            dirty = '<remove></remove>' + dirty;
        }

        /* Use DOMParser to workaround Firefox bug (see comment below) */
        if (useDOMParser) {
            try {
                doc = new DOMParser().parseFromString(dirty, 'text/html');
            } catch (e) {}
        }

        /* Otherwise use createHTMLDocument, because DOMParser is unsafe in
           Safari (see comment below) */
        if (!doc || !doc.documentElement) {
            doc = implementation.createHTMLDocument('');
            body = doc.body;
            body.parentNode.removeChild(body.parentNode.firstElementChild);
            body.outerHTML = dirty;
        }

        /* Work on whole document or just its body */
        return getElementsByTagName.call(doc,
            WHOLE_DOCUMENT ? 'html' : 'body')[0];
    };

    // Safari 10.1+ (unfixed as of time of writing) has a catastrophic bug in
    // its implementation of DOMParser such that the following executes the
    // JavaScript:
    //
    // new DOMParser()
    //   .parseFromString('<svg onload=alert(document.domain)>', 'text/html');
    //
    // However, Firefox uses a different parser for innerHTML rather than
    // DOMParser (see https://bugzilla.mozilla.org/show_bug.cgi?id=1205631)
    // which means that you *must* use DOMParser, otherwise the output may
    // not be safe if used in a document.write context later.
    //
    // So we feature detect the Firefox bug and use the DOMParser if necessary.
    if (DOMPurify.isSupported) {
        (function () {
            var doc = _initDocument('<svg><p><style><img src="</style><img src=x onerror=alert(1)//">');
            if (doc.querySelector('svg img')) {
                useDOMParser = true;
            }
        }());
    }

    /**
     * _createIterator
     *
     * @param  document/fragment to create iterator for
     * @return iterator instance
     */
    var _createIterator = function(root) {
        return createNodeIterator.call(root.ownerDocument || root,
            root,
            NodeFilter.SHOW_ELEMENT
            | NodeFilter.SHOW_COMMENT
            | NodeFilter.SHOW_TEXT,
            function() { return NodeFilter.FILTER_ACCEPT; },
            false
        );
    };

    /**
     * _isClobbered
     *
     * @param  element to check for clobbering attacks
     * @return true if clobbered, false if safe
     */
    var _isClobbered = function(elm) {
        if (elm instanceof Text || elm instanceof Comment) {
            return false;
        }
        if (  typeof elm.nodeName !== 'string'
           || typeof elm.textContent !== 'string'
           || typeof elm.removeChild !== 'function'
           || !(elm.attributes instanceof NamedNodeMap)
           || typeof elm.removeAttribute !== 'function'
           || typeof elm.setAttribute !== 'function'
        ) {
            return true;
        }
        return false;
    };

    /**
     * _isNode
     *
     * @param object to check whether it's a DOM node
     * @return true is object is a DOM node
     */
    var _isNode = function(obj) {
        return (
            typeof Node === "object" ? obj instanceof Node : obj
                && typeof obj === "object" && typeof obj.nodeType === "number"
                && typeof obj.nodeName==="string"
        );
    };

    /**
     * _sanitizeElements
     *
     * @protect nodeName
     * @protect textContent
     * @protect removeChild
     *
     * @param   node to check for permission to exist
     * @return  true if node was killed, false if left alive
     */
    var _sanitizeElements = function(currentNode) {
        var tagName, content;

        /* Execute a hook if present */
        _executeHook('beforeSanitizeElements', currentNode, null);

        /* Check if element is clobbered or can clobber */
        if (_isClobbered(currentNode)) {
            _forceRemove(currentNode);
            return true;
        }

        /* Now let's check the element's type and name */
        tagName = currentNode.nodeName.toLowerCase();

        /* Execute a hook if present */
        _executeHook('uponSanitizeElement', currentNode, {
            tagName: tagName,
            allowedTags: ALLOWED_TAGS
        });

        /* Remove element if anything forbids its presence */
        if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
            /* Keep content except for black-listed elements */
            if (KEEP_CONTENT && !FORBID_CONTENTS[tagName]
                    && typeof currentNode.insertAdjacentHTML === 'function') {
                try {
                    currentNode.insertAdjacentHTML('AfterEnd', currentNode.innerHTML);
                } catch (e) {}
            }
            _forceRemove(currentNode);
            return true;
        }

        /* Convert markup to cover jQuery behavior */
        if (SAFE_FOR_JQUERY && !currentNode.firstElementChild &&
                (!currentNode.content || !currentNode.content.firstElementChild) &&
                /</g.test(currentNode.textContent)) {
            DOMPurify.removed.push({element: currentNode.cloneNode()});
            currentNode.innerHTML = currentNode.textContent.replace(/</g, '&lt;');
        }

        /* Sanitize element content to be template-safe */
        if (SAFE_FOR_TEMPLATES && currentNode.nodeType === 3) {
            /* Get the element's text content */
            content = currentNode.textContent;
            content = content.replace(MUSTACHE_EXPR, ' ');
            content = content.replace(ERB_EXPR, ' ');
            if (currentNode.textContent !== content) {
                DOMPurify.removed.push({element: currentNode.cloneNode()});
                currentNode.textContent = content;
            }
        }

        /* Execute a hook if present */
        _executeHook('afterSanitizeElements', currentNode, null);

        return false;
    };

    var DATA_ATTR = /^data-[\-\w.\u00B7-\uFFFF]/;
    var ARIA_ATTR = /^aria-[\-\w]+$/;
    var IS_ALLOWED_URI = /^(?:(?:(?:f|ht)tps?|mailto|tel):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i;
    var IS_SCRIPT_OR_DATA = /^(?:\w+script|data):/i;
    /* This needs to be extensive thanks to Webkit/Blink's behavior */
    var ATTR_WHITESPACE = /[\x00-\x20\xA0\u1680\u180E\u2000-\u2029\u205f\u3000]/g;

    /**
     * _sanitizeAttributes
     *
     * @protect attributes
     * @protect nodeName
     * @protect removeAttribute
     * @protect setAttribute
     *
     * @param   node to sanitize
     * @return  void
     */
    var _sanitizeAttributes = function(currentNode) {
        var attr, name, value, lcName, idAttr, attributes, hookEvent, l;
        /* Execute a hook if present */
        _executeHook('beforeSanitizeAttributes', currentNode, null);

        attributes = currentNode.attributes;

        /* Check if we have attributes; if not we might have a text node */
        if (!attributes) { return; }

        hookEvent = {
            attrName: '',
            attrValue: '',
            keepAttr: true,
            allowedAttributes: ALLOWED_ATTR
        };
        l = attributes.length;

        /* Go backwards over all attributes; safely remove bad ones */
        while (l--) {
            attr = attributes[l];
            name = attr.name;
            value = attr.value.trim();
            lcName = name.toLowerCase();

            /* Execute a hook if present */
            hookEvent.attrName = lcName;
            hookEvent.attrValue = value;
            hookEvent.keepAttr = true;
            _executeHook('uponSanitizeAttribute', currentNode, hookEvent );
            value = hookEvent.attrValue;

            /* Remove attribute */
            // Safari (iOS + Mac), last tested v8.0.5, crashes if you try to
            // remove a "name" attribute from an <img> tag that has an "id"
            // attribute at the time.
            if (lcName === 'name'  &&
                    currentNode.nodeName === 'IMG' && attributes.id) {
                idAttr = attributes.id;
                attributes = Array.prototype.slice.apply(attributes);
                _removeAttribute('id', currentNode);
                _removeAttribute(name, currentNode);
                if (attributes.indexOf(idAttr) > l) {
                    currentNode.setAttribute('id', idAttr.value);
                }
            } else if (
                  // This works around a bug in Safari, where input[type=file]
                  // cannot be dynamically set after type has been removed
                  currentNode.nodeName === 'INPUT' && lcName === 'type' &&
                  value === 'file' && (ALLOWED_ATTR[lcName] || !FORBID_ATTR[lcName])) {
                  continue;
            } else {
                // This avoids a crash in Safari v9.0 with double-ids.
                // The trick is to first set the id to be empty and then to
                // remove the attribute
                if (name === 'id') {
                    currentNode.setAttribute(name, '');
                }
                _removeAttribute(name, currentNode);
            }

            /* Did the hooks approve of the attribute? */
            if (!hookEvent.keepAttr) {
                continue;
            }

            /* Make sure attribute cannot clobber */
            if (SANITIZE_DOM &&
                    (lcName === 'id' || lcName === 'name') &&
                    (value in window || value in document || value in formElement)) {
                continue;
            }

            /* Sanitize attribute content to be template-safe */
            if (SAFE_FOR_TEMPLATES) {
                value = value.replace(MUSTACHE_EXPR, ' ');
                value = value.replace(ERB_EXPR, ' ');
            }

            /* Allow valid data-* attributes: At least one character after "-"
               (https://html.spec.whatwg.org/multipage/dom.html#embedding-custom-non-visible-data-with-the-data-*-attributes)
               XML-compatible (https://html.spec.whatwg.org/multipage/infrastructure.html#xml-compatible and http://www.w3.org/TR/xml/#d0e804)
               We don't need to check the value; it's always URI safe. */
            if (ALLOW_DATA_ATTR && DATA_ATTR.test(lcName)) {
                // This attribute is safe
            }
            else if (ALLOW_ARIA_ATTR && ARIA_ATTR.test(lcName)) {
                // This attribute is safe
            }
            /* Otherwise, check the name is permitted */
            else if (!ALLOWED_ATTR[lcName] || FORBID_ATTR[lcName]) {
                continue;
            }
            /* Check value is safe. First, is attr inert? If so, is safe */
            else if (URI_SAFE_ATTRIBUTES[lcName]) {
                // This attribute is safe
            }
            /* Check no script, data or unknown possibly unsafe URI
               unless we know URI values are safe for that attribute */
            else if (IS_ALLOWED_URI.test(value.replace(ATTR_WHITESPACE,''))) {
                // This attribute is safe
            }
            /* Keep image data URIs alive if src/xlink:href is allowed */
            else if (
                (lcName === 'src' || lcName === 'xlink:href') &&
                value.indexOf('data:') === 0 &&
                DATA_URI_TAGS[currentNode.nodeName.toLowerCase()]) {
                // This attribute is safe
            }
            /* Allow unknown protocols: This provides support for links that
               are handled by protocol handlers which may be unknown ahead of
               time, e.g. fb:, spotify: */
            else if (
                ALLOW_UNKNOWN_PROTOCOLS &&
                !IS_SCRIPT_OR_DATA.test(value.replace(ATTR_WHITESPACE,''))) {
                // This attribute is safe
            }
            /* Check for binary attributes */
            else if (!value) {
                // binary attributes are safe at this point
            }
            /* Anything else, presume unsafe, do not add it back */
            else {
                continue;
            }

            /* Handle invalid data-* attribute set by try-catching it */
            try {
                currentNode.setAttribute(name, value);
                DOMPurify.removed.pop();
            } catch (e) {}
        }

        /* Execute a hook if present */
        _executeHook('afterSanitizeAttributes', currentNode, null);
    };

    /**
     * _sanitizeShadowDOM
     *
     * @param  fragment to iterate over recursively
     * @return void
     */
    var _sanitizeShadowDOM = function(fragment) {
        var shadowNode;
        var shadowIterator = _createIterator(fragment);

        /* Execute a hook if present */
        _executeHook('beforeSanitizeShadowDOM', fragment, null);

        while ( (shadowNode = shadowIterator.nextNode()) ) {
            /* Execute a hook if present */
            _executeHook('uponSanitizeShadowNode', shadowNode, null);

            /* Sanitize tags and elements */
            if (_sanitizeElements(shadowNode)) {
                continue;
            }

            /* Deep shadow DOM detected */
            if (shadowNode.content instanceof DocumentFragment) {
                _sanitizeShadowDOM(shadowNode.content);
            }

            /* Check attributes, sanitize if necessary */
            _sanitizeAttributes(shadowNode);
        }

        /* Execute a hook if present */
        _executeHook('afterSanitizeShadowDOM', fragment, null);
    };

    /**
     * _executeHook
     * Execute user configurable hooks
     *
     * @param  {String} entryPoint  Name of the hook's entry point
     * @param  {Node} currentNode
     */
    var _executeHook = function(entryPoint, currentNode, data) {
        if (!hooks[entryPoint]) { return; }

        hooks[entryPoint].forEach(function(hook) {
            hook.call(DOMPurify, currentNode, data, CONFIG);
        });
    };

    /**
     * sanitize
     * Public method providing core sanitation functionality
     *
     * @param {String|Node} dirty string or DOM node
     * @param {Object} configuration object
     */
    DOMPurify.sanitize = function(dirty, cfg) {
        var body, importedNode, currentNode, oldNode, nodeIterator, returnNode;
        /* Make sure we have a string to sanitize.
           DO NOT return early, as this will return the wrong type if
           the user has requested a DOM object rather than a string */
        if (!dirty) {
            dirty = '<!-->';
        }

        /* Stringify, in case dirty is an object */
        if (typeof dirty !== 'string' && !_isNode(dirty)) {
            if (typeof dirty.toString !== 'function') {
                throw new TypeError('toString is not a function');
            } else {
                dirty = dirty.toString();
            }
        }

        /* Check we can run. Otherwise fall back or ignore */
        if (!DOMPurify.isSupported) {
            if (typeof window.toStaticHTML === 'object'
                || typeof window.toStaticHTML === 'function') {
                if (typeof dirty === 'string') {
                    return window.toStaticHTML(dirty);
                } else if (_isNode(dirty)) {
                    return window.toStaticHTML(dirty.outerHTML);
                }
            }
            return dirty;
        }

        /* Assign config vars */
        _parseConfig(cfg);

        /* Clean up removed elements */
        DOMPurify.removed = [];

        if (dirty instanceof Node) {
            /* If dirty is a DOM element, append to an empty document to avoid
               elements being stripped by the parser */
            body = _initDocument('<!-->');
            importedNode = body.ownerDocument.importNode(dirty, true);
            if (importedNode.nodeType === 1 && importedNode.nodeName === 'BODY') {
                /* Node is already a body, use as is */
                body = importedNode;
            } else {
                body.appendChild(importedNode);
            }
        } else {
            /* Exit directly if we have nothing to do */
            if (!RETURN_DOM && !WHOLE_DOCUMENT && dirty.indexOf('<') === -1) {
                return dirty;
            }

            /* Initialize the document to work on */
            body = _initDocument(dirty);

            /* Check we have a DOM node from the data */
            if (!body) {
                return RETURN_DOM ? null : '';
            }
        }

        /* Remove first element node (ours) if FORCE_BODY is set */
        if (FORCE_BODY) {
            _forceRemove(body.firstChild);
        }

        /* Get node iterator */
        nodeIterator = _createIterator(body);

        /* Now start iterating over the created document */
        while ( (currentNode = nodeIterator.nextNode()) ) {

            /* Fix IE's strange behavior with manipulated textNodes #89 */
            if (currentNode.nodeType === 3 && currentNode === oldNode) {
                continue;
            }

            /* Sanitize tags and elements */
            if (_sanitizeElements(currentNode)) {
                continue;
            }

            /* Shadow DOM detected, sanitize it */
            if (currentNode.content instanceof DocumentFragment) {
                _sanitizeShadowDOM(currentNode.content);
            }

            /* Check attributes, sanitize if necessary */
            _sanitizeAttributes(currentNode);

            oldNode = currentNode;
        }

        /* Return sanitized string or DOM */
        if (RETURN_DOM) {

            if (RETURN_DOM_FRAGMENT) {
                returnNode = createDocumentFragment.call(body.ownerDocument);

                while (body.firstChild) {
                    returnNode.appendChild(body.firstChild);
                }
            } else {
                returnNode = body;
            }

            if (RETURN_DOM_IMPORT) {
                /* adoptNode() is not used because internal state is not reset
                   (e.g. the past names map of a HTMLFormElement), this is safe
                   in theory but we would rather not risk another attack vector.
                   The state that is cloned by importNode() is explicitly defined
                   by the specs. */
                returnNode = importNode.call(originalDocument, returnNode, true);
            }

            return returnNode;
        }

        return WHOLE_DOCUMENT ? body.outerHTML : body.innerHTML;
    };

    /**
     * addHook
     * Public method to add DOMPurify hooks
     *
     * @param {String} entryPoint
     * @param {Function} hookFunction
     */
    DOMPurify.addHook = function(entryPoint, hookFunction) {
        if (typeof hookFunction !== 'function') { return; }
        hooks[entryPoint] = hooks[entryPoint] || [];
        hooks[entryPoint].push(hookFunction);
    };

    /**
     * removeHook
     * Public method to remove a DOMPurify hook at a given entryPoint
     * (pops it from the stack of hooks if more are present)
     *
     * @param {String} entryPoint
     * @return void
     */
    DOMPurify.removeHook = function(entryPoint) {
        if (hooks[entryPoint]) {
            hooks[entryPoint].pop();
        }
    };

    /**
     * removeHooks
     * Public method to remove all DOMPurify hooks at a given entryPoint
     *
     * @param  {String} entryPoint
     * @return void
     */
    DOMPurify.removeHooks = function(entryPoint) {
        if (hooks[entryPoint]) {
            hooks[entryPoint] = [];
        }
    };

    /**
     * removeAllHooks
     * Public method to remove all DOMPurify hooks
     *
     * @return void
     */
    DOMPurify.removeAllHooks = function() {
        hooks = {};
    };

    return DOMPurify;
}));


/***/ }),

/***/ 1034:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Label = __webpack_require__(1036);

var _Label2 = _interopRequireDefault(_Label);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Label2.default;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1036:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _toConsumableArray2 = __webpack_require__(371);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _getPrototypeOf = __webpack_require__(20);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(18);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _dompurify = __webpack_require__(1032);

var _dompurify2 = _interopRequireDefault(_dompurify);

var _reactDom = __webpack_require__(26);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(1037);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Label = (_temp = _class = function (_React$Component) {
  (0, _inherits3.default)(Label, _React$Component);

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////


  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////
  function Label(props) {
    (0, _classCallCheck3.default)(this, Label);
    return (0, _possibleConstructorReturn3.default)(this, (Label.__proto__ || (0, _getPrototypeOf2.default)(Label)).call(this, props));
  }

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////


  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////


  (0, _createClass3.default)(Label, [{
    key: 'render',
    value: function render() {

      var classNames = ['label-container'].concat((0, _toConsumableArray3.default)(this.props.className.split(' ')));

      var style = {
        width: this.props.textAlign === 'center' ? '100%' : '',
        textAlign: this.props.textAlign
      };

      return _react2.default.createElement(
        'div',
        { className: classNames.join(' '),
          style: style },
        _react2.default.createElement(
          'p',
          null,
          _dompurify2.default.sanitize(this.props.text)
        )
      );
    }
  }]);
  return Label;
}(_react2.default.Component), _class.propTypes = {
  textAlign: _propTypes2.default.string,
  className: _propTypes2.default.string,
  text: _propTypes2.default.string }, _class.defaultProps = {
  textAlign: 'left',
  className: '',
  text: '' }, _temp);
exports.default = Label;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Label.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1037:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1023);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(37)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(1023, function() {
			var newContent = __webpack_require__(1023);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1040:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContentEditable = function (_React$Component) {
  _inherits(ContentEditable, _React$Component);

  function ContentEditable() {
    _classCallCheck(this, ContentEditable);

    var _this = _possibleConstructorReturn(this, (ContentEditable.__proto__ || Object.getPrototypeOf(ContentEditable)).call(this));

    _this.emitChange = _this.emitChange.bind(_this);
    return _this;
  }

  _createClass(ContentEditable, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          tagName = _props.tagName,
          html = _props.html,
          props = _objectWithoutProperties(_props, ['tagName', 'html']);

      return _react2.default.createElement(tagName || 'div', _extends({}, props, {
        ref: function ref(e) {
          return _this2.htmlEl = e;
        },
        onInput: this.emitChange,
        onBlur: this.props.onBlur || this.emitChange,
        contentEditable: !this.props.disabled,
        dangerouslySetInnerHTML: { __html: html }
      }), this.props.children);
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      // We need not rerender if the change of props simply reflects the user's
      // edits. Rerendering in this case would make the cursor/caret jump.
      return (
        // Rerender if there is no element yet... (somehow?)
        !this.htmlEl
        // ...or if html really changed... (programmatically, not by user edit)
        || nextProps.html !== this.htmlEl.innerHTML && nextProps.html !== this.props.html
        // ...or if editing is enabled or disabled.
        || this.props.disabled !== nextProps.disabled
        // ...or if className changed
        || this.props.className !== nextProps.className
      );
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.htmlEl && this.props.html !== this.htmlEl.innerHTML) {
        // Perhaps React (whose VDOM gets outdated because we often prevent
        // rerendering) did not update the DOM. So we update it manually now.
        this.htmlEl.innerHTML = this.props.html;
      }
    }
  }, {
    key: 'emitChange',
    value: function emitChange(evt) {
      if (!this.htmlEl) return;
      var html = this.htmlEl.innerHTML;
      if (this.props.onChange && html !== this.lastHtml) {
        evt.target = { value: html };
        this.props.onChange(evt);
      }
      this.lastHtml = html;
    }
  }]);

  return ContentEditable;
}(_react2.default.Component);

exports.default = ContentEditable;
module.exports = exports['default'];

/***/ }),

/***/ 1043:
/***/ (function(module, exports, __webpack_require__) {

var baseFor = __webpack_require__(377),
    keys = __webpack_require__(1038);

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

module.exports = baseForOwn;


/***/ }),

/***/ 1044:
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(1055),
    isFlattenable = __webpack_require__(1056);

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

module.exports = baseFlatten;


/***/ }),

/***/ 1049:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

var _TreeDelegate = __webpack_require__(1085);

var _TreeDelegate2 = _interopRequireDefault(_TreeDelegate);

var _TreeNode = __webpack_require__(1086);

var _TreeNode2 = _interopRequireDefault(_TreeNode);

var _TreeView = __webpack_require__(1087);

var _TreeView2 = _interopRequireDefault(_TreeView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
    TreeDelegate: _TreeDelegate2.default,
    TreeNode: _TreeNode2.default,
    TreeView: _TreeView2.default
};

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1053:
/***/ (function(module, exports, __webpack_require__) {

var baseFlatten = __webpack_require__(1044),
    baseOrderBy = __webpack_require__(1061),
    baseRest = __webpack_require__(380),
    isIterateeCall = __webpack_require__(382);

/**
 * Creates an array of elements, sorted in ascending order by the results of
 * running each element in a collection thru each iteratee. This method
 * performs a stable sort, that is, it preserves the original sort order of
 * equal elements. The iteratees are invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {...(Function|Function[])} [iteratees=[_.identity]]
 *  The iteratees to sort by.
 * @returns {Array} Returns the new sorted array.
 * @example
 *
 * var users = [
 *   { 'user': 'fred',   'age': 48 },
 *   { 'user': 'barney', 'age': 36 },
 *   { 'user': 'fred',   'age': 40 },
 *   { 'user': 'barney', 'age': 34 }
 * ];
 *
 * _.sortBy(users, [function(o) { return o.user; }]);
 * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
 *
 * _.sortBy(users, ['user', 'age']);
 * // => objects for [['barney', 34], ['barney', 36], ['fred', 40], ['fred', 48]]
 */
var sortBy = baseRest(function(collection, iteratees) {
  if (collection == null) {
    return [];
  }
  var length = iteratees.length;
  if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
    iteratees = [];
  } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
    iteratees = [iteratees[0]];
  }
  return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
});

module.exports = sortBy;


/***/ }),

/***/ 1056:
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(219),
    isArguments = __webpack_require__(220),
    isArray = __webpack_require__(217);

/** Built-in value references. */
var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

module.exports = isFlattenable;


/***/ }),

/***/ 1057:
/***/ (function(module, exports) {

module.exports = function() {
	throw new Error("define cannot be used indirect");
};


/***/ }),

/***/ 1059:
/***/ (function(module, exports, __webpack_require__) {

var baseForOwn = __webpack_require__(1043),
    createBaseEach = __webpack_require__(1065);

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

module.exports = baseEach;


/***/ }),

/***/ 1060:
/***/ (function(module, exports, __webpack_require__) {

var baseEach = __webpack_require__(1059),
    isArrayLike = __webpack_require__(133);

/**
 * The base implementation of `_.map` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function baseMap(collection, iteratee) {
  var index = -1,
      result = isArrayLike(collection) ? Array(collection.length) : [];

  baseEach(collection, function(value, key, collection) {
    result[++index] = iteratee(value, key, collection);
  });
  return result;
}

module.exports = baseMap;


/***/ }),

/***/ 1061:
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(1052),
    baseIteratee = __webpack_require__(1045),
    baseMap = __webpack_require__(1060),
    baseSortBy = __webpack_require__(1062),
    baseUnary = __webpack_require__(381),
    compareMultiple = __webpack_require__(1064),
    identity = __webpack_require__(221);

/**
 * The base implementation of `_.orderBy` without param guards.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
 * @param {string[]} orders The sort orders of `iteratees`.
 * @returns {Array} Returns the new sorted array.
 */
function baseOrderBy(collection, iteratees, orders) {
  var index = -1;
  iteratees = arrayMap(iteratees.length ? iteratees : [identity], baseUnary(baseIteratee));

  var result = baseMap(collection, function(value, key, collection) {
    var criteria = arrayMap(iteratees, function(iteratee) {
      return iteratee(value);
    });
    return { 'criteria': criteria, 'index': ++index, 'value': value };
  });

  return baseSortBy(result, function(object, other) {
    return compareMultiple(object, other, orders);
  });
}

module.exports = baseOrderBy;


/***/ }),

/***/ 1062:
/***/ (function(module, exports) {

/**
 * The base implementation of `_.sortBy` which uses `comparer` to define the
 * sort order of `array` and replaces criteria objects with their corresponding
 * values.
 *
 * @private
 * @param {Array} array The array to sort.
 * @param {Function} comparer The function to define sort order.
 * @returns {Array} Returns `array`.
 */
function baseSortBy(array, comparer) {
  var length = array.length;

  array.sort(comparer);
  while (length--) {
    array[length] = array[length].value;
  }
  return array;
}

module.exports = baseSortBy;


/***/ }),

/***/ 1063:
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(1042);

/**
 * Compares values to sort them in ascending order.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {number} Returns the sort order indicator for `value`.
 */
function compareAscending(value, other) {
  if (value !== other) {
    var valIsDefined = value !== undefined,
        valIsNull = value === null,
        valIsReflexive = value === value,
        valIsSymbol = isSymbol(value);

    var othIsDefined = other !== undefined,
        othIsNull = other === null,
        othIsReflexive = other === other,
        othIsSymbol = isSymbol(other);

    if ((!othIsNull && !othIsSymbol && !valIsSymbol && value > other) ||
        (valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol) ||
        (valIsNull && othIsDefined && othIsReflexive) ||
        (!valIsDefined && othIsReflexive) ||
        !valIsReflexive) {
      return 1;
    }
    if ((!valIsNull && !valIsSymbol && !othIsSymbol && value < other) ||
        (othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol) ||
        (othIsNull && valIsDefined && valIsReflexive) ||
        (!othIsDefined && valIsReflexive) ||
        !othIsReflexive) {
      return -1;
    }
  }
  return 0;
}

module.exports = compareAscending;


/***/ }),

/***/ 1064:
/***/ (function(module, exports, __webpack_require__) {

var compareAscending = __webpack_require__(1063);

/**
 * Used by `_.orderBy` to compare multiple properties of a value to another
 * and stable sort them.
 *
 * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
 * specify an order of "desc" for descending or "asc" for ascending sort order
 * of corresponding values.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {boolean[]|string[]} orders The order to sort by for each property.
 * @returns {number} Returns the sort order indicator for `object`.
 */
function compareMultiple(object, other, orders) {
  var index = -1,
      objCriteria = object.criteria,
      othCriteria = other.criteria,
      length = objCriteria.length,
      ordersLength = orders.length;

  while (++index < length) {
    var result = compareAscending(objCriteria[index], othCriteria[index]);
    if (result) {
      if (index >= ordersLength) {
        return result;
      }
      var order = orders[index];
      return result * (order == 'desc' ? -1 : 1);
    }
  }
  // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
  // that causes it, under certain circumstances, to provide the same value for
  // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
  // for more details.
  //
  // This also ensures a stable sort in V8 and other engines.
  // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
  return object.index - other.index;
}

module.exports = compareMultiple;


/***/ }),

/***/ 1065:
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(133);

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

module.exports = createBaseEach;


/***/ }),

/***/ 1066:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Const = __webpack_require__(1029);

var _Const2 = _interopRequireDefault(_Const);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  renderReactSortCaret: function renderReactSortCaret(order) {
    var orderClass = (0, _classnames2.default)('order', {
      'dropup': order === _Const2.default.SORT_ASC
    });
    return _react2.default.createElement(
      'span',
      { className: orderClass },
      _react2.default.createElement('span', { className: 'caret', style: { margin: '10px 5px' } })
    );
  },
  isFunction: function isFunction(obj) {
    return obj && typeof obj === 'function';
  },
  getScrollBarWidth: function getScrollBarWidth() {
    var inner = document.createElement('p');
    inner.style.width = '100%';
    inner.style.height = '200px';

    var outer = document.createElement('div');
    outer.style.position = 'absolute';
    outer.style.top = '0px';
    outer.style.left = '0px';
    outer.style.visibility = 'hidden';
    outer.style.width = '200px';
    outer.style.height = '150px';
    outer.style.overflow = 'hidden';
    outer.appendChild(inner);

    document.body.appendChild(outer);
    var w1 = inner.getBoundingClientRect().width;
    outer.style.overflow = 'scroll';
    var w2 = inner.getBoundingClientRect().width;

    if (w1 === w2) w2 = outer.clientWidth;

    document.body.removeChild(outer);

    return w1 - w2;
  },
  canUseDOM: function canUseDOM() {
    return typeof window !== 'undefined' && typeof window.document !== 'undefined';
  },


  // We calculate an offset here in order to properly fetch the indexed data,
  // despite the page start index not always being 1
  getNormalizedPage: function getNormalizedPage(pageStartIndex, page) {
    pageStartIndex = this.getFirstPage(pageStartIndex);
    if (page === undefined) page = pageStartIndex;
    var offset = Math.abs(_Const2.default.PAGE_START_INDEX - pageStartIndex);
    return page + offset;
  },
  getFirstPage: function getFirstPage(pageStartIndex) {
    return pageStartIndex !== undefined ? pageStartIndex : _Const2.default.PAGE_START_INDEX;
  },
  renderColGroup: function renderColGroup(columns, selectRow) {
    var expandColumnOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    var selectRowHeader = null;
    var expandRowHeader = null;
    var isSelectRowDefined = selectRow.mode === _Const2.default.ROW_SELECT_SINGLE || selectRow.mode === _Const2.default.ROW_SELECT_MULTI;
    if (isSelectRowDefined) {
      var style = {
        width: selectRow.columnWidth || '30px',
        minWidth: selectRow.columnWidth || '30px'
      };
      if (!selectRow.hideSelectColumn) {
        selectRowHeader = _react2.default.createElement('col', { key: 'select-col', style: style });
      }
    }
    if (expandColumnOptions.expandColumnVisible) {
      var _style = {
        width: expandColumnOptions.columnWidth || 30,
        minWidth: expandColumnOptions.columnWidth || 30
      };
      expandRowHeader = _react2.default.createElement('col', { key: 'expand-col', style: _style });
    }
    var theader = columns.map(function (column, i) {
      var style = {
        display: column.hidden ? 'none' : null
      };
      if (column.width) {
        var width = !isNaN(column.width) ? column.width + 'px' : column.width;
        style.width = width;
        /** add min-wdth to fix user assign column width
        not eq offsetWidth in large column table **/
        style.minWidth = width;
      }
      return _react2.default.createElement('col', { style: style, key: i, className: column.className });
    });

    return _react2.default.createElement(
      'colgroup',
      null,
      expandColumnOptions.expandColumnVisible && expandColumnOptions.expandColumnBeforeSelectColumn && expandRowHeader,
      selectRowHeader,
      expandColumnOptions.expandColumnVisible && !expandColumnOptions.expandColumnBeforeSelectColumn && expandRowHeader,
      theader
    );
  }
}; /* eslint react/display-name: 0 */

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/util.js');
}();

;

/***/ }),

/***/ 1074:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(36)();
// imports


// module
exports.push([module.i, ".menuItem > span {\n  pointer-events: none;\n  margin-left: -10px;\n  margin-right: 5px; }\n", ""]);

// exports


/***/ }),

/***/ 1085:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(20);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(18);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _EventsEmitter = __webpack_require__(372);

var _EventsEmitter2 = _interopRequireDefault(_EventsEmitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/////////////////////////////////////////////////////////////////////
//
//
/////////////////////////////////////////////////////////////////////
var TreeDelegate = function (_EventsEmitter$Compos) {
  (0, _inherits3.default)(TreeDelegate, _EventsEmitter$Compos);

  ///////////////////////////////////////////////////////////////////
  //
  //
  ///////////////////////////////////////////////////////////////////
  function TreeDelegate(container, contextMenu) {
    (0, _classCallCheck3.default)(this, TreeDelegate);

    var _this = (0, _possibleConstructorReturn3.default)(this, (TreeDelegate.__proto__ || (0, _getPrototypeOf2.default)(TreeDelegate)).call(this));

    _this.contextMenu = contextMenu;

    _this.container = container;

    _this.clickTimeout = 0;
    return _this;
  }

  ///////////////////////////////////////////////////////////////////
  //
  //
  ///////////////////////////////////////////////////////////////////


  (0, _createClass3.default)(TreeDelegate, [{
    key: 'getTreeNodeId',
    value: function getTreeNodeId(node) {

      return node.id;
    }

    ///////////////////////////////////////////////////////////////////
    //
    //
    ///////////////////////////////////////////////////////////////////

  }, {
    key: 'isTreeNodeGroup',
    value: function isTreeNodeGroup(node) {

      return node.group;
    }

    ///////////////////////////////////////////////////////////////////
    //
    //
    ///////////////////////////////////////////////////////////////////

  }, {
    key: 'onTreeNodeIconClick',
    value: function onTreeNodeIconClick(tree, node, event) {
      var _this2 = this;

      clearTimeout(this.clickTimeout);

      this.clickTimeout = setTimeout(function () {

        _this2.emit('node.iconClick', node);

        !tree.isCollapsed(node) ? node.collapse() : node.expand();
      }, 200);
    }

    ///////////////////////////////////////////////////////////////////
    //
    //
    ///////////////////////////////////////////////////////////////////

  }, {
    key: 'nodeClickSelector',
    value: function nodeClickSelector(event) {

      var selector = ['HEADER', 'LABEL'];

      return selector.indexOf(event.target.nodeName) > -1;
    }

    ///////////////////////////////////////////////////////////////////
    //
    //
    ///////////////////////////////////////////////////////////////////

  }, {
    key: 'onTreeNodeClick',
    value: function onTreeNodeClick(tree, node, event) {
      var _this3 = this;

      if (this.nodeClickSelector(event)) {

        clearTimeout(this.clickTimeout);

        this.clickTimeout = setTimeout(function () {

          _this3.emit('node.click', node);

          !tree.isCollapsed(node) ? node.collapse() : node.expand();
        }, 200);
      }
    }

    ///////////////////////////////////////////////////////////////////
    //
    //
    ///////////////////////////////////////////////////////////////////

  }, {
    key: 'onTreeNodeDoubleClick',
    value: function onTreeNodeDoubleClick(tree, node, event) {

      if (this.nodeClickSelector(event)) {

        clearTimeout(this.clickTimeout);

        this.emit('node.dblClick', node);
      }
    }

    ///////////////////////////////////////////////////////////////////
    //
    //
    ///////////////////////////////////////////////////////////////////

  }, {
    key: 'onTreeNodeRightClick',
    value: function onTreeNodeRightClick(tree, node, event) {

      event.stopPropagation();
      event.preventDefault();

      if (this.nodeClickSelector(event)) {

        this.contextMenu.show(event, node);
      }
    }

    ///////////////////////////////////////////////////////////////////
    //
    //
    ///////////////////////////////////////////////////////////////////

  }, {
    key: 'getTreeNodeLabel',
    value: function getTreeNodeLabel(node) {

      return node.name;
    }
  }]);
  return TreeDelegate;
}(_EventsEmitter2.default.Composer(Autodesk.Viewing.UI.TreeDelegate));

exports.default = TreeDelegate;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "TreeDelegate.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1086:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _assign = __webpack_require__(46);

var _assign2 = _interopRequireDefault(_assign);

var _getPrototypeOf = __webpack_require__(20);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(18);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _EventsEmitter2 = __webpack_require__(372);

var _EventsEmitter3 = _interopRequireDefault(_EventsEmitter2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/////////////////////////////////////////////////////////////////////
//
//
/////////////////////////////////////////////////////////////////////
var TreeNode = function (_EventsEmitter) {
  (0, _inherits3.default)(TreeNode, _EventsEmitter);

  /////////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////////
  function TreeNode(properties) {
    (0, _classCallCheck3.default)(this, TreeNode);

    var _this = (0, _possibleConstructorReturn3.default)(this, (TreeNode.__proto__ || (0, _getPrototypeOf2.default)(TreeNode)).call(this));

    (0, _assign2.default)(_this, properties);
    return _this;
  }

  /////////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////////


  (0, _createClass3.default)(TreeNode, [{
    key: 'destroy',
    value: function destroy() {}
  }]);
  return TreeNode;
}(_EventsEmitter3.default);

exports.default = TreeNode;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "TreeNode.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1087:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(20);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(18);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _EventsEmitter = __webpack_require__(372);

var _EventsEmitter2 = _interopRequireDefault(_EventsEmitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/////////////////////////////////////////////////////////////////////
//
//
/////////////////////////////////////////////////////////////////////
var TreeView = function (_EventsEmitter$Compos) {
  (0, _inherits3.default)(TreeView, _EventsEmitter$Compos);

  function TreeView() {
    (0, _classCallCheck3.default)(this, TreeView);
    return (0, _possibleConstructorReturn3.default)(this, (TreeView.__proto__ || (0, _getPrototypeOf2.default)(TreeView)).apply(this, arguments));
  }

  (0, _createClass3.default)(TreeView, [{
    key: "setInputHandlers_",


    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////
    value: function setInputHandlers_() {

      var tree = this;
      var rootElem = this.myRootContainer;

      var NODE_NOT_FOUND = null;

      var getNodeFromElement = function getNodeFromElement(eventTarget) {

        var ret = null;
        var found = false;

        do {
          if (!eventTarget || eventTarget === rootElem) {
            ret = null;
            found = true; // not found
          } else if (eventTarget.hasAttribute("lmv-nodeId")) {
            ret = eventTarget;
            found = true;
          } else {
            eventTarget = eventTarget.parentElement;
          }
        } while (!found);

        if (ret) {
          var nodeId = ret.getAttribute("lmv-nodeId");
          return tree.nodeIdToNode[nodeId] || NODE_NOT_FOUND;
        }
        return NODE_NOT_FOUND;
      };

      if (av.isTouchDevice()) {

        this.hammer = new Hammer.Manager(rootElem, {
          recognizers: [[Hammer.Tap, {
            event: 'doubletap',
            taps: 2,
            interval: 400,
            threshold: 6,
            posThreshold: 30
          }], [Hammer.Press, {
            event: 'press',
            time: 500
          }]],
          inputClass: Hammer.TouchInput
        });

        this.hammer.on("doubletap", function (event) {

          var node = getNodeFromElement(event.target);
          if (node === NODE_NOT_FOUND) return;
          tree.myDelegate.onTreeNodeDoubleClick(tree, node, event);
        });

        this.hammer.on('press', function (event) {

          var node = getNodeFromElement(event.target);
          if (node === NODE_NOT_FOUND) return;
          tree.myDelegate.onTreeNodeRightClick(tree, node, event);
        });
      }

      rootElem.addEventListener('click', function (event) {

        var node = getNodeFromElement(event.target);

        if (node === NODE_NOT_FOUND) return;

        tree.myDelegate.onTreeNodeClick(tree, node, event);

        if (!event.target.classList.contains('propertyLink')) {
          event.preventDefault();
        }
      }, false);

      rootElem.addEventListener('dblclick', function (event) {

        var node = getNodeFromElement(event.target);

        if (node === NODE_NOT_FOUND) return;

        tree.myDelegate.onTreeNodeDoubleClick(tree, node, event);

        event.stopPropagation();
        event.preventDefault();
      }, false);

      rootElem.addEventListener('contextmenu', function (event) {

        var node = getNodeFromElement(event.target);

        if (node === NODE_NOT_FOUND) return;

        tree.myDelegate.onTreeNodeRightClick(tree, node, event);

        event.stopPropagation();
        event.preventDefault();
      }, false);

      rootElem.addEventListener('mouseover', function (event) {

        var node = getNodeFromElement(event.target);

        if (node === NODE_NOT_FOUND) return;

        tree.myDelegate.onTreeNodeHover(tree, node, event);

        event.stopPropagation();
        event.preventDefault();
      }, false);

      rootElem.addEventListener('mouseout', function (event) {
        // When the mouse leaves the element,
        // set node to -1 (background), no highlight,
        var node = -1;

        tree.myDelegate.onTreeNodeHover(tree, node, event);

        event.stopPropagation();
        event.preventDefault();
      }, false);
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: "getNodeById",
    value: function getNodeById(nodeId) {

      return this.nodeIdToNode[nodeId];
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: "destroyNode",
    value: function destroyNode(nodeId) {

      if (this.nodeIdToNode[nodeId]) {

        delete this.nodeIdToNode[nodeId];

        this.nodeIdToNode[nodeId] = null;
      }

      if (this.nodeToElement[nodeId]) {

        this.nodeToElement[nodeId].remove();

        delete this.nodeToElement[nodeId];

        this.nodeToElement[nodeId] = null;
      }
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: "destroy",
    value: function destroy() {

      this.clear();

      this.myRootContainer.remove();
    }
  }]);
  return TreeView;
}(_EventsEmitter2.default.Composer(Autodesk.Viewing.UI.Tree));

exports.default = TreeView;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "TreeView.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1093:
/***/ (function(module, exports) {

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;


/***/ }),

/***/ 1094:
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }),

/***/ 1097:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(36)();
// imports


// module
exports.push([module.i, ".sk-chasing-dots {\n  width: 27px;\n  height: 27px;\n  position: relative;\n\n  -webkit-animation: sk-rotate 2.0s infinite linear;\n  animation: sk-rotate 2.0s infinite linear;\n}\n\n.sk-dot1, .sk-dot2 {\n  width: 60%;\n  height: 60%;\n  display: inline-block;\n  position: absolute;\n  top: 0;\n  background-color: #333;\n  border-radius: 100%;\n\n  -webkit-animation: sk-bounce 2.0s infinite ease-in-out;\n  animation: sk-bounce 2.0s infinite ease-in-out;\n}\n\n.sk-dot2 {\n  top: auto;\n  bottom: 0px;\n  -webkit-animation-delay: -1.0s;\n  animation-delay: -1.0s;\n}\n\n@-webkit-keyframes sk-rotate { 100% { -webkit-transform: rotate(360deg) }}\n@keyframes sk-rotate {\n  100% {\n    transform: rotate(360deg);\n    -webkit-transform: rotate(360deg);\n  }\n}\n\n@-webkit-keyframes sk-bounce {\n  0%, 100% { -webkit-transform: scale(0.0) }\n  50% { -webkit-transform: scale(1.0) }\n}\n\n@keyframes sk-bounce {\n  0%, 100% {\n    transform: scale(0.0);\n    -webkit-transform: scale(0.0);\n  } 50% {\n    transform: scale(1.0);\n    -webkit-transform: scale(1.0);\n  }\n}\n\n", ""]);

// exports


/***/ }),

/***/ 1098:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(36)();
// imports


// module
exports.push([module.i, ".sk-circle-wrapper {\n  width: 22px;\n  height: 22px;\n  position: relative;\n}\n\n.sk-circle {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n\n.sk-circle:before {\n  content: '';\n  display: block;\n  margin: 0 auto;\n  width: 20%;\n  height: 20%;\n  background-color: #333;\n\n  border-radius: 100%;\n  -webkit-animation: sk-bouncedelay 1.2s infinite ease-in-out;\n  animation: sk-bouncedelay 1.2s infinite ease-in-out;\n  /* Prevent first frame from flickering when animation starts */\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n\n.sk-circle2  { -webkit-transform: rotate(30deg);  transform: rotate(30deg)  }\n.sk-circle3  { -webkit-transform: rotate(60deg);  transform: rotate(60deg)  }\n.sk-circle4  { -webkit-transform: rotate(90deg);  transform: rotate(90deg)  }\n.sk-circle5  { -webkit-transform: rotate(120deg); transform: rotate(120deg) }\n.sk-circle6  { -webkit-transform: rotate(150deg); transform: rotate(150deg) }\n.sk-circle7  { -webkit-transform: rotate(180deg); transform: rotate(180deg) }\n.sk-circle8  { -webkit-transform: rotate(210deg); transform: rotate(210deg) }\n.sk-circle9  { -webkit-transform: rotate(240deg); transform: rotate(240deg) }\n.sk-circle10 { -webkit-transform: rotate(270deg); transform: rotate(270deg) }\n.sk-circle11 { -webkit-transform: rotate(300deg); transform: rotate(300deg) }\n.sk-circle12 { -webkit-transform: rotate(330deg); transform: rotate(330deg) }\n\n.sk-circle2:before  { -webkit-animation-delay: -1.1s; animation-delay: -1.1s }\n.sk-circle3:before  { -webkit-animation-delay: -1.0s; animation-delay: -1.0s }\n.sk-circle4:before  { -webkit-animation-delay: -0.9s; animation-delay: -0.9s }\n.sk-circle5:before  { -webkit-animation-delay: -0.8s; animation-delay: -0.8s }\n.sk-circle6:before  { -webkit-animation-delay: -0.7s; animation-delay: -0.7s }\n.sk-circle7:before  { -webkit-animation-delay: -0.6s; animation-delay: -0.6s }\n.sk-circle8:before  { -webkit-animation-delay: -0.5s; animation-delay: -0.5s }\n.sk-circle9:before  { -webkit-animation-delay: -0.4s; animation-delay: -0.4s }\n.sk-circle10:before { -webkit-animation-delay: -0.3s; animation-delay: -0.3s }\n.sk-circle11:before { -webkit-animation-delay: -0.2s; animation-delay: -0.2s }\n.sk-circle12:before { -webkit-animation-delay: -0.1s; animation-delay: -0.1s }\n\n@-webkit-keyframes sk-bouncedelay {\n  0%, 80%, 100% { -webkit-transform: scale(0.0) }\n  40% { -webkit-transform: scale(1.0) }\n}\n\n@keyframes sk-bouncedelay {\n  0%, 80%, 100% {\n    -webkit-transform: scale(0.0);\n    transform: scale(0.0);\n  } 40% {\n    -webkit-transform: scale(1.0);\n    transform: scale(1.0);\n  }\n}\n\n", ""]);

// exports


/***/ }),

/***/ 1099:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(36)();
// imports


// module
exports.push([module.i, ".sk-cube-grid {\n  width:27px;\n  height:27px;\n}\n\n.sk-cube {\n  width:33%;\n  height:33%;\n  background:#333;\n  float:left;\n  -webkit-animation: sk-scaleDelay 1.3s infinite ease-in-out;\n  animation: sk-scaleDelay 1.3s infinite ease-in-out;\n}\n\n/*\n * Spinner positions\n * 1 2 3\n * 4 5 6\n * 7 8 9\n */\n\n.sk-spinner .sk-cube:nth-child(1) { -webkit-animation-delay: 0.2s; animation-delay: 0.2s  }\n.sk-spinner .sk-cube:nth-child(2) { -webkit-animation-delay: 0.3s; animation-delay: 0.3s  }\n.sk-spinner .sk-cube:nth-child(3) { -webkit-animation-delay: 0.4s; animation-delay: 0.4s  }\n.sk-spinner .sk-cube:nth-child(4) { -webkit-animation-delay: 0.1s; animation-delay: 0.1s  }\n.sk-spinner .sk-cube:nth-child(5) { -webkit-animation-delay: 0.2s; animation-delay: 0.2s  }\n.sk-spinner .sk-cube:nth-child(6) { -webkit-animation-delay: 0.3s; animation-delay: 0.3s  }\n.sk-spinner .sk-cube:nth-child(7) { -webkit-animation-delay: 0.0s; animation-delay: 0.0s  }\n.sk-spinner .sk-cube:nth-child(8) { -webkit-animation-delay: 0.1s; animation-delay: 0.1s  }\n.sk-spinner .sk-cube:nth-child(9) { -webkit-animation-delay: 0.2s; animation-delay: 0.2s  }\n\n@-webkit-keyframes sk-scaleDelay {\n  0%, 70%, 100% { -webkit-transform:scale3D(1.0, 1.0, 1.0) }\n  35%           { -webkit-transform:scale3D(0.0, 0.0, 1.0) }\n}\n\n@keyframes sk-scaleDelay {\n  0%, 70%, 100% { -webkit-transform:scale3D(1.0, 1.0, 1.0); transform:scale3D(1.0, 1.0, 1.0) }\n  35%           { -webkit-transform:scale3D(1.0, 1.0, 1.0); transform:scale3D(0.0, 0.0, 1.0) }\n}\n\n", ""]);

// exports


/***/ }),

/***/ 1100:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(36)();
// imports


// module
exports.push([module.i, ".sk-double-bounce {\n  width: 27px;\n  height: 27px;\n\n  position: relative;\n}\n\n.sk-double-bounce1, .sk-double-bounce2 {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  background-color: #333;\n  opacity: 0.6;\n  position: absolute;\n  top: 0;\n  left: 0;\n\n  -webkit-animation: sk-bounce 2.0s infinite ease-in-out;\n  animation: sk-bounce 2.0s infinite ease-in-out;\n}\n\n.sk-double-bounce2 {\n  -webkit-animation-delay: -1.0s;\n  animation-delay: -1.0s;\n}\n\n@-webkit-keyframes sk-bounce {\n  0%, 100% { -webkit-transform: scale(0.0) }\n  50% { -webkit-transform: scale(1.0) }\n}\n\n@keyframes sk-bounce {\n  0%, 100% {\n    transform: scale(0.0);\n    -webkit-transform: scale(0.0);\n  } 50% {\n    transform: scale(1.0);\n    -webkit-transform: scale(1.0);\n  }\n}\n\n", ""]);

// exports


/***/ }),

/***/ 1101:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(36)();
// imports


// module
exports.push([module.i, "@-webkit-keyframes sk-fade-in {\n  0% {\n      opacity: 0;\n  }\n  50% {\n      opacity: 0;\n  }\n  100% {\n      opacity: 1;\n  }\n}\n\n@keyframes sk-fade-in {\n  0% {\n      opacity: 0;\n  }\n  50% {\n      opacity: 0;\n  }\n  100% {\n      opacity: 1;\n  }\n}\n\n.sk-fade-in {\n  -webkit-animation: sk-fade-in 2s;\n  -moz-animation: sk-fade-in 2s;\n  -o-animation: sk-fade-in 2s;\n  -ms-animation: sk-fade-in 2s;\n}\n", ""]);

// exports


/***/ }),

/***/ 1102:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(36)();
// imports


// module
exports.push([module.i, ".sk-folding-cube {\n  width: 27px;\n  height: 27px;\n  position: relative;\n  -webkit-transform: rotateZ(45deg);\n          transform: rotateZ(45deg);\n}\n\n.sk-folding-cube .sk-cube {\n  float: left;\n  width: 50%;\n  height: 50%;\n  position: relative;\n  -webkit-transform: scale(1.1);\n          transform: scale(1.1); \n}\n.sk-folding-cube .sk-cube:before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #333;\n  -webkit-animation: sk-foldCubeAngle 2.4s infinite linear both;\n          animation: sk-foldCubeAngle 2.4s infinite linear both;\n  -webkit-transform-origin: 100% 100%;\n          transform-origin: 100% 100%;\n}\n.sk-folding-cube .sk-cube2 {\n  -webkit-transform: scale(1.1) rotateZ(90deg);\n          transform: scale(1.1) rotateZ(90deg);\n}\n.sk-folding-cube .sk-cube3 {\n  -webkit-transform: scale(1.1) rotateZ(180deg);\n          transform: scale(1.1) rotateZ(180deg);\n}\n.sk-folding-cube .sk-cube4 {\n  -webkit-transform: scale(1.1) rotateZ(270deg);\n          transform: scale(1.1) rotateZ(270deg);\n}\n.sk-folding-cube .sk-cube2:before {\n  -webkit-animation-delay: 0.3s;\n          animation-delay: 0.3s;\n}\n.sk-folding-cube .sk-cube3:before {\n  -webkit-animation-delay: 0.6s;\n          animation-delay: 0.6s; \n}\n.sk-folding-cube .sk-cube4:before {\n  -webkit-animation-delay: 0.9s;\n          animation-delay: 0.9s;\n}\n@-webkit-keyframes sk-foldCubeAngle {\n  0%, 10% {\n    -webkit-transform: perspective(140px) rotateX(-180deg);\n            transform: perspective(140px) rotateX(-180deg);\n    opacity: 0; \n  } 25%, 75% {\n    -webkit-transform: perspective(140px) rotateX(0deg);\n            transform: perspective(140px) rotateX(0deg);\n    opacity: 1; \n  } 90%, 100% {\n    -webkit-transform: perspective(140px) rotateY(180deg);\n            transform: perspective(140px) rotateY(180deg);\n    opacity: 0; \n  } \n}\n\n@keyframes sk-foldCubeAngle {\n  0%, 10% {\n    -webkit-transform: perspective(140px) rotateX(-180deg);\n            transform: perspective(140px) rotateX(-180deg);\n    opacity: 0; \n  } 25%, 75% {\n    -webkit-transform: perspective(140px) rotateX(0deg);\n            transform: perspective(140px) rotateX(0deg);\n    opacity: 1; \n  } 90%, 100% {\n    -webkit-transform: perspective(140px) rotateY(180deg);\n            transform: perspective(140px) rotateY(180deg);\n    opacity: 0; \n  }\n}\n", ""]);

// exports


/***/ }),

/***/ 1103:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(36)();
// imports


// module
exports.push([module.i, ".sk-pulse {\n  width: 27px;\n  height: 27px;\n  background-color: #333;\n\n  border-radius: 100%;\n  -webkit-animation: sk-scaleout 1.0s infinite ease-in-out;\n  animation: sk-scaleout 1.0s infinite ease-in-out;\n}\n\n@-webkit-keyframes sk-scaleout {\n  0% { -webkit-transform: scale(0.0) }\n  100% {\n    -webkit-transform: scale(1.0);\n    opacity: 0;\n  }\n}\n\n@keyframes sk-scaleout {\n  0% {\n    transform: scale(0.0);\n    -webkit-transform: scale(0.0);\n  } 100% {\n    transform: scale(1.0);\n    -webkit-transform: scale(1.0);\n    opacity: 0;\n  }\n}\n\n", ""]);

// exports


/***/ }),

/***/ 1104:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(36)();
// imports


// module
exports.push([module.i, ".sk-rotating-plane {\n  width: 27px;\n  height: 27px;\n  background-color: #333;\n\n  -webkit-animation: sk-rotateplane 1.2s infinite ease-in-out;\n  animation: sk-rotateplane 1.2s infinite ease-in-out;\n}\n\n@-webkit-keyframes sk-rotateplane {\n  0% { -webkit-transform: perspective(120px) }\n  50% { -webkit-transform: perspective(120px) rotateY(180deg) }\n  100% { -webkit-transform: perspective(120px) rotateY(180deg)  rotateX(180deg) }\n}\n\n@keyframes sk-rotateplane {\n  0% {\n    transform: perspective(120px) rotateX(0deg) rotateY(0deg);\n    -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg);\n  } 50% {\n    transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);\n    -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);\n  } 100% {\n    transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n    -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n  }\n}\n\n", ""]);

// exports


/***/ }),

/***/ 1105:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(36)();
// imports


// module
exports.push([module.i, ".sk-three-bounce > div {\n  width: 18px;\n  height: 18px;\n  background-color: #333;\n\n  border-radius: 100%;\n  display: inline-block;\n  -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out;\n  animation: sk-bouncedelay 1.4s infinite ease-in-out;\n  /* Prevent first frame from flickering when animation starts */\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n\n.sk-three-bounce .sk-bounce1 {\n  -webkit-animation-delay: -0.32s;\n  animation-delay: -0.32s;\n}\n\n.sk-three-bounce .sk-bounce2 {\n  -webkit-animation-delay: -0.16s;\n  animation-delay: -0.16s;\n}\n\n@-webkit-keyframes sk-bouncedelay {\n  0%, 80%, 100% { -webkit-transform: scale(0.0) }\n  40% { -webkit-transform: scale(1.0) }\n}\n\n@keyframes sk-bouncedelay {\n  0%, 80%, 100% {\n    transform: scale(0.0);\n    -webkit-transform: scale(0.0);\n  } 40% {\n    transform: scale(1.0);\n    -webkit-transform: scale(1.0);\n  }\n}\n", ""]);

// exports


/***/ }),

/***/ 1106:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(36)();
// imports


// module
exports.push([module.i, ".sk-wandering-cubes {\n  width: 27px;\n  height: 27px;\n  position: relative;\n}\n\n.sk-cube1, .sk-cube2 {\n  background-color: #333;\n  width: 10px;\n  height: 10px;\n  position: absolute;\n  top: 0;\n  left: 0;\n\n  -webkit-animation: sk-cubemove 1.8s infinite ease-in-out;\n  animation: sk-cubemove 1.8s infinite ease-in-out;\n}\n\n.sk-cube2 {\n  -webkit-animation-delay: -0.9s;\n  animation-delay: -0.9s;\n}\n\n@-webkit-keyframes sk-cubemove {\n  25% { -webkit-transform: translateX(22px) rotate(-90deg) scale(0.5) }\n  50% { -webkit-transform: translateX(22px) translateY(22px) rotate(-180deg) }\n  75% { -webkit-transform: translateX(0px) translateY(22px) rotate(-270deg) scale(0.5) }\n  100% { -webkit-transform: rotate(-360deg) }\n}\n\n@keyframes sk-cubemove {\n  25% {\n    transform: translateX(42px) rotate(-90deg) scale(0.5);\n    -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5);\n  } 50% {\n    /* Hack to make FF rotate in the right direction */\n    transform: translateX(42px) translateY(42px) rotate(-179deg);\n    -webkit-transform: translateX(42px) translateY(42px) rotate(-179deg);\n  } 50.1% {\n    transform: translateX(42px) translateY(42px) rotate(-180deg);\n    -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg);\n  } 75% {\n    transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);\n    -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);\n  } 100% {\n    transform: rotate(-360deg);\n    -webkit-transform: rotate(-360deg);\n  }\n}\n\n", ""]);

// exports


/***/ }),

/***/ 1107:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(36)();
// imports


// module
exports.push([module.i, ".sk-wave {\n  width: 50px;\n  height: 27px;\n}\n\n.sk-wave > div {\n  background-color: #333;\n  height: 100%;\n  width: 6px;\n  display: inline-block;\n\n  -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;\n  animation: sk-stretchdelay 1.2s infinite ease-in-out;\n}\n\n.sk-wave .sk-rect2 {\n  -webkit-animation-delay: -1.1s;\n  animation-delay: -1.1s;\n}\n\n.sk-wave .sk-rect3 {\n  -webkit-animation-delay: -1.0s;\n  animation-delay: -1.0s;\n}\n\n.sk-wave .sk-rect4 {\n  -webkit-animation-delay: -0.9s;\n  animation-delay: -0.9s;\n}\n\n.sk-wave .sk-rect5 {\n  -webkit-animation-delay: -0.8s;\n  animation-delay: -0.8s;\n}\n\n@-webkit-keyframes sk-stretchdelay {\n  0%, 40%, 100% { -webkit-transform: scaleY(0.4) }\n  20% { -webkit-transform: scaleY(1.0) }\n}\n\n@keyframes sk-stretchdelay {\n  0%, 40%, 100% {\n    transform: scaleY(0.4);\n    -webkit-transform: scaleY(0.4);\n  } 20% {\n    transform: scaleY(1.0);\n    -webkit-transform: scaleY(1.0);\n  }\n}\n\n", ""]);

// exports


/***/ }),

/***/ 1108:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(36)();
// imports


// module
exports.push([module.i, ".sk-wordpress {\n  background: #333;\n  width: 27px;\n  height: 27px;\n  display: inline-block;\n  border-radius: 27px;\n  position: relative;\n  -webkit-animation: sk-inner-circle 1s linear infinite;\n  animation: sk-inner-circle 1s linear infinite;\n}\n\n.sk-inner-circle {\n  display: block;\n  background: #fff;\n  width: 8px;\n  height: 8px;\n  position: absolute;\n  border-radius: 8px;\n  top: 5px;\n  left: 5px;\n}\n\n@-webkit-keyframes sk-inner-circle {\n  0% { -webkit-transform: rotate(0); }\n  100% { -webkit-transform: rotate(360deg); }\n}\n\n@keyframes sk-inner-circle {\n  0% { transform: rotate(0); -webkit-transform:rotate(0); }\n  100% { transform: rotate(360deg); -webkit-transform:rotate(360deg); }\n}\n\n", ""]);

// exports


/***/ }),

/***/ 1151:
/***/ (function(module, exports, __webpack_require__) {

var baseFlatten = __webpack_require__(1044);

/**
 * Flattens `array` a single level deep.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flatten([1, [2, [3, [4]], 5]]);
 * // => [1, 2, [3, [4]], 5]
 */
function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten(array, 1) : [];
}

module.exports = flatten;


/***/ }),

/***/ 1177:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(36)();
// imports


// module
exports.push([module.i, ".add-meta-property {\n  width: 100%; }\n  .add-meta-property .row {\n    min-height: 38px;\n    margin: 0; }\n  .add-meta-property .row > div {\n    width: 100%;\n    float: left; }\n  .add-meta-property .row > .dropdown {\n    width: 130px; }\n  .add-meta-property .type-dropdown {\n    width: 124px; }\n  .add-meta-property .input {\n    border: 1px solid #d2d2d2;\n    white-space: nowrap;\n    overflow-x: scroll;\n    border-radius: 4px;\n    background: white;\n    text-align: left;\n    height: 34px;\n    padding: 5px; }\n  .add-meta-property .meta-category.input {\n    width: calc(100% - 130px); }\n  .add-meta-property .meta-name.input {\n    width: 100%; }\n  .add-meta-property .meta-value.input {\n    width: 100%; }\n  .add-meta-property .drop-target {\n    border: 1px solid #d2d2d2;\n    padding: 10px 10px 0 0;\n    border-radius: 4px;\n    cursor: pointer; }\n    .add-meta-property .drop-target p {\n      color: #909090; }\n    .add-meta-property .drop-target li {\n      text-align: left; }\n", ""]);

// exports


/***/ }),

/***/ 1178:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(36)();
// imports


// module
exports.push([module.i, ".metatree-container {\n  overflow-x: hidden;\n  overflow-y: scroll;\n  text-align: left;\n  height: 100%; }\n  .metatree-container .treeview group {\n    width: 100%; }\n  .metatree-container .treeview lmvheader {\n    transition-property: background, border;\n    transition-timing-function: ease;\n    transition-duration: 1.5s;\n    transition-delay: 0.0s;\n    background: rgba(245, 245, 245, 0.5);\n    margin-bottom: -4px;\n    border: none;\n    height: 30px; }\n  .metatree-container .treeview lmvheader.root {\n    width: calc(100% - 2px); }\n  .metatree-container .treeview lmvheader.category {\n    width: calc(100% - 2px); }\n  .metatree-container .treeview lmvheader.property {\n    width: calc(100% - 25px); }\n  .metatree-container .treeview lmvheader:hover {\n    background: rgba(0, 105, 245, 0.35); }\n  .metatree-container .treeview group > lmvheader.root {\n    background-color: #d8d8d8 !important; }\n  .metatree-container .treeview group > lmvheader.category {\n    background-color: #e6e6e6 !important;\n    padding: 6px; }\n  .metatree-container .treeview group > lmvheader > icon {\n    height: 20px;\n    float: left; }\n  .metatree-container .treeview lmvheader.root .treenode-container {\n    width: calc(100% - 22px);\n    overflow: hidden;\n    float: left; }\n  .metatree-container .treeview lmvheader.category .treenode-container {\n    width: calc(100% - 46px);\n    pointer-events: none;\n    overflow: hidden;\n    float: left; }\n  .metatree-container .treenode {\n    float: left; }\n  .metatree-container .treeview lmvheader.property {\n    padding: 0px; }\n  .metatree-container .treeview lmvheader.property .treenode {\n    width: 100%; }\n  .metatree-container .treeview lmvheader.property .treenode .separator {\n    background: white;\n    height: 30px;\n    float: left;\n    width: 1px; }\n  .metatree-container .treeview lmvheader.property .treenode .meta-value, .metatree-container .treeview lmvheader.property .treenode .meta-name {\n    padding: 6px;\n    width: 49%; }\n    .metatree-container .treeview lmvheader.property .treenode .meta-value p, .metatree-container .treeview lmvheader.property .treenode .meta-name p {\n      pointer-events: none; }\n  .metatree-container .treeview lmvheader.property .treenode .meta-link, .metatree-container .treeview lmvheader.property .treenode .meta-file {\n    position: relative;\n    overflow: hidden;\n    font-size: 100%;\n    color: #343434;\n    height: 100%;\n    float: left; }\n  .metatree-container .treeview lmvheader:hover.property .treenode .meta-value.editable {\n    width: calc(50% - 50px); }\n  .metatree-container .treeview lmvheader.property .treenode span {\n    transition-timing-function: ease;\n    transition-property: color;\n    transition-duration: 1.0s;\n    transition-delay: 0.0s;\n    position: relative;\n    margin: 0 8px 0 0;\n    font-size: 20px;\n    color: #fafafa;\n    display: none;\n    top: 4px; }\n  .metatree-container .treeview lmvheader.property .treenode span.fa-edit {\n    position: relative;\n    top: 6px; }\n  .metatree-container .treeview lmvheader:hover.property .treenode span {\n    color: rgba(47, 47, 47, 0.6);\n    display: inline; }\n  .metatree-container .treeview lmvheader:hover.property .treenode span:hover {\n    color: #FF9800; }\n  .metatree-container .treenode .switch-container {\n    border: 1px solid #9c9c9c;\n    border-radius: 12px;\n    margin: 0 8px 0 2px;\n    float: left; }\n", ""]);

// exports


/***/ }),

/***/ 1250:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, $) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(20);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(18);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

__webpack_require__(1268);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ContextMenu = function (_Autodesk$Viewing$Pri) {
  (0, _inherits3.default)(ContextMenu, _Autodesk$Viewing$Pri);

  function ContextMenu(opts) {
    (0, _classCallCheck3.default)(this, ContextMenu);
    return (0, _possibleConstructorReturn3.default)(this, (ContextMenu.__proto__ || (0, _getPrototypeOf2.default)(ContextMenu)).call(this, opts));
  }

  /////////////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////////////


  (0, _createClass3.default)(ContextMenu, [{
    key: "show",
    value: function show(event, menu) {

      var viewport = this.viewer.container.getBoundingClientRect();

      // Normalize Hammer events
      if (Array.isArray(event.changedPointers) && event.changedPointers.length > 0) {
        event.clientX = event.changedPointers[0].clientX;
        event.clientY = event.changedPointers[0].clientY;
      }

      var x = event.clientX - viewport.left;
      var y = event.clientY - viewport.top;

      if (!this.open) {

        var self = this;

        this.showMenu(menu, x, y);
        this.open = true;
        this.hideEventListener = function (event) {
          if (event.target.className !== "menuItem") {
            self.hide(event);
          }
        };

        this.isTouch = event.type === "press";

        document.body.addEventListener(this.isTouch ? "touchstart" : "mousedown", this.hideEventListener, true);
      }
    }

    /////////////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////////////

  }, {
    key: "showMenu",
    value: function showMenu(menu, x, y) {

      var container = document.createElement('div'),
          menuItem,
          submenus = [];

      container.className = 'menu';
      this.viewer.container.appendChild(container);
      this.menus.push(container);

      for (var i = 0; i < menu.length; ++i) {

        var defn = menu[i],
            target = defn.target;

        menuItem = this.createMenuItem(container, defn);

        if (typeof target === 'function') {
          this.addCallbackToMenuItem(menuItem, target);
        } else if (Array.isArray(target)) {
          submenus.push({ menuItem: menuItem, target: target });
        } else {
          console.warn("Invalid context menu option:", title, target);
        }
      }

      var rect = container.getBoundingClientRect(),
          containerWidth = rect.width,
          containerHeight = rect.height,
          viewerRect = this.viewer.container.getBoundingClientRect(),
          viewerWidth = viewerRect.width,
          viewerHeight = viewerRect.height,
          shiftLeft = isTouchDevice() && !this.viewer.navigation.getUseLeftHandedInput();

      if (shiftLeft) {
        x -= containerWidth;
      }

      if (x < 0) {
        x = 0;
      }
      if (viewerWidth < x + containerWidth) {
        x = viewerWidth - containerWidth;
        if (x < 0) {
          x = 0;
        }
      }

      if (y < 0) {
        y = 0;
      }
      if (viewerHeight < y + containerHeight) {
        y = viewerHeight - containerHeight;
        if (y < 0) {
          y = 0;
        }
      }

      container.style.top = Math.round(y) + "px";
      container.style.left = Math.round(x) + "px";

      for (i = 0; i < submenus.length; ++i) {
        var submenu = submenus[i];

        menuItem = submenu.menuItem;
        rect = menuItem.getBoundingClientRect();
        x = Math.round((shiftLeft ? rect.left : rect.right) - viewerRect.left);
        y = Math.round(rect.top - viewerRect.top);

        this.addSubmenuCallbackToMenuItem(menuItem, submenu.target, x, y);
      }
    }

    /////////////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////////////

  }, {
    key: "createMenuItem",
    value: function createMenuItem(parentItem, menuItemDef) {

      var menuItemId = this.guid();

      var text = menuItemDef.title;

      $(parentItem).append("\n      <div id=\"" + menuItemId + "\" class=\"menuItem\" data-i18n=" + text + ">\n        <span class=\"" + (menuItemDef.className || '') + "\">\n        </span>\n        " + Autodesk.Viewing.i18n.translate(text) + "\n      </div>\n    ");

      return document.getElementById(menuItemId);
    }

    /////////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////////

  }, {
    key: "hide",
    value: function hide() {

      if (this.open) {
        for (var index = 0; index < this.menus.length; ++index) {
          if (this.menus[index]) {
            this.menus[index].parentNode.removeChild(this.menus[index]);
          }
        }
        this.menus = [];
        this.open = false;

        document.body.removeEventListener(this.isTouch ? "touchstart" : "mousedown", this.hideEventListener);

        this.isTouch = false;
        return true;
      }
      return false;
    }

    /////////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////////

  }, {
    key: "guid",
    value: function guid() {
      var format = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'xxxxxxxx';


      var d = new Date().getTime();

      var guid = format.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == 'x' ? r : r & 0x7 | 0x8).toString(16);
      });

      return guid;
    }
  }]);
  return ContextMenu;
}(Autodesk.Viewing.Private.ContextMenu); /////////////////////////////////////////////////////////////
// ContextMenu
//
/////////////////////////////////////////////////////////////


exports.default = ContextMenu;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "ContextMenu.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module), __webpack_require__(31)))

/***/ }),

/***/ 1251:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ContextMenu = __webpack_require__(1250);

var _ContextMenu2 = _interopRequireDefault(_ContextMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _ContextMenu2.default;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1268:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1074);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(37)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(1074, function() {
			var newContent = __webpack_require__(1074);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1276:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.jQuery = exports.animation = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactAddonsUpdate = __webpack_require__(1289);

var _reactAddonsUpdate2 = _interopRequireDefault(_reactAddonsUpdate);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _animationMixin = __webpack_require__(1357);

var _animationMixin2 = _interopRequireDefault(_animationMixin);

var _jQueryMixin = __webpack_require__(1358);

var _jQueryMixin2 = _interopRequireDefault(_jQueryMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function noop() {}

var ToastMessageSpec = {
  displayName: "ToastMessage",

  getDefaultProps: function getDefaultProps() {
    var iconClassNames = {
      error: "toast-error",
      info: "toast-info",
      success: "toast-success",
      warning: "toast-warning"
    };

    return {
      className: "toast",
      iconClassNames: iconClassNames,
      titleClassName: "toast-title",
      messageClassName: "toast-message",
      tapToDismiss: true,
      closeButton: false
    };
  },
  handleOnClick: function handleOnClick(event) {
    this.props.handleOnClick(event);
    if (this.props.tapToDismiss) {
      this.hideToast(true);
    }
  },
  _handle_close_button_click: function _handle_close_button_click(event) {
    event.stopPropagation();
    this.hideToast(true);
  },
  _handle_remove: function _handle_remove() {
    this.props.handleRemove(this.props.toastId);
  },
  _render_close_button: function _render_close_button() {
    return this.props.closeButton ? _react2.default.createElement("button", {
      className: "toast-close-button", role: "button",
      onClick: this._handle_close_button_click,
      dangerouslySetInnerHTML: { __html: "&times;" }
    }) : false;
  },
  _render_title_element: function _render_title_element() {
    return this.props.title ? _react2.default.createElement(
      "div",
      { className: this.props.titleClassName },
      this.props.title
    ) : false;
  },
  _render_message_element: function _render_message_element() {
    return this.props.message ? _react2.default.createElement(
      "div",
      { className: this.props.messageClassName },
      this.props.message
    ) : false;
  },
  render: function render() {
    var iconClassName = this.props.iconClassName || this.props.iconClassNames[this.props.type];

    return _react2.default.createElement(
      "div",
      {
        className: (0, _classnames2.default)(this.props.className, iconClassName),
        style: this.props.style,
        onClick: this.handleOnClick,
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave
      },
      this._render_close_button(),
      this._render_title_element(),
      this._render_message_element()
    );
  }
};

var animation = exports.animation = _react2.default.createClass((0, _reactAddonsUpdate2.default)(ToastMessageSpec, {
  displayName: { $set: "ToastMessage.animation" },
  mixins: { $set: [_animationMixin2.default] }
}));

var jQuery = exports.jQuery = _react2.default.createClass((0, _reactAddonsUpdate2.default)(ToastMessageSpec, {
  displayName: { $set: "ToastMessage.jQuery" },
  mixins: { $set: [_jQueryMixin2.default] }
}));

/*
 * assign default noop functions
 */
ToastMessageSpec.handleMouseEnter = noop;
ToastMessageSpec.handleMouseLeave = noop;
ToastMessageSpec.hideToast = noop;

var ToastMessage = _react2.default.createClass(ToastMessageSpec);

ToastMessage.animation = animation;
ToastMessage.jQuery = jQuery;

exports.default = ToastMessage;

/***/ }),

/***/ 1283:
/***/ (function(module, exports) {

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array == null ? 0 : array.length;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

module.exports = arrayReduce;


/***/ }),

/***/ 1285:
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(1133),
    getSymbolsIn = __webpack_require__(1286),
    keysIn = __webpack_require__(231);

/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return baseGetAllKeys(object, keysIn, getSymbolsIn);
}

module.exports = getAllKeysIn;


/***/ }),

/***/ 1286:
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(1055),
    getPrototype = __webpack_require__(224),
    getSymbols = __webpack_require__(1114),
    stubArray = __webpack_require__(1138);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols(object));
    object = getPrototype(object);
  }
  return result;
};

module.exports = getSymbolsIn;


/***/ }),

/***/ 1289:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1545);

/***/ }),

/***/ 1290:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var editor = function editor(editable, attr, format, editorClass, defaultValue, ignoreEditable) {
  if (editable === true || editable === false && ignoreEditable || typeof editable === 'string') {
    // simple declare
    var type = editable ? 'text' : editable;
    return _react2.default.createElement('input', _extends({}, attr, { type: type, defaultValue: defaultValue,
      className: (editorClass || '') + ' form-control editor edit-text' }));
  } else if (!editable) {
    var _type = editable ? 'text' : editable;
    return _react2.default.createElement('input', _extends({}, attr, { type: _type, defaultValue: defaultValue,
      disabled: 'disabled',
      className: (editorClass || '') + ' form-control editor edit-text' }));
  } else if (editable && (editable.type === undefined || editable.type === null || editable.type.trim() === '')) {
    var _type2 = editable ? 'text' : editable;
    return _react2.default.createElement('input', _extends({}, attr, { type: _type2, defaultValue: defaultValue,
      className: (editorClass || '') + ' form-control editor edit-text' }));
  } else if (editable.type) {
    // standard declare
    // put style if exist
    editable.style && (attr.style = editable.style);
    // put class if exist
    attr.className = (editorClass || '') + ' form-control editor edit-' + editable.type + (editable.className ? ' ' + editable.className : '');

    if (editable.type === 'select') {
      // process select input
      var options = [];
      var _editable$options = editable.options,
          values = _editable$options.values,
          textKey = _editable$options.textKey,
          valueKey = _editable$options.valueKey;

      if (Array.isArray(values)) {
        // only can use arrray data for options
        var text = void 0;
        var value = void 0;
        options = values.map(function (option, i) {
          if ((typeof option === 'undefined' ? 'undefined' : _typeof(option)) === 'object') {
            text = textKey ? option[textKey] : option.text;
            value = valueKey ? option[valueKey] : option.value;
          } else {
            text = format ? format(option) : option;
            value = option;
          }
          return _react2.default.createElement(
            'option',
            { key: 'option' + i, value: value },
            text
          );
        });
      }
      return _react2.default.createElement(
        'select',
        _extends({}, attr, { defaultValue: defaultValue }),
        options
      );
    } else if (editable.type === 'textarea') {
      // process textarea input
      // put other if exist
      editable.cols && (attr.cols = editable.cols);
      editable.rows && (attr.rows = editable.rows);
      var saveBtn = void 0;
      var keyUpHandler = attr.onKeyDown;
      if (keyUpHandler) {
        attr.onKeyDown = function (e) {
          if (e.keyCode !== 13) {
            // not Pressed ENTER
            keyUpHandler(e);
          }
        };
        saveBtn = _react2.default.createElement(
          'button',
          {
            className: 'btn btn-info btn-xs textarea-save-btn',
            onClick: keyUpHandler },
          'save'
        );
      }
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('textarea', _extends({}, attr, { defaultValue: defaultValue })),
        saveBtn
      );
    } else if (editable.type === 'checkbox') {
      var _values = 'true:false';
      if (editable.options && editable.options.values) {
        // values = editable.options.values.split(':');
        _values = editable.options.values;
      }
      attr.className = attr.className.replace('form-control', '');
      attr.className += ' checkbox pull-right';

      var checked = defaultValue && defaultValue.toString() === _values.split(':')[0] ? true : false;

      return _react2.default.createElement('input', _extends({}, attr, { type: 'checkbox',
        value: _values, defaultChecked: checked }));
    } else if (editable.type === 'datetime') {
      return _react2.default.createElement('input', _extends({}, attr, { type: 'datetime-local', defaultValue: defaultValue }));
    } else {
      // process other input type. as password,url,email...
      return _react2.default.createElement('input', _extends({}, attr, { type: editable.type, defaultValue: defaultValue }));
    }
  }
  // default return for other case of editable
  return _react2.default.createElement('input', _extends({}, attr, { type: 'text',
    className: (editorClass || '') + ' form-control editor edit-text' }));
};

var _default = editor;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(editor, 'editor', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/Editor.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/Editor.js');
}();

;

/***/ }),

/***/ 1291:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactToastr = __webpack_require__(1359);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ToastrMessageFactory = _react2.default.createFactory(_reactToastr.ToastMessage.animation);

var Notification = function (_Component) {
  _inherits(Notification, _Component);

  function Notification() {
    _classCallCheck(this, Notification);

    return _possibleConstructorReturn(this, (Notification.__proto__ || Object.getPrototypeOf(Notification)).apply(this, arguments));
  }

  _createClass(Notification, [{
    key: 'notice',

    // allow type is success,info,warning,error
    value: function notice(type, msg, title) {
      this.refs.toastr[type](msg, title, {
        mode: 'single',
        timeOut: 5000,
        extendedTimeOut: 1000,
        showAnimation: 'animated  bounceIn',
        hideAnimation: 'animated bounceOut'
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_reactToastr.ToastContainer, { ref: 'toastr',
        toastMessageFactory: ToastrMessageFactory,
        id: 'toast-container',
        className: 'toast-top-right' });
    }
  }]);

  return Notification;
}(_react.Component);

var _default = Notification;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ToastrMessageFactory, 'ToastrMessageFactory', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/Notification.js');

  __REACT_HOT_LOADER__.register(Notification, 'Notification', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/Notification.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/Notification.js');
}();

;

/***/ }),

/***/ 1292:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _Const = __webpack_require__(1029);

var _Const2 = _interopRequireDefault(_Const);

var _util = __webpack_require__(1066);

var _util2 = _interopRequireDefault(_util);

var _Date = __webpack_require__(1460);

var _Date2 = _interopRequireDefault(_Date);

var _Text = __webpack_require__(1464);

var _Text2 = _interopRequireDefault(_Text);

var _Regex = __webpack_require__(1462);

var _Regex2 = _interopRequireDefault(_Regex);

var _Select = __webpack_require__(1463);

var _Select2 = _interopRequireDefault(_Select);

var _Number = __webpack_require__(1461);

var _Number2 = _interopRequireDefault(_Number);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint default-case: 0 */
/* eslint guard-for-in: 0 */


var TableHeaderColumn = function (_Component) {
  _inherits(TableHeaderColumn, _Component);

  function TableHeaderColumn(props) {
    _classCallCheck(this, TableHeaderColumn);

    var _this = _possibleConstructorReturn(this, (TableHeaderColumn.__proto__ || Object.getPrototypeOf(TableHeaderColumn)).call(this, props));

    _this.handleColumnClick = function () {
      return _this.__handleColumnClick__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleFilter = _this.handleFilter.bind(_this);
    return _this;
  }

  _createClass(TableHeaderColumn, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.reset) {
        this.cleanFiltered();
      }
    }
  }, {
    key: '__handleColumnClick__REACT_HOT_LOADER__',
    value: function __handleColumnClick__REACT_HOT_LOADER__() {
      if (this.props.isOnlyHead || !this.props.dataSort) return;
      var order = this.props.sort;

      if (!order && this.props.defaultASC) order = _Const2.default.SORT_ASC;else order = this.props.sort === _Const2.default.SORT_DESC ? _Const2.default.SORT_ASC : _Const2.default.SORT_DESC;
      this.props.onSort(order, this.props.dataField);
    }
  }, {
    key: 'handleFilter',
    value: function handleFilter(value, type) {
      var filter = this.props.filter;

      filter.emitter.handleFilter(this.props.dataField, value, type, filter);
    }
  }, {
    key: 'getFilters',
    value: function getFilters() {
      var _props = this.props,
          headerText = _props.headerText,
          children = _props.children;

      switch (this.props.filter.type) {
        case _Const2.default.FILTER_TYPE.TEXT:
          {
            return _react2.default.createElement(_Text2.default, _extends({ ref: 'textFilter' }, this.props.filter, {
              columnName: headerText || children, filterHandler: this.handleFilter }));
          }
        case _Const2.default.FILTER_TYPE.REGEX:
          {
            return _react2.default.createElement(_Regex2.default, _extends({ ref: 'regexFilter' }, this.props.filter, {
              columnName: headerText || children, filterHandler: this.handleFilter }));
          }
        case _Const2.default.FILTER_TYPE.SELECT:
          {
            return _react2.default.createElement(_Select2.default, _extends({ ref: 'selectFilter' }, this.props.filter, {
              columnName: headerText || children, filterHandler: this.handleFilter }));
          }
        case _Const2.default.FILTER_TYPE.NUMBER:
          {
            return _react2.default.createElement(_Number2.default, _extends({ ref: 'numberFilter' }, this.props.filter, {
              columnName: headerText || children, filterHandler: this.handleFilter }));
          }
        case _Const2.default.FILTER_TYPE.DATE:
          {
            return _react2.default.createElement(_Date2.default, _extends({ ref: 'dateFilter' }, this.props.filter, {
              columnName: headerText || children, filterHandler: this.handleFilter }));
          }
        case _Const2.default.FILTER_TYPE.CUSTOM:
          {
            var elm = this.props.filter.getElement(this.handleFilter, this.props.filter.customFilterParameters);

            return _react2.default.cloneElement(elm, { ref: 'customFilter' });
          }
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.refs['header-col'].setAttribute('data-field', this.props.dataField);
    }
  }, {
    key: 'render',
    value: function render() {
      var defaultCaret = void 0;
      var sortCaret = void 0;
      var _props2 = this.props,
          headerText = _props2.headerText,
          dataAlign = _props2.dataAlign,
          dataField = _props2.dataField,
          headerAlign = _props2.headerAlign,
          headerTitle = _props2.headerTitle,
          hidden = _props2.hidden,
          sort = _props2.sort,
          dataSort = _props2.dataSort,
          sortIndicator = _props2.sortIndicator,
          children = _props2.children,
          caretRender = _props2.caretRender,
          className = _props2.className,
          isOnlyHead = _props2.isOnlyHead,
          style = _props2.thStyle;

      var thStyle = _extends({
        textAlign: headerAlign || dataAlign,
        display: hidden ? 'none' : null
      }, style);
      if (!isOnlyHead) {
        if (sortIndicator) {
          defaultCaret = !dataSort ? null : _react2.default.createElement(
            'span',
            { className: 'order' },
            _react2.default.createElement(
              'span',
              { className: 'dropdown' },
              _react2.default.createElement('span', { className: 'caret', style: { margin: '10px 0 10px 5px', color: '#ccc' } })
            ),
            _react2.default.createElement(
              'span',
              { className: 'dropup' },
              _react2.default.createElement('span', { className: 'caret', style: { margin: '10px 0', color: '#ccc' } })
            )
          );
        }
        sortCaret = sort ? _util2.default.renderReactSortCaret(sort) : defaultCaret;
        if (caretRender) {
          sortCaret = caretRender(sort, dataField);
        }
      }

      var classes = (0, _classnames2.default)(_util2.default.isFunction(className) ? className() : className, !isOnlyHead && dataSort ? 'sort-column' : '');

      var attr = {};
      if (headerTitle) {
        if (typeof children === 'string' && !headerText) {
          attr.title = children;
        } else {
          attr.title = headerText;
        }
      }
      return _react2.default.createElement(
        'th',
        _extends({ ref: 'header-col',
          className: classes,
          style: thStyle,
          onClick: this.handleColumnClick,
          rowSpan: this.props.rowSpan,
          colSpan: this.props.colSpan,
          'data-is-only-head': this.props.isOnlyHead
        }, attr),
        children,
        sortCaret,
        _react2.default.createElement(
          'div',
          { onClick: function onClick(e) {
              return e.stopPropagation();
            } },
          this.props.filter && !isOnlyHead ? this.getFilters() : null
        )
      );
    }
  }, {
    key: 'cleanFiltered',
    value: function cleanFiltered() {
      if (!this.props.filter) return;

      switch (this.props.filter.type) {
        case _Const2.default.FILTER_TYPE.TEXT:
          {
            this.refs.textFilter.cleanFiltered();
            break;
          }
        case _Const2.default.FILTER_TYPE.REGEX:
          {
            this.refs.regexFilter.cleanFiltered();
            break;
          }
        case _Const2.default.FILTER_TYPE.SELECT:
          {
            this.refs.selectFilter.cleanFiltered();
            break;
          }
        case _Const2.default.FILTER_TYPE.NUMBER:
          {
            this.refs.numberFilter.cleanFiltered();
            break;
          }
        case _Const2.default.FILTER_TYPE.DATE:
          {
            this.refs.dateFilter.cleanFiltered();
            break;
          }
        case _Const2.default.FILTER_TYPE.CUSTOM:
          {
            this.refs.customFilter.cleanFiltered();
            break;
          }
      }
    }
  }, {
    key: 'applyFilter',
    value: function applyFilter(val) {
      if (!this.props.filter) return;
      switch (this.props.filter.type) {
        case _Const2.default.FILTER_TYPE.TEXT:
          {
            this.refs.textFilter.applyFilter(val);
            break;
          }
        case _Const2.default.FILTER_TYPE.REGEX:
          {
            this.refs.regexFilter.applyFilter(val);
            break;
          }
        case _Const2.default.FILTER_TYPE.SELECT:
          {
            this.refs.selectFilter.applyFilter(val);
            break;
          }
        case _Const2.default.FILTER_TYPE.NUMBER:
          {
            this.refs.numberFilter.applyFilter(val);
            break;
          }
        case _Const2.default.FILTER_TYPE.DATE:
          {
            this.refs.dateFilter.applyFilter(val);
            break;
          }
      }
    }
  }]);

  return TableHeaderColumn;
}(_react.Component);

var filterTypeArray = [];
for (var key in _Const2.default.FILTER_TYPE) {
  filterTypeArray.push(_Const2.default.FILTER_TYPE[key]);
}

TableHeaderColumn.propTypes = {
  dataField: _react.PropTypes.string,
  dataAlign: _react.PropTypes.string,
  headerAlign: _react.PropTypes.string,
  headerTitle: _react.PropTypes.bool,
  headerText: _react.PropTypes.string,
  dataSort: _react.PropTypes.bool,
  onSort: _react.PropTypes.func,
  dataFormat: _react.PropTypes.func,
  csvFormat: _react.PropTypes.func,
  csvHeader: _react.PropTypes.string,
  isKey: _react.PropTypes.bool,
  editable: _react.PropTypes.any,
  hidden: _react.PropTypes.bool,
  hiddenOnInsert: _react.PropTypes.bool,
  searchable: _react.PropTypes.bool,
  className: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.func]),
  width: _react.PropTypes.string,
  sortFunc: _react.PropTypes.func,
  sortFuncExtraData: _react.PropTypes.any,
  columnClassName: _react.PropTypes.any,
  editColumnClassName: _react.PropTypes.any,
  invalidEditColumnClassName: _react.PropTypes.any,
  columnTitle: _react.PropTypes.bool,
  filterFormatted: _react.PropTypes.bool,
  filterValue: _react.PropTypes.func,
  sort: _react.PropTypes.string,
  caretRender: _react.PropTypes.func,
  formatExtraData: _react.PropTypes.any,
  csvFormatExtraData: _react.PropTypes.any,
  filter: _react.PropTypes.shape({
    type: _react.PropTypes.oneOf(filterTypeArray),
    delay: _react.PropTypes.number,
    options: _react.PropTypes.oneOfType([_react.PropTypes.object, // for SelectFilter
    _react.PropTypes.arrayOf(_react.PropTypes.number) // for NumberFilter
    ]),
    numberComparators: _react.PropTypes.arrayOf(_react.PropTypes.string),
    emitter: _react.PropTypes.object,
    placeholder: _react.PropTypes.string,
    getElement: _react.PropTypes.func,
    customFilterParameters: _react.PropTypes.object,
    condition: _react.PropTypes.oneOf([_Const2.default.FILTER_COND_EQ, _Const2.default.FILTER_COND_LIKE])
  }),
  sortIndicator: _react.PropTypes.bool,
  export: _react.PropTypes.bool,
  expandable: _react.PropTypes.bool,
  tdAttr: _react.PropTypes.object,
  tdStyle: _react.PropTypes.object,
  thStyle: _react.PropTypes.object,
  keyValidator: _react.PropTypes.bool,
  defaultASC: _react.PropTypes.bool
};

TableHeaderColumn.defaultProps = {
  dataAlign: 'left',
  headerAlign: undefined,
  headerTitle: true,
  dataSort: false,
  dataFormat: undefined,
  csvFormat: undefined,
  csvHeader: undefined,
  isKey: false,
  editable: true,
  onSort: undefined,
  hidden: false,
  hiddenOnInsert: false,
  searchable: true,
  className: '',
  columnTitle: false,
  width: null,
  sortFunc: undefined,
  columnClassName: '',
  editColumnClassName: '',
  invalidEditColumnClassName: '',
  filterFormatted: false,
  filterValue: undefined,
  sort: undefined,
  formatExtraData: undefined,
  sortFuncExtraData: undefined,
  filter: undefined,
  sortIndicator: true,
  expandable: true,
  tdAttr: undefined,
  tdStyle: undefined,
  thStyle: undefined,
  keyValidator: false,
  defaultASC: false
};

var _default = TableHeaderColumn;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(TableHeaderColumn, 'TableHeaderColumn', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/TableHeaderColumn.js');

  __REACT_HOT_LOADER__.register(filterTypeArray, 'filterTypeArray', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/TableHeaderColumn.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/TableHeaderColumn.js');
}();

;

/***/ }),

/***/ 1293:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var sizePerPageDefaultClass = 'react-bs-table-sizePerPage-dropdown';

var SizePerPageDropDown = function (_Component) {
  _inherits(SizePerPageDropDown, _Component);

  function SizePerPageDropDown() {
    _classCallCheck(this, SizePerPageDropDown);

    return _possibleConstructorReturn(this, (SizePerPageDropDown.__proto__ || Object.getPrototypeOf(SizePerPageDropDown)).apply(this, arguments));
  }

  _createClass(SizePerPageDropDown, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          open = _props.open,
          hidden = _props.hidden,
          onClick = _props.onClick,
          options = _props.options,
          className = _props.className,
          variation = _props.variation,
          btnContextual = _props.btnContextual,
          currSizePerPage = _props.currSizePerPage;


      var openClass = open ? 'open' : '';
      var dropDownStyle = { visibility: hidden ? 'hidden' : 'visible' };

      return _react2.default.createElement(
        'span',
        { style: dropDownStyle,
          className: variation + ' ' + openClass + ' ' + className + ' ' + sizePerPageDefaultClass },
        _react2.default.createElement(
          'button',
          { className: 'btn ' + btnContextual + ' dropdown-toggle',
            id: 'pageDropDown', 'data-toggle': 'dropdown',
            'aria-expanded': open,
            onClick: onClick },
          currSizePerPage,
          _react2.default.createElement(
            'span',
            null,
            ' ',
            _react2.default.createElement('span', { className: 'caret' })
          )
        ),
        _react2.default.createElement(
          'ul',
          { className: 'dropdown-menu', role: 'menu', 'aria-labelledby': 'pageDropDown' },
          options
        )
      );
    }
  }]);

  return SizePerPageDropDown;
}(_react.Component);

SizePerPageDropDown.propTypes = {
  open: _react.PropTypes.bool,
  hidden: _react.PropTypes.bool,
  btnContextual: _react.PropTypes.string,
  currSizePerPage: _react.PropTypes.string,
  options: _react.PropTypes.array,
  variation: _react.PropTypes.oneOf(['dropdown', 'dropup']),
  className: _react.PropTypes.string,
  onClick: _react.PropTypes.func
};
SizePerPageDropDown.defaultProps = {
  open: false,
  hidden: false,
  btnContextual: 'btn-default',
  variation: 'dropdown',
  className: ''
};

var _default = SizePerPageDropDown;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(sizePerPageDefaultClass, 'sizePerPageDefaultClass', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/pagination/SizePerPageDropDown.js');

  __REACT_HOT_LOADER__.register(SizePerPageDropDown, 'SizePerPageDropDown', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/pagination/SizePerPageDropDown.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/pagination/SizePerPageDropDown.js');
}();

;

/***/ }),

/***/ 1294:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var clearBtnDefaultClass = 'react-bs-table-search-clear-btn';

var ClearSearchButton = function (_Component) {
  _inherits(ClearSearchButton, _Component);

  function ClearSearchButton() {
    _classCallCheck(this, ClearSearchButton);

    return _possibleConstructorReturn(this, (ClearSearchButton.__proto__ || Object.getPrototypeOf(ClearSearchButton)).apply(this, arguments));
  }

  _createClass(ClearSearchButton, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          btnContextual = _props.btnContextual,
          className = _props.className,
          onClick = _props.onClick,
          btnText = _props.btnText,
          children = _props.children,
          rest = _objectWithoutProperties(_props, ['btnContextual', 'className', 'onClick', 'btnText', 'children']);

      var content = children || _react2.default.createElement(
        'span',
        null,
        btnText
      );
      return _react2.default.createElement(
        'button',
        _extends({ ref: 'btn',
          className: 'btn ' + btnContextual + ' ' + className + ' ' + clearBtnDefaultClass,
          type: 'button',
          onClick: onClick
        }, rest),
        content
      );
    }
  }]);

  return ClearSearchButton;
}(_react.Component);

ClearSearchButton.propTypes = {
  btnContextual: _react.PropTypes.string,
  className: _react.PropTypes.string,
  btnText: _react.PropTypes.string,
  onClick: _react.PropTypes.func
};
ClearSearchButton.defaultProps = {
  btnContextual: 'btn-default',
  className: '',
  btnText: 'Clear',
  onClick: undefined
};

var _default = ClearSearchButton;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(clearBtnDefaultClass, 'clearBtnDefaultClass', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/toolbar/ClearSearchButton.js');

  __REACT_HOT_LOADER__.register(ClearSearchButton, 'ClearSearchButton', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/toolbar/ClearSearchButton.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/toolbar/ClearSearchButton.js');
}();

;

/***/ }),

/***/ 1295:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Const = __webpack_require__(1029);

var _Const2 = _interopRequireDefault(_Const);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var deleteBtnDefaultClass = 'react-bs-table-del-btn';

var DeleteButton = function (_Component) {
  _inherits(DeleteButton, _Component);

  function DeleteButton() {
    _classCallCheck(this, DeleteButton);

    return _possibleConstructorReturn(this, (DeleteButton.__proto__ || Object.getPrototypeOf(DeleteButton)).apply(this, arguments));
  }

  _createClass(DeleteButton, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          btnContextual = _props.btnContextual,
          className = _props.className,
          onClick = _props.onClick,
          btnGlyphicon = _props.btnGlyphicon,
          btnText = _props.btnText,
          children = _props.children,
          rest = _objectWithoutProperties(_props, ['btnContextual', 'className', 'onClick', 'btnGlyphicon', 'btnText', 'children']);

      var content = children || _react2.default.createElement(
        'span',
        null,
        _react2.default.createElement('i', { className: 'glyphicon ' + btnGlyphicon }),
        ' ',
        btnText
      );
      return _react2.default.createElement(
        'button',
        _extends({ type: 'button',
          className: 'btn ' + btnContextual + ' ' + deleteBtnDefaultClass + ' ' + className,
          onClick: onClick
        }, rest),
        content
      );
    }
  }]);

  return DeleteButton;
}(_react.Component);

DeleteButton.propTypes = {
  btnText: _react.PropTypes.string,
  btnContextual: _react.PropTypes.string,
  className: _react.PropTypes.string,
  onClick: _react.PropTypes.func,
  btnGlyphicon: _react.PropTypes.string
};
DeleteButton.defaultProps = {
  btnText: _Const2.default.DELETE_BTN_TEXT,
  btnContextual: 'btn-warning',
  className: '',
  onClick: undefined,
  btnGlyphicon: 'glyphicon-trash'
};

var _default = DeleteButton;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(deleteBtnDefaultClass, 'deleteBtnDefaultClass', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/toolbar/DeleteButton.js');

  __REACT_HOT_LOADER__.register(DeleteButton, 'DeleteButton', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/toolbar/DeleteButton.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/toolbar/DeleteButton.js');
}();

;

/***/ }),

/***/ 1296:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Const = __webpack_require__(1029);

var _Const2 = _interopRequireDefault(_Const);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var exportCsvBtnDefaultClass = 'react-bs-table-csv-btn';

var ExportCSVButton = function (_Component) {
  _inherits(ExportCSVButton, _Component);

  function ExportCSVButton() {
    _classCallCheck(this, ExportCSVButton);

    return _possibleConstructorReturn(this, (ExportCSVButton.__proto__ || Object.getPrototypeOf(ExportCSVButton)).apply(this, arguments));
  }

  _createClass(ExportCSVButton, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          btnContextual = _props.btnContextual,
          className = _props.className,
          onClick = _props.onClick,
          btnGlyphicon = _props.btnGlyphicon,
          btnText = _props.btnText,
          children = _props.children,
          rest = _objectWithoutProperties(_props, ['btnContextual', 'className', 'onClick', 'btnGlyphicon', 'btnText', 'children']);

      var content = children || _react2.default.createElement(
        'span',
        null,
        _react2.default.createElement('i', { className: 'glyphicon ' + btnGlyphicon }),
        ' ',
        btnText
      );
      return _react2.default.createElement(
        'button',
        _extends({ type: 'button',
          className: 'btn ' + btnContextual + ' ' + exportCsvBtnDefaultClass + ' ' + className + ' hidden-print',
          onClick: onClick
        }, rest),
        content
      );
    }
  }]);

  return ExportCSVButton;
}(_react.Component);

ExportCSVButton.propTypes = {
  btnText: _react.PropTypes.string,
  btnContextual: _react.PropTypes.string,
  className: _react.PropTypes.string,
  onClick: _react.PropTypes.func,
  btnGlyphicon: _react.PropTypes.string
};
ExportCSVButton.defaultProps = {
  btnText: _Const2.default.EXPORT_CSV_TEXT,
  btnContextual: 'btn-success',
  className: '',
  onClick: undefined,
  btnGlyphicon: 'glyphicon-export'
};

var _default = ExportCSVButton;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(exportCsvBtnDefaultClass, 'exportCsvBtnDefaultClass', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/toolbar/ExportCSVButton.js');

  __REACT_HOT_LOADER__.register(ExportCSVButton, 'ExportCSVButton', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/toolbar/ExportCSVButton.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/toolbar/ExportCSVButton.js');
}();

;

/***/ }),

/***/ 1297:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Const = __webpack_require__(1029);

var _Const2 = _interopRequireDefault(_Const);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var insertBtnDefaultClass = 'react-bs-table-add-btn';

var InsertButton = function (_Component) {
  _inherits(InsertButton, _Component);

  function InsertButton() {
    _classCallCheck(this, InsertButton);

    return _possibleConstructorReturn(this, (InsertButton.__proto__ || Object.getPrototypeOf(InsertButton)).apply(this, arguments));
  }

  _createClass(InsertButton, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          btnContextual = _props.btnContextual,
          className = _props.className,
          onClick = _props.onClick,
          btnGlyphicon = _props.btnGlyphicon,
          btnText = _props.btnText,
          children = _props.children,
          rest = _objectWithoutProperties(_props, ['btnContextual', 'className', 'onClick', 'btnGlyphicon', 'btnText', 'children']);

      var content = children || _react2.default.createElement(
        'span',
        null,
        _react2.default.createElement('i', { className: 'glyphicon ' + btnGlyphicon }),
        btnText
      );
      return _react2.default.createElement(
        'button',
        _extends({ type: 'button',
          className: 'btn ' + btnContextual + ' ' + insertBtnDefaultClass + ' ' + className,
          onClick: onClick
        }, rest),
        content
      );
    }
  }]);

  return InsertButton;
}(_react.Component);

InsertButton.propTypes = {
  btnText: _react.PropTypes.string,
  btnContextual: _react.PropTypes.string,
  className: _react.PropTypes.string,
  onClick: _react.PropTypes.func,
  btnGlyphicon: _react.PropTypes.string
};
InsertButton.defaultProps = {
  btnText: _Const2.default.INSERT_BTN_TEXT,
  btnContextual: 'btn-info',
  className: '',
  onClick: undefined,
  btnGlyphicon: 'glyphicon-plus'
};

var _default = InsertButton;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(insertBtnDefaultClass, 'insertBtnDefaultClass', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/toolbar/InsertButton.js');

  __REACT_HOT_LOADER__.register(InsertButton, 'InsertButton', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/toolbar/InsertButton.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/toolbar/InsertButton.js');
}();

;

/***/ }),

/***/ 1298:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Editor = __webpack_require__(1290);

var _Editor2 = _interopRequireDefault(_Editor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint react/display-name: 0 */


var InsertModalBody = function (_Component) {
  _inherits(InsertModalBody, _Component);

  function InsertModalBody() {
    _classCallCheck(this, InsertModalBody);

    return _possibleConstructorReturn(this, (InsertModalBody.__proto__ || Object.getPrototypeOf(InsertModalBody)).apply(this, arguments));
  }

  _createClass(InsertModalBody, [{
    key: 'getFieldValue',
    value: function getFieldValue() {
      var _this2 = this;

      var newRow = {};
      this.props.columns.forEach(function (column, i) {
        var inputVal = void 0;
        if (column.autoValue) {
          // when you want same auto generate value and not allow edit, example ID field
          var time = new Date().getTime();
          inputVal = typeof column.autoValue === 'function' ? column.autoValue() : 'autovalue-' + time;
        } else if (column.hiddenOnInsert || !column.field) {
          inputVal = '';
        } else {
          var dom = _this2.refs[column.field + i];
          inputVal = dom.value;

          if (column.editable && column.editable.type === 'checkbox') {
            var values = inputVal.split(':');
            inputVal = dom.checked ? values[0] : values[1];
          } else if (column.customInsertEditor) {
            inputVal = inputVal || dom.getFieldValue();
          }
        }
        newRow[column.field] = inputVal;
      }, this);
      return newRow;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          columns = _props.columns,
          validateState = _props.validateState,
          ignoreEditable = _props.ignoreEditable;

      return _react2.default.createElement(
        'div',
        { className: 'modal-body' },
        columns.map(function (column, i) {
          var editable = column.editable,
              format = column.format,
              field = column.field,
              name = column.name,
              autoValue = column.autoValue,
              hiddenOnInsert = column.hiddenOnInsert,
              customInsertEditor = column.customInsertEditor;

          var attr = {
            ref: field + i,
            placeholder: editable.placeholder ? editable.placeholder : name
          };
          var fieldElement = void 0;
          var defaultValue = editable.defaultValue || undefined;
          if (customInsertEditor) {
            var getElement = customInsertEditor.getElement;

            fieldElement = getElement(column, attr, 'form-control', ignoreEditable, defaultValue);
          }

          // fieldElement = false, means to use default editor when enable custom editor
          // Becasuse some users want to have default editor based on some condition.
          if (!customInsertEditor || fieldElement === false) {
            fieldElement = (0, _Editor2.default)(editable, attr, format, '', defaultValue, ignoreEditable);
          }

          if (autoValue || hiddenOnInsert || !column.field) {
            // when you want same auto generate value
            // and not allow edit, for example ID field
            return null;
          }
          var error = validateState[field] ? _react2.default.createElement(
            'span',
            { className: 'help-block bg-danger' },
            validateState[field]
          ) : null;
          return _react2.default.createElement(
            'div',
            { className: 'form-group', key: field },
            _react2.default.createElement(
              'label',
              null,
              name
            ),
            fieldElement,
            error
          );
        })
      );
    }
  }]);

  return InsertModalBody;
}(_react.Component);

InsertModalBody.propTypes = {
  columns: _react.PropTypes.array,
  validateState: _react.PropTypes.object,
  ignoreEditable: _react.PropTypes.bool
};

InsertModalBody.defaultProps = {
  validateState: {},
  ignoreEditable: false
};

var _default = InsertModalBody;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(InsertModalBody, 'InsertModalBody', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/toolbar/InsertModalBody.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/toolbar/InsertModalBody.js');
}();

;

/***/ }),

/***/ 1299:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Const = __webpack_require__(1029);

var _Const2 = _interopRequireDefault(_Const);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InsertModalFooter = function (_Component) {
  _inherits(InsertModalFooter, _Component);

  function InsertModalFooter() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, InsertModalFooter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = InsertModalFooter.__proto__ || Object.getPrototypeOf(InsertModalFooter)).call.apply(_ref, [this].concat(args))), _this), _this.handleCloseBtnClick = function () {
      var _this2;

      return (_this2 = _this).__handleCloseBtnClick__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _this.handleSaveBtnClick = function () {
      var _this3;

      return (_this3 = _this).__handleSaveBtnClick__REACT_HOT_LOADER__.apply(_this3, arguments);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(InsertModalFooter, [{
    key: '__handleCloseBtnClick__REACT_HOT_LOADER__',
    value: function __handleCloseBtnClick__REACT_HOT_LOADER__(e) {
      var _props = this.props,
          beforeClose = _props.beforeClose,
          onModalClose = _props.onModalClose;

      beforeClose && beforeClose(e);
      onModalClose();
    }
  }, {
    key: '__handleSaveBtnClick__REACT_HOT_LOADER__',
    value: function __handleSaveBtnClick__REACT_HOT_LOADER__(e) {
      var _props2 = this.props,
          beforeSave = _props2.beforeSave,
          onSave = _props2.onSave;

      beforeSave && beforeSave(e);
      onSave();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          className = _props3.className,
          saveBtnText = _props3.saveBtnText,
          closeBtnText = _props3.closeBtnText,
          closeBtnContextual = _props3.closeBtnContextual,
          saveBtnContextual = _props3.saveBtnContextual,
          closeBtnClass = _props3.closeBtnClass,
          saveBtnClass = _props3.saveBtnClass,
          children = _props3.children;


      var content = children || _react2.default.createElement(
        'span',
        null,
        _react2.default.createElement(
          'button',
          {
            type: 'button',
            className: 'btn ' + closeBtnContextual + ' ' + closeBtnClass,
            onClick: this.handleCloseBtnClick },
          closeBtnText
        ),
        _react2.default.createElement(
          'button',
          {
            type: 'button',
            className: 'btn ' + saveBtnContextual + ' ' + saveBtnClass,
            onClick: this.handleSaveBtnClick },
          saveBtnText
        )
      );

      return _react2.default.createElement(
        'div',
        { className: 'modal-footer ' + className },
        content
      );
    }
  }]);

  return InsertModalFooter;
}(_react.Component);

InsertModalFooter.propTypes = {
  className: _react.PropTypes.string,
  saveBtnText: _react.PropTypes.string,
  closeBtnText: _react.PropTypes.string,
  closeBtnContextual: _react.PropTypes.string,
  saveBtnContextual: _react.PropTypes.string,
  closeBtnClass: _react.PropTypes.string,
  saveBtnClass: _react.PropTypes.string,
  beforeClose: _react.PropTypes.func,
  beforeSave: _react.PropTypes.func,
  onSave: _react.PropTypes.func,
  onModalClose: _react.PropTypes.func
};
InsertModalFooter.defaultProps = {
  className: '',
  saveBtnText: _Const2.default.SAVE_BTN_TEXT,
  closeBtnText: _Const2.default.CLOSE_BTN_TEXT,
  closeBtnContextual: 'btn-default',
  saveBtnContextual: 'btn-primary',
  closeBtnClass: '',
  saveBtnClass: '',
  beforeClose: undefined,
  beforeSave: undefined
};

var _default = InsertModalFooter;
exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(InsertModalFooter, 'InsertModalFooter', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/toolbar/InsertModalFooter.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/toolbar/InsertModalFooter.js');
}();

;

/***/ }),

/***/ 1300:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InsertModalHeader = function (_Component) {
  _inherits(InsertModalHeader, _Component);

  function InsertModalHeader() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, InsertModalHeader);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = InsertModalHeader.__proto__ || Object.getPrototypeOf(InsertModalHeader)).call.apply(_ref, [this].concat(args))), _this), _this.handleCloseBtnClick = function () {
      var _this2;

      return (_this2 = _this).__handleCloseBtnClick__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(InsertModalHeader, [{
    key: '__handleCloseBtnClick__REACT_HOT_LOADER__',
    value: function __handleCloseBtnClick__REACT_HOT_LOADER__(e) {
      var _props = this.props,
          onModalClose = _props.onModalClose,
          beforeClose = _props.beforeClose;

      beforeClose && beforeClose(e);
      onModalClose();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          title = _props2.title,
          hideClose = _props2.hideClose,
          className = _props2.className,
          children = _props2.children;


      var closeBtn = hideClose ? null : _react2.default.createElement(
        'button',
        { type: 'button',
          className: 'close', onClick: this.handleCloseBtnClick },
        _react2.default.createElement(
          'span',
          { 'aria-hidden': 'true' },
          '\xD7'
        ),
        _react2.default.createElement(
          'span',
          { className: 'sr-only' },
          'Close'
        )
      );

      var content = children || _react2.default.createElement(
        'span',
        null,
        closeBtn,
        _react2.default.createElement(
          'h4',
          { className: 'modal-title' },
          title
        )
      );

      return _react2.default.createElement(
        'div',
        { className: 'modal-header ' + className },
        content
      );
    }
  }]);

  return InsertModalHeader;
}(_react.Component);

InsertModalHeader.propTypes = {
  className: _react.PropTypes.string,
  title: _react.PropTypes.string,
  onModalClose: _react.PropTypes.func,
  hideClose: _react.PropTypes.bool,
  beforeClose: _react.PropTypes.func
};
InsertModalHeader.defaultProps = {
  className: '',
  title: 'Add Row',
  onModalClose: undefined,
  hideClose: false,
  beforeClose: undefined
};

var _default = InsertModalHeader;
exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(InsertModalHeader, 'InsertModalHeader', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/toolbar/InsertModalHeader.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/toolbar/InsertModalHeader.js');
}();

;

/***/ }),

/***/ 1301:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(26);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchField = function (_Component) {
  _inherits(SearchField, _Component);

  function SearchField() {
    _classCallCheck(this, SearchField);

    return _possibleConstructorReturn(this, (SearchField.__proto__ || Object.getPrototypeOf(SearchField)).apply(this, arguments));
  }

  _createClass(SearchField, [{
    key: 'getValue',
    value: function getValue() {
      return _reactDom2.default.findDOMNode(this).value;
    }
  }, {
    key: 'setValue',
    value: function setValue(value) {
      _reactDom2.default.findDOMNode(this).value = value;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          defaultValue = _props.defaultValue,
          placeholder = _props.placeholder,
          onKeyUp = _props.onKeyUp,
          rest = _objectWithoutProperties(_props, ['className', 'defaultValue', 'placeholder', 'onKeyUp']);

      return _react2.default.createElement('input', _extends({
        className: 'form-control ' + className,
        type: 'text',
        defaultValue: defaultValue,
        placeholder: placeholder || SearchField.defaultProps.placeholder,
        onKeyUp: onKeyUp,
        style: { zIndex: 0 }
      }, rest));
    }
  }]);

  return SearchField;
}(_react.Component);

SearchField.propTypes = {
  className: _react.PropTypes.string,
  defaultValue: _react.PropTypes.string,
  placeholder: _react.PropTypes.string,
  onKeyUp: _react.PropTypes.func
};
SearchField.defaultProps = {
  className: '',
  defaultValue: '',
  placeholder: 'Search',
  onKeyUp: undefined
};

var _default = SearchField;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(SearchField, 'SearchField', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/toolbar/SearchField.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/toolbar/SearchField.js');
}();

;

/***/ }),

/***/ 1302:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Const = __webpack_require__(1029);

var _Const2 = _interopRequireDefault(_Const);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var showSelectedOnlyBtnDefaultClass = 'react-bs-table-show-sel-only-btn';

var ShowSelectedOnlyButton = function (_Component) {
  _inherits(ShowSelectedOnlyButton, _Component);

  function ShowSelectedOnlyButton() {
    _classCallCheck(this, ShowSelectedOnlyButton);

    return _possibleConstructorReturn(this, (ShowSelectedOnlyButton.__proto__ || Object.getPrototypeOf(ShowSelectedOnlyButton)).apply(this, arguments));
  }

  _createClass(ShowSelectedOnlyButton, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          btnContextual = _props.btnContextual,
          className = _props.className,
          onClick = _props.onClick,
          toggle = _props.toggle,
          showAllText = _props.showAllText,
          showOnlySelectText = _props.showOnlySelectText,
          children = _props.children,
          rest = _objectWithoutProperties(_props, ['btnContextual', 'className', 'onClick', 'toggle', 'showAllText', 'showOnlySelectText', 'children']);

      var content = children || _react2.default.createElement(
        'span',
        null,
        toggle ? showOnlySelectText : showAllText
      );
      return _react2.default.createElement(
        'button',
        _extends({ type: 'button',
          'aria-pressed': 'false',
          'data-toggle': 'button',
          className: 'btn ' + btnContextual + ' ' + showSelectedOnlyBtnDefaultClass + ' ' + className,
          onClick: onClick
        }, rest),
        content
      );
    }
  }]);

  return ShowSelectedOnlyButton;
}(_react.Component);

ShowSelectedOnlyButton.propTypes = {
  showAllText: _react.PropTypes.string,
  showOnlySelectText: _react.PropTypes.string,
  toggle: _react.PropTypes.bool,
  btnContextual: _react.PropTypes.string,
  className: _react.PropTypes.string,
  onClick: _react.PropTypes.func
};
ShowSelectedOnlyButton.defaultProps = {
  showAllText: _Const2.default.SHOW_ALL,
  showOnlySelectText: _Const2.default.SHOW_ONLY_SELECT,
  toggle: false,
  btnContextual: 'btn-primary',
  className: '',
  onClick: undefined
};

var _default = ShowSelectedOnlyButton;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(showSelectedOnlyBtnDefaultClass, 'showSelectedOnlyBtnDefaultClass', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/toolbar/ShowSelectedOnlyButton.js');

  __REACT_HOT_LOADER__.register(ShowSelectedOnlyButton, 'ShowSelectedOnlyButton', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/toolbar/ShowSelectedOnlyButton.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/toolbar/ShowSelectedOnlyButton.js');
}();

;

/***/ }),

/***/ 1303:
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(0), __webpack_require__(4));
	else if(typeof define === 'function' && define.amd)
		define(["react", "prop-types"], factory);
	else if(typeof exports === 'object')
		exports["Dropzone"] = factory(require("react"), require("prop-types"));
	else
		root["Dropzone"] = factory(root["react"], root["prop-types"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(3);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _attrAccept = __webpack_require__(4);
	
	var _attrAccept2 = _interopRequireDefault(_attrAccept);
	
	var _getDataTransferItems = __webpack_require__(5);
	
	var _getDataTransferItems2 = _interopRequireDefault(_getDataTransferItems);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint prefer-template: 0 */
	
	var supportMultiple = typeof document !== 'undefined' && document && document.createElement ? 'multiple' in document.createElement('input') : true;
	
	var Dropzone = function (_React$Component) {
	  _inherits(Dropzone, _React$Component);
	
	  _createClass(Dropzone, null, [{
	    key: 'onDocumentDragOver',
	    value: function onDocumentDragOver(e) {
	      // allow the entire document to be a drag target
	      e.preventDefault();
	    }
	  }]);
	
	  function Dropzone(props, context) {
	    _classCallCheck(this, Dropzone);
	
	    var _this = _possibleConstructorReturn(this, (Dropzone.__proto__ || Object.getPrototypeOf(Dropzone)).call(this, props, context));
	
	    _this.renderChildren = function (children) {
	      if (typeof children === 'function') {
	        return children(_this.state);
	      }
	      return children;
	    };
	
	    _this.onClick = _this.onClick.bind(_this);
	    _this.onDocumentDrop = _this.onDocumentDrop.bind(_this);
	    _this.onDragStart = _this.onDragStart.bind(_this);
	    _this.onDragEnter = _this.onDragEnter.bind(_this);
	    _this.onDragLeave = _this.onDragLeave.bind(_this);
	    _this.onDragOver = _this.onDragOver.bind(_this);
	    _this.onDrop = _this.onDrop.bind(_this);
	    _this.onFileDialogCancel = _this.onFileDialogCancel.bind(_this);
	    _this.fileAccepted = _this.fileAccepted.bind(_this);
	    _this.setRef = _this.setRef.bind(_this);
	    _this.isFileDialogActive = false;
	    _this.state = {
	      isDragActive: false,
	      acceptedFiles: [],
	      rejectedFiles: []
	    };
	    return _this;
	  }
	
	  _createClass(Dropzone, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var preventDropOnDocument = this.props.preventDropOnDocument;
	
	      this.dragTargets = [];
	
	      if (preventDropOnDocument) {
	        document.addEventListener('dragover', Dropzone.onDocumentDragOver, false);
	        document.addEventListener('drop', this.onDocumentDrop, false);
	      }
	      // Tried implementing addEventListener, but didn't work out
	      document.body.onfocus = this.onFileDialogCancel;
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      var preventDropOnDocument = this.props.preventDropOnDocument;
	
	      if (preventDropOnDocument) {
	        document.removeEventListener('dragover', Dropzone.onDocumentDragOver);
	        document.removeEventListener('drop', this.onDocumentDrop);
	      }
	      // Can be replaced with removeEventListener, if addEventListener works
	      document.body.onfocus = null;
	    }
	  }, {
	    key: 'onDocumentDrop',
	    value: function onDocumentDrop(e) {
	      if (this.node.contains(e.target)) {
	        // if we intercepted an event for our instance, let it propagate down to the instance's onDrop handler
	        return;
	      }
	      e.preventDefault();
	      this.dragTargets = [];
	    }
	  }, {
	    key: 'onDragStart',
	    value: function onDragStart(e) {
	      if (this.props.onDragStart) {
	        this.props.onDragStart.call(this, e);
	      }
	    }
	  }, {
	    key: 'onDragEnter',
	    value: function onDragEnter(e) {
	      e.preventDefault();
	
	      // Count the dropzone and any children that are entered.
	      if (this.dragTargets.indexOf(e.target) === -1) {
	        this.dragTargets.push(e.target);
	      }
	
	      var files = (0, _getDataTransferItems2.default)(e);
	      var allFilesAccepted = this.allFilesAccepted(files);
	      var isMultipleAllowed = this.props.multiple || files.length <= 1;
	
	      this.setState({
	        isDragActive: allFilesAccepted,
	        isDragReject: !allFilesAccepted || !isMultipleAllowed
	      });
	
	      if (this.props.onDragEnter) {
	        this.props.onDragEnter.call(this, e);
	      }
	    }
	  }, {
	    key: 'onDragOver',
	    value: function onDragOver(e) {
	      // eslint-disable-line class-methods-use-this
	      e.preventDefault();
	      e.stopPropagation();
	      try {
	        e.dataTransfer.dropEffect = 'copy'; // eslint-disable-line no-param-reassign
	      } catch (err) {
	        // continue regardless of error
	      }
	
	      if (this.props.onDragOver) {
	        this.props.onDragOver.call(this, e);
	      }
	      return false;
	    }
	  }, {
	    key: 'onDragLeave',
	    value: function onDragLeave(e) {
	      var _this2 = this;
	
	      e.preventDefault();
	
	      // Only deactivate once the dropzone and all children have been left.
	      this.dragTargets = this.dragTargets.filter(function (el) {
	        return el !== e.target && _this2.node.contains(el);
	      });
	      if (this.dragTargets.length > 0) {
	        return;
	      }
	
	      this.setState({
	        isDragActive: false,
	        isDragReject: false
	      });
	
	      if (this.props.onDragLeave) {
	        this.props.onDragLeave.call(this, e);
	      }
	    }
	  }, {
	    key: 'onDrop',
	    value: function onDrop(e) {
	      var _this3 = this;
	
	      var _props = this.props,
	          onDrop = _props.onDrop,
	          onDropAccepted = _props.onDropAccepted,
	          onDropRejected = _props.onDropRejected,
	          multiple = _props.multiple,
	          disablePreview = _props.disablePreview;
	
	      var fileList = (0, _getDataTransferItems2.default)(e);
	      var acceptedFiles = [];
	      var rejectedFiles = [];
	
	      // Stop default browser behavior
	      e.preventDefault();
	
	      // Reset the counter along with the drag on a drop.
	      this.dragTargets = [];
	      this.isFileDialogActive = false;
	
	      fileList.forEach(function (file) {
	        if (!disablePreview) {
	          try {
	            file.preview = window.URL.createObjectURL(file); // eslint-disable-line no-param-reassign
	          } catch (err) {
	            if (process.env.NODE_ENV !== 'production') {
	              console.error('Failed to generate preview for file', file, err); // eslint-disable-line no-console
	            }
	          }
	        }
	
	        if (_this3.fileAccepted(file) && _this3.fileMatchSize(file)) {
	          acceptedFiles.push(file);
	        } else {
	          rejectedFiles.push(file);
	        }
	      });
	
	      if (!multiple) {
	        // if not in multi mode add any extra accepted files to rejected.
	        // This will allow end users to easily ignore a multi file drop in "single" mode.
	        rejectedFiles.push.apply(rejectedFiles, _toConsumableArray(acceptedFiles.splice(1)));
	      }
	
	      if (onDrop) {
	        onDrop.call(this, acceptedFiles, rejectedFiles, e);
	      }
	
	      if (rejectedFiles.length > 0 && onDropRejected) {
	        onDropRejected.call(this, rejectedFiles, e);
	      }
	
	      if (acceptedFiles.length > 0 && onDropAccepted) {
	        onDropAccepted.call(this, acceptedFiles, e);
	      }
	
	      // Reset drag state
	      this.setState({
	        isDragActive: false,
	        isDragReject: false,
	        acceptedFiles: acceptedFiles,
	        rejectedFiles: rejectedFiles
	      });
	    }
	  }, {
	    key: 'onClick',
	    value: function onClick(e) {
	      var _props2 = this.props,
	          onClick = _props2.onClick,
	          disableClick = _props2.disableClick;
	
	      if (!disableClick) {
	        e.stopPropagation();
	        this.open();
	        if (onClick) {
	          onClick.call(this, e);
	        }
	      }
	    }
	  }, {
	    key: 'onFileDialogCancel',
	    value: function onFileDialogCancel() {
	      // timeout will not recognize context of this method
	      var onFileDialogCancel = this.props.onFileDialogCancel;
	      var fileInputEl = this.fileInputEl;
	      var isFileDialogActive = this.isFileDialogActive;
	      // execute the timeout only if the onFileDialogCancel is defined and FileDialog
	      // is opened in the browser
	
	      if (onFileDialogCancel && isFileDialogActive) {
	        setTimeout(function () {
	          // Returns an object as FileList
	          var FileList = fileInputEl.files;
	          if (!FileList.length) {
	            isFileDialogActive = false;
	            onFileDialogCancel();
	          }
	        }, 300);
	      }
	    }
	  }, {
	    key: 'setRef',
	    value: function setRef(ref) {
	      this.node = ref;
	    }
	  }, {
	    key: 'fileAccepted',
	    value: function fileAccepted(file) {
	      // Firefox versions prior to 53 return a bogus MIME type for every file drag, so dragovers with
	      // that MIME type will always be accepted
	      return file.type === 'application/x-moz-file' || (0, _attrAccept2.default)(file, this.props.accept);
	    }
	  }, {
	    key: 'fileMatchSize',
	    value: function fileMatchSize(file) {
	      return file.size <= this.props.maxSize && file.size >= this.props.minSize;
	    }
	  }, {
	    key: 'allFilesAccepted',
	    value: function allFilesAccepted(files) {
	      return files.every(this.fileAccepted);
	    }
	
	    /**
	     * Open system file upload dialog.
	     *
	     * @public
	     */
	
	  }, {
	    key: 'open',
	    value: function open() {
	      this.isFileDialogActive = true;
	      this.fileInputEl.value = null;
	      this.fileInputEl.click();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this4 = this;
	
	      var _props3 = this.props,
	          accept = _props3.accept,
	          activeClassName = _props3.activeClassName,
	          inputProps = _props3.inputProps,
	          multiple = _props3.multiple,
	          name = _props3.name,
	          rejectClassName = _props3.rejectClassName,
	          children = _props3.children,
	          rest = _objectWithoutProperties(_props3, ['accept', 'activeClassName', 'inputProps', 'multiple', 'name', 'rejectClassName', 'children']);
	
	      var activeStyle = rest.activeStyle,
	          className = rest.className,
	          rejectStyle = rest.rejectStyle,
	          style = rest.style,
	          props = _objectWithoutProperties(rest, ['activeStyle', 'className', 'rejectStyle', 'style']);
	
	      var _state = this.state,
	          isDragActive = _state.isDragActive,
	          isDragReject = _state.isDragReject;
	
	
	      className = className || '';
	
	      if (isDragActive && activeClassName) {
	        className += ' ' + activeClassName;
	      }
	      if (isDragReject && rejectClassName) {
	        className += ' ' + rejectClassName;
	      }
	
	      if (!className && !style && !activeStyle && !rejectStyle) {
	        style = {
	          width: 200,
	          height: 200,
	          borderWidth: 2,
	          borderColor: '#666',
	          borderStyle: 'dashed',
	          borderRadius: 5
	        };
	        activeStyle = {
	          borderStyle: 'solid',
	          borderColor: '#6c6',
	          backgroundColor: '#eee'
	        };
	        rejectStyle = {
	          borderStyle: 'solid',
	          borderColor: '#c66',
	          backgroundColor: '#eee'
	        };
	      }
	
	      var appliedStyle = void 0;
	      if (activeStyle && isDragActive) {
	        appliedStyle = _extends({}, style, activeStyle);
	      } else if (rejectStyle && isDragReject) {
	        appliedStyle = _extends({}, style, rejectStyle);
	      } else {
	        appliedStyle = _extends({}, style);
	      }
	
	      var inputAttributes = {
	        accept: accept,
	        type: 'file',
	        style: { display: 'none' },
	        multiple: supportMultiple && multiple,
	        ref: function ref(el) {
	          return _this4.fileInputEl = el;
	        }, // eslint-disable-line
	        onChange: this.onDrop
	      };
	
	      if (name && name.length) {
	        inputAttributes.name = name;
	      }
	
	      // Remove custom properties before passing them to the wrapper div element
	      var customProps = ['acceptedFiles', 'preventDropOnDocument', 'disablePreview', 'disableClick', 'onDropAccepted', 'onDropRejected', 'onFileDialogCancel', 'maxSize', 'minSize'];
	      var divProps = _extends({}, props);
	      customProps.forEach(function (prop) {
	        return delete divProps[prop];
	      });
	
	      return _react2.default.createElement(
	        'div',
	        _extends({
	          className: className,
	          style: appliedStyle
	        }, divProps /* expand user provided props first so event handlers are never overridden */, {
	          onClick: this.onClick,
	          onDragStart: this.onDragStart,
	          onDragEnter: this.onDragEnter,
	          onDragOver: this.onDragOver,
	          onDragLeave: this.onDragLeave,
	          onDrop: this.onDrop,
	          ref: this.setRef
	        }),
	        this.renderChildren(children),
	        _react2.default.createElement('input', _extends({}, inputProps /* expand user provided inputProps first so inputAttributes override them */, inputAttributes))
	      );
	    }
	  }]);
	
	  return Dropzone;
	}(_react2.default.Component);
	
	Dropzone.propTypes = {
	  /**
	   * Allow specific types of files. See https://github.com/okonet/attr-accept for more information.
	   * Keep in mind that mime type determination is not reliable accross platforms. CSV files,
	   * for example, are reported as text/plain under macOS but as application/vnd.ms-excel under
	   * Windows. In some cases there might not be a mime type set at all.
	   * See: https://github.com/okonet/react-dropzone/issues/276
	   */
	  accept: _propTypes2.default.string,
	
	  /**
	   * Contents of the dropzone
	   */
	  children: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.func]),
	
	  /**
	   * Disallow clicking on the dropzone container to open file dialog
	   */
	  disableClick: _propTypes2.default.bool,
	
	  /**
	   * Enable/disable preview generation
	   */
	  disablePreview: _propTypes2.default.bool,
	
	  /**
	   * If false, allow dropped items to take over the current browser window
	   */
	  preventDropOnDocument: _propTypes2.default.bool,
	
	  /**
	   * Pass additional attributes to the `<input type="file"/>` tag
	   */
	  inputProps: _propTypes2.default.object,
	
	  /**
	   * Allow dropping multiple files
	   */
	  multiple: _propTypes2.default.bool,
	
	  /**
	   * `name` attribute for the input tag
	   */
	  name: _propTypes2.default.string,
	
	  /**
	   * Maximum file size
	   */
	  maxSize: _propTypes2.default.number,
	
	  /**
	   * Minimum file size
	   */
	  minSize: _propTypes2.default.number,
	
	  /**
	   * className
	   */
	  className: _propTypes2.default.string,
	
	  /**
	   * className for accepted state
	   */
	  activeClassName: _propTypes2.default.string,
	
	  /**
	   * className for rejected state
	   */
	  rejectClassName: _propTypes2.default.string,
	
	  /**
	   * CSS styles to apply
	   */
	  style: _propTypes2.default.object,
	
	  /**
	   * CSS styles to apply when drop will be accepted
	   */
	  activeStyle: _propTypes2.default.object,
	
	  /**
	   * CSS styles to apply when drop will be rejected
	   */
	  rejectStyle: _propTypes2.default.object,
	
	  /**
	   * onClick callback
	   * @param {Event} event
	   */
	  onClick: _propTypes2.default.func,
	
	  /**
	   * onDrop callback
	   */
	  onDrop: _propTypes2.default.func,
	
	  /**
	   * onDropAccepted callback
	   */
	  onDropAccepted: _propTypes2.default.func,
	
	  /**
	   * onDropRejected callback
	   */
	  onDropRejected: _propTypes2.default.func,
	
	  /**
	   * onDragStart callback
	   */
	  onDragStart: _propTypes2.default.func,
	
	  /**
	   * onDragEnter callback
	   */
	  onDragEnter: _propTypes2.default.func,
	
	  /**
	   * onDragOver callback
	   */
	  onDragOver: _propTypes2.default.func,
	
	  /**
	   * onDragLeave callback
	   */
	  onDragLeave: _propTypes2.default.func,
	
	  /**
	   * Provide a callback on clicking the cancel button of the file dialog
	   */
	  onFileDialogCancel: _propTypes2.default.func
	};
	
	Dropzone.defaultProps = {
	  preventDropOnDocument: true,
	  disablePreview: false,
	  disableClick: false,
	  multiple: true,
	  maxSize: Infinity,
	  minSize: 0
	};
	
	exports.default = Dropzone;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports=function(t){function n(e){if(r[e])return r[e].exports;var o=r[e]={exports:{},id:e,loaded:!1};return t[e].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}var r={};return n.m=t,n.c=r,n.p="",n(0)}([function(t,n,r){"use strict";n.__esModule=!0,r(8),r(9),n["default"]=function(t,n){if(t&&n){var r=function(){var r=Array.isArray(n)?n:n.split(","),e=t.name||"",o=t.type||"",i=o.replace(/\/.*$/,"");return{v:r.some(function(t){var n=t.trim();return"."===n.charAt(0)?e.toLowerCase().endsWith(n.toLowerCase()):/\/\*$/.test(n)?i===n.replace(/\/.*$/,""):o===n})}}();if("object"==typeof r)return r.v}return!0},t.exports=n["default"]},function(t,n){var r=t.exports={version:"1.2.2"};"number"==typeof __e&&(__e=r)},function(t,n){var r=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},function(t,n,r){var e=r(2),o=r(1),i=r(4),u=r(19),c="prototype",f=function(t,n){return function(){return t.apply(n,arguments)}},s=function(t,n,r){var a,p,l,y,d=t&s.G,h=t&s.P,v=d?e:t&s.S?e[n]||(e[n]={}):(e[n]||{})[c],x=d?o:o[n]||(o[n]={});d&&(r=n);for(a in r)p=!(t&s.F)&&v&&a in v,l=(p?v:r)[a],y=t&s.B&&p?f(l,e):h&&"function"==typeof l?f(Function.call,l):l,v&&!p&&u(v,a,l),x[a]!=l&&i(x,a,y),h&&((x[c]||(x[c]={}))[a]=l)};e.core=o,s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,t.exports=s},function(t,n,r){var e=r(5),o=r(18);t.exports=r(22)?function(t,n,r){return e.setDesc(t,n,o(1,r))}:function(t,n,r){return t[n]=r,t}},function(t,n){var r=Object;t.exports={create:r.create,getProto:r.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:r.getOwnPropertyDescriptor,setDesc:r.defineProperty,setDescs:r.defineProperties,getKeys:r.keys,getNames:r.getOwnPropertyNames,getSymbols:r.getOwnPropertySymbols,each:[].forEach}},function(t,n){var r=0,e=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++r+e).toString(36))}},function(t,n,r){var e=r(20)("wks"),o=r(2).Symbol;t.exports=function(t){return e[t]||(e[t]=o&&o[t]||(o||r(6))("Symbol."+t))}},function(t,n,r){r(26),t.exports=r(1).Array.some},function(t,n,r){r(25),t.exports=r(1).String.endsWith},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,n,r){var e=r(10);t.exports=function(t,n,r){if(e(t),void 0===n)return t;switch(r){case 1:return function(r){return t.call(n,r)};case 2:return function(r,e){return t.call(n,r,e)};case 3:return function(r,e,o){return t.call(n,r,e,o)}}return function(){return t.apply(n,arguments)}}},function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n,r){t.exports=function(t){var n=/./;try{"/./"[t](n)}catch(e){try{return n[r(7)("match")]=!1,!"/./"[t](n)}catch(o){}}return!0}},function(t,n){t.exports=function(t){try{return!!t()}catch(n){return!0}}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,r){var e=r(16),o=r(11),i=r(7)("match");t.exports=function(t){var n;return e(t)&&(void 0!==(n=t[i])?!!n:"RegExp"==o(t))}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,r){var e=r(2),o=r(4),i=r(6)("src"),u="toString",c=Function[u],f=(""+c).split(u);r(1).inspectSource=function(t){return c.call(t)},(t.exports=function(t,n,r,u){"function"==typeof r&&(o(r,i,t[n]?""+t[n]:f.join(String(n))),"name"in r||(r.name=n)),t===e?t[n]=r:(u||delete t[n],o(t,n,r))})(Function.prototype,u,function(){return"function"==typeof this&&this[i]||c.call(this)})},function(t,n,r){var e=r(2),o="__core-js_shared__",i=e[o]||(e[o]={});t.exports=function(t){return i[t]||(i[t]={})}},function(t,n,r){var e=r(17),o=r(13);t.exports=function(t,n,r){if(e(n))throw TypeError("String#"+r+" doesn't accept regex!");return String(o(t))}},function(t,n,r){t.exports=!r(15)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n){var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:r)(t)}},function(t,n,r){var e=r(23),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},function(t,n,r){"use strict";var e=r(3),o=r(24),i=r(21),u="endsWith",c=""[u];e(e.P+e.F*r(14)(u),"String",{endsWith:function(t){var n=i(this,t,u),r=arguments,e=r.length>1?r[1]:void 0,f=o(n.length),s=void 0===e?f:Math.min(o(e),f),a=String(t);return c?c.call(n,a,s):n.slice(s-a.length,s)===a}})},function(t,n,r){var e=r(5),o=r(3),i=r(1).Array||Array,u={},c=function(t,n){e.each.call(t.split(","),function(t){void 0==n&&t in i?u[t]=i[t]:t in[]&&(u[t]=r(12)(Function.call,[][t],n))})};c("pop,reverse,shift,keys,values,entries",1),c("indexOf,every,some,forEach,map,filter,find,findIndex,includes",3),c("join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill"),o(o.S,"Array",u)}]);

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = getDataTransferFiles;
	function getDataTransferFiles(event) {
	  var dataTransferItemsList = [];
	  if (event.dataTransfer) {
	    var dt = event.dataTransfer;
	    if (dt.files && dt.files.length) {
	      dataTransferItemsList = dt.files;
	    } else if (dt.items && dt.items.length) {
	      // During the drag even the dataTransfer.files is null
	      // but Chrome implements some drag store, which is accesible via dataTransfer.items
	      dataTransferItemsList = dt.items;
	    }
	  } else if (event.target && event.target.files) {
	    dataTransferItemsList = event.target.files;
	  }
	  // Convert from DataTransferItemsList to the native Array
	  return Array.prototype.slice.call(dataTransferItemsList);
	}
	module.exports = exports["default"];

/***/ })
/******/ ])
});
;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1318:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _objectAssign = __webpack_require__(19);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

__webpack_require__(1324);

__webpack_require__(1320);

__webpack_require__(1321);

__webpack_require__(1322);

__webpack_require__(1323);

__webpack_require__(1325);

__webpack_require__(1326);

__webpack_require__(1327);

__webpack_require__(1328);

__webpack_require__(1329);

__webpack_require__(1330);

__webpack_require__(1331);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // eslint-disable-line import/no-extraneous-dependencies


var Spinner = function (_React$Component) {
  _inherits(Spinner, _React$Component);

  function Spinner(props) {
    _classCallCheck(this, Spinner);

    var _this = _possibleConstructorReturn(this, (Spinner.__proto__ || Object.getPrototypeOf(Spinner)).call(this, props));

    _this.displayName = 'SpinKit';
    return _this;
  }

  _createClass(Spinner, [{
    key: 'render',
    value: function render() {
      var _cx;

      var classes = (0, _classnames2.default)((_cx = {
        'sk-fade-in': !this.props.noFadeIn,
        'sk-spinner': this.props.overrideSpinnerClassName === ''
      }, _defineProperty(_cx, this.props.overrideSpinnerClassName, !!this.props.overrideSpinnerClassName), _defineProperty(_cx, this.props.className, !!this.props.className), _cx));

      var props = (0, _objectAssign2.default)({}, this.props);
      delete props.spinnerName;
      delete props.noFadeIn;
      delete props.overrideSpinnerClassName;
      delete props.className;

      var spinnerEl = void 0;
      switch (this.props.spinnerName) {
        case 'double-bounce':
          spinnerEl = _react2.default.createElement(
            'div',
            _extends({}, props, { className: 'sk-double-bounce ' + classes }),
            _react2.default.createElement('div', { className: 'sk-double-bounce1' }),
            _react2.default.createElement('div', { className: 'sk-double-bounce2' })
          );
          break;
        case 'rotating-plane':
          spinnerEl = _react2.default.createElement(
            'div',
            _extends({}, props, { className: classes }),
            _react2.default.createElement('div', { className: 'sk-rotating-plane' })
          );
          break;
        case 'wave':
          spinnerEl = _react2.default.createElement(
            'div',
            _extends({}, props, { className: 'sk-wave ' + classes }),
            _react2.default.createElement('div', { className: 'sk-rect1' }),
            _react2.default.createElement('div', { className: 'sk-rect2' }),
            _react2.default.createElement('div', { className: 'sk-rect3' }),
            _react2.default.createElement('div', { className: 'sk-rect4' }),
            _react2.default.createElement('div', { className: 'sk-rect5' })
          );
          break;
        case 'wandering-cubes':
          spinnerEl = _react2.default.createElement(
            'div',
            _extends({}, props, { className: 'sk-wandering-cubes ' + classes }),
            _react2.default.createElement('div', { className: 'sk-cube1' }),
            _react2.default.createElement('div', { className: 'sk-cube2' })
          );
          break;
        case 'pulse':
          spinnerEl = _react2.default.createElement(
            'div',
            _extends({}, props, { className: classes }),
            _react2.default.createElement('div', { className: 'sk-pulse' })
          );
          break;
        case 'chasing-dots':
          spinnerEl = _react2.default.createElement(
            'div',
            _extends({}, props, { className: classes }),
            _react2.default.createElement(
              'div',
              { className: 'sk-chasing-dots' },
              _react2.default.createElement('div', { className: 'sk-dot1' }),
              _react2.default.createElement('div', { className: 'sk-dot2' })
            )
          );
          break;
        case 'circle':
          spinnerEl = _react2.default.createElement(
            'div',
            _extends({}, props, { className: 'sk-circle-wrapper ' + classes }),
            _react2.default.createElement('div', { className: 'sk-circle1 sk-circle' }),
            _react2.default.createElement('div', { className: 'sk-circle2 sk-circle' }),
            _react2.default.createElement('div', { className: 'sk-circle3 sk-circle' }),
            _react2.default.createElement('div', { className: 'sk-circle4 sk-circle' }),
            _react2.default.createElement('div', { className: 'sk-circle5 sk-circle' }),
            _react2.default.createElement('div', { className: 'sk-circle6 sk-circle' }),
            _react2.default.createElement('div', { className: 'sk-circle7 sk-circle' }),
            _react2.default.createElement('div', { className: 'sk-circle8 sk-circle' }),
            _react2.default.createElement('div', { className: 'sk-circle9 sk-circle' }),
            _react2.default.createElement('div', { className: 'sk-circle10 sk-circle' }),
            _react2.default.createElement('div', { className: 'sk-circle11 sk-circle' }),
            _react2.default.createElement('div', { className: 'sk-circle12 sk-circle' })
          );
          break;
        case 'cube-grid':
          spinnerEl = _react2.default.createElement(
            'div',
            _extends({}, props, { className: 'sk-cube-grid ' + classes }),
            _react2.default.createElement('div', { className: 'sk-cube' }),
            _react2.default.createElement('div', { className: 'sk-cube' }),
            _react2.default.createElement('div', { className: 'sk-cube' }),
            _react2.default.createElement('div', { className: 'sk-cube' }),
            _react2.default.createElement('div', { className: 'sk-cube' }),
            _react2.default.createElement('div', { className: 'sk-cube' }),
            _react2.default.createElement('div', { className: 'sk-cube' }),
            _react2.default.createElement('div', { className: 'sk-cube' }),
            _react2.default.createElement('div', { className: 'sk-cube' })
          );
          break;
        case 'folding-cube':
          spinnerEl = _react2.default.createElement(
            'div',
            _extends({}, props, { className: 'sk-folding-cube ' + classes }),
            _react2.default.createElement('div', { className: 'sk-cube' }),
            _react2.default.createElement('div', { className: 'sk-cube' }),
            _react2.default.createElement('div', { className: 'sk-cube' }),
            _react2.default.createElement('div', { className: 'sk-cube' })
          );
          break;
        case 'wordpress':
          spinnerEl = _react2.default.createElement(
            'div',
            _extends({}, props, { className: classes }),
            _react2.default.createElement(
              'div',
              { className: 'sk-wordpress' },
              _react2.default.createElement('div', { className: 'sk-inner-circle' })
            )
          );
          break;
        case 'three-bounce':
        default:
          spinnerEl = _react2.default.createElement(
            'div',
            _extends({}, props, { className: 'sk-three-bounce ' + classes }),
            _react2.default.createElement('div', { className: 'sk-bounce1' }),
            _react2.default.createElement('div', { className: 'sk-bounce2' }),
            _react2.default.createElement('div', { className: 'sk-bounce3' })
          );
      }
      return spinnerEl;
    }
  }]);

  return Spinner;
}(_react2.default.Component);

Spinner.propTypes = {
  spinnerName: _propTypes2.default.string.isRequired,
  noFadeIn: _propTypes2.default.bool,
  overrideSpinnerClassName: _propTypes2.default.string,
  className: _propTypes2.default.string
};

Spinner.defaultProps = {
  spinnerName: 'sk-three-bounce',
  noFadeIn: false,
  overrideSpinnerClassName: ''
};

module.exports = Spinner;

/***/ }),

/***/ 1320:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1097);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(37)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(1097, function() {
			var newContent = __webpack_require__(1097);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1321:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1098);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(37)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(1098, function() {
			var newContent = __webpack_require__(1098);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1322:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1099);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(37)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(1099, function() {
			var newContent = __webpack_require__(1099);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1323:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1100);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(37)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(1100, function() {
			var newContent = __webpack_require__(1100);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1324:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1101);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(37)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(1101, function() {
			var newContent = __webpack_require__(1101);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1325:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1102);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(37)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(1102, function() {
			var newContent = __webpack_require__(1102);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1326:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1103);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(37)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(1103, function() {
			var newContent = __webpack_require__(1103);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1327:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1104);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(37)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(1104, function() {
			var newContent = __webpack_require__(1104);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1328:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1105);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(37)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(1105, function() {
			var newContent = __webpack_require__(1105);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1329:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1106);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(37)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(1106, function() {
			var newContent = __webpack_require__(1106);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1330:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1107);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(37)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(1107, function() {
			var newContent = __webpack_require__(1107);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1331:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1108);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(37)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(1108, function() {
			var newContent = __webpack_require__(1108);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1334:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1178);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(37)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(1178, function() {
			var newContent = __webpack_require__(1178);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1346:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

var _AddMetaProperty = __webpack_require__(1502);

var _AddMetaProperty2 = _interopRequireDefault(_AddMetaProperty);

__webpack_require__(1554);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  AddMetaProperty: _AddMetaProperty2.default
};

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1347:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MetaTreeView = __webpack_require__(1506);

var _MetaTreeView2 = _interopRequireDefault(_MetaTreeView);

__webpack_require__(1334);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _MetaTreeView2.default;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1356:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _omit2 = __webpack_require__(1445);

var _omit3 = _interopRequireDefault(_omit2);

var _includes2 = __webpack_require__(1441);

var _includes3 = _interopRequireDefault(_includes2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactAddonsUpdate = __webpack_require__(1289);

var _reactAddonsUpdate2 = _interopRequireDefault(_reactAddonsUpdate);

var _ToastMessage = __webpack_require__(1276);

var _ToastMessage2 = _interopRequireDefault(_ToastMessage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ToastContainer = function (_Component) {
  _inherits(ToastContainer, _Component);

  function ToastContainer() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ToastContainer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ToastContainer.__proto__ || Object.getPrototypeOf(ToastContainer)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      toasts: [],
      toastId: 0,
      messageList: []
    }, _this._handle_toast_remove = _this._handle_toast_remove.bind(_this), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ToastContainer, [{
    key: "error",
    value: function error(message, title, optionsOverride) {
      this._notify(this.props.toastType.error, message, title, optionsOverride);
    }
  }, {
    key: "info",
    value: function info(message, title, optionsOverride) {
      this._notify(this.props.toastType.info, message, title, optionsOverride);
    }
  }, {
    key: "success",
    value: function success(message, title, optionsOverride) {
      this._notify(this.props.toastType.success, message, title, optionsOverride);
    }
  }, {
    key: "warning",
    value: function warning(message, title, optionsOverride) {
      this._notify(this.props.toastType.warning, message, title, optionsOverride);
    }
  }, {
    key: "clear",
    value: function clear() {
      var _this2 = this;

      Object.keys(this.refs).forEach(function (key) {
        _this2.refs[key].hideToast(false);
      });
    }
  }, {
    key: "_notify",
    value: function _notify(type, message, title) {
      var _this3 = this;

      var optionsOverride = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      if (this.props.preventDuplicates) {
        if ((0, _includes3.default)(this.state.messageList, message)) {
          return;
        }
      }
      var key = this.state.toastId++;
      var toastId = key;
      var newToast = (0, _reactAddonsUpdate2.default)(optionsOverride, {
        $merge: {
          type: type,
          title: title,
          message: message,
          toastId: toastId,
          key: key,
          ref: "toasts__" + key,
          handleOnClick: function handleOnClick(e) {
            if ("function" === typeof optionsOverride.handleOnClick) {
              optionsOverride.handleOnClick();
            }
            return _this3._handle_toast_on_click(e);
          },
          handleRemove: this._handle_toast_remove
        }
      });
      var toastOperation = _defineProperty({}, "" + (this.props.newestOnTop ? "$unshift" : "$push"), [newToast]);

      var messageOperation = _defineProperty({}, "" + (this.props.newestOnTop ? "$unshift" : "$push"), [message]);

      var nextState = (0, _reactAddonsUpdate2.default)(this.state, {
        toasts: toastOperation,
        messageList: messageOperation
      });
      this.setState(nextState);
    }
  }, {
    key: "_handle_toast_on_click",
    value: function _handle_toast_on_click(event) {
      this.props.onClick(event);
      if (event.defaultPrevented) {
        return;
      }
      event.preventDefault();
      event.stopPropagation();
    }
  }, {
    key: "_handle_toast_remove",
    value: function _handle_toast_remove(toastId) {
      var _this4 = this;

      if (this.props.preventDuplicates) {
        this.state.previousMessage = "";
      }
      var operationName = "" + (this.props.newestOnTop ? "reduceRight" : "reduce");
      this.state.toasts[operationName](function (found, toast, index) {
        if (found || toast.toastId !== toastId) {
          return false;
        }
        _this4.setState((0, _reactAddonsUpdate2.default)(_this4.state, {
          toasts: { $splice: [[index, 1]] },
          messageList: { $splice: [[index, 1]] }
        }));
        return true;
      }, false);
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var divProps = (0, _omit3.default)(this.props, ["toastType", "toastMessageFactory", "preventDuplicates", "newestOnTop"]);

      return _react2.default.createElement(
        "div",
        _extends({}, divProps, { "aria-live": "polite", role: "alert" }),
        this.state.toasts.map(function (toast) {
          return _this5.props.toastMessageFactory(toast);
        })
      );
    }
  }]);

  return ToastContainer;
}(_react.Component);

ToastContainer.propTypes = {
  toastType: _react.PropTypes.shape({
    error: _react.PropTypes.string,
    info: _react.PropTypes.string,
    success: _react.PropTypes.string,
    warning: _react.PropTypes.string
  }).isRequired,
  id: _react.PropTypes.string.isRequired,
  toastMessageFactory: _react.PropTypes.func.isRequired,
  preventDuplicates: _react.PropTypes.bool.isRequired,
  newestOnTop: _react.PropTypes.bool.isRequired,
  onClick: _react.PropTypes.func.isRequired
};
ToastContainer.defaultProps = {
  toastType: {
    error: "error",
    info: "info",
    success: "success",
    warning: "warning"
  },
  id: "toast-container",
  toastMessageFactory: _react2.default.createFactory(_ToastMessage2.default.animation),
  preventDuplicates: true,
  newestOnTop: true,
  onClick: function onClick() {}
};
exports.default = ToastContainer;

/***/ }),

/***/ 1357:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ReactTransitionEvents = __webpack_require__(1544);

var _ReactTransitionEvents2 = _interopRequireDefault(_ReactTransitionEvents);

var _reactDom = __webpack_require__(26);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _elementClass = __webpack_require__(395);

var _elementClass2 = _interopRequireDefault(_elementClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TICK = 17;
var toString = Object.prototype.toString;
exports.default = {
  getDefaultProps: function getDefaultProps() {
    return {
      transition: null, // some examples defined in index.scss (scale, fadeInOut, rotate)
      showAnimation: "animated bounceIn", // or other animations from animate.css
      hideAnimation: "animated bounceOut",
      timeOut: 5000,
      extendedTimeOut: 1000
    };
  },
  componentWillMount: function componentWillMount() {
    this.classNameQueue = [];
    this.isHiding = false;
    this.intervalId = null;
  },
  componentDidMount: function componentDidMount() {
    var _this = this;

    this._is_mounted = true;
    this._show();
    var node = _reactDom2.default.findDOMNode(this);

    var onHideComplete = function onHideComplete() {
      if (_this.isHiding) {
        _this._set_is_hiding(false);
        _ReactTransitionEvents2.default.removeEndEventListener(node, onHideComplete);
        _this._handle_remove();
      }
    };
    _ReactTransitionEvents2.default.addEndEventListener(node, onHideComplete);

    if (this.props.timeOut > 0) {
      this._set_interval_id(setTimeout(this.hideToast, this.props.timeOut));
    }
  },
  componentWillUnmount: function componentWillUnmount() {
    this._is_mounted = false;
    if (this.intervalId) {
      clearTimeout(this.intervalId);
    }
  },
  _set_transition: function _set_transition(hide) {
    var animationType = hide ? "leave" : "enter";
    var node = _reactDom2.default.findDOMNode(this);
    var className = this.props.transition + "-" + animationType;
    var activeClassName = className + "-active";

    var endListener = function endListener(e) {
      if (e && e.target !== node) {
        return;
      }

      var classList = (0, _elementClass2.default)(node);
      classList.remove(className);
      classList.remove(activeClassName);

      _ReactTransitionEvents2.default.removeEndEventListener(node, endListener);
    };

    _ReactTransitionEvents2.default.addEndEventListener(node, endListener);

    (0, _elementClass2.default)(node).add(className);

    // Need to do this to actually trigger a transition.
    this._queue_class(activeClassName);
  },
  _clear_transition: function _clear_transition(hide) {
    var node = _reactDom2.default.findDOMNode(this);
    var animationType = hide ? "leave" : "enter";
    var className = this.props.transition + "-" + animationType;
    var activeClassName = className + "-active";

    var classList = (0, _elementClass2.default)(node);
    classList.remove(className);
    classList.remove(activeClassName);
  },
  _set_animation: function _set_animation(hide) {
    var node = _reactDom2.default.findDOMNode(this);
    var animations = this._get_animation_classes(hide);
    var endListener = function endListener(e) {
      if (e && e.target !== node) {
        return;
      }

      animations.forEach(function (anim) {
        return (0, _elementClass2.default)(node).remove(anim);
      });

      _ReactTransitionEvents2.default.removeEndEventListener(node, endListener);
    };

    _ReactTransitionEvents2.default.addEndEventListener(node, endListener);

    animations.forEach(function (anim) {
      return (0, _elementClass2.default)(node).add(anim);
    });
  },
  _get_animation_classes: function _get_animation_classes(hide) {
    var animations = hide ? this.props.hideAnimation : this.props.showAnimation;
    if ("[object Array]" === toString.call(animations)) {
      return animations;
    } else if ("string" === typeof animations) {
      return animations.split(" ");
    }
  },
  _clear_animation: function _clear_animation(hide) {
    var node = _reactDom2.default.findDOMNode(this);
    var animations = this._get_animation_classes(hide);
    animations.forEach(function (animation) {
      return (0, _elementClass2.default)(node).remove(animation);
    });
  },
  _queue_class: function _queue_class(className) {
    this.classNameQueue.push(className);

    if (!this.timeout) {
      this.timeout = setTimeout(this._flush_class_name_queue, TICK);
    }
  },
  _flush_class_name_queue: function _flush_class_name_queue() {
    var _this2 = this;

    if (this._is_mounted) {
      (function () {
        var node = _reactDom2.default.findDOMNode(_this2);
        _this2.classNameQueue.forEach(function (className) {
          return (0, _elementClass2.default)(node).add(className);
        });
      })();
    }
    this.classNameQueue.length = 0;
    this.timeout = null;
  },
  _show: function _show() {
    if (this.props.transition) {
      this._set_transition();
    } else if (this.props.showAnimation) {
      this._set_animation();
    }
  },
  handleMouseEnter: function handleMouseEnter() {
    clearTimeout(this.intervalId);
    this._set_interval_id(null);
    if (this.isHiding) {
      this._set_is_hiding(false);

      if (this.props.hideAnimation) {
        this._clear_animation(true);
      } else if (this.props.transition) {
        this._clear_transition(true);
      }
    }
  },
  handleMouseLeave: function handleMouseLeave() {
    if (!this.isHiding && (this.props.timeOut > 0 || this.props.extendedTimeOut > 0)) {
      this._set_interval_id(setTimeout(this.hideToast, this.props.extendedTimeOut));
    }
  },
  hideToast: function hideToast(override) {
    if (this.isHiding || this.intervalId === null && !override) {
      return;
    }

    this._set_is_hiding(true);
    if (this.props.transition) {
      this._set_transition(true);
    } else if (this.props.hideAnimation) {
      this._set_animation(true);
    } else {
      this._handle_remove();
    }
  },
  _set_interval_id: function _set_interval_id(intervalId) {
    this.intervalId = intervalId;
  },
  _set_is_hiding: function _set_is_hiding(isHiding) {
    this.isHiding = isHiding;
  }
};

/***/ }),

/***/ 1358:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactDom = __webpack_require__(26);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function call_show_method($node, props) {
  $node[props.showMethod]({
    duration: props.showDuration,
    easing: props.showEasing
  });
}

exports.default = {
  getDefaultProps: function getDefaultProps() {
    return {
      style: {
        display: "none" },
      showMethod: "fadeIn", // slideDown, and show are built into jQuery
      showDuration: 300,
      showEasing: "swing", // and linear are built into jQuery
      hideMethod: "fadeOut",
      hideDuration: 1000,
      hideEasing: "swing",
      //
      timeOut: 5000,
      extendedTimeOut: 1000
    };
  },
  getInitialState: function getInitialState() {
    return {
      intervalId: null,
      isHiding: false
    };
  },
  componentDidMount: function componentDidMount() {
    call_show_method(this._get_$_node(), this.props);
    if (this.props.timeOut > 0) {
      this._set_interval_id(setTimeout(this.hideToast, this.props.timeOut));
    }
  },
  handleMouseEnter: function handleMouseEnter() {
    clearTimeout(this.state.intervalId);
    this._set_interval_id(null);
    this._set_is_hiding(false);

    call_show_method(this._get_$_node().stop(true, true), this.props);
  },
  handleMouseLeave: function handleMouseLeave() {
    if (!this.state.isHiding && (this.props.timeOut > 0 || this.props.extendedTimeOut > 0)) {
      this._set_interval_id(setTimeout(this.hideToast, this.props.extendedTimeOut));
    }
  },
  hideToast: function hideToast(override) {
    if (this.state.isHiding || this.state.intervalId === null && !override) {
      return;
    }
    this.setState({ isHiding: true });

    this._get_$_node()[this.props.hideMethod]({
      duration: this.props.hideDuration,
      easing: this.props.hideEasing,
      complete: this._handle_remove
    });
  },
  _get_$_node: function _get_$_node() {
    /* eslint-disable no-undef */
    return jQuery(_reactDom2.default.findDOMNode(this));
    /* eslint-enable no-undef */
  },
  _set_interval_id: function _set_interval_id(intervalId) {
    this.setState({
      intervalId: intervalId
    });
  },
  _set_is_hiding: function _set_is_hiding(isHiding) {
    this.setState({
      isHiding: isHiding
    });
  }
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(31)))

/***/ }),

/***/ 1359:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToastMessage = exports.ToastContainer = undefined;

var _ToastContainer = __webpack_require__(1356);

var _ToastContainer2 = _interopRequireDefault(_ToastContainer);

var _ToastMessage = __webpack_require__(1276);

var _ToastMessage2 = _interopRequireDefault(_ToastMessage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.ToastContainer = _ToastContainer2.default;
exports.ToastMessage = _ToastMessage2.default;

/***/ }),

/***/ 1399:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(36)();
// imports


// module
exports.push([module.i, ".meta-properties .title {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  float: left; }\n\n.meta-properties .title > label {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  white-space: nowrap;\n  font-weight: normal;\n  user-select: none;\n  margin-left: 27px;\n  margin-top: 10px;\n  select: none;\n  width: 142px;\n  float: left; }\n\n.meta-properties .content {\n  height: 100%; }\n\n.meta-properties .content > .controls {\n  position: absolute;\n  width: 100%; }\n\n.meta-properties-controls {\n  margin: auto 0 auto calc(100% - 315px);\n  position: relative;\n  float: left; }\n\n.meta-properties-controls > button:first-child {\n  margin: 0 0 0 0; }\n\n.meta-properties-controls > button {\n  border: 1px solid #c6c6c6;\n  background-color: #e1e1e1;\n  border-radius: 6px;\n  position: relative;\n  margin: 0 0 0 4px;\n  overflow: hidden;\n  outline: none;\n  height: 24px;\n  width: 26px; }\n\n.meta-properties-controls > button:hover {\n  border: 1px solid #878787;\n  background-color: #f5f5f5; }\n\n.meta-properties-controls > button > label {\n  position: relative;\n  font-size: 20px;\n  color: #f0fcff;\n  top: -8px; }\n\n.meta-properties-controls > button > span {\n  pointer-events: none;\n  color: #9b9b9b; }\n\n.meta-property-dlg {\n  left: calc(50% - 170px) !important;\n  width: 340px !important; }\n  .meta-property-dlg .content {\n    padding: 6px 6px 4px 6px;\n    overflow: visible;\n    height: auto; }\n\n.meta-properties.exports {\n  width: 222px; }\n  .meta-properties.exports button {\n    border: 1px solid #d8d8d8;\n    background: #f7f7f7;\n    border-radius: 4px;\n    outline: none;\n    margin: 4px 0;\n    width: 100%; }\n    .meta-properties.exports button:hover {\n      background: #ffffff; }\n    .meta-properties.exports button span {\n      pointer-events: none;\n      position: relative;\n      font-size: 24px;\n      color: green;\n      left: -8px;\n      top: 4px; }\n    .meta-properties.exports button label {\n      pointer-events: none;\n      font-weight: normal; }\n\n.meta-search .meta-search-controls {\n  width: calc(100% - 19px); }\n\n.meta-search .input-search {\n  border-bottom-left-radius: 4px;\n  border-top-left-radius: 4px;\n  border: 1px solid #c6c6c6;\n  width: calc(100% - 50px);\n  padding: 1px 0 0 4px;\n  white-space: nowrap;\n  background: white;\n  margin: 8px 0 0 0;\n  overflow: hidden;\n  height: 24px;\n  float: left; }\n\n.meta-search button {\n  border-bottom-right-radius: 4px;\n  border-top-right-radius: 4px;\n  border: 1px solid #cccccc;\n  background: #e1e1e1;\n  margin: 8px 0 0 0;\n  color: #9b9b9b;\n  outline: none;\n  height: 24px; }\n  .meta-search button:hover {\n    background: #f5f5f5; }\n  .meta-search button span {\n    position: relative;\n    top: -1px; }\n\n.meta-search .table {\n  margin-bottom: 0px;\n  border: none; }\n\n.meta-search .table-bordered > thead > tr > th, .meta-search .table-bordered > thead > tr > td {\n  border-bottom: none; }\n\n.meta-search .table > thead > tr > th {\n  cursor: default; }\n\n.meta-search .table > thead > tr > th, .meta-search .table > tbody > tr > th, .meta-search .table > tfoot > tr > th, .meta-search .table > thead > tr > td, .meta-search .table > tbody > tr > td, .meta-search .table > tfoot > tr > td {\n  outline: none;\n  padding: 4px; }\n\n.meta-search .table > tbody > tr > td {\n  cursor: pointer; }\n\n.meta-search .react-bs-table-container, .meta-search .react-bs-table {\n  height: 100%; }\n\n.meta-search .react-bs-container-body {\n  height: calc(100% - 28px);\n  overflow: scroll; }\n", ""]);

// exports


/***/ }),

/***/ 1416:
/***/ (function(module, exports) {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      } else {
        // At least give some kind of context to the user
        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
        err.context = er;
        throw err;
      }
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        args = Array.prototype.slice.call(arguments, 1);
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    args = Array.prototype.slice.call(arguments, 1);
    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else if (listeners) {
    // LIFO order
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.prototype.listenerCount = function(type) {
  if (this._events) {
    var evlistener = this._events[type];

    if (isFunction(evlistener))
      return 1;
    else if (evlistener)
      return evlistener.length;
  }
  return 0;
};

EventEmitter.listenerCount = function(emitter, type) {
  return emitter.listenerCount(type);
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}


/***/ }),

/***/ 1418:
/***/ (function(module, exports) {

/**
 * Adds the key-value `pair` to `map`.
 *
 * @private
 * @param {Object} map The map to modify.
 * @param {Array} pair The key-value pair to add.
 * @returns {Object} Returns `map`.
 */
function addMapEntry(map, pair) {
  // Don't return `map.set` because it's not chainable in IE 11.
  map.set(pair[0], pair[1]);
  return map;
}

module.exports = addMapEntry;


/***/ }),

/***/ 1419:
/***/ (function(module, exports) {

/**
 * Adds `value` to `set`.
 *
 * @private
 * @param {Object} set The set to modify.
 * @param {*} value The value to add.
 * @returns {Object} Returns `set`.
 */
function addSetEntry(set, value) {
  // Don't return `set.add` because it's not chainable in IE 11.
  set.add(value);
  return set;
}

module.exports = addSetEntry;


/***/ }),

/***/ 1420:
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(379),
    keys = __webpack_require__(1038);

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

module.exports = baseAssign;


/***/ }),

/***/ 1421:
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(379),
    keysIn = __webpack_require__(231);

/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssignIn(object, source) {
  return object && copyObject(source, keysIn(source), object);
}

module.exports = baseAssignIn;


/***/ }),

/***/ 1422:
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(378),
    arrayEach = __webpack_require__(1093),
    assignValue = __webpack_require__(396),
    baseAssign = __webpack_require__(1420),
    baseAssignIn = __webpack_require__(1421),
    cloneBuffer = __webpack_require__(397),
    copyArray = __webpack_require__(399),
    copySymbols = __webpack_require__(1433),
    copySymbolsIn = __webpack_require__(1434),
    getAllKeys = __webpack_require__(1134),
    getAllKeysIn = __webpack_require__(1285),
    getTag = __webpack_require__(1135),
    initCloneArray = __webpack_require__(1437),
    initCloneByTag = __webpack_require__(1438),
    initCloneObject = __webpack_require__(400),
    isArray = __webpack_require__(217),
    isBuffer = __webpack_require__(222),
    isObject = __webpack_require__(58),
    keys = __webpack_require__(1038);

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      result = (isFlat || isFunc) ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat
          ? copySymbolsIn(value, baseAssignIn(result, value))
          : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, baseClone, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  var keysFunc = isFull
    ? (isFlat ? getAllKeysIn : getAllKeys)
    : (isFlat ? keysIn : keys);

  var props = isArr ? undefined : keysFunc(value);
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

module.exports = baseClone;


/***/ }),

/***/ 1423:
/***/ (function(module, exports, __webpack_require__) {

var baseFindIndex = __webpack_require__(1202),
    baseIsNaN = __webpack_require__(1424),
    strictIndexOf = __webpack_require__(1440);

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? strictIndexOf(array, value, fromIndex)
    : baseFindIndex(array, baseIsNaN, fromIndex);
}

module.exports = baseIndexOf;


/***/ }),

/***/ 1424:
/***/ (function(module, exports) {

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

module.exports = baseIsNaN;


/***/ }),

/***/ 1425:
/***/ (function(module, exports) {

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

module.exports = baseSlice;


/***/ }),

/***/ 1426:
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(1080),
    last = __webpack_require__(1443),
    parent = __webpack_require__(1439),
    toKey = __webpack_require__(1051);

/**
 * The base implementation of `_.unset`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The property path to unset.
 * @returns {boolean} Returns `true` if the property is deleted, else `false`.
 */
function baseUnset(object, path) {
  path = castPath(path, object);
  object = parent(object, path);
  return object == null || delete object[toKey(last(path))];
}

module.exports = baseUnset;


/***/ }),

/***/ 1427:
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(1052);

/**
 * The base implementation of `_.values` and `_.valuesIn` which creates an
 * array of `object` property values corresponding to the property names
 * of `props`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} props The property names to get values for.
 * @returns {Object} Returns the array of property values.
 */
function baseValues(object, props) {
  return arrayMap(props, function(key) {
    return object[key];
  });
}

module.exports = baseValues;


/***/ }),

/***/ 1428:
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(391);

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

module.exports = cloneDataView;


/***/ }),

/***/ 1429:
/***/ (function(module, exports, __webpack_require__) {

var addMapEntry = __webpack_require__(1418),
    arrayReduce = __webpack_require__(1283),
    mapToArray = __webpack_require__(1136);

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1;

/**
 * Creates a clone of `map`.
 *
 * @private
 * @param {Object} map The map to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned map.
 */
function cloneMap(map, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(mapToArray(map), CLONE_DEEP_FLAG) : mapToArray(map);
  return arrayReduce(array, addMapEntry, new map.constructor);
}

module.exports = cloneMap;


/***/ }),

/***/ 1430:
/***/ (function(module, exports) {

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

module.exports = cloneRegExp;


/***/ }),

/***/ 1431:
/***/ (function(module, exports, __webpack_require__) {

var addSetEntry = __webpack_require__(1419),
    arrayReduce = __webpack_require__(1283),
    setToArray = __webpack_require__(1137);

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1;

/**
 * Creates a clone of `set`.
 *
 * @private
 * @param {Object} set The set to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned set.
 */
function cloneSet(set, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(setToArray(set), CLONE_DEEP_FLAG) : setToArray(set);
  return arrayReduce(array, addSetEntry, new set.constructor);
}

module.exports = cloneSet;


/***/ }),

/***/ 1432:
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(219);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

module.exports = cloneSymbol;


/***/ }),

/***/ 1433:
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(379),
    getSymbols = __webpack_require__(1114);

/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

module.exports = copySymbols;


/***/ }),

/***/ 1434:
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(379),
    getSymbolsIn = __webpack_require__(1286);

/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn(source, object) {
  return copyObject(source, getSymbolsIn(source), object);
}

module.exports = copySymbolsIn;


/***/ }),

/***/ 1435:
/***/ (function(module, exports, __webpack_require__) {

var isPlainObject = __webpack_require__(403);

/**
 * Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
 * objects.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {string} key The key of the property to inspect.
 * @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
 */
function customOmitClone(value) {
  return isPlainObject(value) ? undefined : value;
}

module.exports = customOmitClone;


/***/ }),

/***/ 1436:
/***/ (function(module, exports, __webpack_require__) {

var flatten = __webpack_require__(1151),
    overRest = __webpack_require__(401),
    setToString = __webpack_require__(402);

/**
 * A specialized version of `baseRest` which flattens the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @returns {Function} Returns the new function.
 */
function flatRest(func) {
  return setToString(overRest(func, undefined, flatten), func + '');
}

module.exports = flatRest;


/***/ }),

/***/ 1437:
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

module.exports = initCloneArray;


/***/ }),

/***/ 1438:
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(391),
    cloneDataView = __webpack_require__(1428),
    cloneMap = __webpack_require__(1429),
    cloneRegExp = __webpack_require__(1430),
    cloneSet = __webpack_require__(1431),
    cloneSymbol = __webpack_require__(1432),
    cloneTypedArray = __webpack_require__(398);

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, cloneFunc, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return cloneMap(object, isDeep, cloneFunc);

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return cloneSet(object, isDeep, cloneFunc);

    case symbolTag:
      return cloneSymbol(object);
  }
}

module.exports = initCloneByTag;


/***/ }),

/***/ 1439:
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(1089),
    baseSlice = __webpack_require__(1425);

/**
 * Gets the parent value at `path` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} path The path to get the parent value of.
 * @returns {*} Returns the parent value.
 */
function parent(object, path) {
  return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
}

module.exports = parent;


/***/ }),

/***/ 1440:
/***/ (function(module, exports) {

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

module.exports = strictIndexOf;


/***/ }),

/***/ 1441:
/***/ (function(module, exports, __webpack_require__) {

var baseIndexOf = __webpack_require__(1423),
    isArrayLike = __webpack_require__(133),
    isString = __webpack_require__(1442),
    toInteger = __webpack_require__(1229),
    values = __webpack_require__(1446);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * Checks if `value` is in `collection`. If `collection` is a string, it's
 * checked for a substring of `value`, otherwise
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * is used for equality comparisons. If `fromIndex` is negative, it's used as
 * the offset from the end of `collection`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object|string} collection The collection to inspect.
 * @param {*} value The value to search for.
 * @param {number} [fromIndex=0] The index to search from.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
 * @returns {boolean} Returns `true` if `value` is found, else `false`.
 * @example
 *
 * _.includes([1, 2, 3], 1);
 * // => true
 *
 * _.includes([1, 2, 3], 1, 2);
 * // => false
 *
 * _.includes({ 'a': 1, 'b': 2 }, 1);
 * // => true
 *
 * _.includes('abcd', 'bc');
 * // => true
 */
function includes(collection, value, fromIndex, guard) {
  collection = isArrayLike(collection) ? collection : values(collection);
  fromIndex = (fromIndex && !guard) ? toInteger(fromIndex) : 0;

  var length = collection.length;
  if (fromIndex < 0) {
    fromIndex = nativeMax(length + fromIndex, 0);
  }
  return isString(collection)
    ? (fromIndex <= length && collection.indexOf(value, fromIndex) > -1)
    : (!!length && baseIndexOf(collection, value, fromIndex) > -1);
}

module.exports = includes;


/***/ }),

/***/ 1442:
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(101),
    isArray = __webpack_require__(217),
    isObjectLike = __webpack_require__(83);

/** `Object#toString` result references. */
var stringTag = '[object String]';

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
  return typeof value == 'string' ||
    (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
}

module.exports = isString;


/***/ }),

/***/ 1443:
/***/ (function(module, exports) {

/**
 * Gets the last element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the last element of `array`.
 * @example
 *
 * _.last([1, 2, 3]);
 * // => 3
 */
function last(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : undefined;
}

module.exports = last;


/***/ }),

/***/ 1445:
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(1052),
    baseClone = __webpack_require__(1422),
    baseUnset = __webpack_require__(1426),
    castPath = __webpack_require__(1080),
    copyObject = __webpack_require__(379),
    customOmitClone = __webpack_require__(1435),
    flatRest = __webpack_require__(1436),
    getAllKeysIn = __webpack_require__(1285);

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/**
 * The opposite of `_.pick`; this method creates an object composed of the
 * own and inherited enumerable property paths of `object` that are not omitted.
 *
 * **Note:** This method is considerably slower than `_.pick`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [paths] The property paths to omit.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.omit(object, ['a', 'c']);
 * // => { 'b': '2' }
 */
var omit = flatRest(function(object, paths) {
  var result = {};
  if (object == null) {
    return result;
  }
  var isDeep = false;
  paths = arrayMap(paths, function(path) {
    path = castPath(path, object);
    isDeep || (isDeep = path.length > 1);
    return path;
  });
  copyObject(object, getAllKeysIn(object), result);
  if (isDeep) {
    result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
  }
  var length = paths.length;
  while (length--) {
    baseUnset(result, paths[length]);
  }
  return result;
});

module.exports = omit;


/***/ }),

/***/ 1446:
/***/ (function(module, exports, __webpack_require__) {

var baseValues = __webpack_require__(1427),
    keys = __webpack_require__(1038);

/**
 * Creates an array of the own enumerable string keyed property values of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property values.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.values(new Foo);
 * // => [1, 2] (iteration order is not guaranteed)
 *
 * _.values('hi');
 * // => ['h', 'i']
 */
function values(object) {
  return object == null ? [] : baseValues(object, keys(object));
}

module.exports = values;


/***/ }),

/***/ 1447:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _Const = __webpack_require__(1029);

var _Const2 = _interopRequireDefault(_Const);

var _TableHeader = __webpack_require__(1456);

var _TableHeader2 = _interopRequireDefault(_TableHeader);

var _TableBody = __webpack_require__(1452);

var _TableBody2 = _interopRequireDefault(_TableBody);

var _PaginationList = __webpack_require__(1467);

var _PaginationList2 = _interopRequireDefault(_PaginationList);

var _ToolBar = __webpack_require__(1471);

var _ToolBar2 = _interopRequireDefault(_ToolBar);

var _TableFilter = __webpack_require__(1455);

var _TableFilter2 = _interopRequireDefault(_TableFilter);

var _TableDataStore = __webpack_require__(1468);

var _util = __webpack_require__(1066);

var _util2 = _interopRequireDefault(_util);

var _csv_export_util = __webpack_require__(1458);

var _csv_export_util2 = _interopRequireDefault(_csv_export_util);

var _Filter = __webpack_require__(1450);

var _TableHeaderColumn = __webpack_require__(1292);

var _TableHeaderColumn2 = _interopRequireDefault(_TableHeaderColumn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint no-alert: 0 */
/* eslint max-len: 0 */


var BootstrapTable = function (_Component) {
  _inherits(BootstrapTable, _Component);

  function BootstrapTable(props) {
    _classCallCheck(this, BootstrapTable);

    var _this = _possibleConstructorReturn(this, (BootstrapTable.__proto__ || Object.getPrototypeOf(BootstrapTable)).call(this, props));

    _this.handleSort = function () {
      return _this.__handleSort__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleExpandRow = function () {
      return _this.__handleExpandRow__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handlePaginationData = function () {
      return _this.__handlePaginationData__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleMouseLeave = function () {
      return _this.__handleMouseLeave__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleMouseEnter = function () {
      return _this.__handleMouseEnter__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleRowMouseOut = function () {
      return _this.__handleRowMouseOut__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleRowMouseOver = function () {
      return _this.__handleRowMouseOver__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleNavigateCell = function () {
      return _this.__handleNavigateCell__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleRowClick = function () {
      return _this.__handleRowClick__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleRowDoubleClick = function () {
      return _this.__handleRowDoubleClick__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleSelectAllRow = function () {
      return _this.__handleSelectAllRow__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleShowOnlySelected = function () {
      return _this.__handleShowOnlySelected__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleSelectRow = function () {
      return _this.__handleSelectRow__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleEditCell = function () {
      return _this.__handleEditCell__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleAddRow = function () {
      return _this.__handleAddRow__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.getPageByRowKey = function () {
      return _this.__getPageByRowKey__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleDropRow = function () {
      return _this.__handleDropRow__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleFilterData = function () {
      return _this.__handleFilterData__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleExportCSV = function () {
      return _this.__handleExportCSV__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleSearch = function () {
      return _this.__handleSearch__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this._scrollTop = function () {
      return _this.___scrollTop__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this._scrollHeader = function () {
      return _this.___scrollHeader__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.isIE = false;
    if (_util2.default.canUseDOM()) {
      _this.isIE = document.documentMode;
    }
    _this.store = new _TableDataStore.TableDataStore(_this.props.data ? _this.props.data.slice() : []);
    _this.isVerticalScroll = false;
    _this.initTable(_this.props);

    if (_this.props.selectRow && _this.props.selectRow.selected) {
      var copy = _this.props.selectRow.selected.slice();
      _this.store.setSelectedRowKey(copy);
    }
    var currPage = _Const2.default.PAGE_START_INDEX;
    if (typeof _this.props.options.page !== 'undefined') {
      currPage = _this.props.options.page;
    } else if (typeof _this.props.options.pageStartIndex !== 'undefined') {
      currPage = _this.props.options.pageStartIndex;
    }

    _this._adjustHeaderWidth = _this._adjustHeaderWidth.bind(_this);
    _this._adjustHeight = _this._adjustHeight.bind(_this);
    _this._adjustTable = _this._adjustTable.bind(_this);

    _this.state = {
      data: _this.getTableData(),
      currPage: currPage,
      expanding: _this.props.options.expanding || [],
      sizePerPage: _this.props.options.sizePerPage || _Const2.default.SIZE_PER_PAGE_LIST[0],
      selectedRowKeys: _this.store.getSelectedRowKeys(),
      reset: false,
      x: _this.props.keyBoardNav ? 0 : -1,
      y: _this.props.keyBoardNav ? 0 : -1
    };
    return _this;
  }

  _createClass(BootstrapTable, [{
    key: 'initTable',
    value: function initTable(props) {
      var _this2 = this;

      var keyField = props.keyField;


      var isKeyFieldDefined = typeof keyField === 'string' && keyField.length;
      _react2.default.Children.forEach(props.children, function (column) {
        if (column === null || column === undefined) {
          // Skip null and undefined value
          return;
        }
        if (column.props.isKey) {
          if (keyField) {
            throw new Error('Error. Multiple key column be detected in TableHeaderColumn.');
          }
          keyField = column.props.dataField;
        }
        if (column.props.filter) {
          // a column contains a filter
          if (!_this2.filter) {
            // first time create the filter on the BootstrapTable
            _this2.filter = new _Filter.Filter();
          }
          // pass the filter to column with filter
          column.props.filter.emitter = _this2.filter;
        }
      });

      if (this.filter) {
        this.filter.removeAllListeners('onFilterChange');
        this.filter.on('onFilterChange', function (currentFilter) {
          _this2.handleFilterData(currentFilter);
        });
      }

      this.colInfos = this.getColumnsDescription(props).reduce(function (prev, curr) {
        prev[curr.name] = curr;
        return prev;
      }, {});

      if (!isKeyFieldDefined && !keyField) {
        throw new Error('Error. No any key column defined in TableHeaderColumn.\n            Use \'isKey={true}\' to specify a unique column after version 0.5.4.');
      }

      this.store.setProps({
        isPagination: props.pagination,
        keyField: keyField,
        colInfos: this.colInfos,
        multiColumnSearch: props.multiColumnSearch,
        strictSearch: props.strictSearch,
        multiColumnSort: props.multiColumnSort,
        remote: this.props.remote
      });
    }
  }, {
    key: 'getTableData',
    value: function getTableData() {
      var result = [];
      var _props = this.props,
          options = _props.options,
          pagination = _props.pagination;

      var sortName = options.defaultSortName || options.sortName;
      var sortOrder = options.defaultSortOrder || options.sortOrder;
      var searchText = options.defaultSearch;

      if (sortName && sortOrder) {
        this.store.setSortInfo(sortOrder, sortName);
        if (!this.allowRemote(_Const2.default.REMOTE_SORT)) {
          this.store.sort();
        }
      }

      if (searchText) {
        this.store.search(searchText);
      }

      if (pagination) {
        var page = void 0;
        var sizePerPage = void 0;
        if (this.store.isChangedPage()) {
          sizePerPage = this.state.sizePerPage;
          page = this.state.currPage;
        } else {
          sizePerPage = options.sizePerPage || _Const2.default.SIZE_PER_PAGE_LIST[0];
          page = options.page || 1;
        }
        result = this.store.page(page, sizePerPage).get();
      } else {
        result = this.store.get();
      }
      return result;
    }
  }, {
    key: 'getColumnsDescription',
    value: function getColumnsDescription(_ref) {
      var _this3 = this;

      var children = _ref.children;

      var rowCount = 0;
      _react2.default.Children.forEach(children, function (column) {
        if (column === null || column === undefined) {
          // Skip null and undefined value
          return;
        }

        if (Number(column.props.row) > rowCount) {
          rowCount = Number(column.props.row);
        }
      });
      return _react2.default.Children.map(children, function (column, i) {
        if (column === null || column === undefined) {
          // Return null for empty objects
          return null;
        }

        var rowIndex = column.props.row ? Number(column.props.row) : 0;
        var rowSpan = column.props.rowSpan ? Number(column.props.rowSpan) : 1;
        if (rowSpan + rowIndex === rowCount + 1) {
          var columnDescription = _this3.getColumnDescription(column);

          columnDescription.index = i;

          return columnDescription;
        }
      });
    }
  }, {
    key: 'getColumnDescription',
    value: function getColumnDescription(column) {
      var columnDescription = {
        name: column.props.dataField,
        align: column.props.dataAlign,
        sort: column.props.dataSort,
        format: column.props.dataFormat,
        formatExtraData: column.props.formatExtraData,
        filterFormatted: column.props.filterFormatted,
        filterValue: column.props.filterValue,
        editable: column.props.editable,
        customEditor: column.props.customEditor,
        hidden: column.props.hidden,
        hiddenOnInsert: column.props.hiddenOnInsert,
        searchable: column.props.searchable,
        className: column.props.columnClassName,
        editClassName: column.props.editColumnClassName,
        invalidEditColumnClassName: column.props.invalidEditColumnClassName,
        columnTitle: column.props.columnTitle,
        width: column.props.width,
        text: column.props.headerText || column.props.children,
        sortFunc: column.props.sortFunc,
        sortFuncExtraData: column.props.sortFuncExtraData,
        export: column.props.export,
        expandable: column.props.expandable,
        attrs: column.props.tdAttr,
        style: column.props.tdStyle
      };

      if (column.type !== _TableHeaderColumn2.default && _react2.default.isValidElement(column.props.children)) {
        columnDescription = _extends({}, columnDescription, this.getColumnDescription(_react2.default.Children.only(column.props.children)));
      }

      return columnDescription;
    }
  }, {
    key: 'reset',
    value: function reset() {
      var _this4 = this;

      var pageStartIndex = this.props.options.pageStartIndex;

      this.store.clean();
      this.setState(function () {
        return {
          data: _this4.getTableData(),
          currPage: _util2.default.getFirstPage(pageStartIndex),
          expanding: [],
          sizePerPage: _Const2.default.SIZE_PER_PAGE_LIST[0],
          selectedRowKeys: _this4.store.getSelectedRowKeys(),
          reset: true
        };
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.initTable(nextProps);
      var options = nextProps.options,
          selectRow = nextProps.selectRow;
      var replace = nextProps.replace;

      replace = replace || this.props.replace;

      if (!nextProps.data) {
        return;
      }
      this.store.setData(nextProps.data.slice());

      if (!replace) {
        // from #481
        var page = this.state.currPage;
        if (this.props.options.page !== options.page) {
          page = options.page;
        }
        // from #481
        var sizePerPage = this.state.sizePerPage;
        if (this.props.options.sizePerPage !== options.sizePerPage) {
          sizePerPage = options.sizePerPage;
        }

        if (this.isRemoteDataSource()) {
          var data = nextProps.data.slice();
          if (nextProps.pagination && !this.allowRemote(_Const2.default.REMOTE_PAGE)) {
            data = this.store.page(page, sizePerPage).get();
          }
          this.setState(function () {
            return {
              data: data,
              currPage: page,
              sizePerPage: sizePerPage,
              reset: false
            };
          });
        } else {
          // #125
          // remove !options.page for #709
          if (page > Math.ceil(nextProps.data.length / sizePerPage)) {
            page = 1;
          }
          var sortList = this.store.getSortInfo();
          var sortField = options.sortName;
          var sortOrder = options.sortOrder;
          if (sortField && sortOrder) {
            this.store.setSortInfo(sortOrder, sortField);
            this.store.sort();
          } else if (sortList.length > 0) {
            this.store.sort();
          }
          var _data = this.store.page(page, sizePerPage).get();
          this.setState(function () {
            return {
              data: _data,
              currPage: page,
              sizePerPage: sizePerPage,
              reset: false
            };
          });

          if (this.store.isSearching && options.afterSearch) {
            options.afterSearch(this.store.searchText, this.store.getDataIgnoringPagination());
          }

          if (this.store.isFiltering && options.afterColumnFilter) {
            options.afterColumnFilter(this.store.filterObj, this.store.getDataIgnoringPagination());
          }
        }

        // If setting the expanded rows is being handled externally
        // then overwrite the current expanded rows.
        if (this.props.options.expanding !== options.expanding) {
          this.setState(function () {
            return {
              expanding: options.expanding || []
            };
          });
        }

        if (selectRow && selectRow.selected) {
          // set default select rows to store.
          var copy = selectRow.selected.slice();
          this.store.setSelectedRowKey(copy);
          this.setState(function () {
            return {
              selectedRowKeys: copy,
              reset: false
            };
          });
        }
      } else {
        this.reset();
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._adjustTable();
      window.addEventListener('resize', this._adjustTable);
      this.refs.body.refs.container.addEventListener('scroll', this._scrollHeader);
      if (this.props.scrollTop) {
        this._scrollTop();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this._adjustTable);
      if (this.refs && this.refs.body && this.refs.body.refs) {
        this.refs.body.refs.container.removeEventListener('scroll', this._scrollHeader);
      }
      if (this.filter) {
        this.filter.removeAllListeners('onFilterChange');
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this._adjustTable();
      if (this.props.options.afterTableComplete) {
        this.props.options.afterTableComplete();
      }
    }

    /**
     * Returns true if in the current configuration,
     * the datagrid should load its data remotely.
     *
     * @param  {Object}  [props] Optional. If not given, this.props will be used
     * @return {Boolean}
     */

  }, {
    key: 'isRemoteDataSource',
    value: function isRemoteDataSource(props) {
      var _ref2 = props || this.props,
          remote = _ref2.remote;

      return remote === true || _util2.default.isFunction(remote);
    }

    /**
     * Returns true if this action can be handled remote store
     * From #990, Sometimes, we need some actions as remote, some actions are handled by default
     * so function will tell you the target action is can be handled as remote or not.
     * @param  {String}  [action] Required.
     * @param  {Object}  [props] Optional. If not given, this.props will be used
     * @return {Boolean}
     */

  }, {
    key: 'allowRemote',
    value: function allowRemote(action, props) {
      var _ref3 = props || this.props,
          remote = _ref3.remote;

      if (typeof remote === 'function') {
        var remoteObj = remote(_Const2.default.REMOTE);
        return remoteObj[action];
      } else {
        return remote;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var style = {
        height: this.props.height,
        maxHeight: this.props.maxHeight
      };

      var columns = this.getColumnsDescription(this.props);
      var sortList = this.store.getSortInfo();
      var pagination = this.renderPagination();
      var toolBar = this.renderToolBar();
      var tableFilter = this.renderTableFilter(columns);
      var isSelectAll = this.isSelectAll();
      var expandColumnOptions = this.props.expandColumnOptions;
      if (typeof expandColumnOptions.expandColumnBeforeSelectColumn === 'undefined') {
        expandColumnOptions.expandColumnBeforeSelectColumn = true;
      }
      var colGroups = _util2.default.renderColGroup(columns, this.props.selectRow, expandColumnOptions);
      var sortIndicator = this.props.options.sortIndicator;
      if (typeof this.props.options.sortIndicator === 'undefined') sortIndicator = true;
      var _props$options$pagina = this.props.options.paginationPosition,
          paginationPosition = _props$options$pagina === undefined ? _Const2.default.PAGINATION_POS_BOTTOM : _props$options$pagina;

      var showPaginationOnTop = paginationPosition !== _Const2.default.PAGINATION_POS_BOTTOM;
      var showPaginationOnBottom = paginationPosition !== _Const2.default.PAGINATION_POS_TOP;
      var selectRow = _extends({}, this.props.selectRow);
      if (this.props.cellEdit && this.props.cellEdit.mode !== _Const2.default.CELL_EDIT_NONE) {
        selectRow.clickToSelect = false;
      }

      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)('react-bs-table-container', this.props.className, this.props.containerClass),
          style: this.props.containerStyle },
        toolBar,
        showPaginationOnTop ? pagination : null,
        _react2.default.createElement(
          'div',
          { ref: 'table',
            className: (0, _classnames2.default)('react-bs-table', { 'react-bs-table-bordered': this.props.bordered }, this.props.tableContainerClass),
            style: _extends({}, style, this.props.tableStyle),
            onMouseEnter: this.handleMouseEnter,
            onMouseLeave: this.handleMouseLeave },
          _react2.default.createElement(
            _TableHeader2.default,
            {
              ref: 'header',
              colGroups: colGroups,
              headerContainerClass: this.props.headerContainerClass,
              tableHeaderClass: this.props.tableHeaderClass,
              style: this.props.headerStyle,
              rowSelectType: this.props.selectRow.mode,
              customComponent: this.props.selectRow.customComponent,
              hideSelectColumn: this.props.selectRow.hideSelectColumn,
              sortList: sortList,
              sortIndicator: sortIndicator,
              onSort: this.handleSort,
              onSelectAllRow: this.handleSelectAllRow,
              bordered: this.props.bordered,
              condensed: this.props.condensed,
              isFiltered: this.filter ? true : false,
              isSelectAll: isSelectAll,
              reset: this.state.reset,
              expandColumnVisible: expandColumnOptions.expandColumnVisible,
              expandColumnComponent: expandColumnOptions.expandColumnComponent,
              expandColumnBeforeSelectColumn: expandColumnOptions.expandColumnBeforeSelectColumn },
            this.props.children
          ),
          _react2.default.createElement(_TableBody2.default, { ref: 'body',
            bodyContainerClass: this.props.bodyContainerClass,
            tableBodyClass: this.props.tableBodyClass,
            style: _extends({}, style, this.props.bodyStyle),
            data: this.state.data,
            expandComponent: this.props.expandComponent,
            expandableRow: this.props.expandableRow,
            expandRowBgColor: this.props.options.expandRowBgColor,
            expandBy: this.props.options.expandBy || _Const2.default.EXPAND_BY_ROW,
            expandBodyClass: this.props.options.expandBodyClass,
            expandParentClass: this.props.options.expandParentClass,
            columns: columns,
            trClassName: this.props.trClassName,
            trStyle: this.props.trStyle,
            striped: this.props.striped,
            bordered: this.props.bordered,
            hover: this.props.hover,
            keyField: this.store.getKeyField(),
            condensed: this.props.condensed,
            selectRow: selectRow,
            expandColumnOptions: this.props.expandColumnOptions,
            cellEdit: this.props.cellEdit,
            selectedRowKeys: this.state.selectedRowKeys,
            onRowClick: this.handleRowClick,
            onRowDoubleClick: this.handleRowDoubleClick,
            onRowMouseOver: this.handleRowMouseOver,
            onRowMouseOut: this.handleRowMouseOut,
            onSelectRow: this.handleSelectRow,
            noDataText: this.props.options.noDataText,
            withoutNoDataText: this.props.options.withoutNoDataText,
            expanding: this.state.expanding,
            onExpand: this.handleExpandRow,
            onlyOneExpanding: this.props.options.onlyOneExpanding,
            beforeShowError: this.props.options.beforeShowError,
            keyBoardNav: this.props.keyBoardNav,
            onNavigateCell: this.handleNavigateCell,
            x: this.state.x,
            y: this.state.y,
            withoutTabIndex: this.props.withoutTabIndex,
            onEditCell: this.handleEditCell })
        ),
        tableFilter,
        showPaginationOnBottom ? pagination : null
      );
    }
  }, {
    key: 'isSelectAll',
    value: function isSelectAll() {
      if (this.store.isEmpty()) return false;
      var _props$selectRow = this.props.selectRow,
          unselectable = _props$selectRow.unselectable,
          onlyUnselectVisible = _props$selectRow.onlyUnselectVisible;

      var keyField = this.store.getKeyField();
      var allRowKeys = onlyUnselectVisible ? this.store.get().map(function (r) {
        return r[keyField];
      }) : this.store.getAllRowkey();
      var defaultSelectRowKeys = this.store.getSelectedRowKeys();

      if (onlyUnselectVisible) {
        defaultSelectRowKeys = defaultSelectRowKeys.filter(function (x) {
          return x !== allRowKeys;
        });
      }

      if (defaultSelectRowKeys.length === 0) return false;
      var match = 0;
      var noFound = 0;
      var unSelectableCnt = 0;
      defaultSelectRowKeys.forEach(function (selected) {
        if (allRowKeys.indexOf(selected) !== -1) match++;else noFound++;
        if (unselectable && unselectable.indexOf(selected) !== -1) unSelectableCnt++;
      });

      if (noFound === defaultSelectRowKeys.length) return false;
      if (match === allRowKeys.length) {
        return true;
      } else {
        if (unselectable && match <= unSelectableCnt && unSelectableCnt === unselectable.length) return false;else return 'indeterminate';
      }
      // return (match === allRowKeys.length) ? true : 'indeterminate';
    }
  }, {
    key: 'cleanSelected',
    value: function cleanSelected() {
      this.store.setSelectedRowKey([]);
      this.setState(function () {
        return {
          selectedRowKeys: [],
          reset: false
        };
      });
    }
  }, {
    key: 'cleanSort',
    value: function cleanSort() {
      this.store.cleanSortInfo();
      this.setState(function () {
        return {
          reset: false
        };
      });
    }
  }, {
    key: '__handleSort__REACT_HOT_LOADER__',
    value: function __handleSort__REACT_HOT_LOADER__(order, sortField) {
      if (this.props.options.onSortChange) {
        this.props.options.onSortChange(sortField, order, this.props);
      }
      this.store.setSortInfo(order, sortField);
      if (this.allowRemote(_Const2.default.REMOTE_SORT)) {
        return;
      }

      var result = this.store.sort().get();
      this.setState(function () {
        return {
          data: result,
          reset: false
        };
      });
    }
  }, {
    key: '__handleExpandRow__REACT_HOT_LOADER__',
    value: function __handleExpandRow__REACT_HOT_LOADER__(expanding, rowKey, isRowExpanding) {
      var _this5 = this;

      var onExpand = this.props.options.onExpand;

      if (onExpand) {
        onExpand(rowKey, !isRowExpanding);
      }
      this.setState(function () {
        return { expanding: expanding, reset: false };
      }, function () {
        _this5._adjustHeaderWidth();
      });
    }
  }, {
    key: '__handlePaginationData__REACT_HOT_LOADER__',
    value: function __handlePaginationData__REACT_HOT_LOADER__(page, sizePerPage) {
      var _props$options = this.props.options,
          onPageChange = _props$options.onPageChange,
          pageStartIndex = _props$options.pageStartIndex;

      var emptyTable = this.store.isEmpty();
      if (onPageChange) {
        onPageChange(page, sizePerPage);
      }

      var state = {
        sizePerPage: sizePerPage,
        reset: false
      };
      if (!emptyTable) state.currPage = page;
      this.setState(function () {
        return state;
      });

      if (this.allowRemote(_Const2.default.REMOTE_PAGE) || emptyTable) {
        return;
      }

      var result = this.store.page(_util2.default.getNormalizedPage(pageStartIndex, page), sizePerPage).get();
      this.setState(function () {
        return { data: result, reset: false };
      });
    }
  }, {
    key: '__handleMouseLeave__REACT_HOT_LOADER__',
    value: function __handleMouseLeave__REACT_HOT_LOADER__() {
      if (this.props.options.onMouseLeave) {
        this.props.options.onMouseLeave();
      }
    }
  }, {
    key: '__handleMouseEnter__REACT_HOT_LOADER__',
    value: function __handleMouseEnter__REACT_HOT_LOADER__() {
      if (this.props.options.onMouseEnter) {
        this.props.options.onMouseEnter();
      }
    }
  }, {
    key: '__handleRowMouseOut__REACT_HOT_LOADER__',
    value: function __handleRowMouseOut__REACT_HOT_LOADER__(row, event) {
      if (this.props.options.onRowMouseOut) {
        this.props.options.onRowMouseOut(row, event);
      }
    }
  }, {
    key: '__handleRowMouseOver__REACT_HOT_LOADER__',
    value: function __handleRowMouseOver__REACT_HOT_LOADER__(row, event) {
      if (this.props.options.onRowMouseOver) {
        this.props.options.onRowMouseOver(row, event);
      }
    }
  }, {
    key: '__handleNavigateCell__REACT_HOT_LOADER__',
    value: function __handleNavigateCell__REACT_HOT_LOADER__(_ref4) {
      var offSetX = _ref4.x,
          offSetY = _ref4.y,
          lastEditCell = _ref4.lastEditCell;
      var pagination = this.props.pagination;
      var _state = this.state,
          x = _state.x,
          y = _state.y,
          currPage = _state.currPage;

      x += offSetX;
      y += offSetY;

      var columns = this.store.getColInfos();
      var visibleRowSize = this.state.data.length;
      var visibleColumnSize = Object.keys(columns).filter(function (k) {
        return !columns[k].hidden;
      }).length;

      if (y >= visibleRowSize) {
        currPage++;
        var lastPage = pagination ? this.refs.pagination.getLastPage() : -1;
        if (currPage <= lastPage) {
          this.handlePaginationData(currPage, this.state.sizePerPage);
        } else {
          return;
        }
        y = 0;
      } else if (y < 0) {
        currPage--;
        if (currPage > 0) {
          this.handlePaginationData(currPage, this.state.sizePerPage);
        } else {
          return;
        }
        y = visibleRowSize - 1;
      } else if (x >= visibleColumnSize) {
        if (y + 1 === visibleRowSize) {
          currPage++;
          var _lastPage = pagination ? this.refs.pagination.getLastPage() : -1;
          if (currPage <= _lastPage) {
            this.handlePaginationData(currPage, this.state.sizePerPage);
          } else {
            return;
          }
          y = 0;
        } else {
          y++;
        }
        x = lastEditCell ? 1 : 0;
      } else if (x < 0) {
        x = visibleColumnSize - 1;
        if (y === 0) {
          currPage--;
          if (currPage > 0) {
            this.handlePaginationData(currPage, this.state.sizePerPage);
          } else {
            return;
          }
          y = this.state.sizePerPage - 1;
        } else {
          y--;
        }
      }
      this.setState(function () {
        return {
          x: x, y: y, currPage: currPage, reset: false
        };
      });
    }
  }, {
    key: '__handleRowClick__REACT_HOT_LOADER__',
    value: function __handleRowClick__REACT_HOT_LOADER__(row, rowIndex, columnIndex) {
      var _props2 = this.props,
          options = _props2.options,
          keyBoardNav = _props2.keyBoardNav;

      if (options.onRowClick) {
        options.onRowClick(row, columnIndex, rowIndex);
      }
      if (keyBoardNav) {
        var _ref5 = (typeof keyBoardNav === 'undefined' ? 'undefined' : _typeof(keyBoardNav)) === 'object' ? keyBoardNav : {},
            clickToNav = _ref5.clickToNav;

        clickToNav = clickToNav === false ? clickToNav : true;
        if (clickToNav) {
          this.setState(function () {
            return {
              x: columnIndex,
              y: rowIndex,
              reset: false
            };
          });
        }
      }
    }
  }, {
    key: '__handleRowDoubleClick__REACT_HOT_LOADER__',
    value: function __handleRowDoubleClick__REACT_HOT_LOADER__(row) {
      if (this.props.options.onRowDoubleClick) {
        this.props.options.onRowDoubleClick(row);
      }
    }
  }, {
    key: '__handleSelectAllRow__REACT_HOT_LOADER__',
    value: function __handleSelectAllRow__REACT_HOT_LOADER__(e) {
      var isSelected = e.currentTarget.checked;
      var keyField = this.store.getKeyField();
      var _props$selectRow2 = this.props.selectRow,
          onSelectAll = _props$selectRow2.onSelectAll,
          unselectable = _props$selectRow2.unselectable,
          selected = _props$selectRow2.selected,
          onlyUnselectVisible = _props$selectRow2.onlyUnselectVisible;

      var selectedRowKeys = onlyUnselectVisible ? this.state.selectedRowKeys : [];
      var result = true;
      var rows = this.store.get();

      // onlyUnselectVisible default is false, #1276
      if (!isSelected && !onlyUnselectVisible) {
        rows = this.store.getRowByKey(this.state.selectedRowKeys);
      }

      if (unselectable && unselectable.length > 0) {
        if (isSelected) {
          rows = rows.filter(function (r) {
            return unselectable.indexOf(r[keyField]) === -1 || selected && selected.indexOf(r[keyField]) !== -1;
          });
        } else {
          rows = rows.filter(function (r) {
            return unselectable.indexOf(r[keyField]) === -1;
          });
        }
      }

      if (onSelectAll) {
        result = this.props.selectRow.onSelectAll(isSelected, rows);
      }

      if (typeof result == 'undefined' || result !== false) {
        if (isSelected) {
          if (Array.isArray(result)) {
            selectedRowKeys = result;
          } else {
            var currentRowKeys = rows.map(function (r) {
              return r[keyField];
            });
            // onlyUnselectVisible default is false, #1276
            if (onlyUnselectVisible) {
              selectedRowKeys = selectedRowKeys.concat(currentRowKeys);
            } else {
              selectedRowKeys = currentRowKeys;
            }
          }
        } else {
          if (unselectable && selected) {
            selectedRowKeys = selected.filter(function (r) {
              return unselectable.indexOf(r) > -1;
            });
          } else if (onlyUnselectVisible) {
            var _currentRowKeys = rows.map(function (r) {
              return r[keyField];
            });
            selectedRowKeys = selectedRowKeys.filter(function (k) {
              return _currentRowKeys.indexOf(k) === -1;
            });
          }
        }

        this.store.setSelectedRowKey(selectedRowKeys);
        this.setState(function () {
          return { selectedRowKeys: selectedRowKeys, reset: false };
        });
      }
    }
  }, {
    key: '__handleShowOnlySelected__REACT_HOT_LOADER__',
    value: function __handleShowOnlySelected__REACT_HOT_LOADER__() {
      this.store.ignoreNonSelected();
      var pageStartIndex = this.props.options.pageStartIndex;

      var result = void 0;
      if (this.props.pagination) {
        result = this.store.page(_util2.default.getNormalizedPage(pageStartIndex), this.state.sizePerPage).get();
      } else {
        result = this.store.get();
      }
      this.setState(function () {
        return {
          data: result,
          reset: false,
          currPage: _util2.default.getFirstPage(pageStartIndex)
        };
      });
    }
  }, {
    key: '__handleSelectRow__REACT_HOT_LOADER__',
    value: function __handleSelectRow__REACT_HOT_LOADER__(row, isSelected, e, rowIndex) {
      var result = true;
      var currSelected = this.store.getSelectedRowKeys();
      var rowKey = row[this.store.getKeyField()];
      var selectRow = this.props.selectRow;

      if (selectRow.onSelect) {
        result = selectRow.onSelect(row, isSelected, e, rowIndex);
      }

      if (typeof result === 'undefined' || result !== false) {
        if (selectRow.mode === _Const2.default.ROW_SELECT_SINGLE) {
          currSelected = isSelected ? [rowKey] : [];
        } else {
          if (isSelected) {
            currSelected.push(rowKey);
          } else {
            currSelected = currSelected.filter(function (key) {
              return rowKey !== key;
            });
          }
        }

        this.store.setSelectedRowKey(currSelected);
        this.setState(function () {
          return {
            selectedRowKeys: currSelected,
            reset: false
          };
        });
      }
    }
  }, {
    key: '__handleEditCell__REACT_HOT_LOADER__',
    value: function __handleEditCell__REACT_HOT_LOADER__(newVal, rowIndex, colIndex) {
      var _this6 = this;

      var beforeSaveCell = this.props.cellEdit.beforeSaveCell;

      var columns = this.getColumnsDescription(this.props);
      var fieldName = columns[colIndex].name;

      var invalid = function invalid() {
        _this6.setState(function () {
          return {
            data: _this6.store.get(),
            reset: false
          };
        });
        return;
      };

      if (beforeSaveCell) {
        var beforeSaveCellCB = function beforeSaveCellCB(result) {
          _this6.refs.body.cancelEditCell();
          if (result || result === undefined) {
            _this6.editCell(newVal, rowIndex, colIndex);
          } else {
            invalid();
          }
        };
        var isValid = beforeSaveCell(this.state.data[rowIndex], fieldName, newVal, beforeSaveCellCB);
        if (isValid === false && typeof isValid !== 'undefined') {
          return invalid();
        } else if (isValid === _Const2.default.AWAIT_BEFORE_CELL_EDIT) {
          /* eslint consistent-return: 0 */
          return isValid;
        }
      }
      this.editCell(newVal, rowIndex, colIndex);
    }
  }, {
    key: 'editCell',
    value: function editCell(newVal, rowIndex, colIndex) {
      var onCellEdit = this.props.options.onCellEdit;
      var afterSaveCell = this.props.cellEdit.afterSaveCell;

      var columns = this.getColumnsDescription(this.props);
      var fieldName = columns[colIndex].name;
      if (onCellEdit) {
        newVal = onCellEdit(this.state.data[rowIndex], fieldName, newVal);
      }

      if (this.allowRemote(_Const2.default.REMOTE_CELL_EDIT)) {
        if (afterSaveCell) {
          afterSaveCell(this.state.data[rowIndex], fieldName, newVal);
        }
        return;
      }

      var result = this.store.edit(newVal, rowIndex, fieldName).get();
      this.setState(function () {
        return {
          data: result,
          reset: false
        };
      });

      if (afterSaveCell) {
        afterSaveCell(this.state.data[rowIndex], fieldName, newVal);
      }
    }
  }, {
    key: 'handleAddRowAtBegin',
    value: function handleAddRowAtBegin(newObj) {
      try {
        this.store.addAtBegin(newObj);
      } catch (e) {
        return e;
      }
      this._handleAfterAddingRow(newObj, true);
    }
  }, {
    key: '__handleAddRow__REACT_HOT_LOADER__',
    value: function __handleAddRow__REACT_HOT_LOADER__(newObj) {
      var _this7 = this;

      var isAsync = false;
      var onAddRow = this.props.options.onAddRow;


      var afterHandleAddRow = function afterHandleAddRow(errMsg) {
        if (isAsync) {
          _this7.refs.toolbar.afterHandleSaveBtnClick(errMsg);
        } else {
          return errMsg;
        }
      };

      var afterAddRowCB = function afterAddRowCB(errMsg) {
        if (typeof errMsg !== 'undefined' && errMsg !== '') return afterHandleAddRow(errMsg);
        if (_this7.allowRemote(_Const2.default.REMOTE_INSERT_ROW)) {
          if (_this7.props.options.afterInsertRow) {
            _this7.props.options.afterInsertRow(newObj);
          }
          return afterHandleAddRow();
        }

        try {
          _this7.store.add(newObj);
        } catch (e) {
          return afterHandleAddRow(e.message);
        }
        _this7._handleAfterAddingRow(newObj, false);
        return afterHandleAddRow();
      };

      if (onAddRow) {
        var colInfos = this.store.getColInfos();
        var errMsg = onAddRow(newObj, colInfos, afterAddRowCB);

        if (errMsg !== '' && errMsg !== false) {
          return errMsg;
        } else if (typeof errMsg === 'undefined') {
          return afterAddRowCB();
        } else {
          isAsync = true;
          return !isAsync;
        }
      } else {
        return afterAddRowCB();
      }
    }
  }, {
    key: 'getSizePerPage',
    value: function getSizePerPage() {
      return this.state.sizePerPage;
    }
  }, {
    key: 'getCurrentPage',
    value: function getCurrentPage() {
      return this.state.currPage;
    }
  }, {
    key: 'getTableDataIgnorePaging',
    value: function getTableDataIgnorePaging() {
      return this.store.getCurrentDisplayData();
    }
  }, {
    key: '__getPageByRowKey__REACT_HOT_LOADER__',
    value: function __getPageByRowKey__REACT_HOT_LOADER__(rowKey) {
      var sizePerPage = this.state.sizePerPage;

      var currentData = this.store.getCurrentDisplayData();
      var keyField = this.store.getKeyField();
      var result = currentData.findIndex(function (x) {
        return x[keyField] === rowKey;
      });
      if (result > -1) {
        return parseInt(result / sizePerPage, 10) + 1;
      } else {
        return result;
      }
    }
  }, {
    key: '__handleDropRow__REACT_HOT_LOADER__',
    value: function __handleDropRow__REACT_HOT_LOADER__(rowKeys) {
      var _this8 = this;

      var dropRowKeys = rowKeys ? rowKeys : this.store.getSelectedRowKeys();
      // add confirm before the delete action if that option is set.
      if (dropRowKeys && dropRowKeys.length > 0) {
        if (this.props.options.handleConfirmDeleteRow) {
          this.props.options.handleConfirmDeleteRow(function () {
            _this8.deleteRow(dropRowKeys);
          }, dropRowKeys);
        } else if (confirm('Are you sure you want to delete?')) {
          this.deleteRow(dropRowKeys);
        }
      }
    }
  }, {
    key: 'deleteRow',
    value: function deleteRow(dropRowKeys) {
      var _this9 = this;

      var dropRow = this.store.getRowByKey(dropRowKeys);
      var _props$options2 = this.props.options,
          onDeleteRow = _props$options2.onDeleteRow,
          afterDeleteRow = _props$options2.afterDeleteRow;


      if (onDeleteRow) {
        onDeleteRow(dropRowKeys, dropRow);
      }

      this.store.setSelectedRowKey([]); // clear selected row key

      if (this.allowRemote(_Const2.default.REMOTE_DROP_ROW) && afterDeleteRow) {
        afterDeleteRow(dropRowKeys, dropRow);
        return;
      }

      this.store.remove(dropRowKeys); // remove selected Row
      var result = void 0;
      if (this.props.pagination) {
        var sizePerPage = this.state.sizePerPage;

        var currLastPage = Math.ceil(this.store.getDataNum() / sizePerPage);
        var currPage = this.state.currPage;

        if (currPage > currLastPage) currPage = currLastPage;
        result = this.store.page(_util2.default.getNormalizedPage(currPage), sizePerPage).get();
        this.setState(function () {
          return {
            data: result,
            selectedRowKeys: _this9.store.getSelectedRowKeys(),
            currPage: currPage,
            reset: false
          };
        });
      } else {
        result = this.store.get();
        this.setState(function () {
          return {
            data: result,
            reset: false,
            selectedRowKeys: _this9.store.getSelectedRowKeys()
          };
        });
      }
      if (afterDeleteRow) {
        afterDeleteRow(dropRowKeys, dropRow);
      }
    }
  }, {
    key: '__handleFilterData__REACT_HOT_LOADER__',
    value: function __handleFilterData__REACT_HOT_LOADER__(filterObj) {
      var _props$options3 = this.props.options,
          onFilterChange = _props$options3.onFilterChange,
          pageStartIndex = _props$options3.pageStartIndex;

      if (onFilterChange) {
        var colInfos = this.store.getColInfos();
        onFilterChange(filterObj, colInfos);
      }

      this.setState(function () {
        return {
          currPage: _util2.default.getFirstPage(pageStartIndex),
          reset: false
        };
      });

      if (this.allowRemote(_Const2.default.REMOTE_FILTER)) {
        if (this.props.options.afterColumnFilter) {
          this.props.options.afterColumnFilter(filterObj, this.store.getDataIgnoringPagination());
        }
        return;
      }

      this.store.filter(filterObj);

      var sortList = this.store.getSortInfo();

      if (sortList.length > 0) {
        this.store.sort();
      }

      var result = void 0;

      if (this.props.pagination) {
        var sizePerPage = this.state.sizePerPage;

        result = this.store.page(_util2.default.getNormalizedPage(pageStartIndex), sizePerPage).get();
      } else {
        result = this.store.get();
      }
      if (this.props.options.afterColumnFilter) {
        this.props.options.afterColumnFilter(filterObj, this.store.getDataIgnoringPagination());
      }
      this.setState(function () {
        return {
          data: result,
          reset: false
        };
      });
    }
  }, {
    key: '__handleExportCSV__REACT_HOT_LOADER__',
    value: function __handleExportCSV__REACT_HOT_LOADER__() {
      var result = {};

      var csvFileName = this.props.csvFileName;
      var _props$options4 = this.props.options,
          onExportToCSV = _props$options4.onExportToCSV,
          exportCSVSeparator = _props$options4.exportCSVSeparator,
          noAutoBOM = _props$options4.noAutoBOM,
          excludeCSVHeader = _props$options4.excludeCSVHeader;

      if (onExportToCSV) {
        result = onExportToCSV();
      } else {
        result = this.store.getDataIgnoringPagination();
      }
      var separator = exportCSVSeparator || _Const2.default.DEFAULT_CSV_SEPARATOR;
      var keys = [];
      this.props.children.filter(function (_) {
        return _ != null;
      }).map(function (column) {
        if (column.props.export === true || typeof column.props.export === 'undefined' && column.props.hidden === false) {
          keys.push({
            field: column.props.dataField,
            format: column.props.csvFormat,
            extraData: column.props.csvFormatExtraData,
            header: column.props.csvHeader || column.props.dataField,
            row: Number(column.props.row) || 0,
            rowSpan: Number(column.props.rowSpan) || 1,
            colSpan: Number(column.props.colSpan) || 1
          });
        }
      });

      if (_util2.default.isFunction(csvFileName)) {
        csvFileName = csvFileName();
      }

      (0, _csv_export_util2.default)(result, keys, csvFileName, separator, noAutoBOM, excludeCSVHeader);
    }
  }, {
    key: '__handleSearch__REACT_HOT_LOADER__',
    value: function __handleSearch__REACT_HOT_LOADER__(searchText) {
      // Set search field if this function being called outside
      // but it's not necessary if calling fron inside.
      if (this.refs.toolbar) {
        this.refs.toolbar.setSearchInput(searchText);
      }
      var _props$options5 = this.props.options,
          onSearchChange = _props$options5.onSearchChange,
          pageStartIndex = _props$options5.pageStartIndex;

      if (onSearchChange) {
        var colInfos = this.store.getColInfos();
        onSearchChange(searchText, colInfos, this.props.multiColumnSearch);
      }

      this.setState(function () {
        return {
          currPage: _util2.default.getFirstPage(pageStartIndex),
          reset: false
        };
      });

      if (this.allowRemote(_Const2.default.REMOTE_SEARCH)) {
        if (this.props.options.afterSearch) {
          this.props.options.afterSearch(searchText, this.store.getDataIgnoringPagination());
        }
        return;
      }

      this.store.search(searchText);

      var sortList = this.store.getSortInfo();

      if (sortList.length > 0) {
        this.store.sort();
      }

      var result = void 0;
      if (this.props.pagination) {
        var sizePerPage = this.state.sizePerPage;

        result = this.store.page(_util2.default.getNormalizedPage(pageStartIndex), sizePerPage).get();
      } else {
        result = this.store.get();
      }
      if (this.props.options.afterSearch) {
        this.props.options.afterSearch(searchText, this.store.getDataIgnoringPagination());
      }
      this.setState(function () {
        return {
          data: result,
          reset: false
        };
      });
    }
  }, {
    key: 'renderPagination',
    value: function renderPagination() {
      if (this.props.pagination) {
        var dataSize = void 0;
        if (this.allowRemote(_Const2.default.REMOTE_PAGE)) {
          dataSize = this.props.fetchInfo.dataTotalSize;
        } else {
          dataSize = this.store.getDataNum();
        }
        var options = this.props.options;

        var withFirstAndLast = options.withFirstAndLast === undefined ? true : options.withFirstAndLast;
        if (Math.ceil(dataSize / this.state.sizePerPage) <= 1 && this.props.ignoreSinglePage) return null;
        return _react2.default.createElement(
          'div',
          { className: 'react-bs-table-pagination' },
          _react2.default.createElement(_PaginationList2.default, {
            ref: 'pagination',
            withFirstAndLast: withFirstAndLast,
            alwaysShowAllBtns: options.alwaysShowAllBtns,
            currPage: this.state.currPage,
            changePage: this.handlePaginationData,
            sizePerPage: this.state.sizePerPage,
            sizePerPageList: options.sizePerPageList || _Const2.default.SIZE_PER_PAGE_LIST,
            pageStartIndex: options.pageStartIndex,
            paginationShowsTotal: options.paginationShowsTotal,
            paginationSize: options.paginationSize || _Const2.default.PAGINATION_SIZE,
            dataSize: dataSize,
            onSizePerPageList: options.onSizePerPageList,
            prePage: options.prePage || _Const2.default.PRE_PAGE,
            nextPage: options.nextPage || _Const2.default.NEXT_PAGE,
            firstPage: options.firstPage || _Const2.default.FIRST_PAGE,
            lastPage: options.lastPage || _Const2.default.LAST_PAGE,
            prePageTitle: options.prePageTitle || _Const2.default.PRE_PAGE_TITLE,
            nextPageTitle: options.nextPageTitle || _Const2.default.NEXT_PAGE_TITLE,
            firstPageTitle: options.firstPageTitle || _Const2.default.FIRST_PAGE_TITLE,
            lastPageTitle: options.lastPageTitle || _Const2.default.LAST_PAGE_TITLE,
            hideSizePerPage: options.hideSizePerPage,
            sizePerPageDropDown: options.sizePerPageDropDown,
            hidePageListOnlyOnePage: options.hidePageListOnlyOnePage,
            paginationPanel: options.paginationPanel,
            keepSizePerPageState: options.keepSizePerPageState,
            open: false })
        );
      }
      return null;
    }
  }, {
    key: 'renderToolBar',
    value: function renderToolBar() {
      var _props3 = this.props,
          exportCSV = _props3.exportCSV,
          selectRow = _props3.selectRow,
          insertRow = _props3.insertRow,
          deleteRow = _props3.deleteRow,
          search = _props3.search,
          children = _props3.children,
          keyField = _props3.keyField;

      var enableShowOnlySelected = selectRow && selectRow.showOnlySelected;
      var print = typeof this.props.options.printToolBar === 'undefined' ? true : this.props.options.printToolBar;
      if (enableShowOnlySelected || insertRow || deleteRow || search || exportCSV || this.props.options.searchPanel || this.props.options.btnGroup || this.props.options.toolBar) {
        var columns = void 0;
        if (Array.isArray(children)) {
          columns = children.filter(function (_) {
            return _ != null;
          }).map(function (column, r) {
            if (!column) return;
            var props = column.props;

            var isKey = props.isKey || keyField === props.dataField;
            return {
              isKey: isKey,
              name: props.headerText || props.children,
              field: props.dataField,
              hiddenOnInsert: props.hiddenOnInsert,
              keyValidator: props.keyValidator,
              customInsertEditor: props.customInsertEditor,
              // when you want same auto generate value and not allow edit, example ID field
              autoValue: props.autoValue || false,
              // for create editor, no params for column.editable() indicate that editor for new row
              editable: props.editable && _util2.default.isFunction(props.editable === 'function') ? props.editable() : props.editable,
              format: props.dataFormat ? function (value) {
                return props.dataFormat(value, null, props.formatExtraData, r).replace(/<.*?>/g, '');
              } : false
            };
          });
        } else {
          columns = [{
            name: children.props.headerText || children.props.children,
            field: children.props.dataField,
            editable: children.props.editable,
            customInsertEditor: children.props.customInsertEditor,
            hiddenOnInsert: children.props.hiddenOnInsert,
            keyValidator: children.props.keyValidator
          }];
        }
        return _react2.default.createElement(
          'div',
          { className: 'react-bs-table-tool-bar ' + (print ? '' : 'hidden-print') },
          _react2.default.createElement(_ToolBar2.default, {
            ref: 'toolbar',
            defaultSearch: this.props.options.defaultSearch,
            clearSearch: this.props.options.clearSearch,
            searchPosition: this.props.options.searchPosition,
            searchDelayTime: this.props.options.searchDelayTime,
            enableInsert: insertRow,
            enableDelete: deleteRow,
            enableSearch: search,
            enableExportCSV: exportCSV,
            enableShowOnlySelected: enableShowOnlySelected,
            columns: columns,
            searchPlaceholder: this.props.searchPlaceholder,
            exportCSVText: this.props.options.exportCSVText,
            insertText: this.props.options.insertText,
            deleteText: this.props.options.deleteText,
            saveText: this.props.options.saveText,
            closeText: this.props.options.closeText,
            ignoreEditable: this.props.options.ignoreEditable,
            onAddRow: this.handleAddRow,
            onDropRow: this.handleDropRow,
            onSearch: this.handleSearch,
            onExportCSV: this.handleExportCSV,
            onShowOnlySelected: this.handleShowOnlySelected,
            insertModalHeader: this.props.options.insertModalHeader,
            insertModalFooter: this.props.options.insertModalFooter,
            insertModalBody: this.props.options.insertModalBody,
            insertModal: this.props.options.insertModal,
            insertBtn: this.props.options.insertBtn,
            deleteBtn: this.props.options.deleteBtn,
            showSelectedOnlyBtn: this.props.options.showSelectedOnlyBtn,
            exportCSVBtn: this.props.options.exportCSVBtn,
            clearSearchBtn: this.props.options.clearSearchBtn,
            searchField: this.props.options.searchField,
            searchPanel: this.props.options.searchPanel,
            btnGroup: this.props.options.btnGroup,
            toolBar: this.props.options.toolBar,
            reset: this.state.reset,
            isValidKey: this.store.isValidKey })
        );
      } else {
        return null;
      }
    }
  }, {
    key: 'renderTableFilter',
    value: function renderTableFilter(columns) {
      if (this.props.columnFilter) {
        return _react2.default.createElement(_TableFilter2.default, { columns: columns,
          rowSelectType: this.props.selectRow.mode,
          onFilter: this.handleFilterData });
      } else {
        return null;
      }
    }
  }, {
    key: '___scrollTop__REACT_HOT_LOADER__',
    value: function ___scrollTop__REACT_HOT_LOADER__() {
      var scrollTop = this.props.scrollTop;

      if (scrollTop === _Const2.default.SCROLL_TOP) {
        this.refs.body.refs.container.scrollTop = 0;
      } else if (scrollTop === _Const2.default.SCROLL_BOTTOM) {
        this.refs.body.refs.container.scrollTop = this.refs.body.refs.container.scrollHeight;
      } else if (typeof scrollTop === 'number' && !isNaN(scrollTop)) {
        this.refs.body.refs.container.scrollTop = scrollTop;
      }
    }
  }, {
    key: '___scrollHeader__REACT_HOT_LOADER__',
    value: function ___scrollHeader__REACT_HOT_LOADER__(e) {
      this.refs.header.refs.container.scrollLeft = e.currentTarget.scrollLeft;
    }
  }, {
    key: '_adjustTable',
    value: function _adjustTable() {
      this._adjustHeight();
      if (!this.props.printable) {
        this._adjustHeaderWidth();
      }
    }
  }, {
    key: '_adjustHeaderWidth',
    value: function _adjustHeaderWidth() {
      var header = this.refs.header.getHeaderColGrouop();
      var tbody = this.refs.body.refs.tbody;
      var bodyHeader = this.refs.body.getHeaderColGrouop();
      var firstRow = tbody.childNodes[0];
      var isScroll = tbody.parentNode.getBoundingClientRect().height > tbody.parentNode.parentNode.getBoundingClientRect().height;

      var scrollBarWidth = isScroll ? _util2.default.getScrollBarWidth() : 0;
      if (firstRow && this.store.getDataNum()) {
        if (isScroll || this.isVerticalScroll !== isScroll) {
          var cells = firstRow.childNodes;
          for (var i = 0; i < cells.length; i++) {
            var cell = cells[i];
            var computedStyle = window.getComputedStyle(cell);
            var width = parseFloat(computedStyle.width.replace('px', ''));
            if (this.isIE) {
              var paddingLeftWidth = parseFloat(computedStyle.paddingLeft.replace('px', ''));
              var paddingRightWidth = parseFloat(computedStyle.paddingRight.replace('px', ''));
              var borderRightWidth = parseFloat(computedStyle.borderRightWidth.replace('px', ''));
              var borderLeftWidth = parseFloat(computedStyle.borderLeftWidth.replace('px', ''));
              width = width + paddingLeftWidth + paddingRightWidth + borderRightWidth + borderLeftWidth;
            }
            var lastPadding = cells.length - 1 === i ? scrollBarWidth : 0;
            if (width <= 0) {
              width = 120;
              cell.width = width + lastPadding + 'px';
            }
            var result = width + lastPadding + 'px';
            header[i].style.width = result;
            header[i].style.minWidth = result;
            if (cells.length - 1 === i) {
              bodyHeader[i].style.width = width + 'px';
              bodyHeader[i].style.minWidth = width + 'px';
            } else {
              bodyHeader[i].style.width = result;
              bodyHeader[i].style.minWidth = result;
            }
          }
        }
      } else {
        for (var _i in bodyHeader) {
          if (bodyHeader.hasOwnProperty(_i)) {
            var child = bodyHeader[_i];
            if (child.style) {
              if (child.style.width) {
                header[_i].style.width = child.style.width;
              }
              if (child.style.minWidth) {
                header[_i].style.minWidth = child.style.minWidth;
              }
            }
          }
        }
      }
      this.isVerticalScroll = isScroll;
    }
  }, {
    key: '_adjustHeight',
    value: function _adjustHeight() {
      var height = this.props.height;
      var maxHeight = this.props.maxHeight;

      if (typeof height === 'number' && !isNaN(height) || height.indexOf('%') === -1) {
        this.refs.body.refs.container.style.height = parseFloat(height, 10) - this.refs.header.refs.container.offsetHeight + 'px';
      }
      if (maxHeight) {
        maxHeight = typeof maxHeight === 'number' ? maxHeight : parseInt(maxHeight.replace('px', ''), 10);

        this.refs.body.refs.container.style.maxHeight = maxHeight - this.refs.header.refs.container.offsetHeight + 'px';
      }
    }
  }, {
    key: '_handleAfterAddingRow',
    value: function _handleAfterAddingRow(newObj, atTheBeginning) {
      var result = void 0;
      if (this.props.pagination) {
        // if pagination is enabled and inserting row at the end,
        // change page to the last page
        // otherwise, change it to the first page
        var sizePerPage = this.state.sizePerPage;


        if (atTheBeginning) {
          var pageStartIndex = this.props.options.pageStartIndex;

          result = this.store.page(_util2.default.getNormalizedPage(pageStartIndex), sizePerPage).get();
          this.setState(function () {
            return {
              data: result,
              currPage: _util2.default.getFirstPage(pageStartIndex),
              reset: false
            };
          });
        } else {
          var currLastPage = Math.ceil(this.store.getDataNum() / sizePerPage);
          result = this.store.page(currLastPage, sizePerPage).get();
          this.setState(function () {
            return {
              data: result,
              currPage: currLastPage,
              reset: false
            };
          });
        }
      } else {
        result = this.store.get();
        this.setState(function () {
          return {
            data: result,
            reset: false
          };
        });
      }

      if (this.props.options.afterInsertRow) {
        this.props.options.afterInsertRow(newObj);
      }
    }
  }]);

  return BootstrapTable;
}(_react.Component);

BootstrapTable.propTypes = {
  keyField: _react.PropTypes.string,
  height: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  maxHeight: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  data: _react.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.object]),
  remote: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.func]), // remote data, default is false
  replace: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.func]),
  scrollTop: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  striped: _react.PropTypes.bool,
  bordered: _react.PropTypes.bool,
  hover: _react.PropTypes.bool,
  condensed: _react.PropTypes.bool,
  pagination: _react.PropTypes.bool,
  printable: _react.PropTypes.bool,
  withoutTabIndex: _react.PropTypes.bool,
  keyBoardNav: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.object]),
  searchPlaceholder: _react.PropTypes.string,
  selectRow: _react.PropTypes.shape({
    mode: _react.PropTypes.oneOf([_Const2.default.ROW_SELECT_NONE, _Const2.default.ROW_SELECT_SINGLE, _Const2.default.ROW_SELECT_MULTI]),
    customComponent: _react.PropTypes.func,
    bgColor: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.func]),
    selected: _react.PropTypes.array,
    onSelect: _react.PropTypes.func,
    onSelectAll: _react.PropTypes.func,
    clickToSelect: _react.PropTypes.bool,
    hideSelectColumn: _react.PropTypes.bool,
    clickToSelectAndEditCell: _react.PropTypes.bool,
    clickToExpand: _react.PropTypes.bool,
    showOnlySelected: _react.PropTypes.bool,
    unselectable: _react.PropTypes.array,
    columnWidth: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
    onlyUnselectVisible: _react.PropTypes.bool
  }),
  cellEdit: _react.PropTypes.shape({
    mode: _react.PropTypes.string,
    blurToSave: _react.PropTypes.bool,
    beforeSaveCell: _react.PropTypes.func,
    afterSaveCell: _react.PropTypes.func,
    nonEditableRows: _react.PropTypes.func
  }),
  insertRow: _react.PropTypes.bool,
  deleteRow: _react.PropTypes.bool,
  search: _react.PropTypes.bool,
  multiColumnSearch: _react.PropTypes.bool,
  strictSearch: _react.PropTypes.bool,
  columnFilter: _react.PropTypes.bool,
  trClassName: _react.PropTypes.any,
  trStyle: _react.PropTypes.any,
  tableStyle: _react.PropTypes.object,
  containerStyle: _react.PropTypes.object,
  headerStyle: _react.PropTypes.object,
  bodyStyle: _react.PropTypes.object,
  containerClass: _react.PropTypes.string,
  tableContainerClass: _react.PropTypes.string,
  headerContainerClass: _react.PropTypes.string,
  bodyContainerClass: _react.PropTypes.string,
  tableHeaderClass: _react.PropTypes.string,
  tableBodyClass: _react.PropTypes.string,
  options: _react.PropTypes.shape({
    clearSearch: _react.PropTypes.bool,
    sortName: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.array]),
    sortOrder: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.array]),
    defaultSortName: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.array]),
    defaultSortOrder: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.array]),
    sortIndicator: _react.PropTypes.bool,
    afterTableComplete: _react.PropTypes.func,
    afterDeleteRow: _react.PropTypes.func,
    afterInsertRow: _react.PropTypes.func,
    afterSearch: _react.PropTypes.func,
    afterColumnFilter: _react.PropTypes.func,
    onRowClick: _react.PropTypes.func,
    onRowDoubleClick: _react.PropTypes.func,
    page: _react.PropTypes.number,
    pageStartIndex: _react.PropTypes.number,
    paginationShowsTotal: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.func]),
    sizePerPageList: _react.PropTypes.array,
    sizePerPage: _react.PropTypes.number,
    paginationSize: _react.PropTypes.number,
    paginationPosition: _react.PropTypes.oneOf([_Const2.default.PAGINATION_POS_TOP, _Const2.default.PAGINATION_POS_BOTTOM, _Const2.default.PAGINATION_POS_BOTH]),
    hideSizePerPage: _react.PropTypes.bool,
    hidePageListOnlyOnePage: _react.PropTypes.bool,
    alwaysShowAllBtns: _react.PropTypes.bool,
    withFirstAndLast: _react.PropTypes.bool,
    keepSizePerPageState: _react.PropTypes.bool,
    onSortChange: _react.PropTypes.func,
    onPageChange: _react.PropTypes.func,
    onSizePerPageList: _react.PropTypes.func,
    onFilterChange: _react2.default.PropTypes.func,
    onSearchChange: _react2.default.PropTypes.func,
    onAddRow: _react2.default.PropTypes.func,
    onExportToCSV: _react2.default.PropTypes.func,
    onCellEdit: _react2.default.PropTypes.func,
    noDataText: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.object]),
    withoutNoDataText: _react2.default.PropTypes.bool,
    handleConfirmDeleteRow: _react.PropTypes.func,
    prePage: _react.PropTypes.any,
    nextPage: _react.PropTypes.any,
    firstPage: _react.PropTypes.any,
    lastPage: _react.PropTypes.any,
    prePageTitle: _react.PropTypes.string,
    nextPageTitle: _react.PropTypes.string,
    firstPageTitle: _react.PropTypes.string,
    lastPageTitle: _react.PropTypes.string,
    searchDelayTime: _react.PropTypes.number,
    excludeCSVHeader: _react.PropTypes.bool,
    exportCSVText: _react.PropTypes.string,
    exportCSVSeparator: _react.PropTypes.string,
    insertText: _react.PropTypes.string,
    deleteText: _react.PropTypes.string,
    saveText: _react.PropTypes.string,
    closeText: _react.PropTypes.string,
    ignoreEditable: _react.PropTypes.bool,
    defaultSearch: _react.PropTypes.string,
    insertModalHeader: _react.PropTypes.func,
    insertModalBody: _react.PropTypes.func,
    insertModalFooter: _react.PropTypes.func,
    insertModal: _react.PropTypes.func,
    insertBtn: _react.PropTypes.func,
    deleteBtn: _react.PropTypes.func,
    showSelectedOnlyBtn: _react.PropTypes.func,
    exportCSVBtn: _react.PropTypes.func,
    clearSearchBtn: _react.PropTypes.func,
    searchField: _react.PropTypes.func,
    searchPanel: _react.PropTypes.func,
    btnGroup: _react.PropTypes.func,
    toolBar: _react.PropTypes.func,
    sizePerPageDropDown: _react.PropTypes.func,
    paginationPanel: _react.PropTypes.func,
    searchPosition: _react.PropTypes.string,
    expandRowBgColor: _react.PropTypes.string,
    expandBy: _react.PropTypes.string,
    expanding: _react.PropTypes.array,
    onExpand: _react.PropTypes.func,
    onlyOneExpanding: _react.PropTypes.bool,
    expandBodyClass: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.func]),
    expandParentClass: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.func]),
    beforeShowError: _react.PropTypes.func,
    printToolBar: _react.PropTypes.bool,
    noAutoBOM: _react.PropTypes.bool
  }),
  fetchInfo: _react.PropTypes.shape({
    dataTotalSize: _react.PropTypes.number
  }),
  exportCSV: _react.PropTypes.bool,
  csvFileName: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.func]),
  ignoreSinglePage: _react.PropTypes.bool,
  expandableRow: _react.PropTypes.func,
  expandComponent: _react.PropTypes.func,
  expandColumnOptions: _react.PropTypes.shape({
    columnWidth: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
    expandColumnVisible: _react.PropTypes.bool,
    expandColumnComponent: _react.PropTypes.func,
    expandColumnBeforeSelectColumn: _react.PropTypes.bool
  })
};
BootstrapTable.defaultProps = {
  replace: false,
  scrollTop: undefined,
  expandComponent: undefined,
  expandableRow: undefined,
  expandColumnOptions: {
    expandColumnVisible: false,
    expandColumnComponent: undefined,
    expandColumnBeforeSelectColumn: true
  },
  height: '100%',
  maxHeight: undefined,
  striped: false,
  bordered: true,
  hover: false,
  condensed: false,
  pagination: false,
  printable: false,
  withoutTabIndex: false,
  keyBoardNav: false,
  searchPlaceholder: undefined,
  selectRow: {
    mode: _Const2.default.ROW_SELECT_NONE,
    bgColor: _Const2.default.ROW_SELECT_BG_COLOR,
    selected: [],
    onSelect: undefined,
    onSelectAll: undefined,
    clickToSelect: false,
    hideSelectColumn: false,
    clickToSelectAndEditCell: false,
    clickToExpand: false,
    showOnlySelected: false,
    unselectable: [],
    customComponent: undefined,
    onlyUnselectVisible: false
  },
  cellEdit: {
    mode: _Const2.default.CELL_EDIT_NONE,
    blurToSave: false,
    beforeSaveCell: undefined,
    afterSaveCell: undefined,
    nonEditableRows: undefined
  },
  insertRow: false,
  deleteRow: false,
  search: false,
  multiColumnSearch: false,
  strictSearch: undefined,
  multiColumnSort: 1,
  columnFilter: false,
  trClassName: '',
  trStyle: undefined,
  tableStyle: undefined,
  containerStyle: undefined,
  headerStyle: undefined,
  bodyStyle: undefined,
  containerClass: null,
  tableContainerClass: null,
  headerContainerClass: null,
  bodyContainerClass: null,
  tableHeaderClass: null,
  tableBodyClass: null,
  options: {
    clearSearch: false,
    sortName: undefined,
    sortOrder: undefined,
    defaultSortName: undefined,
    defaultSortOrder: undefined,
    sortIndicator: true,
    afterTableComplete: undefined,
    afterDeleteRow: undefined,
    afterInsertRow: undefined,
    afterSearch: undefined,
    afterColumnFilter: undefined,
    onRowClick: undefined,
    onRowDoubleClick: undefined,
    onMouseLeave: undefined,
    onMouseEnter: undefined,
    onRowMouseOut: undefined,
    onRowMouseOver: undefined,
    page: undefined,
    paginationShowsTotal: false,
    sizePerPageList: _Const2.default.SIZE_PER_PAGE_LIST,
    sizePerPage: undefined,
    paginationSize: _Const2.default.PAGINATION_SIZE,
    paginationPosition: _Const2.default.PAGINATION_POS_BOTTOM,
    hideSizePerPage: false,
    hidePageListOnlyOnePage: false,
    alwaysShowAllBtns: false,
    withFirstAndLast: true,
    keepSizePerPageState: false,
    onSizePerPageList: undefined,
    noDataText: undefined,
    withoutNoDataText: false,
    handleConfirmDeleteRow: undefined,
    prePage: _Const2.default.PRE_PAGE,
    nextPage: _Const2.default.NEXT_PAGE,
    firstPage: _Const2.default.FIRST_PAGE,
    lastPage: _Const2.default.LAST_PAGE,
    prePageTitle: _Const2.default.PRE_PAGE_TITLE,
    nextPageTitle: _Const2.default.NEXT_PAGE_TITLE,
    firstPageTitle: _Const2.default.FIRST_PAGE_TITLE,
    lastPageTitle: _Const2.default.LAST_PAGE_TITLE,
    pageStartIndex: 1,
    searchDelayTime: undefined,
    excludeCSVHeader: false,
    exportCSVText: _Const2.default.EXPORT_CSV_TEXT,
    exportCSVSeparator: _Const2.default.DEFAULT_CSV_SEPARATOR,
    insertText: _Const2.default.INSERT_BTN_TEXT,
    deleteText: _Const2.default.DELETE_BTN_TEXT,
    saveText: _Const2.default.SAVE_BTN_TEXT,
    closeText: _Const2.default.CLOSE_BTN_TEXT,
    ignoreEditable: false,
    defaultSearch: '',
    insertModalHeader: undefined,
    insertModalBody: undefined,
    insertModalFooter: undefined,
    insertModal: undefined,
    insertBtn: undefined,
    deleteBtn: undefined,
    showSelectedOnlyBtn: undefined,
    exportCSVBtn: undefined,
    clearSearchBtn: undefined,
    searchField: undefined,
    searchPanel: undefined,
    btnGroup: undefined,
    toolBar: undefined,
    sizePerPageDropDown: undefined,
    paginationPanel: undefined,
    searchPosition: 'right',
    expandRowBgColor: undefined,
    expandBy: _Const2.default.EXPAND_BY_ROW,
    expanding: [],
    onExpand: undefined,
    onlyOneExpanding: false,
    expandBodyClass: null,
    expandParentClass: null,
    beforeShowError: undefined,
    printToolBar: true,
    noAutoBOM: true
  },
  fetchInfo: {
    dataTotalSize: 0
  },
  exportCSV: false,
  csvFileName: 'spreadsheet.csv',
  ignoreSinglePage: false
};

var _default = BootstrapTable;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(BootstrapTable, 'BootstrapTable', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/BootstrapTable.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/BootstrapTable.js');
}();

;

/***/ }),

/***/ 1448:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint max-len: 0 */
/* eslint no-nested-ternary: 0 */


var ExpandComponent = function (_Component) {
  _inherits(ExpandComponent, _Component);

  function ExpandComponent() {
    _classCallCheck(this, ExpandComponent);

    return _possibleConstructorReturn(this, (ExpandComponent.__proto__ || Object.getPrototypeOf(ExpandComponent)).apply(this, arguments));
  }

  _createClass(ExpandComponent, [{
    key: 'render',
    value: function render() {
      var className = this.props.className;

      var trCss = {
        style: {
          backgroundColor: this.props.bgColor
        },
        className: (0, _classnames2.default)(className)
      };
      return _react2.default.createElement(
        'tr',
        _extends({ hidden: this.props.hidden, width: this.props.width }, trCss),
        _react2.default.createElement(
          'td',
          { colSpan: this.props.colSpan },
          this.props.children
        )
      );
    }
  }]);

  return ExpandComponent;
}(_react.Component);

var _default = ExpandComponent;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ExpandComponent, 'ExpandComponent', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/ExpandComponent.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/ExpandComponent.js');
}();

;

/***/ }),

/***/ 1449:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ExpandRowHeaderColumn = function (_Component) {
  _inherits(ExpandRowHeaderColumn, _Component);

  function ExpandRowHeaderColumn() {
    _classCallCheck(this, ExpandRowHeaderColumn);

    return _possibleConstructorReturn(this, (ExpandRowHeaderColumn.__proto__ || Object.getPrototypeOf(ExpandRowHeaderColumn)).apply(this, arguments));
  }

  _createClass(ExpandRowHeaderColumn, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'th',
        { rowSpan: this.props.rowCount, style: { textAlign: 'center' },
          className: 'react-bs-table-expand-cell',
          'data-is-only-head': false },
        this.props.children
      );
    }
  }]);

  return ExpandRowHeaderColumn;
}(_react.Component);

ExpandRowHeaderColumn.propTypes = {
  children: _react.PropTypes.node,
  rowCount: _react.PropTypes.number
};
var _default = ExpandRowHeaderColumn;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ExpandRowHeaderColumn, 'ExpandRowHeaderColumn', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/ExpandRowHeaderColumn.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/ExpandRowHeaderColumn.js');
}();

;

/***/ }),

/***/ 1450:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Filter = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Const = __webpack_require__(1029);

var _Const2 = _interopRequireDefault(_Const);

var _events = __webpack_require__(1416);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Filter = exports.Filter = function (_EventEmitter) {
  _inherits(Filter, _EventEmitter);

  function Filter(data) {
    _classCallCheck(this, Filter);

    var _this = _possibleConstructorReturn(this, (Filter.__proto__ || Object.getPrototypeOf(Filter)).call(this, data));

    _this.currentFilter = {};
    return _this;
  }

  _createClass(Filter, [{
    key: 'handleFilter',
    value: function handleFilter(dataField, value, type, filterObj) {
      var filterType = type || _Const2.default.FILTER_TYPE.CUSTOM;

      var props = {
        cond: filterObj.condition // Only for select and text filter
      };

      if (value !== null && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
        // value of the filter is an object
        var hasValue = true;
        for (var prop in value) {
          if (!value[prop] || value[prop] === '') {
            hasValue = false;
            break;
          }
        }
        // if one of the object properties is undefined or empty, we remove the filter
        if (hasValue) {
          this.currentFilter[dataField] = { value: value, type: filterType, props: props };
        } else {
          delete this.currentFilter[dataField];
        }
      } else if (!value || value.trim() === '') {
        delete this.currentFilter[dataField];
      } else {
        this.currentFilter[dataField] = { value: value.trim(), type: filterType, props: props };
      }
      this.emit('onFilterChange', this.currentFilter);
    }
  }]);

  return Filter;
}(_events.EventEmitter);

;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Filter, 'Filter', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/Filter.js');
}();

;

/***/ }),

/***/ 1451:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SelectRowHeaderColumn = function (_Component) {
  _inherits(SelectRowHeaderColumn, _Component);

  function SelectRowHeaderColumn() {
    _classCallCheck(this, SelectRowHeaderColumn);

    return _possibleConstructorReturn(this, (SelectRowHeaderColumn.__proto__ || Object.getPrototypeOf(SelectRowHeaderColumn)).apply(this, arguments));
  }

  _createClass(SelectRowHeaderColumn, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'th',
        { rowSpan: this.props.rowCount, style: { textAlign: 'center' },
          'data-is-only-head': false },
        this.props.children
      );
    }
  }]);

  return SelectRowHeaderColumn;
}(_react.Component);

SelectRowHeaderColumn.propTypes = {
  children: _react.PropTypes.node,
  rowCount: _react.PropTypes.number
};
var _default = SelectRowHeaderColumn;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(SelectRowHeaderColumn, 'SelectRowHeaderColumn', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/SelectRowHeaderColumn.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/SelectRowHeaderColumn.js');
}();

;

/***/ }),

/***/ 1452:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _util = __webpack_require__(1066);

var _util2 = _interopRequireDefault(_util);

var _Const = __webpack_require__(1029);

var _Const2 = _interopRequireDefault(_Const);

var _TableRow = __webpack_require__(1457);

var _TableRow2 = _interopRequireDefault(_TableRow);

var _TableColumn = __webpack_require__(1453);

var _TableColumn2 = _interopRequireDefault(_TableColumn);

var _TableEditColumn = __webpack_require__(1454);

var _TableEditColumn2 = _interopRequireDefault(_TableEditColumn);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _ExpandComponent = __webpack_require__(1448);

var _ExpandComponent2 = _interopRequireDefault(_ExpandComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TableBody = function (_Component) {
  _inherits(TableBody, _Component);

  function TableBody(props) {
    _classCallCheck(this, TableBody);

    var _this = _possibleConstructorReturn(this, (TableBody.__proto__ || Object.getPrototypeOf(TableBody)).call(this, props));

    _this.handleCellKeyDown = function () {
      return _this.__handleCellKeyDown__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleRowMouseOut = function () {
      return _this.__handleRowMouseOut__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleRowMouseOver = function () {
      return _this.__handleRowMouseOver__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleRowClick = function () {
      return _this.__handleRowClick__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleRowDoubleClick = function () {
      return _this.__handleRowDoubleClick__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleSelectRow = function () {
      return _this.__handleSelectRow__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleSelectRowColumChange = function () {
      return _this.__handleSelectRowColumChange__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleClickCell = function () {
      return _this.__handleClickCell__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleEditCell = function () {
      return _this.__handleEditCell__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.nextEditableCell = function () {
      return _this.__nextEditableCell__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleCompleteEditCell = function () {
      return _this.__handleCompleteEditCell__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.cancelEditCell = function () {
      return _this.__cancelEditCell__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleClickonSelectColumn = function () {
      return _this.__handleClickonSelectColumn__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.getHeaderColGrouop = function () {
      return _this.__getHeaderColGrouop__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.state = {
      currEditCell: null
    };
    return _this;
  }

  _createClass(TableBody, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          cellEdit = _props.cellEdit,
          beforeShowError = _props.beforeShowError,
          x = _props.x,
          y = _props.y,
          keyBoardNav = _props.keyBoardNav,
          trStyle = _props.trStyle;

      var tableClasses = (0, _classnames2.default)('table', {
        'table-striped': this.props.striped,
        'table-bordered': this.props.bordered,
        'table-hover': this.props.hover,
        'table-condensed': this.props.condensed
      }, this.props.tableBodyClass);

      var noneditableRows = cellEdit.nonEditableRows && cellEdit.nonEditableRows() || [];
      var unselectable = this.props.selectRow.unselectable || [];
      var isSelectRowDefined = this._isSelectRowDefined();
      var tableHeader = _util2.default.renderColGroup(this.props.columns, this.props.selectRow, this.props.expandColumnOptions);
      var inputType = this.props.selectRow.mode === _Const2.default.ROW_SELECT_SINGLE ? 'radio' : 'checkbox';
      var CustomComponent = this.props.selectRow.customComponent;
      var enableKeyBoardNav = keyBoardNav === true || (typeof keyBoardNav === 'undefined' ? 'undefined' : _typeof(keyBoardNav)) === 'object';
      var customEditAndNavStyle = (typeof keyBoardNav === 'undefined' ? 'undefined' : _typeof(keyBoardNav)) === 'object' ? keyBoardNav.customStyleOnEditCell : null;
      var customNavStyle = (typeof keyBoardNav === 'undefined' ? 'undefined' : _typeof(keyBoardNav)) === 'object' ? keyBoardNav.customStyle : null;
      var ExpandColumnCustomComponent = this.props.expandColumnOptions.expandColumnComponent;
      var expandColSpan = this.props.columns.filter(function (col) {
        return col && !col.hidden;
      }).length;
      if (isSelectRowDefined && !this.props.selectRow.hideSelectColumn) {
        expandColSpan += 1;
      }
      var tabIndex = 1;
      if (this.props.expandColumnOptions.expandColumnVisible) {
        expandColSpan += 1;
      }

      var tableRows = this.props.data.map(function (data, r) {
        var tableColumns = this.props.columns.filter(function (_) {
          return _ != null;
        }).map(function (column, i) {
          var fieldValue = data[column.name];
          var isFocusCell = r === y && i === x;
          if (column.name !== this.props.keyField && // Key field can't be edit
          column.editable && // column is editable? default is true, user can set it false
          column.editable.readOnly !== true && this.state.currEditCell !== null && this.state.currEditCell.rid === r && this.state.currEditCell.cid === i && noneditableRows.indexOf(data[this.props.keyField]) === -1) {
            var editable = column.editable;
            var format = column.format ? function (value) {
              return column.format(value, data, column.formatExtraData, r).replace(/<.*?>/g, '');
            } : false;
            if (_util2.default.isFunction(column.editable)) {
              editable = column.editable(fieldValue, data, r, i);
            }

            return _react2.default.createElement(_TableEditColumn2.default, {
              completeEdit: this.handleCompleteEditCell
              // add by bluespring for column editor customize
              , editable: editable,
              customEditor: column.customEditor,
              format: column.format ? format : false,
              key: i,
              blurToSave: cellEdit.blurToSave,
              onTab: this.handleEditCell,
              rowIndex: r,
              colIndex: i,
              row: data,
              fieldValue: fieldValue,
              className: column.editClassName,
              invalidColumnClassName: column.invalidEditColumnClassName,
              beforeShowError: beforeShowError,
              isFocus: isFocusCell,
              customStyleWithNav: customEditAndNavStyle });
          } else {
            // add by bluespring for className customize
            var columnChild = fieldValue && fieldValue.toString();
            var columnTitle = null;
            var tdClassName = column.className;
            if (_util2.default.isFunction(column.className)) {
              tdClassName = column.className(fieldValue, data, r, i);
            }

            if (typeof column.format !== 'undefined') {
              var formattedValue = column.format(fieldValue, data, column.formatExtraData, r);
              if (!_react2.default.isValidElement(formattedValue)) {
                columnChild = _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: formattedValue } });
              } else {
                columnChild = formattedValue;
                columnTitle = column.columnTitle && formattedValue ? formattedValue.toString() : null;
              }
            } else {
              columnTitle = column.columnTitle && fieldValue ? fieldValue.toString() : null;
            }
            return _react2.default.createElement(
              _TableColumn2.default,
              { key: i,
                rIndex: r,
                dataAlign: column.align,
                className: tdClassName,
                columnTitle: columnTitle,
                cellEdit: cellEdit,
                hidden: column.hidden,
                onEdit: this.handleEditCell,
                width: column.width,
                onClick: this.handleClickCell,
                attrs: column.attrs,
                style: column.style,
                tabIndex: tabIndex++ + '',
                isFocus: isFocusCell,
                keyBoardNav: enableKeyBoardNav,
                onKeyDown: this.handleCellKeyDown,
                customNavStyle: customNavStyle,
                row: data,
                withoutTabIndex: this.props.withoutTabIndex },
              columnChild
            );
          }
        }, this);
        var key = data[this.props.keyField];
        var disable = unselectable.indexOf(key) !== -1;
        var selected = this.props.selectedRowKeys.indexOf(key) !== -1;
        var selectRowColumn = isSelectRowDefined && !this.props.selectRow.hideSelectColumn ? this.renderSelectRowColumn(selected, inputType, disable, CustomComponent, r, data) : null;
        var expandedRowColumn = this.renderExpandRowColumn(this.props.expandableRow && this.props.expandableRow(data), this.props.expanding.indexOf(key) > -1, ExpandColumnCustomComponent, r, data);
        var haveExpandContent = this.props.expandableRow && this.props.expandableRow(data);
        var isExpanding = haveExpandContent && this.props.expanding.indexOf(key) > -1;

        // add by bluespring for className customize
        var trClassName = this.props.trClassName;
        if (_util2.default.isFunction(this.props.trClassName)) {
          trClassName = this.props.trClassName(data, r);
        }
        if (isExpanding && this.props.expandParentClass) {
          trClassName += _util2.default.isFunction(this.props.expandParentClass) ? this.props.expandParentClass(data, r) : this.props.expandParentClass;
        }
        var result = [_react2.default.createElement(
          _TableRow2.default,
          { isSelected: selected, key: key, className: trClassName,
            index: r,
            row: data,
            selectRow: isSelectRowDefined ? this.props.selectRow : undefined,
            enableCellEdit: cellEdit.mode !== _Const2.default.CELL_EDIT_NONE,
            onRowClick: this.handleRowClick,
            onRowDoubleClick: this.handleRowDoubleClick,
            onRowMouseOver: this.handleRowMouseOver,
            onRowMouseOut: this.handleRowMouseOut,
            onSelectRow: this.handleSelectRow,
            onExpandRow: this.handleClickCell,
            unselectableRow: disable,
            style: trStyle },
          this.props.expandColumnOptions.expandColumnVisible && this.props.expandColumnOptions.expandColumnBeforeSelectColumn && expandedRowColumn,
          selectRowColumn,
          this.props.expandColumnOptions.expandColumnVisible && !this.props.expandColumnOptions.expandColumnBeforeSelectColumn && expandedRowColumn,
          tableColumns
        )];

        if (haveExpandContent) {
          var expandBodyClass = _util2.default.isFunction(this.props.expandBodyClass) ? this.props.expandBodyClass(data, r, isExpanding) : this.props.expandBodyClass;
          result.push(_react2.default.createElement(
            _ExpandComponent2.default,
            {
              key: key + '-expand',
              row: data,
              className: expandBodyClass,
              bgColor: this.props.expandRowBgColor || this.props.selectRow.bgColor || undefined,
              hidden: !isExpanding,
              colSpan: expandColSpan,
              width: "100%" },
            this.props.expandComponent(data)
          ));
        }
        return result;
      }, this);

      if (tableRows.length === 0 && !this.props.withoutNoDataText) {
        var colSpan = this.props.columns.filter(function (c) {
          return !c.hidden;
        }).length + (isSelectRowDefined && !this.props.selectRow.hideSelectColumn ? 1 : 0) + (this.props.expandColumnOptions.expandColumnVisible ? 1 : 0);
        tableRows = [_react2.default.createElement(
          _TableRow2.default,
          { key: '##table-empty##', style: trStyle },
          _react2.default.createElement(
            'td',
            { 'data-toggle': 'collapse',
              colSpan: colSpan,
              className: 'react-bs-table-no-data' },
            this.props.noDataText || _Const2.default.NO_DATA_TEXT
          )
        )];
      }

      return _react2.default.createElement(
        'div',
        { ref: 'container',
          className: (0, _classnames2.default)('react-bs-container-body', this.props.bodyContainerClass),
          style: this.props.style },
        _react2.default.createElement(
          'table',
          { className: tableClasses },
          _react2.default.cloneElement(tableHeader, { ref: 'header' }),
          _react2.default.createElement(
            'tbody',
            { ref: 'tbody' },
            tableRows
          )
        )
      );
    }
  }, {
    key: '__handleCellKeyDown__REACT_HOT_LOADER__',
    value: function __handleCellKeyDown__REACT_HOT_LOADER__(e, lastEditCell) {
      e.preventDefault();
      var _props2 = this.props,
          keyBoardNav = _props2.keyBoardNav,
          onNavigateCell = _props2.onNavigateCell,
          cellEdit = _props2.cellEdit;

      var offset = void 0;
      if (e.keyCode === 37) {
        offset = { x: -1, y: 0 };
      } else if (e.keyCode === 38) {
        offset = { x: 0, y: -1 };
      } else if (e.keyCode === 39 || e.keyCode === 9) {
        offset = { x: 1, y: 0 };
        if (e.keyCode === 9 && lastEditCell) {
          offset = _extends({}, offset, {
            lastEditCell: lastEditCell
          });
        }
      } else if (e.keyCode === 40) {
        offset = { x: 0, y: 1 };
      } else if (e.keyCode === 13) {
        var enterToEdit = (typeof keyBoardNav === 'undefined' ? 'undefined' : _typeof(keyBoardNav)) === 'object' ? keyBoardNav.enterToEdit : false;
        var enterToExpand = (typeof keyBoardNav === 'undefined' ? 'undefined' : _typeof(keyBoardNav)) === 'object' ? keyBoardNav.enterToExpand : false;

        if (cellEdit && enterToEdit) {
          this.handleEditCell(e.target.parentElement.rowIndex + 1, e.currentTarget.cellIndex, '', e);
        }

        if (enterToExpand) {
          this.handleClickCell(this.props.y + 1, this.props.x);
        }
      }
      if (offset && keyBoardNav) {
        onNavigateCell(offset);
      }
    }
  }, {
    key: '__handleRowMouseOut__REACT_HOT_LOADER__',
    value: function __handleRowMouseOut__REACT_HOT_LOADER__(rowIndex, event) {
      var targetRow = this.props.data[rowIndex];
      this.props.onRowMouseOut(targetRow, event);
    }
  }, {
    key: '__handleRowMouseOver__REACT_HOT_LOADER__',
    value: function __handleRowMouseOver__REACT_HOT_LOADER__(rowIndex, event) {
      var targetRow = this.props.data[rowIndex];
      this.props.onRowMouseOver(targetRow, event);
    }
  }, {
    key: '__handleRowClick__REACT_HOT_LOADER__',
    value: function __handleRowClick__REACT_HOT_LOADER__(rowIndex, cellIndex) {
      var onRowClick = this.props.onRowClick;

      if (this._isSelectRowDefined()) cellIndex--;
      if (this._isExpandColumnVisible()) cellIndex--;
      onRowClick(this.props.data[rowIndex - 1], rowIndex - 1, cellIndex);
    }
  }, {
    key: '__handleRowDoubleClick__REACT_HOT_LOADER__',
    value: function __handleRowDoubleClick__REACT_HOT_LOADER__(rowIndex) {
      var onRowDoubleClick = this.props.onRowDoubleClick;

      var targetRow = this.props.data[rowIndex];
      onRowDoubleClick(targetRow);
    }
  }, {
    key: '__handleSelectRow__REACT_HOT_LOADER__',
    value: function __handleSelectRow__REACT_HOT_LOADER__(rowIndex, isSelected, e) {
      var selectedRow = void 0;
      var _props3 = this.props,
          data = _props3.data,
          onSelectRow = _props3.onSelectRow;

      data.forEach(function (row, i) {
        if (i === rowIndex - 1) {
          selectedRow = row;
          return false;
        }
      });
      onSelectRow(selectedRow, isSelected, e, rowIndex - 1);
    }
  }, {
    key: '__handleSelectRowColumChange__REACT_HOT_LOADER__',
    value: function __handleSelectRowColumChange__REACT_HOT_LOADER__(e, rowIndex) {
      if (!this.props.selectRow.clickToSelect || !this.props.selectRow.clickToSelectAndEditCell) {
        this.handleSelectRow(rowIndex + 1, e.currentTarget.checked, e);
      }
    }
  }, {
    key: '__handleClickCell__REACT_HOT_LOADER__',
    value: function __handleClickCell__REACT_HOT_LOADER__(rowIndex) {
      var columnIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;
      var _props4 = this.props,
          columns = _props4.columns,
          keyField = _props4.keyField,
          expandBy = _props4.expandBy,
          expandableRow = _props4.expandableRow,
          _props4$selectRow = _props4.selectRow,
          clickToExpand = _props4$selectRow.clickToExpand,
          hideSelectColumn = _props4$selectRow.hideSelectColumn,
          onlyOneExpanding = _props4.onlyOneExpanding;

      var selectRowAndExpand = this._isSelectRowDefined() && !clickToExpand ? false : true;
      columnIndex = this._isSelectRowDefined() && !hideSelectColumn ? columnIndex - 1 : columnIndex;
      columnIndex = this._isExpandColumnVisible() ? columnIndex - 1 : columnIndex;
      if (expandableRow && selectRowAndExpand && (expandBy === _Const2.default.EXPAND_BY_ROW ||
      /* Below will allow expanding trigger by clicking on selection column
      if configure as expanding by column */
      expandBy === _Const2.default.EXPAND_BY_COL && columnIndex < 0 || expandBy === _Const2.default.EXPAND_BY_COL && columns[columnIndex].expandable)) {
        var expanding = this.props.expanding;
        var rowKey = this.props.data[rowIndex - 1][keyField];
        var isRowExpanding = expanding.indexOf(rowKey) > -1;

        if (isRowExpanding) {
          // collapse
          expanding = expanding.filter(function (k) {
            return k !== rowKey;
          });
        } else {
          // expand
          if (onlyOneExpanding) expanding = [rowKey];else expanding.push(rowKey);
        }
        this.props.onExpand(expanding, rowKey, isRowExpanding);
      }
    }
  }, {
    key: '__handleEditCell__REACT_HOT_LOADER__',
    value: function __handleEditCell__REACT_HOT_LOADER__(rowIndex, columnIndex, action, e) {
      var selectRow = this.props.selectRow;

      var defineSelectRow = this._isSelectRowDefined();
      var expandColumnVisible = this._isExpandColumnVisible();
      if (defineSelectRow) {
        columnIndex--;
        if (selectRow.hideSelectColumn) columnIndex++;
      }
      if (expandColumnVisible) {
        columnIndex--;
      }
      rowIndex--;

      if (action === 'tab') {
        if (defineSelectRow && !selectRow.hideSelectColumn) columnIndex++;
        if (expandColumnVisible) columnIndex++;
        this.handleCompleteEditCell(e.target.value, rowIndex, columnIndex - 1);
        if (columnIndex >= this.props.columns.length) {
          this.handleCellKeyDown(e, true);
        } else {
          this.handleCellKeyDown(e);
        }

        var _nextEditableCell = this.nextEditableCell(rowIndex, columnIndex),
            nextRIndex = _nextEditableCell.nextRIndex,
            nextCIndex = _nextEditableCell.nextCIndex;

        rowIndex = nextRIndex;
        columnIndex = nextCIndex;
      }

      var stateObj = {
        currEditCell: {
          rid: rowIndex,
          cid: columnIndex
        }
      };

      if (this.props.selectRow.clickToSelectAndEditCell && this.props.cellEdit.mode !== _Const2.default.CELL_EDIT_DBCLICK) {
        var selected = this.props.selectedRowKeys.indexOf(this.props.data[rowIndex][this.props.keyField]) !== -1;
        this.handleSelectRow(rowIndex + 1, !selected, e);
      }
      this.setState(function () {
        return stateObj;
      });
    }
  }, {
    key: '__nextEditableCell__REACT_HOT_LOADER__',
    value: function __nextEditableCell__REACT_HOT_LOADER__(rIndex, cIndex) {
      var keyField = this.props.keyField;

      var nextRIndex = rIndex;
      var nextCIndex = cIndex;
      var row = void 0;
      var column = void 0;
      do {
        if (nextCIndex >= this.props.columns.length) {
          nextRIndex++;
          nextCIndex = 0;
        }
        row = this.props.data[nextRIndex];
        column = this.props.columns[nextCIndex];
        if (!row) break;
        var editable = column.editable;
        if (_util2.default.isFunction(column.editable)) {
          editable = column.editable(column, row, nextRIndex, nextCIndex);
        }
        if (editable && editable.readOnly !== true && !column.hidden && keyField !== column.name) {
          break;
        } else {
          nextCIndex++;
        }
      } while (row);
      return { nextRIndex: nextRIndex, nextCIndex: nextCIndex };
    }
  }, {
    key: '__handleCompleteEditCell__REACT_HOT_LOADER__',
    value: function __handleCompleteEditCell__REACT_HOT_LOADER__(newVal, rowIndex, columnIndex) {
      if (newVal !== null) {
        var result = this.props.onEditCell(newVal, rowIndex, columnIndex);
        if (result !== _Const2.default.AWAIT_BEFORE_CELL_EDIT) {
          this.setState(function () {
            return { currEditCell: null };
          });
        }
      } else {
        this.setState(function () {
          return { currEditCell: null };
        });
      }
    }
  }, {
    key: '__cancelEditCell__REACT_HOT_LOADER__',
    value: function __cancelEditCell__REACT_HOT_LOADER__() {
      this.setState(function () {
        return { currEditCell: null };
      });
    }
  }, {
    key: '__handleClickonSelectColumn__REACT_HOT_LOADER__',
    value: function __handleClickonSelectColumn__REACT_HOT_LOADER__(e, isSelect, rowIndex, row) {
      e.stopPropagation();
      if (e.target.tagName === 'TD' && (this.props.selectRow.clickToSelect || this.props.selectRow.clickToSelectAndEditCell)) {
        var unselectable = this.props.selectRow.unselectable || [];
        if (unselectable.indexOf(row[this.props.keyField]) === -1) {
          this.handleSelectRow(rowIndex + 1, isSelect, e);
          this.handleClickCell(rowIndex + 1);
        }
      }
    }
  }, {
    key: 'renderSelectRowColumn',
    value: function renderSelectRowColumn(selected, inputType, disabled) {
      var CustomComponent = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

      var _this2 = this;

      var rowIndex = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
      var row = arguments[5];

      return _react2.default.createElement(
        'td',
        { onClick: function onClick(e) {
            _this2.handleClickonSelectColumn(e, !selected, rowIndex, row);
          }, style: { textAlign: 'center' } },
        CustomComponent ? _react2.default.createElement(CustomComponent, { type: inputType, checked: selected, disabled: disabled,
          rowIndex: rowIndex,
          onChange: function onChange(e) {
            return _this2.handleSelectRowColumChange(e, rowIndex);
          } }) : _react2.default.createElement('input', { type: inputType, checked: selected, disabled: disabled,
          onChange: function onChange(e) {
            return _this2.handleSelectRowColumChange(e, rowIndex);
          } })
      );
    }
  }, {
    key: 'renderExpandRowColumn',
    value: function renderExpandRowColumn(isExpandableRow, isExpanded, CustomComponent) {
      var _this3 = this;

      var rowIndex = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

      var content = null;
      if (CustomComponent) {
        content = _react2.default.createElement(CustomComponent, { isExpandableRow: isExpandableRow, isExpanded: isExpanded });
      } else if (isExpandableRow) {
        content = isExpanded ? _react2.default.createElement('span', { className: 'glyphicon glyphicon-minus' }) : _react2.default.createElement('span', { className: 'glyphicon glyphicon-plus' });
      } else {
        content = ' ';
      }

      return _react2.default.createElement(
        'td',
        {
          className: 'react-bs-table-expand-cell',
          onClick: function onClick() {
            return _this3.handleClickCell(rowIndex + 1);
          } },
        content
      );
    }
  }, {
    key: '_isSelectRowDefined',
    value: function _isSelectRowDefined() {
      return this.props.selectRow.mode === _Const2.default.ROW_SELECT_SINGLE || this.props.selectRow.mode === _Const2.default.ROW_SELECT_MULTI;
    }
  }, {
    key: '_isExpandColumnVisible',
    value: function _isExpandColumnVisible() {
      return this.props.expandColumnOptions.expandColumnVisible;
    }
  }, {
    key: '__getHeaderColGrouop__REACT_HOT_LOADER__',
    value: function __getHeaderColGrouop__REACT_HOT_LOADER__() {
      return this.refs.header.childNodes;
    }
  }]);

  return TableBody;
}(_react.Component);

TableBody.propTypes = {
  data: _react.PropTypes.array,
  columns: _react.PropTypes.array,
  striped: _react.PropTypes.bool,
  bordered: _react.PropTypes.bool,
  hover: _react.PropTypes.bool,
  condensed: _react.PropTypes.bool,
  keyField: _react.PropTypes.string,
  selectedRowKeys: _react.PropTypes.array,
  onRowClick: _react.PropTypes.func,
  onRowDoubleClick: _react.PropTypes.func,
  onSelectRow: _react.PropTypes.func,
  noDataText: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.object]),
  withoutNoDataText: _react.PropTypes.bool,
  style: _react.PropTypes.object,
  tableBodyClass: _react.PropTypes.string,
  bodyContainerClass: _react.PropTypes.string,
  expandableRow: _react.PropTypes.func,
  expandComponent: _react.PropTypes.func,
  expandRowBgColor: _react.PropTypes.string,
  expandBy: _react.PropTypes.string,
  expanding: _react.PropTypes.array,
  onExpand: _react.PropTypes.func,
  expandBodyClass: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.func]),
  expandParentClass: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.func]),
  onlyOneExpanding: _react.PropTypes.bool,
  beforeShowError: _react.PropTypes.func,
  keyBoardNav: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.object]),
  x: _react.PropTypes.number,
  y: _react.PropTypes.number,
  onNavigateCell: _react.PropTypes.func,
  withoutTabIndex: _react.PropTypes.bool
};
var _default = TableBody;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(TableBody, 'TableBody', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/TableBody.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/TableBody.js');
}();

;

/***/ }),

/***/ 1453:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(26);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Const = __webpack_require__(1029);

var _Const2 = _interopRequireDefault(_Const);

var _util = __webpack_require__(1066);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TableColumn = function (_Component) {
  _inherits(TableColumn, _Component);

  function TableColumn(props) {
    _classCallCheck(this, TableColumn);

    var _this = _possibleConstructorReturn(this, (TableColumn.__proto__ || Object.getPrototypeOf(TableColumn)).call(this, props));

    _this.handleCellEdit = function () {
      return _this.__handleCellEdit__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleCellClick = function () {
      return _this.__handleCellClick__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleKeyDown = function () {
      return _this.__handleKeyDown__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    return _this;
  }
  /* eslint no-unused-vars: [0, { "args": "after-used" }] */


  _createClass(TableColumn, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      var children = this.props.children;

      var shouldUpdated = this.props.width !== nextProps.width || this.props.className !== nextProps.className || this.props.hidden !== nextProps.hidden || this.props.dataAlign !== nextProps.dataAlign || this.props.isFocus !== nextProps.isFocus || (typeof children === 'undefined' ? 'undefined' : _typeof(children)) !== _typeof(nextProps.children) || ('' + this.props.onEdit).toString() !== ('' + nextProps.onEdit).toString();

      if (shouldUpdated) {
        return shouldUpdated;
      }

      if ((typeof children === 'undefined' ? 'undefined' : _typeof(children)) === 'object' && children !== null && children.props !== null) {
        if (children.props.type === 'checkbox' || children.props.type === 'radio') {
          shouldUpdated = shouldUpdated || children.props.type !== nextProps.children.props.type || children.props.checked !== nextProps.children.props.checked || children.props.disabled !== nextProps.children.props.disabled;
        } else {
          shouldUpdated = true;
        }
      } else {
        shouldUpdated = shouldUpdated || children !== nextProps.children;
      }

      if (shouldUpdated) {
        return shouldUpdated;
      }

      if (!(this.props.cellEdit && nextProps.cellEdit)) {
        return false;
      } else {
        return shouldUpdated || this.props.cellEdit.mode !== nextProps.cellEdit.mode;
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var dom = _reactDom2.default.findDOMNode(this);
      if (this.props.isFocus) {
        dom.focus();
      } else {
        dom.blur();
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var dom = _reactDom2.default.findDOMNode(this);
      if (this.props.isFocus) {
        dom.focus();
      } else {
        dom.blur();
      }
    }
  }, {
    key: '__handleCellEdit__REACT_HOT_LOADER__',
    value: function __handleCellEdit__REACT_HOT_LOADER__(e) {
      if (this.props.cellEdit.mode === _Const2.default.CELL_EDIT_DBCLICK) {
        if (document.selection && document.selection.empty) {
          document.selection.empty();
        } else if (window.getSelection) {
          var sel = window.getSelection();
          sel.removeAllRanges();
        }
      }
      this.props.onEdit(this.props.rIndex + 1, e.currentTarget.cellIndex, e);
      if (this.props.cellEdit.mode !== _Const2.default.CELL_EDIT_DBCLICK) {
        this.props.onClick(this.props.rIndex + 1, e.currentTarget.cellIndex, e);
      }
    }
  }, {
    key: '__handleCellClick__REACT_HOT_LOADER__',
    value: function __handleCellClick__REACT_HOT_LOADER__(e) {
      var _props = this.props,
          onClick = _props.onClick,
          rIndex = _props.rIndex;

      if (onClick) {
        onClick(rIndex + 1, e.currentTarget.cellIndex, e);
      }
    }
  }, {
    key: '__handleKeyDown__REACT_HOT_LOADER__',
    value: function __handleKeyDown__REACT_HOT_LOADER__(e) {
      if (this.props.keyBoardNav) {
        this.props.onKeyDown(e);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          children = _props2.children,
          columnTitle = _props2.columnTitle,
          dataAlign = _props2.dataAlign,
          hidden = _props2.hidden,
          cellEdit = _props2.cellEdit,
          attrs = _props2.attrs,
          style = _props2.style,
          isFocus = _props2.isFocus,
          keyBoardNav = _props2.keyBoardNav,
          tabIndex = _props2.tabIndex,
          customNavStyle = _props2.customNavStyle,
          withoutTabIndex = _props2.withoutTabIndex,
          row = _props2.row;
      var className = this.props.className;


      var tdStyle = _extends({
        textAlign: dataAlign,
        display: hidden ? 'none' : null
      }, style);

      var opts = {};

      if (cellEdit) {
        if (cellEdit.mode === _Const2.default.CELL_EDIT_CLICK) {
          opts.onClick = this.handleCellEdit;
        } else if (cellEdit.mode === _Const2.default.CELL_EDIT_DBCLICK) {
          opts.onDoubleClick = this.handleCellEdit;
        } else {
          opts.onClick = this.handleCellClick;
        }
      }

      if (keyBoardNav && isFocus) {
        opts.onKeyDown = this.handleKeyDown;
      }

      if (isFocus) {
        if (customNavStyle) {
          var cusmtStyle = _util2.default.isFunction(customNavStyle) ? customNavStyle(children, row) : customNavStyle;
          tdStyle = _extends({}, tdStyle, cusmtStyle);
        } else {
          className = className + ' default-focus-cell';
        }
      }

      var attr = {};
      if (!withoutTabIndex) attr.tabIndex = tabIndex;
      return _react2.default.createElement(
        'td',
        _extends({}, attr, { style: tdStyle,
          title: columnTitle,
          className: className
        }, opts, attrs),
        typeof children === 'boolean' ? children.toString() : children
      );
    }
  }]);

  return TableColumn;
}(_react.Component);

TableColumn.propTypes = {
  rIndex: _react.PropTypes.number,
  dataAlign: _react.PropTypes.string,
  hidden: _react.PropTypes.bool,
  className: _react.PropTypes.string,
  columnTitle: _react.PropTypes.string,
  children: _react.PropTypes.node,
  onClick: _react.PropTypes.func,
  attrs: _react.PropTypes.object,
  style: _react.PropTypes.object,
  isFocus: _react.PropTypes.bool,
  onKeyDown: _react.PropTypes.func,
  tabIndex: _react.PropTypes.string,
  withoutTabIndex: _react.PropTypes.bool,
  keyBoardNav: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.object]),
  customNavStyle: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.object]),
  row: _react.PropTypes.any /* only used on custom styling for navigation */
};

TableColumn.defaultProps = {
  dataAlign: 'left',
  withoutTabIndex: false,
  hidden: false,
  className: '',
  isFocus: false,
  keyBoardNav: false
};
var _default = TableColumn;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(TableColumn, 'TableColumn', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/TableColumn.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/TableColumn.js');
}();

;

/***/ }),

/***/ 1454:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(26);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Editor = __webpack_require__(1290);

var _Editor2 = _interopRequireDefault(_Editor);

var _Notification = __webpack_require__(1291);

var _Notification2 = _interopRequireDefault(_Notification);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _Const = __webpack_require__(1029);

var _Const2 = _interopRequireDefault(_Const);

var _util = __webpack_require__(1066);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TableEditColumn = function (_Component) {
  _inherits(TableEditColumn, _Component);

  function TableEditColumn(props) {
    _classCallCheck(this, TableEditColumn);

    var _this = _possibleConstructorReturn(this, (TableEditColumn.__proto__ || Object.getPrototypeOf(TableEditColumn)).call(this, props));

    _this.handleKeyPress = function () {
      return _this.__handleKeyPress__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleBlur = function () {
      return _this.__handleBlur__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleCustomUpdate = function () {
      return _this.__handleCustomUpdate__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.notifyToastr = function () {
      return _this.__notifyToastr__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleClick = function () {
      return _this.__handleClick__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.timeouteClear = 0;
    var _this$props = _this.props,
        fieldValue = _this$props.fieldValue,
        row = _this$props.row,
        className = _this$props.className;

    _this.focusInEditor = _this.focusInEditor.bind(_this);
    _this.state = {
      shakeEditor: false,
      className: _util2.default.isFunction(className) ? className(fieldValue, row) : className
    };
    return _this;
  }

  _createClass(TableEditColumn, [{
    key: 'valueShortCircuit',
    value: function valueShortCircuit(value) {
      return value === null || typeof value === 'undefined' ? '' : value;
    }
  }, {
    key: '__handleKeyPress__REACT_HOT_LOADER__',
    value: function __handleKeyPress__REACT_HOT_LOADER__(e) {
      if (e.keyCode === 13 || e.keyCode === 9) {
        // Pressed ENTER
        var value = e.currentTarget.type === 'checkbox' ? this._getCheckBoxValue(e) : e.currentTarget.value;

        if (!this.validator(value)) {
          return;
        }
        if (e.keyCode === 13) {
          this.props.completeEdit(value, this.props.rowIndex, this.props.colIndex);
        } else {
          this.props.onTab(this.props.rowIndex + 1, this.props.colIndex + 1, 'tab', e);
          e.preventDefault();
        }
      } else if (e.keyCode === 27) {
        this.props.completeEdit(null, this.props.rowIndex, this.props.colIndex);
      } else if (e.type === 'click' && !this.props.blurToSave) {
        // textarea click save button
        var _value = e.target.parentElement.firstChild.value;
        if (!this.validator(_value)) {
          return;
        }
        this.props.completeEdit(_value, this.props.rowIndex, this.props.colIndex);
      }
    }
  }, {
    key: '__handleBlur__REACT_HOT_LOADER__',
    value: function __handleBlur__REACT_HOT_LOADER__(e) {
      e.stopPropagation();
      if (this.props.blurToSave) {
        var value = e.currentTarget.type === 'checkbox' ? this._getCheckBoxValue(e) : e.currentTarget.value;
        if (!this.validator(value)) {
          return false;
        }
        this.props.completeEdit(value, this.props.rowIndex, this.props.colIndex);
      }
    }
  }, {
    key: '__handleCustomUpdate__REACT_HOT_LOADER__',


    // modified by iuculanop
    // BEGIN
    value: function __handleCustomUpdate__REACT_HOT_LOADER__(value) {
      if (!this.validator(value)) {
        return;
      }
      this.props.completeEdit(value, this.props.rowIndex, this.props.colIndex);
    }
  }, {
    key: 'validator',
    value: function validator(value) {
      var ts = this;
      var valid = true;
      if (ts.props.editable.validator) {
        var checkVal = ts.props.editable.validator(value, this.props.row);
        var responseType = typeof checkVal === 'undefined' ? 'undefined' : _typeof(checkVal);
        if (responseType !== 'object' && checkVal !== true) {
          valid = false;
          this.notifyToastr('error', checkVal, _Const2.default.CANCEL_TOASTR);
        } else if (responseType === 'object' && checkVal.isValid !== true) {
          valid = false;
          this.notifyToastr(checkVal.notification.type, checkVal.notification.msg, checkVal.notification.title);
        }
        if (!valid) {
          // animate input
          ts.clearTimeout();
          var _props = this.props,
              invalidColumnClassName = _props.invalidColumnClassName,
              row = _props.row;

          var className = _util2.default.isFunction(invalidColumnClassName) ? invalidColumnClassName(value, row) : invalidColumnClassName;
          ts.setState({ shakeEditor: true, className: className });
          ts.timeouteClear = setTimeout(function () {
            ts.setState({ shakeEditor: false });
          }, 300);
          this.focusInEditor();
          return valid;
        }
      }
      return valid;
    }
    // END

  }, {
    key: '__notifyToastr__REACT_HOT_LOADER__',
    value: function __notifyToastr__REACT_HOT_LOADER__(type, message, title) {
      var toastr = true;
      var beforeShowError = this.props.beforeShowError;

      if (beforeShowError) {
        toastr = beforeShowError(type, message, title);
      }
      if (toastr) {
        this.refs.notifier.notice(type, message, title);
      }
    }
  }, {
    key: 'clearTimeout',
    value: function (_clearTimeout) {
      function clearTimeout() {
        return _clearTimeout.apply(this, arguments);
      }

      clearTimeout.toString = function () {
        return _clearTimeout.toString();
      };

      return clearTimeout;
    }(function () {
      if (this.timeouteClear !== 0) {
        clearTimeout(this.timeouteClear);
        this.timeouteClear = 0;
      }
    })
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.focusInEditor();
      var dom = _reactDom2.default.findDOMNode(this);
      if (this.props.isFocus) {
        dom.focus();
      } else {
        dom.blur();
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var dom = _reactDom2.default.findDOMNode(this);
      if (this.props.isFocus) {
        dom.focus();
      } else {
        dom.blur();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.clearTimeout();
    }
  }, {
    key: 'focusInEditor',
    value: function focusInEditor() {
      if (_util2.default.isFunction(this.refs.inputRef.focus)) {
        this.refs.inputRef.focus();
      }
    }
  }, {
    key: '__handleClick__REACT_HOT_LOADER__',
    value: function __handleClick__REACT_HOT_LOADER__(e) {
      if (e.target.tagName !== 'TD') {
        e.stopPropagation();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          editable = _props2.editable,
          format = _props2.format,
          customEditor = _props2.customEditor,
          isFocus = _props2.isFocus,
          customStyleWithNav = _props2.customStyleWithNav,
          row = _props2.row;
      var shakeEditor = this.state.shakeEditor;

      var attr = {
        ref: 'inputRef',
        onKeyDown: this.handleKeyPress,
        onBlur: this.handleBlur
      };
      var style = { position: 'relative' };
      var fieldValue = this.props.fieldValue;
      var className = this.state.className;
      // put placeholder if exist

      editable.placeholder && (attr.placeholder = editable.placeholder);

      var editorClass = (0, _classnames2.default)({ 'animated': shakeEditor, 'shake': shakeEditor });
      fieldValue = fieldValue === 0 ? '0' : fieldValue;
      var cellEditor = void 0;
      if (customEditor) {
        var customEditorProps = _extends({
          row: row
        }, attr, {
          defaultValue: this.valueShortCircuit(fieldValue)
        }, customEditor.customEditorParameters);
        cellEditor = customEditor.getElement(this.handleCustomUpdate, customEditorProps);
      } else {
        cellEditor = (0, _Editor2.default)(editable, attr, format, editorClass, this.valueShortCircuit(fieldValue));
      }

      if (isFocus) {
        if (customStyleWithNav) {
          var customStyle = _util2.default.isFunction(customStyleWithNav) ? customStyleWithNav(fieldValue, row) : customStyleWithNav;
          style = _extends({}, style, customStyle);
        } else {
          className = className + ' default-focus-cell';
        }
      }

      return _react2.default.createElement(
        'td',
        { ref: 'td',
          style: style,
          className: className,
          onClick: this.handleClick },
        cellEditor,
        _react2.default.createElement(_Notification2.default, { ref: 'notifier' })
      );
    }
  }, {
    key: '_getCheckBoxValue',
    value: function _getCheckBoxValue(e) {
      var value = '';
      var values = e.currentTarget.value.split(':');
      value = e.currentTarget.checked ? values[0] : values[1];
      return value;
    }
  }]);

  return TableEditColumn;
}(_react.Component);

TableEditColumn.propTypes = {
  completeEdit: _react.PropTypes.func,
  rowIndex: _react.PropTypes.number,
  colIndex: _react.PropTypes.number,
  blurToSave: _react.PropTypes.bool,
  editable: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.object]),
  format: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.func]),
  row: _react.PropTypes.any,
  fieldValue: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.bool, _react.PropTypes.number, _react.PropTypes.array, _react.PropTypes.object]),
  className: _react.PropTypes.any,
  beforeShowError: _react.PropTypes.func,
  isFocus: _react.PropTypes.bool,
  customStyleWithNav: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.object])
};

var _default = TableEditColumn;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(TableEditColumn, 'TableEditColumn', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/TableEditColumn.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/TableEditColumn.js');
}();

;

/***/ }),

/***/ 1455:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Const = __webpack_require__(1029);

var _Const2 = _interopRequireDefault(_Const);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TableFilter = function (_Component) {
  _inherits(TableFilter, _Component);

  function TableFilter(props) {
    _classCallCheck(this, TableFilter);

    var _this = _possibleConstructorReturn(this, (TableFilter.__proto__ || Object.getPrototypeOf(TableFilter)).call(this, props));

    _this.handleKeyUp = function () {
      return _this.__handleKeyUp__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.filterObj = {};
    return _this;
  }

  _createClass(TableFilter, [{
    key: '__handleKeyUp__REACT_HOT_LOADER__',
    value: function __handleKeyUp__REACT_HOT_LOADER__(e) {
      var _e$currentTarget = e.currentTarget,
          value = _e$currentTarget.value,
          name = _e$currentTarget.name;

      if (value.trim() === '') {
        delete this.filterObj[name];
      } else {
        this.filterObj[name] = value;
      }
      this.props.onFilter(this.filterObj);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          striped = _props.striped,
          condensed = _props.condensed,
          rowSelectType = _props.rowSelectType,
          columns = _props.columns;

      var tableClasses = (0, _classnames2.default)('table', {
        'table-striped': striped,
        'table-condensed': condensed
      });
      var selectRowHeader = null;

      if (rowSelectType === _Const2.default.ROW_SELECT_SINGLE || rowSelectType === _Const2.default.ROW_SELECT_MULTI) {
        var style = {
          width: 35,
          paddingLeft: 0,
          paddingRight: 0
        };
        selectRowHeader = _react2.default.createElement(
          'th',
          { style: style, key: -1 },
          'Filter'
        );
      }

      var filterField = columns.map(function (column) {
        var hidden = column.hidden,
            width = column.width,
            name = column.name;

        var thStyle = {
          display: hidden ? 'none' : null,
          width: width
        };
        return _react2.default.createElement(
          'th',
          { key: name, style: thStyle },
          _react2.default.createElement(
            'div',
            { className: 'th-inner table-header-column' },
            _react2.default.createElement('input', { size: '10', type: 'text',
              placeholder: name, name: name, onKeyUp: this.handleKeyUp })
          )
        );
      }, this);

      return _react2.default.createElement(
        'table',
        { className: tableClasses, style: { marginTop: 5 } },
        _react2.default.createElement(
          'thead',
          null,
          _react2.default.createElement(
            'tr',
            { style: { borderBottomStyle: 'hidden' } },
            selectRowHeader,
            filterField
          )
        )
      );
    }
  }]);

  return TableFilter;
}(_react.Component);

TableFilter.propTypes = {
  columns: _react.PropTypes.array,
  rowSelectType: _react.PropTypes.string,
  onFilter: _react.PropTypes.func
};
var _default = TableFilter;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(TableFilter, 'TableFilter', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/TableFilter.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/TableFilter.js');
}();

;

/***/ }),

/***/ 1456:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(26);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Const = __webpack_require__(1029);

var _Const2 = _interopRequireDefault(_Const);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _SelectRowHeaderColumn = __webpack_require__(1451);

var _SelectRowHeaderColumn2 = _interopRequireDefault(_SelectRowHeaderColumn);

var _ExpandRowHeaderColumn = __webpack_require__(1449);

var _ExpandRowHeaderColumn2 = _interopRequireDefault(_ExpandRowHeaderColumn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Checkbox = function (_Component) {
  _inherits(Checkbox, _Component);

  function Checkbox() {
    _classCallCheck(this, Checkbox);

    return _possibleConstructorReturn(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).apply(this, arguments));
  }

  _createClass(Checkbox, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.update(this.props.checked);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      this.update(props.checked);
    }
  }, {
    key: 'update',
    value: function update(checked) {
      _reactDom2.default.findDOMNode(this).indeterminate = checked === 'indeterminate';
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('input', { className: 'react-bs-select-all',
        type: 'checkbox',
        checked: this.props.checked,
        onChange: this.props.onChange });
    }
  }]);

  return Checkbox;
}(_react.Component);

function getSortOrder(sortList, field, enableSort) {
  if (!enableSort) return undefined;
  var result = sortList.filter(function (sortObj) {
    return sortObj.sortField === field;
  });
  if (result.length > 0) {
    return result[0].order;
  } else {
    return undefined;
  }
}

var TableHeader = function (_Component2) {
  _inherits(TableHeader, _Component2);

  function TableHeader() {
    var _ref;

    var _temp, _this2, _ret;

    _classCallCheck(this, TableHeader);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = TableHeader.__proto__ || Object.getPrototypeOf(TableHeader)).call.apply(_ref, [this].concat(args))), _this2), _this2.getHeaderColGrouop = function () {
      var _this3;

      return (_this3 = _this2).__getHeaderColGrouop__REACT_HOT_LOADER__.apply(_this3, arguments);
    }, _temp), _possibleConstructorReturn(_this2, _ret);
  }

  _createClass(TableHeader, [{
    key: 'render',
    value: function render() {
      var containerClasses = (0, _classnames2.default)('react-bs-container-header', 'table-header-wrapper', this.props.headerContainerClass);
      var tableClasses = (0, _classnames2.default)('table', 'table-hover', {
        'table-bordered': this.props.bordered,
        'table-condensed': this.props.condensed
      }, this.props.tableHeaderClass);

      var rowCount = Math.max.apply(Math, _toConsumableArray(_react2.default.Children.map(this.props.children, function (elm) {
        return elm && elm.props.row ? Number(elm.props.row) : 0;
      })));

      var rows = [];
      var rowKey = 0;

      rows[0] = [];
      rows[0].push([this.props.expandColumnVisible && this.props.expandColumnBeforeSelectColumn && _react2.default.createElement(_ExpandRowHeaderColumn2.default, { rowCount: rowCount + 1 })], [this.renderSelectRowHeader(rowCount + 1, rowKey++)], [this.props.expandColumnVisible && !this.props.expandColumnBeforeSelectColumn && _react2.default.createElement(_ExpandRowHeaderColumn2.default, { rowCount: rowCount + 1 })]);
      var _props = this.props,
          sortIndicator = _props.sortIndicator,
          sortList = _props.sortList,
          onSort = _props.onSort,
          reset = _props.reset;


      _react2.default.Children.forEach(this.props.children, function (elm) {
        if (elm === null || elm === undefined) {
          // Skip null or undefined elements.
          return;
        }
        var _elm$props = elm.props,
            dataField = _elm$props.dataField,
            dataSort = _elm$props.dataSort;

        var sort = getSortOrder(sortList, dataField, dataSort);
        var rowIndex = elm.props.row ? Number(elm.props.row) : 0;
        var rowSpan = elm.props.rowSpan ? Number(elm.props.rowSpan) : 1;
        if (rows[rowIndex] === undefined) {
          rows[rowIndex] = [];
        }
        if (rowSpan + rowIndex === rowCount + 1) {
          rows[rowIndex].push(_react2.default.cloneElement(elm, { reset: reset, key: rowKey++, onSort: onSort, sort: sort, sortIndicator: sortIndicator, isOnlyHead: false }));
        } else {
          rows[rowIndex].push(_react2.default.cloneElement(elm, { key: rowKey++, isOnlyHead: true }));
        }
      });

      var trs = rows.map(function (row, indexRow) {
        return _react2.default.createElement(
          'tr',
          { key: indexRow },
          row
        );
      });

      return _react2.default.createElement(
        'div',
        { ref: 'container', className: containerClasses, style: this.props.style },
        _react2.default.createElement(
          'table',
          { className: tableClasses },
          _react2.default.cloneElement(this.props.colGroups, { ref: 'headerGrp' }),
          _react2.default.createElement(
            'thead',
            { ref: 'header' },
            trs
          )
        )
      );
    }
  }, {
    key: '__getHeaderColGrouop__REACT_HOT_LOADER__',
    value: function __getHeaderColGrouop__REACT_HOT_LOADER__() {
      return this.refs.headerGrp.childNodes;
    }
  }, {
    key: 'renderSelectRowHeader',
    value: function renderSelectRowHeader(rowCount, rowKey) {
      if (this.props.hideSelectColumn) {
        return null;
      } else if (this.props.customComponent) {
        var CustomComponent = this.props.customComponent;
        return _react2.default.createElement(
          _SelectRowHeaderColumn2.default,
          { key: rowKey, rowCount: rowCount },
          _react2.default.createElement(CustomComponent, { type: 'checkbox', checked: this.props.isSelectAll,
            indeterminate: this.props.isSelectAll === 'indeterminate', disabled: false,
            onChange: this.props.onSelectAllRow, rowIndex: 'Header' })
        );
      } else if (this.props.rowSelectType === _Const2.default.ROW_SELECT_SINGLE) {
        return _react2.default.createElement(_SelectRowHeaderColumn2.default, { key: rowKey, rowCount: rowCount });
      } else if (this.props.rowSelectType === _Const2.default.ROW_SELECT_MULTI) {
        return _react2.default.createElement(
          _SelectRowHeaderColumn2.default,
          { key: rowKey, rowCount: rowCount },
          _react2.default.createElement(Checkbox, {
            onChange: this.props.onSelectAllRow,
            checked: this.props.isSelectAll })
        );
      } else {
        return null;
      }
    }
  }]);

  return TableHeader;
}(_react.Component);

TableHeader.propTypes = {
  headerContainerClass: _react.PropTypes.string,
  tableHeaderClass: _react.PropTypes.string,
  style: _react.PropTypes.object,
  rowSelectType: _react.PropTypes.string,
  onSort: _react.PropTypes.func,
  onSelectAllRow: _react.PropTypes.func,
  sortList: _react.PropTypes.array,
  hideSelectColumn: _react.PropTypes.bool,
  bordered: _react.PropTypes.bool,
  condensed: _react.PropTypes.bool,
  isFiltered: _react.PropTypes.bool,
  isSelectAll: _react.PropTypes.oneOf([true, 'indeterminate', false]),
  sortIndicator: _react.PropTypes.bool,
  customComponent: _react.PropTypes.func,
  colGroups: _react.PropTypes.element,
  reset: _react.PropTypes.bool,
  expandColumnVisible: _react.PropTypes.bool,
  expandColumnComponent: _react.PropTypes.func,
  expandColumnBeforeSelectColumn: _react.PropTypes.bool
};

var _default = TableHeader;
exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Checkbox, 'Checkbox', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/TableHeader.js');

  __REACT_HOT_LOADER__.register(getSortOrder, 'getSortOrder', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/TableHeader.js');

  __REACT_HOT_LOADER__.register(TableHeader, 'TableHeader', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/TableHeader.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/TableHeader.js');
}();

;

/***/ }),

/***/ 1457:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _util = __webpack_require__(1066);

var _util2 = _interopRequireDefault(_util);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint no-nested-ternary: 0 */


var TableRow = function (_Component) {
  _inherits(TableRow, _Component);

  function TableRow(props) {
    _classCallCheck(this, TableRow);

    var _this = _possibleConstructorReturn(this, (TableRow.__proto__ || Object.getPrototypeOf(TableRow)).call(this, props));

    _this.rowClick = function () {
      return _this.__rowClick__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.expandRow = function () {
      return _this.__expandRow__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.rowDoubleClick = function () {
      return _this.__rowDoubleClick__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.rowMouseOut = function () {
      return _this.__rowMouseOut__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.rowMouseOver = function () {
      return _this.__rowMouseOver__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.clickNum = 0;
    return _this;
  }

  _createClass(TableRow, [{
    key: '__rowClick__REACT_HOT_LOADER__',
    value: function __rowClick__REACT_HOT_LOADER__(e) {
      var _this2 = this;

      var rowIndex = this.props.index + 1;
      var cellIndex = e.target.cellIndex;
      if (this.props.onRowClick) this.props.onRowClick(rowIndex, cellIndex);
      var _props = this.props,
          selectRow = _props.selectRow,
          unselectableRow = _props.unselectableRow,
          isSelected = _props.isSelected,
          onSelectRow = _props.onSelectRow,
          onExpandRow = _props.onExpandRow;

      if (selectRow) {
        if (selectRow.clickToSelect && !unselectableRow) {
          onSelectRow(rowIndex, !isSelected, e);
        } else if (selectRow.clickToSelectAndEditCell && !unselectableRow) {
          this.clickNum++;
          /** if clickToSelectAndEditCell is enabled,
           *  there should be a delay to prevent a selection changed when
           *  user dblick to edit cell on same row but different cell
          **/
          setTimeout(function () {
            if (_this2.clickNum === 1) {
              onSelectRow(rowIndex, !isSelected, e);
              onExpandRow(rowIndex, cellIndex);
            }
            _this2.clickNum = 0;
          }, 200);
        } else {
          this.expandRow(rowIndex, cellIndex);
        }
      }
    }
  }, {
    key: '__expandRow__REACT_HOT_LOADER__',
    value: function __expandRow__REACT_HOT_LOADER__(rowIndex, cellIndex) {
      var _this3 = this;

      this.clickNum++;
      setTimeout(function () {
        if (_this3.clickNum === 1) {
          _this3.props.onExpandRow(rowIndex, cellIndex);
        }
        _this3.clickNum = 0;
      }, 200);
    }
  }, {
    key: '__rowDoubleClick__REACT_HOT_LOADER__',
    value: function __rowDoubleClick__REACT_HOT_LOADER__(e) {
      if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'SELECT' && e.target.tagName !== 'TEXTAREA') {
        if (this.props.onRowDoubleClick) {
          this.props.onRowDoubleClick(this.props.index);
        }
      }
    }
  }, {
    key: '__rowMouseOut__REACT_HOT_LOADER__',
    value: function __rowMouseOut__REACT_HOT_LOADER__(e) {
      var rowIndex = this.props.index;
      if (this.props.onRowMouseOut) {
        this.props.onRowMouseOut(rowIndex, e);
      }
    }
  }, {
    key: '__rowMouseOver__REACT_HOT_LOADER__',
    value: function __rowMouseOver__REACT_HOT_LOADER__(e) {
      var rowIndex = this.props.index;
      if (this.props.onRowMouseOver) {
        this.props.onRowMouseOver(rowIndex, e);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      this.clickNum = 0;
      var _props2 = this.props,
          selectRow = _props2.selectRow,
          row = _props2.row,
          isSelected = _props2.isSelected,
          className = _props2.className,
          index = _props2.index;
      var style = this.props.style;

      var backgroundColor = null;
      var selectRowClass = null;

      if (selectRow) {
        backgroundColor = _util2.default.isFunction(selectRow.bgColor) ? selectRow.bgColor(row, isSelected) : isSelected ? selectRow.bgColor : null;

        selectRowClass = _util2.default.isFunction(selectRow.className) ? selectRow.className(row, isSelected) : isSelected ? selectRow.className : null;
      }

      if (_util2.default.isFunction(style)) {
        style = style(row, index);
      } else {
        style = _extends({}, style) || {};
      }
      // the bgcolor of row selection always overwrite the bgcolor defined by global.
      if (style && backgroundColor && isSelected) {
        style.backgroundColor = backgroundColor;
      }
      var trCss = {
        style: _extends({}, style),
        className: (0, _classnames2.default)(selectRowClass, className)
      };

      return _react2.default.createElement(
        'tr',
        _extends({}, trCss, {
          onMouseOver: this.rowMouseOver,
          onMouseOut: this.rowMouseOut,
          onClick: this.rowClick,
          onDoubleClick: this.rowDoubleClick }),
        this.props.children
      );
    }
  }]);

  return TableRow;
}(_react.Component);

TableRow.propTypes = {
  index: _react.PropTypes.number,
  row: _react.PropTypes.any,
  style: _react.PropTypes.any,
  isSelected: _react.PropTypes.bool,
  enableCellEdit: _react.PropTypes.bool,
  onRowClick: _react.PropTypes.func,
  onRowDoubleClick: _react.PropTypes.func,
  onSelectRow: _react.PropTypes.func,
  onExpandRow: _react.PropTypes.func,
  onRowMouseOut: _react.PropTypes.func,
  onRowMouseOver: _react.PropTypes.func,
  unselectableRow: _react.PropTypes.bool
};
TableRow.defaultProps = {
  onRowClick: undefined,
  onRowDoubleClick: undefined
};
var _default = TableRow;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(TableRow, 'TableRow', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/TableRow.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/TableRow.js');
}();

;

/***/ }),

/***/ 1458:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _util = __webpack_require__(1066);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (_util2.default.canUseDOM()) {
  var filesaver = __webpack_require__(1459);
  var saveAs = filesaver.saveAs;
} /* eslint block-scoped-var: 0 */
/* eslint vars-on-top: 0 */
/* eslint no-var: 0 */
/* eslint no-unused-vars: 0 */


function toString(data, keys, separator, excludeCSVHeader) {
  var dataString = '';
  if (data.length === 0) return dataString;

  var headCells = [];
  var rowCount = 0;
  keys.forEach(function (key) {
    if (key.row > rowCount) {
      rowCount = key.row;
    }
    // rowCount += (key.rowSpan + key.colSpan - 1);
    for (var index = 0; index < key.colSpan; index++) {
      headCells.push(key);
    }
  });

  var firstRow = excludeCSVHeader ? 1 : 0;

  var _loop = function _loop(i) {
    dataString += headCells.map(function (x) {
      if (x.row + (x.rowSpan - 1) === i) {
        return x.header;
      }
      if (x.row === i && x.rowSpan > 1) {
        return '';
      }
    }).filter(function (key) {
      return typeof key !== 'undefined';
    }).join(separator) + '\n';
  };

  for (var i = firstRow; i <= rowCount; i++) {
    _loop(i);
  }

  keys = keys.filter(function (key) {
    return key.field !== undefined;
  });

  data.map(function (row) {
    keys.map(function (col, i) {
      var field = col.field,
          format = col.format,
          extraData = col.extraData;

      var value = typeof format !== 'undefined' ? format(row[field], row, extraData) : row[field];
      var cell = typeof value !== 'undefined' ? '"' + value + '"' : '';
      dataString += cell;
      if (i + 1 < keys.length) dataString += separator;
    });

    dataString += '\n';
  });

  return dataString;
}

var exportCSV = function exportCSV(data, keys, filename, separator, noAutoBOM, excludeCSVHeader) {
  var dataString = toString(data, keys, separator, excludeCSVHeader);
  if (typeof window !== 'undefined') {
    noAutoBOM = noAutoBOM === undefined ? true : noAutoBOM;
    saveAs(new Blob([dataString], { type: 'text/plain;charset=utf-8' }), filename, noAutoBOM);
  }
};

var _default = exportCSV;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(saveAs, 'saveAs', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/csv_export_util.js');

  __REACT_HOT_LOADER__.register(toString, 'toString', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/csv_export_util.js');

  __REACT_HOT_LOADER__.register(exportCSV, 'exportCSV', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/csv_export_util.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/csv_export_util.js');
}();

;

/***/ }),

/***/ 1459:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

/* FileSaver.js
 * A saveAs() FileSaver implementation.
 * 1.3.2
 * 2016-06-16 18:25:19
 *
 * By Eli Grey, http://eligrey.com
 * License: MIT
 *   See https://github.com/eligrey/FileSaver.js/blob/master/LICENSE.md
 */

/*global self */
/*jslint bitwise: true, indent: 4, laxbreak: true, laxcomma: true, smarttabs: true, plusplus: true */

/*! @source http://purl.eligrey.com/github/FileSaver.js/blob/master/FileSaver.js */

var saveAs = saveAs || function (view) {
	"use strict";
	// IE <10 is explicitly unsupported

	if (typeof view === "undefined" || typeof navigator !== "undefined" && /MSIE [1-9]\./.test(navigator.userAgent)) {
		return;
	}
	var doc = view.document
	// only get URL when necessary in case Blob.js hasn't overridden it yet
	,
	    get_URL = function get_URL() {
		return view.URL || view.webkitURL || view;
	},
	    save_link = doc.createElementNS("http://www.w3.org/1999/xhtml", "a"),
	    can_use_save_link = "download" in save_link,
	    click = function click(node) {
		var event = new MouseEvent("click");
		node.dispatchEvent(event);
	},
	    is_safari = /constructor/i.test(view.HTMLElement) || view.safari,
	    is_chrome_ios = /CriOS\/[\d]+/.test(navigator.userAgent),
	    throw_outside = function throw_outside(ex) {
		(view.setImmediate || view.setTimeout)(function () {
			throw ex;
		}, 0);
	},
	    force_saveable_type = "application/octet-stream"
	// the Blob API is fundamentally broken as there is no "downloadfinished" event to subscribe to
	,
	    arbitrary_revoke_timeout = 1000 * 40 // in ms
	,
	    revoke = function revoke(file) {
		var revoker = function revoker() {
			if (typeof file === "string") {
				// file is an object URL
				get_URL().revokeObjectURL(file);
			} else {
				// file is a File
				file.remove();
			}
		};
		setTimeout(revoker, arbitrary_revoke_timeout);
	},
	    dispatch = function dispatch(filesaver, event_types, event) {
		event_types = [].concat(event_types);
		var i = event_types.length;
		while (i--) {
			var listener = filesaver["on" + event_types[i]];
			if (typeof listener === "function") {
				try {
					listener.call(filesaver, event || filesaver);
				} catch (ex) {
					throw_outside(ex);
				}
			}
		}
	},
	    auto_bom = function auto_bom(blob) {
		// prepend BOM for UTF-8 XML and text/* types (including HTML)
		// note: your browser will automatically convert UTF-16 U+FEFF to EF BB BF
		if (/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(blob.type)) {
			return new Blob([String.fromCharCode(0xFEFF), blob], { type: blob.type });
		}
		return blob;
	},
	    FileSaver = function FileSaver(blob, name, no_auto_bom) {
		if (!no_auto_bom) {
			blob = auto_bom(blob);
		}
		// First try a.download, then web filesystem, then object URLs
		var filesaver = this,
		    type = blob.type,
		    force = type === force_saveable_type,
		    object_url,
		    dispatch_all = function dispatch_all() {
			dispatch(filesaver, "writestart progress write writeend".split(" "));
		}
		// on any filesys errors revert to saving with object URLs
		,
		    fs_error = function fs_error() {
			if ((is_chrome_ios || force && is_safari) && view.FileReader) {
				// Safari doesn't allow downloading of blob urls
				var reader = new FileReader();
				reader.onloadend = function () {
					var url = is_chrome_ios ? reader.result : reader.result.replace(/^data:[^;]*;/, 'data:attachment/file;');
					var popup = view.open(url, '_blank');
					if (!popup) view.location.href = url;
					url = undefined; // release reference before dispatching
					filesaver.readyState = filesaver.DONE;
					dispatch_all();
				};
				reader.readAsDataURL(blob);
				filesaver.readyState = filesaver.INIT;
				return;
			}
			// don't create more object URLs than needed
			if (!object_url) {
				object_url = get_URL().createObjectURL(blob);
			}
			if (force) {
				view.location.href = object_url;
			} else {
				var opened = view.open(object_url, "_blank");
				if (!opened) {
					// Apple does not allow window.open, see https://developer.apple.com/library/safari/documentation/Tools/Conceptual/SafariExtensionGuide/WorkingwithWindowsandTabs/WorkingwithWindowsandTabs.html
					view.location.href = object_url;
				}
			}
			filesaver.readyState = filesaver.DONE;
			dispatch_all();
			revoke(object_url);
		};
		filesaver.readyState = filesaver.INIT;

		if (can_use_save_link) {
			object_url = get_URL().createObjectURL(blob);
			setTimeout(function () {
				save_link.href = object_url;
				save_link.download = name;
				click(save_link);
				dispatch_all();
				revoke(object_url);
				filesaver.readyState = filesaver.DONE;
			});
			return;
		}

		fs_error();
	},
	    FS_proto = FileSaver.prototype,
	    saveAs = function saveAs(blob, name, no_auto_bom) {
		return new FileSaver(blob, name || blob.name || "download", no_auto_bom);
	};
	// IE 10+ (native saveAs)
	if (typeof navigator !== "undefined" && navigator.msSaveOrOpenBlob) {
		return function (blob, name, no_auto_bom) {
			name = name || blob.name || "download";

			if (!no_auto_bom) {
				blob = auto_bom(blob);
			}
			return navigator.msSaveOrOpenBlob(blob, name);
		};
	}

	FS_proto.abort = function () {};
	FS_proto.readyState = FS_proto.INIT = 0;
	FS_proto.WRITING = 1;
	FS_proto.DONE = 2;

	FS_proto.error = FS_proto.onwritestart = FS_proto.onprogress = FS_proto.onwrite = FS_proto.onabort = FS_proto.onerror = FS_proto.onwriteend = null;

	return saveAs;
}(typeof self !== "undefined" && self || typeof window !== "undefined" && window || undefined.content);
// `self` is undefined in Firefox for Android content script context
// while `this` is nsIContentFrameMessageManager
// with an attribute `content` that corresponds to the window

if (typeof module !== "undefined" && module.exports) {
	module.exports.saveAs = saveAs;
} else if ("function" !== "undefined" && __webpack_require__(1057) !== null && __webpack_require__(1094) !== null) {
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
		return saveAs;
	}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(saveAs, "saveAs", "/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/filesaver.js");
}();

;

/***/ }),

/***/ 1460:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Const = __webpack_require__(1029);

var _Const2 = _interopRequireDefault(_Const);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint quotes: 0 */
/* eslint max-len: 0 */


var legalComparators = ['=', '>', '>=', '<', '<=', '!='];

function dateParser(d) {
  return d.getFullYear() + '-' + ("0" + (d.getMonth() + 1)).slice(-2) + '-' + ("0" + d.getDate()).slice(-2);
}

var DateFilter = function (_Component) {
  _inherits(DateFilter, _Component);

  function DateFilter(props) {
    _classCallCheck(this, DateFilter);

    var _this = _possibleConstructorReturn(this, (DateFilter.__proto__ || Object.getPrototypeOf(DateFilter)).call(this, props));

    _this.dateComparators = _this.props.dateComparators || legalComparators;
    _this.filter = _this.filter.bind(_this);
    _this.onChangeComparator = _this.onChangeComparator.bind(_this);
    return _this;
  }

  _createClass(DateFilter, [{
    key: 'setDefaultDate',
    value: function setDefaultDate() {
      var defaultDate = '';
      var defaultValue = this.props.defaultValue;

      if (defaultValue && defaultValue.date) {
        // Set the appropriate format for the input type=date, i.e. "YYYY-MM-DD"
        defaultDate = dateParser(new Date(defaultValue.date));
      }
      return defaultDate;
    }
  }, {
    key: 'onChangeComparator',
    value: function onChangeComparator(event) {
      var date = this.refs.inputDate.value;
      var comparator = event.target.value;
      if (date === '') {
        return;
      }
      date = new Date(date);
      this.props.filterHandler({ date: date, comparator: comparator }, _Const2.default.FILTER_TYPE.DATE);
    }
  }, {
    key: 'getComparatorOptions',
    value: function getComparatorOptions() {
      var optionTags = [];
      optionTags.push(_react2.default.createElement('option', { key: '-1' }));
      for (var i = 0; i < this.dateComparators.length; i++) {
        optionTags.push(_react2.default.createElement(
          'option',
          { key: i, value: this.dateComparators[i] },
          this.dateComparators[i]
        ));
      }
      return optionTags;
    }
  }, {
    key: 'filter',
    value: function filter(event) {
      var comparator = this.refs.dateFilterComparator.value;
      var dateValue = event.target.value;
      if (dateValue) {
        this.props.filterHandler({ date: new Date(dateValue), comparator: comparator }, _Const2.default.FILTER_TYPE.DATE);
      } else {
        this.props.filterHandler(null, _Const2.default.FILTER_TYPE.DATE);
      }
    }
  }, {
    key: 'cleanFiltered',
    value: function cleanFiltered() {
      var value = this.setDefaultDate();
      var comparator = this.props.defaultValue ? this.props.defaultValue.comparator : '';
      this.setState(function () {
        return { isPlaceholderSelected: value === '' };
      });
      this.refs.dateFilterComparator.value = comparator;
      this.refs.inputDate.value = value;
      this.props.filterHandler({ date: new Date(value), comparator: comparator }, _Const2.default.FILTER_TYPE.DATE);
    }
  }, {
    key: 'applyFilter',
    value: function applyFilter(filterDateObj) {
      var date = filterDateObj.date,
          comparator = filterDateObj.comparator;

      this.setState(function () {
        return { isPlaceholderSelected: date === '' };
      });
      this.refs.dateFilterComparator.value = comparator;
      this.refs.inputDate.value = dateParser(date);
      this.props.filterHandler({ date: date, comparator: comparator }, _Const2.default.FILTER_TYPE.DATE);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var comparator = this.refs.dateFilterComparator.value;
      var dateValue = this.refs.inputDate.value;
      if (comparator && dateValue) {
        this.props.filterHandler({ date: new Date(dateValue), comparator: comparator }, _Const2.default.FILTER_TYPE.DATE);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          defaultValue = _props.defaultValue,
          _props$style = _props.style,
          date = _props$style.date,
          comparator = _props$style.comparator;

      return _react2.default.createElement(
        'div',
        { className: 'filter date-filter' },
        _react2.default.createElement(
          'select',
          { ref: 'dateFilterComparator',
            style: comparator,
            className: 'date-filter-comparator form-control',
            onChange: this.onChangeComparator,
            defaultValue: defaultValue ? defaultValue.comparator : '' },
          this.getComparatorOptions()
        ),
        _react2.default.createElement('input', { ref: 'inputDate',
          className: 'filter date-filter-input form-control',
          style: date,
          type: 'date',
          onChange: this.filter,
          defaultValue: this.setDefaultDate() })
      );
    }
  }]);

  return DateFilter;
}(_react.Component);

DateFilter.propTypes = {
  filterHandler: _react.PropTypes.func.isRequired,
  defaultValue: _react.PropTypes.shape({
    date: _react.PropTypes.object,
    comparator: _react.PropTypes.oneOf(legalComparators)
  }),
  style: _react.PropTypes.shape({
    date: _react.PropTypes.oneOfType([_react.PropTypes.object]),
    comparator: _react.PropTypes.oneOfType([_react.PropTypes.object])
  }),
  /* eslint consistent-return: 0 */
  dateComparators: function dateComparators(props, propName) {
    if (!props[propName]) {
      return;
    }
    for (var i = 0; i < props[propName].length; i++) {
      var comparatorIsValid = false;
      for (var j = 0; j < legalComparators.length; j++) {
        if (legalComparators[j] === props[propName][i]) {
          comparatorIsValid = true;
          break;
        }
      }
      if (!comparatorIsValid) {
        return new Error('Date comparator provided is not supported.\n          Use only ' + legalComparators);
      }
    }
  },
  columnName: _react.PropTypes.string
};

DateFilter.defaultProps = {
  style: {
    date: null,
    comparator: null
  }
};

var _default = DateFilter;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(legalComparators, 'legalComparators', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/filters/Date.js');

  __REACT_HOT_LOADER__.register(dateParser, 'dateParser', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/filters/Date.js');

  __REACT_HOT_LOADER__.register(DateFilter, 'DateFilter', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/filters/Date.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/filters/Date.js');
}();

;

/***/ }),

/***/ 1461:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _Const = __webpack_require__(1029);

var _Const2 = _interopRequireDefault(_Const);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var legalComparators = ['=', '>', '>=', '<', '<=', '!='];

var NumberFilter = function (_Component) {
  _inherits(NumberFilter, _Component);

  function NumberFilter(props) {
    _classCallCheck(this, NumberFilter);

    var _this = _possibleConstructorReturn(this, (NumberFilter.__proto__ || Object.getPrototypeOf(NumberFilter)).call(this, props));

    _this.numberComparators = _this.props.numberComparators || legalComparators;
    _this.timeout = null;
    _this.state = {
      isPlaceholderSelected: _this.props.defaultValue === undefined || _this.props.defaultValue.number === undefined || _this.props.options && _this.props.options.indexOf(_this.props.defaultValue.number) === -1
    };
    _this.onChangeNumber = _this.onChangeNumber.bind(_this);
    _this.onChangeNumberSet = _this.onChangeNumberSet.bind(_this);
    _this.onChangeComparator = _this.onChangeComparator.bind(_this);
    return _this;
  }

  _createClass(NumberFilter, [{
    key: 'onChangeNumber',
    value: function onChangeNumber(event) {
      var _this2 = this;

      var comparator = this.refs.numberFilterComparator.value;
      if (comparator === '') {
        return;
      }
      if (this.timeout) {
        clearTimeout(this.timeout);
      }
      var filterValue = event.target.value;
      this.timeout = setTimeout(function () {
        _this2.props.filterHandler({ number: filterValue, comparator: comparator }, _Const2.default.FILTER_TYPE.NUMBER);
      }, this.props.delay);
    }
  }, {
    key: 'onChangeNumberSet',
    value: function onChangeNumberSet(event) {
      var comparator = this.refs.numberFilterComparator.value;
      var value = event.target.value;

      this.setState(function () {
        return { isPlaceholderSelected: value === '' };
      });
      if (comparator === '') {
        return;
      }
      this.props.filterHandler({ number: value, comparator: comparator }, _Const2.default.FILTER_TYPE.NUMBER);
    }
  }, {
    key: 'onChangeComparator',
    value: function onChangeComparator(event) {
      var value = this.refs.numberFilter.value;
      var comparator = event.target.value;
      if (value === '') {
        return;
      }
      this.props.filterHandler({ number: value, comparator: comparator }, _Const2.default.FILTER_TYPE.NUMBER);
    }
  }, {
    key: 'cleanFiltered',
    value: function cleanFiltered() {
      var value = this.props.defaultValue ? this.props.defaultValue.number : '';
      var comparator = this.props.defaultValue ? this.props.defaultValue.comparator : '';
      this.setState(function () {
        return { isPlaceholderSelected: value === '' };
      });
      this.refs.numberFilterComparator.value = comparator;
      this.refs.numberFilter.value = value;
      this.props.filterHandler({ number: value, comparator: comparator }, _Const2.default.FILTER_TYPE.NUMBER);
    }
  }, {
    key: 'applyFilter',
    value: function applyFilter(filterObj) {
      var number = filterObj.number,
          comparator = filterObj.comparator;

      this.setState(function () {
        return { isPlaceholderSelected: number === '' };
      });
      this.refs.numberFilterComparator.value = comparator;
      this.refs.numberFilter.value = number;
      this.props.filterHandler({ number: number, comparator: comparator }, _Const2.default.FILTER_TYPE.NUMBER);
    }
  }, {
    key: 'getComparatorOptions',
    value: function getComparatorOptions() {
      var optionTags = [];
      var withoutEmptyComparatorOption = this.props.withoutEmptyComparatorOption;

      if (!withoutEmptyComparatorOption) {
        optionTags.push(_react2.default.createElement('option', { key: '-1' }));
      }
      for (var i = 0; i < this.numberComparators.length; i++) {
        optionTags.push(_react2.default.createElement(
          'option',
          { key: i, value: this.numberComparators[i] },
          this.numberComparators[i]
        ));
      }
      return optionTags;
    }
  }, {
    key: 'getNumberOptions',
    value: function getNumberOptions() {
      var optionTags = [];
      var _props = this.props,
          options = _props.options,
          withoutEmptyNumberOption = _props.withoutEmptyNumberOption;

      if (!withoutEmptyNumberOption) {
        optionTags.push(_react2.default.createElement(
          'option',
          { key: '-1', value: '' },
          this.props.placeholder || 'Select ' + this.props.columnName + '...'
        ));
      }
      for (var i = 0; i < options.length; i++) {
        optionTags.push(_react2.default.createElement(
          'option',
          { key: i, value: options[i] },
          options[i]
        ));
      }
      return optionTags;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var comparator = this.refs.numberFilterComparator.value;
      var number = this.refs.numberFilter.value;
      if (comparator && number) {
        this.props.filterHandler({ number: number, comparator: comparator }, _Const2.default.FILTER_TYPE.NUMBER);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.timeout);
    }
  }, {
    key: 'render',
    value: function render() {
      var selectClass = (0, _classnames2.default)('select-filter', 'number-filter-input', 'form-control', { 'placeholder-selected': this.state.isPlaceholderSelected });

      return _react2.default.createElement(
        'div',
        { className: 'filter number-filter' },
        _react2.default.createElement(
          'select',
          { ref: 'numberFilterComparator',
            style: this.props.style.comparator,
            className: 'number-filter-comparator form-control',
            onChange: this.onChangeComparator,
            defaultValue: this.props.defaultValue ? this.props.defaultValue.comparator : '' },
          this.getComparatorOptions()
        ),
        this.props.options ? _react2.default.createElement(
          'select',
          { ref: 'numberFilter',
            className: selectClass,
            onChange: this.onChangeNumberSet,
            defaultValue: this.props.defaultValue ? this.props.defaultValue.number : '' },
          this.getNumberOptions()
        ) : _react2.default.createElement('input', { ref: 'numberFilter',
          type: 'number',
          style: this.props.style.number,
          className: 'number-filter-input form-control',
          placeholder: this.props.placeholder || 'Enter ' + this.props.columnName + '...',
          onChange: this.onChangeNumber,
          defaultValue: this.props.defaultValue ? this.props.defaultValue.number : '' })
      );
    }
  }]);

  return NumberFilter;
}(_react.Component);

NumberFilter.propTypes = {
  filterHandler: _react.PropTypes.func.isRequired,
  options: _react.PropTypes.arrayOf(_react.PropTypes.number),
  defaultValue: _react.PropTypes.shape({
    number: _react.PropTypes.number,
    comparator: _react.PropTypes.oneOf(legalComparators)
  }),
  style: _react.PropTypes.shape({
    number: _react.PropTypes.oneOfType([_react.PropTypes.object]),
    comparator: _react.PropTypes.oneOfType([_react.PropTypes.object])
  }),
  delay: _react.PropTypes.number,
  /* eslint consistent-return: 0 */
  numberComparators: function numberComparators(props, propName) {
    if (!props[propName]) {
      return;
    }
    for (var i = 0; i < props[propName].length; i++) {
      var comparatorIsValid = false;
      for (var j = 0; j < legalComparators.length; j++) {
        if (legalComparators[j] === props[propName][i]) {
          comparatorIsValid = true;
          break;
        }
      }
      if (!comparatorIsValid) {
        return new Error('Number comparator provided is not supported.\n          Use only ' + legalComparators);
      }
    }
  },
  placeholder: _react.PropTypes.string,
  columnName: _react.PropTypes.string,
  withoutEmptyComparatorOption: _react.PropTypes.bool,
  withoutEmptyNumberOption: _react.PropTypes.bool
};

NumberFilter.defaultProps = {
  delay: _Const2.default.FILTER_DELAY,
  withoutEmptyComparatorOption: false,
  withoutEmptyNumberOption: false,
  style: {
    number: null,
    comparator: null
  }
};

var _default = NumberFilter;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(legalComparators, 'legalComparators', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/filters/Number.js');

  __REACT_HOT_LOADER__.register(NumberFilter, 'NumberFilter', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/filters/Number.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/filters/Number.js');
}();

;

/***/ }),

/***/ 1462:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Const = __webpack_require__(1029);

var _Const2 = _interopRequireDefault(_Const);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RegexFilter = function (_Component) {
  _inherits(RegexFilter, _Component);

  function RegexFilter(props) {
    _classCallCheck(this, RegexFilter);

    var _this = _possibleConstructorReturn(this, (RegexFilter.__proto__ || Object.getPrototypeOf(RegexFilter)).call(this, props));

    _this.filter = _this.filter.bind(_this);
    _this.timeout = null;
    return _this;
  }

  _createClass(RegexFilter, [{
    key: 'filter',
    value: function filter(event) {
      var _this2 = this;

      if (this.timeout) {
        clearTimeout(this.timeout);
      }
      var filterValue = event.target.value;
      this.timeout = setTimeout(function () {
        _this2.props.filterHandler(filterValue, _Const2.default.FILTER_TYPE.REGEX);
      }, this.props.delay);
    }
  }, {
    key: 'cleanFiltered',
    value: function cleanFiltered() {
      var value = this.props.defaultValue ? this.props.defaultValue : '';
      this.refs.inputText.value = value;
      this.props.filterHandler(value, _Const2.default.FILTER_TYPE.TEXT);
    }
  }, {
    key: 'applyFilter',
    value: function applyFilter(filterRegx) {
      this.refs.inputText.value = filterRegx;
      this.props.filterHandler(filterRegx, _Const2.default.FILTER_TYPE.REGEX);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var value = this.refs.inputText.value;
      if (value) {
        this.props.filterHandler(value, _Const2.default.FILTER_TYPE.REGEX);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.timeout);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          defaultValue = _props.defaultValue,
          placeholder = _props.placeholder,
          columnName = _props.columnName,
          style = _props.style;

      return _react2.default.createElement('input', { ref: 'inputText',
        className: 'filter text-filter form-control',
        type: 'text',
        style: style,
        onChange: this.filter,
        placeholder: placeholder || 'Enter Regex for ' + columnName + '...',
        defaultValue: defaultValue ? defaultValue : '' });
    }
  }]);

  return RegexFilter;
}(_react.Component);

RegexFilter.propTypes = {
  filterHandler: _react.PropTypes.func.isRequired,
  defaultValue: _react.PropTypes.string,
  delay: _react.PropTypes.number,
  placeholder: _react.PropTypes.string,
  columnName: _react.PropTypes.string,
  style: _react.PropTypes.oneOfType([_react.PropTypes.object])
};

RegexFilter.defaultProps = {
  delay: _Const2.default.FILTER_DELAY
};

var _default = RegexFilter;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(RegexFilter, 'RegexFilter', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/filters/Regex.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/filters/Regex.js');
}();

;

/***/ }),

/***/ 1463:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _Const = __webpack_require__(1029);

var _Const2 = _interopRequireDefault(_Const);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function optionsEquals(options1, options2) {
  var keys = Object.keys(options1);
  for (var k in keys) {
    if (options1[k] !== options2[k]) {
      return false;
    }
  }
  return Object.keys(options1).length === Object.keys(options2).length;
}

var SelectFilter = function (_Component) {
  _inherits(SelectFilter, _Component);

  function SelectFilter(props) {
    _classCallCheck(this, SelectFilter);

    var _this = _possibleConstructorReturn(this, (SelectFilter.__proto__ || Object.getPrototypeOf(SelectFilter)).call(this, props));

    _this.filter = _this.filter.bind(_this);
    _this.state = {
      isPlaceholderSelected: _this.props.defaultValue === undefined || !_this.props.options.hasOwnProperty(_this.props.defaultValue)
    };
    return _this;
  }

  _createClass(SelectFilter, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var isPlaceholderSelected = nextProps.defaultValue === undefined || !nextProps.options.hasOwnProperty(nextProps.defaultValue);
      this.setState(function () {
        return {
          isPlaceholderSelected: isPlaceholderSelected
        };
      });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var needFilter = false;
      if (this.props.defaultValue !== prevProps.defaultValue) {
        needFilter = true;
      } else if (!optionsEquals(this.props.options, prevProps.options)) {
        needFilter = true;
      }
      if (needFilter) {
        var value = this.refs.selectInput.value;
        if (value) {
          this.props.filterHandler(value, _Const2.default.FILTER_TYPE.SELECT);
        }
      }
    }
  }, {
    key: 'filter',
    value: function filter(event) {
      var value = event.target.value;

      this.setState(function () {
        return { isPlaceholderSelected: value === '' };
      });
      this.props.filterHandler(value, _Const2.default.FILTER_TYPE.SELECT);
    }
  }, {
    key: 'cleanFiltered',
    value: function cleanFiltered() {
      var value = this.props.defaultValue !== undefined ? this.props.defaultValue : '';
      this.setState(function () {
        return { isPlaceholderSelected: value === '' };
      });
      this.refs.selectInput.value = value;
      this.props.filterHandler(value, _Const2.default.FILTER_TYPE.SELECT);
    }
  }, {
    key: 'applyFilter',
    value: function applyFilter(filterOption) {
      filterOption = filterOption + '';
      this.setState(function () {
        return { isPlaceholderSelected: filterOption === '' };
      });
      this.refs.selectInput.value = filterOption;
      this.props.filterHandler(filterOption, _Const2.default.FILTER_TYPE.SELECT);
    }
  }, {
    key: 'getOptions',
    value: function getOptions() {
      var optionTags = [];
      var _props = this.props,
          options = _props.options,
          placeholder = _props.placeholder,
          columnName = _props.columnName,
          selectText = _props.selectText,
          withoutEmptyOption = _props.withoutEmptyOption;

      var selectTextValue = selectText !== undefined ? selectText : 'Select';
      if (!withoutEmptyOption) {
        optionTags.push(_react2.default.createElement(
          'option',
          { key: '-1', value: '' },
          placeholder || selectTextValue + ' ' + columnName + '...'
        ));
      }
      Object.keys(options).map(function (key) {
        optionTags.push(_react2.default.createElement(
          'option',
          { key: key, value: key },
          options[key] + ''
        ));
      });
      return optionTags;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var value = this.refs.selectInput.value;
      if (value) {
        this.props.filterHandler(value, _Const2.default.FILTER_TYPE.SELECT);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var selectClass = (0, _classnames2.default)('filter', 'select-filter', 'form-control', { 'placeholder-selected': this.state.isPlaceholderSelected });

      return _react2.default.createElement(
        'select',
        { ref: 'selectInput',
          style: this.props.style,
          className: selectClass,
          onChange: this.filter,
          defaultValue: this.props.defaultValue !== undefined ? this.props.defaultValue : '' },
        this.getOptions()
      );
    }
  }]);

  return SelectFilter;
}(_react.Component);

SelectFilter.propTypes = {
  filterHandler: _react.PropTypes.func.isRequired,
  options: _react.PropTypes.object.isRequired,
  placeholder: _react.PropTypes.string,
  columnName: _react.PropTypes.string,
  style: _react.PropTypes.oneOfType([_react.PropTypes.object])
};

var _default = SelectFilter;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(optionsEquals, 'optionsEquals', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/filters/Select.js');

  __REACT_HOT_LOADER__.register(SelectFilter, 'SelectFilter', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/filters/Select.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/filters/Select.js');
}();

;

/***/ }),

/***/ 1464:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Const = __webpack_require__(1029);

var _Const2 = _interopRequireDefault(_Const);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextFilter = function (_Component) {
  _inherits(TextFilter, _Component);

  function TextFilter(props) {
    _classCallCheck(this, TextFilter);

    var _this = _possibleConstructorReturn(this, (TextFilter.__proto__ || Object.getPrototypeOf(TextFilter)).call(this, props));

    _this.filter = _this.filter.bind(_this);
    _this.timeout = null;
    _this.state = {
      value: _this.props.defaultValue || ''
    };
    return _this;
  }

  _createClass(TextFilter, [{
    key: 'filter',
    value: function filter(event) {
      var _this2 = this;

      if (this.timeout) {
        clearTimeout(this.timeout);
      }
      var filterValue = event.target.value;
      this.setState(function () {
        return { value: filterValue };
      });
      this.timeout = setTimeout(function () {
        _this2.props.filterHandler(filterValue, _Const2.default.FILTER_TYPE.TEXT);
      }, this.props.delay);
    }
  }, {
    key: 'cleanFiltered',
    value: function cleanFiltered() {
      var value = this.props.defaultValue ? this.props.defaultValue : '';
      this.setState(function () {
        return { value: value };
      });
      this.props.filterHandler(value, _Const2.default.FILTER_TYPE.TEXT);
    }
  }, {
    key: 'applyFilter',
    value: function applyFilter(filterText) {
      this.setState(function () {
        return { value: filterText };
      });
      this.props.filterHandler(filterText, _Const2.default.FILTER_TYPE.TEXT);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var defaultValue = this.refs.inputText.value;
      if (defaultValue) {
        this.props.filterHandler(defaultValue, _Const2.default.FILTER_TYPE.TEXT);
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.defaultValue !== this.props.defaultValue) {
        this.applyFilter(nextProps.defaultValue || '');
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.timeout);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          placeholder = _props.placeholder,
          columnName = _props.columnName,
          style = _props.style;

      return _react2.default.createElement('input', { ref: 'inputText',
        className: 'filter text-filter form-control',
        type: 'text',
        style: style,
        onChange: this.filter,
        placeholder: placeholder || 'Enter ' + columnName + '...',
        value: this.state.value });
    }
  }]);

  return TextFilter;
}(_react.Component);

TextFilter.propTypes = {
  filterHandler: _react.PropTypes.func.isRequired,
  defaultValue: _react.PropTypes.string,
  delay: _react.PropTypes.number,
  placeholder: _react.PropTypes.string,
  columnName: _react.PropTypes.string,
  style: _react.PropTypes.oneOfType([_react.PropTypes.object])
};

TextFilter.defaultProps = {
  delay: _Const2.default.FILTER_DELAY
};

var _default = TextFilter;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(TextFilter, 'TextFilter', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/filters/Text.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/filters/Text.js');
}();

;

/***/ }),

/***/ 1465:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SizePerPageDropDown = exports.ButtonGroup = exports.SearchField = exports.ClearSearchButton = exports.ExportCSVButton = exports.ShowSelectedOnlyButton = exports.DeleteButton = exports.InsertButton = exports.InsertModalFooter = exports.InsertModalBody = exports.InsertModalHeader = exports.TableHeaderColumn = exports.BootstrapTable = undefined;

var _BootstrapTable = __webpack_require__(1447);

var _BootstrapTable2 = _interopRequireDefault(_BootstrapTable);

var _TableHeaderColumn = __webpack_require__(1292);

var _TableHeaderColumn2 = _interopRequireDefault(_TableHeaderColumn);

var _InsertModalHeader = __webpack_require__(1300);

var _InsertModalHeader2 = _interopRequireDefault(_InsertModalHeader);

var _InsertModalBody = __webpack_require__(1298);

var _InsertModalBody2 = _interopRequireDefault(_InsertModalBody);

var _InsertModalFooter = __webpack_require__(1299);

var _InsertModalFooter2 = _interopRequireDefault(_InsertModalFooter);

var _InsertButton = __webpack_require__(1297);

var _InsertButton2 = _interopRequireDefault(_InsertButton);

var _DeleteButton = __webpack_require__(1295);

var _DeleteButton2 = _interopRequireDefault(_DeleteButton);

var _ExportCSVButton = __webpack_require__(1296);

var _ExportCSVButton2 = _interopRequireDefault(_ExportCSVButton);

var _ShowSelectedOnlyButton = __webpack_require__(1302);

var _ShowSelectedOnlyButton2 = _interopRequireDefault(_ShowSelectedOnlyButton);

var _ClearSearchButton = __webpack_require__(1294);

var _ClearSearchButton2 = _interopRequireDefault(_ClearSearchButton);

var _SearchField = __webpack_require__(1301);

var _SearchField2 = _interopRequireDefault(_SearchField);

var _ButtonGroup = __webpack_require__(1469);

var _ButtonGroup2 = _interopRequireDefault(_ButtonGroup);

var _SizePerPageDropDown = __webpack_require__(1293);

var _SizePerPageDropDown2 = _interopRequireDefault(_SizePerPageDropDown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (typeof window !== 'undefined') {
  window.BootstrapTable = _BootstrapTable2.default;
  window.TableHeaderColumn = _TableHeaderColumn2.default;
  window.InsertModalHeader = _InsertModalHeader2.default;
  window.InsertModalBody = _InsertModalBody2.default;
  window.InsertModalFooter = _InsertModalFooter2.default;
  window.InsertButton = _InsertButton2.default;
  window.DeleteButton = _DeleteButton2.default;
  window.ShowSelectedOnlyButton = _ShowSelectedOnlyButton2.default;
  window.ExportCSVButton = _ExportCSVButton2.default;
  window.ClearSearchButton = _ClearSearchButton2.default;
  window.SearchField = _SearchField2.default;
  window.ButtonGroup = _ButtonGroup2.default;
  window.SizePerPageDropDown = _SizePerPageDropDown2.default;
}
exports.BootstrapTable = _BootstrapTable2.default;
exports.TableHeaderColumn = _TableHeaderColumn2.default;
exports.InsertModalHeader = _InsertModalHeader2.default;
exports.InsertModalBody = _InsertModalBody2.default;
exports.InsertModalFooter = _InsertModalFooter2.default;
exports.InsertButton = _InsertButton2.default;
exports.DeleteButton = _DeleteButton2.default;
exports.ShowSelectedOnlyButton = _ShowSelectedOnlyButton2.default;
exports.ExportCSVButton = _ExportCSVButton2.default;
exports.ClearSearchButton = _ClearSearchButton2.default;
exports.SearchField = _SearchField2.default;
exports.ButtonGroup = _ButtonGroup2.default;
exports.SizePerPageDropDown = _SizePerPageDropDown2.default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ }),

/***/ 1466:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PageButton = function (_Component) {
  _inherits(PageButton, _Component);

  function PageButton(props) {
    _classCallCheck(this, PageButton);

    var _this = _possibleConstructorReturn(this, (PageButton.__proto__ || Object.getPrototypeOf(PageButton)).call(this, props));

    _this.pageBtnClick = function () {
      return _this.__pageBtnClick__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    return _this;
  }

  _createClass(PageButton, [{
    key: '__pageBtnClick__REACT_HOT_LOADER__',
    value: function __pageBtnClick__REACT_HOT_LOADER__(e) {
      e.preventDefault();
      this.props.changePage(e.currentTarget.textContent);
    }
  }, {
    key: 'render',
    value: function render() {
      var classes = (0, _classnames2.default)({
        'active': this.props.active,
        'disabled': this.props.disable,
        'hidden': this.props.hidden,
        'page-item': true
      });
      return _react2.default.createElement(
        'li',
        { className: classes, title: this.props.title },
        _react2.default.createElement(
          'a',
          { href: '#', onClick: this.pageBtnClick, className: 'page-link' },
          this.props.children
        )
      );
    }
  }]);

  return PageButton;
}(_react.Component);

PageButton.propTypes = {
  title: _react.PropTypes.string,
  changePage: _react.PropTypes.func,
  active: _react.PropTypes.bool,
  disable: _react.PropTypes.bool,
  hidden: _react.PropTypes.bool,
  children: _react.PropTypes.node
};

var _default = PageButton;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(PageButton, 'PageButton', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/pagination/PageButton.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/pagination/PageButton.js');
}();

;

/***/ }),

/***/ 1467:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _PageButton = __webpack_require__(1466);

var _PageButton2 = _interopRequireDefault(_PageButton);

var _SizePerPageDropDown = __webpack_require__(1293);

var _SizePerPageDropDown2 = _interopRequireDefault(_SizePerPageDropDown);

var _Const = __webpack_require__(1029);

var _Const2 = _interopRequireDefault(_Const);

var _util = __webpack_require__(1066);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PaginationList = function (_Component) {
  _inherits(PaginationList, _Component);

  function PaginationList(props) {
    _classCallCheck(this, PaginationList);

    var _this = _possibleConstructorReturn(this, (PaginationList.__proto__ || Object.getPrototypeOf(PaginationList)).call(this, props));

    _this.changePage = function () {
      return _this.__changePage__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.changeSizePerPage = function () {
      return _this.__changeSizePerPage__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.toggleDropDown = function () {
      return _this.__toggleDropDown__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.state = {
      open: _this.props.open
    };
    return _this;
  }

  _createClass(PaginationList, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps() {
      var keepSizePerPageState = this.props.keepSizePerPageState;

      if (!keepSizePerPageState) {
        this.setState(function () {
          return { open: false };
        });
      }
    }
  }, {
    key: '__changePage__REACT_HOT_LOADER__',
    value: function __changePage__REACT_HOT_LOADER__(page) {
      var _props = this.props,
          pageStartIndex = _props.pageStartIndex,
          prePage = _props.prePage,
          currPage = _props.currPage,
          nextPage = _props.nextPage,
          lastPage = _props.lastPage,
          firstPage = _props.firstPage,
          sizePerPage = _props.sizePerPage,
          keepSizePerPageState = _props.keepSizePerPageState;


      if (page === prePage) {
        page = currPage - 1 < pageStartIndex ? pageStartIndex : currPage - 1;
      } else if (page === nextPage) {
        page = currPage + 1 > this.lastPage ? this.lastPage : currPage + 1;
      } else if (page === lastPage) {
        page = this.lastPage;
      } else if (page === firstPage) {
        page = pageStartIndex;
      } else {
        page = parseInt(page, 10);
      }

      if (keepSizePerPageState) {
        this.setState(function () {
          return { open: false };
        });
      }

      if (page !== currPage) {
        this.props.changePage(page, sizePerPage);
      }
    }
  }, {
    key: '__changeSizePerPage__REACT_HOT_LOADER__',
    value: function __changeSizePerPage__REACT_HOT_LOADER__(pageNum) {
      var selectSize = typeof pageNum === 'string' ? parseInt(pageNum, 10) : pageNum;
      var currPage = this.props.currPage;

      if (selectSize !== this.props.sizePerPage) {
        this.totalPages = Math.ceil(this.props.dataSize / selectSize);
        this.lastPage = this.props.pageStartIndex + this.totalPages - 1;
        if (currPage > this.lastPage) currPage = this.lastPage;
        this.props.changePage(currPage, selectSize);
        if (this.props.onSizePerPageList) {
          this.props.onSizePerPageList(selectSize);
        }
      }
      this.setState(function () {
        return { open: false };
      });
    }
  }, {
    key: '__toggleDropDown__REACT_HOT_LOADER__',
    value: function __toggleDropDown__REACT_HOT_LOADER__() {
      var _this2 = this;

      this.setState(function () {
        return {
          open: !_this2.state.open
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          currPage = _props2.currPage,
          dataSize = _props2.dataSize,
          sizePerPage = _props2.sizePerPage,
          sizePerPageList = _props2.sizePerPageList,
          paginationShowsTotal = _props2.paginationShowsTotal,
          pageStartIndex = _props2.pageStartIndex,
          paginationPanel = _props2.paginationPanel,
          hidePageListOnlyOnePage = _props2.hidePageListOnlyOnePage;

      this.totalPages = Math.ceil(dataSize / sizePerPage);
      this.lastPage = this.props.pageStartIndex + this.totalPages - 1;
      var pageBtns = this.makePage(_util2.default.isFunction(paginationPanel));
      var dropdown = this.makeDropDown();

      var offset = Math.abs(_Const2.default.PAGE_START_INDEX - pageStartIndex);
      var start = (currPage - pageStartIndex) * sizePerPage;
      start = dataSize === 0 ? 0 : start + 1;
      var to = Math.min(sizePerPage * (currPage + offset) - 1, dataSize);
      if (to >= dataSize) to--;
      var total = paginationShowsTotal ? _react2.default.createElement(
        'span',
        null,
        'Showing rows ',
        start,
        ' to\xA0',
        to + 1,
        ' of\xA0',
        dataSize
      ) : null;

      if (_util2.default.isFunction(paginationShowsTotal)) {
        total = paginationShowsTotal(start, to + 1, dataSize);
      }

      var content = paginationPanel && paginationPanel({
        currPage: currPage,
        sizePerPage: sizePerPage,
        sizePerPageList: sizePerPageList,
        pageStartIndex: pageStartIndex,
        changePage: this.changePage,
        toggleDropDown: this.toggleDropDown,
        changeSizePerPage: this.changeSizePerPage,
        components: {
          totalText: total,
          sizePerPageDropdown: dropdown,
          pageList: pageBtns
        }
      });

      var hidePageList = hidePageListOnlyOnePage && this.totalPages === 1 ? 'none' : 'block';
      return _react2.default.createElement(
        'div',
        { className: 'row', style: { marginTop: 15 } },
        content || [_react2.default.createElement(
          'div',
          { key: 'paging-left', className: 'col-md-6 col-xs-6 col-sm-6 col-lg-6' },
          total,
          sizePerPageList.length > 1 ? dropdown : null
        ), _react2.default.createElement(
          'div',
          { key: 'paging-right', style: { display: hidePageList },
            className: 'col-md-6 col-xs-6 col-sm-6 col-lg-6' },
          pageBtns
        )]
      );
    }
  }, {
    key: 'makeDropDown',
    value: function makeDropDown() {
      var _this3 = this;

      var dropdown = void 0;
      var dropdownProps = void 0;
      var sizePerPageText = '';
      var _props3 = this.props,
          sizePerPageDropDown = _props3.sizePerPageDropDown,
          hideSizePerPage = _props3.hideSizePerPage,
          sizePerPage = _props3.sizePerPage,
          sizePerPageList = _props3.sizePerPageList;

      if (sizePerPageDropDown) {
        dropdown = sizePerPageDropDown({
          open: this.state.open,
          hideSizePerPage: hideSizePerPage,
          currSizePerPage: String(sizePerPage),
          sizePerPageList: sizePerPageList,
          toggleDropDown: this.toggleDropDown,
          changeSizePerPage: this.changeSizePerPage
        });
        if (dropdown.type.name === _SizePerPageDropDown2.default.name) {
          dropdownProps = dropdown.props;
        } else {
          return dropdown;
        }
      }

      if (dropdownProps || !dropdown) {
        var sizePerPageOptions = sizePerPageList.map(function (_sizePerPage) {
          var pageText = _sizePerPage.text || _sizePerPage;
          var pageNum = _sizePerPage.value || _sizePerPage;
          if (sizePerPage === pageNum) sizePerPageText = pageText;
          return _react2.default.createElement(
            'li',
            { key: pageText, role: 'presentation' },
            _react2.default.createElement(
              'a',
              { role: 'menuitem',
                tabIndex: '-1', href: '#',
                'data-page': pageNum,
                onClick: function onClick(e) {
                  e.preventDefault();
                  _this3.changeSizePerPage(pageNum);
                } },
              pageText
            )
          );
        });
        dropdown = _react2.default.createElement(_SizePerPageDropDown2.default, _extends({
          open: this.state.open,
          hidden: hideSizePerPage,
          currSizePerPage: String(sizePerPageText),
          options: sizePerPageOptions,
          onClick: this.toggleDropDown
        }, dropdownProps));
      }
      return dropdown;
    }
  }, {
    key: 'makePage',
    value: function makePage() {
      var _this4 = this;

      var isCustomPagingPanel = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      var pages = this.getPages();
      var isStart = function isStart(page, _ref) {
        var currPage = _ref.currPage,
            pageStartIndex = _ref.pageStartIndex,
            firstPage = _ref.firstPage,
            prePage = _ref.prePage;
        return currPage === pageStartIndex && (page === firstPage || page === prePage);
      };
      var isEnd = function isEnd(page, _ref2) {
        var currPage = _ref2.currPage,
            nextPage = _ref2.nextPage,
            lastPage = _ref2.lastPage;
        return currPage === _this4.lastPage && (page === nextPage || page === lastPage);
      };
      var pageBtns = pages.filter(function (page) {
        if (this.props.alwaysShowAllBtns) {
          return true;
        }
        return isStart(page, this.props) || isEnd(page, this.props) ? false : true;
      }, this).map(function (page) {
        var isActive = page === this.props.currPage;
        var isDisabled = isStart(page, this.props) || isEnd(page, this.props) ? true : false;
        var title = page + '';

        if (page === this.props.nextPage) {
          title = this.props.nextPageTitle;
        } else if (page === this.props.prePage) {
          title = this.props.prePageTitle;
        } else if (page === this.props.firstPage) {
          title = this.props.firstPageTitle;
        } else if (page === this.props.lastPage) {
          title = this.props.lastPageTitle;
        }

        return _react2.default.createElement(
          _PageButton2.default,
          { key: page,
            title: title,
            changePage: this.changePage,
            active: isActive,
            disable: isDisabled },
          page
        );
      }, this);
      var classname = (0, _classnames2.default)(isCustomPagingPanel ? null : 'react-bootstrap-table-page-btns-ul', 'pagination');
      return _react2.default.createElement(
        'ul',
        { className: classname },
        pageBtns
      );
    }
  }, {
    key: 'getLastPage',
    value: function getLastPage() {
      return this.lastPage;
    }
  }, {
    key: 'getPages',
    value: function getPages() {
      var pages = void 0;
      var endPage = this.totalPages;
      if (endPage <= 0) return [];
      var startPage = Math.max(this.props.currPage - Math.floor(this.props.paginationSize / 2), this.props.pageStartIndex);
      endPage = startPage + this.props.paginationSize - 1;

      if (endPage > this.lastPage) {
        endPage = this.lastPage;
        startPage = endPage - this.props.paginationSize + 1;
      }

      if (startPage !== this.props.pageStartIndex && this.totalPages > this.props.paginationSize && this.props.withFirstAndLast) {
        pages = [this.props.firstPage, this.props.prePage];
      } else if (this.totalPages > 1 || this.props.alwaysShowAllBtns) {
        pages = [this.props.prePage];
      } else {
        pages = [];
      }

      for (var i = startPage; i <= endPage; i++) {
        if (i >= this.props.pageStartIndex) pages.push(i);
      }

      if (endPage <= this.lastPage && pages.length > 1) {
        pages.push(this.props.nextPage);
      }
      if (endPage !== this.lastPage && this.props.withFirstAndLast) {
        pages.push(this.props.lastPage);
      }

      return pages;
    }
  }]);

  return PaginationList;
}(_react.Component);

PaginationList.propTypes = {
  currPage: _react.PropTypes.number,
  sizePerPage: _react.PropTypes.number,
  dataSize: _react.PropTypes.number,
  changePage: _react.PropTypes.func,
  sizePerPageList: _react.PropTypes.array,
  paginationShowsTotal: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.func]),
  paginationSize: _react.PropTypes.number,
  onSizePerPageList: _react.PropTypes.func,
  prePage: _react.PropTypes.string,
  pageStartIndex: _react.PropTypes.number,
  hideSizePerPage: _react.PropTypes.bool,
  alwaysShowAllBtns: _react.PropTypes.bool,
  withFirstAndLast: _react.PropTypes.bool,
  sizePerPageDropDown: _react.PropTypes.func,
  paginationPanel: _react.PropTypes.func,
  prePageTitle: _react.PropTypes.string,
  nextPageTitle: _react.PropTypes.string,
  firstPageTitle: _react.PropTypes.string,
  lastPageTitle: _react.PropTypes.string,
  hidePageListOnlyOnePage: _react.PropTypes.bool,
  keepSizePerPageState: _react.PropTypes.bool
};

PaginationList.defaultProps = {
  sizePerPage: _Const2.default.SIZE_PER_PAGE,
  pageStartIndex: _Const2.default.PAGE_START_INDEX
};

var _default = PaginationList;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(PaginationList, 'PaginationList', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/pagination/PaginationList.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/pagination/PaginationList.js');
}();

;

/***/ }),

/***/ 1468:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableDataStore = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* eslint no-nested-ternary: 0 */
/* eslint guard-for-in: 0 */
/* eslint no-console: 0 */
/* eslint eqeqeq: 0 */
/* eslint one-var: 0 */


var _Const = __webpack_require__(1029);

var _Const2 = _interopRequireDefault(_Const);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TableDataStore = function () {
  function TableDataStore(data) {
    var _this = this;

    _classCallCheck(this, TableDataStore);

    this.isValidKey = function () {
      return _this.__isValidKey__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    this.data = data;
    this.filteredData = null;
    this.isOnFilter = false;
    this.filterObj = null;
    this.searchText = null;
    this.sortList = [];
    this.pageObj = {};
    this.selected = [];
    this.showOnlySelected = false;
  }

  _createClass(TableDataStore, [{
    key: 'setProps',
    value: function setProps(props) {
      this.keyField = props.keyField;
      this.enablePagination = props.isPagination;
      this.colInfos = props.colInfos;
      this.remote = props.remote;
      this.multiColumnSearch = props.multiColumnSearch;
      // default behaviour if strictSearch prop is not provided: !multiColumnSearch
      this.strictSearch = typeof props.strictSearch === 'undefined' ? !props.multiColumnSearch : props.strictSearch;
      this.multiColumnSort = props.multiColumnSort;
    }
  }, {
    key: 'clean',
    value: function clean() {
      this.filteredData = null;
      this.isOnFilter = false;
      this.filterObj = null;
      this.searchText = null;
      this.sortList = [];
      this.pageObj = {};
      this.selected = [];
    }
  }, {
    key: 'isSearching',
    value: function isSearching() {
      return this.searchText !== null;
    }
  }, {
    key: 'isFiltering',
    value: function isFiltering() {
      return this.filterObj !== null;
    }
  }, {
    key: 'setData',
    value: function setData(data) {
      this.data = data;
      if (this.remote) {
        return;
      }

      this._refresh(true);
    }
  }, {
    key: 'getColInfos',
    value: function getColInfos() {
      return this.colInfos;
    }
  }, {
    key: 'getSortInfo',
    value: function getSortInfo() {
      return this.sortList;
    }
  }, {
    key: 'setSortInfo',
    value: function setSortInfo(order, sortField) {
      if ((typeof order === 'undefined' ? 'undefined' : _typeof(order)) !== (typeof sortField === 'undefined' ? 'undefined' : _typeof(sortField))) {
        throw new Error('The type of sort field and order should be both with String or Array');
      }
      if (Array.isArray(order) && Array.isArray(sortField)) {
        if (order.length !== sortField.length) {
          throw new Error('The length of sort fields and orders should be equivalent');
        }
        order = order.slice().reverse();
        this.sortList = sortField.slice().reverse().map(function (field, i) {
          return {
            order: order[i],
            sortField: field
          };
        });
        this.sortList = this.sortList.slice(0, this.multiColumnSort);
      } else {
        var sortObj = {
          order: order,
          sortField: sortField
        };

        if (this.multiColumnSort > 1) {
          var i = this.sortList.length - 1;
          var sortFieldInHistory = false;

          for (; i >= 0; i--) {
            if (this.sortList[i].sortField === sortField) {
              sortFieldInHistory = true;
              break;
            }
          }

          if (sortFieldInHistory) {
            if (i > 0) {
              this.sortList = this.sortList.slice(0, i);
            } else {
              this.sortList = this.sortList.slice(1);
            }
          }

          this.sortList.unshift(sortObj);
          this.sortList = this.sortList.slice(0, this.multiColumnSort);
        } else {
          this.sortList = [sortObj];
        }
      }
    }
  }, {
    key: 'cleanSortInfo',
    value: function cleanSortInfo() {
      this.sortList = [];
    }
  }, {
    key: 'setSelectedRowKey',
    value: function setSelectedRowKey(selectedRowKeys) {
      this.selected = selectedRowKeys;
    }
  }, {
    key: 'getRowByKey',
    value: function getRowByKey(keys) {
      var _this2 = this;

      // Bad Performance #1164
      // return keys.map(key => {
      //   const result = this.data.filter(d => d[this.keyField] === key);
      //   if (result.length !== 0) return result[0];
      // });
      var result = [];
      if (!keys || keys.length === 0) {
        return result;
      }

      var _loop = function _loop(i) {
        var d = _this2.data[i];
        if (keys.indexOf(d[_this2.keyField]) > -1) {
          keys = keys.filter(function (k) {
            return k !== d[_this2.keyField];
          });
          result.push(d);
        }
      };

      for (var i = 0; i < this.data.length; i++) {
        _loop(i);
      }
      return result;
    }
  }, {
    key: 'getSelectedRowKeys',
    value: function getSelectedRowKeys() {
      return this.selected;
    }
  }, {
    key: 'getCurrentDisplayData',
    value: function getCurrentDisplayData() {
      if (this.isOnFilter) return this.filteredData;else return this.data;
    }
  }, {
    key: '_refresh',
    value: function _refresh(skipSorting) {
      if (this.isOnFilter) {
        if (this.filterObj !== null) this.filter(this.filterObj);
        if (this.searchText !== null) this.search(this.searchText);
      }
      if (!skipSorting && this.sortList.length > 0) {
        this.sort();
      }
    }
  }, {
    key: 'ignoreNonSelected',
    value: function ignoreNonSelected() {
      var _this3 = this;

      this.showOnlySelected = !this.showOnlySelected;
      if (this.showOnlySelected) {
        this.isOnFilter = true;
        this.filteredData = this.data.filter(function (row) {
          var result = _this3.selected.find(function (x) {
            return row[_this3.keyField] === x;
          });
          return typeof result !== 'undefined' ? true : false;
        });
      } else {
        this.isOnFilter = false;
      }
    }
  }, {
    key: 'sort',
    value: function sort() {
      var currentDisplayData = this.getCurrentDisplayData();

      currentDisplayData = this._sort(currentDisplayData);

      return this;
    }
  }, {
    key: 'page',
    value: function page(_page, sizePerPage) {
      this.pageObj.end = _page * sizePerPage - 1;
      this.pageObj.start = this.pageObj.end - (sizePerPage - 1);
      return this;
    }
  }, {
    key: 'edit',
    value: function edit(newVal, rowIndex, fieldName) {
      var currentDisplayData = this.getCurrentDisplayData();
      var rowKeyCache = void 0;
      if (!this.enablePagination) {
        currentDisplayData[rowIndex][fieldName] = newVal;
        rowKeyCache = currentDisplayData[rowIndex][this.keyField];
      } else {
        currentDisplayData[this.pageObj.start + rowIndex][fieldName] = newVal;
        rowKeyCache = currentDisplayData[this.pageObj.start + rowIndex][this.keyField];
      }
      if (this.isOnFilter) {
        this.data.forEach(function (row) {
          if (row[this.keyField] === rowKeyCache) {
            row[fieldName] = newVal;
          }
        }, this);
        if (this.filterObj !== null) this.filter(this.filterObj);
        if (this.searchText !== null) this.search(this.searchText);
      }
      return this;
    }
  }, {
    key: 'addAtBegin',
    value: function addAtBegin(newObj) {
      if (!newObj[this.keyField] || newObj[this.keyField].toString() === '') {
        throw new Error(this.keyField + ' can\'t be empty value.');
      }
      var currentDisplayData = this.getCurrentDisplayData();
      currentDisplayData.forEach(function (row) {
        if (row[this.keyField].toString() === newObj[this.keyField].toString()) {
          throw new Error(this.keyField + ' ' + newObj[this.keyField] + ' already exists');
        }
      }, this);
      currentDisplayData.unshift(newObj);
      if (this.isOnFilter) {
        this.data.unshift(newObj);
      }
      this._refresh(false);
    }
  }, {
    key: 'add',
    value: function add(newObj) {
      var e = this.isValidKey(newObj[this.keyField]);
      if (e) throw new Error(e);

      var currentDisplayData = this.getCurrentDisplayData();
      currentDisplayData.push(newObj);
      if (this.isOnFilter) {
        this.data.push(newObj);
      }
      this._refresh(false);
    }
  }, {
    key: '__isValidKey__REACT_HOT_LOADER__',
    value: function __isValidKey__REACT_HOT_LOADER__(key) {
      var _this4 = this;

      if (key === null || key === undefined || key.toString() === '') {
        return this.keyField + ' can\'t be empty value.';
      }
      var currentDisplayData = this.getCurrentDisplayData();
      var exist = currentDisplayData.find(function (row) {
        return row[_this4.keyField].toString() === key.toString();
      });
      if (exist) return this.keyField + ' ' + key + ' already exists';
    }
  }, {
    key: 'remove',
    value: function remove(rowKey) {
      var _this5 = this;

      var currentDisplayData = this.getCurrentDisplayData();
      var result = currentDisplayData.filter(function (row) {
        return rowKey.indexOf(row[_this5.keyField]) === -1;
      });

      if (this.isOnFilter) {
        this.data = this.data.filter(function (row) {
          return rowKey.indexOf(row[_this5.keyField]) === -1;
        });
        this.filteredData = result;
      } else {
        this.data = result;
      }
    }
  }, {
    key: 'filter',
    value: function filter(filterObj) {
      if (Object.keys(filterObj).length === 0) {
        this.filteredData = null;
        this.isOnFilter = false;
        this.filterObj = null;
        if (this.searchText) this._search(this.data);
      } else {
        var source = this.data;
        this.filterObj = filterObj;
        if (this.searchText) {
          this._search(source);
          source = this.filteredData;
        }
        this._filter(source);
      }
    }
  }, {
    key: 'filterNumber',
    value: function filterNumber(targetVal, filterVal, comparator) {
      var valid = true;
      switch (comparator) {
        case '=':
          {
            if (targetVal != filterVal) {
              valid = false;
            }
            break;
          }
        case '>':
          {
            if (targetVal <= filterVal) {
              valid = false;
            }
            break;
          }
        case '>=':
          {
            if (targetVal < filterVal) {
              valid = false;
            }
            break;
          }
        case '<':
          {
            if (targetVal >= filterVal) {
              valid = false;
            }
            break;
          }
        case '<=':
          {
            if (targetVal > filterVal) {
              valid = false;
            }
            break;
          }
        case '!=':
          {
            if (targetVal == filterVal) {
              valid = false;
            }
            break;
          }
        default:
          {
            console.error('Number comparator provided is not supported');
            break;
          }
      }
      return valid;
    }
  }, {
    key: 'filterDate',
    value: function filterDate(targetVal, filterVal, comparator) {
      if (!targetVal) return false;

      var filterDate = filterVal.getDate();
      var filterMonth = filterVal.getMonth();
      var filterYear = filterVal.getFullYear();

      if ((typeof targetVal === 'undefined' ? 'undefined' : _typeof(targetVal)) !== 'object') {
        targetVal = new Date(targetVal);
      }

      var targetDate = targetVal.getDate();
      var targetMonth = targetVal.getMonth();
      var targetYear = targetVal.getFullYear();

      var valid = true;
      switch (comparator) {
        case '=':
          {
            if (filterDate !== targetDate || filterMonth !== targetMonth || filterYear !== targetYear) {
              valid = false;
            }
            break;
          }
        case '>':
          {
            if (targetVal <= filterVal) {
              valid = false;
            }
            break;
          }
        case '>=':
          {
            if (targetYear < filterYear) {
              valid = false;
            } else if (targetYear === filterYear && targetMonth < filterMonth) {
              valid = false;
            } else if (targetYear === filterYear && targetMonth === filterMonth && targetDate < filterDate) {
              valid = false;
            }
            break;
          }
        case '<':
          {
            if (targetVal >= filterVal) {
              valid = false;
            }
            break;
          }
        case '<=':
          {
            if (targetYear > filterYear) {
              valid = false;
            } else if (targetYear === filterYear && targetMonth > filterMonth) {
              valid = false;
            } else if (targetYear === filterYear && targetMonth === filterMonth && targetDate > filterDate) {
              valid = false;
            }
            break;
          }
        case '!=':
          {
            if (filterDate === targetDate && filterMonth === targetMonth && filterYear === targetYear) {
              valid = false;
            }
            break;
          }
        default:
          {
            console.error('Date comparator provided is not supported');
            break;
          }
      }
      return valid;
    }
  }, {
    key: 'filterRegex',
    value: function filterRegex(targetVal, filterVal) {
      try {
        return new RegExp(filterVal, 'i').test(targetVal);
      } catch (e) {
        return true;
      }
    }
  }, {
    key: 'filterCustom',
    value: function filterCustom(targetVal, filterVal, callbackInfo, cond) {
      if (callbackInfo !== null && (typeof callbackInfo === 'undefined' ? 'undefined' : _typeof(callbackInfo)) === 'object') {
        return callbackInfo.callback(targetVal, callbackInfo.callbackParameters);
      }

      return this.filterText(targetVal, filterVal, cond);
    }
  }, {
    key: 'filterText',
    value: function filterText(targetVal, filterVal) {
      var cond = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _Const2.default.FILTER_COND_LIKE;

      targetVal = targetVal.toString();
      filterVal = filterVal.toString();
      if (cond === _Const2.default.FILTER_COND_EQ) {
        return targetVal === filterVal;
      } else {
        targetVal = targetVal.toLowerCase();
        filterVal = filterVal.toLowerCase();
        return !(targetVal.indexOf(filterVal) === -1);
      }
    }

    /* General search function
     * It will search for the text if the input includes that text;
     */

  }, {
    key: 'search',
    value: function search(searchText) {
      if (searchText.trim() === '') {
        this.filteredData = null;
        this.isOnFilter = false;
        this.searchText = null;
        if (this.filterObj) this._filter(this.data);
      } else {
        var source = this.data;
        this.searchText = searchText;
        if (this.filterObj) {
          this._filter(source);
          source = this.filteredData;
        }
        this._search(source);
      }
    }
  }, {
    key: '_filter',
    value: function _filter(source) {
      var _this6 = this;

      var filterObj = this.filterObj;
      this.filteredData = source.filter(function (row, r) {
        var valid = true;
        var filterVal = void 0;
        for (var key in filterObj) {
          var targetVal = row[key];
          if (targetVal === null || targetVal === undefined) {
            targetVal = '';
          }

          switch (filterObj[key].type) {
            case _Const2.default.FILTER_TYPE.NUMBER:
              {
                filterVal = filterObj[key].value.number;
                break;
              }
            case _Const2.default.FILTER_TYPE.CUSTOM:
              {
                filterVal = _typeof(filterObj[key].value) === 'object' ? undefined : typeof filterObj[key].value === 'string' ? filterObj[key].value.toLowerCase() : filterObj[key].value;
                break;
              }
            case _Const2.default.FILTER_TYPE.DATE:
              {
                filterVal = filterObj[key].value.date;
                break;
              }
            case _Const2.default.FILTER_TYPE.REGEX:
              {
                filterVal = filterObj[key].value;
                break;
              }
            default:
              {
                filterVal = filterObj[key].value;
                if (filterVal === undefined) {
                  // Support old filter
                  filterVal = filterObj[key];
                }
                break;
              }
          }
          var format = void 0,
              filterFormatted = void 0,
              formatExtraData = void 0,
              filterValue = void 0;
          if (_this6.colInfos[key]) {
            format = _this6.colInfos[key].format;
            filterFormatted = _this6.colInfos[key].filterFormatted;
            formatExtraData = _this6.colInfos[key].formatExtraData;
            filterValue = _this6.colInfos[key].filterValue;
            if (filterFormatted && format) {
              targetVal = format(row[key], row, formatExtraData, r);
            } else if (filterValue) {
              targetVal = filterValue(row[key], row);
            }
          }

          switch (filterObj[key].type) {
            case _Const2.default.FILTER_TYPE.NUMBER:
              {
                valid = _this6.filterNumber(targetVal, filterVal, filterObj[key].value.comparator);
                break;
              }
            case _Const2.default.FILTER_TYPE.DATE:
              {
                valid = _this6.filterDate(targetVal, filterVal, filterObj[key].value.comparator);
                break;
              }
            case _Const2.default.FILTER_TYPE.REGEX:
              {
                valid = _this6.filterRegex(targetVal, filterVal);
                break;
              }
            case _Const2.default.FILTER_TYPE.CUSTOM:
              {
                var cond = filterObj[key].props ? filterObj[key].props.cond : _Const2.default.FILTER_COND_LIKE;
                valid = _this6.filterCustom(targetVal, filterVal, filterObj[key].value, cond);
                break;
              }
            default:
              {
                if (filterObj[key].type === _Const2.default.FILTER_TYPE.SELECT && filterFormatted && filterFormatted && format) {
                  filterVal = format(filterVal, row, formatExtraData, r);
                }
                var _cond = filterObj[key].props ? filterObj[key].props.cond : _Const2.default.FILTER_COND_LIKE;
                valid = _this6.filterText(targetVal, filterVal, _cond);
                break;
              }
          }
          if (!valid) {
            break;
          }
        }
        return valid;
      });
      this.isOnFilter = true;
    }

    /*
     * Four different sort modes, all case insensitive:
     * (1) strictSearch && !multiColumnSearch
     *     search text must be contained as provided in a single column
     * (2) strictSearch && multiColumnSearch
     *     conjunction (AND combination) of whitespace separated terms over multiple columns
     * (3) !strictSearch && !multiColumnSearch
     *     conjunction (AND combination) of whitespace separated terms in a single column
     * (4) !strictSearch && multiColumnSearch
     *     any of the whitespace separated terms must be contained in any column
     */

  }, {
    key: '_search',
    value: function _search(source) {
      var _this7 = this;

      var searchTextArray = void 0;
      if (this.multiColumnSearch || !this.strictSearch) {
        // ignore leading and trailing whitespaces
        searchTextArray = this.searchText.trim().toLowerCase().split(/\s+/);
      } else {
        searchTextArray = [this.searchText.toLowerCase()];
      }
      var searchTermCount = searchTextArray.length;
      var multipleTerms = searchTermCount > 1;
      var nonStrictMultiCol = multipleTerms && !this.strictSearch && this.multiColumnSearch;
      var nonStrictSingleCol = multipleTerms && !this.strictSearch && !this.multiColumnSearch;
      this.filteredData = source.filter(function (row, r) {
        var keys = Object.keys(row);
        // only clone array if necessary
        var searchTerms = multipleTerms ? searchTextArray.slice() : searchTextArray;
        // for loops are ugly, but performance matters here.
        // And you cant break from a forEach.
        // http://jsperf.com/for-vs-foreach/66
        for (var i = 0, keysLength = keys.length; i < keysLength; i++) {
          var key = keys[i];
          var colInfo = _this7.colInfos[key];
          if (colInfo && colInfo.searchable) {
            var format = colInfo.format,
                filterFormatted = colInfo.filterFormatted,
                filterValue = colInfo.filterValue,
                formatExtraData = colInfo.formatExtraData;

            var targetVal = void 0;
            if (filterFormatted && format) {
              targetVal = format(row[key], row, formatExtraData, r);
            } else if (filterValue) {
              targetVal = filterValue(row[key], row);
            } else {
              targetVal = row[key];
            }
            if (targetVal !== null && typeof targetVal !== 'undefined') {
              targetVal = targetVal.toString().toLowerCase();
              if (nonStrictSingleCol && searchTermCount > searchTerms.length) {
                // reset search terms for single column search
                searchTerms = searchTextArray.slice();
              }
              for (var j = searchTerms.length - 1; j > -1; j--) {
                if (targetVal.indexOf(searchTerms[j]) !== -1) {
                  if (nonStrictMultiCol || searchTerms.length === 1) {
                    // match found: the last or only one
                    return true;
                  }
                  // match found: but there are more search terms to check for
                  searchTerms.splice(j, 1);
                } else if (!_this7.multiColumnSearch) {
                  // one of the search terms was not found in this column
                  break;
                }
              }
            }
          }
        }
        return false;
      });
      this.isOnFilter = true;
    }
  }, {
    key: '_sort',
    value: function _sort(arr) {
      var _this8 = this;

      if (this.sortList.length === 0 || typeof this.sortList[0] === 'undefined') {
        return arr;
      }

      arr.sort(function (a, b) {
        var result = 0;

        for (var i = 0; i < _this8.sortList.length; i++) {
          var sortDetails = _this8.sortList[i];
          var isDesc = sortDetails.order.toLowerCase() === _Const2.default.SORT_DESC;

          var _colInfos$sortDetails = _this8.colInfos[sortDetails.sortField],
              sortFunc = _colInfos$sortDetails.sortFunc,
              sortFuncExtraData = _colInfos$sortDetails.sortFuncExtraData;


          if (sortFunc) {
            result = sortFunc(a, b, sortDetails.order, sortDetails.sortField, sortFuncExtraData);
          } else {
            var valueA = a[sortDetails.sortField] === null ? '' : a[sortDetails.sortField];
            var valueB = b[sortDetails.sortField] === null ? '' : b[sortDetails.sortField];
            if (isDesc) {
              if (typeof valueB === 'string') {
                result = valueB.localeCompare(valueA);
              } else {
                result = valueA > valueB ? -1 : valueA < valueB ? 1 : 0;
              }
            } else {
              if (typeof valueA === 'string') {
                result = valueA.localeCompare(valueB);
              } else {
                result = valueA < valueB ? -1 : valueA > valueB ? 1 : 0;
              }
            }
          }

          if (result !== 0) {
            return result;
          }
        }

        return result;
      });

      return arr;
    }
  }, {
    key: 'getDataIgnoringPagination',
    value: function getDataIgnoringPagination() {
      return this.getCurrentDisplayData();
    }
  }, {
    key: 'get',
    value: function get() {
      var _data = this.getCurrentDisplayData();

      if (_data.length === 0) return _data;

      var remote = typeof this.remote === 'function' ? this.remote(_Const2.default.REMOTE)[_Const2.default.REMOTE_PAGE] : this.remote;

      if (remote || !this.enablePagination) {
        return _data;
      } else {
        var result = [];
        for (var i = this.pageObj.start; i <= this.pageObj.end; i++) {
          result.push(_data[i]);
          if (i + 1 === _data.length) break;
        }
        return result;
      }
    }
  }, {
    key: 'getKeyField',
    value: function getKeyField() {
      return this.keyField;
    }
  }, {
    key: 'getDataNum',
    value: function getDataNum() {
      return this.getCurrentDisplayData().length;
    }
  }, {
    key: 'isChangedPage',
    value: function isChangedPage() {
      return this.pageObj.start && this.pageObj.end ? true : false;
    }
  }, {
    key: 'isEmpty',
    value: function isEmpty() {
      return this.data.length === 0 || this.data === null || this.data === undefined;
    }
  }, {
    key: 'getAllRowkey',
    value: function getAllRowkey() {
      var _this9 = this;

      return this.data.map(function (row) {
        return row[_this9.keyField];
      });
    }
  }]);

  return TableDataStore;
}();

exports.TableDataStore = TableDataStore;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(TableDataStore, 'TableDataStore', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/store/TableDataStore.js');
}();

;

/***/ }),

/***/ 1469:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ButtonGroup = function (_Component) {
  _inherits(ButtonGroup, _Component);

  function ButtonGroup() {
    _classCallCheck(this, ButtonGroup);

    return _possibleConstructorReturn(this, (ButtonGroup.__proto__ || Object.getPrototypeOf(ButtonGroup)).apply(this, arguments));
  }

  _createClass(ButtonGroup, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          sizeClass = _props.sizeClass,
          children = _props.children,
          rest = _objectWithoutProperties(_props, ['className', 'sizeClass', 'children']);

      return _react2.default.createElement(
        'div',
        _extends({ className: 'btn-group ' + sizeClass + ' ' + className, role: 'group' }, rest),
        children
      );
    }
  }]);

  return ButtonGroup;
}(_react.Component);

ButtonGroup.propTypes = {
  sizeClass: _react.PropTypes.string,
  className: _react.PropTypes.string
};
ButtonGroup.defaultProps = {
  sizeClass: 'btn-group-sm',
  className: ''
};

var _default = ButtonGroup;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ButtonGroup, 'ButtonGroup', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/toolbar/ButtonGroup.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/toolbar/ButtonGroup.js');
}();

;

/***/ }),

/***/ 1470:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _InsertModalHeader = __webpack_require__(1300);

var _InsertModalHeader2 = _interopRequireDefault(_InsertModalHeader);

var _InsertModalFooter = __webpack_require__(1299);

var _InsertModalFooter2 = _interopRequireDefault(_InsertModalFooter);

var _InsertModalBody = __webpack_require__(1298);

var _InsertModalBody2 = _interopRequireDefault(_InsertModalBody);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint no-console: 0 */

var defaultModalClassName = 'react-bs-table-insert-modal';

var InsertModal = function (_Component) {
  _inherits(InsertModal, _Component);

  function InsertModal() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, InsertModal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = InsertModal.__proto__ || Object.getPrototypeOf(InsertModal)).call.apply(_ref, [this].concat(args))), _this), _this.handleSave = function () {
      var _this2;

      return (_this2 = _this).__handleSave__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(InsertModal, [{
    key: '__handleSave__REACT_HOT_LOADER__',
    value: function __handleSave__REACT_HOT_LOADER__() {
      var bodyRefs = this.refs.body;
      if (bodyRefs.getFieldValue) {
        this.props.onSave(bodyRefs.getFieldValue());
      } else {
        console.error('Custom InsertModalBody should implement getFieldValue function\n        and should return an object presented as the new row that user input.');
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          headerComponent = _props.headerComponent,
          footerComponent = _props.footerComponent,
          bodyComponent = _props.bodyComponent;
      var _props2 = this.props,
          columns = _props2.columns,
          validateState = _props2.validateState,
          ignoreEditable = _props2.ignoreEditable,
          onModalClose = _props2.onModalClose;

      var bodyAttr = { columns: columns, validateState: validateState, ignoreEditable: ignoreEditable };

      bodyComponent = bodyComponent && bodyComponent(columns, validateState, ignoreEditable);

      headerComponent = headerComponent && headerComponent(onModalClose, this.handleSave);

      footerComponent = footerComponent && footerComponent(onModalClose, this.handleSave);

      if (bodyComponent) {
        bodyComponent = _react2.default.cloneElement(bodyComponent, { ref: 'body' });
      }

      if (headerComponent && headerComponent.type.name === _InsertModalHeader2.default.name) {
        var eventProps = {};
        if (!headerComponent.props.onModalClose) eventProps.onModalClose = onModalClose;
        if (!headerComponent.props.onSave) eventProps.onSave = this.handleSave;
        if (Object.keys(eventProps).length > 0) {
          headerComponent = _react2.default.cloneElement(headerComponent, eventProps);
        }
      } else if (headerComponent && headerComponent.type.name !== _InsertModalHeader2.default.name) {
        var className = headerComponent.props.className;

        if (typeof className === 'undefined' || className.indexOf('modal-header') === -1) {
          headerComponent = _react2.default.createElement(
            'div',
            { className: 'modal-header' },
            headerComponent
          );
        }
      }

      if (footerComponent && footerComponent.type.name === _InsertModalFooter2.default.name) {
        var _eventProps = {};
        if (!footerComponent.props.onModalClose) _eventProps.onModalClose = onModalClose;
        if (!footerComponent.props.onSave) _eventProps.onSave = this.handleSave;
        if (Object.keys(_eventProps).length > 0) {
          footerComponent = _react2.default.cloneElement(footerComponent, _eventProps);
        }
      } else if (footerComponent && footerComponent.type.name !== _InsertModalFooter2.default.name) {
        var _className = footerComponent.props.className;

        if (typeof _className === 'undefined' || _className.indexOf('modal-footer') === -1) {
          footerComponent = _react2.default.createElement(
            'div',
            { className: 'modal-footer' },
            footerComponent
          );
        }
      }

      return _react2.default.createElement(
        'div',
        { className: 'modal-content ' + defaultModalClassName },
        headerComponent || _react2.default.createElement(_InsertModalHeader2.default, {
          className: 'react-bs-table-inser-modal-header',
          onModalClose: onModalClose }),
        bodyComponent || _react2.default.createElement(_InsertModalBody2.default, _extends({ ref: 'body' }, bodyAttr)),
        footerComponent || _react2.default.createElement(_InsertModalFooter2.default, {
          className: 'react-bs-table-inser-modal-footer',
          onModalClose: onModalClose,
          onSave: this.handleSave })
      );
    }
  }]);

  return InsertModal;
}(_react.Component);

var _default = InsertModal;
exports.default = _default;

InsertModal.propTypes = {
  columns: _react.PropTypes.array.isRequired,
  validateState: _react.PropTypes.object.isRequired,
  ignoreEditable: _react.PropTypes.bool,
  headerComponent: _react.PropTypes.func,
  bodyComponent: _react.PropTypes.func,
  footerComponent: _react.PropTypes.func,
  onModalClose: _react.PropTypes.func,
  onSave: _react.PropTypes.func
};

InsertModal.defaultProps = {};
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(defaultModalClassName, 'defaultModalClassName', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/toolbar/InsertModal.js');

  __REACT_HOT_LOADER__.register(InsertModal, 'InsertModal', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/toolbar/InsertModal.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/toolbar/InsertModal.js');
}();

;

/***/ }),

/***/ 1471:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactModal = __webpack_require__(85);

var _reactModal2 = _interopRequireDefault(_reactModal);

var _Const = __webpack_require__(1029);

var _Const2 = _interopRequireDefault(_Const);

var _Notification = __webpack_require__(1291);

var _Notification2 = _interopRequireDefault(_Notification);

var _InsertModal = __webpack_require__(1470);

var _InsertModal2 = _interopRequireDefault(_InsertModal);

var _InsertButton = __webpack_require__(1297);

var _InsertButton2 = _interopRequireDefault(_InsertButton);

var _DeleteButton = __webpack_require__(1295);

var _DeleteButton2 = _interopRequireDefault(_DeleteButton);

var _ExportCSVButton = __webpack_require__(1296);

var _ExportCSVButton2 = _interopRequireDefault(_ExportCSVButton);

var _ShowSelectedOnlyButton = __webpack_require__(1302);

var _ShowSelectedOnlyButton2 = _interopRequireDefault(_ShowSelectedOnlyButton);

var _SearchField = __webpack_require__(1301);

var _SearchField2 = _interopRequireDefault(_SearchField);

var _ClearSearchButton = __webpack_require__(1294);

var _ClearSearchButton2 = _interopRequireDefault(_ClearSearchButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint no-console: 0 */

// import classSet from 'classnames';

// import editor from '../Editor';


var ToolBar = function (_Component) {
  _inherits(ToolBar, _Component);

  function ToolBar(props) {
    var _arguments = arguments;

    _classCallCheck(this, ToolBar);

    var _this = _possibleConstructorReturn(this, (ToolBar.__proto__ || Object.getPrototypeOf(ToolBar)).call(this, props));

    _this.displayCommonMessage = function () {
      return _this.__displayCommonMessage__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleSaveBtnClick = function () {
      return _this.__handleSaveBtnClick__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.afterHandleSaveBtnClick = function () {
      return _this.__afterHandleSaveBtnClick__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleModalClose = function () {
      return _this.__handleModalClose__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleModalOpen = function () {
      return _this.__handleModalOpen__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleShowOnlyToggle = function () {
      return _this.__handleShowOnlyToggle__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleDropRowBtnClick = function () {
      return _this.__handleDropRowBtnClick__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleDebounce = function (func, wait, immediate) {
      var timeout = void 0;

      return function () {
        var later = function later() {
          timeout = null;

          if (!immediate) {
            func.apply(_this, _arguments);
          }
        };

        var callNow = immediate && !timeout;

        clearTimeout(timeout);

        timeout = setTimeout(later, wait || 0);

        if (callNow) {
          func.appy(_this, _arguments);
        }
      };
    };

    _this.handleKeyUp = function () {
      return _this.__handleKeyUp__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleExportCSV = function () {
      return _this.__handleExportCSV__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleClearBtnClick = function () {
      return _this.__handleClearBtnClick__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.timeouteClear = 0;
    _this.modalClassName;
    _this.state = {
      isInsertModalOpen: false,
      validateState: null,
      shakeEditor: false,
      showSelected: false
    };
    return _this;
  }

  _createClass(ToolBar, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      var delay = this.props.searchDelayTime ? this.props.searchDelayTime : 0;
      this.debounceCallback = this.handleDebounce(function () {
        var seachInput = _this2.refs.seachInput;

        seachInput && _this2.props.onSearch(seachInput.getValue());
      }, delay);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.reset) {
        this.setSearchInput('');
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.clearTimeout();
    }
  }, {
    key: 'setSearchInput',
    value: function setSearchInput(text) {
      var seachInput = this.refs.seachInput;

      if (seachInput && seachInput.value !== text) {
        seachInput.value = text;
      }
    }
  }, {
    key: 'clearTimeout',
    value: function (_clearTimeout) {
      function clearTimeout() {
        return _clearTimeout.apply(this, arguments);
      }

      clearTimeout.toString = function () {
        return _clearTimeout.toString();
      };

      return clearTimeout;
    }(function () {
      if (this.timeouteClear) {
        clearTimeout(this.timeouteClear);
        this.timeouteClear = 0;
      }
    })
  }, {
    key: '__displayCommonMessage__REACT_HOT_LOADER__',
    value: function __displayCommonMessage__REACT_HOT_LOADER__() {
      this.refs.notifier.notice('error', 'Form validate errors, please checking!', 'Pressed ESC can cancel');
    }
  }, {
    key: 'validateNewRow',
    value: function validateNewRow(newRow) {
      var _this3 = this;

      var validateState = {};
      var isValid = true;
      var tempMsg = void 0;
      var responseType = void 0;

      this.props.columns.forEach(function (column) {
        if (column.isKey && column.keyValidator) {
          // key validator for checking exist key
          tempMsg = _this3.props.isValidKey(newRow[column.field]);
          if (tempMsg) {
            _this3.displayCommonMessage();
            isValid = false;
            validateState[column.field] = tempMsg;
          }
        } else if (column.editable && column.editable.validator) {
          // process validate
          tempMsg = column.editable.validator(newRow[column.field], newRow);
          responseType = typeof tempMsg === 'undefined' ? 'undefined' : _typeof(tempMsg);
          if (responseType !== 'object' && tempMsg !== true) {
            _this3.displayCommonMessage();
            isValid = false;
            validateState[column.field] = tempMsg;
          } else if (responseType === 'object' && tempMsg.isValid !== true) {
            _this3.refs.notifier.notice(tempMsg.notification.type, tempMsg.notification.msg, tempMsg.notification.title);
            isValid = false;
            validateState[column.field] = tempMsg.notification.msg;
          }
        }
      });

      if (isValid) {
        return true;
      } else {
        this.clearTimeout();
        // show error in form and shake it
        this.setState(function () {
          return { validateState: validateState, shakeEditor: true };
        });
        this.timeouteClear = setTimeout(function () {
          _this3.setState(function () {
            return { shakeEditor: false };
          });
        }, 300);
        return null;
      }
    }
  }, {
    key: '__handleSaveBtnClick__REACT_HOT_LOADER__',
    value: function __handleSaveBtnClick__REACT_HOT_LOADER__(newRow) {
      if (!this.validateNewRow(newRow)) {
        // validation fail
        return;
      }
      var msg = this.props.onAddRow(newRow);
      if (msg !== false) {
        this.afterHandleSaveBtnClick(msg);
      }
    }
  }, {
    key: '__afterHandleSaveBtnClick__REACT_HOT_LOADER__',
    value: function __afterHandleSaveBtnClick__REACT_HOT_LOADER__(msg) {
      var _this4 = this;

      if (msg) {
        this.refs.notifier.notice('error', msg, 'Pressed ESC can cancel');
        this.clearTimeout();
        // shake form and hack prevent modal hide
        this.setState(function () {
          return {
            shakeEditor: true,
            validateState: 'this is hack for prevent bootstrap modal hide'
          };
        });
        // clear animate class
        this.timeouteClear = setTimeout(function () {
          _this4.setState(function () {
            return { shakeEditor: false };
          });
        }, 300);
      } else {
        // reset state and hide modal hide
        this.setState(function () {
          return {
            validateState: null,
            shakeEditor: false,
            isInsertModalOpen: false
          };
        });
      }
    }
  }, {
    key: '__handleModalClose__REACT_HOT_LOADER__',
    value: function __handleModalClose__REACT_HOT_LOADER__() {
      this.setState(function () {
        return { isInsertModalOpen: false };
      });
    }
  }, {
    key: '__handleModalOpen__REACT_HOT_LOADER__',
    value: function __handleModalOpen__REACT_HOT_LOADER__() {
      this.setState(function () {
        return { isInsertModalOpen: true };
      });
    }
  }, {
    key: '__handleShowOnlyToggle__REACT_HOT_LOADER__',
    value: function __handleShowOnlyToggle__REACT_HOT_LOADER__() {
      var _this5 = this;

      this.setState(function () {
        return {
          showSelected: !_this5.state.showSelected
        };
      });
      this.props.onShowOnlySelected();
    }
  }, {
    key: '__handleDropRowBtnClick__REACT_HOT_LOADER__',
    value: function __handleDropRowBtnClick__REACT_HOT_LOADER__() {
      this.props.onDropRow();
    }
  }, {
    key: 'handleCloseBtn',
    value: function handleCloseBtn() {
      this.refs.warning.style.display = 'none';
    }
  }, {
    key: '__handleKeyUp__REACT_HOT_LOADER__',
    value: function __handleKeyUp__REACT_HOT_LOADER__(event) {
      event.persist();
      this.debounceCallback(event);
    }
  }, {
    key: '__handleExportCSV__REACT_HOT_LOADER__',
    value: function __handleExportCSV__REACT_HOT_LOADER__() {
      this.props.onExportCSV();
    }
  }, {
    key: '__handleClearBtnClick__REACT_HOT_LOADER__',
    value: function __handleClearBtnClick__REACT_HOT_LOADER__() {
      var seachInput = this.refs.seachInput;

      seachInput && seachInput.setValue('');
      this.props.onSearch('');
    }
  }, {
    key: 'render',
    value: function render() {
      this.modalClassName = 'bs-table-modal-sm' + ToolBar.modalSeq++;
      var toolbar = null;
      var btnGroup = null;
      var insertBtn = null;
      var deleteBtn = null;
      var exportCSVBtn = null;
      var showSelectedOnlyBtn = null;

      if (this.props.enableInsert) {
        if (this.props.insertBtn) {
          insertBtn = this.renderCustomBtn(this.props.insertBtn, [this.handleModalOpen], _InsertButton2.default.name, 'onClick', this.handleModalOpen);
        } else {
          insertBtn = _react2.default.createElement(_InsertButton2.default, { btnText: this.props.insertText,
            onClick: this.handleModalOpen });
        }
      }

      if (this.props.enableDelete) {
        if (this.props.deleteBtn) {
          deleteBtn = this.renderCustomBtn(this.props.deleteBtn, [this.handleDropRowBtnClick], _DeleteButton2.default.name, 'onClick', this.handleDropRowBtnClick);
        } else {
          deleteBtn = _react2.default.createElement(_DeleteButton2.default, { btnText: this.props.deleteText,
            onClick: this.handleDropRowBtnClick });
        }
      }

      if (this.props.enableShowOnlySelected) {
        if (this.props.showSelectedOnlyBtn) {
          showSelectedOnlyBtn = this.renderCustomBtn(this.props.showSelectedOnlyBtn, [this.handleShowOnlyToggle, this.state.showSelected], _ShowSelectedOnlyButton2.default.name, 'onClick', this.handleShowOnlyToggle);
        } else {
          showSelectedOnlyBtn = _react2.default.createElement(_ShowSelectedOnlyButton2.default, { toggle: this.state.showSelected,
            onClick: this.handleShowOnlyToggle });
        }
      }

      if (this.props.enableExportCSV) {
        if (this.props.exportCSVBtn) {
          exportCSVBtn = this.renderCustomBtn(this.props.exportCSVBtn, [this.handleExportCSV], _ExportCSVButton2.default.name, 'onClick', this.handleExportCSV);
        } else {
          exportCSVBtn = _react2.default.createElement(_ExportCSVButton2.default, { btnText: this.props.exportCSVText,
            onClick: this.handleExportCSV });
        }
      }

      if (this.props.btnGroup) {
        btnGroup = this.props.btnGroup({
          exportCSVBtn: exportCSVBtn,
          insertBtn: insertBtn,
          deleteBtn: deleteBtn,
          showSelectedOnlyBtn: showSelectedOnlyBtn
        });
      } else {
        btnGroup = _react2.default.createElement(
          'div',
          { className: 'btn-group btn-group-sm', role: 'group' },
          exportCSVBtn,
          insertBtn,
          deleteBtn,
          showSelectedOnlyBtn
        );
      }

      var _renderSearchPanel = this.renderSearchPanel(),
          _renderSearchPanel2 = _slicedToArray(_renderSearchPanel, 3),
          searchPanel = _renderSearchPanel2[0],
          searchField = _renderSearchPanel2[1],
          clearBtn = _renderSearchPanel2[2];

      var modal = this.props.enableInsert ? this.renderInsertRowModal() : null;

      if (this.props.toolBar) {
        toolbar = this.props.toolBar({
          components: {
            exportCSVBtn: exportCSVBtn,
            insertBtn: insertBtn,
            deleteBtn: deleteBtn,
            showSelectedOnlyBtn: showSelectedOnlyBtn,
            searchPanel: searchPanel,
            btnGroup: btnGroup,
            searchField: searchField,
            clearBtn: clearBtn
          },
          event: {
            openInsertModal: this.handleModalOpen,
            closeInsertModal: this.handleModalClose,
            dropRow: this.handleDropRowBtnClick,
            showOnlyToogle: this.handleShowOnlyToggle,
            exportCSV: this.handleExportCSV,
            search: this.props.onSearch
          }
        });
      } else {
        toolbar = _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: 'col-xs-6 col-sm-6 col-md-6 col-lg-8' },
            this.props.searchPosition === 'left' ? searchPanel : btnGroup
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-xs-6 col-sm-6 col-md-6 col-lg-4' },
            this.props.searchPosition === 'left' ? btnGroup : searchPanel
          )
        );
      }

      return _react2.default.createElement(
        'div',
        { className: 'row' },
        toolbar,
        _react2.default.createElement(_Notification2.default, { ref: 'notifier' }),
        modal
      );
    }
  }, {
    key: 'renderSearchPanel',
    value: function renderSearchPanel() {
      if (this.props.enableSearch) {
        var classNames = 'form-group form-group-sm react-bs-table-search-form';
        var clearBtn = null;
        var searchField = null;
        var searchPanel = null;
        if (this.props.clearSearch) {
          if (this.props.clearSearchBtn) {
            clearBtn = this.renderCustomBtn(this.props.clearSearchBtn, [this.handleClearBtnClick], _ClearSearchButton2.default.name, 'onClick', this.handleClearBtnClick); /* eslint max-len: 0*/
          } else {
            clearBtn = _react2.default.createElement(_ClearSearchButton2.default, { onClick: this.handleClearBtnClick });
          }
          classNames += ' input-group input-group-sm';
        }

        if (this.props.searchField) {
          searchField = this.props.searchField({
            search: this.handleKeyUp,
            defaultValue: this.props.defaultSearch,
            placeholder: this.props.searchPlaceholder
          });
          if (searchField.type.name === _SearchField2.default.name) {
            searchField = _react2.default.cloneElement(searchField, {
              ref: 'seachInput',
              onKeyUp: this.handleKeyUp
            });
          } else {
            searchField = _react2.default.cloneElement(searchField, {
              ref: 'seachInput'
            });
          }
        } else {
          searchField = _react2.default.createElement(_SearchField2.default, { ref: 'seachInput',
            defaultValue: this.props.defaultSearch,
            placeholder: this.props.searchPlaceholder,
            onKeyUp: this.handleKeyUp });
        }
        if (this.props.searchPanel) {
          searchPanel = this.props.searchPanel({
            searchField: searchField, clearBtn: clearBtn,
            search: this.props.onSearch,
            defaultValue: this.props.defaultSearch,
            placeholder: this.props.searchPlaceholder,
            clearBtnClick: this.handleClearBtnClick
          });
        } else {
          searchPanel = _react2.default.createElement(
            'div',
            { className: classNames },
            searchField,
            _react2.default.createElement(
              'span',
              { className: 'input-group-btn' },
              clearBtn
            )
          );
        }
        return [searchPanel, searchField, clearBtn];
      } else {
        return [];
      }
    }
  }, {
    key: 'renderInsertRowModal',
    value: function renderInsertRowModal() {
      var validateState = this.state.validateState || {};
      var _props = this.props,
          columns = _props.columns,
          ignoreEditable = _props.ignoreEditable,
          insertModalHeader = _props.insertModalHeader,
          insertModalBody = _props.insertModalBody,
          insertModalFooter = _props.insertModalFooter,
          insertModal = _props.insertModal;


      var modal = void 0;
      modal = insertModal && insertModal(this.handleModalClose, this.handleSaveBtnClick, columns, validateState, ignoreEditable);

      if (!modal) {
        modal = _react2.default.createElement(_InsertModal2.default, {
          columns: columns,
          validateState: validateState,
          ignoreEditable: ignoreEditable,
          onModalClose: this.handleModalClose,
          onSave: this.handleSaveBtnClick,
          headerComponent: insertModalHeader,
          bodyComponent: insertModalBody,
          footerComponent: insertModalFooter });
      }

      return _react2.default.createElement(
        _reactModal2.default,
        { className: 'react-bs-insert-modal modal-dialog',
          isOpen: this.state.isInsertModalOpen,
          onRequestClose: this.handleModalClose,
          contentLabel: 'Modal' },
        modal
      );
    }
  }, {
    key: 'renderCustomBtn',
    value: function renderCustomBtn(cb, params, componentName, eventName, event) {
      var element = cb.apply(null, params);
      if (element.type.name === componentName && !element.props[eventName]) {
        var props = {};
        props[eventName] = event;
        element = _react2.default.cloneElement(element, props);
      }
      return element;
    }
  }]);

  return ToolBar;
}(_react.Component);

ToolBar.modalSeq = 0;


ToolBar.propTypes = {
  onAddRow: _react.PropTypes.func,
  onDropRow: _react.PropTypes.func,
  onShowOnlySelected: _react.PropTypes.func,
  enableInsert: _react.PropTypes.bool,
  enableDelete: _react.PropTypes.bool,
  enableSearch: _react.PropTypes.bool,
  enableShowOnlySelected: _react.PropTypes.bool,
  columns: _react.PropTypes.array,
  searchPlaceholder: _react.PropTypes.string,
  exportCSVText: _react.PropTypes.string,
  insertText: _react.PropTypes.string,
  deleteText: _react.PropTypes.string,
  saveText: _react.PropTypes.string,
  closeText: _react.PropTypes.string,
  clearSearch: _react.PropTypes.bool,
  ignoreEditable: _react.PropTypes.bool,
  defaultSearch: _react.PropTypes.string,
  insertModalHeader: _react.PropTypes.func,
  insertModalBody: _react.PropTypes.func,
  insertModalFooter: _react.PropTypes.func,
  insertModal: _react.PropTypes.func,
  insertBtn: _react.PropTypes.func,
  deleteBtn: _react.PropTypes.func,
  showSelectedOnlyBtn: _react.PropTypes.func,
  exportCSVBtn: _react.PropTypes.func,
  clearSearchBtn: _react.PropTypes.func,
  searchField: _react.PropTypes.func,
  searchPanel: _react.PropTypes.func,
  btnGroup: _react.PropTypes.func,
  toolBar: _react.PropTypes.func,
  searchPosition: _react.PropTypes.string,
  reset: _react.PropTypes.bool,
  isValidKey: _react.PropTypes.func
};

ToolBar.defaultProps = {
  reset: false,
  enableInsert: false,
  enableDelete: false,
  enableSearch: false,
  enableShowOnlySelected: false,
  clearSearch: false,
  ignoreEditable: false,
  exportCSVText: _Const2.default.EXPORT_CSV_TEXT,
  insertText: _Const2.default.INSERT_BTN_TEXT,
  deleteText: _Const2.default.DELETE_BTN_TEXT,
  saveText: _Const2.default.SAVE_BTN_TEXT,
  closeText: _Const2.default.CLOSE_BTN_TEXT
};

var _default = ToolBar;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ToolBar, 'ToolBar', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/toolbar/ToolBar.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/toolbar/ToolBar.js');
}();

;

/***/ }),

/***/ 1502:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _promise = __webpack_require__(65);

var _promise2 = _interopRequireDefault(_promise);

var _assign = __webpack_require__(46);

var _assign2 = _interopRequireDefault(_assign);

var _getPrototypeOf = __webpack_require__(20);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(18);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _reactContenteditable = __webpack_require__(1040);

var _reactContenteditable2 = _interopRequireDefault(_reactContenteditable);

var _reactDropzone = __webpack_require__(1303);

var _reactDropzone2 = _interopRequireDefault(_reactDropzone);

var _reactDom = __webpack_require__(26);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = __webpack_require__(376);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CreateMetaProperty = function (_React$Component) {
  (0, _inherits3.default)(CreateMetaProperty, _React$Component);

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////
  function CreateMetaProperty(props) {
    (0, _classCallCheck3.default)(this, CreateMetaProperty);

    var _this = (0, _possibleConstructorReturn3.default)(this, (CreateMetaProperty.__proto__ || (0, _getPrototypeOf2.default)(CreateMetaProperty)).call(this, props));

    _this.onDrop = _this.onDrop.bind(_this);

    _this.state = (0, _assign2.default)({
      metaType: 'Text'
    }, props);
    return _this;
  }

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////


  (0, _createClass3.default)(CreateMetaProperty, [{
    key: 'componentDidMount',
    value: function componentDidMount() {

      this.updateOK();
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'assignState',
    value: function assignState(state) {
      var _this2 = this;

      return new _promise2.default(function (resolve) {

        var newState = (0, _assign2.default)({}, _this2.state, state);

        _this2.setState(newState, function () {
          _this2.updateOK();
          resolve();
        });

        switch (newState.metaType) {

          case 'Double':
          case 'Text':
          case 'Int':

            return _this2.props.onChanged({
              displayCategory: newState.displayCategory,
              displayValue: newState.displayValue,
              displayName: newState.displayName,
              metaType: newState.metaType
            });

          case 'Link':

            return _this2.props.onChanged({
              link: newState.link ? newState.link.trim() : null,
              displayCategory: newState.displayCategory,
              displayValue: newState.displayValue,
              displayName: newState.displayName,
              metaType: newState.metaType
            });

          case 'File':

            return _this2.props.onChanged({
              displayCategory: newState.displayCategory,
              displayValue: newState.displayValue,
              displayName: newState.displayName,
              metaType: newState.metaType,
              filename: newState.filename,
              filesize: newState.filesize,
              filelink: newState.filelink,
              fileId: newState.fileId,
              file: newState.file
            });
        }
      });
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'onKeyDown',
    value: function onKeyDown(e, type) {

      switch (type) {

        case 'Double':
          {

            //backspace, ENTER, ->, <-, delete, '.', '-', ',',
            var allowed = [8, 13, 37, 39, 46, 188, 189, 190];

            if (allowed.indexOf(e.keyCode) > -1 || e.keyCode > 47 && e.keyCode < 58) {

              return;
            }

            e.stopPropagation();
            e.preventDefault();
            break;
          }

        case 'Int':
          {

            //backspace, ENTER, ->, <-, delete, '-'
            var _allowed = [8, 13, 37, 39, 46, 189];

            if (_allowed.indexOf(e.keyCode) > -1 || e.keyCode > 47 && e.keyCode < 58) {

              return;
            }

            e.stopPropagation();
            e.preventDefault();
            break;
          }

        case 'Text':
          {

            if (e.keyCode === 13) {

              e.stopPropagation();
              e.preventDefault();
            }

            break;
          }
      }
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'onInputChanged',
    value: function onInputChanged(e, key) {

      var newState = (0, _assign2.default)({}, this.state);

      newState[key] = !!e.target.value ? e.target.value.replace(/&nbsp;/g, '') : e.target.value;

      this.assignState(newState);
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'onDrop',
    value: function onDrop(files) {

      if (this.state.file) {

        window.URL.revokeObjectURL(this.state.file.preview);
      }

      var file = files[0];

      this.assignState({
        filename: file.name,
        filesize: file.size,
        file: file
      });
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'updateOK',
    value: function updateOK() {

      switch (this.state.metaType) {

        case 'Double':
        case 'Text':
        case 'Int':
          {
            var disableOK = !this.state.displayCategory || !this.state.displayValue || !this.state.displayName;

            this.props.disableOK(disableOK);

            break;
          }

        case 'Link':
          {
            var _disableOK = !this.state.displayCategory || !this.state.displayValue || !this.state.displayName || !this.state.link;

            this.props.disableOK(_disableOK);

            break;
          }

        case 'File':
          {
            var _disableOK2 = !this.state.displayCategory || !this.state.displayValue || !this.state.displayName || !this.state.filename;

            this.props.disableOK(_disableOK2);

            break;
          }
      }
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'renderContent',
    value: function renderContent() {
      var _this3 = this;

      switch (this.state.metaType) {

        case 'Double':
        case 'Text':
        case 'Int':
          return _react2.default.createElement(_reactContenteditable2.default, {
            onKeyDown: function onKeyDown(e) {
              return _this3.onKeyDown(e, _this3.state.metaType);
            },
            onChange: function onChange(e) {
              return _this3.onInputChanged(e, 'displayValue');
            },
            'data-placeholder': 'Property value ...',
            html: this.state.displayValue,
            className: 'input meta-value'
          });

        case 'Link':
          return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'div',
              { className: 'row' },
              _react2.default.createElement(_reactContenteditable2.default, {
                onChange: function onChange(e) {
                  return _this3.onInputChanged(e, 'displayValue');
                },
                'data-placeholder': 'Property value ...',
                onKeyDown: function onKeyDown(e) {
                  return _this3.onKeyDown(e);
                },
                html: this.state.displayValue,
                className: 'input meta-value'
              })
            ),
            _react2.default.createElement(
              'div',
              { className: 'row' },
              _react2.default.createElement(_reactContenteditable2.default, {
                onChange: function onChange(e) {
                  return _this3.onInputChanged(e, 'link');
                },
                onKeyDown: function onKeyDown(e) {
                  return _this3.onKeyDown(e);
                },
                className: 'input meta-value',
                'data-placeholder': 'Link ...',
                html: this.state.link
              })
            )
          );

        case 'File':
          return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'div',
              { className: 'row' },
              _react2.default.createElement(_reactContenteditable2.default, {
                onChange: function onChange(e) {
                  return _this3.onInputChanged(e, 'displayValue');
                },
                'data-placeholder': 'Property value ...',
                onKeyDown: function onKeyDown(e) {
                  return _this3.onKeyDown(e);
                },
                html: this.state.displayValue,
                className: 'input meta-value'
              })
            ),
            _react2.default.createElement(
              'div',
              { className: 'row' },
              _react2.default.createElement(
                _reactDropzone2.default,
                { className: 'drop-target',
                  onDrop: this.onDrop,
                  multiple: false },
                _react2.default.createElement(
                  'p',
                  null,
                  'Drop a file here or click to browse ...'
                ),
                _react2.default.createElement(
                  'ul',
                  null,
                  this.state.filename && _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'b',
                      null,
                      this.state.filename
                    ),
                    _react2.default.createElement('br', null),
                    this.state.filesize,
                    ' bytes'
                  )
                )
              )
            )
          );
      }
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      return _react2.default.createElement(
        'div',
        { className: 'add-meta-property' },
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            _reactBootstrap.DropdownButton,
            {
              title: "Type: " + this.state.metaType,
              className: 'type-dropdown',
              key: 'type-dropdown',
              id: 'type-dropdown' },
            _react2.default.createElement(
              _reactBootstrap.MenuItem,
              { eventKey: 1, key: 1, onClick: function onClick() {
                  _this4.assignState({
                    displayValue: '',
                    metaType: 'Text'
                  });
                } },
              'Text'
            ),
            _react2.default.createElement(
              _reactBootstrap.MenuItem,
              { eventKey: 2, key: 2, onClick: function onClick() {
                  _this4.assignState({
                    displayValue: '',
                    metaType: 'Double'
                  });
                } },
              'Double'
            ),
            _react2.default.createElement(
              _reactBootstrap.MenuItem,
              { eventKey: 3, key: 3, onClick: function onClick() {
                  _this4.assignState({
                    displayValue: '',
                    metaType: 'Int'
                  });
                } },
              'Int'
            ),
            _react2.default.createElement(
              _reactBootstrap.MenuItem,
              { eventKey: 4, key: 4, onClick: function onClick() {
                  _this4.assignState({
                    displayValue: '',
                    metaType: 'Link'
                  });
                } },
              'Link'
            ),
            _react2.default.createElement(
              _reactBootstrap.MenuItem,
              { eventKey: 5, key: 5, onClick: function onClick() {
                  _this4.assignState({
                    displayValue: '',
                    metaType: 'File'
                  });
                } },
              'File'
            )
          ),
          _react2.default.createElement(_reactContenteditable2.default, {
            onChange: function onChange(e) {
              return _this4.onInputChanged(e, 'displayCategory');
            },
            onKeyDown: function onKeyDown(e) {
              return _this4.onKeyDown(e);
            },
            'data-placeholder': 'Property category ...',
            disabled: this.state.disableCategory,
            html: this.state.displayCategory,
            className: 'input meta-category'

          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(_reactContenteditable2.default, {
            onChange: function onChange(e) {
              return _this4.onInputChanged(e, 'displayName');
            },
            onKeyDown: function onKeyDown(e) {
              return _this4.onKeyDown(e);
            },
            'data-placeholder': 'Property name ...',
            disabled: this.state.disableName,
            html: this.state.displayName,
            className: 'input meta-name'
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          this.renderContent()
        )
      );
    }
  }]);
  return CreateMetaProperty;
}(_react2.default.Component); //////////////////////////////////////////////////////////////////////////
// Copyright (c) Autodesk, Inc. All rights reserved
// Written by Philippe Leefsma 2016 - ADN/Developer Technical Services
//
// Permission to use, copy, modify, and distribute this software in
// object code form for any purpose and without fee is hereby granted,
// provided that the above copyright notice appears in all copies and
// that both that copyright notice and the limited warranty and
// restricted rights notice below appear in all supporting
// documentation.
//
// AUTODESK PROVIDES THIS PROGRAM "AS IS" AND WITH ALL FAULTS.
// AUTODESK SPECIFICALLY DISCLAIMS ANY IMPLIED WARRANTY OF
// MERCHANTABILITY OR FITNESS FOR A PARTICULAR USE.  AUTODESK, INC.
// DOES NOT WARRANT THAT THE OPERATION OF THE PROGRAM WILL BE
// UNINTERRUPTED OR ERROR FREE.
/////////////////////////////////////////////////////////////////////


exports.default = CreateMetaProperty;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "AddMetaProperty.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1503:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(20);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(18);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _EventsEmitter = __webpack_require__(372);

var _EventsEmitter2 = _interopRequireDefault(_EventsEmitter);

var _ContextMenu = __webpack_require__(1251);

var _ContextMenu2 = _interopRequireDefault(_ContextMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MetaContextMenu = function (_EventsEmitter$Compos) {
  (0, _inherits3.default)(MetaContextMenu, _EventsEmitter$Compos);

  /////////////////////////////////////////////////////////
  // Class constructor
  //
  /////////////////////////////////////////////////////////
  function MetaContextMenu(opts) {
    (0, _classCallCheck3.default)(this, MetaContextMenu);

    var _this = (0, _possibleConstructorReturn3.default)(this, (MetaContextMenu.__proto__ || (0, _getPrototypeOf2.default)(MetaContextMenu)).call(this, opts));

    _this.contextMenu = new _ContextMenu2.default(opts);
    return _this;
  }

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////


  (0, _createClass3.default)(MetaContextMenu, [{
    key: 'buildMenu',
    value: function buildMenu(event, node) {
      var _this2 = this;

      var menu = [{
        title: 'Edit property ...',
        className: 'fa fa-edit',
        target: function target() {
          _this2.emit('context.property.edit', node);
        }
      }, {
        title: 'Delete property',
        className: 'fa fa-times',
        target: function target() {
          _this2.emit('context.property.delete', node);
        }
      }];

      return menu;
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'show',
    value: function show(event, node) {

      var menu = this.buildMenu(event, node);

      if (menu && 0 < menu.length) {

        this.contextMenu.show(event, menu);
      }
    }
  }]);
  return MetaContextMenu;
}(_EventsEmitter2.default.Composer(Autodesk.Viewing.UI.ObjectContextMenu));

exports.default = MetaContextMenu;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "MetaContextMenu.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1504:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _regenerator = __webpack_require__(216);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(215);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(20);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(18);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _MetaContextMenu = __webpack_require__(1503);

var _MetaContextMenu2 = _interopRequireDefault(_MetaContextMenu);

var _MetaTreeNode = __webpack_require__(1505);

var _MetaTreeNode2 = _interopRequireDefault(_MetaTreeNode);

var _TreeView = __webpack_require__(1049);

var _sortBy = __webpack_require__(1053);

var _sortBy2 = _interopRequireDefault(_sortBy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MetaTreeDelegate = function (_TreeDelegate) {
  (0, _inherits3.default)(MetaTreeDelegate, _TreeDelegate);

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////
  function MetaTreeDelegate(menuContainer) {
    (0, _classCallCheck3.default)(this, MetaTreeDelegate);

    var _this = (0, _possibleConstructorReturn3.default)(this, (MetaTreeDelegate.__proto__ || (0, _getPrototypeOf2.default)(MetaTreeDelegate)).call(this));

    _this.contextMenu = new _MetaContextMenu2.default({
      container: menuContainer
    });

    _this.contextMenu.on('context.property.delete', function (node) {

      _this.onDeleteProperty(node);
    });

    _this.contextMenu.on('context.property.edit', function (node) {

      _this.onEditProperty(node);
    });

    _this.on('node.dblClick', function (node) {

      _this.onEditProperty(node);
    });
    return _this;
  }

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////


  (0, _createClass3.default)(MetaTreeDelegate, [{
    key: 'onEditProperty',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(node) {
        var isModelOverride, newMetaProperty;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                isModelOverride = !node.props.metaType;
                _context.next = 3;
                return this.emit('property.edit', node.toMetaProperty(), isModelOverride);

              case 3:
                newMetaProperty = _context.sent;


                if (newMetaProperty) {

                  this.emit('node.update', newMetaProperty);
                }

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onEditProperty(_x) {
        return _ref.apply(this, arguments);
      }

      return onEditProperty;
    }()

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'onDeleteProperty',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(node) {
        var isModelOverride, deleted;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                isModelOverride = !node.props.metaType;
                _context2.next = 3;
                return this.emit('property.delete', node.toMetaProperty(), isModelOverride);

              case 3:
                deleted = _context2.sent;


                if (deleted) {

                  this.emit('node.destroy', node.id);
                }

              case 5:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function onDeleteProperty(_x2) {
        return _ref2.apply(this, arguments);
      }

      return onDeleteProperty;
    }()

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'createRootNode',
    value: function createRootNode(data) {

      this.rootNode = new _MetaTreeNode2.default({
        displayName: data.displayName,
        externalId: data.externalId,
        dbId: data.dbId.toString(),
        component: data.component,
        propsMap: data.propsMap,
        delegate: this,
        parent: null,
        type: 'root',
        group: true,
        id: 'root'
      });

      return this.rootNode;
    }

    /////////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////////

  }, {
    key: 'destroy',
    value: function destroy() {

      this.rootNode.destroy();
    }

    /////////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////////

  }, {
    key: 'createTreeNode',
    value: function createTreeNode(node, parentDomElement) {

      var container = document.createElement('div');

      parentDomElement.appendChild(container);

      node.type.split('.').forEach(function (cls) {

        parentDomElement.classList.add(cls);
      });

      parentDomElement.classList.add('click-trigger');

      node.mount(container);
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'nodeClickSelector',
    value: function nodeClickSelector(event) {

      var className = event.target.className;

      return className.toLowerCase().indexOf('click-trigger') > -1;
    }

    ///////////////////////////////////////////////////////////////////
    //
    //
    ///////////////////////////////////////////////////////////////////

  }, {
    key: 'onTreeNodeRightClick',
    value: function onTreeNodeRightClick(tree, node, event) {

      if (node.type === 'property') {

        this.contextMenu.show(event, node);
      }
    }

    /////////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////////

  }, {
    key: 'forEachChild',
    value: function forEachChild(node, addChild) {

      node.addChild = addChild;
    }

    /////////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////////

  }, {
    key: 'mapPropsByCategory',
    value: function mapPropsByCategory(properties) {

      var propsMap = {};

      properties.forEach(function (prop) {

        var category = !!prop.displayCategory ? prop.displayCategory : 'Other';

        if (category.indexOf('__') !== 0) {

          propsMap[category] = propsMap[category] || [];

          propsMap[category].push(prop);
        }
      });

      // sort props by displayName in each category

      for (var category in propsMap) {

        propsMap[category] = (0, _sortBy2.default)(propsMap[category], function (prop) {
          return prop.displayName;
        });
      }

      return propsMap;
    }
  }]);
  return MetaTreeDelegate;
}(_TreeView.TreeDelegate);

exports.default = MetaTreeDelegate;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "MetaTreeDelegate.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1505:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _keys = __webpack_require__(375);

var _keys2 = _interopRequireDefault(_keys);

var _regenerator = __webpack_require__(216);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(215);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _assign = __webpack_require__(46);

var _assign2 = _interopRequireDefault(_assign);

var _getPrototypeOf = __webpack_require__(20);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(18);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _EventsEmitter2 = __webpack_require__(372);

var _EventsEmitter3 = _interopRequireDefault(_EventsEmitter2);

var _reactSpinkit = __webpack_require__(1318);

var _reactSpinkit2 = _interopRequireDefault(_reactSpinkit);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _sortBy = __webpack_require__(1053);

var _sortBy2 = _interopRequireDefault(_sortBy);

var _reactDom = __webpack_require__(26);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Label = __webpack_require__(1034);

var _Label2 = _interopRequireDefault(_Label);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MetaTreeNode = function (_EventsEmitter) {
  (0, _inherits3.default)(MetaTreeNode, _EventsEmitter);

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////
  function MetaTreeNode(props) {
    (0, _classCallCheck3.default)(this, MetaTreeNode);

    var _this = (0, _possibleConstructorReturn3.default)(this, (MetaTreeNode.__proto__ || (0, _getPrototypeOf2.default)(MetaTreeNode)).call(this));

    _this.onModelDelete = _this.onModelDelete.bind(_this);
    _this.onModelEdit = _this.onModelEdit.bind(_this);
    _this.onExpand = _this.onExpand.bind(_this);
    _this.onDelete = _this.onDelete.bind(_this);
    _this.onEdit = _this.onEdit.bind(_this);

    _this.on('expand', _this.onExpand);

    _this.externalId = props.externalId;
    _this.component = props.component;
    _this.delegate = props.delegate;
    _this.parent = props.parent;
    _this.group = props.group;
    _this.type = props.type;
    _this.dbId = props.dbId;
    _this.id = props.id;

    _this.children = [];

    _this.props = props;
    return _this;
  }

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////


  (0, _createClass3.default)(MetaTreeNode, [{
    key: 'onExpand',
    value: function onExpand() {

      this.off('expand', this.onExpand);

      this.loadChildren();
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'mount',
    value: function mount(domContainer) {

      domContainer.className = 'treenode-container';

      this.domContainer = domContainer;

      this.reactNode = _reactDom2.default.render(_react2.default.createElement(ReactTreeNode, this.props), this.domContainer);

      this.collapse();
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'update',
    value: function update(metaProperty) {

      this.props = (0, _assign2.default)({}, this.props, metaProperty);

      this.reactNode = _reactDom2.default.render(_react2.default.createElement(ReactTreeNode, this.props), this.domContainer);
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'destroy',
    value: function destroy() {

      if (this.children) {

        this.children.forEach(function (child) {

          child.destroy();
        });
      }

      _reactDom2.default.unmountComponentAtNode(this.domContainer);

      this.delegate.emit('node.destroy', this.id);
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'expand',
    value: function expand() {

      var target = this.domContainer.parentElement.parentElement;

      target.classList.remove('collapsed');
      target.classList.add('expanded');

      this.expanded = true;

      this.emit('expand');
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'collapse',
    value: function collapse() {

      var target = this.domContainer.parentElement.parentElement;

      target.classList.remove('expanded');
      target.classList.add('collapsed');

      this.expanded = false;
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'toMetaProperty',
    value: function toMetaProperty() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;


      var baseProperty = (0, _assign2.default)({
        displayCategory: props.displayCategory,
        displayValue: props.displayValue,
        displayName: props.displayName,
        externalId: props.externalId,
        component: props.component,
        metaType: props.metaType,
        dbId: props.dbId,
        id: props.id
      }, props.isOverride ? {
        isOverride: true
      } : {});

      switch (props.metaType) {

        case 'Link':

          return (0, _assign2.default)({}, baseProperty, {
            link: props.link
          });

        case 'File':

          return (0, _assign2.default)({}, baseProperty, {
            filelink: props.filelink,
            filename: props.filename,
            filesize: props.filesize,
            fileId: props.fileId
          });

        case 'Double':
        case 'Text':
        case 'Int':

          return baseProperty;

        default:

          return (0, _assign2.default)({}, baseProperty, {
            displayCategory: props.displayCategory || 'Other',
            isOverride: true,
            metaType: 'Text'
          });
      }
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'onModelEdit',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var metaProperty;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.delegate.emit('property.edit', this.toMetaProperty(props), true);

              case 2:
                metaProperty = _context.sent;


                if (metaProperty) {

                  this.delegate.emit('node.update', metaProperty);
                }

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onModelEdit(_x2) {
        return _ref.apply(this, arguments);
      }

      return onModelEdit;
    }()

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'onModelDelete',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(props) {
        var metaProperty;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.delegate.emit('property.delete', this.toMetaProperty(props), true);

              case 2:
                metaProperty = _context2.sent;


                if (metaProperty) {

                  this.delegate.emit('node.destroy', metaProperty.id);
                }

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function onModelDelete(_x3) {
        return _ref2.apply(this, arguments);
      }

      return onModelDelete;
    }()

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'onEdit',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(props) {
        var metaProperty;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.delegate.emit('property.edit', this.toMetaProperty(props));

              case 2:
                metaProperty = _context3.sent;


                if (metaProperty) {

                  this.delegate.emit('node.update', metaProperty);
                }

              case 4:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function onEdit(_x4) {
        return _ref3.apply(this, arguments);
      }

      return onEdit;
    }()

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'onDelete',
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(props) {
        var metaProperty;
        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.delegate.emit('property.delete', this.toMetaProperty(props));

              case 2:
                metaProperty = _context4.sent;


                if (metaProperty) {

                  this.delegate.emit('node.destroy', metaProperty.id);
                }

              case 4:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function onDelete(_x5) {
        return _ref4.apply(this, arguments);
      }

      return onDelete;
    }()

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'loadChildren',
    value: function loadChildren() {
      var _this2 = this;

      switch (this.type) {

        case 'root':

          var categories = (0, _sortBy2.default)((0, _keys2.default)(this.props.propsMap), function (item) {
            return item;
          });

          this.children = categories.map(function (category) {

            var childNode = new MetaTreeNode({
              properties: _this2.props.propsMap[category],
              externalId: _this2.externalId,
              component: _this2.component,
              delegate: _this2.delegate,
              displayName: category,
              type: 'category',
              dbId: _this2.dbId,
              id: _this2.guid(),
              parent: _this2,
              group: true
            });

            _this2.addChild(childNode);

            childNode.expand();

            return childNode;
          });

          break;

        case 'category':

          this.children = this.props.properties.map(function (prop) {

            var fullProp = (0, _assign2.default)({}, prop, {
              onModelDelete: _this2.onModelDelete,
              onModelEdit: _this2.onModelEdit,
              externalId: _this2.externalId,
              id: prop.id || _this2.guid(),
              component: _this2.component,
              delegate: _this2.delegate,
              onDelete: _this2.onDelete,
              onEdit: _this2.onEdit,
              type: 'property',
              dbId: _this2.dbId,
              parent: _this2,
              group: false
            });

            var childNode = new MetaTreeNode(fullProp);

            _this2.addChild(childNode);

            return childNode;
          });
      }
    }
  }]);
  return MetaTreeNode;
}(_EventsEmitter3.default);

exports.default = MetaTreeNode;

var ReactTreeNode = function (_React$Component) {
  (0, _inherits3.default)(ReactTreeNode, _React$Component);

  function ReactTreeNode() {
    (0, _classCallCheck3.default)(this, ReactTreeNode);
    return (0, _possibleConstructorReturn3.default)(this, (ReactTreeNode.__proto__ || (0, _getPrototypeOf2.default)(ReactTreeNode)).apply(this, arguments));
  }

  (0, _createClass3.default)(ReactTreeNode, [{
    key: 'renderModelProperty',


    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////
    value: function renderModelProperty() {
      var _this4 = this;

      return _react2.default.createElement(
        'div',
        { className: 'treenode' },
        _react2.default.createElement(_Label2.default, { className: 'meta-name click-trigger',
          text: this.props.displayName
        }),
        _react2.default.createElement('div', { className: 'separator' }),
        _react2.default.createElement(_Label2.default, { className: 'meta-value editable',
          text: this.props.displayValue.toString()
        }),
        _react2.default.createElement('span', { className: 'fa fa-edit',
          onClick: function onClick() {
            _this4.props.onModelEdit(_this4.props);
          }
        }),
        _react2.default.createElement('span', { className: 'fa fa-times',
          onClick: function onClick() {
            _this4.props.onModelDelete(_this4.props);
          }
        })
      );
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'renderTextProperty',
    value: function renderTextProperty() {
      var _this5 = this;

      return _react2.default.createElement(
        'div',
        { className: 'treenode' },
        _react2.default.createElement(_Label2.default, { className: 'meta-name click-trigger',
          text: this.props.displayName
        }),
        _react2.default.createElement('div', { className: 'separator' }),
        _react2.default.createElement(_Label2.default, { className: 'meta-value editable',
          text: this.props.displayValue.toString()
        }),
        _react2.default.createElement('span', { className: 'fa fa-edit',
          onClick: function onClick() {
            return _this5.props.onEdit(_this5.props);
          }
        }),
        _react2.default.createElement('span', { className: 'fa fa-times',
          onClick: function onClick() {
            return _this5.props.onDelete(_this5.props);
          }
        })
      );
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'renderLinkProperty',
    value: function renderLinkProperty() {
      var _this6 = this;

      return _react2.default.createElement(
        'div',
        { className: 'treenode' },
        _react2.default.createElement(_Label2.default, { className: 'meta-name click-trigger',
          text: this.props.displayName
        }),
        _react2.default.createElement('div', { className: 'separator' }),
        _react2.default.createElement(
          'div',
          { className: 'meta-value meta-link editable' },
          _react2.default.createElement(
            'a',
            { target: '_blank', href: this.props.link,
              onClick: function onClick() {
                return _this6.onGoToLink(_this6.props.link);
              } },
            this.props.displayValue
          )
        ),
        _react2.default.createElement('span', { className: 'fa fa-edit',
          onClick: function onClick() {
            return _this6.props.onEdit(_this6.props);
          }
        }),
        _react2.default.createElement('span', { className: 'fa fa-times',
          onClick: function onClick() {
            return _this6.props.onDelete(_this6.props);
          }
        })
      );
    }
  }, {
    key: 'onGoToLink',
    value: function onGoToLink(href) {

      var a = document.createElement('a');

      a.target = '_blank';
      a.href = href;

      a.click();
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'renderFileProperty',
    value: function renderFileProperty() {
      var _this7 = this;

      var displayLink = this.props.displayCategory + '/' + this.props.displayName + '/' + this.props.displayValue + '/' + this.props.filename;

      var spinnerStyle = {
        display: 'none'
      };

      return _react2.default.createElement(
        'div',
        { className: 'treenode' },
        _react2.default.createElement(_Label2.default, { className: 'meta-name click-trigger',
          text: this.props.displayName
        }),
        _react2.default.createElement('div', { className: 'separator' }),
        _react2.default.createElement(
          'div',
          { className: 'meta-value meta-file editable' },
          _react2.default.createElement(_reactSpinkit2.default, { spinnerName: 'cube-grid',
            style: spinnerStyle }),
          _react2.default.createElement(
            'a',
            { target: '_blank', href: displayLink,
              onClick: function onClick() {
                return _this7.onDownloadFile(_this7.props.filename, _this7.props.filelink);
              } },
            this.props.displayValue
          )
        ),
        _react2.default.createElement('span', { className: 'fa fa-edit',
          onClick: function onClick() {
            return _this7.props.onEdit(_this7.props);
          }
        }),
        _react2.default.createElement('span', { className: 'fa fa-times',
          onClick: function onClick() {
            return _this7.props.onDelete(_this7.props);
          }
        })
      );
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'onDownloadFile',
    value: function onDownloadFile(filename, href) {

      var a = document.createElement('a');

      a.download = filename;
      a.href = href;

      a.click();
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'renderPropertyTreeNode',
    value: function renderPropertyTreeNode() {

      switch (this.props.metaType) {

        case 'File':
          return this.renderFileProperty();

        case 'Link':
          return this.renderLinkProperty();

        case 'Double':
        case 'Text':
        case 'Int':
          return this.renderTextProperty();

        default:
          return this.renderModelProperty();
      }
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'renderDefaultTreeNode',
    value: function renderDefaultTreeNode() {

      return _react2.default.createElement(
        'div',
        { className: 'treenode' },
        _react2.default.createElement(_Label2.default, { text: this.props.displayName })
      );
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'render',
    value: function render() {

      switch (this.props.type) {

        case 'property':
          return this.renderPropertyTreeNode();

        default:
          return this.renderDefaultTreeNode();
      }
    }
  }]);
  return ReactTreeNode;
}(_react2.default.Component);

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "MetaTreeNode.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1506:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(20);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(18);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _MetaTreeDelegate = __webpack_require__(1504);

var _MetaTreeDelegate2 = _interopRequireDefault(_MetaTreeDelegate);

var _TreeView = __webpack_require__(1049);

var _reactDom = __webpack_require__(26);

var _reactDom2 = _interopRequireDefault(_reactDom);

__webpack_require__(1334);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MetaTreeView = function (_React$Component) {
  (0, _inherits3.default)(MetaTreeView, _React$Component);

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////
  function MetaTreeView(props) {
    (0, _classCallCheck3.default)(this, MetaTreeView);

    var _this = (0, _possibleConstructorReturn3.default)(this, (MetaTreeView.__proto__ || (0, _getPrototypeOf2.default)(MetaTreeView)).call(this, props));

    _this.delegate = new _MetaTreeDelegate2.default(props.menuContainer);

    _this.delegate.on('property.edit', function (metaProperty, isModelOverride) {

      if (_this.props.onEditProperty) {

        return _this.props.onEditProperty(metaProperty, isModelOverride);
      }
    });

    _this.delegate.on('property.delete', function (metaProperty, isModelOverride) {

      if (_this.props.onDeleteProperty) {

        return _this.props.onDeleteProperty(metaProperty, isModelOverride);
      }
    });

    _this.delegate.on('node.update', function (metaProperty) {

      var nodeId = metaProperty.id;

      var node = _this.tree.nodeIdToNode[nodeId];

      if (node) {

        node.update(metaProperty);
      }
    });

    _this.delegate.on('node.destroy', function (nodeId) {

      var node = _this.tree.nodeIdToNode[nodeId];

      if (node && node.parent) {

        node.parent.children = node.parent.children.filter(function (child) {
          return child.id !== nodeId;
        });

        node.parent.children.length ? _this.tree.destroyNode(nodeId) : node.parent.destroy();
      }
    });
    return _this;
  }

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////


  (0, _createClass3.default)(MetaTreeView, [{
    key: 'loadTree',
    value: function loadTree(data) {

      var propsMap = this.delegate.mapPropsByCategory(data.properties);

      var rootNode = this.delegate.createRootNode({
        displayName: data.displayName,
        component: data.displayName,
        externalId: data.externalId,
        dbId: data.dbId,
        propsMap: propsMap
      });

      this.tree = new _TreeView.TreeView(this.delegate, rootNode, this.treeContainer, {
        excludeRoot: false
      });

      rootNode.expand();
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {

      this.loadTree({
        displayName: this.props.displayName,
        properties: this.props.properties,
        externalId: this.props.externalId,
        component: this.props.displayName,
        dbId: this.props.dbId
      });
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {

      return false;
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {

      if (props.guid !== this.props.guid) {

        this.delegate.destroy();

        this.tree.destroy();

        this.loadTree({
          displayName: props.displayName,
          properties: props.properties,
          externalId: props.externalId,
          component: props.displayName,
          dbId: props.dbId
        });
      }
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {

      this.delegate.destroy();

      this.tree.destroy();
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {

      this.delegate.destroy();

      this.delegate.off();

      this.tree.destroy();
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement('div', { className: 'metatree-container', ref: function ref(div) {
          return _this2.treeContainer = div;
        }
      });
    }
  }]);
  return MetaTreeView;
}(_react2.default.Component); //////////////////////////////////////////////////////////////////////////
// Copyright (c) Autodesk, Inc. All rights reserved
// Written by Philippe Leefsma 2016 - ADN/Developer Technical Services
//
// Permission to use, copy, modify, and distribute this software in
// object code form for any purpose and without fee is hereby granted,
// provided that the above copyright notice appears in all copies and
// that both that copyright notice and the limited warranty and
// restricted rights notice below appear in all supporting
// documentation.
//
// AUTODESK PROVIDES THIS PROGRAM "AS IS" AND WITH ALL FAULTS.
// AUTODESK SPECIFICALLY DISCLAIMS ANY IMPLIED WARRANTY OF
// MERCHANTABILITY OR FITNESS FOR A PARTICULAR USE.  AUTODESK, INC.
// DOES NOT WARRANT THAT THE OPERATION OF THE PROGRAM WILL BE
// UNINTERRUPTED OR ERROR FREE.
/////////////////////////////////////////////////////////////////////


exports.default = MetaTreeView;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "MetaTreeView.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1544:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var ExecutionEnvironment = __webpack_require__(27);

var getVendorPrefixedEventName = __webpack_require__(405);

var endEvents = [];

function detectEvents() {
  var animEnd = getVendorPrefixedEventName('animationend');
  var transEnd = getVendorPrefixedEventName('transitionend');

  if (animEnd) {
    endEvents.push(animEnd);
  }

  if (transEnd) {
    endEvents.push(transEnd);
  }
}

if (ExecutionEnvironment.canUseDOM) {
  detectEvents();
}

// We use the raw {add|remove}EventListener() call because EventListener
// does not know how to remove event listeners and we really should
// clean up. Also, these events are not triggered in older browsers
// so we should be A-OK here.

function addEventListener(node, eventName, eventListener) {
  node.addEventListener(eventName, eventListener, false);
}

function removeEventListener(node, eventName, eventListener) {
  node.removeEventListener(eventName, eventListener, false);
}

var ReactTransitionEvents = {
  addEndEventListener: function (node, eventListener) {
    if (endEvents.length === 0) {
      // If CSS transitions are not supported, trigger an "end animation"
      // event immediately.
      window.setTimeout(eventListener, 0);
      return;
    }
    endEvents.forEach(function (endEvent) {
      addEventListener(node, endEvent, eventListener);
    });
  },

  removeEndEventListener: function (node, eventListener) {
    if (endEvents.length === 0) {
      return;
    }
    endEvents.forEach(function (endEvent) {
      removeEventListener(node, endEvent, eventListener);
    });
  }
};

module.exports = ReactTransitionEvents;

/***/ }),

/***/ 1545:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

/* global hasOwnProperty:true */



var _prodInvariant = __webpack_require__(69),
    _assign = __webpack_require__(19);

var invariant = __webpack_require__(14);
var hasOwnProperty = {}.hasOwnProperty;

function shallowCopy(x) {
  if (Array.isArray(x)) {
    return x.concat();
  } else if (x && typeof x === 'object') {
    return _assign(new x.constructor(), x);
  } else {
    return x;
  }
}

var COMMAND_PUSH = '$push';
var COMMAND_UNSHIFT = '$unshift';
var COMMAND_SPLICE = '$splice';
var COMMAND_SET = '$set';
var COMMAND_MERGE = '$merge';
var COMMAND_APPLY = '$apply';

var ALL_COMMANDS_LIST = [COMMAND_PUSH, COMMAND_UNSHIFT, COMMAND_SPLICE, COMMAND_SET, COMMAND_MERGE, COMMAND_APPLY];

var ALL_COMMANDS_SET = {};

ALL_COMMANDS_LIST.forEach(function (command) {
  ALL_COMMANDS_SET[command] = true;
});

function invariantArrayCase(value, spec, command) {
  !Array.isArray(value) ?  true ? invariant(false, 'update(): expected target of %s to be an array; got %s.', command, value) : _prodInvariant('1', command, value) : void 0;
  var specValue = spec[command];
  !Array.isArray(specValue) ?  true ? invariant(false, 'update(): expected spec of %s to be an array; got %s. Did you forget to wrap your parameter in an array?', command, specValue) : _prodInvariant('2', command, specValue) : void 0;
}

/**
 * Returns a updated shallow copy of an object without mutating the original.
 * See https://facebook.github.io/react/docs/update.html for details.
 */
function update(value, spec) {
  !(typeof spec === 'object') ?  true ? invariant(false, 'update(): You provided a key path to update() that did not contain one of %s. Did you forget to include {%s: ...}?', ALL_COMMANDS_LIST.join(', '), COMMAND_SET) : _prodInvariant('3', ALL_COMMANDS_LIST.join(', '), COMMAND_SET) : void 0;

  if (hasOwnProperty.call(spec, COMMAND_SET)) {
    !(Object.keys(spec).length === 1) ?  true ? invariant(false, 'Cannot have more than one key in an object with %s', COMMAND_SET) : _prodInvariant('4', COMMAND_SET) : void 0;

    return spec[COMMAND_SET];
  }

  var nextValue = shallowCopy(value);

  if (hasOwnProperty.call(spec, COMMAND_MERGE)) {
    var mergeObj = spec[COMMAND_MERGE];
    !(mergeObj && typeof mergeObj === 'object') ?  true ? invariant(false, 'update(): %s expects a spec of type \'object\'; got %s', COMMAND_MERGE, mergeObj) : _prodInvariant('5', COMMAND_MERGE, mergeObj) : void 0;
    !(nextValue && typeof nextValue === 'object') ?  true ? invariant(false, 'update(): %s expects a target of type \'object\'; got %s', COMMAND_MERGE, nextValue) : _prodInvariant('6', COMMAND_MERGE, nextValue) : void 0;
    _assign(nextValue, spec[COMMAND_MERGE]);
  }

  if (hasOwnProperty.call(spec, COMMAND_PUSH)) {
    invariantArrayCase(value, spec, COMMAND_PUSH);
    spec[COMMAND_PUSH].forEach(function (item) {
      nextValue.push(item);
    });
  }

  if (hasOwnProperty.call(spec, COMMAND_UNSHIFT)) {
    invariantArrayCase(value, spec, COMMAND_UNSHIFT);
    spec[COMMAND_UNSHIFT].forEach(function (item) {
      nextValue.unshift(item);
    });
  }

  if (hasOwnProperty.call(spec, COMMAND_SPLICE)) {
    !Array.isArray(value) ?  true ? invariant(false, 'Expected %s target to be an array; got %s', COMMAND_SPLICE, value) : _prodInvariant('7', COMMAND_SPLICE, value) : void 0;
    !Array.isArray(spec[COMMAND_SPLICE]) ?  true ? invariant(false, 'update(): expected spec of %s to be an array of arrays; got %s. Did you forget to wrap your parameters in an array?', COMMAND_SPLICE, spec[COMMAND_SPLICE]) : _prodInvariant('8', COMMAND_SPLICE, spec[COMMAND_SPLICE]) : void 0;
    spec[COMMAND_SPLICE].forEach(function (args) {
      !Array.isArray(args) ?  true ? invariant(false, 'update(): expected spec of %s to be an array of arrays; got %s. Did you forget to wrap your parameters in an array?', COMMAND_SPLICE, spec[COMMAND_SPLICE]) : _prodInvariant('8', COMMAND_SPLICE, spec[COMMAND_SPLICE]) : void 0;
      nextValue.splice.apply(nextValue, args);
    });
  }

  if (hasOwnProperty.call(spec, COMMAND_APPLY)) {
    !(typeof spec[COMMAND_APPLY] === 'function') ?  true ? invariant(false, 'update(): expected spec of %s to be a function; got %s.', COMMAND_APPLY, spec[COMMAND_APPLY]) : _prodInvariant('9', COMMAND_APPLY, spec[COMMAND_APPLY]) : void 0;
    nextValue = spec[COMMAND_APPLY](nextValue);
  }

  for (var k in spec) {
    if (!(ALL_COMMANDS_SET.hasOwnProperty(k) && ALL_COMMANDS_SET[k])) {
      nextValue[k] = update(value[k], spec[k]);
    }
  }

  return nextValue;
}

module.exports = update;

/***/ }),

/***/ 1554:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1177);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(37)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(1177, function() {
			var newContent = __webpack_require__(1177);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1588:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(1819);

__webpack_require__(1716);

exports.default = 'Viewing.Extension.MetaProperties';

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1613:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(1617), __esModule: true };

/***/ }),

/***/ 1614:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _isIterable2 = __webpack_require__(1613);

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = __webpack_require__(1088);

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((0, _isIterable3.default)(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

/***/ }),

/***/ 1617:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(226);
__webpack_require__(137);
module.exports = __webpack_require__(1618);


/***/ }),

/***/ 1618:
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(234);
var ITERATOR = __webpack_require__(32)('iterator');
var Iterators = __webpack_require__(86);
module.exports = __webpack_require__(22).isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || Iterators.hasOwnProperty(classof(O));
};


/***/ }),

/***/ 1714:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _assign = __webpack_require__(46);

var _assign2 = _interopRequireDefault(_assign);

var _stringify = __webpack_require__(100);

var _stringify2 = _interopRequireDefault(_stringify);

var _getPrototypeOf = __webpack_require__(20);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(18);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(1022);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _ClientAPI2 = __webpack_require__(84);

var _ClientAPI3 = _interopRequireDefault(_ClientAPI2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MetaAPI = function (_ClientAPI) {
  (0, _inherits3.default)(MetaAPI, _ClientAPI);

  /////////////////////////////////////////////////////////
  // Class constructor
  //
  /////////////////////////////////////////////////////////
  function MetaAPI(apiUrl) {
    (0, _classCallCheck3.default)(this, MetaAPI);
    return (0, _possibleConstructorReturn3.default)(this, (MetaAPI.__proto__ || (0, _getPrototypeOf2.default)(MetaAPI)).call(this, apiUrl));
  }

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////


  (0, _createClass3.default)(MetaAPI, [{
    key: 'getModelMetaProperties',
    value: function getModelMetaProperties() {

      var url = '/all';

      return this.ajax(url);
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'getNodeMetaProperties',
    value: function getNodeMetaProperties(dbId) {

      var url = '/' + dbId + '/properties';

      return this.ajax(url);
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'getNodeMetaProperty',
    value: function getNodeMetaProperty(metaId) {

      var url = '/properties/' + metaId;

      return this.ajax(url);
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'addNodeMetaProperty',
    value: function addNodeMetaProperty(metaProperty) {

      var payload = {
        metaProperty: metaProperty
      };

      var url = '/properties';

      return this.ajax({
        data: (0, _stringify2.default)(payload),
        method: 'POST',
        url: url
      });
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'updateNodeMetaProperty',
    value: function updateNodeMetaProperty(metaProperty) {

      var payload = {
        metaProperty: metaProperty
      };

      var url = '/properties';

      return this.ajax({
        url: url,
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        data: (0, _stringify2.default)(payload)
      });
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'deleteNodeMetaProperty',
    value: function deleteNodeMetaProperty(metaId) {

      var url = '/properties/' + metaId;

      return this.ajax({
        url: url,
        method: 'DELETE'
      });
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'deleteNodeMetaProperties',
    value: function deleteNodeMetaProperties(dbId) {

      var url = dbId + '/properties';

      return this.ajax({
        url: url,
        method: 'DELETE'
      });
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'uploadResource',
    value: function uploadResource(resourceId, file) {
      var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};


      var url = '/resources/' + resourceId;

      var options = (0, _assign2.default)({}, {
        tag: 'metaFile'
      }, opts);

      return (0, _get3.default)(MetaAPI.prototype.__proto__ || (0, _getPrototypeOf2.default)(MetaAPI.prototype), 'upload', this).call(this, url, file, options);
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'deleteResource',
    value: function deleteResource(resourceId) {

      var url = '/resources/' + resourceId;

      return this.ajax({
        url: url,
        method: 'DELETE'
      });
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'exportProperties',
    value: function exportProperties(type) {

      var url = this.apiUrl + '/properties/export/' + type;

      var a = document.createElement('a');

      a.download = 'MetaProperties.' + type;
      a.setAttribute('href', url);

      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'search',
    value: function search(text) {

      var payload = {
        text: text
      };

      var url = '/search';

      return this.ajax({
        data: (0, _stringify2.default)(payload),
        method: 'POST',
        url: url
      });
    }
  }]);
  return MetaAPI;
}(_ClientAPI3.default); //////////////////////////////////////////////////////////
// ConfigManager API
//
///////////////////////////////////////////////////////////


exports.default = MetaAPI;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Viewing.Extension.MetaProperties.API.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1715:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _regenerator = __webpack_require__(216);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(215);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _promise = __webpack_require__(65);

var _promise2 = _interopRequireDefault(_promise);

var _getPrototypeOf = __webpack_require__(20);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(18);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _reactBootstrapTable = __webpack_require__(1465);

var _reactContenteditable = __webpack_require__(1040);

var _reactContenteditable2 = _interopRequireDefault(_reactContenteditable);

var _WidgetContainer = __webpack_require__(1027);

var _WidgetContainer2 = _interopRequireDefault(_WidgetContainer);

var _BaseComponent2 = __webpack_require__(1123);

var _BaseComponent3 = _interopRequireDefault(_BaseComponent2);

var _flatten = __webpack_require__(1151);

var _flatten2 = _interopRequireDefault(_flatten);

var _Viewer = __webpack_require__(1021);

var _Viewer2 = _interopRequireDefault(_Viewer);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Search = function (_BaseComponent) {
  (0, _inherits3.default)(Search, _BaseComponent);

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////
  function Search(props) {
    (0, _classCallCheck3.default)(this, Search);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Search.__proto__ || (0, _getPrototypeOf2.default)(Search)).call(this, props));

    _this.onInputChanged = _this.onInputChanged.bind(_this);
    _this.onRowClicked = _this.onRowClicked.bind(_this);
    _this.onKeyDown = _this.onKeyDown.bind(_this);
    _this.onSearch = _this.onSearch.bind(_this);

    _this.state = {
      search: '',
      rows: []
    };
    return _this;
  }

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////


  (0, _createClass3.default)(Search, [{
    key: 'onInputChanged',
    value: function onInputChanged(e) {

      this.assignState({
        search: e.target.value
      });
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'onKeyDown',
    value: function onKeyDown(e) {

      if (e.keyCode === 13) {

        e.stopPropagation();
        e.preventDefault();

        this.onSearch();
      }
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'getModelProperties',
    value: function getModelProperties(text, attributeNames) {
      var _this2 = this;

      return new _promise2.default(function (resolve, reject) {

        _this2.props.model.search(text, function (result) {

          resolve(result);
        }, function (error) {

          reject(error);
        }, attributeNames);
      });
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'getBulkProperties',
    value: function getBulkProperties(dbIds) {
      var _this3 = this;

      return new _promise2.default(function (resolve, reject) {

        _this3.props.model.getBulkProperties(dbIds, null, function (result) {

          resolve(result);
        }, function (error) {

          reject(error);
        });
      });
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'searchModel',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(text, attributeNames) {
        var dbIds, results, rows;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return this.getModelProperties('"' + text + '"', attributeNames);

              case 3:
                dbIds = _context.sent;
                _context.next = 6;
                return this.getBulkProperties(dbIds);

              case 6:
                results = _context.sent;
                rows = [];


                results.forEach(function (result) {

                  result.properties.forEach(function (prop) {

                    var value = prop.displayValue.toString();

                    if (value.indexOf(text) > -1 && !!result.name) {

                      rows.push({
                        displayCategory: prop.displayCategory,
                        displayValue: prop.displayValue,
                        displayName: prop.displayName,
                        component: result.name,
                        dbId: result.dbId
                      });
                    }
                  });
                });

                return _context.abrupt('return', rows);

              case 12:
                _context.prev = 12;
                _context.t0 = _context['catch'](0);
                return _context.abrupt('return', _context.t0);

              case 15:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 12]]);
      }));

      function searchModel(_x, _x2) {
        return _ref.apply(this, arguments);
      }

      return searchModel;
    }()

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'searchDatabase',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(text) {
        var metaProperties;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return this.props.api.search(text);

              case 3:
                metaProperties = _context2.sent;
                return _context2.abrupt('return', metaProperties);

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2['catch'](0);
                return _context2.abrupt('return', _context2.t0);

              case 10:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 7]]);
      }));

      function searchDatabase(_x3) {
        return _ref2.apply(this, arguments);
      }

      return searchDatabase;
    }()

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'onSearch',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
        var search, results, rows;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                search = this.state.search;
                _context3.next = 3;
                return _promise2.default.all([this.searchModel(search), this.searchDatabase(search)]);

              case 3:
                results = _context3.sent;
                rows = (0, _flatten2.default)(results);


                this.assignState({
                  rows: rows
                });

              case 6:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function onSearch() {
        return _ref3.apply(this, arguments);
      }

      return onSearch;
    }()

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'renderTitle',
    value: function renderTitle() {

      return _react2.default.createElement(
        'div',
        { className: 'title' },
        _react2.default.createElement(
          'label',
          null,
          'Meta Search'
        ),
        _react2.default.createElement(
          'div',
          { className: 'meta-search-controls' },
          _react2.default.createElement(_reactContenteditable2.default, {
            'data-placeholder': 'Search Meta Properties',
            onChange: this.onInputChanged,
            onKeyDown: this.onKeyDown,
            html: this.state.search,
            className: 'input-search'
          }),
          _react2.default.createElement(
            'button',
            { onClick: this.onSearch,
              title: 'Search ...' },
            _react2.default.createElement('span', { className: 'fa fa-search' })
          )
        )
      );
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'onRowClicked',
    value: function onRowClicked(row) {
      var _props = this.props,
          model = _props.model,
          viewer = _props.viewer;


      var dbId = parseInt(row.dbId);

      _Viewer2.default.isolateFull(viewer, dbId, model);

      viewer.fitToView(dbId);
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'renderContent',
    value: function renderContent() {

      var width = this.props.dimensions.width;

      var columnWidth = !isNaN(width) ? (width * 0.25).toString() : '20';

      var options = {
        onRowClick: this.onRowClicked
      };

      return _react2.default.createElement(
        _reactBootstrapTable.BootstrapTable,
        {
          data: this.state.rows,
          options: options,
          striped: true,
          hover: true },
        _react2.default.createElement(
          _reactBootstrapTable.TableHeaderColumn,
          {
            dataField: 'component',
            width: columnWidth,
            headerAlign: 'left',
            dataAlign: 'left' },
          'Component'
        ),
        _react2.default.createElement(
          _reactBootstrapTable.TableHeaderColumn,
          {
            dataField: 'displayName',
            width: columnWidth,
            headerAlign: 'left',
            dataAlign: 'left',
            isKey: true },
          'Property'
        ),
        _react2.default.createElement(
          _reactBootstrapTable.TableHeaderColumn,
          {
            dataField: 'displayCategory',
            width: columnWidth,
            headerAlign: 'left',
            dataAlign: 'left' },
          'Category'
        ),
        _react2.default.createElement(
          _reactBootstrapTable.TableHeaderColumn,
          {
            dataField: 'displayValue',
            headerAlign: 'left',
            dataAlign: 'left' },
          'Value'
        )
      );
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      return _react2.default.createElement(
        _WidgetContainer2.default,
        {
          renderTitle: function renderTitle() {
            return _this4.renderTitle();
          },
          className: 'meta-search',
          showTitle: true },
        this.renderContent()
      );
    }
  }]);
  return Search;
}(_BaseComponent3.default);

exports.default = Search;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Viewing.Extension.MetaProperties.Search.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1716:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, $) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(46);

var _assign2 = _interopRequireDefault(_assign);

var _getIterator2 = __webpack_require__(1088);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _slicedToArray2 = __webpack_require__(1614);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _toConsumableArray2 = __webpack_require__(371);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _promise = __webpack_require__(65);

var _promise2 = _interopRequireDefault(_promise);

var _regenerator = __webpack_require__(216);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(215);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(20);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(18);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(1022);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _reactReflex = __webpack_require__(1131);

var _Viewer = __webpack_require__(1025);

var _Viewer2 = _interopRequireDefault(_Viewer);

var _ViewingExtensionMetaProperties = __webpack_require__(1715);

var _ViewingExtensionMetaProperties2 = _interopRequireDefault(_ViewingExtensionMetaProperties);

var _ViewingExtensionMetaProperties3 = __webpack_require__(1714);

var _ViewingExtensionMetaProperties4 = _interopRequireDefault(_ViewingExtensionMetaProperties3);

var _reactBootstrap = __webpack_require__(376);

var _MetaProperty = __webpack_require__(1346);

var _WidgetContainer = __webpack_require__(1027);

var _WidgetContainer2 = _interopRequireDefault(_WidgetContainer);

var _MetaTreeView = __webpack_require__(1347);

var _MetaTreeView2 = _interopRequireDefault(_MetaTreeView);

var _SvcManager = __webpack_require__(67);

var _SvcManager2 = _interopRequireDefault(_SvcManager);

var _Viewer3 = __webpack_require__(1021);

var _Viewer4 = _interopRequireDefault(_Viewer3);

var _Loader = __webpack_require__(1046);

var _dompurify = __webpack_require__(1032);

var _dompurify2 = _interopRequireDefault(_dompurify);

var _reactDom = __webpack_require__(26);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Label = __webpack_require__(1034);

var _Label2 = _interopRequireDefault(_Label);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MetaPropertiesExtension = function (_MultiModelExtensionB) {
  (0, _inherits3.default)(MetaPropertiesExtension, _MultiModelExtensionB);

  /////////////////////////////////////////////////////////
  // Class constructor
  //
  /////////////////////////////////////////////////////////
  function MetaPropertiesExtension(viewer, options) {
    (0, _classCallCheck3.default)(this, MetaPropertiesExtension);

    var _this = (0, _possibleConstructorReturn3.default)(this, (MetaPropertiesExtension.__proto__ || (0, _getPrototypeOf2.default)(MetaPropertiesExtension)).call(this, viewer, options));

    _this.onPropertyDeleted = _this.onPropertyDeleted.bind(_this);
    _this.onPropertyUpdated = _this.onPropertyUpdated.bind(_this);
    _this.onDeleteProperty = _this.onDeleteProperty.bind(_this);
    _this.onPropertyAdded = _this.onPropertyAdded.bind(_this);
    _this.onEditProperty = _this.onEditProperty.bind(_this);
    _this.onMetaChanged = _this.onMetaChanged.bind(_this);
    _this.onContextMenu = _this.onContextMenu.bind(_this);
    _this.onSearch = _this.onSearch.bind(_this);

    _this.dialogSvc = _SvcManager2.default.getService('DialogSvc');

    _this.socketSvc = _SvcManager2.default.getService('SocketSvc');

    _this.react = options.react;
    return _this;
  }

  /////////////////////////////////////////////////////////
  // Load callback
  //
  /////////////////////////////////////////////////////////


  (0, _createClass3.default)(MetaPropertiesExtension, [{
    key: 'load',
    value: function load() {
      var _this2 = this;

      this.socketSvc.on('meta.propertyDeleted', this.onPropertyDeleted);

      this.socketSvc.on('meta.propertyUpdated', this.onPropertyUpdated);

      this.socketSvc.on('meta.propertyAdded', this.onPropertyAdded);

      this.react.setState({

        properties: [],
        search: false,
        model: null,
        dbId: null

      }).then(function () {

        _this2.react.pushRenderExtension(_this2);

        var model = _this2.viewer.activeModel || _this2.viewer.model;

        if (model) {

          _this2.setModel(model);
        }
      });

      this.viewer.loadDynamicExtension('Viewing.Extension.ContextMenu').then(function (ctxMenuExtension) {
        ctxMenuExtension.addHandler(_this2.onContextMenu);
      });

      console.log('Viewing.Extension.MetaProperties loaded');

      return true;
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'unload',


    /////////////////////////////////////////////////////////
    // Unload callback
    //
    /////////////////////////////////////////////////////////
    value: function unload() {

      console.log('Viewing.Extension.MetaProperties loaded');

      this.socketSvc.off('meta.propertyDeleted', this.onPropertyDeleted);

      this.socketSvc.off('meta.propertyUpdated', this.onPropertyUpdated);

      this.socketSvc.off('meta.propertyAdded', this.onPropertyAdded);

      (0, _get3.default)(MetaPropertiesExtension.prototype.__proto__ || (0, _getPrototypeOf2.default)(MetaPropertiesExtension.prototype), 'unload', this).call(this);

      return true;
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'onModelRootLoaded',
    value: function onModelRootLoaded() {

      this.options.loader.show(false);
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'onObjectTreeCreated',
    value: function onObjectTreeCreated(event) {

      var selectors = ['#toolbar-propertiesTool', '#toolbar-zoomTool', '#toolbar-panTool'];

      selectors.forEach(function (selector) {
        $(selector).css({
          display: 'none'
        });
      });

      this.setModel(event.model);
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'onModelActivated',
    value: function onModelActivated(event) {

      if (event.source !== 'model.loaded') {

        this.setModel(event.model);
      }
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'onPropertyAdded',
    value: function onPropertyAdded(metaPayload) {

      this.loadNodeProperties(metaPayload.dbId, true);
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'onPropertyUpdated',
    value: function onPropertyUpdated(metaPayload) {

      this.loadNodeProperties(metaPayload.dbId, true);
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'onPropertyDeleted',
    value: function onPropertyDeleted(dbId) {

      this.loadNodeProperties(dbId, true);
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'setModel',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(model) {
        var modelId, database, apiUrl, instanceTree;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                modelId = model.dbModelId || this.options.dbModel._id;
                database = model.database || this.options.database;
                apiUrl = this.options.apiUrl;


                this.api = new _ViewingExtensionMetaProperties4.default(apiUrl + '/meta/' + database + '/' + modelId);

                _context.next = 6;
                return this.react.setState({
                  api: this.api,
                  model: model
                });

              case 6:
                instanceTree = model.getData().instanceTree;


                this.loadNodeProperties(instanceTree.getRootId());

              case 8:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function setModel(_x) {
        return _ref.apply(this, arguments);
      }

      return setModel;
    }()

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'onSelection',
    value: function onSelection(event) {

      if (event.selections.length) {

        var selection = event.selections[0];

        var dbId = selection.dbIdArray[0];

        this.loadNodeProperties(dbId);
      } else {
        var _react$getState = this.react.getState(),
            model = _react$getState.model;

        if (model) {

          var instanceTree = model.getData().instanceTree;

          var _dbId = instanceTree.getRootId();

          this.loadNodeProperties(_dbId);
        }
      }
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'getNodeData',
    value: function getNodeData(dbId) {
      var _this3 = this;

      return new _promise2.default(function (resolve, reject) {
        var _react$getState2 = _this3.react.getState(),
            model = _react$getState2.model;

        model.getProperties(dbId, function (result) {

          resolve({
            externalId: result.externalId,
            component: result.name
          });
        }, function (error) {

          reject(error);
        });
      });
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'loadNodeProperties',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(dbId, refresh) {
        var state, data, _react$getState3, model, modelProperties, metaProperties, properties;

        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                state = this.react.getState();

                if (!(!refresh && dbId === state.dbId)) {
                  _context2.next = 3;
                  break;
                }

                return _context2.abrupt('return');

              case 3:
                if (refresh) {
                  _context2.next = 6;
                  break;
                }

                _context2.next = 6;
                return this.react.setState({
                  properties: []
                });

              case 6:
                _context2.next = 8;
                return this.getNodeData(dbId);

              case 8:
                data = _context2.sent;
                _react$getState3 = this.react.getState(), model = _react$getState3.model;
                _context2.next = 12;
                return _Viewer4.default.getProperties(model, dbId);

              case 12:
                modelProperties = _context2.sent;
                _context2.next = 15;
                return this.api.getNodeMetaProperties(dbId);

              case 15:
                metaProperties = _context2.sent;
                properties = this.buildFinalProperties(modelProperties, metaProperties);
                _context2.next = 19;
                return this.react.setState({
                  externalId: data.externalId,
                  guid: this.guid(),
                  properties: properties,
                  dbId: dbId
                });

              case 19:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function loadNodeProperties(_x2, _x3) {
        return _ref2.apply(this, arguments);
      }

      return loadNodeProperties;
    }()

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'buildFinalProperties',
    value: function buildFinalProperties(modelProperties, metaProperties) {

      var finalModelProperties = [].concat((0, _toConsumableArray3.default)(modelProperties));

      var finalMetaProperties = metaProperties.filter(function (metaProperty) {

        if (metaProperty.isOverride) {

          var entries = finalModelProperties.entries();

          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = (0, _getIterator3.default)(entries), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var _ref3 = _step.value;

              var _ref4 = (0, _slicedToArray3.default)(_ref3, 2);

              var idx = _ref4[0];
              var modelProperty = _ref4[1];


              if (modelProperty.displayCategory === metaProperty.displayCategory && modelProperty.displayName === metaProperty.displayName) {

                finalModelProperties.splice(idx, 1);
                break;
              }
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          return metaProperty.metaType !== 'DeleteOverride';
        }

        return true;
      });

      return [].concat((0, _toConsumableArray3.default)(finalModelProperties), (0, _toConsumableArray3.default)(finalMetaProperties));
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'onContextMenu',
    value: function onContextMenu(event) {
      var _this4 = this;

      var _react$getState4 = this.react.getState(),
          model = _react$getState4.model;

      if (!model) {
        return;
      }

      event.menu.forEach(function (entry) {

        var title = entry.title.toLowerCase();

        if (title === 'show all objects') {

          entry.target = function () {
            _Viewer4.default.isolateFull(_this4.viewer, [], model);
            _this4.viewer.fitToView();
          };
        }
      });

      var instanceTree = model.getData().instanceTree;

      var dbId = event.dbId || (instanceTree ? instanceTree.getRootId() : -1);

      if (dbId > -1) {

        event.menu.push({
          title: 'Add Meta Property',
          target: function target() {
            _this4.showAddMetaPropertyDlg(dbId);
          }
        });
      }
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'getFileExt',
    value: function getFileExt(filename) {

      return filename.split('.').pop(-1);
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'buildMetaPayload',
    value: function buildMetaPayload(metaProperty) {
      var _this5 = this;

      switch (metaProperty.metaType) {

        case 'File':

          if (metaProperty.file) {

            var file = metaProperty.file;

            var fileExt = this.getFileExt(file.name);

            var fileId = this.guid('xxxx-xxxx-xxxx') + '.' + fileExt;

            var payload = (0, _assign2.default)({}, metaProperty, {
              filelink: this.api.apiUrl + ('/download/' + fileId),
              fileId: fileId
            });

            var notification = this.options.notify.add({
              title: 'Uploading ' + file.name,
              message: 'progress: 0%',
              dismissible: false,
              status: 'loading',
              dismissAfter: 0,
              position: 'tl'
            });

            this.api.uploadResource(fileId, file, {
              progress: function progress(percent) {

                notification.message = 'progress: ' + percent.toFixed(2) + '%';

                if (percent === 100) {

                  notification.title = file.name + ' uploaded!';
                  notification.message = 'progress: 100%';
                  notification.dismissAfter = 5000;
                  notification.dismissible = true;
                  notification.status = 'success';
                  notification.buttons = [{
                    name: 'OK',
                    primary: true
                  }];
                }

                _this5.options.notify.update(notification);
              }
            });

            window.URL.revokeObjectURL(file.preview);

            delete payload.file;

            return payload;
          } else {

            // file not changed
            return metaProperty;
          }

        default:
          return metaProperty;
      }
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'showAddMetaPropertyDlg',
    value: function showAddMetaPropertyDlg(dbId) {
      var _this6 = this;

      var onClose = function () {
        var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(result) {
          var nodeData, metaProperty, metaPayload;
          return _regenerator2.default.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:

                  _this6.dialogSvc.off('dialog.close', onClose);

                  if (!(result === 'OK')) {
                    _context3.next = 11;
                    break;
                  }

                  _context3.next = 4;
                  return _this6.getNodeData(dbId);

                case 4:
                  nodeData = _context3.sent;
                  metaProperty = (0, _assign2.default)({}, _this6.metaPropertyEdits, nodeData, {
                    dbId: dbId.toString(),
                    id: _this6.guid()
                  });
                  metaPayload = _this6.buildMetaPayload(metaProperty);


                  _this6.addProperty(metaPayload);

                  _context3.next = 10;
                  return _this6.api.addNodeMetaProperty(metaPayload);

                case 10:

                  _this6.socketSvc.broadcast('meta.propertyAdded', metaPayload);

                case 11:
                case 'end':
                  return _context3.stop();
              }
            }
          }, _callee3, _this6);
        }));

        return function onClose(_x4) {
          return _ref5.apply(this, arguments);
        };
      }();

      this.dialogSvc.on('dialog.close', onClose);

      this.dialogSvc.setState({
        className: 'meta-property-dlg',
        title: 'Add Meta Property ...',
        disableOK: true,
        open: true,
        content: _react2.default.createElement(_MetaProperty.AddMetaProperty, {
          disableOK: this.dialogSvc.disableOK,
          onChanged: this.onMetaChanged
        })
      }, true);
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'addProperty',
    value: function addProperty(metaProperty) {
      var _react$getState5 = this.react.getState(),
          properties = _react$getState5.properties;

      this.react.setState({
        properties: [].concat((0, _toConsumableArray3.default)(properties), [metaProperty]),
        guid: this.guid()
      });
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'onMetaChanged',
    value: function onMetaChanged(metaPropertyEdits) {

      this.metaPropertyEdits = metaPropertyEdits;
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'onEditProperty',
    value: function onEditProperty(metaProperty, isModelOverride) {
      var _this7 = this;

      return new _promise2.default(function (resolve) {

        var onClose = function () {
          var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(result) {
            var newMetaProperty, newMetaPayload;
            return _regenerator2.default.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:

                    _this7.dialogSvc.off('dialog.close', onClose);

                    if (!(result === 'OK')) {
                      _context4.next = 17;
                      break;
                    }

                    newMetaProperty = (0, _assign2.default)({}, metaProperty, _this7.metaPropertyEdits, isModelOverride ? {
                      isOverride: true
                    } : {});
                    newMetaPayload = _this7.buildMetaPayload(newMetaProperty);


                    resolve(newMetaPayload);

                    _this7.editProperty(newMetaPayload, isModelOverride);

                    if (!isModelOverride) {
                      _context4.next = 11;
                      break;
                    }

                    _context4.next = 9;
                    return _this7.api.addNodeMetaProperty(newMetaPayload);

                  case 9:
                    _context4.next = 14;
                    break;

                  case 11:

                    if ((newMetaProperty.metaType !== 'File' || newMetaProperty.file) && metaProperty.fileId) {

                      _this7.api.deleteResource(metaProperty.fileId);
                    }

                    _context4.next = 14;
                    return _this7.api.updateNodeMetaProperty(newMetaPayload);

                  case 14:

                    _this7.socketSvc.broadcast('meta.propertyUpdated', newMetaPayload);

                    _context4.next = 18;
                    break;

                  case 17:

                    resolve(false);

                  case 18:
                  case 'end':
                    return _context4.stop();
                }
              }
            }, _callee4, _this7);
          }));

          return function onClose(_x5) {
            return _ref6.apply(this, arguments);
          };
        }();

        _this7.dialogSvc.on('dialog.close', onClose);

        _this7.metaPropertyEdits = {};

        var dlgProps = (0, _assign2.default)({}, metaProperty, {
          disableName: metaProperty.isOverride || isModelOverride,
          disableOK: _this7.dialogSvc.disableOK,
          onChanged: _this7.onMetaChanged,
          disableCategory: true
        });

        var override = metaProperty.isOverride || isModelOverride ? '[Override] ' : '';

        _this7.dialogSvc.setState({
          title: 'Edit Meta Property ' + override + '...',
          content: _react2.default.createElement(_MetaProperty.AddMetaProperty, dlgProps),
          className: 'meta-property-dlg',
          disableOK: true,
          open: true
        }, true);
      });
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'editProperty',
    value: function editProperty(metaProperty, isNewOverride) {
      var _react$getState6 = this.react.getState(),
          properties = _react$getState6.properties;

      if (isNewOverride) {

        var entries = properties.entries();

        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = (0, _getIterator3.default)(entries), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var _ref7 = _step2.value;

            var _ref8 = (0, _slicedToArray3.default)(_ref7, 2);

            var idx = _ref8[0];
            var prop = _ref8[1];


            if (prop.displayCategory === metaProperty.displayCategory && prop.displayName === metaProperty.displayName) {

              properties.splice(idx, 1);

              this.react.setState({
                properties: [].concat((0, _toConsumableArray3.default)(properties), [metaProperty])
              });

              break;
            }
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }
      } else {

        this.react.setState({
          properties: [].concat((0, _toConsumableArray3.default)(properties.filter(function (prop) {
            return prop.id !== metaProperty.id;
          })), [metaProperty])
        });
      }
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'onDeleteProperty',
    value: function onDeleteProperty(metaProperty, isModelOverride) {
      var _this8 = this;

      return new _promise2.default(function (resolve) {

        var onClose = function () {
          var _ref9 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(result) {
            var metaPayload, _metaPayload;

            return _regenerator2.default.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:

                    _this8.dialogSvc.off('dialog.close', onClose);

                    if (!(result === 'OK')) {
                      _context5.next = 23;
                      break;
                    }

                    if (!isModelOverride) {
                      _context5.next = 9;
                      break;
                    }

                    metaPayload = (0, _assign2.default)({}, metaProperty, {
                      metaType: 'DeleteOverride',
                      isOverride: true
                    });


                    _this8.deleteProperty(metaPayload, true);

                    _context5.next = 7;
                    return _this8.api.addNodeMetaProperty(metaPayload);

                  case 7:
                    _context5.next = 19;
                    break;

                  case 9:
                    if (!metaProperty.isOverride) {
                      _context5.next = 16;
                      break;
                    }

                    _metaPayload = (0, _assign2.default)({}, metaProperty, {
                      metaType: 'DeleteOverride'
                    });


                    _this8.deleteProperty(_metaPayload);

                    _context5.next = 14;
                    return _this8.api.updateNodeMetaProperty(_metaPayload);

                  case 14:
                    _context5.next = 19;
                    break;

                  case 16:

                    _this8.deleteProperty(metaProperty);

                    _context5.next = 19;
                    return _this8.api.deleteNodeMetaProperty(metaProperty.id);

                  case 19:

                    _this8.socketSvc.broadcast('meta.propertyDeleted', metaProperty.dbId);

                    return _context5.abrupt('return', resolve(metaProperty));

                  case 23:

                    resolve(null);

                  case 24:
                  case 'end':
                    return _context5.stop();
                }
              }
            }, _callee5, _this8);
          }));

          return function onClose(_x6) {
            return _ref9.apply(this, arguments);
          };
        }();

        _this8.dialogSvc.on('dialog.close', onClose);

        var msg = _dompurify2.default.sanitize('Are you sure you want to delete ' + ('<b>' + metaProperty.displayName + '</b> ?'));

        var override = metaProperty.isOverride || isModelOverride ? '[Override] ' : '';

        _this8.dialogSvc.setState({
          title: 'Delete Property ' + override + '...',
          content: _react2.default.createElement('div', { dangerouslySetInnerHTML: {
              __html: msg
            }
          }),
          open: true
        });
      });
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'deleteProperty',
    value: function deleteProperty(metaProperty, isNewOverride) {
      var _react$getState7 = this.react.getState(),
          properties = _react$getState7.properties;

      if (isNewOverride) {

        var entries = properties.entries();

        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = (0, _getIterator3.default)(entries), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var _ref10 = _step3.value;

            var _ref11 = (0, _slicedToArray3.default)(_ref10, 2);

            var idx = _ref11[0];
            var prop = _ref11[1];


            if (prop.displayCategory === metaProperty.displayCategory && prop.displayName === metaProperty.displayName) {

              properties.splice(idx, 1);

              this.react.setState({
                properties: properties
              });

              break;
            }
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3.return) {
              _iterator3.return();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }
      } else {

        this.react.setState({
          properties: properties.filter(function (prop) {
            return prop.id !== metaProperty.id;
          })
        });
      }
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'deleteAllProperties',
    value: function deleteAllProperties(dbId) {
      var _this9 = this;

      return new _promise2.default(function (resolve) {

        var onClose = function () {
          var _ref12 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(result) {
            return _regenerator2.default.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:

                    _this9.dialogSvc.off('dialog.close', onClose);

                    if (!(result === 'OK')) {
                      _context6.next = 9;
                      break;
                    }

                    resolve(true);

                    _context6.next = 5;
                    return _this9.api.deleteNodeMetaProperties(dbId);

                  case 5:

                    _this9.loadNodeProperties(dbId, true);

                    _this9.socketSvc.broadcast('meta.propertyDeleted', dbId);

                    _context6.next = 10;
                    break;

                  case 9:

                    resolve(false);

                  case 10:
                  case 'end':
                    return _context6.stop();
                }
              }
            }, _callee6, _this9);
          }));

          return function onClose(_x7) {
            return _ref12.apply(this, arguments);
          };
        }();

        _this9.dialogSvc.on('dialog.close', onClose);

        var _react$getState8 = _this9.react.getState(),
            model = _react$getState8.model;

        var instanceTree = model.getData().instanceTree;

        var nodeName = instanceTree.getNodeName(dbId);

        var msg = _dompurify2.default.sanitize('Are you sure you want to delete all ' + 'custom properties on ' + ('<br/><b>' + nodeName + '</b> ?'));

        _this9.dialogSvc.setState({
          title: 'Delete Component Properties ...',
          content: _react2.default.createElement('div', { dangerouslySetInnerHTML: {
              __html: msg
            }
          }),
          open: true
        });
      });
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'onSearch',
    value: function onSearch() {
      var _react$getState9 = this.react.getState(),
          search = _react$getState9.search;

      this.react.setState({
        search: !search
      });
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'setDocking',
    value: function () {
      var _ref13 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7(docked) {
        var id;
        return _regenerator2.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                id = MetaPropertiesExtension.ExtensionId;

                if (!docked) {
                  _context7.next = 7;
                  break;
                }

                _context7.next = 4;
                return this.react.popRenderExtension(id);

              case 4:

                this.react.pushViewerPanel(this, {
                  className: this.className,
                  height: 250,
                  width: 350
                });

                _context7.next = 10;
                break;

              case 7:
                _context7.next = 9;
                return this.react.popViewerPanel(id);

              case 9:

                this.react.pushRenderExtension(this);

              case 10:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function setDocking(_x8) {
        return _ref13.apply(this, arguments);
      }

      return setDocking;
    }()

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'renderTitle',
    value: function renderTitle(docked) {
      var _this10 = this;

      var _react$getState10 = this.react.getState(),
          dbId = _react$getState10.dbId,
          search = _react$getState10.search;

      var spanClass = docked ? 'fa fa-chain-broken' : 'fa fa-chain';

      return _react2.default.createElement(
        'div',
        { className: 'title' },
        _react2.default.createElement(
          'label',
          null,
          'Meta Properties'
        ),
        _react2.default.createElement(
          'div',
          { className: 'meta-properties-controls' },
          _react2.default.createElement(
            'button',
            { className: search ? 'active' : '',
              onClick: this.onSearch,
              title: 'Search MetaProperties' },
            _react2.default.createElement('span', { className: 'fa fa-search', style: {
                position: 'relative',
                top: '-1px'
              } })
          ),
          _react2.default.createElement(
            _reactBootstrap.OverlayTrigger,
            { trigger: 'click',
              overlay: this.renderPopover(),
              placement: 'left',
              rootClose: true },
            _react2.default.createElement(
              'button',
              { title: 'Export MetaProperties' },
              _react2.default.createElement('span', { className: 'fa fa-cloud-download' })
            )
          ),
          _react2.default.createElement(
            'button',
            { onClick: function onClick() {
                return _this10.showAddMetaPropertyDlg(dbId);
              },
              title: 'Add new MetaProperty on component' },
            _react2.default.createElement('span', { className: 'fa fa-plus' })
          ),
          _react2.default.createElement(
            'button',
            { onClick: function onClick() {
                return _this10.deleteAllProperties(dbId);
              },
              title: 'Delete all MetaProperties on component' },
            _react2.default.createElement('span', { className: 'fa fa-close', style: {
                position: 'relative',
                top: '-1px'
              } })
          ),
          _react2.default.createElement(
            'button',
            { onClick: function onClick() {
                return _this10.setDocking(docked);
              },
              title: 'Toggle docking mode' },
            _react2.default.createElement('span', { className: spanClass })
          )
        )
      );
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'renderTreeView',
    value: function renderTreeView(properties) {
      var _react$getState11 = this.react.getState(),
          guid = _react$getState11.guid,
          model = _react$getState11.model,
          dbId = _react$getState11.dbId,
          externalId = _react$getState11.externalId;

      var instanceTree = model.getData().instanceTree;

      var rootName = instanceTree.getNodeName(dbId);

      return _react2.default.createElement(_MetaTreeView2.default, {
        onDeleteModelProperty: this.onDeleteModelProperty,
        onEditModelProperty: this.onEditModelProperty,
        menuContainer: this.options.appContainer,
        onDeleteProperty: this.onDeleteProperty,
        onEditProperty: this.onEditProperty,
        properties: properties,
        externalId: externalId,
        displayName: rootName,
        model: model,
        dbId: dbId,
        guid: guid
      });
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'renderPopover',
    value: function renderPopover() {
      var _this11 = this;

      return _react2.default.createElement(
        _reactBootstrap.Popover,
        { className: this.className + ' exports',
          title: 'Meta Exports',
          id: 'exports-popover' },
        _react2.default.createElement(
          'button',
          {
            onClick: function onClick() {
              _this11.api.exportProperties('json');
            },
            title: '.json export' },
          _react2.default.createElement('span', { className: 'fa fa-cloud-download' }),
          _react2.default.createElement(
            'label',
            null,
            'MetaProperties.json'
          )
        ),
        _react2.default.createElement(
          'button',
          {
            onClick: function onClick() {
              _this11.api.exportProperties('csv');
            },
            title: '.csv export' },
          _react2.default.createElement('span', { className: 'fa fa-cloud-download' }),
          _react2.default.createElement(
            'label',
            null,
            'MetaProperties.csv'
          )
        )
      );
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'renderContent',
    value: function renderContent() {
      var _react$getState12 = this.react.getState(),
          api = _react$getState12.api,
          model = _react$getState12.model,
          properties = _react$getState12.properties,
          search = _react$getState12.search;

      return _react2.default.createElement(
        'div',
        { className: 'content' },
        _react2.default.createElement(
          _reactReflex.ReflexContainer,
          { orientation: 'horizontal' },
          _react2.default.createElement(
            _reactReflex.ReflexElement,
            null,
            _react2.default.createElement(_Loader.ReactLoader, { show: !properties.length }),
            properties.length && this.renderTreeView(properties)
          ),
          search && _react2.default.createElement(_reactReflex.ReflexSplitter, null),
          search && _react2.default.createElement(
            _reactReflex.ReflexElement,
            {
              propagateDimensions: true,
              renderOnResize: true,
              minSize: 40 },
            _react2.default.createElement(_ViewingExtensionMetaProperties2.default, { viewer: this.viewer,
              model: model,
              api: api
            })
          )
        )
      );
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'render',
    value: function render(opts) {
      var _this12 = this;

      return _react2.default.createElement(
        _WidgetContainer2.default,
        {
          renderTitle: function renderTitle() {
            return _this12.renderTitle(opts.docked);
          },
          showTitle: opts.showTitle,
          className: this.className },
        this.renderContent()
      );
    }
  }, {
    key: 'className',
    get: function get() {

      return 'meta-properties';
    }

    /////////////////////////////////////////////////////////
    // Extension Id
    //
    /////////////////////////////////////////////////////////

  }], [{
    key: 'ExtensionId',
    get: function get() {

      return 'Viewing.Extension.MetaProperties';
    }
  }]);
  return MetaPropertiesExtension;
}(_Viewer2.default); ///////////////////////////////////////////////////////////
// MetaProperties Viewer Extension
// By Philippe Leefsma, Autodesk Inc, April 2017
//
///////////////////////////////////////////////////////////


Autodesk.Viewing.theExtensionManager.registerExtension(MetaPropertiesExtension.ExtensionId, MetaPropertiesExtension);

exports.default = 'Viewing.Extension.MetaProperties';

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Viewing.Extension.MetaProperties.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module), __webpack_require__(31)))

/***/ }),

/***/ 1819:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1399);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(37)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(1399, function() {
			var newContent = __webpack_require__(1399);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=10.js.map