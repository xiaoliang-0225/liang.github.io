function dark() {
    window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    var t, i, e, s, n = .05, h = document.getElementById("universe"), a = !0, o = "226,225,224", r = [];

    function d() {
        t = window.innerWidth, i = window.innerHeight, e = .216 * t, h.setAttribute("width", t), h.setAttribute("height", i)
    }

    function c() {
        s.clearRect(0, 0, t, i);
        for (var e = r.length, n = 0; n < e; n++) {
            var h = r[n];
            h.move(), h.fadeIn(), h.fadeOut(), h.draw()
        }
    }

    function f() {
        this.reset = function () {
            this.giant = u(3), this.comet = !this.giant && !a && u(10), this.x = m(0, t - 10), this.y = m(0, i), this.r = m(1.1, 2.6), this.dx = m(n, 6 * n) + (this.comet + 1 - 1) * n * m(50, 120) + .1, this.dy = -m(n, 6 * n) - (this.comet + 1 - 1) * n * m(50, 120), this.fadingOut = null, this.fadingIn = !0, this.opacity = 0, this.opacityTresh = m(.2, 1 - .4 * (this.comet + 1 - 1)), this.do = m(5e-4, .002) + .001 * (this.comet + 1 - 1)
        }, this.fadeIn = function () {
            this.fadingIn && (this.fadingIn = !(this.opacity > this.opacityTresh), this.opacity += this.do)
        }, this.fadeOut = function () {
            this.fadingOut && (this.fadingOut = !(this.opacity < 0), this.opacity -= this.do / 2, (this.x > t || this.y < 0) && (this.fadingOut = !1, this.reset()))
        }, this.draw = function () {
            if (s.beginPath(), this.giant) s.fillStyle = "rgba(180,184,240," + this.opacity + ")", s.arc(this.x, this.y, 2, 0, 2 * Math.PI, !1); else if (this.comet) {
                s.fillStyle = "rgba(" + o + "," + this.opacity + ")", s.arc(this.x, this.y, 1.5, 0, 2 * Math.PI, !1);
                for (var t = 0; t < 30; t++) s.fillStyle = "rgba(" + o + "," + (this.opacity - this.opacity / 20 * t) + ")", s.rect(this.x - this.dx / 4 * t, this.y - this.dy / 4 * t - 2, 2, 2), s.fill()
            } else s.fillStyle = "rgba(226,225,142," + this.opacity + ")", s.rect(this.x, this.y, this.r, this.r);
            s.closePath(), s.fill()
        }, this.move = function () {
            this.x += this.dx, this.y += this.dy, !1 === this.fadingOut && this.reset(), (this.x > t - t / 4 || this.y < 0) && (this.fadingOut = !0)
        }, setTimeout((function () {
            a = !1
        }), 50)
    }

    function u(t) {
        return Math.floor(1e3 * Math.random()) + 1 < 10 * t
    }

    function m(t, i) {
        return Math.random() * (i - t) + t
    }

    d(), window.addEventListener("resize", d, !1), function () {
        s = h.getContext("2d");
        for (var t = 0; t < e; t++) r[t] = new f, r[t].reset();
        c()
    }(), function t() {
        "dark" == document.getElementsByTagName("html")[0].getAttribute("data-theme") && c(), window.requestAnimationFrame(t)
    }()
}

dark();