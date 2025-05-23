!(function (t, e) {
	'object' == typeof exports && 'undefined' != typeof module
		? (module.exports = e())
		: 'function' == typeof define && define.amd
			? define(e)
			: ((t = t || self).Sortable = e());
})(this, function () {
	'use strict';
	function e(e, t) {
		var n,
			o = Object.keys(e);
		return (
			Object.getOwnPropertySymbols &&
				((n = Object.getOwnPropertySymbols(e)),
				t &&
					(n = n.filter(function (t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable;
					})),
				o.push.apply(o, n)),
			o
		);
	}
	function M(o) {
		for (var t = 1; t < arguments.length; t++) {
			var i = null != arguments[t] ? arguments[t] : {};
			t % 2
				? e(Object(i), !0).forEach(function (t) {
						var e,
							n = o;
						(t = i[(e = t)]),
							e in n
								? Object.defineProperty(n, e, {
										value: t,
										enumerable: !0,
										configurable: !0,
										writable: !0
									})
								: (n[e] = t);
					})
				: Object.getOwnPropertyDescriptors
					? Object.defineProperties(o, Object.getOwnPropertyDescriptors(i))
					: e(Object(i)).forEach(function (t) {
							Object.defineProperty(o, t, Object.getOwnPropertyDescriptor(i, t));
						});
		}
		return o;
	}
	function o(t) {
		return (o =
			'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
				? function (t) {
						return typeof t;
					}
				: function (t) {
						return t &&
							'function' == typeof Symbol &&
							t.constructor === Symbol &&
							t !== Symbol.prototype
							? 'symbol'
							: typeof t;
					})(t);
	}
	function l() {
		return (l =
			Object.assign ||
			function (t) {
				for (var e = 1; e < arguments.length; e++) {
					var n,
						o = arguments[e];
					for (n in o) Object.prototype.hasOwnProperty.call(o, n) && (t[n] = o[n]);
				}
				return t;
			}).apply(this, arguments);
	}
	function h(t, e) {
		(null == e || e > t.length) && (e = t.length);
		for (var n = 0, o = new Array(e); n < e; n++) o[n] = t[n];
		return o;
	}
	function t(t) {
		if ('undefined' != typeof window && window.navigator) return !!navigator.userAgent.match(t);
	}
	var y = t(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),
		S = t(/Edge/i),
		f = t(/firefox/i),
		g = t(/safari/i) && !t(/chrome/i) && !t(/android/i),
		n = t(/iP(ad|od|hone)/i),
		m = t(/chrome/i) && t(/android/i),
		_ = { capture: !1, passive: !1 };
	function s(t, e, n) {
		t.addEventListener(e, n, !y && _);
	}
	function r(t, e, n) {
		t.removeEventListener(e, n, !y && _);
	}
	function C(t, e) {
		if (e && ('>' === e[0] && (e = e.substring(1)), t))
			try {
				return t.matches
					? t.matches(e)
					: t.msMatchesSelector
						? t.msMatchesSelector(e)
						: t.webkitMatchesSelector && t.webkitMatchesSelector(e);
			} catch (t) {}
	}
	function N(t, e, n, o) {
		if (t) {
			n = n || document;
			do {
				if ((null != e && ('>' !== e[0] || t.parentNode === n) && C(t, e)) || (o && t === n))
					return t;
			} while (
				t !== n &&
				(t = (i = t).host && i !== document && i.host.nodeType ? i.host : i.parentNode)
			);
		}
		var i;
		return null;
	}
	var T,
		U = /\s+/g;
	function I(t, e, n) {
		var o;
		t &&
			e &&
			(t.classList
				? t.classList[n ? 'add' : 'remove'](e)
				: ((o = (' ' + t.className + ' ').replace(U, ' ').replace(' ' + e + ' ', ' ')),
					(t.className = (o + (n ? ' ' + e : '')).replace(U, ' '))));
	}
	function P(t, e, n) {
		var o = t && t.style;
		if (o) {
			if (void 0 === n)
				return (
					document.defaultView && document.defaultView.getComputedStyle
						? (n = document.defaultView.getComputedStyle(t, ''))
						: t.currentStyle && (n = t.currentStyle),
					void 0 === e ? n : n[e]
				);
			o[(e = e in o || -1 !== e.indexOf('webkit') ? e : '-webkit-' + e)] =
				n + ('string' == typeof n ? '' : 'px');
		}
	}
	function p(t, e) {
		var n = '';
		if ('string' == typeof t) n = t;
		else
			do {
				var o = P(t, 'transform');
			} while ((o && 'none' !== o && (n = o + ' ' + n), !e && (t = t.parentNode)));
		var i = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
		return i && new i(n);
	}
	function q(t, e, n) {
		if (t) {
			var o = t.getElementsByTagName(e),
				i = 0,
				r = o.length;
			if (n) for (; i < r; i++) n(o[i], i);
			return o;
		}
		return [];
	}
	function x() {
		return document.scrollingElement || document.documentElement;
	}
	function k(t, e, n, o, i) {
		if (t.getBoundingClientRect || t === window) {
			var r,
				a,
				l,
				s,
				c,
				u,
				d =
					t !== window && t.parentNode && t !== x()
						? ((a = (r = t.getBoundingClientRect()).top),
							(l = r.left),
							(s = r.bottom),
							(c = r.right),
							(u = r.height),
							r.width)
						: ((l = a = 0),
							(s = window.innerHeight),
							(c = window.innerWidth),
							(u = window.innerHeight),
							window.innerWidth);
			if ((e || n) && t !== window && ((i = i || t.parentNode), !y))
				do {
					if (
						i &&
						i.getBoundingClientRect &&
						('none' !== P(i, 'transform') || (n && 'static' !== P(i, 'position')))
					) {
						var h = i.getBoundingClientRect();
						(a -= h.top + parseInt(P(i, 'border-top-width'))),
							(l -= h.left + parseInt(P(i, 'border-left-width'))),
							(s = a + r.height),
							(c = l + r.width);
						break;
					}
				} while ((i = i.parentNode));
			return (
				o &&
					t !== window &&
					((o = (e = p(i || t)) && e.a), (t = e && e.d), e) &&
					((s = (a /= t) + (u /= t)), (c = (l /= o) + (d /= o))),
				{ top: a, left: l, bottom: s, right: c, width: d, height: u }
			);
		}
	}
	function V(t, e, n) {
		for (var o = O(t, !0), i = k(t)[e]; o; ) {
			var r = k(o)[n];
			if (!('top' === n || 'left' === n ? r <= i : i <= r)) return o;
			if (o === x()) break;
			o = O(o, !1);
		}
		return !1;
	}
	function Z(t, e, n, o) {
		for (var i = 0, r = 0, a = t.children; r < a.length; ) {
			if (
				'none' !== a[r].style.display &&
				a[r] !== G.ghost &&
				(o || a[r] !== G.dragged) &&
				N(a[r], n.draggable, t, !1)
			) {
				if (i === e) return a[r];
				i++;
			}
			r++;
		}
		return null;
	}
	function $(t, e) {
		for (
			var n = t.lastElementChild;
			n && (n === G.ghost || 'none' === P(n, 'display') || (e && !C(n, e)));

		)
			n = n.previousElementSibling;
		return n || null;
	}
	function R(t, e) {
		var n = 0;
		if (!t || !t.parentNode) return -1;
		for (; (t = t.previousElementSibling); )
			'TEMPLATE' === t.nodeName.toUpperCase() || t === G.clone || (e && !C(t, e)) || n++;
		return n;
	}
	function Q(t) {
		var e = 0,
			n = 0,
			o = x();
		if (t)
			do {
				var i = (r = p(t)).a,
					r = r.d;
			} while (((e += t.scrollLeft * i), (n += t.scrollTop * r), t !== o && (t = t.parentNode)));
		return [e, n];
	}
	function O(t, e) {
		if (t && t.getBoundingClientRect) {
			var n = t,
				o = !1;
			do {
				if (n.clientWidth < n.scrollWidth || n.clientHeight < n.scrollHeight) {
					var i = P(n);
					if (
						(n.clientWidth < n.scrollWidth && ('auto' == i.overflowX || 'scroll' == i.overflowX)) ||
						(n.clientHeight < n.scrollHeight && ('auto' == i.overflowY || 'scroll' == i.overflowY))
					) {
						if (!n.getBoundingClientRect || n === document.body) return x();
						if (o || e) return n;
						o = !0;
					}
				}
			} while ((n = n.parentNode));
		}
		return x();
	}
	function J(t, e) {
		return (
			Math.round(t.top) === Math.round(e.top) &&
			Math.round(t.left) === Math.round(e.left) &&
			Math.round(t.height) === Math.round(e.height) &&
			Math.round(t.width) === Math.round(e.width)
		);
	}
	function tt(e, n) {
		return function () {
			var t;
			T ||
				(1 === (t = arguments).length ? e.call(this, t[0]) : e.apply(this, t),
				(T = setTimeout(function () {
					T = void 0;
				}, n)));
		};
	}
	function et(t, e, n) {
		(t.scrollLeft += e), (t.scrollTop += n);
	}
	function nt(t) {
		var e = window.Polymer,
			n = window.jQuery || window.Zepto;
		return e && e.dom ? e.dom(t).cloneNode(!0) : n ? n(t).clone(!0)[0] : t.cloneNode(!0);
	}
	function ot(t, e) {
		P(t, 'position', 'absolute'),
			P(t, 'top', e.top),
			P(t, 'left', e.left),
			P(t, 'width', e.width),
			P(t, 'height', e.height);
	}
	function it(t) {
		P(t, 'position', ''), P(t, 'top', ''), P(t, 'left', ''), P(t, 'width', ''), P(t, 'height', '');
	}
	var X = 'Sortable' + new Date().getTime();
	var rt = [],
		at = { initializeByDefault: !0 },
		lt = {
			mount: function (e) {
				for (var t in at) !at.hasOwnProperty(t) || t in e || (e[t] = at[t]);
				rt.forEach(function (t) {
					if (t.pluginName === e.pluginName)
						throw 'Sortable: Cannot mount plugin '.concat(e.pluginName, ' more than once');
				}),
					rt.push(e);
			},
			pluginEvent: function (e, n, o) {
				var t = this,
					i =
						((this.eventCanceled = !1),
						(o.cancel = function () {
							t.eventCanceled = !0;
						}),
						e + 'Global');
				rt.forEach(function (t) {
					n[t.pluginName] &&
						(n[t.pluginName][i] && n[t.pluginName][i](M({ sortable: n }, o)),
						n.options[t.pluginName]) &&
						n[t.pluginName][e] &&
						n[t.pluginName][e](M({ sortable: n }, o));
				});
			},
			initializePlugins: function (n, o, i, t) {
				for (var e in (rt.forEach(function (t) {
					var e = t.pluginName;
					(n.options[e] || t.initializeByDefault) &&
						(((t = new t(n, o, n.options)).sortable = n),
						(t.options = n.options),
						(n[e] = t),
						l(i, t.defaults));
				}),
				n.options)) {
					var r;
					n.options.hasOwnProperty(e) &&
						void 0 !== (r = this.modifyOption(n, e, n.options[e])) &&
						(n.options[e] = r);
				}
			},
			getEventProperties: function (e, n) {
				var o = {};
				return (
					rt.forEach(function (t) {
						'function' == typeof t.eventProperties &&
							l(o, t.eventProperties.call(n[t.pluginName], e));
					}),
					o
				);
			},
			modifyOption: function (e, n, o) {
				var i;
				return (
					rt.forEach(function (t) {
						e[t.pluginName] &&
							t.optionListeners &&
							'function' == typeof t.optionListeners[n] &&
							(i = t.optionListeners[n].call(e[t.pluginName], o));
					}),
					i
				);
			}
		};
	function st(t) {
		var e = t.sortable,
			n = t.rootEl,
			o = t.name,
			i = t.targetEl,
			r = t.cloneEl,
			a = t.toEl,
			l = t.fromEl,
			s = t.oldIndex,
			c = t.newIndex,
			u = t.oldDraggableIndex,
			d = t.newDraggableIndex,
			h = t.originalEvent,
			p = t.putSortable,
			f = t.extraEventProperties;
		if ((e = e || (n && n[X]))) {
			var g,
				m = e.options,
				t = 'on' + o.charAt(0).toUpperCase() + o.substr(1);
			!window.CustomEvent || y || S
				? (g = document.createEvent('Event')).initEvent(o, !0, !0)
				: (g = new CustomEvent(o, { bubbles: !0, cancelable: !0 })),
				(g.to = a || n),
				(g.from = l || n),
				(g.item = i || n),
				(g.clone = r),
				(g.oldIndex = s),
				(g.newIndex = c),
				(g.oldDraggableIndex = u),
				(g.newDraggableIndex = d),
				(g.originalEvent = h),
				(g.pullMode = p ? p.lastPutMode : void 0);
			var v,
				b = M(M({}, f), lt.getEventProperties(o, e));
			for (v in b) g[v] = b[v];
			n && n.dispatchEvent(g), m[t] && m[t].call(e, g);
		}
	}
	function Y(t, e, n) {
		var o = (n = 2 < arguments.length && void 0 !== n ? n : {}).evt,
			n = (function (t, e) {
				if (null == t) return {};
				var n,
					o = (function (t, e) {
						if (null == t) return {};
						for (var n, o = {}, i = Object.keys(t), r = 0; r < i.length; r++)
							(n = i[r]), 0 <= e.indexOf(n) || (o[n] = t[n]);
						return o;
					})(t, e);
				if (Object.getOwnPropertySymbols)
					for (var i = Object.getOwnPropertySymbols(t), r = 0; r < i.length; r++)
						(n = i[r]),
							0 <= e.indexOf(n) ||
								(Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n]));
				return o;
			})(n, ct);
		lt.pluginEvent.bind(G)(
			t,
			e,
			M(
				{
					dragEl: F,
					parentEl: j,
					ghostEl: H,
					rootEl: L,
					nextEl: ft,
					lastDownEl: gt,
					cloneEl: a,
					cloneHidden: i,
					dragStarted: _t,
					putSortable: z,
					activeSortable: G.active,
					originalEvent: o,
					oldIndex: mt,
					oldDraggableIndex: vt,
					newIndex: K,
					newDraggableIndex: W,
					hideGhostForTarget: ht,
					unhideGhostForTarget: pt,
					cloneNowHidden: function () {
						i = !0;
					},
					cloneNowShown: function () {
						i = !1;
					},
					dispatchSortableEvent: function (t) {
						B({ sortable: e, name: t, originalEvent: o });
					}
				},
				n
			)
		);
	}
	var ct = ['evt'];
	function B(t) {
		st(
			M(
				{
					putSortable: z,
					cloneEl: a,
					targetEl: F,
					rootEl: L,
					oldIndex: mt,
					oldDraggableIndex: vt,
					newIndex: K,
					newDraggableIndex: W
				},
				t
			)
		);
	}
	function ut(t, e) {
		var n = P(t),
			o =
				parseInt(n.width) -
				parseInt(n.paddingLeft) -
				parseInt(n.paddingRight) -
				parseInt(n.borderLeftWidth) -
				parseInt(n.borderRightWidth),
			i = Z(t, 0, e),
			r = Z(t, 1, e),
			a = i && P(i),
			l = r && P(r),
			s = a && parseInt(a.marginLeft) + parseInt(a.marginRight) + k(i).width,
			t = l && parseInt(l.marginLeft) + parseInt(l.marginRight) + k(r).width;
		return 'flex' === n.display
			? 'column' === n.flexDirection || 'column-reverse' === n.flexDirection
				? 'vertical'
				: 'horizontal'
			: 'grid' === n.display
				? n.gridTemplateColumns.split(' ').length <= 1
					? 'vertical'
					: 'horizontal'
				: i && a.float && 'none' !== a.float
					? ((e = 'left' === a.float ? 'left' : 'right'),
						!r || ('both' !== l.clear && l.clear !== e) ? 'horizontal' : 'vertical')
					: i &&
						  ('block' === a.display ||
								'flex' === a.display ||
								'table' === a.display ||
								'grid' === a.display ||
								(o <= s && 'none' === n[Bt]) ||
								(r && 'none' === n[Bt] && o < s + t))
						? 'vertical'
						: 'horizontal';
	}
	function dt(t) {
		function l(r, a) {
			return function (t, e, n, o) {
				var i =
					t.options.group.name &&
					e.options.group.name &&
					t.options.group.name === e.options.group.name;
				return (
					!(null != r || (!a && !i)) ||
					(null != r &&
						!1 !== r &&
						(a && 'clone' === r
							? r
							: 'function' == typeof r
								? l(r(t, e, n, o), a)(t, e, n, o)
								: ((e = (a ? t : e).options.group.name),
									!0 === r || ('string' == typeof r && r === e) || (r.join && -1 < r.indexOf(e)))))
				);
			};
		}
		var e = {},
			n = t.group;
		(n && 'object' == o(n)) || (n = { name: n }),
			(e.name = n.name),
			(e.checkPull = l(n.pull, !0)),
			(e.checkPut = l(n.put)),
			(e.revertClone = n.revertClone),
			(t.group = e);
	}
	function ht() {
		!jt && H && P(H, 'display', 'none');
	}
	function pt() {
		!jt && H && P(H, 'display', '');
	}
	var F,
		j,
		H,
		L,
		ft,
		gt,
		a,
		i,
		mt,
		K,
		vt,
		W,
		bt,
		z,
		yt,
		c,
		wt,
		Et,
		Dt,
		St,
		_t,
		Ct,
		Tt,
		xt,
		u,
		Ot = !1,
		At = !1,
		Mt = [],
		Nt = !1,
		It = !1,
		Pt = [],
		kt = !1,
		Rt = [],
		Xt = 'undefined' != typeof document,
		Yt = n,
		Bt = S || y ? 'cssFloat' : 'float',
		Ft = Xt && !m && !n && 'draggable' in document.createElement('div'),
		jt = (function () {
			var t;
			if (Xt)
				return (
					!y &&
					(((t = document.createElement('x')).style.cssText = 'pointer-events:auto'),
					'auto' === t.style.pointerEvents)
				);
		})();
	function Ht(t) {
		if (F) {
			t = t.touches ? t.touches[0] : t;
			(i = t.clientX),
				(r = t.clientY),
				Mt.some(function (t) {
					var e,
						n,
						o = t[X].options.emptyInsertThreshold;
					if (o && !$(t))
						return (
							(e = k(t)),
							(n = i >= e.left - o && i <= e.right + o),
							(o = r >= e.top - o && r <= e.bottom + o),
							n && o ? (a = t) : void 0
						);
				});
			var e = a;
			if (e) {
				var n,
					o = {};
				for (n in t) t.hasOwnProperty(n) && (o[n] = t[n]);
				(o.target = o.rootEl = e),
					(o.preventDefault = void 0),
					(o.stopPropagation = void 0),
					e[X]._onDragOver(o);
			}
		}
		var i, r, a;
	}
	function Lt(t) {
		F && F.parentNode[X]._isOutsideThisEl(t.target);
	}
	function G(t, e) {
		if (!t || !t.nodeType || 1 !== t.nodeType)
			throw 'Sortable: `el` must be an HTMLElement, not '.concat({}.toString.call(t));
		(this.el = t), (this.options = e = l({}, e)), (t[X] = this);
		var n,
			o,
			i,
			r,
			a = {
				group: null,
				sort: !0,
				disabled: !1,
				store: null,
				handle: null,
				draggable: /^[uo]l$/i.test(t.nodeName) ? '>li' : '>*',
				swapThreshold: 1,
				invertSwap: !1,
				invertedSwapThreshold: null,
				removeCloneOnHide: !0,
				direction: function () {
					return ut(t, this.options);
				},
				ghostClass: 'sortable-ghost',
				chosenClass: 'sortable-chosen',
				dragClass: 'sortable-drag',
				ignore: 'a, img',
				filter: null,
				preventOnFilter: !0,
				animation: 0,
				easing: null,
				setData: function (t, e) {
					t.setData('Text', e.textContent);
				},
				dropBubble: !1,
				dragoverBubble: !1,
				dataIdAttr: 'data-id',
				delay: 0,
				delayOnTouchOnly: !1,
				touchStartThreshold:
					(Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
				forceFallback: !1,
				fallbackClass: 'sortable-fallback',
				fallbackOnBody: !1,
				fallbackTolerance: 0,
				fallbackOffset: { x: 0, y: 0 },
				supportPointer: !1 !== G.supportPointer && 'PointerEvent' in window && !g,
				emptyInsertThreshold: 5
			};
		for (n in (lt.initializePlugins(this, t, a), a)) n in e || (e[n] = a[n]);
		for (o in (dt(e), this))
			'_' === o.charAt(0) && 'function' == typeof this[o] && (this[o] = this[o].bind(this));
		(this.nativeDraggable = !e.forceFallback && Ft),
			this.nativeDraggable && (this.options.touchStartThreshold = 1),
			e.supportPointer
				? s(t, 'pointerdown', this._onTapStart)
				: (s(t, 'mousedown', this._onTapStart), s(t, 'touchstart', this._onTapStart)),
			this.nativeDraggable && (s(t, 'dragover', this), s(t, 'dragenter', this)),
			Mt.push(this.el),
			e.store && e.store.get && this.sort(e.store.get(this) || []),
			l(
				this,
				((r = []),
				{
					captureAnimationState: function () {
						(r = []),
							this.options.animation &&
								[].slice.call(this.el.children).forEach(function (t) {
									var e, n;
									'none' !== P(t, 'display') &&
										t !== G.ghost &&
										(r.push({ target: t, rect: k(t) }),
										(e = M({}, r[r.length - 1].rect)),
										t.thisAnimationDuration && (n = p(t, !0)) && ((e.top -= n.f), (e.left -= n.e)),
										(t.fromRect = e));
								});
					},
					addAnimationState: function (t) {
						r.push(t);
					},
					removeAnimationState: function (t) {
						r.splice(
							(function (t, e) {
								for (var n in t)
									if (t.hasOwnProperty(n))
										for (var o in e) if (e.hasOwnProperty(o) && e[o] === t[n][o]) return Number(n);
								return -1;
							})(r, { target: t }),
							1
						);
					},
					animateAll: function (t) {
						var c,
							u,
							d = this;
						this.options.animation
							? ((c = !1),
								(u = 0),
								r.forEach(function (t) {
									var e = 0,
										n = t.target,
										o = n.fromRect,
										i = k(n),
										r = n.prevFromRect,
										a = n.prevToRect,
										l = t.rect,
										s = p(n, !0);
									s && ((i.top -= s.f), (i.left -= s.e)),
										(n.toRect = i),
										n.thisAnimationDuration &&
											J(r, i) &&
											!J(o, i) &&
											(l.top - i.top) / (l.left - i.left) == (o.top - i.top) / (o.left - i.left) &&
											((t = l),
											(s = r),
											(r = a),
											(a = d.options),
											(e =
												(Math.sqrt(Math.pow(s.top - t.top, 2) + Math.pow(s.left - t.left, 2)) /
													Math.sqrt(Math.pow(s.top - r.top, 2) + Math.pow(s.left - r.left, 2))) *
												a.animation)),
										J(i, o) ||
											((n.prevFromRect = o),
											(n.prevToRect = i),
											(e = e || d.options.animation),
											d.animate(n, l, i, e)),
										e &&
											((c = !0),
											(u = Math.max(u, e)),
											clearTimeout(n.animationResetTimer),
											(n.animationResetTimer = setTimeout(function () {
												(n.animationTime = 0),
													(n.prevFromRect = null),
													(n.fromRect = null),
													(n.prevToRect = null),
													(n.thisAnimationDuration = null);
											}, e)),
											(n.thisAnimationDuration = e));
								}),
								clearTimeout(i),
								c
									? (i = setTimeout(function () {
											'function' == typeof t && t();
										}, u))
									: 'function' == typeof t && t(),
								(r = []))
							: (clearTimeout(i), 'function' == typeof t && t());
					},
					animate: function (t, e, n, o) {
						var i, r;
						o &&
							(P(t, 'transition', ''),
							P(t, 'transform', ''),
							(i = (r = p(this.el)) && r.a),
							(r = r && r.d),
							(i = (e.left - n.left) / (i || 1)),
							(r = (e.top - n.top) / (r || 1)),
							(t.animatingX = !!i),
							(t.animatingY = !!r),
							P(t, 'transform', 'translate3d(' + i + 'px,' + r + 'px,0)'),
							(this.forRepaintDummy = t.offsetWidth),
							P(
								t,
								'transition',
								'transform ' + o + 'ms' + (this.options.easing ? ' ' + this.options.easing : '')
							),
							P(t, 'transform', 'translate3d(0,0,0)'),
							'number' == typeof t.animated && clearTimeout(t.animated),
							(t.animated = setTimeout(function () {
								P(t, 'transition', ''),
									P(t, 'transform', ''),
									(t.animated = !1),
									(t.animatingX = !1),
									(t.animatingY = !1);
							}, o)));
					}
				})
			);
	}
	function Kt(t, e, n, o, i, r, a, l) {
		var s,
			c,
			u = t[X],
			d = u.options.onMove;
		return (
			!window.CustomEvent || y || S
				? (s = document.createEvent('Event')).initEvent('move', !0, !0)
				: (s = new CustomEvent('move', { bubbles: !0, cancelable: !0 })),
			(s.to = e),
			(s.from = t),
			(s.dragged = n),
			(s.draggedRect = o),
			(s.related = i || e),
			(s.relatedRect = r || k(e)),
			(s.willInsertAfter = l),
			(s.originalEvent = a),
			t.dispatchEvent(s),
			d ? d.call(u, s, a) : c
		);
	}
	function Wt(t) {
		t.draggable = !1;
	}
	function zt() {
		kt = !1;
	}
	function Gt(t) {
		return setTimeout(t, 0);
	}
	function Ut(t) {
		return clearTimeout(t);
	}
	Xt &&
		!m &&
		document.addEventListener(
			'click',
			function (t) {
				if (At)
					return (
						t.preventDefault(),
						t.stopPropagation && t.stopPropagation(),
						t.stopImmediatePropagation && t.stopImmediatePropagation(),
						(At = !1)
					);
			},
			!0
		),
		(G.prototype = {
			constructor: G,
			_isOutsideThisEl: function (t) {
				this.el.contains(t) || t === this.el || (Ct = null);
			},
			_getDirection: function (t, e) {
				return 'function' == typeof this.options.direction
					? this.options.direction.call(this, t, e, F)
					: this.options.direction;
			},
			_onTapStart: function (e) {
				if (e.cancelable) {
					var n = this,
						o = this.el,
						t = this.options,
						i = t.preventOnFilter,
						r = e.type,
						a = (e.touches && e.touches[0]) || (e.pointerType && 'touch' === e.pointerType && e),
						l = (a || e).target,
						s =
							(e.target.shadowRoot &&
								((e.path && e.path[0]) || (e.composedPath && e.composedPath()[0]))) ||
							l,
						c = t.filter,
						u = o;
					Rt.length = 0;
					for (var d = u.getElementsByTagName('input'), h = d.length; h--; ) {
						var p = d[h];
						p.checked && Rt.push(p);
					}
					if (
						!F &&
						!((/mousedown|pointerdown/.test(r) && 0 !== e.button) || t.disabled) &&
						!s.isContentEditable &&
						(this.nativeDraggable || !g || !l || 'SELECT' !== l.tagName.toUpperCase()) &&
						!(((l = N(l, t.draggable, o, !1)) && l.animated) || gt === l)
					) {
						if (((mt = R(l)), (vt = R(l, t.draggable)), 'function' == typeof c)) {
							if (c.call(this, e, l, this))
								return (
									B({ sortable: n, rootEl: s, name: 'filter', targetEl: l, toEl: o, fromEl: o }),
									Y('filter', n, { evt: e }),
									void (i && e.cancelable && e.preventDefault())
								);
						} else if (
							(c =
								c &&
								c.split(',').some(function (t) {
									if ((t = N(s, t.trim(), o, !1)))
										return (
											B({
												sortable: n,
												rootEl: t,
												name: 'filter',
												targetEl: l,
												fromEl: o,
												toEl: o
											}),
											Y('filter', n, { evt: e }),
											!0
										);
								}))
						)
							return void (i && e.cancelable && e.preventDefault());
						(t.handle && !N(s, t.handle, o, !1)) || this._prepareDragStart(e, a, l);
					}
				}
			},
			_prepareDragStart: function (t, e, n) {
				var o,
					i = this,
					r = i.el,
					a = i.options,
					l = r.ownerDocument;
				n &&
					!F &&
					n.parentNode === r &&
					((o = k(n)),
					(L = r),
					(j = (F = n).parentNode),
					(ft = F.nextSibling),
					(gt = n),
					(bt = a.group),
					(yt = { target: (G.dragged = F), clientX: (e || t).clientX, clientY: (e || t).clientY }),
					(Dt = yt.clientX - o.left),
					(St = yt.clientY - o.top),
					(this._lastX = (e || t).clientX),
					(this._lastY = (e || t).clientY),
					(F.style['will-change'] = 'all'),
					(o = function () {
						Y('delayEnded', i, { evt: t }),
							G.eventCanceled
								? i._onDrop()
								: (i._disableDelayedDragEvents(),
									!f && i.nativeDraggable && (F.draggable = !0),
									i._triggerDragStart(t, e),
									B({ sortable: i, name: 'choose', originalEvent: t }),
									I(F, a.chosenClass, !0));
					}),
					a.ignore.split(',').forEach(function (t) {
						q(F, t.trim(), Wt);
					}),
					s(l, 'dragover', Ht),
					s(l, 'mousemove', Ht),
					s(l, 'touchmove', Ht),
					s(l, 'mouseup', i._onDrop),
					s(l, 'touchend', i._onDrop),
					s(l, 'touchcancel', i._onDrop),
					f && this.nativeDraggable && ((this.options.touchStartThreshold = 4), (F.draggable = !0)),
					Y('delayStart', this, { evt: t }),
					!a.delay || (a.delayOnTouchOnly && !e) || (this.nativeDraggable && (S || y))
						? o()
						: G.eventCanceled
							? this._onDrop()
							: (s(l, 'mouseup', i._disableDelayedDrag),
								s(l, 'touchend', i._disableDelayedDrag),
								s(l, 'touchcancel', i._disableDelayedDrag),
								s(l, 'mousemove', i._delayedDragTouchMoveHandler),
								s(l, 'touchmove', i._delayedDragTouchMoveHandler),
								a.supportPointer && s(l, 'pointermove', i._delayedDragTouchMoveHandler),
								(i._dragStartTimer = setTimeout(o, a.delay))));
			},
			_delayedDragTouchMoveHandler: function (t) {
				(t = t.touches ? t.touches[0] : t),
					Math.max(Math.abs(t.clientX - this._lastX), Math.abs(t.clientY - this._lastY)) >=
						Math.floor(
							this.options.touchStartThreshold /
								((this.nativeDraggable && window.devicePixelRatio) || 1)
						) && this._disableDelayedDrag();
			},
			_disableDelayedDrag: function () {
				F && Wt(F), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
			},
			_disableDelayedDragEvents: function () {
				var t = this.el.ownerDocument;
				r(t, 'mouseup', this._disableDelayedDrag),
					r(t, 'touchend', this._disableDelayedDrag),
					r(t, 'touchcancel', this._disableDelayedDrag),
					r(t, 'mousemove', this._delayedDragTouchMoveHandler),
					r(t, 'touchmove', this._delayedDragTouchMoveHandler),
					r(t, 'pointermove', this._delayedDragTouchMoveHandler);
			},
			_triggerDragStart: function (t, e) {
				(e = e || ('touch' == t.pointerType && t)),
					!this.nativeDraggable || e
						? this.options.supportPointer
							? s(document, 'pointermove', this._onTouchMove)
							: s(document, e ? 'touchmove' : 'mousemove', this._onTouchMove)
						: (s(F, 'dragend', this), s(L, 'dragstart', this._onDragStart));
				try {
					document.selection
						? Gt(function () {
								document.selection.empty();
							})
						: window.getSelection().removeAllRanges();
				} catch (t) {}
			},
			_dragStarted: function (t, e) {
				var n;
				(Ot = !1),
					L && F
						? (Y('dragStarted', this, { evt: e }),
							this.nativeDraggable && s(document, 'dragover', Lt),
							(n = this.options),
							t || I(F, n.dragClass, !1),
							I(F, n.ghostClass, !0),
							(G.active = this),
							t && this._appendGhost(),
							B({ sortable: this, name: 'start', originalEvent: e }))
						: this._nulling();
			},
			_emulateDragOver: function () {
				if (c) {
					(this._lastX = c.clientX), (this._lastY = c.clientY), ht();
					for (
						var t = document.elementFromPoint(c.clientX, c.clientY), e = t;
						t && t.shadowRoot && (t = t.shadowRoot.elementFromPoint(c.clientX, c.clientY)) !== e;

					)
						e = t;
					if ((F.parentNode[X]._isOutsideThisEl(t), e))
						do {
							if (
								e[X] &&
								e[X]._onDragOver({
									clientX: c.clientX,
									clientY: c.clientY,
									target: t,
									rootEl: e
								}) &&
								!this.options.dragoverBubble
							)
								break;
						} while ((e = (t = e).parentNode));
					pt();
				}
			},
			_onTouchMove: function (t) {
				if (yt) {
					var e = (l = this.options).fallbackTolerance,
						n = l.fallbackOffset,
						o = t.touches ? t.touches[0] : t,
						i = H && p(H, !0),
						r = H && i && i.a,
						a = H && i && i.d,
						l = Yt && u && Q(u),
						r = (o.clientX - yt.clientX + n.x) / (r || 1) + (l ? l[0] - Pt[0] : 0) / (r || 1),
						a = (o.clientY - yt.clientY + n.y) / (a || 1) + (l ? l[1] - Pt[1] : 0) / (a || 1);
					if (!G.active && !Ot) {
						if (
							e &&
							Math.max(Math.abs(o.clientX - this._lastX), Math.abs(o.clientY - this._lastY)) < e
						)
							return;
						this._onDragStart(t, !0);
					}
					H &&
						(i
							? ((i.e += r - (wt || 0)), (i.f += a - (Et || 0)))
							: (i = { a: 1, b: 0, c: 0, d: 1, e: r, f: a }),
						(i = 'matrix('
							.concat(i.a, ',')
							.concat(i.b, ',')
							.concat(i.c, ',')
							.concat(i.d, ',')
							.concat(i.e, ',')
							.concat(i.f, ')')),
						P(H, 'webkitTransform', i),
						P(H, 'mozTransform', i),
						P(H, 'msTransform', i),
						P(H, 'transform', i),
						(wt = r),
						(Et = a),
						(c = o)),
						t.cancelable && t.preventDefault();
				}
			},
			_appendGhost: function () {
				if (!H) {
					var t = this.options.fallbackOnBody ? document.body : L,
						e = k(F, !0, Yt, !0, t),
						n = this.options;
					if (Yt) {
						for (
							u = t;
							'static' === P(u, 'position') && 'none' === P(u, 'transform') && u !== document;

						)
							u = u.parentNode;
						u !== document.body && u !== document.documentElement
							? (u === document && (u = x()), (e.top += u.scrollTop), (e.left += u.scrollLeft))
							: (u = x()),
							(Pt = Q(u));
					}
					I((H = F.cloneNode(!0)), n.ghostClass, !1),
						I(H, n.fallbackClass, !0),
						I(H, n.dragClass, !0),
						P(H, 'transition', ''),
						P(H, 'transform', ''),
						P(H, 'box-sizing', 'border-box'),
						P(H, 'margin', 0),
						P(H, 'top', e.top),
						P(H, 'left', e.left),
						P(H, 'width', e.width),
						P(H, 'height', e.height),
						P(H, 'opacity', '0.8'),
						P(H, 'position', Yt ? 'absolute' : 'fixed'),
						P(H, 'zIndex', '100000'),
						P(H, 'pointerEvents', 'none'),
						(G.ghost = H),
						t.appendChild(H),
						P(
							H,
							'transform-origin',
							(Dt / parseInt(H.style.width)) * 100 +
								'% ' +
								(St / parseInt(H.style.height)) * 100 +
								'%'
						);
				}
			},
			_onDragStart: function (t, e) {
				var n = this,
					o = t.dataTransfer,
					i = n.options;
				Y('dragStart', this, { evt: t }),
					G.eventCanceled
						? this._onDrop()
						: (Y('setupClone', this),
							G.eventCanceled ||
								((a = nt(F)).removeAttribute('id'),
								(a.draggable = !1),
								(a.style['will-change'] = ''),
								this._hideClone(),
								I(a, this.options.chosenClass, !1),
								(G.clone = a)),
							(n.cloneId = Gt(function () {
								Y('clone', n),
									G.eventCanceled ||
										(n.options.removeCloneOnHide || L.insertBefore(a, F),
										n._hideClone(),
										B({ sortable: n, name: 'clone' }));
							})),
							e || I(F, i.dragClass, !0),
							e
								? ((At = !0), (n._loopId = setInterval(n._emulateDragOver, 50)))
								: (r(document, 'mouseup', n._onDrop),
									r(document, 'touchend', n._onDrop),
									r(document, 'touchcancel', n._onDrop),
									o && ((o.effectAllowed = 'move'), i.setData) && i.setData.call(n, o, F),
									s(document, 'drop', n),
									P(F, 'transform', 'translateZ(0)')),
							(Ot = !0),
							(n._dragStartId = Gt(n._dragStarted.bind(n, e, t))),
							s(document, 'selectstart', n),
							(_t = !0),
							g && P(document.body, 'user-select', 'none'));
			},
			_onDragOver: function (u) {
				var n,
					o,
					i,
					t,
					r = this.el,
					a = u.target,
					e = this.options,
					l = e.group,
					s = G.active,
					c = bt === l,
					d = e.sort,
					h = z || s,
					p = this,
					f = !1;
				if (!kt) {
					if (
						(void 0 !== u.preventDefault && u.cancelable && u.preventDefault(),
						(a = N(a, e.draggable, r, !0)),
						T('dragOver'),
						G.eventCanceled)
					)
						return f;
					if (
						F.contains(u.target) ||
						(a.animated && a.animatingX && a.animatingY) ||
						p._ignoreWhileAnimating === a
					)
						return O(!1);
					if (
						((At = !1),
						s &&
							!e.disabled &&
							(c
								? d || (o = j !== L)
								: z === this ||
									((this.lastPutMode = bt.checkPull(this, s, F, u)) && l.checkPut(this, s, F, u))))
					) {
						if (
							((i = 'vertical' === this._getDirection(u, a)),
							(n = k(F)),
							T('dragOverValid'),
							G.eventCanceled)
						)
							return f;
						if (o)
							return (
								(j = L),
								x(),
								this._hideClone(),
								T('revert'),
								G.eventCanceled || (ft ? L.insertBefore(F, ft) : L.appendChild(F)),
								O(!0)
							);
						if (
							(b = $(r, e.draggable)) &&
							((w = u),
							(E = i),
							(C = k($((C = this).el, C.options.draggable))),
							!(E
								? w.clientX > C.right + 10 ||
									(w.clientX <= C.right && w.clientY > C.bottom && w.clientX >= C.left)
								: (w.clientX > C.right && w.clientY > C.top) ||
									(w.clientX <= C.right && w.clientY > C.bottom + 10)) || b.animated)
						) {
							if (
								b &&
								((E = u),
								(w = i),
								(C = k(Z((C = this).el, 0, C.options, !0))),
								w
									? E.clientX < C.left - 10 || (E.clientY < C.top && E.clientX < C.right)
									: E.clientY < C.top - 10 || (E.clientY < C.bottom && E.clientX < C.left))
							) {
								if ((S = Z(r, 0, e, !0)) === F) return O(!1);
								if (((y = k((a = S))), !1 !== Kt(L, r, F, n, a, y, u, !1)))
									return x(), r.insertBefore(F, S), (j = r), A(), O(!0);
							} else if (a.parentNode === r) {
								var g,
									m,
									v,
									b,
									y = k(a),
									w = F.parentNode !== r,
									E =
										((E = (F.animated && F.toRect) || n),
										(C = (a.animated && a.toRect) || y),
										(D = (t = i) ? E.left : E.top),
										(l = t ? E.right : E.bottom),
										(b = t ? E.width : E.height),
										(S = t ? C.left : C.top),
										(E = t ? C.right : C.bottom),
										(C = t ? C.width : C.height),
										!(D === S || l === E || D + b / 2 === S + C / 2)),
									D = i ? 'top' : 'left',
									S = (b = V(a, 'top', 'top') || V(F, 'top', 'top')) ? b.scrollTop : void 0;
								if (
									(Ct !== a && ((m = y[D]), (Nt = !1), (It = (!E && e.invertSwap) || w)),
									0 !==
										(g = (function (t, e, n, o, i, r, a, l) {
											var s = o ? u.clientY : u.clientX,
												c = o ? n.height : n.width,
												t = o ? n.top : n.left,
												o = o ? n.bottom : n.right,
												n = !1;
											if (!a)
												if (l && xt < c * i) {
													if (
														(Nt =
															(!Nt && (1 === Tt ? t + (c * r) / 2 < s : s < o - (c * r) / 2)) || Nt)
													)
														n = !0;
													else if (1 === Tt ? s < t + xt : o - xt < s) return -Tt;
												} else if (t + (c * (1 - i)) / 2 < s && s < o - (c * (1 - i)) / 2)
													return (l = e), R(F) < R(l) ? 1 : -1;
											return (n = n || a) && (s < t + (c * r) / 2 || o - (c * r) / 2 < s)
												? t + c / 2 < s
													? 1
													: -1
												: 0;
										})(
											0,
											a,
											y,
											i,
											E ? 1 : e.swapThreshold,
											null == e.invertedSwapThreshold ? e.swapThreshold : e.invertedSwapThreshold,
											It,
											Ct === a
										)))
								)
									for (
										var _ = R(F);
										(v = j.children[(_ -= g)]) && ('none' === P(v, 'display') || v === H);

									);
								if (0 === g || v === a) return O(!1);
								Tt = g;
								var C = (Ct = a).nextElementSibling,
									w = !1;
								if (!1 !== (E = Kt(L, r, F, n, a, y, u, (w = 1 === g))))
									return (
										(1 !== E && -1 !== E) || (w = 1 === E),
										(kt = !0),
										setTimeout(zt, 30),
										x(),
										w && !C ? r.appendChild(F) : a.parentNode.insertBefore(F, w ? C : a),
										b && et(b, 0, S - b.scrollTop),
										(j = F.parentNode),
										void 0 === m || It || (xt = Math.abs(m - k(a)[D])),
										A(),
										O(!0)
									);
							}
						} else {
							if (b === F) return O(!1);
							if (
								((a = b && r === u.target ? b : a) && (y = k(a)),
								!1 !== Kt(L, r, F, n, a, y, u, !!a))
							)
								return (
									x(),
									b && b.nextSibling ? r.insertBefore(F, b.nextSibling) : r.appendChild(F),
									(j = r),
									A(),
									O(!0)
								);
						}
						if (r.contains(F)) return O(!1);
					}
					return !1;
				}
				function T(t, e) {
					Y(
						t,
						p,
						M(
							{
								evt: u,
								isOwner: c,
								axis: i ? 'vertical' : 'horizontal',
								revert: o,
								dragRect: n,
								targetRect: y,
								canSort: d,
								fromSortable: h,
								target: a,
								completed: O,
								onMove: function (t, e) {
									return Kt(L, r, F, n, t, k(t), u, e);
								},
								changed: A
							},
							e
						)
					);
				}
				function x() {
					T('dragOverAnimationCapture'),
						p.captureAnimationState(),
						p !== h && h.captureAnimationState();
				}
				function O(t) {
					return (
						T('dragOverCompleted', { insertion: t }),
						t &&
							(c ? s._hideClone() : s._showClone(p),
							p !== h && (I(F, (z || s).options.ghostClass, !1), I(F, e.ghostClass, !0)),
							z !== p && p !== G.active ? (z = p) : p === G.active && (z = z && null),
							h === p && (p._ignoreWhileAnimating = a),
							p.animateAll(function () {
								T('dragOverAnimationComplete'), (p._ignoreWhileAnimating = null);
							}),
							p !== h) &&
							(h.animateAll(), (h._ignoreWhileAnimating = null)),
						((a === F && !F.animated) || (a === r && !a.animated)) && (Ct = null),
						e.dragoverBubble ||
							u.rootEl ||
							a === document ||
							(F.parentNode[X]._isOutsideThisEl(u.target), t) ||
							Ht(u),
						!e.dragoverBubble && u.stopPropagation && u.stopPropagation(),
						(f = !0)
					);
				}
				function A() {
					(K = R(F)),
						(W = R(F, e.draggable)),
						B({
							sortable: p,
							name: 'change',
							toEl: r,
							newIndex: K,
							newDraggableIndex: W,
							originalEvent: u
						});
				}
			},
			_ignoreWhileAnimating: null,
			_offMoveEvents: function () {
				r(document, 'mousemove', this._onTouchMove),
					r(document, 'touchmove', this._onTouchMove),
					r(document, 'pointermove', this._onTouchMove),
					r(document, 'dragover', Ht),
					r(document, 'mousemove', Ht),
					r(document, 'touchmove', Ht);
			},
			_offUpEvents: function () {
				var t = this.el.ownerDocument;
				r(t, 'mouseup', this._onDrop),
					r(t, 'touchend', this._onDrop),
					r(t, 'pointerup', this._onDrop),
					r(t, 'touchcancel', this._onDrop),
					r(document, 'selectstart', this);
			},
			_onDrop: function (t) {
				var e = this.el,
					n = this.options;
				(K = R(F)),
					(W = R(F, n.draggable)),
					Y('drop', this, { evt: t }),
					(j = F && F.parentNode),
					(K = R(F)),
					(W = R(F, n.draggable)),
					G.eventCanceled ||
						((Nt = It = Ot = !1),
						clearInterval(this._loopId),
						clearTimeout(this._dragStartTimer),
						Ut(this.cloneId),
						Ut(this._dragStartId),
						this.nativeDraggable &&
							(r(document, 'drop', this), r(e, 'dragstart', this._onDragStart)),
						this._offMoveEvents(),
						this._offUpEvents(),
						g && P(document.body, 'user-select', ''),
						P(F, 'transform', ''),
						t &&
							(_t && (t.cancelable && t.preventDefault(), n.dropBubble || t.stopPropagation()),
							H && H.parentNode && H.parentNode.removeChild(H),
							(L === j || (z && 'clone' !== z.lastPutMode)) &&
								a &&
								a.parentNode &&
								a.parentNode.removeChild(a),
							F) &&
							(this.nativeDraggable && r(F, 'dragend', this),
							Wt(F),
							(F.style['will-change'] = ''),
							_t && !Ot && I(F, (z || this).options.ghostClass, !1),
							I(F, this.options.chosenClass, !1),
							B({
								sortable: this,
								name: 'unchoose',
								toEl: j,
								newIndex: null,
								newDraggableIndex: null,
								originalEvent: t
							}),
							L !== j
								? (0 <= K &&
										(B({ rootEl: j, name: 'add', toEl: j, fromEl: L, originalEvent: t }),
										B({ sortable: this, name: 'remove', toEl: j, originalEvent: t }),
										B({ rootEl: j, name: 'sort', toEl: j, fromEl: L, originalEvent: t }),
										B({ sortable: this, name: 'sort', toEl: j, originalEvent: t })),
									z && z.save())
								: K !== mt &&
									0 <= K &&
									(B({ sortable: this, name: 'update', toEl: j, originalEvent: t }),
									B({ sortable: this, name: 'sort', toEl: j, originalEvent: t })),
							G.active) &&
							((null != K && -1 !== K) || ((K = mt), (W = vt)),
							B({ sortable: this, name: 'end', toEl: j, originalEvent: t }),
							this.save())),
					this._nulling();
			},
			_nulling: function () {
				Y('nulling', this),
					(L =
						F =
						j =
						H =
						ft =
						a =
						gt =
						i =
						yt =
						c =
						_t =
						K =
						W =
						mt =
						vt =
						Ct =
						Tt =
						z =
						bt =
						G.dragged =
						G.ghost =
						G.clone =
						G.active =
							null),
					Rt.forEach(function (t) {
						t.checked = !0;
					}),
					(Rt.length = wt = Et = 0);
			},
			handleEvent: function (t) {
				switch (t.type) {
					case 'drop':
					case 'dragend':
						this._onDrop(t);
						break;
					case 'dragenter':
					case 'dragover':
						F &&
							(this._onDragOver(t),
							(e = t).dataTransfer && (e.dataTransfer.dropEffect = 'move'),
							e.cancelable) &&
							e.preventDefault();
						break;
					case 'selectstart':
						t.preventDefault();
				}
				var e;
			},
			toArray: function () {
				for (var t, e = [], n = this.el.children, o = 0, i = n.length, r = this.options; o < i; o++)
					N((t = n[o]), r.draggable, this.el, !1) &&
						e.push(
							t.getAttribute(r.dataIdAttr) ||
								(function (t) {
									for (
										var e = t.tagName + t.className + t.src + t.href + t.textContent,
											n = e.length,
											o = 0;
										n--;

									)
										o += e.charCodeAt(n);
									return o.toString(36);
								})(t)
						);
				return e;
			},
			sort: function (t, e) {
				var n = {},
					o = this.el;
				this.toArray().forEach(function (t, e) {
					N((e = o.children[e]), this.options.draggable, o, !1) && (n[t] = e);
				}, this),
					e && this.captureAnimationState(),
					t.forEach(function (t) {
						n[t] && (o.removeChild(n[t]), o.appendChild(n[t]));
					}),
					e && this.animateAll();
			},
			save: function () {
				var t = this.options.store;
				t && t.set && t.set(this);
			},
			closest: function (t, e) {
				return N(t, e || this.options.draggable, this.el, !1);
			},
			option: function (t, e) {
				var n = this.options;
				if (void 0 === e) return n[t];
				var o = lt.modifyOption(this, t, e);
				(n[t] = void 0 !== o ? o : e), 'group' === t && dt(n);
			},
			destroy: function () {
				Y('destroy', this);
				var t = this.el;
				(t[X] = null),
					r(t, 'mousedown', this._onTapStart),
					r(t, 'touchstart', this._onTapStart),
					r(t, 'pointerdown', this._onTapStart),
					this.nativeDraggable && (r(t, 'dragover', this), r(t, 'dragenter', this)),
					Array.prototype.forEach.call(t.querySelectorAll('[draggable]'), function (t) {
						t.removeAttribute('draggable');
					}),
					this._onDrop(),
					this._disableDelayedDragEvents(),
					Mt.splice(Mt.indexOf(this.el), 1),
					(this.el = t = null);
			},
			_hideClone: function () {
				i ||
					(Y('hideClone', this), G.eventCanceled) ||
					(P(a, 'display', 'none'),
					this.options.removeCloneOnHide && a.parentNode && a.parentNode.removeChild(a),
					(i = !0));
			},
			_showClone: function (t) {
				'clone' === t.lastPutMode
					? i &&
						(Y('showClone', this),
						G.eventCanceled ||
							(F.parentNode != L || this.options.group.revertClone
								? ft
									? L.insertBefore(a, ft)
									: L.appendChild(a)
								: L.insertBefore(a, F),
							this.options.group.revertClone && this.animate(F, a),
							P(a, 'display', ''),
							(i = !1)))
					: this._hideClone();
			}
		}),
		Xt &&
			s(document, 'touchmove', function (t) {
				(G.active || Ot) && t.cancelable && t.preventDefault();
			}),
		(G.utils = {
			on: s,
			off: r,
			css: P,
			find: q,
			is: function (t, e) {
				return !!N(t, e, t, !1);
			},
			extend: function (t, e) {
				if (t && e) for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
				return t;
			},
			throttle: tt,
			closest: N,
			toggleClass: I,
			clone: nt,
			index: R,
			nextTick: Gt,
			cancelNextTick: Ut,
			detectDirection: ut,
			getChild: Z
		}),
		(G.get = function (t) {
			return t[X];
		}),
		(G.mount = function () {
			for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
			(e = e[0].constructor === Array ? e[0] : e).forEach(function (t) {
				if (!t.prototype || !t.prototype.constructor)
					throw 'Sortable: Mounted plugin must be a constructor function, not '.concat(
						{}.toString.call(t)
					);
				t.utils && (G.utils = M(M({}, G.utils), t.utils)), lt.mount(t);
			});
		}),
		(G.create = function (t, e) {
			return new G(t, e);
		});
	var qt,
		Vt,
		Zt,
		$t,
		Qt,
		Jt,
		A = [],
		te = !(G.version = '1.15.0');
	function ee() {
		A.forEach(function (t) {
			clearInterval(t.pid);
		}),
			(A = []);
	}
	function ne() {
		clearInterval(Jt);
	}
	var d,
		oe = tt(function (n, t, e, o) {
			if (t.scroll) {
				var i,
					r = (n.touches ? n.touches[0] : n).clientX,
					a = (n.touches ? n.touches[0] : n).clientY,
					l = t.scrollSensitivity,
					s = t.scrollSpeed,
					c = x(),
					u = !1,
					d = 0,
					h = (qt =
						Vt !== e && ((Vt = e), ee(), (qt = t.scroll), (i = t.scrollFn), !0 === qt)
							? O(e, !0)
							: qt);
				do {
					var p = h,
						f = (C = k(p)).top,
						g = C.bottom,
						m = C.left,
						v = C.right,
						b = C.width,
						y = C.height,
						w = void 0,
						E = p.scrollWidth,
						D = p.scrollHeight,
						S = P(p),
						_ = p.scrollLeft,
						C = p.scrollTop,
						S =
							p === c
								? ((w =
										b < E &&
										('auto' === S.overflowX ||
											'scroll' === S.overflowX ||
											'visible' === S.overflowX)),
									y < D &&
										('auto' === S.overflowY ||
											'scroll' === S.overflowY ||
											'visible' === S.overflowY))
								: ((w = b < E && ('auto' === S.overflowX || 'scroll' === S.overflowX)),
									y < D && ('auto' === S.overflowY || 'scroll' === S.overflowY)),
						_ = w && (Math.abs(v - r) <= l && _ + b < E) - (Math.abs(m - r) <= l && !!_),
						C = S && (Math.abs(g - a) <= l && C + y < D) - (Math.abs(f - a) <= l && !!C);
					if (!A[d]) for (var T = 0; T <= d; T++) A[T] || (A[T] = {});
					(A[d].vx == _ && A[d].vy == C && A[d].el === p) ||
						((A[d].el = p),
						(A[d].vx = _),
						(A[d].vy = C),
						clearInterval(A[d].pid),
						0 == _ && 0 == C) ||
						((u = !0),
						(A[d].pid = setInterval(
							function () {
								o && 0 === this.layer && G.active._onTouchMove(Qt);
								var t = A[this.layer].vy ? A[this.layer].vy * s : 0,
									e = A[this.layer].vx ? A[this.layer].vx * s : 0;
								('function' == typeof i &&
									'continue' !== i.call(G.dragged.parentNode[X], e, t, n, Qt, A[this.layer].el)) ||
									et(A[this.layer].el, e, t);
							}.bind({ layer: d }),
							24
						))),
						d++;
				} while (t.bubbleScroll && h !== c && (h = O(h, !1)));
				te = u;
			}
		}, 30);
	function ie() {}
	function re() {}
	(ie.prototype = {
		startIndex: null,
		dragStart: function (t) {
			(t = t.oldDraggableIndex), (this.startIndex = t);
		},
		onSpill: function (t) {
			var e = t.dragEl,
				n = t.putSortable;
			this.sortable.captureAnimationState(),
				n && n.captureAnimationState(),
				(t = Z(this.sortable.el, this.startIndex, this.options))
					? this.sortable.el.insertBefore(e, t)
					: this.sortable.el.appendChild(e),
				this.sortable.animateAll(),
				n && n.animateAll();
		},
		drop: (m = function (t) {
			var e = t.originalEvent,
				n = t.putSortable,
				o = t.dragEl,
				i = t.activeSortable,
				r = t.dispatchSortableEvent,
				a = t.hideGhostForTarget,
				t = t.unhideGhostForTarget;
			e &&
				((i = n || i),
				a(),
				(e = e.changedTouches && e.changedTouches.length ? e.changedTouches[0] : e),
				(e = document.elementFromPoint(e.clientX, e.clientY)),
				t(),
				i) &&
				!i.el.contains(e) &&
				(r('spill'), this.onSpill({ dragEl: o, putSortable: n }));
		})
	}),
		l(ie, { pluginName: 'revertOnSpill' }),
		(re.prototype = {
			onSpill: function (t) {
				var e = t.dragEl;
				(t = t.putSortable || this.sortable).captureAnimationState(),
					e.parentNode && e.parentNode.removeChild(e),
					t.animateAll();
			},
			drop: m
		}),
		l(re, { pluginName: 'removeOnSpill' });
	var ae,
		v,
		b,
		le,
		se,
		w = [],
		E = [],
		ce = !1,
		D = !1,
		ue = !1;
	function de(n, o) {
		E.forEach(function (t, e) {
			(e = o.children[t.sortableIndex + (n ? Number(e) : 0)])
				? o.insertBefore(t, e)
				: o.appendChild(t);
		});
	}
	function he() {
		w.forEach(function (t) {
			t !== b && t.parentNode && t.parentNode.removeChild(t);
		});
	}
	return (
		G.mount(
			new (function () {
				function t() {
					for (var t in ((this.defaults = {
						scroll: !0,
						forceAutoScrollFallback: !1,
						scrollSensitivity: 30,
						scrollSpeed: 10,
						bubbleScroll: !0
					}),
					this))
						'_' === t.charAt(0) && 'function' == typeof this[t] && (this[t] = this[t].bind(this));
				}
				return (
					(t.prototype = {
						dragStarted: function (t) {
							(t = t.originalEvent),
								this.sortable.nativeDraggable
									? s(document, 'dragover', this._handleAutoScroll)
									: this.options.supportPointer
										? s(document, 'pointermove', this._handleFallbackAutoScroll)
										: t.touches
											? s(document, 'touchmove', this._handleFallbackAutoScroll)
											: s(document, 'mousemove', this._handleFallbackAutoScroll);
						},
						dragOverCompleted: function (t) {
							(t = t.originalEvent),
								this.options.dragOverBubble || t.rootEl || this._handleAutoScroll(t);
						},
						drop: function () {
							this.sortable.nativeDraggable
								? r(document, 'dragover', this._handleAutoScroll)
								: (r(document, 'pointermove', this._handleFallbackAutoScroll),
									r(document, 'touchmove', this._handleFallbackAutoScroll),
									r(document, 'mousemove', this._handleFallbackAutoScroll)),
								ne(),
								ee(),
								clearTimeout(T),
								(T = void 0);
						},
						nulling: function () {
							(Qt = Vt = qt = te = Jt = Zt = $t = null), (A.length = 0);
						},
						_handleFallbackAutoScroll: function (t) {
							this._handleAutoScroll(t, !0);
						},
						_handleAutoScroll: function (e, n) {
							var o,
								i = this,
								r = (e.touches ? e.touches[0] : e).clientX,
								a = (e.touches ? e.touches[0] : e).clientY,
								t = document.elementFromPoint(r, a);
							(Qt = e),
								n || this.options.forceAutoScrollFallback || S || y || g
									? (oe(e, this.options, t, n),
										(o = O(t, !0)),
										!te ||
											(Jt && r === Zt && a === $t) ||
											(Jt && ne(),
											(Jt = setInterval(function () {
												var t = O(document.elementFromPoint(r, a), !0);
												t !== o && ((o = t), ee()), oe(e, i.options, t, n);
											}, 10)),
											(Zt = r),
											($t = a)))
									: this.options.bubbleScroll && O(t, !0) !== x()
										? oe(e, this.options, O(t, !1), !1)
										: ee();
						}
					}),
					l(t, { pluginName: 'scroll', initializeByDefault: !0 })
				);
			})()
		),
		G.mount(re, ie),
		G.mount(
			new (function () {
				function t() {
					this.defaults = { swapClass: 'sortable-swap-highlight' };
				}
				return (
					(t.prototype = {
						dragStart: function (t) {
							(t = t.dragEl), (d = t);
						},
						dragOverValid: function (t) {
							var e = t.completed,
								n = t.target,
								o = t.onMove,
								i = t.activeSortable,
								r = t.changed,
								a = t.cancel;
							i.options.swap &&
								((t = this.sortable.el),
								(i = this.options),
								n &&
									n !== t &&
									((t = d), (d = !1 !== o(n) ? (I(n, i.swapClass, !0), n) : null), t) &&
									t !== d &&
									I(t, i.swapClass, !1),
								r(),
								e(!0),
								a());
						},
						drop: function (t) {
							var e,
								n,
								o = t.activeSortable,
								i = t.putSortable,
								r = t.dragEl,
								a = i || this.sortable,
								l = this.options;
							d && I(d, l.swapClass, !1),
								d &&
									(l.swap || (i && i.options.swap)) &&
									r !== d &&
									(a.captureAnimationState(),
									a !== o && o.captureAnimationState(),
									(n = d),
									(t = (e = r).parentNode),
									(l = n.parentNode),
									t &&
										l &&
										!t.isEqualNode(n) &&
										!l.isEqualNode(e) &&
										((i = R(e)),
										(r = R(n)),
										t.isEqualNode(l) && i < r && r++,
										t.insertBefore(n, t.children[i]),
										l.insertBefore(e, l.children[r])),
									a.animateAll(),
									a !== o) &&
									o.animateAll();
						},
						nulling: function () {
							d = null;
						}
					}),
					l(t, {
						pluginName: 'swap',
						eventProperties: function () {
							return { swapItem: d };
						}
					})
				);
			})()
		),
		G.mount(
			new (function () {
				function t(o) {
					for (var t in this)
						'_' === t.charAt(0) && 'function' == typeof this[t] && (this[t] = this[t].bind(this));
					o.options.avoidImplicitDeselect ||
						(o.options.supportPointer
							? s(document, 'pointerup', this._deselectMultiDrag)
							: (s(document, 'mouseup', this._deselectMultiDrag),
								s(document, 'touchend', this._deselectMultiDrag))),
						s(document, 'keydown', this._checkKeyDown),
						s(document, 'keyup', this._checkKeyUp),
						(this.defaults = {
							selectedClass: 'sortable-selected',
							multiDragKey: null,
							avoidImplicitDeselect: !1,
							setData: function (t, e) {
								var n = '';
								w.length && v === o
									? w.forEach(function (t, e) {
											n += (e ? ', ' : '') + t.textContent;
										})
									: (n = e.textContent),
									t.setData('Text', n);
							}
						});
				}
				return (
					(t.prototype = {
						multiDragKeyDown: !1,
						isMultiDrag: !1,
						delayStartGlobal: function (t) {
							(t = t.dragEl), (b = t);
						},
						delayEnded: function () {
							this.isMultiDrag = ~w.indexOf(b);
						},
						setupClone: function (t) {
							var e = t.sortable,
								t = t.cancel;
							if (this.isMultiDrag) {
								for (var n = 0; n < w.length; n++)
									E.push(nt(w[n])),
										(E[n].sortableIndex = w[n].sortableIndex),
										(E[n].draggable = !1),
										(E[n].style['will-change'] = ''),
										I(E[n], this.options.selectedClass, !1),
										w[n] === b && I(E[n], this.options.chosenClass, !1);
								e._hideClone(), t();
							}
						},
						clone: function (t) {
							var e = t.sortable,
								n = t.rootEl,
								o = t.dispatchSortableEvent,
								t = t.cancel;
							this.isMultiDrag &&
								!this.options.removeCloneOnHide &&
								w.length &&
								v === e &&
								(de(!0, n), o('clone'), t());
						},
						showClone: function (t) {
							var e = t.cloneNowShown,
								n = t.rootEl,
								t = t.cancel;
							this.isMultiDrag &&
								(de(!1, n),
								E.forEach(function (t) {
									P(t, 'display', '');
								}),
								e(),
								(se = !1),
								t());
						},
						hideClone: function (t) {
							var e = this,
								n = (t.sortable, t.cloneNowHidden),
								t = t.cancel;
							this.isMultiDrag &&
								(E.forEach(function (t) {
									P(t, 'display', 'none'),
										e.options.removeCloneOnHide && t.parentNode && t.parentNode.removeChild(t);
								}),
								n(),
								(se = !0),
								t());
						},
						dragStartGlobal: function (t) {
							t.sortable,
								!this.isMultiDrag && v && v.multiDrag._deselectMultiDrag(),
								w.forEach(function (t) {
									t.sortableIndex = R(t);
								}),
								(w = w.sort(function (t, e) {
									return t.sortableIndex - e.sortableIndex;
								})),
								(ue = !0);
						},
						dragStarted: function (t) {
							var e,
								n = this,
								t = t.sortable;
							this.isMultiDrag &&
								(this.options.sort &&
									(t.captureAnimationState(), this.options.animation) &&
									(w.forEach(function (t) {
										t !== b && P(t, 'position', 'absolute');
									}),
									(e = k(b, !1, !0, !0)),
									w.forEach(function (t) {
										t !== b && ot(t, e);
									}),
									(ce = D = !0)),
								t.animateAll(function () {
									(ce = D = !1),
										n.options.animation &&
											w.forEach(function (t) {
												it(t);
											}),
										n.options.sort && he();
								}));
						},
						dragOver: function (t) {
							var e = t.target,
								n = t.completed,
								t = t.cancel;
							D && ~w.indexOf(e) && (n(!1), t());
						},
						revert: function (t) {
							var n,
								o,
								e = t.fromSortable,
								i = t.rootEl,
								r = t.sortable,
								a = t.dragRect;
							1 < w.length &&
								(w.forEach(function (t) {
									r.addAnimationState({ target: t, rect: D ? k(t) : a }),
										it(t),
										(t.fromRect = a),
										e.removeAnimationState(t);
								}),
								(D = !1),
								(n = !this.options.removeCloneOnHide),
								(o = i),
								w.forEach(function (t, e) {
									(e = o.children[t.sortableIndex + (n ? Number(e) : 0)])
										? o.insertBefore(t, e)
										: o.appendChild(t);
								}));
						},
						dragOverCompleted: function (t) {
							var e,
								n = t.sortable,
								o = t.isOwner,
								i = t.insertion,
								r = t.activeSortable,
								a = t.parentEl,
								l = t.putSortable,
								t = this.options;
							i &&
								(o && r._hideClone(),
								(ce = !1),
								t.animation &&
									1 < w.length &&
									(D || (!o && !r.options.sort && !l)) &&
									((e = k(b, !1, !0, !0)),
									w.forEach(function (t) {
										t !== b && (ot(t, e), a.appendChild(t));
									}),
									(D = !0)),
								o ||
									(D || he(),
									1 < w.length
										? ((o = se),
											r._showClone(n),
											r.options.animation &&
												!se &&
												o &&
												E.forEach(function (t) {
													r.addAnimationState({ target: t, rect: le }),
														(t.fromRect = le),
														(t.thisAnimationDuration = null);
												}))
										: r._showClone(n)));
						},
						dragOverAnimationCapture: function (t) {
							var e = t.dragRect,
								n = t.isOwner,
								t = t.activeSortable;
							w.forEach(function (t) {
								t.thisAnimationDuration = null;
							}),
								t.options.animation &&
									!n &&
									t.multiDrag.isMultiDrag &&
									((le = l({}, e)), (e = p(b, !0)), (le.top -= e.f), (le.left -= e.e));
						},
						dragOverAnimationComplete: function () {
							D && ((D = !1), he());
						},
						drop: function (t) {
							var e = t.originalEvent,
								n = t.rootEl,
								o = t.parentEl,
								i = t.sortable,
								r = t.dispatchSortableEvent,
								a = t.oldIndex,
								l = t.putSortable,
								s = l || this.sortable;
							if (e) {
								var c,
									u,
									d,
									h = this.options,
									p = o.children;
								if (!ue)
									if (
										(h.multiDragKey && !this.multiDragKeyDown && this._deselectMultiDrag(),
										I(b, h.selectedClass, !~w.indexOf(b)),
										~w.indexOf(b))
									)
										w.splice(w.indexOf(b), 1),
											(ae = null),
											st({
												sortable: i,
												rootEl: n,
												name: 'deselect',
												targetEl: b,
												originalEvent: e
											});
									else {
										if (
											(w.push(b),
											st({ sortable: i, rootEl: n, name: 'select', targetEl: b, originalEvent: e }),
											e.shiftKey && ae && i.el.contains(ae))
										) {
											var f = R(ae),
												t = R(b);
											if (~f && ~t && f !== t)
												for (var g, m = f < t ? ((g = f), t) : ((g = t), f + 1); g < m; g++)
													~w.indexOf(p[g]) ||
														(I(p[g], h.selectedClass, !0),
														w.push(p[g]),
														st({
															sortable: i,
															rootEl: n,
															name: 'select',
															targetEl: p[g],
															originalEvent: e
														}));
										} else ae = b;
										v = s;
									}
								ue &&
									this.isMultiDrag &&
									((D = !1),
									(o[X].options.sort || o !== n) &&
										1 < w.length &&
										((c = k(b)),
										(u = R(b, ':not(.' + this.options.selectedClass + ')')),
										!ce && h.animation && (b.thisAnimationDuration = null),
										s.captureAnimationState(),
										ce ||
											(h.animation &&
												((b.fromRect = c),
												w.forEach(function (t) {
													var e;
													(t.thisAnimationDuration = null),
														t !== b &&
															((e = D ? k(t) : c),
															(t.fromRect = e),
															s.addAnimationState({ target: t, rect: e }));
												})),
											he(),
											w.forEach(function (t) {
												p[u] ? o.insertBefore(t, p[u]) : o.appendChild(t), u++;
											}),
											a === R(b) &&
												((d = !1),
												w.forEach(function (t) {
													t.sortableIndex !== R(t) && (d = !0);
												}),
												d) &&
												r('update')),
										w.forEach(function (t) {
											it(t);
										}),
										s.animateAll()),
									(v = s)),
									(n === o || (l && 'clone' !== l.lastPutMode)) &&
										E.forEach(function (t) {
											t.parentNode && t.parentNode.removeChild(t);
										});
							}
						},
						nullingGlobal: function () {
							(this.isMultiDrag = ue = !1), (E.length = 0);
						},
						destroyGlobal: function () {
							this._deselectMultiDrag(),
								r(document, 'pointerup', this._deselectMultiDrag),
								r(document, 'mouseup', this._deselectMultiDrag),
								r(document, 'touchend', this._deselectMultiDrag),
								r(document, 'keydown', this._checkKeyDown),
								r(document, 'keyup', this._checkKeyUp);
						},
						_deselectMultiDrag: function (t) {
							if (
								!(
									(void 0 !== ue && ue) ||
									v !== this.sortable ||
									(t && N(t.target, this.options.draggable, this.sortable.el, !1)) ||
									(t && 0 !== t.button)
								)
							)
								for (; w.length; ) {
									var e = w[0];
									I(e, this.options.selectedClass, !1),
										w.shift(),
										st({
											sortable: this.sortable,
											rootEl: this.sortable.el,
											name: 'deselect',
											targetEl: e,
											originalEvent: t
										});
								}
						},
						_checkKeyDown: function (t) {
							t.key === this.options.multiDragKey && (this.multiDragKeyDown = !0);
						},
						_checkKeyUp: function (t) {
							t.key === this.options.multiDragKey && (this.multiDragKeyDown = !1);
						}
					}),
					l(t, {
						pluginName: 'multiDrag',
						utils: {
							select: function (t) {
								var e = t.parentNode[X];
								e &&
									e.options.multiDrag &&
									!~w.indexOf(t) &&
									(v && v !== e && (v.multiDrag._deselectMultiDrag(), (v = e)),
									I(t, e.options.selectedClass, !0),
									w.push(t));
							},
							deselect: function (t) {
								var e = t.parentNode[X],
									n = w.indexOf(t);
								e &&
									e.options.multiDrag &&
									~n &&
									(I(t, e.options.selectedClass, !1), w.splice(n, 1));
							}
						},
						eventProperties: function () {
							var t,
								n = this,
								o = [],
								i = [];
							return (
								w.forEach(function (t) {
									var e;
									o.push({ multiDragElement: t, index: t.sortableIndex }),
										(e =
											D && t !== b
												? -1
												: D
													? R(t, ':not(.' + n.options.selectedClass + ')')
													: R(t)),
										i.push({ multiDragElement: t, index: e });
								}),
								{
									items:
										(function (t) {
											if (Array.isArray(t)) return h(t);
										})((t = w)) ||
										(function () {
											if (
												('undefined' != typeof Symbol && null != t[Symbol.iterator]) ||
												null != t['@@iterator']
											)
												return Array.from(t);
										})() ||
										(function (t) {
											var e;
											if (t)
												return 'string' == typeof t
													? h(t, void 0)
													: 'Map' ===
																(e =
																	'Object' ===
																		(e = Object.prototype.toString.call(t).slice(8, -1)) &&
																	t.constructor
																		? t.constructor.name
																		: e) || 'Set' === e
														? Array.from(t)
														: 'Arguments' === e ||
															  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
															? h(t, void 0)
															: void 0;
										})(t) ||
										(function () {
											throw new TypeError(
												'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
											);
										})(),
									clones: [].concat(E),
									oldIndicies: o,
									newIndicies: i
								}
							);
						},
						optionListeners: {
							multiDragKey: function (t) {
								return (
									'ctrl' === (t = t.toLowerCase())
										? (t = 'Control')
										: 1 < t.length && (t = t.charAt(0).toUpperCase() + t.substr(1)),
									t
								);
							}
						}
					})
				);
			})()
		),
		G
	);
});
