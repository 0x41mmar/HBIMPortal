webpackJsonp([34],{

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

/***/ 1371:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(36)();
// imports


// module
exports.push([module.i, ".pane-element {\n  position: relative;\n  height: 100%;\n  width: 100%; }\n\n.pane-element > .title {\n  border-bottom: 1px solid #cdcdcd;\n  background-color: #F5F5F5;\n  padding-right: 4px;\n  position: relative;\n  text-align: left;\n  color: #373737;\n  height: 40px;\n  width: 100%; }\n\n.pane-element > .content {\n  position: relative;\n  overflow: hidden;\n  height: 100%;\n  width: 100%; }\n\n.pane-element > .title > label {\n  white-space: nowrap;\n  font-weight: normal;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  margin-left: 27px;\n  margin-top: 10px;\n  select: none; }\n\n.pane-element > .title > .controls {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: absolute;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 100%;\n  right: 6px; }\n\n.pane-element > .title > .controls > button {\n  border: 1px solid #c6c6c6;\n  background-color: #e1e1e1;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border-radius: 6px;\n  position: relative;\n  margin-right: 4px;\n  overflow: hidden;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  outline: none;\n  padding: 0px;\n  height: 24px;\n  width: 26px; }\n\n.pane-element > .title > .controls > button:hover {\n  border: 1px solid #878787;\n  background-color: #f5f5f5; }\n\n.pane-element > .title > .controls > button > label {\n  position: relative;\n  font-size: 20px;\n  color: #f0fcff;\n  top: -8px; }\n\n.pane-element > .title > .controls > button > span {\n  margin: 1px auto 0 auto;\n  pointer-events: none;\n  color: #9b9b9b;\n  padding: 0px;\n  height: 100%;\n  width: 100%; }\n", ""]);

// exports


/***/ }),

/***/ 1388:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(36)();
// imports


// module
exports.push([module.i, ".extension-manager .title {\n  float: left; }\n\n.extension-manager .content {\n  background: white; }\n\n.extension-manager .title > label {\n  white-space: nowrap;\n  font-weight: normal;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  margin-left: 27px;\n  margin-top: 10px;\n  select: none;\n  width: 80px; }\n\n.extension-manager .extension-list {\n  height: calc(100% - 12px);\n  background-color: white;\n  margin: 6px 0 0 0;\n  overflow: scroll; }\n\n.extension-manager .item {\n  transition-timing-function: ease;\n  transition-duration: 1.5s;\n  transition-property: all;\n  transition-delay: 0.0s;\n  background: #ededed;\n  border: 1px solid #aeaeae;\n  width: calc(100% - 10px);\n  white-space: nowrap;\n  border-radius: 4px;\n  overflow: hidden;\n  cursor: pointer;\n  height: 24px;\n  padding: 2px;\n  margin: 5px; }\n\n.extension-manager .item:hover {\n  background: rgba(0, 105, 245, 0.35);\n  border: 1px solid #1bb1f4; }\n\n.extension-manager .item.loading {\n  cursor: progress; }\n\n.extension-manager .item.enabled {\n  background: rgba(2, 160, 29, 0.72);\n  border: 2px solid #00f41b; }\n\n.extension-manager .item > label {\n  pointer-events: none;\n  font-weight: normal;\n  margin: 0 0 0 10px;\n  position: relative;\n  float: left;\n  top: -2px; }\n\n.extension-pane {\n  height: 100%;\n  width: 100%; }\n", ""]);

// exports


/***/ }),

/***/ 1569:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(5);

var _extends3 = _interopRequireDefault(_extends2);

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

var _class, _temp;

var _reactReflex = __webpack_require__(1131);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Stopwatch = __webpack_require__(1067);

var _Stopwatch2 = _interopRequireDefault(_Stopwatch);

var _reactDom = __webpack_require__(26);

var _reactDom2 = _interopRequireDefault(_reactDom);

