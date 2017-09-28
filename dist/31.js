webpackJsonp([31],{

/***/ 1020:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(36)();
// imports


// module
exports.push([module.i, ".widget-container {\n  position: relative;\n  height: 100%;\n  width: 100%; }\n\n.widget-container > .title {\n  border-bottom: 1px solid #cdcdcd;\n  background-color: #f5f5f5;\n  padding-right: 10px;\n  color: black;\n  position: relative;\n  overflow: hidden;\n  text-align: left;\n  height: 40px;\n  width: 100%; }\n\n.widget-container > .title > label {\n  white-space: nowrap;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  margin-left: 27px;\n  margin-top: 10px; }\n\n.widget-container > .content {\n  background-color: white;\n  position: relative;\n  overflow: hidden;\n  height: 100%;\n  width: 100%; }\n", ""]);

// exports


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

/***/ 1397:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(36)();
// imports


// module
exports.push([module.i, ".markup-2d .title {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  float: left; }\n  .markup-2d .title > label {\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    white-space: nowrap;\n    font-weight: normal;\n    user-select: none;\n    margin-left: 27px;\n    margin-top: 10px;\n    select: none;\n    width: 90px;\n    float: left; }\n  .markup-2d .title > .dropdown {\n    position: relative;\n    height: 27px;\n    top: 6px; }\n    .markup-2d .title > .dropdown > button {\n      padding: 2px 12px;\n      height: 26px; }\n\n.markup-2d .content {\n  overflow-y: scroll;\n  overflow-x: hidden;\n  height: 100%; }\n\n.markup-2d-controls {\n  margin: auto 0 auto calc(100% - 152px);\n  position: relative;\n  float: left; }\n\n.markup-2d-controls > button {\n  border: 1px solid #c6c6c6;\n  background-color: #e1e1e1;\n  border-radius: 6px;\n  position: relative;\n  overflow: hidden;\n  outline: none;\n  height: 24px;\n  width: 26px; }\n\n.markup-2d-controls > button:hover {\n  border: 1px solid #878787;\n  background-color: #f5f5f5; }\n\n.markup-2d-controls > button > label {\n  position: relative;\n  font-size: 20px;\n  color: #f0fcff;\n  top: -8px; }\n\n.markup-2d-controls > button > span {\n  pointer-events: none;\n  color: #9b9b9b; }\n", ""]);

// exports


/***/ }),

/***/ 1398:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(36)();
// imports


// module
exports.push([module.i, ".adsk-icon-markup:before {\n  content: \"a\"; }\n\n.markups-panel-content {\n  color: white; }\n\n.markups-panel-content > div {\n  padding: 10px 5px; }\n\n.markups-panel-content button {\n  background: #cacaca;\n  display: inline-block;\n  color: #FFFFFF;\n  border-radius: 3px;\n  text-align: center;\n  vertical-align: middle;\n  font-size: 13px;\n  font-style: normal;\n  cursor: pointer;\n  pointer-events: all;\n  border: 1px solid transparent;\n  outline: none;\n  background-repeat: no-repeat;\n  background-position: center;\n  box-sizing: border-box;\n  width: 34px;\n  height: 30px;\n  margin: 2px; }\n\n.markups-panel-content button:hover, .markups-panel-content button.active {\n  border: 1px solid gray; }\n\n.markups-panel-content .viewer-actions button {\n  background: #cacaca;\n  margin-right: 6px;\n  font-size: 24px;\n  padding: 2px;\n  width: 34px; }\n\n.markups-panel-content .markup-buttons, .markups-panel-content .viewer-actions {\n  display: inline-block; }\n\n.markups-panel-content .panel-actions {\n  text-align: center; }\n\n.markups-panel-content .panel-actions button {\n  width: auto; }\n\n.markups-panel-content .vertical-seperator {\n  display: inline-block;\n  height: 100%;\n  width: 1px;\n  background-color: #cacaca; }\n\n.markups-panel-content [data-panel-action=\"finish\"], .markups-panel-content [data-panel-action=\"clear\"] {\n  background-color: gray; }\n\n.markups-panel-content button.active {\n  background-color: #939393; }\n\n.markups-panel-content hr {\n  margin: 0; }\n\n.markups-panel-content .markup-tools {\n  display: inline-block; }\n\n.markups-panel-content .markup-actions {\n  display: inline-block; }\n\n.markups-panel-content .markup-actions button {\n  display: inline-block;\n  width: 50px;\n  color: gray; }\n\n.markups-panel-content .markup-actions button.active {\n  color: #404040;\n  background-color: transparent; }\n\n.markups-panel-content select, .markups-panel-content option {\n  background-color: white;\n  color: black; }\n\n#markup-arrow {\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAQCAYAAADNo/U5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6REU4MDA0MDNCOTNFMTFFNDlBRjVDMkIyRDQyNUE0RkQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6REU4MDA0MDRCOTNFMTFFNDlBRjVDMkIyRDQyNUE0RkQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpERTgwMDQwMUI5M0UxMUU0OUFGNUMyQjJENDI1QTRGRCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpERTgwMDQwMkI5M0UxMUU0OUFGNUMyQjJENDI1QTRGRCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmOmkSIAAAC/SURBVHjaYvj///89IJ4KxO5AzM5ADAAqfPYfAT4B8WogjgFiIXyaTv/HDv4C8QEgLsRwAVBg23/cAKQxE5tNs3Fo+AzEnric14bDBld8fsrGYdNRIGbDpSkMSeEOIN6AxJ+GS5M1VMFMIGYGYh4gvoqkMRGbJmUgLkMTUwPiD1BNP4DYlNhI90Gy7TEQixGrsQFJ434gZiFGEyMQb0LSOIFY2wSA+BaSxihiNWpBUwgInGAgFgAVB0PjkR8gwADzDYCmgUOGQwAAAABJRU5ErkJggg==\"); }\n\n#markup-label {\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAPCAYAAAA/I0V3AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6REU4MDA0MDdCOTNFMTFFNDlBRjVDMkIyRDQyNUE0RkQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6REU4MDA0MDhCOTNFMTFFNDlBRjVDMkIyRDQyNUE0RkQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpERTgwMDQwNUI5M0UxMUU0OUFGNUMyQjJENDI1QTRGRCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpERTgwMDQwNkI5M0UxMUU0OUFGNUMyQjJENDI1QTRGRCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PoySdycAAAEiSURBVHjahNK7SgNREIDhcySKSSNYKGk0iZc0NrFWxDyARRpbH8FGAoJgZWWlL2ApeAFT2AiWlhaCICgiKGLjpRAVEzn+A3N0WHZ14GOXmTM7y+w6pxFCGMYmrsNvPOIQ8/DOBolpvIa/Y8s2eFxp4Q4NDKCIGRyZxnpsmjDJKZcIcgW8aL0puRy6cYAOTpJN3vs3Dt9y24e8+y843Is5tHXSapwUD5S4NFBDGRUUs54mi1hDJ2VjT9jR1f9MkqZFc+gcS5jFkHnwTbLpUhOn6Ml4mwfb1IVRre2xqc+UBpk4aHPS9KH35ZQG+RwbaaNbOvoLy7JFjGABZ1p71+s+qtI0jueM/002uoJ1m4zTxnS18ae9xzYmtd6PXVzg+FuAAQAB46m3CGHlZgAAAABJRU5ErkJggg==\"); }\n\n#markup-rectangle {\n  /* annot_icon_rect.png */\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAXCAYAAAARIY8tAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuNWWFMmUAAAB2SURBVEhL7ZUxCoAwDEVTdPMMCp7aXWcP5OhJ0l9tcZAGLWmnPHiDws9zk7in+jBzB2dln0/Hwwi1meL59oEDLoWGbSIb2OLr32C73icuLPAGWwvIYGsBGWwtIIPtp8AJ90LDNpENaNE24OCgrIvnEcDvuY5EHvqmFjhw6lRVAAAAAElFTkSuQmCC\"); }\n\n#markup-circle {\n  /* annot_icon_circle.png */\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuNWWFMmUAAAE/SURBVEhLvZWxccMwDEVdeIQUKTxAygzgAVxkCBcZIUX2yCAuPIZLFykygAsXKVMq//EM3SdFWVbOzL97dxQIQBQIUouu65pSNVZ4FlvxfoExtppvRtVovIovMSbmeFktNlE1igexE7dqLx7FINfAINbiJFw/4iA+LjDG5jqLjcjyZQ+ClXtykryJ0g+Wgjl/0bdYid7PA8DLchRPovQpwedThChXP++ObGiIVd2SPMDXv6TfeHfybhkryzWICZEr2WOSng6xkrDPgT3xr0jnJCb5pBAd4oFzIDaUyhQTnM4QbehBcyA2RM7/e0HzEjXfZGjaptD8oAHHPHT3qwK4crkVQ6xqrFx/uuyAKxdHF0noENoQGHtiRMyLyPJlDwar8HJNCd9s5cHAUNDsl1lCT5OI0wmMU59PUTXej27xC14SYOIfE4RhAAAAAElFTkSuQmCC\"); }\n\n#markup-cloud {\n  /* annot_icon_cloud.png */\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwgAADsIBFShKgAAAABh0RVh0U29mdHdhcmUAcGFpbnQubmV0IDQuMC41ZYUyZQAAAy1JREFUSEudlklsjkEYx9tqrVVbU0vTJi7WINLQSCUuJK4O4thwdHARQeLq4kBwQhw04SIcKhFLSERccLEllpBaYi1qp3jr9xvPfP2aSNp6kt838/yfmXned2bema+i3Pr6+iqhGkaENMDUB4nZtzKkflMsimIW7IXzcBo2Q51xyumwA06BsS30qY1YA2yFTrgIu2HmgEQ4LYgv4XdQoPVRXINFcB9+QSmOnaHJHEpj2u/ooz2CeXnwGhyfKlk0cpAfSSiK7rKO6ibK7d5Zx35C6cE0qscoKvMrvgjRhjeoXqf8AHkgzae6BMZ71DV8B35A1T7d+qE/phhrgib4AtpZxEkGqG+E70ktigto9VADE/H3wU/qDnQS6mAcLIU7oX+EySZYCHlKTsComLqR1J26LuotaT7D0Fz0Z3AbWkNOhr89EnyDGQqzwzGJc7qR+MRoPAZG4Q/YevpQCyNDym03gJtFe0283sB4uAtfIS/iEYLV0XdQMyF91kHeGI5xVN1gFc4WReq+Wi/sojrcBOvLxvgEbTlYjdMBaZthp9DSFA3VTABr6esU53EOqTtFaZsmqSiuIDZHv2EZ/erpv47yOvgWXTDGBAvA/e9C+3HURJ9hG32dqk2guaaNJlgMJnDP+8Esh9LuGKrRZwT954Ifo/YFrdkEU+ANuPLfEHsoD1IOd5HXwFvIa3ATvcagi7wf0hkT1vEfCdoh76L3sDrC6SNZAm8j+BxmRWhIFgn8yHpjDGdkfg56mnaWBdrVUhDD90NsQBvwNYfeiF4VvvN/CN7FWMdTH36acTzsnLvb+BPSCBj1aWheQLdgasjJ8HeC23tVSPlhD1CawBkZq7gcRzOBr7gNPFE9Nb3hNNdnD5p7vS765HviKngie6Iug4ehuzNn5zf4EaIDeZ48hSeQd4Tmd6LuvfDR9poB7DWoe0TkO8T7ZLIJRlO5XNbYQU2Uy8NgUs+oXKp/hmNgu/T2UH5BOVV/1w1nIY43Uh7YM+UyrEF3G3uQuQ4O+grOQRsxH2473IN85PvkTmf6U1AyRM/zVlgB40vZw0wEk2z3j5g3XTOsJN7UH6+o+ANSF73vdqluuAAAAABJRU5ErkJggg==\"); }\n\n#markup-freehand {\n  /* annot_icon_freehand.png */\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwgAADsIBFShKgAAAABh0RVh0U29mdHdhcmUAcGFpbnQubmV0IDQuMC41ZYUyZQAAAZZJREFUSEu1lr1KA0EYRWMwNlFIJTbpFPQN1C611kpsTCV2Vv6ArY0KElBLn0JfQRsb7QUFOwUb8QcV1nPXb9YsmtmdDTlwYpjvzl5INrOWoijqqz8vBu8rOIhlW+qJVAF/h3EX13EO61qLhwVhf6qghZ3c4w5OYiUOBcK+VEEDb/AJv9BxiUs4GgcDYM9vgeD9Im7hEV7gJ4pn3MeqRXNBPl3gYK2Ms9jGRxSvuGKRXJD/v8DBrIZr+IHiFqdtnAlZf4FgrrvrBB2nNsqEbHaBIKNb9h2FPqpxG3khl7tAXqOjaSMv5PIVCHLburLRtmUv5IIKNnRl49iWvZALKmjqysYV2qQ7cSZPUJCbQH3BQl943UZdIZO/QJA9Q4duXe9hyDy4YAbvUOjHpx9hzcZ/YBZWIMiv4huKBzxAFQ9YJIG1QgVV1EVfUOhAPMdD3MQFixYrEOwZw2XUUe7QEa+jXkd+w3LFCgT7hnAK9VDSw6mTlmWKFzjYP4I6q+ZRj9s9rdms9wIH19EzRP8wJI/XpKB/RqVv5QTxCPrEmO8AAAAASUVORK5CYII=\"); }\n\n.markups-panel-content .markup-properties {\n  color: #797979; }\n  .markups-panel-content .markup-properties label {\n    display: block;\n    font-weight: normal;\n    margin: 7px;\n    font-weight: normal; }\n\n.color-picker-pallete {\n  margin: 0;\n  padding: 0; }\n\n.color-picker-pallete li {\n  display: inline-block;\n  margin: 5px;\n  vertical-align: middle; }\n\n.color-picker-pallete .color-picker-item {\n  border: 1px solid grey;\n  width: 20px;\n  height: 20px;\n  box-sizing: border-box;\n  background-clip: red;\n  cursor: pointer; }\n\n.color-picker-pallete .color-picker-item.active {\n  border: 2px solid dimgray;\n  width: 30px;\n  height: 30px; }\n\n.markup-buttons button {\n  background: #cacaca; }\n  .markup-buttons button div {\n    background-position: center center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    pointer-events: none;\n    position: relative;\n    height: 20px;\n    width: 18px;\n    left: 1px; }\n\n#markup-panel {\n  background: rgba(255, 255, 255, 0.7);\n  width: 258px; }\n\n#markup-panel:hover {\n  background: white; }\n", ""]);

// exports


/***/ }),

/***/ 1412:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(36)();
// imports


