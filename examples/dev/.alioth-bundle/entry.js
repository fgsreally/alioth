var Wv = Object.defineProperty;
var Kv = (e, t, n) => t in e ? Wv(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var La = (e, t, n) => (Kv(e, typeof t != "symbol" ? t + "" : t, n), n);
import { createFilter as qv, Global as Uv, Tag as Yv, Init as Xv, useV as Gv, emitter as ju } from "phecda-vue";
import { defineComponent as Ae, inject as Ye, ref as ce, reactive as cn, toRef as ln, onBeforeMount as Kd, onMounted as jt, watchEffect as Zv, onBeforeUnmount as fn, computed as V, watch as be, openBlock as Y, createElementBlock as he, normalizeClass as te, unref as m, normalizeStyle as _t, renderSlot as Ze, createCommentVNode as Ee, h as an, render as qd, mergeProps as bn, useAttrs as Qv, useSlots as li, shallowRef as Zn, nextTick as Xe, withDirectives as Et, Fragment as yt, createElementVNode as xe, createBlock as Se, withCtx as Pe, resolveDynamicComponent as $t, withModifiers as gt, createVNode as pt, toDisplayString as tt, vShow as In, provide as Ot, onUpdated as Ud, cloneVNode as Jv, Text as Yd, Comment as eg, Teleport as tg, Transition as ao, readonly as ng, onDeactivated as rg, isRef as qo, vModelCheckbox as ti, createTextVNode as Ur, toRefs as ui, toHandlers as og, getCurrentInstance as Ut, toRaw as Qr, warn as ag, onUnmounted as ig, triggerRef as Io, getCurrentScope as sg, onScopeDispose as lg, resolveComponent as Ft, resolveDirective as ug, renderList as Yn, withKeys as nn, vModelText as cg, createSlots as dg } from "vue";
import { Global as io, Tag as so, Watcher as fg, Init as ci } from "phecda-core";
const pg = typeof window < "u";
var Iu;
pg && ((Iu = window == null ? void 0 : window.navigator) != null && Iu.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Wn(e) {
  return e == null;
}
const hg = Object.freeze({
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
  rebeccapurple: "663399",
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
});
Object.freeze(new Set(Object.keys(hg)));
function Du(e, t = 16) {
  if (typeof e != "function")
    return e;
  let n = Date.now(), r;
  return function(...i) {
    const c = Date.now(), f = n + t - c;
    clearTimeout(r), f <= 0 ? (e(...i), n = Date.now()) : r = setTimeout(() => {
      e(...i);
    }, t);
  };
}
const Ro = /* @__PURE__ */ new Set(), Xd = /* @__PURE__ */ new WeakMap();
function vg() {
  Ro.forEach((e) => {
    e(...Xd.get(e));
  }), Ro.clear();
}
function Nt(e, ...t) {
  if (typeof e != "function")
    return e;
  Xd.set(e, t), !Ro.has(e) && (Ro.add(e), Ro.size === 1 && Promise.resolve().then(vg));
}
const gg = Symbol("LAYOUT_KEY"), mg = Symbol("EMITTER_KEY");
function yg(e, t, n, r) {
  const i = "translate3d(" + t + "px," + e + "px, 0)";
  return {
    transform: i,
    WebkitTransform: i,
    MozTransform: i,
    msTransform: i,
    OTransform: i,
    width: n + "px",
    height: r + "px",
    position: "absolute"
  };
}
function bg(e, t, n, r) {
  const i = "translate3d(" + t * -1 + "px," + e + "px, 0)";
  return {
    transform: i,
    WebkitTransform: i,
    MozTransform: i,
    msTransform: i,
    OTransform: i,
    width: n + "px",
    height: r + "px",
    position: "absolute"
  };
}
function wg(e, t, n, r) {
  return {
    top: e + "px",
    left: t + "px",
    width: n + "px",
    height: r + "px",
    position: "absolute"
  };
}
function xg(e, t, n, r) {
  return {
    top: e + "px",
    right: t + "px",
    width: n + "px",
    height: r + "px",
    position: "absolute"
  };
}
function _g(e, t = "vgl") {
  const n = () => `${t}-${e}`;
  return {
    b: n,
    be: (r) => `${n()}__${r}`,
    bm: (r) => `${n()}--${r}`,
    bem: (r, i) => `${n()}__${r}--${i}`
  };
}
function $u(e) {
  return Sg(e);
}
function Sg(e) {
  var t;
  const n = ((t = e.target) == null ? void 0 : t.offsetParent) || document.body, r = e.offsetParent === document.body ? { left: 0, top: 0 } : n.getBoundingClientRect(), i = e.clientX + n.scrollLeft - r.left, c = e.clientY + n.scrollTop - r.top;
  return { x: i, y: c };
}
function zu(e, t, n, r) {
  return kg(e) ? {
    deltaX: n - e,
    deltaY: r - t,
    lastX: e,
    lastY: t,
    x: n,
    y: r
  } : {
    deltaX: 0,
    deltaY: 0,
    lastX: n,
    lastY: r,
    x: n,
    y: r
  };
}
function kg(e) {
  return typeof e == "number" && !Number.isNaN(e);
}
function Eg(e, t) {
  if (!t[e])
    throw new Error("ResponsiveGridLayout: `cols` entry for breakpoint " + e + " is missing!");
  return t[e];
}
let Og = "auto";
function Cg() {
  return typeof document < "u";
}
function Nu() {
  return Cg() ? typeof document.dir < "u" ? document.dir : document.getElementsByTagName("html")[0].getAttribute("dir") : Og;
}
function Gd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Zd = { exports: {} };
(function(e, t) {
  (function(n) {
    e.exports = n();
  })(function() {
    var n = {};
    Object.defineProperty(n, "__esModule", { value: !0 }), n.default = void 0, n.default = function(o) {
      return !(!o || !o.Window) && o instanceof o.Window;
    };
    var r = {};
    Object.defineProperty(r, "__esModule", { value: !0 }), r.getWindow = function(o) {
      return (0, n.default)(o) ? o : (o.ownerDocument || o).defaultView || c.window;
    }, r.init = f, r.window = r.realWindow = void 0;
    var i = void 0;
    r.realWindow = i;
    var c = void 0;
    function f(o) {
      r.realWindow = i = o;
      var a = o.document.createTextNode("");
      a.ownerDocument !== o.document && typeof o.wrap == "function" && o.wrap(a) === a && (o = o.wrap(o)), r.window = c = o;
    }
    r.window = c, typeof window < "u" && window && f(window);
    var u = {};
    function h(o) {
      return h = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(a) {
        return typeof a;
      } : function(a) {
        return a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
      }, h(o);
    }
    Object.defineProperty(u, "__esModule", { value: !0 }), u.default = void 0;
    var g = function(o) {
      return !!o && h(o) === "object";
    }, w = function(o) {
      return typeof o == "function";
    }, _ = { window: function(o) {
      return o === r.window || (0, n.default)(o);
    }, docFrag: function(o) {
      return g(o) && o.nodeType === 11;
    }, object: g, func: w, number: function(o) {
      return typeof o == "number";
    }, bool: function(o) {
      return typeof o == "boolean";
    }, string: function(o) {
      return typeof o == "string";
    }, element: function(o) {
      if (!o || h(o) !== "object")
        return !1;
      var a = r.getWindow(o) || r.window;
      return /object|function/.test(typeof Element > "u" ? "undefined" : h(Element)) ? o instanceof Element || o instanceof a.Element : o.nodeType === 1 && typeof o.nodeName == "string";
    }, plainObject: function(o) {
      return g(o) && !!o.constructor && /function Object\b/.test(o.constructor.toString());
    }, array: function(o) {
      return g(o) && o.length !== void 0 && w(o.splice);
    } };
    u.default = _;
    var k = {};
    function T(o) {
      var a = o.interaction;
      if (a.prepared.name === "drag") {
        var s = a.prepared.axis;
        s === "x" ? (a.coords.cur.page.y = a.coords.start.page.y, a.coords.cur.client.y = a.coords.start.client.y, a.coords.velocity.client.y = 0, a.coords.velocity.page.y = 0) : s === "y" && (a.coords.cur.page.x = a.coords.start.page.x, a.coords.cur.client.x = a.coords.start.client.x, a.coords.velocity.client.x = 0, a.coords.velocity.page.x = 0);
      }
    }
    function x(o) {
      var a = o.iEvent, s = o.interaction;
      if (s.prepared.name === "drag") {
        var l = s.prepared.axis;
        if (l === "x" || l === "y") {
          var d = l === "x" ? "y" : "x";
          a.page[d] = s.coords.start.page[d], a.client[d] = s.coords.start.client[d], a.delta[d] = 0;
        }
      }
    }
    Object.defineProperty(k, "__esModule", { value: !0 }), k.default = void 0;
    var S = { id: "actions/drag", install: function(o) {
      var a = o.actions, s = o.Interactable, l = o.defaults;
      s.prototype.draggable = S.draggable, a.map.drag = S, a.methodDict.drag = "draggable", l.actions.drag = S.defaults;
    }, listeners: { "interactions:before-action-move": T, "interactions:action-resume": T, "interactions:action-move": x, "auto-start:check": function(o) {
      var a = o.interaction, s = o.interactable, l = o.buttons, d = s.options.drag;
      if (d && d.enabled && (!a.pointerIsDown || !/mouse|pointer/.test(a.pointerType) || l & s.options.drag.mouseButtons))
        return o.action = { name: "drag", axis: d.lockAxis === "start" ? d.startAxis : d.lockAxis }, !1;
    } }, draggable: function(o) {
      return u.default.object(o) ? (this.options.drag.enabled = o.enabled !== !1, this.setPerAction("drag", o), this.setOnEvents("drag", o), /^(xy|x|y|start)$/.test(o.lockAxis) && (this.options.drag.lockAxis = o.lockAxis), /^(xy|x|y)$/.test(o.startAxis) && (this.options.drag.startAxis = o.startAxis), this) : u.default.bool(o) ? (this.options.drag.enabled = o, this) : this.options.drag;
    }, beforeMove: T, move: x, defaults: { startAxis: "xy", lockAxis: "xy" }, getCursor: function() {
      return "move";
    } }, M = S;
    k.default = M;
    var O = {};
    Object.defineProperty(O, "__esModule", { value: !0 }), O.default = void 0;
    var I = { init: function(o) {
      var a = o;
      I.document = a.document, I.DocumentFragment = a.DocumentFragment || K, I.SVGElement = a.SVGElement || K, I.SVGSVGElement = a.SVGSVGElement || K, I.SVGElementInstance = a.SVGElementInstance || K, I.Element = a.Element || K, I.HTMLElement = a.HTMLElement || I.Element, I.Event = a.Event, I.Touch = a.Touch || K, I.PointerEvent = a.PointerEvent || a.MSPointerEvent;
    }, document: null, DocumentFragment: null, SVGElement: null, SVGSVGElement: null, SVGElementInstance: null, Element: null, HTMLElement: null, Event: null, Touch: null, PointerEvent: null };
    function K() {
    }
    var L = I;
    O.default = L;
    var q = {};
    Object.defineProperty(q, "__esModule", { value: !0 }), q.default = void 0;
    var N = { init: function(o) {
      var a = O.default.Element, s = o.navigator || {};
      N.supportsTouch = "ontouchstart" in o || u.default.func(o.DocumentTouch) && O.default.document instanceof o.DocumentTouch, N.supportsPointerEvent = s.pointerEnabled !== !1 && !!O.default.PointerEvent, N.isIOS = /iP(hone|od|ad)/.test(s.platform), N.isIOS7 = /iP(hone|od|ad)/.test(s.platform) && /OS 7[^\d]/.test(s.appVersion), N.isIe9 = /MSIE 9/.test(s.userAgent), N.isOperaMobile = s.appName === "Opera" && N.supportsTouch && /Presto/.test(s.userAgent), N.prefixedMatchesSelector = "matches" in a.prototype ? "matches" : "webkitMatchesSelector" in a.prototype ? "webkitMatchesSelector" : "mozMatchesSelector" in a.prototype ? "mozMatchesSelector" : "oMatchesSelector" in a.prototype ? "oMatchesSelector" : "msMatchesSelector", N.pEventTypes = N.supportsPointerEvent ? O.default.PointerEvent === o.MSPointerEvent ? { up: "MSPointerUp", down: "MSPointerDown", over: "mouseover", out: "mouseout", move: "MSPointerMove", cancel: "MSPointerCancel" } : { up: "pointerup", down: "pointerdown", over: "pointerover", out: "pointerout", move: "pointermove", cancel: "pointercancel" } : null, N.wheelEvent = O.default.document && "onmousewheel" in O.default.document ? "mousewheel" : "wheel";
    }, supportsTouch: null, supportsPointerEvent: null, isIOS7: null, isIOS: null, isIe9: null, isOperaMobile: null, prefixedMatchesSelector: null, pEventTypes: null, wheelEvent: null }, H = N;
    q.default = H;
    var F = {};
    function le(o) {
      var a = o.parentNode;
      if (u.default.docFrag(a)) {
        for (; (a = a.host) && u.default.docFrag(a); )
          ;
        return a;
      }
      return a;
    }
    function re(o, a) {
      return r.window !== r.realWindow && (a = a.replace(/\/deep\//g, " ")), o[q.default.prefixedMatchesSelector](a);
    }
    Object.defineProperty(F, "__esModule", { value: !0 }), F.closest = function(o, a) {
      for (; u.default.element(o); ) {
        if (re(o, a))
          return o;
        o = le(o);
      }
      return null;
    }, F.getActualElement = function(o) {
      return o.correspondingUseElement || o;
    }, F.getElementClientRect = Q, F.getElementRect = function(o) {
      var a = Q(o);
      if (!q.default.isIOS7 && a) {
        var s = ne(r.getWindow(o));
        a.left += s.x, a.right += s.x, a.top += s.y, a.bottom += s.y;
      }
      return a;
    }, F.getPath = function(o) {
      for (var a = []; o; )
        a.push(o), o = le(o);
      return a;
    }, F.getScrollXY = ne, F.indexOfDeepestElement = function(o) {
      for (var a, s = [], l = 0; l < o.length; l++) {
        var d = o[l], p = o[a];
        if (d && l !== a)
          if (p) {
            var b = fe(d), v = fe(p);
            if (b !== d.ownerDocument)
              if (v !== d.ownerDocument)
                if (b !== v) {
                  s = s.length ? s : _e(p);
                  var y = void 0;
                  if (p instanceof O.default.HTMLElement && d instanceof O.default.SVGElement && !(d instanceof O.default.SVGSVGElement)) {
                    if (d === v)
                      continue;
                    y = d.ownerSVGElement;
                  } else
                    y = d;
                  for (var E = _e(y, p.ownerDocument), C = 0; E[C] && E[C] === s[C]; )
                    C++;
                  var j = [E[C - 1], E[C], s[C]];
                  if (j[0])
                    for (var W = j[0].lastChild; W; ) {
                      if (W === j[1]) {
                        a = l, s = E;
                        break;
                      }
                      if (W === j[2])
                        break;
                      W = W.previousSibling;
                    }
                } else
                  Z = d, R = p, (parseInt(r.getWindow(Z).getComputedStyle(Z).zIndex, 10) || 0) >= (parseInt(r.getWindow(R).getComputedStyle(R).zIndex, 10) || 0) && (a = l);
              else
                a = l;
          } else
            a = l;
      }
      var Z, R;
      return a;
    }, F.matchesSelector = re, F.matchesUpTo = function(o, a, s) {
      for (; u.default.element(o); ) {
        if (re(o, a))
          return !0;
        if ((o = le(o)) === s)
          return re(o, a);
      }
      return !1;
    }, F.nodeContains = function(o, a) {
      if (o.contains)
        return o.contains(a);
      for (; a; ) {
        if (a === o)
          return !0;
        a = a.parentNode;
      }
      return !1;
    }, F.parentNode = le, F.trySelector = function(o) {
      return !!u.default.string(o) && (O.default.document.querySelector(o), !0);
    };
    var fe = function(o) {
      return o.parentNode || o.host;
    };
    function _e(o, a) {
      for (var s, l = [], d = o; (s = fe(d)) && d !== a && s !== d.ownerDocument; )
        l.unshift(d), d = s;
      return l;
    }
    function ne(o) {
      return { x: (o = o || r.window).scrollX || o.document.documentElement.scrollLeft, y: o.scrollY || o.document.documentElement.scrollTop };
    }
    function Q(o) {
      var a = o instanceof O.default.SVGElement ? o.getBoundingClientRect() : o.getClientRects()[0];
      return a && { left: a.left, right: a.right, top: a.top, bottom: a.bottom, width: a.width || a.right - a.left, height: a.height || a.bottom - a.top };
    }
    var A = {};
    Object.defineProperty(A, "__esModule", { value: !0 }), A.default = function(o, a) {
      for (var s in a)
        o[s] = a[s];
      return o;
    };
    var G = {};
    function z(o, a) {
      (a == null || a > o.length) && (a = o.length);
      for (var s = 0, l = Array(a); s < a; s++)
        l[s] = o[s];
      return l;
    }
    function U(o, a, s) {
      return o === "parent" ? (0, F.parentNode)(s) : o === "self" ? a.getRect(s) : (0, F.closest)(s, o);
    }
    Object.defineProperty(G, "__esModule", { value: !0 }), G.addEdges = function(o, a, s) {
      o.left && (a.left += s.x), o.right && (a.right += s.x), o.top && (a.top += s.y), o.bottom && (a.bottom += s.y), a.width = a.right - a.left, a.height = a.bottom - a.top;
    }, G.getStringOptionResult = U, G.rectToXY = function(o) {
      return o && { x: "x" in o ? o.x : o.left, y: "y" in o ? o.y : o.top };
    }, G.resolveRectLike = function(o, a, s, l) {
      var d, p = o;
      return u.default.string(p) ? p = U(p, a, s) : u.default.func(p) && (p = p.apply(void 0, function(b) {
        if (Array.isArray(b))
          return z(b);
      }(d = l) || function(b) {
        if (typeof Symbol < "u" && b[Symbol.iterator] != null || b["@@iterator"] != null)
          return Array.from(b);
      }(d) || function(b, v) {
        if (b) {
          if (typeof b == "string")
            return z(b, v);
          var y = Object.prototype.toString.call(b).slice(8, -1);
          return y === "Object" && b.constructor && (y = b.constructor.name), y === "Map" || y === "Set" ? Array.from(b) : y === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(y) ? z(b, v) : void 0;
        }
      }(d) || function() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }())), u.default.element(p) && (p = (0, F.getElementRect)(p)), p;
    }, G.tlbrToXywh = function(o) {
      return !o || "x" in o && "y" in o || ((o = (0, A.default)({}, o)).x = o.left || 0, o.y = o.top || 0, o.width = o.width || (o.right || 0) - o.x, o.height = o.height || (o.bottom || 0) - o.y), o;
    }, G.xywhToTlbr = function(o) {
      return !o || "left" in o && "top" in o || ((o = (0, A.default)({}, o)).left = o.x || 0, o.top = o.y || 0, o.right = o.right || o.left + o.width, o.bottom = o.bottom || o.top + o.height), o;
    };
    var D = {};
    Object.defineProperty(D, "__esModule", { value: !0 }), D.default = function(o, a, s) {
      var l = o.options[s], d = l && l.origin || o.options.origin, p = (0, G.resolveRectLike)(d, o, a, [o && a]);
      return (0, G.rectToXY)(p) || { x: 0, y: 0 };
    };
    var X = {};
    function oe(o) {
      return o.trim().split(/ +/);
    }
    Object.defineProperty(X, "__esModule", { value: !0 }), X.default = function o(a, s, l) {
      if (l = l || {}, u.default.string(a) && a.search(" ") !== -1 && (a = oe(a)), u.default.array(a))
        return a.reduce(function(y, E) {
          return (0, A.default)(y, o(E, s, l));
        }, l);
      if (u.default.object(a) && (s = a, a = ""), u.default.func(s))
        l[a] = l[a] || [], l[a].push(s);
      else if (u.default.array(s))
        for (var d = 0; d < s.length; d++) {
          var p;
          p = s[d], o(a, p, l);
        }
      else if (u.default.object(s))
        for (var b in s) {
          var v = oe(b).map(function(y) {
            return "".concat(a).concat(y);
          });
          o(v, s[b], l);
        }
      return l;
    };
    var ue = {};
    Object.defineProperty(ue, "__esModule", { value: !0 }), ue.default = void 0, ue.default = function(o, a) {
      return Math.sqrt(o * o + a * a);
    };
    var ye = {};
    Object.defineProperty(ye, "__esModule", { value: !0 }), ye.default = function(o, a) {
      o.__set || (o.__set = {});
      var s = function(d) {
        if ($e.some(function(p) {
          return d.indexOf(p) === 0;
        }))
          return "continue";
        typeof o[d] != "function" && d !== "__set" && Object.defineProperty(o, d, { get: function() {
          return d in o.__set ? o.__set[d] : o.__set[d] = a[d];
        }, set: function(p) {
          o.__set[d] = p;
        }, configurable: !0 });
      };
      for (var l in a)
        s(l);
      return o;
    };
    var $e = ["webkit", "moz"], ee = {};
    function He(o) {
      return o instanceof O.default.Event || o instanceof O.default.Touch;
    }
    function Ve(o, a, s) {
      return o = o || "page", (s = s || {}).x = a[o + "X"], s.y = a[o + "Y"], s;
    }
    function Le(o, a) {
      return a = a || { x: 0, y: 0 }, q.default.isOperaMobile && He(o) ? (Ve("screen", o, a), a.x += window.scrollX, a.y += window.scrollY) : Ve("page", o, a), a;
    }
    function se(o, a) {
      return a = a || {}, q.default.isOperaMobile && He(o) ? Ve("screen", o, a) : Ve("client", o, a), a;
    }
    function pe(o) {
      var a = [];
      return u.default.array(o) ? (a[0] = o[0], a[1] = o[1]) : o.type === "touchend" ? o.touches.length === 1 ? (a[0] = o.touches[0], a[1] = o.changedTouches[0]) : o.touches.length === 0 && (a[0] = o.changedTouches[0], a[1] = o.changedTouches[1]) : (a[0] = o.touches[0], a[1] = o.touches[1]), a;
    }
    function Te(o) {
      for (var a = { pageX: 0, pageY: 0, clientX: 0, clientY: 0, screenX: 0, screenY: 0 }, s = 0; s < o.length; s++) {
        var l = o[s];
        for (var d in a)
          a[d] += l[d];
      }
      for (var p in a)
        a[p] /= o.length;
      return a;
    }
    Object.defineProperty(ee, "__esModule", { value: !0 }), ee.coordsToEvent = function(o) {
      return { coords: o, get page() {
        return this.coords.page;
      }, get client() {
        return this.coords.client;
      }, get timeStamp() {
        return this.coords.timeStamp;
      }, get pageX() {
        return this.coords.page.x;
      }, get pageY() {
        return this.coords.page.y;
      }, get clientX() {
        return this.coords.client.x;
      }, get clientY() {
        return this.coords.client.y;
      }, get pointerId() {
        return this.coords.pointerId;
      }, get target() {
        return this.coords.target;
      }, get type() {
        return this.coords.type;
      }, get pointerType() {
        return this.coords.pointerType;
      }, get buttons() {
        return this.coords.buttons;
      }, preventDefault: function() {
      } };
    }, ee.copyCoords = function(o, a) {
      o.page = o.page || {}, o.page.x = a.page.x, o.page.y = a.page.y, o.client = o.client || {}, o.client.x = a.client.x, o.client.y = a.client.y, o.timeStamp = a.timeStamp;
    }, ee.getClientXY = se, ee.getEventTargets = function(o) {
      var a = u.default.func(o.composedPath) ? o.composedPath() : o.path;
      return [F.getActualElement(a ? a[0] : o.target), F.getActualElement(o.currentTarget)];
    }, ee.getPageXY = Le, ee.getPointerId = function(o) {
      return u.default.number(o.pointerId) ? o.pointerId : o.identifier;
    }, ee.getPointerType = function(o) {
      return u.default.string(o.pointerType) ? o.pointerType : u.default.number(o.pointerType) ? [void 0, void 0, "touch", "pen", "mouse"][o.pointerType] : /touch/.test(o.type || "") || o instanceof O.default.Touch ? "touch" : "mouse";
    }, ee.getTouchPair = pe, ee.getXY = Ve, ee.isNativePointer = He, ee.newCoords = function() {
      return { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 };
    }, ee.pointerAverage = Te, Object.defineProperty(ee, "pointerExtend", { enumerable: !0, get: function() {
      return ye.default;
    } }), ee.setCoordDeltas = function(o, a, s) {
      o.page.x = s.page.x - a.page.x, o.page.y = s.page.y - a.page.y, o.client.x = s.client.x - a.client.x, o.client.y = s.client.y - a.client.y, o.timeStamp = s.timeStamp - a.timeStamp;
    }, ee.setCoordVelocity = function(o, a) {
      var s = Math.max(a.timeStamp / 1e3, 1e-3);
      o.page.x = a.page.x / s, o.page.y = a.page.y / s, o.client.x = a.client.x / s, o.client.y = a.client.y / s, o.timeStamp = s;
    }, ee.setCoords = function(o, a, s) {
      var l = a.length > 1 ? Te(a) : a[0];
      Le(l, o.page), se(l, o.client), o.timeStamp = s;
    }, ee.setZeroCoords = function(o) {
      o.page.x = 0, o.page.y = 0, o.client.x = 0, o.client.y = 0;
    }, ee.touchAngle = function(o, a) {
      var s = a + "X", l = a + "Y", d = pe(o), p = d[1][s] - d[0][s], b = d[1][l] - d[0][l];
      return 180 * Math.atan2(b, p) / Math.PI;
    }, ee.touchBBox = function(o) {
      if (!o.length)
        return null;
      var a = pe(o), s = Math.min(a[0].pageX, a[1].pageX), l = Math.min(a[0].pageY, a[1].pageY), d = Math.max(a[0].pageX, a[1].pageX), p = Math.max(a[0].pageY, a[1].pageY);
      return { x: s, y: l, left: s, top: l, right: d, bottom: p, width: d - s, height: p - l };
    }, ee.touchDistance = function(o, a) {
      var s = a + "X", l = a + "Y", d = pe(o), p = d[0][s] - d[1][s], b = d[0][l] - d[1][l];
      return (0, ue.default)(p, b);
    };
    var Oe = {};
    function Fe(o, a) {
      for (var s = 0; s < a.length; s++) {
        var l = a[s];
        l.enumerable = l.enumerable || !1, l.configurable = !0, "value" in l && (l.writable = !0), Object.defineProperty(o, l.key, l);
      }
    }
    function et(o, a, s) {
      return a in o ? Object.defineProperty(o, a, { value: s, enumerable: !0, configurable: !0, writable: !0 }) : o[a] = s, o;
    }
    Object.defineProperty(Oe, "__esModule", { value: !0 }), Oe.BaseEvent = void 0;
    var nt = function() {
      function o(l) {
        (function(d, p) {
          if (!(d instanceof p))
            throw new TypeError("Cannot call a class as a function");
        })(this, o), et(this, "immediatePropagationStopped", !1), et(this, "propagationStopped", !1), this._interaction = l;
      }
      var a, s;
      return a = o, (s = [{ key: "preventDefault", value: function() {
      } }, { key: "stopPropagation", value: function() {
        this.propagationStopped = !0;
      } }, { key: "stopImmediatePropagation", value: function() {
        this.immediatePropagationStopped = this.propagationStopped = !0;
      } }]) && Fe(a.prototype, s), Object.defineProperty(a, "prototype", { writable: !1 }), o;
    }();
    Oe.BaseEvent = nt, Object.defineProperty(nt.prototype, "interaction", { get: function() {
      return this._interaction._proxy;
    }, set: function() {
    } });
    var je = {};
    Object.defineProperty(je, "__esModule", { value: !0 }), je.remove = je.merge = je.from = je.findIndex = je.find = je.contains = void 0, je.contains = function(o, a) {
      return o.indexOf(a) !== -1;
    }, je.remove = function(o, a) {
      return o.splice(o.indexOf(a), 1);
    };
    var Ie = function(o, a) {
      for (var s = 0; s < a.length; s++) {
        var l = a[s];
        o.push(l);
      }
      return o;
    };
    je.merge = Ie, je.from = function(o) {
      return Ie([], o);
    };
    var xt = function(o, a) {
      for (var s = 0; s < o.length; s++)
        if (a(o[s], s, o))
          return s;
      return -1;
    };
    je.findIndex = xt, je.find = function(o, a) {
      return o[xt(o, a)];
    };
    var Ge = {};
    function ht(o) {
      return ht = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(a) {
        return typeof a;
      } : function(a) {
        return a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
      }, ht(o);
    }
    function st(o, a) {
      for (var s = 0; s < a.length; s++) {
        var l = a[s];
        l.enumerable = l.enumerable || !1, l.configurable = !0, "value" in l && (l.writable = !0), Object.defineProperty(o, l.key, l);
      }
    }
    function $(o, a) {
      return $ = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(s, l) {
        return s.__proto__ = l, s;
      }, $(o, a);
    }
    function ve(o, a) {
      if (a && (ht(a) === "object" || typeof a == "function"))
        return a;
      if (a !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
      return Ce(o);
    }
    function Ce(o) {
      if (o === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return o;
    }
    function Re(o) {
      return Re = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(a) {
        return a.__proto__ || Object.getPrototypeOf(a);
      }, Re(o);
    }
    function qe(o, a, s) {
      return a in o ? Object.defineProperty(o, a, { value: s, enumerable: !0, configurable: !0, writable: !0 }) : o[a] = s, o;
    }
    Object.defineProperty(Ge, "__esModule", { value: !0 }), Ge.DropEvent = void 0;
    var ze = function(o) {
      (function(v, y) {
        if (typeof y != "function" && y !== null)
          throw new TypeError("Super expression must either be null or a function");
        v.prototype = Object.create(y && y.prototype, { constructor: { value: v, writable: !0, configurable: !0 } }), Object.defineProperty(v, "prototype", { writable: !1 }), y && $(v, y);
      })(b, o);
      var a, s, l, d, p = (l = b, d = function() {
        if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
          return !1;
        if (typeof Proxy == "function")
          return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          })), !0;
        } catch {
          return !1;
        }
      }(), function() {
        var v, y = Re(l);
        if (d) {
          var E = Re(this).constructor;
          v = Reflect.construct(y, arguments, E);
        } else
          v = y.apply(this, arguments);
        return ve(this, v);
      });
      function b(v, y, E) {
        var C;
        (function(R, ie) {
          if (!(R instanceof ie))
            throw new TypeError("Cannot call a class as a function");
        })(this, b), qe(Ce(C = p.call(this, y._interaction)), "dropzone", void 0), qe(Ce(C), "dragEvent", void 0), qe(Ce(C), "relatedTarget", void 0), qe(Ce(C), "draggable", void 0), qe(Ce(C), "propagationStopped", !1), qe(Ce(C), "immediatePropagationStopped", !1);
        var j = E === "dragleave" ? v.prev : v.cur, W = j.element, Z = j.dropzone;
        return C.type = E, C.target = W, C.currentTarget = W, C.dropzone = Z, C.dragEvent = y, C.relatedTarget = y.target, C.draggable = y.interactable, C.timeStamp = y.timeStamp, C;
      }
      return a = b, (s = [{ key: "reject", value: function() {
        var v = this, y = this._interaction.dropState;
        if (this.type === "dropactivate" || this.dropzone && y.cur.dropzone === this.dropzone && y.cur.element === this.target)
          if (y.prev.dropzone = this.dropzone, y.prev.element = this.target, y.rejected = !0, y.events.enter = null, this.stopImmediatePropagation(), this.type === "dropactivate") {
            var E = y.activeDrops, C = je.findIndex(E, function(W) {
              var Z = W.dropzone, R = W.element;
              return Z === v.dropzone && R === v.target;
            });
            y.activeDrops.splice(C, 1);
            var j = new b(y, this.dragEvent, "dropdeactivate");
            j.dropzone = this.dropzone, j.target = this.target, this.dropzone.fire(j);
          } else
            this.dropzone.fire(new b(y, this.dragEvent, "dragleave"));
      } }, { key: "preventDefault", value: function() {
      } }, { key: "stopPropagation", value: function() {
        this.propagationStopped = !0;
      } }, { key: "stopImmediatePropagation", value: function() {
        this.immediatePropagationStopped = this.propagationStopped = !0;
      } }]) && st(a.prototype, s), Object.defineProperty(a, "prototype", { writable: !1 }), b;
    }(Oe.BaseEvent);
    Ge.DropEvent = ze;
    var me = {};
    function lt(o, a) {
      for (var s = 0; s < o.slice().length; s++) {
        var l = o.slice()[s], d = l.dropzone, p = l.element;
        a.dropzone = d, a.target = p, d.fire(a), a.propagationStopped = a.immediatePropagationStopped = !1;
      }
    }
    function B(o, a) {
      for (var s = function(p, b) {
        for (var v = p.interactables, y = [], E = 0; E < v.list.length; E++) {
          var C = v.list[E];
          if (C.options.drop.enabled) {
            var j = C.options.drop.accept;
            if (!(u.default.element(j) && j !== b || u.default.string(j) && !F.matchesSelector(b, j) || u.default.func(j) && !j({ dropzone: C, draggableElement: b })))
              for (var W = u.default.string(C.target) ? C._context.querySelectorAll(C.target) : u.default.array(C.target) ? C.target : [C.target], Z = 0; Z < W.length; Z++) {
                var R = W[Z];
                R !== b && y.push({ dropzone: C, element: R, rect: C.getRect(R) });
              }
          }
        }
        return y;
      }(o, a), l = 0; l < s.length; l++) {
        var d = s[l];
        d.rect = d.dropzone.getRect(d.element);
      }
      return s;
    }
    function ae(o, a, s) {
      for (var l = o.dropState, d = o.interactable, p = o.element, b = [], v = 0; v < l.activeDrops.length; v++) {
        var y = l.activeDrops[v], E = y.dropzone, C = y.element, j = y.rect;
        b.push(E.dropCheck(a, s, d, p, C, j) ? C : null);
      }
      var W = F.indexOfDeepestElement(b);
      return l.activeDrops[W] || null;
    }
    function P(o, a, s) {
      var l = o.dropState, d = { enter: null, leave: null, activate: null, deactivate: null, move: null, drop: null };
      return s.type === "dragstart" && (d.activate = new Ge.DropEvent(l, s, "dropactivate"), d.activate.target = null, d.activate.dropzone = null), s.type === "dragend" && (d.deactivate = new Ge.DropEvent(l, s, "dropdeactivate"), d.deactivate.target = null, d.deactivate.dropzone = null), l.rejected || (l.cur.element !== l.prev.element && (l.prev.dropzone && (d.leave = new Ge.DropEvent(l, s, "dragleave"), s.dragLeave = d.leave.target = l.prev.element, s.prevDropzone = d.leave.dropzone = l.prev.dropzone), l.cur.dropzone && (d.enter = new Ge.DropEvent(l, s, "dragenter"), s.dragEnter = l.cur.element, s.dropzone = l.cur.dropzone)), s.type === "dragend" && l.cur.dropzone && (d.drop = new Ge.DropEvent(l, s, "drop"), s.dropzone = l.cur.dropzone, s.relatedTarget = l.cur.element), s.type === "dragmove" && l.cur.dropzone && (d.move = new Ge.DropEvent(l, s, "dropmove"), d.move.dragmove = s, s.dropzone = l.cur.dropzone)), d;
    }
    function J(o, a) {
      var s = o.dropState, l = s.activeDrops, d = s.cur, p = s.prev;
      a.leave && p.dropzone.fire(a.leave), a.enter && d.dropzone.fire(a.enter), a.move && d.dropzone.fire(a.move), a.drop && d.dropzone.fire(a.drop), a.deactivate && lt(l, a.deactivate), s.prev.dropzone = d.dropzone, s.prev.element = d.element;
    }
    function ke(o, a) {
      var s = o.interaction, l = o.iEvent, d = o.event;
      if (l.type === "dragmove" || l.type === "dragend") {
        var p = s.dropState;
        a.dynamicDrop && (p.activeDrops = B(a, s.element));
        var b = l, v = ae(s, b, d);
        p.rejected = p.rejected && !!v && v.dropzone === p.cur.dropzone && v.element === p.cur.element, p.cur.dropzone = v && v.dropzone, p.cur.element = v && v.element, p.events = P(s, 0, b);
      }
    }
    Object.defineProperty(me, "__esModule", { value: !0 }), me.default = void 0;
    var Ue = { id: "actions/drop", install: function(o) {
      var a = o.actions, s = o.interactStatic, l = o.Interactable, d = o.defaults;
      o.usePlugin(k.default), l.prototype.dropzone = function(p) {
        return function(b, v) {
          if (u.default.object(v)) {
            if (b.options.drop.enabled = v.enabled !== !1, v.listeners) {
              var y = (0, X.default)(v.listeners), E = Object.keys(y).reduce(function(C, j) {
                return C[/^(enter|leave)/.test(j) ? "drag".concat(j) : /^(activate|deactivate|move)/.test(j) ? "drop".concat(j) : j] = y[j], C;
              }, {});
              b.off(b.options.drop.listeners), b.on(E), b.options.drop.listeners = E;
            }
            return u.default.func(v.ondrop) && b.on("drop", v.ondrop), u.default.func(v.ondropactivate) && b.on("dropactivate", v.ondropactivate), u.default.func(v.ondropdeactivate) && b.on("dropdeactivate", v.ondropdeactivate), u.default.func(v.ondragenter) && b.on("dragenter", v.ondragenter), u.default.func(v.ondragleave) && b.on("dragleave", v.ondragleave), u.default.func(v.ondropmove) && b.on("dropmove", v.ondropmove), /^(pointer|center)$/.test(v.overlap) ? b.options.drop.overlap = v.overlap : u.default.number(v.overlap) && (b.options.drop.overlap = Math.max(Math.min(1, v.overlap), 0)), "accept" in v && (b.options.drop.accept = v.accept), "checker" in v && (b.options.drop.checker = v.checker), b;
          }
          return u.default.bool(v) ? (b.options.drop.enabled = v, b) : b.options.drop;
        }(this, p);
      }, l.prototype.dropCheck = function(p, b, v, y, E, C) {
        return function(j, W, Z, R, ie, ge, de) {
          var we = !1;
          if (!(de = de || j.getRect(ge)))
            return !!j.options.drop.checker && j.options.drop.checker(W, Z, we, j, ge, R, ie);
          var Me = j.options.drop.overlap;
          if (Me === "pointer") {
            var Be = (0, D.default)(R, ie, "drag"), Qe = ee.getPageXY(W);
            Qe.x += Be.x, Qe.y += Be.y;
            var at = Qe.x > de.left && Qe.x < de.right, We = Qe.y > de.top && Qe.y < de.bottom;
            we = at && We;
          }
          var ot = R.getRect(ie);
          if (ot && Me === "center") {
            var Xt = ot.left + ot.width / 2, Pn = ot.top + ot.height / 2;
            we = Xt >= de.left && Xt <= de.right && Pn >= de.top && Pn <= de.bottom;
          }
          return ot && u.default.number(Me) && (we = Math.max(0, Math.min(de.right, ot.right) - Math.max(de.left, ot.left)) * Math.max(0, Math.min(de.bottom, ot.bottom) - Math.max(de.top, ot.top)) / (ot.width * ot.height) >= Me), j.options.drop.checker && (we = j.options.drop.checker(W, Z, we, j, ge, R, ie)), we;
        }(this, p, b, v, y, E, C);
      }, s.dynamicDrop = function(p) {
        return u.default.bool(p) ? (o.dynamicDrop = p, s) : o.dynamicDrop;
      }, (0, A.default)(a.phaselessTypes, { dragenter: !0, dragleave: !0, dropactivate: !0, dropdeactivate: !0, dropmove: !0, drop: !0 }), a.methodDict.drop = "dropzone", o.dynamicDrop = !1, d.actions.drop = Ue.defaults;
    }, listeners: { "interactions:before-action-start": function(o) {
      var a = o.interaction;
      a.prepared.name === "drag" && (a.dropState = { cur: { dropzone: null, element: null }, prev: { dropzone: null, element: null }, rejected: null, events: null, activeDrops: [] });
    }, "interactions:after-action-start": function(o, a) {
      var s = o.interaction, l = (o.event, o.iEvent);
      if (s.prepared.name === "drag") {
        var d = s.dropState;
        d.activeDrops = null, d.events = null, d.activeDrops = B(a, s.element), d.events = P(s, 0, l), d.events.activate && (lt(d.activeDrops, d.events.activate), a.fire("actions/drop:start", { interaction: s, dragEvent: l }));
      }
    }, "interactions:action-move": ke, "interactions:after-action-move": function(o, a) {
      var s = o.interaction, l = o.iEvent;
      s.prepared.name === "drag" && (J(s, s.dropState.events), a.fire("actions/drop:move", { interaction: s, dragEvent: l }), s.dropState.events = {});
    }, "interactions:action-end": function(o, a) {
      if (o.interaction.prepared.name === "drag") {
        var s = o.interaction, l = o.iEvent;
        ke(o, a), J(s, s.dropState.events), a.fire("actions/drop:end", { interaction: s, dragEvent: l });
      }
    }, "interactions:stop": function(o) {
      var a = o.interaction;
      if (a.prepared.name === "drag") {
        var s = a.dropState;
        s && (s.activeDrops = null, s.events = null, s.cur.dropzone = null, s.cur.element = null, s.prev.dropzone = null, s.prev.element = null, s.rejected = !1);
      }
    } }, getActiveDrops: B, getDrop: ae, getDropEvents: P, fireDropEvents: J, defaults: { enabled: !1, accept: null, overlap: "pointer" } }, ut = Ue;
    me.default = ut;
    var St = {};
    function It(o) {
      var a = o.interaction, s = o.iEvent, l = o.phase;
      if (a.prepared.name === "gesture") {
        var d = a.pointers.map(function(E) {
          return E.pointer;
        }), p = l === "start", b = l === "end", v = a.interactable.options.deltaSource;
        if (s.touches = [d[0], d[1]], p)
          s.distance = ee.touchDistance(d, v), s.box = ee.touchBBox(d), s.scale = 1, s.ds = 0, s.angle = ee.touchAngle(d, v), s.da = 0, a.gesture.startDistance = s.distance, a.gesture.startAngle = s.angle;
        else if (b) {
          var y = a.prevEvent;
          s.distance = y.distance, s.box = y.box, s.scale = y.scale, s.ds = 0, s.angle = y.angle, s.da = 0;
        } else
          s.distance = ee.touchDistance(d, v), s.box = ee.touchBBox(d), s.scale = s.distance / a.gesture.startDistance, s.angle = ee.touchAngle(d, v), s.ds = s.scale - a.gesture.scale, s.da = s.angle - a.gesture.angle;
        a.gesture.distance = s.distance, a.gesture.angle = s.angle, u.default.number(s.scale) && s.scale !== 1 / 0 && !isNaN(s.scale) && (a.gesture.scale = s.scale);
      }
    }
    Object.defineProperty(St, "__esModule", { value: !0 }), St.default = void 0;
    var nr = { id: "actions/gesture", before: ["actions/drag", "actions/resize"], install: function(o) {
      var a = o.actions, s = o.Interactable, l = o.defaults;
      s.prototype.gesturable = function(d) {
        return u.default.object(d) ? (this.options.gesture.enabled = d.enabled !== !1, this.setPerAction("gesture", d), this.setOnEvents("gesture", d), this) : u.default.bool(d) ? (this.options.gesture.enabled = d, this) : this.options.gesture;
      }, a.map.gesture = nr, a.methodDict.gesture = "gesturable", l.actions.gesture = nr.defaults;
    }, listeners: { "interactions:action-start": It, "interactions:action-move": It, "interactions:action-end": It, "interactions:new": function(o) {
      o.interaction.gesture = { angle: 0, distance: 0, scale: 1, startAngle: 0, startDistance: 0 };
    }, "auto-start:check": function(o) {
      if (!(o.interaction.pointers.length < 2)) {
        var a = o.interactable.options.gesture;
        if (a && a.enabled)
          return o.action = { name: "gesture" }, !1;
      }
    } }, defaults: {}, getCursor: function() {
      return "";
    } }, Ci = nr;
    St.default = Ci;
    var Nr = {};
    function Yt(o, a, s, l, d, p, b) {
      if (!a)
        return !1;
      if (a === !0) {
        var v = u.default.number(p.width) ? p.width : p.right - p.left, y = u.default.number(p.height) ? p.height : p.bottom - p.top;
        if (b = Math.min(b, Math.abs((o === "left" || o === "right" ? v : y) / 2)), v < 0 && (o === "left" ? o = "right" : o === "right" && (o = "left")), y < 0 && (o === "top" ? o = "bottom" : o === "bottom" && (o = "top")), o === "left") {
          var E = v >= 0 ? p.left : p.right;
          return s.x < E + b;
        }
        if (o === "top") {
          var C = y >= 0 ? p.top : p.bottom;
          return s.y < C + b;
        }
        if (o === "right")
          return s.x > (v >= 0 ? p.right : p.left) - b;
        if (o === "bottom")
          return s.y > (y >= 0 ? p.bottom : p.top) - b;
      }
      return !!u.default.element(l) && (u.default.element(a) ? a === l : F.matchesUpTo(l, a, d));
    }
    function gn(o) {
      var a = o.iEvent, s = o.interaction;
      if (s.prepared.name === "resize" && s.resizeAxes) {
        var l = a;
        s.interactable.options.resize.square ? (s.resizeAxes === "y" ? l.delta.x = l.delta.y : l.delta.y = l.delta.x, l.axes = "xy") : (l.axes = s.resizeAxes, s.resizeAxes === "x" ? l.delta.y = 0 : s.resizeAxes === "y" && (l.delta.x = 0));
      }
    }
    Object.defineProperty(Nr, "__esModule", { value: !0 }), Nr.default = void 0;
    var En = { id: "actions/resize", before: ["actions/drag"], install: function(o) {
      var a = o.actions, s = o.browser, l = o.Interactable, d = o.defaults;
      En.cursors = function(p) {
        return p.isIe9 ? { x: "e-resize", y: "s-resize", xy: "se-resize", top: "n-resize", left: "w-resize", bottom: "s-resize", right: "e-resize", topleft: "se-resize", bottomright: "se-resize", topright: "ne-resize", bottomleft: "ne-resize" } : { x: "ew-resize", y: "ns-resize", xy: "nwse-resize", top: "ns-resize", left: "ew-resize", bottom: "ns-resize", right: "ew-resize", topleft: "nwse-resize", bottomright: "nwse-resize", topright: "nesw-resize", bottomleft: "nesw-resize" };
      }(s), En.defaultMargin = s.supportsTouch || s.supportsPointerEvent ? 20 : 10, l.prototype.resizable = function(p) {
        return function(b, v, y) {
          return u.default.object(v) ? (b.options.resize.enabled = v.enabled !== !1, b.setPerAction("resize", v), b.setOnEvents("resize", v), u.default.string(v.axis) && /^x$|^y$|^xy$/.test(v.axis) ? b.options.resize.axis = v.axis : v.axis === null && (b.options.resize.axis = y.defaults.actions.resize.axis), u.default.bool(v.preserveAspectRatio) ? b.options.resize.preserveAspectRatio = v.preserveAspectRatio : u.default.bool(v.square) && (b.options.resize.square = v.square), b) : u.default.bool(v) ? (b.options.resize.enabled = v, b) : b.options.resize;
        }(this, p, o);
      }, a.map.resize = En, a.methodDict.resize = "resizable", d.actions.resize = En.defaults;
    }, listeners: { "interactions:new": function(o) {
      o.interaction.resizeAxes = "xy";
    }, "interactions:action-start": function(o) {
      (function(a) {
        var s = a.iEvent, l = a.interaction;
        if (l.prepared.name === "resize" && l.prepared.edges) {
          var d = s, p = l.rect;
          l._rects = { start: (0, A.default)({}, p), corrected: (0, A.default)({}, p), previous: (0, A.default)({}, p), delta: { left: 0, right: 0, width: 0, top: 0, bottom: 0, height: 0 } }, d.edges = l.prepared.edges, d.rect = l._rects.corrected, d.deltaRect = l._rects.delta;
        }
      })(o), gn(o);
    }, "interactions:action-move": function(o) {
      (function(a) {
        var s = a.iEvent, l = a.interaction;
        if (l.prepared.name === "resize" && l.prepared.edges) {
          var d = s, p = l.interactable.options.resize.invert, b = p === "reposition" || p === "negate", v = l.rect, y = l._rects, E = y.start, C = y.corrected, j = y.delta, W = y.previous;
          if ((0, A.default)(W, C), b) {
            if ((0, A.default)(C, v), p === "reposition") {
              if (C.top > C.bottom) {
                var Z = C.top;
                C.top = C.bottom, C.bottom = Z;
              }
              if (C.left > C.right) {
                var R = C.left;
                C.left = C.right, C.right = R;
              }
            }
          } else
            C.top = Math.min(v.top, E.bottom), C.bottom = Math.max(v.bottom, E.top), C.left = Math.min(v.left, E.right), C.right = Math.max(v.right, E.left);
          for (var ie in C.width = C.right - C.left, C.height = C.bottom - C.top, C)
            j[ie] = C[ie] - W[ie];
          d.edges = l.prepared.edges, d.rect = C, d.deltaRect = j;
        }
      })(o), gn(o);
    }, "interactions:action-end": function(o) {
      var a = o.iEvent, s = o.interaction;
      if (s.prepared.name === "resize" && s.prepared.edges) {
        var l = a;
        l.edges = s.prepared.edges, l.rect = s._rects.corrected, l.deltaRect = s._rects.delta;
      }
    }, "auto-start:check": function(o) {
      var a = o.interaction, s = o.interactable, l = o.element, d = o.rect, p = o.buttons;
      if (d) {
        var b = (0, A.default)({}, a.coords.cur.page), v = s.options.resize;
        if (v && v.enabled && (!a.pointerIsDown || !/mouse|pointer/.test(a.pointerType) || p & v.mouseButtons)) {
          if (u.default.object(v.edges)) {
            var y = { left: !1, right: !1, top: !1, bottom: !1 };
            for (var E in y)
              y[E] = Yt(E, v.edges[E], b, a._latestPointer.eventTarget, l, d, v.margin || En.defaultMargin);
            y.left = y.left && !y.right, y.top = y.top && !y.bottom, (y.left || y.right || y.top || y.bottom) && (o.action = { name: "resize", edges: y });
          } else {
            var C = v.axis !== "y" && b.x > d.right - En.defaultMargin, j = v.axis !== "x" && b.y > d.bottom - En.defaultMargin;
            (C || j) && (o.action = { name: "resize", axes: (C ? "x" : "") + (j ? "y" : "") });
          }
          return !o.action && void 0;
        }
      }
    } }, defaults: { square: !1, preserveAspectRatio: !1, axis: "xy", margin: NaN, edges: null, invert: "none" }, cursors: null, getCursor: function(o) {
      var a = o.edges, s = o.axis, l = o.name, d = En.cursors, p = null;
      if (s)
        p = d[l + s];
      else if (a) {
        for (var b = "", v = ["top", "bottom", "left", "right"], y = 0; y < v.length; y++) {
          var E = v[y];
          a[E] && (b += E);
        }
        p = d[b];
      }
      return p;
    }, defaultMargin: null }, ih = En;
    Nr.default = ih;
    var go = {};
    Object.defineProperty(go, "__esModule", { value: !0 }), go.default = void 0;
    var sh = { id: "actions", install: function(o) {
      o.usePlugin(St.default), o.usePlugin(Nr.default), o.usePlugin(k.default), o.usePlugin(me.default);
    } };
    go.default = sh;
    var tn = {};
    Object.defineProperty(tn, "__esModule", { value: !0 }), tn.default = void 0;
    var On, rr, Nl = 0, lh = { request: function(o) {
      return On(o);
    }, cancel: function(o) {
      return rr(o);
    }, init: function(o) {
      if (On = o.requestAnimationFrame, rr = o.cancelAnimationFrame, !On)
        for (var a = ["ms", "moz", "webkit", "o"], s = 0; s < a.length; s++) {
          var l = a[s];
          On = o["".concat(l, "RequestAnimationFrame")], rr = o["".concat(l, "CancelAnimationFrame")] || o["".concat(l, "CancelRequestAnimationFrame")];
        }
      On = On && On.bind(o), rr = rr && rr.bind(o), On || (On = function(d) {
        var p = Date.now(), b = Math.max(0, 16 - (p - Nl)), v = o.setTimeout(function() {
          d(p + b);
        }, b);
        return Nl = p + b, v;
      }, rr = function(d) {
        return clearTimeout(d);
      });
    } };
    tn.default = lh;
    var Cn = {};
    Object.defineProperty(Cn, "__esModule", { value: !0 }), Cn.default = void 0, Cn.getContainer = da, Cn.getScroll = mo, Cn.getScrollSize = function(o) {
      return u.default.window(o) && (o = window.document.body), { x: o.scrollWidth, y: o.scrollHeight };
    }, Cn.getScrollSizeDelta = function(o, a) {
      var s = o.interaction, l = o.element, d = s && s.interactable.options[s.prepared.name].autoScroll;
      if (!d || !d.enabled)
        return a(), { x: 0, y: 0 };
      var p = da(d.container, s.interactable, l), b = mo(p);
      a();
      var v = mo(p);
      return { x: v.x - b.x, y: v.y - b.y };
    };
    var De = { defaults: { enabled: !1, margin: 60, container: null, speed: 300 }, now: Date.now, interaction: null, i: 0, x: 0, y: 0, isScrolling: !1, prevTime: 0, margin: 0, speed: 0, start: function(o) {
      De.isScrolling = !0, tn.default.cancel(De.i), o.autoScroll = De, De.interaction = o, De.prevTime = De.now(), De.i = tn.default.request(De.scroll);
    }, stop: function() {
      De.isScrolling = !1, De.interaction && (De.interaction.autoScroll = null), tn.default.cancel(De.i);
    }, scroll: function() {
      var o = De.interaction, a = o.interactable, s = o.element, l = o.prepared.name, d = a.options[l].autoScroll, p = da(d.container, a, s), b = De.now(), v = (b - De.prevTime) / 1e3, y = d.speed * v;
      if (y >= 1) {
        var E = { x: De.x * y, y: De.y * y };
        if (E.x || E.y) {
          var C = mo(p);
          u.default.window(p) ? p.scrollBy(E.x, E.y) : p && (p.scrollLeft += E.x, p.scrollTop += E.y);
          var j = mo(p), W = { x: j.x - C.x, y: j.y - C.y };
          (W.x || W.y) && a.fire({ type: "autoscroll", target: s, interactable: a, delta: W, interaction: o, container: p });
        }
        De.prevTime = b;
      }
      De.isScrolling && (tn.default.cancel(De.i), De.i = tn.default.request(De.scroll));
    }, check: function(o, a) {
      var s;
      return (s = o.options[a].autoScroll) == null ? void 0 : s.enabled;
    }, onInteractionMove: function(o) {
      var a = o.interaction, s = o.pointer;
      if (a.interacting() && De.check(a.interactable, a.prepared.name))
        if (a.simulation)
          De.x = De.y = 0;
        else {
          var l, d, p, b, v = a.interactable, y = a.element, E = a.prepared.name, C = v.options[E].autoScroll, j = da(C.container, v, y);
          if (u.default.window(j))
            b = s.clientX < De.margin, l = s.clientY < De.margin, d = s.clientX > j.innerWidth - De.margin, p = s.clientY > j.innerHeight - De.margin;
          else {
            var W = F.getElementClientRect(j);
            b = s.clientX < W.left + De.margin, l = s.clientY < W.top + De.margin, d = s.clientX > W.right - De.margin, p = s.clientY > W.bottom - De.margin;
          }
          De.x = d ? 1 : b ? -1 : 0, De.y = p ? 1 : l ? -1 : 0, De.isScrolling || (De.margin = C.margin, De.speed = C.speed, De.start(a));
        }
    } };
    function da(o, a, s) {
      return (u.default.string(o) ? (0, G.getStringOptionResult)(o, a, s) : o) || (0, r.getWindow)(s);
    }
    function mo(o) {
      return u.default.window(o) && (o = window.document.body), { x: o.scrollLeft, y: o.scrollTop };
    }
    var uh = { id: "auto-scroll", install: function(o) {
      var a = o.defaults, s = o.actions;
      o.autoScroll = De, De.now = function() {
        return o.now();
      }, s.phaselessTypes.autoscroll = !0, a.perAction.autoScroll = De.defaults;
    }, listeners: { "interactions:new": function(o) {
      o.interaction.autoScroll = null;
    }, "interactions:destroy": function(o) {
      o.interaction.autoScroll = null, De.stop(), De.interaction && (De.interaction = null);
    }, "interactions:stop": De.stop, "interactions:action-move": function(o) {
      return De.onInteractionMove(o);
    } } }, ch = uh;
    Cn.default = ch;
    var Wt = {};
    Object.defineProperty(Wt, "__esModule", { value: !0 }), Wt.copyAction = function(o, a) {
      return o.name = a.name, o.axis = a.axis, o.edges = a.edges, o;
    }, Wt.sign = void 0, Wt.warnOnce = function(o, a) {
      var s = !1;
      return function() {
        return s || (r.window.console.warn(a), s = !0), o.apply(this, arguments);
      };
    }, Wt.sign = function(o) {
      return o >= 0 ? 1 : -1;
    };
    var fa = {};
    function dh(o) {
      return u.default.bool(o) ? (this.options.styleCursor = o, this) : o === null ? (delete this.options.styleCursor, this) : this.options.styleCursor;
    }
    function fh(o) {
      return u.default.func(o) ? (this.options.actionChecker = o, this) : o === null ? (delete this.options.actionChecker, this) : this.options.actionChecker;
    }
    Object.defineProperty(fa, "__esModule", { value: !0 }), fa.default = void 0;
    var ph = { id: "auto-start/interactableMethods", install: function(o) {
      var a = o.Interactable;
      a.prototype.getAction = function(s, l, d, p) {
        var b = function(v, y, E, C, j) {
          var W = v.getRect(C), Z = { action: null, interactable: v, interaction: E, element: C, rect: W, buttons: y.buttons || { 0: 1, 1: 4, 3: 8, 4: 16 }[y.button] };
          return j.fire("auto-start:check", Z), Z.action;
        }(this, l, d, p, o);
        return this.options.actionChecker ? this.options.actionChecker(s, l, b, this, p, d) : b;
      }, a.prototype.ignoreFrom = (0, Wt.warnOnce)(function(s) {
        return this._backCompatOption("ignoreFrom", s);
      }, "Interactable.ignoreFrom() has been deprecated. Use Interactble.draggable({ignoreFrom: newValue})."), a.prototype.allowFrom = (0, Wt.warnOnce)(function(s) {
        return this._backCompatOption("allowFrom", s);
      }, "Interactable.allowFrom() has been deprecated. Use Interactble.draggable({allowFrom: newValue})."), a.prototype.actionChecker = fh, a.prototype.styleCursor = dh;
    } };
    fa.default = ph;
    var Rr = {};
    function Rl(o, a, s, l, d) {
      return a.testIgnoreAllow(a.options[o.name], s, l) && a.options[o.name].enabled && pa(a, s, o, d) ? o : null;
    }
    function hh(o, a, s, l, d, p, b) {
      for (var v = 0, y = l.length; v < y; v++) {
        var E = l[v], C = d[v], j = E.getAction(a, s, o, C);
        if (j) {
          var W = Rl(j, E, C, p, b);
          if (W)
            return { action: W, interactable: E, element: C };
        }
      }
      return { action: null, interactable: null, element: null };
    }
    function Ll(o, a, s, l, d) {
      var p = [], b = [], v = l;
      function y(C) {
        p.push(C), b.push(v);
      }
      for (; u.default.element(v); ) {
        p = [], b = [], d.interactables.forEachMatch(v, y);
        var E = hh(o, a, s, p, b, l, d);
        if (E.action && !E.interactable.options[E.action.name].manualStart)
          return E;
        v = F.parentNode(v);
      }
      return { action: null, interactable: null, element: null };
    }
    function Bl(o, a, s) {
      var l = a.action, d = a.interactable, p = a.element;
      l = l || { name: null }, o.interactable = d, o.element = p, (0, Wt.copyAction)(o.prepared, l), o.rect = d && l.name ? d.getRect(p) : null, Hl(o, s), s.fire("autoStart:prepared", { interaction: o });
    }
    function pa(o, a, s, l) {
      var d = o.options, p = d[s.name].max, b = d[s.name].maxPerElement, v = l.autoStart.maxInteractions, y = 0, E = 0, C = 0;
      if (!(p && b && v))
        return !1;
      for (var j = 0; j < l.interactions.list.length; j++) {
        var W = l.interactions.list[j], Z = W.prepared.name;
        if (W.interacting() && (++y >= v || W.interactable === o && ((E += Z === s.name ? 1 : 0) >= p || W.element === a && (C++, Z === s.name && C >= b))))
          return !1;
      }
      return v > 0;
    }
    function Fl(o, a) {
      return u.default.number(o) ? (a.autoStart.maxInteractions = o, this) : a.autoStart.maxInteractions;
    }
    function Ti(o, a, s) {
      var l = s.autoStart.cursorElement;
      l && l !== o && (l.style.cursor = ""), o.ownerDocument.documentElement.style.cursor = a, o.style.cursor = a, s.autoStart.cursorElement = a ? o : null;
    }
    function Hl(o, a) {
      var s = o.interactable, l = o.element, d = o.prepared;
      if (o.pointerType === "mouse" && s && s.options.styleCursor) {
        var p = "";
        if (d.name) {
          var b = s.options[d.name].cursorChecker;
          p = u.default.func(b) ? b(d, s, l, o._interacting) : a.actions.map[d.name].getCursor(d);
        }
        Ti(o.element, p || "", a);
      } else
        a.autoStart.cursorElement && Ti(a.autoStart.cursorElement, "", a);
    }
    Object.defineProperty(Rr, "__esModule", { value: !0 }), Rr.default = void 0;
    var vh = { id: "auto-start/base", before: ["actions"], install: function(o) {
      var a = o.interactStatic, s = o.defaults;
      o.usePlugin(fa.default), s.base.actionChecker = null, s.base.styleCursor = !0, (0, A.default)(s.perAction, { manualStart: !1, max: 1 / 0, maxPerElement: 1, allowFrom: null, ignoreFrom: null, mouseButtons: 1 }), a.maxInteractions = function(l) {
        return Fl(l, o);
      }, o.autoStart = { maxInteractions: 1 / 0, withinInteractionLimit: pa, cursorElement: null };
    }, listeners: { "interactions:down": function(o, a) {
      var s = o.interaction, l = o.pointer, d = o.event, p = o.eventTarget;
      s.interacting() || Bl(s, Ll(s, l, d, p, a), a);
    }, "interactions:move": function(o, a) {
      (function(s, l) {
        var d = s.interaction, p = s.pointer, b = s.event, v = s.eventTarget;
        d.pointerType !== "mouse" || d.pointerIsDown || d.interacting() || Bl(d, Ll(d, p, b, v, l), l);
      })(o, a), function(s, l) {
        var d = s.interaction;
        if (d.pointerIsDown && !d.interacting() && d.pointerWasMoved && d.prepared.name) {
          l.fire("autoStart:before-start", s);
          var p = d.interactable, b = d.prepared.name;
          b && p && (p.options[b].manualStart || !pa(p, d.element, d.prepared, l) ? d.stop() : (d.start(d.prepared, p, d.element), Hl(d, l)));
        }
      }(o, a);
    }, "interactions:stop": function(o, a) {
      var s = o.interaction, l = s.interactable;
      l && l.options.styleCursor && Ti(s.element, "", a);
    } }, maxInteractions: Fl, withinInteractionLimit: pa, validateAction: Rl }, gh = vh;
    Rr.default = gh;
    var ha = {};
    Object.defineProperty(ha, "__esModule", { value: !0 }), ha.default = void 0;
    var mh = { id: "auto-start/dragAxis", listeners: { "autoStart:before-start": function(o, a) {
      var s = o.interaction, l = o.eventTarget, d = o.dx, p = o.dy;
      if (s.prepared.name === "drag") {
        var b = Math.abs(d), v = Math.abs(p), y = s.interactable.options.drag, E = y.startAxis, C = b > v ? "x" : b < v ? "y" : "xy";
        if (s.prepared.axis = y.lockAxis === "start" ? C[0] : y.lockAxis, C !== "xy" && E !== "xy" && E !== C) {
          s.prepared.name = null;
          for (var j = l, W = function(R) {
            if (R !== s.interactable) {
              var ie = s.interactable.options.drag;
              if (!ie.manualStart && R.testIgnoreAllow(ie, j, l)) {
                var ge = R.getAction(s.downPointer, s.downEvent, s, j);
                if (ge && ge.name === "drag" && function(de, we) {
                  if (!we)
                    return !1;
                  var Me = we.options.drag.startAxis;
                  return de === "xy" || Me === "xy" || Me === de;
                }(C, R) && Rr.default.validateAction(ge, R, j, l, a))
                  return R;
              }
            }
          }; u.default.element(j); ) {
            var Z = a.interactables.forEachMatch(j, W);
            if (Z) {
              s.prepared.name = "drag", s.interactable = Z, s.element = j;
              break;
            }
            j = (0, F.parentNode)(j);
          }
        }
      }
    } } };
    ha.default = mh;
    var va = {};
    function Mi(o) {
      var a = o.prepared && o.prepared.name;
      if (!a)
        return null;
      var s = o.interactable.options;
      return s[a].hold || s[a].delay;
    }
    Object.defineProperty(va, "__esModule", { value: !0 }), va.default = void 0;
    var yh = { id: "auto-start/hold", install: function(o) {
      var a = o.defaults;
      o.usePlugin(Rr.default), a.perAction.hold = 0, a.perAction.delay = 0;
    }, listeners: { "interactions:new": function(o) {
      o.interaction.autoStartHoldTimer = null;
    }, "autoStart:prepared": function(o) {
      var a = o.interaction, s = Mi(a);
      s > 0 && (a.autoStartHoldTimer = setTimeout(function() {
        a.start(a.prepared, a.interactable, a.element);
      }, s));
    }, "interactions:move": function(o) {
      var a = o.interaction, s = o.duplicate;
      a.autoStartHoldTimer && a.pointerWasMoved && !s && (clearTimeout(a.autoStartHoldTimer), a.autoStartHoldTimer = null);
    }, "autoStart:before-start": function(o) {
      var a = o.interaction;
      Mi(a) > 0 && (a.prepared.name = null);
    } }, getHoldDuration: Mi }, bh = yh;
    va.default = bh;
    var yo = {};
    Object.defineProperty(yo, "__esModule", { value: !0 }), yo.default = void 0;
    var wh = { id: "auto-start", install: function(o) {
      o.usePlugin(Rr.default), o.usePlugin(va.default), o.usePlugin(ha.default);
    } };
    yo.default = wh;
    var or = {};
    function xh(o) {
      return /^(always|never|auto)$/.test(o) ? (this.options.preventDefault = o, this) : u.default.bool(o) ? (this.options.preventDefault = o ? "always" : "never", this) : this.options.preventDefault;
    }
    function _h(o) {
      var a = o.interaction, s = o.event;
      a.interactable && a.interactable.checkAndPreventDefault(s);
    }
    function Vl(o) {
      var a = o.Interactable;
      a.prototype.preventDefault = xh, a.prototype.checkAndPreventDefault = function(s) {
        return function(l, d, p) {
          var b = l.options.preventDefault;
          if (b !== "never")
            if (b !== "always") {
              if (d.events.supportsPassive && /^touch(start|move)$/.test(p.type)) {
                var v = (0, r.getWindow)(p.target).document, y = d.getDocOptions(v);
                if (!y || !y.events || y.events.passive !== !1)
                  return;
              }
              /^(mouse|pointer|touch)*(down|start)/i.test(p.type) || u.default.element(p.target) && (0, F.matchesSelector)(p.target, "input,select,textarea,[contenteditable=true],[contenteditable=true] *") || p.preventDefault();
            } else
              p.preventDefault();
        }(this, o, s);
      }, o.interactions.docEvents.push({ type: "dragstart", listener: function(s) {
        for (var l = 0; l < o.interactions.list.length; l++) {
          var d = o.interactions.list[l];
          if (d.element && (d.element === s.target || (0, F.nodeContains)(d.element, s.target)))
            return void d.interactable.checkAndPreventDefault(s);
        }
      } });
    }
    Object.defineProperty(or, "__esModule", { value: !0 }), or.default = void 0, or.install = Vl;
    var Sh = { id: "core/interactablePreventDefault", install: Vl, listeners: ["down", "move", "up", "cancel"].reduce(function(o, a) {
      return o["interactions:".concat(a)] = _h, o;
    }, {}) };
    or.default = Sh;
    var Pi = {};
    Object.defineProperty(Pi, "__esModule", { value: !0 }), Pi.default = void 0, Pi.default = {};
    var bo, ga = {};
    Object.defineProperty(ga, "__esModule", { value: !0 }), ga.default = void 0, function(o) {
      o.touchAction = "touchAction", o.boxSizing = "boxSizing", o.noListeners = "noListeners";
    }(bo || (bo = {})), bo.touchAction, bo.boxSizing, bo.noListeners;
    var kh = { id: "dev-tools", install: function() {
    } };
    ga.default = kh;
    var ar = {};
    Object.defineProperty(ar, "__esModule", { value: !0 }), ar.default = function o(a) {
      var s = {};
      for (var l in a) {
        var d = a[l];
        u.default.plainObject(d) ? s[l] = o(d) : u.default.array(d) ? s[l] = je.from(d) : s[l] = d;
      }
      return s;
    };
    var ir = {};
    function Wl(o, a) {
      return function(s) {
        if (Array.isArray(s))
          return s;
      }(o) || function(s, l) {
        var d = s == null ? null : typeof Symbol < "u" && s[Symbol.iterator] || s["@@iterator"];
        if (d != null) {
          var p, b, v = [], y = !0, E = !1;
          try {
            for (d = d.call(s); !(y = (p = d.next()).done) && (v.push(p.value), !l || v.length !== l); y = !0)
              ;
          } catch (C) {
            E = !0, b = C;
          } finally {
            try {
              y || d.return == null || d.return();
            } finally {
              if (E)
                throw b;
            }
          }
          return v;
        }
      }(o, a) || function(s, l) {
        if (s) {
          if (typeof s == "string")
            return Kl(s, l);
          var d = Object.prototype.toString.call(s).slice(8, -1);
          return d === "Object" && s.constructor && (d = s.constructor.name), d === "Map" || d === "Set" ? Array.from(s) : d === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d) ? Kl(s, l) : void 0;
        }
      }(o, a) || function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    function Kl(o, a) {
      (a == null || a > o.length) && (a = o.length);
      for (var s = 0, l = Array(a); s < a; s++)
        l[s] = o[s];
      return l;
    }
    function Eh(o, a) {
      for (var s = 0; s < a.length; s++) {
        var l = a[s];
        l.enumerable = l.enumerable || !1, l.configurable = !0, "value" in l && (l.writable = !0), Object.defineProperty(o, l.key, l);
      }
    }
    function Bn(o, a, s) {
      return a in o ? Object.defineProperty(o, a, { value: s, enumerable: !0, configurable: !0, writable: !0 }) : o[a] = s, o;
    }
    Object.defineProperty(ir, "__esModule", { value: !0 }), ir.default = void 0, ir.getRectOffset = ql;
    var Oh = function() {
      function o(l) {
        (function(d, p) {
          if (!(d instanceof p))
            throw new TypeError("Cannot call a class as a function");
        })(this, o), Bn(this, "states", []), Bn(this, "startOffset", { left: 0, right: 0, top: 0, bottom: 0 }), Bn(this, "startDelta", void 0), Bn(this, "result", void 0), Bn(this, "endResult", void 0), Bn(this, "startEdges", void 0), Bn(this, "edges", void 0), Bn(this, "interaction", void 0), this.interaction = l, this.result = ma(), this.edges = { left: !1, right: !1, top: !1, bottom: !1 };
      }
      var a, s;
      return a = o, (s = [{ key: "start", value: function(l, d) {
        var p = l.phase, b = this.interaction, v = function(E) {
          var C = E.interactable.options[E.prepared.name], j = C.modifiers;
          return j && j.length ? j : ["snap", "snapSize", "snapEdges", "restrict", "restrictEdges", "restrictSize"].map(function(W) {
            var Z = C[W];
            return Z && Z.enabled && { options: Z, methods: Z._methods };
          }).filter(function(W) {
            return !!W;
          });
        }(b);
        this.prepareStates(v), this.startEdges = (0, A.default)({}, b.edges), this.edges = (0, A.default)({}, this.startEdges), this.startOffset = ql(b.rect, d), this.startDelta = { x: 0, y: 0 };
        var y = this.fillArg({ phase: p, pageCoords: d, preEnd: !1 });
        return this.result = ma(), this.startAll(y), this.result = this.setAll(y);
      } }, { key: "fillArg", value: function(l) {
        var d = this.interaction;
        return l.interaction = d, l.interactable = d.interactable, l.element = d.element, l.rect || (l.rect = d.rect), l.edges || (l.edges = this.startEdges), l.startOffset = this.startOffset, l;
      } }, { key: "startAll", value: function(l) {
        for (var d = 0; d < this.states.length; d++) {
          var p = this.states[d];
          p.methods.start && (l.state = p, p.methods.start(l));
        }
      } }, { key: "setAll", value: function(l) {
        var d = l.phase, p = l.preEnd, b = l.skipModifiers, v = l.rect, y = l.edges;
        l.coords = (0, A.default)({}, l.pageCoords), l.rect = (0, A.default)({}, v), l.edges = (0, A.default)({}, y);
        for (var E = b ? this.states.slice(b) : this.states, C = ma(l.coords, l.rect), j = 0; j < E.length; j++) {
          var W, Z = E[j], R = Z.options, ie = (0, A.default)({}, l.coords), ge = null;
          (W = Z.methods) != null && W.set && this.shouldDo(R, p, d) && (l.state = Z, ge = Z.methods.set(l), G.addEdges(l.edges, l.rect, { x: l.coords.x - ie.x, y: l.coords.y - ie.y })), C.eventProps.push(ge);
        }
        (0, A.default)(this.edges, l.edges), C.delta.x = l.coords.x - l.pageCoords.x, C.delta.y = l.coords.y - l.pageCoords.y, C.rectDelta.left = l.rect.left - v.left, C.rectDelta.right = l.rect.right - v.right, C.rectDelta.top = l.rect.top - v.top, C.rectDelta.bottom = l.rect.bottom - v.bottom;
        var de = this.result.coords, we = this.result.rect;
        if (de && we) {
          var Me = C.rect.left !== we.left || C.rect.right !== we.right || C.rect.top !== we.top || C.rect.bottom !== we.bottom;
          C.changed = Me || de.x !== C.coords.x || de.y !== C.coords.y;
        }
        return C;
      } }, { key: "applyToInteraction", value: function(l) {
        var d = this.interaction, p = l.phase, b = d.coords.cur, v = d.coords.start, y = this.result, E = this.startDelta, C = y.delta;
        p === "start" && (0, A.default)(this.startDelta, y.delta);
        for (var j = 0; j < [[v, E], [b, C]].length; j++) {
          var W = Wl([[v, E], [b, C]][j], 2), Z = W[0], R = W[1];
          Z.page.x += R.x, Z.page.y += R.y, Z.client.x += R.x, Z.client.y += R.y;
        }
        var ie = this.result.rectDelta, ge = l.rect || d.rect;
        ge.left += ie.left, ge.right += ie.right, ge.top += ie.top, ge.bottom += ie.bottom, ge.width = ge.right - ge.left, ge.height = ge.bottom - ge.top;
      } }, { key: "setAndApply", value: function(l) {
        var d = this.interaction, p = l.phase, b = l.preEnd, v = l.skipModifiers, y = this.setAll(this.fillArg({ preEnd: b, phase: p, pageCoords: l.modifiedCoords || d.coords.cur.page }));
        if (this.result = y, !y.changed && (!v || v < this.states.length) && d.interacting())
          return !1;
        if (l.modifiedCoords) {
          var E = d.coords.cur.page, C = { x: l.modifiedCoords.x - E.x, y: l.modifiedCoords.y - E.y };
          y.coords.x += C.x, y.coords.y += C.y, y.delta.x += C.x, y.delta.y += C.y;
        }
        this.applyToInteraction(l);
      } }, { key: "beforeEnd", value: function(l) {
        var d = l.interaction, p = l.event, b = this.states;
        if (b && b.length) {
          for (var v = !1, y = 0; y < b.length; y++) {
            var E = b[y];
            l.state = E;
            var C = E.options, j = E.methods, W = j.beforeEnd && j.beforeEnd(l);
            if (W)
              return this.endResult = W, !1;
            v = v || !v && this.shouldDo(C, !0, l.phase, !0);
          }
          v && d.move({ event: p, preEnd: !0 });
        }
      } }, { key: "stop", value: function(l) {
        var d = l.interaction;
        if (this.states && this.states.length) {
          var p = (0, A.default)({ states: this.states, interactable: d.interactable, element: d.element, rect: null }, l);
          this.fillArg(p);
          for (var b = 0; b < this.states.length; b++) {
            var v = this.states[b];
            p.state = v, v.methods.stop && v.methods.stop(p);
          }
          this.states = null, this.endResult = null;
        }
      } }, { key: "prepareStates", value: function(l) {
        this.states = [];
        for (var d = 0; d < l.length; d++) {
          var p = l[d], b = p.options, v = p.methods, y = p.name;
          this.states.push({ options: b, methods: v, index: d, name: y });
        }
        return this.states;
      } }, { key: "restoreInteractionCoords", value: function(l) {
        var d = l.interaction, p = d.coords, b = d.rect, v = d.modification;
        if (v.result) {
          for (var y = v.startDelta, E = v.result, C = E.delta, j = E.rectDelta, W = [[p.start, y], [p.cur, C]], Z = 0; Z < W.length; Z++) {
            var R = Wl(W[Z], 2), ie = R[0], ge = R[1];
            ie.page.x -= ge.x, ie.page.y -= ge.y, ie.client.x -= ge.x, ie.client.y -= ge.y;
          }
          b.left -= j.left, b.right -= j.right, b.top -= j.top, b.bottom -= j.bottom;
        }
      } }, { key: "shouldDo", value: function(l, d, p, b) {
        return !(!l || l.enabled === !1 || b && !l.endOnly || l.endOnly && !d || p === "start" && !l.setStart);
      } }, { key: "copyFrom", value: function(l) {
        this.startOffset = l.startOffset, this.startDelta = l.startDelta, this.startEdges = l.startEdges, this.edges = l.edges, this.states = l.states.map(function(d) {
          return (0, ar.default)(d);
        }), this.result = ma((0, A.default)({}, l.result.coords), (0, A.default)({}, l.result.rect));
      } }, { key: "destroy", value: function() {
        for (var l in this)
          this[l] = null;
      } }]) && Eh(a.prototype, s), Object.defineProperty(a, "prototype", { writable: !1 }), o;
    }();
    function ma(o, a) {
      return { rect: a, coords: o, delta: { x: 0, y: 0 }, rectDelta: { left: 0, right: 0, top: 0, bottom: 0 }, eventProps: [], changed: !0 };
    }
    function ql(o, a) {
      return o ? { left: a.x - o.left, top: a.y - o.top, right: o.right - a.x, bottom: o.bottom - a.y } : { left: 0, top: 0, right: 0, bottom: 0 };
    }
    ir.default = Oh;
    var Ct = {};
    function ya(o) {
      var a = o.iEvent, s = o.interaction.modification.result;
      s && (a.modifiers = s.eventProps);
    }
    Object.defineProperty(Ct, "__esModule", { value: !0 }), Ct.addEventModifiers = ya, Ct.default = void 0, Ct.makeModifier = function(o, a) {
      var s = o.defaults, l = { start: o.start, set: o.set, beforeEnd: o.beforeEnd, stop: o.stop }, d = function(p) {
        var b = p || {};
        for (var v in b.enabled = b.enabled !== !1, s)
          v in b || (b[v] = s[v]);
        var y = { options: b, methods: l, name: a, enable: function() {
          return b.enabled = !0, y;
        }, disable: function() {
          return b.enabled = !1, y;
        } };
        return y;
      };
      return a && typeof a == "string" && (d._defaults = s, d._methods = l), d;
    };
    var Ch = { id: "modifiers/base", before: ["actions"], install: function(o) {
      o.defaults.perAction.modifiers = [];
    }, listeners: { "interactions:new": function(o) {
      var a = o.interaction;
      a.modification = new ir.default(a);
    }, "interactions:before-action-start": function(o) {
      var a = o.interaction, s = o.interaction.modification;
      s.start(o, a.coords.start.page), a.edges = s.edges, s.applyToInteraction(o);
    }, "interactions:before-action-move": function(o) {
      var a = o.interaction, s = a.modification, l = s.setAndApply(o);
      return a.edges = s.edges, l;
    }, "interactions:before-action-end": function(o) {
      var a = o.interaction, s = a.modification, l = s.beforeEnd(o);
      return a.edges = s.startEdges, l;
    }, "interactions:action-start": ya, "interactions:action-move": ya, "interactions:action-end": ya, "interactions:after-action-start": function(o) {
      return o.interaction.modification.restoreInteractionCoords(o);
    }, "interactions:after-action-move": function(o) {
      return o.interaction.modification.restoreInteractionCoords(o);
    }, "interactions:stop": function(o) {
      return o.interaction.modification.stop(o);
    } } }, Th = Ch;
    Ct.default = Th;
    var wo = {};
    Object.defineProperty(wo, "__esModule", { value: !0 }), wo.defaults = void 0, wo.defaults = { base: { preventDefault: "auto", deltaSource: "page" }, perAction: { enabled: !1, origin: { x: 0, y: 0 } }, actions: {} };
    var xo = {};
    function Ai(o) {
      return Ai = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(a) {
        return typeof a;
      } : function(a) {
        return a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
      }, Ai(o);
    }
    function Mh(o, a) {
      for (var s = 0; s < a.length; s++) {
        var l = a[s];
        l.enumerable = l.enumerable || !1, l.configurable = !0, "value" in l && (l.writable = !0), Object.defineProperty(o, l.key, l);
      }
    }
    function ji(o, a) {
      return ji = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(s, l) {
        return s.__proto__ = l, s;
      }, ji(o, a);
    }
    function Ph(o, a) {
      if (a && (Ai(a) === "object" || typeof a == "function"))
        return a;
      if (a !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
      return rt(o);
    }
    function rt(o) {
      if (o === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return o;
    }
    function ba(o) {
      return ba = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(a) {
        return a.__proto__ || Object.getPrototypeOf(a);
      }, ba(o);
    }
    function ct(o, a, s) {
      return a in o ? Object.defineProperty(o, a, { value: s, enumerable: !0, configurable: !0, writable: !0 }) : o[a] = s, o;
    }
    Object.defineProperty(xo, "__esModule", { value: !0 }), xo.InteractEvent = void 0;
    var Ul = function(o) {
      (function(v, y) {
        if (typeof y != "function" && y !== null)
          throw new TypeError("Super expression must either be null or a function");
        v.prototype = Object.create(y && y.prototype, { constructor: { value: v, writable: !0, configurable: !0 } }), Object.defineProperty(v, "prototype", { writable: !1 }), y && ji(v, y);
      })(b, o);
      var a, s, l, d, p = (l = b, d = function() {
        if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
          return !1;
        if (typeof Proxy == "function")
          return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          })), !0;
        } catch {
          return !1;
        }
      }(), function() {
        var v, y = ba(l);
        if (d) {
          var E = ba(this).constructor;
          v = Reflect.construct(y, arguments, E);
        } else
          v = y.apply(this, arguments);
        return Ph(this, v);
      });
      function b(v, y, E, C, j, W, Z) {
        var R;
        (function(at, We) {
          if (!(at instanceof We))
            throw new TypeError("Cannot call a class as a function");
        })(this, b), ct(rt(R = p.call(this, v)), "relatedTarget", null), ct(rt(R), "screenX", void 0), ct(rt(R), "screenY", void 0), ct(rt(R), "button", void 0), ct(rt(R), "buttons", void 0), ct(rt(R), "ctrlKey", void 0), ct(rt(R), "shiftKey", void 0), ct(rt(R), "altKey", void 0), ct(rt(R), "metaKey", void 0), ct(rt(R), "page", void 0), ct(rt(R), "client", void 0), ct(rt(R), "delta", void 0), ct(rt(R), "rect", void 0), ct(rt(R), "x0", void 0), ct(rt(R), "y0", void 0), ct(rt(R), "t0", void 0), ct(rt(R), "dt", void 0), ct(rt(R), "duration", void 0), ct(rt(R), "clientX0", void 0), ct(rt(R), "clientY0", void 0), ct(rt(R), "velocity", void 0), ct(rt(R), "speed", void 0), ct(rt(R), "swipe", void 0), ct(rt(R), "axes", void 0), ct(rt(R), "preEnd", void 0), j = j || v.element;
        var ie = v.interactable, ge = (ie && ie.options || wo.defaults).deltaSource, de = (0, D.default)(ie, j, E), we = C === "start", Me = C === "end", Be = we ? rt(R) : v.prevEvent, Qe = we ? v.coords.start : Me ? { page: Be.page, client: Be.client, timeStamp: v.coords.cur.timeStamp } : v.coords.cur;
        return R.page = (0, A.default)({}, Qe.page), R.client = (0, A.default)({}, Qe.client), R.rect = (0, A.default)({}, v.rect), R.timeStamp = Qe.timeStamp, Me || (R.page.x -= de.x, R.page.y -= de.y, R.client.x -= de.x, R.client.y -= de.y), R.ctrlKey = y.ctrlKey, R.altKey = y.altKey, R.shiftKey = y.shiftKey, R.metaKey = y.metaKey, R.button = y.button, R.buttons = y.buttons, R.target = j, R.currentTarget = j, R.preEnd = W, R.type = Z || E + (C || ""), R.interactable = ie, R.t0 = we ? v.pointers[v.pointers.length - 1].downTime : Be.t0, R.x0 = v.coords.start.page.x - de.x, R.y0 = v.coords.start.page.y - de.y, R.clientX0 = v.coords.start.client.x - de.x, R.clientY0 = v.coords.start.client.y - de.y, R.delta = we || Me ? { x: 0, y: 0 } : { x: R[ge].x - Be[ge].x, y: R[ge].y - Be[ge].y }, R.dt = v.coords.delta.timeStamp, R.duration = R.timeStamp - R.t0, R.velocity = (0, A.default)({}, v.coords.velocity[ge]), R.speed = (0, ue.default)(R.velocity.x, R.velocity.y), R.swipe = Me || C === "inertiastart" ? R.getSwipe() : null, R;
      }
      return a = b, (s = [{ key: "getSwipe", value: function() {
        var v = this._interaction;
        if (v.prevEvent.speed < 600 || this.timeStamp - v.prevEvent.timeStamp > 150)
          return null;
        var y = 180 * Math.atan2(v.prevEvent.velocityY, v.prevEvent.velocityX) / Math.PI;
        y < 0 && (y += 360);
        var E = 112.5 <= y && y < 247.5, C = 202.5 <= y && y < 337.5;
        return { up: C, down: !C && 22.5 <= y && y < 157.5, left: E, right: !E && (292.5 <= y || y < 67.5), angle: y, speed: v.prevEvent.speed, velocity: { x: v.prevEvent.velocityX, y: v.prevEvent.velocityY } };
      } }, { key: "preventDefault", value: function() {
      } }, { key: "stopImmediatePropagation", value: function() {
        this.immediatePropagationStopped = this.propagationStopped = !0;
      } }, { key: "stopPropagation", value: function() {
        this.propagationStopped = !0;
      } }]) && Mh(a.prototype, s), Object.defineProperty(a, "prototype", { writable: !1 }), b;
    }(Oe.BaseEvent);
    xo.InteractEvent = Ul, Object.defineProperties(Ul.prototype, { pageX: { get: function() {
      return this.page.x;
    }, set: function(o) {
      this.page.x = o;
    } }, pageY: { get: function() {
      return this.page.y;
    }, set: function(o) {
      this.page.y = o;
    } }, clientX: { get: function() {
      return this.client.x;
    }, set: function(o) {
      this.client.x = o;
    } }, clientY: { get: function() {
      return this.client.y;
    }, set: function(o) {
      this.client.y = o;
    } }, dx: { get: function() {
      return this.delta.x;
    }, set: function(o) {
      this.delta.x = o;
    } }, dy: { get: function() {
      return this.delta.y;
    }, set: function(o) {
      this.delta.y = o;
    } }, velocityX: { get: function() {
      return this.velocity.x;
    }, set: function(o) {
      this.velocity.x = o;
    } }, velocityY: { get: function() {
      return this.velocity.y;
    }, set: function(o) {
      this.velocity.y = o;
    } } });
    var _o = {};
    function Yl(o, a) {
      for (var s = 0; s < a.length; s++) {
        var l = a[s];
        l.enumerable = l.enumerable || !1, l.configurable = !0, "value" in l && (l.writable = !0), Object.defineProperty(o, l.key, l);
      }
    }
    function Ah(o, a, s) {
      return a && Yl(o.prototype, a), s && Yl(o, s), Object.defineProperty(o, "prototype", { writable: !1 }), o;
    }
    function So(o, a, s) {
      return a in o ? Object.defineProperty(o, a, { value: s, enumerable: !0, configurable: !0, writable: !0 }) : o[a] = s, o;
    }
    Object.defineProperty(_o, "__esModule", { value: !0 }), _o.PointerInfo = void 0;
    var jh = Ah(function o(a, s, l, d, p) {
      (function(b, v) {
        if (!(b instanceof v))
          throw new TypeError("Cannot call a class as a function");
      })(this, o), So(this, "id", void 0), So(this, "pointer", void 0), So(this, "event", void 0), So(this, "downTime", void 0), So(this, "downTarget", void 0), this.id = a, this.pointer = s, this.event = l, this.downTime = d, this.downTarget = p;
    });
    _o.PointerInfo = jh;
    var wa, xa, Bt = {};
    function Ih(o, a) {
      for (var s = 0; s < a.length; s++) {
        var l = a[s];
        l.enumerable = l.enumerable || !1, l.configurable = !0, "value" in l && (l.writable = !0), Object.defineProperty(o, l.key, l);
      }
    }
    function vt(o, a, s) {
      return a in o ? Object.defineProperty(o, a, { value: s, enumerable: !0, configurable: !0, writable: !0 }) : o[a] = s, o;
    }
    Object.defineProperty(Bt, "__esModule", { value: !0 }), Bt.Interaction = void 0, Object.defineProperty(Bt, "PointerInfo", { enumerable: !0, get: function() {
      return _o.PointerInfo;
    } }), Bt.default = Bt._ProxyValues = Bt._ProxyMethods = void 0, Bt._ProxyValues = wa, function(o) {
      o.interactable = "", o.element = "", o.prepared = "", o.pointerIsDown = "", o.pointerWasMoved = "", o._proxy = "";
    }(wa || (Bt._ProxyValues = wa = {})), Bt._ProxyMethods = xa, function(o) {
      o.start = "", o.move = "", o.end = "", o.stop = "", o.interacting = "";
    }(xa || (Bt._ProxyMethods = xa = {}));
    var Dh = 0, Xl = function() {
      function o(l) {
        var d = this, p = l.pointerType, b = l.scopeFire;
        (function(W, Z) {
          if (!(W instanceof Z))
            throw new TypeError("Cannot call a class as a function");
        })(this, o), vt(this, "interactable", null), vt(this, "element", null), vt(this, "rect", null), vt(this, "_rects", void 0), vt(this, "edges", null), vt(this, "_scopeFire", void 0), vt(this, "prepared", { name: null, axis: null, edges: null }), vt(this, "pointerType", void 0), vt(this, "pointers", []), vt(this, "downEvent", null), vt(this, "downPointer", {}), vt(this, "_latestPointer", { pointer: null, event: null, eventTarget: null }), vt(this, "prevEvent", null), vt(this, "pointerIsDown", !1), vt(this, "pointerWasMoved", !1), vt(this, "_interacting", !1), vt(this, "_ending", !1), vt(this, "_stopped", !0), vt(this, "_proxy", null), vt(this, "simulation", null), vt(this, "doMove", (0, Wt.warnOnce)(function(W) {
          this.move(W);
        }, "The interaction.doMove() method has been renamed to interaction.move()")), vt(this, "coords", { start: ee.newCoords(), prev: ee.newCoords(), cur: ee.newCoords(), delta: ee.newCoords(), velocity: ee.newCoords() }), vt(this, "_id", Dh++), this._scopeFire = b, this.pointerType = p;
        var v = this;
        this._proxy = {};
        var y = function(W) {
          Object.defineProperty(d._proxy, W, { get: function() {
            return v[W];
          } });
        };
        for (var E in wa)
          y(E);
        var C = function(W) {
          Object.defineProperty(d._proxy, W, { value: function() {
            return v[W].apply(v, arguments);
          } });
        };
        for (var j in xa)
          C(j);
        this._scopeFire("interactions:new", { interaction: this });
      }
      var a, s;
      return a = o, s = [{ key: "pointerMoveTolerance", get: function() {
        return 1;
      } }, { key: "pointerDown", value: function(l, d, p) {
        var b = this.updatePointer(l, d, p, !0), v = this.pointers[b];
        this._scopeFire("interactions:down", { pointer: l, event: d, eventTarget: p, pointerIndex: b, pointerInfo: v, type: "down", interaction: this });
      } }, { key: "start", value: function(l, d, p) {
        return !(this.interacting() || !this.pointerIsDown || this.pointers.length < (l.name === "gesture" ? 2 : 1) || !d.options[l.name].enabled) && ((0, Wt.copyAction)(this.prepared, l), this.interactable = d, this.element = p, this.rect = d.getRect(p), this.edges = this.prepared.edges ? (0, A.default)({}, this.prepared.edges) : { left: !0, right: !0, top: !0, bottom: !0 }, this._stopped = !1, this._interacting = this._doPhase({ interaction: this, event: this.downEvent, phase: "start" }) && !this._stopped, this._interacting);
      } }, { key: "pointerMove", value: function(l, d, p) {
        this.simulation || this.modification && this.modification.endResult || this.updatePointer(l, d, p, !1);
        var b, v, y = this.coords.cur.page.x === this.coords.prev.page.x && this.coords.cur.page.y === this.coords.prev.page.y && this.coords.cur.client.x === this.coords.prev.client.x && this.coords.cur.client.y === this.coords.prev.client.y;
        this.pointerIsDown && !this.pointerWasMoved && (b = this.coords.cur.client.x - this.coords.start.client.x, v = this.coords.cur.client.y - this.coords.start.client.y, this.pointerWasMoved = (0, ue.default)(b, v) > this.pointerMoveTolerance);
        var E = this.getPointerIndex(l), C = { pointer: l, pointerIndex: E, pointerInfo: this.pointers[E], event: d, type: "move", eventTarget: p, dx: b, dy: v, duplicate: y, interaction: this };
        y || ee.setCoordVelocity(this.coords.velocity, this.coords.delta), this._scopeFire("interactions:move", C), y || this.simulation || (this.interacting() && (C.type = null, this.move(C)), this.pointerWasMoved && ee.copyCoords(this.coords.prev, this.coords.cur));
      } }, { key: "move", value: function(l) {
        l && l.event || ee.setZeroCoords(this.coords.delta), (l = (0, A.default)({ pointer: this._latestPointer.pointer, event: this._latestPointer.event, eventTarget: this._latestPointer.eventTarget, interaction: this }, l || {})).phase = "move", this._doPhase(l);
      } }, { key: "pointerUp", value: function(l, d, p, b) {
        var v = this.getPointerIndex(l);
        v === -1 && (v = this.updatePointer(l, d, p, !1));
        var y = /cancel$/i.test(d.type) ? "cancel" : "up";
        this._scopeFire("interactions:".concat(y), { pointer: l, pointerIndex: v, pointerInfo: this.pointers[v], event: d, eventTarget: p, type: y, curEventTarget: b, interaction: this }), this.simulation || this.end(d), this.removePointer(l, d);
      } }, { key: "documentBlur", value: function(l) {
        this.end(l), this._scopeFire("interactions:blur", { event: l, type: "blur", interaction: this });
      } }, { key: "end", value: function(l) {
        var d;
        this._ending = !0, l = l || this._latestPointer.event, this.interacting() && (d = this._doPhase({ event: l, interaction: this, phase: "end" })), this._ending = !1, d === !0 && this.stop();
      } }, { key: "currentAction", value: function() {
        return this._interacting ? this.prepared.name : null;
      } }, { key: "interacting", value: function() {
        return this._interacting;
      } }, { key: "stop", value: function() {
        this._scopeFire("interactions:stop", { interaction: this }), this.interactable = this.element = null, this._interacting = !1, this._stopped = !0, this.prepared.name = this.prevEvent = null;
      } }, { key: "getPointerIndex", value: function(l) {
        var d = ee.getPointerId(l);
        return this.pointerType === "mouse" || this.pointerType === "pen" ? this.pointers.length - 1 : je.findIndex(this.pointers, function(p) {
          return p.id === d;
        });
      } }, { key: "getPointerInfo", value: function(l) {
        return this.pointers[this.getPointerIndex(l)];
      } }, { key: "updatePointer", value: function(l, d, p, b) {
        var v = ee.getPointerId(l), y = this.getPointerIndex(l), E = this.pointers[y];
        return b = b !== !1 && (b || /(down|start)$/i.test(d.type)), E ? E.pointer = l : (E = new _o.PointerInfo(v, l, d, null, null), y = this.pointers.length, this.pointers.push(E)), ee.setCoords(this.coords.cur, this.pointers.map(function(C) {
          return C.pointer;
        }), this._now()), ee.setCoordDeltas(this.coords.delta, this.coords.prev, this.coords.cur), b && (this.pointerIsDown = !0, E.downTime = this.coords.cur.timeStamp, E.downTarget = p, ee.pointerExtend(this.downPointer, l), this.interacting() || (ee.copyCoords(this.coords.start, this.coords.cur), ee.copyCoords(this.coords.prev, this.coords.cur), this.downEvent = d, this.pointerWasMoved = !1)), this._updateLatestPointer(l, d, p), this._scopeFire("interactions:update-pointer", { pointer: l, event: d, eventTarget: p, down: b, pointerInfo: E, pointerIndex: y, interaction: this }), y;
      } }, { key: "removePointer", value: function(l, d) {
        var p = this.getPointerIndex(l);
        if (p !== -1) {
          var b = this.pointers[p];
          this._scopeFire("interactions:remove-pointer", { pointer: l, event: d, eventTarget: null, pointerIndex: p, pointerInfo: b, interaction: this }), this.pointers.splice(p, 1), this.pointerIsDown = !1;
        }
      } }, { key: "_updateLatestPointer", value: function(l, d, p) {
        this._latestPointer.pointer = l, this._latestPointer.event = d, this._latestPointer.eventTarget = p;
      } }, { key: "destroy", value: function() {
        this._latestPointer.pointer = null, this._latestPointer.event = null, this._latestPointer.eventTarget = null;
      } }, { key: "_createPreparedEvent", value: function(l, d, p, b) {
        return new xo.InteractEvent(this, l, this.prepared.name, d, this.element, p, b);
      } }, { key: "_fireEvent", value: function(l) {
        var d;
        (d = this.interactable) == null || d.fire(l), (!this.prevEvent || l.timeStamp >= this.prevEvent.timeStamp) && (this.prevEvent = l);
      } }, { key: "_doPhase", value: function(l) {
        var d = l.event, p = l.phase, b = l.preEnd, v = l.type, y = this.rect;
        if (y && p === "move" && (G.addEdges(this.edges, y, this.coords.delta[this.interactable.options.deltaSource]), y.width = y.right - y.left, y.height = y.bottom - y.top), this._scopeFire("interactions:before-action-".concat(p), l) === !1)
          return !1;
        var E = l.iEvent = this._createPreparedEvent(d, p, b, v);
        return this._scopeFire("interactions:action-".concat(p), l), p === "start" && (this.prevEvent = E), this._fireEvent(E), this._scopeFire("interactions:after-action-".concat(p), l), !0;
      } }, { key: "_now", value: function() {
        return Date.now();
      } }], s && Ih(a.prototype, s), Object.defineProperty(a, "prototype", { writable: !1 }), o;
    }();
    Bt.Interaction = Xl;
    var $h = Xl;
    Bt.default = $h;
    var Fn = {};
    function Gl(o) {
      o.pointerIsDown && (Di(o.coords.cur, o.offset.total), o.offset.pending.x = 0, o.offset.pending.y = 0);
    }
    function Zl(o) {
      Ii(o.interaction);
    }
    function Ii(o) {
      if (!function(s) {
        return !(!s.offset.pending.x && !s.offset.pending.y);
      }(o))
        return !1;
      var a = o.offset.pending;
      return Di(o.coords.cur, a), Di(o.coords.delta, a), G.addEdges(o.edges, o.rect, a), a.x = 0, a.y = 0, !0;
    }
    function zh(o) {
      var a = o.x, s = o.y;
      this.offset.pending.x += a, this.offset.pending.y += s, this.offset.total.x += a, this.offset.total.y += s;
    }
    function Di(o, a) {
      var s = o.page, l = o.client, d = a.x, p = a.y;
      s.x += d, s.y += p, l.x += d, l.y += p;
    }
    Object.defineProperty(Fn, "__esModule", { value: !0 }), Fn.addTotal = Gl, Fn.applyPending = Ii, Fn.default = void 0, Bt._ProxyMethods.offsetBy = "";
    var Nh = { id: "offset", before: ["modifiers", "pointer-events", "actions", "inertia"], install: function(o) {
      o.Interaction.prototype.offsetBy = zh;
    }, listeners: { "interactions:new": function(o) {
      o.interaction.offset = { total: { x: 0, y: 0 }, pending: { x: 0, y: 0 } };
    }, "interactions:update-pointer": function(o) {
      return Gl(o.interaction);
    }, "interactions:before-action-start": Zl, "interactions:before-action-move": Zl, "interactions:before-action-end": function(o) {
      var a = o.interaction;
      if (Ii(a))
        return a.move({ offset: !0 }), a.end(), !1;
    }, "interactions:stop": function(o) {
      var a = o.interaction;
      a.offset.total.x = 0, a.offset.total.y = 0, a.offset.pending.x = 0, a.offset.pending.y = 0;
    } } }, Rh = Nh;
    Fn.default = Rh;
    var sr = {};
    function Lh(o, a) {
      for (var s = 0; s < a.length; s++) {
        var l = a[s];
        l.enumerable = l.enumerable || !1, l.configurable = !0, "value" in l && (l.writable = !0), Object.defineProperty(o, l.key, l);
      }
    }
    function kt(o, a, s) {
      return a in o ? Object.defineProperty(o, a, { value: s, enumerable: !0, configurable: !0, writable: !0 }) : o[a] = s, o;
    }
    Object.defineProperty(sr, "__esModule", { value: !0 }), sr.default = sr.InertiaState = void 0;
    var Ql = function() {
      function o(l) {
        (function(d, p) {
          if (!(d instanceof p))
            throw new TypeError("Cannot call a class as a function");
        })(this, o), kt(this, "active", !1), kt(this, "isModified", !1), kt(this, "smoothEnd", !1), kt(this, "allowResume", !1), kt(this, "modification", void 0), kt(this, "modifierCount", 0), kt(this, "modifierArg", void 0), kt(this, "startCoords", void 0), kt(this, "t0", 0), kt(this, "v0", 0), kt(this, "te", 0), kt(this, "targetOffset", void 0), kt(this, "modifiedOffset", void 0), kt(this, "currentOffset", void 0), kt(this, "lambda_v0", 0), kt(this, "one_ve_v0", 0), kt(this, "timeout", void 0), kt(this, "interaction", void 0), this.interaction = l;
      }
      var a, s;
      return a = o, (s = [{ key: "start", value: function(l) {
        var d = this.interaction, p = _a(d);
        if (!p || !p.enabled)
          return !1;
        var b = d.coords.velocity.client, v = (0, ue.default)(b.x, b.y), y = this.modification || (this.modification = new ir.default(d));
        if (y.copyFrom(d.modification), this.t0 = d._now(), this.allowResume = p.allowResume, this.v0 = v, this.currentOffset = { x: 0, y: 0 }, this.startCoords = d.coords.cur.page, this.modifierArg = y.fillArg({ pageCoords: this.startCoords, preEnd: !0, phase: "inertiastart" }), this.t0 - d.coords.cur.timeStamp < 50 && v > p.minSpeed && v > p.endSpeed)
          this.startInertia();
        else {
          if (y.result = y.setAll(this.modifierArg), !y.result.changed)
            return !1;
          this.startSmoothEnd();
        }
        return d.modification.result.rect = null, d.offsetBy(this.targetOffset), d._doPhase({ interaction: d, event: l, phase: "inertiastart" }), d.offsetBy({ x: -this.targetOffset.x, y: -this.targetOffset.y }), d.modification.result.rect = null, this.active = !0, d.simulation = this, !0;
      } }, { key: "startInertia", value: function() {
        var l = this, d = this.interaction.coords.velocity.client, p = _a(this.interaction), b = p.resistance, v = -Math.log(p.endSpeed / this.v0) / b;
        this.targetOffset = { x: (d.x - v) / b, y: (d.y - v) / b }, this.te = v, this.lambda_v0 = b / this.v0, this.one_ve_v0 = 1 - p.endSpeed / this.v0;
        var y = this.modification, E = this.modifierArg;
        E.pageCoords = { x: this.startCoords.x + this.targetOffset.x, y: this.startCoords.y + this.targetOffset.y }, y.result = y.setAll(E), y.result.changed && (this.isModified = !0, this.modifiedOffset = { x: this.targetOffset.x + y.result.delta.x, y: this.targetOffset.y + y.result.delta.y }), this.onNextFrame(function() {
          return l.inertiaTick();
        });
      } }, { key: "startSmoothEnd", value: function() {
        var l = this;
        this.smoothEnd = !0, this.isModified = !0, this.targetOffset = { x: this.modification.result.delta.x, y: this.modification.result.delta.y }, this.onNextFrame(function() {
          return l.smoothEndTick();
        });
      } }, { key: "onNextFrame", value: function(l) {
        var d = this;
        this.timeout = tn.default.request(function() {
          d.active && l();
        });
      } }, { key: "inertiaTick", value: function() {
        var l, d, p, b, v, y = this, E = this.interaction, C = _a(E).resistance, j = (E._now() - this.t0) / 1e3;
        if (j < this.te) {
          var W, Z = 1 - (Math.exp(-C * j) - this.lambda_v0) / this.one_ve_v0;
          this.isModified ? (l = this.targetOffset.x, d = this.targetOffset.y, p = this.modifiedOffset.x, b = this.modifiedOffset.y, W = { x: Jl(v = Z, 0, l, p), y: Jl(v, 0, d, b) }) : W = { x: this.targetOffset.x * Z, y: this.targetOffset.y * Z };
          var R = { x: W.x - this.currentOffset.x, y: W.y - this.currentOffset.y };
          this.currentOffset.x += R.x, this.currentOffset.y += R.y, E.offsetBy(R), E.move(), this.onNextFrame(function() {
            return y.inertiaTick();
          });
        } else
          E.offsetBy({ x: this.modifiedOffset.x - this.currentOffset.x, y: this.modifiedOffset.y - this.currentOffset.y }), this.end();
      } }, { key: "smoothEndTick", value: function() {
        var l = this, d = this.interaction, p = d._now() - this.t0, b = _a(d).smoothEndDuration;
        if (p < b) {
          var v = { x: eu(p, 0, this.targetOffset.x, b), y: eu(p, 0, this.targetOffset.y, b) }, y = { x: v.x - this.currentOffset.x, y: v.y - this.currentOffset.y };
          this.currentOffset.x += y.x, this.currentOffset.y += y.y, d.offsetBy(y), d.move({ skipModifiers: this.modifierCount }), this.onNextFrame(function() {
            return l.smoothEndTick();
          });
        } else
          d.offsetBy({ x: this.targetOffset.x - this.currentOffset.x, y: this.targetOffset.y - this.currentOffset.y }), this.end();
      } }, { key: "resume", value: function(l) {
        var d = l.pointer, p = l.event, b = l.eventTarget, v = this.interaction;
        v.offsetBy({ x: -this.currentOffset.x, y: -this.currentOffset.y }), v.updatePointer(d, p, b, !0), v._doPhase({ interaction: v, event: p, phase: "resume" }), (0, ee.copyCoords)(v.coords.prev, v.coords.cur), this.stop();
      } }, { key: "end", value: function() {
        this.interaction.move(), this.interaction.end(), this.stop();
      } }, { key: "stop", value: function() {
        this.active = this.smoothEnd = !1, this.interaction.simulation = null, tn.default.cancel(this.timeout);
      } }]) && Lh(a.prototype, s), Object.defineProperty(a, "prototype", { writable: !1 }), o;
    }();
    function _a(o) {
      var a = o.interactable, s = o.prepared;
      return a && a.options && s.name && a.options[s.name].inertia;
    }
    sr.InertiaState = Ql;
    var Bh = { id: "inertia", before: ["modifiers", "actions"], install: function(o) {
      var a = o.defaults;
      o.usePlugin(Fn.default), o.usePlugin(Ct.default), o.actions.phases.inertiastart = !0, o.actions.phases.resume = !0, a.perAction.inertia = { enabled: !1, resistance: 10, minSpeed: 100, endSpeed: 10, allowResume: !0, smoothEndDuration: 300 };
    }, listeners: { "interactions:new": function(o) {
      var a = o.interaction;
      a.inertia = new Ql(a);
    }, "interactions:before-action-end": function(o) {
      var a = o.interaction, s = o.event;
      return (!a._interacting || a.simulation || !a.inertia.start(s)) && null;
    }, "interactions:down": function(o) {
      var a = o.interaction, s = o.eventTarget, l = a.inertia;
      if (l.active)
        for (var d = s; u.default.element(d); ) {
          if (d === a.element) {
            l.resume(o);
            break;
          }
          d = F.parentNode(d);
        }
    }, "interactions:stop": function(o) {
      var a = o.interaction.inertia;
      a.active && a.stop();
    }, "interactions:before-action-resume": function(o) {
      var a = o.interaction.modification;
      a.stop(o), a.start(o, o.interaction.coords.cur.page), a.applyToInteraction(o);
    }, "interactions:before-action-inertiastart": function(o) {
      return o.interaction.modification.setAndApply(o);
    }, "interactions:action-resume": Ct.addEventModifiers, "interactions:action-inertiastart": Ct.addEventModifiers, "interactions:after-action-inertiastart": function(o) {
      return o.interaction.modification.restoreInteractionCoords(o);
    }, "interactions:after-action-resume": function(o) {
      return o.interaction.modification.restoreInteractionCoords(o);
    } } };
    function Jl(o, a, s, l) {
      var d = 1 - o;
      return d * d * a + 2 * d * o * s + o * o * l;
    }
    function eu(o, a, s, l) {
      return -s * (o /= l) * (o - 2) + a;
    }
    var Fh = Bh;
    sr.default = Fh;
    var ko = {};
    function Hh(o, a) {
      for (var s = 0; s < a.length; s++) {
        var l = a[s];
        l.enumerable = l.enumerable || !1, l.configurable = !0, "value" in l && (l.writable = !0), Object.defineProperty(o, l.key, l);
      }
    }
    function Eo(o, a, s) {
      return a in o ? Object.defineProperty(o, a, { value: s, enumerable: !0, configurable: !0, writable: !0 }) : o[a] = s, o;
    }
    function tu(o, a) {
      for (var s = 0; s < a.length; s++) {
        var l = a[s];
        if (o.immediatePropagationStopped)
          break;
        l(o);
      }
    }
    Object.defineProperty(ko, "__esModule", { value: !0 }), ko.Eventable = void 0;
    var Vh = function() {
      function o(l) {
        (function(d, p) {
          if (!(d instanceof p))
            throw new TypeError("Cannot call a class as a function");
        })(this, o), Eo(this, "options", void 0), Eo(this, "types", {}), Eo(this, "propagationStopped", !1), Eo(this, "immediatePropagationStopped", !1), Eo(this, "global", void 0), this.options = (0, A.default)({}, l || {});
      }
      var a, s;
      return a = o, (s = [{ key: "fire", value: function(l) {
        var d, p = this.global;
        (d = this.types[l.type]) && tu(l, d), !l.propagationStopped && p && (d = p[l.type]) && tu(l, d);
      } }, { key: "on", value: function(l, d) {
        var p = (0, X.default)(l, d);
        for (l in p)
          this.types[l] = je.merge(this.types[l] || [], p[l]);
      } }, { key: "off", value: function(l, d) {
        var p = (0, X.default)(l, d);
        for (l in p) {
          var b = this.types[l];
          if (b && b.length)
            for (var v = 0; v < p[l].length; v++) {
              var y = p[l][v], E = b.indexOf(y);
              E !== -1 && b.splice(E, 1);
            }
        }
      } }, { key: "getRect", value: function(l) {
        return null;
      } }]) && Hh(a.prototype, s), Object.defineProperty(a, "prototype", { writable: !1 }), o;
    }();
    ko.Eventable = Vh;
    var Oo = {};
    Object.defineProperty(Oo, "__esModule", { value: !0 }), Oo.default = function(o, a) {
      if (a.phaselessTypes[o])
        return !0;
      for (var s in a.map)
        if (o.indexOf(s) === 0 && o.substr(s.length) in a.phases)
          return !0;
      return !1;
    };
    var $i = {};
    Object.defineProperty($i, "__esModule", { value: !0 }), $i.createInteractStatic = function(o) {
      var a = function s(l, d) {
        var p = o.interactables.get(l, d);
        return p || ((p = o.interactables.new(l, d)).events.global = s.globalEvents), p;
      };
      return a.getPointerAverage = ee.pointerAverage, a.getTouchBBox = ee.touchBBox, a.getTouchDistance = ee.touchDistance, a.getTouchAngle = ee.touchAngle, a.getElementRect = F.getElementRect, a.getElementClientRect = F.getElementClientRect, a.matchesSelector = F.matchesSelector, a.closest = F.closest, a.globalEvents = {}, a.version = "1.10.19", a.scope = o, a.use = function(s, l) {
        return this.scope.usePlugin(s, l), this;
      }, a.isSet = function(s, l) {
        return !!this.scope.interactables.get(s, l && l.context);
      }, a.on = (0, Wt.warnOnce)(function(s, l, d) {
        if (u.default.string(s) && s.search(" ") !== -1 && (s = s.trim().split(/ +/)), u.default.array(s)) {
          for (var p = 0; p < s.length; p++) {
            var b = s[p];
            this.on(b, l, d);
          }
          return this;
        }
        if (u.default.object(s)) {
          for (var v in s)
            this.on(v, s[v], l);
          return this;
        }
        return (0, Oo.default)(s, this.scope.actions) ? this.globalEvents[s] ? this.globalEvents[s].push(l) : this.globalEvents[s] = [l] : this.scope.events.add(this.scope.document, s, l, { options: d }), this;
      }, "The interact.on() method is being deprecated"), a.off = (0, Wt.warnOnce)(function(s, l, d) {
        if (u.default.string(s) && s.search(" ") !== -1 && (s = s.trim().split(/ +/)), u.default.array(s)) {
          for (var p = 0; p < s.length; p++) {
            var b = s[p];
            this.off(b, l, d);
          }
          return this;
        }
        if (u.default.object(s)) {
          for (var v in s)
            this.off(v, s[v], l);
          return this;
        }
        var y;
        return (0, Oo.default)(s, this.scope.actions) ? s in this.globalEvents && (y = this.globalEvents[s].indexOf(l)) !== -1 && this.globalEvents[s].splice(y, 1) : this.scope.events.remove(this.scope.document, s, l, d), this;
      }, "The interact.off() method is being deprecated"), a.debug = function() {
        return this.scope;
      }, a.supportsTouch = function() {
        return q.default.supportsTouch;
      }, a.supportsPointerEvent = function() {
        return q.default.supportsPointerEvent;
      }, a.stop = function() {
        for (var s = 0; s < this.scope.interactions.list.length; s++)
          this.scope.interactions.list[s].stop();
        return this;
      }, a.pointerMoveTolerance = function(s) {
        return u.default.number(s) ? (this.scope.interactions.pointerMoveTolerance = s, this) : this.scope.interactions.pointerMoveTolerance;
      }, a.addDocument = function(s, l) {
        this.scope.addDocument(s, l);
      }, a.removeDocument = function(s) {
        this.scope.removeDocument(s);
      }, a;
    };
    var Sa = {};
    function Wh(o, a) {
      for (var s = 0; s < a.length; s++) {
        var l = a[s];
        l.enumerable = l.enumerable || !1, l.configurable = !0, "value" in l && (l.writable = !0), Object.defineProperty(o, l.key, l);
      }
    }
    function Tn(o, a, s) {
      return a in o ? Object.defineProperty(o, a, { value: s, enumerable: !0, configurable: !0, writable: !0 }) : o[a] = s, o;
    }
    Object.defineProperty(Sa, "__esModule", { value: !0 }), Sa.Interactable = void 0;
    var Kh = function() {
      function o(l, d, p, b) {
        (function(v, y) {
          if (!(v instanceof y))
            throw new TypeError("Cannot call a class as a function");
        })(this, o), Tn(this, "options", void 0), Tn(this, "_actions", void 0), Tn(this, "target", void 0), Tn(this, "events", new ko.Eventable()), Tn(this, "_context", void 0), Tn(this, "_win", void 0), Tn(this, "_doc", void 0), Tn(this, "_scopeEvents", void 0), Tn(this, "_rectChecker", void 0), this._actions = d.actions, this.target = l, this._context = d.context || p, this._win = (0, r.getWindow)((0, F.trySelector)(l) ? this._context : l), this._doc = this._win.document, this._scopeEvents = b, this.set(d);
      }
      var a, s;
      return a = o, (s = [{ key: "_defaults", get: function() {
        return { base: {}, perAction: {}, actions: {} };
      } }, { key: "setOnEvents", value: function(l, d) {
        return u.default.func(d.onstart) && this.on("".concat(l, "start"), d.onstart), u.default.func(d.onmove) && this.on("".concat(l, "move"), d.onmove), u.default.func(d.onend) && this.on("".concat(l, "end"), d.onend), u.default.func(d.oninertiastart) && this.on("".concat(l, "inertiastart"), d.oninertiastart), this;
      } }, { key: "updatePerActionListeners", value: function(l, d, p) {
        (u.default.array(d) || u.default.object(d)) && this.off(l, d), (u.default.array(p) || u.default.object(p)) && this.on(l, p);
      } }, { key: "setPerAction", value: function(l, d) {
        var p = this._defaults;
        for (var b in d) {
          var v = b, y = this.options[l], E = d[v];
          v === "listeners" && this.updatePerActionListeners(l, y.listeners, E), u.default.array(E) ? y[v] = je.from(E) : u.default.plainObject(E) ? (y[v] = (0, A.default)(y[v] || {}, (0, ar.default)(E)), u.default.object(p.perAction[v]) && "enabled" in p.perAction[v] && (y[v].enabled = E.enabled !== !1)) : u.default.bool(E) && u.default.object(p.perAction[v]) ? y[v].enabled = E : y[v] = E;
        }
      } }, { key: "getRect", value: function(l) {
        return l = l || (u.default.element(this.target) ? this.target : null), u.default.string(this.target) && (l = l || this._context.querySelector(this.target)), (0, F.getElementRect)(l);
      } }, { key: "rectChecker", value: function(l) {
        var d = this;
        return u.default.func(l) ? (this._rectChecker = l, this.getRect = function(p) {
          var b = (0, A.default)({}, d._rectChecker(p));
          return "width" in b || (b.width = b.right - b.left, b.height = b.bottom - b.top), b;
        }, this) : l === null ? (delete this.getRect, delete this._rectChecker, this) : this.getRect;
      } }, { key: "_backCompatOption", value: function(l, d) {
        if ((0, F.trySelector)(d) || u.default.object(d)) {
          for (var p in this.options[l] = d, this._actions.map)
            this.options[p][l] = d;
          return this;
        }
        return this.options[l];
      } }, { key: "origin", value: function(l) {
        return this._backCompatOption("origin", l);
      } }, { key: "deltaSource", value: function(l) {
        return l === "page" || l === "client" ? (this.options.deltaSource = l, this) : this.options.deltaSource;
      } }, { key: "context", value: function() {
        return this._context;
      } }, { key: "inContext", value: function(l) {
        return this._context === l.ownerDocument || (0, F.nodeContains)(this._context, l);
      } }, { key: "testIgnoreAllow", value: function(l, d, p) {
        return !this.testIgnore(l.ignoreFrom, d, p) && this.testAllow(l.allowFrom, d, p);
      } }, { key: "testAllow", value: function(l, d, p) {
        return !l || !!u.default.element(p) && (u.default.string(l) ? (0, F.matchesUpTo)(p, l, d) : !!u.default.element(l) && (0, F.nodeContains)(l, p));
      } }, { key: "testIgnore", value: function(l, d, p) {
        return !(!l || !u.default.element(p)) && (u.default.string(l) ? (0, F.matchesUpTo)(p, l, d) : !!u.default.element(l) && (0, F.nodeContains)(l, p));
      } }, { key: "fire", value: function(l) {
        return this.events.fire(l), this;
      } }, { key: "_onOff", value: function(l, d, p, b) {
        u.default.object(d) && !u.default.array(d) && (b = p, p = null);
        var v = l === "on" ? "add" : "remove", y = (0, X.default)(d, p);
        for (var E in y) {
          E === "wheel" && (E = q.default.wheelEvent);
          for (var C = 0; C < y[E].length; C++) {
            var j = y[E][C];
            (0, Oo.default)(E, this._actions) ? this.events[l](E, j) : u.default.string(this.target) ? this._scopeEvents["".concat(v, "Delegate")](this.target, this._context, E, j, b) : this._scopeEvents[v](this.target, E, j, b);
          }
        }
        return this;
      } }, { key: "on", value: function(l, d, p) {
        return this._onOff("on", l, d, p);
      } }, { key: "off", value: function(l, d, p) {
        return this._onOff("off", l, d, p);
      } }, { key: "set", value: function(l) {
        var d = this._defaults;
        for (var p in u.default.object(l) || (l = {}), this.options = (0, ar.default)(d.base), this._actions.methodDict) {
          var b = p, v = this._actions.methodDict[b];
          this.options[b] = {}, this.setPerAction(b, (0, A.default)((0, A.default)({}, d.perAction), d.actions[b])), this[v](l[b]);
        }
        for (var y in l)
          u.default.func(this[y]) && this[y](l[y]);
        return this;
      } }, { key: "unset", value: function() {
        if (u.default.string(this.target))
          for (var l in this._scopeEvents.delegatedEvents)
            for (var d = this._scopeEvents.delegatedEvents[l], p = d.length - 1; p >= 0; p--) {
              var b = d[p], v = b.selector, y = b.context, E = b.listeners;
              v === this.target && y === this._context && d.splice(p, 1);
              for (var C = E.length - 1; C >= 0; C--)
                this._scopeEvents.removeDelegate(this.target, this._context, l, E[C][0], E[C][1]);
            }
        else
          this._scopeEvents.remove(this.target, "all");
      } }]) && Wh(a.prototype, s), Object.defineProperty(a, "prototype", { writable: !1 }), o;
    }();
    Sa.Interactable = Kh;
    var ka = {};
    function qh(o, a) {
      for (var s = 0; s < a.length; s++) {
        var l = a[s];
        l.enumerable = l.enumerable || !1, l.configurable = !0, "value" in l && (l.writable = !0), Object.defineProperty(o, l.key, l);
      }
    }
    function zi(o, a, s) {
      return a in o ? Object.defineProperty(o, a, { value: s, enumerable: !0, configurable: !0, writable: !0 }) : o[a] = s, o;
    }
    Object.defineProperty(ka, "__esModule", { value: !0 }), ka.InteractableSet = void 0;
    var Uh = function() {
      function o(l) {
        var d = this;
        (function(p, b) {
          if (!(p instanceof b))
            throw new TypeError("Cannot call a class as a function");
        })(this, o), zi(this, "list", []), zi(this, "selectorMap", {}), zi(this, "scope", void 0), this.scope = l, l.addListeners({ "interactable:unset": function(p) {
          var b = p.interactable, v = b.target, y = b._context, E = u.default.string(v) ? d.selectorMap[v] : v[d.scope.id], C = je.findIndex(E, function(j) {
            return j.context === y;
          });
          E[C] && (E[C].context = null, E[C].interactable = null), E.splice(C, 1);
        } });
      }
      var a, s;
      return a = o, (s = [{ key: "new", value: function(l, d) {
        d = (0, A.default)(d || {}, { actions: this.scope.actions });
        var p = new this.scope.Interactable(l, d, this.scope.document, this.scope.events), b = { context: p._context, interactable: p };
        return this.scope.addDocument(p._doc), this.list.push(p), u.default.string(l) ? (this.selectorMap[l] || (this.selectorMap[l] = []), this.selectorMap[l].push(b)) : (p.target[this.scope.id] || Object.defineProperty(l, this.scope.id, { value: [], configurable: !0 }), l[this.scope.id].push(b)), this.scope.fire("interactable:new", { target: l, options: d, interactable: p, win: this.scope._win }), p;
      } }, { key: "get", value: function(l, d) {
        var p = d && d.context || this.scope.document, b = u.default.string(l), v = b ? this.selectorMap[l] : l[this.scope.id];
        if (!v)
          return null;
        var y = je.find(v, function(E) {
          return E.context === p && (b || E.interactable.inContext(l));
        });
        return y && y.interactable;
      } }, { key: "forEachMatch", value: function(l, d) {
        for (var p = 0; p < this.list.length; p++) {
          var b = this.list[p], v = void 0;
          if ((u.default.string(b.target) ? u.default.element(l) && F.matchesSelector(l, b.target) : l === b.target) && b.inContext(l) && (v = d(b)), v !== void 0)
            return v;
        }
      } }]) && qh(a.prototype, s), Object.defineProperty(a, "prototype", { writable: !1 }), o;
    }();
    ka.InteractableSet = Uh;
    var Ea = {};
    function Yh(o, a) {
      for (var s = 0; s < a.length; s++) {
        var l = a[s];
        l.enumerable = l.enumerable || !1, l.configurable = !0, "value" in l && (l.writable = !0), Object.defineProperty(o, l.key, l);
      }
    }
    function Ni(o, a, s) {
      return a in o ? Object.defineProperty(o, a, { value: s, enumerable: !0, configurable: !0, writable: !0 }) : o[a] = s, o;
    }
    function Ri(o, a) {
      return function(s) {
        if (Array.isArray(s))
          return s;
      }(o) || function(s, l) {
        var d = s == null ? null : typeof Symbol < "u" && s[Symbol.iterator] || s["@@iterator"];
        if (d != null) {
          var p, b, v = [], y = !0, E = !1;
          try {
            for (d = d.call(s); !(y = (p = d.next()).done) && (v.push(p.value), !l || v.length !== l); y = !0)
              ;
          } catch (C) {
            E = !0, b = C;
          } finally {
            try {
              y || d.return == null || d.return();
            } finally {
              if (E)
                throw b;
            }
          }
          return v;
        }
      }(o, a) || function(s, l) {
        if (s) {
          if (typeof s == "string")
            return nu(s, l);
          var d = Object.prototype.toString.call(s).slice(8, -1);
          return d === "Object" && s.constructor && (d = s.constructor.name), d === "Map" || d === "Set" ? Array.from(s) : d === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d) ? nu(s, l) : void 0;
        }
      }(o, a) || function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    function nu(o, a) {
      (a == null || a > o.length) && (a = o.length);
      for (var s = 0, l = Array(a); s < a; s++)
        l[s] = o[s];
      return l;
    }
    Object.defineProperty(Ea, "__esModule", { value: !0 }), Ea.default = void 0;
    var Xh = function() {
      function o(l) {
        (function(d, p) {
          if (!(d instanceof p))
            throw new TypeError("Cannot call a class as a function");
        })(this, o), Ni(this, "currentTarget", void 0), Ni(this, "originalEvent", void 0), Ni(this, "type", void 0), this.originalEvent = l, (0, ye.default)(this, l);
      }
      var a, s;
      return a = o, (s = [{ key: "preventOriginalDefault", value: function() {
        this.originalEvent.preventDefault();
      } }, { key: "stopPropagation", value: function() {
        this.originalEvent.stopPropagation();
      } }, { key: "stopImmediatePropagation", value: function() {
        this.originalEvent.stopImmediatePropagation();
      } }]) && Yh(a.prototype, s), Object.defineProperty(a, "prototype", { writable: !1 }), o;
    }();
    function Co(o) {
      if (!u.default.object(o))
        return { capture: !!o, passive: !1 };
      var a = (0, A.default)({}, o);
      return a.capture = !!o.capture, a.passive = !!o.passive, a;
    }
    var Gh = { id: "events", install: function(o) {
      var a, s = [], l = {}, d = [], p = { add: b, remove: v, addDelegate: function(C, j, W, Z, R) {
        var ie = Co(R);
        if (!l[W]) {
          l[W] = [];
          for (var ge = 0; ge < d.length; ge++) {
            var de = d[ge];
            b(de, W, y), b(de, W, E, !0);
          }
        }
        var we = l[W], Me = je.find(we, function(Be) {
          return Be.selector === C && Be.context === j;
        });
        Me || (Me = { selector: C, context: j, listeners: [] }, we.push(Me)), Me.listeners.push([Z, ie]);
      }, removeDelegate: function(C, j, W, Z, R) {
        var ie, ge = Co(R), de = l[W], we = !1;
        if (de)
          for (ie = de.length - 1; ie >= 0; ie--) {
            var Me = de[ie];
            if (Me.selector === C && Me.context === j) {
              for (var Be = Me.listeners, Qe = Be.length - 1; Qe >= 0; Qe--) {
                var at = Ri(Be[Qe], 2), We = at[0], ot = at[1], Xt = ot.capture, Pn = ot.passive;
                if (We === Z && Xt === ge.capture && Pn === ge.passive) {
                  Be.splice(Qe, 1), Be.length || (de.splice(ie, 1), v(j, W, y), v(j, W, E, !0)), we = !0;
                  break;
                }
              }
              if (we)
                break;
            }
          }
      }, delegateListener: y, delegateUseCapture: E, delegatedEvents: l, documents: d, targets: s, supportsOptions: !1, supportsPassive: !1 };
      function b(C, j, W, Z) {
        var R = Co(Z), ie = je.find(s, function(ge) {
          return ge.eventTarget === C;
        });
        ie || (ie = { eventTarget: C, events: {} }, s.push(ie)), ie.events[j] || (ie.events[j] = []), C.addEventListener && !je.contains(ie.events[j], W) && (C.addEventListener(j, W, p.supportsOptions ? R : R.capture), ie.events[j].push(W));
      }
      function v(C, j, W, Z) {
        var R = Co(Z), ie = je.findIndex(s, function(Qe) {
          return Qe.eventTarget === C;
        }), ge = s[ie];
        if (ge && ge.events)
          if (j !== "all") {
            var de = !1, we = ge.events[j];
            if (we) {
              if (W === "all") {
                for (var Me = we.length - 1; Me >= 0; Me--)
                  v(C, j, we[Me], R);
                return;
              }
              for (var Be = 0; Be < we.length; Be++)
                if (we[Be] === W) {
                  C.removeEventListener(j, W, p.supportsOptions ? R : R.capture), we.splice(Be, 1), we.length === 0 && (delete ge.events[j], de = !0);
                  break;
                }
            }
            de && !Object.keys(ge.events).length && s.splice(ie, 1);
          } else
            for (j in ge.events)
              ge.events.hasOwnProperty(j) && v(C, j, "all");
      }
      function y(C, j) {
        for (var W = Co(j), Z = new Xh(C), R = l[C.type], ie = Ri(ee.getEventTargets(C), 1)[0], ge = ie; u.default.element(ge); ) {
          for (var de = 0; de < R.length; de++) {
            var we = R[de], Me = we.selector, Be = we.context;
            if (F.matchesSelector(ge, Me) && F.nodeContains(Be, ie) && F.nodeContains(Be, ge)) {
              var Qe = we.listeners;
              Z.currentTarget = ge;
              for (var at = 0; at < Qe.length; at++) {
                var We = Ri(Qe[at], 2), ot = We[0], Xt = We[1], Pn = Xt.capture, ns = Xt.passive;
                Pn === W.capture && ns === W.passive && ot(Z);
              }
            }
          }
          ge = F.parentNode(ge);
        }
      }
      function E(C) {
        return y(C, !0);
      }
      return (a = o.document) == null || a.createElement("div").addEventListener("test", null, { get capture() {
        return p.supportsOptions = !0;
      }, get passive() {
        return p.supportsPassive = !0;
      } }), o.events = p, p;
    } };
    Ea.default = Gh;
    var Oa = {};
    Object.defineProperty(Oa, "__esModule", { value: !0 }), Oa.default = void 0;
    var Ca = { methodOrder: ["simulationResume", "mouseOrPen", "hasPointer", "idle"], search: function(o) {
      for (var a = 0; a < Ca.methodOrder.length; a++) {
        var s;
        s = Ca.methodOrder[a];
        var l = Ca[s](o);
        if (l)
          return l;
      }
      return null;
    }, simulationResume: function(o) {
      var a = o.pointerType, s = o.eventType, l = o.eventTarget, d = o.scope;
      if (!/down|start/i.test(s))
        return null;
      for (var p = 0; p < d.interactions.list.length; p++) {
        var b = d.interactions.list[p], v = l;
        if (b.simulation && b.simulation.allowResume && b.pointerType === a)
          for (; v; ) {
            if (v === b.element)
              return b;
            v = F.parentNode(v);
          }
      }
      return null;
    }, mouseOrPen: function(o) {
      var a, s = o.pointerId, l = o.pointerType, d = o.eventType, p = o.scope;
      if (l !== "mouse" && l !== "pen")
        return null;
      for (var b = 0; b < p.interactions.list.length; b++) {
        var v = p.interactions.list[b];
        if (v.pointerType === l) {
          if (v.simulation && !ru(v, s))
            continue;
          if (v.interacting())
            return v;
          a || (a = v);
        }
      }
      if (a)
        return a;
      for (var y = 0; y < p.interactions.list.length; y++) {
        var E = p.interactions.list[y];
        if (!(E.pointerType !== l || /down/i.test(d) && E.simulation))
          return E;
      }
      return null;
    }, hasPointer: function(o) {
      for (var a = o.pointerId, s = o.scope, l = 0; l < s.interactions.list.length; l++) {
        var d = s.interactions.list[l];
        if (ru(d, a))
          return d;
      }
      return null;
    }, idle: function(o) {
      for (var a = o.pointerType, s = o.scope, l = 0; l < s.interactions.list.length; l++) {
        var d = s.interactions.list[l];
        if (d.pointers.length === 1) {
          var p = d.interactable;
          if (p && (!p.options.gesture || !p.options.gesture.enabled))
            continue;
        } else if (d.pointers.length >= 2)
          continue;
        if (!d.interacting() && a === d.pointerType)
          return d;
      }
      return null;
    } };
    function ru(o, a) {
      return o.pointers.some(function(s) {
        return s.id === a;
      });
    }
    var Zh = Ca;
    Oa.default = Zh;
    var Ta = {};
    function Li(o) {
      return Li = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(a) {
        return typeof a;
      } : function(a) {
        return a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
      }, Li(o);
    }
    function ou(o, a) {
      return function(s) {
        if (Array.isArray(s))
          return s;
      }(o) || function(s, l) {
        var d = s == null ? null : typeof Symbol < "u" && s[Symbol.iterator] || s["@@iterator"];
        if (d != null) {
          var p, b, v = [], y = !0, E = !1;
          try {
            for (d = d.call(s); !(y = (p = d.next()).done) && (v.push(p.value), !l || v.length !== l); y = !0)
              ;
          } catch (C) {
            E = !0, b = C;
          } finally {
            try {
              y || d.return == null || d.return();
            } finally {
              if (E)
                throw b;
            }
          }
          return v;
        }
      }(o, a) || function(s, l) {
        if (s) {
          if (typeof s == "string")
            return au(s, l);
          var d = Object.prototype.toString.call(s).slice(8, -1);
          return d === "Object" && s.constructor && (d = s.constructor.name), d === "Map" || d === "Set" ? Array.from(s) : d === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d) ? au(s, l) : void 0;
        }
      }(o, a) || function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    function au(o, a) {
      (a == null || a > o.length) && (a = o.length);
      for (var s = 0, l = Array(a); s < a; s++)
        l[s] = o[s];
      return l;
    }
    function Qh(o, a) {
      if (!(o instanceof a))
        throw new TypeError("Cannot call a class as a function");
    }
    function Jh(o, a) {
      for (var s = 0; s < a.length; s++) {
        var l = a[s];
        l.enumerable = l.enumerable || !1, l.configurable = !0, "value" in l && (l.writable = !0), Object.defineProperty(o, l.key, l);
      }
    }
    function Bi(o, a) {
      return Bi = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(s, l) {
        return s.__proto__ = l, s;
      }, Bi(o, a);
    }
    function ev(o, a) {
      if (a && (Li(a) === "object" || typeof a == "function"))
        return a;
      if (a !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
      return function(s) {
        if (s === void 0)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return s;
      }(o);
    }
    function Ma(o) {
      return Ma = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(a) {
        return a.__proto__ || Object.getPrototypeOf(a);
      }, Ma(o);
    }
    Object.defineProperty(Ta, "__esModule", { value: !0 }), Ta.default = void 0;
    var Fi = ["pointerDown", "pointerMove", "pointerUp", "updatePointer", "removePointer", "windowBlur"];
    function iu(o, a) {
      return function(s) {
        var l = a.interactions.list, d = ee.getPointerType(s), p = ou(ee.getEventTargets(s), 2), b = p[0], v = p[1], y = [];
        if (/^touch/.test(s.type)) {
          a.prevTouchTime = a.now();
          for (var E = 0; E < s.changedTouches.length; E++) {
            var C = s.changedTouches[E], j = { pointer: C, pointerId: ee.getPointerId(C), pointerType: d, eventType: s.type, eventTarget: b, curEventTarget: v, scope: a }, W = su(j);
            y.push([j.pointer, j.eventTarget, j.curEventTarget, W]);
          }
        } else {
          var Z = !1;
          if (!q.default.supportsPointerEvent && /mouse/.test(s.type)) {
            for (var R = 0; R < l.length && !Z; R++)
              Z = l[R].pointerType !== "mouse" && l[R].pointerIsDown;
            Z = Z || a.now() - a.prevTouchTime < 500 || s.timeStamp === 0;
          }
          if (!Z) {
            var ie = { pointer: s, pointerId: ee.getPointerId(s), pointerType: d, eventType: s.type, curEventTarget: v, eventTarget: b, scope: a }, ge = su(ie);
            y.push([ie.pointer, ie.eventTarget, ie.curEventTarget, ge]);
          }
        }
        for (var de = 0; de < y.length; de++) {
          var we = ou(y[de], 4), Me = we[0], Be = we[1], Qe = we[2];
          we[3][o](Me, s, Be, Qe);
        }
      };
    }
    function su(o) {
      var a = o.pointerType, s = o.scope, l = { interaction: Oa.default.search(o), searchDetails: o };
      return s.fire("interactions:find", l), l.interaction || s.interactions.new({ pointerType: a });
    }
    function Hi(o, a) {
      var s = o.doc, l = o.scope, d = o.options, p = l.interactions.docEvents, b = l.events, v = b[a];
      for (var y in l.browser.isIOS && !d.events && (d.events = { passive: !1 }), b.delegatedEvents)
        v(s, y, b.delegateListener), v(s, y, b.delegateUseCapture, !0);
      for (var E = d && d.events, C = 0; C < p.length; C++) {
        var j = p[C];
        v(s, j.type, j.listener, E);
      }
    }
    var tv = { id: "core/interactions", install: function(o) {
      for (var a = {}, s = 0; s < Fi.length; s++) {
        var l = Fi[s];
        a[l] = iu(l, o);
      }
      var d, p = q.default.pEventTypes;
      function b() {
        for (var v = 0; v < o.interactions.list.length; v++) {
          var y = o.interactions.list[v];
          if (y.pointerIsDown && y.pointerType === "touch" && !y._interacting)
            for (var E = function() {
              var j = y.pointers[C];
              o.documents.some(function(W) {
                var Z = W.doc;
                return (0, F.nodeContains)(Z, j.downTarget);
              }) || y.removePointer(j.pointer, j.event);
            }, C = 0; C < y.pointers.length; C++)
              E();
        }
      }
      (d = O.default.PointerEvent ? [{ type: p.down, listener: b }, { type: p.down, listener: a.pointerDown }, { type: p.move, listener: a.pointerMove }, { type: p.up, listener: a.pointerUp }, { type: p.cancel, listener: a.pointerUp }] : [{ type: "mousedown", listener: a.pointerDown }, { type: "mousemove", listener: a.pointerMove }, { type: "mouseup", listener: a.pointerUp }, { type: "touchstart", listener: b }, { type: "touchstart", listener: a.pointerDown }, { type: "touchmove", listener: a.pointerMove }, { type: "touchend", listener: a.pointerUp }, { type: "touchcancel", listener: a.pointerUp }]).push({ type: "blur", listener: function(v) {
        for (var y = 0; y < o.interactions.list.length; y++)
          o.interactions.list[y].documentBlur(v);
      } }), o.prevTouchTime = 0, o.Interaction = function(v) {
        (function(R, ie) {
          if (typeof ie != "function" && ie !== null)
            throw new TypeError("Super expression must either be null or a function");
          R.prototype = Object.create(ie && ie.prototype, { constructor: { value: R, writable: !0, configurable: !0 } }), Object.defineProperty(R, "prototype", { writable: !1 }), ie && Bi(R, ie);
        })(Z, v);
        var y, E, C, j, W = (C = Z, j = function() {
          if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
            return !1;
          if (typeof Proxy == "function")
            return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
            })), !0;
          } catch {
            return !1;
          }
        }(), function() {
          var R, ie = Ma(C);
          if (j) {
            var ge = Ma(this).constructor;
            R = Reflect.construct(ie, arguments, ge);
          } else
            R = ie.apply(this, arguments);
          return ev(this, R);
        });
        function Z() {
          return Qh(this, Z), W.apply(this, arguments);
        }
        return y = Z, (E = [{ key: "pointerMoveTolerance", get: function() {
          return o.interactions.pointerMoveTolerance;
        }, set: function(R) {
          o.interactions.pointerMoveTolerance = R;
        } }, { key: "_now", value: function() {
          return o.now();
        } }]) && Jh(y.prototype, E), Object.defineProperty(y, "prototype", { writable: !1 }), Z;
      }(Bt.default), o.interactions = { list: [], new: function(v) {
        v.scopeFire = function(E, C) {
          return o.fire(E, C);
        };
        var y = new o.Interaction(v);
        return o.interactions.list.push(y), y;
      }, listeners: a, docEvents: d, pointerMoveTolerance: 1 }, o.usePlugin(or.default);
    }, listeners: { "scope:add-document": function(o) {
      return Hi(o, "add");
    }, "scope:remove-document": function(o) {
      return Hi(o, "remove");
    }, "interactable:unset": function(o, a) {
      for (var s = o.interactable, l = a.interactions.list.length - 1; l >= 0; l--) {
        var d = a.interactions.list[l];
        d.interactable === s && (d.stop(), a.fire("interactions:destroy", { interaction: d }), d.destroy(), a.interactions.list.length > 2 && a.interactions.list.splice(l, 1));
      }
    } }, onDocSignal: Hi, doOnInteractions: iu, methodNames: Fi }, nv = tv;
    Ta.default = nv;
    var To = {};
    function Vi(o) {
      return Vi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(a) {
        return typeof a;
      } : function(a) {
        return a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
      }, Vi(o);
    }
    function Pa() {
      return Pa = typeof Reflect < "u" && Reflect.get ? Reflect.get.bind() : function(o, a, s) {
        var l = rv(o, a);
        if (l) {
          var d = Object.getOwnPropertyDescriptor(l, a);
          return d.get ? d.get.call(arguments.length < 3 ? o : s) : d.value;
        }
      }, Pa.apply(this, arguments);
    }
    function rv(o, a) {
      for (; !Object.prototype.hasOwnProperty.call(o, a) && (o = lr(o)) !== null; )
        ;
      return o;
    }
    function Wi(o, a) {
      return Wi = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(s, l) {
        return s.__proto__ = l, s;
      }, Wi(o, a);
    }
    function ov(o, a) {
      if (a && (Vi(a) === "object" || typeof a == "function"))
        return a;
      if (a !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
      return function(s) {
        if (s === void 0)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return s;
      }(o);
    }
    function lr(o) {
      return lr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(a) {
        return a.__proto__ || Object.getPrototypeOf(a);
      }, lr(o);
    }
    function lu(o, a) {
      if (!(o instanceof a))
        throw new TypeError("Cannot call a class as a function");
    }
    function uu(o, a) {
      for (var s = 0; s < a.length; s++) {
        var l = a[s];
        l.enumerable = l.enumerable || !1, l.configurable = !0, "value" in l && (l.writable = !0), Object.defineProperty(o, l.key, l);
      }
    }
    function cu(o, a, s) {
      return a && uu(o.prototype, a), s && uu(o, s), Object.defineProperty(o, "prototype", { writable: !1 }), o;
    }
    function Tt(o, a, s) {
      return a in o ? Object.defineProperty(o, a, { value: s, enumerable: !0, configurable: !0, writable: !0 }) : o[a] = s, o;
    }
    Object.defineProperty(To, "__esModule", { value: !0 }), To.Scope = void 0, To.initScope = du;
    var av = function() {
      function o() {
        var a = this;
        lu(this, o), Tt(this, "id", "__interact_scope_".concat(Math.floor(100 * Math.random()))), Tt(this, "isInitialized", !1), Tt(this, "listenerMaps", []), Tt(this, "browser", q.default), Tt(this, "defaults", (0, ar.default)(wo.defaults)), Tt(this, "Eventable", ko.Eventable), Tt(this, "actions", { map: {}, phases: { start: !0, move: !0, end: !0 }, methodDict: {}, phaselessTypes: {} }), Tt(this, "interactStatic", (0, $i.createInteractStatic)(this)), Tt(this, "InteractEvent", xo.InteractEvent), Tt(this, "Interactable", void 0), Tt(this, "interactables", new ka.InteractableSet(this)), Tt(this, "_win", void 0), Tt(this, "document", void 0), Tt(this, "window", void 0), Tt(this, "documents", []), Tt(this, "_plugins", { list: [], map: {} }), Tt(this, "onWindowUnload", function(l) {
          return a.removeDocument(l.target);
        });
        var s = this;
        this.Interactable = function(l) {
          (function(y, E) {
            if (typeof E != "function" && E !== null)
              throw new TypeError("Super expression must either be null or a function");
            y.prototype = Object.create(E && E.prototype, { constructor: { value: y, writable: !0, configurable: !0 } }), Object.defineProperty(y, "prototype", { writable: !1 }), E && Wi(y, E);
          })(v, l);
          var d, p, b = (d = v, p = function() {
            if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
              return !1;
            if (typeof Proxy == "function")
              return !0;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), !0;
            } catch {
              return !1;
            }
          }(), function() {
            var y, E = lr(d);
            if (p) {
              var C = lr(this).constructor;
              y = Reflect.construct(E, arguments, C);
            } else
              y = E.apply(this, arguments);
            return ov(this, y);
          });
          function v() {
            return lu(this, v), b.apply(this, arguments);
          }
          return cu(v, [{ key: "_defaults", get: function() {
            return s.defaults;
          } }, { key: "set", value: function(y) {
            return Pa(lr(v.prototype), "set", this).call(this, y), s.fire("interactable:set", { options: y, interactable: this }), this;
          } }, { key: "unset", value: function() {
            Pa(lr(v.prototype), "unset", this).call(this);
            var y = s.interactables.list.indexOf(this);
            y < 0 || (s.interactables.list.splice(y, 1), s.fire("interactable:unset", { interactable: this }));
          } }]), v;
        }(Sa.Interactable);
      }
      return cu(o, [{ key: "addListeners", value: function(a, s) {
        this.listenerMaps.push({ id: s, map: a });
      } }, { key: "fire", value: function(a, s) {
        for (var l = 0; l < this.listenerMaps.length; l++) {
          var d = this.listenerMaps[l].map[a];
          if (d && d(s, this, a) === !1)
            return !1;
        }
      } }, { key: "init", value: function(a) {
        return this.isInitialized ? this : du(this, a);
      } }, { key: "pluginIsInstalled", value: function(a) {
        return this._plugins.map[a.id] || this._plugins.list.indexOf(a) !== -1;
      } }, { key: "usePlugin", value: function(a, s) {
        if (!this.isInitialized)
          return this;
        if (this.pluginIsInstalled(a))
          return this;
        if (a.id && (this._plugins.map[a.id] = a), this._plugins.list.push(a), a.install && a.install(this, s), a.listeners && a.before) {
          for (var l = 0, d = this.listenerMaps.length, p = a.before.reduce(function(v, y) {
            return v[y] = !0, v[fu(y)] = !0, v;
          }, {}); l < d; l++) {
            var b = this.listenerMaps[l].id;
            if (p[b] || p[fu(b)])
              break;
          }
          this.listenerMaps.splice(l, 0, { id: a.id, map: a.listeners });
        } else
          a.listeners && this.listenerMaps.push({ id: a.id, map: a.listeners });
        return this;
      } }, { key: "addDocument", value: function(a, s) {
        if (this.getDocIndex(a) !== -1)
          return !1;
        var l = r.getWindow(a);
        s = s ? (0, A.default)({}, s) : {}, this.documents.push({ doc: a, options: s }), this.events.documents.push(a), a !== this.document && this.events.add(l, "unload", this.onWindowUnload), this.fire("scope:add-document", { doc: a, window: l, scope: this, options: s });
      } }, { key: "removeDocument", value: function(a) {
        var s = this.getDocIndex(a), l = r.getWindow(a), d = this.documents[s].options;
        this.events.remove(l, "unload", this.onWindowUnload), this.documents.splice(s, 1), this.events.documents.splice(s, 1), this.fire("scope:remove-document", { doc: a, window: l, scope: this, options: d });
      } }, { key: "getDocIndex", value: function(a) {
        for (var s = 0; s < this.documents.length; s++)
          if (this.documents[s].doc === a)
            return s;
        return -1;
      } }, { key: "getDocOptions", value: function(a) {
        var s = this.getDocIndex(a);
        return s === -1 ? null : this.documents[s].options;
      } }, { key: "now", value: function() {
        return (this.window.Date || Date).now();
      } }]), o;
    }();
    function du(o, a) {
      return o.isInitialized = !0, u.default.window(a) && r.init(a), O.default.init(a), q.default.init(a), tn.default.init(a), o.window = a, o.document = a.document, o.usePlugin(Ta.default), o.usePlugin(Ea.default), o;
    }
    function fu(o) {
      return o && o.replace(/\/.*$/, "");
    }
    To.Scope = av;
    var Dt = {};
    Object.defineProperty(Dt, "__esModule", { value: !0 }), Dt.default = void 0;
    var pu = new To.Scope(), iv = pu.interactStatic;
    Dt.default = iv;
    var sv = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : void 0;
    pu.init(sv);
    var Aa = {};
    Object.defineProperty(Aa, "__esModule", { value: !0 }), Aa.default = void 0, Aa.default = function() {
    };
    var ja = {};
    Object.defineProperty(ja, "__esModule", { value: !0 }), ja.default = void 0, ja.default = function() {
    };
    var Ia = {};
    function hu(o, a) {
      return function(s) {
        if (Array.isArray(s))
          return s;
      }(o) || function(s, l) {
        var d = s == null ? null : typeof Symbol < "u" && s[Symbol.iterator] || s["@@iterator"];
        if (d != null) {
          var p, b, v = [], y = !0, E = !1;
          try {
            for (d = d.call(s); !(y = (p = d.next()).done) && (v.push(p.value), !l || v.length !== l); y = !0)
              ;
          } catch (C) {
            E = !0, b = C;
          } finally {
            try {
              y || d.return == null || d.return();
            } finally {
              if (E)
                throw b;
            }
          }
          return v;
        }
      }(o, a) || function(s, l) {
        if (s) {
          if (typeof s == "string")
            return vu(s, l);
          var d = Object.prototype.toString.call(s).slice(8, -1);
          return d === "Object" && s.constructor && (d = s.constructor.name), d === "Map" || d === "Set" ? Array.from(s) : d === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d) ? vu(s, l) : void 0;
        }
      }(o, a) || function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    function vu(o, a) {
      (a == null || a > o.length) && (a = o.length);
      for (var s = 0, l = Array(a); s < a; s++)
        l[s] = o[s];
      return l;
    }
    Object.defineProperty(Ia, "__esModule", { value: !0 }), Ia.default = void 0, Ia.default = function(o) {
      var a = [["x", "y"], ["left", "top"], ["right", "bottom"], ["width", "height"]].filter(function(l) {
        var d = hu(l, 2), p = d[0], b = d[1];
        return p in o || b in o;
      }), s = function(l, d) {
        for (var p = o.range, b = o.limits, v = b === void 0 ? { left: -1 / 0, right: 1 / 0, top: -1 / 0, bottom: 1 / 0 } : b, y = o.offset, E = y === void 0 ? { x: 0, y: 0 } : y, C = { range: p, grid: o, x: null, y: null }, j = 0; j < a.length; j++) {
          var W = hu(a[j], 2), Z = W[0], R = W[1], ie = Math.round((l - E.x) / o[Z]), ge = Math.round((d - E.y) / o[R]);
          C[Z] = Math.max(v.left, Math.min(v.right, ie * o[Z] + E.x)), C[R] = Math.max(v.top, Math.min(v.bottom, ge * o[R] + E.y));
        }
        return C;
      };
      return s.grid = o, s.coordFields = a, s;
    };
    var Mo = {};
    Object.defineProperty(Mo, "__esModule", { value: !0 }), Object.defineProperty(Mo, "edgeTarget", { enumerable: !0, get: function() {
      return Aa.default;
    } }), Object.defineProperty(Mo, "elements", { enumerable: !0, get: function() {
      return ja.default;
    } }), Object.defineProperty(Mo, "grid", { enumerable: !0, get: function() {
      return Ia.default;
    } });
    var Da = {};
    Object.defineProperty(Da, "__esModule", { value: !0 }), Da.default = void 0;
    var lv = { id: "snappers", install: function(o) {
      var a = o.interactStatic;
      a.snappers = (0, A.default)(a.snappers || {}, Mo), a.createSnapGrid = a.snappers.grid;
    } }, uv = lv;
    Da.default = uv;
    var Lr = {};
    function gu(o, a) {
      var s = Object.keys(o);
      if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(o);
        a && (l = l.filter(function(d) {
          return Object.getOwnPropertyDescriptor(o, d).enumerable;
        })), s.push.apply(s, l);
      }
      return s;
    }
    function Ki(o) {
      for (var a = 1; a < arguments.length; a++) {
        var s = arguments[a] != null ? arguments[a] : {};
        a % 2 ? gu(Object(s), !0).forEach(function(l) {
          cv(o, l, s[l]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(s)) : gu(Object(s)).forEach(function(l) {
          Object.defineProperty(o, l, Object.getOwnPropertyDescriptor(s, l));
        });
      }
      return o;
    }
    function cv(o, a, s) {
      return a in o ? Object.defineProperty(o, a, { value: s, enumerable: !0, configurable: !0, writable: !0 }) : o[a] = s, o;
    }
    Object.defineProperty(Lr, "__esModule", { value: !0 }), Lr.default = Lr.aspectRatio = void 0;
    var mu = { start: function(o) {
      var a = o.state, s = o.rect, l = o.edges, d = o.pageCoords, p = a.options, b = p.ratio, v = p.enabled, y = a.options, E = y.equalDelta, C = y.modifiers;
      b === "preserve" && (b = s.width / s.height), a.startCoords = (0, A.default)({}, d), a.startRect = (0, A.default)({}, s), a.ratio = b, a.equalDelta = E;
      var j = a.linkedEdges = { top: l.top || l.left && !l.bottom, left: l.left || l.top && !l.right, bottom: l.bottom || l.right && !l.top, right: l.right || l.bottom && !l.left };
      if (a.xIsPrimaryAxis = !(!l.left && !l.right), a.equalDelta) {
        var W = (j.left ? 1 : -1) * (j.top ? 1 : -1);
        a.edgeSign = { x: W, y: W };
      } else
        a.edgeSign = { x: j.left ? -1 : 1, y: j.top ? -1 : 1 };
      if (v !== !1 && (0, A.default)(l, j), C != null && C.length) {
        var Z = new ir.default(o.interaction);
        Z.copyFrom(o.interaction.modification), Z.prepareStates(C), a.subModification = Z, Z.startAll(Ki({}, o));
      }
    }, set: function(o) {
      var a = o.state, s = o.rect, l = o.coords, d = a.linkedEdges, p = (0, A.default)({}, l), b = a.equalDelta ? dv : fv;
      if ((0, A.default)(o.edges, d), b(a, a.xIsPrimaryAxis, l, s), !a.subModification)
        return null;
      var v = (0, A.default)({}, s);
      (0, G.addEdges)(d, v, { x: l.x - p.x, y: l.y - p.y });
      var y = a.subModification.setAll(Ki(Ki({}, o), {}, { rect: v, edges: d, pageCoords: l, prevCoords: l, prevRect: v })), E = y.delta;
      return y.changed && (b(a, Math.abs(E.x) > Math.abs(E.y), y.coords, y.rect), (0, A.default)(l, y.coords)), y.eventProps;
    }, defaults: { ratio: "preserve", equalDelta: !1, modifiers: [], enabled: !1 } };
    function dv(o, a, s) {
      var l = o.startCoords, d = o.edgeSign;
      a ? s.y = l.y + (s.x - l.x) * d.y : s.x = l.x + (s.y - l.y) * d.x;
    }
    function fv(o, a, s, l) {
      var d = o.startRect, p = o.startCoords, b = o.ratio, v = o.edgeSign;
      if (a) {
        var y = l.width / b;
        s.y = p.y + (y - d.height) * v.y;
      } else {
        var E = l.height * b;
        s.x = p.x + (E - d.width) * v.x;
      }
    }
    Lr.aspectRatio = mu;
    var pv = (0, Ct.makeModifier)(mu, "aspectRatio");
    Lr.default = pv;
    var ur = {};
    Object.defineProperty(ur, "__esModule", { value: !0 }), ur.default = void 0;
    var yu = function() {
    };
    yu._defaults = {};
    var hv = yu;
    ur.default = hv;
    var qi = {};
    Object.defineProperty(qi, "__esModule", { value: !0 }), Object.defineProperty(qi, "default", { enumerable: !0, get: function() {
      return ur.default;
    } });
    var zt = {};
    function Ui(o, a, s) {
      return u.default.func(o) ? G.resolveRectLike(o, a.interactable, a.element, [s.x, s.y, a]) : G.resolveRectLike(o, a.interactable, a.element);
    }
    Object.defineProperty(zt, "__esModule", { value: !0 }), zt.default = void 0, zt.getRestrictionRect = Ui, zt.restrict = void 0;
    var bu = { start: function(o) {
      var a = o.rect, s = o.startOffset, l = o.state, d = o.interaction, p = o.pageCoords, b = l.options, v = b.elementRect, y = (0, A.default)({ left: 0, top: 0, right: 0, bottom: 0 }, b.offset || {});
      if (a && v) {
        var E = Ui(b.restriction, d, p);
        if (E) {
          var C = E.right - E.left - a.width, j = E.bottom - E.top - a.height;
          C < 0 && (y.left += C, y.right += C), j < 0 && (y.top += j, y.bottom += j);
        }
        y.left += s.left - a.width * v.left, y.top += s.top - a.height * v.top, y.right += s.right - a.width * (1 - v.right), y.bottom += s.bottom - a.height * (1 - v.bottom);
      }
      l.offset = y;
    }, set: function(o) {
      var a = o.coords, s = o.interaction, l = o.state, d = l.options, p = l.offset, b = Ui(d.restriction, s, a);
      if (b) {
        var v = G.xywhToTlbr(b);
        a.x = Math.max(Math.min(v.right - p.right, a.x), v.left + p.left), a.y = Math.max(Math.min(v.bottom - p.bottom, a.y), v.top + p.top);
      }
    }, defaults: { restriction: null, elementRect: null, offset: null, endOnly: !1, enabled: !1 } };
    zt.restrict = bu;
    var vv = (0, Ct.makeModifier)(bu, "restrict");
    zt.default = vv;
    var mn = {};
    Object.defineProperty(mn, "__esModule", { value: !0 }), mn.restrictEdges = mn.default = void 0;
    var wu = { top: 1 / 0, left: 1 / 0, bottom: -1 / 0, right: -1 / 0 }, xu = { top: -1 / 0, left: -1 / 0, bottom: 1 / 0, right: 1 / 0 };
    function _u(o, a) {
      for (var s = ["top", "left", "bottom", "right"], l = 0; l < s.length; l++) {
        var d = s[l];
        d in o || (o[d] = a[d]);
      }
      return o;
    }
    var Su = { noInner: wu, noOuter: xu, start: function(o) {
      var a, s = o.interaction, l = o.startOffset, d = o.state, p = d.options;
      if (p) {
        var b = (0, zt.getRestrictionRect)(p.offset, s, s.coords.start.page);
        a = G.rectToXY(b);
      }
      a = a || { x: 0, y: 0 }, d.offset = { top: a.y + l.top, left: a.x + l.left, bottom: a.y - l.bottom, right: a.x - l.right };
    }, set: function(o) {
      var a = o.coords, s = o.edges, l = o.interaction, d = o.state, p = d.offset, b = d.options;
      if (s) {
        var v = (0, A.default)({}, a), y = (0, zt.getRestrictionRect)(b.inner, l, v) || {}, E = (0, zt.getRestrictionRect)(b.outer, l, v) || {};
        _u(y, wu), _u(E, xu), s.top ? a.y = Math.min(Math.max(E.top + p.top, v.y), y.top + p.top) : s.bottom && (a.y = Math.max(Math.min(E.bottom + p.bottom, v.y), y.bottom + p.bottom)), s.left ? a.x = Math.min(Math.max(E.left + p.left, v.x), y.left + p.left) : s.right && (a.x = Math.max(Math.min(E.right + p.right, v.x), y.right + p.right));
      }
    }, defaults: { inner: null, outer: null, offset: null, endOnly: !1, enabled: !1 } };
    mn.restrictEdges = Su;
    var gv = (0, Ct.makeModifier)(Su, "restrictEdges");
    mn.default = gv;
    var Br = {};
    Object.defineProperty(Br, "__esModule", { value: !0 }), Br.restrictRect = Br.default = void 0;
    var mv = (0, A.default)({ get elementRect() {
      return { top: 0, left: 0, bottom: 1, right: 1 };
    }, set elementRect(o) {
    } }, zt.restrict.defaults), ku = { start: zt.restrict.start, set: zt.restrict.set, defaults: mv };
    Br.restrictRect = ku;
    var yv = (0, Ct.makeModifier)(ku, "restrictRect");
    Br.default = yv;
    var Fr = {};
    Object.defineProperty(Fr, "__esModule", { value: !0 }), Fr.restrictSize = Fr.default = void 0;
    var bv = { width: -1 / 0, height: -1 / 0 }, wv = { width: 1 / 0, height: 1 / 0 }, Eu = { start: function(o) {
      return mn.restrictEdges.start(o);
    }, set: function(o) {
      var a = o.interaction, s = o.state, l = o.rect, d = o.edges, p = s.options;
      if (d) {
        var b = G.tlbrToXywh((0, zt.getRestrictionRect)(p.min, a, o.coords)) || bv, v = G.tlbrToXywh((0, zt.getRestrictionRect)(p.max, a, o.coords)) || wv;
        s.options = { endOnly: p.endOnly, inner: (0, A.default)({}, mn.restrictEdges.noInner), outer: (0, A.default)({}, mn.restrictEdges.noOuter) }, d.top ? (s.options.inner.top = l.bottom - b.height, s.options.outer.top = l.bottom - v.height) : d.bottom && (s.options.inner.bottom = l.top + b.height, s.options.outer.bottom = l.top + v.height), d.left ? (s.options.inner.left = l.right - b.width, s.options.outer.left = l.right - v.width) : d.right && (s.options.inner.right = l.left + b.width, s.options.outer.right = l.left + v.width), mn.restrictEdges.set(o), s.options = p;
      }
    }, defaults: { min: null, max: null, endOnly: !1, enabled: !1 } };
    Fr.restrictSize = Eu;
    var xv = (0, Ct.makeModifier)(Eu, "restrictSize");
    Fr.default = xv;
    var Yi = {};
    Object.defineProperty(Yi, "__esModule", { value: !0 }), Object.defineProperty(Yi, "default", { enumerable: !0, get: function() {
      return ur.default;
    } });
    var Hn = {};
    Object.defineProperty(Hn, "__esModule", { value: !0 }), Hn.snap = Hn.default = void 0;
    var Ou = { start: function(o) {
      var a, s = o.interaction, l = o.interactable, d = o.element, p = o.rect, b = o.state, v = o.startOffset, y = b.options, E = y.offsetWithOrigin ? function(W) {
        var Z = W.interaction.element;
        return (0, G.rectToXY)((0, G.resolveRectLike)(W.state.options.origin, null, null, [Z])) || (0, D.default)(W.interactable, Z, W.interaction.prepared.name);
      }(o) : { x: 0, y: 0 };
      if (y.offset === "startCoords")
        a = { x: s.coords.start.page.x, y: s.coords.start.page.y };
      else {
        var C = (0, G.resolveRectLike)(y.offset, l, d, [s]);
        (a = (0, G.rectToXY)(C) || { x: 0, y: 0 }).x += E.x, a.y += E.y;
      }
      var j = y.relativePoints;
      b.offsets = p && j && j.length ? j.map(function(W, Z) {
        return { index: Z, relativePoint: W, x: v.left - p.width * W.x + a.x, y: v.top - p.height * W.y + a.y };
      }) : [{ index: 0, relativePoint: null, x: a.x, y: a.y }];
    }, set: function(o) {
      var a = o.interaction, s = o.coords, l = o.state, d = l.options, p = l.offsets, b = (0, D.default)(a.interactable, a.element, a.prepared.name), v = (0, A.default)({}, s), y = [];
      d.offsetWithOrigin || (v.x -= b.x, v.y -= b.y);
      for (var E = 0; E < p.length; E++)
        for (var C = p[E], j = v.x - C.x, W = v.y - C.y, Z = 0, R = d.targets.length; Z < R; Z++) {
          var ie, ge = d.targets[Z];
          (ie = u.default.func(ge) ? ge(j, W, a._proxy, C, Z) : ge) && y.push({ x: (u.default.number(ie.x) ? ie.x : j) + C.x, y: (u.default.number(ie.y) ? ie.y : W) + C.y, range: u.default.number(ie.range) ? ie.range : d.range, source: ge, index: Z, offset: C });
        }
      for (var de = { target: null, inRange: !1, distance: 0, range: 0, delta: { x: 0, y: 0 } }, we = 0; we < y.length; we++) {
        var Me = y[we], Be = Me.range, Qe = Me.x - v.x, at = Me.y - v.y, We = (0, ue.default)(Qe, at), ot = We <= Be;
        Be === 1 / 0 && de.inRange && de.range !== 1 / 0 && (ot = !1), de.target && !(ot ? de.inRange && Be !== 1 / 0 ? We / Be < de.distance / de.range : Be === 1 / 0 && de.range !== 1 / 0 || We < de.distance : !de.inRange && We < de.distance) || (de.target = Me, de.distance = We, de.range = Be, de.inRange = ot, de.delta.x = Qe, de.delta.y = at);
      }
      return de.inRange && (s.x = de.target.x, s.y = de.target.y), l.closest = de, de;
    }, defaults: { range: 1 / 0, targets: null, offset: null, offsetWithOrigin: !0, origin: null, relativePoints: null, endOnly: !1, enabled: !1 } };
    Hn.snap = Ou;
    var _v = (0, Ct.makeModifier)(Ou, "snap");
    Hn.default = _v;
    var Mn = {};
    function Cu(o, a) {
      (a == null || a > o.length) && (a = o.length);
      for (var s = 0, l = Array(a); s < a; s++)
        l[s] = o[s];
      return l;
    }
    Object.defineProperty(Mn, "__esModule", { value: !0 }), Mn.snapSize = Mn.default = void 0;
    var Tu = { start: function(o) {
      var a = o.state, s = o.edges, l = a.options;
      if (!s)
        return null;
      o.state = { options: { targets: null, relativePoints: [{ x: s.left ? 0 : 1, y: s.top ? 0 : 1 }], offset: l.offset || "self", origin: { x: 0, y: 0 }, range: l.range } }, a.targetFields = a.targetFields || [["width", "height"], ["x", "y"]], Hn.snap.start(o), a.offsets = o.state.offsets, o.state = a;
    }, set: function(o) {
      var a, s, l = o.interaction, d = o.state, p = o.coords, b = d.options, v = d.offsets, y = { x: p.x - v[0].x, y: p.y - v[0].y };
      d.options = (0, A.default)({}, b), d.options.targets = [];
      for (var E = 0; E < (b.targets || []).length; E++) {
        var C = (b.targets || [])[E], j = void 0;
        if (j = u.default.func(C) ? C(y.x, y.y, l) : C) {
          for (var W = 0; W < d.targetFields.length; W++) {
            var Z = (a = d.targetFields[W], s = 2, function(de) {
              if (Array.isArray(de))
                return de;
            }(a) || function(de, we) {
              var Me = de == null ? null : typeof Symbol < "u" && de[Symbol.iterator] || de["@@iterator"];
              if (Me != null) {
                var Be, Qe, at = [], We = !0, ot = !1;
                try {
                  for (Me = Me.call(de); !(We = (Be = Me.next()).done) && (at.push(Be.value), !we || at.length !== we); We = !0)
                    ;
                } catch (Xt) {
                  ot = !0, Qe = Xt;
                } finally {
                  try {
                    We || Me.return == null || Me.return();
                  } finally {
                    if (ot)
                      throw Qe;
                  }
                }
                return at;
              }
            }(a, s) || function(de, we) {
              if (de) {
                if (typeof de == "string")
                  return Cu(de, we);
                var Me = Object.prototype.toString.call(de).slice(8, -1);
                return Me === "Object" && de.constructor && (Me = de.constructor.name), Me === "Map" || Me === "Set" ? Array.from(de) : Me === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Me) ? Cu(de, we) : void 0;
              }
            }(a, s) || function() {
              throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
            }()), R = Z[0], ie = Z[1];
            if (R in j || ie in j) {
              j.x = j[R], j.y = j[ie];
              break;
            }
          }
          d.options.targets.push(j);
        }
      }
      var ge = Hn.snap.set(o);
      return d.options = b, ge;
    }, defaults: { range: 1 / 0, targets: null, offset: null, endOnly: !1, enabled: !1 } };
    Mn.snapSize = Tu;
    var Sv = (0, Ct.makeModifier)(Tu, "snapSize");
    Mn.default = Sv;
    var Hr = {};
    Object.defineProperty(Hr, "__esModule", { value: !0 }), Hr.snapEdges = Hr.default = void 0;
    var Mu = { start: function(o) {
      var a = o.edges;
      return a ? (o.state.targetFields = o.state.targetFields || [[a.left ? "left" : "right", a.top ? "top" : "bottom"]], Mn.snapSize.start(o)) : null;
    }, set: Mn.snapSize.set, defaults: (0, A.default)((0, ar.default)(Mn.snapSize.defaults), { targets: null, range: null, offset: { x: 0, y: 0 } }) };
    Hr.snapEdges = Mu;
    var kv = (0, Ct.makeModifier)(Mu, "snapEdges");
    Hr.default = kv;
    var Xi = {};
    Object.defineProperty(Xi, "__esModule", { value: !0 }), Object.defineProperty(Xi, "default", { enumerable: !0, get: function() {
      return ur.default;
    } });
    var Gi = {};
    Object.defineProperty(Gi, "__esModule", { value: !0 }), Object.defineProperty(Gi, "default", { enumerable: !0, get: function() {
      return ur.default;
    } });
    var Vr = {};
    Object.defineProperty(Vr, "__esModule", { value: !0 }), Vr.default = void 0;
    var Ev = { aspectRatio: Lr.default, restrictEdges: mn.default, restrict: zt.default, restrictRect: Br.default, restrictSize: Fr.default, snapEdges: Hr.default, snap: Hn.default, snapSize: Mn.default, spring: Xi.default, avoid: qi.default, transform: Gi.default, rubberband: Yi.default };
    Vr.default = Ev;
    var Po = {};
    Object.defineProperty(Po, "__esModule", { value: !0 }), Po.default = void 0;
    var Ov = { id: "modifiers", install: function(o) {
      var a = o.interactStatic;
      for (var s in o.usePlugin(Ct.default), o.usePlugin(Da.default), a.modifiers = Vr.default, Vr.default) {
        var l = Vr.default[s], d = l._defaults, p = l._methods;
        d._methods = p, o.defaults.perAction[s] = d;
      }
    } }, Cv = Ov;
    Po.default = Cv;
    var cr = {};
    function Zi(o) {
      return Zi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(a) {
        return typeof a;
      } : function(a) {
        return a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
      }, Zi(o);
    }
    function Tv(o, a) {
      for (var s = 0; s < a.length; s++) {
        var l = a[s];
        l.enumerable = l.enumerable || !1, l.configurable = !0, "value" in l && (l.writable = !0), Object.defineProperty(o, l.key, l);
      }
    }
    function Qi(o, a) {
      return Qi = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(s, l) {
        return s.__proto__ = l, s;
      }, Qi(o, a);
    }
    function Mv(o, a) {
      if (a && (Zi(a) === "object" || typeof a == "function"))
        return a;
      if (a !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
      return Ji(o);
    }
    function Ji(o) {
      if (o === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return o;
    }
    function $a(o) {
      return $a = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(a) {
        return a.__proto__ || Object.getPrototypeOf(a);
      }, $a(o);
    }
    Object.defineProperty(cr, "__esModule", { value: !0 }), cr.default = cr.PointerEvent = void 0;
    var Pv = function(o) {
      (function(v, y) {
        if (typeof y != "function" && y !== null)
          throw new TypeError("Super expression must either be null or a function");
        v.prototype = Object.create(y && y.prototype, { constructor: { value: v, writable: !0, configurable: !0 } }), Object.defineProperty(v, "prototype", { writable: !1 }), y && Qi(v, y);
      })(b, o);
      var a, s, l, d, p = (l = b, d = function() {
        if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
          return !1;
        if (typeof Proxy == "function")
          return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          })), !0;
        } catch {
          return !1;
        }
      }(), function() {
        var v, y = $a(l);
        if (d) {
          var E = $a(this).constructor;
          v = Reflect.construct(y, arguments, E);
        } else
          v = y.apply(this, arguments);
        return Mv(this, v);
      });
      function b(v, y, E, C, j, W) {
        var Z;
        if (function(ge, de) {
          if (!(ge instanceof de))
            throw new TypeError("Cannot call a class as a function");
        }(this, b), Z = p.call(this, j), ee.pointerExtend(Ji(Z), E), E !== y && ee.pointerExtend(Ji(Z), y), Z.timeStamp = W, Z.originalEvent = E, Z.type = v, Z.pointerId = ee.getPointerId(y), Z.pointerType = ee.getPointerType(y), Z.target = C, Z.currentTarget = null, v === "tap") {
          var R = j.getPointerIndex(y);
          Z.dt = Z.timeStamp - j.pointers[R].downTime;
          var ie = Z.timeStamp - j.tapTime;
          Z.double = !!j.prevTap && j.prevTap.type !== "doubletap" && j.prevTap.target === Z.target && ie < 500;
        } else
          v === "doubletap" && (Z.dt = y.timeStamp - j.tapTime, Z.double = !0);
        return Z;
      }
      return a = b, (s = [{ key: "_subtractOrigin", value: function(v) {
        var y = v.x, E = v.y;
        return this.pageX -= y, this.pageY -= E, this.clientX -= y, this.clientY -= E, this;
      } }, { key: "_addOrigin", value: function(v) {
        var y = v.x, E = v.y;
        return this.pageX += y, this.pageY += E, this.clientX += y, this.clientY += E, this;
      } }, { key: "preventDefault", value: function() {
        this.originalEvent.preventDefault();
      } }]) && Tv(a.prototype, s), Object.defineProperty(a, "prototype", { writable: !1 }), b;
    }(Oe.BaseEvent);
    cr.PointerEvent = cr.default = Pv;
    var Ao = {};
    Object.defineProperty(Ao, "__esModule", { value: !0 }), Ao.default = void 0;
    var za = { id: "pointer-events/base", before: ["inertia", "modifiers", "auto-start", "actions"], install: function(o) {
      o.pointerEvents = za, o.defaults.actions.pointerEvents = za.defaults, (0, A.default)(o.actions.phaselessTypes, za.types);
    }, listeners: { "interactions:new": function(o) {
      var a = o.interaction;
      a.prevTap = null, a.tapTime = 0;
    }, "interactions:update-pointer": function(o) {
      var a = o.down, s = o.pointerInfo;
      !a && s.hold || (s.hold = { duration: 1 / 0, timeout: null });
    }, "interactions:move": function(o, a) {
      var s = o.interaction, l = o.pointer, d = o.event, p = o.eventTarget;
      o.duplicate || s.pointerIsDown && !s.pointerWasMoved || (s.pointerIsDown && es(o), Vn({ interaction: s, pointer: l, event: d, eventTarget: p, type: "move" }, a));
    }, "interactions:down": function(o, a) {
      (function(s, l) {
        for (var d = s.interaction, p = s.pointer, b = s.event, v = s.eventTarget, y = s.pointerIndex, E = d.pointers[y].hold, C = F.getPath(v), j = { interaction: d, pointer: p, event: b, eventTarget: v, type: "hold", targets: [], path: C, node: null }, W = 0; W < C.length; W++) {
          var Z = C[W];
          j.node = Z, l.fire("pointerEvents:collect-targets", j);
        }
        if (j.targets.length) {
          for (var R = 1 / 0, ie = 0; ie < j.targets.length; ie++) {
            var ge = j.targets[ie].eventable.options.holdDuration;
            ge < R && (R = ge);
          }
          E.duration = R, E.timeout = setTimeout(function() {
            Vn({ interaction: d, eventTarget: v, pointer: p, event: b, type: "hold" }, l);
          }, R);
        }
      })(o, a), Vn(o, a);
    }, "interactions:up": function(o, a) {
      es(o), Vn(o, a), function(s, l) {
        var d = s.interaction, p = s.pointer, b = s.event, v = s.eventTarget;
        d.pointerWasMoved || Vn({ interaction: d, eventTarget: v, pointer: p, event: b, type: "tap" }, l);
      }(o, a);
    }, "interactions:cancel": function(o, a) {
      es(o), Vn(o, a);
    } }, PointerEvent: cr.PointerEvent, fire: Vn, collectEventTargets: Pu, defaults: { holdDuration: 600, ignoreFrom: null, allowFrom: null, origin: { x: 0, y: 0 } }, types: { down: !0, move: !0, up: !0, cancel: !0, tap: !0, doubletap: !0, hold: !0 } };
    function Vn(o, a) {
      var s = o.interaction, l = o.pointer, d = o.event, p = o.eventTarget, b = o.type, v = o.targets, y = v === void 0 ? Pu(o, a) : v, E = new cr.PointerEvent(b, l, d, p, s, a.now());
      a.fire("pointerEvents:new", { pointerEvent: E });
      for (var C = { interaction: s, pointer: l, event: d, eventTarget: p, targets: y, type: b, pointerEvent: E }, j = 0; j < y.length; j++) {
        var W = y[j];
        for (var Z in W.props || {})
          E[Z] = W.props[Z];
        var R = (0, D.default)(W.eventable, W.node);
        if (E._subtractOrigin(R), E.eventable = W.eventable, E.currentTarget = W.node, W.eventable.fire(E), E._addOrigin(R), E.immediatePropagationStopped || E.propagationStopped && j + 1 < y.length && y[j + 1].node !== E.currentTarget)
          break;
      }
      if (a.fire("pointerEvents:fired", C), b === "tap") {
        var ie = E.double ? Vn({ interaction: s, pointer: l, event: d, eventTarget: p, type: "doubletap" }, a) : E;
        s.prevTap = ie, s.tapTime = ie.timeStamp;
      }
      return E;
    }
    function Pu(o, a) {
      var s = o.interaction, l = o.pointer, d = o.event, p = o.eventTarget, b = o.type, v = s.getPointerIndex(l), y = s.pointers[v];
      if (b === "tap" && (s.pointerWasMoved || !y || y.downTarget !== p))
        return [];
      for (var E = F.getPath(p), C = { interaction: s, pointer: l, event: d, eventTarget: p, type: b, path: E, targets: [], node: null }, j = 0; j < E.length; j++) {
        var W = E[j];
        C.node = W, a.fire("pointerEvents:collect-targets", C);
      }
      return b === "hold" && (C.targets = C.targets.filter(function(Z) {
        var R;
        return Z.eventable.options.holdDuration === ((R = s.pointers[v]) == null ? void 0 : R.hold.duration);
      })), C.targets;
    }
    function es(o) {
      var a = o.interaction, s = o.pointerIndex, l = a.pointers[s].hold;
      l && l.timeout && (clearTimeout(l.timeout), l.timeout = null);
    }
    var Av = za;
    Ao.default = Av;
    var Na = {};
    function jv(o) {
      var a = o.interaction;
      a.holdIntervalHandle && (clearInterval(a.holdIntervalHandle), a.holdIntervalHandle = null);
    }
    Object.defineProperty(Na, "__esModule", { value: !0 }), Na.default = void 0;
    var Iv = { id: "pointer-events/holdRepeat", install: function(o) {
      o.usePlugin(Ao.default);
      var a = o.pointerEvents;
      a.defaults.holdRepeatInterval = 0, a.types.holdrepeat = o.actions.phaselessTypes.holdrepeat = !0;
    }, listeners: ["move", "up", "cancel", "endall"].reduce(function(o, a) {
      return o["pointerEvents:".concat(a)] = jv, o;
    }, { "pointerEvents:new": function(o) {
      var a = o.pointerEvent;
      a.type === "hold" && (a.count = (a.count || 0) + 1);
    }, "pointerEvents:fired": function(o, a) {
      var s = o.interaction, l = o.pointerEvent, d = o.eventTarget, p = o.targets;
      if (l.type === "hold" && p.length) {
        var b = p[0].eventable.options.holdRepeatInterval;
        b <= 0 || (s.holdIntervalHandle = setTimeout(function() {
          a.pointerEvents.fire({ interaction: s, eventTarget: d, type: "hold", pointer: l, event: l }, a);
        }, b));
      }
    } }) }, Dv = Iv;
    Na.default = Dv;
    var Ra = {};
    function $v(o) {
      return (0, A.default)(this.events.options, o), this;
    }
    Object.defineProperty(Ra, "__esModule", { value: !0 }), Ra.default = void 0;
    var zv = { id: "pointer-events/interactableTargets", install: function(o) {
      var a = o.Interactable;
      a.prototype.pointerEvents = $v;
      var s = a.prototype._backCompatOption;
      a.prototype._backCompatOption = function(l, d) {
        var p = s.call(this, l, d);
        return p === this && (this.events.options[l] = d), p;
      };
    }, listeners: { "pointerEvents:collect-targets": function(o, a) {
      var s = o.targets, l = o.node, d = o.type, p = o.eventTarget;
      a.interactables.forEachMatch(l, function(b) {
        var v = b.events, y = v.options;
        v.types[d] && v.types[d].length && b.testIgnoreAllow(y, l, p) && s.push({ node: l, eventable: v, props: { interactable: b } });
      });
    }, "interactable:new": function(o) {
      var a = o.interactable;
      a.events.getRect = function(s) {
        return a.getRect(s);
      };
    }, "interactable:set": function(o, a) {
      var s = o.interactable, l = o.options;
      (0, A.default)(s.events.options, a.pointerEvents.defaults), (0, A.default)(s.events.options, l.pointerEvents || {});
    } } }, Nv = zv;
    Ra.default = Nv;
    var jo = {};
    Object.defineProperty(jo, "__esModule", { value: !0 }), jo.default = void 0;
    var Rv = { id: "pointer-events", install: function(o) {
      o.usePlugin(Ao), o.usePlugin(Na.default), o.usePlugin(Ra.default);
    } }, Lv = Rv;
    jo.default = Lv;
    var Wr = {};
    function Au(o) {
      var a = o.Interactable;
      o.actions.phases.reflow = !0, a.prototype.reflow = function(s) {
        return function(l, d, p) {
          for (var b = u.default.string(l.target) ? je.from(l._context.querySelectorAll(l.target)) : [l.target], v = p.window.Promise, y = v ? [] : null, E = function() {
            var j = b[C], W = l.getRect(j);
            if (!W)
              return "break";
            var Z = je.find(p.interactions.list, function(we) {
              return we.interacting() && we.interactable === l && we.element === j && we.prepared.name === d.name;
            }), R = void 0;
            if (Z)
              Z.move(), y && (R = Z._reflowPromise || new v(function(we) {
                Z._reflowResolve = we;
              }));
            else {
              var ie = (0, G.tlbrToXywh)(W), ge = { page: { x: ie.x, y: ie.y }, client: { x: ie.x, y: ie.y }, timeStamp: p.now() }, de = ee.coordsToEvent(ge);
              R = function(we, Me, Be, Qe, at) {
                var We = we.interactions.new({ pointerType: "reflow" }), ot = { interaction: We, event: at, pointer: at, eventTarget: Be, phase: "reflow" };
                We.interactable = Me, We.element = Be, We.prevEvent = at, We.updatePointer(at, at, Be, !0), ee.setZeroCoords(We.coords.delta), (0, Wt.copyAction)(We.prepared, Qe), We._doPhase(ot);
                var Xt = we.window.Promise, Pn = Xt ? new Xt(function(ns) {
                  We._reflowResolve = ns;
                }) : void 0;
                return We._reflowPromise = Pn, We.start(Qe, Me, Be), We._interacting ? (We.move(ot), We.end(at)) : (We.stop(), We._reflowResolve()), We.removePointer(at, at), Pn;
              }(p, l, j, d, de);
            }
            y && y.push(R);
          }, C = 0; C < b.length && E() !== "break"; C++)
            ;
          return y && v.all(y).then(function() {
            return l;
          });
        }(this, s, o);
      };
    }
    Object.defineProperty(Wr, "__esModule", { value: !0 }), Wr.default = void 0, Wr.install = Au;
    var Bv = { id: "reflow", install: Au, listeners: { "interactions:stop": function(o, a) {
      var s = o.interaction;
      s.pointerType === "reflow" && (s._reflowResolve && s._reflowResolve(), je.remove(a.interactions.list, s));
    } } }, Fv = Bv;
    Wr.default = Fv;
    var dr = {};
    Object.defineProperty(dr, "__esModule", { value: !0 }), dr.default = void 0, Dt.default.use(or.default), Dt.default.use(Fn.default), Dt.default.use(jo.default), Dt.default.use(sr.default), Dt.default.use(Po.default), Dt.default.use(yo.default), Dt.default.use(go.default), Dt.default.use(Cn.default), Dt.default.use(Wr.default);
    var Hv = Dt.default;
    dr.default = Hv, Dt.default.default = Dt.default, go.default, Cn.default, yo.default, or.default, ga.default, sr.default, Dt.default, Po.default, Fn.default, jo.default, Wr.default;
    var fr = { exports: {} };
    function ts(o) {
      return ts = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(a) {
        return typeof a;
      } : function(a) {
        return a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
      }, ts(o);
    }
    Object.defineProperty(fr.exports, "__esModule", { value: !0 }), fr.exports.default = void 0;
    var Vv = dr.default;
    if (fr.exports.default = Vv, ts(fr) === "object" && fr)
      try {
        fr.exports = dr.default;
      } catch {
      }
    return dr.default.default = dr.default, fr.exports;
  });
})(Zd);
var Tg = Zd.exports;
const Ru = /* @__PURE__ */ Gd(Tg), Mg = /* @__PURE__ */ Ae({
  __name: "grid-item",
  props: {
    isDraggable: {
      type: Boolean,
      default: null
    },
    isResizable: {
      type: Boolean,
      default: null
    },
    isBounded: {
      type: Boolean,
      default: null
    },
    static: {
      type: Boolean,
      default: !1
    },
    minH: {
      type: Number,
      default: 1
    },
    minW: {
      type: Number,
      default: 1
    },
    maxH: {
      type: Number,
      default: 1 / 0
    },
    maxW: {
      type: Number,
      default: 1 / 0
    },
    x: {
      type: Number,
      required: !0
    },
    y: {
      type: Number,
      required: !0
    },
    w: {
      type: Number,
      required: !0
    },
    h: {
      type: Number,
      required: !0
    },
    i: {
      type: [Number, String],
      required: !0
    },
    dragIgnoreFrom: {
      type: String,
      default: "a, button"
    },
    dragAllowFrom: {
      type: String,
      default: null
    },
    resizeIgnoreFrom: {
      type: String,
      default: "a, button"
    },
    preserveAspectRatio: {
      type: Boolean,
      default: !1
    },
    dragOption: {
      type: Object,
      default: () => ({})
    },
    resizeOption: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["container-resized", "resize", "resized", "move", "moved"],
  setup(e, { expose: t, emit: n }) {
    const r = e, i = Ye(gg), c = Ye(mg);
    if (!i)
      throw new Error("[grid-layout-plus]: missing layout store, GridItem must under a GridLayout.");
    const f = ce(null), u = cn({
      cols: 1,
      containerWidth: 100,
      rowHeight: 30,
      margin: [10, 10],
      maxRows: 1 / 0,
      draggable: null,
      resizable: null,
      bounded: null,
      transformScale: 1,
      useCssTransforms: !0,
      useStyleCursor: !0,
      isDragging: !1,
      dragging: {
        top: -1,
        left: -1
      },
      isResizing: !1,
      resizing: {
        width: -1,
        height: -1
      },
      style: {},
      rtl: !1
    });
    let h = !1, g = !1, w = NaN, _ = NaN, k = NaN, T = NaN, x = -1, S = -1, M = -1, O = -1, I = r.x, K = r.y, L = r.w, q = r.h;
    const N = ce(), H = cn({
      i: ln(r, "i"),
      state: u,
      wrapper: N,
      calcXY: pe
    });
    function F($) {
      nt($);
    }
    function le() {
      je();
    }
    function re($) {
      Wn(r.isDraggable) && (u.draggable = $);
    }
    function fe($) {
      Wn(r.isResizable) && (u.resizable = $);
    }
    function _e($) {
      Wn(r.isBounded) && (u.bounded = $);
    }
    function ne($) {
      u.transformScale = $;
    }
    function Q($) {
      u.rowHeight = $;
    }
    function A($) {
      u.maxRows = $;
    }
    function G() {
      u.rtl = Nu() === "rtl", je();
    }
    function z($) {
      u.cols = Math.floor($);
    }
    i.increaseItem(H), Kd(() => {
      u.rtl = Nu() === "rtl";
    }), jt(() => {
      i.responsive && i.lastBreakpoint ? u.cols = Eg(i.lastBreakpoint, i.cols) : u.cols = i.colNum, u.rowHeight = i.rowHeight, u.containerWidth = i.width !== null ? i.width : 100, u.margin = i.margin !== void 0 ? i.margin : [10, 10], u.maxRows = i.maxRows, Wn(r.isDraggable) ? u.draggable = i.isDraggable : u.draggable = r.isDraggable, Wn(r.isResizable) ? u.resizable = i.isResizable : u.resizable = r.isResizable, Wn(r.isBounded) ? u.bounded = i.isBounded : u.bounded = r.isBounded, u.transformScale = i.transformScale, u.useCssTransforms = i.useCssTransforms, u.useStyleCursor = i.useStyleCursor, Zv(() => {
        I = r.x, K = r.y, q = r.h, L = r.w, Nt(ee);
      }), c.on("updateWidth", F), c.on("compact", le), c.on("setDraggable", re), c.on("setResizable", fe), c.on("setBounded", _e), c.on("setTransformScale", ne), c.on("setRowHeight", Q), c.on("setMaxRows", A), c.on("directionchange", G), c.on("setColNum", z);
    }), fn(() => {
      c.off("updateWidth", F), c.off("compact", le), c.off("setDraggable", re), c.off("setResizable", fe), c.off("setBounded", _e), c.off("setTransformScale", ne), c.off("setRowHeight", Q), c.off("setMaxRows", A), c.off("directionchange", G), c.off("setColNum", z), f.value && (f.value.unset(), f.value = null), i.decreaseItem(H);
    }), t({ state: u, wrapper: N });
    const U = navigator.userAgent.toLowerCase().includes("android"), D = V(() => u.resizable && !r.static), X = V(() => i.isMirrored ? !u.rtl : u.rtl), oe = V(() => (u.draggable || u.resizable) && !r.static), ue = _g("item"), ye = V(() => ({
      [ue.b()]: !0,
      [ue.bm("resizable")]: D.value,
      [ue.bm("static")]: r.static,
      [ue.bm("resizing")]: u.isResizing,
      [ue.bm("dragging")]: u.isDragging,
      [ue.bm("transform")]: u.useCssTransforms,
      [ue.bm("rtl")]: X.value,
      [ue.bm("no-touch")]: U && oe.value
    })), $e = V(() => [ue.be("resizer"), X.value && ue.bem("resizer", "rtl")].filter(Boolean));
    be(
      () => r.isDraggable,
      ($) => {
        u.draggable = $;
      }
    ), be(
      () => r.static,
      () => {
        Nt(Ge), Nt(st);
      }
    ), be(
      () => u.draggable,
      () => {
        Nt(Ge);
      }
    ), be(
      () => r.isResizable,
      ($) => {
        u.resizable = $;
      }
    ), be(
      () => r.isBounded,
      ($) => {
        u.bounded = $;
      }
    ), be(
      () => u.resizable,
      () => {
        Nt(st);
      }
    ), be(
      () => u.rowHeight,
      () => {
        Nt(ee), Nt(He);
      }
    ), be([() => u.cols, () => u.containerWidth], () => {
      Nt(st), Nt(ee), Nt(He);
    }), be([() => r.minH, () => r.maxH, () => r.minW, () => r.maxW], () => {
      Nt(st);
    }), be(X, () => {
      Nt(st), Nt(ee);
    }), be(
      () => i.margin,
      ($) => {
        !$ || $[0] === u.margin[0] && $[1] === u.margin[1] || (u.margin = $.map(Number), Nt(ee), Nt(He));
      }
    );
    function ee() {
      r.x + r.w > u.cols ? (I = 0, L = r.w > u.cols ? u.cols : r.w) : (I = r.x, L = r.w);
      const $ = se(I, K, L, q);
      u.isDragging && ($.top = u.dragging.top, X.value ? $.right = u.dragging.left : $.left = u.dragging.left), u.isResizing && ($.width = u.resizing.width, $.height = u.resizing.height);
      let ve;
      u.useCssTransforms ? X.value ? ve = bg($.top, $.right, $.width, $.height) : ve = yg($.top, $.left, $.width, $.height) : X.value ? ve = xg($.top, $.right, $.width, $.height) : ve = wg($.top, $.left, $.width, $.height), u.style = ve;
    }
    function He() {
      const $ = {};
      for (const ve of ["width", "height"]) {
        const Ce = u.style[ve].match(/^(\d+)px$/);
        if (!Ce)
          return;
        $[ve] = Ce[1];
      }
      n("container-resized", r.i, r.h, r.w, $.height, $.width);
    }
    function Ve($) {
      if (r.static)
        return;
      const ve = $.type;
      if (ve === "resizestart" && u.isResizing || ve !== "resizestart" && !u.isResizing)
        return;
      const Ce = $u($);
      if (Wn(Ce))
        return;
      const { x: Re, y: qe } = Ce, ze = { width: 0, height: 0 };
      let me;
      switch (ve) {
        case "resizestart": {
          st(), x = L, S = q, me = se(I, K, L, q), ze.width = me.width, ze.height = me.height, u.resizing = ze, u.isResizing = !0;
          break;
        }
        case "resizemove": {
          const lt = zu(k, T, Re, qe);
          X.value ? ze.width = u.resizing.width - lt.deltaX / u.transformScale : ze.width = u.resizing.width + lt.deltaX / u.transformScale, ze.height = u.resizing.height + lt.deltaY / u.transformScale, u.resizing = ze;
          break;
        }
        case "resizeend": {
          me = se(I, K, L, q), ze.width = me.width, ze.height = me.height, u.resizing = { width: -1, height: -1 }, u.isResizing = !1;
          break;
        }
      }
      me = et(ze.height, ze.width), me.w < r.minW && (me.w = r.minW), me.w > r.maxW && (me.w = r.maxW), me.h < r.minH && (me.h = r.minH), me.h > r.maxH && (me.h = r.maxH), me.h < 1 && (me.h = 1), me.w < 1 && (me.w = 1), k = Re, T = qe, (L !== me.w || q !== me.h) && n("resize", r.i, me.h, me.w, ze.height, ze.width), $.type === "resizeend" && (x !== L || S !== q) && n("resized", r.i, me.h, me.w, ze.height, ze.width), c.emit("resizeEvent", $.type, r.i, I, K, me.h, me.w);
    }
    function Le($) {
      if (r.static || u.isResizing)
        return;
      const ve = $.type;
      if (ve === "dragstart" && u.isDragging || ve !== "dragstart" && !u.isDragging)
        return;
      const Ce = $u($);
      if (Wn(Ce))
        return;
      const { x: Re, y: qe } = Ce, ze = $.target;
      if (!ze.offsetParent)
        return;
      const me = { top: 0, left: 0 };
      switch (ve) {
        case "dragstart": {
          M = I, O = K;
          const B = ze.offsetParent.getBoundingClientRect(), ae = ze.getBoundingClientRect(), P = ae.left / u.transformScale, J = B.left / u.transformScale, ke = ae.right / u.transformScale, Ue = B.right / u.transformScale, ut = ae.top / u.transformScale, St = B.top / u.transformScale;
          X.value ? me.left = (ke - Ue) * -1 : me.left = P - J, me.top = ut - St, u.dragging = me, u.isDragging = !0;
          break;
        }
        case "dragmove": {
          const B = zu(w, _, Re, qe);
          if (X.value ? me.left = u.dragging.left - B.deltaX / u.transformScale : me.left = u.dragging.left + B.deltaX / u.transformScale, me.top = u.dragging.top + B.deltaY / u.transformScale, u.bounded) {
            const ae = ze.offsetParent.clientHeight - Oe(r.h, u.rowHeight, u.margin[1]);
            me.top = Fe(me.top, 0, ae);
            const P = Te(), J = u.containerWidth - Oe(r.w, P, u.margin[0]);
            me.left = Fe(me.left, 0, J);
          }
          u.dragging = me;
          break;
        }
        case "dragend": {
          const B = ze.offsetParent.getBoundingClientRect(), ae = ze.getBoundingClientRect(), P = ae.left / u.transformScale, J = B.left / u.transformScale, ke = ae.right / u.transformScale, Ue = B.right / u.transformScale, ut = ae.top / u.transformScale, St = B.top / u.transformScale;
          X.value ? me.left = (ke - Ue) * -1 : me.left = P - J, me.top = ut - St, u.dragging = { top: -1, left: -1 }, u.isDragging = !1;
          break;
        }
      }
      let lt;
      X.value, lt = pe(me.top, me.left), w = Re, _ = qe, (I !== lt.x || K !== lt.y) && n("move", r.i, lt.x, lt.y), $.type === "dragend" && (M !== I || O !== K) && n("moved", r.i, lt.x, lt.y), c.emit("dragEvent", $.type, r.i, lt.x, lt.y, q, L);
    }
    function se($, ve, Ce, Re) {
      const qe = Te();
      let ze;
      return X.value ? ze = {
        right: Math.round(qe * $ + ($ + 1) * u.margin[0]),
        top: Math.round(u.rowHeight * ve + (ve + 1) * u.margin[1]),
        // 0 * Infinity === NaN, which causes problems with resize constriants;
        // Fix this if it occurs.
        // Note we do it here rather than later because Math.round(Infinity) causes deopt
        width: Ce === 1 / 0 ? Ce : Math.round(qe * Ce + Math.max(0, Ce - 1) * u.margin[0]),
        height: Re === 1 / 0 ? Re : Math.round(u.rowHeight * Re + Math.max(0, Re - 1) * u.margin[1])
      } : ze = {
        left: Math.round(qe * $ + ($ + 1) * u.margin[0]),
        top: Math.round(u.rowHeight * ve + (ve + 1) * u.margin[1]),
        // 0 * Infinity === NaN, which causes problems with resize constriants;
        // Fix this if it occurs.
        // Note we do it here rather than later because Math.round(Infinity) causes deopt
        width: Ce === 1 / 0 ? Ce : Math.round(qe * Ce + Math.max(0, Ce - 1) * u.margin[0]),
        height: Re === 1 / 0 ? Re : Math.round(u.rowHeight * Re + Math.max(0, Re - 1) * u.margin[1])
      }, ze;
    }
    function pe($, ve) {
      const Ce = Te();
      let Re = Math.round((ve - u.margin[0]) / (Ce + u.margin[0])), qe = Math.round(($ - u.margin[1]) / (u.rowHeight + u.margin[1]));
      return Re = Math.max(Math.min(Re, u.cols - L), 0), qe = Math.max(Math.min(qe, u.maxRows - q), 0), { x: Re, y: qe };
    }
    function Te() {
      return (u.containerWidth - u.margin[0] * (u.cols + 1)) / u.cols;
    }
    function Oe($, ve, Ce) {
      return Number.isFinite($) ? Math.round(ve * $ + Math.max(0, $ - 1) * Ce) : $;
    }
    function Fe($, ve, Ce) {
      return Math.max(Math.min($, Ce), ve);
    }
    function et($, ve, Ce = !1) {
      const Re = Te();
      let qe = Math.round((ve + u.margin[0]) / (Re + u.margin[0])), ze = 0;
      return Ce ? ze = Math.ceil(($ + u.margin[1]) / (u.rowHeight + u.margin[1])) : ze = Math.round(($ + u.margin[1]) / (u.rowHeight + u.margin[1])), qe = Math.max(Math.min(qe, u.cols - I), 0), ze = Math.max(Math.min(ze, u.maxRows - K), 0), { w: qe, h: ze };
    }
    function nt($, ve) {
      u.containerWidth = $, ve != null && (u.cols = ve);
    }
    function je() {
      ee();
    }
    function Ie() {
      !f.value && N.value && (f.value = Ru(N.value), u.useStyleCursor || f.value.styleCursor(!1));
    }
    const xt = Du(Le);
    function Ge() {
      if (Ie(), !!f.value)
        if (u.draggable && !r.static) {
          const $ = {
            ignoreFrom: r.dragIgnoreFrom,
            allowFrom: r.dragAllowFrom,
            ...r.dragOption
          };
          f.value.draggable($), h || (h = !0, f.value.on("dragstart dragmove dragend", (ve) => {
            ve.type === "dragmove" ? xt(ve) : Le(ve);
          }));
        } else
          f.value.draggable({ enabled: !1 });
    }
    const ht = Du(Ve);
    function st() {
      if (Ie(), !!f.value)
        if (u.resizable && !r.static) {
          const $ = se(0, 0, r.maxW, r.maxH), ve = se(0, 0, r.minW, r.minH), Ce = {
            edges: {
              left: !1,
              right: `.${$e.value[0]}`,
              bottom: `.${$e.value[0]}`,
              top: !1
            },
            ignoreFrom: r.resizeIgnoreFrom,
            restrictSize: {
              min: {
                height: ve.height * u.transformScale,
                width: ve.width * u.transformScale
              },
              max: {
                height: $.height * u.transformScale,
                width: $.width * u.transformScale
              }
            },
            ...r.resizeOption
          };
          r.preserveAspectRatio && (Ce.modifiers = [Ru.modifiers.aspectRatio({ ratio: "preserve" })]), f.value.resizable(Ce), g || (g = !0, f.value.on("resizestart resizemove resizeend", (Re) => {
            Re.type === "resizemove" ? ht(Re) : Ve(Re);
          }));
        } else
          f.value.resizable({ enabled: !1 });
    }
    return ($, ve) => (Y(), he("section", {
      ref_key: "wrapper",
      ref: N,
      class: te(m(ye)),
      style: _t(u.style)
    }, [
      Ze($.$slots, "default"),
      m(D) ? (Y(), he("span", {
        key: 0,
        class: te(m($e))
      }, null, 2)) : Ee("", !0)
    ], 6));
  }
}), lo = typeof window < "u";
var Lu;
lo && (Lu = window == null ? void 0 : window.navigator) != null && Lu.userAgent && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Bu(e) {
  return e != null;
}
function rs() {
}
const Pg = Object.freeze({
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
  rebeccapurple: "663399",
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
});
Object.freeze(new Set(Object.keys(Pg)));
const Ag = lo && ("ontouchstart" in window || Ig() > 0), jg = Ag ? "pointerdown" : "click";
function Ig() {
  return typeof navigator < "u" && (navigator.maxTouchPoints || navigator.msMaxTouchPoints) || 0;
}
const ni = /* @__PURE__ */ new Map();
function Dg(e) {
  ni.has(e) || ni.set(e, /* @__PURE__ */ new Set());
}
function $g(e) {
  return ni.get(e) ?? ni.set(e, /* @__PURE__ */ new Set()).get(e);
}
function zg(e, t, n = window.Event) {
  const { type: r, bubbles: i = !1, cancelable: c = !1, ...f } = t;
  if (!Bu(r) || r === "")
    return !1;
  let u;
  return Bu(n) ? u = new n(r, { bubbles: i, cancelable: c }) : (u = document.createEvent("HTMLEvents"), u.initEvent(r, i, c)), Object.assign(u, f), e.dispatchEvent(u);
}
const Os = "clickoutside";
Dg(Os);
lo && document.addEventListener(
  jg,
  (e) => {
    const t = e.target, n = e.composedPath && e.composedPath();
    $g(Os).forEach((r) => {
      r !== t && (n ? !n.includes(r) : !r.contains(t)) && (!r.__transferElement || r.__transferElement !== t && !r.__transferElement.contains(t)) && zg(r, { type: Os });
    });
  },
  !0
);
const Ng = [
  [
    "requestFullscreen",
    "exitFullscreen",
    "fullscreenElement",
    "fullscreenEnabled",
    "fullscreenchange",
    "fullscreenerror"
  ],
  // New WebKit
  [
    "webkitRequestFullscreen",
    "webkitExitFullscreen",
    "webkitFullscreenElement",
    "webkitFullscreenEnabled",
    "webkitfullscreenchange",
    "webkitfullscreenerror"
  ],
  // Old WebKit
  [
    "webkitRequestFullScreen",
    "webkitCancelFullScreen",
    "webkitCurrentFullScreenElement",
    "webkitCancelFullScreen",
    "webkitfullscreenchange",
    "webkitfullscreenerror"
  ],
  [
    "mozRequestFullScreen",
    "mozCancelFullScreen",
    "mozFullScreenElement",
    "mozFullScreenEnabled",
    "mozfullscreenchange",
    "mozfullscreenerror"
  ],
  [
    "msRequestFullscreen",
    "msExitFullscreen",
    "msFullscreenElement",
    "msFullscreenEnabled",
    "MSFullscreenChange",
    "MSFullscreenError"
  ]
];
let Lo;
if (lo) {
  for (const e of Ng)
    if (e[1] in document) {
      Lo = e;
      break;
    }
}
const Rg = !!Lo;
V(() => !1);
const Lg = /* @__PURE__ */ new Set();
if (lo && Lo) {
  const e = Lo[2], t = Lo[4];
  document.addEventListener(
    t,
    () => {
      const n = !!document[e];
      Lg.forEach((r) => {
        r.value = n;
      });
    },
    !1
  );
}
const Qd = /* @__PURE__ */ new Map();
Qd.set("x", 0);
Qd.set("y", 0);
var yr = [], Bg = function() {
  return yr.some(function(e) {
    return e.activeTargets.length > 0;
  });
}, Fg = function() {
  return yr.some(function(e) {
    return e.skippedTargets.length > 0;
  });
}, Fu = "ResizeObserver loop completed with undelivered notifications.", Hg = function() {
  var e;
  typeof ErrorEvent == "function" ? e = new ErrorEvent("error", {
    message: Fu
  }) : (e = document.createEvent("Event"), e.initEvent("error", !1, !1), e.message = Fu), window.dispatchEvent(e);
}, Uo;
(function(e) {
  e.BORDER_BOX = "border-box", e.CONTENT_BOX = "content-box", e.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box";
})(Uo || (Uo = {}));
var br = function(e) {
  return Object.freeze(e);
}, Vg = function() {
  function e(t, n) {
    this.inlineSize = t, this.blockSize = n, br(this);
  }
  return e;
}(), Jd = function() {
  function e(t, n, r, i) {
    return this.x = t, this.y = n, this.width = r, this.height = i, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, br(this);
  }
  return e.prototype.toJSON = function() {
    var t = this, n = t.x, r = t.y, i = t.top, c = t.right, f = t.bottom, u = t.left, h = t.width, g = t.height;
    return { x: n, y: r, top: i, right: c, bottom: f, left: u, width: h, height: g };
  }, e.fromRect = function(t) {
    return new e(t.x, t.y, t.width, t.height);
  }, e;
}(), Gs = function(e) {
  return e instanceof SVGElement && "getBBox" in e;
}, ef = function(e) {
  if (Gs(e)) {
    var t = e.getBBox(), n = t.width, r = t.height;
    return !n && !r;
  }
  var i = e, c = i.offsetWidth, f = i.offsetHeight;
  return !(c || f || e.getClientRects().length);
}, Hu = function(e) {
  var t;
  if (e instanceof Element)
    return !0;
  var n = (t = e == null ? void 0 : e.ownerDocument) === null || t === void 0 ? void 0 : t.defaultView;
  return !!(n && e instanceof n.Element);
}, Wg = function(e) {
  switch (e.tagName) {
    case "INPUT":
      if (e.type !== "image")
        break;
    case "VIDEO":
    case "AUDIO":
    case "EMBED":
    case "OBJECT":
    case "CANVAS":
    case "IFRAME":
    case "IMG":
      return !0;
  }
  return !1;
}, Bo = typeof window < "u" ? window : {}, Ba = /* @__PURE__ */ new WeakMap(), Vu = /auto|scroll/, Kg = /^tb|vertical/, qg = /msie|trident/i.test(Bo.navigator && Bo.navigator.userAgent), yn = function(e) {
  return parseFloat(e || "0");
}, Xr = function(e, t, n) {
  return e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = !1), new Vg((n ? t : e) || 0, (n ? e : t) || 0);
}, Wu = br({
  devicePixelContentBoxSize: Xr(),
  borderBoxSize: Xr(),
  contentBoxSize: Xr(),
  contentRect: new Jd(0, 0, 0, 0)
}), tf = function(e, t) {
  if (t === void 0 && (t = !1), Ba.has(e) && !t)
    return Ba.get(e);
  if (ef(e))
    return Ba.set(e, Wu), Wu;
  var n = getComputedStyle(e), r = Gs(e) && e.ownerSVGElement && e.getBBox(), i = !qg && n.boxSizing === "border-box", c = Kg.test(n.writingMode || ""), f = !r && Vu.test(n.overflowY || ""), u = !r && Vu.test(n.overflowX || ""), h = r ? 0 : yn(n.paddingTop), g = r ? 0 : yn(n.paddingRight), w = r ? 0 : yn(n.paddingBottom), _ = r ? 0 : yn(n.paddingLeft), k = r ? 0 : yn(n.borderTopWidth), T = r ? 0 : yn(n.borderRightWidth), x = r ? 0 : yn(n.borderBottomWidth), S = r ? 0 : yn(n.borderLeftWidth), M = _ + g, O = h + w, I = S + T, K = k + x, L = u ? e.offsetHeight - K - e.clientHeight : 0, q = f ? e.offsetWidth - I - e.clientWidth : 0, N = i ? M + I : 0, H = i ? O + K : 0, F = r ? r.width : yn(n.width) - N - q, le = r ? r.height : yn(n.height) - H - L, re = F + M + q + I, fe = le + O + L + K, _e = br({
    devicePixelContentBoxSize: Xr(Math.round(F * devicePixelRatio), Math.round(le * devicePixelRatio), c),
    borderBoxSize: Xr(re, fe, c),
    contentBoxSize: Xr(F, le, c),
    contentRect: new Jd(_, h, F, le)
  });
  return Ba.set(e, _e), _e;
}, nf = function(e, t, n) {
  var r = tf(e, n), i = r.borderBoxSize, c = r.contentBoxSize, f = r.devicePixelContentBoxSize;
  switch (t) {
    case Uo.DEVICE_PIXEL_CONTENT_BOX:
      return f;
    case Uo.BORDER_BOX:
      return i;
    default:
      return c;
  }
}, Ug = function() {
  function e(t) {
    var n = tf(t);
    this.target = t, this.contentRect = n.contentRect, this.borderBoxSize = br([n.borderBoxSize]), this.contentBoxSize = br([n.contentBoxSize]), this.devicePixelContentBoxSize = br([n.devicePixelContentBoxSize]);
  }
  return e;
}(), rf = function(e) {
  if (ef(e))
    return 1 / 0;
  for (var t = 0, n = e.parentNode; n; )
    t += 1, n = n.parentNode;
  return t;
}, Yg = function() {
  var e = 1 / 0, t = [];
  yr.forEach(function(c) {
    if (c.activeTargets.length !== 0) {
      var f = [];
      c.activeTargets.forEach(function(u) {
        var h = new Ug(u.target), g = rf(u.target);
        f.push(h), u.lastReportedSize = nf(u.target, u.observedBox), g < e && (e = g);
      }), t.push(function() {
        c.callback.call(c.observer, f, c.observer);
      }), c.activeTargets.splice(0, c.activeTargets.length);
    }
  });
  for (var n = 0, r = t; n < r.length; n++) {
    var i = r[n];
    i();
  }
  return e;
}, Ku = function(e) {
  yr.forEach(function(t) {
    t.activeTargets.splice(0, t.activeTargets.length), t.skippedTargets.splice(0, t.skippedTargets.length), t.observationTargets.forEach(function(n) {
      n.isActive() && (rf(n.target) > e ? t.activeTargets.push(n) : t.skippedTargets.push(n));
    });
  });
}, Xg = function() {
  var e = 0;
  for (Ku(e); Bg(); )
    e = Yg(), Ku(e);
  return Fg() && Hg(), e > 0;
}, os, of = [], Gg = function() {
  return of.splice(0).forEach(function(e) {
    return e();
  });
}, Zg = function(e) {
  if (!os) {
    var t = 0, n = document.createTextNode(""), r = { characterData: !0 };
    new MutationObserver(function() {
      return Gg();
    }).observe(n, r), os = function() {
      n.textContent = "".concat(t ? t-- : t++);
    };
  }
  of.push(e), os();
}, Qg = function(e) {
  Zg(function() {
    requestAnimationFrame(e);
  });
}, Za = 0, Jg = function() {
  return !!Za;
}, em = 250, tm = { attributes: !0, characterData: !0, childList: !0, subtree: !0 }, qu = [
  "resize",
  "load",
  "transitionend",
  "animationend",
  "animationstart",
  "animationiteration",
  "keyup",
  "keydown",
  "mouseup",
  "mousedown",
  "mouseover",
  "mouseout",
  "blur",
  "focus"
], Uu = function(e) {
  return e === void 0 && (e = 0), Date.now() + e;
}, as = !1, nm = function() {
  function e() {
    var t = this;
    this.stopped = !0, this.listener = function() {
      return t.schedule();
    };
  }
  return e.prototype.run = function(t) {
    var n = this;
    if (t === void 0 && (t = em), !as) {
      as = !0;
      var r = Uu(t);
      Qg(function() {
        var i = !1;
        try {
          i = Xg();
        } finally {
          if (as = !1, t = r - Uu(), !Jg())
            return;
          i ? n.run(1e3) : t > 0 ? n.run(t) : n.start();
        }
      });
    }
  }, e.prototype.schedule = function() {
    this.stop(), this.run();
  }, e.prototype.observe = function() {
    var t = this, n = function() {
      return t.observer && t.observer.observe(document.body, tm);
    };
    document.body ? n() : Bo.addEventListener("DOMContentLoaded", n);
  }, e.prototype.start = function() {
    var t = this;
    this.stopped && (this.stopped = !1, this.observer = new MutationObserver(this.listener), this.observe(), qu.forEach(function(n) {
      return Bo.addEventListener(n, t.listener, !0);
    }));
  }, e.prototype.stop = function() {
    var t = this;
    this.stopped || (this.observer && this.observer.disconnect(), qu.forEach(function(n) {
      return Bo.removeEventListener(n, t.listener, !0);
    }), this.stopped = !0);
  }, e;
}(), Cs = new nm(), Yu = function(e) {
  !Za && e > 0 && Cs.start(), Za += e, !Za && Cs.stop();
}, rm = function(e) {
  return !Gs(e) && !Wg(e) && getComputedStyle(e).display === "inline";
}, om = function() {
  function e(t, n) {
    this.target = t, this.observedBox = n || Uo.CONTENT_BOX, this.lastReportedSize = {
      inlineSize: 0,
      blockSize: 0
    };
  }
  return e.prototype.isActive = function() {
    var t = nf(this.target, this.observedBox, !0);
    return rm(this.target) && (this.lastReportedSize = t), this.lastReportedSize.inlineSize !== t.inlineSize || this.lastReportedSize.blockSize !== t.blockSize;
  }, e;
}(), am = function() {
  function e(t, n) {
    this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = t, this.callback = n;
  }
  return e;
}(), Fa = /* @__PURE__ */ new WeakMap(), Xu = function(e, t) {
  for (var n = 0; n < e.length; n += 1)
    if (e[n].target === t)
      return n;
  return -1;
}, Ha = function() {
  function e() {
  }
  return e.connect = function(t, n) {
    var r = new am(t, n);
    Fa.set(t, r);
  }, e.observe = function(t, n, r) {
    var i = Fa.get(t), c = i.observationTargets.length === 0;
    Xu(i.observationTargets, n) < 0 && (c && yr.push(i), i.observationTargets.push(new om(n, r && r.box)), Yu(1), Cs.schedule());
  }, e.unobserve = function(t, n) {
    var r = Fa.get(t), i = Xu(r.observationTargets, n), c = r.observationTargets.length === 1;
    i >= 0 && (c && yr.splice(yr.indexOf(r), 1), r.observationTargets.splice(i, 1), Yu(-1));
  }, e.disconnect = function(t) {
    var n = this, r = Fa.get(t);
    r.observationTargets.slice().forEach(function(i) {
      return n.unobserve(t, i.target);
    }), r.activeTargets.splice(0, r.activeTargets.length);
  }, e;
}(), im = function() {
  function e(t) {
    if (arguments.length === 0)
      throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
    if (typeof t != "function")
      throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
    Ha.connect(this, t);
  }
  return e.prototype.observe = function(t, n) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!Hu(t))
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
    Ha.observe(this, t, n);
  }, e.prototype.unobserve = function(t) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!Hu(t))
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
    Ha.unobserve(this, t);
  }, e.prototype.disconnect = function() {
    Ha.disconnect(this);
  }, e.toString = function() {
    return "function ResizeObserver () { [polyfill code] }";
  }, e;
}();
const sm = /* @__PURE__ */ new WeakMap();
function lm(e) {
  for (let t = 0, n = e.length; t < n; ++t) {
    const r = e[t], i = sm.get(r.target);
    typeof i == "function" && i(r);
  }
}
new (lo && window.ResizeObserver || im)(
  lm
);
(function() {
  try {
    if (typeof document < "u") {
      var e = document.createElement("style");
      e.appendChild(document.createTextNode('.vgl-layout{--vgl-placeholder-bg: red;--vgl-placeholder-opacity: 20%;--vgl-placeholder-z-index: 2;--vgl-item-resizing-z-index: 3;--vgl-item-resizing-opacity: 60%;--vgl-item-dragging-z-index: 3;--vgl-item-dragging-opacity: 100%;--vgl-resizer-size: 10px;--vgl-resizer-border-color: #444;--vgl-resizer-border-width: 2px;position:relative;box-sizing:border-box;transition:height .2s ease}.vgl-item{position:absolute;box-sizing:border-box;transition:.2s ease;transition-property:left,top,right}.vgl-item--placeholder{z-index:var(--vgl-placeholder-z-index, 2);-webkit-user-select:none;-moz-user-select:none;user-select:none;background-color:var(--vgl-placeholder-bg, red);opacity:var(--vgl-placeholder-opacity, 20%);transition-duration:.1s}.vgl-item--no-touch{touch-action:none}.vgl-item--transform{right:auto;left:0;transition-property:transform}.vgl-item--transform.vgl-item--rtl{right:0;left:auto}.vgl-item--resizing{z-index:var(--vgl-item-resizing-z-index, 3);-webkit-user-select:none;-moz-user-select:none;user-select:none;opacity:var(--vgl-item-resizing-opacity, 60%)}.vgl-item--dragging{z-index:var(--vgl-item-dragging-z-index, 3);-webkit-user-select:none;-moz-user-select:none;user-select:none;opacity:var(--vgl-item-dragging-opacity, 100%);transition:none}.vgl-item__resizer{position:absolute;right:0;bottom:0;box-sizing:border-box;width:var(--vgl-resizer-size);height:var(--vgl-resizer-size);cursor:se-resize}.vgl-item__resizer:before{position:absolute;inset:0 3px 3px 0;content:"";border:0 solid var(--vgl-resizer-border-color);border-right-width:var(--vgl-resizer-border-width);border-bottom-width:var(--vgl-resizer-border-width)}.vgl-item__resizer--rtl{right:auto;left:0;cursor:sw-resize}.vgl-item__resizer--rtl:before{inset:0 0 3px 3px;border-right-width:0;border-bottom-width:var(--vgl-resizer-border-width);border-left-width:var(--vgl-resizer-border-width)}')), document.head.appendChild(e);
    }
  } catch (t) {
    console.error("vite-plugin-css-injected-by-js", t);
  }
})();
var um = typeof global == "object" && global && global.Object === Object && global;
const af = um;
var cm = typeof self == "object" && self && self.Object === Object && self, dm = af || cm || Function("return this")();
const Sn = dm;
var fm = Sn.Symbol;
const Jn = fm;
var sf = Object.prototype, pm = sf.hasOwnProperty, hm = sf.toString, Do = Jn ? Jn.toStringTag : void 0;
function vm(e) {
  var t = pm.call(e, Do), n = e[Do];
  try {
    e[Do] = void 0;
    var r = !0;
  } catch {
  }
  var i = hm.call(e);
  return r && (t ? e[Do] = n : delete e[Do]), i;
}
var gm = Object.prototype, mm = gm.toString;
function ym(e) {
  return mm.call(e);
}
var bm = "[object Null]", wm = "[object Undefined]", Gu = Jn ? Jn.toStringTag : void 0;
function uo(e) {
  return e == null ? e === void 0 ? wm : bm : Gu && Gu in Object(e) ? vm(e) : ym(e);
}
function co(e) {
  return e != null && typeof e == "object";
}
var xm = "[object Symbol]";
function Zs(e) {
  return typeof e == "symbol" || co(e) && uo(e) == xm;
}
function _m(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, i = Array(r); ++n < r; )
    i[n] = t(e[n], n, e);
  return i;
}
var Sm = Array.isArray;
const fo = Sm;
var km = 1 / 0, Zu = Jn ? Jn.prototype : void 0, Qu = Zu ? Zu.toString : void 0;
function lf(e) {
  if (typeof e == "string")
    return e;
  if (fo(e))
    return _m(e, lf) + "";
  if (Zs(e))
    return Qu ? Qu.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -km ? "-0" : t;
}
function Sr(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Em = "[object AsyncFunction]", Om = "[object Function]", Cm = "[object GeneratorFunction]", Tm = "[object Proxy]";
function uf(e) {
  if (!Sr(e))
    return !1;
  var t = uo(e);
  return t == Om || t == Cm || t == Em || t == Tm;
}
var Mm = Sn["__core-js_shared__"];
const is = Mm;
var Ju = function() {
  var e = /[^.]+$/.exec(is && is.keys && is.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Pm(e) {
  return !!Ju && Ju in e;
}
var Am = Function.prototype, jm = Am.toString;
function Pr(e) {
  if (e != null) {
    try {
      return jm.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Im = /[\\^$.*+?()[\]{}|]/g, Dm = /^\[object .+?Constructor\]$/, $m = Function.prototype, zm = Object.prototype, Nm = $m.toString, Rm = zm.hasOwnProperty, Lm = RegExp(
  "^" + Nm.call(Rm).replace(Im, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Bm(e) {
  if (!Sr(e) || Pm(e))
    return !1;
  var t = uf(e) ? Lm : Dm;
  return t.test(Pr(e));
}
function Fm(e, t) {
  return e == null ? void 0 : e[t];
}
function Ar(e, t) {
  var n = Fm(e, t);
  return Bm(n) ? n : void 0;
}
var Hm = Ar(Sn, "WeakMap");
const Ts = Hm;
var ec = Object.create, Vm = function() {
  function e() {
  }
  return function(t) {
    if (!Sr(t))
      return {};
    if (ec)
      return ec(t);
    e.prototype = t;
    var n = new e();
    return e.prototype = void 0, n;
  };
}();
const Wm = Vm;
function Km(e, t) {
  var n = -1, r = e.length;
  for (t || (t = Array(r)); ++n < r; )
    t[n] = e[n];
  return t;
}
var qm = function() {
  try {
    var e = Ar(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
const tc = qm;
function Um(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1; )
    ;
  return e;
}
var Ym = 9007199254740991, Xm = /^(?:0|[1-9]\d*)$/;
function cf(e, t) {
  var n = typeof e;
  return t = t ?? Ym, !!t && (n == "number" || n != "symbol" && Xm.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function df(e, t, n) {
  t == "__proto__" && tc ? tc(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function ff(e, t) {
  return e === t || e !== e && t !== t;
}
var Gm = Object.prototype, Zm = Gm.hasOwnProperty;
function Qs(e, t, n) {
  var r = e[t];
  (!(Zm.call(e, t) && ff(r, n)) || n === void 0 && !(t in e)) && df(e, t, n);
}
function di(e, t, n, r) {
  var i = !n;
  n || (n = {});
  for (var c = -1, f = t.length; ++c < f; ) {
    var u = t[c], h = r ? r(n[u], e[u], u, n, e) : void 0;
    h === void 0 && (h = e[u]), i ? df(n, u, h) : Qs(n, u, h);
  }
  return n;
}
var Qm = 9007199254740991;
function pf(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Qm;
}
function hf(e) {
  return e != null && pf(e.length) && !uf(e);
}
var Jm = Object.prototype;
function Js(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || Jm;
  return e === n;
}
function e0(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var t0 = "[object Arguments]";
function nc(e) {
  return co(e) && uo(e) == t0;
}
var vf = Object.prototype, n0 = vf.hasOwnProperty, r0 = vf.propertyIsEnumerable, o0 = nc(function() {
  return arguments;
}()) ? nc : function(e) {
  return co(e) && n0.call(e, "callee") && !r0.call(e, "callee");
};
const a0 = o0;
function i0() {
  return !1;
}
var gf = typeof exports == "object" && exports && !exports.nodeType && exports, rc = gf && typeof module == "object" && module && !module.nodeType && module, s0 = rc && rc.exports === gf, oc = s0 ? Sn.Buffer : void 0, l0 = oc ? oc.isBuffer : void 0, u0 = l0 || i0;
const mf = u0;
var c0 = "[object Arguments]", d0 = "[object Array]", f0 = "[object Boolean]", p0 = "[object Date]", h0 = "[object Error]", v0 = "[object Function]", g0 = "[object Map]", m0 = "[object Number]", y0 = "[object Object]", b0 = "[object RegExp]", w0 = "[object Set]", x0 = "[object String]", _0 = "[object WeakMap]", S0 = "[object ArrayBuffer]", k0 = "[object DataView]", E0 = "[object Float32Array]", O0 = "[object Float64Array]", C0 = "[object Int8Array]", T0 = "[object Int16Array]", M0 = "[object Int32Array]", P0 = "[object Uint8Array]", A0 = "[object Uint8ClampedArray]", j0 = "[object Uint16Array]", I0 = "[object Uint32Array]", dt = {};
dt[E0] = dt[O0] = dt[C0] = dt[T0] = dt[M0] = dt[P0] = dt[A0] = dt[j0] = dt[I0] = !0;
dt[c0] = dt[d0] = dt[S0] = dt[f0] = dt[k0] = dt[p0] = dt[h0] = dt[v0] = dt[g0] = dt[m0] = dt[y0] = dt[b0] = dt[w0] = dt[x0] = dt[_0] = !1;
function D0(e) {
  return co(e) && pf(e.length) && !!dt[uo(e)];
}
function el(e) {
  return function(t) {
    return e(t);
  };
}
var yf = typeof exports == "object" && exports && !exports.nodeType && exports, Fo = yf && typeof module == "object" && module && !module.nodeType && module, $0 = Fo && Fo.exports === yf, ss = $0 && af.process, z0 = function() {
  try {
    var e = Fo && Fo.require && Fo.require("util").types;
    return e || ss && ss.binding && ss.binding("util");
  } catch {
  }
}();
const Jr = z0;
var ac = Jr && Jr.isTypedArray, N0 = ac ? el(ac) : D0;
const R0 = N0;
var L0 = Object.prototype, B0 = L0.hasOwnProperty;
function bf(e, t) {
  var n = fo(e), r = !n && a0(e), i = !n && !r && mf(e), c = !n && !r && !i && R0(e), f = n || r || i || c, u = f ? e0(e.length, String) : [], h = u.length;
  for (var g in e)
    (t || B0.call(e, g)) && !(f && // Safari 9 has enumerable `arguments.length` in strict mode.
    (g == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (g == "offset" || g == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    c && (g == "buffer" || g == "byteLength" || g == "byteOffset") || // Skip index properties.
    cf(g, h))) && u.push(g);
  return u;
}
function wf(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var F0 = wf(Object.keys, Object);
const H0 = F0;
var V0 = Object.prototype, W0 = V0.hasOwnProperty;
function K0(e) {
  if (!Js(e))
    return H0(e);
  var t = [];
  for (var n in Object(e))
    W0.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function tl(e) {
  return hf(e) ? bf(e) : K0(e);
}
function q0(e) {
  var t = [];
  if (e != null)
    for (var n in Object(e))
      t.push(n);
  return t;
}
var U0 = Object.prototype, Y0 = U0.hasOwnProperty;
function X0(e) {
  if (!Sr(e))
    return q0(e);
  var t = Js(e), n = [];
  for (var r in e)
    r == "constructor" && (t || !Y0.call(e, r)) || n.push(r);
  return n;
}
function nl(e) {
  return hf(e) ? bf(e, !0) : X0(e);
}
var G0 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Z0 = /^\w*$/;
function Q0(e, t) {
  if (fo(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Zs(e) ? !0 : Z0.test(e) || !G0.test(e) || t != null && e in Object(t);
}
var J0 = Ar(Object, "create");
const Yo = J0;
function ey() {
  this.__data__ = Yo ? Yo(null) : {}, this.size = 0;
}
function ty(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var ny = "__lodash_hash_undefined__", ry = Object.prototype, oy = ry.hasOwnProperty;
function ay(e) {
  var t = this.__data__;
  if (Yo) {
    var n = t[e];
    return n === ny ? void 0 : n;
  }
  return oy.call(t, e) ? t[e] : void 0;
}
var iy = Object.prototype, sy = iy.hasOwnProperty;
function ly(e) {
  var t = this.__data__;
  return Yo ? t[e] !== void 0 : sy.call(t, e);
}
var uy = "__lodash_hash_undefined__";
function cy(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Yo && t === void 0 ? uy : t, this;
}
function kr(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
kr.prototype.clear = ey;
kr.prototype.delete = ty;
kr.prototype.get = ay;
kr.prototype.has = ly;
kr.prototype.set = cy;
function dy() {
  this.__data__ = [], this.size = 0;
}
function fi(e, t) {
  for (var n = e.length; n--; )
    if (ff(e[n][0], t))
      return n;
  return -1;
}
var fy = Array.prototype, py = fy.splice;
function hy(e) {
  var t = this.__data__, n = fi(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : py.call(t, n, 1), --this.size, !0;
}
function vy(e) {
  var t = this.__data__, n = fi(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function gy(e) {
  return fi(this.__data__, e) > -1;
}
function my(e, t) {
  var n = this.__data__, r = fi(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function zn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
zn.prototype.clear = dy;
zn.prototype.delete = hy;
zn.prototype.get = vy;
zn.prototype.has = gy;
zn.prototype.set = my;
var yy = Ar(Sn, "Map");
const Xo = yy;
function by() {
  this.size = 0, this.__data__ = {
    hash: new kr(),
    map: new (Xo || zn)(),
    string: new kr()
  };
}
function wy(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function pi(e, t) {
  var n = e.__data__;
  return wy(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function xy(e) {
  var t = pi(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function _y(e) {
  return pi(this, e).get(e);
}
function Sy(e) {
  return pi(this, e).has(e);
}
function ky(e, t) {
  var n = pi(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function er(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
er.prototype.clear = by;
er.prototype.delete = xy;
er.prototype.get = _y;
er.prototype.has = Sy;
er.prototype.set = ky;
var Ey = "Expected a function";
function rl(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Ey);
  var n = function() {
    var r = arguments, i = t ? t.apply(this, r) : r[0], c = n.cache;
    if (c.has(i))
      return c.get(i);
    var f = e.apply(this, r);
    return n.cache = c.set(i, f) || c, f;
  };
  return n.cache = new (rl.Cache || er)(), n;
}
rl.Cache = er;
var Oy = 500;
function Cy(e) {
  var t = rl(e, function(r) {
    return n.size === Oy && n.clear(), r;
  }), n = t.cache;
  return t;
}
var Ty = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, My = /\\(\\)?/g, Py = Cy(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Ty, function(n, r, i, c) {
    t.push(i ? c.replace(My, "$1") : r || n);
  }), t;
});
const Ay = Py;
function jy(e) {
  return e == null ? "" : lf(e);
}
function Iy(e, t) {
  return fo(e) ? e : Q0(e, t) ? [e] : Ay(jy(e));
}
var Dy = 1 / 0;
function $y(e) {
  if (typeof e == "string" || Zs(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -Dy ? "-0" : t;
}
function xf(e, t) {
  for (var n = -1, r = t.length, i = e.length; ++n < r; )
    e[i + n] = t[n];
  return e;
}
var zy = wf(Object.getPrototypeOf, Object);
const _f = zy;
function Ny() {
  this.__data__ = new zn(), this.size = 0;
}
function Ry(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function Ly(e) {
  return this.__data__.get(e);
}
function By(e) {
  return this.__data__.has(e);
}
var Fy = 200;
function Hy(e, t) {
  var n = this.__data__;
  if (n instanceof zn) {
    var r = n.__data__;
    if (!Xo || r.length < Fy - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new er(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
function po(e) {
  var t = this.__data__ = new zn(e);
  this.size = t.size;
}
po.prototype.clear = Ny;
po.prototype.delete = Ry;
po.prototype.get = Ly;
po.prototype.has = By;
po.prototype.set = Hy;
function Vy(e, t) {
  return e && di(t, tl(t), e);
}
function Wy(e, t) {
  return e && di(t, nl(t), e);
}
var Sf = typeof exports == "object" && exports && !exports.nodeType && exports, ic = Sf && typeof module == "object" && module && !module.nodeType && module, Ky = ic && ic.exports === Sf, sc = Ky ? Sn.Buffer : void 0, lc = sc ? sc.allocUnsafe : void 0;
function qy(e, t) {
  if (t)
    return e.slice();
  var n = e.length, r = lc ? lc(n) : new e.constructor(n);
  return e.copy(r), r;
}
function Uy(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, i = 0, c = []; ++n < r; ) {
    var f = e[n];
    t(f, n, e) && (c[i++] = f);
  }
  return c;
}
function kf() {
  return [];
}
var Yy = Object.prototype, Xy = Yy.propertyIsEnumerable, uc = Object.getOwnPropertySymbols, Gy = uc ? function(e) {
  return e == null ? [] : (e = Object(e), Uy(uc(e), function(t) {
    return Xy.call(e, t);
  }));
} : kf;
const ol = Gy;
function Zy(e, t) {
  return di(e, ol(e), t);
}
var Qy = Object.getOwnPropertySymbols, Jy = Qy ? function(e) {
  for (var t = []; e; )
    xf(t, ol(e)), e = _f(e);
  return t;
} : kf;
const Ef = Jy;
function eb(e, t) {
  return di(e, Ef(e), t);
}
function Of(e, t, n) {
  var r = t(e);
  return fo(e) ? r : xf(r, n(e));
}
function tb(e) {
  return Of(e, tl, ol);
}
function nb(e) {
  return Of(e, nl, Ef);
}
var rb = Ar(Sn, "DataView");
const Ms = rb;
var ob = Ar(Sn, "Promise");
const Ps = ob;
var ab = Ar(Sn, "Set");
const As = ab;
var cc = "[object Map]", ib = "[object Object]", dc = "[object Promise]", fc = "[object Set]", pc = "[object WeakMap]", hc = "[object DataView]", sb = Pr(Ms), lb = Pr(Xo), ub = Pr(Ps), cb = Pr(As), db = Pr(Ts), vr = uo;
(Ms && vr(new Ms(new ArrayBuffer(1))) != hc || Xo && vr(new Xo()) != cc || Ps && vr(Ps.resolve()) != dc || As && vr(new As()) != fc || Ts && vr(new Ts()) != pc) && (vr = function(e) {
  var t = uo(e), n = t == ib ? e.constructor : void 0, r = n ? Pr(n) : "";
  if (r)
    switch (r) {
      case sb:
        return hc;
      case lb:
        return cc;
      case ub:
        return dc;
      case cb:
        return fc;
      case db:
        return pc;
    }
  return t;
});
const al = vr;
var fb = Object.prototype, pb = fb.hasOwnProperty;
function hb(e) {
  var t = e.length, n = new e.constructor(t);
  return t && typeof e[0] == "string" && pb.call(e, "index") && (n.index = e.index, n.input = e.input), n;
}
var vb = Sn.Uint8Array;
const vc = vb;
function il(e) {
  var t = new e.constructor(e.byteLength);
  return new vc(t).set(new vc(e)), t;
}
function gb(e, t) {
  var n = t ? il(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.byteLength);
}
var mb = /\w*$/;
function yb(e) {
  var t = new e.constructor(e.source, mb.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var gc = Jn ? Jn.prototype : void 0, mc = gc ? gc.valueOf : void 0;
function bb(e) {
  return mc ? Object(mc.call(e)) : {};
}
function wb(e, t) {
  var n = t ? il(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.length);
}
var xb = "[object Boolean]", _b = "[object Date]", Sb = "[object Map]", kb = "[object Number]", Eb = "[object RegExp]", Ob = "[object Set]", Cb = "[object String]", Tb = "[object Symbol]", Mb = "[object ArrayBuffer]", Pb = "[object DataView]", Ab = "[object Float32Array]", jb = "[object Float64Array]", Ib = "[object Int8Array]", Db = "[object Int16Array]", $b = "[object Int32Array]", zb = "[object Uint8Array]", Nb = "[object Uint8ClampedArray]", Rb = "[object Uint16Array]", Lb = "[object Uint32Array]";
function Bb(e, t, n) {
  var r = e.constructor;
  switch (t) {
    case Mb:
      return il(e);
    case xb:
    case _b:
      return new r(+e);
    case Pb:
      return gb(e, n);
    case Ab:
    case jb:
    case Ib:
    case Db:
    case $b:
    case zb:
    case Nb:
    case Rb:
    case Lb:
      return wb(e, n);
    case Sb:
      return new r();
    case kb:
    case Cb:
      return new r(e);
    case Eb:
      return yb(e);
    case Ob:
      return new r();
    case Tb:
      return bb(e);
  }
}
function Fb(e) {
  return typeof e.constructor == "function" && !Js(e) ? Wm(_f(e)) : {};
}
var Hb = "[object Map]";
function Vb(e) {
  return co(e) && al(e) == Hb;
}
var yc = Jr && Jr.isMap, Wb = yc ? el(yc) : Vb;
const Kb = Wb;
var qb = "[object Set]";
function Ub(e) {
  return co(e) && al(e) == qb;
}
var bc = Jr && Jr.isSet, Yb = bc ? el(bc) : Ub;
const Xb = Yb;
var Gb = 1, Zb = 2, Qb = 4, Cf = "[object Arguments]", Jb = "[object Array]", e1 = "[object Boolean]", t1 = "[object Date]", n1 = "[object Error]", Tf = "[object Function]", r1 = "[object GeneratorFunction]", o1 = "[object Map]", a1 = "[object Number]", Mf = "[object Object]", i1 = "[object RegExp]", s1 = "[object Set]", l1 = "[object String]", u1 = "[object Symbol]", c1 = "[object WeakMap]", d1 = "[object ArrayBuffer]", f1 = "[object DataView]", p1 = "[object Float32Array]", h1 = "[object Float64Array]", v1 = "[object Int8Array]", g1 = "[object Int16Array]", m1 = "[object Int32Array]", y1 = "[object Uint8Array]", b1 = "[object Uint8ClampedArray]", w1 = "[object Uint16Array]", x1 = "[object Uint32Array]", it = {};
it[Cf] = it[Jb] = it[d1] = it[f1] = it[e1] = it[t1] = it[p1] = it[h1] = it[v1] = it[g1] = it[m1] = it[o1] = it[a1] = it[Mf] = it[i1] = it[s1] = it[l1] = it[u1] = it[y1] = it[b1] = it[w1] = it[x1] = !0;
it[n1] = it[Tf] = it[c1] = !1;
function Ho(e, t, n, r, i, c) {
  var f, u = t & Gb, h = t & Zb, g = t & Qb;
  if (n && (f = i ? n(e, r, i, c) : n(e)), f !== void 0)
    return f;
  if (!Sr(e))
    return e;
  var w = fo(e);
  if (w) {
    if (f = hb(e), !u)
      return Km(e, f);
  } else {
    var _ = al(e), k = _ == Tf || _ == r1;
    if (mf(e))
      return qy(e, u);
    if (_ == Mf || _ == Cf || k && !i) {
      if (f = h || k ? {} : Fb(e), !u)
        return h ? eb(e, Wy(f, e)) : Zy(e, Vy(f, e));
    } else {
      if (!it[_])
        return i ? e : {};
      f = Bb(e, _, u);
    }
  }
  c || (c = new po());
  var T = c.get(e);
  if (T)
    return T;
  c.set(e, f), Xb(e) ? e.forEach(function(M) {
    f.add(Ho(M, t, n, M, e, c));
  }) : Kb(e) && e.forEach(function(M, O) {
    f.set(O, Ho(M, t, n, O, e, c));
  });
  var x = g ? h ? nb : tb : h ? nl : tl, S = w ? void 0 : x(e);
  return Um(S || e, function(M, O) {
    S && (O = M, M = e[O]), Qs(f, O, Ho(M, t, n, O, e, c));
  }), f;
}
var _1 = 4;
function S1(e) {
  return Ho(e, _1);
}
var k1 = 1, E1 = 4;
function O1(e) {
  return Ho(e, k1 | E1);
}
function C1(e, t, n, r) {
  if (!Sr(e))
    return e;
  t = Iy(t, e);
  for (var i = -1, c = t.length, f = c - 1, u = e; u != null && ++i < c; ) {
    var h = $y(t[i]), g = n;
    if (h === "__proto__" || h === "constructor" || h === "prototype")
      return e;
    if (i != f) {
      var w = u[h];
      g = r ? r(w, h, u) : void 0, g === void 0 && (g = Sr(w) ? w : cf(t[i + 1]) ? [] : {});
    }
    Qs(u, h, g), u = u[h];
  }
  return e;
}
function T1(e, t, n) {
  return e == null ? e : C1(e, t, n);
}
let Pf = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
var Af = { exports: {} };
(function(e) {
  var t = Object.prototype.hasOwnProperty, n = "~";
  function r() {
  }
  Object.create && (r.prototype = /* @__PURE__ */ Object.create(null), new r().__proto__ || (n = !1));
  function i(h, g, w) {
    this.fn = h, this.context = g, this.once = w || !1;
  }
  function c(h, g, w, _, k) {
    if (typeof w != "function")
      throw new TypeError("The listener must be a function");
    var T = new i(w, _ || h, k), x = n ? n + g : g;
    return h._events[x] ? h._events[x].fn ? h._events[x] = [h._events[x], T] : h._events[x].push(T) : (h._events[x] = T, h._eventsCount++), h;
  }
  function f(h, g) {
    --h._eventsCount === 0 ? h._events = new r() : delete h._events[g];
  }
  function u() {
    this._events = new r(), this._eventsCount = 0;
  }
  u.prototype.eventNames = function() {
    var g = [], w, _;
    if (this._eventsCount === 0)
      return g;
    for (_ in w = this._events)
      t.call(w, _) && g.push(n ? _.slice(1) : _);
    return Object.getOwnPropertySymbols ? g.concat(Object.getOwnPropertySymbols(w)) : g;
  }, u.prototype.listeners = function(g) {
    var w = n ? n + g : g, _ = this._events[w];
    if (!_)
      return [];
    if (_.fn)
      return [_.fn];
    for (var k = 0, T = _.length, x = new Array(T); k < T; k++)
      x[k] = _[k].fn;
    return x;
  }, u.prototype.listenerCount = function(g) {
    var w = n ? n + g : g, _ = this._events[w];
    return _ ? _.fn ? 1 : _.length : 0;
  }, u.prototype.emit = function(g, w, _, k, T, x) {
    var S = n ? n + g : g;
    if (!this._events[S])
      return !1;
    var M = this._events[S], O = arguments.length, I, K;
    if (M.fn) {
      switch (M.once && this.removeListener(g, M.fn, void 0, !0), O) {
        case 1:
          return M.fn.call(M.context), !0;
        case 2:
          return M.fn.call(M.context, w), !0;
        case 3:
          return M.fn.call(M.context, w, _), !0;
        case 4:
          return M.fn.call(M.context, w, _, k), !0;
        case 5:
          return M.fn.call(M.context, w, _, k, T), !0;
        case 6:
          return M.fn.call(M.context, w, _, k, T, x), !0;
      }
      for (K = 1, I = new Array(O - 1); K < O; K++)
        I[K - 1] = arguments[K];
      M.fn.apply(M.context, I);
    } else {
      var L = M.length, q;
      for (K = 0; K < L; K++)
        switch (M[K].once && this.removeListener(g, M[K].fn, void 0, !0), O) {
          case 1:
            M[K].fn.call(M[K].context);
            break;
          case 2:
            M[K].fn.call(M[K].context, w);
            break;
          case 3:
            M[K].fn.call(M[K].context, w, _);
            break;
          case 4:
            M[K].fn.call(M[K].context, w, _, k);
            break;
          default:
            if (!I)
              for (q = 1, I = new Array(O - 1); q < O; q++)
                I[q - 1] = arguments[q];
            M[K].fn.apply(M[K].context, I);
        }
    }
    return !0;
  }, u.prototype.on = function(g, w, _) {
    return c(this, g, w, _, !1);
  }, u.prototype.once = function(g, w, _) {
    return c(this, g, w, _, !0);
  }, u.prototype.removeListener = function(g, w, _, k) {
    var T = n ? n + g : g;
    if (!this._events[T])
      return this;
    if (!w)
      return f(this, T), this;
    var x = this._events[T];
    if (x.fn)
      x.fn === w && (!k || x.once) && (!_ || x.context === _) && f(this, T);
    else {
      for (var S = 0, M = [], O = x.length; S < O; S++)
        (x[S].fn !== w || k && !x[S].once || _ && x[S].context !== _) && M.push(x[S]);
      M.length ? this._events[T] = M.length === 1 ? M[0] : M : f(this, T);
    }
    return this;
  }, u.prototype.removeAllListeners = function(g) {
    var w;
    return g ? (w = n ? n + g : g, this._events[w] && f(this, w)) : (this._events = new r(), this._eventsCount = 0), this;
  }, u.prototype.off = u.prototype.removeListener, u.prototype.addListener = u.prototype.on, u.prefixed = n, u.EventEmitter = u, e.exports = u;
})(Af);
var M1 = Af.exports;
const P1 = /* @__PURE__ */ Gd(M1);
var A1 = Object.defineProperty, j1 = Object.getOwnPropertyDescriptor, pn = (e, t, n, r) => {
  for (var i = r > 1 ? void 0 : r ? j1(t, n) : t, c = e.length - 1, f; c >= 0; c--)
    (f = e[c]) && (i = (r ? f(t, n, i) : f(i)) || i);
  return r && i && A1(t, n, i), i;
};
function I1() {
  const e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map();
  async function n(i) {
    if (t.has(i))
      return;
    t.set(i, null);
    const f = await (await fetch(new URL("/alioth", i).href)).json(), { project: u, entry: h } = f;
    if (e.has(u))
      throw new Error("已存在同名项目");
    const g = document.createElement("script");
    g.src = new URL("/@vite/client", i).href, g.type = "module", document.body.appendChild(g);
    for (const w in h)
      h[w] = new URL(h[w], i).href, t.set(h[w], u);
    e.set(u, h), t.set(i, u);
  }
  async function r(i, c, f) {
    const u = e.get(i);
    if (!u || !(c in u))
      return;
    const h = u[c], g = await import(h);
    return {
      module: g,
      data: f && g[f],
      url: h
    };
  }
  return {
    connect: n,
    projectMap: e,
    dynamicImport: r,
    urlMap: t
  };
}
function D1(e = {}) {
  let t = !1;
  const n = {
    isActive: !0,
    current: -1,
    queue: [],
    commands: {},
    commandArray: [],
    destroyArray: []
  }, r = (u) => {
    u.name in n.commands || (t && u.init && n.destroyArray.push(u.init()), n.commandArray.push(u), n.commands[u.name] = () => {
      const { redo: h, undo: g } = u.execute() || {};
      if (!u.pushQueue)
        return;
      let { queue: w, current: _ } = n;
      w.length > 0 && (w = w.slice(0, _ + 1), n.queue = w), w.push({
        redo: h,
        undo: g
      }), n.current = _ + 1;
    });
  };
  e.redo && r({
    name: "redo",
    keyboard: "ctrl+y",
    execute() {
      const u = n.queue[n.current + 1];
      u && (u.redo && u.redo(), n.current++);
    }
  }), e.undo && r({
    name: "undo",
    keyboard: "ctrl+z",
    execute() {
      if (n.current === -1)
        return;
      const u = n.queue[n.current];
      u && (u.undo && u.undo(), n.current--);
    }
  });
  const i = (() => {
    const u = (g) => {
      const { ctrlKey: w, key: _, altKey: k, shiftKey: T } = g;
      let x = [];
      k && x.push("alt"), w && x.push("ctrl"), T && x.push("shift"), x.push(_.toLowerCase()), x = x.join("+"), n.commandArray.forEach(({ keyboard: S, name: M }) => {
        S && S === x && (n.commands[M](), g.preventDefault());
      });
    };
    return () => (window.addEventListener("keydown", u), () => {
      window.removeEventListener("keydown", u);
    });
  })();
  n.destroyArray.push(i());
  function c() {
    t || (t = !0, n.commandArray.forEach(
      (u) => u.init && n.destroyArray.push(u.init())
    ));
  }
  function f() {
    n.isActive && n.destroyArray.forEach((u) => u && u());
  }
  return { state: n, register: r, initialize: c, destroy: f };
}
function $1(e) {
  if (e.endsWith(".css")) {
    const t = document.createElement("link");
    return t.href = e, t.rel = "stylesheet", t.type = "text/css", document.head.appendChild(t), new Promise((n, r) => {
      t.onload = n, t.onerror = r;
    });
  } else
    return import(e);
}
var wc = class {
  constructor(e) {
    this.id = Pf(), this.children = [], this.timeout = 800, this.attrs = e || {};
  }
  get cloneChilds() {
    return S1(this.children);
  }
  get index() {
    var e;
    return (e = this.parent) == null ? void 0 : e.children.findIndex((t) => t.id === this.id);
  }
  bind(e) {
    this.doc = e, this.doc.controller && this.doc.controller.create(this.id, this.attrs);
  }
  setAttributes(e) {
    for (const t in e)
      this.set(t, e[t]);
  }
  toJSON() {
    return {
      id: this.id,
      attrs: this.attrs,
      children: this.children.map((e) => e.toJSON())
    };
  }
  set(e, t) {
    var n;
    this._set(e, t), (n = this.doc) != null && n.controller && this.doc.controller.set(this.id, e, t);
  }
  _set(e, t) {
    this.doc.emit("set", { path: e, value: t }), T1(this.attrs, e, t);
  }
  insert(e, t) {
    var n;
    !t && t !== 0 && (t = this.children.length), this._insert(e, t), (n = this.doc) != null && n.controller && this.doc.controller.insert(this.id, e.id, t);
  }
  _insert(e, t) {
    e.parent = this, this.doc.emit("insert", { parent: this, child: e, index: t }), this.children.splice(t, 0, e);
  }
  remove(e) {
    var n;
    const t = this._remove(e);
    (n = this.doc) != null && n.controller && t && this.doc.controller.delete(this.id, t.id, e);
  }
  _removeNode(e) {
    this.children.splice(this.children.findIndex((t) => t.id === e.id), 1);
  }
  _remove(e) {
    const t = this.children.splice(e, 1)[0], { doc: n } = this;
    function r(i) {
      i && (n.blockMap.delete(i.id), n.emit("remove", { node: i }), i.parent = null, i.children.forEach(r));
    }
    return r(t), t;
  }
  findById(e) {
    for (const t of this.children) {
      if (t.id === e)
        return t;
      if (t.findById(e))
        return t.findById(e);
    }
  }
  contains(e) {
    return this.id === e.id || !!this.findById(e.id);
  }
  findByAttrs(e) {
    const t = [];
    for (const n of this.children)
      e(n.attrs) && t.push(n), t.push(...n.findByAttrs(e));
    return t;
  }
}, z1 = class extends P1 {
  constructor(e, t = Pf()) {
    super(), this.id = t, this.blockMap = /* @__PURE__ */ new Map(), this.data = {}, this.root = this.createNode(e, "root");
  }
  get(e) {
    return this.blockMap.get(e);
  }
  bind(e) {
    this.controller = e, this.root.bind(this);
  }
  clean() {
    this.blockMap.forEach((e, t, n) => {
      e.parent || n.delete(t);
    });
  }
  createNode(e, t) {
    const n = new wc(e);
    return t && (n.id = t), n.bind(this), t === "root" && (this.root = n), this.blockMap.set(n.id, n), this.emit("create", t), n;
  }
  _createNode(e, t) {
    if (t && this.blockMap.has(t))
      return this.blockMap.get(t);
    const n = new wc(e);
    return t && (n.id = t), n.doc = this, t === "root" && (this.root = n), this.blockMap.set(n.id, n), this.emit("create", t), n;
  }
  removeNode(e) {
    e.parent && (e.parent.remove(e.index), this.blockMap.delete(e.id));
  }
  _removeNode(e) {
    e.parent ? (e.parent._remove(e.index), this.blockMap.delete(e.id)) : this.blockMap.delete(e.id);
  }
  select(e, t = "activeNode") {
    return this[t] = e;
  }
  cancel(e = "activeNode") {
    return this[e] = void 0;
  }
  load(e) {
    const t = this;
    function n(r) {
      const i = t.createNode(r.attrs, r.id);
      return r.children.forEach((c, f) => {
        const u = n(c);
        i.insert(u, f);
      }), i;
    }
    return this.controller ? this.controller.ydoc.transact(() => {
      this.root = n(e);
    }) : this.root = n(e), this;
  }
  transact(e, t) {
    this.controller && this.controller.ydoc.transact(e, t);
  }
}, js = class {
  constructor() {
    this.containerAttrs = {}, this.doc = new z1({}, "model");
  }
  _init() {
    window.$alioth_container = (e) => this.containerAttrs = e;
  }
  get activePage() {
    return this.find(this.activeId);
  }
  get activeNode() {
    return this.doc.activeNode;
  }
  get pages() {
    return this.doc.root.children;
  }
  active(e) {
    this.activeId !== e && this.doc.root.children.some((t) => t.id === e) && (this.activeId = e);
  }
  add(e) {
    const t = this.doc.createNode(this.containerAttrs, e);
    return this.doc.root.insert(t), t;
  }
  remove(e) {
    const { children: t } = this.doc.root, n = t.findIndex((r) => r.id === e);
    this.doc.root.remove(n), t.length > 1 ? this.activeId = t[n - 1].id : this.activeId = "";
  }
  find(e) {
    return this.doc.root.children.find((t) => t.id === e);
  }
  index(e) {
    return this.doc.root.children.findIndex((t) => e === t.id);
  }
  load(e) {
    e = typeof e == "string" ? JSON.parse(e) : e, this.doc.load(e);
  }
  toJSON() {
    return this.doc.root;
  }
};
pn([
  ci
], js.prototype, "_init", 1);
js = pn([
  io,
  so("doc")
], js);
var N1 = (e) => {
  e.dataTransfer.dropEffect = "move";
}, R1 = (e) => {
  e.preventDefault();
}, L1 = (e) => {
  e.dataTransfer.dropEffect = "none";
}, xc = class {
  constructor() {
    this.moduleMap = /* @__PURE__ */ new Map(), this.data = {};
  }
  add(e, t) {
    this.moduleMap.set(e, t);
  }
  del(e) {
    this.moduleMap.delete(e);
  }
  execCb(e, t, n) {
    var r;
    (r = this.moduleMap.get(e)) == null || r(t, n);
  }
  dragStart(e) {
    this.listenController = new AbortController();
    const { signal: t } = this.listenController;
    for (const [n] of this.moduleMap)
      n.addEventListener("dragenter", N1, { signal: t }), n.addEventListener("dragover", R1, { signal: t }), n.addEventListener("dragleave", L1, { signal: t }), n.addEventListener("drop", (r) => {
        this.execCb(n, e, r);
      }, { signal: t });
  }
  dragEnd() {
    this.listenController.abort(), this.listenController = void 0;
  }
};
xc = pn([
  io,
  so("drag")
], xc);
var { register: _c, initialize: B1, state: F1 } = D1({ undo: !0, redo: !0 }), Sc = class {
  constructor() {
    this.state = F1, this.register = _c, window.$alioth_eventStack = _c, B1();
  }
};
Sc = pn([
  io,
  so("event")
], Sc);
var { connect: H1, dynamicImport: V1, urlMap: fP, projectMap: W1 } = I1(), Is = class {
  constructor() {
    this.graph = {};
  }
  _init() {
    window.$alioth_update = (e, t) => {
      this.graph[e.split("?")[0]] = this.importModule(t);
    }, window.$alioth_state = (e) => {
      var t;
      return (t = this.setState) == null ? void 0 : t.call(this, e);
    };
  }
  async connectVite(e) {
    await H1(e);
    for (const [t, n] of W1.entries())
      for (const r in n) {
        const { module: i, url: c } = await V1(t, r);
        this.graph[c] = this.importModule(i);
      }
  }
  async connectPreset(e) {
    e.forEach(async (t) => {
      try {
        const n = await $1(t);
        t.endsWith(".css") ? this.graph[t] = {} : this.graph[t] = this.importModule(n);
      } catch {
        window.$alioth_error("LoadError", `load dependence ${t} failed`);
      }
    });
  }
  importModule(e) {
    var n;
    const t = {};
    for (const r in e)
      if (typeof e[r] == "object" && e[r].alioth) {
        const { alioth: i, data: c } = e[r];
        (n = window[`$alioth_${i}`]) == null || n.call(window, c), t[r] = e[r];
      }
    return t;
  }
};
pn([
  ci
], Is.prototype, "_init", 1);
Is = pn([
  io,
  so("import")
], Is);
var Ds = class {
  constructor() {
    this.commands = [];
  }
  _init() {
    window.$alioth_command = this.register.bind(this);
  }
  register(e) {
    this.commands.push(e);
  }
  input(e, t) {
    var n;
    return (n = this.commands.find((r) => r.key === e)) == null ? void 0 : n.exec(t);
  }
};
pn([
  ci
], Ds.prototype, "_init", 1);
Ds = pn([
  io,
  so("command")
], Ds);
var ri = class {
  _init() {
    window.$alioth_error = this.setErrorHandler.bind(this);
  }
  setErrorHandler(e) {
    this.errorHandlers.push(e);
  }
  watchError({ error: e, type: t }) {
    const n = this.errorHandlers.find((r) => r.type === t);
    n ? n.handler(e) : console.error(`[Alioth]: ${t}`);
  }
};
pn([
  ci
], ri.prototype, "_init", 1);
pn([
  fg("custom_error")
], ri.prototype, "watchError", 1);
ri = pn([
  io,
  so("error")
], ri);
var K1 = Object.defineProperty, q1 = Object.getOwnPropertyDescriptor, jf = (e, t, n, r) => {
  for (var i = r > 1 ? void 0 : r ? q1(t, n) : t, c = e.length - 1, f; c >= 0; c--)
    (f = e[c]) && (i = (r ? f(t, n, i) : f(i)) || i);
  return r && i && K1(t, n, i), i;
};
function U1() {
  const e = [], t = document.getElementsByTagName("style");
  for (let r = 0; r < t.length; r++) {
    const i = t[r].cloneNode();
    i.innerHTML = t[r].innerHTML, e.push(i);
  }
  const n = document.getElementsByTagName("link");
  for (let r = 0; r < n.length; r++)
    n[r].rel === "stylesheet" && e.push(n[r].cloneNode());
  return e;
}
function Y1(e) {
  e.contentWindow.document.documentElement.classList.add("al-canvas");
}
function X1(e, t) {
  const n = e.contentWindow.document;
  if (t) {
    const r = document.createElement("style");
    r.innerHTML = t, n.head.append(r);
  }
  n.head.append(...U1());
}
function G1(e) {
  const t = e.contentWindow.document, n = document.querySelectorAll("script[data-alioth]");
  for (let r = 0; r < n.length; r++) {
    const i = document.createElement("script");
    i.src = n[r].src, t.head.append(i);
  }
}
function Z1(e) {
  const t = e.contentWindow, { x: n, y: r } = e.getBoundingClientRect();
  ["click", "mousedown", "mousemove", "mouseup"].forEach((i) => {
    t.addEventListener(i, (c) => {
      const f = Q1(c);
      f.clientX += n, f.clientY += r;
      const u = new MouseEvent(i, f);
      window.dispatchEvent(u);
    });
  }), ["keydown", "keyup"].forEach((i) => {
    t.addEventListener(i, (c) => {
      const f = J1(c), u = new KeyboardEvent(i, f);
      window.dispatchEvent(u);
    });
  });
}
var pr = {}, kc = !1;
Ae({
  props: {
    uuid: String,
    styleSheet: String,
    width: { type: Number, required: !0 },
    height: { type: Number, required: !0 }
  },
  setup(e, { slots: t }) {
    return () => {
      if (!t.default)
        return null;
      const n = t.default();
      async function r() {
        var c;
        const i = this;
        if (G1(i), X1(i), Y1(i), Z1(i), !kc) {
          const f = document.head.appendChild.bind(document.head), u = document.head.removeChild.bind(document.head);
          Object.defineProperty(document.head, "appendChild", {
            configurable: !0,
            get() {
              return (h) => {
                var g;
                h instanceof HTMLStyleElement && h.getAttribute("data-vite-dev-id") ? (g = i.contentWindow) == null || g.document.head.appendChild(h) : f(h);
              };
            }
          }), Object.defineProperty(document.head, "removeChild", {
            configurable: !0,
            get() {
              return (h) => {
                var g;
                h instanceof HTMLStyleElement && h.getAttribute("data-vite-dev-id") ? (g = i.contentWindow) == null || g.document.head.removeChild(h) : u(h);
              };
            }
          }), kc = !0;
        }
        qd(n[0], (c = i.contentWindow) == null ? void 0 : c.document.body);
      }
      return pr[e.uuid] || (pr[e.uuid] = document.createElement("iframe"), pr[e.uuid].onload = r, pr[e.uuid].classList.add("iframebox")), be(() => [e.width, e.height], (i) => {
        pr[e.uuid].width = `${i[0]}`, pr[e.uuid].height = `${i[1]}`;
      }, {
        immediate: !0
      }), an("div", {
        class: "al-window",
        onVnodeMounted(i) {
          i.el.appendChild(pr[e.uuid]);
        }
      });
    };
  }
});
function Q1(e) {
  const t = {};
  return ["clientY", "clientX", "screenX", "screenY", "ctrlKey", "shiftKey", "altKey", "metaKey", "button"].forEach((r) => {
    t[r] = e[r];
  }), t;
}
function J1(e) {
  const t = {};
  return ["key", "code", "location", "ctrlKey", "shiftKey", "altKey", "metaKey", "repeat", "isComposing", "charCode", "keyCode", "which"].forEach((r) => {
    t[r] = e[r];
  }), t;
}
var Ec = cn(/* @__PURE__ */ new Map());
cn({});
function ew(e) {
  if (e)
    return Ec.has(e) ? Ec.get(e) : null;
}
var tw = class {
  constructor(e, t, n, r = {}) {
    this.category = e, this.key = t, this.comp = n, this.meta = r;
  }
  createRenderer(e) {
    return new this.Renderer(e, this.comp);
  }
};
qv({});
var nw = (e) => (t) => an(
  e.comp,
  { ...e.propsData },
  {
    [e.dirct]: t
  }
), rw = class {
  constructor(e, t) {
    this.node = e, this.comp = t, this._vnode = void 0;
  }
  exec() {
    return this._vnode;
  }
  createSlots(e, t, n) {
    if (!this.node.children.length)
      return;
    const r = {};
    return e.forEach((i) => {
      r[i] = (c) => this.node.children.map((f) => {
        if ((f.attrs.slot || "default") === i) {
          const u = t.get(f.attrs.key);
          if (!u)
            throw new Error(`miss widget "${f.attrs.key}"`);
          return u[n](f, c);
        }
      });
    }), r;
  }
  slot(e = ["default"], t, n = "render") {
    return this._vnode = this.createSlots(
      e,
      t,
      n
    ), this;
  }
  main(e) {
    return this._vnode = an(
      this.comp,
      {
        ...e || {}
      },
      this._vnode || void 0
    ), this;
  }
  mount(e = document.body) {
    return this._vnode ? (qd(this._vnode, e), this) : this;
  }
  useDecorator() {
    return this._vnode = this.node.decorators.reduce(
      (e, t) => nw(t)(e),
      this._vnode
    ), this;
  }
  useDragger(e, t) {
    return this._vnode.props.ondragenter = (n) => e(n, this.node), this._vnode.props.ondragover = (n) => t(n, this.node), this;
  }
  addClass(e) {
    return this._vnode ? (this._vnode.props.class || (this._vnode.props.class = ""), this._vnode.props.class += ` ${e} `, this) : this;
  }
  useClass(e) {
    return this._vnode.props.class = e, this;
  }
  addStyle(e) {
    return this._vnode ? (this._vnode.props.style || (this._vnode.props.style = e), this._vnode.props.style = Object.assign(this._vnode.props.style, e), this) : this;
  }
  useStyle(e) {
    return this._vnode.props.style = e, this;
  }
  useID(e) {
    return this._vnode.props.id = e, this;
  }
  box() {
    return this._vnode = an("div", { default: () => [this._vnode] }), this;
  }
}, $s = class {
  constructor() {
    this.getWidget = ew, this.componentMap = {}, this.headers = [], this.zones = [];
  }
  addZone(e) {
    this.zones.find((t) => t.label === e.label) || this.zones.push(e);
  }
  addHeader(e) {
    this.headers.find((t) => t.label === e.label) || this.headers.push(e);
  }
  _init() {
    window.$alioth_zone = (e) => {
      this.addZone(e);
    }, window.$alioth_header = (e) => {
      this.addHeader(e);
    }, window.$alioth_view = ({ key: e, component: t }) => {
      this.componentMap[e] = t;
    };
  }
};
jf([
  Xv
], $s.prototype, "_init", 1);
$s = jf([
  Uv,
  Yv("view")
], $s);
const { doc: $o, activePage: ow } = Gv(__PHECDA__.doc);
class aw extends rw {
  constructor() {
    super(...arguments);
    La(this, "propsData");
  }
  grid() {
    if (!this._vnode)
      return this;
    const n = this.node;
    return this._vnode = an(Mg, {
      ...n.attrs.layout,
      onMove() {
        ow.value.children.forEach((r) => {
          r.set("layout.x", r.attrs.layout.x), r.set("layout.y", r.attrs.layout.y);
        });
      },
      onResize() {
        n.set("layout.h", n.attrs.layout.h), n.set("layout.w", n.attrs.layout.w);
      },
      onResized() {
        ju.emit("alioth:node-action", null);
      },
      onMoved() {
        ju.emit("alioth:node-action", null);
      }
    }, this._vnode), this;
  }
  main(n) {
    var i;
    if (((i = this.node.parent) == null ? void 0 : i.id) === "root")
      return this._vnode = an(
        this.comp,
        { ...this.node.attrs, a_mode: n, a_node: this.node },
        this._vnode
      ), this;
    const r = $alioth_interval.filter(O1(this.node.attrs.propsData));
    return n === "render" && this.node.attrs.propsData && "modelValue" in this.node.attrs.propsData ? this._vnode = an(
      this.comp,
      {
        ...r,
        "onUpdate:modelValue": (c) => {
          r.modelValue = c;
        }
      },
      this._vnode
    ) : this._vnode = an(
      this.comp,
      { ...r, a_mode: n, a_node: this.node },
      this._vnode
    ), this;
  }
  editAction() {
    return this._vnode ? (this._vnode.props.onMousedown = (n) => {
      n.stopPropagation(), $o.value.select(this.node);
    }, this._vnode.props.onDragoverCapture = () => {
      $o.value.select(this.node, "hoverNode");
    }, this._vnode.props.onDragleave = () => {
      $o.value.cancel("hoverNode");
    }, this._vnode.props.onMouseenter = () => {
      $o.value.select(this.node, "hoverNode");
    }, this._vnode.props.onMouseleave = () => {
      $o.value.cancel("hoverNode");
    }, this) : this;
  }
}
class iw extends tw {
  constructor() {
    super(...arguments);
    La(this, "Renderer", aw);
    La(this, "widgetMap", $alioth_interval.widgetMap);
  }
  text() {
    return an("p", {
      class: "preview-text"
    }, this.key);
  }
  edit(n) {
    var i;
    const r = this.createRenderer(n);
    return ((i = n.parent.parent) == null ? void 0 : i.id) === "root" ? r.slot(["default"], this.widgetMap, "edit").main("edit").addClass("innerBlock_edit").grid().editAction().exec() : r.slot(["default"], this.widgetMap, "edit").main("edit").addStyle({ pointerEvents: "auto" }).editAction().exec();
  }
  render(n) {
    var i, c;
    const r = this.createRenderer(n);
    return ((c = (i = n.parent) == null ? void 0 : i.parent) == null ? void 0 : c.id) === "root" ? r.slot(["default"], this.widgetMap, "render").main("render").grid().exec() : r.slot(["default"], this.widgetMap, "render").main("render").exec();
  }
  code() {
  }
}
const pP = {
  alioth: "setEngine",
  data: iw
};
var sw = typeof global == "object" && global && global.Object === Object && global;
const If = sw;
var lw = typeof self == "object" && self && self.Object === Object && self, uw = If || lw || Function("return this")();
const kn = uw;
var cw = kn.Symbol;
const xn = cw;
var Df = Object.prototype, dw = Df.hasOwnProperty, fw = Df.toString, zo = xn ? xn.toStringTag : void 0;
function pw(e) {
  var t = dw.call(e, zo), n = e[zo];
  try {
    e[zo] = void 0;
    var r = !0;
  } catch {
  }
  var i = fw.call(e);
  return r && (t ? e[zo] = n : delete e[zo]), i;
}
var hw = Object.prototype, vw = hw.toString;
function gw(e) {
  return vw.call(e);
}
var mw = "[object Null]", yw = "[object Undefined]", Oc = xn ? xn.toStringTag : void 0;
function ho(e) {
  return e == null ? e === void 0 ? yw : mw : Oc && Oc in Object(e) ? pw(e) : gw(e);
}
function Er(e) {
  return e != null && typeof e == "object";
}
var bw = "[object Symbol]";
function hi(e) {
  return typeof e == "symbol" || Er(e) && ho(e) == bw;
}
function ww(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, i = Array(r); ++n < r; )
    i[n] = t(e[n], n, e);
  return i;
}
var xw = Array.isArray;
const Dn = xw;
var _w = 1 / 0, Cc = xn ? xn.prototype : void 0, Tc = Cc ? Cc.toString : void 0;
function $f(e) {
  if (typeof e == "string")
    return e;
  if (Dn(e))
    return ww(e, $f) + "";
  if (hi(e))
    return Tc ? Tc.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -_w ? "-0" : t;
}
var Sw = /\s/;
function kw(e) {
  for (var t = e.length; t-- && Sw.test(e.charAt(t)); )
    ;
  return t;
}
var Ew = /^\s+/;
function Ow(e) {
  return e && e.slice(0, kw(e) + 1).replace(Ew, "");
}
function Or(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Mc = 0 / 0, Cw = /^[-+]0x[0-9a-f]+$/i, Tw = /^0b[01]+$/i, Mw = /^0o[0-7]+$/i, Pw = parseInt;
function Pc(e) {
  if (typeof e == "number")
    return e;
  if (hi(e))
    return Mc;
  if (Or(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Or(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Ow(e);
  var n = Tw.test(e);
  return n || Mw.test(e) ? Pw(e.slice(2), n ? 2 : 8) : Cw.test(e) ? Mc : +e;
}
function zf(e) {
  return e;
}
var Aw = "[object AsyncFunction]", jw = "[object Function]", Iw = "[object GeneratorFunction]", Dw = "[object Proxy]";
function Nf(e) {
  if (!Or(e))
    return !1;
  var t = ho(e);
  return t == jw || t == Iw || t == Aw || t == Dw;
}
var $w = kn["__core-js_shared__"];
const ls = $w;
var Ac = function() {
  var e = /[^.]+$/.exec(ls && ls.keys && ls.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function zw(e) {
  return !!Ac && Ac in e;
}
var Nw = Function.prototype, Rw = Nw.toString;
function jr(e) {
  if (e != null) {
    try {
      return Rw.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Lw = /[\\^$.*+?()[\]{}|]/g, Bw = /^\[object .+?Constructor\]$/, Fw = Function.prototype, Hw = Object.prototype, Vw = Fw.toString, Ww = Hw.hasOwnProperty, Kw = RegExp(
  "^" + Vw.call(Ww).replace(Lw, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function qw(e) {
  if (!Or(e) || zw(e))
    return !1;
  var t = Nf(e) ? Kw : Bw;
  return t.test(jr(e));
}
function Uw(e, t) {
  return e == null ? void 0 : e[t];
}
function Ir(e, t) {
  var n = Uw(e, t);
  return qw(n) ? n : void 0;
}
var Yw = Ir(kn, "WeakMap");
const zs = Yw;
function Xw(e, t, n) {
  switch (n.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, n[0]);
    case 2:
      return e.call(t, n[0], n[1]);
    case 3:
      return e.call(t, n[0], n[1], n[2]);
  }
  return e.apply(t, n);
}
function Gw() {
}
var Zw = 800, Qw = 16, Jw = Date.now;
function ex(e) {
  var t = 0, n = 0;
  return function() {
    var r = Jw(), i = Qw - (r - n);
    if (n = r, i > 0) {
      if (++t >= Zw)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function tx(e) {
  return function() {
    return e;
  };
}
var nx = function() {
  try {
    var e = Ir(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
const oi = nx;
var rx = oi ? function(e, t) {
  return oi(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: tx(t),
    writable: !0
  });
} : zf;
const ox = rx;
var ax = ex(ox);
const Rf = ax;
function ix(e, t, n, r) {
  for (var i = e.length, c = n + (r ? 1 : -1); r ? c-- : ++c < i; )
    if (t(e[c], c, e))
      return c;
  return -1;
}
function sx(e) {
  return e !== e;
}
function lx(e, t, n) {
  for (var r = n - 1, i = e.length; ++r < i; )
    if (e[r] === t)
      return r;
  return -1;
}
function ux(e, t, n) {
  return t === t ? lx(e, t, n) : ix(e, sx, n);
}
function cx(e, t) {
  var n = e == null ? 0 : e.length;
  return !!n && ux(e, t, 0) > -1;
}
var dx = 9007199254740991, fx = /^(?:0|[1-9]\d*)$/;
function sl(e, t) {
  var n = typeof e;
  return t = t ?? dx, !!t && (n == "number" || n != "symbol" && fx.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function px(e, t, n) {
  t == "__proto__" && oi ? oi(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function ll(e, t) {
  return e === t || e !== e && t !== t;
}
var hx = Object.prototype, vx = hx.hasOwnProperty;
function gx(e, t, n) {
  var r = e[t];
  (!(vx.call(e, t) && ll(r, n)) || n === void 0 && !(t in e)) && px(e, t, n);
}
var jc = Math.max;
function Lf(e, t, n) {
  return t = jc(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, i = -1, c = jc(r.length - t, 0), f = Array(c); ++i < c; )
      f[i] = r[t + i];
    i = -1;
    for (var u = Array(t + 1); ++i < t; )
      u[i] = r[i];
    return u[t] = n(f), Xw(e, this, u);
  };
}
function mx(e, t) {
  return Rf(Lf(e, t, zf), e + "");
}
var yx = 9007199254740991;
function ul(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= yx;
}
function Bf(e) {
  return e != null && ul(e.length) && !Nf(e);
}
var bx = Object.prototype;
function wx(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || bx;
  return e === n;
}
function xx(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var _x = "[object Arguments]";
function Ic(e) {
  return Er(e) && ho(e) == _x;
}
var Ff = Object.prototype, Sx = Ff.hasOwnProperty, kx = Ff.propertyIsEnumerable, Ex = Ic(function() {
  return arguments;
}()) ? Ic : function(e) {
  return Er(e) && Sx.call(e, "callee") && !kx.call(e, "callee");
};
const cl = Ex;
function Ox() {
  return !1;
}
var Hf = typeof exports == "object" && exports && !exports.nodeType && exports, Dc = Hf && typeof module == "object" && module && !module.nodeType && module, Cx = Dc && Dc.exports === Hf, $c = Cx ? kn.Buffer : void 0, Tx = $c ? $c.isBuffer : void 0, Mx = Tx || Ox;
const Ns = Mx;
var Px = "[object Arguments]", Ax = "[object Array]", jx = "[object Boolean]", Ix = "[object Date]", Dx = "[object Error]", $x = "[object Function]", zx = "[object Map]", Nx = "[object Number]", Rx = "[object Object]", Lx = "[object RegExp]", Bx = "[object Set]", Fx = "[object String]", Hx = "[object WeakMap]", Vx = "[object ArrayBuffer]", Wx = "[object DataView]", Kx = "[object Float32Array]", qx = "[object Float64Array]", Ux = "[object Int8Array]", Yx = "[object Int16Array]", Xx = "[object Int32Array]", Gx = "[object Uint8Array]", Zx = "[object Uint8ClampedArray]", Qx = "[object Uint16Array]", Jx = "[object Uint32Array]", ft = {};
ft[Kx] = ft[qx] = ft[Ux] = ft[Yx] = ft[Xx] = ft[Gx] = ft[Zx] = ft[Qx] = ft[Jx] = !0;
ft[Px] = ft[Ax] = ft[Vx] = ft[jx] = ft[Wx] = ft[Ix] = ft[Dx] = ft[$x] = ft[zx] = ft[Nx] = ft[Rx] = ft[Lx] = ft[Bx] = ft[Fx] = ft[Hx] = !1;
function e_(e) {
  return Er(e) && ul(e.length) && !!ft[ho(e)];
}
function t_(e) {
  return function(t) {
    return e(t);
  };
}
var Vf = typeof exports == "object" && exports && !exports.nodeType && exports, Vo = Vf && typeof module == "object" && module && !module.nodeType && module, n_ = Vo && Vo.exports === Vf, us = n_ && If.process, r_ = function() {
  try {
    var e = Vo && Vo.require && Vo.require("util").types;
    return e || us && us.binding && us.binding("util");
  } catch {
  }
}();
const zc = r_;
var Nc = zc && zc.isTypedArray, o_ = Nc ? t_(Nc) : e_;
const Wf = o_;
var a_ = Object.prototype, i_ = a_.hasOwnProperty;
function s_(e, t) {
  var n = Dn(e), r = !n && cl(e), i = !n && !r && Ns(e), c = !n && !r && !i && Wf(e), f = n || r || i || c, u = f ? xx(e.length, String) : [], h = u.length;
  for (var g in e)
    (t || i_.call(e, g)) && !(f && // Safari 9 has enumerable `arguments.length` in strict mode.
    (g == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (g == "offset" || g == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    c && (g == "buffer" || g == "byteLength" || g == "byteOffset") || // Skip index properties.
    sl(g, h))) && u.push(g);
  return u;
}
function l_(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var u_ = l_(Object.keys, Object);
const c_ = u_;
var d_ = Object.prototype, f_ = d_.hasOwnProperty;
function p_(e) {
  if (!wx(e))
    return c_(e);
  var t = [];
  for (var n in Object(e))
    f_.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function h_(e) {
  return Bf(e) ? s_(e) : p_(e);
}
var v_ = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, g_ = /^\w*$/;
function m_(e, t) {
  if (Dn(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || hi(e) ? !0 : g_.test(e) || !v_.test(e) || t != null && e in Object(t);
}
var y_ = Ir(Object, "create");
const Go = y_;
function b_() {
  this.__data__ = Go ? Go(null) : {}, this.size = 0;
}
function w_(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var x_ = "__lodash_hash_undefined__", __ = Object.prototype, S_ = __.hasOwnProperty;
function k_(e) {
  var t = this.__data__;
  if (Go) {
    var n = t[e];
    return n === x_ ? void 0 : n;
  }
  return S_.call(t, e) ? t[e] : void 0;
}
var E_ = Object.prototype, O_ = E_.hasOwnProperty;
function C_(e) {
  var t = this.__data__;
  return Go ? t[e] !== void 0 : O_.call(t, e);
}
var T_ = "__lodash_hash_undefined__";
function M_(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Go && t === void 0 ? T_ : t, this;
}
function Cr(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Cr.prototype.clear = b_;
Cr.prototype.delete = w_;
Cr.prototype.get = k_;
Cr.prototype.has = C_;
Cr.prototype.set = M_;
function P_() {
  this.__data__ = [], this.size = 0;
}
function vi(e, t) {
  for (var n = e.length; n--; )
    if (ll(e[n][0], t))
      return n;
  return -1;
}
var A_ = Array.prototype, j_ = A_.splice;
function I_(e) {
  var t = this.__data__, n = vi(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : j_.call(t, n, 1), --this.size, !0;
}
function D_(e) {
  var t = this.__data__, n = vi(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function $_(e) {
  return vi(this.__data__, e) > -1;
}
function z_(e, t) {
  var n = this.__data__, r = vi(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function Nn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Nn.prototype.clear = P_;
Nn.prototype.delete = I_;
Nn.prototype.get = D_;
Nn.prototype.has = $_;
Nn.prototype.set = z_;
var N_ = Ir(kn, "Map");
const Zo = N_;
function R_() {
  this.size = 0, this.__data__ = {
    hash: new Cr(),
    map: new (Zo || Nn)(),
    string: new Cr()
  };
}
function L_(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function gi(e, t) {
  var n = e.__data__;
  return L_(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function B_(e) {
  var t = gi(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function F_(e) {
  return gi(this, e).get(e);
}
function H_(e) {
  return gi(this, e).has(e);
}
function V_(e, t) {
  var n = gi(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function Rn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Rn.prototype.clear = R_;
Rn.prototype.delete = B_;
Rn.prototype.get = F_;
Rn.prototype.has = H_;
Rn.prototype.set = V_;
var W_ = "Expected a function";
function dl(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(W_);
  var n = function() {
    var r = arguments, i = t ? t.apply(this, r) : r[0], c = n.cache;
    if (c.has(i))
      return c.get(i);
    var f = e.apply(this, r);
    return n.cache = c.set(i, f) || c, f;
  };
  return n.cache = new (dl.Cache || Rn)(), n;
}
dl.Cache = Rn;
var K_ = 500;
function q_(e) {
  var t = dl(e, function(r) {
    return n.size === K_ && n.clear(), r;
  }), n = t.cache;
  return t;
}
var U_ = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Y_ = /\\(\\)?/g, X_ = q_(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(U_, function(n, r, i, c) {
    t.push(i ? c.replace(Y_, "$1") : r || n);
  }), t;
});
const G_ = X_;
function Z_(e) {
  return e == null ? "" : $f(e);
}
function mi(e, t) {
  return Dn(e) ? e : m_(e, t) ? [e] : G_(Z_(e));
}
var Q_ = 1 / 0;
function fl(e) {
  if (typeof e == "string" || hi(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -Q_ ? "-0" : t;
}
function Kf(e, t) {
  t = mi(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[fl(t[n++])];
  return n && n == r ? e : void 0;
}
function Gt(e, t, n) {
  var r = e == null ? void 0 : Kf(e, t);
  return r === void 0 ? n : r;
}
function qf(e, t) {
  for (var n = -1, r = t.length, i = e.length; ++n < r; )
    e[i + n] = t[n];
  return e;
}
var Rc = xn ? xn.isConcatSpreadable : void 0;
function J_(e) {
  return Dn(e) || cl(e) || !!(Rc && e && e[Rc]);
}
function pl(e, t, n, r, i) {
  var c = -1, f = e.length;
  for (n || (n = J_), i || (i = []); ++c < f; ) {
    var u = e[c];
    t > 0 && n(u) ? t > 1 ? pl(u, t - 1, n, r, i) : qf(i, u) : r || (i[i.length] = u);
  }
  return i;
}
function eS(e) {
  var t = e == null ? 0 : e.length;
  return t ? pl(e, 1) : [];
}
function tS(e) {
  return Rf(Lf(e, void 0, eS), e + "");
}
function nS() {
  this.__data__ = new Nn(), this.size = 0;
}
function rS(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function oS(e) {
  return this.__data__.get(e);
}
function aS(e) {
  return this.__data__.has(e);
}
var iS = 200;
function sS(e, t) {
  var n = this.__data__;
  if (n instanceof Nn) {
    var r = n.__data__;
    if (!Zo || r.length < iS - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new Rn(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
function Qn(e) {
  var t = this.__data__ = new Nn(e);
  this.size = t.size;
}
Qn.prototype.clear = nS;
Qn.prototype.delete = rS;
Qn.prototype.get = oS;
Qn.prototype.has = aS;
Qn.prototype.set = sS;
function lS(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, i = 0, c = []; ++n < r; ) {
    var f = e[n];
    t(f, n, e) && (c[i++] = f);
  }
  return c;
}
function uS() {
  return [];
}
var cS = Object.prototype, dS = cS.propertyIsEnumerable, Lc = Object.getOwnPropertySymbols, fS = Lc ? function(e) {
  return e == null ? [] : (e = Object(e), lS(Lc(e), function(t) {
    return dS.call(e, t);
  }));
} : uS;
const pS = fS;
function hS(e, t, n) {
  var r = t(e);
  return Dn(e) ? r : qf(r, n(e));
}
function Bc(e) {
  return hS(e, h_, pS);
}
var vS = Ir(kn, "DataView");
const Rs = vS;
var gS = Ir(kn, "Promise");
const Ls = gS;
var mS = Ir(kn, "Set");
const Gr = mS;
var Fc = "[object Map]", yS = "[object Object]", Hc = "[object Promise]", Vc = "[object Set]", Wc = "[object WeakMap]", Kc = "[object DataView]", bS = jr(Rs), wS = jr(Zo), xS = jr(Ls), _S = jr(Gr), SS = jr(zs), gr = ho;
(Rs && gr(new Rs(new ArrayBuffer(1))) != Kc || Zo && gr(new Zo()) != Fc || Ls && gr(Ls.resolve()) != Hc || Gr && gr(new Gr()) != Vc || zs && gr(new zs()) != Wc) && (gr = function(e) {
  var t = ho(e), n = t == yS ? e.constructor : void 0, r = n ? jr(n) : "";
  if (r)
    switch (r) {
      case bS:
        return Kc;
      case wS:
        return Fc;
      case xS:
        return Hc;
      case _S:
        return Vc;
      case SS:
        return Wc;
    }
  return t;
});
const qc = gr;
var kS = kn.Uint8Array;
const Uc = kS;
var ES = "__lodash_hash_undefined__";
function OS(e) {
  return this.__data__.set(e, ES), this;
}
function CS(e) {
  return this.__data__.has(e);
}
function Qo(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new Rn(); ++t < n; )
    this.add(e[t]);
}
Qo.prototype.add = Qo.prototype.push = OS;
Qo.prototype.has = CS;
function TS(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function Uf(e, t) {
  return e.has(t);
}
var MS = 1, PS = 2;
function Yf(e, t, n, r, i, c) {
  var f = n & MS, u = e.length, h = t.length;
  if (u != h && !(f && h > u))
    return !1;
  var g = c.get(e), w = c.get(t);
  if (g && w)
    return g == t && w == e;
  var _ = -1, k = !0, T = n & PS ? new Qo() : void 0;
  for (c.set(e, t), c.set(t, e); ++_ < u; ) {
    var x = e[_], S = t[_];
    if (r)
      var M = f ? r(S, x, _, t, e, c) : r(x, S, _, e, t, c);
    if (M !== void 0) {
      if (M)
        continue;
      k = !1;
      break;
    }
    if (T) {
      if (!TS(t, function(O, I) {
        if (!Uf(T, I) && (x === O || i(x, O, n, r, c)))
          return T.push(I);
      })) {
        k = !1;
        break;
      }
    } else if (!(x === S || i(x, S, n, r, c))) {
      k = !1;
      break;
    }
  }
  return c.delete(e), c.delete(t), k;
}
function AS(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r, i) {
    n[++t] = [i, r];
  }), n;
}
function hl(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r) {
    n[++t] = r;
  }), n;
}
var jS = 1, IS = 2, DS = "[object Boolean]", $S = "[object Date]", zS = "[object Error]", NS = "[object Map]", RS = "[object Number]", LS = "[object RegExp]", BS = "[object Set]", FS = "[object String]", HS = "[object Symbol]", VS = "[object ArrayBuffer]", WS = "[object DataView]", Yc = xn ? xn.prototype : void 0, cs = Yc ? Yc.valueOf : void 0;
function KS(e, t, n, r, i, c, f) {
  switch (n) {
    case WS:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case VS:
      return !(e.byteLength != t.byteLength || !c(new Uc(e), new Uc(t)));
    case DS:
    case $S:
    case RS:
      return ll(+e, +t);
    case zS:
      return e.name == t.name && e.message == t.message;
    case LS:
    case FS:
      return e == t + "";
    case NS:
      var u = AS;
    case BS:
      var h = r & jS;
      if (u || (u = hl), e.size != t.size && !h)
        return !1;
      var g = f.get(e);
      if (g)
        return g == t;
      r |= IS, f.set(e, t);
      var w = Yf(u(e), u(t), r, i, c, f);
      return f.delete(e), w;
    case HS:
      if (cs)
        return cs.call(e) == cs.call(t);
  }
  return !1;
}
var qS = 1, US = Object.prototype, YS = US.hasOwnProperty;
function XS(e, t, n, r, i, c) {
  var f = n & qS, u = Bc(e), h = u.length, g = Bc(t), w = g.length;
  if (h != w && !f)
    return !1;
  for (var _ = h; _--; ) {
    var k = u[_];
    if (!(f ? k in t : YS.call(t, k)))
      return !1;
  }
  var T = c.get(e), x = c.get(t);
  if (T && x)
    return T == t && x == e;
  var S = !0;
  c.set(e, t), c.set(t, e);
  for (var M = f; ++_ < h; ) {
    k = u[_];
    var O = e[k], I = t[k];
    if (r)
      var K = f ? r(I, O, k, t, e, c) : r(O, I, k, e, t, c);
    if (!(K === void 0 ? O === I || i(O, I, n, r, c) : K)) {
      S = !1;
      break;
    }
    M || (M = k == "constructor");
  }
  if (S && !M) {
    var L = e.constructor, q = t.constructor;
    L != q && "constructor" in e && "constructor" in t && !(typeof L == "function" && L instanceof L && typeof q == "function" && q instanceof q) && (S = !1);
  }
  return c.delete(e), c.delete(t), S;
}
var GS = 1, Xc = "[object Arguments]", Gc = "[object Array]", Va = "[object Object]", ZS = Object.prototype, Zc = ZS.hasOwnProperty;
function QS(e, t, n, r, i, c) {
  var f = Dn(e), u = Dn(t), h = f ? Gc : qc(e), g = u ? Gc : qc(t);
  h = h == Xc ? Va : h, g = g == Xc ? Va : g;
  var w = h == Va, _ = g == Va, k = h == g;
  if (k && Ns(e)) {
    if (!Ns(t))
      return !1;
    f = !0, w = !1;
  }
  if (k && !w)
    return c || (c = new Qn()), f || Wf(e) ? Yf(e, t, n, r, i, c) : KS(e, t, h, n, r, i, c);
  if (!(n & GS)) {
    var T = w && Zc.call(e, "__wrapped__"), x = _ && Zc.call(t, "__wrapped__");
    if (T || x) {
      var S = T ? e.value() : e, M = x ? t.value() : t;
      return c || (c = new Qn()), i(S, M, n, r, c);
    }
  }
  return k ? (c || (c = new Qn()), XS(e, t, n, r, i, c)) : !1;
}
function Xf(e, t, n, r, i) {
  return e === t ? !0 : e == null || t == null || !Er(e) && !Er(t) ? e !== e && t !== t : QS(e, t, n, r, Xf, i);
}
function JS(e, t) {
  return e != null && t in Object(e);
}
function e2(e, t, n) {
  t = mi(t, e);
  for (var r = -1, i = t.length, c = !1; ++r < i; ) {
    var f = fl(t[r]);
    if (!(c = e != null && n(e, f)))
      break;
    e = e[f];
  }
  return c || ++r != i ? c : (i = e == null ? 0 : e.length, !!i && ul(i) && sl(f, i) && (Dn(e) || cl(e)));
}
function t2(e, t) {
  return e != null && e2(e, t, JS);
}
var n2 = function() {
  return kn.Date.now();
};
const ds = n2;
var r2 = "Expected a function", o2 = Math.max, a2 = Math.min;
function Bs(e, t, n) {
  var r, i, c, f, u, h, g = 0, w = !1, _ = !1, k = !0;
  if (typeof e != "function")
    throw new TypeError(r2);
  t = Pc(t) || 0, Or(n) && (w = !!n.leading, _ = "maxWait" in n, c = _ ? o2(Pc(n.maxWait) || 0, t) : c, k = "trailing" in n ? !!n.trailing : k);
  function T(N) {
    var H = r, F = i;
    return r = i = void 0, g = N, f = e.apply(F, H), f;
  }
  function x(N) {
    return g = N, u = setTimeout(O, t), w ? T(N) : f;
  }
  function S(N) {
    var H = N - h, F = N - g, le = t - H;
    return _ ? a2(le, c - F) : le;
  }
  function M(N) {
    var H = N - h, F = N - g;
    return h === void 0 || H >= t || H < 0 || _ && F >= c;
  }
  function O() {
    var N = ds();
    if (M(N))
      return I(N);
    u = setTimeout(O, S(N));
  }
  function I(N) {
    return u = void 0, k && r ? T(N) : (r = i = void 0, f);
  }
  function K() {
    u !== void 0 && clearTimeout(u), g = 0, r = h = i = u = void 0;
  }
  function L() {
    return u === void 0 ? f : I(ds());
  }
  function q() {
    var N = ds(), H = M(N);
    if (r = arguments, i = this, h = N, H) {
      if (u === void 0)
        return x(h);
      if (_)
        return clearTimeout(u), u = setTimeout(O, t), T(h);
    }
    return u === void 0 && (u = setTimeout(O, t)), f;
  }
  return q.cancel = K, q.flush = L, q;
}
function i2(e) {
  return Er(e) && Bf(e);
}
function s2(e, t, n) {
  for (var r = -1, i = e == null ? 0 : e.length; ++r < i; )
    if (n(t, e[r]))
      return !0;
  return !1;
}
function ai(e) {
  for (var t = -1, n = e == null ? 0 : e.length, r = {}; ++t < n; ) {
    var i = e[t];
    r[i[0]] = i[1];
  }
  return r;
}
function ii(e, t) {
  return Xf(e, t);
}
function yi(e) {
  return e == null;
}
function l2(e) {
  return e === void 0;
}
function u2(e, t, n, r) {
  if (!Or(e))
    return e;
  t = mi(t, e);
  for (var i = -1, c = t.length, f = c - 1, u = e; u != null && ++i < c; ) {
    var h = fl(t[i]), g = n;
    if (h === "__proto__" || h === "constructor" || h === "prototype")
      return e;
    if (i != f) {
      var w = u[h];
      g = r ? r(w, h, u) : void 0, g === void 0 && (g = Or(w) ? w : sl(t[i + 1]) ? [] : {});
    }
    gx(u, h, g), u = u[h];
  }
  return e;
}
function c2(e, t, n) {
  for (var r = -1, i = t.length, c = {}; ++r < i; ) {
    var f = t[r], u = Kf(e, f);
    n(u, f) && u2(c, mi(f, e), u);
  }
  return c;
}
function d2(e, t) {
  return c2(e, t, function(n, r) {
    return t2(e, r);
  });
}
var f2 = tS(function(e, t) {
  return e == null ? {} : d2(e, t);
});
const p2 = f2;
var h2 = 1 / 0, v2 = Gr && 1 / hl(new Gr([, -0]))[1] == h2 ? function(e) {
  return new Gr(e);
} : Gw;
const g2 = v2;
var m2 = 200;
function y2(e, t, n) {
  var r = -1, i = cx, c = e.length, f = !0, u = [], h = u;
  if (n)
    f = !1, i = s2;
  else if (c >= m2) {
    var g = t ? null : g2(e);
    if (g)
      return hl(g);
    f = !1, i = Uf, h = new Qo();
  } else
    h = t ? [] : u;
  e:
    for (; ++r < c; ) {
      var w = e[r], _ = t ? t(w) : w;
      if (w = n || w !== 0 ? w : 0, f && _ === _) {
        for (var k = h.length; k--; )
          if (h[k] === _)
            continue e;
        t && h.push(_), u.push(w);
      } else
        i(h, _, n) || (h !== u && h.push(_), u.push(w));
    }
  return u;
}
var b2 = mx(function(e) {
  return y2(pl(e, 1, i2, !0));
});
const fs = b2, jn = (e, t, { checkForDefaultPrevented: n = !0 } = {}) => (r) => {
  const i = e == null ? void 0 : e(r);
  if (n === !1 || !i)
    return t == null ? void 0 : t(r);
};
var Qc;
const Lt = typeof window < "u", Jo = (e) => typeof e == "boolean", sn = (e) => typeof e == "number", w2 = (e) => typeof e == "string", Gf = () => {
}, x2 = Lt && ((Qc = window == null ? void 0 : window.navigator) == null ? void 0 : Qc.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Zf(e) {
  return typeof e == "function" ? e() : m(e);
}
function _2(e) {
  return e;
}
function vl(e) {
  return sg() ? (lg(e), !0) : !1;
}
function S2(e, t = !0) {
  Ut() ? jt(e) : t ? e() : Xe(e);
}
function Xn(e) {
  var t;
  const n = Zf(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const gl = Lt ? window : void 0;
function wr(...e) {
  let t, n, r, i;
  if (w2(e[0]) || Array.isArray(e[0]) ? ([n, r, i] = e, t = gl) : [t, n, r, i] = e, !t)
    return Gf;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const c = [], f = () => {
    c.forEach((w) => w()), c.length = 0;
  }, u = (w, _, k, T) => (w.addEventListener(_, k, T), () => w.removeEventListener(_, k, T)), h = be(() => [Xn(t), Zf(i)], ([w, _]) => {
    f(), w && c.push(...n.flatMap((k) => r.map((T) => u(w, k, T, _))));
  }, { immediate: !0, flush: "post" }), g = () => {
    h(), f();
  };
  return vl(g), g;
}
let Jc = !1;
function Qf(e, t, n = {}) {
  const { window: r = gl, ignore: i = [], capture: c = !0, detectIframe: f = !1 } = n;
  if (!r)
    return;
  x2 && !Jc && (Jc = !0, Array.from(r.document.body.children).forEach((w) => w.addEventListener("click", Gf)));
  let u = !0;
  const h = (w) => i.some((_) => {
    if (typeof _ == "string")
      return Array.from(r.document.querySelectorAll(_)).some((k) => k === w.target || w.composedPath().includes(k));
    {
      const k = Xn(_);
      return k && (w.target === k || w.composedPath().includes(k));
    }
  }), g = [
    wr(r, "click", (w) => {
      const _ = Xn(e);
      if (!(!_ || _ === w.target || w.composedPath().includes(_))) {
        if (w.detail === 0 && (u = !h(w)), !u) {
          u = !0;
          return;
        }
        t(w);
      }
    }, { passive: !0, capture: c }),
    wr(r, "pointerdown", (w) => {
      const _ = Xn(e);
      _ && (u = !w.composedPath().includes(_) && !h(w));
    }, { passive: !0 }),
    f && wr(r, "blur", (w) => {
      var _;
      const k = Xn(e);
      ((_ = r.document.activeElement) == null ? void 0 : _.tagName) === "IFRAME" && !(k != null && k.contains(r.document.activeElement)) && t(w);
    })
  ].filter(Boolean);
  return () => g.forEach((w) => w());
}
function k2(e, t = !1) {
  const n = ce(), r = () => n.value = !!e();
  return r(), S2(r, t), n;
}
const ed = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, td = "__vueuse_ssr_handlers__";
ed[td] = ed[td] || {};
var nd = Object.getOwnPropertySymbols, E2 = Object.prototype.hasOwnProperty, O2 = Object.prototype.propertyIsEnumerable, C2 = (e, t) => {
  var n = {};
  for (var r in e)
    E2.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && nd)
    for (var r of nd(e))
      t.indexOf(r) < 0 && O2.call(e, r) && (n[r] = e[r]);
  return n;
};
function bi(e, t, n = {}) {
  const r = n, { window: i = gl } = r, c = C2(r, ["window"]);
  let f;
  const u = k2(() => i && "ResizeObserver" in i), h = () => {
    f && (f.disconnect(), f = void 0);
  }, g = be(() => Xn(e), (_) => {
    h(), u.value && i && _ && (f = new ResizeObserver(t), f.observe(_, c));
  }, { immediate: !0, flush: "post" }), w = () => {
    h(), g();
  };
  return vl(w), {
    isSupported: u,
    stop: w
  };
}
var rd;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(rd || (rd = {}));
var T2 = Object.defineProperty, od = Object.getOwnPropertySymbols, M2 = Object.prototype.hasOwnProperty, P2 = Object.prototype.propertyIsEnumerable, ad = (e, t, n) => t in e ? T2(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, A2 = (e, t) => {
  for (var n in t || (t = {}))
    M2.call(t, n) && ad(e, n, t[n]);
  if (od)
    for (var n of od(t))
      P2.call(t, n) && ad(e, n, t[n]);
  return e;
};
const j2 = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
A2({
  linear: _2
}, j2);
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
const ea = () => {
}, I2 = Object.prototype.hasOwnProperty, ta = (e, t) => I2.call(e, t), bt = Array.isArray, id = (e) => Jf(e) === "[object Date]", qt = (e) => typeof e == "function", un = (e) => typeof e == "string", dn = (e) => e !== null && typeof e == "object", D2 = Object.prototype.toString, Jf = (e) => D2.call(e), ps = (e) => Jf(e).slice(8, -1), na = (e) => e === void 0, ep = (e) => !e && e !== 0 || bt(e) && e.length === 0 || dn(e) && !Object.keys(e).length, ra = (e) => typeof Element > "u" ? !1 : e instanceof Element, $2 = (e) => un(e) ? !Number.isNaN(Number(e)) : !1, z2 = (e = "") => e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
class tp extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function N2(e, t) {
  throw new tp(`[${e}] ${t}`);
}
function Pt(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const n = un(e) ? new tp(`[${e}] ${t}`) : e;
    console.warn(n);
  }
}
const R2 = "utils/dom/style", np = (e = "") => e.split(" ").filter((t) => !!t.trim()), L2 = (e, t) => {
  !e || !t.trim() || e.classList.add(...np(t));
}, hs = (e, t) => {
  !e || !t.trim() || e.classList.remove(...np(t));
};
function Fs(e, t = "px") {
  if (!e)
    return "";
  if (sn(e) || $2(e))
    return `${e}${t}`;
  if (un(e))
    return e;
  Pt(R2, "binding value must be a string or number");
}
function B2(e, t) {
  if (!Lt)
    return;
  if (!t) {
    e.scrollTop = 0;
    return;
  }
  const n = [];
  let r = t.offsetParent;
  for (; r !== null && e !== r && e.contains(r); )
    n.push(r), r = r.offsetParent;
  const i = t.offsetTop + n.reduce((h, g) => h + g.offsetTop, 0), c = i + t.offsetHeight, f = e.scrollTop, u = f + e.clientHeight;
  i < f ? e.scrollTop = i : c > u && (e.scrollTop = c - e.clientHeight);
}
/*! Element Plus Icons Vue v2.1.0 */
var hn = (e, t) => {
  let n = e.__vccOpts || e;
  for (let [r, i] of t)
    n[r] = i;
  return n;
}, F2 = {
  name: "ArrowDown"
}, H2 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, V2 = /* @__PURE__ */ xe(
  "path",
  {
    fill: "currentColor",
    d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
  },
  null,
  -1
  /* HOISTED */
), W2 = [
  V2
];
function K2(e, t, n, r, i, c) {
  return Y(), he("svg", H2, W2);
}
var rp = /* @__PURE__ */ hn(F2, [["render", K2], ["__file", "arrow-down.vue"]]), q2 = {
  name: "ArrowUp"
}, U2 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Y2 = /* @__PURE__ */ xe(
  "path",
  {
    fill: "currentColor",
    d: "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0z"
  },
  null,
  -1
  /* HOISTED */
), X2 = [
  Y2
];
function G2(e, t, n, r, i, c) {
  return Y(), he("svg", U2, X2);
}
var Z2 = /* @__PURE__ */ hn(q2, [["render", G2], ["__file", "arrow-up.vue"]]), Q2 = {
  name: "Calendar"
}, J2 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, ek = /* @__PURE__ */ xe(
  "path",
  {
    fill: "currentColor",
    d: "M128 384v512h768V192H768v32a32 32 0 1 1-64 0v-32H320v32a32 32 0 0 1-64 0v-32H128v128h768v64H128zm192-256h384V96a32 32 0 1 1 64 0v32h160a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h160V96a32 32 0 0 1 64 0v32zm-32 384h64a32 32 0 0 1 0 64h-64a32 32 0 0 1 0-64zm0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64zm192-192h64a32 32 0 0 1 0 64h-64a32 32 0 0 1 0-64zm0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64zm192-192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64zm0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64z"
  },
  null,
  -1
  /* HOISTED */
), tk = [
  ek
];
function nk(e, t, n, r, i, c) {
  return Y(), he("svg", J2, tk);
}
var rk = /* @__PURE__ */ hn(Q2, [["render", nk], ["__file", "calendar.vue"]]), ok = {
  name: "CaretRight"
}, ak = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, ik = /* @__PURE__ */ xe(
  "path",
  {
    fill: "currentColor",
    d: "M384 192v640l384-320.064z"
  },
  null,
  -1
  /* HOISTED */
), sk = [
  ik
];
function lk(e, t, n, r, i, c) {
  return Y(), he("svg", ak, sk);
}
var uk = /* @__PURE__ */ hn(ok, [["render", lk], ["__file", "caret-right.vue"]]), ck = {
  name: "CircleCheck"
}, dk = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, fk = /* @__PURE__ */ xe(
  "path",
  {
    fill: "currentColor",
    d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
  },
  null,
  -1
  /* HOISTED */
), pk = /* @__PURE__ */ xe(
  "path",
  {
    fill: "currentColor",
    d: "M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z"
  },
  null,
  -1
  /* HOISTED */
), hk = [
  fk,
  pk
];
function vk(e, t, n, r, i, c) {
  return Y(), he("svg", dk, hk);
}
var gk = /* @__PURE__ */ hn(ck, [["render", vk], ["__file", "circle-check.vue"]]), mk = {
  name: "CircleClose"
}, yk = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, bk = /* @__PURE__ */ xe(
  "path",
  {
    fill: "currentColor",
    d: "m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248L466.752 512z"
  },
  null,
  -1
  /* HOISTED */
), wk = /* @__PURE__ */ xe(
  "path",
  {
    fill: "currentColor",
    d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
  },
  null,
  -1
  /* HOISTED */
), xk = [
  bk,
  wk
];
function _k(e, t, n, r, i, c) {
  return Y(), he("svg", yk, xk);
}
var wi = /* @__PURE__ */ hn(mk, [["render", _k], ["__file", "circle-close.vue"]]), Sk = {
  name: "Clock"
}, kk = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Ek = /* @__PURE__ */ xe(
  "path",
  {
    fill: "currentColor",
    d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
  },
  null,
  -1
  /* HOISTED */
), Ok = /* @__PURE__ */ xe(
  "path",
  {
    fill: "currentColor",
    d: "M480 256a32 32 0 0 1 32 32v256a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32z"
  },
  null,
  -1
  /* HOISTED */
), Ck = /* @__PURE__ */ xe(
  "path",
  {
    fill: "currentColor",
    d: "M480 512h256q32 0 32 32t-32 32H480q-32 0-32-32t32-32z"
  },
  null,
  -1
  /* HOISTED */
), Tk = [
  Ek,
  Ok,
  Ck
];
function Mk(e, t, n, r, i, c) {
  return Y(), he("svg", kk, Tk);
}
var Pk = /* @__PURE__ */ hn(Sk, [["render", Mk], ["__file", "clock.vue"]]), Ak = {
  name: "Close"
}, jk = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Ik = /* @__PURE__ */ xe(
  "path",
  {
    fill: "currentColor",
    d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
  },
  null,
  -1
  /* HOISTED */
), Dk = [
  Ik
];
function $k(e, t, n, r, i, c) {
  return Y(), he("svg", jk, Dk);
}
var sd = /* @__PURE__ */ hn(Ak, [["render", $k], ["__file", "close.vue"]]), zk = {
  name: "Hide"
}, Nk = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Rk = /* @__PURE__ */ xe(
  "path",
  {
    fill: "currentColor",
    d: "M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2L371.2 588.8ZM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z"
  },
  null,
  -1
  /* HOISTED */
), Lk = /* @__PURE__ */ xe(
  "path",
  {
    fill: "currentColor",
    d: "M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z"
  },
  null,
  -1
  /* HOISTED */
), Bk = [
  Rk,
  Lk
];
function Fk(e, t, n, r, i, c) {
  return Y(), he("svg", Nk, Bk);
}
var Hk = /* @__PURE__ */ hn(zk, [["render", Fk], ["__file", "hide.vue"]]), Vk = {
  name: "Loading"
}, Wk = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Kk = /* @__PURE__ */ xe(
  "path",
  {
    fill: "currentColor",
    d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
  },
  null,
  -1
  /* HOISTED */
), qk = [
  Kk
];
function Uk(e, t, n, r, i, c) {
  return Y(), he("svg", Wk, qk);
}
var ml = /* @__PURE__ */ hn(Vk, [["render", Uk], ["__file", "loading.vue"]]), Yk = {
  name: "View"
}, Xk = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Gk = /* @__PURE__ */ xe(
  "path",
  {
    fill: "currentColor",
    d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352zm0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448zm0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160z"
  },
  null,
  -1
  /* HOISTED */
), Zk = [
  Gk
];
function Qk(e, t, n, r, i, c) {
  return Y(), he("svg", Xk, Zk);
}
var Jk = /* @__PURE__ */ hn(Yk, [["render", Qk], ["__file", "view.vue"]]);
const op = "__epPropKey", Ne = (e) => e, eE = (e) => dn(e) && !!e[op], xi = (e, t) => {
  if (!dn(e) || eE(e))
    return e;
  const { values: n, required: r, default: i, type: c, validator: f } = e, u = {
    type: c,
    required: !!r,
    validator: n || f ? (h) => {
      let g = !1, w = [];
      if (n && (w = Array.from(n), ta(e, "default") && w.push(i), g || (g = w.includes(h))), f && (g || (g = f(h))), !g && w.length > 0) {
        const _ = [...new Set(w)].map((k) => JSON.stringify(k)).join(", ");
        ag(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${_}], got value ${JSON.stringify(h)}.`);
      }
      return g;
    } : void 0,
    [op]: !0
  };
  return ta(e, "default") && (u.default = i), u;
}, mt = (e) => ai(Object.entries(e).map(([t, n]) => [
  t,
  xi(n, t)
])), Tr = Ne([
  String,
  Object,
  Function
]), tE = {
  validating: ml,
  success: gk,
  error: wi
}, Ln = (e, t) => {
  if (e.install = (n) => {
    for (const r of [e, ...Object.values(t ?? {})])
      n.component(r.name, r);
  }, t)
    for (const [n, r] of Object.entries(t))
      e[n] = r;
  return e;
}, sa = (e) => (e.install = ea, e), wt = {
  tab: "Tab",
  enter: "Enter",
  space: "Space",
  left: "ArrowLeft",
  up: "ArrowUp",
  right: "ArrowRight",
  down: "ArrowDown",
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace",
  numpadEnter: "NumpadEnter",
  pageUp: "PageUp",
  pageDown: "PageDown",
  home: "Home",
  end: "End"
}, Rt = "update:modelValue", ap = "change", yl = ["", "default", "small", "large"], nE = {
  large: 40,
  default: 32,
  small: 24
}, rE = (e) => nE[e || "default"], oE = (e) => ["", ...yl].includes(e), ip = (e) => /([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi.test(e), aE = (e) => e, iE = ["class", "style"], sE = /^on[A-Z]/, lE = (e = {}) => {
  const { excludeListeners: t = !1, excludeKeys: n } = e, r = V(() => ((n == null ? void 0 : n.value) || []).concat(iE)), i = Ut();
  return i ? V(() => {
    var c;
    return ai(Object.entries((c = i.proxy) == null ? void 0 : c.$attrs).filter(([f]) => !r.value.includes(f) && !(t && sE.test(f))));
  }) : (Pt("use-attrs", "getCurrentInstance() returned null. useAttrs() must be called at the top of a setup function"), V(() => ({})));
}, sp = Symbol("buttonGroupContextKey"), vo = Symbol("checkboxGroupContextKey"), uE = Symbol(), bl = Symbol("formContextKey"), oa = Symbol("formItemContextKey"), lp = Symbol("scrollbarContextKey"), wl = Symbol("popper"), up = Symbol("popperContent"), xl = Symbol("elTooltip"), cp = (e) => {
  const t = Ut();
  return V(() => {
    var n, r;
    return (r = ((n = t.proxy) == null ? void 0 : n.$props)[e]) != null ? r : void 0;
  });
}, ld = ce();
function Dr(e, t = void 0) {
  const n = Ut() ? Ye(uE, ld) : ld;
  return e ? V(() => {
    var r, i;
    return (i = (r = n.value) == null ? void 0 : r[e]) != null ? i : t;
  }) : n;
}
const la = xi({
  type: String,
  values: yl,
  required: !1
}), Mr = (e, t = {}) => {
  const n = ce(void 0), r = t.prop ? n : cp("size"), i = t.global ? n : Dr("size"), c = t.form ? { size: void 0 } : Ye(bl, void 0), f = t.formItem ? { size: void 0 } : Ye(oa, void 0);
  return V(() => r.value || m(e) || (f == null ? void 0 : f.size) || (c == null ? void 0 : c.size) || i.value || "");
}, _i = (e) => {
  const t = cp("disabled"), n = Ye(bl, void 0);
  return V(() => t.value || m(e) || (n == null ? void 0 : n.disabled) || !1);
}, dp = ({ from: e, replacement: t, scope: n, version: r, ref: i, type: c = "API" }, f) => {
  be(() => m(f), (u) => {
    u && Pt(n, `[${c}] ${e} is about to be deprecated in version ${r}, please use ${t} instead.
For more detail, please visit: ${i}
`);
  }, {
    immediate: !0
  });
}, cE = (e) => ({
  focus: () => {
    var t, n;
    (n = (t = e.value) == null ? void 0 : t.focus) == null || n.call(t);
  }
}), _l = "el", dE = "is-", hr = (e, t, n, r, i) => {
  let c = `${e}-${t}`;
  return n && (c += `-${n}`), r && (c += `__${r}`), i && (c += `--${i}`), c;
}, Ke = (e) => {
  const t = Dr("namespace", _l);
  return {
    namespace: t,
    b: (n = "") => hr(t.value, e, n, "", ""),
    e: (n) => n ? hr(t.value, e, "", n, "") : "",
    m: (n) => n ? hr(t.value, e, "", "", n) : "",
    be: (n, r) => n && r ? hr(t.value, e, n, r, "") : "",
    em: (n, r) => n && r ? hr(t.value, e, "", n, r) : "",
    bm: (n, r) => n && r ? hr(t.value, e, n, "", r) : "",
    bem: (n, r, i) => n && r && i ? hr(t.value, e, n, r, i) : "",
    is: (n, ...r) => {
      const i = r.length >= 1 ? r[0] : !0;
      return n && i ? `${dE}${n}` : "";
    },
    cssVar: (n) => {
      const r = {};
      for (const i in n)
        n[i] && (r[`--${t.value}-${i}`] = n[i]);
      return r;
    },
    cssVarName: (n) => `--${t.value}-${n}`,
    cssVarBlock: (n) => {
      const r = {};
      for (const i in n)
        n[i] && (r[`--${t.value}-${e}-${i}`] = n[i]);
      return r;
    },
    cssVarBlockName: (n) => `--${t.value}-${e}-${n}`
  };
}, Hs = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, fE = Symbol("elIdInjection"), fp = () => Ut() ? Ye(fE, Hs) : Hs, pp = (e) => {
  const t = fp();
  !Lt && t === Hs && Pt("IdInjection", `Looks like you are using server rendering, you must provide a id provider to ensure the hydration process to be succeed
usage: app.provide(ID_INJECTION_KEY, {
  prefix: number,
  current: number,
})`);
  const n = Dr("namespace", _l);
  return V(() => m(e) || `${n.value}-id-${t.prefix}-${t.current++}`);
}, $r = () => {
  const e = Ye(bl, void 0), t = Ye(oa, void 0);
  return {
    form: e,
    formItem: t
  };
}, Sl = (e, {
  formItemContext: t,
  disableIdGeneration: n,
  disableIdManagement: r
}) => {
  n || (n = ce(!1)), r || (r = ce(!1));
  const i = ce();
  let c;
  const f = V(() => {
    var u;
    return !!(!e.label && t && t.inputIds && ((u = t.inputIds) == null ? void 0 : u.length) <= 1);
  });
  return jt(() => {
    c = be([ln(e, "id"), n], ([u, h]) => {
      const g = u ?? (h ? void 0 : pp().value);
      g !== i.value && (t != null && t.removeInputId && (i.value && t.removeInputId(i.value), !(r != null && r.value) && !h && g && t.addInputId(g)), i.value = g);
    }, { immediate: !0 });
  }), ig(() => {
    c && c(), t != null && t.removeInputId && i.value && t.removeInputId(i.value);
  }), {
    isLabeledByFormItem: f,
    inputId: i
  };
};
var pE = {
  name: "en",
  el: {
    colorpicker: {
      confirm: "OK",
      clear: "Clear",
      defaultLabel: "color picker",
      description: "current color is {color}. press enter to select a new color."
    },
    datepicker: {
      now: "Now",
      today: "Today",
      cancel: "Cancel",
      clear: "Clear",
      confirm: "OK",
      dateTablePrompt: "Use the arrow keys and enter to select the day of the month",
      monthTablePrompt: "Use the arrow keys and enter to select the month",
      yearTablePrompt: "Use the arrow keys and enter to select the year",
      selectedDate: "Selected date",
      selectDate: "Select date",
      selectTime: "Select time",
      startDate: "Start Date",
      startTime: "Start Time",
      endDate: "End Date",
      endTime: "End Time",
      prevYear: "Previous Year",
      nextYear: "Next Year",
      prevMonth: "Previous Month",
      nextMonth: "Next Month",
      year: "",
      month1: "January",
      month2: "February",
      month3: "March",
      month4: "April",
      month5: "May",
      month6: "June",
      month7: "July",
      month8: "August",
      month9: "September",
      month10: "October",
      month11: "November",
      month12: "December",
      week: "week",
      weeks: {
        sun: "Sun",
        mon: "Mon",
        tue: "Tue",
        wed: "Wed",
        thu: "Thu",
        fri: "Fri",
        sat: "Sat"
      },
      weeksFull: {
        sun: "Sunday",
        mon: "Monday",
        tue: "Tuesday",
        wed: "Wednesday",
        thu: "Thursday",
        fri: "Friday",
        sat: "Saturday"
      },
      months: {
        jan: "Jan",
        feb: "Feb",
        mar: "Mar",
        apr: "Apr",
        may: "May",
        jun: "Jun",
        jul: "Jul",
        aug: "Aug",
        sep: "Sep",
        oct: "Oct",
        nov: "Nov",
        dec: "Dec"
      }
    },
    inputNumber: {
      decrease: "decrease number",
      increase: "increase number"
    },
    select: {
      loading: "Loading",
      noMatch: "No matching data",
      noData: "No data",
      placeholder: "Select"
    },
    dropdown: {
      toggleDropdown: "Toggle Dropdown"
    },
    cascader: {
      noMatch: "No matching data",
      loading: "Loading",
      placeholder: "Select",
      noData: "No data"
    },
    pagination: {
      goto: "Go to",
      pagesize: "/page",
      total: "Total {total}",
      pageClassifier: "",
      deprecationWarning: "Deprecated usages detected, please refer to the el-pagination documentation for more details"
    },
    dialog: {
      close: "Close this dialog"
    },
    drawer: {
      close: "Close this dialog"
    },
    messagebox: {
      title: "Message",
      confirm: "OK",
      cancel: "Cancel",
      error: "Illegal input",
      close: "Close this dialog"
    },
    upload: {
      deleteTip: "press delete to remove",
      delete: "Delete",
      preview: "Preview",
      continue: "Continue"
    },
    slider: {
      defaultLabel: "slider between {min} and {max}",
      defaultRangeStartLabel: "pick start value",
      defaultRangeEndLabel: "pick end value"
    },
    table: {
      emptyText: "No Data",
      confirmFilter: "Confirm",
      resetFilter: "Reset",
      clearFilter: "All",
      sumText: "Sum"
    },
    tree: {
      emptyText: "No Data"
    },
    transfer: {
      noMatch: "No matching data",
      noData: "No data",
      titles: ["List 1", "List 2"],
      filterPlaceholder: "Enter keyword",
      noCheckedFormat: "{total} items",
      hasCheckedFormat: "{checked}/{total} checked"
    },
    image: {
      error: "FAILED"
    },
    pageHeader: {
      title: "Back"
    },
    popconfirm: {
      confirmButtonText: "Yes",
      cancelButtonText: "No"
    }
  }
};
const hE = (e) => (t, n) => vE(t, n, m(e)), vE = (e, t, n) => Gt(n, e, e).replace(/\{(\w+)\}/g, (r, i) => {
  var c;
  return `${(c = t == null ? void 0 : t[i]) != null ? c : `{${i}}`}`;
}), gE = (e) => {
  const t = V(() => m(e).name), n = qo(e) ? e : ce(e);
  return {
    lang: t,
    locale: n,
    t: hE(e)
  };
}, zr = () => {
  const e = Dr("locale");
  return gE(V(() => e.value || pE));
}, mE = xi({
  type: Ne(Boolean),
  default: null
}), yE = xi({
  type: Ne(Function)
}), bE = (e) => {
  const t = `update:${e}`, n = `onUpdate:${e}`, r = [t], i = {
    [e]: mE,
    [n]: yE
  };
  return {
    useModelToggle: ({
      indicator: c,
      toggleReason: f,
      shouldHideWhenRouteChanges: u,
      shouldProceed: h,
      onShow: g,
      onHide: w
    }) => {
      const _ = Ut(), { emit: k } = _, T = _.props, x = V(() => qt(T[n])), S = V(() => T[e] === null), M = (N) => {
        c.value !== !0 && (c.value = !0, f && (f.value = N), qt(g) && g(N));
      }, O = (N) => {
        c.value !== !1 && (c.value = !1, f && (f.value = N), qt(w) && w(N));
      }, I = (N) => {
        if (T.disabled === !0 || qt(h) && !h())
          return;
        const H = x.value && Lt;
        H && k(t, !0), (S.value || !H) && M(N);
      }, K = (N) => {
        if (T.disabled === !0 || !Lt)
          return;
        const H = x.value && Lt;
        H && k(t, !1), (S.value || !H) && O(N);
      }, L = (N) => {
        Jo(N) && (T.disabled && N ? x.value && k(t, !1) : c.value !== N && (N ? M() : O()));
      }, q = () => {
        c.value ? K() : I();
      };
      return be(() => T[e], L), u && _.appContext.config.globalProperties.$route !== void 0 && be(() => ({
        ..._.proxy.$route
      }), () => {
        u.value && c.value && K();
      }), jt(() => {
        L(T[e]);
      }), {
        hide: K,
        show: I,
        toggle: q,
        hasUpdateHandler: x
      };
    },
    useModelToggleProps: i,
    useModelToggleEmits: r
  };
};
var Ht = "top", Jt = "bottom", en = "right", Vt = "left", kl = "auto", ua = [Ht, Jt, en, Vt], eo = "start", aa = "end", wE = "clippingParents", hp = "viewport", No = "popper", xE = "reference", ud = ua.reduce(function(e, t) {
  return e.concat([t + "-" + eo, t + "-" + aa]);
}, []), Si = [].concat(ua, [kl]).reduce(function(e, t) {
  return e.concat([t, t + "-" + eo, t + "-" + aa]);
}, []), _E = "beforeRead", SE = "read", kE = "afterRead", EE = "beforeMain", OE = "main", CE = "afterMain", TE = "beforeWrite", ME = "write", PE = "afterWrite", AE = [_E, SE, kE, EE, OE, CE, TE, ME, PE];
function _n(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function vn(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function to(e) {
  var t = vn(e).Element;
  return e instanceof t || e instanceof Element;
}
function Qt(e) {
  var t = vn(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function El(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = vn(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function jE(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, i = t.attributes[n] || {}, c = t.elements[n];
    !Qt(c) || !_n(c) || (Object.assign(c.style, r), Object.keys(i).forEach(function(f) {
      var u = i[f];
      u === !1 ? c.removeAttribute(f) : c.setAttribute(f, u === !0 ? "" : u);
    }));
  });
}
function IE(e) {
  var t = e.state, n = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(r) {
      var i = t.elements[r], c = t.attributes[r] || {}, f = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), u = f.reduce(function(h, g) {
        return h[g] = "", h;
      }, {});
      !Qt(i) || !_n(i) || (Object.assign(i.style, u), Object.keys(c).forEach(function(h) {
        i.removeAttribute(h);
      }));
    });
  };
}
var vp = { name: "applyStyles", enabled: !0, phase: "write", fn: jE, effect: IE, requires: ["computeStyles"] };
function wn(e) {
  return e.split("-")[0];
}
var xr = Math.max, si = Math.min, no = Math.round;
function ro(e, t) {
  t === void 0 && (t = !1);
  var n = e.getBoundingClientRect(), r = 1, i = 1;
  if (Qt(e) && t) {
    var c = e.offsetHeight, f = e.offsetWidth;
    f > 0 && (r = no(n.width) / f || 1), c > 0 && (i = no(n.height) / c || 1);
  }
  return { width: n.width / r, height: n.height / i, top: n.top / i, right: n.right / r, bottom: n.bottom / i, left: n.left / r, x: n.left / r, y: n.top / i };
}
function Ol(e) {
  var t = ro(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), { x: e.offsetLeft, y: e.offsetTop, width: n, height: r };
}
function gp(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && El(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function $n(e) {
  return vn(e).getComputedStyle(e);
}
function DE(e) {
  return ["table", "td", "th"].indexOf(_n(e)) >= 0;
}
function tr(e) {
  return ((to(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function ki(e) {
  return _n(e) === "html" ? e : e.assignedSlot || e.parentNode || (El(e) ? e.host : null) || tr(e);
}
function cd(e) {
  return !Qt(e) || $n(e).position === "fixed" ? null : e.offsetParent;
}
function $E(e) {
  var t = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1, n = navigator.userAgent.indexOf("Trident") !== -1;
  if (n && Qt(e)) {
    var r = $n(e);
    if (r.position === "fixed")
      return null;
  }
  var i = ki(e);
  for (El(i) && (i = i.host); Qt(i) && ["html", "body"].indexOf(_n(i)) < 0; ) {
    var c = $n(i);
    if (c.transform !== "none" || c.perspective !== "none" || c.contain === "paint" || ["transform", "perspective"].indexOf(c.willChange) !== -1 || t && c.willChange === "filter" || t && c.filter && c.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function ca(e) {
  for (var t = vn(e), n = cd(e); n && DE(n) && $n(n).position === "static"; )
    n = cd(n);
  return n && (_n(n) === "html" || _n(n) === "body" && $n(n).position === "static") ? t : n || $E(e) || t;
}
function Cl(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Wo(e, t, n) {
  return xr(e, si(t, n));
}
function zE(e, t, n) {
  var r = Wo(e, t, n);
  return r > n ? n : r;
}
function mp() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function yp(e) {
  return Object.assign({}, mp(), e);
}
function bp(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var NE = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, yp(typeof e != "number" ? e : bp(e, ua));
};
function RE(e) {
  var t, n = e.state, r = e.name, i = e.options, c = n.elements.arrow, f = n.modifiersData.popperOffsets, u = wn(n.placement), h = Cl(u), g = [Vt, en].indexOf(u) >= 0, w = g ? "height" : "width";
  if (!(!c || !f)) {
    var _ = NE(i.padding, n), k = Ol(c), T = h === "y" ? Ht : Vt, x = h === "y" ? Jt : en, S = n.rects.reference[w] + n.rects.reference[h] - f[h] - n.rects.popper[w], M = f[h] - n.rects.reference[h], O = ca(c), I = O ? h === "y" ? O.clientHeight || 0 : O.clientWidth || 0 : 0, K = S / 2 - M / 2, L = _[T], q = I - k[w] - _[x], N = I / 2 - k[w] / 2 + K, H = Wo(L, N, q), F = h;
    n.modifiersData[r] = (t = {}, t[F] = H, t.centerOffset = H - N, t);
  }
}
function LE(e) {
  var t = e.state, n = e.options, r = n.element, i = r === void 0 ? "[data-popper-arrow]" : r;
  i != null && (typeof i == "string" && (i = t.elements.popper.querySelector(i), !i) || !gp(t.elements.popper, i) || (t.elements.arrow = i));
}
var BE = { name: "arrow", enabled: !0, phase: "main", fn: RE, effect: LE, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function oo(e) {
  return e.split("-")[1];
}
var FE = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function HE(e) {
  var t = e.x, n = e.y, r = window, i = r.devicePixelRatio || 1;
  return { x: no(t * i) / i || 0, y: no(n * i) / i || 0 };
}
function dd(e) {
  var t, n = e.popper, r = e.popperRect, i = e.placement, c = e.variation, f = e.offsets, u = e.position, h = e.gpuAcceleration, g = e.adaptive, w = e.roundOffsets, _ = e.isFixed, k = f.x, T = k === void 0 ? 0 : k, x = f.y, S = x === void 0 ? 0 : x, M = typeof w == "function" ? w({ x: T, y: S }) : { x: T, y: S };
  T = M.x, S = M.y;
  var O = f.hasOwnProperty("x"), I = f.hasOwnProperty("y"), K = Vt, L = Ht, q = window;
  if (g) {
    var N = ca(n), H = "clientHeight", F = "clientWidth";
    if (N === vn(n) && (N = tr(n), $n(N).position !== "static" && u === "absolute" && (H = "scrollHeight", F = "scrollWidth")), N = N, i === Ht || (i === Vt || i === en) && c === aa) {
      L = Jt;
      var le = _ && N === q && q.visualViewport ? q.visualViewport.height : N[H];
      S -= le - r.height, S *= h ? 1 : -1;
    }
    if (i === Vt || (i === Ht || i === Jt) && c === aa) {
      K = en;
      var re = _ && N === q && q.visualViewport ? q.visualViewport.width : N[F];
      T -= re - r.width, T *= h ? 1 : -1;
    }
  }
  var fe = Object.assign({ position: u }, g && FE), _e = w === !0 ? HE({ x: T, y: S }) : { x: T, y: S };
  if (T = _e.x, S = _e.y, h) {
    var ne;
    return Object.assign({}, fe, (ne = {}, ne[L] = I ? "0" : "", ne[K] = O ? "0" : "", ne.transform = (q.devicePixelRatio || 1) <= 1 ? "translate(" + T + "px, " + S + "px)" : "translate3d(" + T + "px, " + S + "px, 0)", ne));
  }
  return Object.assign({}, fe, (t = {}, t[L] = I ? S + "px" : "", t[K] = O ? T + "px" : "", t.transform = "", t));
}
function VE(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, i = r === void 0 ? !0 : r, c = n.adaptive, f = c === void 0 ? !0 : c, u = n.roundOffsets, h = u === void 0 ? !0 : u, g = { placement: wn(t.placement), variation: oo(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: i, isFixed: t.options.strategy === "fixed" };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, dd(Object.assign({}, g, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: f, roundOffsets: h })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, dd(Object.assign({}, g, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: h })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var wp = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: VE, data: {} }, Wa = { passive: !0 };
function WE(e) {
  var t = e.state, n = e.instance, r = e.options, i = r.scroll, c = i === void 0 ? !0 : i, f = r.resize, u = f === void 0 ? !0 : f, h = vn(t.elements.popper), g = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return c && g.forEach(function(w) {
    w.addEventListener("scroll", n.update, Wa);
  }), u && h.addEventListener("resize", n.update, Wa), function() {
    c && g.forEach(function(w) {
      w.removeEventListener("scroll", n.update, Wa);
    }), u && h.removeEventListener("resize", n.update, Wa);
  };
}
var xp = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
}, effect: WE, data: {} }, KE = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Qa(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return KE[t];
  });
}
var qE = { start: "end", end: "start" };
function fd(e) {
  return e.replace(/start|end/g, function(t) {
    return qE[t];
  });
}
function Tl(e) {
  var t = vn(e), n = t.pageXOffset, r = t.pageYOffset;
  return { scrollLeft: n, scrollTop: r };
}
function Ml(e) {
  return ro(tr(e)).left + Tl(e).scrollLeft;
}
function UE(e) {
  var t = vn(e), n = tr(e), r = t.visualViewport, i = n.clientWidth, c = n.clientHeight, f = 0, u = 0;
  return r && (i = r.width, c = r.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (f = r.offsetLeft, u = r.offsetTop)), { width: i, height: c, x: f + Ml(e), y: u };
}
function YE(e) {
  var t, n = tr(e), r = Tl(e), i = (t = e.ownerDocument) == null ? void 0 : t.body, c = xr(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), f = xr(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), u = -r.scrollLeft + Ml(e), h = -r.scrollTop;
  return $n(i || n).direction === "rtl" && (u += xr(n.clientWidth, i ? i.clientWidth : 0) - c), { width: c, height: f, x: u, y: h };
}
function Pl(e) {
  var t = $n(e), n = t.overflow, r = t.overflowX, i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + i + r);
}
function _p(e) {
  return ["html", "body", "#document"].indexOf(_n(e)) >= 0 ? e.ownerDocument.body : Qt(e) && Pl(e) ? e : _p(ki(e));
}
function Ko(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = _p(e), i = r === ((n = e.ownerDocument) == null ? void 0 : n.body), c = vn(r), f = i ? [c].concat(c.visualViewport || [], Pl(r) ? r : []) : r, u = t.concat(f);
  return i ? u : u.concat(Ko(ki(f)));
}
function Vs(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function XE(e) {
  var t = ro(e);
  return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t;
}
function pd(e, t) {
  return t === hp ? Vs(UE(e)) : to(t) ? XE(t) : Vs(YE(tr(e)));
}
function GE(e) {
  var t = Ko(ki(e)), n = ["absolute", "fixed"].indexOf($n(e).position) >= 0, r = n && Qt(e) ? ca(e) : e;
  return to(r) ? t.filter(function(i) {
    return to(i) && gp(i, r) && _n(i) !== "body";
  }) : [];
}
function ZE(e, t, n) {
  var r = t === "clippingParents" ? GE(e) : [].concat(t), i = [].concat(r, [n]), c = i[0], f = i.reduce(function(u, h) {
    var g = pd(e, h);
    return u.top = xr(g.top, u.top), u.right = si(g.right, u.right), u.bottom = si(g.bottom, u.bottom), u.left = xr(g.left, u.left), u;
  }, pd(e, c));
  return f.width = f.right - f.left, f.height = f.bottom - f.top, f.x = f.left, f.y = f.top, f;
}
function Sp(e) {
  var t = e.reference, n = e.element, r = e.placement, i = r ? wn(r) : null, c = r ? oo(r) : null, f = t.x + t.width / 2 - n.width / 2, u = t.y + t.height / 2 - n.height / 2, h;
  switch (i) {
    case Ht:
      h = { x: f, y: t.y - n.height };
      break;
    case Jt:
      h = { x: f, y: t.y + t.height };
      break;
    case en:
      h = { x: t.x + t.width, y: u };
      break;
    case Vt:
      h = { x: t.x - n.width, y: u };
      break;
    default:
      h = { x: t.x, y: t.y };
  }
  var g = i ? Cl(i) : null;
  if (g != null) {
    var w = g === "y" ? "height" : "width";
    switch (c) {
      case eo:
        h[g] = h[g] - (t[w] / 2 - n[w] / 2);
        break;
      case aa:
        h[g] = h[g] + (t[w] / 2 - n[w] / 2);
        break;
    }
  }
  return h;
}
function ia(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, i = r === void 0 ? e.placement : r, c = n.boundary, f = c === void 0 ? wE : c, u = n.rootBoundary, h = u === void 0 ? hp : u, g = n.elementContext, w = g === void 0 ? No : g, _ = n.altBoundary, k = _ === void 0 ? !1 : _, T = n.padding, x = T === void 0 ? 0 : T, S = yp(typeof x != "number" ? x : bp(x, ua)), M = w === No ? xE : No, O = e.rects.popper, I = e.elements[k ? M : w], K = ZE(to(I) ? I : I.contextElement || tr(e.elements.popper), f, h), L = ro(e.elements.reference), q = Sp({ reference: L, element: O, strategy: "absolute", placement: i }), N = Vs(Object.assign({}, O, q)), H = w === No ? N : L, F = { top: K.top - H.top + S.top, bottom: H.bottom - K.bottom + S.bottom, left: K.left - H.left + S.left, right: H.right - K.right + S.right }, le = e.modifiersData.offset;
  if (w === No && le) {
    var re = le[i];
    Object.keys(F).forEach(function(fe) {
      var _e = [en, Jt].indexOf(fe) >= 0 ? 1 : -1, ne = [Ht, Jt].indexOf(fe) >= 0 ? "y" : "x";
      F[fe] += re[ne] * _e;
    });
  }
  return F;
}
function QE(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, i = n.boundary, c = n.rootBoundary, f = n.padding, u = n.flipVariations, h = n.allowedAutoPlacements, g = h === void 0 ? Si : h, w = oo(r), _ = w ? u ? ud : ud.filter(function(x) {
    return oo(x) === w;
  }) : ua, k = _.filter(function(x) {
    return g.indexOf(x) >= 0;
  });
  k.length === 0 && (k = _);
  var T = k.reduce(function(x, S) {
    return x[S] = ia(e, { placement: S, boundary: i, rootBoundary: c, padding: f })[wn(S)], x;
  }, {});
  return Object.keys(T).sort(function(x, S) {
    return T[x] - T[S];
  });
}
function JE(e) {
  if (wn(e) === kl)
    return [];
  var t = Qa(e);
  return [fd(e), t, fd(t)];
}
function eO(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var i = n.mainAxis, c = i === void 0 ? !0 : i, f = n.altAxis, u = f === void 0 ? !0 : f, h = n.fallbackPlacements, g = n.padding, w = n.boundary, _ = n.rootBoundary, k = n.altBoundary, T = n.flipVariations, x = T === void 0 ? !0 : T, S = n.allowedAutoPlacements, M = t.options.placement, O = wn(M), I = O === M, K = h || (I || !x ? [Qa(M)] : JE(M)), L = [M].concat(K).reduce(function($e, ee) {
      return $e.concat(wn(ee) === kl ? QE(t, { placement: ee, boundary: w, rootBoundary: _, padding: g, flipVariations: x, allowedAutoPlacements: S }) : ee);
    }, []), q = t.rects.reference, N = t.rects.popper, H = /* @__PURE__ */ new Map(), F = !0, le = L[0], re = 0; re < L.length; re++) {
      var fe = L[re], _e = wn(fe), ne = oo(fe) === eo, Q = [Ht, Jt].indexOf(_e) >= 0, A = Q ? "width" : "height", G = ia(t, { placement: fe, boundary: w, rootBoundary: _, altBoundary: k, padding: g }), z = Q ? ne ? en : Vt : ne ? Jt : Ht;
      q[A] > N[A] && (z = Qa(z));
      var U = Qa(z), D = [];
      if (c && D.push(G[_e] <= 0), u && D.push(G[z] <= 0, G[U] <= 0), D.every(function($e) {
        return $e;
      })) {
        le = fe, F = !1;
        break;
      }
      H.set(fe, D);
    }
    if (F)
      for (var X = x ? 3 : 1, oe = function($e) {
        var ee = L.find(function(He) {
          var Ve = H.get(He);
          if (Ve)
            return Ve.slice(0, $e).every(function(Le) {
              return Le;
            });
        });
        if (ee)
          return le = ee, "break";
      }, ue = X; ue > 0; ue--) {
        var ye = oe(ue);
        if (ye === "break")
          break;
      }
    t.placement !== le && (t.modifiersData[r]._skip = !0, t.placement = le, t.reset = !0);
  }
}
var tO = { name: "flip", enabled: !0, phase: "main", fn: eO, requiresIfExists: ["offset"], data: { _skip: !1 } };
function hd(e, t, n) {
  return n === void 0 && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x };
}
function vd(e) {
  return [Ht, en, Jt, Vt].some(function(t) {
    return e[t] >= 0;
  });
}
function nO(e) {
  var t = e.state, n = e.name, r = t.rects.reference, i = t.rects.popper, c = t.modifiersData.preventOverflow, f = ia(t, { elementContext: "reference" }), u = ia(t, { altBoundary: !0 }), h = hd(f, r), g = hd(u, i, c), w = vd(h), _ = vd(g);
  t.modifiersData[n] = { referenceClippingOffsets: h, popperEscapeOffsets: g, isReferenceHidden: w, hasPopperEscaped: _ }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": w, "data-popper-escaped": _ });
}
var rO = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: nO };
function oO(e, t, n) {
  var r = wn(e), i = [Vt, Ht].indexOf(r) >= 0 ? -1 : 1, c = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, f = c[0], u = c[1];
  return f = f || 0, u = (u || 0) * i, [Vt, en].indexOf(r) >= 0 ? { x: u, y: f } : { x: f, y: u };
}
function aO(e) {
  var t = e.state, n = e.options, r = e.name, i = n.offset, c = i === void 0 ? [0, 0] : i, f = Si.reduce(function(w, _) {
    return w[_] = oO(_, t.rects, c), w;
  }, {}), u = f[t.placement], h = u.x, g = u.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += h, t.modifiersData.popperOffsets.y += g), t.modifiersData[r] = f;
}
var iO = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: aO };
function sO(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = Sp({ reference: t.rects.reference, element: t.rects.popper, strategy: "absolute", placement: t.placement });
}
var kp = { name: "popperOffsets", enabled: !0, phase: "read", fn: sO, data: {} };
function lO(e) {
  return e === "x" ? "y" : "x";
}
function uO(e) {
  var t = e.state, n = e.options, r = e.name, i = n.mainAxis, c = i === void 0 ? !0 : i, f = n.altAxis, u = f === void 0 ? !1 : f, h = n.boundary, g = n.rootBoundary, w = n.altBoundary, _ = n.padding, k = n.tether, T = k === void 0 ? !0 : k, x = n.tetherOffset, S = x === void 0 ? 0 : x, M = ia(t, { boundary: h, rootBoundary: g, padding: _, altBoundary: w }), O = wn(t.placement), I = oo(t.placement), K = !I, L = Cl(O), q = lO(L), N = t.modifiersData.popperOffsets, H = t.rects.reference, F = t.rects.popper, le = typeof S == "function" ? S(Object.assign({}, t.rects, { placement: t.placement })) : S, re = typeof le == "number" ? { mainAxis: le, altAxis: le } : Object.assign({ mainAxis: 0, altAxis: 0 }, le), fe = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, _e = { x: 0, y: 0 };
  if (N) {
    if (c) {
      var ne, Q = L === "y" ? Ht : Vt, A = L === "y" ? Jt : en, G = L === "y" ? "height" : "width", z = N[L], U = z + M[Q], D = z - M[A], X = T ? -F[G] / 2 : 0, oe = I === eo ? H[G] : F[G], ue = I === eo ? -F[G] : -H[G], ye = t.elements.arrow, $e = T && ye ? Ol(ye) : { width: 0, height: 0 }, ee = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : mp(), He = ee[Q], Ve = ee[A], Le = Wo(0, H[G], $e[G]), se = K ? H[G] / 2 - X - Le - He - re.mainAxis : oe - Le - He - re.mainAxis, pe = K ? -H[G] / 2 + X + Le + Ve + re.mainAxis : ue + Le + Ve + re.mainAxis, Te = t.elements.arrow && ca(t.elements.arrow), Oe = Te ? L === "y" ? Te.clientTop || 0 : Te.clientLeft || 0 : 0, Fe = (ne = fe == null ? void 0 : fe[L]) != null ? ne : 0, et = z + se - Fe - Oe, nt = z + pe - Fe, je = Wo(T ? si(U, et) : U, z, T ? xr(D, nt) : D);
      N[L] = je, _e[L] = je - z;
    }
    if (u) {
      var Ie, xt = L === "x" ? Ht : Vt, Ge = L === "x" ? Jt : en, ht = N[q], st = q === "y" ? "height" : "width", $ = ht + M[xt], ve = ht - M[Ge], Ce = [Ht, Vt].indexOf(O) !== -1, Re = (Ie = fe == null ? void 0 : fe[q]) != null ? Ie : 0, qe = Ce ? $ : ht - H[st] - F[st] - Re + re.altAxis, ze = Ce ? ht + H[st] + F[st] - Re - re.altAxis : ve, me = T && Ce ? zE(qe, ht, ze) : Wo(T ? qe : $, ht, T ? ze : ve);
      N[q] = me, _e[q] = me - ht;
    }
    t.modifiersData[r] = _e;
  }
}
var cO = { name: "preventOverflow", enabled: !0, phase: "main", fn: uO, requiresIfExists: ["offset"] };
function dO(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function fO(e) {
  return e === vn(e) || !Qt(e) ? Tl(e) : dO(e);
}
function pO(e) {
  var t = e.getBoundingClientRect(), n = no(t.width) / e.offsetWidth || 1, r = no(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function hO(e, t, n) {
  n === void 0 && (n = !1);
  var r = Qt(t), i = Qt(t) && pO(t), c = tr(t), f = ro(e, i), u = { scrollLeft: 0, scrollTop: 0 }, h = { x: 0, y: 0 };
  return (r || !r && !n) && ((_n(t) !== "body" || Pl(c)) && (u = fO(t)), Qt(t) ? (h = ro(t, !0), h.x += t.clientLeft, h.y += t.clientTop) : c && (h.x = Ml(c))), { x: f.left + u.scrollLeft - h.x, y: f.top + u.scrollTop - h.y, width: f.width, height: f.height };
}
function vO(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
  e.forEach(function(c) {
    t.set(c.name, c);
  });
  function i(c) {
    n.add(c.name);
    var f = [].concat(c.requires || [], c.requiresIfExists || []);
    f.forEach(function(u) {
      if (!n.has(u)) {
        var h = t.get(u);
        h && i(h);
      }
    }), r.push(c);
  }
  return e.forEach(function(c) {
    n.has(c.name) || i(c);
  }), r;
}
function gO(e) {
  var t = vO(e);
  return AE.reduce(function(n, r) {
    return n.concat(t.filter(function(i) {
      return i.phase === r;
    }));
  }, []);
}
function mO(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function yO(e) {
  var t = e.reduce(function(n, r) {
    var i = n[r.name];
    return n[r.name] = i ? Object.assign({}, i, r, { options: Object.assign({}, i.options, r.options), data: Object.assign({}, i.data, r.data) }) : r, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var gd = { placement: "bottom", modifiers: [], strategy: "absolute" };
function md() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function Al(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, i = t.defaultOptions, c = i === void 0 ? gd : i;
  return function(f, u, h) {
    h === void 0 && (h = c);
    var g = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, gd, c), modifiersData: {}, elements: { reference: f, popper: u }, attributes: {}, styles: {} }, w = [], _ = !1, k = { state: g, setOptions: function(S) {
      var M = typeof S == "function" ? S(g.options) : S;
      x(), g.options = Object.assign({}, c, g.options, M), g.scrollParents = { reference: to(f) ? Ko(f) : f.contextElement ? Ko(f.contextElement) : [], popper: Ko(u) };
      var O = gO(yO([].concat(r, g.options.modifiers)));
      return g.orderedModifiers = O.filter(function(I) {
        return I.enabled;
      }), T(), k.update();
    }, forceUpdate: function() {
      if (!_) {
        var S = g.elements, M = S.reference, O = S.popper;
        if (md(M, O)) {
          g.rects = { reference: hO(M, ca(O), g.options.strategy === "fixed"), popper: Ol(O) }, g.reset = !1, g.placement = g.options.placement, g.orderedModifiers.forEach(function(F) {
            return g.modifiersData[F.name] = Object.assign({}, F.data);
          });
          for (var I = 0; I < g.orderedModifiers.length; I++) {
            if (g.reset === !0) {
              g.reset = !1, I = -1;
              continue;
            }
            var K = g.orderedModifiers[I], L = K.fn, q = K.options, N = q === void 0 ? {} : q, H = K.name;
            typeof L == "function" && (g = L({ state: g, options: N, name: H, instance: k }) || g);
          }
        }
      }
    }, update: mO(function() {
      return new Promise(function(S) {
        k.forceUpdate(), S(g);
      });
    }), destroy: function() {
      x(), _ = !0;
    } };
    if (!md(f, u))
      return k;
    k.setOptions(h).then(function(S) {
      !_ && h.onFirstUpdate && h.onFirstUpdate(S);
    });
    function T() {
      g.orderedModifiers.forEach(function(S) {
        var M = S.name, O = S.options, I = O === void 0 ? {} : O, K = S.effect;
        if (typeof K == "function") {
          var L = K({ state: g, name: M, instance: k, options: I }), q = function() {
          };
          w.push(L || q);
        }
      });
    }
    function x() {
      w.forEach(function(S) {
        return S();
      }), w = [];
    }
    return k;
  };
}
Al();
var bO = [xp, kp, wp, vp];
Al({ defaultModifiers: bO });
var wO = [xp, kp, wp, vp, iO, tO, cO, BE, rO], xO = Al({ defaultModifiers: wO });
const _O = (e, t, n = {}) => {
  const r = {
    name: "updateState",
    enabled: !0,
    phase: "write",
    fn: ({ state: h }) => {
      const g = SO(h);
      Object.assign(f.value, g);
    },
    requires: ["computeStyles"]
  }, i = V(() => {
    const { onFirstUpdate: h, placement: g, strategy: w, modifiers: _ } = m(n);
    return {
      onFirstUpdate: h,
      placement: g || "bottom",
      strategy: w || "absolute",
      modifiers: [
        ..._ || [],
        r,
        { name: "applyStyles", enabled: !1 }
      ]
    };
  }), c = Zn(), f = ce({
    styles: {
      popper: {
        position: m(i).strategy,
        left: "0",
        right: "0"
      },
      arrow: {
        position: "absolute"
      }
    },
    attributes: {}
  }), u = () => {
    c.value && (c.value.destroy(), c.value = void 0);
  };
  return be(i, (h) => {
    const g = m(c);
    g && g.setOptions(h);
  }, {
    deep: !0
  }), be([e, t], ([h, g]) => {
    u(), !(!h || !g) && (c.value = xO(h, g, m(i)));
  }), fn(() => {
    u();
  }), {
    state: V(() => {
      var h;
      return { ...((h = m(c)) == null ? void 0 : h.state) || {} };
    }),
    styles: V(() => m(f).styles),
    attributes: V(() => m(f).attributes),
    update: () => {
      var h;
      return (h = m(c)) == null ? void 0 : h.update();
    },
    forceUpdate: () => {
      var h;
      return (h = m(c)) == null ? void 0 : h.forceUpdate();
    },
    instanceRef: V(() => m(c))
  };
};
function SO(e) {
  const t = Object.keys(e.elements), n = ai(t.map((i) => [i, e.styles[i] || {}])), r = ai(t.map((i) => [i, e.attributes[i]]));
  return {
    styles: n,
    attributes: r
  };
}
function kO() {
  let e;
  const t = (r, i) => {
    n(), e = window.setTimeout(r, i);
  }, n = () => window.clearTimeout(e);
  return vl(() => n()), {
    registerTimeout: t,
    cancelTimeout: n
  };
}
let qr = [];
const yd = (e) => {
  const t = e;
  t.key === wt.esc && qr.forEach((n) => n(t));
}, EO = (e) => {
  jt(() => {
    qr.length === 0 && document.addEventListener("keydown", yd), Lt && qr.push(e);
  }), fn(() => {
    qr = qr.filter((t) => t !== e), qr.length === 0 && Lt && document.removeEventListener("keydown", yd);
  });
};
let bd;
const Ep = () => {
  const e = Dr("namespace", _l), t = fp(), n = V(() => `${e.value}-popper-container-${t.prefix}`), r = V(() => `#${n.value}`);
  return {
    id: n,
    selector: r
  };
}, OO = (e) => {
  const t = document.createElement("div");
  return t.id = e, document.body.appendChild(t), t;
}, CO = () => {
  Kd(() => {
    if (!Lt)
      return;
    const { id: e, selector: t } = Ep();
    (process.env.NODE_ENV === "test" || !bd && !document.body.querySelector(t.value)) && (bd = OO(e.value));
  });
}, TO = mt({
  showAfter: {
    type: Number,
    default: 0
  },
  hideAfter: {
    type: Number,
    default: 200
  }
}), MO = ({
  showAfter: e,
  hideAfter: t,
  open: n,
  close: r
}) => {
  const { registerTimeout: i } = kO();
  return {
    onOpen: (c) => {
      i(() => {
        n(c);
      }, m(e));
    },
    onClose: (c) => {
      i(() => {
        r(c);
      }, m(t));
    }
  };
}, Op = Symbol("elForwardRef"), PO = (e) => {
  Ot(Op, {
    setForwardRef: (t) => {
      e.value = t;
    }
  });
}, AO = (e) => ({
  mounted(t) {
    e(t);
  },
  updated(t) {
    e(t);
  },
  unmounted() {
    e(null);
  }
}), wd = ce(0), jO = () => {
  const e = Dr("zIndex", 2e3), t = V(() => e.value + wd.value);
  return {
    initialZIndex: e,
    currentZIndex: t,
    nextZIndex: () => (wd.value++, t.value)
  };
};
function IO(e) {
  const t = ce();
  function n() {
    if (e.value == null)
      return;
    const { selectionStart: i, selectionEnd: c, value: f } = e.value;
    if (i == null || c == null)
      return;
    const u = f.slice(0, Math.max(0, i)), h = f.slice(Math.max(0, c));
    t.value = {
      selectionStart: i,
      selectionEnd: c,
      value: f,
      beforeTxt: u,
      afterTxt: h
    };
  }
  function r() {
    if (e.value == null || t.value == null)
      return;
    const { value: i } = e.value, { beforeTxt: c, afterTxt: f, selectionStart: u } = t.value;
    if (c == null || f == null || u == null)
      return;
    let h = i.length;
    if (i.endsWith(f))
      h = i.length - f.length;
    else if (i.startsWith(c))
      h = c.length;
    else {
      const g = c[u - 1], w = i.indexOf(g, u - 1);
      w !== -1 && (h = w + 1);
    }
    e.value.setSelectionRange(h, h);
  }
  return [n, r];
}
var Je = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, i] of t)
    n[r] = i;
  return n;
};
const DO = mt({
  size: {
    type: Ne([Number, String])
  },
  color: {
    type: String
  }
}), $O = Ae({
  name: "ElIcon",
  inheritAttrs: !1
}), zO = /* @__PURE__ */ Ae({
  ...$O,
  props: DO,
  setup(e) {
    const t = e, n = Ke("icon"), r = V(() => {
      const { size: i, color: c } = t;
      return !i && !c ? {} : {
        fontSize: na(i) ? void 0 : Fs(i),
        "--color": c
      };
    });
    return (i, c) => (Y(), he("i", bn({
      class: m(n).b(),
      style: m(r)
    }, i.$attrs), [
      Ze(i.$slots, "default")
    ], 16));
  }
});
var NO = /* @__PURE__ */ Je(zO, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/icon/src/icon.vue"]]);
const Mt = Ln(NO);
let rn;
const RO = `
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`, LO = [
  "letter-spacing",
  "line-height",
  "padding-top",
  "padding-bottom",
  "font-family",
  "font-weight",
  "font-size",
  "text-rendering",
  "text-transform",
  "width",
  "text-indent",
  "padding-left",
  "padding-right",
  "border-width",
  "box-sizing"
];
function BO(e) {
  const t = window.getComputedStyle(e), n = t.getPropertyValue("box-sizing"), r = Number.parseFloat(t.getPropertyValue("padding-bottom")) + Number.parseFloat(t.getPropertyValue("padding-top")), i = Number.parseFloat(t.getPropertyValue("border-bottom-width")) + Number.parseFloat(t.getPropertyValue("border-top-width"));
  return { contextStyle: LO.map((c) => `${c}:${t.getPropertyValue(c)}`).join(";"), paddingSize: r, borderSize: i, boxSizing: n };
}
function xd(e, t = 1, n) {
  var r;
  rn || (rn = document.createElement("textarea"), document.body.appendChild(rn));
  const { paddingSize: i, borderSize: c, boxSizing: f, contextStyle: u } = BO(e);
  rn.setAttribute("style", `${u};${RO}`), rn.value = e.value || e.placeholder || "";
  let h = rn.scrollHeight;
  const g = {};
  f === "border-box" ? h = h + c : f === "content-box" && (h = h - i), rn.value = "";
  const w = rn.scrollHeight - i;
  if (sn(t)) {
    let _ = w * t;
    f === "border-box" && (_ = _ + i + c), h = Math.max(_, h), g.minHeight = `${_}px`;
  }
  if (sn(n)) {
    let _ = w * n;
    f === "border-box" && (_ = _ + i + c), h = Math.min(_, h);
  }
  return g.height = `${h}px`, (r = rn.parentNode) == null || r.removeChild(rn), rn = void 0, g;
}
const FO = mt({
  id: {
    type: String,
    default: void 0
  },
  size: la,
  disabled: Boolean,
  modelValue: {
    type: Ne([
      String,
      Number,
      Object
    ]),
    default: ""
  },
  type: {
    type: String,
    default: "text"
  },
  resize: {
    type: String,
    values: ["none", "both", "horizontal", "vertical"]
  },
  autosize: {
    type: Ne([Boolean, Object]),
    default: !1
  },
  autocomplete: {
    type: String,
    default: "off"
  },
  formatter: {
    type: Function
  },
  parser: {
    type: Function
  },
  placeholder: {
    type: String
  },
  form: {
    type: String
  },
  readonly: {
    type: Boolean,
    default: !1
  },
  clearable: {
    type: Boolean,
    default: !1
  },
  showPassword: {
    type: Boolean,
    default: !1
  },
  showWordLimit: {
    type: Boolean,
    default: !1
  },
  suffixIcon: {
    type: Tr
  },
  prefixIcon: {
    type: Tr
  },
  containerRole: {
    type: String,
    default: void 0
  },
  label: {
    type: String,
    default: void 0
  },
  tabindex: {
    type: [String, Number],
    default: 0
  },
  validateEvent: {
    type: Boolean,
    default: !0
  },
  inputStyle: {
    type: Ne([Object, Array, String]),
    default: () => aE({})
  }
}), HO = {
  [Rt]: (e) => un(e),
  input: (e) => un(e),
  change: (e) => un(e),
  focus: (e) => e instanceof FocusEvent,
  blur: (e) => e instanceof FocusEvent,
  clear: () => !0,
  mouseleave: (e) => e instanceof MouseEvent,
  mouseenter: (e) => e instanceof MouseEvent,
  keydown: (e) => e instanceof Event,
  compositionstart: (e) => e instanceof CompositionEvent,
  compositionupdate: (e) => e instanceof CompositionEvent,
  compositionend: (e) => e instanceof CompositionEvent
}, VO = ["role"], WO = ["id", "type", "disabled", "formatter", "parser", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder", "form"], KO = ["id", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder", "form"], qO = Ae({
  name: "ElInput",
  inheritAttrs: !1
}), UO = /* @__PURE__ */ Ae({
  ...qO,
  props: FO,
  emits: HO,
  setup(e, { expose: t, emit: n }) {
    const r = e, i = Qv(), c = li(), f = V(() => {
      const $ = {};
      return r.containerRole === "combobox" && ($["aria-haspopup"] = i["aria-haspopup"], $["aria-owns"] = i["aria-owns"], $["aria-expanded"] = i["aria-expanded"]), $;
    }), u = V(() => [
      r.type === "textarea" ? M.b() : S.b(),
      S.m(T.value),
      S.is("disabled", x.value),
      S.is("exceed", oe.value),
      {
        [S.b("group")]: c.prepend || c.append,
        [S.bm("group", "append")]: c.append,
        [S.bm("group", "prepend")]: c.prepend,
        [S.m("prefix")]: c.prefix || r.prefixIcon,
        [S.m("suffix")]: c.suffix || r.suffixIcon || r.clearable || r.showPassword,
        [S.bm("suffix", "password-clear")]: z.value && U.value
      },
      i.class
    ]), h = V(() => [
      S.e("wrapper"),
      S.is("focus", K.value)
    ]), g = lE({
      excludeKeys: V(() => Object.keys(f.value))
    }), { form: w, formItem: _ } = $r(), { inputId: k } = Sl(r, {
      formItemContext: _
    }), T = Mr(), x = _i(), S = Ke("input"), M = Ke("textarea"), O = Zn(), I = Zn(), K = ce(!1), L = ce(!1), q = ce(!1), N = ce(!1), H = ce(), F = Zn(r.inputStyle), le = V(() => O.value || I.value), re = V(() => {
      var $;
      return ($ = w == null ? void 0 : w.statusIcon) != null ? $ : !1;
    }), fe = V(() => (_ == null ? void 0 : _.validateState) || ""), _e = V(() => fe.value && tE[fe.value]), ne = V(() => N.value ? Jk : Hk), Q = V(() => [
      i.style,
      r.inputStyle
    ]), A = V(() => [
      r.inputStyle,
      F.value,
      { resize: r.resize }
    ]), G = V(() => yi(r.modelValue) ? "" : String(r.modelValue)), z = V(() => r.clearable && !x.value && !r.readonly && !!G.value && (K.value || L.value)), U = V(() => r.showPassword && !x.value && !r.readonly && !!G.value && (!!G.value || K.value)), D = V(() => r.showWordLimit && !!g.value.maxlength && (r.type === "text" || r.type === "textarea") && !x.value && !r.readonly && !r.showPassword), X = V(() => Array.from(G.value).length), oe = V(() => !!D.value && X.value > Number(g.value.maxlength)), ue = V(() => !!c.suffix || !!r.suffixIcon || z.value || r.showPassword || D.value || !!fe.value && re.value), [ye, $e] = IO(O);
    bi(I, ($) => {
      if (!D.value || r.resize !== "both")
        return;
      const ve = $[0], { width: Ce } = ve.contentRect;
      H.value = {
        right: `calc(100% - ${Ce + 15 + 6}px)`
      };
    });
    const ee = () => {
      const { type: $, autosize: ve } = r;
      if (!(!Lt || $ !== "textarea"))
        if (ve) {
          const Ce = dn(ve) ? ve.minRows : void 0, Re = dn(ve) ? ve.maxRows : void 0;
          F.value = {
            ...xd(I.value, Ce, Re)
          };
        } else
          F.value = {
            minHeight: xd(I.value).minHeight
          };
    }, He = () => {
      const $ = le.value;
      !$ || $.value === G.value || ($.value = G.value);
    }, Ve = async ($) => {
      ye();
      let { value: ve } = $.target;
      if (r.formatter && (ve = r.parser ? r.parser(ve) : ve, ve = r.formatter(ve)), !q.value) {
        if (ve === G.value) {
          He();
          return;
        }
        n(Rt, ve), n("input", ve), await Xe(), He(), $e();
      }
    }, Le = ($) => {
      n("change", $.target.value);
    }, se = ($) => {
      n("compositionstart", $), q.value = !0;
    }, pe = ($) => {
      var ve;
      n("compositionupdate", $);
      const Ce = (ve = $.target) == null ? void 0 : ve.value, Re = Ce[Ce.length - 1] || "";
      q.value = !ip(Re);
    }, Te = ($) => {
      n("compositionend", $), q.value && (q.value = !1, Ve($));
    }, Oe = () => {
      N.value = !N.value, Fe();
    }, Fe = async () => {
      var $;
      await Xe(), ($ = le.value) == null || $.focus();
    }, et = () => {
      var $;
      return ($ = le.value) == null ? void 0 : $.blur();
    }, nt = ($) => {
      K.value = !0, n("focus", $);
    }, je = ($) => {
      var ve;
      K.value = !1, n("blur", $), r.validateEvent && ((ve = _ == null ? void 0 : _.validate) == null || ve.call(_, "blur").catch((Ce) => Pt(Ce)));
    }, Ie = ($) => {
      L.value = !1, n("mouseleave", $);
    }, xt = ($) => {
      L.value = !0, n("mouseenter", $);
    }, Ge = ($) => {
      n("keydown", $);
    }, ht = () => {
      var $;
      ($ = le.value) == null || $.select();
    }, st = () => {
      n(Rt, ""), n("change", ""), n("clear"), n("input", "");
    };
    return be(() => r.modelValue, () => {
      var $;
      Xe(() => ee()), r.validateEvent && (($ = _ == null ? void 0 : _.validate) == null || $.call(_, "change").catch((ve) => Pt(ve)));
    }), be(G, () => He()), be(() => r.type, async () => {
      await Xe(), He(), ee();
    }), jt(() => {
      !r.formatter && r.parser && Pt("ElInput", "If you set the parser, you also need to set the formatter."), He(), Xe(ee);
    }), t({
      input: O,
      textarea: I,
      ref: le,
      textareaStyle: A,
      autosize: ln(r, "autosize"),
      focus: Fe,
      blur: et,
      select: ht,
      clear: st,
      resizeTextarea: ee
    }), ($, ve) => Et((Y(), he("div", bn(m(f), {
      class: m(u),
      style: m(Q),
      role: $.containerRole,
      onMouseenter: xt,
      onMouseleave: Ie
    }), [
      Ee(" input "),
      $.type !== "textarea" ? (Y(), he(yt, { key: 0 }, [
        Ee(" prepend slot "),
        $.$slots.prepend ? (Y(), he("div", {
          key: 0,
          class: te(m(S).be("group", "prepend"))
        }, [
          Ze($.$slots, "prepend")
        ], 2)) : Ee("v-if", !0),
        xe("div", {
          class: te(m(h))
        }, [
          Ee(" prefix slot "),
          $.$slots.prefix || $.prefixIcon ? (Y(), he("span", {
            key: 0,
            class: te(m(S).e("prefix"))
          }, [
            xe("span", {
              class: te(m(S).e("prefix-inner")),
              onClick: Fe
            }, [
              Ze($.$slots, "prefix"),
              $.prefixIcon ? (Y(), Se(m(Mt), {
                key: 0,
                class: te(m(S).e("icon"))
              }, {
                default: Pe(() => [
                  (Y(), Se($t($.prefixIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : Ee("v-if", !0)
            ], 2)
          ], 2)) : Ee("v-if", !0),
          xe("input", bn({
            id: m(k),
            ref_key: "input",
            ref: O,
            class: m(S).e("inner")
          }, m(g), {
            type: $.showPassword ? N.value ? "text" : "password" : $.type,
            disabled: m(x),
            formatter: $.formatter,
            parser: $.parser,
            readonly: $.readonly,
            autocomplete: $.autocomplete,
            tabindex: $.tabindex,
            "aria-label": $.label,
            placeholder: $.placeholder,
            style: $.inputStyle,
            form: r.form,
            onCompositionstart: se,
            onCompositionupdate: pe,
            onCompositionend: Te,
            onInput: Ve,
            onFocus: nt,
            onBlur: je,
            onChange: Le,
            onKeydown: Ge
          }), null, 16, WO),
          Ee(" suffix slot "),
          m(ue) ? (Y(), he("span", {
            key: 1,
            class: te(m(S).e("suffix"))
          }, [
            xe("span", {
              class: te(m(S).e("suffix-inner")),
              onClick: Fe
            }, [
              !m(z) || !m(U) || !m(D) ? (Y(), he(yt, { key: 0 }, [
                Ze($.$slots, "suffix"),
                $.suffixIcon ? (Y(), Se(m(Mt), {
                  key: 0,
                  class: te(m(S).e("icon"))
                }, {
                  default: Pe(() => [
                    (Y(), Se($t($.suffixIcon)))
                  ]),
                  _: 1
                }, 8, ["class"])) : Ee("v-if", !0)
              ], 64)) : Ee("v-if", !0),
              m(z) ? (Y(), Se(m(Mt), {
                key: 1,
                class: te([m(S).e("icon"), m(S).e("clear")]),
                onMousedown: gt(m(ea), ["prevent"]),
                onClick: st
              }, {
                default: Pe(() => [
                  pt(m(wi))
                ]),
                _: 1
              }, 8, ["class", "onMousedown"])) : Ee("v-if", !0),
              m(U) ? (Y(), Se(m(Mt), {
                key: 2,
                class: te([m(S).e("icon"), m(S).e("password")]),
                onClick: Oe
              }, {
                default: Pe(() => [
                  (Y(), Se($t(m(ne))))
                ]),
                _: 1
              }, 8, ["class"])) : Ee("v-if", !0),
              m(D) ? (Y(), he("span", {
                key: 3,
                class: te(m(S).e("count"))
              }, [
                xe("span", {
                  class: te(m(S).e("count-inner"))
                }, tt(m(X)) + " / " + tt(m(g).maxlength), 3)
              ], 2)) : Ee("v-if", !0),
              m(fe) && m(_e) && m(re) ? (Y(), Se(m(Mt), {
                key: 4,
                class: te([
                  m(S).e("icon"),
                  m(S).e("validateIcon"),
                  m(S).is("loading", m(fe) === "validating")
                ])
              }, {
                default: Pe(() => [
                  (Y(), Se($t(m(_e))))
                ]),
                _: 1
              }, 8, ["class"])) : Ee("v-if", !0)
            ], 2)
          ], 2)) : Ee("v-if", !0)
        ], 2),
        Ee(" append slot "),
        $.$slots.append ? (Y(), he("div", {
          key: 1,
          class: te(m(S).be("group", "append"))
        }, [
          Ze($.$slots, "append")
        ], 2)) : Ee("v-if", !0)
      ], 64)) : (Y(), he(yt, { key: 1 }, [
        Ee(" textarea "),
        xe("textarea", bn({
          id: m(k),
          ref_key: "textarea",
          ref: I,
          class: m(M).e("inner")
        }, m(g), {
          tabindex: $.tabindex,
          disabled: m(x),
          readonly: $.readonly,
          autocomplete: $.autocomplete,
          style: m(A),
          "aria-label": $.label,
          placeholder: $.placeholder,
          form: r.form,
          onCompositionstart: se,
          onCompositionupdate: pe,
          onCompositionend: Te,
          onInput: Ve,
          onFocus: nt,
          onBlur: je,
          onChange: Le,
          onKeydown: Ge
        }), null, 16, KO),
        m(D) ? (Y(), he("span", {
          key: 0,
          style: _t(H.value),
          class: te(m(S).e("count"))
        }, tt(m(X)) + " / " + tt(m(g).maxlength), 7)) : Ee("v-if", !0)
      ], 64))
    ], 16, VO)), [
      [In, $.type !== "hidden"]
    ]);
  }
});
var YO = /* @__PURE__ */ Je(UO, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/input/src/input.vue"]]);
const Cp = Ln(YO), Yr = 4, XO = {
  vertical: {
    offset: "offsetHeight",
    scroll: "scrollTop",
    scrollSize: "scrollHeight",
    size: "height",
    key: "vertical",
    axis: "Y",
    client: "clientY",
    direction: "top"
  },
  horizontal: {
    offset: "offsetWidth",
    scroll: "scrollLeft",
    scrollSize: "scrollWidth",
    size: "width",
    key: "horizontal",
    axis: "X",
    client: "clientX",
    direction: "left"
  }
}, GO = ({
  move: e,
  size: t,
  bar: n
}) => ({
  [n.size]: t,
  transform: `translate${n.axis}(${e}%)`
}), ZO = mt({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: !0
  },
  always: Boolean
}), QO = "Thumb", JO = /* @__PURE__ */ Ae({
  __name: "thumb",
  props: ZO,
  setup(e) {
    const t = e, n = Ye(lp), r = Ke("scrollbar");
    n || N2(QO, "can not inject scrollbar context");
    const i = ce(), c = ce(), f = ce({}), u = ce(!1);
    let h = !1, g = !1, w = Lt ? document.onselectstart : null;
    const _ = V(() => XO[t.vertical ? "vertical" : "horizontal"]), k = V(() => GO({
      size: t.size,
      move: t.move,
      bar: _.value
    })), T = V(() => i.value[_.value.offset] ** 2 / n.wrapElement[_.value.scrollSize] / t.ratio / c.value[_.value.offset]), x = (N) => {
      var H;
      if (N.stopPropagation(), N.ctrlKey || [1, 2].includes(N.button))
        return;
      (H = window.getSelection()) == null || H.removeAllRanges(), M(N);
      const F = N.currentTarget;
      F && (f.value[_.value.axis] = F[_.value.offset] - (N[_.value.client] - F.getBoundingClientRect()[_.value.direction]));
    }, S = (N) => {
      if (!c.value || !i.value || !n.wrapElement)
        return;
      const H = Math.abs(N.target.getBoundingClientRect()[_.value.direction] - N[_.value.client]), F = c.value[_.value.offset] / 2, le = (H - F) * 100 * T.value / i.value[_.value.offset];
      n.wrapElement[_.value.scroll] = le * n.wrapElement[_.value.scrollSize] / 100;
    }, M = (N) => {
      N.stopImmediatePropagation(), h = !0, document.addEventListener("mousemove", O), document.addEventListener("mouseup", I), w = document.onselectstart, document.onselectstart = () => !1;
    }, O = (N) => {
      if (!i.value || !c.value || h === !1)
        return;
      const H = f.value[_.value.axis];
      if (!H)
        return;
      const F = (i.value.getBoundingClientRect()[_.value.direction] - N[_.value.client]) * -1, le = c.value[_.value.offset] - H, re = (F - le) * 100 * T.value / i.value[_.value.offset];
      n.wrapElement[_.value.scroll] = re * n.wrapElement[_.value.scrollSize] / 100;
    }, I = () => {
      h = !1, f.value[_.value.axis] = 0, document.removeEventListener("mousemove", O), document.removeEventListener("mouseup", I), q(), g && (u.value = !1);
    }, K = () => {
      g = !1, u.value = !!t.size;
    }, L = () => {
      g = !0, u.value = h;
    };
    fn(() => {
      q(), document.removeEventListener("mouseup", I);
    });
    const q = () => {
      document.onselectstart !== w && (document.onselectstart = w);
    };
    return wr(ln(n, "scrollbarElement"), "mousemove", K), wr(ln(n, "scrollbarElement"), "mouseleave", L), (N, H) => (Y(), Se(ao, {
      name: m(r).b("fade"),
      persisted: ""
    }, {
      default: Pe(() => [
        Et(xe("div", {
          ref_key: "instance",
          ref: i,
          class: te([m(r).e("bar"), m(r).is(m(_).key)]),
          onMousedown: S
        }, [
          xe("div", {
            ref_key: "thumb",
            ref: c,
            class: te(m(r).e("thumb")),
            style: _t(m(k)),
            onMousedown: x
          }, null, 38)
        ], 34), [
          [In, N.always || u.value]
        ])
      ]),
      _: 1
    }, 8, ["name"]));
  }
});
var _d = /* @__PURE__ */ Je(JO, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/thumb.vue"]]);
const eC = mt({
  always: {
    type: Boolean,
    default: !0
  },
  width: String,
  height: String,
  ratioX: {
    type: Number,
    default: 1
  },
  ratioY: {
    type: Number,
    default: 1
  }
}), tC = /* @__PURE__ */ Ae({
  __name: "bar",
  props: eC,
  setup(e, { expose: t }) {
    const n = e, r = ce(0), i = ce(0);
    return t({
      handleScroll: (c) => {
        if (c) {
          const f = c.offsetHeight - Yr, u = c.offsetWidth - Yr;
          i.value = c.scrollTop * 100 / f * n.ratioY, r.value = c.scrollLeft * 100 / u * n.ratioX;
        }
      }
    }), (c, f) => (Y(), he(yt, null, [
      pt(_d, {
        move: r.value,
        ratio: c.ratioX,
        size: c.width,
        always: c.always
      }, null, 8, ["move", "ratio", "size", "always"]),
      pt(_d, {
        move: i.value,
        ratio: c.ratioY,
        size: c.height,
        vertical: "",
        always: c.always
      }, null, 8, ["move", "ratio", "size", "always"])
    ], 64));
  }
});
var nC = /* @__PURE__ */ Je(tC, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/bar.vue"]]);
const rC = mt({
  height: {
    type: [String, Number],
    default: ""
  },
  maxHeight: {
    type: [String, Number],
    default: ""
  },
  native: {
    type: Boolean,
    default: !1
  },
  wrapStyle: {
    type: Ne([String, Object, Array]),
    default: ""
  },
  wrapClass: {
    type: [String, Array],
    default: ""
  },
  viewClass: {
    type: [String, Array],
    default: ""
  },
  viewStyle: {
    type: [String, Array, Object],
    default: ""
  },
  noresize: Boolean,
  tag: {
    type: String,
    default: "div"
  },
  always: Boolean,
  minSize: {
    type: Number,
    default: 20
  }
}), oC = {
  scroll: ({
    scrollTop: e,
    scrollLeft: t
  }) => [e, t].every(sn)
}, Ws = "ElScrollbar", aC = Ae({
  name: Ws
}), iC = /* @__PURE__ */ Ae({
  ...aC,
  props: rC,
  emits: oC,
  setup(e, { expose: t, emit: n }) {
    const r = e, i = Ke("scrollbar");
    let c, f;
    const u = ce(), h = ce(), g = ce(), w = ce("0"), _ = ce("0"), k = ce(), T = ce(1), x = ce(1), S = V(() => {
      const H = {};
      return r.height && (H.height = Fs(r.height)), r.maxHeight && (H.maxHeight = Fs(r.maxHeight)), [r.wrapStyle, H];
    }), M = V(() => [
      r.wrapClass,
      i.e("wrap"),
      { [i.em("wrap", "hidden-default")]: !r.native }
    ]), O = V(() => [i.e("view"), r.viewClass]), I = () => {
      var H;
      h.value && ((H = k.value) == null || H.handleScroll(h.value), n("scroll", {
        scrollTop: h.value.scrollTop,
        scrollLeft: h.value.scrollLeft
      }));
    };
    function K(H, F) {
      dn(H) ? h.value.scrollTo(H) : sn(H) && sn(F) && h.value.scrollTo(H, F);
    }
    const L = (H) => {
      if (!sn(H)) {
        Pt(Ws, "value must be a number");
        return;
      }
      h.value.scrollTop = H;
    }, q = (H) => {
      if (!sn(H)) {
        Pt(Ws, "value must be a number");
        return;
      }
      h.value.scrollLeft = H;
    }, N = () => {
      if (!h.value)
        return;
      const H = h.value.offsetHeight - Yr, F = h.value.offsetWidth - Yr, le = H ** 2 / h.value.scrollHeight, re = F ** 2 / h.value.scrollWidth, fe = Math.max(le, r.minSize), _e = Math.max(re, r.minSize);
      T.value = le / (H - le) / (fe / (H - fe)), x.value = re / (F - re) / (_e / (F - _e)), _.value = fe + Yr < H ? `${fe}px` : "", w.value = _e + Yr < F ? `${_e}px` : "";
    };
    return be(() => r.noresize, (H) => {
      H ? (c == null || c(), f == null || f()) : ({ stop: c } = bi(g, N), f = wr("resize", N));
    }, { immediate: !0 }), be(() => [r.maxHeight, r.height], () => {
      r.native || Xe(() => {
        var H;
        N(), h.value && ((H = k.value) == null || H.handleScroll(h.value));
      });
    }), Ot(lp, cn({
      scrollbarElement: u,
      wrapElement: h
    })), jt(() => {
      r.native || Xe(() => {
        N();
      });
    }), Ud(() => N()), t({
      wrapRef: h,
      update: N,
      scrollTo: K,
      setScrollTop: L,
      setScrollLeft: q,
      handleScroll: I
    }), (H, F) => (Y(), he("div", {
      ref_key: "scrollbarRef",
      ref: u,
      class: te(m(i).b())
    }, [
      xe("div", {
        ref_key: "wrapRef",
        ref: h,
        class: te(m(M)),
        style: _t(m(S)),
        onScroll: I
      }, [
        (Y(), Se($t(H.tag), {
          ref_key: "resizeRef",
          ref: g,
          class: te(m(O)),
          style: _t(H.viewStyle)
        }, {
          default: Pe(() => [
            Ze(H.$slots, "default")
          ]),
          _: 3
        }, 8, ["class", "style"]))
      ], 38),
      H.native ? Ee("v-if", !0) : (Y(), Se(nC, {
        key: 0,
        ref_key: "barRef",
        ref: k,
        height: _.value,
        width: w.value,
        always: H.always,
        "ratio-x": x.value,
        "ratio-y": T.value
      }, null, 8, ["height", "width", "always", "ratio-x", "ratio-y"]))
    ], 2));
  }
});
var sC = /* @__PURE__ */ Je(iC, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/scrollbar.vue"]]);
const Tp = Ln(sC), lC = [
  "dialog",
  "grid",
  "group",
  "listbox",
  "menu",
  "navigation",
  "tooltip",
  "tree"
], Mp = mt({
  role: {
    type: String,
    values: lC,
    default: "tooltip"
  }
}), uC = Ae({
  name: "ElPopper",
  inheritAttrs: !1
}), cC = /* @__PURE__ */ Ae({
  ...uC,
  props: Mp,
  setup(e, { expose: t }) {
    const n = e, r = ce(), i = ce(), c = ce(), f = ce(), u = V(() => n.role), h = {
      triggerRef: r,
      popperInstanceRef: i,
      contentRef: c,
      referenceRef: f,
      role: u
    };
    return t(h), Ot(wl, h), (g, w) => Ze(g.$slots, "default");
  }
});
var dC = /* @__PURE__ */ Je(cC, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/popper.vue"]]);
const Pp = mt({
  arrowOffset: {
    type: Number,
    default: 5
  }
}), fC = Ae({
  name: "ElPopperArrow",
  inheritAttrs: !1
}), pC = /* @__PURE__ */ Ae({
  ...fC,
  props: Pp,
  setup(e, { expose: t }) {
    const n = e, r = Ke("popper"), { arrowOffset: i, arrowRef: c, arrowStyle: f } = Ye(up, void 0);
    return be(() => n.arrowOffset, (u) => {
      i.value = u;
    }), fn(() => {
      c.value = void 0;
    }), t({
      arrowRef: c
    }), (u, h) => (Y(), he("span", {
      ref_key: "arrowRef",
      ref: c,
      class: te(m(r).e("arrow")),
      style: _t(m(f)),
      "data-popper-arrow": ""
    }, null, 6));
  }
});
var hC = /* @__PURE__ */ Je(pC, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/arrow.vue"]]);
const vs = "ElOnlyChild", vC = Ae({
  name: vs,
  setup(e, {
    slots: t,
    attrs: n
  }) {
    var r;
    const i = Ye(Op), c = AO((r = i == null ? void 0 : i.setForwardRef) != null ? r : ea);
    return () => {
      var f;
      const u = (f = t.default) == null ? void 0 : f.call(t, n);
      if (!u)
        return null;
      if (u.length > 1)
        return Pt(vs, "requires exact only one valid child."), null;
      const h = Ap(u);
      return h ? Et(Jv(h, n), [[c]]) : (Pt(vs, "no valid child node found"), null);
    };
  }
});
function Ap(e) {
  if (!e)
    return null;
  const t = e;
  for (const n of t) {
    if (dn(n))
      switch (n.type) {
        case eg:
          continue;
        case Yd:
        case "svg":
          return Sd(n);
        case yt:
          return Ap(n.children);
        default:
          return n;
      }
    return Sd(n);
  }
  return null;
}
function Sd(e) {
  const t = Ke("only-child");
  return pt("span", {
    class: t.e("content")
  }, [e]);
}
const jp = mt({
  virtualRef: {
    type: Ne(Object)
  },
  virtualTriggering: Boolean,
  onMouseenter: {
    type: Ne(Function)
  },
  onMouseleave: {
    type: Ne(Function)
  },
  onClick: {
    type: Ne(Function)
  },
  onKeydown: {
    type: Ne(Function)
  },
  onFocus: {
    type: Ne(Function)
  },
  onBlur: {
    type: Ne(Function)
  },
  onContextmenu: {
    type: Ne(Function)
  },
  id: String,
  open: Boolean
}), gC = Ae({
  name: "ElPopperTrigger",
  inheritAttrs: !1
}), mC = /* @__PURE__ */ Ae({
  ...gC,
  props: jp,
  setup(e, { expose: t }) {
    const n = e, { role: r, triggerRef: i } = Ye(wl, void 0);
    PO(i);
    const c = V(() => u.value ? n.id : void 0), f = V(() => {
      if (r && r.value === "tooltip")
        return n.open && n.id ? n.id : void 0;
    }), u = V(() => {
      if (r && r.value !== "tooltip")
        return r.value;
    }), h = V(() => u.value ? `${n.open}` : void 0);
    let g;
    return jt(() => {
      be(() => n.virtualRef, (w) => {
        w && (i.value = Xn(w));
      }, {
        immediate: !0
      }), be(i, (w, _) => {
        g == null || g(), g = void 0, ra(w) && ([
          "onMouseenter",
          "onMouseleave",
          "onClick",
          "onKeydown",
          "onFocus",
          "onBlur",
          "onContextmenu"
        ].forEach((k) => {
          var T;
          const x = n[k];
          x && (w.addEventListener(k.slice(2).toLowerCase(), x), (T = _ == null ? void 0 : _.removeEventListener) == null || T.call(_, k.slice(2).toLowerCase(), x));
        }), g = be([c, f, u, h], (k) => {
          [
            "aria-controls",
            "aria-describedby",
            "aria-haspopup",
            "aria-expanded"
          ].forEach((T, x) => {
            yi(k[x]) ? w.removeAttribute(T) : w.setAttribute(T, k[x]);
          });
        }, { immediate: !0 })), ra(_) && [
          "aria-controls",
          "aria-describedby",
          "aria-haspopup",
          "aria-expanded"
        ].forEach((k) => _.removeAttribute(k));
      }, {
        immediate: !0
      });
    }), fn(() => {
      g == null || g(), g = void 0;
    }), t({
      triggerRef: i
    }), (w, _) => w.virtualTriggering ? Ee("v-if", !0) : (Y(), Se(m(vC), bn({ key: 0 }, w.$attrs, {
      "aria-controls": m(c),
      "aria-describedby": m(f),
      "aria-expanded": m(h),
      "aria-haspopup": m(u)
    }), {
      default: Pe(() => [
        Ze(w.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"]));
  }
});
var yC = /* @__PURE__ */ Je(mC, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/trigger.vue"]]);
const gs = "focus-trap.focus-after-trapped", ms = "focus-trap.focus-after-released", bC = "focus-trap.focusout-prevented", kd = {
  cancelable: !0,
  bubbles: !1
}, wC = {
  cancelable: !0,
  bubbles: !1
}, Ed = "focusAfterTrapped", Od = "focusAfterReleased", xC = Symbol("elFocusTrap"), jl = ce(), Ei = ce(0), Il = ce(0);
let Ka = 0;
const Ip = (e) => {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const i = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || i ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 || r === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}, Cd = (e, t) => {
  for (const n of e)
    if (!_C(n, t))
      return n;
}, _C = (e, t) => {
  if (process.env.NODE_ENV === "test")
    return !1;
  if (getComputedStyle(e).visibility === "hidden")
    return !0;
  for (; e; ) {
    if (t && e === t)
      return !1;
    if (getComputedStyle(e).display === "none")
      return !0;
    e = e.parentElement;
  }
  return !1;
}, SC = (e) => {
  const t = Ip(e), n = Cd(t, e), r = Cd(t.reverse(), e);
  return [n, r];
}, kC = (e) => e instanceof HTMLInputElement && "select" in e, qn = (e, t) => {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), Il.value = window.performance.now(), e !== n && kC(e) && t && e.select();
  }
};
function Td(e, t) {
  const n = [...e], r = e.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
const EC = () => {
  let e = [];
  return {
    push: (t) => {
      const n = e[0];
      n && t !== n && n.pause(), e = Td(e, t), e.unshift(t);
    },
    remove: (t) => {
      var n, r;
      e = Td(e, t), (r = (n = e[0]) == null ? void 0 : n.resume) == null || r.call(n);
    }
  };
}, OC = (e, t = !1) => {
  const n = document.activeElement;
  for (const r of e)
    if (qn(r, t), document.activeElement !== n)
      return;
}, Md = EC(), CC = () => Ei.value > Il.value, qa = () => {
  jl.value = "pointer", Ei.value = window.performance.now();
}, Pd = () => {
  jl.value = "keyboard", Ei.value = window.performance.now();
}, TC = () => (jt(() => {
  Ka === 0 && (document.addEventListener("mousedown", qa), document.addEventListener("touchstart", qa), document.addEventListener("keydown", Pd)), Ka++;
}), fn(() => {
  Ka--, Ka <= 0 && (document.removeEventListener("mousedown", qa), document.removeEventListener("touchstart", qa), document.removeEventListener("keydown", Pd));
}), {
  focusReason: jl,
  lastUserFocusTimestamp: Ei,
  lastAutomatedFocusTimestamp: Il
}), Ua = (e) => new CustomEvent(bC, {
  ...wC,
  detail: e
}), MC = Ae({
  name: "ElFocusTrap",
  inheritAttrs: !1,
  props: {
    loop: Boolean,
    trapped: Boolean,
    focusTrapEl: Object,
    focusStartEl: {
      type: [Object, String],
      default: "first"
    }
  },
  emits: [
    Ed,
    Od,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(e, { emit: t }) {
    const n = ce();
    let r, i;
    const { focusReason: c } = TC();
    EO((x) => {
      e.trapped && !f.paused && t("release-requested", x);
    });
    const f = {
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    }, u = (x) => {
      if (!e.loop && !e.trapped || f.paused)
        return;
      const { key: S, altKey: M, ctrlKey: O, metaKey: I, currentTarget: K, shiftKey: L } = x, { loop: q } = e, N = S === wt.tab && !M && !O && !I, H = document.activeElement;
      if (N && H) {
        const F = K, [le, re] = SC(F);
        if (le && re) {
          if (!L && H === re) {
            const fe = Ua({
              focusReason: c.value
            });
            t("focusout-prevented", fe), fe.defaultPrevented || (x.preventDefault(), q && qn(le, !0));
          } else if (L && [le, F].includes(H)) {
            const fe = Ua({
              focusReason: c.value
            });
            t("focusout-prevented", fe), fe.defaultPrevented || (x.preventDefault(), q && qn(re, !0));
          }
        } else if (H === F) {
          const fe = Ua({
            focusReason: c.value
          });
          t("focusout-prevented", fe), fe.defaultPrevented || x.preventDefault();
        }
      }
    };
    Ot(xC, {
      focusTrapRef: n,
      onKeydown: u
    }), be(() => e.focusTrapEl, (x) => {
      x && (n.value = x);
    }, { immediate: !0 }), be([n], ([x], [S]) => {
      x && (x.addEventListener("keydown", u), x.addEventListener("focusin", w), x.addEventListener("focusout", _)), S && (S.removeEventListener("keydown", u), S.removeEventListener("focusin", w), S.removeEventListener("focusout", _));
    });
    const h = (x) => {
      t(Ed, x);
    }, g = (x) => t(Od, x), w = (x) => {
      const S = m(n);
      if (!S)
        return;
      const M = x.target, O = x.relatedTarget, I = M && S.contains(M);
      e.trapped || O && S.contains(O) || (r = O), I && t("focusin", x), !f.paused && e.trapped && (I ? i = M : qn(i, !0));
    }, _ = (x) => {
      const S = m(n);
      if (!(f.paused || !S))
        if (e.trapped) {
          const M = x.relatedTarget;
          !yi(M) && !S.contains(M) && setTimeout(() => {
            if (!f.paused && e.trapped) {
              const O = Ua({
                focusReason: c.value
              });
              t("focusout-prevented", O), O.defaultPrevented || qn(i, !0);
            }
          }, 0);
        } else {
          const M = x.target;
          M && S.contains(M) || t("focusout", x);
        }
    };
    async function k() {
      await Xe();
      const x = m(n);
      if (x) {
        Md.push(f);
        const S = x.contains(document.activeElement) ? r : document.activeElement;
        if (r = S, !x.contains(S)) {
          const M = new Event(gs, kd);
          x.addEventListener(gs, h), x.dispatchEvent(M), M.defaultPrevented || Xe(() => {
            let O = e.focusStartEl;
            un(O) || (qn(O), document.activeElement !== O && (O = "first")), O === "first" && OC(Ip(x), !0), (document.activeElement === S || O === "container") && qn(x);
          });
        }
      }
    }
    function T() {
      const x = m(n);
      if (x) {
        x.removeEventListener(gs, h);
        const S = new CustomEvent(ms, {
          ...kd,
          detail: {
            focusReason: c.value
          }
        });
        x.addEventListener(ms, g), x.dispatchEvent(S), !S.defaultPrevented && (c.value == "keyboard" || !CC()) && qn(r ?? document.body), x.removeEventListener(ms, h), Md.remove(f);
      }
    }
    return jt(() => {
      e.trapped && k(), be(() => e.trapped, (x) => {
        x ? k() : T();
      });
    }), fn(() => {
      e.trapped && T();
    }), {
      onKeydown: u
    };
  }
});
function PC(e, t, n, r, i, c) {
  return Ze(e.$slots, "default", { handleKeydown: e.onKeydown });
}
var AC = /* @__PURE__ */ Je(MC, [["render", PC], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/focus-trap/src/focus-trap.vue"]]);
const jC = ["fixed", "absolute"], IC = mt({
  boundariesPadding: {
    type: Number,
    default: 0
  },
  fallbackPlacements: {
    type: Ne(Array),
    default: void 0
  },
  gpuAcceleration: {
    type: Boolean,
    default: !0
  },
  offset: {
    type: Number,
    default: 12
  },
  placement: {
    type: String,
    values: Si,
    default: "bottom"
  },
  popperOptions: {
    type: Ne(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: jC,
    default: "absolute"
  }
}), Dp = mt({
  ...IC,
  id: String,
  style: {
    type: Ne([String, Array, Object])
  },
  className: {
    type: Ne([String, Array, Object])
  },
  effect: {
    type: String,
    default: "dark"
  },
  visible: Boolean,
  enterable: {
    type: Boolean,
    default: !0
  },
  pure: Boolean,
  focusOnShow: {
    type: Boolean,
    default: !1
  },
  trapping: {
    type: Boolean,
    default: !1
  },
  popperClass: {
    type: Ne([String, Array, Object])
  },
  popperStyle: {
    type: Ne([String, Array, Object])
  },
  referenceEl: {
    type: Ne(Object)
  },
  triggerTargetEl: {
    type: Ne(Object)
  },
  stopPopperMouseEvent: {
    type: Boolean,
    default: !0
  },
  ariaLabel: {
    type: String,
    default: void 0
  },
  virtualTriggering: Boolean,
  zIndex: Number
}), DC = {
  mouseenter: (e) => e instanceof MouseEvent,
  mouseleave: (e) => e instanceof MouseEvent,
  focus: () => !0,
  blur: () => !0,
  close: () => !0
}, $C = (e, t = []) => {
  const { placement: n, strategy: r, popperOptions: i } = e, c = {
    placement: n,
    strategy: r,
    ...i,
    modifiers: [...NC(e), ...t]
  };
  return RC(c, i == null ? void 0 : i.modifiers), c;
}, zC = (e) => {
  if (Lt)
    return Xn(e);
};
function NC(e) {
  const { offset: t, gpuAcceleration: n, fallbackPlacements: r } = e;
  return [
    {
      name: "offset",
      options: {
        offset: [0, t ?? 12]
      }
    },
    {
      name: "preventOverflow",
      options: {
        padding: {
          top: 2,
          bottom: 2,
          left: 5,
          right: 5
        }
      }
    },
    {
      name: "flip",
      options: {
        padding: 5,
        fallbackPlacements: r
      }
    },
    {
      name: "computeStyles",
      options: {
        gpuAcceleration: n
      }
    }
  ];
}
function RC(e, t) {
  t && (e.modifiers = [...e.modifiers, ...t ?? []]);
}
const LC = 0, BC = (e) => {
  const { popperInstanceRef: t, contentRef: n, triggerRef: r, role: i } = Ye(wl, void 0), c = ce(), f = ce(), u = V(() => ({
    name: "eventListeners",
    enabled: !!e.visible
  })), h = V(() => {
    var O;
    const I = m(c), K = (O = m(f)) != null ? O : LC;
    return {
      name: "arrow",
      enabled: !l2(I),
      options: {
        element: I,
        padding: K
      }
    };
  }), g = V(() => ({
    onFirstUpdate: () => {
      x();
    },
    ...$C(e, [
      m(h),
      m(u)
    ])
  })), w = V(() => zC(e.referenceEl) || m(r)), { attributes: _, state: k, styles: T, update: x, forceUpdate: S, instanceRef: M } = _O(w, n, g);
  return be(M, (O) => t.value = O), jt(() => {
    be(() => {
      var O;
      return (O = m(w)) == null ? void 0 : O.getBoundingClientRect();
    }, () => {
      x();
    });
  }), {
    attributes: _,
    arrowRef: c,
    contentRef: n,
    instanceRef: M,
    state: k,
    styles: T,
    role: i,
    forceUpdate: S,
    update: x
  };
}, FC = (e, {
  attributes: t,
  styles: n,
  role: r
}) => {
  const { nextZIndex: i } = jO(), c = Ke("popper"), f = V(() => m(t).popper), u = ce(e.zIndex || i()), h = V(() => [
    c.b(),
    c.is("pure", e.pure),
    c.is(e.effect),
    e.popperClass
  ]), g = V(() => [
    { zIndex: m(u) },
    e.popperStyle || {},
    m(n).popper
  ]), w = V(() => r.value === "dialog" ? "false" : void 0), _ = V(() => m(n).arrow || {});
  return {
    ariaModal: w,
    arrowStyle: _,
    contentAttrs: f,
    contentClass: h,
    contentStyle: g,
    contentZIndex: u,
    updateZIndex: () => {
      u.value = e.zIndex || i();
    }
  };
}, HC = (e, t) => {
  const n = ce(!1), r = ce();
  return {
    focusStartRef: r,
    trapped: n,
    onFocusAfterReleased: (i) => {
      var c;
      ((c = i.detail) == null ? void 0 : c.focusReason) !== "pointer" && (r.value = "first", t("blur"));
    },
    onFocusAfterTrapped: () => {
      t("focus");
    },
    onFocusInTrap: (i) => {
      e.visible && !n.value && (i.target && (r.value = i.target), n.value = !0);
    },
    onFocusoutPrevented: (i) => {
      e.trapping || (i.detail.focusReason === "pointer" && i.preventDefault(), n.value = !1);
    },
    onReleaseRequested: () => {
      n.value = !1, t("close");
    }
  };
}, VC = Ae({
  name: "ElPopperContent"
}), WC = /* @__PURE__ */ Ae({
  ...VC,
  props: Dp,
  emits: DC,
  setup(e, { expose: t, emit: n }) {
    const r = e, {
      focusStartRef: i,
      trapped: c,
      onFocusAfterReleased: f,
      onFocusAfterTrapped: u,
      onFocusInTrap: h,
      onFocusoutPrevented: g,
      onReleaseRequested: w
    } = HC(r, n), { attributes: _, arrowRef: k, contentRef: T, styles: x, instanceRef: S, role: M, update: O } = BC(r), {
      ariaModal: I,
      arrowStyle: K,
      contentAttrs: L,
      contentClass: q,
      contentStyle: N,
      updateZIndex: H
    } = FC(r, {
      styles: x,
      attributes: _,
      role: M
    }), F = Ye(oa, void 0), le = ce();
    Ot(up, {
      arrowStyle: K,
      arrowRef: k,
      arrowOffset: le
    }), F && (F.addInputId || F.removeInputId) && Ot(oa, {
      ...F,
      addInputId: ea,
      removeInputId: ea
    });
    let re;
    const fe = (ne = !0) => {
      O(), ne && H();
    }, _e = () => {
      fe(!1), r.visible && r.focusOnShow ? c.value = !0 : r.visible === !1 && (c.value = !1);
    };
    return jt(() => {
      be(() => r.triggerTargetEl, (ne, Q) => {
        re == null || re(), re = void 0;
        const A = m(ne || T.value), G = m(Q || T.value);
        ra(A) && (re = be([M, () => r.ariaLabel, I, () => r.id], (z) => {
          ["role", "aria-label", "aria-modal", "id"].forEach((U, D) => {
            yi(z[D]) ? A.removeAttribute(U) : A.setAttribute(U, z[D]);
          });
        }, { immediate: !0 })), G !== A && ra(G) && ["role", "aria-label", "aria-modal", "id"].forEach((z) => {
          G.removeAttribute(z);
        });
      }, { immediate: !0 }), be(() => r.visible, _e, { immediate: !0 });
    }), fn(() => {
      re == null || re(), re = void 0;
    }), t({
      popperContentRef: T,
      popperInstanceRef: S,
      updatePopper: fe,
      contentStyle: N
    }), (ne, Q) => (Y(), he("div", bn({
      ref_key: "contentRef",
      ref: T
    }, m(L), {
      style: m(N),
      class: m(q),
      tabindex: "-1",
      onMouseenter: Q[0] || (Q[0] = (A) => ne.$emit("mouseenter", A)),
      onMouseleave: Q[1] || (Q[1] = (A) => ne.$emit("mouseleave", A))
    }), [
      pt(m(AC), {
        trapped: m(c),
        "trap-on-focus-in": !0,
        "focus-trap-el": m(T),
        "focus-start-el": m(i),
        onFocusAfterTrapped: m(u),
        onFocusAfterReleased: m(f),
        onFocusin: m(h),
        onFocusoutPrevented: m(g),
        onReleaseRequested: m(w)
      }, {
        default: Pe(() => [
          Ze(ne.$slots, "default")
        ]),
        _: 3
      }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusin", "onFocusoutPrevented", "onReleaseRequested"])
    ], 16));
  }
});
var KC = /* @__PURE__ */ Je(WC, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/content.vue"]]);
const qC = Ln(dC), UC = Ke("tooltip"), Dl = mt({
  ...TO,
  ...Dp,
  appendTo: {
    type: Ne([String, Object])
  },
  content: {
    type: String,
    default: ""
  },
  rawContent: {
    type: Boolean,
    default: !1
  },
  persistent: Boolean,
  ariaLabel: String,
  visible: {
    type: Ne(Boolean),
    default: null
  },
  transition: {
    type: String,
    default: `${UC.namespace.value}-fade-in-linear`
  },
  teleported: {
    type: Boolean,
    default: !0
  },
  disabled: {
    type: Boolean
  }
}), $p = mt({
  ...jp,
  disabled: Boolean,
  trigger: {
    type: Ne([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: Ne(Array),
    default: () => [wt.enter, wt.space]
  }
}), {
  useModelToggleProps: YC,
  useModelToggleEmits: XC,
  useModelToggle: GC
} = bE("visible"), ZC = mt({
  ...Mp,
  ...YC,
  ...Dl,
  ...$p,
  ...Pp,
  showArrow: {
    type: Boolean,
    default: !0
  }
}), QC = [
  ...XC,
  "before-show",
  "before-hide",
  "show",
  "hide",
  "open",
  "close"
], JC = (e, t) => bt(e) ? e.includes(t) : e === t, Kr = (e, t, n) => (r) => {
  JC(m(e), t) && n(r);
}, eT = Ae({
  name: "ElTooltipTrigger"
}), tT = /* @__PURE__ */ Ae({
  ...eT,
  props: $p,
  setup(e, { expose: t }) {
    const n = e, r = Ke("tooltip"), { controlled: i, id: c, open: f, onOpen: u, onClose: h, onToggle: g } = Ye(xl, void 0), w = ce(null), _ = () => {
      if (m(i) || n.disabled)
        return !0;
    }, k = ln(n, "trigger"), T = jn(_, Kr(k, "hover", u)), x = jn(_, Kr(k, "hover", h)), S = jn(_, Kr(k, "click", (L) => {
      L.button === 0 && g(L);
    })), M = jn(_, Kr(k, "focus", u)), O = jn(_, Kr(k, "focus", h)), I = jn(_, Kr(k, "contextmenu", (L) => {
      L.preventDefault(), g(L);
    })), K = jn(_, (L) => {
      const { code: q } = L;
      n.triggerKeys.includes(q) && (L.preventDefault(), g(L));
    });
    return t({
      triggerRef: w
    }), (L, q) => (Y(), Se(m(yC), {
      id: m(c),
      "virtual-ref": L.virtualRef,
      open: m(f),
      "virtual-triggering": L.virtualTriggering,
      class: te(m(r).e("trigger")),
      onBlur: m(O),
      onClick: m(S),
      onContextmenu: m(I),
      onFocus: m(M),
      onMouseenter: m(T),
      onMouseleave: m(x),
      onKeydown: m(K)
    }, {
      default: Pe(() => [
        Ze(L.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]));
  }
});
var nT = /* @__PURE__ */ Je(tT, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/trigger.vue"]]);
const rT = Ae({
  name: "ElTooltipContent",
  inheritAttrs: !1
}), oT = /* @__PURE__ */ Ae({
  ...rT,
  props: Dl,
  setup(e, { expose: t }) {
    const n = e, { selector: r } = Ep(), i = ce(null), c = ce(!1), {
      controlled: f,
      id: u,
      open: h,
      trigger: g,
      onClose: w,
      onOpen: _,
      onShow: k,
      onHide: T,
      onBeforeShow: x,
      onBeforeHide: S
    } = Ye(xl, void 0), M = V(() => process.env.NODE_ENV === "test" ? !0 : n.persistent);
    fn(() => {
      c.value = !0;
    });
    const O = V(() => m(M) ? !0 : m(h)), I = V(() => n.disabled ? !1 : m(h)), K = V(() => n.appendTo || r.value), L = V(() => {
      var A;
      return (A = n.style) != null ? A : {};
    }), q = V(() => !m(h)), N = () => {
      T();
    }, H = () => {
      if (m(f))
        return !0;
    }, F = jn(H, () => {
      n.enterable && m(g) === "hover" && _();
    }), le = jn(H, () => {
      m(g) === "hover" && w();
    }), re = () => {
      var A, G;
      (G = (A = i.value) == null ? void 0 : A.updatePopper) == null || G.call(A), x == null || x();
    }, fe = () => {
      S == null || S();
    }, _e = () => {
      k(), Q = Qf(V(() => {
        var A;
        return (A = i.value) == null ? void 0 : A.popperContentRef;
      }), () => {
        m(f) || m(g) !== "hover" && w();
      });
    }, ne = () => {
      n.virtualTriggering || w();
    };
    let Q;
    return be(() => m(h), (A) => {
      A || Q == null || Q();
    }, {
      flush: "post"
    }), be(() => n.content, () => {
      var A, G;
      (G = (A = i.value) == null ? void 0 : A.updatePopper) == null || G.call(A);
    }), t({
      contentRef: i
    }), (A, G) => (Y(), Se(tg, {
      disabled: !A.teleported,
      to: m(K)
    }, [
      pt(ao, {
        name: A.transition,
        onAfterLeave: N,
        onBeforeEnter: re,
        onAfterEnter: _e,
        onBeforeLeave: fe
      }, {
        default: Pe(() => [
          m(O) ? Et((Y(), Se(m(KC), bn({
            key: 0,
            id: m(u),
            ref_key: "contentRef",
            ref: i
          }, A.$attrs, {
            "aria-label": A.ariaLabel,
            "aria-hidden": m(q),
            "boundaries-padding": A.boundariesPadding,
            "fallback-placements": A.fallbackPlacements,
            "gpu-acceleration": A.gpuAcceleration,
            offset: A.offset,
            placement: A.placement,
            "popper-options": A.popperOptions,
            strategy: A.strategy,
            effect: A.effect,
            enterable: A.enterable,
            pure: A.pure,
            "popper-class": A.popperClass,
            "popper-style": [A.popperStyle, m(L)],
            "reference-el": A.referenceEl,
            "trigger-target-el": A.triggerTargetEl,
            visible: m(I),
            "z-index": A.zIndex,
            onMouseenter: m(F),
            onMouseleave: m(le),
            onBlur: ne,
            onClose: m(w)
          }), {
            default: Pe(() => [
              c.value ? Ee("v-if", !0) : Ze(A.$slots, "default", { key: 0 })
            ]),
            _: 3
          }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onClose"])), [
            [In, m(I)]
          ]) : Ee("v-if", !0)
        ]),
        _: 3
      }, 8, ["name"])
    ], 8, ["disabled", "to"]));
  }
});
var aT = /* @__PURE__ */ Je(oT, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/content.vue"]]);
const iT = ["innerHTML"], sT = { key: 1 }, lT = Ae({
  name: "ElTooltip"
}), uT = /* @__PURE__ */ Ae({
  ...lT,
  props: ZC,
  emits: QC,
  setup(e, { expose: t, emit: n }) {
    const r = e;
    CO();
    const i = pp(), c = ce(), f = ce(), u = () => {
      var O;
      const I = m(c);
      I && ((O = I.popperInstanceRef) == null || O.update());
    }, h = ce(!1), g = ce(), { show: w, hide: _, hasUpdateHandler: k } = GC({
      indicator: h,
      toggleReason: g
    }), { onOpen: T, onClose: x } = MO({
      showAfter: ln(r, "showAfter"),
      hideAfter: ln(r, "hideAfter"),
      open: w,
      close: _
    }), S = V(() => Jo(r.visible) && !k.value);
    Ot(xl, {
      controlled: S,
      id: i,
      open: ng(h),
      trigger: ln(r, "trigger"),
      onOpen: (O) => {
        T(O);
      },
      onClose: (O) => {
        x(O);
      },
      onToggle: (O) => {
        m(h) ? x(O) : T(O);
      },
      onShow: () => {
        n("show", g.value);
      },
      onHide: () => {
        n("hide", g.value);
      },
      onBeforeShow: () => {
        n("before-show", g.value);
      },
      onBeforeHide: () => {
        n("before-hide", g.value);
      },
      updatePopper: u
    }), be(() => r.disabled, (O) => {
      O && h.value && (h.value = !1);
    });
    const M = () => {
      var O, I;
      const K = (I = (O = f.value) == null ? void 0 : O.contentRef) == null ? void 0 : I.popperContentRef;
      return K && K.contains(document.activeElement);
    };
    return rg(() => h.value && _()), t({
      popperRef: c,
      contentRef: f,
      isFocusInsideContent: M,
      updatePopper: u,
      onOpen: T,
      onClose: x,
      hide: _
    }), (O, I) => (Y(), Se(m(qC), {
      ref_key: "popperRef",
      ref: c,
      role: O.role
    }, {
      default: Pe(() => [
        pt(nT, {
          disabled: O.disabled,
          trigger: O.trigger,
          "trigger-keys": O.triggerKeys,
          "virtual-ref": O.virtualRef,
          "virtual-triggering": O.virtualTriggering
        }, {
          default: Pe(() => [
            O.$slots.default ? Ze(O.$slots, "default", { key: 0 }) : Ee("v-if", !0)
          ]),
          _: 3
        }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]),
        pt(aT, {
          ref_key: "contentRef",
          ref: f,
          "aria-label": O.ariaLabel,
          "boundaries-padding": O.boundariesPadding,
          content: O.content,
          disabled: O.disabled,
          effect: O.effect,
          enterable: O.enterable,
          "fallback-placements": O.fallbackPlacements,
          "hide-after": O.hideAfter,
          "gpu-acceleration": O.gpuAcceleration,
          offset: O.offset,
          persistent: O.persistent,
          "popper-class": O.popperClass,
          "popper-style": O.popperStyle,
          placement: O.placement,
          "popper-options": O.popperOptions,
          pure: O.pure,
          "raw-content": O.rawContent,
          "reference-el": O.referenceEl,
          "trigger-target-el": O.triggerTargetEl,
          "show-after": O.showAfter,
          strategy: O.strategy,
          teleported: O.teleported,
          transition: O.transition,
          "virtual-triggering": O.virtualTriggering,
          "z-index": O.zIndex,
          "append-to": O.appendTo
        }, {
          default: Pe(() => [
            Ze(O.$slots, "content", {}, () => [
              O.rawContent ? (Y(), he("span", {
                key: 0,
                innerHTML: O.content
              }, null, 8, iT)) : (Y(), he("span", sT, tt(O.content), 1))
            ]),
            O.showArrow ? (Y(), Se(m(hC), {
              key: 0,
              "arrow-offset": O.arrowOffset
            }, null, 8, ["arrow-offset"])) : Ee("v-if", !0)
          ]),
          _: 3
        }, 8, ["aria-label", "boundaries-padding", "content", "disabled", "effect", "enterable", "fallback-placements", "hide-after", "gpu-acceleration", "offset", "persistent", "popper-class", "popper-style", "placement", "popper-options", "pure", "raw-content", "reference-el", "trigger-target-el", "show-after", "strategy", "teleported", "transition", "virtual-triggering", "z-index", "append-to"])
      ]),
      _: 3
    }, 8, ["role"]));
  }
});
var cT = /* @__PURE__ */ Je(uT, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/tooltip.vue"]]);
const zp = Ln(cT), dT = (e, t) => {
  dp({
    from: "type.text",
    replacement: "link",
    version: "3.0.0",
    scope: "props",
    ref: "https://element-plus.org/en-US/component/button.html#button-attributes"
  }, V(() => e.type === "text"));
  const n = Ye(sp, void 0), r = Dr("button"), { form: i } = $r(), c = Mr(V(() => n == null ? void 0 : n.size)), f = _i(), u = ce(), h = li(), g = V(() => e.type || (n == null ? void 0 : n.type) || ""), w = V(() => {
    var k, T, x;
    return (x = (T = e.autoInsertSpace) != null ? T : (k = r.value) == null ? void 0 : k.autoInsertSpace) != null ? x : !1;
  }), _ = V(() => {
    var k;
    const T = (k = h.default) == null ? void 0 : k.call(h);
    if (w.value && (T == null ? void 0 : T.length) === 1) {
      const x = T[0];
      if ((x == null ? void 0 : x.type) === Yd) {
        const S = x.children;
        return /^\p{Unified_Ideograph}{2}$/u.test(S.trim());
      }
    }
    return !1;
  });
  return {
    _disabled: f,
    _size: c,
    _type: g,
    _ref: u,
    shouldAddSpace: _,
    handleClick: (k) => {
      e.nativeType === "reset" && (i == null || i.resetFields()), t("click", k);
    }
  };
}, fT = [
  "default",
  "primary",
  "success",
  "warning",
  "info",
  "danger",
  "text",
  ""
], pT = ["button", "submit", "reset"], Ks = mt({
  size: la,
  disabled: Boolean,
  type: {
    type: String,
    values: fT,
    default: ""
  },
  icon: {
    type: Tr
  },
  nativeType: {
    type: String,
    values: pT,
    default: "button"
  },
  loading: Boolean,
  loadingIcon: {
    type: Tr,
    default: () => ml
  },
  plain: Boolean,
  text: Boolean,
  link: Boolean,
  bg: Boolean,
  autofocus: Boolean,
  round: Boolean,
  circle: Boolean,
  color: String,
  dark: Boolean,
  autoInsertSpace: {
    type: Boolean,
    default: void 0
  }
}), hT = {
  click: (e) => e instanceof MouseEvent
};
function At(e, t) {
  vT(e) && (e = "100%");
  var n = gT(e);
  return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), n && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)), e);
}
function Ya(e) {
  return Math.min(1, Math.max(0, e));
}
function vT(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function gT(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function Np(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function Xa(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function mr(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function mT(e, t, n) {
  return {
    r: At(e, 255) * 255,
    g: At(t, 255) * 255,
    b: At(n, 255) * 255
  };
}
function Ad(e, t, n) {
  e = At(e, 255), t = At(t, 255), n = At(n, 255);
  var r = Math.max(e, t, n), i = Math.min(e, t, n), c = 0, f = 0, u = (r + i) / 2;
  if (r === i)
    f = 0, c = 0;
  else {
    var h = r - i;
    switch (f = u > 0.5 ? h / (2 - r - i) : h / (r + i), r) {
      case e:
        c = (t - n) / h + (t < n ? 6 : 0);
        break;
      case t:
        c = (n - e) / h + 2;
        break;
      case n:
        c = (e - t) / h + 4;
        break;
    }
    c /= 6;
  }
  return { h: c, s: f, l: u };
}
function ys(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * (6 * n) : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function yT(e, t, n) {
  var r, i, c;
  if (e = At(e, 360), t = At(t, 100), n = At(n, 100), t === 0)
    i = n, c = n, r = n;
  else {
    var f = n < 0.5 ? n * (1 + t) : n + t - n * t, u = 2 * n - f;
    r = ys(u, f, e + 1 / 3), i = ys(u, f, e), c = ys(u, f, e - 1 / 3);
  }
  return { r: r * 255, g: i * 255, b: c * 255 };
}
function jd(e, t, n) {
  e = At(e, 255), t = At(t, 255), n = At(n, 255);
  var r = Math.max(e, t, n), i = Math.min(e, t, n), c = 0, f = r, u = r - i, h = r === 0 ? 0 : u / r;
  if (r === i)
    c = 0;
  else {
    switch (r) {
      case e:
        c = (t - n) / u + (t < n ? 6 : 0);
        break;
      case t:
        c = (n - e) / u + 2;
        break;
      case n:
        c = (e - t) / u + 4;
        break;
    }
    c /= 6;
  }
  return { h: c, s: h, v: f };
}
function bT(e, t, n) {
  e = At(e, 360) * 6, t = At(t, 100), n = At(n, 100);
  var r = Math.floor(e), i = e - r, c = n * (1 - t), f = n * (1 - i * t), u = n * (1 - (1 - i) * t), h = r % 6, g = [n, f, c, c, u, n][h], w = [u, n, n, f, c, c][h], _ = [c, c, u, n, n, f][h];
  return { r: g * 255, g: w * 255, b: _ * 255 };
}
function Id(e, t, n, r) {
  var i = [
    mr(Math.round(e).toString(16)),
    mr(Math.round(t).toString(16)),
    mr(Math.round(n).toString(16))
  ];
  return r && i[0].startsWith(i[0].charAt(1)) && i[1].startsWith(i[1].charAt(1)) && i[2].startsWith(i[2].charAt(1)) ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) : i.join("");
}
function wT(e, t, n, r, i) {
  var c = [
    mr(Math.round(e).toString(16)),
    mr(Math.round(t).toString(16)),
    mr(Math.round(n).toString(16)),
    mr(xT(r))
  ];
  return i && c[0].startsWith(c[0].charAt(1)) && c[1].startsWith(c[1].charAt(1)) && c[2].startsWith(c[2].charAt(1)) && c[3].startsWith(c[3].charAt(1)) ? c[0].charAt(0) + c[1].charAt(0) + c[2].charAt(0) + c[3].charAt(0) : c.join("");
}
function xT(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function Dd(e) {
  return Kt(e) / 255;
}
function Kt(e) {
  return parseInt(e, 16);
}
function _T(e) {
  return {
    r: e >> 16,
    g: (e & 65280) >> 8,
    b: e & 255
  };
}
var qs = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};
function ST(e) {
  var t = { r: 0, g: 0, b: 0 }, n = 1, r = null, i = null, c = null, f = !1, u = !1;
  return typeof e == "string" && (e = OT(e)), typeof e == "object" && (An(e.r) && An(e.g) && An(e.b) ? (t = mT(e.r, e.g, e.b), f = !0, u = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : An(e.h) && An(e.s) && An(e.v) ? (r = Xa(e.s), i = Xa(e.v), t = bT(e.h, r, i), f = !0, u = "hsv") : An(e.h) && An(e.s) && An(e.l) && (r = Xa(e.s), c = Xa(e.l), t = yT(e.h, r, c), f = !0, u = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (n = e.a)), n = Np(n), {
    ok: f,
    format: e.format || u,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: n
  };
}
var kT = "[-\\+]?\\d+%?", ET = "[-\\+]?\\d*\\.\\d+%?", Gn = "(?:".concat(ET, ")|(?:").concat(kT, ")"), bs = "[\\s|\\(]+(".concat(Gn, ")[,|\\s]+(").concat(Gn, ")[,|\\s]+(").concat(Gn, ")\\s*\\)?"), ws = "[\\s|\\(]+(".concat(Gn, ")[,|\\s]+(").concat(Gn, ")[,|\\s]+(").concat(Gn, ")[,|\\s]+(").concat(Gn, ")\\s*\\)?"), on = {
  CSS_UNIT: new RegExp(Gn),
  rgb: new RegExp("rgb" + bs),
  rgba: new RegExp("rgba" + ws),
  hsl: new RegExp("hsl" + bs),
  hsla: new RegExp("hsla" + ws),
  hsv: new RegExp("hsv" + bs),
  hsva: new RegExp("hsva" + ws),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function OT(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  var t = !1;
  if (qs[e])
    e = qs[e], t = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var n = on.rgb.exec(e);
  return n ? { r: n[1], g: n[2], b: n[3] } : (n = on.rgba.exec(e), n ? { r: n[1], g: n[2], b: n[3], a: n[4] } : (n = on.hsl.exec(e), n ? { h: n[1], s: n[2], l: n[3] } : (n = on.hsla.exec(e), n ? { h: n[1], s: n[2], l: n[3], a: n[4] } : (n = on.hsv.exec(e), n ? { h: n[1], s: n[2], v: n[3] } : (n = on.hsva.exec(e), n ? { h: n[1], s: n[2], v: n[3], a: n[4] } : (n = on.hex8.exec(e), n ? {
    r: Kt(n[1]),
    g: Kt(n[2]),
    b: Kt(n[3]),
    a: Dd(n[4]),
    format: t ? "name" : "hex8"
  } : (n = on.hex6.exec(e), n ? {
    r: Kt(n[1]),
    g: Kt(n[2]),
    b: Kt(n[3]),
    format: t ? "name" : "hex"
  } : (n = on.hex4.exec(e), n ? {
    r: Kt(n[1] + n[1]),
    g: Kt(n[2] + n[2]),
    b: Kt(n[3] + n[3]),
    a: Dd(n[4] + n[4]),
    format: t ? "name" : "hex8"
  } : (n = on.hex3.exec(e), n ? {
    r: Kt(n[1] + n[1]),
    g: Kt(n[2] + n[2]),
    b: Kt(n[3] + n[3]),
    format: t ? "name" : "hex"
  } : !1)))))))));
}
function An(e) {
  return !!on.CSS_UNIT.exec(String(e));
}
var CT = (
  /** @class */
  function() {
    function e(t, n) {
      t === void 0 && (t = ""), n === void 0 && (n = {});
      var r;
      if (t instanceof e)
        return t;
      typeof t == "number" && (t = _T(t)), this.originalInput = t;
      var i = ST(t);
      this.originalInput = t, this.r = i.r, this.g = i.g, this.b = i.b, this.a = i.a, this.roundA = Math.round(100 * this.a) / 100, this.format = (r = n.format) !== null && r !== void 0 ? r : i.format, this.gradientType = n.gradientType, this.r < 1 && (this.r = Math.round(this.r)), this.g < 1 && (this.g = Math.round(this.g)), this.b < 1 && (this.b = Math.round(this.b)), this.isValid = i.ok;
    }
    return e.prototype.isDark = function() {
      return this.getBrightness() < 128;
    }, e.prototype.isLight = function() {
      return !this.isDark();
    }, e.prototype.getBrightness = function() {
      var t = this.toRgb();
      return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3;
    }, e.prototype.getLuminance = function() {
      var t = this.toRgb(), n, r, i, c = t.r / 255, f = t.g / 255, u = t.b / 255;
      return c <= 0.03928 ? n = c / 12.92 : n = Math.pow((c + 0.055) / 1.055, 2.4), f <= 0.03928 ? r = f / 12.92 : r = Math.pow((f + 0.055) / 1.055, 2.4), u <= 0.03928 ? i = u / 12.92 : i = Math.pow((u + 0.055) / 1.055, 2.4), 0.2126 * n + 0.7152 * r + 0.0722 * i;
    }, e.prototype.getAlpha = function() {
      return this.a;
    }, e.prototype.setAlpha = function(t) {
      return this.a = Np(t), this.roundA = Math.round(100 * this.a) / 100, this;
    }, e.prototype.isMonochrome = function() {
      var t = this.toHsl().s;
      return t === 0;
    }, e.prototype.toHsv = function() {
      var t = jd(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
    }, e.prototype.toHsvString = function() {
      var t = jd(this.r, this.g, this.b), n = Math.round(t.h * 360), r = Math.round(t.s * 100), i = Math.round(t.v * 100);
      return this.a === 1 ? "hsv(".concat(n, ", ").concat(r, "%, ").concat(i, "%)") : "hsva(".concat(n, ", ").concat(r, "%, ").concat(i, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHsl = function() {
      var t = Ad(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
    }, e.prototype.toHslString = function() {
      var t = Ad(this.r, this.g, this.b), n = Math.round(t.h * 360), r = Math.round(t.s * 100), i = Math.round(t.l * 100);
      return this.a === 1 ? "hsl(".concat(n, ", ").concat(r, "%, ").concat(i, "%)") : "hsla(".concat(n, ", ").concat(r, "%, ").concat(i, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHex = function(t) {
      return t === void 0 && (t = !1), Id(this.r, this.g, this.b, t);
    }, e.prototype.toHexString = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex(t);
    }, e.prototype.toHex8 = function(t) {
      return t === void 0 && (t = !1), wT(this.r, this.g, this.b, this.a, t);
    }, e.prototype.toHex8String = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex8(t);
    }, e.prototype.toHexShortString = function(t) {
      return t === void 0 && (t = !1), this.a === 1 ? this.toHexString(t) : this.toHex8String(t);
    }, e.prototype.toRgb = function() {
      return {
        r: Math.round(this.r),
        g: Math.round(this.g),
        b: Math.round(this.b),
        a: this.a
      };
    }, e.prototype.toRgbString = function() {
      var t = Math.round(this.r), n = Math.round(this.g), r = Math.round(this.b);
      return this.a === 1 ? "rgb(".concat(t, ", ").concat(n, ", ").concat(r, ")") : "rgba(".concat(t, ", ").concat(n, ", ").concat(r, ", ").concat(this.roundA, ")");
    }, e.prototype.toPercentageRgb = function() {
      var t = function(n) {
        return "".concat(Math.round(At(n, 255) * 100), "%");
      };
      return {
        r: t(this.r),
        g: t(this.g),
        b: t(this.b),
        a: this.a
      };
    }, e.prototype.toPercentageRgbString = function() {
      var t = function(n) {
        return Math.round(At(n, 255) * 100);
      };
      return this.a === 1 ? "rgb(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%)") : "rgba(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%, ").concat(this.roundA, ")");
    }, e.prototype.toName = function() {
      if (this.a === 0)
        return "transparent";
      if (this.a < 1)
        return !1;
      for (var t = "#" + Id(this.r, this.g, this.b, !1), n = 0, r = Object.entries(qs); n < r.length; n++) {
        var i = r[n], c = i[0], f = i[1];
        if (t === f)
          return c;
      }
      return !1;
    }, e.prototype.toString = function(t) {
      var n = !!t;
      t = t ?? this.format;
      var r = !1, i = this.a < 1 && this.a >= 0, c = !n && i && (t.startsWith("hex") || t === "name");
      return c ? t === "name" && this.a === 0 ? this.toName() : this.toRgbString() : (t === "rgb" && (r = this.toRgbString()), t === "prgb" && (r = this.toPercentageRgbString()), (t === "hex" || t === "hex6") && (r = this.toHexString()), t === "hex3" && (r = this.toHexString(!0)), t === "hex4" && (r = this.toHex8String(!0)), t === "hex8" && (r = this.toHex8String()), t === "name" && (r = this.toName()), t === "hsl" && (r = this.toHslString()), t === "hsv" && (r = this.toHsvString()), r || this.toHexString());
    }, e.prototype.toNumber = function() {
      return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
    }, e.prototype.clone = function() {
      return new e(this.toString());
    }, e.prototype.lighten = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.l += t / 100, n.l = Ya(n.l), new e(n);
    }, e.prototype.brighten = function(t) {
      t === void 0 && (t = 10);
      var n = this.toRgb();
      return n.r = Math.max(0, Math.min(255, n.r - Math.round(255 * -(t / 100)))), n.g = Math.max(0, Math.min(255, n.g - Math.round(255 * -(t / 100)))), n.b = Math.max(0, Math.min(255, n.b - Math.round(255 * -(t / 100)))), new e(n);
    }, e.prototype.darken = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.l -= t / 100, n.l = Ya(n.l), new e(n);
    }, e.prototype.tint = function(t) {
      return t === void 0 && (t = 10), this.mix("white", t);
    }, e.prototype.shade = function(t) {
      return t === void 0 && (t = 10), this.mix("black", t);
    }, e.prototype.desaturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s -= t / 100, n.s = Ya(n.s), new e(n);
    }, e.prototype.saturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s += t / 100, n.s = Ya(n.s), new e(n);
    }, e.prototype.greyscale = function() {
      return this.desaturate(100);
    }, e.prototype.spin = function(t) {
      var n = this.toHsl(), r = (n.h + t) % 360;
      return n.h = r < 0 ? 360 + r : r, new e(n);
    }, e.prototype.mix = function(t, n) {
      n === void 0 && (n = 50);
      var r = this.toRgb(), i = new e(t).toRgb(), c = n / 100, f = {
        r: (i.r - r.r) * c + r.r,
        g: (i.g - r.g) * c + r.g,
        b: (i.b - r.b) * c + r.b,
        a: (i.a - r.a) * c + r.a
      };
      return new e(f);
    }, e.prototype.analogous = function(t, n) {
      t === void 0 && (t = 6), n === void 0 && (n = 30);
      var r = this.toHsl(), i = 360 / n, c = [this];
      for (r.h = (r.h - (i * t >> 1) + 720) % 360; --t; )
        r.h = (r.h + i) % 360, c.push(new e(r));
      return c;
    }, e.prototype.complement = function() {
      var t = this.toHsl();
      return t.h = (t.h + 180) % 360, new e(t);
    }, e.prototype.monochromatic = function(t) {
      t === void 0 && (t = 6);
      for (var n = this.toHsv(), r = n.h, i = n.s, c = n.v, f = [], u = 1 / t; t--; )
        f.push(new e({ h: r, s: i, v: c })), c = (c + u) % 1;
      return f;
    }, e.prototype.splitcomplement = function() {
      var t = this.toHsl(), n = t.h;
      return [
        this,
        new e({ h: (n + 72) % 360, s: t.s, l: t.l }),
        new e({ h: (n + 216) % 360, s: t.s, l: t.l })
      ];
    }, e.prototype.onBackground = function(t) {
      var n = this.toRgb(), r = new e(t).toRgb(), i = n.a + r.a * (1 - n.a);
      return new e({
        r: (n.r * n.a + r.r * r.a * (1 - n.a)) / i,
        g: (n.g * n.a + r.g * r.a * (1 - n.a)) / i,
        b: (n.b * n.a + r.b * r.a * (1 - n.a)) / i,
        a: i
      });
    }, e.prototype.triad = function() {
      return this.polyad(3);
    }, e.prototype.tetrad = function() {
      return this.polyad(4);
    }, e.prototype.polyad = function(t) {
      for (var n = this.toHsl(), r = n.h, i = [this], c = 360 / t, f = 1; f < t; f++)
        i.push(new e({ h: (r + f * c) % 360, s: n.s, l: n.l }));
      return i;
    }, e.prototype.equals = function(t) {
      return this.toRgbString() === new e(t).toRgbString();
    }, e;
  }()
);
function Kn(e, t = 20) {
  return e.mix("#141414", t).toString();
}
function TT(e) {
  const t = _i(), n = Ke("button");
  return V(() => {
    let r = {};
    const i = e.color;
    if (i) {
      const c = new CT(i), f = e.dark ? c.tint(20).toString() : Kn(c, 20);
      if (e.plain)
        r = n.cssVarBlock({
          "bg-color": e.dark ? Kn(c, 90) : c.tint(90).toString(),
          "text-color": i,
          "border-color": e.dark ? Kn(c, 50) : c.tint(50).toString(),
          "hover-text-color": `var(${n.cssVarName("color-white")})`,
          "hover-bg-color": i,
          "hover-border-color": i,
          "active-bg-color": f,
          "active-text-color": `var(${n.cssVarName("color-white")})`,
          "active-border-color": f
        }), t.value && (r[n.cssVarBlockName("disabled-bg-color")] = e.dark ? Kn(c, 90) : c.tint(90).toString(), r[n.cssVarBlockName("disabled-text-color")] = e.dark ? Kn(c, 50) : c.tint(50).toString(), r[n.cssVarBlockName("disabled-border-color")] = e.dark ? Kn(c, 80) : c.tint(80).toString());
      else {
        const u = e.dark ? Kn(c, 30) : c.tint(30).toString(), h = c.isDark() ? `var(${n.cssVarName("color-white")})` : `var(${n.cssVarName("color-black")})`;
        if (r = n.cssVarBlock({
          "bg-color": i,
          "text-color": h,
          "border-color": i,
          "hover-bg-color": u,
          "hover-text-color": h,
          "hover-border-color": u,
          "active-bg-color": f,
          "active-border-color": f
        }), t.value) {
          const g = e.dark ? Kn(c, 50) : c.tint(50).toString();
          r[n.cssVarBlockName("disabled-bg-color")] = g, r[n.cssVarBlockName("disabled-text-color")] = e.dark ? "rgba(255, 255, 255, 0.5)" : `var(${n.cssVarName("color-white")})`, r[n.cssVarBlockName("disabled-border-color")] = g;
        }
      }
    }
    return r;
  });
}
const MT = ["aria-disabled", "disabled", "autofocus", "type"], PT = Ae({
  name: "ElButton"
}), AT = /* @__PURE__ */ Ae({
  ...PT,
  props: Ks,
  emits: hT,
  setup(e, { expose: t, emit: n }) {
    const r = e, i = TT(r), c = Ke("button"), { _ref: f, _size: u, _type: h, _disabled: g, shouldAddSpace: w, handleClick: _ } = dT(r, n);
    return t({
      ref: f,
      size: u,
      type: h,
      disabled: g,
      shouldAddSpace: w
    }), (k, T) => (Y(), he("button", {
      ref_key: "_ref",
      ref: f,
      class: te([
        m(c).b(),
        m(c).m(m(h)),
        m(c).m(m(u)),
        m(c).is("disabled", m(g)),
        m(c).is("loading", k.loading),
        m(c).is("plain", k.plain),
        m(c).is("round", k.round),
        m(c).is("circle", k.circle),
        m(c).is("text", k.text),
        m(c).is("link", k.link),
        m(c).is("has-bg", k.bg)
      ]),
      "aria-disabled": m(g) || k.loading,
      disabled: m(g) || k.loading,
      autofocus: k.autofocus,
      type: k.nativeType,
      style: _t(m(i)),
      onClick: T[0] || (T[0] = (...x) => m(_) && m(_)(...x))
    }, [
      k.loading ? (Y(), he(yt, { key: 0 }, [
        k.$slots.loading ? Ze(k.$slots, "loading", { key: 0 }) : (Y(), Se(m(Mt), {
          key: 1,
          class: te(m(c).is("loading"))
        }, {
          default: Pe(() => [
            (Y(), Se($t(k.loadingIcon)))
          ]),
          _: 1
        }, 8, ["class"]))
      ], 64)) : k.icon || k.$slots.icon ? (Y(), Se(m(Mt), { key: 1 }, {
        default: Pe(() => [
          k.icon ? (Y(), Se($t(k.icon), { key: 0 })) : Ze(k.$slots, "icon", { key: 1 })
        ]),
        _: 3
      })) : Ee("v-if", !0),
      k.$slots.default ? (Y(), he("span", {
        key: 2,
        class: te({ [m(c).em("text", "expand")]: m(w) })
      }, [
        Ze(k.$slots, "default")
      ], 2)) : Ee("v-if", !0)
    ], 14, MT));
  }
});
var jT = /* @__PURE__ */ Je(AT, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/button/src/button.vue"]]);
const IT = {
  size: Ks.size,
  type: Ks.type
}, DT = Ae({
  name: "ElButtonGroup"
}), $T = /* @__PURE__ */ Ae({
  ...DT,
  props: IT,
  setup(e) {
    const t = e;
    Ot(sp, cn({
      size: ln(t, "size"),
      type: ln(t, "type")
    }));
    const n = Ke("button");
    return (r, i) => (Y(), he("div", {
      class: te(`${m(n).b("group")}`)
    }, [
      Ze(r.$slots, "default")
    ], 2));
  }
});
var Rp = /* @__PURE__ */ Je($T, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/button/src/button-group.vue"]]);
Ln(jT, {
  ButtonGroup: Rp
});
sa(Rp);
var Lp = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Bp(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Fp = { exports: {} };
(function(e, t) {
  (function(n, r) {
    e.exports = r();
  })(Lp, function() {
    var n = 1e3, r = 6e4, i = 36e5, c = "millisecond", f = "second", u = "minute", h = "hour", g = "day", w = "week", _ = "month", k = "quarter", T = "year", x = "date", S = "Invalid Date", M = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, O = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, I = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(ne) {
      var Q = ["th", "st", "nd", "rd"], A = ne % 100;
      return "[" + ne + (Q[(A - 20) % 10] || Q[A] || Q[0]) + "]";
    } }, K = function(ne, Q, A) {
      var G = String(ne);
      return !G || G.length >= Q ? ne : "" + Array(Q + 1 - G.length).join(A) + ne;
    }, L = { s: K, z: function(ne) {
      var Q = -ne.utcOffset(), A = Math.abs(Q), G = Math.floor(A / 60), z = A % 60;
      return (Q <= 0 ? "+" : "-") + K(G, 2, "0") + ":" + K(z, 2, "0");
    }, m: function ne(Q, A) {
      if (Q.date() < A.date())
        return -ne(A, Q);
      var G = 12 * (A.year() - Q.year()) + (A.month() - Q.month()), z = Q.clone().add(G, _), U = A - z < 0, D = Q.clone().add(G + (U ? -1 : 1), _);
      return +(-(G + (A - z) / (U ? z - D : D - z)) || 0);
    }, a: function(ne) {
      return ne < 0 ? Math.ceil(ne) || 0 : Math.floor(ne);
    }, p: function(ne) {
      return { M: _, y: T, w, d: g, D: x, h, m: u, s: f, ms: c, Q: k }[ne] || String(ne || "").toLowerCase().replace(/s$/, "");
    }, u: function(ne) {
      return ne === void 0;
    } }, q = "en", N = {};
    N[q] = I;
    var H = function(ne) {
      return ne instanceof fe;
    }, F = function ne(Q, A, G) {
      var z;
      if (!Q)
        return q;
      if (typeof Q == "string") {
        var U = Q.toLowerCase();
        N[U] && (z = U), A && (N[U] = A, z = U);
        var D = Q.split("-");
        if (!z && D.length > 1)
          return ne(D[0]);
      } else {
        var X = Q.name;
        N[X] = Q, z = X;
      }
      return !G && z && (q = z), z || !G && q;
    }, le = function(ne, Q) {
      if (H(ne))
        return ne.clone();
      var A = typeof Q == "object" ? Q : {};
      return A.date = ne, A.args = arguments, new fe(A);
    }, re = L;
    re.l = F, re.i = H, re.w = function(ne, Q) {
      return le(ne, { locale: Q.$L, utc: Q.$u, x: Q.$x, $offset: Q.$offset });
    };
    var fe = function() {
      function ne(A) {
        this.$L = F(A.locale, null, !0), this.parse(A);
      }
      var Q = ne.prototype;
      return Q.parse = function(A) {
        this.$d = function(G) {
          var z = G.date, U = G.utc;
          if (z === null)
            return /* @__PURE__ */ new Date(NaN);
          if (re.u(z))
            return /* @__PURE__ */ new Date();
          if (z instanceof Date)
            return new Date(z);
          if (typeof z == "string" && !/Z$/i.test(z)) {
            var D = z.match(M);
            if (D) {
              var X = D[2] - 1 || 0, oe = (D[7] || "0").substring(0, 3);
              return U ? new Date(Date.UTC(D[1], X, D[3] || 1, D[4] || 0, D[5] || 0, D[6] || 0, oe)) : new Date(D[1], X, D[3] || 1, D[4] || 0, D[5] || 0, D[6] || 0, oe);
            }
          }
          return new Date(z);
        }(A), this.$x = A.x || {}, this.init();
      }, Q.init = function() {
        var A = this.$d;
        this.$y = A.getFullYear(), this.$M = A.getMonth(), this.$D = A.getDate(), this.$W = A.getDay(), this.$H = A.getHours(), this.$m = A.getMinutes(), this.$s = A.getSeconds(), this.$ms = A.getMilliseconds();
      }, Q.$utils = function() {
        return re;
      }, Q.isValid = function() {
        return this.$d.toString() !== S;
      }, Q.isSame = function(A, G) {
        var z = le(A);
        return this.startOf(G) <= z && z <= this.endOf(G);
      }, Q.isAfter = function(A, G) {
        return le(A) < this.startOf(G);
      }, Q.isBefore = function(A, G) {
        return this.endOf(G) < le(A);
      }, Q.$g = function(A, G, z) {
        return re.u(A) ? this[G] : this.set(z, A);
      }, Q.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, Q.valueOf = function() {
        return this.$d.getTime();
      }, Q.startOf = function(A, G) {
        var z = this, U = !!re.u(G) || G, D = re.p(A), X = function(Le, se) {
          var pe = re.w(z.$u ? Date.UTC(z.$y, se, Le) : new Date(z.$y, se, Le), z);
          return U ? pe : pe.endOf(g);
        }, oe = function(Le, se) {
          return re.w(z.toDate()[Le].apply(z.toDate("s"), (U ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(se)), z);
        }, ue = this.$W, ye = this.$M, $e = this.$D, ee = "set" + (this.$u ? "UTC" : "");
        switch (D) {
          case T:
            return U ? X(1, 0) : X(31, 11);
          case _:
            return U ? X(1, ye) : X(0, ye + 1);
          case w:
            var He = this.$locale().weekStart || 0, Ve = (ue < He ? ue + 7 : ue) - He;
            return X(U ? $e - Ve : $e + (6 - Ve), ye);
          case g:
          case x:
            return oe(ee + "Hours", 0);
          case h:
            return oe(ee + "Minutes", 1);
          case u:
            return oe(ee + "Seconds", 2);
          case f:
            return oe(ee + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, Q.endOf = function(A) {
        return this.startOf(A, !1);
      }, Q.$set = function(A, G) {
        var z, U = re.p(A), D = "set" + (this.$u ? "UTC" : ""), X = (z = {}, z[g] = D + "Date", z[x] = D + "Date", z[_] = D + "Month", z[T] = D + "FullYear", z[h] = D + "Hours", z[u] = D + "Minutes", z[f] = D + "Seconds", z[c] = D + "Milliseconds", z)[U], oe = U === g ? this.$D + (G - this.$W) : G;
        if (U === _ || U === T) {
          var ue = this.clone().set(x, 1);
          ue.$d[X](oe), ue.init(), this.$d = ue.set(x, Math.min(this.$D, ue.daysInMonth())).$d;
        } else
          X && this.$d[X](oe);
        return this.init(), this;
      }, Q.set = function(A, G) {
        return this.clone().$set(A, G);
      }, Q.get = function(A) {
        return this[re.p(A)]();
      }, Q.add = function(A, G) {
        var z, U = this;
        A = Number(A);
        var D = re.p(G), X = function(ye) {
          var $e = le(U);
          return re.w($e.date($e.date() + Math.round(ye * A)), U);
        };
        if (D === _)
          return this.set(_, this.$M + A);
        if (D === T)
          return this.set(T, this.$y + A);
        if (D === g)
          return X(1);
        if (D === w)
          return X(7);
        var oe = (z = {}, z[u] = r, z[h] = i, z[f] = n, z)[D] || 1, ue = this.$d.getTime() + A * oe;
        return re.w(ue, this);
      }, Q.subtract = function(A, G) {
        return this.add(-1 * A, G);
      }, Q.format = function(A) {
        var G = this, z = this.$locale();
        if (!this.isValid())
          return z.invalidDate || S;
        var U = A || "YYYY-MM-DDTHH:mm:ssZ", D = re.z(this), X = this.$H, oe = this.$m, ue = this.$M, ye = z.weekdays, $e = z.months, ee = function(se, pe, Te, Oe) {
          return se && (se[pe] || se(G, U)) || Te[pe].slice(0, Oe);
        }, He = function(se) {
          return re.s(X % 12 || 12, se, "0");
        }, Ve = z.meridiem || function(se, pe, Te) {
          var Oe = se < 12 ? "AM" : "PM";
          return Te ? Oe.toLowerCase() : Oe;
        }, Le = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: ue + 1, MM: re.s(ue + 1, 2, "0"), MMM: ee(z.monthsShort, ue, $e, 3), MMMM: ee($e, ue), D: this.$D, DD: re.s(this.$D, 2, "0"), d: String(this.$W), dd: ee(z.weekdaysMin, this.$W, ye, 2), ddd: ee(z.weekdaysShort, this.$W, ye, 3), dddd: ye[this.$W], H: String(X), HH: re.s(X, 2, "0"), h: He(1), hh: He(2), a: Ve(X, oe, !0), A: Ve(X, oe, !1), m: String(oe), mm: re.s(oe, 2, "0"), s: String(this.$s), ss: re.s(this.$s, 2, "0"), SSS: re.s(this.$ms, 3, "0"), Z: D };
        return U.replace(O, function(se, pe) {
          return pe || Le[se] || D.replace(":", "");
        });
      }, Q.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, Q.diff = function(A, G, z) {
        var U, D = re.p(G), X = le(A), oe = (X.utcOffset() - this.utcOffset()) * r, ue = this - X, ye = re.m(this, X);
        return ye = (U = {}, U[T] = ye / 12, U[_] = ye, U[k] = ye / 3, U[w] = (ue - oe) / 6048e5, U[g] = (ue - oe) / 864e5, U[h] = ue / i, U[u] = ue / r, U[f] = ue / n, U)[D] || ue, z ? ye : re.a(ye);
      }, Q.daysInMonth = function() {
        return this.endOf(_).$D;
      }, Q.$locale = function() {
        return N[this.$L];
      }, Q.locale = function(A, G) {
        if (!A)
          return this.$L;
        var z = this.clone(), U = F(A, G, !0);
        return U && (z.$L = U), z;
      }, Q.clone = function() {
        return re.w(this.$d, this);
      }, Q.toDate = function() {
        return new Date(this.valueOf());
      }, Q.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, Q.toISOString = function() {
        return this.$d.toISOString();
      }, Q.toString = function() {
        return this.$d.toUTCString();
      }, ne;
    }(), _e = fe.prototype;
    return le.prototype = _e, [["$ms", c], ["$s", f], ["$m", u], ["$H", h], ["$W", g], ["$M", _], ["$y", T], ["$D", x]].forEach(function(ne) {
      _e[ne[1]] = function(Q) {
        return this.$g(Q, ne[0], ne[1]);
      };
    }), le.extend = function(ne, Q) {
      return ne.$i || (ne(Q, fe, le), ne.$i = !0), le;
    }, le.locale = F, le.isDayjs = H, le.unix = function(ne) {
      return le(1e3 * ne);
    }, le.en = N[q], le.Ls = N, le.p = {}, le;
  });
})(Fp);
var zT = Fp.exports;
const Zt = /* @__PURE__ */ Bp(zT);
var Hp = { exports: {} };
(function(e, t) {
  (function(n, r) {
    e.exports = r();
  })(Lp, function() {
    var n = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, r = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, i = /\d\d/, c = /\d\d?/, f = /\d*[^-_:/,()\s\d]+/, u = {}, h = function(S) {
      return (S = +S) + (S > 68 ? 1900 : 2e3);
    }, g = function(S) {
      return function(M) {
        this[S] = +M;
      };
    }, w = [/[+-]\d\d:?(\d\d)?|Z/, function(S) {
      (this.zone || (this.zone = {})).offset = function(M) {
        if (!M || M === "Z")
          return 0;
        var O = M.match(/([+-]|\d\d)/g), I = 60 * O[1] + (+O[2] || 0);
        return I === 0 ? 0 : O[0] === "+" ? -I : I;
      }(S);
    }], _ = function(S) {
      var M = u[S];
      return M && (M.indexOf ? M : M.s.concat(M.f));
    }, k = function(S, M) {
      var O, I = u.meridiem;
      if (I) {
        for (var K = 1; K <= 24; K += 1)
          if (S.indexOf(I(K, 0, M)) > -1) {
            O = K > 12;
            break;
          }
      } else
        O = S === (M ? "pm" : "PM");
      return O;
    }, T = { A: [f, function(S) {
      this.afternoon = k(S, !1);
    }], a: [f, function(S) {
      this.afternoon = k(S, !0);
    }], S: [/\d/, function(S) {
      this.milliseconds = 100 * +S;
    }], SS: [i, function(S) {
      this.milliseconds = 10 * +S;
    }], SSS: [/\d{3}/, function(S) {
      this.milliseconds = +S;
    }], s: [c, g("seconds")], ss: [c, g("seconds")], m: [c, g("minutes")], mm: [c, g("minutes")], H: [c, g("hours")], h: [c, g("hours")], HH: [c, g("hours")], hh: [c, g("hours")], D: [c, g("day")], DD: [i, g("day")], Do: [f, function(S) {
      var M = u.ordinal, O = S.match(/\d+/);
      if (this.day = O[0], M)
        for (var I = 1; I <= 31; I += 1)
          M(I).replace(/\[|\]/g, "") === S && (this.day = I);
    }], M: [c, g("month")], MM: [i, g("month")], MMM: [f, function(S) {
      var M = _("months"), O = (_("monthsShort") || M.map(function(I) {
        return I.slice(0, 3);
      })).indexOf(S) + 1;
      if (O < 1)
        throw new Error();
      this.month = O % 12 || O;
    }], MMMM: [f, function(S) {
      var M = _("months").indexOf(S) + 1;
      if (M < 1)
        throw new Error();
      this.month = M % 12 || M;
    }], Y: [/[+-]?\d+/, g("year")], YY: [i, function(S) {
      this.year = h(S);
    }], YYYY: [/\d{4}/, g("year")], Z: w, ZZ: w };
    function x(S) {
      var M, O;
      M = S, O = u && u.formats;
      for (var I = (S = M.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(le, re, fe) {
        var _e = fe && fe.toUpperCase();
        return re || O[fe] || n[fe] || O[_e].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(ne, Q, A) {
          return Q || A.slice(1);
        });
      })).match(r), K = I.length, L = 0; L < K; L += 1) {
        var q = I[L], N = T[q], H = N && N[0], F = N && N[1];
        I[L] = F ? { regex: H, parser: F } : q.replace(/^\[|\]$/g, "");
      }
      return function(le) {
        for (var re = {}, fe = 0, _e = 0; fe < K; fe += 1) {
          var ne = I[fe];
          if (typeof ne == "string")
            _e += ne.length;
          else {
            var Q = ne.regex, A = ne.parser, G = le.slice(_e), z = Q.exec(G)[0];
            A.call(re, z), le = le.replace(z, "");
          }
        }
        return function(U) {
          var D = U.afternoon;
          if (D !== void 0) {
            var X = U.hours;
            D ? X < 12 && (U.hours += 12) : X === 12 && (U.hours = 0), delete U.afternoon;
          }
        }(re), re;
      };
    }
    return function(S, M, O) {
      O.p.customParseFormat = !0, S && S.parseTwoDigitYear && (h = S.parseTwoDigitYear);
      var I = M.prototype, K = I.parse;
      I.parse = function(L) {
        var q = L.date, N = L.utc, H = L.args;
        this.$u = N;
        var F = H[1];
        if (typeof F == "string") {
          var le = H[2] === !0, re = H[3] === !0, fe = le || re, _e = H[2];
          re && (_e = H[2]), u = this.$locale(), !le && _e && (u = O.Ls[_e]), this.$d = function(G, z, U) {
            try {
              if (["x", "X"].indexOf(z) > -1)
                return new Date((z === "X" ? 1e3 : 1) * G);
              var D = x(z)(G), X = D.year, oe = D.month, ue = D.day, ye = D.hours, $e = D.minutes, ee = D.seconds, He = D.milliseconds, Ve = D.zone, Le = /* @__PURE__ */ new Date(), se = ue || (X || oe ? 1 : Le.getDate()), pe = X || Le.getFullYear(), Te = 0;
              X && !oe || (Te = oe > 0 ? oe - 1 : Le.getMonth());
              var Oe = ye || 0, Fe = $e || 0, et = ee || 0, nt = He || 0;
              return Ve ? new Date(Date.UTC(pe, Te, se, Oe, Fe, et, nt + 60 * Ve.offset * 1e3)) : U ? new Date(Date.UTC(pe, Te, se, Oe, Fe, et, nt)) : new Date(pe, Te, se, Oe, Fe, et, nt);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }(q, F, N), this.init(), _e && _e !== !0 && (this.$L = this.locale(_e).$L), fe && q != this.format(F) && (this.$d = /* @__PURE__ */ new Date("")), u = {};
        } else if (F instanceof Array)
          for (var ne = F.length, Q = 1; Q <= ne; Q += 1) {
            H[1] = F[Q - 1];
            var A = O.apply(this, H);
            if (A.isValid()) {
              this.$d = A.$d, this.$L = A.$L, this.init();
              break;
            }
            Q === ne && (this.$d = /* @__PURE__ */ new Date(""));
          }
        else
          K.call(this, L);
      };
    };
  });
})(Hp);
var NT = Hp.exports;
const RT = /* @__PURE__ */ Bp(NT), $d = ["hours", "minutes", "seconds"], LT = "HH:mm:ss", xs = (e, t) => [
  e > 0 ? e - 1 : void 0,
  e,
  e < t ? e + 1 : void 0
], zd = function(e, t) {
  const n = id(e), r = id(t);
  return n && r ? e.getTime() === t.getTime() : !n && !r ? e === t : !1;
}, Nd = function(e, t) {
  const n = bt(e), r = bt(t);
  return n && r ? e.length !== t.length ? !1 : e.every((i, c) => zd(i, t[c])) : !n && !r ? zd(e, t) : !1;
}, Rd = function(e, t, n) {
  const r = ep(t) || t === "x" ? Zt(e).locale(n) : Zt(e, t).locale(n);
  return r.isValid() ? r : void 0;
}, Ld = function(e, t, n) {
  return ep(t) ? e : t === "x" ? +e : Zt(e).locale(n).format(t);
}, _s = (e, t) => {
  var n;
  const r = [], i = t == null ? void 0 : t();
  for (let c = 0; c < e; c++)
    r.push((n = i == null ? void 0 : i.includes(c)) != null ? n : !1);
  return r;
}, Vp = mt({
  disabledHours: {
    type: Ne(Function)
  },
  disabledMinutes: {
    type: Ne(Function)
  },
  disabledSeconds: {
    type: Ne(Function)
  }
}), Wp = mt({
  visible: Boolean,
  actualVisible: {
    type: Boolean,
    default: void 0
  },
  format: {
    type: String,
    default: ""
  }
}), Kp = mt({
  id: {
    type: Ne([Array, String])
  },
  name: {
    type: Ne([Array, String]),
    default: ""
  },
  popperClass: {
    type: String,
    default: ""
  },
  format: String,
  valueFormat: String,
  type: {
    type: String,
    default: ""
  },
  clearable: {
    type: Boolean,
    default: !0
  },
  clearIcon: {
    type: Ne([String, Object]),
    default: wi
  },
  editable: {
    type: Boolean,
    default: !0
  },
  prefixIcon: {
    type: Ne([String, Object]),
    default: ""
  },
  size: la,
  readonly: {
    type: Boolean,
    default: !1
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  placeholder: {
    type: String,
    default: ""
  },
  popperOptions: {
    type: Ne(Object),
    default: () => ({})
  },
  modelValue: {
    type: Ne([Date, Array, String, Number]),
    default: ""
  },
  rangeSeparator: {
    type: String,
    default: "-"
  },
  startPlaceholder: String,
  endPlaceholder: String,
  defaultValue: {
    type: Ne([Date, Array])
  },
  defaultTime: {
    type: Ne([Date, Array])
  },
  isRange: {
    type: Boolean,
    default: !1
  },
  ...Vp,
  disabledDate: {
    type: Function
  },
  cellClassName: {
    type: Function
  },
  shortcuts: {
    type: Array,
    default: () => []
  },
  arrowControl: {
    type: Boolean,
    default: !1
  },
  label: {
    type: String,
    default: void 0
  },
  tabindex: {
    type: Ne([String, Number]),
    default: 0
  },
  validateEvent: {
    type: Boolean,
    default: !0
  },
  unlinkPanels: Boolean
}), BT = ["id", "name", "placeholder", "value", "disabled", "readonly"], FT = ["id", "name", "placeholder", "value", "disabled", "readonly"], HT = Ae({
  name: "Picker"
}), VT = /* @__PURE__ */ Ae({
  ...HT,
  props: Kp,
  emits: [
    "update:modelValue",
    "change",
    "focus",
    "blur",
    "calendar-change",
    "panel-change",
    "visible-change",
    "keydown"
  ],
  setup(e, { expose: t, emit: n }) {
    const r = e, { lang: i } = zr(), c = Ke("date"), f = Ke("input"), u = Ke("range"), { form: h, formItem: g } = $r(), w = Ye("ElPopperOptions", {}), _ = ce(), k = ce(), T = ce(!1), x = ce(!1), S = ce(null);
    let M = !1, O = !1;
    be(T, (P) => {
      P ? Xe(() => {
        P && (S.value = r.modelValue);
      }) : (Ie.value = null, Xe(() => {
        I(r.modelValue);
      }));
    });
    const I = (P, J) => {
      (J || !Nd(P, S.value)) && (n("change", P), r.validateEvent && (g == null || g.validate("change").catch((ke) => Pt(ke))));
    }, K = (P) => {
      if (!Nd(r.modelValue, P)) {
        let J;
        bt(P) ? J = P.map((ke) => Ld(ke, r.valueFormat, i.value)) : P && (J = Ld(P, r.valueFormat, i.value)), n("update:modelValue", P && J, i.value);
      }
    }, L = (P) => {
      n("keydown", P);
    }, q = V(() => {
      if (k.value) {
        const P = Fe.value ? k.value : k.value.$el;
        return Array.from(P.querySelectorAll("input"));
      }
      return [];
    }), N = (P, J, ke) => {
      const Ue = q.value;
      Ue.length && (!ke || ke === "min" ? (Ue[0].setSelectionRange(P, J), Ue[0].focus()) : ke === "max" && (Ue[1].setSelectionRange(P, J), Ue[1].focus()));
    }, H = () => {
      A(!0, !0), Xe(() => {
        O = !1;
      });
    }, F = (P = "", J = !1) => {
      J || (O = !0), T.value = J;
      let ke;
      bt(P) ? ke = P.map((Ue) => Ue.toDate()) : ke = P && P.toDate(), Ie.value = null, K(ke);
    }, le = () => {
      x.value = !0;
    }, re = () => {
      n("visible-change", !0);
    }, fe = (P) => {
      (P == null ? void 0 : P.key) === wt.esc && A(!0, !0);
    }, _e = () => {
      x.value = !1, T.value = !1, O = !1, n("visible-change", !1);
    }, ne = () => {
      T.value = !0;
    }, Q = () => {
      T.value = !1;
    }, A = (P = !0, J = !1) => {
      O = J;
      const [ke, Ue] = m(q);
      let ut = ke;
      !P && Fe.value && (ut = Ue), ut && ut.focus();
    }, G = (P) => {
      r.readonly || D.value || T.value || O || (T.value = !0, n("focus", P));
    };
    let z;
    const U = (P) => {
      const J = async () => {
        setTimeout(() => {
          var ke;
          z === J && (!((ke = _.value) != null && ke.isFocusInsideContent() && !M) && q.value.filter((Ue) => Ue.contains(document.activeElement)).length === 0 && (xt(), T.value = !1, n("blur", P), r.validateEvent && (g == null || g.validate("blur").catch((Ue) => Pt(Ue)))), M = !1);
        }, 0);
      };
      z = J, J();
    }, D = V(() => r.disabled || (h == null ? void 0 : h.disabled)), X = V(() => {
      let P;
      if (Le.value ? me.value.getDefaultValue && (P = me.value.getDefaultValue()) : bt(r.modelValue) ? P = r.modelValue.map((J) => Rd(J, r.valueFormat, i.value)) : P = Rd(r.modelValue, r.valueFormat, i.value), me.value.getRangeAvailableTime) {
        const J = me.value.getRangeAvailableTime(P);
        ii(J, P) || (P = J, K(bt(P) ? P.map((ke) => ke.toDate()) : P.toDate()));
      }
      return bt(P) && P.some((J) => !J) && (P = []), P;
    }), oe = V(() => {
      if (!me.value.panelReady)
        return "";
      const P = ht(X.value);
      return bt(Ie.value) ? [
        Ie.value[0] || P && P[0] || "",
        Ie.value[1] || P && P[1] || ""
      ] : Ie.value !== null ? Ie.value : !ye.value && Le.value || !T.value && Le.value ? "" : P ? $e.value ? P.join(", ") : P : "";
    }), ue = V(() => r.type.includes("time")), ye = V(() => r.type.startsWith("time")), $e = V(() => r.type === "dates"), ee = V(() => r.prefixIcon || (ue.value ? Pk : rk)), He = ce(!1), Ve = (P) => {
      r.readonly || D.value || He.value && (P.stopPropagation(), H(), K(null), I(null, !0), He.value = !1, T.value = !1, me.value.handleClear && me.value.handleClear());
    }, Le = V(() => {
      const { modelValue: P } = r;
      return !P || bt(P) && !P.filter(Boolean).length;
    }), se = async (P) => {
      var J;
      r.readonly || D.value || (((J = P.target) == null ? void 0 : J.tagName) !== "INPUT" || q.value.includes(document.activeElement)) && (T.value = !0);
    }, pe = () => {
      r.readonly || D.value || !Le.value && r.clearable && (He.value = !0);
    }, Te = () => {
      He.value = !1;
    }, Oe = (P) => {
      var J;
      r.readonly || D.value || (((J = P.touches[0].target) == null ? void 0 : J.tagName) !== "INPUT" || q.value.includes(document.activeElement)) && (T.value = !0);
    }, Fe = V(() => r.type.includes("range")), et = Mr(), nt = V(() => {
      var P, J;
      return (J = (P = m(_)) == null ? void 0 : P.popperRef) == null ? void 0 : J.contentRef;
    }), je = V(() => {
      var P;
      return m(Fe) ? m(k) : (P = m(k)) == null ? void 0 : P.$el;
    });
    Qf(je, (P) => {
      const J = m(nt), ke = m(je);
      J && (P.target === J || P.composedPath().includes(J)) || P.target === ke || P.composedPath().includes(ke) || (T.value = !1);
    });
    const Ie = ce(null), xt = () => {
      if (Ie.value) {
        const P = Ge(oe.value);
        P && st(P) && (K(bt(P) ? P.map((J) => J.toDate()) : P.toDate()), Ie.value = null);
      }
      Ie.value === "" && (K(null), I(null), Ie.value = null);
    }, Ge = (P) => P ? me.value.parseUserInput(P) : null, ht = (P) => P ? me.value.formatToString(P) : null, st = (P) => me.value.isValidValue(P), $ = async (P) => {
      if (r.readonly || D.value)
        return;
      const { code: J } = P;
      if (L(P), J === wt.esc) {
        T.value === !0 && (T.value = !1, P.preventDefault(), P.stopPropagation());
        return;
      }
      if (J === wt.down && (me.value.handleFocusPicker && (P.preventDefault(), P.stopPropagation()), T.value === !1 && (T.value = !0, await Xe()), me.value.handleFocusPicker)) {
        me.value.handleFocusPicker();
        return;
      }
      if (J === wt.tab) {
        M = !0;
        return;
      }
      if (J === wt.enter || J === wt.numpadEnter) {
        (Ie.value === null || Ie.value === "" || st(Ge(oe.value))) && (xt(), T.value = !1), P.stopPropagation();
        return;
      }
      if (Ie.value) {
        P.stopPropagation();
        return;
      }
      me.value.handleKeydownInput && me.value.handleKeydownInput(P);
    }, ve = (P) => {
      Ie.value = P, T.value || (T.value = !0);
    }, Ce = (P) => {
      const J = P.target;
      Ie.value ? Ie.value = [J.value, Ie.value[1]] : Ie.value = [J.value, null];
    }, Re = (P) => {
      const J = P.target;
      Ie.value ? Ie.value = [Ie.value[0], J.value] : Ie.value = [null, J.value];
    }, qe = () => {
      var P;
      const J = Ie.value, ke = Ge(J && J[0]), Ue = m(X);
      if (ke && ke.isValid()) {
        Ie.value = [
          ht(ke),
          ((P = oe.value) == null ? void 0 : P[1]) || null
        ];
        const ut = [ke, Ue && (Ue[1] || null)];
        st(ut) && (K(ut), Ie.value = null);
      }
    }, ze = () => {
      var P;
      const J = m(Ie), ke = Ge(J && J[1]), Ue = m(X);
      if (ke && ke.isValid()) {
        Ie.value = [
          ((P = m(oe)) == null ? void 0 : P[0]) || null,
          ht(ke)
        ];
        const ut = [Ue && Ue[0], ke];
        st(ut) && (K(ut), Ie.value = null);
      }
    }, me = ce({}), lt = (P) => {
      me.value[P[0]] = P[1], me.value.panelReady = !0;
    }, B = (P) => {
      n("calendar-change", P);
    }, ae = (P, J, ke) => {
      n("panel-change", P, J, ke);
    };
    return Ot("EP_PICKER_BASE", {
      props: r
    }), t({
      focus: A,
      handleFocusInput: G,
      handleBlurInput: U,
      handleOpen: ne,
      handleClose: Q,
      onPick: F
    }), (P, J) => (Y(), Se(m(zp), bn({
      ref_key: "refPopper",
      ref: _,
      visible: T.value,
      effect: "light",
      pure: "",
      trigger: "click"
    }, P.$attrs, {
      role: "dialog",
      teleported: "",
      transition: `${m(c).namespace.value}-zoom-in-top`,
      "popper-class": [`${m(c).namespace.value}-picker__popper`, P.popperClass],
      "popper-options": m(w),
      "fallback-placements": ["bottom", "top", "right", "left"],
      "gpu-acceleration": !1,
      "stop-popper-mouse-event": !1,
      "hide-after": 0,
      persistent: "",
      onBeforeShow: le,
      onShow: re,
      onHide: _e
    }), {
      default: Pe(() => [
        m(Fe) ? (Y(), he("div", {
          key: 1,
          ref_key: "inputRef",
          ref: k,
          class: te([
            m(c).b("editor"),
            m(c).bm("editor", P.type),
            m(f).e("wrapper"),
            m(c).is("disabled", m(D)),
            m(c).is("active", T.value),
            m(u).b("editor"),
            m(et) ? m(u).bm("editor", m(et)) : "",
            P.$attrs.class
          ]),
          style: _t(P.$attrs.style),
          onClick: G,
          onMouseenter: pe,
          onMouseleave: Te,
          onTouchstart: Oe,
          onKeydown: $
        }, [
          m(ee) ? (Y(), Se(m(Mt), {
            key: 0,
            class: te([m(f).e("icon"), m(u).e("icon")]),
            onMousedown: gt(se, ["prevent"]),
            onTouchstart: Oe
          }, {
            default: Pe(() => [
              (Y(), Se($t(m(ee))))
            ]),
            _: 1
          }, 8, ["class", "onMousedown"])) : Ee("v-if", !0),
          xe("input", {
            id: P.id && P.id[0],
            autocomplete: "off",
            name: P.name && P.name[0],
            placeholder: P.startPlaceholder,
            value: m(oe) && m(oe)[0],
            disabled: m(D),
            readonly: !P.editable || P.readonly,
            class: te(m(u).b("input")),
            onMousedown: se,
            onInput: Ce,
            onChange: qe,
            onFocus: G,
            onBlur: U
          }, null, 42, BT),
          Ze(P.$slots, "range-separator", {}, () => [
            xe("span", {
              class: te(m(u).b("separator"))
            }, tt(P.rangeSeparator), 3)
          ]),
          xe("input", {
            id: P.id && P.id[1],
            autocomplete: "off",
            name: P.name && P.name[1],
            placeholder: P.endPlaceholder,
            value: m(oe) && m(oe)[1],
            disabled: m(D),
            readonly: !P.editable || P.readonly,
            class: te(m(u).b("input")),
            onMousedown: se,
            onFocus: G,
            onBlur: U,
            onInput: Re,
            onChange: ze
          }, null, 42, FT),
          P.clearIcon ? (Y(), Se(m(Mt), {
            key: 1,
            class: te([
              m(f).e("icon"),
              m(u).e("close-icon"),
              {
                [m(u).e("close-icon--hidden")]: !He.value
              }
            ]),
            onClick: Ve
          }, {
            default: Pe(() => [
              (Y(), Se($t(P.clearIcon)))
            ]),
            _: 1
          }, 8, ["class"])) : Ee("v-if", !0)
        ], 38)) : (Y(), Se(m(Cp), {
          key: 0,
          id: P.id,
          ref_key: "inputRef",
          ref: k,
          "container-role": "combobox",
          "model-value": m(oe),
          name: P.name,
          size: m(et),
          disabled: m(D),
          placeholder: P.placeholder,
          class: te([m(c).b("editor"), m(c).bm("editor", P.type), P.$attrs.class]),
          style: _t(P.$attrs.style),
          readonly: !P.editable || P.readonly || m($e) || P.type === "week",
          label: P.label,
          tabindex: P.tabindex,
          "validate-event": !1,
          onInput: ve,
          onFocus: G,
          onBlur: U,
          onKeydown: $,
          onChange: xt,
          onMousedown: se,
          onMouseenter: pe,
          onMouseleave: Te,
          onTouchstart: Oe,
          onClick: J[0] || (J[0] = gt(() => {
          }, ["stop"]))
        }, {
          prefix: Pe(() => [
            m(ee) ? (Y(), Se(m(Mt), {
              key: 0,
              class: te(m(f).e("icon")),
              onMousedown: gt(se, ["prevent"]),
              onTouchstart: Oe
            }, {
              default: Pe(() => [
                (Y(), Se($t(m(ee))))
              ]),
              _: 1
            }, 8, ["class", "onMousedown"])) : Ee("v-if", !0)
          ]),
          suffix: Pe(() => [
            He.value && P.clearIcon ? (Y(), Se(m(Mt), {
              key: 0,
              class: te(`${m(f).e("icon")} clear-icon`),
              onClick: gt(Ve, ["stop"])
            }, {
              default: Pe(() => [
                (Y(), Se($t(P.clearIcon)))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : Ee("v-if", !0)
          ]),
          _: 1
        }, 8, ["id", "model-value", "name", "size", "disabled", "placeholder", "class", "style", "readonly", "label", "tabindex", "onKeydown"]))
      ]),
      content: Pe(() => [
        Ze(P.$slots, "default", {
          visible: T.value,
          actualVisible: x.value,
          parsedValue: m(X),
          format: P.format,
          unlinkPanels: P.unlinkPanels,
          type: P.type,
          defaultValue: P.defaultValue,
          onPick: F,
          onSelectRange: N,
          onSetPickerOption: lt,
          onCalendarChange: B,
          onPanelChange: ae,
          onKeydown: fe,
          onMousedown: J[1] || (J[1] = gt(() => {
          }, ["stop"]))
        })
      ]),
      _: 3
    }, 16, ["visible", "transition", "popper-class", "popper-options"]));
  }
});
var WT = /* @__PURE__ */ Je(VT, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/time-picker/src/common/picker.vue"]]);
const KT = mt({
  ...Wp,
  datetimeRole: String,
  parsedValue: {
    type: Ne(Object)
  }
}), qp = ({
  getAvailableHours: e,
  getAvailableMinutes: t,
  getAvailableSeconds: n
}) => {
  const r = (c, f, u, h) => {
    const g = {
      hour: e,
      minute: t,
      second: n
    };
    let w = c;
    return ["hour", "minute", "second"].forEach((_) => {
      if (g[_]) {
        let k;
        const T = g[_];
        switch (_) {
          case "minute": {
            k = T(w.hour(), f, h);
            break;
          }
          case "second": {
            k = T(w.hour(), w.minute(), f, h);
            break;
          }
          default: {
            k = T(f, h);
            break;
          }
        }
        if (k != null && k.length && !k.includes(w[_]())) {
          const x = u ? 0 : k.length - 1;
          w = w[_](k[x]);
        }
      }
    }), w;
  }, i = {};
  return {
    timePickerOptions: i,
    getAvailableTime: r,
    onSetOption: ([c, f]) => {
      i[c] = f;
    }
  };
}, Ss = (e) => {
  const t = (r, i) => r || i, n = (r) => r !== !0;
  return e.map(t).filter(n);
}, Up = (e, t, n) => ({
  getHoursList: (r, i) => _s(24, e && (() => e == null ? void 0 : e(r, i))),
  getMinutesList: (r, i, c) => _s(60, t && (() => t == null ? void 0 : t(r, i, c))),
  getSecondsList: (r, i, c, f) => _s(60, n && (() => n == null ? void 0 : n(r, i, c, f)))
}), Yp = (e, t, n) => {
  const { getHoursList: r, getMinutesList: i, getSecondsList: c } = Up(e, t, n);
  return {
    getAvailableHours: (f, u) => Ss(r(f, u)),
    getAvailableMinutes: (f, u, h) => Ss(i(f, u, h)),
    getAvailableSeconds: (f, u, h, g) => Ss(c(f, u, h, g))
  };
}, Xp = (e) => {
  const t = ce(e.parsedValue);
  return be(() => e.visible, (n) => {
    n || (t.value = e.parsedValue);
  }), t;
}, Un = /* @__PURE__ */ new Map();
let Bd;
Lt && (document.addEventListener("mousedown", (e) => Bd = e), document.addEventListener("mouseup", (e) => {
  for (const t of Un.values())
    for (const { documentHandler: n } of t)
      n(e, Bd);
}));
function Fd(e, t) {
  let n = [];
  return Array.isArray(t.arg) ? n = t.arg : ra(t.arg) && n.push(t.arg), function(r, i) {
    const c = t.instance.popperRef, f = r.target, u = i == null ? void 0 : i.target, h = !t || !t.instance, g = !f || !u, w = e.contains(f) || e.contains(u), _ = e === f, k = n.length && n.some((x) => x == null ? void 0 : x.contains(f)) || n.length && n.includes(u), T = c && (c.contains(f) || c.contains(u));
    h || g || w || _ || k || T || t.value(r, i);
  };
}
const qT = {
  beforeMount(e, t) {
    Un.has(e) || Un.set(e, []), Un.get(e).push({
      documentHandler: Fd(e, t),
      bindingFn: t.value
    });
  },
  updated(e, t) {
    Un.has(e) || Un.set(e, []);
    const n = Un.get(e), r = n.findIndex((c) => c.bindingFn === t.oldValue), i = {
      documentHandler: Fd(e, t),
      bindingFn: t.value
    };
    r >= 0 ? n.splice(r, 1, i) : n.push(i);
  },
  unmounted(e) {
    Un.delete(e);
  }
}, UT = 100, YT = 600, Hd = {
  beforeMount(e, t) {
    const n = t.value, { interval: r = UT, delay: i = YT } = qt(n) ? {} : n;
    let c, f;
    const u = () => qt(n) ? n() : n.handler(), h = () => {
      f && (clearTimeout(f), f = void 0), c && (clearInterval(c), c = void 0);
    };
    e.addEventListener("mousedown", (g) => {
      g.button === 0 && (h(), u(), document.addEventListener("mouseup", () => h(), {
        once: !0
      }), f = setTimeout(() => {
        c = setInterval(() => {
          u();
        }, r);
      }, i));
    });
  }
}, XT = mt({
  role: {
    type: String,
    required: !0
  },
  spinnerDate: {
    type: Ne(Object),
    required: !0
  },
  showSeconds: {
    type: Boolean,
    default: !0
  },
  arrowControl: Boolean,
  amPmMode: {
    type: Ne(String),
    default: ""
  },
  ...Vp
}), GT = ["onClick"], ZT = ["onMouseenter"], QT = /* @__PURE__ */ Ae({
  __name: "basic-time-spinner",
  props: XT,
  emits: ["change", "select-range", "set-option"],
  setup(e, { emit: t }) {
    const n = e, r = Ke("time"), { getHoursList: i, getMinutesList: c, getSecondsList: f } = Up(n.disabledHours, n.disabledMinutes, n.disabledSeconds);
    let u = !1;
    const h = ce(), g = ce(), w = ce(), _ = ce(), k = {
      hours: g,
      minutes: w,
      seconds: _
    }, T = V(() => n.showSeconds ? $d : $d.slice(0, 2)), x = V(() => {
      const { spinnerDate: D } = n, X = D.hour(), oe = D.minute(), ue = D.second();
      return { hours: X, minutes: oe, seconds: ue };
    }), S = V(() => {
      const { hours: D, minutes: X } = m(x);
      return {
        hours: i(n.role),
        minutes: c(D, n.role),
        seconds: f(D, X, n.role)
      };
    }), M = V(() => {
      const { hours: D, minutes: X, seconds: oe } = m(x);
      return {
        hours: xs(D, 23),
        minutes: xs(X, 59),
        seconds: xs(oe, 59)
      };
    }), O = Bs((D) => {
      u = !1, L(D);
    }, 200), I = (D) => {
      if (!n.amPmMode)
        return "";
      const X = n.amPmMode === "A";
      let oe = D < 12 ? " am" : " pm";
      return X && (oe = oe.toUpperCase()), oe;
    }, K = (D) => {
      let X;
      switch (D) {
        case "hours":
          X = [0, 2];
          break;
        case "minutes":
          X = [3, 5];
          break;
        case "seconds":
          X = [6, 8];
          break;
      }
      const [oe, ue] = X;
      t("select-range", oe, ue), h.value = D;
    }, L = (D) => {
      H(D, m(x)[D]);
    }, q = () => {
      L("hours"), L("minutes"), L("seconds");
    }, N = (D) => D.querySelector(`.${r.namespace.value}-scrollbar__wrap`), H = (D, X) => {
      if (n.arrowControl)
        return;
      const oe = m(k[D]);
      oe && oe.$el && (N(oe.$el).scrollTop = Math.max(0, X * F(D)));
    }, F = (D) => {
      const X = m(k[D]);
      return (X == null ? void 0 : X.$el.querySelector("li").offsetHeight) || 0;
    }, le = () => {
      fe(1);
    }, re = () => {
      fe(-1);
    }, fe = (D) => {
      h.value || K("hours");
      const X = h.value, oe = m(x)[X], ue = h.value === "hours" ? 24 : 60, ye = _e(X, oe, D, ue);
      ne(X, ye), H(X, ye), Xe(() => K(X));
    }, _e = (D, X, oe, ue) => {
      let ye = (X + oe + ue) % ue;
      const $e = m(S)[D];
      for (; $e[ye] && ye !== X; )
        ye = (ye + oe + ue) % ue;
      return ye;
    }, ne = (D, X) => {
      if (m(S)[D][X])
        return;
      const { hours: oe, minutes: ue, seconds: ye } = m(x);
      let $e;
      switch (D) {
        case "hours":
          $e = n.spinnerDate.hour(X).minute(ue).second(ye);
          break;
        case "minutes":
          $e = n.spinnerDate.hour(oe).minute(X).second(ye);
          break;
        case "seconds":
          $e = n.spinnerDate.hour(oe).minute(ue).second(X);
          break;
      }
      t("change", $e);
    }, Q = (D, { value: X, disabled: oe }) => {
      oe || (ne(D, X), K(D), H(D, X));
    }, A = (D) => {
      u = !0, O(D);
      const X = Math.min(Math.round((N(m(k[D]).$el).scrollTop - (G(D) * 0.5 - 10) / F(D) + 3) / F(D)), D === "hours" ? 23 : 59);
      ne(D, X);
    }, G = (D) => m(k[D]).$el.offsetHeight, z = () => {
      const D = (X) => {
        const oe = m(k[X]);
        oe && oe.$el && (N(oe.$el).onscroll = () => {
          A(X);
        });
      };
      D("hours"), D("minutes"), D("seconds");
    };
    jt(() => {
      Xe(() => {
        !n.arrowControl && z(), q(), n.role === "start" && K("hours");
      });
    });
    const U = (D, X) => {
      k[X].value = D;
    };
    return t("set-option", [`${n.role}_scrollDown`, fe]), t("set-option", [`${n.role}_emitSelectRange`, K]), be(() => n.spinnerDate, () => {
      u || q();
    }), (D, X) => (Y(), he("div", {
      class: te([m(r).b("spinner"), { "has-seconds": D.showSeconds }])
    }, [
      D.arrowControl ? Ee("v-if", !0) : (Y(!0), he(yt, { key: 0 }, Yn(m(T), (oe) => (Y(), Se(m(Tp), {
        key: oe,
        ref_for: !0,
        ref: (ue) => U(ue, oe),
        class: te(m(r).be("spinner", "wrapper")),
        "wrap-style": "max-height: inherit;",
        "view-class": m(r).be("spinner", "list"),
        noresize: "",
        tag: "ul",
        onMouseenter: (ue) => K(oe),
        onMousemove: (ue) => L(oe)
      }, {
        default: Pe(() => [
          (Y(!0), he(yt, null, Yn(m(S)[oe], (ue, ye) => (Y(), he("li", {
            key: ye,
            class: te([
              m(r).be("spinner", "item"),
              m(r).is("active", ye === m(x)[oe]),
              m(r).is("disabled", ue)
            ]),
            onClick: ($e) => Q(oe, { value: ye, disabled: ue })
          }, [
            oe === "hours" ? (Y(), he(yt, { key: 0 }, [
              Ur(tt(("0" + (D.amPmMode ? ye % 12 || 12 : ye)).slice(-2)) + tt(I(ye)), 1)
            ], 64)) : (Y(), he(yt, { key: 1 }, [
              Ur(tt(("0" + ye).slice(-2)), 1)
            ], 64))
          ], 10, GT))), 128))
        ]),
        _: 2
      }, 1032, ["class", "view-class", "onMouseenter", "onMousemove"]))), 128)),
      D.arrowControl ? (Y(!0), he(yt, { key: 1 }, Yn(m(T), (oe) => (Y(), he("div", {
        key: oe,
        class: te([m(r).be("spinner", "wrapper"), m(r).is("arrow")]),
        onMouseenter: (ue) => K(oe)
      }, [
        Et((Y(), Se(m(Mt), {
          class: te(["arrow-up", m(r).be("spinner", "arrow")])
        }, {
          default: Pe(() => [
            pt(m(Z2))
          ]),
          _: 1
        }, 8, ["class"])), [
          [m(Hd), re]
        ]),
        Et((Y(), Se(m(Mt), {
          class: te(["arrow-down", m(r).be("spinner", "arrow")])
        }, {
          default: Pe(() => [
            pt(m(rp))
          ]),
          _: 1
        }, 8, ["class"])), [
          [m(Hd), le]
        ]),
        xe("ul", {
          class: te(m(r).be("spinner", "list"))
        }, [
          (Y(!0), he(yt, null, Yn(m(M)[oe], (ue, ye) => (Y(), he("li", {
            key: ye,
            class: te([
              m(r).be("spinner", "item"),
              m(r).is("active", ue === m(x)[oe]),
              m(r).is("disabled", m(S)[oe][ue])
            ])
          }, [
            typeof ue == "number" ? (Y(), he(yt, { key: 0 }, [
              oe === "hours" ? (Y(), he(yt, { key: 0 }, [
                Ur(tt(("0" + (D.amPmMode ? ue % 12 || 12 : ue)).slice(-2)) + tt(I(ue)), 1)
              ], 64)) : (Y(), he(yt, { key: 1 }, [
                Ur(tt(("0" + ue).slice(-2)), 1)
              ], 64))
            ], 64)) : Ee("v-if", !0)
          ], 2))), 128))
        ], 2)
      ], 42, ZT))), 128)) : Ee("v-if", !0)
    ], 2));
  }
});
var Us = /* @__PURE__ */ Je(QT, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/time-picker/src/time-picker-com/basic-time-spinner.vue"]]);
const JT = /* @__PURE__ */ Ae({
  __name: "panel-time-pick",
  props: KT,
  emits: ["pick", "select-range", "set-picker-option"],
  setup(e, { emit: t }) {
    const n = e, r = Ye("EP_PICKER_BASE"), {
      arrowControl: i,
      disabledHours: c,
      disabledMinutes: f,
      disabledSeconds: u,
      defaultValue: h
    } = r.props, { getAvailableHours: g, getAvailableMinutes: w, getAvailableSeconds: _ } = Yp(c, f, u), k = Ke("time"), { t: T, lang: x } = zr(), S = ce([0, 2]), M = Xp(n), O = V(() => na(n.actualVisible) ? `${k.namespace.value}-zoom-in-top` : ""), I = V(() => n.format.includes("ss")), K = V(() => n.format.includes("A") ? "A" : n.format.includes("a") ? "a" : ""), L = (U) => {
      const D = Zt(U).locale(x.value), X = Q(D);
      return D.isSame(X);
    }, q = () => {
      t("pick", M.value, !1);
    }, N = (U = !1, D = !1) => {
      D || t("pick", n.parsedValue, U);
    }, H = (U) => {
      if (!n.visible)
        return;
      const D = Q(U).millisecond(0);
      t("pick", D, !0);
    }, F = (U, D) => {
      t("select-range", U, D), S.value = [U, D];
    }, le = (U) => {
      const D = [0, 3].concat(I.value ? [6] : []), X = ["hours", "minutes"].concat(I.value ? ["seconds"] : []), oe = (D.indexOf(S.value[0]) + U + D.length) % D.length;
      fe.start_emitSelectRange(X[oe]);
    }, re = (U) => {
      const D = U.code, { left: X, right: oe, up: ue, down: ye } = wt;
      if ([X, oe].includes(D)) {
        le(D === X ? -1 : 1), U.preventDefault();
        return;
      }
      if ([ue, ye].includes(D)) {
        const $e = D === ue ? -1 : 1;
        fe.start_scrollDown($e), U.preventDefault();
        return;
      }
    }, { timePickerOptions: fe, onSetOption: _e, getAvailableTime: ne } = qp({
      getAvailableHours: g,
      getAvailableMinutes: w,
      getAvailableSeconds: _
    }), Q = (U) => ne(U, n.datetimeRole || "", !0), A = (U) => U ? Zt(U, n.format).locale(x.value) : null, G = (U) => U ? U.format(n.format) : null, z = () => Zt(h).locale(x.value);
    return t("set-picker-option", ["isValidValue", L]), t("set-picker-option", ["formatToString", G]), t("set-picker-option", ["parseUserInput", A]), t("set-picker-option", ["handleKeydownInput", re]), t("set-picker-option", ["getRangeAvailableTime", Q]), t("set-picker-option", ["getDefaultValue", z]), (U, D) => (Y(), Se(ao, { name: m(O) }, {
      default: Pe(() => [
        U.actualVisible || U.visible ? (Y(), he("div", {
          key: 0,
          class: te(m(k).b("panel"))
        }, [
          xe("div", {
            class: te([m(k).be("panel", "content"), { "has-seconds": m(I) }])
          }, [
            pt(Us, {
              ref: "spinner",
              role: U.datetimeRole || "start",
              "arrow-control": m(i),
              "show-seconds": m(I),
              "am-pm-mode": m(K),
              "spinner-date": U.parsedValue,
              "disabled-hours": m(c),
              "disabled-minutes": m(f),
              "disabled-seconds": m(u),
              onChange: H,
              onSetOption: m(_e),
              onSelectRange: F
            }, null, 8, ["role", "arrow-control", "show-seconds", "am-pm-mode", "spinner-date", "disabled-hours", "disabled-minutes", "disabled-seconds", "onSetOption"])
          ], 2),
          xe("div", {
            class: te(m(k).be("panel", "footer"))
          }, [
            xe("button", {
              type: "button",
              class: te([m(k).be("panel", "btn"), "cancel"]),
              onClick: q
            }, tt(m(T)("el.datepicker.cancel")), 3),
            xe("button", {
              type: "button",
              class: te([m(k).be("panel", "btn"), "confirm"]),
              onClick: D[0] || (D[0] = (X) => N())
            }, tt(m(T)("el.datepicker.confirm")), 3)
          ], 2)
        ], 2)) : Ee("v-if", !0)
      ]),
      _: 1
    }, 8, ["name"]));
  }
});
var eM = /* @__PURE__ */ Je(JT, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/time-picker/src/time-picker-com/panel-time-pick.vue"]]);
const tM = mt({
  ...Wp,
  parsedValue: {
    type: Ne(Array)
  }
}), nM = ["disabled"], rM = /* @__PURE__ */ Ae({
  __name: "panel-time-range",
  props: tM,
  emits: ["pick", "select-range", "set-picker-option"],
  setup(e, { emit: t }) {
    const n = e, r = (se, pe) => {
      const Te = [];
      for (let Oe = se; Oe <= pe; Oe++)
        Te.push(Oe);
      return Te;
    }, { t: i, lang: c } = zr(), f = Ke("time"), u = Ke("picker"), h = Ye("EP_PICKER_BASE"), {
      arrowControl: g,
      disabledHours: w,
      disabledMinutes: _,
      disabledSeconds: k,
      defaultValue: T
    } = h.props, x = V(() => n.parsedValue[0]), S = V(() => n.parsedValue[1]), M = Xp(n), O = () => {
      t("pick", M.value, !1);
    }, I = V(() => n.format.includes("ss")), K = V(() => n.format.includes("A") ? "A" : n.format.includes("a") ? "a" : ""), L = (se = !1) => {
      t("pick", [x.value, S.value], se);
    }, q = (se) => {
      F(se.millisecond(0), S.value);
    }, N = (se) => {
      F(x.value, se.millisecond(0));
    }, H = (se) => {
      const pe = se.map((Oe) => Zt(Oe).locale(c.value)), Te = D(pe);
      return pe[0].isSame(Te[0]) && pe[1].isSame(Te[1]);
    }, F = (se, pe) => {
      t("pick", [se, pe], !0);
    }, le = V(() => x.value > S.value), re = ce([0, 2]), fe = (se, pe) => {
      t("select-range", se, pe, "min"), re.value = [se, pe];
    }, _e = V(() => I.value ? 11 : 8), ne = (se, pe) => {
      t("select-range", se, pe, "max");
      const Te = m(_e);
      re.value = [se + Te, pe + Te];
    }, Q = (se) => {
      const pe = I.value ? [0, 3, 6, 11, 14, 17] : [0, 3, 8, 11], Te = ["hours", "minutes"].concat(I.value ? ["seconds"] : []), Oe = (pe.indexOf(re.value[0]) + se + pe.length) % pe.length, Fe = pe.length / 2;
      Oe < Fe ? ye.start_emitSelectRange(Te[Oe]) : ye.end_emitSelectRange(Te[Oe - Fe]);
    }, A = (se) => {
      const pe = se.code, { left: Te, right: Oe, up: Fe, down: et } = wt;
      if ([Te, Oe].includes(pe)) {
        Q(pe === Te ? -1 : 1), se.preventDefault();
        return;
      }
      if ([Fe, et].includes(pe)) {
        const nt = pe === Fe ? -1 : 1, je = re.value[0] < _e.value ? "start" : "end";
        ye[`${je}_scrollDown`](nt), se.preventDefault();
        return;
      }
    }, G = (se, pe) => {
      const Te = w ? w(se) : [], Oe = se === "start", Fe = (pe || (Oe ? S.value : x.value)).hour(), et = Oe ? r(Fe + 1, 23) : r(0, Fe - 1);
      return fs(Te, et);
    }, z = (se, pe, Te) => {
      const Oe = _ ? _(se, pe) : [], Fe = pe === "start", et = Te || (Fe ? S.value : x.value), nt = et.hour();
      if (se !== nt)
        return Oe;
      const je = et.minute(), Ie = Fe ? r(je + 1, 59) : r(0, je - 1);
      return fs(Oe, Ie);
    }, U = (se, pe, Te, Oe) => {
      const Fe = k ? k(se, pe, Te) : [], et = Te === "start", nt = Oe || (et ? S.value : x.value), je = nt.hour(), Ie = nt.minute();
      if (se !== je || pe !== Ie)
        return Fe;
      const xt = nt.second(), Ge = et ? r(xt + 1, 59) : r(0, xt - 1);
      return fs(Fe, Ge);
    }, D = ([se, pe]) => [
      $e(se, "start", !0, pe),
      $e(pe, "end", !1, se)
    ], { getAvailableHours: X, getAvailableMinutes: oe, getAvailableSeconds: ue } = Yp(G, z, U), {
      timePickerOptions: ye,
      getAvailableTime: $e,
      onSetOption: ee
    } = qp({
      getAvailableHours: X,
      getAvailableMinutes: oe,
      getAvailableSeconds: ue
    }), He = (se) => se ? bt(se) ? se.map((pe) => Zt(pe, n.format).locale(c.value)) : Zt(se, n.format).locale(c.value) : null, Ve = (se) => se ? bt(se) ? se.map((pe) => pe.format(n.format)) : se.format(n.format) : null, Le = () => {
      if (bt(T))
        return T.map((pe) => Zt(pe).locale(c.value));
      const se = Zt(T).locale(c.value);
      return [se, se.add(60, "m")];
    };
    return t("set-picker-option", ["formatToString", Ve]), t("set-picker-option", ["parseUserInput", He]), t("set-picker-option", ["isValidValue", H]), t("set-picker-option", ["handleKeydownInput", A]), t("set-picker-option", ["getDefaultValue", Le]), t("set-picker-option", ["getRangeAvailableTime", D]), (se, pe) => se.actualVisible ? (Y(), he("div", {
      key: 0,
      class: te([m(f).b("range-picker"), m(u).b("panel")])
    }, [
      xe("div", {
        class: te(m(f).be("range-picker", "content"))
      }, [
        xe("div", {
          class: te(m(f).be("range-picker", "cell"))
        }, [
          xe("div", {
            class: te(m(f).be("range-picker", "header"))
          }, tt(m(i)("el.datepicker.startTime")), 3),
          xe("div", {
            class: te([
              m(f).be("range-picker", "body"),
              m(f).be("panel", "content"),
              m(f).is("arrow", m(g)),
              { "has-seconds": m(I) }
            ])
          }, [
            pt(Us, {
              ref: "minSpinner",
              role: "start",
              "show-seconds": m(I),
              "am-pm-mode": m(K),
              "arrow-control": m(g),
              "spinner-date": m(x),
              "disabled-hours": G,
              "disabled-minutes": z,
              "disabled-seconds": U,
              onChange: q,
              onSetOption: m(ee),
              onSelectRange: fe
            }, null, 8, ["show-seconds", "am-pm-mode", "arrow-control", "spinner-date", "onSetOption"])
          ], 2)
        ], 2),
        xe("div", {
          class: te(m(f).be("range-picker", "cell"))
        }, [
          xe("div", {
            class: te(m(f).be("range-picker", "header"))
          }, tt(m(i)("el.datepicker.endTime")), 3),
          xe("div", {
            class: te([
              m(f).be("range-picker", "body"),
              m(f).be("panel", "content"),
              m(f).is("arrow", m(g)),
              { "has-seconds": m(I) }
            ])
          }, [
            pt(Us, {
              ref: "maxSpinner",
              role: "end",
              "show-seconds": m(I),
              "am-pm-mode": m(K),
              "arrow-control": m(g),
              "spinner-date": m(S),
              "disabled-hours": G,
              "disabled-minutes": z,
              "disabled-seconds": U,
              onChange: N,
              onSetOption: m(ee),
              onSelectRange: ne
            }, null, 8, ["show-seconds", "am-pm-mode", "arrow-control", "spinner-date", "onSetOption"])
          ], 2)
        ], 2)
      ], 2),
      xe("div", {
        class: te(m(f).be("panel", "footer"))
      }, [
        xe("button", {
          type: "button",
          class: te([m(f).be("panel", "btn"), "cancel"]),
          onClick: pe[0] || (pe[0] = (Te) => O())
        }, tt(m(i)("el.datepicker.cancel")), 3),
        xe("button", {
          type: "button",
          class: te([m(f).be("panel", "btn"), "confirm"]),
          disabled: m(le),
          onClick: pe[1] || (pe[1] = (Te) => L())
        }, tt(m(i)("el.datepicker.confirm")), 11, nM)
      ], 2)
    ], 2)) : Ee("v-if", !0);
  }
});
var oM = /* @__PURE__ */ Je(rM, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/time-picker/src/time-picker-com/panel-time-range.vue"]]);
Zt.extend(RT);
var aM = Ae({
  name: "ElTimePicker",
  install: null,
  props: {
    ...Kp,
    isRange: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:modelValue"],
  setup(e, t) {
    const n = ce(), [r, i] = e.isRange ? ["timerange", oM] : ["time", eM], c = (f) => t.emit("update:modelValue", f);
    return Ot("ElPopperOptions", e.popperOptions), t.expose({
      focus: (f) => {
        var u;
        (u = n.value) == null || u.handleFocusInput(f);
      },
      blur: (f) => {
        var u;
        (u = n.value) == null || u.handleBlurInput(f);
      },
      handleOpen: () => {
        var f;
        (f = n.value) == null || f.handleOpen();
      },
      handleClose: () => {
        var f;
        (f = n.value) == null || f.handleClose();
      }
    }), () => {
      var f;
      const u = (f = e.format) != null ? f : LT;
      return pt(WT, bn(e, {
        ref: n,
        type: r,
        format: u,
        "onUpdate:modelValue": c
      }), {
        default: (h) => pt(i, h, null)
      });
    };
  }
});
const ks = aM;
ks.install = (e) => {
  e.component(ks.name, ks);
};
const Gp = {
  modelValue: {
    type: [Number, String, Boolean],
    default: void 0
  },
  label: {
    type: [String, Boolean, Number, Object]
  },
  indeterminate: Boolean,
  disabled: Boolean,
  checked: Boolean,
  name: {
    type: String,
    default: void 0
  },
  trueLabel: {
    type: [String, Number],
    default: void 0
  },
  falseLabel: {
    type: [String, Number],
    default: void 0
  },
  id: {
    type: String,
    default: void 0
  },
  controls: {
    type: String,
    default: void 0
  },
  border: Boolean,
  size: la,
  tabindex: [String, Number],
  validateEvent: {
    type: Boolean,
    default: !0
  }
}, Zp = {
  [Rt]: (e) => un(e) || sn(e) || Jo(e),
  change: (e) => un(e) || sn(e) || Jo(e)
}, iM = ({
  model: e,
  isChecked: t
}) => {
  const n = Ye(vo, void 0), r = V(() => {
    var i, c;
    const f = (i = n == null ? void 0 : n.max) == null ? void 0 : i.value, u = (c = n == null ? void 0 : n.min) == null ? void 0 : c.value;
    return !na(f) && e.value.length >= f && !t.value || !na(u) && e.value.length <= u && t.value;
  });
  return {
    isDisabled: _i(V(() => (n == null ? void 0 : n.disabled.value) || r.value)),
    isLimitDisabled: r
  };
}, sM = (e, {
  model: t,
  isLimitExceeded: n,
  hasOwnLabel: r,
  isDisabled: i,
  isLabeledByFormItem: c
}) => {
  const f = Ye(vo, void 0), { formItem: u } = $r(), { emit: h } = Ut();
  function g(x) {
    var S, M;
    return x === e.trueLabel || x === !0 ? (S = e.trueLabel) != null ? S : !0 : (M = e.falseLabel) != null ? M : !1;
  }
  function w(x, S) {
    h("change", g(x), S);
  }
  function _(x) {
    if (n.value)
      return;
    const S = x.target;
    h("change", g(S.checked), x);
  }
  async function k(x) {
    n.value || !r.value && !i.value && c.value && (x.composedPath().some((S) => S.tagName === "LABEL") || (t.value = g([!1, e.falseLabel].includes(t.value)), await Xe(), w(t.value, x)));
  }
  const T = V(() => (f == null ? void 0 : f.validateEvent) || e.validateEvent);
  return be(() => e.modelValue, () => {
    T.value && (u == null || u.validate("change").catch((x) => Pt(x)));
  }), {
    handleChange: _,
    onClickRoot: k
  };
}, lM = (e) => {
  const t = ce(!1), { emit: n } = Ut(), r = Ye(vo, void 0), i = V(() => na(r) === !1), c = ce(!1);
  return {
    model: V({
      get() {
        var f, u;
        return i.value ? (f = r == null ? void 0 : r.modelValue) == null ? void 0 : f.value : (u = e.modelValue) != null ? u : t.value;
      },
      set(f) {
        var u, h;
        i.value && bt(f) ? (c.value = ((u = r == null ? void 0 : r.max) == null ? void 0 : u.value) !== void 0 && f.length > (r == null ? void 0 : r.max.value), c.value === !1 && ((h = r == null ? void 0 : r.changeEvent) == null || h.call(r, f))) : (n(Rt, f), t.value = f);
      }
    }),
    isGroup: i,
    isLimitExceeded: c
  };
}, uM = (e, t, { model: n }) => {
  const r = Ye(vo, void 0), i = ce(!1), c = V(() => {
    const g = n.value;
    return Jo(g) ? g : bt(g) ? dn(e.label) ? g.map(Qr).some((w) => ii(w, e.label)) : g.map(Qr).includes(e.label) : g != null ? g === e.trueLabel : !!g;
  }), f = Mr(V(() => {
    var g;
    return (g = r == null ? void 0 : r.size) == null ? void 0 : g.value;
  }), {
    prop: !0
  }), u = Mr(V(() => {
    var g;
    return (g = r == null ? void 0 : r.size) == null ? void 0 : g.value;
  })), h = V(() => !!(t.default || e.label));
  return {
    checkboxButtonSize: f,
    isChecked: c,
    isFocused: i,
    checkboxSize: u,
    hasOwnLabel: h
  };
}, cM = (e, { model: t }) => {
  function n() {
    bt(t.value) && !t.value.includes(e.label) ? t.value.push(e.label) : t.value = e.trueLabel || !0;
  }
  e.checked && n();
}, Qp = (e, t) => {
  const { formItem: n } = $r(), { model: r, isGroup: i, isLimitExceeded: c } = lM(e), {
    isFocused: f,
    isChecked: u,
    checkboxButtonSize: h,
    checkboxSize: g,
    hasOwnLabel: w
  } = uM(e, t, { model: r }), { isDisabled: _ } = iM({ model: r, isChecked: u }), { inputId: k, isLabeledByFormItem: T } = Sl(e, {
    formItemContext: n,
    disableIdGeneration: w,
    disableIdManagement: i
  }), { handleChange: x, onClickRoot: S } = sM(e, {
    model: r,
    isLimitExceeded: c,
    hasOwnLabel: w,
    isDisabled: _,
    isLabeledByFormItem: T
  });
  return cM(e, { model: r }), {
    inputId: k,
    isLabeledByFormItem: T,
    isChecked: u,
    isDisabled: _,
    isFocused: f,
    checkboxButtonSize: h,
    checkboxSize: g,
    hasOwnLabel: w,
    model: r,
    handleChange: x,
    onClickRoot: S
  };
}, dM = ["tabindex", "role", "aria-checked"], fM = ["id", "aria-hidden", "name", "tabindex", "disabled", "true-value", "false-value"], pM = ["id", "aria-hidden", "disabled", "value", "name", "tabindex"], hM = Ae({
  name: "ElCheckbox"
}), vM = /* @__PURE__ */ Ae({
  ...hM,
  props: Gp,
  emits: Zp,
  setup(e) {
    const t = e, n = li(), {
      inputId: r,
      isLabeledByFormItem: i,
      isChecked: c,
      isDisabled: f,
      isFocused: u,
      checkboxSize: h,
      hasOwnLabel: g,
      model: w,
      handleChange: _,
      onClickRoot: k
    } = Qp(t, n), T = Ke("checkbox"), x = V(() => [
      T.b(),
      T.m(h.value),
      T.is("disabled", f.value),
      T.is("bordered", t.border),
      T.is("checked", c.value)
    ]), S = V(() => [
      T.e("input"),
      T.is("disabled", f.value),
      T.is("checked", c.value),
      T.is("indeterminate", t.indeterminate),
      T.is("focus", u.value)
    ]);
    return (M, O) => (Y(), Se($t(!m(g) && m(i) ? "span" : "label"), {
      class: te(m(x)),
      "aria-controls": M.indeterminate ? M.controls : null,
      onClick: m(k)
    }, {
      default: Pe(() => [
        xe("span", {
          class: te(m(S)),
          tabindex: M.indeterminate ? 0 : void 0,
          role: M.indeterminate ? "checkbox" : void 0,
          "aria-checked": M.indeterminate ? "mixed" : void 0
        }, [
          M.trueLabel || M.falseLabel ? Et((Y(), he("input", {
            key: 0,
            id: m(r),
            "onUpdate:modelValue": O[0] || (O[0] = (I) => qo(w) ? w.value = I : null),
            class: te(m(T).e("original")),
            type: "checkbox",
            "aria-hidden": M.indeterminate ? "true" : "false",
            name: M.name,
            tabindex: M.tabindex,
            disabled: m(f),
            "true-value": M.trueLabel,
            "false-value": M.falseLabel,
            onChange: O[1] || (O[1] = (...I) => m(_) && m(_)(...I)),
            onFocus: O[2] || (O[2] = (I) => u.value = !0),
            onBlur: O[3] || (O[3] = (I) => u.value = !1)
          }, null, 42, fM)), [
            [ti, m(w)]
          ]) : Et((Y(), he("input", {
            key: 1,
            id: m(r),
            "onUpdate:modelValue": O[4] || (O[4] = (I) => qo(w) ? w.value = I : null),
            class: te(m(T).e("original")),
            type: "checkbox",
            "aria-hidden": M.indeterminate ? "true" : "false",
            disabled: m(f),
            value: M.label,
            name: M.name,
            tabindex: M.tabindex,
            onChange: O[5] || (O[5] = (...I) => m(_) && m(_)(...I)),
            onFocus: O[6] || (O[6] = (I) => u.value = !0),
            onBlur: O[7] || (O[7] = (I) => u.value = !1)
          }, null, 42, pM)), [
            [ti, m(w)]
          ]),
          xe("span", {
            class: te(m(T).e("inner"))
          }, null, 2)
        ], 10, dM),
        m(g) ? (Y(), he("span", {
          key: 0,
          class: te(m(T).e("label"))
        }, [
          Ze(M.$slots, "default"),
          M.$slots.default ? Ee("v-if", !0) : (Y(), he(yt, { key: 0 }, [
            Ur(tt(M.label), 1)
          ], 64))
        ], 2)) : Ee("v-if", !0)
      ]),
      _: 3
    }, 8, ["class", "aria-controls", "onClick"]));
  }
});
var gM = /* @__PURE__ */ Je(vM, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox.vue"]]);
const mM = ["name", "tabindex", "disabled", "true-value", "false-value"], yM = ["name", "tabindex", "disabled", "value"], bM = Ae({
  name: "ElCheckboxButton"
}), wM = /* @__PURE__ */ Ae({
  ...bM,
  props: Gp,
  emits: Zp,
  setup(e) {
    const t = e, n = li(), {
      isFocused: r,
      isChecked: i,
      isDisabled: c,
      checkboxButtonSize: f,
      model: u,
      handleChange: h
    } = Qp(t, n), g = Ye(vo, void 0), w = Ke("checkbox"), _ = V(() => {
      var T, x, S, M;
      const O = (x = (T = g == null ? void 0 : g.fill) == null ? void 0 : T.value) != null ? x : "";
      return {
        backgroundColor: O,
        borderColor: O,
        color: (M = (S = g == null ? void 0 : g.textColor) == null ? void 0 : S.value) != null ? M : "",
        boxShadow: O ? `-1px 0 0 0 ${O}` : void 0
      };
    }), k = V(() => [
      w.b("button"),
      w.bm("button", f.value),
      w.is("disabled", c.value),
      w.is("checked", i.value),
      w.is("focus", r.value)
    ]);
    return (T, x) => (Y(), he("label", {
      class: te(m(k))
    }, [
      T.trueLabel || T.falseLabel ? Et((Y(), he("input", {
        key: 0,
        "onUpdate:modelValue": x[0] || (x[0] = (S) => qo(u) ? u.value = S : null),
        class: te(m(w).be("button", "original")),
        type: "checkbox",
        name: T.name,
        tabindex: T.tabindex,
        disabled: m(c),
        "true-value": T.trueLabel,
        "false-value": T.falseLabel,
        onChange: x[1] || (x[1] = (...S) => m(h) && m(h)(...S)),
        onFocus: x[2] || (x[2] = (S) => r.value = !0),
        onBlur: x[3] || (x[3] = (S) => r.value = !1)
      }, null, 42, mM)), [
        [ti, m(u)]
      ]) : Et((Y(), he("input", {
        key: 1,
        "onUpdate:modelValue": x[4] || (x[4] = (S) => qo(u) ? u.value = S : null),
        class: te(m(w).be("button", "original")),
        type: "checkbox",
        name: T.name,
        tabindex: T.tabindex,
        disabled: m(c),
        value: T.label,
        onChange: x[5] || (x[5] = (...S) => m(h) && m(h)(...S)),
        onFocus: x[6] || (x[6] = (S) => r.value = !0),
        onBlur: x[7] || (x[7] = (S) => r.value = !1)
      }, null, 42, yM)), [
        [ti, m(u)]
      ]),
      T.$slots.default || T.label ? (Y(), he("span", {
        key: 2,
        class: te(m(w).be("button", "inner")),
        style: _t(m(i) ? m(_) : void 0)
      }, [
        Ze(T.$slots, "default", {}, () => [
          Ur(tt(T.label), 1)
        ])
      ], 6)) : Ee("v-if", !0)
    ], 2));
  }
});
var Jp = /* @__PURE__ */ Je(wM, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-button.vue"]]);
const xM = mt({
  modelValue: {
    type: Ne(Array),
    default: () => []
  },
  disabled: Boolean,
  min: Number,
  max: Number,
  size: la,
  label: String,
  fill: String,
  textColor: String,
  tag: {
    type: String,
    default: "div"
  },
  validateEvent: {
    type: Boolean,
    default: !0
  }
}), _M = {
  [Rt]: (e) => bt(e),
  change: (e) => bt(e)
}, SM = Ae({
  name: "ElCheckboxGroup"
}), kM = /* @__PURE__ */ Ae({
  ...SM,
  props: xM,
  emits: _M,
  setup(e, { emit: t }) {
    const n = e, r = Ke("checkbox"), { formItem: i } = $r(), { inputId: c, isLabeledByFormItem: f } = Sl(n, {
      formItemContext: i
    }), u = async (g) => {
      t(Rt, g), await Xe(), t("change", g);
    }, h = V({
      get() {
        return n.modelValue;
      },
      set(g) {
        u(g);
      }
    });
    return Ot(vo, {
      ...p2(ui(n), [
        "size",
        "min",
        "max",
        "disabled",
        "validateEvent",
        "fill",
        "textColor"
      ]),
      modelValue: h,
      changeEvent: u
    }), be(() => n.modelValue, () => {
      n.validateEvent && (i == null || i.validate("change").catch((g) => Pt(g)));
    }), (g, w) => {
      var _;
      return Y(), Se($t(g.tag), {
        id: m(c),
        class: te(m(r).b("group")),
        role: "group",
        "aria-label": m(f) ? void 0 : g.label || "checkbox-group",
        "aria-labelledby": m(f) ? (_ = m(i)) == null ? void 0 : _.labelId : void 0
      }, {
        default: Pe(() => [
          Ze(g.$slots, "default")
        ]),
        _: 3
      }, 8, ["id", "class", "aria-label", "aria-labelledby"]);
    };
  }
});
var eh = /* @__PURE__ */ Je(kM, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-group.vue"]]);
const EM = Ln(gM, {
  CheckboxButton: Jp,
  CheckboxGroup: eh
});
sa(Jp);
sa(eh);
const th = mt({
  closable: Boolean,
  type: {
    type: String,
    values: ["success", "info", "warning", "danger", ""],
    default: ""
  },
  hit: Boolean,
  disableTransitions: Boolean,
  color: {
    type: String,
    default: ""
  },
  size: {
    type: String,
    values: yl,
    default: ""
  },
  effect: {
    type: String,
    values: ["dark", "light", "plain"],
    default: "light"
  },
  round: Boolean
}), OM = {
  close: (e) => e instanceof MouseEvent,
  click: (e) => e instanceof MouseEvent
}, CM = Ae({
  name: "ElTag"
}), TM = /* @__PURE__ */ Ae({
  ...CM,
  props: th,
  emits: OM,
  setup(e, { emit: t }) {
    const n = e, r = Mr(), i = Ke("tag"), c = V(() => {
      const { type: h, hit: g, effect: w, closable: _, round: k } = n;
      return [
        i.b(),
        i.is("closable", _),
        i.m(h),
        i.m(r.value),
        i.m(w),
        i.is("hit", g),
        i.is("round", k)
      ];
    }), f = (h) => {
      t("close", h);
    }, u = (h) => {
      t("click", h);
    };
    return (h, g) => h.disableTransitions ? (Y(), he("span", {
      key: 0,
      class: te(m(c)),
      style: _t({ backgroundColor: h.color }),
      onClick: u
    }, [
      xe("span", {
        class: te(m(i).e("content"))
      }, [
        Ze(h.$slots, "default")
      ], 2),
      h.closable ? (Y(), Se(m(Mt), {
        key: 0,
        class: te(m(i).e("close")),
        onClick: gt(f, ["stop"])
      }, {
        default: Pe(() => [
          pt(m(sd))
        ]),
        _: 1
      }, 8, ["class", "onClick"])) : Ee("v-if", !0)
    ], 6)) : (Y(), Se(ao, {
      key: 1,
      name: `${m(i).namespace.value}-zoom-in-center`,
      appear: ""
    }, {
      default: Pe(() => [
        xe("span", {
          class: te(m(c)),
          style: _t({ backgroundColor: h.color }),
          onClick: u
        }, [
          xe("span", {
            class: te(m(i).e("content"))
          }, [
            Ze(h.$slots, "default")
          ], 2),
          h.closable ? (Y(), Se(m(Mt), {
            key: 0,
            class: te(m(i).e("close")),
            onClick: gt(f, ["stop"])
          }, {
            default: Pe(() => [
              pt(m(sd))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : Ee("v-if", !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["name"]));
  }
});
var MM = /* @__PURE__ */ Je(TM, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tag/src/tag.vue"]]);
const PM = Ln(MM), AM = Ae({
  name: "ElCollapseTransition"
}), jM = /* @__PURE__ */ Ae({
  ...AM,
  setup(e) {
    const t = Ke("collapse-transition"), n = {
      beforeEnter(r) {
        r.dataset || (r.dataset = {}), r.dataset.oldPaddingTop = r.style.paddingTop, r.dataset.oldPaddingBottom = r.style.paddingBottom, r.style.maxHeight = 0, r.style.paddingTop = 0, r.style.paddingBottom = 0;
      },
      enter(r) {
        r.dataset.oldOverflow = r.style.overflow, r.scrollHeight !== 0 ? (r.style.maxHeight = `${r.scrollHeight}px`, r.style.paddingTop = r.dataset.oldPaddingTop, r.style.paddingBottom = r.dataset.oldPaddingBottom) : (r.style.maxHeight = 0, r.style.paddingTop = r.dataset.oldPaddingTop, r.style.paddingBottom = r.dataset.oldPaddingBottom), r.style.overflow = "hidden";
      },
      afterEnter(r) {
        r.style.maxHeight = "", r.style.overflow = r.dataset.oldOverflow;
      },
      beforeLeave(r) {
        r.dataset || (r.dataset = {}), r.dataset.oldPaddingTop = r.style.paddingTop, r.dataset.oldPaddingBottom = r.style.paddingBottom, r.dataset.oldOverflow = r.style.overflow, r.style.maxHeight = `${r.scrollHeight}px`, r.style.overflow = "hidden";
      },
      leave(r) {
        r.scrollHeight !== 0 && (r.style.maxHeight = 0, r.style.paddingTop = 0, r.style.paddingBottom = 0);
      },
      afterLeave(r) {
        r.style.maxHeight = "", r.style.overflow = r.dataset.oldOverflow, r.style.paddingTop = r.dataset.oldPaddingTop, r.style.paddingBottom = r.dataset.oldPaddingBottom;
      }
    };
    return (r, i) => (Y(), Se(ao, bn({
      name: m(t).b()
    }, og(n)), {
      default: Pe(() => [
        Ze(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["name"]));
  }
});
var Ja = /* @__PURE__ */ Je(jM, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/collapse-transition/src/collapse-transition.vue"]]);
Ja.install = (e) => {
  e.component(Ja.name, Ja);
};
const IM = Ja, nh = "ElSelectGroup", Oi = "ElSelect";
function DM(e, t) {
  const n = Ye(Oi), r = Ye(nh, { disabled: !1 }), i = V(() => Object.prototype.toString.call(e.value).toLowerCase() === "[object object]"), c = V(() => n.props.multiple ? _(n.props.modelValue, e.value) : k(e.value, n.props.modelValue)), f = V(() => {
    if (n.props.multiple) {
      const S = n.props.modelValue || [];
      return !c.value && S.length >= n.props.multipleLimit && n.props.multipleLimit > 0;
    } else
      return !1;
  }), u = V(() => e.label || (i.value ? "" : e.value)), h = V(() => e.value || e.label || ""), g = V(() => e.disabled || t.groupDisabled || f.value), w = Ut(), _ = (S = [], M) => {
    if (i.value) {
      const O = n.props.valueKey;
      return S && S.some((I) => Qr(Gt(I, O)) === Gt(M, O));
    } else
      return S && S.includes(M);
  }, k = (S, M) => {
    if (i.value) {
      const { valueKey: O } = n.props;
      return Gt(S, O) === Gt(M, O);
    } else
      return S === M;
  }, T = () => {
    !e.disabled && !r.disabled && (n.hoverIndex = n.optionsArray.indexOf(w.proxy));
  };
  be(() => u.value, () => {
    !e.created && !n.props.remote && n.setSelected();
  }), be(() => e.value, (S, M) => {
    const { remote: O, valueKey: I } = n.props;
    if (Object.is(S, M) || (n.onOptionDestroy(M, w.proxy), n.onOptionCreate(w.proxy)), !e.created && !O) {
      if (I && typeof S == "object" && typeof M == "object" && S[I] === M[I])
        return;
      n.setSelected();
    }
  }), be(() => r.disabled, () => {
    t.groupDisabled = r.disabled;
  }, { immediate: !0 });
  const { queryChange: x } = Qr(n);
  return be(x, (S) => {
    const { query: M } = m(S), O = new RegExp(z2(M), "i");
    t.visible = O.test(u.value) || e.created, t.visible || n.filteredOptionsCount--;
  }), {
    select: n,
    currentLabel: u,
    currentValue: h,
    itemSelected: c,
    isDisabled: g,
    hoverItem: T
  };
}
const $M = Ae({
  name: "ElOption",
  componentName: "ElOption",
  props: {
    value: {
      required: !0,
      type: [String, Number, Boolean, Object]
    },
    label: [String, Number],
    created: Boolean,
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const t = Ke("select"), n = cn({
      index: -1,
      groupDisabled: !1,
      visible: !0,
      hitState: !1,
      hover: !1
    }), { currentLabel: r, itemSelected: i, isDisabled: c, select: f, hoverItem: u } = DM(e, n), { visible: h, hover: g } = ui(n), w = Ut().proxy;
    f.onOptionCreate(w), fn(() => {
      const k = w.value, { selected: T } = f, x = (f.props.multiple ? T : [T]).some((S) => S.value === w.value);
      Xe(() => {
        f.cachedOptions.get(k) === w && !x && f.cachedOptions.delete(k);
      }), f.onOptionDestroy(k, w);
    });
    function _() {
      e.disabled !== !0 && n.groupDisabled !== !0 && f.handleOptionSelect(w, !0);
    }
    return {
      ns: t,
      currentLabel: r,
      itemSelected: i,
      isDisabled: c,
      select: f,
      hoverItem: u,
      visible: h,
      hover: g,
      selectOptionClick: _,
      states: n
    };
  }
});
function zM(e, t, n, r, i, c) {
  return Et((Y(), he("li", {
    class: te([
      e.ns.be("dropdown", "item"),
      e.ns.is("disabled", e.isDisabled),
      {
        selected: e.itemSelected,
        hover: e.hover
      }
    ]),
    onMouseenter: t[0] || (t[0] = (...f) => e.hoverItem && e.hoverItem(...f)),
    onClick: t[1] || (t[1] = gt((...f) => e.selectOptionClick && e.selectOptionClick(...f), ["stop"]))
  }, [
    Ze(e.$slots, "default", {}, () => [
      xe("span", null, tt(e.currentLabel), 1)
    ])
  ], 34)), [
    [In, e.visible]
  ]);
}
var $l = /* @__PURE__ */ Je($M, [["render", zM], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/option.vue"]]);
const NM = Ae({
  name: "ElSelectDropdown",
  componentName: "ElSelectDropdown",
  setup() {
    const e = Ye(Oi), t = Ke("select"), n = V(() => e.props.popperClass), r = V(() => e.props.multiple), i = V(() => e.props.fitInputWidth), c = ce("");
    function f() {
      var u;
      c.value = `${(u = e.selectWrapper) == null ? void 0 : u.offsetWidth}px`;
    }
    return jt(() => {
      f(), bi(e.selectWrapper, f);
    }), {
      ns: t,
      minWidth: c,
      popperClass: n,
      isMultiple: r,
      isFitInputWidth: i
    };
  }
});
function RM(e, t, n, r, i, c) {
  return Y(), he("div", {
    class: te([e.ns.b("dropdown"), e.ns.is("multiple", e.isMultiple), e.popperClass]),
    style: _t({ [e.isFitInputWidth ? "width" : "minWidth"]: e.minWidth })
  }, [
    Ze(e.$slots, "default")
  ], 6);
}
var LM = /* @__PURE__ */ Je(NM, [["render", RM], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/select-dropdown.vue"]]);
function BM(e) {
  const { t } = zr();
  return cn({
    options: /* @__PURE__ */ new Map(),
    cachedOptions: /* @__PURE__ */ new Map(),
    createdLabel: null,
    createdSelected: !1,
    selected: e.multiple ? [] : {},
    inputLength: 20,
    inputWidth: 0,
    optionsCount: 0,
    filteredOptionsCount: 0,
    visible: !1,
    softFocus: !1,
    selectedLabel: "",
    hoverIndex: -1,
    query: "",
    previousQuery: null,
    inputHovering: !1,
    cachedPlaceHolder: "",
    currentPlaceholder: t("el.select.placeholder"),
    menuVisibleOnFocus: !1,
    isOnComposition: !1,
    isSilentBlur: !1,
    prefixWidth: 11,
    tagInMultiLine: !1,
    mouseEnter: !1
  });
}
const FM = (e, t, n) => {
  const { t: r } = zr(), i = Ke("select");
  dp({
    from: "suffixTransition",
    replacement: "override style scheme",
    version: "2.3.0",
    scope: "props",
    ref: "https://element-plus.org/en-US/component/select.html#select-attributes"
  }, V(() => e.suffixTransition === !1));
  const c = ce(null), f = ce(null), u = ce(null), h = ce(null), g = ce(null), w = ce(null), _ = ce(-1), k = Zn({ query: "" }), T = Zn(""), { form: x, formItem: S } = $r(), M = V(() => !e.filterable || e.multiple || !t.visible), O = V(() => e.disabled || (x == null ? void 0 : x.disabled)), I = V(() => {
    const B = e.multiple ? Array.isArray(e.modelValue) && e.modelValue.length > 0 : e.modelValue !== void 0 && e.modelValue !== null && e.modelValue !== "";
    return e.clearable && !O.value && t.inputHovering && B;
  }), K = V(() => e.remote && e.filterable && !e.remoteShowSuffix ? "" : e.suffixIcon), L = V(() => i.is("reverse", K.value && t.visible && e.suffixTransition)), q = V(() => e.remote ? 300 : 0), N = V(() => e.loading ? e.loadingText || r("el.select.loading") : e.remote && t.query === "" && t.options.size === 0 ? !1 : e.filterable && t.query && t.options.size > 0 && t.filteredOptionsCount === 0 ? e.noMatchText || r("el.select.noMatch") : t.options.size === 0 ? e.noDataText || r("el.select.noData") : null), H = V(() => Array.from(t.options.values())), F = V(() => Array.from(t.cachedOptions.values())), le = V(() => {
    const B = H.value.filter((ae) => !ae.created).some((ae) => ae.currentLabel === t.query);
    return e.filterable && e.allowCreate && t.query !== "" && !B;
  }), re = Mr(), fe = V(() => ["small"].includes(re.value) ? "small" : "default"), _e = V({
    get() {
      return t.visible && N.value !== !1;
    },
    set(B) {
      t.visible = B;
    }
  });
  be([() => O.value, () => re.value, () => x == null ? void 0 : x.size], () => {
    Xe(() => {
      ne();
    });
  }), be(() => e.placeholder, (B) => {
    t.cachedPlaceHolder = t.currentPlaceholder = B;
  }), be(() => e.modelValue, (B, ae) => {
    e.multiple && (ne(), B && B.length > 0 || f.value && t.query !== "" ? t.currentPlaceholder = "" : t.currentPlaceholder = t.cachedPlaceHolder, e.filterable && !e.reserveKeyword && (t.query = "", Q(t.query))), z(), e.filterable && !e.multiple && (t.inputLength = 20), !ii(B, ae) && e.validateEvent && (S == null || S.validate("change").catch((P) => Pt(P)));
  }, {
    flush: "post",
    deep: !0
  }), be(() => t.visible, (B) => {
    var ae, P, J;
    B ? ((P = (ae = u.value) == null ? void 0 : ae.updatePopper) == null || P.call(ae), e.filterable && (t.filteredOptionsCount = t.optionsCount, t.query = e.remote ? "" : t.selectedLabel, e.multiple ? (J = f.value) == null || J.focus() : t.selectedLabel && (t.currentPlaceholder = `${t.selectedLabel}`, t.selectedLabel = ""), Q(t.query), !e.multiple && !e.remote && (k.value.query = "", Io(k), Io(T)))) : (e.filterable && (qt(e.filterMethod) && e.filterMethod(""), qt(e.remoteMethod) && e.remoteMethod("")), f.value && f.value.blur(), t.query = "", t.previousQuery = null, t.selectedLabel = "", t.inputLength = 20, t.menuVisibleOnFocus = !1, D(), Xe(() => {
      f.value && f.value.value === "" && t.selected.length === 0 && (t.currentPlaceholder = t.cachedPlaceHolder);
    }), e.multiple || (t.selected && (e.filterable && e.allowCreate && t.createdSelected && t.createdLabel ? t.selectedLabel = t.createdLabel : t.selectedLabel = t.selected.currentLabel, e.filterable && (t.query = t.selectedLabel)), e.filterable && (t.currentPlaceholder = t.cachedPlaceHolder))), n.emit("visible-change", B);
  }), be(() => t.options.entries(), () => {
    var B, ae, P;
    if (!Lt)
      return;
    (ae = (B = u.value) == null ? void 0 : B.updatePopper) == null || ae.call(B), e.multiple && ne();
    const J = ((P = g.value) == null ? void 0 : P.querySelectorAll("input")) || [];
    Array.from(J).includes(document.activeElement) || z(), e.defaultFirstOption && (e.filterable || e.remote) && t.filteredOptionsCount && G();
  }, {
    flush: "post"
  }), be(() => t.hoverIndex, (B) => {
    sn(B) && B > -1 ? _.value = H.value[B] || {} : _.value = {}, H.value.forEach((ae) => {
      ae.hover = _.value === ae;
    });
  });
  const ne = () => {
    e.collapseTags && !e.filterable || Xe(() => {
      var B, ae;
      if (!c.value)
        return;
      const P = c.value.$el.querySelector("input"), J = h.value, ke = rE(re.value || (x == null ? void 0 : x.size));
      P.style.height = `${(t.selected.length === 0 ? ke : Math.max(J ? J.clientHeight + (J.clientHeight > ke ? 6 : 0) : 0, ke)) - 2}px`, t.tagInMultiLine = Number.parseFloat(P.style.height) >= ke, t.visible && N.value !== !1 && ((ae = (B = u.value) == null ? void 0 : B.updatePopper) == null || ae.call(B));
    });
  }, Q = async (B) => {
    if (!(t.previousQuery === B || t.isOnComposition)) {
      if (t.previousQuery === null && (qt(e.filterMethod) || qt(e.remoteMethod))) {
        t.previousQuery = B;
        return;
      }
      t.previousQuery = B, Xe(() => {
        var ae, P;
        t.visible && ((P = (ae = u.value) == null ? void 0 : ae.updatePopper) == null || P.call(ae));
      }), t.hoverIndex = -1, e.multiple && e.filterable && Xe(() => {
        const ae = f.value.value.length * 15 + 20;
        t.inputLength = e.collapseTags ? Math.min(50, ae) : ae, A(), ne();
      }), e.remote && qt(e.remoteMethod) ? (t.hoverIndex = -1, e.remoteMethod(B)) : qt(e.filterMethod) ? (e.filterMethod(B), Io(T)) : (t.filteredOptionsCount = t.optionsCount, k.value.query = B, Io(k), Io(T)), e.defaultFirstOption && (e.filterable || e.remote) && t.filteredOptionsCount && (await Xe(), G());
    }
  }, A = () => {
    t.currentPlaceholder !== "" && (t.currentPlaceholder = f.value.value ? "" : t.cachedPlaceHolder);
  }, G = () => {
    const B = H.value.filter((J) => J.visible && !J.disabled && !J.states.groupDisabled), ae = B.find((J) => J.created), P = B[0];
    t.hoverIndex = pe(H.value, ae || P);
  }, z = () => {
    var B;
    if (e.multiple)
      t.selectedLabel = "";
    else {
      const P = U(e.modelValue);
      (B = P.props) != null && B.created ? (t.createdLabel = P.props.value, t.createdSelected = !0) : t.createdSelected = !1, t.selectedLabel = P.currentLabel, t.selected = P, e.filterable && (t.query = t.selectedLabel);
      return;
    }
    const ae = [];
    Array.isArray(e.modelValue) && e.modelValue.forEach((P) => {
      ae.push(U(P));
    }), t.selected = ae, Xe(() => {
      ne();
    });
  }, U = (B) => {
    let ae;
    const P = ps(B).toLowerCase() === "object", J = ps(B).toLowerCase() === "null", ke = ps(B).toLowerCase() === "undefined";
    for (let St = t.cachedOptions.size - 1; St >= 0; St--) {
      const It = F.value[St];
      if (P ? Gt(It.value, e.valueKey) === Gt(B, e.valueKey) : It.value === B) {
        ae = {
          value: B,
          currentLabel: It.currentLabel,
          isDisabled: It.isDisabled
        };
        break;
      }
    }
    if (ae)
      return ae;
    const Ue = P ? B.label : !J && !ke ? B : "", ut = {
      value: B,
      currentLabel: Ue
    };
    return e.multiple && (ut.hitState = !1), ut;
  }, D = () => {
    setTimeout(() => {
      const B = e.valueKey;
      e.multiple ? t.selected.length > 0 ? t.hoverIndex = Math.min.apply(null, t.selected.map((ae) => H.value.findIndex((P) => Gt(P, B) === Gt(ae, B)))) : t.hoverIndex = -1 : t.hoverIndex = H.value.findIndex((ae) => ze(ae) === ze(t.selected));
    }, 300);
  }, X = () => {
    var B, ae;
    oe(), (ae = (B = u.value) == null ? void 0 : B.updatePopper) == null || ae.call(B), e.multiple && !e.filterable && ne();
  }, oe = () => {
    var B;
    t.inputWidth = (B = c.value) == null ? void 0 : B.$el.offsetWidth;
  }, ue = () => {
    e.filterable && t.query !== t.selectedLabel && (t.query = t.selectedLabel, Q(t.query));
  }, ye = Bs(() => {
    ue();
  }, q.value), $e = Bs((B) => {
    Q(B.target.value);
  }, q.value), ee = (B) => {
    ii(e.modelValue, B) || n.emit(ap, B);
  }, He = (B) => {
    if (B.target.value.length <= 0 && !je()) {
      const ae = e.modelValue.slice();
      ae.pop(), n.emit(Rt, ae), ee(ae);
    }
    B.target.value.length === 1 && e.modelValue.length === 0 && (t.currentPlaceholder = t.cachedPlaceHolder);
  }, Ve = (B, ae) => {
    const P = t.selected.indexOf(ae);
    if (P > -1 && !O.value) {
      const J = e.modelValue.slice();
      J.splice(P, 1), n.emit(Rt, J), ee(J), n.emit("remove-tag", ae.value);
    }
    B.stopPropagation();
  }, Le = (B) => {
    B.stopPropagation();
    const ae = e.multiple ? [] : "";
    if (!un(ae))
      for (const P of t.selected)
        P.isDisabled && ae.push(P.value);
    n.emit(Rt, ae), ee(ae), t.hoverIndex = -1, t.visible = !1, n.emit("clear");
  }, se = (B, ae) => {
    var P;
    if (e.multiple) {
      const J = (e.modelValue || []).slice(), ke = pe(J, B.value);
      ke > -1 ? J.splice(ke, 1) : (e.multipleLimit <= 0 || J.length < e.multipleLimit) && J.push(B.value), n.emit(Rt, J), ee(J), B.created && (t.query = "", Q(""), t.inputLength = 20), e.filterable && ((P = f.value) == null || P.focus());
    } else
      n.emit(Rt, B.value), ee(B.value), t.visible = !1;
    t.isSilentBlur = ae, Te(), !t.visible && Xe(() => {
      Oe(B);
    });
  }, pe = (B = [], ae) => {
    if (!dn(ae))
      return B.indexOf(ae);
    const P = e.valueKey;
    let J = -1;
    return B.some((ke, Ue) => Qr(Gt(ke, P)) === Gt(ae, P) ? (J = Ue, !0) : !1), J;
  }, Te = () => {
    t.softFocus = !0;
    const B = f.value || c.value;
    B && (B == null || B.focus());
  }, Oe = (B) => {
    var ae, P, J, ke, Ue;
    const ut = Array.isArray(B) ? B[0] : B;
    let St = null;
    if (ut != null && ut.value) {
      const It = H.value.filter((nr) => nr.value === ut.value);
      It.length > 0 && (St = It[0].$el);
    }
    if (u.value && St) {
      const It = (ke = (J = (P = (ae = u.value) == null ? void 0 : ae.popperRef) == null ? void 0 : P.contentRef) == null ? void 0 : J.querySelector) == null ? void 0 : ke.call(J, `.${i.be("dropdown", "wrap")}`);
      It && B2(It, St);
    }
    (Ue = w.value) == null || Ue.handleScroll();
  }, Fe = (B) => {
    t.optionsCount++, t.filteredOptionsCount++, t.options.set(B.value, B), t.cachedOptions.set(B.value, B);
  }, et = (B, ae) => {
    t.options.get(B) === ae && (t.optionsCount--, t.filteredOptionsCount--, t.options.delete(B));
  }, nt = (B) => {
    B.code !== wt.backspace && je(!1), t.inputLength = f.value.value.length * 15 + 20, ne();
  }, je = (B) => {
    if (!Array.isArray(t.selected))
      return;
    const ae = t.selected[t.selected.length - 1];
    if (ae)
      return B === !0 || B === !1 ? (ae.hitState = B, B) : (ae.hitState = !ae.hitState, ae.hitState);
  }, Ie = (B) => {
    const ae = B.target.value;
    if (B.type === "compositionend")
      t.isOnComposition = !1, Xe(() => Q(ae));
    else {
      const P = ae[ae.length - 1] || "";
      t.isOnComposition = !ip(P);
    }
  }, xt = () => {
    Xe(() => Oe(t.selected));
  }, Ge = (B) => {
    t.softFocus ? t.softFocus = !1 : ((e.automaticDropdown || e.filterable) && (e.filterable && !t.visible && (t.menuVisibleOnFocus = !0), t.visible = !0), n.emit("focus", B));
  }, ht = () => {
    var B;
    t.visible = !1, (B = c.value) == null || B.blur();
  }, st = (B) => {
    Xe(() => {
      t.isSilentBlur ? t.isSilentBlur = !1 : n.emit("blur", B);
    }), t.softFocus = !1;
  }, $ = (B) => {
    Le(B);
  }, ve = () => {
    t.visible = !1;
  }, Ce = (B) => {
    t.visible && (B.preventDefault(), B.stopPropagation(), t.visible = !1);
  }, Re = (B) => {
    var ae;
    B && !t.mouseEnter || O.value || (t.menuVisibleOnFocus ? t.menuVisibleOnFocus = !1 : (!u.value || !u.value.isFocusInsideContent()) && (t.visible = !t.visible), t.visible && ((ae = f.value || c.value) == null || ae.focus()));
  }, qe = () => {
    t.visible ? H.value[t.hoverIndex] && se(H.value[t.hoverIndex], void 0) : Re();
  }, ze = (B) => dn(B.value) ? Gt(B.value, e.valueKey) : B.value, me = V(() => H.value.filter((B) => B.visible).every((B) => B.disabled)), lt = (B) => {
    if (!t.visible) {
      t.visible = !0;
      return;
    }
    if (!(t.options.size === 0 || t.filteredOptionsCount === 0) && !t.isOnComposition && !me.value) {
      B === "next" ? (t.hoverIndex++, t.hoverIndex === t.options.size && (t.hoverIndex = 0)) : B === "prev" && (t.hoverIndex--, t.hoverIndex < 0 && (t.hoverIndex = t.options.size - 1));
      const ae = H.value[t.hoverIndex];
      (ae.disabled === !0 || ae.states.groupDisabled === !0 || !ae.visible) && lt(B), Xe(() => Oe(_.value));
    }
  };
  return {
    optionsArray: H,
    selectSize: re,
    handleResize: X,
    debouncedOnInputChange: ye,
    debouncedQueryChange: $e,
    deletePrevTag: He,
    deleteTag: Ve,
    deleteSelected: Le,
    handleOptionSelect: se,
    scrollToOption: Oe,
    readonly: M,
    resetInputHeight: ne,
    showClose: I,
    iconComponent: K,
    iconReverse: L,
    showNewOption: le,
    collapseTagSize: fe,
    setSelected: z,
    managePlaceholder: A,
    selectDisabled: O,
    emptyText: N,
    toggleLastOptionHitState: je,
    resetInputState: nt,
    handleComposition: Ie,
    onOptionCreate: Fe,
    onOptionDestroy: et,
    handleMenuEnter: xt,
    handleFocus: Ge,
    blur: ht,
    handleBlur: st,
    handleClearClick: $,
    handleClose: ve,
    handleKeydownEscape: Ce,
    toggleMenu: Re,
    selectOption: qe,
    getValueKey: ze,
    navigateOptions: lt,
    dropMenuVisible: _e,
    queryChange: k,
    groupQueryChange: T,
    reference: c,
    input: f,
    tooltipRef: u,
    tags: h,
    selectWrapper: g,
    scrollbar: w,
    handleMouseEnter: () => {
      t.mouseEnter = !0;
    },
    handleMouseLeave: () => {
      t.mouseEnter = !1;
    }
  };
}, Vd = "ElSelect", HM = Ae({
  name: Vd,
  componentName: Vd,
  components: {
    ElInput: Cp,
    ElSelectMenu: LM,
    ElOption: $l,
    ElTag: PM,
    ElScrollbar: Tp,
    ElTooltip: zp,
    ElIcon: Mt
  },
  directives: { ClickOutside: qT },
  props: {
    name: String,
    id: String,
    modelValue: {
      type: [Array, String, Number, Boolean, Object],
      default: void 0
    },
    autocomplete: {
      type: String,
      default: "off"
    },
    automaticDropdown: Boolean,
    size: {
      type: String,
      validator: oE
    },
    effect: {
      type: String,
      default: "light"
    },
    disabled: Boolean,
    clearable: Boolean,
    filterable: Boolean,
    allowCreate: Boolean,
    loading: Boolean,
    popperClass: {
      type: String,
      default: ""
    },
    remote: Boolean,
    loadingText: String,
    noMatchText: String,
    noDataText: String,
    remoteMethod: Function,
    filterMethod: Function,
    multiple: Boolean,
    multipleLimit: {
      type: Number,
      default: 0
    },
    placeholder: {
      type: String
    },
    defaultFirstOption: Boolean,
    reserveKeyword: {
      type: Boolean,
      default: !0
    },
    valueKey: {
      type: String,
      default: "value"
    },
    collapseTags: Boolean,
    collapseTagsTooltip: {
      type: Boolean,
      default: !1
    },
    teleported: Dl.teleported,
    persistent: {
      type: Boolean,
      default: !0
    },
    clearIcon: {
      type: Tr,
      default: wi
    },
    fitInputWidth: {
      type: Boolean,
      default: !1
    },
    suffixIcon: {
      type: Tr,
      default: rp
    },
    tagType: { ...th.type, default: "info" },
    validateEvent: {
      type: Boolean,
      default: !0
    },
    remoteShowSuffix: {
      type: Boolean,
      default: !1
    },
    suffixTransition: {
      type: Boolean,
      default: !0
    },
    placement: {
      type: String,
      values: Si,
      default: "bottom-start"
    }
  },
  emits: [
    Rt,
    ap,
    "remove-tag",
    "clear",
    "visible-change",
    "focus",
    "blur"
  ],
  setup(e, t) {
    const n = Ke("select"), r = Ke("input"), { t: i } = zr(), c = BM(e), {
      optionsArray: f,
      selectSize: u,
      readonly: h,
      handleResize: g,
      collapseTagSize: w,
      debouncedOnInputChange: _,
      debouncedQueryChange: k,
      deletePrevTag: T,
      deleteTag: x,
      deleteSelected: S,
      handleOptionSelect: M,
      scrollToOption: O,
      setSelected: I,
      resetInputHeight: K,
      managePlaceholder: L,
      showClose: q,
      selectDisabled: N,
      iconComponent: H,
      iconReverse: F,
      showNewOption: le,
      emptyText: re,
      toggleLastOptionHitState: fe,
      resetInputState: _e,
      handleComposition: ne,
      onOptionCreate: Q,
      onOptionDestroy: A,
      handleMenuEnter: G,
      handleFocus: z,
      blur: U,
      handleBlur: D,
      handleClearClick: X,
      handleClose: oe,
      handleKeydownEscape: ue,
      toggleMenu: ye,
      selectOption: $e,
      getValueKey: ee,
      navigateOptions: He,
      dropMenuVisible: Ve,
      reference: Le,
      input: se,
      tooltipRef: pe,
      tags: Te,
      selectWrapper: Oe,
      scrollbar: Fe,
      queryChange: et,
      groupQueryChange: nt,
      handleMouseEnter: je,
      handleMouseLeave: Ie
    } = FM(e, c, t), { focus: xt } = cE(Le), {
      inputWidth: Ge,
      selected: ht,
      inputLength: st,
      filteredOptionsCount: $,
      visible: ve,
      softFocus: Ce,
      selectedLabel: Re,
      hoverIndex: qe,
      query: ze,
      inputHovering: me,
      currentPlaceholder: lt,
      menuVisibleOnFocus: B,
      isOnComposition: ae,
      isSilentBlur: P,
      options: J,
      cachedOptions: ke,
      optionsCount: Ue,
      prefixWidth: ut,
      tagInMultiLine: St
    } = ui(c), It = V(() => {
      const Yt = [n.b()], gn = m(u);
      return gn && Yt.push(n.m(gn)), e.disabled && Yt.push(n.m("disabled")), Yt;
    }), nr = V(() => ({
      maxWidth: `${m(Ge) - 32}px`,
      width: "100%"
    })), Ci = V(() => ({ maxWidth: `${m(Ge) > 123 ? m(Ge) - 123 : m(Ge) - 75}px` }));
    Ot(Oi, cn({
      props: e,
      options: J,
      optionsArray: f,
      cachedOptions: ke,
      optionsCount: Ue,
      filteredOptionsCount: $,
      hoverIndex: qe,
      handleOptionSelect: M,
      onOptionCreate: Q,
      onOptionDestroy: A,
      selectWrapper: Oe,
      selected: ht,
      setSelected: I,
      queryChange: et,
      groupQueryChange: nt
    })), jt(() => {
      c.cachedPlaceHolder = lt.value = e.placeholder || i("el.select.placeholder"), e.multiple && Array.isArray(e.modelValue) && e.modelValue.length > 0 && (lt.value = ""), bi(Oe, g), e.remote && e.multiple && K(), Xe(() => {
        const Yt = Le.value && Le.value.$el;
        if (Yt && (Ge.value = Yt.getBoundingClientRect().width, t.slots.prefix)) {
          const gn = Yt.querySelector(`.${r.e("prefix")}`);
          ut.value = Math.max(gn.getBoundingClientRect().width + 5, 30);
        }
      }), I();
    }), e.multiple && !Array.isArray(e.modelValue) && t.emit(Rt, []), !e.multiple && Array.isArray(e.modelValue) && t.emit(Rt, "");
    const Nr = V(() => {
      var Yt, gn;
      return (gn = (Yt = pe.value) == null ? void 0 : Yt.popperRef) == null ? void 0 : gn.contentRef;
    });
    return {
      tagInMultiLine: St,
      prefixWidth: ut,
      selectSize: u,
      readonly: h,
      handleResize: g,
      collapseTagSize: w,
      debouncedOnInputChange: _,
      debouncedQueryChange: k,
      deletePrevTag: T,
      deleteTag: x,
      deleteSelected: S,
      handleOptionSelect: M,
      scrollToOption: O,
      inputWidth: Ge,
      selected: ht,
      inputLength: st,
      filteredOptionsCount: $,
      visible: ve,
      softFocus: Ce,
      selectedLabel: Re,
      hoverIndex: qe,
      query: ze,
      inputHovering: me,
      currentPlaceholder: lt,
      menuVisibleOnFocus: B,
      isOnComposition: ae,
      isSilentBlur: P,
      options: J,
      resetInputHeight: K,
      managePlaceholder: L,
      showClose: q,
      selectDisabled: N,
      iconComponent: H,
      iconReverse: F,
      showNewOption: le,
      emptyText: re,
      toggleLastOptionHitState: fe,
      resetInputState: _e,
      handleComposition: ne,
      handleMenuEnter: G,
      handleFocus: z,
      blur: U,
      handleBlur: D,
      handleClearClick: X,
      handleClose: oe,
      handleKeydownEscape: ue,
      toggleMenu: ye,
      selectOption: $e,
      getValueKey: ee,
      navigateOptions: He,
      dropMenuVisible: Ve,
      focus: xt,
      reference: Le,
      input: se,
      tooltipRef: pe,
      popperPaneRef: Nr,
      tags: Te,
      selectWrapper: Oe,
      scrollbar: Fe,
      wrapperKls: It,
      selectTagsStyle: nr,
      nsSelect: n,
      tagTextStyle: Ci,
      handleMouseEnter: je,
      handleMouseLeave: Ie
    };
  }
}), VM = ["disabled", "autocomplete"], WM = { style: { height: "100%", display: "flex", "justify-content": "center", "align-items": "center" } };
function KM(e, t, n, r, i, c) {
  const f = Ft("el-tag"), u = Ft("el-tooltip"), h = Ft("el-icon"), g = Ft("el-input"), w = Ft("el-option"), _ = Ft("el-scrollbar"), k = Ft("el-select-menu"), T = ug("click-outside");
  return Et((Y(), he("div", {
    ref: "selectWrapper",
    class: te(e.wrapperKls),
    onMouseenter: t[22] || (t[22] = (...x) => e.handleMouseEnter && e.handleMouseEnter(...x)),
    onMouseleave: t[23] || (t[23] = (...x) => e.handleMouseLeave && e.handleMouseLeave(...x)),
    onClick: t[24] || (t[24] = gt((...x) => e.toggleMenu && e.toggleMenu(...x), ["stop"]))
  }, [
    pt(u, {
      ref: "tooltipRef",
      visible: e.dropMenuVisible,
      placement: e.placement,
      teleported: e.teleported,
      "popper-class": [e.nsSelect.e("popper"), e.popperClass],
      "fallback-placements": ["bottom-start", "top-start", "right", "left"],
      effect: e.effect,
      pure: "",
      trigger: "click",
      transition: `${e.nsSelect.namespace.value}-zoom-in-top`,
      "stop-popper-mouse-event": !1,
      "gpu-acceleration": !1,
      persistent: e.persistent,
      onShow: e.handleMenuEnter
    }, {
      default: Pe(() => [
        xe("div", {
          class: "select-trigger",
          onMouseenter: t[20] || (t[20] = (x) => e.inputHovering = !0),
          onMouseleave: t[21] || (t[21] = (x) => e.inputHovering = !1)
        }, [
          e.multiple ? (Y(), he("div", {
            key: 0,
            ref: "tags",
            class: te(e.nsSelect.e("tags")),
            style: _t(e.selectTagsStyle)
          }, [
            e.collapseTags && e.selected.length ? (Y(), he("span", {
              key: 0,
              class: te([
                e.nsSelect.b("tags-wrapper"),
                { "has-prefix": e.prefixWidth && e.selected.length }
              ])
            }, [
              pt(f, {
                closable: !e.selectDisabled && !e.selected[0].isDisabled,
                size: e.collapseTagSize,
                hit: e.selected[0].hitState,
                type: e.tagType,
                "disable-transitions": "",
                onClose: t[0] || (t[0] = (x) => e.deleteTag(x, e.selected[0]))
              }, {
                default: Pe(() => [
                  xe("span", {
                    class: te(e.nsSelect.e("tags-text")),
                    style: _t(e.tagTextStyle)
                  }, tt(e.selected[0].currentLabel), 7)
                ]),
                _: 1
              }, 8, ["closable", "size", "hit", "type"]),
              e.selected.length > 1 ? (Y(), Se(f, {
                key: 0,
                closable: !1,
                size: e.collapseTagSize,
                type: e.tagType,
                "disable-transitions": ""
              }, {
                default: Pe(() => [
                  e.collapseTagsTooltip ? (Y(), Se(u, {
                    key: 0,
                    disabled: e.dropMenuVisible,
                    "fallback-placements": ["bottom", "top", "right", "left"],
                    effect: e.effect,
                    placement: "bottom",
                    teleported: e.teleported
                  }, {
                    default: Pe(() => [
                      xe("span", {
                        class: te(e.nsSelect.e("tags-text"))
                      }, "+ " + tt(e.selected.length - 1), 3)
                    ]),
                    content: Pe(() => [
                      xe("div", {
                        class: te(e.nsSelect.e("collapse-tags"))
                      }, [
                        (Y(!0), he(yt, null, Yn(e.selected.slice(1), (x, S) => (Y(), he("div", {
                          key: S,
                          class: te(e.nsSelect.e("collapse-tag"))
                        }, [
                          (Y(), Se(f, {
                            key: e.getValueKey(x),
                            class: "in-tooltip",
                            closable: !e.selectDisabled && !x.isDisabled,
                            size: e.collapseTagSize,
                            hit: x.hitState,
                            type: e.tagType,
                            "disable-transitions": "",
                            style: { margin: "2px" },
                            onClose: (M) => e.deleteTag(M, x)
                          }, {
                            default: Pe(() => [
                              xe("span", {
                                class: te(e.nsSelect.e("tags-text")),
                                style: _t({
                                  maxWidth: e.inputWidth - 75 + "px"
                                })
                              }, tt(x.currentLabel), 7)
                            ]),
                            _: 2
                          }, 1032, ["closable", "size", "hit", "type", "onClose"]))
                        ], 2))), 128))
                      ], 2)
                    ]),
                    _: 1
                  }, 8, ["disabled", "effect", "teleported"])) : (Y(), he("span", {
                    key: 1,
                    class: te(e.nsSelect.e("tags-text"))
                  }, "+ " + tt(e.selected.length - 1), 3))
                ]),
                _: 1
              }, 8, ["size", "type"])) : Ee("v-if", !0)
            ], 2)) : Ee("v-if", !0),
            Ee(" <div> "),
            e.collapseTags ? Ee("v-if", !0) : (Y(), Se(ao, {
              key: 1,
              onAfterLeave: e.resetInputHeight
            }, {
              default: Pe(() => [
                xe("span", {
                  class: te([
                    e.nsSelect.b("tags-wrapper"),
                    { "has-prefix": e.prefixWidth && e.selected.length }
                  ])
                }, [
                  (Y(!0), he(yt, null, Yn(e.selected, (x) => (Y(), Se(f, {
                    key: e.getValueKey(x),
                    closable: !e.selectDisabled && !x.isDisabled,
                    size: e.collapseTagSize,
                    hit: x.hitState,
                    type: e.tagType,
                    "disable-transitions": "",
                    onClose: (S) => e.deleteTag(S, x)
                  }, {
                    default: Pe(() => [
                      xe("span", {
                        class: te(e.nsSelect.e("tags-text")),
                        style: _t({ maxWidth: e.inputWidth - 75 + "px" })
                      }, tt(x.currentLabel), 7)
                    ]),
                    _: 2
                  }, 1032, ["closable", "size", "hit", "type", "onClose"]))), 128))
                ], 2)
              ]),
              _: 1
            }, 8, ["onAfterLeave"])),
            Ee(" </div> "),
            e.filterable ? Et((Y(), he("input", {
              key: 2,
              ref: "input",
              "onUpdate:modelValue": t[1] || (t[1] = (x) => e.query = x),
              type: "text",
              class: te([e.nsSelect.e("input"), e.nsSelect.is(e.selectSize)]),
              disabled: e.selectDisabled,
              autocomplete: e.autocomplete,
              style: _t({
                marginLeft: e.prefixWidth && !e.selected.length || e.tagInMultiLine ? `${e.prefixWidth}px` : "",
                flexGrow: 1,
                width: `${e.inputLength / (e.inputWidth - 32)}%`,
                maxWidth: `${e.inputWidth - 42}px`
              }),
              onFocus: t[2] || (t[2] = (...x) => e.handleFocus && e.handleFocus(...x)),
              onBlur: t[3] || (t[3] = (...x) => e.handleBlur && e.handleBlur(...x)),
              onKeyup: t[4] || (t[4] = (...x) => e.managePlaceholder && e.managePlaceholder(...x)),
              onKeydown: [
                t[5] || (t[5] = (...x) => e.resetInputState && e.resetInputState(...x)),
                t[6] || (t[6] = nn(gt((x) => e.navigateOptions("next"), ["prevent"]), ["down"])),
                t[7] || (t[7] = nn(gt((x) => e.navigateOptions("prev"), ["prevent"]), ["up"])),
                t[8] || (t[8] = nn((...x) => e.handleKeydownEscape && e.handleKeydownEscape(...x), ["esc"])),
                t[9] || (t[9] = nn(gt((...x) => e.selectOption && e.selectOption(...x), ["stop", "prevent"]), ["enter"])),
                t[10] || (t[10] = nn((...x) => e.deletePrevTag && e.deletePrevTag(...x), ["delete"])),
                t[11] || (t[11] = nn((x) => e.visible = !1, ["tab"]))
              ],
              onCompositionstart: t[12] || (t[12] = (...x) => e.handleComposition && e.handleComposition(...x)),
              onCompositionupdate: t[13] || (t[13] = (...x) => e.handleComposition && e.handleComposition(...x)),
              onCompositionend: t[14] || (t[14] = (...x) => e.handleComposition && e.handleComposition(...x)),
              onInput: t[15] || (t[15] = (...x) => e.debouncedQueryChange && e.debouncedQueryChange(...x))
            }, null, 46, VM)), [
              [cg, e.query]
            ]) : Ee("v-if", !0)
          ], 6)) : Ee("v-if", !0),
          pt(g, {
            id: e.id,
            ref: "reference",
            modelValue: e.selectedLabel,
            "onUpdate:modelValue": t[16] || (t[16] = (x) => e.selectedLabel = x),
            type: "text",
            placeholder: e.currentPlaceholder,
            name: e.name,
            autocomplete: e.autocomplete,
            size: e.selectSize,
            disabled: e.selectDisabled,
            readonly: e.readonly,
            "validate-event": !1,
            class: te([e.nsSelect.is("focus", e.visible)]),
            tabindex: e.multiple && e.filterable ? -1 : void 0,
            onFocus: e.handleFocus,
            onBlur: e.handleBlur,
            onInput: e.debouncedOnInputChange,
            onPaste: e.debouncedOnInputChange,
            onCompositionstart: e.handleComposition,
            onCompositionupdate: e.handleComposition,
            onCompositionend: e.handleComposition,
            onKeydown: [
              t[17] || (t[17] = nn(gt((x) => e.navigateOptions("next"), ["stop", "prevent"]), ["down"])),
              t[18] || (t[18] = nn(gt((x) => e.navigateOptions("prev"), ["stop", "prevent"]), ["up"])),
              nn(gt(e.selectOption, ["stop", "prevent"]), ["enter"]),
              nn(e.handleKeydownEscape, ["esc"]),
              t[19] || (t[19] = nn((x) => e.visible = !1, ["tab"]))
            ]
          }, dg({
            suffix: Pe(() => [
              e.iconComponent && !e.showClose ? (Y(), Se(h, {
                key: 0,
                class: te([e.nsSelect.e("caret"), e.nsSelect.e("icon"), e.iconReverse])
              }, {
                default: Pe(() => [
                  (Y(), Se($t(e.iconComponent)))
                ]),
                _: 1
              }, 8, ["class"])) : Ee("v-if", !0),
              e.showClose && e.clearIcon ? (Y(), Se(h, {
                key: 1,
                class: te([e.nsSelect.e("caret"), e.nsSelect.e("icon")]),
                onClick: e.handleClearClick
              }, {
                default: Pe(() => [
                  (Y(), Se($t(e.clearIcon)))
                ]),
                _: 1
              }, 8, ["class", "onClick"])) : Ee("v-if", !0)
            ]),
            _: 2
          }, [
            e.$slots.prefix ? {
              name: "prefix",
              fn: Pe(() => [
                xe("div", WM, [
                  Ze(e.$slots, "prefix")
                ])
              ])
            } : void 0
          ]), 1032, ["id", "modelValue", "placeholder", "name", "autocomplete", "size", "disabled", "readonly", "class", "tabindex", "onFocus", "onBlur", "onInput", "onPaste", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onKeydown"])
        ], 32)
      ]),
      content: Pe(() => [
        pt(k, null, {
          default: Pe(() => [
            Et(pt(_, {
              ref: "scrollbar",
              tag: "ul",
              "wrap-class": e.nsSelect.be("dropdown", "wrap"),
              "view-class": e.nsSelect.be("dropdown", "list"),
              class: te([
                e.nsSelect.is("empty", !e.allowCreate && !!e.query && e.filteredOptionsCount === 0)
              ])
            }, {
              default: Pe(() => [
                e.showNewOption ? (Y(), Se(w, {
                  key: 0,
                  value: e.query,
                  created: !0
                }, null, 8, ["value"])) : Ee("v-if", !0),
                Ze(e.$slots, "default")
              ]),
              _: 3
            }, 8, ["wrap-class", "view-class", "class"]), [
              [In, e.options.size > 0 && !e.loading]
            ]),
            e.emptyText && (!e.allowCreate || e.loading || e.allowCreate && e.options.size === 0) ? (Y(), he(yt, { key: 0 }, [
              e.$slots.empty ? Ze(e.$slots, "empty", { key: 0 }) : (Y(), he("p", {
                key: 1,
                class: te(e.nsSelect.be("dropdown", "empty"))
              }, tt(e.emptyText), 3))
            ], 64)) : Ee("v-if", !0)
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["visible", "placement", "teleported", "popper-class", "effect", "transition", "persistent", "onShow"])
  ], 34)), [
    [T, e.handleClose, e.popperPaneRef]
  ]);
}
var qM = /* @__PURE__ */ Je(HM, [["render", KM], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/select.vue"]]);
const UM = Ae({
  name: "ElOptionGroup",
  componentName: "ElOptionGroup",
  props: {
    label: String,
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const t = Ke("select"), n = ce(!0), r = Ut(), i = ce([]);
    Ot(nh, cn({
      ...ui(e)
    }));
    const c = Ye(Oi);
    jt(() => {
      i.value = f(r.subTree);
    });
    const f = (h) => {
      const g = [];
      return Array.isArray(h.children) && h.children.forEach((w) => {
        var _;
        w.type && w.type.name === "ElOption" && w.component && w.component.proxy ? g.push(w.component.proxy) : (_ = w.children) != null && _.length && g.push(...f(w));
      }), g;
    }, { groupQueryChange: u } = Qr(c);
    return be(u, () => {
      n.value = i.value.some((h) => h.visible === !0);
    }, { flush: "post" }), {
      visible: n,
      ns: t
    };
  }
});
function YM(e, t, n, r, i, c) {
  return Et((Y(), he("ul", {
    class: te(e.ns.be("group", "wrap"))
  }, [
    xe("li", {
      class: te(e.ns.be("group", "title"))
    }, tt(e.label), 3),
    xe("li", null, [
      xe("ul", {
        class: te(e.ns.b("group"))
      }, [
        Ze(e.$slots, "default")
      ], 2)
    ])
  ], 2)), [
    [In, e.visible]
  ]);
}
var rh = /* @__PURE__ */ Je(UM, [["render", YM], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/option-group.vue"]]);
Ln(qM, {
  Option: $l,
  OptionGroup: rh
});
sa($l);
sa(rh);
const Zr = "$treeNodeId", Wd = function(e, t) {
  !t || t[Zr] || Object.defineProperty(t, Zr, {
    value: e.id,
    enumerable: !1,
    configurable: !1,
    writable: !1
  });
}, zl = function(e, t) {
  return e ? t[e] : t[Zr];
}, Ys = (e, t, n) => {
  const r = e.value.currentNode;
  n();
  const i = e.value.currentNode;
  r !== i && t("current-change", i ? i.data : null, i);
}, Xs = (e) => {
  let t = !0, n = !0, r = !0;
  for (let i = 0, c = e.length; i < c; i++) {
    const f = e[i];
    (f.checked !== !0 || f.indeterminate) && (t = !1, f.disabled || (r = !1)), (f.checked !== !1 || f.indeterminate) && (n = !1);
  }
  return { all: t, none: n, allWithoutDisable: r, half: !t && !n };
}, ei = function(e) {
  if (e.childNodes.length === 0 || e.loading)
    return;
  const { all: t, none: n, half: r } = Xs(e.childNodes);
  t ? (e.checked = !0, e.indeterminate = !1) : r ? (e.checked = !1, e.indeterminate = !0) : n && (e.checked = !1, e.indeterminate = !1);
  const i = e.parent;
  !i || i.level === 0 || e.store.checkStrictly || ei(i);
}, Ga = function(e, t) {
  const n = e.store.props, r = e.data || {}, i = n[t];
  if (typeof i == "function")
    return i(r, e);
  if (typeof i == "string")
    return r[i];
  if (typeof i > "u") {
    const c = r[t];
    return c === void 0 ? "" : c;
  }
};
let XM = 0;
class _r {
  constructor(t) {
    this.id = XM++, this.text = null, this.checked = !1, this.indeterminate = !1, this.data = null, this.expanded = !1, this.parent = null, this.visible = !0, this.isCurrent = !1, this.canFocus = !1;
    for (const n in t)
      ta(t, n) && (this[n] = t[n]);
    this.level = 0, this.loaded = !1, this.childNodes = [], this.loading = !1, this.parent && (this.level = this.parent.level + 1);
  }
  initialize() {
    const t = this.store;
    if (!t)
      throw new Error("[Node]store is required!");
    t.registerNode(this);
    const n = t.props;
    if (n && typeof n.isLeaf < "u") {
      const c = Ga(this, "isLeaf");
      typeof c == "boolean" && (this.isLeafByUser = c);
    }
    if (t.lazy !== !0 && this.data ? (this.setData(this.data), t.defaultExpandAll && (this.expanded = !0, this.canFocus = !0)) : this.level > 0 && t.lazy && t.defaultExpandAll && this.expand(), Array.isArray(this.data) || Wd(this, this.data), !this.data)
      return;
    const r = t.defaultExpandedKeys, i = t.key;
    i && r && r.includes(this.key) && this.expand(null, t.autoExpandParent), i && t.currentNodeKey !== void 0 && this.key === t.currentNodeKey && (t.currentNode = this, t.currentNode.isCurrent = !0), t.lazy && t._initDefaultCheckedNode(this), this.updateLeafState(), this.parent && (this.level === 1 || this.parent.expanded === !0) && (this.canFocus = !0);
  }
  setData(t) {
    Array.isArray(t) || Wd(this, t), this.data = t, this.childNodes = [];
    let n;
    this.level === 0 && Array.isArray(this.data) ? n = this.data : n = Ga(this, "children") || [];
    for (let r = 0, i = n.length; r < i; r++)
      this.insertChild({ data: n[r] });
  }
  get label() {
    return Ga(this, "label");
  }
  get key() {
    const t = this.store.key;
    return this.data ? this.data[t] : null;
  }
  get disabled() {
    return Ga(this, "disabled");
  }
  get nextSibling() {
    const t = this.parent;
    if (t) {
      const n = t.childNodes.indexOf(this);
      if (n > -1)
        return t.childNodes[n + 1];
    }
    return null;
  }
  get previousSibling() {
    const t = this.parent;
    if (t) {
      const n = t.childNodes.indexOf(this);
      if (n > -1)
        return n > 0 ? t.childNodes[n - 1] : null;
    }
    return null;
  }
  contains(t, n = !0) {
    return (this.childNodes || []).some((r) => r === t || n && r.contains(t));
  }
  remove() {
    const t = this.parent;
    t && t.removeChild(this);
  }
  insertChild(t, n, r) {
    if (!t)
      throw new Error("InsertChild error: child is required.");
    if (!(t instanceof _r)) {
      if (!r) {
        const i = this.getChildren(!0);
        i.includes(t.data) || (typeof n > "u" || n < 0 ? i.push(t.data) : i.splice(n, 0, t.data));
      }
      Object.assign(t, {
        parent: this,
        store: this.store
      }), t = cn(new _r(t)), t instanceof _r && t.initialize();
    }
    t.level = this.level + 1, typeof n > "u" || n < 0 ? this.childNodes.push(t) : this.childNodes.splice(n, 0, t), this.updateLeafState();
  }
  insertBefore(t, n) {
    let r;
    n && (r = this.childNodes.indexOf(n)), this.insertChild(t, r);
  }
  insertAfter(t, n) {
    let r;
    n && (r = this.childNodes.indexOf(n), r !== -1 && (r += 1)), this.insertChild(t, r);
  }
  removeChild(t) {
    const n = this.getChildren() || [], r = n.indexOf(t.data);
    r > -1 && n.splice(r, 1);
    const i = this.childNodes.indexOf(t);
    i > -1 && (this.store && this.store.deregisterNode(t), t.parent = null, this.childNodes.splice(i, 1)), this.updateLeafState();
  }
  removeChildByData(t) {
    let n = null;
    for (let r = 0; r < this.childNodes.length; r++)
      if (this.childNodes[r].data === t) {
        n = this.childNodes[r];
        break;
      }
    n && this.removeChild(n);
  }
  expand(t, n) {
    const r = () => {
      if (n) {
        let i = this.parent;
        for (; i.level > 0; )
          i.expanded = !0, i = i.parent;
      }
      this.expanded = !0, t && t(), this.childNodes.forEach((i) => {
        i.canFocus = !0;
      });
    };
    this.shouldLoadData() ? this.loadData((i) => {
      Array.isArray(i) && (this.checked ? this.setChecked(!0, !0) : this.store.checkStrictly || ei(this), r());
    }) : r();
  }
  doCreateChildren(t, n = {}) {
    t.forEach((r) => {
      this.insertChild(Object.assign({ data: r }, n), void 0, !0);
    });
  }
  collapse() {
    this.expanded = !1, this.childNodes.forEach((t) => {
      t.canFocus = !1;
    });
  }
  shouldLoadData() {
    return this.store.lazy === !0 && this.store.load && !this.loaded;
  }
  updateLeafState() {
    if (this.store.lazy === !0 && this.loaded !== !0 && typeof this.isLeafByUser < "u") {
      this.isLeaf = this.isLeafByUser;
      return;
    }
    const t = this.childNodes;
    if (!this.store.lazy || this.store.lazy === !0 && this.loaded === !0) {
      this.isLeaf = !t || t.length === 0;
      return;
    }
    this.isLeaf = !1;
  }
  setChecked(t, n, r, i) {
    if (this.indeterminate = t === "half", this.checked = t === !0, this.store.checkStrictly)
      return;
    if (!(this.shouldLoadData() && !this.store.checkDescendants)) {
      const { all: f, allWithoutDisable: u } = Xs(this.childNodes);
      !this.isLeaf && !f && u && (this.checked = !1, t = !1);
      const h = () => {
        if (n) {
          const g = this.childNodes;
          for (let k = 0, T = g.length; k < T; k++) {
            const x = g[k];
            i = i || t !== !1;
            const S = x.disabled ? x.checked : i;
            x.setChecked(S, n, !0, i);
          }
          const { half: w, all: _ } = Xs(g);
          _ || (this.checked = _, this.indeterminate = w);
        }
      };
      if (this.shouldLoadData()) {
        this.loadData(() => {
          h(), ei(this);
        }, {
          checked: t !== !1
        });
        return;
      } else
        h();
    }
    const c = this.parent;
    !c || c.level === 0 || r || ei(c);
  }
  getChildren(t = !1) {
    if (this.level === 0)
      return this.data;
    const n = this.data;
    if (!n)
      return null;
    const r = this.store.props;
    let i = "children";
    return r && (i = r.children || "children"), n[i] === void 0 && (n[i] = null), t && !n[i] && (n[i] = []), n[i];
  }
  updateChildren() {
    const t = this.getChildren() || [], n = this.childNodes.map((c) => c.data), r = {}, i = [];
    t.forEach((c, f) => {
      const u = c[Zr];
      u && n.findIndex((h) => h[Zr] === u) >= 0 ? r[u] = { index: f, data: c } : i.push({ index: f, data: c });
    }), this.store.lazy || n.forEach((c) => {
      r[c[Zr]] || this.removeChildByData(c);
    }), i.forEach(({ index: c, data: f }) => {
      this.insertChild({ data: f }, c);
    }), this.updateLeafState();
  }
  loadData(t, n = {}) {
    if (this.store.lazy === !0 && this.store.load && !this.loaded && (!this.loading || Object.keys(n).length)) {
      this.loading = !0;
      const r = (i) => {
        this.childNodes = [], this.doCreateChildren(i, n), this.loaded = !0, this.loading = !1, this.updateLeafState(), t && t.call(this, i);
      };
      this.store.load(this, r);
    } else
      t && t.call(this);
  }
}
class GM {
  constructor(t) {
    this.currentNode = null, this.currentNodeKey = null;
    for (const n in t)
      ta(t, n) && (this[n] = t[n]);
    this.nodesMap = {};
  }
  initialize() {
    if (this.root = new _r({
      data: this.data,
      store: this
    }), this.root.initialize(), this.lazy && this.load) {
      const t = this.load;
      t(this.root, (n) => {
        this.root.doCreateChildren(n), this._initDefaultCheckedNodes();
      });
    } else
      this._initDefaultCheckedNodes();
  }
  filter(t) {
    const n = this.filterNodeMethod, r = this.lazy, i = function(c) {
      const f = c.root ? c.root.childNodes : c.childNodes;
      if (f.forEach((u) => {
        u.visible = n.call(u, t, u.data, u), i(u);
      }), !c.visible && f.length) {
        let u = !0;
        u = !f.some((h) => h.visible), c.root ? c.root.visible = u === !1 : c.visible = u === !1;
      }
      t && c.visible && !c.isLeaf && !r && c.expand();
    };
    i(this);
  }
  setData(t) {
    t !== this.root.data ? (this.root.setData(t), this._initDefaultCheckedNodes()) : this.root.updateChildren();
  }
  getNode(t) {
    if (t instanceof _r)
      return t;
    const n = dn(t) ? zl(this.key, t) : t;
    return this.nodesMap[n] || null;
  }
  insertBefore(t, n) {
    const r = this.getNode(n);
    r.parent.insertBefore({ data: t }, r);
  }
  insertAfter(t, n) {
    const r = this.getNode(n);
    r.parent.insertAfter({ data: t }, r);
  }
  remove(t) {
    const n = this.getNode(t);
    n && n.parent && (n === this.currentNode && (this.currentNode = null), n.parent.removeChild(n));
  }
  append(t, n) {
    const r = n ? this.getNode(n) : this.root;
    r && r.insertChild({ data: t });
  }
  _initDefaultCheckedNodes() {
    const t = this.defaultCheckedKeys || [], n = this.nodesMap;
    t.forEach((r) => {
      const i = n[r];
      i && i.setChecked(!0, !this.checkStrictly);
    });
  }
  _initDefaultCheckedNode(t) {
    (this.defaultCheckedKeys || []).includes(t.key) && t.setChecked(!0, !this.checkStrictly);
  }
  setDefaultCheckedKey(t) {
    t !== this.defaultCheckedKeys && (this.defaultCheckedKeys = t, this._initDefaultCheckedNodes());
  }
  registerNode(t) {
    const n = this.key;
    !t || !t.data || (n ? t.key !== void 0 && (this.nodesMap[t.key] = t) : this.nodesMap[t.id] = t);
  }
  deregisterNode(t) {
    !this.key || !t || !t.data || (t.childNodes.forEach((n) => {
      this.deregisterNode(n);
    }), delete this.nodesMap[t.key]);
  }
  getCheckedNodes(t = !1, n = !1) {
    const r = [], i = function(c) {
      (c.root ? c.root.childNodes : c.childNodes).forEach((f) => {
        (f.checked || n && f.indeterminate) && (!t || t && f.isLeaf) && r.push(f.data), i(f);
      });
    };
    return i(this), r;
  }
  getCheckedKeys(t = !1) {
    return this.getCheckedNodes(t).map((n) => (n || {})[this.key]);
  }
  getHalfCheckedNodes() {
    const t = [], n = function(r) {
      (r.root ? r.root.childNodes : r.childNodes).forEach((i) => {
        i.indeterminate && t.push(i.data), n(i);
      });
    };
    return n(this), t;
  }
  getHalfCheckedKeys() {
    return this.getHalfCheckedNodes().map((t) => (t || {})[this.key]);
  }
  _getAllNodes() {
    const t = [], n = this.nodesMap;
    for (const r in n)
      ta(n, r) && t.push(n[r]);
    return t;
  }
  updateChildren(t, n) {
    const r = this.nodesMap[t];
    if (!r)
      return;
    const i = r.childNodes;
    for (let c = i.length - 1; c >= 0; c--) {
      const f = i[c];
      this.remove(f.data);
    }
    for (let c = 0, f = n.length; c < f; c++) {
      const u = n[c];
      this.append(u, r.data);
    }
  }
  _setCheckedKeys(t, n = !1, r) {
    const i = this._getAllNodes().sort((u, h) => h.level - u.level), c = /* @__PURE__ */ Object.create(null), f = Object.keys(r);
    i.forEach((u) => u.setChecked(!1, !1));
    for (let u = 0, h = i.length; u < h; u++) {
      const g = i[u], w = g.data[t].toString();
      if (!f.includes(w)) {
        g.checked && !c[w] && g.setChecked(!1, !1);
        continue;
      }
      let _ = g.parent;
      for (; _ && _.level > 0; )
        c[_.data[t]] = !0, _ = _.parent;
      if (g.isLeaf || this.checkStrictly) {
        g.setChecked(!0, !1);
        continue;
      }
      if (g.setChecked(!0, !0), n) {
        g.setChecked(!1, !1);
        const k = function(T) {
          T.childNodes.forEach((x) => {
            x.isLeaf || x.setChecked(!1, !1), k(x);
          });
        };
        k(g);
      }
    }
  }
  setCheckedNodes(t, n = !1) {
    const r = this.key, i = {};
    t.forEach((c) => {
      i[(c || {})[r]] = !0;
    }), this._setCheckedKeys(r, n, i);
  }
  setCheckedKeys(t, n = !1) {
    this.defaultCheckedKeys = t;
    const r = this.key, i = {};
    t.forEach((c) => {
      i[c] = !0;
    }), this._setCheckedKeys(r, n, i);
  }
  setDefaultExpandedKeys(t) {
    t = t || [], this.defaultExpandedKeys = t, t.forEach((n) => {
      const r = this.getNode(n);
      r && r.expand(null, this.autoExpandParent);
    });
  }
  setChecked(t, n, r) {
    const i = this.getNode(t);
    i && i.setChecked(!!n, r);
  }
  getCurrentNode() {
    return this.currentNode;
  }
  setCurrentNode(t) {
    const n = this.currentNode;
    n && (n.isCurrent = !1), this.currentNode = t, this.currentNode.isCurrent = !0;
  }
  setUserCurrentNode(t, n = !0) {
    const r = t[this.key], i = this.nodesMap[r];
    this.setCurrentNode(i), n && this.currentNode.level > 1 && this.currentNode.parent.expand(null, !0);
  }
  setCurrentNodeKey(t, n = !0) {
    if (t == null) {
      this.currentNode && (this.currentNode.isCurrent = !1), this.currentNode = null;
      return;
    }
    const r = this.getNode(t);
    r && (this.setCurrentNode(r), n && this.currentNode.level > 1 && this.currentNode.parent.expand(null, !0));
  }
}
const ZM = Ae({
  name: "ElTreeNodeContent",
  props: {
    node: {
      type: Object,
      required: !0
    },
    renderContent: Function
  },
  setup(e) {
    const t = Ke("tree"), n = Ye("NodeInstance"), r = Ye("RootTree");
    return () => {
      const i = e.node, { data: c, store: f } = i;
      return e.renderContent ? e.renderContent(an, { _self: n, node: i, data: c, store: f }) : r.ctx.slots.default ? r.ctx.slots.default({ node: i, data: c }) : an("span", { class: t.be("node", "label") }, [i.label]);
    };
  }
});
var QM = /* @__PURE__ */ Je(ZM, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tree/src/tree-node-content.vue"]]);
function oh(e) {
  const t = Ye("TreeNodeMap", null), n = {
    treeNodeExpand: (r) => {
      e.node !== r && e.node.collapse();
    },
    children: []
  };
  return t && t.children.push(n), Ot("TreeNodeMap", n), {
    broadcastExpanded: (r) => {
      if (e.accordion)
        for (const i of n.children)
          i.treeNodeExpand(r);
    }
  };
}
const ah = Symbol("dragEvents");
function JM({ props: e, ctx: t, el$: n, dropIndicator$: r, store: i }) {
  const c = Ke("tree"), f = ce({
    showDropIndicator: !1,
    draggingNode: null,
    dropNode: null,
    allowDrop: !0,
    dropType: null
  });
  return Ot(ah, {
    treeNodeDragStart: ({ event: u, treeNode: h }) => {
      if (typeof e.allowDrag == "function" && !e.allowDrag(h.node))
        return u.preventDefault(), !1;
      u.dataTransfer.effectAllowed = "move";
      try {
        u.dataTransfer.setData("text/plain", "");
      } catch {
      }
      f.value.draggingNode = h, t.emit("node-drag-start", h.node, u);
    },
    treeNodeDragOver: ({ event: u, treeNode: h }) => {
      const g = h, w = f.value.dropNode;
      w && w !== g && hs(w.$el, c.is("drop-inner"));
      const _ = f.value.draggingNode;
      if (!_ || !g)
        return;
      let k = !0, T = !0, x = !0, S = !0;
      typeof e.allowDrop == "function" && (k = e.allowDrop(_.node, g.node, "prev"), S = T = e.allowDrop(_.node, g.node, "inner"), x = e.allowDrop(_.node, g.node, "next")), u.dataTransfer.dropEffect = T || k || x ? "move" : "none", (k || T || x) && w !== g && (w && t.emit("node-drag-leave", _.node, w.node, u), t.emit("node-drag-enter", _.node, g.node, u)), (k || T || x) && (f.value.dropNode = g), g.node.nextSibling === _.node && (x = !1), g.node.previousSibling === _.node && (k = !1), g.node.contains(_.node, !1) && (T = !1), (_.node === g.node || _.node.contains(g.node)) && (k = !1, T = !1, x = !1);
      const M = g.$el.getBoundingClientRect(), O = n.value.getBoundingClientRect();
      let I;
      const K = k ? T ? 0.25 : x ? 0.45 : 1 : -1, L = x ? T ? 0.75 : k ? 0.55 : 0 : 1;
      let q = -9999;
      const N = u.clientY - M.top;
      N < M.height * K ? I = "before" : N > M.height * L ? I = "after" : T ? I = "inner" : I = "none";
      const H = g.$el.querySelector(`.${c.be("node", "expand-icon")}`).getBoundingClientRect(), F = r.value;
      I === "before" ? q = H.top - O.top : I === "after" && (q = H.bottom - O.top), F.style.top = `${q}px`, F.style.left = `${H.right - O.left}px`, I === "inner" ? L2(g.$el, c.is("drop-inner")) : hs(g.$el, c.is("drop-inner")), f.value.showDropIndicator = I === "before" || I === "after", f.value.allowDrop = f.value.showDropIndicator || S, f.value.dropType = I, t.emit("node-drag-over", _.node, g.node, u);
    },
    treeNodeDragEnd: (u) => {
      const { draggingNode: h, dropType: g, dropNode: w } = f.value;
      if (u.preventDefault(), u.dataTransfer.dropEffect = "move", h && w) {
        const _ = { data: h.node.data };
        g !== "none" && h.node.remove(), g === "before" ? w.node.parent.insertBefore(_, w.node) : g === "after" ? w.node.parent.insertAfter(_, w.node) : g === "inner" && w.node.insertChild(_), g !== "none" && i.value.registerNode(_), hs(w.$el, c.is("drop-inner")), t.emit("node-drag-end", h.node, w.node, g, u), g !== "none" && t.emit("node-drop", h.node, w.node, g, u);
      }
      h && !w && t.emit("node-drag-end", h.node, null, g, u), f.value.showDropIndicator = !1, f.value.draggingNode = null, f.value.dropNode = null, f.value.allowDrop = !0;
    }
  }), {
    dragState: f
  };
}
const eP = Ae({
  name: "ElTreeNode",
  components: {
    ElCollapseTransition: IM,
    ElCheckbox: EM,
    NodeContent: QM,
    ElIcon: Mt,
    Loading: ml
  },
  props: {
    node: {
      type: _r,
      default: () => ({})
    },
    props: {
      type: Object,
      default: () => ({})
    },
    accordion: Boolean,
    renderContent: Function,
    renderAfterExpand: Boolean,
    showCheckbox: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["node-expand"],
  setup(e, t) {
    const n = Ke("tree"), { broadcastExpanded: r } = oh(e), i = Ye("RootTree"), c = ce(!1), f = ce(!1), u = ce(null), h = ce(null), g = ce(null), w = Ye(ah), _ = Ut();
    Ot("NodeInstance", _), i || Pt("Tree", "Can not find node's tree."), e.node.expanded && (c.value = !0, f.value = !0);
    const k = i.props.children || "children";
    be(() => {
      const L = e.node.data[k];
      return L && [...L];
    }, () => {
      e.node.updateChildren();
    }), be(() => e.node.indeterminate, (L) => {
      S(e.node.checked, L);
    }), be(() => e.node.checked, (L) => {
      S(L, e.node.indeterminate);
    }), be(() => e.node.expanded, (L) => {
      Xe(() => c.value = L), L && (f.value = !0);
    });
    const T = (L) => zl(i.props.nodeKey, L.data), x = (L) => {
      const q = e.props.class;
      if (!q)
        return {};
      let N;
      if (qt(q)) {
        const { data: H } = L;
        N = q(H, L);
      } else
        N = q;
      return un(N) ? { [N]: !0 } : N;
    }, S = (L, q) => {
      (u.value !== L || h.value !== q) && i.ctx.emit("check-change", e.node.data, L, q), u.value = L, h.value = q;
    }, M = (L) => {
      Ys(i.store, i.ctx.emit, () => i.store.value.setCurrentNode(e.node)), i.currentNode.value = e.node, i.props.expandOnClickNode && I(), i.props.checkOnClickNode && !e.node.disabled && K(null, {
        target: { checked: !e.node.checked }
      }), i.ctx.emit("node-click", e.node.data, e.node, _, L);
    }, O = (L) => {
      i.instance.vnode.props.onNodeContextmenu && (L.stopPropagation(), L.preventDefault()), i.ctx.emit("node-contextmenu", L, e.node.data, e.node, _);
    }, I = () => {
      e.node.isLeaf || (c.value ? (i.ctx.emit("node-collapse", e.node.data, e.node, _), e.node.collapse()) : (e.node.expand(), t.emit("node-expand", e.node.data, e.node, _)));
    }, K = (L, q) => {
      e.node.setChecked(q.target.checked, !i.props.checkStrictly), Xe(() => {
        const N = i.store.value;
        i.ctx.emit("check", e.node.data, {
          checkedNodes: N.getCheckedNodes(),
          checkedKeys: N.getCheckedKeys(),
          halfCheckedNodes: N.getHalfCheckedNodes(),
          halfCheckedKeys: N.getHalfCheckedKeys()
        });
      });
    };
    return {
      ns: n,
      node$: g,
      tree: i,
      expanded: c,
      childNodeRendered: f,
      oldChecked: u,
      oldIndeterminate: h,
      getNodeKey: T,
      getNodeClass: x,
      handleSelectChange: S,
      handleClick: M,
      handleContextMenu: O,
      handleExpandIconClick: I,
      handleCheckChange: K,
      handleChildNodeExpand: (L, q, N) => {
        r(q), i.ctx.emit("node-expand", L, q, N);
      },
      handleDragStart: (L) => {
        i.props.draggable && w.treeNodeDragStart({ event: L, treeNode: e });
      },
      handleDragOver: (L) => {
        L.preventDefault(), i.props.draggable && w.treeNodeDragOver({
          event: L,
          treeNode: { $el: g.value, node: e.node }
        });
      },
      handleDrop: (L) => {
        L.preventDefault();
      },
      handleDragEnd: (L) => {
        i.props.draggable && w.treeNodeDragEnd(L);
      },
      CaretRight: uk
    };
  }
}), tP = ["aria-expanded", "aria-disabled", "aria-checked", "draggable", "data-key"], nP = ["aria-expanded"];
function rP(e, t, n, r, i, c) {
  const f = Ft("el-icon"), u = Ft("el-checkbox"), h = Ft("loading"), g = Ft("node-content"), w = Ft("el-tree-node"), _ = Ft("el-collapse-transition");
  return Et((Y(), he("div", {
    ref: "node$",
    class: te([
      e.ns.b("node"),
      e.ns.is("expanded", e.expanded),
      e.ns.is("current", e.node.isCurrent),
      e.ns.is("hidden", !e.node.visible),
      e.ns.is("focusable", !e.node.disabled),
      e.ns.is("checked", !e.node.disabled && e.node.checked),
      e.getNodeClass(e.node)
    ]),
    role: "treeitem",
    tabindex: "-1",
    "aria-expanded": e.expanded,
    "aria-disabled": e.node.disabled,
    "aria-checked": e.node.checked,
    draggable: e.tree.props.draggable,
    "data-key": e.getNodeKey(e.node),
    onClick: t[1] || (t[1] = gt((...k) => e.handleClick && e.handleClick(...k), ["stop"])),
    onContextmenu: t[2] || (t[2] = (...k) => e.handleContextMenu && e.handleContextMenu(...k)),
    onDragstart: t[3] || (t[3] = gt((...k) => e.handleDragStart && e.handleDragStart(...k), ["stop"])),
    onDragover: t[4] || (t[4] = gt((...k) => e.handleDragOver && e.handleDragOver(...k), ["stop"])),
    onDragend: t[5] || (t[5] = gt((...k) => e.handleDragEnd && e.handleDragEnd(...k), ["stop"])),
    onDrop: t[6] || (t[6] = gt((...k) => e.handleDrop && e.handleDrop(...k), ["stop"]))
  }, [
    xe("div", {
      class: te(e.ns.be("node", "content")),
      style: _t({ paddingLeft: (e.node.level - 1) * e.tree.props.indent + "px" })
    }, [
      e.tree.props.icon || e.CaretRight ? (Y(), Se(f, {
        key: 0,
        class: te([
          e.ns.be("node", "expand-icon"),
          e.ns.is("leaf", e.node.isLeaf),
          {
            expanded: !e.node.isLeaf && e.expanded
          }
        ]),
        onClick: gt(e.handleExpandIconClick, ["stop"])
      }, {
        default: Pe(() => [
          (Y(), Se($t(e.tree.props.icon || e.CaretRight)))
        ]),
        _: 1
      }, 8, ["class", "onClick"])) : Ee("v-if", !0),
      e.showCheckbox ? (Y(), Se(u, {
        key: 1,
        "model-value": e.node.checked,
        indeterminate: e.node.indeterminate,
        disabled: !!e.node.disabled,
        onClick: t[0] || (t[0] = gt(() => {
        }, ["stop"])),
        onChange: e.handleCheckChange
      }, null, 8, ["model-value", "indeterminate", "disabled", "onChange"])) : Ee("v-if", !0),
      e.node.loading ? (Y(), Se(f, {
        key: 2,
        class: te([e.ns.be("node", "loading-icon"), e.ns.is("loading")])
      }, {
        default: Pe(() => [
          pt(h)
        ]),
        _: 1
      }, 8, ["class"])) : Ee("v-if", !0),
      pt(g, {
        node: e.node,
        "render-content": e.renderContent
      }, null, 8, ["node", "render-content"])
    ], 6),
    pt(_, null, {
      default: Pe(() => [
        !e.renderAfterExpand || e.childNodeRendered ? Et((Y(), he("div", {
          key: 0,
          class: te(e.ns.be("node", "children")),
          role: "group",
          "aria-expanded": e.expanded
        }, [
          (Y(!0), he(yt, null, Yn(e.node.childNodes, (k) => (Y(), Se(w, {
            key: e.getNodeKey(k),
            "render-content": e.renderContent,
            "render-after-expand": e.renderAfterExpand,
            "show-checkbox": e.showCheckbox,
            node: k,
            accordion: e.accordion,
            props: e.props,
            onNodeExpand: e.handleChildNodeExpand
          }, null, 8, ["render-content", "render-after-expand", "show-checkbox", "node", "accordion", "props", "onNodeExpand"]))), 128))
        ], 10, nP)), [
          [In, e.expanded]
        ]) : Ee("v-if", !0)
      ]),
      _: 1
    })
  ], 42, tP)), [
    [In, e.node.visible]
  ]);
}
var oP = /* @__PURE__ */ Je(eP, [["render", rP], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/tree/src/tree-node.vue"]]);
function aP({ el$: e }, t) {
  const n = Ke("tree"), r = Zn([]), i = Zn([]);
  jt(() => {
    c();
  }), Ud(() => {
    r.value = Array.from(e.value.querySelectorAll("[role=treeitem]")), i.value = Array.from(e.value.querySelectorAll("input[type=checkbox]"));
  }), be(i, (f) => {
    f.forEach((u) => {
      u.setAttribute("tabindex", "-1");
    });
  }), wr(e, "keydown", (f) => {
    const u = f.target;
    if (!u.className.includes(n.b("node")))
      return;
    const h = f.code;
    r.value = Array.from(e.value.querySelectorAll(`.${n.is("focusable")}[role=treeitem]`));
    const g = r.value.indexOf(u);
    let w;
    if ([wt.up, wt.down].includes(h)) {
      if (f.preventDefault(), h === wt.up) {
        w = g === -1 ? 0 : g !== 0 ? g - 1 : r.value.length - 1;
        const k = w;
        for (; !t.value.getNode(r.value[w].dataset.key).canFocus; ) {
          if (w--, w === k) {
            w = -1;
            break;
          }
          w < 0 && (w = r.value.length - 1);
        }
      } else {
        w = g === -1 ? 0 : g < r.value.length - 1 ? g + 1 : 0;
        const k = w;
        for (; !t.value.getNode(r.value[w].dataset.key).canFocus; ) {
          if (w++, w === k) {
            w = -1;
            break;
          }
          w >= r.value.length && (w = 0);
        }
      }
      w !== -1 && r.value[w].focus();
    }
    [wt.left, wt.right].includes(h) && (f.preventDefault(), u.click());
    const _ = u.querySelector('[type="checkbox"]');
    [wt.enter, wt.space].includes(h) && _ && (f.preventDefault(), _.click());
  });
  const c = () => {
    var f;
    r.value = Array.from(e.value.querySelectorAll(`.${n.is("focusable")}[role=treeitem]`)), i.value = Array.from(e.value.querySelectorAll("input[type=checkbox]"));
    const u = e.value.querySelectorAll(`.${n.is("checked")}[role=treeitem]`);
    if (u.length) {
      u[0].setAttribute("tabindex", "0");
      return;
    }
    (f = r.value[0]) == null || f.setAttribute("tabindex", "0");
  };
}
const iP = Ae({
  name: "ElTree",
  components: { ElTreeNode: oP },
  props: {
    data: {
      type: Array,
      default: () => []
    },
    emptyText: {
      type: String
    },
    renderAfterExpand: {
      type: Boolean,
      default: !0
    },
    nodeKey: String,
    checkStrictly: Boolean,
    defaultExpandAll: Boolean,
    expandOnClickNode: {
      type: Boolean,
      default: !0
    },
    checkOnClickNode: Boolean,
    checkDescendants: {
      type: Boolean,
      default: !1
    },
    autoExpandParent: {
      type: Boolean,
      default: !0
    },
    defaultCheckedKeys: Array,
    defaultExpandedKeys: Array,
    currentNodeKey: [String, Number],
    renderContent: Function,
    showCheckbox: {
      type: Boolean,
      default: !1
    },
    draggable: {
      type: Boolean,
      default: !1
    },
    allowDrag: Function,
    allowDrop: Function,
    props: {
      type: Object,
      default: () => ({
        children: "children",
        label: "label",
        disabled: "disabled"
      })
    },
    lazy: {
      type: Boolean,
      default: !1
    },
    highlightCurrent: Boolean,
    load: Function,
    filterNodeMethod: Function,
    accordion: Boolean,
    indent: {
      type: Number,
      default: 18
    },
    icon: {
      type: Tr
    }
  },
  emits: [
    "check-change",
    "current-change",
    "node-click",
    "node-contextmenu",
    "node-collapse",
    "node-expand",
    "check",
    "node-drag-start",
    "node-drag-end",
    "node-drop",
    "node-drag-leave",
    "node-drag-enter",
    "node-drag-over"
  ],
  setup(e, t) {
    const { t: n } = zr(), r = Ke("tree"), i = ce(new GM({
      key: e.nodeKey,
      data: e.data,
      lazy: e.lazy,
      props: e.props,
      load: e.load,
      currentNodeKey: e.currentNodeKey,
      checkStrictly: e.checkStrictly,
      checkDescendants: e.checkDescendants,
      defaultCheckedKeys: e.defaultCheckedKeys,
      defaultExpandedKeys: e.defaultExpandedKeys,
      autoExpandParent: e.autoExpandParent,
      defaultExpandAll: e.defaultExpandAll,
      filterNodeMethod: e.filterNodeMethod
    }));
    i.value.initialize();
    const c = ce(i.value.root), f = ce(null), u = ce(null), h = ce(null), { broadcastExpanded: g } = oh(e), { dragState: w } = JM({
      props: e,
      ctx: t,
      el$: u,
      dropIndicator$: h,
      store: i
    });
    aP({ el$: u }, i);
    const _ = V(() => {
      const { childNodes: z } = c.value;
      return !z || z.length === 0 || z.every(({ visible: U }) => !U);
    });
    be(() => e.currentNodeKey, (z) => {
      i.value.setCurrentNodeKey(z);
    }), be(() => e.defaultCheckedKeys, (z) => {
      i.value.setDefaultCheckedKey(z);
    }), be(() => e.defaultExpandedKeys, (z) => {
      i.value.setDefaultExpandedKeys(z);
    }), be(() => e.data, (z) => {
      i.value.setData(z);
    }, { deep: !0 }), be(() => e.checkStrictly, (z) => {
      i.value.checkStrictly = z;
    });
    const k = (z) => {
      if (!e.filterNodeMethod)
        throw new Error("[Tree] filterNodeMethod is required when filter");
      i.value.filter(z);
    }, T = (z) => zl(e.nodeKey, z.data), x = (z) => {
      if (!e.nodeKey)
        throw new Error("[Tree] nodeKey is required in getNodePath");
      const U = i.value.getNode(z);
      if (!U)
        return [];
      const D = [U.data];
      let X = U.parent;
      for (; X && X !== c.value; )
        D.push(X.data), X = X.parent;
      return D.reverse();
    }, S = (z, U) => i.value.getCheckedNodes(z, U), M = (z) => i.value.getCheckedKeys(z), O = () => {
      const z = i.value.getCurrentNode();
      return z ? z.data : null;
    }, I = () => {
      if (!e.nodeKey)
        throw new Error("[Tree] nodeKey is required in getCurrentKey");
      const z = O();
      return z ? z[e.nodeKey] : null;
    }, K = (z, U) => {
      if (!e.nodeKey)
        throw new Error("[Tree] nodeKey is required in setCheckedNodes");
      i.value.setCheckedNodes(z, U);
    }, L = (z, U) => {
      if (!e.nodeKey)
        throw new Error("[Tree] nodeKey is required in setCheckedKeys");
      i.value.setCheckedKeys(z, U);
    }, q = (z, U, D) => {
      i.value.setChecked(z, U, D);
    }, N = () => i.value.getHalfCheckedNodes(), H = () => i.value.getHalfCheckedKeys(), F = (z, U = !0) => {
      if (!e.nodeKey)
        throw new Error("[Tree] nodeKey is required in setCurrentNode");
      Ys(i, t.emit, () => i.value.setUserCurrentNode(z, U));
    }, le = (z, U = !0) => {
      if (!e.nodeKey)
        throw new Error("[Tree] nodeKey is required in setCurrentKey");
      Ys(i, t.emit, () => i.value.setCurrentNodeKey(z, U));
    }, re = (z) => i.value.getNode(z), fe = (z) => {
      i.value.remove(z);
    }, _e = (z, U) => {
      i.value.append(z, U);
    }, ne = (z, U) => {
      i.value.insertBefore(z, U);
    }, Q = (z, U) => {
      i.value.insertAfter(z, U);
    }, A = (z, U, D) => {
      g(U), t.emit("node-expand", z, U, D);
    }, G = (z, U) => {
      if (!e.nodeKey)
        throw new Error("[Tree] nodeKey is required in updateKeyChild");
      i.value.updateChildren(z, U);
    };
    return Ot("RootTree", {
      ctx: t,
      props: e,
      store: i,
      root: c,
      currentNode: f,
      instance: Ut()
    }), Ot(oa, void 0), {
      ns: r,
      store: i,
      root: c,
      currentNode: f,
      dragState: w,
      el$: u,
      dropIndicator$: h,
      isEmpty: _,
      filter: k,
      getNodeKey: T,
      getNodePath: x,
      getCheckedNodes: S,
      getCheckedKeys: M,
      getCurrentNode: O,
      getCurrentKey: I,
      setCheckedNodes: K,
      setCheckedKeys: L,
      setChecked: q,
      getHalfCheckedNodes: N,
      getHalfCheckedKeys: H,
      setCurrentNode: F,
      setCurrentKey: le,
      t: n,
      getNode: re,
      remove: fe,
      append: _e,
      insertBefore: ne,
      insertAfter: Q,
      handleNodeExpand: A,
      updateKeyChildren: G
    };
  }
});
function sP(e, t, n, r, i, c) {
  var f;
  const u = Ft("el-tree-node");
  return Y(), he("div", {
    ref: "el$",
    class: te([
      e.ns.b(),
      e.ns.is("dragging", !!e.dragState.draggingNode),
      e.ns.is("drop-not-allow", !e.dragState.allowDrop),
      e.ns.is("drop-inner", e.dragState.dropType === "inner"),
      { [e.ns.m("highlight-current")]: e.highlightCurrent }
    ]),
    role: "tree"
  }, [
    (Y(!0), he(yt, null, Yn(e.root.childNodes, (h) => (Y(), Se(u, {
      key: e.getNodeKey(h),
      node: h,
      props: e.props,
      accordion: e.accordion,
      "render-after-expand": e.renderAfterExpand,
      "show-checkbox": e.showCheckbox,
      "render-content": e.renderContent,
      onNodeExpand: e.handleNodeExpand
    }, null, 8, ["node", "props", "accordion", "render-after-expand", "show-checkbox", "render-content", "onNodeExpand"]))), 128)),
    e.isEmpty ? (Y(), he("div", {
      key: 0,
      class: te(e.ns.e("empty-block"))
    }, [
      xe("span", {
        class: te(e.ns.e("empty-text"))
      }, tt((f = e.emptyText) != null ? f : e.t("el.tree.emptyText")), 3)
    ], 2)) : Ee("v-if", !0),
    Et(xe("div", {
      ref: "dropIndicator$",
      class: te(e.ns.e("drop-indicator"))
    }, null, 2), [
      [In, e.dragState.showDropIndicator]
    ])
  ], 2);
}
var Es = /* @__PURE__ */ Je(iP, [["render", sP], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/tree/src/tree.vue"]]);
Es.install = (e) => {
  e.component(Es.name, Es);
};
export {
  pP as _engine
};
//# sourceMappingURL=entry.js.map
