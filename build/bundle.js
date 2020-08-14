/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/build";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// shim for using process in browser\nvar process = module.exports = {};\n\n// cached from whatever global is present so that test runners that stub it\n// don't break things.  But we need to wrap it in a try catch in case it is\n// wrapped in strict mode code which doesn't define any globals.  It's inside a\n// function because try/catches deoptimize in certain engines.\n\nvar cachedSetTimeout;\nvar cachedClearTimeout;\n\nfunction defaultSetTimout() {\n    throw new Error('setTimeout has not been defined');\n}\nfunction defaultClearTimeout() {\n    throw new Error('clearTimeout has not been defined');\n}\n(function () {\n    try {\n        if (typeof setTimeout === 'function') {\n            cachedSetTimeout = setTimeout;\n        } else {\n            cachedSetTimeout = defaultSetTimout;\n        }\n    } catch (e) {\n        cachedSetTimeout = defaultSetTimout;\n    }\n    try {\n        if (typeof clearTimeout === 'function') {\n            cachedClearTimeout = clearTimeout;\n        } else {\n            cachedClearTimeout = defaultClearTimeout;\n        }\n    } catch (e) {\n        cachedClearTimeout = defaultClearTimeout;\n    }\n})();\nfunction runTimeout(fun) {\n    if (cachedSetTimeout === setTimeout) {\n        //normal enviroments in sane situations\n        return setTimeout(fun, 0);\n    }\n    // if setTimeout wasn't available but was latter defined\n    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {\n        cachedSetTimeout = setTimeout;\n        return setTimeout(fun, 0);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedSetTimeout(fun, 0);\n    } catch (e) {\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally\n            return cachedSetTimeout.call(null, fun, 0);\n        } catch (e) {\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error\n            return cachedSetTimeout.call(this, fun, 0);\n        }\n    }\n}\nfunction runClearTimeout(marker) {\n    if (cachedClearTimeout === clearTimeout) {\n        //normal enviroments in sane situations\n        return clearTimeout(marker);\n    }\n    // if clearTimeout wasn't available but was latter defined\n    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {\n        cachedClearTimeout = clearTimeout;\n        return clearTimeout(marker);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedClearTimeout(marker);\n    } catch (e) {\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally\n            return cachedClearTimeout.call(null, marker);\n        } catch (e) {\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.\n            // Some versions of I.E. have different rules for clearTimeout vs setTimeout\n            return cachedClearTimeout.call(this, marker);\n        }\n    }\n}\nvar queue = [];\nvar draining = false;\nvar currentQueue;\nvar queueIndex = -1;\n\nfunction cleanUpNextTick() {\n    if (!draining || !currentQueue) {\n        return;\n    }\n    draining = false;\n    if (currentQueue.length) {\n        queue = currentQueue.concat(queue);\n    } else {\n        queueIndex = -1;\n    }\n    if (queue.length) {\n        drainQueue();\n    }\n}\n\nfunction drainQueue() {\n    if (draining) {\n        return;\n    }\n    var timeout = runTimeout(cleanUpNextTick);\n    draining = true;\n\n    var len = queue.length;\n    while (len) {\n        currentQueue = queue;\n        queue = [];\n        while (++queueIndex < len) {\n            if (currentQueue) {\n                currentQueue[queueIndex].run();\n            }\n        }\n        queueIndex = -1;\n        len = queue.length;\n    }\n    currentQueue = null;\n    draining = false;\n    runClearTimeout(timeout);\n}\n\nprocess.nextTick = function (fun) {\n    var args = new Array(arguments.length - 1);\n    if (arguments.length > 1) {\n        for (var i = 1; i < arguments.length; i++) {\n            args[i - 1] = arguments[i];\n        }\n    }\n    queue.push(new Item(fun, args));\n    if (queue.length === 1 && !draining) {\n        runTimeout(drainQueue);\n    }\n};\n\n// v8 likes predictible objects\nfunction Item(fun, array) {\n    this.fun = fun;\n    this.array = array;\n}\nItem.prototype.run = function () {\n    this.fun.apply(null, this.array);\n};\nprocess.title = 'browser';\nprocess.browser = true;\nprocess.env = {};\nprocess.argv = [];\nprocess.version = ''; // empty string to avoid regexp issues\nprocess.versions = {};\n\nfunction noop() {}\n\nprocess.on = noop;\nprocess.addListener = noop;\nprocess.once = noop;\nprocess.off = noop;\nprocess.removeListener = noop;\nprocess.removeAllListeners = noop;\nprocess.emit = noop;\nprocess.prependListener = noop;\nprocess.prependOnceListener = noop;\n\nprocess.listeners = function (name) {\n    return [];\n};\n\nprocess.binding = function (name) {\n    throw new Error('process.binding is not supported');\n};\n\nprocess.cwd = function () {\n    return '/';\n};\nprocess.chdir = function (dir) {\n    throw new Error('process.chdir is not supported');\n};\nprocess.umask = function () {\n    return 0;\n};\n\n//# sourceURL=webpack:///./node_modules/process/browser.js?");

