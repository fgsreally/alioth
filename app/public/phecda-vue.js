var ve = Object.defineProperty;
var ge = (e, t, n) => t in e ? ve(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var j = (e, t, n) => (ge(e, typeof t != "symbol" ? t + "" : t, n), n);
import { s as me, r as Ee, m as Oe, t as Pe, h as Se, i as Me, o as be, w as Te, e as Ae, a as Ie, b as jt } from "./runtime-core.esm-bundler-05bc1582.js";
var Re = Object.defineProperty, c = (e, t) => Re(e, "name", { value: t, configurable: !0 }), C = Symbol("phecda"), w = Symbol("phecda");
function je(e) {
  return typeof e == "function" ? !!e.prototype[w] : !1;
}
c(je, "isPhecda");
function x(e) {
  e && (e.hasOwnProperty(w) || (e[w] = {
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
c(x, "init");
function D(e) {
  return typeof e == "function" ? e.prototype : e.hasOwnProperty(w) ? e : Object.getPrototypeOf(e);
}
c(D, "getPhecdaFromTarget");
function b(e, t) {
  t || (t = C, e = e.prototype), x(e), e[w].__STATE_KEY.add(t), ct(e, t);
}
c(b, "setStateKey");
function ct(e, t) {
  t || (t = C, e = e.prototype), x(e), e[w].__EXPOSE_KEY.add(t);
}
c(ct, "setExposeKey");
function Ct(e, t) {
  t || (t = C, e = e.prototype), x(e), e[w].__IGNORE_KEY.add(t);
}
c(Ct, "setIgnoreKey");
function I(e, t, n) {
  t || (t = C, e = e.prototype), x(e), e[w].__STATE_HANDLER__.has(t) ? e[w].__STATE_HANDLER__.get(t).push(n) : e[w].__STATE_HANDLER__.set(t, [
    n
  ]);
}
c(I, "setHandler");
function lt(e, t, n) {
  t || (t = C, e = e.prototype), x(e), e[w].__STATE_NAMESPACE__.set(t, n);
}
c(lt, "setState");
function Ce(e) {
  return [
    ...D(e)[w].__STATE_KEY
  ];
}
c(Ce, "getOwnStateKey");
function xt(e) {
  let t = D(e);
  const n = /* @__PURE__ */ new Set();
  for (; t != null && t[w]; )
    t.hasOwnProperty(w) && t[w].__STATE_KEY.forEach((r) => n.add(r)), t = Object.getPrototypeOf(t);
  return [
    ...n
  ];
}
c(xt, "getStateKey");
function xe(e) {
  const t = D(e);
  return [
    ...t[w].__EXPOSE_KEY
  ].filter((n) => !t[w].__IGNORE_KEY.has(n));
}
c(xe, "getOwnExposeKey");
function H(e) {
  let t = D(e);
  const n = /* @__PURE__ */ new Set(), r = t;
  for (; t != null && t[w]; )
    t.hasOwnProperty(w) && [
      ...t[w].__EXPOSE_KEY
    ].forEach((a) => !r[w].__IGNORE_KEY.has(a) && n.add(a)), t = Object.getPrototypeOf(t);
  return [
    ...n
  ];
}
c(H, "getExposeKey");
function De(e) {
  var n;
  return [
    ...(n = D(e)[w]) == null ? void 0 : n.__IGNORE_KEY
  ];
}
c(De, "getOwnIgnoreKey");
function Ye(e, t) {
  var r;
  return ((r = D(e)[w]) == null ? void 0 : r.__STATE_HANDLER__.get(t)) || [];
}
c(Ye, "getOwnHandler");
function K(e, t) {
  var a;
  let n = D(e);
  const r = /* @__PURE__ */ new Set();
  for (; n != null && n[w] && !(n.hasOwnProperty(w) && ((a = n[w].__STATE_HANDLER__.get(t)) == null || a.forEach((u) => r.add(u)), n[w].__CLEAR_KEY.has(t))); )
    n = Object.getPrototypeOf(n);
  return [
    ...r
  ];
}
c(K, "getHandler");
function Dt(e, t = C) {
  let n = D(e), r = {};
  for (; n != null && n[w]; ) {
    if (n.hasOwnProperty(w)) {
      const a = n[w].__STATE_NAMESPACE__.get(t);
      if (a && (r = {
        ...a,
        ...r
      }), n[w].__CLEAR_KEY.has(t))
        break;
    }
    n = Object.getPrototypeOf(n);
  }
  return r;
}
c(Dt, "getState");
function ht(e, t = C) {
  return D(e)[w].__STATE_NAMESPACE__.get(t) || {};
}
c(ht, "getOwnState");
function at(e, t) {
  const r = H(t).map((a) => K(t, a).filter((u) => !!u[e]).map((u) => u[e](t))).flat();
  return Promise.all(r);
}
c(at, "invokeHandler");
function X(e, t, n) {
  x(e), e[`__${t.toUpperCase()}__`] = n;
}
c(X, "set");
function Z(e, t) {
  return e[`__${t.toUpperCase()}__`];
}
c(Z, "get");
function Ue(e, t) {
  b(e, t), I(e, t, {
    async init(n) {
      return n[t]();
    }
  });
}
c(Ue, "Init");
function Yt(e, t) {
  b(e, t), I(e, t, {
    async unmount(n) {
      return n[t]();
    }
  });
}
c(Yt, "Unmount");
function Le(e) {
  return (t, n) => {
    b(t, n), lt(t, n, {
      value: e
    });
  };
}
c(Le, "Bind");
function Ne(e, t) {
  t || (e = e.prototype, t = C), Ct(e, t);
}
c(Ne, "Ignore");
function We(e, t) {
  t || (e = e.prototype, t = C), x(e), e[w].__CLEAR_KEY.add(t);
}
c(We, "Clear");
function He(e, t) {
  ct(e, t);
}
c(He, "Expose");
function Ke(e) {
  x(e.prototype);
}
c(Ke, "Empty");
function R(e) {
  return typeof e == "object" && (e = e.constructor), Z(e.prototype, "tag") || e.name;
}
c(R, "getTag");
function $e(e) {
  const t = new e(), n = xt(t), r = {};
  for (const a of n) {
    const u = Dt(t, a);
    u.value && (r[a] = u.value);
  }
  return r;
}
c($e, "getBind");
function Be(e, t) {
  const n = new e(), r = H(n);
  for (const a of r)
    n[a] = t[a];
  return n;
}
c(Be, "plainToClass");
function Ge(e, t = !1) {
  const n = [], r = H(e), a = n.push.bind(n);
  for (const u of r) {
    const l = K(e, u);
    if (l)
      for (const d of l) {
        const E = d.pipe;
        if (E && (E(e, a), n.length && !t))
          return n;
      }
  }
  return n;
}
c(Ge, "transformInstance");
async function Ve(e, t = !1) {
  const n = [], r = H(e), a = n.push.bind(n);
  for (const u of r) {
    const l = K(e, u);
    if (l)
      for (const d of l) {
        const E = d.pipe;
        if (E && (await E(e, a), n.length && !t))
          return n;
      }
  }
  return n;
}
c(Ve, "transformInstanceAsync");
function Fe(e, t, n = !1) {
  const r = [], a = K(e, t), u = r.push.bind(r);
  if (a)
    for (const l of a) {
      const d = l.pipe;
      if (d && (d(e, u), r.length && !n))
        return r;
    }
  return r;
}
c(Fe, "transformProperty");
async function Je(e, t, n = !1) {
  const r = [], a = K(e, t), u = r.push.bind(r);
  if (a)
    for (const l of a) {
      const d = l.pipe;
      if (d && (await d(e, u), r.length && !n))
        return r;
    }
  return r;
}
c(Je, "transformPropertyAsync");
function Xe(e) {
  const t = {}, n = H(e);
  for (const r of n)
    t[r] = e[r];
  return JSON.parse(JSON.stringify(t));
}
c(Xe, "classToPlain");
function qe(e) {
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
c(qe, "snapShot");
function ze(e, t, n) {
  n(t ? e.prototype : e, t);
}
c(ze, "addDecoToClass");
function Ze(...e) {
  return (...t) => {
    for (const n of e)
      n(...t);
  };
}
c(Ze, "Pipeline");
function Q(e) {
  return e[Symbol.toStringTag] === "AsyncFunction";
}
c(Q, "isAsyncFunc");
function Qe(e, t, n) {
  b(e, t);
  const r = ht(e, t) || {};
  n(r), lt(e, t, r);
}
c(Qe, "setPropertyState");
function ke(e, t) {
  const n = ht(e, C) || {};
  return t(n);
}
c(ke, "getShareState");
var Ut = {};
function tn(e, t) {
  Ut[e] = t;
}
c(tn, "Provide");
function en(e) {
  return Ut[e];
}
c(en, "Inject");
var st = {};
function ut(e, t) {
  return st[e] = t, st;
}
c(ut, "setInject");
function G(e) {
  return st[e];
}
c(G, "getInject");
function nn(e) {
  X(e.prototype, "isolate", !0);
}
c(nn, "Isolate");
function rn(e) {
  return (t) => {
    X(t.prototype, "tag", e);
  };
}
c(rn, "Tag");
function on(e) {
  return (t) => {
    X(t.prototype, "tag", Symbol(e || t.name));
  };
}
c(on, "Unique");
function an(e) {
  return (t) => {
    b(t), I(t, void 0, {
      init: /* @__PURE__ */ c(async (n) => {
        const r = await e(n);
        if (r && typeof r == "object" && !Array.isArray(r))
          for (const a in r)
            n[a] = r[a];
      }, "init")
    });
  };
}
c(an, "Assign");
function sn(e) {
  b(e), I(e, void 0, {
    init: /* @__PURE__ */ c(async (t) => {
      const n = R(t);
      globalThis.__PHECDA__ || (globalThis.__PHECDA__ = {}), globalThis.__PHECDA__[n] = t.constructor;
    }, "init")
  });
}
c(sn, "Global");
function un(...e) {
  return (t, n) => {
    b(t, n), I(t, n, {
      async pipe(r, a) {
        for (const u of e)
          try {
            Q(u) ? r[n] = await u(r[n], r, n) : r[n] = u(r[n], r, n);
          } catch (l) {
            a(l.message);
          }
      }
    });
  };
}
c(un, "To");
function fn(e, t) {
  return (n, r) => {
    b(n, r), I(n, r, {
      async pipe(a, u) {
        let l;
        Q(e) ? l = await e(a[r]) : l = e(a[r]), l || u(typeof t == "string" ? t : t());
      }
    });
  };
}
c(fn, "Rule");
function cn(e, t = !1) {
  return (n, r) => {
    b(n, r), I(n, r, {
      init: /* @__PURE__ */ c((a) => {
        if (typeof a[r] == "function") {
          const u = a[r].bind(a);
          Q(u) ? a[r] = async (...l) => {
            try {
              await u(...l);
            } catch (d) {
              if (e(d, a, r), !t)
                throw d;
            }
          } : a[r] = (...l) => {
            try {
              u(...l);
            } catch (d) {
              if (e(d, a, r), !t)
                throw d;
            }
          };
        }
      }, "init")
    });
  };
}
c(cn, "Err");
function ln(e, t) {
  let n;
  return (r, a) => {
    b(r, a), I(r, a, {
      init(u) {
        var l;
        return n = (l = G("watcher")) == null ? void 0 : l({
          eventName: e,
          instance: u,
          key: a,
          options: t
        });
      },
      unmount() {
        return n == null ? void 0 : n();
      }
    });
  };
}
c(ln, "Watcher");
function hn(e) {
  return (t, n) => {
    b(t, n), I(t, n, {
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
c(hn, "Effect");
function pn({ key: e, json: t, stringify: n } = {}) {
  return t || (t = /* @__PURE__ */ c((r) => JSON.parse(r), "json")), n || (n = /* @__PURE__ */ c((r) => JSON.stringify(r), "stringify")), (r, a) => {
    const u = e || R(r);
    x(r), b(r, a), I(r, a, {
      init: /* @__PURE__ */ c((l) => {
        var d;
        return (d = G("storage")) == null ? void 0 : d({
          instance: l,
          key: a,
          tag: u,
          toJSON: t,
          toString: n
        });
      }, "init")
    });
  };
}
c(pn, "Storage");
function dn(e, ...t) {
  return e ? (...n) => {
    t.forEach((r) => r(...n));
  } : () => {
  };
}
c(dn, "If");
function Lt(e) {
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
var It = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
var Rt;
(function(e) {
  (function(t) {
    var n = typeof It == "object" ? It : typeof self == "object" ? self : typeof this == "object" ? this : Function("return this;")(), r = a(e);
    typeof n.Reflect > "u" ? n.Reflect = e : r = a(n.Reflect, r), t(r);
    function a(u, l) {
      return function(d, E) {
        typeof u[d] != "function" && Object.defineProperty(u, d, { configurable: !0, writable: !0, value: E }), l && l(d, E);
      };
    }
  })(function(t) {
    var n = Object.prototype.hasOwnProperty, r = typeof Symbol == "function", a = r && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", u = r && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", l = typeof Object.create == "function", d = { __proto__: [] } instanceof Array, E = !l && !d, U = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: l ? function() {
        return it(/* @__PURE__ */ Object.create(null));
      } : d ? function() {
        return it({ __proto__: null });
      } : function() {
        return it({});
      },
      has: E ? function(i, o) {
        return n.call(i, o);
      } : function(i, o) {
        return o in i;
      },
      get: E ? function(i, o) {
        return n.call(i, o) ? i[o] : void 0;
      } : function(i, o) {
        return i[o];
      }
    }, $ = Object.getPrototypeOf(Function), tt = typeof process == "object" && process["env"] && process["env"].REFLECT_METADATA_USE_MAP_POLYFILL === "true", et = !tt && typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : _e(), Vt = !tt && typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : ye(), Ft = !tt && typeof WeakMap == "function" ? WeakMap : we(), q = new Ft();
    function Jt(i, o, s, f) {
      if (O(s)) {
        if (!Mt(i))
          throw new TypeError();
        if (!bt(o))
          throw new TypeError();
        return re(i, o);
      } else {
        if (!Mt(i))
          throw new TypeError();
        if (!P(o))
          throw new TypeError();
        if (!P(f) && !O(f) && !N(f))
          throw new TypeError();
        return N(f) && (f = void 0), s = Y(s), ie(i, o, s, f);
      }
    }
    t("decorate", Jt);
    function Xt(i, o) {
      function s(f, h) {
        if (!P(f))
          throw new TypeError();
        if (!O(h) && !ce(h))
          throw new TypeError();
        Et(i, o, f, h);
      }
      return s;
    }
    t("metadata", Xt);
    function qt(i, o, s, f) {
      if (!P(s))
        throw new TypeError();
      return O(f) || (f = Y(f)), Et(i, o, s, f);
    }
    t("defineMetadata", qt);
    function zt(i, o, s) {
      if (!P(o))
        throw new TypeError();
      return O(s) || (s = Y(s)), vt(i, o, s);
    }
    t("hasMetadata", zt);
    function Zt(i, o, s) {
      if (!P(o))
        throw new TypeError();
      return O(s) || (s = Y(s)), nt(i, o, s);
    }
    t("hasOwnMetadata", Zt);
    function Qt(i, o, s) {
      if (!P(o))
        throw new TypeError();
      return O(s) || (s = Y(s)), gt(i, o, s);
    }
    t("getMetadata", Qt);
    function kt(i, o, s) {
      if (!P(o))
        throw new TypeError();
      return O(s) || (s = Y(s)), mt(i, o, s);
    }
    t("getOwnMetadata", kt);
    function te(i, o) {
      if (!P(i))
        throw new TypeError();
      return O(o) || (o = Y(o)), Ot(i, o);
    }
    t("getMetadataKeys", te);
    function ee(i, o) {
      if (!P(i))
        throw new TypeError();
      return O(o) || (o = Y(o)), Pt(i, o);
    }
    t("getOwnMetadataKeys", ee);
    function ne(i, o, s) {
      if (!P(o))
        throw new TypeError();
      O(s) || (s = Y(s));
      var f = B(
        o,
        s,
        /*Create*/
        !1
      );
      if (O(f) || !f.delete(i))
        return !1;
      if (f.size > 0)
        return !0;
      var h = q.get(o);
      return h.delete(s), h.size > 0 || q.delete(o), !0;
    }
    t("deleteMetadata", ne);
    function re(i, o) {
      for (var s = i.length - 1; s >= 0; --s) {
        var f = i[s], h = f(o);
        if (!O(h) && !N(h)) {
          if (!bt(h))
            throw new TypeError();
          o = h;
        }
      }
      return o;
    }
    function ie(i, o, s, f) {
      for (var h = i.length - 1; h >= 0; --h) {
        var S = i[h], _ = S(o, s, f);
        if (!O(_) && !N(_)) {
          if (!P(_))
            throw new TypeError();
          f = _;
        }
      }
      return f;
    }
    function B(i, o, s) {
      var f = q.get(i);
      if (O(f)) {
        if (!s)
          return;
        f = new et(), q.set(i, f);
      }
      var h = f.get(o);
      if (O(h)) {
        if (!s)
          return;
        h = new et(), f.set(o, h);
      }
      return h;
    }
    function vt(i, o, s) {
      var f = nt(i, o, s);
      if (f)
        return !0;
      var h = rt(o);
      return N(h) ? !1 : vt(i, h, s);
    }
    function nt(i, o, s) {
      var f = B(
        o,
        s,
        /*Create*/
        !1
      );
      return O(f) ? !1 : ue(f.has(i));
    }
    function gt(i, o, s) {
      var f = nt(i, o, s);
      if (f)
        return mt(i, o, s);
      var h = rt(o);
      if (!N(h))
        return gt(i, h, s);
    }
    function mt(i, o, s) {
      var f = B(
        o,
        s,
        /*Create*/
        !1
      );
      if (!O(f))
        return f.get(i);
    }
    function Et(i, o, s, f) {
      var h = B(
        s,
        f,
        /*Create*/
        !0
      );
      h.set(i, o);
    }
    function Ot(i, o) {
      var s = Pt(i, o), f = rt(i);
      if (f === null)
        return s;
      var h = Ot(f, o);
      if (h.length <= 0)
        return s;
      if (s.length <= 0)
        return h;
      for (var S = new Vt(), _ = [], y = 0, p = s; y < p.length; y++) {
        var v = p[y], g = S.has(v);
        g || (S.add(v), _.push(v));
      }
      for (var L = 0, At = h; L < At.length; L++) {
        var v = At[L], g = S.has(v);
        g || (S.add(v), _.push(v));
      }
      return _;
    }
    function Pt(i, o) {
      var s = [], f = B(
        i,
        o,
        /*Create*/
        !1
      );
      if (O(f))
        return s;
      for (var h = f.keys(), S = le(h), _ = 0; ; ) {
        var y = pe(S);
        if (!y)
          return s.length = _, s;
        var p = he(y);
        try {
          s[_] = p;
        } catch (v) {
          try {
            de(S);
          } finally {
            throw v;
          }
        }
        _++;
      }
    }
    function St(i) {
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
    function O(i) {
      return i === void 0;
    }
    function N(i) {
      return i === null;
    }
    function oe(i) {
      return typeof i == "symbol";
    }
    function P(i) {
      return typeof i == "object" ? i !== null : typeof i == "function";
    }
    function ae(i, o) {
      switch (St(i)) {
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
      var s = o === 3 ? "string" : o === 5 ? "number" : "default", f = Tt(i, a);
      if (f !== void 0) {
        var h = f.call(i, s);
        if (P(h))
          throw new TypeError();
        return h;
      }
      return se(i, s === "default" ? "number" : s);
    }
    function se(i, o) {
      if (o === "string") {
        var s = i.toString;
        if (W(s)) {
          var f = s.call(i);
          if (!P(f))
            return f;
        }
        var h = i.valueOf;
        if (W(h)) {
          var f = h.call(i);
          if (!P(f))
            return f;
        }
      } else {
        var h = i.valueOf;
        if (W(h)) {
          var f = h.call(i);
          if (!P(f))
            return f;
        }
        var S = i.toString;
        if (W(S)) {
          var f = S.call(i);
          if (!P(f))
            return f;
        }
      }
      throw new TypeError();
    }
    function ue(i) {
      return !!i;
    }
    function fe(i) {
      return "" + i;
    }
    function Y(i) {
      var o = ae(
        i,
        3
        /* String */
      );
      return oe(o) ? o : fe(o);
    }
    function Mt(i) {
      return Array.isArray ? Array.isArray(i) : i instanceof Object ? i instanceof Array : Object.prototype.toString.call(i) === "[object Array]";
    }
    function W(i) {
      return typeof i == "function";
    }
    function bt(i) {
      return typeof i == "function";
    }
    function ce(i) {
      switch (St(i)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function Tt(i, o) {
      var s = i[o];
      if (s != null) {
        if (!W(s))
          throw new TypeError();
        return s;
      }
    }
    function le(i) {
      var o = Tt(i, u);
      if (!W(o))
        throw new TypeError();
      var s = o.call(i);
      if (!P(s))
        throw new TypeError();
      return s;
    }
    function he(i) {
      return i.value;
    }
    function pe(i) {
      var o = i.next();
      return o.done ? !1 : o;
    }
    function de(i) {
      var o = i.return;
      o && o.call(i);
    }
    function rt(i) {
      var o = Object.getPrototypeOf(i);
      if (typeof i != "function" || i === $ || o !== $)
        return o;
      var s = i.prototype, f = s && Object.getPrototypeOf(s);
      if (f == null || f === Object.prototype)
        return o;
      var h = f.constructor;
      return typeof h != "function" || h === i ? o : h;
    }
    function _e() {
      var i = {}, o = [], s = (
        /** @class */
        function() {
          function _(y, p, v) {
            this._index = 0, this._keys = y, this._values = p, this._selector = v;
          }
          return _.prototype["@@iterator"] = function() {
            return this;
          }, _.prototype[u] = function() {
            return this;
          }, _.prototype.next = function() {
            var y = this._index;
            if (y >= 0 && y < this._keys.length) {
              var p = this._selector(this._keys[y], this._values[y]);
              return y + 1 >= this._keys.length ? (this._index = -1, this._keys = o, this._values = o) : this._index++, { value: p, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, _.prototype.throw = function(y) {
            throw this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), y;
          }, _.prototype.return = function(y) {
            return this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), { value: y, done: !0 };
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
          }), _.prototype.has = function(y) {
            return this._find(
              y,
              /*insert*/
              !1
            ) >= 0;
          }, _.prototype.get = function(y) {
            var p = this._find(
              y,
              /*insert*/
              !1
            );
            return p >= 0 ? this._values[p] : void 0;
          }, _.prototype.set = function(y, p) {
            var v = this._find(
              y,
              /*insert*/
              !0
            );
            return this._values[v] = p, this;
          }, _.prototype.delete = function(y) {
            var p = this._find(
              y,
              /*insert*/
              !1
            );
            if (p >= 0) {
              for (var v = this._keys.length, g = p + 1; g < v; g++)
                this._keys[g - 1] = this._keys[g], this._values[g - 1] = this._values[g];
              return this._keys.length--, this._values.length--, y === this._cacheKey && (this._cacheKey = i, this._cacheIndex = -2), !0;
            }
            return !1;
          }, _.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = i, this._cacheIndex = -2;
          }, _.prototype.keys = function() {
            return new s(this._keys, this._values, f);
          }, _.prototype.values = function() {
            return new s(this._keys, this._values, h);
          }, _.prototype.entries = function() {
            return new s(this._keys, this._values, S);
          }, _.prototype["@@iterator"] = function() {
            return this.entries();
          }, _.prototype[u] = function() {
            return this.entries();
          }, _.prototype._find = function(y, p) {
            return this._cacheKey !== y && (this._cacheIndex = this._keys.indexOf(this._cacheKey = y)), this._cacheIndex < 0 && p && (this._cacheIndex = this._keys.length, this._keys.push(y), this._values.push(void 0)), this._cacheIndex;
          }, _;
        }()
      );
      function f(_, y) {
        return _;
      }
      function h(_, y) {
        return y;
      }
      function S(_, y) {
        return [_, y];
      }
    }
    function ye() {
      return (
        /** @class */
        function() {
          function i() {
            this._map = new et();
          }
          return Object.defineProperty(i.prototype, "size", {
            get: function() {
              return this._map.size;
            },
            enumerable: !0,
            configurable: !0
          }), i.prototype.has = function(o) {
            return this._map.has(o);
          }, i.prototype.add = function(o) {
            return this._map.set(o, o), this;
          }, i.prototype.delete = function(o) {
            return this._map.delete(o);
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
          }, i.prototype[u] = function() {
            return this.keys();
          }, i;
        }()
      );
    }
    function we() {
      var i = 16, o = U.create(), s = f();
      return (
        /** @class */
        function() {
          function p() {
            this._key = f();
          }
          return p.prototype.has = function(v) {
            var g = h(
              v,
              /*create*/
              !1
            );
            return g !== void 0 ? U.has(g, this._key) : !1;
          }, p.prototype.get = function(v) {
            var g = h(
              v,
              /*create*/
              !1
            );
            return g !== void 0 ? U.get(g, this._key) : void 0;
          }, p.prototype.set = function(v, g) {
            var L = h(
              v,
              /*create*/
              !0
            );
            return L[this._key] = g, this;
          }, p.prototype.delete = function(v) {
            var g = h(
              v,
              /*create*/
              !1
            );
            return g !== void 0 ? delete g[this._key] : !1;
          }, p.prototype.clear = function() {
            this._key = f();
          }, p;
        }()
      );
      function f() {
        var p;
        do
          p = "@@WeakMap@@" + y();
        while (U.has(o, p));
        return o[p] = !0, p;
      }
      function h(p, v) {
        if (!n.call(p, s)) {
          if (!v)
            return;
          Object.defineProperty(p, s, { value: U.create() });
        }
        return p[s];
      }
      function S(p, v) {
        for (var g = 0; g < v; ++g)
          p[g] = Math.random() * 255 | 0;
        return p;
      }
      function _(p) {
        return typeof Uint8Array == "function" ? typeof crypto < "u" ? crypto.getRandomValues(new Uint8Array(p)) : typeof msCrypto < "u" ? msCrypto.getRandomValues(new Uint8Array(p)) : S(new Uint8Array(p), p) : S(new Array(p), p);
      }
      function y() {
        var p = _(i);
        p[6] = p[6] & 79 | 64, p[8] = p[8] & 191 | 128;
        for (var v = "", g = 0; g < i; ++g) {
          var L = p[g];
          (g === 4 || g === 6 || g === 8) && (v += "-"), L < 16 && (v += "0"), v += L.toString(16).toLowerCase();
        }
        return v;
      }
    }
    function it(i) {
      return i.__ = void 0, delete i.__, i;
    }
  });
})(Rt || (Rt = {}));
var _n = Object.defineProperty, M = (e, t) => _n(e, "name", { value: t, configurable: !0 }), T = Lt();
function Nt() {
  G("watcher") || ut("watcher", ({ eventName: e, instance: t, key: n, options: r }) => {
    const a = typeof t[n] == "function" ? t[n].bind(t) : (u) => t[n] = u;
    if (r != null && r.once) {
      const u = /* @__PURE__ */ M(() => {
        a(), T.off(e);
      }, "handler");
      T.on(e, u);
    } else
      T.on(e, a);
    return () => T.off(e);
  }), G("storage") || ut("storage", ({ tag: e, key: t, instance: n, toJSON: r, toString: a }) => {
    e = `phecda:${t ? `${e}-${t}` : e}`;
    const u = localStorage.getItem(e);
    if (u) {
      const l = r(u);
      if (t)
        n[t] = l;
      else
        for (const d in l)
          d && (n[d] = l[d]);
    }
    localStorage.setItem(e, a(t ? n[t] : n)), globalThis.addEventListener("beforeunload", () => {
      localStorage.setItem(e, a(t ? n[t] : n));
    });
  });
}
M(Nt, "defaultWebInject");
function ft(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
M(ft, "isObject");
function pt(e, t) {
  for (const n in t) {
    if (!t.hasOwnProperty(n))
      continue;
    const r = t[n], a = e[n];
    ft(a) && ft(r) && e.hasOwnProperty(n) ? e[n] = pt(a, r) : e[n] = r;
  }
  return e;
}
M(pt, "deepMerge");
function yn(...e) {
  return Promise.all(e.map((t) => t.__PROMISE_SYMBOL__));
}
M(yn, "wait");
function Wt(e, t) {
  return Reflect.getMetadata("design:paramtypes", e, t);
}
M(Wt, "getParamtypes");
var dt = /* @__PURE__ */ new Map();
function Ht(e, t) {
  dt.set(e, t);
}
M(Ht, "setDefaultPhecda");
function Kt(e) {
  return dt.get(e);
}
M(Kt, "getDefaultPhecda");
function wn(e) {
  return dt.delete(e);
}
M(wn, "delDefaultPhecda");
var ot = /* @__PURE__ */ new WeakMap();
function k(e, t) {
  if (!ot.has(e)) {
    const n = /* @__PURE__ */ new WeakMap();
    ot.set(e, new Proxy(e, {
      get(r, a) {
        return typeof r[a] == "function" && !r[a].toString().startsWith("(") ? (n.has(r[a]) || n.set(r[a], t ? t(r, a) : r[a].bind(r)), n.get(r[a])) : r[a];
      }
    }));
  }
  return ot.get(e);
}
M(k, "bindMethod");
var V, vn = (V = class {
  constructor(t, n) {
    j(this, "namespace");
    j(this, "parseModule");
    /**
    * for ssr or manual inject
    */
    j(this, "memory");
    j(this, "state");
    j(this, "modelMap");
    j(this, "emitter");
    this.namespace = t, this.parseModule = n, this.memory = {}, this.state = {}, this.modelMap = /* @__PURE__ */ new WeakMap(), this.emitter = Lt(), typeof window < "u" && (Nt(), Ht(t, this));
  }
  /**
  *   Initialize a module that has not been created yet, and return it directly if it is cached.
  */
  init(t) {
    const n = R(t), r = /* @__PURE__ */ M(() => {
      const d = Wt(t);
      let E;
      if (this.emit("Instantiate", {
        tag: n
      }), d) {
        const U = [];
        for (const $ in d)
          U[$] = this.init(d[$]);
        E = this.parseModule(new t(...U));
      } else
        E = this.parseModule(new t());
      return n in this.memory && Object.assign(E, this.memory[n]), typeof window < "u" && (this.emit("Initialize", {
        tag: n
      }), E.__PROMISE_SYMBOL__ = at("init", E)), E;
    }, "initModel"), { state: a, modelMap: u } = this;
    if (Z(t.prototype, "isolate"))
      return r();
    if (n in a)
      return u.get(a[n]) !== t && (this.emit("Synonym", {
        tag: n
      }), console.warn(`Synonym model: Module taged "${String(n)}" has been loaded before, so won't load Module "${t.name}"`)), a[n];
    const l = r();
    return a[n] = l, u.set(l, t), l;
  }
  patch(t, n) {
    const r = R(t), { state: a } = this;
    this.emit("Patch", {
      tag: r,
      data: n
    }), pt(a[r], n);
  }
  wait(...t) {
    return Promise.all(t.map((n) => (typeof n == "function" && (n = R(n)), this.get(n).__PROMISE_SYMBOL__)));
  }
  get(t) {
    const { state: n } = this, r = typeof t == "function" ? R(t) : t;
    return n[r];
  }
  getModel(t) {
    const { state: n } = this;
    return this.modelMap.get(n[t]);
  }
  reset(t) {
    const { state: n } = this, r = R(t);
    if (!(r in n))
      return this.init(t);
    this.emit("Reset", {
      tag: r
    });
    const a = this.init(t), u = new t();
    Object.assign(a, u);
    for (const l in a)
      l in u || delete a[l];
  }
  async unmount(t) {
    const n = typeof t == "function" ? R(t) : t;
    if (!this.has(n))
      return;
    this.emit("Unmount", {
      tag: n
    });
    const { state: r } = this;
    await at("unmount", this.get(n)), delete r[n];
  }
  async unmountAll() {
    const { state: t } = this;
    return Promise.all(Object.keys(t).map((n) => this.unmount(n)));
  }
  has(t) {
    const { state: n } = this;
    return (typeof t == "function" ? R(t) : t) in n;
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
}, M(V, "WebPhecda"), V);
function $t(e, t, n, r) {
  var a = arguments.length, u = a < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, n) : r, l;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    u = Reflect.decorate(e, t, n, r);
  else
    for (var d = e.length - 1; d >= 0; d--)
      (l = e[d]) && (u = (a < 3 ? l(u) : a > 3 ? l(t, n, u) : l(t, n)) || u);
  return a > 3 && u && Object.defineProperty(t, n, u), u;
}
M($t, "_ts_decorate");
function z(e, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, t);
}
M(z, "_ts_metadata");
var F, gn = (F = class {
  constructor() {
    j(this, "__UNMOUNT_SYMBOL__", []);
    j(this, "__PROMISE_SYMBOL__");
  }
  get tag() {
    return R(this);
  }
  then(t, n) {
    return this.__PROMISE_SYMBOL__.then(t, n);
  }
  on(t, n) {
    T.on(t, n), this.onUnmount(() => T.off(t, n));
  }
  emit(t, n) {
    T.emit(t, n);
  }
  off(t, n) {
    T.off(t, n);
  }
  onUnmount(t) {
    this.__UNMOUNT_SYMBOL__.push(t);
  }
  _unmount() {
    return Promise.all(this.__UNMOUNT_SYMBOL__.map((t) => t()));
  }
}, M(F, "Base"), F);
$t([
  Yt,
  z("design:type", Function),
  z("design:paramtypes", []),
  z("design:returntype", void 0)
], gn.prototype, "_unmount", null);
var mn = Object.defineProperty, m = (e, t) => mn(e, "name", { value: t, configurable: !0 });
function En(e, t) {
  const n = `[phecda-vue]: ${e}`;
  t === "error" ? console.error(n) : t === "warn" ? console.warn(n) : console.log(n);
}
m(En, "toastMessage");
var Bt = Symbol(void 0), J, On = (J = class extends vn {
  constructor() {
    super(...arguments);
    j(this, "vueApp");
  }
  install(n) {
    n.provide(Bt, this), this.vueApp = n;
  }
}, m(J, "VuePhecda"), J);
function Pn() {
  return new On("vue", (t) => k(Z(t, "shallow") ? me(t) : Ee(t), void 0));
}
m(Pn, "createPhecda");
function Sn(e, t) {
  let n = Object.getPrototypeOf(e);
  for (; n; ) {
    if (n.hasOwnProperty(t))
      return n;
    n = Object.getPrototypeOf(n);
  }
  return null;
}
m(Sn, "findPrototypeWithMethod");
function Mn(e) {
  const t = /* @__PURE__ */ new Set();
  for (e = Object.getPrototypeOf(e); e.constructor.name !== "Object"; )
    Object.getOwnPropertyNames(e).forEach((n) => {
      typeof Object.getOwnPropertyDescriptor(e, n).value == "function" && n !== "constructor" && t.add(n);
    }), e = Object.getPrototypeOf(e);
  return [
    ...t
  ];
}
m(Mn, "getAllMethods");
function bn(e) {
  const t = /* @__PURE__ */ new Set();
  for (e = Object.getPrototypeOf(e); e.constructor.name !== "Object"; )
    Object.getOwnPropertyNames(e).forEach((n) => {
      typeof Object.getOwnPropertyDescriptor(e, n).get == "function" && t.add(n);
    }), e = Object.getPrototypeOf(e);
  return [
    ...t
  ];
}
m(bn, "getAllGetters");
function Tn(e) {
  return Oe(e);
}
m(Tn, "markRaw");
function _t(e) {
  let t = 0, n, r;
  const a = /* @__PURE__ */ m(() => {
    r && --t <= 0 && (r.stop(), n = r = null);
  }, "dispose"), u = /* @__PURE__ */ m(() => (t++, n || (r = Ae(!0), n = r.run(() => e())), Ie(a), n), "cb");
  return u.r = !0, u;
}
m(_t, "createSharedReactive");
var A = /* @__PURE__ */ new WeakMap();
function An(e) {
  return Pe(Gt(e));
}
m(An, "useRaw");
function yt() {
  if (!Se())
    throw new Error("[phecda-vue]: use hook inside component setup function");
  const e = Me(Bt);
  if (!e)
    throw new Error("[phecda-vue]: must install the vue plugin ");
  return A.has(e) || A.set(e, k(e)), A.get(e);
}
m(yt, "usePhecda");
function In(e) {
}
m(In, "setStateToComponent");
function wt(e) {
  const t = e || Kt("vue");
  if (!t)
    throw new Error("[phecda-vue]:  manually inject the phecda instance if there is no default phecda");
  return A.has(t) || A.set(t, k(t)), A.get(t);
}
m(wt, "getPhecda");
function Rn(e, t) {
  return be(() => {
    T.off(e, t);
  }), T.on(e, t), {
    emit: /* @__PURE__ */ m((n) => T.emit(e, n), "emit"),
    cancel: /* @__PURE__ */ m(() => T.off(e, t), "cancel")
  };
}
m(Rn, "useEvent");
function Gt(e) {
  return yt().init(e);
}
m(Gt, "useR");
function jn(e, t) {
  return wt(t).init(e);
}
m(jn, "getR");
function Cn(e) {
  const t = yt().init(e);
  if (A.has(t))
    return A.get(t);
  const n = {}, r = new Proxy(t, {
    get(a, u) {
      var d;
      if (typeof a[u] == "function" || (d = a[u]) != null && d.__v_skip)
        return a[u];
      const l = n[u];
      return l && l.r ? l() : (n[u] = _t(() => jt(a, u)), n[u]());
    },
    set() {
      return !1;
    }
  });
  return A.set(t, r), r;
}
m(Cn, "useV");
function xn(e, t) {
  const n = wt(t).init(e);
  if (A.has(n))
    return A.get(n);
  const r = {}, a = new Proxy(n, {
    get(u, l) {
      var E;
      if (typeof u[l] == "function" || (E = u[l]) != null && E.__v_skip)
        return u[l];
      const d = r[l];
      return d && d.r ? d() : (r[l] = _t(() => jt(u, l)), r[l]());
    },
    set() {
      return !1;
    }
  });
  return A.set(n, a), a;
}
m(xn, "getV");
function Dn(e) {
  X(e.prototype, "shallow", !0);
}
m(Dn, "Shallow");
function Yn(e) {
  return (t, n) => {
    b(t, n);
    let r;
    I(t, n, {
      init(a) {
        if (typeof a[n] != "function")
          throw new Error("WatchEffect must decorate function");
        r = Te(a[n].bind(a), e);
      },
      unmount() {
        return r == null ? void 0 : r();
      }
    });
  };
}
m(Yn, "WatchEffect");
export {
  an as Assign,
  gn as Base,
  Le as Bind,
  We as Clear,
  Ut as DataMap,
  hn as Effect,
  Ke as Empty,
  cn as Err,
  He as Expose,
  sn as Global,
  dn as If,
  Ne as Ignore,
  Ue as Init,
  en as Inject,
  nn as Isolate,
  w as PHECDA_KEY,
  Ze as Pipeline,
  tn as Provide,
  fn as Rule,
  C as SHARE_KEY,
  Dn as Shallow,
  pn as Storage,
  rn as Tag,
  un as To,
  on as Unique,
  Yt as Unmount,
  On as VuePhecda,
  Yn as WatchEffect,
  ln as Watcher,
  vn as WebPhecda,
  st as activeInstance,
  ze as addDecoToClass,
  k as bindMethod,
  Xe as classToPlain,
  Pn as createPhecda,
  _t as createSharedReactive,
  Nt as defaultWebInject,
  wn as delDefaultPhecda,
  T as emitter,
  Z as get,
  $e as getBind,
  Kt as getDefaultPhecda,
  H as getExposeKey,
  K as getHandler,
  G as getInject,
  xe as getOwnExposeKey,
  Ye as getOwnHandler,
  De as getOwnIgnoreKey,
  ht as getOwnState,
  Ce as getOwnStateKey,
  wt as getPhecda,
  D as getPhecdaFromTarget,
  jn as getR,
  ke as getShareState,
  Dt as getState,
  xt as getStateKey,
  R as getTag,
  xn as getV,
  x as init,
  at as invokeHandler,
  Q as isAsyncFunc,
  je as isPhecda,
  Tn as markRaw,
  dt as phecdaNamespace,
  Bt as phecdaSymbol,
  Be as plainToClass,
  X as set,
  Ht as setDefaultPhecda,
  ct as setExposeKey,
  I as setHandler,
  Ct as setIgnoreKey,
  ut as setInject,
  Qe as setPropertyState,
  lt as setState,
  b as setStateKey,
  qe as snapShot,
  Ge as transformInstance,
  Ve as transformInstanceAsync,
  Fe as transformProperty,
  Je as transformPropertyAsync,
  Rn as useEvent,
  yt as usePhecda,
  Gt as useR,
  An as useRaw,
  Cn as useV,
  yn as wait
};
