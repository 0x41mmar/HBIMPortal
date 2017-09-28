webpackJsonp([24,41],{

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

/***/ 1026:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(36)();
// imports


// module
exports.push([module.i, ".switch-container {\n  position: relative; }\n\n.switch-container *:hover {\n  cursor: pointer; }\n\n.switch-container.disabled *:hover {\n  cursor: not-allowed; }\n\ninput[type=\"checkbox\"].switch {\n  pointer-events: none;\n  position: absolute;\n  cursor: pointer;\n  opacity: 0; }\n\ninput[type=\"checkbox\"].switch + div {\n  vertical-align: middle;\n  width: 40px;\n  height: 20px;\n  border-radius: 999px;\n  background-color: #9d9d9d;\n  transition-duration: .4s;\n  transition-property: background-color, box-shadow;\n  cursor: pointer; }\n\ninput[type=\"checkbox\"].switch + div span {\n  position: absolute;\n  font-size: 1.6rem;\n  color: #f5f5f5;\n  margin-top: 12px; }\n\ninput[type=\"checkbox\"].switch + div span:nth-child(1) {\n  margin-left: 15px; }\n\ninput[type=\"checkbox\"].switch + div span:nth-child(2) {\n  margin-left: 55px; }\n\ninput[type=\"checkbox\"].switch:checked + div {\n  width: 60px;\n  background-position: 0 0;\n  background-color: #57BB00; }\n\n.switch-container.disabled input[type=\"checkbox\"].switch + div {\n  background-color: rgba(157, 157, 157, 0.5); }\n\ninput[type=\"checkbox\"].switch + div {\n  width: 60px;\n  height: 26px; }\n\ninput[type=\"checkbox\"].switch + div > div {\n  float: left;\n  width: 24px;\n  height: 24px;\n  border-radius: inherit;\n  background: #f5f5f5;\n  transition-timing-function: cubic-bezier(1, 0, 0, 1);\n  transition-duration: 0.4s;\n  transition-property: background-color, -webkit-transform;\n  transition-property: transform, background-color;\n  transition-property: transform, background-color, -webkit-transform;\n  pointer-events: none;\n  margin-top: 1px;\n  margin-left: 1px; }\n\ninput[type=\"checkbox\"].switch:checked + div > div {\n  -webkit-transform: translate3d(20px, 0, 0);\n  transform: translate3d(20px, 0, 0);\n  background-color: #f5f5f5; }\n\ninput[type=\"checkbox\"].bigswitch.switch + div > div {\n  width: 44px;\n  height: 44px;\n  margin-top: 1px; }\n\ninput[type=\"checkbox\"].switch:checked + div > div {\n  -webkit-transform: translate3d(34px, 0, 0);\n  transform: translate3d(34px, 0, 0); }\n", ""]);

// exports


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

/***/ 1047:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getOwnPropertyDescriptor = __webpack_require__(373);

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

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

var _desc, _value, _class, _class2, _temp;

var _autobindDecorator = __webpack_require__(374);

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

var Switch = (_class = (_temp = _class2 = function (_React$Component) {
  (0, _inherits3.default)(Switch, _React$Component);

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////


  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////
  function Switch() {
    (0, _classCallCheck3.default)(this, Switch);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Switch.__proto__ || (0, _getPrototypeOf2.default)(Switch)).call(this));

    _this.state = {
      checked: true
    };
    return _this;
  }

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////


  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////


  (0, _createClass3.default)(Switch, [{
    key: 'componentWillMount',
    value: function componentWillMount() {

      this.setState({
        checked: this.props.checked
      });
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'toggle',
    value: function toggle() {

      if (this.props.disabled) {
        return;
      }

      var checked = !this.state.checked;

      this.setState({
        checked: checked
      });

      if (this.props.onChange) {

        this.props.onChange(checked);
      }
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'render',
    value: function render() {

      var classNames = ['switch-container', this.props.disabled ? 'disabled' : ''].concat((0, _toConsumableArray3.default)(this.props.className.split(' ')));

      return _react2.default.createElement(
        'div',
        { className: classNames.join(' '),
          onClick: this.toggle },
        _react2.default.createElement('input', { ref: 'switch', className: 'switch',
          checked: this.state.checked,
          value: this.state.checked,
          onChange: function onChange() {},
          type: 'checkbox'
        }),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'span',
            null,
            _react2.default.createElement('g', { className: 'icon icon-toolbar grid-view' })
          ),
          _react2.default.createElement(
            'span',
            null,
            _react2.default.createElement('g', { className: 'icon icon-toolbar ticket-view' })
          ),
          _react2.default.createElement('div', null)
        )
      );
    }
  }]);
  return Switch;
}(_react2.default.Component), _class2.propTypes = {
  className: _propTypes2.default.string,
  checked: _propTypes2.default.bool }, _class2.defaultProps = {
  checked: true,
  className: '' }, _temp), (_applyDecoratedDescriptor(_class.prototype, 'toggle', [_autobindDecorator2.default], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'toggle'), _class.prototype)), _class);
exports.default = Switch;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Switch.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1048:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Switch = __webpack_require__(1047);

var _Switch2 = _interopRequireDefault(_Switch);

__webpack_require__(1050);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Switch2.default;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

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

/***/ 1050:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1026);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(37)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(1026, function() {
			var newContent = __webpack_require__(1026);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

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

/***/ 1181:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(36)();
// imports


// module
exports.push([module.i, ".selection-tree .treeview lmvheader {\n  transition-property: background, border;\n  transition-timing-function: ease;\n  transition-duration: 1.5s;\n  transition-delay: 0.0s;\n  background: rgba(245, 245, 245, 0.5);\n  margin-bottom: 2px;\n  border: none;\n  height: 30px;\n  float: left; }\n\n.selection-tree .treeview lmvheader:hover {\n  background: rgba(0, 105, 245, 0.35); }\n\n.selection-tree .treeview group > lmvheader > icon {\n  height: 20px;\n  float: left; }\n\n.selection-tree .treenode-container {\n  overflow: hidden; }\n\n.selection-tree .treenode .label-container {\n  pointer-events: none; }\n\n.selection-tree .treenode {\n  pointer-events: none;\n  float: left; }\n\n.selection-tree .treeview lmvheader.component icon {\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACXBIWXMAAAsTAAALEwEAmpwYAAABWWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgpMwidZAAAD0klEQVQ4ETVUS2hjVRg+j/uYtE06UErVJDeZEDptA1XbWimmEsXNIF04kI6I6IwoghRxLQULyigiKMosfCymKjhDUTciFhXjAwqWLpNOJGXSNqGmXUxtpp2b+zp+/2174XDu/zjf+f7H+SXDVywW5ezsLC+VSqpQKGjd3d3a3t6eTzbLeiDf0xOLt9vtBsm5XM6wLEvs7OwECwsLor+/X1QqFRWC5HJFAz5iamoqQkB0YGhoKJ1KJT/AsrHuWVb8ajYbT5CNvgsXsiZ8zxxLjHNCxWLj4+NybW3NHRgY6I5EzOeDQM1LKRJBEKwzprgQcigI/C3P8696XvB1q9U6BAgHQx2sAolwCFTl83m+v7//lGnqnwshXlMq0Dnn1zTNeBlkF33fJ6bTuq4/I6V8IhqNNsfGxuqrq6vu5ct1xglleHg4dXjYnuecXcElHljcME3t01ptc4XsSilgcpVM3veIlMYc7LNQm7jwS9f155vNZkOQY7v932NQ4mYufT+4FYno752CIOTeZDIZ5mJ7+99Vx/HeVYptwJ/jgheFUNOEQXSZpknolIMc2KD9oG17fyHBH0aj2hfIW4t8BgcH47Z99AqYvQExhgvvSMm7NE0LqxsyAlUSdCT3hu+r1/HPAf5Ou+3+mkgknjt3znqh0zn6Bbq3EL7j+96rALwJN911Aw/+7ASI+8dUeavRaHxiGGceR3WuIYQR3PoVbr8O30FU8mMQf7TR2EFB+D7sQsrjPIeh6ToihRbLJPRarVbGNpdKpX5Uyv+GdJxrl+r1+k9wAxnG0AJC0wTOkPWEkYvUExDnIqwieqMH3W647mYJPnuA2cVeKhZzxsTEeAz/zDC0EAJtEe5haIyBH+cBwMJ44/G4WlpaCqLR82fpDGOBBntvpcLYzMxMm4AQOvkz9JUk+aRqnEICqLqYTqf/dhznB/Jl7IjCVciHMAxDlstlx7I6ZiqVeBoNe1FKjQWBG2KEjDzv6A8k8joSfh45+f727drNkZGRh6vV7V2E66EfvWq1upvJJCfK5c4SQv2WfMHqM9flfxIjygmt8NVvbPzzJA7Oo8zTSOYd6BdhunTMSqDc7CWw64X8O1rm7a2t5m/QBTQ9wke7vLxsrqys2ASYzWZjtm0/i556E4dS6BmoBYOMMPwtPN73u7p6FhHmXZoWpmm6eK+epHkCIIfGRywWi6yvr989ODhY6+vr+w7U7yGEh/DM0PXqIyG0uXp982fMKmd0dLQ7k8l0JicnqWphwrEzfjqHiGahkD6dMyyTsfLJ5P3heyJH8qPhRmdOZfr/H6pDy54J8vNgAAAAAElFTkSuQmCC\");\n  position: relative;\n  margin-right: 4px;\n  top: 0px; }\n", ""]);

// exports


/***/ }),

