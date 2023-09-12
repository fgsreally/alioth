import { createLayer as Yt } from "phecda-vue";
import { watch as J, unref as i, onMounted as ue, watchEffect as Kt, onBeforeUnmount as Se, computed as k, isRef as _t, ref as C, onScopeDispose as Wt, defineComponent as D, provide as Ye, nextTick as De, renderSlot as M, inject as $e, useSlots as Tt, Text as qt, openBlock as T, createElementBlock as Y, normalizeClass as R, normalizeStyle as Ke, Fragment as Xt, createBlock as q, withCtx as P, resolveDynamicComponent as Pe, createCommentVNode as ie, reactive as Jt, toRef as et, createVNode as te, h as Zt, createElementVNode as be, toDisplayString as kt, getCurrentInstance as Qt, Teleport as en, Transition as tn, withDirectives as nn, mergeProps as on, createSlots as rn, vShow as an, createTextVNode as sn } from "vue";
import { i as le, y as ln, z as Be, A as we, B as cn, n as oe, C as tt, D as un, F as fn, G as dn, N as xe, p as hn, _ as fe, e as pn, j as vn, l as gn, m as Ct, d as _e, u as mn, h as Le, H as bn, E as He, x as Mt, I as yn, g as je, J as En, U as xt, K as Sn, L as nt, M as wn, O as ot } from "./el-button.js";
var _n = typeof global == "object" && global && global.Object === Object && global;
const Tn = _n;
var kn = typeof self == "object" && self && self.Object === Object && self, Cn = Tn || kn || Function("return this")();
const We = Cn;
var Mn = We.Symbol;
const ne = Mn;
var At = Object.prototype, xn = At.hasOwnProperty, An = At.toString, ae = ne ? ne.toStringTag : void 0;
function In(e) {
  var t = xn.call(e, ae), n = e[ae];
  try {
    e[ae] = void 0;
    var o = !0;
  } catch {
  }
  var r = An.call(e);
  return o && (t ? e[ae] = n : delete e[ae]), r;
}
var Nn = Object.prototype, Rn = Nn.toString;
function Fn(e) {
  return Rn.call(e);
}
var On = "[object Null]", Dn = "[object Undefined]", rt = ne ? ne.toStringTag : void 0;
function It(e) {
  return e == null ? e === void 0 ? Dn : On : rt && rt in Object(e) ? In(e) : Fn(e);
}
function $n(e) {
  return e != null && typeof e == "object";
}
var Pn = "[object Symbol]";
function qe(e) {
  return typeof e == "symbol" || $n(e) && It(e) == Pn;
}
function Bn(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, r = Array(o); ++n < o; )
    r[n] = t(e[n], n, e);
  return r;
}
var Ln = Array.isArray;
const Xe = Ln;
var Hn = 1 / 0, at = ne ? ne.prototype : void 0, st = at ? at.toString : void 0;
function Nt(e) {
  if (typeof e == "string")
    return e;
  if (Xe(e))
    return Bn(e, Nt) + "";
  if (qe(e))
    return st ? st.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -Hn ? "-0" : t;
}
function Rt(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var jn = "[object AsyncFunction]", zn = "[object Function]", Un = "[object GeneratorFunction]", Vn = "[object Proxy]";
function Gn(e) {
  if (!Rt(e))
    return !1;
  var t = It(e);
  return t == zn || t == Un || t == jn || t == Vn;
}
var Yn = We["__core-js_shared__"];
const Ae = Yn;
var it = function() {
  var e = /[^.]+$/.exec(Ae && Ae.keys && Ae.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Kn(e) {
  return !!it && it in e;
}
var Wn = Function.prototype, qn = Wn.toString;
function Xn(e) {
  if (e != null) {
    try {
      return qn.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Jn = /[\\^$.*+?()[\]{}|]/g, Zn = /^\[object .+?Constructor\]$/, Qn = Function.prototype, eo = Object.prototype, to = Qn.toString, no = eo.hasOwnProperty, oo = RegExp(
  "^" + to.call(no).replace(Jn, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function ro(e) {
  if (!Rt(e) || Kn(e))
    return !1;
  var t = Gn(e) ? oo : Zn;
  return t.test(Xn(e));
}
function ao(e, t) {
  return e == null ? void 0 : e[t];
}
function Ft(e, t) {
  var n = ao(e, t);
  return ro(n) ? n : void 0;
}
function so(e, t) {
  return e === t || e !== e && t !== t;
}
var io = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, lo = /^\w*$/;
function co(e, t) {
  if (Xe(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || qe(e) ? !0 : lo.test(e) || !io.test(e) || t != null && e in Object(t);
}
var uo = Ft(Object, "create");
const ce = uo;
function fo() {
  this.__data__ = ce ? ce(null) : {}, this.size = 0;
}
function ho(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var po = "__lodash_hash_undefined__", vo = Object.prototype, go = vo.hasOwnProperty;
function mo(e) {
  var t = this.__data__;
  if (ce) {
    var n = t[e];
    return n === po ? void 0 : n;
  }
  return go.call(t, e) ? t[e] : void 0;
}
var bo = Object.prototype, yo = bo.hasOwnProperty;
function Eo(e) {
  var t = this.__data__;
  return ce ? t[e] !== void 0 : yo.call(t, e);
}
var So = "__lodash_hash_undefined__";
function wo(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = ce && t === void 0 ? So : t, this;
}
function Z(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
Z.prototype.clear = fo;
Z.prototype.delete = ho;
Z.prototype.get = mo;
Z.prototype.has = Eo;
Z.prototype.set = wo;
function _o() {
  this.__data__ = [], this.size = 0;
}
function Te(e, t) {
  for (var n = e.length; n--; )
    if (so(e[n][0], t))
      return n;
  return -1;
}
var To = Array.prototype, ko = To.splice;
function Co(e) {
  var t = this.__data__, n = Te(t, e);
  if (n < 0)
    return !1;
  var o = t.length - 1;
  return n == o ? t.pop() : ko.call(t, n, 1), --this.size, !0;
}
function Mo(e) {
  var t = this.__data__, n = Te(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function xo(e) {
  return Te(this.__data__, e) > -1;
}
function Ao(e, t) {
  var n = this.__data__, o = Te(n, e);
  return o < 0 ? (++this.size, n.push([e, t])) : n[o][1] = t, this;
}
function re(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
re.prototype.clear = _o;
re.prototype.delete = Co;
re.prototype.get = Mo;
re.prototype.has = xo;
re.prototype.set = Ao;
var Io = Ft(We, "Map");
const No = Io;
function Ro() {
  this.size = 0, this.__data__ = {
    hash: new Z(),
    map: new (No || re)(),
    string: new Z()
  };
}
function Fo(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function ke(e, t) {
  var n = e.__data__;
  return Fo(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function Oo(e) {
  var t = ke(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Do(e) {
  return ke(this, e).get(e);
}
function $o(e) {
  return ke(this, e).has(e);
}
function Po(e, t) {
  var n = ke(this, e), o = n.size;
  return n.set(e, t), this.size += n.size == o ? 0 : 1, this;
}
function Q(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
Q.prototype.clear = Ro;
Q.prototype.delete = Oo;
Q.prototype.get = Do;
Q.prototype.has = $o;
Q.prototype.set = Po;
var Bo = "Expected a function";
function Je(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Bo);
  var n = function() {
    var o = arguments, r = t ? t.apply(this, o) : o[0], a = n.cache;
    if (a.has(r))
      return a.get(r);
    var s = e.apply(this, o);
    return n.cache = a.set(r, s) || a, s;
  };
  return n.cache = new (Je.Cache || Q)(), n;
}
Je.Cache = Q;
var Lo = 500;
function Ho(e) {
  var t = Je(e, function(o) {
    return n.size === Lo && n.clear(), o;
  }), n = t.cache;
  return t;
}
var jo = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, zo = /\\(\\)?/g, Uo = Ho(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(jo, function(n, o, r, a) {
    t.push(r ? a.replace(zo, "$1") : o || n);
  }), t;
});
const Vo = Uo;
function Go(e) {
  return e == null ? "" : Nt(e);
}
function Yo(e, t) {
  return Xe(e) ? e : co(e, t) ? [e] : Vo(Go(e));
}
var Ko = 1 / 0;
function Wo(e) {
  if (typeof e == "string" || qe(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -Ko ? "-0" : t;
}
function qo(e, t) {
  t = Yo(t, e);
  for (var n = 0, o = t.length; e != null && n < o; )
    e = e[Wo(t[n++])];
  return n && n == o ? e : void 0;
}
function Xo(e, t, n) {
  var o = e == null ? void 0 : qo(e, t);
  return o === void 0 ? n : o;
}
let de;
const Jo = (e) => {
  var t;
  if (!le)
    return 0;
  if (de !== void 0)
    return de;
  const n = document.createElement("div");
  n.className = `${e}-scrollbar__wrap`, n.style.visibility = "hidden", n.style.width = "100px", n.style.position = "absolute", n.style.top = "-9999px", document.body.appendChild(n);
  const o = n.offsetWidth;
  n.style.overflow = "scroll";
  const r = document.createElement("div");
  r.style.width = "100%", n.appendChild(r);
  const a = r.offsetWidth;
  return (t = n.parentNode) == null || t.removeChild(n), de = o - a, de;
}, Zo = (...e) => (t) => {
  e.forEach((n) => {
    ln(n) ? n(t) : n.value = t;
  });
}, Ot = {
  tab: "Tab",
  enter: "Enter",
  space: "Space",
  left: "ArrowLeft",
  up: "ArrowUp",
  right: "ArrowRight",
  down: "ArrowDown",
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace",
  numpadEnter: "NumpadEnter",
  pageUp: "PageUp",
  pageDown: "PageDown",
  home: "Home",
  end: "End"
};
var ye = /* @__PURE__ */ ((e) => (e[e.TEXT = 1] = "TEXT", e[e.CLASS = 2] = "CLASS", e[e.STYLE = 4] = "STYLE", e[e.PROPS = 8] = "PROPS", e[e.FULL_PROPS = 16] = "FULL_PROPS", e[e.HYDRATE_EVENTS = 32] = "HYDRATE_EVENTS", e[e.STABLE_FRAGMENT = 64] = "STABLE_FRAGMENT", e[e.KEYED_FRAGMENT = 128] = "KEYED_FRAGMENT", e[e.UNKEYED_FRAGMENT = 256] = "UNKEYED_FRAGMENT", e[e.NEED_PATCH = 512] = "NEED_PATCH", e[e.DYNAMIC_SLOTS = 1024] = "DYNAMIC_SLOTS", e[e.HOISTED = -1] = "HOISTED", e[e.BAIL = -2] = "BAIL", e))(ye || {});
const Dt = Symbol("buttonGroupContextKey"), $t = Symbol("dialogInjectionKey"), ze = ({ from: e, replacement: t, scope: n, version: o, ref: r, type: a = "API" }, s) => {
  J(() => i(s), (l) => {
  }, {
    immediate: !0
  });
}, Qo = (e, t, n) => {
  let o = {
    offsetX: 0,
    offsetY: 0
  };
  const r = (l) => {
    const f = l.clientX, v = l.clientY, { offsetX: g, offsetY: m } = o, u = e.value.getBoundingClientRect(), h = u.left, c = u.top, d = u.width, b = u.height, y = document.documentElement.clientWidth, E = document.documentElement.clientHeight, z = -h + g, L = -c + m, $ = y - h - d + g, H = E - c - b + m, F = (A) => {
      const p = Math.min(Math.max(g + A.clientX - f, z), $), I = Math.min(Math.max(m + A.clientY - v, L), H);
      o = {
        offsetX: p,
        offsetY: I
      }, e.value.style.transform = `translate(${Be(p)}, ${Be(I)})`;
    }, w = () => {
      document.removeEventListener("mousemove", F), document.removeEventListener("mouseup", w);
    };
    document.addEventListener("mousemove", F), document.addEventListener("mouseup", w);
  }, a = () => {
    t.value && e.value && t.value.addEventListener("mousedown", r);
  }, s = () => {
    t.value && e.value && t.value.removeEventListener("mousedown", r);
  };
  ue(() => {
    Kt(() => {
      n.value ? a() : s();
    });
  }), Se(() => {
    s();
  });
};
var er = {
  name: "en",
  el: {
    colorpicker: {
      confirm: "OK",
      clear: "Clear",
      defaultLabel: "color picker",
      description: "current color is {color}. press enter to select a new color."
    },
    datepicker: {
      now: "Now",
      today: "Today",
      cancel: "Cancel",
      clear: "Clear",
      confirm: "OK",
      dateTablePrompt: "Use the arrow keys and enter to select the day of the month",
      monthTablePrompt: "Use the arrow keys and enter to select the month",
      yearTablePrompt: "Use the arrow keys and enter to select the year",
      selectedDate: "Selected date",
      selectDate: "Select date",
      selectTime: "Select time",
      startDate: "Start Date",
      startTime: "Start Time",
      endDate: "End Date",
      endTime: "End Time",
      prevYear: "Previous Year",
      nextYear: "Next Year",
      prevMonth: "Previous Month",
      nextMonth: "Next Month",
      year: "",
      month1: "January",
      month2: "February",
      month3: "March",
      month4: "April",
      month5: "May",
      month6: "June",
      month7: "July",
      month8: "August",
      month9: "September",
      month10: "October",
      month11: "November",
      month12: "December",
      week: "week",
      weeks: {
        sun: "Sun",
        mon: "Mon",
        tue: "Tue",
        wed: "Wed",
        thu: "Thu",
        fri: "Fri",
        sat: "Sat"
      },
      weeksFull: {
        sun: "Sunday",
        mon: "Monday",
        tue: "Tuesday",
        wed: "Wednesday",
        thu: "Thursday",
        fri: "Friday",
        sat: "Saturday"
      },
      months: {
        jan: "Jan",
        feb: "Feb",
        mar: "Mar",
        apr: "Apr",
        may: "May",
        jun: "Jun",
        jul: "Jul",
        aug: "Aug",
        sep: "Sep",
        oct: "Oct",
        nov: "Nov",
        dec: "Dec"
      }
    },
    inputNumber: {
      decrease: "decrease number",
      increase: "increase number"
    },
    select: {
      loading: "Loading",
      noMatch: "No matching data",
      noData: "No data",
      placeholder: "Select"
    },
    dropdown: {
      toggleDropdown: "Toggle Dropdown"
    },
    cascader: {
      noMatch: "No matching data",
      loading: "Loading",
      placeholder: "Select",
      noData: "No data"
    },
    pagination: {
      goto: "Go to",
      pagesize: "/page",
      total: "Total {total}",
      pageClassifier: "",
      deprecationWarning: "Deprecated usages detected, please refer to the el-pagination documentation for more details"
    },
    dialog: {
      close: "Close this dialog"
    },
    drawer: {
      close: "Close this dialog"
    },
    messagebox: {
      title: "Message",
      confirm: "OK",
      cancel: "Cancel",
      error: "Illegal input",
      close: "Close this dialog"
    },
    upload: {
      deleteTip: "press delete to remove",
      delete: "Delete",
      preview: "Preview",
      continue: "Continue"
    },
    slider: {
      defaultLabel: "slider between {min} and {max}",
      defaultRangeStartLabel: "pick start value",
      defaultRangeEndLabel: "pick end value"
    },
    table: {
      emptyText: "No Data",
      confirmFilter: "Confirm",
      resetFilter: "Reset",
      clearFilter: "All",
      sumText: "Sum"
    },
    tree: {
      emptyText: "No Data"
    },
    transfer: {
      noMatch: "No matching data",
      noData: "No data",
      titles: ["List 1", "List 2"],
      filterPlaceholder: "Enter keyword",
      noCheckedFormat: "{total} items",
      hasCheckedFormat: "{checked}/{total} checked"
    },
    image: {
      error: "FAILED"
    },
    pageHeader: {
      title: "Back"
    },
    popconfirm: {
      confirmButtonText: "Yes",
      cancelButtonText: "No"
    }
  }
};
const tr = (e) => (t, n) => nr(t, n, i(e)), nr = (e, t, n) => Xo(n, e, e).replace(/\{(\w+)\}/g, (o, r) => {
  var a;
  return `${(a = t == null ? void 0 : t[r]) != null ? a : `{${r}}`}`;
}), or = (e) => {
  const t = k(() => i(e).name), n = _t(e) ? e : C(e);
  return {
    lang: t,
    locale: n,
    t: tr(e)
  };
}, rr = () => {
  const e = we("locale");
  return or(k(() => e.value || er));
}, ar = () => {
}, sr = Array.isArray, ir = (e) => typeof e == "function", lr = (e) => typeof e == "symbol";
let cr;
function ur(e, t = cr) {
  t && t.active && t.effects.push(e);
}
const fr = (e) => {
  const t = new Set(e);
  return t.w = 0, t.n = 0, t;
}, Pt = (e) => (e.w & K) > 0, Bt = (e) => (e.n & K) > 0, dr = ({ deps: e }) => {
  if (e.length)
    for (let t = 0; t < e.length; t++)
      e[t].w |= K;
}, hr = (e) => {
  const { deps: t } = e;
  if (t.length) {
    let n = 0;
    for (let o = 0; o < t.length; o++) {
      const r = t[o];
      Pt(r) && !Bt(r) ? r.delete(e) : t[n++] = r, r.w &= ~K, r.n &= ~K;
    }
    t.length = n;
  }
};
let se = 0, K = 1;
const Ue = 30;
let B;
class pr {
  constructor(t, n = null, o) {
    this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, ur(this, o);
  }
  run() {
    if (!this.active)
      return this.fn();
    let t = B, n = Ee;
    for (; t; ) {
      if (t === this)
        return;
      t = t.parent;
    }
    try {
      return this.parent = B, B = this, Ee = !0, K = 1 << ++se, se <= Ue ? dr(this) : lt(this), this.fn();
    } finally {
      se <= Ue && hr(this), K = 1 << --se, B = this.parent, Ee = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    B === this ? this.deferStop = !0 : this.active && (lt(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function lt(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++)
      t[n].delete(e);
    t.length = 0;
  }
}
let Ee = !0;
function vr(e, t) {
  let n = !1;
  se <= Ue ? Bt(e) || (e.n |= K, n = !Pt(e)) : n = !e.has(B), n && (e.add(B), B.deps.push(e));
}
function gr(e, t) {
  const n = sr(e) ? e : [...e];
  for (const o of n)
    o.computed && ct(o);
  for (const o of n)
    o.computed || ct(o);
}
function ct(e, t) {
  (e !== B || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run());
}
new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(lr)
);
function Ce(e) {
  const t = e && e.__v_raw;
  return t ? Ce(t) : e;
}
function mr(e) {
  Ee && B && (e = Ce(e), vr(e.dep || (e.dep = fr())));
}
function br(e, t) {
  e = Ce(e);
  const n = e.dep;
  n && gr(n);
}
class yr {
  constructor(t, n, o, r) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this._dirty = !0, this.effect = new pr(t, () => {
      this._dirty || (this._dirty = !0, br(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !r, this.__v_isReadonly = o;
  }
  get value() {
    const t = Ce(this);
    return mr(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value;
  }
  set value(t) {
    this._setter(t);
  }
}
function Er(e, t, n = !1) {
  let o, r;
  const a = ir(e);
  return a ? (o = e, r = ar) : (o = e.get, r = e.set), new yr(o, r, a || !r, n);
}
const Sr = (e) => {
  _t(e) || cn("[useLockscreen]", "You need to pass a ref param to this function");
  const t = oe("popup"), n = Er(() => t.bm("parent", "hidden"));
  if (!le || tt(document.body, n.value))
    return;
  let o = 0, r = !1, a = "0";
  const s = () => {
    setTimeout(() => {
      dn(document.body, n.value), r && (document.body.style.width = a);
    }, 200);
  };
  J(e, (l) => {
    if (!l) {
      s();
      return;
    }
    r = !tt(document.body, n.value), r && (a = document.body.style.width), o = Jo(t.namespace.value);
    const f = document.documentElement.clientHeight < document.body.scrollHeight, v = un(document.body, "overflowY");
    o > 0 && (f || v === "scroll") && r && (document.body.style.width = `calc(100% - ${o}px)`), fn(document.body, n.value);
  }), Wt(() => s());
}, Lt = (e) => {
  if (!e)
    return { onClick: xe, onMousedown: xe, onMouseup: xe };
  let t = !1, n = !1;
  return { onClick: (s) => {
    t && n && e(s), t = n = !1;
  }, onMousedown: (s) => {
    t = s.target === s.currentTarget;
  }, onMouseup: (s) => {
    n = s.target === s.currentTarget;
  } };
};
let ee = [];
const ut = (e) => {
  const t = e;
  t.key === Ot.esc && ee.forEach((n) => n(t));
}, wr = (e) => {
  ue(() => {
    ee.length === 0 && document.addEventListener("keydown", ut), le && ee.push(e);
  }), Se(() => {
    ee = ee.filter((t) => t !== e), ee.length === 0 && le && document.removeEventListener("keydown", ut);
  });
}, ft = C(0), _r = () => {
  const e = we("zIndex", 2e3), t = k(() => e.value + ft.value);
  return {
    initialZIndex: e,
    currentZIndex: t,
    nextZIndex: () => (ft.value++, t.value)
  };
}, Ie = "focus-trap.focus-after-trapped", Ne = "focus-trap.focus-after-released", Tr = "focus-trap.focusout-prevented", dt = {
  cancelable: !0,
  bubbles: !1
}, kr = {
  cancelable: !0,
  bubbles: !1
}, ht = "focusAfterTrapped", pt = "focusAfterReleased", Ht = Symbol("elFocusTrap"), Ze = C(), Me = C(0), Qe = C(0);
let he = 0;
const jt = (e) => {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const r = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || r ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 || o === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}, vt = (e, t) => {
  for (const n of e)
    if (!Cr(n, t))
      return n;
}, Cr = (e, t) => {
  if (getComputedStyle(e).visibility === "hidden")
    return !0;
  for (; e; ) {
    if (t && e === t)
      return !1;
    if (getComputedStyle(e).display === "none")
      return !0;
    e = e.parentElement;
  }
  return !1;
}, Mr = (e) => {
  const t = jt(e), n = vt(t, e), o = vt(t.reverse(), e);
  return [n, o];
}, xr = (e) => e instanceof HTMLInputElement && "select" in e, V = (e, t) => {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), Qe.value = window.performance.now(), e !== n && xr(e) && t && e.select();
  }
};
function gt(e, t) {
  const n = [...e], o = e.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
const Ar = () => {
  let e = [];
  return {
    push: (o) => {
      const r = e[0];
      r && o !== r && r.pause(), e = gt(e, o), e.unshift(o);
    },
    remove: (o) => {
      var r, a;
      e = gt(e, o), (a = (r = e[0]) == null ? void 0 : r.resume) == null || a.call(r);
    }
  };
}, Ir = (e, t = !1) => {
  const n = document.activeElement;
  for (const o of e)
    if (V(o, t), document.activeElement !== n)
      return;
}, mt = Ar(), Nr = () => Me.value > Qe.value, pe = () => {
  Ze.value = "pointer", Me.value = window.performance.now();
}, bt = () => {
  Ze.value = "keyboard", Me.value = window.performance.now();
}, Rr = () => (ue(() => {
  he === 0 && (document.addEventListener("mousedown", pe), document.addEventListener("touchstart", pe), document.addEventListener("keydown", bt)), he++;
}), Se(() => {
  he--, he <= 0 && (document.removeEventListener("mousedown", pe), document.removeEventListener("touchstart", pe), document.removeEventListener("keydown", bt));
}), {
  focusReason: Ze,
  lastUserFocusTimestamp: Me,
  lastAutomatedFocusTimestamp: Qe
}), ve = (e) => new CustomEvent(Tr, {
  ...kr,
  detail: e
}), Fr = D({
  name: "ElFocusTrap",
  inheritAttrs: !1,
  props: {
    loop: Boolean,
    trapped: Boolean,
    focusTrapEl: Object,
    focusStartEl: {
      type: [Object, String],
      default: "first"
    }
  },
  emits: [
    ht,
    pt,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(e, { emit: t }) {
    const n = C();
    let o, r;
    const { focusReason: a } = Rr();
    wr((c) => {
      e.trapped && !s.paused && t("release-requested", c);
    });
    const s = {
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    }, l = (c) => {
      if (!e.loop && !e.trapped || s.paused)
        return;
      const { key: d, altKey: b, ctrlKey: y, metaKey: E, currentTarget: z, shiftKey: L } = c, { loop: $ } = e, H = d === Ot.tab && !b && !y && !E, F = document.activeElement;
      if (H && F) {
        const w = z, [A, p] = Mr(w);
        if (A && p) {
          if (!L && F === p) {
            const _ = ve({
              focusReason: a.value
            });
            t("focusout-prevented", _), _.defaultPrevented || (c.preventDefault(), $ && V(A, !0));
          } else if (L && [A, w].includes(F)) {
            const _ = ve({
              focusReason: a.value
            });
            t("focusout-prevented", _), _.defaultPrevented || (c.preventDefault(), $ && V(p, !0));
          }
        } else if (F === w) {
          const _ = ve({
            focusReason: a.value
          });
          t("focusout-prevented", _), _.defaultPrevented || c.preventDefault();
        }
      }
    };
    Ye(Ht, {
      focusTrapRef: n,
      onKeydown: l
    }), J(() => e.focusTrapEl, (c) => {
      c && (n.value = c);
    }, { immediate: !0 }), J([n], ([c], [d]) => {
      c && (c.addEventListener("keydown", l), c.addEventListener("focusin", g), c.addEventListener("focusout", m)), d && (d.removeEventListener("keydown", l), d.removeEventListener("focusin", g), d.removeEventListener("focusout", m));
    });
    const f = (c) => {
      t(ht, c);
    }, v = (c) => t(pt, c), g = (c) => {
      const d = i(n);
      if (!d)
        return;
      const b = c.target, y = c.relatedTarget, E = b && d.contains(b);
      e.trapped || y && d.contains(y) || (o = y), E && t("focusin", c), !s.paused && e.trapped && (E ? r = b : V(r, !0));
    }, m = (c) => {
      const d = i(n);
      if (!(s.paused || !d))
        if (e.trapped) {
          const b = c.relatedTarget;
          !hn(b) && !d.contains(b) && setTimeout(() => {
            if (!s.paused && e.trapped) {
              const y = ve({
                focusReason: a.value
              });
              t("focusout-prevented", y), y.defaultPrevented || V(r, !0);
            }
          }, 0);
        } else {
          const b = c.target;
          b && d.contains(b) || t("focusout", c);
        }
    };
    async function u() {
      await De();
      const c = i(n);
      if (c) {
        mt.push(s);
        const d = c.contains(document.activeElement) ? o : document.activeElement;
        if (o = d, !c.contains(d)) {
          const y = new Event(Ie, dt);
          c.addEventListener(Ie, f), c.dispatchEvent(y), y.defaultPrevented || De(() => {
            let E = e.focusStartEl;
            pn(E) || (V(E), document.activeElement !== E && (E = "first")), E === "first" && Ir(jt(c), !0), (document.activeElement === d || E === "container") && V(c);
          });
        }
      }
    }
    function h() {
      const c = i(n);
      if (c) {
        c.removeEventListener(Ie, f);
        const d = new CustomEvent(Ne, {
          ...dt,
          detail: {
            focusReason: a.value
          }
        });
        c.addEventListener(Ne, v), c.dispatchEvent(d), !d.defaultPrevented && (a.value == "keyboard" || !Nr()) && V(o ?? document.body), c.removeEventListener(Ne, f), mt.remove(s);
      }
    }
    return ue(() => {
      e.trapped && u(), J(() => e.trapped, (c) => {
        c ? u() : h();
      });
    }), Se(() => {
      e.trapped && h();
    }), {
      onKeydown: l
    };
  }
});
function Or(e, t, n, o, r, a) {
  return M(e.$slots, "default", { handleKeydown: e.onKeydown });
}
var Dr = /* @__PURE__ */ fe(Fr, [["render", Or], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/focus-trap/src/focus-trap.vue"]]);
const $r = (e, t) => {
  ze({
    from: "type.text",
    replacement: "link",
    version: "3.0.0",
    scope: "props",
    ref: "https://element-plus.org/en-US/component/button.html#button-attributes"
  }, k(() => e.type === "text"));
  const n = $e(Dt, void 0), o = we("button"), { form: r } = vn(), a = gn(k(() => n == null ? void 0 : n.size)), s = Ct(), l = C(), f = Tt(), v = k(() => e.type || (n == null ? void 0 : n.type) || ""), g = k(() => {
    var h, c, d;
    return (d = (c = e.autoInsertSpace) != null ? c : (h = o.value) == null ? void 0 : h.autoInsertSpace) != null ? d : !1;
  }), m = k(() => {
    var h;
    const c = (h = f.default) == null ? void 0 : h.call(f);
    if (g.value && (c == null ? void 0 : c.length) === 1) {
      const d = c[0];
      if ((d == null ? void 0 : d.type) === qt) {
        const b = d.children;
        return /^\p{Unified_Ideograph}{2}$/u.test(b.trim());
      }
    }
    return !1;
  });
  return {
    _disabled: s,
    _size: a,
    _type: v,
    _ref: l,
    shouldAddSpace: m,
    handleClick: (h) => {
      e.nativeType === "reset" && (r == null || r.resetFields()), t("click", h);
    }
  };
}, Pr = [
  "default",
  "primary",
  "success",
  "warning",
  "info",
  "danger",
  "text",
  ""
], Br = ["button", "submit", "reset"], Ve = _e({
  size: mn,
  disabled: Boolean,
  type: {
    type: String,
    values: Pr,
    default: ""
  },
  icon: {
    type: Le
  },
  nativeType: {
    type: String,
    values: Br,
    default: "button"
  },
  loading: Boolean,
  loadingIcon: {
    type: Le,
    default: () => bn
  },
  plain: Boolean,
  text: Boolean,
  link: Boolean,
  bg: Boolean,
  autofocus: Boolean,
  round: Boolean,
  circle: Boolean,
  color: String,
  dark: Boolean,
  autoInsertSpace: {
    type: Boolean,
    default: void 0
  }
}), Lr = {
  click: (e) => e instanceof MouseEvent
};
function S(e, t) {
  Hr(e) && (e = "100%");
  var n = jr(e);
  return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), n && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)), e);
}
function ge(e) {
  return Math.min(1, Math.max(0, e));
}
function Hr(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function jr(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function zt(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function me(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function X(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function zr(e, t, n) {
  return {
    r: S(e, 255) * 255,
    g: S(t, 255) * 255,
    b: S(n, 255) * 255
  };
}
function yt(e, t, n) {
  e = S(e, 255), t = S(t, 255), n = S(n, 255);
  var o = Math.max(e, t, n), r = Math.min(e, t, n), a = 0, s = 0, l = (o + r) / 2;
  if (o === r)
    s = 0, a = 0;
  else {
    var f = o - r;
    switch (s = l > 0.5 ? f / (2 - o - r) : f / (o + r), o) {
      case e:
        a = (t - n) / f + (t < n ? 6 : 0);
        break;
      case t:
        a = (n - e) / f + 2;
        break;
      case n:
        a = (e - t) / f + 4;
        break;
    }
    a /= 6;
  }
  return { h: a, s, l };
}
function Re(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * (6 * n) : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function Ur(e, t, n) {
  var o, r, a;
  if (e = S(e, 360), t = S(t, 100), n = S(n, 100), t === 0)
    r = n, a = n, o = n;
  else {
    var s = n < 0.5 ? n * (1 + t) : n + t - n * t, l = 2 * n - s;
    o = Re(l, s, e + 1 / 3), r = Re(l, s, e), a = Re(l, s, e - 1 / 3);
  }
  return { r: o * 255, g: r * 255, b: a * 255 };
}
function Et(e, t, n) {
  e = S(e, 255), t = S(t, 255), n = S(n, 255);
  var o = Math.max(e, t, n), r = Math.min(e, t, n), a = 0, s = o, l = o - r, f = o === 0 ? 0 : l / o;
  if (o === r)
    a = 0;
  else {
    switch (o) {
      case e:
        a = (t - n) / l + (t < n ? 6 : 0);
        break;
      case t:
        a = (n - e) / l + 2;
        break;
      case n:
        a = (e - t) / l + 4;
        break;
    }
    a /= 6;
  }
  return { h: a, s: f, v: s };
}
function Vr(e, t, n) {
  e = S(e, 360) * 6, t = S(t, 100), n = S(n, 100);
  var o = Math.floor(e), r = e - o, a = n * (1 - t), s = n * (1 - r * t), l = n * (1 - (1 - r) * t), f = o % 6, v = [n, s, a, a, l, n][f], g = [l, n, n, s, a, a][f], m = [a, a, l, n, n, s][f];
  return { r: v * 255, g: g * 255, b: m * 255 };
}
function St(e, t, n, o) {
  var r = [
    X(Math.round(e).toString(16)),
    X(Math.round(t).toString(16)),
    X(Math.round(n).toString(16))
  ];
  return o && r[0].startsWith(r[0].charAt(1)) && r[1].startsWith(r[1].charAt(1)) && r[2].startsWith(r[2].charAt(1)) ? r[0].charAt(0) + r[1].charAt(0) + r[2].charAt(0) : r.join("");
}
function Gr(e, t, n, o, r) {
  var a = [
    X(Math.round(e).toString(16)),
    X(Math.round(t).toString(16)),
    X(Math.round(n).toString(16)),
    X(Yr(o))
  ];
  return r && a[0].startsWith(a[0].charAt(1)) && a[1].startsWith(a[1].charAt(1)) && a[2].startsWith(a[2].charAt(1)) && a[3].startsWith(a[3].charAt(1)) ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) + a[3].charAt(0) : a.join("");
}
function Yr(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function wt(e) {
  return x(e) / 255;
}
function x(e) {
  return parseInt(e, 16);
}
function Kr(e) {
  return {
    r: e >> 16,
    g: (e & 65280) >> 8,
    b: e & 255
  };
}
var Ge = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};
function Wr(e) {
  var t = { r: 0, g: 0, b: 0 }, n = 1, o = null, r = null, a = null, s = !1, l = !1;
  return typeof e == "string" && (e = Jr(e)), typeof e == "object" && (j(e.r) && j(e.g) && j(e.b) ? (t = zr(e.r, e.g, e.b), s = !0, l = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : j(e.h) && j(e.s) && j(e.v) ? (o = me(e.s), r = me(e.v), t = Vr(e.h, o, r), s = !0, l = "hsv") : j(e.h) && j(e.s) && j(e.l) && (o = me(e.s), a = me(e.l), t = Ur(e.h, o, a), s = !0, l = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (n = e.a)), n = zt(n), {
    ok: s,
    format: e.format || l,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: n
  };
}
var qr = "[-\\+]?\\d+%?", Xr = "[-\\+]?\\d*\\.\\d+%?", G = "(?:".concat(Xr, ")|(?:").concat(qr, ")"), Fe = "[\\s|\\(]+(".concat(G, ")[,|\\s]+(").concat(G, ")[,|\\s]+(").concat(G, ")\\s*\\)?"), Oe = "[\\s|\\(]+(".concat(G, ")[,|\\s]+(").concat(G, ")[,|\\s]+(").concat(G, ")[,|\\s]+(").concat(G, ")\\s*\\)?"), O = {
  CSS_UNIT: new RegExp(G),
  rgb: new RegExp("rgb" + Fe),
  rgba: new RegExp("rgba" + Oe),
  hsl: new RegExp("hsl" + Fe),
  hsla: new RegExp("hsla" + Oe),
  hsv: new RegExp("hsv" + Fe),
  hsva: new RegExp("hsva" + Oe),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function Jr(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  var t = !1;
  if (Ge[e])
    e = Ge[e], t = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var n = O.rgb.exec(e);
  return n ? { r: n[1], g: n[2], b: n[3] } : (n = O.rgba.exec(e), n ? { r: n[1], g: n[2], b: n[3], a: n[4] } : (n = O.hsl.exec(e), n ? { h: n[1], s: n[2], l: n[3] } : (n = O.hsla.exec(e), n ? { h: n[1], s: n[2], l: n[3], a: n[4] } : (n = O.hsv.exec(e), n ? { h: n[1], s: n[2], v: n[3] } : (n = O.hsva.exec(e), n ? { h: n[1], s: n[2], v: n[3], a: n[4] } : (n = O.hex8.exec(e), n ? {
    r: x(n[1]),
    g: x(n[2]),
    b: x(n[3]),
    a: wt(n[4]),
    format: t ? "name" : "hex8"
  } : (n = O.hex6.exec(e), n ? {
    r: x(n[1]),
    g: x(n[2]),
    b: x(n[3]),
    format: t ? "name" : "hex"
  } : (n = O.hex4.exec(e), n ? {
    r: x(n[1] + n[1]),
    g: x(n[2] + n[2]),
    b: x(n[3] + n[3]),
    a: wt(n[4] + n[4]),
    format: t ? "name" : "hex8"
  } : (n = O.hex3.exec(e), n ? {
    r: x(n[1] + n[1]),
    g: x(n[2] + n[2]),
    b: x(n[3] + n[3]),
    format: t ? "name" : "hex"
  } : !1)))))))));
}
function j(e) {
  return !!O.CSS_UNIT.exec(String(e));
}
var Zr = (
  /** @class */
  function() {
    function e(t, n) {
      t === void 0 && (t = ""), n === void 0 && (n = {});
      var o;
      if (t instanceof e)
        return t;
      typeof t == "number" && (t = Kr(t)), this.originalInput = t;
      var r = Wr(t);
      this.originalInput = t, this.r = r.r, this.g = r.g, this.b = r.b, this.a = r.a, this.roundA = Math.round(100 * this.a) / 100, this.format = (o = n.format) !== null && o !== void 0 ? o : r.format, this.gradientType = n.gradientType, this.r < 1 && (this.r = Math.round(this.r)), this.g < 1 && (this.g = Math.round(this.g)), this.b < 1 && (this.b = Math.round(this.b)), this.isValid = r.ok;
    }
    return e.prototype.isDark = function() {
      return this.getBrightness() < 128;
    }, e.prototype.isLight = function() {
      return !this.isDark();
    }, e.prototype.getBrightness = function() {
      var t = this.toRgb();
      return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3;
    }, e.prototype.getLuminance = function() {
      var t = this.toRgb(), n, o, r, a = t.r / 255, s = t.g / 255, l = t.b / 255;
      return a <= 0.03928 ? n = a / 12.92 : n = Math.pow((a + 0.055) / 1.055, 2.4), s <= 0.03928 ? o = s / 12.92 : o = Math.pow((s + 0.055) / 1.055, 2.4), l <= 0.03928 ? r = l / 12.92 : r = Math.pow((l + 0.055) / 1.055, 2.4), 0.2126 * n + 0.7152 * o + 0.0722 * r;
    }, e.prototype.getAlpha = function() {
      return this.a;
    }, e.prototype.setAlpha = function(t) {
      return this.a = zt(t), this.roundA = Math.round(100 * this.a) / 100, this;
    }, e.prototype.isMonochrome = function() {
      var t = this.toHsl().s;
      return t === 0;
    }, e.prototype.toHsv = function() {
      var t = Et(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
    }, e.prototype.toHsvString = function() {
      var t = Et(this.r, this.g, this.b), n = Math.round(t.h * 360), o = Math.round(t.s * 100), r = Math.round(t.v * 100);
      return this.a === 1 ? "hsv(".concat(n, ", ").concat(o, "%, ").concat(r, "%)") : "hsva(".concat(n, ", ").concat(o, "%, ").concat(r, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHsl = function() {
      var t = yt(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
    }, e.prototype.toHslString = function() {
      var t = yt(this.r, this.g, this.b), n = Math.round(t.h * 360), o = Math.round(t.s * 100), r = Math.round(t.l * 100);
      return this.a === 1 ? "hsl(".concat(n, ", ").concat(o, "%, ").concat(r, "%)") : "hsla(".concat(n, ", ").concat(o, "%, ").concat(r, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHex = function(t) {
      return t === void 0 && (t = !1), St(this.r, this.g, this.b, t);
    }, e.prototype.toHexString = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex(t);
    }, e.prototype.toHex8 = function(t) {
      return t === void 0 && (t = !1), Gr(this.r, this.g, this.b, this.a, t);
    }, e.prototype.toHex8String = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex8(t);
    }, e.prototype.toHexShortString = function(t) {
      return t === void 0 && (t = !1), this.a === 1 ? this.toHexString(t) : this.toHex8String(t);
    }, e.prototype.toRgb = function() {
      return {
        r: Math.round(this.r),
        g: Math.round(this.g),
        b: Math.round(this.b),
        a: this.a
      };
    }, e.prototype.toRgbString = function() {
      var t = Math.round(this.r), n = Math.round(this.g), o = Math.round(this.b);
      return this.a === 1 ? "rgb(".concat(t, ", ").concat(n, ", ").concat(o, ")") : "rgba(".concat(t, ", ").concat(n, ", ").concat(o, ", ").concat(this.roundA, ")");
    }, e.prototype.toPercentageRgb = function() {
      var t = function(n) {
        return "".concat(Math.round(S(n, 255) * 100), "%");
      };
      return {
        r: t(this.r),
        g: t(this.g),
        b: t(this.b),
        a: this.a
      };
    }, e.prototype.toPercentageRgbString = function() {
      var t = function(n) {
        return Math.round(S(n, 255) * 100);
      };
      return this.a === 1 ? "rgb(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%)") : "rgba(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%, ").concat(this.roundA, ")");
    }, e.prototype.toName = function() {
      if (this.a === 0)
        return "transparent";
      if (this.a < 1)
        return !1;
      for (var t = "#" + St(this.r, this.g, this.b, !1), n = 0, o = Object.entries(Ge); n < o.length; n++) {
        var r = o[n], a = r[0], s = r[1];
        if (t === s)
          return a;
      }
      return !1;
    }, e.prototype.toString = function(t) {
      var n = !!t;
      t = t ?? this.format;
      var o = !1, r = this.a < 1 && this.a >= 0, a = !n && r && (t.startsWith("hex") || t === "name");
      return a ? t === "name" && this.a === 0 ? this.toName() : this.toRgbString() : (t === "rgb" && (o = this.toRgbString()), t === "prgb" && (o = this.toPercentageRgbString()), (t === "hex" || t === "hex6") && (o = this.toHexString()), t === "hex3" && (o = this.toHexString(!0)), t === "hex4" && (o = this.toHex8String(!0)), t === "hex8" && (o = this.toHex8String()), t === "name" && (o = this.toName()), t === "hsl" && (o = this.toHslString()), t === "hsv" && (o = this.toHsvString()), o || this.toHexString());
    }, e.prototype.toNumber = function() {
      return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
    }, e.prototype.clone = function() {
      return new e(this.toString());
    }, e.prototype.lighten = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.l += t / 100, n.l = ge(n.l), new e(n);
    }, e.prototype.brighten = function(t) {
      t === void 0 && (t = 10);
      var n = this.toRgb();
      return n.r = Math.max(0, Math.min(255, n.r - Math.round(255 * -(t / 100)))), n.g = Math.max(0, Math.min(255, n.g - Math.round(255 * -(t / 100)))), n.b = Math.max(0, Math.min(255, n.b - Math.round(255 * -(t / 100)))), new e(n);
    }, e.prototype.darken = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.l -= t / 100, n.l = ge(n.l), new e(n);
    }, e.prototype.tint = function(t) {
      return t === void 0 && (t = 10), this.mix("white", t);
    }, e.prototype.shade = function(t) {
      return t === void 0 && (t = 10), this.mix("black", t);
    }, e.prototype.desaturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s -= t / 100, n.s = ge(n.s), new e(n);
    }, e.prototype.saturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s += t / 100, n.s = ge(n.s), new e(n);
    }, e.prototype.greyscale = function() {
      return this.desaturate(100);
    }, e.prototype.spin = function(t) {
      var n = this.toHsl(), o = (n.h + t) % 360;
      return n.h = o < 0 ? 360 + o : o, new e(n);
    }, e.prototype.mix = function(t, n) {
      n === void 0 && (n = 50);
      var o = this.toRgb(), r = new e(t).toRgb(), a = n / 100, s = {
        r: (r.r - o.r) * a + o.r,
        g: (r.g - o.g) * a + o.g,
        b: (r.b - o.b) * a + o.b,
        a: (r.a - o.a) * a + o.a
      };
      return new e(s);
    }, e.prototype.analogous = function(t, n) {
      t === void 0 && (t = 6), n === void 0 && (n = 30);
      var o = this.toHsl(), r = 360 / n, a = [this];
      for (o.h = (o.h - (r * t >> 1) + 720) % 360; --t; )
        o.h = (o.h + r) % 360, a.push(new e(o));
      return a;
    }, e.prototype.complement = function() {
      var t = this.toHsl();
      return t.h = (t.h + 180) % 360, new e(t);
    }, e.prototype.monochromatic = function(t) {
      t === void 0 && (t = 6);
      for (var n = this.toHsv(), o = n.h, r = n.s, a = n.v, s = [], l = 1 / t; t--; )
        s.push(new e({ h: o, s: r, v: a })), a = (a + l) % 1;
      return s;
    }, e.prototype.splitcomplement = function() {
      var t = this.toHsl(), n = t.h;
      return [
        this,
        new e({ h: (n + 72) % 360, s: t.s, l: t.l }),
        new e({ h: (n + 216) % 360, s: t.s, l: t.l })
      ];
    }, e.prototype.onBackground = function(t) {
      var n = this.toRgb(), o = new e(t).toRgb(), r = n.a + o.a * (1 - n.a);
      return new e({
        r: (n.r * n.a + o.r * o.a * (1 - n.a)) / r,
        g: (n.g * n.a + o.g * o.a * (1 - n.a)) / r,
        b: (n.b * n.a + o.b * o.a * (1 - n.a)) / r,
        a: r
      });
    }, e.prototype.triad = function() {
      return this.polyad(3);
    }, e.prototype.tetrad = function() {
      return this.polyad(4);
    }, e.prototype.polyad = function(t) {
      for (var n = this.toHsl(), o = n.h, r = [this], a = 360 / t, s = 1; s < t; s++)
        r.push(new e({ h: (o + s * a) % 360, s: n.s, l: n.l }));
      return r;
    }, e.prototype.equals = function(t) {
      return this.toRgbString() === new e(t).toRgbString();
    }, e;
  }()
);
function U(e, t = 20) {
  return e.mix("#141414", t).toString();
}
function Qr(e) {
  const t = Ct(), n = oe("button");
  return k(() => {
    let o = {};
    const r = e.color;
    if (r) {
      const a = new Zr(r), s = e.dark ? a.tint(20).toString() : U(a, 20);
      if (e.plain)
        o = n.cssVarBlock({
          "bg-color": e.dark ? U(a, 90) : a.tint(90).toString(),
          "text-color": r,
          "border-color": e.dark ? U(a, 50) : a.tint(50).toString(),
          "hover-text-color": `var(${n.cssVarName("color-white")})`,
          "hover-bg-color": r,
          "hover-border-color": r,
          "active-bg-color": s,
          "active-text-color": `var(${n.cssVarName("color-white")})`,
          "active-border-color": s
        }), t.value && (o[n.cssVarBlockName("disabled-bg-color")] = e.dark ? U(a, 90) : a.tint(90).toString(), o[n.cssVarBlockName("disabled-text-color")] = e.dark ? U(a, 50) : a.tint(50).toString(), o[n.cssVarBlockName("disabled-border-color")] = e.dark ? U(a, 80) : a.tint(80).toString());
      else {
        const l = e.dark ? U(a, 30) : a.tint(30).toString(), f = a.isDark() ? `var(${n.cssVarName("color-white")})` : `var(${n.cssVarName("color-black")})`;
        if (o = n.cssVarBlock({
          "bg-color": r,
          "text-color": f,
          "border-color": r,
          "hover-bg-color": l,
          "hover-text-color": f,
          "hover-border-color": l,
          "active-bg-color": s,
          "active-border-color": s
        }), t.value) {
          const v = e.dark ? U(a, 50) : a.tint(50).toString();
          o[n.cssVarBlockName("disabled-bg-color")] = v, o[n.cssVarBlockName("disabled-text-color")] = e.dark ? "rgba(255, 255, 255, 0.5)" : `var(${n.cssVarName("color-white")})`, o[n.cssVarBlockName("disabled-border-color")] = v;
        }
      }
    }
    return o;
  });
}
const ea = ["aria-disabled", "disabled", "autofocus", "type"], ta = D({
  name: "ElButton"
}), na = /* @__PURE__ */ D({
  ...ta,
  props: Ve,
  emits: Lr,
  setup(e, { expose: t, emit: n }) {
    const o = e, r = Qr(o), a = oe("button"), { _ref: s, _size: l, _type: f, _disabled: v, shouldAddSpace: g, handleClick: m } = $r(o, n);
    return t({
      ref: s,
      size: l,
      type: f,
      disabled: v,
      shouldAddSpace: g
    }), (u, h) => (T(), Y("button", {
      ref_key: "_ref",
      ref: s,
      class: R([
        i(a).b(),
        i(a).m(i(f)),
        i(a).m(i(l)),
        i(a).is("disabled", i(v)),
        i(a).is("loading", u.loading),
        i(a).is("plain", u.plain),
        i(a).is("round", u.round),
        i(a).is("circle", u.circle),
        i(a).is("text", u.text),
        i(a).is("link", u.link),
        i(a).is("has-bg", u.bg)
      ]),
      "aria-disabled": i(v) || u.loading,
      disabled: i(v) || u.loading,
      autofocus: u.autofocus,
      type: u.nativeType,
      style: Ke(i(r)),
      onClick: h[0] || (h[0] = (...c) => i(m) && i(m)(...c))
    }, [
      u.loading ? (T(), Y(Xt, { key: 0 }, [
        u.$slots.loading ? M(u.$slots, "loading", { key: 0 }) : (T(), q(i(He), {
          key: 1,
          class: R(i(a).is("loading"))
        }, {
          default: P(() => [
            (T(), q(Pe(u.loadingIcon)))
          ]),
          _: 1
        }, 8, ["class"]))
      ], 64)) : u.icon || u.$slots.icon ? (T(), q(i(He), { key: 1 }, {
        default: P(() => [
          u.icon ? (T(), q(Pe(u.icon), { key: 0 })) : M(u.$slots, "icon", { key: 1 })
        ]),
        _: 3
      })) : ie("v-if", !0),
      u.$slots.default ? (T(), Y("span", {
        key: 2,
        class: R({ [i(a).em("text", "expand")]: i(g) })
      }, [
        M(u.$slots, "default")
      ], 2)) : ie("v-if", !0)
    ], 14, ea));
  }
});
var oa = /* @__PURE__ */ fe(na, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/button/src/button.vue"]]);
const ra = {
  size: Ve.size,
  type: Ve.type
}, aa = D({
  name: "ElButtonGroup"
}), sa = /* @__PURE__ */ D({
  ...aa,
  props: ra,
  setup(e) {
    const t = e;
    Ye(Dt, Jt({
      size: et(t, "size"),
      type: et(t, "type")
    }));
    const n = oe("button");
    return (o, r) => (T(), Y("div", {
      class: R(`${i(n).b("group")}`)
    }, [
      M(o.$slots, "default")
    ], 2));
  }
});
var Ut = /* @__PURE__ */ fe(sa, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/button/src/button-group.vue"]]);
const ia = Mt(oa, {
  ButtonGroup: Ut
});
yn(Ut);
const la = _e({
  mask: {
    type: Boolean,
    default: !0
  },
  customMaskEvent: {
    type: Boolean,
    default: !1
  },
  overlayClass: {
    type: je([
      String,
      Array,
      Object
    ])
  },
  zIndex: {
    type: je([String, Number])
  }
}), ca = {
  click: (e) => e instanceof MouseEvent
};
var ua = D({
  name: "ElOverlay",
  props: la,
  emits: ca,
  setup(e, { slots: t, emit: n }) {
    const o = oe("overlay"), r = (f) => {
      n("click", f);
    }, { onClick: a, onMousedown: s, onMouseup: l } = Lt(e.customMaskEvent ? void 0 : r);
    return () => e.mask ? te("div", {
      class: [o.b(), e.overlayClass],
      style: {
        zIndex: e.zIndex
      },
      onClick: a,
      onMousedown: s,
      onMouseup: l
    }, [M(t, "default")], ye.STYLE | ye.CLASS | ye.PROPS, ["onClick", "onMouseup", "onMousedown"]) : Zt("div", {
      class: e.overlayClass,
      style: {
        zIndex: e.zIndex,
        position: "fixed",
        top: "0px",
        right: "0px",
        bottom: "0px",
        left: "0px"
      }
    }, [M(t, "default")]);
  }
});
const fa = ua, Vt = _e({
  center: {
    type: Boolean,
    default: !1
  },
  alignCenter: {
    type: Boolean,
    default: !1
  },
  closeIcon: {
    type: Le
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
}), da = {
  close: () => !0
}, ha = ["aria-label"], pa = ["id"], va = D({ name: "ElDialogContent" }), ga = /* @__PURE__ */ D({
  ...va,
  props: Vt,
  emits: da,
  setup(e) {
    const t = e, { t: n } = rr(), { Close: o } = En, { dialogRef: r, headerRef: a, bodyId: s, ns: l, style: f } = $e($t), { focusTrapRef: v } = $e(Ht), g = Zo(v, r), m = k(() => t.draggable);
    return Qo(r, a, m), (u, h) => (T(), Y("div", {
      ref: i(g),
      class: R([
        i(l).b(),
        i(l).is("fullscreen", u.fullscreen),
        i(l).is("draggable", i(m)),
        i(l).is("align-center", u.alignCenter),
        { [i(l).m("center")]: u.center },
        u.customClass
      ]),
      style: Ke(i(f)),
      tabindex: "-1"
    }, [
      be("header", {
        ref_key: "headerRef",
        ref: a,
        class: R(i(l).e("header"))
      }, [
        M(u.$slots, "header", {}, () => [
          be("span", {
            role: "heading",
            class: R(i(l).e("title"))
          }, kt(u.title), 3)
        ]),
        u.showClose ? (T(), Y("button", {
          key: 0,
          "aria-label": i(n)("el.dialog.close"),
          class: R(i(l).e("headerbtn")),
          type: "button",
          onClick: h[0] || (h[0] = (c) => u.$emit("close"))
        }, [
          te(i(He), {
            class: R(i(l).e("close"))
          }, {
            default: P(() => [
              (T(), q(Pe(u.closeIcon || i(o))))
            ]),
            _: 1
          }, 8, ["class"])
        ], 10, ha)) : ie("v-if", !0)
      ], 2),
      be("div", {
        id: i(s),
        class: R(i(l).e("body"))
      }, [
        M(u.$slots, "default")
      ], 10, pa),
      u.$slots.footer ? (T(), Y("footer", {
        key: 0,
        class: R(i(l).e("footer"))
      }, [
        M(u.$slots, "footer")
      ], 2)) : ie("v-if", !0)
    ], 6));
  }
});
var ma = /* @__PURE__ */ fe(ga, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog-content.vue"]]);
const ba = _e({
  ...Vt,
  appendToBody: {
    type: Boolean,
    default: !1
  },
  beforeClose: {
    type: je(Function)
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
}), ya = {
  open: () => !0,
  opened: () => !0,
  close: () => !0,
  closed: () => !0,
  [xt]: (e) => Sn(e),
  openAutoFocus: () => !0,
  closeAutoFocus: () => !0
}, Ea = (e, t) => {
  const o = Qt().emit, { nextZIndex: r } = _r();
  let a = "";
  const s = nt(), l = nt(), f = C(!1), v = C(!1), g = C(!1), m = C(e.zIndex || r());
  let u, h;
  const c = we("namespace", wn), d = k(() => {
    const N = {}, W = `--${c.value}-dialog`;
    return e.fullscreen || (e.top && (N[`${W}-margin-top`] = e.top), e.width && (N[`${W}-width`] = Be(e.width))), N;
  }), b = k(() => e.alignCenter ? { display: "flex" } : {});
  function y() {
    o("opened");
  }
  function E() {
    o("closed"), o(xt, !1), e.destroyOnClose && (g.value = !1);
  }
  function z() {
    o("close");
  }
  function L() {
    h == null || h(), u == null || u(), e.openDelay && e.openDelay > 0 ? { stop: u } = ot(() => w(), e.openDelay) : w();
  }
  function $() {
    u == null || u(), h == null || h(), e.closeDelay && e.closeDelay > 0 ? { stop: h } = ot(() => A(), e.closeDelay) : A();
  }
  function H() {
    function N(W) {
      W || (v.value = !0, f.value = !1);
    }
    e.beforeClose ? e.beforeClose(N) : $();
  }
  function F() {
    e.closeOnClickModal && H();
  }
  function w() {
    le && (f.value = !0);
  }
  function A() {
    f.value = !1;
  }
  function p() {
    o("openAutoFocus");
  }
  function I() {
    o("closeAutoFocus");
  }
  function _(N) {
    var W;
    ((W = N.detail) == null ? void 0 : W.focusReason) === "pointer" && N.preventDefault();
  }
  e.lockScroll && Sr(f);
  function Gt() {
    e.closeOnPressEscape && H();
  }
  return J(() => e.modelValue, (N) => {
    N ? (v.value = !1, L(), g.value = !0, m.value = e.zIndex ? m.value++ : r(), De(() => {
      o("open"), t.value && (t.value.scrollTop = 0);
    })) : f.value && $();
  }), J(() => e.fullscreen, (N) => {
    t.value && (N ? (a = t.value.style.transform, t.value.style.transform = "") : t.value.style.transform = a);
  }), ue(() => {
    e.modelValue && (f.value = !0, g.value = !0, L());
  }), {
    afterEnter: y,
    afterLeave: E,
    beforeLeave: z,
    handleClose: H,
    onModalClick: F,
    close: $,
    doClose: A,
    onOpenAutoFocus: p,
    onCloseAutoFocus: I,
    onCloseRequested: Gt,
    onFocusoutPrevented: _,
    titleId: s,
    bodyId: l,
    closed: v,
    style: d,
    overlayDialogStyle: b,
    rendered: g,
    visible: f,
    zIndex: m
  };
}, Sa = ["aria-label", "aria-labelledby", "aria-describedby"], wa = D({
  name: "ElDialog",
  inheritAttrs: !1
}), _a = /* @__PURE__ */ D({
  ...wa,
  props: ba,
  emits: ya,
  setup(e, { expose: t }) {
    const n = e, o = Tt();
    ze({
      scope: "el-dialog",
      from: "the title slot",
      replacement: "the header slot",
      version: "3.0.0",
      ref: "https://element-plus.org/en-US/component/dialog.html#slots"
    }, k(() => !!o.title)), ze({
      scope: "el-dialog",
      from: "custom-class",
      replacement: "class",
      version: "2.3.0",
      ref: "https://element-plus.org/en-US/component/dialog.html#attributes",
      type: "Attribute"
    }, k(() => !!n.customClass));
    const r = oe("dialog"), a = C(), s = C(), l = C(), {
      visible: f,
      titleId: v,
      bodyId: g,
      style: m,
      overlayDialogStyle: u,
      rendered: h,
      zIndex: c,
      afterEnter: d,
      afterLeave: b,
      beforeLeave: y,
      handleClose: E,
      onModalClick: z,
      onOpenAutoFocus: L,
      onCloseAutoFocus: $,
      onCloseRequested: H,
      onFocusoutPrevented: F
    } = Ea(n, a);
    Ye($t, {
      dialogRef: a,
      headerRef: s,
      bodyId: g,
      ns: r,
      rendered: h,
      style: m
    });
    const w = Lt(z), A = k(() => n.draggable && !n.fullscreen);
    return t({
      visible: f,
      dialogContentRef: l
    }), (p, I) => (T(), q(en, {
      to: "body",
      disabled: !p.appendToBody
    }, [
      te(tn, {
        name: "dialog-fade",
        onAfterEnter: i(d),
        onAfterLeave: i(b),
        onBeforeLeave: i(y),
        persisted: ""
      }, {
        default: P(() => [
          nn(te(i(fa), {
            "custom-mask-event": "",
            mask: p.modal,
            "overlay-class": p.modalClass,
            "z-index": i(c)
          }, {
            default: P(() => [
              be("div", {
                role: "dialog",
                "aria-modal": "true",
                "aria-label": p.title || void 0,
                "aria-labelledby": p.title ? void 0 : i(v),
                "aria-describedby": i(g),
                class: R(`${i(r).namespace.value}-overlay-dialog`),
                style: Ke(i(u)),
                onClick: I[0] || (I[0] = (..._) => i(w).onClick && i(w).onClick(..._)),
                onMousedown: I[1] || (I[1] = (..._) => i(w).onMousedown && i(w).onMousedown(..._)),
                onMouseup: I[2] || (I[2] = (..._) => i(w).onMouseup && i(w).onMouseup(..._))
              }, [
                te(i(Dr), {
                  loop: "",
                  trapped: i(f),
                  "focus-start-el": "container",
                  onFocusAfterTrapped: i(L),
                  onFocusAfterReleased: i($),
                  onFocusoutPrevented: i(F),
                  onReleaseRequested: i(H)
                }, {
                  default: P(() => [
                    i(h) ? (T(), q(ma, on({
                      key: 0,
                      ref_key: "dialogContentRef",
                      ref: l
                    }, p.$attrs, {
                      "custom-class": p.customClass,
                      center: p.center,
                      "align-center": p.alignCenter,
                      "close-icon": p.closeIcon,
                      draggable: i(A),
                      fullscreen: p.fullscreen,
                      "show-close": p.showClose,
                      title: p.title,
                      onClose: i(E)
                    }), rn({
                      header: P(() => [
                        p.$slots.title ? M(p.$slots, "title", { key: 1 }) : M(p.$slots, "header", {
                          key: 0,
                          close: i(E),
                          titleId: i(v),
                          titleClass: i(r).e("title")
                        })
                      ]),
                      default: P(() => [
                        M(p.$slots, "default")
                      ]),
                      _: 2
                    }, [
                      p.$slots.footer ? {
                        name: "footer",
                        fn: P(() => [
                          M(p.$slots, "footer")
                        ])
                      } : void 0
                    ]), 1040, ["custom-class", "center", "align-center", "close-icon", "draggable", "fullscreen", "show-close", "title", "onClose"])) : ie("v-if", !0)
                  ]),
                  _: 3
                }, 8, ["trapped", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusoutPrevented", "onReleaseRequested"])
              ], 46, Sa)
            ]),
            _: 3
          }, 8, ["mask", "overlay-class", "z-index"]), [
            [an, i(f)]
          ])
        ]),
        _: 3
      }, 8, ["onAfterEnter", "onAfterLeave", "onBeforeLeave"])
    ], 8, ["disabled"]));
  }
});
var Ta = /* @__PURE__ */ fe(_a, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog.vue"]]);
const ka = Mt(Ta);
const Ca = { style: { width: "50px", height: "30px" } }, Ma = /* @__PURE__ */ D({
  __name: "Button",
  props: {
    text: null
  },
  setup(e) {
    return (t, n) => {
      const o = ia;
      return T(), Y("div", Ca, [
        te(o, null, {
          default: P(() => [
            sn(kt(e.text), 1)
          ]),
          _: 1
        })
      ]);
    };
  }
});
function xa() {
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
const Ra = {
  alioth: "widget",
  data: {
    category: "element-plus",
    key: "el-button",
    component: Ma,
    meta: xa().props
  }
}, Fa = {
  alioth: "state",
  data: {
    key: "useModal",
    value: Yt(ka, { center: !0 })
  }
}, Oa = {
  alioth: "state",
  data: {
    key: "x",
    value: 11
  }
};
export {
  Oa as state_c,
  Fa as state_useModal,
  Ra as widget_button
};
