webpackJsonp([48],{

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

/***/ 1353:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(1525);

exports.default = 'Viewing.Extension.Transform';

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1524:
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

/***/ 1525:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

var _regenerator = __webpack_require__(216);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(215);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _promise = __webpack_require__(65);

var _promise2 = _interopRequireDefault(_promise);

var _toConsumableArray2 = __webpack_require__(371);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _keys = __webpack_require__(375);

var _keys2 = _interopRequireDefault(_keys);

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

var _ViewingTool = __webpack_require__(1527);

var _ViewingTool2 = _interopRequireDefault(_ViewingTool);

var _Viewer = __webpack_require__(1033);

var _Viewer2 = _interopRequireDefault(_Viewer);

var _ViewingTool3 = __webpack_require__(1526);

var _ViewingTool4 = _interopRequireDefault(_ViewingTool3);

var _Viewer3 = __webpack_require__(1021);

var _Viewer4 = _interopRequireDefault(_Viewer3);

var _Stopwatch = __webpack_require__(1067);

var _Stopwatch2 = _interopRequireDefault(_Stopwatch);

var _easingJs = __webpack_require__(1150);

var _easingJs2 = _interopRequireDefault(_easingJs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/////////////////////////////////////////////////////////////////////
// Viewing.Extension.CSSTVExtension
// by Philippe Leefsma, April 2016
//
/////////////////////////////////////////////////////////////////////
var TransformExtension = function (_ExtensionBase) {
  (0, _inherits3.default)(TransformExtension, _ExtensionBase);

  /////////////////////////////////////////////////////////////////
  // Class constructor
  //
  /////////////////////////////////////////////////////////////////
  function TransformExtension(viewer) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    (0, _classCallCheck3.default)(this, TransformExtension);

    var _this = (0, _possibleConstructorReturn3.default)(this, (TransformExtension.__proto__ || (0, _getPrototypeOf2.default)(TransformExtension)).call(this, viewer, options));

    _this.translateTool = new _ViewingTool2.default(viewer);

    _this.rotateTool = new _ViewingTool4.default(viewer);

    _this.transformedFragIdMap = {};

    _this.translateTool.on('selection', function (selection) {

      var translateSelection = selection ? (0, _assign2.default)({}, selection, {
        type: 'translate'
      }) : null;

      _this.emit('selection', translateSelection);
    });

    _this.translateTool.on('translate', function (data) {

      data.fragIds.forEach(function (fragId) {

        _this.transformedFragIdMap[fragId] = true;
      });

      _this.emit('transform', {
        transform: {
          translation: data.translation
        },
        fragIds: data.fragIds,
        model: data.model,
        dbIds: data.dbIds
      });
    });

    _this.translateTool.on('deactivate', function () {

      _this._txControl.container.classList.remove('active');
      _this._comboCtrl.container.classList.remove('active');

      _this.emit('deactivate');
    });

    _this.rotateTool.on('selection', function (selection) {

      var rotateSelection = selection ? (0, _assign2.default)({}, selection, {
        type: 'rotate'
      }) : null;

      _this.emit('selection', rotateSelection);
    });

    _this.rotateTool.on('rotate', function (data) {

      data.fragIds.forEach(function (fragId) {

        _this.transformedFragIdMap[fragId] = true;
      });

      _this.emit('transform', {
        transform: {
          rotation: data.rotation
        },
        fragIds: data.fragIds,
        model: data.model,
        dbIds: data.dbIds
      });
    });

    _this.rotateTool.on('deactivate', function () {

      _this._rxControl.container.classList.remove('active');
      _this._comboCtrl.container.classList.remove('active');

      _this.emit('deactivate');
    });
    return _this;
  }

  /////////////////////////////////////////////////////////////////
  // Extension Id
  //
  /////////////////////////////////////////////////////////////////


  (0, _createClass3.default)(TransformExtension, [{
    key: 'load',


    /////////////////////////////////////////////////////////////////
    // Load callback
    //
    /////////////////////////////////////////////////////////////////
    value: function load() {
      var _this2 = this;

      this._txControl = _Viewer4.default.createButton('toolbar-translate', 'fa fa-arrows-alt', 'Translate Tool', function () {

        if (_this2.translateTool.active) {

          _this2.translateTool.deactivate();
          _this2._txControl.container.classList.remove('active');
          _this2._comboCtrl.container.classList.remove('active');
        } else {

          _this2.translate();
        }
      });

      this._rxControl = _Viewer4.default.createButton('toolbar-rotate', 'fa fa-refresh', 'Rotate Tool', function () {

        if (_this2.rotateTool.active) {

          _this2.rotateTool.deactivate();
          _this2._rxControl.container.classList.remove('active');
          _this2._comboCtrl.container.classList.remove('active');
        } else {

          _this2.rotate();
        }
      });

      this.parentControl = this._options.parentControl;

      if (!this.parentControl && !this._options.hideControls) {

        var viewerToolbar = this._viewer.getToolbar(true);

        this.parentControl = new Autodesk.Viewing.UI.ControlGroup('transform');

        viewerToolbar.addControl(this.parentControl);
      }

      this._comboCtrl = new Autodesk.Viewing.UI.ComboButton('toolbar-transform');

      this._comboCtrl.setToolTip('Transform Tools');

      this._comboCtrl.icon.style.fontSize = '24px';
      this._comboCtrl.icon.style.transform = 'rotateY(180Deg)';

      this._comboCtrl.icon.className = 'glyphicon glyphicon-wrench';

      this._comboCtrl.addControl(this._txControl);
      this._comboCtrl.addControl(this._rxControl);

      var openCombo = this._comboCtrl.onClick;

      this._comboCtrl.onClick = function (e) {

        if (_this2._comboCtrl.container.classList.contains('active')) {

          _this2.deactivate();
        } else {

          openCombo();
        }
      };

      if (!this._options.hideControls) {

        this.parentControl.addControl(this._comboCtrl);
      }

      console.log('Viewing.Extension.Transform loaded');

      return true;
    }

    /////////////////////////////////////////////////////////////////
    // Unload callback
    //
    /////////////////////////////////////////////////////////////////

  }, {
    key: 'unload',
    value: function unload() {

      this.parentControl.removeControl(this._comboCtrl);

      this.translateTool.deactivate();

      this.rotateTool.deactivate();

      console.log('Viewing.Extension.Transform unloaded');
    }

    /////////////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////////////

  }, {
    key: 'translate',
    value: function translate() {

      this.translateTool.activate();
      this._txControl.container.classList.add('active');

      this.rotateTool.deactivate();
      this._rxControl.container.classList.remove('active');

      this._comboCtrl.container.classList.add('active');
    }

    /////////////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////////////

  }, {
    key: 'rotate',
    value: function rotate() {

      this.rotateTool.activate();
      this._rxControl.container.classList.add('active');

      this.translateTool.deactivate();
      this._txControl.container.classList.remove('active');

      this._comboCtrl.container.classList.add('active');
    }

    /////////////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////////////

  }, {
    key: 'deactivate',
    value: function deactivate() {

      this._txControl.container.classList.remove('active');
      this._rxControl.container.classList.remove('active');

      this._comboCtrl.container.classList.remove('active');

      this.translateTool.deactivate();
      this.rotateTool.deactivate();
    }

    /////////////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////////////

  }, {
    key: 'setFullTransform',
    value: function setFullTransform(fullTransform) {

      this.translateTool.fullTransform = fullTransform;

      this.rotateTool.fullTransform = fullTransform;
    }

    /////////////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////////////

  }, {
    key: 'pickPosition',
    value: function pickPosition() {

      this.translateTool.onPick();
    }

    /////////////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////////////

  }, {
    key: 'clearSelection',
    value: function clearSelection() {

      this.translateTool.clearSelection();

      this.rotateTool.clearSelection();
    }

    /////////////////////////////////////////////////////////////////
    //
    //  From viewer.getState:
    //  Allow extensions to inject their state data
    //
    //  for (var extensionName in viewer.loadedExtensions) {
    //    viewer.loadedExtensions[extensionName].getState(
    //      viewerState);
    //  }
    /////////////////////////////////////////////////////////////////

  }, {
    key: 'getState',
    value: function getState(viewerState) {

      this.currentExplodeScale = this.currentExplodeScale || this._viewer.getExplodeScale();

      viewerState.explodeScale = this.currentExplodeScale;

      viewerState.transforms = {};

      for (var fragId in this.transformedFragIdMap) {

        var fragProxy = this._viewer.impl.getFragmentProxy(this._viewer.model, fragId);

        fragProxy.getAnimTransform();

        viewerState.transforms[fragId] = {
          quaternion: fragProxy.quaternion,
          position: fragProxy.position
        };
      }
    }

    /////////////////////////////////////////////////////////////////
    //
    //    From viewer.restoreState:
    //    Allow extensions to restore their data
    //
    //    for (var extensionName in viewer.loadedExtensions) {
    //      viewer.loadedExtensions[extensionName].restoreState(
    //        viewerState, immediate);
    //    }
    /////////////////////////////////////////////////////////////////

  }, {
    key: 'restoreState',
    value: function restoreState(viewerState, immediate) {
      var _this3 = this;

      this.translateTool.clearSelection();

      this.rotateTool.clearSelection();

      if (viewerState.transforms) {

        //this.restoreTransform(viewerState)

        var period = 1.8;

        var easingFunc = function easingFunc(t) {
          //b: begging value, c: change in value, d: duration
          return _easingJs2.default.easeInOutExpo(t, 0, 1, period * 0.7);
        };

        this.animateTransform(viewerState, easingFunc, period).then(function () {

          _this3.currentExplodeScale = viewerState.explodeScale;
        });

        this.transformedFragIdMap = (0, _assign2.default)({}, viewerState.transforms);

        this.viewer.impl.sceneUpdated(true);
      }
    }

    /////////////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////////////

  }, {
    key: 'restoreTransform',
    value: function restoreTransform(targetState) {
      var _this4 = this;

      var currentFragIds = (0, _keys2.default)(this.transformedFragIdMap);

      var targetFragIds = (0, _keys2.default)(targetState.transforms);

      var fullFragIds = [].concat((0, _toConsumableArray3.default)(currentFragIds), (0, _toConsumableArray3.default)(targetFragIds));

      fullFragIds.forEach(function (fragId) {

        var transform = targetState.transforms[fragId] || {
          quaternion: { _x: 0, _y: 0, _z: 0, _w: 1 },
          position: { x: 0, y: 0, z: 0 }
        };

        var fragProxy = viewer.impl.getFragmentProxy(_this4._viewer.model, fragId);

        fragProxy.getAnimTransform();

        fragProxy.position.x = transform.position.x;
        fragProxy.position.y = transform.position.y;
        fragProxy.position.z = transform.position.z;

        fragProxy.quaternion._x = transform.quaternion._x;
        fragProxy.quaternion._y = transform.quaternion._y;
        fragProxy.quaternion._z = transform.quaternion._z;
        fragProxy.quaternion._w = transform.quaternion._w;

        fragProxy.updateAnimTransform();
      });
    }

    /////////////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////////////

  }, {
    key: 'animateTransform',
    value: function animateTransform(targetState, easing) {
      var _this5 = this;

      var period = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2.0;


      return new _promise2.default(function () {
        var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(resolve, reject) {
          var viewer, currentFragIds, targetFragIds, fullFragIds, fragProxyTasks, fragProxies, animationTasks, scale, targetScale, scaleStep, animationId, elapsed, stopwatch, animateTransformStep;
          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  viewer = _this5._viewer;
                  currentFragIds = (0, _keys2.default)(_this5.transformedFragIdMap);
                  targetFragIds = (0, _keys2.default)(targetState.transforms);
                  fullFragIds = [].concat((0, _toConsumableArray3.default)(currentFragIds), (0, _toConsumableArray3.default)(targetFragIds));
                  fragProxyTasks = fullFragIds.map(function (fragId) {

                    var fragProxy = viewer.impl.getFragmentProxy(viewer.model, fragId);

                    fragProxy.getAnimTransform();

                    var targetTransform = targetState.transforms[fragId] || {
                      quaternion: { _x: 0, _y: 0, _z: 0, _w: 1 },
                      position: { x: 0, y: 0, z: 0 }
                    };

                    fragProxy.step = {

                      dx: (targetTransform.position.x - fragProxy.position.x) / period,
                      dy: (targetTransform.position.y - fragProxy.position.y) / period,
                      dz: (targetTransform.position.z - fragProxy.position.z) / period,

                      dQx: (targetTransform.quaternion._x - fragProxy.quaternion._x) / period,
                      dQy: (targetTransform.quaternion._y - fragProxy.quaternion._y) / period,
                      dQz: (targetTransform.quaternion._z - fragProxy.quaternion._z) / period,
                      dQw: (targetTransform.quaternion._w - fragProxy.quaternion._w) / period
                    };

                    fragProxy.initialTransform = {
                      quaternion: {
                        _x: fragProxy.quaternion._x,
                        _y: fragProxy.quaternion._y,
                        _z: fragProxy.quaternion._z,
                        _w: fragProxy.quaternion._w
                      },
                      position: {
                        x: fragProxy.position.x,
                        y: fragProxy.position.y,
                        z: fragProxy.position.z
                      }
                    };

                    fragProxy.targetTransform = targetTransform;

                    return fragProxy;
                  });
                  _context.next = 7;
                  return _promise2.default.all(fragProxyTasks);

                case 7:
                  fragProxies = _context.sent;


                  // Create all fragment animation tasks
                  animationTasks = fragProxies.map(function (fragProxy) {

                    return {

                      step: function step(dt) {

                        //fragProxy.quaternion.slerp(
                        //  fragProxy.transform.quaternion,
                        //  dt/tStep)

                        fragProxy.quaternion._x += fragProxy.step.dQx * dt;
                        fragProxy.quaternion._y += fragProxy.step.dQy * dt;
                        fragProxy.quaternion._z += fragProxy.step.dQz * dt;
                        fragProxy.quaternion._w += fragProxy.step.dQw * dt;

                        fragProxy.position.x += fragProxy.step.dx * dt;
                        fragProxy.position.y += fragProxy.step.dy * dt;
                        fragProxy.position.z += fragProxy.step.dz * dt;

                        fragProxy.updateAnimTransform();
                      },

                      ease: function ease(t) {

                        //fragProxy.quaternion.slerp(
                        //  fragProxy.transform.quaternion,
                        //  dt/tStep)

                        var eased = easing(t / period);

                        var _targetQuat = fragProxy.targetTransform.quaternion;
                        var _initQuat = fragProxy.initialTransform.quaternion;

                        var initQuat = new THREE.Quaternion(_initQuat._x, _initQuat._y, _initQuat._z, _initQuat._w);

                        var targetQuat = new THREE.Quaternion(_targetQuat._x, _targetQuat._y, _targetQuat._z, _targetQuat._w);

                        initQuat.slerp(targetQuat, eased);

                        fragProxy.quaternion._x = initQuat.x;
                        fragProxy.quaternion._y = initQuat.y;
                        fragProxy.quaternion._z = initQuat.z;
                        fragProxy.quaternion._w = initQuat.w;

                        //fragProxy.quaternion._x = eased * targetQuat._x + (1 - eased) * initQuat._x
                        //fragProxy.quaternion._y = eased * targetQuat._y + (1 - eased) * initQuat._y
                        //fragProxy.quaternion._z = eased * targetQuat._z + (1 - eased) * initQuat._z
                        //fragProxy.quaternion._w = eased * targetQuat._z + (1 - eased) * initQuat._z

                        var targetPos = fragProxy.targetTransform.position;
                        var initPos = fragProxy.initialTransform.position;

                        fragProxy.position.x = eased * targetPos.x + (1 - eased) * initPos.x;
                        fragProxy.position.y = eased * targetPos.y + (1 - eased) * initPos.y;
                        fragProxy.position.z = eased * targetPos.z + (1 - eased) * initPos.z;

                        fragProxy.updateAnimTransform();
                      },

                      finalStep: function finalStep() {

                        fragProxy.quaternion._x = fragProxy.targetTransform.quaternion._x;
                        fragProxy.quaternion._y = fragProxy.targetTransform.quaternion._y;
                        fragProxy.quaternion._z = fragProxy.targetTransform.quaternion._z;
                        fragProxy.quaternion._w = fragProxy.targetTransform.quaternion._w;

                        fragProxy.position.copy(fragProxy.targetTransform.position);

                        fragProxy.updateAnimTransform();
                      }
                    };
                  });

                  // create explode animation task

                  scale = parseFloat(_this5.currentExplodeScale);
                  targetScale = parseFloat(targetState.explodeScale);


                  if (targetScale != scale) {
                    scaleStep = (targetScale - scale) / period;


                    animationTasks.push({

                      step: function step(dt) {

                        scale += scaleStep * dt;

                        _Viewer4.default.selectiveExplode(viewer, scale, fullFragIds);
                      },

                      ease: function ease(t) {

                        var eased = easing(t / period);

                        var easedScale = scale + eased * (targetScale - scale);

                        _Viewer4.default.selectiveExplode(viewer, easedScale, fullFragIds);
                      },

                      finalStep: function finalStep() {

                        _Viewer4.default.selectiveExplode(viewer, targetScale, fullFragIds);

                        viewer.explodeSlider.value = targetScale;
                      }
                    });
                  }

                  animationId = 0;
                  elapsed = 0;
                  stopwatch = new _Stopwatch2.default();

                  animateTransformStep = function animateTransformStep() {

                    var dt = stopwatch.getElapsedMs() * 0.001;

                    elapsed += dt;

                    if (elapsed < period) {

                      animationTasks.forEach(function (task) {

                        task.ease(elapsed);
                      });

                      animationId = requestAnimationFrame(animateTransformStep);
                    } else {

                      //end of animation
                      animationTasks.forEach(function (task) {

                        task.finalStep();
                      });

                      cancelAnimationFrame(animationId);

                      viewer.autocam.shotParams.duration = 1.0;
                    }

                    viewer.impl.sceneUpdated(true);

                    resolve();
                  };

                  viewer.autocam.shotParams.duration = period;

                  animationId = requestAnimationFrame(animateTransformStep);

                case 18:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this5);
        }));

        return function (_x3, _x4) {
          return _ref.apply(this, arguments);
        };
      }());
    }
  }], [{
    key: 'ExtensionId',
    get: function get() {

      return 'Viewing.Extension.Transform';
    }
  }]);
  return TransformExtension;
}(_Viewer2.default);

