webpackJsonp([43],{

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

/***/ 1069:
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EventTool = function (_EventsEmitter) {
  (0, _inherits3.default)(EventTool, _EventsEmitter);

  function EventTool(viewer) {
    (0, _classCallCheck3.default)(this, EventTool);

    var _this = (0, _possibleConstructorReturn3.default)(this, (EventTool.__proto__ || (0, _getPrototypeOf2.default)(EventTool)).call(this));

    _this.viewer = viewer;

    _this.toolName = _this.guid();

    viewer.toolController.registerTool(_this);
    return _this;
  }

  /////////////////////////////////////////////////////////
  // Tool names
  //
  /////////////////////////////////////////////////////////


  (0, _createClass3.default)(EventTool, [{
    key: 'getNames',
    value: function getNames() {

      return [this.getName()];
    }

    /////////////////////////////////////////////////////////
    // Tool name
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'getName',
    value: function getName() {

      return this.toolName;
    }

    /////////////////////////////////////////////////////////
    // Activate Tool
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'activate',
    value: function activate() {

      if (!this.active) {

        this.active = true;

        this.viewer.toolController.activateTool(this.toolName);

        this.emit('activate', this);
      }
    }

    /////////////////////////////////////////////////////////
    // Deactivate tool
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'deactivate',
    value: function deactivate() {

      if (this.active) {

        this.active = false;

        this.viewer.toolController.deactivateTool(this.toolName);

        this.emit('deactivate', this);
      }
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'handleSingleClick',
    value: function handleSingleClick(event, button) {

      return this.emit('singleclick', event, button);
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'handleDoubleClick',
    value: function handleDoubleClick(event, button) {

      return this.emit('doubleclick', event, button);
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'handleMouseMove',
    value: function handleMouseMove(event) {

      return this.emit('mousemove', event);
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'handleWheelInput',
    value: function handleWheelInput(event) {

      return this.emit('mousewheel', event);
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'handleGesture',
    value: function handleGesture(event) {

      return this.emit('gesture', event);
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'handleKeyDown',
    value: function handleKeyDown(event, keyCode) {

      return this.emit('keydown', event, keyCode);
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'handleButtonDown',
    value: function handleButtonDown(event, button) {

      return this.emit('buttondown', event, button);
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'handleButtonUp',
    value: function handleButtonUp(event, button) {

      return this.emit('buttonup', event, button);
    }
  }]);
  return EventTool;
}(_EventsEmitter3.default);

exports.default = EventTool;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Viewer.EventTool.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1070:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Viewer = __webpack_require__(1069);

var _Viewer2 = _interopRequireDefault(_Viewer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Viewer2.default;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1602:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(1749);

exports.default = 'Viewing.Extension.Showcase';

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1749:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

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

var _Viewer = __webpack_require__(1025);

var _Viewer2 = _interopRequireDefault(_Viewer);

var _skyboxXpos = __webpack_require__(1900);

var _skyboxXpos2 = _interopRequireDefault(_skyboxXpos);

var _skyboxXneg = __webpack_require__(1899);

var _skyboxXneg2 = _interopRequireDefault(_skyboxXneg);

var _skyboxYpos = __webpack_require__(1902);

var _skyboxYpos2 = _interopRequireDefault(_skyboxYpos);

var _skyboxYneg = __webpack_require__(1901);

var _skyboxYneg2 = _interopRequireDefault(_skyboxYneg);

var _skyboxZpos = __webpack_require__(1904);

var _skyboxZpos2 = _interopRequireDefault(_skyboxZpos);

var _skyboxZneg = __webpack_require__(1903);

var _skyboxZneg2 = _interopRequireDefault(_skyboxZneg);

var _Viewer3 = __webpack_require__(1070);

var _Viewer4 = _interopRequireDefault(_Viewer3);

var _Viewer5 = __webpack_require__(1754);

var _Viewer6 = _interopRequireDefault(_Viewer5);

var _Stopwatch = __webpack_require__(1067);

var _Stopwatch2 = _interopRequireDefault(_Stopwatch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/////////////////////////////////////////////////////////////////////
// Viewing.Extension.Showcase
// by Philippe Leefsma, July 2017
//
/////////////////////////////////////////////////////////////////////
var ShowcaseExtension = function (_MultiModelExtensionB) {
    (0, _inherits3.default)(ShowcaseExtension, _MultiModelExtensionB);

    /////////////////////////////////////////////////////////
    // Class constructor
    //
    /////////////////////////////////////////////////////////
    function ShowcaseExtension(viewer, options) {
        (0, _classCallCheck3.default)(this, ShowcaseExtension);

        var _this = (0, _possibleConstructorReturn3.default)(this, (ShowcaseExtension.__proto__ || (0, _getPrototypeOf2.default)(ShowcaseExtension)).call(this, viewer, options));

        _this.onCameraChanged = _this.onCameraChanged.bind(_this);

        _this.runAnimation = _this.runAnimation.bind(_this);

        _this.eventTool = new _Viewer4.default(viewer);

        var imageList = [_skyboxXpos2.default, _skyboxXneg2.default, _skyboxYpos2.default, _skyboxYneg2.default, _skyboxZpos2.default, _skyboxZneg2.default];

        var size = new THREE.Vector3();

        size.fromArray(options.size || [10000, 10000, 10000]);

        _this.skybox = new _Viewer6.default(viewer, {
            imageList: imageList,
            size: size
        });

        _this.stopwatch = new _Stopwatch2.default();
        return _this;
    }

    /////////////////////////////////////////////////////////
    // Extension Id
    //
    /////////////////////////////////////////////////////////


    (0, _createClass3.default)(ShowcaseExtension, [{
        key: 'load',


        /////////////////////////////////////////////////////////
        // Load callback
        //
        /////////////////////////////////////////////////////////
        value: function load() {
            var _this2 = this;

            console.log('Viewing.Extension.Showcase loaded');

            this.eventTool.on('mousewheel', function (e) {

                window.clearTimeout(_this2.timeoutId);

                _this2.timeoutId = window.setTimeout(function () {
                    _this2.stopwatch.getElapsedMs();
                    _this2.userInteraction = false;
                    _this2.runAnimation();
                }, 3500);

                _this2.userInteraction = true;

                return false;
            });

            this.eventTool.on('buttondown', function (e) {

                window.clearTimeout(_this2.timeoutId);

                _this2.userInteraction = true;

                return false;
            });

            this.eventTool.on('buttonup', function (e) {

                _this2.timeoutId = window.setTimeout(function () {
                    _this2.stopwatch.getElapsedMs();
                    _this2.runAnimation();
                }, 3500);

                _this2.userInteraction = false;

                return false;
            });

            this.viewer.addEventListener(Autodesk.Viewing.CAMERA_CHANGE_EVENT, this.onCameraChanged);

            return true;
        }

        /////////////////////////////////////////////////////////
        // Setup navigation
        //
        /////////////////////////////////////////////////////////

    }, {
        key: 'configureNavigation',
        value: function configureNavigation() {
            var _this3 = this;

            var nav = this.viewer.navigation;

            nav.setLockSettings({
                pan: true
            });

            this.bounds = new THREE.Box3(new THREE.Vector3(-100, -100, -100), new THREE.Vector3(100, 100, 100));

            nav.fitBounds(true, this.bounds);

            this.viewer.setViewCube('front');

            nav.toPerspective();

            setTimeout(function () {
                _this3.viewer.autocam.setHomeViewFrom(nav.getCamera());
                _this3.options.loader.show(false);
            }, 2000);
        }

        /////////////////////////////////////////////////////////
        // Model completed load callback
        //
        /////////////////////////////////////////////////////////

    }, {
        key: 'onModelCompletedLoad',
        value: function onModelCompletedLoad(event) {
            var _this4 = this;

            if (event.model.dbModelId) {

                this.loadContainer(this.options.containerURN).then(function () {
                    _this4.configureNavigation();
                });

                this.stopwatch.getElapsedMs();

                this.eventTool.activate();

                this.runAnimation();
            }
        }

        /////////////////////////////////////////////////////////
        // Load container model
        //
        /////////////////////////////////////////////////////////

    }, {
        key: 'loadContainer',
        value: function loadContainer(urn) {
            var _this5 = this;

            return new _promise2.default(function () {
                var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(resolve) {
                    var doc, path;
                    return _regenerator2.default.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    _context.next = 2;
                                    return _this5.options.loadDocument(urn);

                                case 2:
                                    doc = _context.sent;
                                    path = _this5.options.getViewablePath(doc);


                                    _this5.viewer.loadModel(path, {}, function (model) {

                                        resolve(model);
                                    });

                                case 5:
                                case 'end':
                                    return _context.stop();
                            }
                        }
                    }, _callee, _this5);
                }));

                return function (_x) {
                    return _ref.apply(this, arguments);
                };
            }());
        }

        /////////////////////////////////////////////////////////
        // Unload callback
        //
        /////////////////////////////////////////////////////////

    }, {
        key: 'unload',
        value: function unload() {

            console.log('Viewing.Extension.Showcase unloaded');

            window.cancelAnimationFrame(this.animId);

            this.viewer.removeEventListener(Autodesk.Viewing.CAMERA_CHANGE_EVENT, this.onCameraChanged);

            this.userInteraction = true;

            this.eventTool.off();
        }

        /////////////////////////////////////////////////////////
        // Clamp vector length, not avail in three.js version
        // used by the viewer
        //
        /////////////////////////////////////////////////////////

    }, {
        key: 'clampLength',
        value: function clampLength(vector, min, max) {

            var length = vector.length();

            vector.divideScalar(length || 1);

            vector.multiplyScalar(Math.max(min, Math.min(max, length)));
        }

        /////////////////////////////////////////////////////////
        // Camera changed event
        //
        /////////////////////////////////////////////////////////

    }, {
        key: 'onCameraChanged',
        value: function onCameraChanged() {

            var nav = this.viewer.navigation;

            var pos = nav.getPosition();

            if (pos.length() > 700.0 || pos.length() < 100.0) {

                this.clampLength(pos, 100.0, 700.0);

                nav.fitBounds(true, this.bounds);

                nav.setView(pos, new THREE.Vector3(0, 0, 0));
            }
        }

        /////////////////////////////////////////////////////////
        // Rotate camera around axis
        //
        /////////////////////////////////////////////////////////

    }, {
        key: 'rotateCamera',
        value: function rotateCamera(axis, speed, dt) {

            var nav = this.viewer.navigation;

            var up = nav.getCameraUpVector();

            var pos = nav.getPosition();

            var matrix = new THREE.Matrix4().makeRotationAxis(axis, speed * dt);

            pos.applyMatrix4(matrix);
            up.applyMatrix4(matrix);

            nav.setView(pos, new THREE.Vector3(0, 0, 0));
            nav.setCameraUpVector(up);
        }

        /////////////////////////////////////////////////////////
        // starts animation
        //
        /////////////////////////////////////////////////////////

    }, {
        key: 'runAnimation',
        value: function runAnimation() {

            if (!this.userInteraction) {

                var dt = this.stopwatch.getElapsedMs() * 0.001;

                var axis = new THREE.Vector3(0, 1, 0);

                this.rotateCamera(axis, 10.0 * Math.PI / 180, dt);

                this.animId = window.requestAnimationFrame(this.runAnimation);
            }
        }
    }], [{
        key: 'ExtensionId',
        get: function get() {

            return 'Viewing.Extension.Showcase';
        }
    }]);
    return ShowcaseExtension;
}(_Viewer2.default);

Autodesk.Viewing.theExtensionManager.registerExtension(ShowcaseExtension.ExtensionId, ShowcaseExtension);

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Viewing.Extension.Showcase.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1753:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ViewerSkybox = function ViewerSkybox(viewer, options) {
  (0, _classCallCheck3.default)(this, ViewerSkybox);


  var faceMaterials = options.imageList.map(function (url) {
    return new THREE.MeshBasicMaterial({
      map: THREE.ImageUtils.loadTexture(url),
      side: THREE.BackSide
    });
  });

  var skyMaterial = new THREE.MeshFaceMaterial(faceMaterials);

  var geometry = new THREE.CubeGeometry(options.size.x, options.size.y, options.size.z, 1, 1, 1, null, true);

  var skybox = new THREE.Mesh(geometry, skyMaterial);

  viewer.impl.scene.add(skybox);
};

exports.default = ViewerSkybox;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Viewer.Skybox.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1754:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Viewer = __webpack_require__(1753);

var _Viewer2 = _interopRequireDefault(_Viewer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Viewer2.default;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1899:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1fe04a8d6958c7cd0aae0e73ce0930b5.png";

/***/ }),

/***/ 1900:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a8415c39630fbb82149b09fd06ec67ca.png";

/***/ }),

/***/ 1901:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "777814e94305f9c8a899e3a8dd26ca1e.png";

/***/ }),

/***/ 1902:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "4ac6ce01f872698835795143c8358e09.png";

/***/ }),

/***/ 1903:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "2a27e43e7b0e0184f484869676df954c.png";

/***/ }),

/***/ 1904:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "b502cec8d3187970f2df80b2f86838c5.png";

/***/ })

});
//# sourceMappingURL=43.js.map