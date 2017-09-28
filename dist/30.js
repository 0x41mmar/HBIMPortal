webpackJsonp([30,49],{

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

/***/ 1033:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Viewer = __webpack_require__(1035);

var _Viewer2 = _interopRequireDefault(_Viewer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Viewer2.default;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1035:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

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

var _EventsEmitter = __webpack_require__(372);

var _EventsEmitter2 = _interopRequireDefault(_EventsEmitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ExtensionBase = function (_EventsEmitter$Compos) {
  (0, _inherits3.default)(ExtensionBase, _EventsEmitter$Compos);

  /////////////////////////////////////////////////////////
  // Class constructor
  //
  /////////////////////////////////////////////////////////
  function ExtensionBase(viewer) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    (0, _classCallCheck3.default)(this, ExtensionBase);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ExtensionBase.__proto__ || (0, _getPrototypeOf2.default)(ExtensionBase)).call(this, viewer, options));

    _this._viewer = viewer;
    _this.viewer = viewer;

    _this._options = options;
    _this.options = options;
    return _this;
  }

  /////////////////////////////////////////////////////////
  // Extension Id
  //
  /////////////////////////////////////////////////////////


  (0, _createClass3.default)(ExtensionBase, [{
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

      return true;
    }

    /////////////////////////////////////////////////////////
    // Reload callback
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'reload',
    value: function reload(options) {

      return true;
    }

    /////////////////////////////////////////////////////////
    // Async viewer event
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'viewerEvent',
    value: function viewerEvent(eventId) {
      var _this2 = this;

      var eventIdArray = Array.isArray(eventId) ? eventId : [eventId];

      var eventTasks = eventIdArray.map(function (id) {
        return new _promise2.default(function (resolve) {
          var handler = function handler(args) {
            _this2.viewer.removeEventListener(id, handler);
            resolve(args);
          };
          _this2.viewer.addEventListener(id, handler);
        });
      });

      return _promise2.default.all(eventTasks);
    }
  }], [{
    key: 'guid',


    ///////////////////////////////////////////////////////////
    //
    //
    ///////////////////////////////////////////////////////////
    value: function guid() {
      var format = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'xxxxxxxxxx';


      var d = new Date().getTime();

      var guid = format.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == 'x' ? r : r & 0x7 | 0x8).toString(16);
      });

      return guid;
    }
  }, {
    key: 'ExtensionId',
    get: function get() {

      return 'Viewing.Extension.Base';
    }
  }]);
  return ExtensionBase;
}(_EventsEmitter2.default.Composer(Autodesk.Viewing.Extension));

exports.default = ExtensionBase;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Viewer.ExtensionBase.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1092:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(18);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Vector = function () {
  function Vector() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    (0, _classCallCheck3.default)(this, Vector);

    this._x = x;
    this._y = y;
    this._z = z;
  }

  (0, _createClass3.default)(Vector, [{
    key: "getX",
    value: function getX() {
      return this._x;
    }
  }, {
    key: "getY",
    value: function getY() {
      return this._y;
    }
  }, {
    key: "getZ",
    value: function getZ() {
      return this._z;
    }
  }, {
    key: "magnitude",
    value: function magnitude() {

      return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z);
    }
  }, {
    key: "asUnitVector",
    value: function asUnitVector() {

      var m = this.magnitude();

      return new Vector(this._x / m, this._y / m, this._z / m);
    }
  }, {
    key: "scaled",
    value: function scaled(scaleFactor) {

      var m = this.magnitude();

      return new Vector(this._x * scaleFactor / m, this._y * scaleFactor / m, this._z * scaleFactor / m);
    }
  }, {
    key: "multiply",
    value: function multiply(scaleFactor) {

      this._x *= scaleFactor;
      this._y *= scaleFactor;
      this._z *= scaleFactor;

      return this;
    }
  }, {
    key: "add",
    value: function add(vector) {

      this._x += vector._x;
      this._y += vector._y;
      this._z += vector._z;

      return this;
    }
  }, {
    key: "vectorTo",
    value: function vectorTo(vector) {

      return new Vector(vector._x - this._x, vector._y - this._y, vector._z - this._z);
    }
  }, {
    key: "withinSphere",
    value: function withinSphere(center, radius) {

      var magnitudeSqr = (this._x - center._x) * (this._x - center._x) + (this._y - center._y) * (this._y - center._y) + (this._z - center._z) * (this._z - center._z);

      return magnitudeSqr < radius * radius;
    }
  }, {
    key: "withinBox",
    value: function withinBox(center, size) {

      //TODO

      return true;
    }
  }, {
    key: "copy",
    value: function copy() {

      return new Vector(this._x, this._y, this._z);
    }
  }], [{
    key: "fromArray",
    value: function fromArray(data) {

      return new Vector(data[0], data[1], data[2]);
    }
  }]);
  return Vector;
}();

exports.default = Vector;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Vector.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1313:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(18);

var _createClass3 = _interopRequireDefault(_createClass2);

var _Vector = __webpack_require__(1092);

var _Vector2 = _interopRequireDefault(_Vector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BaseObject = function () {
  function BaseObject(id, type) {
    (0, _classCallCheck3.default)(this, BaseObject);


    this._offset = new _Vector2.default();
    this._position = new _Vector2.default();
    this._selectable = true;
    this._transformable = true;
    this._type = type;
    this._id = id;
  }

  (0, _createClass3.default)(BaseObject, [{
    key: 'setPosition',
    value: function setPosition(x, y, z) {

      this._position = new _Vector2.default(x + this._offset._x, y + this._offset._y, z + this._offset._z);
    }
  }, {
    key: 'getPosition',
    value: function getPosition() {

      return this._position;
    }
  }, {
    key: 'setOffset',
    value: function setOffset(x, y, z) {

      this._offset = new _Vector2.default(x, y, z);
    }
  }, {
    key: 'getOffset',
    value: function getOffset() {

      return this._offset;
    }
  }, {
    key: 'setTransformable',
    value: function setTransformable(transformable) {

      this._transformable = transformable;
    }
  }, {
    key: 'getTransformable',
    value: function getTransformable() {

      return this._transformable;
    }
  }, {
    key: 'setSelectable',
    value: function setSelectable(selectable) {

      this._selectable = selectable;
    }
  }, {
    key: 'getSelectable',
    value: function getSelectable() {

      return this._selectable;
    }
  }, {
    key: 'getType',
    value: function getType() {

      return this._type;
    }
  }, {
    key: 'getId',
    value: function getId() {

      return this._id;
    }
  }]);
  return BaseObject;
}();

exports.default = BaseObject;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "BaseObject.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1349:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ParticleSystem = __webpack_require__(1514);

var _ParticleSystem2 = _interopRequireDefault(_ParticleSystem);

var _Vector = __webpack_require__(1092);

var _Vector2 = _interopRequireDefault(_Vector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  Instance: _ParticleSystem2.default,
  Vector: _Vector2.default
};

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1414:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(36)();
// imports


// module
exports.push([module.i, ".particle{\r\n    top: 10px;\r\n    right: 10px;\r\n    width: 265px;\r\n    height: 320px;\r\n    resize: auto;\r\n}\r\n\r\n.particle .container {\r\n    width: 100%;\r\n    padding: 0;\r\n}\r\n\r\n.particle .btn {\r\n    height: 6px;\r\n    line-height: 0;\r\n    vertical-align: top;\r\n}\r\n\r\n.particle .btn-span {\r\n    margin-right: 0px;\r\n    line-height: 0.3;\r\n    top: 1px;\r\n}\r\n\r\n.particle .dg.main {\r\n    width: 100%\r\n}\r\n\r\n.particle .dg.main.taller-than-window .close-button {\r\n    border-top: 1px solid #ddd;\r\n}\r\n\r\n.particle .dg.main .close-button {\r\n    background-color: #ccc;\r\n    display: none;\r\n}\r\n\r\n.particle .dg.main .close-button:hover {\r\n    background-color: #ddd;\r\n}\r\n\r\n.particle .dg {\r\n    color: #555;\r\n    text-shadow: none !important;\r\n}\r\n\r\n.particle .dg.main::-webkit-scrollbar {\r\n    background: #fafafa;\r\n}\r\n\r\n.particle .dg.main::-webkit-scrollbar-thumb {\r\n    background: #bbb;\r\n}\r\n\r\n.particle .dg li:not(.folder) {\r\n    background: #fafafa;\r\n    border-bottom: 1px solid #ddd;\r\n}\r\n\r\n.particle .dg li.save-row .button {\r\n    text-shadow: none !important;\r\n}\r\n\r\n.particle .dg li.title {\r\n    background: #e8e8e8 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;\r\n}\r\n\r\n.particle .dg .cr.function:hover, .dg .cr.boolean:hover {\r\n    background: #fff;\r\n}\r\n\r\n.particle .dg .c input[type=text] {\r\n    background: #e9e9e9;\r\n    border: 0;\r\n    margin-top: 0px;\r\n    padding: 0px;\r\n    float: right;\r\n}\r\n\r\n.particle .dg .c input[type=text]:hover {\r\n    background: #eee;\r\n}\r\n\r\n.particle .dg .c input[type=text]:focus {\r\n    background: #eee;\r\n    color: #555;\r\n}\r\n\r\n.particle .dg .c .slider {\r\n    background: #e9e9e9;\r\n    height: 28px;\r\n    margin-top: 0px;\r\n}\r\n\r\n.particle .dg .c .slider:hover {\r\n    background: #eee;\r\n}", ""]);

// exports


/***/ }),

/***/ 1415:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(36)();
// imports


// module
exports.push([module.i, "\r\n\r\n.dockingPanel .dockingPanelTitle img, .dockingPanel .dockingPanelTitle img:before {\r\n    content: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAgAElEQVR4nO19ebxdRZXut1bV3vuce29ykxDCoEjje4oNNmqLgIDGMAREEoGQBJkEZWhRnia2KI2aTrd20wgq4oD4AGknSATCjAyCgKCor/XZKioiMwRChpt7z7CHWu+PqtrDuecmd4zvvWb9fsnZQ+WcqjV8a6ghwMv0Mr1ML9PL9F+VaJv90g0bdqs/sOw8aa17l0oHdwRFSOfsg3ivD0LCmUBzHUAKgIz8HZ2vRDrele6JgbhtoIIfIY4vxHt3u3XyBjN5tG0EsOrn/X33nXuNjv98WNJoQzIGTAaVbEK68zy0Dr4CwgGQDFrGdZIBACnx111XBCD5K/te7HfVeoGhTYMAL8JJu94xhaMcF20TAcx6339/H2t9eWwCxBkhTVIABIZBrfEUWm/6OOI3nwcMPY+C0WWGosTwzudls+gQjP/smwkMrL8Vwotw6m6tqRrneEhP9Q9sf9YefZwFx6IWAZubIJOCJIUxQAJCUJ+N8PE1SHY/ERLNBlobADgryAUhgFBxbUrXcNdeDsZUOyACNAYApechjfcDcO9Uj3ksNOUCANffQIyDKDNQDCRJBkUEQQYSQUoR6s2nETx1B+LXngZg03ANFsDh0PBrMcPxv9OCkgSo99WRJMfjv5oAaoqOJs1RFhuEgUYax0hNBkUAgQAwMiHUnrge8a6LAI6AtAGACiWvMLeESZ1+wDftFCAAimPAyCK5cu2nceoOz0/RcMdMUyqA1yx7wysSwVJySKECBVOPELfaSLMMRgAjKVKqI1z3KwQv/ATJTocA8VCOLJZK2mwEFYHkTbo5ZvtBAhASkNazJNtwigHOn6Ihj5mmVABMwbEB8yttQEIQAD21EExAux0jyzJkRiAcwrTWI3p8NZIdDgZIA5IOd7TDtF26Wgm5e/ICgIAygGo1SNJabG78+ZewcO/GFA591DRlAnjlsv3qBHOCjhSydpojCoFQj0KIyRCbDJkYQAQp9yB6/n7ojb9GOv11QOtFANwdYtCF8eJCOrEMBwB24SjBvYubIBW9PnhOFibA1VM19rHQlAmgP5QjiPF6YwyUIhCJVVixQuiJIqRJAsWELEtBQQ/QfA71p9Zg856fKkU9jjy8SCnycUTuHQEgERCJg53Sv4UASQLunRFK3DoaF//henz4te2pGv9oaUoEMHfFXD3Qbh7Dka7HzdRqPlMexhsBVKicJTQBQyAGOJqG8IU70Hj1acjUdCDZYJOpYc7WM7gIPznX9LJ1WIF4AZAAaGwGq/DIaar9xs3AT6di/GOhKRFAI2m8PtDqMEkNAiYYAxgIDArFFiHU6xGSJAYBSDIDQzXw5kdRX/8QBnc4CpCN1UimC7ZDHNSggCBvDR6qqCQkZAk46usxaB2L/18FoJQ6RoVqu7SVgggQBRhDMCTIAJAL3TlQCEMNkQzGCFiFQEroe/pqDM0+HKIiIG0BoELjYRnKVOC7x38rH7Fa79qRAEQAlaInSdoQkZN7vvzTixof2vcvGpJOugAOOf+Q/vbg5veSMQCTDTUBEAlYCAybyNoQVHKHzES2HU9HffDXqG/6GRrT9wVLC4DYSKZDCBVtz30ACl9QdtiuDQAgy0A6mCNxz4kALpxsHoyFJl0AWWtooQ54F7E5FthhfuZ0lGEFIgAMEUQrxAQIAyZJkekaJF6LmetuRGP6AQUzUWg7gArjgSrjUfpEqU0eMJkMVOsBkvg4XPTgV/DR/ZuTzYfR0uQKYAWYIO/VNU1pKwNKQmBjcd94rST3PNRIAg2YDIYBhkGmpqFv40OoDf0Wce2voJL1hTM2BuTDGylghqVUAxKHO/7atRUfBQhg4hZEBXuEmPbOGLhuUvkwBppUARwU7jNXg/aGMWAGSChXWMs/ByOG8qSWRFCvhTBZBiJCmmUQqkE1/owZm36EtfU9QPJSXvMhADDI4ahsBShfu+hHOt7ld2kK6plep8ENC7FixRqsXNlRxds2NHkCWLGCQ7lzUdin+9tDCZg7wnZjkZwAEFs2GAHEEERrtJTlMQhWEFLHzJduxoaZR8HwNOh0AAK2ddKSo82pE2ZGYnw5pG0NAayOCqa/+wsJVv5q0ngxBpo0ARymbnmNDoOjJTFgtlGLgcCQHS97BjPAxuYETPY9s0JPFKFhmmBS1klndUQDv0HfpgexceYCkGy2YSSArsW5HF2s1IWoS12oyAkAAdIYVOvtZxk6BsD/2wIIQnVYWNM7J80Miq12s1AOGQbiwlEHRwL48FLE1ojEZEizDEmSwagAMIT+dTdgQ9/hEApA0q7W4XJ+SuVB/qwzgcstoSS0OIZk5lRc/IeL8OHXDkwWP0ZLkyKAEz93aO8ghs4QIyAuYm/jHKQop/WQnPlC1iLY1YiCQKNWCxG3YxiTgQzBUB09g/8L0aaHkc3Y24WkVNV2R9IBQei0lg4YEm8JWQqC2iWKNx/fBi6dDH6MhSZFAEO8eb4i9ToBwEQQl3oqP1ABjLJ4D7LMkvyZDUFhgHoU2ckaMUjSFIb7ECZPY8aGm/Hc9LdCO4vy0YyAQJ6xeZ5VEoTL+Cr4D0BcUiZCADIg6oW0Bk7AxX+4clvXhyZFAFrx6TpSKmlmTsPJz1lBXBFOCQoIInJFueK9UTYsrTkoMlkGY1IY3Y8dkh9jU/M/kUavhjYbfezjtHq45leelSMhJyDplEjSBrHeO2xvOjwGbpgMnoyWJiyAY7+w/1uZaB+IhReIT/0dzIAc3DircP4BBOeoKS+ieaFFtRBxEttQnvrQmzz1B9188ret3r85Sscb/BejxPUqJFVgv/AFlbip7BvSGOjpr2FwwwKsuOcWrJyXTpQvo6UJC0AzHRn2BtslzcQyF0XoSX7qVgDjqqHCAuVqQWKcFbCFJwIAEjApBIGy9xoIpP2dgfoxq3Syfh5I9RcT70ViVcV3qWh7R2G76h+MbUutBoyhd4U9/bvFwB8nypfR0oQEcMLF+7ySNBbBCMhlnkoEQm7hQikSVM4ijBDEOWqjJI+CxIepsNlyPYoQc4w4SdqxnnYXnsWjsvPm29HXsxSNgeG4PiLMDM8J8k8p5gwoTaCi+o6m3VgI4KKJ8GUsNCEBKB2+I6ip3eN2ZmEHcPE3oBwg+D/GMV2RWzniJuWNQ3SBswSxkZHWCqIUkji5k+fM+CXOmZZm//rgtaZpjgHrACbdCr4DHTcF00uPqWQNlKVgkVOw4p7LsXLexonwZrQ0bgGsWDFXP470bIHFfAXLQGPgCm7Fmi/2TGar5Uo53niHTDZPyK1BgDBSiIeMUVrdfP85v7Pzt6bxA5NFP+Oob39JEoDERlaVyAfDIcZl4n5q0jfzP1YU+VIQaM+ari9oAd8aL2/GQuMWwFO7yNvY8JsI4kJPF/+zi3pQLGAwQmA/EcNieeJgil0bEuesXTsOGGFLP2okuzn/0fMOGcj+7eFriVr7gxhiMhQOoBz5eHjxDrjU8dLUJVB+J4DJIGGN0Nx8PCDfrtrK1NAEICg7PaoHQdzKbN0HXqsp77cLimyylWsnFTNYDo7ECSJXXGc8Yahv+sGnfvFM5We5tUpS+iR0NBNSDlacBblPz9hKsS6fKUNFKEX0JJAshXCwn1750NvTFfjR+PkzOhqXAE775gF7suG5RGKZ7zHd1XoENuIxEDC5dWzGfnp48krLbLXUsAtdBWDFSOJ0IwJ9ZedvZy/e/KzafskqsD6TELvvMa7YV4UZX7QrIKf80j6QUgglAkgSA1HfDGpsWoQVK+6f6irpuASgoY6N+vTOraEUTASoIpnywbwtF5MtN/jwE84iSqsJxUGP9RHi4AfIUtx60/If/2bYj19wgTGfPepbBHo/QBomK80RO3KMzyOcMsNz6xDfNBdWTkkbRLwolIO/HGPlH8bDo9HSmAWw/DtzZzcTc6QYKc15kHPEkkcyOZp4eHJzACQdbZxG2g+yFpRlqVZ01Uh9SGeH/xFsSG/h2rR3S3OwY2asgi35RcFzKTG90sgPBpK2gaBnZ2kNLcQUT1mOWQAxsgNVxH+bJbbqKXA47rhJkNy5GpTgyUUiplQmLsOTC4oQ1BTaDXnQNOsjr1g4c+8Gf+ahNUjiIwmkYLKu2G5vnZMB8hrUsIZeMHlfBMhSCMxJWHHPpVg5b3CsfBotjUkAi1ctVmivPSUIFSdZlkMqO29rmUmF8wUKeALy6UmfK9iStYUei90EyQQEXr36E3dt2lJf2jq4vtZqLaN6z15oN0bWdgB5GaLb/ACcYNxt3iRLIUJ7qozengFTtrtmTALYIXn+zQp0qJ+X7UzxLTOLUFz8LBi5tTtO+X0tyFdLRazTDiJG3Eof1QY3brUzn9h7E/3TT9cgTfaya19MwUTnWLvCjORiyUvS5eQ4b2tSIKwr02ycApHbQFMTko5JAErTiUHAPWlcFYDAMh5Sqv+4mD6flnTw5PMFD112itL9WyIQyQ///SMPPjma/kioLpek9UHS0XaQzD4TuOzYJx7IvXO5jA0R+Hn8Ydbhn5oMIHMQzr1rbwA/GwuvRkujFsBHr3nbbkbocMVARsjnfG1Sg2KSxW/x8o7V88FpumcIASBVrBdlRcjitEVZ8LXR9qn1ib2frH3mwRuF1anejxTaXpiAj3x82SKftkTRtHyRW1LcBmrTtkNzcDH+0gIA+F1hjV+TJSafxSr/yQVR8BjO/1ZuCK4W5K2CLCN0wJDU/PDwOXN+PWL404Uky74nlJ0MIlVW6QJmSnAjJRZXFL7sA6TyHGkKQBbivNsvwWcPf2oMXRsVjUoAH1/15n5DWKwCQpoAnnHktNv48nzO2GpCJP7GQ47q8BHOapjxjSVLVmdjGUDbBD8Nk/bdqPXOR2swZ7C41QBeQexjb5YFRJVD5uqN+4dJCwhquyPJ5gO4fCx9Gw2NSgDG9B6gazggi00xoeIcJ7yDhctmUeA+lcZrHGwZFM/h7oNIodlIHqZMPTDmEazcb8B8+r41lMaHCohgvDP2eI8qxOQO170vIVa1TckzGwPE9H68957v4Kp5k7rLcjQCIFI4WYVKmZaNt1XJwXphAHAFN8kdsC/GEVzRjYr6kEMgMOySFSZz7dfPfGDdeAaRRsF1qtX6MKLe3aU9VH1ZYmbXaKf8otKo/AMpwHgLtm+/A8Dt4+njSLRVAZx33bxXp2IOzcu6jjyqUInR4t74FWs+58rHa4qv8ALSEaPdTJ8IlFo97lGc99a15rz7bqMs293Gurn3gbcCyf9CB8yUvVjpfcUKMiCoabTTk7GtBQBt3hMqmmUyyZ1vqWv5JIt3vlKCJysEB08AoIptvN6SmAia5K5LTnrgzxMZiGh8jeLm6dBBLzJT5AIjJF/D8wOpflbaOIfF+kAsv/11+Pzhj0ykr2XaogCWXbPfLBgsDuqMdjOzAvAKBuRmUAlHXRsy/oQBD0+WIcT5NCyYCWk7axpjJmE9zt2PCh28BqxOkDTpou1SvS5fDhNMl/ukBdT6dkFz4DgA/zjx/lqiLb0875a5p4aaL81SCU2WB3D2szThnj8rWbMffw5PHQMTAVTIiBvmjmeD+45YvQRjin660rn3HgqlfgARyk3NRwOd0U2OOu5drj3S8aUlQQQ1UNz83xLxfPzrIWsn3F9swQJW3DO3ZobMUUFNh8lAWqlaAshPE8iTMP+8LNIu8GSnEK0lKEVQWq6YFOYDQCv8BcLmT1Hr2w9tvwu1rCEd93mlX4oDQTqtww9LBBS3wEF9L4oH5ybAqsno8sgQ1MQbFauDk6ad8QJKe6Sl5LKocMjGxfoC54BLQssVzK1+CCKFuG1+aTTum4yBAAC+sP96fOyuNTDZvjYW6MJ8TyOUravP7OyaT+4ZAjIZJOPTsOKe6yZj/dCIAhCRpWGP7o2bqV1yImJXNPi6iikmOvyEiq1+onp8QykzzgWnAB0ASWzWfHHR/c9NdBAVUtFqxK0PIKztirhZFUCeGXZ7WDyya1uLLVHsMVUAogwkZp4eaP9tCjw80e52FcCK2+b+lRgcb1K/tqFY7p2XevKJlgJ1PNRSKSGDlFbCubEGkULcSJ+p8eSYcYXOf9tjOOfuW2DMWQWme4fkGw23hGLHpRuPKcZaEViWgoK6VsnQ2Slw0kS7290CBMeGkZpjMsmDebLizzU73yzXOQNW8ll+xozLfGA/Syb3feaY+3830QF0pcx8E6b9XijVWznyoCu+C1gKGC1PZfo25f3IBLF7koXmhh+85bWbv/KuCU1ZDhPAxbceHm2kxruDkNBqGIflfh2/FMW1ErZ4YZgSo8vwxMijURAxklaaBcRfnUjHt0gXPfALLD/whwiiBciSYa/L+42txgvK1f7ckkuMZxS77ylpg8LeXaQ5tBjAZyfS1WEC2Kzi+YrVm7PE5JBhewXnC7xF+jlhqsCTL7yNBE86JJiMHtTJnAnj58i00gB3fwtGFhSp+nCY6artOSS58glKZ03AC88ARiCEBX1n3Pj1wcsWjquEAnQIYMU9c3XWTo/pmxbVG5uSXNErvos8KhWpvo1waNgAhk3Qu79E5NKVS1bH4+30qChp3wsyDyOs70Nxo9BebBlmurZByWrcNSVNMKt9jTL7ArhlvN2sCEAZ3jOIsDBupMNSNL/rxU+8lNjvOm9HIuQ3UTjTdg0NbN0nbqa/zyKavNBzJLrkiBfx0duvU8bsQ2JXoeYLtnKNcqUSsQxnKqDTNhGQi6U94+0mQQBiQDoAcfoBLF51O1YvGVcuUxEAZ3JkUNezWoNpZz5VJGLeIirwRAVcleCpvJGCCdAhI47lxguOuPfp8XR2zMTJddweOovCnlchaRXBQykwYilpe8l3Fc65YyljmUwGGHPQ9tv3/M2LwC/H08VcAOff+eb+VMxpaWwKDXFUrmDCd9S9KGfznfCUd5oIOmAkQ8k6zjD+qudY6XML/kgfuf0+ACeWjy0oQ0yO7e51BWby51Xm+7ZsUlBQq1PSPgPAWePpYi6AlPqOVkyvEmMKDc87VfphlLSfiueVsopXfPJ7uASsBKZN9//zwh/9fDwdHS9lkKt0e3ApURjA2JV8ZXzPYUas1XqLGKaFjuyufNfWwB3DI/N3OuPGVz132cJRLSYokwYAkRX82bvuPSXo0dx2+J+bomdm/leh/fmjTniC9wEAiKAUIWlLSiL/s+uoppCy/s336Q29Dyqt5to9BdXd9YySNZhy16RiFR77fQTlt1xJ0gKCnv+WpEPHAvj8WPtHAPCpWw49oB4lN+qQZyVx57mbXS5lxCbD2osAQaiQNLOfmB6Zt3Lej7b5wak9H7rtFA6iK5HF8GVczuN7dIcY99yXWKoncJUX/Aoo7AWaQw8GEi54+vLD14+lbxoA2jD7zuzjWUnDDDe8Ttx3z8p9rjjsEjzZ/QJ2sa3E8u9/CeYDgCTBnSLN33NY252Sdo7xRb2koLz+UxqvX/ZeaQfkFsFxA6SD/SVp7ocxrqLTABBxOj2KNOJGCUZkBEG4Hyaq3HaHJ3Kr3ZrpnyKV/WAsHZtMan79kGemnXXTNYrUp23HfJpeMLKIdro73wKOisyZ8msBa4YQ3gPIbeVYamukAeA/n5394uwZ60RroThh+8U0XEHyyw4HvSWnrTUjbpnrz53/wGOj7dRUEIOuR2voTArCHSSNq/hewnZ00fbC+n35ohCW/xpjEogxC3Z8/9Wve/5yjLrGpQHg1p+87vY9d/rJk6/eubXr8+u4qNugpOmlHyuF/x0dLCBIYLG/OZi+xMLbLvQcgTZ99chfzjjrhnsJ0VJ/ymKeeInkJXegjPWoHo/mLV+qMZKI2FO4glo/Z3wygHNH26/8t/76n07/0tIDnzx71+kbsKkRInPTWN0cb3k18TDygiIgCBntRmvVuYc9vHS0HZpK6l9068Fqe3Ob0iqgLOvqfH0GDyBPxPw14AOL7lEIBRFM0vxtwvVD1n3jnaOa58jzgN89vOeFXxzoXXrQHi/M2euVz2N6lIBY8g5Yz+/S8lwAZDuTK0+ReDEDqt2MB6n3Wqwx016lvzf6ZZD9ALa4OH3sNH07CgfXxk8P3Kr+TIZfK1LN9r2yFcdfVrPf3PJHYD4gMGkMomCPIGsfCeAbo+lXteJzxrmfRC3655nRAGb0AlEkCCOAlAIpBisFYgWlGcwMoxhCDFEMKAYx2eVvTFCKYYyka7HzT1IVNmrUVgYMVgQDgiLYiWACFBjC1a6Y6m2F1GhGlvPFMEBa1YPpakZy3fpLg6GsUb+QonbOVbtozDlTz5iS9W+N8WXd46AHWdy4MyFa9NIVR23eWvcqWjlrxuA3m1l84kDWs/vm9QIOAlCooQINpTQoUGCtoLWGUgwJNIxSMEqBNYMU203ATPZTKV2r04F1nQJcgyJ2S9DttlU/18CuhlEeIo0gAIH9+i3Ip/gOrUFhgPSlDQOS4l+EcHX7cRK9ffw/mINXSRIX8wFmOK53z29GgF8nIJM0AeJ3aJO+BcAPt9bHigDWX3DJ073Ll19Wi9ILlE5VoDJwoMBa20+lQFpBaQWlFIgYohQypQCyVgFSLoRiMBjSImRK2UdEMGznK8UV8IxjPKFw/gAq152UwS2DHJEI3FND1mgmGGx8WyS98I/vWPRb/807nH7DaqV6PypJu1i/Cr8wYnSaXryvwhSMAQW1ACY9CWMVAABwGF6VNOOTqR69wRgDEoFxEYARgDNB5ra2KLcamkSKQzogsFvmBRnb7UowgKjCoeXOzkUhhgBdLm1shfx2127VGgoCQGtIkvwcWfL5Px68+HsdLYRozY1obn4/q2CGZEnVseYprv9y+3z4cqGivXS2zxKIwZGzT7npNeu+uWCLB3901aNo+fIPKOavaq0QKAZpBQ4Cq/VKgQMF5X2CUjBaQZS1BlbsIIhB7ODI+QZrBVxgiEs2LAwBIC4YSlsWBqFqBaQUKAphGq1NEPkam/Ylv59//LPd//UK3um0N93MQc87JSmdYl9meHFZei/dmhYX5ficNSRpf2bttxZ/agvDGAFKzzijp9bTc3dQr+0XABZ2ggCsywKwzGalIFpZh+wF4IRADpqIAVEF/osTBmD3BhhX11ZElTMmRhKCV1Lt3lMtAtIMkqV3KKZ/fOQdxzy0pUEDwI7vv+EYJqwGMcP4uZRRwsxIjM/fCyioQ+LGr6bN6H37o5ccMeJZdN1Dw8sua5hlyy7IkuT7KtCsjLEwlAmIDUTY3tvjr1BsCDMQMMgIxC2XIHJnknkYEoGf2/Qb+gj2+LAt4X6ZcotXChwGkHb8mEnkQqRPX/HIER8e1ZFjfc88fsvQK3Z5hDnYw0haxTMv4dEy3sNQGafSGKSC3YfWDSwA8J2tjWU4nX12VGO+Npw27V3apOAgACsbBXGg3TXnsGQUwygF0i4kVQxidmGpC1GJrRBcNOQhiMidnOUcs6/WE0YIR4ms1rfaqVJ0ZRpnn3ts/rFjPmRpp/ddfzYF9S9JUjq5uMz0bmFQF23Pu9XRnsNeSGPzdb2znz/+0Uu6K8bIydEll7Rl+fKLs2brYFULa8gMoNiGZ2KsxrpEjPwfuBOqXCVPfJoP5AmbL3yJK5eSn2B2e8WoNOGcK2KpWxSGgFYwjeYvQObf/jT32O+PdwspG317lrSeY9Y7iVu+UlXyTm67yy7Tk1Rqn9eUkjZEqUPXv7j9GzHCUflbzE7bn//8nWrZsusN0XtYBMZkUEyQzKZCRhmwsSpMys1+icMaIxC3vE+MATvhefZ79rocCAy7+9IPoMIIAsAMjiJIHL9gmo0rCPoLjx22+IUt9X9r9MyuR/5pxydW34xw5umSJp2JQOW+6E+V+fkkfkd7u2k9BevatEDSpRhBAFtF3Z5lH3oDU/DjsKenl8mGeezzAK3AAUM7GBKXlInikjP2WTJbrFEW+Jlc1uyioQKGACYuVhE6uMnabQHRTZKk//L4YYsn7T9emHPKNYcy11YTUb9kyRYhBijDjHTcl1Y+oihjEGtIGr9Amt/y3LeWDJuyHJXb612+/NKgr+dMZQxYWwHkf0oRUVkApG35wloHQ1jZvcWuVGEPeWK3Q5LcckXriO1/9GazaQoDmHb7sSzLzn98o1yFJUsmfT3RnJNW/1DVeudJbH1BN22vrJxzhaOyaPIIdBg82bWYGZKPvfjtpcMO/hhVgYyIvmTa8btVFO0oYmx5xVi4McLOBxiQuxbYSIlctmVjoyIasgGSzT3FhUK+3g4hCBM4qsG025I2WpeKUhc/Pv+Y34+mr+MhJv6mxK25UglJ3dhdt4oVHsiZ37FRaHjUBABiwDoExa0l2y1c8/WXbqzWh0YZ+IF6ly1bGU2f9ikWY/MCpUCuROGTMvYwpG2BzhfxchgitnuEXTJGTABcnuDqQxJFtjxg0odSIxf9+ZBjr0O1TDTpNOuEW6drbvySdbCbZMkwmHHHGFWLc0AeYJRJOi0FgNsYHUOy45//3nHXltuPVgCoLV++SxQEdwb12u4Ek4eipBRUoMHKhqSiFES7kNSFo2AFKCqyYAdNTICwrRNBM1RPHWmz9SwRfSXdPPDVJ44+dZucXAgAO5y4+uMc9Z0vsT2Zxmu+/8ghBuhSlxiB8SWj4agXaXvzVWunDZyOy85MirZjoP5zzvmICvUXlMsBoDUUK3CoQUy5MzaBLU+QUjbeVwqkHLSwspkw20SMWQFhCKQJROQmYlr5p8OW/GIs/ZoM2uHk1Xsy9D0EbC/GbnzpPKus8zCozv/qjDpCbYBKVqCRETYYMQe9+N0l+Sq6MZ2Wwhs3Ximz+k+RIHiDMQC7UFOMsZXR0voacu/AAImBEZXvJ4PzIxQGYK1h4uRxmOzTTTNw7XMLz/yL/BeDa5vyyI5hfD3X+s8w7c1uR/9wiAFK2u4Z3SkEeDkURUqRFBz0zFTJ4LtRWsY4JgsAgOl///fHBz21bzMzkcuMlVYgFw0ppQDFMFrlMOTDUGKC+MmdnjpMmjbIyPwjHi8AAAH9SURBVBXM8sVHj3jPn8bal8mmOSdcu5BIVhFxBFPd/tUVYoAKzPgc3uWfwxwXc4Asaz9dU9P3evK7R24AxnFkWUB0k0mSO3la33xJU8C4BMsIDAmY3eR1BoANRAB2Z9gIMVhrUKBhGs07UshXnjrqpK0fzrSNiGjobjHBzzjsPVBMOqz0AwyHGSryehgUmy19/ljWcEEGZv2KWAaXAPg6MA4LAID+j33sKF2PVnEYBExknXHAuQWwnQ1D5srUFGhwPbL/OMseMYq/FNToO48ecdI2/x8rtkY7HHfNB0nrL9sDwM0whwoUFrAlbR+JsRTUYdqDD75dgrevXr0kG5cAIEKzPnnud9W06cdRmkL5OQPFUFrl0ZGEAdBTt+UJyG+E6bt1HV/5yKK/m9ydkZNIs4++didVT39OHOwMkwxjfHnuxXRwfVTTpKwB0CCb9Lhnrl56y/gEAGDWinNeSZm+Wk+ffgCTWIxXCipQ0K5MnKWpmCi8y0BuJcY1T570fy/jy7Tj8Vefz+G0j0tiV1LmSSKownjPvLExUUDRdGSN9d9fe81xi8d9dPH6lRc8Pfsf/mGxabc/CGABK9oegUZquEFKPwHgHqPoAdXCfzxx5t9N8iKTqSVO+GrB4EKYbDaAtJz1VqYsS4/GRK0NLMj+eoLdfJleppfpZZoo/R/hzTwX+JPbMQAAAABJRU5ErkJggg==');\r\n}\r\n\r\n.toolPanelBase .dockingPanelClose {\r\n    position: absolute;\r\n    top: -3px;\r\n}\r\n\r\n.toolPanelBase .dockingPanelTitle {\r\n    padding: 4px 10px 4px 10px;\r\n    text-transform: none;\r\n}\r\n\r\n.dockingPanel .dockingPanelTitle .dockingPanelTitleText {\r\n    margin-top: 4px;\r\n    text-transform: none;\r\n}\r\n\r\n.dockingPanel .dockingPanelTitle img, .dockingPanel .dockingPanelTitle img:before {\r\n    float: left;\r\n    width: 24px;\r\n    height: 24px;\r\n    margin-right: 10px;\r\n}\r\n\r\n", ""]);

// exports


/***/ }),