/***/ }),

/***/ "./server.js":
/*!*******************!*\
  !*** ./server.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(process) {\n\n__webpack_require__(/*! babel-polyfill */ \"babel-polyfill\");\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\n\nvar _bodyParser2 = _interopRequireDefault(_bodyParser);\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _server2 = _interopRequireDefault(_server);\n\nvar _reactRouter = __webpack_require__(/*! react-router */ \"react-router\");\n\nvar _reactHelmet = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n\nvar _app = __webpack_require__(/*! ./src/app */ \"./src/app.js\");\n\nvar _app2 = _interopRequireDefault(_app);\n\nvar _isomorphicFetch = __webpack_require__(/*! isomorphic-fetch */ \"isomorphic-fetch\");\n\nvar _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\n__webpack_require__(/*! babel-register */ \"babel-register\")({\n  presets: ['react']\n});\n__webpack_require__(/*! es6-promise */ \"es6-promise\").polyfill();\n\n\nvar app = (0, _express2.default)();\nvar PORT = process.env.PORT || 3000;\n\napp.use(_bodyParser2.default.json());\napp.use(_express2.default.static('build/public'));\n\napp.get('/api/news', function (req, res) {\n  res.json([{\n    id: 1,\n    upvotes: 257,\n    title: 'Fianto Duri, the complete tutorial',\n    author: 'RubeusH',\n    date: new Date(Date.now() - 15000000)\n  }, {\n    id: 2,\n    upvotes: 221,\n    title: 'Untransfiguration classes to become compulsory at Hogwarts',\n    author: 'Baddock',\n    date: new Date(Date.now() - 45000000)\n  }, {\n    id: 3,\n    upvotes: 198,\n    title: 'Cracking the Aurologist Interview ',\n    author: 'Hetty',\n    date: new Date(Date.now() - 900000)\n  }, {\n    id: 4,\n    upvotes: 171,\n    title: 'ASK WN: What do you use to digitalize your scrolls?',\n    author: 'Alphard',\n    date: new Date(Date.now() - 40000000)\n  }, {\n    id: 5,\n    upvotes: 166,\n    title: 'The Pragmatic Dragon Feeder',\n    author: 'Baruffio',\n    date: new Date(Date.now() - 10000000)\n  }, {\n    id: 6,\n    upvotes: 145,\n    title: 'The complete quidditch statistics',\n    author: 'Hbeery',\n    date: new Date(Date.now() - 5000000)\n  }, {\n    id: 7,\n    upvotes: 126,\n    title: 'Ordinary Wizarding Levels study guide',\n    author: 'BathBabb',\n    date: new Date(Date.now() - 600000)\n  }, {\n    id: 8,\n    upvotes: 114,\n    title: 'Is muggle-baiting ever acceptable?',\n    author: 'Falco',\n    date: new Date(Date.now() - 60000000)\n  }, {\n    id: 9,\n    upvotes: 74,\n    title: 'Conserving waterplants cheatsheet.',\n    author: 'Otto',\n    date: new Date(Date.now() - 3000000)\n  }, {\n    id: 10,\n    upvotes: 59,\n    title: 'Could wizards prevent WW3?',\n    author: 'Cuthbert',\n    date: new Date(Date.now() - 6000000)\n  }, {\n    id: 11,\n    upvotes: 46,\n    title: 'Show WN: Wand-Extinguishing Protection',\n    author: 'Humphrey22',\n    date: new Date(Date.now() - 50000)\n  }, {\n    id: 12,\n    upvotes: 30,\n    title: 'Do you still use Alarte Ascendare?',\n    author: 'Bellatrix1',\n    date: new Date(Date.now() - 6000000)\n  }, {\n    id: 13,\n    upvotes: 10,\n    title: 'Mailing lists WN readers ought to know about?',\n    author: 'Dracod',\n    date: new Date(Date.now() - 60000)\n  }, {\n    id: 14,\n    upvotes: 8,\n    title: 'How to tell which spell used on a bug?',\n    author: 'Lupin',\n    date: new Date()\n  }]);\n});\n\napp.get('*', function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {\n    var response, data, context, content, helmet, html;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return (0, _isomorphicFetch2.default)('https://jsonplaceholder.typicode.com/posts');\n\n          case 2:\n            response = _context.sent;\n            _context.next = 5;\n            return response.json();\n\n          case 5:\n            data = _context.sent;\n            context = {};\n            content = _server2.default.renderToString(_react2.default.createElement(\n              _reactRouter.StaticRouter,\n              { location: req.url, context: context },\n              _react2.default.createElement(_app2.default, { data: data })\n            ));\n            helmet = _reactHelmet.Helmet.renderStatic();\n            html = '\\n\\n    <!DOCTYPE html>\\n    <html lang=\"en\">\\n    <head>\\n      <meta charset=\"UTF-8\">\\n      <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\\n      <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css\" integrity=\"sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z\" crossorigin=\"anonymous\">\\n            ' + helmet.title.toString() + '\\n    </head>\\n    <body>\\n      <div id=\"root\">\\n      ' + content + '\\n      </div>\\n      <script src=\"https://code.jquery.com/jquery-3.5.1.slim.min.js\" integrity=\"sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj\" crossorigin=\"anonymous\"></script>\\n      <script src=\"https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js\" integrity=\"sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN\" crossorigin=\"anonymous\"></script>\\n      <script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js\" integrity=\"sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV\" crossorigin=\"anonymous\"></script>\\n\\n      <script src=\"client_bundle.js\"></script>\\n      \\n    </body>\\n    </html>\\n\\n  ';\n\n\n            res.send(html);\n\n          case 11:\n          case 'end':\n            return _context.stop();\n        }\n      }\n    }, _callee, undefined);\n  }));\n\n  return function (_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}());\n\napp.listen(PORT, function () {\n  console.log('App running ' + PORT);\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/process/browser.js */ \"./node_modules/process/browser.js\")))\n\n//# sourceURL=webpack:///./server.js?");

