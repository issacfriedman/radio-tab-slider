parcelRequire = (function (e, r, t, n) {
  var i,
    o = "function" == typeof parcelRequire && parcelRequire,
    u = "function" == typeof require && require;
  function f(t, n) {
    if (!r[t]) {
      if (!e[t]) {
        var i = "function" == typeof parcelRequire && parcelRequire;
        if (!n && i) return i(t, !0);
        if (o) return o(t, !0);
        if (u && "string" == typeof t) return u(t);
        var c = new Error("Cannot find module '" + t + "'");
        throw ((c.code = "MODULE_NOT_FOUND"), c);
      }
      (p.resolve = function (r) {
        return e[t][1][r] || r;
      }),
        (p.cache = {});
      var l = (r[t] = new f.Module(t));
      e[t][0].call(l.exports, p, l, l.exports, this);
    }
    return r[t].exports;
    function p(e) {
      return f(p.resolve(e));
    }
  }
  (f.isParcelRequire = !0),
    (f.Module = function (e) {
      (this.id = e), (this.bundle = f), (this.exports = {});
    }),
    (f.modules = e),
    (f.cache = r),
    (f.parent = o),
    (f.register = function (r, t) {
      e[r] = [
        function (e, r) {
          r.exports = t;
        },
        {},
      ];
    });
  for (var c = 0; c < t.length; c++)
    try {
      f(t[c]);
    } catch (e) {
      i || (i = e);
    }
  if (t.length) {
    var l = f(t[t.length - 1]);
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = l)
      : "function" == typeof define && define.amd
      ? define(function () {
          return l;
        })
      : n && (this[n] = l);
  }
  if (((parcelRequire = f), i)) throw i;
  return f;
})(
  {
    Focm: [
      function (require, module, exports) {
        function e(e) {
          return t(e) || o(e) || F(e) || r();
        }
        function r() {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        function o(e) {
          if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
            return Array.from(e);
        }
        function t(e) {
          if (Array.isArray(e)) return l(e);
        }
        function n(e, r) {
          return u(e) || i(e, r) || F(e, r) || a();
        }
        function a() {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        function F(e, r) {
          if (e) {
            if ("string" == typeof e) return l(e, r);
            var o = Object.prototype.toString.call(e).slice(8, -1);
            return (
              "Object" === o && e.constructor && (o = e.constructor.name),
              "Map" === o || "Set" === o
                ? Array.from(e)
                : "Arguments" === o ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)
                ? l(e, r)
                : void 0
            );
          }
        }
        function l(e, r) {
          (null == r || r > e.length) && (r = e.length);
          for (var o = 0, t = new Array(r); o < r; o++) t[o] = e[o];
          return t;
        }
        function i(e, r) {
          if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
            var o = [],
              t = !0,
              n = !1,
              a = void 0;
            try {
              for (
                var F, l = e[Symbol.iterator]();
                !(t = (F = l.next()).done) &&
                (o.push(F.value), !r || o.length !== r);
                t = !0
              );
            } catch (i) {
              (n = !0), (a = i);
            } finally {
              try {
                t || null == l.return || l.return();
              } finally {
                if (n) throw a;
              }
            }
            return o;
          }
        }
        function u(e) {
          if (Array.isArray(e)) return e;
        }
        function d(e, r) {
          var o = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var t = Object.getOwnPropertySymbols(e);
            r &&
              (t = t.filter(function (r) {
                return Object.getOwnPropertyDescriptor(e, r).enumerable;
              })),
              o.push.apply(o, t);
          }
          return o;
        }
        function c(e) {
          for (var r = 1; r < arguments.length; r++) {
            var o = null != arguments[r] ? arguments[r] : {};
            r % 2
              ? d(Object(o), !0).forEach(function (r) {
                  s(e, r, o[r]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o))
              : d(Object(o)).forEach(function (r) {
                  Object.defineProperty(
                    e,
                    r,
                    Object.getOwnPropertyDescriptor(o, r)
                  );
                });
          }
          return e;
        }
        function s(e, r, o) {
          return (
            r in e
              ? Object.defineProperty(e, r, {
                  value: o,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[r] = o),
            e
          );
        }
        function g(e, r) {
          if (!(e instanceof r))
            throw new TypeError("Cannot call a class as a function");
        }
        var m = [
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "A",
            "B",
            "C",
            "D",
            "E",
            "F",
          ],
          h = {
            aliceblue: "#F0F8FF",
            antiquewhite: "#FAEBD7",
            aqua: "#00FFFF",
            aquamarine: "#7FFFD4",
            azure: "#F0FFFF",
            beige: "#F5F5DC",
            bisque: "#FFE4C4",
            black: "#000000",
            blanchedalmond: "#FFEBCD",
            blue: "#0000FF",
            blueviolet: "#8A2BE2",
            brown: "#A52A2A",
            burlywood: "#DEB887",
            cadetblue: "#5F9EA0",
            chartreuse: "#7FFF00",
            chocolate: "#D2691E",
            coral: "#FF7F50",
            cornflowerblue: "#6495ED",
            cornsilk: "#FFF8DC",
            crimson: "#DC143C",
            cyan: "#00FFFF",
            darkblue: "#00008B",
            darkcyan: "#008B8B",
            darkgoldenrod: "#B8860B",
            darkgray: "#A9A9A9",
            darkgreen: "#006400",
            darkgrey: "#A9A9A9",
            darkkhaki: "#BDB76B",
            darkmagenta: "#8B008B",
            darkolivegreen: "#556B2F",
            darkorange: "#FF8C00",
            darkorchid: "#9932CC",
            darkred: "#8B0000",
            darksalmon: "#E9967A",
            darkseagreen: "#8FBC8F",
            darkslateblue: "#483D8B",
            darkslategray: "#2F4F4F",
            darkslategrey: "#2F4F4F",
            darkturquoise: "#00CED1",
            darkviolet: "#9400D3",
            deeppink: "#FF1493",
            deepskyblue: "#00BFFF",
            dimgray: "#696969",
            dimgrey: "#696969",
            dodgerblue: "#1E90FF",
            firebrick: "#B22222",
            floralwhite: "#FFFAF0",
            forestgreen: "#228B22",
            fuchsia: "#FF00FF",
            gainsboro: "#DCDCDC",
            ghostwhite: "#F8F8FF",
            gold: "#FFD700",
            goldenrod: "#DAA520",
            gray: "#808080",
            green: "#008000",
            greenyellow: "#ADFF2F",
            grey: "#808080",
            honeydew: "#F0FFF0",
            hotpink: "#FF69B4",
            indianred: "#CD5C5C",
            indigo: "#4B0082",
            ivory: "#FFFFF0",
            khaki: "#F0E68C",
            lavender: "#E6E6FA",
            lavenderblush: "#FFF0F5",
            lawngreen: "#7CFC00",
            lemonchiffon: "#FFFACD",
            lightblue: "#ADD8E6",
            lightcoral: "#F08080",
            lightcyan: "#E0FFFF",
            lightgoldenrodyellow: "#FAFAD2",
            lightgray: "#D3D3D3",
            lightgreen: "#90EE90",
            lightgrey: "#D3D3D3",
            lightpink: "#FFB6C1",
            lightsalmon: "#FFA07A",
            lightseagreen: "#20B2AA",
            lightskyblue: "#87CEFA",
            lightslategray: "#778899",
            lightslategrey: "#778899",
            lightsteelblue: "#B0C4DE",
            lightyellow: "#FFFFE0",
            lime: "#00FF00",
            limegreen: "#32CD32",
            linen: "#FAF0E6",
            magenta: "#FF00FF",
            maroon: "#800000",
            mediumaquamarine: "#66CDAA",
            mediumblue: "#0000CD",
            mediumorchid: "#BA55D3",
            mediumpurple: "#9370DB",
            mediumseagreen: "#3CB371",
            mediumslateblue: "#7B68EE",
            mediumspringgreen: "#00FA9A",
            mediumturquoise: "#48D1CC",
            mediumvioletred: "#C71585",
            midnightblue: "#191970",
            mintcream: "#F5FFFA",
            mistyrose: "#FFE4E1",
            moccasin: "#FFE4B5",
            navajowhite: "#FFDEAD",
            navy: "#000080",
            oldlace: "#FDF5E6",
            olive: "#808000",
            olivedrab: "#6B8E23",
            orange: "#FFA500",
            orangered: "#FF4500",
            orchid: "#DA70D6",
            palegoldenrod: "#EEE8AA",
            palegreen: "#98FB98",
            paleturquoise: "#AFEEEE",
            palevioletred: "#DB7093",
            papayawhip: "#FFEFD5",
            peachpuff: "#FFDAB9",
            peru: "#CD853F",
            pink: "#FFC0CB",
            plum: "#DDA0DD",
            powderblue: "#B0E0E6",
            purple: "#800080",
            rebeccapurple: "#663399",
            red: "#FF0000",
            rosybrown: "#BC8F8F",
            royalblue: "#4169E1",
            saddlebrown: "#8B4513",
            salmon: "#FA8072",
            sandybrown: "#F4A460",
            seagreen: "#2E8B57",
            seashell: "#FFF5EE",
            sienna: "#A0522D",
            silver: "#C0C0C0",
            skyblue: "#87CEEB",
            slateblue: "#6A5ACD",
            slategray: "#708090",
            slategrey: "#708090",
            snow: "#FFFAFA",
            springgreen: "#00FF7F",
            steelblue: "#4682B4",
            tan: "#D2B48C",
            teal: "#008080",
            thistle: "#D8BFD8",
            tomato: "#FF6347",
            turquoise: "#40E0D0",
            violet: "#EE82EE",
            wheat: "#F5DEB3",
            white: "#FFFFFF",
            whitesmoke: "#F5F5F5",
            yellow: "#FFFF00",
            yellowgreen: "#9ACD32",
          },
          b = function e() {
            var r =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              o = r.bgColor,
              t = void 0 === o ? "#FFFFFF" : o,
              n = r.fgDarkColor,
              a = void 0 === n ? "#000000" : n,
              F = r.fgLightColor,
              l = void 0 === F ? "#FFFFFF" : F,
              i = r.defaultColor,
              u = void 0 === i ? "#000000" : i,
              d = r.threshold,
              s = void 0 === d ? 128 : d,
              m = r.customNamedColors,
              b = void 0 === m ? {} : m;
            g(this, e);
            var y = {
              bgColor: t,
              fgDarkColor: a,
              fgLightColor: l,
              defaultColor: u,
              threshold: s,
              customNamedColors: b,
            };
            (this.namedColors = c(c({}, h), b)),
              (this.contrastColor = function () {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                return f(
                  c(
                    c(c({}, y), e),
                    {},
                    {
                      customNamedColors: c(
                        c({}, y.customNamedColors),
                        e.customNamedColors
                      ),
                    }
                  )
                );
              });
          };
        function f() {
          var r = this,
            o =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = o.bgColor,
            a = void 0 === t ? "#FFFFFF" : t,
            F = o.fgDarkColor,
            l = void 0 === F ? "#000000" : F,
            i = o.fgLightColor,
            u = void 0 === i ? "#FFFFFF" : i,
            d = o.defaultColor,
            s = void 0 === d ? "#000000" : d,
            g = o.threshold,
            b = void 0 === g ? 128 : g,
            f = o.customNamedColors,
            y = void 0 === f ? {} : f;
          this.namedColors = c(c({}, h), y);
          var C = n(
              [a, l, u, s].map(function (e) {
                return r.namedColors[e];
              }),
              4
            ),
            D = C[0],
            p = C[1],
            A = C[2],
            E = C[3],
            v = String(D || a)
              .toUpperCase()
              .split("")
              .filter(function (e) {
                return m.includes(e);
              });
          switch (v.length) {
            case 3:
            case 4:
              v = v.slice(0, 3).map(function (e) {
                return "".concat(e).concat(e);
              });
              break;
            case 6:
            case 8:
              v = v.slice(0, 6).reduce(function (r, o, t, n) {
                return t % 2
                  ? [].concat(e(r), ["".concat(n[t - 1]).concat(o)])
                  : r;
              }, []);
              break;
            default:
              return E || s;
          }
          var B = n(
            v.map(function (e) {
              return parseInt(e, 16);
            }),
            3
          );
          return (299 * B[0] + 587 * B[1] + 114 * B[2]) / 1e3 >= b
            ? p || l
            : A || u;
        }
        (module.exports = b), (module.exports.contrastColor = f);
      },
      {},
    ],
  },
  {},
  ["Focm"],
  "ContrastColor"
);
