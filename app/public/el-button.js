import { getCurrentScope as Z, onScopeDispose as q, unref as z, getCurrentInstance as I, onMounted as B, nextTick as H, ref as $, readonly as J, openBlock as h, createElementBlock as g, createElementVNode as f, warn as W, computed as w, inject as m, watch as Y, toRef as Q, onUnmounted as X, defineComponent as M, mergeProps as G, renderSlot as ee } from "vue";
function te(e) {
  for (var t = -1, n = e == null ? 0 : e.length, o = {}; ++t < n; ) {
    var s = e[t];
    o[s[0]] = s[1];
  }
  return o;
}
function ft(e) {
  return e == null;
}
var O;
const b = typeof window < "u", pt = (e) => typeof e == "boolean", ne = (e) => typeof e == "number";
b && ((O = window == null ? void 0 : window.navigator) != null && O.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function se(e) {
  return typeof e == "function" ? e() : z(e);
}
function vt(e) {
  return e;
}
function oe(e) {
  return Z() ? (q(e), !0) : !1;
}
function mt(e, t = !0) {
  I() ? B(e) : t ? e() : H(e);
}
function ht(e, t, n = {}) {
  const {
    immediate: o = !0
  } = n, s = $(!1);
  let a = null;
  function c() {
    a && (clearTimeout(a), a = null);
  }
  function d() {
    s.value = !1, c();
  }
  function _(...u) {
    c(), s.value = !0, a = setTimeout(() => {
      s.value = !1, a = null, e(...u);
    }, se(t));
  }
  return o && (s.value = !0, b && _()), oe(d), {
    isPending: J(s),
    start: _,
    stop: d
  };
}
const re = () => {
}, ae = Object.prototype.hasOwnProperty, S = (e, t) => ae.call(e, t), gt = (e) => typeof e == "function", j = (e) => typeof e == "string", T = (e) => e !== null && typeof e == "object", le = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, ce = /-(\w)/g, ie = le((e) => e.replace(ce, (t, n) => n ? n.toUpperCase() : "")), ue = (e) => e === void 0, de = (e) => j(e) ? !Number.isNaN(Number(e)) : !1;
class _e extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function wt(e, t) {
  throw new _e(`[${e}] ${t}`);
}
function yt(e, t) {
}
const F = (e = "") => e.split(" ").filter((t) => !!t.trim()), $t = (e, t) => {
  if (!e || !t)
    return !1;
  if (t.includes(" "))
    throw new Error("className should not contain space.");
  return e.classList.contains(t);
}, zt = (e, t) => {
  !e || !t.trim() || e.classList.add(...F(t));
}, Ct = (e, t) => {
  !e || !t.trim() || e.classList.remove(...F(t));
}, It = (e, t) => {
  var n;
  if (!b || !e || !t)
    return "";
  let o = ie(t);
  o === "float" && (o = "cssFloat");
  try {
    const s = e.style[o];
    if (s)
      return s;
    const a = (n = document.defaultView) == null ? void 0 : n.getComputedStyle(e, "");
    return a ? a[o] : "";
  } catch {
    return e.style[o];
  }
};
function fe(e, t = "px") {
  if (!e)
    return "";
  if (ne(e) || de(e))
    return `${e}${t}`;
  if (j(e))
    return e;
}
/*! Element Plus Icons Vue v2.1.0 */
var C = (e, t) => {
  let n = e.__vccOpts || e;
  for (let [o, s] of t)
    n[o] = s;
  return n;
}, pe = {
  name: "CircleCheck"
}, ve = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, me = /* @__PURE__ */ f(
  "path",
  {
    fill: "currentColor",
    d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
  },
  null,
  -1
  /* HOISTED */
), he = /* @__PURE__ */ f(
  "path",
  {
    fill: "currentColor",
    d: "M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z"
  },
  null,
  -1
  /* HOISTED */
), ge = [
  me,
  he
];
function we(e, t, n, o, s, a) {
  return h(), g("svg", ve, ge);
}
var ye = /* @__PURE__ */ C(pe, [["render", we], ["__file", "circle-check.vue"]]), $e = {
  name: "CircleClose"
}, ze = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Ce = /* @__PURE__ */ f(
  "path",
  {
    fill: "currentColor",
    d: "m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248L466.752 512z"
  },
  null,
  -1
  /* HOISTED */
), Ie = /* @__PURE__ */ f(
  "path",
  {
    fill: "currentColor",
    d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
  },
  null,
  -1
  /* HOISTED */
), be = [
  Ce,
  Ie
];
function Le(e, t, n, o, s, a) {
  return h(), g("svg", ze, be);
}
var Ne = /* @__PURE__ */ C($e, [["render", Le], ["__file", "circle-close.vue"]]), Pe = {
  name: "Close"
}, Ee = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Oe = /* @__PURE__ */ f(
  "path",
  {
    fill: "currentColor",
    d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
  },
  null,
  -1
  /* HOISTED */
), Se = [
  Oe
];
function xe(e, t, n, o, s, a) {
  return h(), g("svg", Ee, Se);
}
var Ve = /* @__PURE__ */ C(Pe, [["render", xe], ["__file", "close.vue"]]), Be = {
  name: "Hide"
}, Me = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, je = /* @__PURE__ */ f(
  "path",
  {
    fill: "currentColor",
    d: "M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2L371.2 588.8ZM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z"
  },
  null,
  -1
  /* HOISTED */
), Te = /* @__PURE__ */ f(
  "path",
  {
    fill: "currentColor",
    d: "M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z"
  },
  null,
  -1
  /* HOISTED */
), Fe = [
  je,
  Te
];
function Ke(e, t, n, o, s, a) {
  return h(), g("svg", Me, Fe);
}
var bt = /* @__PURE__ */ C(Be, [["render", Ke], ["__file", "hide.vue"]]), Ue = {
  name: "Loading"
}, Ae = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, De = /* @__PURE__ */ f(
  "path",
  {
    fill: "currentColor",
    d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
  },
  null,
  -1
  /* HOISTED */
), ke = [
  De
];
function Re(e, t, n, o, s, a) {
  return h(), g("svg", Ae, ke);
}
var Ze = /* @__PURE__ */ C(Ue, [["render", Re], ["__file", "loading.vue"]]), qe = {
  name: "View"
}, He = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Je = /* @__PURE__ */ f(
  "path",
  {
    fill: "currentColor",
    d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352zm0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448zm0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160z"
  },
  null,
  -1
  /* HOISTED */
), We = [
  Je
];
function Ye(e, t, n, o, s, a) {
  return h(), g("svg", He, We);
}
var Lt = /* @__PURE__ */ C(qe, [["render", Ye], ["__file", "view.vue"]]);
const K = "__epPropKey", U = (e) => e, Qe = (e) => T(e) && !!e[K], A = (e, t) => {
  if (!T(e) || Qe(e))
    return e;
  const { values: n, required: o, default: s, type: a, validator: c } = e, _ = {
    type: a,
    required: !!o,
    validator: n || c ? (u) => {
      let p = !1, y = [];
      if (n && (y = Array.from(n), S(e, "default") && y.push(s), p || (p = y.includes(u))), c && (p || (p = c(u))), !p && y.length > 0) {
        const P = [...new Set(y)].map((E) => JSON.stringify(E)).join(", ");
        W(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${P}], got value ${JSON.stringify(u)}.`);
      }
      return p;
    } : void 0,
    [K]: !0
  };
  return S(e, "default") && (_.default = s), _;
}, Xe = (e) => te(Object.entries(e).map(([t, n]) => [
  t,
  A(n, t)
])), Nt = U([
  String,
  Object,
  Function
]), Pt = {
  Close: Ve
}, Et = {
  validating: Ze,
  success: ye,
  error: Ne
}, Ge = (e, t) => {
  if (e.install = (n) => {
    for (const o of [e, ...Object.values(t ?? {})])
      n.component(o.name, o);
  }, t)
    for (const [n, o] of Object.entries(t))
      e[n] = o;
  return e;
}, Ot = (e) => (e.install = re, e), St = "update:modelValue", et = ["", "default", "small", "large"], tt = Symbol(), L = Symbol("formContextKey"), D = Symbol("formItemContextKey"), k = (e) => {
  const t = I();
  return w(() => {
    var n, o;
    return (o = ((n = t.proxy) == null ? void 0 : n.$props)[e]) != null ? o : void 0;
  });
}, x = $();
function N(e, t = void 0) {
  const n = I() ? m(tt, x) : x;
  return e ? w(() => {
    var o, s;
    return (s = (o = n.value) == null ? void 0 : o[e]) != null ? s : t;
  }) : n;
}
const xt = A({
  type: String,
  values: et,
  required: !1
}), Vt = (e, t = {}) => {
  const n = $(void 0), o = t.prop ? n : k("size"), s = t.global ? n : N("size"), a = t.form ? { size: void 0 } : m(L, void 0), c = t.formItem ? { size: void 0 } : m(D, void 0);
  return w(() => o.value || z(e) || (c == null ? void 0 : c.size) || (a == null ? void 0 : a.size) || s.value || "");
}, Bt = (e) => {
  const t = k("disabled"), n = m(L, void 0);
  return w(() => t.value || z(e) || (n == null ? void 0 : n.disabled) || !1);
}, R = "el", nt = "is-", v = (e, t, n, o, s) => {
  let a = `${e}-${t}`;
  return n && (a += `-${n}`), o && (a += `__${o}`), s && (a += `--${s}`), a;
}, st = (e) => {
  const t = N("namespace", R);
  return {
    namespace: t,
    b: (r = "") => v(t.value, e, r, "", ""),
    e: (r) => r ? v(t.value, e, "", r, "") : "",
    m: (r) => r ? v(t.value, e, "", "", r) : "",
    be: (r, l) => r && l ? v(t.value, e, r, l, "") : "",
    em: (r, l) => r && l ? v(t.value, e, "", r, l) : "",
    bm: (r, l) => r && l ? v(t.value, e, r, "", l) : "",
    bem: (r, l, i) => r && l && i ? v(t.value, e, r, l, i) : "",
    is: (r, ...l) => {
      const i = l.length >= 1 ? l[0] : !0;
      return r && i ? `${nt}${r}` : "";
    },
    cssVar: (r) => {
      const l = {};
      for (const i in r)
        r[i] && (l[`--${t.value}-${i}`] = r[i]);
      return l;
    },
    cssVarName: (r) => `--${t.value}-${r}`,
    cssVarBlock: (r) => {
      const l = {};
      for (const i in r)
        r[i] && (l[`--${t.value}-${e}-${i}`] = r[i]);
      return l;
    },
    cssVarBlockName: (r) => `--${t.value}-${e}-${r}`
  };
}, V = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, ot = Symbol("elIdInjection"), rt = () => I() ? m(ot, V) : V, at = (e) => {
  const t = rt(), n = N("namespace", R);
  return w(() => z(e) || `${n.value}-id-${t.prefix}-${t.current++}`);
}, Mt = () => {
  const e = m(L, void 0), t = m(D, void 0);
  return {
    form: e,
    formItem: t
  };
}, jt = (e, {
  formItemContext: t,
  disableIdGeneration: n,
  disableIdManagement: o
}) => {
  n || (n = $(!1)), o || (o = $(!1));
  const s = $();
  let a;
  const c = w(() => {
    var d;
    return !!(!e.label && t && t.inputIds && ((d = t.inputIds) == null ? void 0 : d.length) <= 1);
  });
  return B(() => {
    a = Y([Q(e, "id"), n], ([d, _]) => {
      const u = d ?? (_ ? void 0 : at().value);
      u !== s.value && (t != null && t.removeInputId && (s.value && t.removeInputId(s.value), !(o != null && o.value) && !_ && u && t.addInputId(u)), s.value = u);
    }, { immediate: !0 });
  }), X(() => {
    a && a(), t != null && t.removeInputId && s.value && t.removeInputId(s.value);
  }), {
    isLabeledByFormItem: c,
    inputId: s
  };
};
var lt = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, s] of t)
    n[o] = s;
  return n;
};
const ct = Xe({
  size: {
    type: U([Number, String])
  },
  color: {
    type: String
  }
}), it = M({
  name: "ElIcon",
  inheritAttrs: !1
}), ut = /* @__PURE__ */ M({
  ...it,
  props: ct,
  setup(e) {
    const t = e, n = st("icon"), o = w(() => {
      const { size: s, color: a } = t;
      return !s && !a ? {} : {
        fontSize: ue(s) ? void 0 : fe(s),
        "--color": a
      };
    });
    return (s, a) => (h(), g("i", G({
      class: z(n).b(),
      style: z(o)
    }, s.$attrs), [
      ee(s.$slots, "default")
    ], 16));
  }
});
var dt = /* @__PURE__ */ lt(ut, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/icon/src/icon.vue"]]);
const Tt = Ge(dt);
export {
  N as A,
  wt as B,
  $t as C,
  It as D,
  Tt as E,
  zt as F,
  Ct as G,
  Ze as H,
  Ot as I,
  Pt as J,
  pt as K,
  at as L,
  R as M,
  re as N,
  ht as O,
  St as U,
  Et as V,
  lt as _,
  mt as a,
  vt as b,
  ne as c,
  Xe as d,
  j as e,
  te as f,
  U as g,
  Nt as h,
  b as i,
  Mt as j,
  jt as k,
  Vt as l,
  Bt as m,
  st as n,
  bt as o,
  ft as p,
  yt as q,
  se as r,
  Ne as s,
  oe as t,
  xt as u,
  Lt as v,
  T as w,
  Ge as x,
  gt as y,
  fe as z
};