/***/ 1509:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(18);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EventsEmitter = function () {

  ///////////////////////////////////////////////////////////////////
  //
  //
  ///////////////////////////////////////////////////////////////////
  function EventsEmitter() {
    (0, _classCallCheck3.default)(this, EventsEmitter);


    this._events = {};
  }

  ///////////////////////////////////////////////////////////////////
  //
  //
  ///////////////////////////////////////////////////////////////////


  (0, _createClass3.default)(EventsEmitter, [{
    key: 'on',
    value: function on(event, fct) {

      this._events[event] = this._events[event] || [];
      this._events[event].push(fct);

      return this;
    }

    ///////////////////////////////////////////////////////////////////
    //
    //
    ///////////////////////////////////////////////////////////////////

  }, {
    key: 'off',
    value: function off(event, fct) {

      if (event == undefined) {
        this._events = {};
        return;
      }

      if (event in this._events === false) return;

      if (fct) {
        this._events[event].splice(this._events[event].indexOf(fct), 1);
      } else {
        this._events[event] = [];
      }

      return this;
    }

    ///////////////////////////////////////////////////////////////////
    //
    //
    ///////////////////////////////////////////////////////////////////

  }, {
    key: 'emit',
    value: function emit(event /* , args... */) {

      if (this._events[event] === undefined) return;

      var tmpArray = this._events[event].slice();

      for (var i = 0; i < tmpArray.length; ++i) {

        var result = tmpArray[i].apply(this, Array.prototype.slice.call(arguments, 1));

        if (result !== undefined) return result;
      }

      return undefined;
    }

    ///////////////////////////////////////////////////////////////////
    //
    //
    ///////////////////////////////////////////////////////////////////

  }, {
    key: 'guid',
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
  }]);
  return EventsEmitter;
}();

exports.default = EventsEmitter;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "EventsEmitter.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1510:
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

var _BaseObject2 = __webpack_require__(1313);

var _BaseObject3 = _interopRequireDefault(_BaseObject2);

var _Vector = __webpack_require__(1092);