/***/ 1336:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1181);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(37)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(1181, function() {
			var newContent = __webpack_require__(1181);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1351:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SelectionTreeView = __webpack_require__(1520);

var _SelectionTreeView2 = _interopRequireDefault(_SelectionTreeView);

__webpack_require__(1336);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _SelectionTreeView2.default;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1408:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(36)();
// imports


// module
exports.push([module.i, ".selection-window .title {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  float: left; }\n\n.selection-window .title > label {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  white-space: nowrap;\n  font-weight: normal;\n  user-select: none;\n  margin-left: 27px;\n  margin-top: 10px;\n  select: none;\n  width: 144px;\n  float: left; }\n\n.selection-window .content {\n  overflow-y: scroll;\n  overflow-x: hidden;\n  height: 100%; }\n  .selection-window .content .row {\n    padding: 10px;\n    width: 100%;\n    margin: 0; }\n    .selection-window .content .row .label-container {\n      margin: 4px 0 0 20px; }\n  .selection-window .content button.active {\n    border: 2px solid #FF9800; }\n  .selection-window .content button.active > span {\n    color: #FF9800; }\n  .selection-window .content button > span {\n    position: relative;\n    font-size: 16px;\n    color: #9b9b9b; }\n  .selection-window .content button:disabled > span {\n    color: #d0d0d0; }\n  .selection-window .content button:hover:not(:disabled) > span {\n    color: #FF9800; }\n  .selection-window .content button:disabled > span {\n    color: #d0d0d0; }\n  .selection-window .content .select-btn {\n    background: whitesmoke;\n    border-radius: 4px;\n    outline: none;\n    float: left; }\n    .selection-window .content .select-btn span {\n      margin-right: 6px;\n      top: 1px; }\n  .selection-window .content .switch-container {\n    border: 1px solid #9c9c9c;\n    border-radius: 12px;\n    margin: 5px 0 0 6px;\n    float: left; }\n  .selection-window .content input[type=\"checkbox\"].switch + div {\n    width: 34px;\n    height: 16px; }\n  .selection-window .content input[type=\"checkbox\"].switch:checked + div {\n    width: 34px; }\n  .selection-window .content input[type=\"checkbox\"].switch:checked + div > div {\n    -webkit-transform: translate3d(18px, 0, 0);\n            transform: translate3d(18px, 0, 0); }\n  .selection-window .content input[type=\"checkbox\"].switch + div > div {\n    height: 16px;\n    width: 16px;\n    margin: 0; }\n  .selection-window .content .selection-tree-container {\n    height: calc(100% - 55px); }\n\n.selection-window-controls {\n  margin: auto 0 auto calc(100% - 152px);\n  position: relative;\n  float: left; }\n\n.selection-window-controls > button {\n  border: 1px solid #c6c6c6;\n  background-color: #e1e1e1;\n  border-radius: 6px;\n  position: relative;\n  overflow: hidden;\n  outline: none;\n  height: 24px;\n  width: 26px; }\n\n.selection-window-controls > button:hover {\n  border: 1px solid #878787;\n  background-color: #f5f5f5; }\n\n.selection-window-controls > button > label {\n  position: relative;\n  font-size: 20px;\n  color: #f0fcff;\n  top: -8px; }\n\n.selection-window-controls > button > span {\n  pointer-events: none;\n  color: #9b9b9b; }\n", ""]);

// exports


/***/ }),

/***/ 1518:
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

var _SelectionTreeNode = __webpack_require__(1519);

var _SelectionTreeNode2 = _interopRequireDefault(_SelectionTreeNode);