/***/ }),

/***/ "./src/ToDoList/ListForm.js":
/*!**********************************!*\
  !*** ./src/ToDoList/ListForm.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"]) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); } }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _toDoContext = __webpack_require__(/*! ../context/ToDoList/toDoContext */ \"./src/context/ToDoList/toDoContext.js\");\n\nvar _toDoContext2 = _interopRequireDefault(_toDoContext);\n\nvar _alertContext = __webpack_require__(/*! ../context/alert/alertContext */ \"./src/context/alert/alertContext.js\");\n\nvar _alertContext2 = _interopRequireDefault(_alertContext);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar ListForm = function ListForm() {\n  var toDoContext = (0, _react.useContext)(_toDoContext2.default);\n  var addListItem = toDoContext.addListItem,\n      current = toDoContext.current,\n      deleteCurrent = toDoContext.deleteCurrent,\n      editItem = toDoContext.editItem;\n\n  var alertContext = (0, _react.useContext)(_alertContext2.default);\n  var setAlert = alertContext.setAlert;\n\n\n  function uuidv4() {\n    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {\n      var r = Math.random() * 16 | 0,\n          v = c == 'x' ? r : r & 0x3 | 0x8;\n      return v.toString(16);\n    });\n  }\n\n  var _useState = (0, _react.useState)({\n    event: '',\n    date: '',\n    id: uuidv4()\n  }),\n      _useState2 = _slicedToArray(_useState, 2),\n      formData = _useState2[0],\n      setFormData = _useState2[1];\n\n  var event = formData.event,\n      date = formData.date;\n\n\n  (0, _react.useEffect)(function () {\n    if (current !== null) {\n      setFormData(current);\n    } else {\n      setFormData({\n        event: '',\n        date: '',\n        id: uuidv4()\n      });\n    }\n  }, [current]);\n\n  var onChange = function onChange(e) {\n    setFormData(_extends({}, formData, _defineProperty({}, e.target.name, e.target.value)));\n  };\n\n  var onSubmit = function onSubmit(e) {\n    e.preventDefault();\n    if (event === '') {\n      setAlert('Plese Enter Event', 'alert-danger');\n    } else if (current !== null) {\n      editItem(formData);\n    } else {\n      addListItem(formData);\n      setFormData({\n        event: '',\n        date: '',\n        id: uuidv4()\n      });\n    }\n  };\n\n  var clearFun = function clearFun() {\n    deleteCurrent();\n  };\n\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(\n      'div',\n      { className: 'card' },\n      _react2.default.createElement(\n        'div',\n        { className: 'card-header' },\n        current !== null ? _react2.default.createElement(\n          'h2',\n          null,\n          'Edit ToDo Item'\n        ) : _react2.default.createElement(\n          'h2',\n          null,\n          'Add ToDO Item'\n        )\n      ),\n      _react2.default.createElement(\n        'div',\n        { className: 'card-body' },\n        _react2.default.createElement(\n          'form',\n          { className: 'form', onSubmit: onSubmit },\n          _react2.default.createElement(\n            'div',\n            { className: 'form-group' },\n            _react2.default.createElement(\n              'label',\n              { htmlFor: 'event' },\n              'Event'\n            ),\n            _react2.default.createElement('input', {\n              type: 'text',\n              name: 'event',\n              id: 'event',\n              placeholder: 'Event Name....',\n              value: event,\n              onChange: onChange,\n              className: 'form-control'\n            })\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'form-group' },\n            _react2.default.createElement(\n              'label',\n              { htmlFor: 'event' },\n              'Event'\n            ),\n            _react2.default.createElement('input', {\n              type: 'date',\n              name: 'date',\n              id: 'date',\n              placeholder: 'Date....',\n              value: date,\n              onChange: onChange,\n              className: 'form-control'\n            })\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'form-group' },\n            _react2.default.createElement('input', {\n              type: 'submit',\n              value: current !== null ? 'Edit Event' : 'Add Event',\n              className: 'btn btn-primary'\n            })\n          ),\n          current !== null && _react2.default.createElement(\n            'div',\n            { className: 'form-group' },\n            _react2.default.createElement(\n              'button',\n              { className: 'btn btn-dark', onClick: clearFun },\n              'Clear'\n            )\n          )\n        )\n      )\n    )\n  );\n};\n\nexports.default = ListForm;\n\n//# sourceURL=webpack:///./src/ToDoList/ListForm.js?");

