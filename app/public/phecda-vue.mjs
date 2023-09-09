import { markRaw as fe, reactive as W, onBeforeUnmount as _e, effectScope as B, ref as F, defineComponent as V, h as E, onMounted as X, watch as le, shallowRef as T, render as z, isRef as pe, isReactive as de, onScopeDispose as me, computed as Ee } from "./vue.mjs";
function ve(e) {
  return { all: e = e || /* @__PURE__ */ new Map(), on: function(t, n) {
    var r = e.get(t);
    r ? r.push(n) : e.set(t, [n]);
  }, off: function(t, n) {
    var r = e.get(t);
    r && (n ? r.splice(r.indexOf(n) >>> 0, 1) : e.set(t, []));
  }, emit: function(t, n) {
    var r = e.get(t);
    r && r.slice().map(function(o) {
      o(n);
    }), (r = e.get("*")) && r.slice().map(function(o) {
      o(t, n);
    });
  } };
}
var he = Object.defineProperty, p = (e, t) => he(e, "name", { value: t, configurable: !0 });
async function C(e, t) {
  return (typeof e == "string" || typeof e == "number") && t === e ? !0 : typeof e == "function" ? e(t) : e instanceof RegExp ? e.test(t) : !1;
}
p(C, "validate");
function J(e) {
  var t;
  return (t = e.prototype) == null ? void 0 : t.__TAG__;
}
p(J, "getTag");
function G(e, t) {
  if (!t)
    return e;
  for (const n in t) {
    if (D(e[n]) && D(t[n])) {
      G(e[n], t[n]);
      continue;
    }
    if (Array.isArray(e[n]) && Array.isArray(t[n])) {
      e[n].push(...t[n].filter((r) => !e[n].includes(r)));
      continue;
    }
    e[n] = t[n];
  }
  return e;
}
p(G, "mergeOptions");
function D(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
p(D, "isObject");
function ge(e) {
  return e && !!e.prototype._namespace;
}
p(ge, "isPhecda");
function h(e) {
  e._namespace || (e._namespace = {
    __INIT_EVENT__: /* @__PURE__ */ new Set(),
    __EXPOSE_VAR__: /* @__PURE__ */ new Set(),
    __IGNORE_VAR__: /* @__PURE__ */ new Set(),
    __STATE_VAR__: /* @__PURE__ */ new Set(),
    __STATE_HANDLER__: /* @__PURE__ */ new Map(),
    __STATE_NAMESPACE__: /* @__PURE__ */ new Map()
  });
}
p(h, "init");
function Ae(e, t) {
  h(e), e._namespace.__INIT_EVENT__.add(t);
}
p(Ae, "regisInitEvent");
function Se(e) {
  return h(e), [
    ...e._namespace.__INIT_EVENT__
  ];
}
p(Se, "getInitEvent");
function S(e, t) {
  h(e), e._namespace.__STATE_VAR__.add(t), L(e, t);
}
p(S, "setModalVar");
function L(e, t) {
  h(e), e._namespace.__EXPOSE_VAR__.add(t);
}
p(L, "setExposeKey");
function Q(e, t) {
  h(e), e._namespace.__IGNORE_VAR__.add(t);
}
p(Q, "setIgnoreKey");
function j(e) {
  return h(e), [
    ...e._namespace.__STATE_VAR__
  ];
}
p(j, "getModelState");
function R(e) {
  return h(e), [
    ...e._namespace.__EXPOSE_VAR__
  ].filter((t) => !e._namespace.__IGNORE_VAR__.has(t));
}
p(R, "getExposeKey");
function Pe(e) {
  return h(e), [
    ...e._namespace.__IGNORE_VAR__
  ];
}
p(Pe, "getIgnoreKey");
function P(e, t, n) {
  h(e), e._namespace.__STATE_HANDLER__.has(t) ? e._namespace.__STATE_HANDLER__.get(t).push(n) : e._namespace.__STATE_HANDLER__.set(t, [
    n
  ]);
}
p(P, "regisHandler");
function w(e, t) {
  return e._namespace.__STATE_HANDLER__.get(t) || [];
}
p(w, "getHandler");
function Y(e, t, n) {
  const r = e._namespace.__STATE_NAMESPACE__;
  r.has(t) ? G(r.get(t), n) : r.set(t, n);
}
p(Y, "mergeState");
function Z(e, t) {
  const n = e._namespace.__STATE_NAMESPACE__;
  if (n)
    return n.get(t);
}
p(Z, "getState");
function k(e) {
  var n;
  const t = R(e);
  for (const r of t) {
    const o = w(e, r);
    for (const a of o)
      (n = a.init) == null || n.call(a, e);
  }
}
p(k, "register");
async function we(e) {
  var n;
  const t = R(e);
  for (const r of t) {
    const o = w(e, r);
    for (const a of o)
      await ((n = a.init) == null ? void 0 : n.call(a, e));
  }
}
p(we, "registerAsync");
function Te(e, t) {
  S(e, t), P(e, t, {
    async init(n) {
      n[t]();
    }
  });
}
p(Te, "Init");
function Re(e) {
  return (t, n) => {
    S(t, n), Y(t, n, {
      value: e
    });
  };
}
p(Re, "Bind");
function Oe(e, t, n) {
  return (r, o) => {
    S(r, o), P(r, o, {
      rule: e,
      info: t,
      meta: n
    });
  };
}
p(Oe, "Rule");
function ye(e, t) {
  Q(e, t);
}
p(ye, "Ignore");
function Ve(e, t) {
  h(e), e._namespace.__INIT_EVENT__.delete(t), e._namespace.__EXPOSE_VAR__.delete(t), e._namespace.__IGNORE_VAR__.delete(t), e._namespace.__STATE_VAR__.delete(t), e._namespace.__STATE_HANDLER__.delete(t), e._namespace.__STATE_NAMESPACE__.delete(t);
}
p(Ve, "Clear");
function Ie(e) {
  return (t, n) => {
    S(t, n), P(t, n, {
      error: e
    });
  };
}
p(Ie, "Err");
function be(e, t) {
  L(e, t);
}
p(be, "Expose");
function Ce(e) {
  return (t, n) => {
    S(t, n), P(t, n, {
      async pipe(r) {
        const o = e.value;
        for (const a of o)
          r[n] = await a(r[n]);
      }
    });
  };
}
p(Ce, "Pipe");
function Ne(e) {
  return (t) => {
    t.prototype.__TAG__ = e;
  };
}
p(Ne, "Tag");
function He(e) {
  return (t) => {
    h(t.prototype), S(t.prototype, "__CLASS"), P(t.prototype, "__CLASS", {
      init: async (n) => {
        const r = await e(n);
        if (r && typeof r == "object" && !Array.isArray(r))
          for (const o in r)
            n[o] = r[o];
      }
    });
  };
}
p(He, "Assign");
function Me(e) {
  globalThis.__PHECDA__ || (globalThis.__PHECDA__ = {});
  const t = e.prototype.__TAG__;
  t && (globalThis.__PHECDA__[t] = e);
}
p(Me, "Global");
function De(e) {
  const t = new e(), n = j(t), r = {};
  for (const o of n) {
    const a = Z(t, o);
    a.value && (r[o] = a.value);
  }
  return r;
}
p(De, "getBind");
async function $e(e, t, n = {}) {
  var s;
  const r = new e(), o = [], a = j(r);
  for (const c of a) {
    r[c] = t[c];
    const u = w(r, c);
    if (u) {
      if (n.collectError !== !1)
        for (const i of u) {
          const f = i.rule;
          if (f && !await C(f, r[c]) && (o.push(i.info || ""), !n.collectError))
            break;
        }
      if (o.length > 0 && !n.transform)
        return {
          err: o,
          data: r
        };
      if (n.transform !== !1)
        for (const i of u)
          await ((s = i.pipe) == null ? void 0 : s.call(i, r));
    }
  }
  return {
    data: r,
    err: o
  };
}
p($e, "plainToClass");
function xe(e) {
  const t = {}, n = R(e);
  for (const r of n)
    t[r] = e[r];
  return t;
}
p(xe, "classToValue");
function ee(e, t) {
  const n = t || [];
  return n.push(e), {
    to: (r) => ee(r, n),
    value: n
  };
}
p(ee, "to");
function Ue(e) {
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
p(Ue, "snapShot");
function Fe(e, t, n, r = "normal") {
  n(r === "normal" ? e.prototype : e, t);
}
p(Fe, "addDecoToClass");
var $ = {};
function x(e, t) {
  return $[e] = t, $;
}
p(x, "injectProperty");
function I(e) {
  return $[e];
}
p(I, "getProperty");
function Ge(e, t) {
  return (n, r) => {
    S(n, r), P(n, r, {
      init(o) {
        var a;
        (a = I("watcher")) == null || a({
          eventName: e,
          instance: o,
          key: r,
          options: t
        });
      }
    });
  };
}
p(Ge, "Watcher");
function Le(e) {
  return (t, n) => {
    let r;
    if (n) {
      h(t), r = e || t.__TAG__;
      const o = Symbol(r);
      S(t, o), P(t, o, {
        init: (a) => {
          var s;
          (s = I("storage")) == null || s({
            instance: a,
            key: n,
            tag: r
          });
        }
      });
    } else {
      h(t.prototype), r = e || `${t.prototype.__TAG__}_${n}`;
      const o = Symbol(r);
      S(t.prototype, o), P(t.prototype, o, {
        init: (a) => {
          var s;
          (s = I("storage")) == null || s({
            instance: a,
            key: "",
            tag: r
          });
        }
      });
    }
  };
}
p(Le, "Storage");
var je = Object.defineProperty, l = (e, t) => je(e, "name", { value: t, configurable: !0 }), A = ve(), Ke = Symbol("phecda");
function qe(e) {
  const t = fe({
    install(n) {
      n.provide(Ke, t), n.config.globalProperties.$phecda = t, window.__PHECDA_VUE__ || (window.__PHECDA_VUE__ = {}), e && (window.__PHECDA_VUE__[e] = {
        instance: t,
        snapshot: () => {
          const a = [], { useOMap: s } = b();
          for (const [c, u] of s)
            a.push({
              key: J(c) || c.name,
              value: u
            });
          return a;
        }
      });
      let r = [];
      I("watcher") || x("watcher", ({ eventName: a, instance: s, key: c, options: u }) => {
        const i = typeof s[c] == "function" ? s[c].bind(s) : (f) => s[c] = f;
        if (u != null && u.once) {
          const f = /* @__PURE__ */ l((..._) => {
            i(..._), A.off(a, f);
          }, "handler");
          A.on(a, f), r.push([
            a,
            f
          ]);
        } else
          r.push([
            a,
            i
          ]), A.on(a, i);
      }), I("storage") || x("storage", ({ tag: a, key: s, instance: c }) => {
        if (!a)
          return;
        const u = localStorage.getItem(a);
        if (u) {
          const i = JSON.parse(u);
          if (s)
            c[s] = i;
          else
            for (const f in i)
              f && (c[f] = i[f]);
        }
        globalThis.addEventListener("beforeunload", () => {
          localStorage.setItem(a, JSON.stringify(s ? c[s] : c));
        });
      });
      const o = n.unmount.bind(n);
      n.unmount = () => {
        r.forEach(([a, s]) => A.off(a, s)), r = [], e && delete window.__PHECDA_VUE__[e], o();
      };
    }
  });
  return t;
}
l(qe, "createPhecda");
var te = {
  useVMap: /* @__PURE__ */ new WeakMap(),
  useOMap: /* @__PURE__ */ new Map(),
  useRMap: /* @__PURE__ */ new WeakMap(),
  fnMap: /* @__PURE__ */ new WeakMap(),
  computedMap: /* @__PURE__ */ new WeakMap()
};
function We(e) {
  te = e;
}
l(We, "setActivePhecda");
function b() {
  return te;
}
l(b, "getActivePhecda");
function Be(e) {
  var n;
  if (!((n = window.__PHECDA_VUE__) != null && n[e]))
    return null;
  const t = /* @__PURE__ */ new Map();
  return window.__PHECDA_VUE__[e].snapshot.forEach(({ key: r, value: o }) => {
    t.set(r, o);
  }), t;
}
l(Be, "getReactiveMap");
function U(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
l(U, "isObject");
function K(e, t) {
  for (const n in t) {
    if (!t.hasOwnProperty(n))
      continue;
    const r = t[n], o = e[n];
    U(o) && U(r) && e.hasOwnProperty(n) && !pe(r) && !de(r) ? e[n] = K(o, r) : e[n] = r;
  }
  return e;
}
l(K, "mergeReactiveObjects");
function q(e, t, n) {
  return ne(e[t]) ? (...r) => e[t].apply(e, r).catch(n) : (...r) => {
    try {
      return e[t].apply(e, r);
    } catch (o) {
      return n(o);
    }
  };
}
l(q, "wrapError");
function ne(e) {
  return e[Symbol.toStringTag] === "AsyncFunction";
}
l(ne, "isAsyncFunc");
function re(e) {
  let t = 0, n, r;
  const o = /* @__PURE__ */ l(() => {
    r && --t <= 0 && (r.stop(), n = r = null);
  }, "dispose");
  return () => (t++, n || (r = B(!0), n = r.run(() => e())), me(o), n);
}
l(re, "createSharedReactive");
function N(e) {
  const { useOMap: t } = b();
  if (!t.has(e)) {
    const n = W(new e());
    t.set(e, n), k(n);
  }
  return t.get(e);
}
l(N, "useO");
function Xe(e, t) {
  N(e);
  const { useOMap: n } = b(), r = n.get(e);
  K(r, t);
}
l(Xe, "usePatch");
function ze(e) {
  N(e);
  const { useRMap: t, useOMap: n, fnMap: r } = b();
  if (t.has(e))
    return t.get(e);
  const o = n.get(e), a = new Proxy(o, {
    get(s, c) {
      var u;
      if (typeof s[c] == "function") {
        if (r.has(s[c]))
          return r.get(s[c]);
        const i = (u = w(s, c).find((_) => _.error)) == null ? void 0 : u.error;
        if (!i)
          return s[c].bind(s);
        const f = q(s, c, i);
        return r.set(s[c], f), f;
      }
      return s[c];
    },
    set(s, c, u) {
      return s[c] = u, !0;
    }
  });
  return t.set(e, a), a;
}
l(ze, "useR");
function Je(e) {
  N(e);
  const { useVMap: t, useOMap: n, fnMap: r, computedMap: o } = b();
  if (t.has(e))
    return t.get(e);
  o.set(e, {});
  const a = n.get(e), s = new Proxy(a, {
    get(c, u) {
      var f;
      if (typeof c[u] == "function") {
        if (r.has(c[u]))
          return r.get(c[u]);
        const _ = (f = w(c, u).find((v) => v.error)) == null ? void 0 : f.error;
        if (!_)
          return c[u].bind(c);
        const m = q(c, u, _);
        return r.set(c[u], m), m;
      }
      const i = o.get(e);
      return u in i || (i[u] = re(() => Ee({
        get() {
          return c[u];
        },
        set(_) {
          return c[u] = _;
        }
      }))), i[u]();
    },
    set() {
      return !1;
    }
  });
  return t.set(e, s), s;
}
l(Je, "useV");
function Qe(e, t) {
  return _e(() => {
    A.off(e, t);
  }), A.on(e, t), () => A.off(e, t);
}
l(Qe, "useEvent");
function Ye(e) {
  const t = N(e);
  if (t)
    return Object.assign(t, new e()), t;
}
l(Ye, "initialize");
var Ze = /^{{(.*)}}$/, ke = /^\[\[(.*)\]\]$/;
function oe(e = {}, t = {}) {
  const n = Object.assign({
    expressionRE: Ze,
    fnRE: ke,
    exclude: []
  }, t), r = B(!0);
  let o = r.run(() => F(e)), a = {};
  function s(d, O) {
    for (const g in d) {
      if (n.exclude.includes(g))
        continue;
      const M = O ? `${O}.${g}` : g;
      if (typeof d[g] == "object" && d[g] && s(d[g], M), typeof d[g] == "string") {
        if (n.expressionRE.test(d[g])) {
          const y = d[g].match(n.expressionRE)[1];
          Object.defineProperty(d, g, {
            get() {
              return new Function(...Object.keys(o.value), "_eh", n.errorHandler ? `try{return ${y}}catch(e){return _eh(e,"${M}")}` : `return ${y}`)(...Object.values(o.value), n.errorHandler);
            },
            set(ue) {
              try {
                return new Function("_data", "_v", `_data.${y}=_v`)(o.value, ue), !0;
              } catch {
                return !1;
              }
            }
          });
        }
        if (n.fnRE.test(d[g])) {
          const y = d[g].match(n.fnRE)[1];
          Object.defineProperty(d, g, {
            get() {
              return new Function(...Object.keys(o.value), "_eh", n.errorHandler ? `try{${y}}catch(e){return _eh(e,"${M}")}` : `${y}`)(...Object.values(o.value), n.errorHandler);
            }
          });
        }
      }
    }
  }
  l(s, "traverse");
  function c(d) {
    return d = W(d), s(d), d;
  }
  l(c, "filter");
  function u(d, O) {
    o.value[d] = O;
  }
  l(u, "setState");
  function i(d, O) {
    a[d] = o.value, _(O);
  }
  l(i, "storeState");
  function f(d) {
    a[d] && (o.value = a[d]);
  }
  l(f, "applyStore");
  function _(d) {
    o.value = d || e || {};
  }
  l(_, "init");
  function m(d) {
    delete o.value[d];
  }
  l(m, "delState");
  function v(d) {
    delete a[d];
  }
  l(v, "clearStore");
  function H() {
    o = null, a = null, r.stop();
  }
  return l(H, "dispose"), {
    filter: c,
    data: o,
    init: _,
    setState: u,
    storeState: i,
    store: a,
    applyStore: f,
    dispose: H,
    clearStore: v,
    delState: m
  };
}
l(oe, "createFilter");
function et(e, t, n, r = {}) {
  const { modelKey: o = "modelValue", onUpdate: a } = r;
  function s(i) {
    var f;
    return (f = i._children) == null ? void 0 : f.map((_) => _._active === !1 ? null : E(e[_._component], _));
  }
  l(s, "generateChildVNode");
  function c(i) {
    const { property: f } = i, _ = i.config[f];
    return E(e[_._component], {
      onVnodeMounted: (m) => {
        var v;
        return (v = _._mount) == null ? void 0 : v.call(_, m);
      },
      onVnodeUnmounted: (m) => {
        var v;
        return (v = _._unmount) == null ? void 0 : v.call(_, m);
      },
      [`${o}`]: i.data[f],
      [`onUpdate:${o}`]: (m) => {
        a ? a(f, m) : i.data[f] = m;
      },
      ..._
    }, {
      default: () => s(i.config[i.property])
    });
  }
  l(c, "generateVNode");
  const u = V({
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
    setup(i) {
      return () => n ? E(n, {
        ...i.formItem
      }, {
        default: () => c(i)
      }) : c(i);
    }
  });
  return V({
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
    setup(i, f) {
      const _ = F();
      return X(() => {
        f.expose({
          ..._.value
        });
      }), () => E(t, Object.assign({
        ref: _
      }, f.attrs), {
        default: () => Object.keys(i.config).map((m) => i.config[m]._active === !1 ? null : E(u, {
          formItem: i.config[m]._formItem,
          config: i.config,
          property: m,
          data: i.data
        }))
      });
    }
  });
}
l(et, "createForm");
function tt(e, t = {}, n = {}) {
  const { data: r, filter: o } = oe(t, n);
  s(e, r.value);
  const a = o(e);
  c(e, r.value);
  function s(u, i) {
    for (const f in u)
      "_default" in u[f] && (i[f] = u[f]._default);
  }
  l(s, "initlize");
  function c(u, i) {
    for (const f in u)
      "_active" in u[f] && le(() => a[f]._active, (_) => {
        _ ? "_default" in u[f] && (i[f] = u[f]._default) : delete i[f];
      }, {
        immediate: !0
      });
  }
  return l(c, "watchChange"), {
    config: a,
    data: r
  };
}
l(tt, "createFormData");
function ae(e, t = {}) {
  const n = R(e), r = {};
  for (const o of n) {
    const a = w(e, o);
    if (a)
      for (const s of a) {
        const { rule: c, meta: u, info: i } = s;
        c && (r[o] || (r[o] = []), r[o].push({
          validator: async (f, _, m) => {
            await C(c, _) ? m() : m(new Error(i || ""));
          },
          ...t,
          ...u || {}
        }));
      }
  }
  return r;
}
l(ae, "getElementPlusRules");
var ct = ae;
function ce(e, t = {}) {
  const n = R(e), r = {};
  for (const o of n) {
    const a = w(e, o);
    if (a)
      for (const s of a) {
        const { rule: c, meta: u, info: i } = s;
        c && (r[o] || (r[o] = []), r[o].push({
          validator: async (f, _) => await C(c, _) ? Promise.resolve() : Promise.reject(i),
          ...t,
          ...u || {}
        }));
      }
  }
  return r;
}
l(ce, "getNaiveUIRules");
var st = ce;
function se(e, t = {}) {
  const n = R(e), r = {};
  for (const o of n) {
    const a = w(e, o);
    if (a)
      for (const s of a) {
        const { rule: c, meta: u, info: i } = s;
        c && (r[o] || (r[o] = []), r[o].push({
          validator: async (f, _) => !!await C(c, _),
          message: i,
          ...t,
          ...u || {}
        }));
      }
  }
  return r;
}
l(se, "getNutUIRules");
var it = se, ut = /* @__PURE__ */ l(function(e, t = {}, n = "modelValue") {
  let r = !1;
  const o = T(!0), a = T(), s = T({}), c = T({}), u = V({
    setup() {
      return () => E(e, {
        [n]: o.value,
        [`onUpdate:${n}`]: (i) => {
          o.value = i;
        },
        ...c.value
      }, {
        default: () => a.value && E(a.value, s.value)
      });
    }
  });
  return (i, f, _) => {
    if (a.value = i, s.value = f, c.value = Object.assign({}, t, _), r)
      o.value = !0;
    else {
      const m = document.createElement("div"), v = E(u);
      document.body.appendChild((z(v, m), m)), r = !0;
    }
  };
}, "createLayer");
function nt(e, t, n, r) {
  const o = V({
    name: "PhecdaTableColumn",
    props: {
      tableColumn: {
        type: Object,
        required: !0
      }
    },
    setup(a) {
      const s = a.tableColumn._component;
      return () => E(n, {
        ...a.tableColumn
      }, {
        default: (c) => s ? E(e[s], {
          scope: c,
          data: r,
          ...a.tableColumn._props || {}
        }) : null
      });
    }
  });
  return V({
    name: "PhecdaTable",
    props: {
      config: {
        type: Array,
        required: !0
      }
    },
    setup(a, s) {
      const c = F();
      return X(() => {
        s.expose({
          ...c.value
        });
      }), () => E(t, Object.assign({
        ref: c
      }, s.attrs), {
        default: () => a.config.map((u) => E(o, {
          tableColumn: u
        }))
      });
    }
  });
}
l(nt, "createTable");
function ie(e, t, n = "default", r) {
  const o = {
    [`${n}`]: () => E(e, t, r)
  };
  return {
    to(a, s, c = "default") {
      return ie(a, s, c, o);
    },
    get() {
      return o;
    },
    bind(a, s) {
      o[s] = () => a;
    }
  };
}
l(ie, "createPipe");
var ft = /* @__PURE__ */ l(function(e, t, n = {}) {
  let r = !1;
  const { modelKey: o = "modelValue", wrapProps: a = {}, compProps: s = {} } = n, c = T(!0), u = T({}), i = T({}), f = V({
    setup() {
      return () => E(e, {
        [o]: c.value,
        [`onUpdate:${o}`]: (_) => {
          c.value = _;
        },
        ...i.value
      }, {
        default: () => E(t, u.value)
      });
    }
  });
  return (_, m) => {
    if (u.value = Object.assign({}, s, _), i.value = Object.assign({}, a, m), r)
      c.value = !0;
    else {
      const v = document.createElement("div"), H = E(f);
      document.body.appendChild((z(H, v), v)), r = !0;
    }
  };
}, "createModal"), rt = class {
  constructor() {
  }
  get tag() {
    return this.__TAG__;
  }
  on(e, t) {
    A.on(e, t);
  }
  emit(e, t) {
    A.emit(e, t);
  }
  off(e, t) {
    A.off(e, t);
  }
};
l(rt, "PV");
export {
  He as Assign,
  Re as Bind,
  Ve as Clear,
  Ze as EXPRESS_RE,
  Ie as Err,
  be as Expose,
  ke as FN_RE,
  ct as GetDevUIRules,
  Me as Global,
  ye as Ignore,
  Te as Init,
  rt as PV,
  Ce as Pipe,
  Oe as Rule,
  Le as Storage,
  Ne as Tag,
  Ge as Watcher,
  $ as activeInstance,
  Fe as addDecoToClass,
  xe as classToValue,
  oe as createFilter,
  et as createForm,
  tt as createFormData,
  ut as createLayer,
  ft as createModal,
  qe as createPhecda,
  ie as createPipe,
  nt as createTable,
  A as emitter,
  b as getActivePhecda,
  st as getAntDRules,
  De as getBind,
  ae as getElementPlusRules,
  R as getExposeKey,
  w as getHandler,
  Pe as getIgnoreKey,
  Se as getInitEvent,
  j as getModelState,
  ce as getNaiveUIRules,
  se as getNutUIRules,
  I as getProperty,
  Be as getReactiveMap,
  Z as getState,
  J as getTag,
  it as getVantRules,
  h as init,
  Ye as initialize,
  x as injectProperty,
  ge as isPhecda,
  G as mergeOptions,
  Y as mergeState,
  Ke as phecdaSymbol,
  $e as plainToClass,
  P as regisHandler,
  Ae as regisInitEvent,
  k as register,
  we as registerAsync,
  We as setActivePhecda,
  L as setExposeKey,
  Q as setIgnoreKey,
  S as setModalVar,
  Ue as snapShot,
  ee as to,
  Qe as useEvent,
  N as useO,
  Xe as usePatch,
  ze as useR,
  Je as useV,
  C as validate
};
//# sourceMappingURL=alioth-preset-elementplus.mjs.map
