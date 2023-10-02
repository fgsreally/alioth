import { markRaw as le, reactive as K, toRaw as pe, onBeforeUnmount as de, effectScope as W, ref as U, defineComponent as I, h, onMounted as X, watch as me, shallowRef as R, render as q, isRef as Ee, isReactive as he, onScopeDispose as ve, computed as Ae } from "./vue.mjs";
function Oe(e) {
  return { all: e = e || /* @__PURE__ */ new Map(), on: function(n, t) {
    var r = e.get(n);
    r ? r.push(t) : e.set(n, [t]);
  }, off: function(n, t) {
    var r = e.get(n);
    r && (t ? r.splice(r.indexOf(t) >>> 0, 1) : e.set(n, []));
  }, emit: function(n, t) {
    var r = e.get(n);
    r && r.slice().map(function(o) {
      o(t);
    }), (r = e.get("*")) && r.slice().map(function(o) {
      o(n, t);
    });
  } };
}
var Se = Object.defineProperty, a = (e, n) => Se(e, "name", { value: n, configurable: !0 });
function be(e) {
  return e && !!e.prototype._namespace;
}
a(be, "isPhecda");
function O(e) {
  e && (e.hasOwnProperty("_namespace") || (e._namespace = {
    __INIT_EVENT__: /* @__PURE__ */ new Set(),
    __EXPOSE_VAR__: /* @__PURE__ */ new Set(),
    __IGNORE_VAR__: /* @__PURE__ */ new Set(),
    __STATE_VAR__: /* @__PURE__ */ new Set(),
    __STATE_HANDLER__: /* @__PURE__ */ new Map(),
    __STATE_NAMESPACE__: /* @__PURE__ */ new Map()
  }));
}
a(O, "init");
function ge(e, n) {
  O(e), e._namespace.__INIT_EVENT__.add(n);
}
a(ge, "regisInitEvent");
function we(e) {
  return e != null && e._namespace ? [
    ...e._namespace.__INIT_EVENT__
  ] : [];
}
a(we, "getOwnInitEvent");
function Pe(e) {
  let n = Object.getPrototypeOf(e);
  const t = /* @__PURE__ */ new Set();
  for (; n != null && n._namespace; )
    n._namespace.__INIT_EVENT__.forEach((r) => t.add(r)), n = Object.getPrototypeOf(n);
  return [
    ...t
  ];
}
a(Pe, "getInitEvent");
function S(e, n) {
  O(e), e._namespace.__STATE_VAR__.add(n), z(e, n);
}
a(S, "setModelVar");
function z(e, n) {
  O(e), e._namespace.__EXPOSE_VAR__.add(n);
}
a(z, "setExposeKey");
function J(e, n) {
  O(e), e._namespace.__IGNORE_VAR__.add(n);
}
a(J, "setIgnoreKey");
function ye(e) {
  return e = Object.getPrototypeOf(e), [
    ...e._namespace.__STATE_VAR__
  ];
}
a(ye, "getOwnModelState");
function L(e) {
  let n = Object.getPrototypeOf(e);
  const t = /* @__PURE__ */ new Set();
  for (; n != null && n._namespace; )
    n._namespace.__STATE_VAR__.forEach((r) => t.add(r)), n = Object.getPrototypeOf(n);
  return [
    ...t
  ];
}
a(L, "getModelState");
function Re(e) {
  return e = Object.getPrototypeOf(e), [
    ...e._namespace.__EXPOSE_VAR__
  ].filter((n) => !e._namespace.__IGNORE_VAR__.has(n));
}
a(Re, "getOwnExposeKey");
function y(e) {
  let n = Object.getPrototypeOf(e);
  const t = /* @__PURE__ */ new Set();
  for (; n != null && n._namespace; )
    [
      ...n._namespace.__EXPOSE_VAR__
    ].forEach((r) => !n._namespace.__IGNORE_VAR__.has(r) && t.add(r)), n = Object.getPrototypeOf(n);
  return [
    ...t
  ];
}
a(y, "getExposeKey");
function Te(e) {
  return e != null && e._namespace ? [
    ...e._namespace.__IGNORE_VAR__
  ] : [];
}
a(Te, "getOwnIgnoreKey");
function b(e, n, t) {
  O(e), e._namespace.__STATE_HANDLER__.has(n) ? e._namespace.__STATE_HANDLER__.get(n).push(t) : e._namespace.__STATE_HANDLER__.set(n, [
    t
  ]);
}
a(b, "regisHandler");
function $e(e, n) {
  return e != null && e._namespace ? e._namespace.__STATE_HANDLER__.get(n) || [] : [];
}
a($e, "getOwnHandler");
function P(e, n) {
  var o;
  let t = Object.getPrototypeOf(e);
  const r = /* @__PURE__ */ new Set();
  for (; t != null && t._namespace; )
    (o = t._namespace.__STATE_HANDLER__.get(n)) == null || o.forEach((u) => r.add(u)), t = Object.getPrototypeOf(t);
  return [
    ...r
  ];
}
a(P, "getHandler");
function Q(e, n, t) {
  O(e), e._namespace.__STATE_NAMESPACE__.set(n, t);
}
a(Q, "setState");
function Ve(e, n) {
  return e = Object.getPrototypeOf(e), e._namespace.__STATE_NAMESPACE__.get(n) || {};
}
a(Ve, "getOwnState");
function Y(e, n) {
  let t = Object.getPrototypeOf(e), r = {};
  for (; t != null && t._namespace; ) {
    const o = t._namespace.__STATE_NAMESPACE__.get(n);
    o && (r = {
      ...o,
      ...r
    }), t = Object.getPrototypeOf(t);
  }
  return r;
}
a(Y, "getState");
function k(e) {
  var t;
  const n = y(e);
  for (const r of n) {
    const o = P(e, r);
    for (const u of o)
      (t = u.init) == null || t.call(u, e);
  }
}
a(k, "register");
async function Ie(e) {
  var t;
  const n = y(e);
  for (const r of n) {
    const o = P(e, r);
    for (const u of o)
      await ((t = u.init) == null ? void 0 : t.call(u, e));
  }
}
a(Ie, "registerAsync");
function Ce(e, n) {
  S(e, n), b(e, n, {
    async init(t) {
      t[n]();
    }
  });
}
a(Ce, "Init");
function Ne(e) {
  return (n, t) => {
    S(n, t), Q(n, t, {
      value: e
    });
  };
}
a(Ne, "Bind");
function v(e, n, t) {
  return (r, o) => {
    S(r, o), b(r, o, {
      rule: e,
      info: n,
      meta: t
    });
  };
}
a(v, "Rule");
function je(e, n) {
  J(e, n);
}
a(je, "Ignore");
function Me(e, n) {
  O(e), e._namespace.__INIT_EVENT__.delete(n), e._namespace.__EXPOSE_VAR__.delete(n), e._namespace.__IGNORE_VAR__.delete(n), e._namespace.__STATE_VAR__.delete(n), e._namespace.__STATE_HANDLER__.delete(n), e._namespace.__STATE_NAMESPACE__.delete(n);
}
a(Me, "Clear");
function He(e) {
  return (n, t) => {
    S(n, t), b(n, t, {
      error: e
    });
  };
}
a(He, "Err");
function xe(e, n) {
  z(e, n);
}
a(xe, "Expose");
function G(e) {
  return (n, t) => {
    S(n, t), b(n, t, {
      async pipe(r) {
        const o = e.value;
        for (const u of o)
          r[t] = await u(r[t]);
      }
    });
  };
}
a(G, "Pipe");
function De(e) {
  return (n) => {
    n.prototype.__TAG__ = e;
  };
}
a(De, "Tag");
function Fe(e) {
  return (n) => {
    O(n.prototype), S(n.prototype, "__CLASS"), b(n.prototype, "__CLASS", {
      init: async (t) => {
        const r = await e(t);
        if (r && typeof r == "object" && !Array.isArray(r))
          for (const o in r)
            t[o] = r[o];
      }
    });
  };
}
a(Fe, "Assign");
function Ue(e) {
  const n = e.prototype.__TAG__;
  n && (O(e.prototype), S(e.prototype, "__CLASS"), b(e.prototype, "__CLASS", {
    init: async (instance) => {
      globalThis.__PHECDA__ || (globalThis.__PHECDA__ = {}), globalThis.__PHECDA__[instance.__TAG__] = instance.constructor;
    }
  }));
}
a(Ue, "Global");
function ee(e) {
}
a(ee, "Empty");
var ne = {};
function ze(e, n) {
  ne[e] = n;
}
a(ze, "Provide");
function Le(e) {
  return ne[e] || (() => ee);
}
a(Le, "Inject");
async function C(e, n) {
  return (typeof e == "string" || typeof e == "number") && n === e ? !0 : typeof e == "function" ? e(n) : e instanceof RegExp ? e.test(n) : !1;
}
a(C, "validate");
function te(e) {
  var n;
  return (n = e.prototype) == null ? void 0 : n.__TAG__;
}
a(te, "getTag");
function Ge(e) {
  const n = new e(), t = L(n), r = {};
  for (const o of t) {
    const u = Y(n, o);
    u.value && (r[o] = u.value);
  }
  return r;
}
a(Ge, "getBind");
async function Ze(e, n, t = {}) {
  var s;
  const r = new e(), o = [], u = L(r);
  for (const i of u) {
    r[i] = n[i];
    const f = P(r, i);
    if (f) {
      if (t.collectError !== !1)
        for (const c of f) {
          const _ = c.rule, l = await C(_, r[i]);
          if (l === "ok" || _ && !l && (o.push(typeof c.info == "function" ? c.info(i) : c.info), !t.collectError))
            break;
        }
      if (o.length > 0 && !t.transform)
        return {
          err: o,
          data: r
        };
      if (t.transform !== !1)
        for (const c of f)
          await ((s = c.pipe) == null ? void 0 : s.call(c, r));
    }
  }
  return {
    data: r,
    err: o
  };
}
a(Ze, "plainToClass");
function Be(e) {
  const n = {}, t = y(e);
  for (const r of t)
    n[r] = e[r];
  return n;
}
a(Be, "classToValue");
function M(e, n) {
  const t = n || [];
  return t.push(e), {
    to: (r) => M(r, t),
    value: t
  };
}
a(M, "to");
function Ke(e) {
  const n = {};
  for (const t in e)
    n[t] = e[t];
  return {
    data: e,
    clear() {
      for (const t in n)
        delete e[t];
    },
    apply() {
      for (const t in n)
        e[t] = n[t];
    }
  };
}
a(Ke, "snapShot");
function We(e, n, t, r = "normal") {
  t(r === "normal" ? e.prototype : e, n);
}
a(We, "addDecoToClass");
var x = {};
function D(e, n) {
  return x[e] = n, x;
}
a(D, "injectProperty");
function T(e) {
  return x[e];
}
a(T, "getProperty");
function Xe(e, n) {
  return (t, r) => {
    S(t, r), b(t, r, {
      init(o) {
        var u;
        (u = T("watcher")) == null || u({
          eventName: e,
          instance: o,
          key: r,
          options: n
        });
      }
    });
  };
}
a(Xe, "Watcher");
function qe(e, n) {
  return (t, r) => {
    S(t, r), b(t, r, {
      init(o) {
        o[`$_${r}`] = o[r], Object.defineProperty(o, r, {
          get() {
            return o[`$_${r}`];
          },
          set(u) {
            var s;
            return o[`$_${r}`] = u, (s = T(`effect-${e}`)) == null || s({
              instance: o,
              key: r,
              value: u,
              options: n
            }), !0;
          }
        });
      }
    });
  };
}
a(qe, "Effect");
function Je(e) {
  return (n, t) => {
    let r;
    if (t) {
      O(n), r = e || n.__TAG__;
      const o = Symbol(r);
      S(n, o), b(n, o, {
        init: (u) => {
          var s;
          (s = T("storage")) == null || s({
            instance: u,
            key: t,
            tag: r
          });
        }
      });
    } else {
      O(n.prototype), r = e || `${n.prototype.__TAG__}_${t}`;
      const o = Symbol(r);
      S(n.prototype, o), b(n.prototype, o, {
        init: (u) => {
          var s;
          (s = T("storage")) == null || s({
            instance: u,
            key: "",
            tag: r
          });
        }
      });
    }
  };
}
a(Je, "Storage");
function Qe() {
  return v((e) => e === void 0 ? "ok" : !0, "");
}
a(Qe, "isOption");
function Ye(e) {
  return v((n) => Array.isArray(n), e || ((n) => `'${n}' should be an array`));
}
a(Ye, "isArray");
function ke(e) {
  return v((n) => [
    !0,
    !1
  ].includes(n), e || ((n) => `'${n}' should be boolean`));
}
a(ke, "isBoolean");
function en(e) {
  return v((n) => typeof n == "number", e || ((n) => `'${n}' should be number`));
}
a(en, "isNumber");
function nn(e) {
  return v((n) => typeof n == "string", e || ((n) => `'${n}' should be a string`));
}
a(nn, "isString");
function tn(e) {
  return v((n) => Object.prototype.toString.call(n) === "[object Object]", e || ((n) => `'${n}' should be an object`));
}
a(tn, "isObject");
function rn(e) {
  return v(/^((\+|00)86)?1((3[\d])|(4[5,6,7,9])|(5[0-3,5-9])|(6[5-7])|(7[0-8])|(8[\d])|(9[1,8,9]))\d{8}$/, e || ((n) => `'${n}' should be a mobile phone number`));
}
a(rn, "isMobile");
function on(e) {
  return v(/\d{3}-\d{8}|\d{4}-\d{7}/, e || ((n) => `'${n}' should be a landline`));
}
a(on, "isLandline");
function cn(e) {
  return v(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/, e || ((n) => `'${n}' should be a mailbox`));
}
a(cn, "isMailBox");
function un(e) {
  return v(/(^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$)|(^\d{6}(18|19|20)\d{2}(0\d|10|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$)/, e || ((n) => `'${n}' should be an identity card number`));
}
a(un, "isIdCard");
function sn(e) {
  return v(/^([\u4E00-\u9FA5·]{2,16})$/, e || ((n) => `'${n}' 需要是一个合理的中文名字`));
}
a(sn, "isCnName");
function an(e) {
  return v(/(^[a-zA-Z]{1}[a-zA-Z\s]{0,20}[a-zA-Z]{1}$)/, e || ((n) => `'${n}' should be a valid en-name`));
}
a(an, "isEnName");
function fn(e) {
  return v(/^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)$/, e || ((n) => `'${n}' should be a valid date`));
}
a(fn, "isDate");
function _n(e) {
  return v(/^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/, e || ((n) => `'${n}' should be a valid wechat`));
}
a(_n, "isWechat");
function ln(e) {
  return v(/^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/, e || ((n) => `'${n}' should be a valid hex-color`));
}
a(ln, "isHexColor");
function pn(e) {
  return v(/^(0[1-7]|1[0-356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[0-5]|8[013-6])\d{4}$/, e || ((n) => `'${n}' should be a valid postal code`));
}
a(pn, "isPostalCode");
function dn() {
  return G(M((e) => Number(e)));
}
a(dn, "toNumber");
function mn() {
  return G(M((e) => String(e)));
}
a(mn, "toString");
var En = Object.defineProperty, p = (e, n) => En(e, "name", { value: n, configurable: !0 }), w = Oe(), hn = Symbol("phecda");
function vn(e) {
  const n = le({
    install(t) {
      t.provide(hn, n), t.config.globalProperties.$phecda = n, window.__PHECDA_VUE__ || (window.__PHECDA_VUE__ = {}), e && (window.__PHECDA_VUE__[e] = {
        instance: n,
        snapshot: () => {
          const u = [], { useOMap: s } = N();
          for (const [i, f] of s)
            u.push({
              key: te(i) || i.name,
              value: f
            });
          return u;
        }
      });
      let r = [];
      T("watcher") || D("watcher", ({ eventName: u, instance: s, key: i, options: f }) => {
        const c = typeof s[i] == "function" ? s[i].bind(s) : (_) => s[i] = _;
        if (f != null && f.once) {
          const _ = /* @__PURE__ */ p((...l) => {
            c(...l), w.off(u, _);
          }, "handler");
          w.on(u, _), r.push([
            u,
            _
          ]);
        } else
          r.push([
            u,
            c
          ]), w.on(u, c);
      }), T("storage") || D("storage", ({ tag: u, key: s, instance: i }) => {
        if (!u)
          return;
        const f = localStorage.getItem(u);
        if (f) {
          const c = JSON.parse(f);
          if (s)
            i[s] = c;
          else
            for (const _ in c)
              _ && (i[_] = c[_]);
        }
        globalThis.addEventListener("beforeunload", () => {
          localStorage.setItem(u, JSON.stringify(s ? i[s] : i));
        });
      });
      const o = t.unmount.bind(t);
      t.unmount = () => {
        r.forEach(([u, s]) => w.off(u, s)), r = [], e && delete window.__PHECDA_VUE__[e], o();
      };
    }
  });
  return n;
}
p(vn, "createPhecda");
var re = {
  useVMap: /* @__PURE__ */ new WeakMap(),
  useOMap: /* @__PURE__ */ new Map(),
  useRMap: /* @__PURE__ */ new WeakMap(),
  fnMap: /* @__PURE__ */ new WeakMap(),
  computedMap: /* @__PURE__ */ new WeakMap()
};
function An(e) {
  re = e;
}
p(An, "setActivePhecda");
function N() {
  return re;
}
p(N, "getActivePhecda");
function On(e) {
  var t;
  if (!((t = window.__PHECDA_VUE__) != null && t[e]))
    return null;
  const n = /* @__PURE__ */ new Map();
  return window.__PHECDA_VUE__[e].snapshot.forEach(({ key: r, value: o }) => {
    n.set(r, o);
  }), n;
}
p(On, "getReactiveMap");
function F(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
p(F, "isObject");
function Z(e, n) {
  for (const t in n) {
    if (!n.hasOwnProperty(t))
      continue;
    const r = n[t], o = e[t];
    F(o) && F(r) && e.hasOwnProperty(t) && !Ee(r) && !he(r) ? e[t] = Z(o, r) : e[t] = r;
  }
  return e;
}
p(Z, "mergeReactiveObjects");
function B(e, n, t) {
  return oe(e[n]) ? (...r) => e[n].apply(e, r).catch(t) : (...r) => {
    try {
      return e[n].apply(e, r);
    } catch (o) {
      return t(o);
    }
  };
}
p(B, "wrapError");
function oe(e) {
  return e[Symbol.toStringTag] === "AsyncFunction";
}
p(oe, "isAsyncFunc");
function ce(e) {
  let n = 0, t, r;
  const o = /* @__PURE__ */ p(() => {
    r && --n <= 0 && (r.stop(), t = r = null);
  }, "dispose");
  return () => (n++, t || (r = W(!0), t = r.run(() => e())), ve(o), t);
}
p(ce, "createSharedReactive");
function j(e) {
  const { useOMap: n } = N();
  if (!n.has(e)) {
    const t = K(new e());
    n.set(e, t), k(t);
  }
  return n.get(e);
}
p(j, "useO");
function Sn(e) {
  return pe(j(e));
}
p(Sn, "useRaw");
function bn(e, n) {
  j(e);
  const { useOMap: t } = N(), r = t.get(e);
  Z(r, n);
}
p(bn, "usePatch");
function gn(e) {
  j(e);
  const { useRMap: n, useOMap: t, fnMap: r } = N();
  if (n.has(e))
    return n.get(e);
  const o = t.get(e), u = new Proxy(o, {
    get(s, i) {
      var f;
      if (typeof s[i] == "function") {
        if (r.has(s[i]))
          return r.get(s[i]);
        const c = (f = P(s, i).find((l) => l.error)) == null ? void 0 : f.error;
        if (!c)
          return s[i].bind(s);
        const _ = B(s, i, c);
        return r.set(s[i], _), _;
      }
      return s[i];
    },
    set(s, i, f) {
      return s[i] = f, !0;
    }
  });
  return n.set(e, u), u;
}
p(gn, "useR");
function wn(e) {
  j(e);
  const { useVMap: n, useOMap: t, fnMap: r, computedMap: o } = N();
  if (n.has(e))
    return n.get(e);
  o.set(e, {});
  const u = t.get(e), s = new Proxy(u, {
    get(i, f) {
      var _;
      if (typeof i[f] == "function") {
        if (r.has(i[f]))
          return r.get(i[f]);
        const l = (_ = P(i, f).find((E) => E.error)) == null ? void 0 : _.error;
        if (!l)
          return i[f].bind(i);
        const d = B(i, f, l);
        return r.set(i[f], d), d;
      }
      const c = o.get(e);
      return f in c || (c[f] = ce(() => Ae({
        get() {
          return i[f];
        },
        set(l) {
          return i[f] = l;
        }
      }))), c[f]();
    },
    set() {
      return !1;
    }
  });
  return n.set(e, s), s;
}
p(wn, "useV");
function Pn(e, n) {
  return de(() => {
    w.off(e, n);
  }), w.on(e, n), () => w.off(e, n);
}
p(Pn, "useEvent");
function yn(e) {
  const n = j(e);
  if (n)
    return Object.assign(n, new e()), n;
}
p(yn, "initialize");
var Rn = /^{{(.*)}}$/, Tn = /^\[\[(.*)\]\]$/;
function ue(e = {}, n = {}) {
  const t = Object.assign({
    expressionRE: Rn,
    fnRE: Tn,
    exclude: []
  }, n), r = W(!0);
  let o = r.run(() => U(e)), u = {};
  function s(m, $) {
    for (const A in m) {
      if (t.exclude.includes(A))
        continue;
      const H = $ ? `${$}.${A}` : A;
      if (typeof m[A] == "object" && m[A] && s(m[A], H), typeof m[A] == "string") {
        if (t.expressionRE.test(m[A])) {
          const V = m[A].match(t.expressionRE)[1];
          Object.defineProperty(m, A, {
            get() {
              return new Function(...Object.keys(o.value), "_eh", t.errorHandler ? `try{return ${V}}catch(e){return _eh(e,"${H}")}` : `return ${V}`)(...Object.values(o.value), t.errorHandler);
            },
            set(_e) {
              try {
                return new Function("_data", "_v", `_data.${V}=_v`)(o.value, _e), !0;
              } catch {
                return !1;
              }
            }
          });
        }
        if (t.fnRE.test(m[A])) {
          const V = m[A].match(t.fnRE)[1];
          Object.defineProperty(m, A, {
            get() {
              return new Function(...Object.keys(o.value), "_eh", t.errorHandler ? `try{${V}}catch(e){return _eh(e,"${H}")}` : `${V}`)(...Object.values(o.value), t.errorHandler);
            }
          });
        }
      }
    }
  }
  p(s, "traverse");
  function i(m) {
    return  s(m), m;
  }
  p(i, "filter");
  function f(m, $) {
    o.value[m] = $;
  }
  p(f, "setState");
  function c(m, $) {
    u[m] = o.value, l($);
  }
  p(c, "storeState");
  function _(m) {
    u[m] && (o.value = u[m]);
  }
  p(_, "applyStore");
  function l(m) {
    o.value = m || e || {};
  }
  p(l, "init");
  function d(m) {
    delete o.value[m];
  }
  p(d, "delState");
  function E(m) {
    delete u[m];
  }
  p(E, "clearStore");
  function g() {
    o = null, u = null, r.stop();
  }
  return p(g, "dispose"), {
    filter: i,
    data: o,
    init: l,
    setState: f,
    storeState: c,
    store: u,
    applyStore: _,
    dispose: g,
    clearStore: E,
    delState: d
  };
}
p(ue, "createFilter");
function $n(e, n, t, r = {}) {
  const { modelKey: o = "modelValue", onUpdate: u } = r;
  function s(c) {
    var _;
    return (_ = c._children) == null ? void 0 : _.map((l) => l._active === !1 ? null : typeof l == "string" ? l : h(e[l._component] || l._component, l));
  }
  p(s, "generateChildVNode");
  function i(c) {
    const { property: _ } = c, l = c.config[_];
    return l._component ? h(e[l._component] || l._component, {
      onVnodeMounted: (d) => {
        var E;
        return (E = l._mount) == null ? void 0 : E.call(l, d);
      },
      onVnodeUnmounted: (d) => {
        var E;
        return (E = l._unmount) == null ? void 0 : E.call(l, d);
      },
      [`${o}`]: c.data[_],
      [`onUpdate:${o}`]: (d) => {
        u ? u(_, d) : c.data[_] = d;
      },
      ...l
    }, {
      default: () => s(c.config[c.property])
    }) : h(l);
  }
  p(i, "generateVNode");
  const f = I({
    name: "CustomFormItem",
    props: {
      formItem: {
        type: Object
      },
      config: {
        type: Object,
        required: !0
      },
      data: {
        type: Object,
        required: !0
      },
      property: {
        type: String,
        required: !0
      }
    },
    setup(c) {
      return () => t ? h(t, {
        ...c.formItem
      }, {
        default: () => i(c)
      }) : i(c);
    }
  });
  return I({
    name: "CustomForm",
    props: {
      config: {
        type: Object,
        required: !0
      },
      data: {
        type: Object,
        required: !0
      }
    },
    setup(c, _) {
      const l = U();
      return X(() => {
        _.expose({
          ...l.value
        });
      }), () => h(n, Object.assign({
        ref: l
      }, _.attrs), {
        default: () => Object.keys(c.config).map((d) => c.config[d]._active === !1 ? null : h(f, {
          formItem: c.config[d]._formItem,
          config: c.config,
          property: d,
          data: c.data
        }))
      });
    }
  });
}
p($n, "createForm");
function Vn(e, n = {}, t = {}) {
  const { data: r, filter: o } = ue(n, t);
  s(e, r.value);
  const u = o(e);
  i(e, r.value);
  function s(f, c) {
    for (const _ in f)
      "_default" in f[_] && (c[_] = f[_]._default);
  }
  p(s, "initlize");
  function i(f, c) {
    for (const _ in f)
      "_active" in f[_] && me(() => u[_]._active, (l) => {
        l ? "_default" in f[_] && (c[_] = f[_]._default) : delete c[_];
      }, {
        immediate: !0
      });
  }
  return p(i, "watchChange"), {
    config: u,
    data: r
  };
}
p(Vn, "createFormData");
function ie(e, n = {}) {
  const t = y(e), r = {};
  for (const o of t) {
    const u = P(e, o);
    if (u)
      for (const s of u) {
        const { rule: i, meta: f, info: c } = s;
        i && (r[o] || (r[o] = []), r[o].push({
          validator: async (_, l, d) => {
            await C(i, l) ? d() : d(new Error(c || ""));
          },
          ...n,
          ...f || {}
        }));
      }
  }
  return r;
}
p(ie, "getElementPlusRules");
var Hn = ie;
function se(e, n = {}) {
  const t = y(e), r = {};
  for (const o of t) {
    const u = P(e, o);
    if (u)
      for (const s of u) {
        const { rule: i, meta: f, info: c } = s;
        i && (r[o] || (r[o] = []), r[o].push({
          validator: async (_, l) => await C(i, l) ? Promise.resolve() : Promise.reject(c),
          ...n,
          ...f || {}
        }));
      }
  }
  return r;
}
p(se, "getNaiveUIRules");
var xn = se;
function ae(e, n = {}) {
  const t = y(e), r = {};
  for (const o of t) {
    const u = P(e, o);
    if (u)
      for (const s of u) {
        const { rule: i, meta: f, info: c } = s;
        i && (r[o] || (r[o] = []), r[o].push({
          validator: async (_, l) => !!await C(i, l),
          message: c,
          ...n,
          ...f || {}
        }));
      }
  }
  return r;
}
p(ae, "getNutUIRules");
var Dn = ae;
function In(e, n = {}) {
  const t = y(e), r = {};
  for (const o of t) {
    const u = P(e, o);
    if (u)
      for (const s of u) {
        const { rule: i, meta: f, info: c } = s;
        i && (r[o] || (r[o] = []), r[o].push({
          validator: async (_, l) => {
            await C(i, _) || l(c);
          },
          ...n,
          ...f || {}
        }));
      }
  }
  return r;
}
p(In, "getArcoRules");
var Fn = /* @__PURE__ */ p(function(e, n = {}, t = "modelValue") {
  let r = !1;
  const o = R(!0), u = R(), s = R({}), i = R({}), f = I({
    setup() {
      return () => h(e, {
        [t]: o.value,
        [`onUpdate:${t}`]: (c) => {
          o.value = c;
        },
        ...i.value
      }, {
        default: () => u.value && h(u.value, s.value)
      });
    }
  });
  return (c, _, l) => {
    if (u.value = c, s.value = _, i.value = Object.assign({}, n, l), r)
      o.value = !0;
    else {
      const d = document.createElement("div"), E = h(f);
      document.body.appendChild((q(E, d), d)), r = !0;
    }
  };
}, "createLayer");
function Cn(e, n) {
  const { table: t, column: r, data: o, cellSlot: u = "default", columnSlot: s = "default" } = n, i = I({
    name: "PhecdaTableColumn",
    setup(f, { attrs: c }) {
      const _ = c._component, l = c._children && {
        default: () => c._children.map((d) => h(r, d))
      };
      return r ? () => h(r, c, _ ? {
        [`${u}`]: (d) => {
          var g;
          const E = typeof c._props == "function" ? (g = c._props) == null ? void 0 : g.call(c, d) : c._props;
          return h(e[_], {
            data: o,
            ...E || {}
          }, E == null ? void 0 : E._slots);
        }
      } : l) : (d) => {
        var g;
        const E = typeof c._props == "function" ? (g = c._props) == null ? void 0 : g.call(c, d) : c._props;
        return _ ? h(e[_], {
          scope: d,
          data: o,
          ...E || {}
        }, E == null ? void 0 : E._slots) : l;
      };
    }
  });
  return I({
    name: "PhecdaTable",
    props: {
      config: {
        type: Array,
        required: !0
      }
    },
    setup(f, c) {
      const _ = U();
      return X(() => {
        c.expose({
          ..._.value
        });
      }), () => h(t, Object.assign({
        ref: _
      }, c.attrs), {
        [`${s}`]: (l) => f.config.map((d) => (d = typeof d == "function" ? d(l) : d, h(i, d)))
      });
    }
  });
}
p(Cn, "createTable");
function fe(e, n, t = "default", r) {
  const o = {
    [`${t}`]: () => h(e, n, r)
  };
  return {
    to(u, s, i = "default") {
      return fe(u, s, i, o);
    },
    get() {
      return o;
    },
    bind(u, s) {
      o[s] = () => u;
    }
  };
}
p(fe, "createPipe");
var Un = /* @__PURE__ */ p(function(e, n, t = {}) {
  let r = !1;
  const { modelKey: o = "modelValue", wrapProps: u = {}, compProps: s = {} } = t, i = R(!0), f = R({}), c = R({}), _ = I({
    setup() {
      return () => h(e, {
        [o]: i.value,
        [`onUpdate:${o}`]: (l) => {
          i.value = l;
        },
        ...c.value
      }, {
        default: () => h(n, f.value)
      });
    }
  });
  return (l, d) => {
    if (f.value = Object.assign({}, s, l), c.value = Object.assign({}, u, d), r)
      i.value = !0;
    else {
      const E = document.createElement("div"), g = h(_);
      document.body.appendChild((q(g, E), E)), r = !0;
    }
  };
}, "createModal"), Nn = class {
  constructor() {
  }
  get tag() {
    return this.__TAG__;
  }
  on(e, n) {
    w.on(e, n);
  }
  emit(e, n) {
    w.emit(e, n);
  }
  off(e, n) {
    w.off(e, n);
  }
};
p(Nn, "PV");
export {
  Fe as Assign,
  Ne as Bind,
  Me as Clear,
  ne as DataMap,
  Rn as EXPRESS_RE,
  qe as Effect,
  ee as Empty,
  He as Err,
  xe as Expose,
  Tn as FN_RE,
  Hn as GetDevUIRules,
  Ue as Global,
  je as Ignore,
  Ce as Init,
  Le as Inject,
  Nn as PV,
  G as Pipe,
  ze as Provide,
  v as Rule,
  Je as Storage,
  De as Tag,
  Xe as Watcher,
  x as activeInstance,
  We as addDecoToClass,
  Be as classToValue,
  ue as createFilter,
  $n as createForm,
  Vn as createFormData,
  Fn as createLayer,
  Un as createModal,
  vn as createPhecda,
  fe as createPipe,
  Cn as createTable,
  w as emitter,
  N as getActivePhecda,
  xn as getAntDRules,
  In as getArcoRules,
  Ge as getBind,
  ie as getElementPlusRules,
  y as getExposeKey,
  P as getHandler,
  Pe as getInitEvent,
  L as getModelState,
  se as getNaiveUIRules,
  ae as getNutUIRules,
  Re as getOwnExposeKey,
  $e as getOwnHandler,
  Te as getOwnIgnoreKey,
  we as getOwnInitEvent,
  ye as getOwnModelState,
  Ve as getOwnState,
  T as getProperty,
  On as getReactiveMap,
  Y as getState,
  te as getTag,
  Dn as getVantRules,
  O as init,
  yn as initialize,
  D as injectProperty,
  Ye as isArray,
  ke as isBoolean,
  sn as isCnName,
  fn as isDate,
  an as isEnName,
  ln as isHexColor,
  un as isIdCard,
  on as isLandline,
  cn as isMailBox,
  rn as isMobile,
  en as isNumber,
  tn as isObject,
  Qe as isOption,
  be as isPhecda,
  pn as isPostalCode,
  nn as isString,
  _n as isWechat,
  hn as phecdaSymbol,
  Ze as plainToClass,
  b as regisHandler,
  ge as regisInitEvent,
  k as register,
  Ie as registerAsync,
  An as setActivePhecda,
  z as setExposeKey,
  J as setIgnoreKey,
  S as setModelVar,
  Q as setState,
  Ke as snapShot,
  M as to,
  dn as toNumber,
  mn as toString,
  Pn as useEvent,
  j as useO,
  bn as usePatch,
  gn as useR,
  Sn as useRaw,
  wn as useV,
  C as validate
};
