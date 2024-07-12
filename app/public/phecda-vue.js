var Pe = Object.defineProperty;
var Se = (e, t, n) => t in e ? Pe(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var I = (e, t, n) => (Se(e, typeof t != "symbol" ? t + "" : t, n), n);
import { s as be, r as Me, m as Te, t as Ct, h as Ae, i as Ie, o as Re, w as je, e as Ce, a as xe, b as xt } from "./runtime-core.esm-bundler-05bc1582.js";
var De = Object.defineProperty, c = (e, t) => De(e, "name", { value: t, configurable: !0 }), j = Symbol("phecda"), w = Symbol("phecda");
function Ye(e) {
  return typeof e == "function" ? !!e.prototype[w] : !1;
}
c(Ye, "isPhecda");
function C(e) {
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
c(C, "init");
function x(e) {
  return typeof e == "function" ? e.prototype : e.hasOwnProperty(w) ? e : Object.getPrototypeOf(e);
}
c(x, "getPhecdaFromTarget");
function b(e, t) {
  t || (t = j, e = e.prototype), C(e), e[w].__STATE_KEY.add(t), ht(e, t);
}
c(b, "setStateKey");
function ht(e, t) {
  t || (t = j, e = e.prototype), C(e), e[w].__EXPOSE_KEY.add(t);
}
c(ht, "setExposeKey");
function Dt(e, t) {
  t || (t = j, e = e.prototype), C(e), e[w].__IGNORE_KEY.add(t);
}
c(Dt, "setIgnoreKey");
function A(e, t, n) {
  t || (t = j, e = e.prototype), C(e), e[w].__STATE_HANDLER__.has(t) ? e[w].__STATE_HANDLER__.get(t).push(n) : e[w].__STATE_HANDLER__.set(t, [
    n
  ]);
}
c(A, "setHandler");
function lt(e, t, n) {
  t || (t = j, e = e.prototype), C(e), e[w].__STATE_NAMESPACE__.set(t, n);
}
c(lt, "setState");
function Ue(e) {
  return [
    ...x(e)[w].__STATE_KEY
  ];
}
c(Ue, "getOwnStateKey");
function Yt(e) {
  let t = x(e);
  const n = /* @__PURE__ */ new Set();
  for (; t != null && t[w]; )
    t.hasOwnProperty(w) && t[w].__STATE_KEY.forEach((r) => n.add(r)), t = Object.getPrototypeOf(t);
  return [
    ...n
  ];
}
c(Yt, "getStateKey");
function Le(e) {
  const t = x(e);
  return [
    ...t[w].__EXPOSE_KEY
  ].filter((n) => !t[w].__IGNORE_KEY.has(n));
}
c(Le, "getOwnExposeKey");
function H(e) {
  let t = x(e);
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
function Ne(e) {
  var n;
  return [
    ...(n = x(e)[w]) == null ? void 0 : n.__IGNORE_KEY
  ];
}
c(Ne, "getOwnIgnoreKey");
function We(e, t) {
  var r;
  return ((r = x(e)[w]) == null ? void 0 : r.__STATE_HANDLER__.get(t)) || [];
}
c(We, "getOwnHandler");
function B(e, t) {
  var a;
  let n = x(e);
  const r = /* @__PURE__ */ new Set();
  for (; n != null && n[w] && !(n.hasOwnProperty(w) && ((a = n[w].__STATE_HANDLER__.get(t)) == null || a.forEach((u) => r.add(u)), n[w].__CLEAR_KEY.has(t))); )
    n = Object.getPrototypeOf(n);
  return [
    ...r
  ];
}
c(B, "getHandler");
function Ut(e, t = j) {
  let n = x(e), r = {};
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
c(Ut, "getState");
function pt(e, t = j) {
  return x(e)[w].__STATE_NAMESPACE__.get(t) || {};
}
c(pt, "getOwnState");
function st(e, t) {
  const r = H(t).map((a) => B(t, a).filter((u) => !!u[e]).map((u) => u[e](t))).flat();
  return Promise.all(r);
}
c(st, "invokeHandler");
function q(e, t, n) {
  C(e), e[`__${t.toUpperCase()}__`] = n;
}
c(q, "set");
function Q(e, t) {
  return e[`__${t.toUpperCase()}__`];
}
c(Q, "get");
function He(e, t) {
  b(e, t), A(e, t, {
    async init(n) {
      return n[t]();
    }
  });
}
c(He, "Init");
function Lt(e, t) {
  b(e, t), A(e, t, {
    async unmount(n) {
      return n[t]();
    }
  });
}
c(Lt, "Unmount");
function Be(e) {
  return (t, n) => {
    b(t, n), lt(t, n, {
      value: e
    });
  };
}
c(Be, "Bind");
function Ke(e, t) {
  t || (e = e.prototype, t = j), Dt(e, t);
}
c(Ke, "Ignore");
function $e(e, t) {
  t || (e = e.prototype, t = j), C(e), e[w].__CLEAR_KEY.add(t);
}
c($e, "Clear");
function Ge(e, t) {
  ht(e, t);
}
c(Ge, "Expose");
function Ve(e) {
  C(e.prototype);
}
c(Ve, "Empty");
function R(e) {
  return typeof e == "object" && (e = e.constructor), Q(e.prototype, "tag") || e.name;
}
c(R, "getTag");
function Fe(e) {
  const t = new e(), n = Yt(t), r = {};
  for (const a of n) {
    const u = Ut(t, a);
    u.value && (r[a] = u.value);
  }
  return r;
}
c(Fe, "getBind");
function Je(e, t) {
  const n = new e(), r = H(n);
  for (const a of r)
    n[a] = t[a];
  return n;
}
c(Je, "plainToClass");
function Xe(e, t = !1) {
  const n = [], r = H(e), a = n.push.bind(n);
  for (const u of r) {
    const h = B(e, u);
    if (h)
      for (const d of h) {
        const E = d.pipe;
        if (E && (E(e, a), n.length && !t))
          return n;
      }
  }
  return n;
}
c(Xe, "transformInstance");
async function qe(e, t = !1) {
  const n = [], r = H(e), a = n.push.bind(n);
  for (const u of r) {
    const h = B(e, u);
    if (h)
      for (const d of h) {
        const E = d.pipe;
        if (E && (await E(e, a), n.length && !t))
          return n;
      }
  }
  return n;
}
c(qe, "transformInstanceAsync");
function ze(e, t, n = !1) {
  const r = [], a = B(e, t), u = r.push.bind(r);
  if (a)
    for (const h of a) {
      const d = h.pipe;
      if (d && (d(e, u), r.length && !n))
        return r;
    }
  return r;
}
c(ze, "transformProperty");
async function Ze(e, t, n = !1) {
  const r = [], a = B(e, t), u = r.push.bind(r);
  if (a)
    for (const h of a) {
      const d = h.pipe;
      if (d && (await d(e, u), r.length && !n))
        return r;
    }
  return r;
}
c(Ze, "transformPropertyAsync");
function Qe(e) {
  const t = {}, n = H(e);
  for (const r of n)
    t[r] = e[r];
  return JSON.parse(JSON.stringify(t));
}
c(Qe, "classToPlain");
function ke(e) {
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
c(ke, "snapShot");
function tn(e, t, n) {
  n(t ? e.prototype : e, t);
}
c(tn, "addDecoToClass");
function en(...e) {
  return (...t) => {
    for (const n of e)
      n(...t);
  };
}
c(en, "Pipeline");
function k(e) {
  return e[Symbol.toStringTag] === "AsyncFunction";
}
c(k, "isAsyncFunc");
function nn(e, t, n) {
  b(e, t);
  const r = pt(e, t) || {};
  n(r), lt(e, t, r);
}
c(nn, "setPropertyState");
function rn(e, t) {
  const n = pt(e, j) || {};
  return t(n);
}
c(rn, "getShareState");
var Nt = {};
function on(e, t) {
  Nt[e] = t;
}
c(on, "Provide");
function an(e) {
  return Nt[e];
}
c(an, "Inject");
var ut = {};
function ft(e, t) {
  return ut[e] = t, ut;
}
c(ft, "setInject");
function G(e) {
  return ut[e];
}
c(G, "getInject");
function sn(e) {
  q(e.prototype, "isolate", !0);
}
c(sn, "Isolate");
function un(e) {
  return (t) => {
    q(t.prototype, "tag", e);
  };
}
c(un, "Tag");
function fn(e) {
  return (t) => {
    q(t.prototype, "tag", Symbol(e || t.name));
  };
}
c(fn, "Unique");
function cn(e) {
  return (t) => {
    b(t), A(t, void 0, {
      init: /* @__PURE__ */ c(async (n) => {
        const r = await e(n);
        if (r && typeof r == "object" && !Array.isArray(r))
          for (const a in r)
            n[a] = r[a];
      }, "init")
    });
  };
}
c(cn, "Assign");
function hn(e) {
  b(e), A(e, void 0, {
    init: /* @__PURE__ */ c(async (t) => {
      const n = R(t);
      globalThis.__PHECDA__ || (globalThis.__PHECDA__ = {}), globalThis.__PHECDA__[n] = t.constructor;
    }, "init")
  });
}
c(hn, "Global");
function ln(...e) {
  return (t, n) => {
    b(t, n), A(t, n, {
      async pipe(r, a) {
        for (const u of e)
          try {
            k(u) ? r[n] = await u(r[n], r, n) : r[n] = u(r[n], r, n);
          } catch (h) {
            a(h.message);
          }
      }
    });
  };
}
c(ln, "To");
function pn(e, t) {
  return (n, r) => {
    b(n, r), A(n, r, {
      async pipe(a, u) {
        let h;
        k(e) ? h = await e(a[r]) : h = e(a[r]), h || u(typeof t == "string" ? t : t());
      }
    });
  };
}
c(pn, "Rule");
function dn(e, t = !1) {
  return (n, r) => {
    b(n, r), A(n, r, {
      init: /* @__PURE__ */ c((a) => {
        if (typeof a[r] == "function") {
          const u = a[r].bind(a);
          k(u) ? a[r] = async (...h) => {
            try {
              await u(...h);
            } catch (d) {
              if (e(d, a, r), !t)
                throw d;
            }
          } : a[r] = (...h) => {
            try {
              u(...h);
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
c(dn, "Err");
function _n(e, t) {
  let n;
  return (r, a) => {
    b(r, a), A(r, a, {
      init(u) {
        var h;
        return n = (h = G("watcher")) == null ? void 0 : h({
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
c(_n, "Watcher");
function yn(e) {
  return (t, n) => {
    b(t, n), A(t, n, {
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
c(yn, "Effect");
function wn({ key: e, json: t, stringify: n } = {}) {
  return t || (t = /* @__PURE__ */ c((r) => JSON.parse(r), "json")), n || (n = /* @__PURE__ */ c((r) => JSON.stringify(r), "stringify")), (r, a) => {
    const u = e || R(r);
    C(r), b(r, a), A(r, a, {
      init: /* @__PURE__ */ c((h) => {
        var d;
        return (d = G("storage")) == null ? void 0 : d({
          instance: h,
          key: a,
          tag: u,
          toJSON: t,
          toString: n
        });
      }, "init")
    });
  };
}
c(wn, "Storage");
function vn(e, ...t) {
  return e ? (...n) => {
    t.forEach((r) => r(...n));
  } : () => {
  };
}
c(vn, "If");
function Wt(e, t, n, r) {
  var a = arguments.length, u = a < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, n) : r, h;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    u = Reflect.decorate(e, t, n, r);
  else
    for (var d = e.length - 1; d >= 0; d--)
      (h = e[d]) && (u = (a < 3 ? h(u) : a > 3 ? h(t, n, u) : h(t, n)) || u);
  return a > 3 && u && Object.defineProperty(t, n, u), u;
}
c(Wt, "_ts_decorate");
function Z(e, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, t);
}
c(Z, "_ts_metadata");
var V, Ht = (V = class {
  constructor() {
    I(this, "__UNMOUNT_SYMBOL__", []);
    I(this, "__PROMISE_SYMBOL__");
  }
  get tag() {
    return R(this);
  }
  then(t, n) {
    return this.__PROMISE_SYMBOL__.then(t, n);
  }
  on(t, n) {
    this.emitter.on(t, n), this.onUnmount(() => this.emitter.off(t, n));
  }
  emit(t, n) {
    this.emitter.emit(t, n);
  }
  off(t, n) {
    this.emitter.off(t, n);
  }
  onUnmount(t) {
    this.__UNMOUNT_SYMBOL__.push(t);
  }
  _unmount() {
    return Promise.all(this.__UNMOUNT_SYMBOL__.map((t) => t()));
  }
}, c(V, "Base"), V);
Wt([
  Lt,
  Z("design:type", Function),
  Z("design:paramtypes", []),
  Z("design:returntype", void 0)
], Ht.prototype, "_unmount", null);
function Bt(e) {
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
var Rt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
var jt;
(function(e) {
  (function(t) {
    var n = typeof Rt == "object" ? Rt : typeof self == "object" ? self : typeof this == "object" ? this : Function("return this;")(), r = a(e);
    typeof n.Reflect > "u" ? n.Reflect = e : r = a(n.Reflect, r), t(r);
    function a(u, h) {
      return function(d, E) {
        typeof u[d] != "function" && Object.defineProperty(u, d, { configurable: !0, writable: !0, value: E }), h && h(d, E);
      };
    }
  })(function(t) {
    var n = Object.prototype.hasOwnProperty, r = typeof Symbol == "function", a = r && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", u = r && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", h = typeof Object.create == "function", d = { __proto__: [] } instanceof Array, E = !h && !d, U = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: h ? function() {
        return ot(/* @__PURE__ */ Object.create(null));
      } : d ? function() {
        return ot({ __proto__: null });
      } : function() {
        return ot({});
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
    }, K = Object.getPrototypeOf(Function), et = typeof process == "object" && process["env"] && process["env"].REFLECT_METADATA_USE_MAP_POLYFILL === "true", nt = !et && typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : me(), zt = !et && typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Ee(), Zt = !et && typeof WeakMap == "function" ? WeakMap : Oe(), z = new Zt();
    function Qt(i, o, s, f) {
      if (O(s)) {
        if (!Mt(i))
          throw new TypeError();
        if (!Tt(o))
          throw new TypeError();
        return ue(i, o);
      } else {
        if (!Mt(i))
          throw new TypeError();
        if (!P(o))
          throw new TypeError();
        if (!P(f) && !O(f) && !N(f))
          throw new TypeError();
        return N(f) && (f = void 0), s = D(s), fe(i, o, s, f);
      }
    }
    t("decorate", Qt);
    function kt(i, o) {
      function s(f, l) {
        if (!P(f))
          throw new TypeError();
        if (!O(l) && !_e(l))
          throw new TypeError();
        Ot(i, o, f, l);
      }
      return s;
    }
    t("metadata", kt);
    function te(i, o, s, f) {
      if (!P(s))
        throw new TypeError();
      return O(f) || (f = D(f)), Ot(i, o, s, f);
    }
    t("defineMetadata", te);
    function ee(i, o, s) {
      if (!P(o))
        throw new TypeError();
      return O(s) || (s = D(s)), gt(i, o, s);
    }
    t("hasMetadata", ee);
    function ne(i, o, s) {
      if (!P(o))
        throw new TypeError();
      return O(s) || (s = D(s)), rt(i, o, s);
    }
    t("hasOwnMetadata", ne);
    function re(i, o, s) {
      if (!P(o))
        throw new TypeError();
      return O(s) || (s = D(s)), mt(i, o, s);
    }
    t("getMetadata", re);
    function ie(i, o, s) {
      if (!P(o))
        throw new TypeError();
      return O(s) || (s = D(s)), Et(i, o, s);
    }
    t("getOwnMetadata", ie);
    function oe(i, o) {
      if (!P(i))
        throw new TypeError();
      return O(o) || (o = D(o)), Pt(i, o);
    }
    t("getMetadataKeys", oe);
    function ae(i, o) {
      if (!P(i))
        throw new TypeError();
      return O(o) || (o = D(o)), St(i, o);
    }
    t("getOwnMetadataKeys", ae);
    function se(i, o, s) {
      if (!P(o))
        throw new TypeError();
      O(s) || (s = D(s));
      var f = $(
        o,
        s,
        /*Create*/
        !1
      );
      if (O(f) || !f.delete(i))
        return !1;
      if (f.size > 0)
        return !0;
      var l = z.get(o);
      return l.delete(s), l.size > 0 || z.delete(o), !0;
    }
    t("deleteMetadata", se);
    function ue(i, o) {
      for (var s = i.length - 1; s >= 0; --s) {
        var f = i[s], l = f(o);
        if (!O(l) && !N(l)) {
          if (!Tt(l))
            throw new TypeError();
          o = l;
        }
      }
      return o;
    }
    function fe(i, o, s, f) {
      for (var l = i.length - 1; l >= 0; --l) {
        var S = i[l], _ = S(o, s, f);
        if (!O(_) && !N(_)) {
          if (!P(_))
            throw new TypeError();
          f = _;
        }
      }
      return f;
    }
    function $(i, o, s) {
      var f = z.get(i);
      if (O(f)) {
        if (!s)
          return;
        f = new nt(), z.set(i, f);
      }
      var l = f.get(o);
      if (O(l)) {
        if (!s)
          return;
        l = new nt(), f.set(o, l);
      }
      return l;
    }
    function gt(i, o, s) {
      var f = rt(i, o, s);
      if (f)
        return !0;
      var l = it(o);
      return N(l) ? !1 : gt(i, l, s);
    }
    function rt(i, o, s) {
      var f = $(
        o,
        s,
        /*Create*/
        !1
      );
      return O(f) ? !1 : pe(f.has(i));
    }
    function mt(i, o, s) {
      var f = rt(i, o, s);
      if (f)
        return Et(i, o, s);
      var l = it(o);
      if (!N(l))
        return mt(i, l, s);
    }
    function Et(i, o, s) {
      var f = $(
        o,
        s,
        /*Create*/
        !1
      );
      if (!O(f))
        return f.get(i);
    }
    function Ot(i, o, s, f) {
      var l = $(
        s,
        f,
        /*Create*/
        !0
      );
      l.set(i, o);
    }
    function Pt(i, o) {
      var s = St(i, o), f = it(i);
      if (f === null)
        return s;
      var l = Pt(f, o);
      if (l.length <= 0)
        return s;
      if (s.length <= 0)
        return l;
      for (var S = new zt(), _ = [], y = 0, p = s; y < p.length; y++) {
        var v = p[y], g = S.has(v);
        g || (S.add(v), _.push(v));
      }
      for (var L = 0, It = l; L < It.length; L++) {
        var v = It[L], g = S.has(v);
        g || (S.add(v), _.push(v));
      }
      return _;
    }
    function St(i, o) {
      var s = [], f = $(
        i,
        o,
        /*Create*/
        !1
      );
      if (O(f))
        return s;
      for (var l = f.keys(), S = ye(l), _ = 0; ; ) {
        var y = ve(S);
        if (!y)
          return s.length = _, s;
        var p = we(y);
        try {
          s[_] = p;
        } catch (v) {
          try {
            ge(S);
          } finally {
            throw v;
          }
        }
        _++;
      }
    }
    function bt(i) {
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
    function ce(i) {
      return typeof i == "symbol";
    }
    function P(i) {
      return typeof i == "object" ? i !== null : typeof i == "function";
    }
    function he(i, o) {
      switch (bt(i)) {
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
      var s = o === 3 ? "string" : o === 5 ? "number" : "default", f = At(i, a);
      if (f !== void 0) {
        var l = f.call(i, s);
        if (P(l))
          throw new TypeError();
        return l;
      }
      return le(i, s === "default" ? "number" : s);
    }
    function le(i, o) {
      if (o === "string") {
        var s = i.toString;
        if (W(s)) {
          var f = s.call(i);
          if (!P(f))
            return f;
        }
        var l = i.valueOf;
        if (W(l)) {
          var f = l.call(i);
          if (!P(f))
            return f;
        }
      } else {
        var l = i.valueOf;
        if (W(l)) {
          var f = l.call(i);
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
    function pe(i) {
      return !!i;
    }
    function de(i) {
      return "" + i;
    }
    function D(i) {
      var o = he(
        i,
        3
        /* String */
      );
      return ce(o) ? o : de(o);
    }
    function Mt(i) {
      return Array.isArray ? Array.isArray(i) : i instanceof Object ? i instanceof Array : Object.prototype.toString.call(i) === "[object Array]";
    }
    function W(i) {
      return typeof i == "function";
    }
    function Tt(i) {
      return typeof i == "function";
    }
    function _e(i) {
      switch (bt(i)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function At(i, o) {
      var s = i[o];
      if (s != null) {
        if (!W(s))
          throw new TypeError();
        return s;
      }
    }
    function ye(i) {
      var o = At(i, u);
      if (!W(o))
        throw new TypeError();
      var s = o.call(i);
      if (!P(s))
        throw new TypeError();
      return s;
    }
    function we(i) {
      return i.value;
    }
    function ve(i) {
      var o = i.next();
      return o.done ? !1 : o;
    }
    function ge(i) {
      var o = i.return;
      o && o.call(i);
    }
    function it(i) {
      var o = Object.getPrototypeOf(i);
      if (typeof i != "function" || i === K || o !== K)
        return o;
      var s = i.prototype, f = s && Object.getPrototypeOf(s);
      if (f == null || f === Object.prototype)
        return o;
      var l = f.constructor;
      return typeof l != "function" || l === i ? o : l;
    }
    function me() {
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
            return new s(this._keys, this._values, l);
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
      function l(_, y) {
        return y;
      }
      function S(_, y) {
        return [_, y];
      }
    }
    function Ee() {
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
    function Oe() {
      var i = 16, o = U.create(), s = f();
      return (
        /** @class */
        function() {
          function p() {
            this._key = f();
          }
          return p.prototype.has = function(v) {
            var g = l(
              v,
              /*create*/
              !1
            );
            return g !== void 0 ? U.has(g, this._key) : !1;
          }, p.prototype.get = function(v) {
            var g = l(
              v,
              /*create*/
              !1
            );
            return g !== void 0 ? U.get(g, this._key) : void 0;
          }, p.prototype.set = function(v, g) {
            var L = l(
              v,
              /*create*/
              !0
            );
            return L[this._key] = g, this;
          }, p.prototype.delete = function(v) {
            var g = l(
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
      function l(p, v) {
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
    function ot(i) {
      return i.__ = void 0, delete i.__, i;
    }
  });
})(jt || (jt = {}));
var gn = Object.defineProperty, M = (e, t) => gn(e, "name", { value: t, configurable: !0 }), Y = Bt();
function Kt() {
  G("watcher") || ft("watcher", ({ eventName: e, instance: t, key: n, options: r }) => {
    const a = typeof t[n] == "function" ? t[n].bind(t) : (u) => t[n] = u;
    if (r != null && r.once) {
      const u = /* @__PURE__ */ M(() => {
        a(), Y.off(e);
      }, "handler");
      Y.on(e, u);
    } else
      Y.on(e, a);
    return () => Y.off(e);
  }), G("storage") || ft("storage", ({ tag: e, key: t, instance: n, toJSON: r, toString: a }) => {
    e = `phecda:${t ? `${e}-${t}` : e}`;
    const u = localStorage.getItem(e);
    if (u) {
      const h = r(u);
      if (t)
        n[t] = h;
      else
        for (const d in h)
          d && (n[d] = h[d]);
    }
    localStorage.setItem(e, a(t ? n[t] : n)), globalThis.addEventListener("beforeunload", () => {
      localStorage.setItem(e, a(t ? n[t] : n));
    });
  });
}
M(Kt, "defaultWebInject");
function ct(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
M(ct, "isObject");
function dt(e, t) {
  for (const n in t) {
    if (!t.hasOwnProperty(n))
      continue;
    const r = t[n], a = e[n];
    ct(a) && ct(r) && e.hasOwnProperty(n) ? e[n] = dt(a, r) : e[n] = r;
  }
  return e;
}
M(dt, "deepMerge");
function $t(...e) {
  return Promise.all(e.map((t) => t.__PROMISE_SYMBOL__));
}
M($t, "wait");
function Gt(e, t) {
  return Reflect.getMetadata("design:paramtypes", e, t);
}
M(Gt, "getParamtypes");
var _t = /* @__PURE__ */ new Map();
function Vt(e, t) {
  _t.set(e, t);
}
M(Vt, "setDefaultPhecda");
function Ft(e) {
  return _t.get(e);
}
M(Ft, "getDefaultPhecda");
function mn(e) {
  return _t.delete(e);
}
M(mn, "delDefaultPhecda");
var at = /* @__PURE__ */ new WeakMap();
function tt(e, t) {
  if (!at.has(e)) {
    const n = /* @__PURE__ */ new WeakMap();
    at.set(e, new Proxy(e, {
      get(r, a) {
        return typeof r[a] == "function" && a !== "constructor" && !r[a].toString().startsWith("(") ? (n.has(r[a]) || n.set(r[a], t ? t(r, a) : r[a].bind(r)), n.get(r[a])) : r[a];
      }
    }));
  }
  return at.get(e);
}
M(tt, "bindMethod");
var F, En = (F = class {
  constructor(t, n) {
    I(this, "namespace");
    I(this, "parseModule");
    /**
    * for ssr or manual inject
    */
    I(this, "memory");
    I(this, "state");
    I(this, "modelMap");
    I(this, "emitter");
    this.namespace = t, this.parseModule = n, this.memory = {}, this.state = {}, this.modelMap = /* @__PURE__ */ new WeakMap(), this.emitter = Bt(), typeof window < "u" && (Kt(), Vt(t, this));
  }
  // @ts-expect-error internal
  then(t, n) {
    const r = this.then;
    return this.then = void 0, $t(...Object.values(this.state)).then(() => t == null ? void 0 : t(this), n).then(() => {
      this.then = r;
    }), this;
  }
  /**
  *   Initialize a module that has not been created yet, and return it directly if it is cached.
  */
  init(t) {
    const n = R(t), r = /* @__PURE__ */ M(() => {
      const d = Gt(t);
      let E;
      if (this.emit("Instantiate", {
        tag: n
      }), d) {
        const U = [];
        for (const K in d)
          U[K] = this.init(d[K]);
        E = this.parseModule(new t(...U));
      } else
        E = this.parseModule(new t());
      return n in this.memory && Object.assign(E, this.memory[n]), typeof window < "u" && (this.emit("Initialize", {
        tag: n
      }), E.__PROMISE_SYMBOL__ = st("init", E)), E;
    }, "initModel"), { state: a, modelMap: u } = this;
    if (Q(t.prototype, "isolate"))
      return r();
    if (n in a)
      return u.get(a[n]) !== t && (this.emit("Synonym", {
        tag: n
      }), console.warn(`Synonym model: Module taged "${String(n)}" has been loaded before, so won't load Module "${t.name}"`)), a[n];
    const h = r();
    return a[n] = h, u.set(h, t), h;
  }
  patch(t, n) {
    const r = R(t), { state: a } = this;
    this.emit("Patch", {
      tag: r,
      data: n
    }), dt(a[r], n);
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
    for (const h in a)
      h in u || delete a[h];
  }
  async unmount(t) {
    const n = typeof t == "function" ? R(t) : t;
    if (!this.has(n))
      return;
    this.emit("Unmount", {
      tag: n
    });
    const { state: r } = this;
    await st("unmount", this.get(n)), delete r[n];
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
}, M(F, "WebPhecda"), F), J, Hn = (J = class extends Ht {
  constructor() {
    super(...arguments);
    I(this, "emitter", Y);
  }
}, M(J, "WebBase"), J), On = Object.defineProperty, m = (e, t) => On(e, "name", { value: t, configurable: !0 });
function Pn(e, t) {
  const n = `[phecda-vue]: ${e}`;
  t === "error" ? console.error(n) : t === "warn" ? console.warn(n) : console.log(n);
}
m(Pn, "toastMessage");
var Jt = Symbol(void 0), X, Sn = (X = class extends En {
  constructor() {
    super(...arguments);
    I(this, "vueApp");
  }
  install(n) {
    n.provide(Jt, this), this.vueApp = n;
  }
}, m(X, "VuePhecda"), X);
function bn(e) {
  const t = new Sn("vue", (n) => tt(Q(n, "shallow") ? be(n) : Me(n), void 0));
  return e == null || e.forEach((n) => t.init(n)), t;
}
m(bn, "createPhecda");
function Mn(e, t) {
  let n = Object.getPrototypeOf(e);
  for (; n; ) {
    if (n.hasOwnProperty(t))
      return n;
    n = Object.getPrototypeOf(n);
  }
  return null;
}
m(Mn, "findPrototypeWithMethod");
function Tn(e) {
  const t = /* @__PURE__ */ new Set();
  for (e = Object.getPrototypeOf(e); e.constructor.name !== "Object"; )
    Object.getOwnPropertyNames(e).forEach((n) => {
      typeof Object.getOwnPropertyDescriptor(e, n).value == "function" && n !== "constructor" && t.add(n);
    }), e = Object.getPrototypeOf(e);
  return [
    ...t
  ];
}
m(Tn, "getAllMethods");
function An(e) {
  const t = /* @__PURE__ */ new Set();
  for (e = Object.getPrototypeOf(e); e.constructor.name !== "Object"; )
    Object.getOwnPropertyNames(e).forEach((n) => {
      typeof Object.getOwnPropertyDescriptor(e, n).get == "function" && t.add(n);
    }), e = Object.getPrototypeOf(e);
  return [
    ...t
  ];
}
m(An, "getAllGetters");
function In(e) {
  return Te(e);
}
m(In, "markRaw");
function yt(e) {
  let t = 0, n, r;
  const a = /* @__PURE__ */ m(() => {
    r && --t <= 0 && (r.stop(), n = r = null);
  }, "dispose"), u = /* @__PURE__ */ m(() => (t++, n || (r = Ce(!0), n = r.run(() => e())), xe(a), n), "cb");
  return u.r = !0, u;
}
m(yt, "createSharedReactive");
var T = /* @__PURE__ */ new WeakMap();
function Rn(e) {
  return Ct(Xt(e));
}
m(Rn, "useRaw");
function jn(e) {
  return Ct(qt(e));
}
m(jn, "getRaw");
function wt() {
  if (!Ae())
    throw new Error("[phecda-vue]: use hook inside component setup function");
  const e = Ie(Jt);
  if (!e)
    throw new Error("[phecda-vue]: must install the vue plugin ");
  return T.has(e) || T.set(e, tt(e)), T.get(e);
}
m(wt, "usePhecda");
function Cn(e) {
}
m(Cn, "setStateToComponent");
function vt(e) {
  const t = e || Ft("vue");
  if (!t)
    throw new Error("[phecda-vue]:  manually inject the phecda instance if there is no default phecda");
  return T.has(t) || T.set(t, tt(t)), T.get(t);
}
m(vt, "getPhecda");
function xn(e, t) {
  return Re(() => {
    Y.off(e, t);
  }), Y.on(e, t), {
    emit: /* @__PURE__ */ m((n) => Y.emit(e, n), "emit"),
    cancel: /* @__PURE__ */ m(() => Y.off(e, t), "cancel")
  };
}
m(xn, "useEvent");
function Xt(e) {
  return wt().init(e);
}
m(Xt, "useR");
function qt(e, t) {
  return vt(t).init(e);
}
m(qt, "getR");
function Dn(e) {
  const t = wt().init(e);
  if (T.has(t))
    return T.get(t);
  const n = {}, r = new Proxy(t, {
    get(a, u) {
      var d;
      if (typeof a[u] == "function" || (d = a[u]) != null && d.__v_skip)
        return a[u];
      const h = n[u];
      return h && h.r ? h() : (n[u] = yt(() => xt(a, u)), n[u]());
    },
    set() {
      return !1;
    }
  });
  return T.set(t, r), r;
}
m(Dn, "useV");
function Yn(e, t) {
  const n = vt(t).init(e);
  if (T.has(n))
    return T.get(n);
  const r = {}, a = new Proxy(n, {
    get(u, h) {
      var E;
      if (typeof u[h] == "function" || (E = u[h]) != null && E.__v_skip)
        return u[h];
      const d = r[h];
      return d && d.r ? d() : (r[h] = yt(() => xt(u, h)), r[h]());
    },
    set() {
      return !1;
    }
  });
  return T.set(n, a), a;
}
m(Yn, "getV");
function Un(e) {
  q(e.prototype, "shallow", !0);
}
m(Un, "Shallow");
function Ln(e) {
  return (t, n) => {
    b(t, n);
    let r;
    A(t, n, {
      init(a) {
        if (typeof a[n] != "function")
          throw new Error("WatchEffect must decorate function");
        r = je(a[n].bind(a), e);
      },
      unmount() {
        return r == null ? void 0 : r();
      }
    });
  };
}
m(Ln, "WatchEffect");
export {
  cn as Assign,
  Ht as Base,
  Be as Bind,
  $e as Clear,
  Nt as DataMap,
  yn as Effect,
  Ve as Empty,
  dn as Err,
  Ge as Expose,
  hn as Global,
  vn as If,
  Ke as Ignore,
  He as Init,
  an as Inject,
  sn as Isolate,
  w as PHECDA_KEY,
  en as Pipeline,
  on as Provide,
  pn as Rule,
  j as SHARE_KEY,
  Un as Shallow,
  wn as Storage,
  un as Tag,
  ln as To,
  fn as Unique,
  Lt as Unmount,
  Sn as VuePhecda,
  Ln as WatchEffect,
  _n as Watcher,
  Hn as WebBase,
  En as WebPhecda,
  ut as activeInstance,
  tn as addDecoToClass,
  tt as bindMethod,
  Qe as classToPlain,
  bn as createPhecda,
  yt as createSharedReactive,
  Kt as defaultWebInject,
  mn as delDefaultPhecda,
  Y as emitter,
  Q as get,
  Fe as getBind,
  Ft as getDefaultPhecda,
  H as getExposeKey,
  B as getHandler,
  G as getInject,
  Le as getOwnExposeKey,
  We as getOwnHandler,
  Ne as getOwnIgnoreKey,
  pt as getOwnState,
  Ue as getOwnStateKey,
  vt as getPhecda,
  x as getPhecdaFromTarget,
  qt as getR,
  jn as getRaw,
  rn as getShareState,
  Ut as getState,
  Yt as getStateKey,
  R as getTag,
  Yn as getV,
  C as init,
  st as invokeHandler,
  k as isAsyncFunc,
  Ye as isPhecda,
  In as markRaw,
  _t as phecdaNamespace,
  Jt as phecdaSymbol,
  Je as plainToClass,
  q as set,
  Vt as setDefaultPhecda,
  ht as setExposeKey,
  A as setHandler,
  Dt as setIgnoreKey,
  ft as setInject,
  nn as setPropertyState,
  lt as setState,
  b as setStateKey,
  ke as snapShot,
  Xe as transformInstance,
  qe as transformInstanceAsync,
  ze as transformProperty,
  Ze as transformPropertyAsync,
  xn as useEvent,
  wt as usePhecda,
  Xt as useR,
  Rn as useRaw,
  Dn as useV,
  $t as wait
};
