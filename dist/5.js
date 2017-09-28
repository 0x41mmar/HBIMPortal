webpackJsonp([5],{

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

/***/ 1079:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(36)();
// imports


// module
exports.push([module.i, ".viewer-app-container {\n  position: relative;\n  overflow: hidden;\n  height: 100%;\n  width: 100%; }\n\n.viewer-container {\n  position: absolute;\n  overflow: hidden;\n  height: 100%;\n  width: 100%; }\n\n.viewer-panels-container {\n  position: absolute;\n  overflow: visible;\n  height: 0;\n  width: 0;\n  left: 0;\n  top: 0; }\n", ""]);

// exports


/***/ }),

/***/ 1110:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(36)();
// imports


// module
exports.push([module.i, ".viewer-app-container {\n  position: relative;\n  overflow: hidden;\n  height: 100%;\n  width: 100%; }\n\n.viewer-container {\n  position: absolute;\n  overflow: hidden;\n  height: 100%;\n  width: 100%; }\n\n.viewer-panels-container {\n  position: absolute;\n  overflow: visible;\n  height: 0;\n  width: 0;\n  left: 0;\n  top: 0; }\n", ""]);

// exports


/***/ }),

/***/ 1145:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Viewer = __webpack_require__(1261);

var _Viewer2 = _interopRequireDefault(_Viewer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Viewer2.default;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1261:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _class, _temp; ////////////////////////////////////////////////////////////////
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
///////////////////////////////////////////////////////////


var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(26);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(1272);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Viewer = (_temp = _class = function (_React$Component) {
  (0, _inherits3.default)(Viewer, _React$Component);

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////


  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////
  function Viewer() {
    (0, _classCallCheck3.default)(this, Viewer);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Viewer.__proto__ || (0, _getPrototypeOf2.default)(Viewer)).call(this));

    _this.height = 0;

    _this.width = 0;
    return _this;
  }

  /////////////////////////////////////////////////////////
  // Component has been mounted so this container div is now created
  // in the DOM and viewer can be instantiated
  //
  /////////////////////////////////////////////////////////


  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////


  (0, _createClass3.default)(Viewer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {

      this.viewer = new Autodesk.Viewing.Private.GuiViewer3D(this.viewerContainer);

      this.panelsContainer = document.createElement('div');

      this.viewer.container.appendChild(this.panelsContainer);

      if (this.props.onViewerCreated) {

        this.props.onViewerCreated(this.viewer);
      }
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {}

    //const panels = props.panels.map((panel) => {
    //
    //  return panel.render()
    //})
    //
    //this.panelsContainer = ReactDOM.render(
    //  <div className="viewer-panels-container">
    //    { panels }
    //  </div>, this.panelsContainer)


    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {

      if (this.viewer && this.viewer.impl) {

        if (this.viewerContainer.offsetHeight !== this.height || this.viewerContainer.offsetWidth !== this.width) {

          this.height = this.viewerContainer.offsetHeight;
          this.width = this.viewerContainer.offsetWidth;

          this.viewer.resize();
        }
      }

      this.props.panels.map(function (panel) {

        panel.emit('update');
      });
    }

    /////////////////////////////////////////////////////////
    // Component will unmount so we can destroy the viewer to avoid
    // memory leaks
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {

      if (this.viewer) {

        if (this.viewer.impl.selector) {

          this.viewer.tearDown();
          this.viewer.finish();
          this.viewer = null;
        }
      }
    }

    /////////////////////////////////////////////////////////
    // Render component, resize the viewer if exists
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var panels = this.props.panels.map(function (panel) {

        return panel.render();
      });

      return _react2.default.createElement(
        'div',
        { className: 'viewer-app-container' },
        _react2.default.createElement('div', { ref: function ref(div) {
            return _this2.viewerContainer = div;
          },
          className: 'viewer-container',
          style: this.props.style
        }),
        _react2.default.createElement(
          'div',
          { className: 'viewer-panels-container' },
          panels
        )
      );
    }
  }]);
  return Viewer;
}(_react2.default.Component), _class.propTypes = {
  panels: _propTypes2.default.array }, _class.defaultProps = {
  panels: [],
  style: {} }, _temp);
