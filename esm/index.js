import { useLocale, useMessages } from 'next-intl';
import React, { createContext, useState, useEffect, useContext } from 'react';

function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _regeneratorRuntime() {
  _regeneratorRuntime = function () {
    return e;
  };
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function (t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t, i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function (t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw new Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: !0
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
          if (o === h) throw o = s, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
            return next.value = t, next.done = !0, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError(typeof e + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
    return this;
  }), define(g, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) r.push(n);
    return r.reverse(), function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) return next.value = t, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function (e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
    },
    stop: function () {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function (e) {
      if (this.done) throw e;
      var r = this;
      function handle(n, o) {
        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) return handle("end");
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
          } else {
            if (!u) throw new Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          }
        }
      }
    },
    abrupt: function (t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function (t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
    },
    finish: function (t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
      }
    },
    catch: function (t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function (e, r, n) {
      return this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && (this.arg = t), y;
    }
  }, e;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var AutoTranslateContext = /*#__PURE__*/createContext();
var AutoTranslateProvider = function AutoTranslateProvider(_ref) {
  var children = _ref.children,
    pathname = _ref.pathname,
    _ref$defaultLocale = _ref.defaultLocale,
    defaultLocale = _ref$defaultLocale === void 0 ? "en" : _ref$defaultLocale,
    _ref$gptModel = _ref.gptModel,
    gptModel = _ref$gptModel === void 0 ? 'gpt-3.5-turbo' : _ref$gptModel,
    locales = _ref.locales,
    locale = _ref.locale,
    debug = _ref.debug;
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    translationQueue = _useState2[0],
    setTranslationQueue = _useState2[1];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isProcessing = _useState4[0],
    setIsProcessing = _useState4[1];
  var addToQueue = function addToQueue(translationTask) {
    // See if this is already in queue
    if (translationQueue.find(function (t) {
      return t.tKey === translationTask.tKey;
    })) return;
    setTranslationQueue(function (prevQueue) {
      return [].concat(_toConsumableArray(prevQueue), [translationTask]);
    });
  };
  var processQueue = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var currentTask;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!(isProcessing || translationQueue.length === 0)) {
              _context.next = 2;
              break;
            }
            return _context.abrupt("return");
          case 2:
            setIsProcessing(true);
            currentTask = translationQueue[0];
            _context.prev = 4;
            _context.next = 7;
            return runTranslations(currentTask);
          case 7:
            setTranslationQueue(function (prevQueue) {
              return prevQueue.slice(1);
            });
            _context.next = 13;
            break;
          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](4);
            console.error('Translation Error:', _context.t0);
          case 13:
            _context.prev = 13;
            setIsProcessing(false);
            return _context.finish(13);
          case 16:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[4, 10, 13, 16]]);
    }));
    return function processQueue() {
      return _ref2.apply(this, arguments);
    };
  }();
  useEffect(function () {
    if (debug) {
      console.log("[AutoTranslate] GPT Model: ", gptModel);
      console.log("[AutoTranslate] Default Locale: ", defaultLocale);
      console.log("[AutoTranslate] Current Locale: ", locale);
    }
    processQueue();
  }, [translationQueue, isProcessing]);
  var runTranslations = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(_ref3) {
      var namespace, tKey, message, response, data;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            namespace = _ref3.namespace, tKey = _ref3.tKey, message = _ref3.message;
            _context2.next = 3;
            return fetch("/api/translate/run", {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                namespace: namespace,
                tKey: tKey,
                message: message,
                locales: locales,
                defaultLocale: defaultLocale,
                gptModel: gptModel
              })
            });
          case 3:
            response = _context2.sent;
            _context2.next = 6;
            return response.json();
          case 6:
            data = _context2.sent;
            if (!data.success) {
              _context2.next = 10;
              break;
            }
            _context2.next = 11;
            break;
          case 10:
            throw new Error(data.error || 'Translation failed');
          case 11:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function runTranslations(_x) {
      return _ref4.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/React.createElement(AutoTranslateContext.Provider, {
    value: {
      pathname: pathname,
      defaultLocale: defaultLocale,
      debug: debug,
      locales: locales,
      addToQueue: addToQueue
    }
  }, children, isProcessing && translatingElement);
};
var translatingElement = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, "\n                @keyframes ellipsis {\n                    0% { content: ''; }\n                    25% { content: '.'; }\n                    50% { content: '..'; }\n                    75% { content: '...'; }\n                    100% { content: '...'; }\n                }\n\n                .ellipsis::after {\n                    content: '';\n                    animation: ellipsis 2.0s infinite;\n                }\n            "), /*#__PURE__*/React.createElement("span", {
  style: {
    position: 'fixed',
    bottom: '10%',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '160px',
    background: 'rgba(255, 255, 255, 0.75)',
    color: 'white',
    textAlign: 'center',
    borderRadius: '10px',
    padding: '10px 0',
    zIndex: 1000,
    fontSize: '14px'
  }
}, /*#__PURE__*/React.createElement("span", {
  className: "ellipsis"
}, /*#__PURE__*/React.createElement("i", null, "Translating"))));