/***/ }),

/***/ "./src/ToDoList/ToDoList.js":
/*!**********************************!*\
  !*** ./src/ToDoList/ToDoList.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _toDoContext = __webpack_require__(/*! ../context/ToDoList/toDoContext */ \"./src/context/ToDoList/toDoContext.js\");\n\nvar _toDoContext2 = _interopRequireDefault(_toDoContext);\n\nvar _ToDoListItem = __webpack_require__(/*! ./ToDoListItem */ \"./src/ToDoList/ToDoListItem.js\");\n\nvar _ToDoListItem2 = _interopRequireDefault(_ToDoListItem);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar ToDoList = function ToDoList(_ref) {\n  var data = _ref.data;\n\n  var toDoContext = (0, _react.useContext)(_toDoContext2.default);\n  var loading = toDoContext.loading,\n      list = toDoContext.list,\n      showList = toDoContext.showList,\n      dataFetch = toDoContext.dataFetch,\n      fetchDataFun = toDoContext.fetchDataFun;\n\n\n  (0, _react.useEffect)(function () {\n    showList();\n    // fetchDataFun(data);\n    // if (data) {\n    //   fetchDataFun(data);\n    // }\n  }, []);\n\n  // if (dataFetch !== null) {\n  //   console.log(dataFetch);\n  // }\n\n  return _react2.default.createElement(\n    'div',\n    null,\n    !loading && list !== null && list.map(function (listItem) {\n      return _react2.default.createElement(_ToDoListItem2.default, { key: listItem.id, listItem: listItem });\n    })\n  );\n};\n\nexports.default = ToDoList;\n\n//# sourceURL=webpack:///./src/ToDoList/ToDoList.js?");

/***/ }),

/***/ "./src/ToDoList/ToDoListItem.js":
/*!**************************************!*\
  !*** ./src/ToDoList/ToDoListItem.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _toDoContext = __webpack_require__(/*! ../context/ToDoList/toDoContext */ \"./src/context/ToDoList/toDoContext.js\");\n\nvar _toDoContext2 = _interopRequireDefault(_toDoContext);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar ToDoListItem = function ToDoListItem(_ref) {\n  var listItem = _ref.listItem;\n  var event = listItem.event,\n      date = listItem.date,\n      id = listItem.id;\n\n  var toDoContext = (0, _react.useContext)(_toDoContext2.default);\n  var deleteInfo = toDoContext.deleteInfo,\n      current = toDoContext.current,\n      loading = toDoContext.loading,\n      setCurrent = toDoContext.setCurrent,\n      deleteCurrent = toDoContext.deleteCurrent;\n\n\n  var deleteFun = function deleteFun() {\n    deleteInfo(id);\n    deleteCurrent();\n  };\n  return _react2.default.createElement(\n    'div',\n    { className: 'card bg-light my-3' },\n    _react2.default.createElement(\n      'div',\n      { className: 'card-body ' },\n      _react2.default.createElement(\n        'h4',\n        { className: 'lead' },\n        event\n      ),\n      _react2.default.createElement(\n        'h4',\n        { className: 'lead' },\n        date\n      )\n    ),\n    _react2.default.createElement(\n      'div',\n      { className: 'card-footer' },\n      _react2.default.createElement(\n        'button',\n        { className: 'btn btn-danger m-1', onClick: deleteFun },\n        'Delete'\n      ),\n      _react2.default.createElement(\n        'button',\n        {\n          className: 'btn btn-primary m-1',\n          onClick: function onClick() {\n            return setCurrent(listItem);\n          }\n        },\n        'Edit'\n      )\n    )\n  );\n};\n\nexports.default = ToDoListItem;\n\n//# sourceURL=webpack:///./src/ToDoList/ToDoListItem.js?");

