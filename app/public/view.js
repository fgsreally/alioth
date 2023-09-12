import "phecda-vue";
import { t as We, r as Qe, i as ze, a as Ue, b as Ge, f as Xe, c as ge, d as Ye, U as ae, e as J, u as qe, g as ee, h as we, j as Ze, k as Je, l as et, m as tt, n as xe, V as ot, v as nt, o as at, p as st, q as Ie, E as $, N as rt, s as lt, _ as it, w as Se, x as ut } from "./el-button.js";
import { watch as Q, ref as O, computed as f, getCurrentInstance as ct, defineComponent as Te, useAttrs as pt, useSlots as dt, shallowRef as te, nextTick as R, onMounted as ft, toRef as vt, withDirectives as mt, openBlock as v, createElementBlock as x, mergeProps as oe, unref as n, createCommentVNode as m, Fragment as ne, normalizeClass as y, renderSlot as H, createElementVNode as k, createBlock as I, withCtx as B, resolveDynamicComponent as K, withModifiers as yt, createVNode as ht, toDisplayString as W, normalizeStyle as bt, vShow as gt } from "vue";
function wt(t) {
  var s;
  const a = Qe(t);
  return (s = a == null ? void 0 : a.$el) != null ? s : a;
}
const xt = ze ? window : void 0;
function It(t, s = !1) {
  const a = O(), o = () => a.value = !!t();
  return o(), Ue(o, s), a;
}
const _e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Oe = "__vueuse_ssr_handlers__";
_e[Oe] = _e[Oe] || {};
var Ce = Object.getOwnPropertySymbols, St = Object.prototype.hasOwnProperty, _t = Object.prototype.propertyIsEnumerable, Ot = (t, s) => {
  var a = {};
  for (var o in t)
    St.call(t, o) && s.indexOf(o) < 0 && (a[o] = t[o]);
  if (t != null && Ce)
    for (var o of Ce(t))
      s.indexOf(o) < 0 && _t.call(t, o) && (a[o] = t[o]);
  return a;
};
function Ct(t, s, a = {}) {
  const o = a, { window: l = xt } = o, u = Ot(o, ["window"]);
  let i;
  const b = It(() => l && "ResizeObserver" in l), p = () => {
    i && (i.disconnect(), i = void 0);
  }, h = Q(() => wt(t), (d) => {
    p(), b.value && l && d && (i = new ResizeObserver(s), i.observe(d, u));
  }, { immediate: !0, flush: "post" }), g = () => {
    p(), h();
  };
  return We(g), {
    isSupported: b,
    stop: g
  };
}
var Ee;
(function(t) {
  t.UP = "UP", t.RIGHT = "RIGHT", t.DOWN = "DOWN", t.LEFT = "LEFT", t.NONE = "NONE";
})(Ee || (Ee = {}));
var Et = Object.defineProperty, Pe = Object.getOwnPropertySymbols, Pt = Object.prototype.hasOwnProperty, kt = Object.prototype.propertyIsEnumerable, ke = (t, s, a) => s in t ? Et(t, s, { enumerable: !0, configurable: !0, writable: !0, value: a }) : t[s] = a, Nt = (t, s) => {
  for (var a in s || (s = {}))
    Pt.call(s, a) && ke(t, a, s[a]);
  if (Pe)
    for (var a of Pe(s))
      kt.call(s, a) && ke(t, a, s[a]);
  return t;
};
const zt = {
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
Nt({
  linear: Ge
}, zt);
const Tt = (t) => /([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi.test(t), Vt = (t) => t, Ft = ["class", "style"], $t = /^on[A-Z]/, Rt = (t = {}) => {
  const { excludeListeners: s = !1, excludeKeys: a } = t, o = f(() => ((a == null ? void 0 : a.value) || []).concat(Ft)), l = ct();
  return l ? f(() => {
    var u;
    return Xe(Object.entries((u = l.proxy) == null ? void 0 : u.$attrs).filter(([i]) => !o.value.includes(i) && !(s && $t.test(i))));
  }) : f(() => ({}));
};
function Bt(t) {
  const s = O();
  function a() {
    if (t.value == null)
      return;
    const { selectionStart: l, selectionEnd: u, value: i } = t.value;
    if (l == null || u == null)
      return;
    const b = i.slice(0, Math.max(0, l)), p = i.slice(Math.max(0, u));
    s.value = {
      selectionStart: l,
      selectionEnd: u,
      value: i,
      beforeTxt: b,
      afterTxt: p
    };
  }
  function o() {
    if (t.value == null || s.value == null)
      return;
    const { value: l } = t.value, { beforeTxt: u, afterTxt: i, selectionStart: b } = s.value;
    if (u == null || i == null || b == null)
      return;
    let p = l.length;
    if (l.endsWith(i))
      p = l.length - i.length;
    else if (l.startsWith(u))
      p = u.length;
    else {
      const h = u[b - 1], g = l.indexOf(h, b - 1);
      g !== -1 && (p = g + 1);
    }
    t.value.setSelectionRange(p, p);
  }
  return [a, o];
}
let w;
const Mt = `
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`, At = [
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
function Lt(t) {
  const s = window.getComputedStyle(t), a = s.getPropertyValue("box-sizing"), o = Number.parseFloat(s.getPropertyValue("padding-bottom")) + Number.parseFloat(s.getPropertyValue("padding-top")), l = Number.parseFloat(s.getPropertyValue("border-bottom-width")) + Number.parseFloat(s.getPropertyValue("border-top-width"));
  return { contextStyle: At.map((i) => `${i}:${s.getPropertyValue(i)}`).join(";"), paddingSize: o, borderSize: l, boxSizing: a };
}
function Ne(t, s = 1, a) {
  var o;
  w || (w = document.createElement("textarea"), document.body.appendChild(w));
  const { paddingSize: l, borderSize: u, boxSizing: i, contextStyle: b } = Lt(t);
  w.setAttribute("style", `${b};${Mt}`), w.value = t.value || t.placeholder || "";
  let p = w.scrollHeight;
  const h = {};
  i === "border-box" ? p = p + u : i === "content-box" && (p = p - l), w.value = "";
  const g = w.scrollHeight - l;
  if (ge(s)) {
    let d = g * s;
    i === "border-box" && (d = d + l + u), p = Math.max(d, p), h.minHeight = `${d}px`;
  }
  if (ge(a)) {
    let d = g * a;
    i === "border-box" && (d = d + l + u), p = Math.min(d, p);
  }
  return h.height = `${p}px`, (o = w.parentNode) == null || o.removeChild(w), w = void 0, h;
}
const jt = Ye({
  id: {
    type: String,
    default: void 0
  },
  size: qe,
  disabled: Boolean,
  modelValue: {
    type: ee([
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
    type: ee([Boolean, Object]),
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
    type: we
  },
  prefixIcon: {
    type: we
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
    type: ee([Object, Array, String]),
    default: () => Vt({})
  }
}), Dt = {
  [ae]: (t) => J(t),
  input: (t) => J(t),
  change: (t) => J(t),
  focus: (t) => t instanceof FocusEvent,
  blur: (t) => t instanceof FocusEvent,
  clear: () => !0,
  mouseleave: (t) => t instanceof MouseEvent,
  mouseenter: (t) => t instanceof MouseEvent,
  keydown: (t) => t instanceof Event,
  compositionstart: (t) => t instanceof CompositionEvent,
  compositionupdate: (t) => t instanceof CompositionEvent,
  compositionend: (t) => t instanceof CompositionEvent
}, Ht = ["role"], Kt = ["id", "type", "disabled", "formatter", "parser", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder", "form"], Wt = ["id", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder", "form"], Qt = Te({
  name: "ElInput",
  inheritAttrs: !1
}), Ut = /* @__PURE__ */ Te({
  ...Qt,
  props: jt,
  emits: Dt,
  setup(t, { expose: s, emit: a }) {
    const o = t, l = pt(), u = dt(), i = f(() => {
      const e = {};
      return o.containerRole === "combobox" && (e["aria-haspopup"] = l["aria-haspopup"], e["aria-owns"] = l["aria-owns"], e["aria-expanded"] = l["aria-expanded"]), e;
    }), b = f(() => [
      o.type === "textarea" ? re.b() : r.b(),
      r.m(Ve.value),
      r.is("disabled", C.value),
      r.is("exceed", Re.value),
      {
        [r.b("group")]: u.prepend || u.append,
        [r.bm("group", "append")]: u.append,
        [r.bm("group", "prepend")]: u.prepend,
        [r.m("prefix")]: u.prefix || o.prefixIcon,
        [r.m("suffix")]: u.suffix || o.suffixIcon || o.clearable || o.showPassword,
        [r.bm("suffix", "password-clear")]: L.value && X.value
      },
      l.class
    ]), p = f(() => [
      r.e("wrapper"),
      r.is("focus", N.value)
    ]), h = Rt({
      excludeKeys: f(() => Object.keys(i.value))
    }), { form: g, formItem: d } = Ze(), { inputId: se } = Je(o, {
      formItemContext: d
    }), Ve = et(), C = tt(), r = xe("input"), re = xe("textarea"), M = te(), E = te(), N = O(!1), U = O(!1), z = O(!1), A = O(!1), le = O(), G = te(o.inputStyle), T = f(() => M.value || E.value), ie = f(() => {
      var e;
      return (e = g == null ? void 0 : g.statusIcon) != null ? e : !1;
    }), V = f(() => (d == null ? void 0 : d.validateState) || ""), ue = f(() => V.value && ot[V.value]), Fe = f(() => A.value ? nt : at), $e = f(() => [
      l.style,
      o.inputStyle
    ]), ce = f(() => [
      o.inputStyle,
      G.value,
      { resize: o.resize }
    ]), S = f(() => st(o.modelValue) ? "" : String(o.modelValue)), L = f(() => o.clearable && !C.value && !o.readonly && !!S.value && (N.value || U.value)), X = f(() => o.showPassword && !C.value && !o.readonly && !!S.value && (!!S.value || N.value)), P = f(() => o.showWordLimit && !!h.value.maxlength && (o.type === "text" || o.type === "textarea") && !C.value && !o.readonly && !o.showPassword), Y = f(() => Array.from(S.value).length), Re = f(() => !!P.value && Y.value > Number(h.value.maxlength)), Be = f(() => !!u.suffix || !!o.suffixIcon || L.value || o.showPassword || P.value || !!V.value && ie.value), [Me, Ae] = Bt(M);
    Ct(E, (e) => {
      if (!P.value || o.resize !== "both")
        return;
      const c = e[0], { width: _ } = c.contentRect;
      le.value = {
        right: `calc(100% - ${_ + 15 + 6}px)`
      };
    });
    const j = () => {
      const { type: e, autosize: c } = o;
      if (!(!ze || e !== "textarea"))
        if (c) {
          const _ = Se(c) ? c.minRows : void 0, Z = Se(c) ? c.maxRows : void 0;
          G.value = {
            ...Ne(E.value, _, Z)
          };
        } else
          G.value = {
            minHeight: Ne(E.value).minHeight
          };
    }, F = () => {
      const e = T.value;
      !e || e.value === S.value || (e.value = S.value);
    }, q = async (e) => {
      Me();
      let { value: c } = e.target;
      if (o.formatter && (c = o.parser ? o.parser(c) : c, c = o.formatter(c)), !z.value) {
        if (c === S.value) {
          F();
          return;
        }
        a(ae, c), a("input", c), await R(), F(), Ae();
      }
    }, pe = (e) => {
      a("change", e.target.value);
    }, de = (e) => {
      a("compositionstart", e), z.value = !0;
    }, fe = (e) => {
      var c;
      a("compositionupdate", e);
      const _ = (c = e.target) == null ? void 0 : c.value, Z = _[_.length - 1] || "";
      z.value = !Tt(Z);
    }, ve = (e) => {
      a("compositionend", e), z.value && (z.value = !1, q(e));
    }, Le = () => {
      A.value = !A.value, D();
    }, D = async () => {
      var e;
      await R(), (e = T.value) == null || e.focus();
    }, je = () => {
      var e;
      return (e = T.value) == null ? void 0 : e.blur();
    }, me = (e) => {
      N.value = !0, a("focus", e);
    }, ye = (e) => {
      var c;
      N.value = !1, a("blur", e), o.validateEvent && ((c = d == null ? void 0 : d.validate) == null || c.call(d, "blur").catch((_) => Ie()));
    }, De = (e) => {
      U.value = !1, a("mouseleave", e);
    }, He = (e) => {
      U.value = !0, a("mouseenter", e);
    }, he = (e) => {
      a("keydown", e);
    }, Ke = () => {
      var e;
      (e = T.value) == null || e.select();
    }, be = () => {
      a(ae, ""), a("change", ""), a("clear"), a("input", "");
    };
    return Q(() => o.modelValue, () => {
      var e;
      R(() => j()), o.validateEvent && ((e = d == null ? void 0 : d.validate) == null || e.call(d, "change").catch((c) => Ie()));
    }), Q(S, () => F()), Q(() => o.type, async () => {
      await R(), F(), j();
    }), ft(() => {
      !o.formatter && o.parser, F(), R(j);
    }), s({
      input: M,
      textarea: E,
      ref: T,
      textareaStyle: ce,
      autosize: vt(o, "autosize"),
      focus: D,
      blur: je,
      select: Ke,
      clear: be,
      resizeTextarea: j
    }), (e, c) => mt((v(), x("div", oe(n(i), {
      class: n(b),
      style: n($e),
      role: e.containerRole,
      onMouseenter: He,
      onMouseleave: De
    }), [
      m(" input "),
      e.type !== "textarea" ? (v(), x(ne, { key: 0 }, [
        m(" prepend slot "),
        e.$slots.prepend ? (v(), x("div", {
          key: 0,
          class: y(n(r).be("group", "prepend"))
        }, [
          H(e.$slots, "prepend")
        ], 2)) : m("v-if", !0),
        k("div", {
          class: y(n(p))
        }, [
          m(" prefix slot "),
          e.$slots.prefix || e.prefixIcon ? (v(), x("span", {
            key: 0,
            class: y(n(r).e("prefix"))
          }, [
            k("span", {
              class: y(n(r).e("prefix-inner")),
              onClick: D
            }, [
              H(e.$slots, "prefix"),
              e.prefixIcon ? (v(), I(n($), {
                key: 0,
                class: y(n(r).e("icon"))
              }, {
                default: B(() => [
                  (v(), I(K(e.prefixIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : m("v-if", !0)
            ], 2)
          ], 2)) : m("v-if", !0),
          k("input", oe({
            id: n(se),
            ref_key: "input",
            ref: M,
            class: n(r).e("inner")
          }, n(h), {
            type: e.showPassword ? A.value ? "text" : "password" : e.type,
            disabled: n(C),
            formatter: e.formatter,
            parser: e.parser,
            readonly: e.readonly,
            autocomplete: e.autocomplete,
            tabindex: e.tabindex,
            "aria-label": e.label,
            placeholder: e.placeholder,
            style: e.inputStyle,
            form: o.form,
            onCompositionstart: de,
            onCompositionupdate: fe,
            onCompositionend: ve,
            onInput: q,
            onFocus: me,
            onBlur: ye,
            onChange: pe,
            onKeydown: he
          }), null, 16, Kt),
          m(" suffix slot "),
          n(Be) ? (v(), x("span", {
            key: 1,
            class: y(n(r).e("suffix"))
          }, [
            k("span", {
              class: y(n(r).e("suffix-inner")),
              onClick: D
            }, [
              !n(L) || !n(X) || !n(P) ? (v(), x(ne, { key: 0 }, [
                H(e.$slots, "suffix"),
                e.suffixIcon ? (v(), I(n($), {
                  key: 0,
                  class: y(n(r).e("icon"))
                }, {
                  default: B(() => [
                    (v(), I(K(e.suffixIcon)))
                  ]),
                  _: 1
                }, 8, ["class"])) : m("v-if", !0)
              ], 64)) : m("v-if", !0),
              n(L) ? (v(), I(n($), {
                key: 1,
                class: y([n(r).e("icon"), n(r).e("clear")]),
                onMousedown: yt(n(rt), ["prevent"]),
                onClick: be
              }, {
                default: B(() => [
                  ht(n(lt))
                ]),
                _: 1
              }, 8, ["class", "onMousedown"])) : m("v-if", !0),
              n(X) ? (v(), I(n($), {
                key: 2,
                class: y([n(r).e("icon"), n(r).e("password")]),
                onClick: Le
              }, {
                default: B(() => [
                  (v(), I(K(n(Fe))))
                ]),
                _: 1
              }, 8, ["class"])) : m("v-if", !0),
              n(P) ? (v(), x("span", {
                key: 3,
                class: y(n(r).e("count"))
              }, [
                k("span", {
                  class: y(n(r).e("count-inner"))
                }, W(n(Y)) + " / " + W(n(h).maxlength), 3)
              ], 2)) : m("v-if", !0),
              n(V) && n(ue) && n(ie) ? (v(), I(n($), {
                key: 4,
                class: y([
                  n(r).e("icon"),
                  n(r).e("validateIcon"),
                  n(r).is("loading", n(V) === "validating")
                ])
              }, {
                default: B(() => [
                  (v(), I(K(n(ue))))
                ]),
                _: 1
              }, 8, ["class"])) : m("v-if", !0)
            ], 2)
          ], 2)) : m("v-if", !0)
        ], 2),
        m(" append slot "),
        e.$slots.append ? (v(), x("div", {
          key: 1,
          class: y(n(r).be("group", "append"))
        }, [
          H(e.$slots, "append")
        ], 2)) : m("v-if", !0)
      ], 64)) : (v(), x(ne, { key: 1 }, [
        m(" textarea "),
        k("textarea", oe({
          id: n(se),
          ref_key: "textarea",
          ref: E,
          class: n(re).e("inner")
        }, n(h), {
          tabindex: e.tabindex,
          disabled: n(C),
          readonly: e.readonly,
          autocomplete: e.autocomplete,
          style: n(ce),
          "aria-label": e.label,
          placeholder: e.placeholder,
          form: o.form,
          onCompositionstart: de,
          onCompositionupdate: fe,
          onCompositionend: ve,
          onInput: q,
          onFocus: me,
          onBlur: ye,
          onChange: pe,
          onKeydown: he
        }), null, 16, Wt),
        n(P) ? (v(), x("span", {
          key: 0,
          style: bt(le.value),
          class: y(n(r).e("count"))
        }, W(n(Y)) + " / " + W(n(h).maxlength), 7)) : m("v-if", !0)
      ], 64))
    ], 16, Ht)), [
      [gt, e.type !== "hidden"]
    ]);
  }
});
var Gt = /* @__PURE__ */ it(Ut, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/input/src/input.vue"]]);
const Xt = ut(Gt);
const Jt = {
  alioth: "view",
  data: {
    key: "Input",
    component: Xt
  }
};
export {
  Jt as view_input
};
