!(function (x, e, k, w) {
	var a = (x.fn.peity = function (e, n) {
			return (
				i &&
					this.each(function () {
						var t = x(this),
							i = t.data('_peity');
						i
							? (e && (i.type = e), x.extend(i.opts, n))
							: ((i = new r(t, e, x.extend({}, a.defaults[e], t.data('peity'), n))),
								t
									.change(function () {
										i.draw();
									})
									.data('_peity', i)),
							i.draw();
					}),
				this
			);
		}),
		r = function (t, i, e) {
			(this.$el = t), (this.type = i), (this.opts = e);
		},
		t = r.prototype,
		$ = (t.svgElement = function (t, i) {
			return x(e.createElementNS('http://www.w3.org/2000/svg', t)).attr(i);
		}),
		i = 'createElementNS' in e && $('svg', {})[0].createSVGRect;
	(t.draw = function () {
		var t = this.opts;
		a.graphers[this.type].call(this, t), t.after && t.after.call(this, t);
	}),
		(t.fill = function () {
			var e = this.opts.fill;
			return x.isFunction(e)
				? e
				: function (t, i) {
						return e[i % e.length];
					};
		}),
		(t.prepare = function (t, i) {
			return (
				this.$svg || this.$el.hide().after((this.$svg = $('svg', { class: 'peity' }))),
				this.$svg.empty().data('_peity', this).attr({ height: i, width: t })
			);
		}),
		(t.values = function () {
			return x.map(this.$el.text().split(this.opts.delimiter), function (t) {
				return parseFloat(t);
			});
		}),
		(a.defaults = {}),
		(a.graphers = {}),
		(a.register = function (t, i, e) {
			(this.defaults[t] = i), (this.graphers[t] = e);
		}),
		a.register('pie', { fill: ['#ff9900', '#fff4dd', '#ffc66e'], radius: 8 }, function (t) {
			t.delimiter || ((s = this.$el.text().match(/[^0-9\.]/)), (t.delimiter = s ? s[0] : ','));
			for (
				var i = x.map(this.values(), function (t) {
						return 0 < t ? t : 0;
					}),
					e = ('/' == t.delimiter && ((s = i[0]), (r = i[1]), (i = [s, k.max(0, r - s)])), 0),
					n = i.length,
					a = 0;
				e < n;
				e++
			)
				a += i[e];
			a || ((n = 2), (i = [0, (a = 1)]));
			for (
				var r = 2 * t.radius,
					h = this.prepare(t.width || r, t.height || r),
					s = h.width(),
					r = h.height(),
					l = s / 2,
					p = r / 2,
					o = k.min(l, p),
					c = t.innerRadius,
					u = ('donut' == this.type && (c = c || 0.5 * o), k.PI),
					d = this.fill(),
					f = (this.scale = function (t, i) {
						t = (t / a) * u * 2 - u / 2;
						return [i * k.cos(t) + l, i * k.sin(t) + p];
					}),
					g = 0,
					e = 0;
				e < n;
				e++
			) {
				var m,
					v,
					y = i[e],
					w = y / a;
				0 != w &&
					((w =
						1 == w
							? c
								? $('path', {
										d: [
											'M',
											l,
											(v = p - o),
											'A',
											o,
											o,
											0,
											1,
											1,
											(m = l - 0.01),
											v,
											'L',
											m,
											(v = p - c),
											'A',
											c,
											c,
											0,
											1,
											0,
											l,
											v
										].join(' '),
										'data-value': y
									})
								: $('circle', { cx: l, cy: p, 'data-value': y, r: o })
							: ((m = g + y),
								(v = ['M'].concat(f(g, o), 'A', o, o, 0, 0.5 < w ? 1 : 0, 1, f(m, o), 'L')),
								c
									? (v = v.concat(f(m, c), 'A', c, c, 0, 0.5 < w ? 1 : 0, 0, f(g, c)))
									: v.push(l, p),
								(g += y),
								$('path', { d: v.join(' '), 'data-value': y }))).attr(
						'fill',
						d.call(this, y, e, i)
					),
					h.append(w));
			}
		}),
		a.register('donut', x.extend(!0, {}, a.defaults.pie), function (t) {
			a.graphers.pie.call(this, t);
		}),
		a.register(
			'line',
			{
				delimiter: ',',
				fill: '#c6d9fd',
				height: 16,
				min: 0,
				stroke: '#4d89f9',
				strokeWidth: 1,
				width: 32
			},
			function (t) {
				for (
					var i = this.values(),
						e = (1 == i.length && i.push(i[0]), k.max.apply(k, t.max == w ? i : i.concat(t.max))),
						n = k.min.apply(k, t.min == w ? i : i.concat(t.min)),
						a = this.prepare(t.width, t.height),
						r = t.strokeWidth,
						h = a.width(),
						s = a.height() - r,
						l = e - n,
						p = (this.x = function (t) {
							return t * (h / (i.length - 1));
						}),
						o = (this.y = function (t) {
							var i = s;
							return l && (i -= ((t - n) / l) * s), i + r / 2;
						}),
						e = o(k.max(n, 0)),
						c = [0, e],
						u = 0;
					u < i.length;
					u++
				)
					c.push(p(u), o(i[u]));
				c.push(h, e),
					t.fill && a.append($('polygon', { fill: t.fill, points: c.join(' ') })),
					r &&
						a.append(
							$('polyline', {
								fill: 'none',
								points: c.slice(2, c.length - 2).join(' '),
								stroke: t.stroke,
								'stroke-width': r,
								'stroke-linecap': 'square'
							})
						);
			}
		),
		a.register(
			'bar',
			{ delimiter: ',', fill: ['#4D89F9'], height: 16, min: 0, padding: 0.1, width: 32 },
			function (t) {
				for (
					var i = this.values(),
						e = k.max.apply(k, t.max == w ? i : i.concat(t.max)),
						n = k.min.apply(k, t.min == w ? i : i.concat(t.min)),
						a = this.prepare(t.width, t.height),
						r = a.width(),
						h = a.height(),
						s = e - n,
						l = t.padding,
						p = this.fill(),
						o = (this.x = function (t) {
							return (t * r) / i.length;
						}),
						c = (this.y = function (t) {
							return h - (s ? ((t - n) / s) * h : 1);
						}),
						u = 0;
					u < i.length;
					u++
				) {
					var d,
						f = o(u + l),
						g = o(u + 1 - l) - f,
						m = i[u],
						v = c(m),
						y = v;
					s ? (m < 0 ? (y = c(k.min(e, 0))) : (v = c(k.max(n, 0)))) : (d = 1),
						0 == (d = v - y) && ((d = 1), 0 < e) && s && y--,
						a.append(
							$('rect', {
								'data-value': m,
								fill: p.call(this, m, u, i),
								x: f,
								y: y,
								width: g,
								height: d
							})
						);
				}
			}
		);
})(jQuery, document, Math);
