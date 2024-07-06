var ve = Object.defineProperty;
var ge = (e, t, n) => t in e ? ve(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var R = (e, t, n) => (ge(e, typeof t != "symbol" ? t + "" : t, n), n);
import { s as me, r as Ee, m as Oe, t as Se, h as Pe, i as Me, o as be, w as Te, e as Ae, a as Ie, b as jt } from "./runtime-core.esm-bundler-05bc1582.js";
var Re = Object.defineProperty, l = (e, t) => Re(e, "name", { value: t, configurable: !0 }), C = Symbol("phecda"), w = Symbol("phecda");
function je(e) {
  return typeof e == "function" ? !!e.prototype[w] : !1;
}
l(je, "isPhecda");
function x(e) {
  e && (e.hasOwnProperty(w) || (e[w] = {
    __EXPOSE_KEY: /* @__PURE__ */ new Set(),
    __IGNORE_KEY: /* @__PURE__ */ new Set(),
    __CLEAR_KEY: /* @__PURE__ */ new Set(),
    __STATE_KEY: /* @__PURE__ */ new Set(),
    __STATE_HANDLER__: /* @__PURE__ */ new Map(),
    __STATE_NAMESPACE__: /* @__PURE__ */ new Map()
  }));
}
l(x, "init");
function D(e) {
  return typeof e == "function" ? e.prototype : e.hasOwnProperty(w) ? e : Object.getPrototypeOf(e);
}
l(D, "getPhecdaFromTarget");
function b(e, t) {
  t || (t = C, e = e.prototype), x(e), e[w].__STATE_KEY.add(t), ct(e, t);
}
l(b, "setStateKey");
function ct(e, t) {
  t || (t = C, e = e.prototype), x(e), e[w].__EXPOSE_KEY.add(t);
}
l(ct, "setExposeKey");
function Ct(e, t) {
  t || (t = C, e = e.prototype), x(e), e[w].__IGNORE_KEY.add(t);
}
l(Ct, "setIgnoreKey");
function I(e, t, n) {
  t || (t = C, e = e.prototype), x(e), e[w].__STATE_HANDLER__.has(t) ? e[w].__STATE_HANDLER__.get(t).push(n) : e[w].__STATE_HANDLER__.set(t, [
    n
  ]);
}
l(I, "setHandler");
function lt(e, t, n) {
  t || (t = C, e = e.prototype), x(e), e[w].__STATE_NAMESPACE__.set(t, n);
}
l(lt, "setState");
function Ce(e) {
  return [
    ...D(e)[w].__STATE_KEY
  ];
}
l(Ce, "getOwnStateKey");
function xt(e) {
  let t = D(e);
  const n = /* @__PURE__ */ new Set();
  for (; t != null && t[w]; )
    t.hasOwnProperty(w) && t[w].__STATE_KEY.forEach((r) => n.add(r)), t = Object.getPrototypeOf(t);
  return [
    ...n
  ];
}
l(xt, "getStateKey");
function xe(e) {
  const t = D(e);
  return [
    ...t[w].__EXPOSE_KEY
  ].filter((n) => !t[w].__IGNORE_KEY.has(n));
}
l(xe, "getOwnExposeKey");
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
l(H, "getExposeKey");
function De(e) {
  var n;
  return [
    ...(n = D(e)[w]) == null ? void 0 : n.__IGNORE_KEY
  ];
}
l(De, "getOwnIgnoreKey");
function Ye(e, t) {
  var r;
  return ((r = D(e)[w]) == null ? void 0 : r.__STATE_HANDLER__.get(t)) || [];
}
l(Ye, "getOwnHandler");
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
l(K, "getHandler");
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
l(Dt, "getState");
function ht(e, t = C) {
  return D(e)[w].__STATE_NAMESPACE__.get(t) || {};
}
l(ht, "getOwnState");
function at(e, t) {
  const r = H(t).map((a) => K(t, a).filter((u) => !!u[e]).map((u) => u[e](t))).flat();
  return Promise.all(r);
}
l(at, "invokeHandler");
function X(e, t, n) {
  x(e), e[`__${t.toUpperCase()}__`] = n;
}
l(X, "set");
function Z(e, t) {
  return e[`__${t.toUpperCase()}__`];
}
l(Z, "get");
function Le(e, t) {
  b(e, t), I(e, t, {
    async init(n) {
      return n[t]();
    }
  });
}
l(Le, "Init");
function Yt(e, t) {
  b(e, t), I(e, t, {
    async unmount(n) {
      return n[t]();
    }
  });
}
l(Yt, "Unmount");
function Ue(e) {
  return (t, n) => {
    b(t, n), lt(t, n, {
      value: e
    });
  };
}
l(Ue, "Bind");
function Ne(e, t) {
  t || (e = e.prototype, t = C), Ct(e, t);
}
l(Ne, "Ignore");
function We(e, t) {
  t || (e = e.prototype, t = C), x(e), e[w].__CLEAR_KEY.add(t);
}
l(We, "Clear");
function He(e, t) {
  ct(e, t);
}
l(He, "Expose");
function Ke(e) {
  x(e.prototype);
}
l(Ke, "Empty");
function j(e) {
  return typeof e == "object" && (e = e.constructor), Z(e.prototype, "tag") || e.name;
}
l(j, "getTag");
function $e(e) {
  const t = new e(), n = xt(t), r = {};
  for (const a of n) {
    const u = Dt(t, a);
    u.value && (r[a] = u.value);
  }
  return r;
}
l($e, "getBind");
function Ge(e, t) {
  const n = new e(), r = H(n);
  for (const a of r)
    n[a] = t[a];
  return n;
}
l(Ge, "plainToClass");
function Be(e, t = !1) {
  const n = [], r = H(e), a = n.push.bind(n);
  for (const u of r) {
    const c = K(e, u);
    if (c)
      for (const d of c) {
        const E = d.pipe;
        if (E && (E(e, a), n.length && !t))
          return n;
      }
  }
  return n;
}
l(Be, "transformInstance");
async function Ve(e, t = !1) {
  const n = [], r = H(e), a = n.push.bind(n);
  for (const u of r) {
    const c = K(e, u);
    if (c)
      for (const d of c) {
        const E = d.pipe;
        if (E && (await E(e, a), n.length && !t))
          return n;
      }
  }
  return n;
}
l(Ve, "transformInstanceAsync");
function Fe(e, t, n = !1) {
  const r = [], a = K(e, t), u = r.push.bind(r);
  if (a)
    for (const c of a) {
      const d = c.pipe;
      if (d && (d(e, u), r.length && !n))
        return r;
    }
  return r;
}
l(Fe, "transformProperty");
async function Je(e, t, n = !1) {
  const r = [], a = K(e, t), u = r.push.bind(r);
  if (a)
    for (const c of a) {
      const d = c.pipe;
      if (d && (await d(e, u), r.length && !n))
        return r;
    }
  return r;
}
l(Je, "transformPropertyAsync");
function Xe(e) {
  const t = {}, n = H(e);
  for (const r of n)
    t[r] = e[r];
  return JSON.parse(JSON.stringify(t));
}
l(Xe, "classToPlain");
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
l(qe, "snapShot");
function ze(e, t, n) {
  n(t ? e.prototype : e, t);
}
l(ze, "addDecoToClass");
function Ze(...e) {
  return (...t) => {
    for (const n of e)
      n(...t);
  };
}
l(Ze, "Pipeline");
function Q(e) {
  return e[Symbol.toStringTag] === "AsyncFunction";
}
l(Q, "isAsyncFunc");
function Qe(e, t, n) {
  b(e, t);
  const r = ht(e, t) || {};
  n(r), lt(e, t, r);
}
l(Qe, "setPropertyState");
function ke(e, t) {
  const n = ht(e, C) || {};
  return t(n);
}
l(ke, "getShareState");
var Lt = {};
function tn(e, t) {
  Lt[e] = t;
}
l(tn, "Provide");
function en(e) {
  return Lt[e];
}
l(en, "Inject");
var st = {};
function ut(e, t) {
  return st[e] = t, st;
}
l(ut, "setInject");
function B(e) {
  return st[e];
}
l(B, "getInject");
function nn(e) {
  X(e.prototype, "isolate", !0), e.prototype[w].__ISOLATE__ = !0;
}
l(nn, "Isolate");
function rn(e) {
  return (t) => {
    X(t.prototype, "tag", e);
  };
}
l(rn, "Tag");
function on(e) {
  return (t) => {
    X(t.prototype, "tag", Symbol(e || t.name));
  };
}
l(on, "Unique");
function an(e) {
  return (t) => {
    b(t), I(t, void 0, {
      init: async (n) => {
        const r = await e(n);
        if (r && typeof r == "object" && !Array.isArray(r))
          for (const a in r)
            n[a] = r[a];
      }
    });
  };
}
l(an, "Assign");
function sn(e) {
  b(e), I(e, void 0, {
    init: async (t) => {
      const n = t[w].__TAG__;
      n && (globalThis.__PHECDA__ || (globalThis.__PHECDA__ = {}), globalThis.__PHECDA__[n] = t.constructor);
    }
  });
}
l(sn, "Global");
function un(...e) {
  return (t, n) => {
    b(t, n), I(t, n, {
      async pipe(r, a) {
        for (const u of e)
          try {
            Q(u) ? r[n] = await u(r[n], r, n) : r[n] = u(r[n], r, n);
          } catch (c) {
            a(c.message);
          }
      }
    });
  };
}
l(un, "To");
function fn(e, t) {
  return (n, r) => {
    b(n, r), I(n, r, {
      async pipe(a, u) {
        let c;
        Q(e) ? c = await e(a[r]) : c = e(a[r]), c || u(typeof t == "string" ? t : t());
      }
    });
  };
}
l(fn, "Rule");
function cn(e, t = !1) {
  return (n, r) => {
    b(n, r), I(n, r, {
      init: (a) => {
        if (typeof a[r] == "function") {
          const u = a[r].bind(a);
          Q(u) ? a[r] = async (...c) => {
            try {
              await u(...c);
            } catch (d) {
              if (e(d, a, r), !t)
                throw d;
            }
          } : a[r] = (...c) => {
            try {
              u(...c);
            } catch (d) {
              if (e(d, a, r), !t)
                throw d;
            }
          };
        }
      }
    });
  };
}
l(cn, "Err");
function ln(e, t) {
  let n;
  return (r, a) => {
    b(r, a), I(r, a, {
      init(u) {
        var c;
        return n = (c = B("watcher")) == null ? void 0 : c({
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
l(ln, "Watcher");
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
l(hn, "Effect");
function pn({ key: e, json: t, stringify: n } = {}) {
  return t || (t = /* @__PURE__ */ l((r) => JSON.parse(r), "json")), n || (n = /* @__PURE__ */ l((r) => JSON.stringify(r), "stringify")), (r, a) => {
    const u = e || j(r);
    x(r), b(r, a), I(r, a, {
      init: (c) => {
        var d;
        return (d = B("storage")) == null ? void 0 : d({
          instance: c,
          key: a,
          tag: u,
          toJSON: t,
          toString: n
        });
      }
    });
  };
}
l(pn, "Storage");
function Ut(e) {
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
    function a(u, c) {
      return function(d, E) {
        typeof u[d] != "function" && Object.defineProperty(u, d, { configurable: !0, writable: !0, value: E }), c && c(d, E);
      };
    }
  })(function(t) {
    var n = Object.prototype.hasOwnProperty, r = typeof Symbol == "function", a = r && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", u = r && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", c = typeof Object.create == "function", d = { __proto__: [] } instanceof Array, E = !c && !d, L = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: c ? function() {
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
        if (!S(o))
          throw new TypeError();
        if (!S(f) && !O(f) && !N(f))
          throw new TypeError();
        return N(f) && (f = void 0), s = Y(s), ie(i, o, s, f);
      }
    }
    t("decorate", Jt);
    function Xt(i, o) {
      function s(f, h) {
        if (!S(f))
          throw new TypeError();
        if (!O(h) && !ce(h))
          throw new TypeError();
        Et(i, o, f, h);
      }
      return s;
    }
    t("metadata", Xt);
    function qt(i, o, s, f) {
      if (!S(s))
        throw new TypeError();
      return O(f) || (f = Y(f)), Et(i, o, s, f);
    }
    t("defineMetadata", qt);
    function zt(i, o, s) {
      if (!S(o))
        throw new TypeError();
      return O(s) || (s = Y(s)), vt(i, o, s);
    }
    t("hasMetadata", zt);
    function Zt(i, o, s) {
      if (!S(o))
        throw new TypeError();
      return O(s) || (s = Y(s)), nt(i, o, s);
    }
    t("hasOwnMetadata", Zt);
    function Qt(i, o, s) {
      if (!S(o))
        throw new TypeError();
      return O(s) || (s = Y(s)), gt(i, o, s);
    }
    t("getMetadata", Qt);
    function kt(i, o, s) {
      if (!S(o))
        throw new TypeError();
      return O(s) || (s = Y(s)), mt(i, o, s);
    }
    t("getOwnMetadata", kt);
    function te(i, o) {
      if (!S(i))
        throw new TypeError();
      return O(o) || (o = Y(o)), Ot(i, o);
    }
    t("getMetadataKeys", te);
    function ee(i, o) {
      if (!S(i))
        throw new TypeError();
      return O(o) || (o = Y(o)), St(i, o);
    }
    t("getOwnMetadataKeys", ee);
    function ne(i, o, s) {
      if (!S(o))
        throw new TypeError();
      O(s) || (s = Y(s));
      var f = G(
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
        var P = i[h], _ = P(o, s, f);
        if (!O(_) && !N(_)) {
          if (!S(_))
            throw new TypeError();
          f = _;
        }
      }
      return f;
    }
    function G(i, o, s) {
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
      var f = G(
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
      var f = G(
        o,
        s,
        /*Create*/
        !1
      );
      if (!O(f))
        return f.get(i);
    }
    function Et(i, o, s, f) {
      var h = G(
        s,
        f,
        /*Create*/
        !0
      );
      h.set(i, o);
    }
    function Ot(i, o) {
      var s = St(i, o), f = rt(i);
      if (f === null)
        return s;
      var h = Ot(f, o);
      if (h.length <= 0)
        return s;
      if (s.length <= 0)
        return h;
      for (var P = new Vt(), _ = [], y = 0, p = s; y < p.length; y++) {
        var v = p[y], g = P.has(v);
        g || (P.add(v), _.push(v));
      }
      for (var U = 0, At = h; U < At.length; U++) {
        var v = At[U], g = P.has(v);
        g || (P.add(v), _.push(v));
      }
      return _;
    }
    function St(i, o) {
      var s = [], f = G(
        i,
        o,
        /*Create*/
        !1
      );
      if (O(f))
        return s;
      for (var h = f.keys(), P = le(h), _ = 0; ; ) {
        var y = pe(P);
        if (!y)
          return s.length = _, s;
        var p = he(y);
        try {
          s[_] = p;
        } catch (v) {
          try {
            de(P);
          } finally {
            throw v;
          }
        }
        _++;
      }
    }
    function Pt(i) {
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
    function S(i) {
      return typeof i == "object" ? i !== null : typeof i == "function";
    }
    function ae(i, o) {
      switch (Pt(i)) {
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
        if (S(h))
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
          if (!S(f))
            return f;
        }
        var h = i.valueOf;
        if (W(h)) {
          var f = h.call(i);
          if (!S(f))
            return f;
        }
      } else {
        var h = i.valueOf;
        if (W(h)) {
          var f = h.call(i);
          if (!S(f))
            return f;
        }
        var P = i.toString;
        if (W(P)) {
          var f = P.call(i);
          if (!S(f))
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
      switch (Pt(i)) {
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
      if (!S(s))
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
            return new s(this._keys, this._values, P);
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
      function P(_, y) {
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
      var i = 16, o = L.create(), s = f();
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
            return g !== void 0 ? L.has(g, this._key) : !1;
          }, p.prototype.get = function(v) {
            var g = h(
              v,
              /*create*/
              !1
            );
            return g !== void 0 ? L.get(g, this._key) : void 0;
          }, p.prototype.set = function(v, g) {
            var U = h(
              v,
              /*create*/
              !0
            );
            return U[this._key] = g, this;
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
        while (L.has(o, p));
        return o[p] = !0, p;
      }
      function h(p, v) {
        if (!n.call(p, s)) {
          if (!v)
            return;
          Object.defineProperty(p, s, { value: L.create() });
        }
        return p[s];
      }
      function P(p, v) {
        for (var g = 0; g < v; ++g)
          p[g] = Math.random() * 255 | 0;
        return p;
      }
      function _(p) {
        return typeof Uint8Array == "function" ? typeof crypto < "u" ? crypto.getRandomValues(new Uint8Array(p)) : typeof msCrypto < "u" ? msCrypto.getRandomValues(new Uint8Array(p)) : P(new Uint8Array(p), p) : P(new Array(p), p);
      }
      function y() {
        var p = _(i);
        p[6] = p[6] & 79 | 64, p[8] = p[8] & 191 | 128;
        for (var v = "", g = 0; g < i; ++g) {
          var U = p[g];
          (g === 4 || g === 6 || g === 8) && (v += "-"), U < 16 && (v += "0"), v += U.toString(16).toLowerCase();
        }
        return v;
      }
    }
    function it(i) {
      return i.__ = void 0, delete i.__, i;
    }
  });
})(Rt || (Rt = {}));
var dn = Object.defineProperty, M = (e, t) => dn(e, "name", { value: t, configurable: !0 }), T = Ut();
function Nt() {
  B("watcher") || ut("watcher", ({ eventName: e, instance: t, key: n, options: r }) => {
    const a = typeof t[n] == "function" ? t[n].bind(t) : (u) => t[n] = u;
    if (r != null && r.once) {
      const u = /* @__PURE__ */ M(() => {
        a(), T.off(e);
      }, "handler");
      T.on(e, u);
    } else
      T.on(e, a);
    return () => T.off(e);
  }), B("storage") || ut("storage", ({ tag: e, key: t, instance: n, toJSON: r, toString: a }) => {
    e = `phecda:${t ? `${e}-${t}` : e}`;
    const u = localStorage.getItem(e);
    if (u) {
      const c = r(u);
      if (t)
        n[t] = c;
      else
        for (const d in c)
          d && (n[d] = c[d]);
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
function _n(...e) {
  return Promise.all(e.map((t) => t.__PROMISE_SYMBOL__));
}
M(_n, "wait");
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
function yn(e) {
  return dt.delete(e);
}
M(yn, "delDefaultPhecda");
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
var V, wn = (V = class {
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
    this.namespace = t, this.parseModule = n, this.memory = {}, this.state = {}, this.modelMap = /* @__PURE__ */ new WeakMap(), this.emitter = Ut(), typeof window < "u" && (Nt(), Ht(t, this));
  }
  /**
  *   Initialize a module that has not been created yet, and return it directly if it is cached.
  */
  init(t) {
    const n = j(t), r = /* @__PURE__ */ M(() => {
      const d = Wt(t);
      let E;
      if (this.emit("Instantiate", {
        tag: n
      }), d) {
        const L = [];
        for (const $ in d)
          L[$] = this.init(d[$]);
        E = this.parseModule(new t(...L));
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
    const c = r();
    return a[n] = c, u.set(c, t), c;
  }
  patch(t, n) {
    const r = j(t), { state: a } = this;
    this.emit("Patch", {
      tag: r,
      data: n
    }), pt(a[r], n);
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
    const a = this.init(t), u = new t();
    Object.assign(a, u);
    for (const c in a)
      c in u || delete a[c];
  }
  async unmount(t) {
    const n = typeof t == "function" ? j(t) : t;
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
}, M(V, "WebPhecda"), V);
function $t(e, t, n, r) {
  var a = arguments.length, u = a < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, n) : r, c;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    u = Reflect.decorate(e, t, n, r);
  else
    for (var d = e.length - 1; d >= 0; d--)
      (c = e[d]) && (u = (a < 3 ? c(u) : a > 3 ? c(t, n, u) : c(t, n)) || u);
  return a > 3 && u && Object.defineProperty(t, n, u), u;
}
M($t, "_ts_decorate");
function z(e, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, t);
}
M(z, "_ts_metadata");
var F, vn = (F = class {
  constructor() {
    R(this, "__UNMOUNT_SYMBOL__", []);
    R(this, "__PROMISE_SYMBOL__");
  }
  get tag() {
    return j(this);
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
], vn.prototype, "_unmount", null);
var gn = Object.defineProperty, m = (e, t) => gn(e, "name", { value: t, configurable: !0 });
function mn(e, t) {
  const n = `[phecda-vue]: ${e}`;
  t === "error" ? console.error(n) : t === "warn" ? console.warn(n) : console.log(n);
}
m(mn, "toastMessage");
var Gt = Symbol(void 0), J, En = (J = class extends wn {
  constructor() {
    super(...arguments);
    R(this, "vueApp");
  }
  install(n) {
    n.provide(Gt, this), this.vueApp = n;
  }
}, m(J, "VuePhecda"), J);
function On() {
  return new En("vue", (t) => k(Z(t, "shallow") ? me(t) : Ee(t), void 0));
}
m(On, "createPhecda");
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
function Pn(e) {
  const t = /* @__PURE__ */ new Set();
  for (e = Object.getPrototypeOf(e); e.constructor.name !== "Object"; )
    Object.getOwnPropertyNames(e).forEach((n) => {
      typeof Object.getOwnPropertyDescriptor(e, n).value == "function" && n !== "constructor" && t.add(n);
    }), e = Object.getPrototypeOf(e);
  return [
    ...t
  ];
}
m(Pn, "getAllMethods");
function Mn(e) {
  const t = /* @__PURE__ */ new Set();
  for (e = Object.getPrototypeOf(e); e.constructor.name !== "Object"; )
    Object.getOwnPropertyNames(e).forEach((n) => {
      typeof Object.getOwnPropertyDescriptor(e, n).get == "function" && t.add(n);
    }), e = Object.getPrototypeOf(e);
  return [
    ...t
  ];
}
m(Mn, "getAllGetters");
function bn(e) {
  return Oe(e);
}
m(bn, "markRaw");
function _t(e) {
  let t = 0, n, r;
  const a = /* @__PURE__ */ m(() => {
    r && --t <= 0 && (r.stop(), n = r = null);
  }, "dispose"), u = /* @__PURE__ */ m(() => (t++, n || (r = Ae(!0), n = r.run(() => e())), Ie(a), n), "cb");
  return u.r = !0, u;
}
m(_t, "createSharedReactive");
var A = /* @__PURE__ */ new WeakMap();
function Tn(e) {
  return Se(Bt(e));
}
m(Tn, "useRaw");
function yt() {
  if (!Pe())
    throw new Error("[phecda-vue]: use hook inside component setup function");
  const e = Me(Gt);
  if (!e)
    throw new Error("[phecda-vue]: must install the vue plugin ");
  return A.has(e) || A.set(e, k(e)), A.get(e);
}
m(yt, "usePhecda");
function An(e) {
}
m(An, "setStateToComponent");
function wt(e) {
  const t = e || Kt("vue");
  if (!t)
    throw new Error("[phecda-vue]:  manually inject the phecda instance if there is no default phecda");
  return A.has(t) || A.set(t, k(t)), A.get(t);
}
m(wt, "getPhecda");
function In(e, t) {
  return be(() => {
    T.off(e, t);
  }), T.on(e, t), {
    emit: /* @__PURE__ */ m((n) => T.emit(e, n), "emit"),
    cancel: /* @__PURE__ */ m(() => T.off(e, t), "cancel")
  };
}
m(In, "useEvent");
function Bt(e) {
  return yt().init(e);
}
m(Bt, "useR");
function Rn(e, t) {
  return wt(t).init(e);
}
m(Rn, "getR");
function jn(e) {
  const t = yt().init(e);
  if (A.has(t))
    return A.get(t);
  const n = {}, r = new Proxy(t, {
    get(a, u) {
      var d;
      if (typeof a[u] == "function" || (d = a[u]) != null && d.__v_skip)
        return a[u];
      const c = n[u];
      return c && c.r ? c() : (n[u] = _t(() => jt(a, u)), n[u]());
    },
    set() {
      return !1;
    }
  });
  return A.set(t, r), r;
}
m(jn, "useV");
function Cn(e, t) {
  const n = wt(t).init(e);
  if (A.has(n))
    return A.get(n);
  const r = {}, a = new Proxy(n, {
    get(u, c) {
      var E;
      if (typeof u[c] == "function" || (E = u[c]) != null && E.__v_skip)
        return u[c];
      const d = r[c];
      return d && d.r ? d() : (r[c] = _t(() => jt(u, c)), r[c]());
    },
    set() {
      return !1;
    }
  });
  return A.set(n, a), a;
}
m(Cn, "getV");
function xn(e = !0) {
  return (t) => {
    X(t.prototype, "shallow", e);
  };
}
m(xn, "Shallow");
function Dn(e) {
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
m(Dn, "WatchEffect");
export {
  an as Assign,
  vn as Base,
  Ue as Bind,
  We as Clear,
  Lt as DataMap,
  hn as Effect,
  Ke as Empty,
  cn as Err,
  He as Expose,
  sn as Global,
  Ne as Ignore,
  Le as Init,
  en as Inject,
  nn as Isolate,
  w as PHECDA_KEY,
  Ze as Pipeline,
  tn as Provide,
  fn as Rule,
  C as SHARE_KEY,
  xn as Shallow,
  pn as Storage,
  rn as Tag,
  un as To,
  on as Unique,
  Yt as Unmount,
  En as VuePhecda,
  Dn as WatchEffect,
  ln as Watcher,
  wn as WebPhecda,
  st as activeInstance,
  ze as addDecoToClass,
  k as bindMethod,
  Xe as classToPlain,
  On as createPhecda,
  _t as createSharedReactive,
  Nt as defaultWebInject,
  yn as delDefaultPhecda,
  T as emitter,
  Z as get,
  $e as getBind,
  Kt as getDefaultPhecda,
  H as getExposeKey,
  K as getHandler,
  B as getInject,
  xe as getOwnExposeKey,
  Ye as getOwnHandler,
  De as getOwnIgnoreKey,
  ht as getOwnState,
  Ce as getOwnStateKey,
  wt as getPhecda,
  D as getPhecdaFromTarget,
  Rn as getR,
  ke as getShareState,
  Dt as getState,
  xt as getStateKey,
  j as getTag,
  Cn as getV,
  x as init,
  at as invokeHandler,
  Q as isAsyncFunc,
  je as isPhecda,
  bn as markRaw,
  dt as phecdaNamespace,
  Gt as phecdaSymbol,
  Ge as plainToClass,
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
  Be as transformInstance,
  Ve as transformInstanceAsync,
  Fe as transformProperty,
  Je as transformPropertyAsync,
  In as useEvent,
  yt as usePhecda,
  Bt as useR,
  Tn as useRaw,
  jn as useV,
  _n as wait
};
