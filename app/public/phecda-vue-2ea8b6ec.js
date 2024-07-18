var we = Object.defineProperty;
var ve = (e, t, n) => t in e ? we(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var R = (e, t, n) => (ve(e, typeof t != "symbol" ? t + "" : t, n), n);
import { a_ as ge, aX as me, aU as Ee, b2 as Tt, M as Oe, O as Pe, _ as Me, aA as be, aN as Se, aV as Te, b3 as At } from "./runtime-core.esm-bundler-400321fc.js";
var Ae = Object.defineProperty, Ie = Object.getOwnPropertyDescriptor, It = (e, t, n, r) => {
  for (var i = r > 1 ? void 0 : r ? Ie(t, n) : t, u = e.length - 1, c; u >= 0; u--)
    (c = e[u]) && (i = (r ? c(t, n, i) : c(i)) || i);
  return r && i && Ae(t, n, i), i;
}, I = Symbol("phecda"), y = Symbol("phecda");
function en(e) {
  return typeof e == "function" ? !!e.prototype[y] : !1;
}
function D(e) {
  e && (e.hasOwnProperty(y) || (e[y] = {
    /**
       * 暴露的变量，
       * 只要属性上存在至少一个装饰器，该属性就会被捕捉到
      */
    __EXPOSE_KEY: /* @__PURE__ */ new Set(),
    /**
       * @Ignore 绑定的属性，
       * 某属性即使被捕捉，可被强行忽略，优先级最高
      */
    __IGNORE_KEY: /* @__PURE__ */ new Set(),
    /**
       * @Clear 绑定的属性，
       * 消除父类在该key上的state/handler, 但export key 和 state
      */
    __CLEAR_KEY: /* @__PURE__ */ new Set(),
    /**
       * 存在状态的变量
       * @deprecated
      */
    __STATE_KEY: /* @__PURE__ */ new Set(),
    /**
       * 状态变量的处理器
      */
    __STATE_HANDLER__: /* @__PURE__ */ new Map(),
    /**
       * 状态变量的共有状态
      */
    __STATE_NAMESPACE__: /* @__PURE__ */ new Map()
  }));
}
function x(e) {
  return typeof e == "function" ? e.prototype : e.hasOwnProperty(y) ? e : Object.getPrototypeOf(e);
}
function b(e, t) {
  t || (t = I, e = e.prototype), D(e), e[y].__STATE_KEY.add(t), jt(e, t);
}
function jt(e, t) {
  t || (t = I, e = e.prototype), D(e), e[y].__EXPOSE_KEY.add(t);
}
function je(e, t) {
  t || (t = I, e = e.prototype), D(e), e[y].__IGNORE_KEY.add(t);
}
function T(e, t, n) {
  t || (t = I, e = e.prototype), D(e), e[y].__STATE_HANDLER__.has(t) ? e[y].__STATE_HANDLER__.get(t).push(n) : e[y].__STATE_HANDLER__.set(t, [n]);
}
function Rt(e, t, n) {
  t || (t = I, e = e.prototype), D(e), e[y].__STATE_NAMESPACE__.set(t, n);
}
function nn(e) {
  return [...x(e)[y].__STATE_KEY];
}
function Re(e) {
  let t = x(e);
  const n = /* @__PURE__ */ new Set();
  for (; t != null && t[y]; )
    t.hasOwnProperty(y) && t[y].__STATE_KEY.forEach((r) => n.add(r)), t = Object.getPrototypeOf(t);
  return [...n];
}
function rn(e) {
  const t = x(e);
  return [...t[y].__EXPOSE_KEY].filter((n) => !t[y].__IGNORE_KEY.has(n));
}
function V(e) {
  let t = x(e);
  const n = /* @__PURE__ */ new Set(), r = t;
  for (; t != null && t[y]; )
    t.hasOwnProperty(y) && [...t[y].__EXPOSE_KEY].forEach((i) => !r[y].__IGNORE_KEY.has(i) && n.add(i)), t = Object.getPrototypeOf(t);
  return [...n];
}
function an(e) {
  var n;
  return [...(n = x(e)[y]) == null ? void 0 : n.__IGNORE_KEY];
}
function on(e, t) {
  var r;
  return ((r = x(e)[y]) == null ? void 0 : r.__STATE_HANDLER__.get(t)) || [];
}
function K(e, t) {
  var i;
  let n = x(e);
  const r = /* @__PURE__ */ new Set();
  for (; n != null && n[y] && !(n.hasOwnProperty(y) && ((i = n[y].__STATE_HANDLER__.get(t)) == null || i.forEach((u) => r.add(u)), n[y].__CLEAR_KEY.has(t))); )
    n = Object.getPrototypeOf(n);
  return [...r];
}
function Ce(e, t = I) {
  let n = x(e), r = {};
  for (; n != null && n[y]; ) {
    if (n.hasOwnProperty(y)) {
      const i = n[y].__STATE_NAMESPACE__.get(t);
      if (i && (r = { ...i, ...r }), n[y].__CLEAR_KEY.has(t))
        break;
    }
    n = Object.getPrototypeOf(n);
  }
  return r;
}
function Ct(e, t = I) {
  return x(e)[y].__STATE_NAMESPACE__.get(t) || {};
}
function Pt(e, t) {
  const r = V(t).map((i) => K(t, i).filter((u) => !!u[e]).map((u) => u[e](t))).flat();
  return t.__PROMISE_SYMBOL__ = Promise.all(r);
}
function q(e, t, n) {
  D(e), e[`__${t.toUpperCase()}__`] = n;
}
function it(e, t) {
  return e[`__${t.toUpperCase()}__`];
}
function sn(e, t) {
  b(e, t), T(e, t, {
    async init(n) {
      return n[t]();
    }
  });
}
function De(e, t) {
  b(e, t), T(e, t, {
    async unmount(n) {
      return n[t]();
    }
  });
}
function un(e) {
  return (t, n) => {
    b(t, n), Rt(t, n, {
      value: e
    });
  };
}
function fn(e, t) {
  t || (e = e.prototype, t = I), je(e, t);
}
function cn(e, t) {
  t || (e = e.prototype, t = I), D(e), e[y].__CLEAR_KEY.add(t);
}
function hn(e, t) {
  jt(e, t);
}
function Dt(e) {
  D(e.prototype);
}
function ln() {
  return (e) => Dt(e);
}
function A(e) {
  return typeof e == "object" && (e = e.constructor), it(e.prototype, "tag") || e.name;
}
function pn(e) {
  const t = new e(), n = Re(t), r = {};
  for (const i of n) {
    const u = Ce(t, i);
    u.value && (r[i] = u.value);
  }
  return r;
}
function _n(e, t) {
  const n = new e(), r = V(n);
  for (const i of r)
    n[i] = t[i];
  return n;
}
function dn(e, t = !1) {
  const n = [], r = V(e), i = n.push.bind(n);
  for (const u of r) {
    const c = K(e, u);
    if (c)
      for (const p of c) {
        const m = p.pipe;
        if (m && (m(e, i), n.length && !t))
          return n;
      }
  }
  return n;
}
async function yn(e, t = !1) {
  const n = [], r = V(e), i = n.push.bind(n);
  for (const u of r) {
    const c = K(e, u);
    if (c)
      for (const p of c) {
        const m = p.pipe;
        if (m && (await m(e, i), n.length && !t))
          return n;
      }
  }
  return n;
}
function wn(e, t, n = !1) {
  const r = [], i = K(e, t), u = r.push.bind(r);
  if (i)
    for (const c of i) {
      const p = c.pipe;
      if (p && (p(e, u), r.length && !n))
        return r;
    }
  return r;
}
async function vn(e, t, n = !1) {
  const r = [], i = K(e, t), u = r.push.bind(r);
  if (i)
    for (const c of i) {
      const p = c.pipe;
      if (p && (await p(e, u), r.length && !n))
        return r;
    }
  return r;
}
function gn(e) {
  const t = {}, n = V(e);
  for (const r of n)
    t[r] = e[r];
  return JSON.parse(JSON.stringify(t));
}
function mn(e) {
  const t = {};
  for (const n in e)
    t[n] = e[n];
  return {
    data: e,
    clear() {
      for (const n in t)
        delete e[n];
    },
    apply() {
      for (const n in t)
        e[n] = t[n];
    }
  };
}
function En(e, t, n) {
  n(t ? e.prototype : e, t);
}
function On(...e) {
  return (...t) => {
    for (const n of e)
      n(...t);
  };
}
function ot(e) {
  return e[Symbol.toStringTag] === "AsyncFunction";
}
function Pn(e, t, n) {
  b(e, t);
  const r = Ct(e, t) || {};
  n(r), Rt(e, t, r);
}
function Mn(e, t) {
  const n = Ct(e, I) || {};
  return t(n);
}
var xt = {};
function bn(e, t) {
  xt[e] = t;
}
function Sn(e) {
  return xt[e];
}
var rt = {};
function Mt(e, t) {
  return rt[e] = t, rt;
}
function J(e) {
  return rt[e];
}
function Tn(e) {
  q(e.prototype, "isolate", !0);
}
function An(e) {
  return (t) => {
    q(t.prototype, "tag", e);
  };
}
function In(e) {
  return (t) => {
    q(t.prototype, "tag", Symbol(e || t.name));
  };
}
function jn(e) {
  return (t) => {
    b(t), T(t, void 0, {
      init: async (n) => {
        const r = await e(n);
        if (r && typeof r == "object" && !Array.isArray(r))
          for (const i in r)
            n[i] = r[i];
      }
    });
  };
}
function Rn(e) {
  b(e), T(e, void 0, {
    init: async (t) => {
      const n = A(t);
      globalThis.__PHECDA__ || (globalThis.__PHECDA__ = {}), globalThis.__PHECDA__[n] = t.constructor;
    }
  });
}
function Cn(...e) {
  return (t, n) => {
    b(t, n), T(t, n, {
      async pipe(r, i) {
        for (const u of e)
          try {
            ot(u) ? r[n] = await u(r[n], r, n) : r[n] = u(r[n], r, n);
          } catch (c) {
            i(c.message);
          }
      }
    });
  };
}
function Dn(e, t) {
  return (n, r) => {
    b(n, r), T(n, r, {
      async pipe(i, u) {
        let c;
        ot(e) ? c = await e(i[r]) : c = e(i[r]), c || u(typeof t == "string" ? t : t());
      }
    });
  };
}
function xn(e, t = !1) {
  return (n, r) => {
    b(n, r), T(n, r, {
      init: (i) => {
        if (typeof i[r] == "function") {
          const u = i[r].bind(i);
          ot(u) ? i[r] = async (...c) => {
            try {
              await u(...c);
            } catch (p) {
              if (e(p, i, r), !t)
                throw p;
            }
          } : i[r] = (...c) => {
            try {
              u(...c);
            } catch (p) {
              if (e(p, i, r), !t)
                throw p;
            }
          };
        }
      }
    });
  };
}
function Nn(e, t) {
  let n;
  return (r, i) => {
    b(r, i), T(r, i, {
      init(u) {
        var c;
        return n = (c = J("watcher")) == null ? void 0 : c({ eventName: e, instance: u, key: i, options: t });
      },
      unmount() {
        return n == null ? void 0 : n();
      }
    });
  };
}
function Yn(e) {
  return (t, n) => {
    b(t, n), T(t, n, {
      init(r) {
        r[`$_${n}`] = r[n], Object.defineProperty(r, n, {
          get() {
            return r[`$_${n}`];
          },
          set(i) {
            return r[`$_${n}`] = i, e(i, r, n), !0;
          }
        });
      }
    });
  };
}
function Un({ key: e, json: t, stringify: n } = {}) {
  return t || (t = (r) => JSON.parse(r)), n || (n = (r) => JSON.stringify(r)), (r, i) => {
    const u = e || A(r);
    D(r), b(r, i), T(r, i, {
      init: (c) => {
        var p;
        return (p = J("storage")) == null ? void 0 : p({ instance: c, key: i, tag: u, toJSON: t, toString: n });
      }
    });
  };
}
function Ln(e, ...t) {
  return e ? (...n) => {
    t.forEach((r) => r(...n));
  } : () => {
  };
}
var X = class {
  constructor() {
    this.__UNMOUNT_SYMBOL__ = [];
  }
  get tag() {
    return A(this);
  }
  then(e, t) {
    return this.__PROMISE_SYMBOL__.then(e, t);
  }
  on(e, t) {
    this.emitter.on(e, t), this.onUnmount(() => this.emitter.off(e, t));
  }
  emit(e, t) {
    this.emitter.emit(e, t);
  }
  off(e, t) {
    this.emitter.off(e, t);
  }
  onUnmount(e) {
    this.__UNMOUNT_SYMBOL__.push(e);
  }
  // @ts-expect-error for internal
  _unmount() {
    return Promise.all(this.__UNMOUNT_SYMBOL__.map((e) => e()));
  }
};
It([
  De
], X.prototype, "_unmount", 1);
X = It([
  Dt
], X);
function Nt(e) {
  return { all: e = e || /* @__PURE__ */ new Map(), on: function(t, n) {
    var r = e.get(t);
    r ? r.push(n) : e.set(t, [n]);
  }, off: function(t, n) {
    var r = e.get(t);
    r && (n ? r.splice(r.indexOf(n) >>> 0, 1) : e.set(t, []));
  }, emit: function(t, n) {
    var r = e.get(t);
    r && r.slice().map(function(i) {
      i(n);
    }), (r = e.get("*")) && r.slice().map(function(i) {
      i(t, n);
    });
  } };
}
var bt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Wn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
/*! *****************************************************************************
Copyright (C) Microsoft. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var St;
(function(e) {
  (function(t) {
    var n = typeof bt == "object" ? bt : typeof self == "object" ? self : typeof this == "object" ? this : Function("return this;")(), r = i(e);
    typeof n.Reflect > "u" ? n.Reflect = e : r = i(n.Reflect, r), t(r);
    function i(u, c) {
      return function(p, m) {
        typeof u[p] != "function" && Object.defineProperty(u, p, { configurable: !0, writable: !0, value: m }), c && c(p, m);
      };
    }
  })(function(t) {
    var n = Object.prototype.hasOwnProperty, r = typeof Symbol == "function", i = r && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", u = r && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", c = typeof Object.create == "function", p = { __proto__: [] } instanceof Array, m = !c && !p, N = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: c ? function() {
        return et(/* @__PURE__ */ Object.create(null));
      } : p ? function() {
        return et({ __proto__: null });
      } : function() {
        return et({});
      },
      has: m ? function(a, o) {
        return n.call(a, o);
      } : function(a, o) {
        return o in a;
      },
      get: m ? function(a, o) {
        return n.call(a, o) ? a[o] : void 0;
      } : function(a, o) {
        return a[o];
      }
    }, W = Object.getPrototypeOf(Function), Z = typeof process == "object" && process["env"] && process["env"].REFLECT_METADATA_USE_MAP_POLYFILL === "true", Q = !Z && typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : _e(), Vt = !Z && typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : de(), Kt = !Z && typeof WeakMap == "function" ? WeakMap : ye(), F = new Kt();
    function Ft(a, o, s, f) {
      if (E(s)) {
        if (!gt(a))
          throw new TypeError();
        if (!mt(o))
          throw new TypeError();
        return ne(a, o);
      } else {
        if (!gt(a))
          throw new TypeError();
        if (!O(o))
          throw new TypeError();
        if (!O(f) && !E(f) && !U(f))
          throw new TypeError();
        return U(f) && (f = void 0), s = j(s), re(a, o, s, f);
      }
    }
    t("decorate", Ft);
    function Jt(a, o) {
      function s(f, h) {
        if (!O(f))
          throw new TypeError();
        if (!E(h) && !fe(h))
          throw new TypeError();
        dt(a, o, f, h);
      }
      return s;
    }
    t("metadata", Jt);
    function Xt(a, o, s, f) {
      if (!O(s))
        throw new TypeError();
      return E(f) || (f = j(f)), dt(a, o, s, f);
    }
    t("defineMetadata", Xt);
    function qt(a, o, s) {
      if (!O(o))
        throw new TypeError();
      return E(s) || (s = j(s)), lt(a, o, s);
    }
    t("hasMetadata", qt);
    function zt(a, o, s) {
      if (!O(o))
        throw new TypeError();
      return E(s) || (s = j(s)), k(a, o, s);
    }
    t("hasOwnMetadata", zt);
    function Zt(a, o, s) {
      if (!O(o))
        throw new TypeError();
      return E(s) || (s = j(s)), pt(a, o, s);
    }
    t("getMetadata", Zt);
    function Qt(a, o, s) {
      if (!O(o))
        throw new TypeError();
      return E(s) || (s = j(s)), _t(a, o, s);
    }
    t("getOwnMetadata", Qt);
    function kt(a, o) {
      if (!O(a))
        throw new TypeError();
      return E(o) || (o = j(o)), yt(a, o);
    }
    t("getMetadataKeys", kt);
    function te(a, o) {
      if (!O(a))
        throw new TypeError();
      return E(o) || (o = j(o)), wt(a, o);
    }
    t("getOwnMetadataKeys", te);
    function ee(a, o, s) {
      if (!O(o))
        throw new TypeError();
      E(s) || (s = j(s));
      var f = $(
        o,
        s,
        /*Create*/
        !1
      );
      if (E(f) || !f.delete(a))
        return !1;
      if (f.size > 0)
        return !0;
      var h = F.get(o);
      return h.delete(s), h.size > 0 || F.delete(o), !0;
    }
    t("deleteMetadata", ee);
    function ne(a, o) {
      for (var s = a.length - 1; s >= 0; --s) {
        var f = a[s], h = f(o);
        if (!E(h) && !U(h)) {
          if (!mt(h))
            throw new TypeError();
          o = h;
        }
      }
      return o;
    }
    function re(a, o, s, f) {
      for (var h = a.length - 1; h >= 0; --h) {
        var P = a[h], _ = P(o, s, f);
        if (!E(_) && !U(_)) {
          if (!O(_))
            throw new TypeError();
          f = _;
        }
      }
      return f;
    }
    function $(a, o, s) {
      var f = F.get(a);
      if (E(f)) {
        if (!s)
          return;
        f = new Q(), F.set(a, f);
      }
      var h = f.get(o);
      if (E(h)) {
        if (!s)
          return;
        h = new Q(), f.set(o, h);
      }
      return h;
    }
    function lt(a, o, s) {
      var f = k(a, o, s);
      if (f)
        return !0;
      var h = tt(o);
      return U(h) ? !1 : lt(a, h, s);
    }
    function k(a, o, s) {
      var f = $(
        o,
        s,
        /*Create*/
        !1
      );
      return E(f) ? !1 : se(f.has(a));
    }
    function pt(a, o, s) {
      var f = k(a, o, s);
      if (f)
        return _t(a, o, s);
      var h = tt(o);
      if (!U(h))
        return pt(a, h, s);
    }
    function _t(a, o, s) {
      var f = $(
        o,
        s,
        /*Create*/
        !1
      );
      if (!E(f))
        return f.get(a);
    }
    function dt(a, o, s, f) {
      var h = $(
        s,
        f,
        /*Create*/
        !0
      );
      h.set(a, o);
    }
    function yt(a, o) {
      var s = wt(a, o), f = tt(a);
      if (f === null)
        return s;
      var h = yt(f, o);
      if (h.length <= 0)
        return s;
      if (s.length <= 0)
        return h;
      for (var P = new Vt(), _ = [], d = 0, l = s; d < l.length; d++) {
        var w = l[d], v = P.has(w);
        v || (P.add(w), _.push(w));
      }
      for (var Y = 0, Ot = h; Y < Ot.length; Y++) {
        var w = Ot[Y], v = P.has(w);
        v || (P.add(w), _.push(w));
      }
      return _;
    }
    function wt(a, o) {
      var s = [], f = $(
        a,
        o,
        /*Create*/
        !1
      );
      if (E(f))
        return s;
      for (var h = f.keys(), P = ce(h), _ = 0; ; ) {
        var d = le(P);
        if (!d)
          return s.length = _, s;
        var l = he(d);
        try {
          s[_] = l;
        } catch (w) {
          try {
            pe(P);
          } finally {
            throw w;
          }
        }
        _++;
      }
    }
    function vt(a) {
      if (a === null)
        return 1;
      switch (typeof a) {
        case "undefined":
          return 0;
        case "boolean":
          return 2;
        case "string":
          return 3;
        case "symbol":
          return 4;
        case "number":
          return 5;
        case "object":
          return a === null ? 1 : 6;
        default:
          return 6;
      }
    }
    function E(a) {
      return a === void 0;
    }
    function U(a) {
      return a === null;
    }
    function ae(a) {
      return typeof a == "symbol";
    }
    function O(a) {
      return typeof a == "object" ? a !== null : typeof a == "function";
    }
    function ie(a, o) {
      switch (vt(a)) {
        case 0:
          return a;
        case 1:
          return a;
        case 2:
          return a;
        case 3:
          return a;
        case 4:
          return a;
        case 5:
          return a;
      }
      var s = o === 3 ? "string" : o === 5 ? "number" : "default", f = Et(a, i);
      if (f !== void 0) {
        var h = f.call(a, s);
        if (O(h))
          throw new TypeError();
        return h;
      }
      return oe(a, s === "default" ? "number" : s);
    }
    function oe(a, o) {
      if (o === "string") {
        var s = a.toString;
        if (L(s)) {
          var f = s.call(a);
          if (!O(f))
            return f;
        }
        var h = a.valueOf;
        if (L(h)) {
          var f = h.call(a);
          if (!O(f))
            return f;
        }
      } else {
        var h = a.valueOf;
        if (L(h)) {
          var f = h.call(a);
          if (!O(f))
            return f;
        }
        var P = a.toString;
        if (L(P)) {
          var f = P.call(a);
          if (!O(f))
            return f;
        }
      }
      throw new TypeError();
    }
    function se(a) {
      return !!a;
    }
    function ue(a) {
      return "" + a;
    }
    function j(a) {
      var o = ie(
        a,
        3
        /* String */
      );
      return ae(o) ? o : ue(o);
    }
    function gt(a) {
      return Array.isArray ? Array.isArray(a) : a instanceof Object ? a instanceof Array : Object.prototype.toString.call(a) === "[object Array]";
    }
    function L(a) {
      return typeof a == "function";
    }
    function mt(a) {
      return typeof a == "function";
    }
    function fe(a) {
      switch (vt(a)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function Et(a, o) {
      var s = a[o];
      if (s != null) {
        if (!L(s))
          throw new TypeError();
        return s;
      }
    }
    function ce(a) {
      var o = Et(a, u);
      if (!L(o))
        throw new TypeError();
      var s = o.call(a);
      if (!O(s))
        throw new TypeError();
      return s;
    }
    function he(a) {
      return a.value;
    }
    function le(a) {
      var o = a.next();
      return o.done ? !1 : o;
    }
    function pe(a) {
      var o = a.return;
      o && o.call(a);
    }
    function tt(a) {
      var o = Object.getPrototypeOf(a);
      if (typeof a != "function" || a === W || o !== W)
        return o;
      var s = a.prototype, f = s && Object.getPrototypeOf(s);
      if (f == null || f === Object.prototype)
        return o;
      var h = f.constructor;
      return typeof h != "function" || h === a ? o : h;
    }
    function _e() {
      var a = {}, o = [], s = (
        /** @class */
        function() {
          function _(d, l, w) {
            this._index = 0, this._keys = d, this._values = l, this._selector = w;
          }
          return _.prototype["@@iterator"] = function() {
            return this;
          }, _.prototype[u] = function() {
            return this;
          }, _.prototype.next = function() {
            var d = this._index;
            if (d >= 0 && d < this._keys.length) {
              var l = this._selector(this._keys[d], this._values[d]);
              return d + 1 >= this._keys.length ? (this._index = -1, this._keys = o, this._values = o) : this._index++, { value: l, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, _.prototype.throw = function(d) {
            throw this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), d;
          }, _.prototype.return = function(d) {
            return this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), { value: d, done: !0 };
          }, _;
        }()
      );
      return (
        /** @class */
        function() {
          function _() {
            this._keys = [], this._values = [], this._cacheKey = a, this._cacheIndex = -2;
          }
          return Object.defineProperty(_.prototype, "size", {
            get: function() {
              return this._keys.length;
            },
            enumerable: !0,
            configurable: !0
          }), _.prototype.has = function(d) {
            return this._find(
              d,
              /*insert*/
              !1
            ) >= 0;
          }, _.prototype.get = function(d) {
            var l = this._find(
              d,
              /*insert*/
              !1
            );
            return l >= 0 ? this._values[l] : void 0;
          }, _.prototype.set = function(d, l) {
            var w = this._find(
              d,
              /*insert*/
              !0
            );
            return this._values[w] = l, this;
          }, _.prototype.delete = function(d) {
            var l = this._find(
              d,
              /*insert*/
              !1
            );
            if (l >= 0) {
              for (var w = this._keys.length, v = l + 1; v < w; v++)
                this._keys[v - 1] = this._keys[v], this._values[v - 1] = this._values[v];
              return this._keys.length--, this._values.length--, d === this._cacheKey && (this._cacheKey = a, this._cacheIndex = -2), !0;
            }
            return !1;
          }, _.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = a, this._cacheIndex = -2;
          }, _.prototype.keys = function() {
            return new s(this._keys, this._values, f);
          }, _.prototype.values = function() {
            return new s(this._keys, this._values, h);
          }, _.prototype.entries = function() {
            return new s(this._keys, this._values, P);
          }, _.prototype["@@iterator"] = function() {
            return this.entries();
          }, _.prototype[u] = function() {
            return this.entries();
          }, _.prototype._find = function(d, l) {
            return this._cacheKey !== d && (this._cacheIndex = this._keys.indexOf(this._cacheKey = d)), this._cacheIndex < 0 && l && (this._cacheIndex = this._keys.length, this._keys.push(d), this._values.push(void 0)), this._cacheIndex;
          }, _;
        }()
      );
      function f(_, d) {
        return _;
      }
      function h(_, d) {
        return d;
      }
      function P(_, d) {
        return [_, d];
      }
    }
    function de() {
      return (
        /** @class */
        function() {
          function a() {
            this._map = new Q();
          }
          return Object.defineProperty(a.prototype, "size", {
            get: function() {
              return this._map.size;
            },
            enumerable: !0,
            configurable: !0
          }), a.prototype.has = function(o) {
            return this._map.has(o);
          }, a.prototype.add = function(o) {
            return this._map.set(o, o), this;
          }, a.prototype.delete = function(o) {
            return this._map.delete(o);
          }, a.prototype.clear = function() {
            this._map.clear();
          }, a.prototype.keys = function() {
            return this._map.keys();
          }, a.prototype.values = function() {
            return this._map.values();
          }, a.prototype.entries = function() {
            return this._map.entries();
          }, a.prototype["@@iterator"] = function() {
            return this.keys();
          }, a.prototype[u] = function() {
            return this.keys();
          }, a;
        }()
      );
    }
    function ye() {
      var a = 16, o = N.create(), s = f();
      return (
        /** @class */
        function() {
          function l() {
            this._key = f();
          }
          return l.prototype.has = function(w) {
            var v = h(
              w,
              /*create*/
              !1
            );
            return v !== void 0 ? N.has(v, this._key) : !1;
          }, l.prototype.get = function(w) {
            var v = h(
              w,
              /*create*/
              !1
            );
            return v !== void 0 ? N.get(v, this._key) : void 0;
          }, l.prototype.set = function(w, v) {
            var Y = h(
              w,
              /*create*/
              !0
            );
            return Y[this._key] = v, this;
          }, l.prototype.delete = function(w) {
            var v = h(
              w,
              /*create*/
              !1
            );
            return v !== void 0 ? delete v[this._key] : !1;
          }, l.prototype.clear = function() {
            this._key = f();
          }, l;
        }()
      );
      function f() {
        var l;
        do
          l = "@@WeakMap@@" + d();
        while (N.has(o, l));
        return o[l] = !0, l;
      }
      function h(l, w) {
        if (!n.call(l, s)) {
          if (!w)
            return;
          Object.defineProperty(l, s, { value: N.create() });
        }
        return l[s];
      }
      function P(l, w) {
        for (var v = 0; v < w; ++v)
          l[v] = Math.random() * 255 | 0;
        return l;
      }
      function _(l) {
        return typeof Uint8Array == "function" ? typeof crypto < "u" ? crypto.getRandomValues(new Uint8Array(l)) : typeof msCrypto < "u" ? msCrypto.getRandomValues(new Uint8Array(l)) : P(new Uint8Array(l), l) : P(new Array(l), l);
      }
      function d() {
        var l = _(a);
        l[6] = l[6] & 79 | 64, l[8] = l[8] & 191 | 128;
        for (var w = "", v = 0; v < a; ++v) {
          var Y = l[v];
          (v === 4 || v === 6 || v === 8) && (w += "-"), Y < 16 && (w += "0"), w += Y.toString(16).toLowerCase();
        }
        return w;
      }
    }
    function et(a) {
      return a.__ = void 0, delete a.__, a;
    }
  });
})(St || (St = {}));
var xe = Object.defineProperty, M = (e, t) => xe(e, "name", { value: t, configurable: !0 }), C = Nt();
function Yt() {
  J("watcher") || Mt("watcher", ({ eventName: e, instance: t, key: n, options: r }) => {
    const i = typeof t[n] == "function" ? t[n].bind(t) : (u) => t[n] = u;
    if (r != null && r.once) {
      const u = /* @__PURE__ */ M(() => {
        i(), C.off(e);
      }, "handler");
      C.on(e, u);
    } else
      C.on(e, i);
    return () => C.off(e);
  }), J("storage") || Mt("storage", ({ tag: e, key: t, instance: n, toJSON: r, toString: i }) => {
    e = `phecda:${t ? `${e}-${t}` : e}`;
    const u = localStorage.getItem(e);
    if (u) {
      const c = r(u);
      if (t)
        n[t] = c;
      else
        for (const p in c)
          p && (n[p] = c[p]);
    }
    localStorage.setItem(e, i(t ? n[t] : n)), globalThis.addEventListener("beforeunload", () => {
      localStorage.setItem(e, i(t ? n[t] : n));
    });
  });
}
M(Yt, "defaultWebInject");
function at(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
M(at, "isObject");
function st(e, t) {
  for (const n in t) {
    if (!t.hasOwnProperty(n))
      continue;
    const r = t[n], i = e[n];
    at(i) && at(r) && e.hasOwnProperty(n) ? e[n] = st(i, r) : e[n] = r;
  }
  return e;
}
M(st, "deepMerge");
function Ut(...e) {
  return Promise.all(e.map((t) => t.__PROMISE_SYMBOL__));
}
M(Ut, "wait");
function Lt(e, t) {
  return Reflect.getMetadata("design:paramtypes", e, t);
}
M(Lt, "getParamtypes");
var ut = /* @__PURE__ */ new Map();
function Wt(e, t) {
  ut.set(e, t);
}
M(Wt, "setDefaultPhecda");
function $t(e) {
  return ut.get(e);
}
M($t, "getDefaultPhecda");
function Ne(e) {
  return ut.delete(e);
}
M(Ne, "delDefaultPhecda");
var nt = /* @__PURE__ */ new WeakMap();
function z(e, t) {
  if (!nt.has(e)) {
    const n = /* @__PURE__ */ new WeakMap();
    nt.set(e, new Proxy(e, {
      get(r, i) {
        return typeof r[i] == "function" && i !== "constructor" && !r[i].toString().startsWith("(") ? (n.has(r[i]) || n.set(r[i], t ? t(r, i) : r[i].bind(r)), n.get(r[i])) : r[i];
      }
    }));
  }
  return nt.get(e);
}
M(z, "bindMethod");
var H, Ye = (H = class {
  constructor(t, n) {
    R(this, "namespace");
    R(this, "parseModule");
    /**
    * for ssr or manual inject
    */
    R(this, "memory");
    R(this, "state");
    R(this, "modelMap");
    R(this, "emitter");
    this.namespace = t, this.parseModule = n, this.memory = {}, this.state = {}, this.modelMap = /* @__PURE__ */ new WeakMap(), this.emitter = Nt(), typeof window < "u" && (Yt(), Wt(t, this));
  }
  // @ts-expect-error internal
  then(t, n) {
    const r = this.then;
    return this.then = void 0, Ut(...Object.values(this.state)).then(() => t == null ? void 0 : t(this), n).then(() => {
      this.then = r;
    }), this;
  }
  /**
  *   Initialize a module that has not been created yet, and return it directly if it is cached.
  */
  init(t) {
    const n = A(t), r = /* @__PURE__ */ M(() => {
      const p = Lt(t);
      let m;
      if (this.emit("Instantiate", {
        tag: n
      }), p) {
        const N = [];
        for (const W in p)
          N[W] = this.init(p[W]);
        m = this.parseModule(new t(...N));
      } else
        m = this.parseModule(new t());
      return n in this.memory && Object.assign(m, this.memory[n]), typeof window < "u" && (this.emit("Initialize", {
        tag: n
      }), Pt("init", m)), m;
    }, "initModel"), { state: i, modelMap: u } = this;
    if (it(t.prototype, "isolate"))
      return r();
    if (n in i)
      return u.get(i[n]) !== t && (this.emit("Synonym", {
        tag: n
      }), console.warn(`Synonym model: Module taged "${String(n)}" has been loaded before, so won't load Module "${t.name}"`)), i[n];
    const c = r();
    return i[n] = c, u.set(c, t), c;
  }
  patch(t, n) {
    const r = A(t), { state: i } = this;
    this.emit("Patch", {
      tag: r,
      data: n
    }), st(i[r], n);
  }
  wait(...t) {
    return Promise.all(t.map((n) => (typeof n == "function" && (n = A(n)), this.get(n).__PROMISE_SYMBOL__)));
  }
  get(t) {
    const { state: n } = this, r = typeof t == "function" ? A(t) : t;
    return n[r];
  }
  getModel(t) {
    const { state: n } = this;
    return this.modelMap.get(n[t]);
  }
  reset(t) {
    const { state: n } = this, r = A(t);
    if (!(r in n))
      return this.init(t);
    this.emit("Reset", {
      tag: r
    });
    const i = this.init(t), u = new t();
    Object.assign(i, u);
    for (const c in i)
      c in u || delete i[c];
  }
  async unmount(t) {
    const n = typeof t == "function" ? A(t) : t;
    if (!this.has(n))
      return;
    this.emit("Unmount", {
      tag: n
    });
    const { state: r } = this;
    await Pt("unmount", this.get(n)), delete r[n];
  }
  async unmountAll() {
    const { state: t } = this;
    return Promise.all(Object.keys(t).map((n) => this.unmount(n)));
  }
  has(t) {
    const { state: n } = this;
    return (typeof t == "function" ? A(t) : t) in n;
  }
  serialize() {
    const { state: t } = this;
    return JSON.stringify(t, (n, r) => {
      if (this.modelMap.has(r))
        return null;
    });
  }
  load(t) {
    const n = JSON.parse(t);
    this.emit("Load", {
      data: n
    });
    for (const r in n)
      r in this.state ? Object.assign(this.state[r], n[r]) : this.memory[r] = n[r];
  }
  emit(t, n) {
    this.emitter.emit(t, n);
  }
  on(t, n) {
    this.emitter.on(t, n);
  }
}, M(H, "WebPhecda"), H), G, $n = (G = class extends X {
  constructor() {
    super(...arguments);
    R(this, "emitter", C);
  }
}, M(G, "WebBase"), G), Ue = Object.defineProperty, g = (e, t) => Ue(e, "name", { value: t, configurable: !0 });
function Le(e, t) {
  const n = `[phecda-vue]: ${e}`;
  t === "error" ? console.error(n) : t === "warn" ? console.warn(n) : console.log(n);
}
g(Le, "toastMessage");
var Ht = Symbol(void 0), B, We = (B = class extends Ye {
  constructor() {
    super(...arguments);
    R(this, "vueApp");
  }
  install(n) {
    n.provide(Ht, this), this.vueApp = n;
  }
}, g(B, "VuePhecda"), B);
function $e(e) {
  const t = new We("vue", (n) => z(it(n, "shallow") ? ge(n) : me(n), void 0));
  return e == null || e.forEach((n) => t.init(n)), t;
}
g($e, "createPhecda");
function He(e, t) {
  let n = Object.getPrototypeOf(e);
  for (; n; ) {
    if (n.hasOwnProperty(t))
      return n;
    n = Object.getPrototypeOf(n);
  }
  return null;
}
g(He, "findPrototypeWithMethod");
function Ge(e) {
  const t = /* @__PURE__ */ new Set();
  for (e = Object.getPrototypeOf(e); e.constructor.name !== "Object"; )
    Object.getOwnPropertyNames(e).forEach((n) => {
      typeof Object.getOwnPropertyDescriptor(e, n).value == "function" && n !== "constructor" && t.add(n);
    }), e = Object.getPrototypeOf(e);
  return [
    ...t
  ];
}
g(Ge, "getAllMethods");
function Be(e) {
  const t = /* @__PURE__ */ new Set();
  for (e = Object.getPrototypeOf(e); e.constructor.name !== "Object"; )
    Object.getOwnPropertyNames(e).forEach((n) => {
      typeof Object.getOwnPropertyDescriptor(e, n).get == "function" && t.add(n);
    }), e = Object.getPrototypeOf(e);
  return [
    ...t
  ];
}
g(Be, "getAllGetters");
function Ve(e) {
  return Ee(e);
}
g(Ve, "markRaw");
function ft(e) {
  let t = 0, n, r;
  const i = /* @__PURE__ */ g(() => {
    r && --t <= 0 && (r.stop(), n = r = null);
  }, "dispose"), u = /* @__PURE__ */ g(() => (t++, n || (r = Se(!0), n = r.run(() => e())), Te(i), n), "cb");
  return u.r = !0, u;
}
g(ft, "createSharedReactive");
var S = /* @__PURE__ */ new WeakMap();
function Ke(e) {
  return Tt(Gt(e));
}
g(Ke, "useRaw");
function Fe(e) {
  return Tt(Bt(e));
}
g(Fe, "getRaw");
function ct() {
  if (!Oe())
    throw new Error("[phecda-vue]: use hook inside component setup function");
  const e = Pe(Ht);
  if (!e)
    throw new Error("[phecda-vue]: must install the vue plugin ");
  return S.has(e) || S.set(e, z(e)), S.get(e);
}
g(ct, "usePhecda");
function Je(e) {
}
g(Je, "setStateToComponent");
function ht(e) {
  const t = e || $t("vue");
  if (!t)
    throw new Error("[phecda-vue]:  manually inject the phecda instance if there is no default phecda");
  return S.has(t) || S.set(t, z(t)), S.get(t);
}
g(ht, "getPhecda");
function Xe(e, t) {
  return Me(() => {
    C.off(e, t);
  }), C.on(e, t), {
    emit: /* @__PURE__ */ g((n) => C.emit(e, n), "emit"),
    cancel: /* @__PURE__ */ g(() => C.off(e, t), "cancel")
  };
}
g(Xe, "useEvent");
function Gt(e) {
  return ct().init(e);
}
g(Gt, "useR");
function Bt(e, t) {
  return ht(t).init(e);
}
g(Bt, "getR");
function qe(e) {
  const t = ct().init(e);
  if (S.has(t))
    return S.get(t);
  const n = {}, r = new Proxy(t, {
    get(i, u) {
      var p;
      if (typeof i[u] == "function" || (p = i[u]) != null && p.__v_skip)
        return i[u];
      const c = n[u];
      return c && c.r ? c() : (n[u] = ft(() => At(i, u)), n[u]());
    },
    set() {
      return !1;
    }
  });
  return S.set(t, r), r;
}
g(qe, "useV");
function ze(e, t) {
  const n = ht(t).init(e);
  if (S.has(n))
    return S.get(n);
  const r = {}, i = new Proxy(n, {
    get(u, c) {
      var m;
      if (typeof u[c] == "function" || (m = u[c]) != null && m.__v_skip)
        return u[c];
      const p = r[c];
      return p && p.r ? p() : (r[c] = ft(() => At(u, c)), r[c]());
    },
    set() {
      return !1;
    }
  });
  return S.set(n, i), i;
}
g(ze, "getV");
function Ze(e) {
  q(e.prototype, "shallow", !0);
}
g(Ze, "Shallow");
function Qe(e) {
  return (t, n) => {
    b(t, n);
    let r;
    T(t, n, {
      init(i) {
        if (typeof i[n] != "function")
          throw new Error("WatchEffect must decorate function");
        r = be(i[n].bind(i), e);
      },
      unmount() {
        return r == null ? void 0 : r();
      }
    });
  };
}
g(Qe, "WatchEffect");
export {
  Nn as $,
  jn as A,
  X as B,
  cn as C,
  xt as D,
  Yn as E,
  xn as F,
  Rn as G,
  hn as H,
  sn as I,
  Ln as J,
  fn as K,
  Sn as L,
  ln as M,
  Tn as N,
  On as O,
  y as P,
  bn as Q,
  Dn as R,
  Ze as S,
  An as T,
  I as U,
  We as V,
  Qe as W,
  Un as X,
  Cn as Y,
  In as Z,
  De as _,
  ft as a,
  rt as a0,
  En as a1,
  gn as a2,
  it as a3,
  pn as a4,
  V as a5,
  K as a6,
  J as a7,
  rn as a8,
  on as a9,
  an as aa,
  Ct as ab,
  nn as ac,
  x as ad,
  Mn as ae,
  Ce as af,
  Re as ag,
  A as ah,
  D as ai,
  Pt as aj,
  ot as ak,
  en as al,
  _n as am,
  q as an,
  jt as ao,
  T as ap,
  je as aq,
  Mt as ar,
  Pn as as,
  Rt as at,
  b as au,
  mn as av,
  dn as aw,
  yn as ax,
  wn as ay,
  vn as az,
  ht as b,
  $e as c,
  Bt as d,
  Fe as e,
  ze as f,
  Wn as g,
  Xe as h,
  ct as i,
  Ke as j,
  qe as k,
  $n as l,
  Ve as m,
  Ye as n,
  z as o,
  Ht as p,
  Yt as q,
  Ne as r,
  C as s,
  $t as t,
  Gt as u,
  ut as v,
  Wt as w,
  Ut as x,
  un as y,
  Dt as z
};
