webpackJsonp([49],{

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

/***/ })

});
//# sourceMappingURL=49.js.map