var _Vector2 = _interopRequireDefault(_Vector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Field = function (_BaseObject) {
  (0, _inherits3.default)(Field, _BaseObject);

  function Field(id, type) {
    (0, _classCallCheck3.default)(this, Field);
    return (0, _possibleConstructorReturn3.default)(this, (Field.__proto__ || (0, _getPrototypeOf2.default)(Field)).call(this, id, type));
  }

  (0, _createClass3.default)(Field, [{
    key: 'computeAcceleration',
    value: function computeAcceleration(particle) {

      return new _Vector2.default();
    }
  }]);
  return Field;
}(_BaseObject3.default);

exports.default = Field;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Field.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1511:
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

var _Field2 = __webpack_require__(1510);

var _Field3 = _interopRequireDefault(_Field2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MagneticField = function (_Field) {
  (0, _inherits3.default)(MagneticField, _Field);

  function MagneticField(id) {
    (0, _classCallCheck3.default)(this, MagneticField);

    var _this = (0, _possibleConstructorReturn3.default)(this, (MagneticField.__proto__ || (0, _getPrototypeOf2.default)(MagneticField)).call(this, id, 1));

    _this._force = 0;
    return _this;
  }

  (0, _createClass3.default)(MagneticField, [{
    key: 'applyForce',
    value: function applyForce(particle) {

      var particlePos = particle._position;

      var fieldPos = this._position;

      var dX = fieldPos._x - particlePos._x;
      var dY = fieldPos._y - particlePos._y;
      var dZ = fieldPos._z - particlePos._z;

      var force = particle._charge * this._force / Math.pow(dX * dX + dY * dY + dZ * dZ, 1.5);

      if (Math.abs(force) > 0.001) {

        var particleAcc = particle._acceleration;

        particleAcc._x += dX * force;
        particleAcc._y += dY * force;
        particleAcc._z += dZ * force;
      }
    }
  }, {
    key: 'setForce',
    value: function setForce(force) {

      this._force = force;
    }
  }, {
    key: 'getForce',
    value: function getForce() {

      return this._force;
    }
  }]);
  return MagneticField;
}(_Field3.default);

exports.default = MagneticField;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "MagneticField.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1512:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(18);

var _createClass3 = _interopRequireDefault(_createClass2);

var _Vector = __webpack_require__(1092);

var _Vector2 = _interopRequireDefault(_Vector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Particle = function () {
  function Particle(dof) {
    (0, _classCallCheck3.default)(this, Particle);


    this._velocity = new _Vector2.default();
    this._position = new _Vector2.default();
    this._acceleration = new _Vector2.default();
    this._recycled = false;
    this._radius = 0.03;
    this._dof = dof;
    this._lifeTime = 30;
    this._charge = 1;
    this.ptr = 1; //compat with wasm
  }

  (0, _createClass3.default)(Particle, [{
    key: 'reset',
    value: function reset() {
      this._recycled = false;
      this._lifeTime = 30;
    }
  }, {
    key: 'submitToFields',
    value: function submitToFields(fields) {
      var _this = this;

      this._acceleration._x = 0;
      this._acceleration._y = 0;
      this._acceleration._z = 0;

      fields.forEach(function (field) {

        field.applyForce(_this);
      });
    }
  }, {
    key: 'step',
    value: function step(dt) {

      this._lifeTime -= dt;

      this._velocity._x += this._acceleration._x * dt;
      this._velocity._y += this._acceleration._y * dt;
      this._velocity._z += this._acceleration._z * dt;

      this._position._x += this._velocity._x * this._dof._x * dt;
      this._position._y += this._velocity._y * this._dof._y * dt;
      this._position._z += this._velocity._z * this._dof._z * dt;
    }
  }, {
    key: 'getRecycled',
    value: function getRecycled() {

      return this._recycled;
    }
  }, {
    key: 'getLifeTime',
    value: function getLifeTime() {

      return this._lifeTime;
    }
  }, {
    key: 'setLifeTime',
    value: function setLifeTime(lifeTime) {

      this._lifeTime = lifeTime;
    }
  }, {
    key: 'getAcceleration',
    value: function getAcceleration() {

      return this._acceleration;
    }
  }, {
    key: 'getPosition',
    value: function getPosition() {

      return this._position;
    }
  }, {
    key: 'getCharge',
    value: function getCharge() {

      return this._charge;
    }
  }, {
    key: 'getRadius',
    value: function getRadius() {

      return this._radius;
    }
  }]);
  return Particle;
}();

exports.default = Particle;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Particle.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1513:
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

var _BaseObject2 = __webpack_require__(1313);

var _BaseObject3 = _interopRequireDefault(_BaseObject2);

var _Vector = __webpack_require__(1092);

var _Vector2 = _interopRequireDefault(_Vector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ParticleEmitter = function (_BaseObject) {
  (0, _inherits3.default)(ParticleEmitter, _BaseObject);

  function ParticleEmitter(id) {
    (0, _classCallCheck3.default)(this, ParticleEmitter);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ParticleEmitter.__proto__ || (0, _getPrototypeOf2.default)(ParticleEmitter)).call(this, id, 0));

    _this._spread = 2 * Math.PI / 180;
    _this._emissionRate = 500;
    _this._velocity = 10;
    _this._charge = 1;
    return _this;
  }

  (0, _createClass3.default)(ParticleEmitter, [{
    key: 'emitNumber',
    value: function emitNumber(dt) {

      return Math.floor(this._emissionRate * dt);
    }
  }, {
    key: 'emitParticle',
    value: function emitParticle(particle) {

      var angle1 = this._spread * (2 * Math.random() - 1);
      var angle2 = this._spread * (2 * Math.random() - 1);

      particle._velocity._x = this._velocity * Math.cos(angle1) * Math.cos(angle2);

      particle._velocity._y = this._velocity * Math.sin(angle1) * Math.cos(angle2);

      particle._velocity._z = this._velocity * Math.sin(angle2);

      particle._position._x = this._position._x;
      particle._position._y = this._position._y;
      particle._position._z = this._position._z;

      particle._charge = this._charge;
    }
  }, {
    key: 'setEmissionRate',
    value: function setEmissionRate(emissionRate) {

      this._emissionRate = emissionRate;
    }
  }, {
    key: 'getEmissionRate',
    value: function getEmissionRate() {

      return this._emissionRate;
    }
  }, {
    key: 'setVelocity',
    value: function setVelocity(velocity) {

      this._velocity = velocity;
    }
  }, {
    key: 'getVelocity',
    value: function getVelocity() {

      return this._velocity;
    }
  }, {
    key: 'setSpread',
    value: function setSpread(spread) {

      this._spread = spread;
    }
  }, {
    key: 'getSpread',
    value: function getSpread() {

      return this._spread;
    }
  }, {
    key: 'setCharge',
    value: function setCharge(charge) {

      this._charge = charge;
    }
  }, {
    key: 'getCharge',
    value: function getCharge() {

      return this._charge;
    }
  }]);
  return ParticleEmitter;
}(_BaseObject3.default);

exports.default = ParticleEmitter;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "ParticleEmitter.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1514:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getIterator2 = __webpack_require__(1088);

var _getIterator3 = _interopRequireDefault(_getIterator2);

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

var _ParticleEmitter = __webpack_require__(1513);

var _ParticleEmitter2 = _interopRequireDefault(_ParticleEmitter);

var _MagneticField = __webpack_require__(1511);

var _MagneticField2 = _interopRequireDefault(_MagneticField);

var _EventsEmitter2 = __webpack_require__(1509);

var _EventsEmitter3 = _interopRequireDefault(_EventsEmitter2);

var _Particle = __webpack_require__(1512);

var _Particle2 = _interopRequireDefault(_Particle);

var _Vector = __webpack_require__(1092);

var _Vector2 = _interopRequireDefault(_Vector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ParticleSystem = function (_EventsEmitter) {
  (0, _inherits3.default)(ParticleSystem, _EventsEmitter);

  ///////////////////////////////////////////////////////////////////
  //
  //
  ///////////////////////////////////////////////////////////////////
  function ParticleSystem(maxParticles) {
    (0, _classCallCheck3.default)(this, ParticleSystem);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ParticleSystem.__proto__ || (0, _getPrototypeOf2.default)(ParticleSystem)).call(this));

    _this._maxParticles = maxParticles;
    _this._dof = new _Vector2.default(1, 1, 1);
    _this._emittedParticles = 0;
    _this._particleIdx = 0;
    _this._recycleBin = [];
    _this._particles = [];
    _this._emitters = [];
    _this._fields = [];
    return _this;
  }

  ///////////////////////////////////////////////////////////////////
  //
  //
  ///////////////////////////////////////////////////////////////////


  (0, _createClass3.default)(ParticleSystem, [{
    key: 'setMaxParticles',
    value: function setMaxParticles(maxParticles) {

      this._maxParticles = maxParticles;
    }
  }, {
    key: 'getMaxParticles',
    value: function getMaxParticles() {

      return this._maxParticles;
    }

    ///////////////////////////////////////////////////////////////////
    // Returns object by id
    //
    ///////////////////////////////////////////////////////////////////

  }, {
    key: 'getObjectById',
    value: function getObjectById(id) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {

        for (var _iterator = (0, _getIterator3.default)(this._emitters), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var emitter = _step.value;

          if (emitter.getId() === id) {
            return emitter;
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

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = (0, _getIterator3.default)(this._fields), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var field = _step2.value;

          if (field.getId() === id) {
            return field;
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

      return null;
    }

    ///////////////////////////////////////////////////////////////////
    // Returns emitter by id
    //
    ///////////////////////////////////////////////////////////////////

  }, {
    key: 'getEmitter',
    value: function getEmitter(id) {
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {

        for (var _iterator3 = (0, _getIterator3.default)(this._emitters), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var emitter = _step3.value;

          if (emitter.getId() === id) {
            return emitter;
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

      return null;
    }

    ///////////////////////////////////////////////////////////////////
    // Returns magnetic field by id
    //
    ///////////////////////////////////////////////////////////////////

  }, {
    key: 'getMagneticField',
    value: function getMagneticField(id) {
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {

        for (var _iterator4 = (0, _getIterator3.default)(this._fields), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var field = _step4.value;

          if (field.getId() === id) {
            return field;
          }
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4.return) {
            _iterator4.return();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }

      return null;
    }

    ///////////////////////////////////////////////////////////////////
    //
    //
    ///////////////////////////////////////////////////////////////////

  }, {
    key: 'setDof',
    value: function setDof(x, y, z) {

      this._dof = new _Vector2.default(x, y, z);
    }

    ///////////////////////////////////////////////////////////////////
    // clean up all objects
    //
    ///////////////////////////////////////////////////////////////////

  }, {
    key: 'destroy',
    value: function destroy() {

      this._recycleBin = [];

      this._particles = [];
    }

    ///////////////////////////////////////////////////////////////////
    // Adds emitter object
    //
    ///////////////////////////////////////////////////////////////////

  }, {
    key: 'addEmitter',
    value: function addEmitter(id) {

      var emitter = new _ParticleEmitter2.default(id);

      this._emitters.push(emitter);

      return emitter;
    }

    ///////////////////////////////////////////////////////////////////
    // Adds magnetic field object
    //
    ///////////////////////////////////////////////////////////////////

  }, {
    key: 'addMagneticField',
    value: function addMagneticField(id) {

      var field = new _MagneticField2.default(id);

      this._fields.push(field);

      return field;
    }

    ///////////////////////////////////////////////////////////////////
    // updates simulation
    //
    ///////////////////////////////////////////////////////////////////

  }, {
    key: 'step',
    value: function step(dt) {

      this.addNewParticles(dt);
      this.filterParticles(dt);
    }

    ///////////////////////////////////////////////////////////////////
    // add new particles step
    //
    ///////////////////////////////////////////////////////////////////

  }, {
    key: 'addNewParticles',
    value: function addNewParticles(dt) {
      var _this2 = this;

      this._emitters.forEach(function (emitter) {

        for (var i = 0; i < emitter.emitNumber(dt); ++i) {

          var particle = _this2.popRecycle();

          if (particle) {

            emitter.emitParticle(particle);
          }
        }
      });
    }

    ///////////////////////////////////////////////////////////////////
    // push a particle to recycle bin
    //
    ///////////////////////////////////////////////////////////////////

  }, {
    key: 'pushRecycle',
    value: function pushRecycle(particle) {

      --this._emittedParticles;

      particle._recycled = true;

      this._recycleBin.push(particle);
    }

    ///////////////////////////////////////////////////////////////////
    // pop a particle from recycle bin
    //
    ///////////////////////////////////////////////////////////////////

  }, {
    key: 'popRecycle',
    value: function popRecycle() {

      if (this._emittedParticles > this._maxParticles - 1) {
        return null;
      }

      ++this._emittedParticles;

      var particle = this._recycleBin.pop();

      if (particle) {

        particle.reset();

        return particle;
      }

      particle = new _Particle2.default(this._dof);

      this._particles.push(particle);

      return particle;
    }

    ///////////////////////////////////////////////////////////////////
    // filter particles using lifeTime
    //
    ///////////////////////////////////////////////////////////////////

  }, {
    key: 'filterParticle',
    value: function filterParticle(particle) {

      if (particle._recycled) {

        return true;
      }

      if (particle._lifeTime < 0) {

        this.pushRecycle(particle);

        return true;
      }

      return false;
    }

    ///////////////////////////////////////////////////////////////////
    // filter particles step
    //
    ///////////////////////////////////////////////////////////////////

  }, {
    key: 'filterParticles',
    value: function filterParticles(dt) {
      var _this3 = this;

      this._particles.forEach(function (particle) {

        if (!_this3.filterParticle(particle)) {

          particle.submitToFields(_this3._fields);

          particle.step(dt);
        }
      });
    }

    ///////////////////////////////////////////////////////////////////
    // initialize particle index
    //
    ///////////////////////////////////////////////////////////////////

  }, {
    key: 'initParticleLoop',
    value: function initParticleLoop() {

      this._particleIdx = 0;
    }

    ///////////////////////////////////////////////////////////////////
    // initialize particule index
    //
    ///////////////////////////////////////////////////////////////////

  }, {
    key: 'nextParticle',
    value: function nextParticle() {

      if (this._particleIdx < this._particles.length) {

        return this._particles[this._particleIdx++];
      }

      return { ptr: 0 //compatibility with asm.js/wasm
      };
    }
  }]);
  return ParticleSystem;
}(_EventsEmitter3.default);

exports.default = ParticleSystem;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "ParticleSystem.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1562:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1620)
module.exports.color = __webpack_require__(1619)

/***/ }),

/***/ 1592:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(1724);

exports.default = 'Viewing.Extension.Particle';

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1619:
/***/ (function(module, exports) {

/**
 * dat-gui JavaScript Controller Library
 * http://code.google.com/p/dat-gui
 *
 * Copyright 2011 Data Arts Team, Google Creative Lab
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 */

/** @namespace */
var dat = module.exports = dat || {};

/** @namespace */
dat.color = dat.color || {};

/** @namespace */
dat.utils = dat.utils || {};

dat.utils.common = (function () {
  
  var ARR_EACH = Array.prototype.forEach;
  var ARR_SLICE = Array.prototype.slice;

  /**
   * Band-aid methods for things that should be a lot easier in JavaScript.
   * Implementation and structure inspired by underscore.js
   * http://documentcloud.github.com/underscore/
   */

  return { 
    
    BREAK: {},
  
    extend: function(target) {
      
      this.each(ARR_SLICE.call(arguments, 1), function(obj) {
        
        for (var key in obj)
          if (!this.isUndefined(obj[key])) 
            target[key] = obj[key];
        
      }, this);
      
      return target;
      
    },
    
    defaults: function(target) {
      
      this.each(ARR_SLICE.call(arguments, 1), function(obj) {
        
        for (var key in obj)
          if (this.isUndefined(target[key])) 
            target[key] = obj[key];
        
      }, this);
      
      return target;
    
    },
    
    compose: function() {
      var toCall = ARR_SLICE.call(arguments);
            return function() {
              var args = ARR_SLICE.call(arguments);
              for (var i = toCall.length -1; i >= 0; i--) {
                args = [toCall[i].apply(this, args)];
              }
              return args[0];
            }
    },
    
    each: function(obj, itr, scope) {

      
      if (ARR_EACH && obj.forEach === ARR_EACH) { 
        
        obj.forEach(itr, scope);
        
      } else if (obj.length === obj.length + 0) { // Is number but not NaN
        
        for (var key = 0, l = obj.length; key < l; key++)
          if (key in obj && itr.call(scope, obj[key], key) === this.BREAK) 
            return;
            
      } else {

        for (var key in obj) 
          if (itr.call(scope, obj[key], key) === this.BREAK)
            return;
            
      }
            
    },
    
    defer: function(fnc) {
      setTimeout(fnc, 0);
    },
    
    toArray: function(obj) {
      if (obj.toArray) return obj.toArray();
      return ARR_SLICE.call(obj);
    },

    isUndefined: function(obj) {
      return obj === undefined;
    },
    
    isNull: function(obj) {
      return obj === null;
    },
    
    isNaN: function(obj) {
      return obj !== obj;
    },
    
    isArray: Array.isArray || function(obj) {
      return obj.constructor === Array;
    },
    
    isObject: function(obj) {
      return obj === Object(obj);
    },
    
    isNumber: function(obj) {
      return obj === obj+0;
    },
    
    isString: function(obj) {
      return obj === obj+'';
    },
    
    isBoolean: function(obj) {
      return obj === false || obj === true;
    },
    
    isFunction: function(obj) {
      return Object.prototype.toString.call(obj) === '[object Function]';
    }
  
  };
    
})();


dat.color.toString = (function (common) {

  return function(color) {

    if (color.a == 1 || common.isUndefined(color.a)) {

      var s = color.hex.toString(16);
      while (s.length < 6) {
        s = '0' + s;
      }

      return '#' + s;

    } else {

      return 'rgba(' + Math.round(color.r) + ',' + Math.round(color.g) + ',' + Math.round(color.b) + ',' + color.a + ')';

    }

  }

})(dat.utils.common);


dat.Color = dat.color.Color = (function (interpret, math, toString, common) {

  var Color = function() {

    this.__state = interpret.apply(this, arguments);

    if (this.__state === false) {
      throw 'Failed to interpret color arguments';
    }

    this.__state.a = this.__state.a || 1;


  };

  Color.COMPONENTS = ['r','g','b','h','s','v','hex','a'];

  common.extend(Color.prototype, {

    toString: function() {
      return toString(this);
    },

    toOriginal: function() {
      return this.__state.conversion.write(this);
    }

  });

  defineRGBComponent(Color.prototype, 'r', 2);
  defineRGBComponent(Color.prototype, 'g', 1);
  defineRGBComponent(Color.prototype, 'b', 0);

  defineHSVComponent(Color.prototype, 'h');
  defineHSVComponent(Color.prototype, 's');
  defineHSVComponent(Color.prototype, 'v');

  Object.defineProperty(Color.prototype, 'a', {

    get: function() {
      return this.__state.a;
    },

    set: function(v) {
      this.__state.a = v;
    }

  });

  Object.defineProperty(Color.prototype, 'hex', {

    get: function() {

      if (!this.__state.space !== 'HEX') {
        this.__state.hex = math.rgb_to_hex(this.r, this.g, this.b);
      }

      return this.__state.hex;

    },

    set: function(v) {

      this.__state.space = 'HEX';
      this.__state.hex = v;

    }

  });

  function defineRGBComponent(target, component, componentHexIndex) {

    Object.defineProperty(target, component, {

      get: function() {

        if (this.__state.space === 'RGB') {
          return this.__state[component];
        }

        recalculateRGB(this, component, componentHexIndex);

        return this.__state[component];

      },

      set: function(v) {

        if (this.__state.space !== 'RGB') {
          recalculateRGB(this, component, componentHexIndex);
          this.__state.space = 'RGB';
        }

        this.__state[component] = v;

      }

    });

  }

  function defineHSVComponent(target, component) {

    Object.defineProperty(target, component, {

      get: function() {

        if (this.__state.space === 'HSV')
          return this.__state[component];

        recalculateHSV(this);

        return this.__state[component];

      },

      set: function(v) {

        if (this.__state.space !== 'HSV') {
          recalculateHSV(this);
          this.__state.space = 'HSV';
        }

        this.__state[component] = v;

      }

    });

  }

  function recalculateRGB(color, component, componentHexIndex) {

    if (color.__state.space === 'HEX') {

      color.__state[component] = math.component_from_hex(color.__state.hex, componentHexIndex);

    } else if (color.__state.space === 'HSV') {

      common.extend(color.__state, math.hsv_to_rgb(color.__state.h, color.__state.s, color.__state.v));

    } else {

      throw 'Corrupted color state';

    }

  }

  function recalculateHSV(color) {

    var result = math.rgb_to_hsv(color.r, color.g, color.b);

    common.extend(color.__state,
        {
          s: result.s,
          v: result.v
        }
    );

    if (!common.isNaN(result.h)) {
      color.__state.h = result.h;
    } else if (common.isUndefined(color.__state.h)) {
      color.__state.h = 0;
    }

  }

  return Color;

})(dat.color.interpret = (function (toString, common) {

  var result, toReturn;

  var interpret = function() {

    toReturn = false;

    var original = arguments.length > 1 ? common.toArray(arguments) : arguments[0];

    common.each(INTERPRETATIONS, function(family) {

      if (family.litmus(original)) {

        common.each(family.conversions, function(conversion, conversionName) {

          result = conversion.read(original);

          if (toReturn === false && result !== false) {
            toReturn = result;
            result.conversionName = conversionName;
            result.conversion = conversion;
            return common.BREAK;

          }

        });

        return common.BREAK;

      }

    });

    return toReturn;

  };

  var INTERPRETATIONS = [

    // Strings
    {

      litmus: common.isString,

      conversions: {

        THREE_CHAR_HEX: {

          read: function(original) {

            var test = original.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);
            if (test === null) return false;

            return {
              space: 'HEX',
              hex: parseInt(
                  '0x' +
                      test[1].toString() + test[1].toString() +
                      test[2].toString() + test[2].toString() +
                      test[3].toString() + test[3].toString())
            };

          },

          write: toString

        },

        SIX_CHAR_HEX: {

          read: function(original) {

            var test = original.match(/^#([A-F0-9]{6})$/i);
            if (test === null) return false;

            return {
              space: 'HEX',
              hex: parseInt('0x' + test[1].toString())
            };

          },

          write: toString

        },

        CSS_RGB: {

          read: function(original) {

            var test = original.match(/^rgb\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);
            if (test === null) return false;

            return {
              space: 'RGB',
              r: parseFloat(test[1]),
              g: parseFloat(test[2]),
              b: parseFloat(test[3])
            };

          },

          write: toString

        },

        CSS_RGBA: {

          read: function(original) {

            var test = original.match(/^rgba\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\,\s*(.+)\s*\)/);
            if (test === null) return false;

            return {
              space: 'RGB',
              r: parseFloat(test[1]),
              g: parseFloat(test[2]),
              b: parseFloat(test[3]),
              a: parseFloat(test[4])
            };

          },

          write: toString

        }

      }

    },

    // Numbers
    {

      litmus: common.isNumber,

      conversions: {

        HEX: {
          read: function(original) {
            return {
              space: 'HEX',
              hex: original,
              conversionName: 'HEX'
            }
          },

          write: function(color) {
            return color.hex;
          }
        }

      }

    },

    // Arrays
    {

      litmus: common.isArray,

      conversions: {

        RGB_ARRAY: {
          read: function(original) {
            if (original.length != 3) return false;
            return {
              space: 'RGB',
              r: original[0],
              g: original[1],
              b: original[2]
            };
          },

          write: function(color) {
            return [color.r, color.g, color.b];
          }

        },

        RGBA_ARRAY: {
          read: function(original) {
            if (original.length != 4) return false;
            return {
              space: 'RGB',
              r: original[0],
              g: original[1],
              b: original[2],
              a: original[3]
            };
          },

          write: function(color) {
            return [color.r, color.g, color.b, color.a];
          }

        }

      }

    },

    // Objects
    {

      litmus: common.isObject,

      conversions: {

        RGBA_OBJ: {
          read: function(original) {
            if (common.isNumber(original.r) &&
                common.isNumber(original.g) &&
                common.isNumber(original.b) &&
                common.isNumber(original.a)) {
              return {
                space: 'RGB',
                r: original.r,
                g: original.g,
                b: original.b,
                a: original.a
              }
            }
            return false;
          },

          write: function(color) {
            return {
              r: color.r,
              g: color.g,
              b: color.b,
              a: color.a
            }
          }
        },

        RGB_OBJ: {
          read: function(original) {
            if (common.isNumber(original.r) &&
                common.isNumber(original.g) &&
                common.isNumber(original.b)) {
              return {
                space: 'RGB',
                r: original.r,
                g: original.g,
                b: original.b
              }
            }
            return false;
          },

          write: function(color) {
            return {
              r: color.r,
              g: color.g,
              b: color.b
            }
          }
        },

        HSVA_OBJ: {
          read: function(original) {
            if (common.isNumber(original.h) &&
                common.isNumber(original.s) &&
                common.isNumber(original.v) &&
                common.isNumber(original.a)) {
              return {
                space: 'HSV',
                h: original.h,
                s: original.s,
                v: original.v,
                a: original.a
              }
            }
            return false;
          },

          write: function(color) {
            return {
              h: color.h,
              s: color.s,
              v: color.v,
              a: color.a
            }
          }
        },

        HSV_OBJ: {
          read: function(original) {
            if (common.isNumber(original.h) &&
                common.isNumber(original.s) &&
                common.isNumber(original.v)) {
              return {
                space: 'HSV',
                h: original.h,
                s: original.s,
                v: original.v
              }
            }
            return false;
          },

          write: function(color) {
            return {
              h: color.h,
              s: color.s,
              v: color.v
            }
          }

        }

      }

    }


  ];

  return interpret;


})(dat.color.toString,
dat.utils.common),
dat.color.math = (function () {

  var tmpComponent;

  return {

    hsv_to_rgb: function(h, s, v) {

      var hi = Math.floor(h / 60) % 6;

      var f = h / 60 - Math.floor(h / 60);
      var p = v * (1.0 - s);
      var q = v * (1.0 - (f * s));
      var t = v * (1.0 - ((1.0 - f) * s));
      var c = [
        [v, t, p],
        [q, v, p],
        [p, v, t],
        [p, q, v],
        [t, p, v],
        [v, p, q]
      ][hi];

      return {
        r: c[0] * 255,
        g: c[1] * 255,
        b: c[2] * 255
      };

    },

    rgb_to_hsv: function(r, g, b) {

      var min = Math.min(r, g, b),
          max = Math.max(r, g, b),
          delta = max - min,
          h, s;

      if (max != 0) {
        s = delta / max;
      } else {
        return {
          h: NaN,
          s: 0,
          v: 0
        };
      }

      if (r == max) {
        h = (g - b) / delta;
      } else if (g == max) {
        h = 2 + (b - r) / delta;
      } else {
        h = 4 + (r - g) / delta;
      }
      h /= 6;
      if (h < 0) {
        h += 1;
      }

      return {
        h: h * 360,
        s: s,
        v: max / 255
      };
    },

    rgb_to_hex: function(r, g, b) {
      var hex = this.hex_with_component(0, 2, r);
      hex = this.hex_with_component(hex, 1, g);
      hex = this.hex_with_component(hex, 0, b);
      return hex;
    },

    component_from_hex: function(hex, componentIndex) {
      return (hex >> (componentIndex * 8)) & 0xFF;
    },

    hex_with_component: function(hex, componentIndex, value) {
      return value << (tmpComponent = componentIndex * 8) | (hex & ~ (0xFF << tmpComponent));
    }

  }

})(),
dat.color.toString,
dat.utils.common);

/***/ }),

/***/ 1620:
/***/ (function(module, exports) {

/**
 * dat-gui JavaScript Controller Library
 * http://code.google.com/p/dat-gui
 *
 * Copyright 2011 Data Arts Team, Google Creative Lab
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 */

/** @namespace */
var dat = module.exports = dat || {};

/** @namespace */
dat.gui = dat.gui || {};

/** @namespace */
dat.utils = dat.utils || {};

/** @namespace */
dat.controllers = dat.controllers || {};

/** @namespace */
dat.dom = dat.dom || {};

/** @namespace */
dat.color = dat.color || {};

dat.utils.css = (function () {
  return {
    load: function (url, doc) {
      doc = doc || document;
      var link = doc.createElement('link');
      link.type = 'text/css';
      link.rel = 'stylesheet';
      link.href = url;
      doc.getElementsByTagName('head')[0].appendChild(link);
    },
    inject: function(css, doc) {
      doc = doc || document;
      var injected = document.createElement('style');
      injected.type = 'text/css';
      injected.innerHTML = css;
      doc.getElementsByTagName('head')[0].appendChild(injected);
    }
  }
})();


dat.utils.common = (function () {
  
  var ARR_EACH = Array.prototype.forEach;
  var ARR_SLICE = Array.prototype.slice;

  /**
   * Band-aid methods for things that should be a lot easier in JavaScript.
   * Implementation and structure inspired by underscore.js
   * http://documentcloud.github.com/underscore/
   */

  return { 
    
    BREAK: {},
  
    extend: function(target) {
      
      this.each(ARR_SLICE.call(arguments, 1), function(obj) {
        
        for (var key in obj)
          if (!this.isUndefined(obj[key])) 
            target[key] = obj[key];
        
      }, this);
      
      return target;
      
    },
    
    defaults: function(target) {
      
      this.each(ARR_SLICE.call(arguments, 1), function(obj) {
        
        for (var key in obj)
          if (this.isUndefined(target[key])) 
            target[key] = obj[key];
        
      }, this);
      
      return target;
    
    },
    
    compose: function() {
      var toCall = ARR_SLICE.call(arguments);
            return function() {
              var args = ARR_SLICE.call(arguments);
              for (var i = toCall.length -1; i >= 0; i--) {
                args = [toCall[i].apply(this, args)];
              }
              return args[0];
            }
    },
    
    each: function(obj, itr, scope) {

      
      if (ARR_EACH && obj.forEach === ARR_EACH) { 
        
        obj.forEach(itr, scope);
        
      } else if (obj.length === obj.length + 0) { // Is number but not NaN
        
        for (var key = 0, l = obj.length; key < l; key++)
          if (key in obj && itr.call(scope, obj[key], key) === this.BREAK) 
            return;
            
      } else {

        for (var key in obj) 
          if (itr.call(scope, obj[key], key) === this.BREAK)
            return;
            
      }
            
    },
    
    defer: function(fnc) {
      setTimeout(fnc, 0);
    },
    
    toArray: function(obj) {
      if (obj.toArray) return obj.toArray();
      return ARR_SLICE.call(obj);
    },

    isUndefined: function(obj) {
      return obj === undefined;
    },
    
    isNull: function(obj) {
      return obj === null;
    },
    
    isNaN: function(obj) {
      return obj !== obj;
    },
    
    isArray: Array.isArray || function(obj) {
      return obj.constructor === Array;
    },
    
    isObject: function(obj) {
      return obj === Object(obj);
    },
    
    isNumber: function(obj) {
      return obj === obj+0;
    },
    
    isString: function(obj) {
      return obj === obj+'';
    },
    
    isBoolean: function(obj) {
      return obj === false || obj === true;
    },
    
    isFunction: function(obj) {
      return Object.prototype.toString.call(obj) === '[object Function]';
    }
  
  };
    
})();


dat.controllers.Controller = (function (common) {

  /**
   * @class An "abstract" class that represents a given property of an object.
   *
   * @param {Object} object The object to be manipulated
   * @param {string} property The name of the property to be manipulated
   *
   * @member dat.controllers
   */
  var Controller = function(object, property) {

    this.initialValue = object[property];

    /**
     * Those who extend this class will put their DOM elements in here.
     * @type {DOMElement}
     */
    this.domElement = document.createElement('div');

    /**
     * The object to manipulate
     * @type {Object}
     */
    this.object = object;

    /**
     * The name of the property to manipulate
     * @type {String}
     */
    this.property = property;

    /**
     * The function to be called on change.
     * @type {Function}
     * @ignore
     */
    this.__onChange = undefined;

    /**
     * The function to be called on finishing change.
     * @type {Function}
     * @ignore
     */
    this.__onFinishChange = undefined;

  };

  common.extend(

      Controller.prototype,

      /** @lends dat.controllers.Controller.prototype */
      {

        /**
         * Specify that a function fire every time someone changes the value with
         * this Controller.
         *
         * @param {Function} fnc This function will be called whenever the value
         * is modified via this Controller.
         * @returns {dat.controllers.Controller} this
         */
        onChange: function(fnc) {
          this.__onChange = fnc;
          return this;
        },

        /**
         * Specify that a function fire every time someone "finishes" changing
         * the value wih this Controller. Useful for values that change
         * incrementally like numbers or strings.
         *
         * @param {Function} fnc This function will be called whenever
         * someone "finishes" changing the value via this Controller.
         * @returns {dat.controllers.Controller} this
         */
        onFinishChange: function(fnc) {
          this.__onFinishChange = fnc;
          return this;
        },

        /**
         * Change the value of <code>object[property]</code>
         *
         * @param {Object} newValue The new value of <code>object[property]</code>
         */
        setValue: function(newValue) {
          this.object[this.property] = newValue;
          if (this.__onChange) {
            this.__onChange.call(this, newValue);
          }
          this.updateDisplay();
          return this;
        },

        /**
         * Gets the value of <code>object[property]</code>
         *
         * @returns {Object} The current value of <code>object[property]</code>
         */
        getValue: function() {
          return this.object[this.property];
        },

        /**
         * Refreshes the visual display of a Controller in order to keep sync
         * with the object's current value.
         * @returns {dat.controllers.Controller} this
         */
        updateDisplay: function() {
          return this;
        },

        /**
         * @returns {Boolean} true if the value has deviated from initialValue
         */
        isModified: function() {
          return this.initialValue !== this.getValue()
        }

      }

  );

  return Controller;


})(dat.utils.common);


dat.dom.dom = (function (common) {

  var EVENT_MAP = {
    'HTMLEvents': ['change'],
    'MouseEvents': ['click','mousemove','mousedown','mouseup', 'mouseover'],
    'KeyboardEvents': ['keydown']
  };

  var EVENT_MAP_INV = {};
  common.each(EVENT_MAP, function(v, k) {
    common.each(v, function(e) {
      EVENT_MAP_INV[e] = k;
    });
  });

  var CSS_VALUE_PIXELS = /(\d+(\.\d+)?)px/;

  function cssValueToPixels(val) {

    if (val === '0' || common.isUndefined(val)) return 0;

    var match = val.match(CSS_VALUE_PIXELS);

    if (!common.isNull(match)) {
      return parseFloat(match[1]);
    }

    // TODO ...ems? %?

    return 0;

  }

  /**
   * @namespace
   * @member dat.dom
   */
  var dom = {

    /**
     * 
     * @param elem
     * @param selectable
     */
    makeSelectable: function(elem, selectable) {

      if (elem === undefined || elem.style === undefined) return;

      elem.onselectstart = selectable ? function() {
        return false;
      } : function() {
      };

      elem.style.MozUserSelect = selectable ? 'auto' : 'none';
      elem.style.KhtmlUserSelect = selectable ? 'auto' : 'none';
      elem.unselectable = selectable ? 'on' : 'off';

    },

    /**
     *
     * @param elem
     * @param horizontal
     * @param vertical
     */
    makeFullscreen: function(elem, horizontal, vertical) {

      if (common.isUndefined(horizontal)) horizontal = true;
      if (common.isUndefined(vertical)) vertical = true;

      elem.style.position = 'absolute';

      if (horizontal) {
        elem.style.left = 0;
        elem.style.right = 0;
      }
      if (vertical) {
        elem.style.top = 0;
        elem.style.bottom = 0;
      }

    },

    /**
     *
     * @param elem
     * @param eventType
     * @param params
     */
    fakeEvent: function(elem, eventType, params, aux) {
      params = params || {};
      var className = EVENT_MAP_INV[eventType];
      if (!className) {
        throw new Error('Event type ' + eventType + ' not supported.');
      }
      var evt = document.createEvent(className);
      switch (className) {
        case 'MouseEvents':
          var clientX = params.x || params.clientX || 0;
          var clientY = params.y || params.clientY || 0;
          evt.initMouseEvent(eventType, params.bubbles || false,
              params.cancelable || true, window, params.clickCount || 1,
              0, //screen X
              0, //screen Y
              clientX, //client X
              clientY, //client Y
              false, false, false, false, 0, null);
          break;
        case 'KeyboardEvents':
          var init = evt.initKeyboardEvent || evt.initKeyEvent; // webkit || moz
          common.defaults(params, {
            cancelable: true,
            ctrlKey: false,
            altKey: false,
            shiftKey: false,
            metaKey: false,
            keyCode: undefined,
            charCode: undefined
          });
          init(eventType, params.bubbles || false,
              params.cancelable, window,
              params.ctrlKey, params.altKey,
              params.shiftKey, params.metaKey,
              params.keyCode, params.charCode);
          break;
        default:
          evt.initEvent(eventType, params.bubbles || false,
              params.cancelable || true);
          break;
      }
      common.defaults(evt, aux);
      elem.dispatchEvent(evt);
    },

    /**
     *
     * @param elem
     * @param event
     * @param func
     * @param bool
     */
    bind: function(elem, event, func, bool) {
      bool = bool || false;
      if (elem.addEventListener)
        elem.addEventListener(event, func, bool);
      else if (elem.attachEvent)
        elem.attachEvent('on' + event, func);
      return dom;
    },

    /**
     *
     * @param elem
     * @param event
     * @param func
     * @param bool
     */
    unbind: function(elem, event, func, bool) {
      bool = bool || false;
      if (elem.removeEventListener)
        elem.removeEventListener(event, func, bool);
      else if (elem.detachEvent)
        elem.detachEvent('on' + event, func);
      return dom;
    },

    /**
     *
     * @param elem
     * @param className
     */
    addClass: function(elem, className) {
      if (elem.className === undefined) {
        elem.className = className;
      } else if (elem.className !== className) {
        var classes = elem.className.split(/ +/);
        if (classes.indexOf(className) == -1) {
          classes.push(className);
          elem.className = classes.join(' ').replace(/^\s+/, '').replace(/\s+$/, '');
        }
      }
      return dom;
    },

    /**
     *
     * @param elem
     * @param className
     */
    removeClass: function(elem, className) {
      if (className) {
        if (elem.className === undefined) {
          // elem.className = className;
        } else if (elem.className === className) {
          elem.removeAttribute('class');
        } else {
          var classes = elem.className.split(/ +/);
          var index = classes.indexOf(className);
          if (index != -1) {
            classes.splice(index, 1);
            elem.className = classes.join(' ');
          }
        }
      } else {
        elem.className = undefined;
      }
      return dom;
    },

    hasClass: function(elem, className) {
      return new RegExp('(?:^|\\s+)' + className + '(?:\\s+|$)').test(elem.className) || false;
    },

    /**
     *
     * @param elem
     */
    getWidth: function(elem) {

      var style = getComputedStyle(elem);

      return cssValueToPixels(style['border-left-width']) +
          cssValueToPixels(style['border-right-width']) +
          cssValueToPixels(style['padding-left']) +
          cssValueToPixels(style['padding-right']) +
          cssValueToPixels(style['width']);
    },

    /**
     *
     * @param elem
     */
    getHeight: function(elem) {

      var style = getComputedStyle(elem);

      return cssValueToPixels(style['border-top-width']) +
          cssValueToPixels(style['border-bottom-width']) +
          cssValueToPixels(style['padding-top']) +
          cssValueToPixels(style['padding-bottom']) +
          cssValueToPixels(style['height']);
    },

    /**
     *
     * @param elem
     */
    getOffset: function(elem) {
      var offset = {left: 0, top:0};
      if (elem.offsetParent) {
        do {
          offset.left += elem.offsetLeft;
          offset.top += elem.offsetTop;
        } while (elem = elem.offsetParent);
      }
      return offset;
    },

    // http://stackoverflow.com/posts/2684561/revisions
    /**
     * 
     * @param elem
     */
    isActive: function(elem) {
      return elem === document.activeElement && ( elem.type || elem.href );
    }

  };

  return dom;

})(dat.utils.common);


dat.controllers.OptionController = (function (Controller, dom, common) {

  /**
   * @class Provides a select input to alter the property of an object, using a
   * list of accepted values.
   *
   * @extends dat.controllers.Controller
   *
   * @param {Object} object The object to be manipulated
   * @param {string} property The name of the property to be manipulated
   * @param {Object|string[]} options A map of labels to acceptable values, or
   * a list of acceptable string values.
   *
   * @member dat.controllers
   */
  var OptionController = function(object, property, options) {

    OptionController.superclass.call(this, object, property);

    var _this = this;

    /**
     * The drop down menu
     * @ignore
     */
    this.__select = document.createElement('select');

    if (common.isArray(options)) {
      var map = {};
      common.each(options, function(element) {
        map[element] = element;
      });
      options = map;
    }

    common.each(options, function(value, key) {

      var opt = document.createElement('option');
      opt.innerHTML = key;
      opt.setAttribute('value', value);
      _this.__select.appendChild(opt);

    });

    // Acknowledge original value
    this.updateDisplay();

    dom.bind(this.__select, 'change', function() {
      var desiredValue = this.options[this.selectedIndex].value;
      _this.setValue(desiredValue);
    });

    this.domElement.appendChild(this.__select);

  };

  OptionController.superclass = Controller;

  common.extend(

      OptionController.prototype,
      Controller.prototype,

      {

        setValue: function(v) {
          var toReturn = OptionController.superclass.prototype.setValue.call(this, v);
          if (this.__onFinishChange) {
            this.__onFinishChange.call(this, this.getValue());
          }
          return toReturn;
        },

        updateDisplay: function() {
          this.__select.value = this.getValue();
          return OptionController.superclass.prototype.updateDisplay.call(this);
        }

      }

  );

  return OptionController;

})(dat.controllers.Controller,
dat.dom.dom,
dat.utils.common);


dat.controllers.NumberController = (function (Controller, common) {

  /**
   * @class Represents a given property of an object that is a number.
   *
   * @extends dat.controllers.Controller
   *
   * @param {Object} object The object to be manipulated
   * @param {string} property The name of the property to be manipulated
   * @param {Object} [params] Optional parameters
   * @param {Number} [params.min] Minimum allowed value
   * @param {Number} [params.max] Maximum allowed value
   * @param {Number} [params.step] Increment by which to change value
   *
   * @member dat.controllers
   */
  var NumberController = function(object, property, params) {

    NumberController.superclass.call(this, object, property);

    params = params || {};

    this.__min = params.min;
    this.__max = params.max;
    this.__step = params.step;

    if (common.isUndefined(this.__step)) {

      if (this.initialValue == 0) {
        this.__impliedStep = 1; // What are we, psychics?
      } else {
        // Hey Doug, check this out.
        this.__impliedStep = Math.pow(10, Math.floor(Math.log(this.initialValue)/Math.LN10))/10;
      }

    } else {

      this.__impliedStep = this.__step;

    }

    this.__precision = numDecimals(this.__impliedStep);


  };

  NumberController.superclass = Controller;

  common.extend(

      NumberController.prototype,
      Controller.prototype,

      /** @lends dat.controllers.NumberController.prototype */
      {

        setValue: function(v) {

          if (this.__min !== undefined && v < this.__min) {
            v = this.__min;
          } else if (this.__max !== undefined && v > this.__max) {
            v = this.__max;
          }

          if (this.__step !== undefined && v % this.__step != 0) {
            v = Math.round(v / this.__step) * this.__step;
          }

          return NumberController.superclass.prototype.setValue.call(this, v);

        },

        /**
         * Specify a minimum value for <code>object[property]</code>.
         *
         * @param {Number} minValue The minimum value for
         * <code>object[property]</code>
         * @returns {dat.controllers.NumberController} this
         */
        min: function(v) {
          this.__min = v;
          return this;
        },

        /**
         * Specify a maximum value for <code>object[property]</code>.
         *
         * @param {Number} maxValue The maximum value for
         * <code>object[property]</code>
         * @returns {dat.controllers.NumberController} this
         */
        max: function(v) {
          this.__max = v;
          return this;
        },

        /**
         * Specify a step value that dat.controllers.NumberController
         * increments by.
         *
         * @param {Number} stepValue The step value for
         * dat.controllers.NumberController
         * @default if minimum and maximum specified increment is 1% of the
         * difference otherwise stepValue is 1
         * @returns {dat.controllers.NumberController} this
         */
        step: function(v) {
          this.__step = v;
          return this;
        }

      }

  );

  function numDecimals(x) {
    x = x.toString();
    if (x.indexOf('.') > -1) {
      return x.length - x.indexOf('.') - 1;
    } else {
      return 0;
    }
  }

  return NumberController;

})(dat.controllers.Controller,
dat.utils.common);


dat.controllers.NumberControllerBox = (function (NumberController, dom, common) {

  /**
   * @class Represents a given property of an object that is a number and
   * provides an input element with which to manipulate it.
   *
   * @extends dat.controllers.Controller
   * @extends dat.controllers.NumberController
   *
   * @param {Object} object The object to be manipulated
   * @param {string} property The name of the property to be manipulated
   * @param {Object} [params] Optional parameters
   * @param {Number} [params.min] Minimum allowed value
   * @param {Number} [params.max] Maximum allowed value
   * @param {Number} [params.step] Increment by which to change value
   *
   * @member dat.controllers
   */
  var NumberControllerBox = function(object, property, params) {

    this.__truncationSuspended = false;

    NumberControllerBox.superclass.call(this, object, property, params);

    var _this = this;

    /**
     * {Number} Previous mouse y position
     * @ignore
     */
    var prev_y;

    this.__input = document.createElement('input');
    this.__input.setAttribute('type', 'text');

    // Makes it so manually specified values are not truncated.

    dom.bind(this.__input, 'change', onChange);
    dom.bind(this.__input, 'blur', onBlur);
    dom.bind(this.__input, 'mousedown', onMouseDown);
    dom.bind(this.__input, 'keydown', function(e) {

      // When pressing entire, you can be as precise as you want.
      if (e.keyCode === 13) {
        _this.__truncationSuspended = true;
        this.blur();
        _this.__truncationSuspended = false;
      }

    });

    function onChange() {
      var attempted = parseFloat(_this.__input.value);
      if (!common.isNaN(attempted)) _this.setValue(attempted);
    }

    function onBlur() {
      onChange();
      if (_this.__onFinishChange) {
        _this.__onFinishChange.call(_this, _this.getValue());
      }
    }

    function onMouseDown(e) {
      dom.bind(window, 'mousemove', onMouseDrag);
      dom.bind(window, 'mouseup', onMouseUp);
      prev_y = e.clientY;
    }

    function onMouseDrag(e) {

      var diff = prev_y - e.clientY;
      _this.setValue(_this.getValue() + diff * _this.__impliedStep);

      prev_y = e.clientY;

    }

    function onMouseUp() {
      dom.unbind(window, 'mousemove', onMouseDrag);
      dom.unbind(window, 'mouseup', onMouseUp);
    }

    this.updateDisplay();

    this.domElement.appendChild(this.__input);

  };

  NumberControllerBox.superclass = NumberController;

  common.extend(

      NumberControllerBox.prototype,
      NumberController.prototype,

      {

        updateDisplay: function() {

          this.__input.value = this.__truncationSuspended ? this.getValue() : roundToDecimal(this.getValue(), this.__precision);
          return NumberControllerBox.superclass.prototype.updateDisplay.call(this);
        }

      }

  );

  function roundToDecimal(value, decimals) {
    var tenTo = Math.pow(10, decimals);
    return Math.round(value * tenTo) / tenTo;
  }

  return NumberControllerBox;

})(dat.controllers.NumberController,
dat.dom.dom,
dat.utils.common);


dat.controllers.NumberControllerSlider = (function (NumberController, dom, css, common, styleSheet) {

  /**
   * @class Represents a given property of an object that is a number, contains
   * a minimum and maximum, and provides a slider element with which to
   * manipulate it. It should be noted that the slider element is made up of
   * <code>&lt;div&gt;</code> tags, <strong>not</strong> the html5
   * <code>&lt;slider&gt;</code> element.
   *
   * @extends dat.controllers.Controller
   * @extends dat.controllers.NumberController
   * 
   * @param {Object} object The object to be manipulated
   * @param {string} property The name of the property to be manipulated
   * @param {Number} minValue Minimum allowed value
   * @param {Number} maxValue Maximum allowed value
   * @param {Number} stepValue Increment by which to change value
   *
   * @member dat.controllers
   */
  var NumberControllerSlider = function(object, property, min, max, step) {

    NumberControllerSlider.superclass.call(this, object, property, { min: min, max: max, step: step });

    var _this = this;

    this.__background = document.createElement('div');
    this.__foreground = document.createElement('div');
    


    dom.bind(this.__background, 'mousedown', onMouseDown);
    
    dom.addClass(this.__background, 'slider');
    dom.addClass(this.__foreground, 'slider-fg');

    function onMouseDown(e) {

      dom.bind(window, 'mousemove', onMouseDrag);
      dom.bind(window, 'mouseup', onMouseUp);

      onMouseDrag(e);
    }

    function onMouseDrag(e) {

      e.preventDefault();

      var offset = dom.getOffset(_this.__background);
      var width = dom.getWidth(_this.__background);
      
      _this.setValue(
        map(e.clientX, offset.left, offset.left + width, _this.__min, _this.__max)
      );

      return false;

    }

    function onMouseUp() {
      dom.unbind(window, 'mousemove', onMouseDrag);
      dom.unbind(window, 'mouseup', onMouseUp);
      if (_this.__onFinishChange) {
        _this.__onFinishChange.call(_this, _this.getValue());
      }
    }

    this.updateDisplay();

    this.__background.appendChild(this.__foreground);
    this.domElement.appendChild(this.__background);

  };

  NumberControllerSlider.superclass = NumberController;

  /**
   * Injects default stylesheet for slider elements.
   */
  NumberControllerSlider.useDefaultStyles = function() {
    css.inject(styleSheet);
  };

  common.extend(

      NumberControllerSlider.prototype,
      NumberController.prototype,

      {

        updateDisplay: function() {
          var pct = (this.getValue() - this.__min)/(this.__max - this.__min);
          this.__foreground.style.width = pct*100+'%';
          return NumberControllerSlider.superclass.prototype.updateDisplay.call(this);
        }

      }



  );

  function map(v, i1, i2, o1, o2) {
    return o1 + (o2 - o1) * ((v - i1) / (i2 - i1));
  }

  return NumberControllerSlider;
  
})(dat.controllers.NumberController,
dat.dom.dom,
dat.utils.css,
dat.utils.common,
".slider {\n  box-shadow: inset 0 2px 4px rgba(0,0,0,0.15);\n  height: 1em;\n  border-radius: 1em;\n  background-color: #eee;\n  padding: 0 0.5em;\n  overflow: hidden;\n}\n\n.slider-fg {\n  padding: 1px 0 2px 0;\n  background-color: #aaa;\n  height: 1em;\n  margin-left: -0.5em;\n  padding-right: 0.5em;\n  border-radius: 1em 0 0 1em;\n}\n\n.slider-fg:after {\n  display: inline-block;\n  border-radius: 1em;\n  background-color: #fff;\n  border:  1px solid #aaa;\n  content: '';\n  float: right;\n  margin-right: -1em;\n  margin-top: -1px;\n  height: 0.9em;\n  width: 0.9em;\n}");


dat.controllers.FunctionController = (function (Controller, dom, common) {

  /**
   * @class Provides a GUI interface to fire a specified method, a property of an object.
   *
   * @extends dat.controllers.Controller
   *
   * @param {Object} object The object to be manipulated
   * @param {string} property The name of the property to be manipulated
   *
   * @member dat.controllers
   */
  var FunctionController = function(object, property, text) {

    FunctionController.superclass.call(this, object, property);

    var _this = this;

    this.__button = document.createElement('div');
    this.__button.innerHTML = text === undefined ? 'Fire' : text;
    dom.bind(this.__button, 'click', function(e) {
      e.preventDefault();
      _this.fire();
      return false;
    });

    dom.addClass(this.__button, 'button');

    this.domElement.appendChild(this.__button);


  };

  FunctionController.superclass = Controller;

  common.extend(

      FunctionController.prototype,
      Controller.prototype,
      {
        
        fire: function() {
          if (this.__onChange) {
            this.__onChange.call(this);
          }
          if (this.__onFinishChange) {
            this.__onFinishChange.call(this, this.getValue());
          }
          this.getValue().call(this.object);
        }
      }

  );

  return FunctionController;

})(dat.controllers.Controller,
dat.dom.dom,
dat.utils.common);


dat.controllers.BooleanController = (function (Controller, dom, common) {

  /**
   * @class Provides a checkbox input to alter the boolean property of an object.
   * @extends dat.controllers.Controller
   *
   * @param {Object} object The object to be manipulated
   * @param {string} property The name of the property to be manipulated
   *
   * @member dat.controllers
   */
  var BooleanController = function(object, property) {

    BooleanController.superclass.call(this, object, property);

    var _this = this;
    this.__prev = this.getValue();

    this.__checkbox = document.createElement('input');
    this.__checkbox.setAttribute('type', 'checkbox');


    dom.bind(this.__checkbox, 'change', onChange, false);

    this.domElement.appendChild(this.__checkbox);

    // Match original value
    this.updateDisplay();

    function onChange() {
      _this.setValue(!_this.__prev);
    }

  };

  BooleanController.superclass = Controller;

  common.extend(

      BooleanController.prototype,
      Controller.prototype,

      {

        setValue: function(v) {
          var toReturn = BooleanController.superclass.prototype.setValue.call(this, v);
          if (this.__onFinishChange) {
            this.__onFinishChange.call(this, this.getValue());
          }
          this.__prev = this.getValue();
          return toReturn;
        },

        updateDisplay: function() {
          
          if (this.getValue() === true) {
            this.__checkbox.setAttribute('checked', 'checked');
            this.__checkbox.checked = true;    
          } else {
              this.__checkbox.checked = false;
          }

          return BooleanController.superclass.prototype.updateDisplay.call(this);

        }


      }

  );

  return BooleanController;

})(dat.controllers.Controller,
dat.dom.dom,
dat.utils.common);


dat.color.toString = (function (common) {

  return function(color) {

    if (color.a == 1 || common.isUndefined(color.a)) {

      var s = color.hex.toString(16);
      while (s.length < 6) {
        s = '0' + s;
      }

      return '#' + s;

    } else {

      return 'rgba(' + Math.round(color.r) + ',' + Math.round(color.g) + ',' + Math.round(color.b) + ',' + color.a + ')';

    }

  }

})(dat.utils.common);


dat.color.interpret = (function (toString, common) {

  var result, toReturn;

  var interpret = function() {

    toReturn = false;

    var original = arguments.length > 1 ? common.toArray(arguments) : arguments[0];

    common.each(INTERPRETATIONS, function(family) {

      if (family.litmus(original)) {

        common.each(family.conversions, function(conversion, conversionName) {

          result = conversion.read(original);

          if (toReturn === false && result !== false) {
            toReturn = result;
            result.conversionName = conversionName;
            result.conversion = conversion;
            return common.BREAK;

          }

        });

        return common.BREAK;

      }

    });

    return toReturn;

  };

  var INTERPRETATIONS = [

    // Strings
    {

      litmus: common.isString,

      conversions: {

        THREE_CHAR_HEX: {

          read: function(original) {

            var test = original.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);
            if (test === null) return false;

            return {
              space: 'HEX',
              hex: parseInt(
                  '0x' +
                      test[1].toString() + test[1].toString() +
                      test[2].toString() + test[2].toString() +
                      test[3].toString() + test[3].toString())
            };

          },

          write: toString

        },

        SIX_CHAR_HEX: {

          read: function(original) {

            var test = original.match(/^#([A-F0-9]{6})$/i);
            if (test === null) return false;

            return {
              space: 'HEX',
              hex: parseInt('0x' + test[1].toString())
            };

          },

          write: toString

        },

        CSS_RGB: {

          read: function(original) {

            var test = original.match(/^rgb\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);
            if (test === null) return false;

            return {
              space: 'RGB',
              r: parseFloat(test[1]),
              g: parseFloat(test[2]),
              b: parseFloat(test[3])
            };

          },

          write: toString

        },

        CSS_RGBA: {

          read: function(original) {

            var test = original.match(/^rgba\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\,\s*(.+)\s*\)/);
            if (test === null) return false;

            return {
              space: 'RGB',
              r: parseFloat(test[1]),
              g: parseFloat(test[2]),
              b: parseFloat(test[3]),
              a: parseFloat(test[4])
            };

          },

          write: toString

        }

      }

    },

    // Numbers
    {

      litmus: common.isNumber,

      conversions: {

        HEX: {
          read: function(original) {
            return {
              space: 'HEX',
              hex: original,
              conversionName: 'HEX'
            }
          },

          write: function(color) {
            return color.hex;
          }
        }

      }

    },

    // Arrays
    {

      litmus: common.isArray,

      conversions: {

        RGB_ARRAY: {
          read: function(original) {
            if (original.length != 3) return false;
            return {
              space: 'RGB',
              r: original[0],
              g: original[1],
              b: original[2]
            };
          },

          write: function(color) {
            return [color.r, color.g, color.b];
          }

        },

        RGBA_ARRAY: {
          read: function(original) {
            if (original.length != 4) return false;
            return {
              space: 'RGB',
              r: original[0],
              g: original[1],
              b: original[2],
              a: original[3]
            };
          },

          write: function(color) {
            return [color.r, color.g, color.b, color.a];
          }

        }

      }

    },

    // Objects
    {

      litmus: common.isObject,

      conversions: {

        RGBA_OBJ: {
          read: function(original) {
            if (common.isNumber(original.r) &&
                common.isNumber(original.g) &&
                common.isNumber(original.b) &&
                common.isNumber(original.a)) {
              return {
                space: 'RGB',
                r: original.r,
                g: original.g,
                b: original.b,
                a: original.a
              }
            }
            return false;
          },

          write: function(color) {
            return {
              r: color.r,
              g: color.g,
              b: color.b,
              a: color.a
            }
          }
        },

        RGB_OBJ: {
          read: function(original) {
            if (common.isNumber(original.r) &&
                common.isNumber(original.g) &&
                common.isNumber(original.b)) {
              return {
                space: 'RGB',
                r: original.r,
                g: original.g,
                b: original.b
              }
            }
            return false;
          },

          write: function(color) {
            return {
              r: color.r,
              g: color.g,
              b: color.b
            }
          }
        },

        HSVA_OBJ: {
          read: function(original) {
            if (common.isNumber(original.h) &&
                common.isNumber(original.s) &&
                common.isNumber(original.v) &&
                common.isNumber(original.a)) {
              return {
                space: 'HSV',
                h: original.h,
                s: original.s,
                v: original.v,
                a: original.a
              }
            }
            return false;
          },

          write: function(color) {
            return {
              h: color.h,
              s: color.s,
              v: color.v,
              a: color.a
            }
          }
        },

        HSV_OBJ: {
          read: function(original) {
            if (common.isNumber(original.h) &&
                common.isNumber(original.s) &&
                common.isNumber(original.v)) {
              return {
                space: 'HSV',
                h: original.h,
                s: original.s,
                v: original.v
              }
            }
            return false;
          },

          write: function(color) {
            return {
              h: color.h,
              s: color.s,
              v: color.v
            }
          }

        }

      }

    }


  ];

  return interpret;


})(dat.color.toString,
dat.utils.common);


dat.GUI = dat.gui.GUI = (function (css, saveDialogueContents, styleSheet, controllerFactory, Controller, BooleanController, FunctionController, NumberControllerBox, NumberControllerSlider, OptionController, ColorController, requestAnimationFrame, CenteredDiv, dom, common) {

  css.inject(styleSheet);

  /** Outer-most className for GUI's */
  var CSS_NAMESPACE = 'dg';

  var HIDE_KEY_CODE = 72;

  /** The only value shared between the JS and SCSS. Use caution. */
  var CLOSE_BUTTON_HEIGHT = 20;

  var DEFAULT_DEFAULT_PRESET_NAME = 'Default';

  var SUPPORTS_LOCAL_STORAGE = (function() {
    try {
      return 'localStorage' in window && window['localStorage'] !== null;
    } catch (e) {
      return false;
    }
  })();

  var SAVE_DIALOGUE;

  /** Have we yet to create an autoPlace GUI? */
  var auto_place_virgin = true;

  /** Fixed position div that auto place GUI's go inside */
  var auto_place_container;

  /** Are we hiding the GUI's ? */
  var hide = false;

  /** GUI's which should be hidden */
  var hideable_guis = [];

  /**
   * A lightweight controller library for JavaScript. It allows you to easily
   * manipulate variables and fire functions on the fly.
   * @class
   *
   * @member dat.gui
   *
   * @param {Object} [params]
   * @param {String} [params.name] The name of this GUI.
   * @param {Object} [params.load] JSON object representing the saved state of
   * this GUI.
   * @param {Boolean} [params.auto=true]
   * @param {dat.gui.GUI} [params.parent] The GUI I'm nested in.
   * @param {Boolean} [params.closed] If true, starts closed
   */
  var GUI = function(params) {

    var _this = this;

    /**
     * Outermost DOM Element
     * @type DOMElement
     */
    this.domElement = document.createElement('div');
    this.__ul = document.createElement('ul');
    this.domElement.appendChild(this.__ul);

    dom.addClass(this.domElement, CSS_NAMESPACE);

    /**
     * Nested GUI's by name
     * @ignore
     */
    this.__folders = {};

    this.__controllers = [];

    /**
     * List of objects I'm remembering for save, only used in top level GUI
     * @ignore
     */
    this.__rememberedObjects = [];

    /**
     * Maps the index of remembered objects to a map of controllers, only used
     * in top level GUI.
     *
     * @private
     * @ignore
     *
     * @example
     * [
     *  {
     *    propertyName: Controller,
     *    anotherPropertyName: Controller
     *  },
     *  {
     *    propertyName: Controller
     *  }
     * ]
     */
    this.__rememberedObjectIndecesToControllers = [];

    this.__listening = [];

    params = params || {};

    // Default parameters
    params = common.defaults(params, {
      autoPlace: true,
      width: GUI.DEFAULT_WIDTH
    });

    params = common.defaults(params, {
      resizable: params.autoPlace,
      hideable: params.autoPlace
    });


    if (!common.isUndefined(params.load)) {

      // Explicit preset
      if (params.preset) params.load.preset = params.preset;

    } else {

      params.load = { preset: DEFAULT_DEFAULT_PRESET_NAME };

    }

    if (common.isUndefined(params.parent) && params.hideable) {
      hideable_guis.push(this);
    }

    // Only root level GUI's are resizable.
    params.resizable = common.isUndefined(params.parent) && params.resizable;


    if (params.autoPlace && common.isUndefined(params.scrollable)) {
      params.scrollable = true;
    }
//    params.scrollable = common.isUndefined(params.parent) && params.scrollable === true;

    // Not part of params because I don't want people passing this in via
    // constructor. Should be a 'remembered' value.
    var use_local_storage =
        SUPPORTS_LOCAL_STORAGE &&
            localStorage.getItem(getLocalStorageHash(this, 'isLocal')) === 'true';

    Object.defineProperties(this,

        /** @lends dat.gui.GUI.prototype */
        {

          /**
           * The parent <code>GUI</code>
           * @type dat.gui.GUI
           */
          parent: {
            get: function() {
              return params.parent;
            }
          },

          scrollable: {
            get: function() {
              return params.scrollable;
            }
          },

          /**
           * Handles <code>GUI</code>'s element placement for you
           * @type Boolean
           */
          autoPlace: {
            get: function() {
              return params.autoPlace;
            }
          },

          /**
           * The identifier for a set of saved values
           * @type String
           */
          preset: {

            get: function() {
              if (_this.parent) {
                return _this.getRoot().preset;
              } else {
                return params.load.preset;
              }
            },

            set: function(v) {
              if (_this.parent) {
                _this.getRoot().preset = v;
              } else {
                params.load.preset = v;
              }
              setPresetSelectIndex(this);
              _this.revert();
            }

          },

          /**
           * The width of <code>GUI</code> element
           * @type Number
           */
          width: {
            get: function() {
              return params.width;
            },
            set: function(v) {
              params.width = v;
              setWidth(_this, v);
            }
          },

          /**
           * The name of <code>GUI</code>. Used for folders. i.e
           * a folder's name
           * @type String
           */
          name: {
            get: function() {
              return params.name;
            },
            set: function(v) {
              // TODO Check for collisions among sibling folders
              params.name = v;
              if (title_row_name) {
                title_row_name.innerHTML = params.name;
              }
            }
          },

          /**
           * Whether the <code>GUI</code> is collapsed or not
           * @type Boolean
           */
          closed: {
            get: function() {
              return params.closed;
            },
            set: function(v) {
              params.closed = v;
              if (params.closed) {
                dom.addClass(_this.__ul, GUI.CLASS_CLOSED);
              } else {
                dom.removeClass(_this.__ul, GUI.CLASS_CLOSED);
              }
              // For browsers that aren't going to respect the CSS transition,
              // Lets just check our height against the window height right off
              // the bat.
              this.onResize();

              if (_this.__closeButton) {
                _this.__closeButton.innerHTML = v ? GUI.TEXT_OPEN : GUI.TEXT_CLOSED;
              }
            }
          },

          /**
           * Contains all presets
           * @type Object
           */
          load: {
            get: function() {
              return params.load;
            }
          },

          /**
           * Determines whether or not to use <a href="https://developer.mozilla.org/en/DOM/Storage#localStorage">localStorage</a> as the means for
           * <code>remember</code>ing
           * @type Boolean
           */
          useLocalStorage: {

            get: function() {
              return use_local_storage;
            },
            set: function(bool) {
              if (SUPPORTS_LOCAL_STORAGE) {
                use_local_storage = bool;
                if (bool) {
                  dom.bind(window, 'unload', saveToLocalStorage);
                } else {
                  dom.unbind(window, 'unload', saveToLocalStorage);
                }
                localStorage.setItem(getLocalStorageHash(_this, 'isLocal'), bool);
              }
            }

          }

        });

    // Are we a root level GUI?
    if (common.isUndefined(params.parent)) {

      params.closed = false;

      dom.addClass(this.domElement, GUI.CLASS_MAIN);
      dom.makeSelectable(this.domElement, false);

      // Are we supposed to be loading locally?
      if (SUPPORTS_LOCAL_STORAGE) {

        if (use_local_storage) {

          _this.useLocalStorage = true;

          var saved_gui = localStorage.getItem(getLocalStorageHash(this, 'gui'));

          if (saved_gui) {
            params.load = JSON.parse(saved_gui);
          }

        }

      }

      this.__closeButton = document.createElement('div');
      this.__closeButton.innerHTML = GUI.TEXT_CLOSED;
      dom.addClass(this.__closeButton, GUI.CLASS_CLOSE_BUTTON);
      this.domElement.appendChild(this.__closeButton);

      dom.bind(this.__closeButton, 'click', function() {

        _this.closed = !_this.closed;


      });


      // Oh, you're a nested GUI!
    } else {

      if (params.closed === undefined) {
        params.closed = true;
      }

      var title_row_name = document.createTextNode(params.name);
      dom.addClass(title_row_name, 'controller-name');

      var title_row = addRow(_this, title_row_name);

      var on_click_title = function(e) {
        e.preventDefault();
        _this.closed = !_this.closed;
        return false;
      };

      dom.addClass(this.__ul, GUI.CLASS_CLOSED);

      dom.addClass(title_row, 'title');
      dom.bind(title_row, 'click', on_click_title);

      if (!params.closed) {
        this.closed = false;
      }

    }

    if (params.autoPlace) {

      if (common.isUndefined(params.parent)) {

        if (auto_place_virgin) {
          auto_place_container = document.createElement('div');
          dom.addClass(auto_place_container, CSS_NAMESPACE);
          dom.addClass(auto_place_container, GUI.CLASS_AUTO_PLACE_CONTAINER);
          document.body.appendChild(auto_place_container);
          auto_place_virgin = false;
        }

        // Put it in the dom for you.
        auto_place_container.appendChild(this.domElement);

        // Apply the auto styles
        dom.addClass(this.domElement, GUI.CLASS_AUTO_PLACE);

      }


      // Make it not elastic.
      if (!this.parent) setWidth(_this, params.width);

    }

    dom.bind(window, 'resize', function() { _this.onResize() });
    dom.bind(this.__ul, 'webkitTransitionEnd', function() { _this.onResize(); });
    dom.bind(this.__ul, 'transitionend', function() { _this.onResize() });
    dom.bind(this.__ul, 'oTransitionEnd', function() { _this.onResize() });
    this.onResize();


    if (params.resizable) {
      addResizeHandle(this);
    }

    function saveToLocalStorage() {
      localStorage.setItem(getLocalStorageHash(_this, 'gui'), JSON.stringify(_this.getSaveObject()));
    }

    var root = _this.getRoot();
    function resetWidth() {
        var root = _this.getRoot();
        root.width += 1;
        common.defer(function() {
          root.width -= 1;
        });
      }

      if (!params.parent) {
        resetWidth();
      }

  };

  GUI.toggleHide = function() {

    hide = !hide;
    common.each(hideable_guis, function(gui) {
      gui.domElement.style.zIndex = hide ? -999 : 999;
      gui.domElement.style.opacity = hide ? 0 : 1;
    });
  };

  GUI.CLASS_AUTO_PLACE = 'a';
  GUI.CLASS_AUTO_PLACE_CONTAINER = 'ac';
  GUI.CLASS_MAIN = 'main';
  GUI.CLASS_CONTROLLER_ROW = 'cr';
  GUI.CLASS_TOO_TALL = 'taller-than-window';
  GUI.CLASS_CLOSED = 'closed';
  GUI.CLASS_CLOSE_BUTTON = 'close-button';
  GUI.CLASS_DRAG = 'drag';

  GUI.DEFAULT_WIDTH = 245;
  GUI.TEXT_CLOSED = 'Close Controls';
  GUI.TEXT_OPEN = 'Open Controls';

  dom.bind(window, 'keydown', function(e) {

    if (document.activeElement.type !== 'text' &&
        (e.which === HIDE_KEY_CODE || e.keyCode == HIDE_KEY_CODE)) {
      GUI.toggleHide();
    }

  }, false);

  common.extend(

      GUI.prototype,

      /** @lends dat.gui.GUI */
      {

        /**
         * @param object
         * @param property
         * @returns {dat.controllers.Controller} The new controller that was added.
         * @instance
         */
        add: function(object, property) {

          return add(
              this,
              object,
              property,
              {
                factoryArgs: Array.prototype.slice.call(arguments, 2)
              }
          );

        },

        /**
         * @param object
         * @param property
         * @returns {dat.controllers.ColorController} The new controller that was added.
         * @instance
         */
        addColor: function(object, property) {

          return add(
              this,
              object,
              property,
              {
                color: true
              }
          );

        },

        /**
         * @param controller
         * @instance
         */
        remove: function(controller) {

          // TODO listening?
          this.__ul.removeChild(controller.__li);
          this.__controllers.slice(this.__controllers.indexOf(controller), 1);
          var _this = this;
          common.defer(function() {
            _this.onResize();
          });

        },

        destroy: function() {

          if (this.autoPlace) {
            auto_place_container.removeChild(this.domElement);
          }

        },

        /**
         * @param name
         * @returns {dat.gui.GUI} The new folder.
         * @throws {Error} if this GUI already has a folder by the specified
         * name
         * @instance
         */
        addFolder: function(name) {

          // We have to prevent collisions on names in order to have a key
          // by which to remember saved values
          if (this.__folders[name] !== undefined) {
            throw new Error('You already have a folder in this GUI by the' +
                ' name "' + name + '"');
          }

          var new_gui_params = { name: name, parent: this };

          // We need to pass down the autoPlace trait so that we can
          // attach event listeners to open/close folder actions to
          // ensure that a scrollbar appears if the window is too short.
          new_gui_params.autoPlace = this.autoPlace;

          // Do we have saved appearance data for this folder?

          if (this.load && // Anything loaded?
              this.load.folders && // Was my parent a dead-end?
              this.load.folders[name]) { // Did daddy remember me?

            // Start me closed if I was closed
            new_gui_params.closed = this.load.folders[name].closed;

            // Pass down the loaded data
            new_gui_params.load = this.load.folders[name];

          }

          var gui = new GUI(new_gui_params);
          this.__folders[name] = gui;

          var li = addRow(this, gui.domElement);
          dom.addClass(li, 'folder');
          return gui;

        },

        open: function() {
          this.closed = false;
        },

        close: function() {
          this.closed = true;
        },

        onResize: function() {

          var root = this.getRoot();

          if (root.scrollable) {

            var top = dom.getOffset(root.__ul).top;
            var h = 0;

            common.each(root.__ul.childNodes, function(node) {
              if (! (root.autoPlace && node === root.__save_row))
                h += dom.getHeight(node);
            });

            if (window.innerHeight - top - CLOSE_BUTTON_HEIGHT < h) {
              dom.addClass(root.domElement, GUI.CLASS_TOO_TALL);
              root.__ul.style.height = window.innerHeight - top - CLOSE_BUTTON_HEIGHT + 'px';
            } else {
              dom.removeClass(root.domElement, GUI.CLASS_TOO_TALL);
              root.__ul.style.height = 'auto';
            }

          }

          if (root.__resize_handle) {
            common.defer(function() {
              root.__resize_handle.style.height = root.__ul.offsetHeight + 'px';
            });
          }

          if (root.__closeButton) {
            root.__closeButton.style.width = root.width + 'px';
          }

        },

        /**
         * Mark objects for saving. The order of these objects cannot change as
         * the GUI grows. When remembering new objects, append them to the end
         * of the list.
         *
         * @param {Object...} objects
         * @throws {Error} if not called on a top level GUI.
         * @instance
         */
        remember: function() {

          if (common.isUndefined(SAVE_DIALOGUE)) {
            SAVE_DIALOGUE = new CenteredDiv();
            SAVE_DIALOGUE.domElement.innerHTML = saveDialogueContents;
          }

          if (this.parent) {
            throw new Error("You can only call remember on a top level GUI.");
          }

          var _this = this;

          common.each(Array.prototype.slice.call(arguments), function(object) {
            if (_this.__rememberedObjects.length == 0) {
              addSaveMenu(_this);
            }
            if (_this.__rememberedObjects.indexOf(object) == -1) {
              _this.__rememberedObjects.push(object);
            }
          });

          if (this.autoPlace) {
            // Set save row width
            setWidth(this, this.width);
          }

        },

        /**
         * @returns {dat.gui.GUI} the topmost parent GUI of a nested GUI.
         * @instance
         */
        getRoot: function() {
          var gui = this;
          while (gui.parent) {
            gui = gui.parent;
          }
          return gui;
        },

        /**
         * @returns {Object} a JSON object representing the current state of
         * this GUI as well as its remembered properties.
         * @instance
         */
        getSaveObject: function() {

          var toReturn = this.load;

          toReturn.closed = this.closed;

          // Am I remembering any values?
          if (this.__rememberedObjects.length > 0) {

            toReturn.preset = this.preset;

            if (!toReturn.remembered) {
              toReturn.remembered = {};
            }

            toReturn.remembered[this.preset] = getCurrentPreset(this);

          }

          toReturn.folders = {};
          common.each(this.__folders, function(element, key) {
            toReturn.folders[key] = element.getSaveObject();
          });

          return toReturn;

        },

        save: function() {

          if (!this.load.remembered) {
            this.load.remembered = {};
          }

          this.load.remembered[this.preset] = getCurrentPreset(this);
          markPresetModified(this, false);

        },

        saveAs: function(presetName) {

          if (!this.load.remembered) {

            // Retain default values upon first save
            this.load.remembered = {};
            this.load.remembered[DEFAULT_DEFAULT_PRESET_NAME] = getCurrentPreset(this, true);

          }

          this.load.remembered[presetName] = getCurrentPreset(this);
          this.preset = presetName;
          addPresetOption(this, presetName, true);

        },

        revert: function(gui) {

          common.each(this.__controllers, function(controller) {
            // Make revert work on Default.
            if (!this.getRoot().load.remembered) {
              controller.setValue(controller.initialValue);
            } else {
              recallSavedValue(gui || this.getRoot(), controller);
            }
          }, this);

          common.each(this.__folders, function(folder) {
            folder.revert(folder);
          });

          if (!gui) {
            markPresetModified(this.getRoot(), false);
          }


        },

        listen: function(controller) {

          var init = this.__listening.length == 0;
          this.__listening.push(controller);
          if (init) updateDisplays(this.__listening);

        }

      }

  );

  function add(gui, object, property, params) {

    if (object[property] === undefined) {
      throw new Error("Object " + object + " has no property \"" + property + "\"");
    }

    var controller;

    if (params.color) {

      controller = new ColorController(object, property);

    } else {

      var factoryArgs = [object,property].concat(params.factoryArgs);
      controller = controllerFactory.apply(gui, factoryArgs);

    }

    if (params.before instanceof Controller) {
      params.before = params.before.__li;
    }

    recallSavedValue(gui, controller);

    dom.addClass(controller.domElement, 'c');

    var name = document.createElement('span');
    dom.addClass(name, 'property-name');
    name.innerHTML = controller.property;

    var container = document.createElement('div');
    container.appendChild(name);
    container.appendChild(controller.domElement);

    var li = addRow(gui, container, params.before);

    dom.addClass(li, GUI.CLASS_CONTROLLER_ROW);
    dom.addClass(li, typeof controller.getValue());

    augmentController(gui, li, controller);

    gui.__controllers.push(controller);

    return controller;

  }

  /**
   * Add a row to the end of the GUI or before another row.
   *
   * @param gui
   * @param [dom] If specified, inserts the dom content in the new row
   * @param [liBefore] If specified, places the new row before another row
   */
  function addRow(gui, dom, liBefore) {
    var li = document.createElement('li');
    if (dom) li.appendChild(dom);
    if (liBefore) {
      gui.__ul.insertBefore(li, params.before);
    } else {
      gui.__ul.appendChild(li);
    }
    gui.onResize();
    return li;
  }

  function augmentController(gui, li, controller) {

    controller.__li = li;
    controller.__gui = gui;

    common.extend(controller, {

      options: function(options) {

        if (arguments.length > 1) {
          controller.remove();

          return add(
              gui,
              controller.object,
              controller.property,
              {
                before: controller.__li.nextElementSibling,
                factoryArgs: [common.toArray(arguments)]
              }
          );

        }

        if (common.isArray(options) || common.isObject(options)) {
          controller.remove();

          return add(
              gui,
              controller.object,
              controller.property,
              {
                before: controller.__li.nextElementSibling,
                factoryArgs: [options]
              }
          );

        }

      },

      name: function(v) {
        controller.__li.firstElementChild.firstElementChild.innerHTML = v;
        return controller;
      },

      listen: function() {
        controller.__gui.listen(controller);
        return controller;
      },

      remove: function() {
        controller.__gui.remove(controller);
        return controller;
      }

    });

    // All sliders should be accompanied by a box.
    if (controller instanceof NumberControllerSlider) {

      var box = new NumberControllerBox(controller.object, controller.property,
          { min: controller.__min, max: controller.__max, step: controller.__step });

      common.each(['updateDisplay', 'onChange', 'onFinishChange'], function(method) {
        var pc = controller[method];
        var pb = box[method];
        controller[method] = box[method] = function() {
          var args = Array.prototype.slice.call(arguments);
          pc.apply(controller, args);
          return pb.apply(box, args);
        }
      });

      dom.addClass(li, 'has-slider');
      controller.domElement.insertBefore(box.domElement, controller.domElement.firstElementChild);

    }
    else if (controller instanceof NumberControllerBox) {

      var r = function(returned) {

        // Have we defined both boundaries?
        if (common.isNumber(controller.__min) && common.isNumber(controller.__max)) {

          // Well, then lets just replace this with a slider.
          controller.remove();
          return add(
              gui,
              controller.object,
              controller.property,
              {
                before: controller.__li.nextElementSibling,
                factoryArgs: [controller.__min, controller.__max, controller.__step]
              });

        }

        return returned;

      };

      controller.min = common.compose(r, controller.min);
      controller.max = common.compose(r, controller.max);

    }
    else if (controller instanceof BooleanController) {

      dom.bind(li, 'click', function() {
        dom.fakeEvent(controller.__checkbox, 'click');
      });

      dom.bind(controller.__checkbox, 'click', function(e) {
        e.stopPropagation(); // Prevents double-toggle
      })

    }
    else if (controller instanceof FunctionController) {

      dom.bind(li, 'click', function() {
        dom.fakeEvent(controller.__button, 'click');
      });

      dom.bind(li, 'mouseover', function() {
        dom.addClass(controller.__button, 'hover');
      });

      dom.bind(li, 'mouseout', function() {
        dom.removeClass(controller.__button, 'hover');
      });

    }
    else if (controller instanceof ColorController) {

      dom.addClass(li, 'color');
      controller.updateDisplay = common.compose(function(r) {
        li.style.borderLeftColor = controller.__color.toString();
        return r;
      }, controller.updateDisplay);

      controller.updateDisplay();

    }

    controller.setValue = common.compose(function(r) {
      if (gui.getRoot().__preset_select && controller.isModified()) {
        markPresetModified(gui.getRoot(), true);
      }
      return r;
    }, controller.setValue);

  }

  function recallSavedValue(gui, controller) {

    // Find the topmost GUI, that's where remembered objects live.
    var root = gui.getRoot();

    // Does the object we're controlling match anything we've been told to
    // remember?
    var matched_index = root.__rememberedObjects.indexOf(controller.object);

    // Why yes, it does!
    if (matched_index != -1) {

      // Let me fetch a map of controllers for thcommon.isObject.
      var controller_map =
          root.__rememberedObjectIndecesToControllers[matched_index];

      // Ohp, I believe this is the first controller we've created for this
      // object. Lets make the map fresh.
      if (controller_map === undefined) {
        controller_map = {};
        root.__rememberedObjectIndecesToControllers[matched_index] =
            controller_map;
      }

      // Keep track of this controller
      controller_map[controller.property] = controller;

      // Okay, now have we saved any values for this controller?
      if (root.load && root.load.remembered) {

        var preset_map = root.load.remembered;

        // Which preset are we trying to load?
        var preset;

        if (preset_map[gui.preset]) {

          preset = preset_map[gui.preset];

        } else if (preset_map[DEFAULT_DEFAULT_PRESET_NAME]) {

          // Uhh, you can have the default instead?
          preset = preset_map[DEFAULT_DEFAULT_PRESET_NAME];

        } else {

          // Nada.

          return;

        }


        // Did the loaded object remember thcommon.isObject?
        if (preset[matched_index] &&

          // Did we remember this particular property?
            preset[matched_index][controller.property] !== undefined) {

          // We did remember something for this guy ...
          var value = preset[matched_index][controller.property];

          // And that's what it is.
          controller.initialValue = value;
          controller.setValue(value);

        }

      }

    }

  }

  function getLocalStorageHash(gui, key) {
    // TODO how does this deal with multiple GUI's?
    return document.location.href + '.' + key;

  }

  function addSaveMenu(gui) {

    var div = gui.__save_row = document.createElement('li');

    dom.addClass(gui.domElement, 'has-save');

    gui.__ul.insertBefore(div, gui.__ul.firstChild);

    dom.addClass(div, 'save-row');

    var gears = document.createElement('span');
    gears.innerHTML = '&nbsp;';
    dom.addClass(gears, 'button gears');

    // TODO replace with FunctionController
    var button = document.createElement('span');
    button.innerHTML = 'Save';
    dom.addClass(button, 'button');
    dom.addClass(button, 'save');

    var button2 = document.createElement('span');
    button2.innerHTML = 'New';
    dom.addClass(button2, 'button');
    dom.addClass(button2, 'save-as');

    var button3 = document.createElement('span');
    button3.innerHTML = 'Revert';
    dom.addClass(button3, 'button');
    dom.addClass(button3, 'revert');

    var select = gui.__preset_select = document.createElement('select');

    if (gui.load && gui.load.remembered) {

      common.each(gui.load.remembered, function(value, key) {
        addPresetOption(gui, key, key == gui.preset);
      });

    } else {
      addPresetOption(gui, DEFAULT_DEFAULT_PRESET_NAME, false);
    }

    dom.bind(select, 'change', function() {


      for (var index = 0; index < gui.__preset_select.length; index++) {
        gui.__preset_select[index].innerHTML = gui.__preset_select[index].value;
      }

      gui.preset = this.value;

    });

    div.appendChild(select);
    div.appendChild(gears);
    div.appendChild(button);
    div.appendChild(button2);
    div.appendChild(button3);

    if (SUPPORTS_LOCAL_STORAGE) {

      var saveLocally = document.getElementById('dg-save-locally');
      var explain = document.getElementById('dg-local-explain');

      saveLocally.style.display = 'block';

      var localStorageCheckBox = document.getElementById('dg-local-storage');

      if (localStorage.getItem(getLocalStorageHash(gui, 'isLocal')) === 'true') {
        localStorageCheckBox.setAttribute('checked', 'checked');
      }

      function showHideExplain() {
        explain.style.display = gui.useLocalStorage ? 'block' : 'none';
      }

      showHideExplain();

      // TODO: Use a boolean controller, fool!
      dom.bind(localStorageCheckBox, 'change', function() {
        gui.useLocalStorage = !gui.useLocalStorage;
        showHideExplain();
      });

    }

    var newConstructorTextArea = document.getElementById('dg-new-constructor');

    dom.bind(newConstructorTextArea, 'keydown', function(e) {
      if (e.metaKey && (e.which === 67 || e.keyCode == 67)) {
        SAVE_DIALOGUE.hide();
      }
    });

    dom.bind(gears, 'click', function() {
      newConstructorTextArea.innerHTML = JSON.stringify(gui.getSaveObject(), undefined, 2);
      SAVE_DIALOGUE.show();
      newConstructorTextArea.focus();
      newConstructorTextArea.select();
    });

    dom.bind(button, 'click', function() {
      gui.save();
    });

    dom.bind(button2, 'click', function() {
      var presetName = prompt('Enter a new preset name.');
      if (presetName) gui.saveAs(presetName);
    });

    dom.bind(button3, 'click', function() {
      gui.revert();
    });

//    div.appendChild(button2);

  }

  function addResizeHandle(gui) {

    gui.__resize_handle = document.createElement('div');

    common.extend(gui.__resize_handle.style, {

      width: '6px',
      marginLeft: '-3px',
      height: '200px',
      cursor: 'ew-resize',
      position: 'absolute'
//      border: '1px solid blue'

    });

    var pmouseX;

    dom.bind(gui.__resize_handle, 'mousedown', dragStart);
    dom.bind(gui.__closeButton, 'mousedown', dragStart);

    gui.domElement.insertBefore(gui.__resize_handle, gui.domElement.firstElementChild);

    function dragStart(e) {

      e.preventDefault();

      pmouseX = e.clientX;

      dom.addClass(gui.__closeButton, GUI.CLASS_DRAG);
      dom.bind(window, 'mousemove', drag);
      dom.bind(window, 'mouseup', dragStop);

      return false;

    }

    function drag(e) {

      e.preventDefault();

      gui.width += pmouseX - e.clientX;
      gui.onResize();
      pmouseX = e.clientX;

      return false;

    }

    function dragStop() {

      dom.removeClass(gui.__closeButton, GUI.CLASS_DRAG);
      dom.unbind(window, 'mousemove', drag);
      dom.unbind(window, 'mouseup', dragStop);

    }

  }

  function setWidth(gui, w) {
    gui.domElement.style.width = w + 'px';
    // Auto placed save-rows are position fixed, so we have to
    // set the width manually if we want it to bleed to the edge
    if (gui.__save_row && gui.autoPlace) {
      gui.__save_row.style.width = w + 'px';
    }if (gui.__closeButton) {
      gui.__closeButton.style.width = w + 'px';
    }
  }

  function getCurrentPreset(gui, useInitialValues) {

    var toReturn = {};

    // For each object I'm remembering
    common.each(gui.__rememberedObjects, function(val, index) {

      var saved_values = {};

      // The controllers I've made for thcommon.isObject by property
      var controller_map =
          gui.__rememberedObjectIndecesToControllers[index];

      // Remember each value for each property
      common.each(controller_map, function(controller, property) {
        saved_values[property] = useInitialValues ? controller.initialValue : controller.getValue();
      });

      // Save the values for thcommon.isObject
      toReturn[index] = saved_values;

    });

    return toReturn;

  }

  function addPresetOption(gui, name, setSelected) {
    var opt = document.createElement('option');
    opt.innerHTML = name;
    opt.value = name;
    gui.__preset_select.appendChild(opt);
    if (setSelected) {
      gui.__preset_select.selectedIndex = gui.__preset_select.length - 1;
    }
  }

  function setPresetSelectIndex(gui) {
    for (var index = 0; index < gui.__preset_select.length; index++) {
      if (gui.__preset_select[index].value == gui.preset) {
        gui.__preset_select.selectedIndex = index;
      }
    }
  }

  function markPresetModified(gui, modified) {
    var opt = gui.__preset_select[gui.__preset_select.selectedIndex];
//    console.log('mark', modified, opt);
    if (modified) {
      opt.innerHTML = opt.value + "*";
    } else {
      opt.innerHTML = opt.value;
    }
  }

  function updateDisplays(controllerArray) {


    if (controllerArray.length != 0) {

      requestAnimationFrame(function() {
        updateDisplays(controllerArray);
      });

    }

    common.each(controllerArray, function(c) {
      c.updateDisplay();
    });

  }

  return GUI;

})(dat.utils.css,
"<div id=\"dg-save\" class=\"dg dialogue\">\n\n  Here's the new load parameter for your <code>GUI</code>'s constructor:\n\n  <textarea id=\"dg-new-constructor\"></textarea>\n\n  <div id=\"dg-save-locally\">\n\n    <input id=\"dg-local-storage\" type=\"checkbox\"/> Automatically save\n    values to <code>localStorage</code> on exit.\n\n    <div id=\"dg-local-explain\">The values saved to <code>localStorage</code> will\n      override those passed to <code>dat.GUI</code>'s constructor. This makes it\n      easier to work incrementally, but <code>localStorage</code> is fragile,\n      and your friends may not see the same values you do.\n      \n    </div>\n    \n  </div>\n\n</div>",
".dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity 0.1s linear;-o-transition:opacity 0.1s linear;-moz-transition:opacity 0.1s linear;transition:opacity 0.1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity 0.1s linear;-o-transition:opacity 0.1s linear;-moz-transition:opacity 0.1s linear;transition:opacity 0.1s linear;border:0;position:absolute;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-x:hidden}.dg.a.has-save ul{margin-top:27px}.dg.a.has-save ul.closed{margin-top:0}.dg.a .save-row{position:fixed;top:0;z-index:1002}.dg li{-webkit-transition:height 0.1s ease-out;-o-transition:height 0.1s ease-out;-moz-transition:height 0.1s ease-out;transition:height 0.1s ease-out}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;overflow:hidden;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li > *{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .c{float:left;width:60%}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:9px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2fa1d6}.dg .cr.number input[type=text]{color:#2fa1d6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2fa1d6}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}\n",
dat.controllers.factory = (function (OptionController, NumberControllerBox, NumberControllerSlider, StringController, FunctionController, BooleanController, common) {

      return function(object, property) {

        var initialValue = object[property];

        // Providing options?
        if (common.isArray(arguments[2]) || common.isObject(arguments[2])) {
          return new OptionController(object, property, arguments[2]);
        }

        // Providing a map?

        if (common.isNumber(initialValue)) {

          if (common.isNumber(arguments[2]) && common.isNumber(arguments[3])) {

            // Has min and max.
            return new NumberControllerSlider(object, property, arguments[2], arguments[3]);

          } else {

            return new NumberControllerBox(object, property, { min: arguments[2], max: arguments[3] });

          }

        }

        if (common.isString(initialValue)) {
          return new StringController(object, property);
        }

        if (common.isFunction(initialValue)) {
          return new FunctionController(object, property, '');
        }

        if (common.isBoolean(initialValue)) {
          return new BooleanController(object, property);
        }

      }

    })(dat.controllers.OptionController,
dat.controllers.NumberControllerBox,
dat.controllers.NumberControllerSlider,
dat.controllers.StringController = (function (Controller, dom, common) {

  /**
   * @class Provides a text input to alter the string property of an object.
   *
   * @extends dat.controllers.Controller
   *
   * @param {Object} object The object to be manipulated
   * @param {string} property The name of the property to be manipulated
   *
   * @member dat.controllers
   */
  var StringController = function(object, property) {

    StringController.superclass.call(this, object, property);

    var _this = this;

    this.__input = document.createElement('input');
    this.__input.setAttribute('type', 'text');

    dom.bind(this.__input, 'keyup', onChange);
    dom.bind(this.__input, 'change', onChange);
    dom.bind(this.__input, 'blur', onBlur);
    dom.bind(this.__input, 'keydown', function(e) {
      if (e.keyCode === 13) {
        this.blur();
      }
    });
    

    function onChange() {
      _this.setValue(_this.__input.value);
    }

    function onBlur() {
      if (_this.__onFinishChange) {
        _this.__onFinishChange.call(_this, _this.getValue());
      }
    }

    this.updateDisplay();

    this.domElement.appendChild(this.__input);

  };

  StringController.superclass = Controller;

  common.extend(

      StringController.prototype,
      Controller.prototype,

      {

        updateDisplay: function() {
          // Stops the caret from moving on account of:
          // keyup -> setValue -> updateDisplay
          if (!dom.isActive(this.__input)) {
            this.__input.value = this.getValue();
          }
          return StringController.superclass.prototype.updateDisplay.call(this);
        }

      }

  );

  return StringController;

})(dat.controllers.Controller,
dat.dom.dom,
dat.utils.common),
dat.controllers.FunctionController,
dat.controllers.BooleanController,
dat.utils.common),
dat.controllers.Controller,
dat.controllers.BooleanController,
dat.controllers.FunctionController,
dat.controllers.NumberControllerBox,
dat.controllers.NumberControllerSlider,
dat.controllers.OptionController,
dat.controllers.ColorController = (function (Controller, dom, Color, interpret, common) {

  var ColorController = function(object, property) {

    ColorController.superclass.call(this, object, property);

    this.__color = new Color(this.getValue());
    this.__temp = new Color(0);

    var _this = this;

    this.domElement = document.createElement('div');

    dom.makeSelectable(this.domElement, false);

    this.__selector = document.createElement('div');
    this.__selector.className = 'selector';

    this.__saturation_field = document.createElement('div');
    this.__saturation_field.className = 'saturation-field';

    this.__field_knob = document.createElement('div');
    this.__field_knob.className = 'field-knob';
    this.__field_knob_border = '2px solid ';

    this.__hue_knob = document.createElement('div');
    this.__hue_knob.className = 'hue-knob';

    this.__hue_field = document.createElement('div');
    this.__hue_field.className = 'hue-field';

    this.__input = document.createElement('input');
    this.__input.type = 'text';
    this.__input_textShadow = '0 1px 1px ';

    dom.bind(this.__input, 'keydown', function(e) {
      if (e.keyCode === 13) { // on enter
        onBlur.call(this);
      }
    });

    dom.bind(this.__input, 'blur', onBlur);

    dom.bind(this.__selector, 'mousedown', function(e) {

      dom
        .addClass(this, 'drag')
        .bind(window, 'mouseup', function(e) {
          dom.removeClass(_this.__selector, 'drag');
        });

    });

    var value_field = document.createElement('div');

    common.extend(this.__selector.style, {
      width: '122px',
      height: '102px',
      padding: '3px',
      backgroundColor: '#222',
      boxShadow: '0px 1px 3px rgba(0,0,0,0.3)'
    });

    common.extend(this.__field_knob.style, {
      position: 'absolute',
      width: '12px',
      height: '12px',
      border: this.__field_knob_border + (this.__color.v < .5 ? '#fff' : '#000'),
      boxShadow: '0px 1px 3px rgba(0,0,0,0.5)',
      borderRadius: '12px',
      zIndex: 1
    });
    
    common.extend(this.__hue_knob.style, {
      position: 'absolute',
      width: '15px',
      height: '2px',
      borderRight: '4px solid #fff',
      zIndex: 1
    });

    common.extend(this.__saturation_field.style, {
      width: '100px',
      height: '100px',
      border: '1px solid #555',
      marginRight: '3px',
      display: 'inline-block',
      cursor: 'pointer'
    });

    common.extend(value_field.style, {
      width: '100%',
      height: '100%',
      background: 'none'
    });
    
    linearGradient(value_field, 'top', 'rgba(0,0,0,0)', '#000');

    common.extend(this.__hue_field.style, {
      width: '15px',
      height: '100px',
      display: 'inline-block',
      border: '1px solid #555',
      cursor: 'ns-resize'
    });

    hueGradient(this.__hue_field);

    common.extend(this.__input.style, {
      outline: 'none',
//      width: '120px',
      textAlign: 'center',
//      padding: '4px',
//      marginBottom: '6px',
      color: '#fff',
      border: 0,
      fontWeight: 'bold',
      textShadow: this.__input_textShadow + 'rgba(0,0,0,0.7)'
    });

    dom.bind(this.__saturation_field, 'mousedown', fieldDown);
    dom.bind(this.__field_knob, 'mousedown', fieldDown);

    dom.bind(this.__hue_field, 'mousedown', function(e) {
      setH(e);
      dom.bind(window, 'mousemove', setH);
      dom.bind(window, 'mouseup', unbindH);
    });

    function fieldDown(e) {
      setSV(e);
      // document.body.style.cursor = 'none';
      dom.bind(window, 'mousemove', setSV);
      dom.bind(window, 'mouseup', unbindSV);
    }

    function unbindSV() {
      dom.unbind(window, 'mousemove', setSV);
      dom.unbind(window, 'mouseup', unbindSV);
      // document.body.style.cursor = 'default';
    }

    function onBlur() {
      var i = interpret(this.value);
      if (i !== false) {
        _this.__color.__state = i;
        _this.setValue(_this.__color.toOriginal());
      } else {
        this.value = _this.__color.toString();
      }
    }

    function unbindH() {
      dom.unbind(window, 'mousemove', setH);
      dom.unbind(window, 'mouseup', unbindH);
    }

    this.__saturation_field.appendChild(value_field);
    this.__selector.appendChild(this.__field_knob);
    this.__selector.appendChild(this.__saturation_field);
    this.__selector.appendChild(this.__hue_field);
    this.__hue_field.appendChild(this.__hue_knob);

    this.domElement.appendChild(this.__input);
    this.domElement.appendChild(this.__selector);

    this.updateDisplay();

    function setSV(e) {

      e.preventDefault();

      var w = dom.getWidth(_this.__saturation_field);
      var o = dom.getOffset(_this.__saturation_field);
      var s = (e.clientX - o.left + document.body.scrollLeft) / w;
      var v = 1 - (e.clientY - o.top + document.body.scrollTop) / w;

      if (v > 1) v = 1;
      else if (v < 0) v = 0;

      if (s > 1) s = 1;
      else if (s < 0) s = 0;

      _this.__color.v = v;
      _this.__color.s = s;

      _this.setValue(_this.__color.toOriginal());


      return false;

    }

    function setH(e) {

      e.preventDefault();

      var s = dom.getHeight(_this.__hue_field);
      var o = dom.getOffset(_this.__hue_field);
      var h = 1 - (e.clientY - o.top + document.body.scrollTop) / s;

      if (h > 1) h = 1;
      else if (h < 0) h = 0;

      _this.__color.h = h * 360;

      _this.setValue(_this.__color.toOriginal());

      return false;

    }

  };

  ColorController.superclass = Controller;

  common.extend(

      ColorController.prototype,
      Controller.prototype,

      {

        updateDisplay: function() {

          var i = interpret(this.getValue());

          if (i !== false) {

            var mismatch = false;

            // Check for mismatch on the interpreted value.

            common.each(Color.COMPONENTS, function(component) {
              if (!common.isUndefined(i[component]) &&
                  !common.isUndefined(this.__color.__state[component]) &&
                  i[component] !== this.__color.__state[component]) {
                mismatch = true;
                return {}; // break
              }
            }, this);

            // If nothing diverges, we keep our previous values
            // for statefulness, otherwise we recalculate fresh
            if (mismatch) {
              common.extend(this.__color.__state, i);
            }

          }

          common.extend(this.__temp.__state, this.__color.__state);

          this.__temp.a = 1;

          var flip = (this.__color.v < .5 || this.__color.s > .5) ? 255 : 0;
          var _flip = 255 - flip;

          common.extend(this.__field_knob.style, {
            marginLeft: 100 * this.__color.s - 7 + 'px',
            marginTop: 100 * (1 - this.__color.v) - 7 + 'px',
            backgroundColor: this.__temp.toString(),
            border: this.__field_knob_border + 'rgb(' + flip + ',' + flip + ',' + flip +')'
          });

          this.__hue_knob.style.marginTop = (1 - this.__color.h / 360) * 100 + 'px'

          this.__temp.s = 1;
          this.__temp.v = 1;

          linearGradient(this.__saturation_field, 'left', '#fff', this.__temp.toString());

          common.extend(this.__input.style, {
            backgroundColor: this.__input.value = this.__color.toString(),
            color: 'rgb(' + flip + ',' + flip + ',' + flip +')',
            textShadow: this.__input_textShadow + 'rgba(' + _flip + ',' + _flip + ',' + _flip +',.7)'
          });

        }

      }

  );
  
  var vendors = ['-moz-','-o-','-webkit-','-ms-',''];
  
  function linearGradient(elem, x, a, b) {
    elem.style.background = '';
    common.each(vendors, function(vendor) {
      elem.style.cssText += 'background: ' + vendor + 'linear-gradient('+x+', '+a+' 0%, ' + b + ' 100%); ';
    });
  }
  
  function hueGradient(elem) {
    elem.style.background = '';
    elem.style.cssText += 'background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);'
    elem.style.cssText += 'background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);'
    elem.style.cssText += 'background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);'
    elem.style.cssText += 'background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);'
    elem.style.cssText += 'background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);'
  }


  return ColorController;

})(dat.controllers.Controller,
dat.dom.dom,
dat.color.Color = (function (interpret, math, toString, common) {

  var Color = function() {

    this.__state = interpret.apply(this, arguments);

    if (this.__state === false) {
      throw 'Failed to interpret color arguments';
    }

    this.__state.a = this.__state.a || 1;


  };

  Color.COMPONENTS = ['r','g','b','h','s','v','hex','a'];

  common.extend(Color.prototype, {

    toString: function() {
      return toString(this);
    },

    toOriginal: function() {
      return this.__state.conversion.write(this);
    }

  });

  defineRGBComponent(Color.prototype, 'r', 2);
  defineRGBComponent(Color.prototype, 'g', 1);
  defineRGBComponent(Color.prototype, 'b', 0);

  defineHSVComponent(Color.prototype, 'h');
  defineHSVComponent(Color.prototype, 's');
  defineHSVComponent(Color.prototype, 'v');

  Object.defineProperty(Color.prototype, 'a', {

    get: function() {
      return this.__state.a;
    },

    set: function(v) {
      this.__state.a = v;
    }

  });

  Object.defineProperty(Color.prototype, 'hex', {

    get: function() {

      if (!this.__state.space !== 'HEX') {
        this.__state.hex = math.rgb_to_hex(this.r, this.g, this.b);
      }

      return this.__state.hex;

    },

    set: function(v) {

      this.__state.space = 'HEX';
      this.__state.hex = v;

    }

  });

  function defineRGBComponent(target, component, componentHexIndex) {

    Object.defineProperty(target, component, {

      get: function() {

        if (this.__state.space === 'RGB') {
          return this.__state[component];
        }

        recalculateRGB(this, component, componentHexIndex);

        return this.__state[component];

      },

      set: function(v) {

        if (this.__state.space !== 'RGB') {
          recalculateRGB(this, component, componentHexIndex);
          this.__state.space = 'RGB';
        }

        this.__state[component] = v;

      }

    });

  }

  function defineHSVComponent(target, component) {

    Object.defineProperty(target, component, {

      get: function() {

        if (this.__state.space === 'HSV')
          return this.__state[component];

        recalculateHSV(this);

        return this.__state[component];

      },

      set: function(v) {

        if (this.__state.space !== 'HSV') {
          recalculateHSV(this);
          this.__state.space = 'HSV';
        }

        this.__state[component] = v;

      }

    });

  }

  function recalculateRGB(color, component, componentHexIndex) {

    if (color.__state.space === 'HEX') {

      color.__state[component] = math.component_from_hex(color.__state.hex, componentHexIndex);

    } else if (color.__state.space === 'HSV') {

      common.extend(color.__state, math.hsv_to_rgb(color.__state.h, color.__state.s, color.__state.v));

    } else {

      throw 'Corrupted color state';

    }

  }

  function recalculateHSV(color) {

    var result = math.rgb_to_hsv(color.r, color.g, color.b);

    common.extend(color.__state,
        {
          s: result.s,
          v: result.v
        }
    );

    if (!common.isNaN(result.h)) {
      color.__state.h = result.h;
    } else if (common.isUndefined(color.__state.h)) {
      color.__state.h = 0;
    }

  }

  return Color;

})(dat.color.interpret,
dat.color.math = (function () {

  var tmpComponent;

  return {

    hsv_to_rgb: function(h, s, v) {

      var hi = Math.floor(h / 60) % 6;

      var f = h / 60 - Math.floor(h / 60);
      var p = v * (1.0 - s);
      var q = v * (1.0 - (f * s));
      var t = v * (1.0 - ((1.0 - f) * s));
      var c = [
        [v, t, p],
        [q, v, p],
        [p, v, t],
        [p, q, v],
        [t, p, v],
        [v, p, q]
      ][hi];

      return {
        r: c[0] * 255,
        g: c[1] * 255,
        b: c[2] * 255
      };

    },

    rgb_to_hsv: function(r, g, b) {

      var min = Math.min(r, g, b),
          max = Math.max(r, g, b),
          delta = max - min,
          h, s;

      if (max != 0) {
        s = delta / max;
      } else {
        return {
          h: NaN,
          s: 0,
          v: 0
        };
      }

      if (r == max) {
        h = (g - b) / delta;
      } else if (g == max) {
        h = 2 + (b - r) / delta;
      } else {
        h = 4 + (r - g) / delta;
      }
      h /= 6;
      if (h < 0) {
        h += 1;
      }

      return {
        h: h * 360,
        s: s,
        v: max / 255
      };
    },

    rgb_to_hex: function(r, g, b) {
      var hex = this.hex_with_component(0, 2, r);
      hex = this.hex_with_component(hex, 1, g);
      hex = this.hex_with_component(hex, 0, b);
      return hex;
    },

    component_from_hex: function(hex, componentIndex) {
      return (hex >> (componentIndex * 8)) & 0xFF;
    },

    hex_with_component: function(hex, componentIndex, value) {
      return value << (tmpComponent = componentIndex * 8) | (hex & ~ (0xFF << tmpComponent));
    }

  }

})(),
dat.color.toString,
dat.utils.common),
dat.color.interpret,
dat.utils.common),
dat.utils.requestAnimationFrame = (function () {

  /**
   * requirejs version of Paul Irish's RequestAnimationFrame
   * http://paulirish.com/2011/requestanimationframe-for-smart-animating/
   */

  return window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function(callback, element) {

        window.setTimeout(callback, 1000 / 60);

      };
})(),
dat.dom.CenteredDiv = (function (dom, common) {


  var CenteredDiv = function() {

    this.backgroundElement = document.createElement('div');
    common.extend(this.backgroundElement.style, {
      backgroundColor: 'rgba(0,0,0,0.8)',
      top: 0,
      left: 0,
      display: 'none',
      zIndex: '1000',
      opacity: 0,
      WebkitTransition: 'opacity 0.2s linear'
    });

    dom.makeFullscreen(this.backgroundElement);
    this.backgroundElement.style.position = 'fixed';

    this.domElement = document.createElement('div');
    common.extend(this.domElement.style, {
      position: 'fixed',
      display: 'none',
      zIndex: '1001',
      opacity: 0,
      WebkitTransition: '-webkit-transform 0.2s ease-out, opacity 0.2s linear'
    });


    document.body.appendChild(this.backgroundElement);
    document.body.appendChild(this.domElement);

    var _this = this;
    dom.bind(this.backgroundElement, 'click', function() {
      _this.hide();
    });


  };

  CenteredDiv.prototype.show = function() {

    var _this = this;
    


    this.backgroundElement.style.display = 'block';

    this.domElement.style.display = 'block';
    this.domElement.style.opacity = 0;
//    this.domElement.style.top = '52%';
    this.domElement.style.webkitTransform = 'scale(1.1)';

    this.layout();

    common.defer(function() {
      _this.backgroundElement.style.opacity = 1;
      _this.domElement.style.opacity = 1;
      _this.domElement.style.webkitTransform = 'scale(1)';
    });

  };

  CenteredDiv.prototype.hide = function() {

    var _this = this;

    var hide = function() {

      _this.domElement.style.display = 'none';
      _this.backgroundElement.style.display = 'none';

      dom.unbind(_this.domElement, 'webkitTransitionEnd', hide);
      dom.unbind(_this.domElement, 'transitionend', hide);
      dom.unbind(_this.domElement, 'oTransitionEnd', hide);

    };

    dom.bind(this.domElement, 'webkitTransitionEnd', hide);
    dom.bind(this.domElement, 'transitionend', hide);
    dom.bind(this.domElement, 'oTransitionEnd', hide);

    this.backgroundElement.style.opacity = 0;
//    this.domElement.style.top = '48%';
    this.domElement.style.opacity = 0;
    this.domElement.style.webkitTransform = 'scale(1.1)';

  };

  CenteredDiv.prototype.layout = function() {
    this.domElement.style.left = window.innerWidth/2 - dom.getWidth(this.domElement) / 2 + 'px';
    this.domElement.style.top = window.innerHeight/2 - dom.getHeight(this.domElement) / 2 + 'px';
  };
  
  function lockScroll(e) {
    console.log(e);
  }

  return CenteredDiv;

})(dat.dom.dom,
dat.utils.common),
dat.dom.dom,
dat.utils.common);

/***/ }),

/***/ 1720:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

var _create = __webpack_require__(384);

var _create2 = _interopRequireDefault(_create);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function init_TransformGizmos() {

      'use strict';

      var GizmoMaterial = function GizmoMaterial(parameters) {

            THREE.MeshBasicMaterial.call(this);

            this.depthTest = false;
            this.depthWrite = false;
            this.side = THREE.FrontSide;
            this.transparent = true;

            this.setValues(parameters);

            this.oldColor = this.color.clone();
            this.oldOpacity = this.opacity;

            this.highlight = function (highlighted) {

                  if (highlighted) {

                        this.color.setRGB(1, 230 / 255, 3 / 255);
                        this.opacity = 1;
                  } else {

                        this.color.copy(this.oldColor);
                        this.opacity = this.oldOpacity;
                  }
            };
      };

      GizmoMaterial.prototype = (0, _create2.default)(THREE.MeshBasicMaterial.prototype);

      var GizmoLineMaterial = function GizmoLineMaterial(parameters) {

            THREE.LineBasicMaterial.call(this);

            this.depthTest = false;
            this.depthWrite = false;
            this.transparent = true;
            this.linewidth = 3;

            this.setValues(parameters);

            this.oldColor = this.color.clone();
            this.oldOpacity = this.opacity;

            this.highlight = function (highlighted) {

                  if (highlighted) {

                        this.color.setRGB(1, 230 / 255, 3 / 255);
                        this.opacity = 1;
                  } else {

                        this.color.copy(this.oldColor);
                        this.opacity = this.oldOpacity;
                  }
            };
      };

      GizmoLineMaterial.prototype = (0, _create2.default)(THREE.LineBasicMaterial.prototype);

      // polyfill
      if (THREE.PolyhedronGeometry === undefined) {
            THREE.PolyhedronGeometry = function (vertices, indices, radius, detail) {

                  THREE.Geometry.call(this);

                  this.type = 'PolyhedronGeometry';

                  this.parameters = {
                        vertices: vertices,
                        indices: indices,
                        radius: radius,
                        detail: detail
                  };

                  radius = radius || 1;
                  detail = detail || 0;

                  var that = this;

                  for (var i = 0, l = vertices.length; i < l; i += 3) {

                        prepare(new THREE.Vector3(vertices[i], vertices[i + 1], vertices[i + 2]));
                  }

                  var midpoints = [],
                      p = this.vertices;

                  var faces = [];

                  for (var i = 0, j = 0, l = indices.length; i < l; i += 3, j++) {

                        var v1 = p[indices[i]];
                        var v2 = p[indices[i + 1]];
                        var v3 = p[indices[i + 2]];

                        faces[j] = new THREE.Face3(v1.index, v2.index, v3.index, [v1.clone(), v2.clone(), v3.clone()]);
                  }

                  var centroid = new THREE.Vector3();

                  for (var i = 0, l = faces.length; i < l; i++) {

                        subdivide(faces[i], detail);
                  }

                  // Handle case when face straddles the seam

                  for (var i = 0, l = this.faceVertexUvs[0].length; i < l; i++) {

                        var uvs = this.faceVertexUvs[0][i];

                        var x0 = uvs[0].x;
                        var x1 = uvs[1].x;
                        var x2 = uvs[2].x;

                        var max = Math.max(x0, Math.max(x1, x2));
                        var min = Math.min(x0, Math.min(x1, x2));

                        if (max > 0.9 && min < 0.1) {
                              // 0.9 is somewhat arbitrary

                              if (x0 < 0.2) uvs[0].x += 1;
                              if (x1 < 0.2) uvs[1].x += 1;
                              if (x2 < 0.2) uvs[2].x += 1;
                        }
                  }

                  // Apply radius

                  for (var i = 0, l = this.vertices.length; i < l; i++) {

                        this.vertices[i].multiplyScalar(radius);
                  }

                  // Merge vertices

                  this.mergeVertices();

                  this.computeFaceNormals();

                  this.boundingSphere = new THREE.Sphere(new THREE.Vector3(), radius);

                  // Project vector onto sphere's surface

                  function prepare(vector) {

                        var vertex = vector.normalize().clone();
                        vertex.index = that.vertices.push(vertex) - 1;

                        // Texture coords are equivalent to map coords, calculate angle and convert to fraction of a circle.

                        var u = azimuth(vector) / 2 / Math.PI + 0.5;
                        var v = inclination(vector) / Math.PI + 0.5;
                        vertex.uv = new THREE.Vector2(u, 1 - v);

                        return vertex;
                  }

                  // Approximate a curved face with recursively sub-divided triangles.

                  function make(v1, v2, v3) {

                        var face = new THREE.Face3(v1.index, v2.index, v3.index, [v1.clone(), v2.clone(), v3.clone()]);
                        that.faces.push(face);

                        centroid.copy(v1).add(v2).add(v3).divideScalar(3);

                        var azi = azimuth(centroid);

                        that.faceVertexUvs[0].push([correctUV(v1.uv, v1, azi), correctUV(v2.uv, v2, azi), correctUV(v3.uv, v3, azi)]);
                  }

                  // Analytically subdivide a face to the required detail level.

                  function subdivide(face, detail) {

                        var cols = Math.pow(2, detail);
                        var cells = Math.pow(4, detail);
                        var a = prepare(that.vertices[face.a]);
                        var b = prepare(that.vertices[face.b]);
                        var c = prepare(that.vertices[face.c]);
                        var v = [];

                        // Construct all of the vertices for this subdivision.

                        for (var i = 0; i <= cols; i++) {

                              v[i] = [];

                              var aj = prepare(a.clone().lerp(c, i / cols));
                              var bj = prepare(b.clone().lerp(c, i / cols));
                              var rows = cols - i;

                              for (var j = 0; j <= rows; j++) {

                                    if (j == 0 && i == cols) {

                                          v[i][j] = aj;
                                    } else {

                                          v[i][j] = prepare(aj.clone().lerp(bj, j / rows));
                                    }
                              }
                        }

                        // Construct all of the faces.

                        for (var i = 0; i < cols; i++) {

                              for (var j = 0; j < 2 * (cols - i) - 1; j++) {

                                    var k = Math.floor(j / 2);

                                    if (j % 2 == 0) {

                                          make(v[i][k + 1], v[i + 1][k], v[i][k]);
                                    } else {

                                          make(v[i][k + 1], v[i + 1][k + 1], v[i + 1][k]);
                                    }
                              }
                        }
                  }

                  // Angle around the Y axis, counter-clockwise when looking from above.

                  function azimuth(vector) {

                        return Math.atan2(vector.z, -vector.x);
                  }

                  // Angle above the XZ plane.

                  function inclination(vector) {

                        return Math.atan2(-vector.y, Math.sqrt(vector.x * vector.x + vector.z * vector.z));
                  }

                  // Texture fixing helper. Spheres have some odd behaviours.

                  function correctUV(uv, vector, azimuth) {

                        if (azimuth < 0 && uv.x === 1) uv = new THREE.Vector2(uv.x - 1, uv.y);
                        if (vector.x === 0 && vector.z === 0) uv = new THREE.Vector2(azimuth / 2 / Math.PI + 0.5, uv.y);
                        return uv.clone();
                  }
            };

            THREE.PolyhedronGeometry.prototype = (0, _create2.default)(THREE.Geometry.prototype);
      }

      // polyfill
      if (THREE.OctahedronGeometry === undefined) {
            THREE.OctahedronGeometry = function (radius, detail) {

                  this.parameters = {
                        radius: radius,
                        detail: detail
                  };

                  var vertices = [1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1];

                  var indices = [0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2];

                  THREE.PolyhedronGeometry.call(this, vertices, indices, radius, detail);

                  this.type = 'OctahedronGeometry';

                  this.parameters = {
                        radius: radius,
                        detail: detail
                  };
            };

            THREE.OctahedronGeometry.prototype = (0, _create2.default)(THREE.Geometry.prototype);
      }

      // polyfill
      if (THREE.TorusGeometry === undefined) {
            THREE.TorusGeometry = function (radius, tube, radialSegments, tubularSegments, arc) {

                  THREE.Geometry.call(this);

                  this.type = 'TorusGeometry';

                  this.parameters = {
                        radius: radius,
                        tube: tube,
                        radialSegments: radialSegments,
                        tubularSegments: tubularSegments,
                        arc: arc
                  };

                  radius = radius || 100;
                  tube = tube || 40;
                  radialSegments = radialSegments || 8;
                  tubularSegments = tubularSegments || 6;
                  arc = arc || Math.PI * 2;

                  var center = new THREE.Vector3(),
                      uvs = [],
                      normals = [];

                  for (var j = 0; j <= radialSegments; j++) {

                        for (var i = 0; i <= tubularSegments; i++) {

                              var u = i / tubularSegments * arc;
                              var v = j / radialSegments * Math.PI * 2;

                              center.x = radius * Math.cos(u);
                              center.y = radius * Math.sin(u);

                              var vertex = new THREE.Vector3();
                              vertex.x = (radius + tube * Math.cos(v)) * Math.cos(u);
                              vertex.y = (radius + tube * Math.cos(v)) * Math.sin(u);
                              vertex.z = tube * Math.sin(v);

                              this.vertices.push(vertex);

                              uvs.push(new THREE.Vector2(i / tubularSegments, j / radialSegments));
                              normals.push(vertex.clone().sub(center).normalize());
                        }
                  }

                  for (var j = 1; j <= radialSegments; j++) {

                        for (var i = 1; i <= tubularSegments; i++) {

                              var a = (tubularSegments + 1) * j + i - 1;
                              var b = (tubularSegments + 1) * (j - 1) + i - 1;
                              var c = (tubularSegments + 1) * (j - 1) + i;
                              var d = (tubularSegments + 1) * j + i;

                              var face = new THREE.Face3(a, b, d, [normals[a].clone(), normals[b].clone(), normals[d].clone()]);
                              this.faces.push(face);
                              this.faceVertexUvs[0].push([uvs[a].clone(), uvs[b].clone(), uvs[d].clone()]);

                              face = new THREE.Face3(b, c, d, [normals[b].clone(), normals[c].clone(), normals[d].clone()]);
                              this.faces.push(face);
                              this.faceVertexUvs[0].push([uvs[b].clone(), uvs[c].clone(), uvs[d].clone()]);
                        }
                  }

                  this.computeFaceNormals();
            };

            THREE.TorusGeometry.prototype = (0, _create2.default)(THREE.Geometry.prototype);
      }

      var createCircleGeometry = function createCircleGeometry(radius, facing, arc) {

            var geometry = new THREE.Geometry();
            arc = arc ? arc : 1;
            for (var i = 0; i <= 64 * arc; ++i) {
                  if (facing == 'x') geometry.vertices.push(new THREE.Vector3(0, Math.cos(i / 32 * Math.PI), Math.sin(i / 32 * Math.PI)).multiplyScalar(radius));
                  if (facing == 'y') geometry.vertices.push(new THREE.Vector3(Math.cos(i / 32 * Math.PI), 0, Math.sin(i / 32 * Math.PI)).multiplyScalar(radius));
                  if (facing == 'z') geometry.vertices.push(new THREE.Vector3(Math.sin(i / 32 * Math.PI), Math.cos(i / 32 * Math.PI), 0).multiplyScalar(radius));
            }

            return geometry;
      };

      var createArrowGeometry = function createArrowGeometry(radiusTop, radiusBottom, height, radialSegments, heightSegments, openEnded) {

            var arrowGeometry = new THREE.Geometry();
            var mesh = new THREE.Mesh(new THREE.CylinderGeometry(radiusTop, radiusBottom, height, radialSegments, heightSegments, openEnded));
            mesh.position.y = 0.5;
            mesh.updateMatrix();

            arrowGeometry.merge(mesh.geometry, mesh.matrix);

            return arrowGeometry;
      };

      var createLineGeometry = function createLineGeometry(axis) {

            var lineGeometry = new THREE.Geometry();
            if (axis === 'X') lineGeometry.vertices.push(new THREE.Vector3(0, 0, 0), new THREE.Vector3(1, 0, 0));else if (axis === 'Y') lineGeometry.vertices.push(new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 1, 0));else if (axis === 'Z') lineGeometry.vertices.push(new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, 1));

            return lineGeometry;
      };

      THREE.TransformGizmo = function () {

            var scope = this;
            var showPickers = false; //debug
            var showActivePlane = false; //debug

            this.init = function () {

                  THREE.Object3D.call(this);

                  this.handles = new THREE.Object3D();
                  this.pickers = new THREE.Object3D();
                  this.planes = new THREE.Object3D();
                  this.highlights = new THREE.Object3D();
                  this.hemiPicker = new THREE.Object3D();
                  this.subPickers = new THREE.Object3D();

                  this.add(this.handles);
                  this.add(this.pickers);
                  this.add(this.planes);
                  this.add(this.highlights);
                  this.add(this.hemiPicker);
                  this.add(this.subPickers);

                  //// PLANES

                  var planeGeometry = new THREE.PlaneBufferGeometry(50, 50, 2, 2);
                  var planeMaterial = new THREE.MeshBasicMaterial({ wireframe: true });
                  planeMaterial.side = THREE.DoubleSide;

                  var planes = {
                        "XY": new THREE.Mesh(planeGeometry, planeMaterial),
                        "YZ": new THREE.Mesh(planeGeometry, planeMaterial),
                        "XZ": new THREE.Mesh(planeGeometry, planeMaterial),
                        "XYZE": new THREE.Mesh(planeGeometry, planeMaterial)
                  };

                  this.activePlane = planes["XYZE"];

                  planes["YZ"].rotation.set(0, Math.PI / 2, 0);
                  planes["XZ"].rotation.set(-Math.PI / 2, 0, 0);

                  for (var i in planes) {
                        planes[i].name = i;
                        this.planes.add(planes[i]);
                        this.planes[i] = planes[i];
                        planes[i].visible = false;
                  }

                  this.setupGizmos();
                  this.activeMode = "";

                  // reset Transformations

                  this.traverse(function (child) {
                        if (child instanceof THREE.Mesh) {
                              child.updateMatrix();

                              var tempGeometry = new THREE.Geometry();
                              if (child.geometry instanceof THREE.BufferGeometry) {
                                    child.geometry = new THREE.Geometry().fromBufferGeometry(child.geometry);
                              }
                              tempGeometry.merge(child.geometry, child.matrix);

                              child.geometry = tempGeometry;
                              child.position.set(0, 0, 0);
                              child.rotation.set(0, 0, 0);
                              child.scale.set(1, 1, 1);
                        }
                  });
            };

            this.hide = function () {
                  this.traverse(function (child) {
                        child.visible = false;
                  });
            };

            this.show = function () {
                  this.traverse(function (child) {
                        child.visible = true;
                        if (child.parent == scope.pickers || child.parent == scope.hemiPicker) child.visible = showPickers;
                        if (child.parent == scope.planes) child.visible = false;
                  });
                  this.activePlane.visible = showActivePlane;
            };

            this.highlight = function (axis) {
                  this.traverse(function (child) {
                        if (child.material && child.material.highlight) {
                              if (child.name == axis) {
                                    child.material.highlight(true);
                              } else {
                                    child.material.highlight(false);
                              }
                        }
                  });
            };

            this.setupGizmos = function () {

                  var addGizmos = function addGizmos(gizmoMap, parent) {

                        for (var name in gizmoMap) {

                              for (var i = gizmoMap[name].length; i--;) {

                                    var object = gizmoMap[name][i][0];
                                    var position = gizmoMap[name][i][1];
                                    var rotation = gizmoMap[name][i][2];
                                    var visble = gizmoMap[name][i][3];

                                    object.name = name;

                                    if (position) object.position.set(position[0], position[1], position[2]);
                                    if (rotation) object.rotation.set(rotation[0], rotation[1], rotation[2]);
                                    if (visble) object.visble = visble;

                                    parent.add(object);
                              }
                        }
                  };

                  this.setHandlePickerGizmos();

                  addGizmos(this.handleGizmos, this.handles);
                  addGizmos(this.pickerGizmos, this.pickers);
                  addGizmos(this.highlightGizmos, this.highlights);
                  addGizmos(this.hemiPickerGizmos, this.hemiPicker);
                  addGizmos(this.subPickerGizmos, this.subPickers);

                  this.hide();
                  this.show();
            };
      };

      THREE.TransformGizmo.prototype = (0, _create2.default)(THREE.Object3D.prototype);

      THREE.TransformGizmo.prototype.update = function (rotation, eye) {

            var vec1 = new THREE.Vector3(0, 0, 0);
            var vec2 = new THREE.Vector3(0, 1, 0);
            var lookAtMatrix = new THREE.Matrix4();

            this.traverse(function (child) {
                  if (child.name) {
                        if (child.name.search("E") != -1) {
                              child.quaternion.setFromRotationMatrix(lookAtMatrix.lookAt(eye, vec1, vec2));
                        } else if (child.name.search("X") != -1 || child.name.search("Y") != -1 || child.name.search("Z") != -1) {
                              child.quaternion.setFromEuler(rotation);
                        }
                  }
            });
      };

      THREE.TransformGizmoTranslate = function () {

            THREE.TransformGizmo.call(this);

            this.setHandlePickerGizmos = function () {

                  var arrowGeometry = createArrowGeometry(0, 0.05, 0.2, 12, 1, false);
                  var lineXGeometry = createLineGeometry('X');
                  var lineYGeometry = createLineGeometry('Y');
                  var lineZGeometry = createLineGeometry('Z');

                  this.handleGizmos = {
                        X: [[new THREE.Mesh(arrowGeometry, new GizmoMaterial({ color: 0xf12c2c })), [0.5, 0, 0], [0, 0, -Math.PI / 2]], [new THREE.Line(lineXGeometry, new GizmoLineMaterial({ color: 0xf12c2c }))]],
                        Y: [[new THREE.Mesh(arrowGeometry, new GizmoMaterial({ color: 0x0bb80b })), [0, 0.5, 0]], [new THREE.Line(lineYGeometry, new GizmoLineMaterial({ color: 0x0bb80b }))]],
                        Z: [[new THREE.Mesh(arrowGeometry, new GizmoMaterial({ color: 0x2c2cf1 })), [0, 0, 0.5], [Math.PI / 2, 0, 0]], [new THREE.Line(lineZGeometry, new GizmoLineMaterial({ color: 0x2c2cf1 }))]],
                        XYZ: [[new THREE.Mesh(new THREE.OctahedronGeometry(0.1, 0), new GizmoMaterial({ color: 0xffffff, opacity: 0.25 })), [0, 0, 0], [0, 0, 0]]],
                        XY: [[new THREE.Mesh(new THREE.PlaneBufferGeometry(0.29, 0.29), new GizmoMaterial({ color: 0xffff00, opacity: 0.25 })), [0.15, 0.15, 0]]],
                        YZ: [[new THREE.Mesh(new THREE.PlaneBufferGeometry(0.29, 0.29), new GizmoMaterial({ color: 0x00ffff, opacity: 0.25 })), [0, 0.15, 0.15], [0, Math.PI / 2, 0]]],
                        XZ: [[new THREE.Mesh(new THREE.PlaneBufferGeometry(0.29, 0.29), new GizmoMaterial({ color: 0xff00ff, opacity: 0.25 })), [0.15, 0, 0.15], [-Math.PI / 2, 0, 0]]]
                  };

                  this.pickerGizmos = {
                        X: [[new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0, 1, 4, 1, false), new GizmoMaterial({ color: 0xff0000, opacity: 0.25 })), [0.6, 0, 0], [0, 0, -Math.PI / 2]]],
                        Y: [[new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0, 1, 4, 1, false), new GizmoMaterial({ color: 0x00ff00, opacity: 0.25 })), [0, 0.6, 0]]],
                        Z: [[new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0, 1, 4, 1, false), new GizmoMaterial({ color: 0x0000ff, opacity: 0.25 })), [0, 0, 0.6], [Math.PI / 2, 0, 0]]],
                        XYZ: [[new THREE.Mesh(new THREE.OctahedronGeometry(0.2, 0), new GizmoMaterial({ color: 0xffffff, opacity: 0.25 }))]],
                        XY: [[new THREE.Mesh(new THREE.PlaneBufferGeometry(0.4, 0.4), new GizmoMaterial({ color: 0xffff00, opacity: 0.25 })), [0.2, 0.2, 0]]],
                        YZ: [[new THREE.Mesh(new THREE.PlaneBufferGeometry(0.4, 0.4), new GizmoMaterial({ color: 0x00ffff, opacity: 0.25 })), [0, 0.2, 0.2], [0, Math.PI / 2, 0]]],
                        XZ: [[new THREE.Mesh(new THREE.PlaneBufferGeometry(0.4, 0.4), new GizmoMaterial({ color: 0xff00ff, opacity: 0.25 })), [0.2, 0, 0.2], [-Math.PI / 2, 0, 0]]]
                  };

                  this.hemiPickerGizmos = {
                        XYZ: [[new THREE.Mesh(new THREE.BoxGeometry(1.2, 1.2, 1.2), new GizmoMaterial({ color: 0x0000ff })), [0.5, 0.5, 0.5], null, false]]
                  };
            };

            this.setActivePlane = function (axis, eye) {

                  var tempMatrix = new THREE.Matrix4();
                  eye.applyMatrix4(tempMatrix.getInverse(tempMatrix.extractRotation(this.planes["XY"].matrixWorld)));

                  if (axis == "X") {
                        this.activePlane = this.planes["XY"];
                        if (Math.abs(eye.y) > Math.abs(eye.z)) this.activePlane = this.planes["XZ"];
                  }

                  if (axis == "Y") {
                        this.activePlane = this.planes["XY"];
                        if (Math.abs(eye.x) > Math.abs(eye.z)) this.activePlane = this.planes["YZ"];
                  }

                  if (axis == "Z") {
                        this.activePlane = this.planes["XZ"];
                        if (Math.abs(eye.x) > Math.abs(eye.y)) this.activePlane = this.planes["YZ"];
                  }

                  if (axis == "XYZ") this.activePlane = this.planes["XYZE"];

                  if (axis == "XY") this.activePlane = this.planes["XY"];

                  if (axis == "YZ") this.activePlane = this.planes["YZ"];

                  if (axis == "XZ") this.activePlane = this.planes["XZ"];

                  this.hide();
                  this.show();
            };

            this.init();
      };

      THREE.TransformGizmoTranslate.prototype = (0, _create2.default)(THREE.TransformGizmo.prototype);

      THREE.TransformGizmoRotate = function () {

            THREE.TransformGizmo.call(this);

            this.setHandlePickerGizmos = function () {

                  this.handleGizmos = {
                        RX: [[new THREE.Line(createCircleGeometry(1, 'x', 0.5), new GizmoLineMaterial({ color: 0xff0000 }))]],
                        RY: [[new THREE.Line(createCircleGeometry(1, 'y', 0.5), new GizmoLineMaterial({ color: 0x00ff00 }))]],
                        RZ: [[new THREE.Line(createCircleGeometry(1, 'z', 0.5), new GizmoLineMaterial({ color: 0x0000ff }))]],
                        RE: [[new THREE.Line(createCircleGeometry(1.25, 'z', 1), new GizmoLineMaterial({ color: 0x00ffff }))]],
                        RXYZE: [[new THREE.Line(createCircleGeometry(1, 'z', 1), new GizmoLineMaterial({ color: 0xff00ff }))]]
                  };

                  this.pickerGizmos = {
                        RX: [[new THREE.Mesh(new THREE.TorusGeometry(1, 0.12, 4, 12, Math.PI), new GizmoMaterial({ color: 0xff0000, opacity: 0.25 })), [0, 0, 0], [0, -Math.PI / 2, -Math.PI / 2]]],
                        RY: [[new THREE.Mesh(new THREE.TorusGeometry(1, 0.12, 4, 12, Math.PI), new GizmoMaterial({ color: 0x00ff00, opacity: 0.25 })), [0, 0, 0], [Math.PI / 2, 0, 0]]],
                        RZ: [[new THREE.Mesh(new THREE.TorusGeometry(1, 0.12, 4, 12, Math.PI), new GizmoMaterial({ color: 0x0000ff, opacity: 0.25 })), [0, 0, 0], [0, 0, -Math.PI / 2]]],
                        RE: [[new THREE.Mesh(new THREE.TorusGeometry(1.25, 0.12, 2, 24), new GizmoMaterial({ color: 0x00ffff, opacity: 0.25 }))]],
                        RXYZE: [[new THREE.Mesh(new THREE.TorusGeometry(1, 0.12, 2, 24), new GizmoMaterial({ color: 0xff00ff, opacity: 0.25 }))]]
                  };
            };

            this.setActivePlane = function (axis) {

                  if (axis == "RE") this.activePlane = this.planes["XYZE"];

                  if (axis == "RX") this.activePlane = this.planes["YZ"];

                  if (axis == "RY") this.activePlane = this.planes["XZ"];

                  if (axis == "RZ") this.activePlane = this.planes["XY"];

                  this.hide();
                  this.show();
            };

            this.update = function (rotation, eye2) {

                  THREE.TransformGizmo.prototype.update.apply(this, arguments);

                  var tempMatrix = new THREE.Matrix4();
                  var worldRotation = new THREE.Euler(0, 0, 1);
                  var tempQuaternion = new THREE.Quaternion();
                  var unitX = new THREE.Vector3(1, 0, 0);
                  var unitY = new THREE.Vector3(0, 1, 0);
                  var unitZ = new THREE.Vector3(0, 0, 1);
                  var quaternionX = new THREE.Quaternion();
                  var quaternionY = new THREE.Quaternion();
                  var quaternionZ = new THREE.Quaternion();
                  var eye = eye2.clone();

                  worldRotation.copy(this.planes["XY"].rotation);
                  tempQuaternion.setFromEuler(worldRotation);

                  tempMatrix.makeRotationFromQuaternion(tempQuaternion).getInverse(tempMatrix);
                  eye.applyMatrix4(tempMatrix);

                  this.traverse(function (child) {

                        tempQuaternion.setFromEuler(worldRotation);

                        if (child.name == "RX") {
                              quaternionX.setFromAxisAngle(unitX, Math.atan2(-eye.y, eye.z));
                              tempQuaternion.multiplyQuaternions(tempQuaternion, quaternionX);
                              child.quaternion.copy(tempQuaternion);
                        }

                        if (child.name == "RY") {
                              quaternionY.setFromAxisAngle(unitY, Math.atan2(eye.x, eye.z));
                              tempQuaternion.multiplyQuaternions(tempQuaternion, quaternionY);
                              child.quaternion.copy(tempQuaternion);
                        }

                        if (child.name == "RZ") {
                              quaternionZ.setFromAxisAngle(unitZ, Math.atan2(eye.y, eye.x));
                              tempQuaternion.multiplyQuaternions(tempQuaternion, quaternionZ);
                              child.quaternion.copy(tempQuaternion);
                        }
                  });
            };

            this.init();
      };

      THREE.TransformGizmoRotate.prototype = (0, _create2.default)(THREE.TransformGizmo.prototype);

      THREE.TransformGizmoTranslateRotate = function () {

            THREE.TransformGizmo.call(this);

            var scope = this;

            this.setHandlePickerGizmos = function () {

                  var arrowGeometry = createArrowGeometry(0, 0.05, 0.2, 12, 1, false);
                  var lineGeometry = new THREE.Geometry();
                  lineGeometry.vertices.push(new THREE.Vector3(0, 0, -0.1), new THREE.Vector3(0, 0, 0.1), new THREE.Vector3(-0.1, 0, 0), new THREE.Vector3(0.1, 0, 0));
                  var theta = 0.15;

                  this.handleGizmos = {
                        Z: [[new THREE.Mesh(arrowGeometry, new GizmoMaterial({ color: 0xffffff })), [0, 0, 0.25], [Math.PI / 2, 0, 0]], [new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, 0.6, 4, 1, false), new GizmoMaterial({ color: 0xffffff })), [0, 0, 0.5], [Math.PI / 2, 0, 0]]],
                        RX: [[new THREE.Mesh(new THREE.TorusGeometry(1, 0.015, 12, 60, theta * 2 * Math.PI), new GizmoMaterial({ color: 0xff0000 })), [0, 0, 0], [theta * Math.PI, -Math.PI / 2, 0]], [new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.015, 60, 1, false), new GizmoMaterial({ color: 0xff0000 })), [0, 0, 1], [Math.PI / 2, 0, 0]]],
                        RY: [[new THREE.Mesh(new THREE.TorusGeometry(1, 0.015, 12, 60, theta * 2 * Math.PI), new GizmoMaterial({ color: 0x0000ff })), [0, 0, 0], [Math.PI / 2, 0, (0.5 - theta) * Math.PI]], [new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.01, 60, 1, false), new GizmoMaterial({ color: 0x0000ff })), [0, 0, 1]]]
                  };

                  this.pickerGizmos = {
                        Z: [[new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.65, 4, 1, false), new GizmoMaterial({ color: 0x0000ff, opacity: 0.25 })), [0, 0, 0.5], [Math.PI / 2, 0, 0]]],
                        RX: [[new THREE.Mesh(new THREE.TorusGeometry(1, 0.12, 4, 12, theta * 2 * Math.PI), new GizmoMaterial({ color: 0xff0000, opacity: 0.25 })), [0, 0, 0], [theta * Math.PI, -Math.PI / 2, 0]]],
                        RY: [[new THREE.Mesh(new THREE.TorusGeometry(1, 0.12, 4, 12, theta * 2 * Math.PI), new GizmoMaterial({ color: 0x0000ff, opacity: 0.25 })), [0, 0, 0], [Math.PI / 2, 0, (0.5 - theta) * Math.PI]]]
                  };

                  this.subPickerGizmos = {
                        Z: [[new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.65, 4, 1, false), new GizmoMaterial({ color: 0x0000ff, opacity: 0.25 })), [0, 0, 0.5], [Math.PI / 2, 0, 0]]]
                  };

                  this.highlightGizmos = {
                        Z: [],
                        RX: [[new THREE.Mesh(new THREE.TorusGeometry(1, 0.02, 12, 60, 2 * Math.PI), new GizmoMaterial({ color: 0xff0000, opacity: 1 })), [0, 0, 0], [0, -Math.PI / 2, -Math.PI / 2], false]],
                        RY: [[new THREE.Mesh(new THREE.TorusGeometry(1, 0.02, 12, 60, 2 * Math.PI), new GizmoMaterial({ color: 0x0000ff, opacity: 1 })), [0, 0, 0], [Math.PI / 2, 0, 0], false]]
                  };

                  this.hemiPickerGizmos = {
                        XYZ: [[new THREE.Mesh(new THREE.SphereGeometry(1.2, 8, 8, 0, Math.PI), new GizmoMaterial({ color: 0x0000ff })), null, null, false]]
                  };
            };

            this.setActivePlane = function (axis, eye) {

                  if (this.activeMode == "translate") {

                        var tempMatrix = new THREE.Matrix4();
                        eye.applyMatrix4(tempMatrix.getInverse(tempMatrix.extractRotation(this.planes["XY"].matrixWorld)));

                        if (axis == "X") {
                              this.activePlane = this.planes["XY"];
                              if (Math.abs(eye.y) > Math.abs(eye.z)) this.activePlane = this.planes["XZ"];
                        }

                        if (axis == "Y") {
                              this.activePlane = this.planes["XY"];
                              if (Math.abs(eye.x) > Math.abs(eye.z)) this.activePlane = this.planes["YZ"];
                        }

                        if (axis == "Z") {
                              this.activePlane = this.planes["XZ"];
                              if (Math.abs(eye.x) > Math.abs(eye.y)) this.activePlane = this.planes["YZ"];
                        }
                  } else if (this.activeMode == "rotate") {

                        if (axis == "RX") this.activePlane = this.planes["YZ"];

                        if (axis == "RY") this.activePlane = this.planes["XZ"];

                        if (axis == "RZ") this.activePlane = this.planes["XY"];
                  }

                  this.hide();
                  this.show();
            };

            this.update = function (rotation, eye2) {

                  if (this.activeMode == "translate") {

                        THREE.TransformGizmo.prototype.update.apply(this, arguments);
                  } else if (this.activeMode == "rotate") {

                        THREE.TransformGizmo.prototype.update.apply(this, arguments);

                        var tempMatrix = new THREE.Matrix4();
                        var worldRotation = new THREE.Euler(0, 0, 1);
                        var tempQuaternion = new THREE.Quaternion();
                        var unitX = new THREE.Vector3(1, 0, 0);
                        var unitY = new THREE.Vector3(0, 1, 0);
                        var unitZ = new THREE.Vector3(0, 0, 1);
                        var quaternionX = new THREE.Quaternion();
                        var quaternionY = new THREE.Quaternion();
                        var quaternionZ = new THREE.Quaternion();
                        var eye = eye2.clone();

                        worldRotation.copy(this.planes["XY"].rotation);
                        tempQuaternion.setFromEuler(worldRotation);

                        tempMatrix.makeRotationFromQuaternion(tempQuaternion).getInverse(tempMatrix);
                        eye.applyMatrix4(tempMatrix);

                        this.traverse(function (child) {

                              tempQuaternion.setFromEuler(worldRotation);

                              if (child.name == "RX") {
                                    quaternionX.setFromAxisAngle(unitX, Math.atan2(-eye.y, eye.z));
                                    tempQuaternion.multiplyQuaternions(tempQuaternion, quaternionX);
                                    child.quaternion.copy(tempQuaternion);
                              }

                              if (child.name == "RY") {
                                    quaternionY.setFromAxisAngle(unitY, Math.atan2(eye.x, eye.z));
                                    tempQuaternion.multiplyQuaternions(tempQuaternion, quaternionY);
                                    child.quaternion.copy(tempQuaternion);
                              }

                              if (child.name == "RZ") {
                                    quaternionZ.setFromAxisAngle(unitZ, Math.atan2(eye.y, eye.x));
                                    tempQuaternion.multiplyQuaternions(tempQuaternion, quaternionZ);
                                    child.quaternion.copy(tempQuaternion);
                              }
                        });
                  }
            };

            this.show = function () {
                  this.traverse(function (child) {
                        if (scope.parent == null || scope.parent.useAllPickers || child.parent != scope.handles) child.visible = true;
                        if (child.material) child.material.opacity = child.material.oldOpacity;
                        if (child.parent == scope.pickers || child.parent == scope.hemiPicker || child.parent == scope.subPickers) child.visible = false;
                        if (child.parent == scope.planes || child.parent == scope.highlights) child.visible = false;
                  });
                  this.activePlane.visible = false;
            };

            this.highlight = function (axis) {
                  this.traverse(function (child) {
                        if (child.material && child.material.highlight) {
                              if (child.name == axis) {
                                    if (child.parent == scope.highlights || child.parent == scope.handles) child.visible = true;
                                    child.material.highlight(true);
                              } else {
                                    child.material.highlight(false);
                                    child.material.opacity = 0.1;
                              }
                        }
                  });
            };

            this.init();
      };

      THREE.TransformGizmoTranslateRotate.prototype = (0, _create2.default)(THREE.TransformGizmo.prototype);

      THREE.TransformGizmoScale = function () {

            THREE.TransformGizmo.call(this);

            this.setHandlePickerGizmos = function () {

                  var arrowGeometry = createArrowGeometry(0.125, 0.125, 0.125);
                  var lineXGeometry = createLineGeometry('X');
                  var lineYGeometry = createLineGeometry('Y');
                  var lineZGeometry = createLineGeometry('Z');

                  this.handleGizmos = {
                        X: [[new THREE.Mesh(arrowGeometry, new GizmoMaterial({ color: 0xff0000 })), [0.5, 0, 0], [0, 0, -Math.PI / 2]], [new THREE.Line(lineXGeometry, new GizmoLineMaterial({ color: 0xff0000 }))]],
                        Y: [[new THREE.Mesh(arrowGeometry, new GizmoMaterial({ color: 0x00ff00 })), [0, 0.5, 0]], [new THREE.Line(lineYGeometry, new GizmoLineMaterial({ color: 0x00ff00 }))]],
                        Z: [[new THREE.Mesh(arrowGeometry, new GizmoMaterial({ color: 0x0000ff })), [0, 0, 0.5], [Math.PI / 2, 0, 0]], [new THREE.Line(lineZGeometry, new GizmoLineMaterial({ color: 0x0000ff }))]],
                        XYZ: [[new THREE.Mesh(new THREE.BoxGeometry(0.125, 0.125, 0.125), new GizmoMaterial({ color: 0xffffff, opacity: 0.25 }))]]
                  };

                  this.pickerGizmos = {
                        X: [[new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0, 1, 4, 1, false), new GizmoMaterial({ color: 0xff0000, opacity: 0.25 })), [0.6, 0, 0], [0, 0, -Math.PI / 2]]],
                        Y: [[new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0, 1, 4, 1, false), new GizmoMaterial({ color: 0x00ff00, opacity: 0.25 })), [0, 0.6, 0]]],
                        Z: [[new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0, 1, 4, 1, false), new GizmoMaterial({ color: 0x0000ff, opacity: 0.25 })), [0, 0, 0.6], [Math.PI / 2, 0, 0]]],
                        XYZ: [[new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.4, 0.4), new GizmoMaterial({ color: 0xffffff, opacity: 0.25 }))]]
                  };
            };

            this.setActivePlane = function (axis, eye) {

                  var tempMatrix = new THREE.Matrix4();
                  eye.applyMatrix4(tempMatrix.getInverse(tempMatrix.extractRotation(this.planes["XY"].matrixWorld)));

                  if (axis == "X") {
                        this.activePlane = this.planes["XY"];
                        if (Math.abs(eye.y) > Math.abs(eye.z)) this.activePlane = this.planes["XZ"];
                  }

                  if (axis == "Y") {
                        this.activePlane = this.planes["XY"];
                        if (Math.abs(eye.x) > Math.abs(eye.z)) this.activePlane = this.planes["YZ"];
                  }

                  if (axis == "Z") {
                        this.activePlane = this.planes["XZ"];
                        if (Math.abs(eye.x) > Math.abs(eye.y)) this.activePlane = this.planes["YZ"];
                  }

                  if (axis == "XYZ") this.activePlane = this.planes["XYZE"];

                  this.hide();
                  this.show();
            };

            this.init();
      };

      THREE.TransformGizmoScale.prototype = (0, _create2.default)(THREE.TransformGizmo.prototype);

      THREE.TransformControls = function (camera, domElement, mode) {

            // TODO: Make non-uniform scale and rotate play nice in hierarchies
            // TODO: ADD RXYZ contol

            THREE.Object3D.call(this);

            domElement = domElement !== undefined ? domElement : document;

            this.gizmo = {};
            switch (mode) {
                  case "translate":
                        this.gizmo[mode] = new THREE.TransformGizmoTranslate();
                        break;
                  case "rotate":
                        this.gizmo[mode] = new THREE.TransformGizmoRotate();
                        break;
                  case "transrotate":
                        this.gizmo[mode] = new THREE.TransformGizmoTranslateRotate();
                        break;
                  case "scale":
                        this.gizmo[mode] = new THREE.TransformGizmoScale();
                        break;
            }

            this.add(this.gizmo[mode]);
            this.gizmo[mode].hide();

            this.object = undefined;
            this.snap = null;
            this.snapDelta = 0;
            this.space = "world";
            this.size = 1;
            this.axis = null;
            this.useAllPickers = true;

            this.unitX = new THREE.Vector3(1, 0, 0);
            this.unitY = new THREE.Vector3(0, 1, 0);
            this.unitZ = new THREE.Vector3(0, 0, 1);
            this.normal = new THREE.Vector3(0, 0, 1);

            if (mode === "transrotate") {
                  var geometry = new THREE.Geometry();
                  geometry.vertices.push(new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, 1));
                  var material = new THREE.LineBasicMaterial({ color: 0x000000, linewidth: 2, depthTest: false });
                  this.startLine = new THREE.Line(geometry, material);
                  var geometry = new THREE.Geometry();
                  var material = new THREE.LineBasicMaterial({ color: 0xffe603, linewidth: 2, depthTest: false });
                  geometry.vertices.push(new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, 1));
                  this.endLine = new THREE.Line(geometry, material);
                  var geometry = new THREE.Geometry();
                  var material = new THREE.LineDashedMaterial({ color: 0x000000, linewidth: 1, depthTest: false });
                  geometry.vertices.push(new THREE.Vector3(0, -1, 0), new THREE.Vector3(0, 1, 0));
                  this.centerLine = new THREE.Line(geometry, material);

                  var map = THREE.ImageUtils.loadTexture(Autodesk.Viewing.Private.getResourceUrl("res/textures/centerMarker_X.png"));
                  map.magFilter = map.minFilter = THREE.NearestFilter;
                  var geometry = new THREE.CircleGeometry(0.1, 32);
                  var material = new THREE.MeshBasicMaterial({ opacity: 1, side: THREE.DoubleSide, transparent: true, map: map });
                  this.centerMark = new THREE.Mesh(geometry, material);
                  this.centerMark.rotation.set(Math.PI / 2, 0, 0);

                  this.ticks = {};
                  var map = THREE.ImageUtils.loadTexture(Autodesk.Viewing.Private.getResourceUrl("res/textures/cardinalPoint.png"));
                  map.magFilter = map.minFilter = THREE.NearestFilter;
                  var material = new THREE.MeshBasicMaterial({ depthTest: false, opacity: 1, transparent: true, side: THREE.DoubleSide, map: map });
                  var w = 0.12,
                      h = 0.25,
                      d = 1.15;

                  this.ticks["RX"] = new THREE.Object3D();
                  var geometry = new THREE.PlaneBufferGeometry(w, h);
                  var mesh = new THREE.Mesh(geometry, material);
                  mesh.position.set(0, 0, -d - h / 2);
                  mesh.rotation.set(Math.PI / 2, Math.PI / 2, 0);
                  this.ticks["RX"].add(mesh);

                  mesh = mesh.clone();
                  mesh.position.set(0, d + h / 2, 0);
                  mesh.rotation.set(0, Math.PI / 2, 0);
                  this.ticks["RX"].add(mesh);

                  mesh = mesh.clone();
                  mesh.position.set(0, 0, d + h / 2);
                  mesh.rotation.set(0, Math.PI / 2, Math.PI / 2);
                  this.ticks["RX"].add(mesh);

                  mesh = mesh.clone();
                  mesh.position.set(0, -d - h / 2, 0);
                  mesh.rotation.set(0, Math.PI / 2, 0);
                  this.ticks["RX"].add(mesh);

                  this.ticks["RY"] = new THREE.Object3D();
                  mesh = mesh.clone();
                  mesh.position.set(0, 0, -d - h / 2);
                  mesh.rotation.set(Math.PI / 2, 0, 0);
                  this.ticks["RY"].add(mesh);

                  mesh = mesh.clone();
                  mesh.position.set(-d - h / 2, 0, 0);
                  mesh.rotation.set(Math.PI / 2, 0, Math.PI / 2);
                  this.ticks["RY"].add(mesh);

                  mesh = mesh.clone();
                  mesh.position.set(0, 0, d + h / 2);
                  mesh.rotation.set(Math.PI / 2, 0, 0);
                  this.ticks["RY"].add(mesh);

                  mesh = mesh.clone();
                  mesh.position.set(d + h / 2, 0, 0);
                  mesh.rotation.set(Math.PI / 2, 0, Math.PI / 2);
                  this.ticks["RY"].add(mesh);
            }

            var scope = this;

            var _dragging = false;
            var _mode = mode;
            var _plane = "XY";

            var changeEvent = { type: "change" };
            var mouseDownEvent = { type: "mouseDown" };
            var mouseUpEvent = { type: "mouseUp", mode: _mode };
            var objectChangeEvent = { type: "objectChange" };

            var ray = new THREE.Raycaster();
            var pointerVector = new THREE.Vector3();
            var pointerDir = new THREE.Vector3();

            var point = new THREE.Vector3();
            var offset = new THREE.Vector3();

            var rotation = new THREE.Vector3();
            var offsetRotation = new THREE.Vector3();
            var scale = 1;

            var lookAtMatrix = new THREE.Matrix4();
            var eye = new THREE.Vector3();

            var tempMatrix = new THREE.Matrix4();
            var tempVector = new THREE.Vector3();
            var tempQuaternion = new THREE.Quaternion();
            var projX = new THREE.Vector3();
            var projY = new THREE.Vector3();
            var projZ = new THREE.Vector3();

            var quaternionXYZ = new THREE.Quaternion();
            var quaternionX = new THREE.Quaternion();
            var quaternionY = new THREE.Quaternion();
            var quaternionZ = new THREE.Quaternion();
            var quaternionE = new THREE.Quaternion();

            var oldPosition = new THREE.Vector3();
            var oldScale = new THREE.Vector3();
            var oldRotationMatrix = new THREE.Matrix4();

            var parentRotationMatrix = new THREE.Matrix4();
            var parentScale = new THREE.Vector3();

            var worldPosition = new THREE.Vector3();
            var worldRotation = new THREE.Euler();
            var worldRotationMatrix = new THREE.Matrix4();
            var camPosition = new THREE.Vector3();
            var camRotation = new THREE.Euler();

            this.attach = function (object) {

                  scope.object = object;

                  this.gizmo[_mode].show();

                  scope.update();

                  scope.updateUnitVectors();
            };

            this.detach = function (object) {

                  scope.object = undefined;
                  this.axis = null;

                  this.gizmo[_mode].hide();
            };

            this.setMode = function (mode) {

                  _mode = mode ? mode : _mode;

                  if (_mode == "scale") scope.space = "local";

                  this.gizmo[_mode].show();

                  this.update();
                  scope.dispatchEvent(changeEvent);
            };

            this.getPicker = function () {

                  return scope.gizmo[_mode].hemiPicker.children;
            };

            this.setPosition = function (position) {

                  this.object.position.copy(position);
                  this.update();
            };

            this.setNormal = function (normal) {

                  tempQuaternion.setFromUnitVectors(this.normal, normal);
                  this.unitX.applyQuaternion(tempQuaternion);
                  this.unitY.applyQuaternion(tempQuaternion);
                  this.unitZ.applyQuaternion(tempQuaternion);
                  this.normal.copy(normal);
                  if (this.object) {
                        this.object.quaternion.multiply(tempQuaternion);
                  }
                  this.update();
            };

            this.setSnap = function (snap, delta) {

                  scope.snap = snap;
                  scope.snapDelta = delta;
            };

            this.setSize = function (size) {

                  scope.size = size;
                  this.update();
                  scope.dispatchEvent(changeEvent);
            };

            this.setSpace = function (space) {

                  scope.space = space;
                  this.update();
                  scope.dispatchEvent(changeEvent);
            };

            this.update = function (highlight) {

                  if (scope.object === undefined) return;

                  scope.object.updateMatrixWorld();
                  worldPosition.setFromMatrixPosition(scope.object.matrixWorld);
                  worldRotation.setFromRotationMatrix(tempMatrix.extractRotation(scope.object.matrixWorld));

                  camera.updateMatrixWorld();
                  camPosition.setFromMatrixPosition(camera.matrixWorld);
                  //camRotation.setFromRotationMatrix( tempMatrix.extractRotation( camera.matrixWorld ) );

                  this.position.copy(worldPosition);

                  this.quaternion.setFromEuler(worldRotation);

                  this.normal.set(0, 0, 1);
                  this.normal.applyEuler(worldRotation);

                  // keep same screen height (100px)
                  var dist = worldPosition.distanceTo(camPosition);
                  var height = camera.isPerspective ? 2 * Math.tan(camera.fov * Math.PI / 360) * dist : dist;
                  var rect = domElement.getBoundingClientRect();
                  scale = 100 * height / rect.height;
                  this.scale.set(scale, scale, scale);

                  //eye.copy( camPosition ).sub( worldPosition ).normalize();

                  //if ( scope.space == "local" )
                  //    this.gizmo[_mode].update( worldRotation, eye );
                  //else if ( scope.space == "world" )
                  //    this.gizmo[_mode].update( new THREE.Euler(), eye );

                  if (highlight) this.gizmo[_mode].highlight(scope.axis);
            };

            this.updateUnitVectors = function () {

                  this.unitX.set(1, 0, 0);
                  this.unitY.set(0, 1, 0);
                  this.unitZ.set(0, 0, 1);
                  this.unitX.applyEuler(worldRotation);
                  this.unitY.applyEuler(worldRotation);
                  this.unitZ.applyEuler(worldRotation);
            };

            this.showRotationGizmos = function (set) {

                  var handles = this.gizmo[_mode].handles.children;
                  for (var i = 0; i < handles.length; i++) {
                        var child = handles[i];
                        child.visible = true;
                        if (child.name.search("R") !== -1) child.visible = set;
                  }
                  this.useAllPickers = set;
            };

            this.highlight = function () {

                  this.gizmo[_mode].highlight(this.axis || "Z");
            };

            this.onPointerHover = function (event) {

                  if (scope.object === undefined || _dragging === true) return false;

                  var pointer = event.pointers ? event.pointers[0] : event;

                  var intersect = intersectObjects(pointer, scope.useAllPickers ? scope.gizmo[_mode].pickers.children : scope.gizmo[_mode].subPickers.children);

                  var axis = null;
                  var mode = "";

                  if (intersect) {

                        axis = intersect.object.name;
                        mode = axis.search("R") != -1 ? "rotate" : "translate";
                  }

                  if (scope.axis !== axis) {

                        scope.axis = axis;
                        scope.gizmo[_mode].activeMode = mode;
                        scope.update(true);
                        scope.dispatchEvent(changeEvent);
                  }

                  if (scope.axis === null) {

                        scope.gizmo[_mode].show();
                  }

                  return intersect ? true : false;
            };

            this.onPointerDown = function (event) {

                  if (scope.object === undefined || _dragging === true) return false;

                  var pointer = event.pointers ? event.pointers[0] : event;

                  if (event.pointerType === 'touch') {

                        var intersect = intersectObjects(pointer, scope.useAllPickers ? scope.gizmo[_mode].pickers.children : scope.gizmo[_mode].subPickers.children);

                        var axis = null;
                        var mode = "";

                        if (intersect) {

                              axis = intersect.object.name;
                              mode = axis.search("R") != -1 ? "rotate" : "translate";
                        }

                        if (scope.axis !== axis) {

                              scope.axis = axis;
                              scope.gizmo[_mode].activeMode = mode;
                        }
                  }

                  var intersect = null;

                  if (pointer.button === 0 || pointer.button === undefined) {

                        intersect = intersectObjects(pointer, scope.useAllPickers ? scope.gizmo[_mode].pickers.children : scope.gizmo[_mode].subPickers.children);

                        if (intersect) {

                              scope.dispatchEvent(mouseDownEvent);

                              scope.axis = intersect.object.name;

                              scope.update();

                              eye.copy(camera.position).sub(worldPosition).normalize();

                              scope.gizmo[_mode].setActivePlane(scope.axis, eye);

                              var planeIntersect = intersectObjects(pointer, [scope.gizmo[_mode].activePlane]);

                              if (planeIntersect) offset.copy(planeIntersect.point);

                              oldPosition.copy(scope.object.position);
                              oldScale.copy(scope.object.scale);

                              oldRotationMatrix.extractRotation(scope.object.matrix);
                              worldRotationMatrix.extractRotation(scope.object.matrixWorld);

                              if (scope.object.parent) {
                                    parentRotationMatrix.extractRotation(scope.object.parent.matrixWorld);
                                    parentScale.setFromMatrixScale(tempMatrix.getInverse(scope.object.parent.matrixWorld));
                              } else {
                                    parentRotationMatrix.extractRotation(scope.object.matrixWorld);
                                    parentScale.setFromMatrixScale(tempMatrix.getInverse(scope.object.matrixWorld));
                              }

                              // show rotation start line and ticks
                              if (_mode === "transrotate" && scope.gizmo[_mode].activeMode === "rotate") {
                                    scope.startLine.geometry.vertices[0].set(0, 0, 0).applyMatrix4(scope.matrixWorld);
                                    scope.startLine.geometry.vertices[1].set(0, 0, 1).applyMatrix4(scope.matrixWorld);
                                    scope.startLine.geometry.verticesNeedUpdate = true;
                                    scope.parent.add(scope.startLine);

                                    var pos = scope.object.geometry.getAttribute('position');
                                    var pt1 = new THREE.Vector3().fromAttribute(pos, 0).applyMatrix4(scope.object.matrixWorld);
                                    var pt2 = new THREE.Vector3().fromAttribute(pos, 1).applyMatrix4(scope.object.matrixWorld);
                                    var pt3 = new THREE.Vector3().fromAttribute(pos, 2).applyMatrix4(scope.object.matrixWorld);
                                    var pt4 = new THREE.Vector3().fromAttribute(pos, 3).applyMatrix4(scope.object.matrixWorld);
                                    if (scope.axis === "RX") {
                                          pt1.lerp(pt3, 0.5);
                                          pt2.lerp(pt4, 0.5);
                                          var dist = pt1.distanceTo(pt2);
                                          scope.centerLine.material.dashSize = dist / 15;
                                          scope.centerLine.material.gapSize = dist / 30;
                                          scope.centerLine.geometry.vertices[0].copy(pt1);
                                          scope.centerLine.geometry.vertices[1].copy(pt2);
                                    } else {
                                          pt1.lerp(pt2, 0.5);
                                          pt3.lerp(pt4, 0.5);
                                          var dist = pt1.distanceTo(pt3);
                                          scope.centerLine.material.dashSize = dist / 15;
                                          scope.centerLine.material.gapSize = dist / 30;
                                          scope.centerLine.geometry.vertices[0].copy(pt1);
                                          scope.centerLine.geometry.vertices[1].copy(pt3);
                                    }
                                    scope.centerLine.geometry.computeLineDistances();
                                    scope.centerLine.geometry.verticesNeedUpdate = true;
                                    scope.parent.add(scope.centerLine);

                                    scope.ticks[scope.axis].position.copy(scope.position);
                                    scope.ticks[scope.axis].quaternion.copy(scope.quaternion);
                                    scope.ticks[scope.axis].scale.copy(scope.scale);
                                    scope.parent.add(scope.ticks[scope.axis]);
                              }
                        }
                  }

                  _dragging = true;

                  return intersect ? true : false;
            };

            this.onPointerMove = function (event) {

                  if (scope.object === undefined || scope.axis === null || _dragging === false) return false;

                  var pointer = event.pointers ? event.pointers[0] : event;

                  var planeIntersect = intersectObjects(pointer, [scope.gizmo[_mode].activePlane]);

                  if (planeIntersect) point.copy(planeIntersect.point);

                  var mode = scope.gizmo[_mode].activeMode;
                  if (mode == "translate") {

                        point.sub(offset);
                        point.multiply(parentScale);

                        if (scope.space == "local") {

                              point.applyMatrix4(tempMatrix.getInverse(worldRotationMatrix));

                              projX.copy(this.unitX);
                              projY.copy(this.unitY);
                              projZ.copy(this.unitZ);
                              tempVector.set(0, 0, 0);
                              if (scope.axis.search("X") != -1) {
                                    projX.multiplyScalar(point.dot(this.unitX));
                                    tempVector.add(projX);
                              }
                              if (scope.axis.search("Y") != -1) {
                                    projY.multiplyScalar(point.dot(this.unitY));
                                    tempVector.add(projY);
                              }
                              if (scope.axis.search("Z") != -1) {
                                    projZ.multiplyScalar(point.dot(this.unitZ));
                                    tempVector.add(projZ);
                              }
                              point.copy(tempVector);

                              point.applyMatrix4(oldRotationMatrix);

                              scope.object.position.copy(oldPosition);
                              scope.object.position.add(point);
                        }

                        if (scope.space == "world" || scope.axis.search("XYZ") != -1) {

                              projX.copy(this.unitX);
                              projY.copy(this.unitY);
                              projZ.copy(this.unitZ);
                              tempVector.set(0, 0, 0);
                              if (scope.axis.search("X") != -1) {
                                    projX.multiplyScalar(point.dot(this.unitX));
                                    tempVector.add(projX);
                              }
                              if (scope.axis.search("Y") != -1) {
                                    projY.multiplyScalar(point.dot(this.unitY));
                                    tempVector.add(projY);
                              }
                              if (scope.axis.search("Z") != -1) {
                                    projZ.multiplyScalar(point.dot(this.unitZ));
                                    tempVector.add(projZ);
                              }
                              point.copy(tempVector);

                              point.applyMatrix4(tempMatrix.getInverse(parentRotationMatrix));

                              scope.object.position.copy(oldPosition);
                              scope.object.position.add(point);
                        }
                  } else if (mode == "scale") {

                        point.sub(offset);
                        point.multiply(parentScale);

                        if (scope.space == "local") {

                              if (scope.axis == "XYZ") {

                                    scale = 1 + point.y / 50;

                                    scope.object.scale.x = oldScale.x * scale;
                                    scope.object.scale.y = oldScale.y * scale;
                                    scope.object.scale.z = oldScale.z * scale;
                              } else {

                                    point.applyMatrix4(tempMatrix.getInverse(worldRotationMatrix));

                                    if (scope.axis == "X") scope.object.scale.x = oldScale.x * (1 + point.x / 50);
                                    if (scope.axis == "Y") scope.object.scale.y = oldScale.y * (1 + point.y / 50);
                                    if (scope.axis == "Z") scope.object.scale.z = oldScale.z * (1 + point.z / 50);
                              }
                        }
                  } else if (mode == "rotate") {

                        point.sub(worldPosition);
                        point.multiply(parentScale);
                        tempVector.copy(offset).sub(worldPosition);
                        tempVector.multiply(parentScale);

                        if (scope.axis == "RE") {

                              point.applyMatrix4(tempMatrix.getInverse(lookAtMatrix));
                              tempVector.applyMatrix4(tempMatrix.getInverse(lookAtMatrix));

                              rotation.set(Math.atan2(point.z, point.y), Math.atan2(point.x, point.z), Math.atan2(point.y, point.x));
                              offsetRotation.set(Math.atan2(tempVector.z, tempVector.y), Math.atan2(tempVector.x, tempVector.z), Math.atan2(tempVector.y, tempVector.x));

                              tempQuaternion.setFromRotationMatrix(tempMatrix.getInverse(parentRotationMatrix));

                              var rotz = rotation.z - offsetRotation.z;
                              if (scope.snap !== null) {
                                    var rotsnap = Math.round(rotz / scope.snap) * scope.snap;
                                    if (Math.abs(rotsnap - rotz) < scope.snapDelta) {
                                          rotz = rotsnap;
                                    }
                              }
                              quaternionE.setFromAxisAngle(eye, rotz);
                              quaternionXYZ.setFromRotationMatrix(worldRotationMatrix);

                              tempQuaternion.multiplyQuaternions(tempQuaternion, quaternionE);
                              tempQuaternion.multiplyQuaternions(tempQuaternion, quaternionXYZ);

                              scope.object.quaternion.copy(tempQuaternion);
                        } else if (scope.axis == "RXYZE") {

                              var tempAxis = point.clone().cross(tempVector).normalize(); // rotation axis

                              tempQuaternion.setFromRotationMatrix(tempMatrix.getInverse(parentRotationMatrix));

                              var rot = -point.clone().angleTo(tempVector);
                              if (scope.snap !== null) {
                                    var rotsnap = Math.round(rot / scope.snap) * scope.snap;
                                    if (Math.abs(rotsnap - rot) < scope.snapDelta) {
                                          rot = rotsnap;
                                    }
                              }
                              quaternionX.setFromAxisAngle(tempAxis, rot);
                              quaternionXYZ.setFromRotationMatrix(worldRotationMatrix);

                              tempQuaternion.multiplyQuaternions(tempQuaternion, quaternionX);
                              tempQuaternion.multiplyQuaternions(tempQuaternion, quaternionXYZ);

                              scope.object.quaternion.copy(tempQuaternion);
                        } else if (scope.space == "local") {

                              point.applyMatrix4(tempMatrix.getInverse(worldRotationMatrix));

                              tempVector.applyMatrix4(tempMatrix.getInverse(worldRotationMatrix));

                              var projx = point.dot(this.unitX),
                                  projy = point.dot(this.unitY),
                                  projz = point.dot(this.unitZ);
                              var tempx = tempVector.dot(this.unitX),
                                  tempy = tempVector.dot(this.unitY),
                                  tempz = tempVector.dot(this.unitZ);
                              rotation.set(Math.atan2(projz, projy), Math.atan2(projx, projz), Math.atan2(projy, projx));
                              offsetRotation.set(Math.atan2(tempz, tempy), Math.atan2(tempx, tempz), Math.atan2(tempy, tempx));

                              var rotx = rotation.x - offsetRotation.x;
                              var roty = rotation.y - offsetRotation.y;
                              var rotz = rotation.z - offsetRotation.z;
                              if (scope.snap !== null) {
                                    if (scope.axis.search("X") != -1) {
                                          var rotsnap = Math.round(rotx / scope.snap) * scope.snap;
                                          if (Math.abs(rotsnap - rotx) < scope.snapDelta) {
                                                rotx = rotsnap;
                                          }
                                    }
                                    if (scope.axis.search("Y") != -1) {
                                          var rotsnap = Math.round(roty / scope.snap) * scope.snap;
                                          if (Math.abs(rotsnap - roty) < scope.snapDelta) {
                                                roty = rotsnap;
                                          }
                                    }
                                    if (scope.axis.search("Z") != -1) {
                                          var rotsnap = Math.round(rotz / scope.snap) * scope.snap;
                                          if (Math.abs(rotsnap - rotz) < scope.snapDelta) {
                                                rotz = rotsnap;
                                          }
                                    }
                              }
                              quaternionX.setFromAxisAngle(this.unitX, rotx);
                              quaternionY.setFromAxisAngle(this.unitY, roty);
                              quaternionZ.setFromAxisAngle(this.unitZ, rotz);
                              quaternionXYZ.setFromRotationMatrix(oldRotationMatrix);

                              if (scope.axis == "RX") quaternionXYZ.multiplyQuaternions(quaternionXYZ, quaternionX);
                              if (scope.axis == "RY") quaternionXYZ.multiplyQuaternions(quaternionXYZ, quaternionY);
                              if (scope.axis == "RZ") quaternionXYZ.multiplyQuaternions(quaternionXYZ, quaternionZ);

                              scope.object.quaternion.copy(quaternionXYZ);
                        } else if (scope.space == "world") {

                              var projx = point.dot(this.unitX),
                                  projy = point.dot(this.unitY),
                                  projz = point.dot(this.unitZ);
                              var tempx = tempVector.dot(this.unitX),
                                  tempy = tempVector.dot(this.unitY),
                                  tempz = tempVector.dot(this.unitZ);
                              rotation.set(Math.atan2(projz, projy), Math.atan2(projx, projz), Math.atan2(projy, projx));
                              offsetRotation.set(Math.atan2(tempz, tempy), Math.atan2(tempx, tempz), Math.atan2(tempy, tempx));

                              tempQuaternion.setFromRotationMatrix(tempMatrix.getInverse(parentRotationMatrix));

                              var rotx = rotation.x - offsetRotation.x;
                              var roty = rotation.y - offsetRotation.y;
                              var rotz = rotation.z - offsetRotation.z;
                              if (scope.snap !== null) {
                                    if (scope.axis.search("X") != -1) {
                                          var rotsnap = Math.round(rotx / scope.snap) * scope.snap;
                                          if (Math.abs(rotsnap - rotx) < scope.snapDelta) {
                                                rotx = rotsnap;
                                          }
                                    }
                                    if (scope.axis.search("Y") != -1) {
                                          var rotsnap = Math.round(roty / scope.snap) * scope.snap;
                                          if (Math.abs(rotsnap - roty) < scope.snapDelta) {
                                                roty = rotsnap;
                                          }
                                    }
                                    if (scope.axis.search("Z") != -1) {
                                          var rotsnap = Math.round(rotz / scope.snap) * scope.snap;
                                          if (Math.abs(rotsnap - rotz) < scope.snapDelta) {
                                                rotz = rotsnap;
                                          }
                                    }
                              }
                              quaternionX.setFromAxisAngle(this.unitX, rotx);
                              quaternionY.setFromAxisAngle(this.unitY, roty);
                              quaternionZ.setFromAxisAngle(this.unitZ, rotz);
                              quaternionXYZ.setFromRotationMatrix(worldRotationMatrix);

                              if (scope.axis == "RX") tempQuaternion.multiplyQuaternions(tempQuaternion, quaternionX);
                              if (scope.axis == "RY") tempQuaternion.multiplyQuaternions(tempQuaternion, quaternionY);
                              if (scope.axis == "RZ") tempQuaternion.multiplyQuaternions(tempQuaternion, quaternionZ);

                              tempQuaternion.multiplyQuaternions(tempQuaternion, quaternionXYZ);

                              scope.object.quaternion.copy(tempQuaternion);
                        }

                        // show rotation end line
                        if (_mode === "transrotate") {
                              scope.add(scope.endLine);
                              scope.add(scope.centerMark);
                        }
                  }

                  // update matrix
                  scope.object.matrixAutoUpdate = true;

                  scope.update(true);
                  scope.dispatchEvent(changeEvent);
                  scope.dispatchEvent(objectChangeEvent);

                  return planeIntersect ? true : false;
            };

            this.onPointerUp = function (event) {

                  if (_dragging && scope.axis !== null) {
                        mouseUpEvent.mode = _mode;
                        scope.dispatchEvent(mouseUpEvent);
                  }
                  _dragging = false;

                  this.gizmo[_mode].show();

                  this.updateUnitVectors();

                  // remove rotation start/end lines
                  if (_mode === "transrotate" && this.gizmo[_mode].activeMode === "rotate") {
                        this.remove(this.endLine);
                        this.remove(this.centerMark);
                        this.parent.remove(this.centerLine);
                        this.parent.remove(this.startLine);
                        this.parent.remove(this.ticks[this.axis]);
                  }

                  return false;
            };

            function intersectObjects(pointer, objects) {

                  var rect = domElement.getBoundingClientRect();
                  var x = (pointer.clientX - rect.left) / rect.width * 2 - 1;
                  var y = -((pointer.clientY - rect.top) / rect.height) * 2 + 1;

                  if (camera.isPerspective) {
                        pointerVector.set(x, y, 0.5);
                        pointerVector.unproject(camera);
                        ray.set(camera.position, pointerVector.sub(camera.position).normalize());
                  } else {
                        pointerVector.set(x, y, -1);
                        pointerVector.unproject(camera);
                        pointerDir.set(0, 0, -1);
                        ray.set(pointerVector, pointerDir.transformDirection(camera.matrixWorld));
                  }

                  var intersections = ray.intersectObjects(objects, true);
                  return intersections[0] ? intersections[0] : false;
            }
      };

      THREE.TransformControls.prototype = (0, _create2.default)(THREE.Object3D.prototype);
})();

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "TransformGizmos.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1721:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, $) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

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