var _TreeView = __webpack_require__(1049);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SelectionTreeDelegate = function (_TreeDelegate) {
  (0, _inherits3.default)(SelectionTreeDelegate, _TreeDelegate);

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////
  function SelectionTreeDelegate() {
    (0, _classCallCheck3.default)(this, SelectionTreeDelegate);
    return (0, _possibleConstructorReturn3.default)(this, (SelectionTreeDelegate.__proto__ || (0, _getPrototypeOf2.default)(SelectionTreeDelegate)).call(this));
  }

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////


  (0, _createClass3.default)(SelectionTreeDelegate, [{
    key: 'createRootNode',
    value: function createRootNode(selection) {

      this.selection = selection || {};

      this.instanceTree = this.selection.model ? selection.model.getData().instanceTree : null;

      var childIds = this.selection.dbIds || [];

      var rootId = this.instanceTree ? this.instanceTree.getRootId() : 'root';

      this.rootNode = new _SelectionTreeNode2.default({
        name: 'Your Selection [' + childIds.length + ' Components]',
        instanceTree: this.instanceTree,
        model: this.selection.model,
        delegate: this,
        parent: null,
        type: 'root',
        group: true,
        id: rootId,
        level: 0,
        childIds: childIds
      });

      return this.rootNode;
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'destroy',
    value: function destroy() {

      this.rootNode.destroy();
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'createTreeNode',
    value: function createTreeNode(node, parentDomElement) {

      var container = document.createElement('div');

      parentDomElement.appendChild(container);

      node.type.split('.').forEach(function (cls) {

        parentDomElement.classList.add(cls);
      });

      parentDomElement.style.width = 'calc(100% - ' + (node.level * 25 + 5) + 'px)';

      parentDomElement.classList.add('click-trigger');

      node.parentDomElement = parentDomElement;

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

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'onTreeNodeClick',
    value: function onTreeNodeClick(tree, node, event) {
      var _this2 = this;

      if (this.nodeClickSelector(event)) {

        clearTimeout(this.clickTimeout);

        this.clickTimeout = setTimeout(function () {

          _this2.emit('node.click', node);
        }, 200);
      }
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'forEachChild',
    value: function forEachChild(node, addChild) {

      node.addChild = addChild;
    }
  }]);
  return SelectionTreeDelegate;
}(_TreeView.TreeDelegate);

exports.default = SelectionTreeDelegate;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "SelectionTreeDelegate.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1519:
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

var _EventsEmitter2 = __webpack_require__(372);

var _EventsEmitter3 = _interopRequireDefault(_EventsEmitter2);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(26);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Label = __webpack_require__(1034);

var _Label2 = _interopRequireDefault(_Label);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

///////////////////////////////////////////////////////////////////////////////
//
//
///////////////////////////////////////////////////////////////////////////////
var SelectionTreeNode = function (_EventsEmitter) {
  (0, _inherits3.default)(SelectionTreeNode, _EventsEmitter);

  /////////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////////
  function SelectionTreeNode(props) {
    (0, _classCallCheck3.default)(this, SelectionTreeNode);

    var _this = (0, _possibleConstructorReturn3.default)(this, (SelectionTreeNode.__proto__ || (0, _getPrototypeOf2.default)(SelectionTreeNode)).call(this));

    _this.onExpand = _this.onExpand.bind(_this);

    _this.on('expand', _this.onExpand);

    _this.instanceTree = props.instanceTree;
    _this.delegate = props.delegate;
    _this.parent = props.parent;
    _this.level = props.level;
    _this.group = props.group;
    _this.model = props.model;
    _this.name = props.name;
    _this.type = props.type;
    _this.id = props.id;
    _this.props = props;

    _this.children = [];
    return _this;
  }

  /////////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////////


  (0, _createClass3.default)(SelectionTreeNode, [{
    key: 'onExpand',
    value: function onExpand() {

      this.off('expand', this.onExpand);

      this.loadChildren();
    }

    /////////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////////

  }, {
    key: 'mount',
    value: function mount(domContainer) {

      domContainer.className = 'treenode-container click-trigger';

      this.domContainer = domContainer;

      this.collapse();

      this.reactNode = _reactDom2.default.render(_react2.default.createElement(ReactTreeNode, {
        className: this.type,
        name: this.name
      }), this.domContainer);
    }

    /////////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////////

  }, {
    key: 'expand',
    value: function expand() {

      var target = this.domContainer.parentElement.parentElement;

      target.classList.remove('collapsed');
      target.classList.add('expanded');

      this.emit('expand');
    }

    /////////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////////

  }, {
    key: 'collapse',
    value: function collapse() {

      var target = this.domContainer.parentElement.parentElement;

      target.classList.remove('expanded');
      target.classList.add('collapsed');
    }

    /////////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////////

  }, {
    key: 'loadChildren',
    value: function loadChildren() {
      var _this2 = this;

      switch (this.type) {

        case 'root':

          this.children = this.props.childIds.map(function (id) {

            var childNode = new SelectionTreeNode({
              name: _this2.instanceTree.getNodeName(id),
              instanceTree: _this2.instanceTree,
              delegate: _this2.delegate,
              level: _this2.level + 1,
              type: 'component',
              model: _this2.model,
              parent: _this2,
              group: true,
              id: id
            });

            _this2.addChild(childNode);

            return childNode;
          });

          break;
      }
    }

    /////////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////////

  }, {
    key: 'destroy',
    value: function destroy() {

      this.children.forEach(function (child) {

        child.destroy();
      });

      _reactDom2.default.unmountComponentAtNode(this.domContainer);

      this.delegate.emit('node.destroy', this);
    }
  }]);
  return SelectionTreeNode;
}(_EventsEmitter3.default);

exports.default = SelectionTreeNode;
var ReactTreeNode = (_temp = _class = function (_React$Component) {
  (0, _inherits3.default)(ReactTreeNode, _React$Component);

  function ReactTreeNode() {
    (0, _classCallCheck3.default)(this, ReactTreeNode);
    return (0, _possibleConstructorReturn3.default)(this, (ReactTreeNode.__proto__ || (0, _getPrototypeOf2.default)(ReactTreeNode)).apply(this, arguments));
  }

  (0, _createClass3.default)(ReactTreeNode, [{
    key: 'render',


    ///////////////////////////////////////////////////////////////////
    //
    //
    ///////////////////////////////////////////////////////////////////


    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////
    value: function render() {

      var classNames = ['treenode'].concat((0, _toConsumableArray3.default)(this.props.className.split(' ')));

      return _react2.default.createElement(
        'div',
        { className: classNames.join(' ') },
        _react2.default.createElement(_Label2.default, { text: this.props.name })
      );
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }]);
  return ReactTreeNode;
}(_react2.default.Component), _class.propTypes = {
  className: _propTypes2.default.string }, _class.defaultProps = {
  className: '' }, _temp);

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "SelectionTreeNode.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1520:
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

var _SelectionTreeDelegate = __webpack_require__(1518);

var _SelectionTreeDelegate2 = _interopRequireDefault(_SelectionTreeDelegate);

var _TreeView = __webpack_require__(1049);

var _reactDom = __webpack_require__(26);

var _reactDom2 = _interopRequireDefault(_reactDom);

__webpack_require__(1336);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SelectionTreeView = function (_React$Component) {
  (0, _inherits3.default)(SelectionTreeView, _React$Component);

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////
  function SelectionTreeView(props) {
    (0, _classCallCheck3.default)(this, SelectionTreeView);

    var _this = (0, _possibleConstructorReturn3.default)(this, (SelectionTreeView.__proto__ || (0, _getPrototypeOf2.default)(SelectionTreeView)).call(this, props));

    _this.delegate = new _SelectionTreeDelegate2.default();

    _this.delegate.on('node.dblClick', function (node) {

      if (props.onNodeDblClicked) {

        props.onNodeDblClicked(node);
      }
    });

    _this.delegate.on('node.click', function (node) {

      if (props.onNodeClicked) {

        props.onNodeClicked(node);
      }
    });

    _this.delegate.on('node.destroy', function (node) {

      _this.tree.destroyNode(node.id);
    });
    return _this;
  }

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////


  (0, _createClass3.default)(SelectionTreeView, [{
    key: 'loadTree',
    value: function loadTree(selection) {

      var rootNode = this.delegate.createRootNode(selection);

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

      this.loadTree(this.props.selection);

      this.guid = this.props.selection ? this.props.selection.guid : null;
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {

      var newGuid = props.selection ? props.selection.guid : null;

      if (newGuid !== this.guid) {

        this.delegate.destroy();

        this.tree.destroy();

        this.loadTree(props.selection);

        this.guid = newGuid;
      }
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

      return _react2.default.createElement('div', { ref: function ref(div) {
          return _this2.treeContainer = div;
        },
        className: 'selection-tree'
      });
    }
  }]);
  return SelectionTreeView;
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


exports.default = SelectionTreeView;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "SelectionTreeView.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1600:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(1828);

__webpack_require__(1745);

exports.default = 'Viewing.Extension.SelectionWindow';

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1742:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var norm = new THREE.Vector3();
var t1 = new THREE.Vector3();
var t2 = new THREE.Vector3();
var depth = 0;

function checkBoxSeparation(phase, minX, minY, minZ, maxX, maxY, maxZ, norm, v1, v2, v3) {

  var minQ = norm.x * (norm.x > 0 ? minX : maxX) + norm.y * (norm.y > 0 ? minY : maxY) + norm.z * (norm.z > 0 ? minZ : maxZ);

  var maxQ = norm.x * (norm.x > 0 ? maxX : minX) + norm.y * (norm.y > 0 ? maxY : minY) + norm.z * (norm.z > 0 ? maxZ : minZ);

  var q1 = norm.x * v1.x + norm.y * v1.y + norm.z * v1.z;
  var q2 = norm.x * v2.x + norm.y * v2.y + norm.z * v2.z;
  var q3 = norm.x * v3.x + norm.y * v3.y + norm.z * v3.z;

  var vMinQ = Math.min(q1, q2, q3);
  var vMaxQ = Math.max(q1, q2, q3);

  if (phase === 0) {

    // just check the collision
    return minQ > vMaxQ || maxQ < vMinQ;
  } else {

    // compute penetration depth
    var sq = 1 / norm.length();

    if (!isFinite(sq)) {

      return;
    }

    depth = Math.min(depth, (vMaxQ - minQ) * sq, (maxQ - vMinQ) * sq);
  }
}

function geometryIntersectsBox3_PassThree(phase, minX, minY, minZ, maxX, maxY, maxZ, axis, v1, v2, v3, t1) {

  t1.subVectors(v1, v2);

  switch (axis) {

    case 0:
      t1.set(0, -t1.z, t1.y);
      break;

    case 1:
      t1.set(-t1.z, 0, t1.x);
      break;

    case 2:
      t1.set(-t1.y, t1.x, 0);
      break;
  }

  return checkBoxSeparation(phase, minX, minY, minZ, maxX, maxY, maxZ, t1, v1, v2, v3);
}

function geometryIntersectsBox3(geometry, box) {

  // Tomas Akenine-Möller. 2005.
  // Fast 3D triangle-box overlap testing.
  // http://fileadmin.cs.lth.se/cs/Personal/Tomas_Akenine-Moller/code/tribox_tam.pdf

  var faces = geometry.faces,
      vertices = geometry.vertices;


  var minX = box.min.x;
  var minY = box.min.y;
  var minZ = box.min.z;

  var maxX = box.max.x;
  var maxY = box.max.y;
  var maxZ = box.max.z;

  var results = [];

  for (var fI = 0; fI < faces.length; ++fI) {

    var face = faces[fI];

    var v1 = vertices[face.a];
    var v2 = vertices[face.b];
    var v3 = vertices[face.c];

    var vMinX = Math.min(v1.x, v2.x, v3.x);
    var vMinY = Math.min(v1.y, v2.y, v3.y);
    var vMinZ = Math.min(v1.z, v2.z, v3.z);

    var vMaxX = Math.max(v1.x, v2.x, v3.x);
    var vMaxY = Math.max(v1.y, v2.y, v3.y);
    var vMaxZ = Math.max(v1.z, v2.z, v3.z);

    // bounding AABB cull
    if (vMinX > maxX || vMinY > maxY || vMinZ > maxZ || vMaxX < minX || vMaxY < minY || vMaxZ < minZ) {
      // never be intersecting
      continue;
    }

    t1.subVectors(v2, v1);
    t2.subVectors(v3, v1);

    norm.crossVectors(t1, t2);

    if (checkBoxSeparation(0, minX, minY, minZ, maxX, maxY, maxZ, norm, v1, v2, v3) || geometryIntersectsBox3_PassThree(0, minX, minY, minZ, maxX, maxY, maxZ, 0, v1, v2, v3, t1) || geometryIntersectsBox3_PassThree(0, minX, minY, minZ, maxX, maxY, maxZ, 0, v1, v3, v2, t1) || geometryIntersectsBox3_PassThree(0, minX, minY, minZ, maxX, maxY, maxZ, 0, v2, v3, v1, t1) || geometryIntersectsBox3_PassThree(0, minX, minY, minZ, maxX, maxY, maxZ, 1, v1, v2, v3, t1) || geometryIntersectsBox3_PassThree(0, minX, minY, minZ, maxX, maxY, maxZ, 1, v1, v3, v2, t1) || geometryIntersectsBox3_PassThree(0, minX, minY, minZ, maxX, maxY, maxZ, 1, v2, v3, v1, t1) || geometryIntersectsBox3_PassThree(0, minX, minY, minZ, maxX, maxY, maxZ, 2, v1, v2, v3, t1) || geometryIntersectsBox3_PassThree(0, minX, minY, minZ, maxX, maxY, maxZ, 2, v1, v3, v2, t1) || geometryIntersectsBox3_PassThree(0, minX, minY, minZ, maxX, maxY, maxZ, 2, v2, v3, v1, t1)) {

      // never be intersecting
      continue;
    }

    // compute depth
    depth = Infinity;

    checkBoxSeparation(1, minX, minY, minZ, maxX, maxY, maxZ, norm, v1, v2, v3);

    geometryIntersectsBox3_PassThree(1, minX, minY, minZ, maxX, maxY, maxZ, 0, v1, v2, v3, t1);
    geometryIntersectsBox3_PassThree(1, minX, minY, minZ, maxX, maxY, maxZ, 0, v1, v3, v2, t1);
    geometryIntersectsBox3_PassThree(1, minX, minY, minZ, maxX, maxY, maxZ, 0, v2, v3, v1, t1);
    geometryIntersectsBox3_PassThree(1, minX, minY, minZ, maxX, maxY, maxZ, 1, v1, v2, v3, t1);
    geometryIntersectsBox3_PassThree(1, minX, minY, minZ, maxX, maxY, maxZ, 1, v1, v3, v2, t1);
    geometryIntersectsBox3_PassThree(1, minX, minY, minZ, maxX, maxY, maxZ, 1, v2, v3, v1, t1);
    geometryIntersectsBox3_PassThree(1, minX, minY, minZ, maxX, maxY, maxZ, 2, v1, v2, v3, t1);
    geometryIntersectsBox3_PassThree(1, minX, minY, minZ, maxX, maxY, maxZ, 2, v1, v3, v2, t1);
    geometryIntersectsBox3_PassThree(1, minX, minY, minZ, maxX, maxY, maxZ, 2, v2, v3, v1, t1);

    // triangle touches the box
    results.push({
      faceIndex: fI,
      depth: depth
    });
  }

  return results;
}

exports.default = geometryIntersectsBox3;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "GeometryIntersectsBox3.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1743:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _toConsumableArray2 = __webpack_require__(371);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _getIterator2 = __webpack_require__(1088);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _regenerator = __webpack_require__(216);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(215);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(18);

var _createClass3 = _interopRequireDefault(_createClass2);

var _GeometryIntersectsBox = __webpack_require__(1742);

var _GeometryIntersectsBox2 = _interopRequireDefault(_GeometryIntersectsBox);

var _Viewer = __webpack_require__(1021);

var _Viewer2 = _interopRequireDefault(_Viewer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

///////////////////////////////////////////////////////////
// SelectSet util for Selection Window in Forge Viewer
// By Philippe Leefsma, September 2017
//
///////////////////////////////////////////////////////////
var SelectSet = function () {

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////
    function SelectSet(viewer) {
        (0, _classCallCheck3.default)(this, SelectSet);


        this.viewer = viewer;
    }

    /////////////////////////////////////////////////////////
    // Set model: required to compute the bounding boxes
    //
    /////////////////////////////////////////////////////////


    (0, _createClass3.default)(SelectSet, [{
        key: 'setModel',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(model) {
                var _this = this;

                var instanceTree, rootId, bbox, leafIds;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:

                                this.model = model;

                                instanceTree = model.getData().instanceTree;
                                rootId = instanceTree.getRootId();
                                _context.next = 5;
                                return this.getComponentBoundingBox(model, rootId);

                            case 5:
                                bbox = _context.sent;


                                this.boundingSphere = bbox.getBoundingSphere();

                                _context.next = 9;
                                return _Viewer2.default.getLeafNodes(model);

                            case 9:
                                leafIds = _context.sent;


                                this.boundingBoxInfo = leafIds.map(function (dbId) {

                                    var bbox = _this.getLeafComponentBoundingBox(model, dbId);

                                    return {
                                        bbox: bbox,
                                        dbId: dbId
                                    };
                                });

                            case 11:
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
        // Returns bounding box as it appears in the viewer
        // (transformations could be applied)
        //
        /////////////////////////////////////////////////////////

    }, {
        key: 'getModifiedWorldBoundingBox',
        value: function getModifiedWorldBoundingBox(fragIds, fragList) {

            var fragbBox = new THREE.Box3();
            var nodebBox = new THREE.Box3();

            fragIds.forEach(function (fragId) {

                fragList.getWorldBounds(fragId, fragbBox);

                nodebBox.union(fragbBox);
            });

            return nodebBox;
        }

        /////////////////////////////////////////////////////////
        // Returns bounding box for fragment list
        //
        /////////////////////////////////////////////////////////

    }, {
        key: 'getComponentBoundingBox',
        value: function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(model, dbId) {
                var fragIds, fragList;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return _Viewer2.default.getFragIds(model, dbId);

                            case 2:
                                fragIds = _context2.sent;
                                fragList = model.getFragmentList();
                                return _context2.abrupt('return', this.getModifiedWorldBoundingBox(fragIds, fragList));

                            case 5:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function getComponentBoundingBox(_x2, _x3) {
                return _ref2.apply(this, arguments);
            }

            return getComponentBoundingBox;
        }()
    }, {
        key: 'getLeafComponentBoundingBox',
        value: function getLeafComponentBoundingBox(model, dbId) {

            var fragIds = _Viewer2.default.getLeafFragIds(model, dbId);

            var fragList = model.getFragmentList();

            return this.getModifiedWorldBoundingBox(fragIds, fragList);
        }

        /////////////////////////////////////////////////////////
        // Creates Raycaster object from the mouse pointer
        //
        /////////////////////////////////////////////////////////

    }, {
        key: 'pointerToRay',
        value: function pointerToRay(pointer) {

            var camera = this.viewer.navigation.getCamera();
            var pointerVector = new THREE.Vector3();
            var rayCaster = new THREE.Raycaster();
            var pointerDir = new THREE.Vector3();
            var domElement = this.viewer.canvas;

            var rect = domElement.getBoundingClientRect();

            var x = (pointer.clientX - rect.left) / rect.width * 2 - 1;
            var y = -((pointer.clientY - rect.top) / rect.height) * 2 + 1;

            if (camera.isPerspective) {

                pointerVector.set(x, y, 0.5);

                pointerVector.unproject(camera);

                rayCaster.set(camera.position, pointerVector.sub(camera.position).normalize());
            } else {

                pointerVector.set(x, y, -15);

                pointerVector.unproject(camera);

                pointerDir.set(0, 0, -1);

                rayCaster.set(pointerVector, pointerDir.transformDirection(camera.matrixWorld));
            }

            return rayCaster.ray;
        }

        /////////////////////////////////////////////////////////
        // Returns true if the box is contained inside the
        // closed volume defined the the input planes
        //
        /////////////////////////////////////////////////////////

    }, {
        key: 'containsBox',
        value: function containsBox(planes, box) {
            var min = box.min,
                max = box.max;


            var vertices = [new THREE.Vector3(min.x, min.y, min.z), new THREE.Vector3(min.x, min.y, max.z), new THREE.Vector3(min.x, max.y, max.z), new THREE.Vector3(max.x, max.y, max.z), new THREE.Vector3(max.x, max.y, min.z), new THREE.Vector3(max.x, min.y, min.z), new THREE.Vector3(min.x, max.y, min.z), new THREE.Vector3(max.x, min.y, max.z)];

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = (0, _getIterator3.default)(vertices), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var vertex = _step.value;
                    var _iteratorNormalCompletion2 = true;
                    var _didIteratorError2 = false;
                    var _iteratorError2 = undefined;

                    try {

                        for (var _iterator2 = (0, _getIterator3.default)(planes), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                            var plane = _step2.value;


                            if (plane.distanceToPoint(vertex) < 0) {

                                return false;
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

            return true;
        }

        /////////////////////////////////////////////////////////
        // Returns the oriented camera plane
        //
        /////////////////////////////////////////////////////////

    }, {
        key: 'getCameraPlane',
        value: function getCameraPlane() {

            var camera = this.viewer.navigation.getCamera();

            var normal = camera.target.clone().sub(camera.position).normalize();

            var pos = camera.position;

            var dist = -normal.x * pos.x - normal.y * pos.y - normal.z * pos.z;

            return new THREE.Plane(normal, dist);
        }

        /////////////////////////////////////////////////////////
        // Creates pyramid geometry to perform tri-box
        // intersection analysis
        //
        /////////////////////////////////////////////////////////

    }, {
        key: 'createPyramidGeometry',
        value: function createPyramidGeometry(vertices) {

            var geometry = new THREE.Geometry();

            geometry.vertices = vertices;

            geometry.faces = [new THREE.Face3(0, 1, 2), new THREE.Face3(0, 2, 3), new THREE.Face3(1, 0, 4), new THREE.Face3(2, 1, 4), new THREE.Face3(3, 2, 4), new THREE.Face3(0, 3, 4)];

            return geometry;
        }

        /////////////////////////////////////////////////////////
        // Determine if the bounding boxes are
        // inside, outside or intersect with the selection window
        //
        /////////////////////////////////////////////////////////

    }, {
        key: 'filterBoundingBoxes',
        value: function filterBoundingBoxes(planes, vertices, partialSelect) {

            var geometry = this.createPyramidGeometry(vertices);

            var intersect = [];
            var outside = [];
            var inside = [];

            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
                for (var _iterator3 = (0, _getIterator3.default)(this.boundingBoxInfo), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var bboxInfo = _step3.value;


                    // if bounding box inside, then we can be sure
                    // the mesh is inside too

                    if (this.containsBox(planes, bboxInfo.bbox)) {

                        inside.push(bboxInfo);
                    } else if (partialSelect) {

                        // otherwise need a more precise tri-box
                        // analysis to determine if the bbox intersect
                        // the pyramid geometry

                        var intersects = (0, _GeometryIntersectsBox2.default)(geometry, bboxInfo.bbox);

                        intersects.length ? intersect.push(bboxInfo) : outside.push(bboxInfo);
                    } else {

                        outside.push(bboxInfo);
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

            return {
                intersect: intersect,
                outside: outside,
                inside: inside
            };
        }

        /////////////////////////////////////////////////////////
        // Runs the main logic of the select set:
        // computes a pyramid shape from the selection window
        // corners and determines enclosed meshes from the model
        //
        /////////////////////////////////////////////////////////

    }, {
        key: 'compute',
        value: function compute(pointer1, pointer2, partialSelect) {

            // build 4 rays to project the 4 corners
            // of the selection window

            var xMin = Math.min(pointer1.clientX, pointer2.clientX);
            var xMax = Math.max(pointer1.clientX, pointer2.clientX);

            var yMin = Math.min(pointer1.clientY, pointer2.clientY);
            var yMax = Math.max(pointer1.clientY, pointer2.clientY);

            var ray1 = this.pointerToRay({
                clientX: xMin,
                clientY: yMin
            });

            var ray2 = this.pointerToRay({
                clientX: xMax,
                clientY: yMin
            });

            var ray3 = this.pointerToRay({
                clientX: xMax,
                clientY: yMax
            });

            var ray4 = this.pointerToRay({
                clientX: xMin,
                clientY: yMax
            });

            // first we compute the top of the pyramid
            var top = new THREE.Vector3(0, 0, 0);

            top.add(ray1.origin);
            top.add(ray2.origin);
            top.add(ray3.origin);
            top.add(ray4.origin);

            top.multiplyScalar(0.25);

            // we use the bounding sphere to determine
            // the height of the pyramid
            var _boundingSphere = this.boundingSphere,
                center = _boundingSphere.center,
                radius = _boundingSphere.radius;

            // compute distance from pyramid top to center
            // of bounding sphere

            var dist = new THREE.Vector3(top.x - center.x, top.y - center.y, top.z - center.z);

            // compute height of the pyramid:
            // to make sure we go far enough,
            // we add the radius of the bounding sphere

            var height = radius + dist.length();

            // compute the length of the side edges

            var angle = ray1.direction.angleTo(ray2.direction);

            var length = height / Math.cos(angle * 0.5);

            // compute bottom vertices

            var v1 = new THREE.Vector3(ray1.origin.x + ray1.direction.x * length, ray1.origin.y + ray1.direction.y * length, ray1.origin.z + ray1.direction.z * length);

            var v2 = new THREE.Vector3(ray2.origin.x + ray2.direction.x * length, ray2.origin.y + ray2.direction.y * length, ray2.origin.z + ray2.direction.z * length);

            var v3 = new THREE.Vector3(ray3.origin.x + ray3.direction.x * length, ray3.origin.y + ray3.direction.y * length, ray3.origin.z + ray3.direction.z * length);

            var v4 = new THREE.Vector3(ray4.origin.x + ray4.direction.x * length, ray4.origin.y + ray4.direction.y * length, ray4.origin.z + ray4.direction.z * length);

            // create planes

            var plane1 = new THREE.Plane();
            var plane2 = new THREE.Plane();
            var plane3 = new THREE.Plane();
            var plane4 = new THREE.Plane();
            var plane5 = new THREE.Plane();

            plane1.setFromCoplanarPoints(top, v1, v2);
            plane2.setFromCoplanarPoints(top, v2, v3);
            plane3.setFromCoplanarPoints(top, v3, v4);
            plane4.setFromCoplanarPoints(top, v4, v1);
            plane5.setFromCoplanarPoints(v3, v2, v1);

            var planes = [plane1, plane2, plane3, plane4, plane5, this.getCameraPlane()];

            var vertices = [v1, v2, v3, v4, top];

            // filter all bounding boxes to determine
            // if inside, outside or intersect

            var result = this.filterBoundingBoxes(planes, vertices, partialSelect);

            // all inside bboxes need to be part of the selection

            var dbIdsInside = result.inside.map(function (bboxInfo) {

                return bboxInfo.dbId;
            });

            // if partialSelect = true
            // we need to return the intersect bboxes

            if (partialSelect) {

                var dbIdsIntersect = result.intersect.map(function (bboxInfo) {

                    return bboxInfo.dbId;
                });

                // At this point we could perform a finer analysis
                // to determine if the mesh vertices are inside
                // or outside the selection window but it would
                // be a much more expensive computation

                return [].concat((0, _toConsumableArray3.default)(dbIdsInside), (0, _toConsumableArray3.default)(dbIdsIntersect));
            }

            return dbIdsInside;
        }
    }]);
    return SelectSet;
}();

exports.default = SelectSet;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Viewing.Extension.SelectionWindow.SelectSet.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1744:
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

var _ViewingExtensionSelectionWindow = __webpack_require__(1743);

var _ViewingExtensionSelectionWindow2 = _interopRequireDefault(_ViewingExtensionSelectionWindow);

var _EventsEmitter2 = __webpack_require__(372);

var _EventsEmitter3 = _interopRequireDefault(_EventsEmitter2);

var _Viewer = __webpack_require__(1021);

var _Viewer2 = _interopRequireDefault(_Viewer);

var _cursors = __webpack_require__(1746);

var _cursors2 = _interopRequireDefault(_cursors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _CROSS_MAX_WIDTH = 20;

var SelectionWindowTool = function (_EventsEmitter) {
  (0, _inherits3.default)(SelectionWindowTool, _EventsEmitter);

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////
  function SelectionWindowTool(viewer) {
    (0, _classCallCheck3.default)(this, SelectionWindowTool);

    var _this = (0, _possibleConstructorReturn3.default)(this, (SelectionWindowTool.__proto__ || (0, _getPrototypeOf2.default)(SelectionWindowTool)).call(this));

    _this.onResize = _this.onResize.bind(_this);

    _this.selectSet = new _ViewingExtensionSelectionWindow2.default(viewer);

    _this.partialSelect = false;
    _this.materialLine = null;
    _this.isDragging = false;
    _this.crossGeomX = null;
    _this.crossGeomY = null;
    _this.isActive = false;
    _this.rectGroup = null;
    _this.lineGeom = null;
    _this.viewer = viewer;
    return _this;
  }

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////


  (0, _createClass3.default)(SelectionWindowTool, [{
    key: 'getNames',
    value: function getNames() {

      return ["selectionWindowTool"];
    }
  }, {
    key: 'getName',
    value: function getName() {

      return "selectionWindowTool";
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'onResize',
    value: function onResize() {

      var overlay = this.viewer.impl.overlayScenes['selectionWindowOverlay'];

      if (overlay) {

        var canvas = this.viewer.canvas;

        var camera = new THREE.OrthographicCamera(0, canvas.clientWidth, 0, canvas.clientHeight, 1, 1000);

        overlay.camera = camera;
      }

      this.rectGroup = null;
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'setModel',
    value: function setModel(model) {

      if (this.isActive) {

        this.model = model;

        this.selectSet.setModel(model);
      }
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'setPartialSelect',
    value: function setPartialSelect(partialSelect) {

      this.partialSelect = partialSelect;
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'activate',
    value: function activate() {

      if (!this.isActive) {

        this.viewer.clearSelection();

        this.model = this.viewer.activeModel || this.viewer.model;

        this.selectSet.setModel(this.model);

        this.materialLine = new THREE.LineBasicMaterial({
          color: new THREE.Color(0x0000FF),
          linewidth: 0.5,
          opacity: .6
        });

        this.mouseStart = new THREE.Vector3(0, 0, -10);

        this.mouseEnd = new THREE.Vector3(0, 0, -10);

        var canvas = this.viewer.canvas;

        var camera = new THREE.OrthographicCamera(0, canvas.clientWidth, 0, canvas.clientHeight, 1, 1000);

        this.viewer.impl.createOverlayScene('selectionWindowOverlay', this.materialLine, this.materialLine, camera);

        this.viewer.impl.api.addEventListener(Autodesk.Viewing.VIEWER_RESIZE_EVENT, this.onResize);

        this.isActive = true;

        this.emit('activate');
      }
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'deactivate',
    value: function deactivate() {

      if (this.isActive) {

        this.viewer.impl.removeOverlayScene('selectionWindowOverlay');

        this.mouseStart.set(0, 0, -10);
        this.mouseEnd.set(0, 0, -10);

        this.isDragging = false;
        this.isActive = false;
        this.rectGroup = null;

        this.viewer.impl.api.removeEventListener(Autodesk.Viewing.VIEWER_RESIZE_EVENT, this.onResize);

        this.viewer.toolController.deactivateTool(this.getName());

        this.emit('deactivate');
      }
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'getCursor',
    value: function getCursor() {

      var tool = this.viewer.toolController.getTool("dolly");

      var mode = tool.getTriggeredMode();

      switch (mode) {

        case "dolly":
          return _cursors2.default.dolly;

        case "pan":
          return _cursors2.default.pan;
      }

      return _cursors2.default.window;
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'handleGesture',
    value: function handleGesture(event) {

      return true;
    }
  }, {
    key: 'handleSingleClick',
    value: function handleSingleClick(event, button) {

      return true;
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'handleButtonDown',
    value: function handleButtonDown(event, button) {

      //left button down
      if (button === 0) {

        this.startDrag(event);
        return true;
      }

      return false;
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'handleMouseMove',
    value: function handleMouseMove(event) {

      if (this.lineGeom && this.isDragging) {

        this.pointerEnd = event.pointers ? event.pointers[0] : event;

        this.mouseEnd.x = event.canvasX;
        this.mouseEnd.y = event.canvasY;

        return true;
      }

      return false;
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'handleButtonUp',
    value: function handleButtonUp(event, button) {

      if (button === 0) {

        this.endDrag();
        return true;
      }

      return false;
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'handleKeyDown',
    value: function handleKeyDown(event, keyCode) {

      if (keyCode === 27) {

        this.deactivate();
      }

      return false;
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'startDrag',
    value: function startDrag(event) {

      if (this.isDragging === false) {

        this.pointerStart = event.pointers ? event.pointers[0] : event;

        // begin dragging
        this.isDragging = true;

        this.mouseStart.x = event.canvasX;
        this.mouseStart.y = event.canvasY;

        this.mouseEnd.x = event.canvasX;
        this.mouseEnd.y = event.canvasY;

        if (this.rectGroup === null) {

          this.lineGeom = new THREE.Geometry();

          // rectangle of zoom window
          this.lineGeom.vertices.push(this.mouseStart.clone(), this.mouseStart.clone(), this.mouseStart.clone(), this.mouseStart.clone(), this.mouseStart.clone());

          // cross for identify zoom window center.
          this.crossGeomX = new THREE.Geometry();

          this.crossGeomX.vertices.push(this.mouseStart.clone(), this.mouseStart.clone());

          this.crossGeomY = new THREE.Geometry();

          this.crossGeomY.vertices.push(this.mouseStart.clone(), this.mouseStart.clone());

          // add geom to group
          var line_mesh = new THREE.Line(this.lineGeom, this.materialLine, THREE.LineStrip);

          var line_cross_x = new THREE.Line(this.crossGeomX, this.materialLine, THREE.LineStrip);

          var line_cross_y = new THREE.Line(this.crossGeomY, this.materialLine, THREE.LineStrip);

          this.rectGroup = new THREE.Group();

          this.rectGroup.add(line_mesh);
          this.rectGroup.add(line_cross_x);
          this.rectGroup.add(line_cross_y);
        } else {

          this.lineGeom.vertices[0] = this.mouseStart.clone();
          this.lineGeom.vertices[1] = this.mouseStart.clone();
          this.lineGeom.vertices[2] = this.mouseStart.clone();
          this.lineGeom.vertices[3] = this.mouseStart.clone();
          this.lineGeom.vertices[4] = this.mouseStart.clone();

          this.crossGeomX.vertices[0] = this.mouseStart.clone();
          this.crossGeomX.vertices[1] = this.mouseStart.clone();
          this.crossGeomY.vertices[0] = this.mouseStart.clone();
          this.crossGeomY.vertices[1] = this.mouseStart.clone();

          this.crossGeomX.verticesNeedUpdate = true;
          this.crossGeomY.verticesNeedUpdate = true;
          this.lineGeom.verticesNeedUpdate = true;
        }

        this.viewer.impl.addOverlay("selectionWindowOverlay", this.rectGroup);
      }
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'endDrag',
    value: function endDrag() {

      if (this.isDragging === true) {

        this.viewer.impl.removeOverlay("selectionWindowOverlay", this.rectGroup);

        this.isDragging = false;
      }
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'update',
    value: function update() {

      if (!this.isActive) return;

      if (this.lineGeom && this.isDragging) {

        // draw rectangle
        this.lineGeom.vertices[1].x = this.mouseStart.x;
        this.lineGeom.vertices[1].y = this.mouseEnd.y;
        this.lineGeom.vertices[2] = this.mouseEnd.clone();
        this.lineGeom.vertices[3].x = this.mouseEnd.x;
        this.lineGeom.vertices[3].y = this.mouseStart.y;
        this.lineGeom.vertices[4] = this.lineGeom.vertices[0];

        // draw cross
        var width = Math.abs(this.mouseEnd.x - this.mouseStart.x);
        var height = Math.abs(this.mouseEnd.y - this.mouseStart.y);
        var length = width > height ? height : width;

        if (length > _CROSS_MAX_WIDTH) {
          length = _CROSS_MAX_WIDTH;
        }

        var half_length = length * 0.5;

        var cross_center = [(this.mouseEnd.x + this.mouseStart.x) * 0.5, (this.mouseEnd.y + this.mouseStart.y) * 0.5];

        this.crossGeomX.vertices[0].x = cross_center[0] - half_length;
        this.crossGeomX.vertices[0].y = cross_center[1];
        this.crossGeomX.vertices[1].x = cross_center[0] + half_length;
        this.crossGeomX.vertices[1].y = cross_center[1];

        this.crossGeomY.vertices[0].x = cross_center[0];
        this.crossGeomY.vertices[0].y = cross_center[1] - half_length;
        this.crossGeomY.vertices[1].x = cross_center[0];
        this.crossGeomY.vertices[1].y = cross_center[1] + half_length;

        this.crossGeomX.verticesNeedUpdate = true;
        this.crossGeomY.verticesNeedUpdate = true;
        this.lineGeom.verticesNeedUpdate = true;

        // only redraw overlay
        this.viewer.impl.invalidate(false, false, true);
      } else {

        return this.select();
      }

      return false;
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'select',
    value: function select() {

      var rectMinX = this.mouseStart.x;
      var rectMinY = this.mouseStart.y;

      var rectMaxX = this.mouseEnd.x;
      var rectMaxY = this.mouseEnd.y;

      var rectHeight = Math.abs(rectMaxY - rectMinY);
      var rectWidth = Math.abs(rectMaxX - rectMinX);

      if (rectWidth === 0 || rectHeight === 0) {

        return false;
      }

      var dbIds = this.selectSet.compute(this.pointerStart, this.pointerEnd, this.partialSelect);

      this.emit('selection', {
        model: this.model,
        guid: this.guid(),
        dbIds: dbIds
      });

      this.deactivate();

      return true;
    }
  }]);
  return SelectionWindowTool;
}(_EventsEmitter3.default);

exports.default = SelectionWindowTool;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Viewing.Extension.SelectionWindow.Tool.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1745:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _ViewingExtensionSelectionWindow = __webpack_require__(1744);

var _ViewingExtensionSelectionWindow2 = _interopRequireDefault(_ViewingExtensionSelectionWindow);

var _Viewer = __webpack_require__(1025);

var _Viewer2 = _interopRequireDefault(_Viewer);

var _SelectionTreeView = __webpack_require__(1351);

var _SelectionTreeView2 = _interopRequireDefault(_SelectionTreeView);

var _WidgetContainer = __webpack_require__(1027);

var _WidgetContainer2 = _interopRequireDefault(_WidgetContainer);

var _Loader = __webpack_require__(1046);

var _reactDom = __webpack_require__(26);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Switch = __webpack_require__(1048);

var _Switch2 = _interopRequireDefault(_Switch);

var _Label = __webpack_require__(1034);

var _Label2 = _interopRequireDefault(_Label);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SelectionWindowExtension = function (_MultiModelExtensionB) {
  (0, _inherits3.default)(SelectionWindowExtension, _MultiModelExtensionB);

  /////////////////////////////////////////////////////////////////
  // Class constructor
  //
  /////////////////////////////////////////////////////////////////
  function SelectionWindowExtension(viewer, options) {
    (0, _classCallCheck3.default)(this, SelectionWindowExtension);

    var _this = (0, _possibleConstructorReturn3.default)(this, (SelectionWindowExtension.__proto__ || (0, _getPrototypeOf2.default)(SelectionWindowExtension)).call(this, viewer, options));

    _this.setPartialSelect = _this.setPartialSelect.bind(_this);
    _this.onNodeDblClicked = _this.onNodeDblClicked.bind(_this);
    _this.onNodeClicked = _this.onNodeClicked.bind(_this);
    _this.renderTitle = _this.renderTitle.bind(_this);

    _this.react = options.react;
    return _this;
  }

  /////////////////////////////////////////////////////////
  // Load callback
  //
  /////////////////////////////////////////////////////////


  (0, _createClass3.default)(SelectionWindowExtension, [{
    key: 'load',
    value: function load() {
      var _this2 = this;

      this.react.setState({

        showLoader: true,
        selection: null,
        active: false

      }).then(function () {

        _this2.react.pushRenderExtension(_this2);
      });

      console.log('Viewing.Extension.SelectionWindow loaded');

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

      console.log('Viewing.Extension.SelectionWindow unloaded');

      this.selectionWindowTool.off();

      (0, _get3.default)(SelectionWindowExtension.prototype.__proto__ || (0, _getPrototypeOf2.default)(SelectionWindowExtension.prototype), 'unload', this).call(this);

      return true;
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'onModelRootLoaded',
    value: function onModelRootLoaded() {
      var _this3 = this;

      this.selectionWindowTool = new _ViewingExtensionSelectionWindow2.default(this.viewer);

      this.selectionWindowTool.on('deactivate', function () {

        _this3.react.setState({ active: false });
      });

      this.selectionWindowTool.on('activate', function () {

        _this3.react.setState({ active: true });
      });

      this.selectionWindowTool.on('selection', function (selection) {

        _this3.viewer.impl.selector.setSelection(selection.dbIds, selection.model);

        _this3.react.setState({ selection: selection });
      });

      this.viewer.toolController.registerTool(this.selectionWindowTool);

      this.react.setState({
        showLoader: false
      });
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'onModelActivated',
    value: function onModelActivated(event) {

      this.selectionWindowTool.setModel(event.model);
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'setPartialSelect',
    value: function setPartialSelect(partialSelect) {

      this.selectionWindowTool.setPartialSelect(partialSelect);
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'startSelection',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.react.setState({ selection: null });

              case 2:

                this.viewer.toolController.activateTool(this.selectionWindowTool.getName());

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function startSelection() {
        return _ref.apply(this, arguments);
      }

      return startSelection;
    }()

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'setDocking',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(docked) {
        var id;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                id = SelectionWindowExtension.ExtensionId;

                if (!docked) {
                  _context2.next = 7;
                  break;
                }

                _context2.next = 4;
                return this.react.popRenderExtension(id);

              case 4:

                this.react.pushViewerPanel(this, {
                  height: 250,
                  width: 350
                });

                _context2.next = 10;
                break;

              case 7:
                _context2.next = 9;
                return this.react.popViewerPanel(id);

              case 9:

                this.react.pushRenderExtension(this);

              case 10:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function setDocking(_x) {
        return _ref2.apply(this, arguments);
      }

      return setDocking;
    }()

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'onNodeClicked',
    value: function onNodeClicked(node) {

      var model = node.model;

      if (model) {

        switch (node.type) {

          case 'component':
            this.viewer.impl.selector.setSelection([node.id], model);
            break;

          case 'root':
            this.viewer.impl.selector.setSelection(node.props.childIds, model);
            break;
        }
      }
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'onNodeDblClicked',
    value: function onNodeDblClicked(node) {

      var model = node.model;

      if (model) {

        switch (node.type) {

          case 'component':

            model.visibilityManager.isolate(node.id);

            break;

          case 'root':

            model.visibilityManager.isolate(node.props.childIds);

            this.viewer.fitToView(node.props.childIds, model);

            break;
        }
      }
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'renderTitle',
    value: function renderTitle(docked) {
      var _this4 = this;

      var spanClass = docked ? 'fa fa-chain-broken' : 'fa fa-chain';

      return _react2.default.createElement(
        'div',
        { className: 'title' },
        _react2.default.createElement(
          'label',
          null,
          'Selection Window'
        ),
        _react2.default.createElement(
          'div',
          { className: 'selection-window-controls' },
          _react2.default.createElement(
            'button',
            { onClick: function onClick() {
                return _this4.setDocking(docked);
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
    key: 'renderContent',
    value: function renderContent() {
      var _this5 = this;

      var _react$getState = this.react.getState(),
          active = _react$getState.active,
          showLoader = _react$getState.showLoader,
          selection = _react$getState.selection;

      return _react2.default.createElement(
        'div',
        { className: 'content' },
        _react2.default.createElement(_Loader.ReactLoader, { show: showLoader }),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'button',
            { onClick: function onClick() {
                return _this5.startSelection();
              },
              className: 'select-btn ' + (active ? 'active' : '') },
            _react2.default.createElement('span', { className: 'fa fa-object-group' }),
            'Select ...'
          ),
          _react2.default.createElement(_Label2.default, { text: 'Partial Selection: ' }),
          _react2.default.createElement(_Switch2.default, { onChange: this.setPartialSelect,
            checked: false
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'selection-tree-container' },
          _react2.default.createElement(_SelectionTreeView2.default, {
            onNodeDblClicked: this.onNodeDblClicked,
            onNodeClicked: this.onNodeClicked,
            selection: selection })
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
      var _this6 = this;

      return _react2.default.createElement(
        _WidgetContainer2.default,
        {
          renderTitle: function renderTitle() {
            return _this6.renderTitle(opts.docked);
          },
          showTitle: opts.showTitle,
          className: this.className },
        this.renderContent()
      );
    }
  }, {
    key: 'className',
    get: function get() {

      return 'selection-window';
    }

    /////////////////////////////////////////////////////////
    // Extension Id
    //
    /////////////////////////////////////////////////////////

  }], [{
    key: 'ExtensionId',
    get: function get() {

      return 'Viewing.Extension.SelectionWindow';
    }
  }]);
  return SelectionWindowExtension;
}(_Viewer2.default); /////////////////////////////////////////////////////////////////
// SelectionWindow Viewer Extension
// By Philippe Leefsma, Autodesk Inc, August 2017
//
/////////////////////////////////////////////////////////////////


Autodesk.Viewing.theExtensionManager.registerExtension(SelectionWindowExtension.ExtensionId, SelectionWindowExtension);

exports.default = 'Viewing.Extension.SelectionWindow';

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Viewing.Extension.SelectionWindow.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1746:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {

  window: "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAADWSURBVEiJ1ZVNEsIwCEYfTg/UjTPuemcvojfCRRMlNKGdKguZyaLkK4/8EERVybQJQERCUU3C63p+n/Bk9QHDRtbIX2GqKh6woRfxLdL0/M1KzYRaA+7AXDW9wN5fvrXEWud6AOABLD7QwREDgCdw7WV6ZjSAsi0Lzn4JmEcHeHbYWxQXw3FTEWmvaWY1X9Iie4CIKHE1fwfIsnSAZD/X/79FGbdISyzA9QMDG3axTTTVwx3NaNbm5B2dRHY1DWCUyd4qIs0bUB8nuz32/11Cu+KPM7sOXlrOS4sOkzb1AAAAAElFTkSuQmCC), auto",
  dolly: "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAgVBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8mJiYAAADNzc2/v7+fn59paWlPT08MDAwICAj6+vqpqak7Ozv29vby8vLp6em2traAgIBkZGRZWVlAQEAaGhpISEgkS7tbAAAAFHRSTlMAOvhpZD8mkQWegMy9qY1YVE01EYiqlE0AAADZSURBVCjPbY9ZloMgEAAbEbfsmRZZXbJn7n/AAX2RQVN/VD26AXLOeZLDGo6IbfI9tHq8cdxuj1HwvgCoaiHqKoRk+M3hB9jueUW8PnfsE/bJ3vms7nCkq7NoE3s99AXxoh8vFoXCpknrn5faAuJCenT0xPkYqnxQFJaU0gdZrsKm8aHZrAIffBj40mc1jsTfIJRWegq6opTMvlfqLqYg7kr1ZB7jFgeaMC59N//8O4WZ1IiPF8b5wMHcJn8zB4g4mc77zpxgAbMSUVoGK4iV0hL4wrksz+H0Bw5+E+HrniDQAAAAAElFTkSuQmCC), auto",
  pan: "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAABHVBMVEUAAABPTk4AAAAAAAAJCQkRERE0MzQQEBAODg4QEBB4d3dbWlo9PDw/Pj4vLy8sLCwZGBgWFhYcHBwKCgoSEhIAAAAKCgoICAgKCgoQEBAODg4EBAQICAgPDw8REREMDAx2dnY0NDQvLy9QUFAaGhomJSYjIyM7OjokJCQNDA0mJiYNDQ0AAAAUFBQJCQkQEBAEBAQNDQ0PDw8VFRX///+amJkAAAD5+fnz8/PKycn9/f339vbi4eLR0dDNzMyAgIB8e3xycHH7+/vw7+/o6OjX1ta7urq4t7iwsLCnp6eioqKbmppva21OTk74+Pjl5eXc3Nzb29vLy8vDw8PDwsKrqqqdnZ2WlpaSkpKTkZKMiouEg4NkZGRISEgxLzBpgbsEAAAANHRSTlMA+fiQXgngKSYG/vX17uvBuqackpCNg3BpUkpAPBwTDvj18+vl0s/NwrOwoZZ+TDg4NBkBGrzX8QAAAP5JREFUKM99j9Vuw0AQRdeuKZyGkyZNmbnXDLHDVGb8/8/oy7paK1bO0+oc7WiGnGiaxq+QRTQAOh8f9Jv4H/Ge8PZPrCdlvkxfYluUT2WyyCq3mZ7unwlKVLcqOzA/Mf71j0TWJ/Ym6rPeca05Ni4iIevYc7yoUD2zQFhq71BdI9nvBeBabFDSPe8DswlUc1Riw3VxbH0NHBUPQ0jrbDnPYDjALQBMq9E7nkC5y7VDKTZlUg8Q0lmjvl74zlYErgvKa42GPKf3/a0kQmYCDY1SYMDosqMoiWrGwz/uAbNvc/fNon4kXRKGq+PUo2Mb96afV0iUxqGU2s4VBbKUP65NL/LKF+7ZAAAAAElFTkSuQmCC), auto"
};

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "cursors.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1828:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1408);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(37)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(1408, function() {
			var newContent = __webpack_require__(1408);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=24.js.map