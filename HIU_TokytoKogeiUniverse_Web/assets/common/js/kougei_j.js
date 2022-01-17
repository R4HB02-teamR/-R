! function(e) {
  function t(n) {
    if (i[n]) return i[n].exports;
    var o = i[n] = {
      exports: {},
      id: n,
      loaded: !1
    };
    return e[n].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports
  }
  var i = {};
  t.m = e, t.c = i, t.p = "", t(0)
}([function(e, t, i) {
  i(1), i(5), i(64), i(10), i(20), i(31), i(30), i(3), i(67), i(34), i(9), i(19), i(21), i(11), i(12), i(32), i(6), i(17), i(29), i(66), i(4), i(36), i(25), i(27), i(65), i(15), i(33), i(16), i(18), i(14), i(23), i(13), i(24), i(26), i(28), i(68), i(7), i(69), i(8), i(70), e.exports = i(22)
}, function(e, t, i) {
  "use strict";
  var n = i(2),
    o = n,
    s = i(3),
    r = i(4),
    a = i(5),
    l = i(6),
    c = (i(7), i(8), i(9)),
    d = i(10),
    u = i(11),
    p = i(12),
    f = i(13),
    h = i(14),
    v = i(15),
    g = i(16),
    m = i(17),
    y = i(18),
    b = i(19),
    w = i(20),
    x = i(21),
    k = i(22),
    S = i(23),
    T = i(24),
    C = i(25),
    $ = i(26),
    A = i(27),
    E = i(28),
    L = i(29),
    j = i(30),
    H = i(31),
    _ = i(32),
    D = i(33),
    P = i(34),
    O = i(36),
    N = i(64),
    R = i(65),
    W = i(66);
  o("html").attr("lang"); - 1 != navigator.platform.indexOf("Win") && o("html").addClass("win"), o(function() {
    s ? o("body").addClass("sp") : o("body").addClass("pc"), W(), o("body").hasClass("pc") && o("iframe").each(function() {
      o(this).data("src") && o(this).attr("src", o(this).data("src"))
    });
    new r, new a;
    o("body").hasClass("mana01") && k(), o("body").hasClass("top") && o("body").hasClass("pc") && v(), j(), H(), _()
  }), o(window).load(function() {
    l(), m(), c(), f(), h(), x(), S(), C(), $(), A(), E(), P(), o("body").hasClass("pc") ? (g(), y()) : (D(), b(), L()), o("body").hasClass("top") && (d(), (o("html").hasClass("en") || o("html").hasClass("ch") || o("html").hasClass("ko")) && (u(), p()), o("body").hasClass("pc") || T(), R()),
      function() {
        return o("body").hasClass("guide") && (o("body").hasClass("uni06") || o("body").hasClass("uni07"))
      }() && w(), o("body").hasClass("syllabus") && O(), o("body").hasClass("exam03") && N()
  })
}, function(e, t, i) {
  var n, o;
  ! function(t, i) {
    "object" == typeof e && "object" == typeof e.exports ? e.exports = t.document ? i(t, !0) : function(e) {
      if (!e.document) throw new Error("jQuery requires a window with a document");
      return i(e)
    } : i(t)
  }("undefined" != typeof window ? window : this, function(i, s) {
    function r(e) {
      var t = !!e && "length" in e && e.length,
        i = ge.type(e);
      return "function" !== i && !ge.isWindow(e) && ("array" === i || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    function a(e, t, i) {
      if (ge.isFunction(t)) return ge.grep(e, function(e, n) {
        return !!t.call(e, n, e) !== i
      });
      if (t.nodeType) return ge.grep(e, function(e) {
        return e === t !== i
      });
      if ("string" == typeof t) {
        if ($e.test(t)) return ge.filter(t, e, i);
        t = ge.filter(t, e)
      }
      return ge.grep(e, function(e) {
        return ge.inArray(e, t) > -1 !== i
      })
    }

    function l(e, t) {
      do {
        e = e[t]
      } while (e && 1 !== e.nodeType);
      return e
    }

    function c(e) {
      var t = {};
      return ge.each(e.match(He) || [], function(e, i) {
        t[i] = !0
      }), t
    }

    function d() {
      ae.addEventListener ? (ae.removeEventListener("DOMContentLoaded", u), i.removeEventListener("load", u)) : (ae.detachEvent("onreadystatechange", u), i.detachEvent("onload", u))
    }

    function u() {
      (ae.addEventListener || "load" === i.event.type || "complete" === ae.readyState) && (d(), ge.ready())
    }

    function p(e, t, i) {
      if (void 0 === i && 1 === e.nodeType) {
        var n = "data-" + t.replace(Ne, "-$1").toLowerCase();
        if ("string" == typeof(i = e.getAttribute(n))) {
          try {
            i = "true" === i || "false" !== i && ("null" === i ? null : +i + "" === i ? +i : Oe.test(i) ? ge.parseJSON(i) : i)
          } catch (e) {}
          ge.data(e, t, i)
        } else i = void 0
      }
      return i
    }

    function f(e) {
      var t;
      for (t in e)
        if (("data" !== t || !ge.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
      return !0
    }

    function h(e, t, i, n) {
      if (Pe(e)) {
        var o, s, r = ge.expando,
          a = e.nodeType,
          l = a ? ge.cache : e,
          c = a ? e[r] : e[r] && r;
        if (c && l[c] && (n || l[c].data) || void 0 !== i || "string" != typeof t) return c || (c = a ? e[r] = re.pop() || ge.guid++ : r), l[c] || (l[c] = a ? {} : {
          toJSON: ge.noop
        }), "object" != typeof t && "function" != typeof t || (n ? l[c] = ge.extend(l[c], t) : l[c].data = ge.extend(l[c].data, t)), s = l[c], n || (s.data || (s.data = {}), s = s.data), void 0 !== i && (s[ge.camelCase(t)] = i), "string" == typeof t ? null == (o = s[t]) && (o = s[ge.camelCase(t)]) : o = s, o
      }
    }

    function v(e, t, i) {
      if (Pe(e)) {
        var n, o, s = e.nodeType,
          r = s ? ge.cache : e,
          a = s ? e[ge.expando] : ge.expando;
        if (r[a]) {
          if (t && (n = i ? r[a] : r[a].data)) {
            ge.isArray(t) ? t = t.concat(ge.map(t, ge.camelCase)) : t in n ? t = [t] : (t = ge.camelCase(t), t = t in n ? [t] : t.split(" ")), o = t.length;
            for (; o--;) delete n[t[o]];
            if (i ? !f(n) : !ge.isEmptyObject(n)) return
          }(i || (delete r[a].data, f(r[a]))) && (s ? ge.cleanData([e], !0) : ve.deleteExpando || r != r.window ? delete r[a] : r[a] = void 0)
        }
      }
    }

    function g(e, t, i, n) {
      var o, s = 1,
        r = 20,
        a = n ? function() {
          return n.cur()
        } : function() {
          return ge.css(e, t, "")
        },
        l = a(),
        c = i && i[3] || (ge.cssNumber[t] ? "" : "px"),
        d = (ge.cssNumber[t] || "px" !== c && +l) && We.exec(ge.css(e, t));
      if (d && d[3] !== c) {
        c = c || d[3], i = i || [], d = +l || 1;
        do {
          s = s || ".5", d /= s, ge.style(e, t, d + c)
        } while (s !== (s = a() / l) && 1 !== s && --r)
      }
      return i && (d = +d || +l || 0, o = i[1] ? d + (i[1] + 1) * i[2] : +i[2], n && (n.unit = c, n.start = d, n.end = o)), o
    }

    function m(e) {
      var t = Fe.split("|"),
        i = e.createDocumentFragment();
      if (i.createElement)
        for (; t.length;) i.createElement(t.pop());
      return i
    }

    function y(e, t) {
      var i, n, o = 0,
        s = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : void 0;
      if (!s)
        for (s = [], i = e.childNodes || e; null != (n = i[o]); o++) !t || ge.nodeName(n, t) ? s.push(n) : ge.merge(s, y(n, t));
      return void 0 === t || t && ge.nodeName(e, t) ? ge.merge([e], s) : s
    }

    function b(e, t) {
      for (var i, n = 0; null != (i = e[n]); n++) ge._data(i, "globalEval", !t || ge._data(t[n], "globalEval"))
    }

    function w(e) {
      Ye.test(e.type) && (e.defaultChecked = e.checked)
    }

    function x(e, t, i, n, o) {
      for (var s, r, a, l, c, d, u, p = e.length, f = m(t), h = [], v = 0; v < p; v++)
        if ((r = e[v]) || 0 === r)
          if ("object" === ge.type(r)) ge.merge(h, r.nodeType ? [r] : r);
          else if (Ke.test(r)) {
        for (l = l || f.appendChild(t.createElement("div")), c = (ze.exec(r) || ["", ""])[1].toLowerCase(), u = Ue[c] || Ue._default, l.innerHTML = u[1] + ge.htmlPrefilter(r) + u[2], s = u[0]; s--;) l = l.lastChild;
        if (!ve.leadingWhitespace && qe.test(r) && h.push(t.createTextNode(qe.exec(r)[0])), !ve.tbody)
          for (r = "table" !== c || Ge.test(r) ? "<table>" !== u[1] || Ge.test(r) ? 0 : l : l.firstChild, s = r && r.childNodes.length; s--;) ge.nodeName(d = r.childNodes[s], "tbody") && !d.childNodes.length && r.removeChild(d);
        for (ge.merge(h, l.childNodes), l.textContent = ""; l.firstChild;) l.removeChild(l.firstChild);
        l = f.lastChild
      } else h.push(t.createTextNode(r));
      for (l && f.removeChild(l), ve.appendChecked || ge.grep(y(h, "input"), w), v = 0; r = h[v++];)
        if (n && ge.inArray(r, n) > -1) o && o.push(r);
        else if (a = ge.contains(r.ownerDocument, r), l = y(f.appendChild(r), "script"), a && b(l), i)
        for (s = 0; r = l[s++];) Be.test(r.type || "") && i.push(r);
      return l = null, f
    }

    function k() {
      return !0
    }

    function S() {
      return !1
    }

    function T() {
      try {
        return ae.activeElement
      } catch (e) {}
    }

    function C(e, t, i, n, o, s) {
      var r, a;
      if ("object" == typeof t) {
        "string" != typeof i && (n = n || i, i = void 0);
        for (a in t) C(e, a, i, n, t[a], s);
        return e
      }
      if (null == n && null == o ? (o = i, n = i = void 0) : null == o && ("string" == typeof i ? (o = n, n = void 0) : (o = n, n = i, i = void 0)), !1 === o) o = S;
      else if (!o) return e;
      return 1 === s && (r = o, o = function(e) {
        return ge().off(e), r.apply(this, arguments)
      }, o.guid = r.guid || (r.guid = ge.guid++)), e.each(function() {
        ge.event.add(this, t, o, n, i)
      })
    }

    function $(e, t) {
      return ge.nodeName(e, "table") && ge.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function A(e) {
      return e.type = (null !== ge.find.attr(e, "type")) + "/" + e.type, e
    }

    function E(e) {
      var t = rt.exec(e.type);
      return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function L(e, t) {
      if (1 === t.nodeType && ge.hasData(e)) {
        var i, n, o, s = ge._data(e),
          r = ge._data(t, s),
          a = s.events;
        if (a) {
          delete r.handle, r.events = {};
          for (i in a)
            for (n = 0, o = a[i].length; n < o; n++) ge.event.add(t, i, a[i][n])
        }
        r.data && (r.data = ge.extend({}, r.data))
      }
    }

    function j(e, t) {
      var i, n, o;
      if (1 === t.nodeType) {
        if (i = t.nodeName.toLowerCase(), !ve.noCloneEvent && t[ge.expando]) {
          o = ge._data(t);
          for (n in o.events) ge.removeEvent(t, n, o.handle);
          t.removeAttribute(ge.expando)
        }
        "script" === i && t.text !== e.text ? (A(t).text = e.text, E(t)) : "object" === i ? (t.parentNode && (t.outerHTML = e.outerHTML), ve.html5Clone && e.innerHTML && !ge.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === i && Ye.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === i ? t.defaultSelected = t.selected = e.defaultSelected : "input" !== i && "textarea" !== i || (t.defaultValue = e.defaultValue)
      }
    }

    function H(e, t, i, n) {
      t = ce.apply([], t);
      var o, s, r, a, l, c, d = 0,
        u = e.length,
        p = u - 1,
        f = t[0],
        h = ge.isFunction(f);
      if (h || u > 1 && "string" == typeof f && !ve.checkClone && st.test(f)) return e.each(function(o) {
        var s = e.eq(o);
        h && (t[0] = f.call(this, o, s.html())), H(s, t, i, n)
      });
      if (u && (c = x(t, e[0].ownerDocument, !1, e, n), o = c.firstChild, 1 === c.childNodes.length && (c = o), o || n)) {
        for (a = ge.map(y(c, "script"), A), r = a.length; d < u; d++) s = c, d !== p && (s = ge.clone(s, !0, !0), r && ge.merge(a, y(s, "script"))), i.call(e[d], s, d);
        if (r)
          for (l = a[a.length - 1].ownerDocument, ge.map(a, E), d = 0; d < r; d++) s = a[d], Be.test(s.type || "") && !ge._data(s, "globalEval") && ge.contains(l, s) && (s.src ? ge._evalUrl && ge._evalUrl(s.src) : ge.globalEval((s.text || s.textContent || s.innerHTML || "").replace(at, "")));
        c = o = null
      }
      return e
    }

    function _(e, t, i) {
      for (var n, o = t ? ge.filter(t, e) : e, s = 0; null != (n = o[s]); s++) i || 1 !== n.nodeType || ge.cleanData(y(n)), n.parentNode && (i && ge.contains(n.ownerDocument, n) && b(y(n, "script")), n.parentNode.removeChild(n));
      return e
    }

    function D(e, t) {
      var i = ge(t.createElement(e)).appendTo(t.body),
        n = ge.css(i[0], "display");
      return i.detach(), n
    }

    function P(e) {
      var t = ae,
        i = ut[e];
      return i || (i = D(e, t), "none" !== i && i || (dt = (dt || ge("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (dt[0].contentWindow || dt[0].contentDocument).document, t.write(), t.close(), i = D(e, t), dt.detach()), ut[e] = i), i
    }

    function O(e, t) {
      return {
        get: function() {
          return e() ? void delete this.get : (this.get = t).apply(this, arguments)
        }
      }
    }

    function N(e) {
      if (e in $t) return e;
      for (var t = e.charAt(0).toUpperCase() + e.slice(1), i = Ct.length; i--;)
        if ((e = Ct[i] + t) in $t) return e
    }

    function R(e, t) {
      for (var i, n, o, s = [], r = 0, a = e.length; r < a; r++) n = e[r], n.style && (s[r] = ge._data(n, "olddisplay"), i = n.style.display, t ? (s[r] || "none" !== i || (n.style.display = ""), "" === n.style.display && Ie(n) && (s[r] = ge._data(n, "olddisplay", P(n.nodeName)))) : (o = Ie(n), (i && "none" !== i || !o) && ge._data(n, "olddisplay", o ? i : ge.css(n, "display"))));
      for (r = 0; r < a; r++) n = e[r], n.style && (t && "none" !== n.style.display && "" !== n.style.display || (n.style.display = t ? s[r] || "" : "none"));
      return e
    }

    function W(e, t, i) {
      var n = kt.exec(t);
      return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : t
    }

    function M(e, t, i, n, o) {
      for (var s = i === (n ? "border" : "content") ? 4 : "width" === t ? 1 : 0, r = 0; s < 4; s += 2) "margin" === i && (r += ge.css(e, i + Me[s], !0, o)), n ? ("content" === i && (r -= ge.css(e, "padding" + Me[s], !0, o)), "margin" !== i && (r -= ge.css(e, "border" + Me[s] + "Width", !0, o))) : (r += ge.css(e, "padding" + Me[s], !0, o), "padding" !== i && (r += ge.css(e, "border" + Me[s] + "Width", !0, o)));
      return r
    }

    function I(e, t, i) {
      var n = !0,
        o = "width" === t ? e.offsetWidth : e.offsetHeight,
        s = gt(e),
        r = ve.boxSizing && "border-box" === ge.css(e, "boxSizing", !1, s);
      if (o <= 0 || null == o) {
        if (o = mt(e, t, s), (o < 0 || null == o) && (o = e.style[t]), ft.test(o)) return o;
        n = r && (ve.boxSizingReliable() || o === e.style[t]), o = parseFloat(o) || 0
      }
      return o + M(e, t, i || (r ? "border" : "content"), n, s) + "px"
    }

    function X(e, t, i, n, o) {
      return new X.prototype.init(e, t, i, n, o)
    }

    function Y() {
      return i.setTimeout(function() {
        At = void 0
      }), At = ge.now()
    }

    function z(e, t) {
      var i, n = {
          height: e
        },
        o = 0;
      for (t = t ? 1 : 0; o < 4; o += 2 - t) i = Me[o], n["margin" + i] = n["padding" + i] = e;
      return t && (n.opacity = n.width = e), n
    }

    function B(e, t, i) {
      for (var n, o = (U.tweeners[t] || []).concat(U.tweeners["*"]), s = 0, r = o.length; s < r; s++)
        if (n = o[s].call(i, t, e)) return n
    }

    function q(e, t, i) {
      var n, o, s, r, a, l, c, d = this,
        u = {},
        p = e.style,
        f = e.nodeType && Ie(e),
        h = ge._data(e, "fxshow");
      i.queue || (a = ge._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
        a.unqueued || l()
      }), a.unqueued++, d.always(function() {
        d.always(function() {
          a.unqueued--, ge.queue(e, "fx").length || a.empty.fire()
        })
      })), 1 === e.nodeType && ("height" in t || "width" in t) && (i.overflow = [p.overflow, p.overflowX, p.overflowY], c = ge.css(e, "display"), "inline" === ("none" === c ? ge._data(e, "olddisplay") || P(e.nodeName) : c) && "none" === ge.css(e, "float") && (ve.inlineBlockNeedsLayout && "inline" !== P(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), i.overflow && (p.overflow = "hidden", ve.shrinkWrapBlocks() || d.always(function() {
        p.overflow = i.overflow[0], p.overflowX = i.overflow[1], p.overflowY = i.overflow[2]
      }));
      for (n in t)
        if (o = t[n], Lt.exec(o)) {
          if (delete t[n], s = s || "toggle" === o, o === (f ? "hide" : "show")) {
            if ("show" !== o || !h || void 0 === h[n]) continue;
            f = !0
          }
          u[n] = h && h[n] || ge.style(e, n)
        } else c = void 0;
      if (ge.isEmptyObject(u)) "inline" === ("none" === c ? P(e.nodeName) : c) && (p.display = c);
      else {
        h ? "hidden" in h && (f = h.hidden) : h = ge._data(e, "fxshow", {}), s && (h.hidden = !f), f ? ge(e).show() : d.done(function() {
          ge(e).hide()
        }), d.done(function() {
          var t;
          ge._removeData(e, "fxshow");
          for (t in u) ge.style(e, t, u[t])
        });
        for (n in u) r = B(f ? h[n] : 0, n, d), n in h || (h[n] = r.start, f && (r.end = r.start, r.start = "width" === n || "height" === n ? 1 : 0))
      }
    }

    function F(e, t) {
      var i, n, o, s, r;
      for (i in e)
        if (n = ge.camelCase(i), o = t[n], s = e[i], ge.isArray(s) && (o = s[1], s = e[i] = s[0]), i !== n && (e[n] = s, delete e[i]), (r = ge.cssHooks[n]) && "expand" in r) {
          s = r.expand(s), delete e[n];
          for (i in s) i in e || (e[i] = s[i], t[i] = o)
        } else t[n] = o
    }

    function U(e, t, i) {
      var n, o, s = 0,
        r = U.prefilters.length,
        a = ge.Deferred().always(function() {
          delete l.elem
        }),
        l = function() {
          if (o) return !1;
          for (var t = At || Y(), i = Math.max(0, c.startTime + c.duration - t), n = i / c.duration || 0, s = 1 - n, r = 0, l = c.tweens.length; r < l; r++) c.tweens[r].run(s);
          return a.notifyWith(e, [c, s, i]), s < 1 && l ? i : (a.resolveWith(e, [c]), !1)
        },
        c = a.promise({
          elem: e,
          props: ge.extend({}, t),
          opts: ge.extend(!0, {
            specialEasing: {},
            easing: ge.easing._default
          }, i),
          originalProperties: t,
          originalOptions: i,
          startTime: At || Y(),
          duration: i.duration,
          tweens: [],
          createTween: function(t, i) {
            var n = ge.Tween(e, c.opts, t, i, c.opts.specialEasing[t] || c.opts.easing);
            return c.tweens.push(n), n
          },
          stop: function(t) {
            var i = 0,
              n = t ? c.tweens.length : 0;
            if (o) return this;
            for (o = !0; i < n; i++) c.tweens[i].run(1);
            return t ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]), this
          }
        }),
        d = c.props;
      for (F(d, c.opts.specialEasing); s < r; s++)
        if (n = U.prefilters[s].call(c, e, d, c.opts)) return ge.isFunction(n.stop) && (ge._queueHooks(c.elem, c.opts.queue).stop = ge.proxy(n.stop, n)), n;
      return ge.map(d, B, c), ge.isFunction(c.opts.start) && c.opts.start.call(e, c), ge.fx.timer(ge.extend(l, {
        elem: e,
        anim: c,
        queue: c.opts.queue
      })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }

    function K(e) {
      return ge.attr(e, "class") || ""
    }

    function G(e) {
      return function(t, i) {
        "string" != typeof t && (i = t, t = "*");
        var n, o = 0,
          s = t.toLowerCase().match(He) || [];
        if (ge.isFunction(i))
          for (; n = s[o++];) "+" === n.charAt(0) ? (n = n.slice(1) || "*", (e[n] = e[n] || []).unshift(i)) : (e[n] = e[n] || []).push(i)
      }
    }

    function V(e, t, i, n) {
      function o(a) {
        var l;
        return s[a] = !0, ge.each(e[a] || [], function(e, a) {
          var c = a(t, i, n);
          return "string" != typeof c || r || s[c] ? r ? !(l = c) : void 0 : (t.dataTypes.unshift(c), o(c), !1)
        }), l
      }
      var s = {},
        r = e === ei;
      return o(t.dataTypes[0]) || !s["*"] && o("*")
    }

    function J(e, t) {
      var i, n, o = ge.ajaxSettings.flatOptions || {};
      for (n in t) void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
      return i && ge.extend(!0, e, i), e
    }

    function Q(e, t, i) {
      for (var n, o, s, r, a = e.contents, l = e.dataTypes;
        "*" === l[0];) l.shift(), void 0 === o && (o = e.mimeType || t.getResponseHeader("Content-Type"));
      if (o)
        for (r in a)
          if (a[r] && a[r].test(o)) {
            l.unshift(r);
            break
          } if (l[0] in i) s = l[0];
      else {
        for (r in i) {
          if (!l[0] || e.converters[r + " " + l[0]]) {
            s = r;
            break
          }
          n || (n = r)
        }
        s = s || n
      }
      if (s) return s !== l[0] && l.unshift(s), i[s]
    }

    function Z(e, t, i, n) {
      var o, s, r, a, l, c = {},
        d = e.dataTypes.slice();
      if (d[1])
        for (r in e.converters) c[r.toLowerCase()] = e.converters[r];
      for (s = d.shift(); s;)
        if (e.responseFields[s] && (i[e.responseFields[s]] = t), !l && n && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = s, s = d.shift())
          if ("*" === s) s = l;
          else if ("*" !== l && l !== s) {
        if (!(r = c[l + " " + s] || c["* " + s]))
          for (o in c)
            if (a = o.split(" "), a[1] === s && (r = c[l + " " + a[0]] || c["* " + a[0]])) {
              !0 === r ? r = c[o] : !0 !== c[o] && (s = a[0], d.unshift(a[1]));
              break
            } if (!0 !== r)
          if (r && e.throws) t = r(t);
          else try {
            t = r(t)
          } catch (e) {
            return {
              state: "parsererror",
              error: r ? e : "No conversion from " + l + " to " + s
            }
          }
      }
      return {
        state: "success",
        data: t
      }
    }

    function ee(e) {
      return e.style && e.style.display || ge.css(e, "display")
    }

    function te(e) {
      if (!ge.contains(e.ownerDocument || ae, e)) return !0;
      for (; e && 1 === e.nodeType;) {
        if ("none" === ee(e) || "hidden" === e.type) return !0;
        e = e.parentNode
      }
      return !1
    }

    function ie(e, t, i, n) {
      var o;
      if (ge.isArray(t)) ge.each(t, function(t, o) {
        i || si.test(e) ? n(e, o) : ie(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, i, n)
      });
      else if (i || "object" !== ge.type(t)) n(e, t);
      else
        for (o in t) ie(e + "[" + o + "]", t[o], i, n)
    }

    function ne() {
      try {
        return new i.XMLHttpRequest
      } catch (e) {}
    }

    function oe() {
      try {
        return new i.ActiveXObject("Microsoft.XMLHTTP")
      } catch (e) {}
    }

    function se(e) {
      return ge.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
    }
    var re = [],
      ae = i.document,
      le = re.slice,
      ce = re.concat,
      de = re.push,
      ue = re.indexOf,
      pe = {},
      fe = pe.toString,
      he = pe.hasOwnProperty,
      ve = {},
      ge = function(e, t) {
        return new ge.fn.init(e, t)
      },
      me = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      ye = /^-ms-/,
      be = /-([\da-z])/gi,
      we = function(e, t) {
        return t.toUpperCase()
      };
    ge.fn = ge.prototype = {
      jquery: "1.12.4",
      constructor: ge,
      selector: "",
      length: 0,
      toArray: function() {
        return le.call(this)
      },
      get: function(e) {
        return null != e ? e < 0 ? this[e + this.length] : this[e] : le.call(this)
      },
      pushStack: function(e) {
        var t = ge.merge(this.constructor(), e);
        return t.prevObject = this, t.context = this.context, t
      },
      each: function(e) {
        return ge.each(this, e)
      },
      map: function(e) {
        return this.pushStack(ge.map(this, function(t, i) {
          return e.call(t, i, t)
        }))
      },
      slice: function() {
        return this.pushStack(le.apply(this, arguments))
      },
      first: function() {
        return this.eq(0)
      },
      last: function() {
        return this.eq(-1)
      },
      eq: function(e) {
        var t = this.length,
          i = +e + (e < 0 ? t : 0);
        return this.pushStack(i >= 0 && i < t ? [this[i]] : [])
      },
      end: function() {
        return this.prevObject || this.constructor()
      },
      push: de,
      sort: re.sort,
      splice: re.splice
    }, ge.extend = ge.fn.extend = function() {
      var e, t, i, n, o, s, r = arguments[0] || {},
        a = 1,
        l = arguments.length,
        c = !1;
      for ("boolean" == typeof r && (c = r, r = arguments[a] || {}, a++), "object" == typeof r || ge.isFunction(r) || (r = {}), a === l && (r = this, a--); a < l; a++)
        if (null != (o = arguments[a]))
          for (n in o) e = r[n], i = o[n], r !== i && (c && i && (ge.isPlainObject(i) || (t = ge.isArray(i))) ? (t ? (t = !1, s = e && ge.isArray(e) ? e : []) : s = e && ge.isPlainObject(e) ? e : {}, r[n] = ge.extend(c, s, i)) : void 0 !== i && (r[n] = i));
      return r
    }, ge.extend({
      expando: "jQuery" + ("1.12.4" + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function(e) {
        throw new Error(e)
      },
      noop: function() {},
      isFunction: function(e) {
        return "function" === ge.type(e)
      },
      isArray: Array.isArray || function(e) {
        return "array" === ge.type(e)
      },
      isWindow: function(e) {
        return null != e && e == e.window
      },
      isNumeric: function(e) {
        var t = e && e.toString();
        return !ge.isArray(e) && t - parseFloat(t) + 1 >= 0
      },
      isEmptyObject: function(e) {
        var t;
        for (t in e) return !1;
        return !0
      },
      isPlainObject: function(e) {
        var t;
        if (!e || "object" !== ge.type(e) || e.nodeType || ge.isWindow(e)) return !1;
        try {
          if (e.constructor && !he.call(e, "constructor") && !he.call(e.constructor.prototype, "isPrototypeOf")) return !1
        } catch (e) {
          return !1
        }
        if (!ve.ownFirst)
          for (t in e) return he.call(e, t);
        for (t in e);
        return void 0 === t || he.call(e, t)
      },
      type: function(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? pe[fe.call(e)] || "object" : typeof e
      },
      globalEval: function(e) {
        e && ge.trim(e) && (i.execScript || function(e) {
          i.eval.call(i, e)
        })(e)
      },
      camelCase: function(e) {
        return e.replace(ye, "ms-").replace(be, we)
      },
      nodeName: function(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
      },
      each: function(e, t) {
        var i, n = 0;
        if (r(e))
          for (i = e.length; n < i && !1 !== t.call(e[n], n, e[n]); n++);
        else
          for (n in e)
            if (!1 === t.call(e[n], n, e[n])) break;
        return e
      },
      trim: function(e) {
        return null == e ? "" : (e + "").replace(me, "")
      },
      makeArray: function(e, t) {
        var i = t || [];
        return null != e && (r(Object(e)) ? ge.merge(i, "string" == typeof e ? [e] : e) : de.call(i, e)), i
      },
      inArray: function(e, t, i) {
        var n;
        if (t) {
          if (ue) return ue.call(t, e, i);
          for (n = t.length, i = i ? i < 0 ? Math.max(0, n + i) : i : 0; i < n; i++)
            if (i in t && t[i] === e) return i
        }
        return -1
      },
      merge: function(e, t) {
        for (var i = +t.length, n = 0, o = e.length; n < i;) e[o++] = t[n++];
        if (i !== i)
          for (; void 0 !== t[n];) e[o++] = t[n++];
        return e.length = o, e
      },
      grep: function(e, t, i) {
        for (var n = [], o = 0, s = e.length, r = !i; o < s; o++) !t(e[o], o) !== r && n.push(e[o]);
        return n
      },
      map: function(e, t, i) {
        var n, o, s = 0,
          a = [];
        if (r(e))
          for (n = e.length; s < n; s++) null != (o = t(e[s], s, i)) && a.push(o);
        else
          for (s in e) null != (o = t(e[s], s, i)) && a.push(o);
        return ce.apply([], a)
      },
      guid: 1,
      proxy: function(e, t) {
        var i, n, o;
        if ("string" == typeof t && (o = e[t], t = e, e = o), ge.isFunction(e)) return i = le.call(arguments, 2), n = function() {
          return e.apply(t || this, i.concat(le.call(arguments)))
        }, n.guid = e.guid = e.guid || ge.guid++, n
      },
      now: function() {
        return +new Date
      },
      support: ve
    }), "function" == typeof Symbol && (ge.fn[Symbol.iterator] = re[Symbol.iterator]), ge.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
      pe["[object " + t + "]"] = t.toLowerCase()
    });
    var xe = function(e) {
      function t(e, t, i, n) {
        var o, s, r, a, c, u, p, f, h = t && t.ownerDocument,
          v = t ? t.nodeType : 9;
        if (i = i || [], "string" != typeof e || !e || 1 !== v && 9 !== v && 11 !== v) return i;
        if (!n && ((t ? t.ownerDocument || t : W) !== j && L(t), t = t || j, _)) {
          if (11 !== v && (u = ve.exec(e)))
            if (o = u[1]) {
              if (9 === v) {
                if (!(r = t.getElementById(o))) return i;
                if (r.id === o) return i.push(r), i
              } else if (h && (r = h.getElementById(o)) && N(t, r) && r.id === o) return i.push(r), i
            } else {
              if (u[2]) return V.apply(i, t.getElementsByTagName(e)), i;
              if ((o = u[3]) && b.getElementsByClassName && t.getElementsByClassName) return V.apply(i, t.getElementsByClassName(o)), i
            } if (b.qsa && !z[e + " "] && (!D || !D.test(e))) {
            if (1 !== v) h = t, f = e;
            else if ("object" !== t.nodeName.toLowerCase()) {
              for ((a = t.getAttribute("id")) ? a = a.replace(me, "\\$&") : t.setAttribute("id", a = R), p = S(e), s = p.length, c = de.test(a) ? "#" + a : "[id='" + a + "']"; s--;) p[s] = c + " " + d(p[s]);
              f = p.join(","), h = ge.test(e) && l(t.parentNode) || t
            }
            if (f) try {
              return V.apply(i, h.querySelectorAll(f)), i
            } catch (e) {} finally {
              a === R && t.removeAttribute("id")
            }
          }
        }
        return C(e.replace(se, "$1"), t, i, n)
      }

      function i() {
        function e(i, n) {
          return t.push(i + " ") > w.cacheLength && delete e[t.shift()], e[i + " "] = n
        }
        var t = [];
        return e
      }

      function n(e) {
        return e[R] = !0, e
      }

      function o(e) {
        var t = j.createElement("div");
        try {
          return !!e(t)
        } catch (e) {
          return !1
        } finally {
          t.parentNode && t.parentNode.removeChild(t), t = null
        }
      }

      function s(e, t) {
        for (var i = e.split("|"), n = i.length; n--;) w.attrHandle[i[n]] = t
      }

      function r(e, t) {
        var i = t && e,
          n = i && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || q) - (~e.sourceIndex || q);
        if (n) return n;
        if (i)
          for (; i = i.nextSibling;)
            if (i === t) return -1;
        return e ? 1 : -1
      }

      function a(e) {
        return n(function(t) {
          return t = +t, n(function(i, n) {
            for (var o, s = e([], i.length, t), r = s.length; r--;) i[o = s[r]] && (i[o] = !(n[o] = i[o]))
          })
        })
      }

      function l(e) {
        return e && void 0 !== e.getElementsByTagName && e
      }

      function c() {}

      function d(e) {
        for (var t = 0, i = e.length, n = ""; t < i; t++) n += e[t].value;
        return n
      }

      function u(e, t, i) {
        var n = t.dir,
          o = i && "parentNode" === n,
          s = I++;
        return t.first ? function(t, i, s) {
          for (; t = t[n];)
            if (1 === t.nodeType || o) return e(t, i, s)
        } : function(t, i, r) {
          var a, l, c, d = [M, s];
          if (r) {
            for (; t = t[n];)
              if ((1 === t.nodeType || o) && e(t, i, r)) return !0
          } else
            for (; t = t[n];)
              if (1 === t.nodeType || o) {
                if (c = t[R] || (t[R] = {}), l = c[t.uniqueID] || (c[t.uniqueID] = {}), (a = l[n]) && a[0] === M && a[1] === s) return d[2] = a[2];
                if (l[n] = d, d[2] = e(t, i, r)) return !0
              }
        }
      }

      function p(e) {
        return e.length > 1 ? function(t, i, n) {
          for (var o = e.length; o--;)
            if (!e[o](t, i, n)) return !1;
          return !0
        } : e[0]
      }

      function f(e, i, n) {
        for (var o = 0, s = i.length; o < s; o++) t(e, i[o], n);
        return n
      }

      function h(e, t, i, n, o) {
        for (var s, r = [], a = 0, l = e.length, c = null != t; a < l; a++)(s = e[a]) && (i && !i(s, n, o) || (r.push(s), c && t.push(a)));
        return r
      }

      function v(e, t, i, o, s, r) {
        return o && !o[R] && (o = v(o)), s && !s[R] && (s = v(s, r)), n(function(n, r, a, l) {
          var c, d, u, p = [],
            v = [],
            g = r.length,
            m = n || f(t || "*", a.nodeType ? [a] : a, []),
            y = !e || !n && t ? m : h(m, p, e, a, l),
            b = i ? s || (n ? e : g || o) ? [] : r : y;
          if (i && i(y, b, a, l), o)
            for (c = h(b, v), o(c, [], a, l), d = c.length; d--;)(u = c[d]) && (b[v[d]] = !(y[v[d]] = u));
          if (n) {
            if (s || e) {
              if (s) {
                for (c = [], d = b.length; d--;)(u = b[d]) && c.push(y[d] = u);
                s(null, b = [], c, l)
              }
              for (d = b.length; d--;)(u = b[d]) && (c = s ? Q(n, u) : p[d]) > -1 && (n[c] = !(r[c] = u))
            }
          } else b = h(b === r ? b.splice(g, b.length) : b), s ? s(null, r, b, l) : V.apply(r, b)
        })
      }

      function g(e) {
        for (var t, i, n, o = e.length, s = w.relative[e[0].type], r = s || w.relative[" "], a = s ? 1 : 0, l = u(function(e) {
            return e === t
          }, r, !0), c = u(function(e) {
            return Q(t, e) > -1
          }, r, !0), f = [function(e, i, n) {
            var o = !s && (n || i !== $) || ((t = i).nodeType ? l(e, i, n) : c(e, i, n));
            return t = null, o
          }]; a < o; a++)
          if (i = w.relative[e[a].type]) f = [u(p(f), i)];
          else {
            if (i = w.filter[e[a].type].apply(null, e[a].matches), i[R]) {
              for (n = ++a; n < o && !w.relative[e[n].type]; n++);
              return v(a > 1 && p(f), a > 1 && d(e.slice(0, a - 1).concat({
                value: " " === e[a - 2].type ? "*" : ""
              })).replace(se, "$1"), i, a < n && g(e.slice(a, n)), n < o && g(e = e.slice(n)), n < o && d(e))
            }
            f.push(i)
          } return p(f)
      }

      function m(e, i) {
        var o = i.length > 0,
          s = e.length > 0,
          r = function(n, r, a, l, c) {
            var d, u, p, f = 0,
              v = "0",
              g = n && [],
              m = [],
              y = $,
              b = n || s && w.find.TAG("*", c),
              x = M += null == y ? 1 : Math.random() || .1,
              k = b.length;
            for (c && ($ = r === j || r || c); v !== k && null != (d = b[v]); v++) {
              if (s && d) {
                for (u = 0, r || d.ownerDocument === j || (L(d), a = !_); p = e[u++];)
                  if (p(d, r || j, a)) {
                    l.push(d);
                    break
                  } c && (M = x)
              }
              o && ((d = !p && d) && f--, n && g.push(d))
            }
            if (f += v, o && v !== f) {
              for (u = 0; p = i[u++];) p(g, m, r, a);
              if (n) {
                if (f > 0)
                  for (; v--;) g[v] || m[v] || (m[v] = K.call(l));
                m = h(m)
              }
              V.apply(l, m), c && !n && m.length > 0 && f + i.length > 1 && t.uniqueSort(l)
            }
            return c && (M = x, $ = y), g
          };
        return o ? n(r) : r
      }
      var y, b, w, x, k, S, T, C, $, A, E, L, j, H, _, D, P, O, N, R = "sizzle" + 1 * new Date,
        W = e.document,
        M = 0,
        I = 0,
        X = i(),
        Y = i(),
        z = i(),
        B = function(e, t) {
          return e === t && (E = !0), 0
        },
        q = 1 << 31,
        F = {}.hasOwnProperty,
        U = [],
        K = U.pop,
        G = U.push,
        V = U.push,
        J = U.slice,
        Q = function(e, t) {
          for (var i = 0, n = e.length; i < n; i++)
            if (e[i] === t) return i;
          return -1
        },
        Z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        ee = "[\\x20\\t\\r\\n\\f]",
        te = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        ie = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + te + "))|)" + ee + "*\\]",
        ne = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ie + ")*)|.*)\\)|)",
        oe = new RegExp(ee + "+", "g"),
        se = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"),
        re = new RegExp("^" + ee + "*," + ee + "*"),
        ae = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"),
        le = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]", "g"),
        ce = new RegExp(ne),
        de = new RegExp("^" + te + "$"),
        ue = {
          ID: new RegExp("^#(" + te + ")"),
          CLASS: new RegExp("^\\.(" + te + ")"),
          TAG: new RegExp("^(" + te + "|[*])"),
          ATTR: new RegExp("^" + ie),
          PSEUDO: new RegExp("^" + ne),
          CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"),
          bool: new RegExp("^(?:" + Z + ")$", "i"),
          needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i")
        },
        pe = /^(?:input|select|textarea|button)$/i,
        fe = /^h\d$/i,
        he = /^[^{]+\{\s*\[native \w/,
        ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        ge = /[+~]/,
        me = /'|\\/g,
        ye = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)", "ig"),
        be = function(e, t, i) {
          var n = "0x" + t - 65536;
          return n !== n || i ? t : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
        },
        we = function() {
          L()
        };
      try {
        V.apply(U = J.call(W.childNodes), W.childNodes), U[W.childNodes.length].nodeType
      } catch (e) {
        V = {
          apply: U.length ? function(e, t) {
            G.apply(e, J.call(t))
          } : function(e, t) {
            for (var i = e.length, n = 0; e[i++] = t[n++];);
            e.length = i - 1
          }
        }
      }
      b = t.support = {}, k = t.isXML = function(e) {
        var t = e && (e.ownerDocument || e).documentElement;
        return !!t && "HTML" !== t.nodeName
      }, L = t.setDocument = function(e) {
        var t, i, n = e ? e.ownerDocument || e : W;
        return n !== j && 9 === n.nodeType && n.documentElement ? (j = n, H = j.documentElement, _ = !k(j), (i = j.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", we, !1) : i.attachEvent && i.attachEvent("onunload", we)), b.attributes = o(function(e) {
          return e.className = "i", !e.getAttribute("className")
        }), b.getElementsByTagName = o(function(e) {
          return e.appendChild(j.createComment("")), !e.getElementsByTagName("*").length
        }), b.getElementsByClassName = he.test(j.getElementsByClassName), b.getById = o(function(e) {
          return H.appendChild(e).id = R, !j.getElementsByName || !j.getElementsByName(R).length
        }), b.getById ? (w.find.ID = function(e, t) {
          if (void 0 !== t.getElementById && _) {
            var i = t.getElementById(e);
            return i ? [i] : []
          }
        }, w.filter.ID = function(e) {
          var t = e.replace(ye, be);
          return function(e) {
            return e.getAttribute("id") === t
          }
        }) : (delete w.find.ID, w.filter.ID = function(e) {
          var t = e.replace(ye, be);
          return function(e) {
            var i = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
            return i && i.value === t
          }
        }), w.find.TAG = b.getElementsByTagName ? function(e, t) {
          return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : b.qsa ? t.querySelectorAll(e) : void 0
        } : function(e, t) {
          var i, n = [],
            o = 0,
            s = t.getElementsByTagName(e);
          if ("*" === e) {
            for (; i = s[o++];) 1 === i.nodeType && n.push(i);
            return n
          }
          return s
        }, w.find.CLASS = b.getElementsByClassName && function(e, t) {
          if (void 0 !== t.getElementsByClassName && _) return t.getElementsByClassName(e)
        }, P = [], D = [], (b.qsa = he.test(j.querySelectorAll)) && (o(function(e) {
          H.appendChild(e).innerHTML = "<a id='" + R + "'></a><select id='" + R + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && D.push("[*^$]=" + ee + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || D.push("\\[" + ee + "*(?:value|" + Z + ")"), e.querySelectorAll("[id~=" + R + "-]").length || D.push("~="), e.querySelectorAll(":checked").length || D.push(":checked"), e.querySelectorAll("a#" + R + "+*").length || D.push(".#.+[+~]")
        }), o(function(e) {
          var t = j.createElement("input");
          t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && D.push("name" + ee + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || D.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), D.push(",.*:")
        })), (b.matchesSelector = he.test(O = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && o(function(e) {
          b.disconnectedMatch = O.call(e, "div"), O.call(e, "[s!='']:x"), P.push("!=", ne)
        }), D = D.length && new RegExp(D.join("|")), P = P.length && new RegExp(P.join("|")), t = he.test(H.compareDocumentPosition), N = t || he.test(H.contains) ? function(e, t) {
          var i = 9 === e.nodeType ? e.documentElement : e,
            n = t && t.parentNode;
          return e === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
        } : function(e, t) {
          if (t)
            for (; t = t.parentNode;)
              if (t === e) return !0;
          return !1
        }, B = t ? function(e, t) {
          if (e === t) return E = !0, 0;
          var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
          return i || (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & i || !b.sortDetached && t.compareDocumentPosition(e) === i ? e === j || e.ownerDocument === W && N(W, e) ? -1 : t === j || t.ownerDocument === W && N(W, t) ? 1 : A ? Q(A, e) - Q(A, t) : 0 : 4 & i ? -1 : 1)
        } : function(e, t) {
          if (e === t) return E = !0, 0;
          var i, n = 0,
            o = e.parentNode,
            s = t.parentNode,
            a = [e],
            l = [t];
          if (!o || !s) return e === j ? -1 : t === j ? 1 : o ? -1 : s ? 1 : A ? Q(A, e) - Q(A, t) : 0;
          if (o === s) return r(e, t);
          for (i = e; i = i.parentNode;) a.unshift(i);
          for (i = t; i = i.parentNode;) l.unshift(i);
          for (; a[n] === l[n];) n++;
          return n ? r(a[n], l[n]) : a[n] === W ? -1 : l[n] === W ? 1 : 0
        }, j) : j
      }, t.matches = function(e, i) {
        return t(e, null, null, i)
      }, t.matchesSelector = function(e, i) {
        if ((e.ownerDocument || e) !== j && L(e), i = i.replace(le, "='$1']"), b.matchesSelector && _ && !z[i + " "] && (!P || !P.test(i)) && (!D || !D.test(i))) try {
          var n = O.call(e, i);
          if (n || b.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
        } catch (e) {}
        return t(i, j, null, [e]).length > 0
      }, t.contains = function(e, t) {
        return (e.ownerDocument || e) !== j && L(e), N(e, t)
      }, t.attr = function(e, t) {
        (e.ownerDocument || e) !== j && L(e);
        var i = w.attrHandle[t.toLowerCase()],
          n = i && F.call(w.attrHandle, t.toLowerCase()) ? i(e, t, !_) : void 0;
        return void 0 !== n ? n : b.attributes || !_ ? e.getAttribute(t) : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
      }, t.error = function(e) {
        throw new Error("Syntax error, unrecognized expression: " + e)
      }, t.uniqueSort = function(e) {
        var t, i = [],
          n = 0,
          o = 0;
        if (E = !b.detectDuplicates, A = !b.sortStable && e.slice(0), e.sort(B), E) {
          for (; t = e[o++];) t === e[o] && (n = i.push(o));
          for (; n--;) e.splice(i[n], 1)
        }
        return A = null, e
      }, x = t.getText = function(e) {
        var t, i = "",
          n = 0,
          o = e.nodeType;
        if (o) {
          if (1 === o || 9 === o || 11 === o) {
            if ("string" == typeof e.textContent) return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling) i += x(e)
          } else if (3 === o || 4 === o) return e.nodeValue
        } else
          for (; t = e[n++];) i += x(t);
        return i
      }, w = t.selectors = {
        cacheLength: 50,
        createPseudo: n,
        match: ue,
        attrHandle: {},
        find: {},
        relative: {
          ">": {
            dir: "parentNode",
            first: !0
          },
          " ": {
            dir: "parentNode"
          },
          "+": {
            dir: "previousSibling",
            first: !0
          },
          "~": {
            dir: "previousSibling"
          }
        },
        preFilter: {
          ATTR: function(e) {
            return e[1] = e[1].replace(ye, be), e[3] = (e[3] || e[4] || e[5] || "").replace(ye, be), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
          },
          CHILD: function(e) {
            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
          },
          PSEUDO: function(e) {
            var t, i = !e[6] && e[2];
            return ue.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : i && ce.test(i) && (t = S(i, !0)) && (t = i.indexOf(")", i.length - t) - i.length) && (e[0] = e[0].slice(0, t), e[2] = i.slice(0, t)), e.slice(0, 3))
          }
        },
        filter: {
          TAG: function(e) {
            var t = e.replace(ye, be).toLowerCase();
            return "*" === e ? function() {
              return !0
            } : function(e) {
              return e.nodeName && e.nodeName.toLowerCase() === t
            }
          },
          CLASS: function(e) {
            var t = X[e + " "];
            return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && X(e, function(e) {
              return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
            })
          },
          ATTR: function(e, i, n) {
            return function(o) {
              var s = t.attr(o, e);
              return null == s ? "!=" === i : !i || (s += "", "=" === i ? s === n : "!=" === i ? s !== n : "^=" === i ? n && 0 === s.indexOf(n) : "*=" === i ? n && s.indexOf(n) > -1 : "$=" === i ? n && s.slice(-n.length) === n : "~=" === i ? (" " + s.replace(oe, " ") + " ").indexOf(n) > -1 : "|=" === i && (s === n || s.slice(0, n.length + 1) === n + "-"))
            }
          },
          CHILD: function(e, t, i, n, o) {
            var s = "nth" !== e.slice(0, 3),
              r = "last" !== e.slice(-4),
              a = "of-type" === t;
            return 1 === n && 0 === o ? function(e) {
              return !!e.parentNode
            } : function(t, i, l) {
              var c, d, u, p, f, h, v = s !== r ? "nextSibling" : "previousSibling",
                g = t.parentNode,
                m = a && t.nodeName.toLowerCase(),
                y = !l && !a,
                b = !1;
              if (g) {
                if (s) {
                  for (; v;) {
                    for (p = t; p = p[v];)
                      if (a ? p.nodeName.toLowerCase() === m : 1 === p.nodeType) return !1;
                    h = v = "only" === e && !h && "nextSibling"
                  }
                  return !0
                }
                if (h = [r ? g.firstChild : g.lastChild], r && y) {
                  for (p = g, u = p[R] || (p[R] = {}), d = u[p.uniqueID] || (u[p.uniqueID] = {}), c = d[e] || [], f = c[0] === M && c[1], b = f && c[2], p = f && g.childNodes[f]; p = ++f && p && p[v] || (b = f = 0) || h.pop();)
                    if (1 === p.nodeType && ++b && p === t) {
                      d[e] = [M, f, b];
                      break
                    }
                } else if (y && (p = t, u = p[R] || (p[R] = {}), d = u[p.uniqueID] || (u[p.uniqueID] = {}), c = d[e] || [], f = c[0] === M && c[1], b = f), !1 === b)
                  for (;
                    (p = ++f && p && p[v] || (b = f = 0) || h.pop()) && ((a ? p.nodeName.toLowerCase() !== m : 1 !== p.nodeType) || !++b || (y && (u = p[R] || (p[R] = {}), d = u[p.uniqueID] || (u[p.uniqueID] = {}), d[e] = [M, b]), p !== t)););
                return (b -= o) === n || b % n == 0 && b / n >= 0
              }
            }
          },
          PSEUDO: function(e, i) {
            var o, s = w.pseudos[e] || w.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
            return s[R] ? s(i) : s.length > 1 ? (o = [e, e, "", i], w.setFilters.hasOwnProperty(e.toLowerCase()) ? n(function(e, t) {
              for (var n, o = s(e, i), r = o.length; r--;) n = Q(e, o[r]), e[n] = !(t[n] = o[r])
            }) : function(e) {
              return s(e, 0, o)
            }) : s
          }
        },
        pseudos: {
          not: n(function(e) {
            var t = [],
              i = [],
              o = T(e.replace(se, "$1"));
            return o[R] ? n(function(e, t, i, n) {
              for (var s, r = o(e, null, n, []), a = e.length; a--;)(s = r[a]) && (e[a] = !(t[a] = s))
            }) : function(e, n, s) {
              return t[0] = e, o(t, null, s, i), t[0] = null, !i.pop()
            }
          }),
          has: n(function(e) {
            return function(i) {
              return t(e, i).length > 0
            }
          }),
          contains: n(function(e) {
            return e = e.replace(ye, be),
              function(t) {
                return (t.textContent || t.innerText || x(t)).indexOf(e) > -1
              }
          }),
          lang: n(function(e) {
            return de.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(ye, be).toLowerCase(),
              function(t) {
                var i;
                do {
                  if (i = _ ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (i = i.toLowerCase()) === e || 0 === i.indexOf(e + "-")
                } while ((t = t.parentNode) && 1 === t.nodeType);
                return !1
              }
          }),
          target: function(t) {
            var i = e.location && e.location.hash;
            return i && i.slice(1) === t.id
          },
          root: function(e) {
            return e === H
          },
          focus: function(e) {
            return e === j.activeElement && (!j.hasFocus || j.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
          },
          enabled: function(e) {
            return !1 === e.disabled
          },
          disabled: function(e) {
            return !0 === e.disabled
          },
          checked: function(e) {
            var t = e.nodeName.toLowerCase();
            return "input" === t && !!e.checked || "option" === t && !!e.selected
          },
          selected: function(e) {
            return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
          },
          empty: function(e) {
            for (e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeType < 6) return !1;
            return !0
          },
          parent: function(e) {
            return !w.pseudos.empty(e)
          },
          header: function(e) {
            return fe.test(e.nodeName)
          },
          input: function(e) {
            return pe.test(e.nodeName)
          },
          button: function(e) {
            var t = e.nodeName.toLowerCase();
            return "input" === t && "button" === e.type || "button" === t
          },
          text: function(e) {
            var t;
            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
          },
          first: a(function() {
            return [0]
          }),
          last: a(function(e, t) {
            return [t - 1]
          }),
          eq: a(function(e, t, i) {
            return [i < 0 ? i + t : i]
          }),
          even: a(function(e, t) {
            for (var i = 0; i < t; i += 2) e.push(i);
            return e
          }),
          odd: a(function(e, t) {
            for (var i = 1; i < t; i += 2) e.push(i);
            return e
          }),
          lt: a(function(e, t, i) {
            for (var n = i < 0 ? i + t : i; --n >= 0;) e.push(n);
            return e
          }),
          gt: a(function(e, t, i) {
            for (var n = i < 0 ? i + t : i; ++n < t;) e.push(n);
            return e
          })
        }
      }, w.pseudos.nth = w.pseudos.eq;
      for (y in {
          radio: !0,
          checkbox: !0,
          file: !0,
          password: !0,
          image: !0
        }) w.pseudos[y] = function(e) {
        return function(t) {
          return "input" === t.nodeName.toLowerCase() && t.type === e
        }
      }(y);
      for (y in {
          submit: !0,
          reset: !0
        }) w.pseudos[y] = function(e) {
        return function(t) {
          var i = t.nodeName.toLowerCase();
          return ("input" === i || "button" === i) && t.type === e
        }
      }(y);
      return c.prototype = w.filters = w.pseudos, w.setFilters = new c, S = t.tokenize = function(e, i) {
        var n, o, s, r, a, l, c, d = Y[e + " "];
        if (d) return i ? 0 : d.slice(0);
        for (a = e, l = [], c = w.preFilter; a;) {
          n && !(o = re.exec(a)) || (o && (a = a.slice(o[0].length) || a), l.push(s = [])), n = !1, (o = ae.exec(a)) && (n = o.shift(), s.push({
            value: n,
            type: o[0].replace(se, " ")
          }), a = a.slice(n.length));
          for (r in w.filter) !(o = ue[r].exec(a)) || c[r] && !(o = c[r](o)) || (n = o.shift(), s.push({
            value: n,
            type: r,
            matches: o
          }), a = a.slice(n.length));
          if (!n) break
        }
        return i ? a.length : a ? t.error(e) : Y(e, l).slice(0)
      }, T = t.compile = function(e, t) {
        var i, n = [],
          o = [],
          s = z[e + " "];
        if (!s) {
          for (t || (t = S(e)), i = t.length; i--;) s = g(t[i]), s[R] ? n.push(s) : o.push(s);
          s = z(e, m(o, n)), s.selector = e
        }
        return s
      }, C = t.select = function(e, t, i, n) {
        var o, s, r, a, c, u = "function" == typeof e && e,
          p = !n && S(e = u.selector || e);
        if (i = i || [], 1 === p.length) {
          if (s = p[0] = p[0].slice(0), s.length > 2 && "ID" === (r = s[0]).type && b.getById && 9 === t.nodeType && _ && w.relative[s[1].type]) {
            if (!(t = (w.find.ID(r.matches[0].replace(ye, be), t) || [])[0])) return i;
            u && (t = t.parentNode), e = e.slice(s.shift().value.length)
          }
          for (o = ue.needsContext.test(e) ? 0 : s.length; o-- && (r = s[o], !w.relative[a = r.type]);)
            if ((c = w.find[a]) && (n = c(r.matches[0].replace(ye, be), ge.test(s[0].type) && l(t.parentNode) || t))) {
              if (s.splice(o, 1), !(e = n.length && d(s))) return V.apply(i, n), i;
              break
            }
        }
        return (u || T(e, p))(n, t, !_, i, !t || ge.test(e) && l(t.parentNode) || t), i
      }, b.sortStable = R.split("").sort(B).join("") === R, b.detectDuplicates = !!E, L(), b.sortDetached = o(function(e) {
        return 1 & e.compareDocumentPosition(j.createElement("div"))
      }), o(function(e) {
        return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
      }) || s("type|href|height|width", function(e, t, i) {
        if (!i) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
      }), b.attributes && o(function(e) {
        return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
      }) || s("value", function(e, t, i) {
        if (!i && "input" === e.nodeName.toLowerCase()) return e.defaultValue
      }), o(function(e) {
        return null == e.getAttribute("disabled")
      }) || s(Z, function(e, t, i) {
        var n;
        if (!i) return !0 === e[t] ? t.toLowerCase() : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
      }), t
    }(i);
    ge.find = xe, ge.expr = xe.selectors, ge.expr[":"] = ge.expr.pseudos, ge.uniqueSort = ge.unique = xe.uniqueSort, ge.text = xe.getText, ge.isXMLDoc = xe.isXML, ge.contains = xe.contains;
    var ke = function(e, t, i) {
        for (var n = [], o = void 0 !== i;
          (e = e[t]) && 9 !== e.nodeType;)
          if (1 === e.nodeType) {
            if (o && ge(e).is(i)) break;
            n.push(e)
          } return n
      },
      Se = function(e, t) {
        for (var i = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && i.push(e);
        return i
      },
      Te = ge.expr.match.needsContext,
      Ce = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
      $e = /^.[^:#\[\.,]*$/;
    ge.filter = function(e, t, i) {
      var n = t[0];
      return i && (e = ":not(" + e + ")"), 1 === t.length && 1 === n.nodeType ? ge.find.matchesSelector(n, e) ? [n] : [] : ge.find.matches(e, ge.grep(t, function(e) {
        return 1 === e.nodeType
      }))
    }, ge.fn.extend({
      find: function(e) {
        var t, i = [],
          n = this,
          o = n.length;
        if ("string" != typeof e) return this.pushStack(ge(e).filter(function() {
          for (t = 0; t < o; t++)
            if (ge.contains(n[t], this)) return !0
        }));
        for (t = 0; t < o; t++) ge.find(e, n[t], i);
        return i = this.pushStack(o > 1 ? ge.unique(i) : i), i.selector = this.selector ? this.selector + " " + e : e, i
      },
      filter: function(e) {
        return this.pushStack(a(this, e || [], !1))
      },
      not: function(e) {
        return this.pushStack(a(this, e || [], !0))
      },
      is: function(e) {
        return !!a(this, "string" == typeof e && Te.test(e) ? ge(e) : e || [], !1).length
      }
    });
    var Ae, Ee = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (ge.fn.init = function(e, t, i) {
      var n, o;
      if (!e) return this;
      if (i = i || Ae, "string" == typeof e) {
        if (!(n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : Ee.exec(e)) || !n[1] && t) return !t || t.jquery ? (t || i).find(e) : this.constructor(t).find(e);
        if (n[1]) {
          if (t = t instanceof ge ? t[0] : t, ge.merge(this, ge.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : ae, !0)), Ce.test(n[1]) && ge.isPlainObject(t))
            for (n in t) ge.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
          return this
        }
        if ((o = ae.getElementById(n[2])) && o.parentNode) {
          if (o.id !== n[2]) return Ae.find(e);
          this.length = 1, this[0] = o
        }
        return this.context = ae, this.selector = e, this
      }
      return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ge.isFunction(e) ? void 0 !== i.ready ? i.ready(e) : e(ge) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), ge.makeArray(e, this))
    }).prototype = ge.fn, Ae = ge(ae);
    var Le = /^(?:parents|prev(?:Until|All))/,
      je = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
      };
    ge.fn.extend({
      has: function(e) {
        var t, i = ge(e, this),
          n = i.length;
        return this.filter(function() {
          for (t = 0; t < n; t++)
            if (ge.contains(this, i[t])) return !0
        })
      },
      closest: function(e, t) {
        for (var i, n = 0, o = this.length, s = [], r = Te.test(e) || "string" != typeof e ? ge(e, t || this.context) : 0; n < o; n++)
          for (i = this[n]; i && i !== t; i = i.parentNode)
            if (i.nodeType < 11 && (r ? r.index(i) > -1 : 1 === i.nodeType && ge.find.matchesSelector(i, e))) {
              s.push(i);
              break
            } return this.pushStack(s.length > 1 ? ge.uniqueSort(s) : s)
      },
      index: function(e) {
        return e ? "string" == typeof e ? ge.inArray(this[0], ge(e)) : ge.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
      },
      add: function(e, t) {
        return this.pushStack(ge.uniqueSort(ge.merge(this.get(), ge(e, t))))
      },
      addBack: function(e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
      }
    }), ge.each({
      parent: function(e) {
        var t = e.parentNode;
        return t && 11 !== t.nodeType ? t : null
      },
      parents: function(e) {
        return ke(e, "parentNode")
      },
      parentsUntil: function(e, t, i) {
        return ke(e, "parentNode", i)
      },
      next: function(e) {
        return l(e, "nextSibling")
      },
      prev: function(e) {
        return l(e, "previousSibling")
      },
      nextAll: function(e) {
        return ke(e, "nextSibling")
      },
      prevAll: function(e) {
        return ke(e, "previousSibling")
      },
      nextUntil: function(e, t, i) {
        return ke(e, "nextSibling", i)
      },
      prevUntil: function(e, t, i) {
        return ke(e, "previousSibling", i)
      },
      siblings: function(e) {
        return Se((e.parentNode || {}).firstChild, e)
      },
      children: function(e) {
        return Se(e.firstChild)
      },
      contents: function(e) {
        return ge.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : ge.merge([], e.childNodes)
      }
    }, function(e, t) {
      ge.fn[e] = function(i, n) {
        var o = ge.map(this, t, i);
        return "Until" !== e.slice(-5) && (n = i), n && "string" == typeof n && (o = ge.filter(n, o)), this.length > 1 && (je[e] || (o = ge.uniqueSort(o)), Le.test(e) && (o = o.reverse())), this.pushStack(o)
      }
    });
    var He = /\S+/g;
    ge.Callbacks = function(e) {
      e = "string" == typeof e ? c(e) : ge.extend({}, e);
      var t, i, n, o, s = [],
        r = [],
        a = -1,
        l = function() {
          for (o = e.once, n = t = !0; r.length; a = -1)
            for (i = r.shift(); ++a < s.length;) !1 === s[a].apply(i[0], i[1]) && e.stopOnFalse && (a = s.length, i = !1);
          e.memory || (i = !1), t = !1, o && (s = i ? [] : "")
        },
        d = {
          add: function() {
            return s && (i && !t && (a = s.length - 1, r.push(i)), function t(i) {
              ge.each(i, function(i, n) {
                ge.isFunction(n) ? e.unique && d.has(n) || s.push(n) : n && n.length && "string" !== ge.type(n) && t(n)
              })
            }(arguments), i && !t && l()), this
          },
          remove: function() {
            return ge.each(arguments, function(e, t) {
              for (var i;
                (i = ge.inArray(t, s, i)) > -1;) s.splice(i, 1), i <= a && a--
            }), this
          },
          has: function(e) {
            return e ? ge.inArray(e, s) > -1 : s.length > 0
          },
          empty: function() {
            return s && (s = []), this
          },
          disable: function() {
            return o = r = [], s = i = "", this
          },
          disabled: function() {
            return !s
          },
          lock: function() {
            return o = !0, i || d.disable(), this
          },
          locked: function() {
            return !!o
          },
          fireWith: function(e, i) {
            return o || (i = i || [], i = [e, i.slice ? i.slice() : i], r.push(i), t || l()), this
          },
          fire: function() {
            return d.fireWith(this, arguments), this
          },
          fired: function() {
            return !!n
          }
        };
      return d
    }, ge.extend({
      Deferred: function(e) {
        var t = [
            ["resolve", "done", ge.Callbacks("once memory"), "resolved"],
            ["reject", "fail", ge.Callbacks("once memory"), "rejected"],
            ["notify", "progress", ge.Callbacks("memory")]
          ],
          i = "pending",
          n = {
            state: function() {
              return i
            },
            always: function() {
              return o.done(arguments).fail(arguments), this
            },
            then: function() {
              var e = arguments;
              return ge.Deferred(function(i) {
                ge.each(t, function(t, s) {
                  var r = ge.isFunction(e[t]) && e[t];
                  o[s[1]](function() {
                    var e = r && r.apply(this, arguments);
                    e && ge.isFunction(e.promise) ? e.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[s[0] + "With"](this === n ? i.promise() : this, r ? [e] : arguments)
                  })
                }), e = null
              }).promise()
            },
            promise: function(e) {
              return null != e ? ge.extend(e, n) : n
            }
          },
          o = {};
        return n.pipe = n.then, ge.each(t, function(e, s) {
          var r = s[2],
            a = s[3];
          n[s[1]] = r.add, a && r.add(function() {
            i = a
          }, t[1 ^ e][2].disable, t[2][2].lock), o[s[0]] = function() {
            return o[s[0] + "With"](this === o ? n : this, arguments), this
          }, o[s[0] + "With"] = r.fireWith
        }), n.promise(o), e && e.call(o, o), o
      },
      when: function(e) {
        var t, i, n, o = 0,
          s = le.call(arguments),
          r = s.length,
          a = 1 !== r || e && ge.isFunction(e.promise) ? r : 0,
          l = 1 === a ? e : ge.Deferred(),
          c = function(e, i, n) {
            return function(o) {
              i[e] = this, n[e] = arguments.length > 1 ? le.call(arguments) : o, n === t ? l.notifyWith(i, n) : --a || l.resolveWith(i, n)
            }
          };
        if (r > 1)
          for (t = new Array(r), i = new Array(r), n = new Array(r); o < r; o++) s[o] && ge.isFunction(s[o].promise) ? s[o].promise().progress(c(o, i, t)).done(c(o, n, s)).fail(l.reject) : --a;
        return a || l.resolveWith(n, s), l.promise()
      }
    });
    var _e;
    ge.fn.ready = function(e) {
      return ge.ready.promise().done(e), this
    }, ge.extend({
      isReady: !1,
      readyWait: 1,
      holdReady: function(e) {
        e ? ge.readyWait++ : ge.ready(!0)
      },
      ready: function(e) {
        (!0 === e ? --ge.readyWait : ge.isReady) || (ge.isReady = !0, !0 !== e && --ge.readyWait > 0 || (_e.resolveWith(ae, [ge]), ge.fn.triggerHandler && (ge(ae).triggerHandler("ready"), ge(ae).off("ready"))))
      }
    }), ge.ready.promise = function(e) {
      if (!_e)
        if (_e = ge.Deferred(), "complete" === ae.readyState || "loading" !== ae.readyState && !ae.documentElement.doScroll) i.setTimeout(ge.ready);
        else if (ae.addEventListener) ae.addEventListener("DOMContentLoaded", u), i.addEventListener("load", u);
      else {
        ae.attachEvent("onreadystatechange", u), i.attachEvent("onload", u);
        var t = !1;
        try {
          t = null == i.frameElement && ae.documentElement
        } catch (e) {}
        t && t.doScroll && function e() {
          if (!ge.isReady) {
            try {
              t.doScroll("left")
            } catch (t) {
              return i.setTimeout(e, 50)
            }
            d(), ge.ready()
          }
        }()
      }
      return _e.promise(e)
    }, ge.ready.promise();
    var De;
    for (De in ge(ve)) break;
    ve.ownFirst = "0" === De, ve.inlineBlockNeedsLayout = !1, ge(function() {
        var e, t, i, n;
        (i = ae.getElementsByTagName("body")[0]) && i.style && (t = ae.createElement("div"), n = ae.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(n).appendChild(t), void 0 !== t.style.zoom && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", ve.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (i.style.zoom = 1)), i.removeChild(n))
      }),
      function() {
        var e = ae.createElement("div");
        ve.deleteExpando = !0;
        try {
          delete e.test
        } catch (e) {
          ve.deleteExpando = !1
        }
        e = null
      }();
    var Pe = function(e) {
        var t = ge.noData[(e.nodeName + " ").toLowerCase()],
          i = +e.nodeType || 1;
        return (1 === i || 9 === i) && (!t || !0 !== t && e.getAttribute("classid") === t)
      },
      Oe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      Ne = /([A-Z])/g;
    ge.extend({
        cache: {},
        noData: {
          "applet ": !0,
          "embed ": !0,
          "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(e) {
          return !!(e = e.nodeType ? ge.cache[e[ge.expando]] : e[ge.expando]) && !f(e)
        },
        data: function(e, t, i) {
          return h(e, t, i)
        },
        removeData: function(e, t) {
          return v(e, t)
        },
        _data: function(e, t, i) {
          return h(e, t, i, !0)
        },
        _removeData: function(e, t) {
          return v(e, t, !0)
        }
      }), ge.fn.extend({
        data: function(e, t) {
          var i, n, o, s = this[0],
            r = s && s.attributes;
          if (void 0 === e) {
            if (this.length && (o = ge.data(s), 1 === s.nodeType && !ge._data(s, "parsedAttrs"))) {
              for (i = r.length; i--;) r[i] && (n = r[i].name, 0 === n.indexOf("data-") && (n = ge.camelCase(n.slice(5)), p(s, n, o[n])));
              ge._data(s, "parsedAttrs", !0)
            }
            return o
          }
          return "object" == typeof e ? this.each(function() {
            ge.data(this, e)
          }) : arguments.length > 1 ? this.each(function() {
            ge.data(this, e, t)
          }) : s ? p(s, e, ge.data(s, e)) : void 0
        },
        removeData: function(e) {
          return this.each(function() {
            ge.removeData(this, e)
          })
        }
      }), ge.extend({
        queue: function(e, t, i) {
          var n;
          if (e) return t = (t || "fx") + "queue", n = ge._data(e, t), i && (!n || ge.isArray(i) ? n = ge._data(e, t, ge.makeArray(i)) : n.push(i)), n || []
        },
        dequeue: function(e, t) {
          t = t || "fx";
          var i = ge.queue(e, t),
            n = i.length,
            o = i.shift(),
            s = ge._queueHooks(e, t),
            r = function() {
              ge.dequeue(e, t)
            };
          "inprogress" === o && (o = i.shift(), n--), o && ("fx" === t && i.unshift("inprogress"), delete s.stop, o.call(e, r, s)), !n && s && s.empty.fire()
        },
        _queueHooks: function(e, t) {
          var i = t + "queueHooks";
          return ge._data(e, i) || ge._data(e, i, {
            empty: ge.Callbacks("once memory").add(function() {
              ge._removeData(e, t + "queue"), ge._removeData(e, i)
            })
          })
        }
      }), ge.fn.extend({
        queue: function(e, t) {
          var i = 2;
          return "string" != typeof e && (t = e, e = "fx", i--), arguments.length < i ? ge.queue(this[0], e) : void 0 === t ? this : this.each(function() {
            var i = ge.queue(this, e, t);
            ge._queueHooks(this, e), "fx" === e && "inprogress" !== i[0] && ge.dequeue(this, e)
          })
        },
        dequeue: function(e) {
          return this.each(function() {
            ge.dequeue(this, e)
          })
        },
        clearQueue: function(e) {
          return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
          var i, n = 1,
            o = ge.Deferred(),
            s = this,
            r = this.length,
            a = function() {
              --n || o.resolveWith(s, [s])
            };
          for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; r--;)(i = ge._data(s[r], e + "queueHooks")) && i.empty && (n++, i.empty.add(a));
          return a(), o.promise(t)
        }
      }),
      function() {
        var e;
        ve.shrinkWrapBlocks = function() {
          if (null != e) return e;
          e = !1;
          var t, i, n;
          return (i = ae.getElementsByTagName("body")[0]) && i.style ? (t = ae.createElement("div"), n = ae.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(n).appendChild(t), void 0 !== t.style.zoom && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(ae.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), i.removeChild(n), e) : void 0
        }
      }();
    var Re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      We = new RegExp("^(?:([+-])=|)(" + Re + ")([a-z%]*)$", "i"),
      Me = ["Top", "Right", "Bottom", "Left"],
      Ie = function(e, t) {
        return e = t || e, "none" === ge.css(e, "display") || !ge.contains(e.ownerDocument, e)
      },
      Xe = function(e, t, i, n, o, s, r) {
        var a = 0,
          l = e.length,
          c = null == i;
        if ("object" === ge.type(i)) {
          o = !0;
          for (a in i) Xe(e, t, a, i[a], !0, s, r)
        } else if (void 0 !== n && (o = !0, ge.isFunction(n) || (r = !0), c && (r ? (t.call(e, n), t = null) : (c = t, t = function(e, t, i) {
            return c.call(ge(e), i)
          })), t))
          for (; a < l; a++) t(e[a], i, r ? n : n.call(e[a], a, t(e[a], i)));
        return o ? e : c ? t.call(e) : l ? t(e[0], i) : s
      },
      Ye = /^(?:checkbox|radio)$/i,
      ze = /<([\w:-]+)/,
      Be = /^$|\/(?:java|ecma)script/i,
      qe = /^\s+/,
      Fe = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
    ! function() {
      var e = ae.createElement("div"),
        t = ae.createDocumentFragment(),
        i = ae.createElement("input");
      e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", ve.leadingWhitespace = 3 === e.firstChild.nodeType, ve.tbody = !e.getElementsByTagName("tbody").length, ve.htmlSerialize = !!e.getElementsByTagName("link").length, ve.html5Clone = "<:nav></:nav>" !== ae.createElement("nav").cloneNode(!0).outerHTML, i.type = "checkbox", i.checked = !0, t.appendChild(i), ve.appendChecked = i.checked, e.innerHTML = "<textarea>x</textarea>", ve.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, t.appendChild(e), i = ae.createElement("input"), i.setAttribute("type", "radio"), i.setAttribute("checked", "checked"), i.setAttribute("name", "t"), e.appendChild(i), ve.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, ve.noCloneEvent = !!e.addEventListener, e[ge.expando] = 1, ve.attributes = !e.getAttribute(ge.expando)
    }();
    var Ue = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      legend: [1, "<fieldset>", "</fieldset>"],
      area: [1, "<map>", "</map>"],
      param: [1, "<object>", "</object>"],
      thead: [1, "<table>", "</table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: ve.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    };
    Ue.optgroup = Ue.option, Ue.tbody = Ue.tfoot = Ue.colgroup = Ue.caption = Ue.thead, Ue.th = Ue.td;
    var Ke = /<|&#?\w+;/,
      Ge = /<tbody/i;
    ! function() {
      var e, t, n = ae.createElement("div");
      for (e in {
          submit: !0,
          change: !0,
          focusin: !0
        }) t = "on" + e, (ve[e] = t in i) || (n.setAttribute(t, "t"), ve[e] = !1 === n.attributes[t].expando);
      n = null
    }();
    var Ve = /^(?:input|select|textarea)$/i,
      Je = /^key/,
      Qe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      Ze = /^(?:focusinfocus|focusoutblur)$/,
      et = /^([^.]*)(?:\.(.+)|)/;
    ge.event = {
      global: {},
      add: function(e, t, i, n, o) {
        var s, r, a, l, c, d, u, p, f, h, v, g = ge._data(e);
        if (g) {
          for (i.handler && (l = i, i = l.handler, o = l.selector), i.guid || (i.guid = ge.guid++), (r = g.events) || (r = g.events = {}), (d = g.handle) || (d = g.handle = function(e) {
              return void 0 === ge || e && ge.event.triggered === e.type ? void 0 : ge.event.dispatch.apply(d.elem, arguments)
            }, d.elem = e), t = (t || "").match(He) || [""], a = t.length; a--;) s = et.exec(t[a]) || [], f = v = s[1], h = (s[2] || "").split(".").sort(), f && (c = ge.event.special[f] || {}, f = (o ? c.delegateType : c.bindType) || f, c = ge.event.special[f] || {}, u = ge.extend({
            type: f,
            origType: v,
            data: n,
            handler: i,
            guid: i.guid,
            selector: o,
            needsContext: o && ge.expr.match.needsContext.test(o),
            namespace: h.join(".")
          }, l), (p = r[f]) || (p = r[f] = [], p.delegateCount = 0, c.setup && !1 !== c.setup.call(e, n, h, d) || (e.addEventListener ? e.addEventListener(f, d, !1) : e.attachEvent && e.attachEvent("on" + f, d))), c.add && (c.add.call(e, u), u.handler.guid || (u.handler.guid = i.guid)), o ? p.splice(p.delegateCount++, 0, u) : p.push(u), ge.event.global[f] = !0);
          e = null
        }
      },
      remove: function(e, t, i, n, o) {
        var s, r, a, l, c, d, u, p, f, h, v, g = ge.hasData(e) && ge._data(e);
        if (g && (d = g.events)) {
          for (t = (t || "").match(He) || [""], c = t.length; c--;)
            if (a = et.exec(t[c]) || [], f = v = a[1], h = (a[2] || "").split(".").sort(), f) {
              for (u = ge.event.special[f] || {}, f = (n ? u.delegateType : u.bindType) || f, p = d[f] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = s = p.length; s--;) r = p[s], !o && v !== r.origType || i && i.guid !== r.guid || a && !a.test(r.namespace) || n && n !== r.selector && ("**" !== n || !r.selector) || (p.splice(s, 1), r.selector && p.delegateCount--, u.remove && u.remove.call(e, r));
              l && !p.length && (u.teardown && !1 !== u.teardown.call(e, h, g.handle) || ge.removeEvent(e, f, g.handle), delete d[f])
            } else
              for (f in d) ge.event.remove(e, f + t[c], i, n, !0);
          ge.isEmptyObject(d) && (delete g.handle, ge._removeData(e, "events"))
        }
      },
      trigger: function(e, t, n, o) {
        var s, r, a, l, c, d, u, p = [n || ae],
          f = he.call(e, "type") ? e.type : e,
          h = he.call(e, "namespace") ? e.namespace.split(".") : [];
        if (a = d = n = n || ae, 3 !== n.nodeType && 8 !== n.nodeType && !Ze.test(f + ge.event.triggered) && (f.indexOf(".") > -1 && (h = f.split("."), f = h.shift(), h.sort()), r = f.indexOf(":") < 0 && "on" + f, e = e[ge.expando] ? e : new ge.Event(f, "object" == typeof e && e), e.isTrigger = o ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : ge.makeArray(t, [e]), c = ge.event.special[f] || {}, o || !c.trigger || !1 !== c.trigger.apply(n, t))) {
          if (!o && !c.noBubble && !ge.isWindow(n)) {
            for (l = c.delegateType || f, Ze.test(l + f) || (a = a.parentNode); a; a = a.parentNode) p.push(a), d = a;
            d === (n.ownerDocument || ae) && p.push(d.defaultView || d.parentWindow || i)
          }
          for (u = 0;
            (a = p[u++]) && !e.isPropagationStopped();) e.type = u > 1 ? l : c.bindType || f, s = (ge._data(a, "events") || {})[e.type] && ge._data(a, "handle"), s && s.apply(a, t), (s = r && a[r]) && s.apply && Pe(a) && (e.result = s.apply(a, t), !1 === e.result && e.preventDefault());
          if (e.type = f, !o && !e.isDefaultPrevented() && (!c._default || !1 === c._default.apply(p.pop(), t)) && Pe(n) && r && n[f] && !ge.isWindow(n)) {
            d = n[r], d && (n[r] = null), ge.event.triggered = f;
            try {
              n[f]()
            } catch (e) {}
            ge.event.triggered = void 0, d && (n[r] = d)
          }
          return e.result
        }
      },
      dispatch: function(e) {
        e = ge.event.fix(e);
        var t, i, n, o, s, r = [],
          a = le.call(arguments),
          l = (ge._data(this, "events") || {})[e.type] || [],
          c = ge.event.special[e.type] || {};
        if (a[0] = e, e.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, e)) {
          for (r = ge.event.handlers.call(this, e, l), t = 0;
            (o = r[t++]) && !e.isPropagationStopped();)
            for (e.currentTarget = o.elem, i = 0;
              (s = o.handlers[i++]) && !e.isImmediatePropagationStopped();) e.rnamespace && !e.rnamespace.test(s.namespace) || (e.handleObj = s, e.data = s.data, void 0 !== (n = ((ge.event.special[s.origType] || {}).handle || s.handler).apply(o.elem, a)) && !1 === (e.result = n) && (e.preventDefault(), e.stopPropagation()));
          return c.postDispatch && c.postDispatch.call(this, e), e.result
        }
      },
      handlers: function(e, t) {
        var i, n, o, s, r = [],
          a = t.delegateCount,
          l = e.target;
        if (a && l.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
          for (; l != this; l = l.parentNode || this)
            if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
              for (n = [], i = 0; i < a; i++) s = t[i], o = s.selector + " ", void 0 === n[o] && (n[o] = s.needsContext ? ge(o, this).index(l) > -1 : ge.find(o, this, null, [l]).length), n[o] && n.push(s);
              n.length && r.push({
                elem: l,
                handlers: n
              })
            } return a < t.length && r.push({
          elem: this,
          handlers: t.slice(a)
        }), r
      },
      fix: function(e) {
        if (e[ge.expando]) return e;
        var t, i, n, o = e.type,
          s = e,
          r = this.fixHooks[o];
        for (r || (this.fixHooks[o] = r = Qe.test(o) ? this.mouseHooks : Je.test(o) ? this.keyHooks : {}), n = r.props ? this.props.concat(r.props) : this.props, e = new ge.Event(s), t = n.length; t--;) i = n[t], e[i] = s[i];
        return e.target || (e.target = s.srcElement || ae), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, r.filter ? r.filter(e, s) : e
      },
      props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
      fixHooks: {},
      keyHooks: {
        props: "char charCode key keyCode".split(" "),
        filter: function(e, t) {
          return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
        }
      },
      mouseHooks: {
        props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
        filter: function(e, t) {
          var i, n, o, s = t.button,
            r = t.fromElement;
          return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || ae, o = n.documentElement, i = n.body, e.pageX = t.clientX + (o && o.scrollLeft || i && i.scrollLeft || 0) - (o && o.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (o && o.scrollTop || i && i.scrollTop || 0) - (o && o.clientTop || i && i.clientTop || 0)), !e.relatedTarget && r && (e.relatedTarget = r === e.target ? t.toElement : r), e.which || void 0 === s || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
        }
      },
      special: {
        load: {
          noBubble: !0
        },
        focus: {
          trigger: function() {
            if (this !== T() && this.focus) try {
              return this.focus(), !1
            } catch (e) {}
          },
          delegateType: "focusin"
        },
        blur: {
          trigger: function() {
            if (this === T() && this.blur) return this.blur(), !1
          },
          delegateType: "focusout"
        },
        click: {
          trigger: function() {
            if (ge.nodeName(this, "input") && "checkbox" === this.type && this.click) return this.click(), !1
          },
          _default: function(e) {
            return ge.nodeName(e.target, "a")
          }
        },
        beforeunload: {
          postDispatch: function(e) {
            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
          }
        }
      },
      simulate: function(e, t, i) {
        var n = ge.extend(new ge.Event, i, {
          type: e,
          isSimulated: !0
        });
        ge.event.trigger(n, null, t), n.isDefaultPrevented() && i.preventDefault()
      }
    }, ge.removeEvent = ae.removeEventListener ? function(e, t, i) {
      e.removeEventListener && e.removeEventListener(t, i)
    } : function(e, t, i) {
      var n = "on" + t;
      e.detachEvent && (void 0 === e[n] && (e[n] = null), e.detachEvent(n, i))
    }, ge.Event = function(e, t) {
      if (!(this instanceof ge.Event)) return new ge.Event(e, t);
      e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? k : S) : this.type = e, t && ge.extend(this, t), this.timeStamp = e && e.timeStamp || ge.now(), this[ge.expando] = !0
    }, ge.Event.prototype = {
      constructor: ge.Event,
      isDefaultPrevented: S,
      isPropagationStopped: S,
      isImmediatePropagationStopped: S,
      preventDefault: function() {
        var e = this.originalEvent;
        this.isDefaultPrevented = k, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
      },
      stopPropagation: function() {
        var e = this.originalEvent;
        this.isPropagationStopped = k, e && !this.isSimulated && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
      },
      stopImmediatePropagation: function() {
        var e = this.originalEvent;
        this.isImmediatePropagationStopped = k, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
      }
    }, ge.each({
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      pointerenter: "pointerover",
      pointerleave: "pointerout"
    }, function(e, t) {
      ge.event.special[e] = {
        delegateType: t,
        bindType: t,
        handle: function(e) {
          var i, n = this,
            o = e.relatedTarget,
            s = e.handleObj;
          return o && (o === n || ge.contains(n, o)) || (e.type = s.origType, i = s.handler.apply(this, arguments), e.type = t), i
        }
      }
    }), ve.submit || (ge.event.special.submit = {
      setup: function() {
        if (ge.nodeName(this, "form")) return !1;
        ge.event.add(this, "click._submit keypress._submit", function(e) {
          var t = e.target,
            i = ge.nodeName(t, "input") || ge.nodeName(t, "button") ? ge.prop(t, "form") : void 0;
          i && !ge._data(i, "submit") && (ge.event.add(i, "submit._submit", function(e) {
            e._submitBubble = !0
          }), ge._data(i, "submit", !0))
        })
      },
      postDispatch: function(e) {
        e._submitBubble && (delete e._submitBubble, this.parentNode && !e.isTrigger && ge.event.simulate("submit", this.parentNode, e))
      },
      teardown: function() {
        if (ge.nodeName(this, "form")) return !1;
        ge.event.remove(this, "._submit")
      }
    }), ve.change || (ge.event.special.change = {
      setup: function() {
        if (Ve.test(this.nodeName)) return "checkbox" !== this.type && "radio" !== this.type || (ge.event.add(this, "propertychange._change", function(e) {
          "checked" === e.originalEvent.propertyName && (this._justChanged = !0)
        }), ge.event.add(this, "click._change", function(e) {
          this._justChanged && !e.isTrigger && (this._justChanged = !1), ge.event.simulate("change", this, e)
        })), !1;
        ge.event.add(this, "beforeactivate._change", function(e) {
          var t = e.target;
          Ve.test(t.nodeName) && !ge._data(t, "change") && (ge.event.add(t, "change._change", function(e) {
            !this.parentNode || e.isSimulated || e.isTrigger || ge.event.simulate("change", this.parentNode, e)
          }), ge._data(t, "change", !0))
        })
      },
      handle: function(e) {
        var t = e.target;
        if (this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type) return e.handleObj.handler.apply(this, arguments)
      },
      teardown: function() {
        return ge.event.remove(this, "._change"), !Ve.test(this.nodeName)
      }
    }), ve.focusin || ge.each({
      focus: "focusin",
      blur: "focusout"
    }, function(e, t) {
      var i = function(e) {
        ge.event.simulate(t, e.target, ge.event.fix(e))
      };
      ge.event.special[t] = {
        setup: function() {
          var n = this.ownerDocument || this,
            o = ge._data(n, t);
          o || n.addEventListener(e, i, !0), ge._data(n, t, (o || 0) + 1)
        },
        teardown: function() {
          var n = this.ownerDocument || this,
            o = ge._data(n, t) - 1;
          o ? ge._data(n, t, o) : (n.removeEventListener(e, i, !0), ge._removeData(n, t))
        }
      }
    }), ge.fn.extend({
      on: function(e, t, i, n) {
        return C(this, e, t, i, n)
      },
      one: function(e, t, i, n) {
        return C(this, e, t, i, n, 1)
      },
      off: function(e, t, i) {
        var n, o;
        if (e && e.preventDefault && e.handleObj) return n = e.handleObj, ge(e.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
        if ("object" == typeof e) {
          for (o in e) this.off(o, t, e[o]);
          return this
        }
        return !1 !== t && "function" != typeof t || (i = t, t = void 0), !1 === i && (i = S), this.each(function() {
          ge.event.remove(this, e, i, t)
        })
      },
      trigger: function(e, t) {
        return this.each(function() {
          ge.event.trigger(e, t, this)
        })
      },
      triggerHandler: function(e, t) {
        var i = this[0];
        if (i) return ge.event.trigger(e, t, i, !0)
      }
    });
    var tt = / jQuery\d+="(?:null|\d+)"/g,
      it = new RegExp("<(?:" + Fe + ")[\\s/>]", "i"),
      nt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
      ot = /<script|<style|<link/i,
      st = /checked\s*(?:[^=]|=\s*.checked.)/i,
      rt = /^true\/(.*)/,
      at = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
      lt = m(ae),
      ct = lt.appendChild(ae.createElement("div"));
    ge.extend({
      htmlPrefilter: function(e) {
        return e.replace(nt, "<$1></$2>")
      },
      clone: function(e, t, i) {
        var n, o, s, r, a, l = ge.contains(e.ownerDocument, e);
        if (ve.html5Clone || ge.isXMLDoc(e) || !it.test("<" + e.nodeName + ">") ? s = e.cloneNode(!0) : (ct.innerHTML = e.outerHTML, ct.removeChild(s = ct.firstChild)), !(ve.noCloneEvent && ve.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ge.isXMLDoc(e)))
          for (n = y(s), a = y(e), r = 0; null != (o = a[r]); ++r) n[r] && j(o, n[r]);
        if (t)
          if (i)
            for (a = a || y(e), n = n || y(s), r = 0; null != (o = a[r]); r++) L(o, n[r]);
          else L(e, s);
        return n = y(s, "script"), n.length > 0 && b(n, !l && y(e, "script")), n = a = o = null, s
      },
      cleanData: function(e, t) {
        for (var i, n, o, s, r = 0, a = ge.expando, l = ge.cache, c = ve.attributes, d = ge.event.special; null != (i = e[r]); r++)
          if ((t || Pe(i)) && (o = i[a], s = o && l[o])) {
            if (s.events)
              for (n in s.events) d[n] ? ge.event.remove(i, n) : ge.removeEvent(i, n, s.handle);
            l[o] && (delete l[o], c || void 0 === i.removeAttribute ? i[a] = void 0 : i.removeAttribute(a), re.push(o))
          }
      }
    }), ge.fn.extend({
      domManip: H,
      detach: function(e) {
        return _(this, e, !0)
      },
      remove: function(e) {
        return _(this, e)
      },
      text: function(e) {
        return Xe(this, function(e) {
          return void 0 === e ? ge.text(this) : this.empty().append((this[0] && this[0].ownerDocument || ae).createTextNode(e))
        }, null, e, arguments.length)
      },
      append: function() {
        return H(this, arguments, function(e) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            $(this, e).appendChild(e)
          }
        })
      },
      prepend: function() {
        return H(this, arguments, function(e) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var t = $(this, e);
            t.insertBefore(e, t.firstChild)
          }
        })
      },
      before: function() {
        return H(this, arguments, function(e) {
          this.parentNode && this.parentNode.insertBefore(e, this)
        })
      },
      after: function() {
        return H(this, arguments, function(e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
        })
      },
      empty: function() {
        for (var e, t = 0; null != (e = this[t]); t++) {
          for (1 === e.nodeType && ge.cleanData(y(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
          e.options && ge.nodeName(e, "select") && (e.options.length = 0)
        }
        return this
      },
      clone: function(e, t) {
        return e = null != e && e, t = null == t ? e : t, this.map(function() {
          return ge.clone(this, e, t)
        })
      },
      html: function(e) {
        return Xe(this, function(e) {
          var t = this[0] || {},
            i = 0,
            n = this.length;
          if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(tt, "") : void 0;
          if ("string" == typeof e && !ot.test(e) && (ve.htmlSerialize || !it.test(e)) && (ve.leadingWhitespace || !qe.test(e)) && !Ue[(ze.exec(e) || ["", ""])[1].toLowerCase()]) {
            e = ge.htmlPrefilter(e);
            try {
              for (; i < n; i++) t = this[i] || {}, 1 === t.nodeType && (ge.cleanData(y(t, !1)), t.innerHTML = e);
              t = 0
            } catch (e) {}
          }
          t && this.empty().append(e)
        }, null, e, arguments.length)
      },
      replaceWith: function() {
        var e = [];
        return H(this, arguments, function(t) {
          var i = this.parentNode;
          ge.inArray(this, e) < 0 && (ge.cleanData(y(this)), i && i.replaceChild(t, this))
        }, e)
      }
    }), ge.each({
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith"
    }, function(e, t) {
      ge.fn[e] = function(e) {
        for (var i, n = 0, o = [], s = ge(e), r = s.length - 1; n <= r; n++) i = n === r ? this : this.clone(!0), ge(s[n])[t](i), de.apply(o, i.get());
        return this.pushStack(o)
      }
    });
    var dt, ut = {
        HTML: "block",
        BODY: "block"
      },
      pt = /^margin/,
      ft = new RegExp("^(" + Re + ")(?!px)[a-z%]+$", "i"),
      ht = function(e, t, i, n) {
        var o, s, r = {};
        for (s in t) r[s] = e.style[s], e.style[s] = t[s];
        o = i.apply(e, n || []);
        for (s in t) e.style[s] = r[s];
        return o
      },
      vt = ae.documentElement;
    ! function() {
      function e() {
        var e, d, u = ae.documentElement;
        u.appendChild(l), c.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", t = o = a = !1, n = r = !0, i.getComputedStyle && (d = i.getComputedStyle(c), t = "1%" !== (d || {}).top, a = "2px" === (d || {}).marginLeft, o = "4px" === (d || {
          width: "4px"
        }).width, c.style.marginRight = "50%", n = "4px" === (d || {
          marginRight: "4px"
        }).marginRight, e = c.appendChild(ae.createElement("div")), e.style.cssText = c.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", e.style.marginRight = e.style.width = "0", c.style.width = "1px", r = !parseFloat((i.getComputedStyle(e) || {}).marginRight), c.removeChild(e)), c.style.display = "none", s = 0 === c.getClientRects().length, s && (c.style.display = "", c.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", c.childNodes[0].style.borderCollapse = "separate", e = c.getElementsByTagName("td"), e[0].style.cssText = "margin:0;border:0;padding:0;display:none", (s = 0 === e[0].offsetHeight) && (e[0].style.display = "", e[1].style.display = "none", s = 0 === e[0].offsetHeight)), u.removeChild(l)
      }
      var t, n, o, s, r, a, l = ae.createElement("div"),
        c = ae.createElement("div");
      c.style && (c.style.cssText = "float:left;opacity:.5", ve.opacity = "0.5" === c.style.opacity, ve.cssFloat = !!c.style.cssFloat, c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", ve.clearCloneStyle = "content-box" === c.style.backgroundClip, l = ae.createElement("div"), l.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", c.innerHTML = "", l.appendChild(c), ve.boxSizing = "" === c.style.boxSizing || "" === c.style.MozBoxSizing || "" === c.style.WebkitBoxSizing, ge.extend(ve, {
        reliableHiddenOffsets: function() {
          return null == t && e(), s
        },
        boxSizingReliable: function() {
          return null == t && e(), o
        },
        pixelMarginRight: function() {
          return null == t && e(), n
        },
        pixelPosition: function() {
          return null == t && e(), t
        },
        reliableMarginRight: function() {
          return null == t && e(), r
        },
        reliableMarginLeft: function() {
          return null == t && e(), a
        }
      }))
    }();
    var gt, mt, yt = /^(top|right|bottom|left)$/;
    i.getComputedStyle ? (gt = function(e) {
      var t = e.ownerDocument.defaultView;
      return t && t.opener || (t = i), t.getComputedStyle(e)
    }, mt = function(e, t, i) {
      var n, o, s, r, a = e.style;
      return i = i || gt(e), r = i ? i.getPropertyValue(t) || i[t] : void 0, "" !== r && void 0 !== r || ge.contains(e.ownerDocument, e) || (r = ge.style(e, t)), i && !ve.pixelMarginRight() && ft.test(r) && pt.test(t) && (n = a.width, o = a.minWidth, s = a.maxWidth, a.minWidth = a.maxWidth = a.width = r, r = i.width, a.width = n, a.minWidth = o, a.maxWidth = s), void 0 === r ? r : r + ""
    }) : vt.currentStyle && (gt = function(e) {
      return e.currentStyle
    }, mt = function(e, t, i) {
      var n, o, s, r, a = e.style;
      return i = i || gt(e), r = i ? i[t] : void 0, null == r && a && a[t] && (r = a[t]), ft.test(r) && !yt.test(t) && (n = a.left, o = e.runtimeStyle, s = o && o.left, s && (o.left = e.currentStyle.left), a.left = "fontSize" === t ? "1em" : r, r = a.pixelLeft + "px", a.left = n, s && (o.left = s)), void 0 === r ? r : r + "" || "auto"
    });
    var bt = /alpha\([^)]*\)/i,
      wt = /opacity\s*=\s*([^)]*)/i,
      xt = /^(none|table(?!-c[ea]).+)/,
      kt = new RegExp("^(" + Re + ")(.*)$", "i"),
      St = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
      },
      Tt = {
        letterSpacing: "0",
        fontWeight: "400"
      },
      Ct = ["Webkit", "O", "Moz", "ms"],
      $t = ae.createElement("div").style;
    ge.extend({
      cssHooks: {
        opacity: {
          get: function(e, t) {
            if (t) {
              var i = mt(e, "opacity");
              return "" === i ? "1" : i
            }
          }
        }
      },
      cssNumber: {
        animationIterationCount: !0,
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0
      },
      cssProps: {
        float: ve.cssFloat ? "cssFloat" : "styleFloat"
      },
      style: function(e, t, i, n) {
        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
          var o, s, r, a = ge.camelCase(t),
            l = e.style;
          if (t = ge.cssProps[a] || (ge.cssProps[a] = N(a) || a), r = ge.cssHooks[t] || ge.cssHooks[a], void 0 === i) return r && "get" in r && void 0 !== (o = r.get(e, !1, n)) ? o : l[t];
          if (s = typeof i, "string" === s && (o = We.exec(i)) && o[1] && (i = g(e, t, o), s = "number"), null != i && i === i && ("number" === s && (i += o && o[3] || (ge.cssNumber[a] ? "" : "px")), ve.clearCloneStyle || "" !== i || 0 !== t.indexOf("background") || (l[t] = "inherit"), !(r && "set" in r && void 0 === (i = r.set(e, i, n))))) try {
            l[t] = i
          } catch (e) {}
        }
      },
      css: function(e, t, i, n) {
        var o, s, r, a = ge.camelCase(t);
        return t = ge.cssProps[a] || (ge.cssProps[a] = N(a) || a), r = ge.cssHooks[t] || ge.cssHooks[a], r && "get" in r && (s = r.get(e, !0, i)), void 0 === s && (s = mt(e, t, n)), "normal" === s && t in Tt && (s = Tt[t]), "" === i || i ? (o = parseFloat(s), !0 === i || isFinite(o) ? o || 0 : s) : s
      }
    }), ge.each(["height", "width"], function(e, t) {
      ge.cssHooks[t] = {
        get: function(e, i, n) {
          if (i) return xt.test(ge.css(e, "display")) && 0 === e.offsetWidth ? ht(e, St, function() {
            return I(e, t, n)
          }) : I(e, t, n)
        },
        set: function(e, i, n) {
          var o = n && gt(e);
          return W(e, i, n ? M(e, t, n, ve.boxSizing && "border-box" === ge.css(e, "boxSizing", !1, o), o) : 0)
        }
      }
    }), ve.opacity || (ge.cssHooks.opacity = {
      get: function(e, t) {
        return wt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
      },
      set: function(e, t) {
        var i = e.style,
          n = e.currentStyle,
          o = ge.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
          s = n && n.filter || i.filter || "";
        i.zoom = 1, (t >= 1 || "" === t) && "" === ge.trim(s.replace(bt, "")) && i.removeAttribute && (i.removeAttribute("filter"), "" === t || n && !n.filter) || (i.filter = bt.test(s) ? s.replace(bt, o) : s + " " + o)
      }
    }), ge.cssHooks.marginRight = O(ve.reliableMarginRight, function(e, t) {
      if (t) return ht(e, {
        display: "inline-block"
      }, mt, [e, "marginRight"])
    }), ge.cssHooks.marginLeft = O(ve.reliableMarginLeft, function(e, t) {
      if (t) return (parseFloat(mt(e, "marginLeft")) || (ge.contains(e.ownerDocument, e) ? e.getBoundingClientRect().left - ht(e, {
        marginLeft: 0
      }, function() {
        return e.getBoundingClientRect().left
      }) : 0)) + "px"
    }), ge.each({
      margin: "",
      padding: "",
      border: "Width"
    }, function(e, t) {
      ge.cssHooks[e + t] = {
        expand: function(i) {
          for (var n = 0, o = {}, s = "string" == typeof i ? i.split(" ") : [i]; n < 4; n++) o[e + Me[n] + t] = s[n] || s[n - 2] || s[0];
          return o
        }
      }, pt.test(e) || (ge.cssHooks[e + t].set = W)
    }), ge.fn.extend({
      css: function(e, t) {
        return Xe(this, function(e, t, i) {
          var n, o, s = {},
            r = 0;
          if (ge.isArray(t)) {
            for (n = gt(e), o = t.length; r < o; r++) s[t[r]] = ge.css(e, t[r], !1, n);
            return s
          }
          return void 0 !== i ? ge.style(e, t, i) : ge.css(e, t)
        }, e, t, arguments.length > 1)
      },
      show: function() {
        return R(this, !0)
      },
      hide: function() {
        return R(this)
      },
      toggle: function(e) {
        return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
          Ie(this) ? ge(this).show() : ge(this).hide()
        })
      }
    }), ge.Tween = X, X.prototype = {
      constructor: X,
      init: function(e, t, i, n, o, s) {
        this.elem = e, this.prop = i, this.easing = o || ge.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = n, this.unit = s || (ge.cssNumber[i] ? "" : "px")
      },
      cur: function() {
        var e = X.propHooks[this.prop];
        return e && e.get ? e.get(this) : X.propHooks._default.get(this)
      },
      run: function(e) {
        var t, i = X.propHooks[this.prop];
        return this.options.duration ? this.pos = t = ge.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : X.propHooks._default.set(this), this
      }
    }, X.prototype.init.prototype = X.prototype, X.propHooks = {
      _default: {
        get: function(e) {
          var t;
          return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = ge.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
        },
        set: function(e) {
          ge.fx.step[e.prop] ? ge.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[ge.cssProps[e.prop]] && !ge.cssHooks[e.prop] ? e.elem[e.prop] = e.now : ge.style(e.elem, e.prop, e.now + e.unit)
        }
      }
    }, X.propHooks.scrollTop = X.propHooks.scrollLeft = {
      set: function(e) {
        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
      }
    }, ge.easing = {
      linear: function(e) {
        return e
      },
      swing: function(e) {
        return .5 - Math.cos(e * Math.PI) / 2
      },
      _default: "swing"
    }, ge.fx = X.prototype.init, ge.fx.step = {};
    var At, Et, Lt = /^(?:toggle|show|hide)$/,
      jt = /queueHooks$/;
    ge.Animation = ge.extend(U, {
        tweeners: {
          "*": [function(e, t) {
            var i = this.createTween(e, t);
            return g(i.elem, e, We.exec(t), i), i
          }]
        },
        tweener: function(e, t) {
          ge.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(He);
          for (var i, n = 0, o = e.length; n < o; n++) i = e[n], U.tweeners[i] = U.tweeners[i] || [], U.tweeners[i].unshift(t)
        },
        prefilters: [q],
        prefilter: function(e, t) {
          t ? U.prefilters.unshift(e) : U.prefilters.push(e)
        }
      }), ge.speed = function(e, t, i) {
        var n = e && "object" == typeof e ? ge.extend({}, e) : {
          complete: i || !i && t || ge.isFunction(e) && e,
          duration: e,
          easing: i && t || t && !ge.isFunction(t) && t
        };
        return n.duration = ge.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in ge.fx.speeds ? ge.fx.speeds[n.duration] : ge.fx.speeds._default, null != n.queue && !0 !== n.queue || (n.queue = "fx"), n.old = n.complete, n.complete = function() {
          ge.isFunction(n.old) && n.old.call(this), n.queue && ge.dequeue(this, n.queue)
        }, n
      }, ge.fn.extend({
        fadeTo: function(e, t, i, n) {
          return this.filter(Ie).css("opacity", 0).show().end().animate({
            opacity: t
          }, e, i, n)
        },
        animate: function(e, t, i, n) {
          var o = ge.isEmptyObject(e),
            s = ge.speed(t, i, n),
            r = function() {
              var t = U(this, ge.extend({}, e), s);
              (o || ge._data(this, "finish")) && t.stop(!0)
            };
          return r.finish = r, o || !1 === s.queue ? this.each(r) : this.queue(s.queue, r)
        },
        stop: function(e, t, i) {
          var n = function(e) {
            var t = e.stop;
            delete e.stop, t(i)
          };
          return "string" != typeof e && (i = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
            var t = !0,
              o = null != e && e + "queueHooks",
              s = ge.timers,
              r = ge._data(this);
            if (o) r[o] && r[o].stop && n(r[o]);
            else
              for (o in r) r[o] && r[o].stop && jt.test(o) && n(r[o]);
            for (o = s.length; o--;) s[o].elem !== this || null != e && s[o].queue !== e || (s[o].anim.stop(i), t = !1, s.splice(o, 1));
            !t && i || ge.dequeue(this, e)
          })
        },
        finish: function(e) {
          return !1 !== e && (e = e || "fx"), this.each(function() {
            var t, i = ge._data(this),
              n = i[e + "queue"],
              o = i[e + "queueHooks"],
              s = ge.timers,
              r = n ? n.length : 0;
            for (i.finish = !0, ge.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = s.length; t--;) s[t].elem === this && s[t].queue === e && (s[t].anim.stop(!0), s.splice(t, 1));
            for (t = 0; t < r; t++) n[t] && n[t].finish && n[t].finish.call(this);
            delete i.finish
          })
        }
      }), ge.each(["toggle", "show", "hide"], function(e, t) {
        var i = ge.fn[t];
        ge.fn[t] = function(e, n, o) {
          return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(z(t, !0), e, n, o)
        }
      }), ge.each({
        slideDown: z("show"),
        slideUp: z("hide"),
        slideToggle: z("toggle"),
        fadeIn: {
          opacity: "show"
        },
        fadeOut: {
          opacity: "hide"
        },
        fadeToggle: {
          opacity: "toggle"
        }
      }, function(e, t) {
        ge.fn[e] = function(e, i, n) {
          return this.animate(t, e, i, n)
        }
      }), ge.timers = [], ge.fx.tick = function() {
        var e, t = ge.timers,
          i = 0;
        for (At = ge.now(); i < t.length; i++)(e = t[i])() || t[i] !== e || t.splice(i--, 1);
        t.length || ge.fx.stop(), At = void 0
      }, ge.fx.timer = function(e) {
        ge.timers.push(e), e() ? ge.fx.start() : ge.timers.pop()
      }, ge.fx.interval = 13, ge.fx.start = function() {
        Et || (Et = i.setInterval(ge.fx.tick, ge.fx.interval))
      }, ge.fx.stop = function() {
        i.clearInterval(Et), Et = null
      }, ge.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
      }, ge.fn.delay = function(e, t) {
        return e = ge.fx ? ge.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
          var o = i.setTimeout(t, e);
          n.stop = function() {
            i.clearTimeout(o)
          }
        })
      },
      function() {
        var e, t = ae.createElement("input"),
          i = ae.createElement("div"),
          n = ae.createElement("select"),
          o = n.appendChild(ae.createElement("option"));
        i = ae.createElement("div"), i.setAttribute("className", "t"), i.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = i.getElementsByTagName("a")[0], t.setAttribute("type", "checkbox"), i.appendChild(t), e = i.getElementsByTagName("a")[0], e.style.cssText = "top:1px", ve.getSetAttribute = "t" !== i.className, ve.style = /top/.test(e.getAttribute("style")), ve.hrefNormalized = "/a" === e.getAttribute("href"), ve.checkOn = !!t.value, ve.optSelected = o.selected, ve.enctype = !!ae.createElement("form").enctype, n.disabled = !0, ve.optDisabled = !o.disabled, t = ae.createElement("input"), t.setAttribute("value", ""), ve.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), ve.radioValue = "t" === t.value
      }();
    var Ht = /\r/g,
      _t = /[\x20\t\r\n\f]+/g;
    ge.fn.extend({
      val: function(e) {
        var t, i, n, o = this[0]; {
          if (arguments.length) return n = ge.isFunction(e), this.each(function(i) {
            var o;
            1 === this.nodeType && (o = n ? e.call(this, i, ge(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : ge.isArray(o) && (o = ge.map(o, function(e) {
              return null == e ? "" : e + ""
            })), (t = ge.valHooks[this.type] || ge.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
          });
          if (o) return (t = ge.valHooks[o.type] || ge.valHooks[o.nodeName.toLowerCase()]) && "get" in t && void 0 !== (i = t.get(o, "value")) ? i : (i = o.value, "string" == typeof i ? i.replace(Ht, "") : null == i ? "" : i)
        }
      }
    }), ge.extend({
      valHooks: {
        option: {
          get: function(e) {
            var t = ge.find.attr(e, "value");
            return null != t ? t : ge.trim(ge.text(e)).replace(_t, " ")
          }
        },
        select: {
          get: function(e) {
            for (var t, i, n = e.options, o = e.selectedIndex, s = "select-one" === e.type || o < 0, r = s ? null : [], a = s ? o + 1 : n.length, l = o < 0 ? a : s ? o : 0; l < a; l++)
              if (i = n[l], (i.selected || l === o) && (ve.optDisabled ? !i.disabled : null === i.getAttribute("disabled")) && (!i.parentNode.disabled || !ge.nodeName(i.parentNode, "optgroup"))) {
                if (t = ge(i).val(), s) return t;
                r.push(t)
              } return r
          },
          set: function(e, t) {
            for (var i, n, o = e.options, s = ge.makeArray(t), r = o.length; r--;)
              if (n = o[r], ge.inArray(ge.valHooks.option.get(n), s) > -1) try {
                n.selected = i = !0
              } catch (e) {
                n.scrollHeight
              } else n.selected = !1;
            return i || (e.selectedIndex = -1), o
          }
        }
      }
    }), ge.each(["radio", "checkbox"], function() {
      ge.valHooks[this] = {
        set: function(e, t) {
          if (ge.isArray(t)) return e.checked = ge.inArray(ge(e).val(), t) > -1
        }
      }, ve.checkOn || (ge.valHooks[this].get = function(e) {
        return null === e.getAttribute("value") ? "on" : e.value
      })
    });
    var Dt, Pt, Ot = ge.expr.attrHandle,
      Nt = /^(?:checked|selected)$/i,
      Rt = ve.getSetAttribute,
      Wt = ve.input;
    ge.fn.extend({
      attr: function(e, t) {
        return Xe(this, ge.attr, e, t, arguments.length > 1)
      },
      removeAttr: function(e) {
        return this.each(function() {
          ge.removeAttr(this, e)
        })
      }
    }), ge.extend({
      attr: function(e, t, i) {
        var n, o, s = e.nodeType;
        if (3 !== s && 8 !== s && 2 !== s) return void 0 === e.getAttribute ? ge.prop(e, t, i) : (1 === s && ge.isXMLDoc(e) || (t = t.toLowerCase(), o = ge.attrHooks[t] || (ge.expr.match.bool.test(t) ? Pt : Dt)), void 0 !== i ? null === i ? void ge.removeAttr(e, t) : o && "set" in o && void 0 !== (n = o.set(e, i, t)) ? n : (e.setAttribute(t, i + ""), i) : o && "get" in o && null !== (n = o.get(e, t)) ? n : (n = ge.find.attr(e, t), null == n ? void 0 : n))
      },
      attrHooks: {
        type: {
          set: function(e, t) {
            if (!ve.radioValue && "radio" === t && ge.nodeName(e, "input")) {
              var i = e.value;
              return e.setAttribute("type", t), i && (e.value = i), t
            }
          }
        }
      },
      removeAttr: function(e, t) {
        var i, n, o = 0,
          s = t && t.match(He);
        if (s && 1 === e.nodeType)
          for (; i = s[o++];) n = ge.propFix[i] || i, ge.expr.match.bool.test(i) ? Wt && Rt || !Nt.test(i) ? e[n] = !1 : e[ge.camelCase("default-" + i)] = e[n] = !1 : ge.attr(e, i, ""), e.removeAttribute(Rt ? i : n)
      }
    }), Pt = {
      set: function(e, t, i) {
        return !1 === t ? ge.removeAttr(e, i) : Wt && Rt || !Nt.test(i) ? e.setAttribute(!Rt && ge.propFix[i] || i, i) : e[ge.camelCase("default-" + i)] = e[i] = !0, i
      }
    }, ge.each(ge.expr.match.bool.source.match(/\w+/g), function(e, t) {
      var i = Ot[t] || ge.find.attr;
      Wt && Rt || !Nt.test(t) ? Ot[t] = function(e, t, n) {
        var o, s;
        return n || (s = Ot[t], Ot[t] = o, o = null != i(e, t, n) ? t.toLowerCase() : null, Ot[t] = s), o
      } : Ot[t] = function(e, t, i) {
        if (!i) return e[ge.camelCase("default-" + t)] ? t.toLowerCase() : null
      }
    }), Wt && Rt || (ge.attrHooks.value = {
      set: function(e, t, i) {
        if (!ge.nodeName(e, "input")) return Dt && Dt.set(e, t, i);
        e.defaultValue = t
      }
    }), Rt || (Dt = {
      set: function(e, t, i) {
        var n = e.getAttributeNode(i);
        if (n || e.setAttributeNode(n = e.ownerDocument.createAttribute(i)), n.value = t += "", "value" === i || t === e.getAttribute(i)) return t
      }
    }, Ot.id = Ot.name = Ot.coords = function(e, t, i) {
      var n;
      if (!i) return (n = e.getAttributeNode(t)) && "" !== n.value ? n.value : null
    }, ge.valHooks.button = {
      get: function(e, t) {
        var i = e.getAttributeNode(t);
        if (i && i.specified) return i.value
      },
      set: Dt.set
    }, ge.attrHooks.contenteditable = {
      set: function(e, t, i) {
        Dt.set(e, "" !== t && t, i)
      }
    }, ge.each(["width", "height"], function(e, t) {
      ge.attrHooks[t] = {
        set: function(e, i) {
          if ("" === i) return e.setAttribute(t, "auto"), i
        }
      }
    })), ve.style || (ge.attrHooks.style = {
      get: function(e) {
        return e.style.cssText || void 0
      },
      set: function(e, t) {
        return e.style.cssText = t + ""
      }
    });
    var Mt = /^(?:input|select|textarea|button|object)$/i,
      It = /^(?:a|area)$/i;
    ge.fn.extend({
      prop: function(e, t) {
        return Xe(this, ge.prop, e, t, arguments.length > 1)
      },
      removeProp: function(e) {
        return e = ge.propFix[e] || e, this.each(function() {
          try {
            this[e] = void 0, delete this[e]
          } catch (e) {}
        })
      }
    }), ge.extend({
      prop: function(e, t, i) {
        var n, o, s = e.nodeType;
        if (3 !== s && 8 !== s && 2 !== s) return 1 === s && ge.isXMLDoc(e) || (t = ge.propFix[t] || t, o = ge.propHooks[t]), void 0 !== i ? o && "set" in o && void 0 !== (n = o.set(e, i, t)) ? n : e[t] = i : o && "get" in o && null !== (n = o.get(e, t)) ? n : e[t]
      },
      propHooks: {
        tabIndex: {
          get: function(e) {
            var t = ge.find.attr(e, "tabindex");
            return t ? parseInt(t, 10) : Mt.test(e.nodeName) || It.test(e.nodeName) && e.href ? 0 : -1
          }
        }
      },
      propFix: {
        for: "htmlFor",
        class: "className"
      }
    }), ve.hrefNormalized || ge.each(["href", "src"], function(e, t) {
      ge.propHooks[t] = {
        get: function(e) {
          return e.getAttribute(t, 4)
        }
      }
    }), ve.optSelected || (ge.propHooks.selected = {
      get: function(e) {
        var t = e.parentNode;
        return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
      },
      set: function(e) {
        var t = e.parentNode;
        t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
      }
    }), ge.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
      ge.propFix[this.toLowerCase()] = this
    }), ve.enctype || (ge.propFix.enctype = "encoding");
    var Xt = /[\t\r\n\f]/g;
    ge.fn.extend({
      addClass: function(e) {
        var t, i, n, o, s, r, a, l = 0;
        if (ge.isFunction(e)) return this.each(function(t) {
          ge(this).addClass(e.call(this, t, K(this)))
        });
        if ("string" == typeof e && e)
          for (t = e.match(He) || []; i = this[l++];)
            if (o = K(i), n = 1 === i.nodeType && (" " + o + " ").replace(Xt, " ")) {
              for (r = 0; s = t[r++];) n.indexOf(" " + s + " ") < 0 && (n += s + " ");
              a = ge.trim(n), o !== a && ge.attr(i, "class", a)
            } return this
      },
      removeClass: function(e) {
        var t, i, n, o, s, r, a, l = 0;
        if (ge.isFunction(e)) return this.each(function(t) {
          ge(this).removeClass(e.call(this, t, K(this)))
        });
        if (!arguments.length) return this.attr("class", "");
        if ("string" == typeof e && e)
          for (t = e.match(He) || []; i = this[l++];)
            if (o = K(i), n = 1 === i.nodeType && (" " + o + " ").replace(Xt, " ")) {
              for (r = 0; s = t[r++];)
                for (; n.indexOf(" " + s + " ") > -1;) n = n.replace(" " + s + " ", " ");
              a = ge.trim(n), o !== a && ge.attr(i, "class", a)
            } return this
      },
      toggleClass: function(e, t) {
        var i = typeof e;
        return "boolean" == typeof t && "string" === i ? t ? this.addClass(e) : this.removeClass(e) : ge.isFunction(e) ? this.each(function(i) {
          ge(this).toggleClass(e.call(this, i, K(this), t), t)
        }) : this.each(function() {
          var t, n, o, s;
          if ("string" === i)
            for (n = 0, o = ge(this), s = e.match(He) || []; t = s[n++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
          else void 0 !== e && "boolean" !== i || (t = K(this), t && ge._data(this, "__className__", t), ge.attr(this, "class", t || !1 === e ? "" : ge._data(this, "__className__") || ""))
        })
      },
      hasClass: function(e) {
        var t, i, n = 0;
        for (t = " " + e + " "; i = this[n++];)
          if (1 === i.nodeType && (" " + K(i) + " ").replace(Xt, " ").indexOf(t) > -1) return !0;
        return !1
      }
    }), ge.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
      ge.fn[t] = function(e, i) {
        return arguments.length > 0 ? this.on(t, null, e, i) : this.trigger(t)
      }
    }), ge.fn.extend({
      hover: function(e, t) {
        return this.mouseenter(e).mouseleave(t || e)
      }
    });
    var Yt = i.location,
      zt = ge.now(),
      Bt = /\?/,
      qt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    ge.parseJSON = function(e) {
      if (i.JSON && i.JSON.parse) return i.JSON.parse(e + "");
      var t, n = null,
        o = ge.trim(e + "");
      return o && !ge.trim(o.replace(qt, function(e, i, o, s) {
        return t && i && (n = 0), 0 === n ? e : (t = o || i, n += !s - !o, "")
      })) ? Function("return " + o)() : ge.error("Invalid JSON: " + e)
    }, ge.parseXML = function(e) {
      var t, n;
      if (!e || "string" != typeof e) return null;
      try {
        i.DOMParser ? (n = new i.DOMParser, t = n.parseFromString(e, "text/xml")) : (t = new i.ActiveXObject("Microsoft.XMLDOM"), t.async = "false", t.loadXML(e))
      } catch (e) {
        t = void 0
      }
      return t && t.documentElement && !t.getElementsByTagName("parsererror").length || ge.error("Invalid XML: " + e), t
    };
    var Ft = /#.*$/,
      Ut = /([?&])_=[^&]*/,
      Kt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
      Gt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      Vt = /^(?:GET|HEAD)$/,
      Jt = /^\/\//,
      Qt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
      Zt = {},
      ei = {},
      ti = "*/".concat("*"),
      ii = Yt.href,
      ni = Qt.exec(ii.toLowerCase()) || [];
    ge.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: ii,
        type: "GET",
        isLocal: Gt.test(ni[1]),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": ti,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript"
        },
        contents: {
          xml: /\bxml\b/,
          html: /\bhtml/,
          json: /\bjson\b/
        },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON"
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": ge.parseJSON,
          "text xml": ge.parseXML
        },
        flatOptions: {
          url: !0,
          context: !0
        }
      },
      ajaxSetup: function(e, t) {
        return t ? J(J(e, ge.ajaxSettings), t) : J(ge.ajaxSettings, e)
      },
      ajaxPrefilter: G(Zt),
      ajaxTransport: G(ei),
      ajax: function(e, t) {
        function n(e, t, n, o) {
          var s, u, y, b, x, S = t;
          2 !== w && (w = 2, l && i.clearTimeout(l), d = void 0, a = o || "", k.readyState = e > 0 ? 4 : 0, s = e >= 200 && e < 300 || 304 === e, n && (b = Q(p, k, n)), b = Z(p, b, k, s), s ? (p.ifModified && (x = k.getResponseHeader("Last-Modified"), x && (ge.lastModified[r] = x), (x = k.getResponseHeader("etag")) && (ge.etag[r] = x)), 204 === e || "HEAD" === p.type ? S = "nocontent" : 304 === e ? S = "notmodified" : (S = b.state, u = b.data, y = b.error, s = !y)) : (y = S, !e && S || (S = "error", e < 0 && (e = 0))), k.status = e, k.statusText = (t || S) + "", s ? v.resolveWith(f, [u, S, k]) : v.rejectWith(f, [k, S, y]), k.statusCode(m), m = void 0, c && h.trigger(s ? "ajaxSuccess" : "ajaxError", [k, p, s ? u : y]), g.fireWith(f, [k, S]), c && (h.trigger("ajaxComplete", [k, p]), --ge.active || ge.event.trigger("ajaxStop")))
        }
        "object" == typeof e && (t = e, e = void 0), t = t || {};
        var o, s, r, a, l, c, d, u, p = ge.ajaxSetup({}, t),
          f = p.context || p,
          h = p.context && (f.nodeType || f.jquery) ? ge(f) : ge.event,
          v = ge.Deferred(),
          g = ge.Callbacks("once memory"),
          m = p.statusCode || {},
          y = {},
          b = {},
          w = 0,
          x = "canceled",
          k = {
            readyState: 0,
            getResponseHeader: function(e) {
              var t;
              if (2 === w) {
                if (!u)
                  for (u = {}; t = Kt.exec(a);) u[t[1].toLowerCase()] = t[2];
                t = u[e.toLowerCase()]
              }
              return null == t ? null : t
            },
            getAllResponseHeaders: function() {
              return 2 === w ? a : null
            },
            setRequestHeader: function(e, t) {
              var i = e.toLowerCase();
              return w || (e = b[i] = b[i] || e, y[e] = t), this
            },
            overrideMimeType: function(e) {
              return w || (p.mimeType = e), this
            },
            statusCode: function(e) {
              var t;
              if (e)
                if (w < 2)
                  for (t in e) m[t] = [m[t], e[t]];
                else k.always(e[k.status]);
              return this
            },
            abort: function(e) {
              var t = e || x;
              return d && d.abort(t), n(0, t), this
            }
          };
        if (v.promise(k).complete = g.add, k.success = k.done, k.error = k.fail, p.url = ((e || p.url || ii) + "").replace(Ft, "").replace(Jt, ni[1] + "//"), p.type = t.method || t.type || p.method || p.type, p.dataTypes = ge.trim(p.dataType || "*").toLowerCase().match(He) || [""], null == p.crossDomain && (o = Qt.exec(p.url.toLowerCase()), p.crossDomain = !(!o || o[1] === ni[1] && o[2] === ni[2] && (o[3] || ("http:" === o[1] ? "80" : "443")) === (ni[3] || ("http:" === ni[1] ? "80" : "443")))), p.data && p.processData && "string" != typeof p.data && (p.data = ge.param(p.data, p.traditional)), V(Zt, p, t, k), 2 === w) return k;
        c = ge.event && p.global, c && 0 == ge.active++ && ge.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Vt.test(p.type), r = p.url, p.hasContent || (p.data && (r = p.url += (Bt.test(r) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (p.url = Ut.test(r) ? r.replace(Ut, "$1_=" + zt++) : r + (Bt.test(r) ? "&" : "?") + "_=" + zt++)), p.ifModified && (ge.lastModified[r] && k.setRequestHeader("If-Modified-Since", ge.lastModified[r]), ge.etag[r] && k.setRequestHeader("If-None-Match", ge.etag[r])), (p.data && p.hasContent && !1 !== p.contentType || t.contentType) && k.setRequestHeader("Content-Type", p.contentType), k.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + ti + "; q=0.01" : "") : p.accepts["*"]);
        for (s in p.headers) k.setRequestHeader(s, p.headers[s]);
        if (p.beforeSend && (!1 === p.beforeSend.call(f, k, p) || 2 === w)) return k.abort();
        x = "abort";
        for (s in {
            success: 1,
            error: 1,
            complete: 1
          }) k[s](p[s]);
        if (d = V(ei, p, t, k)) {
          if (k.readyState = 1, c && h.trigger("ajaxSend", [k, p]), 2 === w) return k;
          p.async && p.timeout > 0 && (l = i.setTimeout(function() {
            k.abort("timeout")
          }, p.timeout));
          try {
            w = 1, d.send(y, n)
          } catch (e) {
            if (!(w < 2)) throw e;
            n(-1, e)
          }
        } else n(-1, "No Transport");
        return k
      },
      getJSON: function(e, t, i) {
        return ge.get(e, t, i, "json")
      },
      getScript: function(e, t) {
        return ge.get(e, void 0, t, "script")
      }
    }), ge.each(["get", "post"], function(e, t) {
      ge[t] = function(e, i, n, o) {
        return ge.isFunction(i) && (o = o || n, n = i, i = void 0), ge.ajax(ge.extend({
          url: e,
          type: t,
          dataType: o,
          data: i,
          success: n
        }, ge.isPlainObject(e) && e))
      }
    }), ge._evalUrl = function(e) {
      return ge.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        throws: !0
      })
    }, ge.fn.extend({
      wrapAll: function(e) {
        if (ge.isFunction(e)) return this.each(function(t) {
          ge(this).wrapAll(e.call(this, t))
        });
        if (this[0]) {
          var t = ge(e, this[0].ownerDocument).eq(0).clone(!0);
          this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
            for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
            return e
          }).append(this)
        }
        return this
      },
      wrapInner: function(e) {
        return ge.isFunction(e) ? this.each(function(t) {
          ge(this).wrapInner(e.call(this, t))
        }) : this.each(function() {
          var t = ge(this),
            i = t.contents();
          i.length ? i.wrapAll(e) : t.append(e)
        })
      },
      wrap: function(e) {
        var t = ge.isFunction(e);
        return this.each(function(i) {
          ge(this).wrapAll(t ? e.call(this, i) : e)
        })
      },
      unwrap: function() {
        return this.parent().each(function() {
          ge.nodeName(this, "body") || ge(this).replaceWith(this.childNodes)
        }).end()
      }
    }), ge.expr.filters.hidden = function(e) {
      return ve.reliableHiddenOffsets() ? e.offsetWidth <= 0 && e.offsetHeight <= 0 && !e.getClientRects().length : te(e)
    }, ge.expr.filters.visible = function(e) {
      return !ge.expr.filters.hidden(e)
    };
    var oi = /%20/g,
      si = /\[\]$/,
      ri = /\r?\n/g,
      ai = /^(?:submit|button|image|reset|file)$/i,
      li = /^(?:input|select|textarea|keygen)/i;
    ge.param = function(e, t) {
      var i, n = [],
        o = function(e, t) {
          t = ge.isFunction(t) ? t() : null == t ? "" : t, n[n.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
      if (void 0 === t && (t = ge.ajaxSettings && ge.ajaxSettings.traditional), ge.isArray(e) || e.jquery && !ge.isPlainObject(e)) ge.each(e, function() {
        o(this.name, this.value)
      });
      else
        for (i in e) ie(i, e[i], t, o);
      return n.join("&").replace(oi, "+")
    }, ge.fn.extend({
      serialize: function() {
        return ge.param(this.serializeArray())
      },
      serializeArray: function() {
        return this.map(function() {
          var e = ge.prop(this, "elements");
          return e ? ge.makeArray(e) : this
        }).filter(function() {
          var e = this.type;
          return this.name && !ge(this).is(":disabled") && li.test(this.nodeName) && !ai.test(e) && (this.checked || !Ye.test(e))
        }).map(function(e, t) {
          var i = ge(this).val();
          return null == i ? null : ge.isArray(i) ? ge.map(i, function(e) {
            return {
              name: t.name,
              value: e.replace(ri, "\r\n")
            }
          }) : {
            name: t.name,
            value: i.replace(ri, "\r\n")
          }
        }).get()
      }
    }), ge.ajaxSettings.xhr = void 0 !== i.ActiveXObject ? function() {
      return this.isLocal ? oe() : ae.documentMode > 8 ? ne() : /^(get|post|head|put|delete|options)$/i.test(this.type) && ne() || oe()
    } : ne;
    var ci = 0,
      di = {},
      ui = ge.ajaxSettings.xhr();
    i.attachEvent && i.attachEvent("onunload", function() {
      for (var e in di) di[e](void 0, !0)
    }), ve.cors = !!ui && "withCredentials" in ui, ui = ve.ajax = !!ui, ui && ge.ajaxTransport(function(e) {
      if (!e.crossDomain || ve.cors) {
        var t;
        return {
          send: function(n, o) {
            var s, r = e.xhr(),
              a = ++ci;
            if (r.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
              for (s in e.xhrFields) r[s] = e.xhrFields[s];
            e.mimeType && r.overrideMimeType && r.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
            for (s in n) void 0 !== n[s] && r.setRequestHeader(s, n[s] + "");
            r.send(e.hasContent && e.data || null), t = function(i, n) {
              var s, l, c;
              if (t && (n || 4 === r.readyState))
                if (delete di[a], t = void 0, r.onreadystatechange = ge.noop, n) 4 !== r.readyState && r.abort();
                else {
                  c = {}, s = r.status, "string" == typeof r.responseText && (c.text = r.responseText);
                  try {
                    l = r.statusText
                  } catch (e) {
                    l = ""
                  }
                  s || !e.isLocal || e.crossDomain ? 1223 === s && (s = 204) : s = c.text ? 200 : 404
                } c && o(s, l, c, r.getAllResponseHeaders())
            }, e.async ? 4 === r.readyState ? i.setTimeout(t) : r.onreadystatechange = di[a] = t : t()
          },
          abort: function() {
            t && t(void 0, !0)
          }
        }
      }
    }), ge.ajaxSetup({
      accepts: {
        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
      },
      contents: {
        script: /\b(?:java|ecma)script\b/
      },
      converters: {
        "text script": function(e) {
          return ge.globalEval(e), e
        }
      }
    }), ge.ajaxPrefilter("script", function(e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), ge.ajaxTransport("script", function(e) {
      if (e.crossDomain) {
        var t, i = ae.head || ge("head")[0] || ae.documentElement;
        return {
          send: function(n, o) {
            t = ae.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function(e, i) {
              (i || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, i || o(200, "success"))
            }, i.insertBefore(t, i.firstChild)
          },
          abort: function() {
            t && t.onload(void 0, !0)
          }
        }
      }
    });
    var pi = [],
      fi = /(=)\?(?=&|$)|\?\?/;
    ge.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function() {
        var e = pi.pop() || ge.expando + "_" + zt++;
        return this[e] = !0, e
      }
    }), ge.ajaxPrefilter("json jsonp", function(e, t, n) {
      var o, s, r, a = !1 !== e.jsonp && (fi.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && fi.test(e.data) && "data");
      if (a || "jsonp" === e.dataTypes[0]) return o = e.jsonpCallback = ge.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(fi, "$1" + o) : !1 !== e.jsonp && (e.url += (Bt.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters["script json"] = function() {
        return r || ge.error(o + " was not called"), r[0]
      }, e.dataTypes[0] = "json", s = i[o], i[o] = function() {
        r = arguments
      }, n.always(function() {
        void 0 === s ? ge(i).removeProp(o) : i[o] = s, e[o] && (e.jsonpCallback = t.jsonpCallback, pi.push(o)), r && ge.isFunction(s) && s(r[0]), r = s = void 0
      }), "script"
    }), ge.parseHTML = function(e, t, i) {
      if (!e || "string" != typeof e) return null;
      "boolean" == typeof t && (i = t, t = !1), t = t || ae;
      var n = Ce.exec(e),
        o = !i && [];
      return n ? [t.createElement(n[1])] : (n = x([e], t, o), o && o.length && ge(o).remove(), ge.merge([], n.childNodes))
    };
    var hi = ge.fn.load;
    ge.fn.load = function(e, t, i) {
      if ("string" != typeof e && hi) return hi.apply(this, arguments);
      var n, o, s, r = this,
        a = e.indexOf(" ");
      return a > -1 && (n = ge.trim(e.slice(a, e.length)), e = e.slice(0, a)), ge.isFunction(t) ? (i = t, t = void 0) : t && "object" == typeof t && (o = "POST"), r.length > 0 && ge.ajax({
        url: e,
        type: o || "GET",
        dataType: "html",
        data: t
      }).done(function(e) {
        s = arguments, r.html(n ? ge("<div>").append(ge.parseHTML(e)).find(n) : e)
      }).always(i && function(e, t) {
        r.each(function() {
          i.apply(this, s || [e.responseText, t, e])
        })
      }), this
    }, ge.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
      ge.fn[t] = function(e) {
        return this.on(t, e)
      }
    }), ge.expr.filters.animated = function(e) {
      return ge.grep(ge.timers, function(t) {
        return e === t.elem
      }).length
    }, ge.offset = {
      setOffset: function(e, t, i) {
        var n, o, s, r, a, l, c, d = ge.css(e, "position"),
          u = ge(e),
          p = {};
        "static" === d && (e.style.position = "relative"), a = u.offset(), s = ge.css(e, "top"), l = ge.css(e, "left"), c = ("absolute" === d || "fixed" === d) && ge.inArray("auto", [s, l]) > -1, c ? (n = u.position(), r = n.top, o = n.left) : (r = parseFloat(s) || 0, o = parseFloat(l) || 0), ge.isFunction(t) && (t = t.call(e, i, ge.extend({}, a))), null != t.top && (p.top = t.top - a.top + r), null != t.left && (p.left = t.left - a.left + o), "using" in t ? t.using.call(e, p) : u.css(p)
      }
    }, ge.fn.extend({
      offset: function(e) {
        if (arguments.length) return void 0 === e ? this : this.each(function(t) {
          ge.offset.setOffset(this, e, t)
        });
        var t, i, n = {
            top: 0,
            left: 0
          },
          o = this[0],
          s = o && o.ownerDocument;
        if (s) return t = s.documentElement, ge.contains(t, o) ? (void 0 !== o.getBoundingClientRect && (n = o.getBoundingClientRect()), i = se(s), {
          top: n.top + (i.pageYOffset || t.scrollTop) - (t.clientTop || 0),
          left: n.left + (i.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
        }) : n
      },
      position: function() {
        if (this[0]) {
          var e, t, i = {
              top: 0,
              left: 0
            },
            n = this[0];
          return "fixed" === ge.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ge.nodeName(e[0], "html") || (i = e.offset()), i.top += ge.css(e[0], "borderTopWidth", !0), i.left += ge.css(e[0], "borderLeftWidth", !0)), {
            top: t.top - i.top - ge.css(n, "marginTop", !0),
            left: t.left - i.left - ge.css(n, "marginLeft", !0)
          }
        }
      },
      offsetParent: function() {
        return this.map(function() {
          for (var e = this.offsetParent; e && !ge.nodeName(e, "html") && "static" === ge.css(e, "position");) e = e.offsetParent;
          return e || vt
        })
      }
    }), ge.each({
      scrollLeft: "pageXOffset",
      scrollTop: "pageYOffset"
    }, function(e, t) {
      var i = /Y/.test(t);
      ge.fn[e] = function(n) {
        return Xe(this, function(e, n, o) {
          var s = se(e);
          if (void 0 === o) return s ? t in s ? s[t] : s.document.documentElement[n] : e[n];
          s ? s.scrollTo(i ? ge(s).scrollLeft() : o, i ? o : ge(s).scrollTop()) : e[n] = o
        }, e, n, arguments.length, null)
      }
    }), ge.each(["top", "left"], function(e, t) {
      ge.cssHooks[t] = O(ve.pixelPosition, function(e, i) {
        if (i) return i = mt(e, t), ft.test(i) ? ge(e).position()[t] + "px" : i
      })
    }), ge.each({
      Height: "height",
      Width: "width"
    }, function(e, t) {
      ge.each({
        padding: "inner" + e,
        content: t,
        "": "outer" + e
      }, function(i, n) {
        ge.fn[n] = function(n, o) {
          var s = arguments.length && (i || "boolean" != typeof n),
            r = i || (!0 === n || !0 === o ? "margin" : "border");
          return Xe(this, function(t, i, n) {
            var o;
            return ge.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === n ? ge.css(t, i, r) : ge.style(t, i, n, r)
          }, t, s ? n : void 0, s, null)
        }
      })
    }), ge.fn.extend({
      bind: function(e, t, i) {
        return this.on(e, null, t, i)
      },
      unbind: function(e, t) {
        return this.off(e, null, t)
      },
      delegate: function(e, t, i, n) {
        return this.on(t, e, i, n)
      },
      undelegate: function(e, t, i) {
        return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", i)
      }
    }), ge.fn.size = function() {
      return this.length
    }, ge.fn.andSelf = ge.fn.addBack, n = [], void 0 !== (o = function() {
      return ge
    }.apply(t, n)) && (e.exports = o);
    var vi = i.jQuery,
      gi = i.$;
    return ge.noConflict = function(e) {
      return i.$ === ge && (i.$ = gi), e && i.jQuery === ge && (i.jQuery = vi), ge
    }, s || (i.jQuery = i.$ = ge), ge
  })
}, function(e, t, i) {
  "use strict";
  var n = i(2),
    o = n;
  e.exports = function(e) {
    return e <= 767
  }(o(window).width())
}, function(e, t, i) {
  "use strict";
  var n = i(2);
  e.exports = function(e) {
    var t = function() {
      function t() {
        var t = e("body");
        t.hasClass("pc") ? i("pc") : t.hasClass("sp") && i("sp")
      }

      function i(t) {
        e(".js-switch_img").each(function() {
          e(this).attr("src", e(this).data(t))
        }), e(".js-switch_cta").length && e(".js-switch_cta-" + n()).removeAttr("style")
      }

      function n() {
        var e = location.pathname,
          t = "general";
        return e.match(/\/(engineering)\//) && (t = "engineering"), e.match(/\/(engineering_gakka)\//) && (t = "engineering"), e.match(/\/(arts)\//) && (t = "arts"), e.match(/^\/(manabi)\//) && (t = "general"), e.match(/^\/(admission\/faq)\//) && (t = "general"), console.log(t), t
      }
      e(window).on("resize", t), t()
    };
    return t.prototype = {}, t
  }(n)
}, function(e, t, i) {
  "use strict";
  var n = i(2);
  e.exports = function(e) {
    var t = function() {
      function t() {
        var t = e(this).attr("id").replace(n, ""),
          i = e("#" + o + t).children().first().outerHeight();
        return e(this).hasClass(r) ? (e(this).removeClass(r).addClass(s), e("#" + o + t).removeClass(r).addClass(s), e("#" + o + t).animate({
          height: "200px"
        }, 300), e(this).text("�J��")) : (e(this).removeClass(s).addClass(r), e("#" + o + t).removeClass(s).addClass(r), e("#" + o + t).animate({
          height: i + "px"
        }, "300"), e(this).text("����")), !1
      }

      function i() {
        var t = e(this).parent();
        t.hasClass(r) ? t.removeClass(r).addClass(s) : t.removeClass(s).addClass(r), e(this).siblings(".js-accordion_content").slideToggle(300, function() {
          e(window).resize()
        })
      }
      var n = "js-accordion_btn",
        o = "js-accordion_content",
        s = "js-accordion_close",
        r = "js-accordion_open";
      e("[id^=js-accordion_btn]").on("click", t), e(".js-accordion_module .js-accordion_btn").on("click", i), e("#" + o).css("height", "200px")
    };
    return t.prototype = {}, t
  }(n)
}, function(e, t, i) {
  "use strict";
  var n = i(2);
  e.exports = function(e) {
    ! function(e) {
      function t() {
        var t = e("body.pc").length > 0,
          i = e("[class$='sideMenuWrap']").length > 0;
        if (t && i) {
          var n = e(window).height(),
            o = e(window).scrollTop(),
            s = e("[class$='sideMenuWrap']").offset().top,
            r = e("[class$='sideMenuWrap']").height();
          e("[class$='sideMenuWrap']").next().length > 0 ? e("[class$='sideMenuWrap']").next().offset().top : e("#main").next().offset().top;
          var a = e("#sideBar .sideBar__item--topLink").first().height();
          if (t || (a += e("#sideBar .sideBar__item--sns").first().height()), e("#sideBar .sideBar__item--otherLink").each(function() {
              a += e(this).height()
            }), s >= o) n -= s - o;
          else if (r - o < n) return;
          e("#sideBar").height(n - 70), e("#sideBar .localNav").height(n - a - 70), e("#sideBar .sideBar__item--localNav").height(n - a - 70)
        }
      }

      function i() {
        var t = e("[class$='sideMenuWrap']"),
          i = e("#sideBar"),
          n = e("body.pc").length > 0,
          o = t.length > 0;
        if (n && o) {
          var s, r = (i.height(), t.height(), t.offset().top);
          s = t.next().length > 0 ? t.next().get(0).offsetTop : e("#main").next().offset().top;
          var a = e(window).scrollTop();
          r >= a ? (i.css("top", 0), i.css("bottom", "auto"), i.css("position", "static")) : s - e(window).height() + 70 < a ? (i.css("top", "auto"), i.css("bottom", 0), i.css("position", "absolute")) : (i.css("position", "fixed"), i.css("top", 0))
        }
      }! function() {
        var n = e("body.sp").length > 0,
          o = e("#sideBar").length > 0;
        if (e("#sideBar .localNav__item--current").addClass("js-open"), e("#sideBar .localNav").perfectScrollbar(), n && o) {
          var s = e("#sideBar .localNav__item--current .bottomNav__item"),
            r = e("#sideBar").height() + s.length * s.first().outerHeight();
          e("#sideBar").css("bottom", e("#footer").innerHeight()), e("#footer").css("margin-top", r)
        }
        t(), i()
      }(), e(window).on("scroll", function() {
        i(), t()
      }), e(window).on("resize", function() {
        t(), i()
      })
    }(n)
  }
}, function(e, t, i) {
  var n, n, o, s, r, a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e
  } : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
  };
  ! function e(t, i, o) {
    function s(a, l) {
      if (!i[a]) {
        if (!t[a]) {
          var c = "function" == typeof n && n;
          if (!l && c) return n(a, !0);
          if (r) return r(a, !0);
          var d = new Error("Cannot find module '" + a + "'");
          throw d.code = "MODULE_NOT_FOUND", d
        }
        var u = i[a] = {
          exports: {}
        };
        t[a][0].call(u.exports, function(e) {
          var i = t[a][1][e];
          return s(i || e)
        }, u, u.exports, e, t, i, o)
      }
      return i[a].exports
    }
    for (var r = "function" == typeof n && n, a = 0; a < o.length; a++) s(o[a]);
    return s
  }({
    1: [function(e, t, n) {
      "use strict";

      function l(e) {
        e.fn.perfectScrollbar = function(e) {
          return this.each(function() {
            if ("object" === (void 0 === e ? "undefined" : a(e)) || void 0 === e) {
              var t = e;
              d.get(this) || c.initialize(this, t)
            } else {
              var i = e;
              "update" === i ? c.update(this) : "destroy" === i && c.destroy(this)
            }
          })
        }
      }
      var c = e("../main"),
        d = e("../plugin/instances");
      s = [i(2)], o = l, void 0 !== (r = "function" == typeof o ? o.apply(n, s) : o) && (t.exports = r), t.exports = l
    }, {
      "../main": 7,
      "../plugin/instances": 18
    }],
    2: [function(e, t, i) {
      "use strict";

      function n(e, t) {
        var i = e.className.split(" ");
        i.indexOf(t) < 0 && i.push(t), e.className = i.join(" ")
      }

      function o(e, t) {
        var i = e.className.split(" "),
          n = i.indexOf(t);
        n >= 0 && i.splice(n, 1), e.className = i.join(" ")
      }
      i.add = function(e, t) {
        e.classList ? e.classList.add(t) : n(e, t)
      }, i.remove = function(e, t) {
        e.classList ? e.classList.remove(t) : o(e, t)
      }, i.list = function(e) {
        return e.classList ? Array.prototype.slice.apply(e.classList) : e.className.split(" ")
      }
    }, {}],
    3: [function(e, t, i) {
      "use strict";

      function n(e, t) {
        return window.getComputedStyle(e)[t]
      }

      function o(e, t, i) {
        return "number" == typeof i && (i = i.toString() + "px"), e.style[t] = i, e
      }

      function s(e, t) {
        for (var i in t) {
          var n = t[i];
          "number" == typeof n && (n = n.toString() + "px"), e.style[i] = n
        }
        return e
      }
      var r = {};
      r.e = function(e, t) {
        var i = document.createElement(e);
        return i.className = t, i
      }, r.appendTo = function(e, t) {
        return t.appendChild(e), e
      }, r.css = function(e, t, i) {
        return "object" === (void 0 === t ? "undefined" : a(t)) ? s(e, t) : void 0 === i ? n(e, t) : o(e, t, i)
      }, r.matches = function(e, t) {
        return void 0 !== e.matches ? e.matches(t) : void 0 !== e.matchesSelector ? e.matchesSelector(t) : void 0 !== e.webkitMatchesSelector ? e.webkitMatchesSelector(t) : void 0 !== e.mozMatchesSelector ? e.mozMatchesSelector(t) : void 0 !== e.msMatchesSelector ? e.msMatchesSelector(t) : void 0
      }, r.remove = function(e) {
        void 0 !== e.remove ? e.remove() : e.parentNode && e.parentNode.removeChild(e)
      }, r.queryChildren = function(e, t) {
        return Array.prototype.filter.call(e.childNodes, function(e) {
          return r.matches(e, t)
        })
      }, t.exports = r
    }, {}],
    4: [function(e, t, i) {
      "use strict";
      var n = function(e) {
        this.element = e, this.events = {}
      };
      n.prototype.bind = function(e, t) {
        void 0 === this.events[e] && (this.events[e] = []), this.events[e].push(t), this.element.addEventListener(e, t, !1)
      }, n.prototype.unbind = function(e, t) {
        var i = void 0 !== t;
        this.events[e] = this.events[e].filter(function(n) {
          return !(!i || n === t) || (this.element.removeEventListener(e, n, !1), !1)
        }, this)
      }, n.prototype.unbindAll = function() {
        for (var e in this.events) this.unbind(e)
      };
      var o = function() {
        this.eventElements = []
      };
      o.prototype.eventElement = function(e) {
        var t = this.eventElements.filter(function(t) {
          return t.element === e
        })[0];
        return void 0 === t && (t = new n(e), this.eventElements.push(t)), t
      }, o.prototype.bind = function(e, t, i) {
        this.eventElement(e).bind(t, i)
      }, o.prototype.unbind = function(e, t, i) {
        this.eventElement(e).unbind(t, i)
      }, o.prototype.unbindAll = function() {
        for (var e = 0; e < this.eventElements.length; e++) this.eventElements[e].unbindAll()
      }, o.prototype.once = function(e, t, i) {
        var n = this.eventElement(e),
          o = function e(o) {
            n.unbind(t, e), i(o)
          };
        n.bind(t, o)
      }, t.exports = o
    }, {}],
    5: [function(e, t, i) {
      "use strict";
      t.exports = function() {
        function e() {
          return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
        }
        return function() {
          return e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e()
        }
      }()
    }, {}],
    6: [function(e, t, i) {
      "use strict";
      var n = e("./class"),
        o = e("./dom"),
        s = i.toInt = function(e) {
          return parseInt(e, 10) || 0
        },
        r = i.clone = function(e) {
          if (e) {
            if (e.constructor === Array) return e.map(r);
            if ("object" === (void 0 === e ? "undefined" : a(e))) {
              var t = {};
              for (var i in e) t[i] = r(e[i]);
              return t
            }
            return e
          }
          return null
        };
      i.extend = function(e, t) {
        var i = r(e);
        for (var n in t) i[n] = r(t[n]);
        return i
      }, i.isEditable = function(e) {
        return o.matches(e, "input,[contenteditable]") || o.matches(e, "select,[contenteditable]") || o.matches(e, "textarea,[contenteditable]") || o.matches(e, "button,[contenteditable]")
      }, i.removePsClasses = function(e) {
        for (var t = n.list(e), i = 0; i < t.length; i++) {
          var o = t[i];
          0 === o.indexOf("ps-") && n.remove(e, o)
        }
      }, i.outerWidth = function(e) {
        return s(o.css(e, "width")) + s(o.css(e, "paddingLeft")) + s(o.css(e, "paddingRight")) + s(o.css(e, "borderLeftWidth")) + s(o.css(e, "borderRightWidth"))
      }, i.startScrolling = function(e, t) {
        n.add(e, "ps-in-scrolling"), void 0 !== t ? n.add(e, "ps-" + t) : (n.add(e, "ps-x"), n.add(e, "ps-y"))
      }, i.stopScrolling = function(e, t) {
        n.remove(e, "ps-in-scrolling"), void 0 !== t ? n.remove(e, "ps-" + t) : (n.remove(e, "ps-x"), n.remove(e, "ps-y"))
      }, i.env = {
        isWebKit: "WebkitAppearance" in document.documentElement.style,
        supportsTouch: "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
        supportsIePointer: null !== window.navigator.msMaxTouchPoints
      }
    }, {
      "./class": 2,
      "./dom": 3
    }],
    7: [function(e, t, i) {
      "use strict";
      var n = e("./plugin/destroy"),
        o = e("./plugin/initialize"),
        s = e("./plugin/update");
      t.exports = {
        initialize: o,
        update: s,
        destroy: n
      }
    }, {
      "./plugin/destroy": 9,
      "./plugin/initialize": 17,
      "./plugin/update": 21
    }],
    8: [function(e, t, i) {
      "use strict";
      t.exports = {
        handlers: ["click-rail", "drag-scrollbar", "keyboard", "wheel", "touch"],
        maxScrollbarLength: null,
        minScrollbarLength: null,
        scrollXMarginOffset: 0,
        scrollYMarginOffset: 0,
        suppressScrollX: !1,
        suppressScrollY: !1,
        swipePropagation: !0,
        useBothWheelAxes: !1,
        wheelPropagation: !1,
        wheelSpeed: 1,
        theme: "default"
      }
    }, {}],
    9: [function(e, t, i) {
      "use strict";
      var n = e("../lib/helper"),
        o = e("../lib/dom"),
        s = e("./instances");
      t.exports = function(e) {
        var t = s.get(e);
        t && (t.event.unbindAll(), o.remove(t.scrollbarX), o.remove(t.scrollbarY), o.remove(t.scrollbarXRail), o.remove(t.scrollbarYRail), n.removePsClasses(e), s.remove(e))
      }
    }, {
      "../lib/dom": 3,
      "../lib/helper": 6,
      "./instances": 18
    }],
    10: [function(e, t, i) {
      "use strict";

      function n(e, t) {
        function i(e) {
          return e.getBoundingClientRect()
        }
        var n = function(e) {
          e.stopPropagation()
        };
        t.event.bind(t.scrollbarY, "click", n), t.event.bind(t.scrollbarYRail, "click", function(n) {
          var o = n.pageY - window.pageYOffset - i(t.scrollbarYRail).top,
            a = o > t.scrollbarYTop ? 1 : -1;
          r(e, "top", e.scrollTop + a * t.containerHeight), s(e), n.stopPropagation()
        }), t.event.bind(t.scrollbarX, "click", n), t.event.bind(t.scrollbarXRail, "click", function(n) {
          var o = n.pageX - window.pageXOffset - i(t.scrollbarXRail).left,
            a = o > t.scrollbarXLeft ? 1 : -1;
          r(e, "left", e.scrollLeft + a * t.containerWidth), s(e), n.stopPropagation()
        })
      }
      var o = e("../instances"),
        s = e("../update-geometry"),
        r = e("../update-scroll");
      t.exports = function(e) {
        n(e, o.get(e))
      }
    }, {
      "../instances": 18,
      "../update-geometry": 19,
      "../update-scroll": 20
    }],
    11: [function(e, t, i) {
      "use strict";

      function n(e, t) {
        function i(i) {
          var o = n + i * t.railXRatio,
            r = Math.max(0, t.scrollbarXRail.getBoundingClientRect().left) + t.railXRatio * (t.railXWidth - t.scrollbarXWidth);
          t.scrollbarXLeft = o < 0 ? 0 : o > r ? r : o;
          var a = s.toInt(t.scrollbarXLeft * (t.contentWidth - t.containerWidth) / (t.containerWidth - t.railXRatio * t.scrollbarXWidth)) - t.negativeScrollAdjustment;
          c(e, "left", a)
        }
        var n = null,
          o = null,
          a = function(t) {
            i(t.pageX - o), l(e), t.stopPropagation(), t.preventDefault()
          },
          d = function() {
            s.stopScrolling(e, "x"), t.event.unbind(t.ownerDocument, "mousemove", a)
          };
        t.event.bind(t.scrollbarX, "mousedown", function(i) {
          o = i.pageX, n = s.toInt(r.css(t.scrollbarX, "left")) * t.railXRatio, s.startScrolling(e, "x"), t.event.bind(t.ownerDocument, "mousemove", a), t.event.once(t.ownerDocument, "mouseup", d), i.stopPropagation(), i.preventDefault()
        })
      }

      function o(e, t) {
        function i(i) {
          var o = n + i * t.railYRatio,
            r = Math.max(0, t.scrollbarYRail.getBoundingClientRect().top) + t.railYRatio * (t.railYHeight - t.scrollbarYHeight);
          t.scrollbarYTop = o < 0 ? 0 : o > r ? r : o;
          var a = s.toInt(t.scrollbarYTop * (t.contentHeight - t.containerHeight) / (t.containerHeight - t.railYRatio * t.scrollbarYHeight));
          c(e, "top", a)
        }
        var n = null,
          o = null,
          a = function(t) {
            i(t.pageY - o), l(e), t.stopPropagation(), t.preventDefault()
          },
          d = function() {
            s.stopScrolling(e, "y"), t.event.unbind(t.ownerDocument, "mousemove", a)
          };
        t.event.bind(t.scrollbarY, "mousedown", function(i) {
          o = i.pageY, n = s.toInt(r.css(t.scrollbarY, "top")) * t.railYRatio, s.startScrolling(e, "y"), t.event.bind(t.ownerDocument, "mousemove", a), t.event.once(t.ownerDocument, "mouseup", d), i.stopPropagation(), i.preventDefault()
        })
      }
      var s = e("../../lib/helper"),
        r = e("../../lib/dom"),
        a = e("../instances"),
        l = e("../update-geometry"),
        c = e("../update-scroll");
      t.exports = function(e) {
        var t = a.get(e);
        n(e, t), o(e, t)
      }
    }, {
      "../../lib/dom": 3,
      "../../lib/helper": 6,
      "../instances": 18,
      "../update-geometry": 19,
      "../update-scroll": 20
    }],
    12: [function(e, t, i) {
      "use strict";

      function n(e, t) {
        function i(i, n) {
          var o = e.scrollTop;
          if (0 === i) {
            if (!t.scrollbarYActive) return !1;
            if (0 === o && n > 0 || o >= t.contentHeight - t.containerHeight && n < 0) return !t.settings.wheelPropagation
          }
          var s = e.scrollLeft;
          if (0 === n) {
            if (!t.scrollbarXActive) return !1;
            if (0 === s && i < 0 || s >= t.contentWidth - t.containerWidth && i > 0) return !t.settings.wheelPropagation
          }
          return !0
        }
        var n = !1;
        t.event.bind(e, "mouseenter", function() {
          n = !0
        }), t.event.bind(e, "mouseleave", function() {
          n = !1
        });
        var r = !1;
        t.event.bind(t.ownerDocument, "keydown", function(c) {
          if (!(c.isDefaultPrevented && c.isDefaultPrevented() || c.defaultPrevented)) {
            var d = s.matches(t.scrollbarX, ":focus") || s.matches(t.scrollbarY, ":focus");
            if (n || d) {
              var u = document.activeElement ? document.activeElement : t.ownerDocument.activeElement;
              if (u) {
                if ("IFRAME" === u.tagName) u = u.contentDocument.activeElement;
                else
                  for (; u.shadowRoot;) u = u.shadowRoot.activeElement;
                if (o.isEditable(u)) return
              }
              var p = 0,
                f = 0;
              switch (c.which) {
                case 37:
                  p = c.metaKey ? -t.contentWidth : c.altKey ? -t.containerWidth : -30;
                  break;
                case 38:
                  f = c.metaKey ? t.contentHeight : c.altKey ? t.containerHeight : 30;
                  break;
                case 39:
                  p = c.metaKey ? t.contentWidth : c.altKey ? t.containerWidth : 30;
                  break;
                case 40:
                  f = c.metaKey ? -t.contentHeight : c.altKey ? -t.containerHeight : -30;
                  break;
                case 33:
                  f = 90;
                  break;
                case 32:
                  f = c.shiftKey ? 90 : -90;
                  break;
                case 34:
                  f = -90;
                  break;
                case 35:
                  f = c.ctrlKey ? -t.contentHeight : -t.containerHeight;
                  break;
                case 36:
                  f = c.ctrlKey ? e.scrollTop : t.containerHeight;
                  break;
                default:
                  return
              }
              l(e, "top", e.scrollTop - f), l(e, "left", e.scrollLeft + p), a(e), r = i(p, f), r && c.preventDefault()
            }
          }
        })
      }
      var o = e("../../lib/helper"),
        s = e("../../lib/dom"),
        r = e("../instances"),
        a = e("../update-geometry"),
        l = e("../update-scroll");
      t.exports = function(e) {
        n(e, r.get(e))
      }
    }, {
      "../../lib/dom": 3,
      "../../lib/helper": 6,
      "../instances": 18,
      "../update-geometry": 19,
      "../update-scroll": 20
    }],
    13: [function(e, t, i) {
      "use strict";

      function n(e, t) {
        function i(i, n) {
          var o = e.scrollTop;
          if (0 === i) {
            if (!t.scrollbarYActive) return !1;
            if (0 === o && n > 0 || o >= t.contentHeight - t.containerHeight && n < 0) return !t.settings.wheelPropagation
          }
          var s = e.scrollLeft;
          if (0 === n) {
            if (!t.scrollbarXActive) return !1;
            if (0 === s && i < 0 || s >= t.contentWidth - t.containerWidth && i > 0) return !t.settings.wheelPropagation
          }
          return !0
        }

        function n(e) {
          var t = e.deltaX,
            i = -1 * e.deltaY;
          return void 0 !== t && void 0 !== i || (t = -1 * e.wheelDeltaX / 6, i = e.wheelDeltaY / 6), e.deltaMode && 1 === e.deltaMode && (t *= 10, i *= 10), t !== t && i !== i && (t = 0, i = e.wheelDelta), e.shiftKey ? [-i, -t] : [t, i]
        }

        function o(t, i) {
          var n = e.querySelector("textarea:hover, select[multiple]:hover, .ps-child:hover");
          if (n) {
            if (!window.getComputedStyle(n).overflow.match(/(scroll|auto)/)) return !1;
            var o = n.scrollHeight - n.clientHeight;
            if (o > 0 && !(0 === n.scrollTop && i > 0 || n.scrollTop === o && i < 0)) return !0;
            var s = n.scrollLeft - n.clientWidth;
            if (s > 0 && !(0 === n.scrollLeft && t < 0 || n.scrollLeft === s && t > 0)) return !0
          }
          return !1
        }

        function a(a) {
          var c = n(a),
            d = c[0],
            u = c[1];
          o(d, u) || (l = !1, t.settings.useBothWheelAxes ? t.scrollbarYActive && !t.scrollbarXActive ? (u ? r(e, "top", e.scrollTop - u * t.settings.wheelSpeed) : r(e, "top", e.scrollTop + d * t.settings.wheelSpeed), l = !0) : t.scrollbarXActive && !t.scrollbarYActive && (d ? r(e, "left", e.scrollLeft + d * t.settings.wheelSpeed) : r(e, "left", e.scrollLeft - u * t.settings.wheelSpeed), l = !0) : (r(e, "top", e.scrollTop - u * t.settings.wheelSpeed), r(e, "left", e.scrollLeft + d * t.settings.wheelSpeed)), s(e), (l = l || i(d, u)) && (a.stopPropagation(), a.preventDefault()))
        }
        var l = !1;
        void 0 !== window.onwheel ? t.event.bind(e, "wheel", a) : void 0 !== window.onmousewheel && t.event.bind(e, "mousewheel", a)
      }
      var o = e("../instances"),
        s = e("../update-geometry"),
        r = e("../update-scroll");
      t.exports = function(e) {
        n(e, o.get(e))
      }
    }, {
      "../instances": 18,
      "../update-geometry": 19,
      "../update-scroll": 20
    }],
    14: [function(e, t, i) {
      "use strict";

      function n(e, t) {
        t.event.bind(e, "scroll", function() {
          s(e)
        })
      }
      var o = e("../instances"),
        s = e("../update-geometry");
      t.exports = function(e) {
        n(e, o.get(e))
      }
    }, {
      "../instances": 18,
      "../update-geometry": 19
    }],
    15: [function(e, t, i) {
      "use strict";

      function n(e, t) {
        function i() {
          var e = window.getSelection ? window.getSelection() : document.getSelection ? document.getSelection() : "";
          return 0 === e.toString().length ? null : e.getRangeAt(0).commonAncestorContainer
        }

        function n() {
          c || (c = setInterval(function() {
            if (!s.get(e)) return void clearInterval(c);
            a(e, "top", e.scrollTop + d.top), a(e, "left", e.scrollLeft + d.left), r(e)
          }, 50))
        }

        function l() {
          c && (clearInterval(c), c = null), o.stopScrolling(e)
        }
        var c = null,
          d = {
            top: 0,
            left: 0
          },
          u = !1;
        t.event.bind(t.ownerDocument, "selectionchange", function() {
          e.contains(i()) ? u = !0 : (u = !1, l())
        }), t.event.bind(window, "mouseup", function() {
          u && (u = !1, l())
        }), t.event.bind(window, "keyup", function() {
          u && (u = !1, l())
        }), t.event.bind(window, "mousemove", function(t) {
          if (u) {
            var i = {
                x: t.pageX,
                y: t.pageY
              },
              s = {
                left: e.offsetLeft,
                right: e.offsetLeft + e.offsetWidth,
                top: e.offsetTop,
                bottom: e.offsetTop + e.offsetHeight
              };
            i.x < s.left + 3 ? (d.left = -5, o.startScrolling(e, "x")) : i.x > s.right - 3 ? (d.left = 5, o.startScrolling(e, "x")) : d.left = 0, i.y < s.top + 3 ? (d.top = s.top + 3 - i.y < 5 ? -5 : -20, o.startScrolling(e, "y")) : i.y > s.bottom - 3 ? (d.top = i.y - s.bottom + 3 < 5 ? 5 : 20, o.startScrolling(e, "y")) : d.top = 0, 0 === d.top && 0 === d.left ? l() : n()
          }
        })
      }
      var o = e("../../lib/helper"),
        s = e("../instances"),
        r = e("../update-geometry"),
        a = e("../update-scroll");
      t.exports = function(e) {
        n(e, s.get(e))
      }
    }, {
      "../../lib/helper": 6,
      "../instances": 18,
      "../update-geometry": 19,
      "../update-scroll": 20
    }],
    16: [function(e, t, i) {
      "use strict";

      function n(e, t, i, n) {
        function o(i, n) {
          var o = e.scrollTop,
            s = e.scrollLeft,
            r = Math.abs(i),
            a = Math.abs(n);
          if (a > r) {
            if (n < 0 && o === t.contentHeight - t.containerHeight || n > 0 && 0 === o) return !t.settings.swipePropagation
          } else if (r > a && (i < 0 && s === t.contentWidth - t.containerWidth || i > 0 && 0 === s)) return !t.settings.swipePropagation;
          return !0
        }

        function l(t, i) {
          a(e, "top", e.scrollTop - i), a(e, "left", e.scrollLeft - t), r(e)
        }

        function c() {
          w = !0
        }

        function d() {
          w = !1
        }

        function u(e) {
          return e.targetTouches ? e.targetTouches[0] : e
        }

        function p(e) {
          return !(!e.targetTouches || 1 !== e.targetTouches.length) || !(!e.pointerType || "mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE)
        }

        function f(e) {
          if (p(e)) {
            x = !0;
            var t = u(e);
            g.pageX = t.pageX, g.pageY = t.pageY, m = (new Date).getTime(), null !== b && clearInterval(b), e.stopPropagation()
          }
        }

        function h(e) {
          if (!x && t.settings.swipePropagation && f(e), !w && x && p(e)) {
            var i = u(e),
              n = {
                pageX: i.pageX,
                pageY: i.pageY
              },
              s = n.pageX - g.pageX,
              r = n.pageY - g.pageY;
            l(s, r), g = n;
            var a = (new Date).getTime(),
              c = a - m;
            c > 0 && (y.x = s / c, y.y = r / c, m = a), o(s, r) && (e.stopPropagation(), e.preventDefault())
          }
        }

        function v() {
          !w && x && (x = !1, clearInterval(b), b = setInterval(function() {
            return s.get(e) && (y.x || y.y) ? Math.abs(y.x) < .01 && Math.abs(y.y) < .01 ? void clearInterval(b) : (l(30 * y.x, 30 * y.y), y.x *= .8, void(y.y *= .8)) : void clearInterval(b)
          }, 10))
        }
        var g = {},
          m = 0,
          y = {},
          b = null,
          w = !1,
          x = !1;
        i ? (t.event.bind(window, "touchstart", c), t.event.bind(window, "touchend", d), t.event.bind(e, "touchstart", f), t.event.bind(e, "touchmove", h), t.event.bind(e, "touchend", v)) : n && (window.PointerEvent ? (t.event.bind(window, "pointerdown", c), t.event.bind(window, "pointerup", d), t.event.bind(e, "pointerdown", f), t.event.bind(e, "pointermove", h), t.event.bind(e, "pointerup", v)) : window.MSPointerEvent && (t.event.bind(window, "MSPointerDown", c), t.event.bind(window, "MSPointerUp", d), t.event.bind(e, "MSPointerDown", f), t.event.bind(e, "MSPointerMove", h), t.event.bind(e, "MSPointerUp", v)))
      }
      var o = e("../../lib/helper"),
        s = e("../instances"),
        r = e("../update-geometry"),
        a = e("../update-scroll");
      t.exports = function(e) {
        if (o.env.supportsTouch || o.env.supportsIePointer) {
          n(e, s.get(e), o.env.supportsTouch, o.env.supportsIePointer)
        }
      }
    }, {
      "../../lib/helper": 6,
      "../instances": 18,
      "../update-geometry": 19,
      "../update-scroll": 20
    }],
    17: [function(e, t, i) {
      "use strict";
      var n = e("../lib/helper"),
        o = e("../lib/class"),
        s = e("./instances"),
        r = e("./update-geometry"),
        l = {
          "click-rail": e("./handler/click-rail"),
          "drag-scrollbar": e("./handler/drag-scrollbar"),
          keyboard: e("./handler/keyboard"),
          wheel: e("./handler/mouse-wheel"),
          touch: e("./handler/touch"),
          selection: e("./handler/selection")
        },
        c = e("./handler/native-scroll");
      t.exports = function(e, t) {
        t = "object" === (void 0 === t ? "undefined" : a(t)) ? t : {}, o.add(e, "ps-container");
        var i = s.add(e);
        i.settings = n.extend(i.settings, t), o.add(e, "ps-theme-" + i.settings.theme), i.settings.handlers.forEach(function(t) {
          l[t](e)
        }), c(e), r(e)
      }
    }, {
      "../lib/class": 2,
      "../lib/helper": 6,
      "./handler/click-rail": 10,
      "./handler/drag-scrollbar": 11,
      "./handler/keyboard": 12,
      "./handler/mouse-wheel": 13,
      "./handler/native-scroll": 14,
      "./handler/selection": 15,
      "./handler/touch": 16,
      "./instances": 18,
      "./update-geometry": 19
    }],
    18: [function(e, t, i) {
      "use strict";

      function n(e) {
        function t() {
          l.add(e, "ps-focus")
        }

        function i() {
          l.remove(e, "ps-focus")
        }
        var n = this;
        n.settings = a.clone(c), n.containerWidth = null, n.containerHeight = null, n.contentWidth = null, n.contentHeight = null, n.isRtl = "rtl" === d.css(e, "direction"), n.isNegativeScroll = function() {
          var t = e.scrollLeft,
            i = null;
          return e.scrollLeft = -1, i = e.scrollLeft < 0, e.scrollLeft = t, i
        }(), n.negativeScrollAdjustment = n.isNegativeScroll ? e.scrollWidth - e.clientWidth : 0, n.event = new u, n.ownerDocument = e.ownerDocument || document, n.scrollbarXRail = d.appendTo(d.e("div", "ps-scrollbar-x-rail"), e), n.scrollbarX = d.appendTo(d.e("div", "ps-scrollbar-x"), n.scrollbarXRail), n.scrollbarX.setAttribute("tabindex", 0), n.event.bind(n.scrollbarX, "focus", t), n.event.bind(n.scrollbarX, "blur", i), n.scrollbarXActive = null, n.scrollbarXWidth = null, n.scrollbarXLeft = null, n.scrollbarXBottom = a.toInt(d.css(n.scrollbarXRail, "bottom")), n.isScrollbarXUsingBottom = n.scrollbarXBottom === n.scrollbarXBottom, n.scrollbarXTop = n.isScrollbarXUsingBottom ? null : a.toInt(d.css(n.scrollbarXRail, "top")), n.railBorderXWidth = a.toInt(d.css(n.scrollbarXRail, "borderLeftWidth")) + a.toInt(d.css(n.scrollbarXRail, "borderRightWidth")), d.css(n.scrollbarXRail, "display", "block"), n.railXMarginWidth = a.toInt(d.css(n.scrollbarXRail, "marginLeft")) + a.toInt(d.css(n.scrollbarXRail, "marginRight")), d.css(n.scrollbarXRail, "display", ""), n.railXWidth = null, n.railXRatio = null, n.scrollbarYRail = d.appendTo(d.e("div", "ps-scrollbar-y-rail"), e), n.scrollbarY = d.appendTo(d.e("div", "ps-scrollbar-y"), n.scrollbarYRail), n.scrollbarY.setAttribute("tabindex", 0), n.event.bind(n.scrollbarY, "focus", t), n.event.bind(n.scrollbarY, "blur", i), n.scrollbarYActive = null, n.scrollbarYHeight = null, n.scrollbarYTop = null, n.scrollbarYRight = a.toInt(d.css(n.scrollbarYRail, "right")), n.isScrollbarYUsingRight = n.scrollbarYRight === n.scrollbarYRight, n.scrollbarYLeft = n.isScrollbarYUsingRight ? null : a.toInt(d.css(n.scrollbarYRail, "left")), n.scrollbarYOuterWidth = n.isRtl ? a.outerWidth(n.scrollbarY) : null, n.railBorderYWidth = a.toInt(d.css(n.scrollbarYRail, "borderTopWidth")) + a.toInt(d.css(n.scrollbarYRail, "borderBottomWidth")), d.css(n.scrollbarYRail, "display", "block"), n.railYMarginHeight = a.toInt(d.css(n.scrollbarYRail, "marginTop")) + a.toInt(d.css(n.scrollbarYRail, "marginBottom")), d.css(n.scrollbarYRail, "display", ""), n.railYHeight = null, n.railYRatio = null
      }

      function o(e) {
        return e.getAttribute("data-ps-id")
      }

      function s(e, t) {
        e.setAttribute("data-ps-id", t)
      }

      function r(e) {
        e.removeAttribute("data-ps-id")
      }
      var a = e("../lib/helper"),
        l = e("../lib/class"),
        c = e("./default-setting"),
        d = e("../lib/dom"),
        u = e("../lib/event-manager"),
        p = e("../lib/guid"),
        f = {};
      i.add = function(e) {
        var t = p();
        return s(e, t), f[t] = new n(e), f[t]
      }, i.remove = function(e) {
        delete f[o(e)], r(e)
      }, i.get = function(e) {
        return f[o(e)]
      }
    }, {
      "../lib/class": 2,
      "../lib/dom": 3,
      "../lib/event-manager": 4,
      "../lib/guid": 5,
      "../lib/helper": 6,
      "./default-setting": 8
    }],
    19: [function(e, t, i) {
      "use strict";

      function n(e, t) {
        return e.settings.minScrollbarLength && (t = Math.max(t, e.settings.minScrollbarLength)), e.settings.maxScrollbarLength && (t = Math.min(t, e.settings.maxScrollbarLength)), t
      }

      function o(e, t) {
        var i = {
          width: t.railXWidth
        };
        t.isRtl ? i.left = t.negativeScrollAdjustment + e.scrollLeft + t.containerWidth - t.contentWidth : i.left = e.scrollLeft, t.isScrollbarXUsingBottom ? i.bottom = t.scrollbarXBottom - e.scrollTop : i.top = t.scrollbarXTop + e.scrollTop, a.css(t.scrollbarXRail, i);
        var n = {
          top: e.scrollTop,
          height: t.railYHeight
        };
        t.isScrollbarYUsingRight ? t.isRtl ? n.right = t.contentWidth - (t.negativeScrollAdjustment + e.scrollLeft) - t.scrollbarYRight - t.scrollbarYOuterWidth : n.right = t.scrollbarYRight - e.scrollLeft : t.isRtl ? n.left = t.negativeScrollAdjustment + e.scrollLeft + 2 * t.containerWidth - t.contentWidth - t.scrollbarYLeft - t.scrollbarYOuterWidth : n.left = t.scrollbarYLeft + e.scrollLeft, a.css(t.scrollbarYRail, n), a.css(t.scrollbarX, {
          left: t.scrollbarXLeft,
          width: t.scrollbarXWidth - t.railBorderXWidth
        }), a.css(t.scrollbarY, {
          top: t.scrollbarYTop,
          height: t.scrollbarYHeight - t.railBorderYWidth
        })
      }
      var s = e("../lib/helper"),
        r = e("../lib/class"),
        a = e("../lib/dom"),
        l = e("./instances"),
        c = e("./update-scroll");
      t.exports = function(e) {
        var t = l.get(e);
        t.containerWidth = e.clientWidth, t.containerHeight = e.clientHeight, t.contentWidth = e.scrollWidth, t.contentHeight = e.scrollHeight;
        var i;
        e.contains(t.scrollbarXRail) || (i = a.queryChildren(e, ".ps-scrollbar-x-rail"), i.length > 0 && i.forEach(function(e) {
          a.remove(e)
        }), a.appendTo(t.scrollbarXRail, e)), e.contains(t.scrollbarYRail) || (i = a.queryChildren(e, ".ps-scrollbar-y-rail"), i.length > 0 && i.forEach(function(e) {
          a.remove(e)
        }), a.appendTo(t.scrollbarYRail, e)), !t.settings.suppressScrollX && t.containerWidth + t.settings.scrollXMarginOffset < t.contentWidth ? (t.scrollbarXActive = !0, t.railXWidth = t.containerWidth - t.railXMarginWidth, t.railXRatio = t.containerWidth / t.railXWidth, t.scrollbarXWidth = n(t, s.toInt(t.railXWidth * t.containerWidth / t.contentWidth)), t.scrollbarXLeft = s.toInt((t.negativeScrollAdjustment + e.scrollLeft) * (t.railXWidth - t.scrollbarXWidth) / (t.contentWidth - t.containerWidth))) : t.scrollbarXActive = !1, !t.settings.suppressScrollY && t.containerHeight + t.settings.scrollYMarginOffset < t.contentHeight ? (t.scrollbarYActive = !0, t.railYHeight = t.containerHeight - t.railYMarginHeight, t.railYRatio = t.containerHeight / t.railYHeight, t.scrollbarYHeight = n(t, s.toInt(t.railYHeight * t.containerHeight / t.contentHeight)), t.scrollbarYTop = s.toInt(e.scrollTop * (t.railYHeight - t.scrollbarYHeight) / (t.contentHeight - t.containerHeight))) : t.scrollbarYActive = !1, t.scrollbarXLeft >= t.railXWidth - t.scrollbarXWidth && (t.scrollbarXLeft = t.railXWidth - t.scrollbarXWidth), t.scrollbarYTop >= t.railYHeight - t.scrollbarYHeight && (t.scrollbarYTop = t.railYHeight - t.scrollbarYHeight), o(e, t), t.scrollbarXActive ? r.add(e, "ps-active-x") : (r.remove(e, "ps-active-x"), t.scrollbarXWidth = 0, t.scrollbarXLeft = 0, c(e, "left", 0)), t.scrollbarYActive ? r.add(e, "ps-active-y") : (r.remove(e, "ps-active-y"), t.scrollbarYHeight = 0, t.scrollbarYTop = 0, c(e, "top", 0))
      }
    }, {
      "../lib/class": 2,
      "../lib/dom": 3,
      "../lib/helper": 6,
      "./instances": 18,
      "./update-scroll": 20
    }],
    20: [function(e, t, i) {
      "use strict";
      var n, o, s = e("./instances"),
        r = function(e) {
          var t = document.createEvent("Event");
          return t.initEvent(e, !0, !0), t
        };
      t.exports = function(e, t, i) {
        if (void 0 === e) throw "You must provide an element to the update-scroll function";
        if (void 0 === t) throw "You must provide an axis to the update-scroll function";
        if (void 0 === i) throw "You must provide a value to the update-scroll function";
        "top" === t && i <= 0 && (e.scrollTop = i = 0, e.dispatchEvent(r("ps-y-reach-start"))), "left" === t && i <= 0 && (e.scrollLeft = i = 0, e.dispatchEvent(r("ps-x-reach-start")));
        var a = s.get(e);
        "top" === t && i >= a.contentHeight - a.containerHeight && (i = a.contentHeight - a.containerHeight, i - e.scrollTop <= 1 ? i = e.scrollTop : e.scrollTop = i, e.dispatchEvent(r("ps-y-reach-end"))), "left" === t && i >= a.contentWidth - a.containerWidth && (i = a.contentWidth - a.containerWidth, i - e.scrollLeft <= 1 ? i = e.scrollLeft : e.scrollLeft = i, e.dispatchEvent(r("ps-x-reach-end"))), n || (n = e.scrollTop), o || (o = e.scrollLeft), "top" === t && i < n && e.dispatchEvent(r("ps-scroll-up")), "top" === t && i > n && e.dispatchEvent(r("ps-scroll-down")), "left" === t && i < o && e.dispatchEvent(r("ps-scroll-left")), "left" === t && i > o && e.dispatchEvent(r("ps-scroll-right")), "top" === t && (e.scrollTop = n = i, e.dispatchEvent(r("ps-scroll-y"))), "left" === t && (e.scrollLeft = o = i, e.dispatchEvent(r("ps-scroll-x")))
      }
    }, {
      "./instances": 18
    }],
    21: [function(e, t, i) {
      "use strict";
      var n = e("../lib/helper"),
        o = e("../lib/dom"),
        s = e("./instances"),
        r = e("./update-geometry"),
        a = e("./update-scroll");
      t.exports = function(e) {
        var t = s.get(e);
        t && (t.negativeScrollAdjustment = t.isNegativeScroll ? e.scrollWidth - e.clientWidth : 0, o.css(t.scrollbarXRail, "display", "block"), o.css(t.scrollbarYRail, "display", "block"), t.railXMarginWidth = n.toInt(o.css(t.scrollbarXRail, "marginLeft")) + n.toInt(o.css(t.scrollbarXRail, "marginRight")), t.railYMarginHeight = n.toInt(o.css(t.scrollbarYRail, "marginTop")) + n.toInt(o.css(t.scrollbarYRail, "marginBottom")), o.css(t.scrollbarXRail, "display", "none"), o.css(t.scrollbarYRail, "display", "none"), r(e), a(e, "top", e.scrollTop), a(e, "left", e.scrollLeft), o.css(t.scrollbarXRail, "display", ""), o.css(t.scrollbarYRail, "display", ""))
      }
    }, {
      "../lib/dom": 3,
      "../lib/helper": 6,
      "./instances": 18,
      "./update-geometry": 19,
      "./update-scroll": 20
    }]
  }, {}, [1])
}, function(e, t, i) {
  var n, o, s, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e
  } : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
  };
  ! function(r) {
    "use strict";
    o = [i(2)], n = r, void 0 !== (s = "function" == typeof n ? n.apply(t, o) : n) && (e.exports = s)
  }(function(e) {
    "use strict";
    var t = window.Slick || {};
    (t = function() {
      var t = 0;
      return function(i, n) {
        var o, s = this;
        s.defaults = {
          accessibility: !0,
          adaptiveHeight: !1,
          appendArrows: e(i),
          appendDots: e(i),
          arrows: !0,
          asNavFor: null,
          prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
          nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
          autoplay: !1,
          autoplaySpeed: 3e3,
          centerMode: !1,
          centerPadding: "50px",
          cssEase: "ease",
          customPaging: function(t, i) {
            return e('<button type="button" />').text(i + 1)
          },
          dots: !1,
          dotsClass: "slick-dots",
          draggable: !0,
          easing: "linear",
          edgeFriction: .35,
          fade: !1,
          focusOnSelect: !1,
          focusOnChange: !1,
          infinite: !0,
          initialSlide: 0,
          lazyLoad: "ondemand",
          mobileFirst: !1,
          pauseOnHover: !0,
          pauseOnFocus: !0,
          pauseOnDotsHover: !1,
          respondTo: "window",
          responsive: null,
          rows: 1,
          rtl: !1,
          slide: "",
          slidesPerRow: 1,
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 500,
          swipe: !0,
          swipeToSlide: !1,
          touchMove: !0,
          touchThreshold: 5,
          useCSS: !0,
          useTransform: !0,
          variableWidth: !1,
          vertical: !1,
          verticalSwiping: !1,
          waitForAnimate: !0,
          zIndex: 1e3
        }, s.initials = {
          animating: !1,
          dragging: !1,
          autoPlayTimer: null,
          currentDirection: 0,
          currentLeft: null,
          currentSlide: 0,
          direction: 1,
          $dots: null,
          listWidth: null,
          listHeight: null,
          loadIndex: 0,
          $nextArrow: null,
          $prevArrow: null,
          scrolling: !1,
          slideCount: null,
          slideWidth: null,
          $slideTrack: null,
          $slides: null,
          sliding: !1,
          slideOffset: 0,
          swipeLeft: null,
          swiping: !1,
          $list: null,
          touchObject: {},
          transformsEnabled: !1,
          unslicked: !1
        }, e.extend(s, s.initials), s.activeBreakpoint = null, s.animType = null, s.animProp = null, s.breakpoints = [], s.breakpointSettings = [], s.cssTransitions = !1, s.focussed = !1, s.interrupted = !1, s.hidden = "hidden", s.paused = !0, s.positionProp = null, s.respondTo = null, s.rowCount = 1, s.shouldClick = !0, s.$slider = e(i), s.$slidesCache = null, s.transformType = null, s.transitionType = null, s.visibilityChange = "visibilitychange", s.windowWidth = 0, s.windowTimer = null, o = e(i).data("slick") || {}, s.options = e.extend({}, s.defaults, n, o), s.currentSlide = s.options.initialSlide, s.originalSettings = s.options, void 0 !== document.mozHidden ? (s.hidden = "mozHidden", s.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (s.hidden = "webkitHidden", s.visibilityChange = "webkitvisibilitychange"), s.autoPlay = e.proxy(s.autoPlay, s), s.autoPlayClear = e.proxy(s.autoPlayClear, s), s.autoPlayIterator = e.proxy(s.autoPlayIterator, s), s.changeSlide = e.proxy(s.changeSlide, s), s.clickHandler = e.proxy(s.clickHandler, s), s.selectHandler = e.proxy(s.selectHandler, s), s.setPosition = e.proxy(s.setPosition, s), s.swipeHandler = e.proxy(s.swipeHandler, s), s.dragHandler = e.proxy(s.dragHandler, s), s.keyHandler = e.proxy(s.keyHandler, s), s.instanceUid = t++, s.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, s.registerBreakpoints(), s.init(!0)
      }
    }()).prototype.activateADA = function() {
      this.$slideTrack.find(".slick-active").attr({
        "aria-hidden": "false"
      }).find("a, input, button, select").attr({
        tabindex: "0"
      })
    }, t.prototype.addSlide = t.prototype.slickAdd = function(t, i, n) {
      var o = this;
      if ("boolean" == typeof i) n = i, i = null;
      else if (i < 0 || i >= o.slideCount) return !1;
      o.unload(), "number" == typeof i ? 0 === i && 0 === o.$slides.length ? e(t).appendTo(o.$slideTrack) : n ? e(t).insertBefore(o.$slides.eq(i)) : e(t).insertAfter(o.$slides.eq(i)) : !0 === n ? e(t).prependTo(o.$slideTrack) : e(t).appendTo(o.$slideTrack), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slides.each(function(t, i) {
        e(i).attr("data-slick-index", t)
      }), o.$slidesCache = o.$slides, o.reinit()
    }, t.prototype.animateHeight = function() {
      var e = this;
      if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
        var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
        e.$list.animate({
          height: t
        }, e.options.speed)
      }
    }, t.prototype.animateSlide = function(t, i) {
      var n = {},
        o = this;
      o.animateHeight(), !0 === o.options.rtl && !1 === o.options.vertical && (t = -t), !1 === o.transformsEnabled ? !1 === o.options.vertical ? o.$slideTrack.animate({
        left: t
      }, o.options.speed, o.options.easing, i) : o.$slideTrack.animate({
        top: t
      }, o.options.speed, o.options.easing, i) : !1 === o.cssTransitions ? (!0 === o.options.rtl && (o.currentLeft = -o.currentLeft), e({
        animStart: o.currentLeft
      }).animate({
        animStart: t
      }, {
        duration: o.options.speed,
        easing: o.options.easing,
        step: function(e) {
          e = Math.ceil(e), !1 === o.options.vertical ? (n[o.animType] = "translate(" + e + "px, 0px)", o.$slideTrack.css(n)) : (n[o.animType] = "translate(0px," + e + "px)", o.$slideTrack.css(n))
        },
        complete: function() {
          i && i.call()
        }
      })) : (o.applyTransition(), t = Math.ceil(t), !1 === o.options.vertical ? n[o.animType] = "translate3d(" + t + "px, 0px, 0px)" : n[o.animType] = "translate3d(0px," + t + "px, 0px)", o.$slideTrack.css(n), i && setTimeout(function() {
        o.disableTransition(), i.call()
      }, o.options.speed))
    }, t.prototype.getNavTarget = function() {
      var t = this,
        i = t.options.asNavFor;
      return i && null !== i && (i = e(i).not(t.$slider)), i
    }, t.prototype.asNavFor = function(t) {
      var i = this.getNavTarget();
      null !== i && "object" == (void 0 === i ? "undefined" : r(i)) && i.each(function() {
        var i = e(this).slick("getSlick");
        i.unslicked || i.slideHandler(t, !0)
      })
    }, t.prototype.applyTransition = function(e) {
      var t = this,
        i = {};
      !1 === t.options.fade ? i[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : i[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase, !1 === t.options.fade ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i)
    }, t.prototype.autoPlay = function() {
      var e = this;
      e.autoPlayClear(), e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
    }, t.prototype.autoPlayClear = function() {
      var e = this;
      e.autoPlayTimer && clearInterval(e.autoPlayTimer)
    }, t.prototype.autoPlayIterator = function() {
      var e = this,
        t = e.currentSlide + e.options.slidesToScroll;
      e.paused || e.interrupted || e.focussed || (!1 === e.options.infinite && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll, e.currentSlide - 1 == 0 && (e.direction = 1))), e.slideHandler(t))
    }, t.prototype.buildArrows = function() {
      var t = this;
      !0 === t.options.arrows && (t.$prevArrow = e(t.options.prevArrow).addClass("slick-arrow"), t.$nextArrow = e(t.options.nextArrow).addClass("slick-arrow"), t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), !0 !== t.options.infinite && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({
        "aria-disabled": "true",
        tabindex: "-1"
      }))
    }, t.prototype.buildDots = function() {
      var t, i, n = this;
      if (!0 === n.options.dots) {
        for (n.$slider.addClass("slick-dotted"), i = e("<ul />").addClass(n.options.dotsClass), t = 0; t <= n.getDotCount(); t += 1) i.append(e("<li />").append(n.options.customPaging.call(this, n, t)));
        n.$dots = i.appendTo(n.options.appendDots), n.$dots.find("li").first().addClass("slick-active")
      }
    }, t.prototype.buildOut = function() {
      var t = this;
      t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), t.slideCount = t.$slides.length, t.$slides.each(function(t, i) {
        e(i).attr("data-slick-index", t).data("originalStyling", e(i).attr("style") || "")
      }), t.$slider.addClass("slick-slider"), t.$slideTrack = 0 === t.slideCount ? e('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(), t.$list = t.$slideTrack.wrap('<div class="slick-list"/>').parent(), t.$slideTrack.css("opacity", 0), !0 !== t.options.centerMode && !0 !== t.options.swipeToSlide || (t.options.slidesToScroll = 1), e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"), t.setupInfinite(), t.buildArrows(), t.buildDots(), t.updateDots(), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), !0 === t.options.draggable && t.$list.addClass("draggable")
    }, t.prototype.buildRows = function() {
      var e, t, i, n, o, s, r, a = this;
      if (n = document.createDocumentFragment(), s = a.$slider.children(), a.options.rows > 1) {
        for (r = a.options.slidesPerRow * a.options.rows, o = Math.ceil(s.length / r), e = 0; e < o; e++) {
          var l = document.createElement("div");
          for (t = 0; t < a.options.rows; t++) {
            var c = document.createElement("div");
            for (i = 0; i < a.options.slidesPerRow; i++) {
              var d = e * r + (t * a.options.slidesPerRow + i);
              s.get(d) && c.appendChild(s.get(d))
            }
            l.appendChild(c)
          }
          n.appendChild(l)
        }
        a.$slider.empty().append(n), a.$slider.children().children().children().css({
          width: 100 / a.options.slidesPerRow + "%",
          display: "inline-block"
        })
      }
    }, t.prototype.checkResponsive = function(t, i) {
      var n, o, s, r = this,
        a = !1,
        l = r.$slider.width(),
        c = window.innerWidth || e(window).width();
      if ("window" === r.respondTo ? s = c : "slider" === r.respondTo ? s = l : "min" === r.respondTo && (s = Math.min(c, l)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
        o = null;
        for (n in r.breakpoints) r.breakpoints.hasOwnProperty(n) && (!1 === r.originalSettings.mobileFirst ? s < r.breakpoints[n] && (o = r.breakpoints[n]) : s > r.breakpoints[n] && (o = r.breakpoints[n]));
        null !== o ? null !== r.activeBreakpoint ? (o !== r.activeBreakpoint || i) && (r.activeBreakpoint = o, "unslick" === r.breakpointSettings[o] ? r.unslick(o) : (r.options = e.extend({}, r.originalSettings, r.breakpointSettings[o]), !0 === t && (r.currentSlide = r.options.initialSlide), r.refresh(t)), a = o) : (r.activeBreakpoint = o, "unslick" === r.breakpointSettings[o] ? r.unslick(o) : (r.options = e.extend({}, r.originalSettings, r.breakpointSettings[o]), !0 === t && (r.currentSlide = r.options.initialSlide), r.refresh(t)), a = o) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, !0 === t && (r.currentSlide = r.options.initialSlide), r.refresh(t), a = o), t || !1 === a || r.$slider.trigger("breakpoint", [r, a])
      }
    }, t.prototype.changeSlide = function(t, i) {
      var n, o, s, r = this,
        a = e(t.currentTarget);
      switch (a.is("a") && t.preventDefault(), a.is("li") || (a = a.closest("li")), s = r.slideCount % r.options.slidesToScroll != 0, n = s ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, t.data.message) {
        case "previous":
          o = 0 === n ? r.options.slidesToScroll : r.options.slidesToShow - n, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - o, !1, i);
          break;
        case "next":
          o = 0 === n ? r.options.slidesToScroll : n, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + o, !1, i);
          break;
        case "index":
          var l = 0 === t.data.index ? 0 : t.data.index || a.index() * r.options.slidesToScroll;
          r.slideHandler(r.checkNavigable(l), !1, i), a.children().trigger("focus");
          break;
        default:
          return
      }
    }, t.prototype.checkNavigable = function(e) {
      var t, i;
      if (t = this.getNavigableIndexes(), i = 0, e > t[t.length - 1]) e = t[t.length - 1];
      else
        for (var n in t) {
          if (e < t[n]) {
            e = i;
            break
          }
          i = t[n]
        }
      return e
    }, t.prototype.cleanUpEvents = function() {
      var t = this;
      t.options.dots && null !== t.$dots && (e("li", t.$dots).off("click.slick", t.changeSlide).off("mouseenter.slick", e.proxy(t.interrupt, t, !0)).off("mouseleave.slick", e.proxy(t.interrupt, t, !1)), !0 === t.options.accessibility && t.$dots.off("keydown.slick", t.keyHandler)), t.$slider.off("focus.slick blur.slick"), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide), t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide), !0 === t.options.accessibility && (t.$prevArrow && t.$prevArrow.off("keydown.slick", t.keyHandler), t.$nextArrow && t.$nextArrow.off("keydown.slick", t.keyHandler))), t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler), t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler), t.$list.off("touchend.slick mouseup.slick", t.swipeHandler), t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler), t.$list.off("click.slick", t.clickHandler), e(document).off(t.visibilityChange, t.visibility), t.cleanUpSlideEvents(), !0 === t.options.accessibility && t.$list.off("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().off("click.slick", t.selectHandler), e(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange), e(window).off("resize.slick.slick-" + t.instanceUid, t.resize), e("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault), e(window).off("load.slick.slick-" + t.instanceUid, t.setPosition)
    }, t.prototype.cleanUpSlideEvents = function() {
      var t = this;
      t.$list.off("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.off("mouseleave.slick", e.proxy(t.interrupt, t, !1))
    }, t.prototype.cleanUpRows = function() {
      var e, t = this;
      t.options.rows > 1 && ((e = t.$slides.children().children()).removeAttr("style"), t.$slider.empty().append(e))
    }, t.prototype.clickHandler = function(e) {
      !1 === this.shouldClick && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault())
    }, t.prototype.destroy = function(t) {
      var i = this;
      i.autoPlayClear(), i.touchObject = {}, i.cleanUpEvents(), e(".slick-cloned", i.$slider).detach(), i.$dots && i.$dots.remove(), i.$prevArrow && i.$prevArrow.length && (i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()), i.$nextArrow && i.$nextArrow.length && (i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()), i.$slides && (i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
        e(this).attr("style", e(this).data("originalStyling"))
      }), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.detach(), i.$list.detach(), i.$slider.append(i.$slides)), i.cleanUpRows(), i.$slider.removeClass("slick-slider"), i.$slider.removeClass("slick-initialized"), i.$slider.removeClass("slick-dotted"), i.unslicked = !0, t || i.$slider.trigger("destroy", [i])
    }, t.prototype.disableTransition = function(e) {
      var t = this,
        i = {};
      i[t.transitionType] = "", !1 === t.options.fade ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i)
    }, t.prototype.fadeSlide = function(e, t) {
      var i = this;
      !1 === i.cssTransitions ? (i.$slides.eq(e).css({
        zIndex: i.options.zIndex
      }), i.$slides.eq(e).animate({
        opacity: 1
      }, i.options.speed, i.options.easing, t)) : (i.applyTransition(e), i.$slides.eq(e).css({
        opacity: 1,
        zIndex: i.options.zIndex
      }), t && setTimeout(function() {
        i.disableTransition(e), t.call()
      }, i.options.speed))
    }, t.prototype.fadeSlideOut = function(e) {
      var t = this;
      !1 === t.cssTransitions ? t.$slides.eq(e).animate({
        opacity: 0,
        zIndex: t.options.zIndex - 2
      }, t.options.speed, t.options.easing) : (t.applyTransition(e), t.$slides.eq(e).css({
        opacity: 0,
        zIndex: t.options.zIndex - 2
      }))
    }, t.prototype.filterSlides = t.prototype.slickFilter = function(e) {
      var t = this;
      null !== e && (t.$slidesCache = t.$slides, t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit())
    }, t.prototype.focusHandler = function() {
      var t = this;
      t.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function(i) {
        i.stopImmediatePropagation();
        var n = e(this);
        setTimeout(function() {
          t.options.pauseOnFocus && (t.focussed = n.is(":focus"), t.autoPlay())
        }, 0)
      })
    }, t.prototype.getCurrent = t.prototype.slickCurrentSlide = function() {
      return this.currentSlide
    }, t.prototype.getDotCount = function() {
      var e = this,
        t = 0,
        i = 0,
        n = 0;
      if (!0 === e.options.infinite)
        if (e.slideCount <= e.options.slidesToShow) ++n;
        else
          for (; t < e.slideCount;) ++n, t = i + e.options.slidesToScroll, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
      else if (!0 === e.options.centerMode) n = e.slideCount;
      else if (e.options.asNavFor)
        for (; t < e.slideCount;) ++n, t = i + e.options.slidesToScroll, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
      else n = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
      return n - 1
    }, t.prototype.getLeft = function(e) {
      var t, i, n, o, s = this,
        r = 0;
      return s.slideOffset = 0, i = s.$slides.first().outerHeight(!0), !0 === s.options.infinite ? (s.slideCount > s.options.slidesToShow && (s.slideOffset = s.slideWidth * s.options.slidesToShow * -1, o = -1, !0 === s.options.vertical && !0 === s.options.centerMode && (2 === s.options.slidesToShow ? o = -1.5 : 1 === s.options.slidesToShow && (o = -2)), r = i * s.options.slidesToShow * o), s.slideCount % s.options.slidesToScroll != 0 && e + s.options.slidesToScroll > s.slideCount && s.slideCount > s.options.slidesToShow && (e > s.slideCount ? (s.slideOffset = (s.options.slidesToShow - (e - s.slideCount)) * s.slideWidth * -1, r = (s.options.slidesToShow - (e - s.slideCount)) * i * -1) : (s.slideOffset = s.slideCount % s.options.slidesToScroll * s.slideWidth * -1, r = s.slideCount % s.options.slidesToScroll * i * -1))) : e + s.options.slidesToShow > s.slideCount && (s.slideOffset = (e + s.options.slidesToShow - s.slideCount) * s.slideWidth, r = (e + s.options.slidesToShow - s.slideCount) * i), s.slideCount <= s.options.slidesToShow && (s.slideOffset = 0, r = 0), !0 === s.options.centerMode && s.slideCount <= s.options.slidesToShow ? s.slideOffset = s.slideWidth * Math.floor(s.options.slidesToShow) / 2 - s.slideWidth * s.slideCount / 2 : !0 === s.options.centerMode && !0 === s.options.infinite ? s.slideOffset += s.slideWidth * Math.floor(s.options.slidesToShow / 2) - s.slideWidth : !0 === s.options.centerMode && (s.slideOffset = 0, s.slideOffset += s.slideWidth * Math.floor(s.options.slidesToShow / 2)), t = !1 === s.options.vertical ? e * s.slideWidth * -1 + s.slideOffset : e * i * -1 + r, !0 === s.options.variableWidth && (n = s.slideCount <= s.options.slidesToShow || !1 === s.options.infinite ? s.$slideTrack.children(".slick-slide").eq(e) : s.$slideTrack.children(".slick-slide").eq(e + s.options.slidesToShow), t = !0 === s.options.rtl ? n[0] ? -1 * (s.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, !0 === s.options.centerMode && (n = s.slideCount <= s.options.slidesToShow || !1 === s.options.infinite ? s.$slideTrack.children(".slick-slide").eq(e) : s.$slideTrack.children(".slick-slide").eq(e + s.options.slidesToShow + 1), t = !0 === s.options.rtl ? n[0] ? -1 * (s.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, t += (s.$list.width() - n.outerWidth()) / 2)), t
    }, t.prototype.getOption = t.prototype.slickGetOption = function(e) {
      return this.options[e]
    }, t.prototype.getNavigableIndexes = function() {
      var e, t = this,
        i = 0,
        n = 0,
        o = [];
      for (!1 === t.options.infinite ? e = t.slideCount : (i = -1 * t.options.slidesToScroll, n = -1 * t.options.slidesToScroll, e = 2 * t.slideCount); i < e;) o.push(i), i = n + t.options.slidesToScroll, n += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
      return o
    }, t.prototype.getSlick = function() {
      return this
    }, t.prototype.getSlideCount = function() {
      var t, i, n = this;
      return i = !0 === n.options.centerMode ? n.slideWidth * Math.floor(n.options.slidesToShow / 2) : 0, !0 === n.options.swipeToSlide ? (n.$slideTrack.find(".slick-slide").each(function(o, s) {
        if (s.offsetLeft - i + e(s).outerWidth() / 2 > -1 * n.swipeLeft) return t = s, !1
      }), Math.abs(e(t).attr("data-slick-index") - n.currentSlide) || 1) : n.options.slidesToScroll
    }, t.prototype.goTo = t.prototype.slickGoTo = function(e, t) {
      this.changeSlide({
        data: {
          message: "index",
          index: parseInt(e)
        }
      }, t)
    }, t.prototype.init = function(t) {
      var i = this;
      e(i.$slider).hasClass("slick-initialized") || (e(i.$slider).addClass("slick-initialized"), i.buildRows(), i.buildOut(), i.setProps(), i.startLoad(), i.loadSlider(), i.initializeEvents(), i.updateArrows(), i.updateDots(), i.checkResponsive(!0), i.focusHandler()), t && i.$slider.trigger("init", [i]), !0 === i.options.accessibility && i.initADA(), i.options.autoplay && (i.paused = !1, i.autoPlay())
    }, t.prototype.initADA = function() {
      var t = this,
        i = Math.ceil(t.slideCount / t.options.slidesToShow),
        n = t.getNavigableIndexes().filter(function(e) {
          return e >= 0 && e < t.slideCount
        });
      t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({
        "aria-hidden": "true",
        tabindex: "-1"
      }).find("a, input, button, select").attr({
        tabindex: "-1"
      }), null !== t.$dots && (t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function(i) {
        var o = n.indexOf(i);
        e(this).attr({
          role: "tabpanel",
          id: "slick-slide" + t.instanceUid + i,
          tabindex: -1
        }), -1 !== o && e(this).attr({
          "aria-describedby": "slick-slide-control" + t.instanceUid + o
        })
      }), t.$dots.attr("role", "tablist").find("li").each(function(o) {
        var s = n[o];
        e(this).attr({
          role: "presentation"
        }), e(this).find("button").first().attr({
          role: "tab",
          id: "slick-slide-control" + t.instanceUid + o,
          "aria-controls": "slick-slide" + t.instanceUid + s,
          "aria-label": o + 1 + " of " + i,
          "aria-selected": null,
          tabindex: "-1"
        })
      }).eq(t.currentSlide).find("button").attr({
        "aria-selected": "true",
        tabindex: "0"
      }).end());
      for (var o = t.currentSlide, s = o + t.options.slidesToShow; o < s; o++) t.$slides.eq(o).attr("tabindex", 0);
      t.activateADA()
    }, t.prototype.initArrowEvents = function() {
      var e = this;
      !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", {
        message: "previous"
      }, e.changeSlide), e.$nextArrow.off("click.slick").on("click.slick", {
        message: "next"
      }, e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow.on("keydown.slick", e.keyHandler), e.$nextArrow.on("keydown.slick", e.keyHandler)))
    }, t.prototype.initDotEvents = function() {
      var t = this;
      !0 === t.options.dots && (e("li", t.$dots).on("click.slick", {
        message: "index"
      }, t.changeSlide), !0 === t.options.accessibility && t.$dots.on("keydown.slick", t.keyHandler)), !0 === t.options.dots && !0 === t.options.pauseOnDotsHover && e("li", t.$dots).on("mouseenter.slick", e.proxy(t.interrupt, t, !0)).on("mouseleave.slick", e.proxy(t.interrupt, t, !1))
    }, t.prototype.initSlideEvents = function() {
      var t = this;
      t.options.pauseOnHover && (t.$list.on("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.on("mouseleave.slick", e.proxy(t.interrupt, t, !1)))
    }, t.prototype.initializeEvents = function() {
      var t = this;
      t.initArrowEvents(), t.initDotEvents(), t.initSlideEvents(), t.$list.on("touchstart.slick mousedown.slick", {
        action: "start"
      }, t.swipeHandler), t.$list.on("touchmove.slick mousemove.slick", {
        action: "move"
      }, t.swipeHandler), t.$list.on("touchend.slick mouseup.slick", {
        action: "end"
      }, t.swipeHandler), t.$list.on("touchcancel.slick mouseleave.slick", {
        action: "end"
      }, t.swipeHandler), t.$list.on("click.slick", t.clickHandler), e(document).on(t.visibilityChange, e.proxy(t.visibility, t)), !0 === t.options.accessibility && t.$list.on("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler), e(window).on("orientationchange.slick.slick-" + t.instanceUid, e.proxy(t.orientationChange, t)), e(window).on("resize.slick.slick-" + t.instanceUid, e.proxy(t.resize, t)), e("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault), e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition), e(t.setPosition)
    }, t.prototype.initUI = function() {
      var e = this;
      !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.show()
    }, t.prototype.keyHandler = function(e) {
      var t = this;
      e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && !0 === t.options.accessibility ? t.changeSlide({
        data: {
          message: !0 === t.options.rtl ? "next" : "previous"
        }
      }) : 39 === e.keyCode && !0 === t.options.accessibility && t.changeSlide({
        data: {
          message: !0 === t.options.rtl ? "previous" : "next"
        }
      }))
    }, t.prototype.lazyLoad = function() {
      function t(t) {
        e("img[data-lazy]", t).each(function() {
          var t = e(this),
            i = e(this).attr("data-lazy"),
            n = e(this).attr("data-srcset"),
            o = e(this).attr("data-sizes") || s.$slider.attr("data-sizes"),
            r = document.createElement("img");
          r.onload = function() {
            t.animate({
              opacity: 0
            }, 100, function() {
              n && (t.attr("srcset", n), o && t.attr("sizes", o)), t.attr("src", i).animate({
                opacity: 1
              }, 200, function() {
                t.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
              }), s.$slider.trigger("lazyLoaded", [s, t, i])
            })
          }, r.onerror = function() {
            t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), s.$slider.trigger("lazyLoadError", [s, t, i])
          }, r.src = i
        })
      }
      var i, n, o, s = this;
      if (!0 === s.options.centerMode ? !0 === s.options.infinite ? o = (n = s.currentSlide + (s.options.slidesToShow / 2 + 1)) + s.options.slidesToShow + 2 : (n = Math.max(0, s.currentSlide - (s.options.slidesToShow / 2 + 1)), o = s.options.slidesToShow / 2 + 1 + 2 + s.currentSlide) : (n = s.options.infinite ? s.options.slidesToShow + s.currentSlide : s.currentSlide, o = Math.ceil(n + s.options.slidesToShow), !0 === s.options.fade && (n > 0 && n--, o <= s.slideCount && o++)), i = s.$slider.find(".slick-slide").slice(n, o), "anticipated" === s.options.lazyLoad)
        for (var r = n - 1, a = o, l = s.$slider.find(".slick-slide"), c = 0; c < s.options.slidesToScroll; c++) r < 0 && (r = s.slideCount - 1), i = (i = i.add(l.eq(r))).add(l.eq(a)), r--, a++;
      t(i), s.slideCount <= s.options.slidesToShow ? t(s.$slider.find(".slick-slide")) : s.currentSlide >= s.slideCount - s.options.slidesToShow ? t(s.$slider.find(".slick-cloned").slice(0, s.options.slidesToShow)) : 0 === s.currentSlide && t(s.$slider.find(".slick-cloned").slice(-1 * s.options.slidesToShow))
    }, t.prototype.loadSlider = function() {
      var e = this;
      e.setPosition(), e.$slideTrack.css({
        opacity: 1
      }), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
    }, t.prototype.next = t.prototype.slickNext = function() {
      this.changeSlide({
        data: {
          message: "next"
        }
      })
    }, t.prototype.orientationChange = function() {
      var e = this;
      e.checkResponsive(), e.setPosition()
    }, t.prototype.pause = t.prototype.slickPause = function() {
      var e = this;
      e.autoPlayClear(), e.paused = !0
    }, t.prototype.play = t.prototype.slickPlay = function() {
      var e = this;
      e.autoPlay(), e.options.autoplay = !0, e.paused = !1, e.focussed = !1, e.interrupted = !1
    }, t.prototype.postSlide = function(t) {
      var i = this;
      i.unslicked || (i.$slider.trigger("afterChange", [i, t]), i.animating = !1, i.slideCount > i.options.slidesToShow && i.setPosition(), i.swipeLeft = null, i.options.autoplay && i.autoPlay(), !0 === i.options.accessibility && (i.initADA(), i.options.focusOnChange && e(i.$slides.get(i.currentSlide)).attr("tabindex", 0).focus()))
    }, t.prototype.prev = t.prototype.slickPrev = function() {
      this.changeSlide({
        data: {
          message: "previous"
        }
      })
    }, t.prototype.preventDefault = function(e) {
      e.preventDefault()
    }, t.prototype.progressiveLazyLoad = function(t) {
      t = t || 1;
      var i, n, o, s, r, a = this,
        l = e("img[data-lazy]", a.$slider);
      l.length ? (i = l.first(), n = i.attr("data-lazy"), o = i.attr("data-srcset"), s = i.attr("data-sizes") || a.$slider.attr("data-sizes"), (r = document.createElement("img")).onload = function() {
        o && (i.attr("srcset", o), s && i.attr("sizes", s)), i.attr("src", n).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === a.options.adaptiveHeight && a.setPosition(), a.$slider.trigger("lazyLoaded", [a, i, n]), a.progressiveLazyLoad()
      }, r.onerror = function() {
        t < 3 ? setTimeout(function() {
          a.progressiveLazyLoad(t + 1)
        }, 500) : (i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), a.$slider.trigger("lazyLoadError", [a, i, n]), a.progressiveLazyLoad())
      }, r.src = n) : a.$slider.trigger("allImagesLoaded", [a])
    }, t.prototype.refresh = function(t) {
      var i, n, o = this;
      n = o.slideCount - o.options.slidesToShow, !o.options.infinite && o.currentSlide > n && (o.currentSlide = n), o.slideCount <= o.options.slidesToShow && (o.currentSlide = 0), i = o.currentSlide, o.destroy(!0), e.extend(o, o.initials, {
        currentSlide: i
      }), o.init(), t || o.changeSlide({
        data: {
          message: "index",
          index: i
        }
      }, !1)
    }, t.prototype.registerBreakpoints = function() {
      var t, i, n, o = this,
        s = o.options.responsive || null;
      if ("array" === e.type(s) && s.length) {
        o.respondTo = o.options.respondTo || "window";
        for (t in s)
          if (n = o.breakpoints.length - 1, s.hasOwnProperty(t)) {
            for (i = s[t].breakpoint; n >= 0;) o.breakpoints[n] && o.breakpoints[n] === i && o.breakpoints.splice(n, 1), n--;
            o.breakpoints.push(i), o.breakpointSettings[i] = s[t].settings
          } o.breakpoints.sort(function(e, t) {
          return o.options.mobileFirst ? e - t : t - e
        })
      }
    }, t.prototype.reinit = function() {
      var t = this;
      t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"), t.slideCount = t.$slides.length, t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), t.registerBreakpoints(), t.setProps(), t.setupInfinite(), t.buildArrows(), t.updateArrows(), t.initArrowEvents(), t.buildDots(), t.updateDots(), t.initDotEvents(), t.cleanUpSlideEvents(), t.initSlideEvents(), t.checkResponsive(!1, !0), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), t.setPosition(), t.focusHandler(), t.paused = !t.options.autoplay, t.autoPlay(), t.$slider.trigger("reInit", [t])
    }, t.prototype.resize = function() {
      var t = this;
      e(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout(function() {
        t.windowWidth = e(window).width(), t.checkResponsive(), t.unslicked || t.setPosition()
      }, 50))
    }, t.prototype.removeSlide = t.prototype.slickRemove = function(e, t, i) {
      var n = this;
      if (e = "boolean" == typeof e ? !0 === (t = e) ? 0 : n.slideCount - 1 : !0 === t ? --e : e, n.slideCount < 1 || e < 0 || e > n.slideCount - 1) return !1;
      n.unload(), !0 === i ? n.$slideTrack.children().remove() : n.$slideTrack.children(this.options.slide).eq(e).remove(), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slidesCache = n.$slides, n.reinit()
    }, t.prototype.setCSS = function(e) {
      var t, i, n = this,
        o = {};
      !0 === n.options.rtl && (e = -e), t = "left" == n.positionProp ? Math.ceil(e) + "px" : "0px", i = "top" == n.positionProp ? Math.ceil(e) + "px" : "0px", o[n.positionProp] = e, !1 === n.transformsEnabled ? n.$slideTrack.css(o) : (o = {}, !1 === n.cssTransitions ? (o[n.animType] = "translate(" + t + ", " + i + ")", n.$slideTrack.css(o)) : (o[n.animType] = "translate3d(" + t + ", " + i + ", 0px)", n.$slideTrack.css(o)))
    }, t.prototype.setDimensions = function() {
      var e = this;
      !1 === e.options.vertical ? !0 === e.options.centerMode && e.$list.css({
        padding: "0px " + e.options.centerPadding
      }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), !0 === e.options.centerMode && e.$list.css({
        padding: e.options.centerPadding + " 0px"
      })), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), !1 === e.options.vertical && !1 === e.options.variableWidth ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : !0 === e.options.variableWidth ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
      var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
      !1 === e.options.variableWidth && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
    }, t.prototype.setFade = function() {
      var t, i = this;
      i.$slides.each(function(n, o) {
        t = i.slideWidth * n * -1, !0 === i.options.rtl ? e(o).css({
          position: "relative",
          right: t,
          top: 0,
          zIndex: i.options.zIndex - 2,
          opacity: 0
        }) : e(o).css({
          position: "relative",
          left: t,
          top: 0,
          zIndex: i.options.zIndex - 2,
          opacity: 0
        })
      }), i.$slides.eq(i.currentSlide).css({
        zIndex: i.options.zIndex - 1,
        opacity: 1
      })
    }, t.prototype.setHeight = function() {
      var e = this;
      if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
        var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
        e.$list.css("height", t)
      }
    }, t.prototype.setOption = t.prototype.slickSetOption = function() {
      var t, i, n, o, s, r = this,
        a = !1;
      if ("object" === e.type(arguments[0]) ? (n = arguments[0], a = arguments[1], s = "multiple") : "string" === e.type(arguments[0]) && (n = arguments[0], o = arguments[1], a = arguments[2], "responsive" === arguments[0] && "array" === e.type(arguments[1]) ? s = "responsive" : void 0 !== arguments[1] && (s = "single")), "single" === s) r.options[n] = o;
      else if ("multiple" === s) e.each(n, function(e, t) {
        r.options[e] = t
      });
      else if ("responsive" === s)
        for (i in o)
          if ("array" !== e.type(r.options.responsive)) r.options.responsive = [o[i]];
          else {
            for (t = r.options.responsive.length - 1; t >= 0;) r.options.responsive[t].breakpoint === o[i].breakpoint && r.options.responsive.splice(t, 1), t--;
            r.options.responsive.push(o[i])
          } a && (r.unload(), r.reinit())
    }, t.prototype.setPosition = function() {
      var e = this;
      e.setDimensions(), e.setHeight(), !1 === e.options.fade ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e])
    }, t.prototype.setProps = function() {
      var e = this,
        t = document.body.style;
      e.positionProp = !0 === e.options.vertical ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), void 0 === t.WebkitTransition && void 0 === t.MozTransition && void 0 === t.msTransition || !0 === e.options.useCSS && (e.cssTransitions = !0),
        e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)), void 0 !== t.transform && !1 !== e.animType && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType
    }, t.prototype.setSlideClasses = function(e) {
      var t, i, n, o, s = this;
      if (i = s.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), s.$slides.eq(e).addClass("slick-current"), !0 === s.options.centerMode) {
        var r = s.options.slidesToShow % 2 == 0 ? 1 : 0;
        t = Math.floor(s.options.slidesToShow / 2), !0 === s.options.infinite && (e >= t && e <= s.slideCount - 1 - t ? s.$slides.slice(e - t + r, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (n = s.options.slidesToShow + e, i.slice(n - t + 1 + r, n + t + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? i.eq(i.length - 1 - s.options.slidesToShow).addClass("slick-center") : e === s.slideCount - 1 && i.eq(s.options.slidesToShow).addClass("slick-center")), s.$slides.eq(e).addClass("slick-center")
      } else e >= 0 && e <= s.slideCount - s.options.slidesToShow ? s.$slides.slice(e, e + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= s.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (o = s.slideCount % s.options.slidesToShow, n = !0 === s.options.infinite ? s.options.slidesToShow + e : e, s.options.slidesToShow == s.options.slidesToScroll && s.slideCount - e < s.options.slidesToShow ? i.slice(n - (s.options.slidesToShow - o), n + o).addClass("slick-active").attr("aria-hidden", "false") : i.slice(n, n + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
      "ondemand" !== s.options.lazyLoad && "anticipated" !== s.options.lazyLoad || s.lazyLoad()
    }, t.prototype.setupInfinite = function() {
      var t, i, n, o = this;
      if (!0 === o.options.fade && (o.options.centerMode = !1), !0 === o.options.infinite && !1 === o.options.fade && (i = null, o.slideCount > o.options.slidesToShow)) {
        for (n = !0 === o.options.centerMode ? o.options.slidesToShow + 1 : o.options.slidesToShow, t = o.slideCount; t > o.slideCount - n; t -= 1) i = t - 1, e(o.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i - o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");
        for (t = 0; t < n + o.slideCount; t += 1) i = t, e(o.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i + o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");
        o.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
          e(this).attr("id", "")
        })
      }
    }, t.prototype.interrupt = function(e) {
      var t = this;
      e || t.autoPlay(), t.interrupted = e
    }, t.prototype.selectHandler = function(t) {
      var i = this,
        n = e(t.target).is(".slick-slide") ? e(t.target) : e(t.target).parents(".slick-slide"),
        o = parseInt(n.attr("data-slick-index"));
      o || (o = 0), i.slideCount <= i.options.slidesToShow ? i.slideHandler(o, !1, !0) : i.slideHandler(o)
    }, t.prototype.slideHandler = function(e, t, i) {
      var n, o, s, r, a, l = null,
        c = this;
      if (t = t || !1, !(!0 === c.animating && !0 === c.options.waitForAnimate || !0 === c.options.fade && c.currentSlide === e))
        if (!1 === t && c.asNavFor(e), n = e, l = c.getLeft(n), r = c.getLeft(c.currentSlide), c.currentLeft = null === c.swipeLeft ? r : c.swipeLeft, !1 === c.options.infinite && !1 === c.options.centerMode && (e < 0 || e > c.getDotCount() * c.options.slidesToScroll)) !1 === c.options.fade && (n = c.currentSlide, !0 !== i ? c.animateSlide(r, function() {
          c.postSlide(n)
        }) : c.postSlide(n));
        else if (!1 === c.options.infinite && !0 === c.options.centerMode && (e < 0 || e > c.slideCount - c.options.slidesToScroll)) !1 === c.options.fade && (n = c.currentSlide, !0 !== i ? c.animateSlide(r, function() {
        c.postSlide(n)
      }) : c.postSlide(n));
      else {
        if (c.options.autoplay && clearInterval(c.autoPlayTimer), o = n < 0 ? c.slideCount % c.options.slidesToScroll != 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + n : n >= c.slideCount ? c.slideCount % c.options.slidesToScroll != 0 ? 0 : n - c.slideCount : n, c.animating = !0, c.$slider.trigger("beforeChange", [c, c.currentSlide, o]), s = c.currentSlide, c.currentSlide = o, c.setSlideClasses(c.currentSlide), c.options.asNavFor && (a = (a = c.getNavTarget()).slick("getSlick")).slideCount <= a.options.slidesToShow && a.setSlideClasses(c.currentSlide), c.updateDots(), c.updateArrows(), !0 === c.options.fade) return !0 !== i ? (c.fadeSlideOut(s), c.fadeSlide(o, function() {
          c.postSlide(o)
        })) : c.postSlide(o), void c.animateHeight();
        !0 !== i ? c.animateSlide(l, function() {
          c.postSlide(o)
        }) : c.postSlide(o)
      }
    }, t.prototype.startLoad = function() {
      var e = this;
      !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading")
    }, t.prototype.swipeDirection = function() {
      var e, t, i, n, o = this;
      return e = o.touchObject.startX - o.touchObject.curX, t = o.touchObject.startY - o.touchObject.curY, i = Math.atan2(t, e), (n = Math.round(180 * i / Math.PI)) < 0 && (n = 360 - Math.abs(n)), n <= 45 && n >= 0 ? !1 === o.options.rtl ? "left" : "right" : n <= 360 && n >= 315 ? !1 === o.options.rtl ? "left" : "right" : n >= 135 && n <= 225 ? !1 === o.options.rtl ? "right" : "left" : !0 === o.options.verticalSwiping ? n >= 35 && n <= 135 ? "down" : "up" : "vertical"
    }, t.prototype.swipeEnd = function(e) {
      var t, i, n = this;
      if (n.dragging = !1, n.swiping = !1, n.scrolling) return n.scrolling = !1, !1;
      if (n.interrupted = !1, n.shouldClick = !(n.touchObject.swipeLength > 10), void 0 === n.touchObject.curX) return !1;
      if (!0 === n.touchObject.edgeHit && n.$slider.trigger("edge", [n, n.swipeDirection()]), n.touchObject.swipeLength >= n.touchObject.minSwipe) {
        switch (i = n.swipeDirection()) {
          case "left":
          case "down":
            t = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide + n.getSlideCount()) : n.currentSlide + n.getSlideCount(), n.currentDirection = 0;
            break;
          case "right":
          case "up":
            t = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide - n.getSlideCount()) : n.currentSlide - n.getSlideCount(), n.currentDirection = 1
        }
        "vertical" != i && (n.slideHandler(t), n.touchObject = {}, n.$slider.trigger("swipe", [n, i]))
      } else n.touchObject.startX !== n.touchObject.curX && (n.slideHandler(n.currentSlide), n.touchObject = {})
    }, t.prototype.swipeHandler = function(e) {
      var t = this;
      if (!(!1 === t.options.swipe || "ontouchend" in document && !1 === t.options.swipe || !1 === t.options.draggable && -1 !== e.type.indexOf("mouse"))) switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), e.data.action) {
        case "start":
          t.swipeStart(e);
          break;
        case "move":
          t.swipeMove(e);
          break;
        case "end":
          t.swipeEnd(e)
      }
    }, t.prototype.swipeMove = function(e) {
      var t, i, n, o, s, r, a = this;
      return s = void 0 !== e.originalEvent ? e.originalEvent.touches : null, !(!a.dragging || a.scrolling || s && 1 !== s.length) && (t = a.getLeft(a.currentSlide), a.touchObject.curX = void 0 !== s ? s[0].pageX : e.clientX, a.touchObject.curY = void 0 !== s ? s[0].pageY : e.clientY, a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))), r = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2))), !a.options.verticalSwiping && !a.swiping && r > 4 ? (a.scrolling = !0, !1) : (!0 === a.options.verticalSwiping && (a.touchObject.swipeLength = r), i = a.swipeDirection(), void 0 !== e.originalEvent && a.touchObject.swipeLength > 4 && (a.swiping = !0, e.preventDefault()), o = (!1 === a.options.rtl ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1), !0 === a.options.verticalSwiping && (o = a.touchObject.curY > a.touchObject.startY ? 1 : -1), n = a.touchObject.swipeLength, a.touchObject.edgeHit = !1, !1 === a.options.infinite && (0 === a.currentSlide && "right" === i || a.currentSlide >= a.getDotCount() && "left" === i) && (n = a.touchObject.swipeLength * a.options.edgeFriction, a.touchObject.edgeHit = !0), !1 === a.options.vertical ? a.swipeLeft = t + n * o : a.swipeLeft = t + n * (a.$list.height() / a.listWidth) * o, !0 === a.options.verticalSwiping && (a.swipeLeft = t + n * o), !0 !== a.options.fade && !1 !== a.options.touchMove && (!0 === a.animating ? (a.swipeLeft = null, !1) : void a.setCSS(a.swipeLeft))))
    }, t.prototype.swipeStart = function(e) {
      var t, i = this;
      if (i.interrupted = !0, 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow) return i.touchObject = {}, !1;
      void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), i.touchObject.startX = i.touchObject.curX = void 0 !== t ? t.pageX : e.clientX, i.touchObject.startY = i.touchObject.curY = void 0 !== t ? t.pageY : e.clientY, i.dragging = !0
    }, t.prototype.unfilterSlides = t.prototype.slickUnfilter = function() {
      var e = this;
      null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit())
    }, t.prototype.unload = function() {
      var t = this;
      e(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(), t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(), t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }, t.prototype.unslick = function(e) {
      var t = this;
      t.$slider.trigger("unslick", [t, e]), t.destroy()
    }, t.prototype.updateArrows = function() {
      var e = this;
      Math.floor(e.options.slidesToShow / 2), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - 1 && !0 === e.options.centerMode && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }, t.prototype.updateDots = function() {
      var e = this;
      null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").end(), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active"))
    }, t.prototype.visibility = function() {
      var e = this;
      e.options.autoplay && (document[e.hidden] ? e.interrupted = !0 : e.interrupted = !1)
    }, e.fn.slick = function() {
      var e, i, n = this,
        o = arguments[0],
        s = Array.prototype.slice.call(arguments, 1),
        a = n.length;
      for (e = 0; e < a; e++)
        if ("object" == (void 0 === o ? "undefined" : r(o)) || void 0 === o ? n[e].slick = new t(n[e], o) : i = n[e].slick[o].apply(n[e].slick, s), void 0 !== i) return i;
      return n
    }
  })
}, function(e, t, i) {
  "use strict";
  var n = i(2);
  e.exports = function() {
    ! function(e) {
      function t(e) {
        var t = document.createElement("canvas"),
          i = t.getContext("2d"),
          n = new Image;
        n.src = e, t.width = n.width, t.height = n.height, i.drawImage(n, 0, 0);
        for (var o = i.getImageData(0, 0, t.width, t.height), s = 0; s < o.height; s++)
          for (var r = 0; r < o.width; r++) {
            var a = 4 * s * o.width + 4 * r,
              l = (o.data[a] + o.data[a + 1] + o.data[a + 2]) / 3;
            o.data[a] = l, o.data[a + 1] = l, o.data[a + 2] = l
          }
        return i.putImageData(o, 0, 0, 0, 0, o.width, o.height), t.toDataURL()
      }
      e(".js-imgGray img").each(function(i) {
        var n = e(this);
        n.css({
          position: "absolute"
        }).wrap("<div class='topSlider__imgInner' style='display: inline-block'>").clone().addClass("js-imgGrayItem").css({
          position: "absolute",
          "z-index": "1",
          opacity: "0"
        }).insertBefore(n).queue(function() {
          var t = e(this);
          t.parent().css({
            width: this.width,
            height: this.height
          }), t.dequeue()
        }), this.src = t(this.src)
      }), e(".js-imgGrayOD img").each(function(i) {
        var n = e(this);
        n.parent().hasClass("js-imgGrayODWrap") || n.css({
          position: "absolute"
        }).wrap("<div class='js-imgGrayODWrap' style='display: inline-block'>").clone().addClass("js-imgGrayItem").css({
          position: "absolute",
          "z-index": "1",
          opacity: "0"
        }).insertBefore(n).queue(function() {
          var t = e(this);
          t.parent().css({
            width: this.width,
            height: this.height
          }), t.dequeue()
        }), n.hasClass("js-imgGrayItem") || (this.src = t(this.src))
      })
    }(n)
  }
}, function(e, t, i) {
  "use strict";
  var n = i(2);
  e.exports = function() {
    ! function(e) {
      function t() {
        e(".bannerSlide__list").slick("unslick"), i()
      }

      function i() {
        e(".bannerSlide__list").slick({
          infinite: !0,
          autoplay: !0,
          autoplaySpeed: 2e3,
          arrows: !1,
          cssEase: "ease-in-out",
          speed: 900,
          vertical: !0
        })
      }

      function n() {
        var t = e(".bannerSlide__list .u-displaySp").height();
        e(".bannerSlide").css({
          "padding-bottom": t + 10
        })
      }
      i(), e("body").hasClass("sp") && (n(), e(window).on("resize", function() {
        t(), n()
      }))
    }(n)
  }
}, function(e, t, i) {
  "use strict";
  var n = i(2);
  e.exports = function() {
    ! function(e) {
      var t = e(".js-movieControl"),
        i = e(".js-movieControlArea"),
        n = t.find(".movie1"),
        o = t.find(".movie2"),
        s = n.find("video"),
        r = o.find("video"),
        a = (s.data("url"), r.data("url"), !1);
      e("body").hasClass("pc"), e(window).scroll(function() {
        var t = i.offset().top,
          s = t + i.outerHeight(!0),
          r = e(this).scrollTop(),
          l = r + e(this).height();
        !a && s < l ? (a = !0, n.css({
          "z-index": "-1"
        }), o.css({
          "z-index": "0",
          display: "block"
        }), e("body").hasClass("pc")) : a && s > l && (a = !1, n.css({
          "z-index": "0"
        }), o.css({
          "z-index": "-1",
          display: "none"
        }))
      })
    }(n)
  }
}, function(e, t, i) {
  "use strict";
  var n = i(2);
  e.exports = function() {
    ! function(e) {
      function t() {
        r > o && (s = n.offset().left, i.css({
          left: s
        }))
      }
      var i = e(".js-movieControl"),
        n = e("#content"),
        o = 767,
        s = n.offset().left,
        r = e(window).width();
      t(), e(window).resize(function() {
        t()
      })
    }(n)
  }
}, function(e, t, i) {
  "use strict";
  var n = i(2);
  e.exports = function() {
    ! function(e) {
      function t(t) {
        e('.js-topSlide li[data-slick-index="' + t + '"] .js-topSlideLink').addClass("is-active"), e('.js-topSlide li[data-slick-index="' + t + '"] .js-topSlideText').animate({
          opacity: 1
        }, 500), e('.js-topSlide li[data-slick-index="' + t + '"] .js-topSlideText::after').animate({
          opacity: 1
        }, 500), e('.js-topSlide li[data-slick-index="' + t + '"] .js-imgGrayItem').animate({
          opacity: 1
        }, 500)
      }

      function i(t) {
        var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        i > 0 ? e('.js-topSlide li[data-slick-index="' + t + '"] .js-topSlideLink').addClass("is-active") : e('.js-topSlide li[data-slick-index="' + t + '"] .js-topSlideLink').removeClass("is-active"), e('.js-topSlide li[data-slick-index="' + t + '"] .js-topSlideText').css({
          opacity: i
        }), e('.js-topSlide li[data-slick-index="' + t + '"] .js-topSlideText::after').css({
          opacity: i
        }), e('.js-topSlide li[data-slick-index="' + t + '"] .js-imgGrayItem').css({
          opacity: i
        })
      }

      function n(n, o) {
        var s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        t(n), e('.js-topSlide li[data-slick-index="' + o + '"] .js-topSlideLink').addClass("is-active"), e('.js-topSlide li[data-slick-index="' + o + '"] .js-topSlideText').animate({
          opacity: 1
        }, 500, function() {
          i(n, s)
        }), e('.js-topSlide li[data-slick-index="' + n + '"] .js-topSlideText::after').animate({
          opacity: 1
        }, 500), e('.js-topSlide li[data-slick-index="' + o + '"] .js-imgGrayItem').animate({
          opacity: 1
        }, 500)
      }
      var o = e(".js-topSlide");
      o.find(".topSlider__link");
      o.on("init", function(t) {
        i(0, 1), e(".topSlider__view").css({
          height: "auto",
          opacity: "1"
        })
      }), o.slick({
        slidesToShow: 4,
        variableWidth: !0,
        infinite: !0,
        autoplay: !0,
        autoplaySpeed: 4e3,
        prevArrow: e(".topSlider__left"),
        nextArrow: e(".topSlider__right"),
        swipe: !1,
        responsive: [{
          breakpoint: 767,
          settings: {
            slidesToShow: 3
          }
        }]
      }), o.on("beforeChange", function(e, o, s, r) {
        i(s), s === o.slideCount - 1 ? 0 !== r ? t(r) : n(s + 1, r) : 0 === s ? r !== o.slideCount - 1 ? t(r) : n(-1, r) : t(r)
      })
    }(n)
  }
}, function(e, t, i) {
  "use strict";
  var n = i(2);
  e.exports = function() {
    ! function(e) {
      e(".mainVisual__Slider").slick({
        slidesToShow: 1,
        infinite: !0,
        arrows: !1,
        autoplay: !0,
        autoplaySpeed: 6e3,
        speed: 2e3,
        swipe: !0,
        fade: !0,
        pauseOnHover: !1,
        lazyLoad: "ondemand",
        zIndex: 3
      })
    }(n)
  }
}, function(e, t, i) {
  "use strict";
  var n = i(2);
  e.exports = function() {
    ! function(e) {
      function t() {
        s || (0 === a ? n > 0 && (s = !0, i.animate({
          top: "-102px"
        }, 200, function() {
          a = 1, s = !1
        }), e(".bannerSlide").animate({
          opacity: 1,
          top: 0
        }, 200), e("#iconMenu").stop().fadeOut(200), l.fadeOut()) : 1 === a ? n < o - 10 && n >= 0 && (s = !0, i.animate({
          top: "0px"
        }, 200, function() {
          a = 2, s = !1
        }), e(".footer__fixedNav").removeClass("isActive"), e(".toTop").removeClass("isActive"), l.fadeIn()) : n > o + 10 && n >= 0 && (s = !0, i.animate({
          top: "-102px"
        }, 200, function() {
          a = 1, s = !1
        }), e(".footer__fixedNav").addClass("isActive"), e(".toTop").addClass("isActive"), l.fadeOut()))
      }
      var i = e("#header"),
        n = 0,
        o = 0,
        s = !1,
        r = !1,
        a = 0,
        l = e(".js-headerLogo100");
      i.hover(function() {
        r = !0
      }, function() {
        r = !1
      }), e(window).on("scroll", function() {
        o = n, n = e(this).scrollTop(), e("#wrap").hasClass("is-display") || r || t()
      }), e("#iconMenu").on("click", function() {
        a = 1, s = !0, i.animate({
          top: "0px"
        }, 200, function() {
          a = 2, s = !1
        }), e("#iconMenu").stop().fadeOut(300), l.show()
      })
    }(n)
  }
}, function(e, t, i) {
  "use strict";
  var n = i(2);
  e.exports = function() {
    ! function(e) {
      function t() {
        e("body").hasClass("top") && e("#wrap").css({
          position: "fixed",
          width: "100%",
          top: -1 * r,
          "z-index": 0
        }).addClass("is-display")
      }

      function i() {
        e("body").hasClass("top") && (e("#wrap").attr({
          style: ""
        }), e("html, body").animate({
          scrollTop: r
        }, 0, function() {
          setTimeout(function() {
            e(".js-topHoverMenuLink").hasClass("is-active") || e("#wrap").removeClass("is-display")
          }, 50)
        }))
      }
      var n = e(".js-topHoverMenu"),
        o = e(".js-topHoverMenuLink"),
        s = e(".js-topHoverMenuDisplay"),
        r = (e(window).height(), e(window).scrollTop()),
        a = navigator.userAgent,
        l = !0,
        c = !1;
      a.indexOf("Android") > 0 && !(a.indexOf("Android") > 0 && a.indexOf("Mobile") > 0) || a.indexOf("iPad") > 0 || (n.hover(function() {}, function() {
        c = !1
      }), o.hover(function() {
        c || (r = e(window).scrollTop()), c = !0, t(), e(this).addClass("is-active"), e(this).next().is(":visible") ? l = !1 : e(this).next().show()
      }, function() {
        i(), e(this).removeClass("is-active"), e(this).next().hide()
      }), s.hover(function() {
        t(), e(this).prev().addClass("is-active"), e(this).show()
      }, function() {
        var t = e(this);
        setTimeout(function() {
          l && (i(), t.prev().removeClass("is-active"), t.hide()), l = !0
        }, 50)
      })), e(".nav__item--hasChildPC").hover(function() {
        e(this).find(".nav__bottomList").fadeIn(200)
      }, function() {
        e(this).find(".nav__bottomList").fadeOut(200)
      })
    }(n)
  }
}, function(e, t, i) {
  "use strict";
  var n = i(2);
  e.exports = function() {
    ! function(e) {
      e(".skiplink__link").focusin(function(t) {
        e(this).css("height", "auto").css("font-size", "inherit")
      }).focusout(function(t) {
        e(this).css("height", 0).css("font-size", 0)
      })
    }(n)
  }
}, function(e, t, i) {
  "use strict";
  var n = i(2);
  e.exports = function() {
    ! function(e) {
      var t = e(".js-topHoverNav"),
        i = e(".js-topHoverNavDisplay");
      t.hover(function() {
        e(this).next().stop().fadeIn(200)
      }, function() {
        e(this).next().hide()
      }), i.hover(function() {
        e(this).show()
      }, function() {
        e(this).hide()
      })
    }(n)
  }
}, function(e, t, i) {
  "use strict";
  var n = i(2);
  e.exports = function() {
    ! function(e) {
      var t, i = e(".js-menuSp"),
        n = (e("body"), e(".js-menuSpScroll")),
        o = (e("#header .header"), e("#header .navAreaWrap")),
        s = e("#header"),
        r = e(window).innerHeight(),
        a = s.innerHeight();
      i.click(function(i) {
        i.preventDefault(), e(this).toggleClass("navBtn--open"), e(this).hasClass("navBtn--open") ? (e("#wrap").addClass("is-display"), t = e(window).scrollTop(), n.css({
          height: r - a,
          overflow: "scroll"
        }), o.fadeIn(200), s.addClass("isActive")) : (e("#wrap").removeClass("is-display"), n.css({
          height: "auto",
          overflow: "normal"
        }), o.fadeOut(200), s.removeClass("isActive"), e("html, body").animate({
          scrollTop: t
        }, 0))
      }), e(window).scroll(function() {}), e(window).resize(function() {
        r = e(window).innerHeight(), a = s.innerHeight()
      }), e(".js-menuAccordion").click(function(t) {
        t.preventDefault(), e(this).next().slideToggle(), e(this).toggleClass("is-open")
      }), e(".js-menuIconAccordion .nav__iconArrow").click(function(t) {
        t.preventDefault();
        var i = e(this).parents(".js-menuIconAccordion");
        i.next().slideToggle(), i.toggleClass("is-open")
      })
    }(n)
  }
}, function(e, t, i) {
  "use strict";
  var n = i(2);
  e.exports = function() {
    ! function(e) {
      function t() {
        e(".js-campusSlider__slideItem").each(function(t) {
          var i = p(0, t - 3, b.length);
          e(this).attr("data-index", i), u(t, i, !0)
        }), d(), c(x), l(), e(".js-campusSlider__right").on("click", function() {
          a(x, x + 1)
        }), e(".js-campusSlider__left").on("click", function() {
          a(x, x - 1)
        })
      }

      function i() {
        var t, i = 0;
        e.each(b, function() {
          t = new Image, t.onload = function() {
            if (++i >= b.length) {
              var t = new e.Event("imageLoaded");
              f.trigger(t)
            }
          }, t.src = y + this.imgfile, k.push(t)
        })
      }

      function n() {
        var t = p(e(".js-campusSlider__slideItem:first-child").attr("data-index"), -1, b.length),
          i = p(e(".js-campusSlider__slideItem:last-child").attr("data-index"), -1, b.length),
          n = e(".js-campusSlider__slideItem:last-child").detach();
        n.attr("data-index", t), n.prependTo(".js-campusSlider__slideArea"), u(0, t), u(6, i)
      }

      function o() {
        var t = p(e(".js-campusSlider__slideItem:first-child").attr("data-index"), 1, b.length),
          i = p(e(".js-campusSlider__slideItem:last-child").attr("data-index"), 1, b.length),
          n = e(".js-campusSlider__slideItem:first-child").detach();
        n.attr("data-index", i), n.appendTo(".js-campusSlider__slideArea"), u(0, t), u(6, i)
      }

      function s(t) {
        var i = e(".js-campusSlider__slideItem .js-imgGrayItem").eq(t);
        i.next().attr("src", r(i.attr("src")))
      }

      function r(e) {
        var t = document.createElement("canvas"),
          i = t.getContext("2d"),
          n = new Image;
        n.src = e, t.width = n.width, t.height = n.height, i.drawImage(n, 0, 0);
        for (var o = i.getImageData(0, 0, t.width, t.height), s = 0; s < o.height; s++)
          for (var r = 0; r < o.width; r++) {
            var a = 4 * s * o.width + 4 * r,
              l = (o.data[a] + o.data[a + 1] + o.data[a + 2]) / 3;
            o.data[a] = l, o.data[a + 1] = l, o.data[a + 2] = l
          }
        return i.putImageData(o, 0, 0, 0, 0, o.width, o.height), t.toDataURL()
      }

      function a(t, i) {
        h.stop().animate({
          left: (i - 1) * -g
        }, 300, "swing", function() {
          c(i), t < i ? o() : n(), e(".js-imgGrayItem").css("opacity", 0).css("z-index", 2), d(), l()
        })
      }

      function l() {
        var t = parseInt(e(".js-campusSlider__slideItem").eq(x).attr("data-index"));
        e(".js-campusSlider__name").text(b[t].name), e(".js-campusSlider__txt").text(b[t].txt), e(".js-campusSlider__place").text(b[t].place)
      }

      function c(t) {
        var i = e(".js-campusSlider__slideItem .js-imgGrayItem").eq(t).clone();
        i.removeAttr("style").removeClass().addClass("campusSlider__view").addClass("js-campusSlider__view");
        var n = e(".js-campusSlider__view").parent();
        n.empty(), n.append(i)
      }

      function d() {
        h.css("left", (x - 1) * -g), e(".js-campusSlider__slideItem .js-imgGrayItem").eq(x).css("opacity", 1).css("z-index", 2)
      }

      function u(t, i) {
        arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        e(".js-campusSlider__slideItem").eq(t).find(".campusSlider__slideImg").eq(0).attr("src", k[i].src), s(t)
      }

      function p(e, t, i) {
        var n = parseInt(i),
          o = parseInt(e) + parseInt(t);
        return o >= n ? o - n : o < 0 ? o + n : o
      }
      var f = e(".js-campusSlider"),
        h = e(".js-campusSlider__slideArea"),
        v = (e(".js-campusSlider__viewArea"), e(".js-campusSlider__slideItem").length),
        g = e(".js-campusSlider__slideItem").outerWidth(!0),
        m = v * g;
      h.css("width", m);
      var y, b, w, x = 3,
        k = [];
      if (e("body").hasClass("uni06")) w = "campus_atsugi.json";
      else {
        if (!e("body").hasClass("uni07")) return !1;
        w = "campus_nakano.json"
      }
      var S = function(t, i) {
        var n = t + i;
        return e.ajax({
          type: "get",
          url: n
        })
      }("/guide/assets/data/", w);
      S.done(function(e) {
        b = e.data, y = e.img_dir, i()
      }), S.fail(function(t, i, n) {
        return e(".js-campusSlider__name").text("�ǂݍ��݂Ɏ��s���܂����B"), e(".js-campusSlider__txt").text(""), e(".js-campusSlider__place").text(""), !1
      }), f.on("imageLoaded", function() {
        t()
      })
    }(n)
  }
}, function(e, t, i) {
  "use strict";
  var n = i(2);
  e.exports = function() {
    ! function(e) {
      function t() {
        d = e(window).scrollTop(), e("#wrap").css({
          position: "fixed",
          width: "100%",
          top: -1 * d,
          "z-index": 0
        })
      }

      function i() {
        e("#wrap").attr({
          style: ""
        }), e("html, body").animate({
          scrollTop: d
        }, 0)
      }
      var n = e(".js-modal"),
        o = e(".js-modalOpen"),
        s = e(".js-modalClose"),
        r = e(".js-modalTarget"),
        a = e(".js-modalLoading"),
        l = "",
        c = "",
        d = e(window).scrollTop();
      o.click(function(i) {
        i.preventDefault(), c = e(this).attr("href"), 0 === c.indexOf("#") ? n.fadeIn(200, function() {
          l = e(c).html(), t(), r.html('<div id="myself" class="modal-h100p">' + l + "</div>"), a.hide()
        }) : "" !== c && n.fadeIn(200, function() {
          t(), r.html('<iframe id="myself" src="' + c + '"></iframe>'), r.find("#myself").load(function() {
            a.hide()
          })
        })
      }), s.click(function(e) {
        e.preventDefault(), i(), n.fadeOut(200, function() {
          r.html('<div class="modal__loading"></div>'), a.show()
        })
      })
    }(n)
  }
}, function(e, t, i) {
  "use strict";
  var n = i(2);
  e.exports = function() {
    ! function(e) {
      function t() {
        m = "�S��" !== g
      }

      function i(e, t) {
        for (var i = "", n = 0; n < t[e].length; n++) i += '<li class="articleList__item">', i += '<a class="article" href="' + t[e][n].link + '">', i += '<img class="article__img" src="' + t[e][n].img + '" alt="">', i += '<p class="article__category article__category--' + t[e][n].class + '">' + t[e][n].genre + "</p>", i += '<p class="article__date">' + t[e][n].date + "</p>", i += '<p class="article__title">' + t[e][n].title + "</p>", i += "</a></li>";
        d.html(i)
      }

      function n(e, t, i, n) {
        for (var o = '<li class="paging__item"><a class="paging__link paging__link--prev js-changePostPrev' + (1 === e ? " is-disabled" : "") + '" href="">&lt;</a></li>'; t <= i; t++) o += '<li class="paging__item"><a class="paging__link js-changePostNum' + (t === e ? " is-active" : "") + '" href="">' + t + "</a></li>";
        o += '<li class="paging__item"><a class="paging__link paging__link--next js-changePostNext' + (e === n ? " is-disabled" : "") + '" href="">&gt;</a></li>', l.html(o)
      }

      function o(e, t) {
        var i, o;
        l.find(".is-active").removeClass("is-active"), t > f ? e <= 6 ? (i = 1, o = 11) : e >= 6 && e <= t - 5 ? (i = e - 5, o = e + 5) : e >= t - 5 && (i = t - 10, o = t) : (i = 1, o = t), n(e, i, o, t)
      }

      function s(e, t) {
        for (var i = '<li class="paging__item"><a class="paging__link paging__link--prev js-changePostPrev is-disabled" href="">&lt;</a></li>'; e <= t && e <= f; e++) i += '<li class="paging__item"><a class="paging__link js-changePostNum' + (1 === e ? " is-active" : "") + '" href="">' + e + "</a></li>";
        i += '<li class="paging__item"><a class="paging__link paging__link--next js-changePostNext" href="">&gt;</a></li>', l.html(i)
      }

      function r(e) {
        for (var t = [], i = 0, n = 0, o = 1, s = d.data("ignore-post") + ""; o <= Object.keys(e).length; o++) e[o].id !== s && (void 0 === t[n] && (t[n] = []), void 0 === t[n][i] && (t[n][i] = {}), t[n][i] = e[o], ++i % p == 0 && (n++, i = 0));
        return t
      }

      function a(e) {
        for (var t = [], i = [], n = [], o = 1, s = ""; o <= Object.keys(e).length; o++) s = e[o].genre, void 0 === i[s] && (i[s] = 0), void 0 === n[s] && (n[s] = 0), void 0 === t[s] && (t[s] = []), void 0 === t[s][n[s]] && (t[s][n[s]] = []), void 0 === t[s][n[s]][i[s]] && (t[s][n[s]][i[s]] = {}), t[s][n[s]][i[s]] = e[o], ++i[s] % p == 0 && (n[s]++, i[s] = 0);
        return t
      }
      var l = e(".js-changePost"),
        c = e(".js-changePostGenre li"),
        d = e(".js-changePostList"),
        u = e(".js-changePostHide"),
        p = 18,
        f = 11,
        h = [],
        v = [],
        g = "�S��",
        m = !1,
        y = function() {
          var e = [],
            t = 0,
            i = "",
            n = "";
          i = window.location.search.slice(1).split("&"), t = i.length;
          for (var o = 0; o < t; o++) n = i[o].split("="), e[n[0]] = decodeURIComponent(n[1]);
          return e
        }();
      void 0 !== y.keyword && (u.hide(), e("body").addClass("is-sortable"), g = y.keyword, t(), e(".js-changePostGenre").find(".is-active").removeClass("is-active"), e('.js-changePostGenre li:contains("' + g + '")').addClass("is-active"), e(".breadcrumb__list li:last-child").remove(), e(".breadcrumb__list").append('<li class="breadcrumb__item"><a href="/manabi/">�R�E�Q�C�̊w��</a></li>'), e(".breadcrumb__list").append('<li class="breadcrumb__item">' + g + "</li>")), e.getJSON("/manabi/assets/json/index.json", function(e) {
        h = r(e), v = a(e), void 0 !== y.keyword ? (o(1, v[g].length), i(0, v[g])) : s(1, h.length)
      }), e(document).on("click", ".js-changePostPrev", function(t) {
        if (t.preventDefault(), !e(this).hasClass("is-disabled")) {
          var n = l.find(".is-active").text() - 0;
          h.length;
          m ? (o(n - 1, v[g].length), i(n - 2, v[g])) : (o(n - 1, h.length), i(n - 2, h))
        }
        e("html, body").animate({
          scrollTop: 0
        }, 0)
      }), e(document).on("click", ".js-changePostNext", function(t) {
        if (t.preventDefault(), !e(this).hasClass("is-disabled")) {
          var n = l.find(".is-active").text() - 0;
          h.length;
          m ? (o(n + 1, v[g].length), i(n, v[g])) : (o(n + 1, h.length), i(n, h))
        }
        e("html, body").animate({
          scrollTop: 0
        }, 0)
      }), e(document).on("click", ".js-changePostNum", function(t) {
        if (t.preventDefault(), !e(this).hasClass("is-active")) {
          var n = e(this).text() - 0;
          m ? (o(n, v[g].length), i(n - 1, v[g])) : (o(n, h.length), i(n - 1, h))
        }
        e("html, body").animate({
          scrollTop: 0
        }, 0)
      }), c.click(function(n) {
        n.preventDefault(), e(this).hasClass("is-active") || (g = e(this).find("a").text(), t(), e(this).parent("ul").find(".is-active").removeClass("is-active"), e(this).addClass("is-active"), u.hide(), m ? (o(1, v[g].length), i(0, v[g])) : (u.show(), o(1, h.length), i(0, h)))
      })
    }(n)
  }
}, function(e, t, i) {
  "use strict";
  var n = i(2);
  e.exports = function() {
    ! function(e) {
      e(".js-topScroll").click(function(t) {
        t.preventDefault(), e("html, body").animate({
          scrollTop: 0
        }, 1e3)
      })
    }(n)
  }
}, function(e, t, i) {
  "use strict";
  var n = i(2);
  e.exports = function() {
    ! function(e) {
      var t = (e(".sp .js-topSpBgSlider"), e(".sp .js-topSpBgSlider > li")),
        i = t.length,
        n = 0,
        o = 0,
        s = 0;
      i > 1 && setInterval(function() {
        o = n, n < i - 1 ? (n++, s = n) : (n = 0, s = 0), t.eq(o).animate({
          opacity: 0
        }, 900), t.eq(s).animate({
          opacity: 1
        }, 900)
      }, 3e3)
    }(n)
  }
}, function(e, t, i) {
  "use strict";
  var n = i(2);
  e.exports = function() {
    ! function(e) {
      function t() {
        var t = e(this).parent().children(".is-active"),
          i = e(this).parent().children().index(t),
          n = e(this).parent().children().index(this),
          o = e(this).parent().next();
        o.children().eq(i).removeClass("is-active"), t.removeClass("is-active"), o.children().eq(n).addClass("is-active"), e(this).addClass("is-active")
      }
      e(".js-tabChange").children().click(t)
    }(n)
  }
}, function(e, t, i) {
  "use strict";
  var n = i(2);
  e.exports = function() {
    ! function(e) {
      var t = e(".js-videoOnlyPc"),
        i = t.data("url");
      e("body").hasClass("pc") && t.attr("src", i)
    }(n)
  }
}, function(e, t, i) {
  "use strict";
  var n = i(2);
  e.exports = function() {
    ! function(e) {
      function t(e) {
        return !(e.hasClass("iconBLANK") || e.hasClass("mod-sectionTxt__link--ext") || e.hasClass("mod-uList__link--ext")) && (!!o(e) || !s(e) && !(e.find("img").length > 0 || e.children(".megamenu__bottomLinkIcon").length > 0))
      }

      function i(e) {
        return !(e.hasClass("iconDOC") || e.hasClass("mod-sectionTxt__link--word") || e.hasClass("mod-uList__link--word")) && (!!o(e) || !s(e) && !(e.find("img").length > 0 || e.children(".megamenu__bottomLinkIcon").length > 0))
      }

      function n(e) {
        return !(e.hasClass("iconPDF") || e.hasClass("mod-sectionTxt__link--pdf") || e.hasClass("mod-uList__link--pdf")) && (!!o(e) || !s(e) && !(e.find("img").length > 0 || e.children(".megamenu__bottomLinkIcon").length > 0))
      }

      function o(t) {
        if (e("body").hasClass("top")) {
          if (t.hasClass("imgLinkList__link")) return !0;
          if (t.hasClass("infoBox__link")) return !0
        } else if (t.hasClass("topic__link")) return !0;
        return !1
      }

      function s(e) {
        return !!e.hasClass("linkButton")
      }
      var r = /^https{0,1}:/,
        a = /\.pdf$/,
        l = /\.docx{0,1}$/;
      ! function(o) {
        e(o + " a").each(function() {
          if (!e(this).hasClass("targetSelf")) {
            var o = e(this).attr("href");
            o && o.match(a) ? (e(this).attr("target", "_blank"), n(e(this)) && e(this).addClass("mod-sectionTxt__link--pdf")) : o && o.match(l) ? (e(this).attr("target", "_blank"), i(e(this)) && e(this).addClass("mod-sectionTxt__link--word")) : o && o.match(r) && (e(this).closest(".imgLinkList").length > 0 || e(this).attr("target", "_blank"), t(e(this)) && e(this).addClass("mod-sectionTxt__link--ext"))
          }
        })
      }("main#main")
    }(n)
  }
}, function(e, t, i) {
  "use strict";
  var n = i(2);
  e.exports = function() {
    ! function(e) {
      if (e("body").hasClass("uni03")) {
        var t = location.search.substring(1),
          i = "#" + location.hash.substring(1);
        if (t) {
          var n = function(e) {
            var t = [];
            e = e.split("&");
            for (var i = 0; i < e.length; i++) {
              var n = e[i].split("=");
              t[n[0]] = n[1]
            }
            return t
          }(t);
          if (n.kind) {
            switch (n.kind) {
              case "diploma":
                i += "-diploma";
                break;
              case "curriculum":
                i += "-curriculum";
                break;
              default:
                i += "-admission"
            }
            e(i).parent(".js-accordion_module").addClass("js-accordion_open"), e(i).next().slideDown()
          }
        }
      }
    }(n)
  }
}, function(e, t, i) {
  "use strict";
  var n = i(2);
  e.exports = function() {
    ! function(e) {
      function t(t) {
        var i = e(t),
          n = i.text();
        n && (n = n.replace(/-/g, ""), i.wrap("<a></a>"), i.parent().attr("href", "tel:" + n))
      }
      e("body.sp").length > 0 && e(".js-telLink").each(function() {
        t(this)
      })
    }(n)
  }
}, function(e, t, i) {
  "use strict";
  var n = i(2);
  e.exports = function() {
    ! function(e) {
      function t() {
        var t = navigator.userAgent,
          i = screen.width / 1200;
        (t.indexOf("Android") > 0 && !(t.indexOf("Android") > 0 && t.indexOf("Mobile") > 0) || t.indexOf("iPad") > 0) && (e("body").hasClass("sp") && e("body").removeClass("sp").addClass("pc"), e('head meta[name="viewport"]').remove(), e("head").prepend('<meta name="viewport" content="width=1200px, user-scalable=no, initial-scale=' + i + ', maximum-scale=5.0, minimum-scale=0.5">'))
      }
      t(), e(window).resize(function() {
        t()
      })
    }(n)
  }
}, function(e, t, i) {
  "use strict";
  var n = i(2);
  e.exports = function() {
    ! function(e) {
      var t = e(".js-changeVideoTablet"),
        i = navigator.userAgent;
      e("body").hasClass("pc") && (i.indexOf("iPad") > 0 || i.indexOf("Android") > 0 && -1 == i.indexOf("Mobile")) && t.css({
        display: "block",
        position: "relative"
      })
    }(n)
  }
}, function(e, t, i) {
  "use strict";
  var n = i(2);
  e.exports = function() {
    ! function(e) {
      function t() {
        var t = i(),
          a = n();
        if (e("body").hasClass("top")) {
          var l = e(".js-FootMenuTrg").offset().top;
          a > l && !o ? (o = !0, s.stop().fadeIn(200), r.stop().addClass("isActive"), e(".toTop").addClass("isActive")) : a < l && o && (o = !1, s.stop().fadeOut(200))
        } else a > t && !o ? (o = !0, s.stop().fadeIn(200)) : a < t && o && (o = !1, s.stop().fadeOut(200))
      }

      function i() {
        return e(window).innerHeight()
      }

      function n() {
        return e(window).scrollTop()
      }
      var o = !1,
        s = e(".toTop"),
        r = e(".footer__fixedNav"),
        a = navigator.userAgent.toLowerCase();
      a.indexOf("android") > -1 && -1 === a.indexOf("mobile") || a.indexOf("ipad") > -1 ? s.css({
        position: "static",
        display: "block",
        "padding-bottom": "35px"
      }) : (t(), e(window).scroll(function() {
        t()
      }))
    }(n)
  }
}, function(e, t, i) {
  "use strict";
  var n = i(2);
  e.exports = function() {
    ! function(e) {
      function t() {
        r || (0 === a ? o < s - 5 && o >= 0 && (r = !0, i.animate({
          top: "0px"
        }, 200, function() {
          a = 1, r = !1
        }), e("body").hasClass("top") && e(window).width() >= 768 && (e(".footer__fixedNav").removeClass("isActive"), e(".toTop").removeClass("isActive"))) : o > s + 5 && o >= 0 && (r = !0, i.animate({
          top: -1 * n
        }, 200, function() {
          a = 0, r = !1
        }), e("body").hasClass("top") && (e(".footer__fixedNav").addClass("isActive"), e(".toTop").addClass("isActive"))))
      }
      var i = e("#header"),
        n = i.outerHeight(),
        o = 0,
        s = 0,
        r = !1,
        a = 1;
      e(window).scroll(function() {
        s = o, o = e(this).scrollTop(), e("#wrap").hasClass("is-display") || t()
      }), e(window).resize(function() {
        n = i.outerHeight()
      })
    }(n)
  }
}, function(e, t, i) {
  "use strict";
  var n = i(2),
    o = i(35);
  e.exports = function(e) {
    var t = function() {
      if (e(".eng2018bnr").length) {
        "TRUE" !== o.get("hide_eng2018bnr") && e(".eng2018bnr").removeClass("hide"), e(".eng2018bnr_close").click(function() {
          e(".eng2018bnr").addClass("hide"), o.set("hide_eng2018bnr", "TRUE", {
            expires: 1,
            path: "/"
          })
        })
      }
    };
    return t.prototype = {}, t
  }(n)
}, function(e, t, i) {
  var n, o;
  ! function(s) {
    var r = !1;
    if (n = s, void 0 !== (o = "function" == typeof n ? n.call(t, i, t, e) : n) && (e.exports = o), r = !0, e.exports = s(), r = !0, !r) {
      var a = window.Cookies,
        l = window.Cookies = s();
      l.noConflict = function() {
        return window.Cookies = a, l
      }
    }
  }(function() {
    function e() {
      for (var e = 0, t = {}; e < arguments.length; e++) {
        var i = arguments[e];
        for (var n in i) t[n] = i[n]
      }
      return t
    }

    function t(i) {
      function n(t, o, s) {
        var r;
        if ("undefined" != typeof document) {
          if (arguments.length > 1) {
            if (s = e({
                path: "/"
              }, n.defaults, s), "number" == typeof s.expires) {
              var a = new Date;
              a.setMilliseconds(a.getMilliseconds() + 864e5 * s.expires), s.expires = a
            }
            s.expires = s.expires ? s.expires.toUTCString() : "";
            try {
              r = JSON.stringify(o), /^[\{\[]/.test(r) && (o = r)
            } catch (e) {}
            o = i.write ? i.write(o, t) : encodeURIComponent(String(o)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), t = encodeURIComponent(String(t)), t = t.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent), t = t.replace(/[\(\)]/g, escape);
            var l = "";
            for (var c in s) s[c] && (l += "; " + c, !0 !== s[c] && (l += "=" + s[c]));
            return document.cookie = t + "=" + o + l
          }
          t || (r = {});
          for (var d = document.cookie ? document.cookie.split("; ") : [], u = /(%[0-9A-Z]{2})+/g, p = 0; p < d.length; p++) {
            var f = d[p].split("="),
              h = f.slice(1).join("=");
            this.json || '"' !== h.charAt(0) || (h = h.slice(1, -1));
            try {
              var v = f[0].replace(u, decodeURIComponent);
              if (h = i.read ? i.read(h, v) : i(h, v) || h.replace(u, decodeURIComponent), this.json) try {
                h = JSON.parse(h)
              } catch (e) {}
              if (t === v) {
                r = h;
                break
              }
              t || (r[v] = h)
            } catch (e) {}
          }
          return r
        }
      }
      return n.set = n, n.get = function(e) {
        return n.call(n, e)
      }, n.getJSON = function() {
        return n.apply({
          json: !0
        }, [].slice.call(arguments))
      }, n.defaults = {}, n.remove = function(t, i) {
        n(t, "", e(i, {
          expires: -1
        }))
      }, n.withConverter = t, n
    }
    return t(function() {})
  })
}, function(e, t, i) {
  "use strict";
  var n = i(2),
    o = i(35),
    s = i(37);
  e.exports = function(e) {
    var t = function() {
      if (e("#vSySearch").length) {
        new Vue({
          el: "#vSySearch",
          data: {
            show_result: !1,
            processing: !1,
            results: [],
            pageShow: 10,
            pagenateShow: 5,
            currentPage: 1,
            searchCond: {
              semester: "",
              subject: "",
              teacher: "",
              faculty: "",
              week: "",
              period: "",
              keyword: ""
            }
          },
          mounted: function() {
            "#result" === document.location.hash && "true" === o.get("syllabus_hasCond") ? (this.loadCond(), this.ajax()) : this.clearCond()
          },
          methods: {
            search: function() {
              this.currentPage = 1, window.location.hash = "result", this.ajax()
            },
            clear: function() {
              this.searchCond.semester = "", this.searchCond.subject = "", this.searchCond.teacher = "", this.searchCond.faculty = "", this.searchCond.week = "", this.searchCond.period = "", this.searchCond.keyword = ""
            },
            ajax: function() {
              var t, i = this;
              if (this.processing = !0, -1 !== location.hostname.indexOf("t-kougei.ac.jp")) {
                t = s.create({
                  headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                  }
                });
                var n = "/syllabus/api/search.php"
              }
              var o = new URLSearchParams;
              o.append("semester", this.searchCond.semester), o.append("subject", this.searchCond.subject), o.append("teacher", this.searchCond.teacher), o.append("faculty", this.searchCond.faculty), o.append("week", this.searchCond.week), o.append("period", this.searchCond.period), o.append("keyword", this.searchCond.keyword), this.saveCond(), t.post(n, o).then(function(t) {
                i.results = t.data.data, e("html,body").animate({
                  scrollTop: e("#vSySearch").eq(0).offset().top - 150
                }, 300, "swing"), i.show_result = !0, i.processing = !1
              }).catch(function(e) {
                console.log(e), i.processing = !1
              })
            },
            saveCond: function() {
              o.set("syllabus_hasCond", "true"), o.set("syllabus_semester", this.searchCond.semester), o.set("syllabus_subject", this.searchCond.subject), o.set("syllabus_teacher", this.searchCond.teacher), o.set("syllabus_faculty", this.searchCond.faculty), o.set("syllabus_week", this.searchCond.week), o.set("syllabus_period", this.searchCond.period), o.set("syllabus_keyword", this.searchCond.keyword)
            },
            loadCond: function() {
              this.searchCond.semester = o.get("syllabus_semester"), this.searchCond.subject = o.get("syllabus_subject"), this.searchCond.teacher = o.get("syllabus_teacher"), this.searchCond.faculty = o.get("syllabus_faculty"), this.searchCond.week = o.get("syllabus_week"), this.searchCond.period = o.get("syllabus_period"), this.searchCond.keyword = o.get("syllabus_keyword"), this.currentPage = parseInt(o.get("syllabus_currentpage"))
            },
            clearCond: function() {
              o.set("syllabus_hasCond", "false"), o.set("syllabus_semester", ""), o.set("syllabus_subject", ""), o.set("syllabus_teacher", ""), o.set("syllabus_faculty", ""), o.set("syllabus_week", ""), o.set("syllabus_period", ""), o.set("syllabus_keyword", ""), o.set("syllabus_currentpage", "1")
            }
          },
          computed: {
            pageNum: function() {
              return Math.ceil(this.results.length / this.pageShow)
            },
            showRangeMin: function() {
              return 10 * (this.currentPage - 1) + 1
            },
            showRangeMax: function() {
              return 10 * this.currentPage
            },
            pagenateList: function() {
              var e = [],
                t = this.pageNum,
                i = this.pagenateShow,
                n = Math.floor(this.pagenateShow / 2);
              if (t < i)
                for (var o = 1; o <= t; o++) e.push(o);
              else if (this.currentPage <= n)
                for (var o = 1; o <= i; o++) e.push(o);
              else if (this.currentPage >= t - n + 1)
                for (var o = t - i + 1; o <= t; o++) e.push(o);
              else
                for (var o = this.currentPage - n; o <= this.currentPage + n; o++) e.push(o);
              return e
            }
          },
          watch: {
            currentPage: function() {
              o.set("syllabus_currentpage", this.currentPage)
            }
          }
        })
      }
      if (e("#vSyDetail").length) {
        new Vue({
          el: "#vSyDetail",
          data: {
            key: "",
            data: [],
            processing: !1
          },
          mounted: function() {
            for (var e = new Object, t = location.search.substring(1).split("&"), i = 0; t[i]; i++) {
              var n = t[i].split("=");
              e[n[0]] = n[1]
            }
            this.key = e.id, this.ajax()
          },
          methods: {
            convert: function(e) {
              return e.replace(/(https?(:\/\/[-_.!~*\'()a-zA-Z0-9;\/?:\@&=+\$,%#]+))/g, '<a href="$1" target="_blank">$1</a>')
            },
            ajax: function() {
              var e, t = this;
              this.processing = !0;
              var i;
              if ("www.t-kougei.ac.jp" !== location.hostname) {
                e = s.create({
                  headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                  },
                  auth: {
                    username: "tkougei",
                    password: "4323"
                  }
                });
                var i = "https://dev.t-kougei.ac.jp/syllabus/api/detail.php"
              } else {
                e = s.create({
                  headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                  }
                });
                var i = "/syllabus/api/detail.php"
              }
              var n = new URLSearchParams;
              n.append("class", this.key), e.post(i, n).then(function(e) {
                t.data = e.data.data, t.processing = !1
              }).catch(function(e) {
                console.log(e), t.processing = !1
              })
            }
          }
        })
      }
    };
    return t.prototype = {}, t
  }(n)
}, function(e, t, i) {
  e.exports = i(38)
}, function(e, t, i) {
  "use strict";

  function n(e) {
    var t = new r(e),
      i = s(r.prototype.request, t);
    return o.extend(i, r.prototype, t), o.extend(i, t), i
  }
  var o = i(39),
    s = i(40),
    r = i(42),
    a = i(43),
    l = n(a);
  l.Axios = r, l.create = function(e) {
    return n(o.merge(a, e))
  }, l.Cancel = i(61), l.CancelToken = i(62), l.isCancel = i(58), l.all = function(e) {
    return Promise.all(e)
  }, l.spread = i(63), e.exports = l, e.exports.default = l
}, function(e, t, i) {
  "use strict";

  function n(e) {
    return "[object Array]" === T.call(e)
  }

  function o(e) {
    return "[object ArrayBuffer]" === T.call(e)
  }

  function s(e) {
    return "undefined" != typeof FormData && e instanceof FormData
  }

  function r(e) {
    return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer
  }

  function a(e) {
    return "string" == typeof e
  }

  function l(e) {
    return "number" == typeof e
  }

  function c(e) {
    return void 0 === e
  }

  function d(e) {
    return null !== e && "object" == typeof e
  }

  function u(e) {
    return "[object Date]" === T.call(e)
  }

  function p(e) {
    return "[object File]" === T.call(e)
  }

  function f(e) {
    return "[object Blob]" === T.call(e)
  }

  function h(e) {
    return "[object Function]" === T.call(e)
  }

  function v(e) {
    return d(e) && h(e.pipe)
  }

  function g(e) {
    return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams
  }

  function m(e) {
    return e.replace(/^\s*/, "").replace(/\s*$/, "")
  }

  function y() {
    return ("undefined" == typeof navigator || "ReactNative" !== navigator.product) && ("undefined" != typeof window && "undefined" != typeof document)
  }

  function b(e, t) {
    if (null !== e && void 0 !== e)
      if ("object" != typeof e && (e = [e]), n(e))
        for (var i = 0, o = e.length; i < o; i++) t.call(null, e[i], i, e);
      else
        for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.call(null, e[s], s, e)
  }

  function w() {
    function e(e, i) {
      "object" == typeof t[i] && "object" == typeof e ? t[i] = w(t[i], e) : t[i] = e
    }
    for (var t = {}, i = 0, n = arguments.length; i < n; i++) b(arguments[i], e);
    return t
  }

  function x(e, t, i) {
    return b(t, function(t, n) {
      e[n] = i && "function" == typeof t ? k(t, i) : t
    }), e
  }
  var k = i(40),
    S = i(41),
    T = Object.prototype.toString;
  e.exports = {
    isArray: n,
    isArrayBuffer: o,
    isBuffer: S,
    isFormData: s,
    isArrayBufferView: r,
    isString: a,
    isNumber: l,
    isObject: d,
    isUndefined: c,
    isDate: u,
    isFile: p,
    isBlob: f,
    isFunction: h,
    isStream: v,
    isURLSearchParams: g,
    isStandardBrowserEnv: y,
    forEach: b,
    merge: w,
    extend: x,
    trim: m
  }
}, function(e, t) {
  "use strict";
  e.exports = function(e, t) {
    return function() {
      for (var i = new Array(arguments.length), n = 0; n < i.length; n++) i[n] = arguments[n];
      return e.apply(t, i)
    }
  }
}, function(e, t) {
  function i(e) {
    return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
  }

  function n(e) {
    return "function" == typeof e.readFloatLE && "function" == typeof e.slice && i(e.slice(0, 0))
  }
  e.exports = function(e) {
    return null != e && (i(e) || n(e) || !!e._isBuffer)
  }
}, function(e, t, i) {
  "use strict";

  function n(e) {
    this.defaults = e, this.interceptors = {
      request: new r,
      response: new r
    }
  }
  var o = i(43),
    s = i(39),
    r = i(55),
    a = i(56);
  n.prototype.request = function(e) {
    "string" == typeof e && (e = s.merge({
      url: arguments[0]
    }, arguments[1])), e = s.merge(o, {
      method: "get"
    }, this.defaults, e), e.method = e.method.toLowerCase();
    var t = [a, void 0],
      i = Promise.resolve(e);
    for (this.interceptors.request.forEach(function(e) {
        t.unshift(e.fulfilled, e.rejected)
      }), this.interceptors.response.forEach(function(e) {
        t.push(e.fulfilled, e.rejected)
      }); t.length;) i = i.then(t.shift(), t.shift());
    return i
  }, s.forEach(["delete", "get", "head", "options"], function(e) {
    n.prototype[e] = function(t, i) {
      return this.request(s.merge(i || {}, {
        method: e,
        url: t
      }))
    }
  }), s.forEach(["post", "put", "patch"], function(e) {
    n.prototype[e] = function(t, i, n) {
      return this.request(s.merge(n || {}, {
        method: e,
        url: t,
        data: i
      }))
    }
  }), e.exports = n
}, function(e, t, i) {
  (function(t) {
    "use strict";

    function n(e, t) {
      !o.isUndefined(e) && o.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
    }
    var o = i(39),
      s = i(45),
      r = {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      a = {
        adapter: function() {
          var e;
          return "undefined" != typeof XMLHttpRequest ? e = i(46) : void 0 !== t && (e = i(46)), e
        }(),
        transformRequest: [function(e, t) {
          return s(t, "Content-Type"), o.isFormData(e) || o.isArrayBuffer(e) || o.isBuffer(e) || o.isStream(e) || o.isFile(e) || o.isBlob(e) ? e : o.isArrayBufferView(e) ? e.buffer : o.isURLSearchParams(e) ? (n(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : o.isObject(e) ? (n(t, "application/json;charset=utf-8"), JSON.stringify(e)) : e
        }],
        transformResponse: [function(e) {
          if ("string" == typeof e) try {
            e = JSON.parse(e)
          } catch (e) {}
          return e
        }],
        timeout: 0,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        maxContentLength: -1,
        validateStatus: function(e) {
          return e >= 200 && e < 300
        }
      };
    a.headers = {
      common: {
        Accept: "application/json, text/plain, */*"
      }
    }, o.forEach(["delete", "get", "head"], function(e) {
      a.headers[e] = {}
    }), o.forEach(["post", "put", "patch"], function(e) {
      a.headers[e] = o.merge(r)
    }), e.exports = a
  }).call(t, i(44))
}, function(e, t) {
  function i() {
    throw new Error("setTimeout has not been defined")
  }

  function n() {
    throw new Error("clearTimeout has not been defined")
  }

  function o(e) {
    if (d === setTimeout) return setTimeout(e, 0);
    if ((d === i || !d) && setTimeout) return d = setTimeout, setTimeout(e, 0);
    try {
      return d(e, 0)
    } catch (t) {
      try {
        return d.call(null, e, 0)
      } catch (t) {
        return d.call(this, e, 0)
      }
    }
  }

  function s(e) {
    if (u === clearTimeout) return clearTimeout(e);
    if ((u === n || !u) && clearTimeout) return u = clearTimeout, clearTimeout(e);
    try {
      return u(e)
    } catch (t) {
      try {
        return u.call(null, e)
      } catch (t) {
        return u.call(this, e)
      }
    }
  }

  function r() {
    v && f && (v = !1, f.length ? h = f.concat(h) : g = -1, h.length && a())
  }

  function a() {
    if (!v) {
      var e = o(r);
      v = !0;
      for (var t = h.length; t;) {
        for (f = h, h = []; ++g < t;) f && f[g].run();
        g = -1, t = h.length
      }
      f = null, v = !1, s(e)
    }
  }

  function l(e, t) {
    this.fun = e, this.array = t
  }

  function c() {}
  var d, u, p = e.exports = {};
  ! function() {
    try {
      d = "function" == typeof setTimeout ? setTimeout : i
    } catch (e) {
      d = i
    }
    try {
      u = "function" == typeof clearTimeout ? clearTimeout : n
    } catch (e) {
      u = n
    }
  }();
  var f, h = [],
    v = !1,
    g = -1;
  p.nextTick = function(e) {
    var t = new Array(arguments.length - 1);
    if (arguments.length > 1)
      for (var i = 1; i < arguments.length; i++) t[i - 1] = arguments[i];
    h.push(new l(e, t)), 1 !== h.length || v || o(a)
  }, l.prototype.run = function() {
    this.fun.apply(null, this.array)
  }, p.title = "browser", p.browser = !0, p.env = {}, p.argv = [], p.version = "", p.versions = {}, p.on = c, p.addListener = c, p.once = c, p.off = c, p.removeListener = c, p.removeAllListeners = c, p.emit = c, p.prependListener = c, p.prependOnceListener = c, p.listeners = function(e) {
    return []
  }, p.binding = function(e) {
    throw new Error("process.binding is not supported")
  }, p.cwd = function() {
    return "/"
  }, p.chdir = function(e) {
    throw new Error("process.chdir is not supported")
  }, p.umask = function() {
    return 0
  }
}, function(e, t, i) {
  "use strict";
  var n = i(39);
  e.exports = function(e, t) {
    n.forEach(e, function(i, n) {
      n !== t && n.toUpperCase() === t.toUpperCase() && (e[t] = i, delete e[n])
    })
  }
}, function(e, t, i) {
  (function(t) {
    "use strict";
    var n = i(39),
      o = i(47),
      s = i(50),
      r = i(51),
      a = i(52),
      l = i(48),
      c = "undefined" != typeof window && window.btoa && window.btoa.bind(window) || i(53);
    e.exports = function(e) {
      return new Promise(function(d, u) {
        var p = e.data,
          f = e.headers;
        n.isFormData(p) && delete f["Content-Type"];
        var h = new XMLHttpRequest,
          v = "onreadystatechange",
          g = !1;
        if ("test" === t.env.NODE_ENV || "undefined" == typeof window || !window.XDomainRequest || "withCredentials" in h || a(e.url) || (h = new window.XDomainRequest, v = "onload", g = !0, h.onprogress = function() {}, h.ontimeout = function() {}), e.auth) {
          var m = e.auth.username || "",
            y = e.auth.password || "";
          f.Authorization = "Basic " + c(m + ":" + y)
        }
        if (h.open(e.method.toUpperCase(), s(e.url, e.params, e.paramsSerializer), !0), h.timeout = e.timeout, h[v] = function() {
            if (h && (4 === h.readyState || g) && (0 !== h.status || h.responseURL && 0 === h.responseURL.indexOf("file:"))) {
              var t = "getAllResponseHeaders" in h ? r(h.getAllResponseHeaders()) : null,
                i = e.responseType && "text" !== e.responseType ? h.response : h.responseText,
                n = {
                  data: i,
                  status: 1223 === h.status ? 204 : h.status,
                  statusText: 1223 === h.status ? "No Content" : h.statusText,
                  headers: t,
                  config: e,
                  request: h
                };
              o(d, u, n), h = null
            }
          }, h.onerror = function() {
            u(l("Network Error", e, null, h)), h = null
          }, h.ontimeout = function() {
            u(l("timeout of " + e.timeout + "ms exceeded", e, "ECONNABORTED", h)), h = null
          }, n.isStandardBrowserEnv()) {
          var b = i(54),
            w = (e.withCredentials || a(e.url)) && e.xsrfCookieName ? b.read(e.xsrfCookieName) : void 0;
          w && (f[e.xsrfHeaderName] = w)
        }
        if ("setRequestHeader" in h && n.forEach(f, function(e, t) {
            void 0 === p && "content-type" === t.toLowerCase() ? delete f[t] : h.setRequestHeader(t, e)
          }), e.withCredentials && (h.withCredentials = !0), e.responseType) try {
          h.responseType = e.responseType
        } catch (t) {
          if ("json" !== e.responseType) throw t
        }
        "function" == typeof e.onDownloadProgress && h.addEventListener("progress", e.onDownloadProgress), "function" == typeof e.onUploadProgress && h.upload && h.upload.addEventListener("progress", e.onUploadProgress), e.cancelToken && e.cancelToken.promise.then(function(e) {
          h && (h.abort(), u(e), h = null)
        }), void 0 === p && (p = null), h.send(p)
      })
    }
  }).call(t, i(44))
}, function(e, t, i) {
  "use strict";
  var n = i(48);
  e.exports = function(e, t, i) {
    var o = i.config.validateStatus;
    i.status && o && !o(i.status) ? t(n("Request failed with status code " + i.status, i.config, null, i.request, i)) : e(i)
  }
}, function(e, t, i) {
  "use strict";
  var n = i(49);
  e.exports = function(e, t, i, o, s) {
    var r = new Error(e);
    return n(r, t, i, o, s)
  }
}, function(e, t) {
  "use strict";
  e.exports = function(e, t, i, n, o) {
    return e.config = t, i && (e.code = i), e.request = n, e.response = o, e
  }
}, function(e, t, i) {
  "use strict";

  function n(e) {
    return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
  }
  var o = i(39);
  e.exports = function(e, t, i) {
    if (!t) return e;
    var s;
    if (i) s = i(t);
    else if (o.isURLSearchParams(t)) s = t.toString();
    else {
      var r = [];
      o.forEach(t, function(e, t) {
        null !== e && void 0 !== e && (o.isArray(e) ? t += "[]" : e = [e], o.forEach(e, function(e) {
          o.isDate(e) ? e = e.toISOString() : o.isObject(e) && (e = JSON.stringify(e)), r.push(n(t) + "=" + n(e))
        }))
      }), s = r.join("&")
    }
    return s && (e += (-1 === e.indexOf("?") ? "?" : "&") + s), e
  }
}, function(e, t, i) {
  "use strict";
  var n = i(39),
    o = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
  e.exports = function(e) {
    var t, i, s, r = {};
    return e ? (n.forEach(e.split("\n"), function(e) {
      if (s = e.indexOf(":"), t = n.trim(e.substr(0, s)).toLowerCase(), i = n.trim(e.substr(s + 1)), t) {
        if (r[t] && o.indexOf(t) >= 0) return;
        r[t] = "set-cookie" === t ? (r[t] ? r[t] : []).concat([i]) : r[t] ? r[t] + ", " + i : i
      }
    }), r) : r
  }
}, function(e, t, i) {
  "use strict";
  var n = i(39);
  e.exports = n.isStandardBrowserEnv() ? function() {
    function e(e) {
      var t = e;
      return i && (o.setAttribute("href", t), t = o.href), o.setAttribute("href", t), {
        href: o.href,
        protocol: o.protocol ? o.protocol.replace(/:$/, "") : "",
        host: o.host,
        search: o.search ? o.search.replace(/^\?/, "") : "",
        hash: o.hash ? o.hash.replace(/^#/, "") : "",
        hostname: o.hostname,
        port: o.port,
        pathname: "/" === o.pathname.charAt(0) ? o.pathname : "/" + o.pathname
      }
    }
    var t, i = /(msie|trident)/i.test(navigator.userAgent),
      o = document.createElement("a");
    return t = e(window.location.href),
      function(i) {
        var o = n.isString(i) ? e(i) : i;
        return o.protocol === t.protocol && o.host === t.host
      }
  }() : function() {
    return function() {
      return !0
    }
  }()
}, function(e, t) {
  "use strict";

  function i() {
    this.message = "String contains an invalid character"
  }

  function n(e) {
    for (var t, n, s = String(e), r = "", a = 0, l = o; s.charAt(0 | a) || (l = "=", a % 1); r += l.charAt(63 & t >> 8 - a % 1 * 8)) {
      if ((n = s.charCodeAt(a += .75)) > 255) throw new i;
      t = t << 8 | n
    }
    return r
  }
  var o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  i.prototype = new Error, i.prototype.code = 5, i.prototype.name = "InvalidCharacterError", e.exports = n
}, function(e, t, i) {
  "use strict";
  var n = i(39);
  e.exports = n.isStandardBrowserEnv() ? function() {
    return {
      write: function(e, t, i, o, s, r) {
        var a = [];
        a.push(e + "=" + encodeURIComponent(t)), n.isNumber(i) && a.push("expires=" + new Date(i).toGMTString()), n.isString(o) && a.push("path=" + o), n.isString(s) && a.push("domain=" + s), !0 === r && a.push("secure"), document.cookie = a.join("; ")
      },
      read: function(e) {
        var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
        return t ? decodeURIComponent(t[3]) : null
      },
      remove: function(e) {
        this.write(e, "", Date.now() - 864e5)
      }
    }
  }() : function() {
    return {
      write: function() {},
      read: function() {
        return null
      },
      remove: function() {}
    }
  }()
}, function(e, t, i) {
  "use strict";

  function n() {
    this.handlers = []
  }
  var o = i(39);
  n.prototype.use = function(e, t) {
    return this.handlers.push({
      fulfilled: e,
      rejected: t
    }), this.handlers.length - 1
  }, n.prototype.eject = function(e) {
    this.handlers[e] && (this.handlers[e] = null)
  }, n.prototype.forEach = function(e) {
    o.forEach(this.handlers, function(t) {
      null !== t && e(t)
    })
  }, e.exports = n
}, function(e, t, i) {
  "use strict";

  function n(e) {
    e.cancelToken && e.cancelToken.throwIfRequested()
  }
  var o = i(39),
    s = i(57),
    r = i(58),
    a = i(43),
    l = i(59),
    c = i(60);
  e.exports = function(e) {
    return n(e), e.baseURL && !l(e.url) && (e.url = c(e.baseURL, e.url)), e.headers = e.headers || {}, e.data = s(e.data, e.headers, e.transformRequest), e.headers = o.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers || {}), o.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function(t) {
      delete e.headers[t]
    }), (e.adapter || a.adapter)(e).then(function(t) {
      return n(e), t.data = s(t.data, t.headers, e.transformResponse), t
    }, function(t) {
      return r(t) || (n(e), t && t.response && (t.response.data = s(t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t)
    })
  }
}, function(e, t, i) {
  "use strict";
  var n = i(39);
  e.exports = function(e, t, i) {
    return n.forEach(i, function(i) {
      e = i(e, t)
    }), e
  }
}, function(e, t) {
  "use strict";
  e.exports = function(e) {
    return !(!e || !e.__CANCEL__)
  }
}, function(e, t) {
  "use strict";
  e.exports = function(e) {
    return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)
  }
}, function(e, t) {
  "use strict";
  e.exports = function(e, t) {
    return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
  }
}, function(e, t) {
  "use strict";

  function i(e) {
    this.message = e
  }
  i.prototype.toString = function() {
    return "Cancel" + (this.message ? ": " + this.message : "")
  }, i.prototype.__CANCEL__ = !0, e.exports = i
}, function(e, t, i) {
  "use strict";

  function n(e) {
    if ("function" != typeof e) throw new TypeError("executor must be a function.");
    var t;
    this.promise = new Promise(function(e) {
      t = e
    });
    var i = this;
    e(function(e) {
      i.reason || (i.reason = new o(e), t(i.reason))
    })
  }
  var o = i(61);
  n.prototype.throwIfRequested = function() {
    if (this.reason) throw this.reason
  }, n.source = function() {
    var e;
    return {
      token: new n(function(t) {
        e = t
      }),
      cancel: e
    }
  }, e.exports = n
}, function(e, t) {
  "use strict";
  e.exports = function(e) {
    return function(t) {
      return e.apply(null, t)
    }
  }
}, function(e, t, i) {
  "use strict";
  var n = i(2);
  e.exports = function() {
    ! function(e) {
      e("#adm_eng_mv_slider").slick({
        slidesToShow: 1,
        variableWidth: !0,
        infinite: !0,
        autoplay: !0,
        dots: !0,
        autoplaySpeed: 4e3
      })
    }(n)
  }
}, function(e, t, i) {
  "use strict";
  var n = i(2);
  e.exports = function() {
    ! function(e) {
      function t() {
        var e = i(),
          t = n();
        t > e && !o ? (o = !0, s.stop().fadeIn(300)) : t < e && o && (o = !1, s.stop().fadeOut(300))
      }

      function i() {
        return e(window).innerHeight()
      }

      function n() {
        return e(window).scrollTop()
      }
      e(function() {
        e("#tp-FixedBnr #fixed_close").on("click", function() {
          e("#tp-FixedBnr").fadeToggle()
        })
      });
      var o = !1,
        s = e("#tp-FixedBnr"),
        r = navigator.userAgent.toLowerCase();
      r.indexOf("android") > -1 && -1 === r.indexOf("mobile") || r.indexOf("ipad") > -1 ? (console.log("aa"), s.css({
        position: "static",
        display: "block",
        "padding-bottom": "35px"
      })) : (t(), e(window).scroll(function() {
        t()
      }))
    }(n)
  }
}, function(e, t, i) {
  "use strict";
  var n = i(2);
  e.exports = function() {
    ! function(e) {
      var t = window.navigator.userAgent.toLowerCase(),
        i = localStorage,
        n = void 0; - 1 === t.indexOf("android") && -1 === t.indexOf("iphone") || (e(".footer-SwitchDevice").removeClass("u-hide"), n = i.getItem("selectDisplayDevice")), "sp" === n ? (e("meta[name='viewport']").attr("content", "width=device-width, user-scalable=yes, initial-scale=1, maximum-scale=5.0, minimum-scale=0.5"), e("body").removeClass("pc"), e("body").addClass("sp"), e(".footer-SwitchDevice_Button").removeClass("footer-SwitchDevice_Button-isActive"), e(".footer-SwitchDevice_Button-sp").addClass("footer-SwitchDevice_Button-isActive")) : "pc" === n && (e("meta[name='viewport']").attr("content", "width=1180, user-scalable=yes, initial-scale=0.3, maximum-scale=5.0, minimum-scale=0.3"), e("body").removeClass("sp"), e("body").addClass("pc"), e(".footer-SwitchDevice_Button").removeClass("footer-SwitchDevice_Button-isActive"), e(".footer-SwitchDevice_Button-pc").addClass("footer-SwitchDevice_Button-isActive")), e(".footer-SwitchDevice_Button").on("click", function() {
        e(this).hasClass("footer-SwitchDevice_Button-isActive") || (e(this).hasClass("footer-SwitchDevice_Button-sp") ? (i.setItem("selectDisplayDevice", "sp"), e("body").removeClass("pc"), e("body").addClass("sp"), e("meta[name='viewport']").attr("content", "width=device-width, user-scalable=yes, initial-scale=1, maximum-scale=5.0, minimum-scale=0.5"), e(".footer-SwitchDevice_Button").removeClass("footer-SwitchDevice_Button-isActive"), e(".footer-SwitchDevice_Button-sp").addClass("footer-SwitchDevice_Button-isActive")) : e(this).hasClass("footer-SwitchDevice_Button-pc") && (i.setItem("selectDisplayDevice", "pc"), e("body").removeClass("sp"), e("body").addClass("pc"), e("meta[name='viewport']").attr("content", "width=1180, user-scalable=yes, initial-scale=0.3, maximum-scale=5.0, minimum-scale=0.3"), e(".footer-SwitchDevice_Button").removeClass("footer-SwitchDevice_Button-isActive"), e(".footer-SwitchDevice_Button-pc").addClass("footer-SwitchDevice_Button-isActive")), e("body,html").animate({
          scrollTop: 0
        }, 500, "swing"))
      })
    }(n)
  }
}, function(e, t, i) {
  "use strict";
  var n = i(2);
  e.exports = function() {
    ! function(e) {
      e("#bnrSlider").slick({
        slidesToShow: 1,
        variableWidth: !0,
        infinite: !0,
        autoplay: !0,
        dots: !1,
        arrows: !0,
        autoplaySpeed: 4e3
      })
    }(n)
  }
}, function(e, t, i) {
  var n, o, s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e
  } : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
  };
  ! function(r) {
    var a;
    if (n = r, void 0 !== (o = "function" == typeof n ? n.call(t, i, t, e) : n) && (e.exports = o), a = !0, "object" === s(t) && (e.exports = r(), a = !0), !a) {
      var l = window.Cookies,
        c = window.Cookies = r();
      c.noConflict = function() {
        return window.Cookies = l, c
      }
    }
  }(function() {
    function e() {
      for (var e = 0, t = {}; e < arguments.length; e++) {
        var i = arguments[e];
        for (var n in i) t[n] = i[n]
      }
      return t
    }

    function t(i) {
      function n(t, o, s) {
        if ("undefined" != typeof document) {
          if (arguments.length > 1) {
            s = e({
              path: "/"
            }, n.defaults, s), "number" == typeof s.expires && (s.expires = new Date(1 * new Date + 864e5 * s.expires)), s.expires = s.expires ? s.expires.toUTCString() : "";
            try {
              var r = JSON.stringify(o);
              /^[\{\[]/.test(r) && (o = r)
            } catch (e) {}
            o = i.write ? i.write(o, t) : encodeURIComponent(String(o)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), t = encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
            var a = "";
            for (var l in s) s[l] && (a += "; " + l, !0 !== s[l] && (a += "=" + s[l].split(";")[0]));
            return document.cookie = t + "=" + o + a
          }
          for (var c = {}, d = function(e) {
              return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent)
            }, u = document.cookie ? document.cookie.split("; ") : [], p = 0; p < u.length; p++) {
            var f = u[p].split("="),
              h = f.slice(1).join("=");
            this.json || '"' !== h.charAt(0) || (h = h.slice(1, -1));
            try {
              var v = d(f[0]);
              if (h = (i.read || i)(h, v) || d(h), this.json) try {
                h = JSON.parse(h)
              } catch (e) {}
              if (c[v] = h, t === v) break
            } catch (e) {}
          }
          return t ? c[t] : c
        }
      }
      return n.set = n, n.get = function(e) {
        return n.call(n, e)
      }, n.getJSON = function(e) {
        return n.call({
          json: !0
        }, e)
      }, n.remove = function(t, i) {
        n(t, "", e(i, {
          expires: -1
        }))
      }, n.defaults = {}, n.withConverter = t, n
    }
    return t(function() {})
  })
}, function(e, t, i) {
  var n, n, o, s, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e
  } : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
  };
  ! function e(t, i, o) {
    function s(a, l) {
      if (!i[a]) {
        if (!t[a]) {
          var c = "function" == typeof n && n;
          if (!l && c) return n(a, !0);
          if (r) return r(a, !0);
          var d = new Error("Cannot find module '" + a + "'");
          throw d.code = "MODULE_NOT_FOUND", d
        }
        var u = i[a] = {
          exports: {}
        };
        t[a][0].call(u.exports, function(e) {
          var i = t[a][1][e];
          return s(i || e)
        }, u, u.exports, e, t, i, o)
      }
      return i[a].exports
    }
    for (var r = "function" == typeof n && n, a = 0; a < o.length; a++) s(o[a]);
    return s
  }({
    1: [function(e, t, n) {
      "use strict";
      var r = e("../main");
      o = r, void 0 !== (s = "function" == typeof o ? o.call(n, i, n, t) : o) && (t.exports = s)
    }, {
      "../main": 7
    }],
    2: [function(e, t, i) {
      "use strict";

      function n(e, t) {
        var i = e.className.split(" ");
        i.indexOf(t) < 0 && i.push(t), e.className = i.join(" ")
      }

      function o(e, t) {
        var i = e.className.split(" "),
          n = i.indexOf(t);
        n >= 0 && i.splice(n, 1), e.className = i.join(" ")
      }
      i.add = function(e, t) {
        e.classList ? e.classList.add(t) : n(e, t)
      }, i.remove = function(e, t) {
        e.classList ? e.classList.remove(t) : o(e, t)
      }, i.list = function(e) {
        return e.classList ? Array.prototype.slice.apply(e.classList) : e.className.split(" ")
      }
    }, {}],
    3: [function(e, t, i) {
      "use strict";

      function n(e, t) {
        return window.getComputedStyle(e)[t]
      }

      function o(e, t, i) {
        return "number" == typeof i && (i = i.toString() + "px"), e.style[t] = i, e
      }

      function s(e, t) {
        for (var i in t) {
          var n = t[i];
          "number" == typeof n && (n = n.toString() + "px"), e.style[i] = n
        }
        return e
      }
      var a = {};
      a.e = function(e, t) {
        var i = document.createElement(e);
        return i.className = t, i
      }, a.appendTo = function(e, t) {
        return t.appendChild(e), e
      }, a.css = function(e, t, i) {
        return "object" === (void 0 === t ? "undefined" : r(t)) ? s(e, t) : void 0 === i ? n(e, t) : o(e, t, i)
      }, a.matches = function(e, t) {
        return void 0 !== e.matches ? e.matches(t) : void 0 !== e.matchesSelector ? e.matchesSelector(t) : void 0 !== e.webkitMatchesSelector ? e.webkitMatchesSelector(t) : void 0 !== e.mozMatchesSelector ? e.mozMatchesSelector(t) : void 0 !== e.msMatchesSelector ? e.msMatchesSelector(t) : void 0
      }, a.remove = function(e) {
        void 0 !== e.remove ? e.remove() : e.parentNode && e.parentNode.removeChild(e)
      }, a.queryChildren = function(e, t) {
        return Array.prototype.filter.call(e.childNodes, function(e) {
          return a.matches(e, t)
        })
      }, t.exports = a
    }, {}],
    4: [function(e, t, i) {
      "use strict";
      var n = function(e) {
        this.element = e, this.events = {}
      };
      n.prototype.bind = function(e, t) {
        void 0 === this.events[e] && (this.events[e] = []), this.events[e].push(t), this.element.addEventListener(e, t, !1)
      }, n.prototype.unbind = function(e, t) {
        var i = void 0 !== t;
        this.events[e] = this.events[e].filter(function(n) {
          return !(!i || n === t) || (this.element.removeEventListener(e, n, !1), !1)
        }, this)
      }, n.prototype.unbindAll = function() {
        for (var e in this.events) this.unbind(e)
      };
      var o = function() {
        this.eventElements = []
      };
      o.prototype.eventElement = function(e) {
        var t = this.eventElements.filter(function(t) {
          return t.element === e
        })[0];
        return void 0 === t && (t = new n(e), this.eventElements.push(t)), t
      }, o.prototype.bind = function(e, t, i) {
        this.eventElement(e).bind(t, i)
      }, o.prototype.unbind = function(e, t, i) {
        this.eventElement(e).unbind(t, i)
      }, o.prototype.unbindAll = function() {
        for (var e = 0; e < this.eventElements.length; e++) this.eventElements[e].unbindAll()
      }, o.prototype.once = function(e, t, i) {
        var n = this.eventElement(e),
          o = function e(o) {
            n.unbind(t, e), i(o)
          };
        n.bind(t, o)
      }, t.exports = o
    }, {}],
    5: [function(e, t, i) {
      "use strict";
      t.exports = function() {
        function e() {
          return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
        }
        return function() {
          return e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e()
        }
      }()
    }, {}],
    6: [function(e, t, i) {
      "use strict";
      var n = e("./class"),
        o = e("./dom"),
        s = i.toInt = function(e) {
          return parseInt(e, 10) || 0
        },
        a = i.clone = function(e) {
          if (e) {
            if (e.constructor === Array) return e.map(a);
            if ("object" === (void 0 === e ? "undefined" : r(e))) {
              var t = {};
              for (var i in e) t[i] = a(e[i]);
              return t
            }
            return e
          }
          return null
        };
      i.extend = function(e, t) {
        var i = a(e);
        for (var n in t) i[n] = a(t[n]);
        return i
      }, i.isEditable = function(e) {
        return o.matches(e, "input,[contenteditable]") || o.matches(e, "select,[contenteditable]") || o.matches(e, "textarea,[contenteditable]") || o.matches(e, "button,[contenteditable]")
      }, i.removePsClasses = function(e) {
        for (var t = n.list(e), i = 0; i < t.length; i++) {
          var o = t[i];
          0 === o.indexOf("ps-") && n.remove(e, o)
        }
      }, i.outerWidth = function(e) {
        return s(o.css(e, "width")) + s(o.css(e, "paddingLeft")) + s(o.css(e, "paddingRight")) + s(o.css(e, "borderLeftWidth")) + s(o.css(e, "borderRightWidth"))
      }, i.startScrolling = function(e, t) {
        n.add(e, "ps-in-scrolling"), void 0 !== t ? n.add(e, "ps-" + t) : (n.add(e, "ps-x"), n.add(e, "ps-y"))
      }, i.stopScrolling = function(e, t) {
        n.remove(e, "ps-in-scrolling"), void 0 !== t ? n.remove(e, "ps-" + t) : (n.remove(e, "ps-x"), n.remove(e, "ps-y"))
      }, i.env = {
        isWebKit: "WebkitAppearance" in document.documentElement.style,
        supportsTouch: "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
        supportsIePointer: null !== window.navigator.msMaxTouchPoints
      }
    }, {
      "./class": 2,
      "./dom": 3
    }],
    7: [function(e, t, i) {
      "use strict";
      var n = e("./plugin/destroy"),
        o = e("./plugin/initialize"),
        s = e("./plugin/update");
      t.exports = {
        initialize: o,
        update: s,
        destroy: n
      }
    }, {
      "./plugin/destroy": 9,
      "./plugin/initialize": 17,
      "./plugin/update": 21
    }],
    8: [function(e, t, i) {
      "use strict";
      t.exports = {
        handlers: ["click-rail", "drag-scrollbar", "keyboard", "wheel", "touch"],
        maxScrollbarLength: null,
        minScrollbarLength: null,
        scrollXMarginOffset: 0,
        scrollYMarginOffset: 0,
        suppressScrollX: !1,
        suppressScrollY: !1,
        swipePropagation: !0,
        useBothWheelAxes: !1,
        wheelPropagation: !1,
        wheelSpeed: 1,
        theme: "default"
      }
    }, {}],
    9: [function(e, t, i) {
      "use strict";
      var n = e("../lib/helper"),
        o = e("../lib/dom"),
        s = e("./instances");
      t.exports = function(e) {
        var t = s.get(e);
        t && (t.event.unbindAll(), o.remove(t.scrollbarX), o.remove(t.scrollbarY), o.remove(t.scrollbarXRail), o.remove(t.scrollbarYRail), n.removePsClasses(e), s.remove(e))
      }
    }, {
      "../lib/dom": 3,
      "../lib/helper": 6,
      "./instances": 18
    }],
    10: [function(e, t, i) {
      "use strict";

      function n(e, t) {
        function i(e) {
          return e.getBoundingClientRect()
        }
        var n = function(e) {
          e.stopPropagation()
        };
        t.event.bind(t.scrollbarY, "click", n), t.event.bind(t.scrollbarYRail, "click", function(n) {
          var o = n.pageY - window.pageYOffset - i(t.scrollbarYRail).top,
            a = o > t.scrollbarYTop ? 1 : -1;
          r(e, "top", e.scrollTop + a * t.containerHeight), s(e), n.stopPropagation()
        }), t.event.bind(t.scrollbarX, "click", n), t.event.bind(t.scrollbarXRail, "click", function(n) {
          var o = n.pageX - window.pageXOffset - i(t.scrollbarXRail).left,
            a = o > t.scrollbarXLeft ? 1 : -1;
          r(e, "left", e.scrollLeft + a * t.containerWidth), s(e), n.stopPropagation()
        })
      }
      var o = e("../instances"),
        s = e("../update-geometry"),
        r = e("../update-scroll");
      t.exports = function(e) {
        n(e, o.get(e))
      }
    }, {
      "../instances": 18,
      "../update-geometry": 19,
      "../update-scroll": 20
    }],
    11: [function(e, t, i) {
      "use strict";

      function n(e, t) {
        function i(i) {
          var o = n + i * t.railXRatio,
            r = Math.max(0, t.scrollbarXRail.getBoundingClientRect().left) + t.railXRatio * (t.railXWidth - t.scrollbarXWidth);
          t.scrollbarXLeft = o < 0 ? 0 : o > r ? r : o;
          var a = s.toInt(t.scrollbarXLeft * (t.contentWidth - t.containerWidth) / (t.containerWidth - t.railXRatio * t.scrollbarXWidth)) - t.negativeScrollAdjustment;
          c(e, "left", a)
        }
        var n = null,
          o = null,
          a = function(t) {
            i(t.pageX - o), l(e), t.stopPropagation(), t.preventDefault()
          },
          d = function() {
            s.stopScrolling(e, "x"), t.event.unbind(t.ownerDocument, "mousemove", a)
          };
        t.event.bind(t.scrollbarX, "mousedown", function(i) {
          o = i.pageX, n = s.toInt(r.css(t.scrollbarX, "left")) * t.railXRatio, s.startScrolling(e, "x"), t.event.bind(t.ownerDocument, "mousemove", a), t.event.once(t.ownerDocument, "mouseup", d), i.stopPropagation(), i.preventDefault()
        })
      }

      function o(e, t) {
        function i(i) {
          var o = n + i * t.railYRatio,
            r = Math.max(0, t.scrollbarYRail.getBoundingClientRect().top) + t.railYRatio * (t.railYHeight - t.scrollbarYHeight);
          t.scrollbarYTop = o < 0 ? 0 : o > r ? r : o;
          var a = s.toInt(t.scrollbarYTop * (t.contentHeight - t.containerHeight) / (t.containerHeight - t.railYRatio * t.scrollbarYHeight));
          c(e, "top", a)
        }
        var n = null,
          o = null,
          a = function(t) {
            i(t.pageY - o), l(e), t.stopPropagation(), t.preventDefault()
          },
          d = function() {
            s.stopScrolling(e, "y"), t.event.unbind(t.ownerDocument, "mousemove", a)
          };
        t.event.bind(t.scrollbarY, "mousedown", function(i) {
          o = i.pageY, n = s.toInt(r.css(t.scrollbarY, "top")) * t.railYRatio, s.startScrolling(e, "y"), t.event.bind(t.ownerDocument, "mousemove", a), t.event.once(t.ownerDocument, "mouseup", d), i.stopPropagation(), i.preventDefault()
        })
      }
      var s = e("../../lib/helper"),
        r = e("../../lib/dom"),
        a = e("../instances"),
        l = e("../update-geometry"),
        c = e("../update-scroll");
      t.exports = function(e) {
        var t = a.get(e);
        n(e, t), o(e, t)
      }
    }, {
      "../../lib/dom": 3,
      "../../lib/helper": 6,
      "../instances": 18,
      "../update-geometry": 19,
      "../update-scroll": 20
    }],
    12: [function(e, t, i) {
      "use strict";

      function n(e, t) {
        function i(i, n) {
          var o = e.scrollTop;
          if (0 === i) {
            if (!t.scrollbarYActive) return !1;
            if (0 === o && n > 0 || o >= t.contentHeight - t.containerHeight && n < 0) return !t.settings.wheelPropagation
          }
          var s = e.scrollLeft;
          if (0 === n) {
            if (!t.scrollbarXActive) return !1;
            if (0 === s && i < 0 || s >= t.contentWidth - t.containerWidth && i > 0) return !t.settings.wheelPropagation
          }
          return !0
        }
        var n = !1;
        t.event.bind(e, "mouseenter", function() {
          n = !0
        }), t.event.bind(e, "mouseleave", function() {
          n = !1
        });
        var r = !1;
        t.event.bind(t.ownerDocument, "keydown", function(c) {
          if (!(c.isDefaultPrevented && c.isDefaultPrevented() || c.defaultPrevented)) {
            var d = s.matches(t.scrollbarX, ":focus") || s.matches(t.scrollbarY, ":focus");
            if (n || d) {
              var u = document.activeElement ? document.activeElement : t.ownerDocument.activeElement;
              if (u) {
                if ("IFRAME" === u.tagName) u = u.contentDocument.activeElement;
                else
                  for (; u.shadowRoot;) u = u.shadowRoot.activeElement;
                if (o.isEditable(u)) return
              }
              var p = 0,
                f = 0;
              switch (c.which) {
                case 37:
                  p = c.metaKey ? -t.contentWidth : c.altKey ? -t.containerWidth : -30;
                  break;
                case 38:
                  f = c.metaKey ? t.contentHeight : c.altKey ? t.containerHeight : 30;
                  break;
                case 39:
                  p = c.metaKey ? t.contentWidth : c.altKey ? t.containerWidth : 30;
                  break;
                case 40:
                  f = c.metaKey ? -t.contentHeight : c.altKey ? -t.containerHeight : -30;
                  break;
                case 33:
                  f = 90;
                  break;
                case 32:
                  f = c.shiftKey ? 90 : -90;
                  break;
                case 34:
                  f = -90;
                  break;
                case 35:
                  f = c.ctrlKey ? -t.contentHeight : -t.containerHeight;
                  break;
                case 36:
                  f = c.ctrlKey ? e.scrollTop : t.containerHeight;
                  break;
                default:
                  return
              }
              l(e, "top", e.scrollTop - f), l(e, "left", e.scrollLeft + p), a(e), r = i(p, f), r && c.preventDefault()
            }
          }
        })
      }
      var o = e("../../lib/helper"),
        s = e("../../lib/dom"),
        r = e("../instances"),
        a = e("../update-geometry"),
        l = e("../update-scroll");
      t.exports = function(e) {
        n(e, r.get(e))
      }
    }, {
      "../../lib/dom": 3,
      "../../lib/helper": 6,
      "../instances": 18,
      "../update-geometry": 19,
      "../update-scroll": 20
    }],
    13: [function(e, t, i) {
      "use strict";

      function n(e, t) {
        function i(i, n) {
          var o = e.scrollTop;
          if (0 === i) {
            if (!t.scrollbarYActive) return !1;
            if (0 === o && n > 0 || o >= t.contentHeight - t.containerHeight && n < 0) return !t.settings.wheelPropagation
          }
          var s = e.scrollLeft;
          if (0 === n) {
            if (!t.scrollbarXActive) return !1;
            if (0 === s && i < 0 || s >= t.contentWidth - t.containerWidth && i > 0) return !t.settings.wheelPropagation
          }
          return !0
        }

        function n(e) {
          var t = e.deltaX,
            i = -1 * e.deltaY;
          return void 0 !== t && void 0 !== i || (t = -1 * e.wheelDeltaX / 6, i = e.wheelDeltaY / 6), e.deltaMode && 1 === e.deltaMode && (t *= 10, i *= 10), t !== t && i !== i && (t = 0, i = e.wheelDelta), e.shiftKey ? [-i, -t] : [t, i]
        }

        function o(t, i) {
          var n = e.querySelector("textarea:hover, select[multiple]:hover, .ps-child:hover");
          if (n) {
            if (!window.getComputedStyle(n).overflow.match(/(scroll|auto)/)) return !1;
            var o = n.scrollHeight - n.clientHeight;
            if (o > 0 && !(0 === n.scrollTop && i > 0 || n.scrollTop === o && i < 0)) return !0;
            var s = n.scrollLeft - n.clientWidth;
            if (s > 0 && !(0 === n.scrollLeft && t < 0 || n.scrollLeft === s && t > 0)) return !0
          }
          return !1
        }

        function a(a) {
          var c = n(a),
            d = c[0],
            u = c[1];
          o(d, u) || (l = !1, t.settings.useBothWheelAxes ? t.scrollbarYActive && !t.scrollbarXActive ? (u ? r(e, "top", e.scrollTop - u * t.settings.wheelSpeed) : r(e, "top", e.scrollTop + d * t.settings.wheelSpeed), l = !0) : t.scrollbarXActive && !t.scrollbarYActive && (d ? r(e, "left", e.scrollLeft + d * t.settings.wheelSpeed) : r(e, "left", e.scrollLeft - u * t.settings.wheelSpeed), l = !0) : (r(e, "top", e.scrollTop - u * t.settings.wheelSpeed), r(e, "left", e.scrollLeft + d * t.settings.wheelSpeed)), s(e), (l = l || i(d, u)) && (a.stopPropagation(), a.preventDefault()))
        }
        var l = !1;
        void 0 !== window.onwheel ? t.event.bind(e, "wheel", a) : void 0 !== window.onmousewheel && t.event.bind(e, "mousewheel", a)
      }
      var o = e("../instances"),
        s = e("../update-geometry"),
        r = e("../update-scroll");
      t.exports = function(e) {
        n(e, o.get(e))
      }
    }, {
      "../instances": 18,
      "../update-geometry": 19,
      "../update-scroll": 20
    }],
    14: [function(e, t, i) {
      "use strict";

      function n(e, t) {
        t.event.bind(e, "scroll", function() {
          s(e)
        })
      }
      var o = e("../instances"),
        s = e("../update-geometry");
      t.exports = function(e) {
        n(e, o.get(e))
      }
    }, {
      "../instances": 18,
      "../update-geometry": 19
    }],
    15: [function(e, t, i) {
      "use strict";

      function n(e, t) {
        function i() {
          var e = window.getSelection ? window.getSelection() : document.getSelection ? document.getSelection() : "";
          return 0 === e.toString().length ? null : e.getRangeAt(0).commonAncestorContainer
        }

        function n() {
          c || (c = setInterval(function() {
            if (!s.get(e)) return void clearInterval(c);
            a(e, "top", e.scrollTop + d.top), a(e, "left", e.scrollLeft + d.left), r(e)
          }, 50))
        }

        function l() {
          c && (clearInterval(c), c = null), o.stopScrolling(e)
        }
        var c = null,
          d = {
            top: 0,
            left: 0
          },
          u = !1;
        t.event.bind(t.ownerDocument, "selectionchange", function() {
          e.contains(i()) ? u = !0 : (u = !1, l())
        }), t.event.bind(window, "mouseup", function() {
          u && (u = !1, l())
        }), t.event.bind(window, "keyup", function() {
          u && (u = !1, l())
        }), t.event.bind(window, "mousemove", function(t) {
          if (u) {
            var i = {
                x: t.pageX,
                y: t.pageY
              },
              s = {
                left: e.offsetLeft,
                right: e.offsetLeft + e.offsetWidth,
                top: e.offsetTop,
                bottom: e.offsetTop + e.offsetHeight
              };
            i.x < s.left + 3 ? (d.left = -5, o.startScrolling(e, "x")) : i.x > s.right - 3 ? (d.left = 5, o.startScrolling(e, "x")) : d.left = 0, i.y < s.top + 3 ? (d.top = s.top + 3 - i.y < 5 ? -5 : -20, o.startScrolling(e, "y")) : i.y > s.bottom - 3 ? (d.top = i.y - s.bottom + 3 < 5 ? 5 : 20, o.startScrolling(e, "y")) : d.top = 0, 0 === d.top && 0 === d.left ? l() : n()
          }
        })
      }
      var o = e("../../lib/helper"),
        s = e("../instances"),
        r = e("../update-geometry"),
        a = e("../update-scroll");
      t.exports = function(e) {
        n(e, s.get(e))
      }
    }, {
      "../../lib/helper": 6,
      "../instances": 18,
      "../update-geometry": 19,
      "../update-scroll": 20
    }],
    16: [function(e, t, i) {
      "use strict";

      function n(e, t, i, n) {
        function o(i, n) {
          var o = e.scrollTop,
            s = e.scrollLeft,
            r = Math.abs(i),
            a = Math.abs(n);
          if (a > r) {
            if (n < 0 && o === t.contentHeight - t.containerHeight || n > 0 && 0 === o) return !t.settings.swipePropagation
          } else if (r > a && (i < 0 && s === t.contentWidth - t.containerWidth || i > 0 && 0 === s)) return !t.settings.swipePropagation;
          return !0
        }

        function l(t, i) {
          a(e, "top", e.scrollTop - i), a(e, "left", e.scrollLeft - t), r(e)
        }

        function c() {
          w = !0
        }

        function d() {
          w = !1
        }

        function u(e) {
          return e.targetTouches ? e.targetTouches[0] : e
        }

        function p(e) {
          return !(!e.targetTouches || 1 !== e.targetTouches.length) || !(!e.pointerType || "mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE)
        }

        function f(e) {
          if (p(e)) {
            x = !0;
            var t = u(e);
            g.pageX = t.pageX, g.pageY = t.pageY, m = (new Date).getTime(), null !== b && clearInterval(b), e.stopPropagation()
          }
        }

        function h(e) {
          if (!x && t.settings.swipePropagation && f(e), !w && x && p(e)) {
            var i = u(e),
              n = {
                pageX: i.pageX,
                pageY: i.pageY
              },
              s = n.pageX - g.pageX,
              r = n.pageY - g.pageY;
            l(s, r), g = n;
            var a = (new Date).getTime(),
              c = a - m;
            c > 0 && (y.x = s / c, y.y = r / c, m = a), o(s, r) && (e.stopPropagation(), e.preventDefault())
          }
        }

        function v() {
          !w && x && (x = !1, clearInterval(b), b = setInterval(function() {
            return s.get(e) && (y.x || y.y) ? Math.abs(y.x) < .01 && Math.abs(y.y) < .01 ? void clearInterval(b) : (l(30 * y.x, 30 * y.y), y.x *= .8, void(y.y *= .8)) : void clearInterval(b)
          }, 10))
        }
        var g = {},
          m = 0,
          y = {},
          b = null,
          w = !1,
          x = !1;
        i ? (t.event.bind(window, "touchstart", c), t.event.bind(window, "touchend", d), t.event.bind(e, "touchstart", f), t.event.bind(e, "touchmove", h), t.event.bind(e, "touchend", v)) : n && (window.PointerEvent ? (t.event.bind(window, "pointerdown", c), t.event.bind(window, "pointerup", d), t.event.bind(e, "pointerdown", f), t.event.bind(e, "pointermove", h), t.event.bind(e, "pointerup", v)) : window.MSPointerEvent && (t.event.bind(window, "MSPointerDown", c), t.event.bind(window, "MSPointerUp", d), t.event.bind(e, "MSPointerDown", f), t.event.bind(e, "MSPointerMove", h), t.event.bind(e, "MSPointerUp", v)))
      }
      var o = e("../../lib/helper"),
        s = e("../instances"),
        r = e("../update-geometry"),
        a = e("../update-scroll");
      t.exports = function(e) {
        if (o.env.supportsTouch || o.env.supportsIePointer) {
          n(e, s.get(e), o.env.supportsTouch, o.env.supportsIePointer)
        }
      }
    }, {
      "../../lib/helper": 6,
      "../instances": 18,
      "../update-geometry": 19,
      "../update-scroll": 20
    }],
    17: [function(e, t, i) {
      "use strict";
      var n = e("../lib/helper"),
        o = e("../lib/class"),
        s = e("./instances"),
        a = e("./update-geometry"),
        l = {
          "click-rail": e("./handler/click-rail"),
          "drag-scrollbar": e("./handler/drag-scrollbar"),
          keyboard: e("./handler/keyboard"),
          wheel: e("./handler/mouse-wheel"),
          touch: e("./handler/touch"),
          selection: e("./handler/selection")
        },
        c = e("./handler/native-scroll");
      t.exports = function(e, t) {
        t = "object" === (void 0 === t ? "undefined" : r(t)) ? t : {}, o.add(e, "ps-container");
        var i = s.add(e);
        i.settings = n.extend(i.settings, t), o.add(e, "ps-theme-" + i.settings.theme), i.settings.handlers.forEach(function(t) {
          l[t](e)
        }), c(e), a(e)
      }
    }, {
      "../lib/class": 2,
      "../lib/helper": 6,
      "./handler/click-rail": 10,
      "./handler/drag-scrollbar": 11,
      "./handler/keyboard": 12,
      "./handler/mouse-wheel": 13,
      "./handler/native-scroll": 14,
      "./handler/selection": 15,
      "./handler/touch": 16,
      "./instances": 18,
      "./update-geometry": 19
    }],
    18: [function(e, t, i) {
      "use strict";

      function n(e) {
        function t() {
          l.add(e, "ps-focus")
        }

        function i() {
          l.remove(e, "ps-focus")
        }
        var n = this;
        n.settings = a.clone(c), n.containerWidth = null, n.containerHeight = null, n.contentWidth = null, n.contentHeight = null, n.isRtl = "rtl" === d.css(e, "direction"), n.isNegativeScroll = function() {
          var t = e.scrollLeft,
            i = null;
          return e.scrollLeft = -1, i = e.scrollLeft < 0, e.scrollLeft = t, i
        }(), n.negativeScrollAdjustment = n.isNegativeScroll ? e.scrollWidth - e.clientWidth : 0, n.event = new u, n.ownerDocument = e.ownerDocument || document, n.scrollbarXRail = d.appendTo(d.e("div", "ps-scrollbar-x-rail"), e), n.scrollbarX = d.appendTo(d.e("div", "ps-scrollbar-x"), n.scrollbarXRail), n.scrollbarX.setAttribute("tabindex", 0), n.event.bind(n.scrollbarX, "focus", t), n.event.bind(n.scrollbarX, "blur", i), n.scrollbarXActive = null, n.scrollbarXWidth = null, n.scrollbarXLeft = null, n.scrollbarXBottom = a.toInt(d.css(n.scrollbarXRail, "bottom")), n.isScrollbarXUsingBottom = n.scrollbarXBottom === n.scrollbarXBottom, n.scrollbarXTop = n.isScrollbarXUsingBottom ? null : a.toInt(d.css(n.scrollbarXRail, "top")), n.railBorderXWidth = a.toInt(d.css(n.scrollbarXRail, "borderLeftWidth")) + a.toInt(d.css(n.scrollbarXRail, "borderRightWidth")), d.css(n.scrollbarXRail, "display", "block"), n.railXMarginWidth = a.toInt(d.css(n.scrollbarXRail, "marginLeft")) + a.toInt(d.css(n.scrollbarXRail, "marginRight")), d.css(n.scrollbarXRail, "display", ""), n.railXWidth = null, n.railXRatio = null, n.scrollbarYRail = d.appendTo(d.e("div", "ps-scrollbar-y-rail"), e), n.scrollbarY = d.appendTo(d.e("div", "ps-scrollbar-y"), n.scrollbarYRail), n.scrollbarY.setAttribute("tabindex", 0), n.event.bind(n.scrollbarY, "focus", t), n.event.bind(n.scrollbarY, "blur", i), n.scrollbarYActive = null, n.scrollbarYHeight = null, n.scrollbarYTop = null, n.scrollbarYRight = a.toInt(d.css(n.scrollbarYRail, "right")), n.isScrollbarYUsingRight = n.scrollbarYRight === n.scrollbarYRight, n.scrollbarYLeft = n.isScrollbarYUsingRight ? null : a.toInt(d.css(n.scrollbarYRail, "left")), n.scrollbarYOuterWidth = n.isRtl ? a.outerWidth(n.scrollbarY) : null, n.railBorderYWidth = a.toInt(d.css(n.scrollbarYRail, "borderTopWidth")) + a.toInt(d.css(n.scrollbarYRail, "borderBottomWidth")), d.css(n.scrollbarYRail, "display", "block"), n.railYMarginHeight = a.toInt(d.css(n.scrollbarYRail, "marginTop")) + a.toInt(d.css(n.scrollbarYRail, "marginBottom")), d.css(n.scrollbarYRail, "display", ""), n.railYHeight = null, n.railYRatio = null
      }

      function o(e) {
        return e.getAttribute("data-ps-id")
      }

      function s(e, t) {
        e.setAttribute("data-ps-id", t)
      }

      function r(e) {
        e.removeAttribute("data-ps-id")
      }
      var a = e("../lib/helper"),
        l = e("../lib/class"),
        c = e("./default-setting"),
        d = e("../lib/dom"),
        u = e("../lib/event-manager"),
        p = e("../lib/guid"),
        f = {};
      i.add = function(e) {
        var t = p();
        return s(e, t), f[t] = new n(e), f[t]
      }, i.remove = function(e) {
        delete f[o(e)], r(e)
      }, i.get = function(e) {
        return f[o(e)]
      }
    }, {
      "../lib/class": 2,
      "../lib/dom": 3,
      "../lib/event-manager": 4,
      "../lib/guid": 5,
      "../lib/helper": 6,
      "./default-setting": 8
    }],
    19: [function(e, t, i) {
      "use strict";

      function n(e, t) {
        return e.settings.minScrollbarLength && (t = Math.max(t, e.settings.minScrollbarLength)), e.settings.maxScrollbarLength && (t = Math.min(t, e.settings.maxScrollbarLength)), t
      }

      function o(e, t) {
        var i = {
          width: t.railXWidth
        };
        t.isRtl ? i.left = t.negativeScrollAdjustment + e.scrollLeft + t.containerWidth - t.contentWidth : i.left = e.scrollLeft, t.isScrollbarXUsingBottom ? i.bottom = t.scrollbarXBottom - e.scrollTop : i.top = t.scrollbarXTop + e.scrollTop, a.css(t.scrollbarXRail, i);
        var n = {
          top: e.scrollTop,
          height: t.railYHeight
        };
        t.isScrollbarYUsingRight ? t.isRtl ? n.right = t.contentWidth - (t.negativeScrollAdjustment + e.scrollLeft) - t.scrollbarYRight - t.scrollbarYOuterWidth : n.right = t.scrollbarYRight - e.scrollLeft : t.isRtl ? n.left = t.negativeScrollAdjustment + e.scrollLeft + 2 * t.containerWidth - t.contentWidth - t.scrollbarYLeft - t.scrollbarYOuterWidth : n.left = t.scrollbarYLeft + e.scrollLeft, a.css(t.scrollbarYRail, n), a.css(t.scrollbarX, {
          left: t.scrollbarXLeft,
          width: t.scrollbarXWidth - t.railBorderXWidth
        }), a.css(t.scrollbarY, {
          top: t.scrollbarYTop,
          height: t.scrollbarYHeight - t.railBorderYWidth
        })
      }
      var s = e("../lib/helper"),
        r = e("../lib/class"),
        a = e("../lib/dom"),
        l = e("./instances"),
        c = e("./update-scroll");
      t.exports = function(e) {
        var t = l.get(e);
        t.containerWidth = e.clientWidth, t.containerHeight = e.clientHeight, t.contentWidth = e.scrollWidth, t.contentHeight = e.scrollHeight;
        var i;
        e.contains(t.scrollbarXRail) || (i = a.queryChildren(e, ".ps-scrollbar-x-rail"), i.length > 0 && i.forEach(function(e) {
          a.remove(e)
        }), a.appendTo(t.scrollbarXRail, e)), e.contains(t.scrollbarYRail) || (i = a.queryChildren(e, ".ps-scrollbar-y-rail"), i.length > 0 && i.forEach(function(e) {
          a.remove(e)
        }), a.appendTo(t.scrollbarYRail, e)), !t.settings.suppressScrollX && t.containerWidth + t.settings.scrollXMarginOffset < t.contentWidth ? (t.scrollbarXActive = !0, t.railXWidth = t.containerWidth - t.railXMarginWidth, t.railXRatio = t.containerWidth / t.railXWidth, t.scrollbarXWidth = n(t, s.toInt(t.railXWidth * t.containerWidth / t.contentWidth)), t.scrollbarXLeft = s.toInt((t.negativeScrollAdjustment + e.scrollLeft) * (t.railXWidth - t.scrollbarXWidth) / (t.contentWidth - t.containerWidth))) : t.scrollbarXActive = !1, !t.settings.suppressScrollY && t.containerHeight + t.settings.scrollYMarginOffset < t.contentHeight ? (t.scrollbarYActive = !0, t.railYHeight = t.containerHeight - t.railYMarginHeight, t.railYRatio = t.containerHeight / t.railYHeight, t.scrollbarYHeight = n(t, s.toInt(t.railYHeight * t.containerHeight / t.contentHeight)), t.scrollbarYTop = s.toInt(e.scrollTop * (t.railYHeight - t.scrollbarYHeight) / (t.contentHeight - t.containerHeight))) : t.scrollbarYActive = !1, t.scrollbarXLeft >= t.railXWidth - t.scrollbarXWidth && (t.scrollbarXLeft = t.railXWidth - t.scrollbarXWidth), t.scrollbarYTop >= t.railYHeight - t.scrollbarYHeight && (t.scrollbarYTop = t.railYHeight - t.scrollbarYHeight), o(e, t), t.scrollbarXActive ? r.add(e, "ps-active-x") : (r.remove(e, "ps-active-x"), t.scrollbarXWidth = 0, t.scrollbarXLeft = 0, c(e, "left", 0)), t.scrollbarYActive ? r.add(e, "ps-active-y") : (r.remove(e, "ps-active-y"), t.scrollbarYHeight = 0, t.scrollbarYTop = 0, c(e, "top", 0))
      }
    }, {
      "../lib/class": 2,
      "../lib/dom": 3,
      "../lib/helper": 6,
      "./instances": 18,
      "./update-scroll": 20
    }],
    20: [function(e, t, i) {
      "use strict";
      var n, o, s = e("./instances"),
        r = function(e) {
          var t = document.createEvent("Event");
          return t.initEvent(e, !0, !0), t
        };
      t.exports = function(e, t, i) {
        if (void 0 === e) throw "You must provide an element to the update-scroll function";
        if (void 0 === t) throw "You must provide an axis to the update-scroll function";
        if (void 0 === i) throw "You must provide a value to the update-scroll function";
        "top" === t && i <= 0 && (e.scrollTop = i = 0, e.dispatchEvent(r("ps-y-reach-start"))), "left" === t && i <= 0 && (e.scrollLeft = i = 0, e.dispatchEvent(r("ps-x-reach-start")));
        var a = s.get(e);
        "top" === t && i >= a.contentHeight - a.containerHeight && (i = a.contentHeight - a.containerHeight, i - e.scrollTop <= 1 ? i = e.scrollTop : e.scrollTop = i, e.dispatchEvent(r("ps-y-reach-end"))), "left" === t && i >= a.contentWidth - a.containerWidth && (i = a.contentWidth - a.containerWidth, i - e.scrollLeft <= 1 ? i = e.scrollLeft : e.scrollLeft = i, e.dispatchEvent(r("ps-x-reach-end"))), n || (n = e.scrollTop), o || (o = e.scrollLeft), "top" === t && i < n && e.dispatchEvent(r("ps-scroll-up")), "top" === t && i > n && e.dispatchEvent(r("ps-scroll-down")), "left" === t && i < o && e.dispatchEvent(r("ps-scroll-left")), "left" === t && i > o && e.dispatchEvent(r("ps-scroll-right")), "top" === t && (e.scrollTop = n = i, e.dispatchEvent(r("ps-scroll-y"))), "left" === t && (e.scrollLeft = o = i, e.dispatchEvent(r("ps-scroll-x")))
      }
    }, {
      "./instances": 18
    }],
    21: [function(e, t, i) {
      "use strict";
      var n = e("../lib/helper"),
        o = e("../lib/dom"),
        s = e("./instances"),
        r = e("./update-geometry"),
        a = e("./update-scroll");
      t.exports = function(e) {
        var t = s.get(e);
        t && (t.negativeScrollAdjustment = t.isNegativeScroll ? e.scrollWidth - e.clientWidth : 0, o.css(t.scrollbarXRail, "display", "block"), o.css(t.scrollbarYRail, "display", "block"), t.railXMarginWidth = n.toInt(o.css(t.scrollbarXRail, "marginLeft")) + n.toInt(o.css(t.scrollbarXRail, "marginRight")), t.railYMarginHeight = n.toInt(o.css(t.scrollbarYRail, "marginTop")) + n.toInt(o.css(t.scrollbarYRail, "marginBottom")), o.css(t.scrollbarXRail, "display", "none"), o.css(t.scrollbarYRail, "display", "none"), r(e), a(e, "top", e.scrollTop), a(e, "left", e.scrollLeft), o.css(t.scrollbarXRail, "display", ""), o.css(t.scrollbarYRail, "display", ""))
      }
    }, {
      "../lib/dom": 3,
      "../lib/helper": 6,
      "./instances": 18,
      "./update-geometry": 19,
      "./update-scroll": 20
    }]
  }, {}, [1])
}, function(e, t, i) {
  var n, o, s, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e
  } : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
  };
  e.exports = function(r) {
    "use strict";
    o = [i(2)], n = r, void 0 !== (s = "function" == typeof n ? n.apply(t, o) : n) && (e.exports = s)
  }(function(e) {
    "use strict";
    var t = window.Slick || {};
    t = function() {
      function t(t, n) {
        var o, s = this;
        s.defaults = {
          accessibility: !0,
          adaptiveHeight: !1,
          appendArrows: e(t),
          appendDots: e(t),
          arrows: !0,
          asNavFor: null,
          prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
          nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
          autoplay: !1,
          autoplaySpeed: 3e3,
          centerMode: !1,
          centerPadding: "50px",
          cssEase: "ease",
          customPaging: function(t, i) {
            return e('<button type="button" data-role="none" role="button" tabindex="0" />').text(i + 1)
          },
          dots: !1,
          dotsClass: "slick-dots",
          draggable: !0,
          easing: "linear",
          edgeFriction: .35,
          fade: !1,
          focusOnSelect: !1,
          infinite: !0,
          initialSlide: 0,
          lazyLoad: "ondemand",
          mobileFirst: !1,
          pauseOnHover: !0,
          pauseOnFocus: !0,
          pauseOnDotsHover: !1,
          respondTo: "window",
          responsive: null,
          rows: 1,
          rtl: !1,
          slide: "",
          slidesPerRow: 1,
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 500,
          swipe: !0,
          swipeToSlide: !1,
          touchMove: !0,
          touchThreshold: 5,
          useCSS: !0,
          useTransform: !0,
          variableWidth: !1,
          vertical: !1,
          verticalSwiping: !1,
          waitForAnimate: !0,
          zIndex: 1e3
        }, s.initials = {
          animating: !1,
          dragging: !1,
          autoPlayTimer: null,
          currentDirection: 0,
          currentLeft: null,
          currentSlide: 0,
          direction: 1,
          $dots: null,
          listWidth: null,
          listHeight: null,
          loadIndex: 0,
          $nextArrow: null,
          $prevArrow: null,
          slideCount: null,
          slideWidth: null,
          $slideTrack: null,
          $slides: null,
          sliding: !1,
          slideOffset: 0,
          swipeLeft: null,
          $list: null,
          touchObject: {},
          transformsEnabled: !1,
          unslicked: !1
        }, e.extend(s, s.initials), s.activeBreakpoint = null, s.animType = null, s.animProp = null, s.breakpoints = [], s.breakpointSettings = [], s.cssTransitions = !1, s.focussed = !1, s.interrupted = !1, s.hidden = "hidden", s.paused = !0, s.positionProp = null, s.respondTo = null, s.rowCount = 1, s.shouldClick = !0, s.$slider = e(t), s.$slidesCache = null, s.transformType = null, s.transitionType = null, s.visibilityChange = "visibilitychange", s.windowWidth = 0, s.windowTimer = null, o = e(t).data("slick") || {}, s.options = e.extend({}, s.defaults, n, o), s.currentSlide = s.options.initialSlide, s.originalSettings = s.options, void 0 !== document.mozHidden ? (s.hidden = "mozHidden", s.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (s.hidden = "webkitHidden", s.visibilityChange = "webkitvisibilitychange"), s.autoPlay = e.proxy(s.autoPlay, s), s.autoPlayClear = e.proxy(s.autoPlayClear, s), s.autoPlayIterator = e.proxy(s.autoPlayIterator, s), s.changeSlide = e.proxy(s.changeSlide, s), s.clickHandler = e.proxy(s.clickHandler, s), s.selectHandler = e.proxy(s.selectHandler, s), s.setPosition = e.proxy(s.setPosition, s), s.swipeHandler = e.proxy(s.swipeHandler, s), s.dragHandler = e.proxy(s.dragHandler, s), s.keyHandler = e.proxy(s.keyHandler, s), s.instanceUid = i++, s.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, s.registerBreakpoints(), s.init(!0)
      }
      var i = 0;
      return t
    }(), t.prototype.activateADA = function() {
      this.$slideTrack.find(".slick-active").attr({
        "aria-hidden": "false"
      }).find("a, input, button, select").attr({
        tabindex: "0"
      })
    }, t.prototype.addSlide = t.prototype.slickAdd = function(t, i, n) {
      var o = this;
      if ("boolean" == typeof i) n = i, i = null;
      else if (i < 0 || i >= o.slideCount) return !1;
      o.unload(), "number" == typeof i ? 0 === i && 0 === o.$slides.length ? e(t).appendTo(o.$slideTrack) : n ? e(t).insertBefore(o.$slides.eq(i)) : e(t).insertAfter(o.$slides.eq(i)) : !0 === n ? e(t).prependTo(o.$slideTrack) : e(t).appendTo(o.$slideTrack), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slides.each(function(t, i) {
        e(i).attr("data-slick-index", t)
      }), o.$slidesCache = o.$slides, o.reinit()
    }, t.prototype.animateHeight = function() {
      var e = this;
      if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
        var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
        e.$list.animate({
          height: t
        }, e.options.speed)
      }
    }, t.prototype.animateSlide = function(t, i) {
      var n = {},
        o = this;
      o.animateHeight(), !0 === o.options.rtl && !1 === o.options.vertical && (t = -t), !1 === o.transformsEnabled ? !1 === o.options.vertical ? o.$slideTrack.animate({
        left: t
      }, o.options.speed, o.options.easing, i) : o.$slideTrack.animate({
        top: t
      }, o.options.speed, o.options.easing, i) : !1 === o.cssTransitions ? (!0 === o.options.rtl && (o.currentLeft = -o.currentLeft), e({
        animStart: o.currentLeft
      }).animate({
        animStart: t
      }, {
        duration: o.options.speed,
        easing: o.options.easing,
        step: function(e) {
          e = Math.ceil(e), !1 === o.options.vertical ? (n[o.animType] = "translate(" + e + "px, 0px)", o.$slideTrack.css(n)) : (n[o.animType] = "translate(0px," + e + "px)", o.$slideTrack.css(n))
        },
        complete: function() {
          i && i.call()
        }
      })) : (o.applyTransition(), t = Math.ceil(t), !1 === o.options.vertical ? n[o.animType] = "translate3d(" + t + "px, 0px, 0px)" : n[o.animType] = "translate3d(0px," + t + "px, 0px)", o.$slideTrack.css(n), i && setTimeout(function() {
        o.disableTransition(), i.call()
      }, o.options.speed))
    }, t.prototype.getNavTarget = function() {
      var t = this,
        i = t.options.asNavFor;
      return i && null !== i && (i = e(i).not(t.$slider)), i
    }, t.prototype.asNavFor = function(t) {
      var i = this,
        n = i.getNavTarget();
      null !== n && "object" === (void 0 === n ? "undefined" : r(n)) && n.each(function() {
        var i = e(this).slick("getSlick");
        i.unslicked || i.slideHandler(t, !0)
      })
    }, t.prototype.applyTransition = function(e) {
      var t = this,
        i = {};
      !1 === t.options.fade ? i[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : i[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase, !1 === t.options.fade ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i)
    }, t.prototype.autoPlay = function() {
      var e = this;
      e.autoPlayClear(), e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
    }, t.prototype.autoPlayClear = function() {
      var e = this;
      e.autoPlayTimer && clearInterval(e.autoPlayTimer)
    }, t.prototype.autoPlayIterator = function() {
      var e = this,
        t = e.currentSlide + e.options.slidesToScroll;
      e.paused || e.interrupted || e.focussed || (!1 === e.options.infinite && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll, e.currentSlide - 1 == 0 && (e.direction = 1))), e.slideHandler(t))
    }, t.prototype.buildArrows = function() {
      var t = this;
      !0 === t.options.arrows && (t.$prevArrow = e(t.options.prevArrow).addClass("slick-arrow"), t.$nextArrow = e(t.options.nextArrow).addClass("slick-arrow"), t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), !0 !== t.options.infinite && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({
        "aria-disabled": "true",
        tabindex: "-1"
      }))
    }, t.prototype.buildDots = function() {
      var t, i, n = this;
      if (!0 === n.options.dots && n.slideCount > n.options.slidesToShow) {
        for (n.$slider.addClass("slick-dotted"), i = e("<ul />").addClass(n.options.dotsClass), t = 0; t <= n.getDotCount(); t += 1) i.append(e("<li />").append(n.options.customPaging.call(this, n, t)));
        n.$dots = i.appendTo(n.options.appendDots), n.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
      }
    }, t.prototype.buildOut = function() {
      var t = this;
      t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), t.slideCount = t.$slides.length, t.$slides.each(function(t, i) {
        e(i).attr("data-slick-index", t).data("originalStyling", e(i).attr("style") || "")
      }), t.$slider.addClass("slick-slider"), t.$slideTrack = 0 === t.slideCount ? e('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(), t.$list = t.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), t.$slideTrack.css("opacity", 0), !0 !== t.options.centerMode && !0 !== t.options.swipeToSlide || (t.options.slidesToScroll = 1), e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"), t.setupInfinite(), t.buildArrows(), t.buildDots(), t.updateDots(), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), !0 === t.options.draggable && t.$list.addClass("draggable")
    }, t.prototype.buildRows = function() {
      var e, t, i, n, o, s, r, a = this;
      if (n = document.createDocumentFragment(), s = a.$slider.children(), a.options.rows > 1) {
        for (r = a.options.slidesPerRow * a.options.rows, o = Math.ceil(s.length / r), e = 0; e < o; e++) {
          var l = document.createElement("div");
          for (t = 0; t < a.options.rows; t++) {
            var c = document.createElement("div");
            for (i = 0; i < a.options.slidesPerRow; i++) {
              var d = e * r + (t * a.options.slidesPerRow + i);
              s.get(d) && c.appendChild(s.get(d))
            }
            l.appendChild(c)
          }
          n.appendChild(l)
        }
        a.$slider.empty().append(n), a.$slider.children().children().children().css({
          width: 100 / a.options.slidesPerRow + "%",
          display: "inline-block"
        })
      }
    }, t.prototype.checkResponsive = function(t, i) {
      var n, o, s, r = this,
        a = !1,
        l = r.$slider.width(),
        c = window.innerWidth || e(window).width();
      if ("window" === r.respondTo ? s = c : "slider" === r.respondTo ? s = l : "min" === r.respondTo && (s = Math.min(c, l)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
        o = null;
        for (n in r.breakpoints) r.breakpoints.hasOwnProperty(n) && (!1 === r.originalSettings.mobileFirst ? s < r.breakpoints[n] && (o = r.breakpoints[n]) : s > r.breakpoints[n] && (o = r.breakpoints[n]));
        null !== o ? null !== r.activeBreakpoint ? (o !== r.activeBreakpoint || i) && (r.activeBreakpoint = o, "unslick" === r.breakpointSettings[o] ? r.unslick(o) : (r.options = e.extend({}, r.originalSettings, r.breakpointSettings[o]), !0 === t && (r.currentSlide = r.options.initialSlide), r.refresh(t)), a = o) : (r.activeBreakpoint = o, "unslick" === r.breakpointSettings[o] ? r.unslick(o) : (r.options = e.extend({}, r.originalSettings, r.breakpointSettings[o]), !0 === t && (r.currentSlide = r.options.initialSlide), r.refresh(t)), a = o) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, !0 === t && (r.currentSlide = r.options.initialSlide), r.refresh(t), a = o), t || !1 === a || r.$slider.trigger("breakpoint", [r, a])
      }
    }, t.prototype.changeSlide = function(t, i) {
      var n, o, s, r = this,
        a = e(t.currentTarget);
      switch (a.is("a") && t.preventDefault(), a.is("li") || (a = a.closest("li")), s = r.slideCount % r.options.slidesToScroll != 0, n = s ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, t.data.message) {
        case "previous":
          o = 0 === n ? r.options.slidesToScroll : r.options.slidesToShow - n, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - o, !1, i);
          break;
        case "next":
          o = 0 === n ? r.options.slidesToScroll : n, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + o, !1, i);
          break;
        case "index":
          var l = 0 === t.data.index ? 0 : t.data.index || a.index() * r.options.slidesToScroll;
          r.slideHandler(r.checkNavigable(l), !1, i), a.children().trigger("focus");
          break;
        default:
          return
      }
    }, t.prototype.checkNavigable = function(e) {
      var t, i, n = this;
      if (t = n.getNavigableIndexes(), i = 0, e > t[t.length - 1]) e = t[t.length - 1];
      else
        for (var o in t) {
          if (e < t[o]) {
            e = i;
            break
          }
          i = t[o]
        }
      return e
    }, t.prototype.cleanUpEvents = function() {
      var t = this;
      t.options.dots && null !== t.$dots && e("li", t.$dots).off("click.slick", t.changeSlide).off("mouseenter.slick", e.proxy(t.interrupt, t, !0)).off("mouseleave.slick", e.proxy(t.interrupt, t, !1)), t.$slider.off("focus.slick blur.slick"), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide), t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide)), t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler), t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler), t.$list.off("touchend.slick mouseup.slick", t.swipeHandler), t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler), t.$list.off("click.slick", t.clickHandler), e(document).off(t.visibilityChange, t.visibility), t.cleanUpSlideEvents(), !0 === t.options.accessibility && t.$list.off("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().off("click.slick", t.selectHandler), e(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange), e(window).off("resize.slick.slick-" + t.instanceUid, t.resize), e("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault), e(window).off("load.slick.slick-" + t.instanceUid, t.setPosition), e(document).off("ready.slick.slick-" + t.instanceUid, t.setPosition)
    }, t.prototype.cleanUpSlideEvents = function() {
      var t = this;
      t.$list.off("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.off("mouseleave.slick", e.proxy(t.interrupt, t, !1))
    }, t.prototype.cleanUpRows = function() {
      var e, t = this;
      t.options.rows > 1 && (e = t.$slides.children().children(), e.removeAttr("style"), t.$slider.empty().append(e))
    }, t.prototype.clickHandler = function(e) {
      !1 === this.shouldClick && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault())
    }, t.prototype.destroy = function(t) {
      var i = this;
      i.autoPlayClear(), i.touchObject = {}, i.cleanUpEvents(), e(".slick-cloned", i.$slider).detach(), i.$dots && i.$dots.remove(), i.$prevArrow && i.$prevArrow.length && (i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()), i.$nextArrow && i.$nextArrow.length && (i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()), i.$slides && (i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
        e(this).attr("style", e(this).data("originalStyling"))
      }), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.detach(), i.$list.detach(), i.$slider.append(i.$slides)), i.cleanUpRows(), i.$slider.removeClass("slick-slider"), i.$slider.removeClass("slick-initialized"), i.$slider.removeClass("slick-dotted"), i.unslicked = !0, t || i.$slider.trigger("destroy", [i])
    }, t.prototype.disableTransition = function(e) {
      var t = this,
        i = {};
      i[t.transitionType] = "", !1 === t.options.fade ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i)
    }, t.prototype.fadeSlide = function(e, t) {
      var i = this;
      !1 === i.cssTransitions ? (i.$slides.eq(e).css({
        zIndex: i.options.zIndex
      }), i.$slides.eq(e).animate({
        opacity: 1
      }, i.options.speed, i.options.easing, t)) : (i.applyTransition(e), i.$slides.eq(e).css({
        opacity: 1,
        zIndex: i.options.zIndex
      }), t && setTimeout(function() {
        i.disableTransition(e), t.call()
      }, i.options.speed))
    }, t.prototype.fadeSlideOut = function(e) {
      var t = this;
      !1 === t.cssTransitions ? t.$slides.eq(e).animate({
        opacity: 0,
        zIndex: t.options.zIndex - 2
      }, t.options.speed, t.options.easing) : (t.applyTransition(e), t.$slides.eq(e).css({
        opacity: 0,
        zIndex: t.options.zIndex - 2
      }))
    }, t.prototype.filterSlides = t.prototype.slickFilter = function(e) {
      var t = this;
      null !== e && (t.$slidesCache = t.$slides, t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit())
    }, t.prototype.focusHandler = function() {
      var t = this;
      t.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function(i) {
        i.stopImmediatePropagation();
        var n = e(this);
        setTimeout(function() {
          t.options.pauseOnFocus && (t.focussed = n.is(":focus"), t.autoPlay())
        }, 0)
      })
    }, t.prototype.getCurrent = t.prototype.slickCurrentSlide = function() {
      return this.currentSlide
    }, t.prototype.getDotCount = function() {
      var e = this,
        t = 0,
        i = 0,
        n = 0;
      if (!0 === e.options.infinite)
        for (; t < e.slideCount;) ++n, t = i + e.options.slidesToScroll, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
      else if (!0 === e.options.centerMode) n = e.slideCount;
      else if (e.options.asNavFor)
        for (; t < e.slideCount;) ++n, t = i + e.options.slidesToScroll, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
      else n = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
      return n - 1
    }, t.prototype.getLeft = function(e) {
      var t, i, n, o = this,
        s = 0;
      return o.slideOffset = 0, i = o.$slides.first().outerHeight(!0), !0 === o.options.infinite ? (o.slideCount > o.options.slidesToShow && (o.slideOffset = o.slideWidth * o.options.slidesToShow * -1, s = i * o.options.slidesToShow * -1), o.slideCount % o.options.slidesToScroll != 0 && e + o.options.slidesToScroll > o.slideCount && o.slideCount > o.options.slidesToShow && (e > o.slideCount ? (o.slideOffset = (o.options.slidesToShow - (e - o.slideCount)) * o.slideWidth * -1, s = (o.options.slidesToShow - (e - o.slideCount)) * i * -1) : (o.slideOffset = o.slideCount % o.options.slidesToScroll * o.slideWidth * -1, s = o.slideCount % o.options.slidesToScroll * i * -1))) : e + o.options.slidesToShow > o.slideCount && (o.slideOffset = (e + o.options.slidesToShow - o.slideCount) * o.slideWidth, s = (e + o.options.slidesToShow - o.slideCount) * i), o.slideCount <= o.options.slidesToShow && (o.slideOffset = 0, s = 0), !0 === o.options.centerMode && !0 === o.options.infinite ? o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2) - o.slideWidth : !0 === o.options.centerMode && (o.slideOffset = 0, o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2)), t = !1 === o.options.vertical ? e * o.slideWidth * -1 + o.slideOffset : e * i * -1 + s, !0 === o.options.variableWidth && (n = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(e) : o.$slideTrack.children(".slick-slide").eq(e + o.options.slidesToShow), t = !0 === o.options.rtl ? n[0] ? -1 * (o.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, !0 === o.options.centerMode && (n = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(e) : o.$slideTrack.children(".slick-slide").eq(e + o.options.slidesToShow + 1), t = !0 === o.options.rtl ? n[0] ? -1 * (o.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, t += (o.$list.width() - n.outerWidth()) / 2)), t
    }, t.prototype.getOption = t.prototype.slickGetOption = function(e) {
      return this.options[e]
    }, t.prototype.getNavigableIndexes = function() {
      var e, t = this,
        i = 0,
        n = 0,
        o = [];
      for (!1 === t.options.infinite ? e = t.slideCount : (i = -1 * t.options.slidesToScroll, n = -1 * t.options.slidesToScroll, e = 2 * t.slideCount); i < e;) o.push(i), i = n + t.options.slidesToScroll, n += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
      return o
    }, t.prototype.getSlick = function() {
      return this
    }, t.prototype.getSlideCount = function() {
      var t, i, n = this;
      return i = !0 === n.options.centerMode ? n.slideWidth * Math.floor(n.options.slidesToShow / 2) : 0, !0 === n.options.swipeToSlide ? (n.$slideTrack.find(".slick-slide").each(function(o, s) {
        if (s.offsetLeft - i + e(s).outerWidth() / 2 > -1 * n.swipeLeft) return t = s, !1
      }), Math.abs(e(t).attr("data-slick-index") - n.currentSlide) || 1) : n.options.slidesToScroll
    }, t.prototype.goTo = t.prototype.slickGoTo = function(e, t) {
      this.changeSlide({
        data: {
          message: "index",
          index: parseInt(e)
        }
      }, t)
    }, t.prototype.init = function(t) {
      var i = this;
      e(i.$slider).hasClass("slick-initialized") || (e(i.$slider).addClass("slick-initialized"), i.buildRows(), i.buildOut(), i.setProps(), i.startLoad(), i.loadSlider(), i.initializeEvents(), i.updateArrows(), i.updateDots(), i.checkResponsive(!0), i.focusHandler()), t && i.$slider.trigger("init", [i]), !0 === i.options.accessibility && i.initADA(), i.options.autoplay && (i.paused = !1, i.autoPlay())
    }, t.prototype.initADA = function() {
      var t = this;
      t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({
        "aria-hidden": "true",
        tabindex: "-1"
      }).find("a, input, button, select").attr({
        tabindex: "-1"
      }), t.$slideTrack.attr("role", "listbox"), t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function(i) {
        e(this).attr({
          role: "option",
          "aria-describedby": "slick-slide" + t.instanceUid + i
        })
      }), null !== t.$dots && t.$dots.attr("role", "tablist").find("li").each(function(i) {
        e(this).attr({
          role: "presentation",
          "aria-selected": "false",
          "aria-controls": "navigation" + t.instanceUid + i,
          id: "slick-slide" + t.instanceUid + i
        })
      }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), t.activateADA()
    }, t.prototype.initArrowEvents = function() {
      var e = this;
      !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", {
        message: "previous"
      }, e.changeSlide), e.$nextArrow.off("click.slick").on("click.slick", {
        message: "next"
      }, e.changeSlide))
    }, t.prototype.initDotEvents = function() {
      var t = this;
      !0 === t.options.dots && t.slideCount > t.options.slidesToShow && e("li", t.$dots).on("click.slick", {
        message: "index"
      }, t.changeSlide), !0 === t.options.dots && !0 === t.options.pauseOnDotsHover && e("li", t.$dots).on("mouseenter.slick", e.proxy(t.interrupt, t, !0)).on("mouseleave.slick", e.proxy(t.interrupt, t, !1))
    }, t.prototype.initSlideEvents = function() {
      var t = this;
      t.options.pauseOnHover && (t.$list.on("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.on("mouseleave.slick", e.proxy(t.interrupt, t, !1)))
    }, t.prototype.initializeEvents = function() {
      var t = this;
      t.initArrowEvents(), t.initDotEvents(), t.initSlideEvents(), t.$list.on("touchstart.slick mousedown.slick", {
        action: "start"
      }, t.swipeHandler), t.$list.on("touchmove.slick mousemove.slick", {
        action: "move"
      }, t.swipeHandler), t.$list.on("touchend.slick mouseup.slick", {
        action: "end"
      }, t.swipeHandler), t.$list.on("touchcancel.slick mouseleave.slick", {
        action: "end"
      }, t.swipeHandler), t.$list.on("click.slick", t.clickHandler), e(document).on(t.visibilityChange, e.proxy(t.visibility, t)), !0 === t.options.accessibility && t.$list.on("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler), e(window).on("orientationchange.slick.slick-" + t.instanceUid, e.proxy(t.orientationChange, t)), e(window).on("resize.slick.slick-" + t.instanceUid, e.proxy(t.resize, t)), e("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault), e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition), e(document).on("ready.slick.slick-" + t.instanceUid, t.setPosition)
    }, t.prototype.initUI = function() {
      var e = this;
      !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.show()
    }, t.prototype.keyHandler = function(e) {
      var t = this;
      e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && !0 === t.options.accessibility ? t.changeSlide({
        data: {
          message: !0 === t.options.rtl ? "next" : "previous"
        }
      }) : 39 === e.keyCode && !0 === t.options.accessibility && t.changeSlide({
        data: {
          message: !0 === t.options.rtl ? "previous" : "next"
        }
      }))
    }, t.prototype.lazyLoad = function() {
      function t(t) {
        e("img[data-lazy]", t).each(function() {
          var t = e(this),
            i = e(this).attr("data-lazy"),
            n = document.createElement("img");
          n.onload = function() {
            t.animate({
              opacity: 0
            }, 100, function() {
              t.attr("src", i).animate({
                opacity: 1
              }, 200, function() {
                t.removeAttr("data-lazy").removeClass("slick-loading")
              }), r.$slider.trigger("lazyLoaded", [r, t, i])
            })
          }, n.onerror = function() {
            t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), r.$slider.trigger("lazyLoadError", [r, t, i])
          }, n.src = i
        })
      }
      var i, n, o, s, r = this;
      !0 === r.options.centerMode ? !0 === r.options.infinite ? (o = r.currentSlide + (r.options.slidesToShow / 2 + 1), s = o + r.options.slidesToShow + 2) : (o = Math.max(0, r.currentSlide - (r.options.slidesToShow / 2 + 1)), s = r.options.slidesToShow / 2 + 1 + 2 + r.currentSlide) : (o = r.options.infinite ? r.options.slidesToShow + r.currentSlide : r.currentSlide, s = Math.ceil(o + r.options.slidesToShow), !0 === r.options.fade && (o > 0 && o--, s <= r.slideCount && s++)), i = r.$slider.find(".slick-slide").slice(o, s), t(i), r.slideCount <= r.options.slidesToShow ? (n = r.$slider.find(".slick-slide"), t(n)) : r.currentSlide >= r.slideCount - r.options.slidesToShow ? (n = r.$slider.find(".slick-cloned").slice(0, r.options.slidesToShow), t(n)) : 0 === r.currentSlide && (n = r.$slider.find(".slick-cloned").slice(-1 * r.options.slidesToShow), t(n))
    }, t.prototype.loadSlider = function() {
      var e = this;
      e.setPosition(), e.$slideTrack.css({
        opacity: 1
      }), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
    }, t.prototype.next = t.prototype.slickNext = function() {
      this.changeSlide({
        data: {
          message: "next"
        }
      })
    }, t.prototype.orientationChange = function() {
      var e = this;
      e.checkResponsive(), e.setPosition()
    }, t.prototype.pause = t.prototype.slickPause = function() {
      var e = this;
      e.autoPlayClear(), e.paused = !0
    }, t.prototype.play = t.prototype.slickPlay = function() {
      var e = this;
      e.autoPlay(), e.options.autoplay = !0, e.paused = !1, e.focussed = !1, e.interrupted = !1
    }, t.prototype.postSlide = function(e) {
      var t = this;
      t.unslicked || (t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.setPosition(), t.swipeLeft = null, t.options.autoplay && t.autoPlay(), !0 === t.options.accessibility && t.initADA())
    }, t.prototype.prev = t.prototype.slickPrev = function() {
      this.changeSlide({
        data: {
          message: "previous"
        }
      })
    }, t.prototype.preventDefault = function(e) {
      e.preventDefault()
    }, t.prototype.progressiveLazyLoad = function(t) {
      t = t || 1;
      var i, n, o, s = this,
        r = e("img[data-lazy]", s.$slider);
      r.length ? (i = r.first(), n = i.attr("data-lazy"), o = document.createElement("img"), o.onload = function() {
        i.attr("src", n).removeAttr("data-lazy").removeClass("slick-loading"), !0 === s.options.adaptiveHeight && s.setPosition(), s.$slider.trigger("lazyLoaded", [s, i, n]), s.progressiveLazyLoad()
      }, o.onerror = function() {
        t < 3 ? setTimeout(function() {
          s.progressiveLazyLoad(t + 1)
        }, 500) : (i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), s.$slider.trigger("lazyLoadError", [s, i, n]), s.progressiveLazyLoad())
      }, o.src = n) : s.$slider.trigger("allImagesLoaded", [s])
    }, t.prototype.refresh = function(t) {
      var i, n, o = this;
      n = o.slideCount - o.options.slidesToShow, !o.options.infinite && o.currentSlide > n && (o.currentSlide = n), o.slideCount <= o.options.slidesToShow && (o.currentSlide = 0), i = o.currentSlide, o.destroy(!0), e.extend(o, o.initials, {
        currentSlide: i
      }), o.init(), t || o.changeSlide({
        data: {
          message: "index",
          index: i
        }
      }, !1)
    }, t.prototype.registerBreakpoints = function() {
      var t, i, n, o = this,
        s = o.options.responsive || null;
      if ("array" === e.type(s) && s.length) {
        o.respondTo = o.options.respondTo || "window";
        for (t in s)
          if (n = o.breakpoints.length - 1, i = s[t].breakpoint, s.hasOwnProperty(t)) {
            for (; n >= 0;) o.breakpoints[n] && o.breakpoints[n] === i && o.breakpoints.splice(n, 1), n--;
            o.breakpoints.push(i), o.breakpointSettings[i] = s[t].settings
          } o.breakpoints.sort(function(e, t) {
          return o.options.mobileFirst ? e - t : t - e
        })
      }
    }, t.prototype.reinit = function() {
      var t = this;
      t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"), t.slideCount = t.$slides.length, t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), t.registerBreakpoints(), t.setProps(), t.setupInfinite(), t.buildArrows(), t.updateArrows(), t.initArrowEvents(), t.buildDots(), t.updateDots(), t.initDotEvents(), t.cleanUpSlideEvents(), t.initSlideEvents(), t.checkResponsive(!1, !0), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), t.setPosition(), t.focusHandler(), t.paused = !t.options.autoplay, t.autoPlay(), t.$slider.trigger("reInit", [t])
    }, t.prototype.resize = function() {
      var t = this;
      e(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout(function() {
        t.windowWidth = e(window).width(), t.checkResponsive(), t.unslicked || t.setPosition()
      }, 50))
    }, t.prototype.removeSlide = t.prototype.slickRemove = function(e, t, i) {
      var n = this;
      if ("boolean" == typeof e ? (t = e, e = !0 === t ? 0 : n.slideCount - 1) : e = !0 === t ? --e : e, n.slideCount < 1 || e < 0 || e > n.slideCount - 1) return !1;
      n.unload(), !0 === i ? n.$slideTrack.children().remove() : n.$slideTrack.children(this.options.slide).eq(e).remove(), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slidesCache = n.$slides, n.reinit()
    }, t.prototype.setCSS = function(e) {
      var t, i, n = this,
        o = {};
      !0 === n.options.rtl && (e = -e), t = "left" == n.positionProp ? Math.ceil(e) + "px" : "0px", i = "top" == n.positionProp ? Math.ceil(e) + "px" : "0px", o[n.positionProp] = e, !1 === n.transformsEnabled ? n.$slideTrack.css(o) : (o = {}, !1 === n.cssTransitions ? (o[n.animType] = "translate(" + t + ", " + i + ")", n.$slideTrack.css(o)) : (o[n.animType] = "translate3d(" + t + ", " + i + ", 0px)", n.$slideTrack.css(o)))
    }, t.prototype.setDimensions = function() {
      var e = this;
      !1 === e.options.vertical ? !0 === e.options.centerMode && e.$list.css({
        padding: "0px " + e.options.centerPadding
      }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), !0 === e.options.centerMode && e.$list.css({
        padding: e.options.centerPadding + " 0px"
      })), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), !1 === e.options.vertical && !1 === e.options.variableWidth ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : !0 === e.options.variableWidth ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
      var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
      !1 === e.options.variableWidth && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
    }, t.prototype.setFade = function() {
      var t, i = this;
      i.$slides.each(function(n, o) {
        t = i.slideWidth * n * -1, !0 === i.options.rtl ? e(o).css({
          position: "relative",
          right: t,
          top: 0,
          zIndex: i.options.zIndex - 2,
          opacity: 0
        }) : e(o).css({
          position: "relative",
          left: t,
          top: 0,
          zIndex: i.options.zIndex - 2,
          opacity: 0
        })
      }), i.$slides.eq(i.currentSlide).css({
        zIndex: i.options.zIndex - 1,
        opacity: 1
      })
    }, t.prototype.setHeight = function() {
      var e = this;
      if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
        var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
        e.$list.css("height", t)
      }
    }, t.prototype.setOption = t.prototype.slickSetOption = function() {
      var t, i, n, o, s, r = this,
        a = !1;
      if ("object" === e.type(arguments[0]) ? (n = arguments[0], a = arguments[1], s = "multiple") : "string" === e.type(arguments[0]) && (n = arguments[0], o = arguments[1], a = arguments[2], "responsive" === arguments[0] && "array" === e.type(arguments[1]) ? s = "responsive" : void 0 !== arguments[1] && (s = "single")), "single" === s) r.options[n] = o;
      else if ("multiple" === s) e.each(n, function(e, t) {
        r.options[e] = t
      });
      else if ("responsive" === s)
        for (i in o)
          if ("array" !== e.type(r.options.responsive)) r.options.responsive = [o[i]];
          else {
            for (t = r.options.responsive.length - 1; t >= 0;) r.options.responsive[t].breakpoint === o[i].breakpoint && r.options.responsive.splice(t, 1), t--;
            r.options.responsive.push(o[i])
          } a && (r.unload(), r.reinit())
    }, t.prototype.setPosition = function() {
      var e = this;
      e.setDimensions(), e.setHeight(), !1 === e.options.fade ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e])
    }, t.prototype.setProps = function() {
      var e = this,
        t = document.body.style;
      e.positionProp = !0 === e.options.vertical ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), void 0 === t.WebkitTransition && void 0 === t.MozTransition && void 0 === t.msTransition || !0 === e.options.useCSS && (e.cssTransitions = !0), e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)), void 0 !== t.transform && !1 !== e.animType && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType
    }, t.prototype.setSlideClasses = function(e) {
      var t, i, n, o, s = this;
      i = s.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), s.$slides.eq(e).addClass("slick-current"), !0 === s.options.centerMode ? (t = Math.floor(s.options.slidesToShow / 2), !0 === s.options.infinite && (e >= t && e <= s.slideCount - 1 - t ? s.$slides.slice(e - t, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (n = s.options.slidesToShow + e, i.slice(n - t + 1, n + t + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? i.eq(i.length - 1 - s.options.slidesToShow).addClass("slick-center") : e === s.slideCount - 1 && i.eq(s.options.slidesToShow).addClass("slick-center")), s.$slides.eq(e).addClass("slick-center")) : e >= 0 && e <= s.slideCount - s.options.slidesToShow ? s.$slides.slice(e, e + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= s.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (o = s.slideCount % s.options.slidesToShow, n = !0 === s.options.infinite ? s.options.slidesToShow + e : e, s.options.slidesToShow == s.options.slidesToScroll && s.slideCount - e < s.options.slidesToShow ? i.slice(n - (s.options.slidesToShow - o), n + o).addClass("slick-active").attr("aria-hidden", "false") : i.slice(n, n + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === s.options.lazyLoad && s.lazyLoad()
    }, t.prototype.setupInfinite = function() {
      var t, i, n, o = this;
      if (!0 === o.options.fade && (o.options.centerMode = !1), !0 === o.options.infinite && !1 === o.options.fade && (i = null, o.slideCount > o.options.slidesToShow)) {
        for (n = !0 === o.options.centerMode ? o.options.slidesToShow + 1 : o.options.slidesToShow, t = o.slideCount; t > o.slideCount - n; t -= 1) i = t - 1, e(o.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i - o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");
        for (t = 0; t < n; t += 1) i = t, e(o.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i + o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");
        o.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
          e(this).attr("id", "")
        })
      }
    }, t.prototype.interrupt = function(e) {
      var t = this;
      e || t.autoPlay(), t.interrupted = e
    }, t.prototype.selectHandler = function(t) {
      var i = this,
        n = e(t.target).is(".slick-slide") ? e(t.target) : e(t.target).parents(".slick-slide"),
        o = parseInt(n.attr("data-slick-index"));
      if (o || (o = 0), i.slideCount <= i.options.slidesToShow) return i.setSlideClasses(o), void i.asNavFor(o);
      i.slideHandler(o)
    }, t.prototype.slideHandler = function(e, t, i) {
      var n, o, s, r, a, l = null,
        c = this;
      if (t = t || !1, (!0 !== c.animating || !0 !== c.options.waitForAnimate) && !(!0 === c.options.fade && c.currentSlide === e || c.slideCount <= c.options.slidesToShow)) {
        if (!1 === t && c.asNavFor(e), n = e, l = c.getLeft(n), r = c.getLeft(c.currentSlide), c.currentLeft = null === c.swipeLeft ? r : c.swipeLeft, !1 === c.options.infinite && !1 === c.options.centerMode && (e < 0 || e > c.getDotCount() * c.options.slidesToScroll)) return void(!1 === c.options.fade && (n = c.currentSlide, !0 !== i ? c.animateSlide(r, function() {
          c.postSlide(n)
        }) : c.postSlide(n)));
        if (!1 === c.options.infinite && !0 === c.options.centerMode && (e < 0 || e > c.slideCount - c.options.slidesToScroll)) return void(!1 === c.options.fade && (n = c.currentSlide, !0 !== i ? c.animateSlide(r, function() {
          c.postSlide(n)
        }) : c.postSlide(n)));
        if (c.options.autoplay && clearInterval(c.autoPlayTimer), o = n < 0 ? c.slideCount % c.options.slidesToScroll != 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + n : n >= c.slideCount ? c.slideCount % c.options.slidesToScroll != 0 ? 0 : n - c.slideCount : n, c.animating = !0, c.$slider.trigger("beforeChange", [c, c.currentSlide, o]), s = c.currentSlide, c.currentSlide = o, c.setSlideClasses(c.currentSlide), c.options.asNavFor && (a = c.getNavTarget(), a = a.slick("getSlick"), a.slideCount <= a.options.slidesToShow && a.setSlideClasses(c.currentSlide)), c.updateDots(), c.updateArrows(), !0 === c.options.fade) return !0 !== i ? (c.fadeSlideOut(s), c.fadeSlide(o, function() {
          c.postSlide(o)
        })) : c.postSlide(o), void c.animateHeight();
        !0 !== i ? c.animateSlide(l, function() {
          c.postSlide(o)
        }) : c.postSlide(o)
      }
    }, t.prototype.startLoad = function() {
      var e = this;
      !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading")
    }, t.prototype.swipeDirection = function() {
      var e, t, i, n, o = this;
      return e = o.touchObject.startX - o.touchObject.curX, t = o.touchObject.startY - o.touchObject.curY, i = Math.atan2(t, e), n = Math.round(180 * i / Math.PI), n < 0 && (n = 360 - Math.abs(n)), n <= 45 && n >= 0 ? !1 === o.options.rtl ? "left" : "right" : n <= 360 && n >= 315 ? !1 === o.options.rtl ? "left" : "right" : n >= 135 && n <= 225 ? !1 === o.options.rtl ? "right" : "left" : !0 === o.options.verticalSwiping ? n >= 35 && n <= 135 ? "down" : "up" : "vertical"
    }, t.prototype.swipeEnd = function(e) {
      var t, i, n = this;
      if (n.dragging = !1, n.interrupted = !1, n.shouldClick = !(n.touchObject.swipeLength > 10), void 0 === n.touchObject.curX) return !1;
      if (!0 === n.touchObject.edgeHit && n.$slider.trigger("edge", [n, n.swipeDirection()]), n.touchObject.swipeLength >= n.touchObject.minSwipe) {
        switch (i = n.swipeDirection()) {
          case "left":
          case "down":
            t = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide + n.getSlideCount()) : n.currentSlide + n.getSlideCount(), n.currentDirection = 0;
            break;
          case "right":
          case "up":
            t = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide - n.getSlideCount()) : n.currentSlide - n.getSlideCount(), n.currentDirection = 1
        }
        "vertical" != i && (n.slideHandler(t), n.touchObject = {}, n.$slider.trigger("swipe", [n, i]))
      } else n.touchObject.startX !== n.touchObject.curX && (n.slideHandler(n.currentSlide), n.touchObject = {})
    }, t.prototype.swipeHandler = function(e) {
      var t = this;
      if (!(!1 === t.options.swipe || "ontouchend" in document && !1 === t.options.swipe || !1 === t.options.draggable && -1 !== e.type.indexOf("mouse"))) switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), e.data.action) {
        case "start":
          t.swipeStart(e);
          break;
        case "move":
          t.swipeMove(e);
          break;
        case "end":
          t.swipeEnd(e)
      }
    }, t.prototype.swipeMove = function(e) {
      var t, i, n, o, s, r = this;
      return s = void 0 !== e.originalEvent ? e.originalEvent.touches : null, !(!r.dragging || s && 1 !== s.length) && (t = r.getLeft(r.currentSlide), r.touchObject.curX = void 0 !== s ? s[0].pageX : e.clientX, r.touchObject.curY = void 0 !== s ? s[0].pageY : e.clientY, r.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(r.touchObject.curX - r.touchObject.startX, 2))), !0 === r.options.verticalSwiping && (r.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(r.touchObject.curY - r.touchObject.startY, 2)))), "vertical" !== (i = r.swipeDirection()) ? (void 0 !== e.originalEvent && r.touchObject.swipeLength > 4 && e.preventDefault(), o = (!1 === r.options.rtl ? 1 : -1) * (r.touchObject.curX > r.touchObject.startX ? 1 : -1), !0 === r.options.verticalSwiping && (o = r.touchObject.curY > r.touchObject.startY ? 1 : -1), n = r.touchObject.swipeLength, r.touchObject.edgeHit = !1, !1 === r.options.infinite && (0 === r.currentSlide && "right" === i || r.currentSlide >= r.getDotCount() && "left" === i) && (n = r.touchObject.swipeLength * r.options.edgeFriction, r.touchObject.edgeHit = !0), !1 === r.options.vertical ? r.swipeLeft = t + n * o : r.swipeLeft = t + n * (r.$list.height() / r.listWidth) * o, !0 === r.options.verticalSwiping && (r.swipeLeft = t + n * o), !0 !== r.options.fade && !1 !== r.options.touchMove && (!0 === r.animating ? (r.swipeLeft = null, !1) : void r.setCSS(r.swipeLeft))) : void 0)
    }, t.prototype.swipeStart = function(e) {
      var t, i = this;
      if (i.interrupted = !0, 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow) return i.touchObject = {}, !1;
      void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), i.touchObject.startX = i.touchObject.curX = void 0 !== t ? t.pageX : e.clientX, i.touchObject.startY = i.touchObject.curY = void 0 !== t ? t.pageY : e.clientY, i.dragging = !0
    }, t.prototype.unfilterSlides = t.prototype.slickUnfilter = function() {
      var e = this;
      null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit())
    }, t.prototype.unload = function() {
      var t = this;
      e(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(), t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(), t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }, t.prototype.unslick = function(e) {
      var t = this;
      t.$slider.trigger("unslick", [t, e]), t.destroy()
    }, t.prototype.updateArrows = function() {
      var e = this;
      Math.floor(e.options.slidesToShow / 2), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - 1 && !0 === e.options.centerMode && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }, t.prototype.updateDots = function() {
      var e = this;
      null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
    }, t.prototype.visibility = function() {
      var e = this;
      e.options.autoplay && (document[e.hidden] ? e.interrupted = !0 : e.interrupted = !1)
    }, e.fn.slick = function() {
      var e, i, n = this,
        o = arguments[0],
        s = Array.prototype.slice.call(arguments, 1),
        a = n.length;
      for (e = 0; e < a; e++)
        if ("object" == (void 0 === o ? "undefined" : r(o)) || void 0 === o ? n[e].slick = new t(n[e], o) : i = n[e].slick[o].apply(n[e].slick, s), void 0 !== i) return i;
      return n
    }
  })
}]);