var _GUIObjectAdapter = __webpack_require__(1727);

var _GUIObjectAdapter2 = _interopRequireDefault(_GUIObjectAdapter);

var _ToolPanelBase2 = __webpack_require__(1728);

var _ToolPanelBase3 = _interopRequireDefault(_ToolPanelBase2);

__webpack_require__(1781);

var _datGui = __webpack_require__(1562);

var _datGui2 = _interopRequireDefault(_datGui);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ParticlePanel = function (_ToolPanelBase) {
  (0, _inherits3.default)(ParticlePanel, _ToolPanelBase);

  /////////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////////
  function ParticlePanel(extension, viewer, btnElement) {
    (0, _classCallCheck3.default)(this, ParticlePanel);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ParticlePanel.__proto__ || (0, _getPrototypeOf2.default)(ParticlePanel)).call(this, viewer.container, 'Particle Controls', {
      buttonElement: btnElement,
      closable: false
    }));

    $(_this.container).addClass('particle');

    _this.particleSystem = extension.particleSystem;

    var gui = new _datGui2.default.GUI({
      autoPlace: false
    });

    var guiContainer = document.getElementById(_this.container.id + '-gui');

    guiContainer.appendChild(gui.domElement);

    var folder = gui.addFolder('Particle System Settings');

    _this.maxParticleCtrl = folder.add(extension, 'maxParticles', 0, 50000).name('Max Particles').step(1);

    _this.maxParticleCtrl.onFinishChange(function (value) {

      _this.emit('maxParticles.changed', value);
    });

    _this.toolCtrl = folder.add(extension, 'tool', ['Mesh', 'Point Cloud']).name('Tool');

    _this.toolCtrl.onFinishChange(function (value) {

      _this.emit('tool.changed', value);
    });

    folder.open();

    setTimeout(function () {
      gui.domElement.style.width = '100%';
    }, 0);
    return _this;
  }

  /////////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////////


  (0, _createClass3.default)(ParticlePanel, [{
    key: 'htmlContent',
    value: function htmlContent(id) {

      return '\n     <div class="container">\n          <div id="' + id + '-gui">\n          </div>\n      </div>';
    }

    /////////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////////

  }, {
    key: 'loadObjectGUI',
    value: function loadObjectGUI(obj) {
      var _this2 = this;

      $('#' + this.container.id + '-obj-gui').remove();

      if (!obj || !obj.getSelectable()) {
        return;
      }

      var gui = new _datGui2.default.GUI({
        autoPlace: false
      });

      $('#' + this.container.id + '-gui').append('<div id="' + this.container.id + '-obj-gui"></div>');

      var guiContainer = document.getElementById(this.container.id + '-obj-gui');

      guiContainer.appendChild(gui.domElement);

      switch (obj.getType()) {

        case 0:

          this.selectedObjectGUI = new _GUIObjectAdapter2.default(this.particleSystem.getEmitter(obj.getId()), {
            emissionRate: {
              getter: 'getEmissionRate',
              setter: 'setEmissionRate'
            },
            spread: {
              getter: 'getSpread',
              setter: 'setSpread'
            },
            velocity: {
              getter: 'getVelocity',
              setter: 'setVelocity'
            },
            charge: {
              getter: 'getCharge',
              setter: 'setCharge'
            }
          });

          var emitterFolder = gui.addFolder('Emitter Settings');

          emitterFolder.add(this.selectedObjectGUI, 'emissionRate', 10, 2000).name('Emission Rate').onChange(function () {
            _this2.selectedObjectGUI.update();
          });

          emitterFolder.add(this.selectedObjectGUI, 'spread', 0.0, 6 * Math.PI / 180).name('Spread').onChange(function () {
            _this2.selectedObjectGUI.update();
          });

          emitterFolder.add(this.selectedObjectGUI, 'velocity', 0.1, 10).name('Particles Velocity').onChange(function () {
            _this2.selectedObjectGUI.update();
          });

          var chargeCtrl = emitterFolder.add(this.selectedObjectGUI, 'charge', -10, 10).name('Particles Charge');

          chargeCtrl.onChange(function (value) {

            _this2.selectedObjectGUI.update();

            _this2.emit('objectModified', {
              property: 'charge',
              value: value,
              object: obj
            });
          });

          emitterFolder.open();
          break;

        case 1:

          this.selectedObjectGUI = new _GUIObjectAdapter2.default(this.particleSystem.getMagneticField(obj.getId()), {
            force: {
              getter: 'getForce',
              setter: 'setForce'
            }
          });

          var fieldFolder = gui.addFolder('Field Settings');

          var forceCtrl = fieldFolder.add(this.selectedObjectGUI, 'force', -100, 100).name('Force');

          forceCtrl.onChange(function (value) {

            _this2.selectedObjectGUI.update();

            _this2.emit('objectModified', {
              property: 'force',
              value: value,
              object: obj
            });
          });

          fieldFolder.open();
          break;

        default:
          break;
      }

      window.setTimeout(function () {
        gui.domElement.style.width = '100%';
      }, 0);

      this.setVisible(true);
    }

    /////////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////////

  }, {
    key: 'loadToolGUI',
    value: function loadToolGUI(tool) {
      var _this3 = this;

      $('#' + this.container.id + '-tool-gui').remove();

      var gui = new _datGui2.default.GUI({
        autoPlace: false
      });

      $('#' + this.container.id + '-gui').append('<div id="' + this.container.id + '-tool-gui"></div>');

      var guiContainer = document.getElementById(this.container.id + '-tool-gui');

      guiContainer.appendChild(gui.domElement);

      switch (tool.getName()) {

        case 'Viewing.Particle.Tool.Mesh':

          var meshFolder = gui.addFolder('Mesh Tool Settings');

          this.shadersCtrl = meshFolder.add(tool, 'shaders', ['ON', 'OFF']).name('Shaders');

          this.shadersCtrl.onFinishChange(function (value) {

            _this3.emit('shaders.changed', value);
          });

          break;

        default:
          break;
      }

      window.setTimeout(function () {
        gui.domElement.style.width = '100%';
      }, 0);

      this.setVisible(true);
    }

    /////////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////////

  }, {
    key: 'setSelected',
    value: function setSelected(obj) {

      this.loadObjectGUI(obj);
    }
  }]);
  return ParticlePanel;
}(_ToolPanelBase3.default);

