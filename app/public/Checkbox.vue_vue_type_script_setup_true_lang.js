import { getCurrentScope as ds, onScopeDispose as fs, ref as I, watch as R, unref as d, getCurrentInstance as Pe, onMounted as Te, nextTick as te, readonly as Ga, computed as S, openBlock as T, createElementBlock as L, createElementVNode as D, warn as ps, inject as oe, toRef as st, onUnmounted as vs, isRef as an, shallowRef as on, onBeforeUnmount as ft, onBeforeMount as hs, provide as Xe, defineComponent as j, mergeProps as Lt, renderSlot as Z, useAttrs as gs, useSlots as ao, withDirectives as Ae, createCommentVNode as z, Fragment as Je, normalizeClass as k, createBlock as H, withCtx as K, resolveDynamicComponent as Ye, withModifiers as Qe, createVNode as ge, toDisplayString as he, normalizeStyle as me, vShow as gn, Transition as io, reactive as mn, onUpdated as ms, cloneVNode as bs, Text as Qa, Comment as ys, Teleport as ws, onDeactivated as Ss, toRaw as sn, vModelCheckbox as Qn, createTextVNode as Ya, toRefs as so, triggerRef as Sn, resolveComponent as jt, resolveDirective as _s, renderList as Bo, withKeys as Ue, vModelText as Ts, createSlots as Cs } from "vue";
function mb(e, t, n, o) {
  var r;
  (r = window.$alioth_registerWidget) == null || r.call(window, e, t, n, o);
}
function bb(e, t, n) {
  window.$alioth_register(e, t, n);
}
function yb(e, t) {
  var n;
  (n = window.$alioth_addView) == null || n.call(window, e, t);
}
function wb(e) {
  var t;
  (t = window.$alioth_addZone) == null || t.call(window, e);
}
function Sb(...e) {
  window.$alioth_addHeader && e.forEach(window.$alioth_addHeader);
}
var Es = typeof global == "object" && global && global.Object === Object && global;
const Za = Es;
var $s = typeof self == "object" && self && self.Object === Object && self, Os = Za || $s || Function("return this")();
const tt = Os;
var As = tt.Symbol;
const Fe = As;
var Ja = Object.prototype, Ps = Ja.hasOwnProperty, Is = Ja.toString, _n = Fe ? Fe.toStringTag : void 0;
function xs(e) {
  var t = Ps.call(e, _n), n = e[_n];
  try {
    e[_n] = void 0;
    var o = !0;
  } catch {
  }
  var r = Is.call(e);
  return o && (t ? e[_n] = n : delete e[_n]), r;
}
var ks = Object.prototype, Ms = ks.toString;
function Ls(e) {
  return Ms.call(e);
}
var Rs = "[object Null]", Bs = "[object Undefined]", Ir = Fe ? Fe.toStringTag : void 0;
function bn(e) {
  return e == null ? e === void 0 ? Bs : Rs : Ir && Ir in Object(e) ? xs(e) : Ls(e);
}
function Rt(e) {
  return e != null && typeof e == "object";
}
var Fs = "[object Symbol]";
function lo(e) {
  return typeof e == "symbol" || Rt(e) && bn(e) == Fs;
}
function Ns(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, r = Array(o); ++n < o; )
    r[n] = t(e[n], n, e);
  return r;
}
var zs = Array.isArray;
const ut = zs;
var Ds = 1 / 0, xr = Fe ? Fe.prototype : void 0, kr = xr ? xr.toString : void 0;
function Xa(e) {
  if (typeof e == "string")
    return e;
  if (ut(e))
    return Ns(e, Xa) + "";
  if (lo(e))
    return kr ? kr.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -Ds ? "-0" : t;
}
var js = /\s/;
function Hs(e) {
  for (var t = e.length; t-- && js.test(e.charAt(t)); )
    ;
  return t;
}
var Vs = /^\s+/;
function Ws(e) {
  return e && e.slice(0, Hs(e) + 1).replace(Vs, "");
}
function ct(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Mr = 0 / 0, Ks = /^[-+]0x[0-9a-f]+$/i, Us = /^0b[01]+$/i, qs = /^0o[0-7]+$/i, Gs = parseInt;
function Lr(e) {
  if (typeof e == "number")
    return e;
  if (lo(e))
    return Mr;
  if (ct(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = ct(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Ws(e);
  var n = Us.test(e);
  return n || qs.test(e) ? Gs(e.slice(2), n ? 2 : 8) : Ks.test(e) ? Mr : +e;
}
function Qs(e) {
  return e;
}
var Ys = "[object AsyncFunction]", Zs = "[object Function]", Js = "[object GeneratorFunction]", Xs = "[object Proxy]";
function ei(e) {
  if (!ct(e))
    return !1;
  var t = bn(e);
  return t == Zs || t == Js || t == Ys || t == Xs;
}
var el = tt["__core-js_shared__"];
const Eo = el;
var Rr = function() {
  var e = /[^.]+$/.exec(Eo && Eo.keys && Eo.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function tl(e) {
  return !!Rr && Rr in e;
}
var nl = Function.prototype, ol = nl.toString;
function Qt(e) {
  if (e != null) {
    try {
      return ol.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var rl = /[\\^$.*+?()[\]{}|]/g, al = /^\[object .+?Constructor\]$/, il = Function.prototype, sl = Object.prototype, ll = il.toString, ul = sl.hasOwnProperty, cl = RegExp(
  "^" + ll.call(ul).replace(rl, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function dl(e) {
  if (!ct(e) || tl(e))
    return !1;
  var t = ei(e) ? cl : al;
  return t.test(Qt(e));
}
function fl(e, t) {
  return e == null ? void 0 : e[t];
}
function Yt(e, t) {
  var n = fl(e, t);
  return dl(n) ? n : void 0;
}
var pl = Yt(tt, "WeakMap");
const Fo = pl;
var Br = Object.create, vl = function() {
  function e() {
  }
  return function(t) {
    if (!ct(t))
      return {};
    if (Br)
      return Br(t);
    e.prototype = t;
    var n = new e();
    return e.prototype = void 0, n;
  };
}();
const hl = vl;
function gl(e, t, n) {
  switch (n.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, n[0]);
    case 2:
      return e.call(t, n[0], n[1]);
    case 3:
      return e.call(t, n[0], n[1], n[2]);
  }
  return e.apply(t, n);
}
function ml(e, t) {
  var n = -1, o = e.length;
  for (t || (t = Array(o)); ++n < o; )
    t[n] = e[n];
  return t;
}
var bl = 800, yl = 16, wl = Date.now;
function Sl(e) {
  var t = 0, n = 0;
  return function() {
    var o = wl(), r = yl - (o - n);
    if (n = o, r > 0) {
      if (++t >= bl)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function _l(e) {
  return function() {
    return e;
  };
}
var Tl = function() {
  try {
    var e = Yt(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
const Yn = Tl;
var Cl = Yn ? function(e, t) {
  return Yn(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: _l(t),
    writable: !0
  });
} : Qs;
const El = Cl;
var $l = Sl(El);
const Ol = $l;
function Al(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length; ++n < o && t(e[n], n, e) !== !1; )
    ;
  return e;
}
var Pl = 9007199254740991, Il = /^(?:0|[1-9]\d*)$/;
function Go(e, t) {
  var n = typeof e;
  return t = t ?? Pl, !!t && (n == "number" || n != "symbol" && Il.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function ti(e, t, n) {
  t == "__proto__" && Yn ? Yn(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function Qo(e, t) {
  return e === t || e !== e && t !== t;
}
var xl = Object.prototype, kl = xl.hasOwnProperty;
function Yo(e, t, n) {
  var o = e[t];
  (!(kl.call(e, t) && Qo(o, n)) || n === void 0 && !(t in e)) && ti(e, t, n);
}
function uo(e, t, n, o) {
  var r = !n;
  n || (n = {});
  for (var a = -1, i = t.length; ++a < i; ) {
    var s = t[a], l = o ? o(n[s], e[s], s, n, e) : void 0;
    l === void 0 && (l = e[s]), r ? ti(n, s, l) : Yo(n, s, l);
  }
  return n;
}
var Fr = Math.max;
function Ml(e, t, n) {
  return t = Fr(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var o = arguments, r = -1, a = Fr(o.length - t, 0), i = Array(a); ++r < a; )
      i[r] = o[t + r];
    r = -1;
    for (var s = Array(t + 1); ++r < t; )
      s[r] = o[r];
    return s[t] = n(i), gl(e, this, s);
  };
}
var Ll = 9007199254740991;
function Zo(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Ll;
}
function ni(e) {
  return e != null && Zo(e.length) && !ei(e);
}
var Rl = Object.prototype;
function Jo(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || Rl;
  return e === n;
}
function Bl(e, t) {
  for (var n = -1, o = Array(e); ++n < e; )
    o[n] = t(n);
  return o;
}
var Fl = "[object Arguments]";
function Nr(e) {
  return Rt(e) && bn(e) == Fl;
}
var oi = Object.prototype, Nl = oi.hasOwnProperty, zl = oi.propertyIsEnumerable, Dl = Nr(function() {
  return arguments;
}()) ? Nr : function(e) {
  return Rt(e) && Nl.call(e, "callee") && !zl.call(e, "callee");
};
const Xo = Dl;
function jl() {
  return !1;
}
var ri = typeof exports == "object" && exports && !exports.nodeType && exports, zr = ri && typeof module == "object" && module && !module.nodeType && module, Hl = zr && zr.exports === ri, Dr = Hl ? tt.Buffer : void 0, Vl = Dr ? Dr.isBuffer : void 0, Wl = Vl || jl;
const Zn = Wl;
var Kl = "[object Arguments]", Ul = "[object Array]", ql = "[object Boolean]", Gl = "[object Date]", Ql = "[object Error]", Yl = "[object Function]", Zl = "[object Map]", Jl = "[object Number]", Xl = "[object Object]", eu = "[object RegExp]", tu = "[object Set]", nu = "[object String]", ou = "[object WeakMap]", ru = "[object ArrayBuffer]", au = "[object DataView]", iu = "[object Float32Array]", su = "[object Float64Array]", lu = "[object Int8Array]", uu = "[object Int16Array]", cu = "[object Int32Array]", du = "[object Uint8Array]", fu = "[object Uint8ClampedArray]", pu = "[object Uint16Array]", vu = "[object Uint32Array]", ne = {};
ne[iu] = ne[su] = ne[lu] = ne[uu] = ne[cu] = ne[du] = ne[fu] = ne[pu] = ne[vu] = !0;
ne[Kl] = ne[Ul] = ne[ru] = ne[ql] = ne[au] = ne[Gl] = ne[Ql] = ne[Yl] = ne[Zl] = ne[Jl] = ne[Xl] = ne[eu] = ne[tu] = ne[nu] = ne[ou] = !1;
function hu(e) {
  return Rt(e) && Zo(e.length) && !!ne[bn(e)];
}
function er(e) {
  return function(t) {
    return e(t);
  };
}
var ai = typeof exports == "object" && exports && !exports.nodeType && exports, Cn = ai && typeof module == "object" && module && !module.nodeType && module, gu = Cn && Cn.exports === ai, $o = gu && Za.process, mu = function() {
  try {
    var e = Cn && Cn.require && Cn.require("util").types;
    return e || $o && $o.binding && $o.binding("util");
  } catch {
  }
}();
const ln = mu;
var jr = ln && ln.isTypedArray, bu = jr ? er(jr) : hu;
const ii = bu;
var yu = Object.prototype, wu = yu.hasOwnProperty;
function si(e, t) {
  var n = ut(e), o = !n && Xo(e), r = !n && !o && Zn(e), a = !n && !o && !r && ii(e), i = n || o || r || a, s = i ? Bl(e.length, String) : [], l = s.length;
  for (var c in e)
    (t || wu.call(e, c)) && !(i && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    r && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    Go(c, l))) && s.push(c);
  return s;
}
function li(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var Su = li(Object.keys, Object);
const _u = Su;
var Tu = Object.prototype, Cu = Tu.hasOwnProperty;
function Eu(e) {
  if (!Jo(e))
    return _u(e);
  var t = [];
  for (var n in Object(e))
    Cu.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function tr(e) {
  return ni(e) ? si(e) : Eu(e);
}
function $u(e) {
  var t = [];
  if (e != null)
    for (var n in Object(e))
      t.push(n);
  return t;
}
var Ou = Object.prototype, Au = Ou.hasOwnProperty;
function Pu(e) {
  if (!ct(e))
    return $u(e);
  var t = Jo(e), n = [];
  for (var o in e)
    o == "constructor" && (t || !Au.call(e, o)) || n.push(o);
  return n;
}
function nr(e) {
  return ni(e) ? si(e, !0) : Pu(e);
}
var Iu = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, xu = /^\w*$/;
function ku(e, t) {
  if (ut(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || lo(e) ? !0 : xu.test(e) || !Iu.test(e) || t != null && e in Object(t);
}
var Mu = Yt(Object, "create");
const On = Mu;
function Lu() {
  this.__data__ = On ? On(null) : {}, this.size = 0;
}
function Ru(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Bu = "__lodash_hash_undefined__", Fu = Object.prototype, Nu = Fu.hasOwnProperty;
function zu(e) {
  var t = this.__data__;
  if (On) {
    var n = t[e];
    return n === Bu ? void 0 : n;
  }
  return Nu.call(t, e) ? t[e] : void 0;
}
var Du = Object.prototype, ju = Du.hasOwnProperty;
function Hu(e) {
  var t = this.__data__;
  return On ? t[e] !== void 0 : ju.call(t, e);
}
var Vu = "__lodash_hash_undefined__";
function Wu(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = On && t === void 0 ? Vu : t, this;
}
function Ut(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
Ut.prototype.clear = Lu;
Ut.prototype.delete = Ru;
Ut.prototype.get = zu;
Ut.prototype.has = Hu;
Ut.prototype.set = Wu;
function Ku() {
  this.__data__ = [], this.size = 0;
}
function co(e, t) {
  for (var n = e.length; n--; )
    if (Qo(e[n][0], t))
      return n;
  return -1;
}
var Uu = Array.prototype, qu = Uu.splice;
function Gu(e) {
  var t = this.__data__, n = co(t, e);
  if (n < 0)
    return !1;
  var o = t.length - 1;
  return n == o ? t.pop() : qu.call(t, n, 1), --this.size, !0;
}
function Qu(e) {
  var t = this.__data__, n = co(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function Yu(e) {
  return co(this.__data__, e) > -1;
}
function Zu(e, t) {
  var n = this.__data__, o = co(n, e);
  return o < 0 ? (++this.size, n.push([e, t])) : n[o][1] = t, this;
}
function _t(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
_t.prototype.clear = Ku;
_t.prototype.delete = Gu;
_t.prototype.get = Qu;
_t.prototype.has = Yu;
_t.prototype.set = Zu;
var Ju = Yt(tt, "Map");
const An = Ju;
function Xu() {
  this.size = 0, this.__data__ = {
    hash: new Ut(),
    map: new (An || _t)(),
    string: new Ut()
  };
}
function ec(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function fo(e, t) {
  var n = e.__data__;
  return ec(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function tc(e) {
  var t = fo(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function nc(e) {
  return fo(this, e).get(e);
}
function oc(e) {
  return fo(this, e).has(e);
}
function rc(e, t) {
  var n = fo(this, e), o = n.size;
  return n.set(e, t), this.size += n.size == o ? 0 : 1, this;
}
function Tt(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
Tt.prototype.clear = Xu;
Tt.prototype.delete = tc;
Tt.prototype.get = nc;
Tt.prototype.has = oc;
Tt.prototype.set = rc;
var ac = "Expected a function";
function or(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(ac);
  var n = function() {
    var o = arguments, r = t ? t.apply(this, o) : o[0], a = n.cache;
    if (a.has(r))
      return a.get(r);
    var i = e.apply(this, o);
    return n.cache = a.set(r, i) || a, i;
  };
  return n.cache = new (or.Cache || Tt)(), n;
}
or.Cache = Tt;
var ic = 500;
function sc(e) {
  var t = or(e, function(o) {
    return n.size === ic && n.clear(), o;
  }), n = t.cache;
  return t;
}
var lc = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, uc = /\\(\\)?/g, cc = sc(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(lc, function(n, o, r, a) {
    t.push(r ? a.replace(uc, "$1") : o || n);
  }), t;
});
const dc = cc;
function fc(e) {
  return e == null ? "" : Xa(e);
}
function po(e, t) {
  return ut(e) ? e : ku(e, t) ? [e] : dc(fc(e));
}
var pc = 1 / 0;
function rr(e) {
  if (typeof e == "string" || lo(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -pc ? "-0" : t;
}
function ui(e, t) {
  t = po(t, e);
  for (var n = 0, o = t.length; e != null && n < o; )
    e = e[rr(t[n++])];
  return n && n == o ? e : void 0;
}
function Le(e, t, n) {
  var o = e == null ? void 0 : ui(e, t);
  return o === void 0 ? n : o;
}
function ar(e, t) {
  for (var n = -1, o = t.length, r = e.length; ++n < o; )
    e[r + n] = t[n];
  return e;
}
var Hr = Fe ? Fe.isConcatSpreadable : void 0;
function vc(e) {
  return ut(e) || Xo(e) || !!(Hr && e && e[Hr]);
}
function ci(e, t, n, o, r) {
  var a = -1, i = e.length;
  for (n || (n = vc), r || (r = []); ++a < i; ) {
    var s = e[a];
    t > 0 && n(s) ? t > 1 ? ci(s, t - 1, n, o, r) : ar(r, s) : o || (r[r.length] = s);
  }
  return r;
}
function hc(e) {
  var t = e == null ? 0 : e.length;
  return t ? ci(e, 1) : [];
}
function gc(e) {
  return Ol(Ml(e, void 0, hc), e + "");
}
var mc = li(Object.getPrototypeOf, Object);
const di = mc;
function bc() {
  this.__data__ = new _t(), this.size = 0;
}
function yc(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function wc(e) {
  return this.__data__.get(e);
}
function Sc(e) {
  return this.__data__.has(e);
}
var _c = 200;
function Tc(e, t) {
  var n = this.__data__;
  if (n instanceof _t) {
    var o = n.__data__;
    if (!An || o.length < _c - 1)
      return o.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new Tt(o);
  }
  return n.set(e, t), this.size = n.size, this;
}
function yt(e) {
  var t = this.__data__ = new _t(e);
  this.size = t.size;
}
yt.prototype.clear = bc;
yt.prototype.delete = yc;
yt.prototype.get = wc;
yt.prototype.has = Sc;
yt.prototype.set = Tc;
function Cc(e, t) {
  return e && uo(t, tr(t), e);
}
function Ec(e, t) {
  return e && uo(t, nr(t), e);
}
var fi = typeof exports == "object" && exports && !exports.nodeType && exports, Vr = fi && typeof module == "object" && module && !module.nodeType && module, $c = Vr && Vr.exports === fi, Wr = $c ? tt.Buffer : void 0, Kr = Wr ? Wr.allocUnsafe : void 0;
function Oc(e, t) {
  if (t)
    return e.slice();
  var n = e.length, o = Kr ? Kr(n) : new e.constructor(n);
  return e.copy(o), o;
}
function Ac(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, r = 0, a = []; ++n < o; ) {
    var i = e[n];
    t(i, n, e) && (a[r++] = i);
  }
  return a;
}
function pi() {
  return [];
}
var Pc = Object.prototype, Ic = Pc.propertyIsEnumerable, Ur = Object.getOwnPropertySymbols, xc = Ur ? function(e) {
  return e == null ? [] : (e = Object(e), Ac(Ur(e), function(t) {
    return Ic.call(e, t);
  }));
} : pi;
const ir = xc;
function kc(e, t) {
  return uo(e, ir(e), t);
}
var Mc = Object.getOwnPropertySymbols, Lc = Mc ? function(e) {
  for (var t = []; e; )
    ar(t, ir(e)), e = di(e);
  return t;
} : pi;
const vi = Lc;
function Rc(e, t) {
  return uo(e, vi(e), t);
}
function hi(e, t, n) {
  var o = t(e);
  return ut(e) ? o : ar(o, n(e));
}
function No(e) {
  return hi(e, tr, ir);
}
function Bc(e) {
  return hi(e, nr, vi);
}
var Fc = Yt(tt, "DataView");
const zo = Fc;
var Nc = Yt(tt, "Promise");
const Do = Nc;
var zc = Yt(tt, "Set");
const jo = zc;
var qr = "[object Map]", Dc = "[object Object]", Gr = "[object Promise]", Qr = "[object Set]", Yr = "[object WeakMap]", Zr = "[object DataView]", jc = Qt(zo), Hc = Qt(An), Vc = Qt(Do), Wc = Qt(jo), Kc = Qt(Fo), Vt = bn;
(zo && Vt(new zo(new ArrayBuffer(1))) != Zr || An && Vt(new An()) != qr || Do && Vt(Do.resolve()) != Gr || jo && Vt(new jo()) != Qr || Fo && Vt(new Fo()) != Yr) && (Vt = function(e) {
  var t = bn(e), n = t == Dc ? e.constructor : void 0, o = n ? Qt(n) : "";
  if (o)
    switch (o) {
      case jc:
        return Zr;
      case Hc:
        return qr;
      case Vc:
        return Gr;
      case Wc:
        return Qr;
      case Kc:
        return Yr;
    }
  return t;
});
const Pn = Vt;
var Uc = Object.prototype, qc = Uc.hasOwnProperty;
function Gc(e) {
  var t = e.length, n = new e.constructor(t);
  return t && typeof e[0] == "string" && qc.call(e, "index") && (n.index = e.index, n.input = e.input), n;
}
var Qc = tt.Uint8Array;
const Jn = Qc;
function sr(e) {
  var t = new e.constructor(e.byteLength);
  return new Jn(t).set(new Jn(e)), t;
}
function Yc(e, t) {
  var n = t ? sr(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.byteLength);
}
var Zc = /\w*$/;
function Jc(e) {
  var t = new e.constructor(e.source, Zc.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var Jr = Fe ? Fe.prototype : void 0, Xr = Jr ? Jr.valueOf : void 0;
function Xc(e) {
  return Xr ? Object(Xr.call(e)) : {};
}
function ed(e, t) {
  var n = t ? sr(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.length);
}
var td = "[object Boolean]", nd = "[object Date]", od = "[object Map]", rd = "[object Number]", ad = "[object RegExp]", id = "[object Set]", sd = "[object String]", ld = "[object Symbol]", ud = "[object ArrayBuffer]", cd = "[object DataView]", dd = "[object Float32Array]", fd = "[object Float64Array]", pd = "[object Int8Array]", vd = "[object Int16Array]", hd = "[object Int32Array]", gd = "[object Uint8Array]", md = "[object Uint8ClampedArray]", bd = "[object Uint16Array]", yd = "[object Uint32Array]";
function wd(e, t, n) {
  var o = e.constructor;
  switch (t) {
    case ud:
      return sr(e);
    case td:
    case nd:
      return new o(+e);
    case cd:
      return Yc(e, n);
    case dd:
    case fd:
    case pd:
    case vd:
    case hd:
    case gd:
    case md:
    case bd:
    case yd:
      return ed(e, n);
    case od:
      return new o();
    case rd:
    case sd:
      return new o(e);
    case ad:
      return Jc(e);
    case id:
      return new o();
    case ld:
      return Xc(e);
  }
}
function Sd(e) {
  return typeof e.constructor == "function" && !Jo(e) ? hl(di(e)) : {};
}
var _d = "[object Map]";
function Td(e) {
  return Rt(e) && Pn(e) == _d;
}
var ea = ln && ln.isMap, Cd = ea ? er(ea) : Td;
const Ed = Cd;
var $d = "[object Set]";
function Od(e) {
  return Rt(e) && Pn(e) == $d;
}
var ta = ln && ln.isSet, Ad = ta ? er(ta) : Od;
const Pd = Ad;
var Id = 1, xd = 2, kd = 4, gi = "[object Arguments]", Md = "[object Array]", Ld = "[object Boolean]", Rd = "[object Date]", Bd = "[object Error]", mi = "[object Function]", Fd = "[object GeneratorFunction]", Nd = "[object Map]", zd = "[object Number]", bi = "[object Object]", Dd = "[object RegExp]", jd = "[object Set]", Hd = "[object String]", Vd = "[object Symbol]", Wd = "[object WeakMap]", Kd = "[object ArrayBuffer]", Ud = "[object DataView]", qd = "[object Float32Array]", Gd = "[object Float64Array]", Qd = "[object Int8Array]", Yd = "[object Int16Array]", Zd = "[object Int32Array]", Jd = "[object Uint8Array]", Xd = "[object Uint8ClampedArray]", ef = "[object Uint16Array]", tf = "[object Uint32Array]", ee = {};
ee[gi] = ee[Md] = ee[Kd] = ee[Ud] = ee[Ld] = ee[Rd] = ee[qd] = ee[Gd] = ee[Qd] = ee[Yd] = ee[Zd] = ee[Nd] = ee[zd] = ee[bi] = ee[Dd] = ee[jd] = ee[Hd] = ee[Vd] = ee[Jd] = ee[Xd] = ee[ef] = ee[tf] = !0;
ee[Bd] = ee[mi] = ee[Wd] = !1;
function Oo(e, t, n, o, r, a) {
  var i, s = t & Id, l = t & xd, c = t & kd;
  if (n && (i = r ? n(e, o, r, a) : n(e)), i !== void 0)
    return i;
  if (!ct(e))
    return e;
  var p = ut(e);
  if (p) {
    if (i = Gc(e), !s)
      return ml(e, i);
  } else {
    var v = Pn(e), m = v == mi || v == Fd;
    if (Zn(e))
      return Oc(e, s);
    if (v == bi || v == gi || m && !r) {
      if (i = l || m ? {} : Sd(e), !s)
        return l ? Rc(e, Ec(i, e)) : kc(e, Cc(i, e));
    } else {
      if (!ee[v])
        return r ? e : {};
      i = wd(e, v, s);
    }
  }
  a || (a = new yt());
  var g = a.get(e);
  if (g)
    return g;
  a.set(e, i), Pd(e) ? e.forEach(function(b) {
    i.add(Oo(b, t, n, b, e, a));
  }) : Ed(e) && e.forEach(function(b, h) {
    i.set(h, Oo(b, t, n, h, e, a));
  });
  var u = c ? l ? Bc : No : l ? nr : tr, f = p ? void 0 : u(e);
  return Al(f || e, function(b, h) {
    f && (h = b, b = e[h]), Yo(i, h, Oo(b, t, n, h, e, a));
  }), i;
}
var nf = "__lodash_hash_undefined__";
function of(e) {
  return this.__data__.set(e, nf), this;
}
function rf(e) {
  return this.__data__.has(e);
}
function Xn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new Tt(); ++t < n; )
    this.add(e[t]);
}
Xn.prototype.add = Xn.prototype.push = of;
Xn.prototype.has = rf;
function af(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length; ++n < o; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function sf(e, t) {
  return e.has(t);
}
var lf = 1, uf = 2;
function yi(e, t, n, o, r, a) {
  var i = n & lf, s = e.length, l = t.length;
  if (s != l && !(i && l > s))
    return !1;
  var c = a.get(e), p = a.get(t);
  if (c && p)
    return c == t && p == e;
  var v = -1, m = !0, g = n & uf ? new Xn() : void 0;
  for (a.set(e, t), a.set(t, e); ++v < s; ) {
    var u = e[v], f = t[v];
    if (o)
      var b = i ? o(f, u, v, t, e, a) : o(u, f, v, e, t, a);
    if (b !== void 0) {
      if (b)
        continue;
      m = !1;
      break;
    }
    if (g) {
      if (!af(t, function(h, _) {
        if (!sf(g, _) && (u === h || r(u, h, n, o, a)))
          return g.push(_);
      })) {
        m = !1;
        break;
      }
    } else if (!(u === f || r(u, f, n, o, a))) {
      m = !1;
      break;
    }
  }
  return a.delete(e), a.delete(t), m;
}
function cf(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(o, r) {
    n[++t] = [r, o];
  }), n;
}
function df(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(o) {
    n[++t] = o;
  }), n;
}
var ff = 1, pf = 2, vf = "[object Boolean]", hf = "[object Date]", gf = "[object Error]", mf = "[object Map]", bf = "[object Number]", yf = "[object RegExp]", wf = "[object Set]", Sf = "[object String]", _f = "[object Symbol]", Tf = "[object ArrayBuffer]", Cf = "[object DataView]", na = Fe ? Fe.prototype : void 0, Ao = na ? na.valueOf : void 0;
function Ef(e, t, n, o, r, a, i) {
  switch (n) {
    case Cf:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case Tf:
      return !(e.byteLength != t.byteLength || !a(new Jn(e), new Jn(t)));
    case vf:
    case hf:
    case bf:
      return Qo(+e, +t);
    case gf:
      return e.name == t.name && e.message == t.message;
    case yf:
    case Sf:
      return e == t + "";
    case mf:
      var s = cf;
    case wf:
      var l = o & ff;
      if (s || (s = df), e.size != t.size && !l)
        return !1;
      var c = i.get(e);
      if (c)
        return c == t;
      o |= pf, i.set(e, t);
      var p = yi(s(e), s(t), o, r, a, i);
      return i.delete(e), p;
    case _f:
      if (Ao)
        return Ao.call(e) == Ao.call(t);
  }
  return !1;
}
var $f = 1, Of = Object.prototype, Af = Of.hasOwnProperty;
function Pf(e, t, n, o, r, a) {
  var i = n & $f, s = No(e), l = s.length, c = No(t), p = c.length;
  if (l != p && !i)
    return !1;
  for (var v = l; v--; ) {
    var m = s[v];
    if (!(i ? m in t : Af.call(t, m)))
      return !1;
  }
  var g = a.get(e), u = a.get(t);
  if (g && u)
    return g == t && u == e;
  var f = !0;
  a.set(e, t), a.set(t, e);
  for (var b = i; ++v < l; ) {
    m = s[v];
    var h = e[m], _ = t[m];
    if (o)
      var A = i ? o(_, h, m, t, e, a) : o(h, _, m, e, t, a);
    if (!(A === void 0 ? h === _ || r(h, _, n, o, a) : A)) {
      f = !1;
      break;
    }
    b || (b = m == "constructor");
  }
  if (f && !b) {
    var O = e.constructor, x = t.constructor;
    O != x && "constructor" in e && "constructor" in t && !(typeof O == "function" && O instanceof O && typeof x == "function" && x instanceof x) && (f = !1);
  }
  return a.delete(e), a.delete(t), f;
}
var If = 1, oa = "[object Arguments]", ra = "[object Array]", Dn = "[object Object]", xf = Object.prototype, aa = xf.hasOwnProperty;
function kf(e, t, n, o, r, a) {
  var i = ut(e), s = ut(t), l = i ? ra : Pn(e), c = s ? ra : Pn(t);
  l = l == oa ? Dn : l, c = c == oa ? Dn : c;
  var p = l == Dn, v = c == Dn, m = l == c;
  if (m && Zn(e)) {
    if (!Zn(t))
      return !1;
    i = !0, p = !1;
  }
  if (m && !p)
    return a || (a = new yt()), i || ii(e) ? yi(e, t, n, o, r, a) : Ef(e, t, l, n, o, r, a);
  if (!(n & If)) {
    var g = p && aa.call(e, "__wrapped__"), u = v && aa.call(t, "__wrapped__");
    if (g || u) {
      var f = g ? e.value() : e, b = u ? t.value() : t;
      return a || (a = new yt()), r(f, b, n, o, a);
    }
  }
  return m ? (a || (a = new yt()), Pf(e, t, n, o, r, a)) : !1;
}
function wi(e, t, n, o, r) {
  return e === t ? !0 : e == null || t == null || !Rt(e) && !Rt(t) ? e !== e && t !== t : kf(e, t, n, o, wi, r);
}
function Mf(e, t) {
  return e != null && t in Object(e);
}
function Lf(e, t, n) {
  t = po(t, e);
  for (var o = -1, r = t.length, a = !1; ++o < r; ) {
    var i = rr(t[o]);
    if (!(a = e != null && n(e, i)))
      break;
    e = e[i];
  }
  return a || ++o != r ? a : (r = e == null ? 0 : e.length, !!r && Zo(r) && Go(i, r) && (ut(e) || Xo(e)));
}
function Rf(e, t) {
  return e != null && Lf(e, t, Mf);
}
var Bf = function() {
  return tt.Date.now();
};
const Po = Bf;
var Ff = "Expected a function", Nf = Math.max, zf = Math.min;
function ia(e, t, n) {
  var o, r, a, i, s, l, c = 0, p = !1, v = !1, m = !0;
  if (typeof e != "function")
    throw new TypeError(Ff);
  t = Lr(t) || 0, ct(n) && (p = !!n.leading, v = "maxWait" in n, a = v ? Nf(Lr(n.maxWait) || 0, t) : a, m = "trailing" in n ? !!n.trailing : m);
  function g(E) {
    var w = o, P = r;
    return o = r = void 0, c = E, i = e.apply(P, w), i;
  }
  function u(E) {
    return c = E, s = setTimeout(h, t), p ? g(E) : i;
  }
  function f(E) {
    var w = E - l, P = E - c, N = t - w;
    return v ? zf(N, a - P) : N;
  }
  function b(E) {
    var w = E - l, P = E - c;
    return l === void 0 || w >= t || w < 0 || v && P >= a;
  }
  function h() {
    var E = Po();
    if (b(E))
      return _(E);
    s = setTimeout(h, f(E));
  }
  function _(E) {
    return s = void 0, m && o ? g(E) : (o = r = void 0, i);
  }
  function A() {
    s !== void 0 && clearTimeout(s), c = 0, o = l = r = s = void 0;
  }
  function O() {
    return s === void 0 ? i : _(Po());
  }
  function x() {
    var E = Po(), w = b(E);
    if (o = arguments, r = this, l = E, w) {
      if (s === void 0)
        return u(l);
      if (v)
        return clearTimeout(s), s = setTimeout(h, t), g(l);
    }
    return s === void 0 && (s = setTimeout(h, t)), i;
  }
  return x.cancel = A, x.flush = O, x;
}
function eo(e) {
  for (var t = -1, n = e == null ? 0 : e.length, o = {}; ++t < n; ) {
    var r = e[t];
    o[r[0]] = r[1];
  }
  return o;
}
function Ho(e, t) {
  return wi(e, t);
}
function vo(e) {
  return e == null;
}
function Df(e) {
  return e === void 0;
}
function jf(e, t, n, o) {
  if (!ct(e))
    return e;
  t = po(t, e);
  for (var r = -1, a = t.length, i = a - 1, s = e; s != null && ++r < a; ) {
    var l = rr(t[r]), c = n;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return e;
    if (r != i) {
      var p = s[l];
      c = o ? o(p, l, s) : void 0, c === void 0 && (c = ct(p) ? p : Go(t[r + 1]) ? [] : {});
    }
    Yo(s, l, c), s = s[l];
  }
  return e;
}
function Hf(e, t, n) {
  for (var o = -1, r = t.length, a = {}; ++o < r; ) {
    var i = t[o], s = ui(e, i);
    n(s, i) && jf(a, po(i, e), s);
  }
  return a;
}
function Vf(e, t) {
  return Hf(e, t, function(n, o) {
    return Rf(e, o);
  });
}
var Wf = gc(function(e, t) {
  return e == null ? {} : Vf(e, t);
});
const Kf = Wf, mt = (e, t, { checkForDefaultPrevented: n = !0 } = {}) => (r) => {
  const a = e == null ? void 0 : e(r);
  if (n === !1 || !a)
    return t == null ? void 0 : t(r);
};
var sa;
const ce = typeof window < "u", In = (e) => typeof e == "boolean", Ze = (e) => typeof e == "number", Uf = (e) => typeof e == "string", to = () => {
}, qf = ce && ((sa = window == null ? void 0 : window.navigator) == null ? void 0 : sa.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function qt(e) {
  return typeof e == "function" ? e() : d(e);
}
function Gf(e, t) {
  function n(...o) {
    return new Promise((r, a) => {
      Promise.resolve(e(() => t.apply(this, o), { fn: t, thisArg: this, args: o })).then(r).catch(a);
    });
  }
  return n;
}
function Qf(e, t = {}) {
  let n, o, r = to;
  const a = (s) => {
    clearTimeout(s), r(), r = to;
  };
  return (s) => {
    const l = qt(e), c = qt(t.maxWait);
    return n && a(n), l <= 0 || c !== void 0 && c <= 0 ? (o && (a(o), o = null), Promise.resolve(s())) : new Promise((p, v) => {
      r = t.rejectOnCancel ? v : p, c && !o && (o = setTimeout(() => {
        n && a(n), o = null, p(s());
      }, c)), n = setTimeout(() => {
        o && a(o), o = null, p(s());
      }, l);
    });
  };
}
function Yf(e) {
  return e;
}
function ho(e) {
  return ds() ? (fs(e), !0) : !1;
}
function Zf(e, t = 200, n = {}) {
  return Gf(Qf(t, n), e);
}
function _b(e, t = 200, n = {}) {
  const o = I(e.value), r = Zf(() => {
    o.value = e.value;
  }, t, n);
  return R(e, () => r()), o;
}
function Jf(e, t = !0) {
  Pe() ? Te(e) : t ? e() : te(e);
}
function Tb(e, t, n = {}) {
  const {
    immediate: o = !0
  } = n, r = I(!1);
  let a = null;
  function i() {
    a && (clearTimeout(a), a = null);
  }
  function s() {
    r.value = !1, i();
  }
  function l(...c) {
    i(), r.value = !0, a = setTimeout(() => {
      r.value = !1, a = null, e(...c);
    }, qt(t));
  }
  return o && (r.value = !0, ce && l()), ho(s), {
    isPending: Ga(r),
    start: l,
    stop: s
  };
}
function bt(e) {
  var t;
  const n = qt(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const go = ce ? window : void 0;
function rn(...e) {
  let t, n, o, r;
  if (Uf(e[0]) || Array.isArray(e[0]) ? ([n, o, r] = e, t = go) : [t, n, o, r] = e, !t)
    return to;
  Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
  const a = [], i = () => {
    a.forEach((p) => p()), a.length = 0;
  }, s = (p, v, m, g) => (p.addEventListener(v, m, g), () => p.removeEventListener(v, m, g)), l = R(() => [bt(t), qt(r)], ([p, v]) => {
    i(), p && a.push(...n.flatMap((m) => o.map((g) => s(p, m, g, v))));
  }, { immediate: !0, flush: "post" }), c = () => {
    l(), i();
  };
  return ho(c), c;
}
let la = !1;
function Xf(e, t, n = {}) {
  const { window: o = go, ignore: r = [], capture: a = !0, detectIframe: i = !1 } = n;
  if (!o)
    return;
  qf && !la && (la = !0, Array.from(o.document.body.children).forEach((m) => m.addEventListener("click", to)));
  let s = !0;
  const l = (m) => r.some((g) => {
    if (typeof g == "string")
      return Array.from(o.document.querySelectorAll(g)).some((u) => u === m.target || m.composedPath().includes(u));
    {
      const u = bt(g);
      return u && (m.target === u || m.composedPath().includes(u));
    }
  }), p = [
    rn(o, "click", (m) => {
      const g = bt(e);
      if (!(!g || g === m.target || m.composedPath().includes(g))) {
        if (m.detail === 0 && (s = !l(m)), !s) {
          s = !0;
          return;
        }
        t(m);
      }
    }, { passive: !0, capture: a }),
    rn(o, "pointerdown", (m) => {
      const g = bt(e);
      g && (s = !m.composedPath().includes(g) && !l(m));
    }, { passive: !0 }),
    i && rn(o, "blur", (m) => {
      var g;
      const u = bt(e);
      ((g = o.document.activeElement) == null ? void 0 : g.tagName) === "IFRAME" && !(u != null && u.contains(o.document.activeElement)) && t(m);
    })
  ].filter(Boolean);
  return () => p.forEach((m) => m());
}
function ep(e, t = !1) {
  const n = I(), o = () => n.value = !!e();
  return o(), Jf(o, t), n;
}
const ua = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ca = "__vueuse_ssr_handlers__";
ua[ca] = ua[ca] || {};
function Cb(e, t, { window: n = go, initialValue: o = "" } = {}) {
  const r = I(o), a = S(() => {
    var i;
    return bt(t) || ((i = n == null ? void 0 : n.document) == null ? void 0 : i.documentElement);
  });
  return R([a, () => qt(e)], ([i, s]) => {
    var l;
    if (i && n) {
      const c = (l = n.getComputedStyle(i).getPropertyValue(s)) == null ? void 0 : l.trim();
      r.value = c || o;
    }
  }, { immediate: !0 }), R(r, (i) => {
    var s;
    (s = a.value) != null && s.style && a.value.style.setProperty(qt(e), i);
  }), r;
}
var da = Object.getOwnPropertySymbols, tp = Object.prototype.hasOwnProperty, np = Object.prototype.propertyIsEnumerable, op = (e, t) => {
  var n = {};
  for (var o in e)
    tp.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && da)
    for (var o of da(e))
      t.indexOf(o) < 0 && np.call(e, o) && (n[o] = e[o]);
  return n;
};
function mo(e, t, n = {}) {
  const o = n, { window: r = go } = o, a = op(o, ["window"]);
  let i;
  const s = ep(() => r && "ResizeObserver" in r), l = () => {
    i && (i.disconnect(), i = void 0);
  }, c = R(() => bt(e), (v) => {
    l(), s.value && r && v && (i = new ResizeObserver(t), i.observe(v, a));
  }, { immediate: !0, flush: "post" }), p = () => {
    l(), c();
  };
  return ho(p), {
    isSupported: s,
    stop: p
  };
}
var fa;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(fa || (fa = {}));
var rp = Object.defineProperty, pa = Object.getOwnPropertySymbols, ap = Object.prototype.hasOwnProperty, ip = Object.prototype.propertyIsEnumerable, va = (e, t, n) => t in e ? rp(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, sp = (e, t) => {
  for (var n in t || (t = {}))
    ap.call(t, n) && va(e, n, t[n]);
  if (pa)
    for (var n of pa(t))
      ip.call(t, n) && va(e, n, t[n]);
  return e;
};
const lp = {
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
sp({
  linear: Yf
}, lp);
const xn = () => {
}, up = Object.prototype.hasOwnProperty, ha = (e, t) => up.call(e, t), Gt = Array.isArray, Re = (e) => typeof e == "function", wt = (e) => typeof e == "string", Eb = (e) => typeof e == "symbol", et = (e) => e !== null && typeof e == "object", $b = (e) => et(e) && Re(e.then) && Re(e.catch), cp = Object.prototype.toString, dp = (e) => cp.call(e), Io = (e) => dp(e).slice(8, -1), Si = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, fp = /-(\w)/g, pp = Si((e) => e.replace(fp, (t, n) => n ? n.toUpperCase() : "")), vp = Si(
  (e) => e.charAt(0).toUpperCase() + e.slice(1)
), no = (e) => e === void 0, Ob = (e) => !e && e !== 0 || Gt(e) && e.length === 0 || et(e) && !Object.keys(e).length, kn = (e) => typeof Element > "u" ? !1 : e instanceof Element, hp = (e) => wt(e) ? !Number.isNaN(Number(e)) : !1, gp = (e = "") => e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d"), Ab = (e) => vp(e);
class mp extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function bp(e, t) {
  throw new mp(`[${e}] ${t}`);
}
function Pb(e, t) {
}
const _i = (e = "") => e.split(" ").filter((t) => !!t.trim()), Ib = (e, t) => {
  if (!e || !t)
    return !1;
  if (t.includes(" "))
    throw new Error("className should not contain space.");
  return e.classList.contains(t);
}, xb = (e, t) => {
  !e || !t.trim() || e.classList.add(..._i(t));
}, kb = (e, t) => {
  !e || !t.trim() || e.classList.remove(..._i(t));
}, Mb = (e, t) => {
  var n;
  if (!ce || !e || !t)
    return "";
  let o = pp(t);
  o === "float" && (o = "cssFloat");
  try {
    const r = e.style[o];
    if (r)
      return r;
    const a = (n = document.defaultView) == null ? void 0 : n.getComputedStyle(e, "");
    return a ? a[o] : "";
  } catch {
    return e.style[o];
  }
};
function Vo(e, t = "px") {
  if (!e)
    return "";
  if (Ze(e) || hp(e))
    return `${e}${t}`;
  if (wt(e))
    return e;
}
let jn;
const Lb = (e) => {
  var t;
  if (!ce)
    return 0;
  if (jn !== void 0)
    return jn;
  const n = document.createElement("div");
  n.className = `${e}-scrollbar__wrap`, n.style.visibility = "hidden", n.style.width = "100px", n.style.position = "absolute", n.style.top = "-9999px", document.body.appendChild(n);
  const o = n.offsetWidth;
  n.style.overflow = "scroll";
  const r = document.createElement("div");
  r.style.width = "100%", n.appendChild(r);
  const a = r.offsetWidth;
  return (t = n.parentNode) == null || t.removeChild(n), jn = o - a, jn;
};
function yp(e, t) {
  if (!ce)
    return;
  if (!t) {
    e.scrollTop = 0;
    return;
  }
  const n = [];
  let o = t.offsetParent;
  for (; o !== null && e !== o && e.contains(o); )
    n.push(o), o = o.offsetParent;
  const r = t.offsetTop + n.reduce((l, c) => l + c.offsetTop, 0), a = r + t.offsetHeight, i = e.scrollTop, s = i + e.clientHeight;
  r < i ? e.scrollTop = r : a > s && (e.scrollTop = a - e.clientHeight);
}
/*! Element Plus Icons Vue v2.1.0 */
var Ie = (e, t) => {
  let n = e.__vccOpts || e;
  for (let [o, r] of t)
    n[o] = r;
  return n;
}, wp = {
  name: "ArrowDown"
}, Sp = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, _p = /* @__PURE__ */ D(
  "path",
  {
    fill: "currentColor",
    d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
  },
  null,
  -1
  /* HOISTED */
), Tp = [
  _p
];
function Cp(e, t, n, o, r, a) {
  return T(), L("svg", Sp, Tp);
}
var Ep = /* @__PURE__ */ Ie(wp, [["render", Cp], ["__file", "arrow-down.vue"]]), $p = {
  name: "ArrowRight"
}, Op = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Ap = /* @__PURE__ */ D(
  "path",
  {
    fill: "currentColor",
    d: "M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"
  },
  null,
  -1
  /* HOISTED */
), Pp = [
  Ap
];
function Ip(e, t, n, o, r, a) {
  return T(), L("svg", Op, Pp);
}
var Rb = /* @__PURE__ */ Ie($p, [["render", Ip], ["__file", "arrow-right.vue"]]), xp = {
  name: "ArrowUp"
}, kp = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Mp = /* @__PURE__ */ D(
  "path",
  {
    fill: "currentColor",
    d: "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0z"
  },
  null,
  -1
  /* HOISTED */
), Lp = [
  Mp
];
function Rp(e, t, n, o, r, a) {
  return T(), L("svg", kp, Lp);
}
var Bb = /* @__PURE__ */ Ie(xp, [["render", Rp], ["__file", "arrow-up.vue"]]), Bp = {
  name: "CaretRight"
}, Fp = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Np = /* @__PURE__ */ D(
  "path",
  {
    fill: "currentColor",
    d: "M384 192v640l384-320.064z"
  },
  null,
  -1
  /* HOISTED */
), zp = [
  Np
];
function Dp(e, t, n, o, r, a) {
  return T(), L("svg", Fp, zp);
}
var Fb = /* @__PURE__ */ Ie(Bp, [["render", Dp], ["__file", "caret-right.vue"]]), jp = {
  name: "Check"
}, Hp = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Vp = /* @__PURE__ */ D(
  "path",
  {
    fill: "currentColor",
    d: "M406.656 706.944 195.84 496.256a32 32 0 1 0-45.248 45.248l256 256 512-512a32 32 0 0 0-45.248-45.248L406.592 706.944z"
  },
  null,
  -1
  /* HOISTED */
), Wp = [
  Vp
];
function Kp(e, t, n, o, r, a) {
  return T(), L("svg", Hp, Wp);
}
var Nb = /* @__PURE__ */ Ie(jp, [["render", Kp], ["__file", "check.vue"]]), Up = {
  name: "CircleCheck"
}, qp = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Gp = /* @__PURE__ */ D(
  "path",
  {
    fill: "currentColor",
    d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
  },
  null,
  -1
  /* HOISTED */
), Qp = /* @__PURE__ */ D(
  "path",
  {
    fill: "currentColor",
    d: "M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z"
  },
  null,
  -1
  /* HOISTED */
), Yp = [
  Gp,
  Qp
];
function Zp(e, t, n, o, r, a) {
  return T(), L("svg", qp, Yp);
}
var Jp = /* @__PURE__ */ Ie(Up, [["render", Zp], ["__file", "circle-check.vue"]]), Xp = {
  name: "CircleClose"
}, ev = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, tv = /* @__PURE__ */ D(
  "path",
  {
    fill: "currentColor",
    d: "m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248L466.752 512z"
  },
  null,
  -1
  /* HOISTED */
), nv = /* @__PURE__ */ D(
  "path",
  {
    fill: "currentColor",
    d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
  },
  null,
  -1
  /* HOISTED */
), ov = [
  tv,
  nv
];
function rv(e, t, n, o, r, a) {
  return T(), L("svg", ev, ov);
}
var lr = /* @__PURE__ */ Ie(Xp, [["render", rv], ["__file", "circle-close.vue"]]), av = {
  name: "Close"
}, iv = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, sv = /* @__PURE__ */ D(
  "path",
  {
    fill: "currentColor",
    d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
  },
  null,
  -1
  /* HOISTED */
), lv = [
  sv
];
function uv(e, t, n, o, r, a) {
  return T(), L("svg", iv, lv);
}
var Wo = /* @__PURE__ */ Ie(av, [["render", uv], ["__file", "close.vue"]]), cv = {
  name: "Hide"
}, dv = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, fv = /* @__PURE__ */ D(
  "path",
  {
    fill: "currentColor",
    d: "M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2L371.2 588.8ZM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z"
  },
  null,
  -1
  /* HOISTED */
), pv = /* @__PURE__ */ D(
  "path",
  {
    fill: "currentColor",
    d: "M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z"
  },
  null,
  -1
  /* HOISTED */
), vv = [
  fv,
  pv
];
function hv(e, t, n, o, r, a) {
  return T(), L("svg", dv, vv);
}
var gv = /* @__PURE__ */ Ie(cv, [["render", hv], ["__file", "hide.vue"]]), mv = {
  name: "Loading"
}, bv = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, yv = /* @__PURE__ */ D(
  "path",
  {
    fill: "currentColor",
    d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
  },
  null,
  -1
  /* HOISTED */
), wv = [
  yv
];
function Sv(e, t, n, o, r, a) {
  return T(), L("svg", bv, wv);
}
var Ti = /* @__PURE__ */ Ie(mv, [["render", Sv], ["__file", "loading.vue"]]), _v = {
  name: "Minus"
}, Tv = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Cv = /* @__PURE__ */ D(
  "path",
  {
    fill: "currentColor",
    d: "M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64z"
  },
  null,
  -1
  /* HOISTED */
), Ev = [
  Cv
];
function $v(e, t, n, o, r, a) {
  return T(), L("svg", Tv, Ev);
}
var zb = /* @__PURE__ */ Ie(_v, [["render", $v], ["__file", "minus.vue"]]), Ov = {
  name: "Plus"
}, Av = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Pv = /* @__PURE__ */ D(
  "path",
  {
    fill: "currentColor",
    d: "M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64h352z"
  },
  null,
  -1
  /* HOISTED */
), Iv = [
  Pv
];
function xv(e, t, n, o, r, a) {
  return T(), L("svg", Av, Iv);
}
var Db = /* @__PURE__ */ Ie(Ov, [["render", xv], ["__file", "plus.vue"]]), kv = {
  name: "View"
}, Mv = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Lv = /* @__PURE__ */ D(
  "path",
  {
    fill: "currentColor",
    d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352zm0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448zm0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160z"
  },
  null,
  -1
  /* HOISTED */
), Rv = [
  Lv
];
function Bv(e, t, n, o, r, a) {
  return T(), L("svg", Mv, Rv);
}
var Fv = /* @__PURE__ */ Ie(kv, [["render", Bv], ["__file", "view.vue"]]);
const Ci = "__epPropKey", Y = (e) => e, Nv = (e) => et(e) && !!e[Ci], bo = (e, t) => {
  if (!et(e) || Nv(e))
    return e;
  const { values: n, required: o, default: r, type: a, validator: i } = e, l = {
    type: a,
    required: !!o,
    validator: n || i ? (c) => {
      let p = !1, v = [];
      if (n && (v = Array.from(n), ha(e, "default") && v.push(r), p || (p = v.includes(c))), i && (p || (p = i(c))), !p && v.length > 0) {
        const m = [...new Set(v)].map((g) => JSON.stringify(g)).join(", ");
        ps(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${m}], got value ${JSON.stringify(c)}.`);
      }
      return p;
    } : void 0,
    [Ci]: !0
  };
  return ha(e, "default") && (l.default = r), l;
}, fe = (e) => eo(Object.entries(e).map(([t, n]) => [
  t,
  bo(n, t)
])), un = Y([
  String,
  Object,
  Function
]), jb = {
  Close: Wo
}, zv = {
  validating: Ti,
  success: Jp,
  error: lr
}, Ct = (e, t) => {
  if (e.install = (n) => {
    for (const o of [e, ...Object.values(t ?? {})])
      n.component(o.name, o);
  }, t)
    for (const [n, o] of Object.entries(t))
      e[n] = o;
  return e;
}, Bn = (e) => (e.install = xn, e), Mn = {
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
}, be = "update:modelValue", Ei = "change", Hb = "input", ur = ["", "default", "small", "large"], Dv = {
  large: 40,
  default: 32,
  small: 24
}, jv = (e) => Dv[e || "default"], Hv = (e) => ["", ...ur].includes(e), $i = (e) => /([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi.test(e), Vv = (e) => e, Wv = ["class", "style"], Kv = /^on[A-Z]/, Uv = (e = {}) => {
  const { excludeListeners: t = !1, excludeKeys: n } = e, o = S(() => ((n == null ? void 0 : n.value) || []).concat(Wv)), r = Pe();
  return r ? S(() => {
    var a;
    return eo(Object.entries((a = r.proxy) == null ? void 0 : a.$attrs).filter(([i]) => !o.value.includes(i) && !(t && Kv.test(i))));
  }) : S(() => ({}));
}, Oi = Symbol("buttonGroupContextKey"), yn = Symbol("checkboxGroupContextKey"), qv = Symbol(), cr = Symbol("formContextKey"), oo = Symbol("formItemContextKey"), Ai = Symbol("scrollbarContextKey"), dr = Symbol("popper"), Pi = Symbol("popperContent"), fr = Symbol("elTooltip"), Ii = (e) => {
  const t = Pe();
  return S(() => {
    var n, o;
    return (o = ((n = t.proxy) == null ? void 0 : n.$props)[e]) != null ? o : void 0;
  });
}, ga = I();
function Zt(e, t = void 0) {
  const n = Pe() ? oe(qv, ga) : ga;
  return e ? S(() => {
    var o, r;
    return (r = (o = n.value) == null ? void 0 : o[e]) != null ? r : t;
  }) : n;
}
const yo = bo({
  type: String,
  values: ur,
  required: !1
}), cn = (e, t = {}) => {
  const n = I(void 0), o = t.prop ? n : Ii("size"), r = t.global ? n : Zt("size"), a = t.form ? { size: void 0 } : oe(cr, void 0), i = t.formItem ? { size: void 0 } : oe(oo, void 0);
  return S(() => o.value || d(e) || (i == null ? void 0 : i.size) || (a == null ? void 0 : a.size) || r.value || "");
}, wo = (e) => {
  const t = Ii("disabled"), n = oe(cr, void 0);
  return S(() => t.value || d(e) || (n == null ? void 0 : n.disabled) || !1);
}, xi = ({ from: e, replacement: t, scope: n, version: o, ref: r, type: a = "API" }, i) => {
  R(() => d(i), (s) => {
  }, {
    immediate: !0
  });
}, Gv = (e) => ({
  focus: () => {
    var t, n;
    (n = (t = e.value) == null ? void 0 : t.focus) == null || n.call(t);
  }
}), pr = "el", Qv = "is-", Ht = (e, t, n, o, r) => {
  let a = `${e}-${t}`;
  return n && (a += `-${n}`), o && (a += `__${o}`), r && (a += `--${r}`), a;
}, re = (e) => {
  const t = Zt("namespace", pr);
  return {
    namespace: t,
    b: (u = "") => Ht(t.value, e, u, "", ""),
    e: (u) => u ? Ht(t.value, e, "", u, "") : "",
    m: (u) => u ? Ht(t.value, e, "", "", u) : "",
    be: (u, f) => u && f ? Ht(t.value, e, u, f, "") : "",
    em: (u, f) => u && f ? Ht(t.value, e, "", u, f) : "",
    bm: (u, f) => u && f ? Ht(t.value, e, u, "", f) : "",
    bem: (u, f, b) => u && f && b ? Ht(t.value, e, u, f, b) : "",
    is: (u, ...f) => {
      const b = f.length >= 1 ? f[0] : !0;
      return u && b ? `${Qv}${u}` : "";
    },
    cssVar: (u) => {
      const f = {};
      for (const b in u)
        u[b] && (f[`--${t.value}-${b}`] = u[b]);
      return f;
    },
    cssVarName: (u) => `--${t.value}-${u}`,
    cssVarBlock: (u) => {
      const f = {};
      for (const b in u)
        u[b] && (f[`--${t.value}-${e}-${b}`] = u[b]);
      return f;
    },
    cssVarBlockName: (u) => `--${t.value}-${e}-${u}`
  };
}, ma = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, Yv = Symbol("elIdInjection"), ki = () => Pe() ? oe(Yv, ma) : ma, Mi = (e) => {
  const t = ki(), n = Zt("namespace", pr);
  return S(() => d(e) || `${n.value}-id-${t.prefix}-${t.current++}`);
}, wn = () => {
  const e = oe(cr, void 0), t = oe(oo, void 0);
  return {
    form: e,
    formItem: t
  };
}, vr = (e, {
  formItemContext: t,
  disableIdGeneration: n,
  disableIdManagement: o
}) => {
  n || (n = I(!1)), o || (o = I(!1));
  const r = I();
  let a;
  const i = S(() => {
    var s;
    return !!(!e.label && t && t.inputIds && ((s = t.inputIds) == null ? void 0 : s.length) <= 1);
  });
  return Te(() => {
    a = R([st(e, "id"), n], ([s, l]) => {
      const c = s ?? (l ? void 0 : Mi().value);
      c !== r.value && (t != null && t.removeInputId && (r.value && t.removeInputId(r.value), !(o != null && o.value) && !l && c && t.addInputId(c)), r.value = c);
    }, { immediate: !0 });
  }), vs(() => {
    a && a(), t != null && t.removeInputId && r.value && t.removeInputId(r.value);
  }), {
    isLabeledByFormItem: i,
    inputId: r
  };
};
var Zv = {
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
const Jv = (e) => (t, n) => Xv(t, n, d(e)), Xv = (e, t, n) => Le(n, e, e).replace(/\{(\w+)\}/g, (o, r) => {
  var a;
  return `${(a = t == null ? void 0 : t[r]) != null ? a : `{${r}}`}`;
}), eh = (e) => {
  const t = S(() => d(e).name), n = an(e) ? e : I(e);
  return {
    lang: t,
    locale: n,
    t: Jv(e)
  };
}, hr = () => {
  const e = Zt("locale");
  return eh(S(() => e.value || Zv));
}, th = bo({
  type: Y(Boolean),
  default: null
}), nh = bo({
  type: Y(Function)
}), Li = (e) => {
  const t = `update:${e}`, n = `onUpdate:${e}`, o = [t], r = {
    [e]: th,
    [n]: nh
  };
  return {
    useModelToggle: ({
      indicator: i,
      toggleReason: s,
      shouldHideWhenRouteChanges: l,
      shouldProceed: c,
      onShow: p,
      onHide: v
    }) => {
      const m = Pe(), { emit: g } = m, u = m.props, f = S(() => Re(u[n])), b = S(() => u[e] === null), h = (w) => {
        i.value !== !0 && (i.value = !0, s && (s.value = w), Re(p) && p(w));
      }, _ = (w) => {
        i.value !== !1 && (i.value = !1, s && (s.value = w), Re(v) && v(w));
      }, A = (w) => {
        if (u.disabled === !0 || Re(c) && !c())
          return;
        const P = f.value && ce;
        P && g(t, !0), (b.value || !P) && h(w);
      }, O = (w) => {
        if (u.disabled === !0 || !ce)
          return;
        const P = f.value && ce;
        P && g(t, !1), (b.value || !P) && _(w);
      }, x = (w) => {
        In(w) && (u.disabled && w ? f.value && g(t, !1) : i.value !== w && (w ? h() : _()));
      }, E = () => {
        i.value ? O() : A();
      };
      return R(() => u[e], x), l && m.appContext.config.globalProperties.$route !== void 0 && R(() => ({
        ...m.proxy.$route
      }), () => {
        l.value && i.value && O();
      }), Te(() => {
        x(u[e]);
      }), {
        hide: O,
        show: A,
        toggle: E,
        hasUpdateHandler: f
      };
    },
    useModelToggleProps: r,
    useModelToggleEmits: o
  };
};
Li("modelValue");
var Se = "top", Ne = "bottom", ze = "right", _e = "left", gr = "auto", Fn = [Se, Ne, ze, _e], dn = "start", Ln = "end", oh = "clippingParents", Ri = "viewport", Tn = "popper", rh = "reference", ba = Fn.reduce(function(e, t) {
  return e.concat([t + "-" + dn, t + "-" + Ln]);
}, []), So = [].concat(Fn, [gr]).reduce(function(e, t) {
  return e.concat([t, t + "-" + dn, t + "-" + Ln]);
}, []), ah = "beforeRead", ih = "read", sh = "afterRead", lh = "beforeMain", uh = "main", ch = "afterMain", dh = "beforeWrite", fh = "write", ph = "afterWrite", vh = [ah, ih, sh, lh, uh, ch, dh, fh, ph];
function dt(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function nt(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function fn(e) {
  var t = nt(e).Element;
  return e instanceof t || e instanceof Element;
}
function Be(e) {
  var t = nt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function mr(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = nt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function hh(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var o = t.styles[n] || {}, r = t.attributes[n] || {}, a = t.elements[n];
    !Be(a) || !dt(a) || (Object.assign(a.style, o), Object.keys(r).forEach(function(i) {
      var s = r[i];
      s === !1 ? a.removeAttribute(i) : a.setAttribute(i, s === !0 ? "" : s);
    }));
  });
}
function gh(e) {
  var t = e.state, n = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(o) {
      var r = t.elements[o], a = t.attributes[o] || {}, i = Object.keys(t.styles.hasOwnProperty(o) ? t.styles[o] : n[o]), s = i.reduce(function(l, c) {
        return l[c] = "", l;
      }, {});
      !Be(r) || !dt(r) || (Object.assign(r.style, s), Object.keys(a).forEach(function(l) {
        r.removeAttribute(l);
      }));
    });
  };
}
var Bi = { name: "applyStyles", enabled: !0, phase: "write", fn: hh, effect: gh, requires: ["computeStyles"] };
function lt(e) {
  return e.split("-")[0];
}
var Kt = Math.max, ro = Math.min, pn = Math.round;
function vn(e, t) {
  t === void 0 && (t = !1);
  var n = e.getBoundingClientRect(), o = 1, r = 1;
  if (Be(e) && t) {
    var a = e.offsetHeight, i = e.offsetWidth;
    i > 0 && (o = pn(n.width) / i || 1), a > 0 && (r = pn(n.height) / a || 1);
  }
  return { width: n.width / o, height: n.height / r, top: n.top / r, right: n.right / o, bottom: n.bottom / r, left: n.left / o, x: n.left / o, y: n.top / r };
}
function br(e) {
  var t = vn(e), n = e.offsetWidth, o = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), { x: e.offsetLeft, y: e.offsetTop, width: n, height: o };
}
function Fi(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && mr(n)) {
    var o = t;
    do {
      if (o && e.isSameNode(o))
        return !0;
      o = o.parentNode || o.host;
    } while (o);
  }
  return !1;
}
function St(e) {
  return nt(e).getComputedStyle(e);
}
function mh(e) {
  return ["table", "td", "th"].indexOf(dt(e)) >= 0;
}
function Bt(e) {
  return ((fn(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function _o(e) {
  return dt(e) === "html" ? e : e.assignedSlot || e.parentNode || (mr(e) ? e.host : null) || Bt(e);
}
function ya(e) {
  return !Be(e) || St(e).position === "fixed" ? null : e.offsetParent;
}
function bh(e) {
  var t = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1, n = navigator.userAgent.indexOf("Trident") !== -1;
  if (n && Be(e)) {
    var o = St(e);
    if (o.position === "fixed")
      return null;
  }
  var r = _o(e);
  for (mr(r) && (r = r.host); Be(r) && ["html", "body"].indexOf(dt(r)) < 0; ) {
    var a = St(r);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none")
      return r;
    r = r.parentNode;
  }
  return null;
}
function Nn(e) {
  for (var t = nt(e), n = ya(e); n && mh(n) && St(n).position === "static"; )
    n = ya(n);
  return n && (dt(n) === "html" || dt(n) === "body" && St(n).position === "static") ? t : n || bh(e) || t;
}
function yr(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function En(e, t, n) {
  return Kt(e, ro(t, n));
}
function yh(e, t, n) {
  var o = En(e, t, n);
  return o > n ? n : o;
}
function Ni() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function zi(e) {
  return Object.assign({}, Ni(), e);
}
function Di(e, t) {
  return t.reduce(function(n, o) {
    return n[o] = e, n;
  }, {});
}
var wh = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, zi(typeof e != "number" ? e : Di(e, Fn));
};
function Sh(e) {
  var t, n = e.state, o = e.name, r = e.options, a = n.elements.arrow, i = n.modifiersData.popperOffsets, s = lt(n.placement), l = yr(s), c = [_e, ze].indexOf(s) >= 0, p = c ? "height" : "width";
  if (!(!a || !i)) {
    var v = wh(r.padding, n), m = br(a), g = l === "y" ? Se : _e, u = l === "y" ? Ne : ze, f = n.rects.reference[p] + n.rects.reference[l] - i[l] - n.rects.popper[p], b = i[l] - n.rects.reference[l], h = Nn(a), _ = h ? l === "y" ? h.clientHeight || 0 : h.clientWidth || 0 : 0, A = f / 2 - b / 2, O = v[g], x = _ - m[p] - v[u], E = _ / 2 - m[p] / 2 + A, w = En(O, E, x), P = l;
    n.modifiersData[o] = (t = {}, t[P] = w, t.centerOffset = w - E, t);
  }
}
function _h(e) {
  var t = e.state, n = e.options, o = n.element, r = o === void 0 ? "[data-popper-arrow]" : o;
  r != null && (typeof r == "string" && (r = t.elements.popper.querySelector(r), !r) || !Fi(t.elements.popper, r) || (t.elements.arrow = r));
}
var Th = { name: "arrow", enabled: !0, phase: "main", fn: Sh, effect: _h, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function hn(e) {
  return e.split("-")[1];
}
var Ch = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function Eh(e) {
  var t = e.x, n = e.y, o = window, r = o.devicePixelRatio || 1;
  return { x: pn(t * r) / r || 0, y: pn(n * r) / r || 0 };
}
function wa(e) {
  var t, n = e.popper, o = e.popperRect, r = e.placement, a = e.variation, i = e.offsets, s = e.position, l = e.gpuAcceleration, c = e.adaptive, p = e.roundOffsets, v = e.isFixed, m = i.x, g = m === void 0 ? 0 : m, u = i.y, f = u === void 0 ? 0 : u, b = typeof p == "function" ? p({ x: g, y: f }) : { x: g, y: f };
  g = b.x, f = b.y;
  var h = i.hasOwnProperty("x"), _ = i.hasOwnProperty("y"), A = _e, O = Se, x = window;
  if (c) {
    var E = Nn(n), w = "clientHeight", P = "clientWidth";
    if (E === nt(n) && (E = Bt(n), St(E).position !== "static" && s === "absolute" && (w = "scrollHeight", P = "scrollWidth")), E = E, r === Se || (r === _e || r === ze) && a === Ln) {
      O = Ne;
      var N = v && E === x && x.visualViewport ? x.visualViewport.height : E[w];
      f -= N - o.height, f *= l ? 1 : -1;
    }
    if (r === _e || (r === Se || r === Ne) && a === Ln) {
      A = ze;
      var F = v && E === x && x.visualViewport ? x.visualViewport.width : E[P];
      g -= F - o.width, g *= l ? 1 : -1;
    }
  }
  var V = Object.assign({ position: s }, c && Ch), U = p === !0 ? Eh({ x: g, y: f }) : { x: g, y: f };
  if (g = U.x, f = U.y, l) {
    var q;
    return Object.assign({}, V, (q = {}, q[O] = _ ? "0" : "", q[A] = h ? "0" : "", q.transform = (x.devicePixelRatio || 1) <= 1 ? "translate(" + g + "px, " + f + "px)" : "translate3d(" + g + "px, " + f + "px, 0)", q));
  }
  return Object.assign({}, V, (t = {}, t[O] = _ ? f + "px" : "", t[A] = h ? g + "px" : "", t.transform = "", t));
}
function $h(e) {
  var t = e.state, n = e.options, o = n.gpuAcceleration, r = o === void 0 ? !0 : o, a = n.adaptive, i = a === void 0 ? !0 : a, s = n.roundOffsets, l = s === void 0 ? !0 : s, c = { placement: lt(t.placement), variation: hn(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: r, isFixed: t.options.strategy === "fixed" };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, wa(Object.assign({}, c, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: i, roundOffsets: l })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, wa(Object.assign({}, c, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: l })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var ji = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: $h, data: {} }, Hn = { passive: !0 };
function Oh(e) {
  var t = e.state, n = e.instance, o = e.options, r = o.scroll, a = r === void 0 ? !0 : r, i = o.resize, s = i === void 0 ? !0 : i, l = nt(t.elements.popper), c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && c.forEach(function(p) {
    p.addEventListener("scroll", n.update, Hn);
  }), s && l.addEventListener("resize", n.update, Hn), function() {
    a && c.forEach(function(p) {
      p.removeEventListener("scroll", n.update, Hn);
    }), s && l.removeEventListener("resize", n.update, Hn);
  };
}
var Hi = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
}, effect: Oh, data: {} }, Ah = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Gn(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Ah[t];
  });
}
var Ph = { start: "end", end: "start" };
function Sa(e) {
  return e.replace(/start|end/g, function(t) {
    return Ph[t];
  });
}
function wr(e) {
  var t = nt(e), n = t.pageXOffset, o = t.pageYOffset;
  return { scrollLeft: n, scrollTop: o };
}
function Sr(e) {
  return vn(Bt(e)).left + wr(e).scrollLeft;
}
function Ih(e) {
  var t = nt(e), n = Bt(e), o = t.visualViewport, r = n.clientWidth, a = n.clientHeight, i = 0, s = 0;
  return o && (r = o.width, a = o.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (i = o.offsetLeft, s = o.offsetTop)), { width: r, height: a, x: i + Sr(e), y: s };
}
function xh(e) {
  var t, n = Bt(e), o = wr(e), r = (t = e.ownerDocument) == null ? void 0 : t.body, a = Kt(n.scrollWidth, n.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), i = Kt(n.scrollHeight, n.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), s = -o.scrollLeft + Sr(e), l = -o.scrollTop;
  return St(r || n).direction === "rtl" && (s += Kt(n.clientWidth, r ? r.clientWidth : 0) - a), { width: a, height: i, x: s, y: l };
}
function _r(e) {
  var t = St(e), n = t.overflow, o = t.overflowX, r = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + r + o);
}
function Vi(e) {
  return ["html", "body", "#document"].indexOf(dt(e)) >= 0 ? e.ownerDocument.body : Be(e) && _r(e) ? e : Vi(_o(e));
}
function $n(e, t) {
  var n;
  t === void 0 && (t = []);
  var o = Vi(e), r = o === ((n = e.ownerDocument) == null ? void 0 : n.body), a = nt(o), i = r ? [a].concat(a.visualViewport || [], _r(o) ? o : []) : o, s = t.concat(i);
  return r ? s : s.concat($n(_o(i)));
}
function Ko(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function kh(e) {
  var t = vn(e);
  return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t;
}
function _a(e, t) {
  return t === Ri ? Ko(Ih(e)) : fn(t) ? kh(t) : Ko(xh(Bt(e)));
}
function Mh(e) {
  var t = $n(_o(e)), n = ["absolute", "fixed"].indexOf(St(e).position) >= 0, o = n && Be(e) ? Nn(e) : e;
  return fn(o) ? t.filter(function(r) {
    return fn(r) && Fi(r, o) && dt(r) !== "body";
  }) : [];
}
function Lh(e, t, n) {
  var o = t === "clippingParents" ? Mh(e) : [].concat(t), r = [].concat(o, [n]), a = r[0], i = r.reduce(function(s, l) {
    var c = _a(e, l);
    return s.top = Kt(c.top, s.top), s.right = ro(c.right, s.right), s.bottom = ro(c.bottom, s.bottom), s.left = Kt(c.left, s.left), s;
  }, _a(e, a));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function Wi(e) {
  var t = e.reference, n = e.element, o = e.placement, r = o ? lt(o) : null, a = o ? hn(o) : null, i = t.x + t.width / 2 - n.width / 2, s = t.y + t.height / 2 - n.height / 2, l;
  switch (r) {
    case Se:
      l = { x: i, y: t.y - n.height };
      break;
    case Ne:
      l = { x: i, y: t.y + t.height };
      break;
    case ze:
      l = { x: t.x + t.width, y: s };
      break;
    case _e:
      l = { x: t.x - n.width, y: s };
      break;
    default:
      l = { x: t.x, y: t.y };
  }
  var c = r ? yr(r) : null;
  if (c != null) {
    var p = c === "y" ? "height" : "width";
    switch (a) {
      case dn:
        l[c] = l[c] - (t[p] / 2 - n[p] / 2);
        break;
      case Ln:
        l[c] = l[c] + (t[p] / 2 - n[p] / 2);
        break;
    }
  }
  return l;
}
function Rn(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, r = o === void 0 ? e.placement : o, a = n.boundary, i = a === void 0 ? oh : a, s = n.rootBoundary, l = s === void 0 ? Ri : s, c = n.elementContext, p = c === void 0 ? Tn : c, v = n.altBoundary, m = v === void 0 ? !1 : v, g = n.padding, u = g === void 0 ? 0 : g, f = zi(typeof u != "number" ? u : Di(u, Fn)), b = p === Tn ? rh : Tn, h = e.rects.popper, _ = e.elements[m ? b : p], A = Lh(fn(_) ? _ : _.contextElement || Bt(e.elements.popper), i, l), O = vn(e.elements.reference), x = Wi({ reference: O, element: h, strategy: "absolute", placement: r }), E = Ko(Object.assign({}, h, x)), w = p === Tn ? E : O, P = { top: A.top - w.top + f.top, bottom: w.bottom - A.bottom + f.bottom, left: A.left - w.left + f.left, right: w.right - A.right + f.right }, N = e.modifiersData.offset;
  if (p === Tn && N) {
    var F = N[r];
    Object.keys(P).forEach(function(V) {
      var U = [ze, Ne].indexOf(V) >= 0 ? 1 : -1, q = [Se, Ne].indexOf(V) >= 0 ? "y" : "x";
      P[V] += F[q] * U;
    });
  }
  return P;
}
function Rh(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, r = n.boundary, a = n.rootBoundary, i = n.padding, s = n.flipVariations, l = n.allowedAutoPlacements, c = l === void 0 ? So : l, p = hn(o), v = p ? s ? ba : ba.filter(function(u) {
    return hn(u) === p;
  }) : Fn, m = v.filter(function(u) {
    return c.indexOf(u) >= 0;
  });
  m.length === 0 && (m = v);
  var g = m.reduce(function(u, f) {
    return u[f] = Rn(e, { placement: f, boundary: r, rootBoundary: a, padding: i })[lt(f)], u;
  }, {});
  return Object.keys(g).sort(function(u, f) {
    return g[u] - g[f];
  });
}
function Bh(e) {
  if (lt(e) === gr)
    return [];
  var t = Gn(e);
  return [Sa(e), t, Sa(t)];
}
function Fh(e) {
  var t = e.state, n = e.options, o = e.name;
  if (!t.modifiersData[o]._skip) {
    for (var r = n.mainAxis, a = r === void 0 ? !0 : r, i = n.altAxis, s = i === void 0 ? !0 : i, l = n.fallbackPlacements, c = n.padding, p = n.boundary, v = n.rootBoundary, m = n.altBoundary, g = n.flipVariations, u = g === void 0 ? !0 : g, f = n.allowedAutoPlacements, b = t.options.placement, h = lt(b), _ = h === b, A = l || (_ || !u ? [Gn(b)] : Bh(b)), O = [b].concat(A).reduce(function(Ce, ie) {
      return Ce.concat(lt(ie) === gr ? Rh(t, { placement: ie, boundary: p, rootBoundary: v, padding: c, flipVariations: u, allowedAutoPlacements: f }) : ie);
    }, []), x = t.rects.reference, E = t.rects.popper, w = /* @__PURE__ */ new Map(), P = !0, N = O[0], F = 0; F < O.length; F++) {
      var V = O[F], U = lt(V), q = hn(V) === dn, J = [Se, Ne].indexOf(U) >= 0, M = J ? "width" : "height", W = Rn(t, { placement: V, boundary: p, rootBoundary: v, altBoundary: m, padding: c }), X = J ? q ? ze : _e : q ? Ne : Se;
      x[M] > E[M] && (X = Gn(X));
      var pe = Gn(X), se = [];
      if (a && se.push(W[U] <= 0), s && se.push(W[X] <= 0, W[pe] <= 0), se.every(function(Ce) {
        return Ce;
      })) {
        N = V, P = !1;
        break;
      }
      w.set(V, se);
    }
    if (P)
      for (var xe = u ? 3 : 1, pt = function(Ce) {
        var ie = O.find(function(ye) {
          var Ee = w.get(ye);
          if (Ee)
            return Ee.slice(0, Ce).every(function(le) {
              return le;
            });
        });
        if (ie)
          return N = ie, "break";
      }, De = xe; De > 0; De--) {
        var ot = pt(De);
        if (ot === "break")
          break;
      }
    t.placement !== N && (t.modifiersData[o]._skip = !0, t.placement = N, t.reset = !0);
  }
}
var Nh = { name: "flip", enabled: !0, phase: "main", fn: Fh, requiresIfExists: ["offset"], data: { _skip: !1 } };
function Ta(e, t, n) {
  return n === void 0 && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x };
}
function Ca(e) {
  return [Se, ze, Ne, _e].some(function(t) {
    return e[t] >= 0;
  });
}
function zh(e) {
  var t = e.state, n = e.name, o = t.rects.reference, r = t.rects.popper, a = t.modifiersData.preventOverflow, i = Rn(t, { elementContext: "reference" }), s = Rn(t, { altBoundary: !0 }), l = Ta(i, o), c = Ta(s, r, a), p = Ca(l), v = Ca(c);
  t.modifiersData[n] = { referenceClippingOffsets: l, popperEscapeOffsets: c, isReferenceHidden: p, hasPopperEscaped: v }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": p, "data-popper-escaped": v });
}
var Dh = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: zh };
function jh(e, t, n) {
  var o = lt(e), r = [_e, Se].indexOf(o) >= 0 ? -1 : 1, a = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, i = a[0], s = a[1];
  return i = i || 0, s = (s || 0) * r, [_e, ze].indexOf(o) >= 0 ? { x: s, y: i } : { x: i, y: s };
}
function Hh(e) {
  var t = e.state, n = e.options, o = e.name, r = n.offset, a = r === void 0 ? [0, 0] : r, i = So.reduce(function(p, v) {
    return p[v] = jh(v, t.rects, a), p;
  }, {}), s = i[t.placement], l = s.x, c = s.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += c), t.modifiersData[o] = i;
}
var Vh = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: Hh };
function Wh(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = Wi({ reference: t.rects.reference, element: t.rects.popper, strategy: "absolute", placement: t.placement });
}
var Ki = { name: "popperOffsets", enabled: !0, phase: "read", fn: Wh, data: {} };
function Kh(e) {
  return e === "x" ? "y" : "x";
}
function Uh(e) {
  var t = e.state, n = e.options, o = e.name, r = n.mainAxis, a = r === void 0 ? !0 : r, i = n.altAxis, s = i === void 0 ? !1 : i, l = n.boundary, c = n.rootBoundary, p = n.altBoundary, v = n.padding, m = n.tether, g = m === void 0 ? !0 : m, u = n.tetherOffset, f = u === void 0 ? 0 : u, b = Rn(t, { boundary: l, rootBoundary: c, padding: v, altBoundary: p }), h = lt(t.placement), _ = hn(t.placement), A = !_, O = yr(h), x = Kh(O), E = t.modifiersData.popperOffsets, w = t.rects.reference, P = t.rects.popper, N = typeof f == "function" ? f(Object.assign({}, t.rects, { placement: t.placement })) : f, F = typeof N == "number" ? { mainAxis: N, altAxis: N } : Object.assign({ mainAxis: 0, altAxis: 0 }, N), V = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, U = { x: 0, y: 0 };
  if (E) {
    if (a) {
      var q, J = O === "y" ? Se : _e, M = O === "y" ? Ne : ze, W = O === "y" ? "height" : "width", X = E[O], pe = X + b[J], se = X - b[M], xe = g ? -P[W] / 2 : 0, pt = _ === dn ? w[W] : P[W], De = _ === dn ? -P[W] : -w[W], ot = t.elements.arrow, Ce = g && ot ? br(ot) : { width: 0, height: 0 }, ie = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Ni(), ye = ie[J], Ee = ie[M], le = En(0, w[W], Ce[W]), vt = A ? w[W] / 2 - xe - le - ye - F.mainAxis : pt - le - ye - F.mainAxis, rt = A ? -w[W] / 2 + xe + le + Ee + F.mainAxis : De + le + Ee + F.mainAxis, at = t.elements.arrow && Nn(t.elements.arrow), ke = at ? O === "y" ? at.clientTop || 0 : at.clientLeft || 0 : 0, je = (q = V == null ? void 0 : V[O]) != null ? q : 0, Ft = X + vt - je - ke, Et = X + rt - je, He = En(g ? ro(pe, Ft) : pe, X, g ? Kt(se, Et) : se);
      E[O] = He, U[O] = He - X;
    }
    if (s) {
      var $t, Nt = O === "x" ? Se : _e, $e = O === "x" ? Ne : ze, we = E[x], Ve = x === "y" ? "height" : "width", C = we + b[Nt], Q = we - b[$e], ve = [Se, _e].indexOf(h) !== -1, We = ($t = V == null ? void 0 : V[x]) != null ? $t : 0, zt = ve ? C : we - w[Ve] - P[Ve] - We + F.altAxis, Ot = ve ? we + w[Ve] + P[Ve] - We - F.altAxis : Q, Jt = g && ve ? yh(zt, we, Ot) : En(g ? zt : C, we, g ? Ot : Q);
      E[x] = Jt, U[x] = Jt - we;
    }
    t.modifiersData[o] = U;
  }
}
var qh = { name: "preventOverflow", enabled: !0, phase: "main", fn: Uh, requiresIfExists: ["offset"] };
function Gh(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function Qh(e) {
  return e === nt(e) || !Be(e) ? wr(e) : Gh(e);
}
function Yh(e) {
  var t = e.getBoundingClientRect(), n = pn(t.width) / e.offsetWidth || 1, o = pn(t.height) / e.offsetHeight || 1;
  return n !== 1 || o !== 1;
}
function Zh(e, t, n) {
  n === void 0 && (n = !1);
  var o = Be(t), r = Be(t) && Yh(t), a = Bt(t), i = vn(e, r), s = { scrollLeft: 0, scrollTop: 0 }, l = { x: 0, y: 0 };
  return (o || !o && !n) && ((dt(t) !== "body" || _r(a)) && (s = Qh(t)), Be(t) ? (l = vn(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : a && (l.x = Sr(a))), { x: i.left + s.scrollLeft - l.x, y: i.top + s.scrollTop - l.y, width: i.width, height: i.height };
}
function Jh(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), o = [];
  e.forEach(function(a) {
    t.set(a.name, a);
  });
  function r(a) {
    n.add(a.name);
    var i = [].concat(a.requires || [], a.requiresIfExists || []);
    i.forEach(function(s) {
      if (!n.has(s)) {
        var l = t.get(s);
        l && r(l);
      }
    }), o.push(a);
  }
  return e.forEach(function(a) {
    n.has(a.name) || r(a);
  }), o;
}
function Xh(e) {
  var t = Jh(e);
  return vh.reduce(function(n, o) {
    return n.concat(t.filter(function(r) {
      return r.phase === o;
    }));
  }, []);
}
function eg(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function tg(e) {
  var t = e.reduce(function(n, o) {
    var r = n[o.name];
    return n[o.name] = r ? Object.assign({}, r, o, { options: Object.assign({}, r.options, o.options), data: Object.assign({}, r.data, o.data) }) : o, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var Ea = { placement: "bottom", modifiers: [], strategy: "absolute" };
function $a() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(o) {
    return !(o && typeof o.getBoundingClientRect == "function");
  });
}
function Tr(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, o = n === void 0 ? [] : n, r = t.defaultOptions, a = r === void 0 ? Ea : r;
  return function(i, s, l) {
    l === void 0 && (l = a);
    var c = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, Ea, a), modifiersData: {}, elements: { reference: i, popper: s }, attributes: {}, styles: {} }, p = [], v = !1, m = { state: c, setOptions: function(f) {
      var b = typeof f == "function" ? f(c.options) : f;
      u(), c.options = Object.assign({}, a, c.options, b), c.scrollParents = { reference: fn(i) ? $n(i) : i.contextElement ? $n(i.contextElement) : [], popper: $n(s) };
      var h = Xh(tg([].concat(o, c.options.modifiers)));
      return c.orderedModifiers = h.filter(function(_) {
        return _.enabled;
      }), g(), m.update();
    }, forceUpdate: function() {
      if (!v) {
        var f = c.elements, b = f.reference, h = f.popper;
        if ($a(b, h)) {
          c.rects = { reference: Zh(b, Nn(h), c.options.strategy === "fixed"), popper: br(h) }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(P) {
            return c.modifiersData[P.name] = Object.assign({}, P.data);
          });
          for (var _ = 0; _ < c.orderedModifiers.length; _++) {
            if (c.reset === !0) {
              c.reset = !1, _ = -1;
              continue;
            }
            var A = c.orderedModifiers[_], O = A.fn, x = A.options, E = x === void 0 ? {} : x, w = A.name;
            typeof O == "function" && (c = O({ state: c, options: E, name: w, instance: m }) || c);
          }
        }
      }
    }, update: eg(function() {
      return new Promise(function(f) {
        m.forceUpdate(), f(c);
      });
    }), destroy: function() {
      u(), v = !0;
    } };
    if (!$a(i, s))
      return m;
    m.setOptions(l).then(function(f) {
      !v && l.onFirstUpdate && l.onFirstUpdate(f);
    });
    function g() {
      c.orderedModifiers.forEach(function(f) {
        var b = f.name, h = f.options, _ = h === void 0 ? {} : h, A = f.effect;
        if (typeof A == "function") {
          var O = A({ state: c, name: b, instance: m, options: _ }), x = function() {
          };
          p.push(O || x);
        }
      });
    }
    function u() {
      p.forEach(function(f) {
        return f();
      }), p = [];
    }
    return m;
  };
}
Tr();
var ng = [Hi, Ki, ji, Bi];
Tr({ defaultModifiers: ng });
var og = [Hi, Ki, ji, Bi, Vh, Nh, qh, Th, Dh], rg = Tr({ defaultModifiers: og });
const ag = (e, t, n = {}) => {
  const o = {
    name: "updateState",
    enabled: !0,
    phase: "write",
    fn: ({ state: l }) => {
      const c = ig(l);
      Object.assign(i.value, c);
    },
    requires: ["computeStyles"]
  }, r = S(() => {
    const { onFirstUpdate: l, placement: c, strategy: p, modifiers: v } = d(n);
    return {
      onFirstUpdate: l,
      placement: c || "bottom",
      strategy: p || "absolute",
      modifiers: [
        ...v || [],
        o,
        { name: "applyStyles", enabled: !1 }
      ]
    };
  }), a = on(), i = I({
    styles: {
      popper: {
        position: d(r).strategy,
        left: "0",
        right: "0"
      },
      arrow: {
        position: "absolute"
      }
    },
    attributes: {}
  }), s = () => {
    a.value && (a.value.destroy(), a.value = void 0);
  };
  return R(r, (l) => {
    const c = d(a);
    c && c.setOptions(l);
  }, {
    deep: !0
  }), R([e, t], ([l, c]) => {
    s(), !(!l || !c) && (a.value = rg(l, c, d(r)));
  }), ft(() => {
    s();
  }), {
    state: S(() => {
      var l;
      return { ...((l = d(a)) == null ? void 0 : l.state) || {} };
    }),
    styles: S(() => d(i).styles),
    attributes: S(() => d(i).attributes),
    update: () => {
      var l;
      return (l = d(a)) == null ? void 0 : l.update();
    },
    forceUpdate: () => {
      var l;
      return (l = d(a)) == null ? void 0 : l.forceUpdate();
    },
    instanceRef: S(() => d(a))
  };
};
function ig(e) {
  const t = Object.keys(e.elements), n = eo(t.map((r) => [r, e.styles[r] || {}])), o = eo(t.map((r) => [r, e.attributes[r]]));
  return {
    styles: n,
    attributes: o
  };
}
function sg() {
  let e;
  const t = (o, r) => {
    n(), e = window.setTimeout(o, r);
  }, n = () => window.clearTimeout(e);
  return ho(() => n()), {
    registerTimeout: t,
    cancelTimeout: n
  };
}
let tn = [];
const Oa = (e) => {
  const t = e;
  t.key === Mn.esc && tn.forEach((n) => n(t));
}, lg = (e) => {
  Te(() => {
    tn.length === 0 && document.addEventListener("keydown", Oa), ce && tn.push(e);
  }), ft(() => {
    tn = tn.filter((t) => t !== e), tn.length === 0 && ce && document.removeEventListener("keydown", Oa);
  });
};
let Aa;
const Ui = () => {
  const e = Zt("namespace", pr), t = ki(), n = S(() => `${e.value}-popper-container-${t.prefix}`), o = S(() => `#${n.value}`);
  return {
    id: n,
    selector: o
  };
}, ug = (e) => {
  const t = document.createElement("div");
  return t.id = e, document.body.appendChild(t), t;
}, cg = () => {
  hs(() => {
    if (!ce)
      return;
    const { id: e, selector: t } = Ui();
    !Aa && !document.body.querySelector(t.value) && (Aa = ug(e.value));
  });
}, dg = fe({
  showAfter: {
    type: Number,
    default: 0
  },
  hideAfter: {
    type: Number,
    default: 200
  }
}), fg = ({
  showAfter: e,
  hideAfter: t,
  open: n,
  close: o
}) => {
  const { registerTimeout: r } = sg();
  return {
    onOpen: (s) => {
      r(() => {
        n(s);
      }, d(e));
    },
    onClose: (s) => {
      r(() => {
        o(s);
      }, d(t));
    }
  };
}, qi = Symbol("elForwardRef"), pg = (e) => {
  Xe(qi, {
    setForwardRef: (n) => {
      e.value = n;
    }
  });
}, vg = (e) => ({
  mounted(t) {
    e(t);
  },
  updated(t) {
    e(t);
  },
  unmounted() {
    e(null);
  }
}), Pa = I(0), hg = () => {
  const e = Zt("zIndex", 2e3), t = S(() => e.value + Pa.value);
  return {
    initialZIndex: e,
    currentZIndex: t,
    nextZIndex: () => (Pa.value++, t.value)
  };
};
function gg(e) {
  const t = I();
  function n() {
    if (e.value == null)
      return;
    const { selectionStart: r, selectionEnd: a, value: i } = e.value;
    if (r == null || a == null)
      return;
    const s = i.slice(0, Math.max(0, r)), l = i.slice(Math.max(0, a));
    t.value = {
      selectionStart: r,
      selectionEnd: a,
      value: i,
      beforeTxt: s,
      afterTxt: l
    };
  }
  function o() {
    if (e.value == null || t.value == null)
      return;
    const { value: r } = e.value, { beforeTxt: a, afterTxt: i, selectionStart: s } = t.value;
    if (a == null || i == null || s == null)
      return;
    let l = r.length;
    if (r.endsWith(i))
      l = r.length - i.length;
    else if (r.startsWith(a))
      l = a.length;
    else {
      const c = a[s - 1], p = r.indexOf(c, s - 1);
      p !== -1 && (l = p + 1);
    }
    e.value.setSelectionRange(l, l);
  }
  return [n, o];
}
var ae = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
};
const mg = fe({
  size: {
    type: Y([Number, String])
  },
  color: {
    type: String
  }
}), bg = j({
  name: "ElIcon",
  inheritAttrs: !1
}), yg = /* @__PURE__ */ j({
  ...bg,
  props: mg,
  setup(e) {
    const t = e, n = re("icon"), o = S(() => {
      const { size: r, color: a } = t;
      return !r && !a ? {} : {
        fontSize: no(r) ? void 0 : Vo(r),
        "--color": a
      };
    });
    return (r, a) => (T(), L("i", Lt({
      class: d(n).b(),
      style: d(o)
    }, r.$attrs), [
      Z(r.$slots, "default")
    ], 16));
  }
});
var wg = /* @__PURE__ */ ae(yg, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/icon/src/icon.vue"]]);
const it = Ct(wg);
let qe;
const Sg = `
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`, _g = [
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
function Tg(e) {
  const t = window.getComputedStyle(e), n = t.getPropertyValue("box-sizing"), o = Number.parseFloat(t.getPropertyValue("padding-bottom")) + Number.parseFloat(t.getPropertyValue("padding-top")), r = Number.parseFloat(t.getPropertyValue("border-bottom-width")) + Number.parseFloat(t.getPropertyValue("border-top-width"));
  return { contextStyle: _g.map((i) => `${i}:${t.getPropertyValue(i)}`).join(";"), paddingSize: o, borderSize: r, boxSizing: n };
}
function Ia(e, t = 1, n) {
  var o;
  qe || (qe = document.createElement("textarea"), document.body.appendChild(qe));
  const { paddingSize: r, borderSize: a, boxSizing: i, contextStyle: s } = Tg(e);
  qe.setAttribute("style", `${s};${Sg}`), qe.value = e.value || e.placeholder || "";
  let l = qe.scrollHeight;
  const c = {};
  i === "border-box" ? l = l + a : i === "content-box" && (l = l - r), qe.value = "";
  const p = qe.scrollHeight - r;
  if (Ze(t)) {
    let v = p * t;
    i === "border-box" && (v = v + r + a), l = Math.max(v, l), c.minHeight = `${v}px`;
  }
  if (Ze(n)) {
    let v = p * n;
    i === "border-box" && (v = v + r + a), l = Math.min(v, l);
  }
  return c.height = `${l}px`, (o = qe.parentNode) == null || o.removeChild(qe), qe = void 0, c;
}
const Cg = fe({
  id: {
    type: String,
    default: void 0
  },
  size: yo,
  disabled: Boolean,
  modelValue: {
    type: Y([
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
    type: Y([Boolean, Object]),
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
    type: un
  },
  prefixIcon: {
    type: un
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
    type: Y([Object, Array, String]),
    default: () => Vv({})
  }
}), Eg = {
  [be]: (e) => wt(e),
  input: (e) => wt(e),
  change: (e) => wt(e),
  focus: (e) => e instanceof FocusEvent,
  blur: (e) => e instanceof FocusEvent,
  clear: () => !0,
  mouseleave: (e) => e instanceof MouseEvent,
  mouseenter: (e) => e instanceof MouseEvent,
  keydown: (e) => e instanceof Event,
  compositionstart: (e) => e instanceof CompositionEvent,
  compositionupdate: (e) => e instanceof CompositionEvent,
  compositionend: (e) => e instanceof CompositionEvent
}, $g = ["role"], Og = ["id", "type", "disabled", "formatter", "parser", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder", "form"], Ag = ["id", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder", "form"], Pg = j({
  name: "ElInput",
  inheritAttrs: !1
}), Ig = /* @__PURE__ */ j({
  ...Pg,
  props: Cg,
  emits: Eg,
  setup(e, { expose: t, emit: n }) {
    const o = e, r = gs(), a = ao(), i = S(() => {
      const C = {};
      return o.containerRole === "combobox" && (C["aria-haspopup"] = r["aria-haspopup"], C["aria-owns"] = r["aria-owns"], C["aria-expanded"] = r["aria-expanded"]), C;
    }), s = S(() => [
      o.type === "textarea" ? b.b() : f.b(),
      f.m(g.value),
      f.is("disabled", u.value),
      f.is("exceed", pt.value),
      {
        [f.b("group")]: a.prepend || a.append,
        [f.bm("group", "append")]: a.append,
        [f.bm("group", "prepend")]: a.prepend,
        [f.m("prefix")]: a.prefix || o.prefixIcon,
        [f.m("suffix")]: a.suffix || o.suffixIcon || o.clearable || o.showPassword,
        [f.bm("suffix", "password-clear")]: X.value && pe.value
      },
      r.class
    ]), l = S(() => [
      f.e("wrapper"),
      f.is("focus", A.value)
    ]), c = Uv({
      excludeKeys: S(() => Object.keys(i.value))
    }), { form: p, formItem: v } = wn(), { inputId: m } = vr(o, {
      formItemContext: v
    }), g = cn(), u = wo(), f = re("input"), b = re("textarea"), h = on(), _ = on(), A = I(!1), O = I(!1), x = I(!1), E = I(!1), w = I(), P = on(o.inputStyle), N = S(() => h.value || _.value), F = S(() => {
      var C;
      return (C = p == null ? void 0 : p.statusIcon) != null ? C : !1;
    }), V = S(() => (v == null ? void 0 : v.validateState) || ""), U = S(() => V.value && zv[V.value]), q = S(() => E.value ? Fv : gv), J = S(() => [
      r.style,
      o.inputStyle
    ]), M = S(() => [
      o.inputStyle,
      P.value,
      { resize: o.resize }
    ]), W = S(() => vo(o.modelValue) ? "" : String(o.modelValue)), X = S(() => o.clearable && !u.value && !o.readonly && !!W.value && (A.value || O.value)), pe = S(() => o.showPassword && !u.value && !o.readonly && !!W.value && (!!W.value || A.value)), se = S(() => o.showWordLimit && !!c.value.maxlength && (o.type === "text" || o.type === "textarea") && !u.value && !o.readonly && !o.showPassword), xe = S(() => Array.from(W.value).length), pt = S(() => !!se.value && xe.value > Number(c.value.maxlength)), De = S(() => !!a.suffix || !!o.suffixIcon || X.value || o.showPassword || se.value || !!V.value && F.value), [ot, Ce] = gg(h);
    mo(_, (C) => {
      if (!se.value || o.resize !== "both")
        return;
      const Q = C[0], { width: ve } = Q.contentRect;
      w.value = {
        right: `calc(100% - ${ve + 15 + 6}px)`
      };
    });
    const ie = () => {
      const { type: C, autosize: Q } = o;
      if (!(!ce || C !== "textarea"))
        if (Q) {
          const ve = et(Q) ? Q.minRows : void 0, We = et(Q) ? Q.maxRows : void 0;
          P.value = {
            ...Ia(_.value, ve, We)
          };
        } else
          P.value = {
            minHeight: Ia(_.value).minHeight
          };
    }, ye = () => {
      const C = N.value;
      !C || C.value === W.value || (C.value = W.value);
    }, Ee = async (C) => {
      ot();
      let { value: Q } = C.target;
      if (o.formatter && (Q = o.parser ? o.parser(Q) : Q, Q = o.formatter(Q)), !x.value) {
        if (Q === W.value) {
          ye();
          return;
        }
        n(be, Q), n("input", Q), await te(), ye(), Ce();
      }
    }, le = (C) => {
      n("change", C.target.value);
    }, vt = (C) => {
      n("compositionstart", C), x.value = !0;
    }, rt = (C) => {
      var Q;
      n("compositionupdate", C);
      const ve = (Q = C.target) == null ? void 0 : Q.value, We = ve[ve.length - 1] || "";
      x.value = !$i(We);
    }, at = (C) => {
      n("compositionend", C), x.value && (x.value = !1, Ee(C));
    }, ke = () => {
      E.value = !E.value, je();
    }, je = async () => {
      var C;
      await te(), (C = N.value) == null || C.focus();
    }, Ft = () => {
      var C;
      return (C = N.value) == null ? void 0 : C.blur();
    }, Et = (C) => {
      A.value = !0, n("focus", C);
    }, He = (C) => {
      var Q;
      A.value = !1, n("blur", C), o.validateEvent && ((Q = v == null ? void 0 : v.validate) == null || Q.call(v, "blur").catch((ve) => void 0));
    }, $t = (C) => {
      O.value = !1, n("mouseleave", C);
    }, Nt = (C) => {
      O.value = !0, n("mouseenter", C);
    }, $e = (C) => {
      n("keydown", C);
    }, we = () => {
      var C;
      (C = N.value) == null || C.select();
    }, Ve = () => {
      n(be, ""), n("change", ""), n("clear"), n("input", "");
    };
    return R(() => o.modelValue, () => {
      var C;
      te(() => ie()), o.validateEvent && ((C = v == null ? void 0 : v.validate) == null || C.call(v, "change").catch((Q) => void 0));
    }), R(W, () => ye()), R(() => o.type, async () => {
      await te(), ye(), ie();
    }), Te(() => {
      !o.formatter && o.parser, ye(), te(ie);
    }), t({
      input: h,
      textarea: _,
      ref: N,
      textareaStyle: M,
      autosize: st(o, "autosize"),
      focus: je,
      blur: Ft,
      select: we,
      clear: Ve,
      resizeTextarea: ie
    }), (C, Q) => Ae((T(), L("div", Lt(d(i), {
      class: d(s),
      style: d(J),
      role: C.containerRole,
      onMouseenter: Nt,
      onMouseleave: $t
    }), [
      z(" input "),
      C.type !== "textarea" ? (T(), L(Je, { key: 0 }, [
        z(" prepend slot "),
        C.$slots.prepend ? (T(), L("div", {
          key: 0,
          class: k(d(f).be("group", "prepend"))
        }, [
          Z(C.$slots, "prepend")
        ], 2)) : z("v-if", !0),
        D("div", {
          class: k(d(l))
        }, [
          z(" prefix slot "),
          C.$slots.prefix || C.prefixIcon ? (T(), L("span", {
            key: 0,
            class: k(d(f).e("prefix"))
          }, [
            D("span", {
              class: k(d(f).e("prefix-inner")),
              onClick: je
            }, [
              Z(C.$slots, "prefix"),
              C.prefixIcon ? (T(), H(d(it), {
                key: 0,
                class: k(d(f).e("icon"))
              }, {
                default: K(() => [
                  (T(), H(Ye(C.prefixIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : z("v-if", !0)
            ], 2)
          ], 2)) : z("v-if", !0),
          D("input", Lt({
            id: d(m),
            ref_key: "input",
            ref: h,
            class: d(f).e("inner")
          }, d(c), {
            type: C.showPassword ? E.value ? "text" : "password" : C.type,
            disabled: d(u),
            formatter: C.formatter,
            parser: C.parser,
            readonly: C.readonly,
            autocomplete: C.autocomplete,
            tabindex: C.tabindex,
            "aria-label": C.label,
            placeholder: C.placeholder,
            style: C.inputStyle,
            form: o.form,
            onCompositionstart: vt,
            onCompositionupdate: rt,
            onCompositionend: at,
            onInput: Ee,
            onFocus: Et,
            onBlur: He,
            onChange: le,
            onKeydown: $e
          }), null, 16, Og),
          z(" suffix slot "),
          d(De) ? (T(), L("span", {
            key: 1,
            class: k(d(f).e("suffix"))
          }, [
            D("span", {
              class: k(d(f).e("suffix-inner")),
              onClick: je
            }, [
              !d(X) || !d(pe) || !d(se) ? (T(), L(Je, { key: 0 }, [
                Z(C.$slots, "suffix"),
                C.suffixIcon ? (T(), H(d(it), {
                  key: 0,
                  class: k(d(f).e("icon"))
                }, {
                  default: K(() => [
                    (T(), H(Ye(C.suffixIcon)))
                  ]),
                  _: 1
                }, 8, ["class"])) : z("v-if", !0)
              ], 64)) : z("v-if", !0),
              d(X) ? (T(), H(d(it), {
                key: 1,
                class: k([d(f).e("icon"), d(f).e("clear")]),
                onMousedown: Qe(d(xn), ["prevent"]),
                onClick: Ve
              }, {
                default: K(() => [
                  ge(d(lr))
                ]),
                _: 1
              }, 8, ["class", "onMousedown"])) : z("v-if", !0),
              d(pe) ? (T(), H(d(it), {
                key: 2,
                class: k([d(f).e("icon"), d(f).e("password")]),
                onClick: ke
              }, {
                default: K(() => [
                  (T(), H(Ye(d(q))))
                ]),
                _: 1
              }, 8, ["class"])) : z("v-if", !0),
              d(se) ? (T(), L("span", {
                key: 3,
                class: k(d(f).e("count"))
              }, [
                D("span", {
                  class: k(d(f).e("count-inner"))
                }, he(d(xe)) + " / " + he(d(c).maxlength), 3)
              ], 2)) : z("v-if", !0),
              d(V) && d(U) && d(F) ? (T(), H(d(it), {
                key: 4,
                class: k([
                  d(f).e("icon"),
                  d(f).e("validateIcon"),
                  d(f).is("loading", d(V) === "validating")
                ])
              }, {
                default: K(() => [
                  (T(), H(Ye(d(U))))
                ]),
                _: 1
              }, 8, ["class"])) : z("v-if", !0)
            ], 2)
          ], 2)) : z("v-if", !0)
        ], 2),
        z(" append slot "),
        C.$slots.append ? (T(), L("div", {
          key: 1,
          class: k(d(f).be("group", "append"))
        }, [
          Z(C.$slots, "append")
        ], 2)) : z("v-if", !0)
      ], 64)) : (T(), L(Je, { key: 1 }, [
        z(" textarea "),
        D("textarea", Lt({
          id: d(m),
          ref_key: "textarea",
          ref: _,
          class: d(b).e("inner")
        }, d(c), {
          tabindex: C.tabindex,
          disabled: d(u),
          readonly: C.readonly,
          autocomplete: C.autocomplete,
          style: d(M),
          "aria-label": C.label,
          placeholder: C.placeholder,
          form: o.form,
          onCompositionstart: vt,
          onCompositionupdate: rt,
          onCompositionend: at,
          onInput: Ee,
          onFocus: Et,
          onBlur: He,
          onChange: le,
          onKeydown: $e
        }), null, 16, Ag),
        d(se) ? (T(), L("span", {
          key: 0,
          style: me(w.value),
          class: k(d(f).e("count"))
        }, he(d(xe)) + " / " + he(d(c).maxlength), 7)) : z("v-if", !0)
      ], 64))
    ], 16, $g)), [
      [gn, C.type !== "hidden"]
    ]);
  }
});
var xg = /* @__PURE__ */ ae(Ig, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/input/src/input.vue"]]);
const kg = Ct(xg), nn = 4, Mg = {
  vertical: {
    offset: "offsetHeight",
    scroll: "scrollTop",
    scrollSize: "scrollHeight",
    size: "height",
    key: "vertical",
    axis: "Y",
    client: "clientY",
    direction: "top"
  },
  horizontal: {
    offset: "offsetWidth",
    scroll: "scrollLeft",
    scrollSize: "scrollWidth",
    size: "width",
    key: "horizontal",
    axis: "X",
    client: "clientX",
    direction: "left"
  }
}, Lg = ({
  move: e,
  size: t,
  bar: n
}) => ({
  [n.size]: t,
  transform: `translate${n.axis}(${e}%)`
}), Rg = fe({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: !0
  },
  always: Boolean
}), Bg = "Thumb", Fg = /* @__PURE__ */ j({
  __name: "thumb",
  props: Rg,
  setup(e) {
    const t = e, n = oe(Ai), o = re("scrollbar");
    n || bp(Bg, "can not inject scrollbar context");
    const r = I(), a = I(), i = I({}), s = I(!1);
    let l = !1, c = !1, p = ce ? document.onselectstart : null;
    const v = S(() => Mg[t.vertical ? "vertical" : "horizontal"]), m = S(() => Lg({
      size: t.size,
      move: t.move,
      bar: v.value
    })), g = S(() => r.value[v.value.offset] ** 2 / n.wrapElement[v.value.scrollSize] / t.ratio / a.value[v.value.offset]), u = (E) => {
      var w;
      if (E.stopPropagation(), E.ctrlKey || [1, 2].includes(E.button))
        return;
      (w = window.getSelection()) == null || w.removeAllRanges(), b(E);
      const P = E.currentTarget;
      P && (i.value[v.value.axis] = P[v.value.offset] - (E[v.value.client] - P.getBoundingClientRect()[v.value.direction]));
    }, f = (E) => {
      if (!a.value || !r.value || !n.wrapElement)
        return;
      const w = Math.abs(E.target.getBoundingClientRect()[v.value.direction] - E[v.value.client]), P = a.value[v.value.offset] / 2, N = (w - P) * 100 * g.value / r.value[v.value.offset];
      n.wrapElement[v.value.scroll] = N * n.wrapElement[v.value.scrollSize] / 100;
    }, b = (E) => {
      E.stopImmediatePropagation(), l = !0, document.addEventListener("mousemove", h), document.addEventListener("mouseup", _), p = document.onselectstart, document.onselectstart = () => !1;
    }, h = (E) => {
      if (!r.value || !a.value || l === !1)
        return;
      const w = i.value[v.value.axis];
      if (!w)
        return;
      const P = (r.value.getBoundingClientRect()[v.value.direction] - E[v.value.client]) * -1, N = a.value[v.value.offset] - w, F = (P - N) * 100 * g.value / r.value[v.value.offset];
      n.wrapElement[v.value.scroll] = F * n.wrapElement[v.value.scrollSize] / 100;
    }, _ = () => {
      l = !1, i.value[v.value.axis] = 0, document.removeEventListener("mousemove", h), document.removeEventListener("mouseup", _), x(), c && (s.value = !1);
    }, A = () => {
      c = !1, s.value = !!t.size;
    }, O = () => {
      c = !0, s.value = l;
    };
    ft(() => {
      x(), document.removeEventListener("mouseup", _);
    });
    const x = () => {
      document.onselectstart !== p && (document.onselectstart = p);
    };
    return rn(st(n, "scrollbarElement"), "mousemove", A), rn(st(n, "scrollbarElement"), "mouseleave", O), (E, w) => (T(), H(io, {
      name: d(o).b("fade"),
      persisted: ""
    }, {
      default: K(() => [
        Ae(D("div", {
          ref_key: "instance",
          ref: r,
          class: k([d(o).e("bar"), d(o).is(d(v).key)]),
          onMousedown: f
        }, [
          D("div", {
            ref_key: "thumb",
            ref: a,
            class: k(d(o).e("thumb")),
            style: me(d(m)),
            onMousedown: u
          }, null, 38)
        ], 34), [
          [gn, E.always || s.value]
        ])
      ]),
      _: 1
    }, 8, ["name"]));
  }
});
var xa = /* @__PURE__ */ ae(Fg, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/thumb.vue"]]);
const Ng = fe({
  always: {
    type: Boolean,
    default: !0
  },
  width: String,
  height: String,
  ratioX: {
    type: Number,
    default: 1
  },
  ratioY: {
    type: Number,
    default: 1
  }
}), zg = /* @__PURE__ */ j({
  __name: "bar",
  props: Ng,
  setup(e, { expose: t }) {
    const n = e, o = I(0), r = I(0);
    return t({
      handleScroll: (i) => {
        if (i) {
          const s = i.offsetHeight - nn, l = i.offsetWidth - nn;
          r.value = i.scrollTop * 100 / s * n.ratioY, o.value = i.scrollLeft * 100 / l * n.ratioX;
        }
      }
    }), (i, s) => (T(), L(Je, null, [
      ge(xa, {
        move: o.value,
        ratio: i.ratioX,
        size: i.width,
        always: i.always
      }, null, 8, ["move", "ratio", "size", "always"]),
      ge(xa, {
        move: r.value,
        ratio: i.ratioY,
        size: i.height,
        vertical: "",
        always: i.always
      }, null, 8, ["move", "ratio", "size", "always"])
    ], 64));
  }
});
var Dg = /* @__PURE__ */ ae(zg, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/bar.vue"]]);
const jg = fe({
  height: {
    type: [String, Number],
    default: ""
  },
  maxHeight: {
    type: [String, Number],
    default: ""
  },
  native: {
    type: Boolean,
    default: !1
  },
  wrapStyle: {
    type: Y([String, Object, Array]),
    default: ""
  },
  wrapClass: {
    type: [String, Array],
    default: ""
  },
  viewClass: {
    type: [String, Array],
    default: ""
  },
  viewStyle: {
    type: [String, Array, Object],
    default: ""
  },
  noresize: Boolean,
  tag: {
    type: String,
    default: "div"
  },
  always: Boolean,
  minSize: {
    type: Number,
    default: 20
  }
}), Hg = {
  scroll: ({
    scrollTop: e,
    scrollLeft: t
  }) => [e, t].every(Ze)
}, Vg = "ElScrollbar", Wg = j({
  name: Vg
}), Kg = /* @__PURE__ */ j({
  ...Wg,
  props: jg,
  emits: Hg,
  setup(e, { expose: t, emit: n }) {
    const o = e, r = re("scrollbar");
    let a, i;
    const s = I(), l = I(), c = I(), p = I("0"), v = I("0"), m = I(), g = I(1), u = I(1), f = S(() => {
      const w = {};
      return o.height && (w.height = Vo(o.height)), o.maxHeight && (w.maxHeight = Vo(o.maxHeight)), [o.wrapStyle, w];
    }), b = S(() => [
      o.wrapClass,
      r.e("wrap"),
      { [r.em("wrap", "hidden-default")]: !o.native }
    ]), h = S(() => [r.e("view"), o.viewClass]), _ = () => {
      var w;
      l.value && ((w = m.value) == null || w.handleScroll(l.value), n("scroll", {
        scrollTop: l.value.scrollTop,
        scrollLeft: l.value.scrollLeft
      }));
    };
    function A(w, P) {
      et(w) ? l.value.scrollTo(w) : Ze(w) && Ze(P) && l.value.scrollTo(w, P);
    }
    const O = (w) => {
      Ze(w) && (l.value.scrollTop = w);
    }, x = (w) => {
      Ze(w) && (l.value.scrollLeft = w);
    }, E = () => {
      if (!l.value)
        return;
      const w = l.value.offsetHeight - nn, P = l.value.offsetWidth - nn, N = w ** 2 / l.value.scrollHeight, F = P ** 2 / l.value.scrollWidth, V = Math.max(N, o.minSize), U = Math.max(F, o.minSize);
      g.value = N / (w - N) / (V / (w - V)), u.value = F / (P - F) / (U / (P - U)), v.value = V + nn < w ? `${V}px` : "", p.value = U + nn < P ? `${U}px` : "";
    };
    return R(() => o.noresize, (w) => {
      w ? (a == null || a(), i == null || i()) : ({ stop: a } = mo(c, E), i = rn("resize", E));
    }, { immediate: !0 }), R(() => [o.maxHeight, o.height], () => {
      o.native || te(() => {
        var w;
        E(), l.value && ((w = m.value) == null || w.handleScroll(l.value));
      });
    }), Xe(Ai, mn({
      scrollbarElement: s,
      wrapElement: l
    })), Te(() => {
      o.native || te(() => {
        E();
      });
    }), ms(() => E()), t({
      wrapRef: l,
      update: E,
      scrollTo: A,
      setScrollTop: O,
      setScrollLeft: x,
      handleScroll: _
    }), (w, P) => (T(), L("div", {
      ref_key: "scrollbarRef",
      ref: s,
      class: k(d(r).b())
    }, [
      D("div", {
        ref_key: "wrapRef",
        ref: l,
        class: k(d(b)),
        style: me(d(f)),
        onScroll: _
      }, [
        (T(), H(Ye(w.tag), {
          ref_key: "resizeRef",
          ref: c,
          class: k(d(h)),
          style: me(w.viewStyle)
        }, {
          default: K(() => [
            Z(w.$slots, "default")
          ]),
          _: 3
        }, 8, ["class", "style"]))
      ], 38),
      w.native ? z("v-if", !0) : (T(), H(Dg, {
        key: 0,
        ref_key: "barRef",
        ref: m,
        height: v.value,
        width: p.value,
        always: w.always,
        "ratio-x": u.value,
        "ratio-y": g.value
      }, null, 8, ["height", "width", "always", "ratio-x", "ratio-y"]))
    ], 2));
  }
});
var Ug = /* @__PURE__ */ ae(Kg, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/scrollbar.vue"]]);
const qg = Ct(Ug), Gg = [
  "dialog",
  "grid",
  "group",
  "listbox",
  "menu",
  "navigation",
  "tooltip",
  "tree"
], Gi = fe({
  role: {
    type: String,
    values: Gg,
    default: "tooltip"
  }
}), Qg = j({
  name: "ElPopper",
  inheritAttrs: !1
}), Yg = /* @__PURE__ */ j({
  ...Qg,
  props: Gi,
  setup(e, { expose: t }) {
    const n = e, o = I(), r = I(), a = I(), i = I(), s = S(() => n.role), l = {
      triggerRef: o,
      popperInstanceRef: r,
      contentRef: a,
      referenceRef: i,
      role: s
    };
    return t(l), Xe(dr, l), (c, p) => Z(c.$slots, "default");
  }
});
var Zg = /* @__PURE__ */ ae(Yg, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/popper.vue"]]);
const Qi = fe({
  arrowOffset: {
    type: Number,
    default: 5
  }
}), Jg = j({
  name: "ElPopperArrow",
  inheritAttrs: !1
}), Xg = /* @__PURE__ */ j({
  ...Jg,
  props: Qi,
  setup(e, { expose: t }) {
    const n = e, o = re("popper"), { arrowOffset: r, arrowRef: a, arrowStyle: i } = oe(Pi, void 0);
    return R(() => n.arrowOffset, (s) => {
      r.value = s;
    }), ft(() => {
      a.value = void 0;
    }), t({
      arrowRef: a
    }), (s, l) => (T(), L("span", {
      ref_key: "arrowRef",
      ref: a,
      class: k(d(o).e("arrow")),
      style: me(d(i)),
      "data-popper-arrow": ""
    }, null, 6));
  }
});
var em = /* @__PURE__ */ ae(Xg, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/arrow.vue"]]);
const tm = "ElOnlyChild", nm = j({
  name: tm,
  setup(e, {
    slots: t,
    attrs: n
  }) {
    var o;
    const r = oe(qi), a = vg((o = r == null ? void 0 : r.setForwardRef) != null ? o : xn);
    return () => {
      var i;
      const s = (i = t.default) == null ? void 0 : i.call(t, n);
      if (!s || s.length > 1)
        return null;
      const l = Yi(s);
      return l ? Ae(bs(l, n), [[a]]) : null;
    };
  }
});
function Yi(e) {
  if (!e)
    return null;
  const t = e;
  for (const n of t) {
    if (et(n))
      switch (n.type) {
        case ys:
          continue;
        case Qa:
        case "svg":
          return ka(n);
        case Je:
          return Yi(n.children);
        default:
          return n;
      }
    return ka(n);
  }
  return null;
}
function ka(e) {
  const t = re("only-child");
  return ge("span", {
    class: t.e("content")
  }, [e]);
}
const Zi = fe({
  virtualRef: {
    type: Y(Object)
  },
  virtualTriggering: Boolean,
  onMouseenter: {
    type: Y(Function)
  },
  onMouseleave: {
    type: Y(Function)
  },
  onClick: {
    type: Y(Function)
  },
  onKeydown: {
    type: Y(Function)
  },
  onFocus: {
    type: Y(Function)
  },
  onBlur: {
    type: Y(Function)
  },
  onContextmenu: {
    type: Y(Function)
  },
  id: String,
  open: Boolean
}), om = j({
  name: "ElPopperTrigger",
  inheritAttrs: !1
}), rm = /* @__PURE__ */ j({
  ...om,
  props: Zi,
  setup(e, { expose: t }) {
    const n = e, { role: o, triggerRef: r } = oe(dr, void 0);
    pg(r);
    const a = S(() => s.value ? n.id : void 0), i = S(() => {
      if (o && o.value === "tooltip")
        return n.open && n.id ? n.id : void 0;
    }), s = S(() => {
      if (o && o.value !== "tooltip")
        return o.value;
    }), l = S(() => s.value ? `${n.open}` : void 0);
    let c;
    return Te(() => {
      R(() => n.virtualRef, (p) => {
        p && (r.value = bt(p));
      }, {
        immediate: !0
      }), R(r, (p, v) => {
        c == null || c(), c = void 0, kn(p) && ([
          "onMouseenter",
          "onMouseleave",
          "onClick",
          "onKeydown",
          "onFocus",
          "onBlur",
          "onContextmenu"
        ].forEach((m) => {
          var g;
          const u = n[m];
          u && (p.addEventListener(m.slice(2).toLowerCase(), u), (g = v == null ? void 0 : v.removeEventListener) == null || g.call(v, m.slice(2).toLowerCase(), u));
        }), c = R([a, i, s, l], (m) => {
          [
            "aria-controls",
            "aria-describedby",
            "aria-haspopup",
            "aria-expanded"
          ].forEach((g, u) => {
            vo(m[u]) ? p.removeAttribute(g) : p.setAttribute(g, m[u]);
          });
        }, { immediate: !0 })), kn(v) && [
          "aria-controls",
          "aria-describedby",
          "aria-haspopup",
          "aria-expanded"
        ].forEach((m) => v.removeAttribute(m));
      }, {
        immediate: !0
      });
    }), ft(() => {
      c == null || c(), c = void 0;
    }), t({
      triggerRef: r
    }), (p, v) => p.virtualTriggering ? z("v-if", !0) : (T(), H(d(nm), Lt({ key: 0 }, p.$attrs, {
      "aria-controls": d(a),
      "aria-describedby": d(i),
      "aria-expanded": d(l),
      "aria-haspopup": d(s)
    }), {
      default: K(() => [
        Z(p.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"]));
  }
});
var am = /* @__PURE__ */ ae(rm, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/trigger.vue"]]);
const xo = "focus-trap.focus-after-trapped", ko = "focus-trap.focus-after-released", im = "focus-trap.focusout-prevented", Ma = {
  cancelable: !0,
  bubbles: !1
}, sm = {
  cancelable: !0,
  bubbles: !1
}, La = "focusAfterTrapped", Ra = "focusAfterReleased", lm = Symbol("elFocusTrap"), Cr = I(), To = I(0), Er = I(0);
let Vn = 0;
const Ji = (e) => {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const r = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || r ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 || o === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}, Ba = (e, t) => {
  for (const n of e)
    if (!um(n, t))
      return n;
}, um = (e, t) => {
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
}, cm = (e) => {
  const t = Ji(e), n = Ba(t, e), o = Ba(t.reverse(), e);
  return [n, o];
}, dm = (e) => e instanceof HTMLInputElement && "select" in e, xt = (e, t) => {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), Er.value = window.performance.now(), e !== n && dm(e) && t && e.select();
  }
};
function Fa(e, t) {
  const n = [...e], o = e.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
const fm = () => {
  let e = [];
  return {
    push: (o) => {
      const r = e[0];
      r && o !== r && r.pause(), e = Fa(e, o), e.unshift(o);
    },
    remove: (o) => {
      var r, a;
      e = Fa(e, o), (a = (r = e[0]) == null ? void 0 : r.resume) == null || a.call(r);
    }
  };
}, pm = (e, t = !1) => {
  const n = document.activeElement;
  for (const o of e)
    if (xt(o, t), document.activeElement !== n)
      return;
}, Na = fm(), vm = () => To.value > Er.value, Wn = () => {
  Cr.value = "pointer", To.value = window.performance.now();
}, za = () => {
  Cr.value = "keyboard", To.value = window.performance.now();
}, hm = () => (Te(() => {
  Vn === 0 && (document.addEventListener("mousedown", Wn), document.addEventListener("touchstart", Wn), document.addEventListener("keydown", za)), Vn++;
}), ft(() => {
  Vn--, Vn <= 0 && (document.removeEventListener("mousedown", Wn), document.removeEventListener("touchstart", Wn), document.removeEventListener("keydown", za));
}), {
  focusReason: Cr,
  lastUserFocusTimestamp: To,
  lastAutomatedFocusTimestamp: Er
}), Kn = (e) => new CustomEvent(im, {
  ...sm,
  detail: e
}), gm = j({
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
    La,
    Ra,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(e, { emit: t }) {
    const n = I();
    let o, r;
    const { focusReason: a } = hm();
    lg((u) => {
      e.trapped && !i.paused && t("release-requested", u);
    });
    const i = {
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    }, s = (u) => {
      if (!e.loop && !e.trapped || i.paused)
        return;
      const { key: f, altKey: b, ctrlKey: h, metaKey: _, currentTarget: A, shiftKey: O } = u, { loop: x } = e, E = f === Mn.tab && !b && !h && !_, w = document.activeElement;
      if (E && w) {
        const P = A, [N, F] = cm(P);
        if (N && F) {
          if (!O && w === F) {
            const U = Kn({
              focusReason: a.value
            });
            t("focusout-prevented", U), U.defaultPrevented || (u.preventDefault(), x && xt(N, !0));
          } else if (O && [N, P].includes(w)) {
            const U = Kn({
              focusReason: a.value
            });
            t("focusout-prevented", U), U.defaultPrevented || (u.preventDefault(), x && xt(F, !0));
          }
        } else if (w === P) {
          const U = Kn({
            focusReason: a.value
          });
          t("focusout-prevented", U), U.defaultPrevented || u.preventDefault();
        }
      }
    };
    Xe(lm, {
      focusTrapRef: n,
      onKeydown: s
    }), R(() => e.focusTrapEl, (u) => {
      u && (n.value = u);
    }, { immediate: !0 }), R([n], ([u], [f]) => {
      u && (u.addEventListener("keydown", s), u.addEventListener("focusin", p), u.addEventListener("focusout", v)), f && (f.removeEventListener("keydown", s), f.removeEventListener("focusin", p), f.removeEventListener("focusout", v));
    });
    const l = (u) => {
      t(La, u);
    }, c = (u) => t(Ra, u), p = (u) => {
      const f = d(n);
      if (!f)
        return;
      const b = u.target, h = u.relatedTarget, _ = b && f.contains(b);
      e.trapped || h && f.contains(h) || (o = h), _ && t("focusin", u), !i.paused && e.trapped && (_ ? r = b : xt(r, !0));
    }, v = (u) => {
      const f = d(n);
      if (!(i.paused || !f))
        if (e.trapped) {
          const b = u.relatedTarget;
          !vo(b) && !f.contains(b) && setTimeout(() => {
            if (!i.paused && e.trapped) {
              const h = Kn({
                focusReason: a.value
              });
              t("focusout-prevented", h), h.defaultPrevented || xt(r, !0);
            }
          }, 0);
        } else {
          const b = u.target;
          b && f.contains(b) || t("focusout", u);
        }
    };
    async function m() {
      await te();
      const u = d(n);
      if (u) {
        Na.push(i);
        const f = u.contains(document.activeElement) ? o : document.activeElement;
        if (o = f, !u.contains(f)) {
          const h = new Event(xo, Ma);
          u.addEventListener(xo, l), u.dispatchEvent(h), h.defaultPrevented || te(() => {
            let _ = e.focusStartEl;
            wt(_) || (xt(_), document.activeElement !== _ && (_ = "first")), _ === "first" && pm(Ji(u), !0), (document.activeElement === f || _ === "container") && xt(u);
          });
        }
      }
    }
    function g() {
      const u = d(n);
      if (u) {
        u.removeEventListener(xo, l);
        const f = new CustomEvent(ko, {
          ...Ma,
          detail: {
            focusReason: a.value
          }
        });
        u.addEventListener(ko, c), u.dispatchEvent(f), !f.defaultPrevented && (a.value == "keyboard" || !vm()) && xt(o ?? document.body), u.removeEventListener(ko, l), Na.remove(i);
      }
    }
    return Te(() => {
      e.trapped && m(), R(() => e.trapped, (u) => {
        u ? m() : g();
      });
    }), ft(() => {
      e.trapped && g();
    }), {
      onKeydown: s
    };
  }
});
function mm(e, t, n, o, r, a) {
  return Z(e.$slots, "default", { handleKeydown: e.onKeydown });
}
var bm = /* @__PURE__ */ ae(gm, [["render", mm], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/focus-trap/src/focus-trap.vue"]]);
const ym = ["fixed", "absolute"], wm = fe({
  boundariesPadding: {
    type: Number,
    default: 0
  },
  fallbackPlacements: {
    type: Y(Array),
    default: void 0
  },
  gpuAcceleration: {
    type: Boolean,
    default: !0
  },
  offset: {
    type: Number,
    default: 12
  },
  placement: {
    type: String,
    values: So,
    default: "bottom"
  },
  popperOptions: {
    type: Y(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: ym,
    default: "absolute"
  }
}), Xi = fe({
  ...wm,
  id: String,
  style: {
    type: Y([String, Array, Object])
  },
  className: {
    type: Y([String, Array, Object])
  },
  effect: {
    type: String,
    default: "dark"
  },
  visible: Boolean,
  enterable: {
    type: Boolean,
    default: !0
  },
  pure: Boolean,
  focusOnShow: {
    type: Boolean,
    default: !1
  },
  trapping: {
    type: Boolean,
    default: !1
  },
  popperClass: {
    type: Y([String, Array, Object])
  },
  popperStyle: {
    type: Y([String, Array, Object])
  },
  referenceEl: {
    type: Y(Object)
  },
  triggerTargetEl: {
    type: Y(Object)
  },
  stopPopperMouseEvent: {
    type: Boolean,
    default: !0
  },
  ariaLabel: {
    type: String,
    default: void 0
  },
  virtualTriggering: Boolean,
  zIndex: Number
}), Sm = {
  mouseenter: (e) => e instanceof MouseEvent,
  mouseleave: (e) => e instanceof MouseEvent,
  focus: () => !0,
  blur: () => !0,
  close: () => !0
}, _m = (e, t = []) => {
  const { placement: n, strategy: o, popperOptions: r } = e, a = {
    placement: n,
    strategy: o,
    ...r,
    modifiers: [...Cm(e), ...t]
  };
  return Em(a, r == null ? void 0 : r.modifiers), a;
}, Tm = (e) => {
  if (ce)
    return bt(e);
};
function Cm(e) {
  const { offset: t, gpuAcceleration: n, fallbackPlacements: o } = e;
  return [
    {
      name: "offset",
      options: {
        offset: [0, t ?? 12]
      }
    },
    {
      name: "preventOverflow",
      options: {
        padding: {
          top: 2,
          bottom: 2,
          left: 5,
          right: 5
        }
      }
    },
    {
      name: "flip",
      options: {
        padding: 5,
        fallbackPlacements: o
      }
    },
    {
      name: "computeStyles",
      options: {
        gpuAcceleration: n
      }
    }
  ];
}
function Em(e, t) {
  t && (e.modifiers = [...e.modifiers, ...t ?? []]);
}
const $m = 0, Om = (e) => {
  const { popperInstanceRef: t, contentRef: n, triggerRef: o, role: r } = oe(dr, void 0), a = I(), i = I(), s = S(() => ({
    name: "eventListeners",
    enabled: !!e.visible
  })), l = S(() => {
    var h;
    const _ = d(a), A = (h = d(i)) != null ? h : $m;
    return {
      name: "arrow",
      enabled: !Df(_),
      options: {
        element: _,
        padding: A
      }
    };
  }), c = S(() => ({
    onFirstUpdate: () => {
      u();
    },
    ..._m(e, [
      d(l),
      d(s)
    ])
  })), p = S(() => Tm(e.referenceEl) || d(o)), { attributes: v, state: m, styles: g, update: u, forceUpdate: f, instanceRef: b } = ag(p, n, c);
  return R(b, (h) => t.value = h), Te(() => {
    R(() => {
      var h;
      return (h = d(p)) == null ? void 0 : h.getBoundingClientRect();
    }, () => {
      u();
    });
  }), {
    attributes: v,
    arrowRef: a,
    contentRef: n,
    instanceRef: b,
    state: m,
    styles: g,
    role: r,
    forceUpdate: f,
    update: u
  };
}, Am = (e, {
  attributes: t,
  styles: n,
  role: o
}) => {
  const { nextZIndex: r } = hg(), a = re("popper"), i = S(() => d(t).popper), s = I(e.zIndex || r()), l = S(() => [
    a.b(),
    a.is("pure", e.pure),
    a.is(e.effect),
    e.popperClass
  ]), c = S(() => [
    { zIndex: d(s) },
    e.popperStyle || {},
    d(n).popper
  ]), p = S(() => o.value === "dialog" ? "false" : void 0), v = S(() => d(n).arrow || {});
  return {
    ariaModal: p,
    arrowStyle: v,
    contentAttrs: i,
    contentClass: l,
    contentStyle: c,
    contentZIndex: s,
    updateZIndex: () => {
      s.value = e.zIndex || r();
    }
  };
}, Pm = (e, t) => {
  const n = I(!1), o = I();
  return {
    focusStartRef: o,
    trapped: n,
    onFocusAfterReleased: (c) => {
      var p;
      ((p = c.detail) == null ? void 0 : p.focusReason) !== "pointer" && (o.value = "first", t("blur"));
    },
    onFocusAfterTrapped: () => {
      t("focus");
    },
    onFocusInTrap: (c) => {
      e.visible && !n.value && (c.target && (o.value = c.target), n.value = !0);
    },
    onFocusoutPrevented: (c) => {
      e.trapping || (c.detail.focusReason === "pointer" && c.preventDefault(), n.value = !1);
    },
    onReleaseRequested: () => {
      n.value = !1, t("close");
    }
  };
}, Im = j({
  name: "ElPopperContent"
}), xm = /* @__PURE__ */ j({
  ...Im,
  props: Xi,
  emits: Sm,
  setup(e, { expose: t, emit: n }) {
    const o = e, {
      focusStartRef: r,
      trapped: a,
      onFocusAfterReleased: i,
      onFocusAfterTrapped: s,
      onFocusInTrap: l,
      onFocusoutPrevented: c,
      onReleaseRequested: p
    } = Pm(o, n), { attributes: v, arrowRef: m, contentRef: g, styles: u, instanceRef: f, role: b, update: h } = Om(o), {
      ariaModal: _,
      arrowStyle: A,
      contentAttrs: O,
      contentClass: x,
      contentStyle: E,
      updateZIndex: w
    } = Am(o, {
      styles: u,
      attributes: v,
      role: b
    }), P = oe(oo, void 0), N = I();
    Xe(Pi, {
      arrowStyle: A,
      arrowRef: m,
      arrowOffset: N
    }), P && (P.addInputId || P.removeInputId) && Xe(oo, {
      ...P,
      addInputId: xn,
      removeInputId: xn
    });
    let F;
    const V = (q = !0) => {
      h(), q && w();
    }, U = () => {
      V(!1), o.visible && o.focusOnShow ? a.value = !0 : o.visible === !1 && (a.value = !1);
    };
    return Te(() => {
      R(() => o.triggerTargetEl, (q, J) => {
        F == null || F(), F = void 0;
        const M = d(q || g.value), W = d(J || g.value);
        kn(M) && (F = R([b, () => o.ariaLabel, _, () => o.id], (X) => {
          ["role", "aria-label", "aria-modal", "id"].forEach((pe, se) => {
            vo(X[se]) ? M.removeAttribute(pe) : M.setAttribute(pe, X[se]);
          });
        }, { immediate: !0 })), W !== M && kn(W) && ["role", "aria-label", "aria-modal", "id"].forEach((X) => {
          W.removeAttribute(X);
        });
      }, { immediate: !0 }), R(() => o.visible, U, { immediate: !0 });
    }), ft(() => {
      F == null || F(), F = void 0;
    }), t({
      popperContentRef: g,
      popperInstanceRef: f,
      updatePopper: V,
      contentStyle: E
    }), (q, J) => (T(), L("div", Lt({
      ref_key: "contentRef",
      ref: g
    }, d(O), {
      style: d(E),
      class: d(x),
      tabindex: "-1",
      onMouseenter: J[0] || (J[0] = (M) => q.$emit("mouseenter", M)),
      onMouseleave: J[1] || (J[1] = (M) => q.$emit("mouseleave", M))
    }), [
      ge(d(bm), {
        trapped: d(a),
        "trap-on-focus-in": !0,
        "focus-trap-el": d(g),
        "focus-start-el": d(r),
        onFocusAfterTrapped: d(s),
        onFocusAfterReleased: d(i),
        onFocusin: d(l),
        onFocusoutPrevented: d(c),
        onReleaseRequested: d(p)
      }, {
        default: K(() => [
          Z(q.$slots, "default")
        ]),
        _: 3
      }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusin", "onFocusoutPrevented", "onReleaseRequested"])
    ], 16));
  }
});
var km = /* @__PURE__ */ ae(xm, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/content.vue"]]);
const Mm = Ct(Zg), Lm = re("tooltip"), $r = fe({
  ...dg,
  ...Xi,
  appendTo: {
    type: Y([String, Object])
  },
  content: {
    type: String,
    default: ""
  },
  rawContent: {
    type: Boolean,
    default: !1
  },
  persistent: Boolean,
  ariaLabel: String,
  visible: {
    type: Y(Boolean),
    default: null
  },
  transition: {
    type: String,
    default: `${Lm.namespace.value}-fade-in-linear`
  },
  teleported: {
    type: Boolean,
    default: !0
  },
  disabled: {
    type: Boolean
  }
}), es = fe({
  ...Zi,
  disabled: Boolean,
  trigger: {
    type: Y([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: Y(Array),
    default: () => [Mn.enter, Mn.space]
  }
}), {
  useModelToggleProps: Rm,
  useModelToggleEmits: Bm,
  useModelToggle: Fm
} = Li("visible"), Nm = fe({
  ...Gi,
  ...Rm,
  ...$r,
  ...es,
  ...Qi,
  showArrow: {
    type: Boolean,
    default: !0
  }
}), zm = [
  ...Bm,
  "before-show",
  "before-hide",
  "show",
  "hide",
  "open",
  "close"
], Dm = (e, t) => Gt(e) ? e.includes(t) : e === t, en = (e, t, n) => (o) => {
  Dm(d(e), t) && n(o);
}, jm = j({
  name: "ElTooltipTrigger"
}), Hm = /* @__PURE__ */ j({
  ...jm,
  props: es,
  setup(e, { expose: t }) {
    const n = e, o = re("tooltip"), { controlled: r, id: a, open: i, onOpen: s, onClose: l, onToggle: c } = oe(fr, void 0), p = I(null), v = () => {
      if (d(r) || n.disabled)
        return !0;
    }, m = st(n, "trigger"), g = mt(v, en(m, "hover", s)), u = mt(v, en(m, "hover", l)), f = mt(v, en(m, "click", (O) => {
      O.button === 0 && c(O);
    })), b = mt(v, en(m, "focus", s)), h = mt(v, en(m, "focus", l)), _ = mt(v, en(m, "contextmenu", (O) => {
      O.preventDefault(), c(O);
    })), A = mt(v, (O) => {
      const { code: x } = O;
      n.triggerKeys.includes(x) && (O.preventDefault(), c(O));
    });
    return t({
      triggerRef: p
    }), (O, x) => (T(), H(d(am), {
      id: d(a),
      "virtual-ref": O.virtualRef,
      open: d(i),
      "virtual-triggering": O.virtualTriggering,
      class: k(d(o).e("trigger")),
      onBlur: d(h),
      onClick: d(f),
      onContextmenu: d(_),
      onFocus: d(b),
      onMouseenter: d(g),
      onMouseleave: d(u),
      onKeydown: d(A)
    }, {
      default: K(() => [
        Z(O.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]));
  }
});
var Vm = /* @__PURE__ */ ae(Hm, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/trigger.vue"]]);
const Wm = j({
  name: "ElTooltipContent",
  inheritAttrs: !1
}), Km = /* @__PURE__ */ j({
  ...Wm,
  props: $r,
  setup(e, { expose: t }) {
    const n = e, { selector: o } = Ui(), r = I(null), a = I(!1), {
      controlled: i,
      id: s,
      open: l,
      trigger: c,
      onClose: p,
      onOpen: v,
      onShow: m,
      onHide: g,
      onBeforeShow: u,
      onBeforeHide: f
    } = oe(fr, void 0), b = S(() => n.persistent);
    ft(() => {
      a.value = !0;
    });
    const h = S(() => d(b) ? !0 : d(l)), _ = S(() => n.disabled ? !1 : d(l)), A = S(() => n.appendTo || o.value), O = S(() => {
      var M;
      return (M = n.style) != null ? M : {};
    }), x = S(() => !d(l)), E = () => {
      g();
    }, w = () => {
      if (d(i))
        return !0;
    }, P = mt(w, () => {
      n.enterable && d(c) === "hover" && v();
    }), N = mt(w, () => {
      d(c) === "hover" && p();
    }), F = () => {
      var M, W;
      (W = (M = r.value) == null ? void 0 : M.updatePopper) == null || W.call(M), u == null || u();
    }, V = () => {
      f == null || f();
    }, U = () => {
      m(), J = Xf(S(() => {
        var M;
        return (M = r.value) == null ? void 0 : M.popperContentRef;
      }), () => {
        if (d(i))
          return;
        d(c) !== "hover" && p();
      });
    }, q = () => {
      n.virtualTriggering || p();
    };
    let J;
    return R(() => d(l), (M) => {
      M || J == null || J();
    }, {
      flush: "post"
    }), R(() => n.content, () => {
      var M, W;
      (W = (M = r.value) == null ? void 0 : M.updatePopper) == null || W.call(M);
    }), t({
      contentRef: r
    }), (M, W) => (T(), H(ws, {
      disabled: !M.teleported,
      to: d(A)
    }, [
      ge(io, {
        name: M.transition,
        onAfterLeave: E,
        onBeforeEnter: F,
        onAfterEnter: U,
        onBeforeLeave: V
      }, {
        default: K(() => [
          d(h) ? Ae((T(), H(d(km), Lt({
            key: 0,
            id: d(s),
            ref_key: "contentRef",
            ref: r
          }, M.$attrs, {
            "aria-label": M.ariaLabel,
            "aria-hidden": d(x),
            "boundaries-padding": M.boundariesPadding,
            "fallback-placements": M.fallbackPlacements,
            "gpu-acceleration": M.gpuAcceleration,
            offset: M.offset,
            placement: M.placement,
            "popper-options": M.popperOptions,
            strategy: M.strategy,
            effect: M.effect,
            enterable: M.enterable,
            pure: M.pure,
            "popper-class": M.popperClass,
            "popper-style": [M.popperStyle, d(O)],
            "reference-el": M.referenceEl,
            "trigger-target-el": M.triggerTargetEl,
            visible: d(_),
            "z-index": M.zIndex,
            onMouseenter: d(P),
            onMouseleave: d(N),
            onBlur: q,
            onClose: d(p)
          }), {
            default: K(() => [
              a.value ? z("v-if", !0) : Z(M.$slots, "default", { key: 0 })
            ]),
            _: 3
          }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onClose"])), [
            [gn, d(_)]
          ]) : z("v-if", !0)
        ]),
        _: 3
      }, 8, ["name"])
    ], 8, ["disabled", "to"]));
  }
});
var Um = /* @__PURE__ */ ae(Km, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/content.vue"]]);
const qm = ["innerHTML"], Gm = { key: 1 }, Qm = j({
  name: "ElTooltip"
}), Ym = /* @__PURE__ */ j({
  ...Qm,
  props: Nm,
  emits: zm,
  setup(e, { expose: t, emit: n }) {
    const o = e;
    cg();
    const r = Mi(), a = I(), i = I(), s = () => {
      var h;
      const _ = d(a);
      _ && ((h = _.popperInstanceRef) == null || h.update());
    }, l = I(!1), c = I(), { show: p, hide: v, hasUpdateHandler: m } = Fm({
      indicator: l,
      toggleReason: c
    }), { onOpen: g, onClose: u } = fg({
      showAfter: st(o, "showAfter"),
      hideAfter: st(o, "hideAfter"),
      open: p,
      close: v
    }), f = S(() => In(o.visible) && !m.value);
    Xe(fr, {
      controlled: f,
      id: r,
      open: Ga(l),
      trigger: st(o, "trigger"),
      onOpen: (h) => {
        g(h);
      },
      onClose: (h) => {
        u(h);
      },
      onToggle: (h) => {
        d(l) ? u(h) : g(h);
      },
      onShow: () => {
        n("show", c.value);
      },
      onHide: () => {
        n("hide", c.value);
      },
      onBeforeShow: () => {
        n("before-show", c.value);
      },
      onBeforeHide: () => {
        n("before-hide", c.value);
      },
      updatePopper: s
    }), R(() => o.disabled, (h) => {
      h && l.value && (l.value = !1);
    });
    const b = () => {
      var h, _;
      const A = (_ = (h = i.value) == null ? void 0 : h.contentRef) == null ? void 0 : _.popperContentRef;
      return A && A.contains(document.activeElement);
    };
    return Ss(() => l.value && v()), t({
      popperRef: a,
      contentRef: i,
      isFocusInsideContent: b,
      updatePopper: s,
      onOpen: g,
      onClose: u,
      hide: v
    }), (h, _) => (T(), H(d(Mm), {
      ref_key: "popperRef",
      ref: a,
      role: h.role
    }, {
      default: K(() => [
        ge(Vm, {
          disabled: h.disabled,
          trigger: h.trigger,
          "trigger-keys": h.triggerKeys,
          "virtual-ref": h.virtualRef,
          "virtual-triggering": h.virtualTriggering
        }, {
          default: K(() => [
            h.$slots.default ? Z(h.$slots, "default", { key: 0 }) : z("v-if", !0)
          ]),
          _: 3
        }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]),
        ge(Um, {
          ref_key: "contentRef",
          ref: i,
          "aria-label": h.ariaLabel,
          "boundaries-padding": h.boundariesPadding,
          content: h.content,
          disabled: h.disabled,
          effect: h.effect,
          enterable: h.enterable,
          "fallback-placements": h.fallbackPlacements,
          "hide-after": h.hideAfter,
          "gpu-acceleration": h.gpuAcceleration,
          offset: h.offset,
          persistent: h.persistent,
          "popper-class": h.popperClass,
          "popper-style": h.popperStyle,
          placement: h.placement,
          "popper-options": h.popperOptions,
          pure: h.pure,
          "raw-content": h.rawContent,
          "reference-el": h.referenceEl,
          "trigger-target-el": h.triggerTargetEl,
          "show-after": h.showAfter,
          strategy: h.strategy,
          teleported: h.teleported,
          transition: h.transition,
          "virtual-triggering": h.virtualTriggering,
          "z-index": h.zIndex,
          "append-to": h.appendTo
        }, {
          default: K(() => [
            Z(h.$slots, "content", {}, () => [
              h.rawContent ? (T(), L("span", {
                key: 0,
                innerHTML: h.content
              }, null, 8, qm)) : (T(), L("span", Gm, he(h.content), 1))
            ]),
            h.showArrow ? (T(), H(d(em), {
              key: 0,
              "arrow-offset": h.arrowOffset
            }, null, 8, ["arrow-offset"])) : z("v-if", !0)
          ]),
          _: 3
        }, 8, ["aria-label", "boundaries-padding", "content", "disabled", "effect", "enterable", "fallback-placements", "hide-after", "gpu-acceleration", "offset", "persistent", "popper-class", "popper-style", "placement", "popper-options", "pure", "raw-content", "reference-el", "trigger-target-el", "show-after", "strategy", "teleported", "transition", "virtual-triggering", "z-index", "append-to"])
      ]),
      _: 3
    }, 8, ["role"]));
  }
});
var Zm = /* @__PURE__ */ ae(Ym, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/tooltip.vue"]]);
const Jm = Ct(Zm), Xm = (e, t) => {
  xi({
    from: "type.text",
    replacement: "link",
    version: "3.0.0",
    scope: "props",
    ref: "https://element-plus.org/en-US/component/button.html#button-attributes"
  }, S(() => e.type === "text"));
  const n = oe(Oi, void 0), o = Zt("button"), { form: r } = wn(), a = cn(S(() => n == null ? void 0 : n.size)), i = wo(), s = I(), l = ao(), c = S(() => e.type || (n == null ? void 0 : n.type) || ""), p = S(() => {
    var g, u, f;
    return (f = (u = e.autoInsertSpace) != null ? u : (g = o.value) == null ? void 0 : g.autoInsertSpace) != null ? f : !1;
  }), v = S(() => {
    var g;
    const u = (g = l.default) == null ? void 0 : g.call(l);
    if (p.value && (u == null ? void 0 : u.length) === 1) {
      const f = u[0];
      if ((f == null ? void 0 : f.type) === Qa) {
        const b = f.children;
        return /^\p{Unified_Ideograph}{2}$/u.test(b.trim());
      }
    }
    return !1;
  });
  return {
    _disabled: i,
    _size: a,
    _type: c,
    _ref: s,
    shouldAddSpace: v,
    handleClick: (g) => {
      e.nativeType === "reset" && (r == null || r.resetFields()), t("click", g);
    }
  };
}, e0 = [
  "default",
  "primary",
  "success",
  "warning",
  "info",
  "danger",
  "text",
  ""
], t0 = ["button", "submit", "reset"], Uo = fe({
  size: yo,
  disabled: Boolean,
  type: {
    type: String,
    values: e0,
    default: ""
  },
  icon: {
    type: un
  },
  nativeType: {
    type: String,
    values: t0,
    default: "button"
  },
  loading: Boolean,
  loadingIcon: {
    type: un,
    default: () => Ti
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
}), n0 = {
  click: (e) => e instanceof MouseEvent
};
function de(e, t) {
  o0(e) && (e = "100%");
  var n = r0(e);
  return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), n && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)), e);
}
function Un(e) {
  return Math.min(1, Math.max(0, e));
}
function o0(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function r0(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function ts(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function qn(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function Wt(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function a0(e, t, n) {
  return {
    r: de(e, 255) * 255,
    g: de(t, 255) * 255,
    b: de(n, 255) * 255
  };
}
function Da(e, t, n) {
  e = de(e, 255), t = de(t, 255), n = de(n, 255);
  var o = Math.max(e, t, n), r = Math.min(e, t, n), a = 0, i = 0, s = (o + r) / 2;
  if (o === r)
    i = 0, a = 0;
  else {
    var l = o - r;
    switch (i = s > 0.5 ? l / (2 - o - r) : l / (o + r), o) {
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
  return { h: a, s: i, l: s };
}
function Mo(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * (6 * n) : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function i0(e, t, n) {
  var o, r, a;
  if (e = de(e, 360), t = de(t, 100), n = de(n, 100), t === 0)
    r = n, a = n, o = n;
  else {
    var i = n < 0.5 ? n * (1 + t) : n + t - n * t, s = 2 * n - i;
    o = Mo(s, i, e + 1 / 3), r = Mo(s, i, e), a = Mo(s, i, e - 1 / 3);
  }
  return { r: o * 255, g: r * 255, b: a * 255 };
}
function ja(e, t, n) {
  e = de(e, 255), t = de(t, 255), n = de(n, 255);
  var o = Math.max(e, t, n), r = Math.min(e, t, n), a = 0, i = o, s = o - r, l = o === 0 ? 0 : s / o;
  if (o === r)
    a = 0;
  else {
    switch (o) {
      case e:
        a = (t - n) / s + (t < n ? 6 : 0);
        break;
      case t:
        a = (n - e) / s + 2;
        break;
      case n:
        a = (e - t) / s + 4;
        break;
    }
    a /= 6;
  }
  return { h: a, s: l, v: i };
}
function s0(e, t, n) {
  e = de(e, 360) * 6, t = de(t, 100), n = de(n, 100);
  var o = Math.floor(e), r = e - o, a = n * (1 - t), i = n * (1 - r * t), s = n * (1 - (1 - r) * t), l = o % 6, c = [n, i, a, a, s, n][l], p = [s, n, n, i, a, a][l], v = [a, a, s, n, n, i][l];
  return { r: c * 255, g: p * 255, b: v * 255 };
}
function Ha(e, t, n, o) {
  var r = [
    Wt(Math.round(e).toString(16)),
    Wt(Math.round(t).toString(16)),
    Wt(Math.round(n).toString(16))
  ];
  return o && r[0].startsWith(r[0].charAt(1)) && r[1].startsWith(r[1].charAt(1)) && r[2].startsWith(r[2].charAt(1)) ? r[0].charAt(0) + r[1].charAt(0) + r[2].charAt(0) : r.join("");
}
function l0(e, t, n, o, r) {
  var a = [
    Wt(Math.round(e).toString(16)),
    Wt(Math.round(t).toString(16)),
    Wt(Math.round(n).toString(16)),
    Wt(u0(o))
  ];
  return r && a[0].startsWith(a[0].charAt(1)) && a[1].startsWith(a[1].charAt(1)) && a[2].startsWith(a[2].charAt(1)) && a[3].startsWith(a[3].charAt(1)) ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) + a[3].charAt(0) : a.join("");
}
function u0(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function Va(e) {
  return Oe(e) / 255;
}
function Oe(e) {
  return parseInt(e, 16);
}
function c0(e) {
  return {
    r: e >> 16,
    g: (e & 65280) >> 8,
    b: e & 255
  };
}
var qo = {
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
function d0(e) {
  var t = { r: 0, g: 0, b: 0 }, n = 1, o = null, r = null, a = null, i = !1, s = !1;
  return typeof e == "string" && (e = v0(e)), typeof e == "object" && (gt(e.r) && gt(e.g) && gt(e.b) ? (t = a0(e.r, e.g, e.b), i = !0, s = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : gt(e.h) && gt(e.s) && gt(e.v) ? (o = qn(e.s), r = qn(e.v), t = s0(e.h, o, r), i = !0, s = "hsv") : gt(e.h) && gt(e.s) && gt(e.l) && (o = qn(e.s), a = qn(e.l), t = i0(e.h, o, a), i = !0, s = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (n = e.a)), n = ts(n), {
    ok: i,
    format: e.format || s,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: n
  };
}
var f0 = "[-\\+]?\\d+%?", p0 = "[-\\+]?\\d*\\.\\d+%?", Mt = "(?:".concat(p0, ")|(?:").concat(f0, ")"), Lo = "[\\s|\\(]+(".concat(Mt, ")[,|\\s]+(").concat(Mt, ")[,|\\s]+(").concat(Mt, ")\\s*\\)?"), Ro = "[\\s|\\(]+(".concat(Mt, ")[,|\\s]+(").concat(Mt, ")[,|\\s]+(").concat(Mt, ")[,|\\s]+(").concat(Mt, ")\\s*\\)?"), Ge = {
  CSS_UNIT: new RegExp(Mt),
  rgb: new RegExp("rgb" + Lo),
  rgba: new RegExp("rgba" + Ro),
  hsl: new RegExp("hsl" + Lo),
  hsla: new RegExp("hsla" + Ro),
  hsv: new RegExp("hsv" + Lo),
  hsva: new RegExp("hsva" + Ro),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function v0(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  var t = !1;
  if (qo[e])
    e = qo[e], t = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var n = Ge.rgb.exec(e);
  return n ? { r: n[1], g: n[2], b: n[3] } : (n = Ge.rgba.exec(e), n ? { r: n[1], g: n[2], b: n[3], a: n[4] } : (n = Ge.hsl.exec(e), n ? { h: n[1], s: n[2], l: n[3] } : (n = Ge.hsla.exec(e), n ? { h: n[1], s: n[2], l: n[3], a: n[4] } : (n = Ge.hsv.exec(e), n ? { h: n[1], s: n[2], v: n[3] } : (n = Ge.hsva.exec(e), n ? { h: n[1], s: n[2], v: n[3], a: n[4] } : (n = Ge.hex8.exec(e), n ? {
    r: Oe(n[1]),
    g: Oe(n[2]),
    b: Oe(n[3]),
    a: Va(n[4]),
    format: t ? "name" : "hex8"
  } : (n = Ge.hex6.exec(e), n ? {
    r: Oe(n[1]),
    g: Oe(n[2]),
    b: Oe(n[3]),
    format: t ? "name" : "hex"
  } : (n = Ge.hex4.exec(e), n ? {
    r: Oe(n[1] + n[1]),
    g: Oe(n[2] + n[2]),
    b: Oe(n[3] + n[3]),
    a: Va(n[4] + n[4]),
    format: t ? "name" : "hex8"
  } : (n = Ge.hex3.exec(e), n ? {
    r: Oe(n[1] + n[1]),
    g: Oe(n[2] + n[2]),
    b: Oe(n[3] + n[3]),
    format: t ? "name" : "hex"
  } : !1)))))))));
}
function gt(e) {
  return !!Ge.CSS_UNIT.exec(String(e));
}
var h0 = (
  /** @class */
  function() {
    function e(t, n) {
      t === void 0 && (t = ""), n === void 0 && (n = {});
      var o;
      if (t instanceof e)
        return t;
      typeof t == "number" && (t = c0(t)), this.originalInput = t;
      var r = d0(t);
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
      var t = this.toRgb(), n, o, r, a = t.r / 255, i = t.g / 255, s = t.b / 255;
      return a <= 0.03928 ? n = a / 12.92 : n = Math.pow((a + 0.055) / 1.055, 2.4), i <= 0.03928 ? o = i / 12.92 : o = Math.pow((i + 0.055) / 1.055, 2.4), s <= 0.03928 ? r = s / 12.92 : r = Math.pow((s + 0.055) / 1.055, 2.4), 0.2126 * n + 0.7152 * o + 0.0722 * r;
    }, e.prototype.getAlpha = function() {
      return this.a;
    }, e.prototype.setAlpha = function(t) {
      return this.a = ts(t), this.roundA = Math.round(100 * this.a) / 100, this;
    }, e.prototype.isMonochrome = function() {
      var t = this.toHsl().s;
      return t === 0;
    }, e.prototype.toHsv = function() {
      var t = ja(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
    }, e.prototype.toHsvString = function() {
      var t = ja(this.r, this.g, this.b), n = Math.round(t.h * 360), o = Math.round(t.s * 100), r = Math.round(t.v * 100);
      return this.a === 1 ? "hsv(".concat(n, ", ").concat(o, "%, ").concat(r, "%)") : "hsva(".concat(n, ", ").concat(o, "%, ").concat(r, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHsl = function() {
      var t = Da(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
    }, e.prototype.toHslString = function() {
      var t = Da(this.r, this.g, this.b), n = Math.round(t.h * 360), o = Math.round(t.s * 100), r = Math.round(t.l * 100);
      return this.a === 1 ? "hsl(".concat(n, ", ").concat(o, "%, ").concat(r, "%)") : "hsla(".concat(n, ", ").concat(o, "%, ").concat(r, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHex = function(t) {
      return t === void 0 && (t = !1), Ha(this.r, this.g, this.b, t);
    }, e.prototype.toHexString = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex(t);
    }, e.prototype.toHex8 = function(t) {
      return t === void 0 && (t = !1), l0(this.r, this.g, this.b, this.a, t);
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
        return "".concat(Math.round(de(n, 255) * 100), "%");
      };
      return {
        r: t(this.r),
        g: t(this.g),
        b: t(this.b),
        a: this.a
      };
    }, e.prototype.toPercentageRgbString = function() {
      var t = function(n) {
        return Math.round(de(n, 255) * 100);
      };
      return this.a === 1 ? "rgb(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%)") : "rgba(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%, ").concat(this.roundA, ")");
    }, e.prototype.toName = function() {
      if (this.a === 0)
        return "transparent";
      if (this.a < 1)
        return !1;
      for (var t = "#" + Ha(this.r, this.g, this.b, !1), n = 0, o = Object.entries(qo); n < o.length; n++) {
        var r = o[n], a = r[0], i = r[1];
        if (t === i)
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
      return n.l += t / 100, n.l = Un(n.l), new e(n);
    }, e.prototype.brighten = function(t) {
      t === void 0 && (t = 10);
      var n = this.toRgb();
      return n.r = Math.max(0, Math.min(255, n.r - Math.round(255 * -(t / 100)))), n.g = Math.max(0, Math.min(255, n.g - Math.round(255 * -(t / 100)))), n.b = Math.max(0, Math.min(255, n.b - Math.round(255 * -(t / 100)))), new e(n);
    }, e.prototype.darken = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.l -= t / 100, n.l = Un(n.l), new e(n);
    }, e.prototype.tint = function(t) {
      return t === void 0 && (t = 10), this.mix("white", t);
    }, e.prototype.shade = function(t) {
      return t === void 0 && (t = 10), this.mix("black", t);
    }, e.prototype.desaturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s -= t / 100, n.s = Un(n.s), new e(n);
    }, e.prototype.saturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s += t / 100, n.s = Un(n.s), new e(n);
    }, e.prototype.greyscale = function() {
      return this.desaturate(100);
    }, e.prototype.spin = function(t) {
      var n = this.toHsl(), o = (n.h + t) % 360;
      return n.h = o < 0 ? 360 + o : o, new e(n);
    }, e.prototype.mix = function(t, n) {
      n === void 0 && (n = 50);
      var o = this.toRgb(), r = new e(t).toRgb(), a = n / 100, i = {
        r: (r.r - o.r) * a + o.r,
        g: (r.g - o.g) * a + o.g,
        b: (r.b - o.b) * a + o.b,
        a: (r.a - o.a) * a + o.a
      };
      return new e(i);
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
      for (var n = this.toHsv(), o = n.h, r = n.s, a = n.v, i = [], s = 1 / t; t--; )
        i.push(new e({ h: o, s: r, v: a })), a = (a + s) % 1;
      return i;
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
      for (var n = this.toHsl(), o = n.h, r = [this], a = 360 / t, i = 1; i < t; i++)
        r.push(new e({ h: (o + i * a) % 360, s: n.s, l: n.l }));
      return r;
    }, e.prototype.equals = function(t) {
      return this.toRgbString() === new e(t).toRgbString();
    }, e;
  }()
);
function It(e, t = 20) {
  return e.mix("#141414", t).toString();
}
function g0(e) {
  const t = wo(), n = re("button");
  return S(() => {
    let o = {};
    const r = e.color;
    if (r) {
      const a = new h0(r), i = e.dark ? a.tint(20).toString() : It(a, 20);
      if (e.plain)
        o = n.cssVarBlock({
          "bg-color": e.dark ? It(a, 90) : a.tint(90).toString(),
          "text-color": r,
          "border-color": e.dark ? It(a, 50) : a.tint(50).toString(),
          "hover-text-color": `var(${n.cssVarName("color-white")})`,
          "hover-bg-color": r,
          "hover-border-color": r,
          "active-bg-color": i,
          "active-text-color": `var(${n.cssVarName("color-white")})`,
          "active-border-color": i
        }), t.value && (o[n.cssVarBlockName("disabled-bg-color")] = e.dark ? It(a, 90) : a.tint(90).toString(), o[n.cssVarBlockName("disabled-text-color")] = e.dark ? It(a, 50) : a.tint(50).toString(), o[n.cssVarBlockName("disabled-border-color")] = e.dark ? It(a, 80) : a.tint(80).toString());
      else {
        const s = e.dark ? It(a, 30) : a.tint(30).toString(), l = a.isDark() ? `var(${n.cssVarName("color-white")})` : `var(${n.cssVarName("color-black")})`;
        if (o = n.cssVarBlock({
          "bg-color": r,
          "text-color": l,
          "border-color": r,
          "hover-bg-color": s,
          "hover-text-color": l,
          "hover-border-color": s,
          "active-bg-color": i,
          "active-border-color": i
        }), t.value) {
          const c = e.dark ? It(a, 50) : a.tint(50).toString();
          o[n.cssVarBlockName("disabled-bg-color")] = c, o[n.cssVarBlockName("disabled-text-color")] = e.dark ? "rgba(255, 255, 255, 0.5)" : `var(${n.cssVarName("color-white")})`, o[n.cssVarBlockName("disabled-border-color")] = c;
        }
      }
    }
    return o;
  });
}
const m0 = ["aria-disabled", "disabled", "autofocus", "type"], b0 = j({
  name: "ElButton"
}), y0 = /* @__PURE__ */ j({
  ...b0,
  props: Uo,
  emits: n0,
  setup(e, { expose: t, emit: n }) {
    const o = e, r = g0(o), a = re("button"), { _ref: i, _size: s, _type: l, _disabled: c, shouldAddSpace: p, handleClick: v } = Xm(o, n);
    return t({
      ref: i,
      size: s,
      type: l,
      disabled: c,
      shouldAddSpace: p
    }), (m, g) => (T(), L("button", {
      ref_key: "_ref",
      ref: i,
      class: k([
        d(a).b(),
        d(a).m(d(l)),
        d(a).m(d(s)),
        d(a).is("disabled", d(c)),
        d(a).is("loading", m.loading),
        d(a).is("plain", m.plain),
        d(a).is("round", m.round),
        d(a).is("circle", m.circle),
        d(a).is("text", m.text),
        d(a).is("link", m.link),
        d(a).is("has-bg", m.bg)
      ]),
      "aria-disabled": d(c) || m.loading,
      disabled: d(c) || m.loading,
      autofocus: m.autofocus,
      type: m.nativeType,
      style: me(d(r)),
      onClick: g[0] || (g[0] = (...u) => d(v) && d(v)(...u))
    }, [
      m.loading ? (T(), L(Je, { key: 0 }, [
        m.$slots.loading ? Z(m.$slots, "loading", { key: 0 }) : (T(), H(d(it), {
          key: 1,
          class: k(d(a).is("loading"))
        }, {
          default: K(() => [
            (T(), H(Ye(m.loadingIcon)))
          ]),
          _: 1
        }, 8, ["class"]))
      ], 64)) : m.icon || m.$slots.icon ? (T(), H(d(it), { key: 1 }, {
        default: K(() => [
          m.icon ? (T(), H(Ye(m.icon), { key: 0 })) : Z(m.$slots, "icon", { key: 1 })
        ]),
        _: 3
      })) : z("v-if", !0),
      m.$slots.default ? (T(), L("span", {
        key: 2,
        class: k({ [d(a).em("text", "expand")]: d(p) })
      }, [
        Z(m.$slots, "default")
      ], 2)) : z("v-if", !0)
    ], 14, m0));
  }
});
var w0 = /* @__PURE__ */ ae(y0, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/button/src/button.vue"]]);
const S0 = {
  size: Uo.size,
  type: Uo.type
}, _0 = j({
  name: "ElButtonGroup"
}), T0 = /* @__PURE__ */ j({
  ..._0,
  props: S0,
  setup(e) {
    const t = e;
    Xe(Oi, mn({
      size: st(t, "size"),
      type: st(t, "type")
    }));
    const n = re("button");
    return (o, r) => (T(), L("div", {
      class: k(`${d(n).b("group")}`)
    }, [
      Z(o.$slots, "default")
    ], 2));
  }
});
var ns = /* @__PURE__ */ ae(T0, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/button/src/button-group.vue"]]);
const Vb = Ct(w0, {
  ButtonGroup: ns
});
Bn(ns);
const kt = /* @__PURE__ */ new Map();
let Wa;
ce && (document.addEventListener("mousedown", (e) => Wa = e), document.addEventListener("mouseup", (e) => {
  for (const t of kt.values())
    for (const { documentHandler: n } of t)
      n(e, Wa);
}));
function Ka(e, t) {
  let n = [];
  return Array.isArray(t.arg) ? n = t.arg : kn(t.arg) && n.push(t.arg), function(o, r) {
    const a = t.instance.popperRef, i = o.target, s = r == null ? void 0 : r.target, l = !t || !t.instance, c = !i || !s, p = e.contains(i) || e.contains(s), v = e === i, m = n.length && n.some((u) => u == null ? void 0 : u.contains(i)) || n.length && n.includes(s), g = a && (a.contains(i) || a.contains(s));
    l || c || p || v || m || g || t.value(o, r);
  };
}
const C0 = {
  beforeMount(e, t) {
    kt.has(e) || kt.set(e, []), kt.get(e).push({
      documentHandler: Ka(e, t),
      bindingFn: t.value
    });
  },
  updated(e, t) {
    kt.has(e) || kt.set(e, []);
    const n = kt.get(e), o = n.findIndex((a) => a.bindingFn === t.oldValue), r = {
      documentHandler: Ka(e, t),
      bindingFn: t.value
    };
    o >= 0 ? n.splice(o, 1, r) : n.push(r);
  },
  unmounted(e) {
    kt.delete(e);
  }
}, os = {
  modelValue: {
    type: [Number, String, Boolean],
    default: void 0
  },
  label: {
    type: [String, Boolean, Number, Object]
  },
  indeterminate: Boolean,
  disabled: Boolean,
  checked: Boolean,
  name: {
    type: String,
    default: void 0
  },
  trueLabel: {
    type: [String, Number],
    default: void 0
  },
  falseLabel: {
    type: [String, Number],
    default: void 0
  },
  id: {
    type: String,
    default: void 0
  },
  controls: {
    type: String,
    default: void 0
  },
  border: Boolean,
  size: yo,
  tabindex: [String, Number],
  validateEvent: {
    type: Boolean,
    default: !0
  }
}, rs = {
  [be]: (e) => wt(e) || Ze(e) || In(e),
  change: (e) => wt(e) || Ze(e) || In(e)
}, E0 = ({
  model: e,
  isChecked: t
}) => {
  const n = oe(yn, void 0), o = S(() => {
    var a, i;
    const s = (a = n == null ? void 0 : n.max) == null ? void 0 : a.value, l = (i = n == null ? void 0 : n.min) == null ? void 0 : i.value;
    return !no(s) && e.value.length >= s && !t.value || !no(l) && e.value.length <= l && t.value;
  });
  return {
    isDisabled: wo(S(() => (n == null ? void 0 : n.disabled.value) || o.value)),
    isLimitDisabled: o
  };
}, $0 = (e, {
  model: t,
  isLimitExceeded: n,
  hasOwnLabel: o,
  isDisabled: r,
  isLabeledByFormItem: a
}) => {
  const i = oe(yn, void 0), { formItem: s } = wn(), { emit: l } = Pe();
  function c(u) {
    var f, b;
    return u === e.trueLabel || u === !0 ? (f = e.trueLabel) != null ? f : !0 : (b = e.falseLabel) != null ? b : !1;
  }
  function p(u, f) {
    l("change", c(u), f);
  }
  function v(u) {
    if (n.value)
      return;
    const f = u.target;
    l("change", c(f.checked), u);
  }
  async function m(u) {
    n.value || !o.value && !r.value && a.value && (u.composedPath().some((h) => h.tagName === "LABEL") || (t.value = c([!1, e.falseLabel].includes(t.value)), await te(), p(t.value, u)));
  }
  const g = S(() => (i == null ? void 0 : i.validateEvent) || e.validateEvent);
  return R(() => e.modelValue, () => {
    g.value && (s == null || s.validate("change").catch((u) => void 0));
  }), {
    handleChange: v,
    onClickRoot: m
  };
}, O0 = (e) => {
  const t = I(!1), { emit: n } = Pe(), o = oe(yn, void 0), r = S(() => no(o) === !1), a = I(!1);
  return {
    model: S({
      get() {
        var s, l;
        return r.value ? (s = o == null ? void 0 : o.modelValue) == null ? void 0 : s.value : (l = e.modelValue) != null ? l : t.value;
      },
      set(s) {
        var l, c;
        r.value && Gt(s) ? (a.value = ((l = o == null ? void 0 : o.max) == null ? void 0 : l.value) !== void 0 && s.length > (o == null ? void 0 : o.max.value), a.value === !1 && ((c = o == null ? void 0 : o.changeEvent) == null || c.call(o, s))) : (n(be, s), t.value = s);
      }
    }),
    isGroup: r,
    isLimitExceeded: a
  };
}, A0 = (e, t, { model: n }) => {
  const o = oe(yn, void 0), r = I(!1), a = S(() => {
    const c = n.value;
    return In(c) ? c : Gt(c) ? et(e.label) ? c.map(sn).some((p) => Ho(p, e.label)) : c.map(sn).includes(e.label) : c != null ? c === e.trueLabel : !!c;
  }), i = cn(S(() => {
    var c;
    return (c = o == null ? void 0 : o.size) == null ? void 0 : c.value;
  }), {
    prop: !0
  }), s = cn(S(() => {
    var c;
    return (c = o == null ? void 0 : o.size) == null ? void 0 : c.value;
  })), l = S(() => !!(t.default || e.label));
  return {
    checkboxButtonSize: i,
    isChecked: a,
    isFocused: r,
    checkboxSize: s,
    hasOwnLabel: l
  };
}, P0 = (e, { model: t }) => {
  function n() {
    Gt(t.value) && !t.value.includes(e.label) ? t.value.push(e.label) : t.value = e.trueLabel || !0;
  }
  e.checked && n();
}, as = (e, t) => {
  const { formItem: n } = wn(), { model: o, isGroup: r, isLimitExceeded: a } = O0(e), {
    isFocused: i,
    isChecked: s,
    checkboxButtonSize: l,
    checkboxSize: c,
    hasOwnLabel: p
  } = A0(e, t, { model: o }), { isDisabled: v } = E0({ model: o, isChecked: s }), { inputId: m, isLabeledByFormItem: g } = vr(e, {
    formItemContext: n,
    disableIdGeneration: p,
    disableIdManagement: r
  }), { handleChange: u, onClickRoot: f } = $0(e, {
    model: o,
    isLimitExceeded: a,
    hasOwnLabel: p,
    isDisabled: v,
    isLabeledByFormItem: g
  });
  return P0(e, { model: o }), {
    inputId: m,
    isLabeledByFormItem: g,
    isChecked: s,
    isDisabled: v,
    isFocused: i,
    checkboxButtonSize: l,
    checkboxSize: c,
    hasOwnLabel: p,
    model: o,
    handleChange: u,
    onClickRoot: f
  };
}, I0 = ["tabindex", "role", "aria-checked"], x0 = ["id", "aria-hidden", "name", "tabindex", "disabled", "true-value", "false-value"], k0 = ["id", "aria-hidden", "disabled", "value", "name", "tabindex"], M0 = j({
  name: "ElCheckbox"
}), L0 = /* @__PURE__ */ j({
  ...M0,
  props: os,
  emits: rs,
  setup(e) {
    const t = e, n = ao(), {
      inputId: o,
      isLabeledByFormItem: r,
      isChecked: a,
      isDisabled: i,
      isFocused: s,
      checkboxSize: l,
      hasOwnLabel: c,
      model: p,
      handleChange: v,
      onClickRoot: m
    } = as(t, n), g = re("checkbox"), u = S(() => [
      g.b(),
      g.m(l.value),
      g.is("disabled", i.value),
      g.is("bordered", t.border),
      g.is("checked", a.value)
    ]), f = S(() => [
      g.e("input"),
      g.is("disabled", i.value),
      g.is("checked", a.value),
      g.is("indeterminate", t.indeterminate),
      g.is("focus", s.value)
    ]);
    return (b, h) => (T(), H(Ye(!d(c) && d(r) ? "span" : "label"), {
      class: k(d(u)),
      "aria-controls": b.indeterminate ? b.controls : null,
      onClick: d(m)
    }, {
      default: K(() => [
        D("span", {
          class: k(d(f)),
          tabindex: b.indeterminate ? 0 : void 0,
          role: b.indeterminate ? "checkbox" : void 0,
          "aria-checked": b.indeterminate ? "mixed" : void 0
        }, [
          b.trueLabel || b.falseLabel ? Ae((T(), L("input", {
            key: 0,
            id: d(o),
            "onUpdate:modelValue": h[0] || (h[0] = (_) => an(p) ? p.value = _ : null),
            class: k(d(g).e("original")),
            type: "checkbox",
            "aria-hidden": b.indeterminate ? "true" : "false",
            name: b.name,
            tabindex: b.tabindex,
            disabled: d(i),
            "true-value": b.trueLabel,
            "false-value": b.falseLabel,
            onChange: h[1] || (h[1] = (..._) => d(v) && d(v)(..._)),
            onFocus: h[2] || (h[2] = (_) => s.value = !0),
            onBlur: h[3] || (h[3] = (_) => s.value = !1)
          }, null, 42, x0)), [
            [Qn, d(p)]
          ]) : Ae((T(), L("input", {
            key: 1,
            id: d(o),
            "onUpdate:modelValue": h[4] || (h[4] = (_) => an(p) ? p.value = _ : null),
            class: k(d(g).e("original")),
            type: "checkbox",
            "aria-hidden": b.indeterminate ? "true" : "false",
            disabled: d(i),
            value: b.label,
            name: b.name,
            tabindex: b.tabindex,
            onChange: h[5] || (h[5] = (..._) => d(v) && d(v)(..._)),
            onFocus: h[6] || (h[6] = (_) => s.value = !0),
            onBlur: h[7] || (h[7] = (_) => s.value = !1)
          }, null, 42, k0)), [
            [Qn, d(p)]
          ]),
          D("span", {
            class: k(d(g).e("inner"))
          }, null, 2)
        ], 10, I0),
        d(c) ? (T(), L("span", {
          key: 0,
          class: k(d(g).e("label"))
        }, [
          Z(b.$slots, "default"),
          b.$slots.default ? z("v-if", !0) : (T(), L(Je, { key: 0 }, [
            Ya(he(b.label), 1)
          ], 64))
        ], 2)) : z("v-if", !0)
      ]),
      _: 3
    }, 8, ["class", "aria-controls", "onClick"]));
  }
});
var R0 = /* @__PURE__ */ ae(L0, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox.vue"]]);
const B0 = ["name", "tabindex", "disabled", "true-value", "false-value"], F0 = ["name", "tabindex", "disabled", "value"], N0 = j({
  name: "ElCheckboxButton"
}), z0 = /* @__PURE__ */ j({
  ...N0,
  props: os,
  emits: rs,
  setup(e) {
    const t = e, n = ao(), {
      isFocused: o,
      isChecked: r,
      isDisabled: a,
      checkboxButtonSize: i,
      model: s,
      handleChange: l
    } = as(t, n), c = oe(yn, void 0), p = re("checkbox"), v = S(() => {
      var g, u, f, b;
      const h = (u = (g = c == null ? void 0 : c.fill) == null ? void 0 : g.value) != null ? u : "";
      return {
        backgroundColor: h,
        borderColor: h,
        color: (b = (f = c == null ? void 0 : c.textColor) == null ? void 0 : f.value) != null ? b : "",
        boxShadow: h ? `-1px 0 0 0 ${h}` : void 0
      };
    }), m = S(() => [
      p.b("button"),
      p.bm("button", i.value),
      p.is("disabled", a.value),
      p.is("checked", r.value),
      p.is("focus", o.value)
    ]);
    return (g, u) => (T(), L("label", {
      class: k(d(m))
    }, [
      g.trueLabel || g.falseLabel ? Ae((T(), L("input", {
        key: 0,
        "onUpdate:modelValue": u[0] || (u[0] = (f) => an(s) ? s.value = f : null),
        class: k(d(p).be("button", "original")),
        type: "checkbox",
        name: g.name,
        tabindex: g.tabindex,
        disabled: d(a),
        "true-value": g.trueLabel,
        "false-value": g.falseLabel,
        onChange: u[1] || (u[1] = (...f) => d(l) && d(l)(...f)),
        onFocus: u[2] || (u[2] = (f) => o.value = !0),
        onBlur: u[3] || (u[3] = (f) => o.value = !1)
      }, null, 42, B0)), [
        [Qn, d(s)]
      ]) : Ae((T(), L("input", {
        key: 1,
        "onUpdate:modelValue": u[4] || (u[4] = (f) => an(s) ? s.value = f : null),
        class: k(d(p).be("button", "original")),
        type: "checkbox",
        name: g.name,
        tabindex: g.tabindex,
        disabled: d(a),
        value: g.label,
        onChange: u[5] || (u[5] = (...f) => d(l) && d(l)(...f)),
        onFocus: u[6] || (u[6] = (f) => o.value = !0),
        onBlur: u[7] || (u[7] = (f) => o.value = !1)
      }, null, 42, F0)), [
        [Qn, d(s)]
      ]),
      g.$slots.default || g.label ? (T(), L("span", {
        key: 2,
        class: k(d(p).be("button", "inner")),
        style: me(d(r) ? d(v) : void 0)
      }, [
        Z(g.$slots, "default", {}, () => [
          Ya(he(g.label), 1)
        ])
      ], 6)) : z("v-if", !0)
    ], 2));
  }
});
var is = /* @__PURE__ */ ae(z0, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-button.vue"]]);
const D0 = fe({
  modelValue: {
    type: Y(Array),
    default: () => []
  },
  disabled: Boolean,
  min: Number,
  max: Number,
  size: yo,
  label: String,
  fill: String,
  textColor: String,
  tag: {
    type: String,
    default: "div"
  },
  validateEvent: {
    type: Boolean,
    default: !0
  }
}), j0 = {
  [be]: (e) => Gt(e),
  change: (e) => Gt(e)
}, H0 = j({
  name: "ElCheckboxGroup"
}), V0 = /* @__PURE__ */ j({
  ...H0,
  props: D0,
  emits: j0,
  setup(e, { emit: t }) {
    const n = e, o = re("checkbox"), { formItem: r } = wn(), { inputId: a, isLabeledByFormItem: i } = vr(n, {
      formItemContext: r
    }), s = async (c) => {
      t(be, c), await te(), t("change", c);
    }, l = S({
      get() {
        return n.modelValue;
      },
      set(c) {
        s(c);
      }
    });
    return Xe(yn, {
      ...Kf(so(n), [
        "size",
        "min",
        "max",
        "disabled",
        "validateEvent",
        "fill",
        "textColor"
      ]),
      modelValue: l,
      changeEvent: s
    }), R(() => n.modelValue, () => {
      n.validateEvent && (r == null || r.validate("change").catch((c) => void 0));
    }), (c, p) => {
      var v;
      return T(), H(Ye(c.tag), {
        id: d(a),
        class: k(d(o).b("group")),
        role: "group",
        "aria-label": d(i) ? void 0 : c.label || "checkbox-group",
        "aria-labelledby": d(i) ? (v = d(r)) == null ? void 0 : v.labelId : void 0
      }, {
        default: K(() => [
          Z(c.$slots, "default")
        ]),
        _: 3
      }, 8, ["id", "class", "aria-label", "aria-labelledby"]);
    };
  }
});
var ss = /* @__PURE__ */ ae(V0, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-group.vue"]]);
const W0 = Ct(R0, {
  CheckboxButton: is,
  CheckboxGroup: ss
}), Wb = Bn(is), Kb = Bn(ss), ls = fe({
  closable: Boolean,
  type: {
    type: String,
    values: ["success", "info", "warning", "danger", ""],
    default: ""
  },
  hit: Boolean,
  disableTransitions: Boolean,
  color: {
    type: String,
    default: ""
  },
  size: {
    type: String,
    values: ur,
    default: ""
  },
  effect: {
    type: String,
    values: ["dark", "light", "plain"],
    default: "light"
  },
  round: Boolean
}), K0 = {
  close: (e) => e instanceof MouseEvent,
  click: (e) => e instanceof MouseEvent
}, U0 = j({
  name: "ElTag"
}), q0 = /* @__PURE__ */ j({
  ...U0,
  props: ls,
  emits: K0,
  setup(e, { emit: t }) {
    const n = e, o = cn(), r = re("tag"), a = S(() => {
      const { type: l, hit: c, effect: p, closable: v, round: m } = n;
      return [
        r.b(),
        r.is("closable", v),
        r.m(l),
        r.m(o.value),
        r.m(p),
        r.is("hit", c),
        r.is("round", m)
      ];
    }), i = (l) => {
      t("close", l);
    }, s = (l) => {
      t("click", l);
    };
    return (l, c) => l.disableTransitions ? (T(), L("span", {
      key: 0,
      class: k(d(a)),
      style: me({ backgroundColor: l.color }),
      onClick: s
    }, [
      D("span", {
        class: k(d(r).e("content"))
      }, [
        Z(l.$slots, "default")
      ], 2),
      l.closable ? (T(), H(d(it), {
        key: 0,
        class: k(d(r).e("close")),
        onClick: Qe(i, ["stop"])
      }, {
        default: K(() => [
          ge(d(Wo))
        ]),
        _: 1
      }, 8, ["class", "onClick"])) : z("v-if", !0)
    ], 6)) : (T(), H(io, {
      key: 1,
      name: `${d(r).namespace.value}-zoom-in-center`,
      appear: ""
    }, {
      default: K(() => [
        D("span", {
          class: k(d(a)),
          style: me({ backgroundColor: l.color }),
          onClick: s
        }, [
          D("span", {
            class: k(d(r).e("content"))
          }, [
            Z(l.$slots, "default")
          ], 2),
          l.closable ? (T(), H(d(it), {
            key: 0,
            class: k(d(r).e("close")),
            onClick: Qe(i, ["stop"])
          }, {
            default: K(() => [
              ge(d(Wo))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : z("v-if", !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["name"]));
  }
});
var G0 = /* @__PURE__ */ ae(q0, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tag/src/tag.vue"]]);
const Q0 = Ct(G0), us = "ElSelectGroup", Co = "ElSelect";
function Y0(e, t) {
  const n = oe(Co), o = oe(us, { disabled: !1 }), r = S(() => Object.prototype.toString.call(e.value).toLowerCase() === "[object object]"), a = S(() => n.props.multiple ? v(n.props.modelValue, e.value) : m(e.value, n.props.modelValue)), i = S(() => {
    if (n.props.multiple) {
      const f = n.props.modelValue || [];
      return !a.value && f.length >= n.props.multipleLimit && n.props.multipleLimit > 0;
    } else
      return !1;
  }), s = S(() => e.label || (r.value ? "" : e.value)), l = S(() => e.value || e.label || ""), c = S(() => e.disabled || t.groupDisabled || i.value), p = Pe(), v = (f = [], b) => {
    if (r.value) {
      const h = n.props.valueKey;
      return f && f.some((_) => sn(Le(_, h)) === Le(b, h));
    } else
      return f && f.includes(b);
  }, m = (f, b) => {
    if (r.value) {
      const { valueKey: h } = n.props;
      return Le(f, h) === Le(b, h);
    } else
      return f === b;
  }, g = () => {
    !e.disabled && !o.disabled && (n.hoverIndex = n.optionsArray.indexOf(p.proxy));
  };
  R(() => s.value, () => {
    !e.created && !n.props.remote && n.setSelected();
  }), R(() => e.value, (f, b) => {
    const { remote: h, valueKey: _ } = n.props;
    if (Object.is(f, b) || (n.onOptionDestroy(b, p.proxy), n.onOptionCreate(p.proxy)), !e.created && !h) {
      if (_ && typeof f == "object" && typeof b == "object" && f[_] === b[_])
        return;
      n.setSelected();
    }
  }), R(() => o.disabled, () => {
    t.groupDisabled = o.disabled;
  }, { immediate: !0 });
  const { queryChange: u } = sn(n);
  return R(u, (f) => {
    const { query: b } = d(f), h = new RegExp(gp(b), "i");
    t.visible = h.test(s.value) || e.created, t.visible || n.filteredOptionsCount--;
  }), {
    select: n,
    currentLabel: s,
    currentValue: l,
    itemSelected: a,
    isDisabled: c,
    hoverItem: g
  };
}
const Z0 = j({
  name: "ElOption",
  componentName: "ElOption",
  props: {
    value: {
      required: !0,
      type: [String, Number, Boolean, Object]
    },
    label: [String, Number],
    created: Boolean,
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const t = re("select"), n = mn({
      index: -1,
      groupDisabled: !1,
      visible: !0,
      hitState: !1,
      hover: !1
    }), { currentLabel: o, itemSelected: r, isDisabled: a, select: i, hoverItem: s } = Y0(e, n), { visible: l, hover: c } = so(n), p = Pe().proxy;
    i.onOptionCreate(p), ft(() => {
      const m = p.value, { selected: g } = i, f = (i.props.multiple ? g : [g]).some((b) => b.value === p.value);
      te(() => {
        i.cachedOptions.get(m) === p && !f && i.cachedOptions.delete(m);
      }), i.onOptionDestroy(m, p);
    });
    function v() {
      e.disabled !== !0 && n.groupDisabled !== !0 && i.handleOptionSelect(p, !0);
    }
    return {
      ns: t,
      currentLabel: o,
      itemSelected: r,
      isDisabled: a,
      select: i,
      hoverItem: s,
      visible: l,
      hover: c,
      selectOptionClick: v,
      states: n
    };
  }
});
function J0(e, t, n, o, r, a) {
  return Ae((T(), L("li", {
    class: k([
      e.ns.be("dropdown", "item"),
      e.ns.is("disabled", e.isDisabled),
      {
        selected: e.itemSelected,
        hover: e.hover
      }
    ]),
    onMouseenter: t[0] || (t[0] = (...i) => e.hoverItem && e.hoverItem(...i)),
    onClick: t[1] || (t[1] = Qe((...i) => e.selectOptionClick && e.selectOptionClick(...i), ["stop"]))
  }, [
    Z(e.$slots, "default", {}, () => [
      D("span", null, he(e.currentLabel), 1)
    ])
  ], 34)), [
    [gn, e.visible]
  ]);
}
var Or = /* @__PURE__ */ ae(Z0, [["render", J0], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/option.vue"]]);
const X0 = j({
  name: "ElSelectDropdown",
  componentName: "ElSelectDropdown",
  setup() {
    const e = oe(Co), t = re("select"), n = S(() => e.props.popperClass), o = S(() => e.props.multiple), r = S(() => e.props.fitInputWidth), a = I("");
    function i() {
      var s;
      a.value = `${(s = e.selectWrapper) == null ? void 0 : s.offsetWidth}px`;
    }
    return Te(() => {
      i(), mo(e.selectWrapper, i);
    }), {
      ns: t,
      minWidth: a,
      popperClass: n,
      isMultiple: o,
      isFitInputWidth: r
    };
  }
});
function eb(e, t, n, o, r, a) {
  return T(), L("div", {
    class: k([e.ns.b("dropdown"), e.ns.is("multiple", e.isMultiple), e.popperClass]),
    style: me({ [e.isFitInputWidth ? "width" : "minWidth"]: e.minWidth })
  }, [
    Z(e.$slots, "default")
  ], 6);
}
var tb = /* @__PURE__ */ ae(X0, [["render", eb], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/select-dropdown.vue"]]);
function nb(e) {
  const { t } = hr();
  return mn({
    options: /* @__PURE__ */ new Map(),
    cachedOptions: /* @__PURE__ */ new Map(),
    createdLabel: null,
    createdSelected: !1,
    selected: e.multiple ? [] : {},
    inputLength: 20,
    inputWidth: 0,
    optionsCount: 0,
    filteredOptionsCount: 0,
    visible: !1,
    softFocus: !1,
    selectedLabel: "",
    hoverIndex: -1,
    query: "",
    previousQuery: null,
    inputHovering: !1,
    cachedPlaceHolder: "",
    currentPlaceholder: t("el.select.placeholder"),
    menuVisibleOnFocus: !1,
    isOnComposition: !1,
    isSilentBlur: !1,
    prefixWidth: 11,
    tagInMultiLine: !1,
    mouseEnter: !1
  });
}
const ob = (e, t, n) => {
  const { t: o } = hr(), r = re("select");
  xi({
    from: "suffixTransition",
    replacement: "override style scheme",
    version: "2.3.0",
    scope: "props",
    ref: "https://element-plus.org/en-US/component/select.html#select-attributes"
  }, S(() => e.suffixTransition === !1));
  const a = I(null), i = I(null), s = I(null), l = I(null), c = I(null), p = I(null), v = I(-1), m = on({ query: "" }), g = on(""), { form: u, formItem: f } = wn(), b = S(() => !e.filterable || e.multiple || !t.visible), h = S(() => e.disabled || (u == null ? void 0 : u.disabled)), _ = S(() => {
    const y = e.multiple ? Array.isArray(e.modelValue) && e.modelValue.length > 0 : e.modelValue !== void 0 && e.modelValue !== null && e.modelValue !== "";
    return e.clearable && !h.value && t.inputHovering && y;
  }), A = S(() => e.remote && e.filterable && !e.remoteShowSuffix ? "" : e.suffixIcon), O = S(() => r.is("reverse", A.value && t.visible && e.suffixTransition)), x = S(() => e.remote ? 300 : 0), E = S(() => e.loading ? e.loadingText || o("el.select.loading") : e.remote && t.query === "" && t.options.size === 0 ? !1 : e.filterable && t.query && t.options.size > 0 && t.filteredOptionsCount === 0 ? e.noMatchText || o("el.select.noMatch") : t.options.size === 0 ? e.noDataText || o("el.select.noData") : null), w = S(() => Array.from(t.options.values())), P = S(() => Array.from(t.cachedOptions.values())), N = S(() => {
    const y = w.value.filter(($) => !$.created).some(($) => $.currentLabel === t.query);
    return e.filterable && e.allowCreate && t.query !== "" && !y;
  }), F = cn(), V = S(() => ["small"].includes(F.value) ? "small" : "default"), U = S({
    get() {
      return t.visible && E.value !== !1;
    },
    set(y) {
      t.visible = y;
    }
  });
  R([() => h.value, () => F.value, () => u == null ? void 0 : u.size], () => {
    te(() => {
      q();
    });
  }), R(() => e.placeholder, (y) => {
    t.cachedPlaceHolder = t.currentPlaceholder = y;
  }), R(() => e.modelValue, (y, $) => {
    e.multiple && (q(), y && y.length > 0 || i.value && t.query !== "" ? t.currentPlaceholder = "" : t.currentPlaceholder = t.cachedPlaceHolder, e.filterable && !e.reserveKeyword && (t.query = "", J(t.query))), X(), e.filterable && !e.multiple && (t.inputLength = 20), !Ho(y, $) && e.validateEvent && (f == null || f.validate("change").catch((B) => void 0));
  }, {
    flush: "post",
    deep: !0
  }), R(() => t.visible, (y) => {
    var $, B, G;
    y ? ((B = ($ = s.value) == null ? void 0 : $.updatePopper) == null || B.call($), e.filterable && (t.filteredOptionsCount = t.optionsCount, t.query = e.remote ? "" : t.selectedLabel, e.multiple ? (G = i.value) == null || G.focus() : t.selectedLabel && (t.currentPlaceholder = `${t.selectedLabel}`, t.selectedLabel = ""), J(t.query), !e.multiple && !e.remote && (m.value.query = "", Sn(m), Sn(g)))) : (e.filterable && (Re(e.filterMethod) && e.filterMethod(""), Re(e.remoteMethod) && e.remoteMethod("")), i.value && i.value.blur(), t.query = "", t.previousQuery = null, t.selectedLabel = "", t.inputLength = 20, t.menuVisibleOnFocus = !1, se(), te(() => {
      i.value && i.value.value === "" && t.selected.length === 0 && (t.currentPlaceholder = t.cachedPlaceHolder);
    }), e.multiple || (t.selected && (e.filterable && e.allowCreate && t.createdSelected && t.createdLabel ? t.selectedLabel = t.createdLabel : t.selectedLabel = t.selected.currentLabel, e.filterable && (t.query = t.selectedLabel)), e.filterable && (t.currentPlaceholder = t.cachedPlaceHolder))), n.emit("visible-change", y);
  }), R(() => t.options.entries(), () => {
    var y, $, B;
    if (!ce)
      return;
    ($ = (y = s.value) == null ? void 0 : y.updatePopper) == null || $.call(y), e.multiple && q();
    const G = ((B = c.value) == null ? void 0 : B.querySelectorAll("input")) || [];
    Array.from(G).includes(document.activeElement) || X(), e.defaultFirstOption && (e.filterable || e.remote) && t.filteredOptionsCount && W();
  }, {
    flush: "post"
  }), R(() => t.hoverIndex, (y) => {
    Ze(y) && y > -1 ? v.value = w.value[y] || {} : v.value = {}, w.value.forEach(($) => {
      $.hover = v.value === $;
    });
  });
  const q = () => {
    e.collapseTags && !e.filterable || te(() => {
      var y, $;
      if (!a.value)
        return;
      const B = a.value.$el.querySelector("input"), G = l.value, ue = jv(F.value || (u == null ? void 0 : u.size));
      B.style.height = `${(t.selected.length === 0 ? ue : Math.max(G ? G.clientHeight + (G.clientHeight > ue ? 6 : 0) : 0, ue)) - 2}px`, t.tagInMultiLine = Number.parseFloat(B.style.height) >= ue, t.visible && E.value !== !1 && (($ = (y = s.value) == null ? void 0 : y.updatePopper) == null || $.call(y));
    });
  }, J = async (y) => {
    if (!(t.previousQuery === y || t.isOnComposition)) {
      if (t.previousQuery === null && (Re(e.filterMethod) || Re(e.remoteMethod))) {
        t.previousQuery = y;
        return;
      }
      t.previousQuery = y, te(() => {
        var $, B;
        t.visible && ((B = ($ = s.value) == null ? void 0 : $.updatePopper) == null || B.call($));
      }), t.hoverIndex = -1, e.multiple && e.filterable && te(() => {
        const $ = i.value.value.length * 15 + 20;
        t.inputLength = e.collapseTags ? Math.min(50, $) : $, M(), q();
      }), e.remote && Re(e.remoteMethod) ? (t.hoverIndex = -1, e.remoteMethod(y)) : Re(e.filterMethod) ? (e.filterMethod(y), Sn(g)) : (t.filteredOptionsCount = t.optionsCount, m.value.query = y, Sn(m), Sn(g)), e.defaultFirstOption && (e.filterable || e.remote) && t.filteredOptionsCount && (await te(), W());
    }
  }, M = () => {
    t.currentPlaceholder !== "" && (t.currentPlaceholder = i.value.value ? "" : t.cachedPlaceHolder);
  }, W = () => {
    const y = w.value.filter((G) => G.visible && !G.disabled && !G.states.groupDisabled), $ = y.find((G) => G.created), B = y[0];
    t.hoverIndex = rt(w.value, $ || B);
  }, X = () => {
    var y;
    if (e.multiple)
      t.selectedLabel = "";
    else {
      const B = pe(e.modelValue);
      (y = B.props) != null && y.created ? (t.createdLabel = B.props.value, t.createdSelected = !0) : t.createdSelected = !1, t.selectedLabel = B.currentLabel, t.selected = B, e.filterable && (t.query = t.selectedLabel);
      return;
    }
    const $ = [];
    Array.isArray(e.modelValue) && e.modelValue.forEach((B) => {
      $.push(pe(B));
    }), t.selected = $, te(() => {
      q();
    });
  }, pe = (y) => {
    let $;
    const B = Io(y).toLowerCase() === "object", G = Io(y).toLowerCase() === "null", ue = Io(y).toLowerCase() === "undefined";
    for (let ht = t.cachedOptions.size - 1; ht >= 0; ht--) {
      const Me = P.value[ht];
      if (B ? Le(Me.value, e.valueKey) === Le(y, e.valueKey) : Me.value === y) {
        $ = {
          value: y,
          currentLabel: Me.currentLabel,
          isDisabled: Me.isDisabled
        };
        break;
      }
    }
    if ($)
      return $;
    const At = B ? y.label : !G && !ue ? y : "", Pt = {
      value: y,
      currentLabel: At
    };
    return e.multiple && (Pt.hitState = !1), Pt;
  }, se = () => {
    setTimeout(() => {
      const y = e.valueKey;
      e.multiple ? t.selected.length > 0 ? t.hoverIndex = Math.min.apply(null, t.selected.map(($) => w.value.findIndex((B) => Le(B, y) === Le($, y)))) : t.hoverIndex = -1 : t.hoverIndex = w.value.findIndex(($) => Ot($) === Ot(t.selected));
    }, 300);
  }, xe = () => {
    var y, $;
    pt(), ($ = (y = s.value) == null ? void 0 : y.updatePopper) == null || $.call(y), e.multiple && !e.filterable && q();
  }, pt = () => {
    var y;
    t.inputWidth = (y = a.value) == null ? void 0 : y.$el.offsetWidth;
  }, De = () => {
    e.filterable && t.query !== t.selectedLabel && (t.query = t.selectedLabel, J(t.query));
  }, ot = ia(() => {
    De();
  }, x.value), Ce = ia((y) => {
    J(y.target.value);
  }, x.value), ie = (y) => {
    Ho(e.modelValue, y) || n.emit(Ei, y);
  }, ye = (y) => {
    if (y.target.value.length <= 0 && !He()) {
      const $ = e.modelValue.slice();
      $.pop(), n.emit(be, $), ie($);
    }
    y.target.value.length === 1 && e.modelValue.length === 0 && (t.currentPlaceholder = t.cachedPlaceHolder);
  }, Ee = (y, $) => {
    const B = t.selected.indexOf($);
    if (B > -1 && !h.value) {
      const G = e.modelValue.slice();
      G.splice(B, 1), n.emit(be, G), ie(G), n.emit("remove-tag", $.value);
    }
    y.stopPropagation();
  }, le = (y) => {
    y.stopPropagation();
    const $ = e.multiple ? [] : "";
    if (!wt($))
      for (const B of t.selected)
        B.isDisabled && $.push(B.value);
    n.emit(be, $), ie($), t.hoverIndex = -1, t.visible = !1, n.emit("clear");
  }, vt = (y, $) => {
    var B;
    if (e.multiple) {
      const G = (e.modelValue || []).slice(), ue = rt(G, y.value);
      ue > -1 ? G.splice(ue, 1) : (e.multipleLimit <= 0 || G.length < e.multipleLimit) && G.push(y.value), n.emit(be, G), ie(G), y.created && (t.query = "", J(""), t.inputLength = 20), e.filterable && ((B = i.value) == null || B.focus());
    } else
      n.emit(be, y.value), ie(y.value), t.visible = !1;
    t.isSilentBlur = $, at(), !t.visible && te(() => {
      ke(y);
    });
  }, rt = (y = [], $) => {
    if (!et($))
      return y.indexOf($);
    const B = e.valueKey;
    let G = -1;
    return y.some((ue, At) => sn(Le(ue, B)) === Le($, B) ? (G = At, !0) : !1), G;
  }, at = () => {
    t.softFocus = !0;
    const y = i.value || a.value;
    y && (y == null || y.focus());
  }, ke = (y) => {
    var $, B, G, ue, At;
    const Pt = Array.isArray(y) ? y[0] : y;
    let ht = null;
    if (Pt != null && Pt.value) {
      const Me = w.value.filter((zn) => zn.value === Pt.value);
      Me.length > 0 && (ht = Me[0].$el);
    }
    if (s.value && ht) {
      const Me = (ue = (G = (B = ($ = s.value) == null ? void 0 : $.popperRef) == null ? void 0 : B.contentRef) == null ? void 0 : G.querySelector) == null ? void 0 : ue.call(G, `.${r.be("dropdown", "wrap")}`);
      Me && yp(Me, ht);
    }
    (At = p.value) == null || At.handleScroll();
  }, je = (y) => {
    t.optionsCount++, t.filteredOptionsCount++, t.options.set(y.value, y), t.cachedOptions.set(y.value, y);
  }, Ft = (y, $) => {
    t.options.get(y) === $ && (t.optionsCount--, t.filteredOptionsCount--, t.options.delete(y));
  }, Et = (y) => {
    y.code !== Mn.backspace && He(!1), t.inputLength = i.value.value.length * 15 + 20, q();
  }, He = (y) => {
    if (!Array.isArray(t.selected))
      return;
    const $ = t.selected[t.selected.length - 1];
    if ($)
      return y === !0 || y === !1 ? ($.hitState = y, y) : ($.hitState = !$.hitState, $.hitState);
  }, $t = (y) => {
    const $ = y.target.value;
    if (y.type === "compositionend")
      t.isOnComposition = !1, te(() => J($));
    else {
      const B = $[$.length - 1] || "";
      t.isOnComposition = !$i(B);
    }
  }, Nt = () => {
    te(() => ke(t.selected));
  }, $e = (y) => {
    t.softFocus ? t.softFocus = !1 : ((e.automaticDropdown || e.filterable) && (e.filterable && !t.visible && (t.menuVisibleOnFocus = !0), t.visible = !0), n.emit("focus", y));
  }, we = () => {
    var y;
    t.visible = !1, (y = a.value) == null || y.blur();
  }, Ve = (y) => {
    te(() => {
      t.isSilentBlur ? t.isSilentBlur = !1 : n.emit("blur", y);
    }), t.softFocus = !1;
  }, C = (y) => {
    le(y);
  }, Q = () => {
    t.visible = !1;
  }, ve = (y) => {
    t.visible && (y.preventDefault(), y.stopPropagation(), t.visible = !1);
  }, We = (y) => {
    var $;
    y && !t.mouseEnter || h.value || (t.menuVisibleOnFocus ? t.menuVisibleOnFocus = !1 : (!s.value || !s.value.isFocusInsideContent()) && (t.visible = !t.visible), t.visible && (($ = i.value || a.value) == null || $.focus()));
  }, zt = () => {
    t.visible ? w.value[t.hoverIndex] && vt(w.value[t.hoverIndex], void 0) : We();
  }, Ot = (y) => et(y.value) ? Le(y.value, e.valueKey) : y.value, Jt = S(() => w.value.filter((y) => y.visible).every((y) => y.disabled)), Xt = (y) => {
    if (!t.visible) {
      t.visible = !0;
      return;
    }
    if (!(t.options.size === 0 || t.filteredOptionsCount === 0) && !t.isOnComposition && !Jt.value) {
      y === "next" ? (t.hoverIndex++, t.hoverIndex === t.options.size && (t.hoverIndex = 0)) : y === "prev" && (t.hoverIndex--, t.hoverIndex < 0 && (t.hoverIndex = t.options.size - 1));
      const $ = w.value[t.hoverIndex];
      ($.disabled === !0 || $.states.groupDisabled === !0 || !$.visible) && Xt(y), te(() => ke(v.value));
    }
  };
  return {
    optionsArray: w,
    selectSize: F,
    handleResize: xe,
    debouncedOnInputChange: ot,
    debouncedQueryChange: Ce,
    deletePrevTag: ye,
    deleteTag: Ee,
    deleteSelected: le,
    handleOptionSelect: vt,
    scrollToOption: ke,
    readonly: b,
    resetInputHeight: q,
    showClose: _,
    iconComponent: A,
    iconReverse: O,
    showNewOption: N,
    collapseTagSize: V,
    setSelected: X,
    managePlaceholder: M,
    selectDisabled: h,
    emptyText: E,
    toggleLastOptionHitState: He,
    resetInputState: Et,
    handleComposition: $t,
    onOptionCreate: je,
    onOptionDestroy: Ft,
    handleMenuEnter: Nt,
    handleFocus: $e,
    blur: we,
    handleBlur: Ve,
    handleClearClick: C,
    handleClose: Q,
    handleKeydownEscape: ve,
    toggleMenu: We,
    selectOption: zt,
    getValueKey: Ot,
    navigateOptions: Xt,
    dropMenuVisible: U,
    queryChange: m,
    groupQueryChange: g,
    reference: a,
    input: i,
    tooltipRef: s,
    tags: l,
    selectWrapper: c,
    scrollbar: p,
    handleMouseEnter: () => {
      t.mouseEnter = !0;
    },
    handleMouseLeave: () => {
      t.mouseEnter = !1;
    }
  };
}, Ua = "ElSelect", rb = j({
  name: Ua,
  componentName: Ua,
  components: {
    ElInput: kg,
    ElSelectMenu: tb,
    ElOption: Or,
    ElTag: Q0,
    ElScrollbar: qg,
    ElTooltip: Jm,
    ElIcon: it
  },
  directives: { ClickOutside: C0 },
  props: {
    name: String,
    id: String,
    modelValue: {
      type: [Array, String, Number, Boolean, Object],
      default: void 0
    },
    autocomplete: {
      type: String,
      default: "off"
    },
    automaticDropdown: Boolean,
    size: {
      type: String,
      validator: Hv
    },
    effect: {
      type: String,
      default: "light"
    },
    disabled: Boolean,
    clearable: Boolean,
    filterable: Boolean,
    allowCreate: Boolean,
    loading: Boolean,
    popperClass: {
      type: String,
      default: ""
    },
    remote: Boolean,
    loadingText: String,
    noMatchText: String,
    noDataText: String,
    remoteMethod: Function,
    filterMethod: Function,
    multiple: Boolean,
    multipleLimit: {
      type: Number,
      default: 0
    },
    placeholder: {
      type: String
    },
    defaultFirstOption: Boolean,
    reserveKeyword: {
      type: Boolean,
      default: !0
    },
    valueKey: {
      type: String,
      default: "value"
    },
    collapseTags: Boolean,
    collapseTagsTooltip: {
      type: Boolean,
      default: !1
    },
    teleported: $r.teleported,
    persistent: {
      type: Boolean,
      default: !0
    },
    clearIcon: {
      type: un,
      default: lr
    },
    fitInputWidth: {
      type: Boolean,
      default: !1
    },
    suffixIcon: {
      type: un,
      default: Ep
    },
    tagType: { ...ls.type, default: "info" },
    validateEvent: {
      type: Boolean,
      default: !0
    },
    remoteShowSuffix: {
      type: Boolean,
      default: !1
    },
    suffixTransition: {
      type: Boolean,
      default: !0
    },
    placement: {
      type: String,
      values: So,
      default: "bottom-start"
    }
  },
  emits: [
    be,
    Ei,
    "remove-tag",
    "clear",
    "visible-change",
    "focus",
    "blur"
  ],
  setup(e, t) {
    const n = re("select"), o = re("input"), { t: r } = hr(), a = nb(e), {
      optionsArray: i,
      selectSize: s,
      readonly: l,
      handleResize: c,
      collapseTagSize: p,
      debouncedOnInputChange: v,
      debouncedQueryChange: m,
      deletePrevTag: g,
      deleteTag: u,
      deleteSelected: f,
      handleOptionSelect: b,
      scrollToOption: h,
      setSelected: _,
      resetInputHeight: A,
      managePlaceholder: O,
      showClose: x,
      selectDisabled: E,
      iconComponent: w,
      iconReverse: P,
      showNewOption: N,
      emptyText: F,
      toggleLastOptionHitState: V,
      resetInputState: U,
      handleComposition: q,
      onOptionCreate: J,
      onOptionDestroy: M,
      handleMenuEnter: W,
      handleFocus: X,
      blur: pe,
      handleBlur: se,
      handleClearClick: xe,
      handleClose: pt,
      handleKeydownEscape: De,
      toggleMenu: ot,
      selectOption: Ce,
      getValueKey: ie,
      navigateOptions: ye,
      dropMenuVisible: Ee,
      reference: le,
      input: vt,
      tooltipRef: rt,
      tags: at,
      selectWrapper: ke,
      scrollbar: je,
      queryChange: Ft,
      groupQueryChange: Et,
      handleMouseEnter: He,
      handleMouseLeave: $t
    } = ob(e, a, t), { focus: Nt } = Gv(le), {
      inputWidth: $e,
      selected: we,
      inputLength: Ve,
      filteredOptionsCount: C,
      visible: Q,
      softFocus: ve,
      selectedLabel: We,
      hoverIndex: zt,
      query: Ot,
      inputHovering: Jt,
      currentPlaceholder: Xt,
      menuVisibleOnFocus: Ar,
      isOnComposition: Pr,
      isSilentBlur: y,
      options: $,
      cachedOptions: B,
      optionsCount: G,
      prefixWidth: ue,
      tagInMultiLine: At
    } = so(a), Pt = S(() => {
      const Ke = [n.b()], Dt = d(s);
      return Dt && Ke.push(n.m(Dt)), e.disabled && Ke.push(n.m("disabled")), Ke;
    }), ht = S(() => ({
      maxWidth: `${d($e) - 32}px`,
      width: "100%"
    })), Me = S(() => ({ maxWidth: `${d($e) > 123 ? d($e) - 123 : d($e) - 75}px` }));
    Xe(Co, mn({
      props: e,
      options: $,
      optionsArray: i,
      cachedOptions: B,
      optionsCount: G,
      filteredOptionsCount: C,
      hoverIndex: zt,
      handleOptionSelect: b,
      onOptionCreate: J,
      onOptionDestroy: M,
      selectWrapper: ke,
      selected: we,
      setSelected: _,
      queryChange: Ft,
      groupQueryChange: Et
    })), Te(() => {
      a.cachedPlaceHolder = Xt.value = e.placeholder || r("el.select.placeholder"), e.multiple && Array.isArray(e.modelValue) && e.modelValue.length > 0 && (Xt.value = ""), mo(ke, c), e.remote && e.multiple && A(), te(() => {
        const Ke = le.value && le.value.$el;
        if (Ke && ($e.value = Ke.getBoundingClientRect().width, t.slots.prefix)) {
          const Dt = Ke.querySelector(`.${o.e("prefix")}`);
          ue.value = Math.max(Dt.getBoundingClientRect().width + 5, 30);
        }
      }), _();
    }), e.multiple && !Array.isArray(e.modelValue) && t.emit(be, []), !e.multiple && Array.isArray(e.modelValue) && t.emit(be, "");
    const zn = S(() => {
      var Ke, Dt;
      return (Dt = (Ke = rt.value) == null ? void 0 : Ke.popperRef) == null ? void 0 : Dt.contentRef;
    });
    return {
      tagInMultiLine: At,
      prefixWidth: ue,
      selectSize: s,
      readonly: l,
      handleResize: c,
      collapseTagSize: p,
      debouncedOnInputChange: v,
      debouncedQueryChange: m,
      deletePrevTag: g,
      deleteTag: u,
      deleteSelected: f,
      handleOptionSelect: b,
      scrollToOption: h,
      inputWidth: $e,
      selected: we,
      inputLength: Ve,
      filteredOptionsCount: C,
      visible: Q,
      softFocus: ve,
      selectedLabel: We,
      hoverIndex: zt,
      query: Ot,
      inputHovering: Jt,
      currentPlaceholder: Xt,
      menuVisibleOnFocus: Ar,
      isOnComposition: Pr,
      isSilentBlur: y,
      options: $,
      resetInputHeight: A,
      managePlaceholder: O,
      showClose: x,
      selectDisabled: E,
      iconComponent: w,
      iconReverse: P,
      showNewOption: N,
      emptyText: F,
      toggleLastOptionHitState: V,
      resetInputState: U,
      handleComposition: q,
      handleMenuEnter: W,
      handleFocus: X,
      blur: pe,
      handleBlur: se,
      handleClearClick: xe,
      handleClose: pt,
      handleKeydownEscape: De,
      toggleMenu: ot,
      selectOption: Ce,
      getValueKey: ie,
      navigateOptions: ye,
      dropMenuVisible: Ee,
      focus: Nt,
      reference: le,
      input: vt,
      tooltipRef: rt,
      popperPaneRef: zn,
      tags: at,
      selectWrapper: ke,
      scrollbar: je,
      wrapperKls: Pt,
      selectTagsStyle: ht,
      nsSelect: n,
      tagTextStyle: Me,
      handleMouseEnter: He,
      handleMouseLeave: $t
    };
  }
}), ab = ["disabled", "autocomplete"], ib = { style: { height: "100%", display: "flex", "justify-content": "center", "align-items": "center" } };
function sb(e, t, n, o, r, a) {
  const i = jt("el-tag"), s = jt("el-tooltip"), l = jt("el-icon"), c = jt("el-input"), p = jt("el-option"), v = jt("el-scrollbar"), m = jt("el-select-menu"), g = _s("click-outside");
  return Ae((T(), L("div", {
    ref: "selectWrapper",
    class: k(e.wrapperKls),
    onMouseenter: t[22] || (t[22] = (...u) => e.handleMouseEnter && e.handleMouseEnter(...u)),
    onMouseleave: t[23] || (t[23] = (...u) => e.handleMouseLeave && e.handleMouseLeave(...u)),
    onClick: t[24] || (t[24] = Qe((...u) => e.toggleMenu && e.toggleMenu(...u), ["stop"]))
  }, [
    ge(s, {
      ref: "tooltipRef",
      visible: e.dropMenuVisible,
      placement: e.placement,
      teleported: e.teleported,
      "popper-class": [e.nsSelect.e("popper"), e.popperClass],
      "fallback-placements": ["bottom-start", "top-start", "right", "left"],
      effect: e.effect,
      pure: "",
      trigger: "click",
      transition: `${e.nsSelect.namespace.value}-zoom-in-top`,
      "stop-popper-mouse-event": !1,
      "gpu-acceleration": !1,
      persistent: e.persistent,
      onShow: e.handleMenuEnter
    }, {
      default: K(() => [
        D("div", {
          class: "select-trigger",
          onMouseenter: t[20] || (t[20] = (u) => e.inputHovering = !0),
          onMouseleave: t[21] || (t[21] = (u) => e.inputHovering = !1)
        }, [
          e.multiple ? (T(), L("div", {
            key: 0,
            ref: "tags",
            class: k(e.nsSelect.e("tags")),
            style: me(e.selectTagsStyle)
          }, [
            e.collapseTags && e.selected.length ? (T(), L("span", {
              key: 0,
              class: k([
                e.nsSelect.b("tags-wrapper"),
                { "has-prefix": e.prefixWidth && e.selected.length }
              ])
            }, [
              ge(i, {
                closable: !e.selectDisabled && !e.selected[0].isDisabled,
                size: e.collapseTagSize,
                hit: e.selected[0].hitState,
                type: e.tagType,
                "disable-transitions": "",
                onClose: t[0] || (t[0] = (u) => e.deleteTag(u, e.selected[0]))
              }, {
                default: K(() => [
                  D("span", {
                    class: k(e.nsSelect.e("tags-text")),
                    style: me(e.tagTextStyle)
                  }, he(e.selected[0].currentLabel), 7)
                ]),
                _: 1
              }, 8, ["closable", "size", "hit", "type"]),
              e.selected.length > 1 ? (T(), H(i, {
                key: 0,
                closable: !1,
                size: e.collapseTagSize,
                type: e.tagType,
                "disable-transitions": ""
              }, {
                default: K(() => [
                  e.collapseTagsTooltip ? (T(), H(s, {
                    key: 0,
                    disabled: e.dropMenuVisible,
                    "fallback-placements": ["bottom", "top", "right", "left"],
                    effect: e.effect,
                    placement: "bottom",
                    teleported: e.teleported
                  }, {
                    default: K(() => [
                      D("span", {
                        class: k(e.nsSelect.e("tags-text"))
                      }, "+ " + he(e.selected.length - 1), 3)
                    ]),
                    content: K(() => [
                      D("div", {
                        class: k(e.nsSelect.e("collapse-tags"))
                      }, [
                        (T(!0), L(Je, null, Bo(e.selected.slice(1), (u, f) => (T(), L("div", {
                          key: f,
                          class: k(e.nsSelect.e("collapse-tag"))
                        }, [
                          (T(), H(i, {
                            key: e.getValueKey(u),
                            class: "in-tooltip",
                            closable: !e.selectDisabled && !u.isDisabled,
                            size: e.collapseTagSize,
                            hit: u.hitState,
                            type: e.tagType,
                            "disable-transitions": "",
                            style: { margin: "2px" },
                            onClose: (b) => e.deleteTag(b, u)
                          }, {
                            default: K(() => [
                              D("span", {
                                class: k(e.nsSelect.e("tags-text")),
                                style: me({
                                  maxWidth: e.inputWidth - 75 + "px"
                                })
                              }, he(u.currentLabel), 7)
                            ]),
                            _: 2
                          }, 1032, ["closable", "size", "hit", "type", "onClose"]))
                        ], 2))), 128))
                      ], 2)
                    ]),
                    _: 1
                  }, 8, ["disabled", "effect", "teleported"])) : (T(), L("span", {
                    key: 1,
                    class: k(e.nsSelect.e("tags-text"))
                  }, "+ " + he(e.selected.length - 1), 3))
                ]),
                _: 1
              }, 8, ["size", "type"])) : z("v-if", !0)
            ], 2)) : z("v-if", !0),
            z(" <div> "),
            e.collapseTags ? z("v-if", !0) : (T(), H(io, {
              key: 1,
              onAfterLeave: e.resetInputHeight
            }, {
              default: K(() => [
                D("span", {
                  class: k([
                    e.nsSelect.b("tags-wrapper"),
                    { "has-prefix": e.prefixWidth && e.selected.length }
                  ])
                }, [
                  (T(!0), L(Je, null, Bo(e.selected, (u) => (T(), H(i, {
                    key: e.getValueKey(u),
                    closable: !e.selectDisabled && !u.isDisabled,
                    size: e.collapseTagSize,
                    hit: u.hitState,
                    type: e.tagType,
                    "disable-transitions": "",
                    onClose: (f) => e.deleteTag(f, u)
                  }, {
                    default: K(() => [
                      D("span", {
                        class: k(e.nsSelect.e("tags-text")),
                        style: me({ maxWidth: e.inputWidth - 75 + "px" })
                      }, he(u.currentLabel), 7)
                    ]),
                    _: 2
                  }, 1032, ["closable", "size", "hit", "type", "onClose"]))), 128))
                ], 2)
              ]),
              _: 1
            }, 8, ["onAfterLeave"])),
            z(" </div> "),
            e.filterable ? Ae((T(), L("input", {
              key: 2,
              ref: "input",
              "onUpdate:modelValue": t[1] || (t[1] = (u) => e.query = u),
              type: "text",
              class: k([e.nsSelect.e("input"), e.nsSelect.is(e.selectSize)]),
              disabled: e.selectDisabled,
              autocomplete: e.autocomplete,
              style: me({
                marginLeft: e.prefixWidth && !e.selected.length || e.tagInMultiLine ? `${e.prefixWidth}px` : "",
                flexGrow: 1,
                width: `${e.inputLength / (e.inputWidth - 32)}%`,
                maxWidth: `${e.inputWidth - 42}px`
              }),
              onFocus: t[2] || (t[2] = (...u) => e.handleFocus && e.handleFocus(...u)),
              onBlur: t[3] || (t[3] = (...u) => e.handleBlur && e.handleBlur(...u)),
              onKeyup: t[4] || (t[4] = (...u) => e.managePlaceholder && e.managePlaceholder(...u)),
              onKeydown: [
                t[5] || (t[5] = (...u) => e.resetInputState && e.resetInputState(...u)),
                t[6] || (t[6] = Ue(Qe((u) => e.navigateOptions("next"), ["prevent"]), ["down"])),
                t[7] || (t[7] = Ue(Qe((u) => e.navigateOptions("prev"), ["prevent"]), ["up"])),
                t[8] || (t[8] = Ue((...u) => e.handleKeydownEscape && e.handleKeydownEscape(...u), ["esc"])),
                t[9] || (t[9] = Ue(Qe((...u) => e.selectOption && e.selectOption(...u), ["stop", "prevent"]), ["enter"])),
                t[10] || (t[10] = Ue((...u) => e.deletePrevTag && e.deletePrevTag(...u), ["delete"])),
                t[11] || (t[11] = Ue((u) => e.visible = !1, ["tab"]))
              ],
              onCompositionstart: t[12] || (t[12] = (...u) => e.handleComposition && e.handleComposition(...u)),
              onCompositionupdate: t[13] || (t[13] = (...u) => e.handleComposition && e.handleComposition(...u)),
              onCompositionend: t[14] || (t[14] = (...u) => e.handleComposition && e.handleComposition(...u)),
              onInput: t[15] || (t[15] = (...u) => e.debouncedQueryChange && e.debouncedQueryChange(...u))
            }, null, 46, ab)), [
              [Ts, e.query]
            ]) : z("v-if", !0)
          ], 6)) : z("v-if", !0),
          ge(c, {
            id: e.id,
            ref: "reference",
            modelValue: e.selectedLabel,
            "onUpdate:modelValue": t[16] || (t[16] = (u) => e.selectedLabel = u),
            type: "text",
            placeholder: e.currentPlaceholder,
            name: e.name,
            autocomplete: e.autocomplete,
            size: e.selectSize,
            disabled: e.selectDisabled,
            readonly: e.readonly,
            "validate-event": !1,
            class: k([e.nsSelect.is("focus", e.visible)]),
            tabindex: e.multiple && e.filterable ? -1 : void 0,
            onFocus: e.handleFocus,
            onBlur: e.handleBlur,
            onInput: e.debouncedOnInputChange,
            onPaste: e.debouncedOnInputChange,
            onCompositionstart: e.handleComposition,
            onCompositionupdate: e.handleComposition,
            onCompositionend: e.handleComposition,
            onKeydown: [
              t[17] || (t[17] = Ue(Qe((u) => e.navigateOptions("next"), ["stop", "prevent"]), ["down"])),
              t[18] || (t[18] = Ue(Qe((u) => e.navigateOptions("prev"), ["stop", "prevent"]), ["up"])),
              Ue(Qe(e.selectOption, ["stop", "prevent"]), ["enter"]),
              Ue(e.handleKeydownEscape, ["esc"]),
              t[19] || (t[19] = Ue((u) => e.visible = !1, ["tab"]))
            ]
          }, Cs({
            suffix: K(() => [
              e.iconComponent && !e.showClose ? (T(), H(l, {
                key: 0,
                class: k([e.nsSelect.e("caret"), e.nsSelect.e("icon"), e.iconReverse])
              }, {
                default: K(() => [
                  (T(), H(Ye(e.iconComponent)))
                ]),
                _: 1
              }, 8, ["class"])) : z("v-if", !0),
              e.showClose && e.clearIcon ? (T(), H(l, {
                key: 1,
                class: k([e.nsSelect.e("caret"), e.nsSelect.e("icon")]),
                onClick: e.handleClearClick
              }, {
                default: K(() => [
                  (T(), H(Ye(e.clearIcon)))
                ]),
                _: 1
              }, 8, ["class", "onClick"])) : z("v-if", !0)
            ]),
            _: 2
          }, [
            e.$slots.prefix ? {
              name: "prefix",
              fn: K(() => [
                D("div", ib, [
                  Z(e.$slots, "prefix")
                ])
              ])
            } : void 0
          ]), 1032, ["id", "modelValue", "placeholder", "name", "autocomplete", "size", "disabled", "readonly", "class", "tabindex", "onFocus", "onBlur", "onInput", "onPaste", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onKeydown"])
        ], 32)
      ]),
      content: K(() => [
        ge(m, null, {
          default: K(() => [
            Ae(ge(v, {
              ref: "scrollbar",
              tag: "ul",
              "wrap-class": e.nsSelect.be("dropdown", "wrap"),
              "view-class": e.nsSelect.be("dropdown", "list"),
              class: k([
                e.nsSelect.is("empty", !e.allowCreate && !!e.query && e.filteredOptionsCount === 0)
              ])
            }, {
              default: K(() => [
                e.showNewOption ? (T(), H(p, {
                  key: 0,
                  value: e.query,
                  created: !0
                }, null, 8, ["value"])) : z("v-if", !0),
                Z(e.$slots, "default")
              ]),
              _: 3
            }, 8, ["wrap-class", "view-class", "class"]), [
              [gn, e.options.size > 0 && !e.loading]
            ]),
            e.emptyText && (!e.allowCreate || e.loading || e.allowCreate && e.options.size === 0) ? (T(), L(Je, { key: 0 }, [
              e.$slots.empty ? Z(e.$slots, "empty", { key: 0 }) : (T(), L("p", {
                key: 1,
                class: k(e.nsSelect.be("dropdown", "empty"))
              }, he(e.emptyText), 3))
            ], 64)) : z("v-if", !0)
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["visible", "placement", "teleported", "popper-class", "effect", "transition", "persistent", "onShow"])
  ], 34)), [
    [g, e.handleClose, e.popperPaneRef]
  ]);
}
var lb = /* @__PURE__ */ ae(rb, [["render", sb], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/select.vue"]]);
const ub = j({
  name: "ElOptionGroup",
  componentName: "ElOptionGroup",
  props: {
    label: String,
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const t = re("select"), n = I(!0), o = Pe(), r = I([]);
    Xe(us, mn({
      ...so(e)
    }));
    const a = oe(Co);
    Te(() => {
      r.value = i(o.subTree);
    });
    const i = (l) => {
      const c = [];
      return Array.isArray(l.children) && l.children.forEach((p) => {
        var v;
        p.type && p.type.name === "ElOption" && p.component && p.component.proxy ? c.push(p.component.proxy) : (v = p.children) != null && v.length && c.push(...i(p));
      }), c;
    }, { groupQueryChange: s } = sn(a);
    return R(s, () => {
      n.value = r.value.some((l) => l.visible === !0);
    }, { flush: "post" }), {
      visible: n,
      ns: t
    };
  }
});
function cb(e, t, n, o, r, a) {
  return Ae((T(), L("ul", {
    class: k(e.ns.be("group", "wrap"))
  }, [
    D("li", {
      class: k(e.ns.be("group", "title"))
    }, he(e.label), 3),
    D("li", null, [
      D("ul", {
        class: k(e.ns.b("group"))
      }, [
        Z(e.$slots, "default")
      ], 2)
    ])
  ], 2)), [
    [gn, e.visible]
  ]);
}
var cs = /* @__PURE__ */ ae(ub, [["render", cb], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/option-group.vue"]]);
const db = Ct(lb, {
  Option: Or,
  OptionGroup: cs
}), fb = Bn(Or);
Bn(cs);
const Ub = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
};
const pb = (e) => typeof e < "u";
function vb(e) {
  return JSON.parse(JSON.stringify(e));
}
function qa(e, t, n, o = {}) {
  var r, a, i;
  const {
    clone: s = !1,
    passive: l = !1,
    eventName: c,
    deep: p = !1,
    defaultValue: v,
    shouldEmit: m
  } = o, g = Pe(), u = n || (g == null ? void 0 : g.emit) || ((r = g == null ? void 0 : g.$emit) == null ? void 0 : r.bind(g)) || ((i = (a = g == null ? void 0 : g.proxy) == null ? void 0 : a.$emit) == null ? void 0 : i.bind(g == null ? void 0 : g.proxy));
  let f = c;
  t || (t = "modelValue"), f = f || `update:${t.toString()}`;
  const b = (A) => s ? typeof s == "function" ? s(A) : vb(A) : A, h = () => pb(e[t]) ? b(e[t]) : v, _ = (A) => {
    m ? m(A) && u(f, A) : u(f, A);
  };
  if (l) {
    const A = h(), O = I(A);
    return R(
      () => e[t],
      (x) => O.value = b(x)
    ), R(
      O,
      (x) => {
        (x !== e[t] || p) && _(x);
      },
      { deep: p }
    ), O;
  } else
    return S({
      get() {
        return h();
      },
      set(A) {
        _(A);
      }
    });
}
const hb = (...e) => {
  const t = Pe().proxy.$props, n = /* @__PURE__ */ Object.create(null);
  for (const o of e)
    if (typeof o == "string")
      n[o] = qa(t, o, void 0, { eventName: `update:${o}`, passive: !0 });
    else {
      const [r, a = r, i = `update:${r}`, s = {}] = o;
      n[r] = qa(t, a, void 0, { eventName: i, passive: !0, ...s });
    }
  return n;
}, qb = /* @__PURE__ */ j({
  __name: "Select",
  props: {
    modelValue: null,
    options: null
  },
  emits: ["update:modelValue"],
  setup(e) {
    const { modelValue: t } = hb("modelValue");
    return (n, o) => {
      const r = fb, a = db;
      return T(), H(a, {
        modelValue: d(t),
        "onUpdate:modelValue": o[0] || (o[0] = (i) => an(t) ? t.value = i : null)
      }, {
        default: K(() => [
          (T(!0), L(Je, null, Bo(e.options, (i, s) => (T(), H(r, {
            key: s,
            label: i.label,
            value: i.value
          }, null, 8, ["label", "value"]))), 128))
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
}), Gb = /* @__PURE__ */ j({
  __name: "Checkbox",
  props: {
    label: null
  },
  setup(e) {
    return (t, n) => {
      const o = W0;
      return T(), H(o, Lt(t.$attrs, { label: e.label }), null, 16, ["label"]);
    };
  }
});
export {
  cr as $,
  vr as A,
  ia as B,
  Ei as C,
  kg as D,
  Jm as E,
  Vb as F,
  C0 as G,
  it as H,
  Ep as I,
  Wo as J,
  Pb as K,
  Ct as L,
  un as M,
  xn as N,
  lm as O,
  jb as P,
  In as Q,
  hg as R,
  Mi as S,
  Zt as T,
  be as U,
  pr as V,
  Tb as W,
  xi as X,
  bm as Y,
  ur as Z,
  ae as _,
  jf as a,
  oo as a0,
  mo as a1,
  _b as a2,
  Bn as a3,
  Ze as a4,
  Hb as a5,
  no as a6,
  zb as a7,
  Bb as a8,
  Db as a9,
  Q0 as aA,
  $i as aB,
  Wb as aC,
  Kb as aD,
  mb as aE,
  bb as aF,
  et as aa,
  W0 as ab,
  Ti as ac,
  Fb as ad,
  rn as ae,
  Mn as af,
  qg as ag,
  Ub as ah,
  hb as ai,
  yb as aj,
  Sb as ak,
  wb as al,
  Gb as am,
  qb as an,
  ci as ao,
  Nb as ap,
  Rb as aq,
  Ob as ar,
  Ab as as,
  Ho as at,
  yp as au,
  $r as av,
  ls as aw,
  $b as ax,
  Cb as ay,
  lr as az,
  Oo as b,
  Re as c,
  Vo as d,
  Eb as e,
  Gt as f,
  Le as g,
  ce as h,
  ut as i,
  Ib as j,
  Lb as k,
  Mb as l,
  xb as m,
  fe as n,
  yo as o,
  Y as p,
  wt as q,
  kb as r,
  vo as s,
  bp as t,
  re as u,
  ha as v,
  hr as w,
  wn as x,
  cn as y,
  wo as z
};
