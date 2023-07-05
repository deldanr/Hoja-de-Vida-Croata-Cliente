/*!
 * Test: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Test = Test || [];
 *   Test.push(readyFunction);
 */
          !(function (o, c) {
        var n = c.documentElement,
          t = " w-mod-";
          (n.className += t + "js"),
          ("ontouchstart" in o ||
          (o.DocumentTouch && c instanceof DocumentTouch)) &&
          (n.className += t + "touch");
      })(window, document);

(() => {
  var u = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
  var Ui = u(() => {
    window.tram = (function (e) {
      function t(f, _) {
        var b = new g.Bare();
        return b.init(f, _);
      }
      function r(f) {
        return f.replace(/[A-Z]/g, function (_) {
          return "-" + _.toLowerCase();
        });
      }
      function n(f) {
        var _ = parseInt(f.slice(1), 16),
          b = (_ >> 16) & 255,
          C = (_ >> 8) & 255,
          T = 255 & _;
        return [b, C, T];
      }
      function o(f, _, b) {
        return (
          "#" + ((1 << 24) | (f << 16) | (_ << 8) | b).toString(16).slice(1)
        );
      }
      function i() {}
      function a(f, _) {
        p("Type warning: Expected: [" + f + "] Got: [" + typeof _ + "] " + _);
      }
      function s(f, _, b) {
        p("Units do not match [" + f + "]: " + _ + ", " + b);
      }
      function c(f, _, b) {
        if ((_ !== void 0 && (b = _), f === void 0)) return b;
        var C = b;
        return (
          Xe.test(f) || !ze.test(f)
            ? (C = parseInt(f, 10))
            : ze.test(f) && (C = 1e3 * parseFloat(f)),
          0 > C && (C = 0),
          C === C ? C : b
        );
      }
      function p(f) {
        oe.debug && window && window.console.warn(f);
      }
      function y(f) {
        for (var _ = -1, b = f ? f.length : 0, C = []; ++_ < b; ) {
          var T = f[_];
          T && C.push(T);
        }
        return C;
      }
      var h = (function (f, _, b) {
          function C(se) {
            return typeof se == "object";
          }
          function T(se) {
            return typeof se == "function";
          }
          function q() {}
          function ee(se, _e) {
            function z() {
              var De = new fe();
              return T(De.init) && De.init.apply(De, arguments), De;
            }
            function fe() {}
            _e === b && ((_e = se), (se = Object)), (z.Bare = fe);
            var de,
              Se = (q[f] = se[f]),
              at = (fe[f] = z[f] = new q());
            return (
              (at.constructor = z),
              (z.mixin = function (De) {
                return (fe[f] = z[f] = ee(z, De)[f]), z;
              }),
              (z.open = function (De) {
                if (
                  ((de = {}),
                  T(De) ? (de = De.call(z, at, Se, z, se)) : C(De) && (de = De),
                  C(de))
                )
                  for (var Ar in de) _.call(de, Ar) && (at[Ar] = de[Ar]);
                return T(at.init) || (at.init = se), z;
              }),
              z.open(_e)
            );
          }
          return ee;
        })("prototype", {}.hasOwnProperty),
        m = {
          ease: [
            "ease",
            function (f, _, b, C) {
              var T = (f /= C) * f,
                q = T * f;
              return (
                _ +
                b * (-2.75 * q * T + 11 * T * T + -15.5 * q + 8 * T + 0.25 * f)
              );
            },
          ],
          "ease-in": [
            "ease-in",
            function (f, _, b, C) {
              var T = (f /= C) * f,
                q = T * f;
              return _ + b * (-1 * q * T + 3 * T * T + -3 * q + 2 * T);
            },
          ],
          "ease-out": [
            "ease-out",
            function (f, _, b, C) {
              var T = (f /= C) * f,
                q = T * f;
              return (
                _ +
                b * (0.3 * q * T + -1.6 * T * T + 2.2 * q + -1.8 * T + 1.9 * f)
              );
            },
          ],
          "ease-in-out": [
            "ease-in-out",
            function (f, _, b, C) {
              var T = (f /= C) * f,
                q = T * f;
              return _ + b * (2 * q * T + -5 * T * T + 2 * q + 2 * T);
            },
          ],
          linear: [
            "linear",
            function (f, _, b, C) {
              return (b * f) / C + _;
            },
          ],
          "ease-in-quad": [
            "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
            function (f, _, b, C) {
              return b * (f /= C) * f + _;
            },
          ],
          "ease-out-quad": [
            "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
            function (f, _, b, C) {
              return -b * (f /= C) * (f - 2) + _;
            },
          ],
          "ease-in-out-quad": [
            "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
            function (f, _, b, C) {
              return (f /= C / 2) < 1
                ? (b / 2) * f * f + _
                : (-b / 2) * (--f * (f - 2) - 1) + _;
            },
          ],
          "ease-in-cubic": [
            "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
            function (f, _, b, C) {
              return b * (f /= C) * f * f + _;
            },
          ],
          "ease-out-cubic": [
            "cubic-bezier(0.215, 0.610, 0.355, 1)",
            function (f, _, b, C) {
              return b * ((f = f / C - 1) * f * f + 1) + _;
            },
          ],
          "ease-in-out-cubic": [
            "cubic-bezier(0.645, 0.045, 0.355, 1)",
            function (f, _, b, C) {
              return (f /= C / 2) < 1
                ? (b / 2) * f * f * f + _
                : (b / 2) * ((f -= 2) * f * f + 2) + _;
            },
          ],
          "ease-in-quart": [
            "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
            function (f, _, b, C) {
              return b * (f /= C) * f * f * f + _;
            },
          ],
          "ease-out-quart": [
            "cubic-bezier(0.165, 0.840, 0.440, 1)",
            function (f, _, b, C) {
              return -b * ((f = f / C - 1) * f * f * f - 1) + _;
            },
          ],
          "ease-in-out-quart": [
            "cubic-bezier(0.770, 0, 0.175, 1)",
            function (f, _, b, C) {
              return (f /= C / 2) < 1
                ? (b / 2) * f * f * f * f + _
                : (-b / 2) * ((f -= 2) * f * f * f - 2) + _;
            },
          ],
          "ease-in-quint": [
            "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
            function (f, _, b, C) {
              return b * (f /= C) * f * f * f * f + _;
            },
          ],
          "ease-out-quint": [
            "cubic-bezier(0.230, 1, 0.320, 1)",
            function (f, _, b, C) {
              return b * ((f = f / C - 1) * f * f * f * f + 1) + _;
            },
          ],
          "ease-in-out-quint": [
            "cubic-bezier(0.860, 0, 0.070, 1)",
            function (f, _, b, C) {
              return (f /= C / 2) < 1
                ? (b / 2) * f * f * f * f * f + _
                : (b / 2) * ((f -= 2) * f * f * f * f + 2) + _;
            },
          ],
          "ease-in-sine": [
            "cubic-bezier(0.470, 0, 0.745, 0.715)",
            function (f, _, b, C) {
              return -b * Math.cos((f / C) * (Math.PI / 2)) + b + _;
            },
          ],
          "ease-out-sine": [
            "cubic-bezier(0.390, 0.575, 0.565, 1)",
            function (f, _, b, C) {
              return b * Math.sin((f / C) * (Math.PI / 2)) + _;
            },
          ],
          "ease-in-out-sine": [
            "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
            function (f, _, b, C) {
              return (-b / 2) * (Math.cos((Math.PI * f) / C) - 1) + _;
            },
          ],
          "ease-in-expo": [
            "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
            function (f, _, b, C) {
              return f === 0 ? _ : b * Math.pow(2, 10 * (f / C - 1)) + _;
            },
          ],
          "ease-out-expo": [
            "cubic-bezier(0.190, 1, 0.220, 1)",
            function (f, _, b, C) {
              return f === C
                ? _ + b
                : b * (-Math.pow(2, (-10 * f) / C) + 1) + _;
            },
          ],
          "ease-in-out-expo": [
            "cubic-bezier(1, 0, 0, 1)",
            function (f, _, b, C) {
              return f === 0
                ? _
                : f === C
                ? _ + b
                : (f /= C / 2) < 1
                ? (b / 2) * Math.pow(2, 10 * (f - 1)) + _
                : (b / 2) * (-Math.pow(2, -10 * --f) + 2) + _;
            },
          ],
          "ease-in-circ": [
            "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
            function (f, _, b, C) {
              return -b * (Math.sqrt(1 - (f /= C) * f) - 1) + _;
            },
          ],
          "ease-out-circ": [
            "cubic-bezier(0.075, 0.820, 0.165, 1)",
            function (f, _, b, C) {
              return b * Math.sqrt(1 - (f = f / C - 1) * f) + _;
            },
          ],
          "ease-in-out-circ": [
            "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
            function (f, _, b, C) {
              return (f /= C / 2) < 1
                ? (-b / 2) * (Math.sqrt(1 - f * f) - 1) + _
                : (b / 2) * (Math.sqrt(1 - (f -= 2) * f) + 1) + _;
            },
          ],
          "ease-in-back": [
            "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
            function (f, _, b, C, T) {
              return (
                T === void 0 && (T = 1.70158),
                b * (f /= C) * f * ((T + 1) * f - T) + _
              );
            },
          ],
          "ease-out-back": [
            "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
            function (f, _, b, C, T) {
              return (
                T === void 0 && (T = 1.70158),
                b * ((f = f / C - 1) * f * ((T + 1) * f + T) + 1) + _
              );
            },
          ],
          "ease-in-out-back": [
            "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
            function (f, _, b, C, T) {
              return (
                T === void 0 && (T = 1.70158),
                (f /= C / 2) < 1
                  ? (b / 2) * f * f * (((T *= 1.525) + 1) * f - T) + _
                  : (b / 2) *
                      ((f -= 2) * f * (((T *= 1.525) + 1) * f + T) + 2) +
                    _
              );
            },
          ],
        },
        I = {
          "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
          "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
          "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)",
        },
        R = document,
        A = window,
        F = "bkwld-tram",
        N = /[\-\.0-9]/g,
        x = /[A-Z]/,
        S = "number",
        P = /^(rgb|#)/,
        L = /(em|cm|mm|in|pt|pc|px)$/,
        M = /(em|cm|mm|in|pt|pc|px|%)$/,
        H = /(deg|rad|turn)$/,
        Q = "unitless",
        $ = /(all|none) 0s ease 0s/,
        ae = /^(width|height)$/,
        te = " ",
        U = R.createElement("a"),
        O = ["Webkit", "Moz", "O", "ms"],
        X = ["-webkit-", "-moz-", "-o-", "-ms-"],
        V = function (f) {
          if (f in U.style) return { dom: f, css: f };
          var _,
            b,
            C = "",
            T = f.split("-");
          for (_ = 0; _ < T.length; _++)
            C += T[_].charAt(0).toUpperCase() + T[_].slice(1);
          for (_ = 0; _ < O.length; _++)
            if (((b = O[_] + C), b in U.style))
              return { dom: b, css: X[_] + f };
        },
        j = (t.support = {
          bind: Function.prototype.bind,
          transform: V("transform"),
          transition: V("transition"),
          backface: V("backface-visibility"),
          timing: V("transition-timing-function"),
        });
      if (j.transition) {
        var J = j.timing.dom;
        if (((U.style[J] = m["ease-in-back"][0]), !U.style[J]))
          for (var re in I) m[re][0] = I[re];
      }
      var W = (t.frame = (function () {
          var f =
            A.requestAnimationFrame ||
            A.webkitRequestAnimationFrame ||
            A.mozRequestAnimationFrame ||
            A.oRequestAnimationFrame ||
            A.msRequestAnimationFrame;
          return f && j.bind
            ? f.bind(A)
            : function (_) {
                A.setTimeout(_, 16);
              };
        })()),
        Y = (t.now = (function () {
          var f = A.performance,
            _ = f && (f.now || f.webkitNow || f.msNow || f.mozNow);
          return _ && j.bind
            ? _.bind(f)
            : Date.now ||
                function () {
                  return +new Date();
                };
        })()),
        d = h(function (f) {
          function _(ne, pe) {
            var Te = y(("" + ne).split(te)),
              ge = Te[0];
            pe = pe || {};
            var Me = K[ge];
            if (!Me) return p("Unsupported property: " + ge);
            if (!pe.weak || !this.props[ge]) {
              var Qe = Me[0],
                We = this.props[ge];
              return (
                We || (We = this.props[ge] = new Qe.Bare()),
                We.init(this.$el, Te, Me, pe),
                We
              );
            }
          }
          function b(ne, pe, Te) {
            if (ne) {
              var ge = typeof ne;
              if (
                (pe ||
                  (this.timer && this.timer.destroy(),
                  (this.queue = []),
                  (this.active = !1)),
                ge == "number" && pe)
              )
                return (
                  (this.timer = new ie({
                    duration: ne,
                    context: this,
                    complete: q,
                  })),
                  void (this.active = !0)
                );
              if (ge == "string" && pe) {
                switch (ne) {
                  case "hide":
                    z.call(this);
                    break;
                  case "stop":
                    ee.call(this);
                    break;
                  case "redraw":
                    fe.call(this);
                    break;
                  default:
                    _.call(this, ne, Te && Te[1]);
                }
                return q.call(this);
              }
              if (ge == "function") return void ne.call(this, this);
              if (ge == "object") {
                var Me = 0;
                at.call(
                  this,
                  ne,
                  function (Ae, Em) {
                    Ae.span > Me && (Me = Ae.span), Ae.stop(), Ae.animate(Em);
                  },
                  function (Ae) {
                    "wait" in Ae && (Me = c(Ae.wait, 0));
                  }
                ),
                  Se.call(this),
                  Me > 0 &&
                    ((this.timer = new ie({ duration: Me, context: this })),
                    (this.active = !0),
                    pe && (this.timer.complete = q));
                var Qe = this,
                  We = !1,
                  fn = {};
                W(function () {
                  at.call(Qe, ne, function (Ae) {
                    Ae.active && ((We = !0), (fn[Ae.name] = Ae.nextStyle));
                  }),
                    We && Qe.$el.css(fn);
                });
              }
            }
          }
          function C(ne) {
            (ne = c(ne, 0)),
              this.active
                ? this.queue.push({ options: ne })
                : ((this.timer = new ie({
                    duration: ne,
                    context: this,
                    complete: q,
                  })),
                  (this.active = !0));
          }
          function T(ne) {
            return this.active
              ? (this.queue.push({ options: ne, args: arguments }),
                void (this.timer.complete = q))
              : p(
                  "No active transition timer. Use start() or wait() before then()."
                );
          }
          function q() {
            if (
              (this.timer && this.timer.destroy(),
              (this.active = !1),
              this.queue.length)
            ) {
              var ne = this.queue.shift();
              b.call(this, ne.options, !0, ne.args);
            }
          }
          function ee(ne) {
            this.timer && this.timer.destroy(),
              (this.queue = []),
              (this.active = !1);
            var pe;
            typeof ne == "string"
              ? ((pe = {}), (pe[ne] = 1))
              : (pe = typeof ne == "object" && ne != null ? ne : this.props),
              at.call(this, pe, De),
              Se.call(this);
          }
          function se(ne) {
            ee.call(this, ne), at.call(this, ne, Ar, hm);
          }
          function _e(ne) {
            typeof ne != "string" && (ne = "block"),
              (this.el.style.display = ne);
          }
          function z() {
            ee.call(this), (this.el.style.display = "none");
          }
          function fe() {
            this.el.offsetHeight;
          }
          function de() {
            ee.call(this),
              e.removeData(this.el, F),
              (this.$el = this.el = null);
          }
          function Se() {
            var ne,
              pe,
              Te = [];
            this.upstream && Te.push(this.upstream);
            for (ne in this.props)
              (pe = this.props[ne]), pe.active && Te.push(pe.string);
            (Te = Te.join(",")),
              this.style !== Te &&
                ((this.style = Te), (this.el.style[j.transition.dom] = Te));
          }
          function at(ne, pe, Te) {
            var ge,
              Me,
              Qe,
              We,
              fn = pe !== De,
              Ae = {};
            for (ge in ne)
              (Qe = ne[ge]),
                ge in he
                  ? (Ae.transform || (Ae.transform = {}),
                    (Ae.transform[ge] = Qe))
                  : (x.test(ge) && (ge = r(ge)),
                    ge in K ? (Ae[ge] = Qe) : (We || (We = {}), (We[ge] = Qe)));
            for (ge in Ae) {
              if (((Qe = Ae[ge]), (Me = this.props[ge]), !Me)) {
                if (!fn) continue;
                Me = _.call(this, ge);
              }
              pe.call(this, Me, Qe);
            }
            Te && We && Te.call(this, We);
          }
          function De(ne) {
            ne.stop();
          }
          function Ar(ne, pe) {
            ne.set(pe);
          }
          function hm(ne) {
            this.$el.css(ne);
          }
          function Ye(ne, pe) {
            f[ne] = function () {
              return this.children
                ? gm.call(this, pe, arguments)
                : (this.el && pe.apply(this, arguments), this);
            };
          }
          function gm(ne, pe) {
            var Te,
              ge = this.children.length;
            for (Te = 0; ge > Te; Te++) ne.apply(this.children[Te], pe);
            return this;
          }
          (f.init = function (ne) {
            if (
              ((this.$el = e(ne)),
              (this.el = this.$el[0]),
              (this.props = {}),
              (this.queue = []),
              (this.style = ""),
              (this.active = !1),
              oe.keepInherited && !oe.fallback)
            ) {
              var pe = B(this.el, "transition");
              pe && !$.test(pe) && (this.upstream = pe);
            }
            j.backface &&
              oe.hideBackface &&
              v(this.el, j.backface.css, "hidden");
          }),
            Ye("add", _),
            Ye("start", b),
            Ye("wait", C),
            Ye("then", T),
            Ye("next", q),
            Ye("stop", ee),
            Ye("set", se),
            Ye("show", _e),
            Ye("hide", z),
            Ye("redraw", fe),
            Ye("destroy", de);
        }),
        g = h(d, function (f) {
          function _(b, C) {
            var T = e.data(b, F) || e.data(b, F, new d.Bare());
            return T.el || T.init(b), C ? T.start(C) : T;
          }
          f.init = function (b, C) {
            var T = e(b);
            if (!T.length) return this;
            if (T.length === 1) return _(T[0], C);
            var q = [];
            return (
              T.each(function (ee, se) {
                q.push(_(se, C));
              }),
              (this.children = q),
              this
            );
          };
        }),
        E = h(function (f) {
          function _() {
            var q = this.get();
            this.update("auto");
            var ee = this.get();
            return this.update(q), ee;
          }
          function b(q, ee, se) {
            return ee !== void 0 && (se = ee), q in m ? q : se;
          }
          function C(q) {
            var ee = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(q);
            return (ee ? o(ee[1], ee[2], ee[3]) : q).replace(
              /#(\w)(\w)(\w)$/,
              "#$1$1$2$2$3$3"
            );
          }
          var T = { duration: 500, ease: "ease", delay: 0 };
          (f.init = function (q, ee, se, _e) {
            (this.$el = q), (this.el = q[0]);
            var z = ee[0];
            se[2] && (z = se[2]),
              Z[z] && (z = Z[z]),
              (this.name = z),
              (this.type = se[1]),
              (this.duration = c(ee[1], this.duration, T.duration)),
              (this.ease = b(ee[2], this.ease, T.ease)),
              (this.delay = c(ee[3], this.delay, T.delay)),
              (this.span = this.duration + this.delay),
              (this.active = !1),
              (this.nextStyle = null),
              (this.auto = ae.test(this.name)),
              (this.unit = _e.unit || this.unit || oe.defaultUnit),
              (this.angle = _e.angle || this.angle || oe.defaultAngle),
              oe.fallback || _e.fallback
                ? (this.animate = this.fallback)
                : ((this.animate = this.transition),
                  (this.string =
                    this.name +
                    te +
                    this.duration +
                    "ms" +
                    (this.ease != "ease" ? te + m[this.ease][0] : "") +
                    (this.delay ? te + this.delay + "ms" : "")));
          }),
            (f.set = function (q) {
              (q = this.convert(q, this.type)), this.update(q), this.redraw();
            }),
            (f.transition = function (q) {
              (this.active = !0),
                (q = this.convert(q, this.type)),
                this.auto &&
                  (this.el.style[this.name] == "auto" &&
                    (this.update(this.get()), this.redraw()),
                  q == "auto" && (q = _.call(this))),
                (this.nextStyle = q);
            }),
            (f.fallback = function (q) {
              var ee =
                this.el.style[this.name] || this.convert(this.get(), this.type);
              (q = this.convert(q, this.type)),
                this.auto &&
                  (ee == "auto" && (ee = this.convert(this.get(), this.type)),
                  q == "auto" && (q = _.call(this))),
                (this.tween = new w({
                  from: ee,
                  to: q,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                  update: this.update,
                  context: this,
                }));
            }),
            (f.get = function () {
              return B(this.el, this.name);
            }),
            (f.update = function (q) {
              v(this.el, this.name, q);
            }),
            (f.stop = function () {
              (this.active || this.nextStyle) &&
                ((this.active = !1),
                (this.nextStyle = null),
                v(this.el, this.name, this.get()));
              var q = this.tween;
              q && q.context && q.destroy();
            }),
            (f.convert = function (q, ee) {
              if (q == "auto" && this.auto) return q;
              var se,
                _e = typeof q == "number",
                z = typeof q == "string";
              switch (ee) {
                case S:
                  if (_e) return q;
                  if (z && q.replace(N, "") === "") return +q;
                  se = "number(unitless)";
                  break;
                case P:
                  if (z) {
                    if (q === "" && this.original) return this.original;
                    if (ee.test(q))
                      return q.charAt(0) == "#" && q.length == 7 ? q : C(q);
                  }
                  se = "hex or rgb string";
                  break;
                case L:
                  if (_e) return q + this.unit;
                  if (z && ee.test(q)) return q;
                  se = "number(px) or string(unit)";
                  break;
                case M:
                  if (_e) return q + this.unit;
                  if (z && ee.test(q)) return q;
                  se = "number(px) or string(unit or %)";
                  break;
                case H:
                  if (_e) return q + this.angle;
                  if (z && ee.test(q)) return q;
                  se = "number(deg) or string(angle)";
                  break;
                case Q:
                  if (_e || (z && M.test(q))) return q;
                  se = "number(unitless) or string(unit or %)";
              }
              return a(se, q), q;
            }),
            (f.redraw = function () {
              this.el.offsetHeight;
            });
        }),
        l = h(E, function (f, _) {
          f.init = function () {
            _.init.apply(this, arguments),
              this.original || (this.original = this.convert(this.get(), P));
          };
        }),
        G = h(E, function (f, _) {
          (f.init = function () {
            _.init.apply(this, arguments), (this.animate = this.fallback);
          }),
            (f.get = function () {
              return this.$el[this.name]();
            }),
            (f.update = function (b) {
              this.$el[this.name](b);
            });
        }),
        k = h(E, function (f, _) {
          function b(C, T) {
            var q, ee, se, _e, z;
            for (q in C)
              (_e = he[q]),
                (se = _e[0]),
                (ee = _e[1] || q),
                (z = this.convert(C[q], se)),
                T.call(this, ee, z, se);
          }
          (f.init = function () {
            _.init.apply(this, arguments),
              this.current ||
                ((this.current = {}),
                he.perspective &&
                  oe.perspective &&
                  ((this.current.perspective = oe.perspective),
                  v(this.el, this.name, this.style(this.current)),
                  this.redraw()));
          }),
            (f.set = function (C) {
              b.call(this, C, function (T, q) {
                this.current[T] = q;
              }),
                v(this.el, this.name, this.style(this.current)),
                this.redraw();
            }),
            (f.transition = function (C) {
              var T = this.values(C);
              this.tween = new ve({
                current: this.current,
                values: T,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
              });
              var q,
                ee = {};
              for (q in this.current) ee[q] = q in T ? T[q] : this.current[q];
              (this.active = !0), (this.nextStyle = this.style(ee));
            }),
            (f.fallback = function (C) {
              var T = this.values(C);
              this.tween = new ve({
                current: this.current,
                values: T,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
                update: this.update,
                context: this,
              });
            }),
            (f.update = function () {
              v(this.el, this.name, this.style(this.current));
            }),
            (f.style = function (C) {
              var T,
                q = "";
              for (T in C) q += T + "(" + C[T] + ") ";
              return q;
            }),
            (f.values = function (C) {
              var T,
                q = {};
              return (
                b.call(this, C, function (ee, se, _e) {
                  (q[ee] = se),
                    this.current[ee] === void 0 &&
                      ((T = 0),
                      ~ee.indexOf("scale") && (T = 1),
                      (this.current[ee] = this.convert(T, _e)));
                }),
                q
              );
            });
        }),
        w = h(function (f) {
          function _(z) {
            se.push(z) === 1 && W(b);
          }
          function b() {
            var z,
              fe,
              de,
              Se = se.length;
            if (Se)
              for (W(b), fe = Y(), z = Se; z--; )
                (de = se[z]), de && de.render(fe);
          }
          function C(z) {
            var fe,
              de = e.inArray(z, se);
            de >= 0 &&
              ((fe = se.slice(de + 1)),
              (se.length = de),
              fe.length && (se = se.concat(fe)));
          }
          function T(z) {
            return Math.round(z * _e) / _e;
          }
          function q(z, fe, de) {
            return o(
              z[0] + de * (fe[0] - z[0]),
              z[1] + de * (fe[1] - z[1]),
              z[2] + de * (fe[2] - z[2])
            );
          }
          var ee = { ease: m.ease[1], from: 0, to: 1 };
          (f.init = function (z) {
            (this.duration = z.duration || 0), (this.delay = z.delay || 0);
            var fe = z.ease || ee.ease;
            m[fe] && (fe = m[fe][1]),
              typeof fe != "function" && (fe = ee.ease),
              (this.ease = fe),
              (this.update = z.update || i),
              (this.complete = z.complete || i),
              (this.context = z.context || this),
              (this.name = z.name);
            var de = z.from,
              Se = z.to;
            de === void 0 && (de = ee.from),
              Se === void 0 && (Se = ee.to),
              (this.unit = z.unit || ""),
              typeof de == "number" && typeof Se == "number"
                ? ((this.begin = de), (this.change = Se - de))
                : this.format(Se, de),
              (this.value = this.begin + this.unit),
              (this.start = Y()),
              z.autoplay !== !1 && this.play();
          }),
            (f.play = function () {
              this.active ||
                (this.start || (this.start = Y()), (this.active = !0), _(this));
            }),
            (f.stop = function () {
              this.active && ((this.active = !1), C(this));
            }),
            (f.render = function (z) {
              var fe,
                de = z - this.start;
              if (this.delay) {
                if (de <= this.delay) return;
                de -= this.delay;
              }
              if (de < this.duration) {
                var Se = this.ease(de, 0, 1, this.duration);
                return (
                  (fe = this.startRGB
                    ? q(this.startRGB, this.endRGB, Se)
                    : T(this.begin + Se * this.change)),
                  (this.value = fe + this.unit),
                  void this.update.call(this.context, this.value)
                );
              }
              (fe = this.endHex || this.begin + this.change),
                (this.value = fe + this.unit),
                this.update.call(this.context, this.value),
                this.complete.call(this.context),
                this.destroy();
            }),
            (f.format = function (z, fe) {
              if (((fe += ""), (z += ""), z.charAt(0) == "#"))
                return (
                  (this.startRGB = n(fe)),
                  (this.endRGB = n(z)),
                  (this.endHex = z),
                  (this.begin = 0),
                  void (this.change = 1)
                );
              if (!this.unit) {
                var de = fe.replace(N, ""),
                  Se = z.replace(N, "");
                de !== Se && s("tween", fe, z), (this.unit = de);
              }
              (fe = parseFloat(fe)),
                (z = parseFloat(z)),
                (this.begin = this.value = fe),
                (this.change = z - fe);
            }),
            (f.destroy = function () {
              this.stop(),
                (this.context = null),
                (this.ease = this.update = this.complete = i);
            });
          var se = [],
            _e = 1e3;
        }),
        ie = h(w, function (f) {
          (f.init = function (_) {
            (this.duration = _.duration || 0),
              (this.complete = _.complete || i),
              (this.context = _.context),
              this.play();
          }),
            (f.render = function (_) {
              var b = _ - this.start;
              b < this.duration ||
                (this.complete.call(this.context), this.destroy());
            });
        }),
        ve = h(w, function (f, _) {
          (f.init = function (b) {
            (this.context = b.context),
              (this.update = b.update),
              (this.tweens = []),
              (this.current = b.current);
            var C, T;
            for (C in b.values)
              (T = b.values[C]),
                this.current[C] !== T &&
                  this.tweens.push(
                    new w({
                      name: C,
                      from: this.current[C],
                      to: T,
                      duration: b.duration,
                      delay: b.delay,
                      ease: b.ease,
                      autoplay: !1,
                    })
                  );
            this.play();
          }),
            (f.render = function (b) {
              var C,
                T,
                q = this.tweens.length,
                ee = !1;
              for (C = q; C--; )
                (T = this.tweens[C]),
                  T.context &&
                    (T.render(b), (this.current[T.name] = T.value), (ee = !0));
              return ee
                ? void (this.update && this.update.call(this.context))
                : this.destroy();
            }),
            (f.destroy = function () {
              if ((_.destroy.call(this), this.tweens)) {
                var b,
                  C = this.tweens.length;
                for (b = C; b--; ) this.tweens[b].destroy();
                (this.tweens = null), (this.current = null);
              }
            });
        }),
        oe = (t.config = {
          debug: !1,
          defaultUnit: "px",
          defaultAngle: "deg",
          keepInherited: !1,
          hideBackface: !1,
          perspective: "",
          fallback: !j.transition,
          agentTests: [],
        });
      (t.fallback = function (f) {
        if (!j.transition) return (oe.fallback = !0);
        oe.agentTests.push("(" + f + ")");
        var _ = new RegExp(oe.agentTests.join("|"), "i");
        oe.fallback = _.test(navigator.userAgent);
      }),
        t.fallback("6.0.[2-5] Safari"),
        (t.tween = function (f) {
          return new w(f);
        }),
        (t.delay = function (f, _, b) {
          return new ie({ complete: _, duration: f, context: b });
        }),
        (e.fn.tram = function (f) {
          return t.call(null, this, f);
        });
      var v = e.style,
        B = e.css,
        Z = { transform: j.transform && j.transform.css },
        K = {
          color: [l, P],
          background: [l, P, "background-color"],
          "outline-color": [l, P],
          "border-color": [l, P],
          "border-top-color": [l, P],
          "border-right-color": [l, P],
          "border-bottom-color": [l, P],
          "border-left-color": [l, P],
          "border-width": [E, L],
          "border-top-width": [E, L],
          "border-right-width": [E, L],
          "border-bottom-width": [E, L],
          "border-left-width": [E, L],
          "border-spacing": [E, L],
          "letter-spacing": [E, L],
          margin: [E, L],
          "margin-top": [E, L],
          "margin-right": [E, L],
          "margin-bottom": [E, L],
          "margin-left": [E, L],
          padding: [E, L],
          "padding-top": [E, L],
          "padding-right": [E, L],
          "padding-bottom": [E, L],
          "padding-left": [E, L],
          "outline-width": [E, L],
          opacity: [E, S],
          top: [E, M],
          right: [E, M],
          bottom: [E, M],
          left: [E, M],
          "font-size": [E, M],
          "text-indent": [E, M],
          "word-spacing": [E, M],
          width: [E, M],
          "min-width": [E, M],
          "max-width": [E, M],
          height: [E, M],
          "min-height": [E, M],
          "max-height": [E, M],
          "line-height": [E, Q],
          "scroll-top": [G, S, "scrollTop"],
          "scroll-left": [G, S, "scrollLeft"],
        },
        he = {};
      j.transform &&
        ((K.transform = [k]),
        (he = {
          x: [M, "translateX"],
          y: [M, "translateY"],
          rotate: [H],
          rotateX: [H],
          rotateY: [H],
          scale: [S],
          scaleX: [S],
          scaleY: [S],
          skew: [H],
          skewX: [H],
          skewY: [H],
        })),
        j.transform &&
          j.backface &&
          ((he.z = [M, "translateZ"]),
          (he.rotateZ = [H]),
          (he.scaleZ = [S]),
          (he.perspective = [L]));
      var Xe = /ms/,
        ze = /s|\./;
      return (e.tram = t);
    })(window.jQuery);
  });
  var Os = u((hV, Ts) => {
    var _m = window.$,
      ym = Ui() && _m.tram;
    Ts.exports = (function () {
      var e = {};
      e.VERSION = "1.6.0-Test";
      var t = {},
        r = Array.prototype,
        n = Object.prototype,
        o = Function.prototype,
        i = r.push,
        a = r.slice,
        s = r.concat,
        c = n.toString,
        p = n.hasOwnProperty,
        y = r.forEach,
        h = r.map,
        m = r.reduce,
        I = r.reduceRight,
        R = r.filter,
        A = r.every,
        F = r.some,
        N = r.indexOf,
        x = r.lastIndexOf,
        S = Array.isArray,
        P = Object.keys,
        L = o.bind,
        M =
          (e.each =
          e.forEach =
            function (O, X, V) {
              if (O == null) return O;
              if (y && O.forEach === y) O.forEach(X, V);
              else if (O.length === +O.length) {
                for (var j = 0, J = O.length; j < J; j++)
                  if (X.call(V, O[j], j, O) === t) return;
              } else
                for (var re = e.keys(O), j = 0, J = re.length; j < J; j++)
                  if (X.call(V, O[re[j]], re[j], O) === t) return;
              return O;
            });
      (e.map = e.collect =
        function (O, X, V) {
          var j = [];
          return O == null
            ? j
            : h && O.map === h
            ? O.map(X, V)
            : (M(O, function (J, re, W) {
                j.push(X.call(V, J, re, W));
              }),
              j);
        }),
        (e.find = e.detect =
          function (O, X, V) {
            var j;
            return (
              H(O, function (J, re, W) {
                if (X.call(V, J, re, W)) return (j = J), !0;
              }),
              j
            );
          }),
        (e.filter = e.select =
          function (O, X, V) {
            var j = [];
            return O == null
              ? j
              : R && O.filter === R
              ? O.filter(X, V)
              : (M(O, function (J, re, W) {
                  X.call(V, J, re, W) && j.push(J);
                }),
                j);
          });
      var H =
        (e.some =
        e.any =
          function (O, X, V) {
            X || (X = e.identity);
            var j = !1;
            return O == null
              ? j
              : F && O.some === F
              ? O.some(X, V)
              : (M(O, function (J, re, W) {
                  if (j || (j = X.call(V, J, re, W))) return t;
                }),
                !!j);
          });
      (e.contains = e.include =
        function (O, X) {
          return O == null
            ? !1
            : N && O.indexOf === N
            ? O.indexOf(X) != -1
            : H(O, function (V) {
                return V === X;
              });
        }),
        (e.delay = function (O, X) {
          var V = a.call(arguments, 2);
          return setTimeout(function () {
            return O.apply(null, V);
          }, X);
        }),
        (e.defer = function (O) {
          return e.delay.apply(e, [O, 1].concat(a.call(arguments, 1)));
        }),
        (e.throttle = function (O) {
          var X, V, j;
          return function () {
            X ||
              ((X = !0),
              (V = arguments),
              (j = this),
              ym.frame(function () {
                (X = !1), O.apply(j, V);
              }));
          };
        }),
        (e.debounce = function (O, X, V) {
          var j,
            J,
            re,
            W,
            Y,
            d = function () {
              var g = e.now() - W;
              g < X
                ? (j = setTimeout(d, X - g))
                : ((j = null), V || ((Y = O.apply(re, J)), (re = J = null)));
            };
          return function () {
            (re = this), (J = arguments), (W = e.now());
            var g = V && !j;
            return (
              j || (j = setTimeout(d, X)),
              g && ((Y = O.apply(re, J)), (re = J = null)),
              Y
            );
          };
        }),
        (e.defaults = function (O) {
          if (!e.isObject(O)) return O;
          for (var X = 1, V = arguments.length; X < V; X++) {
            var j = arguments[X];
            for (var J in j) O[J] === void 0 && (O[J] = j[J]);
          }
          return O;
        }),
        (e.keys = function (O) {
          if (!e.isObject(O)) return [];
          if (P) return P(O);
          var X = [];
          for (var V in O) e.has(O, V) && X.push(V);
          return X;
        }),
        (e.has = function (O, X) {
          return p.call(O, X);
        }),
        (e.isObject = function (O) {
          return O === Object(O);
        }),
        (e.now =
          Date.now ||
          function () {
            return new Date().getTime();
          }),
        (e.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g,
        });
      var Q = /(.)^/,
        $ = {
          "'": "'",
          "\\": "\\",
          "\r": "r",
          "\n": "n",
          "\u2028": "u2028",
          "\u2029": "u2029",
        },
        ae = /\\|'|\r|\n|\u2028|\u2029/g,
        te = function (O) {
          return "\\" + $[O];
        },
        U = /^\s*(\w|\$)+\s*$/;
      return (
        (e.template = function (O, X, V) {
          !X && V && (X = V), (X = e.defaults({}, X, e.templateSettings));
          var j = RegExp(
              [
                (X.escape || Q).source,
                (X.interpolate || Q).source,
                (X.evaluate || Q).source,
              ].join("|") + "|$",
              "g"
            ),
            J = 0,
            re = "__p+='";
          O.replace(j, function (g, E, l, G, k) {
            return (
              (re += O.slice(J, k).replace(ae, te)),
              (J = k + g.length),
              E
                ? (re +=
                    `'+
((__t=(` +
                    E +
                    `))==null?'':_.escape(__t))+
'`)
                : l
                ? (re +=
                    `'+
((__t=(` +
                    l +
                    `))==null?'':__t)+
'`)
                : G &&
                  (re +=
                    `';
` +
                    G +
                    `
__p+='`),
              g
            );
          }),
            (re += `';
`);
          var W = X.variable;
          if (W) {
            if (!U.test(W))
              throw new Error("variable is not a bare identifier: " + W);
          } else
            (re =
              `with(obj||{}){
` +
              re +
              `}
`),
              (W = "obj");
          re =
            `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` +
            re +
            `return __p;
`;
          var Y;
          try {
            Y = new Function(X.variable || "obj", "_", re);
          } catch (g) {
            throw ((g.source = re), g);
          }
          var d = function (g) {
            return Y.call(this, g, e);
          };
          return (
            (d.source =
              "function(" +
              W +
              `){
` +
              re +
              "}"),
            d
          );
        }),
        e
      );
    })();
  });
  var Ve = u((gV, xs) => {
    var Ee = {},
      Yt = {},
      Qt = [],
      Wi = window.Test || [],
      Ot = window.jQuery,
      Ze = Ot(window),
      mm = Ot(document),
      st = Ot.isFunction,
      $e = (Ee._ = Os()),
      Ss = (Ee.tram = Ui() && Ot.tram),
      pn = !1,
      Vi = !1;
    Ss.config.hideBackface = !1;
    Ss.config.keepInherited = !0;
    Ee.define = function (e, t, r) {
      Yt[e] && ws(Yt[e]);
      var n = (Yt[e] = t(Ot, $e, r) || {});
      return As(n), n;
    };
    Ee.require = function (e) {
      return Yt[e];
    };
    function As(e) {
      Ee.env() &&
        (st(e.design) && Ze.on("__wf_design", e.design),
        st(e.preview) && Ze.on("__wf_preview", e.preview)),
        st(e.destroy) && Ze.on("__wf_destroy", e.destroy),
        e.ready && st(e.ready) && Im(e);
    }
    function Im(e) {
      if (pn) {
        e.ready();
        return;
      }
      $e.contains(Qt, e.ready) || Qt.push(e.ready);
    }
    function ws(e) {
      st(e.design) && Ze.off("__wf_design", e.design),
        st(e.preview) && Ze.off("__wf_preview", e.preview),
        st(e.destroy) && Ze.off("__wf_destroy", e.destroy),
        e.ready && st(e.ready) && Tm(e);
    }
    function Tm(e) {
      Qt = $e.filter(Qt, function (t) {
        return t !== e.ready;
      });
    }
    Ee.push = function (e) {
      if (pn) {
        st(e) && e();
        return;
      }
      Wi.push(e);
    };
    Ee.env = function (e) {
      var t = window.__wf_design,
        r = typeof t < "u";
      if (!e) return r;
      if (e === "design") return r && t;
      if (e === "preview") return r && !t;
      if (e === "slug") return r && window.__wf_slug;
      if (e === "editor") return window.TestEditor;
      if (e === "test") return window.__wf_test;
      if (e === "frame") return window !== window.top;
    };
    var dn = navigator.userAgent.toLowerCase(),
      Rs = (Ee.env.touch =
        "ontouchstart" in window ||
        (window.DocumentTouch && document instanceof window.DocumentTouch)),
      Om = (Ee.env.chrome =
        /chrome/.test(dn) &&
        /Google/.test(navigator.vendor) &&
        parseInt(dn.match(/chrome\/(\d+)\./)[1], 10)),
      bm = (Ee.env.ios = /(ipod|iphone|ipad)/.test(dn));
    Ee.env.safari = /safari/.test(dn) && !Om && !bm;
    var Xi;
    Rs &&
      mm.on("touchstart mousedown", function (e) {
        Xi = e.target;
      });
    Ee.validClick = Rs
      ? function (e) {
          return e === Xi || Ot.contains(e, Xi);
        }
      : function () {
          return !0;
        };
    var Cs = "resize.webflow orientationchange.webflow load.webflow",
      Sm = "scroll.webflow " + Cs;
    Ee.resize = ki(Ze, Cs);
    Ee.scroll = ki(Ze, Sm);
    Ee.redraw = ki();
    function ki(e, t) {
      var r = [],
        n = {};
      return (
        (n.up = $e.throttle(function (o) {
          $e.each(r, function (i) {
            i(o);
          });
        })),
        e && t && e.on(t, n.up),
        (n.on = function (o) {
          typeof o == "function" && ($e.contains(r, o) || r.push(o));
        }),
        (n.off = function (o) {
          if (!arguments.length) {
            r = [];
            return;
          }
          r = $e.filter(r, function (i) {
            return i !== o;
          });
        }),
        n
      );
    }
    Ee.location = function (e) {
      window.location = e;
    };
    Ee.env() && (Ee.location = function () {});
    Ee.ready = function () {
      (pn = !0), Vi ? Am() : $e.each(Qt, bs), $e.each(Wi, bs), Ee.resize.up();
    };
    function bs(e) {
      st(e) && e();
    }
    function Am() {
      (Vi = !1), $e.each(Yt, As);
    }
    var Dt;
    Ee.load = function (e) {
      Dt.then(e);
    };
    function Ns() {
      Dt && (Dt.reject(), Ze.off("load", Dt.resolve)),
        (Dt = new Ot.Deferred()),
        Ze.on("load", Dt.resolve);
    }
    Ee.destroy = function (e) {
      (e = e || {}),
        (Vi = !0),
        Ze.triggerHandler("__wf_destroy"),
        e.domready != null && (pn = e.domready),
        $e.each(Yt, ws),
        Ee.resize.off(),
        Ee.scroll.off(),
        Ee.redraw.off(),
        (Qt = []),
        (Wi = []),
        Dt.state() === "pending" && Ns();
    };
    Ot(Ee.ready);
    Ns();
    xs.exports = window.Test = Ee;
  });
  var Ps = u((EV, Ls) => {
    var qs = Ve();
    qs.define(
      "brand",
      (Ls.exports = function (e) {
        var t = {},
          r = document,
          n = e("html"),
          o = e("body"),
          i = ".w-webflow-badge",
          a = window.location,
          s = /PhantomJS/i.test(navigator.userAgent),
          c =
            "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
          p;
        t.ready = function () {
          var I = n.attr("data-wf-status"),
            R = n.attr("data-wf-domain") || "";
          /\.webflow\.io$/i.test(R) && a.hostname !== R && (I = !0),
            I &&
              !s &&
              ((p = p || h()),
              m(),
              setTimeout(m, 500),
              e(r).off(c, y).on(c, y));
        };
        function y() {
          var I =
            r.fullScreen ||
            r.mozFullScreen ||
            r.webkitIsFullScreen ||
            r.msFullscreenElement ||
            !!r.webkitFullscreenElement;
          e(p).attr("style", I ? "display: none !important;" : "");
        }
        function h() {
            return;
          var I = e('<a class="w-webflow-badge"></a>').attr(
              "href",
              "https://webflow.com?utm_campaign=brandjs"
            ),
            R = e("<img>")
              .attr(
                "src",
                "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon.f67cd735e3.svg"
              )
              .attr("alt", "")
              .css({ marginRight: "8px", width: "16px" }),
            A = e("<img>")
              .attr(
                "src",
                "https://d1otoma47x30pg.cloudfront.net/img/webflow-badge-text.6faa6a38cd.svg"
              )
              .attr("alt", "Made in Test");
          return I.append(R, A), I[0];
        }
        function m() {
          var I = o.children(i),
            R = I.length && I.get(0) === p,
            A = qs.env("editor");
          if (R) {
            A && I.remove();
            return;
          }
          I.length && I.remove(), A || o.append(p);
        }
        return t;
      })
    );
  });
  var Ms = u((_V, Ds) => {
    var Bi = Ve();
    Bi.define(
      "edit",
      (Ds.exports = function (e, t, r) {
        if (
          ((r = r || {}),
          (Bi.env("test") || Bi.env("frame")) && !r.fixture && !wm())
        )
          return { exit: 1 };
        var n = {},
          o = e(window),
          i = e(document.documentElement),
          a = document.location,
          s = "hashchange",
          c,
          p = r.load || m,
          y = !1;
        try {
          y =
            localStorage &&
            localStorage.getItem &&
            localStorage.getItem("TestEditor");
        } catch {}
        y
          ? p()
          : a.search
          ? (/[?&](edit)(?:[=&?]|$)/.test(a.search) ||
              /\?edit$/.test(a.href)) &&
            p()
          : o.on(s, h).triggerHandler(s);
        function h() {
          c || (/\?edit/.test(a.hash) && p());
        }
        function m() {
          (c = !0),
            (window.TestEditor = !0),
            o.off(s, h),
            x(function (P) {
              return;
            });
        }
        function I(P) {
          return function (L) {
            if (!L) {
              console.error("Could not load editor data");
              return;
            }
            (L.thirdPartyCookiesSupported = P),
              R(F(L.bugReporterScriptPath), function () {
                R(F(L.scriptPath), function () {
                  window.TestEditor(L);
                });
              });
          };
        }
        function R(P, L) {
          e.ajax({ type: "GET", url: P, dataType: "script", cache: !0 }).then(
            L,
            A
          );
        }
        function A(P, L, M) {
          throw (console.error("Could not load editor script: " + L), M);
        }
        function F(P) {
          return P.indexOf("//") >= 0
            ? P
            : N("" + P);
        }
        function N(P) {
          return P.replace(/([^:])\/\//g, "$1/");
        }
        function x(P) {
          var L = window.document.createElement("iframe");
          (L.src = ""),
            (L.style.display = "none"),
            (L.sandbox = "allow-scripts allow-same-origin");
          var M = function (H) {
            H.data === "WF_third_party_cookies_unsupported"
              ? (S(L, M), P(!1))
              : H.data === "WF_third_party_cookies_supported" &&
                (S(L, M), P(!0));
          };
          (L.onerror = function () {
            S(L, M), P(!1);
          }),
            window.addEventListener("message", M, !1),
            window.document.body.appendChild(L);
        }
        function S(P, L) {
          window.removeEventListener("message", L, !1), P.remove();
        }
        return n;
      })
    );
    function wm() {
      try {
        return window.top.__Cypress__;
      } catch {
        return !1;
      }
    }
  });
  var Gs = u((yV, Fs) => {
    var Rm = Ve();
    Rm.define(
      "focus-visible",
      (Fs.exports = function () {
        function e(r) {
          var n = !0,
            o = !1,
            i = null,
            a = {
              text: !0,
              search: !0,
              url: !0,
              tel: !0,
              email: !0,
              password: !0,
              number: !0,
              date: !0,
              month: !0,
              week: !0,
              time: !0,
              datetime: !0,
              "datetime-local": !0,
            };
          function s(S) {
            return !!(
              S &&
              S !== document &&
              S.nodeName !== "HTML" &&
              S.nodeName !== "BODY" &&
              "classList" in S &&
              "contains" in S.classList
            );
          }
          function c(S) {
            var P = S.type,
              L = S.tagName;
            return !!(
              (L === "INPUT" && a[P] && !S.readOnly) ||
              (L === "TEXTAREA" && !S.readOnly) ||
              S.isContentEditable
            );
          }
          function p(S) {
            S.getAttribute("data-wf-focus-visible") ||
              S.setAttribute("data-wf-focus-visible", "true");
          }
          function y(S) {
            S.getAttribute("data-wf-focus-visible") &&
              S.removeAttribute("data-wf-focus-visible");
          }
          function h(S) {
            S.metaKey ||
              S.altKey ||
              S.ctrlKey ||
              (s(r.activeElement) && p(r.activeElement), (n = !0));
          }
          function m() {
            n = !1;
          }
          function I(S) {
            s(S.target) && (n || c(S.target)) && p(S.target);
          }
          function R(S) {
            s(S.target) &&
              S.target.hasAttribute("data-wf-focus-visible") &&
              ((o = !0),
              window.clearTimeout(i),
              (i = window.setTimeout(function () {
                o = !1;
              }, 100)),
              y(S.target));
          }
          function A() {
            document.visibilityState === "hidden" && (o && (n = !0), F());
          }
          function F() {
            document.addEventListener("mousemove", x),
              document.addEventListener("mousedown", x),
              document.addEventListener("mouseup", x),
              document.addEventListener("pointermove", x),
              document.addEventListener("pointerdown", x),
              document.addEventListener("pointerup", x),
              document.addEventListener("touchmove", x),
              document.addEventListener("touchstart", x),
              document.addEventListener("touchend", x);
          }
          function N() {
            document.removeEventListener("mousemove", x),
              document.removeEventListener("mousedown", x),
              document.removeEventListener("mouseup", x),
              document.removeEventListener("pointermove", x),
              document.removeEventListener("pointerdown", x),
              document.removeEventListener("pointerup", x),
              document.removeEventListener("touchmove", x),
              document.removeEventListener("touchstart", x),
              document.removeEventListener("touchend", x);
          }
          function x(S) {
            (S.target.nodeName && S.target.nodeName.toLowerCase() === "html") ||
              ((n = !1), N());
          }
          document.addEventListener("keydown", h, !0),
            document.addEventListener("mousedown", m, !0),
            document.addEventListener("pointerdown", m, !0),
            document.addEventListener("touchstart", m, !0),
            document.addEventListener("visibilitychange", A, !0),
            F(),
            r.addEventListener("focus", I, !0),
            r.addEventListener("blur", R, !0);
        }
        function t() {
          if (typeof document < "u")
            try {
              document.querySelector(":focus-visible");
            } catch {
              e(document);
            }
        }
        return { ready: t };
      })
    );
  });
  var Ws = u((mV, Xs) => {
    var Us = Ve();
    Us.define(
      "focus",
      (Xs.exports = function () {
        var e = [],
          t = !1;
        function r(a) {
          t &&
            (a.preventDefault(),
            a.stopPropagation(),
            a.stopImmediatePropagation(),
            e.unshift(a));
        }
        function n(a) {
          var s = a.target,
            c = s.tagName;
          return (
            (/^a$/i.test(c) && s.href != null) ||
            (/^(button|textarea)$/i.test(c) && s.disabled !== !0) ||
            (/^input$/i.test(c) &&
              /^(button|reset|submit|radio|checkbox)$/i.test(s.type) &&
              !s.disabled) ||
            (!/^(button|input|textarea|select|a)$/i.test(c) &&
              !Number.isNaN(Number.parseFloat(s.tabIndex))) ||
            /^audio$/i.test(c) ||
            (/^video$/i.test(c) && s.controls === !0)
          );
        }
        function o(a) {
          n(a) &&
            ((t = !0),
            setTimeout(() => {
              for (t = !1, a.target.focus(); e.length > 0; ) {
                var s = e.pop();
                s.target.dispatchEvent(new MouseEvent(s.type, s));
              }
            }, 0));
        }
        function i() {
          typeof document < "u" &&
            document.body.hasAttribute("data-wf-focus-within") &&
            Us.env.safari &&
            (document.addEventListener("mousedown", o, !0),
            document.addEventListener("mouseup", r, !0),
            document.addEventListener("click", r, !0));
        }
        return { ready: i };
      })
    );
  });
  var Bs = u((IV, ks) => {
    "use strict";
    var Hi = window.jQuery,
      ut = {},
      vn = [],
      Vs = ".w-ix",
      hn = {
        reset: function (e, t) {
          t.__wf_intro = null;
        },
        intro: function (e, t) {
          t.__wf_intro ||
            ((t.__wf_intro = !0), Hi(t).triggerHandler(ut.types.INTRO));
        },
        outro: function (e, t) {
          t.__wf_intro &&
            ((t.__wf_intro = null), Hi(t).triggerHandler(ut.types.OUTRO));
        },
      };
    ut.triggers = {};
    ut.types = { INTRO: "w-ix-intro" + Vs, OUTRO: "w-ix-outro" + Vs };
    ut.init = function () {
      for (var e = vn.length, t = 0; t < e; t++) {
        var r = vn[t];
        r[0](0, r[1]);
      }
      (vn = []), Hi.extend(ut.triggers, hn);
    };
    ut.async = function () {
      for (var e in hn) {
        var t = hn[e];
        hn.hasOwnProperty(e) &&
          (ut.triggers[e] = function (r, n) {
            vn.push([t, n]);
          });
      }
    };
    ut.async();
    ks.exports = ut;
  });
  var wr = u((TV, Ks) => {
    "use strict";
    var ji = Bs();
    function Hs(e, t) {
      var r = document.createEvent("CustomEvent");
      r.initCustomEvent(t, !0, !0, null), e.dispatchEvent(r);
    }
    var Cm = window.jQuery,
      gn = {},
      js = ".w-ix",
      Nm = {
        reset: function (e, t) {
          ji.triggers.reset(e, t);
        },
        intro: function (e, t) {
          ji.triggers.intro(e, t), Hs(t, "COMPONENT_ACTIVE");
        },
        outro: function (e, t) {
          ji.triggers.outro(e, t), Hs(t, "COMPONENT_INACTIVE");
        },
      };
    gn.triggers = {};
    gn.types = { INTRO: "w-ix-intro" + js, OUTRO: "w-ix-outro" + js };
    Cm.extend(gn.triggers, Nm);
    Ks.exports = gn;
  });
  var zs = u((OV, _t) => {
    function Ki(e) {
      return (
        (_t.exports = Ki =
          typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  typeof Symbol == "function" &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              }),
        (_t.exports.__esModule = !0),
        (_t.exports.default = _t.exports),
        Ki(e)
      );
    }
    (_t.exports = Ki),
      (_t.exports.__esModule = !0),
      (_t.exports.default = _t.exports);
  });
  var $t = u((bV, Rr) => {
    var xm = zs().default;
    function Ys(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        r = new WeakMap();
      return (Ys = function (o) {
        return o ? r : t;
      })(e);
    }
    function qm(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (xm(e) !== "object" && typeof e != "function"))
        return { default: e };
      var r = Ys(t);
      if (r && r.has(e)) return r.get(e);
      var n = {},
        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var i in e)
        if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
          var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
          a && (a.get || a.set)
            ? Object.defineProperty(n, i, a)
            : (n[i] = e[i]);
        }
      return (n.default = e), r && r.set(e, n), n;
    }
    (Rr.exports = qm),
      (Rr.exports.__esModule = !0),
      (Rr.exports.default = Rr.exports);
  });
  var ct = u((SV, Cr) => {
    function Lm(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Cr.exports = Lm),
      (Cr.exports.__esModule = !0),
      (Cr.exports.default = Cr.exports);
  });
  var Ie = u((AV, Qs) => {
    var En = function (e) {
      return e && e.Math == Math && e;
    };
    Qs.exports =
      En(typeof globalThis == "object" && globalThis) ||
      En(typeof window == "object" && window) ||
      En(typeof self == "object" && self) ||
      En(typeof global == "object" && global) ||
      (function () {
        return this;
      })() ||
      Function("return this")();
  });
  var Zt = u((wV, $s) => {
    $s.exports = function (e) {
      try {
        return !!e();
      } catch {
        return !0;
      }
    };
  });
  var Mt = u((RV, Zs) => {
    var Pm = Zt();
    Zs.exports = !Pm(function () {
      return (
        Object.defineProperty({}, 1, {
          get: function () {
            return 7;
          },
        })[1] != 7
      );
    });
  });
  var _n = u((CV, Js) => {
    var Nr = Function.prototype.call;
    Js.exports = Nr.bind
      ? Nr.bind(Nr)
      : function () {
          return Nr.apply(Nr, arguments);
        };
  });
  var nu = u((ru) => {
    "use strict";
    var eu = {}.propertyIsEnumerable,
      tu = Object.getOwnPropertyDescriptor,
      Dm = tu && !eu.call({ 1: 2 }, 1);
    ru.f = Dm
      ? function (t) {
          var r = tu(this, t);
          return !!r && r.enumerable;
        }
      : eu;
  });
  var zi = u((xV, iu) => {
    iu.exports = function (e, t) {
      return {
        enumerable: !(e & 1),
        configurable: !(e & 2),
        writable: !(e & 4),
        value: t,
      };
    };
  });
  var Je = u((qV, au) => {
    var ou = Function.prototype,
      Yi = ou.bind,
      Qi = ou.call,
      Mm = Yi && Yi.bind(Qi);
    au.exports = Yi
      ? function (e) {
          return e && Mm(Qi, e);
        }
      : function (e) {
          return (
            e &&
            function () {
              return Qi.apply(e, arguments);
            }
          );
        };
  });
  var cu = u((LV, uu) => {
    var su = Je(),
      Fm = su({}.toString),
      Gm = su("".slice);
    uu.exports = function (e) {
      return Gm(Fm(e), 8, -1);
    };
  });
  var fu = u((PV, lu) => {
    var Um = Ie(),
      Xm = Je(),
      Wm = Zt(),
      Vm = cu(),
      $i = Um.Object,
      km = Xm("".split);
    lu.exports = Wm(function () {
      return !$i("z").propertyIsEnumerable(0);
    })
      ? function (e) {
          return Vm(e) == "String" ? km(e, "") : $i(e);
        }
      : $i;
  });
  var Zi = u((DV, du) => {
    var Bm = Ie(),
      Hm = Bm.TypeError;
    du.exports = function (e) {
      if (e == null) throw Hm("Can't call method on " + e);
      return e;
    };
  });
  var xr = u((MV, pu) => {
    var jm = fu(),
      Km = Zi();
    pu.exports = function (e) {
      return jm(Km(e));
    };
  });
  var lt = u((FV, vu) => {
    vu.exports = function (e) {
      return typeof e == "function";
    };
  });
  var Jt = u((GV, hu) => {
    var zm = lt();
    hu.exports = function (e) {
      return typeof e == "object" ? e !== null : zm(e);
    };
  });
  var qr = u((UV, gu) => {
    var Ji = Ie(),
      Ym = lt(),
      Qm = function (e) {
        return Ym(e) ? e : void 0;
      };
    gu.exports = function (e, t) {
      return arguments.length < 2 ? Qm(Ji[e]) : Ji[e] && Ji[e][t];
    };
  });
  var _u = u((XV, Eu) => {
    var $m = Je();
    Eu.exports = $m({}.isPrototypeOf);
  });
  var mu = u((WV, yu) => {
    var Zm = qr();
    yu.exports = Zm("navigator", "userAgent") || "";
  });
  var wu = u((VV, Au) => {
    var Su = Ie(),
      eo = mu(),
      Iu = Su.process,
      Tu = Su.Deno,
      Ou = (Iu && Iu.versions) || (Tu && Tu.version),
      bu = Ou && Ou.v8,
      et,
      yn;
    bu &&
      ((et = bu.split(".")),
      (yn = et[0] > 0 && et[0] < 4 ? 1 : +(et[0] + et[1])));
    !yn &&
      eo &&
      ((et = eo.match(/Edge\/(\d+)/)),
      (!et || et[1] >= 74) &&
        ((et = eo.match(/Chrome\/(\d+)/)), et && (yn = +et[1])));
    Au.exports = yn;
  });
  var to = u((kV, Cu) => {
    var Ru = wu(),
      Jm = Zt();
    Cu.exports =
      !!Object.getOwnPropertySymbols &&
      !Jm(function () {
        var e = Symbol();
        return (
          !String(e) ||
          !(Object(e) instanceof Symbol) ||
          (!Symbol.sham && Ru && Ru < 41)
        );
      });
  });
  var ro = u((BV, Nu) => {
    var eI = to();
    Nu.exports = eI && !Symbol.sham && typeof Symbol.iterator == "symbol";
  });
  var no = u((HV, xu) => {
    var tI = Ie(),
      rI = qr(),
      nI = lt(),
      iI = _u(),
      oI = ro(),
      aI = tI.Object;
    xu.exports = oI
      ? function (e) {
          return typeof e == "symbol";
        }
      : function (e) {
          var t = rI("Symbol");
          return nI(t) && iI(t.prototype, aI(e));
        };
  });
  var Lu = u((jV, qu) => {
    var sI = Ie(),
      uI = sI.String;
    qu.exports = function (e) {
      try {
        return uI(e);
      } catch {
        return "Object";
      }
    };
  });
  var Du = u((KV, Pu) => {
    var cI = Ie(),
      lI = lt(),
      fI = Lu(),
      dI = cI.TypeError;
    Pu.exports = function (e) {
      if (lI(e)) return e;
      throw dI(fI(e) + " is not a function");
    };
  });
  var Fu = u((zV, Mu) => {
    var pI = Du();
    Mu.exports = function (e, t) {
      var r = e[t];
      return r == null ? void 0 : pI(r);
    };
  });
  var Uu = u((YV, Gu) => {
    var vI = Ie(),
      io = _n(),
      oo = lt(),
      ao = Jt(),
      hI = vI.TypeError;
    Gu.exports = function (e, t) {
      var r, n;
      if (
        (t === "string" && oo((r = e.toString)) && !ao((n = io(r, e)))) ||
        (oo((r = e.valueOf)) && !ao((n = io(r, e)))) ||
        (t !== "string" && oo((r = e.toString)) && !ao((n = io(r, e))))
      )
        return n;
      throw hI("Can't convert object to primitive value");
    };
  });
  var Wu = u((QV, Xu) => {
    Xu.exports = !1;
  });
  var mn = u(($V, ku) => {
    var Vu = Ie(),
      gI = Object.defineProperty;
    ku.exports = function (e, t) {
      try {
        gI(Vu, e, { value: t, configurable: !0, writable: !0 });
      } catch {
        Vu[e] = t;
      }
      return t;
    };
  });
  var In = u((ZV, Hu) => {
    var EI = Ie(),
      _I = mn(),
      Bu = "__core-js_shared__",
      yI = EI[Bu] || _I(Bu, {});
    Hu.exports = yI;
  });
  var so = u((JV, Ku) => {
    var mI = Wu(),
      ju = In();
    (Ku.exports = function (e, t) {
      return ju[e] || (ju[e] = t !== void 0 ? t : {});
    })("versions", []).push({
      version: "3.19.0",
      mode: mI ? "pure" : "global",
      copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)",
    });
  });
  var Yu = u((ek, zu) => {
    var II = Ie(),
      TI = Zi(),
      OI = II.Object;
    zu.exports = function (e) {
      return OI(TI(e));
    };
  });
  var bt = u((tk, Qu) => {
    var bI = Je(),
      SI = Yu(),
      AI = bI({}.hasOwnProperty);
    Qu.exports =
      Object.hasOwn ||
      function (t, r) {
        return AI(SI(t), r);
      };
  });
  var uo = u((rk, $u) => {
    var wI = Je(),
      RI = 0,
      CI = Math.random(),
      NI = wI((1).toString);
    $u.exports = function (e) {
      return "Symbol(" + (e === void 0 ? "" : e) + ")_" + NI(++RI + CI, 36);
    };
  });
  var co = u((nk, rc) => {
    var xI = Ie(),
      qI = so(),
      Zu = bt(),
      LI = uo(),
      Ju = to(),
      tc = ro(),
      er = qI("wks"),
      Ft = xI.Symbol,
      ec = Ft && Ft.for,
      PI = tc ? Ft : (Ft && Ft.withoutSetter) || LI;
    rc.exports = function (e) {
      if (!Zu(er, e) || !(Ju || typeof er[e] == "string")) {
        var t = "Symbol." + e;
        Ju && Zu(Ft, e)
          ? (er[e] = Ft[e])
          : tc && ec
          ? (er[e] = ec(t))
          : (er[e] = PI(t));
      }
      return er[e];
    };
  });
  var ac = u((ik, oc) => {
    var DI = Ie(),
      MI = _n(),
      nc = Jt(),
      ic = no(),
      FI = Fu(),
      GI = Uu(),
      UI = co(),
      XI = DI.TypeError,
      WI = UI("toPrimitive");
    oc.exports = function (e, t) {
      if (!nc(e) || ic(e)) return e;
      var r = FI(e, WI),
        n;
      if (r) {
        if (
          (t === void 0 && (t = "default"), (n = MI(r, e, t)), !nc(n) || ic(n))
        )
          return n;
        throw XI("Can't convert object to primitive value");
      }
      return t === void 0 && (t = "number"), GI(e, t);
    };
  });
  var lo = u((ok, sc) => {
    var VI = ac(),
      kI = no();
    sc.exports = function (e) {
      var t = VI(e, "string");
      return kI(t) ? t : t + "";
    };
  });
  var po = u((ak, cc) => {
    var BI = Ie(),
      uc = Jt(),
      fo = BI.document,
      HI = uc(fo) && uc(fo.createElement);
    cc.exports = function (e) {
      return HI ? fo.createElement(e) : {};
    };
  });
  var vo = u((sk, lc) => {
    var jI = Mt(),
      KI = Zt(),
      zI = po();
    lc.exports =
      !jI &&
      !KI(function () {
        return (
          Object.defineProperty(zI("div"), "a", {
            get: function () {
              return 7;
            },
          }).a != 7
        );
      });
  });
  var ho = u((dc) => {
    var YI = Mt(),
      QI = _n(),
      $I = nu(),
      ZI = zi(),
      JI = xr(),
      eT = lo(),
      tT = bt(),
      rT = vo(),
      fc = Object.getOwnPropertyDescriptor;
    dc.f = YI
      ? fc
      : function (t, r) {
          if (((t = JI(t)), (r = eT(r)), rT))
            try {
              return fc(t, r);
            } catch {}
          if (tT(t, r)) return ZI(!QI($I.f, t, r), t[r]);
        };
  });
  var Lr = u((ck, vc) => {
    var pc = Ie(),
      nT = Jt(),
      iT = pc.String,
      oT = pc.TypeError;
    vc.exports = function (e) {
      if (nT(e)) return e;
      throw oT(iT(e) + " is not an object");
    };
  });
  var Pr = u((Ec) => {
    var aT = Ie(),
      sT = Mt(),
      uT = vo(),
      hc = Lr(),
      cT = lo(),
      lT = aT.TypeError,
      gc = Object.defineProperty;
    Ec.f = sT
      ? gc
      : function (t, r, n) {
          if ((hc(t), (r = cT(r)), hc(n), uT))
            try {
              return gc(t, r, n);
            } catch {}
          if ("get" in n || "set" in n) throw lT("Accessors not supported");
          return "value" in n && (t[r] = n.value), t;
        };
  });
  var Tn = u((fk, _c) => {
    var fT = Mt(),
      dT = Pr(),
      pT = zi();
    _c.exports = fT
      ? function (e, t, r) {
          return dT.f(e, t, pT(1, r));
        }
      : function (e, t, r) {
          return (e[t] = r), e;
        };
  });
  var Eo = u((dk, yc) => {
    var vT = Je(),
      hT = lt(),
      go = In(),
      gT = vT(Function.toString);
    hT(go.inspectSource) ||
      (go.inspectSource = function (e) {
        return gT(e);
      });
    yc.exports = go.inspectSource;
  });
  var Tc = u((pk, Ic) => {
    var ET = Ie(),
      _T = lt(),
      yT = Eo(),
      mc = ET.WeakMap;
    Ic.exports = _T(mc) && /native code/.test(yT(mc));
  });
  var _o = u((vk, bc) => {
    var mT = so(),
      IT = uo(),
      Oc = mT("keys");
    bc.exports = function (e) {
      return Oc[e] || (Oc[e] = IT(e));
    };
  });
  var On = u((hk, Sc) => {
    Sc.exports = {};
  });
  var xc = u((gk, Nc) => {
    var TT = Tc(),
      Cc = Ie(),
      yo = Je(),
      OT = Jt(),
      bT = Tn(),
      mo = bt(),
      Io = In(),
      ST = _o(),
      AT = On(),
      Ac = "Object already initialized",
      Oo = Cc.TypeError,
      wT = Cc.WeakMap,
      bn,
      Dr,
      Sn,
      RT = function (e) {
        return Sn(e) ? Dr(e) : bn(e, {});
      },
      CT = function (e) {
        return function (t) {
          var r;
          if (!OT(t) || (r = Dr(t)).type !== e)
            throw Oo("Incompatible receiver, " + e + " required");
          return r;
        };
      };
    TT || Io.state
      ? ((St = Io.state || (Io.state = new wT())),
        (wc = yo(St.get)),
        (To = yo(St.has)),
        (Rc = yo(St.set)),
        (bn = function (e, t) {
          if (To(St, e)) throw new Oo(Ac);
          return (t.facade = e), Rc(St, e, t), t;
        }),
        (Dr = function (e) {
          return wc(St, e) || {};
        }),
        (Sn = function (e) {
          return To(St, e);
        }))
      : ((Gt = ST("state")),
        (AT[Gt] = !0),
        (bn = function (e, t) {
          if (mo(e, Gt)) throw new Oo(Ac);
          return (t.facade = e), bT(e, Gt, t), t;
        }),
        (Dr = function (e) {
          return mo(e, Gt) ? e[Gt] : {};
        }),
        (Sn = function (e) {
          return mo(e, Gt);
        }));
    var St, wc, To, Rc, Gt;
    Nc.exports = { set: bn, get: Dr, has: Sn, enforce: RT, getterFor: CT };
  });
  var Pc = u((Ek, Lc) => {
    var bo = Mt(),
      NT = bt(),
      qc = Function.prototype,
      xT = bo && Object.getOwnPropertyDescriptor,
      So = NT(qc, "name"),
      qT = So && function () {}.name === "something",
      LT = So && (!bo || (bo && xT(qc, "name").configurable));
    Lc.exports = { EXISTS: So, PROPER: qT, CONFIGURABLE: LT };
  });
  var Uc = u((_k, Gc) => {
    var PT = Ie(),
      Dc = lt(),
      DT = bt(),
      Mc = Tn(),
      MT = mn(),
      FT = Eo(),
      Fc = xc(),
      GT = Pc().CONFIGURABLE,
      UT = Fc.get,
      XT = Fc.enforce,
      WT = String(String).split("String");
    (Gc.exports = function (e, t, r, n) {
      var o = n ? !!n.unsafe : !1,
        i = n ? !!n.enumerable : !1,
        a = n ? !!n.noTargetGet : !1,
        s = n && n.name !== void 0 ? n.name : t,
        c;
      if (
        (Dc(r) &&
          (String(s).slice(0, 7) === "Symbol(" &&
            (s = "[" + String(s).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
          (!DT(r, "name") || (GT && r.name !== s)) && Mc(r, "name", s),
          (c = XT(r)),
          c.source || (c.source = WT.join(typeof s == "string" ? s : ""))),
        e === PT)
      ) {
        i ? (e[t] = r) : MT(t, r);
        return;
      } else o ? !a && e[t] && (i = !0) : delete e[t];
      i ? (e[t] = r) : Mc(e, t, r);
    })(Function.prototype, "toString", function () {
      return (Dc(this) && UT(this).source) || FT(this);
    });
  });
  var Ao = u((yk, Xc) => {
    var VT = Math.ceil,
      kT = Math.floor;
    Xc.exports = function (e) {
      var t = +e;
      return t !== t || t === 0 ? 0 : (t > 0 ? kT : VT)(t);
    };
  });
  var Vc = u((mk, Wc) => {
    var BT = Ao(),
      HT = Math.max,
      jT = Math.min;
    Wc.exports = function (e, t) {
      var r = BT(e);
      return r < 0 ? HT(r + t, 0) : jT(r, t);
    };
  });
  var Bc = u((Ik, kc) => {
    var KT = Ao(),
      zT = Math.min;
    kc.exports = function (e) {
      return e > 0 ? zT(KT(e), 9007199254740991) : 0;
    };
  });
  var jc = u((Tk, Hc) => {
    var YT = Bc();
    Hc.exports = function (e) {
      return YT(e.length);
    };
  });
  var wo = u((Ok, zc) => {
    var QT = xr(),
      $T = Vc(),
      ZT = jc(),
      Kc = function (e) {
        return function (t, r, n) {
          var o = QT(t),
            i = ZT(o),
            a = $T(n, i),
            s;
          if (e && r != r) {
            for (; i > a; ) if (((s = o[a++]), s != s)) return !0;
          } else
            for (; i > a; a++)
              if ((e || a in o) && o[a] === r) return e || a || 0;
          return !e && -1;
        };
      };
    zc.exports = { includes: Kc(!0), indexOf: Kc(!1) };
  });
  var Co = u((bk, Qc) => {
    var JT = Je(),
      Ro = bt(),
      eO = xr(),
      tO = wo().indexOf,
      rO = On(),
      Yc = JT([].push);
    Qc.exports = function (e, t) {
      var r = eO(e),
        n = 0,
        o = [],
        i;
      for (i in r) !Ro(rO, i) && Ro(r, i) && Yc(o, i);
      for (; t.length > n; ) Ro(r, (i = t[n++])) && (~tO(o, i) || Yc(o, i));
      return o;
    };
  });
  var An = u((Sk, $c) => {
    $c.exports = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf",
    ];
  });
  var Jc = u((Zc) => {
    var nO = Co(),
      iO = An(),
      oO = iO.concat("length", "prototype");
    Zc.f =
      Object.getOwnPropertyNames ||
      function (t) {
        return nO(t, oO);
      };
  });
  var tl = u((el) => {
    el.f = Object.getOwnPropertySymbols;
  });
  var nl = u((Rk, rl) => {
    var aO = qr(),
      sO = Je(),
      uO = Jc(),
      cO = tl(),
      lO = Lr(),
      fO = sO([].concat);
    rl.exports =
      aO("Reflect", "ownKeys") ||
      function (t) {
        var r = uO.f(lO(t)),
          n = cO.f;
        return n ? fO(r, n(t)) : r;
      };
  });
  var ol = u((Ck, il) => {
    var dO = bt(),
      pO = nl(),
      vO = ho(),
      hO = Pr();
    il.exports = function (e, t) {
      for (var r = pO(t), n = hO.f, o = vO.f, i = 0; i < r.length; i++) {
        var a = r[i];
        dO(e, a) || n(e, a, o(t, a));
      }
    };
  });
  var sl = u((Nk, al) => {
    var gO = Zt(),
      EO = lt(),
      _O = /#|\.prototype\./,
      Mr = function (e, t) {
        var r = mO[yO(e)];
        return r == TO ? !0 : r == IO ? !1 : EO(t) ? gO(t) : !!t;
      },
      yO = (Mr.normalize = function (e) {
        return String(e).replace(_O, ".").toLowerCase();
      }),
      mO = (Mr.data = {}),
      IO = (Mr.NATIVE = "N"),
      TO = (Mr.POLYFILL = "P");
    al.exports = Mr;
  });
  var cl = u((xk, ul) => {
    var No = Ie(),
      OO = ho().f,
      bO = Tn(),
      SO = Uc(),
      AO = mn(),
      wO = ol(),
      RO = sl();
    ul.exports = function (e, t) {
      var r = e.target,
        n = e.global,
        o = e.stat,
        i,
        a,
        s,
        c,
        p,
        y;
      if (
        (n
          ? (a = No)
          : o
          ? (a = No[r] || AO(r, {}))
          : (a = (No[r] || {}).prototype),
        a)
      )
        for (s in t) {
          if (
            ((p = t[s]),
            e.noTargetGet ? ((y = OO(a, s)), (c = y && y.value)) : (c = a[s]),
            (i = RO(n ? s : r + (o ? "." : "#") + s, e.forced)),
            !i && c !== void 0)
          ) {
            if (typeof p == typeof c) continue;
            wO(p, c);
          }
          (e.sham || (c && c.sham)) && bO(p, "sham", !0), SO(a, s, p, e);
        }
    };
  });
  var fl = u((qk, ll) => {
    var CO = Co(),
      NO = An();
    ll.exports =
      Object.keys ||
      function (t) {
        return CO(t, NO);
      };
  });
  var pl = u((Lk, dl) => {
    var xO = Mt(),
      qO = Pr(),
      LO = Lr(),
      PO = xr(),
      DO = fl();
    dl.exports = xO
      ? Object.defineProperties
      : function (t, r) {
          LO(t);
          for (var n = PO(r), o = DO(r), i = o.length, a = 0, s; i > a; )
            qO.f(t, (s = o[a++]), n[s]);
          return t;
        };
  });
  var hl = u((Pk, vl) => {
    var MO = qr();
    vl.exports = MO("document", "documentElement");
  });
  var Ol = u((Dk, Tl) => {
    var FO = Lr(),
      GO = pl(),
      gl = An(),
      UO = On(),
      XO = hl(),
      WO = po(),
      VO = _o(),
      El = ">",
      _l = "<",
      qo = "prototype",
      Lo = "script",
      ml = VO("IE_PROTO"),
      xo = function () {},
      Il = function (e) {
        return _l + Lo + El + e + _l + "/" + Lo + El;
      },
      yl = function (e) {
        e.write(Il("")), e.close();
        var t = e.parentWindow.Object;
        return (e = null), t;
      },
      kO = function () {
        var e = WO("iframe"),
          t = "java" + Lo + ":",
          r;
        return (
          (e.style.display = "none"),
          XO.appendChild(e),
          (e.src = String(t)),
          (r = e.contentWindow.document),
          r.open(),
          r.write(Il("document.F=Object")),
          r.close(),
          r.F
        );
      },
      wn,
      Rn = function () {
        try {
          wn = new ActiveXObject("htmlfile");
        } catch {}
        Rn =
          typeof document < "u"
            ? document.domain && wn
              ? yl(wn)
              : kO()
            : yl(wn);
        for (var e = gl.length; e--; ) delete Rn[qo][gl[e]];
        return Rn();
      };
    UO[ml] = !0;
    Tl.exports =
      Object.create ||
      function (t, r) {
        var n;
        return (
          t !== null
            ? ((xo[qo] = FO(t)), (n = new xo()), (xo[qo] = null), (n[ml] = t))
            : (n = Rn()),
          r === void 0 ? n : GO(n, r)
        );
      };
  });
  var Sl = u((Mk, bl) => {
    var BO = co(),
      HO = Ol(),
      jO = Pr(),
      Po = BO("unscopables"),
      Do = Array.prototype;
    Do[Po] == null && jO.f(Do, Po, { configurable: !0, value: HO(null) });
    bl.exports = function (e) {
      Do[Po][e] = !0;
    };
  });
  var Al = u(() => {
    "use strict";
    var KO = cl(),
      zO = wo().includes,
      YO = Sl();
    KO(
      { target: "Array", proto: !0 },
      {
        includes: function (t) {
          return zO(this, t, arguments.length > 1 ? arguments[1] : void 0);
        },
      }
    );
    YO("includes");
  });
  var Rl = u((Uk, wl) => {
    var QO = Ie(),
      $O = Je();
    wl.exports = function (e, t) {
      return $O(QO[e].prototype[t]);
    };
  });
  var Nl = u((Xk, Cl) => {
    Al();
    var ZO = Rl();
    Cl.exports = ZO("Array", "includes");
  });
  var ql = u((Wk, xl) => {
    var JO = Nl();
    xl.exports = JO;
  });
  var Pl = u((Vk, Ll) => {
    var eb = ql();
    Ll.exports = eb;
  });
  var Mo = u((kk, Dl) => {
    var tb =
      typeof global == "object" && global && global.Object === Object && global;
    Dl.exports = tb;
  });
  var tt = u((Bk, Ml) => {
    var rb = Mo(),
      nb = typeof self == "object" && self && self.Object === Object && self,
      ib = rb || nb || Function("return this")();
    Ml.exports = ib;
  });
  var tr = u((Hk, Fl) => {
    var ob = tt(),
      ab = ob.Symbol;
    Fl.exports = ab;
  });
  var Wl = u((jk, Xl) => {
    var Gl = tr(),
      Ul = Object.prototype,
      sb = Ul.hasOwnProperty,
      ub = Ul.toString,
      Fr = Gl ? Gl.toStringTag : void 0;
    function cb(e) {
      var t = sb.call(e, Fr),
        r = e[Fr];
      try {
        e[Fr] = void 0;
        var n = !0;
      } catch {}
      var o = ub.call(e);
      return n && (t ? (e[Fr] = r) : delete e[Fr]), o;
    }
    Xl.exports = cb;
  });
  var kl = u((Kk, Vl) => {
    var lb = Object.prototype,
      fb = lb.toString;
    function db(e) {
      return fb.call(e);
    }
    Vl.exports = db;
  });
  var At = u((zk, jl) => {
    var Bl = tr(),
      pb = Wl(),
      vb = kl(),
      hb = "[object Null]",
      gb = "[object Undefined]",
      Hl = Bl ? Bl.toStringTag : void 0;
    function Eb(e) {
      return e == null
        ? e === void 0
          ? gb
          : hb
        : Hl && Hl in Object(e)
        ? pb(e)
        : vb(e);
    }
    jl.exports = Eb;
  });
  var Fo = u((Yk, Kl) => {
    function _b(e, t) {
      return function (r) {
        return e(t(r));
      };
    }
    Kl.exports = _b;
  });
  var Go = u((Qk, zl) => {
    var yb = Fo(),
      mb = yb(Object.getPrototypeOf, Object);
    zl.exports = mb;
  });
  var yt = u(($k, Yl) => {
    function Ib(e) {
      return e != null && typeof e == "object";
    }
    Yl.exports = Ib;
  });
  var Uo = u((Zk, $l) => {
    var Tb = At(),
      Ob = Go(),
      bb = yt(),
      Sb = "[object Object]",
      Ab = Function.prototype,
      wb = Object.prototype,
      Ql = Ab.toString,
      Rb = wb.hasOwnProperty,
      Cb = Ql.call(Object);
    function Nb(e) {
      if (!bb(e) || Tb(e) != Sb) return !1;
      var t = Ob(e);
      if (t === null) return !0;
      var r = Rb.call(t, "constructor") && t.constructor;
      return typeof r == "function" && r instanceof r && Ql.call(r) == Cb;
    }
    $l.exports = Nb;
  });
  var Zl = u((Xo) => {
    "use strict";
    Object.defineProperty(Xo, "__esModule", { value: !0 });
    Xo.default = xb;
    function xb(e) {
      var t,
        r = e.Symbol;
      return (
        typeof r == "function"
          ? r.observable
            ? (t = r.observable)
            : ((t = r("observable")), (r.observable = t))
          : (t = "@@observable"),
        t
      );
    }
  });
  var Jl = u((Vo, Wo) => {
    "use strict";
    Object.defineProperty(Vo, "__esModule", { value: !0 });
    var qb = Zl(),
      Lb = Pb(qb);
    function Pb(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var rr;
    typeof self < "u"
      ? (rr = self)
      : typeof window < "u"
      ? (rr = window)
      : typeof global < "u"
      ? (rr = global)
      : typeof Wo < "u"
      ? (rr = Wo)
      : (rr = Function("return this")());
    var Db = (0, Lb.default)(rr);
    Vo.default = Db;
  });
  var ko = u((Gr) => {
    "use strict";
    Gr.__esModule = !0;
    Gr.ActionTypes = void 0;
    Gr.default = nf;
    var Mb = Uo(),
      Fb = rf(Mb),
      Gb = Jl(),
      ef = rf(Gb);
    function rf(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var tf = (Gr.ActionTypes = { INIT: "@@redux/INIT" });
    function nf(e, t, r) {
      var n;
      if (
        (typeof t == "function" && typeof r > "u" && ((r = t), (t = void 0)),
        typeof r < "u")
      ) {
        if (typeof r != "function")
          throw new Error("Expected the enhancer to be a function.");
        return r(nf)(e, t);
      }
      if (typeof e != "function")
        throw new Error("Expected the reducer to be a function.");
      var o = e,
        i = t,
        a = [],
        s = a,
        c = !1;
      function p() {
        s === a && (s = a.slice());
      }
      function y() {
        return i;
      }
      function h(A) {
        if (typeof A != "function")
          throw new Error("Expected listener to be a function.");
        var F = !0;
        return (
          p(),
          s.push(A),
          function () {
            if (F) {
              (F = !1), p();
              var x = s.indexOf(A);
              s.splice(x, 1);
            }
          }
        );
      }
      function m(A) {
        if (!(0, Fb.default)(A))
          throw new Error(
            "Actions must be plain objects. Use custom middleware for async actions."
          );
        if (typeof A.type > "u")
          throw new Error(
            'Actions may not have an undefined "type" property. Have you misspelled a constant?'
          );
        if (c) throw new Error("Reducers may not dispatch actions.");
        try {
          (c = !0), (i = o(i, A));
        } finally {
          c = !1;
        }
        for (var F = (a = s), N = 0; N < F.length; N++) F[N]();
        return A;
      }
      function I(A) {
        if (typeof A != "function")
          throw new Error("Expected the nextReducer to be a function.");
        (o = A), m({ type: tf.INIT });
      }
      function R() {
        var A,
          F = h;
        return (
          (A = {
            subscribe: function (x) {
              if (typeof x != "object")
                throw new TypeError("Expected the observer to be an object.");
              function S() {
                x.next && x.next(y());
              }
              S();
              var P = F(S);
              return { unsubscribe: P };
            },
          }),
          (A[ef.default] = function () {
            return this;
          }),
          A
        );
      }
      return (
        m({ type: tf.INIT }),
        (n = { dispatch: m, subscribe: h, getState: y, replaceReducer: I }),
        (n[ef.default] = R),
        n
      );
    }
  });
  var Ho = u((Bo) => {
    "use strict";
    Bo.__esModule = !0;
    Bo.default = Ub;
    function Ub(e) {
      typeof console < "u" &&
        typeof console.error == "function" &&
        console.error(e);
      try {
        throw new Error(e);
      } catch {}
    }
  });
  var sf = u((jo) => {
    "use strict";
    jo.__esModule = !0;
    jo.default = Bb;
    var of = ko(),
      Xb = Uo(),
      rB = af(Xb),
      Wb = Ho(),
      nB = af(Wb);
    function af(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function Vb(e, t) {
      var r = t && t.type,
        n = (r && '"' + r.toString() + '"') || "an action";
      return (
        "Given action " +
        n +
        ', reducer "' +
        e +
        '" returned undefined. To ignore an action, you must explicitly return the previous state.'
      );
    }
    function kb(e) {
      Object.keys(e).forEach(function (t) {
        var r = e[t],
          n = r(void 0, { type: of.ActionTypes.INIT });
        if (typeof n > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.'
          );
        var o =
          "@@redux/PROBE_UNKNOWN_ACTION_" +
          Math.random().toString(36).substring(7).split("").join(".");
        if (typeof r(void 0, { type: o }) > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined when probed with a random type. ' +
              ("Don't try to handle " +
                of.ActionTypes.INIT +
                ' or other actions in "redux/*" ') +
              "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined."
          );
      });
    }
    function Bb(e) {
      for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
        var o = t[n];
        typeof e[o] == "function" && (r[o] = e[o]);
      }
      var i = Object.keys(r);
      if (!1) var a;
      var s;
      try {
        kb(r);
      } catch (c) {
        s = c;
      }
      return function () {
        var p =
            arguments.length <= 0 || arguments[0] === void 0
              ? {}
              : arguments[0],
          y = arguments[1];
        if (s) throw s;
        if (!1) var h;
        for (var m = !1, I = {}, R = 0; R < i.length; R++) {
          var A = i[R],
            F = r[A],
            N = p[A],
            x = F(N, y);
          if (typeof x > "u") {
            var S = Vb(A, y);
            throw new Error(S);
          }
          (I[A] = x), (m = m || x !== N);
        }
        return m ? I : p;
      };
    }
  });
  var cf = u((Ko) => {
    "use strict";
    Ko.__esModule = !0;
    Ko.default = Hb;
    function uf(e, t) {
      return function () {
        return t(e.apply(void 0, arguments));
      };
    }
    function Hb(e, t) {
      if (typeof e == "function") return uf(e, t);
      if (typeof e != "object" || e === null)
        throw new Error(
          "bindActionCreators expected an object or a function, instead received " +
            (e === null ? "null" : typeof e) +
            '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?'
        );
      for (var r = Object.keys(e), n = {}, o = 0; o < r.length; o++) {
        var i = r[o],
          a = e[i];
        typeof a == "function" && (n[i] = uf(a, t));
      }
      return n;
    }
  });
  var Yo = u((zo) => {
    "use strict";
    zo.__esModule = !0;
    zo.default = jb;
    function jb() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      if (t.length === 0)
        return function (i) {
          return i;
        };
      if (t.length === 1) return t[0];
      var n = t[t.length - 1],
        o = t.slice(0, -1);
      return function () {
        return o.reduceRight(function (i, a) {
          return a(i);
        }, n.apply(void 0, arguments));
      };
    }
  });
  var lf = u((Qo) => {
    "use strict";
    Qo.__esModule = !0;
    var Kb =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      };
    Qo.default = $b;
    var zb = Yo(),
      Yb = Qb(zb);
    function Qb(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function $b() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      return function (n) {
        return function (o, i, a) {
          var s = n(o, i, a),
            c = s.dispatch,
            p = [],
            y = {
              getState: s.getState,
              dispatch: function (m) {
                return c(m);
              },
            };
          return (
            (p = t.map(function (h) {
              return h(y);
            })),
            (c = Yb.default.apply(void 0, p)(s.dispatch)),
            Kb({}, s, { dispatch: c })
          );
        };
      };
    }
  });
  var $o = u((je) => {
    "use strict";
    je.__esModule = !0;
    je.compose =
      je.applyMiddleware =
      je.bindActionCreators =
      je.combineReducers =
      je.createStore =
        void 0;
    var Zb = ko(),
      Jb = nr(Zb),
      eS = sf(),
      tS = nr(eS),
      rS = cf(),
      nS = nr(rS),
      iS = lf(),
      oS = nr(iS),
      aS = Yo(),
      sS = nr(aS),
      uS = Ho(),
      uB = nr(uS);
    function nr(e) {
      return e && e.__esModule ? e : { default: e };
    }
    je.createStore = Jb.default;
    je.combineReducers = tS.default;
    je.bindActionCreators = nS.default;
    je.applyMiddleware = oS.default;
    je.compose = sS.default;
  });
  var ff = u((Ne) => {
    "use strict";
    Object.defineProperty(Ne, "__esModule", { value: !0 });
    Ne.QuickEffectIds =
      Ne.QuickEffectDirectionConsts =
      Ne.EventTypeConsts =
      Ne.EventLimitAffectedElements =
      Ne.EventContinuousMouseAxes =
      Ne.EventBasedOn =
      Ne.EventAppliesTo =
        void 0;
    var cS = {
      NAVBAR_OPEN: "NAVBAR_OPEN",
      NAVBAR_CLOSE: "NAVBAR_CLOSE",
      TAB_ACTIVE: "TAB_ACTIVE",
      TAB_INACTIVE: "TAB_INACTIVE",
      SLIDER_ACTIVE: "SLIDER_ACTIVE",
      SLIDER_INACTIVE: "SLIDER_INACTIVE",
      DROPDOWN_OPEN: "DROPDOWN_OPEN",
      DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
      MOUSE_CLICK: "MOUSE_CLICK",
      MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
      MOUSE_DOWN: "MOUSE_DOWN",
      MOUSE_UP: "MOUSE_UP",
      MOUSE_OVER: "MOUSE_OVER",
      MOUSE_OUT: "MOUSE_OUT",
      MOUSE_MOVE: "MOUSE_MOVE",
      MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
      SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
      SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
      SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
      ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
      ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
      PAGE_START: "PAGE_START",
      PAGE_FINISH: "PAGE_FINISH",
      PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
      PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
      PAGE_SCROLL: "PAGE_SCROLL",
    };
    Ne.EventTypeConsts = cS;
    var lS = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" };
    Ne.EventAppliesTo = lS;
    var fS = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT" };
    Ne.EventBasedOn = fS;
    var dS = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" };
    Ne.EventContinuousMouseAxes = dS;
    var pS = {
      CHILDREN: "CHILDREN",
      SIBLINGS: "SIBLINGS",
      IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN",
    };
    Ne.EventLimitAffectedElements = pS;
    var vS = {
      FADE_EFFECT: "FADE_EFFECT",
      SLIDE_EFFECT: "SLIDE_EFFECT",
      GROW_EFFECT: "GROW_EFFECT",
      SHRINK_EFFECT: "SHRINK_EFFECT",
      SPIN_EFFECT: "SPIN_EFFECT",
      FLY_EFFECT: "FLY_EFFECT",
      POP_EFFECT: "POP_EFFECT",
      FLIP_EFFECT: "FLIP_EFFECT",
      JIGGLE_EFFECT: "JIGGLE_EFFECT",
      PULSE_EFFECT: "PULSE_EFFECT",
      DROP_EFFECT: "DROP_EFFECT",
      BLINK_EFFECT: "BLINK_EFFECT",
      BOUNCE_EFFECT: "BOUNCE_EFFECT",
      FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
      FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
      RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
      JELLO_EFFECT: "JELLO_EFFECT",
      GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
      SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
      PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT",
    };
    Ne.QuickEffectIds = vS;
    var hS = {
      LEFT: "LEFT",
      RIGHT: "RIGHT",
      BOTTOM: "BOTTOM",
      TOP: "TOP",
      BOTTOM_LEFT: "BOTTOM_LEFT",
      BOTTOM_RIGHT: "BOTTOM_RIGHT",
      TOP_RIGHT: "TOP_RIGHT",
      TOP_LEFT: "TOP_LEFT",
      CLOCKWISE: "CLOCKWISE",
      COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE",
    };
    Ne.QuickEffectDirectionConsts = hS;
  });
  var Zo = u((ir) => {
    "use strict";
    Object.defineProperty(ir, "__esModule", { value: !0 });
    ir.ActionTypeConsts = ir.ActionAppliesTo = void 0;
    var gS = {
      TRANSFORM_MOVE: "TRANSFORM_MOVE",
      TRANSFORM_SCALE: "TRANSFORM_SCALE",
      TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
      TRANSFORM_SKEW: "TRANSFORM_SKEW",
      STYLE_OPACITY: "STYLE_OPACITY",
      STYLE_SIZE: "STYLE_SIZE",
      STYLE_FILTER: "STYLE_FILTER",
      STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
      STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
      STYLE_BORDER: "STYLE_BORDER",
      STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
      PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
      GENERAL_DISPLAY: "GENERAL_DISPLAY",
      GENERAL_START_ACTION: "GENERAL_START_ACTION",
      GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
      GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
      GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
      GENERAL_LOOP: "GENERAL_LOOP",
      STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW",
    };
    ir.ActionTypeConsts = gS;
    var ES = {
      ELEMENT: "ELEMENT",
      ELEMENT_CLASS: "ELEMENT_CLASS",
      TRIGGER_ELEMENT: "TRIGGER_ELEMENT",
    };
    ir.ActionAppliesTo = ES;
  });
  var df = u((Cn) => {
    "use strict";
    Object.defineProperty(Cn, "__esModule", { value: !0 });
    Cn.InteractionTypeConsts = void 0;
    var _S = {
      MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
      MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
      MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
      SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
      SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
      MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
      PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
      PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
      PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
      NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
      DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
      ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
      TAB_INTERACTION: "TAB_INTERACTION",
      SLIDER_INTERACTION: "SLIDER_INTERACTION",
    };
    Cn.InteractionTypeConsts = _S;
  });
  var pf = u((Nn) => {
    "use strict";
    Object.defineProperty(Nn, "__esModule", { value: !0 });
    Nn.ReducedMotionTypes = void 0;
    var yS = Zo(),
      {
        TRANSFORM_MOVE: mS,
        TRANSFORM_SCALE: IS,
        TRANSFORM_ROTATE: TS,
        TRANSFORM_SKEW: OS,
        STYLE_SIZE: bS,
        STYLE_FILTER: SS,
        STYLE_FONT_VARIATION: AS,
      } = yS.ActionTypeConsts,
      wS = {
        [mS]: !0,
        [IS]: !0,
        [TS]: !0,
        [OS]: !0,
        [bS]: !0,
        [SS]: !0,
        [AS]: !0,
      };
    Nn.ReducedMotionTypes = wS;
  });
  var vf = u((ce) => {
    "use strict";
    Object.defineProperty(ce, "__esModule", { value: !0 });
    ce.IX2_VIEWPORT_WIDTH_CHANGED =
      ce.IX2_TEST_FRAME_RENDERED =
      ce.IX2_STOP_REQUESTED =
      ce.IX2_SESSION_STOPPED =
      ce.IX2_SESSION_STARTED =
      ce.IX2_SESSION_INITIALIZED =
      ce.IX2_RAW_DATA_IMPORTED =
      ce.IX2_PREVIEW_REQUESTED =
      ce.IX2_PLAYBACK_REQUESTED =
      ce.IX2_PARAMETER_CHANGED =
      ce.IX2_MEDIA_QUERIES_DEFINED =
      ce.IX2_INSTANCE_STARTED =
      ce.IX2_INSTANCE_REMOVED =
      ce.IX2_INSTANCE_ADDED =
      ce.IX2_EVENT_STATE_CHANGED =
      ce.IX2_EVENT_LISTENER_ADDED =
      ce.IX2_ELEMENT_STATE_CHANGED =
      ce.IX2_CLEAR_REQUESTED =
      ce.IX2_ANIMATION_FRAME_CHANGED =
      ce.IX2_ACTION_LIST_PLAYBACK_CHANGED =
        void 0;
    var RS = "IX2_RAW_DATA_IMPORTED";
    ce.IX2_RAW_DATA_IMPORTED = RS;
    var CS = "IX2_SESSION_INITIALIZED";
    ce.IX2_SESSION_INITIALIZED = CS;
    var NS = "IX2_SESSION_STARTED";
    ce.IX2_SESSION_STARTED = NS;
    var xS = "IX2_SESSION_STOPPED";
    ce.IX2_SESSION_STOPPED = xS;
    var qS = "IX2_PREVIEW_REQUESTED";
    ce.IX2_PREVIEW_REQUESTED = qS;
    var LS = "IX2_PLAYBACK_REQUESTED";
    ce.IX2_PLAYBACK_REQUESTED = LS;
    var PS = "IX2_STOP_REQUESTED";
    ce.IX2_STOP_REQUESTED = PS;
    var DS = "IX2_CLEAR_REQUESTED";
    ce.IX2_CLEAR_REQUESTED = DS;
    var MS = "IX2_EVENT_LISTENER_ADDED";
    ce.IX2_EVENT_LISTENER_ADDED = MS;
    var FS = "IX2_EVENT_STATE_CHANGED";
    ce.IX2_EVENT_STATE_CHANGED = FS;
    var GS = "IX2_ANIMATION_FRAME_CHANGED";
    ce.IX2_ANIMATION_FRAME_CHANGED = GS;
    var US = "IX2_PARAMETER_CHANGED";
    ce.IX2_PARAMETER_CHANGED = US;
    var XS = "IX2_INSTANCE_ADDED";
    ce.IX2_INSTANCE_ADDED = XS;
    var WS = "IX2_INSTANCE_STARTED";
    ce.IX2_INSTANCE_STARTED = WS;
    var VS = "IX2_INSTANCE_REMOVED";
    ce.IX2_INSTANCE_REMOVED = VS;
    var kS = "IX2_ELEMENT_STATE_CHANGED";
    ce.IX2_ELEMENT_STATE_CHANGED = kS;
    var BS = "IX2_ACTION_LIST_PLAYBACK_CHANGED";
    ce.IX2_ACTION_LIST_PLAYBACK_CHANGED = BS;
    var HS = "IX2_VIEWPORT_WIDTH_CHANGED";
    ce.IX2_VIEWPORT_WIDTH_CHANGED = HS;
    var jS = "IX2_MEDIA_QUERIES_DEFINED";
    ce.IX2_MEDIA_QUERIES_DEFINED = jS;
    var KS = "IX2_TEST_FRAME_RENDERED";
    ce.IX2_TEST_FRAME_RENDERED = KS;
  });
  var hf = u((D) => {
    "use strict";
    Object.defineProperty(D, "__esModule", { value: !0 });
    D.W_MOD_JS =
      D.W_MOD_IX =
      D.WILL_CHANGE =
      D.WIDTH =
      D.WF_PAGE =
      D.TRANSLATE_Z =
      D.TRANSLATE_Y =
      D.TRANSLATE_X =
      D.TRANSLATE_3D =
      D.TRANSFORM =
      D.SKEW_Y =
      D.SKEW_X =
      D.SKEW =
      D.SIBLINGS =
      D.SCALE_Z =
      D.SCALE_Y =
      D.SCALE_X =
      D.SCALE_3D =
      D.ROTATE_Z =
      D.ROTATE_Y =
      D.ROTATE_X =
      D.RENDER_TRANSFORM =
      D.RENDER_STYLE =
      D.RENDER_PLUGIN =
      D.RENDER_GENERAL =
      D.PRESERVE_3D =
      D.PLAIN_OBJECT =
      D.PARENT =
      D.OPACITY =
      D.IX2_ID_DELIMITER =
      D.IMMEDIATE_CHILDREN =
      D.HTML_ELEMENT =
      D.HEIGHT =
      D.FONT_VARIATION_SETTINGS =
      D.FLEX =
      D.FILTER =
      D.DISPLAY =
      D.CONFIG_Z_VALUE =
      D.CONFIG_Z_UNIT =
      D.CONFIG_Y_VALUE =
      D.CONFIG_Y_UNIT =
      D.CONFIG_X_VALUE =
      D.CONFIG_X_UNIT =
      D.CONFIG_VALUE =
      D.CONFIG_UNIT =
      D.COMMA_DELIMITER =
      D.COLOR =
      D.COLON_DELIMITER =
      D.CHILDREN =
      D.BOUNDARY_SELECTOR =
      D.BORDER_COLOR =
      D.BAR_DELIMITER =
      D.BACKGROUND_COLOR =
      D.BACKGROUND =
      D.AUTO =
      D.ABSTRACT_NODE =
        void 0;
    var zS = "|";
    D.IX2_ID_DELIMITER = zS;
    var YS = "data-wf-page";
    D.WF_PAGE = YS;
    var QS = "w-mod-js";
    D.W_MOD_JS = QS;
    var $S = "w-mod-ix";
    D.W_MOD_IX = $S;
    var ZS = ".w-dyn-item";
    D.BOUNDARY_SELECTOR = ZS;
    var JS = "xValue";
    D.CONFIG_X_VALUE = JS;
    var eA = "yValue";
    D.CONFIG_Y_VALUE = eA;
    var tA = "zValue";
    D.CONFIG_Z_VALUE = tA;
    var rA = "value";
    D.CONFIG_VALUE = rA;
    var nA = "xUnit";
    D.CONFIG_X_UNIT = nA;
    var iA = "yUnit";
    D.CONFIG_Y_UNIT = iA;
    var oA = "zUnit";
    D.CONFIG_Z_UNIT = oA;
    var aA = "unit";
    D.CONFIG_UNIT = aA;
    var sA = "transform";
    D.TRANSFORM = sA;
    var uA = "translateX";
    D.TRANSLATE_X = uA;
    var cA = "translateY";
    D.TRANSLATE_Y = cA;
    var lA = "translateZ";
    D.TRANSLATE_Z = lA;
    var fA = "translate3d";
    D.TRANSLATE_3D = fA;
    var dA = "scaleX";
    D.SCALE_X = dA;
    var pA = "scaleY";
    D.SCALE_Y = pA;
    var vA = "scaleZ";
    D.SCALE_Z = vA;
    var hA = "scale3d";
    D.SCALE_3D = hA;
    var gA = "rotateX";
    D.ROTATE_X = gA;
    var EA = "rotateY";
    D.ROTATE_Y = EA;
    var _A = "rotateZ";
    D.ROTATE_Z = _A;
    var yA = "skew";
    D.SKEW = yA;
    var mA = "skewX";
    D.SKEW_X = mA;
    var IA = "skewY";
    D.SKEW_Y = IA;
    var TA = "opacity";
    D.OPACITY = TA;
    var OA = "filter";
    D.FILTER = OA;
    var bA = "font-variation-settings";
    D.FONT_VARIATION_SETTINGS = bA;
    var SA = "width";
    D.WIDTH = SA;
    var AA = "height";
    D.HEIGHT = AA;
    var wA = "backgroundColor";
    D.BACKGROUND_COLOR = wA;
    var RA = "background";
    D.BACKGROUND = RA;
    var CA = "borderColor";
    D.BORDER_COLOR = CA;
    var NA = "color";
    D.COLOR = NA;
    var xA = "display";
    D.DISPLAY = xA;
    var qA = "flex";
    D.FLEX = qA;
    var LA = "willChange";
    D.WILL_CHANGE = LA;
    var PA = "AUTO";
    D.AUTO = PA;
    var DA = ",";
    D.COMMA_DELIMITER = DA;
    var MA = ":";
    D.COLON_DELIMITER = MA;
    var FA = "|";
    D.BAR_DELIMITER = FA;
    var GA = "CHILDREN";
    D.CHILDREN = GA;
    var UA = "IMMEDIATE_CHILDREN";
    D.IMMEDIATE_CHILDREN = UA;
    var XA = "SIBLINGS";
    D.SIBLINGS = XA;
    var WA = "PARENT";
    D.PARENT = WA;
    var VA = "preserve-3d";
    D.PRESERVE_3D = VA;
    var kA = "HTML_ELEMENT";
    D.HTML_ELEMENT = kA;
    var BA = "PLAIN_OBJECT";
    D.PLAIN_OBJECT = BA;
    var HA = "ABSTRACT_NODE";
    D.ABSTRACT_NODE = HA;
    var jA = "RENDER_TRANSFORM";
    D.RENDER_TRANSFORM = jA;
    var KA = "RENDER_GENERAL";
    D.RENDER_GENERAL = KA;
    var zA = "RENDER_STYLE";
    D.RENDER_STYLE = zA;
    var YA = "RENDER_PLUGIN";
    D.RENDER_PLUGIN = YA;
  });
  var ke = u((we) => {
    "use strict";
    var gf = $t().default;
    Object.defineProperty(we, "__esModule", { value: !0 });
    var xn = { IX2EngineActionTypes: !0, IX2EngineConstants: !0 };
    we.IX2EngineConstants = we.IX2EngineActionTypes = void 0;
    var Jo = ff();
    Object.keys(Jo).forEach(function (e) {
      e === "default" ||
        e === "__esModule" ||
        Object.prototype.hasOwnProperty.call(xn, e) ||
        (e in we && we[e] === Jo[e]) ||
        Object.defineProperty(we, e, {
          enumerable: !0,
          get: function () {
            return Jo[e];
          },
        });
    });
    var ea = Zo();
    Object.keys(ea).forEach(function (e) {
      e === "default" ||
        e === "__esModule" ||
        Object.prototype.hasOwnProperty.call(xn, e) ||
        (e in we && we[e] === ea[e]) ||
        Object.defineProperty(we, e, {
          enumerable: !0,
          get: function () {
            return ea[e];
          },
        });
    });
    var ta = df();
    Object.keys(ta).forEach(function (e) {
      e === "default" ||
        e === "__esModule" ||
        Object.prototype.hasOwnProperty.call(xn, e) ||
        (e in we && we[e] === ta[e]) ||
        Object.defineProperty(we, e, {
          enumerable: !0,
          get: function () {
            return ta[e];
          },
        });
    });
    var ra = pf();
    Object.keys(ra).forEach(function (e) {
      e === "default" ||
        e === "__esModule" ||
        Object.prototype.hasOwnProperty.call(xn, e) ||
        (e in we && we[e] === ra[e]) ||
        Object.defineProperty(we, e, {
          enumerable: !0,
          get: function () {
            return ra[e];
          },
        });
    });
    var QA = gf(vf());
    we.IX2EngineActionTypes = QA;
    var $A = gf(hf());
    we.IX2EngineConstants = $A;
  });
  var Ef = u((qn) => {
    "use strict";
    Object.defineProperty(qn, "__esModule", { value: !0 });
    qn.ixData = void 0;
    var ZA = ke(),
      { IX2_RAW_DATA_IMPORTED: JA } = ZA.IX2EngineActionTypes,
      ew = (e = Object.freeze({}), t) => {
        switch (t.type) {
          case JA:
            return t.payload.ixData || Object.freeze({});
          default:
            return e;
        }
      };
    qn.ixData = ew;
  });
  var Ur = u((_B, mt) => {
    function na() {
      return (
        (mt.exports = na =
          Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
        (mt.exports.__esModule = !0),
        (mt.exports.default = mt.exports),
        na.apply(this, arguments)
      );
    }
    (mt.exports = na),
      (mt.exports.__esModule = !0),
      (mt.exports.default = mt.exports);
  });
  var or = u((Oe) => {
    "use strict";
    Object.defineProperty(Oe, "__esModule", { value: !0 });
    var tw =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          };
    Oe.clone = Pn;
    Oe.addLast = mf;
    Oe.addFirst = If;
    Oe.removeLast = Tf;
    Oe.removeFirst = Of;
    Oe.insert = bf;
    Oe.removeAt = Sf;
    Oe.replaceAt = Af;
    Oe.getIn = Dn;
    Oe.set = Mn;
    Oe.setIn = Fn;
    Oe.update = Rf;
    Oe.updateIn = Cf;
    Oe.merge = Nf;
    Oe.mergeDeep = xf;
    Oe.mergeIn = qf;
    Oe.omit = Lf;
    Oe.addDefaults = Pf;
    var _f = "INVALID_ARGS";
    function yf(e) {
      throw new Error(e);
    }
    function ia(e) {
      var t = Object.keys(e);
      return Object.getOwnPropertySymbols
        ? t.concat(Object.getOwnPropertySymbols(e))
        : t;
    }
    var rw = {}.hasOwnProperty;
    function Pn(e) {
      if (Array.isArray(e)) return e.slice();
      for (var t = ia(e), r = {}, n = 0; n < t.length; n++) {
        var o = t[n];
        r[o] = e[o];
      }
      return r;
    }
    function Be(e, t, r) {
      var n = r;
      n == null && yf(_f);
      for (
        var o = !1, i = arguments.length, a = Array(i > 3 ? i - 3 : 0), s = 3;
        s < i;
        s++
      )
        a[s - 3] = arguments[s];
      for (var c = 0; c < a.length; c++) {
        var p = a[c];
        if (p != null) {
          var y = ia(p);
          if (y.length)
            for (var h = 0; h <= y.length; h++) {
              var m = y[h];
              if (!(e && n[m] !== void 0)) {
                var I = p[m];
                t && Ln(n[m]) && Ln(I) && (I = Be(e, t, n[m], I)),
                  !(I === void 0 || I === n[m]) &&
                    (o || ((o = !0), (n = Pn(n))), (n[m] = I));
              }
            }
        }
      }
      return n;
    }
    function Ln(e) {
      var t = typeof e > "u" ? "undefined" : tw(e);
      return e != null && (t === "object" || t === "function");
    }
    function mf(e, t) {
      return Array.isArray(t) ? e.concat(t) : e.concat([t]);
    }
    function If(e, t) {
      return Array.isArray(t) ? t.concat(e) : [t].concat(e);
    }
    function Tf(e) {
      return e.length ? e.slice(0, e.length - 1) : e;
    }
    function Of(e) {
      return e.length ? e.slice(1) : e;
    }
    function bf(e, t, r) {
      return e
        .slice(0, t)
        .concat(Array.isArray(r) ? r : [r])
        .concat(e.slice(t));
    }
    function Sf(e, t) {
      return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1));
    }
    function Af(e, t, r) {
      if (e[t] === r) return e;
      for (var n = e.length, o = Array(n), i = 0; i < n; i++) o[i] = e[i];
      return (o[t] = r), o;
    }
    function Dn(e, t) {
      if ((!Array.isArray(t) && yf(_f), e != null)) {
        for (var r = e, n = 0; n < t.length; n++) {
          var o = t[n];
          if (((r = r?.[o]), r === void 0)) return r;
        }
        return r;
      }
    }
    function Mn(e, t, r) {
      var n = typeof t == "number" ? [] : {},
        o = e ?? n;
      if (o[t] === r) return o;
      var i = Pn(o);
      return (i[t] = r), i;
    }
    function wf(e, t, r, n) {
      var o = void 0,
        i = t[n];
      if (n === t.length - 1) o = r;
      else {
        var a =
          Ln(e) && Ln(e[i]) ? e[i] : typeof t[n + 1] == "number" ? [] : {};
        o = wf(a, t, r, n + 1);
      }
      return Mn(e, i, o);
    }
    function Fn(e, t, r) {
      return t.length ? wf(e, t, r, 0) : r;
    }
    function Rf(e, t, r) {
      var n = e?.[t],
        o = r(n);
      return Mn(e, t, o);
    }
    function Cf(e, t, r) {
      var n = Dn(e, t),
        o = r(n);
      return Fn(e, t, o);
    }
    function Nf(e, t, r, n, o, i) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), c = 6;
        c < a;
        c++
      )
        s[c - 6] = arguments[c];
      return s.length
        ? Be.call.apply(Be, [null, !1, !1, e, t, r, n, o, i].concat(s))
        : Be(!1, !1, e, t, r, n, o, i);
    }
    function xf(e, t, r, n, o, i) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), c = 6;
        c < a;
        c++
      )
        s[c - 6] = arguments[c];
      return s.length
        ? Be.call.apply(Be, [null, !1, !0, e, t, r, n, o, i].concat(s))
        : Be(!1, !0, e, t, r, n, o, i);
    }
    function qf(e, t, r, n, o, i, a) {
      var s = Dn(e, t);
      s == null && (s = {});
      for (
        var c = void 0,
          p = arguments.length,
          y = Array(p > 7 ? p - 7 : 0),
          h = 7;
        h < p;
        h++
      )
        y[h - 7] = arguments[h];
      return (
        y.length
          ? (c = Be.call.apply(Be, [null, !1, !1, s, r, n, o, i, a].concat(y)))
          : (c = Be(!1, !1, s, r, n, o, i, a)),
        Fn(e, t, c)
      );
    }
    function Lf(e, t) {
      for (var r = Array.isArray(t) ? t : [t], n = !1, o = 0; o < r.length; o++)
        if (rw.call(e, r[o])) {
          n = !0;
          break;
        }
      if (!n) return e;
      for (var i = {}, a = ia(e), s = 0; s < a.length; s++) {
        var c = a[s];
        r.indexOf(c) >= 0 || (i[c] = e[c]);
      }
      return i;
    }
    function Pf(e, t, r, n, o, i) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), c = 6;
        c < a;
        c++
      )
        s[c - 6] = arguments[c];
      return s.length
        ? Be.call.apply(Be, [null, !0, !1, e, t, r, n, o, i].concat(s))
        : Be(!0, !1, e, t, r, n, o, i);
    }
    var nw = {
      clone: Pn,
      addLast: mf,
      addFirst: If,
      removeLast: Tf,
      removeFirst: Of,
      insert: bf,
      removeAt: Sf,
      replaceAt: Af,
      getIn: Dn,
      set: Mn,
      setIn: Fn,
      update: Rf,
      updateIn: Cf,
      merge: Nf,
      mergeDeep: xf,
      mergeIn: qf,
      omit: Lf,
      addDefaults: Pf,
    };
    Oe.default = nw;
  });
  var Mf = u((Gn) => {
    "use strict";
    var iw = ct().default;
    Object.defineProperty(Gn, "__esModule", { value: !0 });
    Gn.ixRequest = void 0;
    var ow = iw(Ur()),
      aw = ke(),
      sw = or(),
      {
        IX2_PREVIEW_REQUESTED: uw,
        IX2_PLAYBACK_REQUESTED: cw,
        IX2_STOP_REQUESTED: lw,
        IX2_CLEAR_REQUESTED: fw,
      } = aw.IX2EngineActionTypes,
      dw = { preview: {}, playback: {}, stop: {}, clear: {} },
      Df = Object.create(null, {
        [uw]: { value: "preview" },
        [cw]: { value: "playback" },
        [lw]: { value: "stop" },
        [fw]: { value: "clear" },
      }),
      pw = (e = dw, t) => {
        if (t.type in Df) {
          let r = [Df[t.type]];
          return (0, sw.setIn)(e, [r], (0, ow.default)({}, t.payload));
        }
        return e;
      };
    Gn.ixRequest = pw;
  });
  var Gf = u((Un) => {
    "use strict";
    Object.defineProperty(Un, "__esModule", { value: !0 });
    Un.ixSession = void 0;
    var vw = ke(),
      ft = or(),
      {
        IX2_SESSION_INITIALIZED: hw,
        IX2_SESSION_STARTED: gw,
        IX2_TEST_FRAME_RENDERED: Ew,
        IX2_SESSION_STOPPED: _w,
        IX2_EVENT_LISTENER_ADDED: yw,
        IX2_EVENT_STATE_CHANGED: mw,
        IX2_ANIMATION_FRAME_CHANGED: Iw,
        IX2_ACTION_LIST_PLAYBACK_CHANGED: Tw,
        IX2_VIEWPORT_WIDTH_CHANGED: Ow,
        IX2_MEDIA_QUERIES_DEFINED: bw,
      } = vw.IX2EngineActionTypes,
      Ff = {
        active: !1,
        tick: 0,
        eventListeners: [],
        eventState: {},
        playbackState: {},
        viewportWidth: 0,
        mediaQueryKey: null,
        hasBoundaryNodes: !1,
        hasDefinedMediaQueries: !1,
        reducedMotion: !1,
      },
      Sw = 20,
      Aw = (e = Ff, t) => {
        switch (t.type) {
          case hw: {
            let { hasBoundaryNodes: r, reducedMotion: n } = t.payload;
            return (0, ft.merge)(e, { hasBoundaryNodes: r, reducedMotion: n });
          }
          case gw:
            return (0, ft.set)(e, "active", !0);
          case Ew: {
            let {
              payload: { step: r = Sw },
            } = t;
            return (0, ft.set)(e, "tick", e.tick + r);
          }
          case _w:
            return Ff;
          case Iw: {
            let {
              payload: { now: r },
            } = t;
            return (0, ft.set)(e, "tick", r);
          }
          case yw: {
            let r = (0, ft.addLast)(e.eventListeners, t.payload);
            return (0, ft.set)(e, "eventListeners", r);
          }
          case mw: {
            let { stateKey: r, newState: n } = t.payload;
            return (0, ft.setIn)(e, ["eventState", r], n);
          }
          case Tw: {
            let { actionListId: r, isPlaying: n } = t.payload;
            return (0, ft.setIn)(e, ["playbackState", r], n);
          }
          case Ow: {
            let { width: r, mediaQueries: n } = t.payload,
              o = n.length,
              i = null;
            for (let a = 0; a < o; a++) {
              let { key: s, min: c, max: p } = n[a];
              if (r >= c && r <= p) {
                i = s;
                break;
              }
            }
            return (0, ft.merge)(e, { viewportWidth: r, mediaQueryKey: i });
          }
          case bw:
            return (0, ft.set)(e, "hasDefinedMediaQueries", !0);
          default:
            return e;
        }
      };
    Un.ixSession = Aw;
  });
  var Xf = u((TB, Uf) => {
    function ww() {
      (this.__data__ = []), (this.size = 0);
    }
    Uf.exports = ww;
  });
  var Xn = u((OB, Wf) => {
    function Rw(e, t) {
      return e === t || (e !== e && t !== t);
    }
    Wf.exports = Rw;
  });
  var Xr = u((bB, Vf) => {
    var Cw = Xn();
    function Nw(e, t) {
      for (var r = e.length; r--; ) if (Cw(e[r][0], t)) return r;
      return -1;
    }
    Vf.exports = Nw;
  });
  var Bf = u((SB, kf) => {
    var xw = Xr(),
      qw = Array.prototype,
      Lw = qw.splice;
    function Pw(e) {
      var t = this.__data__,
        r = xw(t, e);
      if (r < 0) return !1;
      var n = t.length - 1;
      return r == n ? t.pop() : Lw.call(t, r, 1), --this.size, !0;
    }
    kf.exports = Pw;
  });
  var jf = u((AB, Hf) => {
    var Dw = Xr();
    function Mw(e) {
      var t = this.__data__,
        r = Dw(t, e);
      return r < 0 ? void 0 : t[r][1];
    }
    Hf.exports = Mw;
  });
  var zf = u((wB, Kf) => {
    var Fw = Xr();
    function Gw(e) {
      return Fw(this.__data__, e) > -1;
    }
    Kf.exports = Gw;
  });
  var Qf = u((RB, Yf) => {
    var Uw = Xr();
    function Xw(e, t) {
      var r = this.__data__,
        n = Uw(r, e);
      return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
    }
    Yf.exports = Xw;
  });
  var Wr = u((CB, $f) => {
    var Ww = Xf(),
      Vw = Bf(),
      kw = jf(),
      Bw = zf(),
      Hw = Qf();
    function ar(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    ar.prototype.clear = Ww;
    ar.prototype.delete = Vw;
    ar.prototype.get = kw;
    ar.prototype.has = Bw;
    ar.prototype.set = Hw;
    $f.exports = ar;
  });
  var Jf = u((NB, Zf) => {
    var jw = Wr();
    function Kw() {
      (this.__data__ = new jw()), (this.size = 0);
    }
    Zf.exports = Kw;
  });
  var td = u((xB, ed) => {
    function zw(e) {
      var t = this.__data__,
        r = t.delete(e);
      return (this.size = t.size), r;
    }
    ed.exports = zw;
  });
  var nd = u((qB, rd) => {
    function Yw(e) {
      return this.__data__.get(e);
    }
    rd.exports = Yw;
  });
  var od = u((LB, id) => {
    function Qw(e) {
      return this.__data__.has(e);
    }
    id.exports = Qw;
  });
  var dt = u((PB, ad) => {
    function $w(e) {
      var t = typeof e;
      return e != null && (t == "object" || t == "function");
    }
    ad.exports = $w;
  });
  var oa = u((DB, sd) => {
    var Zw = At(),
      Jw = dt(),
      e0 = "[object AsyncFunction]",
      t0 = "[object Function]",
      r0 = "[object GeneratorFunction]",
      n0 = "[object Proxy]";
    function i0(e) {
      if (!Jw(e)) return !1;
      var t = Zw(e);
      return t == t0 || t == r0 || t == e0 || t == n0;
    }
    sd.exports = i0;
  });
  var cd = u((MB, ud) => {
    var o0 = tt(),
      a0 = o0["__core-js_shared__"];
    ud.exports = a0;
  });
  var dd = u((FB, fd) => {
    var aa = cd(),
      ld = (function () {
        var e = /[^.]+$/.exec((aa && aa.keys && aa.keys.IE_PROTO) || "");
        return e ? "Symbol(src)_1." + e : "";
      })();
    function s0(e) {
      return !!ld && ld in e;
    }
    fd.exports = s0;
  });
  var sa = u((GB, pd) => {
    var u0 = Function.prototype,
      c0 = u0.toString;
    function l0(e) {
      if (e != null) {
        try {
          return c0.call(e);
        } catch {}
        try {
          return e + "";
        } catch {}
      }
      return "";
    }
    pd.exports = l0;
  });
  var hd = u((UB, vd) => {
    var f0 = oa(),
      d0 = dd(),
      p0 = dt(),
      v0 = sa(),
      h0 = /[\\^$.*+?()[\]{}|]/g,
      g0 = /^\[object .+?Constructor\]$/,
      E0 = Function.prototype,
      _0 = Object.prototype,
      y0 = E0.toString,
      m0 = _0.hasOwnProperty,
      I0 = RegExp(
        "^" +
          y0
            .call(m0)
            .replace(h0, "\\$&")
            .replace(
              /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
              "$1.*?"
            ) +
          "$"
      );
    function T0(e) {
      if (!p0(e) || d0(e)) return !1;
      var t = f0(e) ? I0 : g0;
      return t.test(v0(e));
    }
    vd.exports = T0;
  });
  var Ed = u((XB, gd) => {
    function O0(e, t) {
      return e?.[t];
    }
    gd.exports = O0;
  });
  var wt = u((WB, _d) => {
    var b0 = hd(),
      S0 = Ed();
    function A0(e, t) {
      var r = S0(e, t);
      return b0(r) ? r : void 0;
    }
    _d.exports = A0;
  });
  var Wn = u((VB, yd) => {
    var w0 = wt(),
      R0 = tt(),
      C0 = w0(R0, "Map");
    yd.exports = C0;
  });
  var Vr = u((kB, md) => {
    var N0 = wt(),
      x0 = N0(Object, "create");
    md.exports = x0;
  });
  var Od = u((BB, Td) => {
    var Id = Vr();
    function q0() {
      (this.__data__ = Id ? Id(null) : {}), (this.size = 0);
    }
    Td.exports = q0;
  });
  var Sd = u((HB, bd) => {
    function L0(e) {
      var t = this.has(e) && delete this.__data__[e];
      return (this.size -= t ? 1 : 0), t;
    }
    bd.exports = L0;
  });
  var wd = u((jB, Ad) => {
    var P0 = Vr(),
      D0 = "__lodash_hash_undefined__",
      M0 = Object.prototype,
      F0 = M0.hasOwnProperty;
    function G0(e) {
      var t = this.__data__;
      if (P0) {
        var r = t[e];
        return r === D0 ? void 0 : r;
      }
      return F0.call(t, e) ? t[e] : void 0;
    }
    Ad.exports = G0;
  });
  var Cd = u((KB, Rd) => {
    var U0 = Vr(),
      X0 = Object.prototype,
      W0 = X0.hasOwnProperty;
    function V0(e) {
      var t = this.__data__;
      return U0 ? t[e] !== void 0 : W0.call(t, e);
    }
    Rd.exports = V0;
  });
  var xd = u((zB, Nd) => {
    var k0 = Vr(),
      B0 = "__lodash_hash_undefined__";
    function H0(e, t) {
      var r = this.__data__;
      return (
        (this.size += this.has(e) ? 0 : 1),
        (r[e] = k0 && t === void 0 ? B0 : t),
        this
      );
    }
    Nd.exports = H0;
  });
  var Ld = u((YB, qd) => {
    var j0 = Od(),
      K0 = Sd(),
      z0 = wd(),
      Y0 = Cd(),
      Q0 = xd();
    function sr(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    sr.prototype.clear = j0;
    sr.prototype.delete = K0;
    sr.prototype.get = z0;
    sr.prototype.has = Y0;
    sr.prototype.set = Q0;
    qd.exports = sr;
  });
  var Md = u((QB, Dd) => {
    var Pd = Ld(),
      $0 = Wr(),
      Z0 = Wn();
    function J0() {
      (this.size = 0),
        (this.__data__ = {
          hash: new Pd(),
          map: new (Z0 || $0)(),
          string: new Pd(),
        });
    }
    Dd.exports = J0;
  });
  var Gd = u(($B, Fd) => {
    function eR(e) {
      var t = typeof e;
      return t == "string" || t == "number" || t == "symbol" || t == "boolean"
        ? e !== "__proto__"
        : e === null;
    }
    Fd.exports = eR;
  });
  var kr = u((ZB, Ud) => {
    var tR = Gd();
    function rR(e, t) {
      var r = e.__data__;
      return tR(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
    }
    Ud.exports = rR;
  });
  var Wd = u((JB, Xd) => {
    var nR = kr();
    function iR(e) {
      var t = nR(this, e).delete(e);
      return (this.size -= t ? 1 : 0), t;
    }
    Xd.exports = iR;
  });
  var kd = u((eH, Vd) => {
    var oR = kr();
    function aR(e) {
      return oR(this, e).get(e);
    }
    Vd.exports = aR;
  });
  var Hd = u((tH, Bd) => {
    var sR = kr();
    function uR(e) {
      return sR(this, e).has(e);
    }
    Bd.exports = uR;
  });
  var Kd = u((rH, jd) => {
    var cR = kr();
    function lR(e, t) {
      var r = cR(this, e),
        n = r.size;
      return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
    }
    jd.exports = lR;
  });
  var Vn = u((nH, zd) => {
    var fR = Md(),
      dR = Wd(),
      pR = kd(),
      vR = Hd(),
      hR = Kd();
    function ur(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    ur.prototype.clear = fR;
    ur.prototype.delete = dR;
    ur.prototype.get = pR;
    ur.prototype.has = vR;
    ur.prototype.set = hR;
    zd.exports = ur;
  });
  var Qd = u((iH, Yd) => {
    var gR = Wr(),
      ER = Wn(),
      _R = Vn(),
      yR = 200;
    function mR(e, t) {
      var r = this.__data__;
      if (r instanceof gR) {
        var n = r.__data__;
        if (!ER || n.length < yR - 1)
          return n.push([e, t]), (this.size = ++r.size), this;
        r = this.__data__ = new _R(n);
      }
      return r.set(e, t), (this.size = r.size), this;
    }
    Yd.exports = mR;
  });
  var ua = u((oH, $d) => {
    var IR = Wr(),
      TR = Jf(),
      OR = td(),
      bR = nd(),
      SR = od(),
      AR = Qd();
    function cr(e) {
      var t = (this.__data__ = new IR(e));
      this.size = t.size;
    }
    cr.prototype.clear = TR;
    cr.prototype.delete = OR;
    cr.prototype.get = bR;
    cr.prototype.has = SR;
    cr.prototype.set = AR;
    $d.exports = cr;
  });
  var Jd = u((aH, Zd) => {
    var wR = "__lodash_hash_undefined__";
    function RR(e) {
      return this.__data__.set(e, wR), this;
    }
    Zd.exports = RR;
  });
  var tp = u((sH, ep) => {
    function CR(e) {
      return this.__data__.has(e);
    }
    ep.exports = CR;
  });
  var np = u((uH, rp) => {
    var NR = Vn(),
      xR = Jd(),
      qR = tp();
    function kn(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.__data__ = new NR(); ++t < r; ) this.add(e[t]);
    }
    kn.prototype.add = kn.prototype.push = xR;
    kn.prototype.has = qR;
    rp.exports = kn;
  });
  var op = u((cH, ip) => {
    function LR(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
        if (t(e[r], r, e)) return !0;
      return !1;
    }
    ip.exports = LR;
  });
  var sp = u((lH, ap) => {
    function PR(e, t) {
      return e.has(t);
    }
    ap.exports = PR;
  });
  var ca = u((fH, up) => {
    var DR = np(),
      MR = op(),
      FR = sp(),
      GR = 1,
      UR = 2;
    function XR(e, t, r, n, o, i) {
      var a = r & GR,
        s = e.length,
        c = t.length;
      if (s != c && !(a && c > s)) return !1;
      var p = i.get(e),
        y = i.get(t);
      if (p && y) return p == t && y == e;
      var h = -1,
        m = !0,
        I = r & UR ? new DR() : void 0;
      for (i.set(e, t), i.set(t, e); ++h < s; ) {
        var R = e[h],
          A = t[h];
        if (n) var F = a ? n(A, R, h, t, e, i) : n(R, A, h, e, t, i);
        if (F !== void 0) {
          if (F) continue;
          m = !1;
          break;
        }
        if (I) {
          if (
            !MR(t, function (N, x) {
              if (!FR(I, x) && (R === N || o(R, N, r, n, i))) return I.push(x);
            })
          ) {
            m = !1;
            break;
          }
        } else if (!(R === A || o(R, A, r, n, i))) {
          m = !1;
          break;
        }
      }
      return i.delete(e), i.delete(t), m;
    }
    up.exports = XR;
  });
  var lp = u((dH, cp) => {
    var WR = tt(),
      VR = WR.Uint8Array;
    cp.exports = VR;
  });
  var dp = u((pH, fp) => {
    function kR(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n, o) {
          r[++t] = [o, n];
        }),
        r
      );
    }
    fp.exports = kR;
  });
  var vp = u((vH, pp) => {
    function BR(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n) {
          r[++t] = n;
        }),
        r
      );
    }
    pp.exports = BR;
  });
  var yp = u((hH, _p) => {
    var hp = tr(),
      gp = lp(),
      HR = Xn(),
      jR = ca(),
      KR = dp(),
      zR = vp(),
      YR = 1,
      QR = 2,
      $R = "[object Boolean]",
      ZR = "[object Date]",
      JR = "[object Error]",
      eC = "[object Map]",
      tC = "[object Number]",
      rC = "[object RegExp]",
      nC = "[object Set]",
      iC = "[object String]",
      oC = "[object Symbol]",
      aC = "[object ArrayBuffer]",
      sC = "[object DataView]",
      Ep = hp ? hp.prototype : void 0,
      la = Ep ? Ep.valueOf : void 0;
    function uC(e, t, r, n, o, i, a) {
      switch (r) {
        case sC:
          if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
            return !1;
          (e = e.buffer), (t = t.buffer);
        case aC:
          return !(e.byteLength != t.byteLength || !i(new gp(e), new gp(t)));
        case $R:
        case ZR:
        case tC:
          return HR(+e, +t);
        case JR:
          return e.name == t.name && e.message == t.message;
        case rC:
        case iC:
          return e == t + "";
        case eC:
          var s = KR;
        case nC:
          var c = n & YR;
          if ((s || (s = zR), e.size != t.size && !c)) return !1;
          var p = a.get(e);
          if (p) return p == t;
          (n |= QR), a.set(e, t);
          var y = jR(s(e), s(t), n, o, i, a);
          return a.delete(e), y;
        case oC:
          if (la) return la.call(e) == la.call(t);
      }
      return !1;
    }
    _p.exports = uC;
  });
  var Bn = u((gH, mp) => {
    function cC(e, t) {
      for (var r = -1, n = t.length, o = e.length; ++r < n; ) e[o + r] = t[r];
      return e;
    }
    mp.exports = cC;
  });
  var xe = u((EH, Ip) => {
    var lC = Array.isArray;
    Ip.exports = lC;
  });
  var fa = u((_H, Tp) => {
    var fC = Bn(),
      dC = xe();
    function pC(e, t, r) {
      var n = t(e);
      return dC(e) ? n : fC(n, r(e));
    }
    Tp.exports = pC;
  });
  var bp = u((yH, Op) => {
    function vC(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, o = 0, i = []; ++r < n; ) {
        var a = e[r];
        t(a, r, e) && (i[o++] = a);
      }
      return i;
    }
    Op.exports = vC;
  });
  var da = u((mH, Sp) => {
    function hC() {
      return [];
    }
    Sp.exports = hC;
  });
  var pa = u((IH, wp) => {
    var gC = bp(),
      EC = da(),
      _C = Object.prototype,
      yC = _C.propertyIsEnumerable,
      Ap = Object.getOwnPropertySymbols,
      mC = Ap
        ? function (e) {
            return e == null
              ? []
              : ((e = Object(e)),
                gC(Ap(e), function (t) {
                  return yC.call(e, t);
                }));
          }
        : EC;
    wp.exports = mC;
  });
  var Cp = u((TH, Rp) => {
    function IC(e, t) {
      for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
      return n;
    }
    Rp.exports = IC;
  });
  var xp = u((OH, Np) => {
    var TC = At(),
      OC = yt(),
      bC = "[object Arguments]";
    function SC(e) {
      return OC(e) && TC(e) == bC;
    }
    Np.exports = SC;
  });
  var Br = u((bH, Pp) => {
    var qp = xp(),
      AC = yt(),
      Lp = Object.prototype,
      wC = Lp.hasOwnProperty,
      RC = Lp.propertyIsEnumerable,
      CC = qp(
        (function () {
          return arguments;
        })()
      )
        ? qp
        : function (e) {
            return AC(e) && wC.call(e, "callee") && !RC.call(e, "callee");
          };
    Pp.exports = CC;
  });
  var Mp = u((SH, Dp) => {
    function NC() {
      return !1;
    }
    Dp.exports = NC;
  });
  var Hn = u((Hr, lr) => {
    var xC = tt(),
      qC = Mp(),
      Up = typeof Hr == "object" && Hr && !Hr.nodeType && Hr,
      Fp = Up && typeof lr == "object" && lr && !lr.nodeType && lr,
      LC = Fp && Fp.exports === Up,
      Gp = LC ? xC.Buffer : void 0,
      PC = Gp ? Gp.isBuffer : void 0,
      DC = PC || qC;
    lr.exports = DC;
  });
  var jn = u((AH, Xp) => {
    var MC = 9007199254740991,
      FC = /^(?:0|[1-9]\d*)$/;
    function GC(e, t) {
      var r = typeof e;
      return (
        (t = t ?? MC),
        !!t &&
          (r == "number" || (r != "symbol" && FC.test(e))) &&
          e > -1 &&
          e % 1 == 0 &&
          e < t
      );
    }
    Xp.exports = GC;
  });
  var Kn = u((wH, Wp) => {
    var UC = 9007199254740991;
    function XC(e) {
      return typeof e == "number" && e > -1 && e % 1 == 0 && e <= UC;
    }
    Wp.exports = XC;
  });
  var kp = u((RH, Vp) => {
    var WC = At(),
      VC = Kn(),
      kC = yt(),
      BC = "[object Arguments]",
      HC = "[object Array]",
      jC = "[object Boolean]",
      KC = "[object Date]",
      zC = "[object Error]",
      YC = "[object Function]",
      QC = "[object Map]",
      $C = "[object Number]",
      ZC = "[object Object]",
      JC = "[object RegExp]",
      eN = "[object Set]",
      tN = "[object String]",
      rN = "[object WeakMap]",
      nN = "[object ArrayBuffer]",
      iN = "[object DataView]",
      oN = "[object Float32Array]",
      aN = "[object Float64Array]",
      sN = "[object Int8Array]",
      uN = "[object Int16Array]",
      cN = "[object Int32Array]",
      lN = "[object Uint8Array]",
      fN = "[object Uint8ClampedArray]",
      dN = "[object Uint16Array]",
      pN = "[object Uint32Array]",
      me = {};
    me[oN] =
      me[aN] =
      me[sN] =
      me[uN] =
      me[cN] =
      me[lN] =
      me[fN] =
      me[dN] =
      me[pN] =
        !0;
    me[BC] =
      me[HC] =
      me[nN] =
      me[jC] =
      me[iN] =
      me[KC] =
      me[zC] =
      me[YC] =
      me[QC] =
      me[$C] =
      me[ZC] =
      me[JC] =
      me[eN] =
      me[tN] =
      me[rN] =
        !1;
    function vN(e) {
      return kC(e) && VC(e.length) && !!me[WC(e)];
    }
    Vp.exports = vN;
  });
  var Hp = u((CH, Bp) => {
    function hN(e) {
      return function (t) {
        return e(t);
      };
    }
    Bp.exports = hN;
  });
  var Kp = u((jr, fr) => {
    var gN = Mo(),
      jp = typeof jr == "object" && jr && !jr.nodeType && jr,
      Kr = jp && typeof fr == "object" && fr && !fr.nodeType && fr,
      EN = Kr && Kr.exports === jp,
      va = EN && gN.process,
      _N = (function () {
        try {
          var e = Kr && Kr.require && Kr.require("util").types;
          return e || (va && va.binding && va.binding("util"));
        } catch {}
      })();
    fr.exports = _N;
  });
  var zn = u((NH, Qp) => {
    var yN = kp(),
      mN = Hp(),
      zp = Kp(),
      Yp = zp && zp.isTypedArray,
      IN = Yp ? mN(Yp) : yN;
    Qp.exports = IN;
  });
  var ha = u((xH, $p) => {
    var TN = Cp(),
      ON = Br(),
      bN = xe(),
      SN = Hn(),
      AN = jn(),
      wN = zn(),
      RN = Object.prototype,
      CN = RN.hasOwnProperty;
    function NN(e, t) {
      var r = bN(e),
        n = !r && ON(e),
        o = !r && !n && SN(e),
        i = !r && !n && !o && wN(e),
        a = r || n || o || i,
        s = a ? TN(e.length, String) : [],
        c = s.length;
      for (var p in e)
        (t || CN.call(e, p)) &&
          !(
            a &&
            (p == "length" ||
              (o && (p == "offset" || p == "parent")) ||
              (i &&
                (p == "buffer" || p == "byteLength" || p == "byteOffset")) ||
              AN(p, c))
          ) &&
          s.push(p);
      return s;
    }
    $p.exports = NN;
  });
  var Yn = u((qH, Zp) => {
    var xN = Object.prototype;
    function qN(e) {
      var t = e && e.constructor,
        r = (typeof t == "function" && t.prototype) || xN;
      return e === r;
    }
    Zp.exports = qN;
  });
  var ev = u((LH, Jp) => {
    var LN = Fo(),
      PN = LN(Object.keys, Object);
    Jp.exports = PN;
  });
  var Qn = u((PH, tv) => {
    var DN = Yn(),
      MN = ev(),
      FN = Object.prototype,
      GN = FN.hasOwnProperty;
    function UN(e) {
      if (!DN(e)) return MN(e);
      var t = [];
      for (var r in Object(e)) GN.call(e, r) && r != "constructor" && t.push(r);
      return t;
    }
    tv.exports = UN;
  });
  var Ut = u((DH, rv) => {
    var XN = oa(),
      WN = Kn();
    function VN(e) {
      return e != null && WN(e.length) && !XN(e);
    }
    rv.exports = VN;
  });
  var zr = u((MH, nv) => {
    var kN = ha(),
      BN = Qn(),
      HN = Ut();
    function jN(e) {
      return HN(e) ? kN(e) : BN(e);
    }
    nv.exports = jN;
  });
  var ov = u((FH, iv) => {
    var KN = fa(),
      zN = pa(),
      YN = zr();
    function QN(e) {
      return KN(e, YN, zN);
    }
    iv.exports = QN;
  });
  var uv = u((GH, sv) => {
    var av = ov(),
      $N = 1,
      ZN = Object.prototype,
      JN = ZN.hasOwnProperty;
    function ex(e, t, r, n, o, i) {
      var a = r & $N,
        s = av(e),
        c = s.length,
        p = av(t),
        y = p.length;
      if (c != y && !a) return !1;
      for (var h = c; h--; ) {
        var m = s[h];
        if (!(a ? m in t : JN.call(t, m))) return !1;
      }
      var I = i.get(e),
        R = i.get(t);
      if (I && R) return I == t && R == e;
      var A = !0;
      i.set(e, t), i.set(t, e);
      for (var F = a; ++h < c; ) {
        m = s[h];
        var N = e[m],
          x = t[m];
        if (n) var S = a ? n(x, N, m, t, e, i) : n(N, x, m, e, t, i);
        if (!(S === void 0 ? N === x || o(N, x, r, n, i) : S)) {
          A = !1;
          break;
        }
        F || (F = m == "constructor");
      }
      if (A && !F) {
        var P = e.constructor,
          L = t.constructor;
        P != L &&
          "constructor" in e &&
          "constructor" in t &&
          !(
            typeof P == "function" &&
            P instanceof P &&
            typeof L == "function" &&
            L instanceof L
          ) &&
          (A = !1);
      }
      return i.delete(e), i.delete(t), A;
    }
    sv.exports = ex;
  });
  var lv = u((UH, cv) => {
    var tx = wt(),
      rx = tt(),
      nx = tx(rx, "DataView");
    cv.exports = nx;
  });
  var dv = u((XH, fv) => {
    var ix = wt(),
      ox = tt(),
      ax = ix(ox, "Promise");
    fv.exports = ax;
  });
  var vv = u((WH, pv) => {
    var sx = wt(),
      ux = tt(),
      cx = sx(ux, "Set");
    pv.exports = cx;
  });
  var ga = u((VH, hv) => {
    var lx = wt(),
      fx = tt(),
      dx = lx(fx, "WeakMap");
    hv.exports = dx;
  });
  var $n = u((kH, Tv) => {
    var Ea = lv(),
      _a = Wn(),
      ya = dv(),
      ma = vv(),
      Ia = ga(),
      Iv = At(),
      dr = sa(),
      gv = "[object Map]",
      px = "[object Object]",
      Ev = "[object Promise]",
      _v = "[object Set]",
      yv = "[object WeakMap]",
      mv = "[object DataView]",
      vx = dr(Ea),
      hx = dr(_a),
      gx = dr(ya),
      Ex = dr(ma),
      _x = dr(Ia),
      Xt = Iv;
    ((Ea && Xt(new Ea(new ArrayBuffer(1))) != mv) ||
      (_a && Xt(new _a()) != gv) ||
      (ya && Xt(ya.resolve()) != Ev) ||
      (ma && Xt(new ma()) != _v) ||
      (Ia && Xt(new Ia()) != yv)) &&
      (Xt = function (e) {
        var t = Iv(e),
          r = t == px ? e.constructor : void 0,
          n = r ? dr(r) : "";
        if (n)
          switch (n) {
            case vx:
              return mv;
            case hx:
              return gv;
            case gx:
              return Ev;
            case Ex:
              return _v;
            case _x:
              return yv;
          }
        return t;
      });
    Tv.exports = Xt;
  });
  var Nv = u((BH, Cv) => {
    var Ta = ua(),
      yx = ca(),
      mx = yp(),
      Ix = uv(),
      Ov = $n(),
      bv = xe(),
      Sv = Hn(),
      Tx = zn(),
      Ox = 1,
      Av = "[object Arguments]",
      wv = "[object Array]",
      Zn = "[object Object]",
      bx = Object.prototype,
      Rv = bx.hasOwnProperty;
    function Sx(e, t, r, n, o, i) {
      var a = bv(e),
        s = bv(t),
        c = a ? wv : Ov(e),
        p = s ? wv : Ov(t);
      (c = c == Av ? Zn : c), (p = p == Av ? Zn : p);
      var y = c == Zn,
        h = p == Zn,
        m = c == p;
      if (m && Sv(e)) {
        if (!Sv(t)) return !1;
        (a = !0), (y = !1);
      }
      if (m && !y)
        return (
          i || (i = new Ta()),
          a || Tx(e) ? yx(e, t, r, n, o, i) : mx(e, t, c, r, n, o, i)
        );
      if (!(r & Ox)) {
        var I = y && Rv.call(e, "__wrapped__"),
          R = h && Rv.call(t, "__wrapped__");
        if (I || R) {
          var A = I ? e.value() : e,
            F = R ? t.value() : t;
          return i || (i = new Ta()), o(A, F, r, n, i);
        }
      }
      return m ? (i || (i = new Ta()), Ix(e, t, r, n, o, i)) : !1;
    }
    Cv.exports = Sx;
  });
  var Oa = u((HH, Lv) => {
    var Ax = Nv(),
      xv = yt();
    function qv(e, t, r, n, o) {
      return e === t
        ? !0
        : e == null || t == null || (!xv(e) && !xv(t))
        ? e !== e && t !== t
        : Ax(e, t, r, n, qv, o);
    }
    Lv.exports = qv;
  });
  var Dv = u((jH, Pv) => {
    var wx = ua(),
      Rx = Oa(),
      Cx = 1,
      Nx = 2;
    function xx(e, t, r, n) {
      var o = r.length,
        i = o,
        a = !n;
      if (e == null) return !i;
      for (e = Object(e); o--; ) {
        var s = r[o];
        if (a && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1;
      }
      for (; ++o < i; ) {
        s = r[o];
        var c = s[0],
          p = e[c],
          y = s[1];
        if (a && s[2]) {
          if (p === void 0 && !(c in e)) return !1;
        } else {
          var h = new wx();
          if (n) var m = n(p, y, c, e, t, h);
          if (!(m === void 0 ? Rx(y, p, Cx | Nx, n, h) : m)) return !1;
        }
      }
      return !0;
    }
    Pv.exports = xx;
  });
  var ba = u((KH, Mv) => {
    var qx = dt();
    function Lx(e) {
      return e === e && !qx(e);
    }
    Mv.exports = Lx;
  });
  var Gv = u((zH, Fv) => {
    var Px = ba(),
      Dx = zr();
    function Mx(e) {
      for (var t = Dx(e), r = t.length; r--; ) {
        var n = t[r],
          o = e[n];
        t[r] = [n, o, Px(o)];
      }
      return t;
    }
    Fv.exports = Mx;
  });
  var Sa = u((YH, Uv) => {
    function Fx(e, t) {
      return function (r) {
        return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
      };
    }
    Uv.exports = Fx;
  });
  var Wv = u((QH, Xv) => {
    var Gx = Dv(),
      Ux = Gv(),
      Xx = Sa();
    function Wx(e) {
      var t = Ux(e);
      return t.length == 1 && t[0][2]
        ? Xx(t[0][0], t[0][1])
        : function (r) {
            return r === e || Gx(r, e, t);
          };
    }
    Xv.exports = Wx;
  });
  var Yr = u(($H, Vv) => {
    var Vx = At(),
      kx = yt(),
      Bx = "[object Symbol]";
    function Hx(e) {
      return typeof e == "symbol" || (kx(e) && Vx(e) == Bx);
    }
    Vv.exports = Hx;
  });
  var Jn = u((ZH, kv) => {
    var jx = xe(),
      Kx = Yr(),
      zx = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      Yx = /^\w*$/;
    function Qx(e, t) {
      if (jx(e)) return !1;
      var r = typeof e;
      return r == "number" ||
        r == "symbol" ||
        r == "boolean" ||
        e == null ||
        Kx(e)
        ? !0
        : Yx.test(e) || !zx.test(e) || (t != null && e in Object(t));
    }
    kv.exports = Qx;
  });
  var jv = u((JH, Hv) => {
    var Bv = Vn(),
      $x = "Expected a function";
    function Aa(e, t) {
      if (typeof e != "function" || (t != null && typeof t != "function"))
        throw new TypeError($x);
      var r = function () {
        var n = arguments,
          o = t ? t.apply(this, n) : n[0],
          i = r.cache;
        if (i.has(o)) return i.get(o);
        var a = e.apply(this, n);
        return (r.cache = i.set(o, a) || i), a;
      };
      return (r.cache = new (Aa.Cache || Bv)()), r;
    }
    Aa.Cache = Bv;
    Hv.exports = Aa;
  });
  var zv = u((e5, Kv) => {
    var Zx = jv(),
      Jx = 500;
    function eq(e) {
      var t = Zx(e, function (n) {
          return r.size === Jx && r.clear(), n;
        }),
        r = t.cache;
      return t;
    }
    Kv.exports = eq;
  });
  var Qv = u((t5, Yv) => {
    var tq = zv(),
      rq =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      nq = /\\(\\)?/g,
      iq = tq(function (e) {
        var t = [];
        return (
          e.charCodeAt(0) === 46 && t.push(""),
          e.replace(rq, function (r, n, o, i) {
            t.push(o ? i.replace(nq, "$1") : n || r);
          }),
          t
        );
      });
    Yv.exports = iq;
  });
  var wa = u((r5, $v) => {
    function oq(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, o = Array(n); ++r < n; )
        o[r] = t(e[r], r, e);
      return o;
    }
    $v.exports = oq;
  });
  var nh = u((n5, rh) => {
    var Zv = tr(),
      aq = wa(),
      sq = xe(),
      uq = Yr(),
      cq = 1 / 0,
      Jv = Zv ? Zv.prototype : void 0,
      eh = Jv ? Jv.toString : void 0;
    function th(e) {
      if (typeof e == "string") return e;
      if (sq(e)) return aq(e, th) + "";
      if (uq(e)) return eh ? eh.call(e) : "";
      var t = e + "";
      return t == "0" && 1 / e == -cq ? "-0" : t;
    }
    rh.exports = th;
  });
  var oh = u((i5, ih) => {
    var lq = nh();
    function fq(e) {
      return e == null ? "" : lq(e);
    }
    ih.exports = fq;
  });
  var Qr = u((o5, ah) => {
    var dq = xe(),
      pq = Jn(),
      vq = Qv(),
      hq = oh();
    function gq(e, t) {
      return dq(e) ? e : pq(e, t) ? [e] : vq(hq(e));
    }
    ah.exports = gq;
  });
  var pr = u((a5, sh) => {
    var Eq = Yr(),
      _q = 1 / 0;
    function yq(e) {
      if (typeof e == "string" || Eq(e)) return e;
      var t = e + "";
      return t == "0" && 1 / e == -_q ? "-0" : t;
    }
    sh.exports = yq;
  });
  var ei = u((s5, uh) => {
    var mq = Qr(),
      Iq = pr();
    function Tq(e, t) {
      t = mq(t, e);
      for (var r = 0, n = t.length; e != null && r < n; ) e = e[Iq(t[r++])];
      return r && r == n ? e : void 0;
    }
    uh.exports = Tq;
  });
  var ti = u((u5, ch) => {
    var Oq = ei();
    function bq(e, t, r) {
      var n = e == null ? void 0 : Oq(e, t);
      return n === void 0 ? r : n;
    }
    ch.exports = bq;
  });
  var fh = u((c5, lh) => {
    function Sq(e, t) {
      return e != null && t in Object(e);
    }
    lh.exports = Sq;
  });
  var ph = u((l5, dh) => {
    var Aq = Qr(),
      wq = Br(),
      Rq = xe(),
      Cq = jn(),
      Nq = Kn(),
      xq = pr();
    function qq(e, t, r) {
      t = Aq(t, e);
      for (var n = -1, o = t.length, i = !1; ++n < o; ) {
        var a = xq(t[n]);
        if (!(i = e != null && r(e, a))) break;
        e = e[a];
      }
      return i || ++n != o
        ? i
        : ((o = e == null ? 0 : e.length),
          !!o && Nq(o) && Cq(a, o) && (Rq(e) || wq(e)));
    }
    dh.exports = qq;
  });
  var hh = u((f5, vh) => {
    var Lq = fh(),
      Pq = ph();
    function Dq(e, t) {
      return e != null && Pq(e, t, Lq);
    }
    vh.exports = Dq;
  });
  var Eh = u((d5, gh) => {
    var Mq = Oa(),
      Fq = ti(),
      Gq = hh(),
      Uq = Jn(),
      Xq = ba(),
      Wq = Sa(),
      Vq = pr(),
      kq = 1,
      Bq = 2;
    function Hq(e, t) {
      return Uq(e) && Xq(t)
        ? Wq(Vq(e), t)
        : function (r) {
            var n = Fq(r, e);
            return n === void 0 && n === t ? Gq(r, e) : Mq(t, n, kq | Bq);
          };
    }
    gh.exports = Hq;
  });
  var ri = u((p5, _h) => {
    function jq(e) {
      return e;
    }
    _h.exports = jq;
  });
  var Ra = u((v5, yh) => {
    function Kq(e) {
      return function (t) {
        return t?.[e];
      };
    }
    yh.exports = Kq;
  });
  var Ih = u((h5, mh) => {
    var zq = ei();
    function Yq(e) {
      return function (t) {
        return zq(t, e);
      };
    }
    mh.exports = Yq;
  });
  var Oh = u((g5, Th) => {
    var Qq = Ra(),
      $q = Ih(),
      Zq = Jn(),
      Jq = pr();
    function eL(e) {
      return Zq(e) ? Qq(Jq(e)) : $q(e);
    }
    Th.exports = eL;
  });
  var Rt = u((E5, bh) => {
    var tL = Wv(),
      rL = Eh(),
      nL = ri(),
      iL = xe(),
      oL = Oh();
    function aL(e) {
      return typeof e == "function"
        ? e
        : e == null
        ? nL
        : typeof e == "object"
        ? iL(e)
          ? rL(e[0], e[1])
          : tL(e)
        : oL(e);
    }
    bh.exports = aL;
  });
  var Ca = u((_5, Sh) => {
    var sL = Rt(),
      uL = Ut(),
      cL = zr();
    function lL(e) {
      return function (t, r, n) {
        var o = Object(t);
        if (!uL(t)) {
          var i = sL(r, 3);
          (t = cL(t)),
            (r = function (s) {
              return i(o[s], s, o);
            });
        }
        var a = e(t, r, n);
        return a > -1 ? o[i ? t[a] : a] : void 0;
      };
    }
    Sh.exports = lL;
  });
  var Na = u((y5, Ah) => {
    function fL(e, t, r, n) {
      for (var o = e.length, i = r + (n ? 1 : -1); n ? i-- : ++i < o; )
        if (t(e[i], i, e)) return i;
      return -1;
    }
    Ah.exports = fL;
  });
  var Rh = u((m5, wh) => {
    var dL = /\s/;
    function pL(e) {
      for (var t = e.length; t-- && dL.test(e.charAt(t)); );
      return t;
    }
    wh.exports = pL;
  });
  var Nh = u((I5, Ch) => {
    var vL = Rh(),
      hL = /^\s+/;
    function gL(e) {
      return e && e.slice(0, vL(e) + 1).replace(hL, "");
    }
    Ch.exports = gL;
  });
  var ni = u((T5, Lh) => {
    var EL = Nh(),
      xh = dt(),
      _L = Yr(),
      qh = 0 / 0,
      yL = /^[-+]0x[0-9a-f]+$/i,
      mL = /^0b[01]+$/i,
      IL = /^0o[0-7]+$/i,
      TL = parseInt;
    function OL(e) {
      if (typeof e == "number") return e;
      if (_L(e)) return qh;
      if (xh(e)) {
        var t = typeof e.valueOf == "function" ? e.valueOf() : e;
        e = xh(t) ? t + "" : t;
      }
      if (typeof e != "string") return e === 0 ? e : +e;
      e = EL(e);
      var r = mL.test(e);
      return r || IL.test(e) ? TL(e.slice(2), r ? 2 : 8) : yL.test(e) ? qh : +e;
    }
    Lh.exports = OL;
  });
  var Mh = u((O5, Dh) => {
    var bL = ni(),
      Ph = 1 / 0,
      SL = 17976931348623157e292;
    function AL(e) {
      if (!e) return e === 0 ? e : 0;
      if (((e = bL(e)), e === Ph || e === -Ph)) {
        var t = e < 0 ? -1 : 1;
        return t * SL;
      }
      return e === e ? e : 0;
    }
    Dh.exports = AL;
  });
  var xa = u((b5, Fh) => {
    var wL = Mh();
    function RL(e) {
      var t = wL(e),
        r = t % 1;
      return t === t ? (r ? t - r : t) : 0;
    }
    Fh.exports = RL;
  });
  var Uh = u((S5, Gh) => {
    var CL = Na(),
      NL = Rt(),
      xL = xa(),
      qL = Math.max;
    function LL(e, t, r) {
      var n = e == null ? 0 : e.length;
      if (!n) return -1;
      var o = r == null ? 0 : xL(r);
      return o < 0 && (o = qL(n + o, 0)), CL(e, NL(t, 3), o);
    }
    Gh.exports = LL;
  });
  var qa = u((A5, Xh) => {
    var PL = Ca(),
      DL = Uh(),
      ML = PL(DL);
    Xh.exports = ML;
  });
  var oi = u((Fe) => {
    "use strict";
    var FL = ct().default;
    Object.defineProperty(Fe, "__esModule", { value: !0 });
    Fe.withBrowser =
      Fe.TRANSFORM_STYLE_PREFIXED =
      Fe.TRANSFORM_PREFIXED =
      Fe.IS_BROWSER_ENV =
      Fe.FLEX_PREFIXED =
      Fe.ELEMENT_MATCHES =
        void 0;
    var GL = FL(qa()),
      Vh = typeof window < "u";
    Fe.IS_BROWSER_ENV = Vh;
    var ii = (e, t) => (Vh ? e() : t);
    Fe.withBrowser = ii;
    var UL = ii(() =>
      (0, GL.default)(
        [
          "matches",
          "matchesSelector",
          "mozMatchesSelector",
          "msMatchesSelector",
          "oMatchesSelector",
          "webkitMatchesSelector",
        ],
        (e) => e in Element.prototype
      )
    );
    Fe.ELEMENT_MATCHES = UL;
    var XL = ii(() => {
      let e = document.createElement("i"),
        t = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"],
        r = "";
      try {
        let { length: n } = t;
        for (let o = 0; o < n; o++) {
          let i = t[o];
          if (((e.style.display = i), e.style.display === i)) return i;
        }
        return r;
      } catch {
        return r;
      }
    }, "flex");
    Fe.FLEX_PREFIXED = XL;
    var kh = ii(() => {
      let e = document.createElement("i");
      if (e.style.transform == null) {
        let t = ["Webkit", "Moz", "ms"],
          r = "Transform",
          { length: n } = t;
        for (let o = 0; o < n; o++) {
          let i = t[o] + r;
          if (e.style[i] !== void 0) return i;
        }
      }
      return "transform";
    }, "transform");
    Fe.TRANSFORM_PREFIXED = kh;
    var Wh = kh.split("transform")[0],
      WL = Wh ? Wh + "TransformStyle" : "transformStyle";
    Fe.TRANSFORM_STYLE_PREFIXED = WL;
  });
  var La = u((R5, zh) => {
    var VL = 4,
      kL = 0.001,
      BL = 1e-7,
      HL = 10,
      $r = 11,
      ai = 1 / ($r - 1),
      jL = typeof Float32Array == "function";
    function Bh(e, t) {
      return 1 - 3 * t + 3 * e;
    }
    function Hh(e, t) {
      return 3 * t - 6 * e;
    }
    function jh(e) {
      return 3 * e;
    }
    function si(e, t, r) {
      return ((Bh(t, r) * e + Hh(t, r)) * e + jh(t)) * e;
    }
    function Kh(e, t, r) {
      return 3 * Bh(t, r) * e * e + 2 * Hh(t, r) * e + jh(t);
    }
    function KL(e, t, r, n, o) {
      var i,
        a,
        s = 0;
      do
        (a = t + (r - t) / 2), (i = si(a, n, o) - e), i > 0 ? (r = a) : (t = a);
      while (Math.abs(i) > BL && ++s < HL);
      return a;
    }
    function zL(e, t, r, n) {
      for (var o = 0; o < VL; ++o) {
        var i = Kh(t, r, n);
        if (i === 0) return t;
        var a = si(t, r, n) - e;
        t -= a / i;
      }
      return t;
    }
    zh.exports = function (t, r, n, o) {
      if (!(0 <= t && t <= 1 && 0 <= n && n <= 1))
        throw new Error("bezier x values must be in [0, 1] range");
      var i = jL ? new Float32Array($r) : new Array($r);
      if (t !== r || n !== o)
        for (var a = 0; a < $r; ++a) i[a] = si(a * ai, t, n);
      function s(c) {
        for (var p = 0, y = 1, h = $r - 1; y !== h && i[y] <= c; ++y) p += ai;
        --y;
        var m = (c - i[y]) / (i[y + 1] - i[y]),
          I = p + m * ai,
          R = Kh(I, t, n);
        return R >= kL ? zL(c, I, t, n) : R === 0 ? I : KL(c, p, p + ai, t, n);
      }
      return function (p) {
        return t === r && n === o
          ? p
          : p === 0
          ? 0
          : p === 1
          ? 1
          : si(s(p), r, o);
      };
    };
  });
  var Pa = u((ue) => {
    "use strict";
    var YL = ct().default;
    Object.defineProperty(ue, "__esModule", { value: !0 });
    ue.bounce = xP;
    ue.bouncePast = qP;
    ue.easeOut = ue.easeInOut = ue.easeIn = ue.ease = void 0;
    ue.inBack = TP;
    ue.inCirc = _P;
    ue.inCubic = nP;
    ue.inElastic = SP;
    ue.inExpo = hP;
    ue.inOutBack = bP;
    ue.inOutCirc = mP;
    ue.inOutCubic = oP;
    ue.inOutElastic = wP;
    ue.inOutExpo = EP;
    ue.inOutQuad = rP;
    ue.inOutQuart = uP;
    ue.inOutQuint = fP;
    ue.inOutSine = vP;
    ue.inQuad = eP;
    ue.inQuart = aP;
    ue.inQuint = cP;
    ue.inSine = dP;
    ue.outBack = OP;
    ue.outBounce = IP;
    ue.outCirc = yP;
    ue.outCubic = iP;
    ue.outElastic = AP;
    ue.outExpo = gP;
    ue.outQuad = tP;
    ue.outQuart = sP;
    ue.outQuint = lP;
    ue.outSine = pP;
    ue.swingFrom = CP;
    ue.swingFromTo = RP;
    ue.swingTo = NP;
    var ui = YL(La()),
      It = 1.70158,
      QL = (0, ui.default)(0.25, 0.1, 0.25, 1);
    ue.ease = QL;
    var $L = (0, ui.default)(0.42, 0, 1, 1);
    ue.easeIn = $L;
    var ZL = (0, ui.default)(0, 0, 0.58, 1);
    ue.easeOut = ZL;
    var JL = (0, ui.default)(0.42, 0, 0.58, 1);
    ue.easeInOut = JL;
    function eP(e) {
      return Math.pow(e, 2);
    }
    function tP(e) {
      return -(Math.pow(e - 1, 2) - 1);
    }
    function rP(e) {
      return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 2) : -0.5 * ((e -= 2) * e - 2);
    }
    function nP(e) {
      return Math.pow(e, 3);
    }
    function iP(e) {
      return Math.pow(e - 1, 3) + 1;
    }
    function oP(e) {
      return (e /= 0.5) < 1
        ? 0.5 * Math.pow(e, 3)
        : 0.5 * (Math.pow(e - 2, 3) + 2);
    }
    function aP(e) {
      return Math.pow(e, 4);
    }
    function sP(e) {
      return -(Math.pow(e - 1, 4) - 1);
    }
    function uP(e) {
      return (e /= 0.5) < 1
        ? 0.5 * Math.pow(e, 4)
        : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
    }
    function cP(e) {
      return Math.pow(e, 5);
    }
    function lP(e) {
      return Math.pow(e - 1, 5) + 1;
    }
    function fP(e) {
      return (e /= 0.5) < 1
        ? 0.5 * Math.pow(e, 5)
        : 0.5 * (Math.pow(e - 2, 5) + 2);
    }
    function dP(e) {
      return -Math.cos(e * (Math.PI / 2)) + 1;
    }
    function pP(e) {
      return Math.sin(e * (Math.PI / 2));
    }
    function vP(e) {
      return -0.5 * (Math.cos(Math.PI * e) - 1);
    }
    function hP(e) {
      return e === 0 ? 0 : Math.pow(2, 10 * (e - 1));
    }
    function gP(e) {
      return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1;
    }
    function EP(e) {
      return e === 0
        ? 0
        : e === 1
        ? 1
        : (e /= 0.5) < 1
        ? 0.5 * Math.pow(2, 10 * (e - 1))
        : 0.5 * (-Math.pow(2, -10 * --e) + 2);
    }
    function _P(e) {
      return -(Math.sqrt(1 - e * e) - 1);
    }
    function yP(e) {
      return Math.sqrt(1 - Math.pow(e - 1, 2));
    }
    function mP(e) {
      return (e /= 0.5) < 1
        ? -0.5 * (Math.sqrt(1 - e * e) - 1)
        : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
    }
    function IP(e) {
      return e < 1 / 2.75
        ? 7.5625 * e * e
        : e < 2 / 2.75
        ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
        : e < 2.5 / 2.75
        ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
        : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
    }
    function TP(e) {
      let t = It;
      return e * e * ((t + 1) * e - t);
    }
    function OP(e) {
      let t = It;
      return (e -= 1) * e * ((t + 1) * e + t) + 1;
    }
    function bP(e) {
      let t = It;
      return (e /= 0.5) < 1
        ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
        : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
    }
    function SP(e) {
      let t = It,
        r = 0,
        n = 1;
      return e === 0
        ? 0
        : e === 1
        ? 1
        : (r || (r = 0.3),
          n < 1
            ? ((n = 1), (t = r / 4))
            : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
          -(
            n *
            Math.pow(2, 10 * (e -= 1)) *
            Math.sin(((e - t) * (2 * Math.PI)) / r)
          ));
    }
    function AP(e) {
      let t = It,
        r = 0,
        n = 1;
      return e === 0
        ? 0
        : e === 1
        ? 1
        : (r || (r = 0.3),
          n < 1
            ? ((n = 1), (t = r / 4))
            : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
          n * Math.pow(2, -10 * e) * Math.sin(((e - t) * (2 * Math.PI)) / r) +
            1);
    }
    function wP(e) {
      let t = It,
        r = 0,
        n = 1;
      return e === 0
        ? 0
        : (e /= 1 / 2) === 2
        ? 1
        : (r || (r = 0.3 * 1.5),
          n < 1
            ? ((n = 1), (t = r / 4))
            : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
          e < 1
            ? -0.5 *
              (n *
                Math.pow(2, 10 * (e -= 1)) *
                Math.sin(((e - t) * (2 * Math.PI)) / r))
            : n *
                Math.pow(2, -10 * (e -= 1)) *
                Math.sin(((e - t) * (2 * Math.PI)) / r) *
                0.5 +
              1);
    }
    function RP(e) {
      let t = It;
      return (e /= 0.5) < 1
        ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
        : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
    }
    function CP(e) {
      let t = It;
      return e * e * ((t + 1) * e - t);
    }
    function NP(e) {
      let t = It;
      return (e -= 1) * e * ((t + 1) * e + t) + 1;
    }
    function xP(e) {
      return e < 1 / 2.75
        ? 7.5625 * e * e
        : e < 2 / 2.75
        ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
        : e < 2.5 / 2.75
        ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
        : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
    }
    function qP(e) {
      return e < 1 / 2.75
        ? 7.5625 * e * e
        : e < 2 / 2.75
        ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
        : e < 2.5 / 2.75
        ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
        : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
    }
  });
  var Ma = u((Zr) => {
    "use strict";
    var LP = ct().default,
      PP = $t().default;
    Object.defineProperty(Zr, "__esModule", { value: !0 });
    Zr.applyEasing = FP;
    Zr.createBezierEasing = MP;
    Zr.optimizeFloat = Da;
    var Yh = PP(Pa()),
      DP = LP(La());
    function Da(e, t = 5, r = 10) {
      let n = Math.pow(r, t),
        o = Number(Math.round(e * n) / n);
      return Math.abs(o) > 1e-4 ? o : 0;
    }
    function MP(e) {
      return (0, DP.default)(...e);
    }
    function FP(e, t, r) {
      return t === 0
        ? 0
        : t === 1
        ? 1
        : Da(r ? (t > 0 ? r(t) : t) : t > 0 && e && Yh[e] ? Yh[e](t) : t);
    }
  });
  var Jh = u((vr) => {
    "use strict";
    Object.defineProperty(vr, "__esModule", { value: !0 });
    vr.createElementState = Zh;
    vr.ixElements = void 0;
    vr.mergeActionState = Fa;
    var ci = or(),
      $h = ke(),
      {
        HTML_ELEMENT: x5,
        PLAIN_OBJECT: GP,
        ABSTRACT_NODE: q5,
        CONFIG_X_VALUE: UP,
        CONFIG_Y_VALUE: XP,
        CONFIG_Z_VALUE: WP,
        CONFIG_VALUE: VP,
        CONFIG_X_UNIT: kP,
        CONFIG_Y_UNIT: BP,
        CONFIG_Z_UNIT: HP,
        CONFIG_UNIT: jP,
      } = $h.IX2EngineConstants,
      {
        IX2_SESSION_STOPPED: KP,
        IX2_INSTANCE_ADDED: zP,
        IX2_ELEMENT_STATE_CHANGED: YP,
      } = $h.IX2EngineActionTypes,
      Qh = {},
      QP = "refState",
      $P = (e = Qh, t = {}) => {
        switch (t.type) {
          case KP:
            return Qh;
          case zP: {
            let {
                elementId: r,
                element: n,
                origin: o,
                actionItem: i,
                refType: a,
              } = t.payload,
              { actionTypeId: s } = i,
              c = e;
            return (
              (0, ci.getIn)(c, [r, n]) !== n && (c = Zh(c, n, a, r, i)),
              Fa(c, r, s, o, i)
            );
          }
          case YP: {
            let {
              elementId: r,
              actionTypeId: n,
              current: o,
              actionItem: i,
            } = t.payload;
            return Fa(e, r, n, o, i);
          }
          default:
            return e;
        }
      };
    vr.ixElements = $P;
    function Zh(e, t, r, n, o) {
      let i =
        r === GP ? (0, ci.getIn)(o, ["config", "target", "objectId"]) : null;
      return (0, ci.mergeIn)(e, [n], { id: n, ref: t, refId: i, refType: r });
    }
    function Fa(e, t, r, n, o) {
      let i = JP(o),
        a = [t, QP, r];
      return (0, ci.mergeIn)(e, a, n, i);
    }
    var ZP = [
      [UP, kP],
      [XP, BP],
      [WP, HP],
      [VP, jP],
    ];
    function JP(e) {
      let { config: t } = e;
      return ZP.reduce((r, n) => {
        let o = n[0],
          i = n[1],
          a = t[o],
          s = t[i];
        return a != null && s != null && (r[i] = s), r;
      }, {});
    }
  });
  var eg = u((qe) => {
    "use strict";
    Object.defineProperty(qe, "__esModule", { value: !0 });
    qe.renderPlugin =
      qe.getPluginOrigin =
      qe.getPluginDuration =
      qe.getPluginDestination =
      qe.getPluginConfig =
      qe.createPluginInstance =
      qe.clearPlugin =
        void 0;
    var eD = (e) => e.value;
    qe.getPluginConfig = eD;
    var tD = (e, t) => {
      if (t.config.duration !== "auto") return null;
      let r = parseFloat(e.getAttribute("data-duration"));
      return r > 0
        ? r * 1e3
        : parseFloat(e.getAttribute("data-default-duration")) * 1e3;
    };
    qe.getPluginDuration = tD;
    var rD = (e) => e || { value: 0 };
    qe.getPluginOrigin = rD;
    var nD = (e) => ({ value: e.value });
    qe.getPluginDestination = nD;
    var iD = (e) => {
      let t = window.Test.require("lottie").createInstance(e);
      return t.stop(), t.setSubframe(!0), t;
    };
    qe.createPluginInstance = iD;
    var oD = (e, t, r) => {
      if (!e) return;
      let n = t[r.actionTypeId].value / 100;
      e.goToFrame(e.frames * n);
    };
    qe.renderPlugin = oD;
    var aD = (e) => {
      window.Test.require("lottie").createInstance(e).stop();
    };
    qe.clearPlugin = aD;
  });
  var Ga = u((Ce) => {
    "use strict";
    Object.defineProperty(Ce, "__esModule", { value: !0 });
    Ce.getPluginOrigin =
      Ce.getPluginDuration =
      Ce.getPluginDestination =
      Ce.getPluginConfig =
      Ce.createPluginInstance =
      Ce.clearPlugin =
        void 0;
    Ce.isPluginType = cD;
    Ce.renderPlugin = void 0;
    var Wt = eg(),
      tg = ke(),
      sD = oi(),
      uD = {
        [tg.ActionTypeConsts.PLUGIN_LOTTIE]: {
          getConfig: Wt.getPluginConfig,
          getOrigin: Wt.getPluginOrigin,
          getDuration: Wt.getPluginDuration,
          getDestination: Wt.getPluginDestination,
          createInstance: Wt.createPluginInstance,
          render: Wt.renderPlugin,
          clear: Wt.clearPlugin,
        },
      };
    function cD(e) {
      return e === tg.ActionTypeConsts.PLUGIN_LOTTIE;
    }
    var Vt = (e) => (t) => {
        if (!sD.IS_BROWSER_ENV) return () => null;
        let r = uD[t];
        if (!r) throw new Error(`IX2 no plugin configured for: ${t}`);
        let n = r[e];
        if (!n) throw new Error(`IX2 invalid plugin method: ${e}`);
        return n;
      },
      lD = Vt("getConfig");
    Ce.getPluginConfig = lD;
    var fD = Vt("getOrigin");
    Ce.getPluginOrigin = fD;
    var dD = Vt("getDuration");
    Ce.getPluginDuration = dD;
    var pD = Vt("getDestination");
    Ce.getPluginDestination = pD;
    var vD = Vt("createInstance");
    Ce.createPluginInstance = vD;
    var hD = Vt("render");
    Ce.renderPlugin = hD;
    var gD = Vt("clear");
    Ce.clearPlugin = gD;
  });
  var ng = u((M5, rg) => {
    function ED(e, t) {
      return e == null || e !== e ? t : e;
    }
    rg.exports = ED;
  });
  var og = u((F5, ig) => {
    function _D(e, t, r, n) {
      var o = -1,
        i = e == null ? 0 : e.length;
      for (n && i && (r = e[++o]); ++o < i; ) r = t(r, e[o], o, e);
      return r;
    }
    ig.exports = _D;
  });
  var sg = u((G5, ag) => {
    function yD(e) {
      return function (t, r, n) {
        for (var o = -1, i = Object(t), a = n(t), s = a.length; s--; ) {
          var c = a[e ? s : ++o];
          if (r(i[c], c, i) === !1) break;
        }
        return t;
      };
    }
    ag.exports = yD;
  });
  var cg = u((U5, ug) => {
    var mD = sg(),
      ID = mD();
    ug.exports = ID;
  });
  var Ua = u((X5, lg) => {
    var TD = cg(),
      OD = zr();
    function bD(e, t) {
      return e && TD(e, t, OD);
    }
    lg.exports = bD;
  });
  var dg = u((W5, fg) => {
    var SD = Ut();
    function AD(e, t) {
      return function (r, n) {
        if (r == null) return r;
        if (!SD(r)) return e(r, n);
        for (
          var o = r.length, i = t ? o : -1, a = Object(r);
          (t ? i-- : ++i < o) && n(a[i], i, a) !== !1;

        );
        return r;
      };
    }
    fg.exports = AD;
  });
  var Xa = u((V5, pg) => {
    var wD = Ua(),
      RD = dg(),
      CD = RD(wD);
    pg.exports = CD;
  });
  var hg = u((k5, vg) => {
    function ND(e, t, r, n, o) {
      return (
        o(e, function (i, a, s) {
          r = n ? ((n = !1), i) : t(r, i, a, s);
        }),
        r
      );
    }
    vg.exports = ND;
  });
  var Eg = u((B5, gg) => {
    var xD = og(),
      qD = Xa(),
      LD = Rt(),
      PD = hg(),
      DD = xe();
    function MD(e, t, r) {
      var n = DD(e) ? xD : PD,
        o = arguments.length < 3;
      return n(e, LD(t, 4), r, o, qD);
    }
    gg.exports = MD;
  });
  var yg = u((H5, _g) => {
    var FD = Na(),
      GD = Rt(),
      UD = xa(),
      XD = Math.max,
      WD = Math.min;
    function VD(e, t, r) {
      var n = e == null ? 0 : e.length;
      if (!n) return -1;
      var o = n - 1;
      return (
        r !== void 0 &&
          ((o = UD(r)), (o = r < 0 ? XD(n + o, 0) : WD(o, n - 1))),
        FD(e, GD(t, 3), o, !0)
      );
    }
    _g.exports = VD;
  });
  var Ig = u((j5, mg) => {
    var kD = Ca(),
      BD = yg(),
      HD = kD(BD);
    mg.exports = HD;
  });
  var Og = u((li) => {
    "use strict";
    Object.defineProperty(li, "__esModule", { value: !0 });
    li.default = void 0;
    var jD = Object.prototype.hasOwnProperty;
    function Tg(e, t) {
      return e === t
        ? e !== 0 || t !== 0 || 1 / e === 1 / t
        : e !== e && t !== t;
    }
    function KD(e, t) {
      if (Tg(e, t)) return !0;
      if (
        typeof e != "object" ||
        e === null ||
        typeof t != "object" ||
        t === null
      )
        return !1;
      let r = Object.keys(e),
        n = Object.keys(t);
      if (r.length !== n.length) return !1;
      for (let o = 0; o < r.length; o++)
        if (!jD.call(t, r[o]) || !Tg(e[r[o]], t[r[o]])) return !1;
      return !0;
    }
    var zD = KD;
    li.default = zD;
  });
  var Bg = u((ye) => {
    "use strict";
    var pi = ct().default;
    Object.defineProperty(ye, "__esModule", { value: !0 });
    ye.cleanupHTMLElement = HM;
    ye.clearAllStyles = BM;
    ye.getActionListProgress = KM;
    ye.getAffectedElements = ja;
    ye.getComputedStyle = yM;
    ye.getDestinationValues = AM;
    ye.getElementId = hM;
    ye.getInstanceId = pM;
    ye.getInstanceOrigin = TM;
    ye.getItemConfigByKey = void 0;
    ye.getMaxDurationItemIndex = kg;
    ye.getNamespacedParameterId = QM;
    ye.getRenderType = Xg;
    ye.getStyleProp = wM;
    ye.mediaQueriesEqual = ZM;
    ye.observeStore = _M;
    ye.reduceListToGroup = zM;
    ye.reifyState = gM;
    ye.renderHTMLElement = RM;
    Object.defineProperty(ye, "shallowEqual", {
      enumerable: !0,
      get: function () {
        return Lg.default;
      },
    });
    ye.shouldAllowMediaQuery = $M;
    ye.shouldNamespaceEventParameter = YM;
    ye.stringifyTarget = JM;
    var Ct = pi(ng()),
      Va = pi(Eg()),
      Wa = pi(Ig()),
      bg = or(),
      kt = ke(),
      Lg = pi(Og()),
      YD = Ma(),
      ht = Ga(),
      Ge = oi(),
      {
        BACKGROUND: QD,
        TRANSFORM: $D,
        TRANSLATE_3D: ZD,
        SCALE_3D: JD,
        ROTATE_X: eM,
        ROTATE_Y: tM,
        ROTATE_Z: rM,
        SKEW: nM,
        PRESERVE_3D: iM,
        FLEX: oM,
        OPACITY: fi,
        FILTER: Jr,
        FONT_VARIATION_SETTINGS: en,
        WIDTH: pt,
        HEIGHT: vt,
        BACKGROUND_COLOR: Pg,
        BORDER_COLOR: aM,
        COLOR: sM,
        CHILDREN: Sg,
        IMMEDIATE_CHILDREN: uM,
        SIBLINGS: Ag,
        PARENT: cM,
        DISPLAY: di,
        WILL_CHANGE: hr,
        AUTO: Nt,
        COMMA_DELIMITER: tn,
        COLON_DELIMITER: lM,
        BAR_DELIMITER: wg,
        RENDER_TRANSFORM: Dg,
        RENDER_GENERAL: ka,
        RENDER_STYLE: Ba,
        RENDER_PLUGIN: Mg,
      } = kt.IX2EngineConstants,
      {
        TRANSFORM_MOVE: gr,
        TRANSFORM_SCALE: Er,
        TRANSFORM_ROTATE: _r,
        TRANSFORM_SKEW: rn,
        STYLE_OPACITY: Fg,
        STYLE_FILTER: nn,
        STYLE_FONT_VARIATION: on,
        STYLE_SIZE: yr,
        STYLE_BACKGROUND_COLOR: mr,
        STYLE_BORDER: Ir,
        STYLE_TEXT_COLOR: Tr,
        GENERAL_DISPLAY: vi,
      } = kt.ActionTypeConsts,
      fM = "OBJECT_VALUE",
      Gg = (e) => e.trim(),
      Ha = Object.freeze({ [mr]: Pg, [Ir]: aM, [Tr]: sM }),
      Ug = Object.freeze({
        [Ge.TRANSFORM_PREFIXED]: $D,
        [Pg]: QD,
        [fi]: fi,
        [Jr]: Jr,
        [pt]: pt,
        [vt]: vt,
        [en]: en,
      }),
      Rg = {},
      dM = 1;
    function pM() {
      return "i" + dM++;
    }
    var vM = 1;
    function hM(e, t) {
      for (let r in e) {
        let n = e[r];
        if (n && n.ref === t) return n.id;
      }
      return "e" + vM++;
    }
    function gM({ events: e, actionLists: t, site: r } = {}) {
      let n = (0, Va.default)(
          e,
          (a, s) => {
            let { eventTypeId: c } = s;
            return a[c] || (a[c] = {}), (a[c][s.id] = s), a;
          },
          {}
        ),
        o = r && r.mediaQueries,
        i = [];
      return (
        o
          ? (i = o.map((a) => a.key))
          : ((o = []), console.warn("IX2 missing mediaQueries in site data")),
        {
          ixData: {
            events: e,
            actionLists: t,
            eventTypeMap: n,
            mediaQueries: o,
            mediaQueryKeys: i,
          },
        }
      );
    }
    var EM = (e, t) => e === t;
    function _M({ store: e, select: t, onChange: r, comparator: n = EM }) {
      let { getState: o, subscribe: i } = e,
        a = i(c),
        s = t(o());
      function c() {
        let p = t(o());
        if (p == null) {
          a();
          return;
        }
        n(p, s) || ((s = p), r(s, e));
      }
      return a;
    }
    function Cg(e) {
      let t = typeof e;
      if (t === "string") return { id: e };
      if (e != null && t === "object") {
        let {
          id: r,
          objectId: n,
          selector: o,
          selectorGuids: i,
          appliesTo: a,
          useEventTarget: s,
        } = e;
        return {
          id: r,
          objectId: n,
          selector: o,
          selectorGuids: i,
          appliesTo: a,
          useEventTarget: s,
        };
      }
      return {};
    }
    function ja({
      config: e,
      event: t,
      eventTarget: r,
      elementRoot: n,
      elementApi: o,
    }) {
      var i, a, s;
      if (!o) throw new Error("IX2 missing elementApi");
      let { targets: c } = e;
      if (Array.isArray(c) && c.length > 0)
        return c.reduce(
          (V, j) =>
            V.concat(
              ja({
                config: { target: j },
                event: t,
                eventTarget: r,
                elementRoot: n,
                elementApi: o,
              })
            ),
          []
        );
      let {
          getValidDocument: p,
          getQuerySelector: y,
          queryDocument: h,
          getChildElements: m,
          getSiblingElements: I,
          matchSelector: R,
          elementContains: A,
          isSiblingNode: F,
        } = o,
        { target: N } = e;
      if (!N) return [];
      let {
        id: x,
        objectId: S,
        selector: P,
        selectorGuids: L,
        appliesTo: M,
        useEventTarget: H,
      } = Cg(N);
      if (S) return [Rg[S] || (Rg[S] = {})];
      if (M === kt.EventAppliesTo.PAGE) {
        let V = p(x);
        return V ? [V] : [];
      }
      let $ =
          ((i =
            t == null ||
            (a = t.action) === null ||
            a === void 0 ||
            (s = a.config) === null ||
            s === void 0
              ? void 0
              : s.affectedElements) !== null && i !== void 0
            ? i
            : {})[x || P] || {},
        ae = !!($.id || $.selector),
        te,
        U,
        O,
        X = t && y(Cg(t.target));
      if (
        (ae
          ? ((te = $.limitAffectedElements), (U = X), (O = y($)))
          : (U = O = y({ id: x, selector: P, selectorGuids: L })),
        t && H)
      ) {
        let V = r && (O || H === !0) ? [r] : h(X);
        if (O) {
          if (H === cM) return h(O).filter((j) => V.some((J) => A(j, J)));
          if (H === Sg) return h(O).filter((j) => V.some((J) => A(J, j)));
          if (H === Ag) return h(O).filter((j) => V.some((J) => F(J, j)));
        }
        return V;
      }
      return U == null || O == null
        ? []
        : Ge.IS_BROWSER_ENV && n
        ? h(O).filter((V) => n.contains(V))
        : te === Sg
        ? h(U, O)
        : te === uM
        ? m(h(U)).filter(R(O))
        : te === Ag
        ? I(h(U)).filter(R(O))
        : h(O);
    }
    function yM({ element: e, actionItem: t }) {
      if (!Ge.IS_BROWSER_ENV) return {};
      let { actionTypeId: r } = t;
      switch (r) {
        case yr:
        case mr:
        case Ir:
        case Tr:
        case vi:
          return window.getComputedStyle(e);
        default:
          return {};
      }
    }
    var Ng = /px/,
      mM = (e, t) =>
        t.reduce(
          (r, n) => (r[n.type] == null && (r[n.type] = CM[n.type]), r),
          e || {}
        ),
      IM = (e, t) =>
        t.reduce(
          (r, n) => (
            r[n.type] == null &&
              (r[n.type] = NM[n.type] || n.defaultValue || 0),
            r
          ),
          e || {}
        );
    function TM(e, t = {}, r = {}, n, o) {
      let { getStyle: i } = o,
        { actionTypeId: a } = n;
      if ((0, ht.isPluginType)(a)) return (0, ht.getPluginOrigin)(a)(t[a]);
      switch (n.actionTypeId) {
        case gr:
        case Er:
        case _r:
        case rn:
          return t[n.actionTypeId] || Ka[n.actionTypeId];
        case nn:
          return mM(t[n.actionTypeId], n.config.filters);
        case on:
          return IM(t[n.actionTypeId], n.config.fontVariations);
        case Fg:
          return { value: (0, Ct.default)(parseFloat(i(e, fi)), 1) };
        case yr: {
          let s = i(e, pt),
            c = i(e, vt),
            p,
            y;
          return (
            n.config.widthUnit === Nt
              ? (p = Ng.test(s) ? parseFloat(s) : parseFloat(r.width))
              : (p = (0, Ct.default)(parseFloat(s), parseFloat(r.width))),
            n.config.heightUnit === Nt
              ? (y = Ng.test(c) ? parseFloat(c) : parseFloat(r.height))
              : (y = (0, Ct.default)(parseFloat(c), parseFloat(r.height))),
            { widthValue: p, heightValue: y }
          );
        }
        case mr:
        case Ir:
        case Tr:
          return WM({
            element: e,
            actionTypeId: n.actionTypeId,
            computedStyle: r,
            getStyle: i,
          });
        case vi:
          return { value: (0, Ct.default)(i(e, di), r.display) };
        case fM:
          return t[n.actionTypeId] || { value: 0 };
        default:
          return;
      }
    }
    var OM = (e, t) => (t && (e[t.type] = t.value || 0), e),
      bM = (e, t) => (t && (e[t.type] = t.value || 0), e),
      SM = (e, t, r) => {
        if ((0, ht.isPluginType)(e)) return (0, ht.getPluginConfig)(e)(r, t);
        switch (e) {
          case nn: {
            let n = (0, Wa.default)(r.filters, ({ type: o }) => o === t);
            return n ? n.value : 0;
          }
          case on: {
            let n = (0, Wa.default)(r.fontVariations, ({ type: o }) => o === t);
            return n ? n.value : 0;
          }
          default:
            return r[t];
        }
      };
    ye.getItemConfigByKey = SM;
    function AM({ element: e, actionItem: t, elementApi: r }) {
      if ((0, ht.isPluginType)(t.actionTypeId))
        return (0, ht.getPluginDestination)(t.actionTypeId)(t.config);
      switch (t.actionTypeId) {
        case gr:
        case Er:
        case _r:
        case rn: {
          let { xValue: n, yValue: o, zValue: i } = t.config;
          return { xValue: n, yValue: o, zValue: i };
        }
        case yr: {
          let { getStyle: n, setStyle: o, getProperty: i } = r,
            { widthUnit: a, heightUnit: s } = t.config,
            { widthValue: c, heightValue: p } = t.config;
          if (!Ge.IS_BROWSER_ENV) return { widthValue: c, heightValue: p };
          if (a === Nt) {
            let y = n(e, pt);
            o(e, pt, ""), (c = i(e, "offsetWidth")), o(e, pt, y);
          }
          if (s === Nt) {
            let y = n(e, vt);
            o(e, vt, ""), (p = i(e, "offsetHeight")), o(e, vt, y);
          }
          return { widthValue: c, heightValue: p };
        }
        case mr:
        case Ir:
        case Tr: {
          let { rValue: n, gValue: o, bValue: i, aValue: a } = t.config;
          return { rValue: n, gValue: o, bValue: i, aValue: a };
        }
        case nn:
          return t.config.filters.reduce(OM, {});
        case on:
          return t.config.fontVariations.reduce(bM, {});
        default: {
          let { value: n } = t.config;
          return { value: n };
        }
      }
    }
    function Xg(e) {
      if (/^TRANSFORM_/.test(e)) return Dg;
      if (/^STYLE_/.test(e)) return Ba;
      if (/^GENERAL_/.test(e)) return ka;
      if (/^PLUGIN_/.test(e)) return Mg;
    }
    function wM(e, t) {
      return e === Ba ? t.replace("STYLE_", "").toLowerCase() : null;
    }
    function RM(e, t, r, n, o, i, a, s, c) {
      switch (s) {
        case Dg:
          return LM(e, t, r, o, a);
        case Ba:
          return VM(e, t, r, o, i, a);
        case ka:
          return kM(e, o, a);
        case Mg: {
          let { actionTypeId: p } = o;
          if ((0, ht.isPluginType)(p)) return (0, ht.renderPlugin)(p)(c, t, o);
        }
      }
    }
    var Ka = {
        [gr]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [Er]: Object.freeze({ xValue: 1, yValue: 1, zValue: 1 }),
        [_r]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [rn]: Object.freeze({ xValue: 0, yValue: 0 }),
      },
      CM = Object.freeze({
        blur: 0,
        "hue-rotate": 0,
        invert: 0,
        grayscale: 0,
        saturate: 100,
        sepia: 0,
        contrast: 100,
        brightness: 100,
      }),
      NM = Object.freeze({ wght: 0, opsz: 0, wdth: 0, slnt: 0 }),
      xM = (e, t) => {
        let r = (0, Wa.default)(t.filters, ({ type: n }) => n === e);
        if (r && r.unit) return r.unit;
        switch (e) {
          case "blur":
            return "px";
          case "hue-rotate":
            return "deg";
          default:
            return "%";
        }
      },
      qM = Object.keys(Ka);
    function LM(e, t, r, n, o) {
      let i = qM
          .map((s) => {
            let c = Ka[s],
              {
                xValue: p = c.xValue,
                yValue: y = c.yValue,
                zValue: h = c.zValue,
                xUnit: m = "",
                yUnit: I = "",
                zUnit: R = "",
              } = t[s] || {};
            switch (s) {
              case gr:
                return `${ZD}(${p}${m}, ${y}${I}, ${h}${R})`;
              case Er:
                return `${JD}(${p}${m}, ${y}${I}, ${h}${R})`;
              case _r:
                return `${eM}(${p}${m}) ${tM}(${y}${I}) ${rM}(${h}${R})`;
              case rn:
                return `${nM}(${p}${m}, ${y}${I})`;
              default:
                return "";
            }
          })
          .join(" "),
        { setStyle: a } = o;
      Bt(e, Ge.TRANSFORM_PREFIXED, o),
        a(e, Ge.TRANSFORM_PREFIXED, i),
        MM(n, r) && a(e, Ge.TRANSFORM_STYLE_PREFIXED, iM);
    }
    function PM(e, t, r, n) {
      let o = (0, Va.default)(t, (a, s, c) => `${a} ${c}(${s}${xM(c, r)})`, ""),
        { setStyle: i } = n;
      Bt(e, Jr, n), i(e, Jr, o);
    }
    function DM(e, t, r, n) {
      let o = (0, Va.default)(
          t,
          (a, s, c) => (a.push(`"${c}" ${s}`), a),
          []
        ).join(", "),
        { setStyle: i } = n;
      Bt(e, en, n), i(e, en, o);
    }
    function MM({ actionTypeId: e }, { xValue: t, yValue: r, zValue: n }) {
      return (
        (e === gr && n !== void 0) ||
        (e === Er && n !== void 0) ||
        (e === _r && (t !== void 0 || r !== void 0))
      );
    }
    var FM = "\\(([^)]+)\\)",
      GM = /^rgb/,
      UM = RegExp(`rgba?${FM}`);
    function XM(e, t) {
      let r = e.exec(t);
      return r ? r[1] : "";
    }
    function WM({
      element: e,
      actionTypeId: t,
      computedStyle: r,
      getStyle: n,
    }) {
      let o = Ha[t],
        i = n(e, o),
        a = GM.test(i) ? i : r[o],
        s = XM(UM, a).split(tn);
      return {
        rValue: (0, Ct.default)(parseInt(s[0], 10), 255),
        gValue: (0, Ct.default)(parseInt(s[1], 10), 255),
        bValue: (0, Ct.default)(parseInt(s[2], 10), 255),
        aValue: (0, Ct.default)(parseFloat(s[3]), 1),
      };
    }
    function VM(e, t, r, n, o, i) {
      let { setStyle: a } = i;
      switch (n.actionTypeId) {
        case yr: {
          let { widthUnit: s = "", heightUnit: c = "" } = n.config,
            { widthValue: p, heightValue: y } = r;
          p !== void 0 &&
            (s === Nt && (s = "px"), Bt(e, pt, i), a(e, pt, p + s)),
            y !== void 0 &&
              (c === Nt && (c = "px"), Bt(e, vt, i), a(e, vt, y + c));
          break;
        }
        case nn: {
          PM(e, r, n.config, i);
          break;
        }
        case on: {
          DM(e, r, n.config, i);
          break;
        }
        case mr:
        case Ir:
        case Tr: {
          let s = Ha[n.actionTypeId],
            c = Math.round(r.rValue),
            p = Math.round(r.gValue),
            y = Math.round(r.bValue),
            h = r.aValue;
          Bt(e, s, i),
            a(
              e,
              s,
              h >= 1 ? `rgb(${c},${p},${y})` : `rgba(${c},${p},${y},${h})`
            );
          break;
        }
        default: {
          let { unit: s = "" } = n.config;
          Bt(e, o, i), a(e, o, r.value + s);
          break;
        }
      }
    }
    function kM(e, t, r) {
      let { setStyle: n } = r;
      switch (t.actionTypeId) {
        case vi: {
          let { value: o } = t.config;
          o === oM && Ge.IS_BROWSER_ENV
            ? n(e, di, Ge.FLEX_PREFIXED)
            : n(e, di, o);
          return;
        }
      }
    }
    function Bt(e, t, r) {
      if (!Ge.IS_BROWSER_ENV) return;
      let n = Ug[t];
      if (!n) return;
      let { getStyle: o, setStyle: i } = r,
        a = o(e, hr);
      if (!a) {
        i(e, hr, n);
        return;
      }
      let s = a.split(tn).map(Gg);
      s.indexOf(n) === -1 && i(e, hr, s.concat(n).join(tn));
    }
    function Wg(e, t, r) {
      if (!Ge.IS_BROWSER_ENV) return;
      let n = Ug[t];
      if (!n) return;
      let { getStyle: o, setStyle: i } = r,
        a = o(e, hr);
      !a ||
        a.indexOf(n) === -1 ||
        i(
          e,
          hr,
          a
            .split(tn)
            .map(Gg)
            .filter((s) => s !== n)
            .join(tn)
        );
    }
    function BM({ store: e, elementApi: t }) {
      let { ixData: r } = e.getState(),
        { events: n = {}, actionLists: o = {} } = r;
      Object.keys(n).forEach((i) => {
        let a = n[i],
          { config: s } = a.action,
          { actionListId: c } = s,
          p = o[c];
        p && xg({ actionList: p, event: a, elementApi: t });
      }),
        Object.keys(o).forEach((i) => {
          xg({ actionList: o[i], elementApi: t });
        });
    }
    function xg({ actionList: e = {}, event: t, elementApi: r }) {
      let { actionItemGroups: n, continuousParameterGroups: o } = e;
      n &&
        n.forEach((i) => {
          qg({ actionGroup: i, event: t, elementApi: r });
        }),
        o &&
          o.forEach((i) => {
            let { continuousActionGroups: a } = i;
            a.forEach((s) => {
              qg({ actionGroup: s, event: t, elementApi: r });
            });
          });
    }
    function qg({ actionGroup: e, event: t, elementApi: r }) {
      let { actionItems: n } = e;
      n.forEach(({ actionTypeId: o, config: i }) => {
        let a;
        (0, ht.isPluginType)(o)
          ? (a = (0, ht.clearPlugin)(o))
          : (a = Vg({ effect: jM, actionTypeId: o, elementApi: r })),
          ja({ config: i, event: t, elementApi: r }).forEach(a);
      });
    }
    function HM(e, t, r) {
      let { setStyle: n, getStyle: o } = r,
        { actionTypeId: i } = t;
      if (i === yr) {
        let { config: a } = t;
        a.widthUnit === Nt && n(e, pt, ""), a.heightUnit === Nt && n(e, vt, "");
      }
      o(e, hr) && Vg({ effect: Wg, actionTypeId: i, elementApi: r })(e);
    }
    var Vg =
      ({ effect: e, actionTypeId: t, elementApi: r }) =>
      (n) => {
        switch (t) {
          case gr:
          case Er:
          case _r:
          case rn:
            e(n, Ge.TRANSFORM_PREFIXED, r);
            break;
          case nn:
            e(n, Jr, r);
            break;
          case on:
            e(n, en, r);
            break;
          case Fg:
            e(n, fi, r);
            break;
          case yr:
            e(n, pt, r), e(n, vt, r);
            break;
          case mr:
          case Ir:
          case Tr:
            e(n, Ha[t], r);
            break;
          case vi:
            e(n, di, r);
            break;
        }
      };
    function jM(e, t, r) {
      let { setStyle: n } = r;
      Wg(e, t, r),
        n(e, t, ""),
        t === Ge.TRANSFORM_PREFIXED && n(e, Ge.TRANSFORM_STYLE_PREFIXED, "");
    }
    function kg(e) {
      let t = 0,
        r = 0;
      return (
        e.forEach((n, o) => {
          let { config: i } = n,
            a = i.delay + i.duration;
          a >= t && ((t = a), (r = o));
        }),
        r
      );
    }
    function KM(e, t) {
      let { actionItemGroups: r, useFirstGroupAsInitialState: n } = e,
        { actionItem: o, verboseTimeElapsed: i = 0 } = t,
        a = 0,
        s = 0;
      return (
        r.forEach((c, p) => {
          if (n && p === 0) return;
          let { actionItems: y } = c,
            h = y[kg(y)],
            { config: m, actionTypeId: I } = h;
          o.id === h.id && (s = a + i);
          let R = Xg(I) === ka ? 0 : m.duration;
          a += m.delay + R;
        }),
        a > 0 ? (0, YD.optimizeFloat)(s / a) : 0
      );
    }
    function zM({ actionList: e, actionItemId: t, rawData: r }) {
      let { actionItemGroups: n, continuousParameterGroups: o } = e,
        i = [],
        a = (s) => (
          i.push((0, bg.mergeIn)(s, ["config"], { delay: 0, duration: 0 })),
          s.id === t
        );
      return (
        n && n.some(({ actionItems: s }) => s.some(a)),
        o &&
          o.some((s) => {
            let { continuousActionGroups: c } = s;
            return c.some(({ actionItems: p }) => p.some(a));
          }),
        (0, bg.setIn)(r, ["actionLists"], {
          [e.id]: { id: e.id, actionItemGroups: [{ actionItems: i }] },
        })
      );
    }
    function YM(e, { basedOn: t }) {
      return (
        (e === kt.EventTypeConsts.SCROLLING_IN_VIEW &&
          (t === kt.EventBasedOn.ELEMENT || t == null)) ||
        (e === kt.EventTypeConsts.MOUSE_MOVE && t === kt.EventBasedOn.ELEMENT)
      );
    }
    function QM(e, t) {
      return e + lM + t;
    }
    function $M(e, t) {
      return t == null ? !0 : e.indexOf(t) !== -1;
    }
    function ZM(e, t) {
      return (0, Lg.default)(e && e.sort(), t && t.sort());
    }
    function JM(e) {
      if (typeof e == "string") return e;
      let { id: t = "", selector: r = "", useEventTarget: n = "" } = e;
      return t + wg + r + wg + n;
    }
  });
  var Ht = u((Ue) => {
    "use strict";
    var Or = $t().default;
    Object.defineProperty(Ue, "__esModule", { value: !0 });
    Ue.IX2VanillaUtils =
      Ue.IX2VanillaPlugins =
      Ue.IX2ElementsReducer =
      Ue.IX2Easings =
      Ue.IX2EasingUtils =
      Ue.IX2BrowserSupport =
        void 0;
    var e1 = Or(oi());
    Ue.IX2BrowserSupport = e1;
    var t1 = Or(Pa());
    Ue.IX2Easings = t1;
    var r1 = Or(Ma());
    Ue.IX2EasingUtils = r1;
    var n1 = Or(Jh());
    Ue.IX2ElementsReducer = n1;
    var i1 = Or(Ga());
    Ue.IX2VanillaPlugins = i1;
    var o1 = Or(Bg());
    Ue.IX2VanillaUtils = o1;
  });
  var zg = u((gi) => {
    "use strict";
    Object.defineProperty(gi, "__esModule", { value: !0 });
    gi.ixInstances = void 0;
    var Hg = ke(),
      jg = Ht(),
      br = or(),
      {
        IX2_RAW_DATA_IMPORTED: a1,
        IX2_SESSION_STOPPED: s1,
        IX2_INSTANCE_ADDED: u1,
        IX2_INSTANCE_STARTED: c1,
        IX2_INSTANCE_REMOVED: l1,
        IX2_ANIMATION_FRAME_CHANGED: f1,
      } = Hg.IX2EngineActionTypes,
      {
        optimizeFloat: hi,
        applyEasing: Kg,
        createBezierEasing: d1,
      } = jg.IX2EasingUtils,
      { RENDER_GENERAL: p1 } = Hg.IX2EngineConstants,
      {
        getItemConfigByKey: za,
        getRenderType: v1,
        getStyleProp: h1,
      } = jg.IX2VanillaUtils,
      g1 = (e, t) => {
        let {
            position: r,
            parameterId: n,
            actionGroups: o,
            destinationKeys: i,
            smoothing: a,
            restingValue: s,
            actionTypeId: c,
            customEasingFn: p,
            skipMotion: y,
            skipToValue: h,
          } = e,
          { parameters: m } = t.payload,
          I = Math.max(1 - a, 0.01),
          R = m[n];
        R == null && ((I = 1), (R = s));
        let A = Math.max(R, 0) || 0,
          F = hi(A - r),
          N = y ? h : hi(r + F * I),
          x = N * 100;
        if (N === r && e.current) return e;
        let S, P, L, M;
        for (let Q = 0, { length: $ } = o; Q < $; Q++) {
          let { keyframe: ae, actionItems: te } = o[Q];
          if ((Q === 0 && (S = te[0]), x >= ae)) {
            S = te[0];
            let U = o[Q + 1],
              O = U && x !== ae;
            (P = O ? U.actionItems[0] : null),
              O && ((L = ae / 100), (M = (U.keyframe - ae) / 100));
          }
        }
        let H = {};
        if (S && !P)
          for (let Q = 0, { length: $ } = i; Q < $; Q++) {
            let ae = i[Q];
            H[ae] = za(c, ae, S.config);
          }
        else if (S && P && L !== void 0 && M !== void 0) {
          let Q = (N - L) / M,
            $ = S.config.easing,
            ae = Kg($, Q, p);
          for (let te = 0, { length: U } = i; te < U; te++) {
            let O = i[te],
              X = za(c, O, S.config),
              J = (za(c, O, P.config) - X) * ae + X;
            H[O] = J;
          }
        }
        return (0, br.merge)(e, { position: N, current: H });
      },
      E1 = (e, t) => {
        let {
            active: r,
            origin: n,
            start: o,
            immediate: i,
            renderType: a,
            verbose: s,
            actionItem: c,
            destination: p,
            destinationKeys: y,
            pluginDuration: h,
            instanceDelay: m,
            customEasingFn: I,
            skipMotion: R,
          } = e,
          A = c.config.easing,
          { duration: F, delay: N } = c.config;
        h != null && (F = h),
          (N = m ?? N),
          a === p1 ? (F = 0) : (i || R) && (F = N = 0);
        let { now: x } = t.payload;
        if (r && n) {
          let S = x - (o + N);
          if (s) {
            let Q = x - o,
              $ = F + N,
              ae = hi(Math.min(Math.max(0, Q / $), 1));
            e = (0, br.set)(e, "verboseTimeElapsed", $ * ae);
          }
          if (S < 0) return e;
          let P = hi(Math.min(Math.max(0, S / F), 1)),
            L = Kg(A, P, I),
            M = {},
            H = null;
          return (
            y.length &&
              (H = y.reduce((Q, $) => {
                let ae = p[$],
                  te = parseFloat(n[$]) || 0,
                  O = (parseFloat(ae) - te) * L + te;
                return (Q[$] = O), Q;
              }, {})),
            (M.current = H),
            (M.position = P),
            P === 1 && ((M.active = !1), (M.complete = !0)),
            (0, br.merge)(e, M)
          );
        }
        return e;
      },
      _1 = (e = Object.freeze({}), t) => {
        switch (t.type) {
          case a1:
            return t.payload.ixInstances || Object.freeze({});
          case s1:
            return Object.freeze({});
          case u1: {
            let {
                instanceId: r,
                elementId: n,
                actionItem: o,
                eventId: i,
                eventTarget: a,
                eventStateKey: s,
                actionListId: c,
                groupIndex: p,
                isCarrier: y,
                origin: h,
                destination: m,
                immediate: I,
                verbose: R,
                continuous: A,
                parameterId: F,
                actionGroups: N,
                smoothing: x,
                restingValue: S,
                pluginInstance: P,
                pluginDuration: L,
                instanceDelay: M,
                skipMotion: H,
                skipToValue: Q,
              } = t.payload,
              { actionTypeId: $ } = o,
              ae = v1($),
              te = h1(ae, $),
              U = Object.keys(m).filter((X) => m[X] != null),
              { easing: O } = o.config;
            return (0, br.set)(e, r, {
              id: r,
              elementId: n,
              active: !1,
              position: 0,
              start: 0,
              origin: h,
              destination: m,
              destinationKeys: U,
              immediate: I,
              verbose: R,
              current: null,
              actionItem: o,
              actionTypeId: $,
              eventId: i,
              eventTarget: a,
              eventStateKey: s,
              actionListId: c,
              groupIndex: p,
              renderType: ae,
              isCarrier: y,
              styleProp: te,
              continuous: A,
              parameterId: F,
              actionGroups: N,
              smoothing: x,
              restingValue: S,
              pluginInstance: P,
              pluginDuration: L,
              instanceDelay: M,
              skipMotion: H,
              skipToValue: Q,
              customEasingFn:
                Array.isArray(O) && O.length === 4 ? d1(O) : void 0,
            });
          }
          case c1: {
            let { instanceId: r, time: n } = t.payload;
            return (0, br.mergeIn)(e, [r], {
              active: !0,
              complete: !1,
              start: n,
            });
          }
          case l1: {
            let { instanceId: r } = t.payload;
            if (!e[r]) return e;
            let n = {},
              o = Object.keys(e),
              { length: i } = o;
            for (let a = 0; a < i; a++) {
              let s = o[a];
              s !== r && (n[s] = e[s]);
            }
            return n;
          }
          case f1: {
            let r = e,
              n = Object.keys(e),
              { length: o } = n;
            for (let i = 0; i < o; i++) {
              let a = n[i],
                s = e[a],
                c = s.continuous ? g1 : E1;
              r = (0, br.set)(r, a, c(s, t));
            }
            return r;
          }
          default:
            return e;
        }
      };
    gi.ixInstances = _1;
  });
  var Yg = u((Ei) => {
    "use strict";
    Object.defineProperty(Ei, "__esModule", { value: !0 });
    Ei.ixParameters = void 0;
    var y1 = ke(),
      {
        IX2_RAW_DATA_IMPORTED: m1,
        IX2_SESSION_STOPPED: I1,
        IX2_PARAMETER_CHANGED: T1,
      } = y1.IX2EngineActionTypes,
      O1 = (e = {}, t) => {
        switch (t.type) {
          case m1:
            return t.payload.ixParameters || {};
          case I1:
            return {};
          case T1: {
            let { key: r, value: n } = t.payload;
            return (e[r] = n), e;
          }
          default:
            return e;
        }
      };
    Ei.ixParameters = O1;
  });
  var Qg = u((_i) => {
    "use strict";
    Object.defineProperty(_i, "__esModule", { value: !0 });
    _i.default = void 0;
    var b1 = $o(),
      S1 = Ef(),
      A1 = Mf(),
      w1 = Gf(),
      R1 = Ht(),
      C1 = zg(),
      N1 = Yg(),
      { ixElements: x1 } = R1.IX2ElementsReducer,
      q1 = (0, b1.combineReducers)({
        ixData: S1.ixData,
        ixRequest: A1.ixRequest,
        ixSession: w1.ixSession,
        ixElements: x1,
        ixInstances: C1.ixInstances,
        ixParameters: N1.ixParameters,
      });
    _i.default = q1;
  });
  var $g = u((J5, an) => {
    function L1(e, t) {
      if (e == null) return {};
      var r = {},
        n = Object.keys(e),
        o,
        i;
      for (i = 0; i < n.length; i++)
        (o = n[i]), !(t.indexOf(o) >= 0) && (r[o] = e[o]);
      return r;
    }
    (an.exports = L1),
      (an.exports.__esModule = !0),
      (an.exports.default = an.exports);
  });
  var Jg = u((ej, Zg) => {
    var P1 = At(),
      D1 = xe(),
      M1 = yt(),
      F1 = "[object String]";
    function G1(e) {
      return typeof e == "string" || (!D1(e) && M1(e) && P1(e) == F1);
    }
    Zg.exports = G1;
  });
  var tE = u((tj, eE) => {
    var U1 = Ra(),
      X1 = U1("length");
    eE.exports = X1;
  });
  var nE = u((rj, rE) => {
    var W1 = "\\ud800-\\udfff",
      V1 = "\\u0300-\\u036f",
      k1 = "\\ufe20-\\ufe2f",
      B1 = "\\u20d0-\\u20ff",
      H1 = V1 + k1 + B1,
      j1 = "\\ufe0e\\ufe0f",
      K1 = "\\u200d",
      z1 = RegExp("[" + K1 + W1 + H1 + j1 + "]");
    function Y1(e) {
      return z1.test(e);
    }
    rE.exports = Y1;
  });
  var dE = u((nj, fE) => {
    var oE = "\\ud800-\\udfff",
      Q1 = "\\u0300-\\u036f",
      $1 = "\\ufe20-\\ufe2f",
      Z1 = "\\u20d0-\\u20ff",
      J1 = Q1 + $1 + Z1,
      eF = "\\ufe0e\\ufe0f",
      tF = "[" + oE + "]",
      Ya = "[" + J1 + "]",
      Qa = "\\ud83c[\\udffb-\\udfff]",
      rF = "(?:" + Ya + "|" + Qa + ")",
      aE = "[^" + oE + "]",
      sE = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      uE = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      nF = "\\u200d",
      cE = rF + "?",
      lE = "[" + eF + "]?",
      iF = "(?:" + nF + "(?:" + [aE, sE, uE].join("|") + ")" + lE + cE + ")*",
      oF = lE + cE + iF,
      aF = "(?:" + [aE + Ya + "?", Ya, sE, uE, tF].join("|") + ")",
      iE = RegExp(Qa + "(?=" + Qa + ")|" + aF + oF, "g");
    function sF(e) {
      for (var t = (iE.lastIndex = 0); iE.test(e); ) ++t;
      return t;
    }
    fE.exports = sF;
  });
  var vE = u((ij, pE) => {
    var uF = tE(),
      cF = nE(),
      lF = dE();
    function fF(e) {
      return cF(e) ? lF(e) : uF(e);
    }
    pE.exports = fF;
  });
  var gE = u((oj, hE) => {
    var dF = Qn(),
      pF = $n(),
      vF = Ut(),
      hF = Jg(),
      gF = vE(),
      EF = "[object Map]",
      _F = "[object Set]";
    function yF(e) {
      if (e == null) return 0;
      if (vF(e)) return hF(e) ? gF(e) : e.length;
      var t = pF(e);
      return t == EF || t == _F ? e.size : dF(e).length;
    }
    hE.exports = yF;
  });
  var _E = u((aj, EE) => {
    var mF = "Expected a function";
    function IF(e) {
      if (typeof e != "function") throw new TypeError(mF);
      return function () {
        var t = arguments;
        switch (t.length) {
          case 0:
            return !e.call(this);
          case 1:
            return !e.call(this, t[0]);
          case 2:
            return !e.call(this, t[0], t[1]);
          case 3:
            return !e.call(this, t[0], t[1], t[2]);
        }
        return !e.apply(this, t);
      };
    }
    EE.exports = IF;
  });
  var $a = u((sj, yE) => {
    var TF = wt(),
      OF = (function () {
        try {
          var e = TF(Object, "defineProperty");
          return e({}, "", {}), e;
        } catch {}
      })();
    yE.exports = OF;
  });
  var Za = u((uj, IE) => {
    var mE = $a();
    function bF(e, t, r) {
      t == "__proto__" && mE
        ? mE(e, t, { configurable: !0, enumerable: !0, value: r, writable: !0 })
        : (e[t] = r);
    }
    IE.exports = bF;
  });
  var OE = u((cj, TE) => {
    var SF = Za(),
      AF = Xn(),
      wF = Object.prototype,
      RF = wF.hasOwnProperty;
    function CF(e, t, r) {
      var n = e[t];
      (!(RF.call(e, t) && AF(n, r)) || (r === void 0 && !(t in e))) &&
        SF(e, t, r);
    }
    TE.exports = CF;
  });
  var AE = u((lj, SE) => {
    var NF = OE(),
      xF = Qr(),
      qF = jn(),
      bE = dt(),
      LF = pr();
    function PF(e, t, r, n) {
      if (!bE(e)) return e;
      t = xF(t, e);
      for (var o = -1, i = t.length, a = i - 1, s = e; s != null && ++o < i; ) {
        var c = LF(t[o]),
          p = r;
        if (c === "__proto__" || c === "constructor" || c === "prototype")
          return e;
        if (o != a) {
          var y = s[c];
          (p = n ? n(y, c, s) : void 0),
            p === void 0 && (p = bE(y) ? y : qF(t[o + 1]) ? [] : {});
        }
        NF(s, c, p), (s = s[c]);
      }
      return e;
    }
    SE.exports = PF;
  });
  var RE = u((fj, wE) => {
    var DF = ei(),
      MF = AE(),
      FF = Qr();
    function GF(e, t, r) {
      for (var n = -1, o = t.length, i = {}; ++n < o; ) {
        var a = t[n],
          s = DF(e, a);
        r(s, a) && MF(i, FF(a, e), s);
      }
      return i;
    }
    wE.exports = GF;
  });
  var NE = u((dj, CE) => {
    var UF = Bn(),
      XF = Go(),
      WF = pa(),
      VF = da(),
      kF = Object.getOwnPropertySymbols,
      BF = kF
        ? function (e) {
            for (var t = []; e; ) UF(t, WF(e)), (e = XF(e));
            return t;
          }
        : VF;
    CE.exports = BF;
  });
  var qE = u((pj, xE) => {
    function HF(e) {
      var t = [];
      if (e != null) for (var r in Object(e)) t.push(r);
      return t;
    }
    xE.exports = HF;
  });
  var PE = u((vj, LE) => {
    var jF = dt(),
      KF = Yn(),
      zF = qE(),
      YF = Object.prototype,
      QF = YF.hasOwnProperty;
    function $F(e) {
      if (!jF(e)) return zF(e);
      var t = KF(e),
        r = [];
      for (var n in e)
        (n == "constructor" && (t || !QF.call(e, n))) || r.push(n);
      return r;
    }
    LE.exports = $F;
  });
  var ME = u((hj, DE) => {
    var ZF = ha(),
      JF = PE(),
      e2 = Ut();
    function t2(e) {
      return e2(e) ? ZF(e, !0) : JF(e);
    }
    DE.exports = t2;
  });
  var GE = u((gj, FE) => {
    var r2 = fa(),
      n2 = NE(),
      i2 = ME();
    function o2(e) {
      return r2(e, i2, n2);
    }
    FE.exports = o2;
  });
  var XE = u((Ej, UE) => {
    var a2 = wa(),
      s2 = Rt(),
      u2 = RE(),
      c2 = GE();
    function l2(e, t) {
      if (e == null) return {};
      var r = a2(c2(e), function (n) {
        return [n];
      });
      return (
        (t = s2(t)),
        u2(e, r, function (n, o) {
          return t(n, o[0]);
        })
      );
    }
    UE.exports = l2;
  });
  var VE = u((_j, WE) => {
    var f2 = Rt(),
      d2 = _E(),
      p2 = XE();
    function v2(e, t) {
      return p2(e, d2(f2(t)));
    }
    WE.exports = v2;
  });
  var BE = u((yj, kE) => {
    var h2 = Qn(),
      g2 = $n(),
      E2 = Br(),
      _2 = xe(),
      y2 = Ut(),
      m2 = Hn(),
      I2 = Yn(),
      T2 = zn(),
      O2 = "[object Map]",
      b2 = "[object Set]",
      S2 = Object.prototype,
      A2 = S2.hasOwnProperty;
    function w2(e) {
      if (e == null) return !0;
      if (
        y2(e) &&
        (_2(e) ||
          typeof e == "string" ||
          typeof e.splice == "function" ||
          m2(e) ||
          T2(e) ||
          E2(e))
      )
        return !e.length;
      var t = g2(e);
      if (t == O2 || t == b2) return !e.size;
      if (I2(e)) return !h2(e).length;
      for (var r in e) if (A2.call(e, r)) return !1;
      return !0;
    }
    kE.exports = w2;
  });
  var jE = u((mj, HE) => {
    var R2 = Za(),
      C2 = Ua(),
      N2 = Rt();
    function x2(e, t) {
      var r = {};
      return (
        (t = N2(t, 3)),
        C2(e, function (n, o, i) {
          R2(r, o, t(n, o, i));
        }),
        r
      );
    }
    HE.exports = x2;
  });
  var zE = u((Ij, KE) => {
    function q2(e, t) {
      for (
        var r = -1, n = e == null ? 0 : e.length;
        ++r < n && t(e[r], r, e) !== !1;

      );
      return e;
    }
    KE.exports = q2;
  });
  var QE = u((Tj, YE) => {
    var L2 = ri();
    function P2(e) {
      return typeof e == "function" ? e : L2;
    }
    YE.exports = P2;
  });
  var ZE = u((Oj, $E) => {
    var D2 = zE(),
      M2 = Xa(),
      F2 = QE(),
      G2 = xe();
    function U2(e, t) {
      var r = G2(e) ? D2 : M2;
      return r(e, F2(t));
    }
    $E.exports = U2;
  });
  var e_ = u((bj, JE) => {
    var X2 = tt(),
      W2 = function () {
        return X2.Date.now();
      };
    JE.exports = W2;
  });
  var n_ = u((Sj, r_) => {
    var V2 = dt(),
      Ja = e_(),
      t_ = ni(),
      k2 = "Expected a function",
      B2 = Math.max,
      H2 = Math.min;
    function j2(e, t, r) {
      var n,
        o,
        i,
        a,
        s,
        c,
        p = 0,
        y = !1,
        h = !1,
        m = !0;
      if (typeof e != "function") throw new TypeError(k2);
      (t = t_(t) || 0),
        V2(r) &&
          ((y = !!r.leading),
          (h = "maxWait" in r),
          (i = h ? B2(t_(r.maxWait) || 0, t) : i),
          (m = "trailing" in r ? !!r.trailing : m));
      function I(M) {
        var H = n,
          Q = o;
        return (n = o = void 0), (p = M), (a = e.apply(Q, H)), a;
      }
      function R(M) {
        return (p = M), (s = setTimeout(N, t)), y ? I(M) : a;
      }
      function A(M) {
        var H = M - c,
          Q = M - p,
          $ = t - H;
        return h ? H2($, i - Q) : $;
      }
      function F(M) {
        var H = M - c,
          Q = M - p;
        return c === void 0 || H >= t || H < 0 || (h && Q >= i);
      }
      function N() {
        var M = Ja();
        if (F(M)) return x(M);
        s = setTimeout(N, A(M));
      }
      function x(M) {
        return (s = void 0), m && n ? I(M) : ((n = o = void 0), a);
      }
      function S() {
        s !== void 0 && clearTimeout(s), (p = 0), (n = c = o = s = void 0);
      }
      function P() {
        return s === void 0 ? a : x(Ja());
      }
      function L() {
        var M = Ja(),
          H = F(M);
        if (((n = arguments), (o = this), (c = M), H)) {
          if (s === void 0) return R(c);
          if (h) return clearTimeout(s), (s = setTimeout(N, t)), I(c);
        }
        return s === void 0 && (s = setTimeout(N, t)), a;
      }
      return (L.cancel = S), (L.flush = P), L;
    }
    r_.exports = j2;
  });
  var o_ = u((Aj, i_) => {
    var K2 = n_(),
      z2 = dt(),
      Y2 = "Expected a function";
    function Q2(e, t, r) {
      var n = !0,
        o = !0;
      if (typeof e != "function") throw new TypeError(Y2);
      return (
        z2(r) &&
          ((n = "leading" in r ? !!r.leading : n),
          (o = "trailing" in r ? !!r.trailing : o)),
        K2(e, t, { leading: n, maxWait: t, trailing: o })
      );
    }
    i_.exports = Q2;
  });
  var yi = u((le) => {
    "use strict";
    var $2 = ct().default;
    Object.defineProperty(le, "__esModule", { value: !0 });
    le.viewportWidthChanged =
      le.testFrameRendered =
      le.stopRequested =
      le.sessionStopped =
      le.sessionStarted =
      le.sessionInitialized =
      le.rawDataImported =
      le.previewRequested =
      le.playbackRequested =
      le.parameterChanged =
      le.mediaQueriesDefined =
      le.instanceStarted =
      le.instanceRemoved =
      le.instanceAdded =
      le.eventStateChanged =
      le.eventListenerAdded =
      le.elementStateChanged =
      le.clearRequested =
      le.animationFrameChanged =
      le.actionListPlaybackChanged =
        void 0;
    var a_ = $2(Ur()),
      s_ = ke(),
      Z2 = Ht(),
      {
        IX2_RAW_DATA_IMPORTED: J2,
        IX2_SESSION_INITIALIZED: eG,
        IX2_SESSION_STARTED: tG,
        IX2_SESSION_STOPPED: rG,
        IX2_PREVIEW_REQUESTED: nG,
        IX2_PLAYBACK_REQUESTED: iG,
        IX2_STOP_REQUESTED: oG,
        IX2_CLEAR_REQUESTED: aG,
        IX2_EVENT_LISTENER_ADDED: sG,
        IX2_TEST_FRAME_RENDERED: uG,
        IX2_EVENT_STATE_CHANGED: cG,
        IX2_ANIMATION_FRAME_CHANGED: lG,
        IX2_PARAMETER_CHANGED: fG,
        IX2_INSTANCE_ADDED: dG,
        IX2_INSTANCE_STARTED: pG,
        IX2_INSTANCE_REMOVED: vG,
        IX2_ELEMENT_STATE_CHANGED: hG,
        IX2_ACTION_LIST_PLAYBACK_CHANGED: gG,
        IX2_VIEWPORT_WIDTH_CHANGED: EG,
        IX2_MEDIA_QUERIES_DEFINED: _G,
      } = s_.IX2EngineActionTypes,
      { reifyState: yG } = Z2.IX2VanillaUtils,
      mG = (e) => ({ type: J2, payload: (0, a_.default)({}, yG(e)) });
    le.rawDataImported = mG;
    var IG = ({ hasBoundaryNodes: e, reducedMotion: t }) => ({
      type: eG,
      payload: { hasBoundaryNodes: e, reducedMotion: t },
    });
    le.sessionInitialized = IG;
    var TG = () => ({ type: tG });
    le.sessionStarted = TG;
    var OG = () => ({ type: rG });
    le.sessionStopped = OG;
    var bG = ({ rawData: e, defer: t }) => ({
      type: nG,
      payload: { defer: t, rawData: e },
    });
    le.previewRequested = bG;
    var SG = ({
      actionTypeId: e = s_.ActionTypeConsts.GENERAL_START_ACTION,
      actionListId: t,
      actionItemId: r,
      eventId: n,
      allowEvents: o,
      immediate: i,
      testManual: a,
      verbose: s,
      rawData: c,
    }) => ({
      type: iG,
      payload: {
        actionTypeId: e,
        actionListId: t,
        actionItemId: r,
        testManual: a,
        eventId: n,
        allowEvents: o,
        immediate: i,
        verbose: s,
        rawData: c,
      },
    });
    le.playbackRequested = SG;
    var AG = (e) => ({ type: oG, payload: { actionListId: e } });
    le.stopRequested = AG;
    var wG = () => ({ type: aG });
    le.clearRequested = wG;
    var RG = (e, t) => ({
      type: sG,
      payload: { target: e, listenerParams: t },
    });
    le.eventListenerAdded = RG;
    var CG = (e = 1) => ({ type: uG, payload: { step: e } });
    le.testFrameRendered = CG;
    var NG = (e, t) => ({ type: cG, payload: { stateKey: e, newState: t } });
    le.eventStateChanged = NG;
    var xG = (e, t) => ({ type: lG, payload: { now: e, parameters: t } });
    le.animationFrameChanged = xG;
    var qG = (e, t) => ({ type: fG, payload: { key: e, value: t } });
    le.parameterChanged = qG;
    var LG = (e) => ({ type: dG, payload: (0, a_.default)({}, e) });
    le.instanceAdded = LG;
    var PG = (e, t) => ({ type: pG, payload: { instanceId: e, time: t } });
    le.instanceStarted = PG;
    var DG = (e) => ({ type: vG, payload: { instanceId: e } });
    le.instanceRemoved = DG;
    var MG = (e, t, r, n) => ({
      type: hG,
      payload: { elementId: e, actionTypeId: t, current: r, actionItem: n },
    });
    le.elementStateChanged = MG;
    var FG = ({ actionListId: e, isPlaying: t }) => ({
      type: gG,
      payload: { actionListId: e, isPlaying: t },
    });
    le.actionListPlaybackChanged = FG;
    var GG = ({ width: e, mediaQueries: t }) => ({
      type: EG,
      payload: { width: e, mediaQueries: t },
    });
    le.viewportWidthChanged = GG;
    var UG = () => ({ type: _G });
    le.mediaQueriesDefined = UG;
  });
  var l_ = u((Le) => {
    "use strict";
    Object.defineProperty(Le, "__esModule", { value: !0 });
    Le.elementContains = $G;
    Le.getChildElements = JG;
    Le.getClosestElement = void 0;
    Le.getProperty = jG;
    Le.getQuerySelector = zG;
    Le.getRefType = rU;
    Le.getSiblingElements = eU;
    Le.getStyle = HG;
    Le.getValidDocument = YG;
    Le.isSiblingNode = ZG;
    Le.matchSelector = KG;
    Le.queryDocument = QG;
    Le.setStyle = BG;
    var XG = Ht(),
      WG = ke(),
      { ELEMENT_MATCHES: es } = XG.IX2BrowserSupport,
      {
        IX2_ID_DELIMITER: u_,
        HTML_ELEMENT: VG,
        PLAIN_OBJECT: kG,
        WF_PAGE: c_,
      } = WG.IX2EngineConstants;
    function BG(e, t, r) {
      e.style[t] = r;
    }
    function HG(e, t) {
      return e.style[t];
    }
    function jG(e, t) {
      return e[t];
    }
    function KG(e) {
      return (t) => t[es](e);
    }
    function zG({ id: e, selector: t }) {
      if (e) {
        let r = e;
        if (e.indexOf(u_) !== -1) {
          let n = e.split(u_),
            o = n[0];
          if (((r = n[1]), o !== document.documentElement.getAttribute(c_)))
            return null;
        }
        return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`;
      }
      return t;
    }
    function YG(e) {
      return e == null || e === document.documentElement.getAttribute(c_)
        ? document
        : null;
    }
    function QG(e, t) {
      return Array.prototype.slice.call(
        document.querySelectorAll(t ? e + " " + t : e)
      );
    }
    function $G(e, t) {
      return e.contains(t);
    }
    function ZG(e, t) {
      return e !== t && e.parentNode === t.parentNode;
    }
    function JG(e) {
      let t = [];
      for (let r = 0, { length: n } = e || []; r < n; r++) {
        let { children: o } = e[r],
          { length: i } = o;
        if (i) for (let a = 0; a < i; a++) t.push(o[a]);
      }
      return t;
    }
    function eU(e = []) {
      let t = [],
        r = [];
      for (let n = 0, { length: o } = e; n < o; n++) {
        let { parentNode: i } = e[n];
        if (!i || !i.children || !i.children.length || r.indexOf(i) !== -1)
          continue;
        r.push(i);
        let a = i.firstElementChild;
        for (; a != null; )
          e.indexOf(a) === -1 && t.push(a), (a = a.nextElementSibling);
      }
      return t;
    }
    var tU = Element.prototype.closest
      ? (e, t) => (document.documentElement.contains(e) ? e.closest(t) : null)
      : (e, t) => {
          if (!document.documentElement.contains(e)) return null;
          let r = e;
          do {
            if (r[es] && r[es](t)) return r;
            r = r.parentNode;
          } while (r != null);
          return null;
        };
    Le.getClosestElement = tU;
    function rU(e) {
      return e != null && typeof e == "object"
        ? e instanceof Element
          ? VG
          : kG
        : null;
    }
  });
  var ts = u((Cj, d_) => {
    var nU = dt(),
      f_ = Object.create,
      iU = (function () {
        function e() {}
        return function (t) {
          if (!nU(t)) return {};
          if (f_) return f_(t);
          e.prototype = t;
          var r = new e();
          return (e.prototype = void 0), r;
        };
      })();
    d_.exports = iU;
  });
  var mi = u((Nj, p_) => {
    function oU() {}
    p_.exports = oU;
  });
  var Ti = u((xj, v_) => {
    var aU = ts(),
      sU = mi();
    function Ii(e, t) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__chain__ = !!t),
        (this.__index__ = 0),
        (this.__values__ = void 0);
    }
    Ii.prototype = aU(sU.prototype);
    Ii.prototype.constructor = Ii;
    v_.exports = Ii;
  });
  var __ = u((qj, E_) => {
    var h_ = tr(),
      uU = Br(),
      cU = xe(),
      g_ = h_ ? h_.isConcatSpreadable : void 0;
    function lU(e) {
      return cU(e) || uU(e) || !!(g_ && e && e[g_]);
    }
    E_.exports = lU;
  });
  var I_ = u((Lj, m_) => {
    var fU = Bn(),
      dU = __();
    function y_(e, t, r, n, o) {
      var i = -1,
        a = e.length;
      for (r || (r = dU), o || (o = []); ++i < a; ) {
        var s = e[i];
        t > 0 && r(s)
          ? t > 1
            ? y_(s, t - 1, r, n, o)
            : fU(o, s)
          : n || (o[o.length] = s);
      }
      return o;
    }
    m_.exports = y_;
  });
  var O_ = u((Pj, T_) => {
    var pU = I_();
    function vU(e) {
      var t = e == null ? 0 : e.length;
      return t ? pU(e, 1) : [];
    }
    T_.exports = vU;
  });
  var S_ = u((Dj, b_) => {
    function hU(e, t, r) {
      switch (r.length) {
        case 0:
          return e.call(t);
        case 1:
          return e.call(t, r[0]);
        case 2:
          return e.call(t, r[0], r[1]);
        case 3:
          return e.call(t, r[0], r[1], r[2]);
      }
      return e.apply(t, r);
    }
    b_.exports = hU;
  });
  var R_ = u((Mj, w_) => {
    var gU = S_(),
      A_ = Math.max;
    function EU(e, t, r) {
      return (
        (t = A_(t === void 0 ? e.length - 1 : t, 0)),
        function () {
          for (
            var n = arguments, o = -1, i = A_(n.length - t, 0), a = Array(i);
            ++o < i;

          )
            a[o] = n[t + o];
          o = -1;
          for (var s = Array(t + 1); ++o < t; ) s[o] = n[o];
          return (s[t] = r(a)), gU(e, this, s);
        }
      );
    }
    w_.exports = EU;
  });
  var N_ = u((Fj, C_) => {
    function _U(e) {
      return function () {
        return e;
      };
    }
    C_.exports = _U;
  });
  var L_ = u((Gj, q_) => {
    var yU = N_(),
      x_ = $a(),
      mU = ri(),
      IU = x_
        ? function (e, t) {
            return x_(e, "toString", {
              configurable: !0,
              enumerable: !1,
              value: yU(t),
              writable: !0,
            });
          }
        : mU;
    q_.exports = IU;
  });
  var D_ = u((Uj, P_) => {
    var TU = 800,
      OU = 16,
      bU = Date.now;
    function SU(e) {
      var t = 0,
        r = 0;
      return function () {
        var n = bU(),
          o = OU - (n - r);
        if (((r = n), o > 0)) {
          if (++t >= TU) return arguments[0];
        } else t = 0;
        return e.apply(void 0, arguments);
      };
    }
    P_.exports = SU;
  });
  var F_ = u((Xj, M_) => {
    var AU = L_(),
      wU = D_(),
      RU = wU(AU);
    M_.exports = RU;
  });
  var U_ = u((Wj, G_) => {
    var CU = O_(),
      NU = R_(),
      xU = F_();
    function qU(e) {
      return xU(NU(e, void 0, CU), e + "");
    }
    G_.exports = qU;
  });
  var V_ = u((Vj, W_) => {
    var X_ = ga(),
      LU = X_ && new X_();
    W_.exports = LU;
  });
  var B_ = u((kj, k_) => {
    function PU() {}
    k_.exports = PU;
  });
  var rs = u((Bj, j_) => {
    var H_ = V_(),
      DU = B_(),
      MU = H_
        ? function (e) {
            return H_.get(e);
          }
        : DU;
    j_.exports = MU;
  });
  var z_ = u((Hj, K_) => {
    var FU = {};
    K_.exports = FU;
  });
  var ns = u((jj, Q_) => {
    var Y_ = z_(),
      GU = Object.prototype,
      UU = GU.hasOwnProperty;
    function XU(e) {
      for (
        var t = e.name + "", r = Y_[t], n = UU.call(Y_, t) ? r.length : 0;
        n--;

      ) {
        var o = r[n],
          i = o.func;
        if (i == null || i == e) return o.name;
      }
      return t;
    }
    Q_.exports = XU;
  });
  var bi = u((Kj, $_) => {
    var WU = ts(),
      VU = mi(),
      kU = 4294967295;
    function Oi(e) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__dir__ = 1),
        (this.__filtered__ = !1),
        (this.__iteratees__ = []),
        (this.__takeCount__ = kU),
        (this.__views__ = []);
    }
    Oi.prototype = WU(VU.prototype);
    Oi.prototype.constructor = Oi;
    $_.exports = Oi;
  });
  var J_ = u((zj, Z_) => {
    function BU(e, t) {
      var r = -1,
        n = e.length;
      for (t || (t = Array(n)); ++r < n; ) t[r] = e[r];
      return t;
    }
    Z_.exports = BU;
  });
  var ty = u((Yj, ey) => {
    var HU = bi(),
      jU = Ti(),
      KU = J_();
    function zU(e) {
      if (e instanceof HU) return e.clone();
      var t = new jU(e.__wrapped__, e.__chain__);
      return (
        (t.__actions__ = KU(e.__actions__)),
        (t.__index__ = e.__index__),
        (t.__values__ = e.__values__),
        t
      );
    }
    ey.exports = zU;
  });
  var iy = u((Qj, ny) => {
    var YU = bi(),
      ry = Ti(),
      QU = mi(),
      $U = xe(),
      ZU = yt(),
      JU = ty(),
      eX = Object.prototype,
      tX = eX.hasOwnProperty;
    function Si(e) {
      if (ZU(e) && !$U(e) && !(e instanceof YU)) {
        if (e instanceof ry) return e;
        if (tX.call(e, "__wrapped__")) return JU(e);
      }
      return new ry(e);
    }
    Si.prototype = QU.prototype;
    Si.prototype.constructor = Si;
    ny.exports = Si;
  });
  var ay = u(($j, oy) => {
    var rX = bi(),
      nX = rs(),
      iX = ns(),
      oX = iy();
    function aX(e) {
      var t = iX(e),
        r = oX[t];
      if (typeof r != "function" || !(t in rX.prototype)) return !1;
      if (e === r) return !0;
      var n = nX(r);
      return !!n && e === n[0];
    }
    oy.exports = aX;
  });
  var ly = u((Zj, cy) => {
    var sy = Ti(),
      sX = U_(),
      uX = rs(),
      is = ns(),
      cX = xe(),
      uy = ay(),
      lX = "Expected a function",
      fX = 8,
      dX = 32,
      pX = 128,
      vX = 256;
    function hX(e) {
      return sX(function (t) {
        var r = t.length,
          n = r,
          o = sy.prototype.thru;
        for (e && t.reverse(); n--; ) {
          var i = t[n];
          if (typeof i != "function") throw new TypeError(lX);
          if (o && !a && is(i) == "wrapper") var a = new sy([], !0);
        }
        for (n = a ? n : r; ++n < r; ) {
          i = t[n];
          var s = is(i),
            c = s == "wrapper" ? uX(i) : void 0;
          c &&
          uy(c[0]) &&
          c[1] == (pX | fX | dX | vX) &&
          !c[4].length &&
          c[9] == 1
            ? (a = a[is(c[0])].apply(a, c[3]))
            : (a = i.length == 1 && uy(i) ? a[s]() : a.thru(i));
        }
        return function () {
          var p = arguments,
            y = p[0];
          if (a && p.length == 1 && cX(y)) return a.plant(y).value();
          for (var h = 0, m = r ? t[h].apply(this, p) : y; ++h < r; )
            m = t[h].call(this, m);
          return m;
        };
      });
    }
    cy.exports = hX;
  });
  var dy = u((Jj, fy) => {
    var gX = ly(),
      EX = gX();
    fy.exports = EX;
  });
  var vy = u((eK, py) => {
    function _X(e, t, r) {
      return (
        e === e &&
          (r !== void 0 && (e = e <= r ? e : r),
          t !== void 0 && (e = e >= t ? e : t)),
        e
      );
    }
    py.exports = _X;
  });
  var gy = u((tK, hy) => {
    var yX = vy(),
      os = ni();
    function mX(e, t, r) {
      return (
        r === void 0 && ((r = t), (t = void 0)),
        r !== void 0 && ((r = os(r)), (r = r === r ? r : 0)),
        t !== void 0 && ((t = os(t)), (t = t === t ? t : 0)),
        yX(os(e), t, r)
      );
    }
    hy.exports = mX;
  });
  var Py = u((Ni) => {
    "use strict";
    var Ci = ct().default;
    Object.defineProperty(Ni, "__esModule", { value: !0 });
    Ni.default = void 0;
    var Ke = Ci(Ur()),
      IX = Ci(dy()),
      TX = Ci(ti()),
      OX = Ci(gy()),
      jt = ke(),
      as = ls(),
      Ai = yi(),
      bX = Ht(),
      {
        MOUSE_CLICK: SX,
        MOUSE_SECOND_CLICK: AX,
        MOUSE_DOWN: wX,
        MOUSE_UP: RX,
        MOUSE_OVER: CX,
        MOUSE_OUT: NX,
        DROPDOWN_CLOSE: xX,
        DROPDOWN_OPEN: qX,
        SLIDER_ACTIVE: LX,
        SLIDER_INACTIVE: PX,
        TAB_ACTIVE: DX,
        TAB_INACTIVE: MX,
        NAVBAR_CLOSE: FX,
        NAVBAR_OPEN: GX,
        MOUSE_MOVE: UX,
        PAGE_SCROLL_DOWN: Sy,
        SCROLL_INTO_VIEW: Ay,
        SCROLL_OUT_OF_VIEW: XX,
        PAGE_SCROLL_UP: WX,
        SCROLLING_IN_VIEW: VX,
        PAGE_FINISH: wy,
        ECOMMERCE_CART_CLOSE: kX,
        ECOMMERCE_CART_OPEN: BX,
        PAGE_START: Ry,
        PAGE_SCROLL: HX,
      } = jt.EventTypeConsts,
      ss = "COMPONENT_ACTIVE",
      Cy = "COMPONENT_INACTIVE",
      { COLON_DELIMITER: Ey } = jt.IX2EngineConstants,
      { getNamespacedParameterId: _y } = bX.IX2VanillaUtils,
      Ny = (e) => (t) => typeof t == "object" && e(t) ? !0 : t,
      un = Ny(({ element: e, nativeEvent: t }) => e === t.target),
      jX = Ny(({ element: e, nativeEvent: t }) => e.contains(t.target)),
      gt = (0, IX.default)([un, jX]),
      xy = (e, t) => {
        if (t) {
          let { ixData: r } = e.getState(),
            { events: n } = r,
            o = n[t];
          if (o && !zX[o.eventTypeId]) return o;
        }
        return null;
      },
      KX = ({ store: e, event: t }) => {
        let { action: r } = t,
          { autoStopEventId: n } = r.config;
        return !!xy(e, n);
      },
      He = ({ store: e, event: t, element: r, eventStateKey: n }, o) => {
        let { action: i, id: a } = t,
          { actionListId: s, autoStopEventId: c } = i.config,
          p = xy(e, c);
        return (
          p &&
            (0, as.stopActionGroup)({
              store: e,
              eventId: c,
              eventTarget: r,
              eventStateKey: c + Ey + n.split(Ey)[1],
              actionListId: (0, TX.default)(p, "action.config.actionListId"),
            }),
          (0, as.stopActionGroup)({
            store: e,
            eventId: a,
            eventTarget: r,
            eventStateKey: n,
            actionListId: s,
          }),
          (0, as.startActionGroup)({
            store: e,
            eventId: a,
            eventTarget: r,
            eventStateKey: n,
            actionListId: s,
          }),
          o
        );
      },
      rt = (e, t) => (r, n) => e(r, n) === !0 ? t(r, n) : n,
      cn = { handler: rt(gt, He) },
      qy = (0, Ke.default)({}, cn, { types: [ss, Cy].join(" ") }),
      us = [
        { target: window, types: "resize orientationchange", throttle: !0 },
        {
          target: document,
          types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
          throttle: !0,
        },
      ],
      yy = "mouseover mouseout",
      cs = { types: us },
      zX = { PAGE_START: Ry, PAGE_FINISH: wy },
      sn = (() => {
        let e = window.pageXOffset !== void 0,
          r =
            document.compatMode === "CSS1Compat"
              ? document.documentElement
              : document.body;
        return () => ({
          scrollLeft: e ? window.pageXOffset : r.scrollLeft,
          scrollTop: e ? window.pageYOffset : r.scrollTop,
          stiffScrollTop: (0, OX.default)(
            e ? window.pageYOffset : r.scrollTop,
            0,
            r.scrollHeight - window.innerHeight
          ),
          scrollWidth: r.scrollWidth,
          scrollHeight: r.scrollHeight,
          clientWidth: r.clientWidth,
          clientHeight: r.clientHeight,
          innerWidth: window.innerWidth,
          innerHeight: window.innerHeight,
        });
      })(),
      YX = (e, t) =>
        !(
          e.left > t.right ||
          e.right < t.left ||
          e.top > t.bottom ||
          e.bottom < t.top
        ),
      QX = ({ element: e, nativeEvent: t }) => {
        let { type: r, target: n, relatedTarget: o } = t,
          i = e.contains(n);
        if (r === "mouseover" && i) return !0;
        let a = e.contains(o);
        return !!(r === "mouseout" && i && a);
      },
      $X = (e) => {
        let {
            element: t,
            event: { config: r },
          } = e,
          { clientWidth: n, clientHeight: o } = sn(),
          i = r.scrollOffsetValue,
          c = r.scrollOffsetUnit === "PX" ? i : (o * (i || 0)) / 100;
        return YX(t.getBoundingClientRect(), {
          left: 0,
          top: c,
          right: n,
          bottom: o - c,
        });
      },
      Ly = (e) => (t, r) => {
        let { type: n } = t.nativeEvent,
          o = [ss, Cy].indexOf(n) !== -1 ? n === ss : r.isActive,
          i = (0, Ke.default)({}, r, { isActive: o });
        return ((!r || i.isActive !== r.isActive) && e(t, i)) || i;
      },
      my = (e) => (t, r) => {
        let n = { elementHovered: QX(t) };
        return (
          ((r ? n.elementHovered !== r.elementHovered : n.elementHovered) &&
            e(t, n)) ||
          n
        );
      },
      ZX = (e) => (t, r) => {
        let n = (0, Ke.default)({}, r, { elementVisible: $X(t) });
        return (
          ((r ? n.elementVisible !== r.elementVisible : n.elementVisible) &&
            e(t, n)) ||
          n
        );
      },
      Iy =
        (e) =>
        (t, r = {}) => {
          let { stiffScrollTop: n, scrollHeight: o, innerHeight: i } = sn(),
            {
              event: { config: a, eventTypeId: s },
            } = t,
            { scrollOffsetValue: c, scrollOffsetUnit: p } = a,
            y = p === "PX",
            h = o - i,
            m = Number((n / h).toFixed(2));
          if (r && r.percentTop === m) return r;
          let I = (y ? c : (i * (c || 0)) / 100) / h,
            R,
            A,
            F = 0;
          r &&
            ((R = m > r.percentTop),
            (A = r.scrollingDown !== R),
            (F = A ? m : r.anchorTop));
          let N = s === Sy ? m >= F + I : m <= F - I,
            x = (0, Ke.default)({}, r, {
              percentTop: m,
              inBounds: N,
              anchorTop: F,
              scrollingDown: R,
            });
          return (r && N && (A || x.inBounds !== r.inBounds) && e(t, x)) || x;
        },
      JX = (e, t) =>
        e.left > t.left &&
        e.left < t.right &&
        e.top > t.top &&
        e.top < t.bottom,
      eW = (e) => (t, r) => {
        let n = { finished: document.readyState === "complete" };
        return n.finished && !(r && r.finshed) && e(t), n;
      },
      tW = (e) => (t, r) => {
        let n = { started: !0 };
        return r || e(t), n;
      },
      Ty =
        (e) =>
        (t, r = { clickCount: 0 }) => {
          let n = { clickCount: (r.clickCount % 2) + 1 };
          return (n.clickCount !== r.clickCount && e(t, n)) || n;
        },
      wi = (e = !0) =>
        (0, Ke.default)({}, qy, {
          handler: rt(
            e ? gt : un,
            Ly((t, r) => (r.isActive ? cn.handler(t, r) : r))
          ),
        }),
      Ri = (e = !0) =>
        (0, Ke.default)({}, qy, {
          handler: rt(
            e ? gt : un,
            Ly((t, r) => (r.isActive ? r : cn.handler(t, r)))
          ),
        }),
      Oy = (0, Ke.default)({}, cs, {
        handler: ZX((e, t) => {
          let { elementVisible: r } = t,
            { event: n, store: o } = e,
            { ixData: i } = o.getState(),
            { events: a } = i;
          return !a[n.action.config.autoStopEventId] && t.triggered
            ? t
            : (n.eventTypeId === Ay) === r
            ? (He(e), (0, Ke.default)({}, t, { triggered: !0 }))
            : t;
        }),
      }),
      by = 0.05,
      rW = {
        [LX]: wi(),
        [PX]: Ri(),
        [qX]: wi(),
        [xX]: Ri(),
        [GX]: wi(!1),
        [FX]: Ri(!1),
        [DX]: wi(),
        [MX]: Ri(),
        [BX]: { types: "ecommerce-cart-open", handler: rt(gt, He) },
        [kX]: { types: "ecommerce-cart-close", handler: rt(gt, He) },
        [SX]: {
          types: "click",
          handler: rt(
            gt,
            Ty((e, { clickCount: t }) => {
              KX(e) ? t === 1 && He(e) : He(e);
            })
          ),
        },
        [AX]: {
          types: "click",
          handler: rt(
            gt,
            Ty((e, { clickCount: t }) => {
              t === 2 && He(e);
            })
          ),
        },
        [wX]: (0, Ke.default)({}, cn, { types: "mousedown" }),
        [RX]: (0, Ke.default)({}, cn, { types: "mouseup" }),
        [CX]: {
          types: yy,
          handler: rt(
            gt,
            my((e, t) => {
              t.elementHovered && He(e);
            })
          ),
        },
        [NX]: {
          types: yy,
          handler: rt(
            gt,
            my((e, t) => {
              t.elementHovered || He(e);
            })
          ),
        },
        [UX]: {
          types: "mousemove mouseout scroll",
          handler: (
            {
              store: e,
              element: t,
              eventConfig: r,
              nativeEvent: n,
              eventStateKey: o,
            },
            i = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 }
          ) => {
            let {
                basedOn: a,
                selectedAxis: s,
                continuousParameterGroupId: c,
                reverse: p,
                restingState: y = 0,
              } = r,
              {
                clientX: h = i.clientX,
                clientY: m = i.clientY,
                pageX: I = i.pageX,
                pageY: R = i.pageY,
              } = n,
              A = s === "X_AXIS",
              F = n.type === "mouseout",
              N = y / 100,
              x = c,
              S = !1;
            switch (a) {
              case jt.EventBasedOn.VIEWPORT: {
                N = A
                  ? Math.min(h, window.innerWidth) / window.innerWidth
                  : Math.min(m, window.innerHeight) / window.innerHeight;
                break;
              }
              case jt.EventBasedOn.PAGE: {
                let {
                  scrollLeft: P,
                  scrollTop: L,
                  scrollWidth: M,
                  scrollHeight: H,
                } = sn();
                N = A ? Math.min(P + I, M) / M : Math.min(L + R, H) / H;
                break;
              }
              case jt.EventBasedOn.ELEMENT:
              default: {
                x = _y(o, c);
                let P = n.type.indexOf("mouse") === 0;
                if (P && gt({ element: t, nativeEvent: n }) !== !0) break;
                let L = t.getBoundingClientRect(),
                  { left: M, top: H, width: Q, height: $ } = L;
                if (!P && !JX({ left: h, top: m }, L)) break;
                (S = !0), (N = A ? (h - M) / Q : (m - H) / $);
                break;
              }
            }
            return (
              F && (N > 1 - by || N < by) && (N = Math.round(N)),
              (a !== jt.EventBasedOn.ELEMENT || S || S !== i.elementHovered) &&
                ((N = p ? 1 - N : N),
                e.dispatch((0, Ai.parameterChanged)(x, N))),
              { elementHovered: S, clientX: h, clientY: m, pageX: I, pageY: R }
            );
          },
        },
        [HX]: {
          types: us,
          handler: ({ store: e, eventConfig: t }) => {
            let { continuousParameterGroupId: r, reverse: n } = t,
              { scrollTop: o, scrollHeight: i, clientHeight: a } = sn(),
              s = o / (i - a);
            (s = n ? 1 - s : s), e.dispatch((0, Ai.parameterChanged)(r, s));
          },
        },
        [VX]: {
          types: us,
          handler: (
            { element: e, store: t, eventConfig: r, eventStateKey: n },
            o = { scrollPercent: 0 }
          ) => {
            let {
                scrollLeft: i,
                scrollTop: a,
                scrollWidth: s,
                scrollHeight: c,
                clientHeight: p,
              } = sn(),
              {
                basedOn: y,
                selectedAxis: h,
                continuousParameterGroupId: m,
                startsEntering: I,
                startsExiting: R,
                addEndOffset: A,
                addStartOffset: F,
                addOffsetValue: N = 0,
                endOffsetValue: x = 0,
              } = r,
              S = h === "X_AXIS";
            if (y === jt.EventBasedOn.VIEWPORT) {
              let P = S ? i / s : a / c;
              return (
                P !== o.scrollPercent &&
                  t.dispatch((0, Ai.parameterChanged)(m, P)),
                { scrollPercent: P }
              );
            } else {
              let P = _y(n, m),
                L = e.getBoundingClientRect(),
                M = (F ? N : 0) / 100,
                H = (A ? x : 0) / 100;
              (M = I ? M : 1 - M), (H = R ? H : 1 - H);
              let Q = L.top + Math.min(L.height * M, p),
                ae = L.top + L.height * H - Q,
                te = Math.min(p + ae, c),
                O = Math.min(Math.max(0, p - Q), te) / te;
              return (
                O !== o.scrollPercent &&
                  t.dispatch((0, Ai.parameterChanged)(P, O)),
                { scrollPercent: O }
              );
            }
          },
        },
        [Ay]: Oy,
        [XX]: Oy,
        [Sy]: (0, Ke.default)({}, cs, {
          handler: Iy((e, t) => {
            t.scrollingDown && He(e);
          }),
        }),
        [WX]: (0, Ke.default)({}, cs, {
          handler: Iy((e, t) => {
            t.scrollingDown || He(e);
          }),
        }),
        [wy]: {
          types: "readystatechange IX2_PAGE_UPDATE",
          handler: rt(un, eW(He)),
        },
        [Ry]: {
          types: "readystatechange IX2_PAGE_UPDATE",
          handler: rt(un, tW(He)),
        },
      };
    Ni.default = rW;
  });
  var ls = u((qt) => {
    "use strict";
    var it = ct().default,
      nW = $t().default;
    Object.defineProperty(qt, "__esModule", { value: !0 });
    qt.observeRequests = qW;
    qt.startActionGroup = Es;
    qt.startEngine = Pi;
    qt.stopActionGroup = gs;
    qt.stopAllActionGroups = ky;
    qt.stopEngine = Di;
    var iW = it(Ur()),
      oW = it($g()),
      aW = it(qa()),
      xt = it(ti()),
      sW = it(gE()),
      uW = it(VE()),
      cW = it(BE()),
      lW = it(jE()),
      ln = it(ZE()),
      fW = it(o_()),
      nt = ke(),
      Fy = Ht(),
      be = yi(),
      Re = nW(l_()),
      dW = it(Py()),
      pW = ["store", "computedStyle"],
      vW = Object.keys(nt.QuickEffectIds),
      fs = (e) => vW.includes(e),
      {
        COLON_DELIMITER: ds,
        BOUNDARY_SELECTOR: xi,
        HTML_ELEMENT: Gy,
        RENDER_GENERAL: hW,
        W_MOD_IX: Dy,
      } = nt.IX2EngineConstants,
      {
        getAffectedElements: qi,
        getElementId: gW,
        getDestinationValues: ps,
        observeStore: Kt,
        getInstanceId: EW,
        renderHTMLElement: _W,
        clearAllStyles: Uy,
        getMaxDurationItemIndex: yW,
        getComputedStyle: mW,
        getInstanceOrigin: IW,
        reduceListToGroup: TW,
        shouldNamespaceEventParameter: OW,
        getNamespacedParameterId: bW,
        shouldAllowMediaQuery: Li,
        cleanupHTMLElement: SW,
        stringifyTarget: AW,
        mediaQueriesEqual: wW,
        shallowEqual: RW,
      } = Fy.IX2VanillaUtils,
      {
        isPluginType: vs,
        createPluginInstance: hs,
        getPluginDuration: CW,
      } = Fy.IX2VanillaPlugins,
      My = navigator.userAgent,
      NW = My.match(/iPad/i) || My.match(/iPhone/),
      xW = 12;
    function qW(e) {
      Kt({ store: e, select: ({ ixRequest: t }) => t.preview, onChange: DW }),
        Kt({
          store: e,
          select: ({ ixRequest: t }) => t.playback,
          onChange: MW,
        }),
        Kt({ store: e, select: ({ ixRequest: t }) => t.stop, onChange: FW }),
        Kt({ store: e, select: ({ ixRequest: t }) => t.clear, onChange: GW });
    }
    function LW(e) {
      Kt({
        store: e,
        select: ({ ixSession: t }) => t.mediaQueryKey,
        onChange: () => {
          Di(e),
            Uy({ store: e, elementApi: Re }),
            Pi({ store: e, allowEvents: !0 }),
            Xy();
        },
      });
    }
    function PW(e, t) {
      let r = Kt({
        store: e,
        select: ({ ixSession: n }) => n.tick,
        onChange: (n) => {
          t(n), r();
        },
      });
    }
    function DW({ rawData: e, defer: t }, r) {
      let n = () => {
        Pi({ store: r, rawData: e, allowEvents: !0 }), Xy();
      };
      t ? setTimeout(n, 0) : n();
    }
    function Xy() {
      document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
    }
    function MW(e, t) {
      let {
          actionTypeId: r,
          actionListId: n,
          actionItemId: o,
          eventId: i,
          allowEvents: a,
          immediate: s,
          testManual: c,
          verbose: p = !0,
        } = e,
        { rawData: y } = e;
      if (n && o && y && s) {
        let h = y.actionLists[n];
        h && (y = TW({ actionList: h, actionItemId: o, rawData: y }));
      }
      if (
        (Pi({ store: t, rawData: y, allowEvents: a, testManual: c }),
        (n && r === nt.ActionTypeConsts.GENERAL_START_ACTION) || fs(r))
      ) {
        gs({ store: t, actionListId: n }),
          Vy({ store: t, actionListId: n, eventId: i });
        let h = Es({
          store: t,
          eventId: i,
          actionListId: n,
          immediate: s,
          verbose: p,
        });
        p &&
          h &&
          t.dispatch(
            (0, be.actionListPlaybackChanged)({
              actionListId: n,
              isPlaying: !s,
            })
          );
      }
    }
    function FW({ actionListId: e }, t) {
      e ? gs({ store: t, actionListId: e }) : ky({ store: t }), Di(t);
    }
    function GW(e, t) {
      Di(t), Uy({ store: t, elementApi: Re });
    }
    function Pi({ store: e, rawData: t, allowEvents: r, testManual: n }) {
      let { ixSession: o } = e.getState();
      t && e.dispatch((0, be.rawDataImported)(t)),
        o.active ||
          (e.dispatch(
            (0, be.sessionInitialized)({
              hasBoundaryNodes: !!document.querySelector(xi),
              reducedMotion:
                document.body.hasAttribute("data-wf-ix-vacation") &&
                window.matchMedia("(prefers-reduced-motion)").matches,
            })
          ),
          r &&
            (BW(e),
            UW(),
            e.getState().ixSession.hasDefinedMediaQueries && LW(e)),
          e.dispatch((0, be.sessionStarted)()),
          XW(e, n));
    }
    function UW() {
      let { documentElement: e } = document;
      e.className.indexOf(Dy) === -1 && (e.className += ` ${Dy}`);
    }
    function XW(e, t) {
      let r = (n) => {
        let { ixSession: o, ixParameters: i } = e.getState();
        o.active &&
          (e.dispatch((0, be.animationFrameChanged)(n, i)),
          t ? PW(e, r) : requestAnimationFrame(r));
      };
      r(window.performance.now());
    }
    function Di(e) {
      let { ixSession: t } = e.getState();
      if (t.active) {
        let { eventListeners: r } = t;
        r.forEach(WW), e.dispatch((0, be.sessionStopped)());
      }
    }
    function WW({ target: e, listenerParams: t }) {
      e.removeEventListener.apply(e, t);
    }
    function VW({
      store: e,
      eventStateKey: t,
      eventTarget: r,
      eventId: n,
      eventConfig: o,
      actionListId: i,
      parameterGroup: a,
      smoothing: s,
      restingValue: c,
    }) {
      let { ixData: p, ixSession: y } = e.getState(),
        { events: h } = p,
        m = h[n],
        { eventTypeId: I } = m,
        R = {},
        A = {},
        F = [],
        { continuousActionGroups: N } = a,
        { id: x } = a;
      OW(I, o) && (x = bW(t, x));
      let S = y.hasBoundaryNodes && r ? Re.getClosestElement(r, xi) : null;
      N.forEach((P) => {
        let { keyframe: L, actionItems: M } = P;
        M.forEach((H) => {
          let { actionTypeId: Q } = H,
            { target: $ } = H.config;
          if (!$) return;
          let ae = $.boundaryMode ? S : null,
            te = AW($) + ds + Q;
          if (((A[te] = kW(A[te], L, H)), !R[te])) {
            R[te] = !0;
            let { config: U } = H;
            qi({
              config: U,
              event: m,
              eventTarget: r,
              elementRoot: ae,
              elementApi: Re,
            }).forEach((O) => {
              F.push({ element: O, key: te });
            });
          }
        });
      }),
        F.forEach(({ element: P, key: L }) => {
          let M = A[L],
            H = (0, xt.default)(M, "[0].actionItems[0]", {}),
            { actionTypeId: Q } = H,
            $ = vs(Q) ? hs(Q)(P, H) : null,
            ae = ps({ element: P, actionItem: H, elementApi: Re }, $);
          _s({
            store: e,
            element: P,
            eventId: n,
            actionListId: i,
            actionItem: H,
            destination: ae,
            continuous: !0,
            parameterId: x,
            actionGroups: M,
            smoothing: s,
            restingValue: c,
            pluginInstance: $,
          });
        });
    }
    function kW(e = [], t, r) {
      let n = [...e],
        o;
      return (
        n.some((i, a) => (i.keyframe === t ? ((o = a), !0) : !1)),
        o == null && ((o = n.length), n.push({ keyframe: t, actionItems: [] })),
        n[o].actionItems.push(r),
        n
      );
    }
    function BW(e) {
      let { ixData: t } = e.getState(),
        { eventTypeMap: r } = t;
      Wy(e),
        (0, ln.default)(r, (o, i) => {
          let a = dW.default[i];
          if (!a) {
            console.warn(`IX2 event type not configured: ${i}`);
            return;
          }
          QW({ logic: a, store: e, events: o });
        });
      let { ixSession: n } = e.getState();
      n.eventListeners.length && jW(e);
    }
    var HW = ["resize", "orientationchange"];
    function jW(e) {
      let t = () => {
        Wy(e);
      };
      HW.forEach((r) => {
        window.addEventListener(r, t),
          e.dispatch((0, be.eventListenerAdded)(window, [r, t]));
      }),
        t();
    }
    function Wy(e) {
      let { ixSession: t, ixData: r } = e.getState(),
        n = window.innerWidth;
      if (n !== t.viewportWidth) {
        let { mediaQueries: o } = r;
        e.dispatch((0, be.viewportWidthChanged)({ width: n, mediaQueries: o }));
      }
    }
    var KW = (e, t) => (0, uW.default)((0, lW.default)(e, t), cW.default),
      zW = (e, t) => {
        (0, ln.default)(e, (r, n) => {
          r.forEach((o, i) => {
            let a = n + ds + i;
            t(o, n, a);
          });
        });
      },
      YW = (e) => {
        let t = { target: e.target, targets: e.targets };
        return qi({ config: t, elementApi: Re });
      };
    function QW({ logic: e, store: t, events: r }) {
      $W(r);
      let { types: n, handler: o } = e,
        { ixData: i } = t.getState(),
        { actionLists: a } = i,
        s = KW(r, YW);
      if (!(0, sW.default)(s)) return;
      (0, ln.default)(s, (h, m) => {
        let I = r[m],
          { action: R, id: A, mediaQueries: F = i.mediaQueryKeys } = I,
          { actionListId: N } = R.config;
        wW(F, i.mediaQueryKeys) || t.dispatch((0, be.mediaQueriesDefined)()),
          R.actionTypeId === nt.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION &&
            (Array.isArray(I.config) ? I.config : [I.config]).forEach((S) => {
              let { continuousParameterGroupId: P } = S,
                L = (0, xt.default)(a, `${N}.continuousParameterGroups`, []),
                M = (0, aW.default)(L, ({ id: $ }) => $ === P),
                H = (S.smoothing || 0) / 100,
                Q = (S.restingState || 0) / 100;
              M &&
                h.forEach(($, ae) => {
                  let te = A + ds + ae;
                  VW({
                    store: t,
                    eventStateKey: te,
                    eventTarget: $,
                    eventId: A,
                    eventConfig: S,
                    actionListId: N,
                    parameterGroup: M,
                    smoothing: H,
                    restingValue: Q,
                  });
                });
            }),
          (R.actionTypeId === nt.ActionTypeConsts.GENERAL_START_ACTION ||
            fs(R.actionTypeId)) &&
            Vy({ store: t, actionListId: N, eventId: A });
      });
      let c = (h) => {
          let { ixSession: m } = t.getState();
          zW(s, (I, R, A) => {
            let F = r[R],
              N = m.eventState[A],
              { action: x, mediaQueries: S = i.mediaQueryKeys } = F;
            if (!Li(S, m.mediaQueryKey)) return;
            let P = (L = {}) => {
              let M = o(
                {
                  store: t,
                  element: I,
                  event: F,
                  eventConfig: L,
                  nativeEvent: h,
                  eventStateKey: A,
                },
                N
              );
              RW(M, N) || t.dispatch((0, be.eventStateChanged)(A, M));
            };
            x.actionTypeId === nt.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION
              ? (Array.isArray(F.config) ? F.config : [F.config]).forEach(P)
              : P();
          });
        },
        p = (0, fW.default)(c, xW),
        y = ({ target: h = document, types: m, throttle: I }) => {
          m.split(" ")
            .filter(Boolean)
            .forEach((R) => {
              let A = I ? p : c;
              h.addEventListener(R, A),
                t.dispatch((0, be.eventListenerAdded)(h, [R, A]));
            });
        };
      Array.isArray(n) ? n.forEach(y) : typeof n == "string" && y(e);
    }
    function $W(e) {
      if (!NW) return;
      let t = {},
        r = "";
      for (let n in e) {
        let { eventTypeId: o, target: i } = e[n],
          a = Re.getQuerySelector(i);
        t[a] ||
          ((o === nt.EventTypeConsts.MOUSE_CLICK ||
            o === nt.EventTypeConsts.MOUSE_SECOND_CLICK) &&
            ((t[a] = !0),
            (r += a + "{cursor: pointer;touch-action: manipulation;}")));
      }
      if (r) {
        let n = document.createElement("style");
        (n.textContent = r), document.body.appendChild(n);
      }
    }
    function Vy({ store: e, actionListId: t, eventId: r }) {
      let { ixData: n, ixSession: o } = e.getState(),
        { actionLists: i, events: a } = n,
        s = a[r],
        c = i[t];
      if (c && c.useFirstGroupAsInitialState) {
        let p = (0, xt.default)(c, "actionItemGroups[0].actionItems", []),
          y = (0, xt.default)(s, "mediaQueries", n.mediaQueryKeys);
        if (!Li(y, o.mediaQueryKey)) return;
        p.forEach((h) => {
          var m;
          let { config: I, actionTypeId: R } = h,
            A =
              (I == null || (m = I.target) === null || m === void 0
                ? void 0
                : m.useEventTarget) === !0
                ? { target: s.target, targets: s.targets }
                : I,
            F = qi({ config: A, event: s, elementApi: Re }),
            N = vs(R);
          F.forEach((x) => {
            let S = N ? hs(R)(x, h) : null;
            _s({
              destination: ps({ element: x, actionItem: h, elementApi: Re }, S),
              immediate: !0,
              store: e,
              element: x,
              eventId: r,
              actionItem: h,
              actionListId: t,
              pluginInstance: S,
            });
          });
        });
      }
    }
    function ky({ store: e }) {
      let { ixInstances: t } = e.getState();
      (0, ln.default)(t, (r) => {
        if (!r.continuous) {
          let { actionListId: n, verbose: o } = r;
          ys(r, e),
            o &&
              e.dispatch(
                (0, be.actionListPlaybackChanged)({
                  actionListId: n,
                  isPlaying: !1,
                })
              );
        }
      });
    }
    function gs({
      store: e,
      eventId: t,
      eventTarget: r,
      eventStateKey: n,
      actionListId: o,
    }) {
      let { ixInstances: i, ixSession: a } = e.getState(),
        s = a.hasBoundaryNodes && r ? Re.getClosestElement(r, xi) : null;
      (0, ln.default)(i, (c) => {
        let p = (0, xt.default)(c, "actionItem.config.target.boundaryMode"),
          y = n ? c.eventStateKey === n : !0;
        if (c.actionListId === o && c.eventId === t && y) {
          if (s && p && !Re.elementContains(s, c.element)) return;
          ys(c, e),
            c.verbose &&
              e.dispatch(
                (0, be.actionListPlaybackChanged)({
                  actionListId: o,
                  isPlaying: !1,
                })
              );
        }
      });
    }
    function Es({
      store: e,
      eventId: t,
      eventTarget: r,
      eventStateKey: n,
      actionListId: o,
      groupIndex: i = 0,
      immediate: a,
      verbose: s,
    }) {
      var c;
      let { ixData: p, ixSession: y } = e.getState(),
        { events: h } = p,
        m = h[t] || {},
        { mediaQueries: I = p.mediaQueryKeys } = m,
        R = (0, xt.default)(p, `actionLists.${o}`, {}),
        { actionItemGroups: A, useFirstGroupAsInitialState: F } = R;
      if (!A || !A.length) return !1;
      i >= A.length && (0, xt.default)(m, "config.loop") && (i = 0),
        i === 0 && F && i++;
      let x =
          (i === 0 || (i === 1 && F)) &&
          fs((c = m.action) === null || c === void 0 ? void 0 : c.actionTypeId)
            ? m.config.delay
            : void 0,
        S = (0, xt.default)(A, [i, "actionItems"], []);
      if (!S.length || !Li(I, y.mediaQueryKey)) return !1;
      let P = y.hasBoundaryNodes && r ? Re.getClosestElement(r, xi) : null,
        L = yW(S),
        M = !1;
      return (
        S.forEach((H, Q) => {
          let { config: $, actionTypeId: ae } = H,
            te = vs(ae),
            { target: U } = $;
          if (!U) return;
          let O = U.boundaryMode ? P : null;
          qi({
            config: $,
            event: m,
            eventTarget: r,
            elementRoot: O,
            elementApi: Re,
          }).forEach((V, j) => {
            let J = te ? hs(ae)(V, H) : null,
              re = te ? CW(ae)(V, H) : null;
            M = !0;
            let W = L === Q && j === 0,
              Y = mW({ element: V, actionItem: H }),
              d = ps({ element: V, actionItem: H, elementApi: Re }, J);
            _s({
              store: e,
              element: V,
              actionItem: H,
              eventId: t,
              eventTarget: r,
              eventStateKey: n,
              actionListId: o,
              groupIndex: i,
              isCarrier: W,
              computedStyle: Y,
              destination: d,
              immediate: a,
              verbose: s,
              pluginInstance: J,
              pluginDuration: re,
              instanceDelay: x,
            });
          });
        }),
        M
      );
    }
    function _s(e) {
      var t;
      let { store: r, computedStyle: n } = e,
        o = (0, oW.default)(e, pW),
        {
          element: i,
          actionItem: a,
          immediate: s,
          pluginInstance: c,
          continuous: p,
          restingValue: y,
          eventId: h,
        } = o,
        m = !p,
        I = EW(),
        { ixElements: R, ixSession: A, ixData: F } = r.getState(),
        N = gW(R, i),
        { refState: x } = R[N] || {},
        S = Re.getRefType(i),
        P = A.reducedMotion && nt.ReducedMotionTypes[a.actionTypeId],
        L;
      if (P && p)
        switch (
          (t = F.events[h]) === null || t === void 0 ? void 0 : t.eventTypeId
        ) {
          case nt.EventTypeConsts.MOUSE_MOVE:
          case nt.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
            L = y;
            break;
          default:
            L = 0.5;
            break;
        }
      let M = IW(i, x, n, a, Re, c);
      if (
        (r.dispatch(
          (0, be.instanceAdded)(
            (0, iW.default)(
              {
                instanceId: I,
                elementId: N,
                origin: M,
                refType: S,
                skipMotion: P,
                skipToValue: L,
              },
              o
            )
          )
        ),
        By(document.body, "ix2-animation-started", I),
        s)
      ) {
        ZW(r, I);
        return;
      }
      Kt({ store: r, select: ({ ixInstances: H }) => H[I], onChange: Hy }),
        m && r.dispatch((0, be.instanceStarted)(I, A.tick));
    }
    function ys(e, t) {
      By(document.body, "ix2-animation-stopping", {
        instanceId: e.id,
        state: t.getState(),
      });
      let { elementId: r, actionItem: n } = e,
        { ixElements: o } = t.getState(),
        { ref: i, refType: a } = o[r] || {};
      a === Gy && SW(i, n, Re), t.dispatch((0, be.instanceRemoved)(e.id));
    }
    function By(e, t, r) {
      let n = document.createEvent("CustomEvent");
      n.initCustomEvent(t, !0, !0, r), e.dispatchEvent(n);
    }
    function ZW(e, t) {
      let { ixParameters: r } = e.getState();
      e.dispatch((0, be.instanceStarted)(t, 0)),
        e.dispatch((0, be.animationFrameChanged)(performance.now(), r));
      let { ixInstances: n } = e.getState();
      Hy(n[t], e);
    }
    function Hy(e, t) {
      let {
          active: r,
          continuous: n,
          complete: o,
          elementId: i,
          actionItem: a,
          actionTypeId: s,
          renderType: c,
          current: p,
          groupIndex: y,
          eventId: h,
          eventTarget: m,
          eventStateKey: I,
          actionListId: R,
          isCarrier: A,
          styleProp: F,
          verbose: N,
          pluginInstance: x,
        } = e,
        { ixData: S, ixSession: P } = t.getState(),
        { events: L } = S,
        M = L[h] || {},
        { mediaQueries: H = S.mediaQueryKeys } = M;
      if (Li(H, P.mediaQueryKey) && (n || r || o)) {
        if (p || (c === hW && o)) {
          t.dispatch((0, be.elementStateChanged)(i, s, p, a));
          let { ixElements: Q } = t.getState(),
            { ref: $, refType: ae, refState: te } = Q[i] || {},
            U = te && te[s];
          switch (ae) {
            case Gy: {
              _W($, te, U, h, a, F, Re, c, x);
              break;
            }
          }
        }
        if (o) {
          if (A) {
            let Q = Es({
              store: t,
              eventId: h,
              eventTarget: m,
              eventStateKey: I,
              actionListId: R,
              groupIndex: y + 1,
              verbose: N,
            });
            N &&
              !Q &&
              t.dispatch(
                (0, be.actionListPlaybackChanged)({
                  actionListId: R,
                  isPlaying: !1,
                })
              );
          }
          ys(e, t);
        }
      }
    }
  });
  var Ky = u((Tt) => {
    "use strict";
    var JW = $t().default,
      eV = ct().default;
    Object.defineProperty(Tt, "__esModule", { value: !0 });
    Tt.actions = void 0;
    Tt.destroy = jy;
    Tt.init = oV;
    Tt.setEnv = iV;
    Tt.store = void 0;
    Pl();
    var tV = $o(),
      rV = eV(Qg()),
      ms = ls(),
      nV = JW(yi());
    Tt.actions = nV;
    var Mi = (0, tV.createStore)(rV.default);
    Tt.store = Mi;
    function iV(e) {
      e() && (0, ms.observeRequests)(Mi);
    }
    function oV(e) {
      jy(), (0, ms.startEngine)({ store: Mi, rawData: e, allowEvents: !0 });
    }
    function jy() {
      (0, ms.stopEngine)(Mi);
    }
  });
  var $y = u((oK, Qy) => {
    var zy = Ve(),
      Yy = Ky();
    Yy.setEnv(zy.env);
    zy.define(
      "ix2",
      (Qy.exports = function () {
        return Yy;
      })
    );
  });
  var Jy = u((aK, Zy) => {
    var Sr = Ve();
    Sr.define(
      "links",
      (Zy.exports = function (e, t) {
        var r = {},
          n = e(window),
          o,
          i = Sr.env(),
          a = window.location,
          s = document.createElement("a"),
          c = "w--current",
          p = /index\.(html|php)$/,
          y = /\/$/,
          h,
          m;
        r.ready = r.design = r.preview = I;
        function I() {
          (o = i && Sr.env("design")),
            (m = Sr.env("slug") || a.pathname || ""),
            Sr.scroll.off(A),
            (h = []);
          for (var N = document.links, x = 0; x < N.length; ++x) R(N[x]);
          h.length && (Sr.scroll.on(A), A());
        }
        function R(N) {
          var x =
            (o && N.getAttribute("href-disabled")) || N.getAttribute("href");
          if (((s.href = x), !(x.indexOf(":") >= 0))) {
            var S = e(N);
            if (
              s.hash.length > 1 &&
              s.host + s.pathname === a.host + a.pathname
            ) {
              if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash)) return;
              var P = e(s.hash);
              P.length && h.push({ link: S, sec: P, active: !1 });
              return;
            }
            if (!(x === "#" || x === "")) {
              var L = s.href === a.href || x === m || (p.test(x) && y.test(m));
              F(S, c, L);
            }
          }
        }
        function A() {
          var N = n.scrollTop(),
            x = n.height();
          t.each(h, function (S) {
            var P = S.link,
              L = S.sec,
              M = L.offset().top,
              H = L.outerHeight(),
              Q = x * 0.5,
              $ = L.is(":visible") && M + H - Q >= N && M + Q <= N + x;
            S.active !== $ && ((S.active = $), F(P, c, $));
          });
        }
        function F(N, x, S) {
          var P = N.hasClass(x);
          (S && P) || (!S && !P) || (S ? N.addClass(x) : N.removeClass(x));
        }
        return r;
      })
    );
  });
  var tm = u((sK, em) => {
    var Fi = Ve();
    Fi.define(
      "scroll",
      (em.exports = function (e) {
        var t = {
            WF_CLICK_EMPTY: "click.wf-empty-link",
            WF_CLICK_SCROLL: "click.wf-scroll",
          },
          r = window.location,
          n = R() ? null : window.history,
          o = e(window),
          i = e(document),
          a = e(document.body),
          s =
            window.requestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            function (U) {
              window.setTimeout(U, 15);
            },
          c = Fi.env("editor") ? ".w-editor-body" : "body",
          p =
            "header, " +
            c +
            " > .header, " +
            c +
            " > .w-nav:not([data-no-scroll])",
          y = 'a[href="#"]',
          h = 'a[href*="#"]:not(.w-tab-link):not(' + y + ")",
          m = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
          I = document.createElement("style");
        I.appendChild(document.createTextNode(m));
        function R() {
          try {
            return !!window.frameElement;
          } catch {
            return !0;
          }
        }
        var A = /^#[a-zA-Z0-9][\w:.-]*$/;
        function F(U) {
          return A.test(U.hash) && U.host + U.pathname === r.host + r.pathname;
        }
        let N =
          typeof window.matchMedia == "function" &&
          window.matchMedia("(prefers-reduced-motion: reduce)");
        function x() {
          return (
            document.body.getAttribute("data-wf-scroll-motion") === "none" ||
            N.matches
          );
        }
        function S(U, O) {
          var X;
          switch (O) {
            case "add":
              (X = U.attr("tabindex")),
                X
                  ? U.attr("data-wf-tabindex-swap", X)
                  : U.attr("tabindex", "-1");
              break;
            case "remove":
              (X = U.attr("data-wf-tabindex-swap")),
                X
                  ? (U.attr("tabindex", X),
                    U.removeAttr("data-wf-tabindex-swap"))
                  : U.removeAttr("tabindex");
              break;
          }
          U.toggleClass("wf-force-outline-none", O === "add");
        }
        function P(U) {
          var O = U.currentTarget;
          if (
            !(
              Fi.env("design") ||
              (window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(O.className))
            )
          ) {
            var X = F(O) ? O.hash : "";
            if (X !== "") {
              var V = e(X);
              V.length &&
                (U && (U.preventDefault(), U.stopPropagation()),
                L(X, U),
                window.setTimeout(
                  function () {
                    M(V, function () {
                      S(V, "add"),
                        V.get(0).focus({ preventScroll: !0 }),
                        S(V, "remove");
                    });
                  },
                  U ? 0 : 300
                ));
            }
          }
        }
        function L(U) {
          if (
            r.hash !== U &&
            n &&
            n.pushState &&
            !(Fi.env.chrome && r.protocol === "file:")
          ) {
            var O = n.state && n.state.hash;
            O !== U && n.pushState({ hash: U }, "", U);
          }
        }
        function M(U, O) {
          var X = o.scrollTop(),
            V = H(U);
          if (X !== V) {
            var j = Q(U, X, V),
              J = Date.now(),
              re = function () {
                var W = Date.now() - J;
                window.scroll(0, $(X, V, W, j)),
                  W <= j ? s(re) : typeof O == "function" && O();
              };
            s(re);
          }
        }
        function H(U) {
          var O = e(p),
            X = O.css("position") === "fixed" ? O.outerHeight() : 0,
            V = U.offset().top - X;
          if (U.data("scroll") === "mid") {
            var j = o.height() - X,
              J = U.outerHeight();
            J < j && (V -= Math.round((j - J) / 2));
          }
          return V;
        }
        function Q(U, O, X) {
          if (x()) return 0;
          var V = 1;
          return (
            a.add(U).each(function (j, J) {
              var re = parseFloat(J.getAttribute("data-scroll-time"));
              !isNaN(re) && re >= 0 && (V = re);
            }),
            (472.143 * Math.log(Math.abs(O - X) + 125) - 2e3) * V
          );
        }
        function $(U, O, X, V) {
          return X > V ? O : U + (O - U) * ae(X / V);
        }
        function ae(U) {
          return U < 0.5
            ? 4 * U * U * U
            : (U - 1) * (2 * U - 2) * (2 * U - 2) + 1;
        }
        function te() {
          var { WF_CLICK_EMPTY: U, WF_CLICK_SCROLL: O } = t;
          i.on(O, h, P),
            i.on(U, y, function (X) {
              X.preventDefault();
            }),
            document.head.insertBefore(I, document.head.firstChild);
        }
        return { ready: te };
      })
    );
  });
  var nm = u((uK, rm) => {
    var aV = Ve();
    aV.define(
      "touch",
      (rm.exports = function (e) {
        var t = {},
          r = window.getSelection;
        (e.event.special.tap = { bindType: "click", delegateType: "click" }),
          (t.init = function (i) {
            return (
              (i = typeof i == "string" ? e(i).get(0) : i), i ? new n(i) : null
            );
          });
        function n(i) {
          var a = !1,
            s = !1,
            c = Math.min(Math.round(window.innerWidth * 0.04), 40),
            p,
            y;
          i.addEventListener("touchstart", h, !1),
            i.addEventListener("touchmove", m, !1),
            i.addEventListener("touchend", I, !1),
            i.addEventListener("touchcancel", R, !1),
            i.addEventListener("mousedown", h, !1),
            i.addEventListener("mousemove", m, !1),
            i.addEventListener("mouseup", I, !1),
            i.addEventListener("mouseout", R, !1);
          function h(F) {
            var N = F.touches;
            (N && N.length > 1) ||
              ((a = !0),
              N ? ((s = !0), (p = N[0].clientX)) : (p = F.clientX),
              (y = p));
          }
          function m(F) {
            if (a) {
              if (s && F.type === "mousemove") {
                F.preventDefault(), F.stopPropagation();
                return;
              }
              var N = F.touches,
                x = N ? N[0].clientX : F.clientX,
                S = x - y;
              (y = x),
                Math.abs(S) > c &&
                  r &&
                  String(r()) === "" &&
                  (o("swipe", F, { direction: S > 0 ? "right" : "left" }), R());
            }
          }
          function I(F) {
            if (a && ((a = !1), s && F.type === "mouseup")) {
              F.preventDefault(), F.stopPropagation(), (s = !1);
              return;
            }
          }
          function R() {
            a = !1;
          }
          function A() {
            i.removeEventListener("touchstart", h, !1),
              i.removeEventListener("touchmove", m, !1),
              i.removeEventListener("touchend", I, !1),
              i.removeEventListener("touchcancel", R, !1),
              i.removeEventListener("mousedown", h, !1),
              i.removeEventListener("mousemove", m, !1),
              i.removeEventListener("mouseup", I, !1),
              i.removeEventListener("mouseout", R, !1),
              (i = null);
          }
          this.destroy = A;
        }
        function o(i, a, s) {
          var c = e.Event(i, { originalEvent: a });
          e(a.target).trigger(c, s);
        }
        return (t.instance = t.init(document)), t;
      })
    );
  });
  var am = u((cK, om) => {
    var zt = Ve(),
      sV = wr(),
      ot = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      },
      im = !0,
      uV = /^#[a-zA-Z0-9\-_]+$/;
    zt.define(
      "dropdown",
      (om.exports = function (e, t) {
        var r = t.debounce,
          n = {},
          o = zt.env(),
          i = !1,
          a,
          s = zt.env.touch,
          c = ".w-dropdown",
          p = "w--open",
          y = sV.triggers,
          h = 900,
          m = "focusout" + c,
          I = "keydown" + c,
          R = "mouseenter" + c,
          A = "mousemove" + c,
          F = "mouseleave" + c,
          N = (s ? "click" : "mouseup") + c,
          x = "w-close" + c,
          S = "setting" + c,
          P = e(document),
          L;
        (n.ready = M),
          (n.design = function () {
            i && O(), (i = !1), M();
          }),
          (n.preview = function () {
            (i = !0), M();
          });
        function M() {
          (a = o && zt.env("design")), (L = P.find(c)), L.each(H);
        }
        function H(l, G) {
          var k = e(G),
            w = e.data(G, c);
          w ||
            (w = e.data(G, c, {
              open: !1,
              el: k,
              config: {},
              selectedIdx: -1,
            })),
            (w.toggle = w.el.children(".w-dropdown-toggle")),
            (w.list = w.el.children(".w-dropdown-list")),
            (w.links = w.list.find("a:not(.w-dropdown .w-dropdown a)")),
            (w.complete = j(w)),
            (w.mouseLeave = re(w)),
            (w.mouseUpOutside = V(w)),
            (w.mouseMoveOutside = W(w)),
            Q(w);
          var ie = w.toggle.attr("id"),
            ve = w.list.attr("id");
          ie || (ie = "w-dropdown-toggle-" + l),
            ve || (ve = "w-dropdown-list-" + l),
            w.toggle.attr("id", ie),
            w.toggle.attr("aria-controls", ve),
            w.toggle.attr("aria-haspopup", "menu"),
            w.toggle.attr("aria-expanded", "false"),
            w.toggle
              .find(".w-icon-dropdown-toggle")
              .attr("aria-hidden", "true"),
            w.toggle.prop("tagName") !== "BUTTON" &&
              (w.toggle.attr("role", "button"),
              w.toggle.attr("tabindex") || w.toggle.attr("tabindex", "0")),
            w.list.attr("id", ve),
            w.list.attr("aria-labelledby", ie),
            w.links.each(function (v, B) {
              B.hasAttribute("tabindex") || B.setAttribute("tabindex", "0"),
                uV.test(B.hash) && B.addEventListener("click", U.bind(null, w));
            }),
            w.el.off(c),
            w.toggle.off(c),
            w.nav && w.nav.off(c);
          var oe = ae(w, im);
          a && w.el.on(S, $(w)),
            a ||
              (o && ((w.hovering = !1), U(w)),
              w.config.hover && w.toggle.on(R, J(w)),
              w.el.on(x, oe),
              w.el.on(I, Y(w)),
              w.el.on(m, E(w)),
              w.toggle.on(N, oe),
              w.toggle.on(I, g(w)),
              (w.nav = w.el.closest(".w-nav")),
              w.nav.on(x, oe));
        }
        function Q(l) {
          var G = Number(l.el.css("z-index"));
          (l.manageZ = G === h || G === h + 1),
            (l.config = {
              hover: l.el.attr("data-hover") === "true" && !s,
              delay: l.el.attr("data-delay"),
            });
        }
        function $(l) {
          return function (G, k) {
            (k = k || {}),
              Q(l),
              k.open === !0 && te(l, !0),
              k.open === !1 && U(l, { immediate: !0 });
          };
        }
        function ae(l, G) {
          return r(function (k) {
            if (l.open || (k && k.type === "w-close"))
              return U(l, { forceClose: G });
            te(l);
          });
        }
        function te(l) {
          if (!l.open) {
            X(l),
              (l.open = !0),
              l.list.addClass(p),
              l.toggle.addClass(p),
              l.toggle.attr("aria-expanded", "true"),
              y.intro(0, l.el[0]),
              zt.redraw.up(),
              l.manageZ && l.el.css("z-index", h + 1);
            var G = zt.env("editor");
            a || P.on(N, l.mouseUpOutside),
              l.hovering && !G && l.el.on(F, l.mouseLeave),
              l.hovering && G && P.on(A, l.mouseMoveOutside),
              window.clearTimeout(l.delayId);
          }
        }
        function U(l, { immediate: G, forceClose: k } = {}) {
          if (l.open && !(l.config.hover && l.hovering && !k)) {
            l.toggle.attr("aria-expanded", "false"), (l.open = !1);
            var w = l.config;
            if (
              (y.outro(0, l.el[0]),
              P.off(N, l.mouseUpOutside),
              P.off(A, l.mouseMoveOutside),
              l.el.off(F, l.mouseLeave),
              window.clearTimeout(l.delayId),
              !w.delay || G)
            )
              return l.complete();
            l.delayId = window.setTimeout(l.complete, w.delay);
          }
        }
        function O() {
          P.find(c).each(function (l, G) {
            e(G).triggerHandler(x);
          });
        }
        function X(l) {
          var G = l.el[0];
          L.each(function (k, w) {
            var ie = e(w);
            ie.is(G) || ie.has(G).length || ie.triggerHandler(x);
          });
        }
        function V(l) {
          return (
            l.mouseUpOutside && P.off(N, l.mouseUpOutside),
            r(function (G) {
              if (l.open) {
                var k = e(G.target);
                if (!k.closest(".w-dropdown-toggle").length) {
                  var w = e.inArray(l.el[0], k.parents(c)) === -1,
                    ie = zt.env("editor");
                  if (w) {
                    if (ie) {
                      var ve =
                          k.parents().length === 1 &&
                          k.parents("svg").length === 1,
                        oe = k.parents(
                          ".w-editor-bem-EditorHoverControls"
                        ).length;
                      if (ve || oe) return;
                    }
                    U(l);
                  }
                }
              }
            })
          );
        }
        function j(l) {
          return function () {
            l.list.removeClass(p),
              l.toggle.removeClass(p),
              l.manageZ && l.el.css("z-index", "");
          };
        }
        function J(l) {
          return function () {
            (l.hovering = !0), te(l);
          };
        }
        function re(l) {
          return function () {
            (l.hovering = !1), l.links.is(":focus") || U(l);
          };
        }
        function W(l) {
          return r(function (G) {
            if (l.open) {
              var k = e(G.target),
                w = e.inArray(l.el[0], k.parents(c)) === -1;
              if (w) {
                var ie = k.parents(".w-editor-bem-EditorHoverControls").length,
                  ve = k.parents(".w-editor-bem-RTToolbar").length,
                  oe = e(".w-editor-bem-EditorOverlay"),
                  v =
                    oe.find(".w-editor-edit-outline").length ||
                    oe.find(".w-editor-bem-RTToolbar").length;
                if (ie || ve || v) return;
                (l.hovering = !1), U(l);
              }
            }
          });
        }
        function Y(l) {
          return function (G) {
            if (!(a || !l.open))
              switch (
                ((l.selectedIdx = l.links.index(document.activeElement)),
                G.keyCode)
              ) {
                case ot.HOME:
                  return l.open
                    ? ((l.selectedIdx = 0), d(l), G.preventDefault())
                    : void 0;
                case ot.END:
                  return l.open
                    ? ((l.selectedIdx = l.links.length - 1),
                      d(l),
                      G.preventDefault())
                    : void 0;
                case ot.ESCAPE:
                  return U(l), l.toggle.focus(), G.stopPropagation();
                case ot.ARROW_RIGHT:
                case ot.ARROW_DOWN:
                  return (
                    (l.selectedIdx = Math.min(
                      l.links.length - 1,
                      l.selectedIdx + 1
                    )),
                    d(l),
                    G.preventDefault()
                  );
                case ot.ARROW_LEFT:
                case ot.ARROW_UP:
                  return (
                    (l.selectedIdx = Math.max(-1, l.selectedIdx - 1)),
                    d(l),
                    G.preventDefault()
                  );
              }
          };
        }
        function d(l) {
          l.links[l.selectedIdx] && l.links[l.selectedIdx].focus();
        }
        function g(l) {
          var G = ae(l, im);
          return function (k) {
            if (!a) {
              if (!l.open)
                switch (k.keyCode) {
                  case ot.ARROW_UP:
                  case ot.ARROW_DOWN:
                    return k.stopPropagation();
                }
              switch (k.keyCode) {
                case ot.SPACE:
                case ot.ENTER:
                  return G(), k.stopPropagation(), k.preventDefault();
              }
            }
          };
        }
        function E(l) {
          return r(function (G) {
            var { relatedTarget: k, target: w } = G,
              ie = l.el[0],
              ve = ie.contains(k) || ie.contains(w);
            return ve || U(l), G.stopPropagation();
          });
        }
        return n;
      })
    );
  });
  var sm = u((Is) => {
    "use strict";
    Object.defineProperty(Is, "__esModule", { value: !0 });
    Is.default = cV;
    function cV(e, t, r, n, o, i, a, s, c, p, y, h, m) {
      return function (I) {
        e(I);
        var R = I.form,
          A = {
            name: R.attr("data-name") || R.attr("name") || "Untitled Form",
            source: t.href,
            test: r.env(),
            fields: {},
            fileUploads: {},
            dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(
              R.html()
            ),
            trackingCookies: n(),
          };
        let F = R.attr("data-wf-flow");
        F && (A.wfFlow = F), o(I);
        var N = i(R, A.fields);
        if (N) return a(N);
        if (((A.fileUploads = s(R)), c(I), !p)) {
          y(I);
          return;
        }
        h.ajax({
          url: m,
          type: "POST",
          data: A,
          dataType: "json",
          crossDomain: !0,
        })
          .done(function (x) {
            x && x.code === 200 && (I.success = !0), y(I);
          })
          .fail(function () {
            y(I);
          });
      };
    }
  });
  var cm = u((fK, um) => {
    var Gi = Ve();
    Gi.define(
      "forms",
      (um.exports = function (e, t) {
        var r = {},
          n = e(document),
          o,
          i = window.location,
          a = window.XDomainRequest && !window.atob,
          s = ".w-form",
          c,
          p = /e(-)?mail/i,
          y = /^\S+@\S+$/,
          h = window.alert,
          m = Gi.env(),
          I,
          R,
          A,
          F = /list-manage[1-9]?.com/i,
          N = t.debounce(function () {
            h(
              "Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue."
            );
          }, 100);
        r.ready =
          r.design =
          r.preview =
            function () {
              x(), !m && !I && P();
            };
        function x() {
          return;
          (c = e("html").attr("data-wf-site")),
            (R = "https://webflow.com/api/v1/form/" + c),
            a &&
              R.indexOf("https://webflow.com") >= 0 &&
              (R = R.replace(
                "https://webflow.com",
                "https://formdata.webflow.com"
              )),
            (A = `${R}/signFile`),
            (o = e(s + " form")),
            o.length && o.each(S);
        }
        function S(W, Y) {
          var d = e(Y),
            g = e.data(Y, s);
          g || (g = e.data(Y, s, { form: d })), L(g);
          var E = d.closest("div.w-form");
          (g.done = E.find("> .w-form-done")),
            (g.fail = E.find("> .w-form-fail")),
            (g.fileUploads = E.find(".w-file-upload")),
            g.fileUploads.each(function (k) {
              j(k, g);
            });
          var l =
            g.form.attr("aria-label") || g.form.attr("data-name") || "Form";
          g.done.attr("aria-label") || g.form.attr("aria-label", l),
            g.done.attr("tabindex", "-1"),
            g.done.attr("role", "region"),
            g.done.attr("aria-label") ||
              g.done.attr("aria-label", l + " success"),
            g.fail.attr("tabindex", "-1"),
            g.fail.attr("role", "region"),
            g.fail.attr("aria-label") ||
              g.fail.attr("aria-label", l + " failure");
          var G = (g.action = d.attr("action"));
          if (
            ((g.handler = null),
            (g.redirect = d.attr("data-redirect")),
            F.test(G))
          ) {
            g.handler = O;
            return;
          }
          if (!G) {
            if (c) {
              g.handler = (() => {
                let k = sm().default;
                return k(L, i, Gi, ae, V, H, h, Q, M, c, X, e, R);
              })();
              return;
            }
            N();
          }
        }
        function P() {
          (I = !0),
            n.on("submit", s + " form", function (k) {
              var w = e.data(this, s);
              w.handler && ((w.evt = k), w.handler(w));
            });
          let W = ".w-checkbox-input",
            Y = ".w-radio-input",
            d = "w--redirected-checked",
            g = "w--redirected-focus",
            E = "w--redirected-focus-visible",
            l = ":focus-visible, [data-wf-focus-visible]",
            G = [
              ["checkbox", W],
              ["radio", Y],
            ];
          n.on(
            "change",
            s + ' form input[type="checkbox"]:not(' + W + ")",
            (k) => {
              e(k.target).siblings(W).toggleClass(d);
            }
          ),
            n.on("change", s + ' form input[type="radio"]', (k) => {
              e(`input[name="${k.target.name}"]:not(${W})`).map((ie, ve) =>
                e(ve).siblings(Y).removeClass(d)
              );
              let w = e(k.target);
              w.hasClass("w-radio-input") || w.siblings(Y).addClass(d);
            }),
            G.forEach(([k, w]) => {
              n.on(
                "focus",
                s + ` form input[type="${k}"]:not(` + w + ")",
                (ie) => {
                  e(ie.target).siblings(w).addClass(g),
                    e(ie.target).filter(l).siblings(w).addClass(E);
                }
              ),
                n.on(
                  "blur",
                  s + ` form input[type="${k}"]:not(` + w + ")",
                  (ie) => {
                    e(ie.target).siblings(w).removeClass(`${g} ${E}`);
                  }
                );
            });
        }
        function L(W) {
          var Y = (W.btn = W.form.find(':input[type="submit"]'));
          (W.wait = W.btn.attr("data-wait") || null),
            (W.success = !1),
            Y.prop("disabled", !1),
            W.label && Y.val(W.label);
        }
        function M(W) {
          var Y = W.btn,
            d = W.wait;
          Y.prop("disabled", !0), d && ((W.label = Y.val()), Y.val(d));
        }
        function H(W, Y) {
          var d = null;
          return (
            (Y = Y || {}),
            W.find(':input:not([type="submit"]):not([type="file"])').each(
              function (g, E) {
                var l = e(E),
                  G = l.attr("type"),
                  k =
                    l.attr("data-name") || l.attr("name") || "Field " + (g + 1),
                  w = l.val();
                if (G === "checkbox") w = l.is(":checked");
                else if (G === "radio") {
                  if (Y[k] === null || typeof Y[k] == "string") return;
                  w =
                    W.find(
                      'input[name="' + l.attr("name") + '"]:checked'
                    ).val() || null;
                }
                typeof w == "string" && (w = e.trim(w)),
                  (Y[k] = w),
                  (d = d || te(l, G, k, w));
              }
            ),
            d
          );
        }
        function Q(W) {
          var Y = {};
          return (
            W.find(':input[type="file"]').each(function (d, g) {
              var E = e(g),
                l = E.attr("data-name") || E.attr("name") || "File " + (d + 1),
                G = E.attr("data-value");
              typeof G == "string" && (G = e.trim(G)), (Y[l] = G);
            }),
            Y
          );
        }
        let $ = { _mkto_trk: "marketo" };
        function ae() {
          return document.cookie.split("; ").reduce(function (Y, d) {
            let g = d.split("="),
              E = g[0];
            if (E in $) {
              let l = $[E],
                G = g.slice(1).join("=");
              Y[l] = G;
            }
            return Y;
          }, {});
        }
        function te(W, Y, d, g) {
          var E = null;
          return (
            Y === "password"
              ? (E = "Passwords cannot be submitted.")
              : W.attr("required")
              ? g
                ? p.test(W.attr("type")) &&
                  (y.test(g) ||
                    (E = "Please enter a valid email address for: " + d))
                : (E = "Please fill out the required field: " + d)
              : d === "g-recaptcha-response" &&
                !g &&
                (E = "Please confirm you\u2019re not a robot."),
            E
          );
        }
        function U(W) {
          V(W), X(W);
        }
        function O(W) {
          L(W);
          var Y = W.form,
            d = {};
          if (/^https/.test(i.href) && !/^https/.test(W.action)) {
            Y.attr("method", "post");
            return;
          }
          V(W);
          var g = H(Y, d);
          if (g) return h(g);
          M(W);
          var E;
          t.each(d, function (w, ie) {
            p.test(ie) && (d.EMAIL = w),
              /^((full[ _-]?)?name)$/i.test(ie) && (E = w),
              /^(first[ _-]?name)$/i.test(ie) && (d.FNAME = w),
              /^(last[ _-]?name)$/i.test(ie) && (d.LNAME = w);
          }),
            E &&
              !d.FNAME &&
              ((E = E.split(" ")),
              (d.FNAME = E[0]),
              (d.LNAME = d.LNAME || E[1]));
          var l = W.action.replace("/post?", "/post-json?") + "&c=?",
            G = l.indexOf("u=") + 2;
          G = l.substring(G, l.indexOf("&", G));
          var k = l.indexOf("id=") + 3;
          (k = l.substring(k, l.indexOf("&", k))),
            (d["b_" + G + "_" + k] = ""),
            e
              .ajax({ url: l, data: d, dataType: "jsonp" })
              .done(function (w) {
                (W.success = w.result === "success" || /already/.test(w.msg)),
                  W.success || console.info("MailChimp error: " + w.msg),
                  X(W);
              })
              .fail(function () {
                X(W);
              });
        }
        function X(W) {
          var Y = W.form,
            d = W.redirect,
            g = W.success;
          if (g && d) {
            Gi.location(d);
            return;
          }
          W.done.toggle(g),
            W.fail.toggle(!g),
            g ? W.done.focus() : W.fail.focus(),
            Y.toggle(!g),
            L(W);
        }
        function V(W) {
          W.evt && W.evt.preventDefault(), (W.evt = null);
        }
        function j(W, Y) {
          if (!Y.fileUploads || !Y.fileUploads[W]) return;
          var d,
            g = e(Y.fileUploads[W]),
            E = g.find("> .w-file-upload-default"),
            l = g.find("> .w-file-upload-uploading"),
            G = g.find("> .w-file-upload-success"),
            k = g.find("> .w-file-upload-error"),
            w = E.find(".w-file-upload-input"),
            ie = E.find(".w-file-upload-label"),
            ve = ie.children(),
            oe = k.find(".w-file-upload-error-msg"),
            v = G.find(".w-file-upload-file"),
            B = G.find(".w-file-remove-link"),
            Z = v.find(".w-file-upload-file-name"),
            K = oe.attr("data-w-size-error"),
            he = oe.attr("data-w-type-error"),
            Xe = oe.attr("data-w-generic-error");
          if (
            (m ||
              ie.on("click keydown", function (T) {
                (T.type === "keydown" && T.which !== 13 && T.which !== 32) ||
                  (T.preventDefault(), w.click());
              }),
            ie.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"),
            B.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"),
            m)
          )
            w.on("click", function (T) {
              T.preventDefault();
            }),
              ie.on("click", function (T) {
                T.preventDefault();
              }),
              ve.on("click", function (T) {
                T.preventDefault();
              });
          else {
            B.on("click keydown", function (T) {
              if (T.type === "keydown") {
                if (T.which !== 13 && T.which !== 32) return;
                T.preventDefault();
              }
              w.removeAttr("data-value"),
                w.val(""),
                Z.html(""),
                E.toggle(!0),
                G.toggle(!1),
                ie.focus();
            }),
              w.on("change", function (T) {
                (d = T.target && T.target.files && T.target.files[0]),
                  d &&
                    (E.toggle(!1),
                    k.toggle(!1),
                    l.toggle(!0),
                    l.focus(),
                    Z.text(d.name),
                    C() || M(Y),
                    (Y.fileUploads[W].uploading = !0),
                    J(d, _));
              });
            var ze = ie.outerHeight();
            w.height(ze), w.width(1);
          }
          function f(T) {
            var q = T.responseJSON && T.responseJSON.msg,
              ee = Xe;
            typeof q == "string" && q.indexOf("InvalidFileTypeError") === 0
              ? (ee = he)
              : typeof q == "string" &&
                q.indexOf("MaxFileSizeError") === 0 &&
                (ee = K),
              oe.text(ee),
              w.removeAttr("data-value"),
              w.val(""),
              l.toggle(!1),
              E.toggle(!0),
              k.toggle(!0),
              k.focus(),
              (Y.fileUploads[W].uploading = !1),
              C() || L(Y);
          }
          function _(T, q) {
            if (T) return f(T);
            var ee = q.fileName,
              se = q.postData,
              _e = q.fileId,
              z = q.s3Url;
            w.attr("data-value", _e), re(z, se, d, ee, b);
          }
          function b(T) {
            if (T) return f(T);
            l.toggle(!1),
              G.css("display", "inline-block"),
              G.focus(),
              (Y.fileUploads[W].uploading = !1),
              C() || L(Y);
          }
          function C() {
            var T = (Y.fileUploads && Y.fileUploads.toArray()) || [];
            return T.some(function (q) {
              return q.uploading;
            });
          }
        }
        function J(W, Y) {
          var d = new URLSearchParams({ name: W.name, size: W.size });
          e.ajax({ type: "GET", url: `${A}?${d}`, crossDomain: !0 })
            .done(function (g) {
              Y(null, g);
            })
            .fail(function (g) {
              Y(g);
            });
        }
        function re(W, Y, d, g, E) {
          var l = new FormData();
          for (var G in Y) l.append(G, Y[G]);
          l.append("file", d, g),
            e
              .ajax({
                type: "POST",
                url: W,
                data: l,
                processData: !1,
                contentType: !1,
              })
              .done(function () {
                E(null);
              })
              .fail(function (k) {
                E(k);
              });
        }
        return r;
      })
    );
  });
  var fm = u((dK, lm) => {
    var Lt = Ve(),
      lV = wr(),
      Pe = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      };
    Lt.define(
      "navbar",
      (lm.exports = function (e, t) {
        var r = {},
          n = e.tram,
          o = e(window),
          i = e(document),
          a = t.debounce,
          s,
          c,
          p,
          y,
          h = Lt.env(),
          m = '<div class="w-nav-overlay" data-wf-ignore />',
          I = ".w-nav",
          R = "w--open",
          A = "w--nav-dropdown-open",
          F = "w--nav-dropdown-toggle-open",
          N = "w--nav-dropdown-list-open",
          x = "w--nav-link-open",
          S = lV.triggers,
          P = e();
        (r.ready = r.design = r.preview = L),
          (r.destroy = function () {
            (P = e()), M(), c && c.length && c.each(ae);
          });
        function L() {
          (p = h && Lt.env("design")),
            (y = Lt.env("editor")),
            (s = e(document.body)),
            (c = i.find(I)),
            c.length && (c.each($), M(), H());
        }
        function M() {
          Lt.resize.off(Q);
        }
        function H() {
          Lt.resize.on(Q);
        }
        function Q() {
          c.each(E);
        }
        function $(v, B) {
          var Z = e(B),
            K = e.data(B, I);
          K ||
            (K = e.data(B, I, {
              open: !1,
              el: Z,
              config: {},
              selectedIdx: -1,
            })),
            (K.menu = Z.find(".w-nav-menu")),
            (K.links = K.menu.find(".w-nav-link")),
            (K.dropdowns = K.menu.find(".w-dropdown")),
            (K.dropdownToggle = K.menu.find(".w-dropdown-toggle")),
            (K.dropdownList = K.menu.find(".w-dropdown-list")),
            (K.button = Z.find(".w-nav-button")),
            (K.container = Z.find(".w-container")),
            (K.overlayContainerId = "w-nav-overlay-" + v),
            (K.outside = d(K));
          var he = Z.find(".w-nav-brand");
          he &&
            he.attr("href") === "/" &&
            he.attr("aria-label") == null &&
            he.attr("aria-label", "home"),
            K.button.attr("style", "-webkit-user-select: text;"),
            K.button.attr("aria-label") == null &&
              K.button.attr("aria-label", "menu"),
            K.button.attr("role", "button"),
            K.button.attr("tabindex", "0"),
            K.button.attr("aria-controls", K.overlayContainerId),
            K.button.attr("aria-haspopup", "menu"),
            K.button.attr("aria-expanded", "false"),
            K.el.off(I),
            K.button.off(I),
            K.menu.off(I),
            O(K),
            p
              ? (te(K), K.el.on("setting" + I, X(K)))
              : (U(K),
                K.button.on("click" + I, W(K)),
                K.menu.on("click" + I, "a", Y(K)),
                K.button.on("keydown" + I, V(K)),
                K.el.on("keydown" + I, j(K))),
            E(v, B);
        }
        function ae(v, B) {
          var Z = e.data(B, I);
          Z && (te(Z), e.removeData(B, I));
        }
        function te(v) {
          v.overlay && (oe(v, !0), v.overlay.remove(), (v.overlay = null));
        }
        function U(v) {
          v.overlay ||
            ((v.overlay = e(m).appendTo(v.el)),
            v.overlay.attr("id", v.overlayContainerId),
            (v.parent = v.menu.parent()),
            oe(v, !0));
        }
        function O(v) {
          var B = {},
            Z = v.config || {},
            K = (B.animation = v.el.attr("data-animation") || "default");
          (B.animOver = /^over/.test(K)),
            (B.animDirect = /left$/.test(K) ? -1 : 1),
            Z.animation !== K && v.open && t.defer(re, v),
            (B.easing = v.el.attr("data-easing") || "ease"),
            (B.easing2 = v.el.attr("data-easing2") || "ease");
          var he = v.el.attr("data-duration");
          (B.duration = he != null ? Number(he) : 400),
            (B.docHeight = v.el.attr("data-doc-height")),
            (v.config = B);
        }
        function X(v) {
          return function (B, Z) {
            Z = Z || {};
            var K = o.width();
            O(v),
              Z.open === !0 && ie(v, !0),
              Z.open === !1 && oe(v, !0),
              v.open &&
                t.defer(function () {
                  K !== o.width() && re(v);
                });
          };
        }
        function V(v) {
          return function (B) {
            switch (B.keyCode) {
              case Pe.SPACE:
              case Pe.ENTER:
                return W(v)(), B.preventDefault(), B.stopPropagation();
              case Pe.ESCAPE:
                return oe(v), B.preventDefault(), B.stopPropagation();
              case Pe.ARROW_RIGHT:
              case Pe.ARROW_DOWN:
              case Pe.HOME:
              case Pe.END:
                return v.open
                  ? (B.keyCode === Pe.END
                      ? (v.selectedIdx = v.links.length - 1)
                      : (v.selectedIdx = 0),
                    J(v),
                    B.preventDefault(),
                    B.stopPropagation())
                  : (B.preventDefault(), B.stopPropagation());
            }
          };
        }
        function j(v) {
          return function (B) {
            if (v.open)
              switch (
                ((v.selectedIdx = v.links.index(document.activeElement)),
                B.keyCode)
              ) {
                case Pe.HOME:
                case Pe.END:
                  return (
                    B.keyCode === Pe.END
                      ? (v.selectedIdx = v.links.length - 1)
                      : (v.selectedIdx = 0),
                    J(v),
                    B.preventDefault(),
                    B.stopPropagation()
                  );
                case Pe.ESCAPE:
                  return (
                    oe(v),
                    v.button.focus(),
                    B.preventDefault(),
                    B.stopPropagation()
                  );
                case Pe.ARROW_LEFT:
                case Pe.ARROW_UP:
                  return (
                    (v.selectedIdx = Math.max(-1, v.selectedIdx - 1)),
                    J(v),
                    B.preventDefault(),
                    B.stopPropagation()
                  );
                case Pe.ARROW_RIGHT:
                case Pe.ARROW_DOWN:
                  return (
                    (v.selectedIdx = Math.min(
                      v.links.length - 1,
                      v.selectedIdx + 1
                    )),
                    J(v),
                    B.preventDefault(),
                    B.stopPropagation()
                  );
              }
          };
        }
        function J(v) {
          if (v.links[v.selectedIdx]) {
            var B = v.links[v.selectedIdx];
            B.focus(), Y(B);
          }
        }
        function re(v) {
          v.open && (oe(v, !0), ie(v, !0));
        }
        function W(v) {
          return a(function () {
            v.open ? oe(v) : ie(v);
          });
        }
        function Y(v) {
          return function (B) {
            var Z = e(this),
              K = Z.attr("href");
            if (!Lt.validClick(B.currentTarget)) {
              B.preventDefault();
              return;
            }
            K && K.indexOf("#") === 0 && v.open && oe(v);
          };
        }
        function d(v) {
          return (
            v.outside && i.off("click" + I, v.outside),
            function (B) {
              var Z = e(B.target);
              (y && Z.closest(".w-editor-bem-EditorOverlay").length) || g(v, Z);
            }
          );
        }
        var g = a(function (v, B) {
          if (v.open) {
            var Z = B.closest(".w-nav-menu");
            v.menu.is(Z) || oe(v);
          }
        });
        function E(v, B) {
          var Z = e.data(B, I),
            K = (Z.collapsed = Z.button.css("display") !== "none");
          if ((Z.open && !K && !p && oe(Z, !0), Z.container.length)) {
            var he = G(Z);
            Z.links.each(he), Z.dropdowns.each(he);
          }
          Z.open && ve(Z);
        }
        var l = "max-width";
        function G(v) {
          var B = v.container.css(l);
          return (
            B === "none" && (B = ""),
            function (Z, K) {
              (K = e(K)), K.css(l, ""), K.css(l) === "none" && K.css(l, B);
            }
          );
        }
        function k(v, B) {
          B.setAttribute("data-nav-menu-open", "");
        }
        function w(v, B) {
          B.removeAttribute("data-nav-menu-open");
        }
        function ie(v, B) {
          if (v.open) return;
          (v.open = !0),
            v.menu.each(k),
            v.links.addClass(x),
            v.dropdowns.addClass(A),
            v.dropdownToggle.addClass(F),
            v.dropdownList.addClass(N),
            v.button.addClass(R);
          var Z = v.config,
            K = Z.animation;
          (K === "none" || !n.support.transform || Z.duration <= 0) && (B = !0);
          var he = ve(v),
            Xe = v.menu.outerHeight(!0),
            ze = v.menu.outerWidth(!0),
            f = v.el.height(),
            _ = v.el[0];
          if (
            (E(0, _),
            S.intro(0, _),
            Lt.redraw.up(),
            p || i.on("click" + I, v.outside),
            B)
          ) {
            T();
            return;
          }
          var b = "transform " + Z.duration + "ms " + Z.easing;
          if (
            (v.overlay &&
              ((P = v.menu.prev()), v.overlay.show().append(v.menu)),
            Z.animOver)
          ) {
            n(v.menu)
              .add(b)
              .set({ x: Z.animDirect * ze, height: he })
              .start({ x: 0 })
              .then(T),
              v.overlay && v.overlay.width(ze);
            return;
          }
          var C = f + Xe;
          n(v.menu).add(b).set({ y: -C }).start({ y: 0 }).then(T);
          function T() {
            v.button.attr("aria-expanded", "true");
          }
        }
        function ve(v) {
          var B = v.config,
            Z = B.docHeight ? i.height() : s.height();
          return (
            B.animOver
              ? v.menu.height(Z)
              : v.el.css("position") !== "fixed" && (Z -= v.el.outerHeight(!0)),
            v.overlay && v.overlay.height(Z),
            Z
          );
        }
        function oe(v, B) {
          if (!v.open) return;
          (v.open = !1), v.button.removeClass(R);
          var Z = v.config;
          if (
            ((Z.animation === "none" ||
              !n.support.transform ||
              Z.duration <= 0) &&
              (B = !0),
            S.outro(0, v.el[0]),
            i.off("click" + I, v.outside),
            B)
          ) {
            n(v.menu).stop(), _();
            return;
          }
          var K = "transform " + Z.duration + "ms " + Z.easing2,
            he = v.menu.outerHeight(!0),
            Xe = v.menu.outerWidth(!0),
            ze = v.el.height();
          if (Z.animOver) {
            n(v.menu)
              .add(K)
              .start({ x: Xe * Z.animDirect })
              .then(_);
            return;
          }
          var f = ze + he;
          n(v.menu).add(K).start({ y: -f }).then(_);
          function _() {
            v.menu.height(""),
              n(v.menu).set({ x: 0, y: 0 }),
              v.menu.each(w),
              v.links.removeClass(x),
              v.dropdowns.removeClass(A),
              v.dropdownToggle.removeClass(F),
              v.dropdownList.removeClass(N),
              v.overlay &&
                v.overlay.children().length &&
                (P.length ? v.menu.insertAfter(P) : v.menu.prependTo(v.parent),
                v.overlay.attr("style", "").hide()),
              v.el.triggerHandler("w-close"),
              v.button.attr("aria-expanded", "false");
          }
        }
        return r;
      })
    );
  });
  var vm = u((pK, pm) => {
    var Pt = Ve(),
      fV = wr(),
      Et = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      },
      dm =
        'a[href], area[href], [role="button"], input, select, textarea, button, iframe, object, embed, *[tabindex], *[contenteditable]';
    Pt.define(
      "slider",
      (pm.exports = function (e, t) {
        var r = {},
          n = e.tram,
          o = e(document),
          i,
          a,
          s = Pt.env(),
          c = ".w-slider",
          p = '<div class="w-slider-dot" data-wf-ignore />',
          y =
            '<div aria-live="off" aria-atomic="true" class="w-slider-aria-label" data-wf-ignore />',
          h = "w-slider-force-show",
          m = fV.triggers,
          I,
          R = !1;
        (r.ready = function () {
          (a = Pt.env("design")), A();
        }),
          (r.design = function () {
            (a = !0), setTimeout(A, 1e3);
          }),
          (r.preview = function () {
            (a = !1), A();
          }),
          (r.redraw = function () {
            (R = !0), A(), (R = !1);
          }),
          (r.destroy = F);
        function A() {
          (i = o.find(c)), i.length && (i.each(S), !I && (F(), N()));
        }
        function F() {
          Pt.resize.off(x), Pt.redraw.off(r.redraw);
        }
        function N() {
          Pt.resize.on(x), Pt.redraw.on(r.redraw);
        }
        function x() {
          i.filter(":visible").each(j);
        }
        function S(d, g) {
          var E = e(g),
            l = e.data(g, c);
          l ||
            (l = e.data(g, c, {
              index: 0,
              depth: 1,
              hasFocus: { keyboard: !1, mouse: !1 },
              el: E,
              config: {},
            })),
            (l.mask = E.children(".w-slider-mask")),
            (l.left = E.children(".w-slider-arrow-left")),
            (l.right = E.children(".w-slider-arrow-right")),
            (l.nav = E.children(".w-slider-nav")),
            (l.slides = l.mask.children(".w-slide")),
            l.slides.each(m.reset),
            R && (l.maskWidth = 0),
            E.attr("role") === void 0 && E.attr("role", "region"),
            E.attr("aria-label") === void 0 && E.attr("aria-label", "carousel");
          var G = l.mask.attr("id");
          if (
            (G || ((G = "w-slider-mask-" + d), l.mask.attr("id", G)),
            !a && !l.ariaLiveLabel && (l.ariaLiveLabel = e(y).appendTo(l.mask)),
            l.left.attr("role", "button"),
            l.left.attr("tabindex", "0"),
            l.left.attr("aria-controls", G),
            l.left.attr("aria-label") === void 0 &&
              l.left.attr("aria-label", "previous slide"),
            l.right.attr("role", "button"),
            l.right.attr("tabindex", "0"),
            l.right.attr("aria-controls", G),
            l.right.attr("aria-label") === void 0 &&
              l.right.attr("aria-label", "next slide"),
            !n.support.transform)
          ) {
            l.left.hide(), l.right.hide(), l.nav.hide(), (I = !0);
            return;
          }
          l.el.off(c),
            l.left.off(c),
            l.right.off(c),
            l.nav.off(c),
            P(l),
            a
              ? (l.el.on("setting" + c, O(l)), U(l), (l.hasTimer = !1))
              : (l.el.on("swipe" + c, O(l)),
                l.left.on("click" + c, Q(l)),
                l.right.on("click" + c, $(l)),
                l.left.on("keydown" + c, H(l, Q)),
                l.right.on("keydown" + c, H(l, $)),
                l.nav.on("keydown" + c, "> div", O(l)),
                l.config.autoplay &&
                  !l.hasTimer &&
                  ((l.hasTimer = !0), (l.timerCount = 1), te(l)),
                l.el.on("mouseenter" + c, M(l, !0, "mouse")),
                l.el.on("focusin" + c, M(l, !0, "keyboard")),
                l.el.on("mouseleave" + c, M(l, !1, "mouse")),
                l.el.on("focusout" + c, M(l, !1, "keyboard"))),
            l.nav.on("click" + c, "> div", O(l)),
            s ||
              l.mask
                .contents()
                .filter(function () {
                  return this.nodeType === 3;
                })
                .remove();
          var k = E.filter(":hidden");
          k.addClass(h);
          var w = E.parents(":hidden");
          w.addClass(h), R || j(d, g), k.removeClass(h), w.removeClass(h);
        }
        function P(d) {
          var g = {};
          (g.crossOver = 0),
            (g.animation = d.el.attr("data-animation") || "slide"),
            g.animation === "outin" &&
              ((g.animation = "cross"), (g.crossOver = 0.5)),
            (g.easing = d.el.attr("data-easing") || "ease");
          var E = d.el.attr("data-duration");
          if (
            ((g.duration = E != null ? parseInt(E, 10) : 500),
            L(d.el.attr("data-infinite")) && (g.infinite = !0),
            L(d.el.attr("data-disable-swipe")) && (g.disableSwipe = !0),
            L(d.el.attr("data-hide-arrows"))
              ? (g.hideArrows = !0)
              : d.config.hideArrows && (d.left.show(), d.right.show()),
            L(d.el.attr("data-autoplay")))
          ) {
            (g.autoplay = !0),
              (g.delay = parseInt(d.el.attr("data-delay"), 10) || 2e3),
              (g.timerMax = parseInt(d.el.attr("data-autoplay-limit"), 10));
            var l = "mousedown" + c + " touchstart" + c;
            a ||
              d.el.off(l).one(l, function () {
                U(d);
              });
          }
          var G = d.right.width();
          (g.edge = G ? G + 40 : 100), (d.config = g);
        }
        function L(d) {
          return d === "1" || d === "true";
        }
        function M(d, g, E) {
          return function (l) {
            if (g) d.hasFocus[E] = g;
            else if (
              e.contains(d.el.get(0), l.relatedTarget) ||
              ((d.hasFocus[E] = g),
              (d.hasFocus.mouse && E === "keyboard") ||
                (d.hasFocus.keyboard && E === "mouse"))
            )
              return;
            g
              ? (d.ariaLiveLabel.attr("aria-live", "polite"),
                d.hasTimer && U(d))
              : (d.ariaLiveLabel.attr("aria-live", "off"), d.hasTimer && te(d));
          };
        }
        function H(d, g) {
          return function (E) {
            switch (E.keyCode) {
              case Et.SPACE:
              case Et.ENTER:
                return g(d)(), E.preventDefault(), E.stopPropagation();
            }
          };
        }
        function Q(d) {
          return function () {
            V(d, { index: d.index - 1, vector: -1 });
          };
        }
        function $(d) {
          return function () {
            V(d, { index: d.index + 1, vector: 1 });
          };
        }
        function ae(d, g) {
          var E = null;
          g === d.slides.length && (A(), J(d)),
            t.each(d.anchors, function (l, G) {
              e(l.els).each(function (k, w) {
                e(w).index() === g && (E = G);
              });
            }),
            E != null && V(d, { index: E, immediate: !0 });
        }
        function te(d) {
          U(d);
          var g = d.config,
            E = g.timerMax;
          (E && d.timerCount++ > E) ||
            (d.timerId = window.setTimeout(function () {
              d.timerId == null || a || ($(d)(), te(d));
            }, g.delay));
        }
        function U(d) {
          window.clearTimeout(d.timerId), (d.timerId = null);
        }
        function O(d) {
          return function (g, E) {
            E = E || {};
            var l = d.config;
            if (a && g.type === "setting") {
              if (E.select === "prev") return Q(d)();
              if (E.select === "next") return $(d)();
              if ((P(d), J(d), E.select == null)) return;
              ae(d, E.select);
              return;
            }
            if (g.type === "swipe")
              return l.disableSwipe || Pt.env("editor")
                ? void 0
                : E.direction === "left"
                ? $(d)()
                : E.direction === "right"
                ? Q(d)()
                : void 0;
            if (d.nav.has(g.target).length) {
              var G = e(g.target).index();
              if (
                (g.type === "click" && V(d, { index: G }), g.type === "keydown")
              )
                switch (g.keyCode) {
                  case Et.ENTER:
                  case Et.SPACE: {
                    V(d, { index: G }), g.preventDefault();
                    break;
                  }
                  case Et.ARROW_LEFT:
                  case Et.ARROW_UP: {
                    X(d.nav, Math.max(G - 1, 0)), g.preventDefault();
                    break;
                  }
                  case Et.ARROW_RIGHT:
                  case Et.ARROW_DOWN: {
                    X(d.nav, Math.min(G + 1, d.pages)), g.preventDefault();
                    break;
                  }
                  case Et.HOME: {
                    X(d.nav, 0), g.preventDefault();
                    break;
                  }
                  case Et.END: {
                    X(d.nav, d.pages), g.preventDefault();
                    break;
                  }
                  default:
                    return;
                }
            }
          };
        }
        function X(d, g) {
          var E = d.children().eq(g).focus();
          d.children().not(E);
        }
        function V(d, g) {
          g = g || {};
          var E = d.config,
            l = d.anchors;
          d.previous = d.index;
          var G = g.index,
            k = {};
          G < 0
            ? ((G = l.length - 1),
              E.infinite &&
                ((k.x = -d.endX), (k.from = 0), (k.to = l[0].width)))
            : G >= l.length &&
              ((G = 0),
              E.infinite &&
                ((k.x = l[l.length - 1].width),
                (k.from = -l[l.length - 1].x),
                (k.to = k.from - k.x))),
            (d.index = G);
          var w = d.nav
            .children()
            .eq(G)
            .addClass("w-active")
            .attr("aria-pressed", "true")
            .attr("tabindex", "0");
          d.nav
            .children()
            .not(w)
            .removeClass("w-active")
            .attr("aria-pressed", "false")
            .attr("tabindex", "-1"),
            E.hideArrows &&
              (d.index === l.length - 1 ? d.right.hide() : d.right.show(),
              d.index === 0 ? d.left.hide() : d.left.show());
          var ie = d.offsetX || 0,
            ve = (d.offsetX = -l[d.index].x),
            oe = { x: ve, opacity: 1, visibility: "" },
            v = e(l[d.index].els),
            B = e(l[d.previous] && l[d.previous].els),
            Z = d.slides.not(v),
            K = E.animation,
            he = E.easing,
            Xe = Math.round(E.duration),
            ze = g.vector || (d.index > d.previous ? 1 : -1),
            f = "opacity " + Xe + "ms " + he,
            _ = "transform " + Xe + "ms " + he;
          if (
            (v.find(dm).removeAttr("tabindex"),
            v.removeAttr("aria-hidden"),
            v.find("*").removeAttr("aria-hidden"),
            Z.find(dm).attr("tabindex", "-1"),
            Z.attr("aria-hidden", "true"),
            Z.find("*").attr("aria-hidden", "true"),
            a || (v.each(m.intro), Z.each(m.outro)),
            g.immediate && !R)
          ) {
            n(v).set(oe), T();
            return;
          }
          if (d.index === d.previous) return;
          if (
            (a || d.ariaLiveLabel.text(`Slide ${G + 1} of ${l.length}.`),
            K === "cross")
          ) {
            var b = Math.round(Xe - Xe * E.crossOver),
              C = Math.round(Xe - b);
            (f = "opacity " + b + "ms " + he),
              n(B).set({ visibility: "" }).add(f).start({ opacity: 0 }),
              n(v)
                .set({ visibility: "", x: ve, opacity: 0, zIndex: d.depth++ })
                .add(f)
                .wait(C)
                .then({ opacity: 1 })
                .then(T);
            return;
          }
          if (K === "fade") {
            n(B).set({ visibility: "" }).stop(),
              n(v)
                .set({ visibility: "", x: ve, opacity: 0, zIndex: d.depth++ })
                .add(f)
                .start({ opacity: 1 })
                .then(T);
            return;
          }
          if (K === "over") {
            (oe = { x: d.endX }),
              n(B).set({ visibility: "" }).stop(),
              n(v)
                .set({
                  visibility: "",
                  zIndex: d.depth++,
                  x: ve + l[d.index].width * ze,
                })
                .add(_)
                .start({ x: ve })
                .then(T);
            return;
          }
          E.infinite && k.x
            ? (n(d.slides.not(B))
                .set({ visibility: "", x: k.x })
                .add(_)
                .start({ x: ve }),
              n(B).set({ visibility: "", x: k.from }).add(_).start({ x: k.to }),
              (d.shifted = B))
            : (E.infinite &&
                d.shifted &&
                (n(d.shifted).set({ visibility: "", x: ie }),
                (d.shifted = null)),
              n(d.slides).set({ visibility: "" }).add(_).start({ x: ve }));
          function T() {
            (v = e(l[d.index].els)),
              (Z = d.slides.not(v)),
              K !== "slide" && (oe.visibility = "hidden"),
              n(Z).set(oe);
          }
        }
        function j(d, g) {
          var E = e.data(g, c);
          if (E) {
            if (W(E)) return J(E);
            a && Y(E) && J(E);
          }
        }
        function J(d) {
          var g = 1,
            E = 0,
            l = 0,
            G = 0,
            k = d.maskWidth,
            w = k - d.config.edge;
          w < 0 && (w = 0),
            (d.anchors = [{ els: [], x: 0, width: 0 }]),
            d.slides.each(function (ve, oe) {
              l - E > w &&
                (g++,
                (E += k),
                (d.anchors[g - 1] = { els: [], x: l, width: 0 })),
                (G = e(oe).outerWidth(!0)),
                (l += G),
                (d.anchors[g - 1].width += G),
                d.anchors[g - 1].els.push(oe);
              var v = ve + 1 + " of " + d.slides.length;
              e(oe).attr("aria-label", v), e(oe).attr("role", "group");
            }),
            (d.endX = l),
            a && (d.pages = null),
            d.nav.length && d.pages !== g && ((d.pages = g), re(d));
          var ie = d.index;
          ie >= g && (ie = g - 1), V(d, { immediate: !0, index: ie });
        }
        function re(d) {
          var g = [],
            E,
            l = d.el.attr("data-nav-spacing");
          l && (l = parseFloat(l) + "px");
          for (var G = 0, k = d.pages; G < k; G++)
            (E = e(p)),
              E.attr("aria-label", "Show slide " + (G + 1) + " of " + k)
                .attr("aria-pressed", "false")
                .attr("role", "button")
                .attr("tabindex", "-1"),
              d.nav.hasClass("w-num") && E.text(G + 1),
              l != null && E.css({ "margin-left": l, "margin-right": l }),
              g.push(E);
          d.nav.empty().append(g);
        }
        function W(d) {
          var g = d.mask.width();
          return d.maskWidth !== g ? ((d.maskWidth = g), !0) : !1;
        }
        function Y(d) {
          var g = 0;
          return (
            d.slides.each(function (E, l) {
              g += e(l).outerWidth(!0);
            }),
            d.slidesWidth !== g ? ((d.slidesWidth = g), !0) : !1
          );
        }
        return r;
      })
    );
  });
  Ps();
  Ms();
  Gs();
  Ws();
  wr();
  $y();
  Jy();
  tm();
  nm();
  am();
  cm();
  fm();
  vm();
})();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Test._ (aka) Underscore.js 1.6.0 (custom build)
 * _.each
 * _.map
 * _.find
 * _.filter
 * _.any
 * _.contains
 * _.delay
 * _.defer
 * _.throttle (webflow)
 * _.debounce
 * _.keys
 * _.has
 * _.now
 * _.template (webflow: upgraded to 1.13.6)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/
/**
 * ----------------------------------------------------------------------
 * Test: Interactions 2.0: Init
 */
Test.require("ix2").init({
  events: {
    e: {
      id: "e",
      name: "",
      animationType: "preset",
      eventTypeId: "NAVBAR_OPEN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-7",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-2",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "|decc2f10-68fe-4ce5-4ea8-6eb2971ee53d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "|decc2f10-68fe-4ce5-4ea8-6eb2971ee53d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1636940933481,
    },
    "e-2": {
      id: "e-2",
      name: "",
      animationType: "preset",
      eventTypeId: "NAVBAR_CLOSE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-8",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "|decc2f10-68fe-4ce5-4ea8-6eb2971ee53d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "|decc2f10-68fe-4ce5-4ea8-6eb2971ee53d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1636940933481,
    },
    "e-3": {
      id: "e-3",
      name: "",
      animationType: "preset",
      eventTypeId: "DROPDOWN_OPEN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-4",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "|elemento9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "|elemento9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1663893509906,
    },
    "e-4": {
      id: "e-4",
      name: "",
      animationType: "preset",
      eventTypeId: "DROPDOWN_CLOSE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-3",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "|elemento9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "|elemento9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1663893509906,
    },
    "e-5": {
      id: "e-5",
      name: "",
      animationType: "preset",
      eventTypeId: "DROPDOWN_OPEN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-6",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "|elemento9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "|elemento9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1663893509906,
    },
    "e-6": {
      id: "e-6",
      name: "",
      animationType: "preset",
      eventTypeId: "DROPDOWN_CLOSE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-5",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "|elemento9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "|elemento9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1663893509906,
    },
    "e-7": {
      id: "e-7",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-14",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-8",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "|elemento00f",/*aca00f*/
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "|elemento00f",/*aca00f*/
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1637125269846,
    },
    "e-9": {
      id: "e-9",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-13",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-10",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "|elemento01e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "|elemento01e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1637126188484,
    },
    "e-11": {
      id: "e-11",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-15",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-12",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "|elemento01f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "|elemento01f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1637125269846,
    },
    "e-13": {
      id: "e-13",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-14",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-14",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "|elemento1ba",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "|elemento1ba",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1665093603294,
    },
    "e-15": {
      id: "e-15",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-13",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-16",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "|elemento1c6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "|elemento1c6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1665076683139,
    },
    "e-19": {
      id: "e-19",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-34",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-20",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "|elemento2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "|elemento2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1637542834992,
    },
    "e-21": {
      id: "e-21",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-14",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-22",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "|elemento34",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "|elemento34",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1637283357696,
    },
    "e-23": {
      id: "e-23",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-13",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-24",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "|elemento36",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "|elemento36",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1664243227357,
    },
    "e-25": {
      id: "e-25",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-16",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-26",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "|elemento3c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "|elemento3c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1637283357696,
    },
    "e-27": {
      id: "e-27",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-34",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-28",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "|elemento3d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "|elemento3d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1637283357696,
    },
    "e-29": {
      id: "e-29",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-14",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-30",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "|elemento45d7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "|elemento45d7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1637216367924,
    },
    "e-31": {
      id: "e-31",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-13",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-32",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "|elemento45df",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "|elemento45df",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1637216379790,
    },
  },
  actionLists: {
    "a-7": {
      id: "a-7",
      title: "ðŸ” BRIX - Hamburger Menu - Opens",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-7-n",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".prefix---hamburger-menu-bar-top",
                  selectorGuids: ["6463d06b-ba63-e796-d910-866321cba891"],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-7-n-2",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".prefix---hamburger-menu-bar-bottom",
                  selectorGuids: ["6463d06b-ba63-e796-d910-866321cba890"],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-7-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".prefix---hamburger-menu-bar-bottom",
                  selectorGuids: ["6463d06b-ba63-e796-d910-866321cba890"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-7-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".prefix---hamburger-menu-bar-top",
                  selectorGuids: ["6463d06b-ba63-e796-d910-866321cba891"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-7-n-5",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".prefix---hamburger-menu-bar-top",
                  selectorGuids: ["6463d06b-ba63-e796-d910-866321cba891"],
                },
                zValue: 135,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-7-n-6",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".prefix---hamburger-menu-bar-bottom",
                  selectorGuids: ["6463d06b-ba63-e796-d910-866321cba890"],
                },
                zValue: 45,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-7-n-7",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".prefix---hamburger-menu-bar-bottom",
                  selectorGuids: ["6463d06b-ba63-e796-d910-866321cba890"],
                },
                yValue: -7,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-7-n-8",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".prefix---hamburger-menu-bar-top",
                  selectorGuids: ["6463d06b-ba63-e796-d910-866321cba891"],
                },
                yValue: 8,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1636864366516,
    },
    "a-8": {
      id: "a-8",
      title: "ðŸ” BRIX - Hamburger Menu - Closes",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-8-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".prefix---hamburger-menu-bar-top",
                  selectorGuids: ["6463d06b-ba63-e796-d910-866321cba891"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-8-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".prefix---hamburger-menu-bar-bottom",
                  selectorGuids: ["6463d06b-ba63-e796-d910-866321cba890"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-8-n-3",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".prefix---hamburger-menu-bar-bottom",
                  selectorGuids: ["6463d06b-ba63-e796-d910-866321cba890"],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-8-n-4",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".prefix---hamburger-menu-bar-top",
                  selectorGuids: ["6463d06b-ba63-e796-d910-866321cba891"],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1636864667872,
    },
    a: {
      id: "a",
      title: "â¬‡ï¸ ðŸ–¥ BRIX - Dropdown Opens - Desktop",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-n",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".prefix---dropdown-chevron",
                  selectorGuids: ["6463d06b-ba63-e796-d910-866321cba885"],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-n-2",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".prefix---dropdown-card",
                  selectorGuids: ["6463d06b-ba63-e796-d910-866321cba883"],
                },
                heightValue: 0,
                widthUnit: "PX",
                heightUnit: "px",
                locked: false,
              },
            },
            {
              id: "a-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".prefix---dropdown-card",
                  selectorGuids: ["6463d06b-ba63-e796-d910-866321cba883"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".prefix---dropdown-card",
                  selectorGuids: ["6463d06b-ba63-e796-d910-866321cba883"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-n-5",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".prefix---dropdown-chevron",
                  selectorGuids: ["6463d06b-ba63-e796-d910-866321cba885"],
                },
                zValue: -180,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-n-6",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "inOutQuad",
                duration: 200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".prefix---dropdown-card",
                  selectorGuids: ["6463d06b-ba63-e796-d910-866321cba883"],
                },
                widthUnit: "PX",
                heightUnit: "AUTO",
                locked: false,
              },
            },
            {
              id: "a-n-7",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 200,
                easing: "ease",
                duration: 200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".prefix---dropdown-card",
                  selectorGuids: ["6463d06b-ba63-e796-d910-866321cba883"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1636862239424,
    },
    "a-2": {
      id: "a-2",
      title: "â¬†ï¸ðŸ–¥ BRIX -  Dropdown Closes - Desktop",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-2-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".prefix---dropdown-card",
                  selectorGuids: ["6463d06b-ba63-e796-d910-866321cba883"],
                },
                yValue: 10,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-2-n-2",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".prefix---dropdown-chevron",
                  selectorGuids: ["6463d06b-ba63-e796-d910-866321cba885"],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-2-n-3",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".prefix---dropdown-card",
                  selectorGuids: ["6463d06b-ba63-e796-d910-866321cba883"],
                },
                heightValue: 0,
                widthUnit: "PX",
                heightUnit: "px",
                locked: false,
              },
            },
            {
              id: "a-2-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 200,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".prefix---dropdown-card",
                  selectorGuids: ["6463d06b-ba63-e796-d910-866321cba883"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1636862654345,
    },
    "a-5": {
      id: "a-5",
      title: "â¬‡ï¸ ðŸ“± BRIX - Dropdown Opens - Tablet",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-5-n",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".prefix---dropdown-card",
                  selectorGuids: ["6463d06b-ba63-e796-d910-866321cba883"],
                },
                value: "none",
              },
            },
            {
              id: "a-5-n-2",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".prefix---dropdown-chevron",
                  selectorGuids: ["6463d06b-ba63-e796-d910-866321cba885"],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-5-n-3",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".prefix---dropdown-card",
                  selectorGuids: ["6463d06b-ba63-e796-d910-866321cba883"],
                },
                heightValue: 0,
                widthUnit: "PX",
                heightUnit: "px",
                locked: false,
              },
            },
            {
              id: "a-5-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".prefix---dropdown-card",
                  selectorGuids: ["6463d06b-ba63-e796-d910-866321cba883"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-5-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".prefix---dropdown-card",
                  selectorGuids: ["6463d06b-ba63-e796-d910-866321cba883"],
                },
                xValue: null,
                yValue: 10,
                xUnit: "%",
                yUnit: "px",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-5-n-6",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".prefix---dropdown-card",
                  selectorGuids: ["6463d06b-ba63-e796-d910-866321cba883"],
                },
                value: "block",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-5-n-7",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".prefix---dropdown-card",
                  selectorGuids: ["6463d06b-ba63-e796-d910-866321cba883"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-5-n-8",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".prefix---dropdown-chevron",
                  selectorGuids: ["6463d06b-ba63-e796-d910-866321cba885"],
                },
                zValue: -180,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-5-n-9",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "inOutQuad",
                duration: 200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".prefix---dropdown-card",
                  selectorGuids: ["6463d06b-ba63-e796-d910-866321cba883"],
                },
                widthUnit: "PX",
                heightUnit: "AUTO",
                locked: false,
              },
            },
            {
              id: "a-5-n-10",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 200,
                easing: "ease",
                duration: 200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".prefix---dropdown-card",
                  selectorGuids: ["6463d06b-ba63-e796-d910-866321cba883"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1636862239424,
    },
    "a-6": {
      id: "a-6",
      title: "â¬†ï¸ðŸ“± BRIX - Dropdown Closes - Tablet",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-6-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".prefix---dropdown-card",
                  selectorGuids: ["6463d06b-ba63-e796-d910-866321cba883"],
                },
                yValue: 10,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-6-n-2",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".prefix---dropdown-chevron",
                  selectorGuids: ["6463d06b-ba63-e796-d910-866321cba885"],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-6-n-3",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".prefix---dropdown-card",
                  selectorGuids: ["6463d06b-ba63-e796-d910-866321cba883"],
                },
                heightValue: 0,
                widthUnit: "PX",
                heightUnit: "px",
                locked: false,
              },
            },
            {
              id: "a-6-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 200,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".prefix---dropdown-card",
                  selectorGuids: ["6463d06b-ba63-e796-d910-866321cba883"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-6-n-5",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 300,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".prefix---dropdown-card",
                  selectorGuids: ["6463d06b-ba63-e796-d910-866321cba883"],
                },
                value: "none",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1636862654345,
    },
    "a-14": {
      id: "a-14",
      title: "â˜ï¸ BRIX - Slide To Top - 0.2s",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-14-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "2b842a8b-4216-fa87-f566-5c75c66b381a",
                },
                yValue: 10,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-14-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "2b842a8b-4216-fa87-f566-5c75c66b381a",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-14-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 200,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "2b842a8b-4216-fa87-f566-5c75c66b381a",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-14-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 200,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "2b842a8b-4216-fa87-f566-5c75c66b381a",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1637117977426,
    },
    "a-13": {
      id: "a-13",
      title: "â˜ï¸ BRIX - Slide To Top - 0.4s",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-13-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "2b842a8b-4216-fa87-f566-5c75c66b381a",
                },
                yValue: 10,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-13-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "2b842a8b-4216-fa87-f566-5c75c66b381a",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-13-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 400,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "2b842a8b-4216-fa87-f566-5c75c66b381a",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-13-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 400,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "2b842a8b-4216-fa87-f566-5c75c66b381a",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1637117977426,
    },
    "a-15": {
      id: "a-15",
      title: "ðŸ‘» BRIX - Fade In - 0.5s",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-15-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "2b842a8b-4216-fa87-f566-5c75c66b382d",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-15-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 500,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "2b842a8b-4216-fa87-f566-5c75c66b382d",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1637118496510,
    },
    "a-34": {
      id: "a-34",
      title: "ðŸ‘» BRIX - Fade In - 0.4s",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-34-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "2b842a8b-4216-fa87-f566-5c75c66b382d",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-34-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 400,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "2b842a8b-4216-fa87-f566-5c75c66b382d",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1637118496510,
    },
    "a-16": {
      id: "a-16",
      title: "ðŸ‘» BRIX - Fade In - 0.3s",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-16-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "2b842a8b-4216-fa87-f566-5c75c66b382d",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-16-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 300,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "2b842a8b-4216-fa87-f566-5c75c66b382d",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1637118496510,
    },
  },
  site: {
    mediaQueries: [
      { key: "main", min: 992, max: 10000 },
      { key: "medium", min: 768, max: 991 },
      { key: "small", min: 480, max: 767 },
      { key: "tiny", min: 0, max: 479 },
    ],
  },
});