exports.default = ParticlePanel;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Viewing.Extension.Particle.Panel.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module), __webpack_require__(31)))

/***/ }),

/***/ 1722:
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

var _EventsEmitter2 = __webpack_require__(372);

var _EventsEmitter3 = _interopRequireDefault(_EventsEmitter2);

var _Viewer = __webpack_require__(1021);

var _Viewer2 = _interopRequireDefault(_Viewer);

var _Stopwatch = __webpack_require__(1067);

var _Stopwatch2 = _interopRequireDefault(_Stopwatch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var vertexShader = '\n\n  // switch on high precision floats\n  #ifdef GL_ES\n  precision highp float;\n  #endif\n\n  uniform vec3 offset;\n\n  void main() {\n\n    vec3 newPosition = position + offset;\n\n    gl_Position = projectionMatrix *\n      modelViewMatrix *\n      vec4(newPosition, 1.0);\n  }\n';

var fragmentShader = '\n\n  #ifdef GL_ES\n  precision highp float;\n  #endif\n\n  uniform vec4 color;\n\n  void main() {\n\n    gl_FragColor = color;\n  }\n';

var ParticleToolMesh = function (_EventsEmitter) {
  (0, _inherits3.default)(ParticleToolMesh, _EventsEmitter);

  /////////////////////////////////////////////////////////////////
  // Class constructor
  //
  /////////////////////////////////////////////////////////////////
  function ParticleToolMesh(viewer, particleSystem) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    (0, _classCallCheck3.default)(this, ParticleToolMesh);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ParticleToolMesh.__proto__ || (0, _getPrototypeOf2.default)(ParticleToolMesh)).call(this));

    _this.viewer = viewer;

    viewer.toolController.registerTool(_this);

    _this.particleSystem = particleSystem;

    _this.stopwatch = new _Stopwatch2.default();

    _this.nbParticleTypes = 50;

    _this.particleMaterials = _this.createRandomMaterials(_this.nbParticleTypes);

    _this.activateShaders(true);

    _this.options = options;

    _this.shaders = 'ON';

    _this.active = false;
    return _this;
  }

  /////////////////////////////////////////////////////////////////
  // Tool names
  //
  /////////////////////////////////////////////////////////////////


  (0, _createClass3.default)(ParticleToolMesh, [{
    key: 'getNames',
    value: function getNames() {

      return ["Viewing.Particle.Tool.Mesh"];
    }

    /////////////////////////////////////////////////////////////////
    // Tool name
    //
    /////////////////////////////////////////////////////////////////

  }, {
    key: 'getName',
    value: function getName() {

      return "Viewing.Particle.Tool.Mesh";
    }

    /////////////////////////////////////////////////////////////////
    // Activate Tool
    //
    /////////////////////////////////////////////////////////////////

  }, {
    key: 'activate',
    value: function activate() {

      if (!this.active) {

        console.log(this.getName() + ' activated');

        this.stopwatch.getElapsedMs();

        this.active = true;

        this.viewer.toolController.activateTool(this.getName());

        this.emit('activate');
      }
    }

    /////////////////////////////////////////////////////////////////
    // Deactivate tool
    //
    /////////////////////////////////////////////////////////////////

  }, {
    key: 'deactivate',
    value: function deactivate() {

      if (this.active) {

        console.log(this.getName() + ' deactivated');

        this.active = false;

        this.viewer.toolController.deactivateTool(this.getName());

        this.clearParticles();

        this.emit('deactivate');
      }
    }

    /////////////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////////////

  }, {
    key: 'setMaxParticles',
    value: function setMaxParticles(maxParticles) {}

    /////////////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////////////

  }, {
    key: 'clearParticles',
    value: function clearParticles() {

      this.particleSystem.initParticleLoop();

      while (true) {

        var particle = this.particleSystem.nextParticle();

        if (!particle.ptr) {
          break;
        }

        this.destroyParticle(particle);
      }

      this.viewer.impl.invalidate(true);
    }

    /////////////////////////////////////////////////////////////////
    // Creates a bunch of materials with random colors
    //
    /////////////////////////////////////////////////////////////////

  }, {
    key: 'createRandomMaterials',
    value: function createRandomMaterials(nb) {

      var materials = [];

      for (var i = 0; i < nb; ++i) {

        var clr = Math.random() * 16777215;

        materials.push(this.createMaterial({
          shading: THREE.FlatShading,
          name: _Viewer2.default.guid(),
          shininess: 50,
          specular: clr,
          color: clr
        }));
      }

      return materials;
    }

    /////////////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////////////

  }, {
    key: 'destroyParticle',
    value: function destroyParticle(particle) {

      this.viewer.impl.scene.remove(particle.mesh);

      particle.mesh = null;
    }

    /////////////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////////////

  }, {
    key: 'filterParticle',
    value: function filterParticle(particle) {

      var result = false;

      this.bounds.forEach(function (bound) {

        switch (bound.type) {

          case 'sphere':

            if (bound.max) {
              if (!particle.getPosition().withinSphere(bound.center, bound.max)) {
                result = true;
              }
            }

            if (bound.min) {
              if (particle.getPosition().withinSphere(bound.center, bound.min)) {
                result = true;
              }
            }

            break;

          case 'box':

            if (!particle.getPosition().withinBox(bound.center, bound.size)) {
              result = true;
            }

            break;
        }
      });

      return result;
    }

    /////////////////////////////////////////////////////////////////
    // Update loop without shaders
    //
    /////////////////////////////////////////////////////////////////

  }, {
    key: 'update',
    value: function update() {

      this.particleSystem.step(this.stopwatch.getElapsedMs() * 0.001);

      this.updateChunk();

      // invalidate (needsClear, needsRender, overlayDirty)
      this.viewer.impl.invalidate(true, false, false);

      this.emit('fps.tick');
    }

    /////////////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////////////

  }, {
    key: 'updateChunk',
    value: function updateChunk() {
      var _this2 = this;

      this.particleSystem.initParticleLoop();

      var particle = void 0;

      var tick = function tick() {

        var start = new Date().getTime();

        while (true) {

          particle = _this2.particleSystem.nextParticle();

          if (!particle.ptr) {

            break;
          } else if (new Date().getTime() - start > 50) {

            // Yield execution to rendering logic
            setTimeout(tick, 25);

            break;
          } else {

            _this2.updateParticle(particle);
          }
        }
      };

      setTimeout(tick, 25);
    }

    /////////////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////////////

  }, {
    key: 'updateParticleShadersOff',
    value: function updateParticleShadersOff(particle) {

      if (!particle.mesh) {

        var type = this.randomInt(0, this.nbParticleTypes);

        particle.mesh = this.createMesh(particle.getRadius(), this.particleMaterials[type]);

        this.viewer.impl.scene.add(particle.mesh);
      }

      particle.mesh.visible = !particle.getRecycled();

      if (this.filterParticle(particle)) {

        particle.setLifeTime(-1);
      } else if (particle.mesh.visible) {

        var pos = particle.getPosition();

        particle.mesh.position.x = pos.getX();
        particle.mesh.position.y = pos.getY();
        particle.mesh.position.z = pos.getZ();
      }
    }

    /////////////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////////////

  }, {
    key: 'updateParticleShadersOn',
    value: function updateParticleShadersOn(particle) {

      if (!particle.mesh) {

        particle.shader = {
          uniforms: {
            offset: {
              type: 'v3',
              value: new THREE.Vector3(0, 0, 0)
            },
            color: {
              type: 'v4',
              value: new THREE.Vector4(Math.random(), Math.random(), Math.random(), 1)
            }
          },
          vertexShader: vertexShader,
          fragmentShader: fragmentShader
        };

        var shaderMaterial = new THREE.ShaderMaterial(particle.shader);

        particle.mesh = this.createMesh(particle.getRadius(), shaderMaterial);

        this.viewer.impl.scene.add(particle.mesh);
      }

      particle.mesh.visible = !particle.getRecycled();

      if (this.filterParticle(particle)) {

        particle.setLifeTime(-1);
      } else if (particle.mesh.visible) {

        var pos = particle.getPosition();

        var offset = particle.shader.uniforms.offset.value;

        offset.x = pos.getX();
        offset.y = pos.getY();
        offset.z = pos.getZ();
      }
    }

    /////////////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////////////

  }, {
    key: 'activateShaders',
    value: function activateShaders(activate) {

      this.updateParticle = activate ? this.updateParticleShadersOn : this.updateParticleShadersOff;

      this.clearParticles();
    }

    /////////////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////////////

  }, {
    key: 'createMaterial',
    value: function createMaterial(props) {

      var material = new THREE.MeshPhongMaterial(props);

      this.viewer.impl.matman().addMaterial(props.name, material, true);

      return material;
    }

    /////////////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////////////

  }, {
    key: 'createMesh',
    value: function createMesh(size, material) {

      var geometry = new THREE.SphereGeometry(size, 4, 4);

      var mesh = new THREE.Mesh(geometry, material);

      return mesh;
    }

    /////////////////////////////////////////////////////////////////
    // Random int in [min, max[
    //
    /////////////////////////////////////////////////////////////////

  }, {
    key: 'randomInt',
    value: function randomInt(min, max) {

      return Math.floor(Math.random() * (max - min)) + min;
    }
  }]);
  return ParticleToolMesh;
}(_EventsEmitter3.default);