/***/ }),

/***/ "./src/ToDoList/ToDoListMain.js":
/*!**************************************!*\
  !*** ./src/ToDoList/ToDoListMain.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _ListForm = __webpack_require__(/*! ./ListForm */ \"./src/ToDoList/ListForm.js\");\n\nvar _ListForm2 = _interopRequireDefault(_ListForm);\n\nvar _ToDoList = __webpack_require__(/*! ./ToDoList */ \"./src/ToDoList/ToDoList.js\");\n\nvar _ToDoList2 = _interopRequireDefault(_ToDoList);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar ToDoListMain = function ToDoListMain(_ref) {\n  var data = _ref.data;\n\n  // useEffect(() => {\n  //   console.log(data);\n  // }, []);\n  return _react2.default.createElement(\n    'div',\n    { className: 'row' },\n    _react2.default.createElement(\n      'div',\n      { className: 'col-md-5 mt-5' },\n      _react2.default.createElement(_ListForm2.default, null)\n    ),\n    _react2.default.createElement(\n      'div',\n      { className: 'col-md-7 mt-5' },\n      _react2.default.createElement(_ToDoList2.default, { data: data })\n    )\n  );\n};\n\nexports.default = ToDoListMain;\n\n//# sourceURL=webpack:///./src/ToDoList/ToDoListMain.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouter = __webpack_require__(/*! react-router */ \"react-router\");\n\nvar _Home = __webpack_require__(/*! ./pages/Home */ \"./src/pages/Home.js\");\n\nvar _Home2 = _interopRequireDefault(_Home);\n\nvar _Navbar = __webpack_require__(/*! ./pages/Navbar */ \"./src/pages/Navbar.js\");\n\nvar _Navbar2 = _interopRequireDefault(_Navbar);\n\nvar _ToDoListMain = __webpack_require__(/*! ./ToDoList/ToDoListMain */ \"./src/ToDoList/ToDoListMain.js\");\n\nvar _ToDoListMain2 = _interopRequireDefault(_ToDoListMain);\n\nvar _ToDoState = __webpack_require__(/*! ./context/ToDoList/ToDoState */ \"./src/context/ToDoList/ToDoState.js\");\n\nvar _ToDoState2 = _interopRequireDefault(_ToDoState);\n\nvar _AlertState = __webpack_require__(/*! ./context/alert/AlertState */ \"./src/context/alert/AlertState.js\");\n\nvar _AlertState2 = _interopRequireDefault(_AlertState);\n\nvar _Alert = __webpack_require__(/*! ./pages/Alert */ \"./src/pages/Alert.js\");\n\nvar _Alert2 = _interopRequireDefault(_Alert);\n\n__webpack_require__(/*! isomorphic-fetch */ \"isomorphic-fetch\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar App = function (_Component) {\n  _inherits(App, _Component);\n\n  function App(props) {\n    _classCallCheck(this, App);\n\n    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));\n\n    var data = null;\n    if (props.data) {\n      data = props.data;\n      console.log(props.data);\n    }\n    _this.state = { news: data };\n    return _this;\n  }\n\n  // componentDidMount() {\n  //   console.log(this.state.news);\n  // }\n\n  // componentDidMount() {\n  //   if (!this.state.news) {\n  //     news.requestInitialData().then((data) => this.setState({ news: data }));\n  //   }\n  // }\n\n  // static requestInitialData() {\n  //   return fetch('https://jsonplaceholder.typicode.com/posts')\n  //     .then((response) => response.json())\n  //     .catch((error) => console.log(error));\n  // }\n\n\n  _createClass(App, [{\n    key: 'render',\n    value: function render() {\n      var news = this.state.news;\n      // console.log(news);\n\n      return _react2.default.createElement(\n        _ToDoState2.default,\n        null,\n        _react2.default.createElement(\n          _AlertState2.default,\n          null,\n          _react2.default.createElement(\n            'div',\n            null,\n            _react2.default.createElement(_Navbar2.default, null),\n            _react2.default.createElement(\n              'div',\n              { className: 'container' },\n              _react2.default.createElement(_Alert2.default, null),\n              _react2.default.createElement(\n                _reactRouter.Switch,\n                null,\n                _react2.default.createElement(_reactRouter.Route, { exact: true, path: '/', component: _Home2.default }),\n                _react2.default.createElement(_reactRouter.Route, {\n                  exact: true,\n                  path: '/toDoList',\n                  render: function render(props) {\n                    return _react2.default.createElement(_ToDoListMain2.default, _extends({}, props, { data: news }));\n                  }\n                }),\n                _react2.default.createElement(_reactRouter.Redirect, { to: '/' })\n              )\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return App;\n}(_react.Component);\n\nexports.default = App;\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/context/ToDoList/ToDoState.js":