var isDev = process.env.NODE_ENV === 'development';
var AutoTranslate = function AutoTranslate(_ref) {
  var tKey = _ref.tKey,
    children = _ref.children,
    namespace = _ref.namespace;
  var _useContext = useContext(AutoTranslateContext),
    pathname = _useContext.pathname,
    defaultLocale = _useContext.defaultLocale,
    locales = _useContext.locales,
    debug = _useContext.debug,
    addToQueue = _useContext.addToQueue;
  var locale = useLocale();
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    initialized = _useState2[0],
    setInitialized = _useState2[1];
  var _useState3 = useState(isDev),
    _useState4 = _slicedToArray(_useState3, 2);
    _useState4[0];
    var setLoading = _useState4[1];
  var messages = useMessages();

  // If no locales provided, throw getTranslationProps error
  if (!locales && (debug || isDev) && typeof window !== 'undefined') {
    console.error("[AutoTranslate]\nMissing required props in AutoTranslateProvider: locales & defaultLocale\n        \n-- You must export 'getTranslationProps' to use AutoTranslate on this Page --\n\nExample:\n\nimport { getTranslationProps } from 'next-auto-translate/server'\n\nexport async function getStaticProps(context) {\n    return {\n        props: {\n            ...await getTranslationProps(context)\n        }\n    };\n}\n");
  }
  var usePathname = pathname;

  // If no pathname provided, use window.location.pathname
  if (!pathname && typeof window !== 'undefined') {
    usePathname = window.location.pathname;
  }

  // Get namespace from pathname, which is the first part of the pathname
  var startPath = usePathname.replace("/" + locale, "").split("/")[1];

  // If path is empty, use index
  if (startPath.length == 0) {
    startPath = "index";
  }

  // If no namespace provided, use the pathname
  if (!namespace) {
    namespace = startPath;
  }

  // Only automatically run translations in dev mode
  if (isDev) {
    var checkTranslations = function checkTranslations() {
      if (debug) {
        console.log("[AutoTranslate] Namespace: ", namespace);
      }
      setLoading(true);
      fetch("/api/translate/check", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          namespace: namespace,
          tKey: tKey,
          message: children,
          locales: locales,
          defaultLocale: defaultLocale
        })
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        if (data.run_translate) {
          addToQueue({
            namespace: namespace,
            tKey: tKey,
            message: children
          });
          setLoading(false);
        } else {
          if (isDev || debug) {
            console.log("[AutoTranslate] ".concat(namespace, ".").concat(tKey, " Translations already exist! \uD83D\uDE0E"));
          }
          setLoading(false);
        }
        setInitialized(true);
      })["catch"](function (err) {
        console.error(err);
        setLoading(false);
      });
    };
    useEffect(function () {
      if (initialized) {
        setLoading(true);
        checkTranslations();
      }
    }, [children, messages, locales]);
    useEffect(function () {
      if (!initialized) {
        checkTranslations();
      }
    }, []);
  }
  if (!messages[namespace]) {
    return children;
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, messages[namespace][tKey] || children);
};

export { AutoTranslate, AutoTranslateContext, AutoTranslateProvider };