!(function (t, i) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = i())
    : "function" == typeof define && define.amd
    ? define(i)
    : ((t =
        "undefined" != typeof globalThis
          ? globalThis
          : t || self).ParticleBoom = i());
})(this, function () {
  "use strict";
  var t = function (t, i) {
      if (!(t instanceof i))
        throw new TypeError("Cannot call a class as a function");
    },
    i = (function () {
      function t(t, i) {
        for (var a = 0; a < i.length; a++) {
          var n = i[a];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, n.key, n);
        }
      }
      return function (i, a, n) {
        return a && t(i.prototype, a), n && t(i, n), i;
      };
    })(),
    a = function (t) {
      var i = t || null;
      if (("string" == typeof t && (i = document.querySelector(t)), i))
        return t;
      throw new Error("请传入canvas元素或选择器!");
    },
    n = (function () {
      function n(i) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          r =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if ((t(this, n), !n.hasBoom[r])) {
          (n.hasBoom[r] = !1),
            (this.canvas = a(i)),
            (this.w = this.canvas.width),
            (this.h = this.canvas.height),
            (this.ctx = this.canvas.getContext("2d"));
          var o = Math.min(this.w, this.h),
            h = parseInt(o / 100),
            s = 4 * h,
            u = 6 * h;
          (this.options = Object.assign(
            {
              speed: 5,
              gap: s,
              radius: h,
              minVx: -u,
              maxVx: u,
              minVy: -u,
              maxVy: u,
              edgeOpacity: !1,
              onBoomEnd: function () {
                console.log("爆炸结束了");
              },
              filterFunc: function (t) {
                var i = t.r,
                  a = t.g,
                  n = t.b;
                return 0 !== t.a && !(255 === i && 255 === a && 255 === n);
              },
            },
            e
          )),
            (this.key = r),
            this.init();
        }
      }
      return (
        i(n, [
          {
            key: "init",
            value: function () {
              var t = this.initRandomVx(this.options),
                i = this.initRandomVy(this.options);
              n.hasBoom[this.key] = !0;
              var a = this.initParticle(t, i, this.options);
              this.intervalFunc(this.canvas, this.ctx, a, this.options);
            },
          },
          {
            key: "initRandomVy",
            value: function (t) {
              for (var i = [], a = t.minVy; a <= t.maxVy; a += 0.01) i.push(a);
              return i;
            },
          },
          {
            key: "initRandomVx",
            value: function (t) {
              for (var i = [], a = t.minVx; a <= t.maxVx; a += 0.01) i.push(a);
              return i;
            },
          },
          {
            key: "initParticle",
            value: function (t, i, a) {
              for (
                var n = [],
                  e =  a.radius ,
                  r = a.gap,
                  o = this.ctx,
                  h = this.w,
                  s = this.h,
                  u = o.getImageData(0, 0, h, s).data,
                  l = 0;
                l < s;
                l += r
              )
                for (var d = 0; d < h; d += r) {
                  var c = 4 * (h * l + d),
                    f = u[c],
                    g = u[c + 1],
                    v = u[c + 2],
                    y = u[c + 3] / 255;
                  this.options.filterFunc({ r: f, g: g, b: v, a: y }) &&
                    n.push({
                      translateX: (e* Math.random()) / 2,
                      translateY: (e* Math.random()) / 2,
                      x: d/window.devicePixelRatio,
                      y: l/window.devicePixelRatio,
                      g: (2.5 + Math.random() * 2.5)/2.0,
                      vx: t[Math.floor(Math.random() * t.length)]/3.0,
                      vy: i[Math.floor(Math.random() * i.length)]/3.0,
                      color: "rgba(" + f + "," + g + "," + v + "," + y + ")",
                    });
                }
              return n;
            },
          },
          {
            key: "intervalFunc",
            value: function (t, i, a, n) {
              var e = this;
              this.interval = setInterval(function () {
                e.drawParticle(t, i, a, n), e.updateBalls(t, a, n);
              }, n.speed);
            },
          },
          {
            key: "drawParticle",
            value: function (t, i, a, e) {
              var r = 0;
              i.clearRect(0, 0, t.width, t.height);
              for (var o = 0; o < a.length; o++)
                i.translate(a[o].translateX, a[o].color.translateY),
                  (i.fillStyle = a[o].color),
                  i.beginPath(),
                  i.arc(a[o].x, a[o].y, a[o].translateX*2, 0, 2 * Math.PI),
                  i.closePath(),
                  i.fill(),
                  i.translate(-a[o].translateX, -a[o].color.translateY),
                  (a[o].x < 0 - a[o].translateX*2 ||
                    a[o].x > t.width + a[o].translateX*2 ||
                    a[o].y > t.height + a[o].translateX*2 ||
                    a[o].y < 0 - a[o].translateX*2) &&
                    r++;
              r === a.length &&
                (clearInterval(this.interval),
                (n.hasBoom[this.key] = !1),
                this.options.onBoomEnd());
            },
          },
          {
            key: "updateBalls",
            value: function (t, i, a) {
              for (var n = 0; n < i.length; n++)
                if (
                  !(
                    i[n].x < -i[n].translateX*2 ||
                    i[n].x > t.width + i[n].translateX*2 ||
                    i[n].y < -i[n].translateX*2 ||
                    i[n].y > t.height + i[n].translateX*2
                  ) &&
                  ((i[n].x += i[n].vx),
                  (i[n].y += i[n].vy),
                  (i[n].vy += i[n].g/3),
                  a.edgeOpacity)
                ) {
                  var e = /(rgba\(\d+,\d+,\d+,)(-?(\d+\.)?\d+)/g.exec(
                      i[n].color
                    ),
                    r = e[1],
                    o = e[2];
                  if (parseInt(e[2] < 0.001)) continue;
                  (o =
                    i[n].x + a.radius <= t.width / 2 &&
                    i[n].y + a.radius <= t.height / 2
                      ? (i[n].x / t.width) * 2 * ((i[n].y / t.height) * 2)
                      : i[n].x + a.radius >= t.width / 2 &&
                        i[n].y + a.radius <= t.height / 2
                      ? ((t.width - i[n].x) / t.width) *
                        2 *
                        ((i[n].y / t.height) * 2)
                      : i[n].x + a.radius <= t.width / 2 &&
                        i[n].y + a.radius >= t.height / 2
                      ? (i[n].x / t.width) *
                        2 *
                        (((t.height - i[n].y) / t.height) * 2)
                      : ((t.width - i[n].x) / t.width) *
                        2 *
                        (((t.height - i[n].y) / t.height) * 2)),
                    (o *= 1.2 + Math.random()),
                    (i[n].color = "" + r + o + ")");
                }
            },
          },
        ]),
        n
      );
    })();
  return (
    (n.hasBoom = {}),
    (n.drawPic = function (t, i) {
      var n = a(t),
        e = n.getContext("2d"),
        r = new Image();
      return (
        (r.src = i),
        new Promise(function (t, i) {
          try {
            r.onload = function () {
              (n.width = r.width),
                (n.height = r.height),
                e.drawImage(r, 0, 0),
                t(n);
            };
          } catch (t) {
            i(t);
          }
        })
      );
    }),
    n
  );
});
