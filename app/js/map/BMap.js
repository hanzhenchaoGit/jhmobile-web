if (typeof BMap === 'undefined') {
    design = false;
    window.VTC = {"ditu": {"normal": {"version": "088", "updateDate": "20151111"}, "satellite": {"version": "009", "updateDate": "20150601"}, "normalTraffic": {"version": "081", "updateDate": "20150815"}, "satelliteTraffic": {"version": "083", "updateDate": "20150815"}, "mapJS": {"version": "104", "updateDate": "20151111"}, "satelliteStreet": {"version": "083", "updateDate": "20150815"}, "panoClick": {"version": "1033", "updateDate": "201400823"}, "panoUdt": {"version": "20151022", "updateDate": "20151022"}, "panoSwfAPI": {"version": "20150123", "updateDate": "20150123"}, "panoSwfPlace": {"version": "20141112", "updateDate": "20141112"}, "earthVector": {"version": "001", "updateDate": "20150826"}}, "webapp": {"high_normal": {"version": "001", "updateDate": "20141209"}, "lower_normal": {"version": "002", "updateDate": "20150529"}}, "api_for_mobile": {"vector": {"version": "002", "updateDate": "20150529"}, "vectorIcon": {"version": "002", "updateDate": "20150529"}}};
    window.BMAP_AUTHENTIC_KEY = "";
    (function () {
      var aa = void 0, f = !0, k = null, l = !1;

      function m() {
        return function () {
        }
      }

      function ba(a) {
        return function (b) {
          this[a] = b
        }
      }

      function o(a) {
        return function () {
          return this[a]
        }
      }

      function ca(a) {
        return function () {
          return a
        }
      }

      var da = document, p = Math, fa = RegExp, s = parseInt, ga = parseFloat, u = "prototype", v = "appendChild", ha = "removeChild", w = "length", x = "extend", y = "width", A = "height", ia = "offsetX", B = "offsetY", D = "addEventListener", ka = "parentNode", la = "position";
      var ma, I = ma = I || {version: "1.3.4"};
      I.K = "$BAIDU$";
      window[I.K] = window[I.K] || {};
      I.object = I.object || {};
      I[x] = I.object[x] = function (a, b) {
        for (var c in b)b.hasOwnProperty(c) && (a[c] = b[c]);
        return a
      };
      I.o = I.o || {};
      I.o.ga = function (a) {
        return"string" == typeof a || a instanceof String ? da.getElementById(a) : a && a.nodeName && (1 == a.nodeType || 9 == a.nodeType) ? a : k
      };
      I.ga = I.Jb = I.o.ga;
      I.o.H = function (a) {
        a = I.o.ga(a);
        a.style.display = "none";
        return a
      };
      I.H = I.o.H;
      I.lang = I.lang || {};
      I.lang.he = function (a) {
        return"[object String]" == Object[u].toString.call(a)
      };
      I.he = I.lang.he;
      I.o.Ze = function (a) {
        return I.lang.he(a) ? da.getElementById(a) : a
      };
      I.Ze = I.o.Ze;
      I.o.contains = function (a, b) {
        var c = I.o.Ze, a = c(a), b = c(b);
        return a.contains ? a != b && a.contains(b) : !!(a.compareDocumentPosition(b) & 16)
      };
      I.O = I.O || {};
      /msie (\d+\.\d)/i.test(navigator.userAgent) && (I.O.T = I.T = da.documentMode || +fa.$1);
      var na = {cellpadding: "cellPadding", cellspacing: "cellSpacing", colspan: "colSpan", rowspan: "rowSpan", valign: "vAlign", usemap: "useMap", frameborder: "frameBorder"};
      8 > I.O.T ? (na["for"] = "htmlFor", na["class"] = "className") : (na.htmlFor = "for", na.className = "class");
      I.o.Bp = na;
      I.o.Xo = function (a, b, c) {
        a = I.o.ga(a);
        if ("style" == b)a.style.cssText = c; else {
          b = I.o.Bp[b] || b;
          a.setAttribute(b, c)
        }
        return a
      };
      I.Xo = I.o.Xo;
      I.o.Yo = function (a, b) {
        var a = I.o.ga(a), c;
        for (c in b)I.o.Xo(a, c, b[c]);
        return a
      };
      I.Yo = I.o.Yo;
      I.wf = I.wf || {};
      (function () {
        var a = new fa("(^[\\s\\t\\xa0\\u3000]+)|([\\u3000\\xa0\\s\\t]+$)", "g");
        I.wf.trim = function (b) {
          return("" + b).replace(a, "")
        }
      })();
      I.trim = I.wf.trim;
      I.wf.jg = function (a, b) {
        var a = "" + a, c = Array[u].slice.call(arguments, 1), d = Object[u].toString;
        if (c[w]) {
          c = c[w] == 1 ? b !== k && /\[object Array\]|\[object Object\]/.test(d.call(b)) ? b : c : c;
          return a.replace(/#\{(.+?)\}/g, function (a, b) {
            var i = c[b];
            "[object Function]" == d.call(i) && (i = i(b));
            return"undefined" == typeof i ? "" : i
          })
        }
        return a
      };
      I.jg = I.wf.jg;
      I.o.Vb = function (a, b) {
        for (var a = I.o.ga(a), c = a.className.split(/\s+/), d = b.split(/\s+/), e, g = d[w], i, j = 0; j < g; ++j) {
          i = 0;
          for (e = c[w]; i < e; ++i)if (c[i] == d[j]) {
            c.splice(i, 1);
            break
          }
        }
        a.className = c.join(" ");
        return a
      };
      I.Vb = I.o.Vb;
      I.o.wo = function (a, b, c) {
        var a = I.o.ga(a), d;
        if (a.insertAdjacentHTML)a.insertAdjacentHTML(b, c); else {
          d = a.ownerDocument.createRange();
          b = b.toUpperCase();
          if (b == "AFTERBEGIN" || b == "BEFOREEND") {
            d.selectNodeContents(a);
            d.collapse(b == "AFTERBEGIN")
          } else {
            b = b == "BEFOREBEGIN";
            d[b ? "setStartBefore" : "setEndAfter"](a);
            d.collapse(b)
          }
          d.insertNode(d.createContextualFragment(c))
        }
        return a
      };
      I.wo = I.o.wo;
      I.o.show = function (a) {
        a = I.o.ga(a);
        a.style.display = "";
        return a
      };
      I.show = I.o.show;
      I.o.Zn = function (a) {
        a = I.o.ga(a);
        return a.nodeType == 9 ? a : a.ownerDocument || a.document
      };
      I.o.Za = function (a, b) {
        for (var a = I.o.ga(a), c = b.split(/\s+/), d = a.className, e = " " + d + " ", g = 0, i = c[w]; g < i; g++)e.indexOf(" " + c[g] + " ") < 0 && (d = d + (" " + c[g]));
        a.className = d;
        return a
      };
      I.Za = I.o.Za;
      I.o.Vm = I.o.Vm || {};
      I.o.Sf = I.o.Sf || [];
      I.o.Sf.filter = function (a, b, c) {
        for (var d = 0, e = I.o.Sf, g; g = e[d]; d++)if (g = g[c])b = g(a, b);
        return b
      };
      I.wf.At = function (a) {
        return a.indexOf("-") < 0 && a.indexOf("_") < 0 ? a : a.replace(/[-_][^-_]/g, function (a) {
          return a.charAt(1).toUpperCase()
        })
      };
      I.o.Me = function (a, b) {
        var c = I.o, a = c.ga(a), b = I.wf.At(b), d = a.style[b];
        if (!d)var e = c.Vm[b], d = a.currentStyle || (I.O.T ? a.style : getComputedStyle(a, k)), d = e && e.get ? e.get(a, d) : d[e || b];
        if (e = c.Sf)d = e.filter(b, d, "get");
        return d
      };
      I.Me = I.o.Me;
      /opera\/(\d+\.\d)/i.test(navigator.userAgent) && (I.O.opera = +fa.$1);
      I.O.ns = /webkit/i.test(navigator.userAgent);
      I.O.Dy = /gecko/i.test(navigator.userAgent) && !/like gecko/i.test(navigator.userAgent);
      I.O.Bo = "CSS1Compat" == da.compatMode;
      I.o.V = function (a) {
        var a = I.o.ga(a), b = I.o.Zn(a), c = I.O, d = I.o.Me;
        c.Dy > 0 && b.getBoxObjectFor && d(a, "position");
        var e = {left: 0, top: 0}, g;
        if (a == (c.T && !c.Bo ? b.body : b.documentElement))return e;
        if (a.getBoundingClientRect) {
          a = a.getBoundingClientRect();
          e.left = p.floor(a.left) + p.max(b.documentElement.scrollLeft, b.body.scrollLeft);
          e.top = p.floor(a.top) + p.max(b.documentElement.scrollTop, b.body.scrollTop);
          e.left = e.left - b.documentElement.clientLeft;
          e.top = e.top - b.documentElement.clientTop;
          a = b.body;
          b = s(d(a, "borderLeftWidth"));
          d = s(d(a, "borderTopWidth"));
          if (c.T && !c.Bo) {
            e.left = e.left - (isNaN(b) ? 2 : b);
            e.top = e.top - (isNaN(d) ? 2 : d)
          }
        } else {
          g = a;
          do {
            e.left = e.left + g.offsetLeft;
            e.top = e.top + g.offsetTop;
            if (c.ns > 0 && d(g, "position") == "fixed") {
              e.left = e.left + b.body.scrollLeft;
              e.top = e.top + b.body.scrollTop;
              break
            }
            g = g.offsetParent
          } while (g && g != a);
          if (c.opera > 0 || c.ns > 0 && d(a, "position") == "absolute")e.top = e.top - b.body.offsetTop;
          for (g = a.offsetParent; g && g != b.body;) {
            e.left = e.left - g.scrollLeft;
            if (!c.opera || g.tagName != "TR")e.top = e.top - g.scrollTop;
            g = g.offsetParent
          }
        }
        return e
      };
      /firefox\/(\d+\.\d)/i.test(navigator.userAgent) && (I.O.Ie = +fa.$1);
      var oa = navigator.userAgent;
      /(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(oa) && !/chrome/i.test(oa) && (I.O.jz = +(fa.$1 || fa.$2));
      /chrome\/(\d+\.\d)/i.test(navigator.userAgent) && (I.O.Zw = +fa.$1);
      I.Nb = I.Nb || {};
      I.Nb.Bd = function (a, b) {
        var c, d, e = a[w];
        if ("function" == typeof b)for (d = 0; d < e; d++) {
          c = a[d];
          c = b.call(a, c, d);
          if (c === l)break
        }
        return a
      };
      I.Bd = I.Nb.Bd;
      I.lang.K = function () {
        return"TANGRAM__" + (window[I.K]._counter++).toString(36)
      };
      window[I.K]._counter = window[I.K]._counter || 1;
      window[I.K]._instances = window[I.K]._instances || {};
      I.lang.Vi = function (a) {
        return"[object Function]" == Object[u].toString.call(a)
      };
      I.lang.ma = function (a) {
        this.K = a || I.lang.K();
        window[I.K]._instances[this.K] = this
      };
      window[I.K]._instances = window[I.K]._instances || {};
      I.lang.ma[u].Ee = function () {
        delete window[I.K]._instances[this.K];
        for (var a in this)I.lang.Vi(this[a]) || delete this[a]
      };
      I.lang.ma[u].toString = function () {
        return"[object " + (this.qu || "Object") + "]"
      };
      I.lang.Cl = function (a, b) {
        this.type = a;
        this.returnValue = f;
        this.target = b || k;
        this.currentTarget = k
      };
      I.lang.ma[u][D] = function (a, b, c) {
        if (I.lang.Vi(b)) {
          !this.Ve && (this.Ve = {});
          var d = this.Ve, e;
          if (typeof c == "string" && c) {
            if (/[^\w\-]/.test(c))throw"nonstandard key:" + c;
            e = b.Sk = c
          }
          a.indexOf("on") != 0 && (a = "on" + a);
          typeof d[a] != "object" && (d[a] = {});
          e = e || I.lang.K();
          b.Sk = e;
          d[a][e] = b
        }
      };
      I.lang.ma[u].removeEventListener = function (a, b) {
        if (I.lang.Vi(b))b = b.Sk; else if (!I.lang.he(b))return;
        !this.Ve && (this.Ve = {});
        a.indexOf("on") != 0 && (a = "on" + a);
        var c = this.Ve;
        c[a] && c[a][b] && delete c[a][b]
      };
      I.lang.ma[u].dispatchEvent = function (a, b) {
        I.lang.he(a) && (a = new I.lang.Cl(a));
        !this.Ve && (this.Ve = {});
        var b = b || {}, c;
        for (c in b)a[c] = b[c];
        var d = this.Ve, e = a.type;
        a.target = a.target || this;
        a.currentTarget = this;
        e.indexOf("on") != 0 && (e = "on" + e);
        I.lang.Vi(this[e]) && this[e].apply(this, arguments);
        if (typeof d[e] == "object")for (c in d[e])d[e][c].apply(this, arguments);
        return a.returnValue
      };
      I.lang.ea = function (a, b, c) {
        var d, e, g = a[u];
        e = new Function;
        e[u] = b[u];
        e = a[u] = new e;
        for (d in g)e[d] = g[d];
        a[u].constructor = a;
        a.Jz = b[u];
        if ("string" == typeof c)e.qu = c
      };
      I.ea = I.lang.ea;
      I.lang.Hd = function (a) {
        return window[I.K]._instances[a] || k
      };
      I.platform = I.platform || {};
      I.platform.Gy = /macintosh/i.test(navigator.userAgent);
      I.platform.os = /windows/i.test(navigator.userAgent);
      I.platform.Ly = /x11/i.test(navigator.userAgent);
      I.platform.js = /android/i.test(navigator.userAgent);
      /android (\d+\.\d)/i.test(navigator.userAgent) && (I.platform.hr = I.hr = fa.$1);
      I.platform.Ey = /ipad/i.test(navigator.userAgent);
      I.platform.Fy = /iphone/i.test(navigator.userAgent);
      I.lang.Cl[u].la = function (a) {
        a = window.event || a;
        this.clientX = a.clientX || a.pageX;
        this.clientY = a.clientY || a.pageY;
        this[ia] = a[ia] || a.layerX;
        this[B] = a[B] || a.layerY;
        this.screenX = a.screenX;
        this.screenY = a.screenY;
        this.ctrlKey = a.ctrlKey || a.metaKey;
        this.shiftKey = a.shiftKey;
        this.altKey = a.altKey;
        if (a.touches) {
          this.touches = [];
          for (var b = 0; b < a.touches[w]; b++)this.touches.push({clientX: a.touches[b].clientX, clientY: a.touches[b].clientY, screenX: a.touches[b].screenX, screenY: a.touches[b].screenY, pageX: a.touches[b].pageX, pageY: a.touches[b].pageY, target: a.touches[b].target, identifier: a.touches[b].identifier})
        }
        if (a.changedTouches) {
          this.changedTouches = [];
          for (b = 0; b < a.changedTouches[w]; b++)this.changedTouches.push({clientX: a.changedTouches[b].clientX, clientY: a.changedTouches[b].clientY, screenX: a.changedTouches[b].screenX, screenY: a.changedTouches[b].screenY, pageX: a.changedTouches[b].pageX, pageY: a.changedTouches[b].pageY, target: a.changedTouches[b].target, identifier: a.changedTouches[b].identifier})
        }
        if (a.targetTouches) {
          this.targetTouches = [];
          for (b = 0; b < a.targetTouches[w]; b++)this.targetTouches.push({clientX: a.targetTouches[b].clientX, clientY: a.targetTouches[b].clientY, screenX: a.targetTouches[b].screenX, screenY: a.targetTouches[b].screenY, pageX: a.targetTouches[b].pageX, pageY: a.targetTouches[b].pageY, target: a.targetTouches[b].target, identifier: a.targetTouches[b].identifier})
        }
        this.rotation = a.rotation;
        this.scale = a.scale;
        return this
      };
      I.lang.Ck = function (a) {
        var b = window[I.K];
        b.uv && delete b.uv[a]
      };
      I.event = {};
      I.A = I.event.A = function (a, b, c) {
        if (!(a = I.ga(a)))return a;
        b = b.replace(/^on/, "");
        if (a[D])a[D](b, c, l); else a.attachEvent && a.attachEvent("on" + b, c);
        return a
      };
      I.hc = I.event.hc = function (a, b, c) {
        if (!(a = I.ga(a)))return a;
        b = b.replace(/^on/, "");
        a.removeEventListener ? a.removeEventListener(b, c, l) : a.detachEvent && a.detachEvent("on" + b, c);
        return a
      };
      I.o.uy = function (a) {
        if (!a || !a.className || typeof a.className != "string")return l;
        var b = -1;
        try {
          b = a.className == "BMap_Marker" || a.className.search(new fa("(\\s|^)BMap_Marker(\\s|$)"))
        } catch (c) {
          return l
        }
        return b > -1
      };
      I.Nn = function () {
        function a(a) {
          da[D] && (this.element = a, this.Lr = this.sg ? "touchstart" : "mousedown", this.Qn = this.sg ? "touchmove" : "mousemove", this.Pn = this.sg ? "touchend" : "mouseup", this.Jo = l, this.lt = this.kt = 0, this.element[D](this.Lr, this, l), ma.A(this.element, "mousedown", m()), this.handleEvent(k))
        }

        a[u] = {sg: "ontouchstart"in window || "createTouch"in document, start: function (a) {
          qa(a);
          this.Jo = l;
          this.kt = this.sg ? a.touches[0].clientX : a.clientX;
          this.lt = this.sg ? a.touches[0].clientY : a.clientY;
          this.element[D](this.Qn, this, l);
          this.element[D](this.Pn, this, l)
        }, move: function (a) {
          ra(a);
          var c = this.sg ? a.touches[0].clientY : a.clientY;
          if (10 < p.abs((this.sg ? a.touches[0].clientX : a.clientX) - this.kt) || 10 < p.abs(c - this.lt))this.Jo = f
        }, end: function (a) {
          ra(a);
          this.Jo || (a = da.createEvent("Event"), a.initEvent("tap", l, f), this.element.dispatchEvent(a));
          this.element.removeEventListener(this.Qn, this, l);
          this.element.removeEventListener(this.Pn, this, l)
        }, handleEvent: function (a) {
          if (a)switch (a.type) {
            case this.Lr:
              this.start(a);
              break;
            case this.Qn:
              this.move(a);
              break;
            case this.Pn:
              this.end(a)
          }
        }};
        return function (b) {
          return new a(b)
        }
      }();
      var J = window.BMap || {};
      J.version = "1.4";
      J.li = [];
      J.Bc = function (a) {
        this.li.push(a)
      };
      J.Nw = J.apiLoad || m();
      var sa = window.BMAP_AUTHENTIC_KEY;
      window.BMAP_AUTHENTIC_KEY = k;
      var ua = window.BMap_loadScriptTime, va = (new Date).getTime(), wa = k, xa = f;

      function ya(a, b) {
        if (a = I.ga(a)) {
          var c = this;
          I.lang.ma.call(c);
          b = b || {};
          c.J = {nn: 200, mb: f, Hk: l, Jn: f, Ei: l, Fi: l, Ln: f, Ik: f, Fk: f, Mc: 25, cA: 240, Fw: 450, pb: K.pb, uc: K.uc, Vk: !!b.Vk, zc: b.minZoom || 1, yc: b.maxZoom || 18, eb: b.mapType || za, qB: l, Gk: l, Gn: 500, Cx: b.enableHighResolution !== l, Dx: b.enableMapClick !== l};
          b.enableAutoResize && (c.J.Fk = b.enableAutoResize);
          c.Ba = a;
          c.Qm(a);
          a.unselectable = "on";
          a.innerHTML = "";
          a[v](c.Sa());
          b.size && this.od(b.size);
          var d = c.wc();
          c[y] = d[y];
          c[A] = d[A];
          c[ia] = 0;
          c[B] = 0;
          c.platform = a.firstChild;
          c.Rc = c.platform.firstChild;
          c.Rc.style[y] = c[y] + "px";
          c.Rc.style[A] = c[A] + "px";
          c.Yb = {};
          c.zd = new L(0, 0);
          c.Rb = new L(0, 0);
          c.ya = 1;
          c.xc = 0;
          c.zn = k;
          c.yn = k;
          c.ib = "";
          c.fn = "";
          c.Xd = {};
          c.Xd.custom = {};
          c.ka = 0;
          b = b || {};
          d = c.eb = c.J.eb;
          c.cc = d.Oi();
          d === Aa && Ba(5002);
          (d === Ca || d === Da) && Ba(5003);
          d = c.J;
          d.Ht = b.minZoom;
          d.Gt = b.maxZoom;
          c.Sl();
          c.v = {jb: l, Qa: 0, Wi: 0, vs: 0, ZA: 0, bn: l, Ro: -1, Ad: []};
          c.platform.style.cursor = c.J.pb;
          for (d = 0; d < J.li[w]; d++)J.li[d](c);
          c.v.Ro = d;
          c.L();
          M.load("map", function () {
            c.Lb()
          });
          c.J.Dx && (setTimeout(function () {
            Ba("load_mapclick")
          }, 1E3), M.load("mapclick", function () {
            window.MPC_Mgr = new Ea(c)
          }));
          (I.platform.os || I.platform.Gy || I.platform.Ly) && M.load("oppc", function () {
            c.Nl()
          });
          Fa() && M.load("opmb", function () {
            c.Nl()
          });
          a = k;
          c.Cw = []
        }
      }

      I.lang.ea(ya, I.lang.ma, "Map");
      I[x](ya[u], {Sa: function () {
        var a = O("div"), b = a.style;
        b.overflow = "visible";
        b[la] = "absolute";
        b.zIndex = "0";
        b.top = b.left = "0px";
        var b = O("div", {"class": "BMap_mask"}), c = b.style;
        c[la] = "absolute";
        c.top = c.left = "0px";
        c.zIndex = "9";
        c.overflow = "hidden";
        c.WebkitUserSelect = "none";
        a[v](b);
        return a
      }, Qm: function (a) {
        var b = a.style;
        b.overflow = "hidden";
        "absolute" != Ga(a)[la] && (b[la] = "relative", b.zIndex = 0);
        b.backgroundColor = "#F3F1EC";
        b.color = "#000";
        b.textAlign = "left"
      }, L: function () {
        var a = this;
        a.ri = function () {
          var b = a.wc();
          if (a[y] != b[y] || a[A] != b[A]) {
            var c = new P(a[y], a[A]), d = new Q("onbeforeresize");
            d.size = c;
            a.dispatchEvent(d);
            a.Uf((b[y] - a[y]) / 2, (b[A] - a[A]) / 2);
            a.Rc.style[y] = (a[y] = b[y]) + "px";
            a.Rc.style[A] = (a[A] = b[A]) + "px";
            c = new Q("onresize");
            c.size = b;
            a.dispatchEvent(c)
          }
        };
        a.J.Fk && (a.v.ui = setInterval(a.ri, 80))
      }, Uf: function (a, b, c, d) {
        var e = this.da().vb(this.oa()), g = this.cc, i = f;
        c && L.ks(c) && (this.zd = new L(c.lng, c.lat), i = l);
        if (c = c && d ? g.wg(c, this.ib) : this.Rb)if (this.Rb = new L(c.lng + a * e, c.lat - b * e), (a = g.yg(this.Rb, this.ib)) && i)this.zd = a
      }, Pd: function (a, b) {
        if (Ha(a) && (a = this.Sg(a).zoom, a != this.ya)) {
          this.xc = this.ya;
          this.ya = a;
          var c;
          b ? c = b : this.Je() && (c = this.Je().V());
          c && (c = this.ab(c, this.xc), this.Uf(this[y] / 2 - c.x, this[A] / 2 - c.y, this.Ka(c, this.xc), f));
          this.dispatchEvent(new Q("onzoomstart"));
          this.dispatchEvent(new Q("onzoomstartcode"))
        }
      }, tl: function (a) {
        this.Pd(a)
      }, lp: function (a) {
        this.Pd(this.ya + 1, a)
      }, mp: function (a) {
        this.Pd(this.ya - 1, a)
      }, md: function (a) {
        a instanceof L && (this.Rb = this.cc.wg(a, this.ib), this.zd = L.ks(a) ? new L(a.lng, a.lat) : this.cc.yg(this.Rb, this.ib))
      }, Ld: function (a, b) {
        a = p.round(a) || 0;
        b = p.round(b) || 0;
        this.Uf(-a, -b)
      }, Xm: function (a) {
        a && Ia(a.hd) && (a.hd(this), this.dispatchEvent(new Q("onaddcontrol", a)))
      }, ez: function (a) {
        a && Ia(a.remove) && (a.remove(), this.dispatchEvent(new Q("onremovecontrol", a)))
      }, si: function (a) {
        a && Ia(a.Ca) && (a.Ca(this), this.dispatchEvent(new Q("onaddcontextmenu", a)))
      }, $i: function (a) {
        a && Ia(a.remove) && (this.dispatchEvent(new Q("onremovecontextmenu", a)), a.remove())
      }, Ma: function (a) {
        a && Ia(a.hd) && (a.hd(this), this.dispatchEvent(new Q("onaddoverlay", a)))
      }, Uc: function (a) {
        a && Ia(a.remove) && (a.remove(), this.dispatchEvent(new Q("onremoveoverlay", a)))
      }, tr: function () {
        this.dispatchEvent(new Q("onclearoverlays"))
      }, ti: function (a) {
        a && this.dispatchEvent(new Q("onaddtilelayer", a))
      }, aj: function (a) {
        a && this.dispatchEvent(new Q("onremovetilelayer", a))
      }, Se: function (a) {
        if (this.eb !== a) {
          var b = new Q("onsetmaptype");
          b.oB = this.eb;
          this.eb = this.J.eb = a;
          this.cc = this.eb.Oi();
          this.Uf(0, 0, this.Fa(), f);
          this.Sl();
          var c = this.Sg(this.oa()).zoom;
          this.Pd(c);
          this.dispatchEvent(b);
          b = new Q("onmaptypechange");
          b.ya = c;
          b.eb = a;
          this.dispatchEvent(b);
          (a === Ca || a === Da) && Ba(5003)
        }
      }, nd: function (a) {
        var b = this;
        if (a instanceof L)b.md(a, {noAnimation: f}); else if (Ja(a))if (b.eb == Aa) {
          var c = K.jn[a];
          c && (pt = c.a, b.nd(pt))
        } else {
          var d = this.kq();
          d.bp(function (c) {
            0 == d.pg() && 2 == d.ba.result.type && (b.nd(c.nf(0).point), Aa.hh(a) && b.$o(a))
          });
          d.search(a, {log: "center"})
        }
      }, Hc: function (a, b) {
        var c = this;
        if (Ja(a))if (c.eb == Aa) {
          var d = K.jn[a];
          d && (pt = d.a, c.Hc(pt, b))
        } else {
          var e = c.kq();
          e.bp(function (d) {
            if (0 == e.pg() && 2 == e.ba.result.type) {
              var d = d.nf(0).point, g = b || R.Vn(e.ba.content.level, c);
              c.Hc(d, g);
              Aa.hh(a) && c.$o(a)
            }
          });
          e.search(a, {log: "center"})
        } else if (a instanceof L && b) {
          b = c.Sg(b).zoom;
          c.xc = c.ya || b;
          c.ya = b;
          c.zd = new L(a.lng, a.lat);
          c.Rb = c.cc.wg(c.zd, c.ib);
          c.zn = c.zn || c.ya;
          c.yn = c.yn || c.zd;
          var d = new Q("onload"), g = new Q("onloadcode");
          d.point = new L(a.lng, a.lat);
          d.pixel = c.ab(c.zd, c.ya);
          d.zoom = b;
          c.loaded || (c.loaded = f, c.dispatchEvent(d), wa || (wa = Ka()));
          c.dispatchEvent(g);
          c.dispatchEvent(new Q("onmoveend"));
          c.xc != c.ya && c.dispatchEvent(new Q("onzoomend"))
        }
      }, kq: function () {
        this.v.zs || (this.v.zs = new La(1));
        return this.v.zs
      }, reset: function () {
        this.Hc(this.yn, this.zn, f)
      }, enableDragging: function () {
        this.J.mb = f
      }, disableDragging: function () {
        this.J.mb = l
      }, enableInertialDragging: function () {
        this.J.Gk = f
      }, disableInertialDragging: function () {
        this.J.Gk = l
      }, enableScrollWheelZoom: function () {
        this.J.Fi = f
      }, disableScrollWheelZoom: function () {
        this.J.Fi = l
      }, enableContinuousZoom: function () {
        this.J.Ei = f
      }, disableContinuousZoom: function () {
        this.J.Ei = l
      }, enableDoubleClickZoom: function () {
        this.J.Jn = f
      }, disableDoubleClickZoom: function () {
        this.J.Jn = l
      }, enableKeyboard: function () {
        this.J.Hk = f
      }, disableKeyboard: function () {
        this.J.Hk = l
      }, enablePinchToZoom: function () {
        this.J.Ik = f
      }, disablePinchToZoom: function () {
        this.J.Ik = l
      }, enableAutoResize: function () {
        this.J.Fk = f;
        this.ri();
        this.v.ui || (this.v.ui = setInterval(this.ri, 80))
      }, disableAutoResize: function () {
        this.J.Fk = l;
        this.v.ui && (clearInterval(this.v.ui), this.v.ui = k)
      }, wc: function () {
        return this.Ai && this.Ai instanceof P ? new P(this.Ai[y], this.Ai[A]) : new P(this.Ba.clientWidth, this.Ba.clientHeight)
      }, od: function (a) {
        a && a instanceof P ? (this.Ai = a, this.Ba.style[y] = a[y] + "px", this.Ba.style[A] = a[A] + "px") : this.Ai = k
      }, Fa: o("zd"), oa: o("ya"), Yw: function () {
        this.ri()
      }, Sg: function (a) {
        var b = this.J.zc, c = this.J.yc, d = l;
        a < b && (d = f, a = b);
        a > c && (d = f, a = c);
        return{zoom: a, Rn: d}
      }, lf: o("Ba"), ab: function (a, b) {
        b = b || this.oa();
        return this.cc.ab(a, b, this.Rb, this.wc(), this.ib)
      }, Ka: function (a, b) {
        b = b || this.oa();
        return this.cc.Ka(a, b, this.Rb, this.wc(), this.ib)
      }, Md: function (a, b) {
        if (a) {
          var c = this.ab(new L(a.lng, a.lat), b);
          c.x -= this[ia];
          c.y -= this[B];
          return c
        }
      }, Us: function (a, b) {
        if (a) {
          var c = new S(a.x, a.y);
          c.x += this[ia];
          c.y += this[B];
          return this.Ka(c, b)
        }
      }, pointToPixelFor3D: function (a, b) {
        var c = map.ib;
        this.eb == Aa && c && Ma.yr(a, this, b)
      }, kB: function (a, b) {
        var c = map.ib;
        this.eb == Aa && c && Ma.xr(a, this, b)
      }, lB: function (a, b) {
        var c = this, d = map.ib;
        c.eb == Aa && d && Ma.yr(a, c, function (a) {
          a.x -= c[ia];
          a.y -= c[B];
          b && b(a)
        })
      }, jB: function (a, b) {
        var c = map.ib;
        this.eb == Aa && c && (a.x += this[ia], a.y += this[B], Ma.xr(a, this, b))
      }, kf: function (a) {
        if (!this.yo())return new Na;
        var b = a || {}, a = b.margins || [0, 0, 0, 0], c = b.zoom || k, b = this.Ka({x: a[3], y: this[A] - a[2]}, c), a = this.Ka({x: this[y] - a[1], y: a[0]}, c);
        return new Na(b, a)
      }, yo: function () {
        return!!this.loaded
      }, Vu: function (a, b) {
        for (var c = this.da(), d = b.margins || [10, 10, 10, 10], e = b.zoomFactor || 0, g = d[1] + d[3], d = d[0] + d[2], i = c.kh(), j = c = c.ng(); j >= i; j--) {
          var n = this.da().vb(j);
          if (a.jp().lng / n < this[y] - g && a.jp().lat / n < this[A] - d)break
        }
        j += e;
        j < i && (j = i);
        j > c && (j = c);
        return j
      }, Rk: function (a, b) {
        var c = {center: this.Fa(), zoom: this.oa()};
        if (!a || !a instanceof Na && 0 == a[w] || a instanceof Na && a.Pe())return c;
        var d = [];
        a instanceof Na ? (d.push(a.Ed()), d.push(a.Fd())) : d = a.slice(0);
        for (var b = b || {}, e = [], g = 0, i = d[w]; g < i; g++)e.push(this.cc.wg(d[g], this.ib));
        d = new Na;
        for (g = e[w] - 1; 0 <= g; g--)d[x](e[g]);
        if (d.Pe())return c;
        c = d.Fa();
        e = this.Vu(d, b);
        b.margins && (d = b.margins, g = (d[1] - d[3]) / 2, d = (d[0] - d[2]) / 2, i = this.da().vb(e), b.offset && (g = b.offset[y], d = b.offset[A]), c.lng += i * g, c.lat += i * d);
        c = this.cc.yg(c, this.ib);
        return{center: c, zoom: e}
      }, Dh: function (a, b) {
        var c;
        c = a && a.center ? a : this.Rk(a, b);
        var b = b || {}, d = b.delay || 200;
        if (c.zoom == this.ya && b.enableAnimation != l) {
          var e = this;
          setTimeout(function () {
            e.md(c.center, {duration: 210})
          }, d)
        } else this.Hc(c.center, c.zoom)
      }, ee: o("Yb"), Je: function () {
        return this.v.wa && this.v.wa.pa() ? this.v.wa : k
      }, getDistance: function (a, b) {
        if (a && b) {
          var c = 0;
          return c = T.Yn(a, b)
        }
      }, Zx: function () {
        var a = [], b = this.W, c = this.kc;
        if (b)for (var d in b)b[d]instanceof Oa && a.push(b[d]);
        if (c) {
          d = 0;
          for (b = c[w]; d < b; d++)a.push(c[d])
        }
        return a
      }, da: o("eb"), Nl: function () {
        for (var a = this.v.Ro; a < J.li[w]; a++)J.li[a](this);
        this.v.Ro = a
      }, $o: function (a) {
        this.ib = Aa.hh(a);
        this.fn = Aa.Mx(this.ib);
        this.eb == Aa && this.cc instanceof Pa && (this.cc.un = this.ib)
      }, setDefaultCursor: function (a) {
        this.J.pb = a;
        this.platform && (this.platform.style.cursor = this.J.pb)
      }, getDefaultCursor: function () {
        return this.J.pb
      }, setDraggingCursor: function (a) {
        this.J.uc = a
      }, getDraggingCursor: function () {
        return this.J.uc
      }, Ne: function () {
        return this.J.Cx && 1 < window.devicePixelRatio
      }, cr: function (a, b) {
        b ? this.Xd[b] || (this.Xd[b] = {}) : b = "custom";
        a.tag = b;
        a instanceof Qa && (this.Xd[b][a.K] = a, a.Ca(this));
        var c = this;
        M.load("hotspot", function () {
          c.Nl()
        })
      }, fz: function (a, b) {
        b || (b = "custom");
        this.Xd[b][a.K] && delete this.Xd[b][a.K]
      }, mn: function (a) {
        a || (a = "custom");
        this.Xd[a] = {}
      }, Sl: function () {
        var a = this.Ne() ? this.eb.k.xy : this.eb.kh(), b = this.Ne() ? this.eb.k.wy : this.eb.ng(), c = this.J;
        c.zc = c.Ht || a;
        c.yc = c.Gt || b;
        c.zc < a && (c.zc = a);
        c.yc > b && (c.yc = b)
      }, setMinZoom: function (a) {
        a > this.J.yc && (a = this.J.yc);
        this.J.Ht = a;
        this.Vq()
      }, setMaxZoom: function (a) {
        a < this.J.zc && (a = this.J.zc);
        this.J.Gt = a;
        this.Vq()
      }, Vq: function () {
        this.Sl();
        var a = this.J;
        this.ya < a.zc ? this.tl(a.zc) : this.ya > a.yc && this.tl(a.yc);
        var b = new Q("onzoomspanchange");
        b.zc = a.zc;
        b.yc = a.yc;
        this.dispatchEvent(b)
      }, TA: o("Cw"), getKey: function () {
        return sa
      }});
      function Ba(a, b) {
        if (a) {
          var b = b || {}, c = "", d;
          for (d in b)c = c + "&" + d + "=" + encodeURIComponent(b[d]);
          var e = function (a) {
            a && (Ra = f, setTimeout(function () {
              Sa.src = K.$ + "blank.gif?" + a.src
            }, 50))
          }, g = function () {
            var a = Ta.shift();
            a && e(a)
          };
          d = (1E8 * p.random()).toFixed(0);
          Ra ? Ta.push({src: "product=jsapi&v=" + J.version + "&t=" + d + "&code=" + a + c}) : e({src: "product=jsapi&v=" + J.version + "&t=" + d + "&code=" + a + c});
          Ua || (I.A(Sa, "load", function () {
            Ra = l;
            g()
          }), I.A(Sa, "error", function () {
            Ra = l;
            g()
          }), Ua = f)
        }
      }

      var Ra, Ua, Ta = [], Sa = new Image;
      Ba(5E3);
      function Va(a) {
        var b = {duration: 1E3, Mc: 30, gf: 0, rd: Wa.xs, Lo: m()};
        this.ed = [];
        if (a)for (var c in a)b[c] = a[c];
        this.k = b;
        if (Ha(b.gf)) {
          var d = this;
          setTimeout(function () {
            d.start()
          }, b.gf)
        } else b.gf != Va.Lg && this.start()
      }

      Va.Lg = "INFINITE";
      Va[u].start = function () {
        this.Cj = Ka();
        this.cm = this.Cj + this.k.duration;
        this.xm()
      };
      Va[u].add = function (a) {
        this.ed.push(a)
      };
      Va[u].xm = function () {
        var a = this, b = Ka();
        b >= a.cm ? (Ia(a.k.Sa) && a.k.Sa(a.k.rd(1)), Ia(a.k.finish) && a.k.finish(), 0 < a.ed[w] && (b = a.ed[0], b.ed = [].concat(a.ed.slice(1)), b.start())) : (a.nl = a.k.rd((b - a.Cj) / a.k.duration), Ia(a.k.Sa) && a.k.Sa(a.nl), a.hp || (a.pi = setTimeout(function () {
          a.xm()
        }, 1E3 / a.k.Mc)))
      };
      Va[u].stop = function (a) {
        this.hp = f;
        for (var b = 0; b < this.ed[w]; b++)this.ed[b].stop(), this.ed[b] = k;
        this.ed[w] = 0;
        this.pi && (clearTimeout(this.pi), this.pi = k);
        this.k.Lo(this.nl);
        a && (this.cm = this.Cj, this.xm())
      };
      Va[u].cancel = function () {
        this.pi && clearTimeout(this.pi);
        this.cm = this.Cj;
        this.nl = 0
      };
      Va[u].pz = function (a) {
        0 < this.ed[w] ? this.ed[this.ed[w] - 1].k.finish = a : this.k.finish = a
      };
      var Wa = {xs: function (a) {
        return a
      }, reverse: function (a) {
        return 1 - a
      }, Hn: function (a) {
        return a * a
      }, yx: function (a) {
        return p.pow(a, 3)
      }, Bx: function (a) {
        return-(a * (a - 2))
      }, Ax: function (a) {
        return p.pow(a - 1, 3) + 1
      }, zx: function (a) {
        return 0.5 > a ? 2 * a * a : -2 * (a - 2) * a - 1
      }, DA: function (a) {
        return 0.5 > a ? 4 * p.pow(a, 3) : 4 * p.pow(a - 1, 3) + 1
      }, EA: function (a) {
        return(1 - p.cos(p.PI * a)) / 2
      }};
      Wa["ease-in"] = Wa.Hn;
      Wa["ease-out"] = Wa.Bx;
      var K = {$: "http://api.map.baidu.com/images/", jn: {"\u5317\u4eac": {gl: "bj", a: new L(116.403874, 39.914889)}, "\u4e0a\u6d77": {gl: "sh", a: new L(121.487899, 31.249162)}, "\u6df1\u5733": {gl: "sz", a: new L(114.025974, 22.546054)}, "\u5e7f\u5dde": {gl: "gz", a: new L(113.30765, 23.120049)}}, fontFamily: "arial,sans-serif"};
      if (I.O.Ie)I[x](K, {Er: "url(" + K.$ + "ruler.cur),crosshair", pb: "-moz-grab", uc: "-moz-grabbing"}), I.platform.os && (K.fontFamily = "arial,simsun,sans-serif"); else if (I.O.Zw || I.O.jz)I[x](K, {Er: "url(" + K.$ + "ruler.cur) 2 6,crosshair", pb: "url(" + K.$ + "openhand.cur) 8 8,default", uc: "url(" + K.$ + "closedhand.cur) 8 8,move"}); else I[x](K, {Er: "url(" + K.$ + "ruler.cur),crosshair", pb: "url(" + K.$ + "openhand.cur),default", uc: "url(" + K.$ + "closedhand.cur),move"});
      function Xa(a, b) {
        var c = a.style;
        c.left = b[0] + "px";
        c.top = b[1] + "px"
      }

      function Za(a) {
        0 < I.O.T ? a.unselectable = "on" : a.style.MozUserSelect = "none"
      }

      function $a(a) {
        return a && a[ka] && 11 != a[ka].nodeType
      }

      function ab(a, b) {
        I.o.wo(a, "beforeEnd", b);
        return a.lastChild
      }

      function qa(a) {
        a = window.event || a;
        a.stopPropagation ? a.stopPropagation() : a.cancelBubble = f
      }

      function bb(a) {
        a = window.event || a;
        a.preventDefault ? a.preventDefault() : a.returnValue = l;
        return l
      }

      function ra(a) {
        qa(a);
        return bb(a)
      }

      function db() {
        var a = da.documentElement, b = da.body;
        return a && (a.scrollTop || a.scrollLeft) ? [a.scrollTop, a.scrollLeft] : b ? [b.scrollTop, b.scrollLeft] : [0, 0]
      }

      function eb(a, b) {
        if (a && b)return p.round(p.sqrt(p.pow(a.x - b.x, 2) + p.pow(a.y - b.y, 2)))
      }

      function fb(a, b) {
        var c = [], b = b || function (a) {
          return a
        }, d;
        for (d in a)c.push(d + "=" + b(a[d]));
        return c.join("&")
      }

      function O(a, b, c) {
        var d = da.createElement(a);
        c && (d = da.createElementNS(c, a));
        return I.o.Yo(d, b || {})
      }

      function Ga(a) {
        if (a.currentStyle)return a.currentStyle;
        if (a.ownerDocument && a.ownerDocument.defaultView)return a.ownerDocument.defaultView.getComputedStyle(a, k)
      }

      function Ia(a) {
        return"function" == typeof a
      }

      function Ha(a) {
        return"number" == typeof a
      }

      function Ja(a) {
        return"string" == typeof a
      }

      function gb(a) {
        return"undefined" != typeof a
      }

      var hb = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

      function ib(a) {
        var b = "", c, d, e = "", g, i = "", j = 0;
        g = /[^A-Za-z0-9\+\/\=]/g;
        if (!a || g.exec(a))return a;
        a = a.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        do c = hb.indexOf(a.charAt(j++)), d = hb.indexOf(a.charAt(j++)), g = hb.indexOf(a.charAt(j++)), i = hb.indexOf(a.charAt(j++)), c = c << 2 | d >> 4, d = (d & 15) << 4 | g >> 2, e = (g & 3) << 6 | i, b += String.fromCharCode(c), 64 != g && (b += String.fromCharCode(d)), 64 != i && (b += String.fromCharCode(e)); while (j < a[w]);
        return b
      }

      var Q = I.lang.Cl;

      function Fa() {
        return!(!I.platform.Fy && !I.platform.Ey && !I.platform.js)
      }

      function Ka() {
        return(new Date).getTime()
      }

      function jb() {
        var a = da.body[v](O("div"));
        a.innerHTML = '<v:shape id="vml_tester1" adj="1" />';
        var b = a.firstChild;
        if (!b.style)return l;
        b.style.behavior = "url(#default#VML)";
        b = b ? "object" == typeof b.adj : f;
        a[ka][ha](a);
        return b
      }

      function kb() {
        return!!da.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Shape", "1.1")
      };
      function lb(a) {
        var b = O("script", {src: a, type: "text/javascript", charset: "utf-8"});
        if (b[D])b[D]("load", function (a) {
          a = a.target;
          a[ka][ha](a)
        }, l); else b.attachEvent && b.attachEvent("onreadystatechange", function () {
          var a = window.event.srcElement;
          if (a && ("loaded" == a.readyState || "complete" == a.readyState))a[ka][ha](a)
        });
        setTimeout(function () {
          da.getElementsByTagName("head")[0][v](b);
          b = k
        }, 1)
      };
      var mb = {map: "20150522093217", tile: "20150522093217", marker: "20150522093217", markeranimation: "20150522093217", poly: "20150522093217", draw: "20150522093217", drawbysvg: "20150522093217", drawbyvml: "20150522093217", drawbycanvas: "20150522093217", infowindow: "20150522093217", oppc: "20150522093217", opmb: "20150522093217", menu: "20150522093217", control: "20150522093217", navictrl: "20150522093217", geoctrl: "20150522093217", copyrightctrl: "20150522093217", scommon: "20150522093217", local: "20150522093217", route: "20150522093217", othersearch: "20150522093217", buslinesearch: "20150522093217", hotspot: "20150522093217", autocomplete: "20150522093217", coordtrans: "20150522093217", coordtransutils: "20150522093217", mapclick: "20150522093217"};
      I.wl = function () {
        function a(a) {
          return d && !!c[b + a + "_" + mb[a]]
        }

        var b = "BMap_", c = window.localStorage, d = "localStorage"in window && c !== k && c !== aa;
        return{Iy: d, set: function (a, g) {
          if (d) {
            for (var i = b + a + "_", j = c[w], n; j--;)n = c.key(j), -1 < n.indexOf(i) && c.removeItem(n);
            try {
              c.setItem(b + a + "_" + mb[a], g)
            } catch (t) {
              c.clear()
            }
          }
        }, get: function (e) {
          return d && a(e) ? c.getItem(b + e + "_" + mb[e]) : l
        }, rr: a}
      }();
      function M() {
      }

      I.object[x](M, {Ue: {wp: -1, bu: 0, Jh: 1}, Tr: function () {
        var a = "drawbysvg";
        kb() ? a = "drawbysvg" : jb() ? a = "drawbyvml" : O("canvas").getContext && (a = "drawbycanvas");
        return{control: [], marker: [], poly: ["marker", a], drawbysvg: ["draw"], drawbyvml: ["draw"], drawbycanvas: ["draw"], infowindow: ["marker"], menu: [], oppc: [], opmb: [], scommon: [], local: ["scommon"], route: ["scommon"], othersearch: ["scommon"], autocomplete: ["scommon"], mapclick: ["scommon"], buslinesearch: ["route"], hotspot: [], coordtransutils: ["coordtrans"]}
      }, nB: {}, qp: {gu: "http://api.map.baidu.com/getmodules?v=1.4", Bw: 5E3}, An: l, Kb: {If: {}, Ng: [], hk: []}, load: function (a, b, c) {
        var d = this.xi(a);
        if (d.Mb == this.Ue.Jh)c && b(); else {
          if (d.Mb == this.Ue.wp) {
            this.vr(a);
            this.Zs(a);
            var e = this;
            e.An == l && (e.An = f, setTimeout(function () {
              for (var a = [], b = 0, c = e.Kb.Ng[w]; b < c; b++) {
                var d = e.Kb.Ng[b], t = "";
                ma.wl.rr(d) ? t = ma.wl.get(d) : (t = "", a.push(d));
                e.Kb.hk.push({Gs: d, Io: t})
              }
              e.An = l;
              e.Kb.Ng[w] = 0;
              0 == a[w] ? e.Kr() : lb(e.qp.gu + "&mod=" + a.join(","))
            }, 1));
            d.Mb = this.Ue.bu
          }
          d.Dj.push(b)
        }
      }, vr: function (a) {
        if (a && this.Tr()[a])for (var a = this.Tr()[a], b = 0; b < a[w]; b++)this.vr(a[b]), this.Kb.If[a[b]] || this.Zs(a[b])
      }, Zs: function (a) {
        for (var b = 0; b < this.Kb.Ng[w]; b++)if (this.Kb.Ng[b] == a)return;
        this.Kb.Ng.push(a)
      }, iz: function (a, b) {
        var c = this.xi(a);
        try {
          eval(b)
        } catch (d) {
          return
        }
        c.Mb = this.Ue.Jh;
        for (var e = 0, g = c.Dj[w]; e < g; e++)c.Dj[e]();
        c.Dj[w] = 0
      }, rr: function (a, b) {
        var c = this;
        c.timeout = setTimeout(function () {
          c.Kb.If[a].Mb != c.Ue.Jh ? (c.remove(a), c.load(a, b)) : clearTimeout(c.timeout)
        }, c.qp.Bw)
      }, xi: function (a) {
        this.Kb.If[a] || (this.Kb.If[a] = {}, this.Kb.If[a].Mb = this.Ue.wp, this.Kb.If[a].Dj = []);
        return this.Kb.If[a]
      }, remove: function (a) {
        delete this.xi(a)
      }, Ww: function (a, b) {
        for (var c = this.Kb.hk, d = 0, e = c[w]; d < e; d++)if ("" == c[d].Io)if (c[d].Gs == a)c[d].Io = b; else return;
        this.Kr()
      }, Kr: function () {
        for (var a = this.Kb.hk, b = 0, c = a[w]; b < c; b++)this.iz(a[b].Gs, a[b].Io);
        this.Kb.hk[w] = 0
      }});
      function S(a, b) {
        this.x = a || 0;
        this.y = b || 0;
        this.x = this.x;
        this.y = this.y
      }

      S[u].Gb = function (a) {
        return a && a.x == this.x && a.y == this.y
      };
      function P(a, b) {
        this[y] = a || 0;
        this[A] = b || 0
      }

      P[u].Gb = function (a) {
        return a && this[y] == a[y] && this[A] == a[A]
      };
      function Qa(a, b) {
        a && (this.Cq = a, this.K = "spot" + Qa.K++, b = b || {}, this.Ae = b.text || "", this.Yj = b.offsets ? b.offsets.slice(0) : [5, 5, 5, 5], this.Wq = b.userData || k, this.Zd = b.minZoom || k, this.Zc = b.maxZoom || k)
      }

      Qa.K = 0;
      I[x](Qa[u], {Ca: function (a) {
        this.Zd == k && (this.Zd = a.J.zc);
        this.Zc == k && (this.Zc = a.J.yc)
      }, aa: function (a) {
        a instanceof L && (this.Cq = a)
      }, V: o("Cq"), kj: ba("Ae"), oo: o("Ae"), setUserData: ba("Wq"), getUserData: o("Wq")});
      function nb() {
        this.p = k;
        this.bb = "control";
        this.cb = this.lr = f
      }

      I.lang.ea(nb, I.lang.ma, "Control");
      I[x](nb[u], {initialize: function (a) {
        this.p = a;
        if (this.u)return a.Ba[v](this.u), this.u
      }, hd: function (a) {
        !this.u && (this.initialize && Ia(this.initialize)) && (this.u = this.initialize(a));
        this.k = this.k || {qe: l};
        this.Qm();
        this.ck();
        this.u && (this.u.fi = this)
      }, Qm: function () {
        var a = this.u;
        if (a) {
          var b = a.style;
          b[la] = "absolute";
          b.zIndex = this.Mp || "10";
          b.MozUserSelect = "none";
          b.WebkitTextSizeAdjust = "none";
          this.k.qe || I.o.Za(a, "BMap_noprint");
          Fa() || I.A(a, "contextmenu", ra)
        }
      }, remove: function () {
        this.p = k;
        this.u && (this.u[ka] && this.u[ka][ha](this.u), this.u = this.u.fi = k)
      }, Ya: function () {
        this.u = ab(this.p.Ba, "<div unselectable='on'></div>");
        this.cb == l && I.o.H(this.u);
        return this.u
      }, ck: function () {
        this.wb(this.k.anchor)
      }, wb: function (a) {
        if (this.yA || !Ha(a) || isNaN(a) || a < ob || 3 < a)a = this.defaultAnchor;
        this.k = this.k || {qe: l};
        this.k.X = this.k.X || this.defaultOffset;
        var b = this.k.anchor;
        this.k.anchor = a;
        if (this.u) {
          var c = this.u, d = this.k.X[y], e = this.k.X[A];
          c.style.left = c.style.top = c.style.right = c.style.bottom = "auto";
          switch (a) {
            case ob:
              c.style.top = e + "px";
              c.style.left = d + "px";
              break;
            case pb:
              c.style.top = e + "px";
              c.style.right = d + "px";
              break;
            case qb:
              c.style.bottom = e + "px";
              c.style.left = d + "px";
              break;
            case 3:
              c.style.bottom = e + "px", c.style.right = d + "px"
          }
          c = ["TL", "TR", "BL", "BR"];
          I.o.Vb(this.u, "anchor" + c[b]);
          I.o.Za(this.u, "anchor" + c[a])
        }
      }, Tn: function () {
        return this.k.anchor
      }, Cc: function (a) {
        a instanceof P && (this.k = this.k || {qe: l}, this.k.X = new P(a[y], a[A]), this.u && this.wb(this.k.anchor))
      }, Ke: function () {
        return this.k.X
      }, vc: o("u"), show: function () {
        this.cb != f && (this.cb = f, this.u && I.o.show(this.u))
      }, H: function () {
        this.cb != l && (this.cb = l, this.u && I.o.H(this.u))
      }, isPrintable: function () {
        return!!this.k.qe
      }, Qe: function () {
        return!this.u && !this.p ? l : !!this.cb
      }});
      var ob = 0, pb = 1, qb = 2;

      function rb(a) {
        nb.call(this);
        a = a || {};
        this.k = {qe: l, ep: a.showZoomInfo || f, anchor: a.anchor, X: a.offset, type: a.type};
        this.defaultAnchor = Fa() ? 3 : ob;
        this.defaultOffset = new P(10, 10);
        this.wb(a.anchor);
        this.Hg(a.type);
        this.ud()
      }

      I.lang.ea(rb, nb, "NavigationControl");
      I[x](rb[u], {initialize: function (a) {
        this.p = a;
        return this.u
      }, Hg: function (a) {
        this.k.type = Ha(a) && 0 <= a && 3 >= a ? a : 0
      }, ph: function () {
        return this.k.type
      }, ud: function () {
        var a = this;
        M.load("navictrl", function () {
          a.td()
        })
      }});
      function sb(a) {
        nb.call(this);
        a = a || {};
        this.k = {anchor: a.anchor, X: a.offset, Cz: a.showAddressBar, Ir: a.enableAutoLocation, As: a.locationIcon};
        this.defaultAnchor = qb;
        this.defaultOffset = new P(0, 4);
        this.ud()
      }

      I.lang.ea(sb, nb, "GeolocationControl");
      I[x](sb[u], {initialize: function (a) {
        this.p = a;
        return this.u
      }, ud: function () {
        var a = this;
        M.load("geoctrl", function () {
          a.td()
        })
      }, getAddressComponent: function () {
        return this.gr || k
      }, location: function () {
        this.k.Ir = f
      }});
      function tb(a) {
        nb.call(this);
        a = a || {};
        this.k = {qe: l, anchor: a.anchor, X: a.offset};
        this.La = [];
        this.defaultAnchor = qb;
        this.defaultOffset = new P(5, 2);
        this.wb(a.anchor);
        this.lr = l;
        this.ud()
      }

      I.lang.ea(tb, nb, "CopyrightControl");
      I.object[x](tb[u], {initialize: function (a) {
        this.p = a;
        return this.u
      }, ok: function (a) {
        if (a && Ha(a.id) && !isNaN(a.id)) {
          var b = {bounds: k, content: ""}, c;
          for (c in a)b[c] = a[c];
          if (a = this.kg(a.id))for (var d in b)a[d] = b[d]; else this.La.push(b)
        }
      }, kg: function (a) {
        for (var b = 0, c = this.La[w]; b < c; b++)if (this.La[b].id == a)return this.La[b]
      }, Xn: o("La"), So: function (a) {
        for (var b = 0, c = this.La[w]; b < c; b++)this.La[b].id == a && (r = this.La.splice(b, 1), b--, c = this.La[w])
      }, ud: function () {
        var a = this;
        M.load("copyrightctrl", function () {
          a.td()
        })
      }});
      function ub(a) {
        nb.call(this);
        a = a || {};
        this.k = {qe: l, size: a.size || new P(150, 150), padding: 5, pa: a.isOpen === f ? f : l, aA: 4, X: a.offset, anchor: a.anchor};
        this.defaultAnchor = 3;
        this.defaultOffset = new P(0, 0);
        this.Qh = this.Rh = 13;
        this.wb(a.anchor);
        this.od(this.k.size);
        this.ud()
      }

      I.lang.ea(ub, nb, "OverviewMapControl");
      I[x](ub[u], {initialize: function (a) {
        this.p = a;
        return this.u
      }, wb: function (a) {
        nb[u].wb.call(this, a)
      }, Zb: function () {
        this.Zb.Yg = f;
        this.k.pa = !this.k.pa;
        this.u || (this.Zb.Yg = l)
      }, od: function (a) {
        a instanceof P || (a = new P(150, 150));
        a[y] = 0 < a[y] ? a[y] : 150;
        a[A] = 0 < a[A] ? a[A] : 150;
        this.k.size = a
      }, wc: function () {
        return this.k.size
      }, pa: function () {
        return this.k.pa
      }, ud: function () {
        var a = this;
        M.load("control", function () {
          a.td()
        })
      }});
      function vb(a) {
        nb.call(this);
        a = a || {};
        this.k = {qe: l, color: "black", sd: "metric", X: a.offset};
        this.defaultAnchor = qb;
        this.defaultOffset = new P(81, 18);
        this.wb(a.anchor);
        this.$d = {metric: {name: "metric", wr: 1, hs: 1E3, Dt: "\u7c73", Et: "\u516c\u91cc"}, us: {name: "us", wr: 3.2808, hs: 5280, Dt: "\u82f1\u5c3a", Et: "\u82f1\u91cc"}};
        this.$d[this.k.sd] || (this.k.sd = "metric");
        this.Iq = k;
        this.wq = {};
        this.ud()
      }

      I.lang.ea(vb, nb, "ScaleControl");
      I.object[x](vb[u], {initialize: function (a) {
        this.p = a;
        return this.u
      }, Zo: function (a) {
        this.k.color = a + ""
      }, KA: function () {
        return this.k.color
      }, dp: function (a) {
        this.k.sd = this.$d[a] && this.$d[a].name || this.k.sd
      }, oy: function () {
        return this.k.sd
      }, ud: function () {
        var a = this;
        M.load("control", function () {
          a.td()
        })
      }});
      var wb = 0;

      function xb(a) {
        nb.call(this);
        a = a || {};
        this.defaultAnchor = pb;
        this.defaultOffset = new P(10, 10);
        this.k = {qe: l, Kd: [za, Ca, Da, Aa], type: a.type || wb, X: a.offset || this.defaultOffset, HA: f};
        this.wb(a.anchor);
        "[object Array]" == Object[u].toString.call(a.mapTypes) && (this.k.Kd = a.mapTypes.slice(0));
        this.ud()
      }

      I.lang.ea(xb, nb, "MapTypeControl");
      I.object[x](xb[u], {initialize: function (a) {
        this.p = a;
        return this.u
      }, ud: function () {
        var a = this;
        M.load("control", function () {
          a.td()
        })
      }});
      function yb(a) {
        I.lang.ma.call(this);
        this.k = {Ba: k, cursor: "default"};
        this.k = I[x](this.k, a);
        this.bb = "contextmenu";
        this.p = k;
        this.U = [];
        this.$c = [];
        this.lc = [];
        this.Bk = this.wi = k;
        this.Yd = l;
        var b = this;
        M.load("menu", function () {
          b.Lb()
        })
      }

      I.lang.ea(yb, I.lang.ma, "ContextMenu");
      I.object[x](yb[u], {Ca: function (a, b) {
        this.p = a;
        this.Mf = b || k
      }, remove: function () {
        this.p = this.Mf = k
      }, qk: function (a) {
        if (a && !("menuitem" != a.bb || "" == a.Ae || 0 >= a.Ew)) {
          for (var b = 0, c = this.U[w]; b < c; b++)if (this.U[b] === a)return;
          this.U.push(a);
          this.$c.push(a)
        }
      }, removeItem: function (a) {
        if (a && "menuitem" == a.bb) {
          for (var b = 0, c = this.U[w]; b < c; b++)this.U[b] === a && (this.U[b].remove(), this.U.splice(b, 1), c--);
          b = 0;
          for (c = this.$c[w]; b < c; b++)this.$c[b] === a && (this.$c[b].remove(), this.$c.splice(b, 1), c--)
        }
      }, Ym: function () {
        this.U.push({bb: "divider", Ye: this.lc[w]});
        this.lc.push({o: k})
      }, To: function (a) {
        if (this.lc[a]) {
          for (var b = 0, c = this.U[w]; b < c; b++)this.U[b] && ("divider" == this.U[b].bb && this.U[b].Ye == a) && (this.U.splice(b, 1), c--), this.U[b] && ("divider" == this.U[b].bb && this.U[b].Ye > a) && this.U[b].Ye--;
          this.lc.splice(a, 1)
        }
      }, vc: o("u"), show: function () {
        this.Yd != f && (this.Yd = f)
      }, H: function () {
        this.Yd != l && (this.Yd = l)
      }, nz: function (a) {
        a && (this.k.cursor = a)
      }, getItem: function (a) {
        return this.$c[a]
      }});
      function zb(a, b, c) {
        if (a && Ia(b)) {
          I.lang.ma.call(this);
          this.k = {width: 100, id: ""};
          c = c || {};
          this.k[y] = 1 * c.width ? c.width : 100;
          this.k.id = c.id ? c.id : "";
          this.Ae = a + "";
          this.Pg = b;
          this.p = k;
          this.bb = "menuitem";
          this.u = this.Td = k;
          this.Vd = f;
          var d = this;
          M.load("menu", function () {
            d.Lb()
          })
        }
      }

      I.lang.ea(zb, I.lang.ma, "MenuItem");
      I.object[x](zb[u], {Ca: function (a, b) {
        this.p = a;
        this.Td = b
      }, remove: function () {
        this.p = this.Td = k
      }, kj: function (a) {
        a && (this.Ae = a + "")
      }, vc: o("u"), enable: function () {
        this.Vd = f
      }, disable: function () {
        this.Vd = l
      }});
      function Na(a, b) {
        a && !b && (b = a);
        this.oc = this.nc = this.rc = this.qc = this.Tf = this.Lf = k;
        a && (this.Tf = new L(a.lng, a.lat), this.Lf = new L(b.lng, b.lat), this.rc = a.lng, this.qc = a.lat, this.oc = b.lng, this.nc = b.lat)
      }

      I.object[x](Na[u], {Pe: function () {
        return!this.Tf || !this.Lf
      }, Gb: function (a) {
        return!(a instanceof Na) || this.Pe() ? l : this.Fd().Gb(a.Fd()) && this.Ed().Gb(a.Ed())
      }, Fd: o("Tf"), Ed: o("Lf"), dx: function (a) {
        return!(a instanceof Na) || this.Pe() || a.Pe() ? l : a.rc > this.rc && a.oc < this.oc && a.qc > this.qc && a.nc < this.nc
      }, Fa: function () {
        return this.Pe() ? k : new L((this.rc + this.oc) / 2, (this.qc + this.nc) / 2)
      }, is: function (a) {
        if (!(a instanceof Na) || p.max(a.rc, a.oc) < p.min(this.rc, this.oc) || p.min(a.rc, a.oc) > p.max(this.rc, this.oc) || p.max(a.qc, a.nc) < p.min(this.qc, this.nc) || p.min(a.qc, a.nc) > p.max(this.qc, this.nc))return k;
        var b = p.max(this.rc, a.rc), c = p.min(this.oc, a.oc), d = p.max(this.qc, a.qc), a = p.min(this.nc, a.nc);
        return new Na(new L(b, d), new L(c, a))
      }, fx: function (a) {
        return!(a instanceof L) || this.Pe() ? l : a.lng >= this.rc && a.lng <= this.oc && a.lat >= this.qc && a.lat <= this.nc
      }, extend: function (a) {
        if (a instanceof L) {
          var b = a.lng, a = a.lat;
          this.Tf || (this.Tf = new L(0, 0));
          this.Lf || (this.Lf = new L(0, 0));
          if (!this.rc || this.rc > b)this.Tf.lng = this.rc = b;
          if (!this.oc || this.oc < b)this.Lf.lng = this.oc = b;
          if (!this.qc || this.qc > a)this.Tf.lat = this.qc = a;
          if (!this.nc || this.nc < a)this.Lf.lat = this.nc = a
        }
      }, jp: function () {
        return this.Pe() ? new L(0, 0) : new L(p.abs(this.oc - this.rc), p.abs(this.nc - this.qc))
      }});
      function L(a, b) {
        isNaN(a) && (a = ib(a), a = isNaN(a) ? 0 : a);
        Ja(a) && (a = ga(a));
        isNaN(b) && (b = ib(b), b = isNaN(b) ? 0 : b);
        Ja(b) && (b = ga(b));
        this.lng = a;
        this.lat = b
      }

      L.ks = function (a) {
        return a && 180 >= a.lng && -180 <= a.lng && 74 >= a.lat && -74 <= a.lat
      };
      L[u].Gb = function (a) {
        return a && this.lat == a.lat && this.lng == a.lng
      };
      function Ab() {
      }

      Ab[u].Fo = function () {
        throw"lngLatToPoint\u65b9\u6cd5\u672a\u5b9e\u73b0";
      };
      Ab[u].kl = function () {
        throw"pointToLngLat\u65b9\u6cd5\u672a\u5b9e\u73b0";
      };
      function Bb() {
      };
      var Ma = {yr: function (a, b, c) {
        M.load("coordtransutils", function () {
          Ma.Pw(a, b, c)
        }, f)
      }, xr: function (a, b, c) {
        M.load("coordtransutils", function () {
          Ma.Ow(a, b, c)
        }, f)
      }};

      function T() {
      }

      T[u] = new Ab;
      I[x](T, {Pt: 6370996.81, zp: [1.289059486E7, 8362377.87, 5591021, 3481989.83, 1678043.12, 0], zj: [75, 60, 45, 30, 15, 0], St: [
        [1.410526172116255E-8, 8.98305509648872E-6, -1.9939833816331, 200.9824383106796, -187.2403703815547, 91.6087516669843, -23.38765649603339, 2.57121317296198, -0.03801003308653, 1.73379812E7],
        [-7.435856389565537E-9, 8.983055097726239E-6, -0.78625201886289, 96.32687599759846, -1.85204757529826, -59.36935905485877, 47.40033549296737, -16.50741931063887, 2.28786674699375, 1.026014486E7],
        [-3.030883460898826E-8, 8.98305509983578E-6, 0.30071316287616, 59.74293618442277, 7.357984074871, -25.38371002664745, 13.45380521110908, -3.29883767235584, 0.32710905363475, 6856817.37],
        [-1.981981304930552E-8, 8.983055099779535E-6, 0.03278182852591, 40.31678527705744, 0.65659298677277, -4.44255534477492, 0.85341911805263, 0.12923347998204, -0.04625736007561, 4482777.06],
        [3.09191371068437E-9, 8.983055096812155E-6, 6.995724062E-5, 23.10934304144901, -2.3663490511E-4, -0.6321817810242, -0.00663494467273, 0.03430082397953, -0.00466043876332, 2555164.4],
        [2.890871144776878E-9, 8.983055095805407E-6, -3.068298E-8, 7.47137025468032, -3.53937994E-6, -0.02145144861037, -1.234426596E-5, 1.0322952773E-4, -3.23890364E-6, 826088.5]
      ], xp: [
        [-0.0015702102444, 111320.7020616939, 1704480524535203, -10338987376042340, 26112667856603880, -35149669176653700, 26595700718403920, -10725012454188240, 1800819912950474, 82.5],
        [8.277824516172526E-4, 111320.7020463578, 6.477955746671607E8, -4.082003173641316E9, 1.077490566351142E10, -1.517187553151559E10, 1.205306533862167E10, -5.124939663577472E9, 9.133119359512032E8, 67.5],
        [0.00337398766765, 111320.7020202162, 4481351.045890365, -2.339375119931662E7, 7.968221547186455E7, -1.159649932797253E8, 9.723671115602145E7, -4.366194633752821E7, 8477230.501135234, 52.5],
        [0.00220636496208, 111320.7020209128, 51751.86112841131, 3796837.749470245, 992013.7397791013, -1221952.21711287, 1340652.697009075, -620943.6990984312, 144416.9293806241, 37.5],
        [-3.441963504368392E-4, 111320.7020576856, 278.2353980772752, 2485758.690035394, 6070.750963243378, 54821.18345352118, 9540.606633304236, -2710.55326746645, 1405.483844121726, 22.5],
        [-3.218135878613132E-4, 111320.7020701615, 0.00369383431289, 823725.6402795718, 0.46104986909093, 2351.343141331292, 1.58060784298199, 8.77738589078284, 0.37238884252424, 7.45]
      ], LA: function (a, b) {
        if (!a || !b)return 0;
        var c, d, a = this.Wa(a);
        if (!a)return 0;
        c = this.yf(a.lng);
        d = this.yf(a.lat);
        b = this.Wa(b);
        return!b ? 0 : this.Nc(c, this.yf(b.lng), d, this.yf(b.lat))
      }, Yn: function (a, b) {
        if (!a || !b)return 0;
        a.lng = this.fo(a.lng, -180, 180);
        a.lat = this.lo(a.lat, -74, 74);
        b.lng = this.fo(b.lng, -180, 180);
        b.lat = this.lo(b.lat, -74, 74);
        return this.Nc(this.yf(a.lng), this.yf(b.lng), this.yf(a.lat), this.yf(b.lat))
      }, Wa: function (a) {
        var b, c;
        b = new L(p.abs(a.lng), p.abs(a.lat));
        for (var d = 0; d < this.zp[w]; d++)if (b.lat >= this.zp[d]) {
          c = this.St[d];
          break
        }
        a = this.zr(a, c);
        return a = new L(a.lng.toFixed(6), a.lat.toFixed(6))
      }, Ra: function (a) {
        var b, c;
        a.lng = this.fo(a.lng, -180, 180);
        a.lat = this.lo(a.lat, -74, 74);
        b = new L(a.lng, a.lat);
        for (var d = 0; d < this.zj[w]; d++)if (b.lat >= this.zj[d]) {
          c = this.xp[d];
          break
        }
        if (!c)for (d = this.zj[w] - 1; 0 <= d; d--)if (b.lat <= -this.zj[d]) {
          c = this.xp[d];
          break
        }
        a = this.zr(a, c);
        return a = new L(a.lng.toFixed(2), a.lat.toFixed(2))
      }, zr: function (a, b) {
        if (a && b) {
          var c = b[0] + b[1] * p.abs(a.lng), d = p.abs(a.lat) / b[9], d = b[2] + b[3] * d + b[4] * d * d + b[5] * d * d * d + b[6] * d * d * d * d + b[7] * d * d * d * d * d + b[8] * d * d * d * d * d * d, c = c * (0 > a.lng ? -1 : 1), d = d * (0 > a.lat ? -1 : 1);
          return new L(c, d)
        }
      }, Nc: function (a, b, c, d) {
        return this.Pt * p.acos(p.sin(c) * p.sin(d) + p.cos(c) * p.cos(d) * p.cos(b - a))
      }, yf: function (a) {
        return p.PI * a / 180
      }, vB: function (a) {
        return 180 * a / p.PI
      }, lo: function (a, b, c) {
        b != k && (a = p.max(a, b));
        c != k && (a = p.min(a, c));
        return a
      }, fo: function (a, b, c) {
        for (; a > c;)a -= c - b;
        for (; a < b;)a += c - b;
        return a
      }});
      I[x](T[u], {wg: function (a) {
        return T.Ra(a)
      }, Fo: function (a) {
        a = T.Ra(a);
        return new S(a.lng, a.lat)
      }, yg: function (a) {
        return T.Wa(a)
      }, kl: function (a) {
        a = new L(a.x, a.y);
        return T.Wa(a)
      }, ab: function (a, b, c, d, e) {
        if (a)return a = this.wg(a, e), b = this.vb(b), new S(p.round((a.lng - c.lng) / b + d[y] / 2), p.round((c.lat - a.lat) / b + d[A] / 2))
      }, Ka: function (a, b, c, d, e) {
        if (a)return b = this.vb(b), this.yg(new L(c.lng + b * (a.x - d[y] / 2), c.lat - b * (a.y - d[A] / 2)), e)
      }, vb: function (a) {
        return p.pow(2, 18 - a)
      }});
      function Pa() {
        this.un = "bj"
      }

      Pa[u] = new T;
      I[x](Pa[u], {wg: function (a, b) {
        return this.tu(b, T.Ra(a))
      }, yg: function (a, b) {
        return T.Wa(this.uu(b, a))
      }, lngLatToPointFor3D: function (a, b) {
        var c = this, d = T.Ra(a);
        M.load("coordtrans", function () {
          var a = Bb.jo(c.un || "bj", d), a = new S(a.x, a.y);
          b && b(a)
        }, f)
      }, pointToLngLatFor3D: function (a, b) {
        var c = this, d = new L(a.x, a.y);
        M.load("coordtrans", function () {
          var a = Bb.io(c.un || "bj", d), a = new L(a.lng, a.lat), a = T.Wa(a);
          b && b(a)
        }, f)
      }, tu: function (a, b) {
        if (M.xi("coordtrans").Mb == M.Ue.Jh) {
          var c = Bb.jo(a || "bj", b);
          return new L(c.x, c.y)
        }
        M.load("coordtrans", m());
        return new L(0, 0)
      }, uu: function (a, b) {
        if (M.xi("coordtrans").Mb == M.Ue.Jh) {
          var c = Bb.io(a || "bj", b);
          return new L(c.lng, c.lat)
        }
        M.load("coordtrans", m());
        return new L(0, 0)
      }, vb: function (a) {
        return p.pow(2, 20 - a)
      }});
      function Cb() {
        this.bb = "overlay"
      }

      I.lang.ea(Cb, I.lang.ma, "Overlay");
      Cb.Ri = function (a) {
        a *= 1;
        return!a ? 0 : -1E5 * a << 1
      };
      I[x](Cb[u], {hd: function (a) {
        if (!this.B && Ia(this.initialize) && (this.B = this.initialize(a)))this.B.style.WebkitUserSelect = "none";
        this.draw()
      }, initialize: function () {
        throw"initialize\u65b9\u6cd5\u672a\u5b9e\u73b0";
      }, draw: function () {
        throw"draw\u65b9\u6cd5\u672a\u5b9e\u73b0";
      }, remove: function () {
        if (this.B && this.B[ka])this.B[ka][ha](this.B);
        this.B = k;
        this.dispatchEvent(new Q("onremove"))
      }, H: function () {
        this.B && I.o.H(this.B)
      }, show: function () {
        this.B && I.o.show(this.B)
      }, Qe: function () {
        return!this.B || "none" == this.B.style.display || "hidden" == this.B.style.visibility ? l : f
      }});
      J.Bc(function (a) {
        function b(a, b) {
          var c = O("div"), i = c.style;
          i[la] = "absolute";
          i.top = i.left = i[y] = i[A] = "0";
          i.zIndex = b;
          a[v](c);
          return c
        }

        var c = a.v;
        c.Tc = a.Tc = b(a.platform, 200);
        a.Yb.Nr = b(c.Tc, 800);
        a.Yb.Go = b(c.Tc, 700);
        a.Yb.Or = b(c.Tc, 600);
        a.Yb.ts = b(c.Tc, 500);
        a.Yb.Cs = b(c.Tc, 400);
        a.Yb.Ds = b(c.Tc, 300);
        a.Yb.Yz = b(c.Tc, 201);
        a.Yb.Zk = b(c.Tc, 200)
      });
      function Oa() {
        I.lang.ma.call(this);
        Cb.call(this);
        this.map = k;
        this.cb = f;
        this.$a = k;
        this.Up = 0
      }

      I.lang.ea(Oa, Cb, "OverlayInternal");
      I[x](Oa[u], {initialize: function (a) {
        this.map = a;
        I.lang.ma.call(this, this.K);
        return k
      }, ho: o("map"), draw: m(), remove: function () {
        this.map = k;
        I.lang.Ck(this.K);
        Cb[u].remove.call(this)
      }, H: function () {
        this.cb != l && (this.cb = l)
      }, show: function () {
        this.cb != f && (this.cb = f)
      }, Qe: function () {
        return!this.B ? l : !!this.cb
      }, lf: o("B"), gt: function (a) {
        var a = a || {}, b;
        for (b in a)this.m[b] = a[b]
      }, sl: ba("zIndex"), He: function () {
        this.m.He = f
      }, rx: function () {
        this.m.He = l
      }, si: ba("Vg"), $i: function () {
        this.Vg = k
      }});
      function Db() {
        this.map = k;
        this.W = {};
        this.kc = []
      }

      J.Bc(function (a) {
        var b = new Db;
        b.map = a;
        a.W = b.W;
        a.kc = b.kc;
        a[D]("load", function (a) {
          b.draw(a)
        });
        a[D]("moveend", function (a) {
          b.draw(a)
        });
        if (I.O.T && 8 > I.O.T || "BackCompat" == da.compatMode)a[D]("zoomend", function (a) {
          setTimeout(function () {
            b.draw(a)
          }, 20)
        }); else a[D]("zoomend", function (a) {
          b.draw(a)
        });
        a[D]("maptypechange", function (a) {
          b.draw(a)
        });
        a[D]("addoverlay", function (a) {
          a = a.target;
          if (a instanceof Oa)b.W[a.K] || (b.W[a.K] = a); else {
            for (var d = l, e = 0, g = b.kc[w]; e < g; e++)if (b.kc[e] === a) {
              d = f;
              break
            }
            d || b.kc.push(a)
          }
        });
        a[D]("removeoverlay", function (a) {
          a = a.target;
          if (a instanceof Oa)delete b.W[a.K]; else for (var d = 0, e = b.kc[w]; d < e; d++)if (b.kc[d] === a) {
            b.kc.splice(d, 1);
            break
          }
        });
        a[D]("clearoverlays", function () {
          this.Eb();
          for (var a in b.W)b.W[a].m.He && (b.W[a].remove(), delete b.W[a]);
          a = 0;
          for (var d = b.kc[w]; a < d; a++)b.kc[a].He != l && (b.kc[a].remove(), b.kc[a] = k, b.kc.splice(a, 1), a--, d--)
        });
        a[D]("infowindowopen", function () {
          var a = this.$a;
          a && (I.o.H(a.nb), I.o.H(a.Ta))
        });
        a[D]("movestart", function () {
          this.Je() && this.Je().lw()
        });
        a[D]("moveend", function () {
          this.Je() && this.Je().ew()
        })
      });
      Db[u].draw = function () {
        for (var a in this.W)this.W[a].draw();
        I.Nb.Bd(this.kc, function (a) {
          a.draw()
        });
        this.map.v.wa && this.map.v.wa.aa();
        J.xj && J.xj.Ii(this.map).ap()
      };
      function Eb(a) {
        Oa.call(this);
        a = a || {};
        this.m = {strokeColor: a.strokeColor || "#3a6bdb", Od: a.strokeWeight || 5, qd: a.strokeOpacity || 0.65, strokeStyle: a.strokeStyle || "solid", He: a.enableMassClear === l ? l : f, mf: k, og: k, bd: a.enableEditing === f ? f : l, Js: 15, Xz: l, Ic: a.enableClicking === l ? l : f};
        0 >= this.m.Od && (this.m.Od = 5);
        if (0 > this.m.qd || 1 < this.m.qd)this.m.qd = 0.65;
        if (0 > this.m.ig || 1 < this.m.ig)this.m.ig = 0.65;
        "solid" != this.m.strokeStyle && "dashed" != this.m.strokeStyle && (this.m.strokeStyle = "solid");
        this.B = k;
        this.Ol = new Na(0, 0);
        this.Gc = [];
        this.Ua = [];
        this.fa = {}
      }

      I.lang.ea(Eb, Oa, "Graph");
      Eb.Lk = function (a) {
        var b = [];
        if (!a)return b;
        Ja(a) && I.Nb.Bd(a.split(";"), function (a) {
          a = a.split(",");
          b.push(new L(a[0], a[1]))
        });
        "[object Array]" == Object[u].toString.apply(a) && 0 < a[w] && (b = a);
        return b
      };
      Eb.No = [0.09, 0.005, 1.0E-4, 1.0E-5];
      I[x](Eb[u], {initialize: function (a) {
        this.map = a;
        return k
      }, draw: m(), ni: function (a) {
        this.Gc[w] = 0;
        this.R = Eb.Lk(a).slice(0);
        this.Rd()
      }, fc: function (a) {
        this.ni(a)
      }, Rd: function () {
        if (this.R) {
          var a = this;
          a.Ol = new Na;
          I.Nb.Bd(this.R, function (b) {
            a.Ol[x](b)
          })
        }
      }, ac: o("R"), Gg: function (a, b) {
        b && this.R[a] && (this.Gc[w] = 0, this.R[a] = new L(b.lng, b.lat), this.Rd())
      }, setStrokeColor: function (a) {
        this.m.strokeColor = a
      }, gy: function () {
        return this.m.strokeColor
      }, jj: function (a) {
        0 < a && (this.m.Od = a)
      }, bs: function () {
        return this.m.Od
      }, hj: function (a) {
        if (a && !(1 < a || 0 > a))this.m.qd = a
      }, hy: function () {
        return this.m.qd
      }, ol: function (a) {
        1 < a || 0 > a || (this.m.ig = a)
      }, Sx: function () {
        return this.m.ig
      }, ij: function (a) {
        "solid" != a && "dashed" != a || (this.m.strokeStyle = a)
      }, as: function () {
        return this.m.strokeStyle
      }, setFillColor: function (a) {
        this.m.fillColor = a || ""
      }, Rx: function () {
        return this.m.fillColor
      }, kf: o("Ol"), remove: function () {
        this.map && this.map.removeEventListener("onmousemove", this.Qj);
        Oa[u].remove.call(this);
        this.Gc[w] = 0
      }, bd: function () {
        if (!(2 > this.R[w])) {
          this.m.bd = f;
          var a = this;
          M.load("poly", function () {
            a.Yf()
          }, f)
        }
      }, qx: function () {
        this.m.bd = l;
        var a = this;
        M.load("poly", function () {
          a.ff()
        }, f)
      }});
      function Fb(a) {
        Oa.call(this);
        this.B = this.map = k;
        this.m = {width: 0, height: 0, X: new P(0, 0), opacity: 1, background: "transparent", Xk: 1, ws: "#000", My: "solid", M: k};
        this.gt(a);
        this.M = this.m.M
      }

      I.lang.ea(Fb, Oa, "Division");
      I[x](Fb[u], {Mh: function () {
        var a = this.m, b = this.content, c = ['<div class="BMap_Division" style="position:absolute;'];
        c.push("width:" + a[y] + "px;display:block;");
        c.push("overflow:hidden;");
        "none" != a.borderColor && c.push("border:" + a.Xk + "px " + a.My + " " + a.ws + ";");
        c.push("opacity:" + a.opacity + "; filter:(opacity=" + 100 * a.opacity + ")");
        c.push("background:" + a.background + ";");
        c.push('z-index:60;">');
        c.push(b);
        c.push("</div>");
        this.B = ab(this.map.ee().Go, c.join(""))
      }, initialize: function (a) {
        this.map = a;
        this.Mh();
        this.B && I.A(this.B, Fa() ? "touchstart" : "mousedown", function (a) {
          qa(a)
        });
        return this.B
      }, draw: function () {
        var a = this.map.Md(this.m.M);
        this.m.X = new P(-p.round(this.m[y] / 2) - p.round(this.m.Xk), -p.round(this.m[A] / 2) - p.round(this.m.Xk));
        this.B.style.left = a.x + this.m.X[y] + "px";
        this.B.style.top = a.y + this.m.X[A] + "px"
      }, V: function () {
        return this.m.M
      }, sA: function () {
        return this.map.ab(this.V())
      }, aa: function (a) {
        this.m.M = a;
        this.draw()
      }, oz: function (a, b) {
        this.m[y] = p.round(a);
        this.m[A] = p.round(b);
        this.B && (this.B.style[y] = this.m[y] + "px", this.B.style[A] = this.m[A] + "px", this.draw())
      }});
      function Gb(a, b, c) {
        a && b && (this.imageUrl = a, this.size = b, a = new P(p.floor(b[y] / 2), p.floor(b[A] / 2)), c = c || {}, a = c.anchor || a, b = c.imageOffset || new P(0, 0), this.imageSize = c.imageSize, this.anchor = a, this.imageOffset = b, this.infoWindowAnchor = c.infoWindowAnchor || this.anchor, this.printImageUrl = c.printImageUrl || "")
      }

      I[x](Gb[u], {tz: function (a) {
        a && (this.imageUrl = a)
      }, Az: function (a) {
        a && (this.printImageUrl = a)
      }, od: function (a) {
        a && (this.size = new P(a[y], a[A]))
      }, wb: function (a) {
        a && (this.anchor = new P(a[y], a[A]))
      }, ej: function (a) {
        a && (this.imageOffset = new P(a[y], a[A]))
      }, uz: function (a) {
        a && (this.infoWindowAnchor = new P(a[y], a[A]))
      }, rz: function (a) {
        a && (this.imageSize = new P(a[y], a[A]))
      }, toString: ca("Icon")});
      function Hb(a, b) {
        I.lang.ma.call(this);
        this.content = a;
        this.map = k;
        b = b || {};
        this.m = {width: b.width || 0, height: b.height || 0, maxWidth: b.maxWidth || 600, X: b.offset || new P(0, 0), title: b.title || "", Ho: b.maxContent || "", Cd: b.enableMaximize || l, Di: b.enableAutoPan === l ? l : f, In: b.enableCloseOnClick === l ? l : f, margin: [10, 10, 40, 10], wk: [
          [10, 10],
          [10, 10],
          [10, 10],
          [10, 10]
        ], zy: l, bB: ca(f), Mn: b.enableSearchTool === f ? f : l};
        0 != this.m[y] && (220 > this.m[y] && (this.m[y] = 220), 730 < this.m[y] && (this.m[y] = 730));
        0 != this.m[A] && (60 > this.m[A] && (this.m[A] = 60), 650 < this.m[A] && (this.m[A] = 650));
        if (0 != this.m.maxWidth && (220 > this.m.maxWidth && (this.m.maxWidth = 220), 730 < this.m.maxWidth))this.m.maxWidth = 730;
        this.Ob = l;
        this.te = K.$;
        this.va = k;
        var c = this;
        M.load("infowindow", function () {
          c.Lb()
        })
      }

      I.lang.ea(Hb, I.lang.ma, "InfoWindow");
      I[x](Hb[u], {setWidth: function (a) {
        !a && 0 != a || (isNaN(a) || 0 > a) || (0 != a && (220 > a && (a = 220), 730 < a && (a = 730)), this.m[y] = a)
      }, setHeight: function (a) {
        !a && 0 != a || (isNaN(a) || 0 > a) || (0 != a && (60 > a && (a = 60), 650 < a && (a = 650)), this.m[A] = a)
      }, it: function (a) {
        !a && 0 != a || (isNaN(a) || 0 > a) || (0 != a && (220 > a && (a = 220), 730 < a && (a = 730)), this.m.maxWidth = a)
      }, xb: function (a) {
        this.m.title = a
      }, getTitle: function () {
        return this.m.title
      }, dc: ba("content"), Nx: o("content"), fj: function (a) {
        this.m.Ho = a + ""
      }, Ub: m(), Di: function () {
        this.m.Di = f
      }, disableAutoPan: function () {
        this.m.Di = l
      }, enableCloseOnClick: function () {
        this.m.In = f
      }, disableCloseOnClick: function () {
        this.m.In = l
      }, Cd: function () {
        this.m.Cd = f
      }, Ek: function () {
        this.m.Cd = l
      }, show: function () {
        this.cb = f
      }, H: function () {
        this.cb = l
      }, close: function () {
        this.H()
      }, $k: function () {
        this.Ob = f
      }, restore: function () {
        this.Ob = l
      }, Qe: function () {
        return this.pa()
      }, pa: ca(l), V: function () {
        if (this.va && this.va.V)return this.va.V()
      }, Ke: function () {
        return this.m.X
      }});
      ya[u].Sb = function (a, b) {
        if (a instanceof Hb && b instanceof L) {
          var c = this.v;
          c.xg ? c.xg.aa(b) : (c.xg = new V(b, {icon: new Gb(K.$ + "blank.gif", {width: 1, height: 1}), offset: new P(0, 0), clickable: l}), c.xg.Qu = 1);
          this.Ma(c.xg);
          c.xg.Sb(a)
        }
      };
      ya[u].Eb = function () {
        var a = this.v.wa || this.v.Ef;
        a && a.va && a.va.Eb()
      };
      Oa[u].Sb = function (a) {
        this.map && (this.map.Eb(), a.cb = f, this.map.v.Ef = a, a.va = this, I.lang.ma.call(a, a.K))
      };
      Oa[u].Eb = function () {
        this.map && this.map.v.Ef && (this.map.v.Ef.cb = l, I.lang.Ck(this.map.v.Ef.K), this.map.v.Ef = k)
      };
      function Ib(a, b) {
        Oa.call(this);
        this.content = a;
        this.B = this.map = k;
        b = b || {};
        this.m = {width: 0, X: b.offset || new P(0, 0), Fh: {backgroundColor: "#fff", border: "1px solid #f00", padding: "1px", whiteSpace: "nowrap", font: "12px " + K.fontFamily, zIndex: "80", MozUserSelect: "none"}, position: b.position || k, He: b.enableMassClear === l ? l : f, Ic: f};
        0 > this.m[y] && (this.m[y] = 0);
        gb(b.enableClicking) && (this.m.Ic = b.enableClicking);
        this.M = this.m[la];
        var c = this;
        M.load("marker", function () {
          c.Lb()
        })
      }

      I.lang.ea(Ib, Oa, "Label");
      I[x](Ib[u], {V: function () {
        return this.Xj ? this.Xj.V() : this.M
      }, aa: function (a) {
        a instanceof L && !this.Nk() && (this.M = this.m[la] = new L(a.lng, a.lat))
      }, dc: ba("content"), wz: function (a) {
        0 <= a && 1 >= a && (this.m.opacity = a)
      }, Cc: function (a) {
        a instanceof P && (this.m.X = new P(a[y], a[A]))
      }, Ke: function () {
        return this.m.X
      }, Wb: function (a) {
        a = a || {};
        this.m.Fh = I[x](this.m.Fh, a)
      }, tf: function (a) {
        return this.Wb(a)
      }, xb: function (a) {
        this.m.title = a || ""
      }, getTitle: function () {
        return this.m.title
      }, ht: function (a) {
        this.M = (this.Xj = a) ? this.m[la] = a.V() : this.m[la] = k
      }, Nk: function () {
        return this.Xj || k
      }});
      var Jb = new Gb(K.$ + "marker_red_sprite.png", new P(19, 25), {anchor: new P(10, 25), infoWindowAnchor: new P(10, 0)}), Kb = new Gb(K.$ + "marker_red_sprite.png", new P(20, 11), {anchor: new P(6, 11), imageOffset: new P(-19, -13)});

      function V(a, b) {
        Oa.call(this);
        b = b || {};
        this.M = a;
        this.Oh = this.map = k;
        this.m = {X: b.offset || new P(0, 0), Gd: b.icon || Jb, uf: Kb, title: b.title || "", label: k, kr: b.baseZIndex || 0, Ic: f, CB: l, Co: l, He: f, mb: l, $s: b.raiseOnDrag || l, ct: l, uc: b["draggingCursor "] || K.uc};
        b.icon && !b.shadow && (this.m.uf = k);
        b.enableDragging && (this.m.mb = b.enableDragging);
        b.enableMassClear && (this.m.He = b.enableMassClear);
        gb(b.enableClicking) && (this.m.Ic = b.enableClicking);
        var c = this;
        M.load("marker", function () {
          c.Lb()
        })
      }

      V.Bj = Cb.Ri(-90) + 1E6;
      V.vp = V.Bj + 1E6;
      I.lang.ea(V, Oa, "Marker");
      I[x](V[u], {re: function (a) {
        a instanceof Gb && (this.m.Gd = a)
      }, Xr: function () {
        return this.m.Gd
      }, rl: function (a) {
        a instanceof Gb && (this.m.uf = a)
      }, getShadow: function () {
        return this.m.uf
      }, Ah: function (a) {
        this.m.label = a || k
      }, Yr: function () {
        return this.m.label
      }, mb: function () {
        this.m.mb = f
      }, Bn: function () {
        this.m.mb = l
      }, V: o("M"), aa: function (a) {
        a instanceof L && (this.M = new L(a.lng, a.lat))
      }, Ch: function (a, b) {
        this.m.Co = !!a;
        a && (this.Ep = b || 0)
      }, xb: function (a) {
        this.m.title = a + ""
      }, getTitle: function () {
        return this.m.title
      }, Cc: function (a) {
        a instanceof P && (this.m.X = a)
      }, Ke: function () {
        return this.m.X
      }, Eg: ba("Oh")});
      function Lb(a, b) {
        Eb.call(this, b);
        b = b || {};
        this.m.ig = b.fillOpacity ? b.fillOpacity : 0.65;
        this.m.fillColor = "" == b.fillColor ? "" : b.fillColor ? b.fillColor : "#fff";
        this.fc(a);
        var c = this;
        M.load("poly", function () {
          c.Lb()
        })
      }

      I.lang.ea(Lb, Eb, "Polygon");
      I[x](Lb[u], {fc: function (a, b) {
        this.bh = Eb.Lk(a).slice(0);
        var c = Eb.Lk(a).slice(0);
        1 < c[w] && !c[0].Gb(c[c[w] - 1]) && c.push(new L(c[0].lng, c[0].lat));
        Eb[u].fc.call(this, c, b)
      }, Gg: function (a, b) {
        this.bh[a] && (this.bh[a] = new L(b.lng, b.lat), this.R[a] = new L(b.lng, b.lat), 0 == a && !this.R[0].Gb(this.R[this.R[w] - 1]) && (this.R[this.R[w] - 1] = new L(b.lng, b.lat)), this.Rd())
      }, ac: function () {
        var a = this.bh;
        0 == a[w] && (a = this.R);
        return a
      }});
      function Mb(a, b) {
        Eb.call(this, b);
        this.ni(a);
        var c = this;
        M.load("poly", function () {
          c.Lb()
        })
      }

      I.lang.ea(Mb, Eb, "Polyline");
      function Nb(a, b, c) {
        this.M = a;
        this.sa = p.abs(b);
        Lb.call(this, [], c)
      }

      Nb.No = [0.01, 1.0E-4, 1.0E-5, 4.0E-6];
      I.lang.ea(Nb, Lb, "Circle");
      I[x](Nb[u], {initialize: function (a) {
        this.map = a;
        this.R = this.Oj(this.M, this.sa);
        this.Rd();
        return k
      }, Fa: o("M"), nd: function (a) {
        a && (this.M = a)
      }, by: o("sa"), ql: function (a) {
        this.sa = p.abs(a)
      }, Oj: function (a, b) {
        if (!a || !b || !this.map)return[];
        for (var c = [], d = b / 6378800, e = p.PI / 180 * a.lat, g = p.PI / 180 * a.lng, i = 0; 360 > i; i += 9) {
          var j = p.PI / 180 * i, n = p.asin(p.sin(e) * p.cos(d) + p.cos(e) * p.sin(d) * p.cos(j)), j = new L(((g - p.atan2(p.sin(j) * p.sin(d) * p.cos(e), p.cos(d) - p.sin(e) * p.sin(n)) + p.PI) % (2 * p.PI) - p.PI) * (180 / p.PI), n * (180 / p.PI));
          c.push(j)
        }
        d = c[0];
        c.push(new L(d.lng, d.lat));
        return c
      }});
      var Ob = {};

      function Pb(a) {
        this.map = a;
        this.th = [];
        this.dd = [];
        this.Vw = 300;
        this.Qo = 0;
        this.Jd = {};
        this.$f = {};
        this.Yi = 0;
        this.Tg = this.Sp(1);
        this.hi = this.Sp(2);
        a.platform[v](this.Tg);
        a.platform[v](this.hi)
      }

      J.Bc(function (a) {
        (new Pb(a)).Ca()
      });
      I[x](Pb[u], {Ca: function () {
        var a = this, b = a.map;
        b[D]("loadcode", function () {
          a.Yk()
        });
        b[D]("addtilelayer", function (b) {
          a.ti(b)
        });
        b[D]("removetilelayer", function (b) {
          a.aj(b)
        });
        b[D]("setmaptype", function (b) {
          a.Se(b)
        });
        b[D]("zoomstartcode", function (b) {
          a.Yq(b)
        })
      }, Yk: function () {
        var a = this;
        if (I.O.T)try {
          da.execCommand("BackgroundImageCache", l, f)
        } catch (b) {
        }
        this.loaded || a.Uk();
        a.me();
        this.loaded || (this.loaded = f, M.load("tile", function () {
          a.fu()
        }))
      }, Uk: function () {
        for (var a = this.map.da().gi, b = 0; b < a[w]; b++) {
          var c = new Qb;
          I[x](c, a[b]);
          this.th.push(c);
          c.Ca(this.map, this.Tg)
        }
      }, Sp: function (a) {
        var b = O("div");
        b.style[la] = "absolute";
        b.style.overflow = "visible";
        b.style.left = b.style.top = "0";
        b.style.zIndex = a;
        return b
      }, Dz: function (a, b, c) {
        var d = this;
        d.CA = b;
        var e = this.map.da(), g = d.cs(a, c), i = e.k.xf, j = a[0] * i + b[0], n = 0;
        e === Aa && 15 == d.map.oa() && (n = 0.5);
        b = [j, (n - 1 - a[1]) * i + b[1]];
        (i = this.Jd[g]) && i.Ga ? (Xa(i.Ga, b), i.loaded ? this.Sh() : i.Kl(function () {
          d.Sh()
        })) : (i = this.$f[g]) && i.Ga ? (c.kb.insertBefore(i.Ga, c.kb.lastChild), this.Jd[g] = i, Xa(i.Ga, b), i.loaded ? this.Sh() : i.Kl(function () {
          d.Sh()
        })) : (e = 256 * p.pow(2, e.ng() - a[2]), new L(a[0] * e, a[1] * e), e = c.getTilesUrl(new S(a[0], a[1]), a[2]), i = new Rb(this, e, b, a, c), i.Kl(function () {
          d.Sh()
        }), i.yv(), this.Jd[g] = i)
      }, Sh: function () {
        this.Yi--;
        var a = this;
        0 == this.Yi && (this.Gj && (clearTimeout(this.Gj), this.Gj = k), this.Gj = setTimeout(function () {
          if (a.Yi == 0) {
            a.map.dispatchEvent(new Q("ontilesloaded"));
            if (xa) {
              if (ua && va && wa) {
                var b = Ka(), c = a.map.wc();
                setTimeout(function () {
                  Ba(5030, {load_script_time: va - ua, load_tiles_time: b - wa, map_width: c[y], map_height: c[A], map_size: c[y] * c[A]})
                }, 1E4)
              }
              xa = l
            }
          }
          a.Gj = k
        }, 80))
      }, cs: function (a, b) {
        return this.map.da() === Aa ? "TILE-" + b.K + "-" + this.map.fn + "-" + a[0] + "-" + a[1] + "-" + a[2] : "TILE-" + b.K + "-" + a[0] + "-" + a[1] + "-" + a[2]
      }, so: function (a) {
        var b = a.Ga;
        if (b && (Sb(b), $a(b)))b[ka][ha](b);
        delete this.Jd[a.name];
        a.loaded || (Sb(b), a.Pl(), a.Ga = k, a.uh = k)
      }, me: function () {
        var a = this;
        a.map.da() == Aa ? M.load("coordtrans", function () {
          a.tq()
        }, f) : a.tq()
      }, tq: function () {
        for (var a = this.th.concat(this.dd), b = a[w], c = 0; c < b; c++) {
          var d = a[c];
          d.sk && (this.kb = d.kb);
          var e = this.map, g = e.da(), i = g.Oi(), j = e.ya, n = e.Rb;
          g == Aa && n.Gb(new L(0, 0)) && (n = e.Rb = i.wg(e.zd, e.ib));
          var t = g.vb(j), j = g.ty(j), i = p.ceil(n.lng / j), q = p.ceil(n.lat / j), z = g.k.xf, j = [i, q, (n.lng - i * j) / j * z, (n.lat - q * j) / j * z], E = j[0] - p.ceil((e[y] / 2 - j[2]) / z), i = j[1] - p.ceil((e[A] / 2 - j[3]) / z), q = j[0] + p.ceil((e[y] / 2 + j[2]) / z), G = 0;
          g === Aa && 15 == e.oa() && (G = 1);
          g = j[1] + p.ceil((e[A] / 2 + j[3]) / z) + G;
          this.ir = new L(n.lng, n.lat);
          var G = this.Jd, z = -this.ir.lng / t, H = this.ir.lat / t, t = [p.ceil(z), p.ceil(H)], n = e.oa(), F;
          for (F in G) {
            var ea = G[F], C = ea.info;
            (C[2] != n || C[2] == n && (E > C[0] || q <= C[0] || i > C[1] || g <= C[1])) && this.so(ea)
          }
          G = -e[B] + e[A] / 2;
          d.kb.style.left = p.ceil(z + (-e[ia] + e[y] / 2)) - t[0] + "px";
          d.kb.style.top = p.ceil(H + G) - t[1] + "px";
          for (e = []; E < q; E++)for (z = i; z < g; z++)e.push([E, z]);
          e.sort(function (a) {
            return function (b, c) {
              return 0.4 * p.abs(b[0] - a[0]) + 0.6 * p.abs(b[1] - a[1]) - (0.4 * p.abs(c[0] - a[0]) + 0.6 * p.abs(c[1] - a[1]))
            }
          }([j[0] - 1, j[1] - 1]));
          this.Yi += e[w];
          E = 0;
          for (j = e[w]; E < j; E++)this.Dz([e[E][0], e[E][1], n], t, d)
        }
      }, ti: function (a) {
        for (var a = a.target, b = 0; b < this.dd[w]; b++)if (this.dd[b] == a)return;
        a.Ca(this.map, this.hi);
        this.dd.push(a)
      }, aj: function (a) {
        for (var a = a.target, b = 0, c = this.dd[w]; b < c; b++)a == this.dd[b] && this.dd.splice(b, 1);
        a.remove()
      }, Se: function () {
        for (var a = this.th, b = 0, c = a[w]; b < c; b++)a[b].remove();
        delete this.kb;
        this.th = [];
        this.$f = this.Jd = {};
        this.Uk();
        this.me()
      }, Yq: function () {
        var a = this;
        a.Ab && I.o.H(a.Ab);
        setTimeout(function () {
          a.me();
          a.map.dispatchEvent(new Q("onzoomend"))
        }, 10)
      }});
      function Rb(a, b, c, d, e) {
        this.uh = a;
        this[la] = c;
        this.Ej = [];
        this.name = a.cs(d, e);
        this.info = d;
        this.Uq = e.Do();
        d = O("img");
        Za(d);
        d.Qr = l;
        var g = d.style, a = a.map.da();
        g[la] = "absolute";
        g.border = "none";
        g[y] = a.k.xf + "px";
        g[A] = a.k.xf + "px";
        g.left = c[0] + "px";
        g.top = c[1] + "px";
        g.maxWidth = "none";
        this.Ga = d;
        this.src = b;
        Tb && (this.Ga.style.opacity = 0);
        var i = this;
        this.Ga.onload = function () {
          i.loaded = f;
          if (i.uh) {
            var a = i.uh, b = a.$f;
            if (!b[i.name]) {
              a.Qo++;
              b[i.name] = i
            }
            if (i.Ga && !$a(i.Ga) && e.kb) {
              e.kb[v](i.Ga);
              if (I.O.T <= 6 && I.O.T > 0 && i.Uq)i.Ga.style.cssText = i.Ga.style.cssText + (';filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' + i.src + '",sizingMethod=scale);')
            }
            var c = a.Qo - a.Vw, d;
            for (d in b) {
              if (c <= 0)break;
              if (!a.Jd[d]) {
                b[d].uh = k;
                var g = b[d].Ga;
                if (g && g[ka]) {
                  g[ka][ha](g);
                  Sb(g)
                }
                g = k;
                b[d].Ga = k;
                delete b[d];
                a.Qo--;
                c--
              }
            }
            Tb && new Va({Mc: 20, duration: 200, Sa: function (a) {
              if (i.Ga && i.Ga.style)i.Ga.style.opacity = a * 1
            }, finish: function () {
              i.Ga && i.Ga.style && delete i.Ga.style.opacity
            }});
            i.Pl()
          }
        };
        this.Ga.onerror = function () {
          i.Pl();
          if (i.uh) {
            var a = i.uh.map.da();
            if (a.k.On) {
              i.error = f;
              i.Ga.src = a.k.On;
              if (i.Ga && !$a(i.Ga))e.kb[v](i.Ga)
            }
          }
        };
        d = k
      }

      Rb[u].Kl = function (a) {
        this.Ej.push(a)
      };
      Rb[u].yv = function () {
        this.Ga.src = 0 < I.O.T && 6 >= I.O.T && this.Uq ? K.$ + "blank.gif" : this.src
      };
      Rb[u].Pl = function () {
        for (var a = 0; a < this.Ej[w]; a++)this.Ej[a]();
        this.Ej[w] = 0
      };
      function Sb(a) {
        if (a) {
          a.onload = a.onerror = k;
          var b = a.attributes, c, d, e;
          if (b) {
            d = b[w];
            for (c = 0; c < d; c += 1)e = b[c].name, Ia(a[e]) && (a[e] = k)
          }
          if (b = a.children) {
            d = b[w];
            for (c = 0; c < d; c += 1)Sb(a.children[c])
          }
        }
      }

      var Tb = !I.O.T || 8 < I.O.T;

      function Qb(a) {
        this.wh = a || {};
        this.hx = this.wh.copyright || k;
        this.Wz = this.wh.transparentPng || l;
        this.sk = this.wh.baseLayer || l;
        this.zIndex = this.wh.zIndex || 0;
        this.K = Qb.rv++
      }

      Qb.rv = 0;
      I.lang.ea(Qb, I.lang.ma, "TileLayer");
      I[x](Qb[u], {Ca: function (a, b) {
        this.sk && (this.zIndex = -100);
        this.map = a;
        if (!this.kb) {
          var c = O("div"), d = c.style;
          d[la] = "absolute";
          d.overflow = "visible";
          d.zIndex = this.zIndex;
          d.left = p.ceil(-a[ia] + a[y] / 2) + "px";
          d.top = p.ceil(-a[B] + a[A] / 2) + "px";
          b[v](c);
          this.kb = c
        }
        c = a.da();
        a.Ne() && c == za && (c.k.xf = 128, d = function (a) {
          return p.pow(2, 18 - a) * 2
        }, c.vb = d, c.k.cc.vb = d)
      }, remove: function () {
        this.kb && this.kb[ka] && (this.kb.innerHTML = "", this.kb[ka][ha](this.kb));
        delete this.kb
      }, Do: o("Wz"), getTilesUrl: function (a, b) {
        var c = "";
        this.wh.tileUrlTemplate && (c = this.wh.tileUrlTemplate.replace(/\{X\}/, a.x), c = c.replace(/\{Y\}/, a.y), c = c.replace(/\{Z\}/, b));
        return c
      }, kg: o("hx"), da: function () {
        return this.eb || za
      }});
      function Ub(a) {
        Qb.call(this, a);
        this.k = a || {};
        if (this.k.predictDate) {
          if (1 > this.k.predictDate.weekday || 7 < this.k.predictDate.weekday)this.k.predictDate = 1;
          if (0 > this.k.predictDate.hour || 23 < this.k.predictDate.hour)this.k.predictDate.hour = 0
        }
        this.Aw = "http://its.map.baidu.com:8002/traffic/"
      }

      Ub[u] = new Qb;
      Ub[u].Ca = function (a, b) {
        Qb[u].Ca.call(this, a, b);
        this.p = a
      };
      Ub[u].Do = ca(f);
      Ub[u].getTilesUrl = function (a, b) {
        var c = "";
        this.k.predictDate ? c = "HistoryService?day=" + (this.k.predictDate.weekday - 1) + "&hour=" + this.k.predictDate.hour + "&t=" + (new Date).getTime() + "&" : (c = "TrafficTileService?time=" + (new Date).getTime() + "&", this.p.Ne() || (c += "label=web2D&v=016&"));
        return(this.Aw + c + "level=" + b + "&x=" + a.x + "&y=" + a.y).replace(/-(\d+)/gi, "M$1")
      };
      function Vb(a, b, c) {
        this.Fv = a;
        this.gi = b instanceof Qb ? [b] : b.slice(0);
        c = c || {};
        this.k = {Pz: c.tips || "", Eo: "", zc: c.minZoom || 3, yc: c.maxZoom || 19, xy: c.minZoom || 3, wy: c.maxZoom || 18, xf: 256, Oz: c.textColor || "black", On: c.errorImageUrl || "", cc: c.projection || new T};
        1 <= this.gi[w] && (this.gi[0].sk = f);
        I[x](this.k, c)
      }

      I[x](Vb[u], {getName: o("Fv"), Qi: function () {
        return this.k.Pz
      }, NA: function () {
        return this.k.Eo
      }, ly: function () {
        return this.gi[0]
      }, SA: o("gi"), my: function () {
        return this.k.xf
      }, kh: function () {
        return this.k.zc
      }, ng: function () {
        return this.k.yc
      }, Pi: function () {
        return this.k.Oz
      }, Oi: function () {
        return this.k.cc
      }, MA: function () {
        return this.k.On
      }, my: function () {
        return this.k.xf
      }, vb: function (a) {
        return p.pow(2, 18 - a)
      }, ty: function (a) {
        return this.vb(a) * this.k.xf
      }});
      var Wb = ["http://shangetu0.map.bdimg.com/it/", "http://shangetu1.map.bdimg.com/it/", "http://shangetu2.map.bdimg.com/it/", "http://shangetu3.map.bdimg.com/it/", "http://shangetu4.map.bdimg.com/it/"], Xb = ["http://online0.map.bdimg.com/tile/", "http://online1.map.bdimg.com/tile/", "http://online2.map.bdimg.com/tile/", "http://online3.map.bdimg.com/tile/", "http://online4.map.bdimg.com/tile/"], Yb = new Qb;
      Yb.getTilesUrl = function (a, b) {
        var c = a.x, d = a.y, e = "pl";
        this.map.Ne() && (e = "ph");
        return(Xb[p.abs(c + d) % Xb[w]] + "?qt=tile&x=" + (c + "").replace(/-/gi, "M") + "&y=" + (d + "").replace(/-/gi, "M") + "&z=" + b + "&styles=" + e + (6 == I.O.T ? "&color_dep=32&colors=50" : "") + "&udt=20150518").replace(/-(\d+)/gi, "M$1")
      };
      var za = new Vb("\u5730\u56fe", Yb, {tips: "\u663e\u793a\u666e\u901a\u5730\u56fe"}), Zb = new Qb;
      Zb.xt = ["http://d0.map.baidu.com/resource/mappic/", "http://d1.map.baidu.com/resource/mappic/", "http://d2.map.baidu.com/resource/mappic/", "http://d3.map.baidu.com/resource/mappic/"];
      Zb.getTilesUrl = function (a, b) {
        var c = a.x, d = a.y, e = 256 * p.pow(2, 20 - b), d = p.round((9998336 - e * d) / e) - 1;
        return url = this.xt[p.abs(c + d) % this.xt[w]] + this.map.ib + "/" + this.map.fn + "/3/lv" + (21 - b) + "/" + c + "," + d + ".jpg"
      };
      var Aa = new Vb("\u4e09\u7ef4", Zb, {tips: "\u663e\u793a\u4e09\u7ef4\u5730\u56fe", minZoom: 15, maxZoom: 20, textColor: "white", projection: new Pa});
      Aa.vb = function (a) {
        return p.pow(2, 20 - a)
      };
      Aa.hh = function (a) {
        if (!a)return"";
        var b = K.jn, c;
        for (c in b)if (-1 < a.search(c))return b[c].gl;
        return""
      };
      Aa.Mx = function (a) {
        return{bj: 2, gz: 1, sz: 14, sh: 4}[a]
      };
      var $b = new Qb({sk: f});
      $b.getTilesUrl = function (a, b) {
        var c = a.x, d = a.y;
        return(Wb[p.abs(c + d) % Wb[w]] + "u=x=" + c + ";y=" + d + ";z=" + b + ";v=009;type=sate&fm=46&udt=20141015").replace(/-(\d+)/gi, "M$1")
      };
      var Ca = new Vb("\u536b\u661f", $b, {tips: "\u663e\u793a\u536b\u661f\u5f71\u50cf", minZoom: 1, maxZoom: 19, textColor: "white"}), ac = new Qb({transparentPng: f});
      ac.getTilesUrl = function (a, b) {
        var c = a.x, d = a.y;
        return(Xb[p.abs(c + d) % Xb[w]] + "?qt=tile&x=" + (c + "").replace(/-/gi, "M") + "&y=" + (d + "").replace(/-/gi, "M") + "&z=" + b + "&styles=sl" + (6 == I.O.T ? "&color_dep=32&colors=50" : "") + "&udt=20141015").replace(/-(\d+)/gi, "M$1")
      };
      var Da = new Vb("\u6df7\u5408", [$b, ac], {tips: "\u663e\u793a\u5e26\u6709\u8857\u9053\u7684\u536b\u661f\u5f71\u50cf", labelText: "\u8def\u7f51", minZoom: 1, maxZoom: 19, textColor: "white"});
      var cc = 1, W = {};
      window.dA = W;
      function X(a, b) {
        I.lang.ma.call(this);
        this.Cb = {};
        this.Fg(a);
        b = b || {};
        b.S = b.renderOptions || {};
        this.k = {S: {ja: b.S.panel || k, map: b.S.map || k, yd: b.S.autoViewport || f, cj: b.S.selectFirstResult, Ti: b.S.highlightMode, mb: b.S.enableDragging || l}, fl: b.onSearchComplete || m(), Rs: b.onMarkersSet || m(), Qs: b.onInfoHtmlSet || m(), Ss: b.onResultsHtmlSet || m(), Ps: b.onGetBusListComplete || m(), Os: b.onGetBusLineComplete || m(), Ns: b.onBusListHtmlSet || m(), Ms: b.onBusLineHtmlSet || m(), Ko: b.onPolylinesSet || m(), yh: b.reqFrom || ""};
        this.k.S.yd = "undefined" != typeof b && "undefined" != typeof b.renderOptions && "undefined" != typeof b.renderOptions.autoViewport ? b.renderOptions.autoViewport : f;
        this.k.S.ja = I.Jb(this.k.S.ja)
      }

      I.ea(X, I.lang.ma);
      I[x](X[u], {getResults: function () {
        return this.hb ? this.ve : this.N
      }, enableAutoViewport: function () {
        this.k.S.yd = f
      }, disableAutoViewport: function () {
        this.k.S.yd = l
      }, Fg: function (a) {
        a && (this.Cb.src = a)
      }, bp: function (a) {
        this.k.fl = a || m()
      }, setMarkersSetCallback: function (a) {
        this.k.Rs = a || m()
      }, setPolylinesSetCallback: function (a) {
        this.k.Ko = a || m()
      }, setInfoHtmlSetCallback: function (a) {
        this.k.Qs = a || m()
      }, setResultsHtmlSetCallback: function (a) {
        this.k.Ss = a || m()
      }, pg: o("Mb")});
      var dc = {Vt: "http://api.map.baidu.com/", Na: function (a, b, c, d, e) {
        var g = (1E5 * p.random()).toFixed(0);
        J._rd["_cbk" + g] = function (b) {
          c = c || {};
          a && a(b, c);
          delete J._rd["_cbk" + g]
        };
        d = d || "";
        b = c && c.AB ? fb(b, encodeURI) : fb(b, encodeURIComponent);
        d = this.Vt + d + "?" + b + "&ie=utf-8&oue=1&fromproduct=jsapi";
        e || (d += "&res=api");
        lb(d + ("&callback=BMap._rd._cbk" + g))
      }};
      window.hA = dc;
      J._rd = {};
      var R = {};
      window.gA = R;
      R.at = function (a) {
        return a.replace(/<\/?b>/g, "")
      };
      R.Zy = function (a) {
        return a.replace(/([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0|[1-9]\d*),([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0|[1-9]\d*)(,)/g, "$1,$2;")
      };
      R.$y = function (a, b) {
        var c = new fa("(((-?\\d+)(\\.\\d+)?),((-?\\d+)(\\.\\d+)?);)(((-?\\d+)(\\.\\d+)?),((-?\\d+)(\\.\\d+)?);){" + b + "}", "ig");
        return a.replace(c, "$1")
      };
      var ec = 2, fc = 3, gc = 0, hc = "bt", ic = "nav", jc = "walk", kc = "bl", lc = "bsl", mc = 14, nc = 15, oc = 18, pc = 20, qc = 31;
      J.I = window.Instance = I.lang.Hd;
      function La(a, b) {
        X.call(this, a, b);
        b = b || {};
        b.renderOptions = b.renderOptions || {};
        this.Bh(b.pageCapacity);
        "undefined" != typeof b.renderOptions.selectFirstResult && !b.renderOptions.selectFirstResult ? this.Cn() : this.Kn();
        this.W = [];
        this.Vc = [];
        this.ta = -1;
        this.ca = [];
        var c = this;
        M.load("local", function () {
          c.Rl()
        }, f)
      }

      I.ea(La, X, "LocalSearch");
      La.Lh = 10;
      La.eA = 1;
      La.Mg = 100;
      La.up = 2E3;
      La.yp = 1E5;
      I[x](La[u], {search: function (a, b) {
        this.ca.push({method: "search", arguments: [a, b]})
      }, Dg: function (a, b, c) {
        this.ca.push({method: "searchInBounds", arguments: [a, b, c]})
      }, zh: function (a, b, c, d) {
        this.ca.push({method: "searchNearby", arguments: [a, b, c, d]})
      }, tc: function () {
        delete this.ba;
        delete this.Mb;
        delete this.N;
        delete this.Q;
        this.ta = -1;
        this.za();
        this.k.S.ja && (this.k.S.ja.innerHTML = "")
      }, rg: m(), Kn: function () {
        this.k.S.cj = f
      }, Cn: function () {
        this.k.S.cj = l
      }, Bh: function (a) {
        this.k.qf = "number" == typeof a && !isNaN(a) ? 1 > a ? La.Lh : a > La.Mg ? La.Lh : a : La.Lh
      }, Oc: function () {
        return this.k.qf
      }, toString: ca("LocalSearch")});
      var rc = La[u];
      Y(rc, {clearResults: rc.tc, setPageCapacity: rc.Bh, getPageCapacity: rc.Oc, gotoPage: rc.rg, searchNearby: rc.zh, searchInBounds: rc.Dg, search: rc.search, enableFirstResultSelection: rc.Kn, disableFirstResultSelection: rc.Cn});
      function sc(a, b) {
        X.call(this, a, b)
      }

      I.ea(sc, X, "BaseRoute");
      I[x](sc[u], {tc: m()});
      function tc(a, b) {
        X.call(this, a, b);
        b = b || {};
        this.gj(b.policy);
        this.Bh(b.pageCapacity);
        this.Qd = hc;
        this.Aj = mc;
        this.Il = cc;
        this.W = [];
        this.ta = -1;
        this.ca = [];
        var c = this;
        M.load("route", function () {
          c.jc()
        })
      }

      tc.Mg = 100;
      tc.Qt = [0, 1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 1, 1, 1];
      I.ea(tc, sc, "TransitRoute");
      I[x](tc[u], {gj: function (a) {
        this.k.Ac = 0 <= a && 4 >= a ? a : 0
      }, vv: function (a, b) {
        this.ca.push({method: "_internalSearch", arguments: [a, b]})
      }, search: function (a, b) {
        this.ca.push({method: "search", arguments: [a, b]})
      }, Bh: function (a) {
        if ("string" == typeof a && (a = s(a), isNaN(a))) {
          this.k.qf = tc.Mg;
          return
        }
        this.k.qf = "number" != typeof a ? tc.Mg : 1 <= a && a <= tc.Mg ? p.round(a) : tc.Mg
      }, toString: ca("TransitRoute"), qw: function (a) {
        return a.replace(/\(.*\)/, "")
      }});
      function uc(a, b) {
        X.call(this, a, b);
        this.W = [];
        this.ta = -1;
        this.ca = [];
        var c = this, d = this.k.S;
        1 != d.Ti && 2 != d.Ti && (d.Ti = 1);
        this.bm = this.k.S.mb ? f : l;
        M.load("route", function () {
          c.jc()
        });
        this.vo && this.vo()
      }

      uc.Yt = " \u73af\u5c9b \u65e0\u5c5e\u6027\u9053\u8def \u4e3b\u8def \u9ad8\u901f\u8fde\u63a5\u8def \u4ea4\u53c9\u70b9\u5185\u8def\u6bb5 \u8fde\u63a5\u9053\u8def \u505c\u8f66\u573a\u5185\u90e8\u9053\u8def \u670d\u52a1\u533a\u5185\u90e8\u9053\u8def \u6865 \u6b65\u884c\u8857 \u8f85\u8def \u531d\u9053 \u5168\u5c01\u95ed\u9053\u8def \u672a\u5b9a\u4e49\u4ea4\u901a\u533a\u57df POI\u8fde\u63a5\u8def \u96a7\u9053 \u6b65\u884c\u9053 \u516c\u4ea4\u4e13\u7528\u9053 \u63d0\u524d\u53f3\u8f6c\u9053".split(" ");
      I.ea(uc, sc, "DWRoute");
      I[x](uc[u], {search: function (a, b, c) {
        this.ca.push({method: "search", arguments: [a, b, c]})
      }});
      function vc(a, b) {
        uc.call(this, a, b);
        b = b || {};
        this.gj(b.policy);
        this.Qd = ic;
        this.Aj = pc;
        this.Il = fc
      }

      I.ea(vc, uc, "DrivingRoute");
      I[x](vc[u], {gj: function (a) {
        this.k.Ac = 0 <= a && 2 >= a ? a : 0
      }});
      function wc(a, b) {
        uc.call(this, a, b);
        this.Qd = jc;
        this.Aj = qc;
        this.Il = ec;
        this.bm = l
      }

      I.ea(wc, uc, "WalkingRoute");
      function xc(a) {
        this.k = {};
        I[x](this.k, a);
        this.ca = [];
        var b = this;
        M.load("othersearch", function () {
          b.jc()
        })
      }

      I.ea(xc, I.lang.ma, "Geocoder");
      I[x](xc[u], {ko: function (a, b, c) {
        this.ca.push({method: "getPoint", arguments: [a, b, c]})
      }, eo: function (a, b, c) {
        this.ca.push({method: "getLocation", arguments: [a, b, c]})
      }, toString: ca("Geocoder")});
      var yc = xc[u];
      Y(yc, {getPoint: yc.ko, getLocation: yc.eo});
      function Geolocation(a) {
        this.k = {};
        I[x](this.k, a);
        this.ca = [];
        var b = this;
        M.load("othersearch", function () {
          b.jc()
        })
      }

      I[x](Geolocation[u], {getCurrentPosition: function (a, b) {
        this.ca.push({method: "getCurrentPosition", arguments: [a, b]})
      }, pg: o("Mb")});
      var zc = Geolocation[u];
      Y(zc, {getCurrentPosition: zc.getCurrentPosition, getStatus: zc.pg});
      function Ac(a) {
        a = a || {};
        a.S = a.renderOptions || {};
        this.k = {S: {map: a.S.map || k}};
        this.ca = [];
        var b = this;
        M.load("othersearch", function () {
          b.jc()
        })
      }

      I.ea(Ac, I.lang.ma, "LocalCity");
      I[x](Ac[u], {get: function (a) {
        this.ca.push({method: "get", arguments: [a]})
      }, toString: ca("LocalCity")});
      function Bc() {
        this.ca = [];
        var a = this;
        M.load("othersearch", function () {
          a.jc()
        })
      }

      I.ea(Bc, I.lang.ma, "Boundary");
      I[x](Bc[u], {get: function (a, b) {
        this.ca.push({method: "get", arguments: [a, b]})
      }, toString: ca("Boundary")});
      function Cc(a, b) {
        X.call(this, a, b);
        this.Ut = kc;
        this.Xt = nc;
        this.Tt = lc;
        this.Wt = oc;
        this.ca = [];
        var c = this;
        M.load("buslinesearch", function () {
          c.jc()
        })
      }

      Cc.Sj = K.$ + "iw_plus.gif";
      Cc.sv = K.$ + "iw_minus.gif";
      Cc.ww = K.$ + "stop_icon.png";
      I.ea(Cc, X);
      I[x](Cc[u], {getBusList: function (a) {
        this.ca.push({method: "getBusList", arguments: [a]})
      }, getBusLine: function (a) {
        this.ca.push({method: "getBusLine", arguments: [a]})
      }, setGetBusListCompleteCallback: function (a) {
        this.k.Ps = a || m()
      }, setGetBusLineCompleteCallback: function (a) {
        this.k.Os = a || m()
      }, setBusListHtmlSetCallback: function (a) {
        this.k.Ns = a || m()
      }, setBusLineHtmlSetCallback: function (a) {
        this.k.Ms = a || m()
      }, setPolylinesSetCallback: function (a) {
        this.k.Ko = a || m()
      }});
      function Dc(a) {
        X.call(this, a);
        a = a || {};
        this.ef = {input: a.input || k, $m: a.baseDom || k, types: a.types || [], fl: a.onSearchComplete || m()};
        this.Cb.src = a.location || "\u5168\u56fd";
        this.Be = "";
        this.jd = k;
        this.pq = "";
        this.rm();
        Ba(5011);
        var b = this;
        M.load("autocomplete", function () {
          b.jc()
        })
      }

      I.ea(Dc, X, "Autocomplete");
      I[x](Dc[u], {rm: m(), show: m(), H: m(), cp: function (a) {
        this.ef.types = a
      }, Fg: function (a) {
        this.Cb.src = a
      }, search: ba("Be"), pl: ba("pq")});
      var Ea;
      J.Map = ya;
      J.Hotspot = Qa;
      J.MapType = Vb;
      J.Point = L;
      J.Pixel = S;
      J.Size = P;
      J.Bounds = Na;
      J.TileLayer = Qb;
      J.Projection = Ab;
      J.MercatorProjection = T;
      J.PerspectiveProjection = Pa;
      J.Copyright = function (a, b, c) {
        this.id = a;
        this.Va = b;
        this.content = c
      };
      J.Overlay = Cb;
      J.Label = Ib;
      J.Marker = V;
      J.Icon = Gb;
      J.Polyline = Mb;
      J.Polygon = Lb;
      J.InfoWindow = Hb;
      J.Circle = Nb;
      J.Control = nb;
      J.NavigationControl = rb;
      J.GeolocationControl = sb;
      J.OverviewMapControl = ub;
      J.CopyrightControl = tb;
      J.ScaleControl = vb;
      J.MapTypeControl = xb;
      J.TrafficLayer = Ub;
      J.ContextMenu = yb;
      J.MenuItem = zb;
      J.LocalSearch = La;
      J.TransitRoute = tc;
      J.DrivingRoute = vc;
      J.WalkingRoute = wc;
      J.Autocomplete = Dc;
      J.Geocoder = xc;
      J.LocalCity = Ac;
      J.Geolocation = Geolocation;
      J.BusLineSearch = Cc;
      J.Boundary = Bc;
      function Y(a, b) {
        for (var c in b)a[c] = b[c]
      }

      Y(window, {BMap: J, _jsload: function (a, b) {
        ma.wl.Iy && ma.wl.set(a, b);
        M.Ww(a, b)
      }, BMAP_API_VERSION: "1.4"});
      var Z = ya[u];
      Y(Z, {getBounds: Z.kf, getCenter: Z.Fa, getMapType: Z.da, getSize: Z.wc, setSize: Z.od, getViewport: Z.Rk, getZoom: Z.oa, centerAndZoom: Z.Hc, panTo: Z.md, panBy: Z.Ld, setCenter: Z.nd, setCurrentCity: Z.$o, setMapType: Z.Se, setViewport: Z.Dh, setZoom: Z.tl, highResolutionEnabled: Z.Ne, zoomTo: Z.Pd, zoomIn: Z.lp, zoomOut: Z.mp, addHotspot: Z.cr, removeHotspot: Z.fz, clearHotspots: Z.mn, checkResize: Z.Yw, addControl: Z.Xm, removeControl: Z.ez, getContainer: Z.lf, addContextMenu: Z.si, removeContextMenu: Z.$i, addOverlay: Z.Ma, removeOverlay: Z.Uc, clearOverlays: Z.tr, openInfoWindow: Z.Sb, closeInfoWindow: Z.Eb, pointToOverlayPixel: Z.Md, overlayPixelToPoint: Z.Us, getInfoWindow: Z.Je, getOverlays: Z.Zx, getPanes: function () {
        return{floatPane: this.Yb.Nr, markerMouseTarget: this.Yb.Go, floatShadow: this.Yb.Or, labelPane: this.Yb.ts, markerPane: this.Yb.Cs, markerShadow: this.Yb.Ds, mapPane: this.Yb.Zk}
      }, addTileLayer: Z.ti, removeTileLayer: Z.aj, pixelToPoint: Z.Ka, pointToPixel: Z.ab});
      var Ec = Vb[u];
      Y(Ec, {getTileLayer: Ec.ly, getMinZoom: Ec.kh, getMaxZoom: Ec.ng, getProjection: Ec.Oi, getTextColor: Ec.Pi, getTips: Ec.Qi});
      Y(window, {BMAP_NORMAL_MAP: za, BMAP_PERSPECTIVE_MAP: Aa, BMAP_SATELLITE_MAP: Ca, BMAP_HYBRID_MAP: Da});
      var Fc = T[u];
      Y(Fc, {lngLatToPoint: Fc.Fo, pointToLngLat: Fc.kl});
      var Gc = Pa[u];
      Y(Gc, {lngLatToPoint: Gc.Fo, pointToLngLat: Gc.kl});
      var Hc = Na[u];
      Y(Hc, {equals: Hc.Gb, containsPoint: Hc.fx, containsBounds: Hc.dx, intersects: Hc.is, extend: Hc[x], getCenter: Hc.Fa, isEmpty: Hc.Pe, getSouthWest: Hc.Fd, getNorthEast: Hc.Ed, toSpan: Hc.jp});
      var Ic = Cb[u];
      Y(Ic, {isVisible: Ic.Qe, show: Ic.show, hide: Ic.H});
      Cb.getZIndex = Cb.Ri;
      var Jc = Oa[u];
      Y(Jc, {openInfoWindow: Jc.Sb, closeInfoWindow: Jc.Eb, enableMassClear: Jc.He, disableMassClear: Jc.rx, show: Jc.show, hide: Jc.H, getMap: Jc.ho});
      var Kc = V[u];
      Y(Kc, {setIcon: Kc.re, getIcon: Kc.Xr, setPosition: Kc.aa, getPosition: Kc.V, setOffset: Kc.Cc, getOffset: Kc.Ke, getLabel: Kc.Yr, setLabel: Kc.Ah, setTitle: Kc.xb, setTop: Kc.Ch, enableDragging: Kc.mb, disableDragging: Kc.Bn, setZIndex: Kc.sl, getMap: Kc.ho, addContextMenu: Kc.si, removeContextMenu: Kc.$i, setAnimation: Kc.Eg, setShadow: Kc.rl, hide: Kc.H});
      Y(window, {BMAP_ANIMATION_DROP: 1, BMAP_ANIMATION_BOUNCE: 2});
      var Lc = Ib[u];
      Y(Lc, {setStyle: Lc.Wb, setStyles: Lc.tf, setContent: Lc.dc, setPosition: Lc.aa, getPosition: Lc.V, setOffset: Lc.Cc, getOffset: Lc.Ke, setTitle: Lc.xb, setZIndex: Lc.sl, getMap: Lc.ho});
      var Mc = Gb[u];
      Y(Mc, {setImageUrl: Mc.tz, setSize: Mc.od, setAnchor: Mc.wb, setImageOffset: Mc.ej, setImageSize: Mc.rz, setInfoWindowAnchor: Mc.uz, setPrintImageUrl: Mc.Az});
      var Nc = Hb[u];
      Y(Nc, {redraw: Nc.Ub, setTitle: Nc.xb, setContent: Nc.dc, getContent: Nc.Nx, getPosition: Nc.V, enableMaximize: Nc.Cd, disableMaximize: Nc.Ek, isOpen: Nc.pa, setMaxContent: Nc.fj, maximize: Nc.$k, enableAutoPan: Nc.Di});
      var Oc = Eb[u];
      Y(Oc, {getPath: Oc.ac, setPath: Oc.fc, setPositionAt: Oc.Gg, getStrokeColor: Oc.gy, setStrokeWeight: Oc.jj, getStrokeWeight: Oc.bs, setStrokeOpacity: Oc.hj, getStrokeOpacity: Oc.hy, setFillOpacity: Oc.ol, getFillOpacity: Oc.Sx, setStrokeStyle: Oc.ij, getStrokeStyle: Oc.as, getFillColor: Oc.Rx, getBounds: Oc.kf, enableEditing: Oc.bd, disableEditing: Oc.qx});
      var Pc = Nb[u];
      Y(Pc, {setCenter: Pc.nd, getCenter: Pc.Fa, getRadius: Pc.by, setRadius: Pc.ql});
      var Qc = Lb[u];
      Y(Qc, {getPath: Qc.ac, setPath: Qc.fc, setPositionAt: Qc.Gg});
      var Rc = Qa[u];
      Y(Rc, {getPosition: Rc.V, setPosition: Rc.aa, getText: Rc.oo, setText: Rc.kj});
      L[u].equals = L[u].Gb;
      S[u].equals = S[u].Gb;
      P[u].equals = P[u].Gb;
      Y(window, {BMAP_ANCHOR_TOP_LEFT: ob, BMAP_ANCHOR_TOP_RIGHT: pb, BMAP_ANCHOR_BOTTOM_LEFT: qb, BMAP_ANCHOR_BOTTOM_RIGHT: 3});
      var Sc = nb[u];
      Y(Sc, {setAnchor: Sc.wb, getAnchor: Sc.Tn, setOffset: Sc.Cc, getOffset: Sc.Ke, show: Sc.show, hide: Sc.H, isVisible: Sc.Qe, toString: Sc.toString});
      var Tc = rb[u];
      Y(Tc, {getType: Tc.ph, setType: Tc.Hg});
      Y(window, {BMAP_NAVIGATION_CONTROL_LARGE: 0, BMAP_NAVIGATION_CONTROL_SMALL: 1, BMAP_NAVIGATION_CONTROL_PAN: 2, BMAP_NAVIGATION_CONTROL_ZOOM: 3});
      var Uc = ub[u];
      Y(Uc, {changeView: Uc.Zb, setSize: Uc.od, getSize: Uc.wc});
      var Vc = vb[u];
      Y(Vc, {getUnit: Vc.oy, setUnit: Vc.dp});
      Y(window, {BMAP_UNIT_METRIC: "metric", BMAP_UNIT_IMPERIAL: "us"});
      var Wc = tb[u];
      Y(Wc, {addCopyright: Wc.ok, removeCopyright: Wc.So, getCopyright: Wc.kg, getCopyrightCollection: Wc.Xn});
      Y(window, {BMAP_MAPTYPE_CONTROL_HORIZONTAL: wb, BMAP_MAPTYPE_CONTROL_DROPDOWN: 1});
      var Xc = Qb[u];
      Y(Xc, {getMapType: Xc.da, getCopyright: Xc.kg, isTransparentPng: Xc.Do});
      var Yc = yb[u];
      Y(Yc, {addItem: Yc.qk, addSeparator: Yc.Ym, removeSeparator: Yc.To});
      var Zc = zb[u];
      Y(Zc, {setText: Zc.kj});
      var $c = X[u];
      Y($c, {getStatus: $c.pg, setSearchCompleteCallback: $c.bp, getPageCapacity: $c.Oc, setPageCapacity: $c.Bh, setLocation: $c.Fg, disableFirstResultSelection: $c.Cn, enableFirstResultSelection: $c.Kn, gotoPage: $c.rg, searchNearby: $c.zh, searchInBounds: $c.Dg, search: $c.search});
      Y(window, {BMAP_STATUS_SUCCESS: 0, BMAP_STATUS_CITY_LIST: 1, BMAP_STATUS_UNKNOWN_LOCATION: 2, BMAP_STATUS_UNKNOWN_ROUTE: 3, BMAP_STATUS_INVALID_KEY: 4, BMAP_STATUS_INVALID_REQUEST: 5, BMAP_STATUS_PERMISSION_DENIED: 6, BMAP_STATUS_SERVICE_UNAVAILABLE: 7, BMAP_STATUS_TIMEOUT: 8});
      Y(window, {BMAP_POI_TYPE_NORMAL: 0, BMAP_POI_TYPE_BUSSTOP: 1, BMAP_POI_TYPE_BUSLINE: 2, BMAP_POI_TYPE_SUBSTOP: 3, BMAP_POI_TYPE_SUBLINE: 4});
      Y(window, {BMAP_TRANSIT_POLICY_LEAST_TIME: 0, BMAP_TRANSIT_POLICY_LEAST_TRANSFER: 2, BMAP_TRANSIT_POLICY_LEAST_WALKING: 3, BMAP_TRANSIT_POLICY_AVOID_SUBWAYS: 4, BMAP_LINE_TYPE_BUS: 0, BMAP_LINE_TYPE_SUBWAY: 1, BMAP_LINE_TYPE_FERRY: 2});
      var ad = sc[u];
      Y(ad, {clearResults: ad.tc});
      var bd = tc[u];
      Y(bd, {setPolicy: bd.gj, toString: bd.toString, setPageCapacity: bd.Bh});
      Y(window, {BMAP_DRIVING_POLICY_LEAST_TIME: 0, BMAP_DRIVING_POLICY_LEAST_DISTANCE: 1, BMAP_DRIVING_POLICY_AVOID_HIGHWAYS: 2});
      Y(window, {BMAP_HIGHLIGHT_STEP: 1, BMAP_HIGHLIGHT_ROUTE: 2});
      Y(window, {BMAP_ROUTE_TYPE_DRIVING: fc, BMAP_ROUTE_TYPE_WALKING: ec});
      Y(window, {BMAP_ROUTE_STATUS_NORMAL: gc, BMAP_ROUTE_STATUS_EMPTY: 1, BMAP_ROUTE_STATUS_ADDRESS: 2});
      var cd = vc[u];
      Y(cd, {setPolicy: cd.gj});
      var dd = Dc[u];
      Y(dd, {show: dd.show, hide: dd.H, setTypes: dd.cp, setLocation: dd.Fg, search: dd.search, setInputValue: dd.pl});
      var ed = Bc[u];
      Y(ed, {get: ed.get});
      J.Nw();
    })()
    var BMapLib = window.BMapLib = BMapLib || {}, BMAPLIB_TAB_SEARCH = 0, BMAPLIB_TAB_TO_HERE = 1, BMAPLIB_TAB_FROM_HERE = 2;
    !function () {
      function t(t, e) {
        this._point = t, this.guid = e
      }

      function e(t) {
        this.iw = t
      }

      function i(t) {
        var e = document.createElement("script");
        e.setAttribute("type", "text/javascript"), e.setAttribute("src", t), e.addEventListener ? e.addEventListener("load", function (t) {
          var e = t.target || t.srcElement;
          e.parentNode.removeChild(e)
        }, !1) : e.attachEvent && e.attachEvent("onreadystatechange", function () {
          var t = window.event.srcElement;
          !t || "loaded" != t.readyState && "complete" != t.readyState || t.parentNode.removeChild(t)
        }), setTimeout(function () {
          document.getElementsByTagName("head")[0].appendChild(e), e = null
        }, 1)
      }

      var n, s = n = s || {version: "1.5.0"};
      s.guid = "$BAIDU$", function () {
        window[s.guid] = window[s.guid] || {}, s.lang = s.lang || {}, s.lang.isString = function (t) {
          return"[object String]" == Object.prototype.toString.call(t)
        }, s.lang.Event = function (t, e) {
          this.type = t, this.returnValue = !0, this.target = e || null, this.currentTarget = null
        }, s.object = s.object || {}, s.extend = s.object.extend = function (t, e) {
          for (var i in e)e.hasOwnProperty(i) && (t[i] = e[i]);
          return t
        }, s.event = s.event || {}, s.event._listeners = s.event._listeners || [], s.dom = s.dom || {}, s.dom._g = function (t) {
          return s.lang.isString(t) ? document.getElementById(t) : t
        }, s._g = s.dom._g, s.event.on = function (t, e, i) {
          e = e.replace(/^on/i, ""), t = s.dom._g(t);
          var n, o = function (e) {
            i.call(t, e)
          }, a = s.event._listeners, r = s.event._eventFilter, h = e;
          return e = e.toLowerCase(), r && r[e] && (n = r[e](t, e, o), h = n.type, o = n.listener), t.addEventListener ? t.addEventListener(h, o, !1) : t.attachEvent && t.attachEvent("on" + h, o), a[a.length] = [t, e, i, o, h], t
        }, s.on = s.event.on, s.event.un = function (t, e, i) {
          t = s.dom._g(t), e = e.replace(/^on/i, "").toLowerCase();
          for (var n, o, a, r = s.event._listeners, h = r.length, d = !i; h--;)n = r[h], n[1] !== e || n[0] !== t || !d && n[2] !== i || (o = n[4], a = n[3], t.removeEventListener ? t.removeEventListener(o, a, !1) : t.detachEvent && t.detachEvent("on" + o, a), r.splice(h, 1));
          return t
        }, s.un = s.event.un, s.dom.g = function (t) {
          return"string" == typeof t || t instanceof String ? document.getElementById(t) : t && t.nodeName && (1 == t.nodeType || 9 == t.nodeType) ? t : null
        }, s.g = s.G = s.dom.g, s.string = s.string || {}, s.browser = s.browser || {}, s.browser.ie = s.ie = /msie (\d+\.\d+)/i.test(navigator.userAgent) ? document.documentMode || +RegExp.$1 : void 0, s.dom._NAME_ATTRS = function () {
          var t = {cellpadding: "cellPadding", cellspacing: "cellSpacing", colspan: "colSpan", rowspan: "rowSpan", valign: "vAlign", usemap: "useMap", frameborder: "frameBorder"};
          return s.browser.ie < 8 ? (t["for"] = "htmlFor", t["class"] = "className") : (t.htmlFor = "for", t.className = "class"), t
        }(), s.dom.setAttr = function (t, e, i) {
          return t = s.dom.g(t), "style" == e ? t.style.cssText = i : (e = s.dom._NAME_ATTRS[e] || e, t.setAttribute(e, i)), t
        }, s.setAttr = s.dom.setAttr, s.dom.setAttrs = function (t, e) {
          t = s.dom.g(t);
          for (var i in e)s.dom.setAttr(t, i, e[i]);
          return t
        }, s.setAttrs = s.dom.setAttrs, s.dom.create = function (t, e) {
          var i = document.createElement(t), n = e || {};
          return s.dom.setAttrs(i, n)
        }, s.cookie = s.cookie || {}, s.cookie._isValidKey = function (t) {
          return new RegExp('^[^\\x00-\\x20\\x7f\\(\\)<>@,;:\\\\\\"\\[\\]\\?=\\{\\}\\/\\u0080-\\uffff]+$').test(t)
        }, s.cookie.getRaw = function (t) {
          if (s.cookie._isValidKey(t)) {
            var e = new RegExp("(^| )" + t + "=([^;]*)(;|$)"), i = e.exec(document.cookie);
            if (i)return i[2] || null
          }
          return null
        }, s.cookie.get = function (t) {
          var e = s.cookie.getRaw(t);
          return"string" == typeof e ? e = decodeURIComponent(e) : null
        }, s.cookie.setRaw = function (t, e, i) {
          if (s.cookie._isValidKey(t)) {
            i = i || {};
            var n = i.expires;
            "number" == typeof i.expires && (n = new Date, n.setTime(n.getTime() + i.expires)), document.cookie = t + "=" + e + (i.path ? "; path=" + i.path : "") + (n ? "; expires=" + n.toGMTString() : "") + (i.domain ? "; domain=" + i.domain : "") + (i.secure ? "; secure" : "")
          }
        }, s.cookie.set = function (t, e, i) {
          s.cookie.setRaw(t, encodeURIComponent(e), i)
        }, s.cookie.remove = function (t, e) {
          e = e || {}, e.expires = new Date(0), s.cookie.setRaw(t, "", e)
        }, s.isPhone = function (t) {
          return/\d{11}/.test(t)
        }, s.isActivateCode = function (t) {
          return/\d{4}/.test(t)
        }, n.undope = !0
      }();
      var o = BMapLib.SearchInfoWindow = function (t, e, i) {
        this.guid = r++, BMapLib.SearchInfoWindow.instance[this.guid] = this, this._isOpen = !1, this._map = t, this._opts = i = i || {}, this._content = e || "", this._opts.width = i.width, this._opts.height = i.height, this._opts._title = i.title || "", this._opts.offset = i.offset || new BMap.Size(0, 0), this._opts.enableAutoPan = i.enableAutoPan === !1 ? !1 : !0, this._opts._panel = i.panel || null, this._opts._searchTypes = i.searchTypes, this._opts.enableSendToPhone = i.enableSendToPhone
      };
      o.prototype = new BMap.Overlay, o.prototype.initialize = function (t) {
        this._closeOtherSearchInfo();
        var e = this, i = this._createSearchTemplate(), n = t.getPanes().floatPane;
        return n.style.width = "auto", n.appendChild(i), this._initSearchTemplate(), this._getSearchInfoWindowSize(), this._boxWidth = parseInt(this.container.offsetWidth, 10), this._boxHeight = parseInt(this.container.offsetHeight, 10), s.event.on(i, "onmousedown", function (t) {
          e._stopBubble(t)
        }), s.event.on(i, "ontouchstart", function (t) {
          e._stopBubble(t)
        }), s.event.on(i, "touchmove", function (t) {
          e._stopBubble(t)
        }), s.event.on(i, "touchend", function (t) {
          e._stopBubble(t)
        }), s.event.on(i, "onmouseover", function (t) {
          e._stopBubble(t)
        }), s.event.on(i, "click", function (t) {
          e._stopBubble(t)
        }), s.event.on(i, "dblclick", function (t) {
          e._stopBubble(t)
        }), i
      }, o.prototype.draw = function () {
        this._isOpen && this._adjustPosition(this._point)
      }, o.prototype.open = function (t) {
        this._map.closeInfoWindow();
        var e, i = this;
        this._isOpen || (this._map.addOverlay(this), this._isOpen = !0, setTimeout(function () {
          i._dispatchEvent(i, "open", {point: i._point})
        }, 10)), t instanceof BMap.Point ? (e = t, this._removeMarkerEvt(), this._marker = null) : t instanceof BMap.Marker && (this._marker && this._removeMarkerEvt(), e = t.getPosition(), this._marker = t, !this._markerDragend && this._marker.addEventListener("dragend", this._markerDragend = function (t) {
          i._point = t.point, i._adjustPosition(i._point), i._panBox(), i.show()
        }), !this._markerDragging && this._marker.addEventListener("dragging", this._markerDragging = function () {
          i.hide(), i._point = i._marker.getPosition(), i._adjustPosition(i._point)
        })), this.show(), this._point = e, this._panBox(), this._adjustPosition(this._point)
      }, o.prototype.close = function () {
        this._isOpen && (this._map.removeOverlay(this), this._disposeAutoComplete(), this._isOpen = !1, this._dispatchEvent(this, "close", {point: this._point}))
      }, o.prototype.enableAutoPan = function () {
        this._opts.enableAutoPan = !0
      }, o.prototype.disableAutoPan = function () {
        this._opts.enableAutoPan = !1
      }, o.prototype.setContent = function (t) {
        this._setContent(t), this._getSearchInfoWindowSize(), this._adjustPosition(this._point)
      }, o.prototype.setTitle = function (t) {
        this.dom.title.innerHTML = t, this._opts._title = t
      }, o.prototype.getContent = function () {
        return this.dom.content.innerHTML
      }, o.prototype.getTitle = function () {
        return this.dom.title.innerHTML
      }, o.prototype.setPosition = function (t) {
        this._point = t, this._adjustPosition(t), this._panBox(), this._removeMarkerEvt()
      }, o.prototype.getPosition = function () {
        return this._point
      }, o.prototype.getOffset = function () {
        return this._opts.offset
      }, s.object.extend(o.prototype, {_closeOtherSearchInfo: function () {
        for (var t = BMapLib.SearchInfoWindow.instance, e = t.length; e--;)t[e]._isOpen && t[e].close()
      }, _setContent: function (t) {
        if (this.dom && this.dom.content) {
          "undefined" == typeof t.nodeType ? this.dom.content.innerHTML = t : this.dom.content.appendChild(t);
          var e = this;
          e._adjustContainerWidth(), this._content = t
        }
      }, _adjustPosition: function (t) {
        var e = this._getPointPosition(t), i = this._marker && this._marker.getIcon();
        this._marker ? (this.container.style.bottom = -(e.y - this._opts.offset.height - i.anchor.height + i.infoWindowAnchor.height) - this._marker.getOffset().height + 2 + 30 + "px", this.container.style.left = e.x - i.anchor.width + this._marker.getOffset().width + i.infoWindowAnchor.width - this._boxWidth / 2 + 28 + "px") : (this.container.style.bottom = -(e.y - this._opts.offset.height) + 30 + "px", this.container.style.left = e.x - this._boxWidth / 2 + 25 + "px")
      }, _getPointPosition: function (t) {
        return this._pointPosition = this._map.pointToOverlayPixel(t), this._pointPosition
      }, _getSearchInfoWindowSize: function () {
        this._boxWidth = parseInt(this.container.offsetWidth, 10), this._boxHeight = parseInt(this.container.offsetHeight, 10)
      }, _stopBubble: function (t) {
        t && t.stopPropagation ? t.stopPropagation() : window.event.cancelBubble = !0
      }, _panBox: function () {
        if (this._opts.enableAutoPan) {
          var t = parseInt(this._map.getContainer().offsetHeight, 10), e = parseInt(this._map.getContainer().offsetWidth, 10), i = this._boxHeight, n = this._boxWidth;
          if (!(i >= t || n >= e)) {
            this._map.getBounds().containsPoint(this._point) || this._map.setCenter(this._point);
            var s, o, a = this._map.pointToPixel(this._point), r = n / 2 - 28 - a.x + 10, h = n / 2 + 28 + a.x - e + 10;
            if (this._marker)var d = this._marker.getIcon();
            var c = this._marker ? d.anchor.height + this._marker.getOffset().height - d.infoWindowAnchor.height : 0;
            s = i - a.y + this._opts.offset.height + c + 31 + 10, panX = r > 0 ? r : h > 0 ? -h : 0, o = s > 0 ? s : 0, this._map.panBy(panX, o)
          }
        }
      }, _removeMarkerEvt: function () {
        this._markerDragend && this._marker.removeEventListener("dragend", this._markerDragend), this._markerDragging && this._marker.removeEventListener("dragging", this._markerDragging), this._markerDragend = this._markerDragging = null
      }, _dispatchEvent: function (t, e, i) {
        0 != e.indexOf("on") && (e = "on" + e);
        var n = new s.lang.Event(e);
        if (i)for (var o in i)n[o] = i[o];
        t.dispatchEvent(n)
      }, _initSearchTemplate: function () {
        this._initDom(), this._initPanelTemplate(), this.setTitle(this._opts._title), this._opts.height && (this.dom.content.style.height = parseInt(this._opts.height, 10) + "px"), this._setContent(this._content), this._initService(), this._bind(), this._opts._searchTypes && this._setSearchTypes(), this._mendIE6()
      }, _createSearchTemplate: function () {
        if (!this._div) {
          var t = s.dom.create("div", {"class": "BMapLib_SearchInfoWindow", id: "BMapLib_SearchInfoWindow" + this.guid}), e = ['<div class="BMapLib_bubble_top">', '<div class="BMapLib_bubble_title" id="BMapLib_bubble_title' + this.guid + '"></div>', '<div class="BMapLib_bubble_tools">', '<div class="BMapLib_bubble_close" title="关闭" id="BMapLib_bubble_close' + this.guid + '">', "</div>", '<div class="BMapLib_sendToPhone" title="发送到手机" id="BMapLib_sendToPhone' + this.guid + '">', "</div>", "</div>", "</div>", '<div class="BMapLib_bubble_center">', '<div class="BMapLib_bubble_content" id="BMapLib_bubble_content' + this.guid + '">', "</div>", '<div class="BMapLib_nav" id="BMapLib_nav' + this.guid + '">', '<ul class="BMapLib_nav_tab" id="BMapLib_nav_tab' + this.guid + '">', '<li class="BMapLib_first BMapLib_current" id="BMapLib_tab_search' + this.guid + '" style="display:block;">', '<span class="BMapLib_icon BMapLib_icon_nbs"></span>在附近找', "</li>", '<li class="" id="BMapLib_tab_tohere' + this.guid + '" style="display:block;">', '<span class="BMapLib_icon BMapLib_icon_tohere"></span>到这里去', "</li>", '<li class="" id="BMapLib_tab_fromhere' + this.guid + '" style="display:block;">', '<span class="BMapLib_icon BMapLib_icon_fromhere"></span>从这里出发', "</li>", "</ul>", '<ul class="BMapLib_nav_tab_content">', '<li id="BMapLib_searchBox' + this.guid + '">', '<table width="100%" align="center" border=0 cellpadding=0 cellspacing=0>', '<tr><td style="padding-left:8px;"><input id="BMapLib_search_text' + this.guid + '" class="BMapLib_search_text" type="text" maxlength="100" autocomplete="off"></td><td width="55" style="padding-left:7px;"><input id="BMapLib_search_nb_btn' + this.guid + '" type="submit" value="搜索" class="iw_bt"></td></tr>', "</table>", "</li>", '<li id="BMapLib_transBox' + this.guid + '" style="display:none">', '<table width="100%" align="center" border=0 cellpadding=0 cellspacing=0>', '<tr><td width="30" style="padding-left:8px;"><div id="BMapLib_stationText' + this.guid + '">起点</div></td><td><input id="BMapLib_trans_text' + this.guid + '" class="BMapLib_trans_text" type="text" maxlength="100" autocomplete="off"></td><td width="106" style="padding-left:7px;"><input id="BMapLib_search_bus_btn' + this.guid + '" type="button" value="公交" class="iw_bt" style="margin-right:5px;"><input id="BMapLib_search_drive_btn' + this.guid + '" type="button" class="iw_bt" value="驾车"></td></tr>', "</table>", "</li>", "</ul>", "</div>", "</div>", '<div class="BMapLib_bubble_bottom"></div>', '<img src="http://api.map.baidu.com/library/SearchInfoWindow/1.4/src/iw_tail.png" width="58" height="31" alt="" class="BMapLib_trans" id="BMapLib_trans' + this.guid + '" style="left:144px;"/>'];
          t.innerHTML = e.join(""), this._div = t
        }
        return this._div
      }, _initPanelTemplate: function () {
        var t = s.g(this._opts._panel);
        if (!this.dom.panel && t) {
          t.innerHTML = "", this.dom.panel = t;
          var e = s.dom.create("div");
          e.style.cssText = "display:none;background:#FD9;height:30px;line-height:30px;text-align:center;font-size:12px;color:#994C00;", t.appendChild(e), this.dom.panel.address = e;
          var i = s.dom.create("div");
          t.appendChild(i), this.dom.panel.localSearch = i
        }
      }, _initDom: function () {
        this.dom || (this.dom = {container: s.g("BMapLib_SearchInfoWindow" + this.guid), content: s.g("BMapLib_bubble_content" + this.guid), title: s.g("BMapLib_bubble_title" + this.guid), closeBtn: s.g("BMapLib_bubble_close" + this.guid), transIco: s.g("BMapLib_trans" + this.guid), navBox: s.g("BMapLib_nav" + this.guid), navTab: s.g("BMapLib_nav_tab" + this.guid), seartTab: s.g("BMapLib_tab_search" + this.guid), tohereTab: s.g("BMapLib_tab_tohere" + this.guid), fromhereTab: s.g("BMapLib_tab_fromhere" + this.guid), searchBox: s.g("BMapLib_searchBox" + this.guid), transBox: s.g("BMapLib_transBox" + this.guid), stationText: s.g("BMapLib_stationText" + this.guid), nbBtn: s.g("BMapLib_search_nb_btn" + this.guid), busBtn: s.g("BMapLib_search_bus_btn" + this.guid), driveBtn: s.g("BMapLib_search_drive_btn" + this.guid), searchText: s.g("BMapLib_search_text" + this.guid), transText: s.g("BMapLib_trans_text" + this.guid), sendToPhoneBtn: s.g("BMapLib_sendToPhone" + this.guid)}, this.container = this.dom.container)
      }, _adjustContainerWidth: function () {
        var t = 250;
        this._opts.width ? (t = parseInt(this._opts.width, 10), t += 10) : t = parseInt(this.dom.content.offsetWidth, 10), 250 > t && (t = 250), this._width = t, this.container.style.width = this._width + "px", this._adjustTransPosition()
      }, _adjustTransPosition: function () {
        this.dom.transIco.style.left = this.container.offsetWidth / 2 - 2 - 29 + "px", this.dom.transIco.style.top = this.container.offsetHeight - 2 + "px"
      }, _initService: function () {
        var t = this._map, e = this, i = {};
        i.map = t, this.dom.panel && (i.panel = this.dom.panel.localSearch), this.localSearch || (this.localSearch = new BMap.LocalSearch(t, {renderOptions: i, onSearchComplete: function () {
          e._clearAddress(), e._drawCircleBound()
        }})), this.transitRoute || (this.transitRoute = new BMap.TransitRoute(t, {renderOptions: i, onSearchComplete: function (t) {
          e._transitRouteComplete(e.transitRoute, t)
        }})), this.drivingRoute || (this.drivingRoute = new BMap.DrivingRoute(t, {renderOptions: i, onSearchComplete: function (t) {
          e._transitRouteComplete(e.drivingRoute, t)
        }}))
      }, _bind: function () {
        var t = this;
        s.on(this.dom.closeBtn, "click", function () {
          t.close()
        }), s.on(this.dom.closeBtn, "touchstart", function () {
          t.close()
        }), s.on(this.dom.sendToPhoneBtn, "click", function () {
          t._sendToPhone()
        }), s.on(this.dom.sendToPhoneBtn, "touchstart", function () {
          t._sendToPhone()
        }), s.on(this.dom.seartTab, "click", function () {
          t._showTabContent(BMAPLIB_TAB_SEARCH)
        }), s.on(this.dom.seartTab, "touchstart", function () {
          t._showTabContent(BMAPLIB_TAB_SEARCH)
        }), s.on(this.dom.tohereTab, "click", function () {
          t._showTabContent(BMAPLIB_TAB_TO_HERE)
        }), s.on(this.dom.tohereTab, "touchstart", function () {
          t._showTabContent(BMAPLIB_TAB_TO_HERE)
        }), s.on(this.dom.fromhereTab, "click", function () {
          t._showTabContent(BMAPLIB_TAB_FROM_HERE)
        }), s.on(this.dom.fromhereTab, "touchstart", function () {
          t._showTabContent(BMAPLIB_TAB_FROM_HERE)
        }), s.on(this.dom.searchText, "click", function () {
          t._localSearchAction()
        }), s.on(this.dom.searchText, "touchstart", function () {
          t._localSearchAction()
        }), s.on(this.dom.nbBtn, "click", function () {
          t._localSearchAction()
        }), s.on(this.dom.nbBtn, "touchstart", function () {
          t._localSearchAction()
        }), s.on(this.dom.busBtn, "click", function () {
          t._transitRouteAction(t.transitRoute)
        }), s.on(this.dom.busBtn, "touchstart", function () {
          t._transitRouteAction(t.transitRoute)
        }), s.on(this.dom.driveBtn, "click", function () {
          t._transitRouteAction(t.drivingRoute)
        }), s.on(this.dom.driveBtn, "touchstart", function () {
          t._transitRouteAction(t.drivingRoute)
        }), this._autoCompleteIni(), this._opts.enableSendToPhone === !1 && (this.dom.sendToPhoneBtn.style.display = "none")
      }, _showTabContent: function (t) {
        this._hideAutoComplete();
        for (var e = this.dom.navTab.getElementsByTagName("li"), i = e.length, n = 0, i = e.length; i > n; n++)e[n].className = "";
        switch (t) {
          case BMAPLIB_TAB_SEARCH:
            this.dom.seartTab.className = "BMapLib_current", this.dom.searchBox.style.display = "block", this.dom.transBox.style.display = "none";
            break;
          case BMAPLIB_TAB_TO_HERE:
            this.dom.tohereTab.className = "BMapLib_current", this.dom.searchBox.style.display = "none", this.dom.transBox.style.display = "block", this.dom.stationText.innerHTML = "起点", this._pointType = "endPoint";
            break;
          case BMAPLIB_TAB_FROM_HERE:
            this.dom.fromhereTab.className = "BMapLib_current", this.dom.searchBox.style.display = "none", this.dom.transBox.style.display = "block", this.dom.stationText.innerHTML = "终点", this._pointType = "startPoint"
        }
        this._firstTab.className += " BMapLib_first"
      }, _autoCompleteIni: function () {
        this.searchAC = new BMap.Autocomplete({input: this.dom.searchText, location: this._map}), this.transAC = new BMap.Autocomplete({input: this.dom.transText, location: this._map})
      }, _hideAutoComplete: function () {
        this.searchAC.hide(), this.transAC.hide()
      }, _disposeAutoComplete: function () {
        this.searchAC.dispose(), this.transAC.dispose()
      }, _localSearchAction: function () {
        var t = this._kw = this.dom.searchText.value;
        if ("" == t)this.dom.searchText.focus(); else {
          this._reset(), this.close();
          var e = this._radius = 1e3;
          this.localSearch.searchNearby(t, this._point, e)
        }
      }, _drawCircleBound: function () {
        this._closeCircleBound();
        var e = this._searchCircle = new BMap.Circle(this._point, this._radius, {strokeWeight: 3, strokeOpacity: .4, strokeColor: "#e00", filColor: "#00e", fillOpacity: .4}), i = this._searchLabel = new t(this._point, this.guid);
        this._map.addOverlay(e), this._map.addOverlay(i), this._hasCircle = !0
      }, _changeSearchRadius: function () {
        var t = parseInt(s.g("BMapLib_search_radius" + this.guid).value, 10);
        t > 0 && t != this._radius && (this._radius = t, this.localSearch.searchNearby(this._kw, this._point, t), this._closeCircleBound())
      }, _closeCircleBound: function () {
        this._searchCircle && this._map.removeOverlay(this._searchCircle), this._searchLabel && this._map.removeOverlay(this._searchLabel), this._hasCircle = !1
      }, _transitRouteAction: function (t) {
        var e = this.dom.transText.value;
        if ("" == e)this.dom.transText.focus(); else {
          this._reset(), this.close();
          var i = this._getTransPoi(e);
          t.search(i.start, i.end)
        }
      }, _transitRouteComplete: function (t, e) {
        this._clearAddress();
        var i = t.getStatus();
        if (i == BMAP_STATUS_UNKNOWN_ROUTE) {
          var n = e.getStartStatus(), s = e.getEndStatus(), o = "";
          o = "找不到相关的线路", n == BMAP_ROUTE_STATUS_EMPTY && s == BMAP_ROUTE_STATUS_EMPTY ? o = "找不到相关的起点和终点" : (n == BMAP_ROUTE_STATUS_EMPTY && (o = "找不到相关的起点"), s == BMAP_ROUTE_STATUS_EMPTY && (o = "找不到相关的终点")), "startPoint" == this._pointType && s == BMAP_ROUTE_STATUS_ADDRESS || "endPoint" == this._pointType && n == BMAP_ROUTE_STATUS_ADDRESS ? this._searchAddress(t) : (this.dom.panel.address.style.display = "block", this.dom.panel.address.innerHTML = o)
        }
      }, _searchAddress: function (t) {
        var e = this, i = this.dom.panel;
        if (!this.lsAddress) {
          var n = {map: this._map};
          i && (n.panel = this.dom.panel.localSearch), this.lsAddress = new BMap.LocalSearch(this._map, {renderOptions: n})
        }
        var o = "startPoint" == e._pointType ? "终点" : "起点";
        i && (this.dom.panel.address.style.display = "block", this.dom.panel.address.innerHTML = "请选择准确的" + o), this.lsAddress.setInfoHtmlSetCallback(function (i, n) {
          var a = document.createElement("div");
          a.style.cssText = "position:relative;left:50%;margin:5px 0 0 -30px;width:60px;height:27px;line-height:27px;border:1px solid #E0C3A6;text-align:center;color:#B35900;cursor:pointer;background-color:#FFEECC;border-radius:2px; background-image: -webkit-gradient(linear, left top, left bottom, from(#FFFDF8), to(#FFEECC))", a.innerHTML = "设为" + o, n.appendChild(a), s.on(a, "click", function () {
            e._clearAddress();
            var n = i.marker.getPosition();
            "起点" == o ? t.search(n, e._point) : t.search(e._point, n)
          })
        }), this._reset(), this.lsAddress.search(this.dom.transText.value)
      }, _getTransPoi: function (t) {
        var e, i;
        return"startPoint" == this._pointType ? (e = this._point, i = t) : (e = t, i = this._point), {start: e, end: i}
      }, _setSearchTypes: function () {
        var t, e = this._unique(this._opts._searchTypes), i = this.dom.navTab, n = [this.dom.seartTab, this.dom.tohereTab, this.dom.fromhereTab], o = 0, a = 0, r = 0;
        if (this.tabLength = e.length, tabWidth = Math.floor((this._width - this.tabLength + 1) / this.tabLength), 0 == e.length)this.dom.navBox.style.display = "none"; else {
          for (o = 0, a = n.length; a > o; o++)n[o].className = "", n[o].style.display = "none";
          for (o = 0; o < this.tabLength; o++) {
            if (t = n[e[o]], 0 == o && (t.className = "BMapLib_first BMapLib_current", this._firstTab = t, r = e[o]), o == this.tabLength - 1) {
              var h = this._width - (this.tabLength - 1) * (tabWidth + 1);
              t.style.width = 6 == s.browser.ie ? h - 3 + "px" : h + "px"
            } else t.style.width = tabWidth + "px";
            t.style.display = "block"
          }
          void 0 != e[1] && i.appendChild(n[e[1]]), void 0 != e[2] && i.appendChild(n[e[2]]), this._showTabContent(r)
        }
        this._adjustTransPosition()
      }, _unique: function (t) {
        for (var e, i, n = t.length, s = t.slice(0); --n >= 0;)if (i = s[n], 0 > i || i > 2)s.splice(n, 1); else for (e = n; e--;)if (i == s[e]) {
          s.splice(n, 1);
          break
        }
        return s
      }, _reset: function () {
        this.localSearch.clearResults(), this.transitRoute.clearResults(), this.drivingRoute.clearResults(), this._closeCircleBound(), this._hideAutoComplete()
      }, _clearAddress: function () {
        this.lsAddress && this.lsAddress.clearResults(), this.dom.panel && (this.dom.panel.address.style.display = "none")
      }, _mendIE6: function () {
        if (s.browser.ie && !(s.browser.ie > 6))for (var t = this.container.getElementsByTagName("IMG"), e = 0; e < t.length; e++)t[e].src.indexOf(".png") < 0 || (t[e].style.cssText += ";FILTER: progid:DXImageTransform.Microsoft.AlphaImageLoader(src=" + t[e].src + ",sizingMethod=crop)", t[e].src = "http://api.map.baidu.com/images/blank.gif")
      }, _sendToPhone: function () {
        this.showPopup()
      }, showPopup: function () {
        this.pop || (this.pop = new e(this)), this._map.addOverlay(this.pop)
      }}), t.prototype = new BMap.Overlay, t.prototype.initialize = function (t) {
        function e(t) {
          t && t.stopPropagation ? t.stopPropagation() : window.event.cancelBubble = !0
        }

        this._map = t;
        var i = this._div = document.createElement("div");
        s.on(i, "mousedown", e), s.on(i, "touchstart", e), s.on(i, "click", e), s.on(i, "dblclick", e);
        var n = BMapLib.SearchInfoWindow.instance[this.guid];
        return i.style.cssText = "position:absolute;white-space:nowrap;background:#fff;padding:1px;border:1px solid red;z-index:99;", i.innerHTML = '<input type="text" value="' + n._radius + '" style="width:30px;" id="BMapLib_search_radius' + this.guid + '"/>m <a href="javascript:void(0)" title="修改" onclick="BMapLib.SearchInfoWindow.instance[' + this.guid + ']._changeSearchRadius()" style="font-size:12px;text-decoration:none;color:blue;">修改</a><img src="http://api.map.baidu.com/images/iw_close1d3.gif" alt="关闭" title="关闭" style="cursor:pointer;padding:0 5px;" onclick="BMapLib.SearchInfoWindow.instance[' + this.guid + ']._closeCircleBound()"/>', t.getPanes().labelPane.appendChild(i), i
      }, t.prototype.draw = function () {
        var t = this._map, e = t.pointToOverlayPixel(this._point);
        this._div.style.left = e.x + 10 + "px", this._div.style.top = e.y - 25 + "px"
      };
      var a = "http://api.map.baidu.com";
      e.prototype = new BMap.Overlay, s.extend(e.prototype, {initialize: function (t) {
        return this._map = t, this.container = this.generalDom(), this._map.getContainer().appendChild(this.container), this.initDom(), this.bind(), this.getAddressByPoint(), this.getRememberPhone(), this.addPhoneNum = 0, this.container
      }, draw: function () {
      }, generalDom: function () {
        var t = document.createElement("div"), e = this._map.getSize(), i = 0, n = 0;
        e.width > 450 && (n = (e.width - 450) / 2), e.height > 260 && (i = (e.height - 260) / 2), t.style.cssText = "position:absolute;background:#fff;width:480px;height:260px;top:" + i + "px;left:" + n + "px;ovflow:hidden;";
        var s = ['<div class="BMapLib_sms_tab_container">', "<span>发送到手机</span>", '<span id="BMapLib_sms_tip" style="display:none;">', "</span>", "</div>", '<div id="BMapLib_sms_pnl_phone" class="BMapLib_sms_pnl_phone" style="display: block;">', '<div class="BMapLib_ap" id="pnl_phone_left" style="display: block;">', "<table>", "<tr>", "<th>发送方手机号</th>", '<td><input type="text" bid="" id="BMapLib_phone_0" maxlength="11" class="BMapLib_sms_input BMapLib_sms_input_l" /><span id="BMapLib_activateTip"></span></td>', "</tr>", '<tr id="BMapLib_activateBox" style="display:none;">', "<th>激活码</th>", '<td><input type="text" id="BMapLib_activate" class="BMapLib_sms_input BMapLib_sms_input_s" maxlength="4"/><input type="button" value="获取" id="BMapLib_activate_btn" bid="activate" />', "</tr>", "<tr>", "<th></th>", "<td>", "</td>", "</tr>", "<tr>", '<th style="vertical-align:top;padding-top:7px;">接收方手机号</th>', '<td><div><input type="text" id="BMapLib_phone_1" class="BMapLib_sms_input BMapLib_sms_input_l" maxlength="11"/><input type="checkbox" id="BMapLib_is_remember_phone"/>记住此号</div>', '<div id="BMapLib_add_phone_con"></div>', '<div><a href="javascript:void(0)" id="BMapLib_add_phone_btn" bid="addPhone">新增</a></div>', "</td>", "</tr>", "<tr>", "<th></th>", '<td ><input type="text" id="BMapLib_ver_input"  maxlength="4" style="width:67px;border: 1px solid #a5acb2;vertical-align: middle;height:18px;" tabindex="5" placeholder="验证码"><img width="69" height="20" id="BMapLib_ver_image" bid="BMapLib_ver_image" style="border: 1px solid #d5d5d5;vertical-align:middle;margin-left: 5px;" alt="点击更换数字" title="点击更换数字"></td>', "</tr>", "<tr>", "<th></th>", '<td><input type="button" value="免费发送到手机" bid="sendToPhoneBtn"/></td>', "</tr>", "</table>", "</div>", '<div class="BMapLib_mp" id="pnl_phone_right" style="display: block;">', '<div class="BMapLib_mp_title">短信内容：</div>', '<div id="BMapLib_msgContent" class="BMapLib_msgContent"></div>', "</div>", '<div style="clear:both;"></div>', '<p id="BMapLib_sms_declare_phone" class="BMapLib_sms_declare_phone">百度保证不向任何第三方提供输入的手机号码</p>', '<div id="tipError" class="tip fail" style="display:none;">', '<span id="tipText"></span>', '<a href="javascript:void(0)" id="tipClose" class="cut"></a>', "</div>", '<div id="sms_lack_tip" style="display:none;">已达每日5次短信上限</div>', '<div id="sms_unlogin_tip" style="display:none;">', '<div style="padding-left:40px;">', '<ul class="login_ul"><li id="normal_login-2" class="login_hover"><a href="javascript:void(0)">手机登录</a></li></ul>', '<div id="loginBox_02" class="loginBox">', '<div id="pass_error_info-2" class="pass_error_style"></div>', '<div id="passports-2"></div>', '<div id="loginIframe_iph-2" style="display:none"></div>', "</div>", "</div>", '<div class="nopass" style="padding-left:128px;">没有百度帐号？<a href="https://passport.baidu.com/v2/?reg&amp;regType=1&amp;tpl=ma" target="_blank">立即注册</a></div>', "</div>", "</div>", '<button class="BMapLib_popup_close" bid="close"></button>', '<div id="BMapLib_success_tip" style="display:none;">您的短信已经发送到您的手机，请注意查收!</div>'].join("");
        return t.innerHTML = s, t
      }, initDom: function () {
        this.dom = {sms_tip: s.g("BMapLib_sms_tip"), activate_btn: s.g("BMapLib_activate_btn"), fromphone: s.g("BMapLib_phone_0"), tophone: s.g("BMapLib_phone_1"), isRememberPhone: s.g("BMapLib_is_remember_phone"), sms_container: s.g("BMapLib_sms_pnl_phone"), success_tip: s.g("BMapLib_success_tip"), add_phone_con: s.g("BMapLib_add_phone_con"), add_phone_btn: s.g("BMapLib_add_phone_btn"), activateBox: s.g("BMapLib_activateBox"), activateTip: s.g("BMapLib_activateTip"), activate_input: s.g("BMapLib_activate"), ver_image: s.g("BMapLib_ver_image"), ver_input: s.g("BMapLib_ver_input")}
      }, showTip: function (t) {
        var e = t.error, i = {PHONE_NUM_INVALID: "手机号码无效", SMS_SEND_SUCCESS: "发送到手机成功", AK_INVALID: "你所使用的key无效", INTERNAL_ERROR: "服务器错误", OVER_MAX_ACTIVATE_TIME: "今天已超过发送激活码最大次数", SMS_ACTIVATE_SUCCESS: "激活码已发送到您的手机，请注意查收！", ACTIVATE_FAIL: "手机激活码无效", SMS_LACK: "今天您还能往5个手机发送短信", PARAM_INVALID: "请填完所有选项", SEND_ACTIVATE_FAIL: "激活码发送失败", VCODE_VERITY_FAIL: "验证码校验失败"}, n = i[e];
        if ("SMS_LACK" == e) {
          var s = t.res_sms;
          n = "今天您还能往" + s + "个手机发送短信", this.addPhoneNum = s - 1
        }
        this.renderImageVer(), n && (this.dom.sms_tip.innerHTML = n, this.dom.sms_tip.style.display = "inline"), "SMS_SEND_SUCCESS" == e && (this.rememberPhone(), this.sendSuccess())
      }, bind: function () {
        var t = this;
        t.renderImageVer(), s.on(this.container, "click", function (e) {
          var i = e.target || e.srcElement, n = i.getAttribute("bid");
          switch (n) {
            case"close":
              t.closeActon();
              break;
            case"sendToPhoneBtn":
              t.sendAction();
              break;
            case"activate":
              t.activateAction();
              break;
            case"addPhone":
              t.addPhoneAction();
              break;
            case"deletePhone":
              t.deletePhoneAction(i);
              break;
            case"BMapLib_ver_image":
              t.renderImageVer()
          }
        });
        s.g("BMapLib_phone_0"), s.g("BMapLib_phone_1");
        this.container.onkeypress = function (t) {
          var e = t || window.e, i = e.which || e.keyCode, n = !1;
          return(i >= 48 && 57 >= i || 44 == i || 8 == i) && (n = !0), n
        }, this.dom.ver_input.onkeypress = function (e) {
          t._stopBubble(e);
          var i = e || window.e, n = i.which || i.keyCode, s = !1;
          return(n >= 48 && 57 >= n || n >= 65 && 90 >= n || n >= 97 && 122 >= n) && (s = !0), s
        }, s.on(this.dom.fromphone, "blur", function () {
          s.isPhone(this.value) ? t.checkActivateAction() : (t.dom.activateTip.innerHTML = "", t.dom.activateBox.style.display = "none")
        }), s.on(this.dom.activate_input, "blur", function () {
          s.isActivateCode(this.value) && t.checkActivateAction()
        })
      }, _stopBubble: function (t) {
        t && t.stopPropagation ? t.stopPropagation() : window.event.cancelBubble = !0
      }, renderImageVer: function () {
        var t = this;
        this.request("http://map.baidu.com/maps/services/captcha?", {cbName: "cb"}, function (e) {
          t.vcode = e.content.vcode, t.dom.ver_image.src = "http://map.baidu.com/maps/services/captcha/image?vcode=" + t.vcode
        })
      }, checkActivateAction: function () {
        var t = {phone: this.dom.fromphone.value, activate: this.dom.activate_input.value, cbName: "callback"}, e = this;
        this.request(this.config.ckActivateURL, t, function (t) {
          t && 0 != t.isactivate ? (e.dom.activateBox.style.display = "none", e.dom.activateTip.style.color = "green", e.dom.activateTip.innerHTML = "已激活") : (e.dom.activateBox.style.display = "table-row", e.dom.activateTip.style.color = "red", e.dom.activateTip.innerHTML = "未激活")
        })
      }, activateAction: function () {
        var t = this, e = this._map.getKey(), i = {phone: this.dom.fromphone.value, ak: e, cbName: "callback"};
        s.isPhone(i.phone) ? this.request(this.config.activateURL, i, function (e) {
          e && t.showTip(e)
        }) : this.showTip({error: "PHONE_NUM_INVALID"})
      }, closeActon: function () {
        this._map.removeOverlay(this)
      }, getMessage: function () {
      }, sendAction: function () {
        var t = this;
        if (this.validate()) {
          tophoneStr = s.g("BMapLib_phone_1").value;
          for (var e = this.dom.add_phone_con.getElementsByTagName("input"), i = 0, n = e.length; n > i; i++) {
            if (!s.isPhone(e[i].value))return void this.showTip({error: "PHONE_NUM_INVALID"});
            tophoneStr += "," + e[i].value
          }
          var o = this._map.getKey(), a = {fromphone: s.g("BMapLib_phone_0").value, tophone: tophoneStr, ak: o, activate: this.dom.activate_input.value, code_input: this.dom.ver_input.value, vcode: this.vcode, content: s.g("BMapLib_phone_0").value + "分享一个位置给您，" + this.messageContent, cbName: "callback"};
          this.request(this.config.sendURL, a, function (e) {
            e && t.showTip(e)
          })
        }
      }, validate: function () {
        var t = !0;
        return s.isPhone(this.dom.fromphone.value) && s.isPhone(this.dom.tophone.value) || (t = !1, this.showTip({error: "PHONE_NUM_INVALID"})), t
      }, getAddressByPoint: function () {
        var t = this.iw._point, e = this, i = new BMap.Geocoder;
        i.getLocation(t, function (t) {
          if (t && t.addressComponents) {
            var i = t.addressComponents;
            e.address = i.province + i.city + i.district + i.street + i.streetNumber, e.generalMessage()
          }
        })
      }, generalMessage: function () {
        var t = s.g("BMapLib_msgContent"), e = "", i = this.iw, n = i.getPosition();
        this.userPhone && (e += this.userPhone + "分享一个位置给您，"), i.getTitle && (e += "名称为：" + i.getTitle() + "，"), this.address && (e += "大致位置在" + this.address + "，");
        var o = "http://api.map.baidu.com/marker?location=" + n.lat + "," + n.lng + "&title=" + encodeURIComponent(i.getTitle()) + "&content=" + encodeURIComponent(i.getContent()) + "&output=html", a = {url: encodeURIComponent(o), t: (new Date).getTime(), cbName: "callback"}, r = this;
        this.request(this.config.shortURL, a, function (i) {
          e += i.url, r.messageContent = e, t.innerHTML = e
        })
      }, rememberPhone: function () {
        if (this.dom.isRememberPhone.checked) {
          var t = this.dom.tophone.value;
          s.cookie.set("BMapLib_phone", t, {path: "/", expires: 2592e6})
        }
      }, getRememberPhone: function () {
        var t = s.cookie.get("BMapLib_phone");
        t && (this.dom.tophone.value = t, this.dom.isRememberPhone.checked = !0)
      }, sendSuccess: function () {
        this.dom.sms_container.style.display = "none", this.dom.success_tip.style.display = "block";
        var t = this;
        setTimeout(function () {
          t._map.removeOverlay(t)
        }, 1500)
      }, addPhoneAction: function () {
        if (this.addPhoneNum >= 4); else {
          var t = document.createElement("div");
          t.innerHTML = '<input type="text" class="BMapLib_sms_input BMapLib_sms_input_l" maxlength="11"/><a href="javascript:void(0);" style="margin-left:5px;" bid="deletePhone">删除</a>', this.dom.add_phone_con.appendChild(t), this.addPhoneNum++
        }
      }, deletePhoneAction: function (t) {
        t.parentNode.parentNode.removeChild(t.parentNode), this.addPhoneNum--
      }, request: function (t, e, n) {
        var s = (1e5 * Math.random()).toFixed(0);
        BMapLib["BMapLib_cbk" + s] = function (t) {
          n && n(t), delete BMapLib["BMapLib_cbk" + s]
        };
        for (var o in e)"cbName" != o && (t += "&" + o + "=" + e[o]);
        t += "&" + e.cbName + "=BMapLib.BMapLib_cbk" + s, i(t)
      }, config: {sendURL: a + "/ws/message?method=send", activateURL: a + "/ws/message?method=activate", ckActivateURL: a + "/ws/message?method=ckActivate", shortURL: "http://j.map.baidu.com/?"}});
      var r = 0;
      BMapLib.SearchInfoWindow.instance = []
    }();
  }