/*!*******************************************!*\
  !*** ./src/context/ToDoList/ToDoState.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"]) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); } }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Types = __webpack_require__(/*! ../Types */ \"./src/context/Types.js\");\n\nvar _toDoContext = __webpack_require__(/*! ./toDoContext */ \"./src/context/ToDoList/toDoContext.js\");\n\nvar _toDoContext2 = _interopRequireDefault(_toDoContext);\n\nvar _toDoReducer = __webpack_require__(/*! ./toDoReducer */ \"./src/context/ToDoList/toDoReducer.js\");\n\nvar _toDoReducer2 = _interopRequireDefault(_toDoReducer);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar ToDoState = function ToDoState(props) {\n  var initialState = {\n    list: [{\n      date: '2020-08-09',\n      event: 'Event 1',\n      id: '1'\n    }, {\n      date: '2020-10-29',\n      event: 'Event 2',\n      id: '2'\n    }, {\n      date: '2020-09-2',\n      event: 'Event 3',\n      id: '3'\n    }],\n    loading: true,\n    current: null,\n    dataFetch: null\n  };\n\n  var _useReducer = (0, _react.useReducer)(_toDoReducer2.default, initialState),\n      _useReducer2 = _slicedToArray(_useReducer, 2),\n      state = _useReducer2[0],\n      dispatch = _useReducer2[1];\n\n  //functions (actions)\n\n  var showList = function showList() {\n    dispatch({\n      type: _Types.SHOW_LIST\n    });\n  };\n\n  var deleteInfo = function deleteInfo(id) {\n    dispatch({\n      type: _Types.DELETE_ITEM,\n      payload: id\n    });\n  };\n\n  var setCurrent = function setCurrent(listItem) {\n    dispatch({\n      type: _Types.SET_CURRENT,\n      payload: listItem\n    });\n  };\n\n  var addListItem = function addListItem(formData) {\n    dispatch({\n      type: _Types.ADD_ITEM,\n      payload: formData\n    });\n  };\n\n  var deleteCurrent = function deleteCurrent() {\n    dispatch({\n      type: _Types.DELETE_CURRENT\n    });\n  };\n\n  var editItem = function editItem(formData) {\n    dispatch({\n      type: _Types.EDIT_ITEM,\n      payload: formData\n    });\n  };\n\n  var fetchDataFun = function fetchDataFun(dataList) {\n    dispatch({\n      type: _Types.FETCH_DATA,\n      payload: dataList\n    });\n  };\n\n  return _react2.default.createElement(\n    _toDoContext2.default.Provider,\n    {\n      value: {\n        list: state.list,\n        loading: state.loading,\n        current: state.current,\n        dataFetch: state.dataFetch,\n        showList: showList,\n        deleteInfo: deleteInfo,\n        setCurrent: setCurrent,\n        deleteCurrent: deleteCurrent,\n        addListItem: addListItem,\n        editItem: editItem,\n        fetchDataFun: fetchDataFun\n      }\n    },\n    props.children\n  );\n};\n\nexports.default = ToDoState;\n\n//# sourceURL=webpack:///./src/context/ToDoList/ToDoState.js?");

/***/ }),

/***/ "./src/context/ToDoList/toDoContext.js":
/*!*********************************************!*\
  !*** ./src/context/ToDoList/toDoContext.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar toDoContext = (0, _react.createContext)();\n\nexports.default = toDoContext;\n\n//# sourceURL=webpack:///./src/context/ToDoList/toDoContext.js?");

/***/ }),