exports.default = ParticleToolMesh;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Viewing.Extension.Particle.Tool.Mesh.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1723:
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

var _EventsEmitter2 = __webpack_require__(372);

var _EventsEmitter3 = _interopRequireDefault(_EventsEmitter2);

var _Viewer = __webpack_require__(1021);

var _Viewer2 = _interopRequireDefault(_Viewer);

var _Stopwatch = __webpack_require__(1067);

var _Stopwatch2 = _interopRequireDefault(_Stopwatch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var vertexShader = '\n\n  // switch on high precision floats\n  #ifdef GL_ES\n  precision highp float;\n  #endif\n\n  varying vec3 vColor;\n  uniform vec3 offset;\n\n  void main() {\n\n    vColor = color;\n\n    gl_PointSize = 4.0;\n\n    gl_Position = projectionMatrix *\n      modelViewMatrix *\n      vec4(position, 1.0);\n  }\n';

var fragmentShader = '\n\n  #ifdef GL_ES\n  precision highp float;\n  #endif\n\n  varying vec3 vColor;\n\n  void main() {\n\n    gl_FragColor = vec4(vColor, 1);\n  }\n';

var vertexshader = '\n  attribute vec3 ca;\n  varying vec3 vColor;\n  void main() {\n    vColor = ca;\n    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);\n    vec3 viewDir = normalize( -mvPosition.xyz );\n    gl_PointSize = 4.0;\n    vec4 newPos = mvPosition;\n    gl_Position = projectionMatrix * newPos;\n  }\n';

var fragmentshader = '\n  uniform vec3 color;\n  uniform sampler2D texture;\n  varying vec3 vColor;\n  void main() {\n    vec4 color = vec4(color*vColor, 1.0 ) * texture2D(texture, gl_PointCoord);\n    if ( color.w < 0.5 ) discard;\n    gl_FragColor = color;\n  }\n';

//this.sprite = THREE.ImageUtils.loadTexture('/img/disc.png');
//
//let geometry = new THREE.Geometry();
//let colors: any[] = [];
//let nodes = this._dataModel.sensorNodes;
//let sensorInfo = this._dataModel.sensorInfo;
//for (let i = 0; i < nodes.length; i++) {
//  let vertex = new THREE.Vector3();
//  // logger.log('addSensorMarkers', sensorInfo[nodes[i]]);
//  let myInfo: any;
//  if (sensorInfo[nodes[i]].source === 'bim') {
//    // logger.log('addSensorMarkers done', sensorInfo[nodes[i]]);
//    myInfo = sensorInfo[nodes[i]];
//    let box = this.getBounds(Number(myInfo.nodeid));
//    vertex.x = box.center().x;
//    vertex.y = box.center().y;
//    vertex.z = box.center().z;
//    geometry.vertices.push( vertex );
//    let col = new THREE.Color( 0x78c679 );
//    // col.setHSL( Math.random(), 0.75, 0.7);
//    (<any>this.material).attributes.ca.value.push(col);
//  }  else if (sensorInfo[nodes[i]].source === 'dasher') {
//    myInfo = sensorInfo[nodes[i]];
//    if (myInfo.id) {
//      vertex.x = myInfo.location[0];
//      vertex.y = myInfo.location[1];
//      vertex.z = myInfo.location[2];
//      geometry.vertices.push( vertex );
//      let col = new THREE.Color( 0x78c679 );
//      // col.setHSL( Math.random(), 0.75, 0.7);
//      (<any>this.material).attributes.ca.value.push(col);
//    }
//  }
//}

var ParticleToolPointCloud = function (_EventsEmitter) {
  (0, _inherits3.default)(ParticleToolPointCloud, _EventsEmitter);

  /////////////////////////////////////////////////////////////////
  // Class constructor
  //
  /////////////////////////////////////////////////////////////////
  function ParticleToolPointCloud(viewer, particleSystem) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    (0, _classCallCheck3.default)(this, ParticleToolPointCloud);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ParticleToolPointCloud.__proto__ || (0, _getPrototypeOf2.default)(ParticleToolPointCloud)).call(this));

    _this.viewer = viewer;

    viewer.toolController.registerTool(_this);

    _this.particleSystem = particleSystem;

    _this.stopwatch = new _Stopwatch2.default();

    _this.nbParticleTypes = 50;

    _this.shader = {
      vertexColors: THREE.VertexColors,
      side: THREE.DoubleSide,
      //transparent:true,
      uniforms: {},
      fragmentShader: fragmentShader,
      vertexShader: vertexShader
    };

    _this.options = options;

    _this.active = false;
    return _this;
  }

  /////////////////////////////////////////////////////////////////
  // Tool names
  //
  /////////////////////////////////////////////////////////////////


  (0, _createClass3.default)(ParticleToolPointCloud, [{
    key: 'getNames',
    value: function getNames() {

      return ["Viewing.Particle.Tool.PointCloud"];
    }

    /////////////////////////////////////////////////////////////////
    // Tool name
    //
    /////////////////////////////////////////////////////////////////

  }, {
    key: 'getName',
    value: function getName() {

      return "Viewing.Particle.Tool.PointCloud";
    }

    /////////////////////////////////////////////////////////////////
    // Activate Tool
    //
    /////////////////////////////////////////////////////////////////

  }, {
    key: 'activate',
    value: function activate() {

      if (!this.active) {

        console.log(this.getName() + ' activated');

        this.stopwatch.getElapsedMs();

        this.active = true;

        this.viewer.toolController.activateTool(this.getName());

        this.emit('activate');
      }
    }

    /////////////////////////////////////////////////////////////////
    // Deactivate tool
    //
    /////////////////////////////////////////////////////////////////

  }, {
    key: 'deactivate',
    value: function deactivate() {

      if (this.active) {

        console.log(this.getName() + ' deactivated');

        this.active = false;

        this.viewer.toolController.deactivateTool(this.getName());

        this.clearParticles();

        this.emit('deactivate');
      }
    }

    /////////////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////////////

  }, {
    key: 'setMaxParticles',
    value: function setMaxParticles(maxParticles) {

      if (this.pointCloud) {

        this.viewer.impl.scene.remove(this.pointCloud);
      }

      var shaderMaterial = new THREE.ShaderMaterial(this.shader);

      this.pointCloud = this.createPointCloud(maxParticles, shaderMaterial);

      this.viewer.impl.scene.add(this.pointCloud);
    }

    /////////////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////////////

  }, {
    key: 'clearParticles',
    value: function clearParticles() {

      if (this.pointCloud) {

        this.viewer.impl.scene.remove(this.pointCloud);
      }

      this.viewer.impl.invalidate(true);
    }

    /////////////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////////////

  }, {
    key: 'filterParticle',
    value: function filterParticle(particle) {

      var result = false;

      this.bounds.forEach(function (bound) {

        switch (bound.type) {

          case 'sphere':

            if (bound.max) {
              if (!particle.getPosition().withinSphere(bound.center, bound.max)) {
                result = true;
              }
            }

            if (bound.min) {
              if (particle.getPosition().withinSphere(bound.center, bound.min)) {
                result = true;
              }
            }

            break;

          case 'box':

            if (!particle.getPosition().withinBox(bound.center, bound.size)) {
              result = true;
            }

            break;
        }
      });

      return result;
    }

    /////////////////////////////////////////////////////////////////
    // Update loop without shaders
    //
    /////////////////////////////////////////////////////////////////

  }, {
    key: 'update',
    value: function update() {

      this.particleSystem.step(this.stopwatch.getElapsedMs() * 0.001);

      this.particleSystem.initParticleLoop();

      var index = -1;

      var particle = void 0;

      while (true) {

        particle = this.particleSystem.nextParticle();

        ++index;

        if (!particle.ptr) {

          break;
        }

        this.updateParticle(particle, index);
      }

      // invalidate (needsClear, needsRender, overlayDirty)
      this.viewer.impl.invalidate(true, false, false);
      //this.viewer.impl.invalidate(false, false, true)

      this.emit('fps.tick');
    }

    /////////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////////

  }, {
    key: 'updateParticle',
    value: function updateParticle(particle, index) {

      var positions = this.bufferGeometry.attributes.position.array;

      if (particle.getRecycled()) {

        positions[3 * index] = -5000.0;
        positions[3 * index + 1] = -5000.0;
        positions[3 * index + 2] = -5000.0;
      } else if (this.filterParticle(particle)) {

        particle.setLifeTime(-1);

        positions[3 * index] = -5000.0;
        positions[3 * index + 1] = -5000.0;
        positions[3 * index + 2] = -5000.0;
      } else {

        var pos = particle.getPosition();

        //console.log(index + ': ' + pos.getX() + ', ' + pos.getX() + ', ' + pos.getX())

        positions[3 * index] = pos.getX();
        positions[3 * index + 1] = pos.getY();
        positions[3 * index + 2] = pos.getZ();
      }
    }

    /////////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////////

  }, {
    key: 'createPointCloud',
    value: function createPointCloud(maxPoints, material) {

      this.bufferGeometry = new THREE.BufferGeometry();

      this.bufferGeometry.dynamic = true;

      this.bufferGeometry.addAttribute('position', new THREE.BufferAttribute(new Float32Array(maxPoints * 3), 3));

      this.bufferGeometry.addAttribute('color', new THREE.BufferAttribute(new Float32Array(maxPoints * 3), 3));

      var colors = this.bufferGeometry.attributes.color.array;

      for (var i = 0; i < maxPoints; ++i) {

        colors[3 * i] = Math.random();
        colors[3 * i + 1] = Math.random();
        colors[3 * i + 2] = Math.random();
      }

      return new THREE.PointCloud(this.bufferGeometry, material);
    }

    /////////////////////////////////////////////////////////////////
    // Random int in [min, max[
    //
    /////////////////////////////////////////////////////////////////

  }, {
    key: 'randomInt',
    value: function randomInt(min, max) {

      return Math.floor(Math.random() * (max - min)) + min;
    }
  }]);
  return ParticleToolPointCloud;
}(_EventsEmitter3.default);