Autodesk.Viewing.theExtensionManager.registerExtension(TransformExtension.ExtensionId, TransformExtension);

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Viewing.Extension.Transform.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1526:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _sign = __webpack_require__(1132);

var _sign2 = _interopRequireDefault(_sign);

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

var _EventsEmitter3 = __webpack_require__(372);

var _EventsEmitter4 = _interopRequireDefault(_EventsEmitter3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RotateTool = function (_EventsEmitter) {
  (0, _inherits3.default)(RotateTool, _EventsEmitter);

  /////////////////////////////////////////////////////////////////
  // Class constructor
  //
  /////////////////////////////////////////////////////////////////
  function RotateTool(viewer) {
    (0, _classCallCheck3.default)(this, RotateTool);

    var _this = (0, _possibleConstructorReturn3.default)(this, (RotateTool.__proto__ || (0, _getPrototypeOf2.default)(RotateTool)).call(this));

    _this.keys = {};

    _this.active = false;

    _this.viewer = viewer;

    _this.fullTransform = false;

    _this.viewer.toolController.registerTool(_this);

    _this.onAggregateSelectionChangedHandler = function (e) {

      _this.onAggregateSelectionChanged(e);
    };
    return _this;
  }

  /////////////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////////////


  (0, _createClass3.default)(RotateTool, [{
    key: 'getNames',
    value: function getNames() {

      return ['Viewing.Tool.Rotate'];
    }

    /////////////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////////////

  }, {
    key: 'getName',
    value: function getName() {

      return 'Viewing.Tool.Rotate';
    }

    ///////////////////////////////////////////////////////////////////
    // activate tool
    //
    ///////////////////////////////////////////////////////////////////

  }, {
    key: 'activate',
    value: function activate() {

      if (!this.active) {

        this.active = true;

        this.viewer.toolController.activateTool(this.getName());

        this.viewer.addEventListener(Autodesk.Viewing.AGGREGATE_SELECTION_CHANGED_EVENT, this.onAggregateSelectionChangedHandler);

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

        if (this.rotateControl) {

          this.rotateControl.remove();
          this.rotateControl = null;
        }

        this.viewer.removeEventListener(Autodesk.Viewing.AGGREGATE_SELECTION_CHANGED_EVENT, this.onAggregateSelectionChangedHandler);

        this.emit('deactivate');
      }
    }

    ///////////////////////////////////////////////////////////////////////////
    // Component Selection Handler
    // (use Autodesk.Viewing.AGGREGATE_SELECTION_CHANGED_EVENT instead of
    //  Autodesk.Viewing.SELECTION_CHANGED_EVENT - deprecated )
    //
    ///////////////////////////////////////////////////////////////////////////

  }, {
    key: 'onAggregateSelectionChanged',
    value: function onAggregateSelectionChanged(event) {

      if (this.rotateControl && this.rotateControl.engaged) {

        this.rotateControl.engaged = false;

        this.viewer.select(this.selection.dbIdArray);

        return;
      }

      if (event.selections.length) {

        var selection = event.selections[0];

        this.selection = selection;

        if (this.fullTransform) {

          this.selection.fragIdsArray = [];

          var fragCount = selection.model.getFragmentList().fragments.fragId2dbId.length;

          for (var fragId = 0; fragId < fragCount; ++fragId) {

            this.selection.fragIdsArray.push(fragId);
          }

          this.selection.dbIdArray = [];

          var instanceTree = selection.model.getData().instanceTree;

          var rootId = instanceTree.getRootId();

          this.selection.dbIdArray.push(rootId);
        }

        this.drawControl();

        this.viewer.fitToView(this.selection.dbIdArray);

        this.emit('selection', selection);
      } else {

        this.clearSelection();
      }
    }

    ///////////////////////////////////////////////////////////////////////////
    // Selection cleared
    //
    ///////////////////////////////////////////////////////////////////////////

  }, {
    key: 'clearSelection',
    value: function clearSelection() {

      this.selection = null;

      if (this.rotateControl) {

        this.rotateControl.remove();

        this.rotateControl = null;

        this.viewer.impl.sceneUpdated(true);
      }

      this.emit('selection', null);
    }

    ///////////////////////////////////////////////////////////////////////////
    // Draw rotate control
    //
    ///////////////////////////////////////////////////////////////////////////

  }, {
    key: 'drawControl',
    value: function drawControl() {
      var _this2 = this;

      var bBox = this.getWorldBoundingBox(this.selection.fragIdsArray, this.selection.model.getFragmentList());

      this.center = new THREE.Vector3((bBox.min.x + bBox.max.x) / 2, (bBox.min.y + bBox.max.y) / 2, (bBox.min.z + bBox.max.z) / 2);

      var size = Math.max(bBox.max.x - bBox.min.x, bBox.max.y - bBox.min.y, bBox.max.z - bBox.min.z) * 0.8;

      if (this.rotateControl) {

        this.rotateControl.remove();
      }

      this.rotateControl = new RotateControl(this.viewer, this.center, size);

      this.rotateControl.on('rotate', function (data) {

        _this2.rotateFragments(_this2.selection.model, _this2.selection.fragIdsArray, data.axis, data.angle, _this2.center);

        _this2.viewer.impl.sceneUpdated(true);
      });
    }

    ///////////////////////////////////////////////////////////////////////////
    //
    //
    ///////////////////////////////////////////////////////////////////////////

  }, {
    key: 'handleButtonDown',
    value: function handleButtonDown(event, button) {

      if (this.rotateControl) {

        if (this.rotateControl.onPointerDown(event)) {

          return true;
        }
      }

      if (button === 0 && this.keys.Control) {

        this.isDragging = true;

        this.mousePos = {
          x: event.clientX,
          y: event.clientY
        };

        return true;
      }

      return false;
    }

    ///////////////////////////////////////////////////////////////////////////
    //
    //
    ///////////////////////////////////////////////////////////////////////////

  }, {
    key: 'handleButtonUp',
    value: function handleButtonUp(event, button) {

      if (this.rotateControl) {

        this.rotateControl.onPointerUp(event);
      }

      if (button === 0) {

        this.isDragging = false;
      }

      return false;
    }

    ///////////////////////////////////////////////////////////////////////////
    //
    //
    ///////////////////////////////////////////////////////////////////////////

  }, {
    key: 'handleMouseMove',
    value: function handleMouseMove(event) {

      if (this.rotateControl) {

        this.rotateControl.onPointerHover(event);
      }

      if (this.isDragging) {

        if (this.selection) {

          var offset = {
            x: this.mousePos.x - event.clientX,
            y: event.clientY - this.mousePos.y
          };

          this.mousePos = {
            x: event.clientX,
            y: event.clientY
          };

          var angle = Math.sqrt(offset.x * offset.x + offset.y * offset.y);

          var sidewaysDirection = new THREE.Vector3();
          var moveDirection = new THREE.Vector3();
          var eyeDirection = new THREE.Vector3();
          var upDirection = new THREE.Vector3();
          var camera = this.viewer.getCamera();
          var axis = new THREE.Vector3();
          var eye = new THREE.Vector3();

          eye.copy(camera.position).sub(camera.target);

          eyeDirection.copy(eye).normalize();

          upDirection.copy(camera.up).normalize();

          sidewaysDirection.crossVectors(upDirection, eyeDirection).normalize();

          upDirection.setLength(offset.y);

          sidewaysDirection.setLength(offset.x);

          moveDirection.copy(upDirection.add(sidewaysDirection));

          axis.crossVectors(moveDirection, eye).normalize();

          this.rotateFragments(this.selection.model, this.selection.fragIdsArray, axis, angle * Math.PI / 180, this.center);

          this.viewer.impl.sceneUpdated(true);
        }

        return true;
      }

      return false;
    }

    ///////////////////////////////////////////////////////////////////////////
    //
    //
    ///////////////////////////////////////////////////////////////////////////

  }, {
    key: 'handleKeyDown',
    value: function handleKeyDown(event, keyCode) {

      this.keys[event.key] = true;

      if (keyCode === 27) {
        //ESC

        this.deactivate();
      }

      return false;
    }

    ///////////////////////////////////////////////////////////////////////////
    //
    //
    ///////////////////////////////////////////////////////////////////////////

  }, {
    key: 'handleKeyUp',
    value: function handleKeyUp(event, keyCode) {

      this.keys[event.key] = false;

      return false;
    }

    ///////////////////////////////////////////////////////////////////////////
    // Rotate selected fragments
    //
    ///////////////////////////////////////////////////////////////////////////

  }, {
    key: 'rotateFragments',
    value: function rotateFragments(model, fragIdsArray, axis, angle, center) {
      var _this3 = this;

      var quaternion = new THREE.Quaternion();

      quaternion.setFromAxisAngle(axis, angle);

      fragIdsArray.forEach(function (fragId, idx) {

        var fragProxy = _this3.viewer.impl.getFragmentProxy(model, fragId);

        fragProxy.getAnimTransform();

        var position = new THREE.Vector3(fragProxy.position.x - center.x, fragProxy.position.y - center.y, fragProxy.position.z - center.z);

        position.applyQuaternion(quaternion);

        position.add(center);

        fragProxy.position = position;

        fragProxy.quaternion.multiplyQuaternions(quaternion, fragProxy.quaternion);

        if (idx === 0) {

          var euler = new THREE.Euler();

          euler.setFromQuaternion(fragProxy.quaternion, 0);

          _this3.emit('rotate', {
            dbIds: _this3.selection.dbIdArray,
            fragIds: fragIdsArray,
            rotation: euler,
            model: model
          });
        }

        fragProxy.updateAnimTransform();
      });
    }

    ///////////////////////////////////////////////////////////////////////////
    // returns bounding box as it appears in the viewer
    // (transformations could be applied)
    //
    ///////////////////////////////////////////////////////////////////////////

  }, {
    key: 'getWorldBoundingBox',
    value: function getWorldBoundingBox(fragIds, fragList) {

      var fragbBox = new THREE.Box3();
      var nodebBox = new THREE.Box3();

      fragIds.forEach(function (fragId) {

        fragList.getWorldBounds(fragId, fragbBox);
        nodebBox.union(fragbBox);
      });

      return nodebBox;
    }
  }]);
  return RotateTool;
}(_EventsEmitter4.default);

///////////////////////////////////////////////////////////////////////////////
// RotateControl Class
//
///////////////////////////////////////////////////////////////////////////////


exports.default = RotateTool;

var RotateControl = function (_EventsEmitter2) {
  (0, _inherits3.default)(RotateControl, _EventsEmitter2);

  function RotateControl(viewer, center, size) {
    (0, _classCallCheck3.default)(this, RotateControl);

    var _this4 = (0, _possibleConstructorReturn3.default)(this, (RotateControl.__proto__ || (0, _getPrototypeOf2.default)(RotateControl)).call(this));

    _this4.engaged = false;

    _this4.overlayScene = 'rotateControlScene';
    _this4.domElement = viewer.impl.canvas;
    _this4.camera = viewer.impl.camera;
    _this4.viewer = viewer;
    _this4.center = center;
    _this4.size = size;
    _this4.gizmos = [];

    _this4.viewer.impl.createOverlayScene(_this4.overlayScene);

    _this4.createAxis(center, new THREE.Vector3(1, 0, 0), size * 0.85, 0xFF0000);

    _this4.createAxis(center, new THREE.Vector3(0, 1, 0), size * 0.85, 0x00FF00);

    _this4.createAxis(center, new THREE.Vector3(0, 0, 1), size * 0.85, 0x0000FF);

    // World UP = Y

    if (_this4.camera.worldup.y) {

      _this4.gizmos.push(_this4.createGizmo(center, new THREE.Euler(0, Math.PI / 2, 0), size * 0.0045, size * 0.8, 0xFF0000, Math.PI, new THREE.Vector3(1, 0, 0)));

      _this4.gizmos.push(_this4.createGizmo(center, new THREE.Euler(Math.PI / 2, 0, 0), size * 0.0045, size * 0.8, 0x00FF00, 2 * Math.PI, new THREE.Vector3(0, 1, 0)));

      _this4.gizmos.push(_this4.createGizmo(center, new THREE.Euler(0, 0, 0), size * 0.0045, size * 0.8, 0x0000FF, Math.PI, new THREE.Vector3(0, 0, 1)));
    } else {

      // World UP = Z

      _this4.gizmos.push(_this4.createGizmo(center, new THREE.Euler(Math.PI / 2, Math.PI / 2, 0), size * 0.0045, size * 0.8, 0xFF0000, Math.PI, new THREE.Vector3(1, 0, 0)));

      _this4.gizmos.push(_this4.createGizmo(center, new THREE.Euler(Math.PI / 2, 0, 0), size * 0.0045, size * 0.8, 0x00FF00, Math.PI, new THREE.Vector3(0, 1, 0)));

      _this4.gizmos.push(_this4.createGizmo(center, new THREE.Euler(0, 0, 0), size * 0.0045, size * 0.8, 0x0000FF, 2 * Math.PI, new THREE.Vector3(0, 0, 1)));
    }

    _this4.picker = _this4.createSphere(size * 0.02);

    var material = new THREE.LineBasicMaterial({
      color: 0xFFFF00,
      linewidth: 1,
      depthTest: false,
      depthWrite: false,
      transparent: true
    });

    _this4.angleLine = _this4.createLine(_this4.center, _this4.center, material);

    viewer.impl.sceneUpdated(true);
    return _this4;
  }

  ///////////////////////////////////////////////////////////////////////////
  // Draw a line
  //
  ///////////////////////////////////////////////////////////////////////////


  (0, _createClass3.default)(RotateControl, [{
    key: 'createLine',
    value: function createLine(start, end, material) {

      var geometry = new THREE.Geometry();

      geometry.vertices.push(new THREE.Vector3(start.x, start.y, start.z));

      geometry.vertices.push(new THREE.Vector3(end.x, end.y, end.z));

      var line = new THREE.Line(geometry, material);

      this.viewer.impl.addOverlay(this.overlayScene, line);

      return line;
    }

    ///////////////////////////////////////////////////////////////////////////
    // Draw a cone
    //
    ///////////////////////////////////////////////////////////////////////////

  }, {
    key: 'createCone',
    value: function createCone(start, dir, length, material) {

      dir.normalize();

      var end = {
        x: start.x + dir.x * length,
        y: start.y + dir.y * length,
        z: start.z + dir.z * length
      };

      var orientation = new THREE.Matrix4();

      orientation.lookAt(start, end, new THREE.Object3D().up);

      var matrix = new THREE.Matrix4();

      matrix.set(1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 1);

      orientation.multiply(matrix);

      var geometry = new THREE.CylinderGeometry(0, length * 0.2, length, 128, 1);

      var cone = new THREE.Mesh(geometry, material);

      cone.applyMatrix(orientation);

      cone.position.x = start.x + dir.x * length / 2;
      cone.position.y = start.y + dir.y * length / 2;
      cone.position.z = start.z + dir.z * length / 2;

      this.viewer.impl.addOverlay(this.overlayScene, cone);

      return cone;
    }

    ///////////////////////////////////////////////////////////////////////////
    // Draw one axis
    //
    ///////////////////////////////////////////////////////////////////////////

  }, {
    key: 'createAxis',
    value: function createAxis(start, dir, size, color) {

      var end = {
        x: start.x + dir.x * size,
        y: start.y + dir.y * size,
        z: start.z + dir.z * size
      };

      var material = new THREE.LineBasicMaterial({
        color: color,
        linewidth: 3,
        depthTest: false,
        depthWrite: false,
        transparent: true
      });

      this.createLine(start, end, material);

      this.createCone(end, dir, size * 0.1, material);
    }

    ///////////////////////////////////////////////////////////////////////////
    // Draw a rotate gizmo
    //
    ///////////////////////////////////////////////////////////////////////////

  }, {
    key: 'createGizmo',
    value: function createGizmo(center, euler, size, radius, color, range, axis) {

      var material = new GizmoMaterial({
        color: color
      });

      var subMaterial = new GizmoMaterial({
        color: color
      });

      var torusGizmo = new THREE.Mesh(new THREE.TorusGeometry(radius, size, 64, 64, range), material);

      var subTorus = new THREE.Mesh(new THREE.TorusGeometry(radius, size, 64, 64, 2 * Math.PI), subMaterial);

      subTorus.material.highlight(true);

      var transform = new THREE.Matrix4();

      var q = new THREE.Quaternion();

      q.setFromEuler(euler);

      var s = new THREE.Vector3(1, 1, 1);

      transform.compose(center, q, s);

      torusGizmo.applyMatrix(transform);

      subTorus.applyMatrix(transform);

      var plane = this.createBox(this.size * 100, this.size * 100, 0.01);

      plane.applyMatrix(transform);

      subTorus.visible = false;

      this.viewer.impl.addOverlay(this.overlayScene, torusGizmo);

      this.viewer.impl.addOverlay(this.overlayScene, subTorus);

      torusGizmo.subGizmo = subTorus;
      torusGizmo.plane = plane;
      torusGizmo.axis = axis;

      return torusGizmo;
    }

    ///////////////////////////////////////////////////////////////////////////
    // Draw a box
    //
    ///////////////////////////////////////////////////////////////////////////

  }, {
    key: 'createBox',
    value: function createBox(w, h, d) {

      var material = new GizmoMaterial({
        color: 0x000000
      });

      var geometry = new THREE.BoxGeometry(w, h, d);

      var box = new THREE.Mesh(geometry, material);

      box.visible = false;

      this.viewer.impl.addOverlay(this.overlayScene, box);

      return box;
    }

    ///////////////////////////////////////////////////////////////////////////
    // Draw a sphere
    //
    ///////////////////////////////////////////////////////////////////////////

  }, {
    key: 'createSphere',
    value: function createSphere(radius) {

      var material = new GizmoMaterial({
        color: 0xFFFF00
      });

      var geometry = new THREE.SphereGeometry(radius, 32, 32);

      var sphere = new THREE.Mesh(geometry, material);

      sphere.visible = false;

      this.viewer.impl.addOverlay(this.overlayScene, sphere);

      return sphere;
    }

    ///////////////////////////////////////////////////////////////////////////
    // Creates Raycatser object from the pointer
    //
    ///////////////////////////////////////////////////////////////////////////

  }, {
    key: 'pointerToRaycaster',
    value: function pointerToRaycaster(pointer) {

      var pointerVector = new THREE.Vector3();
      var pointerDir = new THREE.Vector3();
      var ray = new THREE.Raycaster();

      var rect = this.domElement.getBoundingClientRect();

      var x = (pointer.clientX - rect.left) / rect.width * 2 - 1;
      var y = -((pointer.clientY - rect.top) / rect.height) * 2 + 1;

      if (this.camera.isPerspective) {

        pointerVector.set(x, y, 0.5);

        pointerVector.unproject(this.camera);

        ray.set(this.camera.position, pointerVector.sub(this.camera.position).normalize());
      } else {

        pointerVector.set(x, y, -1);

        pointerVector.unproject(this.camera);

        pointerDir.set(0, 0, -1);

        ray.set(pointerVector, pointerDir.transformDirection(this.camera.matrixWorld));
      }

      return ray;
    }

    ///////////////////////////////////////////////////////////////////////////
    //
    //
    ///////////////////////////////////////////////////////////////////////////

  }, {
    key: 'onPointerDown',
    value: function onPointerDown(event) {

      var pointer = event.pointers ? event.pointers[0] : event;

      if (pointer.button === 0) {

        var ray = this.pointerToRaycaster(pointer);

        var intersectResults = ray.intersectObjects(this.gizmos, true);

        if (intersectResults.length) {

          this.gizmos.forEach(function (gizmo) {

            gizmo.visible = false;
          });

          this.selectedGizmo = intersectResults[0].object;

          this.selectedGizmo.subGizmo.visible = true;

          this.picker.position.copy(intersectResults[0].point);

          this.angleLine.geometry.vertices[1].copy(intersectResults[0].point);

          this.lastDir = intersectResults[0].point.sub(this.center).normalize();

          this.angleLine.geometry.verticesNeedUpdate = true;

          this.angleLine.visible = true;

          this.picker.visible = true;
        } else {

          this.picker.visible = false;
        }

        this.engaged = this.picker.visible;

        this.viewer.impl.sceneUpdated(true);
      }

      return this.picker.visible;
    }

    ///////////////////////////////////////////////////////////////////////////
    //
    //
    ///////////////////////////////////////////////////////////////////////////

  }, {
    key: 'onPointerHover',
    value: function onPointerHover(event) {

      var pointer = event.pointers ? event.pointers[0] : event;

      if (this.engaged) {

        var ray = this.pointerToRaycaster(pointer);

        var intersectResults = ray.intersectObjects([this.selectedGizmo.plane], true);

        if (intersectResults.length) {

          var intersectPoint = intersectResults[0].point;

          var dir = intersectPoint.sub(this.center).normalize();

          var cross = new THREE.Vector3();

          cross.crossVectors(this.lastDir, dir);

          var sign = (0, _sign2.default)(cross.dot(this.selectedGizmo.axis));

          this.emit('rotate', {
            angle: sign * dir.angleTo(this.lastDir),
            axis: this.selectedGizmo.axis
          });

          this.lastDir = dir;

          var pickerPoint = new THREE.Vector3(this.center.x + dir.x * this.size * 0.8, this.center.y + dir.y * this.size * 0.8, this.center.z + dir.z * this.size * 0.8);

          this.picker.position.copy(pickerPoint);

          this.angleLine.geometry.vertices[1].copy(pickerPoint);
        }

        this.angleLine.visible = true;

        this.angleLine.geometry.verticesNeedUpdate = true;
      } else {

        this.angleLine.visible = false;

        var ray = this.pointerToRaycaster(pointer);

        var intersectResults = ray.intersectObjects(this.gizmos, true);

        if (intersectResults.length) {

          this.picker.position.set(intersectResults[0].point.x, intersectResults[0].point.y, intersectResults[0].point.z);

          this.picker.visible = true;
        } else {

          this.picker.visible = false;
        }
      }

      this.viewer.impl.sceneUpdated(true);
    }

    ///////////////////////////////////////////////////////////////////////////
    //
    //
    ///////////////////////////////////////////////////////////////////////////

  }, {
    key: 'onPointerUp',
    value: function onPointerUp(event) {
      var _this5 = this;

      this.angleLine.visible = false;

      this.picker.visible = false;

      this.gizmos.forEach(function (gizmo) {

        gizmo.visible = true;
        gizmo.subGizmo.visible = false;
      });

      this.viewer.impl.sceneUpdated(true);

      setTimeout(function () {
        _this5.engaged = false;
      }, 100);
    }

    ///////////////////////////////////////////////////////////////////////////
    //
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
    //
    //
    ///////////////////////////////////////////////////////////////////////////

  }, {
    key: 'projectOntoPlane',
    value: function projectOntoPlane(worldPoint, normal) {

      var dist = normal.dot(worldPoint);

      return new THREE.Vector3(worldPoint.x - dist * normal.x, worldPoint.y - dist * normal.y, worldPoint.z - dist * normal.z);
    }

    ///////////////////////////////////////////////////////////////////////////
    //
    //
    ///////////////////////////////////////////////////////////////////////////

  }, {
    key: 'remove',
    value: function remove() {

      this.viewer.impl.removeOverlayScene(this.overlayScene);
    }
  }]);
  return RotateControl;
}(_EventsEmitter4.default);

///////////////////////////////////////////////////////////////////////////////
// Highlightable Gizmo Material
//
///////////////////////////////////////////////////////////////////////////////


var GizmoMaterial = function (_THREE$MeshBasicMater) {
  (0, _inherits3.default)(GizmoMaterial, _THREE$MeshBasicMater);

  function GizmoMaterial(parameters) {
    (0, _classCallCheck3.default)(this, GizmoMaterial);

    var _this6 = (0, _possibleConstructorReturn3.default)(this, (GizmoMaterial.__proto__ || (0, _getPrototypeOf2.default)(GizmoMaterial)).call(this));

    _this6.setValues(parameters);

    _this6.colorInit = _this6.color.clone();
    _this6.opacityInit = _this6.opacity;
    _this6.side = THREE.FrontSide;
    _this6.depthWrite = false;
    _this6.transparent = true;
    _this6.depthTest = false;
    return _this6;
  }

  ///////////////////////////////////////////////////////////////////////////
  //
  //
  ///////////////////////////////////////////////////////////////////////////


  (0, _createClass3.default)(GizmoMaterial, [{
    key: 'highlight',
    value: function highlight(highlighted) {

      if (highlighted) {

        this.color.setRGB(1, 230 / 255, 3 / 255);
        this.opacity = 1;
      } else {

        this.color.copy(this.colorInit);
        this.opacity = this.opacityInit;
      }
    }
  }]);
  return GizmoMaterial;
}(THREE.MeshBasicMaterial);

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Viewing.Tool.Rotate.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1527:
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

__webpack_require__(1524);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TranslateTool = function (_EventsEmitter) {
  (0, _inherits3.default)(TranslateTool, _EventsEmitter);

  /////////////////////////////////////////////////////////////////
  // Class constructor
  //
  /////////////////////////////////////////////////////////////////
  function TranslateTool(viewer) {
    (0, _classCallCheck3.default)(this, TranslateTool);

    var _this = (0, _possibleConstructorReturn3.default)(this, (TranslateTool.__proto__ || (0, _getPrototypeOf2.default)(TranslateTool)).call(this));

    _this._dbIds = [];

    _this.active = false;

    _this._viewer = viewer;

    _this._isDragging = false;

    _this.fullTransform = false;

    _this._transformMesh = null;

    _this._selectedFragProxyMap = {};

    _this._transformControlTx = null;

    _this._hitPoint = new THREE.Vector3();

    _this.onTxChange = _this.onTxChange.bind(_this);

    _this.onAggregateSelectionChanged = _this.onAggregateSelectionChanged.bind(_this);

    _this.onCameraChanged = _this.onCameraChanged.bind(_this);

    _this._selectionMode = 'SELECTION_MODE_TRANSFORM';

    viewer.toolController.registerTool(_this);
    return _this;
  }

  /////////////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////////////


  (0, _createClass3.default)(TranslateTool, [{
    key: 'getNames',
    value: function getNames() {

      return ['Viewing.Tool.Translate'];
    }

    /////////////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////////////

  }, {
    key: 'getName',
    value: function getName() {

      return 'Viewing.Tool.Translate';
    }

    ///////////////////////////////////////////////////////////////////////////
    // Creates a dummy mesh to attach control to
    //
    ///////////////////////////////////////////////////////////////////////////

  }, {
    key: 'createTransformMesh',
    value: function createTransformMesh() {

      var material = new THREE.MeshPhongMaterial({ color: 0xff0000 });

      this._viewer.impl.matman().addMaterial('transform-tool-material', material, true);

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

      if (this._isDragging && this._transformControlTx.visible) {

        var translation = new THREE.Vector3(this._transformMesh.position.x - this._selection.model.offset.x, this._transformMesh.position.y - this._selection.model.offset.y, this._transformMesh.position.z - this._selection.model.offset.z);

        for (var fragId in this._selectedFragProxyMap) {

          var fragProxy = this._selectedFragProxyMap[fragId];

          var position = new THREE.Vector3(this._transformMesh.position.x - fragProxy.offset.x, this._transformMesh.position.y - fragProxy.offset.y, this._transformMesh.position.z - fragProxy.offset.z);

          fragProxy.position = position;

          fragProxy.updateAnimTransform();
        }

        this.emit('translate', {
          fragIds: (0, _keys2.default)(this._selectedFragProxyMap),
          model: this._selection.model,
          translation: translation
        });
      }

      this._viewer.impl.sceneUpdated(true);
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
      var _this2 = this;

      switch (this._selectionMode) {

        case 'SELECTION_MODE_TRANSFORM':

          if (this._selection && this.pointerDown) {

            this._selectionMode = 'SELECTION_MODE_RESUME_TRANSFORM';

            this._viewer.clearSelection();

            this._viewer.select(this._dbIds);

            return;
          }

          if (event.selections.length) {

            var selection = event.selections[0];

            this.setSelection(selection);
          } else {

            this.clearSelection();
          }

          break;

        case 'SELECTION_MODE_PICK':

          if (event.selections && event.selections.length) {

            this._selectionMode = 'SELECTION_MODE_RESUME_TRANSFORM';

            this._viewer.clearSelection();

            this._viewer.select(this._dbIds);

            this.setPosition(this._hitPoint);
          }

        case 'SELECTION_MODE_RESUME_TRANSFORM':

          setTimeout(function () {

            _this2._selectionMode = 'SELECTION_MODE_TRANSFORM';
          }, 300);

          break;
      }
    }

    ///////////////////////////////////////////////////////////////////////////
    //
    //
    ///////////////////////////////////////////////////////////////////////////

  }, {
    key: 'setSelection',
    value: function setSelection(selection) {

      this._selection = selection;

      this._dbIds = this._selection.dbIdArray;

      if (this.fullTransform) {

        this._selection.fragIdsArray = [];

        var fragCount = this._selection.model.getFragmentList().fragments.fragId2dbId.length;

        for (var fragId = 0; fragId < fragCount; ++fragId) {

          this._selection.fragIdsArray.push(fragId);
        }

        this._selection.dbIdArray = [];

        var instanceTree = this._selection.model.getData().instanceTree;

        var rootId = instanceTree.getRootId();

        this._selection.dbIdArray.push(rootId);
      }

      this.initializeSelection(this._hitPoint);

      this.emit('selection', selection);
    }

    ///////////////////////////////////////////////////////////////////////////
    //
    //
    ///////////////////////////////////////////////////////////////////////////

  }, {
    key: 'initializeSelection',
    value: function initializeSelection(hitPoint) {
      var _this3 = this;

      this._selectedFragProxyMap = {};

      var modelTransform = this._selection.model.transform || { translation: { x: 0, y: 0, z: 0 } };

      this._selection.model.offset = {
        x: hitPoint.x - modelTransform.translation.x,
        y: hitPoint.y - modelTransform.translation.y,
        z: hitPoint.z - modelTransform.translation.z
      };

      this._transformControlTx.visible = true;

      this._transformControlTx.setPosition(hitPoint);

      this._transformControlTx.addEventListener('change', this.onTxChange);

      this._viewer.addEventListener(Autodesk.Viewing.CAMERA_CHANGE_EVENT, this.onCameraChanged);

      this._selection.fragIdsArray.forEach(function (fragId) {

        var fragProxy = _this3._viewer.impl.getFragmentProxy(_this3._selection.model, fragId);

        fragProxy.getAnimTransform();

        fragProxy.offset = {

          x: hitPoint.x - fragProxy.position.x,
          y: hitPoint.y - fragProxy.position.y,
          z: hitPoint.z - fragProxy.position.z
        };

        _this3._selectedFragProxyMap[fragId] = fragProxy;
      });

      this._viewer.impl.sceneUpdated(true);
    }

    ///////////////////////////////////////////////////////////////////////////
    //
    //
    ///////////////////////////////////////////////////////////////////////////

  }, {
    key: 'clearSelection',
    value: function clearSelection() {

      if (this.active) {

        this._selection = null;

        this._selectedFragProxyMap = {};

        this._transformControlTx.visible = false;

        this._transformControlTx.removeEventListener('change', this.onTxChange);

        this._viewer.removeEventListener(Autodesk.Viewing.CAMERA_CHANGE_EVENT, this.onCameraChanged);

        this._viewer.impl.sceneUpdated(true);

        this.emit('selection', null);
      }
    }

    //////////////////////////////////////////////////////////////////////////
    //
    //
    ///////////////////////////////////////////////////////////////////////////

  }, {
    key: 'setPosition',
    value: function setPosition(position) {

      this._transformControlTx.setPosition(position);

      for (var fragId in this._selectedFragProxyMap) {

        var fragProxy = this._selectedFragProxyMap[fragId];

        var fragPosition = new THREE.Vector3(position.x - fragProxy.offset.x, position.y - fragProxy.offset.y, position.z - fragProxy.offset.z);

        fragProxy.position = fragPosition;

        fragProxy.updateAnimTransform();
      }

      var translation = new THREE.Vector3(this._transformMesh.position.x - this._selection.model.offset.x, this._transformMesh.position.y - this._selection.model.offset.y, this._transformMesh.position.z - this._selection.model.offset.z);

      this.emit('translate', {
        fragIds: (0, _keys2.default)(this._selectedFragProxyMap),
        model: this._selection.model,
        translation: translation,
        dbIds: this._dbIds
      });

      this._viewer.impl.sceneUpdated(true);
    }

    ///////////////////////////////////////////////////////////////////////////
    // normalize screen coordinates
    //
    ///////////////////////////////////////////////////////////////////////////

  }, {
    key: 'normalize',
    value: function normalize(screenPoint) {

      var viewport = this._viewer.navigation.getScreenViewport();

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

      var hitPoint = this._viewer.utilities.getHitPoint(n.x, n.y);

      return hitPoint;
    }

    ///////////////////////////////////////////////////////////////////////////
    //
    //
    ///////////////////////////////////////////////////////////////////////////

  }, {
    key: 'hitPoint',
    value: function hitPoint() {

      return this._transformControlTx.position;
    }

    ///////////////////////////////////////////////////////////////////////////
    //
    //
    ///////////////////////////////////////////////////////////////////////////

  }, {
    key: 'setHitPoint',
    value: function setHitPoint(hitPoint) {

      this._hitPoint.x = hitPoint.x;
      this._hitPoint.y = hitPoint.y;
      this._hitPoint.z = hitPoint.z;
    }

    ///////////////////////////////////////////////////////////////////
    //
    //
    ///////////////////////////////////////////////////////////////////

  }, {
    key: 'activate',
    value: function activate() {

      if (!this.active) {

        this.active = true;

        this._viewer.toolController.activateTool(this.getName());

        var bbox = this._viewer.model.getBoundingBox();

        this._viewer.impl.createOverlayScene('TranslateToolOverlay');

        this._transformControlTx = new THREE.TransformControls(this._viewer.impl.camera, this._viewer.impl.canvas, "translate");

        this._transformControlTx.setSize(bbox.getBoundingSphere().radius * 5);

        this._transformControlTx.visible = false;

        this._viewer.impl.addOverlay('TranslateToolOverlay', this._transformControlTx);

        this._transformMesh = this.createTransformMesh();

        this._transformControlTx.attach(this._transformMesh);

        this._viewer.addEventListener(Autodesk.Viewing.AGGREGATE_SELECTION_CHANGED_EVENT, this.onAggregateSelectionChanged);

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

        this._viewer.toolController.deactivateTool(this.getName());

        this._viewer.impl.removeOverlay('TranslateToolOverlay', this._transformControlTx);

        this._transformControlTx.removeEventListener('change', this.onTxChange);

        this._viewer.impl.removeOverlayScene('TranslateToolOverlay');

        this._viewer.removeEventListener(Autodesk.Viewing.CAMERA_CHANGE_EVENT, this.onCameraChanged);

        this._viewer.removeEventListener(Autodesk.Viewing.AGGREGATE_SELECTION_CHANGED_EVENT, this.onAggregateSelectionChanged);

        this.emit('deactivate');
      }
    }

    /////////////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////////////

  }, {
    key: 'onPick',
    value: function onPick() {

      if (this.active) {

        this._selectionMode = 'SELECTION_MODE_PICK';
      }
    }

    ///////////////////////////////////////////////////////////////////////////
    //
    //
    ///////////////////////////////////////////////////////////////////////////

  }, {
    key: 'handleButtonDown',
    value: function handleButtonDown(event, button) {

      this._isDragging = true;

      this.pointerDown = this._transformControlTx.onPointerDown(event);

      if (this.pointerDown && this._selection) return true;

      var hitPoint = this.getHitPoint(event);

      if (hitPoint) {

        this._hitPoint.copy(hitPoint);
      }

      return false;
    }

    ///////////////////////////////////////////////////////////////////////////
    //
    //
    ///////////////////////////////////////////////////////////////////////////

  }, {
    key: 'handleButtonUp',
    value: function handleButtonUp(event) {

      this._isDragging = false;

      if (this._transformControlTx.onPointerUp(event)) return true;

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

      return false;
    }

    /////////////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////////////

  }, {
    key: 'handleKeyDown',
    value: function handleKeyDown(event, keyCode) {

      if (keyCode === 27) {
        //ESC

        this._viewer.clearSelection();
        this.deactivate();
      }

      return false;
    }
  }]);
  return TranslateTool;
}(_EventsEmitter3.default);

exports.default = TranslateTool;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Viewing.Tool.Translate.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ })

});
//# sourceMappingURL=48.js.map