import "phecda-vue";
import { getCurrentScope as pt, onScopeDispose as ft, unref as r, getCurrentInstance as W, onMounted as _e, nextTick as k, watch as H, ref as S, openBlock as v, createElementBlock as b, createElementVNode as I, warn as vt, computed as f, inject as P, toRef as De, onUnmounted as mt, defineComponent as ae, mergeProps as ne, renderSlot as K, useAttrs as _t, useSlots as ht, shallowRef as de, withDirectives as yt, createCommentVNode as g, Fragment as pe, normalizeClass as x, createBlock as C, withCtx as j, resolveDynamicComponent as ee, withModifiers as gt, createVNode as bt, toDisplayString as te, normalizeStyle as wt, vShow as xt } from "vue";
function Ue(e) {
  for (var t = -1, o = e == null ? 0 : e.length, n = {}; ++t < o; ) {
    var s = e[t];
    n[s[0]] = s[1];
  }
  return n;
}
function It(e) {
  return e == null;
}
var Ve;
const he = typeof window < "u", fe = (e) => typeof e == "number";
he && ((Ve = window == null ? void 0 : window.navigator) != null && Ve.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function St(e) {
  return typeof e == "function" ? e() : r(e);
}
function $t(e) {
  return e;
}
function Ct(e) {
  return pt() ? (ft(e), !0) : !1;
}
function Ot(e, t = !0) {
  W() ? _e(e) : t ? e() : k(e);
}
function zt(e) {
  var t;
  const o = St(e);
  return (t = o == null ? void 0 : o.$el) != null ? t : o;
}
const Et = he ? window : void 0;
function Pt(e, t = !1) {
  const o = S(), n = () => o.value = !!e();
  return n(), Ot(n, t), o;
}
const ke = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Le = "__vueuse_ssr_handlers__";
ke[Le] = ke[Le] || {};
var Te = Object.getOwnPropertySymbols, Nt = Object.prototype.hasOwnProperty, Vt = Object.prototype.propertyIsEnumerable, kt = (e, t) => {
  var o = {};
  for (var n in e)
    Nt.call(e, n) && t.indexOf(n) < 0 && (o[n] = e[n]);
  if (e != null && Te)
    for (var n of Te(e))
      t.indexOf(n) < 0 && Vt.call(e, n) && (o[n] = e[n]);
  return o;
};
function Lt(e, t, o = {}) {
  const n = o, { window: s = Et } = n, i = kt(n, ["window"]);
  let c;
  const h = Pt(() => s && "ResizeObserver" in s), d = () => {
    c && (c.disconnect(), c = void 0);
  }, m = H(() => zt(e), (p) => {
    d(), h.value && s && p && (c = new ResizeObserver(t), c.observe(p, i));
  }, { immediate: !0, flush: "post" }), y = () => {
    d(), m();
  };
  return Ct(y), {
    isSupported: h,
    stop: y
  };
}
var Be;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Be || (Be = {}));
var Tt = Object.defineProperty, Me = Object.getOwnPropertySymbols, Bt = Object.prototype.hasOwnProperty, Mt = Object.prototype.propertyIsEnumerable, Fe = (e, t, o) => t in e ? Tt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o, Ft = (e, t) => {
  for (var o in t || (t = {}))
    Bt.call(t, o) && Fe(e, o, t[o]);
  if (Me)
    for (var o of Me(t))
      Mt.call(t, o) && Fe(e, o, t[o]);
  return e;
};
const Rt = {
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
Ft({
  linear: $t
}, Rt);
const jt = () => {
}, At = Object.prototype.hasOwnProperty, Re = (e, t) => At.call(e, t), D = (e) => typeof e == "string", oe = (e) => e !== null && typeof e == "object", Kt = (e) => e === void 0, Ht = (e) => D(e) ? !Number.isNaN(Number(e)) : !1;
function Dt(e, t = "px") {
  if (!e)
    return "";
  if (fe(e) || Ht(e))
    return `${e}${t}`;
  if (D(e))
    return e;
}
/*! Element Plus Icons Vue v2.1.0 */
var Q = (e, t) => {
  let o = e.__vccOpts || e;
  for (let [n, s] of t)
    o[n] = s;
  return o;
}, Ut = {
  name: "CircleCheck"
}, Wt = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Qt = /* @__PURE__ */ I(
  "path",
  {
    fill: "currentColor",
    d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
  },
  null,
  -1
  /* HOISTED */
), Zt = /* @__PURE__ */ I(
  "path",
  {
    fill: "currentColor",
    d: "M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z"
  },
  null,
  -1
  /* HOISTED */
), Yt = [
  Qt,
  Zt
];
function qt(e, t, o, n, s, i) {
  return v(), b("svg", Wt, Yt);
}
var Jt = /* @__PURE__ */ Q(Ut, [["render", qt], ["__file", "circle-check.vue"]]), Xt = {
  name: "CircleClose"
}, Gt = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, en = /* @__PURE__ */ I(
  "path",
  {
    fill: "currentColor",
    d: "m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248L466.752 512z"
  },
  null,
  -1
  /* HOISTED */
), tn = /* @__PURE__ */ I(
  "path",
  {
    fill: "currentColor",
    d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
  },
  null,
  -1
  /* HOISTED */
), nn = [
  en,
  tn
];
function on(e, t, o, n, s, i) {
  return v(), b("svg", Gt, nn);
}
var We = /* @__PURE__ */ Q(Xt, [["render", on], ["__file", "circle-close.vue"]]), an = {
  name: "Hide"
}, sn = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, rn = /* @__PURE__ */ I(
  "path",
  {
    fill: "currentColor",
    d: "M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2L371.2 588.8ZM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z"
  },
  null,
  -1
  /* HOISTED */
), ln = /* @__PURE__ */ I(
  "path",
  {
    fill: "currentColor",
    d: "M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z"
  },
  null,
  -1
  /* HOISTED */
), un = [
  rn,
  ln
];
function cn(e, t, o, n, s, i) {
  return v(), b("svg", sn, un);
}
var dn = /* @__PURE__ */ Q(an, [["render", cn], ["__file", "hide.vue"]]), pn = {
  name: "Loading"
}, fn = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, vn = /* @__PURE__ */ I(
  "path",
  {
    fill: "currentColor",
    d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
  },
  null,
  -1
  /* HOISTED */
), mn = [
  vn
];
function _n(e, t, o, n, s, i) {
  return v(), b("svg", fn, mn);
}
var hn = /* @__PURE__ */ Q(pn, [["render", _n], ["__file", "loading.vue"]]), yn = {
  name: "View"
}, gn = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, bn = /* @__PURE__ */ I(
  "path",
  {
    fill: "currentColor",
    d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352zm0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448zm0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160z"
  },
  null,
  -1
  /* HOISTED */
), wn = [
  bn
];
function xn(e, t, o, n, s, i) {
  return v(), b("svg", gn, wn);
}
var In = /* @__PURE__ */ Q(yn, [["render", xn], ["__file", "view.vue"]]);
const Qe = "__epPropKey", U = (e) => e, Sn = (e) => oe(e) && !!e[Qe], Ze = (e, t) => {
  if (!oe(e) || Sn(e))
    return e;
  const { values: o, required: n, default: s, type: i, validator: c } = e, d = {
    type: i,
    required: !!n,
    validator: o || c ? (m) => {
      let y = !1, p = [];
      if (o && (p = Array.from(o), Re(e, "default") && p.push(s), y || (y = p.includes(m))), c && (y || (y = c(m))), !y && p.length > 0) {
        const L = [...new Set(p)].map((Z) => JSON.stringify(Z)).join(", ");
        vt(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${L}], got value ${JSON.stringify(m)}.`);
      }
      return y;
    } : void 0,
    [Qe]: !0
  };
  return Re(e, "default") && (d.default = s), d;
}, Ye = (e) => Ue(Object.entries(e).map(([t, o]) => [
  t,
  Ze(o, t)
])), je = U([
  String,
  Object,
  Function
]), $n = {
  validating: hn,
  success: Jt,
  error: We
}, qe = (e, t) => {
  if (e.install = (o) => {
    for (const n of [e, ...Object.values(t ?? {})])
      o.component(n.name, n);
  }, t)
    for (const [o, n] of Object.entries(t))
      e[o] = n;
  return e;
}, ve = "update:modelValue", Cn = ["", "default", "small", "large"], On = (e) => /([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi.test(e), zn = (e) => e, En = ["class", "style"], Pn = /^on[A-Z]/, Nn = (e = {}) => {
  const { excludeListeners: t = !1, excludeKeys: o } = e, n = f(() => ((o == null ? void 0 : o.value) || []).concat(En)), s = W();
  return s ? f(() => {
    var i;
    return Ue(Object.entries((i = s.proxy) == null ? void 0 : i.$attrs).filter(([c]) => !n.value.includes(c) && !(t && Pn.test(c))));
  }) : f(() => ({}));
}, Vn = Symbol(), ye = Symbol("formContextKey"), Je = Symbol("formItemContextKey"), Xe = (e) => {
  const t = W();
  return f(() => {
    var o, n;
    return (n = ((o = t.proxy) == null ? void 0 : o.$props)[e]) != null ? n : void 0;
  });
}, Ae = S();
function ge(e, t = void 0) {
  const o = W() ? P(Vn, Ae) : Ae;
  return e ? f(() => {
    var n, s;
    return (s = (n = o.value) == null ? void 0 : n[e]) != null ? s : t;
  }) : o;
}
const kn = Ze({
  type: String,
  values: Cn,
  required: !1
}), Ln = (e, t = {}) => {
  const o = S(void 0), n = t.prop ? o : Xe("size"), s = t.global ? o : ge("size"), i = t.form ? { size: void 0 } : P(ye, void 0), c = t.formItem ? { size: void 0 } : P(Je, void 0);
  return f(() => n.value || r(e) || (c == null ? void 0 : c.size) || (i == null ? void 0 : i.size) || s.value || "");
}, Tn = (e) => {
  const t = Xe("disabled"), o = P(ye, void 0);
  return f(() => t.value || r(e) || (o == null ? void 0 : o.disabled) || !1);
}, Ge = "el", Bn = "is-", E = (e, t, o, n, s) => {
  let i = `${e}-${t}`;
  return o && (i += `-${o}`), n && (i += `__${n}`), s && (i += `--${s}`), i;
}, me = (e) => {
  const t = ge("namespace", Ge);
  return {
    namespace: t,
    b: (u = "") => E(t.value, e, u, "", ""),
    e: (u) => u ? E(t.value, e, "", u, "") : "",
    m: (u) => u ? E(t.value, e, "", "", u) : "",
    be: (u, l) => u && l ? E(t.value, e, u, l, "") : "",
    em: (u, l) => u && l ? E(t.value, e, "", u, l) : "",
    bm: (u, l) => u && l ? E(t.value, e, u, "", l) : "",
    bem: (u, l, w) => u && l && w ? E(t.value, e, u, l, w) : "",
    is: (u, ...l) => {
      const w = l.length >= 1 ? l[0] : !0;
      return u && w ? `${Bn}${u}` : "";
    },
    cssVar: (u) => {
      const l = {};
      for (const w in u)
        u[w] && (l[`--${t.value}-${w}`] = u[w]);
      return l;
    },
    cssVarName: (u) => `--${t.value}-${u}`,
    cssVarBlock: (u) => {
      const l = {};
      for (const w in u)
        u[w] && (l[`--${t.value}-${e}-${w}`] = u[w]);
      return l;
    },
    cssVarBlockName: (u) => `--${t.value}-${e}-${u}`
  };
}, Ke = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, Mn = Symbol("elIdInjection"), Fn = () => W() ? P(Mn, Ke) : Ke, Rn = (e) => {
  const t = Fn(), o = ge("namespace", Ge);
  return f(() => r(e) || `${o.value}-id-${t.prefix}-${t.current++}`);
}, jn = () => {
  const e = P(ye, void 0), t = P(Je, void 0);
  return {
    form: e,
    formItem: t
  };
}, An = (e, {
  formItemContext: t,
  disableIdGeneration: o,
  disableIdManagement: n
}) => {
  o || (o = S(!1)), n || (n = S(!1));
  const s = S();
  let i;
  const c = f(() => {
    var h;
    return !!(!e.label && t && t.inputIds && ((h = t.inputIds) == null ? void 0 : h.length) <= 1);
  });
  return _e(() => {
    i = H([De(e, "id"), o], ([h, d]) => {
      const m = h ?? (d ? void 0 : Rn().value);
      m !== s.value && (t != null && t.removeInputId && (s.value && t.removeInputId(s.value), !(n != null && n.value) && !d && m && t.addInputId(m)), s.value = m);
    }, { immediate: !0 });
  }), mt(() => {
    i && i(), t != null && t.removeInputId && s.value && t.removeInputId(s.value);
  }), {
    isLabeledByFormItem: c,
    inputId: s
  };
};
function Kn(e) {
  const t = S();
  function o() {
    if (e.value == null)
      return;
    const { selectionStart: s, selectionEnd: i, value: c } = e.value;
    if (s == null || i == null)
      return;
    const h = c.slice(0, Math.max(0, s)), d = c.slice(Math.max(0, i));
    t.value = {
      selectionStart: s,
      selectionEnd: i,
      value: c,
      beforeTxt: h,
      afterTxt: d
    };
  }
  function n() {
    if (e.value == null || t.value == null)
      return;
    const { value: s } = e.value, { beforeTxt: i, afterTxt: c, selectionStart: h } = t.value;
    if (i == null || c == null || h == null)
      return;
    let d = s.length;
    if (s.endsWith(c))
      d = s.length - c.length;
    else if (s.startsWith(i))
      d = i.length;
    else {
      const m = i[h - 1], y = s.indexOf(m, h - 1);
      y !== -1 && (d = y + 1);
    }
    e.value.setSelectionRange(d, d);
  }
  return [o, n];
}
var et = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [n, s] of t)
    o[n] = s;
  return o;
};
const Hn = Ye({
  size: {
    type: U([Number, String])
  },
  color: {
    type: String
  }
}), Dn = ae({
  name: "ElIcon",
  inheritAttrs: !1
}), Un = /* @__PURE__ */ ae({
  ...Dn,
  props: Hn,
  setup(e) {
    const t = e, o = me("icon"), n = f(() => {
      const { size: s, color: i } = t;
      return !s && !i ? {} : {
        fontSize: Kt(s) ? void 0 : Dt(s),
        "--color": i
      };
    });
    return (s, i) => (v(), b("i", ne({
      class: r(o).b(),
      style: r(n)
    }, s.$attrs), [
      K(s.$slots, "default")
    ], 16));
  }
});
var Wn = /* @__PURE__ */ et(Un, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/icon/src/icon.vue"]]);
const A = qe(Wn);
let $;
const Qn = `
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`, Zn = [
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
function Yn(e) {
  const t = window.getComputedStyle(e), o = t.getPropertyValue("box-sizing"), n = Number.parseFloat(t.getPropertyValue("padding-bottom")) + Number.parseFloat(t.getPropertyValue("padding-top")), s = Number.parseFloat(t.getPropertyValue("border-bottom-width")) + Number.parseFloat(t.getPropertyValue("border-top-width"));
  return { contextStyle: Zn.map((c) => `${c}:${t.getPropertyValue(c)}`).join(";"), paddingSize: n, borderSize: s, boxSizing: o };
}
function He(e, t = 1, o) {
  var n;
  $ || ($ = document.createElement("textarea"), document.body.appendChild($));
  const { paddingSize: s, borderSize: i, boxSizing: c, contextStyle: h } = Yn(e);
  $.setAttribute("style", `${h};${Qn}`), $.value = e.value || e.placeholder || "";
  let d = $.scrollHeight;
  const m = {};
  c === "border-box" ? d = d + i : c === "content-box" && (d = d - s), $.value = "";
  const y = $.scrollHeight - s;
  if (fe(t)) {
    let p = y * t;
    c === "border-box" && (p = p + s + i), d = Math.max(p, d), m.minHeight = `${p}px`;
  }
  if (fe(o)) {
    let p = y * o;
    c === "border-box" && (p = p + s + i), d = Math.min(p, d);
  }
  return m.height = `${d}px`, (n = $.parentNode) == null || n.removeChild($), $ = void 0, m;
}
const qn = Ye({
  id: {
    type: String,
    default: void 0
  },
  size: kn,
  disabled: Boolean,
  modelValue: {
    type: U([
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
    type: U([Boolean, Object]),
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
    type: je
  },
  prefixIcon: {
    type: je
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
    type: U([Object, Array, String]),
    default: () => zn({})
  }
}), Jn = {
  [ve]: (e) => D(e),
  input: (e) => D(e),
  change: (e) => D(e),
  focus: (e) => e instanceof FocusEvent,
  blur: (e) => e instanceof FocusEvent,
  clear: () => !0,
  mouseleave: (e) => e instanceof MouseEvent,
  mouseenter: (e) => e instanceof MouseEvent,
  keydown: (e) => e instanceof Event,
  compositionstart: (e) => e instanceof CompositionEvent,
  compositionupdate: (e) => e instanceof CompositionEvent,
  compositionend: (e) => e instanceof CompositionEvent
}, Xn = ["role"], Gn = ["id", "type", "disabled", "formatter", "parser", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder", "form"], eo = ["id", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder", "form"], to = ae({
  name: "ElInput",
  inheritAttrs: !1
}), no = /* @__PURE__ */ ae({
  ...to,
  props: qn,
  emits: Jn,
  setup(e, { expose: t, emit: o }) {
    const n = e, s = _t(), i = ht(), c = f(() => {
      const a = {};
      return n.containerRole === "combobox" && (a["aria-haspopup"] = s["aria-haspopup"], a["aria-owns"] = s["aria-owns"], a["aria-expanded"] = s["aria-expanded"]), a;
    }), h = f(() => [
      n.type === "textarea" ? w.b() : l.b(),
      l.m(Z.value),
      l.is("disabled", u.value),
      l.is("exceed", ot.value),
      {
        [l.b("group")]: i.prepend || i.append,
        [l.bm("group", "append")]: i.append,
        [l.bm("group", "prepend")]: i.prepend,
        [l.m("prefix")]: i.prefix || n.prefixIcon,
        [l.m("suffix")]: i.suffix || n.suffixIcon || n.clearable || n.showPassword,
        [l.bm("suffix", "password-clear")]: J.value && le.value
      },
      s.class
    ]), d = f(() => [
      l.e("wrapper"),
      l.is("focus", T.value)
    ]), m = Nn({
      excludeKeys: f(() => Object.keys(c.value))
    }), { form: y, formItem: p } = jn(), { inputId: L } = An(n, {
      formItemContext: p
    }), Z = Ln(), u = Tn(), l = me("input"), w = me("textarea"), Y = de(), N = de(), T = S(!1), se = S(!1), B = S(!1), q = S(!1), be = S(), re = de(n.inputStyle), M = f(() => Y.value || N.value), we = f(() => {
      var a;
      return (a = y == null ? void 0 : y.statusIcon) != null ? a : !1;
    }), F = f(() => (p == null ? void 0 : p.validateState) || ""), xe = f(() => F.value && $n[F.value]), tt = f(() => q.value ? In : dn), nt = f(() => [
      s.style,
      n.inputStyle
    ]), Ie = f(() => [
      n.inputStyle,
      re.value,
      { resize: n.resize }
    ]), O = f(() => It(n.modelValue) ? "" : String(n.modelValue)), J = f(() => n.clearable && !u.value && !n.readonly && !!O.value && (T.value || se.value)), le = f(() => n.showPassword && !u.value && !n.readonly && !!O.value && (!!O.value || T.value)), V = f(() => n.showWordLimit && !!m.value.maxlength && (n.type === "text" || n.type === "textarea") && !u.value && !n.readonly && !n.showPassword), ie = f(() => Array.from(O.value).length), ot = f(() => !!V.value && ie.value > Number(m.value.maxlength)), at = f(() => !!i.suffix || !!n.suffixIcon || J.value || n.showPassword || V.value || !!F.value && we.value), [st, rt] = Kn(Y);
    Lt(N, (a) => {
      if (!V.value || n.resize !== "both")
        return;
      const _ = a[0], { width: z } = _.contentRect;
      be.value = {
        right: `calc(100% - ${z + 15 + 6}px)`
      };
    });
    const X = () => {
      const { type: a, autosize: _ } = n;
      if (!(!he || a !== "textarea"))
        if (_) {
          const z = oe(_) ? _.minRows : void 0, ce = oe(_) ? _.maxRows : void 0;
          re.value = {
            ...He(N.value, z, ce)
          };
        } else
          re.value = {
            minHeight: He(N.value).minHeight
          };
    }, R = () => {
      const a = M.value;
      !a || a.value === O.value || (a.value = O.value);
    }, ue = async (a) => {
      st();
      let { value: _ } = a.target;
      if (n.formatter && (_ = n.parser ? n.parser(_) : _, _ = n.formatter(_)), !B.value) {
        if (_ === O.value) {
          R();
          return;
        }
        o(ve, _), o("input", _), await k(), R(), rt();
      }
    }, Se = (a) => {
      o("change", a.target.value);
    }, $e = (a) => {
      o("compositionstart", a), B.value = !0;
    }, Ce = (a) => {
      var _;
      o("compositionupdate", a);
      const z = (_ = a.target) == null ? void 0 : _.value, ce = z[z.length - 1] || "";
      B.value = !On(ce);
    }, Oe = (a) => {
      o("compositionend", a), B.value && (B.value = !1, ue(a));
    }, lt = () => {
      q.value = !q.value, G();
    }, G = async () => {
      var a;
      await k(), (a = M.value) == null || a.focus();
    }, it = () => {
      var a;
      return (a = M.value) == null ? void 0 : a.blur();
    }, ze = (a) => {
      T.value = !0, o("focus", a);
    }, Ee = (a) => {
      var _;
      T.value = !1, o("blur", a), n.validateEvent && ((_ = p == null ? void 0 : p.validate) == null || _.call(p, "blur").catch((z) => void 0));
    }, ut = (a) => {
      se.value = !1, o("mouseleave", a);
    }, ct = (a) => {
      se.value = !0, o("mouseenter", a);
    }, Pe = (a) => {
      o("keydown", a);
    }, dt = () => {
      var a;
      (a = M.value) == null || a.select();
    }, Ne = () => {
      o(ve, ""), o("change", ""), o("clear"), o("input", "");
    };
    return H(() => n.modelValue, () => {
      var a;
      k(() => X()), n.validateEvent && ((a = p == null ? void 0 : p.validate) == null || a.call(p, "change").catch((_) => void 0));
    }), H(O, () => R()), H(() => n.type, async () => {
      await k(), R(), X();
    }), _e(() => {
      !n.formatter && n.parser, R(), k(X);
    }), t({
      input: Y,
      textarea: N,
      ref: M,
      textareaStyle: Ie,
      autosize: De(n, "autosize"),
      focus: G,
      blur: it,
      select: dt,
      clear: Ne,
      resizeTextarea: X
    }), (a, _) => yt((v(), b("div", ne(r(c), {
      class: r(h),
      style: r(nt),
      role: a.containerRole,
      onMouseenter: ct,
      onMouseleave: ut
    }), [
      g(" input "),
      a.type !== "textarea" ? (v(), b(pe, { key: 0 }, [
        g(" prepend slot "),
        a.$slots.prepend ? (v(), b("div", {
          key: 0,
          class: x(r(l).be("group", "prepend"))
        }, [
          K(a.$slots, "prepend")
        ], 2)) : g("v-if", !0),
        I("div", {
          class: x(r(d))
        }, [
          g(" prefix slot "),
          a.$slots.prefix || a.prefixIcon ? (v(), b("span", {
            key: 0,
            class: x(r(l).e("prefix"))
          }, [
            I("span", {
              class: x(r(l).e("prefix-inner")),
              onClick: G
            }, [
              K(a.$slots, "prefix"),
              a.prefixIcon ? (v(), C(r(A), {
                key: 0,
                class: x(r(l).e("icon"))
              }, {
                default: j(() => [
                  (v(), C(ee(a.prefixIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : g("v-if", !0)
            ], 2)
          ], 2)) : g("v-if", !0),
          I("input", ne({
            id: r(L),
            ref_key: "input",
            ref: Y,
            class: r(l).e("inner")
          }, r(m), {
            type: a.showPassword ? q.value ? "text" : "password" : a.type,
            disabled: r(u),
            formatter: a.formatter,
            parser: a.parser,
            readonly: a.readonly,
            autocomplete: a.autocomplete,
            tabindex: a.tabindex,
            "aria-label": a.label,
            placeholder: a.placeholder,
            style: a.inputStyle,
            form: n.form,
            onCompositionstart: $e,
            onCompositionupdate: Ce,
            onCompositionend: Oe,
            onInput: ue,
            onFocus: ze,
            onBlur: Ee,
            onChange: Se,
            onKeydown: Pe
          }), null, 16, Gn),
          g(" suffix slot "),
          r(at) ? (v(), b("span", {
            key: 1,
            class: x(r(l).e("suffix"))
          }, [
            I("span", {
              class: x(r(l).e("suffix-inner")),
              onClick: G
            }, [
              !r(J) || !r(le) || !r(V) ? (v(), b(pe, { key: 0 }, [
                K(a.$slots, "suffix"),
                a.suffixIcon ? (v(), C(r(A), {
                  key: 0,
                  class: x(r(l).e("icon"))
                }, {
                  default: j(() => [
                    (v(), C(ee(a.suffixIcon)))
                  ]),
                  _: 1
                }, 8, ["class"])) : g("v-if", !0)
              ], 64)) : g("v-if", !0),
              r(J) ? (v(), C(r(A), {
                key: 1,
                class: x([r(l).e("icon"), r(l).e("clear")]),
                onMousedown: gt(r(jt), ["prevent"]),
                onClick: Ne
              }, {
                default: j(() => [
                  bt(r(We))
                ]),
                _: 1
              }, 8, ["class", "onMousedown"])) : g("v-if", !0),
              r(le) ? (v(), C(r(A), {
                key: 2,
                class: x([r(l).e("icon"), r(l).e("password")]),
                onClick: lt
              }, {
                default: j(() => [
                  (v(), C(ee(r(tt))))
                ]),
                _: 1
              }, 8, ["class"])) : g("v-if", !0),
              r(V) ? (v(), b("span", {
                key: 3,
                class: x(r(l).e("count"))
              }, [
                I("span", {
                  class: x(r(l).e("count-inner"))
                }, te(r(ie)) + " / " + te(r(m).maxlength), 3)
              ], 2)) : g("v-if", !0),
              r(F) && r(xe) && r(we) ? (v(), C(r(A), {
                key: 4,
                class: x([
                  r(l).e("icon"),
                  r(l).e("validateIcon"),
                  r(l).is("loading", r(F) === "validating")
                ])
              }, {
                default: j(() => [
                  (v(), C(ee(r(xe))))
                ]),
                _: 1
              }, 8, ["class"])) : g("v-if", !0)
            ], 2)
          ], 2)) : g("v-if", !0)
        ], 2),
        g(" append slot "),
        a.$slots.append ? (v(), b("div", {
          key: 1,
          class: x(r(l).be("group", "append"))
        }, [
          K(a.$slots, "append")
        ], 2)) : g("v-if", !0)
      ], 64)) : (v(), b(pe, { key: 1 }, [
        g(" textarea "),
        I("textarea", ne({
          id: r(L),
          ref_key: "textarea",
          ref: N,
          class: r(w).e("inner")
        }, r(m), {
          tabindex: a.tabindex,
          disabled: r(u),
          readonly: a.readonly,
          autocomplete: a.autocomplete,
          style: r(Ie),
          "aria-label": a.label,
          placeholder: a.placeholder,
          form: n.form,
          onCompositionstart: $e,
          onCompositionupdate: Ce,
          onCompositionend: Oe,
          onInput: ue,
          onFocus: ze,
          onBlur: Ee,
          onChange: Se,
          onKeydown: Pe
        }), null, 16, eo),
        r(V) ? (v(), b("span", {
          key: 0,
          style: wt(be.value),
          class: x(r(l).e("count"))
        }, te(r(ie)) + " / " + te(r(m).maxlength), 7)) : g("v-if", !0)
      ], 64))
    ], 16, Xn)), [
      [xt, a.type !== "hidden"]
    ]);
  }
});
var oo = /* @__PURE__ */ et(no, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/input/src/input.vue"]]);
const ao = qe(oo);
const lo = {
  alioth: "view",
  data: {
    key: "Input",
    component: ao
  }
};
export {
  lo as view_input
};