/***/ "./src/context/ToDoList/toDoReducer.js":
/*!*********************************************!*\
  !*** ./src/context/ToDoList/toDoReducer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _Types = __webpack_require__(/*! ../Types */ \"./src/context/Types.js\");\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nexports.default = function (state, action) {\n  switch (action.type) {\n    case _Types.SHOW_LIST:\n      return _extends({}, state, {\n        list: state.list,\n        loading: false\n      });\n    case _Types.DELETE_ITEM:\n      return _extends({}, state, {\n        list: state.list.filter(function (item) {\n          return item.id !== action.payload;\n        }),\n        loading: false\n      });\n    case _Types.SET_CURRENT:\n      return _extends({}, state, {\n        current: action.payload,\n        loading: false\n      });\n    case _Types.DELETE_CURRENT:\n      return _extends({}, state, {\n        current: null,\n        loading: false\n      });\n    case _Types.ADD_ITEM:\n      return _extends({}, state, {\n        list: [action.payload].concat(_toConsumableArray(state.list)),\n        loading: false\n      });\n    case _Types.EDIT_ITEM:\n      return _extends({}, state, {\n        loading: false,\n        list: state.list.map(function (listItem) {\n          return listItem.id === action.payload.id ? action.payload : listItem;\n        })\n      });\n    case _Types.FETCH_DATA:\n      return _extends({}, state, {\n        dataFetch: action.payload,\n        loading: false\n      });\n    default:\n      return state;\n  }\n};\n\n//# sourceURL=webpack:///./src/context/ToDoList/toDoReducer.js?");

/***/ }),

/***/ "./src/context/Types.js":
/*!******************************!*\
  !*** ./src/context/Types.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar SHOW_LIST = exports.SHOW_LIST = 'SHOW_LIST';\nvar DELETE_ITEM = exports.DELETE_ITEM = 'DELETE_ITEM';\nvar SET_CURRENT = exports.SET_CURRENT = 'SET_CURRENT';\nvar DELETE_CURRENT = exports.DELETE_CURRENT = 'DELETE_CURRENT';\nvar ADD_ITEM = exports.ADD_ITEM = 'ADD_ITEM';\nvar EDIT_ITEM = exports.EDIT_ITEM = 'EDIT_ITEM';\nvar SET_ALERT = exports.SET_ALERT = 'SET_ALERT';\nvar REMOVE_ALERT = exports.REMOVE_ALERT = 'REMOVE_ALERT';\nvar FETCH_DATA = exports.FETCH_DATA = 'FETCH_DATA';\n\n//# sourceURL=webpack:///./src/context/Types.js?");

/***/ }),

/***/ "./src/context/alert/AlertState.js":
/*!*****************************************!*\
  !*** ./src/context/alert/AlertState.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"]) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); } }; }();\n\nvar _Types = __webpack_require__(/*! ../Types */ \"./src/context/Types.js\");\n\nvar _alertContext = __webpack_require__(/*! ./alertContext */ \"./src/context/alert/alertContext.js\");\n\nvar _alertContext2 = _interopRequireDefault(_alertContext);\n\nvar _alertReducer = __webpack_require__(/*! ./alertReducer */ \"./src/context/alert/alertReducer.js\");\n\nvar _alertReducer2 = _interopRequireDefault(_alertReducer);\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar AlertState = function AlertState(props) {\n  var initialState = null;\n\n  var _useReducer = (0, _react.useReducer)(_alertReducer2.default, initialState),\n      _useReducer2 = _slicedToArray(_useReducer, 2),\n      state = _useReducer2[0],\n      dispatch = _useReducer2[1];\n\n  //functions (actions)\n\n  var setAlert = function setAlert(msg, type) {\n    dispatch({\n      type: _Types.SET_ALERT,\n      payload: { msg: msg, type: type }\n    });\n    setTimeout(function () {\n      return dispatch({\n        type: _Types.REMOVE_ALERT\n      });\n    }, 5000);\n  };\n\n  return _react2.default.createElement(\n    _alertContext2.default.Provider,\n    {\n      value: {\n        alert: state,\n        setAlert: setAlert\n      }\n    },\n    props.children\n  );\n};\n\nexports.default = AlertState;\n\n//# sourceURL=webpack:///./src/context/alert/AlertState.js?");

/***/ }),

/***/ "./src/context/alert/alertContext.js":
/*!*******************************************!*\
  !*** ./src/context/alert/alertContext.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar alertContext = (0, _react.createContext)();\n\nexports.default = alertContext;\n\n//# sourceURL=webpack:///./src/context/alert/alertContext.js?");

/***/ }),

/***/ "./src/context/alert/alertReducer.js":
/*!*******************************************!*\
  !*** ./src/context/alert/alertReducer.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _Types = __webpack_require__(/*! ../Types */ \"./src/context/Types.js\");\n\nexports.default = function (state, action) {\n  switch (action.type) {\n    case _Types.SET_ALERT:\n      return action.payload;\n    case _Types.REMOVE_ALERT:\n      return null;\n    default:\n      return state;\n  }\n};\n\n//# sourceURL=webpack:///./src/context/alert/alertReducer.js?");

/***/ }),

