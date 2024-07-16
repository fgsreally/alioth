var Ae = Object.defineProperty;
var je = (e, t, n) => t in e ? Ae(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var D = (e, t, n) => (je(e, typeof t != "symbol" ? t + "" : t, n), n);
import { t as ht, s as Re, a as De, m as xe, e as Ce, i as Le, o as Ue, w as Ne, f as Rt, j as Ve, k as Ye, g as Ge, l as Ut } from "./vue.runtime.esm-bundler-02f1d5d8.js";
var We = Object.defineProperty, $e = Object.getOwnPropertyDescriptor, Nt = (e, t, n, r) => {
  for (var a = r > 1 ? void 0 : r ? $e(t, n) : t, f = e.length - 1, o; f >= 0; f--)
    (o = e[f]) && (a = (r ? o(t, n, a) : o(a)) || a);
  return r && a && We(t, n, a), a;
}, j = Symbol("phecda"), v = Symbol("phecda");
function wn(e) {
  return typeof e == "function" ? !!e.prototype[v] : !1;
}
function C(e) {
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
function L(e) {
  return typeof e == "function" ? e.prototype : e.hasOwnProperty(v) ? e : Object.getPrototypeOf(e);
}
function T(e, t) {
  t || (t = j, e = e.prototype), C(e), e[v].__STATE_KEY.add(t), Vt(e, t);
}
function Vt(e, t) {
  t || (t = j, e = e.prototype), C(e), e[v].__EXPOSE_KEY.add(t);
}
function He(e, t) {
  t || (t = j, e = e.prototype), C(e), e[v].__IGNORE_KEY.add(t);
}
function A(e, t, n) {
  t || (t = j, e = e.prototype), C(e), e[v].__STATE_HANDLER__.has(t) ? e[v].__STATE_HANDLER__.get(t).push(n) : e[v].__STATE_HANDLER__.set(t, [n]);
}
function Yt(e, t, n) {
  t || (t = j, e = e.prototype), C(e), e[v].__STATE_NAMESPACE__.set(t, n);
}
function mn(e) {
  return [...L(e)[v].__STATE_KEY];
}
function Be(e) {
  let t = L(e);
  const n = /* @__PURE__ */ new Set();
  for (; t != null && t[v]; )
    t.hasOwnProperty(v) && t[v].__STATE_KEY.forEach((r) => n.add(r)), t = Object.getPrototypeOf(t);
  return [...n];
}
function En(e) {
  const t = L(e);
  return [...t[v].__EXPOSE_KEY].filter((n) => !t[v].__IGNORE_KEY.has(n));
}
function J(e) {
  let t = L(e);
  const n = /* @__PURE__ */ new Set(), r = t;
  for (; t != null && t[v]; )
    t.hasOwnProperty(v) && [...t[v].__EXPOSE_KEY].forEach((a) => !r[v].__IGNORE_KEY.has(a) && n.add(a)), t = Object.getPrototypeOf(t);
  return [...n];
}
function bn(e) {
  var n;
  return [...(n = L(e)[v]) == null ? void 0 : n.__IGNORE_KEY];
}
function On(e, t) {
  var r;
  return ((r = L(e)[v]) == null ? void 0 : r.__STATE_HANDLER__.get(t)) || [];
}
function Q(e, t) {
  var a;
  let n = L(e);
  const r = /* @__PURE__ */ new Set();
  for (; n != null && n[v] && !(n.hasOwnProperty(v) && ((a = n[v].__STATE_HANDLER__.get(t)) == null || a.forEach((f) => r.add(f)), n[v].__CLEAR_KEY.has(t))); )
    n = Object.getPrototypeOf(n);
  return [...r];
}
function Ke(e, t = j) {
  let n = L(e), r = {};
  for (; n != null && n[v]; ) {
    if (n.hasOwnProperty(v)) {
      const a = n[v].__STATE_NAMESPACE__.get(t);
      if (a && (r = { ...a, ...r }), n[v].__CLEAR_KEY.has(t))
        break;
    }
    n = Object.getPrototypeOf(n);
  }
  return r;
}
function Gt(e, t = j) {
  return L(e)[v].__STATE_NAMESPACE__.get(t) || {};
}
function Dt(e, t) {
  const r = J(t).map((a) => Q(t, a).filter((f) => !!f[e]).map((f) => f[e](t))).flat();
  return t.__PROMISE_SYMBOL__ = Promise.all(r);
}
function Z(e, t, n) {
  C(e), e[`__${t.toUpperCase()}__`] = n;
}
function lt(e, t) {
  return e[`__${t.toUpperCase()}__`];
}
function Sn(e, t) {
  T(e, t), A(e, t, {
    async init(n) {
      return n[t]();
    }
  });
}
function Fe(e, t) {
  T(e, t), A(e, t, {
    async unmount(n) {
      return n[t]();
    }
  });
}
function Pn(e) {
  return (t, n) => {
    T(t, n), Yt(t, n, {
      value: e
    });
  };
}
function Mn(e, t) {
  t || (e = e.prototype, t = j), He(e, t);
}
function Tn(e, t) {
  t || (e = e.prototype, t = j), C(e), e[v].__CLEAR_KEY.add(t);
}
function In(e, t) {
  Vt(e, t);
}
function Wt(e) {
  C(e.prototype);
}
function An() {
  return (e) => Wt(e);
}
function P(e) {
  return typeof e == "object" && (e = e.constructor), lt(e.prototype, "tag") || e.name;
}
function jn(e) {
  const t = new e(), n = Be(t), r = {};
  for (const a of n) {
    const f = Ke(t, a);
    f.value && (r[a] = f.value);
  }
  return r;
}
function Rn(e, t) {
  const n = new e(), r = J(n);
  for (const a of r)
    n[a] = t[a];
  return n;
}
function Dn(e, t = !1) {
  const n = [], r = J(e), a = n.push.bind(n);
  for (const f of r) {
    const o = Q(e, f);
    if (o)
      for (const c of o) {
        const l = c.pipe;
        if (l && (l(e, a), n.length && !t))
          return n;
      }
  }
  return n;
}
async function xn(e, t = !1) {
  const n = [], r = J(e), a = n.push.bind(n);
  for (const f of r) {
    const o = Q(e, f);
    if (o)
      for (const c of o) {
        const l = c.pipe;
        if (l && (await l(e, a), n.length && !t))
          return n;
      }
  }
  return n;
}
function Cn(e, t, n = !1) {
  const r = [], a = Q(e, t), f = r.push.bind(r);
  if (a)
    for (const o of a) {
      const c = o.pipe;
      if (c && (c(e, f), r.length && !n))
        return r;
    }
  return r;
}
async function Ln(e, t, n = !1) {
  const r = [], a = Q(e, t), f = r.push.bind(r);
  if (a)
    for (const o of a) {
      const c = o.pipe;
      if (c && (await c(e, f), r.length && !n))
        return r;
    }
  return r;
}
function Un(e) {
  const t = {}, n = J(e);
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
function Vn(e, t, n) {
  n(t ? e.prototype : e, t);
}
function Yn(...e) {
  return (...t) => {
    for (const n of e)
      n(...t);
  };
}
function dt(e) {
  return e[Symbol.toStringTag] === "AsyncFunction";
}
function Gn(e, t, n) {
  T(e, t);
  const r = Gt(e, t) || {};
  n(r), Yt(e, t, r);
}
function Wn(e, t) {
  const n = Gt(e, j) || {};
  return t(n);
}
var $t = {};
function $n(e, t) {
  $t[e] = t;
}
function Hn(e) {
  return $t[e];
}
var st = {};
function xt(e, t) {
  return st[e] = t, st;
}
function X(e) {
  return st[e];
}
function Bn(e) {
  Z(e.prototype, "isolate", !0);
}
function Kn(e) {
  return (t) => {
    Z(t.prototype, "tag", e);
  };
}
function Fn(e) {
  return (t) => {
    Z(t.prototype, "tag", Symbol(e || t.name));
  };
}
function Jn(e) {
  return (t) => {
    T(t), A(t, void 0, {
      init: async (n) => {
        const r = await e(n);
        if (r && typeof r == "object" && !Array.isArray(r))
          for (const a in r)
            n[a] = r[a];
      }
    });
  };
}
function Qn(e) {
  T(e), A(e, void 0, {
    init: async (t) => {
      const n = P(t);
      globalThis.__PHECDA__ || (globalThis.__PHECDA__ = {}), globalThis.__PHECDA__[n] = t.constructor;
    }
  });
}
function zn(...e) {
  return (t, n) => {
    T(t, n), A(t, n, {
      async pipe(r, a) {
        for (const f of e)
          try {
            dt(f) ? r[n] = await f(r[n], r, n) : r[n] = f(r[n], r, n);
          } catch (o) {
            a(o.message);
          }
      }
    });
  };
}
function Xn(e, t) {
  return (n, r) => {
    T(n, r), A(n, r, {
      async pipe(a, f) {
        let o;
        dt(e) ? o = await e(a[r]) : o = e(a[r]), o || f(typeof t == "string" ? t : t());
      }
    });
  };
}
function qn(e, t = !1) {
  return (n, r) => {
    T(n, r), A(n, r, {
      init: (a) => {
        if (typeof a[r] == "function") {
          const f = a[r].bind(a);
          dt(f) ? a[r] = async (...o) => {
            try {
              await f(...o);
            } catch (c) {
              if (e(c, a, r), !t)
                throw c;
            }
          } : a[r] = (...o) => {
            try {
              f(...o);
            } catch (c) {
              if (e(c, a, r), !t)
                throw c;
            }
          };
        }
      }
    });
  };
}
function Zn(e, t) {
  let n;
  return (r, a) => {
    T(r, a), A(r, a, {
      init(f) {
        var o;
        return n = (o = X("watcher")) == null ? void 0 : o({ eventName: e, instance: f, key: a, options: t });
      },
      unmount() {
        return n == null ? void 0 : n();
      }
    });
  };
}
function kn(e) {
  return (t, n) => {
    T(t, n), A(t, n, {
      init(r) {
        r[`$_${n}`] = r[n], Object.defineProperty(r, n, {
          get() {
            return r[`$_${n}`];
          },
          set(a) {
            return r[`$_${n}`] = a, e(a, r, n), !0;
          }
        });
      }
    });
  };
}
function tr({ key: e, json: t, stringify: n } = {}) {
  return t || (t = (r) => JSON.parse(r)), n || (n = (r) => JSON.stringify(r)), (r, a) => {
    const f = e || P(r);
    C(r), T(r, a), A(r, a, {
      init: (o) => {
        var c;
        return (c = X("storage")) == null ? void 0 : c({ instance: o, key: a, tag: f, toJSON: t, toString: n });
      }
    });
  };
}
function er(e, ...t) {
  return e ? (...n) => {
    t.forEach((r) => r(...n));
  } : () => {
  };
}
var q = class {
  constructor() {
    this.__UNMOUNT_SYMBOL__ = [];
  }
  get tag() {
    return P(this);
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
  Fe
], q.prototype, "_unmount", 1);
q = Nt([
  Wt
], q);
function Ht(e) {
  return { all: e = e || /* @__PURE__ */ new Map(), on: function(t, n) {
    var r = e.get(t);
    r ? r.push(n) : e.set(t, [n]);
  }, off: function(t, n) {
    var r = e.get(t);
    r && (n ? r.splice(r.indexOf(n) >>> 0, 1) : e.set(t, []));
  }, emit: function(t, n) {
    var r = e.get(t);
    r && r.slice().map(function(a) {
      a(n);
    }), (r = e.get("*")) && r.slice().map(function(a) {
      a(t, n);
    });
  } };
}
var Ct = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function nr(e) {
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
var Lt;
(function(e) {
  (function(t) {
    var n = typeof Ct == "object" ? Ct : typeof self == "object" ? self : typeof this == "object" ? this : Function("return this;")(), r = a(e);
    typeof n.Reflect > "u" ? n.Reflect = e : r = a(n.Reflect, r), t(r);
    function a(f, o) {
      return function(c, l) {
        typeof f[c] != "function" && Object.defineProperty(f, c, { configurable: !0, writable: !0, value: l }), o && o(c, l);
      };
    }
  })(function(t) {
    var n = Object.prototype.hasOwnProperty, r = typeof Symbol == "function", a = r && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", f = r && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", o = typeof Object.create == "function", c = { __proto__: [] } instanceof Array, l = !o && !c, E = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: o ? function() {
        return at(/* @__PURE__ */ Object.create(null));
      } : c ? function() {
        return at({ __proto__: null });
      } : function() {
        return at({});
      },
      has: l ? function(i, s) {
        return n.call(i, s);
      } : function(i, s) {
        return s in i;
      },
      get: l ? function(i, s) {
        return n.call(i, s) ? i[s] : void 0;
      } : function(i, s) {
        return i[s];
      }
    }, U = Object.getPrototypeOf(Function), et = typeof process == "object" && process["env"] && process["env"].REFLECT_METADATA_USE_MAP_POLYFILL === "true", nt = !et && typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Me(), ne = !et && typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Te(), re = !et && typeof WeakMap == "function" ? WeakMap : Ie(), z = new re();
    function ie(i, s, u, h) {
      if (b(u)) {
        if (!Tt(i))
          throw new TypeError();
        if (!It(s))
          throw new TypeError();
        return pe(i, s);
      } else {
        if (!Tt(i))
          throw new TypeError();
        if (!O(s))
          throw new TypeError();
        if (!O(h) && !b(h) && !Y(h))
          throw new TypeError();
        return Y(h) && (h = void 0), u = R(u), _e(i, s, u, h);
      }
    }
    t("decorate", ie);
    function ae(i, s) {
      function u(h, d) {
        if (!O(h))
          throw new TypeError();
        if (!b(d) && !Ee(d))
          throw new TypeError();
        Ot(i, s, h, d);
      }
      return u;
    }
    t("metadata", ae);
    function oe(i, s, u, h) {
      if (!O(u))
        throw new TypeError();
      return b(h) || (h = R(h)), Ot(i, s, u, h);
    }
    t("defineMetadata", oe);
    function se(i, s, u) {
      if (!O(s))
        throw new TypeError();
      return b(u) || (u = R(u)), mt(i, s, u);
    }
    t("hasMetadata", se);
    function ue(i, s, u) {
      if (!O(s))
        throw new TypeError();
      return b(u) || (u = R(u)), rt(i, s, u);
    }
    t("hasOwnMetadata", ue);
    function ce(i, s, u) {
      if (!O(s))
        throw new TypeError();
      return b(u) || (u = R(u)), Et(i, s, u);
    }
    t("getMetadata", ce);
    function fe(i, s, u) {
      if (!O(s))
        throw new TypeError();
      return b(u) || (u = R(u)), bt(i, s, u);
    }
    t("getOwnMetadata", fe);
    function he(i, s) {
      if (!O(i))
        throw new TypeError();
      return b(s) || (s = R(s)), St(i, s);
    }
    t("getMetadataKeys", he);
    function le(i, s) {
      if (!O(i))
        throw new TypeError();
      return b(s) || (s = R(s)), Pt(i, s);
    }
    t("getOwnMetadataKeys", le);
    function de(i, s, u) {
      if (!O(s))
        throw new TypeError();
      b(u) || (u = R(u));
      var h = $(
        s,
        u,
        /*Create*/
        !1
      );
      if (b(h) || !h.delete(i))
        return !1;
      if (h.size > 0)
        return !0;
      var d = z.get(s);
      return d.delete(u), d.size > 0 || z.delete(s), !0;
    }
    t("deleteMetadata", de);
    function pe(i, s) {
      for (var u = i.length - 1; u >= 0; --u) {
        var h = i[u], d = h(s);
        if (!b(d) && !Y(d)) {
          if (!It(d))
            throw new TypeError();
          s = d;
        }
      }
      return s;
    }
    function _e(i, s, u, h) {
      for (var d = i.length - 1; d >= 0; --d) {
        var S = i[d], _ = S(s, u, h);
        if (!b(_) && !Y(_)) {
          if (!O(_))
            throw new TypeError();
          h = _;
        }
      }
      return h;
    }
    function $(i, s, u) {
      var h = z.get(i);
      if (b(h)) {
        if (!u)
          return;
        h = new nt(), z.set(i, h);
      }
      var d = h.get(s);
      if (b(d)) {
        if (!u)
          return;
        d = new nt(), h.set(s, d);
      }
      return d;
    }
    function mt(i, s, u) {
      var h = rt(i, s, u);
      if (h)
        return !0;
      var d = it(s);
      return Y(d) ? !1 : mt(i, d, u);
    }
    function rt(i, s, u) {
      var h = $(
        s,
        u,
        /*Create*/
        !1
      );
      return b(h) ? !1 : we(h.has(i));
    }
    function Et(i, s, u) {
      var h = rt(i, s, u);
      if (h)
        return bt(i, s, u);
      var d = it(s);
      if (!Y(d))
        return Et(i, d, u);
    }
    function bt(i, s, u) {
      var h = $(
        s,
        u,
        /*Create*/
        !1
      );
      if (!b(h))
        return h.get(i);
    }
    function Ot(i, s, u, h) {
      var d = $(
        u,
        h,
        /*Create*/
        !0
      );
      d.set(i, s);
    }
    function St(i, s) {
      var u = Pt(i, s), h = it(i);
      if (h === null)
        return u;
      var d = St(h, s);
      if (d.length <= 0)
        return u;
      if (u.length <= 0)
        return d;
      for (var S = new ne(), _ = [], g = 0, p = u; g < p.length; g++) {
        var y = p[g], w = S.has(y);
        w || (S.add(y), _.push(y));
      }
      for (var N = 0, jt = d; N < jt.length; N++) {
        var y = jt[N], w = S.has(y);
        w || (S.add(y), _.push(y));
      }
      return _;
    }
    function Pt(i, s) {
      var u = [], h = $(
        i,
        s,
        /*Create*/
        !1
      );
      if (b(h))
        return u;
      for (var d = h.keys(), S = be(d), _ = 0; ; ) {
        var g = Se(S);
        if (!g)
          return u.length = _, u;
        var p = Oe(g);
        try {
          u[_] = p;
        } catch (y) {
          try {
            Pe(S);
          } finally {
            throw y;
          }
        }
        _++;
      }
    }
    function Mt(i) {
      if (i === null)
        return 1;
      switch (typeof i) {
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
          return i === null ? 1 : 6;
        default:
          return 6;
      }
    }
    function b(i) {
      return i === void 0;
    }
    function Y(i) {
      return i === null;
    }
    function ge(i) {
      return typeof i == "symbol";
    }
    function O(i) {
      return typeof i == "object" ? i !== null : typeof i == "function";
    }
    function ve(i, s) {
      switch (Mt(i)) {
        case 0:
          return i;
        case 1:
          return i;
        case 2:
          return i;
        case 3:
          return i;
        case 4:
          return i;
        case 5:
          return i;
      }
      var u = s === 3 ? "string" : s === 5 ? "number" : "default", h = At(i, a);
      if (h !== void 0) {
        var d = h.call(i, u);
        if (O(d))
          throw new TypeError();
        return d;
      }
      return ye(i, u === "default" ? "number" : u);
    }
    function ye(i, s) {
      if (s === "string") {
        var u = i.toString;
        if (G(u)) {
          var h = u.call(i);
          if (!O(h))
            return h;
        }
        var d = i.valueOf;
        if (G(d)) {
          var h = d.call(i);
          if (!O(h))
            return h;
        }
      } else {
        var d = i.valueOf;
        if (G(d)) {
          var h = d.call(i);
          if (!O(h))
            return h;
        }
        var S = i.toString;
        if (G(S)) {
          var h = S.call(i);
          if (!O(h))
            return h;
        }
      }
      throw new TypeError();
    }
    function we(i) {
      return !!i;
    }
    function me(i) {
      return "" + i;
    }
    function R(i) {
      var s = ve(
        i,
        3
        /* String */
      );
      return ge(s) ? s : me(s);
    }
    function Tt(i) {
      return Array.isArray ? Array.isArray(i) : i instanceof Object ? i instanceof Array : Object.prototype.toString.call(i) === "[object Array]";
    }
    function G(i) {
      return typeof i == "function";
    }
    function It(i) {
      return typeof i == "function";
    }
    function Ee(i) {
      switch (Mt(i)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function At(i, s) {
      var u = i[s];
      if (u != null) {
        if (!G(u))
          throw new TypeError();
        return u;
      }
    }
    function be(i) {
      var s = At(i, f);
      if (!G(s))
        throw new TypeError();
      var u = s.call(i);
      if (!O(u))
        throw new TypeError();
      return u;
    }
    function Oe(i) {
      return i.value;
    }
    function Se(i) {
      var s = i.next();
      return s.done ? !1 : s;
    }
    function Pe(i) {
      var s = i.return;
      s && s.call(i);
    }
    function it(i) {
      var s = Object.getPrototypeOf(i);
      if (typeof i != "function" || i === U || s !== U)
        return s;
      var u = i.prototype, h = u && Object.getPrototypeOf(u);
      if (h == null || h === Object.prototype)
        return s;
      var d = h.constructor;
      return typeof d != "function" || d === i ? s : d;
    }
    function Me() {
      var i = {}, s = [], u = (
        /** @class */
        function() {
          function _(g, p, y) {
            this._index = 0, this._keys = g, this._values = p, this._selector = y;
          }
          return _.prototype["@@iterator"] = function() {
            return this;
          }, _.prototype[f] = function() {
            return this;
          }, _.prototype.next = function() {
            var g = this._index;
            if (g >= 0 && g < this._keys.length) {
              var p = this._selector(this._keys[g], this._values[g]);
              return g + 1 >= this._keys.length ? (this._index = -1, this._keys = s, this._values = s) : this._index++, { value: p, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, _.prototype.throw = function(g) {
            throw this._index >= 0 && (this._index = -1, this._keys = s, this._values = s), g;
          }, _.prototype.return = function(g) {
            return this._index >= 0 && (this._index = -1, this._keys = s, this._values = s), { value: g, done: !0 };
          }, _;
        }()
      );
      return (
        /** @class */
        function() {
          function _() {
            this._keys = [], this._values = [], this._cacheKey = i, this._cacheIndex = -2;
          }
          return Object.defineProperty(_.prototype, "size", {
            get: function() {
              return this._keys.length;
            },
            enumerable: !0,
            configurable: !0
          }), _.prototype.has = function(g) {
            return this._find(
              g,
              /*insert*/
              !1
            ) >= 0;
          }, _.prototype.get = function(g) {
            var p = this._find(
              g,
              /*insert*/
              !1
            );
            return p >= 0 ? this._values[p] : void 0;
          }, _.prototype.set = function(g, p) {
            var y = this._find(
              g,
              /*insert*/
              !0
            );
            return this._values[y] = p, this;
          }, _.prototype.delete = function(g) {
            var p = this._find(
              g,
              /*insert*/
              !1
            );
            if (p >= 0) {
              for (var y = this._keys.length, w = p + 1; w < y; w++)
                this._keys[w - 1] = this._keys[w], this._values[w - 1] = this._values[w];
              return this._keys.length--, this._values.length--, g === this._cacheKey && (this._cacheKey = i, this._cacheIndex = -2), !0;
            }
            return !1;
          }, _.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = i, this._cacheIndex = -2;
          }, _.prototype.keys = function() {
            return new u(this._keys, this._values, h);
          }, _.prototype.values = function() {
            return new u(this._keys, this._values, d);
          }, _.prototype.entries = function() {
            return new u(this._keys, this._values, S);
          }, _.prototype["@@iterator"] = function() {
            return this.entries();
          }, _.prototype[f] = function() {
            return this.entries();
          }, _.prototype._find = function(g, p) {
            return this._cacheKey !== g && (this._cacheIndex = this._keys.indexOf(this._cacheKey = g)), this._cacheIndex < 0 && p && (this._cacheIndex = this._keys.length, this._keys.push(g), this._values.push(void 0)), this._cacheIndex;
          }, _;
        }()
      );
      function h(_, g) {
        return _;
      }
      function d(_, g) {
        return g;
      }
      function S(_, g) {
        return [_, g];
      }
    }
    function Te() {
      return (
        /** @class */
        function() {
          function i() {
            this._map = new nt();
          }
          return Object.defineProperty(i.prototype, "size", {
            get: function() {
              return this._map.size;
            },
            enumerable: !0,
            configurable: !0
          }), i.prototype.has = function(s) {
            return this._map.has(s);
          }, i.prototype.add = function(s) {
            return this._map.set(s, s), this;
          }, i.prototype.delete = function(s) {
            return this._map.delete(s);
          }, i.prototype.clear = function() {
            this._map.clear();
          }, i.prototype.keys = function() {
            return this._map.keys();
          }, i.prototype.values = function() {
            return this._map.values();
          }, i.prototype.entries = function() {
            return this._map.entries();
          }, i.prototype["@@iterator"] = function() {
            return this.keys();
          }, i.prototype[f] = function() {
            return this.keys();
          }, i;
        }()
      );
    }
    function Ie() {
      var i = 16, s = E.create(), u = h();
      return (
        /** @class */
        function() {
          function p() {
            this._key = h();
          }
          return p.prototype.has = function(y) {
            var w = d(
              y,
              /*create*/
              !1
            );
            return w !== void 0 ? E.has(w, this._key) : !1;
          }, p.prototype.get = function(y) {
            var w = d(
              y,
              /*create*/
              !1
            );
            return w !== void 0 ? E.get(w, this._key) : void 0;
          }, p.prototype.set = function(y, w) {
            var N = d(
              y,
              /*create*/
              !0
            );
            return N[this._key] = w, this;
          }, p.prototype.delete = function(y) {
            var w = d(
              y,
              /*create*/
              !1
            );
            return w !== void 0 ? delete w[this._key] : !1;
          }, p.prototype.clear = function() {
            this._key = h();
          }, p;
        }()
      );
      function h() {
        var p;
        do
          p = "@@WeakMap@@" + g();
        while (E.has(s, p));
        return s[p] = !0, p;
      }
      function d(p, y) {
        if (!n.call(p, u)) {
          if (!y)
            return;
          Object.defineProperty(p, u, { value: E.create() });
        }
        return p[u];
      }
      function S(p, y) {
        for (var w = 0; w < y; ++w)
          p[w] = Math.random() * 255 | 0;
        return p;
      }
      function _(p) {
        return typeof Uint8Array == "function" ? typeof crypto < "u" ? crypto.getRandomValues(new Uint8Array(p)) : typeof msCrypto < "u" ? msCrypto.getRandomValues(new Uint8Array(p)) : S(new Uint8Array(p), p) : S(new Array(p), p);
      }
      function g() {
        var p = _(i);
        p[6] = p[6] & 79 | 64, p[8] = p[8] & 191 | 128;
        for (var y = "", w = 0; w < i; ++w) {
          var N = p[w];
          (w === 4 || w === 6 || w === 8) && (y += "-"), N < 16 && (y += "0"), y += N.toString(16).toLowerCase();
        }
        return y;
      }
    }
    function at(i) {
      return i.__ = void 0, delete i.__, i;
    }
  });
})(Lt || (Lt = {}));
var Je = Object.defineProperty, M = (e, t) => Je(e, "name", { value: t, configurable: !0 }), x = Ht();
function Bt() {
  X("watcher") || xt("watcher", ({ eventName: e, instance: t, key: n, options: r }) => {
    const a = typeof t[n] == "function" ? t[n].bind(t) : (f) => t[n] = f;
    if (r != null && r.once) {
      const f = /* @__PURE__ */ M(() => {
        a(), x.off(e);
      }, "handler");
      x.on(e, f);
    } else
      x.on(e, a);
    return () => x.off(e);
  }), X("storage") || xt("storage", ({ tag: e, key: t, instance: n, toJSON: r, toString: a }) => {
    e = `phecda:${t ? `${e}-${t}` : e}`;
    const f = localStorage.getItem(e);
    if (f) {
      const o = r(f);
      if (t)
        n[t] = o;
      else
        for (const c in o)
          c && (n[c] = o[c]);
    }
    localStorage.setItem(e, a(t ? n[t] : n)), globalThis.addEventListener("beforeunload", () => {
      localStorage.setItem(e, a(t ? n[t] : n));
    });
  });
}
M(Bt, "defaultWebInject");
function ut(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
M(ut, "isObject");
function pt(e, t) {
  for (const n in t) {
    if (!t.hasOwnProperty(n))
      continue;
    const r = t[n], a = e[n];
    ut(a) && ut(r) && e.hasOwnProperty(n) ? e[n] = pt(a, r) : e[n] = r;
  }
  return e;
}
M(pt, "deepMerge");
function Kt(...e) {
  return Promise.all(e.map((t) => t.__PROMISE_SYMBOL__));
}
M(Kt, "wait");
function Ft(e, t) {
  return Reflect.getMetadata("design:paramtypes", e, t);
}
M(Ft, "getParamtypes");
var _t = /* @__PURE__ */ new Map();
function Jt(e, t) {
  _t.set(e, t);
}
M(Jt, "setDefaultPhecda");
function Qt(e) {
  return _t.get(e);
}
M(Qt, "getDefaultPhecda");
function Qe(e) {
  return _t.delete(e);
}
M(Qe, "delDefaultPhecda");
var ot = /* @__PURE__ */ new WeakMap();
function k(e, t) {
  if (!ot.has(e)) {
    const n = /* @__PURE__ */ new WeakMap();
    ot.set(e, new Proxy(e, {
      get(r, a) {
        return typeof r[a] == "function" && a !== "constructor" && !r[a].toString().startsWith("(") ? (n.has(r[a]) || n.set(r[a], t ? t(r, a) : r[a].bind(r)), n.get(r[a])) : r[a];
      }
    }));
  }
  return ot.get(e);
}
M(k, "bindMethod");
var B, ze = (B = class {
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
    this.namespace = t, this.parseModule = n, this.memory = {}, this.state = {}, this.modelMap = /* @__PURE__ */ new WeakMap(), this.emitter = Ht(), typeof window < "u" && (Bt(), Jt(t, this));
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
    const n = P(t), r = /* @__PURE__ */ M(() => {
      const c = Ft(t);
      let l;
      if (this.emit("Instantiate", {
        tag: n
      }), c) {
        const E = [];
        for (const U in c)
          E[U] = this.init(c[U]);
        l = this.parseModule(new t(...E));
      } else
        l = this.parseModule(new t());
      return n in this.memory && Object.assign(l, this.memory[n]), typeof window < "u" && (this.emit("Initialize", {
        tag: n
      }), Dt("init", l)), l;
    }, "initModel"), { state: a, modelMap: f } = this;
    if (lt(t.prototype, "isolate"))
      return r();
    if (n in a) {
      if (f.get(a[n]) === t)
        return a[n];
      this.emit("Hmr", {
        tag: n
      });
    }
    const o = r();
    return a[n] = o, f.set(o, t), o;
  }
  patch(t, n) {
    const r = P(t), { state: a } = this;
    this.emit("Patch", {
      tag: r,
      data: n
    }), pt(a[r], n);
  }
  wait(...t) {
    return Promise.all(t.map((n) => (typeof n == "function" && (n = P(n)), this.get(n).__PROMISE_SYMBOL__)));
  }
  get(t) {
    const { state: n } = this, r = typeof t == "function" ? P(t) : t;
    return n[r];
  }
  getModel(t) {
    const { state: n } = this;
    return this.modelMap.get(n[t]);
  }
  reset(t) {
    const { state: n } = this, r = P(t);
    if (!(r in n))
      return this.init(t);
    this.emit("Reset", {
      tag: r
    });
    const a = this.init(t), f = new t();
    Object.assign(a, f);
    for (const o in a)
      o in f || delete a[o];
  }
  async unmount(t) {
    const n = typeof t == "function" ? P(t) : t;
    if (!this.has(n))
      return;
    this.emit("Unmount", {
      tag: n
    });
    const { state: r } = this;
    await Dt("unmount", this.get(n)), delete r[n];
  }
  async unmountAll() {
    const { state: t } = this;
    return Promise.all(Object.keys(t).map((n) => this.unmount(n)));
  }
  has(t) {
    const { state: n } = this;
    return (typeof t == "function" ? P(t) : t) in n;
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
}, M(B, "WebPhecda"), B), K, rr = (K = class extends q {
  constructor() {
    super(...arguments);
    D(this, "emitter", x);
  }
}, M(K, "WebBase"), K);
function Xe() {
  return zt().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function zt() {
  return typeof navigator < "u" && typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : {};
}
const qe = typeof Proxy == "function", Ze = "devtools-plugin:setup", ke = "plugin:settings:set";
let W, ct;
function tn() {
  var e;
  return W !== void 0 || (typeof window < "u" && window.performance ? (W = !0, ct = window.performance) : typeof globalThis < "u" && (!((e = globalThis.perf_hooks) === null || e === void 0) && e.performance) ? (W = !0, ct = globalThis.perf_hooks.performance) : W = !1), W;
}
function en() {
  return tn() ? ct.now() : Date.now();
}
class nn {
  constructor(t, n) {
    this.target = null, this.targetQueue = [], this.onQueue = [], this.plugin = t, this.hook = n;
    const r = {};
    if (t.settings)
      for (const o in t.settings) {
        const c = t.settings[o];
        r[o] = c.defaultValue;
      }
    const a = `__vue-devtools-plugin-settings__${t.id}`;
    let f = Object.assign({}, r);
    try {
      const o = localStorage.getItem(a), c = JSON.parse(o);
      Object.assign(f, c);
    } catch {
    }
    this.fallbacks = {
      getSettings() {
        return f;
      },
      setSettings(o) {
        try {
          localStorage.setItem(a, JSON.stringify(o));
        } catch {
        }
        f = o;
      },
      now() {
        return en();
      }
    }, n && n.on(ke, (o, c) => {
      o === this.plugin.id && this.fallbacks.setSettings(c);
    }), this.proxiedOn = new Proxy({}, {
      get: (o, c) => this.target ? this.target.on[c] : (...l) => {
        this.onQueue.push({
          method: c,
          args: l
        });
      }
    }), this.proxiedTarget = new Proxy({}, {
      get: (o, c) => this.target ? this.target[c] : c === "on" ? this.proxiedOn : Object.keys(this.fallbacks).includes(c) ? (...l) => (this.targetQueue.push({
        method: c,
        args: l,
        resolve: () => {
        }
      }), this.fallbacks[c](...l)) : (...l) => new Promise((E) => {
        this.targetQueue.push({
          method: c,
          args: l,
          resolve: E
        });
      })
    });
  }
  async setRealTarget(t) {
    this.target = t;
    for (const n of this.onQueue)
      this.target.on[n.method](...n.args);
    for (const n of this.targetQueue)
      n.resolve(await this.target[n.method](...n.args));
  }
}
function rn(e, t) {
  const n = e, r = zt(), a = Xe(), f = qe && n.enableEarlyProxy;
  if (a && (r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !f))
    a.emit(Ze, e, t);
  else {
    const o = f ? new nn(n, a) : null;
    (r.__VUE_DEVTOOLS_PLUGINS__ = r.__VUE_DEVTOOLS_PLUGINS__ || []).push({
      pluginDescriptor: n,
      setupFn: t,
      proxy: o
    }), o && t(o.proxiedTarget);
  }
}
var an = Object.defineProperty, m = (e, t) => an(e, "name", { value: t, configurable: !0 }), on = [], H = "phecda-vue:mutations", V = "phecda-vue";
function ft(e, t) {
  const n = `[phecda-vue]: ${e}`;
  t === "error" ? console.error(n) : t === "warn" ? console.warn(n) : console.log(n);
}
m(ft, "toastMessage");
var gt = typeof window, Xt = Symbol("phecda-vue"), F, sn = (F = class extends ze {
  constructor() {
    super(...arguments);
    D(this, "vueApp");
  }
  install(n) {
    n.provide(Xt, this), this.vueApp = n, gt && rn({
      settings: {
        sendTrigger: {
          label: "send DebuggerEvent in onTrigger to timeline",
          type: "boolean",
          defaultValue: !1
        },
        triggerEventSync: {
          label: "send trigger event to timeline Synchronously",
          type: "boolean",
          defaultValue: !1
        },
        sendUpdate: {
          label: "Record view update caused by model to timeline",
          type: "boolean",
          defaultValue: !1
        }
      },
      id: "dev.esm.phecda",
      label: "Phecda Vue",
      packageName: "phecda",
      // @todo
      // logo: 'https://phecda.vuejs.org/logo.svg',
      // homepage: 'https://phecda.vuejs.org',
      componentStateTypes: on,
      app: n
    }, (r) => {
      const a = typeof r.now == "function" ? r.now.bind(r) : Date.now;
      r.addTimelineLayer({
        id: H,
        label: "Phecda Vue",
        color: 9089261
      });
      const f = /* @__PURE__ */ m((o) => {
        Rt(this.get(o), (c) => {
          const { sendUpdate: l } = r.getSettings();
          l && r.addTimelineEvent({
            layerId: H,
            event: {
              time: a(),
              title: "Update",
              subtitle: String(o),
              data: {
                ...c
              }
            }
          }), r.notifyComponentUpdate(), r.sendInspectorState(V);
        }, {
          deep: !0,
          onTrigger(c) {
            const { triggerEventSync: l, sendTrigger: E } = r.getSettings();
            E && !l && r.addTimelineEvent({
              layerId: H,
              event: {
                time: a(),
                title: "Trigger",
                subtitle: String(o),
                data: c
              }
            });
          }
        }), Rt(this.get(o), () => {
        }, {
          deep: !0,
          flush: "sync",
          onTrigger(c) {
            const { triggerEventSync: l, sendTrigger: E } = r.getSettings();
            E && l && r.addTimelineEvent({
              layerId: H,
              event: {
                time: a(),
                title: "Trigger",
                subtitle: String(o),
                data: c
              }
            });
          }
        });
      }, "watchModule");
      for (const o in this.state)
        f(o);
      this.on("Instantiate", ({ tag: o }) => {
        r.sendInspectorTree(V), f(o);
      }), this.on("*", (o, c) => {
        r.addTimelineEvent({
          layerId: H,
          event: {
            time: a(),
            title: o,
            subtitle: c.tag,
            data: c
          }
        });
      }), r.addInspector({
        id: V,
        label: "Phecda Vue",
        icon: "storage",
        treeFilterPlaceholder: "Search",
        actions: [
          {
            icon: "content_copy",
            action: /* @__PURE__ */ m(async () => {
              ft("Global state copied to clipboard."), await navigator.clipboard.writeText(this.serialize());
            }, "action"),
            tooltip: "Serialize and copy the state"
          },
          {
            icon: "content_paste",
            action: /* @__PURE__ */ m(async () => {
              ft("Global state pasted from clipboard."), await this.load(await navigator.clipboard.readText()), r.sendInspectorTree(V), r.sendInspectorState(V);
            }, "action"),
            tooltip: "Replace the state with the content of your clipboard"
          }
        ],
        nodeActions: [
          {
            icon: "restore",
            tooltip: "Reset the state ",
            action: /* @__PURE__ */ m((o) => {
              this.reset(this.getModel(o));
            }, "action")
          }
        ]
      }), r.on.inspectComponent((o) => {
        const c = o.componentInstance && o.componentInstance.proxy;
        if (c && c._phecda_vue)
          for (const l in c._phecda_vue)
            o.instanceData.state.push({
              type: "phecda-vue",
              key: l,
              editable: !0,
              value: c._phecda_vue[l]
            });
      }), r.on.getInspectorTree((o) => {
        o.app === n && o.inspectorId === V && (o.rootNodes = Object.keys(this.state).map((c) => ({
          id: c,
          label: c
        })));
      }), r.on.getInspectorState((o) => {
        if (o.app === n && o.inspectorId === V && this.has(o.nodeId)) {
          const c = this.get(o.nodeId);
          o.state = {
            state: [],
            methods: [],
            getters: [],
            internals: [],
            memory: Object.entries(this.memory[o.nodeId] || {}).map(([l, E]) => ({
              editable: !1,
              key: l,
              value: E
            }))
          }, Object.entries(c).forEach(([l, E]) => {
            if (this.modelMap.has(E)) {
              const U = String(P(ht(E)));
              o.state.state.unshift({
                editable: !1,
                key: l,
                value: `[PV] ${U}`,
                raw: `Phecda Vue Module [${U}]`
              });
              return;
            }
            l.startsWith("__") ? o.state.internals.push({
              editable: !1,
              key: l,
              value: E
            }) : o.state.state.push({
              editable: !0,
              key: l,
              value: E
            });
          }), kt(c).forEach((l) => {
            o.state.getters.push({
              editable: !1,
              key: l,
              value: c[l]
            });
          }), Zt(c).forEach((l) => {
            typeof c[l] == "function" && o.state[l.startsWith("__") ? "internals" : "methods"].push({
              editable: !1,
              key: l,
              value: Object.getPrototypeOf(c)[l]
            });
          });
        }
      }), r.on.editInspectorState((o) => {
        if (o.app === n && o.inspectorId === V) {
          const c = this.get(o.nodeId), { path: l } = o;
          o.set(c, l, o.state.value);
        }
      }), r.on.editComponentState((o) => {
        const { path: c, type: l } = o;
        l === "phecda-vue" && o.set(this.get(c.shift()), c, o.state.value);
      });
    });
  }
}, m(F, "VuePhecda"), F);
function un(e) {
  const t = new sn("vue", (n) => k(lt(n, "shallow") ? Re(n) : De(n), gt ? (r, a) => {
    const f = r[a].bind(r);
    if (qt(r, a).constructor.name === "Object")
      return f;
    const o = P(r);
    return (...c) => {
      const l = `${o}.${a}`;
      t.emit(`Invoke ${l}`, {
        args: c,
        tag: o,
        key: a
      });
      const E = f(...c);
      return E instanceof Promise ? E.then(() => t.emit(`End ${l}(Async)`, {
        args: c,
        tag: o,
        key: a
      })) : t.emit(`End ${l}`, {
        args: c,
        tag: o,
        key: a
      }), E;
    };
  } : void 0));
  return e == null || e.forEach((n) => t.init(n)), t;
}
m(un, "createPhecda");
function qt(e, t) {
  let n = Object.getPrototypeOf(e);
  for (; n; ) {
    if (n.hasOwnProperty(t))
      return n;
    n = Object.getPrototypeOf(n);
  }
  return null;
}
m(qt, "findPrototypeWithMethod");
function Zt(e) {
  const t = /* @__PURE__ */ new Set();
  for (e = Object.getPrototypeOf(e); e.constructor.name !== "Object"; )
    Object.getOwnPropertyNames(e).forEach((n) => {
      typeof Object.getOwnPropertyDescriptor(e, n).value == "function" && n !== "constructor" && t.add(n);
    }), e = Object.getPrototypeOf(e);
  return [
    ...t
  ];
}
m(Zt, "getAllMethods");
function kt(e) {
  const t = /* @__PURE__ */ new Set();
  for (e = Object.getPrototypeOf(e); e.constructor.name !== "Object"; )
    Object.getOwnPropertyNames(e).forEach((n) => {
      typeof Object.getOwnPropertyDescriptor(e, n).get == "function" && t.add(n);
    }), e = Object.getPrototypeOf(e);
  return [
    ...t
  ];
}
m(kt, "getAllGetters");
function cn(e) {
  return xe(e);
}
m(cn, "markRaw");
function vt(e) {
  let t = 0, n, r;
  const a = /* @__PURE__ */ m(() => {
    r && --t <= 0 && (r.stop(), n = r = null);
  }, "dispose"), f = /* @__PURE__ */ m(() => (t++, n || (r = Ve(!0), n = r.run(() => e())), Ye(a), n), "cb");
  return f.r = !0, f;
}
m(vt, "createSharedReactive");
var I = /* @__PURE__ */ new WeakMap();
function fn(e) {
  return ht(te(e));
}
m(fn, "useRaw");
function hn(e) {
  return ht(ee(e));
}
m(hn, "getRaw");
function tt() {
  if (!Ce())
    throw new Error("[phecda-vue]: use hook inside component setup function");
  const e = Le(Xt);
  if (!e)
    throw new Error("[phecda-vue]: must install the vue plugin ");
  return I.has(e) || I.set(e, k(e)), I.get(e);
}
m(tt, "usePhecda");
function yt(e) {
  if (gt) {
    const t = Ge();
    if (t && t.proxy) {
      const n = t.proxy, r = "_phecda_vue" in n ? n._phecda_vue : n._phecda_vue = {}, a = P(e);
      r[a] = tt().init(e);
    }
  }
}
m(yt, "setStateToComponent");
function wt(e) {
  const t = e || Qt("vue");
  if (!t)
    throw new Error("[phecda-vue]:  manually inject the phecda instance if there is no default phecda");
  return I.has(t) || I.set(t, k(t)), I.get(t);
}
m(wt, "getPhecda");
function ln(e, t) {
  return Ue(() => {
    x.off(e, t);
  }), x.on(e, t), {
    emit: /* @__PURE__ */ m((n) => x.emit(e, n), "emit"),
    cancel: /* @__PURE__ */ m(() => x.off(e, t), "cancel")
  };
}
m(ln, "useEvent");
function te(e) {
  return yt(e), tt().init(e);
}
m(te, "useR");
function ee(e, t) {
  return wt(t).init(e);
}
m(ee, "getR");
function dn(e) {
  yt(e);
  const t = tt().init(e);
  if (I.has(t))
    return I.get(t);
  const n = {}, r = new Proxy(t, {
    get(a, f) {
      var c;
      if (typeof a[f] == "function" || (c = a[f]) != null && c.__v_skip)
        return a[f];
      const o = n[f];
      return o && o.r ? o() : (n[f] = vt(() => Ut(a, f)), n[f]());
    },
    set() {
      return !1;
    }
  });
  return I.set(t, r), r;
}
m(dn, "useV");
function pn(e, t) {
  const n = wt(t).init(e);
  if (I.has(n))
    return I.get(n);
  const r = {}, a = new Proxy(n, {
    get(f, o) {
      var l;
      if (typeof f[o] == "function" || (l = f[o]) != null && l.__v_skip)
        return f[o];
      const c = r[o];
      return c && c.r ? c() : (r[o] = vt(() => Ut(f, o)), r[o]());
    },
    set() {
      return !1;
    }
  });
  return I.set(n, a), a;
}
m(pn, "getV");
function _n(e) {
  Z(e.prototype, "shallow", !0);
}
m(_n, "Shallow");
function gn(e) {
  return (t, n) => {
    T(t, n);
    let r;
    A(t, n, {
      init(a) {
        if (typeof a[n] != "function")
          throw new Error("WatchEffect must decorate function");
        r = Ne(a[n].bind(a), e);
      },
      unmount() {
        return r == null ? void 0 : r();
      }
    });
  };
}
m(gn, "WatchEffect");
export {
  Zn as $,
  Jn as A,
  q as B,
  Tn as C,
  $t as D,
  kn as E,
  qn as F,
  Qn as G,
  In as H,
  Sn as I,
  er as J,
  Mn as K,
  Hn as L,
  An as M,
  Bn as N,
  Yn as O,
  v as P,
  $n as Q,
  Xn as R,
  _n as S,
  Kn as T,
  j as U,
  sn as V,
  gn as W,
  tr as X,
  zn as Y,
  Fn as Z,
  Fe as _,
  vt as a,
  st as a0,
  Vn as a1,
  Un as a2,
  lt as a3,
  jn as a4,
  J as a5,
  Q as a6,
  X as a7,
  En as a8,
  On as a9,
  bn as aa,
  Gt as ab,
  mn as ac,
  L as ad,
  Wn as ae,
  Ke as af,
  Be as ag,
  P as ah,
  C as ai,
  Dt as aj,
  dt as ak,
  wn as al,
  Rn as am,
  Z as an,
  Vt as ao,
  A as ap,
  He as aq,
  xt as ar,
  Gn as as,
  Yt as at,
  T as au,
  Nn as av,
  Dn as aw,
  xn as ax,
  Cn as ay,
  Ln as az,
  wt as b,
  un as c,
  ee as d,
  hn as e,
  pn as f,
  nr as g,
  ln as h,
  tt as i,
  fn as j,
  dn as k,
  rr as l,
  cn as m,
  ze as n,
  k as o,
  Xt as p,
  Bt as q,
  Qe as r,
  x as s,
  Qt as t,
  te as u,
  _t as v,
  Jt as w,
  Kt as x,
  Pn as y,
  Wt as z
};