exports.default = Viewer;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Viewer.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1272:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1079);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(37)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(1079, function() {
			var newContent = __webpack_require__(1079);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1314:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _class, _temp; //////////////////////////////////////////////////////////////////////////
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


__webpack_require__(1337);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ViewingApplication = (_temp = _class = function (_React$Component) {
  (0, _inherits3.default)(ViewingApplication, _React$Component);

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////


  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////
  function ViewingApplication() {
    (0, _classCallCheck3.default)(this, ViewingApplication);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ViewingApplication.__proto__ || (0, _getPrototypeOf2.default)(ViewingApplication)).call(this));

    _this.height = 0;

    _this.width = 0;
    return _this;
  }

  ///////////////////////////////////////////////////////////////////
  //
  //
  ///////////////////////////////////////////////////////////////////


  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////


  (0, _createClass3.default)(ViewingApplication, [{
    key: 'guid',
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

    /////////////////////////////////////////////////////////
    // Return viewable items
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'getViewables',
    value: function getViewables(doc) {
      var roles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ['3d', '2d'];


      var toArray = function toArray(obj) {

        return obj ? Array.isArray(obj) ? obj : [obj] : [];
      };

      var rootItem = doc.getRootItem();

      var items = [];

      toArray(roles).forEach(function (role) {

        items = [].concat((0, _toConsumableArray3.default)(items), (0, _toConsumableArray3.default)(Autodesk.Viewing.Document.getSubItemsWithProperties(rootItem, { type: 'geometry', role: role }, true)));
      });

      if (!items.length) {

        return null;
      }

      return items;
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'loadDocument',
    value: function loadDocument(urn) {
      var _this2 = this;

      var pathIndex = this.props.pathIndex || 0;

      var paramUrn = !urn.startsWith('urn:') ? 'urn:' + urn : urn;

      this.viewingApp.loadDocument(paramUrn, function (doc) {

        var viewables = _this2.getViewables(doc);

        if (!viewables || viewables.length - 1 < pathIndex) {

          console.error('Viewable path invalid ...');
          return;
        }

        _this2.viewingApp.selectItem(viewables[pathIndex], function (viewer, item) {

          _this2.viewer = viewer;

          if (_this2.props.onViewerCreated) {

            _this2.props.onViewerCreated(_this2.viewer);
          }

          if (_this2.props.onItemLoaded) {

            _this2.props.onItemLoaded(item);
          }
        }, function () {});
      }, function (error) {

        console.log('Error loading document: ' + error);
      });
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {

      this.viewerContainer.id = this.guid();

      this.viewingApp = new Autodesk.Viewing.ViewingApplication(this.viewerContainer.id);

      this.viewingApp.registerViewer(this.viewingApp.k3D, Autodesk.Viewing.Private.GuiViewer3D);

      if (this.props.urn) {

        this.loadDocument(this.props.urn);
      }

      if (this.props.onViewingApplicationCreated) {

        this.props.onViewingApplicationCreated(this.viewingApp);
      }
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {

      if (this.props.urn !== props.urn) {

        this.loadDocument(props.urn);
      }
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {

      if (this.viewer && this.viewer.impl) {

        if (this.viewerContainer.offsetHeight !== this.height || this.viewerContainer.offsetWidth !== this.width) {

          this.height = this.viewerContainer.offsetHeight;
          this.width = this.viewerContainer.offsetWidth;

          this.viewer.resize();
        }
      }

      this.props.panels.map(function (panel) {

        panel.emit('update');
      });
    }

    /////////////////////////////////////////////////////////
    // Component will unmount so we can destroy the viewer to avoid
    // memory leaks
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {

      if (this.viewer) {

        if (this.viewer.impl.selector) {

          this.viewer.tearDown();
          this.viewer.finish();
          this.viewer = null;
        }
      }
    }

    /////////////////////////////////////////////////////////
    // Render component, resize the viewer if exists
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var panels = this.props.panels.map(function (panel) {

        return panel.render();
      });

      return _react2.default.createElement(
        'div',
        { className: 'viewer-app-container' },
        _react2.default.createElement('div', { ref: function ref(div) {
            return _this3.viewerContainer = div;
          },
          className: 'viewer-container',
          style: this.props.style
        }),
        _react2.default.createElement(
          'div',
          { className: 'viewer-panels-container' },
          panels
        )
      );
    }
  }]);
  return ViewingApplication;
}(_react2.default.Component), _class.propTypes = {
  panels: _propTypes2.default.array }, _class.defaultProps = {
  panels: [],
  style: {} }, _temp);
exports.default = ViewingApplication;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "ViewingApplication.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1315:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ViewingApplication = __webpack_require__(1314);

var _ViewingApplication2 = _interopRequireDefault(_ViewingApplication);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _ViewingApplication2.default;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1337:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1110);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(37)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(1110, function() {
			var newContent = __webpack_require__(1110);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1673:
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

var _toConsumableArray2 = __webpack_require__(371);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _assign = __webpack_require__(46);

var _assign2 = _interopRequireDefault(_assign);

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

var _Viewer = __webpack_require__(1315);

var _Viewer2 = _interopRequireDefault(_Viewer);

var _Viewer3 = __webpack_require__(1021);

var _Viewer4 = _interopRequireDefault(_Viewer3);

var _Viewer5 = __webpack_require__(1145);

var _Viewer6 = _interopRequireDefault(_Viewer5);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TestView = function (_React$Component) {
  (0, _inherits3.default)(TestView, _React$Component);

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////
  function TestView(props) {
    (0, _classCallCheck3.default)(this, TestView);

    var _this = (0, _possibleConstructorReturn3.default)(this, (TestView.__proto__ || (0, _getPrototypeOf2.default)(TestView)).call(this, props));

    _this.onViewingApplicationCreated = _this.onViewingApplicationCreated.bind(_this);

    _this.onViewerCreated = _this.onViewerCreated.bind(_this);

    _this.state = {
      urn: null
    };
    return _this;
  }

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////


  (0, _createClass3.default)(TestView, [{
    key: 'assignState',
    value: function assignState(state) {
      var _this2 = this;

      return new _promise2.default(function (resolve) {

        var newState = (0, _assign2.default)({}, _this2.state, state);

        _this2.setState(newState, function () {
          resolve();
        });
      });
    }

    /////////////////////////////////////////////////////////
    // Initialize viewer environment
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'initialize',
    value: function initialize(options) {

      return new _promise2.default(function (resolve, reject) {

        Autodesk.Viewing.Initializer(options, function () {

          resolve();
        }, function (error) {

          reject(error);
        });
      });
    }

    /////////////////////////////////////////////////////////
    // Load a document from URN
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'loadDocument',
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
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'getViewablePath',
    value: function getViewablePath(doc) {
      var pathIdx = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var roles = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ['3d', '2d'];


      var toArray = function toArray(obj) {

        return obj ? Array.isArray(obj) ? obj : [obj] : [];
      };

      var rootItem = doc.getRootItem();

      var items = [];

      toArray(roles).forEach(function (role) {

        items = [].concat((0, _toConsumableArray3.default)(items), (0, _toConsumableArray3.default)(Autodesk.Viewing.Document.getSubItemsWithProperties(rootItem, { type: 'geometry', role: role }, true)));
      });

      if (!items.length || pathIdx > items.length - 1) {

        return null;
      }

      return doc.getViewablePath(items[pathIdx]);
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'componentDidMount',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _ref.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: 'onViewerCreated',


    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(viewer) {
        var viewerEnv, lmvProxy, urn, path;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.initialize({
                  env: 'AutodeskProduction'
                });

              case 2:
                viewerEnv = _context2.sent;


                this.props.setViewerEnv(viewerEnv);

                this.viewer = viewer;

                lmvProxy = 'lmv-proxy-2legged';


                Autodesk.Viewing.endpoint.setEndpointAndApi(window.location.origin + '/' + lmvProxy, 'modelDerivativeV2');

                urn = 'dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6Zm9yZ2UtcmNkYi1nYWxsZXJ5LWRldi9vZmZpY2UucnZ0';

                //const doc = await this.loadDocument(urn)

                //const path = this.getViewablePath(doc)

                viewer.start();

                path = 'resources/models/dev/office/Resource/3D_View/3D/office.svf';


                viewer.loadModel(path);

                //viewer.loadExtension('Autodesk.Viewing.ZoomWindow')

                //this.onSelectionChanged = this.onSelectionChanged.bind(this)
                //
                //viewer.addEventListener(
                //  Autodesk.Viewing.SELECTION_CHANGED_EVENT,
                //  this.onSelectionChanged)
                //
                ////this.material = this.addColorMaterial('clr', 0xf571d6)
                //this.material = this.addTexMaterial('tex', '/resources/img/textures/heatmap.png')

              case 11:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function onViewerCreated(_x3) {
        return _ref2.apply(this, arguments);
      }

      return onViewerCreated;
    }()

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'addColorMaterial',
    value: function addColorMaterial(name, color) {

      var material = new THREE.MeshPhongMaterial({
        color: color
      });

      this.viewer.impl.matman().addMaterial(name, material, true);

      return material;
    }
  }, {
    key: 'addTexMaterial',
    value: function addTexMaterial(name, texture) {

      var tex = THREE.ImageUtils.loadTexture(texture);

      tex.wrapS = THREE.RepeatWrapping;
      tex.wrapT = THREE.RepeatWrapping;
      tex.repeat.set(1, 1);

      var material = new THREE.MeshBasicMaterial({
        map: tex
      });

      tex.needsUpdate = true;

      this.viewer.impl.matman().addMaterial(name, material, true);

      return material;
    }
  }, {
    key: 'setMaterialOverlay',
    value: function setMaterialOverlay(renderProxy, materialName) {

      var meshProxy = new THREE.Mesh(renderProxy.geometry, renderProxy.material);

      meshProxy.matrix.copy(renderProxy.matrixWorld);
      meshProxy.matrixWorldNeedsUpdate = true;
      meshProxy.matrixAutoUpdate = false;
      meshProxy.frustumCulled = false;

      this.viewer.impl.addOverlay(materialName, meshProxy);
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'onSelectionChanged',
    value: function onSelectionChanged(event) {

      return console.log(event);

      if (event.dbIdArray.length) {

        var dbId = event.dbIdArray[0];

        var mesh = this.buildComponentMesh(dbId, this.material);

        this.viewer.impl.scene.add(mesh);
      }

      //console.log(event)
      //
      //event.fragIdsArray.forEach((fragId) => {
      //
      //  const renderProxy = this.viewer.impl.getRenderProxy(
      //    this.viewer.model, fragId)
      //
      //  renderProxy.material = this.material
      //
      //  //this.setMaterialOverlay(renderProxy, 'tex')
      //})

      this.viewer.impl.invalidate(true);
    }

    ////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'onViewingApplicationCreated',
    value: function onViewingApplicationCreated(viewingApp) {

      var lmvProxy = 'lmv-proxy-2legged';

      Autodesk.Viewing.endpoint.setEndpointAndApi(window.location.origin + '/' + lmvProxy, 'modelDerivativeV2');

      this.assignState({
        urn: 'dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6Zm9yZ2UtcmNkYi1nYWxsZXJ5LWRldi9vZmZpY2UucnZ0'
      });
    }

    /////////////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////////////

  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_Viewer6.default, { onViewerCreated: function onViewerCreated(data) {
          return _this3.onViewerCreated(data);
        },
        style: { height: "calc(100vh - 65px)" } });
    }

    /////////////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////////////
    //render() {
    //
    //  const viewStyle = {
    //    height: 'calc(100vh - 65px)'
    //  }
    //
    //  return (
    //    <div className="test" style={viewStyle}>
    //      <ViewingApp
    //        onViewingApplicationCreated={this.onViewingApplicationCreated}
    //        onViewerCreated={this.onViewerCreated}
    //        urn={this.state.urn}
    //      />
    //    </div>
    //  )
    //}

  }]);
  return TestView;
}(_react2.default.Component);

exports.default = TestView;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "TestView.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 934:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(46);

var _assign2 = _interopRequireDefault(_assign);

var _reactRedux = __webpack_require__(68);

var _app = __webpack_require__(225);

var _TestView = __webpack_require__(1673);

var _TestView2 = _interopRequireDefault(_TestView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapDispatchToProps = {
  setViewerEnv: _app.setViewerEnv
};

var mapStateToProps = function mapStateToProps(state) {
  return (0, _assign2.default)({}, state.test, {
    appState: state.app
  });
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_TestView2.default);

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "TestContainer.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 935:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reducer;
// ------------------------------------
// Constants
// ------------------------------------

// ------------------------------------
// Actions
// ------------------------------------

var actions = exports.actions = {};

// ------------------------------------
// Action Handlers
// ------------------------------------
var ACTION_HANDLERS = {};

// ------------------------------------
// Reducer
// ------------------------------------
var initialState = {};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];


  var handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "test.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ })

});
//# sourceMappingURL=5.js.map