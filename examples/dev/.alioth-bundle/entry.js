var Gd = Object.defineProperty;
var Xd = (e, t, n) => t in e ? Gd(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var cl = (e, t, n) => (Xd(e, typeof t != "symbol" ? t + "" : t, n), n);
import { Global as Zd, Tag as Qd, Init as Jd, createFilter as ep, useV as tp } from "http://localhost:4010/phecda-vue.mjs";
import { defineComponent as ne, h as Ut, nextTick as me, resolveComponent as ct, TransitionGroup as np, openBlock as A, createElementBlock as G, createElementVNode as Q, renderSlot as _e, onBeforeUnmount as Rt, reactive as dn, ref as V, onMounted as at, onBeforeMount as wu, render as xu, computed as O, mergeProps as jt, unref as c, useAttrs as rp, useSlots as Go, shallowRef as Tn, watch as ae, toRef as qt, withDirectives as Je, createCommentVNode as re, Fragment as Ve, normalizeClass as j, createBlock as te, withCtx as oe, resolveDynamicComponent as st, withModifiers as je, createVNode as Ne, toDisplayString as ke, normalizeStyle as Qe, vShow as ln, provide as et, onUpdated as _u, inject as Se, cloneVNode as op, Text as Su, Comment as ap, Teleport as ip, Transition as Er, readonly as lp, onDeactivated as sp, isRef as Gr, vModelCheckbox as Lo, createTextVNode as Rn, toRefs as Xo, toHandlers as up, getCurrentInstance as St, toRaw as gr, warn as cp, onUnmounted as dp, triggerRef as $r, getCurrentScope as pp, onScopeDispose as fp, resolveDirective as hp, renderList as Sn, withKeys as $t, vModelText as vp, createSlots as mp } from "http://localhost:4010/vue.mjs";
import { Global as Qn, Tag as Jn, Watcher as gp, Init as Zo } from "http://localhost:4010/phecda-vue.mjs";
/**!
 * Sortable 1.14.0
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function dl(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Xt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? dl(Object(n), !0).forEach(function(r) {
      bp(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : dl(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function To(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? To = function(t) {
    return typeof t;
  } : To = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, To(e);
}
function bp(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function sn() {
  return sn = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, sn.apply(this, arguments);
}
function yp(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, a;
  for (a = 0; a < r.length; a++)
    o = r[a], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function wp(e, t) {
  if (e == null)
    return {};
  var n = yp(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (o = 0; o < a.length; o++)
      r = a[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
var xp = "1.14.0";
function an(e) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(e);
}
var pn = an(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), uo = an(/Edge/i), pl = an(/firefox/i), Fr = an(/safari/i) && !an(/chrome/i) && !an(/android/i), Cu = an(/iP(ad|od|hone)/i), _p = an(/chrome/i) && an(/android/i), Eu = {
  capture: !1,
  passive: !1
};
function Ee(e, t, n) {
  e.addEventListener(t, n, !pn && Eu);
}
function xe(e, t, n) {
  e.removeEventListener(t, n, !pn && Eu);
}
function jo(e, t) {
  if (t) {
    if (t[0] === ">" && (t = t.substring(1)), e)
      try {
        if (e.matches)
          return e.matches(t);
        if (e.msMatchesSelector)
          return e.msMatchesSelector(t);
        if (e.webkitMatchesSelector)
          return e.webkitMatchesSelector(t);
      } catch {
        return !1;
      }
    return !1;
  }
}
function Sp(e) {
  return e.host && e !== document && e.host.nodeType ? e.host : e.parentNode;
}
function Wt(e, t, n, r) {
  if (e) {
    n = n || document;
    do {
      if (t != null && (t[0] === ">" ? e.parentNode === n && jo(e, t) : jo(e, t)) || r && e === n)
        return e;
      if (e === n)
        break;
    } while (e = Sp(e));
  }
  return null;
}
var fl = /\s+/g;
function bt(e, t, n) {
  if (e && t)
    if (e.classList)
      e.classList[n ? "add" : "remove"](t);
    else {
      var r = (" " + e.className + " ").replace(fl, " ").replace(" " + t + " ", " ");
      e.className = (r + (n ? " " + t : "")).replace(fl, " ");
    }
}
function le(e, t, n) {
  var r = e && e.style;
  if (r) {
    if (n === void 0)
      return document.defaultView && document.defaultView.getComputedStyle ? n = document.defaultView.getComputedStyle(e, "") : e.currentStyle && (n = e.currentStyle), t === void 0 ? n : n[t];
    !(t in r) && t.indexOf("webkit") === -1 && (t = "-webkit-" + t), r[t] = n + (typeof n == "string" ? "" : "px");
  }
}
function hr(e, t) {
  var n = "";
  if (typeof e == "string")
    n = e;
  else
    do {
      var r = le(e, "transform");
      r && r !== "none" && (n = r + " " + n);
    } while (!t && (e = e.parentNode));
  var o = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return o && new o(n);
}
function ku(e, t, n) {
  if (e) {
    var r = e.getElementsByTagName(t), o = 0, a = r.length;
    if (n)
      for (; o < a; o++)
        n(r[o], o);
    return r;
  }
  return [];
}
function Yt() {
  var e = document.scrollingElement;
  return e || document.documentElement;
}
function Ge(e, t, n, r, o) {
  if (!(!e.getBoundingClientRect && e !== window)) {
    var a, i, l, s, u, d, p;
    if (e !== window && e.parentNode && e !== Yt() ? (a = e.getBoundingClientRect(), i = a.top, l = a.left, s = a.bottom, u = a.right, d = a.height, p = a.width) : (i = 0, l = 0, s = window.innerHeight, u = window.innerWidth, d = window.innerHeight, p = window.innerWidth), (t || n) && e !== window && (o = o || e.parentNode, !pn))
      do
        if (o && o.getBoundingClientRect && (le(o, "transform") !== "none" || n && le(o, "position") !== "static")) {
          var h = o.getBoundingClientRect();
          i -= h.top + parseInt(le(o, "border-top-width")), l -= h.left + parseInt(le(o, "border-left-width")), s = i + a.height, u = l + a.width;
          break;
        }
      while (o = o.parentNode);
    if (r && e !== window) {
      var m = hr(o || e), f = m && m.a, v = m && m.d;
      m && (i /= v, l /= f, p /= f, d /= v, s = i + d, u = l + p);
    }
    return {
      top: i,
      left: l,
      bottom: s,
      right: u,
      width: p,
      height: d
    };
  }
}
function hl(e, t, n) {
  for (var r = Cn(e, !0), o = Ge(e)[t]; r; ) {
    var a = Ge(r)[n], i = void 0;
    if (n === "top" || n === "left" ? i = o >= a : i = o <= a, !i)
      return r;
    if (r === Yt())
      break;
    r = Cn(r, !1);
  }
  return !1;
}
function br(e, t, n, r) {
  for (var o = 0, a = 0, i = e.children; a < i.length; ) {
    if (i[a].style.display !== "none" && i[a] !== se.ghost && (r || i[a] !== se.dragged) && Wt(i[a], n.draggable, e, !1)) {
      if (o === t)
        return i[a];
      o++;
    }
    a++;
  }
  return null;
}
function xi(e, t) {
  for (var n = e.lastElementChild; n && (n === se.ghost || le(n, "display") === "none" || t && !jo(n, t)); )
    n = n.previousElementSibling;
  return n || null;
}
function Et(e, t) {
  var n = 0;
  if (!e || !e.parentNode)
    return -1;
  for (; e = e.previousElementSibling; )
    e.nodeName.toUpperCase() !== "TEMPLATE" && e !== se.clone && (!t || jo(e, t)) && n++;
  return n;
}
function vl(e) {
  var t = 0, n = 0, r = Yt();
  if (e)
    do {
      var o = hr(e), a = o.a, i = o.d;
      t += e.scrollLeft * a, n += e.scrollTop * i;
    } while (e !== r && (e = e.parentNode));
  return [t, n];
}
function Cp(e, t) {
  for (var n in e)
    if (e.hasOwnProperty(n)) {
      for (var r in t)
        if (t.hasOwnProperty(r) && t[r] === e[n][r])
          return Number(n);
    }
  return -1;
}
function Cn(e, t) {
  if (!e || !e.getBoundingClientRect)
    return Yt();
  var n = e, r = !1;
  do
    if (n.clientWidth < n.scrollWidth || n.clientHeight < n.scrollHeight) {
      var o = le(n);
      if (n.clientWidth < n.scrollWidth && (o.overflowX == "auto" || o.overflowX == "scroll") || n.clientHeight < n.scrollHeight && (o.overflowY == "auto" || o.overflowY == "scroll")) {
        if (!n.getBoundingClientRect || n === document.body)
          return Yt();
        if (r || t)
          return n;
        r = !0;
      }
    }
  while (n = n.parentNode);
  return Yt();
}
function Ep(e, t) {
  if (e && t)
    for (var n in t)
      t.hasOwnProperty(n) && (e[n] = t[n]);
  return e;
}
function ma(e, t) {
  return Math.round(e.top) === Math.round(t.top) && Math.round(e.left) === Math.round(t.left) && Math.round(e.height) === Math.round(t.height) && Math.round(e.width) === Math.round(t.width);
}
var Rr;
function Ou(e, t) {
  return function() {
    if (!Rr) {
      var n = arguments, r = this;
      n.length === 1 ? e.call(r, n[0]) : e.apply(r, n), Rr = setTimeout(function() {
        Rr = void 0;
      }, t);
    }
  };
}
function kp() {
  clearTimeout(Rr), Rr = void 0;
}
function Tu(e, t, n) {
  e.scrollLeft += t, e.scrollTop += n;
}
function Du(e) {
  var t = window.Polymer, n = window.jQuery || window.Zepto;
  return t && t.dom ? t.dom(e).cloneNode(!0) : n ? n(e).clone(!0)[0] : e.cloneNode(!0);
}
var _t = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function Op() {
  var e = [], t;
  return {
    captureAnimationState: function() {
      if (e = [], !!this.options.animation) {
        var r = [].slice.call(this.el.children);
        r.forEach(function(o) {
          if (!(le(o, "display") === "none" || o === se.ghost)) {
            e.push({
              target: o,
              rect: Ge(o)
            });
            var a = Xt({}, e[e.length - 1].rect);
            if (o.thisAnimationDuration) {
              var i = hr(o, !0);
              i && (a.top -= i.f, a.left -= i.e);
            }
            o.fromRect = a;
          }
        });
      }
    },
    addAnimationState: function(r) {
      e.push(r);
    },
    removeAnimationState: function(r) {
      e.splice(Cp(e, {
        target: r
      }), 1);
    },
    animateAll: function(r) {
      var o = this;
      if (!this.options.animation) {
        clearTimeout(t), typeof r == "function" && r();
        return;
      }
      var a = !1, i = 0;
      e.forEach(function(l) {
        var s = 0, u = l.target, d = u.fromRect, p = Ge(u), h = u.prevFromRect, m = u.prevToRect, f = l.rect, v = hr(u, !0);
        v && (p.top -= v.f, p.left -= v.e), u.toRect = p, u.thisAnimationDuration && ma(h, p) && !ma(d, p) && // Make sure animatingRect is on line between toRect & fromRect
        (f.top - p.top) / (f.left - p.left) === (d.top - p.top) / (d.left - p.left) && (s = Dp(f, h, m, o.options)), ma(p, d) || (u.prevFromRect = d, u.prevToRect = p, s || (s = o.options.animation), o.animate(u, f, p, s)), s && (a = !0, i = Math.max(i, s), clearTimeout(u.animationResetTimer), u.animationResetTimer = setTimeout(function() {
          u.animationTime = 0, u.prevFromRect = null, u.fromRect = null, u.prevToRect = null, u.thisAnimationDuration = null;
        }, s), u.thisAnimationDuration = s);
      }), clearTimeout(t), a ? t = setTimeout(function() {
        typeof r == "function" && r();
      }, i) : typeof r == "function" && r(), e = [];
    },
    animate: function(r, o, a, i) {
      if (i) {
        le(r, "transition", ""), le(r, "transform", "");
        var l = hr(this.el), s = l && l.a, u = l && l.d, d = (o.left - a.left) / (s || 1), p = (o.top - a.top) / (u || 1);
        r.animatingX = !!d, r.animatingY = !!p, le(r, "transform", "translate3d(" + d + "px," + p + "px,0)"), this.forRepaintDummy = Tp(r), le(r, "transition", "transform " + i + "ms" + (this.options.easing ? " " + this.options.easing : "")), le(r, "transform", "translate3d(0,0,0)"), typeof r.animated == "number" && clearTimeout(r.animated), r.animated = setTimeout(function() {
          le(r, "transition", ""), le(r, "transform", ""), r.animated = !1, r.animatingX = !1, r.animatingY = !1;
        }, i);
      }
    }
  };
}
function Tp(e) {
  return e.offsetWidth;
}
function Dp(e, t, n, r) {
  return Math.sqrt(Math.pow(t.top - e.top, 2) + Math.pow(t.left - e.left, 2)) / Math.sqrt(Math.pow(t.top - n.top, 2) + Math.pow(t.left - n.left, 2)) * r.animation;
}
var lr = [], ga = {
  initializeByDefault: !0
}, co = {
  mount: function(t) {
    for (var n in ga)
      ga.hasOwnProperty(n) && !(n in t) && (t[n] = ga[n]);
    lr.forEach(function(r) {
      if (r.pluginName === t.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(t.pluginName, " more than once");
    }), lr.push(t);
  },
  pluginEvent: function(t, n, r) {
    var o = this;
    this.eventCanceled = !1, r.cancel = function() {
      o.eventCanceled = !0;
    };
    var a = t + "Global";
    lr.forEach(function(i) {
      n[i.pluginName] && (n[i.pluginName][a] && n[i.pluginName][a](Xt({
        sortable: n
      }, r)), n.options[i.pluginName] && n[i.pluginName][t] && n[i.pluginName][t](Xt({
        sortable: n
      }, r)));
    });
  },
  initializePlugins: function(t, n, r, o) {
    lr.forEach(function(l) {
      var s = l.pluginName;
      if (!(!t.options[s] && !l.initializeByDefault)) {
        var u = new l(t, n, t.options);
        u.sortable = t, u.options = t.options, t[s] = u, sn(r, u.defaults);
      }
    });
    for (var a in t.options)
      if (t.options.hasOwnProperty(a)) {
        var i = this.modifyOption(t, a, t.options[a]);
        typeof i < "u" && (t.options[a] = i);
      }
  },
  getEventProperties: function(t, n) {
    var r = {};
    return lr.forEach(function(o) {
      typeof o.eventProperties == "function" && sn(r, o.eventProperties.call(n[o.pluginName], t));
    }), r;
  },
  modifyOption: function(t, n, r) {
    var o;
    return lr.forEach(function(a) {
      t[a.pluginName] && a.optionListeners && typeof a.optionListeners[n] == "function" && (o = a.optionListeners[n].call(t[a.pluginName], r));
    }), o;
  }
};
function Ap(e) {
  var t = e.sortable, n = e.rootEl, r = e.name, o = e.targetEl, a = e.cloneEl, i = e.toEl, l = e.fromEl, s = e.oldIndex, u = e.newIndex, d = e.oldDraggableIndex, p = e.newDraggableIndex, h = e.originalEvent, m = e.putSortable, f = e.extraEventProperties;
  if (t = t || n && n[_t], !!t) {
    var v, y = t.options, g = "on" + r.charAt(0).toUpperCase() + r.substr(1);
    window.CustomEvent && !pn && !uo ? v = new CustomEvent(r, {
      bubbles: !0,
      cancelable: !0
    }) : (v = document.createEvent("Event"), v.initEvent(r, !0, !0)), v.to = i || n, v.from = l || n, v.item = o || n, v.clone = a, v.oldIndex = s, v.newIndex = u, v.oldDraggableIndex = d, v.newDraggableIndex = p, v.originalEvent = h, v.pullMode = m ? m.lastPutMode : void 0;
    var x = Xt(Xt({}, f), co.getEventProperties(r, t));
    for (var $ in x)
      v[$] = x[$];
    n && n.dispatchEvent(v), y[g] && y[g].call(t, v);
  }
}
var Mp = ["evt"], ht = function(t, n) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, o = r.evt, a = wp(r, Mp);
  co.pluginEvent.bind(se)(t, n, Xt({
    dragEl: Y,
    parentEl: Re,
    ghostEl: he,
    rootEl: Le,
    nextEl: jn,
    lastDownEl: Do,
    cloneEl: ze,
    cloneHidden: _n,
    dragStarted: Lr,
    putSortable: tt,
    activeSortable: se.active,
    originalEvent: o,
    oldIndex: pr,
    oldDraggableIndex: zr,
    newIndex: wt,
    newDraggableIndex: xn,
    hideGhostForTarget: Iu,
    unhideGhostForTarget: Nu,
    cloneNowHidden: function() {
      _n = !0;
    },
    cloneNowShown: function() {
      _n = !1;
    },
    dispatchSortableEvent: function(l) {
      ut({
        sortable: n,
        name: l,
        originalEvent: o
      });
    }
  }, a));
};
function ut(e) {
  Ap(Xt({
    putSortable: tt,
    cloneEl: ze,
    targetEl: Y,
    rootEl: Le,
    oldIndex: pr,
    oldDraggableIndex: zr,
    newIndex: wt,
    newDraggableIndex: xn
  }, e));
}
var Y, Re, he, Le, jn, Do, ze, _n, pr, wt, zr, xn, mo, tt, cr = !1, Bo = !1, Fo = [], Nn, It, ba, ya, ml, gl, Lr, sr, Hr, Vr = !1, go = !1, Ao, lt, wa = [], qa = !1, Ro = [], Qo = typeof document < "u", bo = Cu, bl = uo || pn ? "cssFloat" : "float", $p = Qo && !_p && !Cu && "draggable" in document.createElement("div"), Au = function() {
  if (Qo) {
    if (pn)
      return !1;
    var e = document.createElement("x");
    return e.style.cssText = "pointer-events:auto", e.style.pointerEvents === "auto";
  }
}(), Mu = function(t, n) {
  var r = le(t), o = parseInt(r.width) - parseInt(r.paddingLeft) - parseInt(r.paddingRight) - parseInt(r.borderLeftWidth) - parseInt(r.borderRightWidth), a = br(t, 0, n), i = br(t, 1, n), l = a && le(a), s = i && le(i), u = l && parseInt(l.marginLeft) + parseInt(l.marginRight) + Ge(a).width, d = s && parseInt(s.marginLeft) + parseInt(s.marginRight) + Ge(i).width;
  if (r.display === "flex")
    return r.flexDirection === "column" || r.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (r.display === "grid")
    return r.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (a && l.float && l.float !== "none") {
    var p = l.float === "left" ? "left" : "right";
    return i && (s.clear === "both" || s.clear === p) ? "vertical" : "horizontal";
  }
  return a && (l.display === "block" || l.display === "flex" || l.display === "table" || l.display === "grid" || u >= o && r[bl] === "none" || i && r[bl] === "none" && u + d > o) ? "vertical" : "horizontal";
}, Ip = function(t, n, r) {
  var o = r ? t.left : t.top, a = r ? t.right : t.bottom, i = r ? t.width : t.height, l = r ? n.left : n.top, s = r ? n.right : n.bottom, u = r ? n.width : n.height;
  return o === l || a === s || o + i / 2 === l + u / 2;
}, Np = function(t, n) {
  var r;
  return Fo.some(function(o) {
    var a = o[_t].options.emptyInsertThreshold;
    if (!(!a || xi(o))) {
      var i = Ge(o), l = t >= i.left - a && t <= i.right + a, s = n >= i.top - a && n <= i.bottom + a;
      if (l && s)
        return r = o;
    }
  }), r;
}, $u = function(t) {
  function n(a, i) {
    return function(l, s, u, d) {
      var p = l.options.group.name && s.options.group.name && l.options.group.name === s.options.group.name;
      if (a == null && (i || p))
        return !0;
      if (a == null || a === !1)
        return !1;
      if (i && a === "clone")
        return a;
      if (typeof a == "function")
        return n(a(l, s, u, d), i)(l, s, u, d);
      var h = (i ? l : s).options.group.name;
      return a === !0 || typeof a == "string" && a === h || a.join && a.indexOf(h) > -1;
    };
  }
  var r = {}, o = t.group;
  (!o || To(o) != "object") && (o = {
    name: o
  }), r.name = o.name, r.checkPull = n(o.pull, !0), r.checkPut = n(o.put), r.revertClone = o.revertClone, t.group = r;
}, Iu = function() {
  !Au && he && le(he, "display", "none");
}, Nu = function() {
  !Au && he && le(he, "display", "");
};
Qo && document.addEventListener("click", function(e) {
  if (Bo)
    return e.preventDefault(), e.stopPropagation && e.stopPropagation(), e.stopImmediatePropagation && e.stopImmediatePropagation(), Bo = !1, !1;
}, !0);
var Pn = function(t) {
  if (Y) {
    t = t.touches ? t.touches[0] : t;
    var n = Np(t.clientX, t.clientY);
    if (n) {
      var r = {};
      for (var o in t)
        t.hasOwnProperty(o) && (r[o] = t[o]);
      r.target = r.rootEl = n, r.preventDefault = void 0, r.stopPropagation = void 0, n[_t]._onDragOver(r);
    }
  }
}, Pp = function(t) {
  Y && Y.parentNode[_t]._isOutsideThisEl(t.target);
};
function se(e, t) {
  if (!(e && e.nodeType && e.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(e));
  this.el = e, this.options = t = sn({}, t), e[_t] = this;
  var n = {
    group: null,
    sort: !0,
    disabled: !1,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(e.nodeName) ? ">li" : ">*",
    swapThreshold: 1,
    // percentage; 0 <= x <= 1
    invertSwap: !1,
    // invert always
    invertedSwapThreshold: null,
    // will be set to same as swapThreshold if default
    removeCloneOnHide: !0,
    direction: function() {
      return Mu(e, this.options);
    },
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    ignore: "a, img",
    filter: null,
    preventOnFilter: !0,
    animation: 0,
    easing: null,
    setData: function(i, l) {
      i.setData("Text", l.textContent);
    },
    dropBubble: !1,
    dragoverBubble: !1,
    dataIdAttr: "data-id",
    delay: 0,
    delayOnTouchOnly: !1,
    touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
    forceFallback: !1,
    fallbackClass: "sortable-fallback",
    fallbackOnBody: !1,
    fallbackTolerance: 0,
    fallbackOffset: {
      x: 0,
      y: 0
    },
    supportPointer: se.supportPointer !== !1 && "PointerEvent" in window && !Fr,
    emptyInsertThreshold: 5
  };
  co.initializePlugins(this, e, n);
  for (var r in n)
    !(r in t) && (t[r] = n[r]);
  $u(t);
  for (var o in this)
    o.charAt(0) === "_" && typeof this[o] == "function" && (this[o] = this[o].bind(this));
  this.nativeDraggable = t.forceFallback ? !1 : $p, this.nativeDraggable && (this.options.touchStartThreshold = 1), t.supportPointer ? Ee(e, "pointerdown", this._onTapStart) : (Ee(e, "mousedown", this._onTapStart), Ee(e, "touchstart", this._onTapStart)), this.nativeDraggable && (Ee(e, "dragover", this), Ee(e, "dragenter", this)), Fo.push(this.el), t.store && t.store.get && this.sort(t.store.get(this) || []), sn(this, Op());
}
se.prototype = /** @lends Sortable.prototype */
{
  constructor: se,
  _isOutsideThisEl: function(t) {
    !this.el.contains(t) && t !== this.el && (sr = null);
  },
  _getDirection: function(t, n) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, t, n, Y) : this.options.direction;
  },
  _onTapStart: function(t) {
    if (t.cancelable) {
      var n = this, r = this.el, o = this.options, a = o.preventOnFilter, i = t.type, l = t.touches && t.touches[0] || t.pointerType && t.pointerType === "touch" && t, s = (l || t).target, u = t.target.shadowRoot && (t.path && t.path[0] || t.composedPath && t.composedPath()[0]) || s, d = o.filter;
      if (Vp(r), !Y && !(/mousedown|pointerdown/.test(i) && t.button !== 0 || o.disabled) && !u.isContentEditable && !(!this.nativeDraggable && Fr && s && s.tagName.toUpperCase() === "SELECT") && (s = Wt(s, o.draggable, r, !1), !(s && s.animated) && Do !== s)) {
        if (pr = Et(s), zr = Et(s, o.draggable), typeof d == "function") {
          if (d.call(this, t, s, this)) {
            ut({
              sortable: n,
              rootEl: u,
              name: "filter",
              targetEl: s,
              toEl: r,
              fromEl: r
            }), ht("filter", n, {
              evt: t
            }), a && t.cancelable && t.preventDefault();
            return;
          }
        } else if (d && (d = d.split(",").some(function(p) {
          if (p = Wt(u, p.trim(), r, !1), p)
            return ut({
              sortable: n,
              rootEl: p,
              name: "filter",
              targetEl: s,
              fromEl: r,
              toEl: r
            }), ht("filter", n, {
              evt: t
            }), !0;
        }), d)) {
          a && t.cancelable && t.preventDefault();
          return;
        }
        o.handle && !Wt(u, o.handle, r, !1) || this._prepareDragStart(t, l, s);
      }
    }
  },
  _prepareDragStart: function(t, n, r) {
    var o = this, a = o.el, i = o.options, l = a.ownerDocument, s;
    if (r && !Y && r.parentNode === a) {
      var u = Ge(r);
      if (Le = a, Y = r, Re = Y.parentNode, jn = Y.nextSibling, Do = r, mo = i.group, se.dragged = Y, Nn = {
        target: Y,
        clientX: (n || t).clientX,
        clientY: (n || t).clientY
      }, ml = Nn.clientX - u.left, gl = Nn.clientY - u.top, this._lastX = (n || t).clientX, this._lastY = (n || t).clientY, Y.style["will-change"] = "all", s = function() {
        if (ht("delayEnded", o, {
          evt: t
        }), se.eventCanceled) {
          o._onDrop();
          return;
        }
        o._disableDelayedDragEvents(), !pl && o.nativeDraggable && (Y.draggable = !0), o._triggerDragStart(t, n), ut({
          sortable: o,
          name: "choose",
          originalEvent: t
        }), bt(Y, i.chosenClass, !0);
      }, i.ignore.split(",").forEach(function(d) {
        ku(Y, d.trim(), xa);
      }), Ee(l, "dragover", Pn), Ee(l, "mousemove", Pn), Ee(l, "touchmove", Pn), Ee(l, "mouseup", o._onDrop), Ee(l, "touchend", o._onDrop), Ee(l, "touchcancel", o._onDrop), pl && this.nativeDraggable && (this.options.touchStartThreshold = 4, Y.draggable = !0), ht("delayStart", this, {
        evt: t
      }), i.delay && (!i.delayOnTouchOnly || n) && (!this.nativeDraggable || !(uo || pn))) {
        if (se.eventCanceled) {
          this._onDrop();
          return;
        }
        Ee(l, "mouseup", o._disableDelayedDrag), Ee(l, "touchend", o._disableDelayedDrag), Ee(l, "touchcancel", o._disableDelayedDrag), Ee(l, "mousemove", o._delayedDragTouchMoveHandler), Ee(l, "touchmove", o._delayedDragTouchMoveHandler), i.supportPointer && Ee(l, "pointermove", o._delayedDragTouchMoveHandler), o._dragStartTimer = setTimeout(s, i.delay);
      } else
        s();
    }
  },
  _delayedDragTouchMoveHandler: function(t) {
    var n = t.touches ? t.touches[0] : t;
    Math.max(Math.abs(n.clientX - this._lastX), Math.abs(n.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    Y && xa(Y), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var t = this.el.ownerDocument;
    xe(t, "mouseup", this._disableDelayedDrag), xe(t, "touchend", this._disableDelayedDrag), xe(t, "touchcancel", this._disableDelayedDrag), xe(t, "mousemove", this._delayedDragTouchMoveHandler), xe(t, "touchmove", this._delayedDragTouchMoveHandler), xe(t, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(t, n) {
    n = n || t.pointerType == "touch" && t, !this.nativeDraggable || n ? this.options.supportPointer ? Ee(document, "pointermove", this._onTouchMove) : n ? Ee(document, "touchmove", this._onTouchMove) : Ee(document, "mousemove", this._onTouchMove) : (Ee(Y, "dragend", this), Ee(Le, "dragstart", this._onDragStart));
    try {
      document.selection ? Mo(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(t, n) {
    if (cr = !1, Le && Y) {
      ht("dragStarted", this, {
        evt: n
      }), this.nativeDraggable && Ee(document, "dragover", Pp);
      var r = this.options;
      !t && bt(Y, r.dragClass, !1), bt(Y, r.ghostClass, !0), se.active = this, t && this._appendGhost(), ut({
        sortable: this,
        name: "start",
        originalEvent: n
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (It) {
      this._lastX = It.clientX, this._lastY = It.clientY, Iu();
      for (var t = document.elementFromPoint(It.clientX, It.clientY), n = t; t && t.shadowRoot && (t = t.shadowRoot.elementFromPoint(It.clientX, It.clientY), t !== n); )
        n = t;
      if (Y.parentNode[_t]._isOutsideThisEl(t), n)
        do {
          if (n[_t]) {
            var r = void 0;
            if (r = n[_t]._onDragOver({
              clientX: It.clientX,
              clientY: It.clientY,
              target: t,
              rootEl: n
            }), r && !this.options.dragoverBubble)
              break;
          }
          t = n;
        } while (n = n.parentNode);
      Nu();
    }
  },
  _onTouchMove: function(t) {
    if (Nn) {
      var n = this.options, r = n.fallbackTolerance, o = n.fallbackOffset, a = t.touches ? t.touches[0] : t, i = he && hr(he, !0), l = he && i && i.a, s = he && i && i.d, u = bo && lt && vl(lt), d = (a.clientX - Nn.clientX + o.x) / (l || 1) + (u ? u[0] - wa[0] : 0) / (l || 1), p = (a.clientY - Nn.clientY + o.y) / (s || 1) + (u ? u[1] - wa[1] : 0) / (s || 1);
      if (!se.active && !cr) {
        if (r && Math.max(Math.abs(a.clientX - this._lastX), Math.abs(a.clientY - this._lastY)) < r)
          return;
        this._onDragStart(t, !0);
      }
      if (he) {
        i ? (i.e += d - (ba || 0), i.f += p - (ya || 0)) : i = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: d,
          f: p
        };
        var h = "matrix(".concat(i.a, ",").concat(i.b, ",").concat(i.c, ",").concat(i.d, ",").concat(i.e, ",").concat(i.f, ")");
        le(he, "webkitTransform", h), le(he, "mozTransform", h), le(he, "msTransform", h), le(he, "transform", h), ba = d, ya = p, It = a;
      }
      t.cancelable && t.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!he) {
      var t = this.options.fallbackOnBody ? document.body : Le, n = Ge(Y, !0, bo, !0, t), r = this.options;
      if (bo) {
        for (lt = t; le(lt, "position") === "static" && le(lt, "transform") === "none" && lt !== document; )
          lt = lt.parentNode;
        lt !== document.body && lt !== document.documentElement ? (lt === document && (lt = Yt()), n.top += lt.scrollTop, n.left += lt.scrollLeft) : lt = Yt(), wa = vl(lt);
      }
      he = Y.cloneNode(!0), bt(he, r.ghostClass, !1), bt(he, r.fallbackClass, !0), bt(he, r.dragClass, !0), le(he, "transition", ""), le(he, "transform", ""), le(he, "box-sizing", "border-box"), le(he, "margin", 0), le(he, "top", n.top), le(he, "left", n.left), le(he, "width", n.width), le(he, "height", n.height), le(he, "opacity", "0.8"), le(he, "position", bo ? "absolute" : "fixed"), le(he, "zIndex", "100000"), le(he, "pointerEvents", "none"), se.ghost = he, t.appendChild(he), le(he, "transform-origin", ml / parseInt(he.style.width) * 100 + "% " + gl / parseInt(he.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(t, n) {
    var r = this, o = t.dataTransfer, a = r.options;
    if (ht("dragStart", this, {
      evt: t
    }), se.eventCanceled) {
      this._onDrop();
      return;
    }
    ht("setupClone", this), se.eventCanceled || (ze = Du(Y), ze.draggable = !1, ze.style["will-change"] = "", this._hideClone(), bt(ze, this.options.chosenClass, !1), se.clone = ze), r.cloneId = Mo(function() {
      ht("clone", r), !se.eventCanceled && (r.options.removeCloneOnHide || Le.insertBefore(ze, Y), r._hideClone(), ut({
        sortable: r,
        name: "clone"
      }));
    }), !n && bt(Y, a.dragClass, !0), n ? (Bo = !0, r._loopId = setInterval(r._emulateDragOver, 50)) : (xe(document, "mouseup", r._onDrop), xe(document, "touchend", r._onDrop), xe(document, "touchcancel", r._onDrop), o && (o.effectAllowed = "move", a.setData && a.setData.call(r, o, Y)), Ee(document, "drop", r), le(Y, "transform", "translateZ(0)")), cr = !0, r._dragStartId = Mo(r._dragStarted.bind(r, n, t)), Ee(document, "selectstart", r), Lr = !0, Fr && le(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(t) {
    var n = this.el, r = t.target, o, a, i, l = this.options, s = l.group, u = se.active, d = mo === s, p = l.sort, h = tt || u, m, f = this, v = !1;
    if (qa)
      return;
    function y(T, w) {
      ht(T, f, Xt({
        evt: t,
        isOwner: d,
        axis: m ? "vertical" : "horizontal",
        revert: i,
        dragRect: o,
        targetRect: a,
        canSort: p,
        fromSortable: h,
        target: r,
        completed: x,
        onMove: function(z, X) {
          return yo(Le, n, Y, o, z, Ge(z), t, X);
        },
        changed: $
      }, w));
    }
    function g() {
      y("dragOverAnimationCapture"), f.captureAnimationState(), f !== h && h.captureAnimationState();
    }
    function x(T) {
      return y("dragOverCompleted", {
        insertion: T
      }), T && (d ? u._hideClone() : u._showClone(f), f !== h && (bt(Y, tt ? tt.options.ghostClass : u.options.ghostClass, !1), bt(Y, l.ghostClass, !0)), tt !== f && f !== se.active ? tt = f : f === se.active && tt && (tt = null), h === f && (f._ignoreWhileAnimating = r), f.animateAll(function() {
        y("dragOverAnimationComplete"), f._ignoreWhileAnimating = null;
      }), f !== h && (h.animateAll(), h._ignoreWhileAnimating = null)), (r === Y && !Y.animated || r === n && !r.animated) && (sr = null), !l.dragoverBubble && !t.rootEl && r !== document && (Y.parentNode[_t]._isOutsideThisEl(t.target), !T && Pn(t)), !l.dragoverBubble && t.stopPropagation && t.stopPropagation(), v = !0;
    }
    function $() {
      wt = Et(Y), xn = Et(Y, l.draggable), ut({
        sortable: f,
        name: "change",
        toEl: n,
        newIndex: wt,
        newDraggableIndex: xn,
        originalEvent: t
      });
    }
    if (t.preventDefault !== void 0 && t.cancelable && t.preventDefault(), r = Wt(r, l.draggable, n, !0), y("dragOver"), se.eventCanceled)
      return v;
    if (Y.contains(t.target) || r.animated && r.animatingX && r.animatingY || f._ignoreWhileAnimating === r)
      return x(!1);
    if (Bo = !1, u && !l.disabled && (d ? p || (i = Re !== Le) : tt === this || (this.lastPutMode = mo.checkPull(this, u, Y, t)) && s.checkPut(this, u, Y, t))) {
      if (m = this._getDirection(t, r) === "vertical", o = Ge(Y), y("dragOverValid"), se.eventCanceled)
        return v;
      if (i)
        return Re = Le, g(), this._hideClone(), y("revert"), se.eventCanceled || (jn ? Le.insertBefore(Y, jn) : Le.appendChild(Y)), x(!0);
      var k = xi(n, l.draggable);
      if (!k || Fp(t, m, this) && !k.animated) {
        if (k === Y)
          return x(!1);
        if (k && n === t.target && (r = k), r && (a = Ge(r)), yo(Le, n, Y, o, r, a, t, !!r) !== !1)
          return g(), n.appendChild(Y), Re = n, $(), x(!0);
      } else if (k && Bp(t, m, this)) {
        var I = br(n, 0, l, !0);
        if (I === Y)
          return x(!1);
        if (r = I, a = Ge(r), yo(Le, n, Y, o, r, a, t, !1) !== !1)
          return g(), n.insertBefore(Y, I), Re = n, $(), x(!0);
      } else if (r.parentNode === n) {
        a = Ge(r);
        var C = 0, E, F = Y.parentNode !== n, H = !Ip(Y.animated && Y.toRect || o, r.animated && r.toRect || a, m), R = m ? "top" : "left", q = hl(r, "top", "top") || hl(Y, "top", "top"), J = q ? q.scrollTop : void 0;
        sr !== r && (E = a[R], Vr = !1, go = !H && l.invertSwap || F), C = Rp(t, r, a, m, H ? 1 : l.swapThreshold, l.invertedSwapThreshold == null ? l.swapThreshold : l.invertedSwapThreshold, go, sr === r);
        var L;
        if (C !== 0) {
          var M = Et(Y);
          do
            M -= C, L = Re.children[M];
          while (L && (le(L, "display") === "none" || L === he));
        }
        if (C === 0 || L === r)
          return x(!1);
        sr = r, Hr = C;
        var S = r.nextElementSibling, P = !1;
        P = C === 1;
        var _ = yo(Le, n, Y, o, r, a, t, P);
        if (_ !== !1)
          return (_ === 1 || _ === -1) && (P = _ === 1), qa = !0, setTimeout(jp, 30), g(), P && !S ? n.appendChild(Y) : r.parentNode.insertBefore(Y, P ? S : r), q && Tu(q, 0, J - q.scrollTop), Re = Y.parentNode, E !== void 0 && !go && (Ao = Math.abs(E - Ge(r)[R])), $(), x(!0);
      }
      if (n.contains(Y))
        return x(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    xe(document, "mousemove", this._onTouchMove), xe(document, "touchmove", this._onTouchMove), xe(document, "pointermove", this._onTouchMove), xe(document, "dragover", Pn), xe(document, "mousemove", Pn), xe(document, "touchmove", Pn);
  },
  _offUpEvents: function() {
    var t = this.el.ownerDocument;
    xe(t, "mouseup", this._onDrop), xe(t, "touchend", this._onDrop), xe(t, "pointerup", this._onDrop), xe(t, "touchcancel", this._onDrop), xe(document, "selectstart", this);
  },
  _onDrop: function(t) {
    var n = this.el, r = this.options;
    if (wt = Et(Y), xn = Et(Y, r.draggable), ht("drop", this, {
      evt: t
    }), Re = Y && Y.parentNode, wt = Et(Y), xn = Et(Y, r.draggable), se.eventCanceled) {
      this._nulling();
      return;
    }
    cr = !1, go = !1, Vr = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), Ya(this.cloneId), Ya(this._dragStartId), this.nativeDraggable && (xe(document, "drop", this), xe(n, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), Fr && le(document.body, "user-select", ""), le(Y, "transform", ""), t && (Lr && (t.cancelable && t.preventDefault(), !r.dropBubble && t.stopPropagation()), he && he.parentNode && he.parentNode.removeChild(he), (Le === Re || tt && tt.lastPutMode !== "clone") && ze && ze.parentNode && ze.parentNode.removeChild(ze), Y && (this.nativeDraggable && xe(Y, "dragend", this), xa(Y), Y.style["will-change"] = "", Lr && !cr && bt(Y, tt ? tt.options.ghostClass : this.options.ghostClass, !1), bt(Y, this.options.chosenClass, !1), ut({
      sortable: this,
      name: "unchoose",
      toEl: Re,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: t
    }), Le !== Re ? (wt >= 0 && (ut({
      rootEl: Re,
      name: "add",
      toEl: Re,
      fromEl: Le,
      originalEvent: t
    }), ut({
      sortable: this,
      name: "remove",
      toEl: Re,
      originalEvent: t
    }), ut({
      rootEl: Re,
      name: "sort",
      toEl: Re,
      fromEl: Le,
      originalEvent: t
    }), ut({
      sortable: this,
      name: "sort",
      toEl: Re,
      originalEvent: t
    })), tt && tt.save()) : wt !== pr && wt >= 0 && (ut({
      sortable: this,
      name: "update",
      toEl: Re,
      originalEvent: t
    }), ut({
      sortable: this,
      name: "sort",
      toEl: Re,
      originalEvent: t
    })), se.active && ((wt == null || wt === -1) && (wt = pr, xn = zr), ut({
      sortable: this,
      name: "end",
      toEl: Re,
      originalEvent: t
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    ht("nulling", this), Le = Y = Re = he = jn = ze = Do = _n = Nn = It = Lr = wt = xn = pr = zr = sr = Hr = tt = mo = se.dragged = se.ghost = se.clone = se.active = null, Ro.forEach(function(t) {
      t.checked = !0;
    }), Ro.length = ba = ya = 0;
  },
  handleEvent: function(t) {
    switch (t.type) {
      case "drop":
      case "dragend":
        this._onDrop(t);
        break;
      case "dragenter":
      case "dragover":
        Y && (this._onDragOver(t), Lp(t));
        break;
      case "selectstart":
        t.preventDefault();
        break;
    }
  },
  /**
   * Serializes the item into an array of string.
   * @returns {String[]}
   */
  toArray: function() {
    for (var t = [], n, r = this.el.children, o = 0, a = r.length, i = this.options; o < a; o++)
      n = r[o], Wt(n, i.draggable, this.el, !1) && t.push(n.getAttribute(i.dataIdAttr) || Hp(n));
    return t;
  },
  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function(t, n) {
    var r = {}, o = this.el;
    this.toArray().forEach(function(a, i) {
      var l = o.children[i];
      Wt(l, this.options.draggable, o, !1) && (r[a] = l);
    }, this), n && this.captureAnimationState(), t.forEach(function(a) {
      r[a] && (o.removeChild(r[a]), o.appendChild(r[a]));
    }), n && this.animateAll();
  },
  /**
   * Save the current sorting
   */
  save: function() {
    var t = this.options.store;
    t && t.set && t.set(this);
  },
  /**
   * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
   * @param   {HTMLElement}  el
   * @param   {String}       [selector]  default: `options.draggable`
   * @returns {HTMLElement|null}
   */
  closest: function(t, n) {
    return Wt(t, n || this.options.draggable, this.el, !1);
  },
  /**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */
  option: function(t, n) {
    var r = this.options;
    if (n === void 0)
      return r[t];
    var o = co.modifyOption(this, t, n);
    typeof o < "u" ? r[t] = o : r[t] = n, t === "group" && $u(r);
  },
  /**
   * Destroy
   */
  destroy: function() {
    ht("destroy", this);
    var t = this.el;
    t[_t] = null, xe(t, "mousedown", this._onTapStart), xe(t, "touchstart", this._onTapStart), xe(t, "pointerdown", this._onTapStart), this.nativeDraggable && (xe(t, "dragover", this), xe(t, "dragenter", this)), Array.prototype.forEach.call(t.querySelectorAll("[draggable]"), function(n) {
      n.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), Fo.splice(Fo.indexOf(this.el), 1), this.el = t = null;
  },
  _hideClone: function() {
    if (!_n) {
      if (ht("hideClone", this), se.eventCanceled)
        return;
      le(ze, "display", "none"), this.options.removeCloneOnHide && ze.parentNode && ze.parentNode.removeChild(ze), _n = !0;
    }
  },
  _showClone: function(t) {
    if (t.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (_n) {
      if (ht("showClone", this), se.eventCanceled)
        return;
      Y.parentNode == Le && !this.options.group.revertClone ? Le.insertBefore(ze, Y) : jn ? Le.insertBefore(ze, jn) : Le.appendChild(ze), this.options.group.revertClone && this.animate(Y, ze), le(ze, "display", ""), _n = !1;
    }
  }
};
function Lp(e) {
  e.dataTransfer && (e.dataTransfer.dropEffect = "move"), e.cancelable && e.preventDefault();
}
function yo(e, t, n, r, o, a, i, l) {
  var s, u = e[_t], d = u.options.onMove, p;
  return window.CustomEvent && !pn && !uo ? s = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (s = document.createEvent("Event"), s.initEvent("move", !0, !0)), s.to = t, s.from = e, s.dragged = n, s.draggedRect = r, s.related = o || t, s.relatedRect = a || Ge(t), s.willInsertAfter = l, s.originalEvent = i, e.dispatchEvent(s), d && (p = d.call(u, s, i)), p;
}
function xa(e) {
  e.draggable = !1;
}
function jp() {
  qa = !1;
}
function Bp(e, t, n) {
  var r = Ge(br(n.el, 0, n.options, !0)), o = 10;
  return t ? e.clientX < r.left - o || e.clientY < r.top && e.clientX < r.right : e.clientY < r.top - o || e.clientY < r.bottom && e.clientX < r.left;
}
function Fp(e, t, n) {
  var r = Ge(xi(n.el, n.options.draggable)), o = 10;
  return t ? e.clientX > r.right + o || e.clientX <= r.right && e.clientY > r.bottom && e.clientX >= r.left : e.clientX > r.right && e.clientY > r.top || e.clientX <= r.right && e.clientY > r.bottom + o;
}
function Rp(e, t, n, r, o, a, i, l) {
  var s = r ? e.clientY : e.clientX, u = r ? n.height : n.width, d = r ? n.top : n.left, p = r ? n.bottom : n.right, h = !1;
  if (!i) {
    if (l && Ao < u * o) {
      if (!Vr && (Hr === 1 ? s > d + u * a / 2 : s < p - u * a / 2) && (Vr = !0), Vr)
        h = !0;
      else if (Hr === 1 ? s < d + Ao : s > p - Ao)
        return -Hr;
    } else if (s > d + u * (1 - o) / 2 && s < p - u * (1 - o) / 2)
      return zp(t);
  }
  return h = h || i, h && (s < d + u * a / 2 || s > p - u * a / 2) ? s > d + u / 2 ? 1 : -1 : 0;
}
function zp(e) {
  return Et(Y) < Et(e) ? 1 : -1;
}
function Hp(e) {
  for (var t = e.tagName + e.className + e.src + e.href + e.textContent, n = t.length, r = 0; n--; )
    r += t.charCodeAt(n);
  return r.toString(36);
}
function Vp(e) {
  Ro.length = 0;
  for (var t = e.getElementsByTagName("input"), n = t.length; n--; ) {
    var r = t[n];
    r.checked && Ro.push(r);
  }
}
function Mo(e) {
  return setTimeout(e, 0);
}
function Ya(e) {
  return clearTimeout(e);
}
Qo && Ee(document, "touchmove", function(e) {
  (se.active || cr) && e.cancelable && e.preventDefault();
});
se.utils = {
  on: Ee,
  off: xe,
  css: le,
  find: ku,
  is: function(t, n) {
    return !!Wt(t, n, t, !1);
  },
  extend: Ep,
  throttle: Ou,
  closest: Wt,
  toggleClass: bt,
  clone: Du,
  index: Et,
  nextTick: Mo,
  cancelNextTick: Ya,
  detectDirection: Mu,
  getChild: br
};
se.get = function(e) {
  return e[_t];
};
se.mount = function() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  t[0].constructor === Array && (t = t[0]), t.forEach(function(r) {
    if (!r.prototype || !r.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(r));
    r.utils && (se.utils = Xt(Xt({}, se.utils), r.utils)), co.mount(r);
  });
};
se.create = function(e, t) {
  return new se(e, t);
};
se.version = xp;
var We = [], jr, Ga, Xa = !1, _a, Sa, zo, Br;
function Kp() {
  function e() {
    this.defaults = {
      scroll: !0,
      forceAutoScrollFallback: !1,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: !0
    };
    for (var t in this)
      t.charAt(0) === "_" && typeof this[t] == "function" && (this[t] = this[t].bind(this));
  }
  return e.prototype = {
    dragStarted: function(n) {
      var r = n.originalEvent;
      this.sortable.nativeDraggable ? Ee(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? Ee(document, "pointermove", this._handleFallbackAutoScroll) : r.touches ? Ee(document, "touchmove", this._handleFallbackAutoScroll) : Ee(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(n) {
      var r = n.originalEvent;
      !this.options.dragOverBubble && !r.rootEl && this._handleAutoScroll(r);
    },
    drop: function() {
      this.sortable.nativeDraggable ? xe(document, "dragover", this._handleAutoScroll) : (xe(document, "pointermove", this._handleFallbackAutoScroll), xe(document, "touchmove", this._handleFallbackAutoScroll), xe(document, "mousemove", this._handleFallbackAutoScroll)), yl(), $o(), kp();
    },
    nulling: function() {
      zo = Ga = jr = Xa = Br = _a = Sa = null, We.length = 0;
    },
    _handleFallbackAutoScroll: function(n) {
      this._handleAutoScroll(n, !0);
    },
    _handleAutoScroll: function(n, r) {
      var o = this, a = (n.touches ? n.touches[0] : n).clientX, i = (n.touches ? n.touches[0] : n).clientY, l = document.elementFromPoint(a, i);
      if (zo = n, r || this.options.forceAutoScrollFallback || uo || pn || Fr) {
        Ca(n, this.options, l, r);
        var s = Cn(l, !0);
        Xa && (!Br || a !== _a || i !== Sa) && (Br && yl(), Br = setInterval(function() {
          var u = Cn(document.elementFromPoint(a, i), !0);
          u !== s && (s = u, $o()), Ca(n, o.options, u, r);
        }, 10), _a = a, Sa = i);
      } else {
        if (!this.options.bubbleScroll || Cn(l, !0) === Yt()) {
          $o();
          return;
        }
        Ca(n, this.options, Cn(l, !1), !1);
      }
    }
  }, sn(e, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function $o() {
  We.forEach(function(e) {
    clearInterval(e.pid);
  }), We = [];
}
function yl() {
  clearInterval(Br);
}
var Ca = Ou(function(e, t, n, r) {
  if (t.scroll) {
    var o = (e.touches ? e.touches[0] : e).clientX, a = (e.touches ? e.touches[0] : e).clientY, i = t.scrollSensitivity, l = t.scrollSpeed, s = Yt(), u = !1, d;
    Ga !== n && (Ga = n, $o(), jr = t.scroll, d = t.scrollFn, jr === !0 && (jr = Cn(n, !0)));
    var p = 0, h = jr;
    do {
      var m = h, f = Ge(m), v = f.top, y = f.bottom, g = f.left, x = f.right, $ = f.width, k = f.height, I = void 0, C = void 0, E = m.scrollWidth, F = m.scrollHeight, H = le(m), R = m.scrollLeft, q = m.scrollTop;
      m === s ? (I = $ < E && (H.overflowX === "auto" || H.overflowX === "scroll" || H.overflowX === "visible"), C = k < F && (H.overflowY === "auto" || H.overflowY === "scroll" || H.overflowY === "visible")) : (I = $ < E && (H.overflowX === "auto" || H.overflowX === "scroll"), C = k < F && (H.overflowY === "auto" || H.overflowY === "scroll"));
      var J = I && (Math.abs(x - o) <= i && R + $ < E) - (Math.abs(g - o) <= i && !!R), L = C && (Math.abs(y - a) <= i && q + k < F) - (Math.abs(v - a) <= i && !!q);
      if (!We[p])
        for (var M = 0; M <= p; M++)
          We[M] || (We[M] = {});
      (We[p].vx != J || We[p].vy != L || We[p].el !== m) && (We[p].el = m, We[p].vx = J, We[p].vy = L, clearInterval(We[p].pid), (J != 0 || L != 0) && (u = !0, We[p].pid = setInterval((function() {
        r && this.layer === 0 && se.active._onTouchMove(zo);
        var S = We[this.layer].vy ? We[this.layer].vy * l : 0, P = We[this.layer].vx ? We[this.layer].vx * l : 0;
        typeof d == "function" && d.call(se.dragged.parentNode[_t], P, S, e, zo, We[this.layer].el) !== "continue" || Tu(We[this.layer].el, P, S);
      }).bind({
        layer: p
      }), 24))), p++;
    } while (t.bubbleScroll && h !== s && (h = Cn(h, !1)));
    Xa = u;
  }
}, 30), Pu = function(t) {
  var n = t.originalEvent, r = t.putSortable, o = t.dragEl, a = t.activeSortable, i = t.dispatchSortableEvent, l = t.hideGhostForTarget, s = t.unhideGhostForTarget;
  if (n) {
    var u = r || a;
    l();
    var d = n.changedTouches && n.changedTouches.length ? n.changedTouches[0] : n, p = document.elementFromPoint(d.clientX, d.clientY);
    s(), u && !u.el.contains(p) && (i("spill"), this.onSpill({
      dragEl: o,
      putSortable: r
    }));
  }
};
function _i() {
}
_i.prototype = {
  startIndex: null,
  dragStart: function(t) {
    var n = t.oldDraggableIndex;
    this.startIndex = n;
  },
  onSpill: function(t) {
    var n = t.dragEl, r = t.putSortable;
    this.sortable.captureAnimationState(), r && r.captureAnimationState();
    var o = br(this.sortable.el, this.startIndex, this.options);
    o ? this.sortable.el.insertBefore(n, o) : this.sortable.el.appendChild(n), this.sortable.animateAll(), r && r.animateAll();
  },
  drop: Pu
};
sn(_i, {
  pluginName: "revertOnSpill"
});
function Si() {
}
Si.prototype = {
  onSpill: function(t) {
    var n = t.dragEl, r = t.putSortable, o = r || this.sortable;
    o.captureAnimationState(), n.parentNode && n.parentNode.removeChild(n), o.animateAll();
  },
  drop: Pu
};
sn(Si, {
  pluginName: "removeOnSpill"
});
se.mount(new Kp());
se.mount(Si, _i);
var Wp = Object.defineProperty, Up = Object.defineProperties, qp = Object.getOwnPropertyDescriptors, wl = Object.getOwnPropertySymbols, Yp = Object.prototype.hasOwnProperty, Gp = Object.prototype.propertyIsEnumerable, xl = (e, t, n) => t in e ? Wp(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, En = (e, t) => {
  for (var n in t || (t = {}))
    Yp.call(t, n) && xl(e, n, t[n]);
  if (wl)
    for (var n of wl(t))
      Gp.call(t, n) && xl(e, n, t[n]);
  return e;
}, Ho = (e, t) => Up(e, qp(t));
function Ea(e) {
  e.parentElement !== null && e.parentElement.removeChild(e);
}
function _l(e, t, n) {
  const r = n === 0 ? e.children[0] : e.children[n - 1].nextSibling;
  e.insertBefore(t, r);
}
function Xp() {
  return typeof window < "u" ? window.console : global.console;
}
const Zp = Xp();
function Qp(e) {
  const t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] || (t[r] = e(r));
  };
}
const Jp = /-(\w)/g, ef = Qp((e) => e.replace(Jp, (t, n) => n.toUpperCase())), Lu = ["Start", "Add", "Remove", "Update", "End"], ju = ["Choose", "Unchoose", "Sort", "Filter", "Clone"], Bu = ["Move"], tf = [Bu, Lu, ju].flatMap((e) => e).map((e) => `on${e}`), Za = {
  manage: Bu,
  manageAndEmit: Lu,
  emit: ju
};
function nf(e) {
  return tf.indexOf(e) !== -1;
}
const rf = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "math",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rb",
  "rp",
  "rt",
  "rtc",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "slot",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "svg",
  "table",
  "tbody",
  "td",
  "template",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr"
];
function of(e) {
  return rf.includes(e);
}
function af(e) {
  return ["transition-group", "TransitionGroup"].includes(e);
}
function Fu(e) {
  return ["id", "class", "role", "style"].includes(e) || e.startsWith("data-") || e.startsWith("aria-") || e.startsWith("on");
}
function Ru(e) {
  return e.reduce((t, [n, r]) => (t[n] = r, t), {});
}
function lf({ $attrs: e, componentData: t = {} }) {
  const n = Ru(Object.entries(e).filter(([r, o]) => Fu(r)));
  return En(En({}, n), t);
}
function sf({ $attrs: e, callBackBuilder: t }) {
  const n = Ru(zu(e));
  Object.entries(t).forEach(([o, a]) => {
    Za[o].forEach((i) => {
      n[`on${i}`] = a(i);
    });
  });
  const r = `[data-draggable]${n.draggable || ""}`;
  return Ho(En({}, n), {
    draggable: r
  });
}
function zu(e) {
  return Object.entries(e).filter(([t, n]) => !Fu(t)).map(([t, n]) => [ef(t), n]).filter(([t, n]) => !nf(t));
}
const Sl = (e) => {
  const t = e.el || Array.isArray(e.children) && e.children[0].el.parentNode;
  return t || console.error("使用 transition-group , 需要在slot中template内至少2层html标签"), t || {};
}, uf = (e, t) => e.__draggable_context = t, Cl = (e) => e.__draggable_context;
class cf {
  constructor({
    nodes: { header: t, default: n, footer: r },
    root: o,
    realList: a
  }) {
    this.defaultNodes = n, this.children = [...t, ...n, ...r], this.externalComponent = o.externalComponent, this.rootTransition = o.transition, this.tag = o.tag, this.realList = a;
  }
  get _isRootComponent() {
    return this.externalComponent || this.rootTransition;
  }
  render(t, n) {
    const { tag: r, children: o, _isRootComponent: a } = this;
    return t(r, n, a ? { default: () => o } : o);
  }
  updated() {
    const { defaultNodes: t, realList: n } = this;
    t.forEach((r, o) => {
      uf(Sl(r), {
        element: n[o],
        index: o
      });
    });
  }
  getUnderlyingVm(t) {
    return Cl(t);
  }
  getVmIndexFromDomIndex(t, n) {
    const { defaultNodes: r } = this, { length: o } = r, a = n.children, i = a.item(t);
    if (i === null)
      return o;
    const l = Cl(i);
    if (l)
      return l.index;
    if (o === 0)
      return 0;
    const s = Sl(r[0]), u = [...a].findIndex((d) => d === s);
    return t < u ? 0 : o;
  }
}
function df(e, t) {
  const n = e[t];
  return n ? n() : [];
}
function pf({ $slots: e, realList: t, getKey: n }) {
  const r = t || [], [o, a] = ["header", "footer"].map((s) => df(e, s)), { item: i } = e;
  if (!i)
    throw new Error("draggable element must have an item slot");
  const l = r.flatMap((s, u) => i({ element: s, index: u }).map((d) => (d.key = n(s), d.props = Ho(En({}, d.props || {}), { "data-draggable": !0 }), d)));
  if (l.length !== r.length)
    throw new Error("Item slot must have only one child");
  return {
    header: o,
    footer: a,
    default: l
  };
}
function ff(e) {
  const t = af(e), n = !of(e) && !t;
  return {
    transition: t,
    externalComponent: n,
    tag: n ? ct(e) : t ? np : e
  };
}
function hf({ $slots: e, tag: t, realList: n, getKey: r }) {
  const o = pf({ $slots: e, realList: n, getKey: r }), a = ff(t);
  return new cf({ nodes: o, root: a, realList: n });
}
function Hu(e, t) {
  me(() => this.$emit(e.toLowerCase(), t));
}
function Vu(e) {
  return (t, n) => {
    if (this.realList !== null)
      return this[`onDrag${e}`](t, n);
  };
}
function vf(e) {
  const t = Vu.call(this, e);
  return (n, r) => {
    t.call(this, n, r), Hu.call(this, e, n);
  };
}
let ka = null;
const mf = {
  list: {
    type: Array,
    required: !1,
    default: null
  },
  modelValue: {
    type: Array,
    required: !1,
    default: null
  },
  itemKey: {
    type: [String, Function],
    required: !0
  },
  clone: {
    type: Function,
    default: (e) => e
  },
  tag: {
    type: String,
    default: "div"
  },
  move: {
    type: Function,
    default: null
  },
  componentData: {
    type: Object,
    required: !1,
    default: null
  }
}, gf = [
  "update:modelValue",
  "change",
  ...[...Za.manageAndEmit, ...Za.emit].map((e) => e.toLowerCase())
];
ne({
  name: "draggable",
  inheritAttrs: !1,
  props: mf,
  emits: gf,
  data() {
    return {
      error: !1
    };
  },
  render() {
    try {
      this.error = !1;
      const { $slots: e, $attrs: t, tag: n, componentData: r, realList: o, getKey: a } = this, i = hf({
        $slots: e,
        tag: n,
        realList: o,
        getKey: a
      });
      this.componentStructure = i;
      const l = lf({ $attrs: t, componentData: r });
      return i.render(Ut, l);
    } catch (e) {
      return this.error = !0, Ut("pre", { style: { color: "red" } }, e.stack);
    }
  },
  created() {
    this.list !== null && this.modelValue !== null && Zp.error("modelValue and list props are mutually exclusive! Please set one or another.");
  },
  mounted() {
    if (this.error)
      return;
    const { $attrs: e, $el: t, componentStructure: n } = this;
    n.updated();
    const r = sf({
      $attrs: e,
      callBackBuilder: {
        manageAndEmit: (a) => vf.call(this, a),
        emit: (a) => Hu.bind(this, a),
        manage: (a) => Vu.call(this, a)
      }
    }), o = t.nodeType === 1 ? t : t.parentElement;
    this._sortable = new se(o, r), this.targetDomElement = o, o.__draggable_component__ = this;
  },
  updated() {
    this.componentStructure.updated();
  },
  beforeUnmount() {
    this._sortable !== void 0 && this._sortable.destroy();
  },
  computed: {
    realList() {
      const { list: e } = this;
      return e || this.modelValue;
    },
    getKey() {
      const { itemKey: e } = this;
      return typeof e == "function" ? e : (t) => t[e];
    }
  },
  watch: {
    $attrs: {
      handler(e) {
        const { _sortable: t } = this;
        t && zu(e).forEach(([n, r]) => {
          t.option(n, r);
        });
      },
      deep: !0
    }
  },
  methods: {
    getUnderlyingVm(e) {
      return this.componentStructure.getUnderlyingVm(e) || null;
    },
    getUnderlyingPotencialDraggableComponent(e) {
      return e.__draggable_component__;
    },
    emitChanges(e) {
      me(() => this.$emit("change", e));
    },
    alterList(e) {
      if (this.list) {
        e(this.list);
        return;
      }
      const t = [...this.modelValue];
      e(t), this.$emit("update:modelValue", t);
    },
    spliceList() {
      const e = (t) => t.splice(...arguments);
      this.alterList(e);
    },
    updatePosition(e, t) {
      const n = (r) => r.splice(t, 0, r.splice(e, 1)[0]);
      this.alterList(n);
    },
    getRelatedContextFromMoveEvent({ to: e, related: t }) {
      const n = this.getUnderlyingPotencialDraggableComponent(e);
      if (!n)
        return { component: n };
      const r = n.realList, o = { list: r, component: n };
      if (e !== t && r) {
        const a = n.getUnderlyingVm(t) || {};
        return En(En({}, a), o);
      }
      return o;
    },
    getVmIndexFromDomIndex(e) {
      return this.componentStructure.getVmIndexFromDomIndex(e, this.targetDomElement);
    },
    onDragStart(e) {
      this.context = this.getUnderlyingVm(e.item), e.item._underlying_vm_ = this.clone(this.context.element), ka = e.item;
    },
    onDragAdd(e) {
      const t = e.item._underlying_vm_;
      if (t === void 0)
        return;
      Ea(e.item);
      const n = this.getVmIndexFromDomIndex(e.newIndex);
      this.spliceList(n, 0, t);
      const r = { element: t, newIndex: n };
      this.emitChanges({ added: r });
    },
    onDragRemove(e) {
      if (_l(this.$el, e.item, e.oldIndex), e.pullMode === "clone") {
        Ea(e.clone);
        return;
      }
      const { index: t, element: n } = this.context;
      this.spliceList(t, 1);
      const r = { element: n, oldIndex: t };
      this.emitChanges({ removed: r });
    },
    onDragUpdate(e) {
      Ea(e.item), _l(e.from, e.item, e.oldIndex);
      const t = this.context.index, n = this.getVmIndexFromDomIndex(e.newIndex);
      this.updatePosition(t, n);
      const r = { element: this.context.element, oldIndex: t, newIndex: n };
      this.emitChanges({ moved: r });
    },
    computeFutureIndex(e, t) {
      if (!e.element)
        return 0;
      const n = [...t.to.children].filter((i) => i.style.display !== "none"), r = n.indexOf(t.related), o = e.component.getVmIndexFromDomIndex(r);
      return n.indexOf(ka) !== -1 || !t.willInsertAfter ? o : o + 1;
    },
    onDragMove(e, t) {
      const { move: n, realList: r } = this;
      if (!n || !r)
        return !0;
      const o = this.getRelatedContextFromMoveEvent(e), a = this.computeFutureIndex(o, e), i = Ho(En({}, this.context), {
        futureIndex: a
      }), l = Ho(En({}, e), {
        relatedContext: o,
        draggedContext: i
      });
      return n(l, t);
    },
    onDragEnd() {
      ka = null;
    }
  }
});
const Ku = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, bf = {}, yf = {
  ref: "dom",
  class: "a-container"
};
function wf(e, t) {
  return A(), G("section", yf, [
    Q("div", null, [
      _e(e.$slots, "default")
    ])
  ], 512);
}
const xf = /* @__PURE__ */ Ku(bf, [["render", wf]]);
var _f = typeof global == "object" && global && global.Object === Object && global;
const Wu = _f;
var Sf = typeof self == "object" && self && self.Object === Object && self, Cf = Wu || Sf || Function("return this")();
const Jt = Cf;
var Ef = Jt.Symbol;
const An = Ef;
var Uu = Object.prototype, kf = Uu.hasOwnProperty, Of = Uu.toString, Ir = An ? An.toStringTag : void 0;
function Tf(e) {
  var t = kf.call(e, Ir), n = e[Ir];
  try {
    e[Ir] = void 0;
    var r = !0;
  } catch {
  }
  var o = Of.call(e);
  return r && (t ? e[Ir] = n : delete e[Ir]), o;
}
var Df = Object.prototype, Af = Df.toString;
function Mf(e) {
  return Af.call(e);
}
var $f = "[object Null]", If = "[object Undefined]", El = An ? An.toStringTag : void 0;
function kr(e) {
  return e == null ? e === void 0 ? If : $f : El && El in Object(e) ? Tf(e) : Mf(e);
}
function Or(e) {
  return e != null && typeof e == "object";
}
var Nf = "[object Symbol]";
function Ci(e) {
  return typeof e == "symbol" || Or(e) && kr(e) == Nf;
}
function Pf(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = Array(r); ++n < r; )
    o[n] = t(e[n], n, e);
  return o;
}
var Lf = Array.isArray;
const Tr = Lf;
var jf = 1 / 0, kl = An ? An.prototype : void 0, Ol = kl ? kl.toString : void 0;
function qu(e) {
  if (typeof e == "string")
    return e;
  if (Tr(e))
    return Pf(e, qu) + "";
  if (Ci(e))
    return Ol ? Ol.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -jf ? "-0" : t;
}
function Wn(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Bf = "[object AsyncFunction]", Ff = "[object Function]", Rf = "[object GeneratorFunction]", zf = "[object Proxy]";
function Yu(e) {
  if (!Wn(e))
    return !1;
  var t = kr(e);
  return t == Ff || t == Rf || t == Bf || t == zf;
}
var Hf = Jt["__core-js_shared__"];
const Oa = Hf;
var Tl = function() {
  var e = /[^.]+$/.exec(Oa && Oa.keys && Oa.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Vf(e) {
  return !!Tl && Tl in e;
}
var Kf = Function.prototype, Wf = Kf.toString;
function er(e) {
  if (e != null) {
    try {
      return Wf.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Uf = /[\\^$.*+?()[\]{}|]/g, qf = /^\[object .+?Constructor\]$/, Yf = Function.prototype, Gf = Object.prototype, Xf = Yf.toString, Zf = Gf.hasOwnProperty, Qf = RegExp(
  "^" + Xf.call(Zf).replace(Uf, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Jf(e) {
  if (!Wn(e) || Vf(e))
    return !1;
  var t = Yu(e) ? Qf : qf;
  return t.test(er(e));
}
function eh(e, t) {
  return e == null ? void 0 : e[t];
}
function tr(e, t) {
  var n = eh(e, t);
  return Jf(n) ? n : void 0;
}
var th = tr(Jt, "WeakMap");
const Qa = th;
var Dl = Object.create, nh = function() {
  function e() {
  }
  return function(t) {
    if (!Wn(t))
      return {};
    if (Dl)
      return Dl(t);
    e.prototype = t;
    var n = new e();
    return e.prototype = void 0, n;
  };
}();
const rh = nh;
function oh(e, t) {
  var n = -1, r = e.length;
  for (t || (t = Array(r)); ++n < r; )
    t[n] = e[n];
  return t;
}
var ah = function() {
  try {
    var e = tr(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
const Al = ah;
function ih(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1; )
    ;
  return e;
}
var lh = 9007199254740991, sh = /^(?:0|[1-9]\d*)$/;
function Gu(e, t) {
  var n = typeof e;
  return t = t ?? lh, !!t && (n == "number" || n != "symbol" && sh.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function Xu(e, t, n) {
  t == "__proto__" && Al ? Al(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function Zu(e, t) {
  return e === t || e !== e && t !== t;
}
var uh = Object.prototype, ch = uh.hasOwnProperty;
function Ei(e, t, n) {
  var r = e[t];
  (!(ch.call(e, t) && Zu(r, n)) || n === void 0 && !(t in e)) && Xu(e, t, n);
}
function Jo(e, t, n, r) {
  var o = !n;
  n || (n = {});
  for (var a = -1, i = t.length; ++a < i; ) {
    var l = t[a], s = r ? r(n[l], e[l], l, n, e) : void 0;
    s === void 0 && (s = e[l]), o ? Xu(n, l, s) : Ei(n, l, s);
  }
  return n;
}
var dh = 9007199254740991;
function Qu(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= dh;
}
function Ju(e) {
  return e != null && Qu(e.length) && !Yu(e);
}
var ph = Object.prototype;
function ki(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || ph;
  return e === n;
}
function fh(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var hh = "[object Arguments]";
function Ml(e) {
  return Or(e) && kr(e) == hh;
}
var ec = Object.prototype, vh = ec.hasOwnProperty, mh = ec.propertyIsEnumerable, gh = Ml(function() {
  return arguments;
}()) ? Ml : function(e) {
  return Or(e) && vh.call(e, "callee") && !mh.call(e, "callee");
};
const bh = gh;
function yh() {
  return !1;
}
var tc = typeof exports == "object" && exports && !exports.nodeType && exports, $l = tc && typeof module == "object" && module && !module.nodeType && module, wh = $l && $l.exports === tc, Il = wh ? Jt.Buffer : void 0, xh = Il ? Il.isBuffer : void 0, _h = xh || yh;
const nc = _h;
var Sh = "[object Arguments]", Ch = "[object Array]", Eh = "[object Boolean]", kh = "[object Date]", Oh = "[object Error]", Th = "[object Function]", Dh = "[object Map]", Ah = "[object Number]", Mh = "[object Object]", $h = "[object RegExp]", Ih = "[object Set]", Nh = "[object String]", Ph = "[object WeakMap]", Lh = "[object ArrayBuffer]", jh = "[object DataView]", Bh = "[object Float32Array]", Fh = "[object Float64Array]", Rh = "[object Int8Array]", zh = "[object Int16Array]", Hh = "[object Int32Array]", Vh = "[object Uint8Array]", Kh = "[object Uint8ClampedArray]", Wh = "[object Uint16Array]", Uh = "[object Uint32Array]", $e = {};
$e[Bh] = $e[Fh] = $e[Rh] = $e[zh] = $e[Hh] = $e[Vh] = $e[Kh] = $e[Wh] = $e[Uh] = !0;
$e[Sh] = $e[Ch] = $e[Lh] = $e[Eh] = $e[jh] = $e[kh] = $e[Oh] = $e[Th] = $e[Dh] = $e[Ah] = $e[Mh] = $e[$h] = $e[Ih] = $e[Nh] = $e[Ph] = !1;
function qh(e) {
  return Or(e) && Qu(e.length) && !!$e[kr(e)];
}
function Oi(e) {
  return function(t) {
    return e(t);
  };
}
var rc = typeof exports == "object" && exports && !exports.nodeType && exports, Kr = rc && typeof module == "object" && module && !module.nodeType && module, Yh = Kr && Kr.exports === rc, Ta = Yh && Wu.process, Gh = function() {
  try {
    var e = Kr && Kr.require && Kr.require("util").types;
    return e || Ta && Ta.binding && Ta.binding("util");
  } catch {
  }
}();
const yr = Gh;
var Nl = yr && yr.isTypedArray, Xh = Nl ? Oi(Nl) : qh;
const Zh = Xh;
var Qh = Object.prototype, Jh = Qh.hasOwnProperty;
function oc(e, t) {
  var n = Tr(e), r = !n && bh(e), o = !n && !r && nc(e), a = !n && !r && !o && Zh(e), i = n || r || o || a, l = i ? fh(e.length, String) : [], s = l.length;
  for (var u in e)
    (t || Jh.call(e, u)) && !(i && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Gu(u, s))) && l.push(u);
  return l;
}
function ac(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var ev = ac(Object.keys, Object);
const tv = ev;
var nv = Object.prototype, rv = nv.hasOwnProperty;
function ov(e) {
  if (!ki(e))
    return tv(e);
  var t = [];
  for (var n in Object(e))
    rv.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function Ti(e) {
  return Ju(e) ? oc(e) : ov(e);
}
function av(e) {
  var t = [];
  if (e != null)
    for (var n in Object(e))
      t.push(n);
  return t;
}
var iv = Object.prototype, lv = iv.hasOwnProperty;
function sv(e) {
  if (!Wn(e))
    return av(e);
  var t = ki(e), n = [];
  for (var r in e)
    r == "constructor" && (t || !lv.call(e, r)) || n.push(r);
  return n;
}
function Di(e) {
  return Ju(e) ? oc(e, !0) : sv(e);
}
var uv = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, cv = /^\w*$/;
function dv(e, t) {
  if (Tr(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Ci(e) ? !0 : cv.test(e) || !uv.test(e) || t != null && e in Object(t);
}
var pv = tr(Object, "create");
const Xr = pv;
function fv() {
  this.__data__ = Xr ? Xr(null) : {}, this.size = 0;
}
function hv(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var vv = "__lodash_hash_undefined__", mv = Object.prototype, gv = mv.hasOwnProperty;
function bv(e) {
  var t = this.__data__;
  if (Xr) {
    var n = t[e];
    return n === vv ? void 0 : n;
  }
  return gv.call(t, e) ? t[e] : void 0;
}
var yv = Object.prototype, wv = yv.hasOwnProperty;
function xv(e) {
  var t = this.__data__;
  return Xr ? t[e] !== void 0 : wv.call(t, e);
}
var _v = "__lodash_hash_undefined__";
function Sv(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Xr && t === void 0 ? _v : t, this;
}
function Un(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Un.prototype.clear = fv;
Un.prototype.delete = hv;
Un.prototype.get = bv;
Un.prototype.has = xv;
Un.prototype.set = Sv;
function Cv() {
  this.__data__ = [], this.size = 0;
}
function ea(e, t) {
  for (var n = e.length; n--; )
    if (Zu(e[n][0], t))
      return n;
  return -1;
}
var Ev = Array.prototype, kv = Ev.splice;
function Ov(e) {
  var t = this.__data__, n = ea(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : kv.call(t, n, 1), --this.size, !0;
}
function Tv(e) {
  var t = this.__data__, n = ea(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function Dv(e) {
  return ea(this.__data__, e) > -1;
}
function Av(e, t) {
  var n = this.__data__, r = ea(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function fn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
fn.prototype.clear = Cv;
fn.prototype.delete = Ov;
fn.prototype.get = Tv;
fn.prototype.has = Dv;
fn.prototype.set = Av;
var Mv = tr(Jt, "Map");
const Zr = Mv;
function $v() {
  this.size = 0, this.__data__ = {
    hash: new Un(),
    map: new (Zr || fn)(),
    string: new Un()
  };
}
function Iv(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function ta(e, t) {
  var n = e.__data__;
  return Iv(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function Nv(e) {
  var t = ta(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Pv(e) {
  return ta(this, e).get(e);
}
function Lv(e) {
  return ta(this, e).has(e);
}
function jv(e, t) {
  var n = ta(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function Mn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Mn.prototype.clear = $v;
Mn.prototype.delete = Nv;
Mn.prototype.get = Pv;
Mn.prototype.has = Lv;
Mn.prototype.set = jv;
var Bv = "Expected a function";
function Ai(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Bv);
  var n = function() {
    var r = arguments, o = t ? t.apply(this, r) : r[0], a = n.cache;
    if (a.has(o))
      return a.get(o);
    var i = e.apply(this, r);
    return n.cache = a.set(o, i) || a, i;
  };
  return n.cache = new (Ai.Cache || Mn)(), n;
}
Ai.Cache = Mn;
var Fv = 500;
function Rv(e) {
  var t = Ai(e, function(r) {
    return n.size === Fv && n.clear(), r;
  }), n = t.cache;
  return t;
}
var zv = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Hv = /\\(\\)?/g, Vv = Rv(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(zv, function(n, r, o, a) {
    t.push(o ? a.replace(Hv, "$1") : r || n);
  }), t;
});
const Kv = Vv;
function Wv(e) {
  return e == null ? "" : qu(e);
}
function Uv(e, t) {
  return Tr(e) ? e : dv(e, t) ? [e] : Kv(Wv(e));
}
var qv = 1 / 0;
function Yv(e) {
  if (typeof e == "string" || Ci(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -qv ? "-0" : t;
}
function ic(e, t) {
  for (var n = -1, r = t.length, o = e.length; ++n < r; )
    e[o + n] = t[n];
  return e;
}
var Gv = ac(Object.getPrototypeOf, Object);
const lc = Gv;
function Xv() {
  this.__data__ = new fn(), this.size = 0;
}
function Zv(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function Qv(e) {
  return this.__data__.get(e);
}
function Jv(e) {
  return this.__data__.has(e);
}
var em = 200;
function tm(e, t) {
  var n = this.__data__;
  if (n instanceof fn) {
    var r = n.__data__;
    if (!Zr || r.length < em - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new Mn(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
function Dr(e) {
  var t = this.__data__ = new fn(e);
  this.size = t.size;
}
Dr.prototype.clear = Xv;
Dr.prototype.delete = Zv;
Dr.prototype.get = Qv;
Dr.prototype.has = Jv;
Dr.prototype.set = tm;
function nm(e, t) {
  return e && Jo(t, Ti(t), e);
}
function rm(e, t) {
  return e && Jo(t, Di(t), e);
}
var sc = typeof exports == "object" && exports && !exports.nodeType && exports, Pl = sc && typeof module == "object" && module && !module.nodeType && module, om = Pl && Pl.exports === sc, Ll = om ? Jt.Buffer : void 0, jl = Ll ? Ll.allocUnsafe : void 0;
function am(e, t) {
  if (t)
    return e.slice();
  var n = e.length, r = jl ? jl(n) : new e.constructor(n);
  return e.copy(r), r;
}
function im(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = 0, a = []; ++n < r; ) {
    var i = e[n];
    t(i, n, e) && (a[o++] = i);
  }
  return a;
}
function uc() {
  return [];
}
var lm = Object.prototype, sm = lm.propertyIsEnumerable, Bl = Object.getOwnPropertySymbols, um = Bl ? function(e) {
  return e == null ? [] : (e = Object(e), im(Bl(e), function(t) {
    return sm.call(e, t);
  }));
} : uc;
const Mi = um;
function cm(e, t) {
  return Jo(e, Mi(e), t);
}
var dm = Object.getOwnPropertySymbols, pm = dm ? function(e) {
  for (var t = []; e; )
    ic(t, Mi(e)), e = lc(e);
  return t;
} : uc;
const cc = pm;
function fm(e, t) {
  return Jo(e, cc(e), t);
}
function dc(e, t, n) {
  var r = t(e);
  return Tr(e) ? r : ic(r, n(e));
}
function hm(e) {
  return dc(e, Ti, Mi);
}
function vm(e) {
  return dc(e, Di, cc);
}
var mm = tr(Jt, "DataView");
const Ja = mm;
var gm = tr(Jt, "Promise");
const ei = gm;
var bm = tr(Jt, "Set");
const ti = bm;
var Fl = "[object Map]", ym = "[object Object]", Rl = "[object Promise]", zl = "[object Set]", Hl = "[object WeakMap]", Vl = "[object DataView]", wm = er(Ja), xm = er(Zr), _m = er(ei), Sm = er(ti), Cm = er(Qa), Bn = kr;
(Ja && Bn(new Ja(new ArrayBuffer(1))) != Vl || Zr && Bn(new Zr()) != Fl || ei && Bn(ei.resolve()) != Rl || ti && Bn(new ti()) != zl || Qa && Bn(new Qa()) != Hl) && (Bn = function(e) {
  var t = kr(e), n = t == ym ? e.constructor : void 0, r = n ? er(n) : "";
  if (r)
    switch (r) {
      case wm:
        return Vl;
      case xm:
        return Fl;
      case _m:
        return Rl;
      case Sm:
        return zl;
      case Cm:
        return Hl;
    }
  return t;
});
const $i = Bn;
var Em = Object.prototype, km = Em.hasOwnProperty;
function Om(e) {
  var t = e.length, n = new e.constructor(t);
  return t && typeof e[0] == "string" && km.call(e, "index") && (n.index = e.index, n.input = e.input), n;
}
var Tm = Jt.Uint8Array;
const Kl = Tm;
function Ii(e) {
  var t = new e.constructor(e.byteLength);
  return new Kl(t).set(new Kl(e)), t;
}
function Dm(e, t) {
  var n = t ? Ii(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.byteLength);
}
var Am = /\w*$/;
function Mm(e) {
  var t = new e.constructor(e.source, Am.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var Wl = An ? An.prototype : void 0, Ul = Wl ? Wl.valueOf : void 0;
function $m(e) {
  return Ul ? Object(Ul.call(e)) : {};
}
function Im(e, t) {
  var n = t ? Ii(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.length);
}
var Nm = "[object Boolean]", Pm = "[object Date]", Lm = "[object Map]", jm = "[object Number]", Bm = "[object RegExp]", Fm = "[object Set]", Rm = "[object String]", zm = "[object Symbol]", Hm = "[object ArrayBuffer]", Vm = "[object DataView]", Km = "[object Float32Array]", Wm = "[object Float64Array]", Um = "[object Int8Array]", qm = "[object Int16Array]", Ym = "[object Int32Array]", Gm = "[object Uint8Array]", Xm = "[object Uint8ClampedArray]", Zm = "[object Uint16Array]", Qm = "[object Uint32Array]";
function Jm(e, t, n) {
  var r = e.constructor;
  switch (t) {
    case Hm:
      return Ii(e);
    case Nm:
    case Pm:
      return new r(+e);
    case Vm:
      return Dm(e, n);
    case Km:
    case Wm:
    case Um:
    case qm:
    case Ym:
    case Gm:
    case Xm:
    case Zm:
    case Qm:
      return Im(e, n);
    case Lm:
      return new r();
    case jm:
    case Rm:
      return new r(e);
    case Bm:
      return Mm(e);
    case Fm:
      return new r();
    case zm:
      return $m(e);
  }
}
function eg(e) {
  return typeof e.constructor == "function" && !ki(e) ? rh(lc(e)) : {};
}
var tg = "[object Map]";
function ng(e) {
  return Or(e) && $i(e) == tg;
}
var ql = yr && yr.isMap, rg = ql ? Oi(ql) : ng;
const og = rg;
var ag = "[object Set]";
function ig(e) {
  return Or(e) && $i(e) == ag;
}
var Yl = yr && yr.isSet, lg = Yl ? Oi(Yl) : ig;
const sg = lg;
var ug = 1, cg = 2, dg = 4, pc = "[object Arguments]", pg = "[object Array]", fg = "[object Boolean]", hg = "[object Date]", vg = "[object Error]", fc = "[object Function]", mg = "[object GeneratorFunction]", gg = "[object Map]", bg = "[object Number]", hc = "[object Object]", yg = "[object RegExp]", wg = "[object Set]", xg = "[object String]", _g = "[object Symbol]", Sg = "[object WeakMap]", Cg = "[object ArrayBuffer]", Eg = "[object DataView]", kg = "[object Float32Array]", Og = "[object Float64Array]", Tg = "[object Int8Array]", Dg = "[object Int16Array]", Ag = "[object Int32Array]", Mg = "[object Uint8Array]", $g = "[object Uint8ClampedArray]", Ig = "[object Uint16Array]", Ng = "[object Uint32Array]", Ae = {};
Ae[pc] = Ae[pg] = Ae[Cg] = Ae[Eg] = Ae[fg] = Ae[hg] = Ae[kg] = Ae[Og] = Ae[Tg] = Ae[Dg] = Ae[Ag] = Ae[gg] = Ae[bg] = Ae[hc] = Ae[yg] = Ae[wg] = Ae[xg] = Ae[_g] = Ae[Mg] = Ae[$g] = Ae[Ig] = Ae[Ng] = !0;
Ae[vg] = Ae[fc] = Ae[Sg] = !1;
function Wr(e, t, n, r, o, a) {
  var i, l = t & ug, s = t & cg, u = t & dg;
  if (n && (i = o ? n(e, r, o, a) : n(e)), i !== void 0)
    return i;
  if (!Wn(e))
    return e;
  var d = Tr(e);
  if (d) {
    if (i = Om(e), !l)
      return oh(e, i);
  } else {
    var p = $i(e), h = p == fc || p == mg;
    if (nc(e))
      return am(e, l);
    if (p == hc || p == pc || h && !o) {
      if (i = s || h ? {} : eg(e), !l)
        return s ? fm(e, rm(i, e)) : cm(e, nm(i, e));
    } else {
      if (!Ae[p])
        return o ? e : {};
      i = Jm(e, p, l);
    }
  }
  a || (a = new Dr());
  var m = a.get(e);
  if (m)
    return m;
  a.set(e, i), sg(e) ? e.forEach(function(y) {
    i.add(Wr(y, t, n, y, e, a));
  }) : og(e) && e.forEach(function(y, g) {
    i.set(g, Wr(y, t, n, g, e, a));
  });
  var f = u ? s ? vm : hm : s ? Di : Ti, v = d ? void 0 : f(e);
  return ih(v || e, function(y, g) {
    v && (g = y, y = e[g]), Ei(i, g, Wr(y, t, n, g, e, a));
  }), i;
}
var Pg = 4;
function Lg(e) {
  return Wr(e, Pg);
}
var jg = 1, Bg = 4;
function Fg(e) {
  return Wr(e, jg | Bg);
}
function Rg(e, t, n, r) {
  if (!Wn(e))
    return e;
  t = Uv(t, e);
  for (var o = -1, a = t.length, i = a - 1, l = e; l != null && ++o < a; ) {
    var s = Yv(t[o]), u = n;
    if (s === "__proto__" || s === "constructor" || s === "prototype")
      return e;
    if (o != i) {
      var d = l[s];
      u = r ? r(d, s, l) : void 0, u === void 0 && (u = Wn(d) ? d : Gu(t[o + 1]) ? [] : {});
    }
    Ei(l, s, u), l = l[s];
  }
  return e;
}
function zg(e, t, n) {
  return e == null ? e : Rg(e, t, n);
}
let Hg = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
var Vg = Object.defineProperty, Kg = Object.getOwnPropertyDescriptor, Mt = (e, t, n, r) => {
  for (var o = r > 1 ? void 0 : r ? Kg(t, n) : t, a = e.length - 1, i; a >= 0; a--)
    (i = e[a]) && (o = (r ? i(t, n, o) : i(o)) || o);
  return r && o && Vg(t, n, o), o;
};
function Wg() {
  const e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map();
  async function n(o) {
    if (t.has(o))
      return;
    t.set(o, null);
    const i = await (await fetch(new URL("/alioth", o).href)).json(), { project: l, entry: s } = i;
    if (e.has(l))
      throw new Error("已存在同名项目");
    const u = document.createElement("script");
    u.src = new URL("/@vite/client", o).href, u.type = "module", document.body.appendChild(u);
    for (const d in s)
      s[d] = new URL(s[d], o).href, t.set(s[d], l);
    e.set(l, s), t.set(o, l);
  }
  async function r(o, a, i) {
    const l = e.get(o);
    if (!l || !(a in l))
      return;
    const s = l[a], u = await import(s);
    return {
      module: u,
      data: i && u[i],
      url: s
    };
  }
  return {
    connect: n,
    projectMap: e,
    dynamicImport: r,
    urlMap: t
  };
}
function Ug(e = {}) {
  let t = !1;
  const n = {
    isActive: !0,
    current: -1,
    queue: [],
    commands: {},
    commandArray: [],
    destroyArray: []
  }, r = (l) => {
    l.name in n.commands || (t && l.init && n.destroyArray.push(l.init()), n.commandArray.push(l), n.commands[l.name] = () => {
      const { redo: s, undo: u } = l.execute() || {};
      if (!l.pushQueue)
        return;
      let { queue: d, current: p } = n;
      d.length > 0 && (d = d.slice(0, p + 1), n.queue = d), d.push({
        redo: s,
        undo: u
      }), n.current = p + 1;
    });
  };
  e.redo && r({
    name: "redo",
    keyboard: "ctrl+y",
    execute() {
      const l = n.queue[n.current + 1];
      l && (l.redo && l.redo(), n.current++);
    }
  }), e.undo && r({
    name: "undo",
    keyboard: "ctrl+z",
    execute() {
      if (n.current === -1)
        return;
      const l = n.queue[n.current];
      l && (l.undo && l.undo(), n.current--);
    }
  });
  const o = (() => {
    const l = (u) => {
      const { ctrlKey: d, key: p, altKey: h, shiftKey: m } = u;
      let f = [];
      h && f.push("alt"), d && f.push("ctrl"), m && f.push("shift"), f.push(p.toLowerCase()), f = f.join("+"), n.commandArray.forEach(({ keyboard: v, name: y }) => {
        v && v === f && (n.commands[y](), u.preventDefault());
      });
    };
    return () => (window.addEventListener("keydown", l), () => {
      window.removeEventListener("keydown", l);
    });
  })();
  n.destroyArray.push(o());
  function a() {
    t || (t = !0, n.commandArray.forEach(
      (l) => l.init && n.destroyArray.push(l.init())
    ));
  }
  function i() {
    n.isActive && n.destroyArray.forEach((l) => l && l());
  }
  return { state: n, register: r, initialize: a, destroy: i };
}
function qg(e) {
  if (e.endsWith(".css")) {
    const t = document.createElement("link");
    return t.href = e, t.rel = "stylesheet", t.type = "text/css", document.head.appendChild(t), new Promise((n, r) => {
      t.onload = n, t.onerror = r;
    });
  } else
    return import(e);
}
var vc = class {
  constructor(e = {}) {
    this.variable = e;
  }
  add(e, t) {
    this.variable[e] = t;
  }
  get keys() {
    return Object.keys(this.variable);
  }
  get data() {
    const e = {};
    for (const t in this.variable)
      e[t] = this.variable[t].value;
    return e;
  }
  create(e = {}) {
    return new vc({ ...this.variable, ...e });
  }
}, Gl = class {
  constructor(e) {
    this.id = Hg(), this.children = [], this.timeout = 800, this.attrs = e || {};
  }
  get cloneChilds() {
    return Lg(this.children);
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
    var n, r;
    this._set(e, t), (r = (n = this.doc) == null ? void 0 : n.controller) == null || r.set(this.id, e, t);
  }
  _set(e, t) {
    var n;
    (n = this.doc) == null || n.emit("set", { node: this, path: e, value: t }), zg(this.attrs, e, t);
  }
  insert(e, t) {
    var n;
    !t && t !== 0 && (t = this.children.length), this._insert(e, t), (n = this.doc) != null && n.controller && this.doc.controller.insert(this.id, e.id, t);
  }
  _insert(e, t) {
    var n;
    e.parent = this, e.level = this.level + 1, this.children.splice(t, 0, e), (n = this.doc) == null || n.emit("insert", { parent: this, child: e, index: t });
  }
  remove(e) {
    var n;
    const t = this._remove(e);
    t && ((n = this.doc) == null || n.controller.delete(this.id, t.id, e));
  }
  _removeNode(e) {
    this.children.splice(this.children.findIndex((t) => t.id === e.id), 1);
  }
  _remove(e) {
    const t = this.children.splice(e, 1)[0], { doc: n } = this;
    function r(o) {
      o && (o.level = void 0, n == null || n.blockMap.delete(o.id), o.parent = null, o.children.forEach(r), n == null || n.emit("remove", { node: o }));
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
}, Yg = class {
  constructor() {
    this.record = {};
  }
  on(e, t) {
    this.record[e] || (this.record[e] = /* @__PURE__ */ new Set()), this.record[e].add(t);
  }
  emit(e, t) {
    this.record[e] && [...this.record[e]].forEach((n) => n(t));
  }
  off(e, t) {
    this.record[e].delete(t);
  }
}, Gg = class extends Yg {
  constructor(e) {
    super(), this.blockMap = /* @__PURE__ */ new Map(), this.data = {}, this.root = this.createNode(e, "root"), this.root.level = 0;
  }
  get activeNode() {
    return this.get(this.root.attrs.id);
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
    const n = new Gl(e);
    return t && (n.id = t), t === "root" && (this.root = n), this.blockMap.set(n.id, n), this.emit("create", { node: n }), n;
  }
  _createNode(e, t) {
    if (t && this.blockMap.has(t))
      return this.blockMap.get(t);
    const n = new Gl(e);
    return t && (n.id = t), n.doc = this, t === "root" && (this.root = n), this.blockMap.set(n.id, n), this.emit("create", { node: n }), n;
  }
  removeNode(e) {
    e.parent && (e.parent.remove(e.index), this.blockMap.delete(e.id));
  }
  _removeNode(e) {
    e.parent ? (e.parent._remove(e.index), this.blockMap.delete(e.id)) : this.blockMap.delete(e.id);
  }
  load(e) {
    const t = this;
    function n(r) {
      const o = t.createNode(r.attrs, r.id);
      return r.children.forEach((a, i) => {
        const l = n(a);
        o.insert(l, i);
      }), o;
    }
    return this.controller ? this.controller.ydoc.transact(() => {
      this.root = n(e);
    }) : this.root = n(e), this;
  }
  transact(e, t) {
    this.controller && this.controller.ydoc.transact(e, t);
  }
}, ni = class {
  constructor() {
    this.doc = new Gg();
  }
  _init() {
    window.$alioth_node_event = ({ event: e, cb: t }) => {
      this.doc.on(e, t);
    };
  }
  get activePage() {
    return this.doc.activeNode;
  }
  get pages() {
    return this.doc.root.children;
  }
  switchPage(e) {
    this.doc.root.set("id", e);
  }
  addPage(e) {
    const t = this.doc.createNode({ key: "page" }, e);
    return this.doc.root.insert(t), t;
  }
  removePage(e) {
    const { children: t } = this.doc.root, n = t.findIndex((r) => r.id === e);
    this.doc.root.remove(n);
  }
  findPage(e) {
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
Mt([
  Zo
], ni.prototype, "_init", 1);
ni = Mt([
  Qn,
  Jn("doc")
], ni);
var Xg = (e) => {
  e.dataTransfer.dropEffect = "move";
}, Zg = (e) => {
  e.preventDefault();
}, Qg = (e) => {
  e.dataTransfer.dropEffect = "none";
}, Xl = class {
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
      n.addEventListener("dragenter", Xg, { signal: t }), n.addEventListener("dragover", Zg, { signal: t }), n.addEventListener("dragleave", Qg, { signal: t }), n.addEventListener("drop", (r) => {
        this.execCb(n, e, r);
      }, { signal: t });
  }
  dragEnd() {
    this.listenController.abort(), this.listenController = void 0;
  }
};
Xl = Mt([
  Qn,
  Jn("drag")
], Xl);
var { register: Zl, initialize: Jg, state: e0 } = Ug({ undo: !0, redo: !0 }), Ql = class {
  constructor() {
    this.state = e0, this.register = Zl, window.$alioth_event = Zl, Jg();
  }
};
Ql = Mt([
  Qn,
  Jn("event")
], Ql);
var { connect: t0, dynamicImport: n0, urlMap: Ok, projectMap: r0 } = Wg(), ri = class {
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
    await t0(e);
    for (const [t, n] of r0.entries())
      for (const r in n) {
        const { module: o, url: a } = await n0(t, r);
        this.graph[a] = this.importModule(o);
      }
  }
  async connectPreset(e) {
    e.forEach(async (t) => {
      try {
        const n = await qg(t);
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
        const { alioth: o, data: a } = e[r];
        (n = window[`$alioth_${o}`]) == null || n.call(window, a), t[r] = e[r];
      }
    return t;
  }
};
Mt([
  Zo
], ri.prototype, "_init", 1);
ri = Mt([
  Qn,
  Jn("import")
], ri);
var oi = class {
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
Mt([
  Zo
], oi.prototype, "_init", 1);
oi = Mt([
  Qn,
  Jn("command")
], oi);
var Jl = class {
};
Jl = Mt([
  Qn,
  Jn("selection")
], Jl);
var Vo = class {
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
Mt([
  Zo
], Vo.prototype, "_init", 1);
Mt([
  gp("custom_error")
], Vo.prototype, "watchError", 1);
Vo = Mt([
  Qn,
  Jn("error")
], Vo);
var o0 = Object.defineProperty, a0 = Object.getOwnPropertyDescriptor, mc = (e, t, n, r) => {
  for (var o = r > 1 ? void 0 : r ? a0(t, n) : t, a = e.length - 1, i; a >= 0; a--)
    (i = e[a]) && (o = (r ? i(t, n, o) : i(o)) || o);
  return r && o && o0(t, n, o), o;
};
function i0() {
  const e = [], t = document.getElementsByTagName("style");
  for (let r = 0; r < t.length; r++) {
    const o = t[r].cloneNode();
    o.innerHTML = t[r].innerHTML, e.push(o);
  }
  const n = document.getElementsByTagName("link");
  for (let r = 0; r < n.length; r++)
    n[r].rel === "stylesheet" && e.push(n[r].cloneNode());
  return e;
}
function l0(e) {
  e.contentWindow.document.documentElement.classList.add("al-canvas");
}
function s0(e, t) {
  const n = e.contentWindow.document;
  if (t) {
    const r = document.createElement("style");
    r.innerHTML = t, n.head.append(r);
  }
  n.head.append(...i0());
}
function u0(e) {
  const t = e.contentWindow.document, n = document.querySelectorAll("script[data-alioth]");
  for (let r = 0; r < n.length; r++) {
    const o = document.createElement("script");
    o.src = n[r].src, t.head.append(o);
  }
}
function c0(e) {
  const t = e.contentWindow, { x: n, y: r } = e.getBoundingClientRect();
  ["pointerdown", "pointermove", "pointerup", "pointercancel", "pointerenter", "pointerleave", "pointerover", "pointerout", "gotpointercapture", "lostpointercapture", "click", "contextmenu"].forEach((o) => {
    t.addEventListener(o, (a) => {
      const i = d0(a);
      i.clientX += n, i.clientY += r;
      const l = new MouseEvent(o, i);
      window.dispatchEvent(l);
    });
  }), ["keydown", "keyup"].forEach((o) => {
    t.addEventListener(o, (a) => {
      const i = p0(a), l = new KeyboardEvent(o, i);
      window.dispatchEvent(l);
    });
  });
}
ne({
  props: {},
  setup(e, { slots: t, attrs: n }) {
    if (!t.default)
      return null;
    let r = !1, o;
    const a = t.default();
    Rt(() => {
      o && Object.defineProperty(document, "body", o);
    });
    async function i() {
      var s;
      const l = this;
      if (u0(l), s0(l), l0(l), c0(l), !r) {
        o = Object.getOwnPropertyDescriptor(document, "body"), Object.defineProperty(document, "body", {
          configurable: !0,
          get() {
            var p;
            return (p = l.contentWindow) == null ? void 0 : p.document.body;
          }
        });
        const u = document.head.appendChild.bind(document.head), d = document.head.removeChild.bind(document.head);
        Object.defineProperty(document.head, "appendChild", {
          configurable: !0,
          get() {
            return (p) => {
              var h;
              p instanceof HTMLStyleElement && p.getAttribute("data-vite-dev-id") ? (h = l.contentWindow) == null || h.document.head.appendChild(p) : u(p);
            };
          }
        }), Object.defineProperty(document.head, "removeChild", {
          configurable: !0,
          get() {
            return (p) => {
              var h;
              p instanceof HTMLStyleElement && p.getAttribute("data-vite-dev-id") ? (h = l.contentWindow) == null || h.document.head.removeChild(p) : d(p);
            };
          }
        }), r = !0;
      }
      xu(a[0], (s = l.contentWindow) == null ? void 0 : s.document.body);
    }
    return () => Ut("iframe", {
      onload: i,
      ...n
    });
  }
});
function d0(e) {
  const t = {};
  return ["clientY", "clientX", "screenX", "screenY", "ctrlKey", "shiftKey", "altKey", "metaKey", "button"].forEach((r) => {
    t[r] = e[r];
  }), t;
}
function p0(e) {
  const t = {};
  return ["key", "code", "location", "ctrlKey", "shiftKey", "altKey", "metaKey", "repeat", "isComposing", "charCode", "keyCode", "which"].forEach((r) => {
    t[r] = e[r];
  }), t;
}
var ai = dn({}), gc = /* @__PURE__ */ new Map(), Ko = {
  widgetNamespace: ai,
  scope: new vc(),
  mode: "editor",
  renderFnMap: gc,
  getWidget: bc
};
function bc(e, t = Ko.mode) {
  var n;
  return ((n = ai[t]) == null ? void 0 : n.get(e)) || ai.default.get(e);
}
function f0(e = Ko.mode) {
  return gc.get(e);
}
var h0 = class {
  constructor(e, t, n, r) {
    this.mode = e, this.node = t, this.widget = n, this.scope = r;
  }
  exec() {
    return this._vnode;
  }
  slot(e) {
    if (!this.node.children.length)
      return this;
    const t = {};
    return e.forEach((n) => {
      t[n] = (r) => this.node.children.map((o) => {
        if ((o.attrs.slot || "default") === n) {
          const a = $alioth_interval.getWidget(o.attrs.key);
          if (!a)
            throw new Error(`miss widget "${o.attrs.key}"`);
          return $alioth_interval.renderFnMap.get(this.mode)({ props: r, scope: this.scope, node: o, widget: a, mode: this.mode });
        }
      });
    }), this._vnode = t, this;
  }
  mount(e = document.body) {
    return this._vnode ? (xu(this._vnode, e), this) : this;
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
    return this._vnode = Ut("div", { default: () => this._vnode }), this;
  }
};
ne({
  name: "AliothRender",
  inheritAttrs: !1,
  props: {
    mode: {
      type: String
    },
    node: {
      type: Object,
      required: !0
    }
  },
  setup(e) {
    return () => f0(e.mode)({ scope: Ko.scope, node: e.node, widget: bc(e.node.attrs.key, e.mode), mode: e.mode || Ko.mode });
  }
});
var ii = class {
  constructor() {
    this.componentMap = {}, this.headers = [], this.zones = [];
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
mc([
  Jd
], ii.prototype, "_init", 1);
ii = mc([
  Zd,
  Qd("view")
], ii);
ne({
  setup(e, { attrs: t, slots: n }) {
    const r = dn({
      scale: 1,
      x: 0,
      y: 0
    });
    let o = !1, a, i;
    const l = V(null);
    function s(h) {
      h.button === 2 && (o = !0, a = h.clientX, i = h.clientY);
    }
    function u(h) {
      if (o) {
        h.preventDefault();
        const m = h.clientX - a, f = h.clientY - i;
        r.y += f, r.x += m, a = h.clientX;
      }
    }
    function d(h) {
      h.button === 2 && (o = !1);
    }
    function p(h) {
      h.preventDefault();
      const m = h.deltaY || h.detail;
      r.scale += m;
    }
    return at(() => {
      l.value.addEventListener("mousedown", s), l.value.addEventListener("wheel", p), document.addEventListener("mouseup", d), document.addEventListener("mousemove", u);
    }), wu(() => {
      l.value.removeEventListener("mousedown", s), l.value.removeEventListener("wheel", p), document.removeEventListener("mouseup", d), document.removeEventListener("mousemove", u);
    }), () => Ut("div", { ...t, ref: l }, n.default(r));
  }
});
class es extends h0 {
  constructor() {
    super(...arguments);
    cl(this, "propsData");
  }
  main() {
    var a;
    const { component: n } = this.widget;
    if (((a = this.node.parent) == null ? void 0 : a.id) === "root")
      return this._vnode = Ut(
        n,
        { ...this.node.attrs, a_mode: this.mode, a_node: this.node },
        this._vnode
      ), this;
    const { filter: r } = ep(this.scope.data), o = r(Fg(this.node.attrs.propsData));
    return this.mode === "render" && this.node.attrs.propsData && "modelValue" in this.node.attrs.propsData ? this._vnode = Ut(
      n,
      {
        ...o,
        "onUpdate:modelValue": (i) => {
          o.modelValue = i;
        }
      },
      this._vnode
    ) : this._vnode = Ut(
      n,
      { ...o, a_mode: this.mode, a_node: this.node },
      this._vnode
    ), this;
  }
  editAction() {
    if (!this._vnode)
      return this;
    const { selectNode: n, hoverNode: r, selectScope: o } = tp(__PHECDA__.selection);
    return this._vnode.props.onMousedown = (a) => {
      a.stopPropagation(), n.value = this.node, o.value = this.scope;
    }, this._vnode.props.onDragoverCapture = () => {
      r.value = this.node;
    }, this._vnode.props.onDragleave = () => {
      r.value = void 0;
    }, this._vnode.props.onMouseenter = () => {
      r.value = this.node;
    }, this._vnode.props.onMouseleave = () => {
      r.value = void 0;
    }, this;
  }
}
const Tk = {
  alioth: "widget",
  data: {
    key: "page",
    mode: "runtime",
    component: xf
  }
}, Dk = {
  alioth: "setRenderFn",
  data: {
    mode: "runtime",
    fn: ({ node: e, scope: t, widget: n, props: r }) => (r == null ? void 0 : r.a_node) === e ? new es("runtime", r.a_node, n, t).slot(["default"]).main().exec() : r != null && r.a_node ? void 0 : new es("runtime", e, n, t).slot(["default"]).main().exec()
  }
};
var v0 = typeof global == "object" && global && global.Object === Object && global;
const yc = v0;
var m0 = typeof self == "object" && self && self.Object === Object && self, g0 = yc || m0 || Function("return this")();
const en = g0;
var b0 = en.Symbol;
const Zt = b0;
var wc = Object.prototype, y0 = wc.hasOwnProperty, w0 = wc.toString, Nr = Zt ? Zt.toStringTag : void 0;
function x0(e) {
  var t = y0.call(e, Nr), n = e[Nr];
  try {
    e[Nr] = void 0;
    var r = !0;
  } catch {
  }
  var o = w0.call(e);
  return r && (t ? e[Nr] = n : delete e[Nr]), o;
}
var _0 = Object.prototype, S0 = _0.toString;
function C0(e) {
  return S0.call(e);
}
var E0 = "[object Null]", k0 = "[object Undefined]", ts = Zt ? Zt.toStringTag : void 0;
function Ar(e) {
  return e == null ? e === void 0 ? k0 : E0 : ts && ts in Object(e) ? x0(e) : C0(e);
}
function qn(e) {
  return e != null && typeof e == "object";
}
var O0 = "[object Symbol]";
function na(e) {
  return typeof e == "symbol" || qn(e) && Ar(e) == O0;
}
function T0(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = Array(r); ++n < r; )
    o[n] = t(e[n], n, e);
  return o;
}
var D0 = Array.isArray;
const un = D0;
var A0 = 1 / 0, ns = Zt ? Zt.prototype : void 0, rs = ns ? ns.toString : void 0;
function xc(e) {
  if (typeof e == "string")
    return e;
  if (un(e))
    return T0(e, xc) + "";
  if (na(e))
    return rs ? rs.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -A0 ? "-0" : t;
}
var M0 = /\s/;
function $0(e) {
  for (var t = e.length; t-- && M0.test(e.charAt(t)); )
    ;
  return t;
}
var I0 = /^\s+/;
function N0(e) {
  return e && e.slice(0, $0(e) + 1).replace(I0, "");
}
function Yn(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var os = 0 / 0, P0 = /^[-+]0x[0-9a-f]+$/i, L0 = /^0b[01]+$/i, j0 = /^0o[0-7]+$/i, B0 = parseInt;
function as(e) {
  if (typeof e == "number")
    return e;
  if (na(e))
    return os;
  if (Yn(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Yn(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = N0(e);
  var n = L0.test(e);
  return n || j0.test(e) ? B0(e.slice(2), n ? 2 : 8) : P0.test(e) ? os : +e;
}
function _c(e) {
  return e;
}
var F0 = "[object AsyncFunction]", R0 = "[object Function]", z0 = "[object GeneratorFunction]", H0 = "[object Proxy]";
function Sc(e) {
  if (!Yn(e))
    return !1;
  var t = Ar(e);
  return t == R0 || t == z0 || t == F0 || t == H0;
}
var V0 = en["__core-js_shared__"];
const Da = V0;
var is = function() {
  var e = /[^.]+$/.exec(Da && Da.keys && Da.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function K0(e) {
  return !!is && is in e;
}
var W0 = Function.prototype, U0 = W0.toString;
function nr(e) {
  if (e != null) {
    try {
      return U0.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var q0 = /[\\^$.*+?()[\]{}|]/g, Y0 = /^\[object .+?Constructor\]$/, G0 = Function.prototype, X0 = Object.prototype, Z0 = G0.toString, Q0 = X0.hasOwnProperty, J0 = RegExp(
  "^" + Z0.call(Q0).replace(q0, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function eb(e) {
  if (!Yn(e) || K0(e))
    return !1;
  var t = Sc(e) ? J0 : Y0;
  return t.test(nr(e));
}
function tb(e, t) {
  return e == null ? void 0 : e[t];
}
function rr(e, t) {
  var n = tb(e, t);
  return eb(n) ? n : void 0;
}
var nb = rr(en, "WeakMap");
const li = nb;
function rb(e, t, n) {
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
function ob() {
}
var ab = 800, ib = 16, lb = Date.now;
function sb(e) {
  var t = 0, n = 0;
  return function() {
    var r = lb(), o = ib - (r - n);
    if (n = r, o > 0) {
      if (++t >= ab)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function ub(e) {
  return function() {
    return e;
  };
}
var cb = function() {
  try {
    var e = rr(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
const Wo = cb;
var db = Wo ? function(e, t) {
  return Wo(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: ub(t),
    writable: !0
  });
} : _c;
const pb = db;
var fb = sb(pb);
const Cc = fb;
function hb(e, t, n, r) {
  for (var o = e.length, a = n + (r ? 1 : -1); r ? a-- : ++a < o; )
    if (t(e[a], a, e))
      return a;
  return -1;
}
function vb(e) {
  return e !== e;
}
function mb(e, t, n) {
  for (var r = n - 1, o = e.length; ++r < o; )
    if (e[r] === t)
      return r;
  return -1;
}
function gb(e, t, n) {
  return t === t ? mb(e, t, n) : hb(e, vb, n);
}
function bb(e, t) {
  var n = e == null ? 0 : e.length;
  return !!n && gb(e, t, 0) > -1;
}
var yb = 9007199254740991, wb = /^(?:0|[1-9]\d*)$/;
function Ni(e, t) {
  var n = typeof e;
  return t = t ?? yb, !!t && (n == "number" || n != "symbol" && wb.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function xb(e, t, n) {
  t == "__proto__" && Wo ? Wo(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function Pi(e, t) {
  return e === t || e !== e && t !== t;
}
var _b = Object.prototype, Sb = _b.hasOwnProperty;
function Cb(e, t, n) {
  var r = e[t];
  (!(Sb.call(e, t) && Pi(r, n)) || n === void 0 && !(t in e)) && xb(e, t, n);
}
var ls = Math.max;
function Ec(e, t, n) {
  return t = ls(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, o = -1, a = ls(r.length - t, 0), i = Array(a); ++o < a; )
      i[o] = r[t + o];
    o = -1;
    for (var l = Array(t + 1); ++o < t; )
      l[o] = r[o];
    return l[t] = n(i), rb(e, this, l);
  };
}
function Eb(e, t) {
  return Cc(Ec(e, t, _c), e + "");
}
var kb = 9007199254740991;
function Li(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= kb;
}
function kc(e) {
  return e != null && Li(e.length) && !Sc(e);
}
var Ob = Object.prototype;
function Tb(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || Ob;
  return e === n;
}
function Db(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var Ab = "[object Arguments]";
function ss(e) {
  return qn(e) && Ar(e) == Ab;
}
var Oc = Object.prototype, Mb = Oc.hasOwnProperty, $b = Oc.propertyIsEnumerable, Ib = ss(function() {
  return arguments;
}()) ? ss : function(e) {
  return qn(e) && Mb.call(e, "callee") && !$b.call(e, "callee");
};
const ji = Ib;
function Nb() {
  return !1;
}
var Tc = typeof exports == "object" && exports && !exports.nodeType && exports, us = Tc && typeof module == "object" && module && !module.nodeType && module, Pb = us && us.exports === Tc, cs = Pb ? en.Buffer : void 0, Lb = cs ? cs.isBuffer : void 0, jb = Lb || Nb;
const si = jb;
var Bb = "[object Arguments]", Fb = "[object Array]", Rb = "[object Boolean]", zb = "[object Date]", Hb = "[object Error]", Vb = "[object Function]", Kb = "[object Map]", Wb = "[object Number]", Ub = "[object Object]", qb = "[object RegExp]", Yb = "[object Set]", Gb = "[object String]", Xb = "[object WeakMap]", Zb = "[object ArrayBuffer]", Qb = "[object DataView]", Jb = "[object Float32Array]", ey = "[object Float64Array]", ty = "[object Int8Array]", ny = "[object Int16Array]", ry = "[object Int32Array]", oy = "[object Uint8Array]", ay = "[object Uint8ClampedArray]", iy = "[object Uint16Array]", ly = "[object Uint32Array]", Ie = {};
Ie[Jb] = Ie[ey] = Ie[ty] = Ie[ny] = Ie[ry] = Ie[oy] = Ie[ay] = Ie[iy] = Ie[ly] = !0;
Ie[Bb] = Ie[Fb] = Ie[Zb] = Ie[Rb] = Ie[Qb] = Ie[zb] = Ie[Hb] = Ie[Vb] = Ie[Kb] = Ie[Wb] = Ie[Ub] = Ie[qb] = Ie[Yb] = Ie[Gb] = Ie[Xb] = !1;
function sy(e) {
  return qn(e) && Li(e.length) && !!Ie[Ar(e)];
}
function uy(e) {
  return function(t) {
    return e(t);
  };
}
var Dc = typeof exports == "object" && exports && !exports.nodeType && exports, Ur = Dc && typeof module == "object" && module && !module.nodeType && module, cy = Ur && Ur.exports === Dc, Aa = cy && yc.process, dy = function() {
  try {
    var e = Ur && Ur.require && Ur.require("util").types;
    return e || Aa && Aa.binding && Aa.binding("util");
  } catch {
  }
}();
const ds = dy;
var ps = ds && ds.isTypedArray, py = ps ? uy(ps) : sy;
const Ac = py;
var fy = Object.prototype, hy = fy.hasOwnProperty;
function vy(e, t) {
  var n = un(e), r = !n && ji(e), o = !n && !r && si(e), a = !n && !r && !o && Ac(e), i = n || r || o || a, l = i ? Db(e.length, String) : [], s = l.length;
  for (var u in e)
    (t || hy.call(e, u)) && !(i && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Ni(u, s))) && l.push(u);
  return l;
}
function my(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var gy = my(Object.keys, Object);
const by = gy;
var yy = Object.prototype, wy = yy.hasOwnProperty;
function xy(e) {
  if (!Tb(e))
    return by(e);
  var t = [];
  for (var n in Object(e))
    wy.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function _y(e) {
  return kc(e) ? vy(e) : xy(e);
}
var Sy = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Cy = /^\w*$/;
function Ey(e, t) {
  if (un(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || na(e) ? !0 : Cy.test(e) || !Sy.test(e) || t != null && e in Object(t);
}
var ky = rr(Object, "create");
const Qr = ky;
function Oy() {
  this.__data__ = Qr ? Qr(null) : {}, this.size = 0;
}
function Ty(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Dy = "__lodash_hash_undefined__", Ay = Object.prototype, My = Ay.hasOwnProperty;
function $y(e) {
  var t = this.__data__;
  if (Qr) {
    var n = t[e];
    return n === Dy ? void 0 : n;
  }
  return My.call(t, e) ? t[e] : void 0;
}
var Iy = Object.prototype, Ny = Iy.hasOwnProperty;
function Py(e) {
  var t = this.__data__;
  return Qr ? t[e] !== void 0 : Ny.call(t, e);
}
var Ly = "__lodash_hash_undefined__";
function jy(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Qr && t === void 0 ? Ly : t, this;
}
function Gn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Gn.prototype.clear = Oy;
Gn.prototype.delete = Ty;
Gn.prototype.get = $y;
Gn.prototype.has = Py;
Gn.prototype.set = jy;
function By() {
  this.__data__ = [], this.size = 0;
}
function ra(e, t) {
  for (var n = e.length; n--; )
    if (Pi(e[n][0], t))
      return n;
  return -1;
}
var Fy = Array.prototype, Ry = Fy.splice;
function zy(e) {
  var t = this.__data__, n = ra(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : Ry.call(t, n, 1), --this.size, !0;
}
function Hy(e) {
  var t = this.__data__, n = ra(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function Vy(e) {
  return ra(this.__data__, e) > -1;
}
function Ky(e, t) {
  var n = this.__data__, r = ra(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function hn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
hn.prototype.clear = By;
hn.prototype.delete = zy;
hn.prototype.get = Hy;
hn.prototype.has = Vy;
hn.prototype.set = Ky;
var Wy = rr(en, "Map");
const Jr = Wy;
function Uy() {
  this.size = 0, this.__data__ = {
    hash: new Gn(),
    map: new (Jr || hn)(),
    string: new Gn()
  };
}
function qy(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function oa(e, t) {
  var n = e.__data__;
  return qy(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function Yy(e) {
  var t = oa(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Gy(e) {
  return oa(this, e).get(e);
}
function Xy(e) {
  return oa(this, e).has(e);
}
function Zy(e, t) {
  var n = oa(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function vn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
vn.prototype.clear = Uy;
vn.prototype.delete = Yy;
vn.prototype.get = Gy;
vn.prototype.has = Xy;
vn.prototype.set = Zy;
var Qy = "Expected a function";
function Bi(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Qy);
  var n = function() {
    var r = arguments, o = t ? t.apply(this, r) : r[0], a = n.cache;
    if (a.has(o))
      return a.get(o);
    var i = e.apply(this, r);
    return n.cache = a.set(o, i) || a, i;
  };
  return n.cache = new (Bi.Cache || vn)(), n;
}
Bi.Cache = vn;
var Jy = 500;
function e1(e) {
  var t = Bi(e, function(r) {
    return n.size === Jy && n.clear(), r;
  }), n = t.cache;
  return t;
}
var t1 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, n1 = /\\(\\)?/g, r1 = e1(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(t1, function(n, r, o, a) {
    t.push(o ? a.replace(n1, "$1") : r || n);
  }), t;
});
const o1 = r1;
function a1(e) {
  return e == null ? "" : xc(e);
}
function aa(e, t) {
  return un(e) ? e : Ey(e, t) ? [e] : o1(a1(e));
}
var i1 = 1 / 0;
function Fi(e) {
  if (typeof e == "string" || na(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -i1 ? "-0" : t;
}
function Mc(e, t) {
  t = aa(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[Fi(t[n++])];
  return n && n == r ? e : void 0;
}
function kt(e, t, n) {
  var r = e == null ? void 0 : Mc(e, t);
  return r === void 0 ? n : r;
}
function $c(e, t) {
  for (var n = -1, r = t.length, o = e.length; ++n < r; )
    e[o + n] = t[n];
  return e;
}
var fs = Zt ? Zt.isConcatSpreadable : void 0;
function l1(e) {
  return un(e) || ji(e) || !!(fs && e && e[fs]);
}
function Ri(e, t, n, r, o) {
  var a = -1, i = e.length;
  for (n || (n = l1), o || (o = []); ++a < i; ) {
    var l = e[a];
    t > 0 && n(l) ? t > 1 ? Ri(l, t - 1, n, r, o) : $c(o, l) : r || (o[o.length] = l);
  }
  return o;
}
function s1(e) {
  var t = e == null ? 0 : e.length;
  return t ? Ri(e, 1) : [];
}
function u1(e) {
  return Cc(Ec(e, void 0, s1), e + "");
}
function c1() {
  this.__data__ = new hn(), this.size = 0;
}
function d1(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function p1(e) {
  return this.__data__.get(e);
}
function f1(e) {
  return this.__data__.has(e);
}
var h1 = 200;
function v1(e, t) {
  var n = this.__data__;
  if (n instanceof hn) {
    var r = n.__data__;
    if (!Jr || r.length < h1 - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new vn(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
function Dn(e) {
  var t = this.__data__ = new hn(e);
  this.size = t.size;
}
Dn.prototype.clear = c1;
Dn.prototype.delete = d1;
Dn.prototype.get = p1;
Dn.prototype.has = f1;
Dn.prototype.set = v1;
function m1(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = 0, a = []; ++n < r; ) {
    var i = e[n];
    t(i, n, e) && (a[o++] = i);
  }
  return a;
}
function g1() {
  return [];
}
var b1 = Object.prototype, y1 = b1.propertyIsEnumerable, hs = Object.getOwnPropertySymbols, w1 = hs ? function(e) {
  return e == null ? [] : (e = Object(e), m1(hs(e), function(t) {
    return y1.call(e, t);
  }));
} : g1;
const x1 = w1;
function _1(e, t, n) {
  var r = t(e);
  return un(e) ? r : $c(r, n(e));
}
function vs(e) {
  return _1(e, _y, x1);
}
var S1 = rr(en, "DataView");
const ui = S1;
var C1 = rr(en, "Promise");
const ci = C1;
var E1 = rr(en, "Set");
const vr = E1;
var ms = "[object Map]", k1 = "[object Object]", gs = "[object Promise]", bs = "[object Set]", ys = "[object WeakMap]", ws = "[object DataView]", O1 = nr(ui), T1 = nr(Jr), D1 = nr(ci), A1 = nr(vr), M1 = nr(li), Fn = Ar;
(ui && Fn(new ui(new ArrayBuffer(1))) != ws || Jr && Fn(new Jr()) != ms || ci && Fn(ci.resolve()) != gs || vr && Fn(new vr()) != bs || li && Fn(new li()) != ys) && (Fn = function(e) {
  var t = Ar(e), n = t == k1 ? e.constructor : void 0, r = n ? nr(n) : "";
  if (r)
    switch (r) {
      case O1:
        return ws;
      case T1:
        return ms;
      case D1:
        return gs;
      case A1:
        return bs;
      case M1:
        return ys;
    }
  return t;
});
const xs = Fn;
var $1 = en.Uint8Array;
const _s = $1;
var I1 = "__lodash_hash_undefined__";
function N1(e) {
  return this.__data__.set(e, I1), this;
}
function P1(e) {
  return this.__data__.has(e);
}
function eo(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new vn(); ++t < n; )
    this.add(e[t]);
}
eo.prototype.add = eo.prototype.push = N1;
eo.prototype.has = P1;
function L1(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function Ic(e, t) {
  return e.has(t);
}
var j1 = 1, B1 = 2;
function Nc(e, t, n, r, o, a) {
  var i = n & j1, l = e.length, s = t.length;
  if (l != s && !(i && s > l))
    return !1;
  var u = a.get(e), d = a.get(t);
  if (u && d)
    return u == t && d == e;
  var p = -1, h = !0, m = n & B1 ? new eo() : void 0;
  for (a.set(e, t), a.set(t, e); ++p < l; ) {
    var f = e[p], v = t[p];
    if (r)
      var y = i ? r(v, f, p, t, e, a) : r(f, v, p, e, t, a);
    if (y !== void 0) {
      if (y)
        continue;
      h = !1;
      break;
    }
    if (m) {
      if (!L1(t, function(g, x) {
        if (!Ic(m, x) && (f === g || o(f, g, n, r, a)))
          return m.push(x);
      })) {
        h = !1;
        break;
      }
    } else if (!(f === v || o(f, v, n, r, a))) {
      h = !1;
      break;
    }
  }
  return a.delete(e), a.delete(t), h;
}
function F1(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r, o) {
    n[++t] = [o, r];
  }), n;
}
function zi(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r) {
    n[++t] = r;
  }), n;
}
var R1 = 1, z1 = 2, H1 = "[object Boolean]", V1 = "[object Date]", K1 = "[object Error]", W1 = "[object Map]", U1 = "[object Number]", q1 = "[object RegExp]", Y1 = "[object Set]", G1 = "[object String]", X1 = "[object Symbol]", Z1 = "[object ArrayBuffer]", Q1 = "[object DataView]", Ss = Zt ? Zt.prototype : void 0, Ma = Ss ? Ss.valueOf : void 0;
function J1(e, t, n, r, o, a, i) {
  switch (n) {
    case Q1:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case Z1:
      return !(e.byteLength != t.byteLength || !a(new _s(e), new _s(t)));
    case H1:
    case V1:
    case U1:
      return Pi(+e, +t);
    case K1:
      return e.name == t.name && e.message == t.message;
    case q1:
    case G1:
      return e == t + "";
    case W1:
      var l = F1;
    case Y1:
      var s = r & R1;
      if (l || (l = zi), e.size != t.size && !s)
        return !1;
      var u = i.get(e);
      if (u)
        return u == t;
      r |= z1, i.set(e, t);
      var d = Nc(l(e), l(t), r, o, a, i);
      return i.delete(e), d;
    case X1:
      if (Ma)
        return Ma.call(e) == Ma.call(t);
  }
  return !1;
}
var ew = 1, tw = Object.prototype, nw = tw.hasOwnProperty;
function rw(e, t, n, r, o, a) {
  var i = n & ew, l = vs(e), s = l.length, u = vs(t), d = u.length;
  if (s != d && !i)
    return !1;
  for (var p = s; p--; ) {
    var h = l[p];
    if (!(i ? h in t : nw.call(t, h)))
      return !1;
  }
  var m = a.get(e), f = a.get(t);
  if (m && f)
    return m == t && f == e;
  var v = !0;
  a.set(e, t), a.set(t, e);
  for (var y = i; ++p < s; ) {
    h = l[p];
    var g = e[h], x = t[h];
    if (r)
      var $ = i ? r(x, g, h, t, e, a) : r(g, x, h, e, t, a);
    if (!($ === void 0 ? g === x || o(g, x, n, r, a) : $)) {
      v = !1;
      break;
    }
    y || (y = h == "constructor");
  }
  if (v && !y) {
    var k = e.constructor, I = t.constructor;
    k != I && "constructor" in e && "constructor" in t && !(typeof k == "function" && k instanceof k && typeof I == "function" && I instanceof I) && (v = !1);
  }
  return a.delete(e), a.delete(t), v;
}
var ow = 1, Cs = "[object Arguments]", Es = "[object Array]", wo = "[object Object]", aw = Object.prototype, ks = aw.hasOwnProperty;
function iw(e, t, n, r, o, a) {
  var i = un(e), l = un(t), s = i ? Es : xs(e), u = l ? Es : xs(t);
  s = s == Cs ? wo : s, u = u == Cs ? wo : u;
  var d = s == wo, p = u == wo, h = s == u;
  if (h && si(e)) {
    if (!si(t))
      return !1;
    i = !0, d = !1;
  }
  if (h && !d)
    return a || (a = new Dn()), i || Ac(e) ? Nc(e, t, n, r, o, a) : J1(e, t, s, n, r, o, a);
  if (!(n & ow)) {
    var m = d && ks.call(e, "__wrapped__"), f = p && ks.call(t, "__wrapped__");
    if (m || f) {
      var v = m ? e.value() : e, y = f ? t.value() : t;
      return a || (a = new Dn()), o(v, y, n, r, a);
    }
  }
  return h ? (a || (a = new Dn()), rw(e, t, n, r, o, a)) : !1;
}
function Pc(e, t, n, r, o) {
  return e === t ? !0 : e == null || t == null || !qn(e) && !qn(t) ? e !== e && t !== t : iw(e, t, n, r, Pc, o);
}
function lw(e, t) {
  return e != null && t in Object(e);
}
function sw(e, t, n) {
  t = aa(t, e);
  for (var r = -1, o = t.length, a = !1; ++r < o; ) {
    var i = Fi(t[r]);
    if (!(a = e != null && n(e, i)))
      break;
    e = e[i];
  }
  return a || ++r != o ? a : (o = e == null ? 0 : e.length, !!o && Li(o) && Ni(i, o) && (un(e) || ji(e)));
}
function uw(e, t) {
  return e != null && sw(e, t, lw);
}
var cw = function() {
  return en.Date.now();
};
const $a = cw;
var dw = "Expected a function", pw = Math.max, fw = Math.min;
function di(e, t, n) {
  var r, o, a, i, l, s, u = 0, d = !1, p = !1, h = !0;
  if (typeof e != "function")
    throw new TypeError(dw);
  t = as(t) || 0, Yn(n) && (d = !!n.leading, p = "maxWait" in n, a = p ? pw(as(n.maxWait) || 0, t) : a, h = "trailing" in n ? !!n.trailing : h);
  function m(C) {
    var E = r, F = o;
    return r = o = void 0, u = C, i = e.apply(F, E), i;
  }
  function f(C) {
    return u = C, l = setTimeout(g, t), d ? m(C) : i;
  }
  function v(C) {
    var E = C - s, F = C - u, H = t - E;
    return p ? fw(H, a - F) : H;
  }
  function y(C) {
    var E = C - s, F = C - u;
    return s === void 0 || E >= t || E < 0 || p && F >= a;
  }
  function g() {
    var C = $a();
    if (y(C))
      return x(C);
    l = setTimeout(g, v(C));
  }
  function x(C) {
    return l = void 0, h && r ? m(C) : (r = o = void 0, i);
  }
  function $() {
    l !== void 0 && clearTimeout(l), u = 0, r = s = o = l = void 0;
  }
  function k() {
    return l === void 0 ? i : x($a());
  }
  function I() {
    var C = $a(), E = y(C);
    if (r = arguments, o = this, s = C, E) {
      if (l === void 0)
        return f(s);
      if (p)
        return clearTimeout(l), l = setTimeout(g, t), m(s);
    }
    return l === void 0 && (l = setTimeout(g, t)), i;
  }
  return I.cancel = $, I.flush = k, I;
}
function hw(e) {
  return qn(e) && kc(e);
}
function vw(e, t, n) {
  for (var r = -1, o = e == null ? 0 : e.length; ++r < o; )
    if (n(t, e[r]))
      return !0;
  return !1;
}
function Uo(e) {
  for (var t = -1, n = e == null ? 0 : e.length, r = {}; ++t < n; ) {
    var o = e[t];
    r[o[0]] = o[1];
  }
  return r;
}
function qo(e, t) {
  return Pc(e, t);
}
function ia(e) {
  return e == null;
}
function mw(e) {
  return e === void 0;
}
function gw(e, t, n, r) {
  if (!Yn(e))
    return e;
  t = aa(t, e);
  for (var o = -1, a = t.length, i = a - 1, l = e; l != null && ++o < a; ) {
    var s = Fi(t[o]), u = n;
    if (s === "__proto__" || s === "constructor" || s === "prototype")
      return e;
    if (o != i) {
      var d = l[s];
      u = r ? r(d, s, l) : void 0, u === void 0 && (u = Yn(d) ? d : Ni(t[o + 1]) ? [] : {});
    }
    Cb(l, s, u), l = l[s];
  }
  return e;
}
function bw(e, t, n) {
  for (var r = -1, o = t.length, a = {}; ++r < o; ) {
    var i = t[r], l = Mc(e, i);
    n(l, i) && gw(a, aa(i, e), l);
  }
  return a;
}
function yw(e, t) {
  return bw(e, t, function(n, r) {
    return uw(e, r);
  });
}
var ww = u1(function(e, t) {
  return e == null ? {} : yw(e, t);
});
const xw = ww;
var _w = 1 / 0, Sw = vr && 1 / zi(new vr([, -0]))[1] == _w ? function(e) {
  return new vr(e);
} : ob;
const Cw = Sw;
var Ew = 200;
function kw(e, t, n) {
  var r = -1, o = bb, a = e.length, i = !0, l = [], s = l;
  if (n)
    i = !1, o = vw;
  else if (a >= Ew) {
    var u = t ? null : Cw(e);
    if (u)
      return zi(u);
    i = !1, o = Ic, s = new eo();
  } else
    s = t ? [] : l;
  e:
    for (; ++r < a; ) {
      var d = e[r], p = t ? t(d) : d;
      if (d = n || d !== 0 ? d : 0, i && p === p) {
        for (var h = s.length; h--; )
          if (s[h] === p)
            continue e;
        t && s.push(p), l.push(d);
      } else
        o(s, p, n) || (s !== l && s.push(p), l.push(d));
    }
  return l;
}
var Ow = Eb(function(e) {
  return kw(Ri(e, 1, hw, !0));
});
const Ia = Ow, on = (e, t, { checkForDefaultPrevented: n = !0 } = {}) => (r) => {
  const o = e == null ? void 0 : e(r);
  if (n === !1 || !o)
    return t == null ? void 0 : t(r);
};
var Os;
const pt = typeof window < "u", to = (e) => typeof e == "boolean", Lt = (e) => typeof e == "number", Tw = (e) => typeof e == "string", Lc = () => {
}, Dw = pt && ((Os = window == null ? void 0 : window.navigator) == null ? void 0 : Os.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function jc(e) {
  return typeof e == "function" ? e() : c(e);
}
function Aw(e) {
  return e;
}
function Hi(e) {
  return pp() ? (fp(e), !0) : !1;
}
function Mw(e, t = !0) {
  St() ? at(e) : t ? e() : me(e);
}
function kn(e) {
  var t;
  const n = jc(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const Vi = pt ? window : void 0;
function Hn(...e) {
  let t, n, r, o;
  if (Tw(e[0]) || Array.isArray(e[0]) ? ([n, r, o] = e, t = Vi) : [t, n, r, o] = e, !t)
    return Lc;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const a = [], i = () => {
    a.forEach((d) => d()), a.length = 0;
  }, l = (d, p, h, m) => (d.addEventListener(p, h, m), () => d.removeEventListener(p, h, m)), s = ae(() => [kn(t), jc(o)], ([d, p]) => {
    i(), d && a.push(...n.flatMap((h) => r.map((m) => l(d, h, m, p))));
  }, { immediate: !0, flush: "post" }), u = () => {
    s(), i();
  };
  return Hi(u), u;
}
let Ts = !1;
function Bc(e, t, n = {}) {
  const { window: r = Vi, ignore: o = [], capture: a = !0, detectIframe: i = !1 } = n;
  if (!r)
    return;
  Dw && !Ts && (Ts = !0, Array.from(r.document.body.children).forEach((d) => d.addEventListener("click", Lc)));
  let l = !0;
  const s = (d) => o.some((p) => {
    if (typeof p == "string")
      return Array.from(r.document.querySelectorAll(p)).some((h) => h === d.target || d.composedPath().includes(h));
    {
      const h = kn(p);
      return h && (d.target === h || d.composedPath().includes(h));
    }
  }), u = [
    Hn(r, "click", (d) => {
      const p = kn(e);
      if (!(!p || p === d.target || d.composedPath().includes(p))) {
        if (d.detail === 0 && (l = !s(d)), !l) {
          l = !0;
          return;
        }
        t(d);
      }
    }, { passive: !0, capture: a }),
    Hn(r, "pointerdown", (d) => {
      const p = kn(e);
      p && (l = !d.composedPath().includes(p) && !s(d));
    }, { passive: !0 }),
    i && Hn(r, "blur", (d) => {
      var p;
      const h = kn(e);
      ((p = r.document.activeElement) == null ? void 0 : p.tagName) === "IFRAME" && !(h != null && h.contains(r.document.activeElement)) && t(d);
    })
  ].filter(Boolean);
  return () => u.forEach((d) => d());
}
function $w(e, t = !1) {
  const n = V(), r = () => n.value = !!e();
  return r(), Mw(r, t), n;
}
const Ds = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, As = "__vueuse_ssr_handlers__";
Ds[As] = Ds[As] || {};
var Ms = Object.getOwnPropertySymbols, Iw = Object.prototype.hasOwnProperty, Nw = Object.prototype.propertyIsEnumerable, Pw = (e, t) => {
  var n = {};
  for (var r in e)
    Iw.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && Ms)
    for (var r of Ms(e))
      t.indexOf(r) < 0 && Nw.call(e, r) && (n[r] = e[r]);
  return n;
};
function la(e, t, n = {}) {
  const r = n, { window: o = Vi } = r, a = Pw(r, ["window"]);
  let i;
  const l = $w(() => o && "ResizeObserver" in o), s = () => {
    i && (i.disconnect(), i = void 0);
  }, u = ae(() => kn(e), (p) => {
    s(), l.value && o && p && (i = new ResizeObserver(t), i.observe(p, a));
  }, { immediate: !0, flush: "post" }), d = () => {
    s(), u();
  };
  return Hi(d), {
    isSupported: l,
    stop: d
  };
}
var $s;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})($s || ($s = {}));
var Lw = Object.defineProperty, Is = Object.getOwnPropertySymbols, jw = Object.prototype.hasOwnProperty, Bw = Object.prototype.propertyIsEnumerable, Ns = (e, t, n) => t in e ? Lw(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Fw = (e, t) => {
  for (var n in t || (t = {}))
    jw.call(t, n) && Ns(e, n, t[n]);
  if (Is)
    for (var n of Is(t))
      Bw.call(t, n) && Ns(e, n, t[n]);
  return e;
};
const Rw = {
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
Fw({
  linear: Aw
}, Rw);

const no = () => {
}, zw = Object.prototype.hasOwnProperty, ro = (e, t) => zw.call(e, t), Ue = Array.isArray, Ps = (e) => Fc(e) === "[object Date]", xt = (e) => typeof e == "function", Bt = (e) => typeof e == "string", Ft = (e) => e !== null && typeof e == "object", Hw = Object.prototype.toString, Fc = (e) => Hw.call(e), Na = (e) => Fc(e).slice(8, -1), oo = (e) => e === void 0, Rc = (e) => !e && e !== 0 || Ue(e) && e.length === 0 || Ft(e) && !Object.keys(e).length, ao = (e) => typeof Element > "u" ? !1 : e instanceof Element, Vw = (e) => Bt(e) ? !Number.isNaN(Number(e)) : !1, Kw = (e = "") => e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
class zc extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function Ww(e, t) {
  throw new zc(`[${e}] ${t}`);
}
function rt(e, t) {

}
const Uw = "utils/dom/style", Hc = (e = "") => e.split(" ").filter((t) => !!t.trim()), qw = (e, t) => {
  !e || !t.trim() || e.classList.add(...Hc(t));
}, Pa = (e, t) => {
  !e || !t.trim() || e.classList.remove(...Hc(t));
};
function pi(e, t = "px") {
  if (!e)
    return "";
  if (Lt(e) || Vw(e))
    return `${e}${t}`;
  if (Bt(e))
    return e;
  rt(Uw, "binding value must be a string or number");
}
function Yw(e, t) {
  if (!pt)
    return;
  if (!t) {
    e.scrollTop = 0;
    return;
  }
  const n = [];
  let r = t.offsetParent;
  for (; r !== null && e !== r && e.contains(r); )
    n.push(r), r = r.offsetParent;
  const o = t.offsetTop + n.reduce((s, u) => s + u.offsetTop, 0), a = o + t.offsetHeight, i = e.scrollTop, l = i + e.clientHeight;
  o < i ? e.scrollTop = o : a > l && (e.scrollTop = a - e.clientHeight);
}
/*! Element Plus Icons Vue v2.1.0 */
var zt = (e, t) => {
  let n = e.__vccOpts || e;
  for (let [r, o] of t)
    n[r] = o;
  return n;
}, Gw = {
  name: "ArrowDown"
}, Xw = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Zw = /* @__PURE__ */ Q(
  "path",
  {
    fill: "currentColor",
    d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
  },
  null,
  -1
  /* HOISTED */
), Qw = [
  Zw
];
function Jw(e, t, n, r, o, a) {
  return A(), G("svg", Xw, Qw);
}
var Vc = /* @__PURE__ */ zt(Gw, [["render", Jw], ["__file", "arrow-down.vue"]]), e2 = {
  name: "ArrowUp"
}, t2 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, n2 = /* @__PURE__ */ Q(
  "path",
  {
    fill: "currentColor",
    d: "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0z"
  },
  null,
  -1
  /* HOISTED */
), r2 = [
  n2
];
function o2(e, t, n, r, o, a) {
  return A(), G("svg", t2, r2);
}
var a2 = /* @__PURE__ */ zt(e2, [["render", o2], ["__file", "arrow-up.vue"]]), i2 = {
  name: "Calendar"
}, l2 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, s2 = /* @__PURE__ */ Q(
  "path",
  {
    fill: "currentColor",
    d: "M128 384v512h768V192H768v32a32 32 0 1 1-64 0v-32H320v32a32 32 0 0 1-64 0v-32H128v128h768v64H128zm192-256h384V96a32 32 0 1 1 64 0v32h160a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h160V96a32 32 0 0 1 64 0v32zm-32 384h64a32 32 0 0 1 0 64h-64a32 32 0 0 1 0-64zm0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64zm192-192h64a32 32 0 0 1 0 64h-64a32 32 0 0 1 0-64zm0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64zm192-192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64zm0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64z"
  },
  null,
  -1
  /* HOISTED */
), u2 = [
  s2
];
function c2(e, t, n, r, o, a) {
  return A(), G("svg", l2, u2);
}
var d2 = /* @__PURE__ */ zt(i2, [["render", c2], ["__file", "calendar.vue"]]), p2 = {
  name: "CaretRight"
}, f2 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, h2 = /* @__PURE__ */ Q(
  "path",
  {
    fill: "currentColor",
    d: "M384 192v640l384-320.064z"
  },
  null,
  -1
  /* HOISTED */
), v2 = [
  h2
];
function m2(e, t, n, r, o, a) {
  return A(), G("svg", f2, v2);
}
var g2 = /* @__PURE__ */ zt(p2, [["render", m2], ["__file", "caret-right.vue"]]), b2 = {
  name: "CircleCheck"
}, y2 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, w2 = /* @__PURE__ */ Q(
  "path",
  {
    fill: "currentColor",
    d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
  },
  null,
  -1
  /* HOISTED */
), x2 = /* @__PURE__ */ Q(
  "path",
  {
    fill: "currentColor",
    d: "M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z"
  },
  null,
  -1
  /* HOISTED */
), _2 = [
  w2,
  x2
];
function S2(e, t, n, r, o, a) {
  return A(), G("svg", y2, _2);
}
var C2 = /* @__PURE__ */ zt(b2, [["render", S2], ["__file", "circle-check.vue"]]), E2 = {
  name: "CircleClose"
}, k2 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, O2 = /* @__PURE__ */ Q(
  "path",
  {
    fill: "currentColor",
    d: "m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248L466.752 512z"
  },
  null,
  -1
  /* HOISTED */
), T2 = /* @__PURE__ */ Q(
  "path",
  {
    fill: "currentColor",
    d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
  },
  null,
  -1
  /* HOISTED */
), D2 = [
  O2,
  T2
];
function A2(e, t, n, r, o, a) {
  return A(), G("svg", k2, D2);
}
var sa = /* @__PURE__ */ zt(E2, [["render", A2], ["__file", "circle-close.vue"]]), M2 = {
  name: "Clock"
}, $2 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, I2 = /* @__PURE__ */ Q(
  "path",
  {
    fill: "currentColor",
    d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
  },
  null,
  -1
  /* HOISTED */
), N2 = /* @__PURE__ */ Q(
  "path",
  {
    fill: "currentColor",
    d: "M480 256a32 32 0 0 1 32 32v256a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32z"
  },
  null,
  -1
  /* HOISTED */
), P2 = /* @__PURE__ */ Q(
  "path",
  {
    fill: "currentColor",
    d: "M480 512h256q32 0 32 32t-32 32H480q-32 0-32-32t32-32z"
  },
  null,
  -1
  /* HOISTED */
), L2 = [
  I2,
  N2,
  P2
];
function j2(e, t, n, r, o, a) {
  return A(), G("svg", $2, L2);
}
var B2 = /* @__PURE__ */ zt(M2, [["render", j2], ["__file", "clock.vue"]]), F2 = {
  name: "Close"
}, R2 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, z2 = /* @__PURE__ */ Q(
  "path",
  {
    fill: "currentColor",
    d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
  },
  null,
  -1
  /* HOISTED */
), H2 = [
  z2
];
function V2(e, t, n, r, o, a) {
  return A(), G("svg", R2, H2);
}
var Ls = /* @__PURE__ */ zt(F2, [["render", V2], ["__file", "close.vue"]]), K2 = {
  name: "Hide"
}, W2 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, U2 = /* @__PURE__ */ Q(
  "path",
  {
    fill: "currentColor",
    d: "M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2L371.2 588.8ZM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z"
  },
  null,
  -1
  /* HOISTED */
), q2 = /* @__PURE__ */ Q(
  "path",
  {
    fill: "currentColor",
    d: "M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z"
  },
  null,
  -1
  /* HOISTED */
), Y2 = [
  U2,
  q2
];
function G2(e, t, n, r, o, a) {
  return A(), G("svg", W2, Y2);
}
var X2 = /* @__PURE__ */ zt(K2, [["render", G2], ["__file", "hide.vue"]]), Z2 = {
  name: "Loading"
}, Q2 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, J2 = /* @__PURE__ */ Q(
  "path",
  {
    fill: "currentColor",
    d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
  },
  null,
  -1
  /* HOISTED */
), ex = [
  J2
];
function tx(e, t, n, r, o, a) {
  return A(), G("svg", Q2, ex);
}
var Ki = /* @__PURE__ */ zt(Z2, [["render", tx], ["__file", "loading.vue"]]), nx = {
  name: "View"
}, rx = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, ox = /* @__PURE__ */ Q(
  "path",
  {
    fill: "currentColor",
    d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352zm0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448zm0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160z"
  },
  null,
  -1
  /* HOISTED */
), ax = [
  ox
];
function ix(e, t, n, r, o, a) {
  return A(), G("svg", rx, ax);
}
var lx = /* @__PURE__ */ zt(nx, [["render", ix], ["__file", "view.vue"]]);
const Kc = "__epPropKey", de = (e) => e, sx = (e) => Ft(e) && !!e[Kc], ua = (e, t) => {
  if (!Ft(e) || sx(e))
    return e;
  const { values: n, required: r, default: o, type: a, validator: i } = e, l = {
    type: a,
    required: !!r,
    validator: n || i ? (s) => {
      let u = !1, d = [];
      if (n && (d = Array.from(n), ro(e, "default") && d.push(o), u || (u = d.includes(s))), i && (u || (u = i(s))), !u && d.length > 0) {
        const p = [...new Set(d)].map((h) => JSON.stringify(h)).join(", ");
        cp(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${p}], got value ${JSON.stringify(s)}.`);
      }
      return u;
    } : void 0,
    [Kc]: !0
  };
  return ro(e, "default") && (l.default = o), l;
}, Be = (e) => Uo(Object.entries(e).map(([t, n]) => [
  t,
  ua(n, t)
])), Xn = de([
  String,
  Object,
  Function
]), ux = {
  validating: Ki,
  success: C2,
  error: sa
}, mn = (e, t) => {
  if (e.install = (n) => {
    for (const r of [e, ...Object.values(t ?? {})])
      n.component(r.name, r);
  }, t)
    for (const [n, r] of Object.entries(t))
      e[n] = r;
  return e;
}, po = (e) => (e.install = no, e), qe = {
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
}, dt = "update:modelValue", Wc = "change", Wi = ["", "default", "small", "large"], cx = {
  large: 40,
  default: 32,
  small: 24
}, dx = (e) => cx[e || "default"], px = (e) => ["", ...Wi].includes(e), Uc = (e) => /([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi.test(e), fx = (e) => e, hx = ["class", "style"], vx = /^on[A-Z]/, mx = (e = {}) => {
  const { excludeListeners: t = !1, excludeKeys: n } = e, r = O(() => ((n == null ? void 0 : n.value) || []).concat(hx)), o = St();
  return o ? O(() => {
    var a;
    return Uo(Object.entries((a = o.proxy) == null ? void 0 : a.$attrs).filter(([i]) => !r.value.includes(i) && !(t && vx.test(i))));
  }) : (rt("use-attrs", "getCurrentInstance() returned null. useAttrs() must be called at the top of a setup function"), O(() => ({})));
}, qc = Symbol("buttonGroupContextKey"), Mr = Symbol("checkboxGroupContextKey"), gx = Symbol(), Ui = Symbol("formContextKey"), io = Symbol("formItemContextKey"), Yc = Symbol("scrollbarContextKey"), qi = Symbol("popper"), Gc = Symbol("popperContent"), Yi = Symbol("elTooltip"), Xc = (e) => {
  const t = St();
  return O(() => {
    var n, r;
    return (r = ((n = t.proxy) == null ? void 0 : n.$props)[e]) != null ? r : void 0;
  });
}, js = V();
function or(e, t = void 0) {
  const n = St() ? Se(gx, js) : js;
  return e ? O(() => {
    var r, o;
    return (o = (r = n.value) == null ? void 0 : r[e]) != null ? o : t;
  }) : n;
}
const fo = ua({
  type: String,
  values: Wi,
  required: !1
}), Zn = (e, t = {}) => {
  const n = V(void 0), r = t.prop ? n : Xc("size"), o = t.global ? n : or("size"), a = t.form ? { size: void 0 } : Se(Ui, void 0), i = t.formItem ? { size: void 0 } : Se(io, void 0);
  return O(() => r.value || c(e) || (i == null ? void 0 : i.size) || (a == null ? void 0 : a.size) || o.value || "");
}, ca = (e) => {
  const t = Xc("disabled"), n = Se(Ui, void 0);
  return O(() => t.value || c(e) || (n == null ? void 0 : n.disabled) || !1);
}, Zc = ({ from: e, replacement: t, scope: n, version: r, ref: o, type: a = "API" }, i) => {
  ae(() => c(i), (l) => {
    l && rt(n, `[${a}] ${e} is about to be deprecated in version ${r}, please use ${t} instead.
For more detail, please visit: ${o}
`);
  }, {
    immediate: !0
  });
}, bx = (e) => ({
  focus: () => {
    var t, n;
    (n = (t = e.value) == null ? void 0 : t.focus) == null || n.call(t);
  }
}), Gi = "el", yx = "is-", Ln = (e, t, n, r, o) => {
  let a = `${e}-${t}`;
  return n && (a += `-${n}`), r && (a += `__${r}`), o && (a += `--${o}`), a;
}, ge = (e) => {
  const t = or("namespace", Gi);
  return {
    namespace: t,
    b: (n = "") => Ln(t.value, e, n, "", ""),
    e: (n) => n ? Ln(t.value, e, "", n, "") : "",
    m: (n) => n ? Ln(t.value, e, "", "", n) : "",
    be: (n, r) => n && r ? Ln(t.value, e, n, r, "") : "",
    em: (n, r) => n && r ? Ln(t.value, e, "", n, r) : "",
    bm: (n, r) => n && r ? Ln(t.value, e, n, "", r) : "",
    bem: (n, r, o) => n && r && o ? Ln(t.value, e, n, r, o) : "",
    is: (n, ...r) => {
      const o = r.length >= 1 ? r[0] : !0;
      return n && o ? `${yx}${n}` : "";
    },
    cssVar: (n) => {
      const r = {};
      for (const o in n)
        n[o] && (r[`--${t.value}-${o}`] = n[o]);
      return r;
    },
    cssVarName: (n) => `--${t.value}-${n}`,
    cssVarBlock: (n) => {
      const r = {};
      for (const o in n)
        n[o] && (r[`--${t.value}-${e}-${o}`] = n[o]);
      return r;
    },
    cssVarBlockName: (n) => `--${t.value}-${e}-${n}`
  };
}, fi = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, wx = Symbol("elIdInjection"), Qc = () => St() ? Se(wx, fi) : fi, Jc = (e) => {
  const t = Qc();
  !pt && t === fi && rt("IdInjection", `Looks like you are using server rendering, you must provide a id provider to ensure the hydration process to be succeed
usage: app.provide(ID_INJECTION_KEY, {
  prefix: number,
  current: number,
})`);
  const n = or("namespace", Gi);
  return O(() => c(e) || `${n.value}-id-${t.prefix}-${t.current++}`);
}, ar = () => {
  const e = Se(Ui, void 0), t = Se(io, void 0);
  return {
    form: e,
    formItem: t
  };
}, Xi = (e, {
  formItemContext: t,
  disableIdGeneration: n,
  disableIdManagement: r
}) => {
  n || (n = V(!1)), r || (r = V(!1));
  const o = V();
  let a;
  const i = O(() => {
    var l;
    return !!(!e.label && t && t.inputIds && ((l = t.inputIds) == null ? void 0 : l.length) <= 1);
  });
  return at(() => {
    a = ae([qt(e, "id"), n], ([l, s]) => {
      const u = l ?? (s ? void 0 : Jc().value);
      u !== o.value && (t != null && t.removeInputId && (o.value && t.removeInputId(o.value), !(r != null && r.value) && !s && u && t.addInputId(u)), o.value = u);
    }, { immediate: !0 });
  }), dp(() => {
    a && a(), t != null && t.removeInputId && o.value && t.removeInputId(o.value);
  }), {
    isLabeledByFormItem: i,
    inputId: o
  };
};
var xx = {
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
const _x = (e) => (t, n) => Sx(t, n, c(e)), Sx = (e, t, n) => kt(n, e, e).replace(/\{(\w+)\}/g, (r, o) => {
  var a;
  return `${(a = t == null ? void 0 : t[o]) != null ? a : `{${o}}`}`;
}), Cx = (e) => {
  const t = O(() => c(e).name), n = Gr(e) ? e : V(e);
  return {
    lang: t,
    locale: n,
    t: _x(e)
  };
}, ir = () => {
  const e = or("locale");
  return Cx(O(() => e.value || xx));
}, Ex = ua({
  type: de(Boolean),
  default: null
}), kx = ua({
  type: de(Function)
}), Ox = (e) => {
  const t = `update:${e}`, n = `onUpdate:${e}`, r = [t], o = {
    [e]: Ex,
    [n]: kx
  };
  return {
    useModelToggle: ({
      indicator: a,
      toggleReason: i,
      shouldHideWhenRouteChanges: l,
      shouldProceed: s,
      onShow: u,
      onHide: d
    }) => {
      const p = St(), { emit: h } = p, m = p.props, f = O(() => xt(m[n])), v = O(() => m[e] === null), y = (C) => {
        a.value !== !0 && (a.value = !0, i && (i.value = C), xt(u) && u(C));
      }, g = (C) => {
        a.value !== !1 && (a.value = !1, i && (i.value = C), xt(d) && d(C));
      }, x = (C) => {
        if (m.disabled === !0 || xt(s) && !s())
          return;
        const E = f.value && pt;
        E && h(t, !0), (v.value || !E) && y(C);
      }, $ = (C) => {
        if (m.disabled === !0 || !pt)
          return;
        const E = f.value && pt;
        E && h(t, !1), (v.value || !E) && g(C);
      }, k = (C) => {
        to(C) && (m.disabled && C ? f.value && h(t, !1) : a.value !== C && (C ? y() : g()));
      }, I = () => {
        a.value ? $() : x();
      };
      return ae(() => m[e], k), l && p.appContext.config.globalProperties.$route !== void 0 && ae(() => ({
        ...p.proxy.$route
      }), () => {
        l.value && a.value && $();
      }), at(() => {
        k(m[e]);
      }), {
        hide: $,
        show: x,
        toggle: I,
        hasUpdateHandler: f
      };
    },
    useModelToggleProps: o,
    useModelToggleEmits: r
  };
};
var vt = "top", Dt = "bottom", At = "right", mt = "left", Zi = "auto", ho = [vt, Dt, At, mt], wr = "start", lo = "end", Tx = "clippingParents", ed = "viewport", Pr = "popper", Dx = "reference", Bs = ho.reduce(function(e, t) {
  return e.concat([t + "-" + wr, t + "-" + lo]);
}, []), da = [].concat(ho, [Zi]).reduce(function(e, t) {
  return e.concat([t, t + "-" + wr, t + "-" + lo]);
}, []), Ax = "beforeRead", Mx = "read", $x = "afterRead", Ix = "beforeMain", Nx = "main", Px = "afterMain", Lx = "beforeWrite", jx = "write", Bx = "afterWrite", Fx = [Ax, Mx, $x, Ix, Nx, Px, Lx, jx, Bx];
function Qt(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Ht(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function xr(e) {
  var t = Ht(e).Element;
  return e instanceof t || e instanceof Element;
}
function Tt(e) {
  var t = Ht(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Qi(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Ht(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Rx(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, o = t.attributes[n] || {}, a = t.elements[n];
    !Tt(a) || !Qt(a) || (Object.assign(a.style, r), Object.keys(o).forEach(function(i) {
      var l = o[i];
      l === !1 ? a.removeAttribute(i) : a.setAttribute(i, l === !0 ? "" : l);
    }));
  });
}
function zx(e) {
  var t = e.state, n = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(r) {
      var o = t.elements[r], a = t.attributes[r] || {}, i = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), l = i.reduce(function(s, u) {
        return s[u] = "", s;
      }, {});
      !Tt(o) || !Qt(o) || (Object.assign(o.style, l), Object.keys(a).forEach(function(s) {
        o.removeAttribute(s);
      }));
    });
  };
}
var td = { name: "applyStyles", enabled: !0, phase: "write", fn: Rx, effect: zx, requires: ["computeStyles"] };
function Gt(e) {
  return e.split("-")[0];
}
var Vn = Math.max, Yo = Math.min, _r = Math.round;
function Sr(e, t) {
  t === void 0 && (t = !1);
  var n = e.getBoundingClientRect(), r = 1, o = 1;
  if (Tt(e) && t) {
    var a = e.offsetHeight, i = e.offsetWidth;
    i > 0 && (r = _r(n.width) / i || 1), a > 0 && (o = _r(n.height) / a || 1);
  }
  return { width: n.width / r, height: n.height / o, top: n.top / o, right: n.right / r, bottom: n.bottom / o, left: n.left / r, x: n.left / r, y: n.top / o };
}
function Ji(e) {
  var t = Sr(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), { x: e.offsetLeft, y: e.offsetTop, width: n, height: r };
}
function nd(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Qi(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function cn(e) {
  return Ht(e).getComputedStyle(e);
}
function Hx(e) {
  return ["table", "td", "th"].indexOf(Qt(e)) >= 0;
}
function $n(e) {
  return ((xr(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function pa(e) {
  return Qt(e) === "html" ? e : e.assignedSlot || e.parentNode || (Qi(e) ? e.host : null) || $n(e);
}
function Fs(e) {
  return !Tt(e) || cn(e).position === "fixed" ? null : e.offsetParent;
}
function Vx(e) {
  var t = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1, n = navigator.userAgent.indexOf("Trident") !== -1;
  if (n && Tt(e)) {
    var r = cn(e);
    if (r.position === "fixed")
      return null;
  }
  var o = pa(e);
  for (Qi(o) && (o = o.host); Tt(o) && ["html", "body"].indexOf(Qt(o)) < 0; ) {
    var a = cn(o);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function vo(e) {
  for (var t = Ht(e), n = Fs(e); n && Hx(n) && cn(n).position === "static"; )
    n = Fs(n);
  return n && (Qt(n) === "html" || Qt(n) === "body" && cn(n).position === "static") ? t : n || Vx(e) || t;
}
function el(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function qr(e, t, n) {
  return Vn(e, Yo(t, n));
}
function Kx(e, t, n) {
  var r = qr(e, t, n);
  return r > n ? n : r;
}
function rd() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function od(e) {
  return Object.assign({}, rd(), e);
}
function ad(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var Wx = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, od(typeof e != "number" ? e : ad(e, ho));
};
function Ux(e) {
  var t, n = e.state, r = e.name, o = e.options, a = n.elements.arrow, i = n.modifiersData.popperOffsets, l = Gt(n.placement), s = el(l), u = [mt, At].indexOf(l) >= 0, d = u ? "height" : "width";
  if (!(!a || !i)) {
    var p = Wx(o.padding, n), h = Ji(a), m = s === "y" ? vt : mt, f = s === "y" ? Dt : At, v = n.rects.reference[d] + n.rects.reference[s] - i[s] - n.rects.popper[d], y = i[s] - n.rects.reference[s], g = vo(a), x = g ? s === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0, $ = v / 2 - y / 2, k = p[m], I = x - h[d] - p[f], C = x / 2 - h[d] / 2 + $, E = qr(k, C, I), F = s;
    n.modifiersData[r] = (t = {}, t[F] = E, t.centerOffset = E - C, t);
  }
}
function qx(e) {
  var t = e.state, n = e.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || !nd(t.elements.popper, o) || (t.elements.arrow = o));
}
var Yx = { name: "arrow", enabled: !0, phase: "main", fn: Ux, effect: qx, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function Cr(e) {
  return e.split("-")[1];
}
var Gx = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function Xx(e) {
  var t = e.x, n = e.y, r = window, o = r.devicePixelRatio || 1;
  return { x: _r(t * o) / o || 0, y: _r(n * o) / o || 0 };
}
function Rs(e) {
  var t, n = e.popper, r = e.popperRect, o = e.placement, a = e.variation, i = e.offsets, l = e.position, s = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, p = e.isFixed, h = i.x, m = h === void 0 ? 0 : h, f = i.y, v = f === void 0 ? 0 : f, y = typeof d == "function" ? d({ x: m, y: v }) : { x: m, y: v };
  m = y.x, v = y.y;
  var g = i.hasOwnProperty("x"), x = i.hasOwnProperty("y"), $ = mt, k = vt, I = window;
  if (u) {
    var C = vo(n), E = "clientHeight", F = "clientWidth";
    if (C === Ht(n) && (C = $n(n), cn(C).position !== "static" && l === "absolute" && (E = "scrollHeight", F = "scrollWidth")), C = C, o === vt || (o === mt || o === At) && a === lo) {
      k = Dt;
      var H = p && C === I && I.visualViewport ? I.visualViewport.height : C[E];
      v -= H - r.height, v *= s ? 1 : -1;
    }
    if (o === mt || (o === vt || o === Dt) && a === lo) {
      $ = At;
      var R = p && C === I && I.visualViewport ? I.visualViewport.width : C[F];
      m -= R - r.width, m *= s ? 1 : -1;
    }
  }
  var q = Object.assign({ position: l }, u && Gx), J = d === !0 ? Xx({ x: m, y: v }) : { x: m, y: v };
  if (m = J.x, v = J.y, s) {
    var L;
    return Object.assign({}, q, (L = {}, L[k] = x ? "0" : "", L[$] = g ? "0" : "", L.transform = (I.devicePixelRatio || 1) <= 1 ? "translate(" + m + "px, " + v + "px)" : "translate3d(" + m + "px, " + v + "px, 0)", L));
  }
  return Object.assign({}, q, (t = {}, t[k] = x ? v + "px" : "", t[$] = g ? m + "px" : "", t.transform = "", t));
}
function Zx(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, o = r === void 0 ? !0 : r, a = n.adaptive, i = a === void 0 ? !0 : a, l = n.roundOffsets, s = l === void 0 ? !0 : l, u = { placement: Gt(t.placement), variation: Cr(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: o, isFixed: t.options.strategy === "fixed" };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Rs(Object.assign({}, u, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: i, roundOffsets: s })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Rs(Object.assign({}, u, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: s })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var id = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: Zx, data: {} }, xo = { passive: !0 };
function Qx(e) {
  var t = e.state, n = e.instance, r = e.options, o = r.scroll, a = o === void 0 ? !0 : o, i = r.resize, l = i === void 0 ? !0 : i, s = Ht(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && u.forEach(function(d) {
    d.addEventListener("scroll", n.update, xo);
  }), l && s.addEventListener("resize", n.update, xo), function() {
    a && u.forEach(function(d) {
      d.removeEventListener("scroll", n.update, xo);
    }), l && s.removeEventListener("resize", n.update, xo);
  };
}
var ld = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
}, effect: Qx, data: {} }, Jx = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Io(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Jx[t];
  });
}
var e_ = { start: "end", end: "start" };
function zs(e) {
  return e.replace(/start|end/g, function(t) {
    return e_[t];
  });
}
function tl(e) {
  var t = Ht(e), n = t.pageXOffset, r = t.pageYOffset;
  return { scrollLeft: n, scrollTop: r };
}
function nl(e) {
  return Sr($n(e)).left + tl(e).scrollLeft;
}
function t_(e) {
  var t = Ht(e), n = $n(e), r = t.visualViewport, o = n.clientWidth, a = n.clientHeight, i = 0, l = 0;
  return r && (o = r.width, a = r.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (i = r.offsetLeft, l = r.offsetTop)), { width: o, height: a, x: i + nl(e), y: l };
}
function n_(e) {
  var t, n = $n(e), r = tl(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, a = Vn(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), i = Vn(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), l = -r.scrollLeft + nl(e), s = -r.scrollTop;
  return cn(o || n).direction === "rtl" && (l += Vn(n.clientWidth, o ? o.clientWidth : 0) - a), { width: a, height: i, x: l, y: s };
}
function rl(e) {
  var t = cn(e), n = t.overflow, r = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function sd(e) {
  return ["html", "body", "#document"].indexOf(Qt(e)) >= 0 ? e.ownerDocument.body : Tt(e) && rl(e) ? e : sd(pa(e));
}
function Yr(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = sd(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), a = Ht(r), i = o ? [a].concat(a.visualViewport || [], rl(r) ? r : []) : r, l = t.concat(i);
  return o ? l : l.concat(Yr(pa(i)));
}
function hi(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function r_(e) {
  var t = Sr(e);
  return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t;
}
function Hs(e, t) {
  return t === ed ? hi(t_(e)) : xr(t) ? r_(t) : hi(n_($n(e)));
}
function o_(e) {
  var t = Yr(pa(e)), n = ["absolute", "fixed"].indexOf(cn(e).position) >= 0, r = n && Tt(e) ? vo(e) : e;
  return xr(r) ? t.filter(function(o) {
    return xr(o) && nd(o, r) && Qt(o) !== "body";
  }) : [];
}
function a_(e, t, n) {
  var r = t === "clippingParents" ? o_(e) : [].concat(t), o = [].concat(r, [n]), a = o[0], i = o.reduce(function(l, s) {
    var u = Hs(e, s);
    return l.top = Vn(u.top, l.top), l.right = Yo(u.right, l.right), l.bottom = Yo(u.bottom, l.bottom), l.left = Vn(u.left, l.left), l;
  }, Hs(e, a));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function ud(e) {
  var t = e.reference, n = e.element, r = e.placement, o = r ? Gt(r) : null, a = r ? Cr(r) : null, i = t.x + t.width / 2 - n.width / 2, l = t.y + t.height / 2 - n.height / 2, s;
  switch (o) {
    case vt:
      s = { x: i, y: t.y - n.height };
      break;
    case Dt:
      s = { x: i, y: t.y + t.height };
      break;
    case At:
      s = { x: t.x + t.width, y: l };
      break;
    case mt:
      s = { x: t.x - n.width, y: l };
      break;
    default:
      s = { x: t.x, y: t.y };
  }
  var u = o ? el(o) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (a) {
      case wr:
        s[u] = s[u] - (t[d] / 2 - n[d] / 2);
        break;
      case lo:
        s[u] = s[u] + (t[d] / 2 - n[d] / 2);
        break;
    }
  }
  return s;
}
function so(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = r === void 0 ? e.placement : r, a = n.boundary, i = a === void 0 ? Tx : a, l = n.rootBoundary, s = l === void 0 ? ed : l, u = n.elementContext, d = u === void 0 ? Pr : u, p = n.altBoundary, h = p === void 0 ? !1 : p, m = n.padding, f = m === void 0 ? 0 : m, v = od(typeof f != "number" ? f : ad(f, ho)), y = d === Pr ? Dx : Pr, g = e.rects.popper, x = e.elements[h ? y : d], $ = a_(xr(x) ? x : x.contextElement || $n(e.elements.popper), i, s), k = Sr(e.elements.reference), I = ud({ reference: k, element: g, strategy: "absolute", placement: o }), C = hi(Object.assign({}, g, I)), E = d === Pr ? C : k, F = { top: $.top - E.top + v.top, bottom: E.bottom - $.bottom + v.bottom, left: $.left - E.left + v.left, right: E.right - $.right + v.right }, H = e.modifiersData.offset;
  if (d === Pr && H) {
    var R = H[o];
    Object.keys(F).forEach(function(q) {
      var J = [At, Dt].indexOf(q) >= 0 ? 1 : -1, L = [vt, Dt].indexOf(q) >= 0 ? "y" : "x";
      F[q] += R[L] * J;
    });
  }
  return F;
}
function i_(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = n.boundary, a = n.rootBoundary, i = n.padding, l = n.flipVariations, s = n.allowedAutoPlacements, u = s === void 0 ? da : s, d = Cr(r), p = d ? l ? Bs : Bs.filter(function(f) {
    return Cr(f) === d;
  }) : ho, h = p.filter(function(f) {
    return u.indexOf(f) >= 0;
  });
  h.length === 0 && (h = p);
  var m = h.reduce(function(f, v) {
    return f[v] = so(e, { placement: v, boundary: o, rootBoundary: a, padding: i })[Gt(v)], f;
  }, {});
  return Object.keys(m).sort(function(f, v) {
    return m[f] - m[v];
  });
}
function l_(e) {
  if (Gt(e) === Zi)
    return [];
  var t = Io(e);
  return [zs(e), t, zs(t)];
}
function s_(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var o = n.mainAxis, a = o === void 0 ? !0 : o, i = n.altAxis, l = i === void 0 ? !0 : i, s = n.fallbackPlacements, u = n.padding, d = n.boundary, p = n.rootBoundary, h = n.altBoundary, m = n.flipVariations, f = m === void 0 ? !0 : m, v = n.allowedAutoPlacements, y = t.options.placement, g = Gt(y), x = g === y, $ = s || (x || !f ? [Io(y)] : l_(y)), k = [y].concat($).reduce(function(ve, pe) {
      return ve.concat(Gt(pe) === Zi ? i_(t, { placement: pe, boundary: d, rootBoundary: p, padding: u, flipVariations: f, allowedAutoPlacements: v }) : pe);
    }, []), I = t.rects.reference, C = t.rects.popper, E = /* @__PURE__ */ new Map(), F = !0, H = k[0], R = 0; R < k.length; R++) {
      var q = k[R], J = Gt(q), L = Cr(q) === wr, M = [vt, Dt].indexOf(J) >= 0, S = M ? "width" : "height", P = so(t, { placement: q, boundary: d, rootBoundary: p, altBoundary: h, padding: u }), _ = M ? L ? At : mt : L ? Dt : vt;
      I[S] > C[S] && (_ = Io(_));
      var T = Io(_), w = [];
      if (a && w.push(P[J] <= 0), l && w.push(P[_] <= 0, P[T] <= 0), w.every(function(ve) {
        return ve;
      })) {
        H = q, F = !1;
        break;
      }
      E.set(q, w);
    }
    if (F)
      for (var N = f ? 3 : 1, z = function(ve) {
        var pe = k.find(function(Ce) {
          var De = E.get(Ce);
          if (De)
            return De.slice(0, ve).every(function(be) {
              return be;
            });
        });
        if (pe)
          return H = pe, "break";
      }, X = N; X > 0; X--) {
        var ee = z(X);
        if (ee === "break")
          break;
      }
    t.placement !== H && (t.modifiersData[r]._skip = !0, t.placement = H, t.reset = !0);
  }
}
var u_ = { name: "flip", enabled: !0, phase: "main", fn: s_, requiresIfExists: ["offset"], data: { _skip: !1 } };
function Vs(e, t, n) {
  return n === void 0 && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x };
}
function Ks(e) {
  return [vt, At, Dt, mt].some(function(t) {
    return e[t] >= 0;
  });
}
function c_(e) {
  var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, a = t.modifiersData.preventOverflow, i = so(t, { elementContext: "reference" }), l = so(t, { altBoundary: !0 }), s = Vs(i, r), u = Vs(l, o, a), d = Ks(s), p = Ks(u);
  t.modifiersData[n] = { referenceClippingOffsets: s, popperEscapeOffsets: u, isReferenceHidden: d, hasPopperEscaped: p }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": d, "data-popper-escaped": p });
}
var d_ = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: c_ };
function p_(e, t, n) {
  var r = Gt(e), o = [mt, vt].indexOf(r) >= 0 ? -1 : 1, a = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, i = a[0], l = a[1];
  return i = i || 0, l = (l || 0) * o, [mt, At].indexOf(r) >= 0 ? { x: l, y: i } : { x: i, y: l };
}
function f_(e) {
  var t = e.state, n = e.options, r = e.name, o = n.offset, a = o === void 0 ? [0, 0] : o, i = da.reduce(function(d, p) {
    return d[p] = p_(p, t.rects, a), d;
  }, {}), l = i[t.placement], s = l.x, u = l.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += s, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = i;
}
var h_ = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: f_ };
function v_(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = ud({ reference: t.rects.reference, element: t.rects.popper, strategy: "absolute", placement: t.placement });
}
var cd = { name: "popperOffsets", enabled: !0, phase: "read", fn: v_, data: {} };
function m_(e) {
  return e === "x" ? "y" : "x";
}
function g_(e) {
  var t = e.state, n = e.options, r = e.name, o = n.mainAxis, a = o === void 0 ? !0 : o, i = n.altAxis, l = i === void 0 ? !1 : i, s = n.boundary, u = n.rootBoundary, d = n.altBoundary, p = n.padding, h = n.tether, m = h === void 0 ? !0 : h, f = n.tetherOffset, v = f === void 0 ? 0 : f, y = so(t, { boundary: s, rootBoundary: u, padding: p, altBoundary: d }), g = Gt(t.placement), x = Cr(t.placement), $ = !x, k = el(g), I = m_(k), C = t.modifiersData.popperOffsets, E = t.rects.reference, F = t.rects.popper, H = typeof v == "function" ? v(Object.assign({}, t.rects, { placement: t.placement })) : v, R = typeof H == "number" ? { mainAxis: H, altAxis: H } : Object.assign({ mainAxis: 0, altAxis: 0 }, H), q = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, J = { x: 0, y: 0 };
  if (C) {
    if (a) {
      var L, M = k === "y" ? vt : mt, S = k === "y" ? Dt : At, P = k === "y" ? "height" : "width", _ = C[k], T = _ + y[M], w = _ - y[S], N = m ? -F[P] / 2 : 0, z = x === wr ? E[P] : F[P], X = x === wr ? -F[P] : -E[P], ee = t.elements.arrow, ve = m && ee ? Ji(ee) : { width: 0, height: 0 }, pe = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : rd(), Ce = pe[M], De = pe[S], be = qr(0, E[P], ve[P]), W = $ ? E[P] / 2 - N - be - Ce - R.mainAxis : z - be - Ce - R.mainAxis, Z = $ ? -E[P] / 2 + N + be + De + R.mainAxis : X + be + De + R.mainAxis, ue = t.elements.arrow && vo(t.elements.arrow), ce = ue ? k === "y" ? ue.clientTop || 0 : ue.clientLeft || 0 : 0, ye = (L = q == null ? void 0 : q[k]) != null ? L : 0, Me = _ + W - ye - ce, Fe = _ + Z - ye, He = qr(m ? Yo(T, Me) : T, _, m ? Vn(w, Fe) : w);
      C[k] = He, J[k] = He - _;
    }
    if (l) {
      var fe, ft = k === "x" ? vt : mt, Ke = k === "x" ? Dt : At, Xe = C[I], it = I === "y" ? "height" : "width", K = Xe + y[ft], we = Xe - y[Ke], Ze = [vt, mt].indexOf(g) !== -1, gt = (fe = q == null ? void 0 : q[I]) != null ? fe : 0, tn = Ze ? K : Xe - E[it] - F[it] - gt + R.altAxis, Vt = Ze ? Xe + E[it] + F[it] - gt - R.altAxis : we, Pe = m && Ze ? Kx(tn, Xe, Vt) : qr(m ? tn : K, Xe, m ? Vt : we);
      C[I] = Pe, J[I] = Pe - Xe;
    }
    t.modifiersData[r] = J;
  }
}
var b_ = { name: "preventOverflow", enabled: !0, phase: "main", fn: g_, requiresIfExists: ["offset"] };
function y_(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function w_(e) {
  return e === Ht(e) || !Tt(e) ? tl(e) : y_(e);
}
function x_(e) {
  var t = e.getBoundingClientRect(), n = _r(t.width) / e.offsetWidth || 1, r = _r(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function __(e, t, n) {
  n === void 0 && (n = !1);
  var r = Tt(t), o = Tt(t) && x_(t), a = $n(t), i = Sr(e, o), l = { scrollLeft: 0, scrollTop: 0 }, s = { x: 0, y: 0 };
  return (r || !r && !n) && ((Qt(t) !== "body" || rl(a)) && (l = w_(t)), Tt(t) ? (s = Sr(t, !0), s.x += t.clientLeft, s.y += t.clientTop) : a && (s.x = nl(a))), { x: i.left + l.scrollLeft - s.x, y: i.top + l.scrollTop - s.y, width: i.width, height: i.height };
}
function S_(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
  e.forEach(function(a) {
    t.set(a.name, a);
  });
  function o(a) {
    n.add(a.name);
    var i = [].concat(a.requires || [], a.requiresIfExists || []);
    i.forEach(function(l) {
      if (!n.has(l)) {
        var s = t.get(l);
        s && o(s);
      }
    }), r.push(a);
  }
  return e.forEach(function(a) {
    n.has(a.name) || o(a);
  }), r;
}
function C_(e) {
  var t = S_(e);
  return Fx.reduce(function(n, r) {
    return n.concat(t.filter(function(o) {
      return o.phase === r;
    }));
  }, []);
}
function E_(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function k_(e) {
  var t = e.reduce(function(n, r) {
    var o = n[r.name];
    return n[r.name] = o ? Object.assign({}, o, r, { options: Object.assign({}, o.options, r.options), data: Object.assign({}, o.data, r.data) }) : r, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var Ws = { placement: "bottom", modifiers: [], strategy: "absolute" };
function Us() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function ol(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, o = t.defaultOptions, a = o === void 0 ? Ws : o;
  return function(i, l, s) {
    s === void 0 && (s = a);
    var u = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, Ws, a), modifiersData: {}, elements: { reference: i, popper: l }, attributes: {}, styles: {} }, d = [], p = !1, h = { state: u, setOptions: function(v) {
      var y = typeof v == "function" ? v(u.options) : v;
      f(), u.options = Object.assign({}, a, u.options, y), u.scrollParents = { reference: xr(i) ? Yr(i) : i.contextElement ? Yr(i.contextElement) : [], popper: Yr(l) };
      var g = C_(k_([].concat(r, u.options.modifiers)));
      return u.orderedModifiers = g.filter(function(x) {
        return x.enabled;
      }), m(), h.update();
    }, forceUpdate: function() {
      if (!p) {
        var v = u.elements, y = v.reference, g = v.popper;
        if (Us(y, g)) {
          u.rects = { reference: __(y, vo(g), u.options.strategy === "fixed"), popper: Ji(g) }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(F) {
            return u.modifiersData[F.name] = Object.assign({}, F.data);
          });
          for (var x = 0; x < u.orderedModifiers.length; x++) {
            if (u.reset === !0) {
              u.reset = !1, x = -1;
              continue;
            }
            var $ = u.orderedModifiers[x], k = $.fn, I = $.options, C = I === void 0 ? {} : I, E = $.name;
            typeof k == "function" && (u = k({ state: u, options: C, name: E, instance: h }) || u);
          }
        }
      }
    }, update: E_(function() {
      return new Promise(function(v) {
        h.forceUpdate(), v(u);
      });
    }), destroy: function() {
      f(), p = !0;
    } };
    if (!Us(i, l))
      return h;
    h.setOptions(s).then(function(v) {
      !p && s.onFirstUpdate && s.onFirstUpdate(v);
    });
    function m() {
      u.orderedModifiers.forEach(function(v) {
        var y = v.name, g = v.options, x = g === void 0 ? {} : g, $ = v.effect;
        if (typeof $ == "function") {
          var k = $({ state: u, name: y, instance: h, options: x }), I = function() {
          };
          d.push(k || I);
        }
      });
    }
    function f() {
      d.forEach(function(v) {
        return v();
      }), d = [];
    }
    return h;
  };
}
ol();
var O_ = [ld, cd, id, td];
ol({ defaultModifiers: O_ });
var T_ = [ld, cd, id, td, h_, u_, b_, Yx, d_], D_ = ol({ defaultModifiers: T_ });
const A_ = (e, t, n = {}) => {
  const r = {
    name: "updateState",
    enabled: !0,
    phase: "write",
    fn: ({ state: s }) => {
      const u = M_(s);
      Object.assign(i.value, u);
    },
    requires: ["computeStyles"]
  }, o = O(() => {
    const { onFirstUpdate: s, placement: u, strategy: d, modifiers: p } = c(n);
    return {
      onFirstUpdate: s,
      placement: u || "bottom",
      strategy: d || "absolute",
      modifiers: [
        ...p || [],
        r,
        { name: "applyStyles", enabled: !1 }
      ]
    };
  }), a = Tn(), i = V({
    styles: {
      popper: {
        position: c(o).strategy,
        left: "0",
        right: "0"
      },
      arrow: {
        position: "absolute"
      }
    },
    attributes: {}
  }), l = () => {
    a.value && (a.value.destroy(), a.value = void 0);
  };
  return ae(o, (s) => {
    const u = c(a);
    u && u.setOptions(s);
  }, {
    deep: !0
  }), ae([e, t], ([s, u]) => {
    l(), !(!s || !u) && (a.value = D_(s, u, c(o)));
  }), Rt(() => {
    l();
  }), {
    state: O(() => {
      var s;
      return { ...((s = c(a)) == null ? void 0 : s.state) || {} };
    }),
    styles: O(() => c(i).styles),
    attributes: O(() => c(i).attributes),
    update: () => {
      var s;
      return (s = c(a)) == null ? void 0 : s.update();
    },
    forceUpdate: () => {
      var s;
      return (s = c(a)) == null ? void 0 : s.forceUpdate();
    },
    instanceRef: O(() => c(a))
  };
};
function M_(e) {
  const t = Object.keys(e.elements), n = Uo(t.map((o) => [o, e.styles[o] || {}])), r = Uo(t.map((o) => [o, e.attributes[o]]));
  return {
    styles: n,
    attributes: r
  };
}
function $_() {
  let e;
  const t = (r, o) => {
    n(), e = window.setTimeout(r, o);
  }, n = () => window.clearTimeout(e);
  return Hi(() => n()), {
    registerTimeout: t,
    cancelTimeout: n
  };
}
let dr = [];
const qs = (e) => {
  const t = e;
  t.key === qe.esc && dr.forEach((n) => n(t));
}, I_ = (e) => {
  at(() => {
    dr.length === 0 && document.addEventListener("keydown", qs), pt && dr.push(e);
  }), Rt(() => {
    dr = dr.filter((t) => t !== e), dr.length === 0 && pt && document.removeEventListener("keydown", qs);
  });
};
let Ys;
const dd = () => {
  const e = or("namespace", Gi), t = Qc(), n = O(() => `${e.value}-popper-container-${t.prefix}`), r = O(() => `#${n.value}`);
  return {
    id: n,
    selector: r
  };
}, N_ = (e) => {
  const t = document.createElement("div");
  return t.id = e, document.body.appendChild(t), t;
}, P_ = () => {
  wu(() => {
    if (!pt)
      return;
    const { id: e, selector: t } = dd();
    ( !Ys && !document.body.querySelector(t.value)) && (Ys = N_(e.value));
  });
}, L_ = Be({
  showAfter: {
    type: Number,
    default: 0
  },
  hideAfter: {
    type: Number,
    default: 200
  }
}), j_ = ({
  showAfter: e,
  hideAfter: t,
  open: n,
  close: r
}) => {
  const { registerTimeout: o } = $_();
  return {
    onOpen: (a) => {
      o(() => {
        n(a);
      }, c(e));
    },
    onClose: (a) => {
      o(() => {
        r(a);
      }, c(t));
    }
  };
}, pd = Symbol("elForwardRef"), B_ = (e) => {
  et(pd, {
    setForwardRef: (t) => {
      e.value = t;
    }
  });
}, F_ = (e) => ({
  mounted(t) {
    e(t);
  },
  updated(t) {
    e(t);
  },
  unmounted() {
    e(null);
  }
}), Gs = V(0), R_ = () => {
  const e = or("zIndex", 2e3), t = O(() => e.value + Gs.value);
  return {
    initialZIndex: e,
    currentZIndex: t,
    nextZIndex: () => (Gs.value++, t.value)
  };
};
function z_(e) {
  const t = V();
  function n() {
    if (e.value == null)
      return;
    const { selectionStart: o, selectionEnd: a, value: i } = e.value;
    if (o == null || a == null)
      return;
    const l = i.slice(0, Math.max(0, o)), s = i.slice(Math.max(0, a));
    t.value = {
      selectionStart: o,
      selectionEnd: a,
      value: i,
      beforeTxt: l,
      afterTxt: s
    };
  }
  function r() {
    if (e.value == null || t.value == null)
      return;
    const { value: o } = e.value, { beforeTxt: a, afterTxt: i, selectionStart: l } = t.value;
    if (a == null || i == null || l == null)
      return;
    let s = o.length;
    if (o.endsWith(i))
      s = o.length - i.length;
    else if (o.startsWith(a))
      s = a.length;
    else {
      const u = a[l - 1], d = o.indexOf(u, l - 1);
      d !== -1 && (s = d + 1);
    }
    e.value.setSelectionRange(s, s);
  }
  return [n, r];
}
var Oe = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
};
const H_ = Be({
  size: {
    type: de([Number, String])
  },
  color: {
    type: String
  }
}), V_ = ne({
  name: "ElIcon",
  inheritAttrs: !1
}), K_ = /* @__PURE__ */ ne({
  ...V_,
  props: H_,
  setup(e) {
    const t = e, n = ge("icon"), r = O(() => {
      const { size: o, color: a } = t;
      return !o && !a ? {} : {
        fontSize: oo(o) ? void 0 : pi(o),
        "--color": a
      };
    });
    return (o, a) => (A(), G("i", jt({
      class: c(n).b(),
      style: c(r)
    }, o.$attrs), [
      _e(o.$slots, "default")
    ], 16));
  }
});
var W_ = /* @__PURE__ */ Oe(K_, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/icon/src/icon.vue"]]);
const nt = mn(W_);
let Nt;
const U_ = `
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`, q_ = [
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
function Y_(e) {
  const t = window.getComputedStyle(e), n = t.getPropertyValue("box-sizing"), r = Number.parseFloat(t.getPropertyValue("padding-bottom")) + Number.parseFloat(t.getPropertyValue("padding-top")), o = Number.parseFloat(t.getPropertyValue("border-bottom-width")) + Number.parseFloat(t.getPropertyValue("border-top-width"));
  return { contextStyle: q_.map((a) => `${a}:${t.getPropertyValue(a)}`).join(";"), paddingSize: r, borderSize: o, boxSizing: n };
}
function Xs(e, t = 1, n) {
  var r;
  Nt || (Nt = document.createElement("textarea"), document.body.appendChild(Nt));
  const { paddingSize: o, borderSize: a, boxSizing: i, contextStyle: l } = Y_(e);
  Nt.setAttribute("style", `${l};${U_}`), Nt.value = e.value || e.placeholder || "";
  let s = Nt.scrollHeight;
  const u = {};
  i === "border-box" ? s = s + a : i === "content-box" && (s = s - o), Nt.value = "";
  const d = Nt.scrollHeight - o;
  if (Lt(t)) {
    let p = d * t;
    i === "border-box" && (p = p + o + a), s = Math.max(p, s), u.minHeight = `${p}px`;
  }
  if (Lt(n)) {
    let p = d * n;
    i === "border-box" && (p = p + o + a), s = Math.min(p, s);
  }
  return u.height = `${s}px`, (r = Nt.parentNode) == null || r.removeChild(Nt), Nt = void 0, u;
}
const G_ = Be({
  id: {
    type: String,
    default: void 0
  },
  size: fo,
  disabled: Boolean,
  modelValue: {
    type: de([
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
    type: de([Boolean, Object]),
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
    type: Xn
  },
  prefixIcon: {
    type: Xn
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
    type: de([Object, Array, String]),
    default: () => fx({})
  }
}), X_ = {
  [dt]: (e) => Bt(e),
  input: (e) => Bt(e),
  change: (e) => Bt(e),
  focus: (e) => e instanceof FocusEvent,
  blur: (e) => e instanceof FocusEvent,
  clear: () => !0,
  mouseleave: (e) => e instanceof MouseEvent,
  mouseenter: (e) => e instanceof MouseEvent,
  keydown: (e) => e instanceof Event,
  compositionstart: (e) => e instanceof CompositionEvent,
  compositionupdate: (e) => e instanceof CompositionEvent,
  compositionend: (e) => e instanceof CompositionEvent
}, Z_ = ["role"], Q_ = ["id", "type", "disabled", "formatter", "parser", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder", "form"], J_ = ["id", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder", "form"], eS = ne({
  name: "ElInput",
  inheritAttrs: !1
}), tS = /* @__PURE__ */ ne({
  ...eS,
  props: G_,
  emits: X_,
  setup(e, { expose: t, emit: n }) {
    const r = e, o = rp(), a = Go(), i = O(() => {
      const K = {};
      return r.containerRole === "combobox" && (K["aria-haspopup"] = o["aria-haspopup"], K["aria-owns"] = o["aria-owns"], K["aria-expanded"] = o["aria-expanded"]), K;
    }), l = O(() => [
      r.type === "textarea" ? y.b() : v.b(),
      v.m(m.value),
      v.is("disabled", f.value),
      v.is("exceed", z.value),
      {
        [v.b("group")]: a.prepend || a.append,
        [v.bm("group", "append")]: a.append,
        [v.bm("group", "prepend")]: a.prepend,
        [v.m("prefix")]: a.prefix || r.prefixIcon,
        [v.m("suffix")]: a.suffix || r.suffixIcon || r.clearable || r.showPassword,
        [v.bm("suffix", "password-clear")]: _.value && T.value
      },
      o.class
    ]), s = O(() => [
      v.e("wrapper"),
      v.is("focus", $.value)
    ]), u = mx({
      excludeKeys: O(() => Object.keys(i.value))
    }), { form: d, formItem: p } = ar(), { inputId: h } = Xi(r, {
      formItemContext: p
    }), m = Zn(), f = ca(), v = ge("input"), y = ge("textarea"), g = Tn(), x = Tn(), $ = V(!1), k = V(!1), I = V(!1), C = V(!1), E = V(), F = Tn(r.inputStyle), H = O(() => g.value || x.value), R = O(() => {
      var K;
      return (K = d == null ? void 0 : d.statusIcon) != null ? K : !1;
    }), q = O(() => (p == null ? void 0 : p.validateState) || ""), J = O(() => q.value && ux[q.value]), L = O(() => C.value ? lx : X2), M = O(() => [
      o.style,
      r.inputStyle
    ]), S = O(() => [
      r.inputStyle,
      F.value,
      { resize: r.resize }
    ]), P = O(() => ia(r.modelValue) ? "" : String(r.modelValue)), _ = O(() => r.clearable && !f.value && !r.readonly && !!P.value && ($.value || k.value)), T = O(() => r.showPassword && !f.value && !r.readonly && !!P.value && (!!P.value || $.value)), w = O(() => r.showWordLimit && !!u.value.maxlength && (r.type === "text" || r.type === "textarea") && !f.value && !r.readonly && !r.showPassword), N = O(() => Array.from(P.value).length), z = O(() => !!w.value && N.value > Number(u.value.maxlength)), X = O(() => !!a.suffix || !!r.suffixIcon || _.value || r.showPassword || w.value || !!q.value && R.value), [ee, ve] = z_(g);
    la(x, (K) => {
      if (!w.value || r.resize !== "both")
        return;
      const we = K[0], { width: Ze } = we.contentRect;
      E.value = {
        right: `calc(100% - ${Ze + 15 + 6}px)`
      };
    });
    const pe = () => {
      const { type: K, autosize: we } = r;
      if (!(!pt || K !== "textarea"))
        if (we) {
          const Ze = Ft(we) ? we.minRows : void 0, gt = Ft(we) ? we.maxRows : void 0;
          F.value = {
            ...Xs(x.value, Ze, gt)
          };
        } else
          F.value = {
            minHeight: Xs(x.value).minHeight
          };
    }, Ce = () => {
      const K = H.value;
      !K || K.value === P.value || (K.value = P.value);
    }, De = async (K) => {
      ee();
      let { value: we } = K.target;
      if (r.formatter && (we = r.parser ? r.parser(we) : we, we = r.formatter(we)), !I.value) {
        if (we === P.value) {
          Ce();
          return;
        }
        n(dt, we), n("input", we), await me(), Ce(), ve();
      }
    }, be = (K) => {
      n("change", K.target.value);
    }, W = (K) => {
      n("compositionstart", K), I.value = !0;
    }, Z = (K) => {
      var we;
      n("compositionupdate", K);
      const Ze = (we = K.target) == null ? void 0 : we.value, gt = Ze[Ze.length - 1] || "";
      I.value = !Uc(gt);
    }, ue = (K) => {
      n("compositionend", K), I.value && (I.value = !1, De(K));
    }, ce = () => {
      C.value = !C.value, ye();
    }, ye = async () => {
      var K;
      await me(), (K = H.value) == null || K.focus();
    }, Me = () => {
      var K;
      return (K = H.value) == null ? void 0 : K.blur();
    }, Fe = (K) => {
      $.value = !0, n("focus", K);
    }, He = (K) => {
      var we;
      $.value = !1, n("blur", K), r.validateEvent && ((we = p == null ? void 0 : p.validate) == null || we.call(p, "blur").catch((Ze) => rt(Ze)));
    }, fe = (K) => {
      k.value = !1, n("mouseleave", K);
    }, ft = (K) => {
      k.value = !0, n("mouseenter", K);
    }, Ke = (K) => {
      n("keydown", K);
    }, Xe = () => {
      var K;
      (K = H.value) == null || K.select();
    }, it = () => {
      n(dt, ""), n("change", ""), n("clear"), n("input", "");
    };
    return ae(() => r.modelValue, () => {
      var K;
      me(() => pe()), r.validateEvent && ((K = p == null ? void 0 : p.validate) == null || K.call(p, "change").catch((we) => rt(we)));
    }), ae(P, () => Ce()), ae(() => r.type, async () => {
      await me(), Ce(), pe();
    }), at(() => {
      !r.formatter && r.parser && rt("ElInput", "If you set the parser, you also need to set the formatter."), Ce(), me(pe);
    }), t({
      input: g,
      textarea: x,
      ref: H,
      textareaStyle: S,
      autosize: qt(r, "autosize"),
      focus: ye,
      blur: Me,
      select: Xe,
      clear: it,
      resizeTextarea: pe
    }), (K, we) => Je((A(), G("div", jt(c(i), {
      class: c(l),
      style: c(M),
      role: K.containerRole,
      onMouseenter: ft,
      onMouseleave: fe
    }), [
      re(" input "),
      K.type !== "textarea" ? (A(), G(Ve, { key: 0 }, [
        re(" prepend slot "),
        K.$slots.prepend ? (A(), G("div", {
          key: 0,
          class: j(c(v).be("group", "prepend"))
        }, [
          _e(K.$slots, "prepend")
        ], 2)) : re("v-if", !0),
        Q("div", {
          class: j(c(s))
        }, [
          re(" prefix slot "),
          K.$slots.prefix || K.prefixIcon ? (A(), G("span", {
            key: 0,
            class: j(c(v).e("prefix"))
          }, [
            Q("span", {
              class: j(c(v).e("prefix-inner")),
              onClick: ye
            }, [
              _e(K.$slots, "prefix"),
              K.prefixIcon ? (A(), te(c(nt), {
                key: 0,
                class: j(c(v).e("icon"))
              }, {
                default: oe(() => [
                  (A(), te(st(K.prefixIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : re("v-if", !0)
            ], 2)
          ], 2)) : re("v-if", !0),
          Q("input", jt({
            id: c(h),
            ref_key: "input",
            ref: g,
            class: c(v).e("inner")
          }, c(u), {
            type: K.showPassword ? C.value ? "text" : "password" : K.type,
            disabled: c(f),
            formatter: K.formatter,
            parser: K.parser,
            readonly: K.readonly,
            autocomplete: K.autocomplete,
            tabindex: K.tabindex,
            "aria-label": K.label,
            placeholder: K.placeholder,
            style: K.inputStyle,
            form: r.form,
            onCompositionstart: W,
            onCompositionupdate: Z,
            onCompositionend: ue,
            onInput: De,
            onFocus: Fe,
            onBlur: He,
            onChange: be,
            onKeydown: Ke
          }), null, 16, Q_),
          re(" suffix slot "),
          c(X) ? (A(), G("span", {
            key: 1,
            class: j(c(v).e("suffix"))
          }, [
            Q("span", {
              class: j(c(v).e("suffix-inner")),
              onClick: ye
            }, [
              !c(_) || !c(T) || !c(w) ? (A(), G(Ve, { key: 0 }, [
                _e(K.$slots, "suffix"),
                K.suffixIcon ? (A(), te(c(nt), {
                  key: 0,
                  class: j(c(v).e("icon"))
                }, {
                  default: oe(() => [
                    (A(), te(st(K.suffixIcon)))
                  ]),
                  _: 1
                }, 8, ["class"])) : re("v-if", !0)
              ], 64)) : re("v-if", !0),
              c(_) ? (A(), te(c(nt), {
                key: 1,
                class: j([c(v).e("icon"), c(v).e("clear")]),
                onMousedown: je(c(no), ["prevent"]),
                onClick: it
              }, {
                default: oe(() => [
                  Ne(c(sa))
                ]),
                _: 1
              }, 8, ["class", "onMousedown"])) : re("v-if", !0),
              c(T) ? (A(), te(c(nt), {
                key: 2,
                class: j([c(v).e("icon"), c(v).e("password")]),
                onClick: ce
              }, {
                default: oe(() => [
                  (A(), te(st(c(L))))
                ]),
                _: 1
              }, 8, ["class"])) : re("v-if", !0),
              c(w) ? (A(), G("span", {
                key: 3,
                class: j(c(v).e("count"))
              }, [
                Q("span", {
                  class: j(c(v).e("count-inner"))
                }, ke(c(N)) + " / " + ke(c(u).maxlength), 3)
              ], 2)) : re("v-if", !0),
              c(q) && c(J) && c(R) ? (A(), te(c(nt), {
                key: 4,
                class: j([
                  c(v).e("icon"),
                  c(v).e("validateIcon"),
                  c(v).is("loading", c(q) === "validating")
                ])
              }, {
                default: oe(() => [
                  (A(), te(st(c(J))))
                ]),
                _: 1
              }, 8, ["class"])) : re("v-if", !0)
            ], 2)
          ], 2)) : re("v-if", !0)
        ], 2),
        re(" append slot "),
        K.$slots.append ? (A(), G("div", {
          key: 1,
          class: j(c(v).be("group", "append"))
        }, [
          _e(K.$slots, "append")
        ], 2)) : re("v-if", !0)
      ], 64)) : (A(), G(Ve, { key: 1 }, [
        re(" textarea "),
        Q("textarea", jt({
          id: c(h),
          ref_key: "textarea",
          ref: x,
          class: c(y).e("inner")
        }, c(u), {
          tabindex: K.tabindex,
          disabled: c(f),
          readonly: K.readonly,
          autocomplete: K.autocomplete,
          style: c(S),
          "aria-label": K.label,
          placeholder: K.placeholder,
          form: r.form,
          onCompositionstart: W,
          onCompositionupdate: Z,
          onCompositionend: ue,
          onInput: De,
          onFocus: Fe,
          onBlur: He,
          onChange: be,
          onKeydown: Ke
        }), null, 16, J_),
        c(w) ? (A(), G("span", {
          key: 0,
          style: Qe(E.value),
          class: j(c(v).e("count"))
        }, ke(c(N)) + " / " + ke(c(u).maxlength), 7)) : re("v-if", !0)
      ], 64))
    ], 16, Z_)), [
      [ln, K.type !== "hidden"]
    ]);
  }
});
var nS = /* @__PURE__ */ Oe(tS, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/input/src/input.vue"]]);
const fd = mn(nS), fr = 4, rS = {
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
}, oS = ({
  move: e,
  size: t,
  bar: n
}) => ({
  [n.size]: t,
  transform: `translate${n.axis}(${e}%)`
}), aS = Be({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: !0
  },
  always: Boolean
}), iS = "Thumb", lS = /* @__PURE__ */ ne({
  __name: "thumb",
  props: aS,
  setup(e) {
    const t = e, n = Se(Yc), r = ge("scrollbar");
    n || Ww(iS, "can not inject scrollbar context");
    const o = V(), a = V(), i = V({}), l = V(!1);
    let s = !1, u = !1, d = pt ? document.onselectstart : null;
    const p = O(() => rS[t.vertical ? "vertical" : "horizontal"]), h = O(() => oS({
      size: t.size,
      move: t.move,
      bar: p.value
    })), m = O(() => o.value[p.value.offset] ** 2 / n.wrapElement[p.value.scrollSize] / t.ratio / a.value[p.value.offset]), f = (C) => {
      var E;
      if (C.stopPropagation(), C.ctrlKey || [1, 2].includes(C.button))
        return;
      (E = window.getSelection()) == null || E.removeAllRanges(), y(C);
      const F = C.currentTarget;
      F && (i.value[p.value.axis] = F[p.value.offset] - (C[p.value.client] - F.getBoundingClientRect()[p.value.direction]));
    }, v = (C) => {
      if (!a.value || !o.value || !n.wrapElement)
        return;
      const E = Math.abs(C.target.getBoundingClientRect()[p.value.direction] - C[p.value.client]), F = a.value[p.value.offset] / 2, H = (E - F) * 100 * m.value / o.value[p.value.offset];
      n.wrapElement[p.value.scroll] = H * n.wrapElement[p.value.scrollSize] / 100;
    }, y = (C) => {
      C.stopImmediatePropagation(), s = !0, document.addEventListener("mousemove", g), document.addEventListener("mouseup", x), d = document.onselectstart, document.onselectstart = () => !1;
    }, g = (C) => {
      if (!o.value || !a.value || s === !1)
        return;
      const E = i.value[p.value.axis];
      if (!E)
        return;
      const F = (o.value.getBoundingClientRect()[p.value.direction] - C[p.value.client]) * -1, H = a.value[p.value.offset] - E, R = (F - H) * 100 * m.value / o.value[p.value.offset];
      n.wrapElement[p.value.scroll] = R * n.wrapElement[p.value.scrollSize] / 100;
    }, x = () => {
      s = !1, i.value[p.value.axis] = 0, document.removeEventListener("mousemove", g), document.removeEventListener("mouseup", x), I(), u && (l.value = !1);
    }, $ = () => {
      u = !1, l.value = !!t.size;
    }, k = () => {
      u = !0, l.value = s;
    };
    Rt(() => {
      I(), document.removeEventListener("mouseup", x);
    });
    const I = () => {
      document.onselectstart !== d && (document.onselectstart = d);
    };
    return Hn(qt(n, "scrollbarElement"), "mousemove", $), Hn(qt(n, "scrollbarElement"), "mouseleave", k), (C, E) => (A(), te(Er, {
      name: c(r).b("fade"),
      persisted: ""
    }, {
      default: oe(() => [
        Je(Q("div", {
          ref_key: "instance",
          ref: o,
          class: j([c(r).e("bar"), c(r).is(c(p).key)]),
          onMousedown: v
        }, [
          Q("div", {
            ref_key: "thumb",
            ref: a,
            class: j(c(r).e("thumb")),
            style: Qe(c(h)),
            onMousedown: f
          }, null, 38)
        ], 34), [
          [ln, C.always || l.value]
        ])
      ]),
      _: 1
    }, 8, ["name"]));
  }
});
var Zs = /* @__PURE__ */ Oe(lS, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/thumb.vue"]]);
const sS = Be({
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
}), uS = /* @__PURE__ */ ne({
  __name: "bar",
  props: sS,
  setup(e, { expose: t }) {
    const n = e, r = V(0), o = V(0);
    return t({
      handleScroll: (a) => {
        if (a) {
          const i = a.offsetHeight - fr, l = a.offsetWidth - fr;
          o.value = a.scrollTop * 100 / i * n.ratioY, r.value = a.scrollLeft * 100 / l * n.ratioX;
        }
      }
    }), (a, i) => (A(), G(Ve, null, [
      Ne(Zs, {
        move: r.value,
        ratio: a.ratioX,
        size: a.width,
        always: a.always
      }, null, 8, ["move", "ratio", "size", "always"]),
      Ne(Zs, {
        move: o.value,
        ratio: a.ratioY,
        size: a.height,
        vertical: "",
        always: a.always
      }, null, 8, ["move", "ratio", "size", "always"])
    ], 64));
  }
});
var cS = /* @__PURE__ */ Oe(uS, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/bar.vue"]]);
const dS = Be({
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
    type: de([String, Object, Array]),
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
}), pS = {
  scroll: ({
    scrollTop: e,
    scrollLeft: t
  }) => [e, t].every(Lt)
}, vi = "ElScrollbar", fS = ne({
  name: vi
}), hS = /* @__PURE__ */ ne({
  ...fS,
  props: dS,
  emits: pS,
  setup(e, { expose: t, emit: n }) {
    const r = e, o = ge("scrollbar");
    let a, i;
    const l = V(), s = V(), u = V(), d = V("0"), p = V("0"), h = V(), m = V(1), f = V(1), v = O(() => {
      const E = {};
      return r.height && (E.height = pi(r.height)), r.maxHeight && (E.maxHeight = pi(r.maxHeight)), [r.wrapStyle, E];
    }), y = O(() => [
      r.wrapClass,
      o.e("wrap"),
      { [o.em("wrap", "hidden-default")]: !r.native }
    ]), g = O(() => [o.e("view"), r.viewClass]), x = () => {
      var E;
      s.value && ((E = h.value) == null || E.handleScroll(s.value), n("scroll", {
        scrollTop: s.value.scrollTop,
        scrollLeft: s.value.scrollLeft
      }));
    };
    function $(E, F) {
      Ft(E) ? s.value.scrollTo(E) : Lt(E) && Lt(F) && s.value.scrollTo(E, F);
    }
    const k = (E) => {
      if (!Lt(E)) {
        rt(vi, "value must be a number");
        return;
      }
      s.value.scrollTop = E;
    }, I = (E) => {
      if (!Lt(E)) {
        rt(vi, "value must be a number");
        return;
      }
      s.value.scrollLeft = E;
    }, C = () => {
      if (!s.value)
        return;
      const E = s.value.offsetHeight - fr, F = s.value.offsetWidth - fr, H = E ** 2 / s.value.scrollHeight, R = F ** 2 / s.value.scrollWidth, q = Math.max(H, r.minSize), J = Math.max(R, r.minSize);
      m.value = H / (E - H) / (q / (E - q)), f.value = R / (F - R) / (J / (F - J)), p.value = q + fr < E ? `${q}px` : "", d.value = J + fr < F ? `${J}px` : "";
    };
    return ae(() => r.noresize, (E) => {
      E ? (a == null || a(), i == null || i()) : ({ stop: a } = la(u, C), i = Hn("resize", C));
    }, { immediate: !0 }), ae(() => [r.maxHeight, r.height], () => {
      r.native || me(() => {
        var E;
        C(), s.value && ((E = h.value) == null || E.handleScroll(s.value));
      });
    }), et(Yc, dn({
      scrollbarElement: l,
      wrapElement: s
    })), at(() => {
      r.native || me(() => {
        C();
      });
    }), _u(() => C()), t({
      wrapRef: s,
      update: C,
      scrollTo: $,
      setScrollTop: k,
      setScrollLeft: I,
      handleScroll: x
    }), (E, F) => (A(), G("div", {
      ref_key: "scrollbarRef",
      ref: l,
      class: j(c(o).b())
    }, [
      Q("div", {
        ref_key: "wrapRef",
        ref: s,
        class: j(c(y)),
        style: Qe(c(v)),
        onScroll: x
      }, [
        (A(), te(st(E.tag), {
          ref_key: "resizeRef",
          ref: u,
          class: j(c(g)),
          style: Qe(E.viewStyle)
        }, {
          default: oe(() => [
            _e(E.$slots, "default")
          ]),
          _: 3
        }, 8, ["class", "style"]))
      ], 38),
      E.native ? re("v-if", !0) : (A(), te(cS, {
        key: 0,
        ref_key: "barRef",
        ref: h,
        height: p.value,
        width: d.value,
        always: E.always,
        "ratio-x": f.value,
        "ratio-y": m.value
      }, null, 8, ["height", "width", "always", "ratio-x", "ratio-y"]))
    ], 2));
  }
});
var vS = /* @__PURE__ */ Oe(hS, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/scrollbar.vue"]]);
const hd = mn(vS), mS = [
  "dialog",
  "grid",
  "group",
  "listbox",
  "menu",
  "navigation",
  "tooltip",
  "tree"
], vd = Be({
  role: {
    type: String,
    values: mS,
    default: "tooltip"
  }
}), gS = ne({
  name: "ElPopper",
  inheritAttrs: !1
}), bS = /* @__PURE__ */ ne({
  ...gS,
  props: vd,
  setup(e, { expose: t }) {
    const n = e, r = V(), o = V(), a = V(), i = V(), l = O(() => n.role), s = {
      triggerRef: r,
      popperInstanceRef: o,
      contentRef: a,
      referenceRef: i,
      role: l
    };
    return t(s), et(qi, s), (u, d) => _e(u.$slots, "default");
  }
});
var yS = /* @__PURE__ */ Oe(bS, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/popper.vue"]]);
const md = Be({
  arrowOffset: {
    type: Number,
    default: 5
  }
}), wS = ne({
  name: "ElPopperArrow",
  inheritAttrs: !1
}), xS = /* @__PURE__ */ ne({
  ...wS,
  props: md,
  setup(e, { expose: t }) {
    const n = e, r = ge("popper"), { arrowOffset: o, arrowRef: a, arrowStyle: i } = Se(Gc, void 0);
    return ae(() => n.arrowOffset, (l) => {
      o.value = l;
    }), Rt(() => {
      a.value = void 0;
    }), t({
      arrowRef: a
    }), (l, s) => (A(), G("span", {
      ref_key: "arrowRef",
      ref: a,
      class: j(c(r).e("arrow")),
      style: Qe(c(i)),
      "data-popper-arrow": ""
    }, null, 6));
  }
});
var _S = /* @__PURE__ */ Oe(xS, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/arrow.vue"]]);
const La = "ElOnlyChild", SS = ne({
  name: La,
  setup(e, {
    slots: t,
    attrs: n
  }) {
    var r;
    const o = Se(pd), a = F_((r = o == null ? void 0 : o.setForwardRef) != null ? r : no);
    return () => {
      var i;
      const l = (i = t.default) == null ? void 0 : i.call(t, n);
      if (!l)
        return null;
      if (l.length > 1)
        return rt(La, "requires exact only one valid child."), null;
      const s = gd(l);
      return s ? Je(op(s, n), [[a]]) : (rt(La, "no valid child node found"), null);
    };
  }
});
function gd(e) {
  if (!e)
    return null;
  const t = e;
  for (const n of t) {
    if (Ft(n))
      switch (n.type) {
        case ap:
          continue;
        case Su:
        case "svg":
          return Qs(n);
        case Ve:
          return gd(n.children);
        default:
          return n;
      }
    return Qs(n);
  }
  return null;
}
function Qs(e) {
  const t = ge("only-child");
  return Ne("span", {
    class: t.e("content")
  }, [e]);
}
const bd = Be({
  virtualRef: {
    type: de(Object)
  },
  virtualTriggering: Boolean,
  onMouseenter: {
    type: de(Function)
  },
  onMouseleave: {
    type: de(Function)
  },
  onClick: {
    type: de(Function)
  },
  onKeydown: {
    type: de(Function)
  },
  onFocus: {
    type: de(Function)
  },
  onBlur: {
    type: de(Function)
  },
  onContextmenu: {
    type: de(Function)
  },
  id: String,
  open: Boolean
}), CS = ne({
  name: "ElPopperTrigger",
  inheritAttrs: !1
}), ES = /* @__PURE__ */ ne({
  ...CS,
  props: bd,
  setup(e, { expose: t }) {
    const n = e, { role: r, triggerRef: o } = Se(qi, void 0);
    B_(o);
    const a = O(() => l.value ? n.id : void 0), i = O(() => {
      if (r && r.value === "tooltip")
        return n.open && n.id ? n.id : void 0;
    }), l = O(() => {
      if (r && r.value !== "tooltip")
        return r.value;
    }), s = O(() => l.value ? `${n.open}` : void 0);
    let u;
    return at(() => {
      ae(() => n.virtualRef, (d) => {
        d && (o.value = kn(d));
      }, {
        immediate: !0
      }), ae(o, (d, p) => {
        u == null || u(), u = void 0, ao(d) && ([
          "onMouseenter",
          "onMouseleave",
          "onClick",
          "onKeydown",
          "onFocus",
          "onBlur",
          "onContextmenu"
        ].forEach((h) => {
          var m;
          const f = n[h];
          f && (d.addEventListener(h.slice(2).toLowerCase(), f), (m = p == null ? void 0 : p.removeEventListener) == null || m.call(p, h.slice(2).toLowerCase(), f));
        }), u = ae([a, i, l, s], (h) => {
          [
            "aria-controls",
            "aria-describedby",
            "aria-haspopup",
            "aria-expanded"
          ].forEach((m, f) => {
            ia(h[f]) ? d.removeAttribute(m) : d.setAttribute(m, h[f]);
          });
        }, { immediate: !0 })), ao(p) && [
          "aria-controls",
          "aria-describedby",
          "aria-haspopup",
          "aria-expanded"
        ].forEach((h) => p.removeAttribute(h));
      }, {
        immediate: !0
      });
    }), Rt(() => {
      u == null || u(), u = void 0;
    }), t({
      triggerRef: o
    }), (d, p) => d.virtualTriggering ? re("v-if", !0) : (A(), te(c(SS), jt({ key: 0 }, d.$attrs, {
      "aria-controls": c(a),
      "aria-describedby": c(i),
      "aria-expanded": c(s),
      "aria-haspopup": c(l)
    }), {
      default: oe(() => [
        _e(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"]));
  }
});
var kS = /* @__PURE__ */ Oe(ES, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/trigger.vue"]]);
const ja = "focus-trap.focus-after-trapped", Ba = "focus-trap.focus-after-released", OS = "focus-trap.focusout-prevented", Js = {
  cancelable: !0,
  bubbles: !1
}, TS = {
  cancelable: !0,
  bubbles: !1
}, eu = "focusAfterTrapped", tu = "focusAfterReleased", DS = Symbol("elFocusTrap"), al = V(), fa = V(0), il = V(0);
let _o = 0;
const yd = (e) => {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 || r === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}, nu = (e, t) => {
  for (const n of e)
    if (!AS(n, t))
      return n;
}, AS = (e, t) => {

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
}, MS = (e) => {
  const t = yd(e), n = nu(t, e), r = nu(t.reverse(), e);
  return [n, r];
}, $S = (e) => e instanceof HTMLInputElement && "select" in e, yn = (e, t) => {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), il.value = window.performance.now(), e !== n && $S(e) && t && e.select();
  }
};
function ru(e, t) {
  const n = [...e], r = e.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
const IS = () => {
  let e = [];
  return {
    push: (t) => {
      const n = e[0];
      n && t !== n && n.pause(), e = ru(e, t), e.unshift(t);
    },
    remove: (t) => {
      var n, r;
      e = ru(e, t), (r = (n = e[0]) == null ? void 0 : n.resume) == null || r.call(n);
    }
  };
}, NS = (e, t = !1) => {
  const n = document.activeElement;
  for (const r of e)
    if (yn(r, t), document.activeElement !== n)
      return;
}, ou = IS(), PS = () => fa.value > il.value, So = () => {
  al.value = "pointer", fa.value = window.performance.now();
}, au = () => {
  al.value = "keyboard", fa.value = window.performance.now();
}, LS = () => (at(() => {
  _o === 0 && (document.addEventListener("mousedown", So), document.addEventListener("touchstart", So), document.addEventListener("keydown", au)), _o++;
}), Rt(() => {
  _o--, _o <= 0 && (document.removeEventListener("mousedown", So), document.removeEventListener("touchstart", So), document.removeEventListener("keydown", au));
}), {
  focusReason: al,
  lastUserFocusTimestamp: fa,
  lastAutomatedFocusTimestamp: il
}), Co = (e) => new CustomEvent(OS, {
  ...TS,
  detail: e
}), jS = ne({
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
    eu,
    tu,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(e, { emit: t }) {
    const n = V();
    let r, o;
    const { focusReason: a } = LS();
    I_((f) => {
      e.trapped && !i.paused && t("release-requested", f);
    });
    const i = {
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    }, l = (f) => {
      if (!e.loop && !e.trapped || i.paused)
        return;
      const { key: v, altKey: y, ctrlKey: g, metaKey: x, currentTarget: $, shiftKey: k } = f, { loop: I } = e, C = v === qe.tab && !y && !g && !x, E = document.activeElement;
      if (C && E) {
        const F = $, [H, R] = MS(F);
        if (H && R) {
          if (!k && E === R) {
            const q = Co({
              focusReason: a.value
            });
            t("focusout-prevented", q), q.defaultPrevented || (f.preventDefault(), I && yn(H, !0));
          } else if (k && [H, F].includes(E)) {
            const q = Co({
              focusReason: a.value
            });
            t("focusout-prevented", q), q.defaultPrevented || (f.preventDefault(), I && yn(R, !0));
          }
        } else if (E === F) {
          const q = Co({
            focusReason: a.value
          });
          t("focusout-prevented", q), q.defaultPrevented || f.preventDefault();
        }
      }
    };
    et(DS, {
      focusTrapRef: n,
      onKeydown: l
    }), ae(() => e.focusTrapEl, (f) => {
      f && (n.value = f);
    }, { immediate: !0 }), ae([n], ([f], [v]) => {
      f && (f.addEventListener("keydown", l), f.addEventListener("focusin", d), f.addEventListener("focusout", p)), v && (v.removeEventListener("keydown", l), v.removeEventListener("focusin", d), v.removeEventListener("focusout", p));
    });
    const s = (f) => {
      t(eu, f);
    }, u = (f) => t(tu, f), d = (f) => {
      const v = c(n);
      if (!v)
        return;
      const y = f.target, g = f.relatedTarget, x = y && v.contains(y);
      e.trapped || g && v.contains(g) || (r = g), x && t("focusin", f), !i.paused && e.trapped && (x ? o = y : yn(o, !0));
    }, p = (f) => {
      const v = c(n);
      if (!(i.paused || !v))
        if (e.trapped) {
          const y = f.relatedTarget;
          !ia(y) && !v.contains(y) && setTimeout(() => {
            if (!i.paused && e.trapped) {
              const g = Co({
                focusReason: a.value
              });
              t("focusout-prevented", g), g.defaultPrevented || yn(o, !0);
            }
          }, 0);
        } else {
          const y = f.target;
          y && v.contains(y) || t("focusout", f);
        }
    };
    async function h() {
      await me();
      const f = c(n);
      if (f) {
        ou.push(i);
        const v = f.contains(document.activeElement) ? r : document.activeElement;
        if (r = v, !f.contains(v)) {
          const y = new Event(ja, Js);
          f.addEventListener(ja, s), f.dispatchEvent(y), y.defaultPrevented || me(() => {
            let g = e.focusStartEl;
            Bt(g) || (yn(g), document.activeElement !== g && (g = "first")), g === "first" && NS(yd(f), !0), (document.activeElement === v || g === "container") && yn(f);
          });
        }
      }
    }
    function m() {
      const f = c(n);
      if (f) {
        f.removeEventListener(ja, s);
        const v = new CustomEvent(Ba, {
          ...Js,
          detail: {
            focusReason: a.value
          }
        });
        f.addEventListener(Ba, u), f.dispatchEvent(v), !v.defaultPrevented && (a.value == "keyboard" || !PS()) && yn(r ?? document.body), f.removeEventListener(Ba, s), ou.remove(i);
      }
    }
    return at(() => {
      e.trapped && h(), ae(() => e.trapped, (f) => {
        f ? h() : m();
      });
    }), Rt(() => {
      e.trapped && m();
    }), {
      onKeydown: l
    };
  }
});
function BS(e, t, n, r, o, a) {
  return _e(e.$slots, "default", { handleKeydown: e.onKeydown });
}
var FS = /* @__PURE__ */ Oe(jS, [["render", BS], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/focus-trap/src/focus-trap.vue"]]);
const RS = ["fixed", "absolute"], zS = Be({
  boundariesPadding: {
    type: Number,
    default: 0
  },
  fallbackPlacements: {
    type: de(Array),
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
    values: da,
    default: "bottom"
  },
  popperOptions: {
    type: de(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: RS,
    default: "absolute"
  }
}), wd = Be({
  ...zS,
  id: String,
  style: {
    type: de([String, Array, Object])
  },
  className: {
    type: de([String, Array, Object])
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
    type: de([String, Array, Object])
  },
  popperStyle: {
    type: de([String, Array, Object])
  },
  referenceEl: {
    type: de(Object)
  },
  triggerTargetEl: {
    type: de(Object)
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
}), HS = {
  mouseenter: (e) => e instanceof MouseEvent,
  mouseleave: (e) => e instanceof MouseEvent,
  focus: () => !0,
  blur: () => !0,
  close: () => !0
}, VS = (e, t = []) => {
  const { placement: n, strategy: r, popperOptions: o } = e, a = {
    placement: n,
    strategy: r,
    ...o,
    modifiers: [...WS(e), ...t]
  };
  return US(a, o == null ? void 0 : o.modifiers), a;
}, KS = (e) => {
  if (pt)
    return kn(e);
};
function WS(e) {
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
function US(e, t) {
  t && (e.modifiers = [...e.modifiers, ...t ?? []]);
}
const qS = 0, YS = (e) => {
  const { popperInstanceRef: t, contentRef: n, triggerRef: r, role: o } = Se(qi, void 0), a = V(), i = V(), l = O(() => ({
    name: "eventListeners",
    enabled: !!e.visible
  })), s = O(() => {
    var g;
    const x = c(a), $ = (g = c(i)) != null ? g : qS;
    return {
      name: "arrow",
      enabled: !mw(x),
      options: {
        element: x,
        padding: $
      }
    };
  }), u = O(() => ({
    onFirstUpdate: () => {
      f();
    },
    ...VS(e, [
      c(s),
      c(l)
    ])
  })), d = O(() => KS(e.referenceEl) || c(r)), { attributes: p, state: h, styles: m, update: f, forceUpdate: v, instanceRef: y } = A_(d, n, u);
  return ae(y, (g) => t.value = g), at(() => {
    ae(() => {
      var g;
      return (g = c(d)) == null ? void 0 : g.getBoundingClientRect();
    }, () => {
      f();
    });
  }), {
    attributes: p,
    arrowRef: a,
    contentRef: n,
    instanceRef: y,
    state: h,
    styles: m,
    role: o,
    forceUpdate: v,
    update: f
  };
}, GS = (e, {
  attributes: t,
  styles: n,
  role: r
}) => {
  const { nextZIndex: o } = R_(), a = ge("popper"), i = O(() => c(t).popper), l = V(e.zIndex || o()), s = O(() => [
    a.b(),
    a.is("pure", e.pure),
    a.is(e.effect),
    e.popperClass
  ]), u = O(() => [
    { zIndex: c(l) },
    e.popperStyle || {},
    c(n).popper
  ]), d = O(() => r.value === "dialog" ? "false" : void 0), p = O(() => c(n).arrow || {});
  return {
    ariaModal: d,
    arrowStyle: p,
    contentAttrs: i,
    contentClass: s,
    contentStyle: u,
    contentZIndex: l,
    updateZIndex: () => {
      l.value = e.zIndex || o();
    }
  };
}, XS = (e, t) => {
  const n = V(!1), r = V();
  return {
    focusStartRef: r,
    trapped: n,
    onFocusAfterReleased: (o) => {
      var a;
      ((a = o.detail) == null ? void 0 : a.focusReason) !== "pointer" && (r.value = "first", t("blur"));
    },
    onFocusAfterTrapped: () => {
      t("focus");
    },
    onFocusInTrap: (o) => {
      e.visible && !n.value && (o.target && (r.value = o.target), n.value = !0);
    },
    onFocusoutPrevented: (o) => {
      e.trapping || (o.detail.focusReason === "pointer" && o.preventDefault(), n.value = !1);
    },
    onReleaseRequested: () => {
      n.value = !1, t("close");
    }
  };
}, ZS = ne({
  name: "ElPopperContent"
}), QS = /* @__PURE__ */ ne({
  ...ZS,
  props: wd,
  emits: HS,
  setup(e, { expose: t, emit: n }) {
    const r = e, {
      focusStartRef: o,
      trapped: a,
      onFocusAfterReleased: i,
      onFocusAfterTrapped: l,
      onFocusInTrap: s,
      onFocusoutPrevented: u,
      onReleaseRequested: d
    } = XS(r, n), { attributes: p, arrowRef: h, contentRef: m, styles: f, instanceRef: v, role: y, update: g } = YS(r), {
      ariaModal: x,
      arrowStyle: $,
      contentAttrs: k,
      contentClass: I,
      contentStyle: C,
      updateZIndex: E
    } = GS(r, {
      styles: f,
      attributes: p,
      role: y
    }), F = Se(io, void 0), H = V();
    et(Gc, {
      arrowStyle: $,
      arrowRef: h,
      arrowOffset: H
    }), F && (F.addInputId || F.removeInputId) && et(io, {
      ...F,
      addInputId: no,
      removeInputId: no
    });
    let R;
    const q = (L = !0) => {
      g(), L && E();
    }, J = () => {
      q(!1), r.visible && r.focusOnShow ? a.value = !0 : r.visible === !1 && (a.value = !1);
    };
    return at(() => {
      ae(() => r.triggerTargetEl, (L, M) => {
        R == null || R(), R = void 0;
        const S = c(L || m.value), P = c(M || m.value);
        ao(S) && (R = ae([y, () => r.ariaLabel, x, () => r.id], (_) => {
          ["role", "aria-label", "aria-modal", "id"].forEach((T, w) => {
            ia(_[w]) ? S.removeAttribute(T) : S.setAttribute(T, _[w]);
          });
        }, { immediate: !0 })), P !== S && ao(P) && ["role", "aria-label", "aria-modal", "id"].forEach((_) => {
          P.removeAttribute(_);
        });
      }, { immediate: !0 }), ae(() => r.visible, J, { immediate: !0 });
    }), Rt(() => {
      R == null || R(), R = void 0;
    }), t({
      popperContentRef: m,
      popperInstanceRef: v,
      updatePopper: q,
      contentStyle: C
    }), (L, M) => (A(), G("div", jt({
      ref_key: "contentRef",
      ref: m
    }, c(k), {
      style: c(C),
      class: c(I),
      tabindex: "-1",
      onMouseenter: M[0] || (M[0] = (S) => L.$emit("mouseenter", S)),
      onMouseleave: M[1] || (M[1] = (S) => L.$emit("mouseleave", S))
    }), [
      Ne(c(FS), {
        trapped: c(a),
        "trap-on-focus-in": !0,
        "focus-trap-el": c(m),
        "focus-start-el": c(o),
        onFocusAfterTrapped: c(l),
        onFocusAfterReleased: c(i),
        onFocusin: c(s),
        onFocusoutPrevented: c(u),
        onReleaseRequested: c(d)
      }, {
        default: oe(() => [
          _e(L.$slots, "default")
        ]),
        _: 3
      }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusin", "onFocusoutPrevented", "onReleaseRequested"])
    ], 16));
  }
});
var JS = /* @__PURE__ */ Oe(QS, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/content.vue"]]);
const eC = mn(yS), tC = ge("tooltip"), ll = Be({
  ...L_,
  ...wd,
  appendTo: {
    type: de([String, Object])
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
    type: de(Boolean),
    default: null
  },
  transition: {
    type: String,
    default: `${tC.namespace.value}-fade-in-linear`
  },
  teleported: {
    type: Boolean,
    default: !0
  },
  disabled: {
    type: Boolean
  }
}), xd = Be({
  ...bd,
  disabled: Boolean,
  trigger: {
    type: de([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: de(Array),
    default: () => [qe.enter, qe.space]
  }
}), {
  useModelToggleProps: nC,
  useModelToggleEmits: rC,
  useModelToggle: oC
} = Ox("visible"), aC = Be({
  ...vd,
  ...nC,
  ...ll,
  ...xd,
  ...md,
  showArrow: {
    type: Boolean,
    default: !0
  }
}), iC = [
  ...rC,
  "before-show",
  "before-hide",
  "show",
  "hide",
  "open",
  "close"
], lC = (e, t) => Ue(e) ? e.includes(t) : e === t, ur = (e, t, n) => (r) => {
  lC(c(e), t) && n(r);
}, sC = ne({
  name: "ElTooltipTrigger"
}), uC = /* @__PURE__ */ ne({
  ...sC,
  props: xd,
  setup(e, { expose: t }) {
    const n = e, r = ge("tooltip"), { controlled: o, id: a, open: i, onOpen: l, onClose: s, onToggle: u } = Se(Yi, void 0), d = V(null), p = () => {
      if (c(o) || n.disabled)
        return !0;
    }, h = qt(n, "trigger"), m = on(p, ur(h, "hover", l)), f = on(p, ur(h, "hover", s)), v = on(p, ur(h, "click", (k) => {
      k.button === 0 && u(k);
    })), y = on(p, ur(h, "focus", l)), g = on(p, ur(h, "focus", s)), x = on(p, ur(h, "contextmenu", (k) => {
      k.preventDefault(), u(k);
    })), $ = on(p, (k) => {
      const { code: I } = k;
      n.triggerKeys.includes(I) && (k.preventDefault(), u(k));
    });
    return t({
      triggerRef: d
    }), (k, I) => (A(), te(c(kS), {
      id: c(a),
      "virtual-ref": k.virtualRef,
      open: c(i),
      "virtual-triggering": k.virtualTriggering,
      class: j(c(r).e("trigger")),
      onBlur: c(g),
      onClick: c(v),
      onContextmenu: c(x),
      onFocus: c(y),
      onMouseenter: c(m),
      onMouseleave: c(f),
      onKeydown: c($)
    }, {
      default: oe(() => [
        _e(k.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]));
  }
});
var cC = /* @__PURE__ */ Oe(uC, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/trigger.vue"]]);
const dC = ne({
  name: "ElTooltipContent",
  inheritAttrs: !1
}), pC = /* @__PURE__ */ ne({
  ...dC,
  props: ll,
  setup(e, { expose: t }) {
    const n = e, { selector: r } = dd(), o = V(null), a = V(!1), {
      controlled: i,
      id: l,
      open: s,
      trigger: u,
      onClose: d,
      onOpen: p,
      onShow: h,
      onHide: m,
      onBeforeShow: f,
      onBeforeHide: v
    } = Se(Yi, void 0), y = O(() => false ? !0 : n.persistent);
    Rt(() => {
      a.value = !0;
    });
    const g = O(() => c(y) ? !0 : c(s)), x = O(() => n.disabled ? !1 : c(s)), $ = O(() => n.appendTo || r.value), k = O(() => {
      var S;
      return (S = n.style) != null ? S : {};
    }), I = O(() => !c(s)), C = () => {
      m();
    }, E = () => {
      if (c(i))
        return !0;
    }, F = on(E, () => {
      n.enterable && c(u) === "hover" && p();
    }), H = on(E, () => {
      c(u) === "hover" && d();
    }), R = () => {
      var S, P;
      (P = (S = o.value) == null ? void 0 : S.updatePopper) == null || P.call(S), f == null || f();
    }, q = () => {
      v == null || v();
    }, J = () => {
      h(), M = Bc(O(() => {
        var S;
        return (S = o.value) == null ? void 0 : S.popperContentRef;
      }), () => {
        c(i) || c(u) !== "hover" && d();
      });
    }, L = () => {
      n.virtualTriggering || d();
    };
    let M;
    return ae(() => c(s), (S) => {
      S || M == null || M();
    }, {
      flush: "post"
    }), ae(() => n.content, () => {
      var S, P;
      (P = (S = o.value) == null ? void 0 : S.updatePopper) == null || P.call(S);
    }), t({
      contentRef: o
    }), (S, P) => (A(), te(ip, {
      disabled: !S.teleported,
      to: c($)
    }, [
      Ne(Er, {
        name: S.transition,
        onAfterLeave: C,
        onBeforeEnter: R,
        onAfterEnter: J,
        onBeforeLeave: q
      }, {
        default: oe(() => [
          c(g) ? Je((A(), te(c(JS), jt({
            key: 0,
            id: c(l),
            ref_key: "contentRef",
            ref: o
          }, S.$attrs, {
            "aria-label": S.ariaLabel,
            "aria-hidden": c(I),
            "boundaries-padding": S.boundariesPadding,
            "fallback-placements": S.fallbackPlacements,
            "gpu-acceleration": S.gpuAcceleration,
            offset: S.offset,
            placement: S.placement,
            "popper-options": S.popperOptions,
            strategy: S.strategy,
            effect: S.effect,
            enterable: S.enterable,
            pure: S.pure,
            "popper-class": S.popperClass,
            "popper-style": [S.popperStyle, c(k)],
            "reference-el": S.referenceEl,
            "trigger-target-el": S.triggerTargetEl,
            visible: c(x),
            "z-index": S.zIndex,
            onMouseenter: c(F),
            onMouseleave: c(H),
            onBlur: L,
            onClose: c(d)
          }), {
            default: oe(() => [
              a.value ? re("v-if", !0) : _e(S.$slots, "default", { key: 0 })
            ]),
            _: 3
          }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onClose"])), [
            [ln, c(x)]
          ]) : re("v-if", !0)
        ]),
        _: 3
      }, 8, ["name"])
    ], 8, ["disabled", "to"]));
  }
});
var fC = /* @__PURE__ */ Oe(pC, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/content.vue"]]);
const hC = ["innerHTML"], vC = { key: 1 }, mC = ne({
  name: "ElTooltip"
}), gC = /* @__PURE__ */ ne({
  ...mC,
  props: aC,
  emits: iC,
  setup(e, { expose: t, emit: n }) {
    const r = e;
    P_();
    const o = Jc(), a = V(), i = V(), l = () => {
      var g;
      const x = c(a);
      x && ((g = x.popperInstanceRef) == null || g.update());
    }, s = V(!1), u = V(), { show: d, hide: p, hasUpdateHandler: h } = oC({
      indicator: s,
      toggleReason: u
    }), { onOpen: m, onClose: f } = j_({
      showAfter: qt(r, "showAfter"),
      hideAfter: qt(r, "hideAfter"),
      open: d,
      close: p
    }), v = O(() => to(r.visible) && !h.value);
    et(Yi, {
      controlled: v,
      id: o,
      open: lp(s),
      trigger: qt(r, "trigger"),
      onOpen: (g) => {
        m(g);
      },
      onClose: (g) => {
        f(g);
      },
      onToggle: (g) => {
        c(s) ? f(g) : m(g);
      },
      onShow: () => {
        n("show", u.value);
      },
      onHide: () => {
        n("hide", u.value);
      },
      onBeforeShow: () => {
        n("before-show", u.value);
      },
      onBeforeHide: () => {
        n("before-hide", u.value);
      },
      updatePopper: l
    }), ae(() => r.disabled, (g) => {
      g && s.value && (s.value = !1);
    });
    const y = () => {
      var g, x;
      const $ = (x = (g = i.value) == null ? void 0 : g.contentRef) == null ? void 0 : x.popperContentRef;
      return $ && $.contains(document.activeElement);
    };
    return sp(() => s.value && p()), t({
      popperRef: a,
      contentRef: i,
      isFocusInsideContent: y,
      updatePopper: l,
      onOpen: m,
      onClose: f,
      hide: p
    }), (g, x) => (A(), te(c(eC), {
      ref_key: "popperRef",
      ref: a,
      role: g.role
    }, {
      default: oe(() => [
        Ne(cC, {
          disabled: g.disabled,
          trigger: g.trigger,
          "trigger-keys": g.triggerKeys,
          "virtual-ref": g.virtualRef,
          "virtual-triggering": g.virtualTriggering
        }, {
          default: oe(() => [
            g.$slots.default ? _e(g.$slots, "default", { key: 0 }) : re("v-if", !0)
          ]),
          _: 3
        }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]),
        Ne(fC, {
          ref_key: "contentRef",
          ref: i,
          "aria-label": g.ariaLabel,
          "boundaries-padding": g.boundariesPadding,
          content: g.content,
          disabled: g.disabled,
          effect: g.effect,
          enterable: g.enterable,
          "fallback-placements": g.fallbackPlacements,
          "hide-after": g.hideAfter,
          "gpu-acceleration": g.gpuAcceleration,
          offset: g.offset,
          persistent: g.persistent,
          "popper-class": g.popperClass,
          "popper-style": g.popperStyle,
          placement: g.placement,
          "popper-options": g.popperOptions,
          pure: g.pure,
          "raw-content": g.rawContent,
          "reference-el": g.referenceEl,
          "trigger-target-el": g.triggerTargetEl,
          "show-after": g.showAfter,
          strategy: g.strategy,
          teleported: g.teleported,
          transition: g.transition,
          "virtual-triggering": g.virtualTriggering,
          "z-index": g.zIndex,
          "append-to": g.appendTo
        }, {
          default: oe(() => [
            _e(g.$slots, "content", {}, () => [
              g.rawContent ? (A(), G("span", {
                key: 0,
                innerHTML: g.content
              }, null, 8, hC)) : (A(), G("span", vC, ke(g.content), 1))
            ]),
            g.showArrow ? (A(), te(c(_S), {
              key: 0,
              "arrow-offset": g.arrowOffset
            }, null, 8, ["arrow-offset"])) : re("v-if", !0)
          ]),
          _: 3
        }, 8, ["aria-label", "boundaries-padding", "content", "disabled", "effect", "enterable", "fallback-placements", "hide-after", "gpu-acceleration", "offset", "persistent", "popper-class", "popper-style", "placement", "popper-options", "pure", "raw-content", "reference-el", "trigger-target-el", "show-after", "strategy", "teleported", "transition", "virtual-triggering", "z-index", "append-to"])
      ]),
      _: 3
    }, 8, ["role"]));
  }
});
var bC = /* @__PURE__ */ Oe(gC, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/tooltip.vue"]]);
const _d = mn(bC), yC = (e, t) => {
  Zc({
    from: "type.text",
    replacement: "link",
    version: "3.0.0",
    scope: "props",
    ref: "https://element-plus.org/en-US/component/button.html#button-attributes"
  }, O(() => e.type === "text"));
  const n = Se(qc, void 0), r = or("button"), { form: o } = ar(), a = Zn(O(() => n == null ? void 0 : n.size)), i = ca(), l = V(), s = Go(), u = O(() => e.type || (n == null ? void 0 : n.type) || ""), d = O(() => {
    var h, m, f;
    return (f = (m = e.autoInsertSpace) != null ? m : (h = r.value) == null ? void 0 : h.autoInsertSpace) != null ? f : !1;
  }), p = O(() => {
    var h;
    const m = (h = s.default) == null ? void 0 : h.call(s);
    if (d.value && (m == null ? void 0 : m.length) === 1) {
      const f = m[0];
      if ((f == null ? void 0 : f.type) === Su) {
        const v = f.children;
        return /^\p{Unified_Ideograph}{2}$/u.test(v.trim());
      }
    }
    return !1;
  });
  return {
    _disabled: i,
    _size: a,
    _type: u,
    _ref: l,
    shouldAddSpace: p,
    handleClick: (h) => {
      e.nativeType === "reset" && (o == null || o.resetFields()), t("click", h);
    }
  };
}, wC = [
  "default",
  "primary",
  "success",
  "warning",
  "info",
  "danger",
  "text",
  ""
], xC = ["button", "submit", "reset"], mi = Be({
  size: fo,
  disabled: Boolean,
  type: {
    type: String,
    values: wC,
    default: ""
  },
  icon: {
    type: Xn
  },
  nativeType: {
    type: String,
    values: xC,
    default: "button"
  },
  loading: Boolean,
  loadingIcon: {
    type: Xn,
    default: () => Ki
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
}), _C = {
  click: (e) => e instanceof MouseEvent
};
function ot(e, t) {
  SC(e) && (e = "100%");
  var n = CC(e);
  return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), n && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)), e);
}
function Eo(e) {
  return Math.min(1, Math.max(0, e));
}
function SC(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function CC(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function Sd(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function ko(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function zn(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function EC(e, t, n) {
  return {
    r: ot(e, 255) * 255,
    g: ot(t, 255) * 255,
    b: ot(n, 255) * 255
  };
}
function iu(e, t, n) {
  e = ot(e, 255), t = ot(t, 255), n = ot(n, 255);
  var r = Math.max(e, t, n), o = Math.min(e, t, n), a = 0, i = 0, l = (r + o) / 2;
  if (r === o)
    i = 0, a = 0;
  else {
    var s = r - o;
    switch (i = l > 0.5 ? s / (2 - r - o) : s / (r + o), r) {
      case e:
        a = (t - n) / s + (t < n ? 6 : 0);
        break;
      case t:
        a = (n - e) / s + 2;
        break;
      case n:
        a = (e - t) / s + 4;
        break;
    }
    a /= 6;
  }
  return { h: a, s: i, l };
}
function Fa(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * (6 * n) : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function kC(e, t, n) {
  var r, o, a;
  if (e = ot(e, 360), t = ot(t, 100), n = ot(n, 100), t === 0)
    o = n, a = n, r = n;
  else {
    var i = n < 0.5 ? n * (1 + t) : n + t - n * t, l = 2 * n - i;
    r = Fa(l, i, e + 1 / 3), o = Fa(l, i, e), a = Fa(l, i, e - 1 / 3);
  }
  return { r: r * 255, g: o * 255, b: a * 255 };
}
function lu(e, t, n) {
  e = ot(e, 255), t = ot(t, 255), n = ot(n, 255);
  var r = Math.max(e, t, n), o = Math.min(e, t, n), a = 0, i = r, l = r - o, s = r === 0 ? 0 : l / r;
  if (r === o)
    a = 0;
  else {
    switch (r) {
      case e:
        a = (t - n) / l + (t < n ? 6 : 0);
        break;
      case t:
        a = (n - e) / l + 2;
        break;
      case n:
        a = (e - t) / l + 4;
        break;
    }
    a /= 6;
  }
  return { h: a, s, v: i };
}
function OC(e, t, n) {
  e = ot(e, 360) * 6, t = ot(t, 100), n = ot(n, 100);
  var r = Math.floor(e), o = e - r, a = n * (1 - t), i = n * (1 - o * t), l = n * (1 - (1 - o) * t), s = r % 6, u = [n, i, a, a, l, n][s], d = [l, n, n, i, a, a][s], p = [a, a, l, n, n, i][s];
  return { r: u * 255, g: d * 255, b: p * 255 };
}
function su(e, t, n, r) {
  var o = [
    zn(Math.round(e).toString(16)),
    zn(Math.round(t).toString(16)),
    zn(Math.round(n).toString(16))
  ];
  return r && o[0].startsWith(o[0].charAt(1)) && o[1].startsWith(o[1].charAt(1)) && o[2].startsWith(o[2].charAt(1)) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) : o.join("");
}
function TC(e, t, n, r, o) {
  var a = [
    zn(Math.round(e).toString(16)),
    zn(Math.round(t).toString(16)),
    zn(Math.round(n).toString(16)),
    zn(DC(r))
  ];
  return o && a[0].startsWith(a[0].charAt(1)) && a[1].startsWith(a[1].charAt(1)) && a[2].startsWith(a[2].charAt(1)) && a[3].startsWith(a[3].charAt(1)) ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) + a[3].charAt(0) : a.join("");
}
function DC(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function uu(e) {
  return yt(e) / 255;
}
function yt(e) {
  return parseInt(e, 16);
}
function AC(e) {
  return {
    r: e >> 16,
    g: (e & 65280) >> 8,
    b: e & 255
  };
}
var gi = {
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
function MC(e) {
  var t = { r: 0, g: 0, b: 0 }, n = 1, r = null, o = null, a = null, i = !1, l = !1;
  return typeof e == "string" && (e = NC(e)), typeof e == "object" && (rn(e.r) && rn(e.g) && rn(e.b) ? (t = EC(e.r, e.g, e.b), i = !0, l = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : rn(e.h) && rn(e.s) && rn(e.v) ? (r = ko(e.s), o = ko(e.v), t = OC(e.h, r, o), i = !0, l = "hsv") : rn(e.h) && rn(e.s) && rn(e.l) && (r = ko(e.s), a = ko(e.l), t = kC(e.h, r, a), i = !0, l = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (n = e.a)), n = Sd(n), {
    ok: i,
    format: e.format || l,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: n
  };
}
var $C = "[-\\+]?\\d+%?", IC = "[-\\+]?\\d*\\.\\d+%?", On = "(?:".concat(IC, ")|(?:").concat($C, ")"), Ra = "[\\s|\\(]+(".concat(On, ")[,|\\s]+(").concat(On, ")[,|\\s]+(").concat(On, ")\\s*\\)?"), za = "[\\s|\\(]+(".concat(On, ")[,|\\s]+(").concat(On, ")[,|\\s]+(").concat(On, ")[,|\\s]+(").concat(On, ")\\s*\\)?"), Pt = {
  CSS_UNIT: new RegExp(On),
  rgb: new RegExp("rgb" + Ra),
  rgba: new RegExp("rgba" + za),
  hsl: new RegExp("hsl" + Ra),
  hsla: new RegExp("hsla" + za),
  hsv: new RegExp("hsv" + Ra),
  hsva: new RegExp("hsva" + za),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function NC(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  var t = !1;
  if (gi[e])
    e = gi[e], t = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var n = Pt.rgb.exec(e);
  return n ? { r: n[1], g: n[2], b: n[3] } : (n = Pt.rgba.exec(e), n ? { r: n[1], g: n[2], b: n[3], a: n[4] } : (n = Pt.hsl.exec(e), n ? { h: n[1], s: n[2], l: n[3] } : (n = Pt.hsla.exec(e), n ? { h: n[1], s: n[2], l: n[3], a: n[4] } : (n = Pt.hsv.exec(e), n ? { h: n[1], s: n[2], v: n[3] } : (n = Pt.hsva.exec(e), n ? { h: n[1], s: n[2], v: n[3], a: n[4] } : (n = Pt.hex8.exec(e), n ? {
    r: yt(n[1]),
    g: yt(n[2]),
    b: yt(n[3]),
    a: uu(n[4]),
    format: t ? "name" : "hex8"
  } : (n = Pt.hex6.exec(e), n ? {
    r: yt(n[1]),
    g: yt(n[2]),
    b: yt(n[3]),
    format: t ? "name" : "hex"
  } : (n = Pt.hex4.exec(e), n ? {
    r: yt(n[1] + n[1]),
    g: yt(n[2] + n[2]),
    b: yt(n[3] + n[3]),
    a: uu(n[4] + n[4]),
    format: t ? "name" : "hex8"
  } : (n = Pt.hex3.exec(e), n ? {
    r: yt(n[1] + n[1]),
    g: yt(n[2] + n[2]),
    b: yt(n[3] + n[3]),
    format: t ? "name" : "hex"
  } : !1)))))))));
}
function rn(e) {
  return !!Pt.CSS_UNIT.exec(String(e));
}
var PC = (
  /** @class */
  function() {
    function e(t, n) {
      t === void 0 && (t = ""), n === void 0 && (n = {});
      var r;
      if (t instanceof e)
        return t;
      typeof t == "number" && (t = AC(t)), this.originalInput = t;
      var o = MC(t);
      this.originalInput = t, this.r = o.r, this.g = o.g, this.b = o.b, this.a = o.a, this.roundA = Math.round(100 * this.a) / 100, this.format = (r = n.format) !== null && r !== void 0 ? r : o.format, this.gradientType = n.gradientType, this.r < 1 && (this.r = Math.round(this.r)), this.g < 1 && (this.g = Math.round(this.g)), this.b < 1 && (this.b = Math.round(this.b)), this.isValid = o.ok;
    }
    return e.prototype.isDark = function() {
      return this.getBrightness() < 128;
    }, e.prototype.isLight = function() {
      return !this.isDark();
    }, e.prototype.getBrightness = function() {
      var t = this.toRgb();
      return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3;
    }, e.prototype.getLuminance = function() {
      var t = this.toRgb(), n, r, o, a = t.r / 255, i = t.g / 255, l = t.b / 255;
      return a <= 0.03928 ? n = a / 12.92 : n = Math.pow((a + 0.055) / 1.055, 2.4), i <= 0.03928 ? r = i / 12.92 : r = Math.pow((i + 0.055) / 1.055, 2.4), l <= 0.03928 ? o = l / 12.92 : o = Math.pow((l + 0.055) / 1.055, 2.4), 0.2126 * n + 0.7152 * r + 0.0722 * o;
    }, e.prototype.getAlpha = function() {
      return this.a;
    }, e.prototype.setAlpha = function(t) {
      return this.a = Sd(t), this.roundA = Math.round(100 * this.a) / 100, this;
    }, e.prototype.isMonochrome = function() {
      var t = this.toHsl().s;
      return t === 0;
    }, e.prototype.toHsv = function() {
      var t = lu(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
    }, e.prototype.toHsvString = function() {
      var t = lu(this.r, this.g, this.b), n = Math.round(t.h * 360), r = Math.round(t.s * 100), o = Math.round(t.v * 100);
      return this.a === 1 ? "hsv(".concat(n, ", ").concat(r, "%, ").concat(o, "%)") : "hsva(".concat(n, ", ").concat(r, "%, ").concat(o, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHsl = function() {
      var t = iu(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
    }, e.prototype.toHslString = function() {
      var t = iu(this.r, this.g, this.b), n = Math.round(t.h * 360), r = Math.round(t.s * 100), o = Math.round(t.l * 100);
      return this.a === 1 ? "hsl(".concat(n, ", ").concat(r, "%, ").concat(o, "%)") : "hsla(".concat(n, ", ").concat(r, "%, ").concat(o, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHex = function(t) {
      return t === void 0 && (t = !1), su(this.r, this.g, this.b, t);
    }, e.prototype.toHexString = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex(t);
    }, e.prototype.toHex8 = function(t) {
      return t === void 0 && (t = !1), TC(this.r, this.g, this.b, this.a, t);
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
        return "".concat(Math.round(ot(n, 255) * 100), "%");
      };
      return {
        r: t(this.r),
        g: t(this.g),
        b: t(this.b),
        a: this.a
      };
    }, e.prototype.toPercentageRgbString = function() {
      var t = function(n) {
        return Math.round(ot(n, 255) * 100);
      };
      return this.a === 1 ? "rgb(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%)") : "rgba(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%, ").concat(this.roundA, ")");
    }, e.prototype.toName = function() {
      if (this.a === 0)
        return "transparent";
      if (this.a < 1)
        return !1;
      for (var t = "#" + su(this.r, this.g, this.b, !1), n = 0, r = Object.entries(gi); n < r.length; n++) {
        var o = r[n], a = o[0], i = o[1];
        if (t === i)
          return a;
      }
      return !1;
    }, e.prototype.toString = function(t) {
      var n = !!t;
      t = t ?? this.format;
      var r = !1, o = this.a < 1 && this.a >= 0, a = !n && o && (t.startsWith("hex") || t === "name");
      return a ? t === "name" && this.a === 0 ? this.toName() : this.toRgbString() : (t === "rgb" && (r = this.toRgbString()), t === "prgb" && (r = this.toPercentageRgbString()), (t === "hex" || t === "hex6") && (r = this.toHexString()), t === "hex3" && (r = this.toHexString(!0)), t === "hex4" && (r = this.toHex8String(!0)), t === "hex8" && (r = this.toHex8String()), t === "name" && (r = this.toName()), t === "hsl" && (r = this.toHslString()), t === "hsv" && (r = this.toHsvString()), r || this.toHexString());
    }, e.prototype.toNumber = function() {
      return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
    }, e.prototype.clone = function() {
      return new e(this.toString());
    }, e.prototype.lighten = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.l += t / 100, n.l = Eo(n.l), new e(n);
    }, e.prototype.brighten = function(t) {
      t === void 0 && (t = 10);
      var n = this.toRgb();
      return n.r = Math.max(0, Math.min(255, n.r - Math.round(255 * -(t / 100)))), n.g = Math.max(0, Math.min(255, n.g - Math.round(255 * -(t / 100)))), n.b = Math.max(0, Math.min(255, n.b - Math.round(255 * -(t / 100)))), new e(n);
    }, e.prototype.darken = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.l -= t / 100, n.l = Eo(n.l), new e(n);
    }, e.prototype.tint = function(t) {
      return t === void 0 && (t = 10), this.mix("white", t);
    }, e.prototype.shade = function(t) {
      return t === void 0 && (t = 10), this.mix("black", t);
    }, e.prototype.desaturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s -= t / 100, n.s = Eo(n.s), new e(n);
    }, e.prototype.saturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s += t / 100, n.s = Eo(n.s), new e(n);
    }, e.prototype.greyscale = function() {
      return this.desaturate(100);
    }, e.prototype.spin = function(t) {
      var n = this.toHsl(), r = (n.h + t) % 360;
      return n.h = r < 0 ? 360 + r : r, new e(n);
    }, e.prototype.mix = function(t, n) {
      n === void 0 && (n = 50);
      var r = this.toRgb(), o = new e(t).toRgb(), a = n / 100, i = {
        r: (o.r - r.r) * a + r.r,
        g: (o.g - r.g) * a + r.g,
        b: (o.b - r.b) * a + r.b,
        a: (o.a - r.a) * a + r.a
      };
      return new e(i);
    }, e.prototype.analogous = function(t, n) {
      t === void 0 && (t = 6), n === void 0 && (n = 30);
      var r = this.toHsl(), o = 360 / n, a = [this];
      for (r.h = (r.h - (o * t >> 1) + 720) % 360; --t; )
        r.h = (r.h + o) % 360, a.push(new e(r));
      return a;
    }, e.prototype.complement = function() {
      var t = this.toHsl();
      return t.h = (t.h + 180) % 360, new e(t);
    }, e.prototype.monochromatic = function(t) {
      t === void 0 && (t = 6);
      for (var n = this.toHsv(), r = n.h, o = n.s, a = n.v, i = [], l = 1 / t; t--; )
        i.push(new e({ h: r, s: o, v: a })), a = (a + l) % 1;
      return i;
    }, e.prototype.splitcomplement = function() {
      var t = this.toHsl(), n = t.h;
      return [
        this,
        new e({ h: (n + 72) % 360, s: t.s, l: t.l }),
        new e({ h: (n + 216) % 360, s: t.s, l: t.l })
      ];
    }, e.prototype.onBackground = function(t) {
      var n = this.toRgb(), r = new e(t).toRgb(), o = n.a + r.a * (1 - n.a);
      return new e({
        r: (n.r * n.a + r.r * r.a * (1 - n.a)) / o,
        g: (n.g * n.a + r.g * r.a * (1 - n.a)) / o,
        b: (n.b * n.a + r.b * r.a * (1 - n.a)) / o,
        a: o
      });
    }, e.prototype.triad = function() {
      return this.polyad(3);
    }, e.prototype.tetrad = function() {
      return this.polyad(4);
    }, e.prototype.polyad = function(t) {
      for (var n = this.toHsl(), r = n.h, o = [this], a = 360 / t, i = 1; i < t; i++)
        o.push(new e({ h: (r + i * a) % 360, s: n.s, l: n.l }));
      return o;
    }, e.prototype.equals = function(t) {
      return this.toRgbString() === new e(t).toRgbString();
    }, e;
  }()
);
function bn(e, t = 20) {
  return e.mix("#141414", t).toString();
}
function LC(e) {
  const t = ca(), n = ge("button");
  return O(() => {
    let r = {};
    const o = e.color;
    if (o) {
      const a = new PC(o), i = e.dark ? a.tint(20).toString() : bn(a, 20);
      if (e.plain)
        r = n.cssVarBlock({
          "bg-color": e.dark ? bn(a, 90) : a.tint(90).toString(),
          "text-color": o,
          "border-color": e.dark ? bn(a, 50) : a.tint(50).toString(),
          "hover-text-color": `var(${n.cssVarName("color-white")})`,
          "hover-bg-color": o,
          "hover-border-color": o,
          "active-bg-color": i,
          "active-text-color": `var(${n.cssVarName("color-white")})`,
          "active-border-color": i
        }), t.value && (r[n.cssVarBlockName("disabled-bg-color")] = e.dark ? bn(a, 90) : a.tint(90).toString(), r[n.cssVarBlockName("disabled-text-color")] = e.dark ? bn(a, 50) : a.tint(50).toString(), r[n.cssVarBlockName("disabled-border-color")] = e.dark ? bn(a, 80) : a.tint(80).toString());
      else {
        const l = e.dark ? bn(a, 30) : a.tint(30).toString(), s = a.isDark() ? `var(${n.cssVarName("color-white")})` : `var(${n.cssVarName("color-black")})`;
        if (r = n.cssVarBlock({
          "bg-color": o,
          "text-color": s,
          "border-color": o,
          "hover-bg-color": l,
          "hover-text-color": s,
          "hover-border-color": l,
          "active-bg-color": i,
          "active-border-color": i
        }), t.value) {
          const u = e.dark ? bn(a, 50) : a.tint(50).toString();
          r[n.cssVarBlockName("disabled-bg-color")] = u, r[n.cssVarBlockName("disabled-text-color")] = e.dark ? "rgba(255, 255, 255, 0.5)" : `var(${n.cssVarName("color-white")})`, r[n.cssVarBlockName("disabled-border-color")] = u;
        }
      }
    }
    return r;
  });
}
const jC = ["aria-disabled", "disabled", "autofocus", "type"], BC = ne({
  name: "ElButton"
}), FC = /* @__PURE__ */ ne({
  ...BC,
  props: mi,
  emits: _C,
  setup(e, { expose: t, emit: n }) {
    const r = e, o = LC(r), a = ge("button"), { _ref: i, _size: l, _type: s, _disabled: u, shouldAddSpace: d, handleClick: p } = yC(r, n);
    return t({
      ref: i,
      size: l,
      type: s,
      disabled: u,
      shouldAddSpace: d
    }), (h, m) => (A(), G("button", {
      ref_key: "_ref",
      ref: i,
      class: j([
        c(a).b(),
        c(a).m(c(s)),
        c(a).m(c(l)),
        c(a).is("disabled", c(u)),
        c(a).is("loading", h.loading),
        c(a).is("plain", h.plain),
        c(a).is("round", h.round),
        c(a).is("circle", h.circle),
        c(a).is("text", h.text),
        c(a).is("link", h.link),
        c(a).is("has-bg", h.bg)
      ]),
      "aria-disabled": c(u) || h.loading,
      disabled: c(u) || h.loading,
      autofocus: h.autofocus,
      type: h.nativeType,
      style: Qe(c(o)),
      onClick: m[0] || (m[0] = (...f) => c(p) && c(p)(...f))
    }, [
      h.loading ? (A(), G(Ve, { key: 0 }, [
        h.$slots.loading ? _e(h.$slots, "loading", { key: 0 }) : (A(), te(c(nt), {
          key: 1,
          class: j(c(a).is("loading"))
        }, {
          default: oe(() => [
            (A(), te(st(h.loadingIcon)))
          ]),
          _: 1
        }, 8, ["class"]))
      ], 64)) : h.icon || h.$slots.icon ? (A(), te(c(nt), { key: 1 }, {
        default: oe(() => [
          h.icon ? (A(), te(st(h.icon), { key: 0 })) : _e(h.$slots, "icon", { key: 1 })
        ]),
        _: 3
      })) : re("v-if", !0),
      h.$slots.default ? (A(), G("span", {
        key: 2,
        class: j({ [c(a).em("text", "expand")]: c(d) })
      }, [
        _e(h.$slots, "default")
      ], 2)) : re("v-if", !0)
    ], 14, jC));
  }
});
var RC = /* @__PURE__ */ Oe(FC, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/button/src/button.vue"]]);
const zC = {
  size: mi.size,
  type: mi.type
}, HC = ne({
  name: "ElButtonGroup"
}), VC = /* @__PURE__ */ ne({
  ...HC,
  props: zC,
  setup(e) {
    const t = e;
    et(qc, dn({
      size: qt(t, "size"),
      type: qt(t, "type")
    }));
    const n = ge("button");
    return (r, o) => (A(), G("div", {
      class: j(`${c(n).b("group")}`)
    }, [
      _e(r.$slots, "default")
    ], 2));
  }
});
var Cd = /* @__PURE__ */ Oe(VC, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/button/src/button-group.vue"]]);
const KC = mn(RC, {
  ButtonGroup: Cd
});
po(Cd);
var Ed = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function kd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Od = { exports: {} };
(function(e, t) {
  (function(n, r) {
    e.exports = r();
  })(Ed, function() {
    var n = 1e3, r = 6e4, o = 36e5, a = "millisecond", i = "second", l = "minute", s = "hour", u = "day", d = "week", p = "month", h = "quarter", m = "year", f = "date", v = "Invalid Date", y = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, g = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, x = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(L) {
      var M = ["th", "st", "nd", "rd"], S = L % 100;
      return "[" + L + (M[(S - 20) % 10] || M[S] || M[0]) + "]";
    } }, $ = function(L, M, S) {
      var P = String(L);
      return !P || P.length >= M ? L : "" + Array(M + 1 - P.length).join(S) + L;
    }, k = { s: $, z: function(L) {
      var M = -L.utcOffset(), S = Math.abs(M), P = Math.floor(S / 60), _ = S % 60;
      return (M <= 0 ? "+" : "-") + $(P, 2, "0") + ":" + $(_, 2, "0");
    }, m: function L(M, S) {
      if (M.date() < S.date())
        return -L(S, M);
      var P = 12 * (S.year() - M.year()) + (S.month() - M.month()), _ = M.clone().add(P, p), T = S - _ < 0, w = M.clone().add(P + (T ? -1 : 1), p);
      return +(-(P + (S - _) / (T ? _ - w : w - _)) || 0);
    }, a: function(L) {
      return L < 0 ? Math.ceil(L) || 0 : Math.floor(L);
    }, p: function(L) {
      return { M: p, y: m, w: d, d: u, D: f, h: s, m: l, s: i, ms: a, Q: h }[L] || String(L || "").toLowerCase().replace(/s$/, "");
    }, u: function(L) {
      return L === void 0;
    } }, I = "en", C = {};
    C[I] = x;
    var E = function(L) {
      return L instanceof q;
    }, F = function L(M, S, P) {
      var _;
      if (!M)
        return I;
      if (typeof M == "string") {
        var T = M.toLowerCase();
        C[T] && (_ = T), S && (C[T] = S, _ = T);
        var w = M.split("-");
        if (!_ && w.length > 1)
          return L(w[0]);
      } else {
        var N = M.name;
        C[N] = M, _ = N;
      }
      return !P && _ && (I = _), _ || !P && I;
    }, H = function(L, M) {
      if (E(L))
        return L.clone();
      var S = typeof M == "object" ? M : {};
      return S.date = L, S.args = arguments, new q(S);
    }, R = k;
    R.l = F, R.i = E, R.w = function(L, M) {
      return H(L, { locale: M.$L, utc: M.$u, x: M.$x, $offset: M.$offset });
    };
    var q = function() {
      function L(S) {
        this.$L = F(S.locale, null, !0), this.parse(S);
      }
      var M = L.prototype;
      return M.parse = function(S) {
        this.$d = function(P) {
          var _ = P.date, T = P.utc;
          if (_ === null)
            return /* @__PURE__ */ new Date(NaN);
          if (R.u(_))
            return /* @__PURE__ */ new Date();
          if (_ instanceof Date)
            return new Date(_);
          if (typeof _ == "string" && !/Z$/i.test(_)) {
            var w = _.match(y);
            if (w) {
              var N = w[2] - 1 || 0, z = (w[7] || "0").substring(0, 3);
              return T ? new Date(Date.UTC(w[1], N, w[3] || 1, w[4] || 0, w[5] || 0, w[6] || 0, z)) : new Date(w[1], N, w[3] || 1, w[4] || 0, w[5] || 0, w[6] || 0, z);
            }
          }
          return new Date(_);
        }(S), this.$x = S.x || {}, this.init();
      }, M.init = function() {
        var S = this.$d;
        this.$y = S.getFullYear(), this.$M = S.getMonth(), this.$D = S.getDate(), this.$W = S.getDay(), this.$H = S.getHours(), this.$m = S.getMinutes(), this.$s = S.getSeconds(), this.$ms = S.getMilliseconds();
      }, M.$utils = function() {
        return R;
      }, M.isValid = function() {
        return this.$d.toString() !== v;
      }, M.isSame = function(S, P) {
        var _ = H(S);
        return this.startOf(P) <= _ && _ <= this.endOf(P);
      }, M.isAfter = function(S, P) {
        return H(S) < this.startOf(P);
      }, M.isBefore = function(S, P) {
        return this.endOf(P) < H(S);
      }, M.$g = function(S, P, _) {
        return R.u(S) ? this[P] : this.set(_, S);
      }, M.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, M.valueOf = function() {
        return this.$d.getTime();
      }, M.startOf = function(S, P) {
        var _ = this, T = !!R.u(P) || P, w = R.p(S), N = function(be, W) {
          var Z = R.w(_.$u ? Date.UTC(_.$y, W, be) : new Date(_.$y, W, be), _);
          return T ? Z : Z.endOf(u);
        }, z = function(be, W) {
          return R.w(_.toDate()[be].apply(_.toDate("s"), (T ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(W)), _);
        }, X = this.$W, ee = this.$M, ve = this.$D, pe = "set" + (this.$u ? "UTC" : "");
        switch (w) {
          case m:
            return T ? N(1, 0) : N(31, 11);
          case p:
            return T ? N(1, ee) : N(0, ee + 1);
          case d:
            var Ce = this.$locale().weekStart || 0, De = (X < Ce ? X + 7 : X) - Ce;
            return N(T ? ve - De : ve + (6 - De), ee);
          case u:
          case f:
            return z(pe + "Hours", 0);
          case s:
            return z(pe + "Minutes", 1);
          case l:
            return z(pe + "Seconds", 2);
          case i:
            return z(pe + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, M.endOf = function(S) {
        return this.startOf(S, !1);
      }, M.$set = function(S, P) {
        var _, T = R.p(S), w = "set" + (this.$u ? "UTC" : ""), N = (_ = {}, _[u] = w + "Date", _[f] = w + "Date", _[p] = w + "Month", _[m] = w + "FullYear", _[s] = w + "Hours", _[l] = w + "Minutes", _[i] = w + "Seconds", _[a] = w + "Milliseconds", _)[T], z = T === u ? this.$D + (P - this.$W) : P;
        if (T === p || T === m) {
          var X = this.clone().set(f, 1);
          X.$d[N](z), X.init(), this.$d = X.set(f, Math.min(this.$D, X.daysInMonth())).$d;
        } else
          N && this.$d[N](z);
        return this.init(), this;
      }, M.set = function(S, P) {
        return this.clone().$set(S, P);
      }, M.get = function(S) {
        return this[R.p(S)]();
      }, M.add = function(S, P) {
        var _, T = this;
        S = Number(S);
        var w = R.p(P), N = function(ee) {
          var ve = H(T);
          return R.w(ve.date(ve.date() + Math.round(ee * S)), T);
        };
        if (w === p)
          return this.set(p, this.$M + S);
        if (w === m)
          return this.set(m, this.$y + S);
        if (w === u)
          return N(1);
        if (w === d)
          return N(7);
        var z = (_ = {}, _[l] = r, _[s] = o, _[i] = n, _)[w] || 1, X = this.$d.getTime() + S * z;
        return R.w(X, this);
      }, M.subtract = function(S, P) {
        return this.add(-1 * S, P);
      }, M.format = function(S) {
        var P = this, _ = this.$locale();
        if (!this.isValid())
          return _.invalidDate || v;
        var T = S || "YYYY-MM-DDTHH:mm:ssZ", w = R.z(this), N = this.$H, z = this.$m, X = this.$M, ee = _.weekdays, ve = _.months, pe = function(W, Z, ue, ce) {
          return W && (W[Z] || W(P, T)) || ue[Z].slice(0, ce);
        }, Ce = function(W) {
          return R.s(N % 12 || 12, W, "0");
        }, De = _.meridiem || function(W, Z, ue) {
          var ce = W < 12 ? "AM" : "PM";
          return ue ? ce.toLowerCase() : ce;
        }, be = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: X + 1, MM: R.s(X + 1, 2, "0"), MMM: pe(_.monthsShort, X, ve, 3), MMMM: pe(ve, X), D: this.$D, DD: R.s(this.$D, 2, "0"), d: String(this.$W), dd: pe(_.weekdaysMin, this.$W, ee, 2), ddd: pe(_.weekdaysShort, this.$W, ee, 3), dddd: ee[this.$W], H: String(N), HH: R.s(N, 2, "0"), h: Ce(1), hh: Ce(2), a: De(N, z, !0), A: De(N, z, !1), m: String(z), mm: R.s(z, 2, "0"), s: String(this.$s), ss: R.s(this.$s, 2, "0"), SSS: R.s(this.$ms, 3, "0"), Z: w };
        return T.replace(g, function(W, Z) {
          return Z || be[W] || w.replace(":", "");
        });
      }, M.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, M.diff = function(S, P, _) {
        var T, w = R.p(P), N = H(S), z = (N.utcOffset() - this.utcOffset()) * r, X = this - N, ee = R.m(this, N);
        return ee = (T = {}, T[m] = ee / 12, T[p] = ee, T[h] = ee / 3, T[d] = (X - z) / 6048e5, T[u] = (X - z) / 864e5, T[s] = X / o, T[l] = X / r, T[i] = X / n, T)[w] || X, _ ? ee : R.a(ee);
      }, M.daysInMonth = function() {
        return this.endOf(p).$D;
      }, M.$locale = function() {
        return C[this.$L];
      }, M.locale = function(S, P) {
        if (!S)
          return this.$L;
        var _ = this.clone(), T = F(S, P, !0);
        return T && (_.$L = T), _;
      }, M.clone = function() {
        return R.w(this.$d, this);
      }, M.toDate = function() {
        return new Date(this.valueOf());
      }, M.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, M.toISOString = function() {
        return this.$d.toISOString();
      }, M.toString = function() {
        return this.$d.toUTCString();
      }, L;
    }(), J = q.prototype;
    return H.prototype = J, [["$ms", a], ["$s", i], ["$m", l], ["$H", s], ["$W", u], ["$M", p], ["$y", m], ["$D", f]].forEach(function(L) {
      J[L[1]] = function(M) {
        return this.$g(M, L[0], L[1]);
      };
    }), H.extend = function(L, M) {
      return L.$i || (L(M, q, H), L.$i = !0), H;
    }, H.locale = F, H.isDayjs = E, H.unix = function(L) {
      return H(1e3 * L);
    }, H.en = C[I], H.Ls = C, H.p = {}, H;
  });
})(Od);
var WC = Od.exports;
const Ot = /* @__PURE__ */ kd(WC);
var Td = { exports: {} };
(function(e, t) {
  (function(n, r) {
    e.exports = r();
  })(Ed, function() {
    var n = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, r = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, o = /\d\d/, a = /\d\d?/, i = /\d*[^-_:/,()\s\d]+/, l = {}, s = function(v) {
      return (v = +v) + (v > 68 ? 1900 : 2e3);
    }, u = function(v) {
      return function(y) {
        this[v] = +y;
      };
    }, d = [/[+-]\d\d:?(\d\d)?|Z/, function(v) {
      (this.zone || (this.zone = {})).offset = function(y) {
        if (!y || y === "Z")
          return 0;
        var g = y.match(/([+-]|\d\d)/g), x = 60 * g[1] + (+g[2] || 0);
        return x === 0 ? 0 : g[0] === "+" ? -x : x;
      }(v);
    }], p = function(v) {
      var y = l[v];
      return y && (y.indexOf ? y : y.s.concat(y.f));
    }, h = function(v, y) {
      var g, x = l.meridiem;
      if (x) {
        for (var $ = 1; $ <= 24; $ += 1)
          if (v.indexOf(x($, 0, y)) > -1) {
            g = $ > 12;
            break;
          }
      } else
        g = v === (y ? "pm" : "PM");
      return g;
    }, m = { A: [i, function(v) {
      this.afternoon = h(v, !1);
    }], a: [i, function(v) {
      this.afternoon = h(v, !0);
    }], S: [/\d/, function(v) {
      this.milliseconds = 100 * +v;
    }], SS: [o, function(v) {
      this.milliseconds = 10 * +v;
    }], SSS: [/\d{3}/, function(v) {
      this.milliseconds = +v;
    }], s: [a, u("seconds")], ss: [a, u("seconds")], m: [a, u("minutes")], mm: [a, u("minutes")], H: [a, u("hours")], h: [a, u("hours")], HH: [a, u("hours")], hh: [a, u("hours")], D: [a, u("day")], DD: [o, u("day")], Do: [i, function(v) {
      var y = l.ordinal, g = v.match(/\d+/);
      if (this.day = g[0], y)
        for (var x = 1; x <= 31; x += 1)
          y(x).replace(/\[|\]/g, "") === v && (this.day = x);
    }], M: [a, u("month")], MM: [o, u("month")], MMM: [i, function(v) {
      var y = p("months"), g = (p("monthsShort") || y.map(function(x) {
        return x.slice(0, 3);
      })).indexOf(v) + 1;
      if (g < 1)
        throw new Error();
      this.month = g % 12 || g;
    }], MMMM: [i, function(v) {
      var y = p("months").indexOf(v) + 1;
      if (y < 1)
        throw new Error();
      this.month = y % 12 || y;
    }], Y: [/[+-]?\d+/, u("year")], YY: [o, function(v) {
      this.year = s(v);
    }], YYYY: [/\d{4}/, u("year")], Z: d, ZZ: d };
    function f(v) {
      var y, g;
      y = v, g = l && l.formats;
      for (var x = (v = y.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(H, R, q) {
        var J = q && q.toUpperCase();
        return R || g[q] || n[q] || g[J].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(L, M, S) {
          return M || S.slice(1);
        });
      })).match(r), $ = x.length, k = 0; k < $; k += 1) {
        var I = x[k], C = m[I], E = C && C[0], F = C && C[1];
        x[k] = F ? { regex: E, parser: F } : I.replace(/^\[|\]$/g, "");
      }
      return function(H) {
        for (var R = {}, q = 0, J = 0; q < $; q += 1) {
          var L = x[q];
          if (typeof L == "string")
            J += L.length;
          else {
            var M = L.regex, S = L.parser, P = H.slice(J), _ = M.exec(P)[0];
            S.call(R, _), H = H.replace(_, "");
          }
        }
        return function(T) {
          var w = T.afternoon;
          if (w !== void 0) {
            var N = T.hours;
            w ? N < 12 && (T.hours += 12) : N === 12 && (T.hours = 0), delete T.afternoon;
          }
        }(R), R;
      };
    }
    return function(v, y, g) {
      g.p.customParseFormat = !0, v && v.parseTwoDigitYear && (s = v.parseTwoDigitYear);
      var x = y.prototype, $ = x.parse;
      x.parse = function(k) {
        var I = k.date, C = k.utc, E = k.args;
        this.$u = C;
        var F = E[1];
        if (typeof F == "string") {
          var H = E[2] === !0, R = E[3] === !0, q = H || R, J = E[2];
          R && (J = E[2]), l = this.$locale(), !H && J && (l = g.Ls[J]), this.$d = function(P, _, T) {
            try {
              if (["x", "X"].indexOf(_) > -1)
                return new Date((_ === "X" ? 1e3 : 1) * P);
              var w = f(_)(P), N = w.year, z = w.month, X = w.day, ee = w.hours, ve = w.minutes, pe = w.seconds, Ce = w.milliseconds, De = w.zone, be = /* @__PURE__ */ new Date(), W = X || (N || z ? 1 : be.getDate()), Z = N || be.getFullYear(), ue = 0;
              N && !z || (ue = z > 0 ? z - 1 : be.getMonth());
              var ce = ee || 0, ye = ve || 0, Me = pe || 0, Fe = Ce || 0;
              return De ? new Date(Date.UTC(Z, ue, W, ce, ye, Me, Fe + 60 * De.offset * 1e3)) : T ? new Date(Date.UTC(Z, ue, W, ce, ye, Me, Fe)) : new Date(Z, ue, W, ce, ye, Me, Fe);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }(I, F, C), this.init(), J && J !== !0 && (this.$L = this.locale(J).$L), q && I != this.format(F) && (this.$d = /* @__PURE__ */ new Date("")), l = {};
        } else if (F instanceof Array)
          for (var L = F.length, M = 1; M <= L; M += 1) {
            E[1] = F[M - 1];
            var S = g.apply(this, E);
            if (S.isValid()) {
              this.$d = S.$d, this.$L = S.$L, this.init();
              break;
            }
            M === L && (this.$d = /* @__PURE__ */ new Date(""));
          }
        else
          $.call(this, k);
      };
    };
  });
})(Td);
var UC = Td.exports;
const qC = /* @__PURE__ */ kd(UC), cu = ["hours", "minutes", "seconds"], YC = "HH:mm:ss", Ha = (e, t) => [
  e > 0 ? e - 1 : void 0,
  e,
  e < t ? e + 1 : void 0
], du = function(e, t) {
  const n = Ps(e), r = Ps(t);
  return n && r ? e.getTime() === t.getTime() : !n && !r ? e === t : !1;
}, pu = function(e, t) {
  const n = Ue(e), r = Ue(t);
  return n && r ? e.length !== t.length ? !1 : e.every((o, a) => du(o, t[a])) : !n && !r ? du(e, t) : !1;
}, fu = function(e, t, n) {
  const r = Rc(t) || t === "x" ? Ot(e).locale(n) : Ot(e, t).locale(n);
  return r.isValid() ? r : void 0;
}, hu = function(e, t, n) {
  return Rc(t) ? e : t === "x" ? +e : Ot(e).locale(n).format(t);
}, Va = (e, t) => {
  var n;
  const r = [], o = t == null ? void 0 : t();
  for (let a = 0; a < e; a++)
    r.push((n = o == null ? void 0 : o.includes(a)) != null ? n : !1);
  return r;
}, Dd = Be({
  disabledHours: {
    type: de(Function)
  },
  disabledMinutes: {
    type: de(Function)
  },
  disabledSeconds: {
    type: de(Function)
  }
}), Ad = Be({
  visible: Boolean,
  actualVisible: {
    type: Boolean,
    default: void 0
  },
  format: {
    type: String,
    default: ""
  }
}), Md = Be({
  id: {
    type: de([Array, String])
  },
  name: {
    type: de([Array, String]),
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
    type: de([String, Object]),
    default: sa
  },
  editable: {
    type: Boolean,
    default: !0
  },
  prefixIcon: {
    type: de([String, Object]),
    default: ""
  },
  size: fo,
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
    type: de(Object),
    default: () => ({})
  },
  modelValue: {
    type: de([Date, Array, String, Number]),
    default: ""
  },
  rangeSeparator: {
    type: String,
    default: "-"
  },
  startPlaceholder: String,
  endPlaceholder: String,
  defaultValue: {
    type: de([Date, Array])
  },
  defaultTime: {
    type: de([Date, Array])
  },
  isRange: {
    type: Boolean,
    default: !1
  },
  ...Dd,
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
    type: de([String, Number]),
    default: 0
  },
  validateEvent: {
    type: Boolean,
    default: !0
  },
  unlinkPanels: Boolean
}), GC = ["id", "name", "placeholder", "value", "disabled", "readonly"], XC = ["id", "name", "placeholder", "value", "disabled", "readonly"], ZC = ne({
  name: "Picker"
}), QC = /* @__PURE__ */ ne({
  ...ZC,
  props: Md,
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
    const r = e, { lang: o } = ir(), a = ge("date"), i = ge("input"), l = ge("range"), { form: s, formItem: u } = ar(), d = Se("ElPopperOptions", {}), p = V(), h = V(), m = V(!1), f = V(!1), v = V(null);
    let y = !1, g = !1;
    ae(m, (b) => {
      b ? me(() => {
        b && (v.value = r.modelValue);
      }) : (fe.value = null, me(() => {
        x(r.modelValue);
      }));
    });
    const x = (b, B) => {
      (B || !pu(b, v.value)) && (n("change", b), r.validateEvent && (u == null || u.validate("change").catch((ie) => rt(ie))));
    }, $ = (b) => {
      if (!pu(r.modelValue, b)) {
        let B;
        Ue(b) ? B = b.map((ie) => hu(ie, r.valueFormat, o.value)) : b && (B = hu(b, r.valueFormat, o.value)), n("update:modelValue", b && B, o.value);
      }
    }, k = (b) => {
      n("keydown", b);
    }, I = O(() => {
      if (h.value) {
        const b = ye.value ? h.value : h.value.$el;
        return Array.from(b.querySelectorAll("input"));
      }
      return [];
    }), C = (b, B, ie) => {
      const Te = I.value;
      Te.length && (!ie || ie === "min" ? (Te[0].setSelectionRange(b, B), Te[0].focus()) : ie === "max" && (Te[1].setSelectionRange(b, B), Te[1].focus()));
    }, E = () => {
      S(!0, !0), me(() => {
        g = !1;
      });
    }, F = (b = "", B = !1) => {
      B || (g = !0), m.value = B;
      let ie;
      Ue(b) ? ie = b.map((Te) => Te.toDate()) : ie = b && b.toDate(), fe.value = null, $(ie);
    }, H = () => {
      f.value = !0;
    }, R = () => {
      n("visible-change", !0);
    }, q = (b) => {
      (b == null ? void 0 : b.key) === qe.esc && S(!0, !0);
    }, J = () => {
      f.value = !1, m.value = !1, g = !1, n("visible-change", !1);
    }, L = () => {
      m.value = !0;
    }, M = () => {
      m.value = !1;
    }, S = (b = !0, B = !1) => {
      g = B;
      const [ie, Te] = c(I);
      let Ye = ie;
      !b && ye.value && (Ye = Te), Ye && Ye.focus();
    }, P = (b) => {
      r.readonly || w.value || m.value || g || (m.value = !0, n("focus", b));
    };
    let _;
    const T = (b) => {
      const B = async () => {
        setTimeout(() => {
          var ie;
          _ === B && (!((ie = p.value) != null && ie.isFocusInsideContent() && !y) && I.value.filter((Te) => Te.contains(document.activeElement)).length === 0 && (ft(), m.value = !1, n("blur", b), r.validateEvent && (u == null || u.validate("blur").catch((Te) => rt(Te)))), y = !1);
        }, 0);
      };
      _ = B, B();
    }, w = O(() => r.disabled || (s == null ? void 0 : s.disabled)), N = O(() => {
      let b;
      if (be.value ? Pe.value.getDefaultValue && (b = Pe.value.getDefaultValue()) : Ue(r.modelValue) ? b = r.modelValue.map((B) => fu(B, r.valueFormat, o.value)) : b = fu(r.modelValue, r.valueFormat, o.value), Pe.value.getRangeAvailableTime) {
        const B = Pe.value.getRangeAvailableTime(b);
        qo(B, b) || (b = B, $(Ue(b) ? b.map((ie) => ie.toDate()) : b.toDate()));
      }
      return Ue(b) && b.some((B) => !B) && (b = []), b;
    }), z = O(() => {
      if (!Pe.value.panelReady)
        return "";
      const b = Xe(N.value);
      return Ue(fe.value) ? [
        fe.value[0] || b && b[0] || "",
        fe.value[1] || b && b[1] || ""
      ] : fe.value !== null ? fe.value : !ee.value && be.value || !m.value && be.value ? "" : b ? ve.value ? b.join(", ") : b : "";
    }), X = O(() => r.type.includes("time")), ee = O(() => r.type.startsWith("time")), ve = O(() => r.type === "dates"), pe = O(() => r.prefixIcon || (X.value ? B2 : d2)), Ce = V(!1), De = (b) => {
      r.readonly || w.value || Ce.value && (b.stopPropagation(), E(), $(null), x(null, !0), Ce.value = !1, m.value = !1, Pe.value.handleClear && Pe.value.handleClear());
    }, be = O(() => {
      const { modelValue: b } = r;
      return !b || Ue(b) && !b.filter(Boolean).length;
    }), W = async (b) => {
      var B;
      r.readonly || w.value || (((B = b.target) == null ? void 0 : B.tagName) !== "INPUT" || I.value.includes(document.activeElement)) && (m.value = !0);
    }, Z = () => {
      r.readonly || w.value || !be.value && r.clearable && (Ce.value = !0);
    }, ue = () => {
      Ce.value = !1;
    }, ce = (b) => {
      var B;
      r.readonly || w.value || (((B = b.touches[0].target) == null ? void 0 : B.tagName) !== "INPUT" || I.value.includes(document.activeElement)) && (m.value = !0);
    }, ye = O(() => r.type.includes("range")), Me = Zn(), Fe = O(() => {
      var b, B;
      return (B = (b = c(p)) == null ? void 0 : b.popperRef) == null ? void 0 : B.contentRef;
    }), He = O(() => {
      var b;
      return c(ye) ? c(h) : (b = c(h)) == null ? void 0 : b.$el;
    });
    Bc(He, (b) => {
      const B = c(Fe), ie = c(He);
      B && (b.target === B || b.composedPath().includes(B)) || b.target === ie || b.composedPath().includes(ie) || (m.value = !1);
    });
    const fe = V(null), ft = () => {
      if (fe.value) {
        const b = Ke(z.value);
        b && it(b) && ($(Ue(b) ? b.map((B) => B.toDate()) : b.toDate()), fe.value = null);
      }
      fe.value === "" && ($(null), x(null), fe.value = null);
    }, Ke = (b) => b ? Pe.value.parseUserInput(b) : null, Xe = (b) => b ? Pe.value.formatToString(b) : null, it = (b) => Pe.value.isValidValue(b), K = async (b) => {
      if (r.readonly || w.value)
        return;
      const { code: B } = b;
      if (k(b), B === qe.esc) {
        m.value === !0 && (m.value = !1, b.preventDefault(), b.stopPropagation());
        return;
      }
      if (B === qe.down && (Pe.value.handleFocusPicker && (b.preventDefault(), b.stopPropagation()), m.value === !1 && (m.value = !0, await me()), Pe.value.handleFocusPicker)) {
        Pe.value.handleFocusPicker();
        return;
      }
      if (B === qe.tab) {
        y = !0;
        return;
      }
      if (B === qe.enter || B === qe.numpadEnter) {
        (fe.value === null || fe.value === "" || it(Ke(z.value))) && (ft(), m.value = !1), b.stopPropagation();
        return;
      }
      if (fe.value) {
        b.stopPropagation();
        return;
      }
      Pe.value.handleKeydownInput && Pe.value.handleKeydownInput(b);
    }, we = (b) => {
      fe.value = b, m.value || (m.value = !0);
    }, Ze = (b) => {
      const B = b.target;
      fe.value ? fe.value = [B.value, fe.value[1]] : fe.value = [B.value, null];
    }, gt = (b) => {
      const B = b.target;
      fe.value ? fe.value = [fe.value[0], B.value] : fe.value = [null, B.value];
    }, tn = () => {
      var b;
      const B = fe.value, ie = Ke(B && B[0]), Te = c(N);
      if (ie && ie.isValid()) {
        fe.value = [
          Xe(ie),
          ((b = z.value) == null ? void 0 : b[1]) || null
        ];
        const Ye = [ie, Te && (Te[1] || null)];
        it(Ye) && ($(Ye), fe.value = null);
      }
    }, Vt = () => {
      var b;
      const B = c(fe), ie = Ke(B && B[1]), Te = c(N);
      if (ie && ie.isValid()) {
        fe.value = [
          ((b = c(z)) == null ? void 0 : b[0]) || null,
          Xe(ie)
        ];
        const Ye = [Te && Te[0], ie];
        it(Ye) && ($(Ye), fe.value = null);
      }
    }, Pe = V({}), gn = (b) => {
      Pe.value[b[0]] = b[1], Pe.value.panelReady = !0;
    }, D = (b) => {
      n("calendar-change", b);
    }, U = (b, B, ie) => {
      n("panel-change", b, B, ie);
    };
    return et("EP_PICKER_BASE", {
      props: r
    }), t({
      focus: S,
      handleFocusInput: P,
      handleBlurInput: T,
      handleOpen: L,
      handleClose: M,
      onPick: F
    }), (b, B) => (A(), te(c(_d), jt({
      ref_key: "refPopper",
      ref: p,
      visible: m.value,
      effect: "light",
      pure: "",
      trigger: "click"
    }, b.$attrs, {
      role: "dialog",
      teleported: "",
      transition: `${c(a).namespace.value}-zoom-in-top`,
      "popper-class": [`${c(a).namespace.value}-picker__popper`, b.popperClass],
      "popper-options": c(d),
      "fallback-placements": ["bottom", "top", "right", "left"],
      "gpu-acceleration": !1,
      "stop-popper-mouse-event": !1,
      "hide-after": 0,
      persistent: "",
      onBeforeShow: H,
      onShow: R,
      onHide: J
    }), {
      default: oe(() => [
        c(ye) ? (A(), G("div", {
          key: 1,
          ref_key: "inputRef",
          ref: h,
          class: j([
            c(a).b("editor"),
            c(a).bm("editor", b.type),
            c(i).e("wrapper"),
            c(a).is("disabled", c(w)),
            c(a).is("active", m.value),
            c(l).b("editor"),
            c(Me) ? c(l).bm("editor", c(Me)) : "",
            b.$attrs.class
          ]),
          style: Qe(b.$attrs.style),
          onClick: P,
          onMouseenter: Z,
          onMouseleave: ue,
          onTouchstart: ce,
          onKeydown: K
        }, [
          c(pe) ? (A(), te(c(nt), {
            key: 0,
            class: j([c(i).e("icon"), c(l).e("icon")]),
            onMousedown: je(W, ["prevent"]),
            onTouchstart: ce
          }, {
            default: oe(() => [
              (A(), te(st(c(pe))))
            ]),
            _: 1
          }, 8, ["class", "onMousedown"])) : re("v-if", !0),
          Q("input", {
            id: b.id && b.id[0],
            autocomplete: "off",
            name: b.name && b.name[0],
            placeholder: b.startPlaceholder,
            value: c(z) && c(z)[0],
            disabled: c(w),
            readonly: !b.editable || b.readonly,
            class: j(c(l).b("input")),
            onMousedown: W,
            onInput: Ze,
            onChange: tn,
            onFocus: P,
            onBlur: T
          }, null, 42, GC),
          _e(b.$slots, "range-separator", {}, () => [
            Q("span", {
              class: j(c(l).b("separator"))
            }, ke(b.rangeSeparator), 3)
          ]),
          Q("input", {
            id: b.id && b.id[1],
            autocomplete: "off",
            name: b.name && b.name[1],
            placeholder: b.endPlaceholder,
            value: c(z) && c(z)[1],
            disabled: c(w),
            readonly: !b.editable || b.readonly,
            class: j(c(l).b("input")),
            onMousedown: W,
            onFocus: P,
            onBlur: T,
            onInput: gt,
            onChange: Vt
          }, null, 42, XC),
          b.clearIcon ? (A(), te(c(nt), {
            key: 1,
            class: j([
              c(i).e("icon"),
              c(l).e("close-icon"),
              {
                [c(l).e("close-icon--hidden")]: !Ce.value
              }
            ]),
            onClick: De
          }, {
            default: oe(() => [
              (A(), te(st(b.clearIcon)))
            ]),
            _: 1
          }, 8, ["class"])) : re("v-if", !0)
        ], 38)) : (A(), te(c(fd), {
          key: 0,
          id: b.id,
          ref_key: "inputRef",
          ref: h,
          "container-role": "combobox",
          "model-value": c(z),
          name: b.name,
          size: c(Me),
          disabled: c(w),
          placeholder: b.placeholder,
          class: j([c(a).b("editor"), c(a).bm("editor", b.type), b.$attrs.class]),
          style: Qe(b.$attrs.style),
          readonly: !b.editable || b.readonly || c(ve) || b.type === "week",
          label: b.label,
          tabindex: b.tabindex,
          "validate-event": !1,
          onInput: we,
          onFocus: P,
          onBlur: T,
          onKeydown: K,
          onChange: ft,
          onMousedown: W,
          onMouseenter: Z,
          onMouseleave: ue,
          onTouchstart: ce,
          onClick: B[0] || (B[0] = je(() => {
          }, ["stop"]))
        }, {
          prefix: oe(() => [
            c(pe) ? (A(), te(c(nt), {
              key: 0,
              class: j(c(i).e("icon")),
              onMousedown: je(W, ["prevent"]),
              onTouchstart: ce
            }, {
              default: oe(() => [
                (A(), te(st(c(pe))))
              ]),
              _: 1
            }, 8, ["class", "onMousedown"])) : re("v-if", !0)
          ]),
          suffix: oe(() => [
            Ce.value && b.clearIcon ? (A(), te(c(nt), {
              key: 0,
              class: j(`${c(i).e("icon")} clear-icon`),
              onClick: je(De, ["stop"])
            }, {
              default: oe(() => [
                (A(), te(st(b.clearIcon)))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : re("v-if", !0)
          ]),
          _: 1
        }, 8, ["id", "model-value", "name", "size", "disabled", "placeholder", "class", "style", "readonly", "label", "tabindex", "onKeydown"]))
      ]),
      content: oe(() => [
        _e(b.$slots, "default", {
          visible: m.value,
          actualVisible: f.value,
          parsedValue: c(N),
          format: b.format,
          unlinkPanels: b.unlinkPanels,
          type: b.type,
          defaultValue: b.defaultValue,
          onPick: F,
          onSelectRange: C,
          onSetPickerOption: gn,
          onCalendarChange: D,
          onPanelChange: U,
          onKeydown: q,
          onMousedown: B[1] || (B[1] = je(() => {
          }, ["stop"]))
        })
      ]),
      _: 3
    }, 16, ["visible", "transition", "popper-class", "popper-options"]));
  }
});
var JC = /* @__PURE__ */ Oe(QC, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/time-picker/src/common/picker.vue"]]);
const eE = Be({
  ...Ad,
  datetimeRole: String,
  parsedValue: {
    type: de(Object)
  }
}), $d = ({
  getAvailableHours: e,
  getAvailableMinutes: t,
  getAvailableSeconds: n
}) => {
  const r = (a, i, l, s) => {
    const u = {
      hour: e,
      minute: t,
      second: n
    };
    let d = a;
    return ["hour", "minute", "second"].forEach((p) => {
      if (u[p]) {
        let h;
        const m = u[p];
        switch (p) {
          case "minute": {
            h = m(d.hour(), i, s);
            break;
          }
          case "second": {
            h = m(d.hour(), d.minute(), i, s);
            break;
          }
          default: {
            h = m(i, s);
            break;
          }
        }
        if (h != null && h.length && !h.includes(d[p]())) {
          const f = l ? 0 : h.length - 1;
          d = d[p](h[f]);
        }
      }
    }), d;
  }, o = {};
  return {
    timePickerOptions: o,
    getAvailableTime: r,
    onSetOption: ([a, i]) => {
      o[a] = i;
    }
  };
}, Ka = (e) => {
  const t = (r, o) => r || o, n = (r) => r !== !0;
  return e.map(t).filter(n);
}, Id = (e, t, n) => ({
  getHoursList: (r, o) => Va(24, e && (() => e == null ? void 0 : e(r, o))),
  getMinutesList: (r, o, a) => Va(60, t && (() => t == null ? void 0 : t(r, o, a))),
  getSecondsList: (r, o, a, i) => Va(60, n && (() => n == null ? void 0 : n(r, o, a, i)))
}), Nd = (e, t, n) => {
  const { getHoursList: r, getMinutesList: o, getSecondsList: a } = Id(e, t, n);
  return {
    getAvailableHours: (i, l) => Ka(r(i, l)),
    getAvailableMinutes: (i, l, s) => Ka(o(i, l, s)),
    getAvailableSeconds: (i, l, s, u) => Ka(a(i, l, s, u))
  };
}, Pd = (e) => {
  const t = V(e.parsedValue);
  return ae(() => e.visible, (n) => {
    n || (t.value = e.parsedValue);
  }), t;
}, wn = /* @__PURE__ */ new Map();
let vu;
pt && (document.addEventListener("mousedown", (e) => vu = e), document.addEventListener("mouseup", (e) => {
  for (const t of wn.values())
    for (const { documentHandler: n } of t)
      n(e, vu);
}));
function mu(e, t) {
  let n = [];
  return Array.isArray(t.arg) ? n = t.arg : ao(t.arg) && n.push(t.arg), function(r, o) {
    const a = t.instance.popperRef, i = r.target, l = o == null ? void 0 : o.target, s = !t || !t.instance, u = !i || !l, d = e.contains(i) || e.contains(l), p = e === i, h = n.length && n.some((f) => f == null ? void 0 : f.contains(i)) || n.length && n.includes(l), m = a && (a.contains(i) || a.contains(l));
    s || u || d || p || h || m || t.value(r, o);
  };
}
const tE = {
  beforeMount(e, t) {
    wn.has(e) || wn.set(e, []), wn.get(e).push({
      documentHandler: mu(e, t),
      bindingFn: t.value
    });
  },
  updated(e, t) {
    wn.has(e) || wn.set(e, []);
    const n = wn.get(e), r = n.findIndex((a) => a.bindingFn === t.oldValue), o = {
      documentHandler: mu(e, t),
      bindingFn: t.value
    };
    r >= 0 ? n.splice(r, 1, o) : n.push(o);
  },
  unmounted(e) {
    wn.delete(e);
  }
}, nE = 100, rE = 600, gu = {
  beforeMount(e, t) {
    const n = t.value, { interval: r = nE, delay: o = rE } = xt(n) ? {} : n;
    let a, i;
    const l = () => xt(n) ? n() : n.handler(), s = () => {
      i && (clearTimeout(i), i = void 0), a && (clearInterval(a), a = void 0);
    };
    e.addEventListener("mousedown", (u) => {
      u.button === 0 && (s(), l(), document.addEventListener("mouseup", () => s(), {
        once: !0
      }), i = setTimeout(() => {
        a = setInterval(() => {
          l();
        }, r);
      }, o));
    });
  }
}, oE = Be({
  role: {
    type: String,
    required: !0
  },
  spinnerDate: {
    type: de(Object),
    required: !0
  },
  showSeconds: {
    type: Boolean,
    default: !0
  },
  arrowControl: Boolean,
  amPmMode: {
    type: de(String),
    default: ""
  },
  ...Dd
}), aE = ["onClick"], iE = ["onMouseenter"], lE = /* @__PURE__ */ ne({
  __name: "basic-time-spinner",
  props: oE,
  emits: ["change", "select-range", "set-option"],
  setup(e, { emit: t }) {
    const n = e, r = ge("time"), { getHoursList: o, getMinutesList: a, getSecondsList: i } = Id(n.disabledHours, n.disabledMinutes, n.disabledSeconds);
    let l = !1;
    const s = V(), u = V(), d = V(), p = V(), h = {
      hours: u,
      minutes: d,
      seconds: p
    }, m = O(() => n.showSeconds ? cu : cu.slice(0, 2)), f = O(() => {
      const { spinnerDate: w } = n, N = w.hour(), z = w.minute(), X = w.second();
      return { hours: N, minutes: z, seconds: X };
    }), v = O(() => {
      const { hours: w, minutes: N } = c(f);
      return {
        hours: o(n.role),
        minutes: a(w, n.role),
        seconds: i(w, N, n.role)
      };
    }), y = O(() => {
      const { hours: w, minutes: N, seconds: z } = c(f);
      return {
        hours: Ha(w, 23),
        minutes: Ha(N, 59),
        seconds: Ha(z, 59)
      };
    }), g = di((w) => {
      l = !1, k(w);
    }, 200), x = (w) => {
      if (!n.amPmMode)
        return "";
      const N = n.amPmMode === "A";
      let z = w < 12 ? " am" : " pm";
      return N && (z = z.toUpperCase()), z;
    }, $ = (w) => {
      let N;
      switch (w) {
        case "hours":
          N = [0, 2];
          break;
        case "minutes":
          N = [3, 5];
          break;
        case "seconds":
          N = [6, 8];
          break;
      }
      const [z, X] = N;
      t("select-range", z, X), s.value = w;
    }, k = (w) => {
      E(w, c(f)[w]);
    }, I = () => {
      k("hours"), k("minutes"), k("seconds");
    }, C = (w) => w.querySelector(`.${r.namespace.value}-scrollbar__wrap`), E = (w, N) => {
      if (n.arrowControl)
        return;
      const z = c(h[w]);
      z && z.$el && (C(z.$el).scrollTop = Math.max(0, N * F(w)));
    }, F = (w) => {
      const N = c(h[w]);
      return (N == null ? void 0 : N.$el.querySelector("li").offsetHeight) || 0;
    }, H = () => {
      q(1);
    }, R = () => {
      q(-1);
    }, q = (w) => {
      s.value || $("hours");
      const N = s.value, z = c(f)[N], X = s.value === "hours" ? 24 : 60, ee = J(N, z, w, X);
      L(N, ee), E(N, ee), me(() => $(N));
    }, J = (w, N, z, X) => {
      let ee = (N + z + X) % X;
      const ve = c(v)[w];
      for (; ve[ee] && ee !== N; )
        ee = (ee + z + X) % X;
      return ee;
    }, L = (w, N) => {
      if (c(v)[w][N])
        return;
      const { hours: z, minutes: X, seconds: ee } = c(f);
      let ve;
      switch (w) {
        case "hours":
          ve = n.spinnerDate.hour(N).minute(X).second(ee);
          break;
        case "minutes":
          ve = n.spinnerDate.hour(z).minute(N).second(ee);
          break;
        case "seconds":
          ve = n.spinnerDate.hour(z).minute(X).second(N);
          break;
      }
      t("change", ve);
    }, M = (w, { value: N, disabled: z }) => {
      z || (L(w, N), $(w), E(w, N));
    }, S = (w) => {
      l = !0, g(w);
      const N = Math.min(Math.round((C(c(h[w]).$el).scrollTop - (P(w) * 0.5 - 10) / F(w) + 3) / F(w)), w === "hours" ? 23 : 59);
      L(w, N);
    }, P = (w) => c(h[w]).$el.offsetHeight, _ = () => {
      const w = (N) => {
        const z = c(h[N]);
        z && z.$el && (C(z.$el).onscroll = () => {
          S(N);
        });
      };
      w("hours"), w("minutes"), w("seconds");
    };
    at(() => {
      me(() => {
        !n.arrowControl && _(), I(), n.role === "start" && $("hours");
      });
    });
    const T = (w, N) => {
      h[N].value = w;
    };
    return t("set-option", [`${n.role}_scrollDown`, q]), t("set-option", [`${n.role}_emitSelectRange`, $]), ae(() => n.spinnerDate, () => {
      l || I();
    }), (w, N) => (A(), G("div", {
      class: j([c(r).b("spinner"), { "has-seconds": w.showSeconds }])
    }, [
      w.arrowControl ? re("v-if", !0) : (A(!0), G(Ve, { key: 0 }, Sn(c(m), (z) => (A(), te(c(hd), {
        key: z,
        ref_for: !0,
        ref: (X) => T(X, z),
        class: j(c(r).be("spinner", "wrapper")),
        "wrap-style": "max-height: inherit;",
        "view-class": c(r).be("spinner", "list"),
        noresize: "",
        tag: "ul",
        onMouseenter: (X) => $(z),
        onMousemove: (X) => k(z)
      }, {
        default: oe(() => [
          (A(!0), G(Ve, null, Sn(c(v)[z], (X, ee) => (A(), G("li", {
            key: ee,
            class: j([
              c(r).be("spinner", "item"),
              c(r).is("active", ee === c(f)[z]),
              c(r).is("disabled", X)
            ]),
            onClick: (ve) => M(z, { value: ee, disabled: X })
          }, [
            z === "hours" ? (A(), G(Ve, { key: 0 }, [
              Rn(ke(("0" + (w.amPmMode ? ee % 12 || 12 : ee)).slice(-2)) + ke(x(ee)), 1)
            ], 64)) : (A(), G(Ve, { key: 1 }, [
              Rn(ke(("0" + ee).slice(-2)), 1)
            ], 64))
          ], 10, aE))), 128))
        ]),
        _: 2
      }, 1032, ["class", "view-class", "onMouseenter", "onMousemove"]))), 128)),
      w.arrowControl ? (A(!0), G(Ve, { key: 1 }, Sn(c(m), (z) => (A(), G("div", {
        key: z,
        class: j([c(r).be("spinner", "wrapper"), c(r).is("arrow")]),
        onMouseenter: (X) => $(z)
      }, [
        Je((A(), te(c(nt), {
          class: j(["arrow-up", c(r).be("spinner", "arrow")])
        }, {
          default: oe(() => [
            Ne(c(a2))
          ]),
          _: 1
        }, 8, ["class"])), [
          [c(gu), R]
        ]),
        Je((A(), te(c(nt), {
          class: j(["arrow-down", c(r).be("spinner", "arrow")])
        }, {
          default: oe(() => [
            Ne(c(Vc))
          ]),
          _: 1
        }, 8, ["class"])), [
          [c(gu), H]
        ]),
        Q("ul", {
          class: j(c(r).be("spinner", "list"))
        }, [
          (A(!0), G(Ve, null, Sn(c(y)[z], (X, ee) => (A(), G("li", {
            key: ee,
            class: j([
              c(r).be("spinner", "item"),
              c(r).is("active", X === c(f)[z]),
              c(r).is("disabled", c(v)[z][X])
            ])
          }, [
            typeof X == "number" ? (A(), G(Ve, { key: 0 }, [
              z === "hours" ? (A(), G(Ve, { key: 0 }, [
                Rn(ke(("0" + (w.amPmMode ? X % 12 || 12 : X)).slice(-2)) + ke(x(X)), 1)
              ], 64)) : (A(), G(Ve, { key: 1 }, [
                Rn(ke(("0" + X).slice(-2)), 1)
              ], 64))
            ], 64)) : re("v-if", !0)
          ], 2))), 128))
        ], 2)
      ], 42, iE))), 128)) : re("v-if", !0)
    ], 2));
  }
});
var bi = /* @__PURE__ */ Oe(lE, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/time-picker/src/time-picker-com/basic-time-spinner.vue"]]);
const sE = /* @__PURE__ */ ne({
  __name: "panel-time-pick",
  props: eE,
  emits: ["pick", "select-range", "set-picker-option"],
  setup(e, { emit: t }) {
    const n = e, r = Se("EP_PICKER_BASE"), {
      arrowControl: o,
      disabledHours: a,
      disabledMinutes: i,
      disabledSeconds: l,
      defaultValue: s
    } = r.props, { getAvailableHours: u, getAvailableMinutes: d, getAvailableSeconds: p } = Nd(a, i, l), h = ge("time"), { t: m, lang: f } = ir(), v = V([0, 2]), y = Pd(n), g = O(() => oo(n.actualVisible) ? `${h.namespace.value}-zoom-in-top` : ""), x = O(() => n.format.includes("ss")), $ = O(() => n.format.includes("A") ? "A" : n.format.includes("a") ? "a" : ""), k = (T) => {
      const w = Ot(T).locale(f.value), N = M(w);
      return w.isSame(N);
    }, I = () => {
      t("pick", y.value, !1);
    }, C = (T = !1, w = !1) => {
      w || t("pick", n.parsedValue, T);
    }, E = (T) => {
      if (!n.visible)
        return;
      const w = M(T).millisecond(0);
      t("pick", w, !0);
    }, F = (T, w) => {
      t("select-range", T, w), v.value = [T, w];
    }, H = (T) => {
      const w = [0, 3].concat(x.value ? [6] : []), N = ["hours", "minutes"].concat(x.value ? ["seconds"] : []), z = (w.indexOf(v.value[0]) + T + w.length) % w.length;
      q.start_emitSelectRange(N[z]);
    }, R = (T) => {
      const w = T.code, { left: N, right: z, up: X, down: ee } = qe;
      if ([N, z].includes(w)) {
        H(w === N ? -1 : 1), T.preventDefault();
        return;
      }
      if ([X, ee].includes(w)) {
        const ve = w === X ? -1 : 1;
        q.start_scrollDown(ve), T.preventDefault();
        return;
      }
    }, { timePickerOptions: q, onSetOption: J, getAvailableTime: L } = $d({
      getAvailableHours: u,
      getAvailableMinutes: d,
      getAvailableSeconds: p
    }), M = (T) => L(T, n.datetimeRole || "", !0), S = (T) => T ? Ot(T, n.format).locale(f.value) : null, P = (T) => T ? T.format(n.format) : null, _ = () => Ot(s).locale(f.value);
    return t("set-picker-option", ["isValidValue", k]), t("set-picker-option", ["formatToString", P]), t("set-picker-option", ["parseUserInput", S]), t("set-picker-option", ["handleKeydownInput", R]), t("set-picker-option", ["getRangeAvailableTime", M]), t("set-picker-option", ["getDefaultValue", _]), (T, w) => (A(), te(Er, { name: c(g) }, {
      default: oe(() => [
        T.actualVisible || T.visible ? (A(), G("div", {
          key: 0,
          class: j(c(h).b("panel"))
        }, [
          Q("div", {
            class: j([c(h).be("panel", "content"), { "has-seconds": c(x) }])
          }, [
            Ne(bi, {
              ref: "spinner",
              role: T.datetimeRole || "start",
              "arrow-control": c(o),
              "show-seconds": c(x),
              "am-pm-mode": c($),
              "spinner-date": T.parsedValue,
              "disabled-hours": c(a),
              "disabled-minutes": c(i),
              "disabled-seconds": c(l),
              onChange: E,
              onSetOption: c(J),
              onSelectRange: F
            }, null, 8, ["role", "arrow-control", "show-seconds", "am-pm-mode", "spinner-date", "disabled-hours", "disabled-minutes", "disabled-seconds", "onSetOption"])
          ], 2),
          Q("div", {
            class: j(c(h).be("panel", "footer"))
          }, [
            Q("button", {
              type: "button",
              class: j([c(h).be("panel", "btn"), "cancel"]),
              onClick: I
            }, ke(c(m)("el.datepicker.cancel")), 3),
            Q("button", {
              type: "button",
              class: j([c(h).be("panel", "btn"), "confirm"]),
              onClick: w[0] || (w[0] = (N) => C())
            }, ke(c(m)("el.datepicker.confirm")), 3)
          ], 2)
        ], 2)) : re("v-if", !0)
      ]),
      _: 1
    }, 8, ["name"]));
  }
});
var uE = /* @__PURE__ */ Oe(sE, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/time-picker/src/time-picker-com/panel-time-pick.vue"]]);
const cE = Be({
  ...Ad,
  parsedValue: {
    type: de(Array)
  }
}), dE = ["disabled"], pE = /* @__PURE__ */ ne({
  __name: "panel-time-range",
  props: cE,
  emits: ["pick", "select-range", "set-picker-option"],
  setup(e, { emit: t }) {
    const n = e, r = (W, Z) => {
      const ue = [];
      for (let ce = W; ce <= Z; ce++)
        ue.push(ce);
      return ue;
    }, { t: o, lang: a } = ir(), i = ge("time"), l = ge("picker"), s = Se("EP_PICKER_BASE"), {
      arrowControl: u,
      disabledHours: d,
      disabledMinutes: p,
      disabledSeconds: h,
      defaultValue: m
    } = s.props, f = O(() => n.parsedValue[0]), v = O(() => n.parsedValue[1]), y = Pd(n), g = () => {
      t("pick", y.value, !1);
    }, x = O(() => n.format.includes("ss")), $ = O(() => n.format.includes("A") ? "A" : n.format.includes("a") ? "a" : ""), k = (W = !1) => {
      t("pick", [f.value, v.value], W);
    }, I = (W) => {
      F(W.millisecond(0), v.value);
    }, C = (W) => {
      F(f.value, W.millisecond(0));
    }, E = (W) => {
      const Z = W.map((ce) => Ot(ce).locale(a.value)), ue = w(Z);
      return Z[0].isSame(ue[0]) && Z[1].isSame(ue[1]);
    }, F = (W, Z) => {
      t("pick", [W, Z], !0);
    }, H = O(() => f.value > v.value), R = V([0, 2]), q = (W, Z) => {
      t("select-range", W, Z, "min"), R.value = [W, Z];
    }, J = O(() => x.value ? 11 : 8), L = (W, Z) => {
      t("select-range", W, Z, "max");
      const ue = c(J);
      R.value = [W + ue, Z + ue];
    }, M = (W) => {
      const Z = x.value ? [0, 3, 6, 11, 14, 17] : [0, 3, 8, 11], ue = ["hours", "minutes"].concat(x.value ? ["seconds"] : []), ce = (Z.indexOf(R.value[0]) + W + Z.length) % Z.length, ye = Z.length / 2;
      ce < ye ? ee.start_emitSelectRange(ue[ce]) : ee.end_emitSelectRange(ue[ce - ye]);
    }, S = (W) => {
      const Z = W.code, { left: ue, right: ce, up: ye, down: Me } = qe;
      if ([ue, ce].includes(Z)) {
        M(Z === ue ? -1 : 1), W.preventDefault();
        return;
      }
      if ([ye, Me].includes(Z)) {
        const Fe = Z === ye ? -1 : 1, He = R.value[0] < J.value ? "start" : "end";
        ee[`${He}_scrollDown`](Fe), W.preventDefault();
        return;
      }
    }, P = (W, Z) => {
      const ue = d ? d(W) : [], ce = W === "start", ye = (Z || (ce ? v.value : f.value)).hour(), Me = ce ? r(ye + 1, 23) : r(0, ye - 1);
      return Ia(ue, Me);
    }, _ = (W, Z, ue) => {
      const ce = p ? p(W, Z) : [], ye = Z === "start", Me = ue || (ye ? v.value : f.value), Fe = Me.hour();
      if (W !== Fe)
        return ce;
      const He = Me.minute(), fe = ye ? r(He + 1, 59) : r(0, He - 1);
      return Ia(ce, fe);
    }, T = (W, Z, ue, ce) => {
      const ye = h ? h(W, Z, ue) : [], Me = ue === "start", Fe = ce || (Me ? v.value : f.value), He = Fe.hour(), fe = Fe.minute();
      if (W !== He || Z !== fe)
        return ye;
      const ft = Fe.second(), Ke = Me ? r(ft + 1, 59) : r(0, ft - 1);
      return Ia(ye, Ke);
    }, w = ([W, Z]) => [
      ve(W, "start", !0, Z),
      ve(Z, "end", !1, W)
    ], { getAvailableHours: N, getAvailableMinutes: z, getAvailableSeconds: X } = Nd(P, _, T), {
      timePickerOptions: ee,
      getAvailableTime: ve,
      onSetOption: pe
    } = $d({
      getAvailableHours: N,
      getAvailableMinutes: z,
      getAvailableSeconds: X
    }), Ce = (W) => W ? Ue(W) ? W.map((Z) => Ot(Z, n.format).locale(a.value)) : Ot(W, n.format).locale(a.value) : null, De = (W) => W ? Ue(W) ? W.map((Z) => Z.format(n.format)) : W.format(n.format) : null, be = () => {
      if (Ue(m))
        return m.map((Z) => Ot(Z).locale(a.value));
      const W = Ot(m).locale(a.value);
      return [W, W.add(60, "m")];
    };
    return t("set-picker-option", ["formatToString", De]), t("set-picker-option", ["parseUserInput", Ce]), t("set-picker-option", ["isValidValue", E]), t("set-picker-option", ["handleKeydownInput", S]), t("set-picker-option", ["getDefaultValue", be]), t("set-picker-option", ["getRangeAvailableTime", w]), (W, Z) => W.actualVisible ? (A(), G("div", {
      key: 0,
      class: j([c(i).b("range-picker"), c(l).b("panel")])
    }, [
      Q("div", {
        class: j(c(i).be("range-picker", "content"))
      }, [
        Q("div", {
          class: j(c(i).be("range-picker", "cell"))
        }, [
          Q("div", {
            class: j(c(i).be("range-picker", "header"))
          }, ke(c(o)("el.datepicker.startTime")), 3),
          Q("div", {
            class: j([
              c(i).be("range-picker", "body"),
              c(i).be("panel", "content"),
              c(i).is("arrow", c(u)),
              { "has-seconds": c(x) }
            ])
          }, [
            Ne(bi, {
              ref: "minSpinner",
              role: "start",
              "show-seconds": c(x),
              "am-pm-mode": c($),
              "arrow-control": c(u),
              "spinner-date": c(f),
              "disabled-hours": P,
              "disabled-minutes": _,
              "disabled-seconds": T,
              onChange: I,
              onSetOption: c(pe),
              onSelectRange: q
            }, null, 8, ["show-seconds", "am-pm-mode", "arrow-control", "spinner-date", "onSetOption"])
          ], 2)
        ], 2),
        Q("div", {
          class: j(c(i).be("range-picker", "cell"))
        }, [
          Q("div", {
            class: j(c(i).be("range-picker", "header"))
          }, ke(c(o)("el.datepicker.endTime")), 3),
          Q("div", {
            class: j([
              c(i).be("range-picker", "body"),
              c(i).be("panel", "content"),
              c(i).is("arrow", c(u)),
              { "has-seconds": c(x) }
            ])
          }, [
            Ne(bi, {
              ref: "maxSpinner",
              role: "end",
              "show-seconds": c(x),
              "am-pm-mode": c($),
              "arrow-control": c(u),
              "spinner-date": c(v),
              "disabled-hours": P,
              "disabled-minutes": _,
              "disabled-seconds": T,
              onChange: C,
              onSetOption: c(pe),
              onSelectRange: L
            }, null, 8, ["show-seconds", "am-pm-mode", "arrow-control", "spinner-date", "onSetOption"])
          ], 2)
        ], 2)
      ], 2),
      Q("div", {
        class: j(c(i).be("panel", "footer"))
      }, [
        Q("button", {
          type: "button",
          class: j([c(i).be("panel", "btn"), "cancel"]),
          onClick: Z[0] || (Z[0] = (ue) => g())
        }, ke(c(o)("el.datepicker.cancel")), 3),
        Q("button", {
          type: "button",
          class: j([c(i).be("panel", "btn"), "confirm"]),
          disabled: c(H),
          onClick: Z[1] || (Z[1] = (ue) => k())
        }, ke(c(o)("el.datepicker.confirm")), 11, dE)
      ], 2)
    ], 2)) : re("v-if", !0);
  }
});
var fE = /* @__PURE__ */ Oe(pE, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/time-picker/src/time-picker-com/panel-time-range.vue"]]);
Ot.extend(qC);
var hE = ne({
  name: "ElTimePicker",
  install: null,
  props: {
    ...Md,
    isRange: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:modelValue"],
  setup(e, t) {
    const n = V(), [r, o] = e.isRange ? ["timerange", fE] : ["time", uE], a = (i) => t.emit("update:modelValue", i);
    return et("ElPopperOptions", e.popperOptions), t.expose({
      focus: (i) => {
        var l;
        (l = n.value) == null || l.handleFocusInput(i);
      },
      blur: (i) => {
        var l;
        (l = n.value) == null || l.handleBlurInput(i);
      },
      handleOpen: () => {
        var i;
        (i = n.value) == null || i.handleOpen();
      },
      handleClose: () => {
        var i;
        (i = n.value) == null || i.handleClose();
      }
    }), () => {
      var i;
      const l = (i = e.format) != null ? i : YC;
      return Ne(JC, jt(e, {
        ref: n,
        type: r,
        format: l,
        "onUpdate:modelValue": a
      }), {
        default: (s) => Ne(o, s, null)
      });
    };
  }
});
const Wa = hE;
Wa.install = (e) => {
  e.component(Wa.name, Wa);
};
const Ld = {
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
  size: fo,
  tabindex: [String, Number],
  validateEvent: {
    type: Boolean,
    default: !0
  }
}, jd = {
  [dt]: (e) => Bt(e) || Lt(e) || to(e),
  change: (e) => Bt(e) || Lt(e) || to(e)
}, vE = ({
  model: e,
  isChecked: t
}) => {
  const n = Se(Mr, void 0), r = O(() => {
    var o, a;
    const i = (o = n == null ? void 0 : n.max) == null ? void 0 : o.value, l = (a = n == null ? void 0 : n.min) == null ? void 0 : a.value;
    return !oo(i) && e.value.length >= i && !t.value || !oo(l) && e.value.length <= l && t.value;
  });
  return {
    isDisabled: ca(O(() => (n == null ? void 0 : n.disabled.value) || r.value)),
    isLimitDisabled: r
  };
}, mE = (e, {
  model: t,
  isLimitExceeded: n,
  hasOwnLabel: r,
  isDisabled: o,
  isLabeledByFormItem: a
}) => {
  const i = Se(Mr, void 0), { formItem: l } = ar(), { emit: s } = St();
  function u(f) {
    var v, y;
    return f === e.trueLabel || f === !0 ? (v = e.trueLabel) != null ? v : !0 : (y = e.falseLabel) != null ? y : !1;
  }
  function d(f, v) {
    s("change", u(f), v);
  }
  function p(f) {
    if (n.value)
      return;
    const v = f.target;
    s("change", u(v.checked), f);
  }
  async function h(f) {
    n.value || !r.value && !o.value && a.value && (f.composedPath().some((v) => v.tagName === "LABEL") || (t.value = u([!1, e.falseLabel].includes(t.value)), await me(), d(t.value, f)));
  }
  const m = O(() => (i == null ? void 0 : i.validateEvent) || e.validateEvent);
  return ae(() => e.modelValue, () => {
    m.value && (l == null || l.validate("change").catch((f) => rt(f)));
  }), {
    handleChange: p,
    onClickRoot: h
  };
}, gE = (e) => {
  const t = V(!1), { emit: n } = St(), r = Se(Mr, void 0), o = O(() => oo(r) === !1), a = V(!1);
  return {
    model: O({
      get() {
        var i, l;
        return o.value ? (i = r == null ? void 0 : r.modelValue) == null ? void 0 : i.value : (l = e.modelValue) != null ? l : t.value;
      },
      set(i) {
        var l, s;
        o.value && Ue(i) ? (a.value = ((l = r == null ? void 0 : r.max) == null ? void 0 : l.value) !== void 0 && i.length > (r == null ? void 0 : r.max.value), a.value === !1 && ((s = r == null ? void 0 : r.changeEvent) == null || s.call(r, i))) : (n(dt, i), t.value = i);
      }
    }),
    isGroup: o,
    isLimitExceeded: a
  };
}, bE = (e, t, { model: n }) => {
  const r = Se(Mr, void 0), o = V(!1), a = O(() => {
    const u = n.value;
    return to(u) ? u : Ue(u) ? Ft(e.label) ? u.map(gr).some((d) => qo(d, e.label)) : u.map(gr).includes(e.label) : u != null ? u === e.trueLabel : !!u;
  }), i = Zn(O(() => {
    var u;
    return (u = r == null ? void 0 : r.size) == null ? void 0 : u.value;
  }), {
    prop: !0
  }), l = Zn(O(() => {
    var u;
    return (u = r == null ? void 0 : r.size) == null ? void 0 : u.value;
  })), s = O(() => !!(t.default || e.label));
  return {
    checkboxButtonSize: i,
    isChecked: a,
    isFocused: o,
    checkboxSize: l,
    hasOwnLabel: s
  };
}, yE = (e, { model: t }) => {
  function n() {
    Ue(t.value) && !t.value.includes(e.label) ? t.value.push(e.label) : t.value = e.trueLabel || !0;
  }
  e.checked && n();
}, Bd = (e, t) => {
  const { formItem: n } = ar(), { model: r, isGroup: o, isLimitExceeded: a } = gE(e), {
    isFocused: i,
    isChecked: l,
    checkboxButtonSize: s,
    checkboxSize: u,
    hasOwnLabel: d
  } = bE(e, t, { model: r }), { isDisabled: p } = vE({ model: r, isChecked: l }), { inputId: h, isLabeledByFormItem: m } = Xi(e, {
    formItemContext: n,
    disableIdGeneration: d,
    disableIdManagement: o
  }), { handleChange: f, onClickRoot: v } = mE(e, {
    model: r,
    isLimitExceeded: a,
    hasOwnLabel: d,
    isDisabled: p,
    isLabeledByFormItem: m
  });
  return yE(e, { model: r }), {
    inputId: h,
    isLabeledByFormItem: m,
    isChecked: l,
    isDisabled: p,
    isFocused: i,
    checkboxButtonSize: s,
    checkboxSize: u,
    hasOwnLabel: d,
    model: r,
    handleChange: f,
    onClickRoot: v
  };
}, wE = ["tabindex", "role", "aria-checked"], xE = ["id", "aria-hidden", "name", "tabindex", "disabled", "true-value", "false-value"], _E = ["id", "aria-hidden", "disabled", "value", "name", "tabindex"], SE = ne({
  name: "ElCheckbox"
}), CE = /* @__PURE__ */ ne({
  ...SE,
  props: Ld,
  emits: jd,
  setup(e) {
    const t = e, n = Go(), {
      inputId: r,
      isLabeledByFormItem: o,
      isChecked: a,
      isDisabled: i,
      isFocused: l,
      checkboxSize: s,
      hasOwnLabel: u,
      model: d,
      handleChange: p,
      onClickRoot: h
    } = Bd(t, n), m = ge("checkbox"), f = O(() => [
      m.b(),
      m.m(s.value),
      m.is("disabled", i.value),
      m.is("bordered", t.border),
      m.is("checked", a.value)
    ]), v = O(() => [
      m.e("input"),
      m.is("disabled", i.value),
      m.is("checked", a.value),
      m.is("indeterminate", t.indeterminate),
      m.is("focus", l.value)
    ]);
    return (y, g) => (A(), te(st(!c(u) && c(o) ? "span" : "label"), {
      class: j(c(f)),
      "aria-controls": y.indeterminate ? y.controls : null,
      onClick: c(h)
    }, {
      default: oe(() => [
        Q("span", {
          class: j(c(v)),
          tabindex: y.indeterminate ? 0 : void 0,
          role: y.indeterminate ? "checkbox" : void 0,
          "aria-checked": y.indeterminate ? "mixed" : void 0
        }, [
          y.trueLabel || y.falseLabel ? Je((A(), G("input", {
            key: 0,
            id: c(r),
            "onUpdate:modelValue": g[0] || (g[0] = (x) => Gr(d) ? d.value = x : null),
            class: j(c(m).e("original")),
            type: "checkbox",
            "aria-hidden": y.indeterminate ? "true" : "false",
            name: y.name,
            tabindex: y.tabindex,
            disabled: c(i),
            "true-value": y.trueLabel,
            "false-value": y.falseLabel,
            onChange: g[1] || (g[1] = (...x) => c(p) && c(p)(...x)),
            onFocus: g[2] || (g[2] = (x) => l.value = !0),
            onBlur: g[3] || (g[3] = (x) => l.value = !1)
          }, null, 42, xE)), [
            [Lo, c(d)]
          ]) : Je((A(), G("input", {
            key: 1,
            id: c(r),
            "onUpdate:modelValue": g[4] || (g[4] = (x) => Gr(d) ? d.value = x : null),
            class: j(c(m).e("original")),
            type: "checkbox",
            "aria-hidden": y.indeterminate ? "true" : "false",
            disabled: c(i),
            value: y.label,
            name: y.name,
            tabindex: y.tabindex,
            onChange: g[5] || (g[5] = (...x) => c(p) && c(p)(...x)),
            onFocus: g[6] || (g[6] = (x) => l.value = !0),
            onBlur: g[7] || (g[7] = (x) => l.value = !1)
          }, null, 42, _E)), [
            [Lo, c(d)]
          ]),
          Q("span", {
            class: j(c(m).e("inner"))
          }, null, 2)
        ], 10, wE),
        c(u) ? (A(), G("span", {
          key: 0,
          class: j(c(m).e("label"))
        }, [
          _e(y.$slots, "default"),
          y.$slots.default ? re("v-if", !0) : (A(), G(Ve, { key: 0 }, [
            Rn(ke(y.label), 1)
          ], 64))
        ], 2)) : re("v-if", !0)
      ]),
      _: 3
    }, 8, ["class", "aria-controls", "onClick"]));
  }
});
var EE = /* @__PURE__ */ Oe(CE, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox.vue"]]);
const kE = ["name", "tabindex", "disabled", "true-value", "false-value"], OE = ["name", "tabindex", "disabled", "value"], TE = ne({
  name: "ElCheckboxButton"
}), DE = /* @__PURE__ */ ne({
  ...TE,
  props: Ld,
  emits: jd,
  setup(e) {
    const t = e, n = Go(), {
      isFocused: r,
      isChecked: o,
      isDisabled: a,
      checkboxButtonSize: i,
      model: l,
      handleChange: s
    } = Bd(t, n), u = Se(Mr, void 0), d = ge("checkbox"), p = O(() => {
      var m, f, v, y;
      const g = (f = (m = u == null ? void 0 : u.fill) == null ? void 0 : m.value) != null ? f : "";
      return {
        backgroundColor: g,
        borderColor: g,
        color: (y = (v = u == null ? void 0 : u.textColor) == null ? void 0 : v.value) != null ? y : "",
        boxShadow: g ? `-1px 0 0 0 ${g}` : void 0
      };
    }), h = O(() => [
      d.b("button"),
      d.bm("button", i.value),
      d.is("disabled", a.value),
      d.is("checked", o.value),
      d.is("focus", r.value)
    ]);
    return (m, f) => (A(), G("label", {
      class: j(c(h))
    }, [
      m.trueLabel || m.falseLabel ? Je((A(), G("input", {
        key: 0,
        "onUpdate:modelValue": f[0] || (f[0] = (v) => Gr(l) ? l.value = v : null),
        class: j(c(d).be("button", "original")),
        type: "checkbox",
        name: m.name,
        tabindex: m.tabindex,
        disabled: c(a),
        "true-value": m.trueLabel,
        "false-value": m.falseLabel,
        onChange: f[1] || (f[1] = (...v) => c(s) && c(s)(...v)),
        onFocus: f[2] || (f[2] = (v) => r.value = !0),
        onBlur: f[3] || (f[3] = (v) => r.value = !1)
      }, null, 42, kE)), [
        [Lo, c(l)]
      ]) : Je((A(), G("input", {
        key: 1,
        "onUpdate:modelValue": f[4] || (f[4] = (v) => Gr(l) ? l.value = v : null),
        class: j(c(d).be("button", "original")),
        type: "checkbox",
        name: m.name,
        tabindex: m.tabindex,
        disabled: c(a),
        value: m.label,
        onChange: f[5] || (f[5] = (...v) => c(s) && c(s)(...v)),
        onFocus: f[6] || (f[6] = (v) => r.value = !0),
        onBlur: f[7] || (f[7] = (v) => r.value = !1)
      }, null, 42, OE)), [
        [Lo, c(l)]
      ]),
      m.$slots.default || m.label ? (A(), G("span", {
        key: 2,
        class: j(c(d).be("button", "inner")),
        style: Qe(c(o) ? c(p) : void 0)
      }, [
        _e(m.$slots, "default", {}, () => [
          Rn(ke(m.label), 1)
        ])
      ], 6)) : re("v-if", !0)
    ], 2));
  }
});
var Fd = /* @__PURE__ */ Oe(DE, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-button.vue"]]);
const AE = Be({
  modelValue: {
    type: de(Array),
    default: () => []
  },
  disabled: Boolean,
  min: Number,
  max: Number,
  size: fo,
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
}), ME = {
  [dt]: (e) => Ue(e),
  change: (e) => Ue(e)
}, $E = ne({
  name: "ElCheckboxGroup"
}), IE = /* @__PURE__ */ ne({
  ...$E,
  props: AE,
  emits: ME,
  setup(e, { emit: t }) {
    const n = e, r = ge("checkbox"), { formItem: o } = ar(), { inputId: a, isLabeledByFormItem: i } = Xi(n, {
      formItemContext: o
    }), l = async (u) => {
      t(dt, u), await me(), t("change", u);
    }, s = O({
      get() {
        return n.modelValue;
      },
      set(u) {
        l(u);
      }
    });
    return et(Mr, {
      ...xw(Xo(n), [
        "size",
        "min",
        "max",
        "disabled",
        "validateEvent",
        "fill",
        "textColor"
      ]),
      modelValue: s,
      changeEvent: l
    }), ae(() => n.modelValue, () => {
      n.validateEvent && (o == null || o.validate("change").catch((u) => rt(u)));
    }), (u, d) => {
      var p;
      return A(), te(st(u.tag), {
        id: c(a),
        class: j(c(r).b("group")),
        role: "group",
        "aria-label": c(i) ? void 0 : u.label || "checkbox-group",
        "aria-labelledby": c(i) ? (p = c(o)) == null ? void 0 : p.labelId : void 0
      }, {
        default: oe(() => [
          _e(u.$slots, "default")
        ]),
        _: 3
      }, 8, ["id", "class", "aria-label", "aria-labelledby"]);
    };
  }
});
var Rd = /* @__PURE__ */ Oe(IE, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-group.vue"]]);
const NE = mn(EE, {
  CheckboxButton: Fd,
  CheckboxGroup: Rd
});
po(Fd);
po(Rd);
const zd = Be({
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
    values: Wi,
    default: ""
  },
  effect: {
    type: String,
    values: ["dark", "light", "plain"],
    default: "light"
  },
  round: Boolean
}), PE = {
  close: (e) => e instanceof MouseEvent,
  click: (e) => e instanceof MouseEvent
}, LE = ne({
  name: "ElTag"
}), jE = /* @__PURE__ */ ne({
  ...LE,
  props: zd,
  emits: PE,
  setup(e, { emit: t }) {
    const n = e, r = Zn(), o = ge("tag"), a = O(() => {
      const { type: s, hit: u, effect: d, closable: p, round: h } = n;
      return [
        o.b(),
        o.is("closable", p),
        o.m(s),
        o.m(r.value),
        o.m(d),
        o.is("hit", u),
        o.is("round", h)
      ];
    }), i = (s) => {
      t("close", s);
    }, l = (s) => {
      t("click", s);
    };
    return (s, u) => s.disableTransitions ? (A(), G("span", {
      key: 0,
      class: j(c(a)),
      style: Qe({ backgroundColor: s.color }),
      onClick: l
    }, [
      Q("span", {
        class: j(c(o).e("content"))
      }, [
        _e(s.$slots, "default")
      ], 2),
      s.closable ? (A(), te(c(nt), {
        key: 0,
        class: j(c(o).e("close")),
        onClick: je(i, ["stop"])
      }, {
        default: oe(() => [
          Ne(c(Ls))
        ]),
        _: 1
      }, 8, ["class", "onClick"])) : re("v-if", !0)
    ], 6)) : (A(), te(Er, {
      key: 1,
      name: `${c(o).namespace.value}-zoom-in-center`,
      appear: ""
    }, {
      default: oe(() => [
        Q("span", {
          class: j(c(a)),
          style: Qe({ backgroundColor: s.color }),
          onClick: l
        }, [
          Q("span", {
            class: j(c(o).e("content"))
          }, [
            _e(s.$slots, "default")
          ], 2),
          s.closable ? (A(), te(c(nt), {
            key: 0,
            class: j(c(o).e("close")),
            onClick: je(i, ["stop"])
          }, {
            default: oe(() => [
              Ne(c(Ls))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : re("v-if", !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["name"]));
  }
});
var BE = /* @__PURE__ */ Oe(jE, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tag/src/tag.vue"]]);
const FE = mn(BE), RE = ne({
  name: "ElCollapseTransition"
}), zE = /* @__PURE__ */ ne({
  ...RE,
  setup(e) {
    const t = ge("collapse-transition"), n = {
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
    return (r, o) => (A(), te(Er, jt({
      name: c(t).b()
    }, up(n)), {
      default: oe(() => [
        _e(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["name"]));
  }
});
var No = /* @__PURE__ */ Oe(zE, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/collapse-transition/src/collapse-transition.vue"]]);
No.install = (e) => {
  e.component(No.name, No);
};
const HE = No, Hd = "ElSelectGroup", ha = "ElSelect";
function VE(e, t) {
  const n = Se(ha), r = Se(Hd, { disabled: !1 }), o = O(() => Object.prototype.toString.call(e.value).toLowerCase() === "[object object]"), a = O(() => n.props.multiple ? p(n.props.modelValue, e.value) : h(e.value, n.props.modelValue)), i = O(() => {
    if (n.props.multiple) {
      const v = n.props.modelValue || [];
      return !a.value && v.length >= n.props.multipleLimit && n.props.multipleLimit > 0;
    } else
      return !1;
  }), l = O(() => e.label || (o.value ? "" : e.value)), s = O(() => e.value || e.label || ""), u = O(() => e.disabled || t.groupDisabled || i.value), d = St(), p = (v = [], y) => {
    if (o.value) {
      const g = n.props.valueKey;
      return v && v.some((x) => gr(kt(x, g)) === kt(y, g));
    } else
      return v && v.includes(y);
  }, h = (v, y) => {
    if (o.value) {
      const { valueKey: g } = n.props;
      return kt(v, g) === kt(y, g);
    } else
      return v === y;
  }, m = () => {
    !e.disabled && !r.disabled && (n.hoverIndex = n.optionsArray.indexOf(d.proxy));
  };
  ae(() => l.value, () => {
    !e.created && !n.props.remote && n.setSelected();
  }), ae(() => e.value, (v, y) => {
    const { remote: g, valueKey: x } = n.props;
    if (Object.is(v, y) || (n.onOptionDestroy(y, d.proxy), n.onOptionCreate(d.proxy)), !e.created && !g) {
      if (x && typeof v == "object" && typeof y == "object" && v[x] === y[x])
        return;
      n.setSelected();
    }
  }), ae(() => r.disabled, () => {
    t.groupDisabled = r.disabled;
  }, { immediate: !0 });
  const { queryChange: f } = gr(n);
  return ae(f, (v) => {
    const { query: y } = c(v), g = new RegExp(Kw(y), "i");
    t.visible = g.test(l.value) || e.created, t.visible || n.filteredOptionsCount--;
  }), {
    select: n,
    currentLabel: l,
    currentValue: s,
    itemSelected: a,
    isDisabled: u,
    hoverItem: m
  };
}
const KE = ne({
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
    const t = ge("select"), n = dn({
      index: -1,
      groupDisabled: !1,
      visible: !0,
      hitState: !1,
      hover: !1
    }), { currentLabel: r, itemSelected: o, isDisabled: a, select: i, hoverItem: l } = VE(e, n), { visible: s, hover: u } = Xo(n), d = St().proxy;
    i.onOptionCreate(d), Rt(() => {
      const h = d.value, { selected: m } = i, f = (i.props.multiple ? m : [m]).some((v) => v.value === d.value);
      me(() => {
        i.cachedOptions.get(h) === d && !f && i.cachedOptions.delete(h);
      }), i.onOptionDestroy(h, d);
    });
    function p() {
      e.disabled !== !0 && n.groupDisabled !== !0 && i.handleOptionSelect(d, !0);
    }
    return {
      ns: t,
      currentLabel: r,
      itemSelected: o,
      isDisabled: a,
      select: i,
      hoverItem: l,
      visible: s,
      hover: u,
      selectOptionClick: p,
      states: n
    };
  }
});
function WE(e, t, n, r, o, a) {
  return Je((A(), G("li", {
    class: j([
      e.ns.be("dropdown", "item"),
      e.ns.is("disabled", e.isDisabled),
      {
        selected: e.itemSelected,
        hover: e.hover
      }
    ]),
    onMouseenter: t[0] || (t[0] = (...i) => e.hoverItem && e.hoverItem(...i)),
    onClick: t[1] || (t[1] = je((...i) => e.selectOptionClick && e.selectOptionClick(...i), ["stop"]))
  }, [
    _e(e.$slots, "default", {}, () => [
      Q("span", null, ke(e.currentLabel), 1)
    ])
  ], 34)), [
    [ln, e.visible]
  ]);
}
var sl = /* @__PURE__ */ Oe(KE, [["render", WE], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/option.vue"]]);
const UE = ne({
  name: "ElSelectDropdown",
  componentName: "ElSelectDropdown",
  setup() {
    const e = Se(ha), t = ge("select"), n = O(() => e.props.popperClass), r = O(() => e.props.multiple), o = O(() => e.props.fitInputWidth), a = V("");
    function i() {
      var l;
      a.value = `${(l = e.selectWrapper) == null ? void 0 : l.offsetWidth}px`;
    }
    return at(() => {
      i(), la(e.selectWrapper, i);
    }), {
      ns: t,
      minWidth: a,
      popperClass: n,
      isMultiple: r,
      isFitInputWidth: o
    };
  }
});
function qE(e, t, n, r, o, a) {
  return A(), G("div", {
    class: j([e.ns.b("dropdown"), e.ns.is("multiple", e.isMultiple), e.popperClass]),
    style: Qe({ [e.isFitInputWidth ? "width" : "minWidth"]: e.minWidth })
  }, [
    _e(e.$slots, "default")
  ], 6);
}
var YE = /* @__PURE__ */ Oe(UE, [["render", qE], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/select-dropdown.vue"]]);
function GE(e) {
  const { t } = ir();
  return dn({
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
const XE = (e, t, n) => {
  const { t: r } = ir(), o = ge("select");
  Zc({
    from: "suffixTransition",
    replacement: "override style scheme",
    version: "2.3.0",
    scope: "props",
    ref: "https://element-plus.org/en-US/component/select.html#select-attributes"
  }, O(() => e.suffixTransition === !1));
  const a = V(null), i = V(null), l = V(null), s = V(null), u = V(null), d = V(null), p = V(-1), h = Tn({ query: "" }), m = Tn(""), { form: f, formItem: v } = ar(), y = O(() => !e.filterable || e.multiple || !t.visible), g = O(() => e.disabled || (f == null ? void 0 : f.disabled)), x = O(() => {
    const D = e.multiple ? Array.isArray(e.modelValue) && e.modelValue.length > 0 : e.modelValue !== void 0 && e.modelValue !== null && e.modelValue !== "";
    return e.clearable && !g.value && t.inputHovering && D;
  }), $ = O(() => e.remote && e.filterable && !e.remoteShowSuffix ? "" : e.suffixIcon), k = O(() => o.is("reverse", $.value && t.visible && e.suffixTransition)), I = O(() => e.remote ? 300 : 0), C = O(() => e.loading ? e.loadingText || r("el.select.loading") : e.remote && t.query === "" && t.options.size === 0 ? !1 : e.filterable && t.query && t.options.size > 0 && t.filteredOptionsCount === 0 ? e.noMatchText || r("el.select.noMatch") : t.options.size === 0 ? e.noDataText || r("el.select.noData") : null), E = O(() => Array.from(t.options.values())), F = O(() => Array.from(t.cachedOptions.values())), H = O(() => {
    const D = E.value.filter((U) => !U.created).some((U) => U.currentLabel === t.query);
    return e.filterable && e.allowCreate && t.query !== "" && !D;
  }), R = Zn(), q = O(() => ["small"].includes(R.value) ? "small" : "default"), J = O({
    get() {
      return t.visible && C.value !== !1;
    },
    set(D) {
      t.visible = D;
    }
  });
  ae([() => g.value, () => R.value, () => f == null ? void 0 : f.size], () => {
    me(() => {
      L();
    });
  }), ae(() => e.placeholder, (D) => {
    t.cachedPlaceHolder = t.currentPlaceholder = D;
  }), ae(() => e.modelValue, (D, U) => {
    e.multiple && (L(), D && D.length > 0 || i.value && t.query !== "" ? t.currentPlaceholder = "" : t.currentPlaceholder = t.cachedPlaceHolder, e.filterable && !e.reserveKeyword && (t.query = "", M(t.query))), _(), e.filterable && !e.multiple && (t.inputLength = 20), !qo(D, U) && e.validateEvent && (v == null || v.validate("change").catch((b) => rt(b)));
  }, {
    flush: "post",
    deep: !0
  }), ae(() => t.visible, (D) => {
    var U, b, B;
    D ? ((b = (U = l.value) == null ? void 0 : U.updatePopper) == null || b.call(U), e.filterable && (t.filteredOptionsCount = t.optionsCount, t.query = e.remote ? "" : t.selectedLabel, e.multiple ? (B = i.value) == null || B.focus() : t.selectedLabel && (t.currentPlaceholder = `${t.selectedLabel}`, t.selectedLabel = ""), M(t.query), !e.multiple && !e.remote && (h.value.query = "", $r(h), $r(m)))) : (e.filterable && (xt(e.filterMethod) && e.filterMethod(""), xt(e.remoteMethod) && e.remoteMethod("")), i.value && i.value.blur(), t.query = "", t.previousQuery = null, t.selectedLabel = "", t.inputLength = 20, t.menuVisibleOnFocus = !1, w(), me(() => {
      i.value && i.value.value === "" && t.selected.length === 0 && (t.currentPlaceholder = t.cachedPlaceHolder);
    }), e.multiple || (t.selected && (e.filterable && e.allowCreate && t.createdSelected && t.createdLabel ? t.selectedLabel = t.createdLabel : t.selectedLabel = t.selected.currentLabel, e.filterable && (t.query = t.selectedLabel)), e.filterable && (t.currentPlaceholder = t.cachedPlaceHolder))), n.emit("visible-change", D);
  }), ae(() => t.options.entries(), () => {
    var D, U, b;
    if (!pt)
      return;
    (U = (D = l.value) == null ? void 0 : D.updatePopper) == null || U.call(D), e.multiple && L();
    const B = ((b = u.value) == null ? void 0 : b.querySelectorAll("input")) || [];
    Array.from(B).includes(document.activeElement) || _(), e.defaultFirstOption && (e.filterable || e.remote) && t.filteredOptionsCount && P();
  }, {
    flush: "post"
  }), ae(() => t.hoverIndex, (D) => {
    Lt(D) && D > -1 ? p.value = E.value[D] || {} : p.value = {}, E.value.forEach((U) => {
      U.hover = p.value === U;
    });
  });
  const L = () => {
    e.collapseTags && !e.filterable || me(() => {
      var D, U;
      if (!a.value)
        return;
      const b = a.value.$el.querySelector("input"), B = s.value, ie = dx(R.value || (f == null ? void 0 : f.size));
      b.style.height = `${(t.selected.length === 0 ? ie : Math.max(B ? B.clientHeight + (B.clientHeight > ie ? 6 : 0) : 0, ie)) - 2}px`, t.tagInMultiLine = Number.parseFloat(b.style.height) >= ie, t.visible && C.value !== !1 && ((U = (D = l.value) == null ? void 0 : D.updatePopper) == null || U.call(D));
    });
  }, M = async (D) => {
    if (!(t.previousQuery === D || t.isOnComposition)) {
      if (t.previousQuery === null && (xt(e.filterMethod) || xt(e.remoteMethod))) {
        t.previousQuery = D;
        return;
      }
      t.previousQuery = D, me(() => {
        var U, b;
        t.visible && ((b = (U = l.value) == null ? void 0 : U.updatePopper) == null || b.call(U));
      }), t.hoverIndex = -1, e.multiple && e.filterable && me(() => {
        const U = i.value.value.length * 15 + 20;
        t.inputLength = e.collapseTags ? Math.min(50, U) : U, S(), L();
      }), e.remote && xt(e.remoteMethod) ? (t.hoverIndex = -1, e.remoteMethod(D)) : xt(e.filterMethod) ? (e.filterMethod(D), $r(m)) : (t.filteredOptionsCount = t.optionsCount, h.value.query = D, $r(h), $r(m)), e.defaultFirstOption && (e.filterable || e.remote) && t.filteredOptionsCount && (await me(), P());
    }
  }, S = () => {
    t.currentPlaceholder !== "" && (t.currentPlaceholder = i.value.value ? "" : t.cachedPlaceHolder);
  }, P = () => {
    const D = E.value.filter((B) => B.visible && !B.disabled && !B.states.groupDisabled), U = D.find((B) => B.created), b = D[0];
    t.hoverIndex = Z(E.value, U || b);
  }, _ = () => {
    var D;
    if (e.multiple)
      t.selectedLabel = "";
    else {
      const b = T(e.modelValue);
      (D = b.props) != null && D.created ? (t.createdLabel = b.props.value, t.createdSelected = !0) : t.createdSelected = !1, t.selectedLabel = b.currentLabel, t.selected = b, e.filterable && (t.query = t.selectedLabel);
      return;
    }
    const U = [];
    Array.isArray(e.modelValue) && e.modelValue.forEach((b) => {
      U.push(T(b));
    }), t.selected = U, me(() => {
      L();
    });
  }, T = (D) => {
    let U;
    const b = Na(D).toLowerCase() === "object", B = Na(D).toLowerCase() === "null", ie = Na(D).toLowerCase() === "undefined";
    for (let nn = t.cachedOptions.size - 1; nn >= 0; nn--) {
      const Ct = F.value[nn];
      if (b ? kt(Ct.value, e.valueKey) === kt(D, e.valueKey) : Ct.value === D) {
        U = {
          value: D,
          currentLabel: Ct.currentLabel,
          isDisabled: Ct.isDisabled
        };
        break;
      }
    }
    if (U)
      return U;
    const Te = b ? D.label : !B && !ie ? D : "", Ye = {
      value: D,
      currentLabel: Te
    };
    return e.multiple && (Ye.hitState = !1), Ye;
  }, w = () => {
    setTimeout(() => {
      const D = e.valueKey;
      e.multiple ? t.selected.length > 0 ? t.hoverIndex = Math.min.apply(null, t.selected.map((U) => E.value.findIndex((b) => kt(b, D) === kt(U, D)))) : t.hoverIndex = -1 : t.hoverIndex = E.value.findIndex((U) => Vt(U) === Vt(t.selected));
    }, 300);
  }, N = () => {
    var D, U;
    z(), (U = (D = l.value) == null ? void 0 : D.updatePopper) == null || U.call(D), e.multiple && !e.filterable && L();
  }, z = () => {
    var D;
    t.inputWidth = (D = a.value) == null ? void 0 : D.$el.offsetWidth;
  }, X = () => {
    e.filterable && t.query !== t.selectedLabel && (t.query = t.selectedLabel, M(t.query));
  }, ee = di(() => {
    X();
  }, I.value), ve = di((D) => {
    M(D.target.value);
  }, I.value), pe = (D) => {
    qo(e.modelValue, D) || n.emit(Wc, D);
  }, Ce = (D) => {
    if (D.target.value.length <= 0 && !He()) {
      const U = e.modelValue.slice();
      U.pop(), n.emit(dt, U), pe(U);
    }
    D.target.value.length === 1 && e.modelValue.length === 0 && (t.currentPlaceholder = t.cachedPlaceHolder);
  }, De = (D, U) => {
    const b = t.selected.indexOf(U);
    if (b > -1 && !g.value) {
      const B = e.modelValue.slice();
      B.splice(b, 1), n.emit(dt, B), pe(B), n.emit("remove-tag", U.value);
    }
    D.stopPropagation();
  }, be = (D) => {
    D.stopPropagation();
    const U = e.multiple ? [] : "";
    if (!Bt(U))
      for (const b of t.selected)
        b.isDisabled && U.push(b.value);
    n.emit(dt, U), pe(U), t.hoverIndex = -1, t.visible = !1, n.emit("clear");
  }, W = (D, U) => {
    var b;
    if (e.multiple) {
      const B = (e.modelValue || []).slice(), ie = Z(B, D.value);
      ie > -1 ? B.splice(ie, 1) : (e.multipleLimit <= 0 || B.length < e.multipleLimit) && B.push(D.value), n.emit(dt, B), pe(B), D.created && (t.query = "", M(""), t.inputLength = 20), e.filterable && ((b = i.value) == null || b.focus());
    } else
      n.emit(dt, D.value), pe(D.value), t.visible = !1;
    t.isSilentBlur = U, ue(), !t.visible && me(() => {
      ce(D);
    });
  }, Z = (D = [], U) => {
    if (!Ft(U))
      return D.indexOf(U);
    const b = e.valueKey;
    let B = -1;
    return D.some((ie, Te) => gr(kt(ie, b)) === kt(U, b) ? (B = Te, !0) : !1), B;
  }, ue = () => {
    t.softFocus = !0;
    const D = i.value || a.value;
    D && (D == null || D.focus());
  }, ce = (D) => {
    var U, b, B, ie, Te;
    const Ye = Array.isArray(D) ? D[0] : D;
    let nn = null;
    if (Ye != null && Ye.value) {
      const Ct = E.value.filter((va) => va.value === Ye.value);
      Ct.length > 0 && (nn = Ct[0].$el);
    }
    if (l.value && nn) {
      const Ct = (ie = (B = (b = (U = l.value) == null ? void 0 : U.popperRef) == null ? void 0 : b.contentRef) == null ? void 0 : B.querySelector) == null ? void 0 : ie.call(B, `.${o.be("dropdown", "wrap")}`);
      Ct && Yw(Ct, nn);
    }
    (Te = d.value) == null || Te.handleScroll();
  }, ye = (D) => {
    t.optionsCount++, t.filteredOptionsCount++, t.options.set(D.value, D), t.cachedOptions.set(D.value, D);
  }, Me = (D, U) => {
    t.options.get(D) === U && (t.optionsCount--, t.filteredOptionsCount--, t.options.delete(D));
  }, Fe = (D) => {
    D.code !== qe.backspace && He(!1), t.inputLength = i.value.value.length * 15 + 20, L();
  }, He = (D) => {
    if (!Array.isArray(t.selected))
      return;
    const U = t.selected[t.selected.length - 1];
    if (U)
      return D === !0 || D === !1 ? (U.hitState = D, D) : (U.hitState = !U.hitState, U.hitState);
  }, fe = (D) => {
    const U = D.target.value;
    if (D.type === "compositionend")
      t.isOnComposition = !1, me(() => M(U));
    else {
      const b = U[U.length - 1] || "";
      t.isOnComposition = !Uc(b);
    }
  }, ft = () => {
    me(() => ce(t.selected));
  }, Ke = (D) => {
    t.softFocus ? t.softFocus = !1 : ((e.automaticDropdown || e.filterable) && (e.filterable && !t.visible && (t.menuVisibleOnFocus = !0), t.visible = !0), n.emit("focus", D));
  }, Xe = () => {
    var D;
    t.visible = !1, (D = a.value) == null || D.blur();
  }, it = (D) => {
    me(() => {
      t.isSilentBlur ? t.isSilentBlur = !1 : n.emit("blur", D);
    }), t.softFocus = !1;
  }, K = (D) => {
    be(D);
  }, we = () => {
    t.visible = !1;
  }, Ze = (D) => {
    t.visible && (D.preventDefault(), D.stopPropagation(), t.visible = !1);
  }, gt = (D) => {
    var U;
    D && !t.mouseEnter || g.value || (t.menuVisibleOnFocus ? t.menuVisibleOnFocus = !1 : (!l.value || !l.value.isFocusInsideContent()) && (t.visible = !t.visible), t.visible && ((U = i.value || a.value) == null || U.focus()));
  }, tn = () => {
    t.visible ? E.value[t.hoverIndex] && W(E.value[t.hoverIndex], void 0) : gt();
  }, Vt = (D) => Ft(D.value) ? kt(D.value, e.valueKey) : D.value, Pe = O(() => E.value.filter((D) => D.visible).every((D) => D.disabled)), gn = (D) => {
    if (!t.visible) {
      t.visible = !0;
      return;
    }
    if (!(t.options.size === 0 || t.filteredOptionsCount === 0) && !t.isOnComposition && !Pe.value) {
      D === "next" ? (t.hoverIndex++, t.hoverIndex === t.options.size && (t.hoverIndex = 0)) : D === "prev" && (t.hoverIndex--, t.hoverIndex < 0 && (t.hoverIndex = t.options.size - 1));
      const U = E.value[t.hoverIndex];
      (U.disabled === !0 || U.states.groupDisabled === !0 || !U.visible) && gn(D), me(() => ce(p.value));
    }
  };
  return {
    optionsArray: E,
    selectSize: R,
    handleResize: N,
    debouncedOnInputChange: ee,
    debouncedQueryChange: ve,
    deletePrevTag: Ce,
    deleteTag: De,
    deleteSelected: be,
    handleOptionSelect: W,
    scrollToOption: ce,
    readonly: y,
    resetInputHeight: L,
    showClose: x,
    iconComponent: $,
    iconReverse: k,
    showNewOption: H,
    collapseTagSize: q,
    setSelected: _,
    managePlaceholder: S,
    selectDisabled: g,
    emptyText: C,
    toggleLastOptionHitState: He,
    resetInputState: Fe,
    handleComposition: fe,
    onOptionCreate: ye,
    onOptionDestroy: Me,
    handleMenuEnter: ft,
    handleFocus: Ke,
    blur: Xe,
    handleBlur: it,
    handleClearClick: K,
    handleClose: we,
    handleKeydownEscape: Ze,
    toggleMenu: gt,
    selectOption: tn,
    getValueKey: Vt,
    navigateOptions: gn,
    dropMenuVisible: J,
    queryChange: h,
    groupQueryChange: m,
    reference: a,
    input: i,
    tooltipRef: l,
    tags: s,
    selectWrapper: u,
    scrollbar: d,
    handleMouseEnter: () => {
      t.mouseEnter = !0;
    },
    handleMouseLeave: () => {
      t.mouseEnter = !1;
    }
  };
}, bu = "ElSelect", ZE = ne({
  name: bu,
  componentName: bu,
  components: {
    ElInput: fd,
    ElSelectMenu: YE,
    ElOption: sl,
    ElTag: FE,
    ElScrollbar: hd,
    ElTooltip: _d,
    ElIcon: nt
  },
  directives: { ClickOutside: tE },
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
      validator: px
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
    teleported: ll.teleported,
    persistent: {
      type: Boolean,
      default: !0
    },
    clearIcon: {
      type: Xn,
      default: sa
    },
    fitInputWidth: {
      type: Boolean,
      default: !1
    },
    suffixIcon: {
      type: Xn,
      default: Vc
    },
    tagType: { ...zd.type, default: "info" },
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
      values: da,
      default: "bottom-start"
    }
  },
  emits: [
    dt,
    Wc,
    "remove-tag",
    "clear",
    "visible-change",
    "focus",
    "blur"
  ],
  setup(e, t) {
    const n = ge("select"), r = ge("input"), { t: o } = ir(), a = GE(e), {
      optionsArray: i,
      selectSize: l,
      readonly: s,
      handleResize: u,
      collapseTagSize: d,
      debouncedOnInputChange: p,
      debouncedQueryChange: h,
      deletePrevTag: m,
      deleteTag: f,
      deleteSelected: v,
      handleOptionSelect: y,
      scrollToOption: g,
      setSelected: x,
      resetInputHeight: $,
      managePlaceholder: k,
      showClose: I,
      selectDisabled: C,
      iconComponent: E,
      iconReverse: F,
      showNewOption: H,
      emptyText: R,
      toggleLastOptionHitState: q,
      resetInputState: J,
      handleComposition: L,
      onOptionCreate: M,
      onOptionDestroy: S,
      handleMenuEnter: P,
      handleFocus: _,
      blur: T,
      handleBlur: w,
      handleClearClick: N,
      handleClose: z,
      handleKeydownEscape: X,
      toggleMenu: ee,
      selectOption: ve,
      getValueKey: pe,
      navigateOptions: Ce,
      dropMenuVisible: De,
      reference: be,
      input: W,
      tooltipRef: Z,
      tags: ue,
      selectWrapper: ce,
      scrollbar: ye,
      queryChange: Me,
      groupQueryChange: Fe,
      handleMouseEnter: He,
      handleMouseLeave: fe
    } = XE(e, a, t), { focus: ft } = bx(be), {
      inputWidth: Ke,
      selected: Xe,
      inputLength: it,
      filteredOptionsCount: K,
      visible: we,
      softFocus: Ze,
      selectedLabel: gt,
      hoverIndex: tn,
      query: Vt,
      inputHovering: Pe,
      currentPlaceholder: gn,
      menuVisibleOnFocus: D,
      isOnComposition: U,
      isSilentBlur: b,
      options: B,
      cachedOptions: ie,
      optionsCount: Te,
      prefixWidth: Ye,
      tagInMultiLine: nn
    } = Xo(a), Ct = O(() => {
      const Kt = [n.b()], In = c(l);
      return In && Kt.push(n.m(In)), e.disabled && Kt.push(n.m("disabled")), Kt;
    }), va = O(() => ({
      maxWidth: `${c(Ke) - 32}px`,
      width: "100%"
    })), qd = O(() => ({ maxWidth: `${c(Ke) > 123 ? c(Ke) - 123 : c(Ke) - 75}px` }));
    et(ha, dn({
      props: e,
      options: B,
      optionsArray: i,
      cachedOptions: ie,
      optionsCount: Te,
      filteredOptionsCount: K,
      hoverIndex: tn,
      handleOptionSelect: y,
      onOptionCreate: M,
      onOptionDestroy: S,
      selectWrapper: ce,
      selected: Xe,
      setSelected: x,
      queryChange: Me,
      groupQueryChange: Fe
    })), at(() => {
      a.cachedPlaceHolder = gn.value = e.placeholder || o("el.select.placeholder"), e.multiple && Array.isArray(e.modelValue) && e.modelValue.length > 0 && (gn.value = ""), la(ce, u), e.remote && e.multiple && $(), me(() => {
        const Kt = be.value && be.value.$el;
        if (Kt && (Ke.value = Kt.getBoundingClientRect().width, t.slots.prefix)) {
          const In = Kt.querySelector(`.${r.e("prefix")}`);
          Ye.value = Math.max(In.getBoundingClientRect().width + 5, 30);
        }
      }), x();
    }), e.multiple && !Array.isArray(e.modelValue) && t.emit(dt, []), !e.multiple && Array.isArray(e.modelValue) && t.emit(dt, "");
    const Yd = O(() => {
      var Kt, In;
      return (In = (Kt = Z.value) == null ? void 0 : Kt.popperRef) == null ? void 0 : In.contentRef;
    });
    return {
      tagInMultiLine: nn,
      prefixWidth: Ye,
      selectSize: l,
      readonly: s,
      handleResize: u,
      collapseTagSize: d,
      debouncedOnInputChange: p,
      debouncedQueryChange: h,
      deletePrevTag: m,
      deleteTag: f,
      deleteSelected: v,
      handleOptionSelect: y,
      scrollToOption: g,
      inputWidth: Ke,
      selected: Xe,
      inputLength: it,
      filteredOptionsCount: K,
      visible: we,
      softFocus: Ze,
      selectedLabel: gt,
      hoverIndex: tn,
      query: Vt,
      inputHovering: Pe,
      currentPlaceholder: gn,
      menuVisibleOnFocus: D,
      isOnComposition: U,
      isSilentBlur: b,
      options: B,
      resetInputHeight: $,
      managePlaceholder: k,
      showClose: I,
      selectDisabled: C,
      iconComponent: E,
      iconReverse: F,
      showNewOption: H,
      emptyText: R,
      toggleLastOptionHitState: q,
      resetInputState: J,
      handleComposition: L,
      handleMenuEnter: P,
      handleFocus: _,
      blur: T,
      handleBlur: w,
      handleClearClick: N,
      handleClose: z,
      handleKeydownEscape: X,
      toggleMenu: ee,
      selectOption: ve,
      getValueKey: pe,
      navigateOptions: Ce,
      dropMenuVisible: De,
      focus: ft,
      reference: be,
      input: W,
      tooltipRef: Z,
      popperPaneRef: Yd,
      tags: ue,
      selectWrapper: ce,
      scrollbar: ye,
      wrapperKls: Ct,
      selectTagsStyle: va,
      nsSelect: n,
      tagTextStyle: qd,
      handleMouseEnter: He,
      handleMouseLeave: fe
    };
  }
}), QE = ["disabled", "autocomplete"], JE = { style: { height: "100%", display: "flex", "justify-content": "center", "align-items": "center" } };
function ek(e, t, n, r, o, a) {
  const i = ct("el-tag"), l = ct("el-tooltip"), s = ct("el-icon"), u = ct("el-input"), d = ct("el-option"), p = ct("el-scrollbar"), h = ct("el-select-menu"), m = hp("click-outside");
  return Je((A(), G("div", {
    ref: "selectWrapper",
    class: j(e.wrapperKls),
    onMouseenter: t[22] || (t[22] = (...f) => e.handleMouseEnter && e.handleMouseEnter(...f)),
    onMouseleave: t[23] || (t[23] = (...f) => e.handleMouseLeave && e.handleMouseLeave(...f)),
    onClick: t[24] || (t[24] = je((...f) => e.toggleMenu && e.toggleMenu(...f), ["stop"]))
  }, [
    Ne(l, {
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
      default: oe(() => [
        Q("div", {
          class: "select-trigger",
          onMouseenter: t[20] || (t[20] = (f) => e.inputHovering = !0),
          onMouseleave: t[21] || (t[21] = (f) => e.inputHovering = !1)
        }, [
          e.multiple ? (A(), G("div", {
            key: 0,
            ref: "tags",
            class: j(e.nsSelect.e("tags")),
            style: Qe(e.selectTagsStyle)
          }, [
            e.collapseTags && e.selected.length ? (A(), G("span", {
              key: 0,
              class: j([
                e.nsSelect.b("tags-wrapper"),
                { "has-prefix": e.prefixWidth && e.selected.length }
              ])
            }, [
              Ne(i, {
                closable: !e.selectDisabled && !e.selected[0].isDisabled,
                size: e.collapseTagSize,
                hit: e.selected[0].hitState,
                type: e.tagType,
                "disable-transitions": "",
                onClose: t[0] || (t[0] = (f) => e.deleteTag(f, e.selected[0]))
              }, {
                default: oe(() => [
                  Q("span", {
                    class: j(e.nsSelect.e("tags-text")),
                    style: Qe(e.tagTextStyle)
                  }, ke(e.selected[0].currentLabel), 7)
                ]),
                _: 1
              }, 8, ["closable", "size", "hit", "type"]),
              e.selected.length > 1 ? (A(), te(i, {
                key: 0,
                closable: !1,
                size: e.collapseTagSize,
                type: e.tagType,
                "disable-transitions": ""
              }, {
                default: oe(() => [
                  e.collapseTagsTooltip ? (A(), te(l, {
                    key: 0,
                    disabled: e.dropMenuVisible,
                    "fallback-placements": ["bottom", "top", "right", "left"],
                    effect: e.effect,
                    placement: "bottom",
                    teleported: e.teleported
                  }, {
                    default: oe(() => [
                      Q("span", {
                        class: j(e.nsSelect.e("tags-text"))
                      }, "+ " + ke(e.selected.length - 1), 3)
                    ]),
                    content: oe(() => [
                      Q("div", {
                        class: j(e.nsSelect.e("collapse-tags"))
                      }, [
                        (A(!0), G(Ve, null, Sn(e.selected.slice(1), (f, v) => (A(), G("div", {
                          key: v,
                          class: j(e.nsSelect.e("collapse-tag"))
                        }, [
                          (A(), te(i, {
                            key: e.getValueKey(f),
                            class: "in-tooltip",
                            closable: !e.selectDisabled && !f.isDisabled,
                            size: e.collapseTagSize,
                            hit: f.hitState,
                            type: e.tagType,
                            "disable-transitions": "",
                            style: { margin: "2px" },
                            onClose: (y) => e.deleteTag(y, f)
                          }, {
                            default: oe(() => [
                              Q("span", {
                                class: j(e.nsSelect.e("tags-text")),
                                style: Qe({
                                  maxWidth: e.inputWidth - 75 + "px"
                                })
                              }, ke(f.currentLabel), 7)
                            ]),
                            _: 2
                          }, 1032, ["closable", "size", "hit", "type", "onClose"]))
                        ], 2))), 128))
                      ], 2)
                    ]),
                    _: 1
                  }, 8, ["disabled", "effect", "teleported"])) : (A(), G("span", {
                    key: 1,
                    class: j(e.nsSelect.e("tags-text"))
                  }, "+ " + ke(e.selected.length - 1), 3))
                ]),
                _: 1
              }, 8, ["size", "type"])) : re("v-if", !0)
            ], 2)) : re("v-if", !0),
            re(" <div> "),
            e.collapseTags ? re("v-if", !0) : (A(), te(Er, {
              key: 1,
              onAfterLeave: e.resetInputHeight
            }, {
              default: oe(() => [
                Q("span", {
                  class: j([
                    e.nsSelect.b("tags-wrapper"),
                    { "has-prefix": e.prefixWidth && e.selected.length }
                  ])
                }, [
                  (A(!0), G(Ve, null, Sn(e.selected, (f) => (A(), te(i, {
                    key: e.getValueKey(f),
                    closable: !e.selectDisabled && !f.isDisabled,
                    size: e.collapseTagSize,
                    hit: f.hitState,
                    type: e.tagType,
                    "disable-transitions": "",
                    onClose: (v) => e.deleteTag(v, f)
                  }, {
                    default: oe(() => [
                      Q("span", {
                        class: j(e.nsSelect.e("tags-text")),
                        style: Qe({ maxWidth: e.inputWidth - 75 + "px" })
                      }, ke(f.currentLabel), 7)
                    ]),
                    _: 2
                  }, 1032, ["closable", "size", "hit", "type", "onClose"]))), 128))
                ], 2)
              ]),
              _: 1
            }, 8, ["onAfterLeave"])),
            re(" </div> "),
            e.filterable ? Je((A(), G("input", {
              key: 2,
              ref: "input",
              "onUpdate:modelValue": t[1] || (t[1] = (f) => e.query = f),
              type: "text",
              class: j([e.nsSelect.e("input"), e.nsSelect.is(e.selectSize)]),
              disabled: e.selectDisabled,
              autocomplete: e.autocomplete,
              style: Qe({
                marginLeft: e.prefixWidth && !e.selected.length || e.tagInMultiLine ? `${e.prefixWidth}px` : "",
                flexGrow: 1,
                width: `${e.inputLength / (e.inputWidth - 32)}%`,
                maxWidth: `${e.inputWidth - 42}px`
              }),
              onFocus: t[2] || (t[2] = (...f) => e.handleFocus && e.handleFocus(...f)),
              onBlur: t[3] || (t[3] = (...f) => e.handleBlur && e.handleBlur(...f)),
              onKeyup: t[4] || (t[4] = (...f) => e.managePlaceholder && e.managePlaceholder(...f)),
              onKeydown: [
                t[5] || (t[5] = (...f) => e.resetInputState && e.resetInputState(...f)),
                t[6] || (t[6] = $t(je((f) => e.navigateOptions("next"), ["prevent"]), ["down"])),
                t[7] || (t[7] = $t(je((f) => e.navigateOptions("prev"), ["prevent"]), ["up"])),
                t[8] || (t[8] = $t((...f) => e.handleKeydownEscape && e.handleKeydownEscape(...f), ["esc"])),
                t[9] || (t[9] = $t(je((...f) => e.selectOption && e.selectOption(...f), ["stop", "prevent"]), ["enter"])),
                t[10] || (t[10] = $t((...f) => e.deletePrevTag && e.deletePrevTag(...f), ["delete"])),
                t[11] || (t[11] = $t((f) => e.visible = !1, ["tab"]))
              ],
              onCompositionstart: t[12] || (t[12] = (...f) => e.handleComposition && e.handleComposition(...f)),
              onCompositionupdate: t[13] || (t[13] = (...f) => e.handleComposition && e.handleComposition(...f)),
              onCompositionend: t[14] || (t[14] = (...f) => e.handleComposition && e.handleComposition(...f)),
              onInput: t[15] || (t[15] = (...f) => e.debouncedQueryChange && e.debouncedQueryChange(...f))
            }, null, 46, QE)), [
              [vp, e.query]
            ]) : re("v-if", !0)
          ], 6)) : re("v-if", !0),
          Ne(u, {
            id: e.id,
            ref: "reference",
            modelValue: e.selectedLabel,
            "onUpdate:modelValue": t[16] || (t[16] = (f) => e.selectedLabel = f),
            type: "text",
            placeholder: e.currentPlaceholder,
            name: e.name,
            autocomplete: e.autocomplete,
            size: e.selectSize,
            disabled: e.selectDisabled,
            readonly: e.readonly,
            "validate-event": !1,
            class: j([e.nsSelect.is("focus", e.visible)]),
            tabindex: e.multiple && e.filterable ? -1 : void 0,
            onFocus: e.handleFocus,
            onBlur: e.handleBlur,
            onInput: e.debouncedOnInputChange,
            onPaste: e.debouncedOnInputChange,
            onCompositionstart: e.handleComposition,
            onCompositionupdate: e.handleComposition,
            onCompositionend: e.handleComposition,
            onKeydown: [
              t[17] || (t[17] = $t(je((f) => e.navigateOptions("next"), ["stop", "prevent"]), ["down"])),
              t[18] || (t[18] = $t(je((f) => e.navigateOptions("prev"), ["stop", "prevent"]), ["up"])),
              $t(je(e.selectOption, ["stop", "prevent"]), ["enter"]),
              $t(e.handleKeydownEscape, ["esc"]),
              t[19] || (t[19] = $t((f) => e.visible = !1, ["tab"]))
            ]
          }, mp({
            suffix: oe(() => [
              e.iconComponent && !e.showClose ? (A(), te(s, {
                key: 0,
                class: j([e.nsSelect.e("caret"), e.nsSelect.e("icon"), e.iconReverse])
              }, {
                default: oe(() => [
                  (A(), te(st(e.iconComponent)))
                ]),
                _: 1
              }, 8, ["class"])) : re("v-if", !0),
              e.showClose && e.clearIcon ? (A(), te(s, {
                key: 1,
                class: j([e.nsSelect.e("caret"), e.nsSelect.e("icon")]),
                onClick: e.handleClearClick
              }, {
                default: oe(() => [
                  (A(), te(st(e.clearIcon)))
                ]),
                _: 1
              }, 8, ["class", "onClick"])) : re("v-if", !0)
            ]),
            _: 2
          }, [
            e.$slots.prefix ? {
              name: "prefix",
              fn: oe(() => [
                Q("div", JE, [
                  _e(e.$slots, "prefix")
                ])
              ])
            } : void 0
          ]), 1032, ["id", "modelValue", "placeholder", "name", "autocomplete", "size", "disabled", "readonly", "class", "tabindex", "onFocus", "onBlur", "onInput", "onPaste", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onKeydown"])
        ], 32)
      ]),
      content: oe(() => [
        Ne(h, null, {
          default: oe(() => [
            Je(Ne(p, {
              ref: "scrollbar",
              tag: "ul",
              "wrap-class": e.nsSelect.be("dropdown", "wrap"),
              "view-class": e.nsSelect.be("dropdown", "list"),
              class: j([
                e.nsSelect.is("empty", !e.allowCreate && !!e.query && e.filteredOptionsCount === 0)
              ])
            }, {
              default: oe(() => [
                e.showNewOption ? (A(), te(d, {
                  key: 0,
                  value: e.query,
                  created: !0
                }, null, 8, ["value"])) : re("v-if", !0),
                _e(e.$slots, "default")
              ]),
              _: 3
            }, 8, ["wrap-class", "view-class", "class"]), [
              [ln, e.options.size > 0 && !e.loading]
            ]),
            e.emptyText && (!e.allowCreate || e.loading || e.allowCreate && e.options.size === 0) ? (A(), G(Ve, { key: 0 }, [
              e.$slots.empty ? _e(e.$slots, "empty", { key: 0 }) : (A(), G("p", {
                key: 1,
                class: j(e.nsSelect.be("dropdown", "empty"))
              }, ke(e.emptyText), 3))
            ], 64)) : re("v-if", !0)
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["visible", "placement", "teleported", "popper-class", "effect", "transition", "persistent", "onShow"])
  ], 34)), [
    [m, e.handleClose, e.popperPaneRef]
  ]);
}
var tk = /* @__PURE__ */ Oe(ZE, [["render", ek], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/select.vue"]]);
const nk = ne({
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
    const t = ge("select"), n = V(!0), r = St(), o = V([]);
    et(Hd, dn({
      ...Xo(e)
    }));
    const a = Se(ha);
    at(() => {
      o.value = i(r.subTree);
    });
    const i = (s) => {
      const u = [];
      return Array.isArray(s.children) && s.children.forEach((d) => {
        var p;
        d.type && d.type.name === "ElOption" && d.component && d.component.proxy ? u.push(d.component.proxy) : (p = d.children) != null && p.length && u.push(...i(d));
      }), u;
    }, { groupQueryChange: l } = gr(a);
    return ae(l, () => {
      n.value = o.value.some((s) => s.visible === !0);
    }, { flush: "post" }), {
      visible: n,
      ns: t
    };
  }
});
function rk(e, t, n, r, o, a) {
  return Je((A(), G("ul", {
    class: j(e.ns.be("group", "wrap"))
  }, [
    Q("li", {
      class: j(e.ns.be("group", "title"))
    }, ke(e.label), 3),
    Q("li", null, [
      Q("ul", {
        class: j(e.ns.b("group"))
      }, [
        _e(e.$slots, "default")
      ], 2)
    ])
  ], 2)), [
    [ln, e.visible]
  ]);
}
var Vd = /* @__PURE__ */ Oe(nk, [["render", rk], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/option-group.vue"]]);
mn(tk, {
  Option: sl,
  OptionGroup: Vd
});
po(sl);
po(Vd);
const mr = "$treeNodeId", yu = function(e, t) {
  !t || t[mr] || Object.defineProperty(t, mr, {
    value: e.id,
    enumerable: !1,
    configurable: !1,
    writable: !1
  });
}, ul = function(e, t) {
  return e ? t[e] : t[mr];
}, yi = (e, t, n) => {
  const r = e.value.currentNode;
  n();
  const o = e.value.currentNode;
  r !== o && t("current-change", o ? o.data : null, o);
}, wi = (e) => {
  let t = !0, n = !0, r = !0;
  for (let o = 0, a = e.length; o < a; o++) {
    const i = e[o];
    (i.checked !== !0 || i.indeterminate) && (t = !1, i.disabled || (r = !1)), (i.checked !== !1 || i.indeterminate) && (n = !1);
  }
  return { all: t, none: n, allWithoutDisable: r, half: !t && !n };
}, Po = function(e) {
  if (e.childNodes.length === 0 || e.loading)
    return;
  const { all: t, none: n, half: r } = wi(e.childNodes);
  t ? (e.checked = !0, e.indeterminate = !1) : r ? (e.checked = !1, e.indeterminate = !0) : n && (e.checked = !1, e.indeterminate = !1);
  const o = e.parent;
  !o || o.level === 0 || e.store.checkStrictly || Po(o);
}, Oo = function(e, t) {
  const n = e.store.props, r = e.data || {}, o = n[t];
  if (typeof o == "function")
    return o(r, e);
  if (typeof o == "string")
    return r[o];
  if (typeof o > "u") {
    const a = r[t];
    return a === void 0 ? "" : a;
  }
};
let ok = 0;
class Kn {
  constructor(t) {
    this.id = ok++, this.text = null, this.checked = !1, this.indeterminate = !1, this.data = null, this.expanded = !1, this.parent = null, this.visible = !0, this.isCurrent = !1, this.canFocus = !1;
    for (const n in t)
      ro(t, n) && (this[n] = t[n]);
    this.level = 0, this.loaded = !1, this.childNodes = [], this.loading = !1, this.parent && (this.level = this.parent.level + 1);
  }
  initialize() {
    const t = this.store;
    if (!t)
      throw new Error("[Node]store is required!");
    t.registerNode(this);
    const n = t.props;
    if (n && typeof n.isLeaf < "u") {
      const a = Oo(this, "isLeaf");
      typeof a == "boolean" && (this.isLeafByUser = a);
    }
    if (t.lazy !== !0 && this.data ? (this.setData(this.data), t.defaultExpandAll && (this.expanded = !0, this.canFocus = !0)) : this.level > 0 && t.lazy && t.defaultExpandAll && this.expand(), Array.isArray(this.data) || yu(this, this.data), !this.data)
      return;
    const r = t.defaultExpandedKeys, o = t.key;
    o && r && r.includes(this.key) && this.expand(null, t.autoExpandParent), o && t.currentNodeKey !== void 0 && this.key === t.currentNodeKey && (t.currentNode = this, t.currentNode.isCurrent = !0), t.lazy && t._initDefaultCheckedNode(this), this.updateLeafState(), this.parent && (this.level === 1 || this.parent.expanded === !0) && (this.canFocus = !0);
  }
  setData(t) {
    Array.isArray(t) || yu(this, t), this.data = t, this.childNodes = [];
    let n;
    this.level === 0 && Array.isArray(this.data) ? n = this.data : n = Oo(this, "children") || [];
    for (let r = 0, o = n.length; r < o; r++)
      this.insertChild({ data: n[r] });
  }
  get label() {
    return Oo(this, "label");
  }
  get key() {
    const t = this.store.key;
    return this.data ? this.data[t] : null;
  }
  get disabled() {
    return Oo(this, "disabled");
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
    if (!(t instanceof Kn)) {
      if (!r) {
        const o = this.getChildren(!0);
        o.includes(t.data) || (typeof n > "u" || n < 0 ? o.push(t.data) : o.splice(n, 0, t.data));
      }
      Object.assign(t, {
        parent: this,
        store: this.store
      }), t = dn(new Kn(t)), t instanceof Kn && t.initialize();
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
    const o = this.childNodes.indexOf(t);
    o > -1 && (this.store && this.store.deregisterNode(t), t.parent = null, this.childNodes.splice(o, 1)), this.updateLeafState();
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
        let o = this.parent;
        for (; o.level > 0; )
          o.expanded = !0, o = o.parent;
      }
      this.expanded = !0, t && t(), this.childNodes.forEach((o) => {
        o.canFocus = !0;
      });
    };
    this.shouldLoadData() ? this.loadData((o) => {
      Array.isArray(o) && (this.checked ? this.setChecked(!0, !0) : this.store.checkStrictly || Po(this), r());
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
  setChecked(t, n, r, o) {
    if (this.indeterminate = t === "half", this.checked = t === !0, this.store.checkStrictly)
      return;
    if (!(this.shouldLoadData() && !this.store.checkDescendants)) {
      const { all: i, allWithoutDisable: l } = wi(this.childNodes);
      !this.isLeaf && !i && l && (this.checked = !1, t = !1);
      const s = () => {
        if (n) {
          const u = this.childNodes;
          for (let h = 0, m = u.length; h < m; h++) {
            const f = u[h];
            o = o || t !== !1;
            const v = f.disabled ? f.checked : o;
            f.setChecked(v, n, !0, o);
          }
          const { half: d, all: p } = wi(u);
          p || (this.checked = p, this.indeterminate = d);
        }
      };
      if (this.shouldLoadData()) {
        this.loadData(() => {
          s(), Po(this);
        }, {
          checked: t !== !1
        });
        return;
      } else
        s();
    }
    const a = this.parent;
    !a || a.level === 0 || r || Po(a);
  }
  getChildren(t = !1) {
    if (this.level === 0)
      return this.data;
    const n = this.data;
    if (!n)
      return null;
    const r = this.store.props;
    let o = "children";
    return r && (o = r.children || "children"), n[o] === void 0 && (n[o] = null), t && !n[o] && (n[o] = []), n[o];
  }
  updateChildren() {
    const t = this.getChildren() || [], n = this.childNodes.map((a) => a.data), r = {}, o = [];
    t.forEach((a, i) => {
      const l = a[mr];
      l && n.findIndex((s) => s[mr] === l) >= 0 ? r[l] = { index: i, data: a } : o.push({ index: i, data: a });
    }), this.store.lazy || n.forEach((a) => {
      r[a[mr]] || this.removeChildByData(a);
    }), o.forEach(({ index: a, data: i }) => {
      this.insertChild({ data: i }, a);
    }), this.updateLeafState();
  }
  loadData(t, n = {}) {
    if (this.store.lazy === !0 && this.store.load && !this.loaded && (!this.loading || Object.keys(n).length)) {
      this.loading = !0;
      const r = (o) => {
        this.childNodes = [], this.doCreateChildren(o, n), this.loaded = !0, this.loading = !1, this.updateLeafState(), t && t.call(this, o);
      };
      this.store.load(this, r);
    } else
      t && t.call(this);
  }
}
class ak {
  constructor(t) {
    this.currentNode = null, this.currentNodeKey = null;
    for (const n in t)
      ro(t, n) && (this[n] = t[n]);
    this.nodesMap = {};
  }
  initialize() {
    if (this.root = new Kn({
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
    const n = this.filterNodeMethod, r = this.lazy, o = function(a) {
      const i = a.root ? a.root.childNodes : a.childNodes;
      if (i.forEach((l) => {
        l.visible = n.call(l, t, l.data, l), o(l);
      }), !a.visible && i.length) {
        let l = !0;
        l = !i.some((s) => s.visible), a.root ? a.root.visible = l === !1 : a.visible = l === !1;
      }
      t && a.visible && !a.isLeaf && !r && a.expand();
    };
    o(this);
  }
  setData(t) {
    t !== this.root.data ? (this.root.setData(t), this._initDefaultCheckedNodes()) : this.root.updateChildren();
  }
  getNode(t) {
    if (t instanceof Kn)
      return t;
    const n = Ft(t) ? ul(this.key, t) : t;
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
      const o = n[r];
      o && o.setChecked(!0, !this.checkStrictly);
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
    const r = [], o = function(a) {
      (a.root ? a.root.childNodes : a.childNodes).forEach((i) => {
        (i.checked || n && i.indeterminate) && (!t || t && i.isLeaf) && r.push(i.data), o(i);
      });
    };
    return o(this), r;
  }
  getCheckedKeys(t = !1) {
    return this.getCheckedNodes(t).map((n) => (n || {})[this.key]);
  }
  getHalfCheckedNodes() {
    const t = [], n = function(r) {
      (r.root ? r.root.childNodes : r.childNodes).forEach((o) => {
        o.indeterminate && t.push(o.data), n(o);
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
      ro(n, r) && t.push(n[r]);
    return t;
  }
  updateChildren(t, n) {
    const r = this.nodesMap[t];
    if (!r)
      return;
    const o = r.childNodes;
    for (let a = o.length - 1; a >= 0; a--) {
      const i = o[a];
      this.remove(i.data);
    }
    for (let a = 0, i = n.length; a < i; a++) {
      const l = n[a];
      this.append(l, r.data);
    }
  }
  _setCheckedKeys(t, n = !1, r) {
    const o = this._getAllNodes().sort((l, s) => s.level - l.level), a = /* @__PURE__ */ Object.create(null), i = Object.keys(r);
    o.forEach((l) => l.setChecked(!1, !1));
    for (let l = 0, s = o.length; l < s; l++) {
      const u = o[l], d = u.data[t].toString();
      if (!i.includes(d)) {
        u.checked && !a[d] && u.setChecked(!1, !1);
        continue;
      }
      let p = u.parent;
      for (; p && p.level > 0; )
        a[p.data[t]] = !0, p = p.parent;
      if (u.isLeaf || this.checkStrictly) {
        u.setChecked(!0, !1);
        continue;
      }
      if (u.setChecked(!0, !0), n) {
        u.setChecked(!1, !1);
        const h = function(m) {
          m.childNodes.forEach((f) => {
            f.isLeaf || f.setChecked(!1, !1), h(f);
          });
        };
        h(u);
      }
    }
  }
  setCheckedNodes(t, n = !1) {
    const r = this.key, o = {};
    t.forEach((a) => {
      o[(a || {})[r]] = !0;
    }), this._setCheckedKeys(r, n, o);
  }
  setCheckedKeys(t, n = !1) {
    this.defaultCheckedKeys = t;
    const r = this.key, o = {};
    t.forEach((a) => {
      o[a] = !0;
    }), this._setCheckedKeys(r, n, o);
  }
  setDefaultExpandedKeys(t) {
    t = t || [], this.defaultExpandedKeys = t, t.forEach((n) => {
      const r = this.getNode(n);
      r && r.expand(null, this.autoExpandParent);
    });
  }
  setChecked(t, n, r) {
    const o = this.getNode(t);
    o && o.setChecked(!!n, r);
  }
  getCurrentNode() {
    return this.currentNode;
  }
  setCurrentNode(t) {
    const n = this.currentNode;
    n && (n.isCurrent = !1), this.currentNode = t, this.currentNode.isCurrent = !0;
  }
  setUserCurrentNode(t, n = !0) {
    const r = t[this.key], o = this.nodesMap[r];
    this.setCurrentNode(o), n && this.currentNode.level > 1 && this.currentNode.parent.expand(null, !0);
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
const ik = ne({
  name: "ElTreeNodeContent",
  props: {
    node: {
      type: Object,
      required: !0
    },
    renderContent: Function
  },
  setup(e) {
    const t = ge("tree"), n = Se("NodeInstance"), r = Se("RootTree");
    return () => {
      const o = e.node, { data: a, store: i } = o;
      return e.renderContent ? e.renderContent(Ut, { _self: n, node: o, data: a, store: i }) : r.ctx.slots.default ? r.ctx.slots.default({ node: o, data: a }) : Ut("span", { class: t.be("node", "label") }, [o.label]);
    };
  }
});
var lk = /* @__PURE__ */ Oe(ik, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tree/src/tree-node-content.vue"]]);
function Kd(e) {
  const t = Se("TreeNodeMap", null), n = {
    treeNodeExpand: (r) => {
      e.node !== r && e.node.collapse();
    },
    children: []
  };
  return t && t.children.push(n), et("TreeNodeMap", n), {
    broadcastExpanded: (r) => {
      if (e.accordion)
        for (const o of n.children)
          o.treeNodeExpand(r);
    }
  };
}
const Wd = Symbol("dragEvents");
function sk({ props: e, ctx: t, el$: n, dropIndicator$: r, store: o }) {
  const a = ge("tree"), i = V({
    showDropIndicator: !1,
    draggingNode: null,
    dropNode: null,
    allowDrop: !0,
    dropType: null
  });
  return et(Wd, {
    treeNodeDragStart: ({ event: l, treeNode: s }) => {
      if (typeof e.allowDrag == "function" && !e.allowDrag(s.node))
        return l.preventDefault(), !1;
      l.dataTransfer.effectAllowed = "move";
      try {
        l.dataTransfer.setData("text/plain", "");
      } catch {
      }
      i.value.draggingNode = s, t.emit("node-drag-start", s.node, l);
    },
    treeNodeDragOver: ({ event: l, treeNode: s }) => {
      const u = s, d = i.value.dropNode;
      d && d !== u && Pa(d.$el, a.is("drop-inner"));
      const p = i.value.draggingNode;
      if (!p || !u)
        return;
      let h = !0, m = !0, f = !0, v = !0;
      typeof e.allowDrop == "function" && (h = e.allowDrop(p.node, u.node, "prev"), v = m = e.allowDrop(p.node, u.node, "inner"), f = e.allowDrop(p.node, u.node, "next")), l.dataTransfer.dropEffect = m || h || f ? "move" : "none", (h || m || f) && d !== u && (d && t.emit("node-drag-leave", p.node, d.node, l), t.emit("node-drag-enter", p.node, u.node, l)), (h || m || f) && (i.value.dropNode = u), u.node.nextSibling === p.node && (f = !1), u.node.previousSibling === p.node && (h = !1), u.node.contains(p.node, !1) && (m = !1), (p.node === u.node || p.node.contains(u.node)) && (h = !1, m = !1, f = !1);
      const y = u.$el.getBoundingClientRect(), g = n.value.getBoundingClientRect();
      let x;
      const $ = h ? m ? 0.25 : f ? 0.45 : 1 : -1, k = f ? m ? 0.75 : h ? 0.55 : 0 : 1;
      let I = -9999;
      const C = l.clientY - y.top;
      C < y.height * $ ? x = "before" : C > y.height * k ? x = "after" : m ? x = "inner" : x = "none";
      const E = u.$el.querySelector(`.${a.be("node", "expand-icon")}`).getBoundingClientRect(), F = r.value;
      x === "before" ? I = E.top - g.top : x === "after" && (I = E.bottom - g.top), F.style.top = `${I}px`, F.style.left = `${E.right - g.left}px`, x === "inner" ? qw(u.$el, a.is("drop-inner")) : Pa(u.$el, a.is("drop-inner")), i.value.showDropIndicator = x === "before" || x === "after", i.value.allowDrop = i.value.showDropIndicator || v, i.value.dropType = x, t.emit("node-drag-over", p.node, u.node, l);
    },
    treeNodeDragEnd: (l) => {
      const { draggingNode: s, dropType: u, dropNode: d } = i.value;
      if (l.preventDefault(), l.dataTransfer.dropEffect = "move", s && d) {
        const p = { data: s.node.data };
        u !== "none" && s.node.remove(), u === "before" ? d.node.parent.insertBefore(p, d.node) : u === "after" ? d.node.parent.insertAfter(p, d.node) : u === "inner" && d.node.insertChild(p), u !== "none" && o.value.registerNode(p), Pa(d.$el, a.is("drop-inner")), t.emit("node-drag-end", s.node, d.node, u, l), u !== "none" && t.emit("node-drop", s.node, d.node, u, l);
      }
      s && !d && t.emit("node-drag-end", s.node, null, u, l), i.value.showDropIndicator = !1, i.value.draggingNode = null, i.value.dropNode = null, i.value.allowDrop = !0;
    }
  }), {
    dragState: i
  };
}
const uk = ne({
  name: "ElTreeNode",
  components: {
    ElCollapseTransition: HE,
    ElCheckbox: NE,
    NodeContent: lk,
    ElIcon: nt,
    Loading: Ki
  },
  props: {
    node: {
      type: Kn,
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
    const n = ge("tree"), { broadcastExpanded: r } = Kd(e), o = Se("RootTree"), a = V(!1), i = V(!1), l = V(null), s = V(null), u = V(null), d = Se(Wd), p = St();
    et("NodeInstance", p), o || rt("Tree", "Can not find node's tree."), e.node.expanded && (a.value = !0, i.value = !0);
    const h = o.props.children || "children";
    ae(() => {
      const k = e.node.data[h];
      return k && [...k];
    }, () => {
      e.node.updateChildren();
    }), ae(() => e.node.indeterminate, (k) => {
      v(e.node.checked, k);
    }), ae(() => e.node.checked, (k) => {
      v(k, e.node.indeterminate);
    }), ae(() => e.node.expanded, (k) => {
      me(() => a.value = k), k && (i.value = !0);
    });
    const m = (k) => ul(o.props.nodeKey, k.data), f = (k) => {
      const I = e.props.class;
      if (!I)
        return {};
      let C;
      if (xt(I)) {
        const { data: E } = k;
        C = I(E, k);
      } else
        C = I;
      return Bt(C) ? { [C]: !0 } : C;
    }, v = (k, I) => {
      (l.value !== k || s.value !== I) && o.ctx.emit("check-change", e.node.data, k, I), l.value = k, s.value = I;
    }, y = (k) => {
      yi(o.store, o.ctx.emit, () => o.store.value.setCurrentNode(e.node)), o.currentNode.value = e.node, o.props.expandOnClickNode && x(), o.props.checkOnClickNode && !e.node.disabled && $(null, {
        target: { checked: !e.node.checked }
      }), o.ctx.emit("node-click", e.node.data, e.node, p, k);
    }, g = (k) => {
      o.instance.vnode.props.onNodeContextmenu && (k.stopPropagation(), k.preventDefault()), o.ctx.emit("node-contextmenu", k, e.node.data, e.node, p);
    }, x = () => {
      e.node.isLeaf || (a.value ? (o.ctx.emit("node-collapse", e.node.data, e.node, p), e.node.collapse()) : (e.node.expand(), t.emit("node-expand", e.node.data, e.node, p)));
    }, $ = (k, I) => {
      e.node.setChecked(I.target.checked, !o.props.checkStrictly), me(() => {
        const C = o.store.value;
        o.ctx.emit("check", e.node.data, {
          checkedNodes: C.getCheckedNodes(),
          checkedKeys: C.getCheckedKeys(),
          halfCheckedNodes: C.getHalfCheckedNodes(),
          halfCheckedKeys: C.getHalfCheckedKeys()
        });
      });
    };
    return {
      ns: n,
      node$: u,
      tree: o,
      expanded: a,
      childNodeRendered: i,
      oldChecked: l,
      oldIndeterminate: s,
      getNodeKey: m,
      getNodeClass: f,
      handleSelectChange: v,
      handleClick: y,
      handleContextMenu: g,
      handleExpandIconClick: x,
      handleCheckChange: $,
      handleChildNodeExpand: (k, I, C) => {
        r(I), o.ctx.emit("node-expand", k, I, C);
      },
      handleDragStart: (k) => {
        o.props.draggable && d.treeNodeDragStart({ event: k, treeNode: e });
      },
      handleDragOver: (k) => {
        k.preventDefault(), o.props.draggable && d.treeNodeDragOver({
          event: k,
          treeNode: { $el: u.value, node: e.node }
        });
      },
      handleDrop: (k) => {
        k.preventDefault();
      },
      handleDragEnd: (k) => {
        o.props.draggable && d.treeNodeDragEnd(k);
      },
      CaretRight: g2
    };
  }
}), ck = ["aria-expanded", "aria-disabled", "aria-checked", "draggable", "data-key"], dk = ["aria-expanded"];
function pk(e, t, n, r, o, a) {
  const i = ct("el-icon"), l = ct("el-checkbox"), s = ct("loading"), u = ct("node-content"), d = ct("el-tree-node"), p = ct("el-collapse-transition");
  return Je((A(), G("div", {
    ref: "node$",
    class: j([
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
    onClick: t[1] || (t[1] = je((...h) => e.handleClick && e.handleClick(...h), ["stop"])),
    onContextmenu: t[2] || (t[2] = (...h) => e.handleContextMenu && e.handleContextMenu(...h)),
    onDragstart: t[3] || (t[3] = je((...h) => e.handleDragStart && e.handleDragStart(...h), ["stop"])),
    onDragover: t[4] || (t[4] = je((...h) => e.handleDragOver && e.handleDragOver(...h), ["stop"])),
    onDragend: t[5] || (t[5] = je((...h) => e.handleDragEnd && e.handleDragEnd(...h), ["stop"])),
    onDrop: t[6] || (t[6] = je((...h) => e.handleDrop && e.handleDrop(...h), ["stop"]))
  }, [
    Q("div", {
      class: j(e.ns.be("node", "content")),
      style: Qe({ paddingLeft: (e.node.level - 1) * e.tree.props.indent + "px" })
    }, [
      e.tree.props.icon || e.CaretRight ? (A(), te(i, {
        key: 0,
        class: j([
          e.ns.be("node", "expand-icon"),
          e.ns.is("leaf", e.node.isLeaf),
          {
            expanded: !e.node.isLeaf && e.expanded
          }
        ]),
        onClick: je(e.handleExpandIconClick, ["stop"])
      }, {
        default: oe(() => [
          (A(), te(st(e.tree.props.icon || e.CaretRight)))
        ]),
        _: 1
      }, 8, ["class", "onClick"])) : re("v-if", !0),
      e.showCheckbox ? (A(), te(l, {
        key: 1,
        "model-value": e.node.checked,
        indeterminate: e.node.indeterminate,
        disabled: !!e.node.disabled,
        onClick: t[0] || (t[0] = je(() => {
        }, ["stop"])),
        onChange: e.handleCheckChange
      }, null, 8, ["model-value", "indeterminate", "disabled", "onChange"])) : re("v-if", !0),
      e.node.loading ? (A(), te(i, {
        key: 2,
        class: j([e.ns.be("node", "loading-icon"), e.ns.is("loading")])
      }, {
        default: oe(() => [
          Ne(s)
        ]),
        _: 1
      }, 8, ["class"])) : re("v-if", !0),
      Ne(u, {
        node: e.node,
        "render-content": e.renderContent
      }, null, 8, ["node", "render-content"])
    ], 6),
    Ne(p, null, {
      default: oe(() => [
        !e.renderAfterExpand || e.childNodeRendered ? Je((A(), G("div", {
          key: 0,
          class: j(e.ns.be("node", "children")),
          role: "group",
          "aria-expanded": e.expanded
        }, [
          (A(!0), G(Ve, null, Sn(e.node.childNodes, (h) => (A(), te(d, {
            key: e.getNodeKey(h),
            "render-content": e.renderContent,
            "render-after-expand": e.renderAfterExpand,
            "show-checkbox": e.showCheckbox,
            node: h,
            accordion: e.accordion,
            props: e.props,
            onNodeExpand: e.handleChildNodeExpand
          }, null, 8, ["render-content", "render-after-expand", "show-checkbox", "node", "accordion", "props", "onNodeExpand"]))), 128))
        ], 10, dk)), [
          [ln, e.expanded]
        ]) : re("v-if", !0)
      ]),
      _: 1
    })
  ], 42, ck)), [
    [ln, e.node.visible]
  ]);
}
var fk = /* @__PURE__ */ Oe(uk, [["render", pk], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/tree/src/tree-node.vue"]]);
function hk({ el$: e }, t) {
  const n = ge("tree"), r = Tn([]), o = Tn([]);
  at(() => {
    a();
  }), _u(() => {
    r.value = Array.from(e.value.querySelectorAll("[role=treeitem]")), o.value = Array.from(e.value.querySelectorAll("input[type=checkbox]"));
  }), ae(o, (i) => {
    i.forEach((l) => {
      l.setAttribute("tabindex", "-1");
    });
  }), Hn(e, "keydown", (i) => {
    const l = i.target;
    if (!l.className.includes(n.b("node")))
      return;
    const s = i.code;
    r.value = Array.from(e.value.querySelectorAll(`.${n.is("focusable")}[role=treeitem]`));
    const u = r.value.indexOf(l);
    let d;
    if ([qe.up, qe.down].includes(s)) {
      if (i.preventDefault(), s === qe.up) {
        d = u === -1 ? 0 : u !== 0 ? u - 1 : r.value.length - 1;
        const h = d;
        for (; !t.value.getNode(r.value[d].dataset.key).canFocus; ) {
          if (d--, d === h) {
            d = -1;
            break;
          }
          d < 0 && (d = r.value.length - 1);
        }
      } else {
        d = u === -1 ? 0 : u < r.value.length - 1 ? u + 1 : 0;
        const h = d;
        for (; !t.value.getNode(r.value[d].dataset.key).canFocus; ) {
          if (d++, d === h) {
            d = -1;
            break;
          }
          d >= r.value.length && (d = 0);
        }
      }
      d !== -1 && r.value[d].focus();
    }
    [qe.left, qe.right].includes(s) && (i.preventDefault(), l.click());
    const p = l.querySelector('[type="checkbox"]');
    [qe.enter, qe.space].includes(s) && p && (i.preventDefault(), p.click());
  });
  const a = () => {
    var i;
    r.value = Array.from(e.value.querySelectorAll(`.${n.is("focusable")}[role=treeitem]`)), o.value = Array.from(e.value.querySelectorAll("input[type=checkbox]"));
    const l = e.value.querySelectorAll(`.${n.is("checked")}[role=treeitem]`);
    if (l.length) {
      l[0].setAttribute("tabindex", "0");
      return;
    }
    (i = r.value[0]) == null || i.setAttribute("tabindex", "0");
  };
}
const vk = ne({
  name: "ElTree",
  components: { ElTreeNode: fk },
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
      type: Xn
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
    const { t: n } = ir(), r = ge("tree"), o = V(new ak({
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
    o.value.initialize();
    const a = V(o.value.root), i = V(null), l = V(null), s = V(null), { broadcastExpanded: u } = Kd(e), { dragState: d } = sk({
      props: e,
      ctx: t,
      el$: l,
      dropIndicator$: s,
      store: o
    });
    hk({ el$: l }, o);
    const p = O(() => {
      const { childNodes: _ } = a.value;
      return !_ || _.length === 0 || _.every(({ visible: T }) => !T);
    });
    ae(() => e.currentNodeKey, (_) => {
      o.value.setCurrentNodeKey(_);
    }), ae(() => e.defaultCheckedKeys, (_) => {
      o.value.setDefaultCheckedKey(_);
    }), ae(() => e.defaultExpandedKeys, (_) => {
      o.value.setDefaultExpandedKeys(_);
    }), ae(() => e.data, (_) => {
      o.value.setData(_);
    }, { deep: !0 }), ae(() => e.checkStrictly, (_) => {
      o.value.checkStrictly = _;
    });
    const h = (_) => {
      if (!e.filterNodeMethod)
        throw new Error("[Tree] filterNodeMethod is required when filter");
      o.value.filter(_);
    }, m = (_) => ul(e.nodeKey, _.data), f = (_) => {
      if (!e.nodeKey)
        throw new Error("[Tree] nodeKey is required in getNodePath");
      const T = o.value.getNode(_);
      if (!T)
        return [];
      const w = [T.data];
      let N = T.parent;
      for (; N && N !== a.value; )
        w.push(N.data), N = N.parent;
      return w.reverse();
    }, v = (_, T) => o.value.getCheckedNodes(_, T), y = (_) => o.value.getCheckedKeys(_), g = () => {
      const _ = o.value.getCurrentNode();
      return _ ? _.data : null;
    }, x = () => {
      if (!e.nodeKey)
        throw new Error("[Tree] nodeKey is required in getCurrentKey");
      const _ = g();
      return _ ? _[e.nodeKey] : null;
    }, $ = (_, T) => {
      if (!e.nodeKey)
        throw new Error("[Tree] nodeKey is required in setCheckedNodes");
      o.value.setCheckedNodes(_, T);
    }, k = (_, T) => {
      if (!e.nodeKey)
        throw new Error("[Tree] nodeKey is required in setCheckedKeys");
      o.value.setCheckedKeys(_, T);
    }, I = (_, T, w) => {
      o.value.setChecked(_, T, w);
    }, C = () => o.value.getHalfCheckedNodes(), E = () => o.value.getHalfCheckedKeys(), F = (_, T = !0) => {
      if (!e.nodeKey)
        throw new Error("[Tree] nodeKey is required in setCurrentNode");
      yi(o, t.emit, () => o.value.setUserCurrentNode(_, T));
    }, H = (_, T = !0) => {
      if (!e.nodeKey)
        throw new Error("[Tree] nodeKey is required in setCurrentKey");
      yi(o, t.emit, () => o.value.setCurrentNodeKey(_, T));
    }, R = (_) => o.value.getNode(_), q = (_) => {
      o.value.remove(_);
    }, J = (_, T) => {
      o.value.append(_, T);
    }, L = (_, T) => {
      o.value.insertBefore(_, T);
    }, M = (_, T) => {
      o.value.insertAfter(_, T);
    }, S = (_, T, w) => {
      u(T), t.emit("node-expand", _, T, w);
    }, P = (_, T) => {
      if (!e.nodeKey)
        throw new Error("[Tree] nodeKey is required in updateKeyChild");
      o.value.updateChildren(_, T);
    };
    return et("RootTree", {
      ctx: t,
      props: e,
      store: o,
      root: a,
      currentNode: i,
      instance: St()
    }), et(io, void 0), {
      ns: r,
      store: o,
      root: a,
      currentNode: i,
      dragState: d,
      el$: l,
      dropIndicator$: s,
      isEmpty: p,
      filter: h,
      getNodeKey: m,
      getNodePath: f,
      getCheckedNodes: v,
      getCheckedKeys: y,
      getCurrentNode: g,
      getCurrentKey: x,
      setCheckedNodes: $,
      setCheckedKeys: k,
      setChecked: I,
      getHalfCheckedNodes: C,
      getHalfCheckedKeys: E,
      setCurrentNode: F,
      setCurrentKey: H,
      t: n,
      getNode: R,
      remove: q,
      append: J,
      insertBefore: L,
      insertAfter: M,
      handleNodeExpand: S,
      updateKeyChildren: P
    };
  }
});
function mk(e, t, n, r, o, a) {
  var i;
  const l = ct("el-tree-node");
  return A(), G("div", {
    ref: "el$",
    class: j([
      e.ns.b(),
      e.ns.is("dragging", !!e.dragState.draggingNode),
      e.ns.is("drop-not-allow", !e.dragState.allowDrop),
      e.ns.is("drop-inner", e.dragState.dropType === "inner"),
      { [e.ns.m("highlight-current")]: e.highlightCurrent }
    ]),
    role: "tree"
  }, [
    (A(!0), G(Ve, null, Sn(e.root.childNodes, (s) => (A(), te(l, {
      key: e.getNodeKey(s),
      node: s,
      props: e.props,
      accordion: e.accordion,
      "render-after-expand": e.renderAfterExpand,
      "show-checkbox": e.showCheckbox,
      "render-content": e.renderContent,
      onNodeExpand: e.handleNodeExpand
    }, null, 8, ["node", "props", "accordion", "render-after-expand", "show-checkbox", "render-content", "onNodeExpand"]))), 128)),
    e.isEmpty ? (A(), G("div", {
      key: 0,
      class: j(e.ns.e("empty-block"))
    }, [
      Q("span", {
        class: j(e.ns.e("empty-text"))
      }, ke((i = e.emptyText) != null ? i : e.t("el.tree.emptyText")), 3)
    ], 2)) : re("v-if", !0),
    Je(Q("div", {
      ref: "dropIndicator$",
      class: j(e.ns.e("drop-indicator"))
    }, null, 2), [
      [ln, e.dragState.showDropIndicator]
    ])
  ], 2);
}
var Ua = /* @__PURE__ */ Oe(vk, [["render", mk], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/tree/src/tree.vue"]]);
Ua.install = (e) => {
  e.component(Ua.name, Ua);
};
const gk = /* @__PURE__ */ ne({
  __name: "Button",
  props: {
    text: null
  },
  setup(e) {
    return (t, n) => {
      const r = KC;
      return A(), te(r, jt(t.$attrs, { style: { width: "100%" } }), {
        default: oe(() => [
          Rn(ke(e.text), 1)
        ]),
        _: 1
      }, 16);
    };
  }
});
function bk() {
  const e = {};
  return e.props = (() => ({
    events: {
      onClick: {
        _component: "Input",
        _formItem: { label: "点击" }
      }
    },
    schema: {
      text: "text !== '4'"
    },
    props: {
      text: {
        _component: "Input",
        _formItem: { label: "文本" }
      },
      type: {
        _component: "Select",
        _formItem: { label: "类型" },
        placeholder: "类型",
        options: [
          {
            label: "primary",
            value: "primary"
          },
          {
            label: "danger",
            value: "danger"
          }
        ]
      }
    }
  }))(), e;
}
const Ak = {
  alioth: "widget",
  data: {
    key: "el_btn",
    category: "element-plus",
    component: gk,
    meta: bk().props
  }
}, yk = { style: { width: "100px", height: "100px", "background-color": "red" } }, wk = { style: { "user-select": "none" } }, xk = /* @__PURE__ */ ne({
  __name: "HelloWorld",
  props: {
    msg: {}
  },
  setup(e) {
    return (t, n) => (A(), G("div", yk, [
      Q("p", wk, ke(t.msg), 1)
    ]));
  }
});
const _k = /* @__PURE__ */ Ku(xk, [["__scopeId", "data-v-027ce349"]]), Ud = V(1), Mk = {
  alioth: "state",
  data: {
    key: "c",
    value: Ud
  }
};
V(["a", "b"]);
const $k = {
  alioth: "state",
  data: {
    key: "changeC",
    value: function() {
      Ud.value++;
    }
  }
}, Ik = {
  alioth: "widget",
  data: {
    category: "lib",
    key: "a",
    component: _k,
    meta: {
      props: {
        msg: {
          _component: "Input",
          _formItem: { label: "绑定数据" }
        }
      },
      events: {
        onClick: {
          _component: "Input",
          _formItem: { label: "绑定事件" }
        }
      }
    }
  }
};
export {
  Tk as container2,
  Dk as prod_engine,
  Mk as state_c,
  $k as state_changeC,
  Ik as widget_a,
  Ak as widget_btn
};
//# sourceMappingURL=entry.js.map
