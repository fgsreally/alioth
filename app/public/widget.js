import { b as Ut, ao as Wt, n as ge, o as Fe, U as ce, q as Ze, a4 as Ye, Q as xe, C as Ce, y as st, z as Zt, u as ae, _ as pe, S as Yt, x as rt, A as Xt, K as it, L as Jt, a3 as ut, ab as dt, H as ye, ap as ct, ac as pt, aq as Qt, ag as ft, w as vt, ar as Oe, c as Xe, a6 as en, as as Je, at as ke, p as _e, N as tn, h as ht, au as nn, af as R, av as ln, aw as an, B as on, ax as sn, ay as rn, a1 as un, E as Qe, D as mt, az as dn, I as cn, aA as et, G as pn, aB as fn, an as vn, am as hn, F as mn, ai as gn, aC as bn, aD as yn, ah as kn, aE as _n, aF as Re } from "./Checkbox.vue_vue_type_script_setup_true_lang.js";
import { ref as T, inject as He, computed as b, defineComponent as A, openBlock as m, createElementBlock as P, normalizeClass as $, unref as o, createElementVNode as W, withDirectives as ve, isRef as we, vModelRadio as gt, withModifiers as ue, renderSlot as Ve, createTextVNode as $e, toDisplayString as Q, nextTick as oe, normalizeStyle as bt, onMounted as Ke, provide as yt, reactive as Ge, toRefs as Cn, watch as se, h as $n, resolveComponent as U, createCommentVNode as J, createBlock as D, withCtx as M, createVNode as K, Fragment as de, getCurrentInstance as Nn, renderList as he, onBeforeUpdate as Sn, useAttrs as En, withKeys as wn, vModelText as Vn, vShow as tt, normalizeProps as kt, guardReactiveProps as _t, mergeProps as Tn, resolveDynamicComponent as Pn } from "vue";
var In = 1, Ln = 4;
function Ct(e) {
  return Ut(e, In | Ln);
}
var Mn = 1 / 0;
function Bn(e) {
  var t = e == null ? 0 : e.length;
  return t ? Wt(e, Mn) : [];
}
const $t = (e) => !e.getAttribute("aria-owns"), Nt = (e, t, l) => {
  const { parentNode: n } = e;
  if (!n)
    return null;
  const s = n.querySelectorAll(l), c = Array.prototype.indexOf.call(s, e);
  return s[c + t] || null;
}, Ne = (e) => {
  e && (e.focus(), !$t(e) && e.click());
}, nt = (e) => [...new Set(e)], lt = (e) => !e && e !== 0 ? [] : Array.isArray(e) ? e : [e], Dn = () => Math.floor(Math.random() * 1e4), St = Symbol("radioGroupKey"), Et = ge({
  size: Fe,
  disabled: Boolean,
  label: {
    type: [String, Number, Boolean],
    default: ""
  }
}), zn = ge({
  ...Et,
  modelValue: {
    type: [String, Number, Boolean],
    default: ""
  },
  name: {
    type: String,
    default: ""
  },
  border: Boolean
}), wt = {
  [ce]: (e) => Ze(e) || Ye(e) || xe(e),
  [Ce]: (e) => Ze(e) || Ye(e) || xe(e)
}, Vt = (e, t) => {
  const l = T(), n = He(St, void 0), s = b(() => !!n), c = b({
    get() {
      return s.value ? n.modelValue : e.modelValue;
    },
    set(g) {
      s.value ? n.changeEvent(g) : t && t(ce, g), l.value.checked = e.modelValue === e.label;
    }
  }), u = st(b(() => n == null ? void 0 : n.size)), f = Zt(b(() => n == null ? void 0 : n.disabled)), i = T(!1), h = b(() => f.value || s.value && c.value !== e.label ? -1 : 0);
  return {
    radioRef: l,
    isGroup: s,
    radioGroup: n,
    focus: i,
    size: u,
    disabled: f,
    tabIndex: h,
    modelValue: c
  };
}, xn = ["value", "name", "disabled"], On = A({
  name: "ElRadio"
}), An = /* @__PURE__ */ A({
  ...On,
  props: zn,
  emits: wt,
  setup(e, { emit: t }) {
    const l = e, n = ae("radio"), { radioRef: s, radioGroup: c, focus: u, size: f, disabled: i, modelValue: h } = Vt(l, t);
    function g() {
      oe(() => t("change", h.value));
    }
    return (v, k) => {
      var w;
      return m(), P("label", {
        class: $([
          o(n).b(),
          o(n).is("disabled", o(i)),
          o(n).is("focus", o(u)),
          o(n).is("bordered", v.border),
          o(n).is("checked", o(h) === v.label),
          o(n).m(o(f))
        ])
      }, [
        W("span", {
          class: $([
            o(n).e("input"),
            o(n).is("disabled", o(i)),
            o(n).is("checked", o(h) === v.label)
          ])
        }, [
          ve(W("input", {
            ref_key: "radioRef",
            ref: s,
            "onUpdate:modelValue": k[0] || (k[0] = (z) => we(h) ? h.value = z : null),
            class: $(o(n).e("original")),
            value: v.label,
            name: v.name || ((w = o(c)) == null ? void 0 : w.name),
            disabled: o(i),
            type: "radio",
            onFocus: k[1] || (k[1] = (z) => u.value = !0),
            onBlur: k[2] || (k[2] = (z) => u.value = !1),
            onChange: g
          }, null, 42, xn), [
            [gt, o(h)]
          ]),
          W("span", {
            class: $(o(n).e("inner"))
          }, null, 2)
        ], 2),
        W("span", {
          class: $(o(n).e("label")),
          onKeydown: k[3] || (k[3] = ue(() => {
          }, ["stop"]))
        }, [
          Ve(v.$slots, "default", {}, () => [
            $e(Q(v.label), 1)
          ])
        ], 34)
      ], 2);
    };
  }
});
var Fn = /* @__PURE__ */ pe(An, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio.vue"]]);
const Rn = ge({
  ...Et,
  name: {
    type: String,
    default: ""
  }
}), Hn = ["value", "name", "disabled"], Kn = A({
  name: "ElRadioButton"
}), Gn = /* @__PURE__ */ A({
  ...Kn,
  props: Rn,
  setup(e) {
    const t = e, l = ae("radio"), { radioRef: n, focus: s, size: c, disabled: u, modelValue: f, radioGroup: i } = Vt(t), h = b(() => ({
      backgroundColor: (i == null ? void 0 : i.fill) || "",
      borderColor: (i == null ? void 0 : i.fill) || "",
      boxShadow: i != null && i.fill ? `-1px 0 0 0 ${i.fill}` : "",
      color: (i == null ? void 0 : i.textColor) || ""
    }));
    return (g, v) => {
      var k;
      return m(), P("label", {
        class: $([
          o(l).b("button"),
          o(l).is("active", o(f) === g.label),
          o(l).is("disabled", o(u)),
          o(l).is("focus", o(s)),
          o(l).bm("button", o(c))
        ])
      }, [
        ve(W("input", {
          ref_key: "radioRef",
          ref: n,
          "onUpdate:modelValue": v[0] || (v[0] = (w) => we(f) ? f.value = w : null),
          class: $(o(l).be("button", "original-radio")),
          value: g.label,
          type: "radio",
          name: g.name || ((k = o(i)) == null ? void 0 : k.name),
          disabled: o(u),
          onFocus: v[1] || (v[1] = (w) => s.value = !0),
          onBlur: v[2] || (v[2] = (w) => s.value = !1)
        }, null, 42, Hn), [
          [gt, o(f)]
        ]),
        W("span", {
          class: $(o(l).be("button", "inner")),
          style: bt(o(f) === g.label ? o(h) : {}),
          onKeydown: v[3] || (v[3] = ue(() => {
          }, ["stop"]))
        }, [
          Ve(g.$slots, "default", {}, () => [
            $e(Q(g.label), 1)
          ])
        ], 38)
      ], 2);
    };
  }
});
var Tt = /* @__PURE__ */ pe(Gn, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio-button.vue"]]);
const jn = ge({
  id: {
    type: String,
    default: void 0
  },
  size: Fe,
  disabled: Boolean,
  modelValue: {
    type: [String, Number, Boolean],
    default: ""
  },
  fill: {
    type: String,
    default: ""
  },
  label: {
    type: String,
    default: void 0
  },
  textColor: {
    type: String,
    default: ""
  },
  name: {
    type: String,
    default: void 0
  },
  validateEvent: {
    type: Boolean,
    default: !0
  }
}), qn = wt, Un = ["id", "aria-label", "aria-labelledby"], Wn = A({
  name: "ElRadioGroup"
}), Zn = /* @__PURE__ */ A({
  ...Wn,
  props: jn,
  emits: qn,
  setup(e, { emit: t }) {
    const l = e, n = ae("radio"), s = Yt(), c = T(), { formItem: u } = rt(), { inputId: f, isLabeledByFormItem: i } = Xt(l, {
      formItemContext: u
    }), h = (v) => {
      t(ce, v), oe(() => t("change", v));
    };
    Ke(() => {
      const v = c.value.querySelectorAll("[type=radio]"), k = v[0];
      !Array.from(v).some((w) => w.checked) && k && (k.tabIndex = 0);
    });
    const g = b(() => l.name || s.value);
    return yt(St, Ge({
      ...Cn(l),
      changeEvent: h,
      name: g
    })), se(() => l.modelValue, () => {
      l.validateEvent && (u == null || u.validate("change").catch((v) => it()));
    }), (v, k) => (m(), P("div", {
      id: o(f),
      ref_key: "radioGroupRef",
      ref: c,
      class: $(o(n).b("group")),
      role: "radiogroup",
      "aria-label": o(i) ? void 0 : v.label || "radio-group",
      "aria-labelledby": o(i) ? o(u).labelId : void 0
    }, [
      Ve(v.$slots, "default")
    ], 10, Un));
  }
});
var Pt = /* @__PURE__ */ pe(Zn, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio-group.vue"]]);
const Yn = Jt(Fn, {
  RadioButton: Tt,
  RadioGroup: Pt
});
ut(Pt);
ut(Tt);
var Xn = A({
  name: "NodeContent",
  setup() {
    return {
      ns: ae("cascader-node")
    };
  },
  render() {
    const { ns: e } = this, { node: t, panel: l } = this.$parent, { data: n, label: s } = t, { renderLabelFn: c } = l;
    return $n("span", { class: e.e("label") }, c ? c({ node: t, data: n }) : s);
  }
});
const je = Symbol(), Jn = A({
  name: "ElCascaderNode",
  components: {
    ElCheckbox: dt,
    ElRadio: Yn,
    NodeContent: Xn,
    ElIcon: ye,
    Check: ct,
    Loading: pt,
    ArrowRight: Qt
  },
  props: {
    node: {
      type: Object,
      required: !0
    },
    menuId: String
  },
  emits: ["expand"],
  setup(e, { emit: t }) {
    const l = He(je), n = ae("cascader-node"), s = b(() => l.isHoverMenu), c = b(() => l.config.multiple), u = b(() => l.config.checkStrictly), f = b(() => {
      var _;
      return (_ = l.checkedNodes[0]) == null ? void 0 : _.uid;
    }), i = b(() => e.node.isDisabled), h = b(() => e.node.isLeaf), g = b(() => u.value && !h.value || !i.value), v = b(() => w(l.expandingNode)), k = b(() => u.value && l.checkedNodes.some(w)), w = (_) => {
      var L;
      const { level: G, uid: re } = e.node;
      return ((L = _ == null ? void 0 : _.pathNodes[G - 1]) == null ? void 0 : L.uid) === re;
    }, z = () => {
      v.value || l.expandNode(e.node);
    }, ee = (_) => {
      const { node: L } = e;
      _ !== L.checked && l.handleCheckChange(L, _);
    }, I = () => {
      l.lazyLoad(e.node, () => {
        h.value || z();
      });
    }, H = (_) => {
      s.value && (B(), !h.value && t("expand", _));
    }, B = () => {
      const { node: _ } = e;
      !g.value || _.loading || (_.loaded ? z() : I());
    }, Z = () => {
      s.value && !h.value || (h.value && !i.value && !u.value && !c.value ? F(!0) : B());
    }, O = (_) => {
      u.value ? (ee(_), e.node.loaded && z()) : F(_);
    }, F = (_) => {
      e.node.loaded ? (ee(_), !u.value && z()) : I();
    };
    return {
      panel: l,
      isHoverMenu: s,
      multiple: c,
      checkStrictly: u,
      checkedNodeId: f,
      isDisabled: i,
      isLeaf: h,
      expandable: g,
      inExpandingPath: v,
      inCheckedPath: k,
      ns: n,
      handleHoverExpand: H,
      handleExpand: B,
      handleClick: Z,
      handleCheck: F,
      handleSelectCheck: O
    };
  }
}), Qn = ["id", "aria-haspopup", "aria-owns", "aria-expanded", "tabindex"], el = /* @__PURE__ */ W("span", null, null, -1);
function tl(e, t, l, n, s, c) {
  const u = U("el-checkbox"), f = U("el-radio"), i = U("check"), h = U("el-icon"), g = U("node-content"), v = U("loading"), k = U("arrow-right");
  return m(), P("li", {
    id: `${e.menuId}-${e.node.uid}`,
    role: "menuitem",
    "aria-haspopup": !e.isLeaf,
    "aria-owns": e.isLeaf ? null : e.menuId,
    "aria-expanded": e.inExpandingPath,
    tabindex: e.expandable ? -1 : void 0,
    class: $([
      e.ns.b(),
      e.ns.is("selectable", e.checkStrictly),
      e.ns.is("active", e.node.checked),
      e.ns.is("disabled", !e.expandable),
      e.inExpandingPath && "in-active-path",
      e.inCheckedPath && "in-checked-path"
    ]),
    onMouseenter: t[2] || (t[2] = (...w) => e.handleHoverExpand && e.handleHoverExpand(...w)),
    onFocus: t[3] || (t[3] = (...w) => e.handleHoverExpand && e.handleHoverExpand(...w)),
    onClick: t[4] || (t[4] = (...w) => e.handleClick && e.handleClick(...w))
  }, [
    J(" prefix "),
    e.multiple ? (m(), D(u, {
      key: 0,
      "model-value": e.node.checked,
      indeterminate: e.node.indeterminate,
      disabled: e.isDisabled,
      onClick: t[0] || (t[0] = ue(() => {
      }, ["stop"])),
      "onUpdate:modelValue": e.handleSelectCheck
    }, null, 8, ["model-value", "indeterminate", "disabled", "onUpdate:modelValue"])) : e.checkStrictly ? (m(), D(f, {
      key: 1,
      "model-value": e.checkedNodeId,
      label: e.node.uid,
      disabled: e.isDisabled,
      "onUpdate:modelValue": e.handleSelectCheck,
      onClick: t[1] || (t[1] = ue(() => {
      }, ["stop"]))
    }, {
      default: M(() => [
        J(`
        Add an empty element to avoid render label,
        do not use empty fragment here for https://github.com/vuejs/vue-next/pull/2485
      `),
        el
      ]),
      _: 1
    }, 8, ["model-value", "label", "disabled", "onUpdate:modelValue"])) : e.isLeaf && e.node.checked ? (m(), D(h, {
      key: 2,
      class: $(e.ns.e("prefix"))
    }, {
      default: M(() => [
        K(i)
      ]),
      _: 1
    }, 8, ["class"])) : J("v-if", !0),
    J(" content "),
    K(g),
    J(" postfix "),
    e.isLeaf ? J("v-if", !0) : (m(), P(de, { key: 3 }, [
      e.node.loading ? (m(), D(h, {
        key: 0,
        class: $([e.ns.is("loading"), e.ns.e("postfix")])
      }, {
        default: M(() => [
          K(v)
        ]),
        _: 1
      }, 8, ["class"])) : (m(), D(h, {
        key: 1,
        class: $(["arrow-right", e.ns.e("postfix")])
      }, {
        default: M(() => [
          K(k)
        ]),
        _: 1
      }, 8, ["class"]))
    ], 64))
  ], 42, Qn);
}
var nl = /* @__PURE__ */ pe(Jn, [["render", tl], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/cascader-panel/src/node.vue"]]);
const ll = A({
  name: "ElCascaderMenu",
  components: {
    Loading: pt,
    ElIcon: ye,
    ElScrollbar: ft,
    ElCascaderNode: nl
  },
  props: {
    nodes: {
      type: Array,
      required: !0
    },
    index: {
      type: Number,
      required: !0
    }
  },
  setup(e) {
    const t = Nn(), l = ae("cascader-menu"), { t: n } = vt(), s = Dn();
    let c = null, u = null;
    const f = He(je), i = T(null), h = b(() => !e.nodes.length), g = b(() => !f.initialLoaded), v = b(() => `cascader-menu-${s}-${e.index}`), k = (I) => {
      c = I.target;
    }, w = (I) => {
      if (!(!f.isHoverMenu || !c || !i.value))
        if (c.contains(I.target)) {
          z();
          const H = t.vnode.el, { left: B } = H.getBoundingClientRect(), { offsetWidth: Z, offsetHeight: O } = H, F = I.clientX - B, _ = c.offsetTop, L = _ + c.offsetHeight;
          i.value.innerHTML = `
          <path style="pointer-events: auto;" fill="transparent" d="M${F} ${_} L${Z} 0 V${_} Z" />
          <path style="pointer-events: auto;" fill="transparent" d="M${F} ${L} L${Z} ${O} V${L} Z" />
        `;
        } else
          u || (u = window.setTimeout(ee, f.config.hoverThreshold));
    }, z = () => {
      u && (clearTimeout(u), u = null);
    }, ee = () => {
      i.value && (i.value.innerHTML = "", z());
    };
    return {
      ns: l,
      panel: f,
      hoverZone: i,
      isEmpty: h,
      isLoading: g,
      menuId: v,
      t: n,
      handleExpand: k,
      handleMouseMove: w,
      clearHoverZone: ee
    };
  }
});
function al(e, t, l, n, s, c) {
  const u = U("el-cascader-node"), f = U("loading"), i = U("el-icon"), h = U("el-scrollbar");
  return m(), D(h, {
    key: e.menuId,
    tag: "ul",
    role: "menu",
    class: $(e.ns.b()),
    "wrap-class": e.ns.e("wrap"),
    "view-class": [e.ns.e("list"), e.ns.is("empty", e.isEmpty)],
    onMousemove: e.handleMouseMove,
    onMouseleave: e.clearHoverZone
  }, {
    default: M(() => {
      var g;
      return [
        (m(!0), P(de, null, he(e.nodes, (v) => (m(), D(u, {
          key: v.uid,
          node: v,
          "menu-id": e.menuId,
          onExpand: e.handleExpand
        }, null, 8, ["node", "menu-id", "onExpand"]))), 128)),
        e.isLoading ? (m(), P("div", {
          key: 0,
          class: $(e.ns.e("empty-text"))
        }, [
          K(i, {
            size: "14",
            class: $(e.ns.is("loading"))
          }, {
            default: M(() => [
              K(f)
            ]),
            _: 1
          }, 8, ["class"]),
          $e(" " + Q(e.t("el.cascader.loading")), 1)
        ], 2)) : e.isEmpty ? (m(), P("div", {
          key: 1,
          class: $(e.ns.e("empty-text"))
        }, Q(e.t("el.cascader.noData")), 3)) : (g = e.panel) != null && g.isHoverMenu ? (m(), P("svg", {
          key: 2,
          ref: "hoverZone",
          class: $(e.ns.e("hover-zone"))
        }, null, 2)) : J("v-if", !0)
      ];
    }),
    _: 1
  }, 8, ["class", "wrap-class", "view-class", "onMousemove", "onMouseleave"]);
}
var ol = /* @__PURE__ */ pe(ll, [["render", al], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/cascader-panel/src/menu.vue"]]);
let sl = 0;
const rl = (e) => {
  const t = [e];
  let { parent: l } = e;
  for (; l; )
    t.unshift(l), l = l.parent;
  return t;
};
class me {
  constructor(t, l, n, s = !1) {
    this.data = t, this.config = l, this.parent = n, this.root = s, this.uid = sl++, this.checked = !1, this.indeterminate = !1, this.loading = !1;
    const { value: c, label: u, children: f } = l, i = t[f], h = rl(this);
    this.level = s ? 0 : n ? n.level + 1 : 1, this.value = t[c], this.label = t[u], this.pathNodes = h, this.pathValues = h.map((g) => g.value), this.pathLabels = h.map((g) => g.label), this.childrenData = i, this.children = (i || []).map((g) => new me(g, l, this)), this.loaded = !l.lazy || this.isLeaf || !Oe(i);
  }
  get isDisabled() {
    const { data: t, parent: l, config: n } = this, { disabled: s, checkStrictly: c } = n;
    return (Xe(s) ? s(t, this) : !!t[s]) || !c && (l == null ? void 0 : l.isDisabled);
  }
  get isLeaf() {
    const { data: t, config: l, childrenData: n, loaded: s } = this, { lazy: c, leaf: u } = l, f = Xe(u) ? u(t, this) : t[u];
    return en(f) ? c && !s ? !1 : !(Array.isArray(n) && n.length) : !!f;
  }
  get valueByOption() {
    return this.config.emitPath ? this.pathValues : this.value;
  }
  appendChild(t) {
    const { childrenData: l, children: n } = this, s = new me(t, this.config, this);
    return Array.isArray(l) ? l.push(t) : this.childrenData = [t], n.push(s), s;
  }
  calcText(t, l) {
    const n = t ? this.pathLabels.join(l) : this.label;
    return this.text = n, n;
  }
  broadcast(t, ...l) {
    const n = `onParent${Je(t)}`;
    this.children.forEach((s) => {
      s && (s.broadcast(t, ...l), s[n] && s[n](...l));
    });
  }
  emit(t, ...l) {
    const { parent: n } = this, s = `onChild${Je(t)}`;
    n && (n[s] && n[s](...l), n.emit(t, ...l));
  }
  onParentCheck(t) {
    this.isDisabled || this.setCheckState(t);
  }
  onChildCheck() {
    const { children: t } = this, l = t.filter((s) => !s.isDisabled), n = l.length ? l.every((s) => s.checked) : !1;
    this.setCheckState(n);
  }
  setCheckState(t) {
    const l = this.children.length, n = this.children.reduce((s, c) => {
      const u = c.checked ? 1 : c.indeterminate ? 0.5 : 0;
      return s + u;
    }, 0);
    this.checked = this.loaded && this.children.filter((s) => !s.isDisabled).every((s) => s.loaded && s.checked) && t, this.indeterminate = this.loaded && n !== l && n > 0;
  }
  doCheck(t) {
    if (this.checked === t)
      return;
    const { checkStrictly: l, multiple: n } = this.config;
    l || !n ? this.checked = t : (this.broadcast("check", t), this.setCheckState(t), this.emit("check"));
  }
}
const Ae = (e, t) => e.reduce((l, n) => (n.isLeaf ? l.push(n) : (!t && l.push(n), l = l.concat(Ae(n.children, t))), l), []);
class at {
  constructor(t, l) {
    this.config = l;
    const n = (t || []).map((s) => new me(s, this.config));
    this.nodes = n, this.allNodes = Ae(n, !1), this.leafNodes = Ae(n, !0);
  }
  getNodes() {
    return this.nodes;
  }
  getFlattedNodes(t) {
    return t ? this.leafNodes : this.allNodes;
  }
  appendNode(t, l) {
    const n = l ? l.appendChild(t) : new me(t, this.config);
    l || this.nodes.push(n), this.allNodes.push(n), n.isLeaf && this.leafNodes.push(n);
  }
  appendNodes(t, l) {
    t.forEach((n) => this.appendNode(n, l));
  }
  getNodeByValue(t, l = !1) {
    return !t && t !== 0 ? null : this.getFlattedNodes(l).find((s) => ke(s.value, t) || ke(s.pathValues, t)) || null;
  }
  getSameNode(t) {
    return t && this.getFlattedNodes(!1).find(({ value: n, level: s }) => ke(t.value, n) && t.level === s) || null;
  }
}
const It = ge({
  modelValue: {
    type: _e([Number, String, Array])
  },
  options: {
    type: _e(Array),
    default: () => []
  },
  props: {
    type: _e(Object),
    default: () => ({})
  }
}), il = {
  expandTrigger: "click",
  multiple: !1,
  checkStrictly: !1,
  emitPath: !0,
  lazy: !1,
  lazyLoad: tn,
  value: "value",
  label: "label",
  children: "children",
  leaf: "leaf",
  disabled: "disabled",
  hoverThreshold: 500
}, ul = (e) => b(() => ({
  ...il,
  ...e.props
})), ot = (e) => {
  if (!e)
    return 0;
  const t = e.id.split("-");
  return Number(t[t.length - 2]);
}, dl = (e) => {
  if (!e)
    return;
  const t = e.querySelector("input");
  t ? t.click() : $t(e) && e.click();
}, cl = (e, t) => {
  const l = t.slice(0), n = l.map((c) => c.uid), s = e.reduce((c, u) => {
    const f = n.indexOf(u.uid);
    return f > -1 && (c.push(u), l.splice(f, 1), n.splice(f, 1)), c;
  }, []);
  return s.push(...l), s;
}, pl = A({
  name: "ElCascaderPanel",
  components: {
    ElCascaderMenu: ol
  },
  props: {
    ...It,
    border: {
      type: Boolean,
      default: !0
    },
    renderLabel: Function
  },
  emits: [ce, Ce, "close", "expand-change"],
  setup(e, { emit: t, slots: l }) {
    let n = !1;
    const s = ae("cascader"), c = ul(e);
    let u = null;
    const f = T(!0), i = T([]), h = T(null), g = T([]), v = T(null), k = T([]), w = b(() => c.value.expandTrigger === "hover"), z = b(() => e.renderLabel || l.default), ee = () => {
      const { options: d } = e, y = c.value;
      n = !1, u = new at(d, y), g.value = [u.getNodes()], y.lazy && Oe(e.options) ? (f.value = !1, I(void 0, (C) => {
        C && (u = new at(C, y), g.value = [u.getNodes()]), f.value = !0, G(!1, !0);
      })) : G(!1, !0);
    }, I = (d, y) => {
      const C = c.value;
      d = d || new me({}, C, void 0, !0), d.loading = !0;
      const S = (V) => {
        const N = d, j = N.root ? null : N;
        V && (u == null || u.appendNodes(V, j)), N.loading = !1, N.loaded = !0, N.childrenData = N.childrenData || [], y && y(V);
      };
      C.lazyLoad(d, S);
    }, H = (d, y) => {
      var C;
      const { level: S } = d, V = g.value.slice(0, S);
      let N;
      d.isLeaf ? N = d.pathNodes[S - 2] : (N = d, V.push(d.children)), ((C = v.value) == null ? void 0 : C.uid) !== (N == null ? void 0 : N.uid) && (v.value = d, g.value = V, !y && t("expand-change", (d == null ? void 0 : d.pathValues) || []));
    }, B = (d, y, C = !0) => {
      const { checkStrictly: S, multiple: V } = c.value, N = k.value[0];
      n = !0, !V && (N == null || N.doCheck(!1)), d.doCheck(y), L(), C && !V && !S && t("close"), !C && !V && !S && Z(d);
    }, Z = (d) => {
      d && (d = d.parent, Z(d), d && H(d));
    }, O = (d) => u == null ? void 0 : u.getFlattedNodes(d), F = (d) => {
      var y;
      return (y = O(d)) == null ? void 0 : y.filter((C) => C.checked !== !1);
    }, _ = () => {
      k.value.forEach((d) => d.doCheck(!1)), L();
    }, L = () => {
      var d;
      const { checkStrictly: y, multiple: C } = c.value, S = k.value, V = F(!y), N = cl(S, V), j = N.map((x) => x.valueByOption);
      k.value = N, h.value = C ? j : (d = j[0]) != null ? d : null;
    }, G = (d = !1, y = !1) => {
      const { modelValue: C } = e, { lazy: S, multiple: V, checkStrictly: N } = c.value, j = !N;
      if (!(!f.value || n || !y && ke(C, h.value)))
        if (S && !d) {
          const te = nt(Bn(lt(C))).map((Y) => u == null ? void 0 : u.getNodeByValue(Y)).filter((Y) => !!Y && !Y.loaded && !Y.loading);
          te.length ? te.forEach((Y) => {
            I(Y, () => G(!1, y));
          }) : G(!0, y);
        } else {
          const x = V ? lt(C) : [C], te = nt(x.map((Y) => u == null ? void 0 : u.getNodeByValue(Y, j)));
          re(te, y), h.value = Ct(C);
        }
    }, re = (d, y = !0) => {
      const { checkStrictly: C } = c.value, S = k.value, V = d.filter((x) => !!x && (C || x.isLeaf)), N = u == null ? void 0 : u.getSameNode(v.value), j = y && N || V[0];
      j ? j.pathNodes.forEach((x) => H(x, !0)) : v.value = null, S.forEach((x) => x.doCheck(!1)), V.forEach((x) => x.doCheck(!0)), k.value = V, oe(ie);
    }, ie = () => {
      ht && i.value.forEach((d) => {
        const y = d == null ? void 0 : d.$el;
        if (y) {
          const C = y.querySelector(`.${s.namespace.value}-scrollbar__wrap`), S = y.querySelector(`.${s.b("node")}.${s.is("active")}`) || y.querySelector(`.${s.b("node")}.in-active-path`);
          nn(C, S);
        }
      });
    }, Te = (d) => {
      const y = d.target, { code: C } = d;
      switch (C) {
        case R.up:
        case R.down: {
          d.preventDefault();
          const S = C === R.up ? -1 : 1;
          Ne(Nt(y, S, `.${s.b("node")}[tabindex="-1"]`));
          break;
        }
        case R.left: {
          d.preventDefault();
          const S = i.value[ot(y) - 1], V = S == null ? void 0 : S.$el.querySelector(`.${s.b("node")}[aria-expanded="true"]`);
          Ne(V);
          break;
        }
        case R.right: {
          d.preventDefault();
          const S = i.value[ot(y) + 1], V = S == null ? void 0 : S.$el.querySelector(`.${s.b("node")}[tabindex="-1"]`);
          Ne(V);
          break;
        }
        case R.enter:
          dl(y);
          break;
      }
    };
    return yt(je, Ge({
      config: c,
      expandingNode: v,
      checkedNodes: k,
      isHoverMenu: w,
      initialLoaded: f,
      renderLabelFn: z,
      lazyLoad: I,
      expandNode: H,
      handleCheckChange: B
    })), se([c, () => e.options], ee, {
      deep: !0,
      immediate: !0
    }), se(() => e.modelValue, () => {
      n = !1, G();
    }, {
      deep: !0
    }), se(() => h.value, (d) => {
      ke(d, e.modelValue) || (t(ce, d), t(Ce, d));
    }), Sn(() => i.value = []), Ke(() => !Oe(e.modelValue) && G()), {
      ns: s,
      menuList: i,
      menus: g,
      checkedNodes: k,
      handleKeyDown: Te,
      handleCheckChange: B,
      getFlattedNodes: O,
      getCheckedNodes: F,
      clearCheckedNodes: _,
      calculateCheckedValue: L,
      scrollToExpandingNode: ie
    };
  }
});
function fl(e, t, l, n, s, c) {
  const u = U("el-cascader-menu");
  return m(), P("div", {
    class: $([e.ns.b("panel"), e.ns.is("bordered", e.border)]),
    onKeydown: t[0] || (t[0] = (...f) => e.handleKeyDown && e.handleKeyDown(...f))
  }, [
    (m(!0), P(de, null, he(e.menus, (f, i) => (m(), D(u, {
      key: i,
      ref_for: !0,
      ref: (h) => e.menuList[i] = h,
      index: i,
      nodes: [...f]
    }, null, 8, ["index", "nodes"]))), 128))
  ], 34);
}
var Se = /* @__PURE__ */ pe(pl, [["render", fl], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/cascader-panel/src/index.vue"]]);
Se.install = (e) => {
  e.component(Se.name, Se);
};
const vl = Se, hl = ge({
  ...It,
  size: Fe,
  placeholder: String,
  disabled: Boolean,
  clearable: Boolean,
  filterable: Boolean,
  filterMethod: {
    type: _e(Function),
    default: (e, t) => e.text.includes(t)
  },
  separator: {
    type: String,
    default: " / "
  },
  showAllLevels: {
    type: Boolean,
    default: !0
  },
  collapseTags: Boolean,
  collapseTagsTooltip: {
    type: Boolean,
    default: !1
  },
  debounce: {
    type: Number,
    default: 300
  },
  beforeFilter: {
    type: _e(Function),
    default: () => !0
  },
  popperClass: {
    type: String,
    default: ""
  },
  teleported: ln.teleported,
  tagType: { ...an.type, default: "info" },
  validateEvent: {
    type: Boolean,
    default: !0
  }
}), ml = {
  [ce]: (e) => !!e || e === null,
  [Ce]: (e) => !!e || e === null,
  focus: (e) => e instanceof FocusEvent,
  blur: (e) => e instanceof FocusEvent,
  visibleChange: (e) => xe(e),
  expandChange: (e) => !!e,
  removeTag: (e) => !!e
}, gl = { key: 0 }, bl = ["placeholder", "onKeydown"], yl = ["onClick"], kl = "ElCascader", _l = A({
  name: kl
}), Cl = /* @__PURE__ */ A({
  ..._l,
  props: hl,
  emits: ml,
  setup(e, { expose: t, emit: l }) {
    const n = e, s = {
      modifiers: [
        {
          name: "arrowPosition",
          enabled: !0,
          phase: "main",
          fn: ({ state: a }) => {
            const { modifiersData: r, placement: p } = a;
            ["right", "left", "bottom", "top"].includes(p) || (r.arrow.x = 35);
          },
          requires: ["arrow"]
        }
      ]
    }, c = En();
    let u = 0, f = 0;
    const i = ae("cascader"), h = ae("input"), { t: g } = vt(), { form: v, formItem: k } = rt(), w = T(null), z = T(null), ee = T(null), I = T(null), H = T(null), B = T(!1), Z = T(!1), O = T(!1), F = T(""), _ = T(""), L = T([]), G = T([]), re = T([]), ie = T(!1), Te = b(() => c.style), d = b(() => n.disabled || (v == null ? void 0 : v.disabled)), y = b(() => n.placeholder || g("el.cascader.placeholder")), C = b(() => _.value || L.value.length > 0 || ie.value ? "" : y.value), S = st(), V = b(() => ["small"].includes(S.value) ? "small" : "default"), N = b(() => !!n.props.multiple), j = b(() => !n.filterable || N.value), x = b(() => N.value ? _.value : F.value), te = b(() => {
      var a;
      return ((a = I.value) == null ? void 0 : a.checkedNodes) || [];
    }), Y = b(() => !n.clearable || d.value || O.value || !Z.value ? !1 : !!te.value.length), Pe = b(() => {
      const { showAllLevels: a, separator: r } = n, p = te.value;
      return p.length ? N.value ? "" : p[0].calcText(a, r) : "";
    }), Ie = b({
      get() {
        return Ct(n.modelValue);
      },
      set(a) {
        l(ce, a), l(Ce, a), n.validateEvent && (k == null || k.validate("change").catch((r) => it()));
      }
    }), qe = b(() => {
      var a, r;
      return (r = (a = w.value) == null ? void 0 : a.popperRef) == null ? void 0 : r.contentRef;
    }), Mt = b(() => [
      i.b(),
      i.m(S.value),
      i.is("disabled", d.value),
      c.class
    ]), Bt = b(() => [
      h.e("icon"),
      "icon-arrow-down",
      i.is("reverse", B.value)
    ]), q = (a) => {
      var r, p, E;
      d.value || (a = a ?? !B.value, a !== B.value && (B.value = a, (p = (r = z.value) == null ? void 0 : r.input) == null || p.setAttribute("aria-expanded", `${a}`), a ? (be(), oe((E = I.value) == null ? void 0 : E.scrollToExpandingNode)) : n.filterable && De(), l("visibleChange", a)));
    }, be = () => {
      oe(() => {
        var a;
        (a = w.value) == null || a.updatePopper();
      });
    }, Le = () => {
      O.value = !1;
    }, Me = (a) => {
      const { showAllLevels: r, separator: p } = n;
      return {
        node: a,
        key: a.uid,
        text: a.calcText(r, p),
        hitState: !1,
        closable: !d.value && !a.isDisabled,
        isCollapseTag: !1
      };
    }, Be = (a) => {
      var r;
      const p = a.node;
      p.doCheck(!1), (r = I.value) == null || r.calculateCheckedValue(), l("removeTag", p.valueByOption);
    }, Dt = () => {
      if (!N.value)
        return;
      const a = te.value, r = [], p = [];
      if (a.forEach((E) => p.push(Me(E))), G.value = p, a.length) {
        const [E, ...ne] = a, le = ne.length;
        r.push(Me(E)), le && (n.collapseTags ? r.push({
          key: -1,
          text: `+ ${le}`,
          closable: !1,
          isCollapseTag: !0
        }) : ne.forEach((X) => r.push(Me(X))));
      }
      L.value = r;
    }, Ue = () => {
      var a, r;
      const { filterMethod: p, showAllLevels: E, separator: ne } = n, le = (r = (a = I.value) == null ? void 0 : a.getFlattedNodes(!n.props.checkStrictly)) == null ? void 0 : r.filter((X) => X.isDisabled ? !1 : (X.calcText(E, ne), p(X, x.value)));
      N.value && (L.value.forEach((X) => {
        X.hitState = !1;
      }), G.value.forEach((X) => {
        X.hitState = !1;
      })), O.value = !0, re.value = le, be();
    }, zt = () => {
      var a;
      let r;
      O.value && H.value ? r = H.value.$el.querySelector(`.${i.e("suggestion-item")}`) : r = (a = I.value) == null ? void 0 : a.$el.querySelector(`.${i.b("node")}[tabindex="-1"]`), r && (r.focus(), !O.value && r.click());
    }, We = () => {
      var a, r;
      const p = (a = z.value) == null ? void 0 : a.input, E = ee.value, ne = (r = H.value) == null ? void 0 : r.$el;
      if (!(!ht || !p)) {
        if (ne) {
          const le = ne.querySelector(`.${i.e("suggestion-list")}`);
          le.style.minWidth = `${p.offsetWidth}px`;
        }
        if (E) {
          const { offsetHeight: le } = E, X = L.value.length > 0 ? `${Math.max(le + 6, u)}px` : `${u}px`;
          p.style.height = X, be();
        }
      }
    }, xt = (a) => {
      var r;
      return (r = I.value) == null ? void 0 : r.getCheckedNodes(a);
    }, Ot = (a) => {
      be(), l("expandChange", a);
    }, fe = (a) => {
      var r;
      const p = (r = a.target) == null ? void 0 : r.value;
      if (a.type === "compositionend")
        ie.value = !1, oe(() => ze(p));
      else {
        const E = p[p.length - 1] || "";
        ie.value = !fn(E);
      }
    }, At = (a) => {
      if (!ie.value)
        switch (a.code) {
          case R.enter:
            q();
            break;
          case R.down:
            q(!0), oe(zt), a.preventDefault();
            break;
          case R.esc:
            B.value === !0 && (a.preventDefault(), a.stopPropagation(), q(!1));
            break;
          case R.tab:
            q(!1);
            break;
        }
    }, Ft = () => {
      var a;
      (a = I.value) == null || a.clearCheckedNodes(), !B.value && n.filterable && De(), q(!1);
    }, De = () => {
      const { value: a } = Pe;
      F.value = a, _.value = a;
    }, Rt = (a) => {
      var r, p;
      const { checked: E } = a;
      N.value ? (r = I.value) == null || r.handleCheckChange(a, !E, !1) : (!E && ((p = I.value) == null || p.handleCheckChange(a, !0, !1)), q(!1));
    }, Ht = (a) => {
      const r = a.target, { code: p } = a;
      switch (p) {
        case R.up:
        case R.down: {
          const E = p === R.up ? -1 : 1;
          Ne(Nt(r, E, `.${i.e("suggestion-item")}[tabindex="-1"]`));
          break;
        }
        case R.enter:
          r.click();
          break;
      }
    }, Kt = () => {
      const a = L.value, r = a[a.length - 1];
      f = _.value ? 0 : f + 1, !(!r || !f || n.collapseTags && a.length > 1) && (r.hitState ? Be(r) : r.hitState = !0);
    }, Gt = (a) => {
      l("focus", a);
    }, jt = (a) => {
      l("blur", a);
    }, qt = on(() => {
      const { value: a } = x;
      if (!a)
        return;
      const r = n.beforeFilter(a);
      sn(r) ? r.then(Ue).catch(() => {
      }) : r !== !1 ? Ue() : Le();
    }, n.debounce), ze = (a, r) => {
      !B.value && q(!0), !(r != null && r.isComposing) && (a ? qt() : Le());
    };
    return se(O, be), se([te, d], Dt), se(L, () => {
      oe(() => We());
    }), se(Pe, De, { immediate: !0 }), Ke(() => {
      const a = z.value.input, r = Number.parseFloat(rn(h.cssVarName("input-height"), a).value) - 2;
      u = a.offsetHeight || r, un(a, We);
    }), t({
      getCheckedNodes: xt,
      cascaderPanelRef: qe
    }), (a, r) => (m(), D(o(Qe), {
      ref_key: "tooltipRef",
      ref: w,
      visible: B.value,
      teleported: a.teleported,
      "popper-class": [o(i).e("dropdown"), a.popperClass],
      "popper-options": s,
      "fallback-placements": [
        "bottom-start",
        "bottom",
        "top-start",
        "top",
        "right",
        "left"
      ],
      "stop-popper-mouse-event": !1,
      "gpu-acceleration": !1,
      placement: "bottom-start",
      transition: `${o(i).namespace.value}-zoom-in-top`,
      effect: "light",
      pure: "",
      persistent: "",
      onHide: Le
    }, {
      default: M(() => [
        ve((m(), P("div", {
          class: $(o(Mt)),
          style: bt(o(Te)),
          onClick: r[5] || (r[5] = () => q(o(j) ? void 0 : !0)),
          onKeydown: At,
          onMouseenter: r[6] || (r[6] = (p) => Z.value = !0),
          onMouseleave: r[7] || (r[7] = (p) => Z.value = !1)
        }, [
          K(o(mt), {
            ref_key: "input",
            ref: z,
            modelValue: F.value,
            "onUpdate:modelValue": r[1] || (r[1] = (p) => F.value = p),
            placeholder: o(C),
            readonly: o(j),
            disabled: o(d),
            "validate-event": !1,
            size: o(S),
            class: $(o(i).is("focus", B.value)),
            onCompositionstart: fe,
            onCompositionupdate: fe,
            onCompositionend: fe,
            onFocus: Gt,
            onBlur: jt,
            onInput: ze
          }, {
            suffix: M(() => [
              o(Y) ? (m(), D(o(ye), {
                key: "clear",
                class: $([o(h).e("icon"), "icon-circle-close"]),
                onClick: ue(Ft, ["stop"])
              }, {
                default: M(() => [
                  K(o(dn))
                ]),
                _: 1
              }, 8, ["class", "onClick"])) : (m(), D(o(ye), {
                key: "arrow-down",
                class: $(o(Bt)),
                onClick: r[0] || (r[0] = ue((p) => q(), ["stop"]))
              }, {
                default: M(() => [
                  K(o(cn))
                ]),
                _: 1
              }, 8, ["class"]))
            ]),
            _: 1
          }, 8, ["modelValue", "placeholder", "readonly", "disabled", "size", "class"]),
          o(N) ? (m(), P("div", {
            key: 0,
            ref_key: "tagWrapper",
            ref: ee,
            class: $(o(i).e("tags"))
          }, [
            (m(!0), P(de, null, he(L.value, (p) => (m(), D(o(et), {
              key: p.key,
              type: a.tagType,
              size: o(V),
              hit: p.hitState,
              closable: p.closable,
              "disable-transitions": "",
              onClose: (E) => Be(p)
            }, {
              default: M(() => [
                p.isCollapseTag === !1 ? (m(), P("span", gl, Q(p.text), 1)) : (m(), D(o(Qe), {
                  key: 1,
                  disabled: B.value || !a.collapseTagsTooltip,
                  "fallback-placements": ["bottom", "top", "right", "left"],
                  placement: "bottom",
                  effect: "light"
                }, {
                  default: M(() => [
                    W("span", null, Q(p.text), 1)
                  ]),
                  content: M(() => [
                    W("div", {
                      class: $(o(i).e("collapse-tags"))
                    }, [
                      (m(!0), P(de, null, he(G.value.slice(1), (E, ne) => (m(), P("div", {
                        key: ne,
                        class: $(o(i).e("collapse-tag"))
                      }, [
                        (m(), D(o(et), {
                          key: E.key,
                          class: "in-tooltip",
                          type: a.tagType,
                          size: o(V),
                          hit: E.hitState,
                          closable: E.closable,
                          "disable-transitions": "",
                          onClose: (le) => Be(E)
                        }, {
                          default: M(() => [
                            W("span", null, Q(E.text), 1)
                          ]),
                          _: 2
                        }, 1032, ["type", "size", "hit", "closable", "onClose"]))
                      ], 2))), 128))
                    ], 2)
                  ]),
                  _: 2
                }, 1032, ["disabled"]))
              ]),
              _: 2
            }, 1032, ["type", "size", "hit", "closable", "onClose"]))), 128)),
            a.filterable && !o(d) ? ve((m(), P("input", {
              key: 0,
              "onUpdate:modelValue": r[2] || (r[2] = (p) => _.value = p),
              type: "text",
              class: $(o(i).e("search-input")),
              placeholder: o(Pe) ? "" : o(y),
              onInput: r[3] || (r[3] = (p) => ze(_.value, p)),
              onClick: r[4] || (r[4] = ue((p) => q(!0), ["stop"])),
              onKeydown: wn(Kt, ["delete"]),
              onCompositionstart: fe,
              onCompositionupdate: fe,
              onCompositionend: fe
            }, null, 42, bl)), [
              [Vn, _.value]
            ]) : J("v-if", !0)
          ], 2)) : J("v-if", !0)
        ], 38)), [
          [o(pn), () => q(!1), o(qe)]
        ])
      ]),
      content: M(() => [
        ve(K(o(vl), {
          ref_key: "panel",
          ref: I,
          modelValue: o(Ie),
          "onUpdate:modelValue": r[8] || (r[8] = (p) => we(Ie) ? Ie.value = p : null),
          options: a.options,
          props: n.props,
          border: !1,
          "render-label": a.$slots.default,
          onExpandChange: Ot,
          onClose: r[9] || (r[9] = (p) => a.$nextTick(() => q(!1)))
        }, null, 8, ["modelValue", "options", "props", "render-label"]), [
          [tt, !O.value]
        ]),
        a.filterable ? ve((m(), D(o(ft), {
          key: 0,
          ref_key: "suggestionPanel",
          ref: H,
          tag: "ul",
          class: $(o(i).e("suggestion-panel")),
          "view-class": o(i).e("suggestion-list"),
          onKeydown: Ht
        }, {
          default: M(() => [
            re.value.length ? (m(!0), P(de, { key: 0 }, he(re.value, (p) => (m(), P("li", {
              key: p.uid,
              class: $([
                o(i).e("suggestion-item"),
                o(i).is("checked", p.checked)
              ]),
              tabindex: -1,
              onClick: (E) => Rt(p)
            }, [
              W("span", null, Q(p.text), 1),
              p.checked ? (m(), D(o(ye), { key: 0 }, {
                default: M(() => [
                  K(o(ct))
                ]),
                _: 1
              })) : J("v-if", !0)
            ], 10, yl))), 128)) : Ve(a.$slots, "empty", { key: 1 }, () => [
              W("li", {
                class: $(o(i).e("empty-text"))
              }, Q(o(g)("el.cascader.noMatch")), 3)
            ])
          ]),
          _: 3
        }, 8, ["class", "view-class"])), [
          [tt, O.value]
        ]) : J("v-if", !0)
      ]),
      _: 3
    }, 8, ["visible", "teleported", "popper-class", "transition"]));
  }
});
var Ee = /* @__PURE__ */ pe(Cl, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/cascader/src/cascader.vue"]]);
Ee.install = (e) => {
  e.component(Ee.name, Ee);
};
const $l = Ee, Nl = $l;
function Sl() {
  return {};
}
const El = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  addon: Sl,
  default: vn
}, Symbol.toStringTag, { value: "Module" }));
function wl() {
  const e = {};
  return e.info = {
    init: {
      propsData: {
        modelValue: !1
      }
    },
    props: {}
  }, e;
}
const Vl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  addon: wl,
  default: hn
}, Symbol.toStringTag, { value: "Module" })), Tl = { style: { width: "50px", height: "30px" } }, Pl = /* @__PURE__ */ A({
  __name: "Button",
  props: {
    text: null
  },
  setup(e) {
    return (t, l) => {
      const n = mn;
      return m(), P("div", Tl, [
        K(n, kt(_t(t.$attrs)), {
          default: M(() => [
            $e(Q(e.text), 1)
          ]),
          _: 1
        }, 16)
      ]);
    };
  }
});
function Il() {
  const e = {};
  return e.props = (() => ({
    events: {
      onClick: {
        _component: "Input",
        _formItem: { label: "点击" }
      }
    },
    schema: {
      text: "text !== '4'"
    },
    props: {
      text: {
        _component: "Input",
        _formItem: { label: "文本" }
      },
      type: {
        _component: "Select",
        _formItem: { label: "类型" },
        placeholder: "类型",
        options: [
          {
            label: "primary",
            value: "primary"
          },
          {
            label: "danger",
            value: "danger"
          }
        ]
      }
    }
  }))(), e;
}
const Ll = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  addon: Il,
  default: Pl
}, Symbol.toStringTag, { value: "Module" }));
const Ml = /* @__PURE__ */ A({
  __name: "Cascader",
  props: {},
  setup(e) {
    return (t, l) => {
      const n = Nl;
      return m(), D(n);
    };
  }
});
function Bl() {
  const e = {};
  return e.info = {
    init: {
      options: [{
        value: "guide",
        label: "Guide"
      }],
      modelValue: []
    },
    props: {
      options: {
        _component: "Input"
      }
    }
  }, e;
}
const Dl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  addon: Bl,
  default: Ml
}, Symbol.toStringTag, { value: "Module" }));
const zl = /* @__PURE__ */ A({
  __name: "CheckboxGroup",
  props: {
    modelValue: null,
    isButton: { type: Boolean, default: !1 },
    options: null
  },
  emits: ["update:modelValue"],
  setup(e) {
    const { modelValue: t } = gn("modelValue");
    return (l, n) => {
      const s = yn;
      return m(), D(s, Tn(l.$attrs, {
        modelValue: o(t),
        "onUpdate:modelValue": n[0] || (n[0] = (c) => we(t) ? t.value = c : null)
      }), {
        default: M(() => [
          (m(!0), P(de, null, he(e.options, (c, u) => (m(), D(Pn(e.isButton ? o(bn) : o(dt)), {
            key: u,
            label: c
          }, {
            default: M(() => [
              $e(Q(c), 1)
            ]),
            _: 2
          }, 1032, ["label"]))), 128))
        ]),
        _: 1
      }, 16, ["modelValue"]);
    };
  }
});
function xl() {
  return {};
}
const Ol = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  addon: xl,
  default: zl
}, Symbol.toStringTag, { value: "Module" })), Al = {};
function Fl(e, t) {
  const l = mt;
  return m(), P("div", null, [
    K(l, kt(_t(e.$attrs)), null, 16)
  ]);
}
const Rl = /* @__PURE__ */ kn(Al, [["render", Fl]]);
function Hl() {
  const e = {};
  return e.info = {
    init: {
      propsData: {
        modelValue: ""
      }
    },
    props: {
      modelValue: {
        _component: "Input"
      }
    }
  }, e;
}
const Kl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  addon: Hl,
  default: Rl
}, Symbol.toStringTag, { value: "Module" })), Gl = /* @__PURE__ */ Object.assign({
  "./widgets/Button.vue": Ll,
  "./widgets/Cascader.vue": Dl,
  "./widgets/Checkbox.vue": Vl,
  "./widgets/CheckboxGroup.vue": Ol,
  "./widgets/Input.vue": Kl,
  "./widgets/Select.vue": El
});
Object.entries(Gl).forEach(([e, t]) => {
  if (!t.addon)
    return;
  const { info: l, props: n } = t.addon(), s = /\/([^/]+)\.vue$/.exec(e);
  _n("element-plus", s[1], t.default, n || l);
});
const Lt = T(0);
Re("a", Lt, { description: "hahah" });
Re("change", () => {
  Lt.value = 10, console.log("change");
}, { description: "hahah" });
Re("list", Ge([]), {});