exports.default = ParticleToolPointCloud;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Viewing.Extension.Particle.Tool.PointCloud.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1724:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, $) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

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

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _ViewingExtensionParticleTool = __webpack_require__(1723);

var _ViewingExtensionParticleTool2 = _interopRequireDefault(_ViewingExtensionParticleTool);

var _ViewingExtensionParticleTool3 = __webpack_require__(1722);

var _ViewingExtensionParticleTool4 = _interopRequireDefault(_ViewingExtensionParticleTool3);

var _Viewer = __webpack_require__(1025);

var _Viewer2 = _interopRequireDefault(_Viewer);

var _ViewingToolParticle = __webpack_require__(1725);

var _ViewingToolParticle2 = _interopRequireDefault(_ViewingToolParticle);

var _ViewingExtensionParticle = __webpack_require__(1721);

var _ViewingExtensionParticle2 = _interopRequireDefault(_ViewingExtensionParticle);

var _Viewer3 = __webpack_require__(1033);

var _Viewer4 = _interopRequireDefault(_Viewer3);

var _ParticleSystem = __webpack_require__(1349);

var _ParticleSystem2 = _interopRequireDefault(_ParticleSystem);

var _Viewer5 = __webpack_require__(1021);

var _Viewer6 = _interopRequireDefault(_Viewer5);

var _FPSMeter = __webpack_require__(1726);

var _FPSMeter2 = _interopRequireDefault(_FPSMeter);

var _datGui = __webpack_require__(1562);

var _datGui2 = _interopRequireDefault(_datGui);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/////////////////////////////////////////////////////////////////////
// Viewing.Extension.Particle
// by Philippe Leefsma, March 2016
//
/////////////////////////////////////////////////////////////////////
var ParticleExtension = function (_MultiModelExtensionB) {
  (0, _inherits3.default)(ParticleExtension, _MultiModelExtensionB);

  /////////////////////////////////////////////////////////////////
  // Class constructor
  //
  /////////////////////////////////////////////////////////////////
  function ParticleExtension(viewer, options) {
    (0, _classCallCheck3.default)(this, ParticleExtension);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ParticleExtension.__proto__ || (0, _getPrototypeOf2.default)(ParticleExtension)).call(this, viewer, options));

    _this.options = options;

    _this.viewer = viewer;

    _this.particlePanel = null;

    _this.transformTool = new _ViewingToolParticle2.default(_this.viewer);

    _this.objectMaterials = _this.createObjectMaterials();

    _this.maxParticles = _this.options.maxParticles || 0;

    _this.particleSystem = new _ParticleSystem2.default.Instance(_this.maxParticles);

    _this.particleToolPointCloud = new _ViewingExtensionParticleTool2.default(_this.viewer, _this.particleSystem, options);

    _this.particleToolMesh = new _ViewingExtensionParticleTool4.default(_this.viewer, _this.particleSystem, options);

    _this.activeParticleTool = _this.particleToolMesh;

    _this.tool = 'Mesh';
    return _this;
  }

  /////////////////////////////////////////////////////////////////
  // Extension Id
  //
  /////////////////////////////////////////////////////////////////


  (0, _createClass3.default)(ParticleExtension, [{
    key: 'load',


    /////////////////////////////////////////////////////////////////
    // Load callback
    //
    /////////////////////////////////////////////////////////////////
    value: function load() {

      console.log('Viewing.Extension.Particle loaded');

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

    /////////////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////////////

  }, {
    key: 'onGeometryLoaded',
    value: function onGeometryLoaded() {
      var _this2 = this;

      this.loadScene().then(function () {

        _this2.viewer.setProgressiveRendering(false);

        $(_this2.viewer.container).append('<div id="particle-toolbar"> </div>');

        $('#particle-toolbar').css({
          position: 'absolute',
          left: '10px',
          top: '90px'
        });

        var fps = new FPSMeter(document.getElementById('particle-toolbar'), {
          maxFps: 20, //expected
          smoothing: 10,
          show: 'fps',
          decimals: 1,
          left: '0px',
          top: '-80px',
          theme: 'transparent',
          heat: 1,
          graph: 1,
          toggleOn: null,
          history: 32
        });

        _this2.onTxChange = _this2.onTxChange.bind(_this2);

        _this2.transformTool.on('transform.TxChange', _this2.onTxChange);

        _this2.transformTool.on('transform.select', function (event) {

          return _this2.onSelect(event);
        });

        _this2.particleToolMesh.on('fps.tick', function () {
          fps.tick();
        });

        _this2.transformTool.activate();

        _this2.activeParticleTool = _this2.particleToolMesh;

        if (_this2.options.autoStart) {

          _this2.particleToolMesh.activate();
        }

        _this2.loadPanel();
      });
    }

    /////////////////////////////////////////////////////////////////
    // load control panel
    //
    /////////////////////////////////////////////////////////////////

  }, {
    key: 'loadPanel',
    value: function loadPanel() {
      var _this3 = this;

      this.particlePanel = new _ViewingExtensionParticle2.default(this, this.viewer, null);

      this.particlePanel.on('objectModified', function (event) {

        _this3.onObjectModified(event);
      });

      this.particlePanel.on('maxParticles.changed', function (value) {

        _this3.particleToolPointCloud.setMaxParticles(value);

        _this3.particleToolMesh.setMaxParticles(value);

        _this3.particleSystem.setMaxParticles(value);

        if (value > 0) {

          if (!_this3.activeParticleTool.active) {

            _this3.activeParticleTool.activate();
          } else {

            _this3.activeParticleTool.clearParticles();
          }
        } else {

          _this3.activeParticleTool.deactivate();
        }
      });

      this.particlePanel.on('tool.changed', function (value) {

        switch (value) {

          case 'Mesh':
            _this3.activeParticleTool = _this3.particleToolMesh;
            _this3.particleToolPointCloud.deactivate();
            _this3.particleToolMesh.activate();
            break;

          case 'Point Cloud':
            _this3.activeParticleTool = _this3.particleToolPointCloud;
            _this3.particleToolPointCloud.activate();
            _this3.particleToolMesh.deactivate();
            break;
        }

        _this3.particlePanel.loadToolGUI(_this3.activeParticleTool);
      });

      this.particlePanel.on('shaders.changed', function (value) {

        _this3.particleToolMesh.activateShaders(value === 'ON');
      });

      this.particlePanel.setVisible(true);

      this.particlePanel.loadToolGUI(this.activeParticleTool);
    }

    /////////////////////////////////////////////////////////////////
    // Unload callback
    //
    /////////////////////////////////////////////////////////////////

  }, {
    key: 'unload',
    value: function unload() {

      console.log('Viewing.Extension.Particle unloaded');

      $('#particle-toolbar').remove();

      if (this.particlePanel) {

        this.particlePanel.setVisible(false);
      }

      if (this.viewer.activeParticleTool) {

        this.viewer.activeParticleTool.deactivate();
      }

      this.transformTool.off();

      this.transformTool.deactivate();

      this.particleToolMesh.particleSystem.destroy();
    }

    /////////////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////////////

  }, {
    key: 'onTxChange',
    value: function onTxChange(txChange) {
      var _this4 = this;

      txChange.dbIds.forEach(function (dbId) {

        _this4.updateObjectPosition(dbId);
      });
    }

    /////////////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////////////

  }, {
    key: 'onSelect',
    value: function onSelect(select) {

      if (select.dbIds.length) {

        var obj = this.particleSystem.getObjectById(select.dbIds[0]);

        if (this.particlePanel) {

          this.particlePanel.setSelected(obj);
        }

        if (obj) {

          return {
            transformable: obj.getTransformable(),
            selectable: obj.getSelectable()
          };
        }

        return { selectable: false };
      } else {

        if (this.particlePanel) {

          this.particlePanel.setSelected(null);
        }
      }
    }

    /////////////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////////////

  }, {
    key: 'onObjectModified',
    value: function onObjectModified(event) {

      switch (event.property) {

        case 'charge':
        case 'force':

          // red material < 0
          // blue material >= 0
          var matIdx = event.value < 0 ? 0 : 1;

          var material = this.objectMaterials[matIdx];

          _Viewer6.default.setMaterial(this.viewer.model, event.object.getId(), material);

          break;
      }
    }

    /////////////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////////////

  }, {
    key: 'createMaterial',
    value: function createMaterial(props) {

      var material = new THREE.MeshPhongMaterial(props);

      this.viewer.impl.matman().addMaterial(props.name, material, true);

      return material;
    }

    /////////////////////////////////////////////////////////////////
    // Creates object materials
    //
    /////////////////////////////////////////////////////////////////

  }, {
    key: 'createObjectMaterials',
    value: function createObjectMaterials() {

      var materials = [this.createMaterial({
        shading: THREE.FlatShading,
        name: _Viewer6.default.guid(),
        shininess: 80,
        specular: parseInt('B80000', 16),
        color: parseInt('B80000', 16)
      }), this.createMaterial({
        shading: THREE.FlatShading,
        name: _Viewer6.default.guid(),
        shininess: 80,
        specular: parseInt('0000B8', 16),
        color: parseInt('0000B8', 16)
      })];

      return materials;
    }

    /////////////////////////////////////////////////////////////////
    // Update object position
    //
    /////////////////////////////////////////////////////////////////

  }, {
    key: 'updateObjectPosition',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(dbId) {
        var bbox, obj;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _Viewer6.default.getWorldBoundingBox(this.viewer.model, dbId);

              case 2:
                bbox = _context.sent;
                obj = this.particleSystem.getObjectById(dbId);


                obj.setPosition((bbox.min.x + bbox.max.x) / 2, (bbox.min.y + bbox.max.y) / 2, (bbox.min.z + bbox.max.z) / 2);

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function updateObjectPosition(_x) {
        return _ref.apply(this, arguments);
      }

      return updateObjectPosition;
    }()

    /////////////////////////////////////////////////////////////////
    // Load Scene settings from properties
    //
    /////////////////////////////////////////////////////////////////

  }, {
    key: 'loadScene',
    value: function loadScene() {
      var _this5 = this;

      return new _promise2.default(function (resolve, reject) {

        _this5.viewer.search('particle.scene', function () {
          var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(dbIds) {
            var propSettings, settings, i, propBounds, tasks;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    if (!(dbIds.length != 1)) {
                      _context2.next = 2;
                      break;
                    }

                    return _context2.abrupt('return', reject('Invalid Particle scene'));

                  case 2:
                    _context2.prev = 2;
                    _context2.next = 5;
                    return _Viewer6.default.getProperty(_this5.viewer.model, dbIds[0], 'particle.settings');

                  case 5:
                    propSettings = _context2.sent;
                    settings = JSON.parse(propSettings.displayValue);


                    _this5.particleSystem.setDof(settings.dof[0], settings.dof[1], settings.dof[2]);

                    _this5.bounds = [];

                    i = 1;

                  case 10:
                    if (!(i <= settings.bounds)) {
                      _context2.next = 18;
                      break;
                    }

                    _context2.next = 13;
                    return _Viewer6.default.getProperty(_this5.viewer.model, dbIds[0], 'particle.bound' + i);

                  case 13:
                    propBounds = _context2.sent;


                    _this5.bounds.push(_this5.parseBound(propBounds));

                  case 15:
                    ++i;
                    _context2.next = 10;
                    break;

                  case 18:

                    _this5.particleToolPointCloud.bounds = _this5.bounds;

                    _this5.particleToolMesh.bounds = _this5.bounds;

                    tasks = [_this5.loadEmitters(), _this5.loadObjects(), _this5.loadFields()];
                    return _context2.abrupt('return', resolve(_promise2.default.all(tasks)));

                  case 24:
                    _context2.prev = 24;
                    _context2.t0 = _context2['catch'](2);
                    return _context2.abrupt('return', reject(_context2.t0));

                  case 27:
                  case 'end':
                    return _context2.stop();
                }
              }
            }, _callee2, _this5, [[2, 24]]);
          }));

          return function (_x2) {
            return _ref2.apply(this, arguments);
          };
        }());
      });
    }

    /////////////////////////////////////////////////////////////////
    // Parses scene bounds
    //
    /////////////////////////////////////////////////////////////////

  }, {
    key: 'parseBound',
    value: function parseBound(propBound) {

      var bound = JSON.parse(propBound.displayValue);

      switch (bound.type) {

        case 'box':

          return {

            center: new _ParticleSystem2.default.Vector(bound.center[0], bound.center[1], bound.center[2]),

            size: new _ParticleSystem2.default.Vector(bound.size[0], bound.size[1], bound.size[2]),

            type: 'box'
          };

        case 'sphere':

          return {

            center: new _ParticleSystem2.default.Vector(bound.center[0], bound.center[1], bound.center[2]),

            min: bound.min,
            max: bound.max,
            type: 'sphere'
          };
      }
    }

    /////////////////////////////////////////////////////////////////
    // Loads scene objects
    //
    /////////////////////////////////////////////////////////////////

  }, {
    key: 'loadObject',
    value: function loadObject(dbId) {
      var _this6 = this;

      return new _promise2.default(function () {
        var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(resolve, reject) {
          var propSettings, settings, color, material;
          return _regenerator2.default.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.prev = 0;
                  _context3.next = 3;
                  return _Viewer6.default.getProperty(_this6.viewer.model, dbId, 'particle.settings');

                case 3:
                  propSettings = _context3.sent;
                  settings = JSON.parse(propSettings.displayValue);
                  color = parseInt(settings.clr, 16);
                  material = _this6.createMaterial({
                    transparent: settings.transparent,
                    opacity: settings.opacity,
                    shading: THREE.FlatShading,
                    name: _Viewer6.default.guid(),
                    shininess: 30,
                    specular: color,
                    color: color
                  });


                  _Viewer6.default.setMaterial(_this6.viewer.model, dbId, material);

                  return _context3.abrupt('return', resolve());

                case 11:
                  _context3.prev = 11;
                  _context3.t0 = _context3['catch'](0);
                  return _context3.abrupt('return', resolve());

                case 14:
                case 'end':
                  return _context3.stop();
              }
            }
          }, _callee3, _this6, [[0, 11]]);
        }));

        return function (_x3, _x4) {
          return _ref3.apply(this, arguments);
        };
      }());
    }
  }, {
    key: 'loadObjects',
    value: function loadObjects() {
      var _this7 = this;

      return new _promise2.default(function (resolve, reject) {

        _this7.viewer.search('particle.object', function (dbIds) {

          var tasks = dbIds.map(function (dbId) {

            return _this7.loadObject(dbId);
          });

          return resolve(_promise2.default.all(tasks));
        });
      });
    }

    /////////////////////////////////////////////////////////////////
    // Load scene emitters
    //
    /////////////////////////////////////////////////////////////////

  }, {
    key: 'loadEmitter',
    value: function loadEmitter(dbId) {
      var _this8 = this;

      return new _promise2.default(function () {
        var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(resolve, reject) {
          var bbox, emitter, propSettings, settings, offset, magnitude, matIdx, material;
          return _regenerator2.default.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.prev = 0;
                  _context4.next = 3;
                  return _Viewer6.default.getWorldBoundingBox(_this8.viewer.model, dbId);

                case 3:
                  bbox = _context4.sent;
                  emitter = _this8.particleSystem.addEmitter(dbId);
                  _context4.next = 7;
                  return _Viewer6.default.getProperty(_this8.viewer.model, dbId, 'particle.settings');

                case 7:
                  propSettings = _context4.sent;
                  settings = JSON.parse(propSettings.displayValue);


                  emitter.setTransformable(settings.transfo);
                  emitter.setEmissionRate(settings.rate);
                  emitter.setSelectable(settings.select);
                  emitter.setVelocity(settings.velocity);
                  emitter.setCharge(settings.charge);
                  emitter.setSpread(settings.spread);

                  offset = new _ParticleSystem2.default.Vector(settings.dir[0], settings.dir[1], settings.dir[2]);
                  magnitude = offset.magnitude();


                  emitter.setOffset(offset.getX() * 0.5 / magnitude, offset.getY() * 0.5 / magnitude, offset.getZ() * 0.5 / magnitude);

                  emitter.setPosition((bbox.min.x + bbox.max.x) / 2, (bbox.min.y + bbox.max.y) / 2, (bbox.min.z + bbox.max.z) / 2);

                  matIdx = emitter.charge < 0 ? 0 : 1;
                  material = _this8.objectMaterials[matIdx];


                  _Viewer6.default.setMaterial(_this8.viewer.model, dbId, material);

                  return _context4.abrupt('return', resolve());

                case 25:
                  _context4.prev = 25;
                  _context4.t0 = _context4['catch'](0);


                  console.log(_context4.t0);

                  //throwing Invalid DbId
                  //return reject(ex)
                  return _context4.abrupt('return', resolve());

                case 29:
                case 'end':
                  return _context4.stop();
              }
            }
          }, _callee4, _this8, [[0, 25]]);
        }));

        return function (_x5, _x6) {
          return _ref4.apply(this, arguments);
        };
      }());
    }
  }, {
    key: 'loadEmitters',
    value: function loadEmitters() {
      var _this9 = this;

      return new _promise2.default(function (resolve, reject) {

        _this9.viewer.search('particle.emitter', function (dbIds) {

          var tasks = dbIds.map(function (dbId) {

            return _this9.loadEmitter(dbId);
          });

          return resolve(_promise2.default.all(tasks));
        });
      });
    }

    /////////////////////////////////////////////////////////////////
    // Load scene fields
    //
    /////////////////////////////////////////////////////////////////

  }, {
    key: 'loadField',
    value: function loadField(dbId) {
      var _this10 = this;

      return new _promise2.default(function () {
        var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(resolve, reject) {
          var bbox, field, propSettings, settings, matIdx, material;
          return _regenerator2.default.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  _context5.prev = 0;
                  _context5.next = 3;
                  return _Viewer6.default.getWorldBoundingBox(_this10.viewer.model, dbId);

                case 3:
                  bbox = _context5.sent;
                  field = _this10.particleSystem.addMagneticField(dbId);
                  _context5.next = 7;
                  return _Viewer6.default.getProperty(_this10.viewer.model, dbId, 'particle.settings');

                case 7:
                  propSettings = _context5.sent;
                  settings = JSON.parse(propSettings.displayValue);


                  field.setTransformable(settings.transfo);
                  field.setSelectable(settings.select);
                  field.setForce(settings.force);

                  field.setPosition((bbox.min.x + bbox.max.x) / 2, (bbox.min.y + bbox.max.y) / 2, (bbox.min.z + bbox.max.z) / 2);

                  matIdx = settings.force < 0 ? 0 : 1;
                  material = _this10.objectMaterials[matIdx];


                  _Viewer6.default.setMaterial(_this10.viewer.model, dbId, material);

                  return _context5.abrupt('return', resolve());

                case 19:
                  _context5.prev = 19;
                  _context5.t0 = _context5['catch'](0);
                  return _context5.abrupt('return', resolve());

                case 22:
                case 'end':
                  return _context5.stop();
              }
            }
          }, _callee5, _this10, [[0, 19]]);
        }));

        return function (_x7, _x8) {
          return _ref5.apply(this, arguments);
        };
      }());
    }
  }, {
    key: 'loadFields',
    value: function loadFields() {
      var _this11 = this;

      return new _promise2.default(function (resolve, reject) {

        _this11.viewer.search('particle.field', function (dbIds) {

          var tasks = dbIds.map(function (dbId) {

            return _this11.loadField(dbId);
          });

          return resolve(_promise2.default.all(tasks));
        });
      });
    }
  }], [{
    key: 'ExtensionId',
    get: function get() {

      return 'Viewing.Extension.Particle';
    }
  }]);
  return ParticleExtension;
}(_Viewer2.default);

Autodesk.Viewing.theExtensionManager.registerExtension(ParticleExtension.ExtensionId, ParticleExtension);

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Viewing.Extension.Particle.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module), __webpack_require__(31)))

/***/ }),

/***/ 1725:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _keys = __webpack_require__(375);

var _keys2 = _interopRequireDefault(_keys);

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

