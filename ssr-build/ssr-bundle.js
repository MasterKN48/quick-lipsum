module.exports =
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/quick-lipsum/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "JkW7");
/******/ })
/************************************************************************/
/******/ ({

/***/ "JkW7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./style/index.css
var style = __webpack_require__("rq4c");
var style_default = /*#__PURE__*/__webpack_require__.n(style);

// EXTERNAL MODULE: ../node_modules/milligram/dist/milligram.min.css
var milligram_min = __webpack_require__("h8Np");
var milligram_min_default = /*#__PURE__*/__webpack_require__.n(milligram_min);

// EXTERNAL MODULE: ../node_modules/preact/dist/preact.min.js
var preact_min = __webpack_require__("KM04");
var preact_min_default = /*#__PURE__*/__webpack_require__.n(preact_min);

// CONCATENATED MODULE: ../node_modules/preact-router/dist/preact-router.es.js


var EMPTY$1 = {};

function preact_router_es_assign(obj, props) {
	// eslint-disable-next-line guard-for-in
	for (var i in props) {
		obj[i] = props[i];
	}
	return obj;
}

function exec(url, route, opts) {
	var reg = /(?:\?([^#]*))?(#.*)?$/,
	    c = url.match(reg),
	    matches = {},
	    ret;
	if (c && c[1]) {
		var p = c[1].split('&');
		for (var i = 0; i < p.length; i++) {
			var r = p[i].split('=');
			matches[decodeURIComponent(r[0])] = decodeURIComponent(r.slice(1).join('='));
		}
	}
	url = segmentize(url.replace(reg, ''));
	route = segmentize(route || '');
	var max = Math.max(url.length, route.length);
	for (var i$1 = 0; i$1 < max; i$1++) {
		if (route[i$1] && route[i$1].charAt(0) === ':') {
			var param = route[i$1].replace(/(^:|[+*?]+$)/g, ''),
			    flags = (route[i$1].match(/[+*?]+$/) || EMPTY$1)[0] || '',
			    plus = ~flags.indexOf('+'),
			    star = ~flags.indexOf('*'),
			    val = url[i$1] || '';
			if (!val && !star && (flags.indexOf('?') < 0 || plus)) {
				ret = false;
				break;
			}
			matches[param] = decodeURIComponent(val);
			if (plus || star) {
				matches[param] = url.slice(i$1).map(decodeURIComponent).join('/');
				break;
			}
		} else if (route[i$1] !== url[i$1]) {
			ret = false;
			break;
		}
	}
	if (opts.default !== true && ret === false) {
		return false;
	}
	return matches;
}

function pathRankSort(a, b) {
	return a.rank < b.rank ? 1 : a.rank > b.rank ? -1 : a.index - b.index;
}

// filter out VNodes without attributes (which are unrankeable), and add `index`/`rank` properties to be used in sorting.
function prepareVNodeForRanking(vnode, index) {
	vnode.index = index;
	vnode.rank = rankChild(vnode);
	return vnode.props;
}

function segmentize(url) {
	return url.replace(/(^\/+|\/+$)/g, '').split('/');
}

function rankSegment(segment) {
	return segment.charAt(0) == ':' ? 1 + '*+?'.indexOf(segment.charAt(segment.length - 1)) || 4 : 5;
}

function rank(path) {
	return segmentize(path).map(rankSegment).join('');
}

function rankChild(vnode) {
	return vnode.props.default ? 0 : rank(vnode.props.path);
}

var customHistory = null;

var ROUTERS = [];

var subscribers = [];

var EMPTY = {};

function setUrl(url, type) {
	if (type === void 0) type = 'push';

	if (customHistory && customHistory[type]) {
		customHistory[type](url);
	} else if (typeof history !== 'undefined' && history[type + 'State']) {
		history[type + 'State'](null, null, url);
	}
}

function getCurrentUrl() {
	var url;
	if (customHistory && customHistory.location) {
		url = customHistory.location;
	} else if (customHistory && customHistory.getCurrentLocation) {
		url = customHistory.getCurrentLocation();
	} else {
		url = typeof location !== 'undefined' ? location : EMPTY;
	}
	return "" + (url.pathname || '') + (url.search || '');
}

function route(url, replace) {
	if (replace === void 0) replace = false;

	if (typeof url !== 'string' && url.url) {
		replace = url.replace;
		url = url.url;
	}

	// only push URL into history if we can handle it
	if (preact_router_es_canRoute(url)) {
		setUrl(url, replace ? 'replace' : 'push');
	}

	return routeTo(url);
}

/** Check if the given URL can be handled by any router instances. */
function preact_router_es_canRoute(url) {
	for (var i = ROUTERS.length; i--;) {
		if (ROUTERS[i].canRoute(url)) {
			return true;
		}
	}
	return false;
}

/** Tell all router instances to handle the given URL.  */
function routeTo(url) {
	var didRoute = false;
	for (var i = 0; i < ROUTERS.length; i++) {
		if (ROUTERS[i].routeTo(url) === true) {
			didRoute = true;
		}
	}
	for (var i$1 = subscribers.length; i$1--;) {
		subscribers[i$1](url);
	}
	return didRoute;
}

function routeFromLink(node) {
	// only valid elements
	if (!node || !node.getAttribute) {
		return;
	}

	var href = node.getAttribute('href'),
	    target = node.getAttribute('target');

	// ignore links with targets and non-path URLs
	if (!href || !href.match(/^\//g) || target && !target.match(/^_?self$/i)) {
		return;
	}

	// attempt to route, if no match simply cede control to browser
	return route(href);
}

function handleLinkClick(e) {
	if (e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || e.button !== 0) {
		return;
	}
	routeFromLink(e.currentTarget || e.target || this);
	return prevent(e);
}

function prevent(e) {
	if (e) {
		if (e.stopImmediatePropagation) {
			e.stopImmediatePropagation();
		}
		if (e.stopPropagation) {
			e.stopPropagation();
		}
		e.preventDefault();
	}
	return false;
}

function delegateLinkHandler(e) {
	// ignore events the browser takes care of already:
	if (e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || e.button !== 0) {
		return;
	}

	var t = e.target;
	do {
		if (String(t.nodeName).toUpperCase() === 'A' && t.getAttribute('href')) {
			if (t.hasAttribute('native')) {
				return;
			}
			// if link is handled by the router, prevent browser defaults
			if (routeFromLink(t)) {
				return prevent(e);
			}
		}
	} while (t = t.parentNode);
}

var eventListenersInitialized = false;

function initEventListeners() {
	if (eventListenersInitialized) {
		return;
	}

	if (typeof addEventListener === 'function') {
		if (!customHistory) {
			addEventListener('popstate', function () {
				routeTo(getCurrentUrl());
			});
		}
		addEventListener('click', delegateLinkHandler);
	}
	eventListenersInitialized = true;
}

var preact_router_es_Router = function (Component$$1) {
	function Router(props) {
		Component$$1.call(this, props);
		if (props.history) {
			customHistory = props.history;
		}

		this.state = {
			url: props.url || getCurrentUrl()
		};

		initEventListeners();
	}

	if (Component$$1) Router.__proto__ = Component$$1;
	Router.prototype = Object.create(Component$$1 && Component$$1.prototype);
	Router.prototype.constructor = Router;

	Router.prototype.shouldComponentUpdate = function shouldComponentUpdate(props) {
		if (props.static !== true) {
			return true;
		}
		return props.url !== this.props.url || props.onChange !== this.props.onChange;
	};

	/** Check if the given URL can be matched against any children */
	Router.prototype.canRoute = function canRoute(url) {
		var children = Object(preact_min["toChildArray"])(this.props.children);
		return this.getMatchingChildren(children, url, false).length > 0;
	};

	/** Re-render children with a new URL to match against. */
	Router.prototype.routeTo = function routeTo(url) {
		this.setState({ url: url });

		var didRoute = this.canRoute(url);

		// trigger a manual re-route if we're not in the middle of an update:
		if (!this.updating) {
			this.forceUpdate();
		}

		return didRoute;
	};

	Router.prototype.componentWillMount = function componentWillMount() {
		ROUTERS.push(this);
		this.updating = true;
	};

	Router.prototype.componentDidMount = function componentDidMount() {
		var this$1 = this;

		if (customHistory) {
			this.unlisten = customHistory.listen(function (location) {
				this$1.routeTo("" + (location.pathname || '') + (location.search || ''));
			});
		}
		this.updating = false;
	};

	Router.prototype.componentWillUnmount = function componentWillUnmount() {
		if (typeof this.unlisten === 'function') {
			this.unlisten();
		}
		ROUTERS.splice(ROUTERS.indexOf(this), 1);
	};

	Router.prototype.componentWillUpdate = function componentWillUpdate() {
		this.updating = true;
	};

	Router.prototype.componentDidUpdate = function componentDidUpdate() {
		this.updating = false;
	};

	Router.prototype.getMatchingChildren = function getMatchingChildren(children, url, invoke) {
		return children.filter(prepareVNodeForRanking).sort(pathRankSort).map(function (vnode) {
			var matches = exec(url, vnode.props.path, vnode.props);
			if (matches) {
				if (invoke !== false) {
					var newProps = { url: url, matches: matches };
					preact_router_es_assign(newProps, matches);
					delete newProps.ref;
					delete newProps.key;
					return Object(preact_min["cloneElement"])(vnode, newProps);
				}
				return vnode;
			}
		}).filter(Boolean);
	};

	Router.prototype.render = function render(ref, ref$1) {
		var children = ref.children;
		var onChange = ref.onChange;
		var url = ref$1.url;

		var active = this.getMatchingChildren(Object(preact_min["toChildArray"])(children), url, true);

		var current = active[0] || null;

		var previous = this.previousUrl;
		if (url !== previous) {
			this.previousUrl = url;
			if (typeof onChange === 'function') {
				onChange({
					router: this,
					url: url,
					previous: previous,
					active: active,
					current: current
				});
			}
		}

		return current;
	};

	return Router;
}(preact_min["Component"]);

var preact_router_es_Link = function Link(props) {
	return Object(preact_min["createElement"])('a', preact_router_es_assign({ onClick: handleLinkClick }, props));
};

var preact_router_es_Route = function Route(props) {
	return Object(preact_min["createElement"])(props.component, props);
};

preact_router_es_Router.subscribers = subscribers;
preact_router_es_Router.getCurrentUrl = getCurrentUrl;
preact_router_es_Router.route = route;
preact_router_es_Router.Router = preact_router_es_Router;
preact_router_es_Router.Route = preact_router_es_Route;
preact_router_es_Router.Link = preact_router_es_Link;
preact_router_es_Router.exec = exec;

/* harmony default export */ var preact_router_es = (preact_router_es_Router);
//# sourceMappingURL=preact-router.es.js.map
// CONCATENATED MODULE: ../node_modules/preact/hooks/dist/hooks.module.js
var hooks_module_t,
    hooks_module_u,
    hooks_module_r,
    hooks_module_i = 0,
    hooks_module_o = [],
    c = preact_min["options"].__r,
    f = preact_min["options"].diffed,
    e = preact_min["options"].__c,
    a = preact_min["options"].unmount;function v(t, r) {
  preact_min["options"].__h && preact_min["options"].__h(hooks_module_u, t, hooks_module_i || r), hooks_module_i = 0;var o = hooks_module_u.__H || (hooks_module_u.__H = { __: [], __h: [] });return t >= o.__.length && o.__.push({}), o.__[t];
}function m(n) {
  return hooks_module_i = 1, p(E, n);
}function p(n, r, i) {
  var o = v(hooks_module_t++, 2);return o.t = n, o.__c || (o.__c = hooks_module_u, o.__ = [i ? i(r) : E(void 0, r), function (n) {
    var t = o.t(o.__[0], n);o.__[0] !== t && (o.__[0] = t, o.__c.setState({}));
  }]), o.__;
}function l(r, i) {
  var o = v(hooks_module_t++, 3);!preact_min["options"].__s && x(o.__H, i) && (o.__ = r, o.__H = i, hooks_module_u.__H.__h.push(o));
}function y(r, i) {
  var o = v(hooks_module_t++, 4);!preact_min["options"].__s && x(o.__H, i) && (o.__ = r, o.__H = i, hooks_module_u.__h.push(o));
}function d(n) {
  return hooks_module_i = 5, h(function () {
    return { current: n };
  }, []);
}function s(n, t, u) {
  hooks_module_i = 6, y(function () {
    "function" == typeof n ? n(t()) : n && (n.current = t());
  }, null == u ? u : u.concat(n));
}function h(n, u) {
  var r = v(hooks_module_t++, 7);return x(r.__H, u) ? (r.__H = u, r.__h = n, r.__ = n()) : r.__;
}function T(n, t) {
  return hooks_module_i = 8, h(function () {
    return n;
  }, t);
}function w(n) {
  var r = hooks_module_u.context[n.__c],
      i = v(hooks_module_t++, 9);return i.__c = n, r ? (null == i.__ && (i.__ = !0, r.sub(hooks_module_u)), r.props.value) : n.__;
}function A(t, u) {
  preact_min["options"].useDebugValue && preact_min["options"].useDebugValue(u ? u(t) : t);
}function F(n) {
  var r = v(hooks_module_t++, 10),
      i = m();return r.__ = n, hooks_module_u.componentDidCatch || (hooks_module_u.componentDidCatch = function (n) {
    r.__ && r.__(n), i[1](n);
  }), [i[0], function () {
    i[1](void 0);
  }];
}function _() {
  hooks_module_o.some(function (t) {
    if (t.__P) try {
      t.__H.__h.forEach(g), t.__H.__h.forEach(q), t.__H.__h = [];
    } catch (u) {
      return t.__H.__h = [], preact_min["options"].__e(u, t.__v), !0;
    }
  }), hooks_module_o = [];
}function g(n) {
  "function" == typeof n.u && n.u();
}function q(n) {
  n.u = n.__();
}function x(n, t) {
  return !n || t.some(function (t, u) {
    return t !== n[u];
  });
}function E(n, t) {
  return "function" == typeof t ? t(n) : t;
}preact_min["options"].__r = function (n) {
  c && c(n), hooks_module_t = 0;var r = (hooks_module_u = n.__c).__H;r && (r.__h.forEach(g), r.__h.forEach(q), r.__h = []);
}, preact_min["options"].diffed = function (t) {
  f && f(t);var u = t.__c;u && u.__H && u.__H.__h.length && (1 !== hooks_module_o.push(u) && hooks_module_r === preact_min["options"].requestAnimationFrame || ((hooks_module_r = preact_min["options"].requestAnimationFrame) || function (n) {
    var t,
        u = function u() {
      clearTimeout(r), cancelAnimationFrame(t), setTimeout(n);
    },
        r = setTimeout(u, 100);"undefined" != typeof window && (t = requestAnimationFrame(u));
  })(_));
}, preact_min["options"].__c = function (t, u) {
  u.some(function (t) {
    try {
      t.__h.forEach(g), t.__h = t.__h.filter(function (n) {
        return !n.__ || q(n);
      });
    } catch (r) {
      u.some(function (n) {
        n.__h && (n.__h = []);
      }), u = [], preact_min["options"].__e(r, t.__v);
    }
  }), e && e(t, u);
}, preact_min["options"].unmount = function (t) {
  a && a(t);var u = t.__c;if (u && u.__H) try {
    u.__H.__.forEach(g);
  } catch (t) {
    preact_min["options"].__e(t, u.__v);
  }
};
//# sourceMappingURL=hooks.module.js.map
// CONCATENATED MODULE: ./routes/home/index.js



var str = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proinut aliquam augue. Proin sit amet interdum ante, vel volutpat mi.Suspendisse sit amet egestas nisl. Nulla aliquet neque dolor,eget feugiat ante ultricies quis. Nulla efficitur tempus magnaac varius. Nulla facilisi. Praesent id pulvinar nisi. Duis quis massa a erat dapibus volutpat vel in quam. Vivamus commodo nunc non massa fringilla, porta posuere urna lobortis. Quisque lacinia vitae justo sit amet scelerisque. Quisque vitae purus tortor. Nulla facilisi. Aenean hendrerit tortor dapibus, auctor metus ut, elementum mi. Aliquam feugiat condimentum vestibulum.Quisque sit amet risus vel lorem vehicula rutrum. Nunc fringilla, diam et volutpat facilisis, odio diam dignissim leo,vitae venenatis augue magna ac tellus. Quisque vel purusmaximus, egestas est vel, egestas diam. In vitae bibendum tortor, nec lacinia leo. Aliquam elit lectus, vehicula eget est sed, porta porttitor sem. Sed sit amet felis dolor. Pellentesque convallis leo vel maximus blandit. Proin convallis aliquam velit. Pellentesque mollis ultricies convallis. Nunc quis sapien id est varius efficitur et vitae dolor. Morbi viverra auctor nisl, vel commodo odio malesuada ut. Nunc eget elit nisl. Suspendisse faucibus odio ante, vel fermentum magna congue eu. Suspendisse ac erat sed ex aliquet dapibus ut pellentesque nunc.";

var _ref = Object(preact_min["h"])(
  "h1",
  null,
  "Quick-Lipsum"
);

var _ref2 = Object(preact_min["h"])(
  "label",
  { htmlFor: "para" },
  "Paragraph "
);

var _ref3 = Object(preact_min["h"])("br", null);

var _ref4 = Object(preact_min["h"])("br", null);

var _ref5 = Object(preact_min["h"])(
  "button",
  { "class": "button" },
  "Generate"
);

var home_Home = function Home() {
  var _useState = m(str),
      paragraph = _useState[0],
      setParagraph = _useState[1];

  var _useState2 = m(1),
      count = _useState2[0],
      setCount = _useState2[1];

  var _useState3 = m(false),
      msg = _useState3[0],
      setMsg = _useState3[1];

  var _useState4 = m({ type: "p", status: false }),
      tag = _useState4[0],
      setTag = _useState4[1];

  m(function () {
    window.onload = function () {
      copyToClip();
    };
  }, [paragraph]);
  var copyToClip = function copyToClip() {
    navigator.permissions.query({
      name: "clipboard-write"
    }).then(function (permissionStatus) {
      // Will be 'granted', 'denied' or 'prompt':
      //console.log(permissionStatus.state);
      var data = "";
      if (tag.type === "p" && tag.status === true) {
        var temp = "\n<p> " + str + " </p>\n";
        data = temp.repeat(count);
      } else {
        data = ("\n" + str + "\n").repeat(count);
      }
      if (permissionStatus.state === "granted") {
        //console.log(data);
        navigator.clipboard.writeText(data).then(function () {
          // Success!
          setParagraph(data);
          setMsg("Copied to clipboard");
        }).catch(function (err) {
          setMsg("Permission not granted! try clicking on textarea to copy");
        });
      } else {
        setMsg("Permission not granted! try clicking on textarea to copy");
      }
    });
  };
  var submit = function submit(e) {
    e.preventDefault();
    setMsg("");
    copyToClip();
  };
  return Object(preact_min["h"])(
    "div",
    { "class": "container margin" },
    _ref,
    Object(preact_min["h"])(
      "div",
      { "class": "row" },
      Object(preact_min["h"])(
        "div",
        { "class": "column" },
        Object(preact_min["h"])(
          "form",
          { onSubmit: submit, "class": "pure-form" },
          _ref2,
          Object(preact_min["h"])("input", {
            type: "number",
            name: "para",
            min: "1",
            max: "1000",
            id: "para",
            spellcheck: "false",
            onChange: function onChange(e) {
              return setCount(e.target.value);
            },
            value: count,
            placeholder: "Enter Number of paragraph"
          }),
          _ref3,
          Object(preact_min["h"])("input", {
            type: "checkbox",
            onChange: function onChange(e) {
              setTag({ type: e.target.value, status: true });
            },
            value: "p",
            name: "tag",
            id: "tag"
          }),
          " ",
          "Include Paragraph Tag",
          _ref4,
          _ref5
        ),
        msg.length > 0 ? Object(preact_min["h"])(
          "blockquote",
          null,
          Object(preact_min["h"])(
            "p",
            null,
            Object(preact_min["h"])(
              "em",
              null,
              msg
            )
          )
        ) : null
      ),
      Object(preact_min["h"])(
        "div",
        { "class": "column" },
        Object(preact_min["h"])("textarea", {
          id: "paragraph",
          name: "paragraph",
          value: paragraph,
          onClick: function onClick(e) {
            e.target.focus();
            e.target.select();
            var msg = document.execCommand("copy");
            setMsg(msg ? "Copied to clipboard" : "Something went wrong");
          },
          readOnly: true,
          placeholder: "Lipsum Lorem Text"
        })
      )
    )
  );
};

/* harmony default export */ var home = (home_Home);
// CONCATENATED MODULE: ./components/app.js


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




// Code-splitting is automated for routes


var app__ref = Object(preact_min["h"])(home, { path: "/quick-lipsum/" });

var app_App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    var _temp, _this, _ret;

    _classCallCheck(this, App);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.handleRoute = function (e) {
      _this.currentUrl = e.url;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }
  /** Gets fired when the route changes.
   *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
   *	@param {string} event.url	The newly routed URL
   */


  App.prototype.render = function render() {
    return Object(preact_min["h"])(
      "div",
      { id: "app" },
      Object(preact_min["h"])(
        preact_router_es_Router,
        { onChange: this.handleRoute },
        app__ref
      )
    );
  };

  return App;
}(preact_min["Component"]);


// CONCATENATED MODULE: ./index.js




/* harmony default export */ var index = __webpack_exports__["default"] = (app_App);

/***/ }),

/***/ "KM04":
/***/ (function(module, exports) {

var n,
    l,
    u,
    t,
    i,
    r,
    o,
    e,
    f = {},
    c = [],
    s = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function a(n, l) {
  for (var u in l) {
    n[u] = l[u];
  }return n;
}function p(n) {
  var l = n.parentNode;l && l.removeChild(n);
}function v(n, l, u) {
  var t,
      i = arguments,
      r = {};for (t in l) {
    "key" !== t && "ref" !== t && (r[t] = l[t]);
  }if (arguments.length > 3) for (u = [u], t = 3; t < arguments.length; t++) {
    u.push(i[t]);
  }if (null != u && (r.children = u), "function" == typeof n && null != n.defaultProps) for (t in n.defaultProps) {
    void 0 === r[t] && (r[t] = n.defaultProps[t]);
  }return h(n, r, l && l.key, l && l.ref, null);
}function h(l, u, t, i, r) {
  var o = { type: l, props: u, key: t, ref: i, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: r };return null == r && (o.__v = o), n.vnode && n.vnode(o), o;
}function y(n) {
  return n.children;
}function d(n, l) {
  this.props = n, this.context = l;
}function x(n, l) {
  if (null == l) return n.__ ? x(n.__, n.__.__k.indexOf(n) + 1) : null;for (var u; l < n.__k.length; l++) {
    if (null != (u = n.__k[l]) && null != u.__e) return u.__e;
  }return "function" == typeof n.type ? x(n) : null;
}function m(n) {
  var l, u;if (null != (n = n.__) && null != n.__c) {
    for (n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++) {
      if (null != (u = n.__k[l]) && null != u.__e) {
        n.__e = n.__c.base = u.__e;break;
      }
    }return m(n);
  }
}function w(l) {
  (!l.__d && (l.__d = !0) && u.push(l) && !t++ || r !== n.debounceRendering) && ((r = n.debounceRendering) || i)(k);
}function k() {
  for (var n; t = u.length;) {
    n = u.sort(function (n, l) {
      return n.__v.__b - l.__v.__b;
    }), u = [], n.some(function (n) {
      var l, u, t, i, r, o, e;n.__d && (o = (r = (l = n).__v).__e, (e = l.__P) && (u = [], (t = a({}, r)).__v = t, i = C(e, r, t, l.__n, void 0 !== e.ownerSVGElement, null, u, null == o ? x(r) : o), N(u, r), i != o && m(r)));
    });
  }
}function g(n, l, u, t, i, r, o, e, s, a) {
  var v,
      d,
      m,
      w,
      k,
      g,
      _,
      b,
      A,
      P = t && t.__k || c,
      N = P.length;for (s == f && (s = null != o ? o[0] : N ? x(t, 0) : null), u.__k = [], v = 0; v < l.length; v++) {
    if (null != (w = u.__k[v] = null == (w = l[v]) || "boolean" == typeof w ? null : "string" == typeof w || "number" == typeof w ? h(null, w, null, null, w) : Array.isArray(w) ? h(y, { children: w }, null, null, null) : null != w.__e || null != w.__c ? h(w.type, w.props, w.key, null, w.__v) : w)) {
      if (w.__ = u, w.__b = u.__b + 1, null === (m = P[v]) || m && w.key == m.key && w.type === m.type) P[v] = void 0;else for (d = 0; d < N; d++) {
        if ((m = P[d]) && w.key == m.key && w.type === m.type) {
          P[d] = void 0;break;
        }m = null;
      }if (k = C(n, w, m = m || f, i, r, o, e, s, a), (d = w.ref) && m.ref != d && (b || (b = []), m.ref && b.push(m.ref, null, w), b.push(d, w.__c || k, w)), null != k) {
        if (null == _ && (_ = k), A = void 0, void 0 !== w.__d) A = w.__d, w.__d = void 0;else if (o == m || k != s || null == k.parentNode) {
          n: if (null == s || s.parentNode !== n) n.appendChild(k), A = null;else {
            for (g = s, d = 0; (g = g.nextSibling) && d < N; d += 2) {
              if (g == k) break n;
            }n.insertBefore(k, s), A = s;
          }"option" == u.type && (n.value = "");
        }s = void 0 !== A ? A : k.nextSibling, "function" == typeof u.type && (u.__d = s);
      } else s && m.__e == s && s.parentNode != n && (s = x(m));
    }
  }if (u.__e = _, null != o && "function" != typeof u.type) for (v = o.length; v--;) {
    null != o[v] && p(o[v]);
  }for (v = N; v--;) {
    null != P[v] && $(P[v], P[v]);
  }if (b) for (v = 0; v < b.length; v++) {
    T(b[v], b[++v], b[++v]);
  }
}function _(n, l, u, t, i) {
  var r;for (r in u) {
    "children" === r || "key" === r || r in l || A(n, r, null, u[r], t);
  }for (r in l) {
    i && "function" != typeof l[r] || "children" === r || "key" === r || "value" === r || "checked" === r || u[r] === l[r] || A(n, r, l[r], u[r], t);
  }
}function b(n, l, u) {
  "-" === l[0] ? n.setProperty(l, u) : n[l] = "number" == typeof u && !1 === s.test(l) ? u + "px" : null == u ? "" : u;
}function A(n, l, u, t, i) {
  var r, o, e, f, c;if (i ? "className" === l && (l = "class") : "class" === l && (l = "className"), "style" === l) {
    if (r = n.style, "string" == typeof u) r.cssText = u;else {
      if ("string" == typeof t && (r.cssText = "", t = null), t) for (f in t) {
        u && f in u || b(r, f, "");
      }if (u) for (c in u) {
        t && u[c] === t[c] || b(r, c, u[c]);
      }
    }
  } else "o" === l[0] && "n" === l[1] ? (o = l !== (l = l.replace(/Capture$/, "")), e = l.toLowerCase(), l = (e in n ? e : l).slice(2), u ? (t || n.addEventListener(l, P, o), (n.l || (n.l = {}))[l] = u) : n.removeEventListener(l, P, o)) : "list" !== l && "tagName" !== l && "form" !== l && "type" !== l && "size" !== l && !i && l in n ? n[l] = null == u ? "" : u : "function" != typeof u && "dangerouslySetInnerHTML" !== l && (l !== (l = l.replace(/^xlink:?/, "")) ? null == u || !1 === u ? n.removeAttributeNS("http://www.w3.org/1999/xlink", l.toLowerCase()) : n.setAttributeNS("http://www.w3.org/1999/xlink", l.toLowerCase(), u) : null == u || !1 === u && !/^ar/.test(l) ? n.removeAttribute(l) : n.setAttribute(l, u));
}function P(l) {
  this.l[l.type](n.event ? n.event(l) : l);
}function C(l, u, t, i, r, o, e, f, c) {
  var s,
      p,
      v,
      h,
      x,
      m,
      w,
      k,
      _,
      b,
      A,
      P = u.type;if (void 0 !== u.constructor) return null;(s = n.__b) && s(u);try {
    n: if ("function" == typeof P) {
      if (k = u.props, _ = (s = P.contextType) && i[s.__c], b = s ? _ ? _.props.value : s.__ : i, t.__c ? w = (p = u.__c = t.__c).__ = p.__E : ("prototype" in P && P.prototype.render ? u.__c = p = new P(k, b) : (u.__c = p = new d(k, b), p.constructor = P, p.render = j), _ && _.sub(p), p.props = k, p.state || (p.state = {}), p.context = b, p.__n = i, v = p.__d = !0, p.__h = []), null == p.__s && (p.__s = p.state), null != P.getDerivedStateFromProps && (p.__s == p.state && (p.__s = a({}, p.__s)), a(p.__s, P.getDerivedStateFromProps(k, p.__s))), h = p.props, x = p.state, v) null == P.getDerivedStateFromProps && null != p.componentWillMount && p.componentWillMount(), null != p.componentDidMount && p.__h.push(p.componentDidMount);else {
        if (null == P.getDerivedStateFromProps && k !== h && null != p.componentWillReceiveProps && p.componentWillReceiveProps(k, b), !p.__e && null != p.shouldComponentUpdate && !1 === p.shouldComponentUpdate(k, p.__s, b) || u.__v === t.__v) {
          for (p.props = k, p.state = p.__s, u.__v !== t.__v && (p.__d = !1), p.__v = u, u.__e = t.__e, u.__k = t.__k, p.__h.length && e.push(p), s = 0; s < u.__k.length; s++) {
            u.__k[s] && (u.__k[s].__ = u);
          }break n;
        }null != p.componentWillUpdate && p.componentWillUpdate(k, p.__s, b), null != p.componentDidUpdate && p.__h.push(function () {
          p.componentDidUpdate(h, x, m);
        });
      }p.context = b, p.props = k, p.state = p.__s, (s = n.__r) && s(u), p.__d = !1, p.__v = u, p.__P = l, s = p.render(p.props, p.state, p.context), null != p.getChildContext && (i = a(a({}, i), p.getChildContext())), v || null == p.getSnapshotBeforeUpdate || (m = p.getSnapshotBeforeUpdate(h, x)), A = null != s && s.type == y && null == s.key ? s.props.children : s, g(l, Array.isArray(A) ? A : [A], u, t, i, r, o, e, f, c), p.base = u.__e, p.__h.length && e.push(p), w && (p.__E = p.__ = null), p.__e = !1;
    } else null == o && u.__v === t.__v ? (u.__k = t.__k, u.__e = t.__e) : u.__e = z(t.__e, u, t, i, r, o, e, c);(s = n.diffed) && s(u);
  } catch (l) {
    u.__v = null, n.__e(l, u, t);
  }return u.__e;
}function N(l, u) {
  n.__c && n.__c(u, l), l.some(function (u) {
    try {
      l = u.__h, u.__h = [], l.some(function (n) {
        n.call(u);
      });
    } catch (l) {
      n.__e(l, u.__v);
    }
  });
}function z(n, l, u, t, i, r, o, e) {
  var s,
      a,
      p,
      v,
      h,
      y = u.props,
      d = l.props;if (i = "svg" === l.type || i, null != r) for (s = 0; s < r.length; s++) {
    if (null != (a = r[s]) && ((null === l.type ? 3 === a.nodeType : a.localName === l.type) || n == a)) {
      n = a, r[s] = null;break;
    }
  }if (null == n) {
    if (null === l.type) return document.createTextNode(d);n = i ? document.createElementNS("http://www.w3.org/2000/svg", l.type) : document.createElement(l.type, d.is && { is: d.is }), r = null, e = !1;
  }if (null === l.type) y !== d && n.data != d && (n.data = d);else {
    if (null != r && (r = c.slice.call(n.childNodes)), p = (y = u.props || f).dangerouslySetInnerHTML, v = d.dangerouslySetInnerHTML, !e) {
      if (null != r) for (y = {}, h = 0; h < n.attributes.length; h++) {
        y[n.attributes[h].name] = n.attributes[h].value;
      }(v || p) && (v && p && v.__html == p.__html || (n.innerHTML = v && v.__html || ""));
    }_(n, d, y, i, e), v ? l.__k = [] : (s = l.props.children, g(n, Array.isArray(s) ? s : [s], l, u, t, "foreignObject" !== l.type && i, r, o, f, e)), e || ("value" in d && void 0 !== (s = d.value) && s !== n.value && A(n, "value", s, y.value, !1), "checked" in d && void 0 !== (s = d.checked) && s !== n.checked && A(n, "checked", s, y.checked, !1));
  }return n;
}function T(l, u, t) {
  try {
    "function" == typeof l ? l(u) : l.current = u;
  } catch (l) {
    n.__e(l, t);
  }
}function $(l, u, t) {
  var i, r, o;if (n.unmount && n.unmount(l), (i = l.ref) && (i.current && i.current !== l.__e || T(i, null, u)), t || "function" == typeof l.type || (t = null != (r = l.__e)), l.__e = l.__d = void 0, null != (i = l.__c)) {
    if (i.componentWillUnmount) try {
      i.componentWillUnmount();
    } catch (l) {
      n.__e(l, u);
    }i.base = i.__P = null;
  }if (i = l.__k) for (o = 0; o < i.length; o++) {
    i[o] && $(i[o], u, t);
  }null != r && p(r);
}function j(n, l, u) {
  return this.constructor(n, u);
}function D(l, u, t) {
  var i, r, e;n.__ && n.__(l, u), r = (i = t === o) ? null : t && t.__k || u.__k, l = v(y, null, [l]), e = [], C(u, (i ? u : t || u).__k = l, r || f, f, void 0 !== u.ownerSVGElement, t && !i ? [t] : r ? null : u.childNodes.length ? c.slice.call(u.childNodes) : null, e, t || f, i), N(e, l);
}n = { __e: function __e(n, l) {
    for (var u, t; l = l.__;) {
      if ((u = l.__c) && !u.__) try {
        if (u.constructor && null != u.constructor.getDerivedStateFromError && (t = !0, u.setState(u.constructor.getDerivedStateFromError(n))), null != u.componentDidCatch && (t = !0, u.componentDidCatch(n)), t) return w(u.__E = u);
      } catch (l) {
        n = l;
      }
    }throw n;
  } }, l = function l(n) {
  return null != n && void 0 === n.constructor;
}, d.prototype.setState = function (n, l) {
  var u;u = this.__s !== this.state ? this.__s : this.__s = a({}, this.state), "function" == typeof n && (n = n(u, this.props)), n && a(u, n), null != n && this.__v && (l && this.__h.push(l), w(this));
}, d.prototype.forceUpdate = function (n) {
  this.__v && (this.__e = !0, n && this.__h.push(n), w(this));
}, d.prototype.render = y, u = [], t = 0, i = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, o = f, e = 0, exports.render = D, exports.hydrate = function (n, l) {
  D(n, l, o);
}, exports.createElement = v, exports.h = v, exports.Fragment = y, exports.createRef = function () {
  return {};
}, exports.isValidElement = l, exports.Component = d, exports.cloneElement = function (n, l) {
  var u, t;for (t in l = a(a({}, n.props), l), arguments.length > 2 && (l.children = c.slice.call(arguments, 2)), u = {}, l) {
    "key" !== t && "ref" !== t && (u[t] = l[t]);
  }return h(n.type, u, l.key || n.key, l.ref || n.ref, null);
}, exports.createContext = function (n) {
  var l = {},
      u = { __c: "__cC" + e++, __: n, Consumer: function Consumer(n, l) {
      return n.children(l);
    }, Provider: function Provider(n) {
      var t,
          i = this;return this.getChildContext || (t = [], this.getChildContext = function () {
        return l[u.__c] = i, l;
      }, this.shouldComponentUpdate = function (n) {
        i.props.value !== n.value && t.some(function (l) {
          l.context = n.value, w(l);
        });
      }, this.sub = function (n) {
        t.push(n);var l = n.componentWillUnmount;n.componentWillUnmount = function () {
          t.splice(t.indexOf(n), 1), l && l.call(n);
        };
      }), n.children;
    } };return u.Consumer.contextType = u, u.Provider.__ = u, u;
}, exports.toChildArray = function n(l) {
  return null == l || "boolean" == typeof l ? [] : Array.isArray(l) ? c.concat.apply([], l.map(n)) : [l];
}, exports._e = $, exports.options = n;
//# sourceMappingURL=preact.js.map

/***/ }),

/***/ "h8Np":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "rq4c":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });
//# sourceMappingURL=ssr-bundle.js.map