// module
exports.push([module.i, "/***\r\nSpectrum Colorpicker v1.5.1\r\nhttps://github.com/bgrins/spectrum\r\nAuthor: Brian Grinstead\r\nLicense: MIT\r\n***/\r\n\r\n.sp-container {\r\n    position:absolute;\r\n    top:0;\r\n    left:0;\r\n    display:inline-block;\r\n    *display: inline;\r\n    *zoom: 1;\r\n    /* https://github.com/bgrins/spectrum/issues/40 */\r\n    z-index: 9999994;\r\n    overflow: hidden;\r\n}\r\n.sp-container.sp-flat {\r\n    position: relative;\r\n}\r\n\r\n/* Fix for * { box-sizing: border-box; } */\r\n.sp-container, .sp-container * {\r\n    box-sizing: content-box;\r\n}\r\n\r\n/* http://ansciath.tumblr.com/post/7347495869/css-aspect-ratio */\r\n.sp-top {\r\n  position:relative;\r\n  width: 100%;\r\n  display:inline-block;\r\n}\r\n.sp-top-inner {\r\n   position:absolute;\r\n   top:0;\r\n   left:0;\r\n   bottom:0;\r\n   right:0;\r\n}\r\n.sp-color {\r\n    position: absolute;\r\n    top:0;\r\n    left:0;\r\n    bottom:0;\r\n    right:20%;\r\n}\r\n.sp-hue {\r\n    position: absolute;\r\n    top:0;\r\n    right:0;\r\n    bottom:0;\r\n    left:84%;\r\n    height: 100%;\r\n}\r\n\r\n.sp-clear-enabled .sp-hue {\r\n    top:33px;\r\n    height: 77.5%;\r\n}\r\n\r\n.sp-fill {\r\n    padding-top: 80%;\r\n}\r\n.sp-sat, .sp-val {\r\n    position: absolute;\r\n    top:0;\r\n    left:0;\r\n    right:0;\r\n    bottom:0;\r\n}\r\n\r\n.sp-alpha-enabled .sp-top {\r\n    margin-bottom: 18px;\r\n}\r\n.sp-alpha-enabled .sp-alpha {\r\n    display: block;\r\n}\r\n.sp-alpha-handle {\r\n    position:absolute;\r\n    top:-4px;\r\n    bottom: -4px;\r\n    width: 6px;\r\n    left: 50%;\r\n    cursor: pointer;\r\n    border: 1px solid black;\r\n    background: white;\r\n    opacity: .8;\r\n}\r\n.sp-alpha {\r\n    display: none;\r\n    position: absolute;\r\n    bottom: -14px;\r\n    right: 0;\r\n    left: 0;\r\n    height: 8px;\r\n}\r\n.sp-alpha-inner {\r\n    border: solid 1px #333;\r\n}\r\n\r\n.sp-clear {\r\n    display: none;\r\n}\r\n\r\n.sp-clear.sp-clear-display {\r\n    background-position: center;\r\n}\r\n\r\n.sp-clear-enabled .sp-clear {\r\n    display: block;\r\n    position:absolute;\r\n    top:0px;\r\n    right:0;\r\n    bottom:0;\r\n    left:84%;\r\n    height: 28px;\r\n}\r\n\r\n/* Don't allow text selection */\r\n.sp-container, .sp-replacer, .sp-preview, .sp-dragger, .sp-slider, .sp-alpha, .sp-clear, .sp-alpha-handle, .sp-container.sp-dragging .sp-input, .sp-container button  {\r\n    -webkit-user-select:none;\r\n    -moz-user-select: -moz-none;\r\n    -o-user-select:none;\r\n    -ms-user-select: none;\r\n        user-select: none;\r\n}\r\n\r\n.sp-container.sp-input-disabled .sp-input-container {\r\n    display: none;\r\n}\r\n.sp-container.sp-buttons-disabled .sp-button-container {\r\n    display: none;\r\n}\r\n.sp-container.sp-palette-buttons-disabled .sp-palette-button-container {\r\n    display: none;\r\n}\r\n.sp-palette-only .sp-picker-container {\r\n    display: none;\r\n}\r\n.sp-palette-disabled .sp-palette-container {\r\n    display: none;\r\n}\r\n\r\n.sp-initial-disabled .sp-initial {\r\n    display: none;\r\n}\r\n\r\n\r\n/* Gradients for hue, saturation and value instead of images.  Not pretty... but it works */\r\n.sp-sat {\r\n    background-image: linear-gradient(to right, #fff, rgba(204, 154, 129, 0));\r\n    -ms-filter: \"progid:DXImageTransform.Microsoft.gradient(GradientType = 1, startColorstr=#FFFFFFFF, endColorstr=#00CC9A81)\";\r\n    filter : progid:DXImageTransform.Microsoft.gradient(GradientType = 1, startColorstr='#FFFFFFFF', endColorstr='#00CC9A81');\r\n}\r\n.sp-val {\r\n    background-image: linear-gradient(to top, #000, rgba(204, 154, 129, 0));\r\n    -ms-filter: \"progid:DXImageTransform.Microsoft.gradient(startColorstr=#00CC9A81, endColorstr=#FF000000)\";\r\n    filter : progid:DXImageTransform.Microsoft.gradient(startColorstr='#00CC9A81', endColorstr='#FF000000');\r\n}\r\n\r\n.sp-hue {\r\n    background: linear-gradient(to bottom, #ff0000 0%, #ffff00 17%, #00ff00 33%, #00ffff 50%, #0000ff 67%, #ff00ff 83%, #ff0000 100%);\r\n}\r\n\r\n/* IE filters do not support multiple color stops.\r\n   Generate 6 divs, line them up, and do two color gradients for each.\r\n   Yes, really.\r\n */\r\n.sp-1 {\r\n    height:17%;\r\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff0000', endColorstr='#ffff00');\r\n}\r\n.sp-2 {\r\n    height:16%;\r\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffff00', endColorstr='#00ff00');\r\n}\r\n.sp-3 {\r\n    height:17%;\r\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00ff00', endColorstr='#00ffff');\r\n}\r\n.sp-4 {\r\n    height:17%;\r\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00ffff', endColorstr='#0000ff');\r\n}\r\n.sp-5 {\r\n    height:16%;\r\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#0000ff', endColorstr='#ff00ff');\r\n}\r\n.sp-6 {\r\n    height:17%;\r\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff00ff', endColorstr='#ff0000');\r\n}\r\n\r\n.sp-hidden {\r\n    display: none !important;\r\n}\r\n\r\n/* Clearfix hack */\r\n.sp-cf:before, .sp-cf:after { content: \"\"; display: table; }\r\n.sp-cf:after { clear: both; }\r\n.sp-cf { *zoom: 1; }\r\n\r\n/* Mobile devices, make hue slider bigger so it is easier to slide */\r\n@media (max-device-width: 480px) {\r\n    .sp-color { right: 40%; }\r\n    .sp-hue { left: 63%; }\r\n    .sp-fill { padding-top: 60%; }\r\n}\r\n.sp-dragger {\r\n   border-radius: 5px;\r\n   height: 5px;\r\n   width: 5px;\r\n   border: 1px solid #fff;\r\n   background: #000;\r\n   cursor: pointer;\r\n   position:absolute;\r\n   top:0;\r\n   left: 0;\r\n}\r\n.sp-slider {\r\n    position: absolute;\r\n    top:0;\r\n    cursor:pointer;\r\n    height: 3px;\r\n    left: -1px;\r\n    right: -1px;\r\n    border: 1px solid #000;\r\n    background: white;\r\n    opacity: .8;\r\n}\r\n\r\n/*\r\nTheme authors:\r\nHere are the basic themeable display options (colors, fonts, global widths).\r\nSee http://bgrins.github.io/spectrum/themes/ for instructions.\r\n*/\r\n\r\n.sp-container {\r\n    border-radius: 0;\r\n    background-color: #ECECEC;\r\n    border: solid 1px #f0c49B;\r\n    padding: 0;\r\n}\r\n.sp-container, .sp-container button, .sp-container input, .sp-color, .sp-hue, .sp-clear {\r\n    font: normal 12px \"Lucida Grande\", \"Lucida Sans Unicode\", \"Lucida Sans\", Geneva, Verdana, sans-serif;\r\n    -ms-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n}\r\n.sp-top {\r\n    margin-bottom: 3px;\r\n}\r\n.sp-color, .sp-hue, .sp-clear {\r\n    border: solid 1px #666;\r\n}\r\n\r\n/* Input */\r\n.sp-input-container {\r\n    float:right;\r\n    width: 100px;\r\n    margin-bottom: 4px;\r\n}\r\n.sp-initial-disabled  .sp-input-container {\r\n    width: 100%;\r\n}\r\n.sp-input {\r\n   font-size: 12px !important;\r\n   border: 1px inset;\r\n   padding: 4px 5px;\r\n   margin: 0;\r\n   width: 100%;\r\n   background:transparent;\r\n   border-radius: 3px;\r\n   color: #222;\r\n}\r\n.sp-input:focus  {\r\n    border: 1px solid orange;\r\n}\r\n.sp-input.sp-validation-error {\r\n    border: 1px solid red;\r\n    background: #fdd;\r\n}\r\n.sp-picker-container, .sp-palette-container {\r\n    float:left;\r\n    position: relative;\r\n    padding: 10px;\r\n    padding-bottom: 300px;\r\n    margin-bottom: -290px;\r\n}\r\n.sp-picker-container {\r\n    width: 172px;\r\n    border-left: solid 1px #fff;\r\n}\r\n\r\n/* Palettes */\r\n.sp-palette-container {\r\n    border-right: solid 1px #ccc;\r\n}\r\n\r\n.sp-palette-only .sp-palette-container {\r\n    border: 0;\r\n}\r\n\r\n.sp-palette .sp-thumb-el {\r\n    display: block;\r\n    position:relative;\r\n    float:left;\r\n    width: 24px;\r\n    height: 15px;\r\n    margin: 3px;\r\n    cursor: pointer;\r\n    border:solid 2px transparent;\r\n}\r\n.sp-palette .sp-thumb-el:hover, .sp-palette .sp-thumb-el.sp-thumb-active {\r\n    border-color: orange;\r\n}\r\n.sp-thumb-el {\r\n    position:relative;\r\n}\r\n\r\n/* Initial */\r\n.sp-initial {\r\n    float: left;\r\n    border: solid 1px #333;\r\n}\r\n.sp-initial span {\r\n    width: 30px;\r\n    height: 25px;\r\n    border:none;\r\n    display:block;\r\n    float:left;\r\n    margin:0;\r\n}\r\n\r\n.sp-initial .sp-clear-display {\r\n    background-position: center;\r\n}\r\n\r\n/* Buttons */\r\n.sp-palette-button-container, .sp-button-container {\r\n    float: right;\r\n}\r\n\r\n/* Replacer (the little preview div that shows up instead of the <input>) */\r\n.sp-replacer {\r\n    margin:0;\r\n    overflow:hidden;\r\n    cursor:pointer;\r\n    padding: 4px;\r\n    display:inline-block;\r\n    *zoom: 1;\r\n    *display: inline;\r\n    border: solid 1px #91765d;\r\n    background: #eee;\r\n    color: #333;\r\n    vertical-align: middle;\r\n    height: 17px;\r\n    width: 56px;\r\n    border-radius:10px;\r\n}\r\n.sp-replacer:hover, .sp-replacer.sp-active {\r\n    border-color: #F0C49B;\r\n    color: #111;\r\n}\r\n.sp-replacer.sp-disabled {\r\n    cursor:default;\r\n    border-color: silver;\r\n    color: silver;\r\n}\r\n.sp-dd {\r\n    padding: 2px 0;\r\n    height: 16px;\r\n    line-height: 16px;\r\n    float:left;\r\n    font-size:10px;\r\n}\r\n.sp-preview {\r\n    position:relative;\r\n    width:25px;\r\n    height: 15px;\r\n    border: solid 1px #222;\r\n    margin-right: 5px;\r\n    float:left;\r\n    z-index: 0;\r\n    border-radius:8px;\r\n    width: 36px;\r\n}\r\n\r\n.sp-palette {\r\n    *width: 220px;\r\n    max-width: 220px;\r\n}\r\n.sp-palette .sp-thumb-el {\r\n    width:16px;\r\n    height: 16px;\r\n    margin:2px 1px;\r\n    border: solid 1px #d0d0d0;\r\n}\r\n\r\n.sp-container {\r\n    padding-bottom:0;\r\n}\r\n\r\n\r\n/* Buttons: http://hellohappy.org/css3-buttons/ */\r\n.sp-container button {\r\n  background-color: #eeeeee;\r\n  background-image: linear-gradient(to bottom, #eeeeee, #cccccc);\r\n  border: 1px solid #ccc;\r\n  border-bottom: 1px solid #bbb;\r\n  border-radius: 3px;\r\n  color: #333;\r\n  font-size: 14px;\r\n  line-height: 1;\r\n  padding: 5px 4px;\r\n  text-align: center;\r\n  text-shadow: 0 1px 0 #eee;\r\n  vertical-align: middle;\r\n}\r\n.sp-container button:hover {\r\n    background-color: #dddddd;\r\n    background-image: linear-gradient(to bottom, #dddddd, #bbbbbb);\r\n    border: 1px solid #bbb;\r\n    border-bottom: 1px solid #999;\r\n    cursor: pointer;\r\n    text-shadow: 0 1px 0 #ddd;\r\n}\r\n.sp-container button:active {\r\n    border: 1px solid #aaa;\r\n    border-bottom: 1px solid #888;\r\n    -ms-box-shadow: inset 0 0 5px 2px #aaaaaa, 0 1px 0 0 #eeeeee;\r\n    -o-box-shadow: inset 0 0 5px 2px #aaaaaa, 0 1px 0 0 #eeeeee;\r\n    box-shadow: inset 0 0 5px 2px #aaaaaa, 0 1px 0 0 #eeeeee;\r\n}\r\n.sp-cancel {\r\n    font-size: 11px;\r\n    color: #d93f3f !important;\r\n    margin:0;\r\n    padding:2px;\r\n    margin-right: 5px;\r\n    vertical-align: middle;\r\n    text-decoration:none;\r\n\r\n}\r\n.sp-cancel:hover {\r\n    color: #d93f3f !important;\r\n    text-decoration: underline;\r\n}\r\n\r\n\r\n.sp-palette span:hover, .sp-palette span.sp-thumb-active {\r\n    border-color: #000;\r\n}\r\n\r\n.sp-preview, .sp-alpha, .sp-thumb-el {\r\n    position:relative;\r\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAGUlEQVQYV2M4gwH+YwCGIasIUwhT25BVBADtzYNYrHvv4gAAAABJRU5ErkJggg==);\r\n}\r\n.sp-preview-inner, .sp-alpha-inner, .sp-thumb-inner {\r\n    display:block;\r\n    position:absolute;\r\n    top:0;left:0;bottom:0;right:0;\r\n    border-radius:8px;\r\n}\r\n\r\n.sp-palette .sp-thumb-inner {\r\n    background-position: 50% 50%;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n.sp-palette .sp-thumb-light.sp-thumb-active .sp-thumb-inner {\r\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAIVJREFUeNpiYBhsgJFMffxAXABlN5JruT4Q3wfi/0DsT64h8UD8HmpIPCWG/KemIfOJCUB+Aoacx6EGBZyHBqI+WsDCwuQ9mhxeg2A210Ntfo8klk9sOMijaURm7yc1UP2RNCMbKE9ODK1HM6iegYLkfx8pligC9lCD7KmRof0ZhjQACDAAceovrtpVBRkAAAAASUVORK5CYII=);\r\n}\r\n\r\n.sp-palette .sp-thumb-dark.sp-thumb-active .sp-thumb-inner {\r\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAadEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41LjEwMPRyoQAAAMdJREFUOE+tkgsNwzAMRMugEAahEAahEAZhEAqlEAZhEAohEAYh81X2dIm8fKpEspLGvudPOsUYpxE2BIJCroJmEW9qJ+MKaBFhEMNabSy9oIcIPwrB+afvAUFoK4H0tMaQ3XtlrggDhOVVMuT4E5MMG0FBbCEYzjYT7OxLEvIHQLY2zWwQ3D+9luyOQTfKDiFD3iUIfPk8VqrKjgAiSfGFPecrg6HN6m/iBcwiDAo7WiBeawa+Kwh7tZoSCGLMqwlSAzVDhoK+6vH4G0P5wdkAAAAASUVORK5CYII=);\r\n}\r\n\r\n.sp-clear-display {\r\n    background-repeat:no-repeat;\r\n    background-position: center;\r\n    background-image: url(data:image/gif;base64,R0lGODlhFAAUAPcAAAAAAJmZmZ2dnZ6enqKioqOjo6SkpKWlpaampqenp6ioqKmpqaqqqqurq/Hx8fLy8vT09PX19ff39/j4+Pn5+fr6+vv7+wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAAP8ALAAAAAAUABQAAAihAP9FoPCvoMGDBy08+EdhQAIJCCMybCDAAYUEARBAlFiQQoMABQhKUJBxY0SPICEYHBnggEmDKAuoPMjS5cGYMxHW3IiT478JJA8M/CjTZ0GgLRekNGpwAsYABHIypcAgQMsITDtWJYBR6NSqMico9cqR6tKfY7GeBCuVwlipDNmefAtTrkSzB1RaIAoXodsABiZAEFB06gIBWC1mLVgBa0AAOw==);\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ 1586:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(1779);

__webpack_require__(1712);

__webpack_require__(1711);

__webpack_require__(1708);

__webpack_require__(1705);

__webpack_require__(1709);

__webpack_require__(1707);

__webpack_require__(1818);

__webpack_require__(1706);

__webpack_require__(1710);

__webpack_require__(1817);

__webpack_require__(1704);

exports.default = 'Viewing.Extension.Markup2D';

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1704:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(46);

var _assign2 = _interopRequireDefault(_assign);

var _regenerator = __webpack_require__(216);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = __webpack_require__(65);

var _promise2 = _interopRequireDefault(_promise);

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

var _Viewer = __webpack_require__(1025);

var _Viewer2 = _interopRequireDefault(_Viewer);

var _reactContenteditable = __webpack_require__(1040);

var _reactContenteditable2 = _interopRequireDefault(_reactContenteditable);

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

var _reactBootstrap = __webpack_require__(376);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Markup2DExtension = function (_MultiModelExtensionB) {
  (0, _inherits3.default)(Markup2DExtension, _MultiModelExtensionB);

  /////////////////////////////////////////////////////////////////
  // Class constructor
  //
  /////////////////////////////////////////////////////////////////
  function Markup2DExtension(viewer, options) {
    (0, _classCallCheck3.default)(this, Markup2DExtension);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Markup2DExtension.__proto__ || (0, _getPrototypeOf2.default)(Markup2DExtension)).call(this, viewer, options));

    _this.onSequenceDeleted = _this.onSequenceDeleted.bind(_this);
    _this.onStateDeleted = _this.onStateDeleted.bind(_this);
    _this.onStateToggled = _this.onStateToggled.bind(_this);
    _this.renderTitle = _this.renderTitle.bind(_this);

    _this.react = options.react;
    return _this;
  }

  /////////////////////////////////////////////////////////
  // Load callback
  //
  /////////////////////////////////////////////////////////


  (0, _createClass3.default)(Markup2DExtension, [{
    key: 'load',
    value: function load() {
      var _this2 = this;

      this.react.setState({

        markupsMode: { name: 'Disabled', id: 'markupModeDisabled' },
        modes: [{ name: 'Disabled', id: 'markupsModeDisabled' }, { name: 'View Markups', id: 'markupsModeView' }, { name: 'Edit Markups', id: 'markupsModeEdit' }],
        configManager: null,
        markupsCore: null,
        showLoader: true,
        markupsUi: null

      }).then((0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var markupsCore, markupsUi, configManagerReactOptions, configManager;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this2.viewer.loadExtension('Autodesk.Viewing.MarkupsCore');

              case 2:
                markupsCore = _context.sent;
                _context.next = 5;
                return _this2.viewer.loadExtension('Autodesk.MarkupsUi', {
                  markupsCore: markupsCore
                });

              case 5:
                markupsUi = _context.sent;


                markupsUi.panel.addVisibilityListener(function (show) {

                  if (!show) {

                    _this2.onEditMarkupsClosed();
                  }
                });

                configManagerReactOptions = {
                  pushRenderExtension: function pushRenderExtension() {
                    return _promise2.default.resolve();
                  },
                  popRenderExtension: function popRenderExtension() {
                    return _promise2.default.resolve();
                  }
                };
                _context.next = 10;
                return _this2.viewer.loadDynamicExtension('Viewing.Extension.ConfigManager', {
                  emptyStateNameCaption: 'Layer Name ...',
                  react: configManagerReactOptions,
                  restoreImmediate: true,
                  itemToggling: true,
                  disabled: true
                });

              case 10:
                configManager = _context.sent;


                configManager.on('sequence.deleted', _this2.onSequenceDeleted);

                configManager.on('state.toggled', _this2.onStateToggled);

                configManager.on('state.deleted', _this2.onStateDeleted);

                _this2.react.setState({
                  showLoader: false,
                  configManager: configManager,
                  markupsCore: markupsCore,
                  markupsUi: markupsUi
                });

                _this2.react.pushRenderExtension(_this2);

              case 16:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      })));

      console.log('Viewing.Extension.Markup2D loaded');

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

      console.log('Viewing.Extension.Markup2D unloaded');

      (0, _get3.default)(Markup2DExtension.prototype.__proto__ || (0, _getPrototypeOf2.default)(Markup2DExtension.prototype), 'unload', this).call(this);

      return true;
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'onModelRootLoaded',
    value: function onModelRootLoaded(event) {

      var nav = this.viewer.navigation;

      nav.toPerspective();

      this.viewer.autocam.setHomeViewFrom(nav.getCamera());

      this.options.loader.show(false);
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'setMarkupsMode',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(markupsMode) {
        var _react$getState, configManager, markupsCore, markupsUi, _configManager$react$, items;

        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _react$getState = this.react.getState(), configManager = _react$getState.configManager, markupsCore = _react$getState.markupsCore, markupsUi = _react$getState.markupsUi;
                _context2.next = 3;
                return this.react.setState({
                  markupsMode: markupsMode
                });

              case 3:
                _context2.t0 = markupsMode.id;
                _context2.next = _context2.t0 === 'markupsModeDisabled' ? 6 : _context2.t0 === 'markupsModeView' ? 12 : _context2.t0 === 'markupsModeEdit' ? 17 : 22;
                break;

              case 6:
                _configManager$react$ = configManager.react.getState(), items = _configManager$react$.items;
                _context2.next = 9;
                return configManager.react.setState({
                  items: items.map(function (item) {
                    return (0, _assign2.default)({}, item, {
                      active: false
                    });
                  }),
                  stateSelection: true,
                  stateCreation: true,
                  disabled: true
                });

              case 9:
                markupsUi.panel.setVisible(false);
                markupsCore.hide();
                return _context2.abrupt('break', 22);

              case 12:
                _context2.next = 14;
                return configManager.react.setState({
                  stateSelection: true,
                  stateCreation: false,
                  disabled: false
                });

              case 14:
                markupsUi.panel.setVisible(false);
                markupsCore.show();
                return _context2.abrupt('break', 22);

              case 17:
                _context2.next = 19;
                return configManager.react.setState({
                  stateSelection: false,
                  stateCreation: true,
                  disabled: false
                });

              case 19:
                markupsUi.panel.setVisible(true);
                markupsCore.show();
                return _context2.abrupt('break', 22);

              case 22:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function setMarkupsMode(_x) {
        return _ref2.apply(this, arguments);
      }

      return setMarkupsMode;
    }()

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'onEditMarkupsClosed',
    value: function onEditMarkupsClosed() {
      var _react$getState2 = this.react.getState(),
          markupsMode = _react$getState2.markupsMode;

      if (markupsMode.id === 'markupsModeEdit') {

        this.setMarkupsMode({
          id: 'markupsModeView',
          name: 'View Markups'
        });
      }
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
      var _react$getState3 = this.react.getState(),
          markupsCore = _react$getState3.markupsCore,
          markupsMode = _react$getState3.markupsMode;

      if (markupsMode.id === 'markupsModeEdit') {

        viewerState.Markup2D = {
          data: markupsCore.generateData()
        };
      }
    }

    /////////////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////////////
    //restoreState (viewerState) {
    //
    //  if (viewerState.Markup2D) {
    //
    //    const {markupsCore} = this.react.getState()
    //
    //    const onStateRestored = () => {
    //
    //      //markupsCore.show()
    //
    //      this.viewer.removeEventListener(
    //        Autodesk.Viewing.VIEWER_STATE_RESTORED_EVENT,
    //        onStateRestored)
    //    }
    //
    //    this.viewer.addEventListener(
    //      Autodesk.Viewing.VIEWER_STATE_RESTORED_EVENT,
    //      onStateRestored)
    //
    //    //markupsCore.hide()
    //  }
    //}

    /////////////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////////////

  }, {
    key: 'onSequenceDeleted',
    value: function onSequenceDeleted(sequence) {
      var _react$getState4 = this.react.getState(),
          markupsCore = _react$getState4.markupsCore;

      sequence.stateIds.forEach(function (id) {

        markupsCore.unloadMarkups(id);
      });
    }

    /////////////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////////////

  }, {
    key: 'onStateDeleted',
    value: function onStateDeleted(stateId) {
      var _react$getState5 = this.react.getState(),
          markupsCore = _react$getState5.markupsCore;

      markupsCore.unloadMarkups(stateId);
    }

    /////////////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////////////

  }, {
    key: 'onStateToggled',
    value: function onStateToggled(viewerState) {

      if (viewerState.Markup2D) {
        var _react$getState6 = this.react.getState(),
            markupsCore = _react$getState6.markupsCore;

        var data = viewerState.Markup2D.data;


        viewerState.active ? markupsCore.loadMarkups(data, viewerState.id) : markupsCore.unloadMarkups(viewerState.id);
      }
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'setDocking',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(docked) {
        var id;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                id = Markup2DExtension.ExtensionId;

                if (!docked) {
                  _context3.next = 7;
                  break;
                }

                _context3.next = 4;
                return this.react.popRenderExtension(id);

              case 4:

                this.react.pushViewerPanel(this, {
                  height: 250,
                  width: 350
                });

                _context3.next = 10;
                break;

              case 7:
                _context3.next = 9;
                return this.react.popViewerPanel(id);

              case 9:

                this.react.pushRenderExtension(this);

              case 10:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function setDocking(_x2) {
        return _ref3.apply(this, arguments);
      }

      return setDocking;
    }()

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'renderTitle',
    value: function renderTitle() {
      var _this3 = this;

      var state = this.react.getState();

      var menuItems = state.modes.map(function (item) {
        return _react2.default.createElement(
          _reactBootstrap.MenuItem,
          { eventKey: item.id, key: item.id,
            onClick: function onClick() {
              _this3.setMarkupsMode(item);
            } },
          item.name
        );
      });

      return _react2.default.createElement(
        'div',
        { className: 'title' },
        _react2.default.createElement(
          'label',
          null,
          'Markups 2D'
        ),
        _react2.default.createElement(
          _reactBootstrap.DropdownButton,
          {
            title: "Mode: " + state.markupsMode.name,
            key: 'markup-2d-dropdown',
            id: 'markup-2d-dropdown' },
          menuItems
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
      var _react$getState7 = this.react.getState(),
          configManager = _react$getState7.configManager,
          showLoader = _react$getState7.showLoader;

      var opts = {
        showTitle: false
      };

      return _react2.default.createElement(
        'div',
        { className: 'content' },
        _react2.default.createElement(_Loader.ReactLoader, { show: showLoader }),
        configManager && configManager.render(opts)
      );
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'render',
    value: function render(opts) {
      var _this4 = this;

      return _react2.default.createElement(
        _WidgetContainer2.default,
        {
          renderTitle: function renderTitle() {
            return _this4.renderTitle(opts.docked);
          },
          showTitle: opts.showTitle,
          className: this.className },
        this.renderContent()
      );
    }
  }, {
    key: 'className',
    get: function get() {

      return 'markup-2d';
    }

    /////////////////////////////////////////////////////////
    // Extension Id
    //
    /////////////////////////////////////////////////////////

  }], [{
    key: 'ExtensionId',
    get: function get() {

      return 'Viewing.Extension.Markup2D';
    }
  }]);
  return Markup2DExtension;
}(_Viewer2.default); /////////////////////////////////////////////////////////////////
// Markup2D Viewer Extension
// By Philippe Leefsma, Autodesk Inc, August 2017
//
/////////////////////////////////////////////////////////////////


Autodesk.Viewing.theExtensionManager.registerExtension(Markup2DExtension.ExtensionId, Markup2DExtension);

exports.default = 'Viewing.Extension.Markup2D';

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Viewing.Extension.Markup2D.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1705:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

(function () {

    var namespace = AutodeskNamespace('Autodesk.Markups.Ui');

    var Utils = namespace.Utils,
        toList = Utils.toList;

    var clearButtonGroup = function clearButtonGroup(groupingElement) {
        var buttons = groupingElement.querySelectorAll('.active');
        toList(buttons).map(function (btn) {
            btn.classList.remove('active');
        });
    };

    function ColorPicker(element) {
        this.root = element;

        this.render();
        this.handleUIEvents();
        this.selectedColor = null;

        Object.defineProperty(this, 'value', {
            get: function get() {
                return this.selectedColor;
            },
            set: function set(val) {
                if (this.selectedColor === val) return;

                this.selectedColor = val;

                clearButtonGroup(this.root);
                //set the active class on the element of the color selected
                var element = this.root.querySelector('[data-value="' + val + '"]');
                element.classList.add('active');
            }
        });

        window.colorPicker = this;
    }

    var proto = ColorPicker.prototype;

    proto.render = function () {
        var componentHTML = '' + '<ul class="color-picker-pallete">' + '</ul>';
        this.root.innerHTML = componentHTML;
    };

    proto.on = function (eventName, selector, callback) {
        this.root.addEventListener(eventName, function (event) {
            var target = event.target;
            if (Utils.matchesSelector(target, selector)) callback(event);
        });
    };

    proto.handleUIEvents = function () {
        this.on('click', '.color-picker-item', function (event) {
            var target = event.target;
            this.value = target.getAttribute('data-value');

            this.root.dispatchEvent(new CustomEvent('change', {
                bubbles: true,
                detail: {
                    source: this
                }
            }));
        }.bind(this));
    };

    proto.setOptions = function (colorsList) {
        var colors = colorsList;
        var items = colors.map(function (color) {
            var selected = color.value === this.selectedColor;
            var markup = '' + '<li>' + '<div ' + 'class="color-picker-item ' + (selected ? 'active' : '') + '" ' + 'style="background-color: ' + color.value + '" ' + 'data-value="' + color.value + '"></div>' + '</li>';
            return markup;
        }.bind(this));

        var ul = this.root.querySelector('ul');
        ul.innerHTML = items.join('');
    };

    namespace.ColorPicker = ColorPicker;
})();

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "MarkupsColorPicker.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1706:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

var _create = __webpack_require__(384);

var _create2 = _interopRequireDefault(_create);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {

  var namespace = AutodeskNamespace('Autodesk.Markups.Ui');
  var coreNamespace = AutodeskNamespace('Autodesk.Viewing.Extensions.Markups.Core');
  var utilsNamespace = AutodeskNamespace('Autodesk.Viewing.Extensions.Markups.Core.Utils');

  var Utils = namespace.Utils,
      toList = Utils.toList,
      toTitleCase = Utils.toTitleCase,
      getMarkupType = Utils.getMarkupType;

  var StyleControlFactory = namespace.StyleControlFactory;

  var convertToStyleValue = function convertToStyleValue(value) {
    var output = value;
    //only strings need conversion
    if (typeof value === 'string') {
      var potentialNumber = new Number(value);
      var isNumber = !isNaN(potentialNumber);
      if (isNumber) {
        //its a number, return the primitive value
        //not the object wrapper
        output = potentialNumber.valueOf();
      } else {
        //not a number, could it be a boolean?
        if (value === 'true' || value === 'false') {
          output = value === 'true';
        }
      }
    }
    return output;
  };

  function MarkupsPanel(viewer, markupsCore) {

    this.viewer = viewer;
    this.markupsCore = markupsCore;
    Autodesk.Viewing.UI.DockingPanel.call(this, viewer.container, 'markup-panel', 'Markup Editor', null);

    //these styles are overriden by the dockRight option but
    //they are required so the panel displays correctly
    this.container.style.top = '10px';
    this.container.style.left = '10px';
    this.container.style.width = '275px';
    this.container.style.height = '400px';
    //this.container.dockRight = true;

    this.render();
    this.handlePanelEvents();
    this.handleUIEvents();
    this.handleCoreEvents();
  }

  MarkupsPanel.prototype = (0, _create2.default)(Autodesk.Viewing.UI.DockingPanel.prototype);
  Autodesk.Viewing.Extensions.ViewerPanelMixin.call(MarkupsPanel.prototype);

  var proto = MarkupsPanel.prototype;

  proto.getNames = function () {
    return ['markups-panel'];
  };

  proto.getName = function () {
    return this.getNames()[0];
  };

  proto.render = function () {
    var componentHTML = '' + '<div class="markups-panel-content">' + '<div class="edit-tools">' + '<div class="markup-tools" data-button-group>' + '<div class="viewer-actions">' + '<button data-viewer-tool="dolly" class="adsk-button-icon adsk-icon-zoom"></button>' + '<button data-viewer-tool="pan" class="adsk-button-icon adsk-icon-pan"></button>' + '</div>' + '<div class="vertical-seperator">&nbsp;</div>' + '<div class="markup-actions">' + '<button data-annotation-action="undo">Undo</button>' + '<button data-annotation-action="redo">Redo</button>' + '<button data-annotation-action="delete">Delete</button>' + '</div>' + '<div class="markup-buttons">\n      <button id="markup-arrow-button" data-annotation-type="arrow">\n        <div id="markup-arrow"/>\n      </button>\n      <button id="markup-label-button" data-annotation-type="text">\n        <div id="markup-label"/>\n      </button>\n      <button id="markup-rectangle-button" data-annotation-type="rectangle">\n        <div id="markup-rectangle"/>\n      </button>\n      <button id="markup-circle-button" data-annotation-type="circle">\n        <div id="markup-circle"/>\n      </button>\n      <button id="markup-cloud-button" data-annotation-type="cloud">\n        <div id="markup-cloud"/>\n      </button>\n      <button id="markup-freehand-button" data-annotation-type="freehand">\n        <div id="markup-freehand"/>\n      </button>\n      ' + '</div>' + '</div>' + '</div>' + '<hr />' + '<div class="markup-properties">' + '<div>' + '<strong>Stroke</strong>' + '<label><select data-markup-style="stroke-width"></select></label>' + '<br />' + '<label><div data-markup-style="stroke-color"></div></label>' + '<label><select data-markup-style="stroke-opacity"></select></label>' + '<hr />' + '</div>' + '<div>' + '<strong>Fill</strong>' + '<br />' + '<label><div data-markup-style="fill-color"></div></label>' + '<label><select data-markup-style="fill-opacity"></select></label>' + '<hr />' + '</div>' + '<div>' + '<strong>Font</strong>' + '<label><select data-markup-style="font-size"></select></label>' + '<button data-font="bold" data-markup-style="font-weight">B</button>' + '<button data-font="italic" data-markup-style="font-style">I</button>' + '<label>Background Color: <select data-markup-style="background-color"></select></label>' + '<br />' + '<label><select data-markup-style="font-family"></select></label>' + '</div>' + '</div>' + '<div class="panel-actions">' + '<button data-panel-action="clear">Clear</button>' + '<button data-panel-action="finish">Close</button>' + '</div>' + '</div>';
    this.createScrollContainer({});
    this.scrollContainer.innerHTML = componentHTML;
    this.btnUndo = this.scrollContainer.querySelector('[data-annotation-action="undo"]');
    this.btnRedo = this.scrollContainer.querySelector('[data-annotation-action="redo"]');
    this.ddAnnotationFont = this.scrollContainer.querySelector('[data-markup-style="font-family"]');

    //get all the style inputs and create a style controller for each one
    this.styleControls = {};
    var styleElements = this.scrollContainer.querySelectorAll('[data-markup-style]');
    toList(styleElements).map(function (element) {
      var style = element.getAttribute('data-markup-style');
      this.styleControls[style] = StyleControlFactory.create(element);
    }.bind(this));
  };

  var clearButtonGroup = function clearButtonGroup(groupingElements) {
    var containers = [];
    if (groupingElements instanceof HTMLElement) containers = [groupingElements];else containers = toList(groupingElements);

    containers.map(function (c) {
      var buttons = c.querySelectorAll('button.active');
      toList(buttons).map(function (btn) {
        btn.classList.remove('active');
      });
    });
  };

  proto.getAnnotationButton = function (type) {
    var selector = '[data-annotation-type="' + type + '"]';
    return this.container.querySelector(selector);
  };

  proto.selectDefaultAnnotation = function () {
    var def = this.getAnnotationButton('arrow');
    this.switchEditMode('arrow');
    this.selectAnnotationButton(def);
  };

  proto.engageEditMode = function (enabled) {
    var markupsCore = this.markupsCore;
    if (enabled) {
      markupsCore.enterEditMode();
      this.selectDefaultAnnotation();
    } else {
      markupsCore.leaveEditMode();
    }
  };

  proto.handlePanelEvents = function () {
    this.addVisibilityListener(this.engageEditMode.bind(this));
  };

  proto.selectAnnotationButton = function (element, options) {
    var annotationType = element.getAttribute('data-annotation-type');
    //clear the button group this button belongs to
    clearButtonGroup(this.container.querySelectorAll('.viewer-actions, .markup-buttons'));
    element.classList.add('active');

    activateApplicableControls.bind(this)(options);
    this.resizeToContent();
  };

  var displayStyleInput = function displayStyleInput(element) {
    if (Utils.matchesSelector(element.parentElement, 'label')) {
      element.parentElement.style.display = 'inline-block';
    } else {
      element.style.display = 'inline-block';
    }
  };

  var hideStyleInput = function hideStyleInput(element) {
    if (Utils.matchesSelector(element.parentElement, 'label')) {
      //when the control is inside a label, hide
      //the label instead
      element.parentElement.style.display = 'none';
    } else {
      element.style.display = 'none';
    }
  };

  proto.getStyleInputs = function () {
    //get all the style controls
    var controls = this.container.querySelectorAll('[data-markup-style]');
    return toList(controls);
  };

  proto.hideStyleInputs = function () {
    this.getStyleInputs().map(hideStyleInput);
  };

  var activateApplicableControls = function activateApplicableControls() {

    var markupsCore = this.viewer.getExtension('Autodesk.Viewing.MarkupsCore');

    var currentStyles = this.markupsCore.getStyle();
    var defaultValues = utilsNamespace.getStyleDefaultValues(currentStyles, markupsCore);
    this.hideStyleInputs();

    //display only the controls that apply to this given edit mode
    for (var activeStyle in defaultValues) {
      var styleSettings = defaultValues[activeStyle];
      var styleElement = this.container.querySelector('[data-markup-style="' + activeStyle + '"]');
      var styleControl;

      //when a style control for the given style isn't found
      //ignore it and just move on
      if (!styleElement) {
        continue;
      }

      //get the style control associated with this style
      //and update its option
      styleControl = this.styleControls[activeStyle];

      styleSettings.values = styleSettings.values.map(function (v) {
        return {
          title: v.name,
          value: v.value,
          //the drop down list needs to these additional attributes
          attrs: {
            value: v.value,
            style: 'font-family: "' + v.value + '"'
          }
        };
      });

      styleControl.setOptions(styleSettings.values);
      displayStyleInput(styleElement);

      styleControl.value = currentStyles[activeStyle] || styleSettings.values[styleSettings['default']].value;
    }

    //the markup styles are grouped together by the style which they modify(fill, stroke, font)
    //iterate through each group
    toList(this.container.querySelectorAll('.markup-properties > div')).map(function (div) {
      //hide the section container
      div.style.display = 'none';
      //iterate through all immediate button and labels, which either
      //are the control are contain the contro
      toList(div.querySelectorAll('label, button')).map(function (control) {
        //if any control is visible
        if (control.style.display !== 'none') {
          //display the section
          div.style.display = 'block';
        }
      });
    });
  };

  proto.setViewerTool = function (toolName) {
    this.viewer.setActiveNavigationTool(toolName);
    this.markupsCore.allowNavigation(!!toolName);
  };

  proto.switchEditMode = function (type) {
    var className = 'EditMode' + toTitleCase(type);
    var editMode = new Autodesk.Viewing.Extensions.Markups.Core[className](this.markupsCore);
    this.markupsCore.changeEditMode(editMode);
  };

  proto.handleUIEvents = function () {
    var self = this;

    var selectAnnotation = function selectAnnotation(event) {
      //figure out what annotation type was selected
      var target = event.target;
      var annotationType = target.getAttribute('data-annotation-type');

      //disable any tool that may be selected
      self.setViewerTool(null);
      //switch to the new mode
      self.switchEditMode(annotationType);
      //reflect the change in edit mode on the panel
      self.selectAnnotationButton(target);
    };

    var selectFontStyle = function selectFontStyle(event) {
      var target = event.target;
      var parent = target.parentElement;

      target.classList.toggle('active');
      target.value = target.classList.contains('active');
      //trigger a change event
      target.dispatchEvent(new Event('change', { bubbles: true }));
    };

    //helper function to facilate the use of event delegation
    var on = function on(eventName, selector, callback) {
      self.container.addEventListener(eventName, function (event) {
        var target = event.target;
        if (Utils.matchesSelector(target, selector)) callback(event);
      });
    };

    on('click', '[data-annotation-type]', selectAnnotation);
    on('click', 'button[data-markup-style]', selectFontStyle);
    on('click', '[data-panel-action="finish"]', function () {
      //hide the panel
      self.setVisible(false);
    });

    on('click', '[data-viewer-tool]', function (event) {
      var target = event.target;
      //clear the button group this button belongs to
      clearButtonGroup(self.container.querySelectorAll('.viewer-actions, .markup-buttons'));

      //toggle the active state of the toolButton clicked
      target.classList.toggle('active');

      //figure out what tool was clicked
      var actionType = target.getAttribute('data-viewer-tool');
      self.setViewerTool(actionType);
    });

    on('click', '[data-annotation-action="delete"]', function (event) {
      var selectedAnnotation = self.markupsCore.getSelection();
      if (selectedAnnotation) self.markupsCore.deleteMarkup(selectedAnnotation);
    });

    on('click', '[data-panel-action="clear"]', function (event) {
      self.markupsCore.clear();
    });

    this.btnUndo.addEventListener('click', function (event) {
      if (this.markupsCore.isUndoStackEmpty()) return;
      this.markupsCore.undo();
    }.bind(this));

    this.btnRedo.addEventListener('click', function (event) {
      if (this.markupsCore.isRedoStackEmpty()) return;
      this.markupsCore.redo();
    }.bind(this));

    var applySelectedFontFamily = function applySelectedFontFamily(event) {
      var target = event.target;
      var selection = target.options[target.selectedIndex].value;
      target.style.fontFamily = selection;
    };
    this.ddAnnotationFont.addEventListener('change', applySelectedFontFamily);

    var applyStyleChangeToMarkup = function (event) {

      var target = event.target;
      var style = target.getAttribute('data-markup-style');
      var value = event.detail && event.detail.source.value || target.value;
      var updatedStyle = {};
      updatedStyle[style] = convertToStyleValue(value);
      this.markupsCore.setStyle(updatedStyle);
    }.bind(this);

    //listen for change events on the elements/controls
    //that control the markup style
    on('change', '[data-markup-style]', applyStyleChangeToMarkup);
  };

  proto.getContentSize = function getContentSize() {
    return {
      height: this.container.querySelector('.markups-panel-content').offsetHeight + 55,
      width: this.container.querySelector('.markups-panel-content').offsetWidth
    };
  };

  proto.handleCoreEvents = function () {
    this.markupsCore.addEventListener(coreNamespace.EVENT_HISTORY_CHANGED, function () {
      var emptyUndo = this.markupsCore.isUndoStackEmpty();
      var emptyRedo = this.markupsCore.isRedoStackEmpty();
      this.btnUndo.classList[emptyUndo ? 'remove' : 'add']('active');
      this.btnRedo.classList[emptyRedo ? 'remove' : 'add']('active');
    }.bind(this));

    this.markupsCore.addEventListener(coreNamespace.EVENT_MARKUP_SELECTED, function (event) {
      var target = event.target;
      var markupType = getMarkupType(target);
      var markupButton = this.getAnnotationButton(markupType);
      this.selectAnnotationButton(markupButton);
      this.container.querySelector('[data-annotation-action="delete"]').classList.add('active');
    }.bind(this));

    this.markupsCore.addEventListener(coreNamespace.EVENT_MARKUP_DESELECT, function (event) {
      this.container.querySelector('[data-annotation-action="delete"]').classList.remove('active');
    }.bind(this));
  };

  namespace.MarkupsPanel = MarkupsPanel;
})();

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "MarkupsPanel.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1707:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

(function () {

    var namespace = AutodeskNamespace('Autodesk.Markups.Ui');

    var ColorPicker = namespace.ColorPicker,
        DropDown = namespace.DropDown,
        ToggleButton = namespace.ToggleButton;

    namespace.StyleControlFactory = {
        create: function create(element) {
            var style = element.getAttribute('data-markup-style');
            var styleControl;
            //NOTE: this check will have to get more 
            //      specific if more custom style inputs are needed
            if (element instanceof HTMLDivElement) {
                styleControl = new ColorPicker(element);
            } else if (element instanceof HTMLSelectElement) {
                styleControl = new DropDown(element);
            } else if (element instanceof HTMLButtonElement) {
                styleControl = new ToggleButton(element);
            }
            return styleControl;
        }
    };
})();

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "MarkupsStyleControlFactory.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1708:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

(function () {

    var namespace = AutodeskNamespace('Autodesk.Markups.Ui');
    var coreNamespace = AutodeskNamespace('Autodesk.Markups.Core');
    var utilsNamespace = AutodeskNamespace('Autodesk.Markups.Core.Utils');

    var Utils = namespace.Utils,
        toList = Utils.toList,
        toTitleCase = Utils.toTitleCase,
        updateDropDownOptions = Utils.updateDropDownOptions;

    function DropDown(element) {
        this.root = element;
        Object.defineProperty(this, 'value', {
            get: function get() {
                return this.root.value;
            },
            set: function set(val) {
                this.root.value = val;
            }
        });
    }

    var proto = DropDown.prototype;

    proto.setOptions = function (options) {
        updateDropDownOptions(this.root, options);
    };

    namespace.DropDown = DropDown;
})();

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "MarkupsStyleDropdown.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1709:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

(function () {

    var namespace = AutodeskNamespace('Autodesk.Markups.Ui');

    function ToggleButton(element) {
        this.root = element;
        Object.defineProperty(this, 'value', {
            get: function get() {
                return this.root.value;
            },
            set: function set(val) {
                this.root.value = val;
            }
        });
    }

    var proto = ToggleButton.prototype;

    proto.setOptions = function (options) {
        //nothing to do
        //it's either true or false, on or off
    };

    namespace.ToggleButton = ToggleButton;
})();

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "MarkupsStyleToggleButton.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1710:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

var _create = __webpack_require__(384);

var _create2 = _interopRequireDefault(_create);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {

  var EXTENSION_NAME = 'Autodesk.MarkupsUi';
  var namespace = AutodeskNamespace('Autodesk.Markups.Ui');

  function MarkupsUi(viewer, options) {

    Autodesk.Viewing.Extension.call(this, viewer, options);

    this.markupsCore = options.markupsCore;

    this.options = options;

    this.viewer = viewer;
  }

  MarkupsUi.prototype = (0, _create2.default)(Autodesk.Viewing.Extension.prototype);
  MarkupsUi.prototype.constructor = MarkupsUi;
  var proto = MarkupsUi.prototype;

  var Button = Autodesk.Viewing.UI.Button,
      ACTIVE = Button.State.ACTIVE,
      INACTIVE = Button.State.INACTIVE;

  function createMarkupButton() {
    var btn = new Button("toolbar-markupTool");
    btn.setToolTip("Markup");
    btn.setIcon("adsk-icon-markup");
    btn.onClick = function () {
      var state = btn.getState();
      btn.setState(state === INACTIVE ? ACTIVE : INACTIVE);
    };
    return btn;
  }

  proto.load = function () {
    // TODO: Even if the toolController is missing, the viewer may create it later and
    // notify consumers (like us) through an event
    if (!this.viewer.toolController) {
      return false;
    }

    this.panel = new Autodesk.Markups.Ui.MarkupsPanel(this.viewer, this.markupsCore);

    this.viewer.addPanel(this.panel);

    if (this.options.showControl) {
      this.createUI();
    }

    return true;
  };

  proto.unload = function () {
    return true;
  };

  proto.createUI = function () {

    var viewer = this.viewer;

    this.markupToolButton = createMarkupButton();

    var modelTools = viewer.getToolbar(true).getControl(Autodesk.Viewing.TOOLBAR.MODELTOOLSID);

    this.panel.addVisibilityListener(function (show) {
      this.markupToolButton.setState(show ? ACTIVE : INACTIVE);
    }.bind(this));

    this.onMarkupButtonStateChange = function (e) {
      this.panel.setVisible(e.state === ACTIVE);
    };

    this.markupToolButton.addEventListener(Button.Event.STATE_CHANGED, this.onMarkupButtonStateChange);

    modelTools.addControl(this.markupToolButton, { index: 0 });
  };

  Autodesk.Viewing.theExtensionManager.registerExtension(EXTENSION_NAME, MarkupsUi);

  namespace.MarkupsUi = MarkupsUi;
})();

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "MarkupsUi.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1711:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

(function () {

    var coreNamespace = AutodeskNamespace('Autodesk.Viewing.Extensions.Markups.Core');
    var namespace = AutodeskNamespace('Autodesk.Markups.Ui');

    var Utils = {
        updateDropDownOptions: function updateDropDownOptions(element, items) {
            if (!(element instanceof HTMLSelectElement)) return;

            //clear out the previous options
            element.innerHTML = '';

            var docFrag = document.createDocumentFragment();
            items.map(function (item) {
                var option = document.createElement('option');
                option.textContent = item.title;
                for (var attr in item.attrs) {
                    var value = item.attrs[attr];
                    option.setAttribute(attr, value);
                }
                docFrag.appendChild(option);
            });
            element.appendChild(docFrag);
        },
        toList: function toList(listLikeStructure) {
            return [].slice.apply(listLikeStructure);
        },
        toTitleCase: function toTitleCase(str) {
            return str.charAt(0).toUpperCase() + str.substring(1);
        },
        getMarkupType: function getMarkupType(annotation) {

            switch (annotation.type) {
                case coreNamespace.MARKUP_TYPE_ARROW:
                    return "arrow";
                case coreNamespace.MARKUP_TYPE_TEXT:
                    return "text";
                case coreNamespace.MARKUP_TYPE_RECTANGLE:
                    return "rectangle";
                case coreNamespace.MARKUP_TYPE_CIRCLE:
                    return "circle";
                case coreNamespace.MARKUP_TYPE_CLOUD:
                    return "cloud";
                case coreNamespace.MARKUP_TYPE_FREEHAND:
                    return "freehand";
            }
        },
        matchesSelector: function matchesSelector(domElem, selector) {
            if (domElem.matches) return domElem.matches(selector); //Un-prefixed
            if (domElem.msMatchesSelector) return domElem.msMatchesSelector(selector); //IE
            if (domElem.mozMatchesSelector) return domElem.mozMatchesSelector(selector); //Firefox (Gecko)
            if (domElem.webkitMatchesSelector) return domElem.webkitMatchesSelector(selector); // Opera, Safari, Chrome
            return false;
        }
    };

    namespace.Utils = Utils;
})();

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "MarkupsUiUtils.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1712:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, jQuery) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

"use strict";

var _typeof2 = __webpack_require__(99);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Spectrum Colorpicker v1.5.1
// https://github.com/bgrins/spectrum
// Author: Brian Grinstead
// License: MIT

(function (window, $, undefined) {
    "use strict";

    var defaultOpts = {

        // Callbacks
        beforeShow: noop,
        move: noop,
        change: noop,
        show: noop,
        hide: noop,

        // Options
        color: false,
        flat: false,
        showInput: false,
        allowEmpty: false,
        showButtons: true,
        clickoutFiresChange: false,
        showInitial: false,
        showPalette: false,
        showPaletteOnly: false,
        hideAfterPaletteSelect: false,
        togglePaletteOnly: false,
        showSelectionPalette: true,
        localStorageKey: false,
        appendTo: "body",
        maxSelectionSize: 7,
        cancelText: "cancel",
        chooseText: "choose",
        togglePaletteMoreText: "more",
        togglePaletteLessText: "less",
        clearText: "Clear Color Selection",
        noColorSelectedText: "No Color Selected",
        preferredFormat: false,
        className: "", // Deprecated - use containerClassName and replacerClassName instead.
        containerClassName: "",
        replacerClassName: "",
        showAlpha: false,
        theme: "sp-light",
        palette: [["#ffffff", "#000000", "#ff0000", "#ff8000", "#ffff00", "#008000", "#0000ff", "#4b0082", "#9400d3"]],
        selectionPalette: [],
        disabled: false
    },
        spectrums = [],
        IE = !!/msie/i.exec(window.navigator.userAgent),
        rgbaSupport = function () {
        function contains(str, substr) {
            return !!~('' + str).indexOf(substr);
        }

        var elem = document.createElement('div');
        var style = elem.style;
        style.cssText = 'background-color:rgba(0,0,0,.5)';
        return contains(style.backgroundColor, 'rgba') || contains(style.backgroundColor, 'hsla');
    }(),
        inputTypeColorSupport = function () {
        var colorInput = $("<input type='color' value='!' />")[0];
        return colorInput.type === "color" && colorInput.value !== "!";
    }(),
        replaceInput = ["<div class='sp-replacer'>", "<div class='sp-preview'><div class='sp-preview-inner'></div></div>", "<div class='sp-dd'>&#9660;</div>", "</div>"].join(''),
        markup = function () {

        // IE does not support gradients with multiple stops, so we need to simulate
        //  that for the rainbow slider with 8 divs that each have a single gradient
        var gradientFix = "";
        if (IE) {
            for (var i = 1; i <= 6; i++) {
                gradientFix += "<div class='sp-" + i + "'></div>";
            }
        }

        return ["<div class='sp-container sp-hidden'>", "<div class='sp-palette-container'>", "<div class='sp-palette sp-thumb sp-cf'></div>", "<div class='sp-palette-button-container sp-cf'>", "<button type='button' class='sp-palette-toggle'></button>", "</div>", "</div>", "<div class='sp-picker-container'>", "<div class='sp-top sp-cf'>", "<div class='sp-fill'></div>", "<div class='sp-top-inner'>", "<div class='sp-color'>", "<div class='sp-sat'>", "<div class='sp-val'>", "<div class='sp-dragger'></div>", "</div>", "</div>", "</div>", "<div class='sp-clear sp-clear-display'>", "</div>", "<div class='sp-hue'>", "<div class='sp-slider'></div>", gradientFix, "</div>", "</div>", "<div class='sp-alpha'><div class='sp-alpha-inner'><div class='sp-alpha-handle'></div></div></div>", "</div>", "<div class='sp-input-container sp-cf'>", "<input class='sp-input' type='text' spellcheck='false'  />", "</div>", "<div class='sp-initial sp-thumb sp-cf'></div>", "<div class='sp-button-container sp-cf'>", "<a class='sp-cancel' href='#'></a>", "<button type='button' class='sp-choose'></button>", "</div>", "</div>", "</div>"].join("");
    }();

    function paletteTemplate(p, color, className, opts) {
        var html = [];
        for (var i = 0; i < p.length; i++) {
            var current = p[i];
            if (current) {
                var tiny = tinycolor(current);
                var c = tiny.toHsl().l < 0.5 ? "sp-thumb-el sp-thumb-dark" : "sp-thumb-el sp-thumb-light";
                c += tinycolor.equals(color, current) ? " sp-thumb-active" : "";
                var formattedString = tiny.toString(opts.preferredFormat || "rgb");
                var swatchStyle = rgbaSupport ? "background-color:" + tiny.toRgbString() : "filter:" + tiny.toFilter();
                html.push('<span title="' + formattedString + '" data-color="' + tiny.toRgbString() + '" class="' + c + '"><span class="sp-thumb-inner" style="' + swatchStyle + ';" /></span>');
            } else {
                var cls = 'sp-clear-display';
                html.push($('<div />').append($('<span data-color="" style="background-color:transparent;" class="' + cls + '"></span>').attr('title', opts.noColorSelectedText)).html());
            }
        }
        return "<div class='sp-cf " + className + "'>" + html.join('') + "</div>";
    }

    function hideAll() {
        for (var i = 0; i < spectrums.length; i++) {
            if (spectrums[i]) {
                spectrums[i].hide();
            }
        }
    }

    function instanceOptions(o, callbackContext) {
        var opts = $.extend({}, defaultOpts, o);
        opts.callbacks = {
            'move': bind(opts.move, callbackContext),
            'change': bind(opts.change, callbackContext),
            'show': bind(opts.show, callbackContext),
            'hide': bind(opts.hide, callbackContext),
            'beforeShow': bind(opts.beforeShow, callbackContext)
        };

        return opts;
    }

    function spectrum(element, o) {

        var opts = instanceOptions(o, element),
            flat = opts.flat,
            showSelectionPalette = opts.showSelectionPalette,
            localStorageKey = opts.localStorageKey,
            theme = opts.theme,
            callbacks = opts.callbacks,
            resize = throttle(reflow, 10),
            visible = false,
            dragWidth = 0,
            dragHeight = 0,
            dragHelperHeight = 0,
            slideHeight = 0,
            slideWidth = 0,
            alphaWidth = 0,
            alphaSlideHelperWidth = 0,
            slideHelperHeight = 0,
            currentHue = 0,
            currentSaturation = 0,
            currentValue = 0,
            currentAlpha = 1,
            palette = [],
            paletteArray = [],
            paletteLookup = {},
            selectionPalette = opts.selectionPalette.slice(0),
            maxSelectionSize = opts.maxSelectionSize,
            draggingClass = "sp-dragging",
            shiftMovementDirection = null;

        var doc = element.ownerDocument,
            body = doc.body,
            boundElement = $(element),
            disabled = false,
            container = $(markup, doc).addClass(theme),
            pickerContainer = container.find(".sp-picker-container"),
            dragger = container.find(".sp-color"),
            dragHelper = container.find(".sp-dragger"),
            slider = container.find(".sp-hue"),
            slideHelper = container.find(".sp-slider"),
            alphaSliderInner = container.find(".sp-alpha-inner"),
            alphaSlider = container.find(".sp-alpha"),
            alphaSlideHelper = container.find(".sp-alpha-handle"),
            textInput = container.find(".sp-input"),
            paletteContainer = container.find(".sp-palette"),
            initialColorContainer = container.find(".sp-initial"),
            cancelButton = container.find(".sp-cancel"),
            clearButton = container.find(".sp-clear"),
            chooseButton = container.find(".sp-choose"),
            toggleButton = container.find(".sp-palette-toggle"),
            isInput = boundElement.is("input"),
            isInputTypeColor = isInput && inputTypeColorSupport && boundElement.attr("type") === "color",
            shouldReplace = isInput && !flat,
            replacer = shouldReplace ? $(replaceInput).addClass(theme).addClass(opts.className).addClass(opts.replacerClassName) : $([]),
            offsetElement = shouldReplace ? replacer : boundElement,
            previewElement = replacer.find(".sp-preview-inner"),
            initialColor = opts.color || isInput && boundElement.val(),
            colorOnShow = false,
            preferredFormat = opts.preferredFormat,
            currentPreferredFormat = preferredFormat,
            clickoutFiresChange = !opts.showButtons || opts.clickoutFiresChange,
            isEmpty = !initialColor,
            allowEmpty = opts.allowEmpty && !isInputTypeColor;

        function applyOptions() {

            if (opts.showPaletteOnly) {
                opts.showPalette = true;
            }

            toggleButton.text(opts.showPaletteOnly ? opts.togglePaletteMoreText : opts.togglePaletteLessText);

            if (opts.palette) {
                palette = opts.palette.slice(0);
                paletteArray = $.isArray(palette[0]) ? palette : [palette];
                paletteLookup = {};
                for (var i = 0; i < paletteArray.length; i++) {
                    for (var j = 0; j < paletteArray[i].length; j++) {
                        var rgb = tinycolor(paletteArray[i][j]).toRgbString();
                        paletteLookup[rgb] = true;
                    }
                }
            }

            container.toggleClass("sp-flat", flat);
            container.toggleClass("sp-input-disabled", !opts.showInput);
            container.toggleClass("sp-alpha-enabled", opts.showAlpha);
            container.toggleClass("sp-clear-enabled", allowEmpty);
            container.toggleClass("sp-buttons-disabled", !opts.showButtons);
            container.toggleClass("sp-palette-buttons-disabled", !opts.togglePaletteOnly);
            container.toggleClass("sp-palette-disabled", !opts.showPalette);
            container.toggleClass("sp-palette-only", opts.showPaletteOnly);
            container.toggleClass("sp-initial-disabled", !opts.showInitial);
            container.addClass(opts.className).addClass(opts.containerClassName);

            reflow();
        }

        function initialize() {

            if (IE) {
                container.find("*:not(input)").attr("unselectable", "on");
            }

            applyOptions();

            if (shouldReplace) {
                boundElement.after(replacer).hide();
            }

            if (!allowEmpty) {
                clearButton.hide();
            }

            if (flat) {
                boundElement.after(container).hide();
            } else {

                var appendTo = opts.appendTo === "parent" ? boundElement.parent() : $(opts.appendTo);
                if (appendTo.length !== 1) {
                    appendTo = $("body");
                }

                appendTo.append(container);
            }

            updateSelectionPaletteFromStorage();

            offsetElement.bind("click.spectrum touchstart.spectrum", function (e) {
                if (!disabled) {
                    toggle();
                }

                e.stopPropagation();

                if (!$(e.target).is("input")) {
                    e.preventDefault();
                }
            });

            if (boundElement.is(":disabled") || opts.disabled === true) {
                disable();
            }

            // Prevent clicks from bubbling up to document.  This would cause it to be hidden.
            container.click(stopPropagation);

            // Handle user typed input
            textInput.change(setFromTextInput);
            textInput.bind("paste", function () {
                setTimeout(setFromTextInput, 1);
            });
            textInput.keydown(function (e) {
                if (e.keyCode == 13) {
                    setFromTextInput();
                }
            });

            cancelButton.text(opts.cancelText);
            cancelButton.bind("click.spectrum", function (e) {
                e.stopPropagation();
                e.preventDefault();
                revert();
                hide();
            });

            clearButton.attr("title", opts.clearText);
            clearButton.bind("click.spectrum", function (e) {
                e.stopPropagation();
                e.preventDefault();
                isEmpty = true;
                move();

                if (flat) {
                    //for the flat style, this is a change event
                    updateOriginalInput(true);
                }
            });

            chooseButton.text(opts.chooseText);
            chooseButton.bind("click.spectrum", function (e) {
                e.stopPropagation();
                e.preventDefault();

                if (isValid()) {
                    updateOriginalInput(true);
                    hide();
                }
            });

            toggleButton.text(opts.showPaletteOnly ? opts.togglePaletteMoreText : opts.togglePaletteLessText);
            toggleButton.bind("click.spectrum", function (e) {
                e.stopPropagation();
                e.preventDefault();

                opts.showPaletteOnly = !opts.showPaletteOnly;

                // To make sure the Picker area is drawn on the right, next to the
                // Palette area (and not below the palette), first move the Palette
                // to the left to make space for the picker, plus 5px extra.
                // The 'applyOptions' function puts the whole container back into place
                // and takes care of the button-text and the sp-palette-only CSS class.
                if (!opts.showPaletteOnly && !flat) {
                    container.css('left', '-=' + (pickerContainer.outerWidth(true) + 5));
                }
                applyOptions();
            });

            draggable(alphaSlider, function (dragX, dragY, e) {
                currentAlpha = dragX / alphaWidth;
                isEmpty = false;
                if (e.shiftKey) {
                    currentAlpha = Math.round(currentAlpha * 10) / 10;
                }

                move();
            }, dragStart, dragStop);

            draggable(slider, function (dragX, dragY) {
                currentHue = parseFloat(dragY / slideHeight);
                isEmpty = false;
                if (!opts.showAlpha) {
                    currentAlpha = 1;
                }
                move();
            }, dragStart, dragStop);

            draggable(dragger, function (dragX, dragY, e) {

                // shift+drag should snap the movement to either the x or y axis.
                if (!e.shiftKey) {
                    shiftMovementDirection = null;
                } else if (!shiftMovementDirection) {
                    var oldDragX = currentSaturation * dragWidth;
                    var oldDragY = dragHeight - currentValue * dragHeight;
                    var furtherFromX = Math.abs(dragX - oldDragX) > Math.abs(dragY - oldDragY);

                    shiftMovementDirection = furtherFromX ? "x" : "y";
                }

                var setSaturation = !shiftMovementDirection || shiftMovementDirection === "x";
                var setValue = !shiftMovementDirection || shiftMovementDirection === "y";

                if (setSaturation) {
                    currentSaturation = parseFloat(dragX / dragWidth);
                }
                if (setValue) {
                    currentValue = parseFloat((dragHeight - dragY) / dragHeight);
                }

                isEmpty = false;
                if (!opts.showAlpha) {
                    currentAlpha = 1;
                }

                move();
            }, dragStart, dragStop);

            if (!!initialColor) {
                _set(initialColor);

                // In case color was black - update the preview UI and set the format
                // since the set function will not run (default color is black).
                updateUI();
                currentPreferredFormat = preferredFormat || tinycolor(initialColor).format;

                addColorToSelectionPalette(initialColor);
            } else {
                updateUI();
            }

            if (flat) {
                show();
            }

            function paletteElementClick(e) {
                if (e.data && e.data.ignore) {
                    _set($(e.target).closest(".sp-thumb-el").data("color"));
                    move();
                } else {
                    _set($(e.target).closest(".sp-thumb-el").data("color"));
                    move();
                    updateOriginalInput(true);
                    if (opts.hideAfterPaletteSelect) {
                        hide();
                    }
                }

                return false;
            }

            var paletteEvent = IE ? "mousedown.spectrum" : "click.spectrum touchstart.spectrum";
            paletteContainer.delegate(".sp-thumb-el", paletteEvent, paletteElementClick);
            initialColorContainer.delegate(".sp-thumb-el:nth-child(1)", paletteEvent, { ignore: true }, paletteElementClick);
        }

        function updateSelectionPaletteFromStorage() {

            if (localStorageKey && window.localStorage) {

                // Migrate old palettes over to new format.  May want to remove this eventually.
                try {
                    var oldPalette = window.localStorage[localStorageKey].split(",#");
                    if (oldPalette.length > 1) {
                        delete window.localStorage[localStorageKey];
                        $.each(oldPalette, function (i, c) {
                            addColorToSelectionPalette(c);
                        });
                    }
                } catch (e) {}

                try {
                    selectionPalette = window.localStorage[localStorageKey].split(";");
                } catch (e) {}
            }
        }

        function addColorToSelectionPalette(color) {
            if (showSelectionPalette) {
                var rgb = tinycolor(color).toRgbString();
                if (!paletteLookup[rgb] && $.inArray(rgb, selectionPalette) === -1) {
                    selectionPalette.push(rgb);
                    while (selectionPalette.length > maxSelectionSize) {
                        selectionPalette.shift();
                    }
                }

                if (localStorageKey && window.localStorage) {
                    try {
                        window.localStorage[localStorageKey] = selectionPalette.join(";");
                    } catch (e) {}
                }
            }
        }

        function getUniqueSelectionPalette() {
            var unique = [];
            if (opts.showPalette) {
                for (var i = 0; i < selectionPalette.length; i++) {
                    var rgb = tinycolor(selectionPalette[i]).toRgbString();

                    if (!paletteLookup[rgb]) {
                        unique.push(selectionPalette[i]);
                    }
                }
            }

            return unique.reverse().slice(0, opts.maxSelectionSize);
        }

        function drawPalette() {

            var currentColor = get();

            var html = $.map(paletteArray, function (palette, i) {
                return paletteTemplate(palette, currentColor, "sp-palette-row sp-palette-row-" + i, opts);
            });

            updateSelectionPaletteFromStorage();

            if (selectionPalette) {
                html.push(paletteTemplate(getUniqueSelectionPalette(), currentColor, "sp-palette-row sp-palette-row-selection", opts));
            }

            paletteContainer.html(html.join(""));
        }

        function drawInitial() {
            if (opts.showInitial) {
                var initial = colorOnShow;
                var current = get();
                initialColorContainer.html(paletteTemplate([initial, current], current, "sp-palette-row-initial", opts));
            }
        }

        function dragStart() {
            if (dragHeight <= 0 || dragWidth <= 0 || slideHeight <= 0) {
                reflow();
            }
            container.addClass(draggingClass);
            shiftMovementDirection = null;
            boundElement.trigger('dragstart.spectrum', [get()]);
        }

        function dragStop() {
            container.removeClass(draggingClass);
            boundElement.trigger('dragstop.spectrum', [get()]);
        }

        function setFromTextInput() {

            var value = textInput.val();

            if ((value === null || value === "") && allowEmpty) {
                _set(null);
                updateOriginalInput(true);
            } else {
                var tiny = tinycolor(value);
                if (tiny.isValid()) {
                    _set(tiny);
                    updateOriginalInput(true);
                } else {
                    textInput.addClass("sp-validation-error");
                }
            }
        }

        function toggle() {
            if (visible) {
                hide();
            } else {
                show();
            }
        }

        function show() {
            var event = $.Event('beforeShow.spectrum');

            if (visible) {
                reflow();
                return;
            }

            boundElement.trigger(event, [get()]);

            if (callbacks.beforeShow(get()) === false || event.isDefaultPrevented()) {
                return;
            }

            hideAll();
            visible = true;

            $(doc).bind("click.spectrum", clickout);
            $(window).bind("resize.spectrum", resize);
            replacer.addClass("sp-active");
            container.removeClass("sp-hidden");

            reflow();
            updateUI();

            colorOnShow = get();

            drawInitial();
            callbacks.show(colorOnShow);
            boundElement.trigger('show.spectrum', [colorOnShow]);
        }

        function clickout(e) {
            // Return on right click.
            if (e && e.type == "click" && e.button == 2) {
                return;
            }

            if (clickoutFiresChange) {
                updateOriginalInput(true);
            } else {
                revert();
            }
            hide();
        }

        function hide() {
            // Return if hiding is unnecessary
            if (!visible || flat) {
                return;
            }
            visible = false;

            $(doc).unbind("click.spectrum", clickout);
            $(window).unbind("resize.spectrum", resize);

            replacer.removeClass("sp-active");
            container.addClass("sp-hidden");

            callbacks.hide(get());
            boundElement.trigger('hide.spectrum', [get()]);
        }

        function revert() {
            _set(colorOnShow, true);
        }

        function _set(color, ignoreFormatChange) {
            if (tinycolor.equals(color, get())) {
                // Update UI just in case a validation error needs
                // to be cleared.
                updateUI();
                return;
            }

            var newColor, newHsv;
            if (!color && allowEmpty) {
                isEmpty = true;
            } else {
                isEmpty = false;
                newColor = tinycolor(color);
                newHsv = newColor.toHsv();

                currentHue = newHsv.h % 360 / 360;
                currentSaturation = newHsv.s;
                currentValue = newHsv.v;
                currentAlpha = newHsv.a;
            }
            updateUI();

            if (newColor && newColor.isValid() && !ignoreFormatChange) {
                currentPreferredFormat = preferredFormat || newColor.getFormat();
            }
        }

        function get(opts) {
            opts = opts || {};

            if (allowEmpty && isEmpty) {
                return null;
            }

            return tinycolor.fromRatio({
                h: currentHue,
                s: currentSaturation,
                v: currentValue,
                a: Math.round(currentAlpha * 100) / 100
            }, { format: opts.format || currentPreferredFormat });
        }

        function isValid() {
            return !textInput.hasClass("sp-validation-error");
        }

        function move() {
            updateUI();

            callbacks.move(get());
            boundElement.trigger('move.spectrum', [get()]);
        }

        function updateUI() {

            textInput.removeClass("sp-validation-error");

            updateHelperLocations();

            // Update dragger background color (gradients take care of saturation and value).
            var flatColor = tinycolor.fromRatio({ h: currentHue, s: 1, v: 1 });
            dragger.css("background-color", flatColor.toHexString());

            // Get a format that alpha will be included in (hex and names ignore alpha)
            var format = currentPreferredFormat;
            if (currentAlpha < 1 && !(currentAlpha === 0 && format === "name")) {
                if (format === "hex" || format === "hex3" || format === "hex6" || format === "name") {
                    format = "rgb";
                }
            }

            var realColor = get({ format: format }),
                displayColor = '';

            //reset background info for preview element
            previewElement.removeClass("sp-clear-display");
            previewElement.css('background-color', 'transparent');

            if (!realColor && allowEmpty) {
                // Update the replaced elements background with icon indicating no color selection
                previewElement.addClass("sp-clear-display");
            } else {
                var realHex = realColor.toHexString(),
                    realRgb = realColor.toRgbString();

                // Update the replaced elements background color (with actual selected color)
                if (rgbaSupport || realColor.alpha === 1) {
                    previewElement.css("background-color", realRgb);
                } else {
                    previewElement.css("background-color", "transparent");
                    previewElement.css("filter", realColor.toFilter());
                }

                if (opts.showAlpha) {
                    var rgb = realColor.toRgb();
                    rgb.a = 0;
                    var realAlpha = tinycolor(rgb).toRgbString();
                    var gradient = "linear-gradient(left, " + realAlpha + ", " + realHex + ")";

                    if (IE) {
                        alphaSliderInner.css("filter", tinycolor(realAlpha).toFilter({ gradientType: 1 }, realHex));
                    } else {
                        alphaSliderInner.css("background", "-webkit-" + gradient);
                        alphaSliderInner.css("background", "-moz-" + gradient);
                        alphaSliderInner.css("background", "-ms-" + gradient);
                        // Use current syntax gradient on unprefixed property.
                        alphaSliderInner.css("background", "linear-gradient(to right, " + realAlpha + ", " + realHex + ")");
                    }
                }

                displayColor = realColor.toString(format);
            }

            // Update the text entry input as it changes happen
            if (opts.showInput) {
                textInput.val(displayColor);
            }

            if (opts.showPalette) {
                drawPalette();
            }

            drawInitial();
        }

        function updateHelperLocations() {
            var s = currentSaturation;
            var v = currentValue;

            if (allowEmpty && isEmpty) {
                //if selected color is empty, hide the helpers
                alphaSlideHelper.hide();
                slideHelper.hide();
                dragHelper.hide();
            } else {
                //make sure helpers are visible
                alphaSlideHelper.show();
                slideHelper.show();
                dragHelper.show();

                // Where to show the little circle in that displays your current selected color
                var dragX = s * dragWidth;
                var dragY = dragHeight - v * dragHeight;
                dragX = Math.max(-dragHelperHeight, Math.min(dragWidth - dragHelperHeight, dragX - dragHelperHeight));
                dragY = Math.max(-dragHelperHeight, Math.min(dragHeight - dragHelperHeight, dragY - dragHelperHeight));
                dragHelper.css({
                    "top": dragY + "px",
                    "left": dragX + "px"
                });

                var alphaX = currentAlpha * alphaWidth;
                alphaSlideHelper.css({
                    "left": alphaX - alphaSlideHelperWidth / 2 + "px"
                });

                // Where to show the bar that displays your current selected hue
                var slideY = currentHue * slideHeight;
                slideHelper.css({
                    "top": slideY - slideHelperHeight + "px"
                });
            }
        }

        function updateOriginalInput(fireCallback) {
            var color = get(),
                displayColor = '',
                hasChanged = !tinycolor.equals(color, colorOnShow);

            if (color) {
                displayColor = color.toString(currentPreferredFormat);
                // Update the selection palette with the current color
                addColorToSelectionPalette(color);
            }

            if (isInput) {
                boundElement.val(displayColor);
            }

            if (fireCallback && hasChanged) {
                callbacks.change(color);
                boundElement.trigger('change', [color]);
            }
        }

        function reflow() {
            dragWidth = dragger.width();
            dragHeight = dragger.height();
            dragHelperHeight = dragHelper.height();
            slideWidth = slider.width();
            slideHeight = slider.height();
            slideHelperHeight = slideHelper.height();
            alphaWidth = alphaSlider.width();
            alphaSlideHelperWidth = alphaSlideHelper.width();

            if (!flat) {
                container.css("position", "absolute");
                container.offset(getOffset(container, offsetElement));
            }

            updateHelperLocations();

            if (opts.showPalette) {
                drawPalette();
            }

            boundElement.trigger('reflow.spectrum');
        }

        function destroy() {
            boundElement.show();
            offsetElement.unbind("click.spectrum touchstart.spectrum");
            container.remove();
            replacer.remove();
            spectrums[spect.id] = null;
        }

        function option(optionName, optionValue) {
            if (optionName === undefined) {
                return $.extend({}, opts);
            }
            if (optionValue === undefined) {
                return opts[optionName];
            }

            opts[optionName] = optionValue;
            applyOptions();
        }

        function enable() {
            disabled = false;
            boundElement.attr("disabled", false);
            offsetElement.removeClass("sp-disabled");
        }

        function disable() {
            hide();
            disabled = true;
            boundElement.attr("disabled", true);
            offsetElement.addClass("sp-disabled");
        }

        initialize();

        var spect = {
            show: show,
            hide: hide,
            toggle: toggle,
            reflow: reflow,
            option: option,
            enable: enable,
            disable: disable,
            set: function set(c) {
                _set(c);
                updateOriginalInput();
            },
            get: get,
            destroy: destroy,
            container: container
        };

        spect.id = spectrums.push(spect) - 1;

        return spect;
    }

    /**
    * checkOffset - get the offset below/above and left/right element depending on screen position
    * Thanks https://github.com/jquery/jquery-ui/blob/master/ui/jquery.ui.datepicker.js
    */
    function getOffset(picker, input) {
        var extraY = 0;
        var dpWidth = picker.outerWidth();
        var dpHeight = picker.outerHeight();
        var inputHeight = input.outerHeight();
        var doc = picker[0].ownerDocument;
        var docElem = doc.documentElement;
        var viewWidth = docElem.clientWidth + $(doc).scrollLeft();
        var viewHeight = docElem.clientHeight + $(doc).scrollTop();
        var offset = input.offset();
        offset.top += inputHeight;

        offset.left -= Math.min(offset.left, offset.left + dpWidth > viewWidth && viewWidth > dpWidth ? Math.abs(offset.left + dpWidth - viewWidth) : 0);

        offset.top -= Math.min(offset.top, offset.top + dpHeight > viewHeight && viewHeight > dpHeight ? Math.abs(dpHeight + inputHeight - extraY) : extraY);

        return offset;
    }

    /**
    * noop - do nothing
    */
    function noop() {}

    /**
    * stopPropagation - makes the code only doing this a little easier to read in line
    */
    function stopPropagation(e) {
        e.stopPropagation();
    }

    /**
    * Create a function bound to a given object
    * Thanks to underscore.js
    */
    function bind(func, obj) {
        var slice = Array.prototype.slice;
        var args = slice.call(arguments, 2);
        return function () {
            return func.apply(obj, args.concat(slice.call(arguments)));
        };
    }

    /**
    * Lightweight drag helper.  Handles containment within the element, so that
    * when dragging, the x is within [0,element.width] and y is within [0,element.height]
    */
    function draggable(element, onmove, onstart, onstop) {
        onmove = onmove || function () {};
        onstart = onstart || function () {};
        onstop = onstop || function () {};
        var doc = document;
        var dragging = false;
        var offset = {};
        var maxHeight = 0;
        var maxWidth = 0;
        var hasTouch = 'ontouchstart' in window;

        var duringDragEvents = {};
        duringDragEvents["selectstart"] = prevent;
        duringDragEvents["dragstart"] = prevent;
        duringDragEvents["touchmove mousemove"] = move;
        duringDragEvents["touchend mouseup"] = stop;

        function prevent(e) {
            if (e.stopPropagation) {
                e.stopPropagation();
            }
            if (e.preventDefault) {
                e.preventDefault();
            }
            e.returnValue = false;
        }

        function move(e) {
            if (dragging) {
                // Mouseup happened outside of window
                if (IE && doc.documentMode < 9 && !e.button) {
                    return stop();
                }

                var touches = e.originalEvent.touches;
                var pageX = touches ? touches[0].pageX : e.pageX;
                var pageY = touches ? touches[0].pageY : e.pageY;

                var dragX = Math.max(0, Math.min(pageX - offset.left, maxWidth));
                var dragY = Math.max(0, Math.min(pageY - offset.top, maxHeight));

                if (hasTouch) {
                    // Stop scrolling in iOS
                    prevent(e);
                }

                onmove.apply(element, [dragX, dragY, e]);
            }
        }

        function start(e) {
            var rightclick = e.which ? e.which == 3 : e.button == 2;

            if (!rightclick && !dragging) {
                if (onstart.apply(element, arguments) !== false) {
                    dragging = true;
                    maxHeight = $(element).height();
                    maxWidth = $(element).width();
                    offset = $(element).offset();

                    $(doc).bind(duringDragEvents);
                    $(doc.body).addClass("sp-dragging");

                    if (!hasTouch) {
                        move(e);
                    }

                    prevent(e);
                }
            }
        }

        function stop() {
            if (dragging) {
                $(doc).unbind(duringDragEvents);
                $(doc.body).removeClass("sp-dragging");
                onstop.apply(element, arguments);
            }
            dragging = false;
        }

        $(element).bind("touchstart mousedown", start);
    }

    function throttle(func, wait, debounce) {
        var timeout;
        return function () {
            var context = this,
                args = arguments;
            var throttler = function throttler() {
                timeout = null;
                func.apply(context, args);
            };
            if (debounce) clearTimeout(timeout);
            if (debounce || !timeout) timeout = setTimeout(throttler, wait);
        };
    }

    /**
    * Define a jQuery plugin
    */
    var dataID = "spectrum.id";
    $.fn.spectrum = function (opts, extra) {

        if (typeof opts == "string") {

            var returnValue = this;
            var args = Array.prototype.slice.call(arguments, 1);

            this.each(function () {
                var spect = spectrums[$(this).data(dataID)];
                if (spect) {
                    var method = spect[opts];
                    if (!method) {
                        throw new Error("Spectrum: no such method: '" + opts + "'");
                    }

                    if (opts == "get") {
                        returnValue = spect.get();
                    } else if (opts == "container") {
                        returnValue = spect.container;
                    } else if (opts == "option") {
                        returnValue = spect.option.apply(spect, args);
                    } else if (opts == "destroy") {
                        spect.destroy();
                        $(this).removeData(dataID);
                    } else {
                        method.apply(spect, args);
                    }
                }
            });

            return returnValue;
        }

        // Initializing a new instance of spectrum
        return this.spectrum("destroy").each(function () {
            var options = $.extend({}, opts, $(this).data());
            var spect = spectrum(this, options);
            $(this).data(dataID, spect.id);
        });
    };

    $.fn.spectrum.load = true;
    $.fn.spectrum.loadOpts = {};
    $.fn.spectrum.draggable = draggable;
    $.fn.spectrum.defaults = defaultOpts;

    $.spectrum = {};
    $.spectrum.localization = {};
    $.spectrum.palettes = {};

    $.fn.spectrum.processNativeColorInputs = function () {
        if (!inputTypeColorSupport) {
            $("input[type=color]").spectrum({
                preferredFormat: "hex6"
            });
        }
    };

    // TinyColor v1.0.0
    // https://github.com/bgrins/TinyColor
    // Brian Grinstead, MIT License

    (function () {

        var trimLeft = /^[\s,#]+/,
            trimRight = /\s+$/,
            tinyCounter = 0,
            math = Math,
            mathRound = math.round,
            mathMin = math.min,
            mathMax = math.max,
            mathRandom = math.random;

        var tinycolor = function tinycolor(color, opts) {

            color = color ? color : '';
            opts = opts || {};

            // If input is already a tinycolor, return itself
            if (color instanceof tinycolor) {
                return color;
            }
            // If we are called as a function, call using new instead
            if (!(this instanceof tinycolor)) {
                return new tinycolor(color, opts);
            }

            var rgb = inputToRGB(color);
            this._r = rgb.r, this._g = rgb.g, this._b = rgb.b, this._a = rgb.a, this._roundA = mathRound(100 * this._a) / 100, this._format = opts.format || rgb.format;
            this._gradientType = opts.gradientType;

            // Don't let the range of [0,255] come back in [0,1].
            // Potentially lose a little bit of precision here, but will fix issues where
            // .5 gets interpreted as half of the total, instead of half of 1
            // If it was supposed to be 128, this was already taken care of by `inputToRgb`
            if (this._r < 1) {
                this._r = mathRound(this._r);
            }
            if (this._g < 1) {
                this._g = mathRound(this._g);
            }
            if (this._b < 1) {
                this._b = mathRound(this._b);
            }

            this._ok = rgb.ok;
            this._tc_id = tinyCounter++;
        };

        tinycolor.prototype = {
            isDark: function isDark() {
                return this.getBrightness() < 128;
            },
            isLight: function isLight() {
                return !this.isDark();
            },
            isValid: function isValid() {
                return this._ok;
            },
            getFormat: function getFormat() {
                return this._format;
            },
            getAlpha: function getAlpha() {
                return this._a;
            },
            getBrightness: function getBrightness() {
                var rgb = this.toRgb();
                return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
            },
            setAlpha: function setAlpha(value) {
                this._a = boundAlpha(value);
                this._roundA = mathRound(100 * this._a) / 100;
                return this;
            },
            toHsv: function toHsv() {
                var hsv = rgbToHsv(this._r, this._g, this._b);
                return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: this._a };
            },
            toHsvString: function toHsvString() {
                var hsv = rgbToHsv(this._r, this._g, this._b);
                var h = mathRound(hsv.h * 360),
                    s = mathRound(hsv.s * 100),
                    v = mathRound(hsv.v * 100);
                return this._a == 1 ? "hsv(" + h + ", " + s + "%, " + v + "%)" : "hsva(" + h + ", " + s + "%, " + v + "%, " + this._roundA + ")";
            },
            toHsl: function toHsl() {
                var hsl = rgbToHsl(this._r, this._g, this._b);
                return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: this._a };
            },
            toHslString: function toHslString() {
                var hsl = rgbToHsl(this._r, this._g, this._b);
                var h = mathRound(hsl.h * 360),
                    s = mathRound(hsl.s * 100),
                    l = mathRound(hsl.l * 100);
                return this._a == 1 ? "hsl(" + h + ", " + s + "%, " + l + "%)" : "hsla(" + h + ", " + s + "%, " + l + "%, " + this._roundA + ")";
            },
            toHex: function toHex(allow3Char) {
                return rgbToHex(this._r, this._g, this._b, allow3Char);
            },
            toHexString: function toHexString(allow3Char) {
                return '#' + this.toHex(allow3Char);
            },
            toHex8: function toHex8() {
                return rgbaToHex(this._r, this._g, this._b, this._a);
            },
            toHex8String: function toHex8String() {
                return '#' + this.toHex8();
            },
            toRgb: function toRgb() {
                return { r: mathRound(this._r), g: mathRound(this._g), b: mathRound(this._b), a: this._a };
            },
            toRgbString: function toRgbString() {
                return this._a == 1 ? "rgb(" + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ")" : "rgba(" + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ", " + this._roundA + ")";
            },
            toPercentageRgb: function toPercentageRgb() {
                return { r: mathRound(bound01(this._r, 255) * 100) + "%", g: mathRound(bound01(this._g, 255) * 100) + "%", b: mathRound(bound01(this._b, 255) * 100) + "%", a: this._a };
            },
            toPercentageRgbString: function toPercentageRgbString() {
                return this._a == 1 ? "rgb(" + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%)" : "rgba(" + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%, " + this._roundA + ")";
            },
            toName: function toName() {
                if (this._a === 0) {
                    return "transparent";
                }

                if (this._a < 1) {
                    return false;
                }

                return hexNames[rgbToHex(this._r, this._g, this._b, true)] || false;
            },
            toFilter: function toFilter(secondColor) {
                var hex8String = '#' + rgbaToHex(this._r, this._g, this._b, this._a);
                var secondHex8String = hex8String;
                var gradientType = this._gradientType ? "GradientType = 1, " : "";

                if (secondColor) {
                    var s = tinycolor(secondColor);
                    secondHex8String = s.toHex8String();
                }

                return "progid:DXImageTransform.Microsoft.gradient(" + gradientType + "startColorstr=" + hex8String + ",endColorstr=" + secondHex8String + ")";
            },
            toString: function toString(format) {
                var formatSet = !!format;
                format = format || this._format;

                var formattedString = false;
                var hasAlpha = this._a < 1 && this._a >= 0;
                var needsAlphaFormat = !formatSet && hasAlpha && (format === "hex" || format === "hex6" || format === "hex3" || format === "name");

                if (needsAlphaFormat) {
                    // Special case for "transparent", all other non-alpha formats
                    // will return rgba when there is transparency.
                    if (format === "name" && this._a === 0) {
                        return this.toName();
                    }
                    return this.toRgbString();
                }
                if (format === "rgb") {
                    formattedString = this.toRgbString();
                }
                if (format === "prgb") {
                    formattedString = this.toPercentageRgbString();
                }
                if (format === "hex" || format === "hex6") {
                    formattedString = this.toHexString();
                }
                if (format === "hex3") {
                    formattedString = this.toHexString(true);
                }
                if (format === "hex8") {
                    formattedString = this.toHex8String();
                }
                if (format === "name") {
                    formattedString = this.toName();
                }
                if (format === "hsl") {
                    formattedString = this.toHslString();
                }
                if (format === "hsv") {
                    formattedString = this.toHsvString();
                }

                return formattedString || this.toHexString();
            },

            _applyModification: function _applyModification(fn, args) {
                var color = fn.apply(null, [this].concat([].slice.call(args)));
                this._r = color._r;
                this._g = color._g;
                this._b = color._b;
                this.setAlpha(color._a);
                return this;
            },
            lighten: function lighten() {
                return this._applyModification(_lighten, arguments);
            },
            brighten: function brighten() {
                return this._applyModification(_brighten, arguments);
            },
            darken: function darken() {
                return this._applyModification(_darken, arguments);
            },
            desaturate: function desaturate() {
                return this._applyModification(_desaturate, arguments);
            },
            saturate: function saturate() {
                return this._applyModification(_saturate, arguments);
            },
            greyscale: function greyscale() {
                return this._applyModification(_greyscale, arguments);
            },
            spin: function spin() {
                return this._applyModification(_spin, arguments);
            },

            _applyCombination: function _applyCombination(fn, args) {
                return fn.apply(null, [this].concat([].slice.call(args)));
            },
            analogous: function analogous() {
                return this._applyCombination(_analogous, arguments);
            },
            complement: function complement() {
                return this._applyCombination(_complement, arguments);
            },
            monochromatic: function monochromatic() {
                return this._applyCombination(_monochromatic, arguments);
            },
            splitcomplement: function splitcomplement() {
                return this._applyCombination(_splitcomplement, arguments);
            },
            triad: function triad() {
                return this._applyCombination(_triad, arguments);
            },
            tetrad: function tetrad() {
                return this._applyCombination(_tetrad, arguments);
            }
        };

        // If input is an object, force 1 into "1.0" to handle ratios properly
        // String input requires "1.0" as input, so 1 will be treated as 1
        tinycolor.fromRatio = function (color, opts) {
            if ((typeof color === "undefined" ? "undefined" : (0, _typeof3.default)(color)) == "object") {
                var newColor = {};
                for (var i in color) {
                    if (color.hasOwnProperty(i)) {
                        if (i === "a") {
                            newColor[i] = color[i];
                        } else {
                            newColor[i] = convertToPercentage(color[i]);
                        }
                    }
                }
                color = newColor;
            }

            return tinycolor(color, opts);
        };

        // Given a string or object, convert that input to RGB
        // Possible string inputs:
        //
        //     "red"
        //     "#f00" or "f00"
        //     "#ff0000" or "ff0000"
        //     "#ff000000" or "ff000000"
        //     "rgb 255 0 0" or "rgb (255, 0, 0)"
        //     "rgb 1.0 0 0" or "rgb (1, 0, 0)"
        //     "rgba (255, 0, 0, 1)" or "rgba 255, 0, 0, 1"
        //     "rgba (1.0, 0, 0, 1)" or "rgba 1.0, 0, 0, 1"
        //     "hsl(0, 100%, 50%)" or "hsl 0 100% 50%"
        //     "hsla(0, 100%, 50%, 1)" or "hsla 0 100% 50%, 1"
        //     "hsv(0, 100%, 100%)" or "hsv 0 100% 100%"
        //
        function inputToRGB(color) {

            var rgb = { r: 0, g: 0, b: 0 };
            var a = 1;
            var ok = false;
            var format = false;

            if (typeof color == "string") {
                color = stringInputToObject(color);
            }

            if ((typeof color === "undefined" ? "undefined" : (0, _typeof3.default)(color)) == "object") {
                if (color.hasOwnProperty("r") && color.hasOwnProperty("g") && color.hasOwnProperty("b")) {
                    rgb = rgbToRgb(color.r, color.g, color.b);
                    ok = true;
                    format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
                } else if (color.hasOwnProperty("h") && color.hasOwnProperty("s") && color.hasOwnProperty("v")) {
                    color.s = convertToPercentage(color.s);
                    color.v = convertToPercentage(color.v);
                    rgb = hsvToRgb(color.h, color.s, color.v);
                    ok = true;
                    format = "hsv";
                } else if (color.hasOwnProperty("h") && color.hasOwnProperty("s") && color.hasOwnProperty("l")) {
                    color.s = convertToPercentage(color.s);
                    color.l = convertToPercentage(color.l);
                    rgb = hslToRgb(color.h, color.s, color.l);
                    ok = true;
                    format = "hsl";
                }

                if (color.hasOwnProperty("a")) {
                    a = color.a;
                }
            }

            a = boundAlpha(a);

            return {
                ok: ok,
                format: color.format || format,
                r: mathMin(255, mathMax(rgb.r, 0)),
                g: mathMin(255, mathMax(rgb.g, 0)),
                b: mathMin(255, mathMax(rgb.b, 0)),
                a: a
            };
        }

        // Conversion Functions
        // --------------------

        // `rgbToHsl`, `rgbToHsv`, `hslToRgb`, `hsvToRgb` modified from:
        // <http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript>

        // `rgbToRgb`
        // Handle bounds / percentage checking to conform to CSS color spec
        // <http://www.w3.org/TR/css3-color/>
        // *Assumes:* r, g, b in [0, 255] or [0, 1]
        // *Returns:* { r, g, b } in [0, 255]
        function rgbToRgb(r, g, b) {
            return {
                r: bound01(r, 255) * 255,
                g: bound01(g, 255) * 255,
                b: bound01(b, 255) * 255
            };
        }

        // `rgbToHsl`
        // Converts an RGB color value to HSL.
        // *Assumes:* r, g, and b are contained in [0, 255] or [0, 1]
        // *Returns:* { h, s, l } in [0,1]
        function rgbToHsl(r, g, b) {

            r = bound01(r, 255);
            g = bound01(g, 255);
            b = bound01(b, 255);

            var max = mathMax(r, g, b),
                min = mathMin(r, g, b);
            var h,
                s,
                l = (max + min) / 2;

            if (max == min) {
                h = s = 0; // achromatic
            } else {
                var d = max - min;
                s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
                switch (max) {
                    case r:
                        h = (g - b) / d + (g < b ? 6 : 0);break;
                    case g:
                        h = (b - r) / d + 2;break;
                    case b:
                        h = (r - g) / d + 4;break;
                }

                h /= 6;
            }

            return { h: h, s: s, l: l };
        }

        // `hslToRgb`
        // Converts an HSL color value to RGB.
        // *Assumes:* h is contained in [0, 1] or [0, 360] and s and l are contained [0, 1] or [0, 100]
        // *Returns:* { r, g, b } in the set [0, 255]
        function hslToRgb(h, s, l) {
            var r, g, b;

            h = bound01(h, 360);
            s = bound01(s, 100);
            l = bound01(l, 100);

            function hue2rgb(p, q, t) {
                if (t < 0) t += 1;
                if (t > 1) t -= 1;
                if (t < 1 / 6) return p + (q - p) * 6 * t;
                if (t < 1 / 2) return q;
                if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
                return p;
            }

            if (s === 0) {
                r = g = b = l; // achromatic
            } else {
                var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
                var p = 2 * l - q;
                r = hue2rgb(p, q, h + 1 / 3);
                g = hue2rgb(p, q, h);
                b = hue2rgb(p, q, h - 1 / 3);
            }

            return { r: r * 255, g: g * 255, b: b * 255 };
        }

        // `rgbToHsv`
        // Converts an RGB color value to HSV
        // *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
        // *Returns:* { h, s, v } in [0,1]
        function rgbToHsv(r, g, b) {

            r = bound01(r, 255);
            g = bound01(g, 255);
            b = bound01(b, 255);

            var max = mathMax(r, g, b),
                min = mathMin(r, g, b);
            var h,
                s,
                v = max;

            var d = max - min;
            s = max === 0 ? 0 : d / max;

            if (max == min) {
                h = 0; // achromatic
            } else {
                switch (max) {
                    case r:
                        h = (g - b) / d + (g < b ? 6 : 0);break;
                    case g:
                        h = (b - r) / d + 2;break;
                    case b:
                        h = (r - g) / d + 4;break;
                }
                h /= 6;
            }
            return { h: h, s: s, v: v };
        }

        // `hsvToRgb`
        // Converts an HSV color value to RGB.
        // *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
        // *Returns:* { r, g, b } in the set [0, 255]
        function hsvToRgb(h, s, v) {

            h = bound01(h, 360) * 6;
            s = bound01(s, 100);
            v = bound01(v, 100);

            var i = math.floor(h),
                f = h - i,
                p = v * (1 - s),
                q = v * (1 - f * s),
                t = v * (1 - (1 - f) * s),
                mod = i % 6,
                r = [v, q, p, p, t, v][mod],
                g = [t, v, v, q, p, p][mod],
                b = [p, p, t, v, v, q][mod];

            return { r: r * 255, g: g * 255, b: b * 255 };
        }

        // `rgbToHex`
        // Converts an RGB color to hex
        // Assumes r, g, and b are contained in the set [0, 255]
        // Returns a 3 or 6 character hex
        function rgbToHex(r, g, b, allow3Char) {

            var hex = [pad2(mathRound(r).toString(16)), pad2(mathRound(g).toString(16)), pad2(mathRound(b).toString(16))];

            // Return a 3 character hex if possible
            if (allow3Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1)) {
                return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
            }

            return hex.join("");
        }
        // `rgbaToHex`
        // Converts an RGBA color plus alpha transparency to hex
        // Assumes r, g, b and a are contained in the set [0, 255]
        // Returns an 8 character hex
        function rgbaToHex(r, g, b, a) {

            var hex = [pad2(convertDecimalToHex(a)), pad2(mathRound(r).toString(16)), pad2(mathRound(g).toString(16)), pad2(mathRound(b).toString(16))];

            return hex.join("");
        }

        // `equals`
        // Can be called with any tinycolor input
        tinycolor.equals = function (color1, color2) {
            if (!color1 || !color2) {
                return false;
            }
            return tinycolor(color1).toRgbString() == tinycolor(color2).toRgbString();
        };
        tinycolor.random = function () {
            return tinycolor.fromRatio({
                r: mathRandom(),
                g: mathRandom(),
                b: mathRandom()
            });
        };

        // Modification Functions
        // ----------------------
        // Thanks to less.js for some of the basics here
        // <https://github.com/cloudhead/less.js/blob/master/lib/less/functions.js>

        function _desaturate(color, amount) {
            amount = amount === 0 ? 0 : amount || 10;
            var hsl = tinycolor(color).toHsl();
            hsl.s -= amount / 100;
            hsl.s = clamp01(hsl.s);
            return tinycolor(hsl);
        }

        function _saturate(color, amount) {
            amount = amount === 0 ? 0 : amount || 10;
            var hsl = tinycolor(color).toHsl();
            hsl.s += amount / 100;
            hsl.s = clamp01(hsl.s);
            return tinycolor(hsl);
        }

        function _greyscale(color) {
            return tinycolor(color).desaturate(100);
        }

        function _lighten(color, amount) {
            amount = amount === 0 ? 0 : amount || 10;
            var hsl = tinycolor(color).toHsl();
            hsl.l += amount / 100;
            hsl.l = clamp01(hsl.l);
            return tinycolor(hsl);
        }

        function _brighten(color, amount) {
            amount = amount === 0 ? 0 : amount || 10;
            var rgb = tinycolor(color).toRgb();
            rgb.r = mathMax(0, mathMin(255, rgb.r - mathRound(255 * -(amount / 100))));
            rgb.g = mathMax(0, mathMin(255, rgb.g - mathRound(255 * -(amount / 100))));
            rgb.b = mathMax(0, mathMin(255, rgb.b - mathRound(255 * -(amount / 100))));
            return tinycolor(rgb);
        }

        function _darken(color, amount) {
            amount = amount === 0 ? 0 : amount || 10;
            var hsl = tinycolor(color).toHsl();
            hsl.l -= amount / 100;
            hsl.l = clamp01(hsl.l);
            return tinycolor(hsl);
        }

        // Spin takes a positive or negative amount within [-360, 360] indicating the change of hue.
        // Values outside of this range will be wrapped into this range.
        function _spin(color, amount) {
            var hsl = tinycolor(color).toHsl();
            var hue = (mathRound(hsl.h) + amount) % 360;
            hsl.h = hue < 0 ? 360 + hue : hue;
            return tinycolor(hsl);
        }

        // Combination Functions
        // ---------------------
        // Thanks to jQuery xColor for some of the ideas behind these
        // <https://github.com/infusion/jQuery-xcolor/blob/master/jquery.xcolor.js>

        function _complement(color) {
            var hsl = tinycolor(color).toHsl();
            hsl.h = (hsl.h + 180) % 360;
            return tinycolor(hsl);
        }

        function _triad(color) {
            var hsl = tinycolor(color).toHsl();
            var h = hsl.h;
            return [tinycolor(color), tinycolor({ h: (h + 120) % 360, s: hsl.s, l: hsl.l }), tinycolor({ h: (h + 240) % 360, s: hsl.s, l: hsl.l })];
        }

        function _tetrad(color) {
            var hsl = tinycolor(color).toHsl();
            var h = hsl.h;
            return [tinycolor(color), tinycolor({ h: (h + 90) % 360, s: hsl.s, l: hsl.l }), tinycolor({ h: (h + 180) % 360, s: hsl.s, l: hsl.l }), tinycolor({ h: (h + 270) % 360, s: hsl.s, l: hsl.l })];
        }

        function _splitcomplement(color) {
            var hsl = tinycolor(color).toHsl();
            var h = hsl.h;
            return [tinycolor(color), tinycolor({ h: (h + 72) % 360, s: hsl.s, l: hsl.l }), tinycolor({ h: (h + 216) % 360, s: hsl.s, l: hsl.l })];
        }

        function _analogous(color, results, slices) {
            results = results || 6;
            slices = slices || 30;

            var hsl = tinycolor(color).toHsl();
            var part = 360 / slices;
            var ret = [tinycolor(color)];

            for (hsl.h = (hsl.h - (part * results >> 1) + 720) % 360; --results;) {
                hsl.h = (hsl.h + part) % 360;
                ret.push(tinycolor(hsl));
            }
            return ret;
        }

        function _monochromatic(color, results) {
            results = results || 6;
            var hsv = tinycolor(color).toHsv();
            var h = hsv.h,
                s = hsv.s,
                v = hsv.v;
            var ret = [];
            var modification = 1 / results;

            while (results--) {
                ret.push(tinycolor({ h: h, s: s, v: v }));
                v = (v + modification) % 1;
            }

            return ret;
        }

        // Utility Functions
        // ---------------------

        tinycolor.mix = function (color1, color2, amount) {
            amount = amount === 0 ? 0 : amount || 50;

            var rgb1 = tinycolor(color1).toRgb();
            var rgb2 = tinycolor(color2).toRgb();

            var p = amount / 100;
            var w = p * 2 - 1;
            var a = rgb2.a - rgb1.a;

            var w1;

            if (w * a == -1) {
                w1 = w;
            } else {
                w1 = (w + a) / (1 + w * a);
            }

            w1 = (w1 + 1) / 2;

            var w2 = 1 - w1;

            var rgba = {
                r: rgb2.r * w1 + rgb1.r * w2,
                g: rgb2.g * w1 + rgb1.g * w2,
                b: rgb2.b * w1 + rgb1.b * w2,
                a: rgb2.a * p + rgb1.a * (1 - p)
            };

            return tinycolor(rgba);
        };

        // Readability Functions
        // ---------------------
        // <http://www.w3.org/TR/AERT#color-contrast>

        // `readability`
        // Analyze the 2 colors and returns an object with the following properties:
        //    `brightness`: difference in brightness between the two colors
        //    `color`: difference in color/hue between the two colors
        tinycolor.readability = function (color1, color2) {
            var c1 = tinycolor(color1);
            var c2 = tinycolor(color2);
            var rgb1 = c1.toRgb();
            var rgb2 = c2.toRgb();
            var brightnessA = c1.getBrightness();
            var brightnessB = c2.getBrightness();
            var colorDiff = Math.max(rgb1.r, rgb2.r) - Math.min(rgb1.r, rgb2.r) + Math.max(rgb1.g, rgb2.g) - Math.min(rgb1.g, rgb2.g) + Math.max(rgb1.b, rgb2.b) - Math.min(rgb1.b, rgb2.b);

            return {
                brightness: Math.abs(brightnessA - brightnessB),
                color: colorDiff
            };
        };

        // `readable`
        // http://www.w3.org/TR/AERT#color-contrast
        // Ensure that foreground and background color combinations provide sufficient contrast.
        // *Example*
        //    tinycolor.isReadable("#000", "#111") => false
        tinycolor.isReadable = function (color1, color2) {
            var readability = tinycolor.readability(color1, color2);
            return readability.brightness > 125 && readability.color > 500;
        };

        // `mostReadable`
        // Given a base color and a list of possible foreground or background
        // colors for that base, returns the most readable color.
        // *Example*
        //    tinycolor.mostReadable("#123", ["#fff", "#000"]) => "#000"
        tinycolor.mostReadable = function (baseColor, colorList) {
            var bestColor = null;
            var bestScore = 0;
            var bestIsReadable = false;
            for (var i = 0; i < colorList.length; i++) {

                // We normalize both around the "acceptable" breaking point,
                // but rank brightness constrast higher than hue.

                var readability = tinycolor.readability(baseColor, colorList[i]);
                var readable = readability.brightness > 125 && readability.color > 500;
                var score = 3 * (readability.brightness / 125) + readability.color / 500;

                if (readable && !bestIsReadable || readable && bestIsReadable && score > bestScore || !readable && !bestIsReadable && score > bestScore) {
                    bestIsReadable = readable;
                    bestScore = score;
                    bestColor = tinycolor(colorList[i]);
                }
            }
            return bestColor;
        };

        // Big List of Colors
        // ------------------
        // <http://www.w3.org/TR/css3-color/#svg-color>
        var names = tinycolor.names = {
            aliceblue: "f0f8ff",
            antiquewhite: "faebd7",
            aqua: "0ff",
            aquamarine: "7fffd4",
            azure: "f0ffff",
            beige: "f5f5dc",
            bisque: "ffe4c4",
            black: "000",
            blanchedalmond: "ffebcd",
            blue: "00f",
            blueviolet: "8a2be2",
            brown: "a52a2a",
            burlywood: "deb887",
            burntsienna: "ea7e5d",
            cadetblue: "5f9ea0",
            chartreuse: "7fff00",
            chocolate: "d2691e",
            coral: "ff7f50",
            cornflowerblue: "6495ed",
            cornsilk: "fff8dc",
            crimson: "dc143c",
            cyan: "0ff",
            darkblue: "00008b",
            darkcyan: "008b8b",
            darkgoldenrod: "b8860b",
            darkgray: "a9a9a9",
            darkgreen: "006400",
            darkgrey: "a9a9a9",
            darkkhaki: "bdb76b",
            darkmagenta: "8b008b",
            darkolivegreen: "556b2f",
            darkorange: "ff8c00",
            darkorchid: "9932cc",
            darkred: "8b0000",
            darksalmon: "e9967a",
            darkseagreen: "8fbc8f",
            darkslateblue: "483d8b",
            darkslategray: "2f4f4f",
            darkslategrey: "2f4f4f",
            darkturquoise: "00ced1",
            darkviolet: "9400d3",
            deeppink: "ff1493",
            deepskyblue: "00bfff",
            dimgray: "696969",
            dimgrey: "696969",
            dodgerblue: "1e90ff",
            firebrick: "b22222",
            floralwhite: "fffaf0",
            forestgreen: "228b22",
            fuchsia: "f0f",
            gainsboro: "dcdcdc",
            ghostwhite: "f8f8ff",
            gold: "ffd700",
            goldenrod: "daa520",
            gray: "808080",
            green: "008000",
            greenyellow: "adff2f",
            grey: "808080",
            honeydew: "f0fff0",
            hotpink: "ff69b4",
            indianred: "cd5c5c",
            indigo: "4b0082",
            ivory: "fffff0",
            khaki: "f0e68c",
            lavender: "e6e6fa",
            lavenderblush: "fff0f5",
            lawngreen: "7cfc00",
            lemonchiffon: "fffacd",
            lightblue: "add8e6",
            lightcoral: "f08080",
            lightcyan: "e0ffff",
            lightgoldenrodyellow: "fafad2",
            lightgray: "d3d3d3",
            lightgreen: "90ee90",
            lightgrey: "d3d3d3",
            lightpink: "ffb6c1",
            lightsalmon: "ffa07a",
            lightseagreen: "20b2aa",
            lightskyblue: "87cefa",
            lightslategray: "789",
            lightslategrey: "789",
            lightsteelblue: "b0c4de",
            lightyellow: "ffffe0",
            lime: "0f0",
            limegreen: "32cd32",
            linen: "faf0e6",
            magenta: "f0f",
            maroon: "800000",
            mediumaquamarine: "66cdaa",
            mediumblue: "0000cd",
            mediumorchid: "ba55d3",
            mediumpurple: "9370db",
            mediumseagreen: "3cb371",
            mediumslateblue: "7b68ee",
            mediumspringgreen: "00fa9a",
            mediumturquoise: "48d1cc",
            mediumvioletred: "c71585",
            midnightblue: "191970",
            mintcream: "f5fffa",
            mistyrose: "ffe4e1",
            moccasin: "ffe4b5",
            navajowhite: "ffdead",
            navy: "000080",
            oldlace: "fdf5e6",
            olive: "808000",
            olivedrab: "6b8e23",
            orange: "ffa500",
            orangered: "ff4500",
            orchid: "da70d6",
            palegoldenrod: "eee8aa",
            palegreen: "98fb98",
            paleturquoise: "afeeee",
            palevioletred: "db7093",
            papayawhip: "ffefd5",
            peachpuff: "ffdab9",
            peru: "cd853f",
            pink: "ffc0cb",
            plum: "dda0dd",
            powderblue: "b0e0e6",
            purple: "800080",
            red: "f00",
            rosybrown: "bc8f8f",
            royalblue: "4169e1",
            saddlebrown: "8b4513",
            salmon: "fa8072",
            sandybrown: "f4a460",
            seagreen: "2e8b57",
            seashell: "fff5ee",
            sienna: "a0522d",
            silver: "c0c0c0",
            skyblue: "87ceeb",
            slateblue: "6a5acd",
            slategray: "708090",
            slategrey: "708090",
            snow: "fffafa",
            springgreen: "00ff7f",
            steelblue: "4682b4",
            tan: "d2b48c",
            teal: "008080",
            thistle: "d8bfd8",
            tomato: "ff6347",
            turquoise: "40e0d0",
            violet: "ee82ee",
            wheat: "f5deb3",
            white: "fff",
            whitesmoke: "f5f5f5",
            yellow: "ff0",
            yellowgreen: "9acd32"
        };

        // Make it easy to access colors via `hexNames[hex]`
        var hexNames = tinycolor.hexNames = flip(names);

        // Utilities
        // ---------

        // `{ 'name1': 'val1' }` becomes `{ 'val1': 'name1' }`
        function flip(o) {
            var flipped = {};
            for (var i in o) {
                if (o.hasOwnProperty(i)) {
                    flipped[o[i]] = i;
                }
            }
            return flipped;
        }

        // Return a valid alpha value [0,1] with all invalid values being set to 1
        function boundAlpha(a) {
            a = parseFloat(a);

            if (isNaN(a) || a < 0 || a > 1) {
                a = 1;
            }

            return a;
        }

        // Take input from [0, n] and return it as [0, 1]
        function bound01(n, max) {
            if (isOnePointZero(n)) {
                n = "100%";
            }

            var processPercent = isPercentage(n);
            n = mathMin(max, mathMax(0, parseFloat(n)));

            // Automatically convert percentage into number
            if (processPercent) {
                n = parseInt(n * max, 10) / 100;
            }

            // Handle floating point rounding errors
            if (math.abs(n - max) < 0.000001) {
                return 1;
            }

            // Convert into [0, 1] range if it isn't already
            return n % max / parseFloat(max);
        }

        // Force a number between 0 and 1
        function clamp01(val) {
            return mathMin(1, mathMax(0, val));
        }

        // Parse a base-16 hex value into a base-10 integer
        function parseIntFromHex(val) {
            return parseInt(val, 16);
        }

        // Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
        // <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
        function isOnePointZero(n) {
            return typeof n == "string" && n.indexOf('.') != -1 && parseFloat(n) === 1;
        }

        // Check to see if string passed in is a percentage
        function isPercentage(n) {
            return typeof n === "string" && n.indexOf('%') != -1;
        }

        // Force a hex value to have 2 characters
        function pad2(c) {
            return c.length == 1 ? '0' + c : '' + c;
        }

        // Replace a decimal with it's percentage value
        function convertToPercentage(n) {
            if (n <= 1) {
                n = n * 100 + "%";
            }

            return n;
        }

        // Converts a decimal to a hex value
        function convertDecimalToHex(d) {
            return Math.round(parseFloat(d) * 255).toString(16);
        }
        // Converts a hex value to a decimal
        function convertHexToDecimal(h) {
            return parseIntFromHex(h) / 255;
        }

        var matchers = function () {

            // <http://www.w3.org/TR/css3-values/#integers>
            var CSS_INTEGER = "[-\\+]?\\d+%?";

            // <http://www.w3.org/TR/css3-values/#number-value>
            var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";

            // Allow positive/negative integer/number.  Don't capture the either/or, just the entire outcome.
            var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")";

            // Actual matching.
            // Parentheses and commas are optional, but not required.
            // Whitespace can take the place of commas or opening paren
            var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
            var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";

            return {
                rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
                rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
                hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
                hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
                hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
                hex3: /^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
                hex6: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
                hex8: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
            };
        }();

        // `stringInputToObject`
        // Permissive string parsing.  Take in a number of formats, and output an object
        // based on detected format.  Returns `{ r, g, b }` or `{ h, s, l }` or `{ h, s, v}`
        function stringInputToObject(color) {

            color = color.replace(trimLeft, '').replace(trimRight, '').toLowerCase();
            var named = false;
            if (names[color]) {
                color = names[color];
                named = true;
            } else if (color == 'transparent') {
                return { r: 0, g: 0, b: 0, a: 0, format: "name" };
            }

            // Try to match string input using regular expressions.
            // Keep most of the number bounding out of this function - don't worry about [0,1] or [0,100] or [0,360]
            // Just return an object and let the conversion functions handle that.
            // This way the result will be the same whether the tinycolor is initialized with string or object.
            var match;
            if (match = matchers.rgb.exec(color)) {
                return { r: match[1], g: match[2], b: match[3] };
            }
            if (match = matchers.rgba.exec(color)) {
                return { r: match[1], g: match[2], b: match[3], a: match[4] };
            }
            if (match = matchers.hsl.exec(color)) {
                return { h: match[1], s: match[2], l: match[3] };
            }
            if (match = matchers.hsla.exec(color)) {
                return { h: match[1], s: match[2], l: match[3], a: match[4] };
            }
            if (match = matchers.hsv.exec(color)) {
                return { h: match[1], s: match[2], v: match[3] };
            }
            if (match = matchers.hex8.exec(color)) {
                return {
                    a: convertHexToDecimal(match[1]),
                    r: parseIntFromHex(match[2]),
                    g: parseIntFromHex(match[3]),
                    b: parseIntFromHex(match[4]),
                    format: named ? "name" : "hex8"
                };
            }
            if (match = matchers.hex6.exec(color)) {
                return {
                    r: parseIntFromHex(match[1]),
                    g: parseIntFromHex(match[2]),
                    b: parseIntFromHex(match[3]),
                    format: named ? "name" : "hex"
                };
            }
            if (match = matchers.hex3.exec(color)) {
                return {
                    r: parseIntFromHex(match[1] + '' + match[1]),
                    g: parseIntFromHex(match[2] + '' + match[2]),
                    b: parseIntFromHex(match[3] + '' + match[3]),
                    format: named ? "name" : "hex"
                };
            }

            return false;
        }

        window.tinycolor = tinycolor;
    })();

    $(function () {
        if ($.fn.spectrum.load) {
            $.fn.spectrum.processNativeColorInputs();
        }
    });
})(window, jQuery);

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "spectrum.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module), __webpack_require__(31)))

/***/ }),

/***/ 1779:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1412);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(37)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(1412, function() {
			var newContent = __webpack_require__(1412);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1817:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1397);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(37)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(1397, function() {
			var newContent = __webpack_require__(1397);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1818:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1398);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(37)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(1398, function() {
			var newContent = __webpack_require__(1398);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=31.js.map