import * as qa from "vue";
import { computed as T, onMounted as Ae, nextTick as be, getCurrentScope as Zr, onScopeDispose as Qr, isRef as Ce, reactive as qn, unref as a, getCurrentInstance as Rt, toRefs as Ee, toValue as Se, ref as $, watch as ce, watchEffect as Me, inject as ea, provide as ta, Fragment as me, shallowRef as Pn, readonly as Ol, effectScope as ql, customRef as is, onBeforeUnmount as Dl, toHandlerKey as ss, camelize as kl, toRef as us, onUnmounted as to, defineComponent as O, h as At, Comment as Pl, mergeProps as M, cloneVNode as ds, renderSlot as D, createBlock as S, openBlock as b, withCtx as p, normalizeStyle as kt, createVNode as y, createCommentVNode as ee, Teleport as Al, normalizeProps as Oe, guardReactiveProps as Be, markRaw as cs, createElementBlock as K, renderList as Ve, watchPostEffect as Il, shallowReadonly as mn, mergeDefaults as no, withModifiers as Pe, resolveDynamicComponent as oo, withKeys as ut, createElementVNode as F, createTextVNode as H, toDisplayString as We, useSlots as fs, toHandlers as ps, withDirectives as ms, normalizeClass as Te, vModelText as vs, mergeModels as Io, useModel as sn, defineAsyncComponent as gs, resolveComponent as ys } from "vue";
const Tl = Symbol(), X = {
  STRING: "string",
  INTEGER: "integer",
  BOOLEAN: "boolean",
  OBJECT: "object",
  ARRAY: "array",
  NULL: "null",
  NUMBER: "number"
}, Fe = {
  ALL_OF: "allOf",
  ANY_OF: "anyOf",
  ONE_OF: "oneOf"
}, Pt = "$ref";
X.STRING + "", X.INTEGER + "", X.BOOLEAN + "", X.ARRAY + "", X.OBJECT + "", X.NUMBER + "", X.NULL + "";
const hs = 300, bs = {
  handle: ".handle",
  animation: hs,
  bubbleScroll: !0
};
function _s(e, t) {
  return Zr() ? (Qr(e, t), !0) : !1;
}
const ws = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const xs = (e) => typeof e < "u";
function Cs(e) {
  return Rt();
}
function Ss(e) {
  return Ce(e) ? qn(new Proxy({}, {
    get(t, n, o) {
      return a(Reflect.get(e.value, n, o));
    },
    set(t, n, o) {
      return Ce(e.value[n]) && !Ce(o) ? e.value[n].value = o : e.value[n] = o, !0;
    },
    deleteProperty(t, n) {
      return Reflect.deleteProperty(e.value, n);
    },
    has(t, n) {
      return Reflect.has(e.value, n);
    },
    ownKeys() {
      return Object.keys(e.value);
    },
    getOwnPropertyDescriptor() {
      return {
        enumerable: !0,
        configurable: !0
      };
    }
  })) : qn(e);
}
function Es(e) {
  return Ss(T(e));
}
function ve(e, ...t) {
  const n = t.flat(), o = n[0];
  return Es(() => Object.fromEntries(typeof o == "function" ? Object.entries(Ee(e)).filter(([r, l]) => !o(Se(l), r)) : Object.entries(Ee(e)).filter((r) => !n.includes(r[0]))));
}
function Os(e, t = !0, n) {
  Cs() ? Ae(e, n) : t ? e() : be(e);
}
const qs = ws ? window.document : void 0;
function Ds(e) {
  var t;
  const n = Se(e);
  return (t = n?.$el) !== null && t !== void 0 ? t : n;
}
function ks(e) {
  return JSON.parse(JSON.stringify(e));
}
// @__NO_SIDE_EFFECTS__
function Ps(e, t, n, o = {}) {
  var r, l;
  const { clone: i = !1, passive: u = !1, eventName: s, deep: d = !1, defaultValue: c, shouldEmit: f } = o, m = Rt(), v = n || m?.emit || (m == null || (r = m.$emit) === null || r === void 0 ? void 0 : r.bind(m)) || (m == null || (l = m.proxy) === null || l === void 0 || (l = l.$emit) === null || l === void 0 ? void 0 : l.bind(m?.proxy));
  let g = s;
  g = g || `update:${t.toString()}`;
  const _ = (A) => i ? typeof i == "function" ? i(A) : ks(A) : A, x = () => xs(e[t]) ? _(e[t]) : c, k = (A) => {
    f ? f(A) && v(g, A) : v(g, A);
  };
  if (u) {
    const A = $(x());
    let I = !1;
    return ce(() => e[t], (C) => {
      I || (I = !0, A.value = _(C), be(() => I = !1));
    }), ce(A, (C) => {
      !I && (C !== e[t] || d) && k(C);
    }, { deep: d }), A;
  } else return T({
    get() {
      return x();
    },
    set(A) {
      k(A);
    }
  });
}
/**!
 * Sortable 1.15.6
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function Da(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    t && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), n.push.apply(n, o);
  }
  return n;
}
function xt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Da(Object(n), !0).forEach(function(o) {
      As(e, o, n[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Da(Object(n)).forEach(function(o) {
      Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(n, o));
    });
  }
  return e;
}
function Eo(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Eo = function(t) {
    return typeof t;
  } : Eo = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Eo(e);
}
function As(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Tt() {
  return Tt = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
    }
    return e;
  }, Tt.apply(this, arguments);
}
function Is(e, t) {
  if (e == null) return {};
  var n = {}, o = Object.keys(e), r, l;
  for (l = 0; l < o.length; l++)
    r = o[l], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
function Ts(e, t) {
  if (e == null) return {};
  var n = Is(e, t), o, r;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    for (r = 0; r < l.length; r++)
      o = l[r], !(t.indexOf(o) >= 0) && Object.prototype.propertyIsEnumerable.call(e, o) && (n[o] = e[o]);
  }
  return n;
}
var Bs = "1.15.6";
function It(e) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(e);
}
var Mt = It(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), ro = It(/Edge/i), ka = It(/firefox/i), Gn = It(/safari/i) && !It(/chrome/i) && !It(/android/i), na = It(/iP(ad|od|hone)/i), Bl = It(/chrome/i) && It(/android/i), $l = {
  capture: !1,
  passive: !1
};
function se(e, t, n) {
  e.addEventListener(t, n, !Mt && $l);
}
function le(e, t, n) {
  e.removeEventListener(t, n, !Mt && $l);
}
function To(e, t) {
  if (t) {
    if (t[0] === ">" && (t = t.substring(1)), e)
      try {
        if (e.matches)
          return e.matches(t);
        if (e.msMatchesSelector)
          return e.msMatchesSelector(t);
        if (e.webkitMatchesSelector)
          return e.webkitMatchesSelector(t);
      } catch {
        return !1;
      }
    return !1;
  }
}
function Rl(e) {
  return e.host && e !== document && e.host.nodeType ? e.host : e.parentNode;
}
function mt(e, t, n, o) {
  if (e) {
    n = n || document;
    do {
      if (t != null && (t[0] === ">" ? e.parentNode === n && To(e, t) : To(e, t)) || o && e === n)
        return e;
      if (e === n) break;
    } while (e = Rl(e));
  }
  return null;
}
var Pa = /\s+/g;
function nt(e, t, n) {
  if (e && t)
    if (e.classList)
      e.classList[n ? "add" : "remove"](t);
    else {
      var o = (" " + e.className + " ").replace(Pa, " ").replace(" " + t + " ", " ");
      e.className = (o + (n ? " " + t : "")).replace(Pa, " ");
    }
}
function Z(e, t, n) {
  var o = e && e.style;
  if (o) {
    if (n === void 0)
      return document.defaultView && document.defaultView.getComputedStyle ? n = document.defaultView.getComputedStyle(e, "") : e.currentStyle && (n = e.currentStyle), t === void 0 ? n : n[t];
    !(t in o) && t.indexOf("webkit") === -1 && (t = "-webkit-" + t), o[t] = n + (typeof n == "string" ? "" : "px");
  }
}
function En(e, t) {
  var n = "";
  if (typeof e == "string")
    n = e;
  else
    do {
      var o = Z(e, "transform");
      o && o !== "none" && (n = o + " " + n);
    } while (!t && (e = e.parentNode));
  var r = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return r && new r(n);
}
function Ml(e, t, n) {
  if (e) {
    var o = e.getElementsByTagName(t), r = 0, l = o.length;
    if (n)
      for (; r < l; r++)
        n(o[r], r);
    return o;
  }
  return [];
}
function _t() {
  var e = document.scrollingElement;
  return e || document.documentElement;
}
function ke(e, t, n, o, r) {
  if (!(!e.getBoundingClientRect && e !== window)) {
    var l, i, u, s, d, c, f;
    if (e !== window && e.parentNode && e !== _t() ? (l = e.getBoundingClientRect(), i = l.top, u = l.left, s = l.bottom, d = l.right, c = l.height, f = l.width) : (i = 0, u = 0, s = window.innerHeight, d = window.innerWidth, c = window.innerHeight, f = window.innerWidth), (t || n) && e !== window && (r = r || e.parentNode, !Mt))
      do
        if (r && r.getBoundingClientRect && (Z(r, "transform") !== "none" || n && Z(r, "position") !== "static")) {
          var m = r.getBoundingClientRect();
          i -= m.top + parseInt(Z(r, "border-top-width")), u -= m.left + parseInt(Z(r, "border-left-width")), s = i + l.height, d = u + l.width;
          break;
        }
      while (r = r.parentNode);
    if (o && e !== window) {
      var v = En(r || e), g = v && v.a, _ = v && v.d;
      v && (i /= _, u /= g, f /= g, c /= _, s = i + c, d = u + f);
    }
    return {
      top: i,
      left: u,
      bottom: s,
      right: d,
      width: f,
      height: c
    };
  }
}
function Aa(e, t, n) {
  for (var o = Ut(e, !0), r = ke(e)[t]; o; ) {
    var l = ke(o)[n], i = void 0;
    if (i = r >= l, !i) return o;
    if (o === _t()) break;
    o = Ut(o, !1);
  }
  return !1;
}
function Dn(e, t, n, o) {
  for (var r = 0, l = 0, i = e.children; l < i.length; ) {
    if (i[l].style.display !== "none" && i[l] !== Q.ghost && (o || i[l] !== Q.dragged) && mt(i[l], n.draggable, e, !1)) {
      if (r === t)
        return i[l];
      r++;
    }
    l++;
  }
  return null;
}
function oa(e, t) {
  for (var n = e.lastElementChild; n && (n === Q.ghost || Z(n, "display") === "none" || t && !To(n, t)); )
    n = n.previousElementSibling;
  return n || null;
}
function st(e, t) {
  var n = 0;
  if (!e || !e.parentNode)
    return -1;
  for (; e = e.previousElementSibling; )
    e.nodeName.toUpperCase() !== "TEMPLATE" && e !== Q.clone && (!t || To(e, t)) && n++;
  return n;
}
function Ia(e) {
  var t = 0, n = 0, o = _t();
  if (e)
    do {
      var r = En(e), l = r.a, i = r.d;
      t += e.scrollLeft * l, n += e.scrollTop * i;
    } while (e !== o && (e = e.parentNode));
  return [t, n];
}
function $s(e, t) {
  for (var n in e)
    if (e.hasOwnProperty(n)) {
      for (var o in t)
        if (t.hasOwnProperty(o) && t[o] === e[n][o]) return Number(n);
    }
  return -1;
}
function Ut(e, t) {
  if (!e || !e.getBoundingClientRect) return _t();
  var n = e, o = !1;
  do
    if (n.clientWidth < n.scrollWidth || n.clientHeight < n.scrollHeight) {
      var r = Z(n);
      if (n.clientWidth < n.scrollWidth && (r.overflowX == "auto" || r.overflowX == "scroll") || n.clientHeight < n.scrollHeight && (r.overflowY == "auto" || r.overflowY == "scroll")) {
        if (!n.getBoundingClientRect || n === document.body) return _t();
        if (o || t) return n;
        o = !0;
      }
    }
  while (n = n.parentNode);
  return _t();
}
function Rs(e, t) {
  if (e && t)
    for (var n in t)
      t.hasOwnProperty(n) && (e[n] = t[n]);
  return e;
}
function rr(e, t) {
  return Math.round(e.top) === Math.round(t.top) && Math.round(e.left) === Math.round(t.left) && Math.round(e.height) === Math.round(t.height) && Math.round(e.width) === Math.round(t.width);
}
var Hn;
function Nl(e, t) {
  return function() {
    if (!Hn) {
      var n = arguments, o = this;
      n.length === 1 ? e.call(o, n[0]) : e.apply(o, n), Hn = setTimeout(function() {
        Hn = void 0;
      }, t);
    }
  };
}
function Ms() {
  clearTimeout(Hn), Hn = void 0;
}
function Fl(e, t, n) {
  e.scrollLeft += t, e.scrollTop += n;
}
function Vl(e) {
  var t = window.Polymer, n = window.jQuery || window.Zepto;
  return t && t.dom ? t.dom(e).cloneNode(!0) : n ? n(e).clone(!0)[0] : e.cloneNode(!0);
}
function Ll(e, t, n) {
  var o = {};
  return Array.from(e.children).forEach(function(r) {
    var l, i, u, s;
    if (!(!mt(r, t.draggable, e, !1) || r.animated || r === n)) {
      var d = ke(r);
      o.left = Math.min((l = o.left) !== null && l !== void 0 ? l : 1 / 0, d.left), o.top = Math.min((i = o.top) !== null && i !== void 0 ? i : 1 / 0, d.top), o.right = Math.max((u = o.right) !== null && u !== void 0 ? u : -1 / 0, d.right), o.bottom = Math.max((s = o.bottom) !== null && s !== void 0 ? s : -1 / 0, d.bottom);
    }
  }), o.width = o.right - o.left, o.height = o.bottom - o.top, o.x = o.left, o.y = o.top, o;
}
var Qe = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function Ns() {
  var e = [], t;
  return {
    captureAnimationState: function() {
      if (e = [], !!this.options.animation) {
        var o = [].slice.call(this.el.children);
        o.forEach(function(r) {
          if (!(Z(r, "display") === "none" || r === Q.ghost)) {
            e.push({
              target: r,
              rect: ke(r)
            });
            var l = xt({}, e[e.length - 1].rect);
            if (r.thisAnimationDuration) {
              var i = En(r, !0);
              i && (l.top -= i.f, l.left -= i.e);
            }
            r.fromRect = l;
          }
        });
      }
    },
    addAnimationState: function(o) {
      e.push(o);
    },
    removeAnimationState: function(o) {
      e.splice($s(e, {
        target: o
      }), 1);
    },
    animateAll: function(o) {
      var r = this;
      if (!this.options.animation) {
        clearTimeout(t), typeof o == "function" && o();
        return;
      }
      var l = !1, i = 0;
      e.forEach(function(u) {
        var s = 0, d = u.target, c = d.fromRect, f = ke(d), m = d.prevFromRect, v = d.prevToRect, g = u.rect, _ = En(d, !0);
        _ && (f.top -= _.f, f.left -= _.e), d.toRect = f, d.thisAnimationDuration && rr(m, f) && !rr(c, f) && // Make sure animatingRect is on line between toRect & fromRect
        (g.top - f.top) / (g.left - f.left) === (c.top - f.top) / (c.left - f.left) && (s = Vs(g, m, v, r.options)), rr(f, c) || (d.prevFromRect = c, d.prevToRect = f, s || (s = r.options.animation), r.animate(d, g, f, s)), s && (l = !0, i = Math.max(i, s), clearTimeout(d.animationResetTimer), d.animationResetTimer = setTimeout(function() {
          d.animationTime = 0, d.prevFromRect = null, d.fromRect = null, d.prevToRect = null, d.thisAnimationDuration = null;
        }, s), d.thisAnimationDuration = s);
      }), clearTimeout(t), l ? t = setTimeout(function() {
        typeof o == "function" && o();
      }, i) : typeof o == "function" && o(), e = [];
    },
    animate: function(o, r, l, i) {
      if (i) {
        Z(o, "transition", ""), Z(o, "transform", "");
        var u = En(this.el), s = u && u.a, d = u && u.d, c = (r.left - l.left) / (s || 1), f = (r.top - l.top) / (d || 1);
        o.animatingX = !!c, o.animatingY = !!f, Z(o, "transform", "translate3d(" + c + "px," + f + "px,0)"), this.forRepaintDummy = Fs(o), Z(o, "transition", "transform " + i + "ms" + (this.options.easing ? " " + this.options.easing : "")), Z(o, "transform", "translate3d(0,0,0)"), typeof o.animated == "number" && clearTimeout(o.animated), o.animated = setTimeout(function() {
          Z(o, "transition", ""), Z(o, "transform", ""), o.animated = !1, o.animatingX = !1, o.animatingY = !1;
        }, i);
      }
    }
  };
}
function Fs(e) {
  return e.offsetWidth;
}
function Vs(e, t, n, o) {
  return Math.sqrt(Math.pow(t.top - e.top, 2) + Math.pow(t.left - e.left, 2)) / Math.sqrt(Math.pow(t.top - n.top, 2) + Math.pow(t.left - n.left, 2)) * o.animation;
}
var vn = [], ar = {
  initializeByDefault: !0
}, ao = {
  mount: function(t) {
    for (var n in ar)
      ar.hasOwnProperty(n) && !(n in t) && (t[n] = ar[n]);
    vn.forEach(function(o) {
      if (o.pluginName === t.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(t.pluginName, " more than once");
    }), vn.push(t);
  },
  pluginEvent: function(t, n, o) {
    var r = this;
    this.eventCanceled = !1, o.cancel = function() {
      r.eventCanceled = !0;
    };
    var l = t + "Global";
    vn.forEach(function(i) {
      n[i.pluginName] && (n[i.pluginName][l] && n[i.pluginName][l](xt({
        sortable: n
      }, o)), n.options[i.pluginName] && n[i.pluginName][t] && n[i.pluginName][t](xt({
        sortable: n
      }, o)));
    });
  },
  initializePlugins: function(t, n, o, r) {
    vn.forEach(function(u) {
      var s = u.pluginName;
      if (!(!t.options[s] && !u.initializeByDefault)) {
        var d = new u(t, n, t.options);
        d.sortable = t, d.options = t.options, t[s] = d, Tt(o, d.defaults);
      }
    });
    for (var l in t.options)
      if (t.options.hasOwnProperty(l)) {
        var i = this.modifyOption(t, l, t.options[l]);
        typeof i < "u" && (t.options[l] = i);
      }
  },
  getEventProperties: function(t, n) {
    var o = {};
    return vn.forEach(function(r) {
      typeof r.eventProperties == "function" && Tt(o, r.eventProperties.call(n[r.pluginName], t));
    }), o;
  },
  modifyOption: function(t, n, o) {
    var r;
    return vn.forEach(function(l) {
      t[l.pluginName] && l.optionListeners && typeof l.optionListeners[n] == "function" && (r = l.optionListeners[n].call(t[l.pluginName], o));
    }), r;
  }
};
function Ls(e) {
  var t = e.sortable, n = e.rootEl, o = e.name, r = e.targetEl, l = e.cloneEl, i = e.toEl, u = e.fromEl, s = e.oldIndex, d = e.newIndex, c = e.oldDraggableIndex, f = e.newDraggableIndex, m = e.originalEvent, v = e.putSortable, g = e.extraEventProperties;
  if (t = t || n && n[Qe], !!t) {
    var _, x = t.options, k = "on" + o.charAt(0).toUpperCase() + o.substr(1);
    window.CustomEvent && !Mt && !ro ? _ = new CustomEvent(o, {
      bubbles: !0,
      cancelable: !0
    }) : (_ = document.createEvent("Event"), _.initEvent(o, !0, !0)), _.to = i || n, _.from = u || n, _.item = r || n, _.clone = l, _.oldIndex = s, _.newIndex = d, _.oldDraggableIndex = c, _.newDraggableIndex = f, _.originalEvent = m, _.pullMode = v ? v.lastPutMode : void 0;
    var A = xt(xt({}, g), ao.getEventProperties(o, t));
    for (var I in A)
      _[I] = A[I];
    n && n.dispatchEvent(_), x[k] && x[k].call(t, _);
  }
}
var zs = ["evt"], He = function(t, n) {
  var o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = o.evt, l = Ts(o, zs);
  ao.pluginEvent.bind(Q)(t, n, xt({
    dragEl: N,
    parentEl: xe,
    ghostEl: te,
    rootEl: he,
    nextEl: nn,
    lastDownEl: Oo,
    cloneEl: _e,
    cloneHidden: jt,
    dragStarted: jn,
    putSortable: Ne,
    activeSortable: Q.active,
    originalEvent: r,
    oldIndex: Cn,
    oldDraggableIndex: Kn,
    newIndex: ot,
    newDraggableIndex: zt,
    hideGhostForTarget: Wl,
    unhideGhostForTarget: Gl,
    cloneNowHidden: function() {
      jt = !0;
    },
    cloneNowShown: function() {
      jt = !1;
    },
    dispatchSortableEvent: function(u) {
      Ue({
        sortable: n,
        name: u,
        originalEvent: r
      });
    }
  }, l));
};
function Ue(e) {
  Ls(xt({
    putSortable: Ne,
    cloneEl: _e,
    targetEl: N,
    rootEl: he,
    oldIndex: Cn,
    oldDraggableIndex: Kn,
    newIndex: ot,
    newDraggableIndex: zt
  }, e));
}
var N, xe, te, he, nn, Oo, _e, jt, Cn, ot, Kn, zt, po, Ne, wn = !1, Bo = !1, $o = [], Zt, ft, lr, ir, Ta, Ba, jn, gn, Yn, Xn = !1, mo = !1, qo, ze, sr = [], Ir = !1, Ro = [], zo = typeof document < "u", vo = na, $a = ro || Mt ? "cssFloat" : "float", js = zo && !Bl && !na && "draggable" in document.createElement("div"), zl = (function() {
  if (zo) {
    if (Mt)
      return !1;
    var e = document.createElement("x");
    return e.style.cssText = "pointer-events:auto", e.style.pointerEvents === "auto";
  }
})(), jl = function(t, n) {
  var o = Z(t), r = parseInt(o.width) - parseInt(o.paddingLeft) - parseInt(o.paddingRight) - parseInt(o.borderLeftWidth) - parseInt(o.borderRightWidth), l = Dn(t, 0, n), i = Dn(t, 1, n), u = l && Z(l), s = i && Z(i), d = u && parseInt(u.marginLeft) + parseInt(u.marginRight) + ke(l).width, c = s && parseInt(s.marginLeft) + parseInt(s.marginRight) + ke(i).width;
  if (o.display === "flex")
    return o.flexDirection === "column" || o.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (o.display === "grid")
    return o.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (l && u.float && u.float !== "none") {
    var f = u.float === "left" ? "left" : "right";
    return i && (s.clear === "both" || s.clear === f) ? "vertical" : "horizontal";
  }
  return l && (u.display === "block" || u.display === "flex" || u.display === "table" || u.display === "grid" || d >= r && o[$a] === "none" || i && o[$a] === "none" && d + c > r) ? "vertical" : "horizontal";
}, Us = function(t, n, o) {
  var r = o ? t.left : t.top, l = o ? t.right : t.bottom, i = o ? t.width : t.height, u = o ? n.left : n.top, s = o ? n.right : n.bottom, d = o ? n.width : n.height;
  return r === u || l === s || r + i / 2 === u + d / 2;
}, Ws = function(t, n) {
  var o;
  return $o.some(function(r) {
    var l = r[Qe].options.emptyInsertThreshold;
    if (!(!l || oa(r))) {
      var i = ke(r), u = t >= i.left - l && t <= i.right + l, s = n >= i.top - l && n <= i.bottom + l;
      if (u && s)
        return o = r;
    }
  }), o;
}, Ul = function(t) {
  function n(l, i) {
    return function(u, s, d, c) {
      var f = u.options.group.name && s.options.group.name && u.options.group.name === s.options.group.name;
      if (l == null && (i || f))
        return !0;
      if (l == null || l === !1)
        return !1;
      if (i && l === "clone")
        return l;
      if (typeof l == "function")
        return n(l(u, s, d, c), i)(u, s, d, c);
      var m = (i ? u : s).options.group.name;
      return l === !0 || typeof l == "string" && l === m || l.join && l.indexOf(m) > -1;
    };
  }
  var o = {}, r = t.group;
  (!r || Eo(r) != "object") && (r = {
    name: r
  }), o.name = r.name, o.checkPull = n(r.pull, !0), o.checkPut = n(r.put), o.revertClone = r.revertClone, t.group = o;
}, Wl = function() {
  !zl && te && Z(te, "display", "none");
}, Gl = function() {
  !zl && te && Z(te, "display", "");
};
zo && !Bl && document.addEventListener("click", function(e) {
  if (Bo)
    return e.preventDefault(), e.stopPropagation && e.stopPropagation(), e.stopImmediatePropagation && e.stopImmediatePropagation(), Bo = !1, !1;
}, !0);
var Qt = function(t) {
  if (N) {
    t = t.touches ? t.touches[0] : t;
    var n = Ws(t.clientX, t.clientY);
    if (n) {
      var o = {};
      for (var r in t)
        t.hasOwnProperty(r) && (o[r] = t[r]);
      o.target = o.rootEl = n, o.preventDefault = void 0, o.stopPropagation = void 0, n[Qe]._onDragOver(o);
    }
  }
}, Gs = function(t) {
  N && N.parentNode[Qe]._isOutsideThisEl(t.target);
};
function Q(e, t) {
  if (!(e && e.nodeType && e.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(e));
  this.el = e, this.options = t = Tt({}, t), e[Qe] = this;
  var n = {
    group: null,
    sort: !0,
    disabled: !1,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(e.nodeName) ? ">li" : ">*",
    swapThreshold: 1,
    // percentage; 0 <= x <= 1
    invertSwap: !1,
    // invert always
    invertedSwapThreshold: null,
    // will be set to same as swapThreshold if default
    removeCloneOnHide: !0,
    direction: function() {
      return jl(e, this.options);
    },
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    ignore: "a, img",
    filter: null,
    preventOnFilter: !0,
    animation: 0,
    easing: null,
    setData: function(i, u) {
      i.setData("Text", u.textContent);
    },
    dropBubble: !1,
    dragoverBubble: !1,
    dataIdAttr: "data-id",
    delay: 0,
    delayOnTouchOnly: !1,
    touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
    forceFallback: !1,
    fallbackClass: "sortable-fallback",
    fallbackOnBody: !1,
    fallbackTolerance: 0,
    fallbackOffset: {
      x: 0,
      y: 0
    },
    // Disabled on Safari: #1571; Enabled on Safari IOS: #2244
    supportPointer: Q.supportPointer !== !1 && "PointerEvent" in window && (!Gn || na),
    emptyInsertThreshold: 5
  };
  ao.initializePlugins(this, e, n);
  for (var o in n)
    !(o in t) && (t[o] = n[o]);
  Ul(t);
  for (var r in this)
    r.charAt(0) === "_" && typeof this[r] == "function" && (this[r] = this[r].bind(this));
  this.nativeDraggable = t.forceFallback ? !1 : js, this.nativeDraggable && (this.options.touchStartThreshold = 1), t.supportPointer ? se(e, "pointerdown", this._onTapStart) : (se(e, "mousedown", this._onTapStart), se(e, "touchstart", this._onTapStart)), this.nativeDraggable && (se(e, "dragover", this), se(e, "dragenter", this)), $o.push(this.el), t.store && t.store.get && this.sort(t.store.get(this) || []), Tt(this, Ns());
}
Q.prototype = /** @lends Sortable.prototype */
{
  constructor: Q,
  _isOutsideThisEl: function(t) {
    !this.el.contains(t) && t !== this.el && (gn = null);
  },
  _getDirection: function(t, n) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, t, n, N) : this.options.direction;
  },
  _onTapStart: function(t) {
    if (t.cancelable) {
      var n = this, o = this.el, r = this.options, l = r.preventOnFilter, i = t.type, u = t.touches && t.touches[0] || t.pointerType && t.pointerType === "touch" && t, s = (u || t).target, d = t.target.shadowRoot && (t.path && t.path[0] || t.composedPath && t.composedPath()[0]) || s, c = r.filter;
      if (eu(o), !N && !(/mousedown|pointerdown/.test(i) && t.button !== 0 || r.disabled) && !d.isContentEditable && !(!this.nativeDraggable && Gn && s && s.tagName.toUpperCase() === "SELECT") && (s = mt(s, r.draggable, o, !1), !(s && s.animated) && Oo !== s)) {
        if (Cn = st(s), Kn = st(s, r.draggable), typeof c == "function") {
          if (c.call(this, t, s, this)) {
            Ue({
              sortable: n,
              rootEl: d,
              name: "filter",
              targetEl: s,
              toEl: o,
              fromEl: o
            }), He("filter", n, {
              evt: t
            }), l && t.preventDefault();
            return;
          }
        } else if (c && (c = c.split(",").some(function(f) {
          if (f = mt(d, f.trim(), o, !1), f)
            return Ue({
              sortable: n,
              rootEl: f,
              name: "filter",
              targetEl: s,
              fromEl: o,
              toEl: o
            }), He("filter", n, {
              evt: t
            }), !0;
        }), c)) {
          l && t.preventDefault();
          return;
        }
        r.handle && !mt(d, r.handle, o, !1) || this._prepareDragStart(t, u, s);
      }
    }
  },
  _prepareDragStart: function(t, n, o) {
    var r = this, l = r.el, i = r.options, u = l.ownerDocument, s;
    if (o && !N && o.parentNode === l) {
      var d = ke(o);
      if (he = l, N = o, xe = N.parentNode, nn = N.nextSibling, Oo = o, po = i.group, Q.dragged = N, Zt = {
        target: N,
        clientX: (n || t).clientX,
        clientY: (n || t).clientY
      }, Ta = Zt.clientX - d.left, Ba = Zt.clientY - d.top, this._lastX = (n || t).clientX, this._lastY = (n || t).clientY, N.style["will-change"] = "all", s = function() {
        if (He("delayEnded", r, {
          evt: t
        }), Q.eventCanceled) {
          r._onDrop();
          return;
        }
        r._disableDelayedDragEvents(), !ka && r.nativeDraggable && (N.draggable = !0), r._triggerDragStart(t, n), Ue({
          sortable: r,
          name: "choose",
          originalEvent: t
        }), nt(N, i.chosenClass, !0);
      }, i.ignore.split(",").forEach(function(c) {
        Ml(N, c.trim(), ur);
      }), se(u, "dragover", Qt), se(u, "mousemove", Qt), se(u, "touchmove", Qt), i.supportPointer ? (se(u, "pointerup", r._onDrop), !this.nativeDraggable && se(u, "pointercancel", r._onDrop)) : (se(u, "mouseup", r._onDrop), se(u, "touchend", r._onDrop), se(u, "touchcancel", r._onDrop)), ka && this.nativeDraggable && (this.options.touchStartThreshold = 4, N.draggable = !0), He("delayStart", this, {
        evt: t
      }), i.delay && (!i.delayOnTouchOnly || n) && (!this.nativeDraggable || !(ro || Mt))) {
        if (Q.eventCanceled) {
          this._onDrop();
          return;
        }
        i.supportPointer ? (se(u, "pointerup", r._disableDelayedDrag), se(u, "pointercancel", r._disableDelayedDrag)) : (se(u, "mouseup", r._disableDelayedDrag), se(u, "touchend", r._disableDelayedDrag), se(u, "touchcancel", r._disableDelayedDrag)), se(u, "mousemove", r._delayedDragTouchMoveHandler), se(u, "touchmove", r._delayedDragTouchMoveHandler), i.supportPointer && se(u, "pointermove", r._delayedDragTouchMoveHandler), r._dragStartTimer = setTimeout(s, i.delay);
      } else
        s();
    }
  },
  _delayedDragTouchMoveHandler: function(t) {
    var n = t.touches ? t.touches[0] : t;
    Math.max(Math.abs(n.clientX - this._lastX), Math.abs(n.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    N && ur(N), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var t = this.el.ownerDocument;
    le(t, "mouseup", this._disableDelayedDrag), le(t, "touchend", this._disableDelayedDrag), le(t, "touchcancel", this._disableDelayedDrag), le(t, "pointerup", this._disableDelayedDrag), le(t, "pointercancel", this._disableDelayedDrag), le(t, "mousemove", this._delayedDragTouchMoveHandler), le(t, "touchmove", this._delayedDragTouchMoveHandler), le(t, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(t, n) {
    n = n || t.pointerType == "touch" && t, !this.nativeDraggable || n ? this.options.supportPointer ? se(document, "pointermove", this._onTouchMove) : n ? se(document, "touchmove", this._onTouchMove) : se(document, "mousemove", this._onTouchMove) : (se(N, "dragend", this), se(he, "dragstart", this._onDragStart));
    try {
      document.selection ? Do(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(t, n) {
    if (wn = !1, he && N) {
      He("dragStarted", this, {
        evt: n
      }), this.nativeDraggable && se(document, "dragover", Gs);
      var o = this.options;
      !t && nt(N, o.dragClass, !1), nt(N, o.ghostClass, !0), Q.active = this, t && this._appendGhost(), Ue({
        sortable: this,
        name: "start",
        originalEvent: n
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (ft) {
      this._lastX = ft.clientX, this._lastY = ft.clientY, Wl();
      for (var t = document.elementFromPoint(ft.clientX, ft.clientY), n = t; t && t.shadowRoot && (t = t.shadowRoot.elementFromPoint(ft.clientX, ft.clientY), t !== n); )
        n = t;
      if (N.parentNode[Qe]._isOutsideThisEl(t), n)
        do {
          if (n[Qe]) {
            var o = void 0;
            if (o = n[Qe]._onDragOver({
              clientX: ft.clientX,
              clientY: ft.clientY,
              target: t,
              rootEl: n
            }), o && !this.options.dragoverBubble)
              break;
          }
          t = n;
        } while (n = Rl(n));
      Gl();
    }
  },
  _onTouchMove: function(t) {
    if (Zt) {
      var n = this.options, o = n.fallbackTolerance, r = n.fallbackOffset, l = t.touches ? t.touches[0] : t, i = te && En(te, !0), u = te && i && i.a, s = te && i && i.d, d = vo && ze && Ia(ze), c = (l.clientX - Zt.clientX + r.x) / (u || 1) + (d ? d[0] - sr[0] : 0) / (u || 1), f = (l.clientY - Zt.clientY + r.y) / (s || 1) + (d ? d[1] - sr[1] : 0) / (s || 1);
      if (!Q.active && !wn) {
        if (o && Math.max(Math.abs(l.clientX - this._lastX), Math.abs(l.clientY - this._lastY)) < o)
          return;
        this._onDragStart(t, !0);
      }
      if (te) {
        i ? (i.e += c - (lr || 0), i.f += f - (ir || 0)) : i = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: c,
          f
        };
        var m = "matrix(".concat(i.a, ",").concat(i.b, ",").concat(i.c, ",").concat(i.d, ",").concat(i.e, ",").concat(i.f, ")");
        Z(te, "webkitTransform", m), Z(te, "mozTransform", m), Z(te, "msTransform", m), Z(te, "transform", m), lr = c, ir = f, ft = l;
      }
      t.cancelable && t.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!te) {
      var t = this.options.fallbackOnBody ? document.body : he, n = ke(N, !0, vo, !0, t), o = this.options;
      if (vo) {
        for (ze = t; Z(ze, "position") === "static" && Z(ze, "transform") === "none" && ze !== document; )
          ze = ze.parentNode;
        ze !== document.body && ze !== document.documentElement ? (ze === document && (ze = _t()), n.top += ze.scrollTop, n.left += ze.scrollLeft) : ze = _t(), sr = Ia(ze);
      }
      te = N.cloneNode(!0), nt(te, o.ghostClass, !1), nt(te, o.fallbackClass, !0), nt(te, o.dragClass, !0), Z(te, "transition", ""), Z(te, "transform", ""), Z(te, "box-sizing", "border-box"), Z(te, "margin", 0), Z(te, "top", n.top), Z(te, "left", n.left), Z(te, "width", n.width), Z(te, "height", n.height), Z(te, "opacity", "0.8"), Z(te, "position", vo ? "absolute" : "fixed"), Z(te, "zIndex", "100000"), Z(te, "pointerEvents", "none"), Q.ghost = te, t.appendChild(te), Z(te, "transform-origin", Ta / parseInt(te.style.width) * 100 + "% " + Ba / parseInt(te.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(t, n) {
    var o = this, r = t.dataTransfer, l = o.options;
    if (He("dragStart", this, {
      evt: t
    }), Q.eventCanceled) {
      this._onDrop();
      return;
    }
    He("setupClone", this), Q.eventCanceled || (_e = Vl(N), _e.removeAttribute("id"), _e.draggable = !1, _e.style["will-change"] = "", this._hideClone(), nt(_e, this.options.chosenClass, !1), Q.clone = _e), o.cloneId = Do(function() {
      He("clone", o), !Q.eventCanceled && (o.options.removeCloneOnHide || he.insertBefore(_e, N), o._hideClone(), Ue({
        sortable: o,
        name: "clone"
      }));
    }), !n && nt(N, l.dragClass, !0), n ? (Bo = !0, o._loopId = setInterval(o._emulateDragOver, 50)) : (le(document, "mouseup", o._onDrop), le(document, "touchend", o._onDrop), le(document, "touchcancel", o._onDrop), r && (r.effectAllowed = "move", l.setData && l.setData.call(o, r, N)), se(document, "drop", o), Z(N, "transform", "translateZ(0)")), wn = !0, o._dragStartId = Do(o._dragStarted.bind(o, n, t)), se(document, "selectstart", o), jn = !0, window.getSelection().removeAllRanges(), Gn && Z(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(t) {
    var n = this.el, o = t.target, r, l, i, u = this.options, s = u.group, d = Q.active, c = po === s, f = u.sort, m = Ne || d, v, g = this, _ = !1;
    if (Ir) return;
    function x(q, L) {
      He(q, g, xt({
        evt: t,
        isOwner: c,
        axis: v ? "vertical" : "horizontal",
        revert: i,
        dragRect: r,
        targetRect: l,
        canSort: f,
        fromSortable: m,
        target: o,
        completed: A,
        onMove: function(fe, $e) {
          return go(he, n, N, r, fe, ke(fe), t, $e);
        },
        changed: I
      }, L));
    }
    function k() {
      x("dragOverAnimationCapture"), g.captureAnimationState(), g !== m && m.captureAnimationState();
    }
    function A(q) {
      return x("dragOverCompleted", {
        insertion: q
      }), q && (c ? d._hideClone() : d._showClone(g), g !== m && (nt(N, Ne ? Ne.options.ghostClass : d.options.ghostClass, !1), nt(N, u.ghostClass, !0)), Ne !== g && g !== Q.active ? Ne = g : g === Q.active && Ne && (Ne = null), m === g && (g._ignoreWhileAnimating = o), g.animateAll(function() {
        x("dragOverAnimationComplete"), g._ignoreWhileAnimating = null;
      }), g !== m && (m.animateAll(), m._ignoreWhileAnimating = null)), (o === N && !N.animated || o === n && !o.animated) && (gn = null), !u.dragoverBubble && !t.rootEl && o !== document && (N.parentNode[Qe]._isOutsideThisEl(t.target), !q && Qt(t)), !u.dragoverBubble && t.stopPropagation && t.stopPropagation(), _ = !0;
    }
    function I() {
      ot = st(N), zt = st(N, u.draggable), Ue({
        sortable: g,
        name: "change",
        toEl: n,
        newIndex: ot,
        newDraggableIndex: zt,
        originalEvent: t
      });
    }
    if (t.preventDefault !== void 0 && t.cancelable && t.preventDefault(), o = mt(o, u.draggable, n, !0), x("dragOver"), Q.eventCanceled) return _;
    if (N.contains(t.target) || o.animated && o.animatingX && o.animatingY || g._ignoreWhileAnimating === o)
      return A(!1);
    if (Bo = !1, d && !u.disabled && (c ? f || (i = xe !== he) : Ne === this || (this.lastPutMode = po.checkPull(this, d, N, t)) && s.checkPut(this, d, N, t))) {
      if (v = this._getDirection(t, o) === "vertical", r = ke(N), x("dragOverValid"), Q.eventCanceled) return _;
      if (i)
        return xe = he, k(), this._hideClone(), x("revert"), Q.eventCanceled || (nn ? he.insertBefore(N, nn) : he.appendChild(N)), A(!0);
      var C = oa(n, u.draggable);
      if (!C || Xs(t, v, this) && !C.animated) {
        if (C === N)
          return A(!1);
        if (C && n === t.target && (o = C), o && (l = ke(o)), go(he, n, N, r, o, l, t, !!o) !== !1)
          return k(), C && C.nextSibling ? n.insertBefore(N, C.nextSibling) : n.appendChild(N), xe = n, I(), A(!0);
      } else if (C && Ys(t, v, this)) {
        var B = Dn(n, 0, u, !0);
        if (B === N)
          return A(!1);
        if (o = B, l = ke(o), go(he, n, N, r, o, l, t, !1) !== !1)
          return k(), n.insertBefore(N, B), xe = n, I(), A(!0);
      } else if (o.parentNode === n) {
        l = ke(o);
        var h = 0, w, P = N.parentNode !== n, E = !Us(N.animated && N.toRect || r, o.animated && o.toRect || l, v), R = v ? "top" : "left", V = Aa(o, "top", "top") || Aa(N, "top", "top"), z = V ? V.scrollTop : void 0;
        gn !== o && (w = l[R], Xn = !1, mo = !E && u.invertSwap || P), h = Js(t, o, l, v, E ? 1 : u.swapThreshold, u.invertedSwapThreshold == null ? u.swapThreshold : u.invertedSwapThreshold, mo, gn === o);
        var oe;
        if (h !== 0) {
          var ne = st(N);
          do
            ne -= h, oe = xe.children[ne];
          while (oe && (Z(oe, "display") === "none" || oe === te));
        }
        if (h === 0 || oe === o)
          return A(!1);
        gn = o, Yn = h;
        var ie = o.nextElementSibling, re = !1;
        re = h === 1;
        var G = go(he, n, N, r, o, l, t, re);
        if (G !== !1)
          return (G === 1 || G === -1) && (re = G === 1), Ir = !0, setTimeout(Ks, 30), k(), re && !ie ? n.appendChild(N) : o.parentNode.insertBefore(N, re ? ie : o), V && Fl(V, 0, z - V.scrollTop), xe = N.parentNode, w !== void 0 && !mo && (qo = Math.abs(w - ke(o)[R])), I(), A(!0);
      }
      if (n.contains(N))
        return A(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    le(document, "mousemove", this._onTouchMove), le(document, "touchmove", this._onTouchMove), le(document, "pointermove", this._onTouchMove), le(document, "dragover", Qt), le(document, "mousemove", Qt), le(document, "touchmove", Qt);
  },
  _offUpEvents: function() {
    var t = this.el.ownerDocument;
    le(t, "mouseup", this._onDrop), le(t, "touchend", this._onDrop), le(t, "pointerup", this._onDrop), le(t, "pointercancel", this._onDrop), le(t, "touchcancel", this._onDrop), le(document, "selectstart", this);
  },
  _onDrop: function(t) {
    var n = this.el, o = this.options;
    if (ot = st(N), zt = st(N, o.draggable), He("drop", this, {
      evt: t
    }), xe = N && N.parentNode, ot = st(N), zt = st(N, o.draggable), Q.eventCanceled) {
      this._nulling();
      return;
    }
    wn = !1, mo = !1, Xn = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), Tr(this.cloneId), Tr(this._dragStartId), this.nativeDraggable && (le(document, "drop", this), le(n, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), Gn && Z(document.body, "user-select", ""), Z(N, "transform", ""), t && (jn && (t.cancelable && t.preventDefault(), !o.dropBubble && t.stopPropagation()), te && te.parentNode && te.parentNode.removeChild(te), (he === xe || Ne && Ne.lastPutMode !== "clone") && _e && _e.parentNode && _e.parentNode.removeChild(_e), N && (this.nativeDraggable && le(N, "dragend", this), ur(N), N.style["will-change"] = "", jn && !wn && nt(N, Ne ? Ne.options.ghostClass : this.options.ghostClass, !1), nt(N, this.options.chosenClass, !1), Ue({
      sortable: this,
      name: "unchoose",
      toEl: xe,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: t
    }), he !== xe ? (ot >= 0 && (Ue({
      rootEl: xe,
      name: "add",
      toEl: xe,
      fromEl: he,
      originalEvent: t
    }), Ue({
      sortable: this,
      name: "remove",
      toEl: xe,
      originalEvent: t
    }), Ue({
      rootEl: xe,
      name: "sort",
      toEl: xe,
      fromEl: he,
      originalEvent: t
    }), Ue({
      sortable: this,
      name: "sort",
      toEl: xe,
      originalEvent: t
    })), Ne && Ne.save()) : ot !== Cn && ot >= 0 && (Ue({
      sortable: this,
      name: "update",
      toEl: xe,
      originalEvent: t
    }), Ue({
      sortable: this,
      name: "sort",
      toEl: xe,
      originalEvent: t
    })), Q.active && ((ot == null || ot === -1) && (ot = Cn, zt = Kn), Ue({
      sortable: this,
      name: "end",
      toEl: xe,
      originalEvent: t
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    He("nulling", this), he = N = xe = te = nn = _e = Oo = jt = Zt = ft = jn = ot = zt = Cn = Kn = gn = Yn = Ne = po = Q.dragged = Q.ghost = Q.clone = Q.active = null, Ro.forEach(function(t) {
      t.checked = !0;
    }), Ro.length = lr = ir = 0;
  },
  handleEvent: function(t) {
    switch (t.type) {
      case "drop":
      case "dragend":
        this._onDrop(t);
        break;
      case "dragenter":
      case "dragover":
        N && (this._onDragOver(t), Hs(t));
        break;
      case "selectstart":
        t.preventDefault();
        break;
    }
  },
  /**
   * Serializes the item into an array of string.
   * @returns {String[]}
   */
  toArray: function() {
    for (var t = [], n, o = this.el.children, r = 0, l = o.length, i = this.options; r < l; r++)
      n = o[r], mt(n, i.draggable, this.el, !1) && t.push(n.getAttribute(i.dataIdAttr) || Qs(n));
    return t;
  },
  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function(t, n) {
    var o = {}, r = this.el;
    this.toArray().forEach(function(l, i) {
      var u = r.children[i];
      mt(u, this.options.draggable, r, !1) && (o[l] = u);
    }, this), n && this.captureAnimationState(), t.forEach(function(l) {
      o[l] && (r.removeChild(o[l]), r.appendChild(o[l]));
    }), n && this.animateAll();
  },
  /**
   * Save the current sorting
   */
  save: function() {
    var t = this.options.store;
    t && t.set && t.set(this);
  },
  /**
   * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
   * @param   {HTMLElement}  el
   * @param   {String}       [selector]  default: `options.draggable`
   * @returns {HTMLElement|null}
   */
  closest: function(t, n) {
    return mt(t, n || this.options.draggable, this.el, !1);
  },
  /**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */
  option: function(t, n) {
    var o = this.options;
    if (n === void 0)
      return o[t];
    var r = ao.modifyOption(this, t, n);
    typeof r < "u" ? o[t] = r : o[t] = n, t === "group" && Ul(o);
  },
  /**
   * Destroy
   */
  destroy: function() {
    He("destroy", this);
    var t = this.el;
    t[Qe] = null, le(t, "mousedown", this._onTapStart), le(t, "touchstart", this._onTapStart), le(t, "pointerdown", this._onTapStart), this.nativeDraggable && (le(t, "dragover", this), le(t, "dragenter", this)), Array.prototype.forEach.call(t.querySelectorAll("[draggable]"), function(n) {
      n.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), $o.splice($o.indexOf(this.el), 1), this.el = t = null;
  },
  _hideClone: function() {
    if (!jt) {
      if (He("hideClone", this), Q.eventCanceled) return;
      Z(_e, "display", "none"), this.options.removeCloneOnHide && _e.parentNode && _e.parentNode.removeChild(_e), jt = !0;
    }
  },
  _showClone: function(t) {
    if (t.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (jt) {
      if (He("showClone", this), Q.eventCanceled) return;
      N.parentNode == he && !this.options.group.revertClone ? he.insertBefore(_e, N) : nn ? he.insertBefore(_e, nn) : he.appendChild(_e), this.options.group.revertClone && this.animate(N, _e), Z(_e, "display", ""), jt = !1;
    }
  }
};
function Hs(e) {
  e.dataTransfer && (e.dataTransfer.dropEffect = "move"), e.cancelable && e.preventDefault();
}
function go(e, t, n, o, r, l, i, u) {
  var s, d = e[Qe], c = d.options.onMove, f;
  return window.CustomEvent && !Mt && !ro ? s = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (s = document.createEvent("Event"), s.initEvent("move", !0, !0)), s.to = t, s.from = e, s.dragged = n, s.draggedRect = o, s.related = r || t, s.relatedRect = l || ke(t), s.willInsertAfter = u, s.originalEvent = i, e.dispatchEvent(s), c && (f = c.call(d, s, i)), f;
}
function ur(e) {
  e.draggable = !1;
}
function Ks() {
  Ir = !1;
}
function Ys(e, t, n) {
  var o = ke(Dn(n.el, 0, n.options, !0)), r = Ll(n.el, n.options, te), l = 10;
  return t ? e.clientX < r.left - l || e.clientY < o.top && e.clientX < o.right : e.clientY < r.top - l || e.clientY < o.bottom && e.clientX < o.left;
}
function Xs(e, t, n) {
  var o = ke(oa(n.el, n.options.draggable)), r = Ll(n.el, n.options, te), l = 10;
  return t ? e.clientX > r.right + l || e.clientY > o.bottom && e.clientX > o.left : e.clientY > r.bottom + l || e.clientX > o.right && e.clientY > o.top;
}
function Js(e, t, n, o, r, l, i, u) {
  var s = o ? e.clientY : e.clientX, d = o ? n.height : n.width, c = o ? n.top : n.left, f = o ? n.bottom : n.right, m = !1;
  if (!i) {
    if (u && qo < d * r) {
      if (!Xn && (Yn === 1 ? s > c + d * l / 2 : s < f - d * l / 2) && (Xn = !0), Xn)
        m = !0;
      else if (Yn === 1 ? s < c + qo : s > f - qo)
        return -Yn;
    } else if (s > c + d * (1 - r) / 2 && s < f - d * (1 - r) / 2)
      return Zs(t);
  }
  return m = m || i, m && (s < c + d * l / 2 || s > f - d * l / 2) ? s > c + d / 2 ? 1 : -1 : 0;
}
function Zs(e) {
  return st(N) < st(e) ? 1 : -1;
}
function Qs(e) {
  for (var t = e.tagName + e.className + e.src + e.href + e.textContent, n = t.length, o = 0; n--; )
    o += t.charCodeAt(n);
  return o.toString(36);
}
function eu(e) {
  Ro.length = 0;
  for (var t = e.getElementsByTagName("input"), n = t.length; n--; ) {
    var o = t[n];
    o.checked && Ro.push(o);
  }
}
function Do(e) {
  return setTimeout(e, 0);
}
function Tr(e) {
  return clearTimeout(e);
}
zo && se(document, "touchmove", function(e) {
  (Q.active || wn) && e.cancelable && e.preventDefault();
});
Q.utils = {
  on: se,
  off: le,
  css: Z,
  find: Ml,
  is: function(t, n) {
    return !!mt(t, n, t, !1);
  },
  extend: Rs,
  throttle: Nl,
  closest: mt,
  toggleClass: nt,
  clone: Vl,
  index: st,
  nextTick: Do,
  cancelNextTick: Tr,
  detectDirection: jl,
  getChild: Dn,
  expando: Qe
};
Q.get = function(e) {
  return e[Qe];
};
Q.mount = function() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  t[0].constructor === Array && (t = t[0]), t.forEach(function(o) {
    if (!o.prototype || !o.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(o));
    o.utils && (Q.utils = xt(xt({}, Q.utils), o.utils)), ao.mount(o);
  });
};
Q.create = function(e, t) {
  return new Q(e, t);
};
Q.version = Bs;
var De = [], Un, Br, $r = !1, dr, cr, Mo, Wn;
function tu() {
  function e() {
    this.defaults = {
      scroll: !0,
      forceAutoScrollFallback: !1,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: !0
    };
    for (var t in this)
      t.charAt(0) === "_" && typeof this[t] == "function" && (this[t] = this[t].bind(this));
  }
  return e.prototype = {
    dragStarted: function(n) {
      var o = n.originalEvent;
      this.sortable.nativeDraggable ? se(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? se(document, "pointermove", this._handleFallbackAutoScroll) : o.touches ? se(document, "touchmove", this._handleFallbackAutoScroll) : se(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(n) {
      var o = n.originalEvent;
      !this.options.dragOverBubble && !o.rootEl && this._handleAutoScroll(o);
    },
    drop: function() {
      this.sortable.nativeDraggable ? le(document, "dragover", this._handleAutoScroll) : (le(document, "pointermove", this._handleFallbackAutoScroll), le(document, "touchmove", this._handleFallbackAutoScroll), le(document, "mousemove", this._handleFallbackAutoScroll)), Ra(), ko(), Ms();
    },
    nulling: function() {
      Mo = Br = Un = $r = Wn = dr = cr = null, De.length = 0;
    },
    _handleFallbackAutoScroll: function(n) {
      this._handleAutoScroll(n, !0);
    },
    _handleAutoScroll: function(n, o) {
      var r = this, l = (n.touches ? n.touches[0] : n).clientX, i = (n.touches ? n.touches[0] : n).clientY, u = document.elementFromPoint(l, i);
      if (Mo = n, o || this.options.forceAutoScrollFallback || ro || Mt || Gn) {
        fr(n, this.options, u, o);
        var s = Ut(u, !0);
        $r && (!Wn || l !== dr || i !== cr) && (Wn && Ra(), Wn = setInterval(function() {
          var d = Ut(document.elementFromPoint(l, i), !0);
          d !== s && (s = d, ko()), fr(n, r.options, d, o);
        }, 10), dr = l, cr = i);
      } else {
        if (!this.options.bubbleScroll || Ut(u, !0) === _t()) {
          ko();
          return;
        }
        fr(n, this.options, Ut(u, !1), !1);
      }
    }
  }, Tt(e, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function ko() {
  De.forEach(function(e) {
    clearInterval(e.pid);
  }), De = [];
}
function Ra() {
  clearInterval(Wn);
}
var fr = Nl(function(e, t, n, o) {
  if (t.scroll) {
    var r = (e.touches ? e.touches[0] : e).clientX, l = (e.touches ? e.touches[0] : e).clientY, i = t.scrollSensitivity, u = t.scrollSpeed, s = _t(), d = !1, c;
    Br !== n && (Br = n, ko(), Un = t.scroll, c = t.scrollFn, Un === !0 && (Un = Ut(n, !0)));
    var f = 0, m = Un;
    do {
      var v = m, g = ke(v), _ = g.top, x = g.bottom, k = g.left, A = g.right, I = g.width, C = g.height, B = void 0, h = void 0, w = v.scrollWidth, P = v.scrollHeight, E = Z(v), R = v.scrollLeft, V = v.scrollTop;
      v === s ? (B = I < w && (E.overflowX === "auto" || E.overflowX === "scroll" || E.overflowX === "visible"), h = C < P && (E.overflowY === "auto" || E.overflowY === "scroll" || E.overflowY === "visible")) : (B = I < w && (E.overflowX === "auto" || E.overflowX === "scroll"), h = C < P && (E.overflowY === "auto" || E.overflowY === "scroll"));
      var z = B && (Math.abs(A - r) <= i && R + I < w) - (Math.abs(k - r) <= i && !!R), oe = h && (Math.abs(x - l) <= i && V + C < P) - (Math.abs(_ - l) <= i && !!V);
      if (!De[f])
        for (var ne = 0; ne <= f; ne++)
          De[ne] || (De[ne] = {});
      (De[f].vx != z || De[f].vy != oe || De[f].el !== v) && (De[f].el = v, De[f].vx = z, De[f].vy = oe, clearInterval(De[f].pid), (z != 0 || oe != 0) && (d = !0, De[f].pid = setInterval((function() {
        o && this.layer === 0 && Q.active._onTouchMove(Mo);
        var ie = De[this.layer].vy ? De[this.layer].vy * u : 0, re = De[this.layer].vx ? De[this.layer].vx * u : 0;
        typeof c == "function" && c.call(Q.dragged.parentNode[Qe], re, ie, e, Mo, De[this.layer].el) !== "continue" || Fl(De[this.layer].el, re, ie);
      }).bind({
        layer: f
      }), 24))), f++;
    } while (t.bubbleScroll && m !== s && (m = Ut(m, !1)));
    $r = d;
  }
}, 30), Hl = function(t) {
  var n = t.originalEvent, o = t.putSortable, r = t.dragEl, l = t.activeSortable, i = t.dispatchSortableEvent, u = t.hideGhostForTarget, s = t.unhideGhostForTarget;
  if (n) {
    var d = o || l;
    u();
    var c = n.changedTouches && n.changedTouches.length ? n.changedTouches[0] : n, f = document.elementFromPoint(c.clientX, c.clientY);
    s(), d && !d.el.contains(f) && (i("spill"), this.onSpill({
      dragEl: r,
      putSortable: o
    }));
  }
};
function ra() {
}
ra.prototype = {
  startIndex: null,
  dragStart: function(t) {
    var n = t.oldDraggableIndex;
    this.startIndex = n;
  },
  onSpill: function(t) {
    var n = t.dragEl, o = t.putSortable;
    this.sortable.captureAnimationState(), o && o.captureAnimationState();
    var r = Dn(this.sortable.el, this.startIndex, this.options);
    r ? this.sortable.el.insertBefore(n, r) : this.sortable.el.appendChild(n), this.sortable.animateAll(), o && o.animateAll();
  },
  drop: Hl
};
Tt(ra, {
  pluginName: "revertOnSpill"
});
function aa() {
}
aa.prototype = {
  onSpill: function(t) {
    var n = t.dragEl, o = t.putSortable, r = o || this.sortable;
    r.captureAnimationState(), n.parentNode && n.parentNode.removeChild(n), r.animateAll();
  },
  drop: Hl
};
Tt(aa, {
  pluginName: "removeOnSpill"
});
Q.mount(new tu());
Q.mount(aa, ra);
function nu(e, t, n = {}) {
  let o;
  const { document: r = qs, ...l } = n, i = { onUpdate: (c) => {
    au(t, c.oldIndex, c.newIndex, c);
  } }, u = () => {
    const c = typeof e == "string" ? r?.querySelector(e) : Ds(e);
    !c || o !== void 0 || (o = new Q(c, {
      ...i,
      ...l
    }));
  }, s = () => {
    o?.destroy(), o = void 0;
  }, d = (c, f) => {
    if (f !== void 0) o?.option(c, f);
    else return o?.option(c);
  };
  return Os(u), _s(s), {
    stop: s,
    start: u,
    option: d
  };
}
function ou(e, t, n) {
  const o = e.children[n];
  e.insertBefore(t, o);
}
function ru(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function au(e, t, n, o = null) {
  o != null && (ru(o.item), ou(o.from, o.item, t));
  const r = Ce(e), l = r ? [...Se(e)] : Se(e);
  if (n >= 0 && n < l.length) {
    const i = l.splice(t, 1)[0];
    be(() => {
      l.splice(n, 0, i), r && (e.value = l);
    });
  }
}
function Kl(e) {
  const t = $(!1), n = $(!1), o = T({
    get() {
      return m(e.value) ? Pt : c(e.value) ? f(e.value) : Array.isArray(e.value?.type) ? e.value?.type?.[0] : e.value?.type;
    },
    set(v) {
      if (v === o.value) return;
      let g;
      m(v) ? g = {
        $ref: ""
      } : c(v) ? g = {
        [v]: [
          {
            type: X.OBJECT,
            properties: {}
          },
          {
            type: X.OBJECT,
            properties: {}
          }
        ],
        description: e.value?.description
      } : (g = {
        type: v,
        description: e.value?.description
      }, v === X.OBJECT && (g.properties = {}), v === X.ARRAY && (g.items = {
        type: X.STRING
      })), e.value = g, t.value = !1, n.value = !1;
    }
  }), r = T({
    get() {
      return !!(Array.isArray(e.value?.type) && e.value?.type?.[1] === X.NULL);
    },
    set(v) {
      o.value !== X.NULL && (e.value = {
        ...e.value,
        type: v ? [o.value, X.NULL] : o.value
      });
    }
  }), l = T({
    get() {
      return e.value?.deprecated === !0;
    },
    set(v) {
      v ? e.value = {
        ...e.value,
        deprecated: !0
      } : delete e.value.deprecated;
    }
  }), i = T({
    get() {
      return e.value?.const;
    },
    set(v) {
      e.value = {
        ...e.value,
        const: v
      };
    }
  }), u = T({
    get() {
      return e.value?.enum || [];
    },
    set(v) {
      e.value = {
        ...e.value,
        enum: v
      };
    }
  }), s = T({
    get() {
      return e.value[Pt] && e.value[Pt]?.split("/")?.[2] || null;
    },
    set(v) {
      e.value = {
        ...e.value,
        $ref: `#/$defs/${v}`
      };
    }
  });
  Me(() => {
    t.value = e.value?.const !== void 0, n.value = e.value?.enum !== void 0;
  }), ce(t, (v) => {
    v ? n.value = !1 : delete e.value.const;
  }), ce(n, (v) => {
    v ? t.value = !1 : delete e.value.enum;
  });
  function d(v) {
    const g = Object.values(X);
    return typeof v == "string" ? g.includes(v) : typeof v == "object" ? g.includes(v.type) : !1;
  }
  function c(v) {
    const g = Object.values(Fe);
    if (typeof v == "string") return g.includes(v);
    if (typeof v == "object") {
      const _ = v;
      return _ === null || Array.isArray(_) ? !1 : g.some((x) => x in _);
    }
    return !1;
  }
  function f(v) {
    return typeof v != "object" || v === null ? null : Object.values(Fe).find((g) => g in v) || null;
  }
  function m(v) {
    return typeof v == "string" ? v === Pt : typeof v == "object" ? Pt in v : !1;
  }
  return {
    $ref: s,
    type: o,
    isNullable: r,
    isDeprecated: l,
    isConst: t,
    isEnum: n,
    constValue: i,
    enumValue: u,
    isPrimitive: d,
    isComposition: c,
    isReference: m,
    getCompositionKey: f
  };
}
function Ma(e) {
  return typeof e == "string" ? `'${e}'` : new lu().serialize(e);
}
const lu = /* @__PURE__ */ (function() {
  class e {
    #e = /* @__PURE__ */ new Map();
    compare(n, o) {
      const r = typeof n, l = typeof o;
      return r === "string" && l === "string" ? n.localeCompare(o) : r === "number" && l === "number" ? n - o : String.prototype.localeCompare.call(this.serialize(n, !0), this.serialize(o, !0));
    }
    serialize(n, o) {
      if (n === null) return "null";
      switch (typeof n) {
        case "string":
          return o ? n : `'${n}'`;
        case "bigint":
          return `${n}n`;
        case "object":
          return this.$object(n);
        case "function":
          return this.$function(n);
      }
      return String(n);
    }
    serializeObject(n) {
      const o = Object.prototype.toString.call(n);
      if (o !== "[object Object]") return this.serializeBuiltInType(o.length < 10 ? `unknown:${o}` : o.slice(8, -1), n);
      const r = n.constructor, l = r === Object || r === void 0 ? "" : r.name;
      if (l !== "" && globalThis[l] === r) return this.serializeBuiltInType(l, n);
      if (typeof n.toJSON == "function") {
        const i = n.toJSON();
        return l + (i !== null && typeof i == "object" ? this.$object(i) : `(${this.serialize(i)})`);
      }
      return this.serializeObjectEntries(l, Object.entries(n));
    }
    serializeBuiltInType(n, o) {
      const r = this["$" + n];
      if (r) return r.call(this, o);
      if (typeof o?.entries == "function") return this.serializeObjectEntries(n, o.entries());
      throw new Error(`Cannot serialize ${n}`);
    }
    serializeObjectEntries(n, o) {
      const r = Array.from(o).sort((i, u) => this.compare(i[0], u[0]));
      let l = `${n}{`;
      for (let i = 0; i < r.length; i++) {
        const [u, s] = r[i];
        l += `${this.serialize(u, !0)}:${this.serialize(s)}`, i < r.length - 1 && (l += ",");
      }
      return l + "}";
    }
    $object(n) {
      let o = this.#e.get(n);
      return o === void 0 && (this.#e.set(n, `#${this.#e.size}`), o = this.serializeObject(n), this.#e.set(n, o)), o;
    }
    $function(n) {
      const o = Function.prototype.toString.call(n);
      return o.slice(-15) === "[native code] }" ? `${n.name || ""}()[native]` : `${n.name}(${n.length})${o.replace(/\s*\n\s*/g, "")}`;
    }
    $Array(n) {
      let o = "[";
      for (let r = 0; r < n.length; r++) o += this.serialize(n[r]), r < n.length - 1 && (o += ",");
      return o + "]";
    }
    $Date(n) {
      try {
        return `Date(${n.toISOString()})`;
      } catch {
        return "Date(null)";
      }
    }
    $ArrayBuffer(n) {
      return `ArrayBuffer[${new Uint8Array(n).join(",")}]`;
    }
    $Set(n) {
      return `Set${this.$Array(Array.from(n).sort((o, r) => this.compare(o, r)))}`;
    }
    $Map(n) {
      return this.serializeObjectEntries("Map", n.entries());
    }
  }
  for (const t of ["Error", "RegExp", "URL"]) e.prototype["$" + t] = function(n) {
    return `${t}(${n})`;
  };
  for (const t of ["Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Uint16Array", "Int32Array", "Uint32Array", "Float32Array", "Float64Array"]) e.prototype["$" + t] = function(n) {
    return `${t}[${n.join(",")}]`;
  };
  for (const t of ["BigInt64Array", "BigUint64Array"]) e.prototype["$" + t] = function(n) {
    return `${t}[${n.join("n,")}${n.length > 0 ? "n" : ""}]`;
  };
  return e;
})();
function la(e, t) {
  return e === t || Ma(e) === Ma(t);
}
function Rr(e, t = Number.NEGATIVE_INFINITY, n = Number.POSITIVE_INFINITY) {
  return Math.min(n, Math.max(t, e));
}
function yo(e, t) {
  let n = e;
  const o = t.toString(), r = o.indexOf("."), l = r >= 0 ? o.length - r : 0;
  if (l > 0) {
    const i = 10 ** l;
    n = Math.round(n * i) / i;
  }
  return n;
}
function iu(e, t, n, o) {
  t = Number(t), n = Number(n);
  const r = (e - (Number.isNaN(t) ? 0 : t)) % o;
  let l = yo(Math.abs(r) * 2 >= o ? e + Math.sign(r) * (o - Math.abs(r)) : e - r, o);
  return Number.isNaN(t) ? !Number.isNaN(n) && l > n && (l = Math.floor(yo(n / o, o)) * o) : l < t ? l = t : !Number.isNaN(n) && l > n && (l = t + Math.floor(yo((n - t) / o, o)) * o), l = yo(l, o), l;
}
function ye(e, t) {
  const n = typeof e == "string" && !t ? `${e}Context` : t, o = Symbol(n);
  return [(i) => {
    const u = ea(o, i);
    if (u || u === null) return u;
    throw new Error(`Injection \`${o.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(", ")}` : `\`${e}\``}`);
  }, (i) => (ta(o, i), i)];
}
function Le() {
  let e = document.activeElement;
  if (e == null) return null;
  for (; e != null && e.shadowRoot != null && e.shadowRoot.activeElement != null; ) e = e.shadowRoot.activeElement;
  return e;
}
function jo(e, t, n) {
  const o = n.originalEvent.target, r = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && o.addEventListener(e, t, { once: !0 }), o.dispatchEvent(r);
}
function Jn(e) {
  return e == null;
}
function ia(e) {
  return e ? e.flatMap((t) => t.type === me ? ia(t.children) : [t]) : [];
}
const su = ["INPUT", "TEXTAREA"];
function Yl(e, t, n, o = {}) {
  if (!t || o.enableIgnoredElement && su.includes(t.nodeName)) return null;
  const { arrowKeyOptions: r = "both", attributeName: l = "[data-reka-collection-item]", itemsArray: i = [], loop: u = !0, dir: s = "ltr", preventScroll: d = !0, focus: c = !1 } = o, [f, m, v, g, _, x] = [
    e.key === "ArrowRight",
    e.key === "ArrowLeft",
    e.key === "ArrowUp",
    e.key === "ArrowDown",
    e.key === "Home",
    e.key === "End"
  ], k = v || g, A = f || m;
  if (!_ && !x && (!k && !A || r === "vertical" && A || r === "horizontal" && k)) return null;
  const I = n ? Array.from(n.querySelectorAll(l)) : i;
  if (!I.length) return null;
  d && e.preventDefault();
  let C = null;
  return A || k ? C = Xl(I, t, {
    goForward: k ? g : s === "ltr" ? f : m,
    loop: u
  }) : _ ? C = I.at(0) || null : x && (C = I.at(-1) || null), c && C?.focus(), C;
}
function Xl(e, t, n, o = e.length) {
  if (--o === 0) return null;
  const r = e.indexOf(t), l = n.goForward ? r + 1 : r - 1;
  if (!n.loop && (l < 0 || l >= e.length)) return null;
  const i = (l + e.length) % e.length, u = e[i];
  return u ? u.hasAttribute("disabled") && u.getAttribute("disabled") !== "false" ? Xl(e, u, n, o) : u : null;
}
const [lo] = ye("ConfigProvider");
function uu(e, t) {
  var n;
  const o = Pn();
  return Me(() => {
    o.value = e();
  }, {
    ...t,
    flush: (n = void 0) != null ? n : "sync"
  }), Ol(o);
}
function Ht(e) {
  return Zr() ? (Qr(e), !0) : !1;
}
function Jl() {
  const e = /* @__PURE__ */ new Set(), t = (l) => {
    e.delete(l);
  };
  return {
    on: (l) => {
      e.add(l);
      const i = () => t(l);
      return Ht(i), {
        off: i
      };
    },
    off: t,
    trigger: (...l) => Promise.all(Array.from(e).map((i) => i(...l))),
    clear: () => {
      e.clear();
    }
  };
}
function du(e) {
  let t = !1, n;
  const o = ql(!0);
  return (...r) => (t || (n = o.run(() => e(...r)), t = !0), n);
}
function Zl(e) {
  let t = 0, n, o;
  const r = () => {
    t -= 1, o && t <= 0 && (o.stop(), n = void 0, o = void 0);
  };
  return (...l) => (t += 1, o || (o = ql(!0), n = o.run(() => e(...l))), Ht(r), n);
}
function cu(e) {
  if (!Ce(e))
    return qn(e);
  const t = new Proxy({}, {
    get(n, o, r) {
      return a(Reflect.get(e.value, o, r));
    },
    set(n, o, r) {
      return Ce(e.value[o]) && !Ce(r) ? e.value[o].value = r : e.value[o] = r, !0;
    },
    deleteProperty(n, o) {
      return Reflect.deleteProperty(e.value, o);
    },
    has(n, o) {
      return Reflect.has(e.value, o);
    },
    ownKeys() {
      return Object.keys(e.value);
    },
    getOwnPropertyDescriptor() {
      return {
        enumerable: !0,
        configurable: !0
      };
    }
  });
  return qn(t);
}
function sa(e) {
  return cu(T(e));
}
function ua(e, ...t) {
  const n = t.flat(), o = n[0];
  return sa(() => Object.fromEntries(typeof o == "function" ? Object.entries(Ee(e)).filter(([r, l]) => !o(Se(l), r)) : Object.entries(Ee(e)).filter((r) => !n.includes(r[0]))));
}
const St = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const fu = (e) => typeof e < "u", pu = (e) => e != null, mu = Object.prototype.toString, vu = (e) => mu.call(e) === "[object Object]", gu = () => {
}, Na = /* @__PURE__ */ yu();
function yu() {
  var e, t;
  return St && ((e = window?.navigator) == null ? void 0 : e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window?.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window?.navigator.userAgent));
}
function hu(e) {
  return Rt();
}
function Po(e) {
  return Array.isArray(e) ? e : [e];
}
function Ql(e, t = 1e4) {
  return is((n, o) => {
    let r = Se(e), l;
    const i = () => setTimeout(() => {
      r = Se(e), o();
    }, Se(t));
    return Ht(() => {
      clearTimeout(l);
    }), {
      get() {
        return n(), r;
      },
      set(u) {
        r = u, o(), clearTimeout(l), l = i();
      }
    };
  });
}
const bu = Se;
function _u(e, t) {
  hu() && Dl(e, t);
}
function ei(e, t, n = {}) {
  const {
    immediate: o = !0,
    immediateCallback: r = !1
  } = n, l = Pn(!1);
  let i = null;
  function u() {
    i && (clearTimeout(i), i = null);
  }
  function s() {
    l.value = !1, u();
  }
  function d(...c) {
    r && e(), u(), l.value = !0, i = setTimeout(() => {
      l.value = !1, i = null, e(...c);
    }, Se(t));
  }
  return o && (l.value = !0, St && d()), Ht(s), {
    isPending: Ol(l),
    start: d,
    stop: s
  };
}
function wu(e, t, n) {
  return ce(
    e,
    t,
    {
      ...n,
      immediate: !0
    }
  );
}
const Kt = St ? window : void 0;
function et(e) {
  var t;
  const n = Se(e);
  return (t = n?.$el) != null ? t : n;
}
function Ge(...e) {
  const t = [], n = () => {
    t.forEach((u) => u()), t.length = 0;
  }, o = (u, s, d, c) => (u.addEventListener(s, d, c), () => u.removeEventListener(s, d, c)), r = T(() => {
    const u = Po(Se(e[0])).filter((s) => s != null);
    return u.every((s) => typeof s != "string") ? u : void 0;
  }), l = wu(
    () => {
      var u, s;
      return [
        (s = (u = r.value) == null ? void 0 : u.map((d) => et(d))) != null ? s : [Kt].filter((d) => d != null),
        Po(Se(r.value ? e[1] : e[0])),
        Po(a(r.value ? e[2] : e[1])),
        // @ts-expect-error - TypeScript gets the correct types, but somehow still complains
        Se(r.value ? e[3] : e[2])
      ];
    },
    ([u, s, d, c]) => {
      if (n(), !u?.length || !s?.length || !d?.length)
        return;
      const f = vu(c) ? { ...c } : c;
      t.push(
        ...u.flatMap(
          (m) => s.flatMap(
            (v) => d.map((g) => o(m, v, g, f))
          )
        )
      );
    },
    { flush: "post" }
  ), i = () => {
    l(), n();
  };
  return Ht(n), i;
}
function ti() {
  const e = Pn(!1), t = Rt();
  return t && Ae(() => {
    e.value = !0;
  }, t), e;
}
function ni(e) {
  const t = ti();
  return T(() => (t.value, !!e()));
}
function xu(e, t, n = {}) {
  const { window: o = Kt, ...r } = n;
  let l;
  const i = ni(() => o && "MutationObserver" in o), u = () => {
    l && (l.disconnect(), l = void 0);
  }, s = T(() => {
    const m = Se(e), v = Po(m).map(et).filter(pu);
    return new Set(v);
  }), d = ce(
    () => s.value,
    (m) => {
      u(), i.value && m.size && (l = new MutationObserver(t), m.forEach((v) => l.observe(v, r)));
    },
    { immediate: !0, flush: "post" }
  ), c = () => l?.takeRecords(), f = () => {
    d(), u();
  };
  return Ht(f), {
    isSupported: i,
    stop: f,
    takeRecords: c
  };
}
function Cu(e, t, n = {}) {
  const {
    window: o = Kt,
    document: r = o?.document,
    flush: l = "sync"
  } = n;
  if (!o || !r)
    return gu;
  let i;
  const u = (c) => {
    i?.(), i = c;
  }, s = Me(() => {
    const c = et(e);
    if (c) {
      const { stop: f } = xu(
        r,
        (m) => {
          m.map((g) => [...g.removedNodes]).flat().some((g) => g === c || g.contains(c)) && t(m);
        },
        {
          window: o,
          childList: !0,
          subtree: !0
        }
      );
      u(f);
    }
  }, { flush: l }), d = () => {
    s(), u();
  };
  return Ht(d), d;
}
function Su(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function Eu(...e) {
  let t, n, o = {};
  e.length === 3 ? (t = e[0], n = e[1], o = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, n = e[0], o = e[1]) : (t = e[0], n = e[1]) : (t = !0, n = e[0]);
  const {
    target: r = Kt,
    eventName: l = "keydown",
    passive: i = !1,
    dedupe: u = !1
  } = o, s = Su(t);
  return Ge(r, l, (c) => {
    c.repeat && Se(u) || s(c) && n(c);
  }, i);
}
function Ou(e = {}) {
  var t;
  const {
    window: n = Kt,
    deep: o = !0,
    triggerOnRemoval: r = !1
  } = e, l = (t = e.document) != null ? t : n?.document, i = () => {
    var d;
    let c = l?.activeElement;
    if (o)
      for (; c?.shadowRoot; )
        c = (d = c?.shadowRoot) == null ? void 0 : d.activeElement;
    return c;
  }, u = Pn(), s = () => {
    u.value = i();
  };
  if (n) {
    const d = {
      capture: !0,
      passive: !0
    };
    Ge(
      n,
      "blur",
      (c) => {
        c.relatedTarget === null && s();
      },
      d
    ), Ge(
      n,
      "focus",
      s,
      d
    );
  }
  return r && Cu(u, s, { document: l }), s(), u;
}
function qu(e) {
  return JSON.parse(JSON.stringify(e));
}
function Du(e, t, n = {}) {
  const { window: o = Kt, ...r } = n;
  let l;
  const i = ni(() => o && "ResizeObserver" in o), u = () => {
    l && (l.disconnect(), l = void 0);
  }, s = T(() => {
    const f = Se(e);
    return Array.isArray(f) ? f.map((m) => et(m)) : [et(f)];
  }), d = ce(
    s,
    (f) => {
      if (u(), i.value && o) {
        l = new ResizeObserver(t);
        for (const m of f)
          m && l.observe(m, r);
      }
    },
    { immediate: !0, flush: "post" }
  ), c = () => {
    u(), d();
  };
  return Ht(c), {
    isSupported: i,
    stop: c
  };
}
const ku = "focusin", Pu = "focusout", Au = ":focus-within";
function Iu(e, t = {}) {
  const { window: n = Kt } = t, o = T(() => et(e)), r = Pn(!1), l = T(() => r.value), i = Ou(t);
  if (!n || !i.value)
    return { focused: l };
  const u = { passive: !0 };
  return Ge(o, ku, () => r.value = !0, u), Ge(o, Pu, () => {
    var s, d, c;
    return r.value = (c = (d = (s = o.value) == null ? void 0 : s.matches) == null ? void 0 : d.call(s, Au)) != null ? c : !1;
  }, u), { focused: l };
}
function tt(e, t, n, o = {}) {
  var r, l, i;
  const {
    clone: u = !1,
    passive: s = !1,
    eventName: d,
    deep: c = !1,
    defaultValue: f,
    shouldEmit: m
  } = o, v = Rt(), g = n || v?.emit || ((r = v?.$emit) == null ? void 0 : r.bind(v)) || ((i = (l = v?.proxy) == null ? void 0 : l.$emit) == null ? void 0 : i.bind(v?.proxy));
  let _ = d;
  t || (t = "modelValue"), _ = _ || `update:${t.toString()}`;
  const x = (I) => u ? typeof u == "function" ? u(I) : qu(I) : I, k = () => fu(e[t]) ? x(e[t]) : f, A = (I) => {
    m ? m(I) && g(_, I) : g(_, I);
  };
  if (s) {
    const I = k(), C = $(I);
    let B = !1;
    return ce(
      () => e[t],
      (h) => {
        B || (B = !0, C.value = x(h), be(() => B = !1));
      }
    ), ce(
      C,
      (h) => {
        !B && (h !== e[t] || c) && A(h);
      },
      { deep: c }
    ), C;
  } else
    return T({
      get() {
        return k();
      },
      set(I) {
        A(I);
      }
    });
}
function pr(e) {
  if (e === null || typeof e != "object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0;
}
function Mr(e, t, n = ".", o) {
  if (!pr(t))
    return Mr(e, {}, n, o);
  const r = Object.assign({}, t);
  for (const l in e) {
    if (l === "__proto__" || l === "constructor")
      continue;
    const i = e[l];
    i != null && (o && o(r, l, i, n) || (Array.isArray(i) && Array.isArray(r[l]) ? r[l] = [...i, ...r[l]] : pr(i) && pr(r[l]) ? r[l] = Mr(
      i,
      r[l],
      (n ? `${n}.` : "") + l.toString(),
      o
    ) : r[l] = i));
  }
  return r;
}
function Tu(e) {
  return (...t) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    t.reduce((n, o) => Mr(n, o, "", e), {})
  );
}
const Bu = Tu(), $u = Zl(() => {
  const e = $(/* @__PURE__ */ new Map()), t = $(), n = T(() => {
    for (const i of e.value.values()) if (i) return !0;
    return !1;
  }), o = lo({ scrollBody: $(!0) });
  let r = null;
  const l = () => {
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.documentElement.style.removeProperty("--scrollbar-width"), document.body.style.overflow = t.value ?? "", Na && r?.(), t.value = void 0;
  };
  return ce(n, (i, u) => {
    if (!St) return;
    if (!i) {
      u && l();
      return;
    }
    t.value === void 0 && (t.value = document.body.style.overflow);
    const s = window.innerWidth - document.documentElement.clientWidth, d = {
      padding: s,
      margin: 0
    }, c = o.scrollBody?.value ? typeof o.scrollBody.value == "object" ? Bu({
      padding: o.scrollBody.value.padding === !0 ? s : o.scrollBody.value.padding,
      margin: o.scrollBody.value.margin === !0 ? s : o.scrollBody.value.margin
    }, d) : d : {
      padding: 0,
      margin: 0
    };
    s > 0 && (document.body.style.paddingRight = typeof c.padding == "number" ? `${c.padding}px` : String(c.padding), document.body.style.marginRight = typeof c.margin == "number" ? `${c.margin}px` : String(c.margin), document.documentElement.style.setProperty("--scrollbar-width", `${s}px`), document.body.style.overflow = "hidden"), Na && (r = Ge(document, "touchmove", (f) => Ru(f), { passive: !1 })), be(() => {
      document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
    });
  }, {
    immediate: !0,
    flush: "sync"
  }), e;
});
function Uo(e) {
  const t = Math.random().toString(36).substring(2, 7), n = $u();
  n.value.set(t, e ?? !1);
  const o = T({
    get: () => n.value.get(t) ?? !1,
    set: (r) => n.value.set(t, r)
  });
  return _u(() => {
    n.value.delete(t);
  }), o;
}
function oi(e) {
  const t = window.getComputedStyle(e);
  if (t.overflowX === "scroll" || t.overflowY === "scroll" || t.overflowX === "auto" && e.clientWidth < e.scrollWidth || t.overflowY === "auto" && e.clientHeight < e.scrollHeight) return !0;
  {
    const n = e.parentNode;
    return !(n instanceof Element) || n.tagName === "BODY" ? !1 : oi(n);
  }
}
function Ru(e) {
  const t = e || window.event, n = t.target;
  return n instanceof Element && oi(n) ? !1 : t.touches.length > 1 ? !0 : (t.preventDefault && t.cancelable && t.preventDefault(), !1);
}
function An(e) {
  const t = lo({ dir: $("ltr") });
  return T(() => e?.value || t.dir?.value || "ltr");
}
function In(e) {
  const t = Rt(), n = t?.type.emits, o = {};
  return n?.length || console.warn(`No emitted event found. Please check component: ${t?.type.__name}`), n?.forEach((r) => {
    o[ss(kl(r))] = (...l) => e(r, ...l);
  }), o;
}
let mr = 0;
function da() {
  Me((e) => {
    if (!St) return;
    const t = document.querySelectorAll("[data-reka-focus-guard]");
    document.body.insertAdjacentElement("afterbegin", t[0] ?? Fa()), document.body.insertAdjacentElement("beforeend", t[1] ?? Fa()), mr++, e(() => {
      mr === 1 && document.querySelectorAll("[data-reka-focus-guard]").forEach((n) => n.remove()), mr--;
    });
  });
}
function Fa() {
  const e = document.createElement("span");
  return e.setAttribute("data-reka-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
function Tn(e) {
  return T(() => bu(e) ? !!et(e)?.closest("form") : !0);
}
function Y() {
  const e = Rt(), t = $(), n = T(() => ["#text", "#comment"].includes(t.value?.$el.nodeName) ? t.value?.$el.nextElementSibling : et(t)), o = Object.assign({}, e.exposed), r = {};
  for (const i in e.props) Object.defineProperty(r, i, {
    enumerable: !0,
    configurable: !0,
    get: () => e.props[i]
  });
  if (Object.keys(o).length > 0) for (const i in o) Object.defineProperty(r, i, {
    enumerable: !0,
    configurable: !0,
    get: () => o[i]
  });
  Object.defineProperty(r, "$el", {
    enumerable: !0,
    configurable: !0,
    get: () => e.vnode.el
  }), e.exposed = r;
  function l(i) {
    t.value = i, i && (Object.defineProperty(r, "$el", {
      enumerable: !0,
      configurable: !0,
      get: () => i instanceof Element ? i : i.$el
    }), e.exposed = r);
  }
  return {
    forwardRef: l,
    currentRef: t,
    currentElement: n
  };
}
function we(e) {
  const t = Rt(), n = Object.keys(t?.type.props ?? {}).reduce((r, l) => {
    const i = (t?.type.props[l]).default;
    return i !== void 0 && (r[l] = i), r;
  }, {}), o = us(e);
  return T(() => {
    const r = {}, l = t?.vnode.props ?? {};
    return Object.keys(l).forEach((i) => {
      r[kl(i)] = l[i];
    }), Object.keys({
      ...n,
      ...r
    }).reduce((i, u) => (o.value[u] !== void 0 && (i[u] = o.value[u]), i), {});
  });
}
function ge(e, t) {
  const n = we(e), o = t ? In(t) : {};
  return T(() => ({
    ...n.value,
    ...o
  }));
}
function Mu(e, t) {
  const n = Ql(!1, 300), o = $(null), r = Jl();
  function l() {
    o.value = null, n.value = !1;
  }
  function i(u, s) {
    const d = u.currentTarget, c = {
      x: u.clientX,
      y: u.clientY
    }, f = Nu(c, d.getBoundingClientRect()), m = Fu(c, f), v = Vu(s.getBoundingClientRect()), g = zu([...m, ...v]);
    o.value = g, n.value = !0;
  }
  return Me((u) => {
    if (e.value && t.value) {
      const s = (c) => i(c, t.value), d = (c) => i(c, e.value);
      e.value.addEventListener("pointerleave", s), t.value.addEventListener("pointerleave", d), u(() => {
        e.value?.removeEventListener("pointerleave", s), t.value?.removeEventListener("pointerleave", d);
      });
    }
  }), Me((u) => {
    if (o.value) {
      const s = (d) => {
        if (!o.value || !(d.target instanceof Element)) return;
        const c = d.target, f = {
          x: d.clientX,
          y: d.clientY
        }, m = e.value?.contains(c) || t.value?.contains(c), v = !Lu(f, o.value), g = !!c.closest("[data-grace-area-trigger]");
        m ? l() : (v || g) && (l(), r.trigger());
      };
      e.value?.ownerDocument.addEventListener("pointermove", s), u(() => e.value?.ownerDocument.removeEventListener("pointermove", s));
    }
  }), {
    isPointerInTransit: n,
    onPointerExit: r.on
  };
}
function Nu(e, t) {
  const n = Math.abs(t.top - e.y), o = Math.abs(t.bottom - e.y), r = Math.abs(t.right - e.x), l = Math.abs(t.left - e.x);
  switch (Math.min(n, o, r, l)) {
    case l:
      return "left";
    case r:
      return "right";
    case n:
      return "top";
    case o:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function Fu(e, t, n = 5) {
  const o = [];
  switch (t) {
    case "top":
      o.push({
        x: e.x - n,
        y: e.y + n
      }, {
        x: e.x + n,
        y: e.y + n
      });
      break;
    case "bottom":
      o.push({
        x: e.x - n,
        y: e.y - n
      }, {
        x: e.x + n,
        y: e.y - n
      });
      break;
    case "left":
      o.push({
        x: e.x + n,
        y: e.y - n
      }, {
        x: e.x + n,
        y: e.y + n
      });
      break;
    case "right":
      o.push({
        x: e.x - n,
        y: e.y - n
      }, {
        x: e.x - n,
        y: e.y + n
      });
      break;
  }
  return o;
}
function Vu(e) {
  const { top: t, right: n, bottom: o, left: r } = e;
  return [
    {
      x: r,
      y: t
    },
    {
      x: n,
      y: t
    },
    {
      x: n,
      y: o
    },
    {
      x: r,
      y: o
    }
  ];
}
function Lu(e, t) {
  const { x: n, y: o } = e;
  let r = !1;
  for (let l = 0, i = t.length - 1; l < t.length; i = l++) {
    const u = t[l].x, s = t[l].y, d = t[i].x, c = t[i].y;
    s > o != c > o && n < (d - u) * (o - s) / (c - s) + u && (r = !r);
  }
  return r;
}
function zu(e) {
  const t = e.slice();
  return t.sort((n, o) => n.x < o.x ? -1 : n.x > o.x ? 1 : n.y < o.y ? -1 : n.y > o.y ? 1 : 0), ju(t);
}
function ju(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let o = 0; o < e.length; o++) {
    const r = e[o];
    for (; t.length >= 2; ) {
      const l = t[t.length - 1], i = t[t.length - 2];
      if ((l.x - i.x) * (r.y - i.y) >= (l.y - i.y) * (r.x - i.x)) t.pop();
      else break;
    }
    t.push(r);
  }
  t.pop();
  const n = [];
  for (let o = e.length - 1; o >= 0; o--) {
    const r = e[o];
    for (; n.length >= 2; ) {
      const l = n[n.length - 1], i = n[n.length - 2];
      if ((l.x - i.x) * (r.y - i.y) >= (l.y - i.y) * (r.x - i.x)) n.pop();
      else break;
    }
    n.push(r);
  }
  return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n);
}
var Uu = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, yn = /* @__PURE__ */ new WeakMap(), ho = /* @__PURE__ */ new WeakMap(), bo = {}, vr = 0, ri = function(e) {
  return e && (e.host || ri(e.parentNode));
}, Wu = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var o = ri(n);
    return o && e.contains(o) ? o : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, Gu = function(e, t, n, o) {
  var r = Wu(t, Array.isArray(e) ? e : [e]);
  bo[n] || (bo[n] = /* @__PURE__ */ new WeakMap());
  var l = bo[n], i = [], u = /* @__PURE__ */ new Set(), s = new Set(r), d = function(f) {
    !f || u.has(f) || (u.add(f), d(f.parentNode));
  };
  r.forEach(d);
  var c = function(f) {
    !f || s.has(f) || Array.prototype.forEach.call(f.children, function(m) {
      if (u.has(m))
        c(m);
      else
        try {
          var v = m.getAttribute(o), g = v !== null && v !== "false", _ = (yn.get(m) || 0) + 1, x = (l.get(m) || 0) + 1;
          yn.set(m, _), l.set(m, x), i.push(m), _ === 1 && g && ho.set(m, !0), x === 1 && m.setAttribute(n, "true"), g || m.setAttribute(o, "true");
        } catch (k) {
          console.error("aria-hidden: cannot operate on ", m, k);
        }
    });
  };
  return c(t), u.clear(), vr++, function() {
    i.forEach(function(f) {
      var m = yn.get(f) - 1, v = l.get(f) - 1;
      yn.set(f, m), l.set(f, v), m || (ho.has(f) || f.removeAttribute(o), ho.delete(f)), v || f.removeAttribute(n);
    }), vr--, vr || (yn = /* @__PURE__ */ new WeakMap(), yn = /* @__PURE__ */ new WeakMap(), ho = /* @__PURE__ */ new WeakMap(), bo = {});
  };
}, Hu = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var o = Array.from(Array.isArray(e) ? e : [e]), r = Uu(e);
  return r ? (o.push.apply(o, Array.from(r.querySelectorAll("[aria-live], script"))), Gu(o, r, n, "aria-hidden")) : function() {
    return null;
  };
};
function Wo(e) {
  let t;
  ce(() => et(e), (n) => {
    n ? t = Hu(n) : t && t();
  }), to(() => {
    t && t();
  });
}
let Ku = 0;
function dt(e, t = "reka") {
  if ("useId" in qa) return `${t}-${qa.useId?.()}`;
  const n = lo({ useId: void 0 });
  return n.useId ? `${t}-${n.useId()}` : `${t}-${++Ku}`;
}
function Yu(e) {
  const t = lo({ locale: $("en") });
  return T(() => e?.value || t.locale?.value || "en");
}
function Xu(e) {
  const t = $(), n = T(() => t.value?.width ?? 0), o = T(() => t.value?.height ?? 0);
  return Ae(() => {
    const r = et(e);
    if (r) {
      t.value = {
        width: r.offsetWidth,
        height: r.offsetHeight
      };
      const l = new ResizeObserver((i) => {
        if (!Array.isArray(i) || !i.length) return;
        const u = i[0];
        let s, d;
        if ("borderBoxSize" in u) {
          const c = u.borderBoxSize, f = Array.isArray(c) ? c[0] : c;
          s = f.inlineSize, d = f.blockSize;
        } else
          s = r.offsetWidth, d = r.offsetHeight;
        t.value = {
          width: s,
          height: d
        };
      });
      return l.observe(r, { box: "border-box" }), () => l.unobserve(r);
    } else t.value = void 0;
  }), {
    width: n,
    height: o
  };
}
function Ju(e, t) {
  const n = $(e);
  function o(l) {
    return t[n.value][l] ?? n.value;
  }
  return {
    state: n,
    dispatch: (l) => {
      n.value = o(l);
    }
  };
}
function ca(e) {
  const t = Ql("", 1e3);
  return {
    search: t,
    handleTypeaheadSearch: (r, l) => {
      t.value = t.value + r;
      {
        const i = Le(), u = l.map((m) => ({
          ...m,
          textValue: m.value?.textValue ?? m.ref.textContent?.trim() ?? ""
        })), s = u.find((m) => m.ref === i), d = u.map((m) => m.textValue), c = Qu(d, t.value, s?.textValue), f = u.find((m) => m.textValue === c);
        return f && f.ref.focus(), f?.ref;
      }
    },
    resetTypeahead: () => {
      t.value = "";
    }
  };
}
function Zu(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
function Qu(e, t, n) {
  const r = t.length > 1 && Array.from(t).every((d) => d === t[0]) ? t[0] : t, l = n ? e.indexOf(n) : -1;
  let i = Zu(e, Math.max(l, 0));
  r.length === 1 && (i = i.filter((d) => d !== n));
  const s = i.find((d) => d.toLowerCase().startsWith(r.toLowerCase()));
  return s !== n ? s : void 0;
}
function ed(e, t) {
  const n = $({}), o = $("none"), r = $(e), l = e.value ? "mounted" : "unmounted";
  let i;
  const u = t.value?.ownerDocument.defaultView ?? Kt, { state: s, dispatch: d } = Ju(l, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: { MOUNT: "mounted" }
  }), c = (x) => {
    if (St) {
      const k = new CustomEvent(x, {
        bubbles: !1,
        cancelable: !1
      });
      t.value?.dispatchEvent(k);
    }
  };
  ce(e, async (x, k) => {
    const A = k !== x;
    if (await be(), A) {
      const I = o.value, C = _o(t.value);
      x ? (d("MOUNT"), c("enter"), C === "none" && c("after-enter")) : C === "none" || C === "undefined" || n.value?.display === "none" ? (d("UNMOUNT"), c("leave"), c("after-leave")) : k && I !== C ? (d("ANIMATION_OUT"), c("leave")) : (d("UNMOUNT"), c("after-leave"));
    }
  }, { immediate: !0 });
  const f = (x) => {
    const k = _o(t.value), A = k.includes(CSS.escape(x.animationName)), I = s.value === "mounted" ? "enter" : "leave";
    if (x.target === t.value && A && (c(`after-${I}`), d("ANIMATION_END"), !r.value)) {
      const C = t.value.style.animationFillMode;
      t.value.style.animationFillMode = "forwards", i = u?.setTimeout(() => {
        t.value?.style.animationFillMode === "forwards" && (t.value.style.animationFillMode = C);
      });
    }
    x.target === t.value && k === "none" && d("ANIMATION_END");
  }, m = (x) => {
    x.target === t.value && (o.value = _o(t.value));
  }, v = ce(t, (x, k) => {
    x ? (n.value = getComputedStyle(x), x.addEventListener("animationstart", m), x.addEventListener("animationcancel", f), x.addEventListener("animationend", f)) : (d("ANIMATION_END"), i !== void 0 && u?.clearTimeout(i), k?.removeEventListener("animationstart", m), k?.removeEventListener("animationcancel", f), k?.removeEventListener("animationend", f));
  }, { immediate: !0 }), g = ce(s, () => {
    const x = _o(t.value);
    o.value = s.value === "mounted" ? x : "none";
  });
  return to(() => {
    v(), g();
  }), { isPresent: T(() => ["mounted", "unmountSuspended"].includes(s.value)) };
}
function _o(e) {
  return e && getComputedStyle(e).animationName || "none";
}
var Yt = O({
  name: "Presence",
  props: {
    present: {
      type: Boolean,
      required: !0
    },
    forceMount: { type: Boolean }
  },
  slots: {},
  setup(e, { slots: t, expose: n }) {
    const { present: o, forceMount: r } = Ee(e), l = $(), { isPresent: i } = ed(o, l);
    n({ present: i });
    let u = t.default({ present: i.value });
    u = ia(u || []);
    const s = Rt();
    if (u && u?.length > 1) {
      const d = s?.parent?.type.name ? `<${s.parent.type.name} />` : "component";
      throw new Error([
        `Detected an invalid children for \`${d}\` for  \`Presence\` component.`,
        "",
        "Note: Presence works similarly to `v-if` directly, but it waits for animation/transition to finished before unmounting. So it expect only one direct child of valid VNode type.",
        "You can apply a few solutions:",
        ["Provide a single child element so that `presence` directive attach correctly.", "Ensure the first child is an actual element instead of a raw text node or comment node."].map((c) => `  - ${c}`).join(`
`)
      ].join(`
`));
    }
    return () => r.value || o.value || i.value ? At(t.default({ present: i.value })[0], { ref: (d) => {
      const c = et(d);
      return typeof c?.hasAttribute > "u" || (c?.hasAttribute("data-reka-popper-content-wrapper") ? l.value = c.firstElementChild : l.value = c), c;
    } }) : null;
  }
});
const Nr = O({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(e, { attrs: t, slots: n }) {
    return () => {
      if (!n.default) return null;
      const o = ia(n.default()), r = o.findIndex((s) => s.type !== Pl);
      if (r === -1) return o;
      const l = o[r];
      delete l.props?.ref;
      const i = l.props ? M(t, l.props) : t, u = ds({
        ...l,
        props: {}
      }, i);
      return o.length === 1 ? u : (o[r] = u, o);
    };
  }
}), td = [
  "area",
  "img",
  "input"
], J = O({
  name: "Primitive",
  inheritAttrs: !1,
  props: {
    asChild: {
      type: Boolean,
      default: !1
    },
    as: {
      type: [String, Object],
      default: "div"
    }
  },
  setup(e, { attrs: t, slots: n }) {
    const o = e.asChild ? "template" : e.as;
    return typeof o == "string" && td.includes(o) ? () => At(o, t) : o !== "template" ? () => At(e.as, t, { default: n.default }) : () => At(Nr, t, { default: n.default });
  }
});
function un() {
  const e = $(), t = T(() => ["#text", "#comment"].includes(e.value?.$el.nodeName) ? e.value?.$el.nextElementSibling : et(e));
  return {
    primitiveElement: e,
    currentElement: t
  };
}
const [Nt, nd] = ye("DialogRoot");
var od = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "DialogRoot",
  props: {
    open: {
      type: Boolean,
      required: !1,
      default: void 0
    },
    defaultOpen: {
      type: Boolean,
      required: !1,
      default: !1
    },
    modal: {
      type: Boolean,
      required: !1,
      default: !0
    }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, r = tt(n, "open", t, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), l = $(), i = $(), { modal: u } = Ee(n);
    return nd({
      open: r,
      modal: u,
      openModal: () => {
        r.value = !0;
      },
      onOpenChange: (s) => {
        r.value = s;
      },
      onOpenToggle: () => {
        r.value = !r.value;
      },
      contentId: "",
      titleId: "",
      descriptionId: "",
      triggerElement: l,
      contentElement: i
    }), (s, d) => D(s.$slots, "default", {
      open: a(r),
      close: () => r.value = !1
    });
  }
}), rd = od, ad = /* @__PURE__ */ O({
  __name: "DialogClose",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "button"
    }
  },
  setup(e) {
    const t = e;
    Y();
    const n = Nt();
    return (o, r) => (b(), S(a(J), M(t, {
      type: o.as === "button" ? "button" : void 0,
      onClick: r[0] || (r[0] = (l) => a(n).onOpenChange(!1))
    }), {
      default: p(() => [D(o.$slots, "default")]),
      _: 3
    }, 16, ["type"]));
  }
}), ld = ad;
const id = "dismissableLayer.pointerDownOutside", sd = "dismissableLayer.focusOutside";
function ai(e, t) {
  const n = t.closest("[data-dismissable-layer]"), o = e.dataset.dismissableLayer === "" ? e : e.querySelector("[data-dismissable-layer]"), r = Array.from(e.ownerDocument.querySelectorAll("[data-dismissable-layer]"));
  return !!(n && (o === n || r.indexOf(o) < r.indexOf(n)));
}
function ud(e, t, n = !0) {
  const o = t?.value?.ownerDocument ?? globalThis?.document, r = $(!1), l = $(() => {
  });
  return Me((i) => {
    if (!St || !Se(n)) return;
    const u = async (d) => {
      const c = d.target;
      if (!(!t?.value || !c)) {
        if (ai(t.value, c)) {
          r.value = !1;
          return;
        }
        if (d.target && !r.value) {
          let m = function() {
            jo(id, e, f);
          };
          const f = { originalEvent: d };
          d.pointerType === "touch" ? (o.removeEventListener("click", l.value), l.value = m, o.addEventListener("click", l.value, { once: !0 })) : m();
        } else o.removeEventListener("click", l.value);
        r.value = !1;
      }
    }, s = window.setTimeout(() => {
      o.addEventListener("pointerdown", u);
    }, 0);
    i(() => {
      window.clearTimeout(s), o.removeEventListener("pointerdown", u), o.removeEventListener("click", l.value);
    });
  }), { onPointerDownCapture: () => {
    Se(n) && (r.value = !0);
  } };
}
function dd(e, t, n = !0) {
  const o = t?.value?.ownerDocument ?? globalThis?.document, r = $(!1);
  return Me((l) => {
    if (!St || !Se(n)) return;
    const i = async (u) => {
      if (!t?.value) return;
      await be(), await be();
      const s = u.target;
      !t.value || !s || ai(t.value, s) || u.target && !r.value && jo(sd, e, { originalEvent: u });
    };
    o.addEventListener("focusin", i), l(() => o.removeEventListener("focusin", i));
  }), {
    onFocusCapture: () => {
      Se(n) && (r.value = !0);
    },
    onBlurCapture: () => {
      Se(n) && (r.value = !1);
    }
  };
}
const Ot = qn({
  layersRoot: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
});
var cd = /* @__PURE__ */ O({
  __name: "DismissableLayer",
  props: {
    disableOutsidePointerEvents: {
      type: Boolean,
      required: !1,
      default: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "dismiss"
  ],
  setup(e, { emit: t }) {
    const n = e, o = t, { forwardRef: r, currentElement: l } = Y(), i = T(() => l.value?.ownerDocument ?? globalThis.document), u = T(() => Ot.layersRoot), s = T(() => l.value ? Array.from(u.value).indexOf(l.value) : -1), d = T(() => Ot.layersWithOutsidePointerEventsDisabled.size > 0), c = T(() => {
      const g = Array.from(u.value), [_] = [...Ot.layersWithOutsidePointerEventsDisabled].slice(-1), x = g.indexOf(_);
      return s.value >= x;
    }), f = ud(async (g) => {
      const _ = [...Ot.branches].some((x) => x?.contains(g.target));
      !c.value || _ || (o("pointerDownOutside", g), o("interactOutside", g), await be(), g.defaultPrevented || o("dismiss"));
    }, l), m = dd((g) => {
      [...Ot.branches].some((x) => x?.contains(g.target)) || (o("focusOutside", g), o("interactOutside", g), g.defaultPrevented || o("dismiss"));
    }, l);
    Eu("Escape", (g) => {
      s.value === u.value.size - 1 && (o("escapeKeyDown", g), g.defaultPrevented || o("dismiss"));
    });
    let v;
    return Me((g) => {
      l.value && (n.disableOutsidePointerEvents && (Ot.layersWithOutsidePointerEventsDisabled.size === 0 && (v = i.value.body.style.pointerEvents, i.value.body.style.pointerEvents = "none"), Ot.layersWithOutsidePointerEventsDisabled.add(l.value)), u.value.add(l.value), g(() => {
        n.disableOutsidePointerEvents && Ot.layersWithOutsidePointerEventsDisabled.size === 1 && (i.value.body.style.pointerEvents = v);
      }));
    }), Me((g) => {
      g(() => {
        l.value && (u.value.delete(l.value), Ot.layersWithOutsidePointerEventsDisabled.delete(l.value));
      });
    }), (g, _) => (b(), S(a(J), {
      ref: a(r),
      "as-child": g.asChild,
      as: g.as,
      "data-dismissable-layer": "",
      style: kt({ pointerEvents: d.value ? c.value ? "auto" : "none" : void 0 }),
      onFocusCapture: a(m).onFocusCapture,
      onBlurCapture: a(m).onBlurCapture,
      onPointerdownCapture: a(f).onPointerDownCapture
    }, {
      default: p(() => [D(g.$slots, "default")]),
      _: 3
    }, 8, [
      "as-child",
      "as",
      "style",
      "onFocusCapture",
      "onBlurCapture",
      "onPointerdownCapture"
    ]));
  }
}), io = cd;
const fd = du(() => $([]));
function pd() {
  const e = fd();
  return {
    add(t) {
      const n = e.value[0];
      t !== n && n?.pause(), e.value = Va(e.value, t), e.value.unshift(t);
    },
    remove(t) {
      e.value = Va(e.value, t), e.value[0]?.resume();
    }
  };
}
function Va(e, t) {
  const n = [...e], o = n.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
function md(e) {
  return e.filter((t) => t.tagName !== "A");
}
const gr = "focusScope.autoFocusOnMount", yr = "focusScope.autoFocusOnUnmount", La = {
  bubbles: !1,
  cancelable: !0
};
function vd(e, { select: t = !1 } = {}) {
  const n = Le();
  for (const o of e)
    if (Lt(o, { select: t }), Le() !== n) return !0;
}
function gd(e) {
  const t = li(e), n = za(t, e), o = za(t.reverse(), e);
  return [n, o];
}
function li(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: (o) => {
    const r = o.tagName === "INPUT" && o.type === "hidden";
    return o.disabled || o.hidden || r ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
  } });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function za(e, t) {
  for (const n of e) if (!yd(n, { upTo: t })) return n;
}
function yd(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function hd(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Lt(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = Le();
    e.focus({ preventScroll: !0 }), e !== n && hd(e) && t && e.select();
  }
}
var bd = /* @__PURE__ */ O({
  __name: "FocusScope",
  props: {
    loop: {
      type: Boolean,
      required: !1,
      default: !1
    },
    trapped: {
      type: Boolean,
      required: !1,
      default: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  emits: ["mountAutoFocus", "unmountAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, o = t, { currentRef: r, currentElement: l } = Y(), i = $(null), u = pd(), s = qn({
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    });
    Me((c) => {
      if (!St) return;
      const f = l.value;
      if (!n.trapped) return;
      function m(x) {
        if (s.paused || !f) return;
        const k = x.target;
        f.contains(k) ? i.value = k : Lt(i.value, { select: !0 });
      }
      function v(x) {
        if (s.paused || !f) return;
        const k = x.relatedTarget;
        k !== null && (f.contains(k) || Lt(i.value, { select: !0 }));
      }
      function g(x) {
        f.contains(i.value) || Lt(f);
      }
      document.addEventListener("focusin", m), document.addEventListener("focusout", v);
      const _ = new MutationObserver(g);
      f && _.observe(f, {
        childList: !0,
        subtree: !0
      }), c(() => {
        document.removeEventListener("focusin", m), document.removeEventListener("focusout", v), _.disconnect();
      });
    }), Me(async (c) => {
      const f = l.value;
      if (await be(), !f) return;
      u.add(s);
      const m = Le();
      if (!f.contains(m)) {
        const g = new CustomEvent(gr, La);
        f.addEventListener(gr, (_) => o("mountAutoFocus", _)), f.dispatchEvent(g), g.defaultPrevented || (vd(md(li(f)), { select: !0 }), Le() === m && Lt(f));
      }
      c(() => {
        f.removeEventListener(gr, (x) => o("mountAutoFocus", x));
        const g = new CustomEvent(yr, La), _ = (x) => {
          o("unmountAutoFocus", x);
        };
        f.addEventListener(yr, _), f.dispatchEvent(g), setTimeout(() => {
          g.defaultPrevented || Lt(m ?? document.body, { select: !0 }), f.removeEventListener(yr, _), u.remove(s);
        }, 0);
      });
    });
    function d(c) {
      if (!n.loop && !n.trapped || s.paused) return;
      const f = c.key === "Tab" && !c.altKey && !c.ctrlKey && !c.metaKey, m = Le();
      if (f && m) {
        const v = c.currentTarget, [g, _] = gd(v);
        g && _ ? !c.shiftKey && m === _ ? (c.preventDefault(), n.loop && Lt(g, { select: !0 })) : c.shiftKey && m === g && (c.preventDefault(), n.loop && Lt(_, { select: !0 })) : m === v && c.preventDefault();
      }
    }
    return (c, f) => (b(), S(a(J), {
      ref_key: "currentRef",
      ref: r,
      tabindex: "-1",
      "as-child": c.asChild,
      as: c.as,
      onKeydown: d
    }, {
      default: p(() => [D(c.$slots, "default")]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), Go = bd;
const _d = "menu.itemSelect", Fr = ["Enter", " "], wd = [
  "ArrowDown",
  "PageUp",
  "Home"
], ii = [
  "ArrowUp",
  "PageDown",
  "End"
], xd = [...wd, ...ii];
[...Fr], [...Fr];
function si(e) {
  return e ? "open" : "closed";
}
function ui(e) {
  return e === "indeterminate";
}
function di(e) {
  return ui(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function Vr(e) {
  const t = Le();
  for (const n of e)
    if (n === t || (n.focus(), Le() !== t)) return;
}
function Cd(e, t) {
  const { x: n, y: o } = e;
  let r = !1;
  for (let l = 0, i = t.length - 1; l < t.length; i = l++) {
    const u = t[l].x, s = t[l].y, d = t[i].x, c = t[i].y;
    s > o != c > o && n < (d - u) * (o - s) / (c - s) + u && (r = !r);
  }
  return r;
}
function Sd(e, t) {
  if (!t) return !1;
  const n = {
    x: e.clientX,
    y: e.clientY
  };
  return Cd(n, t);
}
function Lr(e) {
  return e.pointerType === "mouse";
}
const Ed = "DialogTitle", Od = "DialogContent";
function qd({ titleName: e = Ed, contentName: t = Od, componentLink: n = "dialog.html#title", titleId: o, descriptionId: r, contentElement: l }) {
  const i = `Warning: \`${t}\` requires a \`${e}\` for the component to be accessible for screen reader users.

If you want to hide the \`${e}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://www.reka-ui.com/docs/components/${n}`, u = `Warning: Missing \`Description\` or \`aria-describedby="undefined"\` for ${t}.`;
  Ae(() => {
    document.getElementById(o) || console.warn(i);
    const d = l.value?.getAttribute("aria-describedby");
    r && d && (document.getElementById(r) || console.warn(u));
  });
}
var Dd = /* @__PURE__ */ O({
  __name: "DialogContentImpl",
  props: {
    forceMount: {
      type: Boolean,
      required: !1
    },
    trapFocus: {
      type: Boolean,
      required: !1
    },
    disableOutsidePointerEvents: {
      type: Boolean,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "openAutoFocus",
    "closeAutoFocus"
  ],
  setup(e, { emit: t }) {
    const n = e, o = t, r = Nt(), { forwardRef: l, currentElement: i } = Y();
    return r.titleId ||= dt(void 0, "reka-dialog-title"), r.descriptionId ||= dt(void 0, "reka-dialog-description"), Ae(() => {
      r.contentElement = i, Le() !== document.body && (r.triggerElement.value = Le());
    }), process.env.NODE_ENV !== "production" && qd({
      titleName: "DialogTitle",
      contentName: "DialogContent",
      componentLink: "dialog.html#title",
      titleId: r.titleId,
      descriptionId: r.descriptionId,
      contentElement: i
    }), (u, s) => (b(), S(a(Go), {
      "as-child": "",
      loop: "",
      trapped: n.trapFocus,
      onMountAutoFocus: s[5] || (s[5] = (d) => o("openAutoFocus", d)),
      onUnmountAutoFocus: s[6] || (s[6] = (d) => o("closeAutoFocus", d))
    }, {
      default: p(() => [y(a(io), M({
        id: a(r).contentId,
        ref: a(l),
        as: u.as,
        "as-child": u.asChild,
        "disable-outside-pointer-events": u.disableOutsidePointerEvents,
        role: "dialog",
        "aria-describedby": a(r).descriptionId,
        "aria-labelledby": a(r).titleId,
        "data-state": a(si)(a(r).open.value)
      }, u.$attrs, {
        onDismiss: s[0] || (s[0] = (d) => a(r).onOpenChange(!1)),
        onEscapeKeyDown: s[1] || (s[1] = (d) => o("escapeKeyDown", d)),
        onFocusOutside: s[2] || (s[2] = (d) => o("focusOutside", d)),
        onInteractOutside: s[3] || (s[3] = (d) => o("interactOutside", d)),
        onPointerDownOutside: s[4] || (s[4] = (d) => o("pointerDownOutside", d))
      }), {
        default: p(() => [D(u.$slots, "default")]),
        _: 3
      }, 16, [
        "id",
        "as",
        "as-child",
        "disable-outside-pointer-events",
        "aria-describedby",
        "aria-labelledby",
        "data-state"
      ])]),
      _: 3
    }, 8, ["trapped"]));
  }
}), ci = Dd, kd = /* @__PURE__ */ O({
  __name: "DialogContentModal",
  props: {
    forceMount: {
      type: Boolean,
      required: !1
    },
    trapFocus: {
      type: Boolean,
      required: !1
    },
    disableOutsidePointerEvents: {
      type: Boolean,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "openAutoFocus",
    "closeAutoFocus"
  ],
  setup(e, { emit: t }) {
    const n = e, o = t, r = Nt(), l = In(o), { forwardRef: i, currentElement: u } = Y();
    return Wo(u), (s, d) => (b(), S(ci, M({
      ...n,
      ...a(l)
    }, {
      ref: a(i),
      "trap-focus": a(r).open.value,
      "disable-outside-pointer-events": !0,
      onCloseAutoFocus: d[0] || (d[0] = (c) => {
        c.defaultPrevented || (c.preventDefault(), a(r).triggerElement.value?.focus());
      }),
      onPointerDownOutside: d[1] || (d[1] = (c) => {
        const f = c.detail.originalEvent, m = f.button === 0 && f.ctrlKey === !0;
        (f.button === 2 || m) && c.preventDefault();
      }),
      onFocusOutside: d[2] || (d[2] = (c) => {
        c.preventDefault();
      })
    }), {
      default: p(() => [D(s.$slots, "default")]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), Pd = kd, Ad = /* @__PURE__ */ O({
  __name: "DialogContentNonModal",
  props: {
    forceMount: {
      type: Boolean,
      required: !1
    },
    trapFocus: {
      type: Boolean,
      required: !1
    },
    disableOutsidePointerEvents: {
      type: Boolean,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "openAutoFocus",
    "closeAutoFocus"
  ],
  setup(e, { emit: t }) {
    const n = e, r = In(t);
    Y();
    const l = Nt(), i = $(!1), u = $(!1);
    return (s, d) => (b(), S(ci, M({
      ...n,
      ...a(r)
    }, {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      onCloseAutoFocus: d[0] || (d[0] = (c) => {
        c.defaultPrevented || (i.value || a(l).triggerElement.value?.focus(), c.preventDefault()), i.value = !1, u.value = !1;
      }),
      onInteractOutside: d[1] || (d[1] = (c) => {
        c.defaultPrevented || (i.value = !0, c.detail.originalEvent.type === "pointerdown" && (u.value = !0));
        const f = c.target;
        a(l).triggerElement.value?.contains(f) && c.preventDefault(), c.detail.originalEvent.type === "focusin" && u.value && c.preventDefault();
      })
    }), {
      default: p(() => [D(s.$slots, "default")]),
      _: 3
    }, 16));
  }
}), Id = Ad, Td = /* @__PURE__ */ O({
  __name: "DialogContent",
  props: {
    forceMount: {
      type: Boolean,
      required: !1
    },
    disableOutsidePointerEvents: {
      type: Boolean,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "openAutoFocus",
    "closeAutoFocus"
  ],
  setup(e, { emit: t }) {
    const n = e, o = t, r = Nt(), l = In(o), { forwardRef: i } = Y();
    return (u, s) => (b(), S(a(Yt), { present: u.forceMount || a(r).open.value }, {
      default: p(() => [a(r).modal.value ? (b(), S(Pd, M({
        key: 0,
        ref: a(i)
      }, {
        ...n,
        ...a(l),
        ...u.$attrs
      }), {
        default: p(() => [D(u.$slots, "default")]),
        _: 3
      }, 16)) : (b(), S(Id, M({
        key: 1,
        ref: a(i)
      }, {
        ...n,
        ...a(l),
        ...u.$attrs
      }), {
        default: p(() => [D(u.$slots, "default")]),
        _: 3
      }, 16))]),
      _: 3
    }, 8, ["present"]));
  }
}), Bd = Td, $d = /* @__PURE__ */ O({
  __name: "DialogDescription",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "p"
    }
  },
  setup(e) {
    const t = e;
    Y();
    const n = Nt();
    return (o, r) => (b(), S(a(J), M(t, { id: a(n).descriptionId }), {
      default: p(() => [D(o.$slots, "default")]),
      _: 3
    }, 16, ["id"]));
  }
}), Rd = $d, Md = /* @__PURE__ */ O({
  __name: "DialogOverlayImpl",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const t = Nt();
    return Uo(!0), Y(), (n, o) => (b(), S(a(J), {
      as: n.as,
      "as-child": n.asChild,
      "data-state": a(t).open.value ? "open" : "closed",
      style: { "pointer-events": "auto" }
    }, {
      default: p(() => [D(n.$slots, "default")]),
      _: 3
    }, 8, [
      "as",
      "as-child",
      "data-state"
    ]));
  }
}), Nd = Md, Fd = /* @__PURE__ */ O({
  __name: "DialogOverlay",
  props: {
    forceMount: {
      type: Boolean,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const t = Nt(), { forwardRef: n } = Y();
    return (o, r) => a(t)?.modal.value ? (b(), S(a(Yt), {
      key: 0,
      present: o.forceMount || a(t).open.value
    }, {
      default: p(() => [y(Nd, M(o.$attrs, {
        ref: a(n),
        as: o.as,
        "as-child": o.asChild
      }), {
        default: p(() => [D(o.$slots, "default")]),
        _: 3
      }, 16, ["as", "as-child"])]),
      _: 3
    }, 8, ["present"])) : ee("v-if", !0);
  }
}), Vd = Fd, Ld = /* @__PURE__ */ O({
  __name: "Teleport",
  props: {
    to: {
      type: null,
      required: !1,
      default: "body"
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    defer: {
      type: Boolean,
      required: !1
    },
    forceMount: {
      type: Boolean,
      required: !1
    }
  },
  setup(e) {
    const t = ti();
    return (n, o) => a(t) || n.forceMount ? (b(), S(Al, {
      key: 0,
      to: n.to,
      disabled: n.disabled,
      defer: n.defer
    }, [D(n.$slots, "default")], 8, [
      "to",
      "disabled",
      "defer"
    ])) : ee("v-if", !0);
  }
}), so = Ld, zd = /* @__PURE__ */ O({
  __name: "DialogPortal",
  props: {
    to: {
      type: null,
      required: !1
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    defer: {
      type: Boolean,
      required: !1
    },
    forceMount: {
      type: Boolean,
      required: !1
    }
  },
  setup(e) {
    const t = e;
    return (n, o) => (b(), S(a(so), Oe(Be(t)), {
      default: p(() => [D(n.$slots, "default")]),
      _: 3
    }, 16));
  }
}), jd = zd, Ud = /* @__PURE__ */ O({
  __name: "DialogTitle",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "h2"
    }
  },
  setup(e) {
    const t = e, n = Nt();
    return Y(), (o, r) => (b(), S(a(J), M(t, { id: a(n).titleId }), {
      default: p(() => [D(o.$slots, "default")]),
      _: 3
    }, 16, ["id"]));
  }
}), Wd = Ud;
const ja = "data-reka-collection-item";
function yt(e = {}) {
  const { key: t = "", isProvider: n = !1 } = e, o = `${t}CollectionProvider`;
  let r;
  if (n) {
    const c = $(/* @__PURE__ */ new Map());
    r = {
      collectionRef: $(),
      itemMap: c
    }, ta(o, r);
  } else r = ea(o);
  const l = (c = !1) => {
    const f = r.collectionRef.value;
    if (!f) return [];
    const m = Array.from(f.querySelectorAll(`[${ja}]`)), g = Array.from(r.itemMap.value.values()).sort((_, x) => m.indexOf(_.ref) - m.indexOf(x.ref));
    return c ? g : g.filter((_) => _.ref.dataset.disabled !== "");
  }, i = O({
    name: "CollectionSlot",
    setup(c, { slots: f }) {
      const { primitiveElement: m, currentElement: v } = un();
      return ce(v, () => {
        r.collectionRef.value = v.value;
      }), () => At(Nr, { ref: m }, f);
    }
  }), u = O({
    name: "CollectionItem",
    inheritAttrs: !1,
    props: { value: { validator: () => !0 } },
    setup(c, { slots: f, attrs: m }) {
      const { primitiveElement: v, currentElement: g } = un();
      return Me((_) => {
        if (g.value) {
          const x = cs(g.value);
          r.itemMap.value.set(x, {
            ref: g.value,
            value: c.value
          }), _(() => r.itemMap.value.delete(x));
        }
      }), () => At(Nr, {
        ...m,
        [ja]: "",
        ref: v
      }, f);
    }
  }), s = T(() => Array.from(r.itemMap.value.values())), d = T(() => r.itemMap.value.size);
  return {
    getItems: l,
    reactiveItems: s,
    itemMapSize: d,
    CollectionSlot: i,
    CollectionItem: u
  };
}
const Gd = "rovingFocusGroup.onEntryFocus", Hd = {
  bubbles: !1,
  cancelable: !0
}, Kd = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function Yd(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function Xd(e, t, n) {
  const o = Yd(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(o)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(o)))
    return Kd[o];
}
function fi(e, t = !1) {
  const n = Le();
  for (const o of e)
    if (o === n || (o.focus({ preventScroll: t }), Le() !== n)) return;
}
function Jd(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
const [Zd, Qd] = ye("RovingFocusGroup");
var ec = /* @__PURE__ */ O({
  __name: "RovingFocusGroup",
  props: {
    orientation: {
      type: String,
      required: !1,
      default: void 0
    },
    dir: {
      type: String,
      required: !1
    },
    loop: {
      type: Boolean,
      required: !1,
      default: !1
    },
    currentTabStopId: {
      type: [String, null],
      required: !1
    },
    defaultCurrentTabStopId: {
      type: String,
      required: !1
    },
    preventScrollOnEntryFocus: {
      type: Boolean,
      required: !1,
      default: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  emits: ["entryFocus", "update:currentTabStopId"],
  setup(e, { expose: t, emit: n }) {
    const o = e, r = n, { loop: l, orientation: i, dir: u } = Ee(o), s = An(u), d = tt(o, "currentTabStopId", r, {
      defaultValue: o.defaultCurrentTabStopId,
      passive: o.currentTabStopId === void 0
    }), c = $(!1), f = $(!1), m = $(0), { getItems: v, CollectionSlot: g } = yt({ isProvider: !0 });
    function _(k) {
      const A = !f.value;
      if (k.currentTarget && k.target === k.currentTarget && A && !c.value) {
        const I = new CustomEvent(Gd, Hd);
        if (k.currentTarget.dispatchEvent(I), r("entryFocus", I), !I.defaultPrevented) {
          const C = v().map((E) => E.ref).filter((E) => E.dataset.disabled !== ""), B = C.find((E) => E.getAttribute("data-active") === ""), h = C.find((E) => E.getAttribute("data-highlighted") === ""), w = C.find((E) => E.id === d.value), P = [
            B,
            h,
            w,
            ...C
          ].filter(Boolean);
          fi(P, o.preventScrollOnEntryFocus);
        }
      }
      f.value = !1;
    }
    function x() {
      setTimeout(() => {
        f.value = !1;
      }, 1);
    }
    return t({ getItems: v }), Qd({
      loop: l,
      dir: s,
      orientation: i,
      currentTabStopId: d,
      onItemFocus: (k) => {
        d.value = k;
      },
      onItemShiftTab: () => {
        c.value = !0;
      },
      onFocusableItemAdd: () => {
        m.value++;
      },
      onFocusableItemRemove: () => {
        m.value--;
      }
    }), (k, A) => (b(), S(a(g), null, {
      default: p(() => [y(a(J), {
        tabindex: c.value || m.value === 0 ? -1 : 0,
        "data-orientation": a(i),
        as: k.as,
        "as-child": k.asChild,
        dir: a(s),
        style: { outline: "none" },
        onMousedown: A[0] || (A[0] = (I) => f.value = !0),
        onMouseup: x,
        onFocus: _,
        onBlur: A[1] || (A[1] = (I) => c.value = !1)
      }, {
        default: p(() => [D(k.$slots, "default")]),
        _: 3
      }, 8, [
        "tabindex",
        "data-orientation",
        "as",
        "as-child",
        "dir"
      ])]),
      _: 3
    }));
  }
}), pi = ec, tc = /* @__PURE__ */ O({
  __name: "RovingFocusItem",
  props: {
    tabStopId: {
      type: String,
      required: !1
    },
    focusable: {
      type: Boolean,
      required: !1,
      default: !0
    },
    active: {
      type: Boolean,
      required: !1
    },
    allowShiftKey: {
      type: Boolean,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "span"
    }
  },
  setup(e) {
    const t = e, n = Zd(), o = dt(), r = T(() => t.tabStopId || o), l = T(() => n.currentTabStopId.value === r.value), { getItems: i, CollectionItem: u } = yt();
    Ae(() => {
      t.focusable && n.onFocusableItemAdd();
    }), to(() => {
      t.focusable && n.onFocusableItemRemove();
    });
    function s(d) {
      if (d.key === "Tab" && d.shiftKey) {
        n.onItemShiftTab();
        return;
      }
      if (d.target !== d.currentTarget) return;
      const c = Xd(d, n.orientation.value, n.dir.value);
      if (c !== void 0) {
        if (d.metaKey || d.ctrlKey || d.altKey || !t.allowShiftKey && d.shiftKey) return;
        d.preventDefault();
        let f = [...i().map((m) => m.ref).filter((m) => m.dataset.disabled !== "")];
        if (c === "last") f.reverse();
        else if (c === "prev" || c === "next") {
          c === "prev" && f.reverse();
          const m = f.indexOf(d.currentTarget);
          f = n.loop.value ? Jd(f, m + 1) : f.slice(m + 1);
        }
        be(() => fi(f));
      }
    }
    return (d, c) => (b(), S(a(u), null, {
      default: p(() => [y(a(J), {
        tabindex: l.value ? 0 : -1,
        "data-orientation": a(n).orientation.value,
        "data-active": d.active ? "" : void 0,
        "data-disabled": d.focusable ? void 0 : "",
        as: d.as,
        "as-child": d.asChild,
        onMousedown: c[0] || (c[0] = (f) => {
          d.focusable ? a(n).onItemFocus(r.value) : f.preventDefault();
        }),
        onFocus: c[1] || (c[1] = (f) => a(n).onItemFocus(r.value)),
        onKeydown: s
      }, {
        default: p(() => [D(d.$slots, "default")]),
        _: 3
      }, 8, [
        "tabindex",
        "data-orientation",
        "data-active",
        "data-disabled",
        "as",
        "as-child"
      ])]),
      _: 3
    }));
  }
}), nc = tc, oc = /* @__PURE__ */ O({
  __name: "VisuallyHidden",
  props: {
    feature: {
      type: String,
      required: !1,
      default: "focusable"
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "span"
    }
  },
  setup(e) {
    return (t, n) => (b(), S(a(J), {
      as: t.as,
      "as-child": t.asChild,
      "aria-hidden": t.feature === "focusable" ? "true" : void 0,
      "data-hidden": t.feature === "fully-hidden" ? "" : void 0,
      tabindex: t.feature === "fully-hidden" ? "-1" : void 0,
      style: {
        position: "absolute",
        border: 0,
        width: "1px",
        height: "1px",
        padding: 0,
        margin: "-1px",
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        clipPath: "inset(50%)",
        whiteSpace: "nowrap",
        wordWrap: "normal",
        top: "-1px",
        left: "-1px"
      }
    }, {
      default: p(() => [D(t.$slots, "default")]),
      _: 3
    }, 8, [
      "as",
      "as-child",
      "aria-hidden",
      "data-hidden",
      "tabindex"
    ]));
  }
}), fa = oc, rc = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "VisuallyHiddenInputBubble",
  props: {
    name: {
      type: String,
      required: !0
    },
    value: {
      type: null,
      required: !0
    },
    checked: {
      type: Boolean,
      required: !1,
      default: void 0
    },
    required: {
      type: Boolean,
      required: !1
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    feature: {
      type: String,
      required: !1,
      default: "fully-hidden"
    }
  },
  setup(e) {
    const t = e, { primitiveElement: n, currentElement: o } = un(), r = T(() => t.checked ?? t.value);
    return ce(r, (l, i) => {
      if (!o.value) return;
      const u = o.value, s = window.HTMLInputElement.prototype, c = Object.getOwnPropertyDescriptor(s, "value").set;
      if (c && l !== i) {
        const f = new Event("input", { bubbles: !0 }), m = new Event("change", { bubbles: !0 });
        c.call(u, l), u.dispatchEvent(f), u.dispatchEvent(m);
      }
    }), (l, i) => (b(), S(fa, M({
      ref_key: "primitiveElement",
      ref: n
    }, {
      ...t,
      ...l.$attrs
    }, { as: "input" }), null, 16));
  }
}), Ua = rc, ac = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "VisuallyHiddenInput",
  props: {
    name: {
      type: String,
      required: !0
    },
    value: {
      type: null,
      required: !0
    },
    checked: {
      type: Boolean,
      required: !1,
      default: void 0
    },
    required: {
      type: Boolean,
      required: !1
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    feature: {
      type: String,
      required: !1,
      default: "fully-hidden"
    }
  },
  setup(e) {
    const t = e, n = T(() => typeof t.value == "object" && Array.isArray(t.value) && t.value.length === 0 && t.required), o = T(() => typeof t.value == "string" || typeof t.value == "number" || typeof t.value == "boolean" || t.value === null || t.value === void 0 ? [{
      name: t.name,
      value: t.value
    }] : typeof t.value == "object" && Array.isArray(t.value) ? t.value.flatMap((r, l) => typeof r == "object" ? Object.entries(r).map(([i, u]) => ({
      name: `${t.name}[${l}][${i}]`,
      value: u
    })) : {
      name: `${t.name}[${l}]`,
      value: r
    }) : t.value !== null && typeof t.value == "object" && !Array.isArray(t.value) ? Object.entries(t.value).map(([r, l]) => ({
      name: `${t.name}[${r}]`,
      value: l
    })) : []);
    return (r, l) => (b(), K(me, null, [ee(" We render single input if it's required "), n.value ? (b(), S(Ua, M({ key: r.name }, {
      ...t,
      ...r.$attrs
    }, {
      name: r.name,
      value: r.value
    }), null, 16, ["name", "value"])) : (b(!0), K(me, { key: 1 }, Ve(o.value, (i) => (b(), S(Ua, M({ key: i.name }, { ref_for: !0 }, {
      ...t,
      ...r.$attrs
    }, {
      name: i.name,
      value: i.value
    }), null, 16, ["name", "value"]))), 128))], 2112));
  }
}), uo = ac;
const [mi, lc] = ye("PopperRoot");
var ic = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "PopperRoot",
  setup(e) {
    const t = $();
    return lc({
      anchor: t,
      onAnchorChange: (n) => t.value = n
    }), (n, o) => D(n.$slots, "default");
  }
}), Ho = ic, sc = /* @__PURE__ */ O({
  __name: "PopperAnchor",
  props: {
    reference: {
      type: null,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const t = e, { forwardRef: n, currentElement: o } = Y(), r = mi();
    return Il(() => {
      r.onAnchorChange(t.reference ?? o.value);
    }), (l, i) => (b(), S(a(J), {
      ref: a(n),
      as: l.as,
      "as-child": l.asChild
    }, {
      default: p(() => [D(l.$slots, "default")]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), Ko = sc;
const uc = {
  key: 0,
  d: "M0 0L6 6L12 0"
}, dc = {
  key: 1,
  d: "M0 0L4.58579 4.58579C5.36683 5.36683 6.63316 5.36684 7.41421 4.58579L12 0"
};
var cc = /* @__PURE__ */ O({
  __name: "Arrow",
  props: {
    width: {
      type: Number,
      required: !1,
      default: 10
    },
    height: {
      type: Number,
      required: !1,
      default: 5
    },
    rounded: {
      type: Boolean,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "svg"
    }
  },
  setup(e) {
    const t = e;
    return Y(), (n, o) => (b(), S(a(J), M(t, {
      width: n.width,
      height: n.height,
      viewBox: n.asChild ? void 0 : "0 0 12 6",
      preserveAspectRatio: n.asChild ? void 0 : "none"
    }), {
      default: p(() => [D(n.$slots, "default", {}, () => [n.rounded ? (b(), K("path", dc)) : (b(), K("path", uc))])]),
      _: 3
    }, 16, [
      "width",
      "height",
      "viewBox",
      "preserveAspectRatio"
    ]));
  }
}), fc = cc;
function pc(e) {
  return e !== null;
}
function mc(e) {
  return {
    name: "transformOrigin",
    options: e,
    fn(t) {
      const { placement: n, rects: o, middlewareData: r } = t, i = r.arrow?.centerOffset !== 0, u = i ? 0 : e.arrowWidth, s = i ? 0 : e.arrowHeight, [d, c] = zr(n), f = {
        start: "0%",
        center: "50%",
        end: "100%"
      }[c], m = (r.arrow?.x ?? 0) + u / 2, v = (r.arrow?.y ?? 0) + s / 2;
      let g = "", _ = "";
      return d === "bottom" ? (g = i ? f : `${m}px`, _ = `${-s}px`) : d === "top" ? (g = i ? f : `${m}px`, _ = `${o.floating.height + s}px`) : d === "right" ? (g = `${-s}px`, _ = i ? f : `${v}px`) : d === "left" && (g = `${o.floating.width + s}px`, _ = i ? f : `${v}px`), { data: {
        x: g,
        y: _
      } };
    }
  };
}
function zr(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
const vc = ["top", "right", "bottom", "left"], Wt = Math.min, rt = Math.max, No = Math.round, wo = Math.floor, wt = (e) => ({
  x: e,
  y: e
}), gc = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, yc = {
  start: "end",
  end: "start"
};
function jr(e, t, n) {
  return rt(e, Wt(t, n));
}
function Bt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function $t(e) {
  return e.split("-")[0];
}
function Bn(e) {
  return e.split("-")[1];
}
function pa(e) {
  return e === "x" ? "y" : "x";
}
function ma(e) {
  return e === "y" ? "height" : "width";
}
const hc = /* @__PURE__ */ new Set(["top", "bottom"]);
function bt(e) {
  return hc.has($t(e)) ? "y" : "x";
}
function va(e) {
  return pa(bt(e));
}
function bc(e, t, n) {
  n === void 0 && (n = !1);
  const o = Bn(e), r = va(e), l = ma(r);
  let i = r === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[l] > t.floating[l] && (i = Fo(i)), [i, Fo(i)];
}
function _c(e) {
  const t = Fo(e);
  return [Ur(e), t, Ur(t)];
}
function Ur(e) {
  return e.replace(/start|end/g, (t) => yc[t]);
}
const Wa = ["left", "right"], Ga = ["right", "left"], wc = ["top", "bottom"], xc = ["bottom", "top"];
function Cc(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? Ga : Wa : t ? Wa : Ga;
    case "left":
    case "right":
      return t ? wc : xc;
    default:
      return [];
  }
}
function Sc(e, t, n, o) {
  const r = Bn(e);
  let l = Cc($t(e), n === "start", o);
  return r && (l = l.map((i) => i + "-" + r), t && (l = l.concat(l.map(Ur)))), l;
}
function Fo(e) {
  return e.replace(/left|right|bottom|top/g, (t) => gc[t]);
}
function Ec(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function vi(e) {
  return typeof e != "number" ? Ec(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Vo(e) {
  const {
    x: t,
    y: n,
    width: o,
    height: r
  } = e;
  return {
    width: o,
    height: r,
    top: n,
    left: t,
    right: t + o,
    bottom: n + r,
    x: t,
    y: n
  };
}
function Ha(e, t, n) {
  let {
    reference: o,
    floating: r
  } = e;
  const l = bt(t), i = va(t), u = ma(i), s = $t(t), d = l === "y", c = o.x + o.width / 2 - r.width / 2, f = o.y + o.height / 2 - r.height / 2, m = o[u] / 2 - r[u] / 2;
  let v;
  switch (s) {
    case "top":
      v = {
        x: c,
        y: o.y - r.height
      };
      break;
    case "bottom":
      v = {
        x: c,
        y: o.y + o.height
      };
      break;
    case "right":
      v = {
        x: o.x + o.width,
        y: f
      };
      break;
    case "left":
      v = {
        x: o.x - r.width,
        y: f
      };
      break;
    default:
      v = {
        x: o.x,
        y: o.y
      };
  }
  switch (Bn(t)) {
    case "start":
      v[i] -= m * (n && d ? -1 : 1);
      break;
    case "end":
      v[i] += m * (n && d ? -1 : 1);
      break;
  }
  return v;
}
const Oc = async (e, t, n) => {
  const {
    placement: o = "bottom",
    strategy: r = "absolute",
    middleware: l = [],
    platform: i
  } = n, u = l.filter(Boolean), s = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let d = await i.getElementRects({
    reference: e,
    floating: t,
    strategy: r
  }), {
    x: c,
    y: f
  } = Ha(d, o, s), m = o, v = {}, g = 0;
  for (let _ = 0; _ < u.length; _++) {
    const {
      name: x,
      fn: k
    } = u[_], {
      x: A,
      y: I,
      data: C,
      reset: B
    } = await k({
      x: c,
      y: f,
      initialPlacement: o,
      placement: m,
      strategy: r,
      middlewareData: v,
      rects: d,
      platform: i,
      elements: {
        reference: e,
        floating: t
      }
    });
    c = A ?? c, f = I ?? f, v = {
      ...v,
      [x]: {
        ...v[x],
        ...C
      }
    }, B && g <= 50 && (g++, typeof B == "object" && (B.placement && (m = B.placement), B.rects && (d = B.rects === !0 ? await i.getElementRects({
      reference: e,
      floating: t,
      strategy: r
    }) : B.rects), {
      x: c,
      y: f
    } = Ha(d, m, s)), _ = -1);
  }
  return {
    x: c,
    y: f,
    placement: m,
    strategy: r,
    middlewareData: v
  };
};
async function Zn(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: o,
    y: r,
    platform: l,
    rects: i,
    elements: u,
    strategy: s
  } = e, {
    boundary: d = "clippingAncestors",
    rootBoundary: c = "viewport",
    elementContext: f = "floating",
    altBoundary: m = !1,
    padding: v = 0
  } = Bt(t, e), g = vi(v), x = u[m ? f === "floating" ? "reference" : "floating" : f], k = Vo(await l.getClippingRect({
    element: (n = await (l.isElement == null ? void 0 : l.isElement(x))) == null || n ? x : x.contextElement || await (l.getDocumentElement == null ? void 0 : l.getDocumentElement(u.floating)),
    boundary: d,
    rootBoundary: c,
    strategy: s
  })), A = f === "floating" ? {
    x: o,
    y: r,
    width: i.floating.width,
    height: i.floating.height
  } : i.reference, I = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(u.floating)), C = await (l.isElement == null ? void 0 : l.isElement(I)) ? await (l.getScale == null ? void 0 : l.getScale(I)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, B = Vo(l.convertOffsetParentRelativeRectToViewportRelativeRect ? await l.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: u,
    rect: A,
    offsetParent: I,
    strategy: s
  }) : A);
  return {
    top: (k.top - B.top + g.top) / C.y,
    bottom: (B.bottom - k.bottom + g.bottom) / C.y,
    left: (k.left - B.left + g.left) / C.x,
    right: (B.right - k.right + g.right) / C.x
  };
}
const qc = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: o,
      placement: r,
      rects: l,
      platform: i,
      elements: u,
      middlewareData: s
    } = t, {
      element: d,
      padding: c = 0
    } = Bt(e, t) || {};
    if (d == null)
      return {};
    const f = vi(c), m = {
      x: n,
      y: o
    }, v = va(r), g = ma(v), _ = await i.getDimensions(d), x = v === "y", k = x ? "top" : "left", A = x ? "bottom" : "right", I = x ? "clientHeight" : "clientWidth", C = l.reference[g] + l.reference[v] - m[v] - l.floating[g], B = m[v] - l.reference[v], h = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(d));
    let w = h ? h[I] : 0;
    (!w || !await (i.isElement == null ? void 0 : i.isElement(h))) && (w = u.floating[I] || l.floating[g]);
    const P = C / 2 - B / 2, E = w / 2 - _[g] / 2 - 1, R = Wt(f[k], E), V = Wt(f[A], E), z = R, oe = w - _[g] - V, ne = w / 2 - _[g] / 2 + P, ie = jr(z, ne, oe), re = !s.arrow && Bn(r) != null && ne !== ie && l.reference[g] / 2 - (ne < z ? R : V) - _[g] / 2 < 0, G = re ? ne < z ? ne - z : ne - oe : 0;
    return {
      [v]: m[v] + G,
      data: {
        [v]: ie,
        centerOffset: ne - ie - G,
        ...re && {
          alignmentOffset: G
        }
      },
      reset: re
    };
  }
}), Dc = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, o;
      const {
        placement: r,
        middlewareData: l,
        rects: i,
        initialPlacement: u,
        platform: s,
        elements: d
      } = t, {
        mainAxis: c = !0,
        crossAxis: f = !0,
        fallbackPlacements: m,
        fallbackStrategy: v = "bestFit",
        fallbackAxisSideDirection: g = "none",
        flipAlignment: _ = !0,
        ...x
      } = Bt(e, t);
      if ((n = l.arrow) != null && n.alignmentOffset)
        return {};
      const k = $t(r), A = bt(u), I = $t(u) === u, C = await (s.isRTL == null ? void 0 : s.isRTL(d.floating)), B = m || (I || !_ ? [Fo(u)] : _c(u)), h = g !== "none";
      !m && h && B.push(...Sc(u, _, g, C));
      const w = [u, ...B], P = await Zn(t, x), E = [];
      let R = ((o = l.flip) == null ? void 0 : o.overflows) || [];
      if (c && E.push(P[k]), f) {
        const ne = bc(r, i, C);
        E.push(P[ne[0]], P[ne[1]]);
      }
      if (R = [...R, {
        placement: r,
        overflows: E
      }], !E.every((ne) => ne <= 0)) {
        var V, z;
        const ne = (((V = l.flip) == null ? void 0 : V.index) || 0) + 1, ie = w[ne];
        if (ie && (!(f === "alignment" ? A !== bt(ie) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        R.every((q) => bt(q.placement) === A ? q.overflows[0] > 0 : !0)))
          return {
            data: {
              index: ne,
              overflows: R
            },
            reset: {
              placement: ie
            }
          };
        let re = (z = R.filter((G) => G.overflows[0] <= 0).sort((G, q) => G.overflows[1] - q.overflows[1])[0]) == null ? void 0 : z.placement;
        if (!re)
          switch (v) {
            case "bestFit": {
              var oe;
              const G = (oe = R.filter((q) => {
                if (h) {
                  const L = bt(q.placement);
                  return L === A || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  L === "y";
                }
                return !0;
              }).map((q) => [q.placement, q.overflows.filter((L) => L > 0).reduce((L, j) => L + j, 0)]).sort((q, L) => q[1] - L[1])[0]) == null ? void 0 : oe[0];
              G && (re = G);
              break;
            }
            case "initialPlacement":
              re = u;
              break;
          }
        if (r !== re)
          return {
            reset: {
              placement: re
            }
          };
      }
      return {};
    }
  };
};
function Ka(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Ya(e) {
  return vc.some((t) => e[t] >= 0);
}
const kc = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: o = "referenceHidden",
        ...r
      } = Bt(e, t);
      switch (o) {
        case "referenceHidden": {
          const l = await Zn(t, {
            ...r,
            elementContext: "reference"
          }), i = Ka(l, n.reference);
          return {
            data: {
              referenceHiddenOffsets: i,
              referenceHidden: Ya(i)
            }
          };
        }
        case "escaped": {
          const l = await Zn(t, {
            ...r,
            altBoundary: !0
          }), i = Ka(l, n.floating);
          return {
            data: {
              escapedOffsets: i,
              escaped: Ya(i)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, gi = /* @__PURE__ */ new Set(["left", "top"]);
async function Pc(e, t) {
  const {
    placement: n,
    platform: o,
    elements: r
  } = e, l = await (o.isRTL == null ? void 0 : o.isRTL(r.floating)), i = $t(n), u = Bn(n), s = bt(n) === "y", d = gi.has(i) ? -1 : 1, c = l && s ? -1 : 1, f = Bt(t, e);
  let {
    mainAxis: m,
    crossAxis: v,
    alignmentAxis: g
  } = typeof f == "number" ? {
    mainAxis: f,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: f.mainAxis || 0,
    crossAxis: f.crossAxis || 0,
    alignmentAxis: f.alignmentAxis
  };
  return u && typeof g == "number" && (v = u === "end" ? g * -1 : g), s ? {
    x: v * c,
    y: m * d
  } : {
    x: m * d,
    y: v * c
  };
}
const Ac = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, o;
      const {
        x: r,
        y: l,
        placement: i,
        middlewareData: u
      } = t, s = await Pc(t, e);
      return i === ((n = u.offset) == null ? void 0 : n.placement) && (o = u.arrow) != null && o.alignmentOffset ? {} : {
        x: r + s.x,
        y: l + s.y,
        data: {
          ...s,
          placement: i
        }
      };
    }
  };
}, Ic = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: o,
        placement: r
      } = t, {
        mainAxis: l = !0,
        crossAxis: i = !1,
        limiter: u = {
          fn: (x) => {
            let {
              x: k,
              y: A
            } = x;
            return {
              x: k,
              y: A
            };
          }
        },
        ...s
      } = Bt(e, t), d = {
        x: n,
        y: o
      }, c = await Zn(t, s), f = bt($t(r)), m = pa(f);
      let v = d[m], g = d[f];
      if (l) {
        const x = m === "y" ? "top" : "left", k = m === "y" ? "bottom" : "right", A = v + c[x], I = v - c[k];
        v = jr(A, v, I);
      }
      if (i) {
        const x = f === "y" ? "top" : "left", k = f === "y" ? "bottom" : "right", A = g + c[x], I = g - c[k];
        g = jr(A, g, I);
      }
      const _ = u.fn({
        ...t,
        [m]: v,
        [f]: g
      });
      return {
        ..._,
        data: {
          x: _.x - n,
          y: _.y - o,
          enabled: {
            [m]: l,
            [f]: i
          }
        }
      };
    }
  };
}, Tc = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: o,
        placement: r,
        rects: l,
        middlewareData: i
      } = t, {
        offset: u = 0,
        mainAxis: s = !0,
        crossAxis: d = !0
      } = Bt(e, t), c = {
        x: n,
        y: o
      }, f = bt(r), m = pa(f);
      let v = c[m], g = c[f];
      const _ = Bt(u, t), x = typeof _ == "number" ? {
        mainAxis: _,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ..._
      };
      if (s) {
        const I = m === "y" ? "height" : "width", C = l.reference[m] - l.floating[I] + x.mainAxis, B = l.reference[m] + l.reference[I] - x.mainAxis;
        v < C ? v = C : v > B && (v = B);
      }
      if (d) {
        var k, A;
        const I = m === "y" ? "width" : "height", C = gi.has($t(r)), B = l.reference[f] - l.floating[I] + (C && ((k = i.offset) == null ? void 0 : k[f]) || 0) + (C ? 0 : x.crossAxis), h = l.reference[f] + l.reference[I] + (C ? 0 : ((A = i.offset) == null ? void 0 : A[f]) || 0) - (C ? x.crossAxis : 0);
        g < B ? g = B : g > h && (g = h);
      }
      return {
        [m]: v,
        [f]: g
      };
    }
  };
}, Bc = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, o;
      const {
        placement: r,
        rects: l,
        platform: i,
        elements: u
      } = t, {
        apply: s = () => {
        },
        ...d
      } = Bt(e, t), c = await Zn(t, d), f = $t(r), m = Bn(r), v = bt(r) === "y", {
        width: g,
        height: _
      } = l.floating;
      let x, k;
      f === "top" || f === "bottom" ? (x = f, k = m === (await (i.isRTL == null ? void 0 : i.isRTL(u.floating)) ? "start" : "end") ? "left" : "right") : (k = f, x = m === "end" ? "top" : "bottom");
      const A = _ - c.top - c.bottom, I = g - c.left - c.right, C = Wt(_ - c[x], A), B = Wt(g - c[k], I), h = !t.middlewareData.shift;
      let w = C, P = B;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (P = I), (o = t.middlewareData.shift) != null && o.enabled.y && (w = A), h && !m) {
        const R = rt(c.left, 0), V = rt(c.right, 0), z = rt(c.top, 0), oe = rt(c.bottom, 0);
        v ? P = g - 2 * (R !== 0 || V !== 0 ? R + V : rt(c.left, c.right)) : w = _ - 2 * (z !== 0 || oe !== 0 ? z + oe : rt(c.top, c.bottom));
      }
      await s({
        ...t,
        availableWidth: P,
        availableHeight: w
      });
      const E = await i.getDimensions(u.floating);
      return g !== E.width || _ !== E.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Yo() {
  return typeof window < "u";
}
function cn(e) {
  return ga(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function at(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Et(e) {
  var t;
  return (t = (ga(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function ga(e) {
  return Yo() ? e instanceof Node || e instanceof at(e).Node : !1;
}
function vt(e) {
  return Yo() ? e instanceof Element || e instanceof at(e).Element : !1;
}
function Ct(e) {
  return Yo() ? e instanceof HTMLElement || e instanceof at(e).HTMLElement : !1;
}
function Xa(e) {
  return !Yo() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof at(e).ShadowRoot;
}
const $c = /* @__PURE__ */ new Set(["inline", "contents"]);
function co(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: o,
    display: r
  } = gt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && !$c.has(r);
}
const Rc = /* @__PURE__ */ new Set(["table", "td", "th"]);
function Mc(e) {
  return Rc.has(cn(e));
}
const Nc = [":popover-open", ":modal"];
function Xo(e) {
  return Nc.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const Fc = ["transform", "translate", "scale", "rotate", "perspective"], Vc = ["transform", "translate", "scale", "rotate", "perspective", "filter"], Lc = ["paint", "layout", "strict", "content"];
function ya(e) {
  const t = ha(), n = vt(e) ? gt(e) : e;
  return Fc.some((o) => n[o] ? n[o] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || Vc.some((o) => (n.willChange || "").includes(o)) || Lc.some((o) => (n.contain || "").includes(o));
}
function zc(e) {
  let t = Gt(e);
  for (; Ct(t) && !kn(t); ) {
    if (ya(t))
      return t;
    if (Xo(t))
      return null;
    t = Gt(t);
  }
  return null;
}
function ha() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const jc = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function kn(e) {
  return jc.has(cn(e));
}
function gt(e) {
  return at(e).getComputedStyle(e);
}
function Jo(e) {
  return vt(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Gt(e) {
  if (cn(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Xa(e) && e.host || // Fallback.
    Et(e)
  );
  return Xa(t) ? t.host : t;
}
function yi(e) {
  const t = Gt(e);
  return kn(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Ct(t) && co(t) ? t : yi(t);
}
function Qn(e, t, n) {
  var o;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const r = yi(e), l = r === ((o = e.ownerDocument) == null ? void 0 : o.body), i = at(r);
  if (l) {
    const u = Wr(i);
    return t.concat(i, i.visualViewport || [], co(r) ? r : [], u && n ? Qn(u) : []);
  }
  return t.concat(r, Qn(r, [], n));
}
function Wr(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function hi(e) {
  const t = gt(e);
  let n = parseFloat(t.width) || 0, o = parseFloat(t.height) || 0;
  const r = Ct(e), l = r ? e.offsetWidth : n, i = r ? e.offsetHeight : o, u = No(n) !== l || No(o) !== i;
  return u && (n = l, o = i), {
    width: n,
    height: o,
    $: u
  };
}
function ba(e) {
  return vt(e) ? e : e.contextElement;
}
function On(e) {
  const t = ba(e);
  if (!Ct(t))
    return wt(1);
  const n = t.getBoundingClientRect(), {
    width: o,
    height: r,
    $: l
  } = hi(t);
  let i = (l ? No(n.width) : n.width) / o, u = (l ? No(n.height) : n.height) / r;
  return (!i || !Number.isFinite(i)) && (i = 1), (!u || !Number.isFinite(u)) && (u = 1), {
    x: i,
    y: u
  };
}
const Uc = /* @__PURE__ */ wt(0);
function bi(e) {
  const t = at(e);
  return !ha() || !t.visualViewport ? Uc : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Wc(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== at(e) ? !1 : t;
}
function dn(e, t, n, o) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), l = ba(e);
  let i = wt(1);
  t && (o ? vt(o) && (i = On(o)) : i = On(e));
  const u = Wc(l, n, o) ? bi(l) : wt(0);
  let s = (r.left + u.x) / i.x, d = (r.top + u.y) / i.y, c = r.width / i.x, f = r.height / i.y;
  if (l) {
    const m = at(l), v = o && vt(o) ? at(o) : o;
    let g = m, _ = Wr(g);
    for (; _ && o && v !== g; ) {
      const x = On(_), k = _.getBoundingClientRect(), A = gt(_), I = k.left + (_.clientLeft + parseFloat(A.paddingLeft)) * x.x, C = k.top + (_.clientTop + parseFloat(A.paddingTop)) * x.y;
      s *= x.x, d *= x.y, c *= x.x, f *= x.y, s += I, d += C, g = at(_), _ = Wr(g);
    }
  }
  return Vo({
    width: c,
    height: f,
    x: s,
    y: d
  });
}
function Zo(e, t) {
  const n = Jo(e).scrollLeft;
  return t ? t.left + n : dn(Et(e)).left + n;
}
function _i(e, t) {
  const n = e.getBoundingClientRect(), o = n.left + t.scrollLeft - Zo(e, n), r = n.top + t.scrollTop;
  return {
    x: o,
    y: r
  };
}
function Gc(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: o,
    strategy: r
  } = e;
  const l = r === "fixed", i = Et(o), u = t ? Xo(t.floating) : !1;
  if (o === i || u && l)
    return n;
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  }, d = wt(1);
  const c = wt(0), f = Ct(o);
  if ((f || !f && !l) && ((cn(o) !== "body" || co(i)) && (s = Jo(o)), Ct(o))) {
    const v = dn(o);
    d = On(o), c.x = v.x + o.clientLeft, c.y = v.y + o.clientTop;
  }
  const m = i && !f && !l ? _i(i, s) : wt(0);
  return {
    width: n.width * d.x,
    height: n.height * d.y,
    x: n.x * d.x - s.scrollLeft * d.x + c.x + m.x,
    y: n.y * d.y - s.scrollTop * d.y + c.y + m.y
  };
}
function Hc(e) {
  return Array.from(e.getClientRects());
}
function Kc(e) {
  const t = Et(e), n = Jo(e), o = e.ownerDocument.body, r = rt(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth), l = rt(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight);
  let i = -n.scrollLeft + Zo(e);
  const u = -n.scrollTop;
  return gt(o).direction === "rtl" && (i += rt(t.clientWidth, o.clientWidth) - r), {
    width: r,
    height: l,
    x: i,
    y: u
  };
}
const Ja = 25;
function Yc(e, t) {
  const n = at(e), o = Et(e), r = n.visualViewport;
  let l = o.clientWidth, i = o.clientHeight, u = 0, s = 0;
  if (r) {
    l = r.width, i = r.height;
    const c = ha();
    (!c || c && t === "fixed") && (u = r.offsetLeft, s = r.offsetTop);
  }
  const d = Zo(o);
  if (d <= 0) {
    const c = o.ownerDocument, f = c.body, m = getComputedStyle(f), v = c.compatMode === "CSS1Compat" && parseFloat(m.marginLeft) + parseFloat(m.marginRight) || 0, g = Math.abs(o.clientWidth - f.clientWidth - v);
    g <= Ja && (l -= g);
  } else d <= Ja && (l += d);
  return {
    width: l,
    height: i,
    x: u,
    y: s
  };
}
const Xc = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function Jc(e, t) {
  const n = dn(e, !0, t === "fixed"), o = n.top + e.clientTop, r = n.left + e.clientLeft, l = Ct(e) ? On(e) : wt(1), i = e.clientWidth * l.x, u = e.clientHeight * l.y, s = r * l.x, d = o * l.y;
  return {
    width: i,
    height: u,
    x: s,
    y: d
  };
}
function Za(e, t, n) {
  let o;
  if (t === "viewport")
    o = Yc(e, n);
  else if (t === "document")
    o = Kc(Et(e));
  else if (vt(t))
    o = Jc(t, n);
  else {
    const r = bi(e);
    o = {
      x: t.x - r.x,
      y: t.y - r.y,
      width: t.width,
      height: t.height
    };
  }
  return Vo(o);
}
function wi(e, t) {
  const n = Gt(e);
  return n === t || !vt(n) || kn(n) ? !1 : gt(n).position === "fixed" || wi(n, t);
}
function Zc(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let o = Qn(e, [], !1).filter((u) => vt(u) && cn(u) !== "body"), r = null;
  const l = gt(e).position === "fixed";
  let i = l ? Gt(e) : e;
  for (; vt(i) && !kn(i); ) {
    const u = gt(i), s = ya(i);
    !s && u.position === "fixed" && (r = null), (l ? !s && !r : !s && u.position === "static" && !!r && Xc.has(r.position) || co(i) && !s && wi(e, i)) ? o = o.filter((c) => c !== i) : r = u, i = Gt(i);
  }
  return t.set(e, o), o;
}
function Qc(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: o,
    strategy: r
  } = e;
  const i = [...n === "clippingAncestors" ? Xo(t) ? [] : Zc(t, this._c) : [].concat(n), o], u = i[0], s = i.reduce((d, c) => {
    const f = Za(t, c, r);
    return d.top = rt(f.top, d.top), d.right = Wt(f.right, d.right), d.bottom = Wt(f.bottom, d.bottom), d.left = rt(f.left, d.left), d;
  }, Za(t, u, r));
  return {
    width: s.right - s.left,
    height: s.bottom - s.top,
    x: s.left,
    y: s.top
  };
}
function ef(e) {
  const {
    width: t,
    height: n
  } = hi(e);
  return {
    width: t,
    height: n
  };
}
function tf(e, t, n) {
  const o = Ct(t), r = Et(t), l = n === "fixed", i = dn(e, !0, l, t);
  let u = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const s = wt(0);
  function d() {
    s.x = Zo(r);
  }
  if (o || !o && !l)
    if ((cn(t) !== "body" || co(r)) && (u = Jo(t)), o) {
      const v = dn(t, !0, l, t);
      s.x = v.x + t.clientLeft, s.y = v.y + t.clientTop;
    } else r && d();
  l && !o && r && d();
  const c = r && !o && !l ? _i(r, u) : wt(0), f = i.left + u.scrollLeft - s.x - c.x, m = i.top + u.scrollTop - s.y - c.y;
  return {
    x: f,
    y: m,
    width: i.width,
    height: i.height
  };
}
function hr(e) {
  return gt(e).position === "static";
}
function Qa(e, t) {
  if (!Ct(e) || gt(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Et(e) === n && (n = n.ownerDocument.body), n;
}
function xi(e, t) {
  const n = at(e);
  if (Xo(e))
    return n;
  if (!Ct(e)) {
    let r = Gt(e);
    for (; r && !kn(r); ) {
      if (vt(r) && !hr(r))
        return r;
      r = Gt(r);
    }
    return n;
  }
  let o = Qa(e, t);
  for (; o && Mc(o) && hr(o); )
    o = Qa(o, t);
  return o && kn(o) && hr(o) && !ya(o) ? n : o || zc(e) || n;
}
const nf = async function(e) {
  const t = this.getOffsetParent || xi, n = this.getDimensions, o = await n(e.floating);
  return {
    reference: tf(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: o.width,
      height: o.height
    }
  };
};
function of(e) {
  return gt(e).direction === "rtl";
}
const rf = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Gc,
  getDocumentElement: Et,
  getClippingRect: Qc,
  getOffsetParent: xi,
  getElementRects: nf,
  getClientRects: Hc,
  getDimensions: ef,
  getScale: On,
  isElement: vt,
  isRTL: of
};
function Ci(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function af(e, t) {
  let n = null, o;
  const r = Et(e);
  function l() {
    var u;
    clearTimeout(o), (u = n) == null || u.disconnect(), n = null;
  }
  function i(u, s) {
    u === void 0 && (u = !1), s === void 0 && (s = 1), l();
    const d = e.getBoundingClientRect(), {
      left: c,
      top: f,
      width: m,
      height: v
    } = d;
    if (u || t(), !m || !v)
      return;
    const g = wo(f), _ = wo(r.clientWidth - (c + m)), x = wo(r.clientHeight - (f + v)), k = wo(c), I = {
      rootMargin: -g + "px " + -_ + "px " + -x + "px " + -k + "px",
      threshold: rt(0, Wt(1, s)) || 1
    };
    let C = !0;
    function B(h) {
      const w = h[0].intersectionRatio;
      if (w !== s) {
        if (!C)
          return i();
        w ? i(!1, w) : o = setTimeout(() => {
          i(!1, 1e-7);
        }, 1e3);
      }
      w === 1 && !Ci(d, e.getBoundingClientRect()) && i(), C = !1;
    }
    try {
      n = new IntersectionObserver(B, {
        ...I,
        // Handle <iframe>s
        root: r.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(B, I);
    }
    n.observe(e);
  }
  return i(!0), l;
}
function lf(e, t, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: r = !0,
    ancestorResize: l = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: u = typeof IntersectionObserver == "function",
    animationFrame: s = !1
  } = o, d = ba(e), c = r || l ? [...d ? Qn(d) : [], ...Qn(t)] : [];
  c.forEach((k) => {
    r && k.addEventListener("scroll", n, {
      passive: !0
    }), l && k.addEventListener("resize", n);
  });
  const f = d && u ? af(d, n) : null;
  let m = -1, v = null;
  i && (v = new ResizeObserver((k) => {
    let [A] = k;
    A && A.target === d && v && (v.unobserve(t), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
      var I;
      (I = v) == null || I.observe(t);
    })), n();
  }), d && !s && v.observe(d), v.observe(t));
  let g, _ = s ? dn(e) : null;
  s && x();
  function x() {
    const k = dn(e);
    _ && !Ci(_, k) && n(), _ = k, g = requestAnimationFrame(x);
  }
  return n(), () => {
    var k;
    c.forEach((A) => {
      r && A.removeEventListener("scroll", n), l && A.removeEventListener("resize", n);
    }), f?.(), (k = v) == null || k.disconnect(), v = null, s && cancelAnimationFrame(g);
  };
}
const sf = Ac, uf = Ic, el = Dc, df = Bc, cf = kc, ff = qc, pf = Tc, mf = (e, t, n) => {
  const o = /* @__PURE__ */ new Map(), r = {
    platform: rf,
    ...n
  }, l = {
    ...r.platform,
    _c: o
  };
  return Oc(e, t, {
    ...r,
    platform: l
  });
};
function vf(e) {
  return e != null && typeof e == "object" && "$el" in e;
}
function Gr(e) {
  if (vf(e)) {
    const t = e.$el;
    return ga(t) && cn(t) === "#comment" ? null : t;
  }
  return e;
}
function xn(e) {
  return typeof e == "function" ? e() : a(e);
}
function gf(e) {
  return {
    name: "arrow",
    options: e,
    fn(t) {
      const n = Gr(xn(e.element));
      return n == null ? {} : ff({
        element: n,
        padding: e.padding
      }).fn(t);
    }
  };
}
function Si(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function tl(e, t) {
  const n = Si(e);
  return Math.round(t * n) / n;
}
function yf(e, t, n) {
  n === void 0 && (n = {});
  const o = n.whileElementsMounted, r = T(() => {
    var w;
    return (w = xn(n.open)) != null ? w : !0;
  }), l = T(() => xn(n.middleware)), i = T(() => {
    var w;
    return (w = xn(n.placement)) != null ? w : "bottom";
  }), u = T(() => {
    var w;
    return (w = xn(n.strategy)) != null ? w : "absolute";
  }), s = T(() => {
    var w;
    return (w = xn(n.transform)) != null ? w : !0;
  }), d = T(() => Gr(e.value)), c = T(() => Gr(t.value)), f = $(0), m = $(0), v = $(u.value), g = $(i.value), _ = Pn({}), x = $(!1), k = T(() => {
    const w = {
      position: v.value,
      left: "0",
      top: "0"
    };
    if (!c.value)
      return w;
    const P = tl(c.value, f.value), E = tl(c.value, m.value);
    return s.value ? {
      ...w,
      transform: "translate(" + P + "px, " + E + "px)",
      ...Si(c.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: v.value,
      left: P + "px",
      top: E + "px"
    };
  });
  let A;
  function I() {
    if (d.value == null || c.value == null)
      return;
    const w = r.value;
    mf(d.value, c.value, {
      middleware: l.value,
      placement: i.value,
      strategy: u.value
    }).then((P) => {
      f.value = P.x, m.value = P.y, v.value = P.strategy, g.value = P.placement, _.value = P.middlewareData, x.value = w !== !1;
    });
  }
  function C() {
    typeof A == "function" && (A(), A = void 0);
  }
  function B() {
    if (C(), o === void 0) {
      I();
      return;
    }
    if (d.value != null && c.value != null) {
      A = o(d.value, c.value, I);
      return;
    }
  }
  function h() {
    r.value || (x.value = !1);
  }
  return ce([l, i, u, r], I, {
    flush: "sync"
  }), ce([d, c], B, {
    flush: "sync"
  }), ce(r, h, {
    flush: "sync"
  }), Zr() && Qr(C), {
    x: mn(f),
    y: mn(m),
    strategy: mn(v),
    placement: mn(g),
    middlewareData: mn(_),
    isPositioned: mn(x),
    floatingStyles: k,
    update: I
  };
}
const Ei = {
  side: "bottom",
  sideOffset: 0,
  sideFlip: !0,
  align: "center",
  alignOffset: 0,
  alignFlip: !0,
  arrowPadding: 0,
  avoidCollisions: !0,
  collisionBoundary: () => [],
  collisionPadding: 0,
  sticky: "partial",
  hideWhenDetached: !1,
  positionStrategy: "fixed",
  updatePositionStrategy: "optimized",
  prioritizePosition: !1
}, [hf, bf] = ye("PopperContent");
var _f = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "PopperContent",
  props: /* @__PURE__ */ no({
    side: {
      type: null,
      required: !1
    },
    sideOffset: {
      type: Number,
      required: !1
    },
    sideFlip: {
      type: Boolean,
      required: !1
    },
    align: {
      type: null,
      required: !1
    },
    alignOffset: {
      type: Number,
      required: !1
    },
    alignFlip: {
      type: Boolean,
      required: !1
    },
    avoidCollisions: {
      type: Boolean,
      required: !1
    },
    collisionBoundary: {
      type: null,
      required: !1
    },
    collisionPadding: {
      type: [Number, Object],
      required: !1
    },
    arrowPadding: {
      type: Number,
      required: !1
    },
    sticky: {
      type: String,
      required: !1
    },
    hideWhenDetached: {
      type: Boolean,
      required: !1
    },
    positionStrategy: {
      type: String,
      required: !1
    },
    updatePositionStrategy: {
      type: String,
      required: !1
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: !1
    },
    prioritizePosition: {
      type: Boolean,
      required: !1
    },
    reference: {
      type: null,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  }, { ...Ei }),
  emits: ["placed"],
  setup(e, { emit: t }) {
    const n = e, o = t, r = mi(), { forwardRef: l, currentElement: i } = Y(), u = $(), s = $(), { width: d, height: c } = Xu(s), f = T(() => n.side + (n.align !== "center" ? `-${n.align}` : "")), m = T(() => typeof n.collisionPadding == "number" ? n.collisionPadding : {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      ...n.collisionPadding
    }), v = T(() => Array.isArray(n.collisionBoundary) ? n.collisionBoundary : [n.collisionBoundary]), g = T(() => ({
      padding: m.value,
      boundary: v.value.filter(pc),
      altBoundary: v.value.length > 0
    })), _ = T(() => ({
      mainAxis: n.sideFlip,
      crossAxis: n.alignFlip
    })), x = uu(() => [
      sf({
        mainAxis: n.sideOffset + c.value,
        alignmentAxis: n.alignOffset
      }),
      n.prioritizePosition && n.avoidCollisions && el({
        ...g.value,
        ..._.value
      }),
      n.avoidCollisions && uf({
        mainAxis: !0,
        crossAxis: !!n.prioritizePosition,
        limiter: n.sticky === "partial" ? pf() : void 0,
        ...g.value
      }),
      !n.prioritizePosition && n.avoidCollisions && el({
        ...g.value,
        ..._.value
      }),
      df({
        ...g.value,
        apply: ({ elements: z, rects: oe, availableWidth: ne, availableHeight: ie }) => {
          const { width: re, height: G } = oe.reference, q = z.floating.style;
          q.setProperty("--reka-popper-available-width", `${ne}px`), q.setProperty("--reka-popper-available-height", `${ie}px`), q.setProperty("--reka-popper-anchor-width", `${re}px`), q.setProperty("--reka-popper-anchor-height", `${G}px`);
        }
      }),
      s.value && gf({
        element: s.value,
        padding: n.arrowPadding
      }),
      mc({
        arrowWidth: d.value,
        arrowHeight: c.value
      }),
      n.hideWhenDetached && cf({
        strategy: "referenceHidden",
        ...g.value
      })
    ]), k = T(() => n.reference ?? r.anchor.value), { floatingStyles: A, placement: I, isPositioned: C, middlewareData: B } = yf(k, u, {
      strategy: n.positionStrategy,
      placement: f,
      whileElementsMounted: (...z) => lf(...z, {
        layoutShift: !n.disableUpdateOnLayoutShift,
        animationFrame: n.updatePositionStrategy === "always"
      }),
      middleware: x
    }), h = T(() => zr(I.value)[0]), w = T(() => zr(I.value)[1]);
    Il(() => {
      C.value && o("placed");
    });
    const P = T(() => B.value.arrow?.centerOffset !== 0), E = $("");
    Me(() => {
      i.value && (E.value = window.getComputedStyle(i.value).zIndex);
    });
    const R = T(() => B.value.arrow?.x ?? 0), V = T(() => B.value.arrow?.y ?? 0);
    return bf({
      placedSide: h,
      onArrowChange: (z) => s.value = z,
      arrowX: R,
      arrowY: V,
      shouldHideArrow: P
    }), (z, oe) => (b(), K("div", {
      ref_key: "floatingRef",
      ref: u,
      "data-reka-popper-content-wrapper": "",
      style: kt({
        ...a(A),
        transform: a(C) ? a(A).transform : "translate(0, -200%)",
        minWidth: "max-content",
        zIndex: E.value,
        "--reka-popper-transform-origin": [a(B).transformOrigin?.x, a(B).transformOrigin?.y].join(" "),
        ...a(B).hide?.referenceHidden && {
          visibility: "hidden",
          pointerEvents: "none"
        }
      })
    }, [y(a(J), M({ ref: a(l) }, z.$attrs, {
      "as-child": n.asChild,
      as: z.as,
      "data-side": h.value,
      "data-align": w.value,
      style: { animation: a(C) ? void 0 : "none" }
    }), {
      default: p(() => [D(z.$slots, "default")]),
      _: 3
    }, 16, [
      "as-child",
      "as",
      "data-side",
      "data-align",
      "style"
    ])], 4));
  }
}), Qo = _f;
const wf = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
};
var xf = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "PopperArrow",
  props: {
    width: {
      type: Number,
      required: !1
    },
    height: {
      type: Number,
      required: !1
    },
    rounded: {
      type: Boolean,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "svg"
    }
  },
  setup(e) {
    const { forwardRef: t } = Y(), n = hf(), o = T(() => wf[n.placedSide.value]);
    return (r, l) => (b(), K("span", {
      ref: (i) => {
        a(n).onArrowChange(i);
      },
      style: kt({
        position: "absolute",
        left: a(n).arrowX?.value ? `${a(n).arrowX?.value}px` : void 0,
        top: a(n).arrowY?.value ? `${a(n).arrowY?.value}px` : void 0,
        [o.value]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0"
        }[a(n).placedSide.value],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)"
        }[a(n).placedSide.value],
        visibility: a(n).shouldHideArrow.value ? "hidden" : void 0
      })
    }, [y(fc, M(r.$attrs, {
      ref: a(t),
      style: { display: "block" },
      as: r.as,
      "as-child": r.asChild,
      rounded: r.rounded,
      width: r.width,
      height: r.height
    }), {
      default: p(() => [D(r.$slots, "default")]),
      _: 3
    }, 16, [
      "as",
      "as-child",
      "rounded",
      "width",
      "height"
    ])], 4));
  }
}), Cf = xf;
function Sf(e) {
  const t = lo({ nonce: $() });
  return T(() => e?.value || t.nonce?.value);
}
var Ef = /* @__PURE__ */ O({
  __name: "MenuAnchor",
  props: {
    reference: {
      type: null,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const t = e;
    return (n, o) => (b(), S(a(Ko), Oe(Be(t)), {
      default: p(() => [D(n.$slots, "default")]),
      _: 3
    }, 16));
  }
}), Of = Ef;
function qf() {
  const e = $(!1);
  return Ae(() => {
    Ge("keydown", () => {
      e.value = !0;
    }, {
      capture: !0,
      passive: !0
    }), Ge(["pointerdown", "pointermove"], () => {
      e.value = !1;
    }, {
      capture: !0,
      passive: !0
    });
  }), e;
}
const Df = Zl(qf), [er, kf] = ye(["MenuRoot", "MenuSub"], "MenuContext"), [_a, Pf] = ye("MenuRoot");
var Af = /* @__PURE__ */ O({
  __name: "MenuRoot",
  props: {
    open: {
      type: Boolean,
      required: !1,
      default: !1
    },
    dir: {
      type: String,
      required: !1
    },
    modal: {
      type: Boolean,
      required: !1,
      default: !0
    }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, o = t, { modal: r, dir: l } = Ee(n), i = An(l), u = tt(n, "open", o), s = $(), d = Df();
    return kf({
      open: u,
      onOpenChange: (c) => {
        u.value = c;
      },
      content: s,
      onContentChange: (c) => {
        s.value = c;
      }
    }), Pf({
      onClose: () => {
        u.value = !1;
      },
      isUsingKeyboardRef: d,
      dir: i,
      modal: r
    }), (c, f) => (b(), S(a(Ho), null, {
      default: p(() => [D(c.$slots, "default")]),
      _: 3
    }));
  }
}), If = Af;
const [Oi, Tf] = ye("MenuContent");
var Bf = /* @__PURE__ */ O({
  __name: "MenuContentImpl",
  props: /* @__PURE__ */ no({
    loop: {
      type: Boolean,
      required: !1
    },
    disableOutsidePointerEvents: {
      type: Boolean,
      required: !1
    },
    disableOutsideScroll: {
      type: Boolean,
      required: !1
    },
    trapFocus: {
      type: Boolean,
      required: !1
    },
    side: {
      type: null,
      required: !1
    },
    sideOffset: {
      type: Number,
      required: !1
    },
    sideFlip: {
      type: Boolean,
      required: !1
    },
    align: {
      type: null,
      required: !1
    },
    alignOffset: {
      type: Number,
      required: !1
    },
    alignFlip: {
      type: Boolean,
      required: !1
    },
    avoidCollisions: {
      type: Boolean,
      required: !1
    },
    collisionBoundary: {
      type: null,
      required: !1
    },
    collisionPadding: {
      type: [Number, Object],
      required: !1
    },
    arrowPadding: {
      type: Number,
      required: !1
    },
    sticky: {
      type: String,
      required: !1
    },
    hideWhenDetached: {
      type: Boolean,
      required: !1
    },
    positionStrategy: {
      type: String,
      required: !1
    },
    updatePositionStrategy: {
      type: String,
      required: !1
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: !1
    },
    prioritizePosition: {
      type: Boolean,
      required: !1
    },
    reference: {
      type: null,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  }, { ...Ei }),
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "entryFocus",
    "openAutoFocus",
    "closeAutoFocus",
    "dismiss"
  ],
  setup(e, { emit: t }) {
    const n = e, o = t, r = er(), l = _a(), { trapFocus: i, disableOutsidePointerEvents: u, loop: s } = Ee(n);
    da(), Uo(u.value);
    const d = $(""), c = $(0), f = $(0), m = $(null), v = $("right"), g = $(0), _ = $(null), x = $(), { forwardRef: k, currentElement: A } = Y(), { handleTypeaheadSearch: I } = ca();
    ce(A, (E) => {
      r.onContentChange(E);
    }), to(() => {
      window.clearTimeout(c.value);
    });
    function C(E) {
      return v.value === m.value?.side && Sd(E, m.value?.area);
    }
    async function B(E) {
      o("openAutoFocus", E), !E.defaultPrevented && (E.preventDefault(), A.value?.focus({ preventScroll: !0 }));
    }
    function h(E) {
      if (E.defaultPrevented) return;
      const V = E.target.closest("[data-reka-menu-content]") === E.currentTarget, z = E.ctrlKey || E.altKey || E.metaKey, oe = E.key.length === 1, ne = Yl(E, Le(), A.value, {
        loop: s.value,
        arrowKeyOptions: "vertical",
        dir: l?.dir.value,
        focus: !0,
        attributeName: "[data-reka-collection-item]:not([data-disabled])"
      });
      if (ne) return ne?.focus();
      if (E.code === "Space") return;
      const ie = x.value?.getItems() ?? [];
      if (V && (E.key === "Tab" && E.preventDefault(), !z && oe && I(E.key, ie)), E.target !== A.value || !xd.includes(E.key)) return;
      E.preventDefault();
      const re = [...ie.map((G) => G.ref)];
      ii.includes(E.key) && re.reverse(), Vr(re);
    }
    function w(E) {
      E?.currentTarget?.contains?.(E.target) || (window.clearTimeout(c.value), d.value = "");
    }
    function P(E) {
      if (!Lr(E)) return;
      const R = E.target, V = g.value !== E.clientX;
      if (E?.currentTarget?.contains(R) && V) {
        const z = E.clientX > g.value ? "right" : "left";
        v.value = z, g.value = E.clientX;
      }
    }
    return Tf({
      onItemEnter: (E) => !!C(E),
      onItemLeave: (E) => {
        C(E) || (A.value?.focus(), _.value = null);
      },
      onTriggerLeave: (E) => !!C(E),
      searchRef: d,
      pointerGraceTimerRef: f,
      onPointerGraceIntentChange: (E) => {
        m.value = E;
      }
    }), (E, R) => (b(), S(a(Go), {
      "as-child": "",
      trapped: a(i),
      onMountAutoFocus: B,
      onUnmountAutoFocus: R[7] || (R[7] = (V) => o("closeAutoFocus", V))
    }, {
      default: p(() => [y(a(io), {
        "as-child": "",
        "disable-outside-pointer-events": a(u),
        onEscapeKeyDown: R[2] || (R[2] = (V) => o("escapeKeyDown", V)),
        onPointerDownOutside: R[3] || (R[3] = (V) => o("pointerDownOutside", V)),
        onFocusOutside: R[4] || (R[4] = (V) => o("focusOutside", V)),
        onInteractOutside: R[5] || (R[5] = (V) => o("interactOutside", V)),
        onDismiss: R[6] || (R[6] = (V) => o("dismiss"))
      }, {
        default: p(() => [y(a(pi), {
          ref_key: "rovingFocusGroupRef",
          ref: x,
          "current-tab-stop-id": _.value,
          "onUpdate:currentTabStopId": R[0] || (R[0] = (V) => _.value = V),
          "as-child": "",
          orientation: "vertical",
          dir: a(l).dir.value,
          loop: a(s),
          onEntryFocus: R[1] || (R[1] = (V) => {
            o("entryFocus", V), a(l).isUsingKeyboardRef.value || V.preventDefault();
          })
        }, {
          default: p(() => [y(a(Qo), {
            ref: a(k),
            role: "menu",
            as: E.as,
            "as-child": E.asChild,
            "aria-orientation": "vertical",
            "data-reka-menu-content": "",
            "data-state": a(si)(a(r).open.value),
            dir: a(l).dir.value,
            side: E.side,
            "side-offset": E.sideOffset,
            align: E.align,
            "align-offset": E.alignOffset,
            "avoid-collisions": E.avoidCollisions,
            "collision-boundary": E.collisionBoundary,
            "collision-padding": E.collisionPadding,
            "arrow-padding": E.arrowPadding,
            "prioritize-position": E.prioritizePosition,
            "position-strategy": E.positionStrategy,
            "update-position-strategy": E.updatePositionStrategy,
            sticky: E.sticky,
            "hide-when-detached": E.hideWhenDetached,
            reference: E.reference,
            onKeydown: h,
            onBlur: w,
            onPointermove: P
          }, {
            default: p(() => [D(E.$slots, "default")]),
            _: 3
          }, 8, [
            "as",
            "as-child",
            "data-state",
            "dir",
            "side",
            "side-offset",
            "align",
            "align-offset",
            "avoid-collisions",
            "collision-boundary",
            "collision-padding",
            "arrow-padding",
            "prioritize-position",
            "position-strategy",
            "update-position-strategy",
            "sticky",
            "hide-when-detached",
            "reference"
          ])]),
          _: 3
        }, 8, [
          "current-tab-stop-id",
          "dir",
          "loop"
        ])]),
        _: 3
      }, 8, ["disable-outside-pointer-events"])]),
      _: 3
    }, 8, ["trapped"]));
  }
}), qi = Bf, $f = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "MenuItemImpl",
  props: {
    disabled: {
      type: Boolean,
      required: !1
    },
    textValue: {
      type: String,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const t = e, n = Oi(), { forwardRef: o } = Y(), { CollectionItem: r } = yt(), l = $(!1);
    async function i(s) {
      s.defaultPrevented || Lr(s) && (t.disabled ? n.onItemLeave(s) : n.onItemEnter(s) || s.currentTarget?.focus({ preventScroll: !0 }));
    }
    async function u(s) {
      await be(), !s.defaultPrevented && Lr(s) && n.onItemLeave(s);
    }
    return (s, d) => (b(), S(a(r), { value: { textValue: s.textValue } }, {
      default: p(() => [y(a(J), M({
        ref: a(o),
        role: "menuitem",
        tabindex: "-1"
      }, s.$attrs, {
        as: s.as,
        "as-child": s.asChild,
        "aria-disabled": s.disabled || void 0,
        "data-disabled": s.disabled ? "" : void 0,
        "data-highlighted": l.value ? "" : void 0,
        onPointermove: i,
        onPointerleave: u,
        onFocus: d[0] || (d[0] = async (c) => {
          await be(), !(c.defaultPrevented || s.disabled) && (l.value = !0);
        }),
        onBlur: d[1] || (d[1] = async (c) => {
          await be(), !c.defaultPrevented && (l.value = !1);
        })
      }), {
        default: p(() => [D(s.$slots, "default")]),
        _: 3
      }, 16, [
        "as",
        "as-child",
        "aria-disabled",
        "data-disabled",
        "data-highlighted"
      ])]),
      _: 3
    }, 8, ["value"]));
  }
}), Rf = $f, Mf = /* @__PURE__ */ O({
  __name: "MenuItem",
  props: {
    disabled: {
      type: Boolean,
      required: !1
    },
    textValue: {
      type: String,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, o = t, { forwardRef: r, currentElement: l } = Y(), i = _a(), u = Oi(), s = $(!1);
    async function d() {
      const c = l.value;
      if (!n.disabled && c) {
        const f = new CustomEvent(_d, {
          bubbles: !0,
          cancelable: !0
        });
        o("select", f), await be(), f.defaultPrevented ? s.value = !1 : i.onClose();
      }
    }
    return (c, f) => (b(), S(Rf, M(n, {
      ref: a(r),
      onClick: d,
      onPointerdown: f[0] || (f[0] = () => {
        s.value = !0;
      }),
      onPointerup: f[1] || (f[1] = async (m) => {
        await be(), !m.defaultPrevented && (s.value || m.currentTarget?.click());
      }),
      onKeydown: f[2] || (f[2] = async (m) => {
        const v = a(u).searchRef.value !== "";
        c.disabled || v && m.key === " " || a(Fr).includes(m.key) && (m.currentTarget.click(), m.preventDefault());
      })
    }), {
      default: p(() => [D(c.$slots, "default")]),
      _: 3
    }, 16));
  }
}), Di = Mf;
const [Nf, Ff] = ye(["MenuCheckboxItem", "MenuRadioItem"], "MenuItemIndicatorContext");
var Vf = /* @__PURE__ */ O({
  __name: "MenuItemIndicator",
  props: {
    forceMount: {
      type: Boolean,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "span"
    }
  },
  setup(e) {
    const t = Nf({ modelValue: $(!1) });
    return (n, o) => (b(), S(a(Yt), { present: n.forceMount || a(ui)(a(t).modelValue.value) || a(t).modelValue.value === !0 }, {
      default: p(() => [y(a(J), {
        as: n.as,
        "as-child": n.asChild,
        "data-state": a(di)(a(t).modelValue.value)
      }, {
        default: p(() => [D(n.$slots, "default")]),
        _: 3
      }, 8, [
        "as",
        "as-child",
        "data-state"
      ])]),
      _: 3
    }, 8, ["present"]));
  }
}), Lf = Vf, zf = /* @__PURE__ */ O({
  __name: "MenuRootContentModal",
  props: {
    loop: {
      type: Boolean,
      required: !1
    },
    side: {
      type: null,
      required: !1
    },
    sideOffset: {
      type: Number,
      required: !1
    },
    sideFlip: {
      type: Boolean,
      required: !1
    },
    align: {
      type: null,
      required: !1
    },
    alignOffset: {
      type: Number,
      required: !1
    },
    alignFlip: {
      type: Boolean,
      required: !1
    },
    avoidCollisions: {
      type: Boolean,
      required: !1
    },
    collisionBoundary: {
      type: null,
      required: !1
    },
    collisionPadding: {
      type: [Number, Object],
      required: !1
    },
    arrowPadding: {
      type: Number,
      required: !1
    },
    sticky: {
      type: String,
      required: !1
    },
    hideWhenDetached: {
      type: Boolean,
      required: !1
    },
    positionStrategy: {
      type: String,
      required: !1
    },
    updatePositionStrategy: {
      type: String,
      required: !1
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: !1
    },
    prioritizePosition: {
      type: Boolean,
      required: !1
    },
    reference: {
      type: null,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "entryFocus",
    "openAutoFocus",
    "closeAutoFocus"
  ],
  setup(e, { emit: t }) {
    const n = e, o = t, r = ge(n, o), l = er(), { forwardRef: i, currentElement: u } = Y();
    return Wo(u), (s, d) => (b(), S(qi, M(a(r), {
      ref: a(i),
      "trap-focus": a(l).open.value,
      "disable-outside-pointer-events": a(l).open.value,
      "disable-outside-scroll": !0,
      onDismiss: d[0] || (d[0] = (c) => a(l).onOpenChange(!1)),
      onFocusOutside: d[1] || (d[1] = Pe((c) => o("focusOutside", c), ["prevent"]))
    }), {
      default: p(() => [D(s.$slots, "default")]),
      _: 3
    }, 16, ["trap-focus", "disable-outside-pointer-events"]));
  }
}), jf = zf, Uf = /* @__PURE__ */ O({
  __name: "MenuRootContentNonModal",
  props: {
    loop: {
      type: Boolean,
      required: !1
    },
    side: {
      type: null,
      required: !1
    },
    sideOffset: {
      type: Number,
      required: !1
    },
    sideFlip: {
      type: Boolean,
      required: !1
    },
    align: {
      type: null,
      required: !1
    },
    alignOffset: {
      type: Number,
      required: !1
    },
    alignFlip: {
      type: Boolean,
      required: !1
    },
    avoidCollisions: {
      type: Boolean,
      required: !1
    },
    collisionBoundary: {
      type: null,
      required: !1
    },
    collisionPadding: {
      type: [Number, Object],
      required: !1
    },
    arrowPadding: {
      type: Number,
      required: !1
    },
    sticky: {
      type: String,
      required: !1
    },
    hideWhenDetached: {
      type: Boolean,
      required: !1
    },
    positionStrategy: {
      type: String,
      required: !1
    },
    updatePositionStrategy: {
      type: String,
      required: !1
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: !1
    },
    prioritizePosition: {
      type: Boolean,
      required: !1
    },
    reference: {
      type: null,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "entryFocus",
    "openAutoFocus",
    "closeAutoFocus"
  ],
  setup(e, { emit: t }) {
    const r = ge(e, t), l = er();
    return (i, u) => (b(), S(qi, M(a(r), {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      "disable-outside-scroll": !1,
      onDismiss: u[0] || (u[0] = (s) => a(l).onOpenChange(!1))
    }), {
      default: p(() => [D(i.$slots, "default")]),
      _: 3
    }, 16));
  }
}), Wf = Uf, Gf = /* @__PURE__ */ O({
  __name: "MenuContent",
  props: {
    forceMount: {
      type: Boolean,
      required: !1
    },
    loop: {
      type: Boolean,
      required: !1
    },
    side: {
      type: null,
      required: !1
    },
    sideOffset: {
      type: Number,
      required: !1
    },
    sideFlip: {
      type: Boolean,
      required: !1
    },
    align: {
      type: null,
      required: !1
    },
    alignOffset: {
      type: Number,
      required: !1
    },
    alignFlip: {
      type: Boolean,
      required: !1
    },
    avoidCollisions: {
      type: Boolean,
      required: !1
    },
    collisionBoundary: {
      type: null,
      required: !1
    },
    collisionPadding: {
      type: [Number, Object],
      required: !1
    },
    arrowPadding: {
      type: Number,
      required: !1
    },
    sticky: {
      type: String,
      required: !1
    },
    hideWhenDetached: {
      type: Boolean,
      required: !1
    },
    positionStrategy: {
      type: String,
      required: !1
    },
    updatePositionStrategy: {
      type: String,
      required: !1
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: !1
    },
    prioritizePosition: {
      type: Boolean,
      required: !1
    },
    reference: {
      type: null,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "entryFocus",
    "openAutoFocus",
    "closeAutoFocus"
  ],
  setup(e, { emit: t }) {
    const r = ge(e, t), l = er(), i = _a();
    return (u, s) => (b(), S(a(Yt), { present: u.forceMount || a(l).open.value }, {
      default: p(() => [a(i).modal.value ? (b(), S(jf, Oe(M({ key: 0 }, {
        ...u.$attrs,
        ...a(r)
      })), {
        default: p(() => [D(u.$slots, "default")]),
        _: 3
      }, 16)) : (b(), S(Wf, Oe(M({ key: 1 }, {
        ...u.$attrs,
        ...a(r)
      })), {
        default: p(() => [D(u.$slots, "default")]),
        _: 3
      }, 16))]),
      _: 3
    }, 8, ["present"]));
  }
}), Hf = Gf, Kf = /* @__PURE__ */ O({
  __name: "MenuGroup",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const t = e;
    return (n, o) => (b(), S(a(J), M({ role: "group" }, t), {
      default: p(() => [D(n.$slots, "default")]),
      _: 3
    }, 16));
  }
}), ki = Kf, Yf = /* @__PURE__ */ O({
  __name: "MenuLabel",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "div"
    }
  },
  setup(e) {
    const t = e;
    return (n, o) => (b(), S(a(J), Oe(Be(t)), {
      default: p(() => [D(n.$slots, "default")]),
      _: 3
    }, 16));
  }
}), Xf = Yf, Jf = /* @__PURE__ */ O({
  __name: "MenuPortal",
  props: {
    to: {
      type: null,
      required: !1
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    defer: {
      type: Boolean,
      required: !1
    },
    forceMount: {
      type: Boolean,
      required: !1
    }
  },
  setup(e) {
    const t = e;
    return (n, o) => (b(), S(a(so), Oe(Be(t)), {
      default: p(() => [D(n.$slots, "default")]),
      _: 3
    }, 16));
  }
}), Zf = Jf;
const [Qf, ep] = ye("MenuRadioGroup");
var tp = /* @__PURE__ */ O({
  __name: "MenuRadioGroup",
  props: {
    modelValue: {
      type: String,
      required: !1,
      default: ""
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = t, r = ua(n, ["modelValue"]), l = we(r), i = tt(n, "modelValue", o);
    return ep({
      modelValue: i,
      onValueChange: (u) => {
        i.value = u;
      }
    }), (u, s) => (b(), S(ki, Oe(Be(a(l))), {
      default: p(() => [D(u.$slots, "default", { modelValue: a(i) })]),
      _: 3
    }, 16));
  }
}), np = tp, op = /* @__PURE__ */ O({
  __name: "MenuRadioItem",
  props: {
    value: {
      type: String,
      required: !0
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    textValue: {
      type: String,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, o = t, r = ua(n, ["value"]), l = we(r), { value: i } = Ee(n), u = Qf(), s = T(() => u.modelValue.value === i?.value);
    return Ff({ modelValue: s }), (d, c) => (b(), S(Di, M({ role: "menuitemradio" }, a(l), {
      "aria-checked": s.value,
      "data-state": a(di)(s.value),
      onSelect: c[0] || (c[0] = async (f) => {
        o("select", f), a(u).onValueChange(a(i));
      })
    }), {
      default: p(() => [D(d.$slots, "default")]),
      _: 3
    }, 16, ["aria-checked", "data-state"]));
  }
}), rp = op;
const [fo, ap] = ye("PopoverRoot");
var lp = /* @__PURE__ */ O({
  __name: "PopoverRoot",
  props: {
    defaultOpen: {
      type: Boolean,
      required: !1,
      default: !1
    },
    open: {
      type: Boolean,
      required: !1,
      default: void 0
    },
    modal: {
      type: Boolean,
      required: !1,
      default: !1
    }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, o = t, { modal: r } = Ee(n), l = tt(n, "open", o, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), i = $(), u = $(!1);
    return ap({
      contentId: "",
      triggerId: "",
      modal: r,
      open: l,
      onOpenChange: (s) => {
        l.value = s;
      },
      onOpenToggle: () => {
        l.value = !l.value;
      },
      triggerElement: i,
      hasCustomAnchor: u
    }), (s, d) => (b(), S(a(Ho), null, {
      default: p(() => [D(s.$slots, "default", {
        open: a(l),
        close: () => l.value = !1
      })]),
      _: 3
    }));
  }
}), ip = lp, sp = /* @__PURE__ */ O({
  __name: "PopoverContentImpl",
  props: {
    trapFocus: {
      type: Boolean,
      required: !1
    },
    side: {
      type: null,
      required: !1
    },
    sideOffset: {
      type: Number,
      required: !1
    },
    sideFlip: {
      type: Boolean,
      required: !1
    },
    align: {
      type: null,
      required: !1
    },
    alignOffset: {
      type: Number,
      required: !1
    },
    alignFlip: {
      type: Boolean,
      required: !1
    },
    avoidCollisions: {
      type: Boolean,
      required: !1
    },
    collisionBoundary: {
      type: null,
      required: !1
    },
    collisionPadding: {
      type: [Number, Object],
      required: !1
    },
    arrowPadding: {
      type: Number,
      required: !1
    },
    sticky: {
      type: String,
      required: !1
    },
    hideWhenDetached: {
      type: Boolean,
      required: !1
    },
    positionStrategy: {
      type: String,
      required: !1
    },
    updatePositionStrategy: {
      type: String,
      required: !1
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: !1
    },
    prioritizePosition: {
      type: Boolean,
      required: !1
    },
    reference: {
      type: null,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    },
    disableOutsidePointerEvents: {
      type: Boolean,
      required: !1
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "openAutoFocus",
    "closeAutoFocus"
  ],
  setup(e, { emit: t }) {
    const n = e, o = t, r = we(ua(n, "trapFocus", "disableOutsidePointerEvents")), { forwardRef: l } = Y(), i = fo();
    return da(), (u, s) => (b(), S(a(Go), {
      "as-child": "",
      loop: "",
      trapped: u.trapFocus,
      onMountAutoFocus: s[5] || (s[5] = (d) => o("openAutoFocus", d)),
      onUnmountAutoFocus: s[6] || (s[6] = (d) => o("closeAutoFocus", d))
    }, {
      default: p(() => [y(a(io), {
        "as-child": "",
        "disable-outside-pointer-events": u.disableOutsidePointerEvents,
        onPointerDownOutside: s[0] || (s[0] = (d) => o("pointerDownOutside", d)),
        onInteractOutside: s[1] || (s[1] = (d) => o("interactOutside", d)),
        onEscapeKeyDown: s[2] || (s[2] = (d) => o("escapeKeyDown", d)),
        onFocusOutside: s[3] || (s[3] = (d) => o("focusOutside", d)),
        onDismiss: s[4] || (s[4] = (d) => a(i).onOpenChange(!1))
      }, {
        default: p(() => [y(a(Qo), M(a(r), {
          id: a(i).contentId,
          ref: a(l),
          "data-state": a(i).open.value ? "open" : "closed",
          "aria-labelledby": a(i).triggerId,
          style: {
            "--reka-popover-content-transform-origin": "var(--reka-popper-transform-origin)",
            "--reka-popover-content-available-width": "var(--reka-popper-available-width)",
            "--reka-popover-content-available-height": "var(--reka-popper-available-height)",
            "--reka-popover-trigger-width": "var(--reka-popper-anchor-width)",
            "--reka-popover-trigger-height": "var(--reka-popper-anchor-height)"
          },
          role: "dialog"
        }), {
          default: p(() => [D(u.$slots, "default")]),
          _: 3
        }, 16, [
          "id",
          "data-state",
          "aria-labelledby"
        ])]),
        _: 3
      }, 8, ["disable-outside-pointer-events"])]),
      _: 3
    }, 8, ["trapped"]));
  }
}), Pi = sp, up = /* @__PURE__ */ O({
  __name: "PopoverContentModal",
  props: {
    side: {
      type: null,
      required: !1
    },
    sideOffset: {
      type: Number,
      required: !1
    },
    sideFlip: {
      type: Boolean,
      required: !1
    },
    align: {
      type: null,
      required: !1
    },
    alignOffset: {
      type: Number,
      required: !1
    },
    alignFlip: {
      type: Boolean,
      required: !1
    },
    avoidCollisions: {
      type: Boolean,
      required: !1
    },
    collisionBoundary: {
      type: null,
      required: !1
    },
    collisionPadding: {
      type: [Number, Object],
      required: !1
    },
    arrowPadding: {
      type: Number,
      required: !1
    },
    sticky: {
      type: String,
      required: !1
    },
    hideWhenDetached: {
      type: Boolean,
      required: !1
    },
    positionStrategy: {
      type: String,
      required: !1
    },
    updatePositionStrategy: {
      type: String,
      required: !1
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: !1
    },
    prioritizePosition: {
      type: Boolean,
      required: !1
    },
    reference: {
      type: null,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    },
    disableOutsidePointerEvents: {
      type: Boolean,
      required: !1
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "openAutoFocus",
    "closeAutoFocus"
  ],
  setup(e, { emit: t }) {
    const n = e, o = t, r = fo(), l = $(!1);
    Uo(!0);
    const i = ge(n, o), { forwardRef: u, currentElement: s } = Y();
    return Wo(s), (d, c) => (b(), S(Pi, M(a(i), {
      ref: a(u),
      "trap-focus": a(r).open.value,
      "disable-outside-pointer-events": "",
      onCloseAutoFocus: c[0] || (c[0] = Pe((f) => {
        o("closeAutoFocus", f), l.value || a(r).triggerElement.value?.focus();
      }, ["prevent"])),
      onPointerDownOutside: c[1] || (c[1] = (f) => {
        o("pointerDownOutside", f);
        const m = f.detail.originalEvent, v = m.button === 0 && m.ctrlKey === !0, g = m.button === 2 || v;
        l.value = g;
      }),
      onFocusOutside: c[2] || (c[2] = Pe(() => {
      }, ["prevent"]))
    }), {
      default: p(() => [D(d.$slots, "default")]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), dp = up, cp = /* @__PURE__ */ O({
  __name: "PopoverContentNonModal",
  props: {
    side: {
      type: null,
      required: !1
    },
    sideOffset: {
      type: Number,
      required: !1
    },
    sideFlip: {
      type: Boolean,
      required: !1
    },
    align: {
      type: null,
      required: !1
    },
    alignOffset: {
      type: Number,
      required: !1
    },
    alignFlip: {
      type: Boolean,
      required: !1
    },
    avoidCollisions: {
      type: Boolean,
      required: !1
    },
    collisionBoundary: {
      type: null,
      required: !1
    },
    collisionPadding: {
      type: [Number, Object],
      required: !1
    },
    arrowPadding: {
      type: Number,
      required: !1
    },
    sticky: {
      type: String,
      required: !1
    },
    hideWhenDetached: {
      type: Boolean,
      required: !1
    },
    positionStrategy: {
      type: String,
      required: !1
    },
    updatePositionStrategy: {
      type: String,
      required: !1
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: !1
    },
    prioritizePosition: {
      type: Boolean,
      required: !1
    },
    reference: {
      type: null,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    },
    disableOutsidePointerEvents: {
      type: Boolean,
      required: !1
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "openAutoFocus",
    "closeAutoFocus"
  ],
  setup(e, { emit: t }) {
    const n = e, o = t, r = fo(), l = $(!1), i = $(!1), u = ge(n, o);
    return (s, d) => (b(), S(Pi, M(a(u), {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      onCloseAutoFocus: d[0] || (d[0] = (c) => {
        o("closeAutoFocus", c), c.defaultPrevented || (l.value || a(r).triggerElement.value?.focus(), c.preventDefault()), l.value = !1, i.value = !1;
      }),
      onInteractOutside: d[1] || (d[1] = async (c) => {
        o("interactOutside", c), c.defaultPrevented || (l.value = !0, c.detail.originalEvent.type === "pointerdown" && (i.value = !0));
        const f = c.target;
        a(r).triggerElement.value?.contains(f) && c.preventDefault(), c.detail.originalEvent.type === "focusin" && i.value && c.preventDefault();
      })
    }), {
      default: p(() => [D(s.$slots, "default")]),
      _: 3
    }, 16));
  }
}), fp = cp, pp = /* @__PURE__ */ O({
  __name: "PopoverContent",
  props: {
    forceMount: {
      type: Boolean,
      required: !1
    },
    side: {
      type: null,
      required: !1
    },
    sideOffset: {
      type: Number,
      required: !1
    },
    sideFlip: {
      type: Boolean,
      required: !1
    },
    align: {
      type: null,
      required: !1
    },
    alignOffset: {
      type: Number,
      required: !1
    },
    alignFlip: {
      type: Boolean,
      required: !1
    },
    avoidCollisions: {
      type: Boolean,
      required: !1
    },
    collisionBoundary: {
      type: null,
      required: !1
    },
    collisionPadding: {
      type: [Number, Object],
      required: !1
    },
    arrowPadding: {
      type: Number,
      required: !1
    },
    sticky: {
      type: String,
      required: !1
    },
    hideWhenDetached: {
      type: Boolean,
      required: !1
    },
    positionStrategy: {
      type: String,
      required: !1
    },
    updatePositionStrategy: {
      type: String,
      required: !1
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: !1
    },
    prioritizePosition: {
      type: Boolean,
      required: !1
    },
    reference: {
      type: null,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    },
    disableOutsidePointerEvents: {
      type: Boolean,
      required: !1
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "openAutoFocus",
    "closeAutoFocus"
  ],
  setup(e, { emit: t }) {
    const n = e, o = t, r = fo(), l = ge(n, o), { forwardRef: i } = Y();
    return r.contentId ||= dt(void 0, "reka-popover-content"), (u, s) => (b(), S(a(Yt), { present: u.forceMount || a(r).open.value }, {
      default: p(() => [a(r).modal.value ? (b(), S(dp, M({ key: 0 }, a(l), { ref: a(i) }), {
        default: p(() => [D(u.$slots, "default")]),
        _: 3
      }, 16)) : (b(), S(fp, M({ key: 1 }, a(l), { ref: a(i) }), {
        default: p(() => [D(u.$slots, "default")]),
        _: 3
      }, 16))]),
      _: 3
    }, 8, ["present"]));
  }
}), mp = pp, vp = /* @__PURE__ */ O({
  __name: "PopoverPortal",
  props: {
    to: {
      type: null,
      required: !1
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    defer: {
      type: Boolean,
      required: !1
    },
    forceMount: {
      type: Boolean,
      required: !1
    }
  },
  setup(e) {
    const t = e;
    return (n, o) => (b(), S(a(so), Oe(Be(t)), {
      default: p(() => [D(n.$slots, "default")]),
      _: 3
    }, 16));
  }
}), gp = vp, yp = /* @__PURE__ */ O({
  __name: "PopoverTrigger",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "button"
    }
  },
  setup(e) {
    const t = e, n = fo(), { forwardRef: o, currentElement: r } = Y();
    return n.triggerId ||= dt(void 0, "reka-popover-trigger"), Ae(() => {
      n.triggerElement.value = r.value;
    }), (l, i) => (b(), S(oo(a(n).hasCustomAnchor.value ? a(J) : a(Ko)), { "as-child": "" }, {
      default: p(() => [y(a(J), {
        id: a(n).triggerId,
        ref: a(o),
        type: l.as === "button" ? "button" : void 0,
        "aria-haspopup": "dialog",
        "aria-expanded": a(n).open.value,
        "aria-controls": a(n).contentId,
        "data-state": a(n).open.value ? "open" : "closed",
        as: l.as,
        "as-child": t.asChild,
        onClick: a(n).onOpenToggle
      }, {
        default: p(() => [D(l.$slots, "default")]),
        _: 3
      }, 8, [
        "id",
        "type",
        "aria-expanded",
        "aria-controls",
        "data-state",
        "as",
        "as-child",
        "onClick"
      ])]),
      _: 3
    }));
  }
}), hp = yp;
const [Ai, bp] = ye("DropdownMenuRoot");
var _p = /* @__PURE__ */ O({
  __name: "DropdownMenuRoot",
  props: {
    defaultOpen: {
      type: Boolean,
      required: !1
    },
    open: {
      type: Boolean,
      required: !1,
      default: void 0
    },
    dir: {
      type: String,
      required: !1
    },
    modal: {
      type: Boolean,
      required: !1,
      default: !0
    }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, o = t;
    Y();
    const r = tt(n, "open", o, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), l = $(), { modal: i, dir: u } = Ee(n), s = An(u);
    return bp({
      open: r,
      onOpenChange: (d) => {
        r.value = d;
      },
      onOpenToggle: () => {
        r.value = !r.value;
      },
      triggerId: "",
      triggerElement: l,
      contentId: "",
      modal: i,
      dir: s
    }), (d, c) => (b(), S(a(If), {
      open: a(r),
      "onUpdate:open": c[0] || (c[0] = (f) => Ce(r) ? r.value = f : null),
      dir: a(s),
      modal: a(i)
    }, {
      default: p(() => [D(d.$slots, "default", { open: a(r) })]),
      _: 3
    }, 8, [
      "open",
      "dir",
      "modal"
    ]));
  }
}), wp = _p, xp = /* @__PURE__ */ O({
  __name: "DropdownMenuContent",
  props: {
    forceMount: {
      type: Boolean,
      required: !1
    },
    loop: {
      type: Boolean,
      required: !1
    },
    side: {
      type: null,
      required: !1
    },
    sideOffset: {
      type: Number,
      required: !1
    },
    sideFlip: {
      type: Boolean,
      required: !1
    },
    align: {
      type: null,
      required: !1
    },
    alignOffset: {
      type: Number,
      required: !1
    },
    alignFlip: {
      type: Boolean,
      required: !1
    },
    avoidCollisions: {
      type: Boolean,
      required: !1
    },
    collisionBoundary: {
      type: null,
      required: !1
    },
    collisionPadding: {
      type: [Number, Object],
      required: !1
    },
    arrowPadding: {
      type: Number,
      required: !1
    },
    sticky: {
      type: String,
      required: !1
    },
    hideWhenDetached: {
      type: Boolean,
      required: !1
    },
    positionStrategy: {
      type: String,
      required: !1
    },
    updatePositionStrategy: {
      type: String,
      required: !1
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: !1
    },
    prioritizePosition: {
      type: Boolean,
      required: !1
    },
    reference: {
      type: null,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "closeAutoFocus"
  ],
  setup(e, { emit: t }) {
    const r = ge(e, t);
    Y();
    const l = Ai(), i = $(!1);
    function u(s) {
      s.defaultPrevented || (i.value || setTimeout(() => {
        l.triggerElement.value?.focus();
      }, 0), i.value = !1, s.preventDefault());
    }
    return l.contentId ||= dt(void 0, "reka-dropdown-menu-content"), (s, d) => (b(), S(a(Hf), M(a(r), {
      id: a(l).contentId,
      "aria-labelledby": a(l)?.triggerId,
      style: {
        "--reka-dropdown-menu-content-transform-origin": "var(--reka-popper-transform-origin)",
        "--reka-dropdown-menu-content-available-width": "var(--reka-popper-available-width)",
        "--reka-dropdown-menu-content-available-height": "var(--reka-popper-available-height)",
        "--reka-dropdown-menu-trigger-width": "var(--reka-popper-anchor-width)",
        "--reka-dropdown-menu-trigger-height": "var(--reka-popper-anchor-height)"
      },
      onCloseAutoFocus: u,
      onInteractOutside: d[0] || (d[0] = (c) => {
        if (c.defaultPrevented) return;
        const f = c.detail.originalEvent, m = f.button === 0 && f.ctrlKey === !0, v = f.button === 2 || m;
        (!a(l).modal.value || v) && (i.value = !0), a(l).triggerElement.value?.contains(c.target) && c.preventDefault();
      })
    }), {
      default: p(() => [D(s.$slots, "default")]),
      _: 3
    }, 16, ["id", "aria-labelledby"]));
  }
}), Cp = xp, Sp = /* @__PURE__ */ O({
  __name: "DropdownMenuGroup",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const t = e;
    return Y(), (n, o) => (b(), S(a(ki), Oe(Be(t)), {
      default: p(() => [D(n.$slots, "default")]),
      _: 3
    }, 16));
  }
}), Ep = Sp, Op = /* @__PURE__ */ O({
  __name: "DropdownMenuItem",
  props: {
    disabled: {
      type: Boolean,
      required: !1
    },
    textValue: {
      type: String,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, r = In(t);
    return Y(), (l, i) => (b(), S(a(Di), Oe(Be({
      ...n,
      ...a(r)
    })), {
      default: p(() => [D(l.$slots, "default")]),
      _: 3
    }, 16));
  }
}), qp = Op, Dp = /* @__PURE__ */ O({
  __name: "DropdownMenuItemIndicator",
  props: {
    forceMount: {
      type: Boolean,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const t = e;
    return Y(), (n, o) => (b(), S(a(Lf), Oe(Be(t)), {
      default: p(() => [D(n.$slots, "default")]),
      _: 3
    }, 16));
  }
}), kp = Dp, Pp = /* @__PURE__ */ O({
  __name: "DropdownMenuLabel",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const t = e;
    return Y(), (n, o) => (b(), S(a(Xf), Oe(Be(t)), {
      default: p(() => [D(n.$slots, "default")]),
      _: 3
    }, 16));
  }
}), Ap = Pp, Ip = /* @__PURE__ */ O({
  __name: "DropdownMenuPortal",
  props: {
    to: {
      type: null,
      required: !1
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    defer: {
      type: Boolean,
      required: !1
    },
    forceMount: {
      type: Boolean,
      required: !1
    }
  },
  setup(e) {
    const t = e;
    return (n, o) => (b(), S(a(Zf), Oe(Be(t)), {
      default: p(() => [D(n.$slots, "default")]),
      _: 3
    }, 16));
  }
}), Tp = Ip, Bp = /* @__PURE__ */ O({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {
      type: String,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, r = In(t);
    return Y(), (l, i) => (b(), S(a(np), Oe(Be({
      ...n,
      ...a(r)
    })), {
      default: p(() => [D(l.$slots, "default")]),
      _: 3
    }, 16));
  }
}), $p = Bp, Rp = /* @__PURE__ */ O({
  __name: "DropdownMenuRadioItem",
  props: {
    value: {
      type: String,
      required: !0
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    textValue: {
      type: String,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const r = ge(e, t);
    return Y(), (l, i) => (b(), S(a(rp), Oe(Be(a(r))), {
      default: p(() => [D(l.$slots, "default")]),
      _: 3
    }, 16));
  }
}), Mp = Rp, Np = /* @__PURE__ */ O({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: {
      type: Boolean,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "button"
    }
  },
  setup(e) {
    const t = e, n = Ai(), { forwardRef: o, currentElement: r } = Y();
    return Ae(() => {
      n.triggerElement = r;
    }), n.triggerId ||= dt(void 0, "reka-dropdown-menu-trigger"), (l, i) => (b(), S(a(Of), { "as-child": "" }, {
      default: p(() => [y(a(J), {
        id: a(n).triggerId,
        ref: a(o),
        type: l.as === "button" ? "button" : void 0,
        "as-child": t.asChild,
        as: l.as,
        "aria-haspopup": "menu",
        "aria-expanded": a(n).open.value,
        "aria-controls": a(n).open.value ? a(n).contentId : void 0,
        "data-disabled": l.disabled ? "" : void 0,
        disabled: l.disabled,
        "data-state": a(n).open.value ? "open" : "closed",
        onClick: i[0] || (i[0] = async (u) => {
          !l.disabled && u.button === 0 && u.ctrlKey === !1 && (a(n)?.onOpenToggle(), await be(), a(n).open.value && u.preventDefault());
        }),
        onKeydown: i[1] || (i[1] = ut((u) => {
          l.disabled || (["Enter", " "].includes(u.key) && a(n).onOpenToggle(), u.key === "ArrowDown" && a(n).onOpenChange(!0), [
            "Enter",
            " ",
            "ArrowDown"
          ].includes(u.key) && u.preventDefault());
        }, [
          "enter",
          "space",
          "arrow-down"
        ]))
      }, {
        default: p(() => [D(l.$slots, "default")]),
        _: 3
      }, 8, [
        "id",
        "type",
        "as-child",
        "as",
        "aria-expanded",
        "aria-controls",
        "data-disabled",
        "disabled",
        "data-state"
      ])]),
      _: 3
    }));
  }
}), Fp = Np, Vp = /* @__PURE__ */ O({
  __name: "Label",
  props: {
    for: {
      type: String,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "label"
    }
  },
  setup(e) {
    const t = e;
    return Y(), (n, o) => (b(), S(a(J), M(t, { onMousedown: o[0] || (o[0] = (r) => {
      !r.defaultPrevented && r.detail > 1 && r.preventDefault();
    }) }), {
      default: p(() => [D(n.$slots, "default")]),
      _: 3
    }, 16));
  }
}), Lp = Vp;
let br = /* @__PURE__ */ new Map(), Hr = !1;
try {
  Hr = new Intl.NumberFormat("de-DE", {
    signDisplay: "exceptZero"
  }).resolvedOptions().signDisplay === "exceptZero";
} catch {
}
let Lo = !1;
try {
  Lo = new Intl.NumberFormat("de-DE", {
    style: "unit",
    unit: "degree"
  }).resolvedOptions().style === "unit";
} catch {
}
const Ii = {
  degree: {
    narrow: {
      default: "°",
      "ja-JP": " 度",
      "zh-TW": "度",
      "sl-SI": " °"
    }
  }
};
class Ti {
  /** Formats a number value as a string, according to the locale and options provided to the constructor. */
  format(t) {
    let n = "";
    if (!Hr && this.options.signDisplay != null ? n = jp(this.numberFormatter, this.options.signDisplay, t) : n = this.numberFormatter.format(t), this.options.style === "unit" && !Lo) {
      var o;
      let { unit: r, unitDisplay: l = "short", locale: i } = this.resolvedOptions();
      if (!r) return n;
      let u = (o = Ii[r]) === null || o === void 0 ? void 0 : o[l];
      n += u[i] || u.default;
    }
    return n;
  }
  /** Formats a number to an array of parts such as separators, digits, punctuation, and more. */
  formatToParts(t) {
    return this.numberFormatter.formatToParts(t);
  }
  /** Formats a number range as a string. */
  formatRange(t, n) {
    if (typeof this.numberFormatter.formatRange == "function") return this.numberFormatter.formatRange(t, n);
    if (n < t) throw new RangeError("End date must be >= start date");
    return `${this.format(t)} – ${this.format(n)}`;
  }
  /** Formats a number range as an array of parts. */
  formatRangeToParts(t, n) {
    if (typeof this.numberFormatter.formatRangeToParts == "function") return this.numberFormatter.formatRangeToParts(t, n);
    if (n < t) throw new RangeError("End date must be >= start date");
    let o = this.numberFormatter.formatToParts(t), r = this.numberFormatter.formatToParts(n);
    return [
      ...o.map((l) => ({
        ...l,
        source: "startRange"
      })),
      {
        type: "literal",
        value: " – ",
        source: "shared"
      },
      ...r.map((l) => ({
        ...l,
        source: "endRange"
      }))
    ];
  }
  /** Returns the resolved formatting options based on the values passed to the constructor. */
  resolvedOptions() {
    let t = this.numberFormatter.resolvedOptions();
    return !Hr && this.options.signDisplay != null && (t = {
      ...t,
      signDisplay: this.options.signDisplay
    }), !Lo && this.options.style === "unit" && (t = {
      ...t,
      style: "unit",
      unit: this.options.unit,
      unitDisplay: this.options.unitDisplay
    }), t;
  }
  constructor(t, n = {}) {
    this.numberFormatter = zp(t, n), this.options = n;
  }
}
function zp(e, t = {}) {
  let { numberingSystem: n } = t;
  if (n && e.includes("-nu-") && (e.includes("-u-") || (e += "-u-"), e += `-nu-${n}`), t.style === "unit" && !Lo) {
    var o;
    let { unit: i, unitDisplay: u = "short" } = t;
    if (!i) throw new Error('unit option must be provided with style: "unit"');
    if (!(!((o = Ii[i]) === null || o === void 0) && o[u])) throw new Error(`Unsupported unit ${i} with unitDisplay = ${u}`);
    t = {
      ...t,
      style: "decimal"
    };
  }
  let r = e + (t ? Object.entries(t).sort((i, u) => i[0] < u[0] ? -1 : 1).join() : "");
  if (br.has(r)) return br.get(r);
  let l = new Intl.NumberFormat(e, t);
  return br.set(r, l), l;
}
function jp(e, t, n) {
  if (t === "auto") return e.format(n);
  if (t === "never") return e.format(Math.abs(n));
  {
    let o = !1;
    if (t === "always" ? o = n > 0 || Object.is(n, 0) : t === "exceptZero" && (Object.is(n, -0) || Object.is(n, 0) ? n = Math.abs(n) : o = n > 0), o) {
      let r = e.format(-n), l = e.format(n), i = r.replace(l, "").replace(/\u200e|\u061C/, "");
      return [
        ...i
      ].length !== 1 && console.warn("@react-aria/i18n polyfill for NumberFormat signDisplay: Unsupported case"), r.replace(l, "!!!").replace(i, "+").replace("!!!", l);
    } else return e.format(n);
  }
}
const Up = new RegExp("^.*\\(.*\\).*$"), Wp = [
  "latn",
  "arab",
  "hanidec",
  "deva",
  "beng",
  "fullwide"
];
class Bi {
  /**
  * Parses the given string to a number. Returns NaN if a valid number could not be parsed.
  */
  parse(t) {
    return _r(this.locale, this.options, t).parse(t);
  }
  /**
  * Returns whether the given string could potentially be a valid number. This should be used to
  * validate user input as the user types. If a `minValue` or `maxValue` is provided, the validity
  * of the minus/plus sign characters can be checked.
  */
  isValidPartialNumber(t, n, o) {
    return _r(this.locale, this.options, t).isValidPartialNumber(t, n, o);
  }
  /**
  * Returns a numbering system for which the given string is valid in the current locale.
  * If no numbering system could be detected, the default numbering system for the current
  * locale is returned.
  */
  getNumberingSystem(t) {
    return _r(this.locale, this.options, t).options.numberingSystem;
  }
  constructor(t, n = {}) {
    this.locale = t, this.options = n;
  }
}
const nl = /* @__PURE__ */ new Map();
function _r(e, t, n) {
  let o = ol(e, t);
  if (!e.includes("-nu-") && !o.isValidPartialNumber(n)) {
    for (let r of Wp) if (r !== o.options.numberingSystem) {
      let l = ol(e + (e.includes("-u-") ? "-nu-" : "-u-nu-") + r, t);
      if (l.isValidPartialNumber(n)) return l;
    }
  }
  return o;
}
function ol(e, t) {
  let n = e + (t ? Object.entries(t).sort((r, l) => r[0] < l[0] ? -1 : 1).join() : ""), o = nl.get(n);
  return o || (o = new Gp(e, t), nl.set(n, o)), o;
}
class Gp {
  parse(t) {
    let n = this.sanitize(t);
    if (this.symbols.group && (n = hn(n, this.symbols.group, "")), this.symbols.decimal && (n = n.replace(this.symbols.decimal, ".")), this.symbols.minusSign && (n = n.replace(this.symbols.minusSign, "-")), n = n.replace(this.symbols.numeral, this.symbols.index), this.options.style === "percent") {
      let i = n.indexOf("-");
      n = n.replace("-", ""), n = n.replace("+", "");
      let u = n.indexOf(".");
      u === -1 && (u = n.length), n = n.replace(".", ""), u - 2 === 0 ? n = `0.${n}` : u - 2 === -1 ? n = `0.0${n}` : u - 2 === -2 ? n = "0.00" : n = `${n.slice(0, u - 2)}.${n.slice(u - 2)}`, i > -1 && (n = `-${n}`);
    }
    let o = n ? +n : NaN;
    if (isNaN(o)) return NaN;
    if (this.options.style === "percent") {
      var r, l;
      let i = {
        ...this.options,
        style: "decimal",
        minimumFractionDigits: Math.min(((r = this.options.minimumFractionDigits) !== null && r !== void 0 ? r : 0) + 2, 20),
        maximumFractionDigits: Math.min(((l = this.options.maximumFractionDigits) !== null && l !== void 0 ? l : 0) + 2, 20)
      };
      return new Bi(this.locale, i).parse(new Ti(this.locale, i).format(o));
    }
    return this.options.currencySign === "accounting" && Up.test(t) && (o = -1 * o), o;
  }
  sanitize(t) {
    return t = t.replace(this.symbols.literals, ""), this.symbols.minusSign && (t = t.replace("-", this.symbols.minusSign)), this.options.numberingSystem === "arab" && (this.symbols.decimal && (t = t.replace(",", this.symbols.decimal), t = t.replace("،", this.symbols.decimal)), this.symbols.group && (t = hn(t, ".", this.symbols.group))), this.symbols.group === "’" && t.includes("'") && (t = hn(t, "'", this.symbols.group)), this.options.locale === "fr-FR" && this.symbols.group && (t = hn(t, " ", this.symbols.group), t = hn(t, /\u00A0/g, this.symbols.group)), t;
  }
  isValidPartialNumber(t, n = -1 / 0, o = 1 / 0) {
    return t = this.sanitize(t), this.symbols.minusSign && t.startsWith(this.symbols.minusSign) && n < 0 ? t = t.slice(this.symbols.minusSign.length) : this.symbols.plusSign && t.startsWith(this.symbols.plusSign) && o > 0 && (t = t.slice(this.symbols.plusSign.length)), this.symbols.group && t.startsWith(this.symbols.group) || this.symbols.decimal && t.indexOf(this.symbols.decimal) > -1 && this.options.maximumFractionDigits === 0 ? !1 : (this.symbols.group && (t = hn(t, this.symbols.group, "")), t = t.replace(this.symbols.numeral, ""), this.symbols.decimal && (t = t.replace(this.symbols.decimal, "")), t.length === 0);
  }
  constructor(t, n = {}) {
    this.locale = t, n.roundingIncrement !== 1 && n.roundingIncrement != null && (n.maximumFractionDigits == null && n.minimumFractionDigits == null ? (n.maximumFractionDigits = 0, n.minimumFractionDigits = 0) : n.maximumFractionDigits == null ? n.maximumFractionDigits = n.minimumFractionDigits : n.minimumFractionDigits == null && (n.minimumFractionDigits = n.maximumFractionDigits)), this.formatter = new Intl.NumberFormat(t, n), this.options = this.formatter.resolvedOptions(), this.symbols = Kp(t, this.formatter, this.options, n);
    var o, r;
    this.options.style === "percent" && (((o = this.options.minimumFractionDigits) !== null && o !== void 0 ? o : 0) > 18 || ((r = this.options.maximumFractionDigits) !== null && r !== void 0 ? r : 0) > 18) && console.warn("NumberParser cannot handle percentages with greater than 18 decimal places, please reduce the number in your options.");
  }
}
const rl = /* @__PURE__ */ new Set([
  "decimal",
  "fraction",
  "integer",
  "minusSign",
  "plusSign",
  "group"
]), Hp = [
  0,
  4,
  2,
  1,
  11,
  20,
  3,
  7,
  100,
  21,
  0.1,
  1.1
];
function Kp(e, t, n, o) {
  var r, l, i, u;
  let s = new Intl.NumberFormat(e, {
    ...n,
    // Resets so we get the full range of symbols
    minimumSignificantDigits: 1,
    maximumSignificantDigits: 21,
    roundingIncrement: 1,
    roundingPriority: "auto",
    roundingMode: "halfExpand"
  }), d = s.formatToParts(-10000.111), c = s.formatToParts(10000.111), f = Hp.map((R) => s.formatToParts(R));
  var m;
  let v = (m = (r = d.find((R) => R.type === "minusSign")) === null || r === void 0 ? void 0 : r.value) !== null && m !== void 0 ? m : "-", g = (l = c.find((R) => R.type === "plusSign")) === null || l === void 0 ? void 0 : l.value;
  !g && (o?.signDisplay === "exceptZero" || o?.signDisplay === "always") && (g = "+");
  let x = (i = new Intl.NumberFormat(e, {
    ...n,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).formatToParts(1e-3).find((R) => R.type === "decimal")) === null || i === void 0 ? void 0 : i.value, k = (u = d.find((R) => R.type === "group")) === null || u === void 0 ? void 0 : u.value, A = d.filter((R) => !rl.has(R.type)).map((R) => al(R.value)), I = f.flatMap((R) => R.filter((V) => !rl.has(V.type)).map((V) => al(V.value))), C = [
    .../* @__PURE__ */ new Set([
      ...A,
      ...I
    ])
  ].sort((R, V) => V.length - R.length), B = C.length === 0 ? new RegExp("[\\p{White_Space}]", "gu") : new RegExp(`${C.join("|")}|[\\p{White_Space}]`, "gu"), h = [
    ...new Intl.NumberFormat(n.locale, {
      useGrouping: !1
    }).format(9876543210)
  ].reverse(), w = new Map(h.map((R, V) => [
    R,
    V
  ])), P = new RegExp(`[${h.join("")}]`, "g");
  return {
    minusSign: v,
    plusSign: g,
    decimal: x,
    group: k,
    literals: B,
    numeral: P,
    index: (R) => String(w.get(R))
  };
}
function hn(e, t, n) {
  return e.replaceAll ? e.replaceAll(t, n) : e.split(t).join(n);
}
function al(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function $i(e) {
  const { disabled: t } = e, n = $(), o = Jl(), r = () => window.clearTimeout(n.value), l = (m) => {
    r(), !t.value && (o.trigger(), n.value = window.setTimeout(() => {
      l(60);
    }, m));
  }, i = () => {
    l(400);
  }, u = () => {
    r();
  }, s = $(!1), d = T(() => et(e.target)), c = (m) => {
    m.button !== 0 || s.value || (m.preventDefault(), s.value = !0, i());
  }, f = () => {
    s.value = !1, u();
  };
  return St && (Ge(d || window, "pointerdown", c), Ge(window, "pointerup", f), Ge(window, "pointercancel", f)), {
    isPressed: s,
    onTrigger: o.on
  };
}
function ll(e, t = $({})) {
  return sa(() => new Ti(e.value, t.value));
}
function Yp(e, t = $({})) {
  return sa(() => new Bi(e.value, t.value));
}
function il(e, t, n) {
  let o = e === "+" ? t + n : t - n;
  if (t % 1 !== 0 || n % 1 !== 0) {
    const r = t.toString().split("."), l = n.toString().split("."), i = r[1] && r[1].length || 0, u = l[1] && l[1].length || 0, s = 10 ** Math.max(i, u);
    t = Math.round(t * s), n = Math.round(n * s), o = e === "+" ? t + n : t - n, o /= s;
  }
  return o;
}
const [wa, Xp] = ye("NumberFieldRoot");
var Jp = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "NumberFieldRoot",
  props: {
    defaultValue: {
      type: Number,
      required: !1,
      default: void 0
    },
    modelValue: {
      type: [Number, null],
      required: !1
    },
    min: {
      type: Number,
      required: !1
    },
    max: {
      type: Number,
      required: !1
    },
    step: {
      type: Number,
      required: !1,
      default: 1
    },
    stepSnapping: {
      type: Boolean,
      required: !1,
      default: !0
    },
    formatOptions: {
      type: null,
      required: !1
    },
    locale: {
      type: String,
      required: !1
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    readonly: {
      type: Boolean,
      required: !1
    },
    disableWheelChange: {
      type: Boolean,
      required: !1
    },
    invertWheelChange: {
      type: Boolean,
      required: !1
    },
    id: {
      type: String,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "div"
    },
    name: {
      type: String,
      required: !1
    },
    required: {
      type: Boolean,
      required: !1
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = t, { disabled: r, readonly: l, disableWheelChange: i, invertWheelChange: u, min: s, max: d, step: c, stepSnapping: f, formatOptions: m, id: v, locale: g } = Ee(n), _ = tt(n, "modelValue", o, {
      defaultValue: n.defaultValue,
      passive: n.modelValue === void 0
    }), { primitiveElement: x, currentElement: k } = un(), A = Yu(g), I = Tn(k), C = $(), B = T(() => !Jn(_.value) && (q(_.value) === s.value || s.value && !isNaN(_.value) ? il("-", _.value, c.value) < s.value : !1)), h = T(() => !Jn(_.value) && (q(_.value) === d.value || d.value && !isNaN(_.value) ? il("+", _.value, c.value) > d.value : !1));
    function w(j, fe = 1) {
      if (C.value?.focus(), n.disabled || n.readonly) return;
      const $e = z.parse(C.value?.value ?? "");
      isNaN($e) ? _.value = s.value ?? 0 : j === "increase" ? _.value = q($e + (c.value ?? 1) * fe) : _.value = q($e - (c.value ?? 1) * fe);
    }
    function P(j = 1) {
      w("increase", j);
    }
    function E(j = 1) {
      w("decrease", j);
    }
    function R(j) {
      j === "min" && s.value !== void 0 ? _.value = q(s.value) : j === "max" && d.value !== void 0 && (_.value = q(d.value));
    }
    const V = ll(A, m), z = Yp(A, m), oe = T(() => V.resolvedOptions().maximumFractionDigits > 0 ? "decimal" : "numeric"), ne = ll(A, m), ie = T(() => Jn(_.value) || isNaN(_.value) ? "" : ne.format(_.value));
    function re(j) {
      return z.isValidPartialNumber(j, s.value, d.value);
    }
    function G(j) {
      C.value && (C.value.value = j);
    }
    function q(j) {
      let fe;
      return c.value === void 0 || isNaN(c.value) || !f.value ? fe = Rr(j, s.value, d.value) : fe = iu(j, s.value, d.value, c.value), fe = z.parse(V.format(fe)), fe;
    }
    function L(j) {
      const fe = z.parse(j);
      return _.value = isNaN(fe) ? void 0 : q(fe), j.length ? (isNaN(fe), G(ie.value)) : G(j);
    }
    return Xp({
      modelValue: _,
      handleDecrease: E,
      handleIncrease: P,
      handleMinMaxValue: R,
      inputMode: oe,
      inputEl: C,
      onInputElement: (j) => C.value = j,
      textValue: ie,
      validate: re,
      applyInputValue: L,
      disabled: r,
      readonly: l,
      disableWheelChange: i,
      invertWheelChange: u,
      max: d,
      min: s,
      isDecreaseDisabled: B,
      isIncreaseDisabled: h,
      id: v
    }), (j, fe) => (b(), S(a(J), M(j.$attrs, {
      ref_key: "primitiveElement",
      ref: x,
      role: "group",
      as: j.as,
      "as-child": j.asChild,
      "data-disabled": a(r) ? "" : void 0,
      "data-readonly": a(l) ? "" : void 0
    }), {
      default: p(() => [D(j.$slots, "default", {
        modelValue: a(_),
        textValue: ie.value
      }), a(I) && j.name ? (b(), S(a(uo), {
        key: 0,
        type: "text",
        value: a(_),
        name: j.name,
        disabled: a(r),
        readonly: a(l),
        required: j.required
      }, null, 8, [
        "value",
        "name",
        "disabled",
        "readonly",
        "required"
      ])) : ee("v-if", !0)]),
      _: 3
    }, 16, [
      "as",
      "as-child",
      "data-disabled",
      "data-readonly"
    ]));
  }
}), Zp = Jp, Qp = /* @__PURE__ */ O({
  __name: "NumberFieldDecrement",
  props: {
    disabled: {
      type: Boolean,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "button"
    }
  },
  setup(e) {
    const t = e, n = wa(), o = T(() => n.disabled?.value || n.readonly.value || t.disabled || n.isDecreaseDisabled.value), { primitiveElement: r, currentElement: l } = un(), { isPressed: i, onTrigger: u } = $i({
      target: l,
      disabled: o
    });
    return u(() => {
      n.handleDecrease();
    }), (s, d) => (b(), S(a(J), M(t, {
      ref_key: "primitiveElement",
      ref: r,
      tabindex: "-1",
      "aria-label": "Decrease",
      type: s.as === "button" ? "button" : void 0,
      style: { userSelect: a(i) ? "none" : void 0 },
      disabled: o.value ? "" : void 0,
      "data-disabled": o.value ? "" : void 0,
      "data-pressed": a(i) ? "true" : void 0,
      onContextmenu: d[0] || (d[0] = Pe(() => {
      }, ["prevent"]))
    }), {
      default: p(() => [D(s.$slots, "default")]),
      _: 3
    }, 16, [
      "type",
      "style",
      "disabled",
      "data-disabled",
      "data-pressed"
    ]));
  }
}), em = Qp, tm = /* @__PURE__ */ O({
  __name: "NumberFieldIncrement",
  props: {
    disabled: {
      type: Boolean,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "button"
    }
  },
  setup(e) {
    const t = e, n = wa(), o = T(() => n.disabled?.value || n.readonly.value || t.disabled || n.isIncreaseDisabled.value), { primitiveElement: r, currentElement: l } = un(), { isPressed: i, onTrigger: u } = $i({
      target: l,
      disabled: o
    });
    return u(() => {
      n.handleIncrease();
    }), (s, d) => (b(), S(a(J), M(t, {
      ref_key: "primitiveElement",
      ref: r,
      tabindex: "-1",
      "aria-label": "Increase",
      type: s.as === "button" ? "button" : void 0,
      style: { userSelect: a(i) ? "none" : void 0 },
      disabled: o.value ? "" : void 0,
      "data-disabled": o.value ? "" : void 0,
      "data-pressed": a(i) ? "true" : void 0,
      onContextmenu: d[0] || (d[0] = Pe(() => {
      }, ["prevent"]))
    }), {
      default: p(() => [D(s.$slots, "default")]),
      _: 3
    }, 16, [
      "type",
      "style",
      "disabled",
      "data-disabled",
      "data-pressed"
    ]));
  }
}), nm = tm, om = /* @__PURE__ */ O({
  __name: "NumberFieldInput",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "input"
    }
  },
  setup(e) {
    const t = e, { primitiveElement: n, currentElement: o } = un(), r = wa();
    function l(s) {
      r.disableWheelChange.value || s.target === Le() && (Math.abs(s.deltaY) <= Math.abs(s.deltaX) || (s.preventDefault(), s.deltaY > 0 ? r.invertWheelChange.value ? r.handleDecrease() : r.handleIncrease() : s.deltaY < 0 && (r.invertWheelChange.value ? r.handleIncrease() : r.handleDecrease())));
    }
    Ae(() => {
      r.onInputElement(o.value);
    });
    const i = $(r.textValue.value);
    ce(() => r.textValue.value, () => {
      i.value = r.textValue.value;
    }, {
      immediate: !0,
      deep: !0
    });
    function u() {
      requestAnimationFrame(() => {
        i.value = r.textValue.value;
      });
    }
    return (s, d) => (b(), S(a(J), M(t, {
      id: a(r).id.value,
      ref_key: "primitiveElement",
      ref: n,
      value: i.value,
      role: "spinbutton",
      type: "text",
      tabindex: "0",
      inputmode: a(r).inputMode.value,
      disabled: a(r).disabled.value ? "" : void 0,
      "data-disabled": a(r).disabled.value ? "" : void 0,
      readonly: a(r).readonly.value ? "" : void 0,
      "data-readonly": a(r).readonly.value ? "" : void 0,
      autocomplete: "off",
      autocorrect: "off",
      spellcheck: "false",
      "aria-roledescription": "Number field",
      "aria-valuenow": a(r).modelValue.value,
      "aria-valuemin": a(r).min.value,
      "aria-valuemax": a(r).max.value,
      onKeydown: [
        d[0] || (d[0] = ut(Pe((c) => a(r).handleIncrease(), ["prevent"]), ["up"])),
        d[1] || (d[1] = ut(Pe((c) => a(r).handleDecrease(), ["prevent"]), ["down"])),
        d[2] || (d[2] = ut(Pe((c) => a(r).handleIncrease(10), ["prevent"]), ["page-up"])),
        d[3] || (d[3] = ut(Pe((c) => a(r).handleDecrease(10), ["prevent"]), ["page-down"])),
        d[4] || (d[4] = ut(Pe((c) => a(r).handleMinMaxValue("min"), ["prevent"]), ["home"])),
        d[5] || (d[5] = ut(Pe((c) => a(r).handleMinMaxValue("max"), ["prevent"]), ["end"])),
        d[8] || (d[8] = ut((c) => a(r).applyInputValue(c.target?.value), ["enter"]))
      ],
      onWheel: l,
      onBeforeinput: d[6] || (d[6] = (c) => {
        const f = c.target;
        let m = f.value.slice(0, f.selectionStart ?? void 0) + (c.data ?? "") + f.value.slice(f.selectionEnd ?? void 0);
        a(r).validate(m) || c.preventDefault();
      }),
      onInput: d[7] || (d[7] = (c) => {
        const f = c.target;
        i.value = f.value;
      }),
      onChange: u,
      onBlur: d[9] || (d[9] = (c) => a(r).applyInputValue(c.target?.value))
    }), {
      default: p(() => [D(s.$slots, "default")]),
      _: 3
    }, 16, [
      "id",
      "value",
      "inputmode",
      "disabled",
      "data-disabled",
      "readonly",
      "data-readonly",
      "aria-valuenow",
      "aria-valuemin",
      "aria-valuemax"
    ]));
  }
}), rm = om;
const am = "radio.select";
function lm(e, t, n) {
  jo(am, n, {
    originalEvent: e,
    value: t
  });
}
var im = /* @__PURE__ */ O({
  __name: "Radio",
  props: {
    id: {
      type: String,
      required: !1
    },
    value: {
      type: null,
      required: !1
    },
    disabled: {
      type: Boolean,
      required: !1,
      default: !1
    },
    checked: {
      type: Boolean,
      required: !1,
      default: void 0
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "button"
    },
    name: {
      type: String,
      required: !1
    },
    required: {
      type: Boolean,
      required: !1
    }
  },
  emits: ["update:checked", "select"],
  setup(e, { emit: t }) {
    const n = e, o = t, r = tt(n, "checked", o, { passive: n.checked === void 0 }), { value: l } = Ee(n), { forwardRef: i, currentElement: u } = Y(), s = Tn(u), d = T(() => n.id && u.value ? document.querySelector(`[for="${n.id}"]`)?.innerText ?? n.value : void 0);
    function c(f) {
      n.disabled || lm(f, n.value, (m) => {
        o("select", m), !m?.defaultPrevented && (r.value = !0, s.value && m.stopPropagation());
      });
    }
    return (f, m) => (b(), S(a(J), M(f.$attrs, {
      id: f.id,
      ref: a(i),
      role: "radio",
      type: f.as === "button" ? "button" : void 0,
      as: f.as,
      "aria-checked": a(r),
      "aria-label": d.value,
      "as-child": f.asChild,
      disabled: f.disabled ? "" : void 0,
      "data-state": a(r) ? "checked" : "unchecked",
      "data-disabled": f.disabled ? "" : void 0,
      value: a(l),
      required: f.required,
      name: f.name,
      onClick: Pe(c, ["stop"])
    }), {
      default: p(() => [D(f.$slots, "default", { checked: a(r) }), a(s) && f.name ? (b(), S(a(uo), {
        key: 0,
        type: "radio",
        tabindex: "-1",
        value: a(l),
        checked: !!a(r),
        name: f.name,
        disabled: f.disabled,
        required: f.required
      }, null, 8, [
        "value",
        "checked",
        "name",
        "disabled",
        "required"
      ])) : ee("v-if", !0)]),
      _: 3
    }, 16, [
      "id",
      "type",
      "as",
      "aria-checked",
      "aria-label",
      "as-child",
      "disabled",
      "data-state",
      "data-disabled",
      "value",
      "required",
      "name"
    ]));
  }
}), sm = im;
const [um, dm] = ye("RadioGroupRoot");
var cm = /* @__PURE__ */ O({
  __name: "RadioGroupRoot",
  props: {
    modelValue: {
      type: null,
      required: !1
    },
    defaultValue: {
      type: null,
      required: !1
    },
    disabled: {
      type: Boolean,
      required: !1,
      default: !1
    },
    orientation: {
      type: String,
      required: !1,
      default: void 0
    },
    dir: {
      type: String,
      required: !1
    },
    loop: {
      type: Boolean,
      required: !1,
      default: !0
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    },
    name: {
      type: String,
      required: !1
    },
    required: {
      type: Boolean,
      required: !1,
      default: !1
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = t, { forwardRef: r, currentElement: l } = Y(), i = tt(n, "modelValue", o, {
      defaultValue: n.defaultValue,
      passive: n.modelValue === void 0
    }), { disabled: u, loop: s, orientation: d, name: c, required: f, dir: m } = Ee(n), v = An(m), g = Tn(l);
    return dm({
      modelValue: i,
      changeModelValue: (_) => {
        i.value = _;
      },
      disabled: u,
      loop: s,
      orientation: d,
      name: c?.value,
      required: f
    }), (_, x) => (b(), S(a(pi), {
      "as-child": "",
      orientation: a(d),
      dir: a(v),
      loop: a(s)
    }, {
      default: p(() => [y(a(J), {
        ref: a(r),
        role: "radiogroup",
        "data-disabled": a(u) ? "" : void 0,
        "as-child": _.asChild,
        as: _.as,
        "aria-orientation": a(d),
        "aria-required": a(f),
        dir: a(v)
      }, {
        default: p(() => [D(_.$slots, "default", { modelValue: a(i) }), a(g) && a(c) ? (b(), S(a(uo), {
          key: 0,
          required: a(f),
          disabled: a(u),
          value: a(i),
          name: a(c)
        }, null, 8, [
          "required",
          "disabled",
          "value",
          "name"
        ])) : ee("v-if", !0)]),
        _: 3
      }, 8, [
        "data-disabled",
        "as-child",
        "as",
        "aria-orientation",
        "aria-required",
        "dir"
      ])]),
      _: 3
    }, 8, [
      "orientation",
      "dir",
      "loop"
    ]));
  }
}), fm = cm;
const [pm, mm] = ye("RadioGroupItem");
var vm = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "RadioGroupItem",
  props: {
    id: {
      type: String,
      required: !1
    },
    value: {
      type: null,
      required: !1
    },
    disabled: {
      type: Boolean,
      required: !1,
      default: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "button"
    },
    name: {
      type: String,
      required: !1
    },
    required: {
      type: Boolean,
      required: !1
    }
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, o = t, { forwardRef: r, currentElement: l } = Y(), i = um(), u = T(() => i.disabled.value || n.disabled), s = T(() => i.required.value || n.required), d = T(() => la(i.modelValue?.value, n.value));
    mm({
      disabled: u,
      checked: d
    });
    const c = $(!1), f = [
      "ArrowUp",
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight"
    ];
    Ge("keydown", (v) => {
      f.includes(v.key) && (c.value = !0);
    }), Ge("keyup", () => {
      c.value = !1;
    });
    function m() {
      setTimeout(() => {
        c.value && l.value?.click();
      }, 0);
    }
    return (v, g) => (b(), S(a(nc), {
      checked: d.value,
      disabled: u.value,
      "as-child": "",
      focusable: !u.value,
      active: d.value
    }, {
      default: p(() => [y(sm, M({
        ...v.$attrs,
        ...n
      }, {
        ref: a(r),
        checked: d.value,
        required: s.value,
        disabled: u.value,
        "onUpdate:checked": g[0] || (g[0] = (_) => a(i).changeModelValue(v.value)),
        onSelect: g[1] || (g[1] = (_) => o("select", _)),
        onKeydown: g[2] || (g[2] = ut(Pe(() => {
        }, ["prevent"]), ["enter"])),
        onFocus: m
      }), {
        default: p(() => [D(v.$slots, "default", {
          checked: d.value,
          required: s.value,
          disabled: u.value
        })]),
        _: 3
      }, 16, [
        "checked",
        "required",
        "disabled"
      ])]),
      _: 3
    }, 8, [
      "checked",
      "disabled",
      "focusable",
      "active"
    ]));
  }
}), gm = vm, ym = /* @__PURE__ */ O({
  __name: "RadioGroupIndicator",
  props: {
    forceMount: {
      type: Boolean,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "span"
    }
  },
  setup(e) {
    const { forwardRef: t } = Y(), n = pm();
    return (o, r) => (b(), S(a(Yt), { present: o.forceMount || a(n).checked.value }, {
      default: p(() => [y(a(J), M({
        ref: a(t),
        "data-state": a(n).checked.value ? "checked" : "unchecked",
        "data-disabled": a(n).disabled.value ? "" : void 0,
        "as-child": o.asChild,
        as: o.as
      }, o.$attrs), {
        default: p(() => [D(o.$slots, "default")]),
        _: 3
      }, 16, [
        "data-state",
        "data-disabled",
        "as-child",
        "as"
      ])]),
      _: 3
    }, 8, ["present"]));
  }
}), hm = ym;
const bm = [
  " ",
  "Enter",
  "ArrowUp",
  "ArrowDown"
], _m = [" ", "Enter"], pt = 10;
function eo(e, t, n) {
  return e === void 0 ? !1 : Array.isArray(e) ? e.some((o) => Kr(o, t, n)) : Kr(e, t, n);
}
function Kr(e, t, n) {
  return e === void 0 || t === void 0 ? !1 : typeof e == "string" ? e === t : typeof n == "function" ? n(e, t) : typeof n == "string" ? e?.[n] === t?.[n] : la(e, t);
}
function wm(e) {
  return e == null || e === "" || Array.isArray(e) && e.length === 0;
}
const xm = {
  key: 0,
  value: ""
}, [Xt, Ri] = ye("SelectRoot");
var Cm = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "SelectRoot",
  props: {
    open: {
      type: Boolean,
      required: !1,
      default: void 0
    },
    defaultOpen: {
      type: Boolean,
      required: !1
    },
    defaultValue: {
      type: null,
      required: !1
    },
    modelValue: {
      type: null,
      required: !1,
      default: void 0
    },
    by: {
      type: [String, Function],
      required: !1
    },
    dir: {
      type: String,
      required: !1
    },
    multiple: {
      type: Boolean,
      required: !1
    },
    autocomplete: {
      type: String,
      required: !1
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    name: {
      type: String,
      required: !1
    },
    required: {
      type: Boolean,
      required: !1
    }
  },
  emits: ["update:modelValue", "update:open"],
  setup(e, { emit: t }) {
    const n = e, o = t, { required: r, disabled: l, multiple: i, dir: u } = Ee(n), s = tt(n, "modelValue", o, {
      defaultValue: n.defaultValue ?? (i.value ? [] : void 0),
      passive: n.modelValue === void 0,
      deep: !0
    }), d = tt(n, "open", o, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), c = $(), f = $(), m = $({
      x: 0,
      y: 0
    }), v = T(() => i.value && Array.isArray(s.value) ? s.value?.length === 0 : Jn(s.value));
    yt({ isProvider: !0 });
    const g = An(u), _ = Tn(c), x = $(/* @__PURE__ */ new Set()), k = T(() => Array.from(x.value).map((C) => C.value).join(";"));
    function A(C) {
      if (i.value) {
        const B = Array.isArray(s.value) ? [...s.value] : [], h = B.findIndex((w) => Kr(w, C, n.by));
        h === -1 ? B.push(C) : B.splice(h, 1), s.value = [...B];
      } else s.value = C;
    }
    function I(C) {
      return Array.from(x.value).find((B) => eo(C, B.value, n.by));
    }
    return Ri({
      triggerElement: c,
      onTriggerChange: (C) => {
        c.value = C;
      },
      valueElement: f,
      onValueElementChange: (C) => {
        f.value = C;
      },
      contentId: "",
      modelValue: s,
      onValueChange: A,
      by: n.by,
      open: d,
      multiple: i,
      required: r,
      onOpenChange: (C) => {
        d.value = C;
      },
      dir: g,
      triggerPointerDownPosRef: m,
      disabled: l,
      isEmptyModelValue: v,
      optionsSet: x,
      onOptionAdd: (C) => {
        const B = I(C.value);
        B && x.value.delete(B), x.value.add(C);
      },
      onOptionRemove: (C) => {
        const B = I(C.value);
        B && x.value.delete(B);
      }
    }), (C, B) => (b(), S(a(Ho), null, {
      default: p(() => [D(C.$slots, "default", {
        modelValue: a(s),
        open: a(d)
      }), a(_) ? (b(), S(Om, {
        key: k.value,
        "aria-hidden": "true",
        tabindex: "-1",
        multiple: a(i),
        required: a(r),
        name: C.name,
        autocomplete: C.autocomplete,
        disabled: a(l),
        value: a(s)
      }, {
        default: p(() => [a(Jn)(a(s)) ? (b(), K("option", xm)) : ee("v-if", !0), (b(!0), K(me, null, Ve(Array.from(x.value), (h) => (b(), K("option", M({ key: h.value ?? "" }, { ref_for: !0 }, h), null, 16))), 128))]),
        _: 1
      }, 8, [
        "multiple",
        "required",
        "name",
        "autocomplete",
        "disabled",
        "value"
      ])) : ee("v-if", !0)]),
      _: 3
    }));
  }
}), Sm = Cm, Em = /* @__PURE__ */ O({
  __name: "BubbleSelect",
  props: {
    autocomplete: {
      type: String,
      required: !1
    },
    autofocus: {
      type: Boolean,
      required: !1
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    form: {
      type: String,
      required: !1
    },
    multiple: {
      type: Boolean,
      required: !1
    },
    name: {
      type: String,
      required: !1
    },
    required: {
      type: Boolean,
      required: !1
    },
    size: {
      type: Number,
      required: !1
    },
    value: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const t = e, n = $(), o = Xt();
    ce(() => t.value, (l, i) => {
      const u = window.HTMLSelectElement.prototype, d = Object.getOwnPropertyDescriptor(u, "value").set;
      if (l !== i && d && n.value) {
        const c = new Event("change", { bubbles: !0 });
        d.call(n.value, l), n.value.dispatchEvent(c);
      }
    });
    function r(l) {
      o.onValueChange(l.target.value);
    }
    return (l, i) => (b(), S(a(fa), { "as-child": "" }, {
      default: p(() => [F("select", M({
        ref_key: "selectElement",
        ref: n
      }, t, { onInput: r }), [D(l.$slots, "default")], 16)]),
      _: 3
    }));
  }
}), Om = Em, qm = /* @__PURE__ */ O({
  __name: "SelectPopperPosition",
  props: {
    side: {
      type: null,
      required: !1
    },
    sideOffset: {
      type: Number,
      required: !1
    },
    sideFlip: {
      type: Boolean,
      required: !1
    },
    align: {
      type: null,
      required: !1,
      default: "start"
    },
    alignOffset: {
      type: Number,
      required: !1
    },
    alignFlip: {
      type: Boolean,
      required: !1
    },
    avoidCollisions: {
      type: Boolean,
      required: !1
    },
    collisionBoundary: {
      type: null,
      required: !1
    },
    collisionPadding: {
      type: [Number, Object],
      required: !1,
      default: pt
    },
    arrowPadding: {
      type: Number,
      required: !1
    },
    sticky: {
      type: String,
      required: !1
    },
    hideWhenDetached: {
      type: Boolean,
      required: !1
    },
    positionStrategy: {
      type: String,
      required: !1
    },
    updatePositionStrategy: {
      type: String,
      required: !1
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: !1
    },
    prioritizePosition: {
      type: Boolean,
      required: !1
    },
    reference: {
      type: null,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const n = we(e);
    return (o, r) => (b(), S(a(Qo), M(a(n), { style: {
      boxSizing: "border-box",
      "--reka-select-content-transform-origin": "var(--reka-popper-transform-origin)",
      "--reka-select-content-available-width": "var(--reka-popper-available-width)",
      "--reka-select-content-available-height": "var(--reka-popper-available-height)",
      "--reka-select-trigger-width": "var(--reka-popper-anchor-width)",
      "--reka-select-trigger-height": "var(--reka-popper-anchor-height)"
    } }), {
      default: p(() => [D(o.$slots, "default")]),
      _: 3
    }, 16));
  }
}), Dm = qm;
const km = {
  onViewportChange: () => {
  },
  itemTextRefCallback: () => {
  },
  itemRefCallback: () => {
  }
}, [fn, Mi] = ye("SelectContent");
var Pm = /* @__PURE__ */ O({
  __name: "SelectContentImpl",
  props: {
    position: {
      type: String,
      required: !1,
      default: "item-aligned"
    },
    bodyLock: {
      type: Boolean,
      required: !1,
      default: !0
    },
    side: {
      type: null,
      required: !1
    },
    sideOffset: {
      type: Number,
      required: !1
    },
    sideFlip: {
      type: Boolean,
      required: !1
    },
    align: {
      type: null,
      required: !1,
      default: "start"
    },
    alignOffset: {
      type: Number,
      required: !1
    },
    alignFlip: {
      type: Boolean,
      required: !1
    },
    avoidCollisions: {
      type: Boolean,
      required: !1
    },
    collisionBoundary: {
      type: null,
      required: !1
    },
    collisionPadding: {
      type: [Number, Object],
      required: !1
    },
    arrowPadding: {
      type: Number,
      required: !1
    },
    sticky: {
      type: String,
      required: !1
    },
    hideWhenDetached: {
      type: Boolean,
      required: !1
    },
    positionStrategy: {
      type: String,
      required: !1
    },
    updatePositionStrategy: {
      type: String,
      required: !1
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: !1
    },
    prioritizePosition: {
      type: Boolean,
      required: !1
    },
    reference: {
      type: null,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  emits: [
    "closeAutoFocus",
    "escapeKeyDown",
    "pointerDownOutside"
  ],
  setup(e, { emit: t }) {
    const n = e, o = t, r = Xt();
    da(), Uo(n.bodyLock);
    const { CollectionSlot: l, getItems: i } = yt(), u = $();
    Wo(u);
    const { search: s, handleTypeaheadSearch: d } = ca(), c = $(), f = $(), m = $(), v = $(!1), g = $(!1), _ = $(!1);
    function x() {
      f.value && u.value && Vr([f.value, u.value]);
    }
    ce(v, () => {
      x();
    });
    const { onOpenChange: k, triggerPointerDownPosRef: A } = r;
    Me((h) => {
      if (!u.value) return;
      let w = {
        x: 0,
        y: 0
      };
      const P = (R) => {
        w = {
          x: Math.abs(Math.round(R.pageX) - (A.value?.x ?? 0)),
          y: Math.abs(Math.round(R.pageY) - (A.value?.y ?? 0))
        };
      }, E = (R) => {
        R.pointerType !== "touch" && (w.x <= 10 && w.y <= 10 ? R.preventDefault() : u.value?.contains(R.target) || k(!1), document.removeEventListener("pointermove", P), A.value = null);
      };
      A.value !== null && (document.addEventListener("pointermove", P), document.addEventListener("pointerup", E, {
        capture: !0,
        once: !0
      })), h(() => {
        document.removeEventListener("pointermove", P), document.removeEventListener("pointerup", E, { capture: !0 });
      });
    });
    function I(h) {
      const w = h.ctrlKey || h.altKey || h.metaKey;
      if (h.key === "Tab" && h.preventDefault(), !w && h.key.length === 1 && d(h.key, i()), [
        "ArrowUp",
        "ArrowDown",
        "Home",
        "End"
      ].includes(h.key)) {
        let E = [...i().map((R) => R.ref)];
        if (["ArrowUp", "End"].includes(h.key) && (E = E.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(h.key)) {
          const R = h.target, V = E.indexOf(R);
          E = E.slice(V + 1);
        }
        setTimeout(() => Vr(E)), h.preventDefault();
      }
    }
    const C = T(() => n.position === "popper" ? n : {}), B = we(C.value);
    return Mi({
      content: u,
      viewport: c,
      onViewportChange: (h) => {
        c.value = h;
      },
      itemRefCallback: (h, w, P) => {
        const E = !g.value && !P, R = eo(r.modelValue.value, w, r.by);
        if (r.multiple.value) {
          if (_.value) return;
          (R || E) && (f.value = h, R && (_.value = !0));
        } else (R || E) && (f.value = h);
        E && (g.value = !0);
      },
      selectedItem: f,
      selectedItemText: m,
      onItemLeave: () => {
        u.value?.focus();
      },
      itemTextRefCallback: (h, w, P) => {
        const E = !g.value && !P;
        (eo(r.modelValue.value, w, r.by) || E) && (m.value = h);
      },
      focusSelectedItem: x,
      position: n.position,
      isPositioned: v,
      searchRef: s
    }), (h, w) => (b(), S(a(l), null, {
      default: p(() => [y(a(Go), {
        "as-child": "",
        onMountAutoFocus: w[6] || (w[6] = Pe(() => {
        }, ["prevent"])),
        onUnmountAutoFocus: w[7] || (w[7] = (P) => {
          o("closeAutoFocus", P), !P.defaultPrevented && (a(r).triggerElement.value?.focus({ preventScroll: !0 }), P.preventDefault());
        })
      }, {
        default: p(() => [y(a(io), {
          "as-child": "",
          "disable-outside-pointer-events": "",
          onFocusOutside: w[2] || (w[2] = Pe(() => {
          }, ["prevent"])),
          onDismiss: w[3] || (w[3] = (P) => a(r).onOpenChange(!1)),
          onEscapeKeyDown: w[4] || (w[4] = (P) => o("escapeKeyDown", P)),
          onPointerDownOutside: w[5] || (w[5] = (P) => o("pointerDownOutside", P))
        }, {
          default: p(() => [(b(), S(oo(h.position === "popper" ? Dm : Bm), M({
            ...h.$attrs,
            ...a(B)
          }, {
            id: a(r).contentId,
            ref: (P) => {
              const E = a(et)(P);
              E?.hasAttribute("data-reka-popper-content-wrapper") ? u.value = E.firstElementChild : u.value = E;
            },
            role: "listbox",
            "data-state": a(r).open.value ? "open" : "closed",
            dir: a(r).dir.value,
            style: {
              display: "flex",
              flexDirection: "column",
              outline: "none"
            },
            onContextmenu: w[0] || (w[0] = Pe(() => {
            }, ["prevent"])),
            onPlaced: w[1] || (w[1] = (P) => v.value = !0),
            onKeydown: I
          }), {
            default: p(() => [D(h.$slots, "default")]),
            _: 3
          }, 16, [
            "id",
            "data-state",
            "dir",
            "onKeydown"
          ]))]),
          _: 3
        })]),
        _: 3
      })]),
      _: 3
    }));
  }
}), Am = Pm;
const [xa, Im] = ye("SelectItemAlignedPosition");
var Tm = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "SelectItemAlignedPosition",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  emits: ["placed"],
  setup(e, { emit: t }) {
    const n = e, o = t, { getItems: r } = yt(), l = Xt(), i = fn(), u = $(!1), s = $(!0), d = $(), { forwardRef: c, currentElement: f } = Y(), { viewport: m, selectedItem: v, selectedItemText: g, focusSelectedItem: _ } = i;
    function x() {
      if (l.triggerElement.value && l.valueElement.value && d.value && f.value && m?.value && v?.value && g?.value) {
        const I = l.triggerElement.value.getBoundingClientRect(), C = f.value.getBoundingClientRect(), B = l.valueElement.value.getBoundingClientRect(), h = g.value.getBoundingClientRect();
        if (l.dir.value !== "rtl") {
          const pe = h.left - C.left, ct = B.left - pe, lt = I.left - ct, it = I.width + lt, Jt = Math.max(it, C.width), Ft = window.innerWidth - pt, or = Rr(ct, pt, Math.max(pt, Ft - Jt));
          d.value.style.minWidth = `${it}px`, d.value.style.left = `${or}px`;
        } else {
          const pe = C.right - h.right, ct = window.innerWidth - B.right - pe, lt = window.innerWidth - I.right - ct, it = I.width + lt, Jt = Math.max(it, C.width), Ft = window.innerWidth - pt, or = Rr(ct, pt, Math.max(pt, Ft - Jt));
          d.value.style.minWidth = `${it}px`, d.value.style.right = `${or}px`;
        }
        const w = r().map((pe) => pe.ref), P = window.innerHeight - pt * 2, E = m.value.scrollHeight, R = window.getComputedStyle(f.value), V = Number.parseInt(R.borderTopWidth, 10), z = Number.parseInt(R.paddingTop, 10), oe = Number.parseInt(R.borderBottomWidth, 10), ne = Number.parseInt(R.paddingBottom, 10), ie = V + z + E + ne + oe, re = Math.min(v.value.offsetHeight * 5, ie), G = window.getComputedStyle(m.value), q = Number.parseInt(G.paddingTop, 10), L = Number.parseInt(G.paddingBottom, 10), j = I.top + I.height / 2 - pt, fe = P - j, $e = v.value.offsetHeight / 2, qe = v.value.offsetTop + $e, Re = V + z + qe, pn = ie - Re;
        if (Re <= j) {
          const pe = v.value === w[w.length - 1];
          d.value.style.bottom = "0px";
          const ct = f.value.clientHeight - m.value.offsetTop - m.value.offsetHeight, lt = Math.max(fe, $e + (pe ? L : 0) + ct + oe), it = Re + lt;
          d.value.style.height = `${it}px`;
        } else {
          const pe = v.value === w[0];
          d.value.style.top = "0px";
          const lt = Math.max(j, V + m.value.offsetTop + (pe ? q : 0) + $e) + pn;
          d.value.style.height = `${lt}px`, m.value.scrollTop = Re - j + m.value.offsetTop;
        }
        d.value.style.margin = `${pt}px 0`, d.value.style.minHeight = `${re}px`, d.value.style.maxHeight = `${P}px`, o("placed"), requestAnimationFrame(() => u.value = !0);
      }
    }
    const k = $("");
    Ae(async () => {
      await be(), x(), f.value && (k.value = window.getComputedStyle(f.value).zIndex);
    });
    function A(I) {
      I && s.value === !0 && (x(), _?.(), s.value = !1);
    }
    return Du(l.triggerElement, () => {
      x();
    }), Im({
      contentWrapper: d,
      shouldExpandOnScrollRef: u,
      onScrollButtonChange: A
    }), (I, C) => (b(), K("div", {
      ref_key: "contentWrapperElement",
      ref: d,
      style: kt({
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        zIndex: k.value
      })
    }, [y(a(J), M({
      ref: a(c),
      style: {
        boxSizing: "border-box",
        maxHeight: "100%"
      }
    }, {
      ...I.$attrs,
      ...n
    }), {
      default: p(() => [D(I.$slots, "default")]),
      _: 3
    }, 16)], 4));
  }
}), Bm = Tm, $m = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "SelectProvider",
  props: { context: {
    type: Object,
    required: !0
  } },
  setup(e) {
    return Ri(e.context), Mi(km), (n, o) => D(n.$slots, "default");
  }
}), Rm = $m;
const Mm = { key: 1 };
var Nm = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "SelectContent",
  props: {
    forceMount: {
      type: Boolean,
      required: !1
    },
    position: {
      type: String,
      required: !1
    },
    bodyLock: {
      type: Boolean,
      required: !1
    },
    side: {
      type: null,
      required: !1
    },
    sideOffset: {
      type: Number,
      required: !1
    },
    sideFlip: {
      type: Boolean,
      required: !1
    },
    align: {
      type: null,
      required: !1
    },
    alignOffset: {
      type: Number,
      required: !1
    },
    alignFlip: {
      type: Boolean,
      required: !1
    },
    avoidCollisions: {
      type: Boolean,
      required: !1
    },
    collisionBoundary: {
      type: null,
      required: !1
    },
    collisionPadding: {
      type: [Number, Object],
      required: !1
    },
    arrowPadding: {
      type: Number,
      required: !1
    },
    sticky: {
      type: String,
      required: !1
    },
    hideWhenDetached: {
      type: Boolean,
      required: !1
    },
    positionStrategy: {
      type: String,
      required: !1
    },
    updatePositionStrategy: {
      type: String,
      required: !1
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: !1
    },
    prioritizePosition: {
      type: Boolean,
      required: !1
    },
    reference: {
      type: null,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  emits: [
    "closeAutoFocus",
    "escapeKeyDown",
    "pointerDownOutside"
  ],
  setup(e, { emit: t }) {
    const n = e, r = ge(n, t), l = Xt(), i = $();
    Ae(() => {
      i.value = new DocumentFragment();
    });
    const u = $(), s = T(() => n.forceMount || l.open.value), d = $(s.value);
    return ce(s, () => {
      setTimeout(() => d.value = s.value);
    }), (c, f) => s.value || d.value || u.value?.present ? (b(), S(a(Yt), {
      key: 0,
      ref_key: "presenceRef",
      ref: u,
      present: s.value
    }, {
      default: p(() => [y(Am, Oe(Be({
        ...a(r),
        ...c.$attrs
      })), {
        default: p(() => [D(c.$slots, "default")]),
        _: 3
      }, 16)]),
      _: 3
    }, 8, ["present"])) : i.value ? (b(), K("div", Mm, [(b(), S(Al, { to: i.value }, [y(Rm, { context: a(l) }, {
      default: p(() => [D(c.$slots, "default")]),
      _: 3
    }, 8, ["context"])], 8, ["to"]))])) : ee("v-if", !0);
  }
}), Fm = Nm;
const [Vm, Lm] = ye("SelectGroup");
var zm = /* @__PURE__ */ O({
  __name: "SelectGroup",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const t = e, n = dt(void 0, "reka-select-group");
    return Lm({ id: n }), (o, r) => (b(), S(a(J), M({ role: "group" }, t, { "aria-labelledby": a(n) }), {
      default: p(() => [D(o.$slots, "default")]),
      _: 3
    }, 16, ["aria-labelledby"]));
  }
}), jm = zm, Um = /* @__PURE__ */ O({
  __name: "SelectIcon",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "span"
    }
  },
  setup(e) {
    return (t, n) => (b(), S(a(J), {
      "aria-hidden": "true",
      as: t.as,
      "as-child": t.asChild
    }, {
      default: p(() => [D(t.$slots, "default", {}, () => [n[0] || (n[0] = H("▼"))])]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), Wm = Um;
const [Ni, Gm] = ye("SelectItem");
var Hm = /* @__PURE__ */ O({
  __name: "SelectItem",
  props: {
    value: {
      type: null,
      required: !0
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    textValue: {
      type: String,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, o = t, { disabled: r } = Ee(n), l = Xt(), i = fn(), { forwardRef: u, currentElement: s } = Y(), { CollectionItem: d } = yt(), c = T(() => eo(l.modelValue?.value, n.value, l.by)), f = $(!1), m = $(n.textValue ?? ""), v = dt(void 0, "reka-select-item-text"), g = "select.select";
    async function _(C) {
      if (C.defaultPrevented) return;
      const B = {
        originalEvent: C,
        value: n.value
      };
      jo(g, x, B);
    }
    async function x(C) {
      await be(), o("select", C), !C.defaultPrevented && (r.value || (l.onValueChange(n.value), l.multiple.value || l.onOpenChange(!1)));
    }
    async function k(C) {
      await be(), !C.defaultPrevented && (r.value ? i.onItemLeave?.() : C.currentTarget?.focus({ preventScroll: !0 }));
    }
    async function A(C) {
      await be(), !C.defaultPrevented && C.currentTarget === Le() && i.onItemLeave?.();
    }
    async function I(C) {
      await be(), !(C.defaultPrevented || i.searchRef?.value !== "" && C.key === " ") && (_m.includes(C.key) && _(C), C.key === " " && C.preventDefault());
    }
    if (n.value === "") throw new Error("A <SelectItem /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
    return Ae(() => {
      s.value && i.itemRefCallback(s.value, n.value, n.disabled);
    }), Gm({
      value: n.value,
      disabled: r,
      textId: v,
      isSelected: c,
      onItemTextChange: (C) => {
        m.value = ((m.value || C?.textContent) ?? "").trim();
      }
    }), (C, B) => (b(), S(a(d), { value: { textValue: m.value } }, {
      default: p(() => [y(a(J), {
        ref: a(u),
        role: "option",
        "aria-labelledby": a(v),
        "data-highlighted": f.value ? "" : void 0,
        "aria-selected": c.value,
        "data-state": c.value ? "checked" : "unchecked",
        "aria-disabled": a(r) || void 0,
        "data-disabled": a(r) ? "" : void 0,
        tabindex: a(r) ? void 0 : -1,
        as: C.as,
        "as-child": C.asChild,
        onFocus: B[0] || (B[0] = (h) => f.value = !0),
        onBlur: B[1] || (B[1] = (h) => f.value = !1),
        onPointerup: _,
        onPointerdown: B[2] || (B[2] = (h) => {
          h.currentTarget.focus({ preventScroll: !0 });
        }),
        onTouchend: B[3] || (B[3] = Pe(() => {
        }, ["prevent", "stop"])),
        onPointermove: k,
        onPointerleave: A,
        onKeydown: I
      }, {
        default: p(() => [D(C.$slots, "default")]),
        _: 3
      }, 8, [
        "aria-labelledby",
        "data-highlighted",
        "aria-selected",
        "data-state",
        "aria-disabled",
        "data-disabled",
        "tabindex",
        "as",
        "as-child"
      ])]),
      _: 3
    }, 8, ["value"]));
  }
}), Km = Hm, Ym = /* @__PURE__ */ O({
  __name: "SelectItemIndicator",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "span"
    }
  },
  setup(e) {
    const t = e, n = Ni();
    return (o, r) => a(n).isSelected.value ? (b(), S(a(J), M({
      key: 0,
      "aria-hidden": "true"
    }, t), {
      default: p(() => [D(o.$slots, "default")]),
      _: 3
    }, 16)) : ee("v-if", !0);
  }
}), Xm = Ym, Jm = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "SelectItemText",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "span"
    }
  },
  setup(e) {
    const t = e, n = Xt(), o = fn(), r = Ni(), { forwardRef: l, currentElement: i } = Y(), u = T(() => ({
      value: r.value,
      disabled: r.disabled.value,
      textContent: i.value?.textContent ?? r.value?.toString() ?? ""
    }));
    return Ae(() => {
      i.value && (r.onItemTextChange(i.value), o.itemTextRefCallback(i.value, r.value, r.disabled.value), n.onOptionAdd(u.value));
    }), to(() => {
      n.onOptionRemove(u.value);
    }), (s, d) => (b(), S(a(J), M({
      id: a(r).textId,
      ref: a(l)
    }, {
      ...t,
      ...s.$attrs
    }), {
      default: p(() => [D(s.$slots, "default")]),
      _: 3
    }, 16, ["id"]));
  }
}), Fi = Jm, Zm = /* @__PURE__ */ O({
  __name: "SelectLabel",
  props: {
    for: {
      type: String,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "div"
    }
  },
  setup(e) {
    const t = e, n = Vm({ id: "" });
    return (o, r) => (b(), S(a(J), M(t, { id: a(n).id }), {
      default: p(() => [D(o.$slots, "default")]),
      _: 3
    }, 16, ["id"]));
  }
}), Qm = Zm, ev = /* @__PURE__ */ O({
  __name: "SelectPortal",
  props: {
    to: {
      type: null,
      required: !1
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    defer: {
      type: Boolean,
      required: !1
    },
    forceMount: {
      type: Boolean,
      required: !1
    }
  },
  setup(e) {
    const t = e;
    return (n, o) => (b(), S(a(so), Oe(Be(t)), {
      default: p(() => [D(n.$slots, "default")]),
      _: 3
    }, 16));
  }
}), tv = ev, nv = /* @__PURE__ */ O({
  __name: "SelectScrollButtonImpl",
  emits: ["autoScroll"],
  setup(e, { emit: t }) {
    const n = t, { getItems: o } = yt(), r = fn(), l = $(null);
    function i() {
      l.value !== null && (window.clearInterval(l.value), l.value = null);
    }
    Me(() => {
      o().map((c) => c.ref).find((c) => c === Le())?.scrollIntoView({ block: "nearest" });
    });
    function u() {
      l.value === null && (l.value = window.setInterval(() => {
        n("autoScroll");
      }, 50));
    }
    function s() {
      r.onItemLeave?.(), l.value === null && (l.value = window.setInterval(() => {
        n("autoScroll");
      }, 50));
    }
    return Dl(() => i()), (d, c) => (b(), S(a(J), M({
      "aria-hidden": "true",
      style: { flexShrink: 0 }
    }, d.$parent?.$props, {
      onPointerdown: u,
      onPointermove: s,
      onPointerleave: c[0] || (c[0] = () => {
        i();
      })
    }), {
      default: p(() => [D(d.$slots, "default")]),
      _: 3
    }, 16));
  }
}), Vi = nv, ov = /* @__PURE__ */ O({
  __name: "SelectScrollDownButton",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const t = fn(), n = t.position === "item-aligned" ? xa() : void 0, { forwardRef: o, currentElement: r } = Y(), l = $(!1);
    return Me((i) => {
      if (t.viewport?.value && t.isPositioned?.value) {
        let s = function() {
          const d = u.scrollHeight - u.clientHeight;
          l.value = Math.ceil(u.scrollTop) < d;
        };
        const u = t.viewport.value;
        s(), u.addEventListener("scroll", s), i(() => u.removeEventListener("scroll", s));
      }
    }), ce(r, () => {
      r.value && n?.onScrollButtonChange(r.value);
    }), (i, u) => l.value ? (b(), S(Vi, {
      key: 0,
      ref: a(o),
      onAutoScroll: u[0] || (u[0] = () => {
        const { viewport: s, selectedItem: d } = a(t);
        s?.value && d?.value && (s.value.scrollTop = s.value.scrollTop + d.value.offsetHeight);
      })
    }, {
      default: p(() => [D(i.$slots, "default")]),
      _: 3
    }, 512)) : ee("v-if", !0);
  }
}), rv = ov, av = /* @__PURE__ */ O({
  __name: "SelectScrollUpButton",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const t = fn(), n = t.position === "item-aligned" ? xa() : void 0, { forwardRef: o, currentElement: r } = Y(), l = $(!1);
    return Me((i) => {
      if (t.viewport?.value && t.isPositioned?.value) {
        let s = function() {
          l.value = u.scrollTop > 0;
        };
        const u = t.viewport.value;
        s(), u.addEventListener("scroll", s), i(() => u.removeEventListener("scroll", s));
      }
    }), ce(r, () => {
      r.value && n?.onScrollButtonChange(r.value);
    }), (i, u) => l.value ? (b(), S(Vi, {
      key: 0,
      ref: a(o),
      onAutoScroll: u[0] || (u[0] = () => {
        const { viewport: s, selectedItem: d } = a(t);
        s?.value && d?.value && (s.value.scrollTop = s.value.scrollTop - d.value.offsetHeight);
      })
    }, {
      default: p(() => [D(i.$slots, "default")]),
      _: 3
    }, 512)) : ee("v-if", !0);
  }
}), lv = av, iv = /* @__PURE__ */ O({
  __name: "SelectTrigger",
  props: {
    disabled: {
      type: Boolean,
      required: !1
    },
    reference: {
      type: null,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "button"
    }
  },
  setup(e) {
    const t = e, n = Xt(), { forwardRef: o, currentElement: r } = Y(), l = T(() => n.disabled?.value || t.disabled);
    n.contentId ||= dt(void 0, "reka-select-content"), Ae(() => {
      n.onTriggerChange(r.value);
    });
    const { getItems: i } = yt(), { search: u, handleTypeaheadSearch: s, resetTypeahead: d } = ca();
    function c() {
      l.value || (n.onOpenChange(!0), d());
    }
    function f(m) {
      c(), n.triggerPointerDownPosRef.value = {
        x: Math.round(m.pageX),
        y: Math.round(m.pageY)
      };
    }
    return (m, v) => (b(), S(a(Ko), {
      "as-child": "",
      reference: m.reference
    }, {
      default: p(() => [y(a(J), {
        ref: a(o),
        role: "combobox",
        type: m.as === "button" ? "button" : void 0,
        "aria-controls": a(n).contentId,
        "aria-expanded": a(n).open.value || !1,
        "aria-required": a(n).required?.value,
        "aria-autocomplete": "none",
        disabled: l.value,
        dir: a(n)?.dir.value,
        "data-state": a(n)?.open.value ? "open" : "closed",
        "data-disabled": l.value ? "" : void 0,
        "data-placeholder": a(wm)(a(n).modelValue?.value) ? "" : void 0,
        "as-child": m.asChild,
        as: m.as,
        onClick: v[0] || (v[0] = (g) => {
          g?.currentTarget?.focus();
        }),
        onPointerdown: v[1] || (v[1] = (g) => {
          if (g.pointerType === "touch") return g.preventDefault();
          const _ = g.target;
          _.hasPointerCapture(g.pointerId) && _.releasePointerCapture(g.pointerId), g.button === 0 && g.ctrlKey === !1 && (f(g), g.preventDefault());
        }),
        onPointerup: v[2] || (v[2] = Pe((g) => {
          g.pointerType === "touch" && f(g);
        }, ["prevent"])),
        onKeydown: v[3] || (v[3] = (g) => {
          const _ = a(u) !== "";
          !(g.ctrlKey || g.altKey || g.metaKey) && g.key.length === 1 && _ && g.key === " " || (a(s)(g.key, a(i)()), a(bm).includes(g.key) && (c(), g.preventDefault()));
        })
      }, {
        default: p(() => [D(m.$slots, "default")]),
        _: 3
      }, 8, [
        "type",
        "aria-controls",
        "aria-expanded",
        "aria-required",
        "disabled",
        "dir",
        "data-state",
        "data-disabled",
        "data-placeholder",
        "as-child",
        "as"
      ])]),
      _: 3
    }, 8, ["reference"]));
  }
}), sv = iv, uv = /* @__PURE__ */ O({
  __name: "SelectValue",
  props: {
    placeholder: {
      type: String,
      required: !1,
      default: ""
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "span"
    }
  },
  setup(e) {
    const t = e, { forwardRef: n, currentElement: o } = Y(), r = Xt();
    Ae(() => {
      r.valueElement = o;
    });
    const l = T(() => {
      let u = [];
      const s = Array.from(r.optionsSet.value), d = (c) => s.find((f) => eo(c, f.value, r.by));
      return Array.isArray(r.modelValue.value) ? u = r.modelValue.value.map((c) => d(c)?.textContent ?? "") : u = [d(r.modelValue.value)?.textContent ?? ""], u.filter(Boolean);
    }), i = T(() => l.value.length ? l.value.join(", ") : t.placeholder);
    return (u, s) => (b(), S(a(J), {
      ref: a(n),
      as: u.as,
      "as-child": u.asChild,
      style: { pointerEvents: "none" },
      "data-placeholder": l.value.length ? void 0 : t.placeholder
    }, {
      default: p(() => [D(u.$slots, "default", {
        selectedLabel: l.value,
        modelValue: a(r).modelValue.value
      }, () => [H(We(i.value), 1)])]),
      _: 3
    }, 8, [
      "as",
      "as-child",
      "data-placeholder"
    ]));
  }
}), dv = uv, cv = /* @__PURE__ */ O({
  __name: "SelectViewport",
  props: {
    nonce: {
      type: String,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const t = e, { nonce: n } = Ee(t), o = Sf(n), r = fn(), l = r.position === "item-aligned" ? xa() : void 0, { forwardRef: i, currentElement: u } = Y();
    Ae(() => {
      r?.onViewportChange(u.value);
    });
    const s = $(0);
    function d(c) {
      const f = c.currentTarget, { shouldExpandOnScrollRef: m, contentWrapper: v } = l ?? {};
      if (m?.value && v?.value) {
        const g = Math.abs(s.value - f.scrollTop);
        if (g > 0) {
          const _ = window.innerHeight - pt * 2, x = Number.parseFloat(v.value.style.minHeight), k = Number.parseFloat(v.value.style.height), A = Math.max(x, k);
          if (A < _) {
            const I = A + g, C = Math.min(_, I), B = I - C;
            v.value.style.height = `${C}px`, v.value.style.bottom === "0px" && (f.scrollTop = B > 0 ? B : 0, v.value.style.justifyContent = "flex-end");
          }
        }
      }
      s.value = f.scrollTop;
    }
    return (c, f) => (b(), K(me, null, [y(a(J), M({
      ref: a(i),
      "data-reka-select-viewport": "",
      role: "presentation"
    }, {
      ...c.$attrs,
      ...t
    }, {
      style: {
        position: "relative",
        flex: 1,
        overflow: "hidden auto"
      },
      onScroll: d
    }), {
      default: p(() => [D(c.$slots, "default")]),
      _: 3
    }, 16), y(a(J), {
      as: "style",
      nonce: a(o)
    }, {
      default: p(() => f[0] || (f[0] = [H(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-reka-select-viewport] { scrollbar-width:none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-reka-select-viewport]::-webkit-scrollbar { display: none; } ")])),
      _: 1,
      __: [0]
    }, 8, ["nonce"])], 64));
  }
}), fv = cv, pv = /* @__PURE__ */ O({
  __name: "BaseSeparator",
  props: {
    orientation: {
      type: String,
      required: !1,
      default: "horizontal"
    },
    decorative: {
      type: Boolean,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const t = e, n = ["horizontal", "vertical"];
    function o(u) {
      return n.includes(u);
    }
    const r = T(() => o(t.orientation) ? t.orientation : "horizontal"), l = T(() => r.value === "vertical" ? t.orientation : void 0), i = T(() => t.decorative ? { role: "none" } : {
      "aria-orientation": l.value,
      role: "separator"
    });
    return (u, s) => (b(), S(a(J), M({
      as: u.as,
      "as-child": u.asChild,
      "data-orientation": r.value
    }, i.value), {
      default: p(() => [D(u.$slots, "default")]),
      _: 3
    }, 16, [
      "as",
      "as-child",
      "data-orientation"
    ]));
  }
}), mv = pv, vv = /* @__PURE__ */ O({
  __name: "Separator",
  props: {
    orientation: {
      type: String,
      required: !1,
      default: "horizontal"
    },
    decorative: {
      type: Boolean,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const t = e;
    return (n, o) => (b(), S(mv, Oe(Be(t)), {
      default: p(() => [D(n.$slots, "default")]),
      _: 3
    }, 16));
  }
}), gv = vv;
const [yv, hv] = ye("SwitchRoot");
var bv = /* @__PURE__ */ O({
  __name: "SwitchRoot",
  props: {
    defaultValue: {
      type: Boolean,
      required: !1
    },
    modelValue: {
      type: [Boolean, null],
      required: !1,
      default: void 0
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    id: {
      type: String,
      required: !1
    },
    value: {
      type: String,
      required: !1,
      default: "on"
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "button"
    },
    name: {
      type: String,
      required: !1
    },
    required: {
      type: Boolean,
      required: !1
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = t, { disabled: r } = Ee(n), l = tt(n, "modelValue", o, {
      defaultValue: n.defaultValue,
      passive: n.modelValue === void 0
    });
    function i() {
      r.value || (l.value = !l.value);
    }
    const { forwardRef: u, currentElement: s } = Y(), d = Tn(s), c = T(() => n.id && s.value ? document.querySelector(`[for="${n.id}"]`)?.innerText : void 0);
    return hv({
      modelValue: l,
      toggleCheck: i,
      disabled: r
    }), (f, m) => (b(), S(a(J), M(f.$attrs, {
      id: f.id,
      ref: a(u),
      role: "switch",
      type: f.as === "button" ? "button" : void 0,
      value: f.value,
      "aria-label": f.$attrs["aria-label"] || c.value,
      "aria-checked": a(l),
      "aria-required": f.required,
      "data-state": a(l) ? "checked" : "unchecked",
      "data-disabled": a(r) ? "" : void 0,
      "as-child": f.asChild,
      as: f.as,
      disabled: a(r),
      onClick: i,
      onKeydown: ut(Pe(i, ["prevent"]), ["enter"])
    }), {
      default: p(() => [D(f.$slots, "default", { modelValue: a(l) }), a(d) && f.name ? (b(), S(a(uo), {
        key: 0,
        type: "checkbox",
        name: f.name,
        disabled: a(r),
        required: f.required,
        value: f.value,
        checked: !!a(l)
      }, null, 8, [
        "name",
        "disabled",
        "required",
        "value",
        "checked"
      ])) : ee("v-if", !0)]),
      _: 3
    }, 16, [
      "id",
      "type",
      "value",
      "aria-label",
      "aria-checked",
      "aria-required",
      "data-state",
      "data-disabled",
      "as-child",
      "as",
      "disabled",
      "onKeydown"
    ]));
  }
}), _v = bv, wv = /* @__PURE__ */ O({
  __name: "SwitchThumb",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "span"
    }
  },
  setup(e) {
    const t = yv();
    return Y(), (n, o) => (b(), S(a(J), {
      "data-state": a(t).modelValue?.value ? "checked" : "unchecked",
      "data-disabled": a(t).disabled.value ? "" : void 0,
      "as-child": n.asChild,
      as: n.as
    }, {
      default: p(() => [D(n.$slots, "default")]),
      _: 3
    }, 8, [
      "data-state",
      "data-disabled",
      "as-child",
      "as"
    ]));
  }
}), xv = wv;
const [Ca, Cv] = ye("TagsInputRoot");
var Sv = /* @__PURE__ */ O({
  __name: "TagsInputRoot",
  props: {
    modelValue: {
      type: [Array, null],
      required: !1
    },
    defaultValue: {
      type: Array,
      required: !1,
      default: () => []
    },
    addOnPaste: {
      type: Boolean,
      required: !1
    },
    addOnTab: {
      type: Boolean,
      required: !1
    },
    addOnBlur: {
      type: Boolean,
      required: !1
    },
    duplicate: {
      type: Boolean,
      required: !1
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    delimiter: {
      type: null,
      required: !1,
      default: ","
    },
    dir: {
      type: String,
      required: !1
    },
    max: {
      type: Number,
      required: !1,
      default: 0
    },
    id: {
      type: String,
      required: !1
    },
    convertValue: {
      type: Function,
      required: !1
    },
    displayValue: {
      type: Function,
      required: !1,
      default: (e) => e.toString()
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    },
    name: {
      type: String,
      required: !1
    },
    required: {
      type: Boolean,
      required: !1
    }
  },
  emits: [
    "update:modelValue",
    "invalid",
    "addTag",
    "removeTag"
  ],
  setup(e, { emit: t }) {
    const n = e, o = t, { addOnPaste: r, disabled: l, delimiter: i, max: u, id: s, dir: d, addOnBlur: c, addOnTab: f } = Ee(n), m = An(d), v = tt(n, "modelValue", o, {
      defaultValue: n.defaultValue,
      passive: !0,
      deep: !0
    }), { forwardRef: g, currentElement: _ } = Y(), { focused: x } = Iu(_), k = Tn(_), { getItems: A, CollectionSlot: I } = yt({ isProvider: !0 }), C = $(), B = $(!1), h = T(() => Array.isArray(v.value) ? [...v.value] : []);
    function w(P) {
      if (P !== -1) {
        const E = A().filter((R) => R.ref.dataset.disabled !== "");
        v.value = v.value.filter((R, V) => V !== P), o("removeTag", E[P].value);
      }
    }
    return Cv({
      modelValue: v,
      onAddValue: (P) => {
        const E = [...h.value], R = E.length > 0 && typeof E[0] == "object", V = E.length > 0 && typeof n.defaultValue[0] == "object";
        if ((R || V) && typeof n.convertValue != "function") throw new Error("You must provide a `convertValue` function when using objects as values.");
        const z = n.convertValue ? n.convertValue(P) : P;
        if (E.length >= u.value && u.value)
          return o("invalid", z), !1;
        if (n.duplicate)
          return v.value = [...E, z], o("addTag", z), !0;
        if (E.includes(z))
          B.value = !0;
        else return v.value = [...E, z], o("addTag", z), !0;
        return o("invalid", z), !1;
      },
      onRemoveValue: w,
      onInputKeydown: (P) => {
        const E = P.target, R = A().map((z) => z.ref).filter((z) => z.dataset.disabled !== "");
        if (!R.length) return;
        const V = R.at(-1);
        switch (P.key) {
          case "Delete":
          case "Backspace": {
            if (E.selectionStart !== 0 || E.selectionEnd !== 0) break;
            if (C.value) {
              const z = R.findIndex((oe) => oe === C.value);
              w(z), C.value = C.value === V ? R.at(z - 1) : R.at(z + 1), P.preventDefault();
            } else P.key === "Backspace" && (C.value = V, P.preventDefault());
            break;
          }
          case "Home":
          case "End":
          case "ArrowRight":
          case "ArrowLeft": {
            const z = P.key === "ArrowRight" && m.value === "ltr" || P.key === "ArrowLeft" && m.value === "rtl", oe = !z;
            if (E.selectionStart !== 0 || E.selectionEnd !== 0) break;
            if (oe && !C.value)
              C.value = V, P.preventDefault();
            else if (z && V && C.value === V)
              C.value = void 0, P.preventDefault();
            else if (C.value) {
              const ne = Yl(P, C.value, void 0, {
                itemsArray: R,
                loop: !1,
                dir: m.value
              });
              ne && (C.value = ne), P.preventDefault();
            }
            break;
          }
          case "ArrowUp":
          case "ArrowDown": {
            C.value && P.preventDefault();
            break;
          }
          default:
            C.value = void 0;
        }
      },
      selectedElement: C,
      isInvalidInput: B,
      addOnPaste: r,
      addOnBlur: c,
      addOnTab: f,
      dir: m,
      disabled: l,
      delimiter: i,
      max: u,
      id: s,
      displayValue: n.displayValue
    }), (P, E) => (b(), S(a(I), null, {
      default: p(() => [y(a(J), {
        ref: a(g),
        dir: a(m),
        as: P.as,
        "as-child": P.asChild,
        "data-invalid": B.value ? "" : void 0,
        "data-disabled": a(l) ? "" : void 0,
        "data-focused": a(x) ? "" : void 0
      }, {
        default: p(() => [D(P.$slots, "default", { modelValue: a(v) }), a(k) && P.name ? (b(), S(a(uo), {
          key: 0,
          name: P.name,
          value: a(v),
          required: P.required,
          disabled: a(l)
        }, null, 8, [
          "name",
          "value",
          "required",
          "disabled"
        ])) : ee("v-if", !0)]),
        _: 3
      }, 8, [
        "dir",
        "as",
        "as-child",
        "data-invalid",
        "data-disabled",
        "data-focused"
      ])]),
      _: 3
    }));
  }
}), Ev = Sv, Ov = /* @__PURE__ */ O({
  __name: "TagsInputInput",
  props: {
    placeholder: {
      type: String,
      required: !1
    },
    autoFocus: {
      type: Boolean,
      required: !1
    },
    maxLength: {
      type: Number,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "input"
    }
  },
  setup(e) {
    const t = e, n = Ca(), { forwardRef: o, currentElement: r } = Y();
    function l(v) {
      if (n.selectedElement.value = void 0, !n.addOnBlur.value) return;
      const g = v.target;
      if (!g.value) return;
      n.onAddValue(g.value) && (g.value = "");
    }
    function i(v) {
      n.addOnTab.value && c(v);
    }
    const u = $(!1);
    function s() {
      u.value = !0;
    }
    function d() {
      be(() => {
        u.value = !1;
      });
    }
    async function c(v) {
      if (u.value || (await be(), v.defaultPrevented)) return;
      const g = v.target;
      if (!g.value) return;
      n.onAddValue(g.value) && (g.value = ""), v.preventDefault();
    }
    function f(v) {
      if (n.isInvalidInput.value = !1, v.data === null) return;
      const g = n.delimiter.value;
      if (g === v.data || g instanceof RegExp && g.test(v.data)) {
        const x = v.target;
        if (x.value = x.value.replace(g, ""), x.value.trim() === "") {
          x.value = "";
          return;
        }
        n.onAddValue(x.value) && (x.value = "");
      }
    }
    function m(v) {
      if (n.addOnPaste.value) {
        v.preventDefault();
        const g = v.clipboardData;
        if (!g) return;
        const _ = g.getData("text");
        n.delimiter.value ? _.split(n.delimiter.value).forEach((k) => {
          n.onAddValue(k);
        }) : n.onAddValue(_);
      }
    }
    return Ae(() => {
      const v = r.value.nodeName === "INPUT" ? r.value : r.value.querySelector("input");
      v && setTimeout(() => {
        t.autoFocus && v?.focus();
      }, 1);
    }), (v, g) => (b(), S(a(J), {
      id: a(n).id?.value,
      ref: a(o),
      type: "text",
      autocomplete: "off",
      autocorrect: "off",
      autocapitalize: "off",
      as: v.as,
      "as-child": v.asChild,
      maxlength: v.maxLength,
      placeholder: v.placeholder,
      disabled: a(n).disabled.value,
      "data-invalid": a(n).isInvalidInput.value ? "" : void 0,
      onInput: f,
      onKeydown: [
        ut(c, ["enter"]),
        ut(i, ["tab"]),
        a(n).onInputKeydown
      ],
      onBlur: l,
      onCompositionstart: s,
      onCompositionend: d,
      onPaste: m
    }, {
      default: p(() => [D(v.$slots, "default")]),
      _: 3
    }, 8, [
      "id",
      "as",
      "as-child",
      "maxlength",
      "placeholder",
      "disabled",
      "data-invalid",
      "onKeydown"
    ]));
  }
}), qv = Ov;
const [Li, Dv] = ye("TagsInputItem");
var kv = /* @__PURE__ */ O({
  __name: "TagsInputItem",
  props: {
    value: {
      type: null,
      required: !0
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const t = e, { value: n } = Ee(t), o = Ca(), { forwardRef: r, currentElement: l } = Y(), { CollectionItem: i } = yt(), u = T(() => o.selectedElement.value === l.value), s = T(() => t.disabled || o.disabled.value), d = Dv({
      value: n,
      isSelected: u,
      disabled: s,
      textId: "",
      displayValue: T(() => o.displayValue(n.value))
    });
    return (c, f) => (b(), S(a(i), { value: a(n) }, {
      default: p(() => [y(a(J), {
        ref: a(r),
        as: c.as,
        "as-child": c.asChild,
        "aria-labelledby": a(d).textId,
        "aria-current": u.value,
        "data-disabled": s.value ? "" : void 0,
        "data-state": u.value ? "active" : "inactive"
      }, {
        default: p(() => [D(c.$slots, "default")]),
        _: 3
      }, 8, [
        "as",
        "as-child",
        "aria-labelledby",
        "aria-current",
        "data-disabled",
        "data-state"
      ])]),
      _: 3
    }, 8, ["value"]));
  }
}), Pv = kv, Av = /* @__PURE__ */ O({
  __name: "TagsInputItemDelete",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "button"
    }
  },
  setup(e) {
    const t = e;
    Y();
    const n = Ca(), o = Li(), r = T(() => o.disabled?.value || n.disabled.value);
    function l() {
      if (r.value) return;
      const i = n.modelValue.value.findIndex((u) => la(u, o.value.value));
      n.onRemoveValue(i);
    }
    return (i, u) => (b(), S(a(J), M({ tabindex: "-1" }, t, {
      "aria-labelledby": a(o).textId,
      "aria-current": a(o).isSelected.value,
      "data-state": a(o).isSelected.value ? "active" : "inactive",
      "data-disabled": r.value ? "" : void 0,
      type: i.as === "button" ? "button" : void 0,
      onClick: l
    }), {
      default: p(() => [D(i.$slots, "default")]),
      _: 3
    }, 16, [
      "aria-labelledby",
      "aria-current",
      "data-state",
      "data-disabled",
      "type"
    ]));
  }
}), Iv = Av, Tv = /* @__PURE__ */ O({
  __name: "TagsInputItemText",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "span"
    }
  },
  setup(e) {
    const t = e, n = Li();
    return Y(), n.textId ||= dt(void 0, "reka-tags-input-item-text"), (o, r) => (b(), S(a(J), M(t, { id: a(n).textId }), {
      default: p(() => [D(o.$slots, "default", {}, () => [H(We(a(n).displayValue.value), 1)])]),
      _: 3
    }, 16, ["id"]));
  }
}), Bv = Tv, $v = /* @__PURE__ */ O({
  __name: "TooltipArrow",
  props: {
    width: {
      type: Number,
      required: !1,
      default: 10
    },
    height: {
      type: Number,
      required: !1,
      default: 5
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "svg"
    }
  },
  setup(e) {
    const t = e;
    return Y(), (n, o) => (b(), S(a(Cf), Oe(Be(t)), {
      default: p(() => [D(n.$slots, "default")]),
      _: 3
    }, 16));
  }
}), Rv = $v;
const [Sa, Mv] = ye("TooltipProvider");
var Nv = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "TooltipProvider",
  props: {
    delayDuration: {
      type: Number,
      required: !1,
      default: 700
    },
    skipDelayDuration: {
      type: Number,
      required: !1,
      default: 300
    },
    disableHoverableContent: {
      type: Boolean,
      required: !1,
      default: !1
    },
    disableClosingTrigger: {
      type: Boolean,
      required: !1
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    ignoreNonKeyboardFocus: {
      type: Boolean,
      required: !1,
      default: !1
    }
  },
  setup(e) {
    const t = e, { delayDuration: n, skipDelayDuration: o, disableHoverableContent: r, disableClosingTrigger: l, ignoreNonKeyboardFocus: i, disabled: u } = Ee(t);
    Y();
    const s = $(!0), d = $(!1), { start: c, stop: f } = ei(() => {
      s.value = !0;
    }, o, { immediate: !1 });
    return Mv({
      isOpenDelayed: s,
      delayDuration: n,
      onOpen() {
        f(), s.value = !1;
      },
      onClose() {
        c();
      },
      isPointerInTransitRef: d,
      disableHoverableContent: r,
      disableClosingTrigger: l,
      disabled: u,
      ignoreNonKeyboardFocus: i
    }), (m, v) => D(m.$slots, "default");
  }
}), Fv = Nv;
const zi = "tooltip.open", [tr, Vv] = ye("TooltipRoot");
var Lv = /* @__PURE__ */ O({
  __name: "TooltipRoot",
  props: {
    defaultOpen: {
      type: Boolean,
      required: !1,
      default: !1
    },
    open: {
      type: Boolean,
      required: !1,
      default: void 0
    },
    delayDuration: {
      type: Number,
      required: !1,
      default: void 0
    },
    disableHoverableContent: {
      type: Boolean,
      required: !1,
      default: void 0
    },
    disableClosingTrigger: {
      type: Boolean,
      required: !1,
      default: void 0
    },
    disabled: {
      type: Boolean,
      required: !1,
      default: void 0
    },
    ignoreNonKeyboardFocus: {
      type: Boolean,
      required: !1,
      default: void 0
    }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, o = t;
    Y();
    const r = Sa(), l = T(() => n.disableHoverableContent ?? r.disableHoverableContent.value), i = T(() => n.disableClosingTrigger ?? r.disableClosingTrigger.value), u = T(() => n.disabled ?? r.disabled.value), s = T(() => n.delayDuration ?? r.delayDuration.value), d = T(() => n.ignoreNonKeyboardFocus ?? r.ignoreNonKeyboardFocus.value), c = tt(n, "open", o, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    });
    ce(c, (I) => {
      r.onClose && (I ? (r.onOpen(), document.dispatchEvent(new CustomEvent(zi))) : r.onClose());
    });
    const f = $(!1), m = $(), v = T(() => c.value ? f.value ? "delayed-open" : "instant-open" : "closed"), { start: g, stop: _ } = ei(() => {
      f.value = !0, c.value = !0;
    }, s, { immediate: !1 });
    function x() {
      _(), f.value = !1, c.value = !0;
    }
    function k() {
      _(), c.value = !1;
    }
    function A() {
      g();
    }
    return Vv({
      contentId: "",
      open: c,
      stateAttribute: v,
      trigger: m,
      onTriggerChange(I) {
        m.value = I;
      },
      onTriggerEnter() {
        r.isOpenDelayed.value ? A() : x();
      },
      onTriggerLeave() {
        l.value ? k() : _();
      },
      onOpen: x,
      onClose: k,
      disableHoverableContent: l,
      disableClosingTrigger: i,
      disabled: u,
      ignoreNonKeyboardFocus: d
    }), (I, C) => (b(), S(a(Ho), null, {
      default: p(() => [D(I.$slots, "default", { open: a(c) })]),
      _: 3
    }));
  }
}), zv = Lv, jv = /* @__PURE__ */ O({
  __name: "TooltipContentImpl",
  props: {
    ariaLabel: {
      type: String,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    },
    side: {
      type: null,
      required: !1,
      default: "top"
    },
    sideOffset: {
      type: Number,
      required: !1,
      default: 0
    },
    align: {
      type: null,
      required: !1,
      default: "center"
    },
    alignOffset: {
      type: Number,
      required: !1
    },
    avoidCollisions: {
      type: Boolean,
      required: !1,
      default: !0
    },
    collisionBoundary: {
      type: null,
      required: !1,
      default: () => []
    },
    collisionPadding: {
      type: [Number, Object],
      required: !1,
      default: 0
    },
    arrowPadding: {
      type: Number,
      required: !1,
      default: 0
    },
    sticky: {
      type: String,
      required: !1,
      default: "partial"
    },
    hideWhenDetached: {
      type: Boolean,
      required: !1,
      default: !1
    },
    positionStrategy: {
      type: String,
      required: !1
    },
    updatePositionStrategy: {
      type: String,
      required: !1
    }
  },
  emits: ["escapeKeyDown", "pointerDownOutside"],
  setup(e, { emit: t }) {
    const n = e, o = t, r = tr(), { forwardRef: l } = Y(), i = fs(), u = T(() => i.default?.({})), s = T(() => {
      if (n.ariaLabel) return n.ariaLabel;
      let c = "";
      function f(m) {
        typeof m.children == "string" && m.type !== Pl ? c += m.children : Array.isArray(m.children) && m.children.forEach((v) => f(v));
      }
      return u.value?.forEach((m) => f(m)), c;
    }), d = T(() => {
      const { ariaLabel: c, ...f } = n;
      return f;
    });
    return Ae(() => {
      Ge(window, "scroll", (c) => {
        c.target?.contains(r.trigger.value) && r.onClose();
      }), Ge(window, zi, r.onClose);
    }), (c, f) => (b(), S(a(io), {
      "as-child": "",
      "disable-outside-pointer-events": !1,
      onEscapeKeyDown: f[0] || (f[0] = (m) => o("escapeKeyDown", m)),
      onPointerDownOutside: f[1] || (f[1] = (m) => {
        a(r).disableClosingTrigger.value && a(r).trigger.value?.contains(m.target) && m.preventDefault(), o("pointerDownOutside", m);
      }),
      onFocusOutside: f[2] || (f[2] = Pe(() => {
      }, ["prevent"])),
      onDismiss: f[3] || (f[3] = (m) => a(r).onClose())
    }, {
      default: p(() => [y(a(Qo), M({
        ref: a(l),
        "data-state": a(r).stateAttribute.value
      }, {
        ...c.$attrs,
        ...d.value
      }, { style: {
        "--reka-tooltip-content-transform-origin": "var(--reka-popper-transform-origin)",
        "--reka-tooltip-content-available-width": "var(--reka-popper-available-width)",
        "--reka-tooltip-content-available-height": "var(--reka-popper-available-height)",
        "--reka-tooltip-trigger-width": "var(--reka-popper-anchor-width)",
        "--reka-tooltip-trigger-height": "var(--reka-popper-anchor-height)"
      } }), {
        default: p(() => [D(c.$slots, "default"), y(a(fa), {
          id: a(r).contentId,
          role: "tooltip"
        }, {
          default: p(() => [H(We(s.value), 1)]),
          _: 1
        }, 8, ["id"])]),
        _: 3
      }, 16, ["data-state"])]),
      _: 3
    }));
  }
}), ji = jv, Uv = /* @__PURE__ */ O({
  __name: "TooltipContentHoverable",
  props: {
    ariaLabel: {
      type: String,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    },
    side: {
      type: null,
      required: !1
    },
    sideOffset: {
      type: Number,
      required: !1
    },
    align: {
      type: null,
      required: !1
    },
    alignOffset: {
      type: Number,
      required: !1
    },
    avoidCollisions: {
      type: Boolean,
      required: !1
    },
    collisionBoundary: {
      type: null,
      required: !1
    },
    collisionPadding: {
      type: [Number, Object],
      required: !1
    },
    arrowPadding: {
      type: Number,
      required: !1
    },
    sticky: {
      type: String,
      required: !1
    },
    hideWhenDetached: {
      type: Boolean,
      required: !1
    },
    positionStrategy: {
      type: String,
      required: !1
    },
    updatePositionStrategy: {
      type: String,
      required: !1
    }
  },
  setup(e) {
    const n = we(e), { forwardRef: o, currentElement: r } = Y(), { trigger: l, onClose: i } = tr(), u = Sa(), { isPointerInTransit: s, onPointerExit: d } = Mu(l, r);
    return u.isPointerInTransitRef = s, d(() => {
      i();
    }), (c, f) => (b(), S(ji, M({ ref: a(o) }, a(n)), {
      default: p(() => [D(c.$slots, "default")]),
      _: 3
    }, 16));
  }
}), Wv = Uv, Gv = /* @__PURE__ */ O({
  __name: "TooltipContent",
  props: {
    forceMount: {
      type: Boolean,
      required: !1
    },
    ariaLabel: {
      type: String,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    },
    side: {
      type: null,
      required: !1,
      default: "top"
    },
    sideOffset: {
      type: Number,
      required: !1
    },
    align: {
      type: null,
      required: !1
    },
    alignOffset: {
      type: Number,
      required: !1
    },
    avoidCollisions: {
      type: Boolean,
      required: !1
    },
    collisionBoundary: {
      type: null,
      required: !1
    },
    collisionPadding: {
      type: [Number, Object],
      required: !1
    },
    arrowPadding: {
      type: Number,
      required: !1
    },
    sticky: {
      type: String,
      required: !1
    },
    hideWhenDetached: {
      type: Boolean,
      required: !1
    },
    positionStrategy: {
      type: String,
      required: !1
    },
    updatePositionStrategy: {
      type: String,
      required: !1
    }
  },
  emits: ["escapeKeyDown", "pointerDownOutside"],
  setup(e, { emit: t }) {
    const n = e, o = t, r = tr(), l = ge(n, o), { forwardRef: i } = Y();
    return (u, s) => (b(), S(a(Yt), { present: u.forceMount || a(r).open.value }, {
      default: p(() => [(b(), S(oo(a(r).disableHoverableContent.value ? ji : Wv), M({ ref: a(i) }, a(l)), {
        default: p(() => [D(u.$slots, "default")]),
        _: 3
      }, 16))]),
      _: 3
    }, 8, ["present"]));
  }
}), Hv = Gv, Kv = /* @__PURE__ */ O({
  __name: "TooltipPortal",
  props: {
    to: {
      type: null,
      required: !1
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    defer: {
      type: Boolean,
      required: !1
    },
    forceMount: {
      type: Boolean,
      required: !1
    }
  },
  setup(e) {
    const t = e;
    return (n, o) => (b(), S(a(so), Oe(Be(t)), {
      default: p(() => [D(n.$slots, "default")]),
      _: 3
    }, 16));
  }
}), Yv = Kv, Xv = /* @__PURE__ */ O({
  __name: "TooltipTrigger",
  props: {
    reference: {
      type: null,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "button"
    }
  },
  setup(e) {
    const t = e, n = tr(), o = Sa();
    n.contentId ||= dt(void 0, "reka-tooltip-content");
    const { forwardRef: r, currentElement: l } = Y(), i = $(!1), u = $(!1), s = T(() => n.disabled.value ? {} : {
      click: _,
      focus: v,
      pointermove: f,
      pointerleave: m,
      pointerdown: c,
      blur: g
    });
    Ae(() => {
      n.onTriggerChange(l.value);
    });
    function d() {
      setTimeout(() => {
        i.value = !1;
      }, 1);
    }
    function c() {
      n.open && !n.disableClosingTrigger.value && n.onClose(), i.value = !0, document.addEventListener("pointerup", d, { once: !0 });
    }
    function f(x) {
      x.pointerType !== "touch" && !u.value && !o.isPointerInTransitRef.value && (n.onTriggerEnter(), u.value = !0);
    }
    function m() {
      n.onTriggerLeave(), u.value = !1;
    }
    function v(x) {
      i.value || n.ignoreNonKeyboardFocus.value && !x.target.matches?.(":focus-visible") || n.onOpen();
    }
    function g() {
      n.onClose();
    }
    function _() {
      n.disableClosingTrigger.value || n.onClose();
    }
    return (x, k) => (b(), S(a(Ko), {
      "as-child": "",
      reference: x.reference
    }, {
      default: p(() => [y(a(J), M({
        ref: a(r),
        "aria-describedby": a(n).open.value ? a(n).contentId : void 0,
        "data-state": a(n).stateAttribute.value,
        as: x.as,
        "as-child": t.asChild,
        "data-grace-area-trigger": ""
      }, ps(s.value)), {
        default: p(() => [D(x.$slots, "default")]),
        _: 3
      }, 16, [
        "aria-describedby",
        "data-state",
        "as",
        "as-child"
      ])]),
      _: 3
    }, 8, ["reference"]));
  }
}), Jv = Xv;
function Ui(e) {
  var t, n, o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var r = e.length;
    for (t = 0; t < r; t++) e[t] && (n = Ui(e[t])) && (o && (o += " "), o += n);
  } else for (n in e) e[n] && (o && (o += " "), o += n);
  return o;
}
function Wi() {
  for (var e, t, n = 0, o = "", r = arguments.length; n < r; n++) (e = arguments[n]) && (t = Ui(e)) && (o && (o += " "), o += t);
  return o;
}
const Ea = "-", Zv = (e) => {
  const t = eg(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: o
  } = e;
  return {
    getClassGroupId: (i) => {
      const u = i.split(Ea);
      return u[0] === "" && u.length !== 1 && u.shift(), Gi(u, t) || Qv(i);
    },
    getConflictingClassGroupIds: (i, u) => {
      const s = n[i] || [];
      return u && o[i] ? [...s, ...o[i]] : s;
    }
  };
}, Gi = (e, t) => {
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], o = t.nextPart.get(n), r = o ? Gi(e.slice(1), o) : void 0;
  if (r)
    return r;
  if (t.validators.length === 0)
    return;
  const l = e.join(Ea);
  return t.validators.find(({
    validator: i
  }) => i(l))?.classGroupId;
}, sl = /^\[(.+)\]$/, Qv = (e) => {
  if (sl.test(e)) {
    const t = sl.exec(e)[1], n = t?.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, eg = (e) => {
  const {
    theme: t,
    classGroups: n
  } = e, o = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const r in n)
    Yr(n[r], o, r, t);
  return o;
}, Yr = (e, t, n, o) => {
  e.forEach((r) => {
    if (typeof r == "string") {
      const l = r === "" ? t : ul(t, r);
      l.classGroupId = n;
      return;
    }
    if (typeof r == "function") {
      if (tg(r)) {
        Yr(r(o), t, n, o);
        return;
      }
      t.validators.push({
        validator: r,
        classGroupId: n
      });
      return;
    }
    Object.entries(r).forEach(([l, i]) => {
      Yr(i, ul(t, l), n, o);
    });
  });
}, ul = (e, t) => {
  let n = e;
  return t.split(Ea).forEach((o) => {
    n.nextPart.has(o) || n.nextPart.set(o, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(o);
  }), n;
}, tg = (e) => e.isThemeGetter, ng = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, n = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
  const r = (l, i) => {
    n.set(l, i), t++, t > e && (t = 0, o = n, n = /* @__PURE__ */ new Map());
  };
  return {
    get(l) {
      let i = n.get(l);
      if (i !== void 0)
        return i;
      if ((i = o.get(l)) !== void 0)
        return r(l, i), i;
    },
    set(l, i) {
      n.has(l) ? n.set(l, i) : r(l, i);
    }
  };
}, Xr = "!", Jr = ":", og = Jr.length, rg = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: n
  } = e;
  let o = (r) => {
    const l = [];
    let i = 0, u = 0, s = 0, d;
    for (let g = 0; g < r.length; g++) {
      let _ = r[g];
      if (i === 0 && u === 0) {
        if (_ === Jr) {
          l.push(r.slice(s, g)), s = g + og;
          continue;
        }
        if (_ === "/") {
          d = g;
          continue;
        }
      }
      _ === "[" ? i++ : _ === "]" ? i-- : _ === "(" ? u++ : _ === ")" && u--;
    }
    const c = l.length === 0 ? r : r.substring(s), f = ag(c), m = f !== c, v = d && d > s ? d - s : void 0;
    return {
      modifiers: l,
      hasImportantModifier: m,
      baseClassName: f,
      maybePostfixModifierPosition: v
    };
  };
  if (t) {
    const r = t + Jr, l = o;
    o = (i) => i.startsWith(r) ? l(i.substring(r.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: i,
      maybePostfixModifierPosition: void 0
    };
  }
  if (n) {
    const r = o;
    o = (l) => n({
      className: l,
      parseClassName: r
    });
  }
  return o;
}, ag = (e) => e.endsWith(Xr) ? e.substring(0, e.length - 1) : e.startsWith(Xr) ? e.substring(1) : e, lg = (e) => {
  const t = Object.fromEntries(e.orderSensitiveModifiers.map((o) => [o, !0]));
  return (o) => {
    if (o.length <= 1)
      return o;
    const r = [];
    let l = [];
    return o.forEach((i) => {
      i[0] === "[" || t[i] ? (r.push(...l.sort(), i), l = []) : l.push(i);
    }), r.push(...l.sort()), r;
  };
}, ig = (e) => ({
  cache: ng(e.cacheSize),
  parseClassName: rg(e),
  sortModifiers: lg(e),
  ...Zv(e)
}), sg = /\s+/, ug = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: o,
    getConflictingClassGroupIds: r,
    sortModifiers: l
  } = t, i = [], u = e.trim().split(sg);
  let s = "";
  for (let d = u.length - 1; d >= 0; d -= 1) {
    const c = u[d], {
      isExternal: f,
      modifiers: m,
      hasImportantModifier: v,
      baseClassName: g,
      maybePostfixModifierPosition: _
    } = n(c);
    if (f) {
      s = c + (s.length > 0 ? " " + s : s);
      continue;
    }
    let x = !!_, k = o(x ? g.substring(0, _) : g);
    if (!k) {
      if (!x) {
        s = c + (s.length > 0 ? " " + s : s);
        continue;
      }
      if (k = o(g), !k) {
        s = c + (s.length > 0 ? " " + s : s);
        continue;
      }
      x = !1;
    }
    const A = l(m).join(":"), I = v ? A + Xr : A, C = I + k;
    if (i.includes(C))
      continue;
    i.push(C);
    const B = r(k, x);
    for (let h = 0; h < B.length; ++h) {
      const w = B[h];
      i.push(I + w);
    }
    s = c + (s.length > 0 ? " " + s : s);
  }
  return s;
};
function dg() {
  let e = 0, t, n, o = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = Hi(t)) && (o && (o += " "), o += n);
  return o;
}
const Hi = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let o = 0; o < e.length; o++)
    e[o] && (t = Hi(e[o])) && (n && (n += " "), n += t);
  return n;
};
function cg(e, ...t) {
  let n, o, r, l = i;
  function i(s) {
    const d = t.reduce((c, f) => f(c), e());
    return n = ig(d), o = n.cache.get, r = n.cache.set, l = u, u(s);
  }
  function u(s) {
    const d = o(s);
    if (d)
      return d;
    const c = ug(s, n);
    return r(s, c), c;
  }
  return function() {
    return l(dg.apply(null, arguments));
  };
}
const Ie = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, Ki = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Yi = /^\((?:(\w[\w-]*):)?(.+)\)$/i, fg = /^\d+\/\d+$/, pg = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, mg = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, vg = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, gg = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, yg = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, bn = (e) => fg.test(e), ae = (e) => !!e && !Number.isNaN(Number(e)), Vt = (e) => !!e && Number.isInteger(Number(e)), wr = (e) => e.endsWith("%") && ae(e.slice(0, -1)), qt = (e) => pg.test(e), hg = () => !0, bg = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  mg.test(e) && !vg.test(e)
), Xi = () => !1, _g = (e) => gg.test(e), wg = (e) => yg.test(e), xg = (e) => !U(e) && !W(e), Cg = (e) => $n(e, Qi, Xi), U = (e) => Ki.test(e), en = (e) => $n(e, es, bg), xr = (e) => $n(e, Dg, ae), dl = (e) => $n(e, Ji, Xi), Sg = (e) => $n(e, Zi, wg), xo = (e) => $n(e, ts, _g), W = (e) => Yi.test(e), Mn = (e) => Rn(e, es), Eg = (e) => Rn(e, kg), cl = (e) => Rn(e, Ji), Og = (e) => Rn(e, Qi), qg = (e) => Rn(e, Zi), Co = (e) => Rn(e, ts, !0), $n = (e, t, n) => {
  const o = Ki.exec(e);
  return o ? o[1] ? t(o[1]) : n(o[2]) : !1;
}, Rn = (e, t, n = !1) => {
  const o = Yi.exec(e);
  return o ? o[1] ? t(o[1]) : n : !1;
}, Ji = (e) => e === "position" || e === "percentage", Zi = (e) => e === "image" || e === "url", Qi = (e) => e === "length" || e === "size" || e === "bg-size", es = (e) => e === "length", Dg = (e) => e === "number", kg = (e) => e === "family-name", ts = (e) => e === "shadow", Pg = () => {
  const e = Ie("color"), t = Ie("font"), n = Ie("text"), o = Ie("font-weight"), r = Ie("tracking"), l = Ie("leading"), i = Ie("breakpoint"), u = Ie("container"), s = Ie("spacing"), d = Ie("radius"), c = Ie("shadow"), f = Ie("inset-shadow"), m = Ie("text-shadow"), v = Ie("drop-shadow"), g = Ie("blur"), _ = Ie("perspective"), x = Ie("aspect"), k = Ie("ease"), A = Ie("animate"), I = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], C = () => [
    "center",
    "top",
    "bottom",
    "left",
    "right",
    "top-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-top",
    "top-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-top",
    "bottom-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-bottom",
    "bottom-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-bottom"
  ], B = () => [...C(), W, U], h = () => ["auto", "hidden", "clip", "visible", "scroll"], w = () => ["auto", "contain", "none"], P = () => [W, U, s], E = () => [bn, "full", "auto", ...P()], R = () => [Vt, "none", "subgrid", W, U], V = () => ["auto", {
    span: ["full", Vt, W, U]
  }, Vt, W, U], z = () => [Vt, "auto", W, U], oe = () => ["auto", "min", "max", "fr", W, U], ne = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], ie = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], re = () => ["auto", ...P()], G = () => [bn, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...P()], q = () => [e, W, U], L = () => [...C(), cl, dl, {
    position: [W, U]
  }], j = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], fe = () => ["auto", "cover", "contain", Og, Cg, {
    size: [W, U]
  }], $e = () => [wr, Mn, en], qe = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    d,
    W,
    U
  ], Re = () => ["", ae, Mn, en], pn = () => ["solid", "dashed", "dotted", "double"], nr = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], pe = () => [ae, wr, cl, dl], ct = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    g,
    W,
    U
  ], lt = () => ["none", ae, W, U], it = () => ["none", ae, W, U], Jt = () => [ae, W, U], Ft = () => [bn, "full", ...P()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [qt],
      breakpoint: [qt],
      color: [hg],
      container: [qt],
      "drop-shadow": [qt],
      ease: ["in", "out", "in-out"],
      font: [xg],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [qt],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [qt],
      shadow: [qt],
      spacing: ["px", ae],
      text: [qt],
      "text-shadow": [qt],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", bn, U, W, x]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [ae, U, W, u]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": I()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": I()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: B()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: h()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": h()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": h()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: w()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": w()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": w()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: E()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": E()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": E()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: E()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: E()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: E()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: E()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: E()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: E()
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [Vt, "auto", W, U]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [bn, "full", "auto", u, ...P()]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [ae, bn, "auto", "initial", "none", U]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", ae, W, U]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", ae, W, U]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [Vt, "first", "last", "none", W, U]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": R()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: V()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": z()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": z()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": R()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: V()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": z()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": z()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": oe()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": oe()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: P()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": P()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": P()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...ne(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...ie(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...ie()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...ne()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...ie(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...ie(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": ne()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...ie(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...ie()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: P()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: P()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: P()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: P()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: P()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: P()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: P()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: P()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: P()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: re()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: re()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: re()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: re()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: re()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: re()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: re()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: re()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: re()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": P()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": P()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: G()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [u, "screen", ...G()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          u,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...G()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          u,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [i]
          },
          ...G()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...G()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...G()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...G()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", n, Mn, en]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: [o, W, xr]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", wr, U]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Eg, U, t]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: [r, W, U]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [ae, "none", W, xr]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          l,
          ...P()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", W, U]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", W, U]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: q()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: q()
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...pn(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [ae, "from-font", "auto", W, en]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: q()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [ae, "auto", W, U]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: P()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", W, U]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Overflow Wrap
       * @see https://tailwindcss.com/docs/overflow-wrap
       */
      wrap: [{
        wrap: ["break-word", "anywhere", "normal"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", W, U]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: L()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: j()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: fe()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, Vt, W, U],
          radial: ["", W, U],
          conic: [Vt, W, U]
        }, qg, Sg]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: q()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: $e()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: $e()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: $e()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: q()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: q()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: q()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: qe()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": qe()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": qe()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": qe()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": qe()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": qe()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": qe()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": qe()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": qe()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": qe()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": qe()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": qe()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": qe()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": qe()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": qe()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: Re()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": Re()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": Re()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": Re()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": Re()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": Re()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": Re()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": Re()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": Re()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": Re()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": Re()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...pn(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...pn(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: q()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": q()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": q()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": q()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": q()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": q()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": q()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": q()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": q()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: q()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...pn(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [ae, W, U]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", ae, Mn, en]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: q()
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          c,
          Co,
          xo
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: q()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", f, Co, xo]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": q()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: Re()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: q()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [ae, en]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": q()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": Re()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": q()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", m, Co, xo]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": q()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [ae, W, U]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...nr(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": nr()
      }],
      /**
       * Mask Clip
       * @see https://tailwindcss.com/docs/mask-clip
       */
      "mask-clip": [{
        "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
      }, "mask-no-clip"],
      /**
       * Mask Composite
       * @see https://tailwindcss.com/docs/mask-composite
       */
      "mask-composite": [{
        mask: ["add", "subtract", "intersect", "exclude"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image-linear-pos": [{
        "mask-linear": [ae]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": pe()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": pe()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": q()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": q()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": pe()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": pe()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": q()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": q()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": pe()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": pe()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": q()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": q()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": pe()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": pe()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": q()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": q()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": pe()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": pe()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": q()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": q()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": pe()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": pe()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": q()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": q()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": pe()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": pe()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": q()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": q()
      }],
      "mask-image-radial": [{
        "mask-radial": [W, U]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": pe()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": pe()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": q()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": q()
      }],
      "mask-image-radial-shape": [{
        "mask-radial": ["circle", "ellipse"]
      }],
      "mask-image-radial-size": [{
        "mask-radial": [{
          closest: ["side", "corner"],
          farthest: ["side", "corner"]
        }]
      }],
      "mask-image-radial-pos": [{
        "mask-radial-at": C()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [ae]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": pe()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": pe()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": q()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": q()
      }],
      /**
       * Mask Mode
       * @see https://tailwindcss.com/docs/mask-mode
       */
      "mask-mode": [{
        mask: ["alpha", "luminance", "match"]
      }],
      /**
       * Mask Origin
       * @see https://tailwindcss.com/docs/mask-origin
       */
      "mask-origin": [{
        "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
      }],
      /**
       * Mask Position
       * @see https://tailwindcss.com/docs/mask-position
       */
      "mask-position": [{
        mask: L()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: j()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: fe()
      }],
      /**
       * Mask Type
       * @see https://tailwindcss.com/docs/mask-type
       */
      "mask-type": [{
        "mask-type": ["alpha", "luminance"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image": [{
        mask: ["none", W, U]
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          W,
          U
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: ct()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [ae, W, U]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [ae, W, U]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          v,
          Co,
          xo
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": q()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", ae, W, U]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [ae, W, U]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", ae, W, U]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [ae, W, U]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", ae, W, U]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          W,
          U
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": ct()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [ae, W, U]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [ae, W, U]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", ae, W, U]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [ae, W, U]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", ae, W, U]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [ae, W, U]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [ae, W, U]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", ae, W, U]
      }],
      // --------------
      // --- Tables ---
      // --------------
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": P()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": P()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": P()
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", W, U]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [ae, "initial", W, U]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", k, W, U]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [ae, W, U]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", A, W, U]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [_, W, U]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": B()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: lt()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": lt()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": lt()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": lt()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: it()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": it()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": it()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": it()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: Jt()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": Jt()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": Jt()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [W, U, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: B()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: Ft()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": Ft()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": Ft()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": Ft()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: q()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: q()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", W, U]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": P()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": P()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": P()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": P()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": P()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": P()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": P()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": P()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": P()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": P()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": P()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": P()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": P()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": P()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": P()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": P()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": P()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": P()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", W, U]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...q()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [ae, Mn, en, xr]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...q()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    },
    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
  };
}, Ag = /* @__PURE__ */ cg(Pg);
function ue(...e) {
  return Ag(Wi(e));
}
const de = /* @__PURE__ */ O({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = ve(t, "class");
    return (o, r) => (b(), S(a(Lp), M({ "data-slot": "label" }, a(n), {
      class: a(ue)(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        t.class
      )
    }), {
      default: p(() => [
        D(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Dt = /* @__PURE__ */ O({
  __name: "Input",
  props: {
    defaultValue: {},
    modelValue: {},
    class: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, r = /* @__PURE__ */ Ps(n, "modelValue", t, {
      passive: !0,
      defaultValue: n.defaultValue
    });
    return (l, i) => ms((b(), K("input", {
      "onUpdate:modelValue": i[0] || (i[0] = (u) => Ce(r) ? r.value = u : null),
      "data-slot": "input",
      class: Te(a(ue)(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        n.class
      ))
    }, null, 2)), [
      [vs, a(r)]
    ]);
  }
}), Cr = /* @__PURE__ */ O({
  __name: "Popover",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const r = ge(e, t);
    return (l, i) => (b(), S(a(ip), M({ "data-slot": "popover" }, a(r)), {
      default: p(() => [
        D(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Sr = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "PopoverContent",
  props: {
    forceMount: { type: Boolean },
    side: {},
    sideOffset: { default: 4 },
    sideFlip: { type: Boolean },
    align: { default: "center" },
    alignOffset: {},
    alignFlip: { type: Boolean },
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    positionStrategy: {},
    updatePositionStrategy: {},
    disableUpdateOnLayoutShift: { type: Boolean },
    prioritizePosition: { type: Boolean },
    reference: {},
    asChild: { type: Boolean },
    as: {},
    disableOutsidePointerEvents: { type: Boolean },
    class: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, o = t, r = ve(n, "class"), l = ge(r, o);
    return (i, u) => (b(), S(a(gp), null, {
      default: p(() => [
        y(a(mp), M({ "data-slot": "popover-content" }, { ...a(l), ...i.$attrs }, {
          class: a(ue)(
            "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 rounded-md border p-4 shadow-md origin-(--reka-popover-content-transform-origin) outline-hidden",
            n.class
          )
        }), {
          default: p(() => [
            D(i.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Er = /* @__PURE__ */ O({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (b(), S(a(hp), M({ "data-slot": "popover-trigger" }, t), {
      default: p(() => [
        D(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Nn = /* @__PURE__ */ O({
  __name: "Select",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    defaultValue: {},
    modelValue: {},
    by: { type: [String, Function] },
    dir: {},
    multiple: { type: Boolean },
    autocomplete: {},
    disabled: { type: Boolean },
    name: {},
    required: { type: Boolean }
  },
  emits: ["update:modelValue", "update:open"],
  setup(e, { emit: t }) {
    const r = ge(e, t);
    return (l, i) => (b(), S(a(Sm), M({ "data-slot": "select" }, a(r)), {
      default: p(() => [
        D(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Fn = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "SelectContent",
  props: {
    forceMount: { type: Boolean },
    position: { default: "popper" },
    bodyLock: { type: Boolean },
    side: {},
    sideOffset: {},
    sideFlip: { type: Boolean },
    align: {},
    alignOffset: {},
    alignFlip: { type: Boolean },
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    positionStrategy: {},
    updatePositionStrategy: {},
    disableUpdateOnLayoutShift: { type: Boolean },
    prioritizePosition: { type: Boolean },
    reference: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["closeAutoFocus", "escapeKeyDown", "pointerDownOutside"],
  setup(e, { emit: t }) {
    const n = e, o = t, r = ve(n, "class"), l = ge(r, o);
    return (i, u) => (b(), S(a(tv), null, {
      default: p(() => [
        y(a(Fm), M({ "data-slot": "select-content" }, { ...a(l), ...i.$attrs }, {
          class: a(ue)(
            "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--reka-select-content-available-height) min-w-[8rem] overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
            e.position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
            n.class
          )
        }), {
          default: p(() => [
            y(a(Kg)),
            y(a(fv), {
              class: Te(a(ue)("p-1", e.position === "popper" && "h-[var(--reka-select-trigger-height)] w-full min-w-[var(--reka-select-trigger-width)] scroll-my-1"))
            }, {
              default: p(() => [
                D(i.$slots, "default")
              ]),
              _: 3
            }, 8, ["class"]),
            y(a(Hg))
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), tn = /* @__PURE__ */ O({
  __name: "SelectGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (b(), S(a(jm), M({ "data-slot": "select-group" }, t), {
      default: p(() => [
        D(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
/**
 * @license lucide-vue-next v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fl = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Ig = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, n, o) => o ? o.toUpperCase() : n.toLowerCase()
), Tg = (e) => {
  const t = Ig(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, Bg = (...e) => e.filter((t, n, o) => !!t && t.trim() !== "" && o.indexOf(t) === n).join(" ").trim(), pl = (e) => e === "";
/**
 * @license lucide-vue-next v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Vn = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
/**
 * @license lucide-vue-next v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $g = ({
  name: e,
  iconNode: t,
  absoluteStrokeWidth: n,
  "absolute-stroke-width": o,
  strokeWidth: r,
  "stroke-width": l,
  size: i = Vn.width,
  color: u = Vn.stroke,
  ...s
}, { slots: d }) => At(
  "svg",
  {
    ...Vn,
    ...s,
    width: i,
    height: i,
    stroke: u,
    "stroke-width": pl(n) || pl(o) || n === !0 || o === !0 ? Number(r || l || Vn["stroke-width"]) * 24 / Number(i) : r || l || Vn["stroke-width"],
    class: Bg(
      "lucide",
      s.class,
      ...e ? [`lucide-${fl(Tg(e))}-icon`, `lucide-${fl(e)}`] : ["lucide-icon"]
    )
  },
  [...t.map((c) => At(...c)), ...d.default ? [d.default()] : []]
);
/**
 * @license lucide-vue-next v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const je = (e, t) => (n, { slots: o, attrs: r }) => At(
  $g,
  {
    ...r,
    ...n,
    iconNode: t,
    name: e
  },
  o
);
/**
 * @license lucide-vue-next v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rg = je("asterisk", [
  ["path", { d: "M12 6v12", key: "1vza4d" }],
  ["path", { d: "M17.196 9 6.804 15", key: "1ah31z" }],
  ["path", { d: "m6.804 9 10.392 6", key: "1b6pxd" }]
]);
/**
 * @license lucide-vue-next v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ao = je("box", [
  [
    "path",
    {
      d: "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",
      key: "hh9hay"
    }
  ],
  ["path", { d: "m3.3 7 8.7 5 8.7-5", key: "g66t2b" }],
  ["path", { d: "M12 22V12", key: "d0xqtd" }]
]);
/**
 * @license lucide-vue-next v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mg = je("check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-vue-next v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Oa = je("chevron-down", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-vue-next v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ns = je("chevron-right", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-vue-next v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ng = je("chevron-up", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }]
]);
/**
 * @license lucide-vue-next v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fg = je("circle-minus", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M8 12h8", key: "1wcyev" }]
]);
/**
 * @license lucide-vue-next v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Or = je("circle-plus", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M8 12h8", key: "1wcyev" }],
  ["path", { d: "M12 8v8", key: "napkw2" }]
]);
/**
 * @license lucide-vue-next v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vg = je("circle-x", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
]);
/**
 * @license lucide-vue-next v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const os = je("circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
/**
 * @license lucide-vue-next v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lg = je("grip-vertical", [
  ["circle", { cx: "9", cy: "12", r: "1", key: "1vctgf" }],
  ["circle", { cx: "9", cy: "5", r: "1", key: "hp0tcf" }],
  ["circle", { cx: "9", cy: "19", r: "1", key: "fkjjf6" }],
  ["circle", { cx: "15", cy: "12", r: "1", key: "1tmaij" }],
  ["circle", { cx: "15", cy: "5", r: "1", key: "19l28e" }],
  ["circle", { cx: "15", cy: "19", r: "1", key: "f4zoj3" }]
]);
/**
 * @license lucide-vue-next v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zg = je("minus", [["path", { d: "M5 12h14", key: "1ays0h" }]]);
/**
 * @license lucide-vue-next v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rs = je("plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-vue-next v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jg = je("settings", [
  [
    "path",
    {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]);
/**
 * @license lucide-vue-next v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ug = je("trash-2", [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
]);
/**
 * @license lucide-vue-next v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const as = je("x", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]), Wg = { class: "absolute right-2 flex size-3.5 items-center justify-center" }, ht = /* @__PURE__ */ O({
  __name: "SelectItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = ve(t, "class"), o = we(n);
    return (r, l) => (b(), S(a(Km), M({ "data-slot": "select-item" }, a(o), {
      class: a(ue)(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        t.class
      )
    }), {
      default: p(() => [
        F("span", Wg, [
          y(a(Xm), null, {
            default: p(() => [
              y(a(Mg), { class: "size-4" })
            ]),
            _: 1
          })
        ]),
        y(a(Fi), null, {
          default: p(() => [
            D(r.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Gg = /* @__PURE__ */ O({
  __name: "SelectItemText",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (b(), S(a(Fi), M({ "data-slot": "select-item-text" }, t), {
      default: p(() => [
        D(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), So = /* @__PURE__ */ O({
  __name: "SelectLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (b(), S(a(Qm), {
      "data-slot": "select-label",
      class: Te(a(ue)("px-2 py-1.5 text-sm font-medium", t.class))
    }, {
      default: p(() => [
        D(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Hg = /* @__PURE__ */ O({
  __name: "SelectScrollDownButton",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = ve(t, "class"), o = we(n);
    return (r, l) => (b(), S(a(rv), M({ "data-slot": "select-scroll-down-button" }, a(o), {
      class: a(ue)("flex cursor-default items-center justify-center py-1", t.class)
    }), {
      default: p(() => [
        D(r.$slots, "default", {}, () => [
          y(a(Oa), { class: "size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Kg = /* @__PURE__ */ O({
  __name: "SelectScrollUpButton",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = ve(t, "class"), o = we(n);
    return (r, l) => (b(), S(a(lv), M({ "data-slot": "select-scroll-up-button" }, a(o), {
      class: a(ue)("flex cursor-default items-center justify-center py-1", t.class)
    }), {
      default: p(() => [
        D(r.$slots, "default", {}, () => [
          y(a(Ng), { class: "size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ln = /* @__PURE__ */ O({
  __name: "SelectTrigger",
  props: {
    disabled: { type: Boolean },
    reference: {},
    asChild: { type: Boolean },
    as: {},
    class: {},
    size: { default: "default" }
  },
  setup(e) {
    const t = e, n = ve(t, "class", "size"), o = we(n);
    return (r, l) => (b(), S(a(sv), M({
      "data-slot": "select-trigger",
      "data-size": e.size
    }, a(o), {
      class: a(ue)(
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        t.class
      )
    }), {
      default: p(() => [
        D(r.$slots, "default"),
        y(a(Wm), { "as-child": "" }, {
          default: p(() => [
            y(a(Oa), { class: "size-4 opacity-50" })
          ]),
          _: 1
        })
      ]),
      _: 3
    }, 16, ["data-size", "class"]));
  }
}), zn = /* @__PURE__ */ O({
  __name: "SelectValue",
  props: {
    placeholder: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (b(), S(a(dv), M({ "data-slot": "select-value" }, t), {
      default: p(() => [
        D(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ke = /* @__PURE__ */ O({
  __name: "NumberField",
  props: {
    defaultValue: {},
    modelValue: {},
    min: {},
    max: {},
    step: {},
    stepSnapping: { type: Boolean },
    formatOptions: {},
    locale: {},
    disabled: { type: Boolean },
    readonly: { type: Boolean },
    disableWheelChange: { type: Boolean },
    invertWheelChange: { type: Boolean },
    id: {},
    asChild: { type: Boolean },
    as: {},
    name: {},
    required: { type: Boolean },
    class: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = t, r = ve(n, "class"), l = ge(r, o);
    return (i, u) => (b(), S(a(Zp), M(a(l), {
      class: a(ue)("grid gap-1.5", n.class)
    }), {
      default: p(() => [
        D(i.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ye = /* @__PURE__ */ O({
  __name: "NumberFieldContent",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (b(), K("div", {
      class: Te(a(ue)("relative [&>[data-slot=input]]:has-[[data-slot=increment]]:pr-5 [&>[data-slot=input]]:has-[[data-slot=decrement]]:pl-5", t.class))
    }, [
      D(n.$slots, "default")
    ], 2));
  }
}), Xe = /* @__PURE__ */ O({
  __name: "NumberFieldDecrement",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = ve(t, "class"), o = we(n);
    return (r, l) => (b(), S(a(em), M({ "data-slot": "decrement" }, a(o), {
      class: a(ue)("absolute top-1/2 -translate-y-1/2 left-0 p-3 disabled:cursor-not-allowed disabled:opacity-20", t.class)
    }), {
      default: p(() => [
        D(r.$slots, "default", {}, () => [
          y(a(zg), { class: "h-4 w-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Je = /* @__PURE__ */ O({
  __name: "NumberFieldIncrement",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = ve(t, "class"), o = we(n);
    return (r, l) => (b(), S(a(nm), M({ "data-slot": "increment" }, a(o), {
      class: a(ue)("absolute top-1/2 -translate-y-1/2 right-0 disabled:cursor-not-allowed disabled:opacity-20 p-3", t.class)
    }), {
      default: p(() => [
        D(r.$slots, "default", {}, () => [
          y(a(rs), { class: "h-4 w-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ze = /* @__PURE__ */ O({
  __name: "NumberFieldInput",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (b(), S(a(rm), {
      "data-slot": "input",
      class: Te(a(ue)("flex h-9 w-full rounded-md border border-input bg-transparent py-1 text-sm text-center shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", t.class))
    }, null, 8, ["class"]));
  }
}), ml = /* @__PURE__ */ O({
  __name: "TagsInput",
  props: {
    modelValue: {},
    defaultValue: {},
    addOnPaste: { type: Boolean },
    addOnTab: { type: Boolean },
    addOnBlur: { type: Boolean },
    duplicate: { type: Boolean },
    disabled: { type: Boolean },
    delimiter: {},
    dir: {},
    max: {},
    id: {},
    convertValue: { type: Function },
    displayValue: { type: Function },
    asChild: { type: Boolean },
    as: {},
    name: {},
    required: { type: Boolean },
    class: {}
  },
  emits: ["update:modelValue", "invalid", "addTag", "removeTag"],
  setup(e, { emit: t }) {
    const n = e, o = t, r = ve(n, "class"), l = ge(r, o);
    return (i, u) => (b(), S(a(Ev), M(a(l), {
      class: a(ue)("flex flex-wrap gap-2 items-center rounded-md border border-input bg-background px-3 py-1.5 text-sm", n.class)
    }), {
      default: p(() => [
        D(i.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), vl = /* @__PURE__ */ O({
  __name: "TagsInputInput",
  props: {
    placeholder: {},
    autoFocus: { type: Boolean },
    maxLength: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = ve(t, "class"), o = we(n);
    return (r, l) => (b(), S(a(qv), M(a(o), {
      class: a(ue)("text-sm min-h-5 focus:outline-none flex-1 bg-transparent px-1", t.class)
    }), null, 16, ["class"]));
  }
}), gl = /* @__PURE__ */ O({
  __name: "TagsInputItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = ve(t, "class"), o = we(n);
    return (r, l) => (b(), S(a(Pv), M(a(o), {
      class: a(ue)("flex h-5 items-center rounded-md bg-secondary data-[state=active]:ring-ring data-[state=active]:ring-2 data-[state=active]:ring-offset-2 ring-offset-background", t.class)
    }), {
      default: p(() => [
        D(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), yl = /* @__PURE__ */ O({
  __name: "TagsInputItemDelete",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = ve(t, "class"), o = we(n);
    return (r, l) => (b(), S(a(Iv), M(a(o), {
      class: a(ue)("flex rounded bg-transparent mr-1", t.class)
    }), {
      default: p(() => [
        D(r.$slots, "default", {}, () => [
          y(a(as), { class: "w-4 h-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), hl = /* @__PURE__ */ O({
  __name: "TagsInputItemText",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = ve(t, "class"), o = we(n);
    return (r, l) => (b(), S(a(Bv), M(a(o), {
      class: a(ue)("py-0.5 px-2 text-sm rounded bg-transparent", t.class)
    }), null, 16, ["class"]));
  }
}), _n = /* @__PURE__ */ O({
  __name: "Switch",
  props: {
    defaultValue: { type: Boolean },
    modelValue: { type: [Boolean, null] },
    disabled: { type: Boolean },
    id: {},
    value: {},
    asChild: { type: Boolean },
    as: {},
    name: {},
    required: { type: Boolean },
    class: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = t, r = ve(n, "class"), l = ge(r, o);
    return (i, u) => (b(), S(a(_v), M({ "data-slot": "switch" }, a(l), {
      class: a(ue)(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        n.class
      )
    }), {
      default: p(() => [
        y(a(xv), {
          "data-slot": "switch-thumb",
          class: Te(a(ue)("bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0"))
        }, {
          default: p(() => [
            D(i.$slots, "thumb")
          ]),
          _: 3
        }, 8, ["class"])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), bl = /* @__PURE__ */ O({
  __name: "Separator",
  props: {
    orientation: { default: "horizontal" },
    decorative: { type: Boolean, default: !0 },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = ve(t, "class");
    return (o, r) => (b(), S(a(gv), M({ "data-slot": "separator-root" }, a(n), {
      class: a(ue)(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        t.class
      )
    }), null, 16, ["class"]));
  }
}), Yg = /* @__PURE__ */ O({
  __name: "Dialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const r = ge(e, t);
    return (l, i) => (b(), S(a(rd), M({ "data-slot": "dialog" }, a(r)), {
      default: p(() => [
        D(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Xg = /* @__PURE__ */ O({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = ve(t, "class"), o = we(n);
    return (r, l) => (b(), S(a(Rd), M({ "data-slot": "dialog-description" }, a(o), {
      class: a(ue)("text-muted-foreground text-sm", t.class)
    }), {
      default: p(() => [
        D(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Jg = /* @__PURE__ */ O({
  __name: "DialogHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (b(), K("div", {
      "data-slot": "dialog-header",
      class: Te(a(ue)("flex flex-col gap-2 text-center sm:text-left", t.class))
    }, [
      D(n.$slots, "default")
    ], 2));
  }
}), Zg = /* @__PURE__ */ O({
  __name: "DialogScrollContent",
  props: {
    forceMount: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, o = t, r = ve(n, "class"), l = ge(r, o);
    return (i, u) => (b(), S(a(jd), null, {
      default: p(() => [
        y(a(Vd), { class: "fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }, {
          default: p(() => [
            y(a(Bd), M({
              class: a(ue)(
                "relative z-50 grid w-full max-w-lg my-8 gap-4 border border-border bg-background p-6 shadow-lg duration-200 sm:rounded-lg md:w-full",
                n.class
              )
            }, a(l), {
              onPointerDownOutside: u[0] || (u[0] = (s) => {
                const d = s.detail.originalEvent, c = d.target;
                (d.offsetX > c.clientWidth || d.offsetY > c.clientHeight) && s.preventDefault();
              })
            }), {
              default: p(() => [
                D(i.$slots, "default"),
                y(a(ld), { class: "absolute top-4 right-4 p-0.5 transition-colors rounded-md hover:bg-secondary" }, {
                  default: p(() => [
                    y(a(as), { class: "w-4 h-4" }),
                    u[1] || (u[1] = F("span", { class: "sr-only" }, "Close", -1))
                  ]),
                  _: 1
                })
              ]),
              _: 3
            }, 16, ["class"])
          ]),
          _: 3
        })
      ]),
      _: 3
    }));
  }
}), Qg = /* @__PURE__ */ O({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = ve(t, "class"), o = we(n);
    return (r, l) => (b(), S(a(Wd), M({ "data-slot": "dialog-title" }, a(o), {
      class: a(ue)("text-lg leading-none font-semibold", t.class)
    }), {
      default: p(() => [
        D(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ey = /* @__PURE__ */ O({
  __name: "RadioGroup",
  props: {
    modelValue: {},
    defaultValue: {},
    disabled: { type: Boolean },
    orientation: {},
    dir: {},
    loop: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    name: {},
    required: { type: Boolean },
    class: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = t, r = ve(n, "class"), l = ge(r, o);
    return (i, u) => (b(), S(a(fm), M({
      "data-slot": "radio-group",
      class: a(ue)("grid gap-3", n.class)
    }, a(l)), {
      default: p(() => [
        D(i.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), qr = /* @__PURE__ */ O({
  __name: "RadioGroupItem",
  props: {
    id: {},
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    name: {},
    required: { type: Boolean },
    class: {}
  },
  setup(e) {
    const t = e, n = ve(t, "class"), o = we(n);
    return (r, l) => (b(), S(a(gm), M({ "data-slot": "radio-group-item" }, a(o), {
      class: a(ue)(
        "border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        t.class
      )
    }), {
      default: p(() => [
        y(a(hm), {
          "data-slot": "radio-group-indicator",
          class: "relative flex items-center justify-center"
        }, {
          default: p(() => [
            y(a(os), { class: "fill-primary absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2" })
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), ty = { class: "space-y-5" }, ny = { class: "flex items-center gap-2" }, oy = {
  key: 0,
  class: "flex items-center space-x-2"
}, ry = { class: "flex items-center space-x-2" }, ay = { class: "flex items-center space-x-2" }, ly = { class: "space-y-4" }, iy = { class: "flex items-center gap-2" }, sy = { class: "flex items-center space-x-2" }, uy = { class: "flex items-center space-x-2" }, dy = { key: 0 }, cy = { key: 1 }, fy = { class: "w-full space-y-5" }, py = { class: "grid w-full items-center gap-1.5" }, my = ["onClick"], vy = { class: "flex items-center gap-4" }, gy = { class: "grid w-full items-center gap-1.5" }, yy = { class: "grid w-full items-center gap-1.5" }, hy = { class: "grid w-full items-center gap-1.5" }, by = ["onClick"], _y = { class: "flex items-center gap-4" }, wy = {
  key: 2,
  class: "grid w-full items-center gap-1.5"
}, xy = { class: "flex items-center gap-4" }, Cy = { class: "flex items-center space-x-2" }, Sy = { class: "flex items-center gap-4" }, Ey = { class: "grid w-full items-center gap-1.5" }, Oy = { class: "grid w-full items-center gap-1.5" }, qy = ["onClick"], Dy = { class: "flex items-center gap-4" }, ky = {
  key: 6,
  class: "grid w-full items-center gap-1.5"
}, Py = {
  key: 7,
  class: "grid w-full items-center gap-1.5"
}, Ay = {
  key: 8,
  class: "grid w-full items-center gap-1.5"
}, Iy = {
  key: 9,
  class: "flex flex-col gap-2"
}, Ty = { key: 10 }, By = {
  key: 0,
  class: "flex items-center gap-2"
}, $y = { class: "flex items-center gap-2" }, Ry = {
  __name: "SchemaItemConfiguration",
  props: /* @__PURE__ */ Io(/* @__PURE__ */ no({
    parentType: String,
    canChangeType: Boolean
  }, {
    parentType: void 0,
    __skip_parentType: !0,
    canChangeType: !0
  }), {
    modelValue: {
      type: Object,
      required: !0,
      default: () => ({})
    },
    modelModifiers: {},
    open: {
      type: Boolean,
      default: !1
    },
    openModifiers: {},
    isRequired: {
      type: Boolean,
      default: !1
    },
    isRequiredModifiers: {}
  }),
  emits: ["update:modelValue", "update:open", "update:isRequired"],
  setup(e) {
    const t = sn(e, "modelValue"), n = ea(Tl, []), {
      $ref: o,
      type: r,
      isNullable: l,
      isDeprecated: i,
      isEnum: u,
      isConst: s,
      enumValue: d,
      constValue: c,
      isPrimitive: f,
      isComposition: m,
      isReference: v
    } = Kl(t), g = sn(e, "open"), _ = sn(e, "isRequired"), x = [
      "date-time",
      "date",
      "time",
      "duration",
      "email",
      "idn-email",
      "hostname",
      "idn-hostname",
      "ipv4",
      "ipv6",
      "uri",
      "uri-reference",
      "iri",
      "iri-reference",
      "uuid",
      "uri-template",
      "json-pointer",
      "relative-json-pointer",
      "regex",
      "binary",
      "byte",
      "password",
      "char"
    ], k = [
      "int32",
      "int64",
      "long",
      "uint32",
      "uint64",
      "uint",
      "ulong",
      "sint32",
      "sint64",
      "fixed32",
      "fixed64",
      "sfixed32",
      "sfixed64",
      "bignum",
      "fixnum"
    ], A = ["float", "double", "float32", "float64"], I = ["Read/Write", "Read Only", "Write Only"], C = T(() => [
      X.STRING,
      X.INTEGER,
      X.INTEGER
    ].includes(r.value));
    return (B, h) => (b(), S(a(Yg), {
      open: g.value,
      "onUpdate:open": h[38] || (h[38] = (w) => g.value = w)
    }, {
      default: p(() => [
        y(a(Zg), null, {
          default: p(() => [
            y(a(Jg), null, {
              default: p(() => [
                y(a(Qg), null, {
                  default: p(() => [...h[39] || (h[39] = [
                    H("Advanced Settings", -1)
                  ])]),
                  _: 1
                }),
                y(a(Xg), null, {
                  default: p(() => [
                    H(" Configure the advanced settings for the " + We(a(r)) + " type. ", 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            F("div", ty, [
              e.canChangeType ? (b(), S(a(Nn), {
                key: 0,
                modelValue: a(r),
                "onUpdate:modelValue": h[0] || (h[0] = (w) => Ce(r) ? r.value = w : null)
              }, {
                default: p(() => [
                  y(a(Ln), { class: "w-full" }, {
                    default: p(() => [
                      y(a(zn), { placeholder: "Select a type" })
                    ]),
                    _: 1
                  }),
                  y(a(Fn), null, {
                    default: p(() => [
                      y(a(tn), null, {
                        default: p(() => [
                          y(a(So), { class: "text-muted-foreground text-xs" }, {
                            default: p(() => [...h[40] || (h[40] = [
                              H("Reference", -1)
                            ])]),
                            _: 1
                          }),
                          y(a(ht), { value: a(Pt) }, {
                            default: p(() => [
                              y(a(Ao), { class: "text-purple-500" }),
                              h[41] || (h[41] = H(" reference ", -1))
                            ]),
                            _: 1
                          }, 8, ["value"])
                        ]),
                        _: 1
                      }),
                      y(a(tn), null, {
                        default: p(() => [
                          y(a(So), { class: "text-muted-foreground text-xs" }, {
                            default: p(() => [...h[42] || (h[42] = [
                              H("Primitives", -1)
                            ])]),
                            _: 1
                          }),
                          (b(!0), K(me, null, Ve(Object.values(a(X)), (w) => (b(), S(a(ht), {
                            key: w,
                            value: w
                          }, {
                            default: p(() => [
                              H(We(w), 1)
                            ]),
                            _: 2
                          }, 1032, ["value"]))), 128))
                        ]),
                        _: 1
                      }),
                      y(a(tn), null, {
                        default: p(() => [
                          y(a(So), { class: "text-muted-foreground text-xs" }, {
                            default: p(() => [...h[43] || (h[43] = [
                              H("Compositions", -1)
                            ])]),
                            _: 1
                          }),
                          (b(!0), K(me, null, Ve(Object.values(a(Fe)), (w) => (b(), S(a(ht), {
                            key: w,
                            value: w
                          }, {
                            default: p(() => [
                              H(We(w), 1)
                            ]),
                            _: 2
                          }, 1032, ["value"]))), 128))
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["modelValue"])) : ee("", !0),
              F("div", ny, [
                a(f)(e.parentType) ? (b(), K("div", oy, [
                  y(a(_n), {
                    modelValue: _.value,
                    "onUpdate:modelValue": h[1] || (h[1] = (w) => _.value = w),
                    id: "is-required"
                  }, null, 8, ["modelValue"]),
                  y(a(de), { for: "is-required" }, {
                    default: p(() => [...h[44] || (h[44] = [
                      H("Required", -1)
                    ])]),
                    _: 1
                  })
                ])) : ee("", !0),
                F("div", ry, [
                  y(a(_n), {
                    modelValue: a(l),
                    "onUpdate:modelValue": h[2] || (h[2] = (w) => Ce(l) ? l.value = w : null),
                    id: "is-nullable"
                  }, null, 8, ["modelValue"]),
                  y(a(de), { for: "is-nullable" }, {
                    default: p(() => [...h[45] || (h[45] = [
                      H("Nullable", -1)
                    ])]),
                    _: 1
                  })
                ]),
                F("div", ay, [
                  y(a(_n), {
                    modelValue: a(i),
                    "onUpdate:modelValue": h[3] || (h[3] = (w) => Ce(i) ? i.value = w : null),
                    id: "is-deprecated"
                  }, null, 8, ["modelValue"]),
                  y(a(de), { for: "is-deprecated" }, {
                    default: p(() => [...h[46] || (h[46] = [
                      H("Deprecated", -1)
                    ])]),
                    _: 1
                  })
                ])
              ]),
              y(a(bl), { class: "my-2" }),
              C.value ? (b(), K(me, { key: 1 }, [
                F("div", ly, [
                  F("div", iy, [
                    F("div", sy, [
                      y(a(_n), {
                        modelValue: a(u),
                        "onUpdate:modelValue": h[4] || (h[4] = (w) => Ce(u) ? u.value = w : null),
                        id: "is-enum"
                      }, null, 8, ["modelValue"]),
                      y(a(de), { for: "is-enum" }, {
                        default: p(() => [...h[47] || (h[47] = [
                          H("Enum", -1)
                        ])]),
                        _: 1
                      })
                    ]),
                    F("div", uy, [
                      y(a(_n), {
                        modelValue: a(s),
                        "onUpdate:modelValue": h[5] || (h[5] = (w) => Ce(s) ? s.value = w : null),
                        id: "is-const"
                      }, null, 8, ["modelValue"]),
                      y(a(de), { for: "is-const" }, {
                        default: p(() => [...h[48] || (h[48] = [
                          H("Const", -1)
                        ])]),
                        _: 1
                      })
                    ])
                  ]),
                  a(s) ? (b(), K("div", dy, [
                    a(r) === a(X).STRING ? (b(), S(a(Dt), {
                      key: 0,
                      modelValue: a(c),
                      "onUpdate:modelValue": h[6] || (h[6] = (w) => Ce(c) ? c.value = w : null),
                      placeholder: "const value"
                    }, null, 8, ["modelValue"])) : (b(), S(a(Dt), {
                      key: 1,
                      modelValue: a(c),
                      "onUpdate:modelValue": h[7] || (h[7] = (w) => Ce(c) ? c.value = w : null),
                      type: "number",
                      placeholder: "const value"
                    }, null, 8, ["modelValue"]))
                  ])) : ee("", !0),
                  a(u) ? (b(), K("div", cy, [
                    y(a(ml), {
                      modelValue: a(d),
                      "onUpdate:modelValue": h[8] || (h[8] = (w) => Ce(d) ? d.value = w : null),
                      "add-on-tab": !0,
                      "add-on-paste": !0,
                      duplicate: !1
                    }, {
                      default: p(() => [
                        (b(!0), K(me, null, Ve(a(d), (w) => (b(), S(a(gl), {
                          key: w,
                          value: w
                        }, {
                          default: p(() => [
                            y(a(hl)),
                            y(a(yl))
                          ]),
                          _: 1
                        }, 8, ["value"]))), 128)),
                        y(a(vl), { placeholder: "Enum values..." })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ])) : ee("", !0)
                ]),
                y(a(bl), { class: "my-2" })
              ], 64)) : ee("", !0),
              F("div", fy, [
                a(r) === a(X).STRING ? (b(), K(me, { key: 0 }, [
                  y(a(Cr), null, {
                    default: p(() => [
                      y(a(Er), { class: "w-full" }, {
                        default: p(() => [
                          F("div", py, [
                            y(a(de), { for: "format" }, {
                              default: p(() => [...h[49] || (h[49] = [
                                H("Format", -1)
                              ])]),
                              _: 1
                            }),
                            y(a(Dt), {
                              modelValue: t.value.format,
                              "onUpdate:modelValue": h[9] || (h[9] = (w) => t.value.format = w),
                              class: "w-full",
                              id: "format",
                              type: "email",
                              placeholder: "Select format"
                            }, null, 8, ["modelValue"])
                          ])
                        ]),
                        _: 1
                      }),
                      y(a(Sr), {
                        align: "start",
                        class: "max-h-[50dvh] overflow-y-auto p-2"
                      }, {
                        default: p(() => [
                          F("div", null, [
                            (b(), K(me, null, Ve(x, (w) => F("div", {
                              key: w,
                              class: "hover:bg-muted transform-gpu cursor-pointer rounded-md p-2 transition-colors duration-300",
                              onClick: (P) => t.value.format = w
                            }, We(w), 9, my)), 64))
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  F("div", vy, [
                    y(a(Ke), {
                      modelValue: t.value.minLength,
                      "onUpdate:modelValue": h[10] || (h[10] = (w) => t.value.minLength = w),
                      class: "w-1/2",
                      id: "min_length",
                      placeholder: ">= 0",
                      "default-value": 0,
                      min: 0
                    }, {
                      default: p(() => [
                        y(a(de), { for: "min_length" }, {
                          default: p(() => [...h[50] || (h[50] = [
                            H("Min Length", -1)
                          ])]),
                          _: 1
                        }),
                        y(a(Ye), null, {
                          default: p(() => [
                            y(a(Xe)),
                            y(a(Ze)),
                            y(a(Je))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"]),
                    y(a(Ke), {
                      modelValue: t.value.maxLength,
                      "onUpdate:modelValue": h[11] || (h[11] = (w) => t.value.maxLength = w),
                      class: "w-1/2",
                      id: "max_length",
                      placeholder: ">= 0",
                      "default-value": 0,
                      min: 0
                    }, {
                      default: p(() => [
                        y(a(de), { for: "max_length" }, {
                          default: p(() => [...h[51] || (h[51] = [
                            H("Max Length", -1)
                          ])]),
                          _: 1
                        }),
                        y(a(Ye), null, {
                          default: p(() => [
                            y(a(Xe)),
                            y(a(Ze)),
                            y(a(Je))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  F("div", gy, [
                    y(a(de), { for: "default" }, {
                      default: p(() => [...h[52] || (h[52] = [
                        H("Default", -1)
                      ])]),
                      _: 1
                    }),
                    y(a(Dt), {
                      modelValue: t.value.default,
                      "onUpdate:modelValue": h[12] || (h[12] = (w) => t.value.default = w),
                      id: "default",
                      type: "text",
                      placeholder: "Default"
                    }, null, 8, ["modelValue"])
                  ]),
                  F("div", yy, [
                    y(a(de), { for: "pattern" }, {
                      default: p(() => [...h[53] || (h[53] = [
                        H("Pattern", -1)
                      ])]),
                      _: 1
                    }),
                    y(a(Dt), {
                      modelValue: t.value.pattern,
                      "onUpdate:modelValue": h[13] || (h[13] = (w) => t.value.pattern = w),
                      id: "pattern",
                      type: "text",
                      placeholder: "^[A-Za-z0-9-_]+"
                    }, null, 8, ["modelValue"])
                  ])
                ], 64)) : ee("", !0),
                a(r) === a(X).INTEGER ? (b(), K(me, { key: 1 }, [
                  y(a(Cr), null, {
                    default: p(() => [
                      y(a(Er), { class: "w-full" }, {
                        default: p(() => [
                          F("div", hy, [
                            y(a(de), { for: "format" }, {
                              default: p(() => [...h[54] || (h[54] = [
                                H("Format", -1)
                              ])]),
                              _: 1
                            }),
                            y(a(Dt), {
                              modelValue: t.value.format,
                              "onUpdate:modelValue": h[14] || (h[14] = (w) => t.value.format = w),
                              class: "w-full",
                              id: "format",
                              type: "email",
                              placeholder: "Select format"
                            }, null, 8, ["modelValue"])
                          ])
                        ]),
                        _: 1
                      }),
                      y(a(Sr), {
                        align: "start",
                        class: "max-h-[50dvh] overflow-y-auto p-2"
                      }, {
                        default: p(() => [
                          F("div", null, [
                            (b(), K(me, null, Ve(k, (w) => F("div", {
                              key: w,
                              class: "hover:bg-muted transform-gpu cursor-pointer rounded-md p-2 transition-colors duration-300",
                              onClick: (P) => t.value.format = w
                            }, We(w), 9, by)), 64))
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  y(a(Ke), {
                    modelValue: t.value.default,
                    "onUpdate:modelValue": h[15] || (h[15] = (w) => t.value.default = w),
                    id: "default",
                    placeholder: ">= 0",
                    "default-value": 0,
                    min: 0
                  }, {
                    default: p(() => [
                      y(a(de), { for: "default" }, {
                        default: p(() => [...h[55] || (h[55] = [
                          H("Default", -1)
                        ])]),
                        _: 1
                      }),
                      y(a(Ye), null, {
                        default: p(() => [
                          y(a(Xe)),
                          y(a(Ze)),
                          y(a(Je))
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["modelValue"]),
                  F("div", _y, [
                    y(a(Ke), {
                      modelValue: t.value.minimum,
                      "onUpdate:modelValue": h[16] || (h[16] = (w) => t.value.minimum = w),
                      class: "w-1/2",
                      id: "minimum",
                      placeholder: ">= 0",
                      "default-value": 0,
                      min: 0
                    }, {
                      default: p(() => [
                        y(a(de), { for: "minimum" }, {
                          default: p(() => [...h[56] || (h[56] = [
                            H("Minimum", -1)
                          ])]),
                          _: 1
                        }),
                        y(a(Ye), null, {
                          default: p(() => [
                            y(a(Xe)),
                            y(a(Ze)),
                            y(a(Je))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"]),
                    y(a(Ke), {
                      modelValue: t.value.maximum,
                      "onUpdate:modelValue": h[17] || (h[17] = (w) => t.value.maximum = w),
                      class: "w-1/2",
                      id: "maximum",
                      placeholder: ">= 0",
                      "default-value": 0,
                      min: 0
                    }, {
                      default: p(() => [
                        y(a(de), { for: "maximum" }, {
                          default: p(() => [...h[57] || (h[57] = [
                            H("Maximum", -1)
                          ])]),
                          _: 1
                        }),
                        y(a(Ye), null, {
                          default: p(() => [
                            y(a(Xe)),
                            y(a(Ze)),
                            y(a(Je))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  y(a(Ke), {
                    modelValue: t.value.multipleOf,
                    "onUpdate:modelValue": h[18] || (h[18] = (w) => t.value.multipleOf = w),
                    id: "multiple_of",
                    placeholder: ">= 0",
                    "default-value": 0,
                    min: 0
                  }, {
                    default: p(() => [
                      y(a(de), { for: "multiple_of" }, {
                        default: p(() => [...h[58] || (h[58] = [
                          H("Multiple Of", -1)
                        ])]),
                        _: 1
                      }),
                      y(a(Ye), null, {
                        default: p(() => [
                          y(a(Xe)),
                          y(a(Ze)),
                          y(a(Je))
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["modelValue"])
                ], 64)) : ee("", !0),
                a(r) === a(X).BOOLEAN ? (b(), K("div", wy, [
                  y(a(de), { for: "default" }, {
                    default: p(() => [...h[59] || (h[59] = [
                      H("Default", -1)
                    ])]),
                    _: 1
                  }),
                  y(a(Nn), {
                    modelValue: t.value.default,
                    "onUpdate:modelValue": h[19] || (h[19] = (w) => t.value.default = w)
                  }, {
                    default: p(() => [
                      y(a(Ln), { class: "w-full" }, {
                        default: p(() => [
                          y(a(zn), { placeholder: "Default value" })
                        ]),
                        _: 1
                      }),
                      y(a(Fn), null, {
                        default: p(() => [
                          y(a(tn), null, {
                            default: p(() => [
                              y(a(ht), { value: !0 }, {
                                default: p(() => [...h[60] || (h[60] = [
                                  H("True", -1)
                                ])]),
                                _: 1
                              }),
                              y(a(ht), { value: !1 }, {
                                default: p(() => [...h[61] || (h[61] = [
                                  H("False", -1)
                                ])]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["modelValue"])
                ])) : ee("", !0),
                a(r) === a(X).ARRAY ? (b(), K(me, { key: 3 }, [
                  F("div", xy, [
                    y(a(Ke), {
                      modelValue: t.value.minItems,
                      "onUpdate:modelValue": h[20] || (h[20] = (w) => t.value.minItems = w),
                      class: "w-1/2",
                      id: "min_items",
                      placeholder: ">= 0",
                      "default-value": 0,
                      min: 0
                    }, {
                      default: p(() => [
                        y(a(de), { for: "min_items" }, {
                          default: p(() => [...h[62] || (h[62] = [
                            H("Minimum Items", -1)
                          ])]),
                          _: 1
                        }),
                        y(a(Ye), null, {
                          default: p(() => [
                            y(a(Xe)),
                            y(a(Ze)),
                            y(a(Je))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"]),
                    y(a(Ke), {
                      modelValue: t.value.maxItems,
                      "onUpdate:modelValue": h[21] || (h[21] = (w) => t.value.maxItems = w),
                      class: "w-1/2",
                      id: "max_items",
                      placeholder: ">= 0",
                      "default-value": 0,
                      min: 0
                    }, {
                      default: p(() => [
                        y(a(de), { for: "max_items" }, {
                          default: p(() => [...h[63] || (h[63] = [
                            H("Maximum Items", -1)
                          ])]),
                          _: 1
                        }),
                        y(a(Ye), null, {
                          default: p(() => [
                            y(a(Xe)),
                            y(a(Ze)),
                            y(a(Je))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  F("div", Cy, [
                    y(a(_n), { id: "unique_items" }),
                    y(a(de), { for: "unique_items" }, {
                      default: p(() => [...h[64] || (h[64] = [
                        H("Unique Items", -1)
                      ])]),
                      _: 1
                    })
                  ])
                ], 64)) : ee("", !0),
                a(r) === a(X).OBJECT ? (b(), K(me, { key: 4 }, [
                  F("div", Sy, [
                    y(a(Ke), {
                      modelValue: t.value.minProperties,
                      "onUpdate:modelValue": h[22] || (h[22] = (w) => t.value.minProperties = w),
                      class: "w-1/2",
                      id: "min_properties",
                      placeholder: ">= 0",
                      "default-value": 0,
                      min: 0
                    }, {
                      default: p(() => [
                        y(a(de), { for: "min_properties" }, {
                          default: p(() => [...h[65] || (h[65] = [
                            H("Minimum Properties", -1)
                          ])]),
                          _: 1
                        }),
                        y(a(Ye), null, {
                          default: p(() => [
                            y(a(Xe)),
                            y(a(Ze)),
                            y(a(Je))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"]),
                    y(a(Ke), {
                      modelValue: t.value.maxProperties,
                      "onUpdate:modelValue": h[23] || (h[23] = (w) => t.value.maxProperties = w),
                      class: "w-1/2",
                      id: "max_properties",
                      placeholder: ">= 0",
                      "default-value": 0,
                      min: 0
                    }, {
                      default: p(() => [
                        y(a(de), { for: "max_properties" }, {
                          default: p(() => [...h[66] || (h[66] = [
                            H("Maximum Properties", -1)
                          ])]),
                          _: 1
                        }),
                        y(a(Ye), null, {
                          default: p(() => [
                            y(a(Xe)),
                            y(a(Ze)),
                            y(a(Je))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  F("div", Ey, [
                    y(a(de), { for: "additional_properties" }, {
                      default: p(() => [...h[67] || (h[67] = [
                        H("Additional Properties", -1)
                      ])]),
                      _: 1
                    }),
                    y(a(Nn), {
                      modelValue: t.value.additionalProperties,
                      "onUpdate:modelValue": h[24] || (h[24] = (w) => t.value.additionalProperties = w)
                    }, {
                      default: p(() => [
                        y(a(Ln), { class: "w-full" }, {
                          default: p(() => [
                            y(a(zn), {
                              id: "additional_properties",
                              placeholder: "Additional Properties"
                            })
                          ]),
                          _: 1
                        }),
                        y(a(Fn), null, {
                          default: p(() => [
                            y(a(tn), null, {
                              default: p(() => [
                                y(a(ht), { value: "Default" }, {
                                  default: p(() => [...h[68] || (h[68] = [
                                    H("Default", -1)
                                  ])]),
                                  _: 1
                                }),
                                y(a(ht), { value: "Allow" }, {
                                  default: p(() => [...h[69] || (h[69] = [
                                    H("Allow", -1)
                                  ])]),
                                  _: 1
                                }),
                                y(a(ht), { value: "Deny" }, {
                                  default: p(() => [...h[70] || (h[70] = [
                                    H("Deny", -1)
                                  ])]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ])
                ], 64)) : ee("", !0),
                a(r) === a(X).NUMBER ? (b(), K(me, { key: 5 }, [
                  y(a(Cr), null, {
                    default: p(() => [
                      y(a(Er), { class: "w-full" }, {
                        default: p(() => [
                          F("div", Oy, [
                            y(a(de), { for: "format" }, {
                              default: p(() => [...h[71] || (h[71] = [
                                H("Format", -1)
                              ])]),
                              _: 1
                            }),
                            y(a(Dt), {
                              modelValue: t.value.format,
                              "onUpdate:modelValue": h[25] || (h[25] = (w) => t.value.format = w),
                              class: "w-full",
                              id: "format",
                              type: "email",
                              placeholder: "Select format"
                            }, null, 8, ["modelValue"])
                          ])
                        ]),
                        _: 1
                      }),
                      y(a(Sr), {
                        align: "start",
                        class: "max-h-[50dvh] overflow-y-auto p-2"
                      }, {
                        default: p(() => [
                          F("div", null, [
                            (b(), K(me, null, Ve(A, (w) => F("div", {
                              key: w,
                              class: "hover:bg-muted transform-gpu cursor-pointer rounded-md p-2 transition-colors duration-300",
                              onClick: (P) => t.value.format = w
                            }, We(w), 9, qy)), 64))
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  y(a(Ke), {
                    modelValue: t.value.default,
                    "onUpdate:modelValue": h[26] || (h[26] = (w) => t.value.default = w),
                    id: "default",
                    placeholder: ">= 0",
                    "default-value": 0,
                    min: 0
                  }, {
                    default: p(() => [
                      y(a(de), { for: "default" }, {
                        default: p(() => [...h[72] || (h[72] = [
                          H("Default", -1)
                        ])]),
                        _: 1
                      }),
                      y(a(Ye), null, {
                        default: p(() => [
                          y(a(Xe)),
                          y(a(Ze)),
                          y(a(Je))
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["modelValue"]),
                  F("div", Dy, [
                    y(a(Ke), {
                      modelValue: t.value.minimum,
                      "onUpdate:modelValue": h[27] || (h[27] = (w) => t.value.minimum = w),
                      class: "w-1/2",
                      id: "minimum",
                      placeholder: ">= 0",
                      "default-value": 0,
                      min: 0
                    }, {
                      default: p(() => [
                        y(a(de), { for: "minimum" }, {
                          default: p(() => [...h[73] || (h[73] = [
                            H("Minimum", -1)
                          ])]),
                          _: 1
                        }),
                        y(a(Ye), null, {
                          default: p(() => [
                            y(a(Xe)),
                            y(a(Ze)),
                            y(a(Je))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"]),
                    y(a(Ke), {
                      modelValue: t.value.maximum,
                      "onUpdate:modelValue": h[28] || (h[28] = (w) => t.value.maximum = w),
                      class: "w-1/2",
                      id: "maximum",
                      placeholder: ">= 0",
                      "default-value": 0,
                      min: 0
                    }, {
                      default: p(() => [
                        y(a(de), { for: "maximum" }, {
                          default: p(() => [...h[74] || (h[74] = [
                            H("Maximum", -1)
                          ])]),
                          _: 1
                        }),
                        y(a(Ye), null, {
                          default: p(() => [
                            y(a(Xe)),
                            y(a(Ze)),
                            y(a(Je))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  y(a(Ke), {
                    modelValue: t.value.multipleOf,
                    "onUpdate:modelValue": h[29] || (h[29] = (w) => t.value.multipleOf = w),
                    id: "multiple_of",
                    placeholder: ">= 0",
                    "default-value": 0,
                    min: 0
                  }, {
                    default: p(() => [
                      y(a(de), { for: "multiple_of" }, {
                        default: p(() => [...h[75] || (h[75] = [
                          H("Multiple Of", -1)
                        ])]),
                        _: 1
                      }),
                      y(a(Ye), null, {
                        default: p(() => [
                          y(a(Xe)),
                          y(a(Ze)),
                          y(a(Je))
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["modelValue"])
                ], 64)) : ee("", !0),
                a(f)(a(r)) && a(r) !== a(X).NULL ? (b(), K("div", ky, [
                  y(a(de), { for: "behavior" }, {
                    default: p(() => [...h[76] || (h[76] = [
                      H("Behavior", -1)
                    ])]),
                    _: 1
                  }),
                  y(a(Nn), {
                    modelValue: t.value.behavior,
                    "onUpdate:modelValue": h[30] || (h[30] = (w) => t.value.behavior = w)
                  }, {
                    default: p(() => [
                      y(a(Ln), { class: "w-full" }, {
                        default: p(() => [
                          y(a(zn), {
                            id: "behavior",
                            placeholder: "Select a behavior"
                          })
                        ]),
                        _: 1
                      }),
                      y(a(Fn), null, {
                        default: p(() => [
                          y(a(tn), null, {
                            default: p(() => [
                              y(a(So), null, {
                                default: p(() => [...h[77] || (h[77] = [
                                  H("Behaviors", -1)
                                ])]),
                                _: 1
                              }),
                              (b(), K(me, null, Ve(I, (w) => y(a(ht), {
                                key: w,
                                value: w
                              }, {
                                default: p(() => [
                                  H(We(w), 1)
                                ]),
                                _: 2
                              }, 1032, ["value"])), 64))
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["modelValue"])
                ])) : ee("", !0),
                a(r) === a(X).STRING || a(r) === a(X).INTEGER || a(r) === a(X).NUMBER ? (b(), K("div", Py, [
                  y(a(de), { for: "examples" }, {
                    default: p(() => [...h[78] || (h[78] = [
                      H("Examples", -1)
                    ])]),
                    _: 1
                  }),
                  y(a(ml), {
                    modelValue: t.value.examples,
                    "onUpdate:modelValue": h[31] || (h[31] = (w) => t.value.examples = w)
                  }, {
                    default: p(() => [
                      (b(!0), K(me, null, Ve(t.value.examples, (w) => (b(), S(a(gl), {
                        key: w,
                        value: w
                      }, {
                        default: p(() => [
                          y(a(hl)),
                          y(a(yl))
                        ]),
                        _: 1
                      }, 8, ["value"]))), 128)),
                      y(a(vl), { placeholder: "Examples..." })
                    ]),
                    _: 1
                  }, 8, ["modelValue"])
                ])) : ee("", !0),
                a(f)(a(r)) ? (b(), K("div", Ay, [
                  y(a(de), { for: "title" }, {
                    default: p(() => [...h[79] || (h[79] = [
                      H("Title", -1)
                    ])]),
                    _: 1
                  }),
                  y(a(Dt), {
                    modelValue: t.value.title,
                    "onUpdate:modelValue": h[32] || (h[32] = (w) => t.value.title = w),
                    id: "title",
                    type: "text",
                    placeholder: "Title"
                  }, null, 8, ["modelValue"])
                ])) : ee("", !0),
                a(m)(a(r)) ? (b(), K("div", Iy, [
                  h[83] || (h[83] = F("span", null, "Select an option below to combine your schemas", -1)),
                  F("div", null, [
                    y(a(ey), {
                      modelValue: a(r),
                      "onUpdate:modelValue": h[36] || (h[36] = (w) => Ce(r) ? r.value = w : null)
                    }, {
                      default: p(() => [
                        F("div", {
                          class: Te(["flex cursor-pointer items-start gap-2 rounded-md border p-4 transition-colors", [
                            a(r) === a(Fe).ALL_OF && "border-primary"
                          ]]),
                          onClick: h[33] || (h[33] = (w) => r.value = a(Fe).ALL_OF)
                        }, [
                          y(a(qr), {
                            value: a(Fe).ALL_OF
                          }, null, 8, ["value"]),
                          h[80] || (h[80] = F("div", { class: "flex flex-col gap-1" }, [
                            F("p", { class: "text-sm font-bold" }, "AND"),
                            F("span", { class: "text-muted-foreground" }, " allOf, must be valid against all sub-schemas ")
                          ], -1))
                        ], 2),
                        F("div", {
                          class: Te(["flex cursor-pointer items-start gap-2 rounded-md border p-4 transition-colors", [
                            a(r) === a(Fe).ANY_OF && "border-primary"
                          ]]),
                          onClick: h[34] || (h[34] = (w) => r.value = a(Fe).ANY_OF)
                        }, [
                          y(a(qr), {
                            value: a(Fe).ANY_OF
                          }, null, 8, ["value"]),
                          h[81] || (h[81] = F("div", { class: "flex flex-col gap-1" }, [
                            F("p", { class: "text-sm font-bold" }, "OR"),
                            F("span", { class: "text-muted-foreground" }, " anyOf, must be valid against any of the sub-schemas ")
                          ], -1))
                        ], 2),
                        F("div", {
                          class: Te(["flex cursor-pointer items-start gap-2 rounded-md border p-4 transition-colors", [
                            a(r) === a(Fe).ONE_OF && "border-primary"
                          ]]),
                          onClick: h[35] || (h[35] = (w) => r.value = a(Fe).ONE_OF)
                        }, [
                          y(a(qr), {
                            value: a(Fe).ONE_OF
                          }, null, 8, ["value"]),
                          h[82] || (h[82] = F("div", { class: "flex flex-col gap-1" }, [
                            F("p", { class: "text-sm font-bold" }, "XOR"),
                            F("span", { class: "text-muted-foreground" }, " oneOf, must be valid against exactly one of the sub-schemas ")
                          ], -1))
                        ], 2)
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ])
                ])) : ee("", !0),
                a(v)(a(r)) ? (b(), K("div", Ty, [
                  y(a(Nn), {
                    modelValue: a(o),
                    "onUpdate:modelValue": h[37] || (h[37] = (w) => Ce(o) ? o.value = w : null)
                  }, {
                    default: p(() => [
                      y(a(Ln), { class: "w-full" }, {
                        default: p(() => [
                          y(a(zn), { placeholder: "Select a schema reference" }, {
                            default: p(() => [
                              a(o) ? (b(), K("div", By, [
                                y(a(Ao), { class: "text-purple-500" }),
                                H(" " + We(a(o)), 1)
                              ])) : ee("", !0)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      y(a(Fn), null, {
                        default: p(() => [
                          y(a(tn), null, {
                            default: p(() => [
                              (b(!0), K(me, null, Ve(a(n), (w) => (b(), S(a(ht), {
                                key: w,
                                value: w
                              }, {
                                default: p(() => [
                                  F("div", $y, [
                                    y(a(Ao), { class: "text-purple-500" }),
                                    y(a(Gg), null, {
                                      default: p(() => [
                                        H(We(w), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ])
                                ]),
                                _: 2
                              }, 1032, ["value"]))), 128))
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["modelValue"])
                ])) : ee("", !0)
              ])
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["open"]));
  }
}, _l = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, wl = Wi, My = (e, t) => (n) => {
  var o;
  if (t?.variants == null) return wl(e, n?.class, n?.className);
  const { variants: r, defaultVariants: l } = t, i = Object.keys(r).map((d) => {
    const c = n?.[d], f = l?.[d];
    if (c === null) return null;
    const m = _l(c) || _l(f);
    return r[d][m];
  }), u = n && Object.entries(n).reduce((d, c) => {
    let [f, m] = c;
    return m === void 0 || (d[f] = m), d;
  }, {}), s = t == null || (o = t.compoundVariants) === null || o === void 0 ? void 0 : o.reduce((d, c) => {
    let { class: f, className: m, ...v } = c;
    return Object.entries(v).every((g) => {
      let [_, x] = g;
      return Array.isArray(x) ? x.includes({
        ...l,
        ...u
      }[_]) : {
        ...l,
        ...u
      }[_] === x;
    }) ? [
      ...d,
      f,
      m
    ] : d;
  }, []);
  return wl(e, i, s, n?.class, n?.className);
}, Sn = /* @__PURE__ */ O({
  __name: "Button",
  props: {
    variant: {},
    size: {},
    class: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    return (n, o) => (b(), S(a(J), {
      "data-slot": "button",
      as: e.as,
      "as-child": e.asChild,
      class: Te(a(ue)(a(Ny)({ variant: e.variant, size: e.size }), t.class))
    }, {
      default: p(() => [
        D(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), Ny = My(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), xl = /* @__PURE__ */ O({
  __name: "DropdownMenu",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    dir: {},
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const r = ge(e, t);
    return (l, i) => (b(), S(a(wp), M({ "data-slot": "dropdown-menu" }, a(r)), {
      default: p(() => [
        D(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Cl = /* @__PURE__ */ O({
  __name: "DropdownMenuContent",
  props: {
    forceMount: { type: Boolean },
    loop: { type: Boolean },
    side: {},
    sideOffset: { default: 4 },
    sideFlip: { type: Boolean },
    align: {},
    alignOffset: {},
    alignFlip: { type: Boolean },
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    positionStrategy: {},
    updatePositionStrategy: {},
    disableUpdateOnLayoutShift: { type: Boolean },
    prioritizePosition: { type: Boolean },
    reference: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "closeAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, o = t, r = ve(n, "class"), l = ge(r, o);
    return (i, u) => (b(), S(a(Tp), null, {
      default: p(() => [
        y(a(Cp), M({ "data-slot": "dropdown-menu-content" }, a(l), {
          class: a(ue)("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--reka-dropdown-menu-content-available-height) min-w-[8rem] origin-(--reka-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md", n.class)
        }), {
          default: p(() => [
            D(i.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Fy = /* @__PURE__ */ O({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (b(), S(a(Ep), M({ "data-slot": "dropdown-menu-group" }, t), {
      default: p(() => [
        D(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Sl = /* @__PURE__ */ O({
  __name: "DropdownMenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {},
    class: {},
    inset: { type: Boolean },
    variant: { default: "default" }
  },
  setup(e) {
    const t = e, n = ve(t, "inset", "variant", "class"), o = we(n);
    return (r, l) => (b(), S(a(qp), M({
      "data-slot": "dropdown-menu-item",
      "data-inset": e.inset ? "" : void 0,
      "data-variant": e.variant
    }, a(o), {
      class: a(ue)("focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive-foreground data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/40 data-[variant=destructive]:focus:text-destructive-foreground data-[variant=destructive]:*:[svg]:!text-destructive-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", t.class)
    }), {
      default: p(() => [
        D(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-inset", "data-variant", "class"]));
  }
}), Dr = /* @__PURE__ */ O({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {},
    inset: { type: Boolean }
  },
  setup(e) {
    const t = e, n = ve(t, "class", "inset"), o = we(n);
    return (r, l) => (b(), S(a(Ap), M({
      "data-slot": "dropdown-menu-label",
      "data-inset": e.inset ? "" : void 0
    }, a(o), {
      class: a(ue)("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", t.class)
    }), {
      default: p(() => [
        D(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-inset", "class"]));
  }
}), kr = /* @__PURE__ */ O({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const r = ge(e, t);
    return (l, i) => (b(), S(a($p), M({ "data-slot": "dropdown-menu-radio-group" }, a(r)), {
      default: p(() => [
        D(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Vy = { class: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" }, Pr = /* @__PURE__ */ O({
  __name: "DropdownMenuRadioItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, o = t, r = ve(n, "class"), l = ge(r, o);
    return (i, u) => (b(), S(a(Mp), M({ "data-slot": "dropdown-menu-radio-item" }, a(l), {
      class: a(ue)(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        n.class
      )
    }), {
      default: p(() => [
        F("span", Vy, [
          y(a(kp), null, {
            default: p(() => [
              y(a(os), { class: "size-2 fill-current" })
            ]),
            _: 1
          })
        ]),
        D(i.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), El = /* @__PURE__ */ O({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const n = we(e);
    return (o, r) => (b(), S(a(Fp), M({ "data-slot": "dropdown-menu-trigger" }, a(n)), {
      default: p(() => [
        D(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), on = /* @__PURE__ */ O({
  __name: "Tooltip",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    delayDuration: {},
    disableHoverableContent: { type: Boolean },
    disableClosingTrigger: { type: Boolean },
    disabled: { type: Boolean },
    ignoreNonKeyboardFocus: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const r = ge(e, t);
    return (l, i) => (b(), S(a(zv), M({ "data-slot": "tooltip" }, a(r)), {
      default: p(() => [
        D(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), rn = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "TooltipContent",
  props: {
    forceMount: { type: Boolean },
    ariaLabel: {},
    asChild: { type: Boolean },
    as: {},
    side: {},
    sideOffset: { default: 4 },
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    positionStrategy: {},
    updatePositionStrategy: {},
    class: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside"],
  setup(e, { emit: t }) {
    const n = e, o = t, r = ve(n, "class"), l = ge(r, o);
    return (i, u) => (b(), S(a(Yv), null, {
      default: p(() => [
        y(a(Hv), M({ "data-slot": "tooltip-content" }, { ...a(l), ...i.$attrs }, {
          class: a(ue)("bg-primary text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit rounded-md px-3 py-1.5 text-xs text-balance", n.class)
        }), {
          default: p(() => [
            D(i.$slots, "default"),
            y(a(Rv), { class: "bg-primary fill-primary z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), an = /* @__PURE__ */ O({
  __name: "TooltipProvider",
  props: {
    delayDuration: { default: 0 },
    skipDelayDuration: {},
    disableHoverableContent: { type: Boolean },
    disableClosingTrigger: { type: Boolean },
    disabled: { type: Boolean },
    ignoreNonKeyboardFocus: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (b(), S(a(Fv), Oe(Be(t)), {
      default: p(() => [
        D(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ln = /* @__PURE__ */ O({
  __name: "TooltipTrigger",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (b(), S(a(Jv), M({ "data-slot": "tooltip-trigger" }, t), {
      default: p(() => [
        D(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ly = { class: "flex min-w-0 flex-wrap" }, zy = { class: "relative max-w-full shrink-0 grow-0 basis-full" }, jy = { class: "group/schema hover:bg-muted flex h-8 w-full items-center gap-2 rounded border-b leading-6 transition-colors" }, Uy = { class: "flex-2/5 flex h-full" }, Wy = {
  key: 0,
  class: "handle flex h-full shrink-0 grow-0 basis-auto items-center justify-center"
}, Gy = {
  key: 1,
  class: "flex-basis-auto flex h-full shrink-0 grow-0 items-center justify-center"
}, Hy = {
  key: 2,
  class: "flex items-center justify-center rounded px-1.5"
}, Ky = {
  key: 3,
  class: "flex items-center justify-center rounded px-1.5"
}, Yy = ["value", "disabled"], Xy = { class: "flex-1/5 flex h-full items-center gap-1" }, Jy = { class: "flex-2/5 flex h-full min-w-0" }, Zy = ["value"], Qy = {
  key: 0,
  class: "flex h-full shrink-0 grow-0 justify-end"
}, eh = {
  key: 1,
  class: "flex h-full shrink-0 grow-0 items-center justify-end"
}, th = {
  key: 0,
  class: "my-1 flex"
}, Ar = 16, ls = {
  __name: "SchemaItem",
  props: /* @__PURE__ */ Io(/* @__PURE__ */ no({
    level: Number,
    parentType: String,
    useRef: Boolean
  }, {
    level: 0,
    parentType: void 0,
    __skip_parentType: !0,
    useRef: !1
  }), {
    modelValue: {
      type: Object,
      required: !0
    },
    modelModifiers: {},
    fieldName: {
      type: [String, Number],
      default: null,
      required: !0
    },
    fieldNameModifiers: {},
    isRequired: {
      type: Boolean,
      default: !1
    },
    isRequiredModifiers: {}
  }),
  emits: /* @__PURE__ */ Io(["onDelete", "addSibling"], ["update:modelValue", "update:fieldName", "update:isRequired"]),
  setup(e, { emit: t }) {
    const n = gs(() => Promise.resolve().then(() => nh)), o = t, r = sn(e, "modelValue"), l = sn(e, "fieldName"), i = sn(e, "isRequired"), { $ref: u, type: s, isNullable: d, isComposition: c, isReference: f } = Kl(r), m = $(e.level === 0 || e.parentType === X.OBJECT), v = $(null), g = $(!1), _ = $(!1), x = T(() => e.level === 0), k = T(() => [
      X.OBJECT,
      X.ARRAY,
      ...Object.values(Fe)
    ].includes(s.value)), A = T(() => !x.value && e.parentType !== X.ARRAY && !c(e.parentType)), I = T(() => c(e.parentType) ? l.value != 0 : !x.value && e.parentType !== X.ARRAY), C = T(() => {
      const G = k.value ? Math.max(e.level, 1) : e.level + 1, q = Ar * G;
      return !x.value && !A.value ? q + Ar : q;
    }), B = T(() => x.value ? s.value === X.OBJECT || c(s.value) ? "child" : "none" : s.value === X.OBJECT || c(s.value) ? "both" : "sibling"), h = T(() => {
      switch (s.value) {
        case X.ARRAY:
          return "text-red-500";
        case X.STRING:
          return "text-green-500";
        case X.NUMBER:
        case X.INTEGER:
        case Pt:
          return "text-purple-500";
        case X.BOOLEAN:
          return "text-pink-500";
        case X.OBJECT:
          return "text-blue-500";
        case X.NULL:
          return "text-yellow-500";
        case Fe.ALL_OF:
        case Fe.ANY_OF:
        case Fe.ONE_OF:
          return "text-orange-500";
        default:
          return "text-gray-500";
      }
    }), w = T(() => Object.keys(r.value?.properties || {}));
    ce(s, (G) => {
      f(G) && (g.value = !0);
    }), ce(u, () => {
      g.value = !1;
    }), nu(v, w, {
      ...bs,
      onEnd: (G) => {
        const { oldIndex: q, newIndex: L } = G, j = Object.entries(r.value.properties), [fe] = j.splice(q, 1);
        j.splice(L, 0, fe), r.value = {
          ...r.value,
          properties: Object.fromEntries(j)
        };
      }
    });
    function P(G) {
      const q = `${i.value ? "R" : ""}${d.value ? "N" : ""}`;
      return {
        settings: {
          R: 2,
          RN: 3,
          "": 1,
          N: 2
        },
        required: {
          R: 1,
          RN: 1,
          "": 2,
          N: 3
        },
        nullable: {
          R: 3,
          RN: 2,
          "": 3,
          N: 1
        }
      }[G][q] || 1;
    }
    function E(G) {
      r.value = {
        ...r.value,
        description: G.target.value
      };
    }
    function R(G, q) {
      if (!r.value.properties[G] || G === q) return;
      const L = Object.entries(r.value.properties);
      if (L.some(($e) => $e[0] === q))
        return;
      const fe = L.map(
        ([$e, qe]) => $e === G ? [q, qe] : [$e, qe]
      );
      r.value = {
        ...r.value,
        properties: Object.fromEntries(fe)
      };
    }
    function V(G, q) {
      let L = r.value?.required ?? [];
      q ? L.push(G) : L = L.filter((j) => j !== G), r.value = {
        ...r.value,
        required: L
      };
    }
    function z() {
      if (c(s.value)) {
        const G = {
          type: X.OBJECT,
          properties: {}
        };
        r.value[s.value].push(G);
      } else if (s.value === X.OBJECT || e.parentType === X.OBJECT) {
        console.log(r.value), r.value.properties || (r.value = {
          ...r.value,
          properties: {}
        });
        const G = Object.entries(r.value.properties);
        G.push(["", { type: X.STRING }]), r.value = {
          ...r.value,
          properties: Object.fromEntries(G)
        };
      }
    }
    function oe() {
      o("addSibling");
    }
    function ne() {
      _.value ? o("onDelete") : (_.value = !0, setTimeout(() => {
        _.value = !1;
      }, 3e3));
    }
    function ie(G) {
      const L = Object.entries(r.value.properties).filter((j) => j[0] !== G);
      r.value = {
        ...r.value,
        properties: Object.fromEntries(L)
      };
    }
    function re(G) {
      r.value[s.value].splice(G, 1);
    }
    return (G, q) => (b(), K("div", Ly, [
      F("div", zy, [
        F("div", null, [
          F("div", jy, [
            F("div", Uy, [
              F("p", {
                style: kt({ width: `${C.value}px` })
              }, null, 4),
              A.value ? (b(), K("div", Wy, [
                y(a(Lg), { class: "invisible my-auto size-4 cursor-grab text-xl group-hover/schema:visible" })
              ])) : ee("", !0),
              k.value ? (b(), K("div", Gy, [
                y(a(ns), {
                  class: Te(["size-4 transform-gpu transition-transform", [m.value && "rotate-90"]]),
                  onClick: q[0] || (q[0] = (L) => m.value = !m.value)
                }, null, 8, ["class"])
              ])) : ee("", !0),
              x.value ? (b(), K("div", Hy, [...q[12] || (q[12] = [
                F("span", { class: "select-none text-xs font-bold text-purple-500" }, "ROOT", -1)
              ])])) : e.parentType === a(X).ARRAY ? (b(), K("div", Ky, [...q[13] || (q[13] = [
                F("span", { class: "select-none text-xs font-bold text-purple-500" }, "ITEMS", -1)
              ])])) : (b(), K("input", {
                key: 4,
                value: l.value,
                class: Te(["hover:bg-background w-full rounded-md border-none bg-transparent px-2 outline-none hover:border focus:border active:border", [a(c)(e.parentType) && "cursor-not-allowed"]]),
                placeholder: "field name",
                disabled: a(c)(e.parentType),
                onBlur: q[1] || (q[1] = (L) => l.value = L.target.value)
              }, null, 42, Yy))
            ]),
            F("div", Xy, [
              y(a(xl), null, {
                default: p(() => [
                  y(a(El), null, {
                    default: p(() => [
                      F("span", {
                        class: Te(["cursor-pointer font-medium hover:underline", [h.value]])
                      }, We(a(f)(a(s)) && r.value[a(Pt)] ? a(u) : a(s)), 3)
                    ]),
                    _: 1
                  }),
                  y(a(Cl), {
                    side: "right",
                    align: "start",
                    class: "min-w-40"
                  }, {
                    default: p(() => [
                      e.useRef ? (b(), K(me, { key: 0 }, [
                        y(a(Dr), { class: "text-muted-foreground text-xs" }, {
                          default: p(() => [...q[14] || (q[14] = [
                            H(" Reference ", -1)
                          ])]),
                          _: 1
                        }),
                        y(a(kr), {
                          modelValue: a(s),
                          "onUpdate:modelValue": q[2] || (q[2] = (L) => Ce(s) ? s.value = L : null)
                        }, {
                          default: p(() => [
                            y(a(Pr), { value: a(Pt) }, {
                              default: p(() => [
                                y(a(Ao), { class: "text-purple-500" }),
                                q[15] || (q[15] = H(" reference ", -1))
                              ]),
                              _: 1
                            }, 8, ["value"])
                          ]),
                          _: 1
                        }, 8, ["modelValue"])
                      ], 64)) : ee("", !0),
                      y(a(Dr), { class: "text-muted-foreground text-xs" }, {
                        default: p(() => [...q[16] || (q[16] = [
                          H(" Primitives ", -1)
                        ])]),
                        _: 1
                      }),
                      y(a(kr), {
                        modelValue: a(s),
                        "onUpdate:modelValue": q[3] || (q[3] = (L) => Ce(s) ? s.value = L : null)
                      }, {
                        default: p(() => [
                          (b(!0), K(me, null, Ve(Object.values(a(X)), (L, j) => (b(), S(a(Pr), {
                            key: j,
                            value: L
                          }, {
                            default: p(() => [
                              H(We(L), 1)
                            ]),
                            _: 2
                          }, 1032, ["value"]))), 128))
                        ]),
                        _: 1
                      }, 8, ["modelValue"]),
                      y(a(Dr), { class: "text-muted-foreground text-xs" }, {
                        default: p(() => [...q[17] || (q[17] = [
                          H(" Compositions ", -1)
                        ])]),
                        _: 1
                      }),
                      y(a(kr), {
                        modelValue: a(s),
                        "onUpdate:modelValue": q[4] || (q[4] = (L) => Ce(s) ? s.value = L : null)
                      }, {
                        default: p(() => [
                          (b(!0), K(me, null, Ve(Object.values(a(Fe)), (L, j) => (b(), S(a(Pr), {
                            key: j,
                            value: L
                          }, {
                            default: p(() => [
                              H(We(L), 1)
                            ]),
                            _: 2
                          }, 1032, ["value"]))), 128))
                        ]),
                        _: 1
                      }, 8, ["modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              y(a(an), null, {
                default: p(() => [
                  y(a(on), null, {
                    default: p(() => [
                      y(a(ln), { "as-child": "" }, {
                        default: p(() => [
                          F("div", {
                            class: "invisible flex size-5 cursor-pointer items-center justify-center rounded-md p-1 group-hover/schema:visible",
                            style: kt({
                              order: P("settings")
                            }),
                            onClick: q[5] || (q[5] = (L) => g.value = !g.value)
                          }, [
                            y(a(jg))
                          ], 4)
                        ]),
                        _: 1
                      }),
                      y(a(rn), null, {
                        default: p(() => [...q[18] || (q[18] = [
                          F("p", null, "Advanced Settings", -1)
                        ])]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              !x.value && !a(c)(e.parentType) ? (b(), S(a(an), { key: 0 }, {
                default: p(() => [
                  y(a(on), null, {
                    default: p(() => [
                      y(a(ln), { "as-child": "" }, {
                        default: p(() => [
                          F("div", {
                            class: Te(["flex size-5 cursor-pointer items-center justify-center rounded-md p-1", [
                              i.value ? "bg-primary text-accent" : "invisible group-hover/schema:visible"
                            ]]),
                            style: kt({
                              order: P("required")
                            }),
                            onClick: q[6] || (q[6] = (L) => i.value = !i.value)
                          }, [
                            y(a(Rg))
                          ], 6)
                        ]),
                        _: 1
                      }),
                      y(a(rn), null, {
                        default: p(() => [...q[19] || (q[19] = [
                          F("p", null, "Required", -1)
                        ])]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : ee("", !0),
              y(a(an), null, {
                default: p(() => [
                  y(a(on), null, {
                    default: p(() => [
                      y(a(ln), { "as-child": "" }, {
                        default: p(() => [
                          F("div", {
                            class: Te(["flex size-5 items-center justify-center rounded-md p-1", [
                              a(s) === "null" ? "text-danger cursor-not-allowed" : "cursor-pointer",
                              a(d) ? "bg-primary text-accent" : "invisible group-hover/schema:visible"
                            ]]),
                            style: kt({
                              order: P("nullable")
                            }),
                            onClick: q[7] || (q[7] = (L) => d.value = !a(d))
                          }, [...q[20] || (q[20] = [
                            F("span", { class: "text-[.6rem]" }, "N", -1)
                          ])], 6)
                        ]),
                        _: 1
                      }),
                      y(a(rn), null, {
                        default: p(() => [...q[21] || (q[21] = [
                          F("p", null, "Nullable", -1)
                        ])]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            F("div", Jy, [
              F("textarea", {
                value: r.value?.description || "",
                placeholder: "Description",
                class: "hover:bg-background not-focus:truncate z-1! focus:z-1000! focus:min-h-70 !focus:overflow-auto focus:bg-background w-full resize-none rounded-md bg-transparent p-1 outline-none hover:border focus:m-auto focus:overflow-auto focus:wrap-break-word focus:border",
                onInput: E
              }, null, 40, Zy)
            ]),
            e.parentType === a(X).ARRAY ? (b(), K("div", Qy, [
              (b(), K(me, null, Ve(5, (L) => F("div", {
                key: L,
                class: "size-3"
              })), 64))
            ])) : (b(), K("div", eh, [
              B.value === "child" ? (b(), S(a(an), { key: 0 }, {
                default: p(() => [
                  y(a(on), null, {
                    default: p(() => [
                      y(a(ln), { "as-child": "" }, {
                        default: p(() => [
                          y(a(Sn), {
                            size: "icon",
                            variant: "ghost",
                            onClick: z
                          }, {
                            default: p(() => [
                              y(a(Or), { class: "text-green-500" })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      y(a(rn), {
                        side: "left",
                        align: "start"
                      }, {
                        default: p(() => [...q[22] || (q[22] = [
                          H(" Add a Child Node ", -1)
                        ])]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : ee("", !0),
              B.value === "sibling" ? (b(), S(a(an), { key: 1 }, {
                default: p(() => [
                  y(a(on), null, {
                    default: p(() => [
                      y(a(ln), { "as-child": "" }, {
                        default: p(() => [
                          y(a(Sn), {
                            size: "icon",
                            variant: "ghost",
                            onClick: oe
                          }, {
                            default: p(() => [
                              y(a(Or), { class: "text-green-500" })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      y(a(rn), {
                        side: "left",
                        align: "start"
                      }, {
                        default: p(() => [...q[23] || (q[23] = [
                          H(" Add a Sibling Node ", -1)
                        ])]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : ee("", !0),
              B.value === "both" ? (b(), S(a(xl), { key: 2 }, {
                default: p(() => [
                  y(a(El), null, {
                    default: p(() => [
                      y(a(Sn), {
                        size: "icon",
                        variant: "ghost"
                      }, {
                        default: p(() => [
                          y(a(Or), { class: "text-green-500" })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  y(a(Cl), {
                    side: "left",
                    align: "start"
                  }, {
                    default: p(() => [
                      y(a(Fy), null, {
                        default: p(() => [
                          y(a(Sl), { onClick: oe }, {
                            default: p(() => [...q[24] || (q[24] = [
                              H("Add a Sibling Node", -1)
                            ])]),
                            _: 1
                          }),
                          y(a(Sl), { onClick: z }, {
                            default: p(() => [...q[25] || (q[25] = [
                              H("ADd a Child Node", -1)
                            ])]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : ee("", !0),
              y(a(Sn), {
                size: "icon",
                variant: "ghost",
                class: Te(["-ml-3 transition-all duration-300", [
                  !I.value && "invisible",
                  _.value && "text-destructive hover:text-destructive"
                ]]),
                onClick: ne
              }, {
                default: p(() => [
                  (b(), S(oo(_.value ? a(Vg) : a(Fg))))
                ]),
                _: 1
              }, 8, ["class"])
            ]))
          ]),
          m.value ? (b(), K("div", {
            key: 0,
            ref_key: "childrenContainer",
            ref: v
          }, [
            a(s) === a(X).OBJECT ? (b(), K(me, { key: 0 }, [
              (b(!0), K(me, null, Ve(w.value, (L) => (b(), S(a(n), {
                key: L,
                modelValue: r.value.properties[L],
                "onUpdate:modelValue": (j) => r.value.properties[L] = j,
                level: e.level + 1,
                "field-name": L,
                "parent-type": a(s),
                "is-required": r.value?.required?.includes(L),
                "use-ref": e.useRef,
                "onUpdate:fieldName": (j) => R(L, j),
                "onUpdate:isRequired": (j) => V(L, j),
                onAddSibling: z,
                onOnDelete: (j) => ie(L)
              }, null, 8, ["modelValue", "onUpdate:modelValue", "level", "field-name", "parent-type", "is-required", "use-ref", "onUpdate:fieldName", "onUpdate:isRequired", "onOnDelete"]))), 128)),
              w.value.length === 0 ? (b(), K("div", th, [
                F("div", {
                  style: kt({ width: `${C.value + Ar * 2}px` })
                }, null, 4),
                F("div", { class: "space-x-2" }, [
                  q[26] || (q[26] = F("span", { class: "opacity-50" }, "No fields defined", -1)),
                  F("span", {
                    class: "cursor-pointer hover:underline",
                    onClick: z
                  }, " Add ")
                ])
              ])) : ee("", !0)
            ], 64)) : ee("", !0),
            a(s) === a(X).ARRAY ? (b(), S(a(n), {
              key: 1,
              modelValue: r.value.items,
              "onUpdate:modelValue": q[8] || (q[8] = (L) => r.value.items = L),
              level: e.level + 1,
              "parent-type": a(s),
              "use-ref": e.useRef
            }, null, 8, ["modelValue", "level", "parent-type", "use-ref"])) : ee("", !0),
            a(c)(a(s)) ? (b(!0), K(me, { key: 2 }, Ve(r.value[a(s)], (L, j) => (b(), S(a(n), {
              key: j,
              modelValue: r.value[a(s)][j],
              "onUpdate:modelValue": (fe) => r.value[a(s)][j] = fe,
              level: e.level + 1,
              "field-name": j,
              "parent-type": a(s),
              "use-ref": e.useRef,
              onOnDelete: (fe) => re(j)
            }, null, 8, ["modelValue", "onUpdate:modelValue", "level", "field-name", "parent-type", "use-ref", "onOnDelete"]))), 128)) : ee("", !0)
          ], 512)) : ee("", !0)
        ])
      ]),
      y(Ry, {
        modelValue: r.value,
        "onUpdate:modelValue": q[9] || (q[9] = (L) => r.value = L),
        open: g.value,
        "onUpdate:open": q[10] || (q[10] = (L) => g.value = L),
        "is-required": i.value,
        "onUpdate:isRequired": q[11] || (q[11] = (L) => i.value = L),
        "parent-type": e.parentType
      }, null, 8, ["modelValue", "open", "is-required", "parent-type"])
    ]));
  }
}, nh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ls
}, Symbol.toStringTag, { value: "Module" })), oh = { class: "group rounded-xl border" }, rh = { class: "min-h-13 flex items-center justify-between border-b p-2" }, ah = {
  key: 0,
  class: "border-t"
}, lh = {
  key: 0,
  class: "space-y-4 p-2"
}, ih = /* @__PURE__ */ O({
  __name: "Vueson",
  props: /* @__PURE__ */ Io(/* @__PURE__ */ no({
    useDefinitions: Boolean
  }, {
    useDefinitions: !0
  }), {
    modelValue: {
      type: Object,
      default: () => ({
        type: "object",
        properties: {}
      }),
      required: !0
    },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = sn(e, "modelValue"), n = $(!1), o = T(() => Object.keys(t.value?.$defs || {}) || []);
    ta(
      Tl,
      T(() => o.value)
    );
    function r(s, d) {
      const c = d.target.value || s;
      if (c === s) return;
      const f = Object.entries(t.value?.$defs || {});
      if (f.some((g) => g[0] === c))
        return;
      const v = f.map(
        ([g, _]) => g === s ? [c, _] : [g, _]
      );
      t.value = {
        ...t.value,
        $defs: Object.fromEntries(v)
      };
    }
    function l() {
      e.useDefinitions && (n.value = !n.value);
    }
    function i() {
      const s = Object.entries(t.value?.$defs || {});
      s.push(["", { type: X.OBJECT, properties: {} }]), t.value = {
        ...t.value,
        $defs: Object.fromEntries(s)
      };
    }
    function u(s) {
      const d = Object.entries(t.value?.$defs || {});
      d.splice(s, 1), t.value = {
        ...t.value,
        $defs: Object.fromEntries(d)
      };
    }
    return (s, d) => {
      const c = ys("Vueson", !0);
      return b(), K("div", oh, [
        D(s.$slots, "header", {}, () => [
          F("div", rh, [
            D(s.$slots, "title", {}, () => [
              d[1] || (d[1] = F("span", { class: "text-sm font-bold" }, "Vueson", -1))
            ]),
            D(s.$slots, "action")
          ])
        ]),
        F("div", null, [
          y(ls, {
            modelValue: t.value,
            "onUpdate:modelValue": d[0] || (d[0] = (f) => t.value = f),
            "use-ref": !0
          }, null, 8, ["modelValue"])
        ]),
        e.useDefinitions ? (b(), K("div", ah, [
          F("div", {
            class: Te(["hover:bg-accent flex cursor-pointer items-center gap-2 p-2", [n.value ? "" : "rounded-b-md"]]),
            onClick: l
          }, [
            (b(), S(oo(n.value ? a(Oa) : a(ns)), { class: "size-4" })),
            d[2] || (d[2] = F("span", { class: "select-none text-sm" }, "$defs", -1))
          ], 2),
          n.value ? (b(), K("div", lh, [
            (b(!0), K(me, null, Ve(o.value, (f, m) => (b(), K("div", { key: f }, [
              y(c, {
                modelValue: t.value.$defs[f],
                "onUpdate:modelValue": (v) => t.value.$defs[f] = v,
                title: f,
                "use-definitions": !1
              }, {
                title: p(() => [
                  F("div", null, [
                    y(a(Dt), {
                      "model-value": f,
                      placeholder: "Key",
                      onBlur: (v) => r(f, v)
                    }, null, 8, ["model-value", "onBlur"])
                  ])
                ]),
                action: p(() => [
                  y(a(an), null, {
                    default: p(() => [
                      y(a(on), null, {
                        default: p(() => [
                          y(a(ln), { "as-child": "" }, {
                            default: p(() => [
                              y(a(Sn), {
                                size: "icon",
                                variant: "ghost",
                                onClick: (v) => u(m)
                              }, {
                                default: p(() => [
                                  y(a(Ug), { class: "text-destructive-foreground" })
                                ]),
                                _: 1
                              }, 8, ["onClick"])
                            ]),
                            _: 2
                          }, 1024),
                          y(a(rn), null, {
                            default: p(() => [...d[3] || (d[3] = [
                              F("p", null, "Remove", -1)
                            ])]),
                            _: 1
                          })
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1032, ["modelValue", "onUpdate:modelValue", "title"])
            ]))), 128)),
            F("div", {
              class: Te([o.value.length && "mt-2"])
            }, [
              y(a(an), null, {
                default: p(() => [
                  y(a(on), null, {
                    default: p(() => [
                      y(a(ln), { "as-child": "" }, {
                        default: p(() => [
                          y(a(Sn), {
                            size: "icon",
                            onClick: i
                          }, {
                            default: p(() => [
                              y(a(rs))
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      y(a(rn), null, {
                        default: p(() => [...d[4] || (d[4] = [
                          F("p", null, "New definition", -1)
                        ])]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ], 2)
          ])) : ee("", !0)
        ])) : ee("", !0)
      ]);
    };
  }
}), uh = {
  install(e) {
    e.component("Vueson", ih);
  }
};
export {
  ih as Vueson,
  uh as default
};
