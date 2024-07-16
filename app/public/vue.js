import { n as m, q as Ze, u as $, v as K, x as v, y as Te, z as D, g as J, E as H, A as et, b as tt, B as st, h as nt, C as ot, D as it, F as rt, G as at, H as z, I as g, J as B, K as L, L as O, M as Pe, N as ct, O as lt, P as ut, Q as I, d as ft, R as Re, S as pt, T as dt, U as mt, t as ht, V as gt, W as re, X as ae, Y as bt, Z as Ct, _ as St, $ as _t, a0 as vt, a1 as yt, a2 as Et, a3 as Ae, a4 as wt } from "./vue.runtime.esm-bundler-02f1d5d8.js";
import { a6 as _s, bb as vs, a7 as ys, bc as Es, a8 as ws, a9 as Ts, aa as Ps, ab as Rs, ac as As, ad as Ns, a5 as xs, ae as Ms, af as Os, ag as Ds, ah as Ls, ai as Vs, aj as $s, ak as Is, al as Bs, am as Fs, bd as Hs, an as ks, ao as Us, ap as js, aq as Ks, ar as zs, as as qs, at as Ws, au as Gs, be as Xs, j as Js, bf as Ys, av as Qs, aw as Zs, e as en, ax as tn, i as sn, ay as nn, bg as on, bh as rn, bi as an, bj as cn, bk as ln, az as un, m as fn, aA as pn, aB as dn, aC as mn, bu as hn, bv as gn, bw as bn, aD as Cn, c as Sn, o as _n, aE as vn, aF as yn, aG as En, aH as wn, aI as Tn, k as Pn, aJ as Rn, aK as An, aL as Nn, p as xn, bl as Mn, aM as On, aN as Dn, a as Ln, bm as Vn, r as $n, aO as In, aP as Bn, aQ as Fn, aR as Hn, aS as kn, aT as Un, aU as jn, aV as Kn, aW as zn, s as qn, bn as Wn, bo as Gn, aX as Xn, aY as Jn, bp as Yn, bx as Qn, by as Zn, aZ as eo, l as to, bq as so, br as no, a_ as oo, bs as io, bt as ro, a$ as ao, b0 as co, b1 as lo, b2 as uo, b3 as fo, f as po, w as mo, b4 as ho, b5 as go, b6 as bo, b7 as Co, b8 as So, b9 as _o, ba as vo } from "./vue.runtime.esm-bundler-02f1d5d8.js";
const Tt = "http://www.w3.org/2000/svg", T = typeof document < "u" ? document : null, ce = T && /* @__PURE__ */ T.createElement("template"), Pt = {
  insert: (e, t, s) => {
    t.insertBefore(e, s || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, s, n) => {
    const o = t ? T.createElementNS(Tt, e) : T.createElement(e, s ? { is: s } : void 0);
    return e === "select" && n && n.multiple != null && o.setAttribute("multiple", n.multiple), o;
  },
  createText: (e) => T.createTextNode(e),
  createComment: (e) => T.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => T.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, s, n, o, i) {
    const r = s ? s.previousSibling : t.lastChild;
    if (o && (o === i || o.nextSibling))
      for (; t.insertBefore(o.cloneNode(!0), s), !(o === i || !(o = o.nextSibling)); )
        ;
    else {
      ce.innerHTML = n ? `<svg>${e}</svg>` : e;
      const a = ce.content;
      if (n) {
        const u = a.firstChild;
        for (; u.firstChild; )
          a.appendChild(u.firstChild);
        a.removeChild(u);
      }
      t.insertBefore(a, s);
    }
    return [
      // first
      r ? r.nextSibling : t.firstChild,
      // last
      s ? s.previousSibling : t.lastChild
    ];
  }
};
function Rt(e, t, s) {
  const n = e._vtc;
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : s ? e.setAttribute("class", t) : e.className = t;
}
function At(e, t, s) {
  const n = e.style, o = I(s);
  if (s && !o) {
    if (t && !I(t))
      for (const i in t)
        s[i] == null && q(n, i, "");
    for (const i in s)
      q(n, i, s[i]);
  } else {
    const i = n.display;
    o ? t !== s && (n.cssText = s) : t && e.removeAttribute("style"), "_vod" in e && (n.display = i);
  }
}
const Nt = /[^\\];\s*$/, le = /\s*!important$/;
function q(e, t, s) {
  if (g(s))
    s.forEach((n) => q(e, t, n));
  else if (s == null && (s = ""), Nt.test(s) && m(
    `Unexpected semicolon at the end of '${t}' style value: '${s}'`
  ), t.startsWith("--"))
    e.setProperty(t, s);
  else {
    const n = xt(e, t);
    le.test(s) ? e.setProperty(
      v(n),
      s.replace(le, ""),
      "important"
    ) : e[n] = s;
  }
}
const ue = ["Webkit", "Moz", "ms"], k = {};
function xt(e, t) {
  const s = k[t];
  if (s)
    return s;
  let n = $(t);
  if (n !== "filter" && n in e)
    return k[t] = n;
  n = yt(n);
  for (let o = 0; o < ue.length; o++) {
    const i = ue[o] + n;
    if (i in e)
      return k[t] = i;
  }
  return t;
}
const fe = "http://www.w3.org/1999/xlink";
function Mt(e, t, s, n, o) {
  if (n && t.startsWith("xlink:"))
    s == null ? e.removeAttributeNS(fe, t.slice(6, t.length)) : e.setAttributeNS(fe, t, s);
  else {
    const i = Et(t);
    s == null || i && !Ae(s) ? e.removeAttribute(t) : e.setAttribute(t, i ? "" : s);
  }
}
function Ot(e, t, s, n, o, i, r) {
  if (t === "innerHTML" || t === "textContent") {
    n && r(n, o, i), e[t] = s ?? "";
    return;
  }
  const a = e.tagName;
  if (t === "value" && a !== "PROGRESS" && // custom elements may use _value internally
  !a.includes("-")) {
    e._value = s;
    const c = a === "OPTION" ? e.getAttribute("value") : e.value, f = s ?? "";
    c !== f && (e.value = f), s == null && e.removeAttribute(t);
    return;
  }
  let u = !1;
  if (s === "" || s == null) {
    const c = typeof e[t];
    c === "boolean" ? s = Ae(s) : s == null && c === "string" ? (s = "", u = !0) : c === "number" && (s = 0, u = !0);
  }
  try {
    e[t] = s;
  } catch (c) {
    u || m(
      `Failed setting prop "${t}" on <${a.toLowerCase()}>: value ${s} is invalid.`,
      c
    );
  }
  u && e.removeAttribute(t);
}
function C(e, t, s, n) {
  e.addEventListener(t, s, n);
}
function Dt(e, t, s, n) {
  e.removeEventListener(t, s, n);
}
function Lt(e, t, s, n, o = null) {
  const i = e._vei || (e._vei = {}), r = i[t];
  if (n && r)
    r.value = n;
  else {
    const [a, u] = Vt(t);
    if (n) {
      const c = i[t] = Bt(n, o);
      C(e, a, c, u);
    } else
      r && (Dt(e, a, r, u), i[t] = void 0);
  }
}
const pe = /(?:Once|Passive|Capture)$/;
function Vt(e) {
  let t;
  if (pe.test(e)) {
    t = {};
    let n;
    for (; n = e.match(pe); )
      e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : v(e.slice(2)), t];
}
let U = 0;
const $t = /* @__PURE__ */ Promise.resolve(), It = () => U || ($t.then(() => U = 0), U = Date.now());
function Bt(e, t) {
  const s = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= s.attached)
      return;
    wt(
      Ft(n, s.value),
      t,
      5,
      [n]
    );
  };
  return s.value = e, s.attached = It(), s;
}
function Ft(e, t) {
  if (g(t)) {
    const s = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      s.call(e), e._stopped = !0;
    }, t.map((n) => (o) => !o._stopped && n && n(o));
  } else
    return t;
}
const de = /^on[a-z]/, Ht = (e, t, s, n, o = !1, i, r, a, u) => {
  t === "class" ? Rt(e, n, o) : t === "style" ? At(e, s, n) : _t(t) ? vt(t) || Lt(e, t, s, n, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : kt(e, t, n, o)) ? Ot(
    e,
    t,
    n,
    i,
    r,
    a,
    u
  ) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), Mt(e, t, n, o));
};
function kt(e, t, s, n) {
  return n ? !!(t === "innerHTML" || t === "textContent" || t in e && de.test(t) && Pe(s)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || de.test(t) && I(s) ? !1 : t in e;
}
function Ut(e, t) {
  const s = ft(e);
  class n extends Y {
    constructor(i) {
      super(s, i, t);
    }
  }
  return n.def = s, n;
}
const ls = (e) => Ut(e, as), jt = typeof HTMLElement < "u" ? HTMLElement : class {
};
class Y extends jt {
  constructor(t, s = {}, n) {
    super(), this._def = t, this._props = s, this._instance = null, this._connected = !1, this._resolved = !1, this._numberProps = null, this.shadowRoot && n ? n(this._createVNode(), this.shadowRoot) : (this.shadowRoot && m(
      "Custom element has pre-rendered declarative shadow root but is not defined as hydratable. Use `defineSSRCustomElement`."
    ), this.attachShadow({ mode: "open" }), this._def.__asyncLoader || this._resolveProps(this._def));
  }
  connectedCallback() {
    this._connected = !0, this._instance || (this._resolved ? this._update() : this._resolveDef());
  }
  disconnectedCallback() {
    this._connected = !1, Ze(() => {
      this._connected || (Ee(null, this.shadowRoot), this._instance = null);
    });
  }
  /**
   * resolve inner component definition (handle possible async component)
   */
  _resolveDef() {
    this._resolved = !0;
    for (let n = 0; n < this.attributes.length; n++)
      this._setAttr(this.attributes[n].name);
    new MutationObserver((n) => {
      for (const o of n)
        this._setAttr(o.attributeName);
    }).observe(this, { attributes: !0 });
    const t = (n, o = !1) => {
      const { props: i, styles: r } = n;
      let a;
      if (i && !g(i))
        for (const u in i) {
          const c = i[u];
          (c === Number || c && c.type === Number) && (u in this._props && (this._props[u] = K(this._props[u])), (a || (a = /* @__PURE__ */ Object.create(null)))[$(u)] = !0);
        }
      this._numberProps = a, o && this._resolveProps(n), this._applyStyles(r), this._update();
    }, s = this._def.__asyncLoader;
    s ? s().then((n) => t(n, !0)) : t(this._def);
  }
  _resolveProps(t) {
    const { props: s } = t, n = g(s) ? s : Object.keys(s || {});
    for (const o of Object.keys(this))
      o[0] !== "_" && n.includes(o) && this._setProp(o, this[o], !0, !1);
    for (const o of n.map($))
      Object.defineProperty(this, o, {
        get() {
          return this._getProp(o);
        },
        set(i) {
          this._setProp(o, i);
        }
      });
  }
  _setAttr(t) {
    let s = this.getAttribute(t);
    const n = $(t);
    this._numberProps && this._numberProps[n] && (s = K(s)), this._setProp(n, s, !1);
  }
  /**
   * @internal
   */
  _getProp(t) {
    return this._props[t];
  }
  /**
   * @internal
   */
  _setProp(t, s, n = !0, o = !0) {
    s !== this._props[t] && (this._props[t] = s, o && this._instance && this._update(), n && (s === !0 ? this.setAttribute(v(t), "") : typeof s == "string" || typeof s == "number" ? this.setAttribute(v(t), s + "") : s || this.removeAttribute(v(t))));
  }
  _update() {
    Ee(this._createVNode(), this.shadowRoot);
  }
  _createVNode() {
    const t = Te(this._def, D({}, this._props));
    return this._instance || (t.ce = (s) => {
      this._instance = s, s.isCE = !0, s.ceReload = (i) => {
        this._styles && (this._styles.forEach((r) => this.shadowRoot.removeChild(r)), this._styles.length = 0), this._applyStyles(i), this._instance = null, this._update();
      };
      const n = (i, r) => {
        this.dispatchEvent(
          new CustomEvent(i, {
            detail: r
          })
        );
      };
      s.emit = (i, ...r) => {
        n(i, r), v(i) !== i && n(v(i), r);
      };
      let o = this;
      for (; o = o && (o.parentNode || o.host); )
        if (o instanceof Y) {
          s.parent = o._instance, s.provides = o._instance.provides;
          break;
        }
    }), t;
  }
  _applyStyles(t) {
    t && t.forEach((s) => {
      const n = document.createElement("style");
      n.textContent = s, this.shadowRoot.appendChild(n), (this._styles || (this._styles = [])).push(n);
    });
  }
}
function us(e = "$style") {
  {
    const t = J();
    if (!t)
      return m("useCssModule must be called inside setup()"), H;
    const s = t.type.__cssModules;
    if (!s)
      return m("Current instance does not have CSS modules injected."), H;
    const n = s[e];
    return n || (m(`Current instance does not have CSS module named "${e}".`), H);
  }
}
function fs(e) {
  const t = J();
  if (!t) {
    m("useCssVars is called without current active component instance.");
    return;
  }
  const s = t.ut = (o = e(t.proxy)) => {
    Array.from(
      document.querySelectorAll(`[data-v-owner="${t.uid}"]`)
    ).forEach((i) => G(i, o));
  }, n = () => {
    const o = e(t.proxy);
    W(t.subTree, o), s(o);
  };
  et(n), tt(() => {
    const o = new MutationObserver(n);
    o.observe(t.subTree.el.parentNode, { childList: !0 }), st(() => o.disconnect());
  });
}
function W(e, t) {
  if (e.shapeFlag & 128) {
    const s = e.suspense;
    e = s.activeBranch, s.pendingBranch && !s.isHydrating && s.effects.push(() => {
      W(s.activeBranch, t);
    });
  }
  for (; e.component; )
    e = e.component.subTree;
  if (e.shapeFlag & 1 && e.el)
    G(e.el, t);
  else if (e.type === Re)
    e.children.forEach((s) => W(s, t));
  else if (e.type === pt) {
    let { el: s, anchor: n } = e;
    for (; s && (G(s, t), s !== n); )
      s = s.nextSibling;
  }
}
function G(e, t) {
  if (e.nodeType === 1) {
    const s = e.style;
    for (const n in t)
      s.setProperty(`--${n}`, t[n]);
  }
}
const S = "transition", N = "animation", Ne = (e, { slots: t }) => nt(ot, Me(e), t);
Ne.displayName = "Transition";
const xe = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: !0
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
}, Kt = Ne.props = /* @__PURE__ */ D(
  {},
  it,
  xe
), w = (e, t = []) => {
  g(e) ? e.forEach((s) => s(...t)) : e && e(...t);
}, me = (e) => e ? g(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Me(e) {
  const t = {};
  for (const l in e)
    l in xe || (t[l] = e[l]);
  if (e.css === !1)
    return t;
  const {
    name: s = "v",
    type: n,
    duration: o,
    enterFromClass: i = `${s}-enter-from`,
    enterActiveClass: r = `${s}-enter-active`,
    enterToClass: a = `${s}-enter-to`,
    appearFromClass: u = i,
    appearActiveClass: c = r,
    appearToClass: f = a,
    leaveFromClass: p = `${s}-leave-from`,
    leaveActiveClass: d = `${s}-leave-active`,
    leaveToClass: P = `${s}-leave-to`
  } = e, R = zt(o), We = R && R[0], Ge = R && R[1], {
    onBeforeEnter: Q,
    onEnter: Z,
    onEnterCancelled: ee,
    onLeave: te,
    onLeaveCancelled: Xe,
    onBeforeAppear: Je = Q,
    onAppear: Ye = Z,
    onAppearCancelled: Qe = ee
  } = t, F = (l, h, E) => {
    _(l, h ? f : a), _(l, h ? c : r), E && E();
  }, se = (l, h) => {
    l._isLeaving = !1, _(l, p), _(l, P), _(l, d), h && h();
  }, ne = (l) => (h, E) => {
    const oe = l ? Ye : Z, ie = () => F(h, l, E);
    w(oe, [h, ie]), he(() => {
      _(h, l ? u : i), b(h, l ? f : a), me(oe) || ge(h, n, We, ie);
    });
  };
  return D(t, {
    onBeforeEnter(l) {
      w(Q, [l]), b(l, i), b(l, r);
    },
    onBeforeAppear(l) {
      w(Je, [l]), b(l, u), b(l, c);
    },
    onEnter: ne(!1),
    onAppear: ne(!0),
    onLeave(l, h) {
      l._isLeaving = !0;
      const E = () => se(l, h);
      b(l, p), De(), b(l, d), he(() => {
        l._isLeaving && (_(l, p), b(l, P), me(te) || ge(l, n, Ge, E));
      }), w(te, [l, E]);
    },
    onEnterCancelled(l) {
      F(l, !1), w(ee, [l]);
    },
    onAppearCancelled(l) {
      F(l, !0), w(Qe, [l]);
    },
    onLeaveCancelled(l) {
      se(l), w(Xe, [l]);
    }
  });
}
function zt(e) {
  if (e == null)
    return null;
  if (rt(e))
    return [j(e.enter), j(e.leave)];
  {
    const t = j(e);
    return [t, t];
  }
}
function j(e) {
  const t = K(e);
  return at(t, "<transition> explicit duration"), t;
}
function b(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.add(s)), (e._vtc || (e._vtc = /* @__PURE__ */ new Set())).add(t);
}
function _(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.remove(n));
  const { _vtc: s } = e;
  s && (s.delete(t), s.size || (e._vtc = void 0));
}
function he(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let qt = 0;
function ge(e, t, s, n) {
  const o = e._endId = ++qt, i = () => {
    o === e._endId && n();
  };
  if (s)
    return setTimeout(i, s);
  const { type: r, timeout: a, propCount: u } = Oe(e, t);
  if (!r)
    return n();
  const c = r + "end";
  let f = 0;
  const p = () => {
    e.removeEventListener(c, d), i();
  }, d = (P) => {
    P.target === e && ++f >= u && p();
  };
  setTimeout(() => {
    f < u && p();
  }, a + 1), e.addEventListener(c, d);
}
function Oe(e, t) {
  const s = window.getComputedStyle(e), n = (R) => (s[R] || "").split(", "), o = n(`${S}Delay`), i = n(`${S}Duration`), r = be(o, i), a = n(`${N}Delay`), u = n(`${N}Duration`), c = be(a, u);
  let f = null, p = 0, d = 0;
  t === S ? r > 0 && (f = S, p = r, d = i.length) : t === N ? c > 0 && (f = N, p = c, d = u.length) : (p = Math.max(r, c), f = p > 0 ? r > c ? S : N : null, d = f ? f === S ? i.length : u.length : 0);
  const P = f === S && /\b(transform|all)(,|$)/.test(
    n(`${S}Property`).toString()
  );
  return {
    type: f,
    timeout: p,
    propCount: d,
    hasTransform: P
  };
}
function be(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((s, n) => Ce(s) + Ce(e[n])));
}
function Ce(e) {
  return Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function De() {
  return document.body.offsetHeight;
}
const Le = /* @__PURE__ */ new WeakMap(), Ve = /* @__PURE__ */ new WeakMap(), $e = {
  name: "TransitionGroup",
  props: /* @__PURE__ */ D({}, Kt, {
    tag: String,
    moveClass: String
  }),
  setup(e, { slots: t }) {
    const s = J(), n = dt();
    let o, i;
    return mt(() => {
      if (!o.length)
        return;
      const r = e.moveClass || `${e.name || "v"}-move`;
      if (!Yt(
        o[0].el,
        s.vnode.el,
        r
      ))
        return;
      o.forEach(Gt), o.forEach(Xt);
      const a = o.filter(Jt);
      De(), a.forEach((u) => {
        const c = u.el, f = c.style;
        b(c, r), f.transform = f.webkitTransform = f.transitionDuration = "";
        const p = c._moveCb = (d) => {
          d && d.target !== c || (!d || /transform$/.test(d.propertyName)) && (c.removeEventListener("transitionend", p), c._moveCb = null, _(c, r));
        };
        c.addEventListener("transitionend", p);
      });
    }), () => {
      const r = ht(e), a = Me(r);
      let u = r.tag || Re;
      o = i, i = t.default ? gt(t.default()) : [];
      for (let c = 0; c < i.length; c++) {
        const f = i[c];
        f.key != null ? re(
          f,
          ae(f, a, n, s)
        ) : m("<TransitionGroup> children must be keyed.");
      }
      if (o)
        for (let c = 0; c < o.length; c++) {
          const f = o[c];
          re(
            f,
            ae(f, a, n, s)
          ), Le.set(f, f.el.getBoundingClientRect());
        }
      return Te(u, null, i);
    };
  }
}, Wt = (e) => delete e.mode;
$e.props;
const ps = $e;
function Gt(e) {
  const t = e.el;
  t._moveCb && t._moveCb(), t._enterCb && t._enterCb();
}
function Xt(e) {
  Ve.set(e, e.el.getBoundingClientRect());
}
function Jt(e) {
  const t = Le.get(e), s = Ve.get(e), n = t.left - s.left, o = t.top - s.top;
  if (n || o) {
    const i = e.el.style;
    return i.transform = i.webkitTransform = `translate(${n}px,${o}px)`, i.transitionDuration = "0s", e;
  }
}
function Yt(e, t, s) {
  const n = e.cloneNode();
  e._vtc && e._vtc.forEach((r) => {
    r.split(/\s+/).forEach((a) => a && n.classList.remove(a));
  }), s.split(/\s+/).forEach((r) => r && n.classList.add(r)), n.style.display = "none";
  const o = t.nodeType === 1 ? t : t.parentNode;
  o.appendChild(n);
  const { hasTransform: i } = Oe(n);
  return o.removeChild(n), i;
}
const y = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return g(t) ? (s) => bt(t, s) : t;
};
function Qt(e) {
  e.target.composing = !0;
}
function Se(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const X = {
  created(e, { modifiers: { lazy: t, trim: s, number: n } }, o) {
    e._assign = y(o);
    const i = n || o.props && o.props.type === "number";
    C(e, t ? "change" : "input", (r) => {
      if (r.target.composing)
        return;
      let a = e.value;
      s && (a = a.trim()), i && (a = z(a)), e._assign(a);
    }), s && C(e, "change", () => {
      e.value = e.value.trim();
    }), t || (C(e, "compositionstart", Qt), C(e, "compositionend", Se), C(e, "change", Se));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, modifiers: { lazy: s, trim: n, number: o } }, i) {
    if (e._assign = y(i), e.composing || document.activeElement === e && e.type !== "range" && (s || n && e.value.trim() === t || (o || e.type === "number") && z(e.value) === t))
      return;
    const r = t ?? "";
    e.value !== r && (e.value = r);
  }
}, Ie = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, s) {
    e._assign = y(s), C(e, "change", () => {
      const n = e._modelValue, o = A(e), i = e.checked, r = e._assign;
      if (g(n)) {
        const a = B(n, o), u = a !== -1;
        if (i && !u)
          r(n.concat(o));
        else if (!i && u) {
          const c = [...n];
          c.splice(a, 1), r(c);
        }
      } else if (L(n)) {
        const a = new Set(n);
        i ? a.add(o) : a.delete(o), r(a);
      } else
        r(Fe(e, i));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: _e,
  beforeUpdate(e, t, s) {
    e._assign = y(s), _e(e, t, s);
  }
};
function _e(e, { value: t, oldValue: s }, n) {
  e._modelValue = t, g(t) ? e.checked = B(t, n.props.value) > -1 : L(t) ? e.checked = t.has(n.props.value) : t !== s && (e.checked = O(t, Fe(e, !0)));
}
const Be = {
  created(e, { value: t }, s) {
    e.checked = O(t, s.props.value), e._assign = y(s), C(e, "change", () => {
      e._assign(A(e));
    });
  },
  beforeUpdate(e, { value: t, oldValue: s }, n) {
    e._assign = y(n), t !== s && (e.checked = O(t, n.props.value));
  }
}, Zt = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: s } }, n) {
    const o = L(t);
    C(e, "change", () => {
      const i = Array.prototype.filter.call(e.options, (r) => r.selected).map(
        (r) => s ? z(A(r)) : A(r)
      );
      e._assign(
        e.multiple ? o ? new Set(i) : i : i[0]
      );
    }), e._assign = y(n);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    ve(e, t);
  },
  beforeUpdate(e, t, s) {
    e._assign = y(s);
  },
  updated(e, { value: t }) {
    ve(e, t);
  }
};
function ve(e, t) {
  const s = e.multiple;
  if (s && !g(t) && !L(t)) {
    m(
      `<select multiple v-model> expects an Array or Set value for its binding, but got ${Object.prototype.toString.call(t).slice(8, -1)}.`
    );
    return;
  }
  for (let n = 0, o = e.options.length; n < o; n++) {
    const i = e.options[n], r = A(i);
    if (s)
      g(t) ? i.selected = B(t, r) > -1 : i.selected = t.has(r);
    else if (O(A(i), t)) {
      e.selectedIndex !== n && (e.selectedIndex = n);
      return;
    }
  }
  !s && e.selectedIndex !== -1 && (e.selectedIndex = -1);
}
function A(e) {
  return "_value" in e ? e._value : e.value;
}
function Fe(e, t) {
  const s = t ? "_trueValue" : "_falseValue";
  return s in e ? e[s] : t;
}
const es = {
  created(e, t, s) {
    V(e, t, s, null, "created");
  },
  mounted(e, t, s) {
    V(e, t, s, null, "mounted");
  },
  beforeUpdate(e, t, s, n) {
    V(e, t, s, n, "beforeUpdate");
  },
  updated(e, t, s, n) {
    V(e, t, s, n, "updated");
  }
};
function He(e, t) {
  switch (e) {
    case "SELECT":
      return Zt;
    case "TEXTAREA":
      return X;
    default:
      switch (t) {
        case "checkbox":
          return Ie;
        case "radio":
          return Be;
        default:
          return X;
      }
  }
}
function V(e, t, s, n, o) {
  const r = He(
    e.tagName,
    s.props && s.props.type
  )[o];
  r && r(e, t, s, n);
}
function ts() {
  X.getSSRProps = ({ value: e }) => ({ value: e }), Be.getSSRProps = ({ value: e }, t) => {
    if (t.props && O(t.props.value, e))
      return { checked: !0 };
  }, Ie.getSSRProps = ({ value: e }, t) => {
    if (g(e)) {
      if (t.props && B(e, t.props.value) > -1)
        return { checked: !0 };
    } else if (L(e)) {
      if (t.props && e.has(t.props.value))
        return { checked: !0 };
    } else if (e)
      return { checked: !0 };
  }, es.getSSRProps = (e, t) => {
    if (typeof t.type != "string")
      return;
    const s = He(
      // resolveDynamicModel expects an uppercase tag name, but vnode.type is lowercase
      t.type.toUpperCase(),
      t.props && t.props.type
    );
    if (s.getSSRProps)
      return s.getSSRProps(e, t);
  };
}
const ss = ["ctrl", "shift", "alt", "meta"], ns = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, t) => ss.some((s) => e[`${s}Key`] && !t.includes(s))
}, ds = (e, t) => (s, ...n) => {
  for (let o = 0; o < t.length; o++) {
    const i = ns[t[o]];
    if (i && i(s, t))
      return;
  }
  return e(s, ...n);
}, os = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, ms = (e, t) => (s) => {
  if (!("key" in s))
    return;
  const n = v(s.key);
  if (t.some((o) => o === n || os[o] === n))
    return e(s);
}, is = {
  beforeMount(e, { value: t }, { transition: s }) {
    e._vod = e.style.display === "none" ? "" : e.style.display, s && t ? s.beforeEnter(e) : x(e, t);
  },
  mounted(e, { value: t }, { transition: s }) {
    s && t && s.enter(e);
  },
  updated(e, { value: t, oldValue: s }, { transition: n }) {
    !t != !s && (n ? t ? (n.beforeEnter(e), x(e, !0), n.enter(e)) : n.leave(e, () => {
      x(e, !1);
    }) : x(e, t));
  },
  beforeUnmount(e, { value: t }) {
    x(e, t);
  }
};
function x(e, t) {
  e.style.display = t ? e._vod : "none";
}
function rs() {
  is.getSSRProps = ({ value: e }) => {
    if (!e)
      return { style: { display: "none" } };
  };
}
const ke = /* @__PURE__ */ D({ patchProp: Ht }, Pt);
let M, ye = !1;
function Ue() {
  return M || (M = Ct(ke));
}
function je() {
  return M = ye ? M : St(ke), ye = !0, M;
}
const Ee = (...e) => {
  Ue().render(...e);
}, as = (...e) => {
  je().hydrate(...e);
}, hs = (...e) => {
  const t = Ue().createApp(...e);
  Ke(t), ze(t);
  const { mount: s } = t;
  return t.mount = (n) => {
    const o = qe(n);
    if (!o)
      return;
    const i = t._component;
    !Pe(i) && !i.render && !i.template && (i.template = o.innerHTML), o.innerHTML = "";
    const r = s(o, !1, o instanceof SVGElement);
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), r;
  }, t;
}, gs = (...e) => {
  const t = je().createApp(...e);
  Ke(t), ze(t);
  const { mount: s } = t;
  return t.mount = (n) => {
    const o = qe(n);
    if (o)
      return s(o, !0, o instanceof SVGElement);
  }, t;
};
function Ke(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => ct(t) || lt(t),
    writable: !1
  });
}
function ze(e) {
  if (ut()) {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        m(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const s = e.config.compilerOptions, n = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return m(n), s;
      },
      set() {
        m(n);
      }
    });
  }
}
function qe(e) {
  if (I(e)) {
    const t = document.querySelector(e);
    return t || m(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && m(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
let we = !1;
const bs = () => {
  we || (we = !0, ts(), rs());
};
export {
  ot as BaseTransition,
  it as BaseTransitionPropsValidators,
  _s as Comment,
  vs as EffectScope,
  Re as Fragment,
  ys as KeepAlive,
  Es as ReactiveEffect,
  pt as Static,
  ws as Suspense,
  Ts as Teleport,
  Ps as Text,
  Ne as Transition,
  ps as TransitionGroup,
  Y as VueElement,
  at as assertNumber,
  wt as callWithAsyncErrorHandling,
  Rs as callWithErrorHandling,
  $ as camelize,
  yt as capitalize,
  As as cloneVNode,
  Ns as compatUtils,
  xs as compile,
  Ms as computed,
  hs as createApp,
  Os as createBlock,
  Ds as createCommentVNode,
  Ls as createElementBlock,
  Vs as createElementVNode,
  St as createHydrationRenderer,
  $s as createPropsRestProxy,
  Ct as createRenderer,
  gs as createSSRApp,
  Is as createSlots,
  Bs as createStaticVNode,
  Fs as createTextVNode,
  Te as createVNode,
  Hs as customRef,
  ks as defineAsyncComponent,
  ft as defineComponent,
  Ut as defineCustomElement,
  Us as defineEmits,
  js as defineExpose,
  Ks as defineModel,
  zs as defineOptions,
  qs as defineProps,
  ls as defineSSRCustomElement,
  Ws as defineSlots,
  Gs as devtools,
  Xs as effect,
  Js as effectScope,
  J as getCurrentInstance,
  Ys as getCurrentScope,
  gt as getTransitionRawChildren,
  Qs as guardReactiveProps,
  nt as h,
  Zs as handleError,
  en as hasInjectionContext,
  as as hydrate,
  tn as initCustomFormatter,
  bs as initDirectivesForSSR,
  sn as inject,
  nn as isMemoSame,
  on as isProxy,
  rn as isReactive,
  an as isReadonly,
  cn as isRef,
  ut as isRuntimeOnly,
  ln as isShallow,
  un as isVNode,
  fn as markRaw,
  pn as mergeDefaults,
  dn as mergeModels,
  mn as mergeProps,
  Ze as nextTick,
  hn as normalizeClass,
  gn as normalizeProps,
  bn as normalizeStyle,
  Cn as onActivated,
  Sn as onBeforeMount,
  _n as onBeforeUnmount,
  vn as onBeforeUpdate,
  yn as onDeactivated,
  En as onErrorCaptured,
  tt as onMounted,
  wn as onRenderTracked,
  Tn as onRenderTriggered,
  Pn as onScopeDispose,
  Rn as onServerPrefetch,
  st as onUnmounted,
  mt as onUpdated,
  An as openBlock,
  Nn as popScopeId,
  xn as provide,
  Mn as proxyRefs,
  On as pushScopeId,
  Dn as queuePostFlushCb,
  Ln as reactive,
  Vn as readonly,
  $n as ref,
  In as registerRuntimeCompiler,
  Ee as render,
  Bn as renderList,
  Fn as renderSlot,
  Hn as resolveComponent,
  kn as resolveDirective,
  Un as resolveDynamicComponent,
  jn as resolveFilter,
  ae as resolveTransitionHooks,
  Kn as setBlockTracking,
  zn as setDevtoolsHook,
  re as setTransitionHooks,
  qn as shallowReactive,
  Wn as shallowReadonly,
  Gn as shallowRef,
  Xn as ssrContextKey,
  Jn as ssrUtils,
  Yn as stop,
  Qn as toDisplayString,
  Zn as toHandlerKey,
  eo as toHandlers,
  ht as toRaw,
  to as toRef,
  so as toRefs,
  no as toValue,
  oo as transformVNodeArgs,
  io as triggerRef,
  ro as unref,
  ao as useAttrs,
  us as useCssModule,
  fs as useCssVars,
  co as useModel,
  lo as useSSRContext,
  uo as useSlots,
  dt as useTransitionState,
  Ie as vModelCheckbox,
  es as vModelDynamic,
  Be as vModelRadio,
  Zt as vModelSelect,
  X as vModelText,
  is as vShow,
  fo as version,
  m as warn,
  po as watch,
  mo as watchEffect,
  et as watchPostEffect,
  ho as watchSyncEffect,
  go as withAsyncContext,
  bo as withCtx,
  Co as withDefaults,
  So as withDirectives,
  ms as withKeys,
  _o as withMemo,
  ds as withModifiers,
  vo as withScopeId
};