/***/ "./src/pages/Alert.js":
/*!****************************!*\
  !*** ./src/pages/Alert.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _alertContext = __webpack_require__(/*! ../context/alert/alertContext */ \"./src/context/alert/alertContext.js\");\n\nvar _alertContext2 = _interopRequireDefault(_alertContext);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Alert = function Alert() {\n  var alertContext = (0, _react.useContext)(_alertContext2.default);\n  var alert = alertContext.alert;\n\n  return _react2.default.createElement(\n    'div',\n    { className: 'mt-2' },\n    alert !== null && _react2.default.createElement(\n      'div',\n      { className: 'alert ' + alert.type },\n      alert.msg\n    )\n  );\n};\n\nexports.default = Alert;\n\n//# sourceURL=webpack:///./src/pages/Alert.js?");

/***/ }),

/***/ "./src/pages/Home.js":
/*!***************************!*\
  !*** ./src/pages/Home.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactHelmet = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _toDoContext = __webpack_require__(/*! ../context/ToDoList/toDoContext */ \"./src/context/ToDoList/toDoContext.js\");\n\nvar _toDoContext2 = _interopRequireDefault(_toDoContext);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Home = function Home() {\n  var toDoContext = (0, _react.useContext)(_toDoContext2.default);\n  var head = function head() {\n    return _react2.default.createElement(\n      _reactHelmet.Helmet,\n      null,\n      _react2.default.createElement(\n        'title',\n        null,\n        'My Page Title'\n      )\n    );\n  };\n\n  return _react2.default.createElement(\n    'div',\n    { className: 'text-center', style: { margin: '90px' } },\n    head(),\n    _react2.default.createElement(\n      'button',\n      { className: 'btn btn-dark' },\n      _react2.default.createElement(\n        _reactRouterDom.Link,\n        { to: '/toDoList', className: 'nav-link' },\n        'To Do List'\n      )\n    )\n  );\n};\n\nexports.default = Home;\n\n//# sourceURL=webpack:///./src/pages/Home.js?");

/***/ }),

/***/ "./src/pages/Navbar.js":
/*!*****************************!*\
  !*** ./src/pages/Navbar.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Navbar = function Navbar() {\n  return _react2.default.createElement(\n    'nav',\n    { className: 'navbar navbar-expand-lg navbar-light bg-light' },\n    _react2.default.createElement(\n      _reactRouterDom.Link,\n      { className: 'navbar-brand', to: '/' },\n      'ToDoApp'\n    ),\n    _react2.default.createElement(\n      'button',\n      {\n        className: 'navbar-toggler',\n        type: 'button',\n        'data-toggle': 'collapse',\n        'data-target': '#navbarNavAltMarkup',\n        'aria-controls': 'navbarNavAltMarkup',\n        'aria-expanded': 'false',\n        'aria-label': 'Toggle navigation'\n      },\n      _react2.default.createElement('span', { className: 'navbar-toggler-icon' })\n    ),\n    _react2.default.createElement(\n      'div',\n      { className: 'collapse navbar-collapse', id: 'navbarNavAltMarkup' },\n      _react2.default.createElement(\n        'div',\n        { className: 'navbar-nav ml-auto' },\n        _react2.default.createElement(\n          _reactRouterDom.Link,\n          { className: 'nav-item nav-link active', to: '/' },\n          'Home ',\n          _react2.default.createElement(\n            'span',\n            { className: 'sr-only' },\n            '(current)'\n          )\n        ),\n        _react2.default.createElement(\n          _reactRouterDom.Link,\n          { className: 'nav-item nav-link active', to: '/toDoList' },\n          'To Do List ',\n          _react2.default.createElement(\n            'span',\n            { className: 'sr-only' },\n            '(current)'\n          )\n        )\n      )\n    )\n  );\n};\n\nexports.default = Navbar;\n\n//# sourceURL=webpack:///./src/pages/Navbar.js?");

/***/ }),

/***/ "babel-polyfill":
/*!*********************************!*\
  !*** external "babel-polyfill" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-polyfill\");\n\n//# sourceURL=webpack:///external_%22babel-polyfill%22?");

/***/ }),

/***/ "babel-register":
/*!*********************************!*\
  !*** external "babel-register" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-register\");\n\n//# sourceURL=webpack:///external_%22babel-register%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "es6-promise":
/*!******************************!*\
  !*** external "es6-promise" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"es6-promise\");\n\n//# sourceURL=webpack:///external_%22es6-promise%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"isomorphic-fetch\");\n\n//# sourceURL=webpack:///external_%22isomorphic-fetch%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-helmet\");\n\n//# sourceURL=webpack:///external_%22react-helmet%22?");

/***/ }),

/***/ "react-router":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router\");\n\n//# sourceURL=webpack:///external_%22react-router%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ })

/******/ });