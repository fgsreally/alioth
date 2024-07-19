var Me = Object.defineProperty;
var Se = (e, t, n) => t in e ? Me(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var D = (e, t, n) => (Se(e, typeof t != "symbol" ? t + "" : t, n), n);
import { s as Te, r as Ae, m as je, t as Dt, h as Ce, i as Ie, o as Re, w as De, e as xe, a as Ne, b as xt } from "./runtime-core.esm-bundler-97d4f4f9.js";
var Ye = Object.defineProperty, Le = Object.getOwnPropertyDescriptor, Nt = (e, t, n, r) => {
  for (var i = r > 1 ? void 0 : r ? Le(t, n) : t, s = e.length - 1, f; s >= 0; s--)
    (f = e[s]) && (i = (r ? f(t, n, i) : f(i)) || i);
  return r && i && Ye(t, n, i), i;
}, C = Symbol("phecda"), v = Symbol("phecda");
function yn(e) {
  return typeof e == "function" ? !!e.prototype[v] : !1;
}
function N(e) {
  e && (e.hasOwnProperty(v) || (e[v] = {
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
function Y(e) {
  return typeof e == "function" ? e.prototype : e.hasOwnProperty(v) ? e : Object.getPrototypeOf(e);
}
function S(e, t) {
  t || (t = C, e = e.prototype), N(e), e[v].__STATE_KEY.add(t), Yt(e, t);
}
function Yt(e, t) {
  t || (t = C, e = e.prototype), N(e), e[v].__EXPOSE_KEY.add(t);
}
function Ue(e, t) {
  t || (t = C, e = e.prototype), N(e), e[v].__IGNORE_KEY.add(t);
}
function A(e, t, n) {
  t || (t = C, e = e.prototype), N(e), e[v].__STATE_HANDLER__.has(t) ? e[v].__STATE_HANDLER__.get(t).push(n) : e[v].__STATE_HANDLER__.set(t, [n]);
}
function Lt(e, t, n) {
  t || (t = C, e = e.prototype), N(e), e[v].__STATE_NAMESPACE__.set(t, n);
}
function wn(e) {
  return [...Y(e)[v].__STATE_KEY];
}
function We(e) {
  let t = Y(e);
  const n = /* @__PURE__ */ new Set();
  for (; t != null && t[v]; )
    t.hasOwnProperty(v) && t[v].__STATE_KEY.forEach((r) => n.add(r)), t = Object.getPrototypeOf(t);
  return [...n];
}
function mn(e) {
  const t = Y(e);
  return [...t[v].__EXPOSE_KEY].filter((n) => !t[v].__IGNORE_KEY.has(n));
}
function K(e) {
  let t = Y(e);
  const n = /* @__PURE__ */ new Set(), r = t;
  for (; t != null && t[v]; )
    t.hasOwnProperty(v) && [...t[v].__EXPOSE_KEY].forEach((i) => !r[v].__IGNORE_KEY.has(i) && n.add(i)), t = Object.getPrototypeOf(t);
  return [...n];
}
function gn(e) {
  var n;
  return [...(n = Y(e)[v]) == null ? void 0 : n.__IGNORE_KEY];
}
function On(e, t) {
  var r;
  return ((r = Y(e)[v]) == null ? void 0 : r.__STATE_HANDLER__.get(t)) || [];
}
function F(e, t) {
  var i;
  let n = Y(e);
  const r = /* @__PURE__ */ new Set();
  for (; n != null && n[v] && !(n.hasOwnProperty(v) && ((i = n[v].__STATE_HANDLER__.get(t)) == null || i.forEach((s) => r.add(s)), n[v].__CLEAR_KEY.has(t))); )
    n = Object.getPrototypeOf(n);
  return [...r];
}
function $e(e, t = C) {
  let n = Y(e), r = {};
  for (; n != null && n[v]; ) {
    if (n.hasOwnProperty(v)) {
      const i = n[v].__STATE_NAMESPACE__.get(t);
      if (i && (r = { ...i, ...r }), n[v].__CLEAR_KEY.has(t))
        break;
    }
    n = Object.getPrototypeOf(n);
  }
  return r;
}
function Ut(e, t = C) {
  return Y(e)[v].__STATE_NAMESPACE__.get(t) || {};
}
function Mt(e, t) {
  const r = K(t).map((i) => F(t, i).filter((s) => !!s[e]).map((s) => s[e](t))).flat();
  return t.__PROMISE_SYMBOL__ = Promise.all(r);
}
function q(e, t, n) {
  N(e), e[`__${t.toUpperCase()}__`] = n;
}
function st(e, t) {
  return e[`__${t.toUpperCase()}__`];
}
function En(e, t) {
  S(e, t), A(e, t, {
    async init(n) {
      return n[t]();
    }
  });
}
function He(e, t) {
  S(e, t), A(e, t, {
    async unmount(n) {
      return n[t]();
    }
  });
}
function Pn(e) {
  return (t, n) => {
    S(t, n), Lt(t, n, {
      value: e
    });
  };
}
function bn(e, t) {
  t || (e = e.prototype, t = C), Ue(e, t);
}
function Mn(e, t) {
  t || (e = e.prototype, t = C), N(e), e[v].__CLEAR_KEY.add(t);
}
function Sn(e, t) {
  Yt(e, t);
}
function Wt(e) {
  N(e.prototype);
}
function Tn() {
  return (e) => Wt(e);
}
function j(e) {
  return typeof e == "object" && (e = e.constructor), st(e.prototype, "tag") || e.name;
}
function An(e) {
  const t = new e(), n = We(t), r = {};
  for (const i of n) {
    const s = $e(t, i);
    s.value && (r[i] = s.value);
  }
  return r;
}
function jn(e, t) {
  const n = new e(), r = K(n);
  for (const i of r)
    n[i] = t[i];
  return n;
}
function Cn(e, t = !1) {
  const n = [], r = K(e), i = n.push.bind(n);
  for (const s of r) {
    const f = F(e, s);
    if (f)
      for (const l of f) {
        const m = l.pipe;
        if (m && (m(e, i), n.length && !t))
          return n;
      }
  }
  return n;
}
async function In(e, t = !1) {
  const n = [], r = K(e), i = n.push.bind(n);
  for (const s of r) {
    const f = F(e, s);
    if (f)
      for (const l of f) {
        const m = l.pipe;
        if (m && (await m(e, i), n.length && !t))
          return n;
      }
  }
  return n;
}
function Rn(e, t, n = !1) {
  const r = [], i = F(e, t), s = r.push.bind(r);
  if (i)
    for (const f of i) {
      const l = f.pipe;
      if (l && (l(e, s), r.length && !n))
        return r;
    }
  return r;
}
async function Dn(e, t, n = !1) {
  const r = [], i = F(e, t), s = r.push.bind(r);
  if (i)
    for (const f of i) {
      const l = f.pipe;
      if (l && (await l(e, s), r.length && !n))
        return r;
    }
  return r;
}
function xn(e) {
  const t = {}, n = K(e);
  for (const r of n)
    t[r] = e[r];
  return JSON.parse(JSON.stringify(t));
}
function Nn(e) {
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
function Yn(e, t, n) {
  n(t ? e.prototype : e, t);
}
function Ln(...e) {
  return (...t) => {
    for (const n of e)
      n(...t);
  };
}
function ut(e) {
  return e[Symbol.toStringTag] === "AsyncFunction";
}
function Un(e, t, n) {
  S(e, t);
  const r = Ut(e, t) || {};
  n(r), Lt(e, t, r);
}
function Wn(e, t) {
  const n = Ut(e, C) || {};
  return t(n);
}
var $t = {};
function $n(e, t) {
  $t[e] = t;
}
function Hn(e) {
  return $t[e];
}
var ot = {};
function St(e, t) {
  return ot[e] = t, ot;
}
function z(e) {
  return ot[e];
}
function Gn(e) {
  q(e.prototype, "isolate", !0);
}
function Bn(e) {
  return (t) => {
    q(t.prototype, "tag", e);
  };
}
function Vn(e) {
  return (t) => {
    q(t.prototype, "tag", Symbol(e || t.name));
  };
}
function Kn(e) {
  return (t) => {
    S(t), A(t, void 0, {
      init: async (n) => {
        const r = await e(n);
        if (r && typeof r == "object" && !Array.isArray(r))
          for (const i in r)
            n[i] = r[i];
      }
    });
  };
}
function Fn(e) {
  S(e), A(e, void 0, {
    init: async (t) => {
      const n = j(t);
      globalThis.__PHECDA__ || (globalThis.__PHECDA__ = {}), globalThis.__PHECDA__[n] = t.constructor;
    }
  });
}
function Jn(...e) {
  return (t, n) => {
    S(t, n), A(t, n, {
      async pipe(r, i) {
        for (const s of e)
          try {
            ut(s) ? r[n] = await s(r[n], r, n) : r[n] = s(r[n], r, n);
          } catch (f) {
            i(f.message);
          }
      }
    });
  };
}
function zn(e, t) {
  return (n, r) => {
    S(n, r), A(n, r, {
      async pipe(i, s) {
        let f;
        ut(e) ? f = await e(i[r]) : f = e(i[r]), f || s(typeof t == "string" ? t : t());
      }
    });
  };
}
function Xn(e, t = !1) {
  return (n, r) => {
    S(n, r), A(n, r, {
      init: (i) => {
        if (typeof i[r] == "function") {
          const s = i[r].bind(i);
          ut(s) ? i[r] = async (...f) => {
            try {
              await s(...f);
            } catch (l) {
              if (e(l, i, r), !t)
                throw l;
            }
          } : i[r] = (...f) => {
            try {
              s(...f);
            } catch (l) {
              if (e(l, i, r), !t)
                throw l;
            }
          };
        }
      }
    });
  };
}
function qn(e, t) {
  let n;
  return (r, i) => {
    S(r, i), A(r, i, {
      init(s) {
        var f;
        return n = (f = z("watcher")) == null ? void 0 : f({ eventName: e, instance: s, key: i, options: t });
      },
      unmount() {
        return n == null ? void 0 : n();
      }
    });
  };
}
function Zn(e) {
  return (t, n) => {
    S(t, n), A(t, n, {
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
function Qn({ key: e, json: t, stringify: n } = {}) {
  return t || (t = (r) => JSON.parse(r)), n || (n = (r) => JSON.stringify(r)), (r, i) => {
    const s = e || j(r);
    N(r), S(r, i), A(r, i, {
      init: (f) => {
        var l;
        return (l = z("storage")) == null ? void 0 : l({ instance: f, key: i, tag: s, toJSON: t, toString: n });
      }
    });
  };
}
function kn(e, ...t) {
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
    return j(this);
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
Nt([
  He
], X.prototype, "_unmount", 1);
X = Nt([
  Wt
], X);
function Ht(e) {
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
var Tt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
var At;
(function(e) {
  (function(t) {
    var n = typeof Tt == "object" ? Tt : typeof self == "object" ? self : typeof this == "object" ? this : Function("return this;")(), r = i(e);
    typeof n.Reflect > "u" ? n.Reflect = e : r = i(n.Reflect, r), t(r);
    function i(s, f) {
      return function(l, m) {
        typeof s[l] != "function" && Object.defineProperty(s, l, { configurable: !0, writable: !0, value: m }), f && f(l, m);
      };
    }
  })(function(t) {
    var n = Object.prototype.hasOwnProperty, r = typeof Symbol == "function", i = r && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", s = r && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", f = typeof Object.create == "function", l = { __proto__: [] } instanceof Array, m = !f && !l, O = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: f ? function() {
        return nt(/* @__PURE__ */ Object.create(null));
      } : l ? function() {
        return nt({ __proto__: null });
      } : function() {
        return nt({});
      },
      has: m ? function(o, a) {
        return n.call(o, a);
      } : function(o, a) {
        return a in o;
      },
      get: m ? function(o, a) {
        return n.call(o, a) ? o[a] : void 0;
      } : function(o, a) {
        return o[a];
      }
    }, I = Object.getPrototypeOf(Function), Q = typeof process == "object" && process["env"] && process["env"].REFLECT_METADATA_USE_MAP_POLYFILL === "true", k = !Q && typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Ee(), Qt = !Q && typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Pe(), kt = !Q && typeof WeakMap == "function" ? WeakMap : be(), J = new kt();
    function te(o, a, u, c) {
      if (E(u)) {
        if (!Ot(o))
          throw new TypeError();
        if (!Et(a))
          throw new TypeError();
        return ce(o, a);
      } else {
        if (!Ot(o))
          throw new TypeError();
        if (!P(a))
          throw new TypeError();
        if (!P(c) && !E(c) && !U(c))
          throw new TypeError();
        return U(c) && (c = void 0), u = R(u), le(o, a, u, c);
      }
    }
    t("decorate", te);
    function ee(o, a) {
      function u(c, h) {
        if (!P(c))
          throw new TypeError();
        if (!E(h) && !ye(h))
          throw new TypeError();
        yt(o, a, c, h);
      }
      return u;
    }
    t("metadata", ee);
    function ne(o, a, u, c) {
      if (!P(u))
        throw new TypeError();
      return E(c) || (c = R(c)), yt(o, a, u, c);
    }
    t("defineMetadata", ne);
    function re(o, a, u) {
      if (!P(a))
        throw new TypeError();
      return E(u) || (u = R(u)), dt(o, a, u);
    }
    t("hasMetadata", re);
    function oe(o, a, u) {
      if (!P(a))
        throw new TypeError();
      return E(u) || (u = R(u)), tt(o, a, u);
    }
    t("hasOwnMetadata", oe);
    function ie(o, a, u) {
      if (!P(a))
        throw new TypeError();
      return E(u) || (u = R(u)), _t(o, a, u);
    }
    t("getMetadata", ie);
    function ae(o, a, u) {
      if (!P(a))
        throw new TypeError();
      return E(u) || (u = R(u)), vt(o, a, u);
    }
    t("getOwnMetadata", ae);
    function se(o, a) {
      if (!P(o))
        throw new TypeError();
      return E(a) || (a = R(a)), wt(o, a);
    }
    t("getMetadataKeys", se);
    function ue(o, a) {
      if (!P(o))
        throw new TypeError();
      return E(a) || (a = R(a)), mt(o, a);
    }
    t("getOwnMetadataKeys", ue);
    function fe(o, a, u) {
      if (!P(a))
        throw new TypeError();
      E(u) || (u = R(u));
      var c = $(
        a,
        u,
        /*Create*/
        !1
      );
      if (E(c) || !c.delete(o))
        return !1;
      if (c.size > 0)
        return !0;
      var h = J.get(a);
      return h.delete(u), h.size > 0 || J.delete(a), !0;
    }
    t("deleteMetadata", fe);
    function ce(o, a) {
      for (var u = o.length - 1; u >= 0; --u) {
        var c = o[u], h = c(a);
        if (!E(h) && !U(h)) {
          if (!Et(h))
            throw new TypeError();
          a = h;
        }
      }
      return a;
    }
    function le(o, a, u, c) {
      for (var h = o.length - 1; h >= 0; --h) {
        var b = o[h], d = b(a, u, c);
        if (!E(d) && !U(d)) {
          if (!P(d))
            throw new TypeError();
          c = d;
        }
      }
      return c;
    }
    function $(o, a, u) {
      var c = J.get(o);
      if (E(c)) {
        if (!u)
          return;
        c = new k(), J.set(o, c);
      }
      var h = c.get(a);
      if (E(h)) {
        if (!u)
          return;
        h = new k(), c.set(a, h);
      }
      return h;
    }
    function dt(o, a, u) {
      var c = tt(o, a, u);
      if (c)
        return !0;
      var h = et(a);
      return U(h) ? !1 : dt(o, h, u);
    }
    function tt(o, a, u) {
      var c = $(
        a,
        u,
        /*Create*/
        !1
      );
      return E(c) ? !1 : _e(c.has(o));
    }
    function _t(o, a, u) {
      var c = tt(o, a, u);
      if (c)
        return vt(o, a, u);
      var h = et(a);
      if (!U(h))
        return _t(o, h, u);
    }
    function vt(o, a, u) {
      var c = $(
        a,
        u,
        /*Create*/
        !1
      );
      if (!E(c))
        return c.get(o);
    }
    function yt(o, a, u, c) {
      var h = $(
        u,
        c,
        /*Create*/
        !0
      );
      h.set(o, a);
    }
    function wt(o, a) {
      var u = mt(o, a), c = et(o);
      if (c === null)
        return u;
      var h = wt(c, a);
      if (h.length <= 0)
        return u;
      if (u.length <= 0)
        return h;
      for (var b = new Qt(), d = [], _ = 0, p = u; _ < p.length; _++) {
        var y = p[_], w = b.has(y);
        w || (b.add(y), d.push(y));
      }
      for (var L = 0, bt = h; L < bt.length; L++) {
        var y = bt[L], w = b.has(y);
        w || (b.add(y), d.push(y));
      }
      return d;
    }
    function mt(o, a) {
      var u = [], c = $(
        o,
        a,
        /*Create*/
        !1
      );
      if (E(c))
        return u;
      for (var h = c.keys(), b = we(h), d = 0; ; ) {
        var _ = ge(b);
        if (!_)
          return u.length = d, u;
        var p = me(_);
        try {
          u[d] = p;
        } catch (y) {
          try {
            Oe(b);
          } finally {
            throw y;
          }
        }
        d++;
      }
    }
    function gt(o) {
      if (o === null)
        return 1;
      switch (typeof o) {
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
          return o === null ? 1 : 6;
        default:
          return 6;
      }
    }
    function E(o) {
      return o === void 0;
    }
    function U(o) {
      return o === null;
    }
    function he(o) {
      return typeof o == "symbol";
    }
    function P(o) {
      return typeof o == "object" ? o !== null : typeof o == "function";
    }
    function pe(o, a) {
      switch (gt(o)) {
        case 0:
          return o;
        case 1:
          return o;
        case 2:
          return o;
        case 3:
          return o;
        case 4:
          return o;
        case 5:
          return o;
      }
      var u = a === 3 ? "string" : a === 5 ? "number" : "default", c = Pt(o, i);
      if (c !== void 0) {
        var h = c.call(o, u);
        if (P(h))
          throw new TypeError();
        return h;
      }
      return de(o, u === "default" ? "number" : u);
    }
    function de(o, a) {
      if (a === "string") {
        var u = o.toString;
        if (W(u)) {
          var c = u.call(o);
          if (!P(c))
            return c;
        }
        var h = o.valueOf;
        if (W(h)) {
          var c = h.call(o);
          if (!P(c))
            return c;
        }
      } else {
        var h = o.valueOf;
        if (W(h)) {
          var c = h.call(o);
          if (!P(c))
            return c;
        }
        var b = o.toString;
        if (W(b)) {
          var c = b.call(o);
          if (!P(c))
            return c;
        }
      }
      throw new TypeError();
    }
    function _e(o) {
      return !!o;
    }
    function ve(o) {
      return "" + o;
    }
    function R(o) {
      var a = pe(
        o,
        3
        /* String */
      );
      return he(a) ? a : ve(a);
    }
    function Ot(o) {
      return Array.isArray ? Array.isArray(o) : o instanceof Object ? o instanceof Array : Object.prototype.toString.call(o) === "[object Array]";
    }
    function W(o) {
      return typeof o == "function";
    }
    function Et(o) {
      return typeof o == "function";
    }
    function ye(o) {
      switch (gt(o)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function Pt(o, a) {
      var u = o[a];
      if (u != null) {
        if (!W(u))
          throw new TypeError();
        return u;
      }
    }
    function we(o) {
      var a = Pt(o, s);
      if (!W(a))
        throw new TypeError();
      var u = a.call(o);
      if (!P(u))
        throw new TypeError();
      return u;
    }
    function me(o) {
      return o.value;
    }
    function ge(o) {
      var a = o.next();
      return a.done ? !1 : a;
    }
    function Oe(o) {
      var a = o.return;
      a && a.call(o);
    }
    function et(o) {
      var a = Object.getPrototypeOf(o);
      if (typeof o != "function" || o === I || a !== I)
        return a;
      var u = o.prototype, c = u && Object.getPrototypeOf(u);
      if (c == null || c === Object.prototype)
        return a;
      var h = c.constructor;
      return typeof h != "function" || h === o ? a : h;
    }
    function Ee() {
      var o = {}, a = [], u = (
        /** @class */
        function() {
          function d(_, p, y) {
            this._index = 0, this._keys = _, this._values = p, this._selector = y;
          }
          return d.prototype["@@iterator"] = function() {
            return this;
          }, d.prototype[s] = function() {
            return this;
          }, d.prototype.next = function() {
            var _ = this._index;
            if (_ >= 0 && _ < this._keys.length) {
              var p = this._selector(this._keys[_], this._values[_]);
              return _ + 1 >= this._keys.length ? (this._index = -1, this._keys = a, this._values = a) : this._index++, { value: p, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, d.prototype.throw = function(_) {
            throw this._index >= 0 && (this._index = -1, this._keys = a, this._values = a), _;
          }, d.prototype.return = function(_) {
            return this._index >= 0 && (this._index = -1, this._keys = a, this._values = a), { value: _, done: !0 };
          }, d;
        }()
      );
      return (
        /** @class */
        function() {
          function d() {
            this._keys = [], this._values = [], this._cacheKey = o, this._cacheIndex = -2;
          }
          return Object.defineProperty(d.prototype, "size", {
            get: function() {
              return this._keys.length;
            },
            enumerable: !0,
            configurable: !0
          }), d.prototype.has = function(_) {
            return this._find(
              _,
              /*insert*/
              !1
            ) >= 0;
          }, d.prototype.get = function(_) {
            var p = this._find(
              _,
              /*insert*/
              !1
            );
            return p >= 0 ? this._values[p] : void 0;
          }, d.prototype.set = function(_, p) {
            var y = this._find(
              _,
              /*insert*/
              !0
            );
            return this._values[y] = p, this;
          }, d.prototype.delete = function(_) {
            var p = this._find(
              _,
              /*insert*/
              !1
            );
            if (p >= 0) {
              for (var y = this._keys.length, w = p + 1; w < y; w++)
                this._keys[w - 1] = this._keys[w], this._values[w - 1] = this._values[w];
              return this._keys.length--, this._values.length--, _ === this._cacheKey && (this._cacheKey = o, this._cacheIndex = -2), !0;
            }
            return !1;
          }, d.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = o, this._cacheIndex = -2;
          }, d.prototype.keys = function() {
            return new u(this._keys, this._values, c);
          }, d.prototype.values = function() {
            return new u(this._keys, this._values, h);
          }, d.prototype.entries = function() {
            return new u(this._keys, this._values, b);
          }, d.prototype["@@iterator"] = function() {
            return this.entries();
          }, d.prototype[s] = function() {
            return this.entries();
          }, d.prototype._find = function(_, p) {
            return this._cacheKey !== _ && (this._cacheIndex = this._keys.indexOf(this._cacheKey = _)), this._cacheIndex < 0 && p && (this._cacheIndex = this._keys.length, this._keys.push(_), this._values.push(void 0)), this._cacheIndex;
          }, d;
        }()
      );
      function c(d, _) {
        return d;
      }
      function h(d, _) {
        return _;
      }
      function b(d, _) {
        return [d, _];
      }
    }
    function Pe() {
      return (
        /** @class */
        function() {
          function o() {
            this._map = new k();
          }
          return Object.defineProperty(o.prototype, "size", {
            get: function() {
              return this._map.size;
            },
            enumerable: !0,
            configurable: !0
          }), o.prototype.has = function(a) {
            return this._map.has(a);
          }, o.prototype.add = function(a) {
            return this._map.set(a, a), this;
          }, o.prototype.delete = function(a) {
            return this._map.delete(a);
          }, o.prototype.clear = function() {
            this._map.clear();
          }, o.prototype.keys = function() {
            return this._map.keys();
          }, o.prototype.values = function() {
            return this._map.values();
          }, o.prototype.entries = function() {
            return this._map.entries();
          }, o.prototype["@@iterator"] = function() {
            return this.keys();
          }, o.prototype[s] = function() {
            return this.keys();
          }, o;
        }()
      );
    }
    function be() {
      var o = 16, a = O.create(), u = c();
      return (
        /** @class */
        function() {
          function p() {
            this._key = c();
          }
          return p.prototype.has = function(y) {
            var w = h(
              y,
              /*create*/
              !1
            );
            return w !== void 0 ? O.has(w, this._key) : !1;
          }, p.prototype.get = function(y) {
            var w = h(
              y,
              /*create*/
              !1
            );
            return w !== void 0 ? O.get(w, this._key) : void 0;
          }, p.prototype.set = function(y, w) {
            var L = h(
              y,
              /*create*/
              !0
            );
            return L[this._key] = w, this;
          }, p.prototype.delete = function(y) {
            var w = h(
              y,
              /*create*/
              !1
            );
            return w !== void 0 ? delete w[this._key] : !1;
          }, p.prototype.clear = function() {
            this._key = c();
          }, p;
        }()
      );
      function c() {
        var p;
        do
          p = "@@WeakMap@@" + _();
        while (O.has(a, p));
        return a[p] = !0, p;
      }
      function h(p, y) {
        if (!n.call(p, u)) {
          if (!y)
            return;
          Object.defineProperty(p, u, { value: O.create() });
        }
        return p[u];
      }
      function b(p, y) {
        for (var w = 0; w < y; ++w)
          p[w] = Math.random() * 255 | 0;
        return p;
      }
      function d(p) {
        return typeof Uint8Array == "function" ? typeof crypto < "u" ? crypto.getRandomValues(new Uint8Array(p)) : typeof msCrypto < "u" ? msCrypto.getRandomValues(new Uint8Array(p)) : b(new Uint8Array(p), p) : b(new Array(p), p);
      }
      function _() {
        var p = d(o);
        p[6] = p[6] & 79 | 64, p[8] = p[8] & 191 | 128;
        for (var y = "", w = 0; w < o; ++w) {
          var L = p[w];
          (w === 4 || w === 6 || w === 8) && (y += "-"), L < 16 && (y += "0"), y += L.toString(16).toLowerCase();
        }
        return y;
      }
    }
    function nt(o) {
      return o.__ = void 0, delete o.__, o;
    }
  });
})(At || (At = {}));
const Gt = (e, t, n = []) => {
  const r = Object.getOwnPropertyDescriptors(t);
  for (let i of n)
    delete r[i];
  Object.defineProperties(e, r);
}, H = (e, t = [e]) => {
  const n = Object.getPrototypeOf(e);
  return n === null ? t : H(n, [...t, n]);
}, Ge = (...e) => {
  if (e.length === 0)
    return;
  let t;
  const n = e.map((r) => H(r));
  for (; n.every((r) => r.length > 0); ) {
    const r = n.map((s) => s.pop()), i = r[0];
    if (r.every((s) => s === i))
      t = i;
    else
      break;
  }
  return t;
}, jt = (e, t, n = []) => {
  var r;
  const i = (r = Ge(...e)) !== null && r !== void 0 ? r : Object.prototype, s = Object.create(i), f = H(i);
  for (let l of e) {
    let m = H(l);
    for (let O = m.length - 1; O >= 0; O--) {
      let I = m[O];
      f.indexOf(I) === -1 && (Gt(s, I, ["constructor", ...n]), f.push(I));
    }
  }
  return s.constructor = t, s;
}, it = (e) => e.filter((t, n) => e.indexOf(t) == n), Bt = /* @__PURE__ */ new WeakMap(), Be = (e) => Bt.get(e), Ve = (e, t) => Bt.set(e, t), Ct = (e, t) => {
  var n, r;
  const i = it([...Object.getOwnPropertyNames(e), ...Object.getOwnPropertyNames(t)]), s = {};
  for (let f of i)
    s[f] = it([...(n = e == null ? void 0 : e[f]) !== null && n !== void 0 ? n : [], ...(r = t == null ? void 0 : t[f]) !== null && r !== void 0 ? r : []]);
  return s;
}, It = (e, t) => {
  var n, r, i, s;
  return {
    property: Ct((n = e == null ? void 0 : e.property) !== null && n !== void 0 ? n : {}, (r = t == null ? void 0 : t.property) !== null && r !== void 0 ? r : {}),
    method: Ct((i = e == null ? void 0 : e.method) !== null && i !== void 0 ? i : {}, (s = t == null ? void 0 : t.method) !== null && s !== void 0 ? s : {})
  };
}, Ke = (e, t) => {
  var n, r, i, s, f, l;
  return {
    class: it([...(n = e == null ? void 0 : e.class) !== null && n !== void 0 ? n : [], ...(r = t == null ? void 0 : t.class) !== null && r !== void 0 ? r : []]),
    static: It((i = e == null ? void 0 : e.static) !== null && i !== void 0 ? i : {}, (s = t == null ? void 0 : t.static) !== null && s !== void 0 ? s : {}),
    instance: It((f = e == null ? void 0 : e.instance) !== null && f !== void 0 ? f : {}, (l = t == null ? void 0 : t.instance) !== null && l !== void 0 ? l : {})
  };
}, Fe = /* @__PURE__ */ new Map(), Je = (...e) => {
  var t;
  const n = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set([...e]);
  for (; r.size > 0; )
    for (let i of r) {
      const s = H(i.prototype).map((O) => O.constructor), f = (t = Be(i)) !== null && t !== void 0 ? t : [], m = [...s, ...f].filter((O) => !n.has(O));
      for (let O of m)
        r.add(O);
      n.add(i), r.delete(i);
    }
  return [...n];
}, ze = (...e) => {
  const t = Je(...e).map((n) => Fe.get(n)).filter((n) => !!n);
  return t.length == 0 ? {} : t.length == 1 ? t[0] : t.reduce((n, r) => Ke(n, r));
};
function tr(...e) {
  var t, n, r;
  const i = e.map((l) => l.prototype);
  function s(...l) {
    for (const m of e)
      Gt(this, new m(...l));
  }
  s.prototype = jt(i, s), Object.setPrototypeOf(
    s,
    jt(e, null, ["prototype"])
  );
  let f = s;
  {
    const l = ze(...e);
    for (let m of (t = l == null ? void 0 : l.class) !== null && t !== void 0 ? t : []) {
      const O = m(f);
      O && (f = O);
    }
    Rt((n = l == null ? void 0 : l.static) !== null && n !== void 0 ? n : {}, f), Rt((r = l == null ? void 0 : l.instance) !== null && r !== void 0 ? r : {}, f.prototype);
  }
  return Ve(f, e), f;
}
const Rt = (e, t) => {
  const n = e.property, r = e.method;
  if (n)
    for (let i in n)
      for (let s of n[i])
        s(t, i);
  if (r)
    for (let i in r)
      for (let s of r[i])
        s(t, i, Object.getOwnPropertyDescriptor(t, i));
};
var Xe = Object.defineProperty, M = (e, t) => Xe(e, "name", { value: t, configurable: !0 }), x = Ht();
function Vt() {
  z("watcher") || St("watcher", ({ eventName: e, instance: t, key: n, options: r }) => {
    const i = typeof t[n] == "function" ? t[n].bind(t) : (s) => t[n] = s;
    if (r != null && r.once) {
      const s = /* @__PURE__ */ M(() => {
        i(), x.off(e);
      }, "handler");
      x.on(e, s);
    } else
      x.on(e, i);
    return () => x.off(e);
  }), z("storage") || St("storage", ({ tag: e, key: t, instance: n, toJSON: r, toString: i }) => {
    e = `phecda:${t ? `${e}-${t}` : e}`;
    const s = localStorage.getItem(e);
    if (s) {
      const f = r(s);
      if (t)
        n[t] = f;
      else
        for (const l in f)
          l && (n[l] = f[l]);
    }
    localStorage.setItem(e, i(t ? n[t] : n)), globalThis.addEventListener("beforeunload", () => {
      localStorage.setItem(e, i(t ? n[t] : n));
    });
  });
}
M(Vt, "defaultWebInject");
function at(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
M(at, "isObject");
function ft(e, t) {
  for (const n in t) {
    if (!t.hasOwnProperty(n))
      continue;
    const r = t[n], i = e[n];
    at(i) && at(r) && e.hasOwnProperty(n) ? e[n] = ft(i, r) : e[n] = r;
  }
  return e;
}
M(ft, "deepMerge");
function Kt(...e) {
  return Promise.all(e.map((t) => t.__PROMISE_SYMBOL__));
}
M(Kt, "wait");
function Ft(e) {
  return Reflect.getMetadata("design:paramtypes", e);
}
M(Ft, "getParamtypes");
var ct = /* @__PURE__ */ new Map();
function Jt(e, t) {
  ct.set(e, t);
}
M(Jt, "setDefaultPhecda");
function zt(e) {
  return ct.get(e);
}
M(zt, "getDefaultPhecda");
function qe(e) {
  return ct.delete(e);
}
M(qe, "delDefaultPhecda");
var rt = /* @__PURE__ */ new WeakMap();
function Z(e, t) {
  if (!rt.has(e)) {
    const n = /* @__PURE__ */ new WeakMap();
    rt.set(e, new Proxy(e, {
      get(r, i) {
        return typeof r[i] == "function" && i !== "constructor" && !r[i].toString().startsWith("(") ? (n.has(r[i]) || n.set(r[i], t ? t(r, i) : r[i].bind(r)), n.get(r[i])) : r[i];
      }
    }));
  }
  return rt.get(e);
}
M(Z, "bindMethod");
var G, Ze = (G = class {
  constructor(t, n) {
    D(this, "namespace");
    D(this, "parseModule");
    /**
    * for ssr or manual inject
    */
    D(this, "memory");
    D(this, "state");
    D(this, "modelMap");
    D(this, "emitter");
    this.namespace = t, this.parseModule = n, this.memory = {}, this.state = {}, this.modelMap = /* @__PURE__ */ new WeakMap(), this.emitter = Ht(), typeof window < "u" && (Vt(), Jt(t, this));
  }
  // @ts-expect-error internal
  then(t, n) {
    const r = this.then;
    return this.then = void 0, Kt(...Object.values(this.state)).then(() => t == null ? void 0 : t(this), n).then(() => {
      this.then = r;
    }), this;
  }
  /**
  *   Initialize a module that has not been created yet, and return it directly if it is cached.
  */
  init(t) {
    const n = j(t), r = /* @__PURE__ */ M(() => {
      const l = Ft(t);
      let m;
      if (this.emit("Instantiate", {
        tag: n
      }), l) {
        const O = [];
        for (const I in l)
          O[I] = this.init(l[I]);
        m = this.parseModule(new t(...O));
      } else
        m = this.parseModule(new t());
      return n in this.memory && Object.assign(m, this.memory[n]), typeof window < "u" && (this.emit("Initialize", {
        tag: n
      }), Mt("init", m)), m;
    }, "initModel"), { state: i, modelMap: s } = this;
    if (st(t.prototype, "isolate"))
      return r();
    if (n in i)
      return s.get(i[n]) !== t && (this.emit("Synonym", {
        tag: n
      }), console.warn(`Synonym model: Module taged "${String(n)}" has been loaded before, so won't load Module "${t.name}"`)), i[n];
    const f = r();
    return i[n] = f, s.set(f, t), f;
  }
  patch(t, n) {
    const r = j(t), { state: i } = this;
    this.emit("Patch", {
      tag: r,
      data: n
    }), ft(i[r], n);
  }
  wait(...t) {
    return Promise.all(t.map((n) => (typeof n == "function" && (n = j(n)), this.get(n).__PROMISE_SYMBOL__)));
  }
  get(t) {
    const { state: n } = this, r = typeof t == "function" ? j(t) : t;
    return n[r];
  }
  getModel(t) {
    const { state: n } = this;
    return this.modelMap.get(n[t]);
  }
  reset(t) {
    const { state: n } = this, r = j(t);
    if (!(r in n))
      return this.init(t);
    this.emit("Reset", {
      tag: r
    });
    const i = this.init(t), s = new t();
    Object.assign(i, s);
    for (const f in i)
      f in s || delete i[f];
  }
  async unmount(t) {
    const n = typeof t == "function" ? j(t) : t;
    if (!this.has(n))
      return;
    this.emit("Unmount", {
      tag: n
    });
    const { state: r } = this;
    await Mt("unmount", this.get(n)), delete r[n];
  }
  async unmountAll() {
    const { state: t } = this;
    return Promise.all(Object.keys(t).map((n) => this.unmount(n)));
  }
  has(t) {
    const { state: n } = this;
    return (typeof t == "function" ? j(t) : t) in n;
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
}, M(G, "WebPhecda"), G), B, er = (B = class extends X {
  constructor() {
    super(...arguments);
    D(this, "emitter", x);
  }
}, M(B, "WebBase"), B), Qe = Object.defineProperty, g = (e, t) => Qe(e, "name", { value: t, configurable: !0 });
function ke(e, t) {
  const n = `[phecda-vue]: ${e}`;
  t === "error" ? console.error(n) : t === "warn" ? console.warn(n) : console.log(n);
}
g(ke, "toastMessage");
var Xt = Symbol(void 0), V, tn = (V = class extends Ze {
  constructor() {
    super(...arguments);
    D(this, "vueApp");
  }
  install(n) {
    n.provide(Xt, this), this.vueApp = n;
  }
}, g(V, "VuePhecda"), V);
function en(e) {
  const t = new tn("vue", (n) => Z(st(n, "shallow") ? Te(n) : Ae(n), void 0));
  return e == null || e.forEach((n) => t.init(n)), t;
}
g(en, "createPhecda");
function nn(e, t) {
  let n = Object.getPrototypeOf(e);
  for (; n; ) {
    if (n.hasOwnProperty(t))
      return n;
    n = Object.getPrototypeOf(n);
  }
  return null;
}
g(nn, "findPrototypeWithMethod");
function rn(e) {
  const t = /* @__PURE__ */ new Set();
  for (e = Object.getPrototypeOf(e); e.constructor.name !== "Object"; )
    Object.getOwnPropertyNames(e).forEach((n) => {
      typeof Object.getOwnPropertyDescriptor(e, n).value == "function" && n !== "constructor" && t.add(n);
    }), e = Object.getPrototypeOf(e);
  return [
    ...t
  ];
}
g(rn, "getAllMethods");
function on(e) {
  const t = /* @__PURE__ */ new Set();
  for (e = Object.getPrototypeOf(e); e.constructor.name !== "Object"; )
    Object.getOwnPropertyNames(e).forEach((n) => {
      typeof Object.getOwnPropertyDescriptor(e, n).get == "function" && t.add(n);
    }), e = Object.getPrototypeOf(e);
  return [
    ...t
  ];
}
g(on, "getAllGetters");
function an(e) {
  return je(e);
}
g(an, "markRaw");
function lt(e) {
  let t = 0, n, r;
  const i = /* @__PURE__ */ g(() => {
    r && --t <= 0 && (r.stop(), n = r = null);
  }, "dispose"), s = /* @__PURE__ */ g(() => (t++, n || (r = xe(!0), n = r.run(() => e())), Ne(i), n), "cb");
  return s.r = !0, s;
}
g(lt, "createSharedReactive");
var T = /* @__PURE__ */ new WeakMap();
function sn(e) {
  return Dt(qt(e));
}
g(sn, "useRaw");
function un(e) {
  return Dt(Zt(e));
}
g(un, "getRaw");
function ht() {
  if (!Ce())
    throw new Error("[phecda-vue]: use hook inside component setup function");
  const e = Ie(Xt);
  if (!e)
    throw new Error("[phecda-vue]: must install the vue plugin ");
  return T.has(e) || T.set(e, Z(e)), T.get(e);
}
g(ht, "usePhecda");
function fn(e) {
}
g(fn, "setStateToComponent");
function pt(e) {
  const t = e || zt("vue");
  if (!t)
    throw new Error("[phecda-vue]:  manually inject the phecda instance if there is no default phecda");
  return T.has(t) || T.set(t, Z(t)), T.get(t);
}
g(pt, "getPhecda");
function cn(e, t) {
  return Re(() => {
    x.off(e, t);
  }), x.on(e, t), {
    emit: /* @__PURE__ */ g((n) => x.emit(e, n), "emit"),
    cancel: /* @__PURE__ */ g(() => x.off(e, t), "cancel")
  };
}
g(cn, "useEvent");
function qt(e) {
  return ht().init(e);
}
g(qt, "useR");
function Zt(e, t) {
  return pt(t).init(e);
}
g(Zt, "getR");
function ln(e) {
  const t = ht().init(e);
  if (T.has(t))
    return T.get(t);
  const n = {}, r = new Proxy(t, {
    get(i, s) {
      var l;
      if (typeof i[s] == "function" || (l = i[s]) != null && l.__v_skip)
        return i[s];
      const f = n[s];
      return f && f.r ? f() : (n[s] = lt(() => xt(i, s)), n[s]());
    },
    set() {
      return !1;
    }
  });
  return T.set(t, r), r;
}
g(ln, "useV");
function hn(e, t) {
  const n = pt(t).init(e);
  if (T.has(n))
    return T.get(n);
  const r = {}, i = new Proxy(n, {
    get(s, f) {
      var m;
      if (typeof s[f] == "function" || (m = s[f]) != null && m.__v_skip)
        return s[f];
      const l = r[f];
      return l && l.r ? l() : (r[f] = lt(() => xt(s, f)), r[f]());
    },
    set() {
      return !1;
    }
  });
  return T.set(n, i), i;
}
g(hn, "getV");
function pn(e) {
  q(e.prototype, "shallow", !0);
}
g(pn, "Shallow");
function dn(e) {
  return (t, n) => {
    S(t, n);
    let r;
    A(t, n, {
      init(i) {
        if (typeof i[n] != "function")
          throw new Error("WatchEffect must decorate function");
        r = De(i[n].bind(i), e);
      },
      unmount() {
        return r == null ? void 0 : r();
      }
    });
  };
}
g(dn, "WatchEffect");
export {
  Kn as Assign,
  X as Base,
  Pn as Bind,
  Mn as Clear,
  $t as DataMap,
  Zn as Effect,
  Wt as Empty,
  Xn as Err,
  Sn as Expose,
  Fn as Global,
  kn as If,
  bn as Ignore,
  En as Init,
  Hn as Inject,
  Tn as Injectable,
  Gn as Isolate,
  tr as Mixin,
  v as PHECDA_KEY,
  Ln as Pipeline,
  $n as Provide,
  zn as Rule,
  C as SHARE_KEY,
  pn as Shallow,
  Qn as Storage,
  Bn as Tag,
  Jn as To,
  Vn as Unique,
  He as Unmount,
  tn as VuePhecda,
  dn as WatchEffect,
  qn as Watcher,
  er as WebBase,
  Ze as WebPhecda,
  ot as activeInstance,
  Yn as addDecoToClass,
  Z as bindMethod,
  xn as classToPlain,
  en as createPhecda,
  lt as createSharedReactive,
  Vt as defaultWebInject,
  qe as delDefaultPhecda,
  x as emitter,
  st as get,
  An as getBind,
  zt as getDefaultPhecda,
  K as getExposeKey,
  F as getHandler,
  z as getInject,
  mn as getOwnExposeKey,
  On as getOwnHandler,
  gn as getOwnIgnoreKey,
  Ut as getOwnState,
  wn as getOwnStateKey,
  Ft as getParamtypes,
  pt as getPhecda,
  Y as getPhecdaFromTarget,
  Zt as getR,
  un as getRaw,
  Wn as getShareState,
  $e as getState,
  We as getStateKey,
  j as getTag,
  hn as getV,
  N as init,
  Mt as invokeHandler,
  ut as isAsyncFunc,
  yn as isPhecda,
  an as markRaw,
  ct as phecdaNamespace,
  Xt as phecdaSymbol,
  jn as plainToClass,
  q as set,
  Jt as setDefaultPhecda,
  Yt as setExposeKey,
  A as setHandler,
  Ue as setIgnoreKey,
  St as setInject,
  Un as setPropertyState,
  Lt as setState,
  S as setStateKey,
  Nn as snapShot,
  Cn as transformInstance,
  In as transformInstanceAsync,
  Rn as transformProperty,
  Dn as transformPropertyAsync,
  cn as useEvent,
  ht as usePhecda,
  qt as useR,
  sn as useRaw,
  ln as useV,
  Kt as wait
};