__webpack_require__(1612);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PaneElement = (_temp = _class = function (_React$Component) {
  (0, _inherits3.default)(PaneElement, _React$Component);

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////


  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////
  function PaneElement() {
    (0, _classCallCheck3.default)(this, PaneElement);

    var _this = (0, _possibleConstructorReturn3.default)(this, (PaneElement.__proto__ || (0, _getPrototypeOf2.default)(PaneElement)).call(this));

    _this.onLockSizeClicked = _this.onLockSizeClicked.bind(_this);

    _this.onMinimizeClicked = _this.onMinimizeClicked.bind(_this);

    _this.onMaximizeClicked = _this.onMaximizeClicked.bind(_this);

    _this.state = {
      size: -1
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


  (0, _createClass3.default)(PaneElement, [{
    key: 'onLockSizeClicked',
    value: function onLockSizeClicked() {

      this.props.onLockSize({
        locked: this.props.sizeLocked,
        maxSize: this.props.maxSize,
        minSize: this.props.minSize,
        paneId: this.props.id,
        size: this.getSize()
      });
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'onMinimizeClicked',
    value: function onMinimizeClicked() {
      var _this2 = this;

      if (this.props.sizeLocked) {
        return;
      }

      var currentSize = this.getSize();

      var update = function update(size) {

        return new _promise2.default(function (resolve) {

          var newSize = size < _this2.props.minSize ? _this2.props.minSize : size;

          _this2.setState((0, _assign2.default)({}, _this2.state, {
            size: newSize
          }), function () {
            return resolve();
          });
        });
      };

      var done = function done(from, to) {

        return from < to;
      };

      this.animate(currentSize, this.props.minSize, -450, done, update).then(function () {

        if (_this2.props.onStopResize) {

          _this2.props.onStopResize();
        }
      });
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'onMaximizeClicked',
    value: function onMaximizeClicked() {
      var _this3 = this;

      if (this.props.sizeLocked) {
        return;
      }

      var currentSize = this.getSize();

      var update = function update(size) {

        return new _promise2.default(function (resolve) {

          _this3.setState((0, _assign2.default)({}, _this3.state, {
            size: size
          }), function () {
            return resolve();
          });
        });
      };

      var done = function done(start, end) {

        return start >= end;
      };

      this.animate(currentSize, window.innerHeight, 450, done, update).then(function () {

        if (_this3.props.onStopResize) {

          _this3.props.onStopResize();
        }
      });
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'getSize',
    value: function getSize() {

      var domElement = _reactDom2.default.findDOMNode(this);

      switch (this.props.orientation) {

        case 'horizontal':
          return domElement.offsetHeight;

        case 'vertical':
          return domElement.offsetWidth;

        default:
          return 0;
      }
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'animate',
    value: function animate(start, end, speed, done, fn) {

      return new _promise2.default(function (resolve) {

        var stopwatch = new _Stopwatch2.default();

        var stepFn = function stepFn() {

          var dt = stopwatch.getElapsedMs() * 0.001;

          if (!done(start, end)) {

            fn(start += speed * dt).then(function () {

              window.requestAnimationFrame(stepFn);
            });
          } else {

            resolve();
          }
        };

        stepFn();
      });
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'renderTitle',
    value: function renderTitle() {

      if (!this.props.showTitle) {

        return _react2.default.createElement('div', null);
      }

      if (this.props.renderTitle) {

        return _react2.default.createElement(
          'div',
          { className: 'title' },
          this.props.renderTitle(),
          this.renderControls()
        );
      }

      return _react2.default.createElement(
        'div',
        { className: 'title' },
        _react2.default.createElement(
          'label',
          null,
          this.props.title
        ),
        this.renderControls()
      );
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'renderControls',
    value: function renderControls() {

      var lockStyle = this.props.sizeLocked ? { color: '#FF0000' } : {};

      var lockClass = this.props.sizeLocked ? 'fa fa-lock' : 'fa fa-unlock';

      return _react2.default.createElement(
        'div',
        { className: 'controls' },
        _react2.default.createElement(
          'button',
          { onClick: this.onLockSizeClicked,
            title: 'lock widget size' },
          _react2.default.createElement('span', { className: lockClass, style: lockStyle })
        ),
        _react2.default.createElement(
          'button',
          { onClick: this.onMinimizeClicked,
            title: 'minimize widget' },
          _react2.default.createElement('span', { className: 'fa fa-minus-square-o' })
        ),
        _react2.default.createElement(
          'button',
          { onClick: this.onMaximizeClicked,
            title: 'maximize widget' },
          _react2.default.createElement('span', { className: 'fa fa-plus-square-o' })
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

      var style = this.props.showTitle ? { height: 'calc(100% - 40px)' } : { height: '100%' };

      return _react2.default.createElement(
        _reactReflex.ReflexElement,
        (0, _extends3.default)({ size: this.state.size }, this.props),
        _react2.default.createElement(
          'div',
          { className: 'pane-element', style: style },
          this.renderTitle(),
          _react2.default.createElement(
            'div',
            { className: 'content' },
            this.props.children
          )
        )
      );
    }
  }]);
  return PaneElement;
}(_react2.default.Component), _class.propTypes = {
  showTitle: _propTypes2.default.bool }, _class.defaultProps = {
  showTitle: true }, _temp);
exports.default = PaneElement;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "PaneElement.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1577:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(1687);

exports.default = 'Viewing.Extension.ExtensionManager';

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1612:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1371);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(37)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(1371, function() {
			var newContent = __webpack_require__(1371);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1653:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _reactReflex = __webpack_require__(1131);

var _PaneElement = __webpack_require__(1569);

var _PaneElement2 = _interopRequireDefault(_PaneElement);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(1612);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PaneManager = (_temp = _class = function (_React$Component) {
  (0, _inherits3.default)(PaneManager, _React$Component);

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////
  function PaneManager(props) {
    (0, _classCallCheck3.default)(this, PaneManager);

    var _this = (0, _possibleConstructorReturn3.default)(this, (PaneManager.__proto__ || (0, _getPrototypeOf2.default)(PaneManager)).call(this, props));

    _this.onLockSize = _this.onLockSize.bind(_this);

    _this.state = {
      children: []
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


  (0, _createClass3.default)(PaneManager, [{
    key: 'onLockSize',
    value: function onLockSize(data) {

      this.state[data.paneId] = this.state[data.paneId] || {
        minSizeInit: data.minSize,
        maxSizeInit: data.maxSize
      };

      var locked = !this.state[data.paneId].sizeLocked;

      this.state[data.paneId].sizeLocked = locked;

      if (locked) {

        this.state[data.paneId].minSize = data.size;
        this.state[data.paneId].maxSize = data.size;
      } else {

        this.state[data.paneId].minSize = this.state[data.paneId].minSizeInit;

        this.state[data.paneId].maxSize = this.state[data.paneId].maxSizeInit;
      }

      this.cloneChildren(this.props.children, this.state);
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'getDirection',
    value: function getDirection(children, childIdx) {

      return childIdx === 0 ? 1 : childIdx < children.length - 1 ? [1, -1] : -1;
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'flatMapChildren',
    value: function flatMapChildren(children, fn) {

      return Array.prototype.concat.apply([], _react2.default.Children.map(children, fn));
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'guid',
    value: function guid() {
      var format = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'xxxxxxxxxxxx';


      var d = new Date().getTime();

      return format.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == 'x' ? r : r & 0x7 | 0x8).toString(16);
      });
    }

    /////////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////////

  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {

      this.cloneChildren(this.props.children, this.state);
    }

    /////////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////////

  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {

      this.cloneChildren(props.children, this.state);
    }

    /////////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////////

  }, {
    key: 'cloneChildren',
    value: function cloneChildren(children, state) {
      var _this2 = this;

      var nextChildren = this.flatMapChildren(children, function (child, idx) {

        var childId = state.children.length > 2 * idx ? state.children[2 * idx].props.id : null;

        var childState = childId ? state[childId] : {};

        var newProps = (0, _assign2.default)({}, child.props, {
          maxSize: child.props.maxSize || Number.MAX_VALUE,
          sizeLocked: child.props.sizeLocked || false,
          direction: _this2.getDirection(children, idx),
          minSize: child.props.minSize || 39,
          onLockSize: _this2.onLockSize,
          id: childId || _this2.guid(),
          title: child.props.title
        }, childState);

        var showSplitter = idx < children.length - 1;

        var splitterStyle = {
          display: showSplitter ? 'block' : 'none'
        };

        var splitter = _react2.default.createElement(_reactReflex.ReflexSplitter, {
          style: splitterStyle, propagate: showSplitter
        });

        var paneElement = _react2.default.createElement(
          _PaneElement2.default,
          newProps,
          _react2.default.cloneElement(child, child.props)
        );

        return [paneElement, splitter];
      });

      this.setState((0, _assign2.default)({}, this.state, state, {
        children: nextChildren
      }));
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        _reactReflex.ReflexContainer,
        { orientation: this.props.orientation },
        this.state.children
      );
    }
  }]);
  return PaneManager;
}(_react2.default.Component), _class.propTypes = {
  orientation: _propTypes2.default.string.isRequired }, _temp);
exports.default = PaneManager;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "PaneManager.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1654:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _PaneElement = __webpack_require__(1569);

var _PaneElement2 = _interopRequireDefault(_PaneElement);

var _PaneManager = __webpack_require__(1653);

var _PaneManager2 = _interopRequireDefault(_PaneManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _PaneManager2.default;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1686:
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

var _class, _temp;

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ExtensionPane = (_temp = _class = function (_React$Component) {
  (0, _inherits3.default)(ExtensionPane, _React$Component);

  function ExtensionPane() {
    (0, _classCallCheck3.default)(this, ExtensionPane);
    return (0, _possibleConstructorReturn3.default)(this, (ExtensionPane.__proto__ || (0, _getPrototypeOf2.default)(ExtensionPane)).apply(this, arguments));
  }

  (0, _createClass3.default)(ExtensionPane, [{
    key: 'render',


    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////


    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////
    value: function render() {

      var classNames = ['extension-pane'].concat((0, _toConsumableArray3.default)(this.props.className.split(' ')));

      return _react2.default.createElement(
        'div',
        { className: classNames.join(' ') },
        this.props.children
      );
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }]);
  return ExtensionPane;
}(_react2.default.Component), _class.propTypes = {
  className: _propTypes2.default.string }, _class.defaultProps = {
  className: '' }, _temp);
exports.default = ExtensionPane;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "ExtensionPane.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1687:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

var _extends2 = __webpack_require__(5);

var _extends3 = _interopRequireDefault(_extends2);

var _assign = __webpack_require__(46);

var _assign2 = _interopRequireDefault(_assign);

var _getIterator2 = __webpack_require__(1088);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _regenerator = __webpack_require__(216);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _toConsumableArray2 = __webpack_require__(371);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

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

__webpack_require__(1808);

var _ExtensionPane = __webpack_require__(1686);

var _ExtensionPane2 = _interopRequireDefault(_ExtensionPane);

var _SvcManager = __webpack_require__(67);

var _SvcManager2 = _interopRequireDefault(_SvcManager);

var _PaneManager = __webpack_require__(1654);

var _PaneManager2 = _interopRequireDefault(_PaneManager);

var _sortBy = __webpack_require__(1053);

var _sortBy2 = _interopRequireDefault(_sortBy);

var _reactDom = __webpack_require__(26);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/////////////////////////////////////////////////////////
// Viewing.Extension.DualViewer
// by Philippe Leefsma, April 2016
//
/////////////////////////////////////////////////////////
var ExtensionManager = function (_MultiModelExtensionB) {
  (0, _inherits3.default)(ExtensionManager, _MultiModelExtensionB);

  /////////////////////////////////////////////////////////
  // Class constructor
  //
  /////////////////////////////////////////////////////////
  function ExtensionManager(viewer, options) {
    var _this2 = this;

    (0, _classCallCheck3.default)(this, ExtensionManager);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ExtensionManager.__proto__ || (0, _getPrototypeOf2.default)(ExtensionManager)).call(this, viewer, options));

    _this.storageSvc = _SvcManager2.default.getService('StorageSvc');

    _this.renderTitle = _this.renderTitle.bind(_this);

    _this.render = _this.render.bind(_this);

    _this.reactOpts = {
      pushRenderExtension: function pushRenderExtension(extension) {

        return new _promise2.default(function () {
          var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(resolve) {
            var state;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    state = _this.react.getState();


                    if (!state.renderExtensions.length && !state.visible) {

                      _this.react.pushRenderExtension(_this);
                    }

                    _this.react.setState({
                      renderExtensions: [].concat((0, _toConsumableArray3.default)(state.renderExtensions), [extension])

                    }).then((0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                      return _regenerator2.default.wrap(function _callee$(_context) {
                        while (1) {
                          switch (_context.prev = _context.next) {
                            case 0:

                              resolve();

                              _context.next = 3;
                              return _this.react.forceUpdate();

                            case 3:

                              _this.onStopResize();

                            case 4:
                            case 'end':
                              return _context.stop();
                          }
                        }
                      }, _callee, _this2);
                    })));

                  case 3:
                  case 'end':
                    return _context2.stop();
                }
              }
            }, _callee2, _this2);
          }));

          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }());
      },
      popRenderExtension: function popRenderExtension(extensionId) {

        var state = _this.react.getState();

        var renderExtensions = state.renderExtensions.filter(function (ext) {
          return ext.id !== extensionId;
        });

        return new _promise2.default(function (resolve) {

          _this.react.setState({
            renderExtensions: renderExtensions
          }).then((0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
            return _regenerator2.default.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:

                    resolve();

                    if (!(!renderExtensions.length && !state.visible)) {
                      _context3.next = 4;
                      break;
                    }

                    _context3.next = 4;
                    return _this.react.popRenderExtension();

                  case 4:
                    _context3.next = 6;
                    return _this.react.forceUpdate();

                  case 6:

                    _this.onStopResize();

                  case 7:
                  case 'end':
                    return _context3.stop();
                }
              }
            }, _callee3, _this2);
          })));
        });
      }
    };

    _this.react = options.react;
    return _this;
  }

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////


  (0, _createClass3.default)(ExtensionManager, [{
    key: 'load',


    /////////////////////////////////////////////////////////
    // Load callback
    //
    /////////////////////////////////////////////////////////
    value: function load() {
      var _this3 = this;

      this.viewer.addEventListener(Autodesk.Viewing.MODEL_ROOT_LOADED_EVENT, function (e) {

        _this3.options.loader.show(false);
      });

      var extensionsByName = (0, _sortBy2.default)(this.options.extensions || [], function (ext) {
        return ext.name;
      });

      this.react.setState({

        visible: this.options.visible,
        extensions: extensionsByName,
        renderExtensions: []

      }).then((0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
        var extensions, storage, loadExts, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, extension;

        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (!_this3.options.visible) {
                  _context4.next = 3;
                  break;
                }

                _context4.next = 3;
                return _this3.react.pushRenderExtension(_this3);

              case 3:
                extensions = _this3.options.extensions || [];
                storage = _this3.storageSvc.load('extension-manager');
                loadExts = extensions.filter(function (extension) {

                  if (_this3.options.useStorage) {

                    var storageExtensions = storage.extensions || [];

                    extension.enabled = extension.enabled || storageExtensions.includes(extension.id);
                  }

                  return extension.enabled;
                });
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context4.prev = 9;
                _iterator = (0, _getIterator3.default)(loadExts);

              case 11:
                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                  _context4.next = 18;
                  break;
                }

                extension = _step.value;
                _context4.next = 15;
                return _this3.loadDynamicExtension(extension);

              case 15:
                _iteratorNormalCompletion = true;
                _context4.next = 11;
                break;

              case 18:
                _context4.next = 24;
                break;

              case 20:
                _context4.prev = 20;
                _context4.t0 = _context4['catch'](9);
                _didIteratorError = true;
                _iteratorError = _context4.t0;

              case 24:
                _context4.prev = 24;
                _context4.prev = 25;

                if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return();
                }

              case 27:
                _context4.prev = 27;

                if (!_didIteratorError) {
                  _context4.next = 30;
                  break;
                }

                throw _iteratorError;

              case 30:
                return _context4.finish(27);

              case 31:
                return _context4.finish(24);

              case 32:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, _this3, [[9, 20, 24, 32], [25,, 27, 31]]);
      })));

      console.log('Viewing.Extension.ExtensionManager loaded');

      return true;
    }

    /////////////////////////////////////////////////////////
    // Unload callback
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'unload',
    value: function unload() {

      console.log('Viewing.Extension.ExtensionManager unloaded');

      return true;
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'onExtensionLoaded',
    value: function onExtensionLoaded(e) {
      var _react$getState = this.react.getState(),
          extensions = _react$getState.extensions;

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {

        for (var _iterator2 = (0, _getIterator3.default)(extensions), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var extension = _step2.value;


          if (e.extensionId === extension.id) {

            extension.enabled = true;

            this.react.setState({
              extensions: extensions
            });

            return;
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

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'loadDynamicExtension',
    value: function loadDynamicExtension(extension) {
      var _this4 = this;

      return new _promise2.default(function (resolve, reject) {
        var _react$getState2 = _this4.react.getState(),
            extensions = _react$getState2.extensions;

        extension.loading = true;

        _this4.react.setState({
          extensions: extensions
        });

        var options = (0, _assign2.default)({}, extension.options, {
          react: _this4.reactOpts
        });

        // native extensions are the ones available
        // with the viewer API
        if (extension.native) {

          _this4.viewer.loadExtension(extension.id, options).then(function (extInstance) {

            extension.loading = false;
            extension.enabled = true;

            _this4.react.setState({
              extensions: extensions
            });

            resolve(extInstance);
          }, function (error) {

            extension.loading = false;

            reject(error);
          });
        } else {

          _this4.viewer.loadDynamicExtension(extension.id, options).then(function (extInstance) {

            extension.loading = false;
            extension.enabled = true;

            _this4.react.setState({
              extensions: extensions
            });

            resolve(extInstance);
          }, function (error) {

            extension.loading = false;

            reject(error);
          });
        }
      });
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'onExtensionItemClicked',
    value: function () {
      var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(extension) {
        var _react$getState3, extensions, renderExtensions, renderExts, _react$getState4, _extensions, extInstance;

        return _regenerator2.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (!extension.loading) {
                  _context5.next = 2;
                  break;
                }

                return _context5.abrupt('return');

              case 2:
                if (!extension.enabled) {
                  _context5.next = 15;
                  break;
                }

                _context5.next = 5;
                return this.react.popViewerPanel(extension.id);

              case 5:

                this.viewer.unloadExtension(extension.id);

                _react$getState3 = this.react.getState(), extensions = _react$getState3.extensions, renderExtensions = _react$getState3.renderExtensions;


                extension.enabled = false;

                renderExts = renderExtensions.filter(function (ext) {
                  return ext.id !== extension.id;
                });
                _context5.next = 11;
                return this.react.setState({
                  renderExtensions: renderExts,
                  extensions: extensions
                });

              case 11:

                this.react.forceUpdate();

                if (this.options.useStorage) {

                  this.storageSvc.save('extension-manager', {
                    extensions: extensions.filter(function (ext) {
                      return ext.enabled;
                    }).map(function (ext) {
                      return ext.id;
                    })
                  });
                }

                _context5.next = 20;
                break;

              case 15:
                _react$getState4 = this.react.getState(), _extensions = _react$getState4.extensions;
                _context5.next = 18;
                return this.loadDynamicExtension(extension);

              case 18:
                extInstance = _context5.sent;


                if (this.options.useStorage) {

                  this.storageSvc.save('extension-manager', {
                    extensions: _extensions.filter(function (ext) {
                      return ext.enabled;
                    }).map(function (ext) {
                      return ext.id;
                    })
                  });
                }

              case 20:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function onExtensionItemClicked(_x2) {
        return _ref5.apply(this, arguments);
      }

      return onExtensionItemClicked;
    }()

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'onStopResize',
    value: function onStopResize() {
      var _react$getState5 = this.react.getState(),
          renderExtensions = _react$getState5.renderExtensions;

      renderExtensions.forEach(function (extension) {

        if (extension.onStopResize) {

          extension.onStopResize();
        }
      });
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'onResize',
    value: function onResize() {
      var _react$getState6 = this.react.getState(),
          renderExtensions = _react$getState6.renderExtensions;

      renderExtensions.forEach(function (extension) {

        if (extension.onResize) {

          extension.onResize();
        }
      });
    }

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
          'Extension Manager'
        )
      );
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'renderExtensions',
    value: function renderExtensions() {
      var _this5 = this;

      var _react$getState7 = this.react.getState(),
          extensions = _react$getState7.extensions;

      var visibleExtensions = extensions.filter(function (extension) {

        return !extension.hidden;
      });

      return visibleExtensions.map(function (extension) {

        var className = 'item' + (extension.enabled ? ' enabled' : '') + (extension.loading ? ' loading' : '');

        return _react2.default.createElement(
          'div',
          { key: extension.id, className: className,
            onClick: function onClick() {
              _this5.onExtensionItemClicked(extension);
            } },
          _react2.default.createElement(
            'label',
            null,
            extension.name
          )
        );
      });
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'renderExtensionManager',
    value: function renderExtensionManager() {

      return _react2.default.createElement(
        _ExtensionPane2.default,
        { renderTitle: this.renderTitle,
          key: ExtensionManager.ExtensionId,
          className: 'extension-manager' },
        _react2.default.createElement(
          'div',
          { className: 'extension-list' },
          this.renderExtensions()
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
      var _this6 = this;

      var state = this.react.getState();

      var renderExtensions = (0, _sortBy2.default)(state.renderExtensions, function (ext) {
        return ext.options.displayIndex || 0;
      });

      var nbExt = renderExtensions.length + (this.options.visible ? 1 : 0);

      var extensionPanes = renderExtensions.map(function (extension) {

        var flexProp = nbExt > 1 && extension.options.flex ? { flex: extension.options.flex } : {};

        return _react2.default.createElement(
          _ExtensionPane2.default,
          (0, _extends3.default)({
            renderTitle: function renderTitle() {
              return extension.renderTitle(true);
            },
            onStopResize: function onStopResize(e) {
              return _this6.onStopResize();
            },
            onResize: function onResize(e) {
              return _this6.onResize();
            },
            className: extension.className,
            key: extension.id
          }, flexProp),
          extension.render({
            showTitle: false,
            docked: true
          })
        );
      });

      var panes = state.visible ? [this.renderExtensionManager()].concat((0, _toConsumableArray3.default)(extensionPanes)) : extensionPanes;

      return _react2.default.createElement(
        _PaneManager2.default,
        { orientation: 'horizontal' },
        panes
      );
    }
  }, {
    key: 'className',
    get: function get() {

      return 'extension-manager';
    }

    /////////////////////////////////////////////////////////
    // Extension Id
    //
    /////////////////////////////////////////////////////////

  }], [{
    key: 'ExtensionId',
    get: function get() {

      return 'Viewing.Extension.ExtensionManager';
    }
  }]);
  return ExtensionManager;
}(_Viewer2.default);

Autodesk.Viewing.theExtensionManager.registerExtension(ExtensionManager.ExtensionId, ExtensionManager);

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Viewing.Extension.ExtensionManager.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1808:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1388);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(37)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(1388, function() {
			var newContent = __webpack_require__(1388);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=34.js.map