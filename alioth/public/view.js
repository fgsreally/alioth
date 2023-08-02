import { i as jn, b as zn, a as Hn, g as Wn, c as Se, d as je, e as Yn, N as rt, f as mn, t as vn, u as te, h as Kt, j as Xt, k as Un, l as Xn, m as gn, r as ot, _ as ae, n as De, o as yn, p as $e, U as he, q as ge, s as ye, C as qt, v as ze, w as vt, x as bn, y as gt, z as Nn, A as Gn, B as Zn, E as Jn, D as yt, F as $t, G as Qn, H as Le, I as Cn, J as er, K as He, L as bt, M as kn, O as tr, P as nr, Q as Bt, R as rr, S as At, T as or, V as ar, W as Gt, X as Zt, Y as sr, Z as wn, $ as Rt, a0 as ht, a1 as ir, a2 as lr, a3 as dr, a4 as ue, a5 as at, a6 as Qe, a7 as ur, a8 as cr, a9 as fr, aa as hr, ab as pr, ac as mr, ad as vr, ae as gr, af as Ce, ag as yr, ah as br, ai as Nr, aj as Xe, ak as Cr, al as kr, am as wr, an as Er } from "./Checkbox.vue_vue_type_script_setup_true_lang.js";
import { useV as En, createLayer as _r } from "phecda-vue";
import { onMounted as pe, watchEffect as _n, onBeforeUnmount as jt, isRef as Sn, watch as H, onScopeDispose as Sr, defineComponent as Y, openBlock as M, createBlock as G, Transition as $n, mergeProps as An, unref as d, toHandlers as $r, withCtx as q, renderSlot as oe, getCurrentInstance as Ve, shallowRef as pt, ref as I, createElementBlock as W, normalizeClass as D, createElementVNode as B, normalizeStyle as ie, computed as V, inject as le, Fragment as Ge, renderList as Nt, reactive as Ze, nextTick as me, provide as ve, withDirectives as be, createVNode as x, createCommentVNode as re, withKeys as Ie, createTextVNode as mt, toDisplayString as Ae, vShow as We, h as Dt, resolveDynamicComponent as zt, useSlots as Dn, Teleport as Ar, createSlots as Dr, toRefs as Tn, onUpdated as Ht, TransitionGroup as Tr, withModifiers as ce, resolveComponent as we, toRef as Jt } from "vue";
function Tt() {
  if (!arguments.length)
    return [];
  var t = arguments[0];
  return jn(t) ? t : [t];
}
var Mr = 4;
function Qt(t) {
  return zn(t, Mr);
}
function Fr(t, e, r) {
  return t == null ? t : Hn(t, e, r);
}
const Wt = (t) => {
  let e, r;
  return t.type === "touchend" ? (r = t.changedTouches[0].clientY, e = t.changedTouches[0].clientX) : t.type.startsWith("touch") ? (r = t.touches[0].clientY, e = t.touches[0].clientX) : (r = t.clientY, e = t.clientX), {
    clientX: e,
    clientY: r
  };
}, wt = (t, e, r) => ({
  get value() {
    return Wn(t, e, r);
  },
  set value(n) {
    Fr(t, e, n);
  }
}), Ir = (...t) => (e) => {
  t.forEach((r) => {
    Se(r) ? r(e) : r.value = e;
  });
};
var st = /* @__PURE__ */ ((t) => (t[t.TEXT = 1] = "TEXT", t[t.CLASS = 2] = "CLASS", t[t.STYLE = 4] = "STYLE", t[t.PROPS = 8] = "PROPS", t[t.FULL_PROPS = 16] = "FULL_PROPS", t[t.HYDRATE_EVENTS = 32] = "HYDRATE_EVENTS", t[t.STABLE_FRAGMENT = 64] = "STABLE_FRAGMENT", t[t.KEYED_FRAGMENT = 128] = "KEYED_FRAGMENT", t[t.UNKEYED_FRAGMENT = 256] = "UNKEYED_FRAGMENT", t[t.NEED_PATCH = 512] = "NEED_PATCH", t[t.DYNAMIC_SLOTS = 1024] = "DYNAMIC_SLOTS", t[t.HOISTED = -1] = "HOISTED", t[t.BAIL = -2] = "BAIL", t))(st || {});
const Mn = Symbol("dialogInjectionKey"), xr = (t, e, r) => {
  let n = {
    offsetX: 0,
    offsetY: 0
  };
  const o = (i) => {
    const l = i.clientX, m = i.clientY, { offsetX: f, offsetY: c } = n, u = t.value.getBoundingClientRect(), g = u.left, v = u.top, h = u.width, N = u.height, b = document.documentElement.clientWidth, w = document.documentElement.clientHeight, p = -g + f, $ = -v + c, S = b - g - h + f, F = w - v - N + c, j = (_) => {
      const A = Math.min(Math.max(f + _.clientX - l, p), S), O = Math.min(Math.max(c + _.clientY - m, $), F);
      n = {
        offsetX: A,
        offsetY: O
      }, t.value.style.transform = `translate(${je(A)}, ${je(O)})`;
    }, P = () => {
      document.removeEventListener("mousemove", j), document.removeEventListener("mouseup", P);
    };
    document.addEventListener("mousemove", j), document.addEventListener("mouseup", P);
  }, a = () => {
    e.value && t.value && e.value.addEventListener("mousedown", o);
  }, s = () => {
    e.value && t.value && e.value.removeEventListener("mousedown", o);
  };
  pe(() => {
    _n(() => {
      r.value ? a() : s();
    });
  }), jt(() => {
    s();
  });
};
let Or;
function Lr(t, e = Or) {
  e && e.active && e.effects.push(t);
}
const Vr = (t) => {
  const e = new Set(t);
  return e.w = 0, e.n = 0, e;
}, Fn = (t) => (t.w & Ne) > 0, In = (t) => (t.n & Ne) > 0, Pr = ({ deps: t }) => {
  if (t.length)
    for (let e = 0; e < t.length; e++)
      t[e].w |= Ne;
}, Kr = (t) => {
  const { deps: e } = t;
  if (e.length) {
    let r = 0;
    for (let n = 0; n < e.length; n++) {
      const o = e[n];
      Fn(o) && !In(o) ? o.delete(t) : e[r++] = o, o.w &= ~Ne, o.n &= ~Ne;
    }
    e.length = r;
  }
};
let Ke = 0, Ne = 1;
const Mt = 30;
let fe;
class qr {
  constructor(e, r = null, n) {
    this.fn = e, this.scheduler = r, this.active = !0, this.deps = [], this.parent = void 0, Lr(this, n);
  }
  run() {
    if (!this.active)
      return this.fn();
    let e = fe, r = it;
    for (; e; ) {
      if (e === this)
        return;
      e = e.parent;
    }
    try {
      return this.parent = fe, fe = this, it = !0, Ne = 1 << ++Ke, Ke <= Mt ? Pr(this) : en(this), this.fn();
    } finally {
      Ke <= Mt && Kr(this), Ne = 1 << --Ke, fe = this.parent, it = r, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    fe === this ? this.deferStop = !0 : this.active && (en(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function en(t) {
  const { deps: e } = t;
  if (e.length) {
    for (let r = 0; r < e.length; r++)
      e[r].delete(t);
    e.length = 0;
  }
}
let it = !0;
function Br(t, e) {
  let r = !1;
  Ke <= Mt ? In(t) || (t.n |= Ne, r = !Fn(t)) : r = !t.has(fe), r && (t.add(fe), fe.deps.push(t));
}
function Rr(t, e) {
  const r = mn(t) ? t : [...t];
  for (const n of r)
    n.computed && tn(n);
  for (const n of r)
    n.computed || tn(n);
}
function tn(t, e) {
  (t !== fe || t.allowRecurse) && (t.scheduler ? t.scheduler() : t.run());
}
new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((t) => t !== "arguments" && t !== "caller").map((t) => Symbol[t]).filter(Yn)
);
function Ct(t) {
  const e = t && t.__v_raw;
  return e ? Ct(e) : t;
}
function jr(t) {
  it && fe && (t = Ct(t), Br(t.dep || (t.dep = Vr())));
}
function zr(t, e) {
  t = Ct(t);
  const r = t.dep;
  r && Rr(r);
}
class Hr {
  constructor(e, r, n, o) {
    this._setter = r, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this._dirty = !0, this.effect = new qr(e, () => {
      this._dirty || (this._dirty = !0, zr(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !o, this.__v_isReadonly = n;
  }
  get value() {
    const e = Ct(this);
    return jr(e), (e._dirty || !e._cacheable) && (e._dirty = !1, e._value = e.effect.run()), e._value;
  }
  set value(e) {
    this._setter(e);
  }
}
function Wr(t, e, r = !1) {
  let n, o;
  const a = Se(t);
  return a ? (n = t, o = rt) : (n = t.get, o = t.set), new Hr(n, o, a || !o, r);
}
const Yr = (t) => {
  Sn(t) || vn("[useLockscreen]", "You need to pass a ref param to this function");
  const e = te("popup"), r = Wr(() => e.bm("parent", "hidden"));
  if (!Kt || Xt(document.body, r.value))
    return;
  let n = 0, o = !1, a = "0";
  const s = () => {
    setTimeout(() => {
      ot(document.body, r.value), o && (document.body.style.width = a);
    }, 200);
  };
  H(t, (i) => {
    if (!i) {
      s();
      return;
    }
    o = !Xt(document.body, r.value), o && (a = document.body.style.width), n = Un(e.namespace.value);
    const l = document.documentElement.clientHeight < document.body.scrollHeight, m = Xn(document.body, "overflowY");
    n > 0 && (l || m === "scroll") && o && (document.body.style.width = `calc(100% - ${n}px)`), gn(document.body, r.value);
  }), Sr(() => s());
}, xn = (t) => {
  if (!t)
    return { onClick: rt, onMousedown: rt, onMouseup: rt };
  let e = !1, r = !1;
  return { onClick: (s) => {
    e && r && t(s), e = r = !1;
  }, onMousedown: (s) => {
    e = s.target === s.currentTarget;
  }, onMouseup: (s) => {
    r = s.target === s.currentTarget;
  } };
}, Ur = 100, Xr = 600, nn = {
  beforeMount(t, e) {
    const r = e.value, { interval: n = Ur, delay: o = Xr } = Se(r) ? {} : r;
    let a, s;
    const i = () => Se(r) ? r() : r.handler(), l = () => {
      s && (clearTimeout(s), s = void 0), a && (clearInterval(a), a = void 0);
    };
    t.addEventListener("mousedown", (m) => {
      m.button === 0 && (l(), i(), document.addEventListener("mouseup", () => l(), {
        once: !0
      }), s = setTimeout(() => {
        a = setInterval(() => {
          i();
        }, n);
      }, o));
    });
  }
}, Gr = Y({
  name: "ElCollapseTransition"
}), Zr = /* @__PURE__ */ Y({
  ...Gr,
  setup(t) {
    const e = te("collapse-transition"), r = {
      beforeEnter(n) {
        n.dataset || (n.dataset = {}), n.dataset.oldPaddingTop = n.style.paddingTop, n.dataset.oldPaddingBottom = n.style.paddingBottom, n.style.maxHeight = 0, n.style.paddingTop = 0, n.style.paddingBottom = 0;
      },
      enter(n) {
        n.dataset.oldOverflow = n.style.overflow, n.scrollHeight !== 0 ? (n.style.maxHeight = `${n.scrollHeight}px`, n.style.paddingTop = n.dataset.oldPaddingTop, n.style.paddingBottom = n.dataset.oldPaddingBottom) : (n.style.maxHeight = 0, n.style.paddingTop = n.dataset.oldPaddingTop, n.style.paddingBottom = n.dataset.oldPaddingBottom), n.style.overflow = "hidden";
      },
      afterEnter(n) {
        n.style.maxHeight = "", n.style.overflow = n.dataset.oldOverflow;
      },
      beforeLeave(n) {
        n.dataset || (n.dataset = {}), n.dataset.oldPaddingTop = n.style.paddingTop, n.dataset.oldPaddingBottom = n.style.paddingBottom, n.dataset.oldOverflow = n.style.overflow, n.style.maxHeight = `${n.scrollHeight}px`, n.style.overflow = "hidden";
      },
      leave(n) {
        n.scrollHeight !== 0 && (n.style.maxHeight = 0, n.style.paddingTop = 0, n.style.paddingBottom = 0);
      },
      afterLeave(n) {
        n.style.maxHeight = "", n.style.overflow = n.dataset.oldOverflow, n.style.paddingTop = n.dataset.oldPaddingTop, n.style.paddingBottom = n.dataset.oldPaddingBottom;
      }
    };
    return (n, o) => (M(), G($n, An({
      name: d(e).b()
    }, $r(r)), {
      default: q(() => [
        oe(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["name"]));
  }
});
var lt = /* @__PURE__ */ ae(Zr, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/collapse-transition/src/collapse-transition.vue"]]);
lt.install = (t) => {
  t.component(lt.name, lt);
};
const Jr = lt;
let Et = !1;
function Ye(t, e) {
  if (!Kt)
    return;
  const r = function(a) {
    var s;
    (s = e.drag) == null || s.call(e, a);
  }, n = function(a) {
    var s;
    document.removeEventListener("mousemove", r), document.removeEventListener("mouseup", n), document.removeEventListener("touchmove", r), document.removeEventListener("touchend", n), document.onselectstart = null, document.ondragstart = null, Et = !1, (s = e.end) == null || s.call(e, a);
  }, o = function(a) {
    var s;
    Et || (a.preventDefault(), document.onselectstart = () => !1, document.ondragstart = () => !1, document.addEventListener("mousemove", r), document.addEventListener("mouseup", n), document.addEventListener("touchmove", r), document.addEventListener("touchend", n), Et = !0, (s = e.start) == null || s.call(e, a));
  };
  t.addEventListener("mousedown", o), t.addEventListener("touchstart", o);
}
const Qr = Y({
  name: "ElColorAlphaSlider",
  props: {
    color: {
      type: Object,
      required: !0
    },
    vertical: {
      type: Boolean,
      default: !1
    }
  },
  setup(t) {
    const e = te("color-alpha-slider"), r = Ve(), n = pt(), o = pt(), a = I(0), s = I(0), i = I();
    H(() => t.color.get("alpha"), () => {
      g();
    }), H(() => t.color.value, () => {
      g();
    });
    function l() {
      if (!n.value || t.vertical)
        return 0;
      const v = r.vnode.el, h = t.color.get("alpha");
      return v ? Math.round(h * (v.offsetWidth - n.value.offsetWidth / 2) / 100) : 0;
    }
    function m() {
      if (!n.value)
        return 0;
      const v = r.vnode.el;
      if (!t.vertical)
        return 0;
      const h = t.color.get("alpha");
      return v ? Math.round(h * (v.offsetHeight - n.value.offsetHeight / 2) / 100) : 0;
    }
    function f() {
      if (t.color && t.color.value) {
        const { r: v, g: h, b: N } = t.color.toRgb();
        return `linear-gradient(to right, rgba(${v}, ${h}, ${N}, 0) 0%, rgba(${v}, ${h}, ${N}, 1) 100%)`;
      }
      return "";
    }
    function c(v) {
      v.target !== n.value && u(v);
    }
    function u(v) {
      if (!o.value || !n.value)
        return;
      const N = r.vnode.el.getBoundingClientRect(), { clientX: b, clientY: w } = Wt(v);
      if (t.vertical) {
        let p = w - N.top;
        p = Math.max(n.value.offsetHeight / 2, p), p = Math.min(p, N.height - n.value.offsetHeight / 2), t.color.set("alpha", Math.round((p - n.value.offsetHeight / 2) / (N.height - n.value.offsetHeight) * 100));
      } else {
        let p = b - N.left;
        p = Math.max(n.value.offsetWidth / 2, p), p = Math.min(p, N.width - n.value.offsetWidth / 2), t.color.set("alpha", Math.round((p - n.value.offsetWidth / 2) / (N.width - n.value.offsetWidth) * 100));
      }
    }
    function g() {
      a.value = l(), s.value = m(), i.value = f();
    }
    return pe(() => {
      if (!o.value || !n.value)
        return;
      const v = {
        drag: (h) => {
          u(h);
        },
        end: (h) => {
          u(h);
        }
      };
      Ye(o.value, v), Ye(n.value, v), g();
    }), {
      thumb: n,
      bar: o,
      thumbLeft: a,
      thumbTop: s,
      background: i,
      handleClick: c,
      update: g,
      ns: e
    };
  }
});
function eo(t, e, r, n, o, a) {
  return M(), W("div", {
    class: D([t.ns.b(), t.ns.is("vertical", t.vertical)])
  }, [
    B("div", {
      ref: "bar",
      class: D(t.ns.e("bar")),
      style: ie({
        background: t.background
      }),
      onClick: e[0] || (e[0] = (...s) => t.handleClick && t.handleClick(...s))
    }, null, 6),
    B("div", {
      ref: "thumb",
      class: D(t.ns.e("thumb")),
      style: ie({
        left: t.thumbLeft + "px",
        top: t.thumbTop + "px"
      })
    }, null, 6)
  ], 2);
}
var to = /* @__PURE__ */ ae(Qr, [["render", eo], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/color-picker/src/components/alpha-slider.vue"]]);
const no = Y({
  name: "ElColorHueSlider",
  props: {
    color: {
      type: Object,
      required: !0
    },
    vertical: Boolean
  },
  setup(t) {
    const e = te("color-hue-slider"), r = Ve(), n = I(), o = I(), a = I(0), s = I(0), i = V(() => t.color.get("hue"));
    H(() => i.value, () => {
      u();
    });
    function l(g) {
      g.target !== n.value && m(g);
    }
    function m(g) {
      if (!o.value || !n.value)
        return;
      const h = r.vnode.el.getBoundingClientRect(), { clientX: N, clientY: b } = Wt(g);
      let w;
      if (t.vertical) {
        let p = b - h.top;
        p = Math.min(p, h.height - n.value.offsetHeight / 2), p = Math.max(n.value.offsetHeight / 2, p), w = Math.round((p - n.value.offsetHeight / 2) / (h.height - n.value.offsetHeight) * 360);
      } else {
        let p = N - h.left;
        p = Math.min(p, h.width - n.value.offsetWidth / 2), p = Math.max(n.value.offsetWidth / 2, p), w = Math.round((p - n.value.offsetWidth / 2) / (h.width - n.value.offsetWidth) * 360);
      }
      t.color.set("hue", w);
    }
    function f() {
      if (!n.value)
        return 0;
      const g = r.vnode.el;
      if (t.vertical)
        return 0;
      const v = t.color.get("hue");
      return g ? Math.round(v * (g.offsetWidth - n.value.offsetWidth / 2) / 360) : 0;
    }
    function c() {
      if (!n.value)
        return 0;
      const g = r.vnode.el;
      if (!t.vertical)
        return 0;
      const v = t.color.get("hue");
      return g ? Math.round(v * (g.offsetHeight - n.value.offsetHeight / 2) / 360) : 0;
    }
    function u() {
      a.value = f(), s.value = c();
    }
    return pe(() => {
      if (!o.value || !n.value)
        return;
      const g = {
        drag: (v) => {
          m(v);
        },
        end: (v) => {
          m(v);
        }
      };
      Ye(o.value, g), Ye(n.value, g), u();
    }), {
      bar: o,
      thumb: n,
      thumbLeft: a,
      thumbTop: s,
      hueValue: i,
      handleClick: l,
      update: u,
      ns: e
    };
  }
});
function ro(t, e, r, n, o, a) {
  return M(), W("div", {
    class: D([t.ns.b(), t.ns.is("vertical", t.vertical)])
  }, [
    B("div", {
      ref: "bar",
      class: D(t.ns.e("bar")),
      onClick: e[0] || (e[0] = (...s) => t.handleClick && t.handleClick(...s))
    }, null, 2),
    B("div", {
      ref: "thumb",
      class: D(t.ns.e("thumb")),
      style: ie({
        left: t.thumbLeft + "px",
        top: t.thumbTop + "px"
      })
    }, null, 6)
  ], 2);
}
var oo = /* @__PURE__ */ ae(no, [["render", ro], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/color-picker/src/components/hue-slider.vue"]]);
const ao = De({
  modelValue: String,
  id: String,
  showAlpha: Boolean,
  colorFormat: String,
  disabled: Boolean,
  size: yn,
  popperClass: {
    type: String,
    default: ""
  },
  label: {
    type: String,
    default: void 0
  },
  tabindex: {
    type: [String, Number],
    default: 0
  },
  predefine: {
    type: $e(Array)
  },
  validateEvent: {
    type: Boolean,
    default: !0
  }
}), so = {
  [he]: (t) => ge(t) || ye(t),
  [qt]: (t) => ge(t) || ye(t),
  activeChange: (t) => ge(t) || ye(t)
}, On = Symbol("colorPickerContextKey"), rn = function(t, e, r) {
  return [
    t,
    e * r / ((t = (2 - e) * r) < 1 ? t : 2 - t) || 0,
    t / 2
  ];
}, io = function(t) {
  return typeof t == "string" && t.includes(".") && Number.parseFloat(t) === 1;
}, lo = function(t) {
  return typeof t == "string" && t.includes("%");
}, xe = function(t, e) {
  io(t) && (t = "100%");
  const r = lo(t);
  return t = Math.min(e, Math.max(0, Number.parseFloat(`${t}`))), r && (t = Number.parseInt(`${t * e}`, 10) / 100), Math.abs(t - e) < 1e-6 ? 1 : t % e / Number.parseFloat(e);
}, on = {
  10: "A",
  11: "B",
  12: "C",
  13: "D",
  14: "E",
  15: "F"
}, dt = (t) => {
  t = Math.min(Math.round(t), 255);
  const e = Math.floor(t / 16), r = t % 16;
  return `${on[e] || e}${on[r] || r}`;
}, an = function({ r: t, g: e, b: r }) {
  return Number.isNaN(+t) || Number.isNaN(+e) || Number.isNaN(+r) ? "" : `#${dt(t)}${dt(e)}${dt(r)}`;
}, _t = {
  A: 10,
  B: 11,
  C: 12,
  D: 13,
  E: 14,
  F: 15
}, ke = function(t) {
  return t.length === 2 ? (_t[t[0].toUpperCase()] || +t[0]) * 16 + (_t[t[1].toUpperCase()] || +t[1]) : _t[t[1].toUpperCase()] || +t[1];
}, uo = function(t, e, r) {
  e = e / 100, r = r / 100;
  let n = e;
  const o = Math.max(r, 0.01);
  r *= 2, e *= r <= 1 ? r : 2 - r, n *= o <= 1 ? o : 2 - o;
  const a = (r + e) / 2, s = r === 0 ? 2 * n / (o + n) : 2 * e / (r + e);
  return {
    h: t,
    s: s * 100,
    v: a * 100
  };
}, sn = (t, e, r) => {
  t = xe(t, 255), e = xe(e, 255), r = xe(r, 255);
  const n = Math.max(t, e, r), o = Math.min(t, e, r);
  let a;
  const s = n, i = n - o, l = n === 0 ? 0 : i / n;
  if (n === o)
    a = 0;
  else {
    switch (n) {
      case t: {
        a = (e - r) / i + (e < r ? 6 : 0);
        break;
      }
      case e: {
        a = (r - t) / i + 2;
        break;
      }
      case r: {
        a = (t - e) / i + 4;
        break;
      }
    }
    a /= 6;
  }
  return { h: a * 360, s: l * 100, v: s * 100 };
}, Pe = function(t, e, r) {
  t = xe(t, 360) * 6, e = xe(e, 100), r = xe(r, 100);
  const n = Math.floor(t), o = t - n, a = r * (1 - e), s = r * (1 - o * e), i = r * (1 - (1 - o) * e), l = n % 6, m = [r, s, a, a, i, r][l], f = [i, r, r, s, a, a][l], c = [a, a, i, r, r, s][l];
  return {
    r: Math.round(m * 255),
    g: Math.round(f * 255),
    b: Math.round(c * 255)
  };
};
class Be {
  constructor(e = {}) {
    this._hue = 0, this._saturation = 100, this._value = 100, this._alpha = 100, this.enableAlpha = !1, this.format = "hex", this.value = "";
    for (const r in e)
      ze(e, r) && (this[r] = e[r]);
    e.value ? this.fromString(e.value) : this.doOnChange();
  }
  set(e, r) {
    if (arguments.length === 1 && typeof e == "object") {
      for (const n in e)
        ze(e, n) && this.set(n, e[n]);
      return;
    }
    this[`_${e}`] = r, this.doOnChange();
  }
  get(e) {
    return e === "alpha" ? Math.floor(this[`_${e}`]) : this[`_${e}`];
  }
  toRgb() {
    return Pe(this._hue, this._saturation, this._value);
  }
  fromString(e) {
    if (!e) {
      this._hue = 0, this._saturation = 100, this._value = 100, this.doOnChange();
      return;
    }
    const r = (n, o, a) => {
      this._hue = Math.max(0, Math.min(360, n)), this._saturation = Math.max(0, Math.min(100, o)), this._value = Math.max(0, Math.min(100, a)), this.doOnChange();
    };
    if (e.includes("hsl")) {
      const n = e.replace(/hsla|hsl|\(|\)/gm, "").split(/\s|,/g).filter((o) => o !== "").map((o, a) => a > 2 ? Number.parseFloat(o) : Number.parseInt(o, 10));
      if (n.length === 4 ? this._alpha = Number.parseFloat(n[3]) * 100 : n.length === 3 && (this._alpha = 100), n.length >= 3) {
        const { h: o, s: a, v: s } = uo(n[0], n[1], n[2]);
        r(o, a, s);
      }
    } else if (e.includes("hsv")) {
      const n = e.replace(/hsva|hsv|\(|\)/gm, "").split(/\s|,/g).filter((o) => o !== "").map((o, a) => a > 2 ? Number.parseFloat(o) : Number.parseInt(o, 10));
      n.length === 4 ? this._alpha = Number.parseFloat(n[3]) * 100 : n.length === 3 && (this._alpha = 100), n.length >= 3 && r(n[0], n[1], n[2]);
    } else if (e.includes("rgb")) {
      const n = e.replace(/rgba|rgb|\(|\)/gm, "").split(/\s|,/g).filter((o) => o !== "").map((o, a) => a > 2 ? Number.parseFloat(o) : Number.parseInt(o, 10));
      if (n.length === 4 ? this._alpha = Number.parseFloat(n[3]) * 100 : n.length === 3 && (this._alpha = 100), n.length >= 3) {
        const { h: o, s: a, v: s } = sn(n[0], n[1], n[2]);
        r(o, a, s);
      }
    } else if (e.includes("#")) {
      const n = e.replace("#", "").trim();
      if (!/^[0-9a-fA-F]{3}$|^[0-9a-fA-F]{6}$|^[0-9a-fA-F]{8}$/.test(n))
        return;
      let o, a, s;
      n.length === 3 ? (o = ke(n[0] + n[0]), a = ke(n[1] + n[1]), s = ke(n[2] + n[2])) : (n.length === 6 || n.length === 8) && (o = ke(n.slice(0, 2)), a = ke(n.slice(2, 4)), s = ke(n.slice(4, 6))), n.length === 8 ? this._alpha = ke(n.slice(6)) / 255 * 100 : (n.length === 3 || n.length === 6) && (this._alpha = 100);
      const { h: i, s: l, v: m } = sn(o, a, s);
      r(i, l, m);
    }
  }
  compare(e) {
    return Math.abs(e._hue - this._hue) < 2 && Math.abs(e._saturation - this._saturation) < 1 && Math.abs(e._value - this._value) < 1 && Math.abs(e._alpha - this._alpha) < 1;
  }
  doOnChange() {
    const { _hue: e, _saturation: r, _value: n, _alpha: o, format: a } = this;
    if (this.enableAlpha)
      switch (a) {
        case "hsl": {
          const s = rn(e, r / 100, n / 100);
          this.value = `hsla(${e}, ${Math.round(s[1] * 100)}%, ${Math.round(s[2] * 100)}%, ${this.get("alpha") / 100})`;
          break;
        }
        case "hsv": {
          this.value = `hsva(${e}, ${Math.round(r)}%, ${Math.round(n)}%, ${this.get("alpha") / 100})`;
          break;
        }
        case "hex": {
          this.value = `${an(Pe(e, r, n))}${dt(o * 255 / 100)}`;
          break;
        }
        default: {
          const { r: s, g: i, b: l } = Pe(e, r, n);
          this.value = `rgba(${s}, ${i}, ${l}, ${this.get("alpha") / 100})`;
        }
      }
    else
      switch (a) {
        case "hsl": {
          const s = rn(e, r / 100, n / 100);
          this.value = `hsl(${e}, ${Math.round(s[1] * 100)}%, ${Math.round(s[2] * 100)}%)`;
          break;
        }
        case "hsv": {
          this.value = `hsv(${e}, ${Math.round(r)}%, ${Math.round(n)}%)`;
          break;
        }
        case "rgb": {
          const { r: s, g: i, b: l } = Pe(e, r, n);
          this.value = `rgb(${s}, ${i}, ${l})`;
          break;
        }
        default:
          this.value = an(Pe(e, r, n));
      }
  }
}
const co = Y({
  props: {
    colors: {
      type: Array,
      required: !0
    },
    color: {
      type: Object,
      required: !0
    }
  },
  setup(t) {
    const e = te("color-predefine"), { currentColor: r } = le(On), n = I(a(t.colors, t.color));
    H(() => r.value, (s) => {
      const i = new Be();
      i.fromString(s), n.value.forEach((l) => {
        l.selected = i.compare(l);
      });
    }), _n(() => {
      n.value = a(t.colors, t.color);
    });
    function o(s) {
      t.color.fromString(t.colors[s]);
    }
    function a(s, i) {
      return s.map((l) => {
        const m = new Be();
        return m.enableAlpha = !0, m.format = "rgba", m.fromString(l), m.selected = m.value === i.value, m;
      });
    }
    return {
      rgbaColors: n,
      handleSelect: o,
      ns: e
    };
  }
}), fo = ["onClick"];
function ho(t, e, r, n, o, a) {
  return M(), W("div", {
    class: D(t.ns.b())
  }, [
    B("div", {
      class: D(t.ns.e("colors"))
    }, [
      (M(!0), W(Ge, null, Nt(t.rgbaColors, (s, i) => (M(), W("div", {
        key: t.colors[i],
        class: D([
          t.ns.e("color-selector"),
          t.ns.is("alpha", s._alpha < 100),
          { selected: s.selected }
        ]),
        onClick: (l) => t.handleSelect(i)
      }, [
        B("div", {
          style: ie({ backgroundColor: s.value })
        }, null, 4)
      ], 10, fo))), 128))
    ], 2)
  ], 2);
}
var po = /* @__PURE__ */ ae(co, [["render", ho], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/color-picker/src/components/predefine.vue"]]);
const mo = Y({
  name: "ElSlPanel",
  props: {
    color: {
      type: Object,
      required: !0
    }
  },
  setup(t) {
    const e = te("color-svpanel"), r = Ve(), n = I(0), o = I(0), a = I("hsl(0, 100%, 50%)"), s = V(() => {
      const m = t.color.get("hue"), f = t.color.get("value");
      return { hue: m, value: f };
    });
    function i() {
      const m = t.color.get("saturation"), f = t.color.get("value"), c = r.vnode.el, { clientWidth: u, clientHeight: g } = c;
      o.value = m * u / 100, n.value = (100 - f) * g / 100, a.value = `hsl(${t.color.get("hue")}, 100%, 50%)`;
    }
    function l(m) {
      const c = r.vnode.el.getBoundingClientRect(), { clientX: u, clientY: g } = Wt(m);
      let v = u - c.left, h = g - c.top;
      v = Math.max(0, v), v = Math.min(v, c.width), h = Math.max(0, h), h = Math.min(h, c.height), o.value = v, n.value = h, t.color.set({
        saturation: v / c.width * 100,
        value: 100 - h / c.height * 100
      });
    }
    return H(() => s.value, () => {
      i();
    }), pe(() => {
      Ye(r.vnode.el, {
        drag: (m) => {
          l(m);
        },
        end: (m) => {
          l(m);
        }
      }), i();
    }), {
      cursorTop: n,
      cursorLeft: o,
      background: a,
      colorValue: s,
      handleDrag: l,
      update: i,
      ns: e
    };
  }
}), vo = /* @__PURE__ */ B("div", null, null, -1), go = [
  vo
];
function yo(t, e, r, n, o, a) {
  return M(), W("div", {
    class: D(t.ns.b()),
    style: ie({
      backgroundColor: t.background
    })
  }, [
    B("div", {
      class: D(t.ns.e("white"))
    }, null, 2),
    B("div", {
      class: D(t.ns.e("black"))
    }, null, 2),
    B("div", {
      class: D(t.ns.e("cursor")),
      style: ie({
        top: t.cursorTop + "px",
        left: t.cursorLeft + "px"
      })
    }, go, 6)
  ], 6);
}
var bo = /* @__PURE__ */ ae(mo, [["render", yo], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/color-picker/src/components/sv-panel.vue"]]);
const No = ["id", "aria-label", "aria-labelledby", "aria-description", "tabindex", "onKeydown"], Co = Y({
  name: "ElColorPicker"
}), ko = /* @__PURE__ */ Y({
  ...Co,
  props: ao,
  emits: so,
  setup(t, { expose: e, emit: r }) {
    const n = t, { t: o } = vt(), a = te("color"), { formItem: s } = bn(), i = gt(), l = Nn(), { inputId: m, isLabeledByFormItem: f } = Gn(n, {
      formItemContext: s
    }), c = I(), u = I(), g = I(), v = I();
    let h = !0;
    const N = Ze(new Be({
      enableAlpha: n.showAlpha,
      format: n.colorFormat || "",
      value: n.modelValue
    })), b = I(!1), w = I(!1), p = I(""), $ = V(() => !n.modelValue && !w.value ? "transparent" : _(N, n.showAlpha)), S = V(() => !n.modelValue && !w.value ? "" : N.value), F = V(() => f.value ? void 0 : n.label || o("el.colorpicker.defaultLabel")), j = V(() => f.value ? s == null ? void 0 : s.labelId : void 0), P = V(() => [
      a.b("picker"),
      a.is("disabled", l.value),
      a.bm("picker", i.value)
    ]);
    function _(k, U) {
      if (!(k instanceof Be))
        throw new TypeError("color should be instance of _color Class");
      const { r: Z, g: Q, b: Te } = k.toRgb();
      return U ? `rgba(${Z}, ${Q}, ${Te}, ${k.get("alpha") / 100})` : `rgb(${Z}, ${Q}, ${Te})`;
    }
    function A(k) {
      b.value = k;
    }
    const O = Zn(A, 100);
    function z() {
      O(!1), y();
    }
    function y() {
      me(() => {
        n.modelValue ? N.fromString(n.modelValue) : (N.value = "", me(() => {
          w.value = !1;
        }));
      });
    }
    function E() {
      l.value || O(!b.value);
    }
    function L() {
      N.fromString(p.value);
    }
    function X() {
      const k = N.value;
      r(he, k), r("change", k), n.validateEvent && (s == null || s.validate("change").catch((U) => He())), O(!1), me(() => {
        const U = new Be({
          enableAlpha: n.showAlpha,
          format: n.colorFormat || "",
          value: n.modelValue
        });
        N.compare(U) || y();
      });
    }
    function C() {
      O(!1), r(he, null), r("change", null), n.modelValue !== null && n.validateEvent && (s == null || s.validate("change").catch((k) => He())), y();
    }
    return pe(() => {
      n.modelValue && (p.value = S.value);
    }), H(() => n.modelValue, (k) => {
      k ? k && k !== N.value && (h = !1, N.fromString(k)) : w.value = !1;
    }), H(() => S.value, (k) => {
      p.value = k, h && r("activeChange", k), h = !0;
    }), H(() => N.value, () => {
      !n.modelValue && !w.value && (w.value = !0);
    }), H(() => b.value, () => {
      me(() => {
        var k, U, Z;
        (k = c.value) == null || k.update(), (U = u.value) == null || U.update(), (Z = g.value) == null || Z.update();
      });
    }), ve(On, {
      currentColor: S
    }), e({
      color: N
    }), (k, U) => (M(), G(d(Jn), {
      ref_key: "popper",
      ref: v,
      visible: b.value,
      "show-arrow": !1,
      "fallback-placements": ["bottom", "top", "right", "left"],
      offset: 0,
      "gpu-acceleration": !1,
      "popper-class": [d(a).be("picker", "panel"), d(a).b("dropdown"), k.popperClass],
      "stop-popper-mouse-event": !1,
      effect: "light",
      trigger: "click",
      transition: `${d(a).namespace.value}-zoom-in-top`,
      persistent: ""
    }, {
      content: q(() => [
        be((M(), W("div", null, [
          B("div", {
            class: D(d(a).be("dropdown", "main-wrapper"))
          }, [
            x(oo, {
              ref_key: "hue",
              ref: c,
              class: "hue-slider",
              color: d(N),
              vertical: ""
            }, null, 8, ["color"]),
            x(bo, {
              ref: "svPanel",
              color: d(N)
            }, null, 8, ["color"])
          ], 2),
          k.showAlpha ? (M(), G(to, {
            key: 0,
            ref_key: "alpha",
            ref: g,
            color: d(N)
          }, null, 8, ["color"])) : re("v-if", !0),
          k.predefine ? (M(), G(po, {
            key: 1,
            ref: "predefine",
            color: d(N),
            colors: k.predefine
          }, null, 8, ["color", "colors"])) : re("v-if", !0),
          B("div", {
            class: D(d(a).be("dropdown", "btns"))
          }, [
            B("span", {
              class: D(d(a).be("dropdown", "value"))
            }, [
              x(d(yt), {
                modelValue: p.value,
                "onUpdate:modelValue": U[0] || (U[0] = (Z) => p.value = Z),
                "validate-event": !1,
                size: "small",
                onKeyup: Ie(L, ["enter"]),
                onBlur: L
              }, null, 8, ["modelValue", "onKeyup"])
            ], 2),
            x(d($t), {
              class: D(d(a).be("dropdown", "link-btn")),
              text: "",
              size: "small",
              onClick: C
            }, {
              default: q(() => [
                mt(Ae(d(o)("el.colorpicker.clear")), 1)
              ]),
              _: 1
            }, 8, ["class"]),
            x(d($t), {
              plain: "",
              size: "small",
              class: D(d(a).be("dropdown", "btn")),
              onClick: X
            }, {
              default: q(() => [
                mt(Ae(d(o)("el.colorpicker.confirm")), 1)
              ]),
              _: 1
            }, 8, ["class"])
          ], 2)
        ])), [
          [d(Qn), z]
        ])
      ]),
      default: q(() => [
        B("div", {
          id: d(m),
          class: D(d(P)),
          role: "button",
          "aria-label": d(F),
          "aria-labelledby": d(j),
          "aria-description": d(o)("el.colorpicker.description", { color: k.modelValue || "" }),
          tabindex: k.tabindex,
          onKeydown: Ie(E, ["enter"])
        }, [
          d(l) ? (M(), W("div", {
            key: 0,
            class: D(d(a).be("picker", "mask"))
          }, null, 2)) : re("v-if", !0),
          B("div", {
            class: D(d(a).be("picker", "trigger")),
            onClick: E
          }, [
            B("span", {
              class: D([d(a).be("picker", "color"), d(a).is("alpha", k.showAlpha)])
            }, [
              B("span", {
                class: D(d(a).be("picker", "color-inner")),
                style: ie({
                  backgroundColor: d($)
                })
              }, [
                be(x(d(Le), {
                  class: D([d(a).be("picker", "icon"), d(a).is("icon-arrow-down")])
                }, {
                  default: q(() => [
                    x(d(Cn))
                  ]),
                  _: 1
                }, 8, ["class"]), [
                  [We, k.modelValue || w.value]
                ]),
                !k.modelValue && !w.value ? (M(), G(d(Le), {
                  key: 0,
                  class: D([d(a).be("picker", "empty"), d(a).is("icon-close")])
                }, {
                  default: q(() => [
                    x(d(er))
                  ]),
                  _: 1
                }, 8, ["class"])) : re("v-if", !0)
              ], 6)
            ], 2)
          ], 2)
        ], 42, No)
      ]),
      _: 1
    }, 8, ["visible", "popper-class", "transition"]));
  }
});
var wo = /* @__PURE__ */ ae(ko, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/color-picker/src/color-picker.vue"]]);
const Eo = bt(wo), _o = De({
  mask: {
    type: Boolean,
    default: !0
  },
  customMaskEvent: {
    type: Boolean,
    default: !1
  },
  overlayClass: {
    type: $e([
      String,
      Array,
      Object
    ])
  },
  zIndex: {
    type: $e([String, Number])
  }
}), So = {
  click: (t) => t instanceof MouseEvent
};
var $o = Y({
  name: "ElOverlay",
  props: _o,
  emits: So,
  setup(t, { slots: e, emit: r }) {
    const n = te("overlay"), o = (l) => {
      r("click", l);
    }, { onClick: a, onMousedown: s, onMouseup: i } = xn(t.customMaskEvent ? void 0 : o);
    return () => t.mask ? x("div", {
      class: [n.b(), t.overlayClass],
      style: {
        zIndex: t.zIndex
      },
      onClick: a,
      onMousedown: s,
      onMouseup: i
    }, [oe(e, "default")], st.STYLE | st.CLASS | st.PROPS, ["onClick", "onMouseup", "onMousedown"]) : Dt("div", {
      class: t.overlayClass,
      style: {
        zIndex: t.zIndex,
        position: "fixed",
        top: "0px",
        right: "0px",
        bottom: "0px",
        left: "0px"
      }
    }, [oe(e, "default")]);
  }
});
const Ao = $o, Ln = De({
  center: {
    type: Boolean,
    default: !1
  },
  alignCenter: {
    type: Boolean,
    default: !1
  },
  closeIcon: {
    type: kn
  },
  customClass: {
    type: String,
    default: ""
  },
  draggable: {
    type: Boolean,
    default: !1
  },
  fullscreen: {
    type: Boolean,
    default: !1
  },
  showClose: {
    type: Boolean,
    default: !0
  },
  title: {
    type: String,
    default: ""
  }
}), Do = {
  close: () => !0
}, To = ["aria-label"], Mo = ["id"], Fo = Y({ name: "ElDialogContent" }), Io = /* @__PURE__ */ Y({
  ...Fo,
  props: Ln,
  emits: Do,
  setup(t) {
    const e = t, { t: r } = vt(), { Close: n } = nr, { dialogRef: o, headerRef: a, bodyId: s, ns: i, style: l } = le(Mn), { focusTrapRef: m } = le(tr), f = Ir(m, o), c = V(() => e.draggable);
    return xr(o, a, c), (u, g) => (M(), W("div", {
      ref: d(f),
      class: D([
        d(i).b(),
        d(i).is("fullscreen", u.fullscreen),
        d(i).is("draggable", d(c)),
        d(i).is("align-center", u.alignCenter),
        { [d(i).m("center")]: u.center },
        u.customClass
      ]),
      style: ie(d(l)),
      tabindex: "-1"
    }, [
      B("header", {
        ref_key: "headerRef",
        ref: a,
        class: D(d(i).e("header"))
      }, [
        oe(u.$slots, "header", {}, () => [
          B("span", {
            role: "heading",
            class: D(d(i).e("title"))
          }, Ae(u.title), 3)
        ]),
        u.showClose ? (M(), W("button", {
          key: 0,
          "aria-label": d(r)("el.dialog.close"),
          class: D(d(i).e("headerbtn")),
          type: "button",
          onClick: g[0] || (g[0] = (v) => u.$emit("close"))
        }, [
          x(d(Le), {
            class: D(d(i).e("close"))
          }, {
            default: q(() => [
              (M(), G(zt(u.closeIcon || d(n))))
            ]),
            _: 1
          }, 8, ["class"])
        ], 10, To)) : re("v-if", !0)
      ], 2),
      B("div", {
        id: d(s),
        class: D(d(i).e("body"))
      }, [
        oe(u.$slots, "default")
      ], 10, Mo),
      u.$slots.footer ? (M(), W("footer", {
        key: 0,
        class: D(d(i).e("footer"))
      }, [
        oe(u.$slots, "footer")
      ], 2)) : re("v-if", !0)
    ], 6));
  }
});
var xo = /* @__PURE__ */ ae(Io, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog-content.vue"]]);
const Oo = De({
  ...Ln,
  appendToBody: {
    type: Boolean,
    default: !1
  },
  beforeClose: {
    type: $e(Function)
  },
  destroyOnClose: {
    type: Boolean,
    default: !1
  },
  closeOnClickModal: {
    type: Boolean,
    default: !0
  },
  closeOnPressEscape: {
    type: Boolean,
    default: !0
  },
  lockScroll: {
    type: Boolean,
    default: !0
  },
  modal: {
    type: Boolean,
    default: !0
  },
  openDelay: {
    type: Number,
    default: 0
  },
  closeDelay: {
    type: Number,
    default: 0
  },
  top: {
    type: String
  },
  modelValue: {
    type: Boolean,
    default: !1
  },
  modalClass: String,
  width: {
    type: [String, Number]
  },
  zIndex: {
    type: Number
  },
  trapFocus: {
    type: Boolean,
    default: !1
  }
}), Lo = {
  open: () => !0,
  opened: () => !0,
  close: () => !0,
  closed: () => !0,
  [he]: (t) => Bt(t),
  openAutoFocus: () => !0,
  closeAutoFocus: () => !0
}, Vo = (t, e) => {
  const n = Ve().emit, { nextZIndex: o } = rr();
  let a = "";
  const s = At(), i = At(), l = I(!1), m = I(!1), f = I(!1), c = I(t.zIndex || o());
  let u, g;
  const v = or("namespace", ar), h = V(() => {
    const E = {}, L = `--${v.value}-dialog`;
    return t.fullscreen || (t.top && (E[`${L}-margin-top`] = t.top), t.width && (E[`${L}-width`] = je(t.width))), E;
  }), N = V(() => t.alignCenter ? { display: "flex" } : {});
  function b() {
    n("opened");
  }
  function w() {
    n("closed"), n(he, !1), t.destroyOnClose && (f.value = !1);
  }
  function p() {
    n("close");
  }
  function $() {
    g == null || g(), u == null || u(), t.openDelay && t.openDelay > 0 ? { stop: u } = Gt(() => P(), t.openDelay) : P();
  }
  function S() {
    u == null || u(), g == null || g(), t.closeDelay && t.closeDelay > 0 ? { stop: g } = Gt(() => _(), t.closeDelay) : _();
  }
  function F() {
    function E(L) {
      L || (m.value = !0, l.value = !1);
    }
    t.beforeClose ? t.beforeClose(E) : S();
  }
  function j() {
    t.closeOnClickModal && F();
  }
  function P() {
    Kt && (l.value = !0);
  }
  function _() {
    l.value = !1;
  }
  function A() {
    n("openAutoFocus");
  }
  function O() {
    n("closeAutoFocus");
  }
  function z(E) {
    var L;
    ((L = E.detail) == null ? void 0 : L.focusReason) === "pointer" && E.preventDefault();
  }
  t.lockScroll && Yr(l);
  function y() {
    t.closeOnPressEscape && F();
  }
  return H(() => t.modelValue, (E) => {
    E ? (m.value = !1, $(), f.value = !0, c.value = t.zIndex ? c.value++ : o(), me(() => {
      n("open"), e.value && (e.value.scrollTop = 0);
    })) : l.value && S();
  }), H(() => t.fullscreen, (E) => {
    e.value && (E ? (a = e.value.style.transform, e.value.style.transform = "") : e.value.style.transform = a);
  }), pe(() => {
    t.modelValue && (l.value = !0, f.value = !0, $());
  }), {
    afterEnter: b,
    afterLeave: w,
    beforeLeave: p,
    handleClose: F,
    onModalClick: j,
    close: S,
    doClose: _,
    onOpenAutoFocus: A,
    onCloseAutoFocus: O,
    onCloseRequested: y,
    onFocusoutPrevented: z,
    titleId: s,
    bodyId: i,
    closed: m,
    style: h,
    overlayDialogStyle: N,
    rendered: f,
    visible: l,
    zIndex: c
  };
}, Po = ["aria-label", "aria-labelledby", "aria-describedby"], Ko = Y({
  name: "ElDialog",
  inheritAttrs: !1
}), qo = /* @__PURE__ */ Y({
  ...Ko,
  props: Oo,
  emits: Lo,
  setup(t, { expose: e }) {
    const r = t, n = Dn();
    Zt({
      scope: "el-dialog",
      from: "the title slot",
      replacement: "the header slot",
      version: "3.0.0",
      ref: "https://element-plus.org/en-US/component/dialog.html#slots"
    }, V(() => !!n.title)), Zt({
      scope: "el-dialog",
      from: "custom-class",
      replacement: "class",
      version: "2.3.0",
      ref: "https://element-plus.org/en-US/component/dialog.html#attributes",
      type: "Attribute"
    }, V(() => !!r.customClass));
    const o = te("dialog"), a = I(), s = I(), i = I(), {
      visible: l,
      titleId: m,
      bodyId: f,
      style: c,
      overlayDialogStyle: u,
      rendered: g,
      zIndex: v,
      afterEnter: h,
      afterLeave: N,
      beforeLeave: b,
      handleClose: w,
      onModalClick: p,
      onOpenAutoFocus: $,
      onCloseAutoFocus: S,
      onCloseRequested: F,
      onFocusoutPrevented: j
    } = Vo(r, a);
    ve(Mn, {
      dialogRef: a,
      headerRef: s,
      bodyId: f,
      ns: o,
      rendered: g,
      style: c
    });
    const P = xn(p), _ = V(() => r.draggable && !r.fullscreen);
    return e({
      visible: l,
      dialogContentRef: i
    }), (A, O) => (M(), G(Ar, {
      to: "body",
      disabled: !A.appendToBody
    }, [
      x($n, {
        name: "dialog-fade",
        onAfterEnter: d(h),
        onAfterLeave: d(N),
        onBeforeLeave: d(b),
        persisted: ""
      }, {
        default: q(() => [
          be(x(d(Ao), {
            "custom-mask-event": "",
            mask: A.modal,
            "overlay-class": A.modalClass,
            "z-index": d(v)
          }, {
            default: q(() => [
              B("div", {
                role: "dialog",
                "aria-modal": "true",
                "aria-label": A.title || void 0,
                "aria-labelledby": A.title ? void 0 : d(m),
                "aria-describedby": d(f),
                class: D(`${d(o).namespace.value}-overlay-dialog`),
                style: ie(d(u)),
                onClick: O[0] || (O[0] = (...z) => d(P).onClick && d(P).onClick(...z)),
                onMousedown: O[1] || (O[1] = (...z) => d(P).onMousedown && d(P).onMousedown(...z)),
                onMouseup: O[2] || (O[2] = (...z) => d(P).onMouseup && d(P).onMouseup(...z))
              }, [
                x(d(sr), {
                  loop: "",
                  trapped: d(l),
                  "focus-start-el": "container",
                  onFocusAfterTrapped: d($),
                  onFocusAfterReleased: d(S),
                  onFocusoutPrevented: d(j),
                  onReleaseRequested: d(F)
                }, {
                  default: q(() => [
                    d(g) ? (M(), G(xo, An({
                      key: 0,
                      ref_key: "dialogContentRef",
                      ref: i
                    }, A.$attrs, {
                      "custom-class": A.customClass,
                      center: A.center,
                      "align-center": A.alignCenter,
                      "close-icon": A.closeIcon,
                      draggable: d(_),
                      fullscreen: A.fullscreen,
                      "show-close": A.showClose,
                      title: A.title,
                      onClose: d(w)
                    }), Dr({
                      header: q(() => [
                        A.$slots.title ? oe(A.$slots, "title", { key: 1 }) : oe(A.$slots, "header", {
                          key: 0,
                          close: d(w),
                          titleId: d(m),
                          titleClass: d(o).e("title")
                        })
                      ]),
                      default: q(() => [
                        oe(A.$slots, "default")
                      ]),
                      _: 2
                    }, [
                      A.$slots.footer ? {
                        name: "footer",
                        fn: q(() => [
                          oe(A.$slots, "footer")
                        ])
                      } : void 0
                    ]), 1040, ["custom-class", "center", "align-center", "close-icon", "draggable", "fullscreen", "show-close", "title", "onClose"])) : re("v-if", !0)
                  ]),
                  _: 3
                }, 8, ["trapped", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusoutPrevented", "onReleaseRequested"])
              ], 46, Po)
            ]),
            _: 3
          }, 8, ["mask", "overlay-class", "z-index"]), [
            [We, d(l)]
          ])
        ]),
        _: 3
      }, 8, ["onAfterEnter", "onAfterLeave", "onBeforeLeave"])
    ], 8, ["disabled"]));
  }
});
var Bo = /* @__PURE__ */ ae(qo, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog.vue"]]);
const Ro = bt(Bo), jo = De({
  model: Object,
  rules: {
    type: $e(Object)
  },
  labelPosition: {
    type: String,
    values: ["left", "right", "top"],
    default: "right"
  },
  requireAsteriskPosition: {
    type: String,
    values: ["left", "right"],
    default: "left"
  },
  labelWidth: {
    type: [String, Number],
    default: ""
  },
  labelSuffix: {
    type: String,
    default: ""
  },
  inline: Boolean,
  inlineMessage: Boolean,
  statusIcon: Boolean,
  showMessage: {
    type: Boolean,
    default: !0
  },
  size: {
    type: String,
    values: wn
  },
  disabled: Boolean,
  validateOnRuleChange: {
    type: Boolean,
    default: !0
  },
  hideRequiredAsterisk: {
    type: Boolean,
    default: !1
  },
  scrollToError: Boolean
}), zo = {
  validate: (t, e, r) => (mn(t) || ge(t)) && Bt(e) && ge(r)
};
function Ho() {
  const t = I([]), e = V(() => {
    if (!t.value.length)
      return "0";
    const a = Math.max(...t.value);
    return a ? `${a}px` : "";
  });
  function r(a) {
    const s = t.value.indexOf(a);
    return s === -1 && e.value, s;
  }
  function n(a, s) {
    if (a && s) {
      const i = r(s);
      t.value.splice(i, 1, a);
    } else
      a && t.value.push(a);
  }
  function o(a) {
    const s = r(a);
    s > -1 && t.value.splice(s, 1);
  }
  return {
    autoLabelWidth: e,
    registerLabelWidth: n,
    deregisterLabelWidth: o
  };
}
const et = (t, e) => {
  const r = Tt(e);
  return r.length > 0 ? t.filter((n) => n.prop && r.includes(n.prop)) : t;
}, Wo = "ElForm", Yo = Y({
  name: Wo
}), Uo = /* @__PURE__ */ Y({
  ...Yo,
  props: jo,
  emits: zo,
  setup(t, { expose: e, emit: r }) {
    const n = t, o = [], a = gt(), s = te("form"), i = V(() => {
      const { labelPosition: w, inline: p } = n;
      return [
        s.b(),
        s.m(a.value || "default"),
        {
          [s.m(`label-${w}`)]: w,
          [s.m("inline")]: p
        }
      ];
    }), l = (w) => {
      o.push(w);
    }, m = (w) => {
      w.prop && o.splice(o.indexOf(w), 1);
    }, f = (w = []) => {
      n.model && et(o, w).forEach((p) => p.resetField());
    }, c = (w = []) => {
      et(o, w).forEach((p) => p.clearValidate());
    }, u = V(() => !!n.model), g = (w) => {
      if (o.length === 0)
        return [];
      const p = et(o, w);
      return p.length ? p : [];
    }, v = async (w) => N(void 0, w), h = async (w = []) => {
      if (!u.value)
        return !1;
      const p = g(w);
      if (p.length === 0)
        return !0;
      let $ = {};
      for (const S of p)
        try {
          await S.validate("");
        } catch (F) {
          $ = {
            ...$,
            ...F
          };
        }
      return Object.keys($).length === 0 ? !0 : Promise.reject($);
    }, N = async (w = [], p) => {
      const $ = !Se(p);
      try {
        const S = await h(w);
        return S === !0 && (p == null || p(S)), S;
      } catch (S) {
        if (S instanceof Error)
          throw S;
        const F = S;
        return n.scrollToError && b(Object.keys(F)[0]), p == null || p(!1, F), $ && Promise.reject(F);
      }
    }, b = (w) => {
      var p;
      const $ = et(o, w)[0];
      $ && ((p = $.$el) == null || p.scrollIntoView());
    };
    return H(() => n.rules, () => {
      n.validateOnRuleChange && v().catch((w) => He());
    }, { deep: !0 }), ve(Rt, Ze({
      ...Tn(n),
      emit: r,
      resetFields: f,
      clearValidate: c,
      validateField: N,
      addField: l,
      removeField: m,
      ...Ho()
    })), e({
      validate: v,
      validateField: N,
      resetFields: f,
      clearValidate: c,
      scrollToField: b
    }), (w, p) => (M(), W("form", {
      class: D(d(i))
    }, [
      oe(w.$slots, "default")
    ], 2));
  }
});
var Xo = /* @__PURE__ */ ae(Uo, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/form/src/form.vue"]]);
function Ee() {
  return Ee = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
    }
    return t;
  }, Ee.apply(this, arguments);
}
function Go(t, e) {
  t.prototype = Object.create(e.prototype), t.prototype.constructor = t, Ue(t, e);
}
function Ft(t) {
  return Ft = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Ft(t);
}
function Ue(t, e) {
  return Ue = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
    return n.__proto__ = o, n;
  }, Ue(t, e);
}
function Zo() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function ut(t, e, r) {
  return Zo() ? ut = Reflect.construct.bind() : ut = function(o, a, s) {
    var i = [null];
    i.push.apply(i, a);
    var l = Function.bind.apply(o, i), m = new l();
    return s && Ue(m, s.prototype), m;
  }, ut.apply(null, arguments);
}
function Jo(t) {
  return Function.toString.call(t).indexOf("[native code]") !== -1;
}
function It(t) {
  var e = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return It = function(n) {
    if (n === null || !Jo(n))
      return n;
    if (typeof n != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof e < "u") {
      if (e.has(n))
        return e.get(n);
      e.set(n, o);
    }
    function o() {
      return ut(n, arguments, Ft(this).constructor);
    }
    return o.prototype = Object.create(n.prototype, {
      constructor: {
        value: o,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), Ue(o, n);
  }, It(t);
}
var Qo = /%[sdj%]/g, ea = function() {
};
typeof process < "u" && process.env;
function xt(t) {
  if (!t || !t.length)
    return null;
  var e = {};
  return t.forEach(function(r) {
    var n = r.field;
    e[n] = e[n] || [], e[n].push(r);
  }), e;
}
function se(t) {
  for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
    r[n - 1] = arguments[n];
  var o = 0, a = r.length;
  if (typeof t == "function")
    return t.apply(null, r);
  if (typeof t == "string") {
    var s = t.replace(Qo, function(i) {
      if (i === "%%")
        return "%";
      if (o >= a)
        return i;
      switch (i) {
        case "%s":
          return String(r[o++]);
        case "%d":
          return Number(r[o++]);
        case "%j":
          try {
            return JSON.stringify(r[o++]);
          } catch {
            return "[Circular]";
          }
          break;
        default:
          return i;
      }
    });
    return s;
  }
  return t;
}
function ta(t) {
  return t === "string" || t === "url" || t === "hex" || t === "email" || t === "date" || t === "pattern";
}
function J(t, e) {
  return !!(t == null || e === "array" && Array.isArray(t) && !t.length || ta(e) && typeof t == "string" && !t);
}
function na(t, e, r) {
  var n = [], o = 0, a = t.length;
  function s(i) {
    n.push.apply(n, i || []), o++, o === a && r(n);
  }
  t.forEach(function(i) {
    e(i, s);
  });
}
function ln(t, e, r) {
  var n = 0, o = t.length;
  function a(s) {
    if (s && s.length) {
      r(s);
      return;
    }
    var i = n;
    n = n + 1, i < o ? e(t[i], a) : r([]);
  }
  a([]);
}
function ra(t) {
  var e = [];
  return Object.keys(t).forEach(function(r) {
    e.push.apply(e, t[r] || []);
  }), e;
}
var dn = /* @__PURE__ */ function(t) {
  Go(e, t);
  function e(r, n) {
    var o;
    return o = t.call(this, "Async Validation Error") || this, o.errors = r, o.fields = n, o;
  }
  return e;
}(/* @__PURE__ */ It(Error));
function oa(t, e, r, n, o) {
  if (e.first) {
    var a = new Promise(function(u, g) {
      var v = function(b) {
        return n(b), b.length ? g(new dn(b, xt(b))) : u(o);
      }, h = ra(t);
      ln(h, r, v);
    });
    return a.catch(function(u) {
      return u;
    }), a;
  }
  var s = e.firstFields === !0 ? Object.keys(t) : e.firstFields || [], i = Object.keys(t), l = i.length, m = 0, f = [], c = new Promise(function(u, g) {
    var v = function(N) {
      if (f.push.apply(f, N), m++, m === l)
        return n(f), f.length ? g(new dn(f, xt(f))) : u(o);
    };
    i.length || (n(f), u(o)), i.forEach(function(h) {
      var N = t[h];
      s.indexOf(h) !== -1 ? ln(N, r, v) : na(N, r, v);
    });
  });
  return c.catch(function(u) {
    return u;
  }), c;
}
function aa(t) {
  return !!(t && t.message !== void 0);
}
function sa(t, e) {
  for (var r = t, n = 0; n < e.length; n++) {
    if (r == null)
      return r;
    r = r[e[n]];
  }
  return r;
}
function un(t, e) {
  return function(r) {
    var n;
    return t.fullFields ? n = sa(e, t.fullFields) : n = e[r.field || t.fullField], aa(r) ? (r.field = r.field || t.fullField, r.fieldValue = n, r) : {
      message: typeof r == "function" ? r() : r,
      fieldValue: n,
      field: r.field || t.fullField
    };
  };
}
function cn(t, e) {
  if (e) {
    for (var r in e)
      if (e.hasOwnProperty(r)) {
        var n = e[r];
        typeof n == "object" && typeof t[r] == "object" ? t[r] = Ee({}, t[r], n) : t[r] = n;
      }
  }
  return t;
}
var Vn = function(e, r, n, o, a, s) {
  e.required && (!n.hasOwnProperty(e.field) || J(r, s || e.type)) && o.push(se(a.messages.required, e.fullField));
}, ia = function(e, r, n, o, a) {
  (/^\s+$/.test(r) || r === "") && o.push(se(a.messages.whitespace, e.fullField));
}, tt, la = function() {
  if (tt)
    return tt;
  var t = "[a-fA-F\\d:]", e = function($) {
    return $ && $.includeBoundaries ? "(?:(?<=\\s|^)(?=" + t + ")|(?<=" + t + ")(?=\\s|$))" : "";
  }, r = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}", n = "[a-fA-F\\d]{1,4}", o = (`
(?:
(?:` + n + ":){7}(?:" + n + `|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:` + n + ":){6}(?:" + r + "|:" + n + `|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:` + n + ":){5}(?::" + r + "|(?::" + n + `){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:` + n + ":){4}(?:(?::" + n + "){0,1}:" + r + "|(?::" + n + `){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:` + n + ":){3}(?:(?::" + n + "){0,2}:" + r + "|(?::" + n + `){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:` + n + ":){2}(?:(?::" + n + "){0,3}:" + r + "|(?::" + n + `){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:` + n + ":){1}(?:(?::" + n + "){0,4}:" + r + "|(?::" + n + `){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::` + n + "){0,5}:" + r + "|(?::" + n + `){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`).replace(/\s*\/\/.*$/gm, "").replace(/\n/g, "").trim(), a = new RegExp("(?:^" + r + "$)|(?:^" + o + "$)"), s = new RegExp("^" + r + "$"), i = new RegExp("^" + o + "$"), l = function($) {
    return $ && $.exact ? a : new RegExp("(?:" + e($) + r + e($) + ")|(?:" + e($) + o + e($) + ")", "g");
  };
  l.v4 = function(p) {
    return p && p.exact ? s : new RegExp("" + e(p) + r + e(p), "g");
  }, l.v6 = function(p) {
    return p && p.exact ? i : new RegExp("" + e(p) + o + e(p), "g");
  };
  var m = "(?:(?:[a-z]+:)?//)", f = "(?:\\S+(?::\\S*)?@)?", c = l.v4().source, u = l.v6().source, g = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)", v = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*", h = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))", N = "(?::\\d{2,5})?", b = '(?:[/?#][^\\s"]*)?', w = "(?:" + m + "|www\\.)" + f + "(?:localhost|" + c + "|" + u + "|" + g + v + h + ")" + N + b;
  return tt = new RegExp("(?:^" + w + "$)", "i"), tt;
}, fn = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  // url: new RegExp(
  //   '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
  //   'i',
  // ),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
}, qe = {
  integer: function(e) {
    return qe.number(e) && parseInt(e, 10) === e;
  },
  float: function(e) {
    return qe.number(e) && !qe.integer(e);
  },
  array: function(e) {
    return Array.isArray(e);
  },
  regexp: function(e) {
    if (e instanceof RegExp)
      return !0;
    try {
      return !!new RegExp(e);
    } catch {
      return !1;
    }
  },
  date: function(e) {
    return typeof e.getTime == "function" && typeof e.getMonth == "function" && typeof e.getYear == "function" && !isNaN(e.getTime());
  },
  number: function(e) {
    return isNaN(e) ? !1 : typeof e == "number";
  },
  object: function(e) {
    return typeof e == "object" && !qe.array(e);
  },
  method: function(e) {
    return typeof e == "function";
  },
  email: function(e) {
    return typeof e == "string" && e.length <= 320 && !!e.match(fn.email);
  },
  url: function(e) {
    return typeof e == "string" && e.length <= 2048 && !!e.match(la());
  },
  hex: function(e) {
    return typeof e == "string" && !!e.match(fn.hex);
  }
}, da = function(e, r, n, o, a) {
  if (e.required && r === void 0) {
    Vn(e, r, n, o, a);
    return;
  }
  var s = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"], i = e.type;
  s.indexOf(i) > -1 ? qe[i](r) || o.push(se(a.messages.types[i], e.fullField, e.type)) : i && typeof r !== e.type && o.push(se(a.messages.types[i], e.fullField, e.type));
}, ua = function(e, r, n, o, a) {
  var s = typeof e.len == "number", i = typeof e.min == "number", l = typeof e.max == "number", m = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, f = r, c = null, u = typeof r == "number", g = typeof r == "string", v = Array.isArray(r);
  if (u ? c = "number" : g ? c = "string" : v && (c = "array"), !c)
    return !1;
  v && (f = r.length), g && (f = r.replace(m, "_").length), s ? f !== e.len && o.push(se(a.messages[c].len, e.fullField, e.len)) : i && !l && f < e.min ? o.push(se(a.messages[c].min, e.fullField, e.min)) : l && !i && f > e.max ? o.push(se(a.messages[c].max, e.fullField, e.max)) : i && l && (f < e.min || f > e.max) && o.push(se(a.messages[c].range, e.fullField, e.min, e.max));
}, Fe = "enum", ca = function(e, r, n, o, a) {
  e[Fe] = Array.isArray(e[Fe]) ? e[Fe] : [], e[Fe].indexOf(r) === -1 && o.push(se(a.messages[Fe], e.fullField, e[Fe].join(", ")));
}, fa = function(e, r, n, o, a) {
  if (e.pattern) {
    if (e.pattern instanceof RegExp)
      e.pattern.lastIndex = 0, e.pattern.test(r) || o.push(se(a.messages.pattern.mismatch, e.fullField, r, e.pattern));
    else if (typeof e.pattern == "string") {
      var s = new RegExp(e.pattern);
      s.test(r) || o.push(se(a.messages.pattern.mismatch, e.fullField, r, e.pattern));
    }
  }
}, K = {
  required: Vn,
  whitespace: ia,
  type: da,
  range: ua,
  enum: ca,
  pattern: fa
}, ha = function(e, r, n, o, a) {
  var s = [], i = e.required || !e.required && o.hasOwnProperty(e.field);
  if (i) {
    if (J(r, "string") && !e.required)
      return n();
    K.required(e, r, o, s, a, "string"), J(r, "string") || (K.type(e, r, o, s, a), K.range(e, r, o, s, a), K.pattern(e, r, o, s, a), e.whitespace === !0 && K.whitespace(e, r, o, s, a));
  }
  n(s);
}, pa = function(e, r, n, o, a) {
  var s = [], i = e.required || !e.required && o.hasOwnProperty(e.field);
  if (i) {
    if (J(r) && !e.required)
      return n();
    K.required(e, r, o, s, a), r !== void 0 && K.type(e, r, o, s, a);
  }
  n(s);
}, ma = function(e, r, n, o, a) {
  var s = [], i = e.required || !e.required && o.hasOwnProperty(e.field);
  if (i) {
    if (r === "" && (r = void 0), J(r) && !e.required)
      return n();
    K.required(e, r, o, s, a), r !== void 0 && (K.type(e, r, o, s, a), K.range(e, r, o, s, a));
  }
  n(s);
}, va = function(e, r, n, o, a) {
  var s = [], i = e.required || !e.required && o.hasOwnProperty(e.field);
  if (i) {
    if (J(r) && !e.required)
      return n();
    K.required(e, r, o, s, a), r !== void 0 && K.type(e, r, o, s, a);
  }
  n(s);
}, ga = function(e, r, n, o, a) {
  var s = [], i = e.required || !e.required && o.hasOwnProperty(e.field);
  if (i) {
    if (J(r) && !e.required)
      return n();
    K.required(e, r, o, s, a), J(r) || K.type(e, r, o, s, a);
  }
  n(s);
}, ya = function(e, r, n, o, a) {
  var s = [], i = e.required || !e.required && o.hasOwnProperty(e.field);
  if (i) {
    if (J(r) && !e.required)
      return n();
    K.required(e, r, o, s, a), r !== void 0 && (K.type(e, r, o, s, a), K.range(e, r, o, s, a));
  }
  n(s);
}, ba = function(e, r, n, o, a) {
  var s = [], i = e.required || !e.required && o.hasOwnProperty(e.field);
  if (i) {
    if (J(r) && !e.required)
      return n();
    K.required(e, r, o, s, a), r !== void 0 && (K.type(e, r, o, s, a), K.range(e, r, o, s, a));
  }
  n(s);
}, Na = function(e, r, n, o, a) {
  var s = [], i = e.required || !e.required && o.hasOwnProperty(e.field);
  if (i) {
    if (r == null && !e.required)
      return n();
    K.required(e, r, o, s, a, "array"), r != null && (K.type(e, r, o, s, a), K.range(e, r, o, s, a));
  }
  n(s);
}, Ca = function(e, r, n, o, a) {
  var s = [], i = e.required || !e.required && o.hasOwnProperty(e.field);
  if (i) {
    if (J(r) && !e.required)
      return n();
    K.required(e, r, o, s, a), r !== void 0 && K.type(e, r, o, s, a);
  }
  n(s);
}, ka = "enum", wa = function(e, r, n, o, a) {
  var s = [], i = e.required || !e.required && o.hasOwnProperty(e.field);
  if (i) {
    if (J(r) && !e.required)
      return n();
    K.required(e, r, o, s, a), r !== void 0 && K[ka](e, r, o, s, a);
  }
  n(s);
}, Ea = function(e, r, n, o, a) {
  var s = [], i = e.required || !e.required && o.hasOwnProperty(e.field);
  if (i) {
    if (J(r, "string") && !e.required)
      return n();
    K.required(e, r, o, s, a), J(r, "string") || K.pattern(e, r, o, s, a);
  }
  n(s);
}, _a = function(e, r, n, o, a) {
  var s = [], i = e.required || !e.required && o.hasOwnProperty(e.field);
  if (i) {
    if (J(r, "date") && !e.required)
      return n();
    if (K.required(e, r, o, s, a), !J(r, "date")) {
      var l;
      r instanceof Date ? l = r : l = new Date(r), K.type(e, l, o, s, a), l && K.range(e, l.getTime(), o, s, a);
    }
  }
  n(s);
}, Sa = function(e, r, n, o, a) {
  var s = [], i = Array.isArray(r) ? "array" : typeof r;
  K.required(e, r, o, s, a, i), n(s);
}, St = function(e, r, n, o, a) {
  var s = e.type, i = [], l = e.required || !e.required && o.hasOwnProperty(e.field);
  if (l) {
    if (J(r, s) && !e.required)
      return n();
    K.required(e, r, o, i, a, s), J(r, s) || K.type(e, r, o, i, a);
  }
  n(i);
}, $a = function(e, r, n, o, a) {
  var s = [], i = e.required || !e.required && o.hasOwnProperty(e.field);
  if (i) {
    if (J(r) && !e.required)
      return n();
    K.required(e, r, o, s, a);
  }
  n(s);
}, Re = {
  string: ha,
  method: pa,
  number: ma,
  boolean: va,
  regexp: ga,
  integer: ya,
  float: ba,
  array: Na,
  object: Ca,
  enum: wa,
  pattern: Ea,
  date: _a,
  url: St,
  hex: St,
  email: St,
  required: Sa,
  any: $a
};
function Ot() {
  return {
    default: "Validation error on field %s",
    required: "%s is required",
    enum: "%s must be one of %s",
    whitespace: "%s cannot be empty",
    date: {
      format: "%s date %s is invalid for format %s",
      parse: "%s date could not be parsed, %s is invalid ",
      invalid: "%s date %s is invalid"
    },
    types: {
      string: "%s is not a %s",
      method: "%s is not a %s (function)",
      array: "%s is not an %s",
      object: "%s is not an %s",
      number: "%s is not a %s",
      date: "%s is not a %s",
      boolean: "%s is not a %s",
      integer: "%s is not an %s",
      float: "%s is not a %s",
      regexp: "%s is not a valid %s",
      email: "%s is not a valid %s",
      url: "%s is not a valid %s",
      hex: "%s is not a valid %s"
    },
    string: {
      len: "%s must be exactly %s characters",
      min: "%s must be at least %s characters",
      max: "%s cannot be longer than %s characters",
      range: "%s must be between %s and %s characters"
    },
    number: {
      len: "%s must equal %s",
      min: "%s cannot be less than %s",
      max: "%s cannot be greater than %s",
      range: "%s must be between %s and %s"
    },
    array: {
      len: "%s must be exactly %s in length",
      min: "%s cannot be less than %s in length",
      max: "%s cannot be greater than %s in length",
      range: "%s must be between %s and %s in length"
    },
    pattern: {
      mismatch: "%s value %s does not match pattern %s"
    },
    clone: function() {
      var e = JSON.parse(JSON.stringify(this));
      return e.clone = this.clone, e;
    }
  };
}
var Lt = Ot(), Je = /* @__PURE__ */ function() {
  function t(r) {
    this.rules = null, this._messages = Lt, this.define(r);
  }
  var e = t.prototype;
  return e.define = function(n) {
    var o = this;
    if (!n)
      throw new Error("Cannot configure a schema with no rules");
    if (typeof n != "object" || Array.isArray(n))
      throw new Error("Rules must be an object");
    this.rules = {}, Object.keys(n).forEach(function(a) {
      var s = n[a];
      o.rules[a] = Array.isArray(s) ? s : [s];
    });
  }, e.messages = function(n) {
    return n && (this._messages = cn(Ot(), n)), this._messages;
  }, e.validate = function(n, o, a) {
    var s = this;
    o === void 0 && (o = {}), a === void 0 && (a = function() {
    });
    var i = n, l = o, m = a;
    if (typeof l == "function" && (m = l, l = {}), !this.rules || Object.keys(this.rules).length === 0)
      return m && m(null, i), Promise.resolve(i);
    function f(h) {
      var N = [], b = {};
      function w($) {
        if (Array.isArray($)) {
          var S;
          N = (S = N).concat.apply(S, $);
        } else
          N.push($);
      }
      for (var p = 0; p < h.length; p++)
        w(h[p]);
      N.length ? (b = xt(N), m(N, b)) : m(null, i);
    }
    if (l.messages) {
      var c = this.messages();
      c === Lt && (c = Ot()), cn(c, l.messages), l.messages = c;
    } else
      l.messages = this.messages();
    var u = {}, g = l.keys || Object.keys(this.rules);
    g.forEach(function(h) {
      var N = s.rules[h], b = i[h];
      N.forEach(function(w) {
        var p = w;
        typeof p.transform == "function" && (i === n && (i = Ee({}, i)), b = i[h] = p.transform(b)), typeof p == "function" ? p = {
          validator: p
        } : p = Ee({}, p), p.validator = s.getValidationMethod(p), p.validator && (p.field = h, p.fullField = p.fullField || h, p.type = s.getType(p), u[h] = u[h] || [], u[h].push({
          rule: p,
          value: b,
          source: i,
          field: h
        }));
      });
    });
    var v = {};
    return oa(u, l, function(h, N) {
      var b = h.rule, w = (b.type === "object" || b.type === "array") && (typeof b.fields == "object" || typeof b.defaultField == "object");
      w = w && (b.required || !b.required && h.value), b.field = h.field;
      function p(F, j) {
        return Ee({}, j, {
          fullField: b.fullField + "." + F,
          fullFields: b.fullFields ? [].concat(b.fullFields, [F]) : [F]
        });
      }
      function $(F) {
        F === void 0 && (F = []);
        var j = Array.isArray(F) ? F : [F];
        !l.suppressWarning && j.length && t.warning("async-validator:", j), j.length && b.message !== void 0 && (j = [].concat(b.message));
        var P = j.map(un(b, i));
        if (l.first && P.length)
          return v[b.field] = 1, N(P);
        if (!w)
          N(P);
        else {
          if (b.required && !h.value)
            return b.message !== void 0 ? P = [].concat(b.message).map(un(b, i)) : l.error && (P = [l.error(b, se(l.messages.required, b.field))]), N(P);
          var _ = {};
          b.defaultField && Object.keys(h.value).map(function(z) {
            _[z] = b.defaultField;
          }), _ = Ee({}, _, h.rule.fields);
          var A = {};
          Object.keys(_).forEach(function(z) {
            var y = _[z], E = Array.isArray(y) ? y : [y];
            A[z] = E.map(p.bind(null, z));
          });
          var O = new t(A);
          O.messages(l.messages), h.rule.options && (h.rule.options.messages = l.messages, h.rule.options.error = l.error), O.validate(h.value, h.rule.options || l, function(z) {
            var y = [];
            P && P.length && y.push.apply(y, P), z && z.length && y.push.apply(y, z), N(y.length ? y : null);
          });
        }
      }
      var S;
      if (b.asyncValidator)
        S = b.asyncValidator(b, h.value, $, h.source, l);
      else if (b.validator) {
        try {
          S = b.validator(b, h.value, $, h.source, l);
        } catch (F) {
          console.error == null || console.error(F), l.suppressValidatorError || setTimeout(function() {
            throw F;
          }, 0), $(F.message);
        }
        S === !0 ? $() : S === !1 ? $(typeof b.message == "function" ? b.message(b.fullField || b.field) : b.message || (b.fullField || b.field) + " fails") : S instanceof Array ? $(S) : S instanceof Error && $(S.message);
      }
      S && S.then && S.then(function() {
        return $();
      }, function(F) {
        return $(F);
      });
    }, function(h) {
      f(h);
    }, i);
  }, e.getType = function(n) {
    if (n.type === void 0 && n.pattern instanceof RegExp && (n.type = "pattern"), typeof n.validator != "function" && n.type && !Re.hasOwnProperty(n.type))
      throw new Error(se("Unknown rule type %s", n.type));
    return n.type || "string";
  }, e.getValidationMethod = function(n) {
    if (typeof n.validator == "function")
      return n.validator;
    var o = Object.keys(n), a = o.indexOf("message");
    return a !== -1 && o.splice(a, 1), o.length === 1 && o[0] === "required" ? Re.required : Re[this.getType(n)] || void 0;
  }, t;
}();
Je.register = function(e, r) {
  if (typeof r != "function")
    throw new Error("Cannot register a validator by type, validator is not a function");
  Re[e] = r;
};
Je.warning = ea;
Je.messages = Lt;
Je.validators = Re;
const Aa = [
  "",
  "error",
  "validating",
  "success"
], Da = De({
  label: String,
  labelWidth: {
    type: [String, Number],
    default: ""
  },
  prop: {
    type: $e([String, Array])
  },
  required: {
    type: Boolean,
    default: void 0
  },
  rules: {
    type: $e([Object, Array])
  },
  error: String,
  validateStatus: {
    type: String,
    values: Aa
  },
  for: String,
  inlineMessage: {
    type: [String, Boolean],
    default: ""
  },
  showMessage: {
    type: Boolean,
    default: !0
  },
  size: {
    type: String,
    values: wn
  }
}), hn = "ElLabelWrap";
var Ta = Y({
  name: hn,
  props: {
    isAutoWidth: Boolean,
    updateAll: Boolean
  },
  setup(t, {
    slots: e
  }) {
    const r = le(Rt, void 0), n = le(ht);
    n || vn(hn, "usage: <el-form-item><label-wrap /></el-form-item>");
    const o = te("form"), a = I(), s = I(0), i = () => {
      var f;
      if ((f = a.value) != null && f.firstElementChild) {
        const c = window.getComputedStyle(a.value.firstElementChild).width;
        return Math.ceil(Number.parseFloat(c));
      } else
        return 0;
    }, l = (f = "update") => {
      me(() => {
        e.default && t.isAutoWidth && (f === "update" ? s.value = i() : f === "remove" && (r == null || r.deregisterLabelWidth(s.value)));
      });
    }, m = () => l("update");
    return pe(() => {
      m();
    }), jt(() => {
      l("remove");
    }), Ht(() => m()), H(s, (f, c) => {
      t.updateAll && (r == null || r.registerLabelWidth(f, c));
    }), ir(V(() => {
      var f, c;
      return (c = (f = a.value) == null ? void 0 : f.firstElementChild) != null ? c : null;
    }), m), () => {
      var f, c;
      if (!e)
        return null;
      const {
        isAutoWidth: u
      } = t;
      if (u) {
        const g = r == null ? void 0 : r.autoLabelWidth, v = n == null ? void 0 : n.hasLabel, h = {};
        if (v && g && g !== "auto") {
          const N = Math.max(0, Number.parseInt(g, 10) - s.value), b = r.labelPosition === "left" ? "marginRight" : "marginLeft";
          N && (h[b] = `${N}px`);
        }
        return x("div", {
          ref: a,
          class: [o.be("item", "label-wrap")],
          style: h
        }, [(f = e.default) == null ? void 0 : f.call(e)]);
      } else
        return x(Ge, {
          ref: a
        }, [(c = e.default) == null ? void 0 : c.call(e)]);
    };
  }
});
const Ma = ["role", "aria-labelledby"], Fa = Y({
  name: "ElFormItem"
}), Ia = /* @__PURE__ */ Y({
  ...Fa,
  props: Da,
  setup(t, { expose: e }) {
    const r = t, n = Dn(), o = le(Rt, void 0), a = le(ht, void 0), s = gt(void 0, { formItem: !1 }), i = te("form-item"), l = At().value, m = I([]), f = I(""), c = lr(f, 100), u = I(""), g = I();
    let v, h = !1;
    const N = V(() => {
      if ((o == null ? void 0 : o.labelPosition) === "top")
        return {};
      const T = je(r.labelWidth || (o == null ? void 0 : o.labelWidth) || "");
      return T ? { width: T } : {};
    }), b = V(() => {
      if ((o == null ? void 0 : o.labelPosition) === "top" || o != null && o.inline)
        return {};
      if (!r.label && !r.labelWidth && _)
        return {};
      const T = je(r.labelWidth || (o == null ? void 0 : o.labelWidth) || "");
      return !r.label && !n.label ? { marginLeft: T } : {};
    }), w = V(() => [
      i.b(),
      i.m(s.value),
      i.is("error", f.value === "error"),
      i.is("validating", f.value === "validating"),
      i.is("success", f.value === "success"),
      i.is("required", E.value || r.required),
      i.is("no-asterisk", o == null ? void 0 : o.hideRequiredAsterisk),
      (o == null ? void 0 : o.requireAsteriskPosition) === "right" ? "asterisk-right" : "asterisk-left",
      { [i.m("feedback")]: o == null ? void 0 : o.statusIcon }
    ]), p = V(() => Bt(r.inlineMessage) ? r.inlineMessage : (o == null ? void 0 : o.inlineMessage) || !1), $ = V(() => [
      i.e("error"),
      { [i.em("error", "inline")]: p.value }
    ]), S = V(() => r.prop ? ge(r.prop) ? r.prop : r.prop.join(".") : ""), F = V(() => !!(r.label || n.label)), j = V(() => r.for || m.value.length === 1 ? m.value[0] : void 0), P = V(() => !j.value && F.value), _ = !!a, A = V(() => {
      const T = o == null ? void 0 : o.model;
      if (!(!T || !r.prop))
        return wt(T, r.prop).value;
    }), O = V(() => {
      const { required: T } = r, R = [];
      r.rules && R.push(...Tt(r.rules));
      const ne = o == null ? void 0 : o.rules;
      if (ne && r.prop) {
        const ee = wt(ne, r.prop).value;
        ee && R.push(...Tt(ee));
      }
      if (T !== void 0) {
        const ee = R.map((de, Me) => [de, Me]).filter(([de]) => Object.keys(de).includes("required"));
        if (ee.length > 0)
          for (const [de, Me] of ee)
            de.required !== T && (R[Me] = { ...de, required: T });
        else
          R.push({ required: T });
      }
      return R;
    }), z = V(() => O.value.length > 0), y = (T) => O.value.filter((ne) => !ne.trigger || !T ? !0 : Array.isArray(ne.trigger) ? ne.trigger.includes(T) : ne.trigger === T).map(({ trigger: ne, ...ee }) => ee), E = V(() => O.value.some((T) => T.required)), L = V(() => {
      var T;
      return c.value === "error" && r.showMessage && ((T = o == null ? void 0 : o.showMessage) != null ? T : !0);
    }), X = V(() => `${r.label || ""}${(o == null ? void 0 : o.labelSuffix) || ""}`), C = (T) => {
      f.value = T;
    }, k = (T) => {
      var R, ne;
      const { errors: ee, fields: de } = T;
      (!ee || !de) && console.error(T), C("error"), u.value = ee ? (ne = (R = ee == null ? void 0 : ee[0]) == null ? void 0 : R.message) != null ? ne : `${r.prop} is required` : "", o == null || o.emit("validate", r.prop, !1, u.value);
    }, U = () => {
      C("success"), o == null || o.emit("validate", r.prop, !0, "");
    }, Z = async (T) => {
      const R = S.value;
      return new Je({
        [R]: T
      }).validate({ [R]: A.value }, { firstFields: !0 }).then(() => (U(), !0)).catch((ee) => (k(ee), Promise.reject(ee)));
    }, Q = async (T, R) => {
      if (h || !r.prop)
        return !1;
      const ne = Se(R);
      if (!z.value)
        return R == null || R(!1), !1;
      const ee = y(T);
      return ee.length === 0 ? (R == null || R(!0), !0) : (C("validating"), Z(ee).then(() => (R == null || R(!0), !0)).catch((de) => {
        const { fields: Me } = de;
        return R == null || R(!1, Me), ne ? !1 : Promise.reject(Me);
      }));
    }, Te = () => {
      C(""), u.value = "", h = !1;
    }, Ut = async () => {
      const T = o == null ? void 0 : o.model;
      if (!T || !r.prop)
        return;
      const R = wt(T, r.prop);
      h = !0, R.value = Qt(v), await me(), Te(), h = !1;
    }, Bn = (T) => {
      m.value.includes(T) || m.value.push(T);
    }, Rn = (T) => {
      m.value = m.value.filter((R) => R !== T);
    };
    H(() => r.error, (T) => {
      u.value = T || "", C(T ? "error" : "");
    }, { immediate: !0 }), H(() => r.validateStatus, (T) => C(T || ""));
    const kt = Ze({
      ...Tn(r),
      $el: g,
      size: s,
      validateState: f,
      labelId: l,
      inputIds: m,
      isGroup: P,
      hasLabel: F,
      addInputId: Bn,
      removeInputId: Rn,
      resetField: Ut,
      clearValidate: Te,
      validate: Q
    });
    return ve(ht, kt), pe(() => {
      r.prop && (o == null || o.addField(kt), v = Qt(A.value));
    }), jt(() => {
      o == null || o.removeField(kt);
    }), e({
      size: s,
      validateMessage: u,
      validateState: f,
      validate: Q,
      clearValidate: Te,
      resetField: Ut
    }), (T, R) => {
      var ne;
      return M(), W("div", {
        ref_key: "formItemRef",
        ref: g,
        class: D(d(w)),
        role: d(P) ? "group" : void 0,
        "aria-labelledby": d(P) ? d(l) : void 0
      }, [
        x(d(Ta), {
          "is-auto-width": d(N).width === "auto",
          "update-all": ((ne = d(o)) == null ? void 0 : ne.labelWidth) === "auto"
        }, {
          default: q(() => [
            d(F) ? (M(), G(zt(d(j) ? "label" : "div"), {
              key: 0,
              id: d(l),
              for: d(j),
              class: D(d(i).e("label")),
              style: ie(d(N))
            }, {
              default: q(() => [
                oe(T.$slots, "label", { label: d(X) }, () => [
                  mt(Ae(d(X)), 1)
                ])
              ]),
              _: 3
            }, 8, ["id", "for", "class", "style"])) : re("v-if", !0)
          ]),
          _: 3
        }, 8, ["is-auto-width", "update-all"]),
        B("div", {
          class: D(d(i).e("content")),
          style: ie(d(b))
        }, [
          oe(T.$slots, "default"),
          x(Tr, {
            name: `${d(i).namespace.value}-zoom-in-top`
          }, {
            default: q(() => [
              d(L) ? oe(T.$slots, "error", {
                key: 0,
                error: u.value
              }, () => [
                B("div", {
                  class: D(d($))
                }, Ae(u.value), 3)
              ]) : re("v-if", !0)
            ]),
            _: 3
          }, 8, ["name"])
        ], 6)
      ], 10, Ma);
    };
  }
});
var Pn = /* @__PURE__ */ ae(Ia, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/form/src/form-item.vue"]]);
const xa = bt(Xo, {
  FormItem: Pn
}), Oa = dr(Pn), La = De({
  id: {
    type: String,
    default: void 0
  },
  step: {
    type: Number,
    default: 1
  },
  stepStrictly: Boolean,
  max: {
    type: Number,
    default: Number.POSITIVE_INFINITY
  },
  min: {
    type: Number,
    default: Number.NEGATIVE_INFINITY
  },
  modelValue: Number,
  readonly: Boolean,
  disabled: Boolean,
  size: yn,
  controls: {
    type: Boolean,
    default: !0
  },
  controlsPosition: {
    type: String,
    default: "",
    values: ["", "right"]
  },
  valueOnClear: {
    type: [String, Number, null],
    validator: (t) => t === null || ue(t) || ["min", "max"].includes(t),
    default: null
  },
  name: String,
  label: String,
  placeholder: String,
  precision: {
    type: Number,
    validator: (t) => t >= 0 && t === Number.parseInt(`${t}`, 10)
  },
  validateEvent: {
    type: Boolean,
    default: !0
  }
}), Va = {
  [qt]: (t, e) => e !== t,
  blur: (t) => t instanceof FocusEvent,
  focus: (t) => t instanceof FocusEvent,
  [at]: (t) => ue(t) || ye(t),
  [he]: (t) => ue(t) || ye(t)
}, Pa = ["aria-label", "onKeydown"], Ka = ["aria-label", "onKeydown"], qa = Y({
  name: "ElInputNumber"
}), Ba = /* @__PURE__ */ Y({
  ...qa,
  props: La,
  emits: Va,
  setup(t, { expose: e, emit: r }) {
    const n = t, { t: o } = vt(), a = te("input-number"), s = I(), i = Ze({
      currentValue: n.modelValue,
      userInput: null
    }), { formItem: l } = bn(), m = V(() => ue(n.modelValue) && n.modelValue <= n.min), f = V(() => ue(n.modelValue) && n.modelValue >= n.max), c = V(() => {
      const y = b(n.step);
      return Qe(n.precision) ? Math.max(b(n.modelValue), y) : (y > n.precision, n.precision);
    }), u = V(() => n.controls && n.controlsPosition === "right"), g = gt(), v = Nn(), h = V(() => {
      if (i.userInput !== null)
        return i.userInput;
      let y = i.currentValue;
      if (ye(y))
        return "";
      if (ue(y)) {
        if (Number.isNaN(y))
          return "";
        Qe(n.precision) || (y = y.toFixed(n.precision));
      }
      return y;
    }), N = (y, E) => {
      if (Qe(E) && (E = c.value), E === 0)
        return Math.round(y);
      let L = String(y);
      const X = L.indexOf(".");
      if (X === -1 || !L.replace(".", "").split("")[X + E])
        return y;
      const U = L.length;
      return L.charAt(U - 1) === "5" && (L = `${L.slice(0, Math.max(0, U - 1))}6`), Number.parseFloat(Number(L).toFixed(E));
    }, b = (y) => {
      if (ye(y))
        return 0;
      const E = y.toString(), L = E.indexOf(".");
      let X = 0;
      return L !== -1 && (X = E.length - L - 1), X;
    }, w = (y, E = 1) => ue(y) ? N(y + n.step * E) : i.currentValue, p = () => {
      if (n.readonly || v.value || f.value)
        return;
      const y = Number(h.value) || 0, E = w(y);
      F(E), r(at, i.currentValue);
    }, $ = () => {
      if (n.readonly || v.value || m.value)
        return;
      const y = Number(h.value) || 0, E = w(y, -1);
      F(E), r(at, i.currentValue);
    }, S = (y, E) => {
      const { max: L, min: X, step: C, precision: k, stepStrictly: U, valueOnClear: Z } = n;
      let Q = Number(y);
      if (ye(y) || Number.isNaN(Q))
        return null;
      if (y === "") {
        if (Z === null)
          return null;
        Q = ge(Z) ? { min: X, max: L }[Z] : Z;
      }
      return U && (Q = N(Math.round(Q / C) * C, k)), Qe(k) || (Q = N(Q, k)), (Q > L || Q < X) && (Q = Q > L ? L : X, E && r(he, Q)), Q;
    }, F = (y, E = !0) => {
      var L;
      const X = i.currentValue, C = S(y);
      if (X !== C) {
        if (!E) {
          r(he, C);
          return;
        }
        i.userInput = null, r(he, C), r(qt, C, X), n.validateEvent && ((L = l == null ? void 0 : l.validate) == null || L.call(l, "change").catch((k) => He())), i.currentValue = C;
      }
    }, j = (y) => {
      i.userInput = y;
      const E = y === "" ? null : Number(y);
      r(at, E), F(E, !1);
    }, P = (y) => {
      const E = y !== "" ? Number(y) : "";
      (ue(E) && !Number.isNaN(E) || y === "") && F(E), i.userInput = null;
    }, _ = () => {
      var y, E;
      (E = (y = s.value) == null ? void 0 : y.focus) == null || E.call(y);
    }, A = () => {
      var y, E;
      (E = (y = s.value) == null ? void 0 : y.blur) == null || E.call(y);
    }, O = (y) => {
      r("focus", y);
    }, z = (y) => {
      var E;
      r("blur", y), n.validateEvent && ((E = l == null ? void 0 : l.validate) == null || E.call(l, "blur").catch((L) => He()));
    };
    return H(() => n.modelValue, (y) => {
      const E = S(i.userInput), L = S(y, !0);
      !ue(E) && (!E || E !== L) && (i.currentValue = L, i.userInput = null);
    }, { immediate: !0 }), pe(() => {
      var y;
      const { min: E, max: L, modelValue: X } = n, C = (y = s.value) == null ? void 0 : y.input;
      if (C.setAttribute("role", "spinbutton"), Number.isFinite(L) ? C.setAttribute("aria-valuemax", String(L)) : C.removeAttribute("aria-valuemax"), Number.isFinite(E) ? C.setAttribute("aria-valuemin", String(E)) : C.removeAttribute("aria-valuemin"), C.setAttribute("aria-valuenow", String(i.currentValue)), C.setAttribute("aria-disabled", String(v.value)), !ue(X) && X != null) {
        let k = Number(X);
        Number.isNaN(k) && (k = null), r(he, k);
      }
    }), Ht(() => {
      var y;
      const E = (y = s.value) == null ? void 0 : y.input;
      E == null || E.setAttribute("aria-valuenow", `${i.currentValue}`);
    }), e({
      focus: _,
      blur: A
    }), (y, E) => (M(), W("div", {
      class: D([
        d(a).b(),
        d(a).m(d(g)),
        d(a).is("disabled", d(v)),
        d(a).is("without-controls", !y.controls),
        d(a).is("controls-right", d(u))
      ]),
      onDragstart: E[0] || (E[0] = ce(() => {
      }, ["prevent"]))
    }, [
      y.controls ? be((M(), W("span", {
        key: 0,
        role: "button",
        "aria-label": d(o)("el.inputNumber.decrease"),
        class: D([d(a).e("decrease"), d(a).is("disabled", d(m))]),
        onKeydown: Ie($, ["enter"])
      }, [
        x(d(Le), null, {
          default: q(() => [
            d(u) ? (M(), G(d(Cn), { key: 0 })) : (M(), G(d(ur), { key: 1 }))
          ]),
          _: 1
        })
      ], 42, Pa)), [
        [d(nn), $]
      ]) : re("v-if", !0),
      y.controls ? be((M(), W("span", {
        key: 1,
        role: "button",
        "aria-label": d(o)("el.inputNumber.increase"),
        class: D([d(a).e("increase"), d(a).is("disabled", d(f))]),
        onKeydown: Ie(p, ["enter"])
      }, [
        x(d(Le), null, {
          default: q(() => [
            d(u) ? (M(), G(d(cr), { key: 0 })) : (M(), G(d(fr), { key: 1 }))
          ]),
          _: 1
        })
      ], 42, Ka)), [
        [d(nn), p]
      ]) : re("v-if", !0),
      x(d(yt), {
        id: y.id,
        ref_key: "input",
        ref: s,
        type: "number",
        step: y.step,
        "model-value": d(h),
        placeholder: y.placeholder,
        readonly: y.readonly,
        disabled: d(v),
        size: d(g),
        max: y.max,
        min: y.min,
        name: y.name,
        label: y.label,
        "validate-event": !1,
        onKeydown: [
          Ie(ce(p, ["prevent"]), ["up"]),
          Ie(ce($, ["prevent"]), ["down"])
        ],
        onBlur: z,
        onFocus: O,
        onInput: j,
        onChange: P
      }, null, 8, ["id", "step", "model-value", "placeholder", "readonly", "disabled", "size", "max", "min", "name", "label", "onKeydown"])
    ], 34));
  }
});
var Ra = /* @__PURE__ */ ae(Ba, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/input-number/src/input-number.vue"]]);
const ja = bt(Ra), Oe = "$treeNodeId", pn = function(t, e) {
  !e || e[Oe] || Object.defineProperty(e, Oe, {
    value: t.id,
    enumerable: !1,
    configurable: !1,
    writable: !1
  });
}, Yt = function(t, e) {
  return t ? e[t] : e[Oe];
}, Vt = (t, e, r) => {
  const n = t.value.currentNode;
  r();
  const o = t.value.currentNode;
  n !== o && e("current-change", o ? o.data : null, o);
}, Pt = (t) => {
  let e = !0, r = !0, n = !0;
  for (let o = 0, a = t.length; o < a; o++) {
    const s = t[o];
    (s.checked !== !0 || s.indeterminate) && (e = !1, s.disabled || (n = !1)), (s.checked !== !1 || s.indeterminate) && (r = !1);
  }
  return { all: e, none: r, allWithoutDisable: n, half: !e && !r };
}, ct = function(t) {
  if (t.childNodes.length === 0 || t.loading)
    return;
  const { all: e, none: r, half: n } = Pt(t.childNodes);
  e ? (t.checked = !0, t.indeterminate = !1) : n ? (t.checked = !1, t.indeterminate = !0) : r && (t.checked = !1, t.indeterminate = !1);
  const o = t.parent;
  !o || o.level === 0 || t.store.checkStrictly || ct(o);
}, nt = function(t, e) {
  const r = t.store.props, n = t.data || {}, o = r[e];
  if (typeof o == "function")
    return o(n, t);
  if (typeof o == "string")
    return n[o];
  if (typeof o > "u") {
    const a = n[e];
    return a === void 0 ? "" : a;
  }
};
let za = 0;
class _e {
  constructor(e) {
    this.id = za++, this.text = null, this.checked = !1, this.indeterminate = !1, this.data = null, this.expanded = !1, this.parent = null, this.visible = !0, this.isCurrent = !1, this.canFocus = !1;
    for (const r in e)
      ze(e, r) && (this[r] = e[r]);
    this.level = 0, this.loaded = !1, this.childNodes = [], this.loading = !1, this.parent && (this.level = this.parent.level + 1);
  }
  initialize() {
    const e = this.store;
    if (!e)
      throw new Error("[Node]store is required!");
    e.registerNode(this);
    const r = e.props;
    if (r && typeof r.isLeaf < "u") {
      const a = nt(this, "isLeaf");
      typeof a == "boolean" && (this.isLeafByUser = a);
    }
    if (e.lazy !== !0 && this.data ? (this.setData(this.data), e.defaultExpandAll && (this.expanded = !0, this.canFocus = !0)) : this.level > 0 && e.lazy && e.defaultExpandAll && this.expand(), Array.isArray(this.data) || pn(this, this.data), !this.data)
      return;
    const n = e.defaultExpandedKeys, o = e.key;
    o && n && n.includes(this.key) && this.expand(null, e.autoExpandParent), o && e.currentNodeKey !== void 0 && this.key === e.currentNodeKey && (e.currentNode = this, e.currentNode.isCurrent = !0), e.lazy && e._initDefaultCheckedNode(this), this.updateLeafState(), this.parent && (this.level === 1 || this.parent.expanded === !0) && (this.canFocus = !0);
  }
  setData(e) {
    Array.isArray(e) || pn(this, e), this.data = e, this.childNodes = [];
    let r;
    this.level === 0 && Array.isArray(this.data) ? r = this.data : r = nt(this, "children") || [];
    for (let n = 0, o = r.length; n < o; n++)
      this.insertChild({ data: r[n] });
  }
  get label() {
    return nt(this, "label");
  }
  get key() {
    const e = this.store.key;
    return this.data ? this.data[e] : null;
  }
  get disabled() {
    return nt(this, "disabled");
  }
  get nextSibling() {
    const e = this.parent;
    if (e) {
      const r = e.childNodes.indexOf(this);
      if (r > -1)
        return e.childNodes[r + 1];
    }
    return null;
  }
  get previousSibling() {
    const e = this.parent;
    if (e) {
      const r = e.childNodes.indexOf(this);
      if (r > -1)
        return r > 0 ? e.childNodes[r - 1] : null;
    }
    return null;
  }
  contains(e, r = !0) {
    return (this.childNodes || []).some((n) => n === e || r && n.contains(e));
  }
  remove() {
    const e = this.parent;
    e && e.removeChild(this);
  }
  insertChild(e, r, n) {
    if (!e)
      throw new Error("InsertChild error: child is required.");
    if (!(e instanceof _e)) {
      if (!n) {
        const o = this.getChildren(!0);
        o.includes(e.data) || (typeof r > "u" || r < 0 ? o.push(e.data) : o.splice(r, 0, e.data));
      }
      Object.assign(e, {
        parent: this,
        store: this.store
      }), e = Ze(new _e(e)), e instanceof _e && e.initialize();
    }
    e.level = this.level + 1, typeof r > "u" || r < 0 ? this.childNodes.push(e) : this.childNodes.splice(r, 0, e), this.updateLeafState();
  }
  insertBefore(e, r) {
    let n;
    r && (n = this.childNodes.indexOf(r)), this.insertChild(e, n);
  }
  insertAfter(e, r) {
    let n;
    r && (n = this.childNodes.indexOf(r), n !== -1 && (n += 1)), this.insertChild(e, n);
  }
  removeChild(e) {
    const r = this.getChildren() || [], n = r.indexOf(e.data);
    n > -1 && r.splice(n, 1);
    const o = this.childNodes.indexOf(e);
    o > -1 && (this.store && this.store.deregisterNode(e), e.parent = null, this.childNodes.splice(o, 1)), this.updateLeafState();
  }
  removeChildByData(e) {
    let r = null;
    for (let n = 0; n < this.childNodes.length; n++)
      if (this.childNodes[n].data === e) {
        r = this.childNodes[n];
        break;
      }
    r && this.removeChild(r);
  }
  expand(e, r) {
    const n = () => {
      if (r) {
        let o = this.parent;
        for (; o.level > 0; )
          o.expanded = !0, o = o.parent;
      }
      this.expanded = !0, e && e(), this.childNodes.forEach((o) => {
        o.canFocus = !0;
      });
    };
    this.shouldLoadData() ? this.loadData((o) => {
      Array.isArray(o) && (this.checked ? this.setChecked(!0, !0) : this.store.checkStrictly || ct(this), n());
    }) : n();
  }
  doCreateChildren(e, r = {}) {
    e.forEach((n) => {
      this.insertChild(Object.assign({ data: n }, r), void 0, !0);
    });
  }
  collapse() {
    this.expanded = !1, this.childNodes.forEach((e) => {
      e.canFocus = !1;
    });
  }
  shouldLoadData() {
    return this.store.lazy === !0 && this.store.load && !this.loaded;
  }
  updateLeafState() {
    if (this.store.lazy === !0 && this.loaded !== !0 && typeof this.isLeafByUser < "u") {
      this.isLeaf = this.isLeafByUser;
      return;
    }
    const e = this.childNodes;
    if (!this.store.lazy || this.store.lazy === !0 && this.loaded === !0) {
      this.isLeaf = !e || e.length === 0;
      return;
    }
    this.isLeaf = !1;
  }
  setChecked(e, r, n, o) {
    if (this.indeterminate = e === "half", this.checked = e === !0, this.store.checkStrictly)
      return;
    if (!(this.shouldLoadData() && !this.store.checkDescendants)) {
      const { all: s, allWithoutDisable: i } = Pt(this.childNodes);
      !this.isLeaf && !s && i && (this.checked = !1, e = !1);
      const l = () => {
        if (r) {
          const m = this.childNodes;
          for (let u = 0, g = m.length; u < g; u++) {
            const v = m[u];
            o = o || e !== !1;
            const h = v.disabled ? v.checked : o;
            v.setChecked(h, r, !0, o);
          }
          const { half: f, all: c } = Pt(m);
          c || (this.checked = c, this.indeterminate = f);
        }
      };
      if (this.shouldLoadData()) {
        this.loadData(() => {
          l(), ct(this);
        }, {
          checked: e !== !1
        });
        return;
      } else
        l();
    }
    const a = this.parent;
    !a || a.level === 0 || n || ct(a);
  }
  getChildren(e = !1) {
    if (this.level === 0)
      return this.data;
    const r = this.data;
    if (!r)
      return null;
    const n = this.store.props;
    let o = "children";
    return n && (o = n.children || "children"), r[o] === void 0 && (r[o] = null), e && !r[o] && (r[o] = []), r[o];
  }
  updateChildren() {
    const e = this.getChildren() || [], r = this.childNodes.map((a) => a.data), n = {}, o = [];
    e.forEach((a, s) => {
      const i = a[Oe];
      !!i && r.findIndex((m) => m[Oe] === i) >= 0 ? n[i] = { index: s, data: a } : o.push({ index: s, data: a });
    }), this.store.lazy || r.forEach((a) => {
      n[a[Oe]] || this.removeChildByData(a);
    }), o.forEach(({ index: a, data: s }) => {
      this.insertChild({ data: s }, a);
    }), this.updateLeafState();
  }
  loadData(e, r = {}) {
    if (this.store.lazy === !0 && this.store.load && !this.loaded && (!this.loading || Object.keys(r).length)) {
      this.loading = !0;
      const n = (o) => {
        this.childNodes = [], this.doCreateChildren(o, r), this.loaded = !0, this.loading = !1, this.updateLeafState(), e && e.call(this, o);
      };
      this.store.load(this, n);
    } else
      e && e.call(this);
  }
}
class Ha {
  constructor(e) {
    this.currentNode = null, this.currentNodeKey = null;
    for (const r in e)
      ze(e, r) && (this[r] = e[r]);
    this.nodesMap = {};
  }
  initialize() {
    if (this.root = new _e({
      data: this.data,
      store: this
    }), this.root.initialize(), this.lazy && this.load) {
      const e = this.load;
      e(this.root, (r) => {
        this.root.doCreateChildren(r), this._initDefaultCheckedNodes();
      });
    } else
      this._initDefaultCheckedNodes();
  }
  filter(e) {
    const r = this.filterNodeMethod, n = this.lazy, o = function(a) {
      const s = a.root ? a.root.childNodes : a.childNodes;
      if (s.forEach((i) => {
        i.visible = r.call(i, e, i.data, i), o(i);
      }), !a.visible && s.length) {
        let i = !0;
        i = !s.some((l) => l.visible), a.root ? a.root.visible = i === !1 : a.visible = i === !1;
      }
      e && a.visible && !a.isLeaf && !n && a.expand();
    };
    o(this);
  }
  setData(e) {
    e !== this.root.data ? (this.root.setData(e), this._initDefaultCheckedNodes()) : this.root.updateChildren();
  }
  getNode(e) {
    if (e instanceof _e)
      return e;
    const r = hr(e) ? Yt(this.key, e) : e;
    return this.nodesMap[r] || null;
  }
  insertBefore(e, r) {
    const n = this.getNode(r);
    n.parent.insertBefore({ data: e }, n);
  }
  insertAfter(e, r) {
    const n = this.getNode(r);
    n.parent.insertAfter({ data: e }, n);
  }
  remove(e) {
    const r = this.getNode(e);
    r && r.parent && (r === this.currentNode && (this.currentNode = null), r.parent.removeChild(r));
  }
  append(e, r) {
    const n = r ? this.getNode(r) : this.root;
    n && n.insertChild({ data: e });
  }
  _initDefaultCheckedNodes() {
    const e = this.defaultCheckedKeys || [], r = this.nodesMap;
    e.forEach((n) => {
      const o = r[n];
      o && o.setChecked(!0, !this.checkStrictly);
    });
  }
  _initDefaultCheckedNode(e) {
    (this.defaultCheckedKeys || []).includes(e.key) && e.setChecked(!0, !this.checkStrictly);
  }
  setDefaultCheckedKey(e) {
    e !== this.defaultCheckedKeys && (this.defaultCheckedKeys = e, this._initDefaultCheckedNodes());
  }
  registerNode(e) {
    const r = this.key;
    !e || !e.data || (r ? e.key !== void 0 && (this.nodesMap[e.key] = e) : this.nodesMap[e.id] = e);
  }
  deregisterNode(e) {
    !this.key || !e || !e.data || (e.childNodes.forEach((n) => {
      this.deregisterNode(n);
    }), delete this.nodesMap[e.key]);
  }
  getCheckedNodes(e = !1, r = !1) {
    const n = [], o = function(a) {
      (a.root ? a.root.childNodes : a.childNodes).forEach((i) => {
        (i.checked || r && i.indeterminate) && (!e || e && i.isLeaf) && n.push(i.data), o(i);
      });
    };
    return o(this), n;
  }
  getCheckedKeys(e = !1) {
    return this.getCheckedNodes(e).map((r) => (r || {})[this.key]);
  }
  getHalfCheckedNodes() {
    const e = [], r = function(n) {
      (n.root ? n.root.childNodes : n.childNodes).forEach((a) => {
        a.indeterminate && e.push(a.data), r(a);
      });
    };
    return r(this), e;
  }
  getHalfCheckedKeys() {
    return this.getHalfCheckedNodes().map((e) => (e || {})[this.key]);
  }
  _getAllNodes() {
    const e = [], r = this.nodesMap;
    for (const n in r)
      ze(r, n) && e.push(r[n]);
    return e;
  }
  updateChildren(e, r) {
    const n = this.nodesMap[e];
    if (!n)
      return;
    const o = n.childNodes;
    for (let a = o.length - 1; a >= 0; a--) {
      const s = o[a];
      this.remove(s.data);
    }
    for (let a = 0, s = r.length; a < s; a++) {
      const i = r[a];
      this.append(i, n.data);
    }
  }
  _setCheckedKeys(e, r = !1, n) {
    const o = this._getAllNodes().sort((i, l) => l.level - i.level), a = /* @__PURE__ */ Object.create(null), s = Object.keys(n);
    o.forEach((i) => i.setChecked(!1, !1));
    for (let i = 0, l = o.length; i < l; i++) {
      const m = o[i], f = m.data[e].toString();
      if (!s.includes(f)) {
        m.checked && !a[f] && m.setChecked(!1, !1);
        continue;
      }
      let u = m.parent;
      for (; u && u.level > 0; )
        a[u.data[e]] = !0, u = u.parent;
      if (m.isLeaf || this.checkStrictly) {
        m.setChecked(!0, !1);
        continue;
      }
      if (m.setChecked(!0, !0), r) {
        m.setChecked(!1, !1);
        const g = function(v) {
          v.childNodes.forEach((N) => {
            N.isLeaf || N.setChecked(!1, !1), g(N);
          });
        };
        g(m);
      }
    }
  }
  setCheckedNodes(e, r = !1) {
    const n = this.key, o = {};
    e.forEach((a) => {
      o[(a || {})[n]] = !0;
    }), this._setCheckedKeys(n, r, o);
  }
  setCheckedKeys(e, r = !1) {
    this.defaultCheckedKeys = e;
    const n = this.key, o = {};
    e.forEach((a) => {
      o[a] = !0;
    }), this._setCheckedKeys(n, r, o);
  }
  setDefaultExpandedKeys(e) {
    e = e || [], this.defaultExpandedKeys = e, e.forEach((r) => {
      const n = this.getNode(r);
      n && n.expand(null, this.autoExpandParent);
    });
  }
  setChecked(e, r, n) {
    const o = this.getNode(e);
    o && o.setChecked(!!r, n);
  }
  getCurrentNode() {
    return this.currentNode;
  }
  setCurrentNode(e) {
    const r = this.currentNode;
    r && (r.isCurrent = !1), this.currentNode = e, this.currentNode.isCurrent = !0;
  }
  setUserCurrentNode(e, r = !0) {
    const n = e[this.key], o = this.nodesMap[n];
    this.setCurrentNode(o), r && this.currentNode.level > 1 && this.currentNode.parent.expand(null, !0);
  }
  setCurrentNodeKey(e, r = !0) {
    if (e == null) {
      this.currentNode && (this.currentNode.isCurrent = !1), this.currentNode = null;
      return;
    }
    const n = this.getNode(e);
    n && (this.setCurrentNode(n), r && this.currentNode.level > 1 && this.currentNode.parent.expand(null, !0));
  }
}
const Wa = Y({
  name: "ElTreeNodeContent",
  props: {
    node: {
      type: Object,
      required: !0
    },
    renderContent: Function
  },
  setup(t) {
    const e = te("tree"), r = le("NodeInstance"), n = le("RootTree");
    return () => {
      const o = t.node, { data: a, store: s } = o;
      return t.renderContent ? t.renderContent(Dt, { _self: r, node: o, data: a, store: s }) : n.ctx.slots.default ? n.ctx.slots.default({ node: o, data: a }) : Dt("span", { class: e.be("node", "label") }, [o.label]);
    };
  }
});
var Ya = /* @__PURE__ */ ae(Wa, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tree/src/tree-node-content.vue"]]);
function Kn(t) {
  const e = le("TreeNodeMap", null), r = {
    treeNodeExpand: (n) => {
      t.node !== n && t.node.collapse();
    },
    children: []
  };
  return e && e.children.push(r), ve("TreeNodeMap", r), {
    broadcastExpanded: (n) => {
      if (t.accordion)
        for (const o of r.children)
          o.treeNodeExpand(n);
    }
  };
}
const qn = Symbol("dragEvents");
function Ua({ props: t, ctx: e, el$: r, dropIndicator$: n, store: o }) {
  const a = te("tree"), s = I({
    showDropIndicator: !1,
    draggingNode: null,
    dropNode: null,
    allowDrop: !0,
    dropType: null
  });
  return ve(qn, {
    treeNodeDragStart: ({ event: f, treeNode: c }) => {
      if (typeof t.allowDrag == "function" && !t.allowDrag(c.node))
        return f.preventDefault(), !1;
      f.dataTransfer.effectAllowed = "move";
      try {
        f.dataTransfer.setData("text/plain", "");
      } catch {
      }
      s.value.draggingNode = c, e.emit("node-drag-start", c.node, f);
    },
    treeNodeDragOver: ({ event: f, treeNode: c }) => {
      const u = c, g = s.value.dropNode;
      g && g !== u && ot(g.$el, a.is("drop-inner"));
      const v = s.value.draggingNode;
      if (!v || !u)
        return;
      let h = !0, N = !0, b = !0, w = !0;
      typeof t.allowDrop == "function" && (h = t.allowDrop(v.node, u.node, "prev"), w = N = t.allowDrop(v.node, u.node, "inner"), b = t.allowDrop(v.node, u.node, "next")), f.dataTransfer.dropEffect = N || h || b ? "move" : "none", (h || N || b) && g !== u && (g && e.emit("node-drag-leave", v.node, g.node, f), e.emit("node-drag-enter", v.node, u.node, f)), (h || N || b) && (s.value.dropNode = u), u.node.nextSibling === v.node && (b = !1), u.node.previousSibling === v.node && (h = !1), u.node.contains(v.node, !1) && (N = !1), (v.node === u.node || v.node.contains(u.node)) && (h = !1, N = !1, b = !1);
      const p = u.$el.getBoundingClientRect(), $ = r.value.getBoundingClientRect();
      let S;
      const F = h ? N ? 0.25 : b ? 0.45 : 1 : -1, j = b ? N ? 0.75 : h ? 0.55 : 0 : 1;
      let P = -9999;
      const _ = f.clientY - p.top;
      _ < p.height * F ? S = "before" : _ > p.height * j ? S = "after" : N ? S = "inner" : S = "none";
      const A = u.$el.querySelector(`.${a.be("node", "expand-icon")}`).getBoundingClientRect(), O = n.value;
      S === "before" ? P = A.top - $.top : S === "after" && (P = A.bottom - $.top), O.style.top = `${P}px`, O.style.left = `${A.right - $.left}px`, S === "inner" ? gn(u.$el, a.is("drop-inner")) : ot(u.$el, a.is("drop-inner")), s.value.showDropIndicator = S === "before" || S === "after", s.value.allowDrop = s.value.showDropIndicator || w, s.value.dropType = S, e.emit("node-drag-over", v.node, u.node, f);
    },
    treeNodeDragEnd: (f) => {
      const { draggingNode: c, dropType: u, dropNode: g } = s.value;
      if (f.preventDefault(), f.dataTransfer.dropEffect = "move", c && g) {
        const v = { data: c.node.data };
        u !== "none" && c.node.remove(), u === "before" ? g.node.parent.insertBefore(v, g.node) : u === "after" ? g.node.parent.insertAfter(v, g.node) : u === "inner" && g.node.insertChild(v), u !== "none" && o.value.registerNode(v), ot(g.$el, a.is("drop-inner")), e.emit("node-drag-end", c.node, g.node, u, f), u !== "none" && e.emit("node-drop", c.node, g.node, u, f);
      }
      c && !g && e.emit("node-drag-end", c.node, null, u, f), s.value.showDropIndicator = !1, s.value.draggingNode = null, s.value.dropNode = null, s.value.allowDrop = !0;
    }
  }), {
    dragState: s
  };
}
const Xa = Y({
  name: "ElTreeNode",
  components: {
    ElCollapseTransition: Jr,
    ElCheckbox: pr,
    NodeContent: Ya,
    ElIcon: Le,
    Loading: mr
  },
  props: {
    node: {
      type: _e,
      default: () => ({})
    },
    props: {
      type: Object,
      default: () => ({})
    },
    accordion: Boolean,
    renderContent: Function,
    renderAfterExpand: Boolean,
    showCheckbox: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["node-expand"],
  setup(t, e) {
    const r = te("tree"), { broadcastExpanded: n } = Kn(t), o = le("RootTree"), a = I(!1), s = I(!1), i = I(null), l = I(null), m = I(null), f = le(qn), c = Ve();
    ve("NodeInstance", c), t.node.expanded && (a.value = !0, s.value = !0);
    const u = o.props.children || "children";
    H(() => {
      const _ = t.node.data[u];
      return _ && [..._];
    }, () => {
      t.node.updateChildren();
    }), H(() => t.node.indeterminate, (_) => {
      h(t.node.checked, _);
    }), H(() => t.node.checked, (_) => {
      h(_, t.node.indeterminate);
    }), H(() => t.node.expanded, (_) => {
      me(() => a.value = _), _ && (s.value = !0);
    });
    const g = (_) => Yt(o.props.nodeKey, _.data), v = (_) => {
      const A = t.props.class;
      if (!A)
        return {};
      let O;
      if (Se(A)) {
        const { data: z } = _;
        O = A(z, _);
      } else
        O = A;
      return ge(O) ? { [O]: !0 } : O;
    }, h = (_, A) => {
      (i.value !== _ || l.value !== A) && o.ctx.emit("check-change", t.node.data, _, A), i.value = _, l.value = A;
    }, N = (_) => {
      Vt(o.store, o.ctx.emit, () => o.store.value.setCurrentNode(t.node)), o.currentNode.value = t.node, o.props.expandOnClickNode && w(), o.props.checkOnClickNode && !t.node.disabled && p(null, {
        target: { checked: !t.node.checked }
      }), o.ctx.emit("node-click", t.node.data, t.node, c, _);
    }, b = (_) => {
      o.instance.vnode.props.onNodeContextmenu && (_.stopPropagation(), _.preventDefault()), o.ctx.emit("node-contextmenu", _, t.node.data, t.node, c);
    }, w = () => {
      t.node.isLeaf || (a.value ? (o.ctx.emit("node-collapse", t.node.data, t.node, c), t.node.collapse()) : (t.node.expand(), e.emit("node-expand", t.node.data, t.node, c)));
    }, p = (_, A) => {
      t.node.setChecked(A.target.checked, !o.props.checkStrictly), me(() => {
        const O = o.store.value;
        o.ctx.emit("check", t.node.data, {
          checkedNodes: O.getCheckedNodes(),
          checkedKeys: O.getCheckedKeys(),
          halfCheckedNodes: O.getHalfCheckedNodes(),
          halfCheckedKeys: O.getHalfCheckedKeys()
        });
      });
    };
    return {
      ns: r,
      node$: m,
      tree: o,
      expanded: a,
      childNodeRendered: s,
      oldChecked: i,
      oldIndeterminate: l,
      getNodeKey: g,
      getNodeClass: v,
      handleSelectChange: h,
      handleClick: N,
      handleContextMenu: b,
      handleExpandIconClick: w,
      handleCheckChange: p,
      handleChildNodeExpand: (_, A, O) => {
        n(A), o.ctx.emit("node-expand", _, A, O);
      },
      handleDragStart: (_) => {
        o.props.draggable && f.treeNodeDragStart({ event: _, treeNode: t });
      },
      handleDragOver: (_) => {
        _.preventDefault(), o.props.draggable && f.treeNodeDragOver({
          event: _,
          treeNode: { $el: m.value, node: t.node }
        });
      },
      handleDrop: (_) => {
        _.preventDefault();
      },
      handleDragEnd: (_) => {
        o.props.draggable && f.treeNodeDragEnd(_);
      },
      CaretRight: vr
    };
  }
}), Ga = ["aria-expanded", "aria-disabled", "aria-checked", "draggable", "data-key"], Za = ["aria-expanded"];
function Ja(t, e, r, n, o, a) {
  const s = we("el-icon"), i = we("el-checkbox"), l = we("loading"), m = we("node-content"), f = we("el-tree-node"), c = we("el-collapse-transition");
  return be((M(), W("div", {
    ref: "node$",
    class: D([
      t.ns.b("node"),
      t.ns.is("expanded", t.expanded),
      t.ns.is("current", t.node.isCurrent),
      t.ns.is("hidden", !t.node.visible),
      t.ns.is("focusable", !t.node.disabled),
      t.ns.is("checked", !t.node.disabled && t.node.checked),
      t.getNodeClass(t.node)
    ]),
    role: "treeitem",
    tabindex: "-1",
    "aria-expanded": t.expanded,
    "aria-disabled": t.node.disabled,
    "aria-checked": t.node.checked,
    draggable: t.tree.props.draggable,
    "data-key": t.getNodeKey(t.node),
    onClick: e[1] || (e[1] = ce((...u) => t.handleClick && t.handleClick(...u), ["stop"])),
    onContextmenu: e[2] || (e[2] = (...u) => t.handleContextMenu && t.handleContextMenu(...u)),
    onDragstart: e[3] || (e[3] = ce((...u) => t.handleDragStart && t.handleDragStart(...u), ["stop"])),
    onDragover: e[4] || (e[4] = ce((...u) => t.handleDragOver && t.handleDragOver(...u), ["stop"])),
    onDragend: e[5] || (e[5] = ce((...u) => t.handleDragEnd && t.handleDragEnd(...u), ["stop"])),
    onDrop: e[6] || (e[6] = ce((...u) => t.handleDrop && t.handleDrop(...u), ["stop"]))
  }, [
    B("div", {
      class: D(t.ns.be("node", "content")),
      style: ie({ paddingLeft: (t.node.level - 1) * t.tree.props.indent + "px" })
    }, [
      t.tree.props.icon || t.CaretRight ? (M(), G(s, {
        key: 0,
        class: D([
          t.ns.be("node", "expand-icon"),
          t.ns.is("leaf", t.node.isLeaf),
          {
            expanded: !t.node.isLeaf && t.expanded
          }
        ]),
        onClick: ce(t.handleExpandIconClick, ["stop"])
      }, {
        default: q(() => [
          (M(), G(zt(t.tree.props.icon || t.CaretRight)))
        ]),
        _: 1
      }, 8, ["class", "onClick"])) : re("v-if", !0),
      t.showCheckbox ? (M(), G(i, {
        key: 1,
        "model-value": t.node.checked,
        indeterminate: t.node.indeterminate,
        disabled: !!t.node.disabled,
        onClick: e[0] || (e[0] = ce(() => {
        }, ["stop"])),
        onChange: t.handleCheckChange
      }, null, 8, ["model-value", "indeterminate", "disabled", "onChange"])) : re("v-if", !0),
      t.node.loading ? (M(), G(s, {
        key: 2,
        class: D([t.ns.be("node", "loading-icon"), t.ns.is("loading")])
      }, {
        default: q(() => [
          x(l)
        ]),
        _: 1
      }, 8, ["class"])) : re("v-if", !0),
      x(m, {
        node: t.node,
        "render-content": t.renderContent
      }, null, 8, ["node", "render-content"])
    ], 6),
    x(c, null, {
      default: q(() => [
        !t.renderAfterExpand || t.childNodeRendered ? be((M(), W("div", {
          key: 0,
          class: D(t.ns.be("node", "children")),
          role: "group",
          "aria-expanded": t.expanded
        }, [
          (M(!0), W(Ge, null, Nt(t.node.childNodes, (u) => (M(), G(f, {
            key: t.getNodeKey(u),
            "render-content": t.renderContent,
            "render-after-expand": t.renderAfterExpand,
            "show-checkbox": t.showCheckbox,
            node: u,
            accordion: t.accordion,
            props: t.props,
            onNodeExpand: t.handleChildNodeExpand
          }, null, 8, ["render-content", "render-after-expand", "show-checkbox", "node", "accordion", "props", "onNodeExpand"]))), 128))
        ], 10, Za)), [
          [We, t.expanded]
        ]) : re("v-if", !0)
      ]),
      _: 1
    })
  ], 42, Ga)), [
    [We, t.node.visible]
  ]);
}
var Qa = /* @__PURE__ */ ae(Xa, [["render", Ja], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/tree/src/tree-node.vue"]]);
function es({ el$: t }, e) {
  const r = te("tree"), n = pt([]), o = pt([]);
  pe(() => {
    s();
  }), Ht(() => {
    n.value = Array.from(t.value.querySelectorAll("[role=treeitem]")), o.value = Array.from(t.value.querySelectorAll("input[type=checkbox]"));
  }), H(o, (i) => {
    i.forEach((l) => {
      l.setAttribute("tabindex", "-1");
    });
  }), gr(t, "keydown", (i) => {
    const l = i.target;
    if (!l.className.includes(r.b("node")))
      return;
    const m = i.code;
    n.value = Array.from(t.value.querySelectorAll(`.${r.is("focusable")}[role=treeitem]`));
    const f = n.value.indexOf(l);
    let c;
    if ([Ce.up, Ce.down].includes(m)) {
      if (i.preventDefault(), m === Ce.up) {
        c = f === -1 ? 0 : f !== 0 ? f - 1 : n.value.length - 1;
        const g = c;
        for (; !e.value.getNode(n.value[c].dataset.key).canFocus; ) {
          if (c--, c === g) {
            c = -1;
            break;
          }
          c < 0 && (c = n.value.length - 1);
        }
      } else {
        c = f === -1 ? 0 : f < n.value.length - 1 ? f + 1 : 0;
        const g = c;
        for (; !e.value.getNode(n.value[c].dataset.key).canFocus; ) {
          if (c++, c === g) {
            c = -1;
            break;
          }
          c >= n.value.length && (c = 0);
        }
      }
      c !== -1 && n.value[c].focus();
    }
    [Ce.left, Ce.right].includes(m) && (i.preventDefault(), l.click());
    const u = l.querySelector('[type="checkbox"]');
    [Ce.enter, Ce.space].includes(m) && u && (i.preventDefault(), u.click());
  });
  const s = () => {
    var i;
    n.value = Array.from(t.value.querySelectorAll(`.${r.is("focusable")}[role=treeitem]`)), o.value = Array.from(t.value.querySelectorAll("input[type=checkbox]"));
    const l = t.value.querySelectorAll(`.${r.is("checked")}[role=treeitem]`);
    if (l.length) {
      l[0].setAttribute("tabindex", "0");
      return;
    }
    (i = n.value[0]) == null || i.setAttribute("tabindex", "0");
  };
}
const ts = Y({
  name: "ElTree",
  components: { ElTreeNode: Qa },
  props: {
    data: {
      type: Array,
      default: () => []
    },
    emptyText: {
      type: String
    },
    renderAfterExpand: {
      type: Boolean,
      default: !0
    },
    nodeKey: String,
    checkStrictly: Boolean,
    defaultExpandAll: Boolean,
    expandOnClickNode: {
      type: Boolean,
      default: !0
    },
    checkOnClickNode: Boolean,
    checkDescendants: {
      type: Boolean,
      default: !1
    },
    autoExpandParent: {
      type: Boolean,
      default: !0
    },
    defaultCheckedKeys: Array,
    defaultExpandedKeys: Array,
    currentNodeKey: [String, Number],
    renderContent: Function,
    showCheckbox: {
      type: Boolean,
      default: !1
    },
    draggable: {
      type: Boolean,
      default: !1
    },
    allowDrag: Function,
    allowDrop: Function,
    props: {
      type: Object,
      default: () => ({
        children: "children",
        label: "label",
        disabled: "disabled"
      })
    },
    lazy: {
      type: Boolean,
      default: !1
    },
    highlightCurrent: Boolean,
    load: Function,
    filterNodeMethod: Function,
    accordion: Boolean,
    indent: {
      type: Number,
      default: 18
    },
    icon: {
      type: kn
    }
  },
  emits: [
    "check-change",
    "current-change",
    "node-click",
    "node-contextmenu",
    "node-collapse",
    "node-expand",
    "check",
    "node-drag-start",
    "node-drag-end",
    "node-drop",
    "node-drag-leave",
    "node-drag-enter",
    "node-drag-over"
  ],
  setup(t, e) {
    const { t: r } = vt(), n = te("tree"), o = I(new Ha({
      key: t.nodeKey,
      data: t.data,
      lazy: t.lazy,
      props: t.props,
      load: t.load,
      currentNodeKey: t.currentNodeKey,
      checkStrictly: t.checkStrictly,
      checkDescendants: t.checkDescendants,
      defaultCheckedKeys: t.defaultCheckedKeys,
      defaultExpandedKeys: t.defaultExpandedKeys,
      autoExpandParent: t.autoExpandParent,
      defaultExpandAll: t.defaultExpandAll,
      filterNodeMethod: t.filterNodeMethod
    }));
    o.value.initialize();
    const a = I(o.value.root), s = I(null), i = I(null), l = I(null), { broadcastExpanded: m } = Kn(t), { dragState: f } = Ua({
      props: t,
      ctx: e,
      el$: i,
      dropIndicator$: l,
      store: o
    });
    es({ el$: i }, o);
    const c = V(() => {
      const { childNodes: C } = a.value;
      return !C || C.length === 0 || C.every(({ visible: k }) => !k);
    });
    H(() => t.currentNodeKey, (C) => {
      o.value.setCurrentNodeKey(C);
    }), H(() => t.defaultCheckedKeys, (C) => {
      o.value.setDefaultCheckedKey(C);
    }), H(() => t.defaultExpandedKeys, (C) => {
      o.value.setDefaultExpandedKeys(C);
    }), H(() => t.data, (C) => {
      o.value.setData(C);
    }, { deep: !0 }), H(() => t.checkStrictly, (C) => {
      o.value.checkStrictly = C;
    });
    const u = (C) => {
      if (!t.filterNodeMethod)
        throw new Error("[Tree] filterNodeMethod is required when filter");
      o.value.filter(C);
    }, g = (C) => Yt(t.nodeKey, C.data), v = (C) => {
      if (!t.nodeKey)
        throw new Error("[Tree] nodeKey is required in getNodePath");
      const k = o.value.getNode(C);
      if (!k)
        return [];
      const U = [k.data];
      let Z = k.parent;
      for (; Z && Z !== a.value; )
        U.push(Z.data), Z = Z.parent;
      return U.reverse();
    }, h = (C, k) => o.value.getCheckedNodes(C, k), N = (C) => o.value.getCheckedKeys(C), b = () => {
      const C = o.value.getCurrentNode();
      return C ? C.data : null;
    }, w = () => {
      if (!t.nodeKey)
        throw new Error("[Tree] nodeKey is required in getCurrentKey");
      const C = b();
      return C ? C[t.nodeKey] : null;
    }, p = (C, k) => {
      if (!t.nodeKey)
        throw new Error("[Tree] nodeKey is required in setCheckedNodes");
      o.value.setCheckedNodes(C, k);
    }, $ = (C, k) => {
      if (!t.nodeKey)
        throw new Error("[Tree] nodeKey is required in setCheckedKeys");
      o.value.setCheckedKeys(C, k);
    }, S = (C, k, U) => {
      o.value.setChecked(C, k, U);
    }, F = () => o.value.getHalfCheckedNodes(), j = () => o.value.getHalfCheckedKeys(), P = (C, k = !0) => {
      if (!t.nodeKey)
        throw new Error("[Tree] nodeKey is required in setCurrentNode");
      Vt(o, e.emit, () => o.value.setUserCurrentNode(C, k));
    }, _ = (C, k = !0) => {
      if (!t.nodeKey)
        throw new Error("[Tree] nodeKey is required in setCurrentKey");
      Vt(o, e.emit, () => o.value.setCurrentNodeKey(C, k));
    }, A = (C) => o.value.getNode(C), O = (C) => {
      o.value.remove(C);
    }, z = (C, k) => {
      o.value.append(C, k);
    }, y = (C, k) => {
      o.value.insertBefore(C, k);
    }, E = (C, k) => {
      o.value.insertAfter(C, k);
    }, L = (C, k, U) => {
      m(k), e.emit("node-expand", C, k, U);
    }, X = (C, k) => {
      if (!t.nodeKey)
        throw new Error("[Tree] nodeKey is required in updateKeyChild");
      o.value.updateChildren(C, k);
    };
    return ve("RootTree", {
      ctx: e,
      props: t,
      store: o,
      root: a,
      currentNode: s,
      instance: Ve()
    }), ve(ht, void 0), {
      ns: n,
      store: o,
      root: a,
      currentNode: s,
      dragState: f,
      el$: i,
      dropIndicator$: l,
      isEmpty: c,
      filter: u,
      getNodeKey: g,
      getNodePath: v,
      getCheckedNodes: h,
      getCheckedKeys: N,
      getCurrentNode: b,
      getCurrentKey: w,
      setCheckedNodes: p,
      setCheckedKeys: $,
      setChecked: S,
      getHalfCheckedNodes: F,
      getHalfCheckedKeys: j,
      setCurrentNode: P,
      setCurrentKey: _,
      t: r,
      getNode: A,
      remove: O,
      append: z,
      insertBefore: y,
      insertAfter: E,
      handleNodeExpand: L,
      updateKeyChildren: X
    };
  }
});
function ns(t, e, r, n, o, a) {
  var s;
  const i = we("el-tree-node");
  return M(), W("div", {
    ref: "el$",
    class: D([
      t.ns.b(),
      t.ns.is("dragging", !!t.dragState.draggingNode),
      t.ns.is("drop-not-allow", !t.dragState.allowDrop),
      t.ns.is("drop-inner", t.dragState.dropType === "inner"),
      { [t.ns.m("highlight-current")]: t.highlightCurrent }
    ]),
    role: "tree"
  }, [
    (M(!0), W(Ge, null, Nt(t.root.childNodes, (l) => (M(), G(i, {
      key: t.getNodeKey(l),
      node: l,
      props: t.props,
      accordion: t.accordion,
      "render-after-expand": t.renderAfterExpand,
      "show-checkbox": t.showCheckbox,
      "render-content": t.renderContent,
      onNodeExpand: t.handleNodeExpand
    }, null, 8, ["node", "props", "accordion", "render-after-expand", "show-checkbox", "render-content", "onNodeExpand"]))), 128)),
    t.isEmpty ? (M(), W("div", {
      key: 0,
      class: D(t.ns.e("empty-block"))
    }, [
      B("span", {
        class: D(t.ns.e("empty-text"))
      }, Ae((s = t.emptyText) != null ? s : t.t("el.tree.emptyText")), 3)
    ], 2)) : re("v-if", !0),
    be(B("div", {
      ref: "dropIndicator$",
      class: D(t.ns.e("drop-indicator"))
    }, null, 2), [
      [We, t.dragState.showDropIndicator]
    ])
  ], 2);
}
var ft = /* @__PURE__ */ ae(ts, [["render", ns], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/tree/src/tree.vue"]]);
ft.install = (t) => {
  t.component(ft.name, ft);
};
const rs = ft, os = rs;
const as = /* @__PURE__ */ Y({
  __name: "Tree",
  setup(t) {
    const e = En(window.__PHECDA__.doc), r = Jt(e, "container"), n = Jt(e, "activeDoc");
    function o(a) {
      n.value.select(a);
    }
    return (a, s) => {
      const i = os, l = yr;
      return M(), G(l, null, {
        default: q(() => [
          x(i, {
            class: "tree",
            data: r.value.children,
            draggable: "",
            "default-expand-all": "",
            "node-key": "id",
            props: { children: "children", label: "key" },
            onNodeClick: o
          }, null, 8, ["data"])
        ]),
        _: 1
      });
    };
  }
});
const ss = /* @__PURE__ */ br(as, [["__scopeId", "data-v-335c460a"]]);
const is = /* @__PURE__ */ Y({
  __name: "Container",
  setup(t) {
    const { container: e } = En(window.__PHECDA__.doc);
    return (r, n) => {
      const o = ja, a = Oa, s = Eo, i = xa;
      return M(), G(i, { style: { padding: "4px 8px", margin: "0 auto", width: "fit-content" } }, {
        default: q(() => [
          x(a, { label: "页面宽度" }, {
            default: q(() => [
              x(o, {
                modelValue: d(e).attrs.width,
                "onUpdate:modelValue": n[0] || (n[0] = (l) => d(e).attrs.width = l),
                min: d(e).attrs.wLimit[0],
                max: d(e).attrs.wLimit[1]
              }, null, 8, ["modelValue", "min", "max"])
            ]),
            _: 1
          }),
          x(a, { label: "页面高度" }, {
            default: q(() => [
              x(o, {
                modelValue: d(e).attrs.height,
                "onUpdate:modelValue": n[1] || (n[1] = (l) => d(e).attrs.height = l),
                min: d(e).attrs.hLimit[0],
                max: d(e).attrs.hLimit[1]
              }, null, 8, ["modelValue", "min", "max"])
            ]),
            _: 1
          }),
          x(a, { label: "圆角" }, {
            default: q(() => [
              x(o, {
                modelValue: d(e).attrs.radius,
                "onUpdate:modelValue": n[2] || (n[2] = (l) => d(e).attrs.radius = l),
                min: 1
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          }),
          x(a, { label: "基础尺寸(font-size)" }, {
            default: q(() => [
              x(o, {
                modelValue: d(e).attrs.fontSize,
                "onUpdate:modelValue": n[3] || (n[3] = (l) => d(e).attrs.fontSize = l),
                min: 1
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          }),
          x(a, { label: "外侧边距" }, {
            default: q(() => [
              x(o, {
                modelValue: d(e).attrs.margin,
                "onUpdate:modelValue": n[4] || (n[4] = (l) => d(e).attrs.margin = l),
                min: 1
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          }),
          x(a, { label: "栅格数目" }, {
            default: q(() => [
              x(o, {
                modelValue: d(e).attrs.gridNum,
                "onUpdate:modelValue": n[5] || (n[5] = (l) => d(e).attrs.gridNum = l),
                min: 1
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          }),
          x(a, { label: "栅格间距" }, {
            default: q(() => [
              x(o, {
                modelValue: d(e).attrs.gridGap,
                "onUpdate:modelValue": n[6] || (n[6] = (l) => d(e).attrs.gridGap = l),
                min: 1
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          }),
          x(a, { label: "背景颜色" }, {
            default: q(() => [
              x(s, {
                modelValue: d(e).attrs.backgroundColor,
                "onUpdate:modelValue": n[7] || (n[7] = (l) => d(e).attrs.backgroundColor = l)
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          }),
          x(a, { label: "栅格颜色" }, {
            default: q(() => [
              x(s, {
                modelValue: d(e).attrs.gridColor,
                "onUpdate:modelValue": n[8] || (n[8] = (l) => d(e).attrs.gridColor = l)
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
}), ls = /* @__PURE__ */ Y({
  __name: "List",
  props: {
    modelValue: null
  },
  emits: ["update:modelValue"],
  setup(t) {
    const { modelValue: e } = Nr("modelValue"), r = I("");
    return (n, o) => {
      const a = yt, s = $t;
      return M(), W("div", null, [
        (M(!0), W(Ge, null, Nt(d(e), (i, l) => (M(), W("div", { key: l }, Ae(i), 1))), 128)),
        x(a, {
          modelValue: d(r),
          "onUpdate:modelValue": o[0] || (o[0] = (i) => Sn(r) ? r.value = i : null)
        }, null, 8, ["modelValue"]),
        x(s, {
          onClick: o[1] || (o[1] = (i) => d(e).push(d(r)))
        }, {
          default: q(() => [
            mt(" 添加 ")
          ]),
          _: 1
        })
      ]);
    };
  }
}), ds = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
}, us = /* @__PURE__ */ B("g", {
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2"
}, [
  /* @__PURE__ */ B("path", { d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" }),
  /* @__PURE__ */ B("path", { d: "M3.29 7L12 12l8.71-5M12 22V12" })
], -1), cs = [
  us
];
function fs(t, e) {
  return M(), W("svg", ds, cs);
}
const hs = { name: "lucide-box", render: fs };
Xe("Checkbox", wr);
const ps = _r(Ro, {});
Xe("Input", yt);
Xe("Select", Er);
Xe("Tree", ss);
Xe("List", ls);
Cr({
  component: hs,
  label: "容器配置",
  handler() {
    ps(is, {}, { title: "容器配置" });
  }
});
kr({
  component: "Tree",
  label: "model tree",
  name: "tree",
  fix: !0,
  isActive: () => !0,
  x: 1100,
  y: 50,
  transition: "right",
  props: {}
});