__webpack_require__(1720);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TransformTool = function (_EventsEmitter) {
  (0, _inherits3.default)(TransformTool, _EventsEmitter);

  /////////////////////////////////////////////////////////////////
  // Class constructor
  //
  /////////////////////////////////////////////////////////////////
  function TransformTool(viewer) {
    (0, _classCallCheck3.default)(this, TransformTool);

    var _this = (0, _possibleConstructorReturn3.default)(this, (TransformTool.__proto__ || (0, _getPrototypeOf2.default)(TransformTool)).call(this));

    viewer.toolController.registerTool(_this);

    _this.viewer = viewer;

    _this._dbIds = [];

    _this._hitPoint = null;

    _this._selectSet = null;

    _this._isDragging = false;

    _this._transformMesh = null;

    _this._modifiedFragIdMap = {};

    _this._transformControlTx = null;

    _this._selectedFragProxyMap = {};

    _this.onTxChange = _this.onTxChange.bind(_this);

    _this.onAggregateSelectionChanged = _this.onAggregateSelectionChanged.bind(_this);

    _this.onCameraChanged = _this.onCameraChanged.bind(_this);

    _this.handleSelectionChanged = _this.handleSelectionChanged.bind(_this);
    return _this;
  }

  /////////////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////////////


  (0, _createClass3.default)(TransformTool, [{
    key: 'getNames',
    value: function getNames() {

      return ["Viewing.Transform.Tool"];
    }

    /////////////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////////////

  }, {
    key: 'getName',
    value: function getName() {

      return "Viewing.Transform.Tool";
    }

    ///////////////////////////////////////////////////////////////////////////
    // Creates a dummy mesh to attach control to
    //
    ///////////////////////////////////////////////////////////////////////////

  }, {
    key: 'createTransformMesh',
    value: function createTransformMesh() {

      var material = new THREE.MeshPhongMaterial({ color: 0xff0000 });

      this.viewer.impl.matman().addMaterial('transform-tool-material', material, true);

      var sphere = new THREE.Mesh(new THREE.SphereGeometry(0.0001, 5), material);

      sphere.position.set(0, 0, 0);

      return sphere;
    }

    ///////////////////////////////////////////////////////////////////////////
    // on translation change
    //
    ///////////////////////////////////////////////////////////////////////////

  }, {
    key: 'onTxChange',
    value: function onTxChange() {

      for (var fragId in this._selectedFragProxyMap) {

        var fragProxy = this._selectedFragProxyMap[fragId];

        var position = new THREE.Vector3(this._transformMesh.position.x - fragProxy.offset.x, this._transformMesh.position.y - fragProxy.offset.y, this._transformMesh.position.z - fragProxy.offset.z);

        fragProxy.position = position;

        fragProxy.updateAnimTransform();
      }

      this.viewer.impl.sceneUpdated(true);

      this.emit('transform.TxChange', {
        dbIds: this._dbIds,
        fragIds: (0, _keys2.default)(this._selectedFragProxyMap)
      });
    }

    ///////////////////////////////////////////////////////////////////////////
    // on camera changed
    //
    ///////////////////////////////////////////////////////////////////////////

  }, {
    key: 'onCameraChanged',
    value: function onCameraChanged() {

      if (this._transformControlTx) {

        this._transformControlTx.update();
      }
    }

    ///////////////////////////////////////////////////////////////////////////
    // item selected callback
    //
    ///////////////////////////////////////////////////////////////////////////

  }, {
    key: 'onAggregateSelectionChanged',
    value: function onAggregateSelectionChanged(event) {

      var dbIdArray = [];
      var fragIdsArray = [];

      if (event.selections && event.selections.length) {

        var selection = event.selections[0];

        dbIdArray = selection.dbIdArray;

        fragIdsArray = selection.fragIdsArray;
      }

      this.handleSelectionChanged(dbIdArray, fragIdsArray);
    }
  }, {
    key: 'handleSelectionChanged',
    value: function handleSelectionChanged(dbIdArray, fragIdsArray) {
      var _this2 = this;

      this._selectedFragProxyMap = {};

      this._dbIds = dbIdArray;

      //component unselected

      if (!fragIdsArray.length) {

        this._hitPoint = null;

        this._transformControlTx.visible = false;

        this._transformControlTx.removeEventListener('change', this.onTxChange);

        this.viewer.removeEventListener(Autodesk.Viewing.CAMERA_CHANGE_EVENT, this.onCameraChanged);

        this.emit('transform.select', {
          dbIds: this._dbIds
        });

        return;
      }

      if (this._hitPoint) {

        this._selectSet = this.emit('transform.select', {
          dbIds: this._dbIds
        });

        if (this._selectSet) {

          if (!this._selectSet.selectable) {
            this._hitPoint = null;
            this.viewer.select([]);
            return;
          }

          if (!this._selectSet.transformable) {
            this._hitPoint = null;
            return;
          }
        }

        this._transformControlTx.visible = true;

        this._transformControlTx.setPosition(this._hitPoint);

        this._transformControlTx.addEventListener('change', this.onTxChange);

        this.viewer.addEventListener(Autodesk.Viewing.CAMERA_CHANGE_EVENT, this.onCameraChanged);

        fragIdsArray.forEach(function (fragId) {

          var fragProxy = _this2.viewer.impl.getFragmentProxy(_this2.viewer.model, fragId);

          fragProxy.getAnimTransform();

          var offset = {

            x: _this2._hitPoint.x - fragProxy.position.x,
            y: _this2._hitPoint.y - fragProxy.position.y,
            z: _this2._hitPoint.z - fragProxy.position.z
          };

          fragProxy.offset = offset;

          _this2._selectedFragProxyMap[fragId] = fragProxy;

          _this2._modifiedFragIdMap[fragId] = {};
        });

        this._hitPoint = null;
      }
    }

    ///////////////////////////////////////////////////////////////////////////
    // normalize screen coordinates
    //
    ///////////////////////////////////////////////////////////////////////////

  }, {
    key: 'normalize',
    value: function normalize(screenPoint) {

      var viewport = this.viewer.navigation.getScreenViewport();

      var n = {
        x: (screenPoint.x - viewport.left) / viewport.width,
        y: (screenPoint.y - viewport.top) / viewport.height
      };

      return n;
    }

    ///////////////////////////////////////////////////////////////////////////
    // get 3d hit point on mesh
    //
    ///////////////////////////////////////////////////////////////////////////

  }, {
    key: 'getHitPoint',
    value: function getHitPoint(event) {

      var screenPoint = {
        x: event.clientX,
        y: event.clientY
      };

      var n = this.normalize(screenPoint);

      var hitPoint = this.viewer.utilities.getHitPoint(n.x, n.y);

      return hitPoint;
    }

    ///////////////////////////////////////////////////////////////////
    //
    //
    ///////////////////////////////////////////////////////////////////

  }, {
    key: 'activate',
    value: function activate() {

      if (!this.active) {

        console.log(this.getName() + ' activated');

        this.active = true;

        this.viewer.select([]);

        var bbox = this.viewer.model.getBoundingBox();

        this.viewer.impl.createOverlayScene('TransformToolOverlay');

        this._transformControlTx = new THREE.TransformControls(this.viewer.impl.camera, this.viewer.impl.canvas, "translate");

        this._transformControlTx.setSize(bbox.getBoundingSphere().radius * 5);

        this._transformControlTx.visible = false;

        this.viewer.impl.addOverlay('TransformToolOverlay', this._transformControlTx);

        this._transformMesh = this.createTransformMesh();

        this._transformControlTx.attach(this._transformMesh);

        this.viewer.addEventListener(Autodesk.Viewing.AGGREGATE_SELECTION_CHANGED_EVENT, this.onAggregateSelectionChanged);

        this.viewer.toolController.activateTool(this.getName());

        this.emit('activate');
      }
    }

    ///////////////////////////////////////////////////////////////////////////
    // deactivate tool
    //
    ///////////////////////////////////////////////////////////////////////////

  }, {
    key: 'deactivate',
    value: function deactivate() {

      if (this.active) {

        this.active = false;

        this.viewer.toolController.deactivateTool(this.getName());

        this.viewer.impl.removeOverlay('TransformToolOverlay', this._transformControlTx);

        this._transformControlTx.removeEventListener('change', this.onTxChange);

        this._transformControlTx = null;

        this.viewer.impl.removeOverlayScene('TransformToolOverlay');

        this.viewer.removeEventListener(Autodesk.Viewing.CAMERA_CHANGE_EVENT, this.onCameraChanged);

        this.viewer.removeEventListener(Autodesk.Viewing.AGGREGATE_SELECTION_CHANGED_EVENT, this.onAggregateSelectionChanged);

        this.emit('deactivate');
      }
    }

    ///////////////////////////////////////////////////////////////////////////
    //
    //
    ///////////////////////////////////////////////////////////////////////////

  }, {
    key: 'handleButtonDown',
    value: function handleButtonDown(event, button) {

      this._hitPoint = this.getHitPoint(event);

      this._isDragging = true;

      if (this._transformControlTx.onPointerDown(event)) return true;

      //return _transRotControl.onPointerDown(event)
      return false;
    }

    ///////////////////////////////////////////////////////////////////////////
    //
    //
    ///////////////////////////////////////////////////////////////////////////

  }, {
    key: 'handleButtonUp',
    value: function handleButtonUp(event, button) {

      this._isDragging = false;

      if (this._transformControlTx.onPointerUp(event)) return true;

      //return _transRotControl.onPointerUp(event)
      return false;
    }

    ///////////////////////////////////////////////////////////////////////////
    //
    //
    ///////////////////////////////////////////////////////////////////////////

  }, {
    key: 'handleMouseMove',
    value: function handleMouseMove(event) {

      if (this._isDragging) {

        if (this._transformControlTx.onPointerMove(event)) {

          return true;
        }

        return false;
      }

      if (this._transformControlTx.onPointerHover(event)) return true;

      //return _transRotControl.onPointerHover(event)
      return false;
    }
  }]);
  return TransformTool;
}(_EventsEmitter3.default);

exports.default = TransformTool;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Viewing.Tool.Particle.Translate.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1726:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

var _typeof2 = __webpack_require__(99);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*!
 * FPSMeter 0.3.1 - 9th May 2013
 * https://github.com/Darsain/fpsmeter
 *
 * Licensed under the MIT license.
 * http://opensource.org/licenses/MIT
 */
;(function (w, undefined) {
	'use strict';

	/**
  * Create a new element.
  *
  * @param  {String} name Element type name.
  *
  * @return {Element}
  */

	function newEl(name) {
		return document.createElement(name);
	}

	/**
  * Apply theme CSS properties to element.
  *
  * @param  {Element} element DOM element.
  * @param  {Object}  theme   Theme object.
  *
  * @return {Element}
  */
	function applyTheme(element, theme) {
		for (var name in theme) {
			try {
				element.style[name] = theme[name];
			} catch (e) {}
		}
		return element;
	}

	/**
  * Return type of the value.
  *
  * @param  {Mixed} value
  *
  * @return {String}
  */
	function type(value) {
		if (value == null) {
			return String(value);
		}

		if ((typeof value === 'undefined' ? 'undefined' : (0, _typeof3.default)(value)) === 'object' || typeof value === 'function') {
			return Object.prototype.toString.call(value).match(/\s([a-z]+)/i)[1].toLowerCase() || 'object';
		}

		return typeof value === 'undefined' ? 'undefined' : (0, _typeof3.default)(value);
	}

	/**
  * Check whether the value is in an array.
  *
  * @param  {Mixed} value
  * @param  {Array} array
  *
  * @return {Integer} Array index or -1 when not found.
  */
	function inArray(value, array) {
		if (type(array) !== 'array') {
			return -1;
		}
		if (array.indexOf) {
			return array.indexOf(value);
		}
		for (var i = 0, l = array.length; i < l; i++) {
			if (array[i] === value) {
				return i;
			}
		}
		return -1;
	}

	/**
  * Poor man's deep object extend.
  *
  * Example:
  *   extend({}, defaults, options);
  *
  * @return {Void}
  */
	function extend() {
		var args = arguments;
		for (var key in args[1]) {
			if (args[1].hasOwnProperty(key)) {
				switch (type(args[1][key])) {
					case 'object':
						args[0][key] = extend({}, args[0][key], args[1][key]);
						break;

					case 'array':
						args[0][key] = args[1][key].slice(0);
						break;

					default:
						args[0][key] = args[1][key];
				}
			}
		}
		return args.length > 2 ? extend.apply(null, [args[0]].concat(Array.prototype.slice.call(args, 2))) : args[0];
	}

	/**
  * Convert HSL color to HEX string.
  *
  * @param  {Array} hsl Array with [hue, saturation, lightness].
  *
  * @return {Array} Array with [red, green, blue].
  */
	function hslToHex(h, s, l) {
		var r, g, b;
		var v, min, sv, sextant, fract, vsf;

		if (l <= 0.5) {
			v = l * (1 + s);
		} else {
			v = l + s - l * s;
		}

		if (v === 0) {
			return '#000';
		} else {
			min = 2 * l - v;
			sv = (v - min) / v;
			h = 6 * h;
			sextant = Math.floor(h);
			fract = h - sextant;
			vsf = v * sv * fract;
			if (sextant === 0 || sextant === 6) {
				r = v;
				g = min + vsf;
				b = min;
			} else if (sextant === 1) {
				r = v - vsf;
				g = v;
				b = min;
			} else if (sextant === 2) {
				r = min;
				g = v;
				b = min + vsf;
			} else if (sextant === 3) {
				r = min;
				g = v - vsf;
				b = v;
			} else if (sextant === 4) {
				r = min + vsf;
				g = min;
				b = v;
			} else {
				r = v;
				g = min;
				b = v - vsf;
			}
			return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
		}
	}

	/**
  * Helper function for hslToHex.
  */
	function componentToHex(c) {
		c = Math.round(c * 255).toString(16);
		return c.length === 1 ? '0' + c : c;
	}

	/**
  * Manage element event listeners.
  *
  * @param  {Node}     element
  * @param  {Event}    eventName
  * @param  {Function} handler
  * @param  {Bool}     remove
  *
  * @return {Void}
  */
	function listener(element, eventName, handler, remove) {
		if (element.addEventListener) {
			element[remove ? 'removeEventListener' : 'addEventListener'](eventName, handler, false);
		} else if (element.attachEvent) {
			element[remove ? 'detachEvent' : 'attachEvent']('on' + eventName, handler);
		}
	}

	// Preferred timing funtion
	var getTime;
	(function () {
		var perf = w.performance;
		if (perf && (perf.now || perf.webkitNow)) {
			var perfNow = perf.now ? 'now' : 'webkitNow';
			getTime = perf[perfNow].bind(perf);
		} else {
			getTime = function getTime() {
				return +new Date();
			};
		}
	})();

	// Local WindowAnimationTiming interface polyfill
	var cAF = w.cancelAnimationFrame || w.cancelRequestAnimationFrame;
	var rAF = w.requestAnimationFrame;
	(function () {
		var vendors = ['moz', 'webkit', 'o'];
		var lastTime = 0;

		// For a more accurate WindowAnimationTiming interface implementation, ditch the native
		// requestAnimationFrame when cancelAnimationFrame is not present (older versions of Firefox)
		for (var i = 0, l = vendors.length; i < l && !cAF; ++i) {
			cAF = w[vendors[i] + 'CancelAnimationFrame'] || w[vendors[i] + 'CancelRequestAnimationFrame'];
			rAF = cAF && w[vendors[i] + 'RequestAnimationFrame'];
		}

		if (!cAF) {
			rAF = function rAF(callback) {
				var currTime = getTime();
				var timeToCall = Math.max(0, 16 - (currTime - lastTime));
				lastTime = currTime + timeToCall;
				return w.setTimeout(function () {
					callback(currTime + timeToCall);
				}, timeToCall);
			};

			cAF = function cAF(id) {
				clearTimeout(id);
			};
		}
	})();

	// Property name for assigning element text content
	var textProp = type(document.createElement('div').textContent) === 'string' ? 'textContent' : 'innerText';

	/**
  * FPSMeter class.
  *
  * @param {Element} anchor  Element to append the meter to. Default is document.body.
  * @param {Object}  options Object with options.
  */
	function FPSMeter(anchor, options) {
		// Optional arguments
		if (type(anchor) === 'object' && anchor.nodeType === undefined) {
			options = anchor;
			anchor = document.body;
		}
		if (!anchor) {
			anchor = document.body;
		}

		// Private properties
		var self = this;
		var o = extend({}, FPSMeter.defaults, options || {});

		var el = {};
		var cols = [];
		var theme, heatmaps;
		var heatDepth = 100;
		var heating = [];

		var thisFrameTime = 0;
		var frameTime = o.threshold;
		var frameStart = 0;
		var lastLoop = getTime() - frameTime;
		var time;

		var fpsHistory = [];
		var durationHistory = [];

		var frameID, renderID;
		var showFps = o.show === 'fps';
		var graphHeight, count, i, j;

		// Exposed properties
		self.options = o;
		self.fps = 0;
		self.duration = 0;
		self.isPaused = 0;

		/**
   * Tick start for measuring the actual rendering duration.
   *
   * @return {Void}
   */
		self.tickStart = function () {
			frameStart = getTime();
		};

		/**
   * FPS tick.
   *
   * @return {Void}
   */
		self.tick = function () {
			time = getTime();
			thisFrameTime = time - lastLoop;
			frameTime += (thisFrameTime - frameTime) / o.smoothing;
			self.fps = 1000 / frameTime;
			self.duration = frameStart < lastLoop ? frameTime : time - frameStart;
			lastLoop = time;
		};

		/**
   * Pause display rendering.
   *
   * @return {Object} FPSMeter instance.
   */
		self.pause = function () {
			if (frameID) {
				self.isPaused = 1;
				clearTimeout(frameID);
				cAF(frameID);
				cAF(renderID);
				frameID = renderID = 0;
			}
			return self;
		};

		/**
   * Resume display rendering.
   *
   * @return {Object} FPSMeter instance.
   */
		self.resume = function () {
			if (!frameID) {
				self.isPaused = 0;
				requestRender();
			}
			return self;
		};

		/**
   * Update options.
   *
   * @param {String} name  Option name.
   * @param {Mixed}  value New value.
   *
   * @return {Object} FPSMeter instance.
   */
		self.set = function (name, value) {
			o[name] = value;
			showFps = o.show === 'fps';

			// Rebuild or reposition elements when specific option has been updated
			if (inArray(name, rebuilders) !== -1) {
				createMeter();
			}
			if (inArray(name, repositioners) !== -1) {
				positionMeter();
			}
			return self;
		};

		/**
   * Change meter into rendering duration mode.
   *
   * @return {Object} FPSMeter instance.
   */
		self.showDuration = function () {
			self.set('show', 'ms');
			return self;
		};

		/**
   * Change meter into FPS mode.
   *
   * @return {Object} FPSMeter instance.
   */
		self.showFps = function () {
			self.set('show', 'fps');
			return self;
		};

		/**
   * Toggles between show: 'fps' and show: 'duration'.
   *
   * @return {Object} FPSMeter instance.
   */
		self.toggle = function () {
			self.set('show', showFps ? 'ms' : 'fps');
			return self;
		};

		/**
   * Hide the FPSMeter. Also pauses the rendering.
   *
   * @return {Object} FPSMeter instance.
   */
		self.hide = function () {
			self.pause();
			el.container.style.display = 'none';
			return self;
		};

		/**
   * Show the FPSMeter. Also resumes the rendering.
   *
   * @return {Object} FPSMeter instance.
   */
		self.show = function () {
			self.resume();
			el.container.style.display = 'block';
			return self;
		};

		/**
   * Check the current FPS and save it in history.
   *
   * @return {Void}
   */
		function historyTick() {
			for (i = o.history; i--;) {
				fpsHistory[i] = i === 0 ? self.fps : fpsHistory[i - 1];
				durationHistory[i] = i === 0 ? self.duration : durationHistory[i - 1];
			}
		}

		/**
   * Returns heat hex color based on values passed.
   *
   * @param  {Integer} heatmap
   * @param  {Integer} value
   * @param  {Integer} min
   * @param  {Integer} max
   *
   * @return {Integer}
   */
		function getHeat(heatmap, value, min, max) {
			return heatmaps[0 | heatmap][Math.round(Math.min((value - min) / (max - min) * heatDepth, heatDepth))];
		}

		/**
   * Update counter number and legend.
   *
   * @return {Void}
   */
		function updateCounter() {
			// Update legend only when changed
			if (el.legend.fps !== showFps) {
				el.legend.fps = showFps;
				el.legend[textProp] = showFps ? o.legend[0] : o.legend[1]; //ADN modif
			}
			// Update counter with a nicely formated & readable number
			count = showFps ? self.fps : self.duration;
			el.count[textProp] = count.toFixed(count > 99 ? 0 : o.decimals);
		}

		/**
   * Render current FPS state.
   *
   * @return {Void}
   */
		function render() {
			time = getTime();
			// If renderer stopped reporting, do a simulated drop to 0 fps
			if (lastLoop < time - o.threshold) {
				self.fps -= self.fps / Math.max(1, o.smoothing * 60 / o.interval);
				self.duration = 1000 / self.fps;
			}

			historyTick();
			updateCounter();

			// Apply heat to elements
			if (o.heat) {
				if (heating.length) {
					for (i = heating.length; i--;) {
						heating[i].el.style[theme[heating[i].name].heatOn] = showFps ? getHeat(theme[heating[i].name].heatmap, self.fps, 0, o.maxFps) : getHeat(theme[heating[i].name].heatmap, self.duration, o.threshold, 0);
					}
				}

				if (el.graph && theme.column.heatOn) {
					for (i = cols.length; i--;) {
						cols[i].style[theme.column.heatOn] = showFps ? getHeat(theme.column.heatmap, fpsHistory[i], 0, o.maxFps) : getHeat(theme.column.heatmap, durationHistory[i], o.threshold, 0);
					}
				}
			}

			// Update graph columns height
			if (el.graph) {
				for (j = 0; j < o.history; j++) {
					cols[j].style.height = (showFps ? fpsHistory[j] ? Math.round(graphHeight / o.maxFps * Math.min(fpsHistory[j], o.maxFps)) : 0 : durationHistory[j] ? Math.round(graphHeight / o.threshold * Math.min(durationHistory[j], o.threshold)) : 0) + 'px';
				}
			}
		}

		/**
   * Request rendering loop.
   *
   * @return {Int} Animation frame index.
   */
		function requestRender() {
			if (o.interval < 20) {
				frameID = rAF(requestRender);
				render();
			} else {
				frameID = setTimeout(requestRender, o.interval);
				renderID = rAF(render);
			}
		}

		/**
   * Meter events handler.
   *
   * @return {Void}
   */
		function eventHandler(event) {
			event = event || window.event;
			if (event.preventDefault) {
				event.preventDefault();
				event.stopPropagation();
			} else {
				event.returnValue = false;
				event.cancelBubble = true;
			}
			self.toggle();
		}

		/**
   * Destroys the current FPSMeter instance.
   *
   * @return {Void}
   */
		self.destroy = function () {
			// Stop rendering
			self.pause();
			// Remove elements
			removeMeter();
			// Stop listening
			self.tick = self.tickStart = function () {};
		};

		/**
   * Remove meter element.
   *
   * @return {Void}
   */
		function removeMeter() {
			// Unbind listeners
			if (o.toggleOn) {
				listener(el.container, o.toggleOn, eventHandler, 1);
			}
			// Detach element
			anchor.removeChild(el.container);
		}

		/**
   * Sets the theme, and generates heatmaps when needed.
   */
		function setTheme() {
			theme = FPSMeter.theme[o.theme];

			// Generate heatmaps
			heatmaps = theme.compiledHeatmaps || [];
			if (!heatmaps.length && theme.heatmaps.length) {
				for (j = 0; j < theme.heatmaps.length; j++) {
					heatmaps[j] = [];
					for (i = 0; i <= heatDepth; i++) {
						heatmaps[j][i] = hslToHex(0.33 / heatDepth * i, theme.heatmaps[j].saturation, theme.heatmaps[j].lightness);
					}
				}
				theme.compiledHeatmaps = heatmaps;
			}
		}

		/**
   * Creates and attaches the meter element.
   *
   * @return {Void}
   */
		function createMeter() {
			// Remove old meter if present
			if (el.container) {
				removeMeter();
			}

			// Set theme
			setTheme();

			// Create elements
			el.container = applyTheme(newEl('div'), theme.container);
			el.count = el.container.appendChild(applyTheme(newEl('div'), theme.count));
			el.legend = el.container.appendChild(applyTheme(newEl('div'), theme.legend));
			el.graph = o.graph ? el.container.appendChild(applyTheme(newEl('div'), theme.graph)) : 0;

			// Add elements to heating array
			heating.length = 0;
			for (var key in el) {
				if (el[key] && theme[key].heatOn) {
					heating.push({
						name: key,
						el: el[key]
					});
				}
			}

			// Graph
			cols.length = 0;
			if (el.graph) {
				// Create graph
				el.graph.style.width = o.history * theme.column.width + (o.history - 1) * theme.column.spacing + 'px';

				// Add columns
				for (i = 0; i < o.history; i++) {
					cols[i] = el.graph.appendChild(applyTheme(newEl('div'), theme.column));
					cols[i].style.position = 'absolute';
					cols[i].style.bottom = 0;
					cols[i].style.right = i * theme.column.width + i * theme.column.spacing + 'px';
					cols[i].style.width = theme.column.width + 'px';
					cols[i].style.height = '0px';
				}
			}

			// Set the initial state
			positionMeter();
			updateCounter();

			// Append container to anchor
			anchor.appendChild(el.container);

			// Retrieve graph height after it was appended to DOM
			if (el.graph) {
				graphHeight = el.graph.clientHeight;
			}

			// Add event listeners
			if (o.toggleOn) {
				if (o.toggleOn === 'click') {
					el.container.style.cursor = 'pointer';
				}
				listener(el.container, o.toggleOn, eventHandler);
			}
		}

		/**
   * Positions the meter based on options.
   *
   * @return {Void}
   */
		function positionMeter() {
			applyTheme(el.container, o);
		}

		/**
   * Construct.
   */
		(function () {
			// Create meter element
			createMeter();
			// Start rendering
			requestRender();
		})();
	}

	// Expose the extend function
	FPSMeter.extend = extend;

	// Expose the FPSMeter class
	window.FPSMeter = FPSMeter;

	// Default options
	FPSMeter.defaults = {
		interval: 100, // Update interval in milliseconds.
		smoothing: 10, // Spike smoothing strength. 1 means no smoothing.
		show: 'fps', // Whether to show 'fps', or 'ms' = frame duration in milliseconds.
		toggleOn: 'click', // Toggle between show 'fps' and 'ms' on this event.
		decimals: 1, // Number of decimals in FPS number. 1 = 59.9, 2 = 59.94, ...
		maxFps: 60, // Max expected FPS value.
		threshold: 100, // Minimal tick reporting interval in milliseconds.

		// Meter position
		position: 'absolute', // Meter position.
		zIndex: 10, // Meter Z index.
		left: '5px', // Meter left offset.
		top: '5px', // Meter top offset.
		right: 'auto', // Meter right offset.
		bottom: 'auto', // Meter bottom offset.
		margin: '0 0 0 0', // Meter margin. Helps with centering the counter when left: 50%;

		// Theme
		theme: 'dark', // Meter theme. Build in: 'dark', 'light', 'transparent', 'colorful'.
		heat: 0, // Allow themes to use coloring by FPS heat. 0 FPS = red, maxFps = green.

		// Graph
		graph: 0, // Whether to show history graph.
		history: 20, // How many history states to show in a graph.
		legend: ['FPS', 'ms']
	};

	// Option names that trigger FPSMeter rebuild or reposition when modified
	var rebuilders = ['toggleOn', 'theme', 'heat', 'graph', 'history'];
	var repositioners = ['position', 'zIndex', 'left', 'top', 'right', 'bottom', 'margin'];
})(window);
;(function (w, FPSMeter, undefined) {
	'use strict';

	// Themes object

	FPSMeter.theme = {};

	// Base theme with layout, no colors
	var base = FPSMeter.theme.base = {
		heatmaps: [],
		container: {
			// Settings
			heatOn: null,
			heatmap: null,

			// Styles
			padding: '5px',
			minWidth: '95px',
			height: '30px',
			lineHeight: '30px',
			textAlign: 'right',
			textShadow: 'none'
		},
		count: {
			// Settings
			heatOn: null,
			heatmap: null,

			// Styles
			position: 'absolute',
			top: 0,
			right: 0,
			padding: '5px 10px',
			height: '30px',
			fontSize: '24px',
			fontFamily: 'Consolas, Andale Mono, monospace',
			zIndex: 2
		},
		legend: {
			// Settings
			heatOn: null,
			heatmap: null,

			// Styles
			position: 'absolute',
			top: 0,
			left: 0,
			padding: '5px 10px',
			height: '30px',
			fontSize: '12px',
			lineHeight: '32px',
			fontFamily: 'sans-serif',
			textAlign: 'left',
			zIndex: 2
		},
		graph: {
			// Settings
			heatOn: null,
			heatmap: null,

			// Styles
			position: 'relative',
			boxSizing: 'padding-box',
			MozBoxSizing: 'padding-box',
			height: '100%',
			zIndex: 1
		},
		column: {
			// Settings
			width: 4,
			spacing: 1,
			heatOn: null,
			heatmap: null
		}
	};

	// Dark theme
	FPSMeter.theme.dark = FPSMeter.extend({}, base, {
		heatmaps: [{
			saturation: 0.8,
			lightness: 0.8
		}],
		container: {
			background: 'rgba(60, 60, 60, 0.5)',
			color: '#fff',
			border: '1px solid #1a1a1a',
			textShadow: '1px 1px 0 #222'
		},
		count: {
			heatOn: 'color'
		},
		column: {
			background: '#3f3f3f'
		}
	});

	// Light theme
	FPSMeter.theme.light = FPSMeter.extend({}, base, {
		heatmaps: [{
			saturation: 0.5,
			lightness: 0.5
		}],
		container: {
			color: '#666',
			background: '#fff',
			textShadow: '1px 1px 0 rgba(255,255,255,.5), -1px -1px 0 rgba(255,255,255,.5)',
			boxShadow: '0 0 0 1px rgba(0,0,0,.1)'
		},
		count: {
			heatOn: 'color'
		},
		column: {
			background: '#eaeaea'
		}
	});

	// Colorful theme
	FPSMeter.theme.colorful = FPSMeter.extend({}, base, {
		heatmaps: [{
			saturation: 0.5,
			lightness: 0.6
		}],
		container: {
			heatOn: 'backgroundColor',
			background: '#888',
			color: '#fff',
			textShadow: '1px 1px 0 rgba(0,0,0,.2)',
			boxShadow: '0 0 0 1px rgba(0,0,0,.1)'
		},
		column: {
			background: '#777',
			backgroundColor: 'rgba(0,0,0,.2)'
		}
	});

	// Transparent theme
	FPSMeter.theme.transparent = FPSMeter.extend({}, base, {
		heatmaps: [{
			saturation: 0.8,
			lightness: 0.5
		}],
		container: {
			background: 'rgba(60, 60, 60, 0.5)',
			color: '#fff',
			border: '1px solid #1a1a1a',
			textShadow: '1px 1px 0 #222'
		},
		count: {
			padding: '0 5px',
			height: '40px',
			lineHeight: '40px'
		},
		//legend: {
		//	padding: '0 5px',
		//	height: '40px',
		//	lineHeight: '42px'
		//},
		//graph: {
		//	height: '40px'
		//},
		column: {
			width: 5,
			background: '#999',
			heatOn: 'backgroundColor',
			opacity: 0.5
		}
	});
})(window, FPSMeter);

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "FPSMeter.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1727:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(18);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GUIObjectAdapter = function () {
  function GUIObjectAdapter(obj, mapping) {
    (0, _classCallCheck3.default)(this, GUIObjectAdapter);


    this.mapping = mapping;

    this.object = obj;

    for (var key in this.mapping) {

      var getter = this.mapping[key].getter;

      this[key] = this.object[getter]();
    }
  }

  (0, _createClass3.default)(GUIObjectAdapter, [{
    key: "update",
    value: function update() {

      for (var key in this.mapping) {

        if (this.mapping[key].setter) {

          var setter = this.mapping[key].setter;

          this.object[setter](this[key]);
        }
      }
    }
  }]);
  return GUIObjectAdapter;
}();

exports.default = GUIObjectAdapter;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "GUIObjectAdapter.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1728:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, $) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

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

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(1022);

var _get3 = _interopRequireDefault(_get2);

var _createClass2 = __webpack_require__(18);

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

__webpack_require__(1782);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getDefaultOptions() {

  return {
    shadow: true,
    movable: true,
    closable: true
  };
} /////////////////////////////////////////////////////////////////
//
//
/////////////////////////////////////////////////////////////////

var ToolPanelBase = function (_Autodesk$Viewing$UI$) {
  (0, _inherits3.default)(ToolPanelBase, _Autodesk$Viewing$UI$);
  (0, _createClass3.default)(ToolPanelBase, null, [{
    key: 'guid',


    ///////////////////////////////////////////////////////////////////
    //
    //
    ///////////////////////////////////////////////////////////////////
    value: function guid() {
      var format = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'xxxxxxxxxx';


      var d = new Date().getTime();

      var guid = format.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == 'x' ? r : r & 0x7 | 0x8).toString(16);
      });

      return guid;
    }

    ///////////////////////////////////////////////////////////////////
    //
    //
    ///////////////////////////////////////////////////////////////////

  }]);

  function ToolPanelBase(container, title) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    (0, _classCallCheck3.default)(this, ToolPanelBase);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ToolPanelBase.__proto__ || (0, _getPrototypeOf2.default)(ToolPanelBase)).call(this, container, ToolPanelBase.guid(), title, (0, _assign2.default)(getDefaultOptions(), options)));

    _this._dialogResult = 'CANCEL';

    _this._events = {};

    _this._isVisible = false;
    _this._isMinimized = false;

    _this._btnElement = options.buttonElement;
    return _this;
  }

  /////////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////////


  (0, _createClass3.default)(ToolPanelBase, [{
    key: 'htmlContent',
    value: function htmlContent(id) {

      return '<div></div>';
    }

    /////////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////////

  }, {
    key: 'unload',
    value: function unload() {

      this.setVisible(false);

      $(this.container).remove();
    }

    /////////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////////

  }, {
    key: 'isVisible',
    value: function isVisible() {

      return this._isVisible;
    }

    /////////////////////////////////////////////////////////////
    // setVisible override
    //
    /////////////////////////////////////////////////////////////

  }, {
    key: 'setVisible',
    value: function setVisible() {
      var show = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;


      if (show !== this._isVisible) {

        if (typeof this._events !== 'undefined') {

          this.emit(show ? 'open' : 'close', {
            result: this._dialogResult
          });
        }
      }

      this._isVisible = show;

      if (this._btnElement) {

        if (show) this._btnElement.classList.add('active');else this._btnElement.classList.remove('active');
      }

      (0, _get3.default)(ToolPanelBase.prototype.__proto__ || (0, _getPrototypeOf2.default)(ToolPanelBase.prototype), 'setVisible', this).call(this, show);
    }

    /////////////////////////////////////////////////////////////
    // Toggles panel visibility
    //
    /////////////////////////////////////////////////////////////

  }, {
    key: 'toggleVisibility',
    value: function toggleVisibility() {

      this.setVisible(!this._isVisible);
    }

    /////////////////////////////////////////////////////////////
    // initialize override
    //
    /////////////////////////////////////////////////////////////

  }, {
    key: 'initialize',
    value: function initialize() {

      this.title = this.createTitleBar(this.titleLabel || this.container.id);

      $(this.container).append(this.title);

      this.setTitle(this.titleLabel || this.container.id, this.options);

      if (this.options.movable) {
        this.initializeMoveHandlers(this.title);
      }

      if (this.options.closable) {
        this.closer = this.createCloseButton();
        $(this.title).append(this.closer);
      }

      var $content = $(this.htmlContent(this.container.id));

      this.content = $content[0];

      $(this.container).append($content);

      this.container.classList.add('toolPanelBase');
    }

    /////////////////////////////////////////////////////////////
    // createTitleBar override
    //
    /////////////////////////////////////////////////////////////

  }, {
    key: 'createTitleBar',
    value: function createTitleBar(title) {
      var _this2 = this;

      var titleBar = document.createElement("div");

      titleBar.className = "dockingPanelTitle";

      this.titleTextId = ToolPanelBase.guid();

      this.titleImgId = ToolPanelBase.guid();

      var html = '\n      <img id="' + this.titleImgId + '"></img>\n      <div id="' + this.titleTextId + '" class="dockingPanelTitleText">\n        ' + title + '\n      </div>\n    ';

      $(titleBar).append(html);

      this.addEventListener(titleBar, 'click', function (event) {

        if (!_this2.movedSinceLastClick) {

          _this2.onTitleClick(event);
        }

        _this2.movedSinceLastClick = false;
      });

      this.addEventListener(titleBar, 'dblclick', function (event) {

        _this2.onTitleDoubleClick(event);
      });

      return titleBar;
    }

    /////////////////////////////////////////////////////////////
    // setTitle override
    //
    /////////////////////////////////////////////////////////////

  }, {
    key: 'setTitle',
    value: function setTitle(text, options) {

      if (options && options.localizeTitle) {

        $('#' + this.titleTextId).attr('data-i18n', text);

        text = Autodesk.Viewing.i18n.translate(text);
      } else {

        $('#' + this.titleTextId).removeAttr('data-i18n');
      }

      $('#' + this.titleTextId).text(text);
    }

    /////////////////////////////////////////////////////////////
    // onTitleDoubleClick override
    //
    /////////////////////////////////////////////////////////////

  }, {
    key: 'onTitleDoubleClick',
    value: function onTitleDoubleClick(event) {

      this._isMinimized = !this._isMinimized;

      if (this._isMinimized) {

        this._height = $(this.container).css('height');

        $(this.container).css({
          'height': '32px',
          'min-height': '32px'
        });
      } else {

        $(this.container).css({
          'height': this._height,
          'min-height': '100px'
        });
      }
    }

    ///////////////////////////////////////////////////////////////////
    //
    //
    ///////////////////////////////////////////////////////////////////

  }, {
    key: 'on',
    value: function on(event, fct) {

      this._events[event] = this._events[event] || [];
      this._events[event].push(fct);
      return fct;
    }

    ///////////////////////////////////////////////////////////////////
    //
    //
    ///////////////////////////////////////////////////////////////////

  }, {
    key: 'off',
    value: function off(event, fct) {

      if (event in this._events === false) return;

      this._events[event].splice(this._events[event].indexOf(fct), 1);
    }

    ///////////////////////////////////////////////////////////////////
    //
    //
    ///////////////////////////////////////////////////////////////////

  }, {
    key: 'emit',
    value: function emit(event /* , args... */) {

      if (this._events[event] === undefined) return;

      var handlers = this._events[event].slice();

      for (var i = 0; i < handlers.length; ++i) {

        var result = handlers[i].apply(this, Array.prototype.slice.call(arguments, 1));

        if (result !== undefined) return result;
      }

      return undefined;
    }
  }]);
  return ToolPanelBase;
}(Autodesk.Viewing.UI.DockingPanel);

exports.default = ToolPanelBase;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "ToolPanelBase.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module), __webpack_require__(31)))

/***/ }),

/***/ 1781:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1414);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(37)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(1414, function() {
			var newContent = __webpack_require__(1414);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1782:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1415);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(37)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(1415, function() {
			var newContent = __webpack_require__(1415);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=30.js.map