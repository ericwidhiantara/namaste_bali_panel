var tns = (function () {
	var t = window,
		Qi =
			t.requestAnimationFrame ||
			t.webkitRequestAnimationFrame ||
			t.mozRequestAnimationFrame ||
			t.msRequestAnimationFrame ||
			function (t) {
				return setTimeout(t, 16);
			},
		e = window,
		Xi =
			e.cancelAnimationFrame ||
			e.mozCancelAnimationFrame ||
			function (t) {
				clearTimeout(t);
			};
	function Yi(t) {
		for (var e, n, i, a = t || {}, o = 1, r = arguments.length; o < r; o++)
			if (null !== (e = arguments[o])) for (n in e) a !== (i = e[n]) && void 0 !== i && (a[n] = i);
		return a;
	}
	function Ki(t) {
		return 0 <= ['true', 'false'].indexOf(t) ? JSON.parse(t) : t;
	}
	function Ji(t, e, n, i) {
		if (i)
			try {
				t.setItem(e, n);
			} catch (t) {}
		return n;
	}
	function Ui() {
		var t = document,
			e = t.body;
		return e || ((e = t.createElement('body')).fake = !0), e;
	}
	var n = document.documentElement;
	function _i(t) {
		var e = '';
		return (
			t.fake &&
				((e = n.style.overflow),
				(t.style.background = ''),
				(t.style.overflow = n.style.overflow = 'hidden'),
				n.appendChild(t)),
			e
		);
	}
	function Zi(t, e) {
		t.fake && (t.remove(), (n.style.overflow = e), n.offsetHeight);
	}
	function $i(t, e, n, i) {
		'insertRule' in t ? t.insertRule(e + '{' + n + '}', i) : t.addRule(e, n, i);
	}
	function ta(t) {
		return ('insertRule' in t ? t.cssRules : t.rules).length;
	}
	function ea(t, e, n) {
		for (var i = 0, a = t.length; i < a; i++) e.call(n, t[i], i);
	}
	var e = 'classList' in document.createElement('_'),
		na = e
			? function (t, e) {
					return t.classList.contains(e);
				}
			: function (t, e) {
					return 0 <= t.className.indexOf(e);
				},
		ia = e
			? function (t, e) {
					na(t, e) || t.classList.add(e);
				}
			: function (t, e) {
					na(t, e) || (t.className += ' ' + e);
				},
		aa = e
			? function (t, e) {
					na(t, e) && t.classList.remove(e);
				}
			: function (t, e) {
					na(t, e) && (t.className = t.className.replace(e, ''));
				};
	function oa(t, e) {
		return t.hasAttribute(e);
	}
	function ra(t, e) {
		return t.getAttribute(e);
	}
	function o(t) {
		return void 0 !== t.item;
	}
	function ua(t, e) {
		if (
			((t = o(t) || t instanceof Array ? t : [t]),
			'[object Object]' === Object.prototype.toString.call(e))
		)
			for (var n = t.length; n--; ) for (var i in e) t[n].setAttribute(i, e[i]);
	}
	function la(t, e) {
		t = o(t) || t instanceof Array ? t : [t];
		for (var n = (e = e instanceof Array ? e : [e]).length, i = t.length; i--; )
			for (var a = n; a--; ) t[i].removeAttribute(e[a]);
	}
	function sa(t) {
		for (var e = [], n = 0, i = t.length; n < i; n++) e.push(t[n]);
		return e;
	}
	function ca(t, e) {
		'none' !== t.style.display && (t.style.display = 'none');
	}
	function da(t, e) {
		'none' === t.style.display && (t.style.display = '');
	}
	function fa(t) {
		return 'none' !== window.getComputedStyle(t).display;
	}
	function pa(e) {
		var n, i;
		'string' == typeof e &&
			((n = [e]),
			(i = e.charAt(0).toUpperCase() + e.substr(1)),
			['Webkit', 'Moz', 'ms', 'O'].forEach(function (t) {
				('ms' === t && 'transform' !== e) || n.push(t + i);
			}),
			(e = n));
		for (var t = document.createElement('fakeelement'), a = (e.length, 0); a < e.length; a++) {
			var o = e[a];
			if (void 0 !== t.style[o]) return o;
		}
		return !1;
	}
	function va(t, e) {
		var n = !1;
		return (
			/^Webkit/.test(t)
				? (n = 'webkit' + e + 'End')
				: /^O/.test(t)
					? (n = 'o' + e + 'End')
					: t && (n = e.toLowerCase() + 'end'),
			n
		);
	}
	var i = !1;
	try {
		var a = Object.defineProperty({}, 'passive', {
			get: function () {
				i = !0;
			}
		});
		window.addEventListener('test', null, a);
	} catch (t) {}
	var r = !!i && { passive: !0 };
	function ha(t, e, n) {
		for (var i in e) {
			var a = 0 <= ['touchstart', 'touchmove'].indexOf(i) && !n && r;
			t.addEventListener(i, e[i], a);
		}
	}
	function ma(t, e) {
		for (var n in e) {
			var i = 0 <= ['touchstart', 'touchmove'].indexOf(n) && r;
			t.removeEventListener(n, e[n], i);
		}
	}
	function ya() {
		return {
			topics: {},
			on: function (t, e) {
				(this.topics[t] = this.topics[t] || []), this.topics[t].push(e);
			},
			off: function (t, e) {
				if (this.topics[t])
					for (var n = 0; n < this.topics[t].length; n++)
						if (this.topics[t][n] === e) {
							this.topics[t].splice(n, 1);
							break;
						}
			},
			emit: function (e, n) {
				(n.type = e),
					this.topics[e] &&
						this.topics[e].forEach(function (t) {
							t(n, e);
						});
			}
		};
	}
	Object.keys ||
		(Object.keys = function (t) {
			var e,
				n = [];
			for (e in t) Object.prototype.hasOwnProperty.call(t, e) && n.push(e);
			return n;
		}),
		'remove' in Element.prototype ||
			(Element.prototype.remove = function () {
				this.parentNode && this.parentNode.removeChild(this);
			});
	function ga(L) {
		L = Yi(
			{
				container: '.slider',
				mode: 'carousel',
				axis: 'horizontal',
				items: 1,
				gutter: 0,
				edgePadding: 0,
				fixedWidth: !1,
				autoWidth: !1,
				viewportMax: !1,
				slideBy: 1,
				center: !1,
				controls: !0,
				controlsPosition: 'top',
				controlsText: ['prev', 'next'],
				controlsContainer: !1,
				prevButton: !1,
				nextButton: !1,
				nav: !0,
				navPosition: 'top',
				navContainer: !1,
				navAsThumbnails: !1,
				arrowKeys: !1,
				speed: 300,
				autoplay: !1,
				autoplayPosition: 'top',
				autoplayTimeout: 5e3,
				autoplayDirection: 'forward',
				autoplayText: ['start', 'stop'],
				autoplayHoverPause: !1,
				autoplayButton: !1,
				autoplayButtonOutput: !0,
				autoplayResetOnVisibility: !0,
				animateIn: 'tns-fadeIn',
				animateOut: 'tns-fadeOut',
				animateNormal: 'tns-normal',
				animateDelay: !1,
				loop: !0,
				rewind: !1,
				autoHeight: !1,
				responsive: !1,
				lazyload: !1,
				lazyloadSelector: '.tns-lazy-img',
				touch: !0,
				mouseDrag: !1,
				swipeAngle: 15,
				nested: !1,
				preventActionWhenRunning: !1,
				preventScrollOnTouch: !1,
				freezable: !0,
				onInit: !1,
				useLocalStorage: !0,
				nonce: !1
			},
			L || {}
		);
		var B = document,
			i = window,
			a = { ENTER: 13, SPACE: 32, LEFT: 37, RIGHT: 39 },
			e = {},
			t = L.useLocalStorage;
		if (t) {
			var o = navigator.userAgent,
				l = new Date();
			try {
				(e = i.localStorage)
					? (e.setItem(l, l), (t = e.getItem(l) == l), e.removeItem(l))
					: (t = !1),
					t || (e = {});
			} catch (o) {
				t = !1;
			}
			t &&
				(e.tnsApp &&
					e.tnsApp !== o &&
					['tC', 'tPL', 'tMQ', 'tTf', 't3D', 'tTDu', 'tTDe', 'tADu', 'tADe', 'tTE', 'tAE'].forEach(
						function (t) {
							e.removeItem(t);
						}
					),
				(localStorage.tnsApp = o));
		}
		var s,
			c,
			f,
			p,
			v,
			h = e.tC
				? Ki(e.tC)
				: Ji(
						e,
						'tC',
						(function () {
							var t = document,
								e = Ui(),
								n = _i(e),
								i = t.createElement('div'),
								a = !1;
							e.appendChild(i);
							try {
								for (
									var o,
										r = '(10px * 10)',
										u = ['calc' + r, '-moz-calc' + r, '-webkit-calc' + r],
										l = 0;
									l < 3;
									l++
								)
									if (((o = u[l]), (i.style.width = o), 100 === i.offsetWidth)) {
										a = o.replace(r, '');
										break;
									}
							} catch (t) {}
							return e.fake ? Zi(e, n) : i.remove(), a;
						})(),
						t
					),
			l = e.tPL
				? Ki(e.tPL)
				: Ji(
						e,
						'tPL',
						(function () {
							var t = document,
								e = Ui(),
								n = _i(e),
								i = t.createElement('div'),
								t = t.createElement('div'),
								a = '';
							(i.className = 'tns-t-subp2'), (t.className = 'tns-t-ct');
							for (var o = 0; o < 70; o++) a += '<div></div>';
							return (
								(t.innerHTML = a),
								i.appendChild(t),
								e.appendChild(i),
								(t =
									Math.abs(
										i.getBoundingClientRect().left - t.children[67].getBoundingClientRect().left
									) < 2),
								e.fake ? Zi(e, n) : i.remove(),
								t
							);
						})(),
						t
					),
			at = e.tMQ
				? Ki(e.tMQ)
				: Ji(
						e,
						'tMQ',
						!(!window.matchMedia && !window.msMatchMedia) ||
							((s = document),
							(f = _i((c = Ui()))),
							(p = s.createElement('div')),
							(v = '@media all and (min-width:1px){.tns-mq-test{position:absolute}}'),
							((y = s.createElement('style')).type = 'text/css'),
							(p.className = 'tns-mq-test'),
							c.appendChild(y),
							c.appendChild(p),
							y.styleSheet ? (y.styleSheet.cssText = v) : y.appendChild(s.createTextNode(v)),
							(y = (window.getComputedStyle ? window.getComputedStyle(p) : p.currentStyle)
								.position),
							c.fake ? Zi(c, f) : p.remove(),
							'absolute' === y),
						t
					),
			m = e.tTf ? Ki(e.tTf) : Ji(e, 'tTf', pa('transform'), t),
			y = e.t3D
				? Ki(e.t3D)
				: Ji(
						e,
						't3D',
						!!(s = m) &&
							!!window.getComputedStyle &&
							((v = document),
							(f = _i((c = Ui()))),
							(v = v.createElement('p')),
							(p = 9 < s.length ? '-' + s.slice(0, -9).toLowerCase() + '-' : ''),
							(p += 'transform'),
							c.insertBefore(v, null),
							(v.style[s] = 'translate3d(1px,1px,1px)'),
							(s = window.getComputedStyle(v).getPropertyValue(p)),
							c.fake ? Zi(c, f) : v.remove(),
							void 0 !== s) &&
							0 < s.length &&
							'none' !== s,
						t
					),
			d = e.tTDu ? Ki(e.tTDu) : Ji(e, 'tTDu', pa('transitionDuration'), t),
			g = e.tTDe ? Ki(e.tTDe) : Ji(e, 'tTDe', pa('transitionDelay'), t),
			x = e.tADu ? Ki(e.tADu) : Ji(e, 'tADu', pa('animationDuration'), t),
			b = e.tADe ? Ki(e.tADe) : Ji(e, 'tADe', pa('animationDelay'), t),
			w = e.tTE ? Ki(e.tTE) : Ji(e, 'tTE', va(d, 'Transition'), t),
			C = e.tAE ? Ki(e.tAE) : Ji(e, 'tAE', va(x, 'Animation'), t),
			M = i.console && 'function' == typeof i.console.warn,
			T = [
				'container',
				'controlsContainer',
				'prevButton',
				'nextButton',
				'navContainer',
				'autoplayButton'
			],
			E = {};
		if (
			(T.forEach(function (t) {
				var e, n;
				'string' == typeof L[t] &&
					((e = L[t]),
					(n = B.querySelector(e)),
					(E[t] = e),
					n && n.nodeName ? (L[t] = n) : M && console.warn("Can't find", L[t]));
			}),
			!(L.container.children.length < 1))
		) {
			var ot,
				rt,
				A,
				ut,
				S = L.responsive,
				lt = L.nested,
				H = 'carousel' === L.mode;
			if (S) {
				0 in S && ((L = Yi(L, S[0])), delete S[0]);
				var N,
					st = {};
				for (N in S) {
					var ct = S[N];
					st[N] = 'number' == typeof ct ? { items: ct } : ct;
				}
				(S = st), (st = null);
			}
			H ||
				(function t(e) {
					for (var n in e)
						H ||
							('slideBy' === n && (e[n] = 'page'),
							'edgePadding' === n && (e[n] = !1),
							'autoHeight' === n && (e[n] = !1)),
							'responsive' === n && t(e[n]);
				})(L),
				H ||
					((L.axis = 'horizontal'),
					(L.slideBy = 'page'),
					(L.edgePadding = !1),
					(ot = L.animateIn),
					(rt = L.animateOut),
					(A = L.animateDelay),
					(ut = L.animateNormal));
			var dt,
				ft,
				O = 'horizontal' === L.axis,
				r = B.createElement('div'),
				pt = B.createElement('div'),
				D = L.container,
				vt = D.parentNode,
				ht = D.outerHTML,
				k = D.children,
				R = k.length,
				mt = An(),
				yt = !1;
			S && Qn(), H && (D.className += ' tns-vpfix');
			var u,
				gt,
				xt,
				bt,
				wt,
				I,
				Ct,
				P,
				z,
				Mt,
				Tt,
				Et,
				W,
				At,
				Nt,
				Lt,
				Bt,
				St,
				Ht,
				Ot,
				Dt,
				kt,
				Rt,
				It,
				Pt,
				zt,
				Wt,
				qt,
				q,
				Ft,
				jt,
				Vt,
				Gt,
				Qt,
				Xt,
				Yt,
				Kt,
				F = L.autoWidth,
				j = nt('fixedWidth'),
				V = nt('edgePadding'),
				G = nt('gutter'),
				Q = Ln(),
				X = nt('center'),
				Y = F ? 1 : Math.floor(nt('items')),
				Jt = nt('slideBy'),
				Ut = L.viewportMax || L.fixedWidthViewportWidth,
				_t = nt('arrowKeys'),
				Zt = nt('speed'),
				$t = L.rewind,
				K = !$t && L.loop,
				te = nt('autoHeight'),
				ee = nt('controls'),
				ne = nt('controlsText'),
				ie = nt('nav'),
				ae = nt('touch'),
				oe = nt('mouseDrag'),
				J = nt('autoplay'),
				re = nt('autoplayTimeout'),
				ue = nt('autoplayText'),
				le = nt('autoplayHoverPause'),
				se = nt('autoplayResetOnVisibility'),
				U =
					((t = nt('nonce')),
					(Qe = document.createElement('style')),
					t && Qe.setAttribute('nonce', t),
					document.querySelector('head').appendChild(Qe),
					Qe.sheet || Qe.styleSheet),
				ce = L.lazyload,
				de = L.lazyloadSelector,
				fe = [],
				_ = K
					? ((t = (function () {
							if (F || (j && !Ut)) return R - 1;
							var t = j ? 'fixedWidth' : 'items',
								e = [];
							if (((j || L[t] < R) && e.push(L[t]), S))
								for (var n in S) {
									n = S[n][t];
									n && (j || n < R) && e.push(n);
								}
							return (
								e.length || e.push(0),
								Math.ceil(j ? Ut / Math.min.apply(null, e) : Math.max.apply(null, e))
							);
						})()),
						(Qe = H ? Math.ceil((5 * t - R) / 2) : 4 * t - R),
						(Qe = Math.max(t, Qe)),
						Bn('edgePadding') ? Qe + 1 : Qe)
					: 0,
				Z = H ? R + 2 * _ : R + _,
				pe = !((!j && !F) || K),
				ve = j ? yi() : null,
				he = !H || !K,
				me = O ? 'left' : 'top',
				ye = '',
				ge = '',
				xe = j
					? function () {
							return X && !K ? R - 1 : Math.ceil(-ve / (j + G));
						}
					: F
						? function () {
								for (var t = 0; t < Z; t++) if (u[t] >= -ve) return t;
							}
						: function () {
								return X && H && !K ? R - 1 : K || H ? Math.max(0, Z - Math.ceil(Y)) : Z - 1;
							},
				$ = Mn(nt('startIndex')),
				be = $,
				we = (Cn(), 0),
				Ce = F ? null : xe(),
				Me = L.preventActionWhenRunning,
				Te = L.swipeAngle,
				Ee = !Te || '?',
				Ae = !1,
				Ne = L.onInit,
				tt = new ya(),
				Le = ' tns-slider tns-' + L.mode,
				et = D.id || ((t = window.tnsId), (window.tnsId = t ? t + 1 : 1), 'tns' + window.tnsId),
				Be = nt('disable'),
				Se = !1,
				He = L.freezable,
				Oe = !(!He || F) && Gn(),
				De = !1,
				ke = {
					click: Ai,
					keydown: function (t) {
						t = ki(t);
						var e = [a.LEFT, a.RIGHT].indexOf(t.keyCode);
						0 <= e && (0 === e ? P.disabled || Ai(t, -1) : z.disabled || Ai(t, 1));
					}
				},
				Re = {
					click: function (t) {
						if (Ae) {
							if (Me) return;
							Ti();
						}
						for (var e, n, i = Ri((t = ki(t))); i !== W && !oa(i, 'data-nav'); ) i = i.parentNode;
						oa(i, 'data-nav') &&
							((e = Bt = Number(ra(i, 'data-nav'))),
							(n = j || F ? (e * R) / Nt : e * Y),
							Ei(Ve ? e : Math.min(Math.ceil(n), R - 1), t),
							St === e) &&
							(It && Hi(), (Bt = -1));
					},
					keydown: function (t) {
						t = ki(t);
						var e,
							n = B.activeElement;
						oa(n, 'data-nav') &&
							((e = [a.LEFT, a.RIGHT, a.ENTER, a.SPACE].indexOf(t.keyCode)),
							(n = Number(ra(n, 'data-nav'))),
							0 <= e) &&
							(0 === e
								? 0 < n && Di(Et[n - 1])
								: 1 === e
									? n < Nt - 1 && Di(Et[n + 1])
									: Ei((Bt = n), t));
					}
				},
				Ie = {
					mouseover: function () {
						It && (Li(), (Pt = !0));
					},
					mouseout: function () {
						Pt && (Ni(), (Pt = !1));
					}
				},
				Pe = {
					visibilitychange: function () {
						B.hidden ? It && (Li(), (Wt = !0)) : Wt && (Ni(), (Wt = !1));
					}
				},
				ze = {
					keydown: function (t) {
						t = ki(t);
						var e = [a.LEFT, a.RIGHT].indexOf(t.keyCode);
						0 <= e && Ai(t, 0 === e ? -1 : 1);
					}
				},
				We = { touchstart: Wi, touchmove: qi, touchend: Fi, touchcancel: Fi },
				qe = { mousedown: Wi, mousemove: qi, mouseup: Fi, mouseleave: Fi },
				Fe = Bn('controls'),
				je = Bn('nav'),
				Ve = !!F || L.navAsThumbnails,
				Ge = Bn('autoplay'),
				Qe = Bn('touch'),
				Xe = Bn('mouseDrag'),
				Ye = 'tns-slide-active',
				Ke = 'tns-slide-cloned',
				Je = 'tns-complete',
				Ue = {
					load: function (t) {
						ti(Ri(t));
					},
					error: function (t) {
						t = Ri(t);
						ia(t, 'failed'), ei(t);
					}
				},
				_e = 'force' === L.preventScrollOnTouch;
			if (
				(Fe &&
					((I = L.controlsContainer),
					(Ct = L.controlsContainer ? L.controlsContainer.outerHTML : ''),
					(P = L.prevButton),
					(z = L.nextButton),
					(Mt = L.prevButton ? L.prevButton.outerHTML : ''),
					(Tt = L.nextButton ? L.nextButton.outerHTML : '')),
				je &&
					((W = L.navContainer),
					(At = L.navContainer ? L.navContainer.outerHTML : ''),
					(Nt = F ? R : Vi()),
					(Lt = 0),
					(Bt = -1),
					(St = En()),
					(Ht = St),
					(Ot = 'tns-nav-active'),
					(Dt = 'Carousel Page '),
					(kt = ' (Current Slide)')),
				Ge &&
					((qt = 'forward' === L.autoplayDirection ? 1 : -1),
					(q = L.autoplayButton),
					(Ft = L.autoplayButton ? L.autoplayButton.outerHTML : ''),
					(jt = ["<span class='tns-visually-hidden'>", ' animation</span>'])),
				(Qe || Xe) &&
					((Qt = {}),
					(Yt = !(Xt = {})),
					(Kt = O
						? function (t, e) {
								return t.x - e.x;
							}
						: function (t, e) {
								return t.y - e.y;
							})),
				F || wn(Be || Oe),
				m &&
					((me = m),
					(ye = 'translate'),
					(ge = y
						? ((ye += O ? '3d(' : '3d(0px, '), O ? ', 0px, 0px)' : ', 0px)')
						: ((ye += O ? 'X(' : 'Y('), ')'))),
				H && (D.className = D.className.replace('tns-vpfix', '')),
				Bn('gutter'),
				(r.className = 'tns-outer'),
				(pt.className = 'tns-inner'),
				(r.id = et + '-ow'),
				(pt.id = et + '-iw'),
				'' === D.id && (D.id = et),
				(Le =
					Le +
					(l || F ? ' tns-subpixel' : ' tns-no-subpixel') +
					(h ? ' tns-calc' : ' tns-no-calc')),
				F && (Le += ' tns-autowidth'),
				(Le += ' tns-' + L.axis),
				(D.className += Le),
				(H
					? (((dt = B.createElement('div')).id = et + '-mw'),
						(dt.className = 'tns-ovh'),
						r.appendChild(dt),
						dt)
					: r
				).appendChild(pt),
				te && ((dt || pt).className += ' tns-ah'),
				vt.insertBefore(r, D),
				pt.appendChild(D),
				ea(k, function (t, e) {
					ia(t, 'tns-item'),
						t.id || (t.id = et + '-item' + e),
						!H && ut && ia(t, ut),
						ua(t, { 'aria-hidden': 'true', tabindex: '-1' });
				}),
				_)
			) {
				for (var Ze = B.createDocumentFragment(), $e = B.createDocumentFragment(), tn = _; tn--; ) {
					var en = tn % R,
						nn = k[en].cloneNode(!0);
					ia(nn, Ke),
						la(nn, 'id'),
						$e.insertBefore(nn, $e.firstChild),
						H && ((nn = k[R - 1 - en].cloneNode(!0)), ia(nn, Ke), la(nn, 'id'), Ze.appendChild(nn));
				}
				D.insertBefore(Ze, D.firstChild), D.appendChild($e), (k = D.children);
			}
			if (!H)
				for (var an = $, on = $ + Math.min(R, Y); an < on; an++) {
					var rn = k[an];
					(rn.style.left = (100 * (an - $)) / Y + '%'), ia(rn, ot), aa(rn, ut);
				}
			if (
				(O &&
					(l || F
						? ($i(
								U,
								'#' + et + ' > .tns-item',
								'font-size:' + i.getComputedStyle(k[0]).fontSize + ';',
								ta(U)
							),
							$i(U, '#' + et, 'font-size:0;', ta(U)))
						: H &&
							ea(k, function (t, e) {
								t.style.marginLeft = h ? h + '(' + 100 * e + '% / ' + Z + ')' : (100 * e) / Z + '%';
							})),
				at
					? (d && ((n = dt && L.autoHeight ? Rn(L.speed) : ''), $i(U, '#' + et + '-mw', n, ta(U))),
						(n = Sn(L.edgePadding, L.gutter, L.fixedWidth, L.speed, L.autoHeight)),
						$i(U, '#' + et + '-iw', n, ta(U)),
						H &&
							((n = O && !F ? 'width:' + Hn(L.fixedWidth, L.gutter, L.items) + ';' : ''),
							d && (n += Rn(Zt)),
							$i(U, '#' + et, n, ta(U))),
						(n = O && !F ? On(L.fixedWidth, L.gutter, L.items) : ''),
						L.gutter && (n += Dn(L.gutter)),
						H || (d && (n += Rn(Zt)), x && (n += In(Zt))))
					: (H && te && (dt.style[d] = Zt / 1e3 + 's'),
						(pt.style.cssText = Sn(V, G, j, te)),
						H && O && !F && (D.style.width = Hn(j, G, Y)),
						(n = O && !F ? On(j, G, Y) : ''),
						G && (n += Dn(G))),
				n && $i(U, '#' + et + ' > .tns-item', n, ta(U)),
				S && at)
			)
				for (var un in S) {
					var un = parseInt(un),
						ln = S[un],
						n = '',
						sn = '',
						cn = '',
						dn = '',
						fn = '',
						pn = F ? null : nt('items', un),
						vn = nt('fixedWidth', un),
						hn = nt('speed', un),
						mn = nt('edgePadding', un),
						yn = nt('autoHeight', un),
						gn = nt('gutter', un);
					d &&
						dt &&
						nt('autoHeight', un) &&
						'speed' in ln &&
						(sn = '#' + et + '-mw{' + Rn(hn) + '}'),
						('edgePadding' in ln || 'gutter' in ln) &&
							(cn = '#' + et + '-iw{' + Sn(mn, gn, vn, hn, yn) + '}'),
						H &&
							O &&
							!F &&
							('fixedWidth' in ln || 'items' in ln || (j && 'gutter' in ln)) &&
							(dn = 'width:' + Hn(vn, gn, pn) + ';'),
						d && 'speed' in ln && (dn += Rn(hn)),
						(dn = dn && '#' + et + '{' + dn + '}'),
						('fixedWidth' in ln || (j && 'gutter' in ln) || (!H && 'items' in ln)) &&
							(fn += On(vn, gn, pn)),
						'gutter' in ln && (fn += Dn(gn)),
						!H && 'speed' in ln && (d && (fn += Rn(hn)), x) && (fn += In(hn)),
						(n = sn + cn + dn + (fn = fn && '#' + et + ' > .tns-item{' + fn + '}')) &&
							U.insertRule('@media (min-width: ' + un / 16 + 'em) {' + n + '}', U.cssRules.length);
				}
			Pn();
			var xn = K
					? H
						? function () {
								var t = we,
									e = Ce;
								(t += Jt),
									(e -= Jt),
									V ? ((t += 1), --e) : j && (Q + G) % (j + G) && --e,
									_ && (e < $ ? ($ -= R) : $ < t && ($ += R));
							}
						: function () {
								if (Ce < $) for (; we + R <= $; ) $ -= R;
								else if ($ < we) for (; $ <= Ce - R; ) $ += R;
							}
					: function () {
							$ = Math.max(we, Math.min(Ce, $));
						},
				bn = H
					? function () {
							var e, n, i, a, t, o, r, u, l, s, c;
							hi(D, ''),
								d || !Zt
									? (bi(), (Zt && fa(D)) || Ti())
									: ((e = D),
										(n = me),
										(i = ye),
										(a = ge),
										(t = gi()),
										(o = Zt),
										(r = Ti),
										(u = Math.min(o, 10)),
										(l = 0 <= t.indexOf('%') ? '%' : 'px'),
										(t = t.replace(l, '')),
										(s = Number(e.style[n].replace(i, '').replace(a, '').replace(l, ''))),
										(c = ((t - s) / o) * u),
										setTimeout(function t() {
											(o -= u),
												(s += c),
												(e.style[n] = i + s + l + a),
												0 < o ? setTimeout(t, u) : r();
										}, u)),
								O || ji();
						}
					: function () {
							fe = [];
							var t = {};
							(t[w] = t[C] = Ti),
								ma(k[be], t),
								ha(k[$], t),
								wi(be, ot, rt, !0),
								wi($, ut, ot),
								(w && C && Zt && fa(D)) || Ti();
						};
			return {
				version: '2.9.4',
				getInfo: it,
				events: tt,
				goTo: Ei,
				play: function () {
					J && !It && (Si(), (zt = !1));
				},
				pause: function () {
					It && (Hi(), (zt = !0));
				},
				isOn: yt,
				updateSliderHeight: ui,
				refresh: Pn,
				destroy: function () {
					(U.disabled = !0),
						U.ownerNode && U.ownerNode.remove(),
						ma(i, { resize: jn }),
						_t && ma(B, ze),
						I && ma(I, ke),
						W && ma(W, Re),
						ma(D, Ie),
						ma(D, Pe),
						q && ma(q, { click: Oi }),
						J && clearInterval(Rt),
						H && w && (((t = {})[w] = Ti), ma(D, t)),
						ae && ma(D, We),
						oe && ma(D, qe);
					var t,
						e,
						o = [ht, Ct, Mt, Tt, At, Ft];
					for (e in (T.forEach(function (t, e) {
						var n,
							i,
							a = 'container' === t ? r : L[t];
						'object' == typeof a &&
							a &&
							((n = !!a.previousElementSibling && a.previousElementSibling),
							(i = a.parentNode),
							(a.outerHTML = o[e]),
							(L[t] = n ? n.nextElementSibling : i.firstElementChild));
					}),
					(T =
						ot =
						rt =
						A =
						ut =
						O =
						r =
						pt =
						D =
						vt =
						ht =
						k =
						R =
						ft =
						mt =
						F =
						j =
						V =
						G =
						Q =
						Y =
						Jt =
						Ut =
						_t =
						Zt =
						$t =
						K =
						te =
						U =
						ce =
						u =
						fe =
						_ =
						Z =
						pe =
						ve =
						he =
						me =
						ye =
						ge =
						xe =
						$ =
						be =
						we =
						Ce =
						Te =
						Ee =
						Ae =
						Ne =
						tt =
						Le =
						et =
						Be =
						Se =
						He =
						Oe =
						De =
						ke =
						Re =
						Ie =
						Pe =
						ze =
						We =
						qe =
						Fe =
						je =
						Ve =
						Ge =
						Xe =
						Ye =
						Je =
						Ue =
						gt =
						ee =
						ne =
						I =
						Ct =
						P =
						z =
						bt =
						wt =
						ie =
						W =
						At =
						Et =
						Nt =
						Lt =
						Bt =
						St =
						Ht =
						Ot =
						Dt =
						kt =
						J =
						re =
						qt =
						ue =
						le =
						q =
						Ft =
						se =
						jt =
						Rt =
						It =
						Pt =
						zt =
						Wt =
						Qt =
						Xt =
						Vt =
						Yt =
						Gt =
						Kt =
						ae =
						oe =
							null),
					this))
						'rebuild' !== e && (this[e] = null);
					yt = !1;
				},
				rebuild: function () {
					return ga(Yi(L, E));
				}
			};
		}
		function wn(t) {
			t && (ee = ie = ae = oe = _t = J = le = se = !1);
		}
		function Cn() {
			for (var t = H ? $ - _ : $; t < 0; ) t += R;
			return (t % R) + 1;
		}
		function Mn(t) {
			return (t = t ? Math.max(0, Math.min(K ? R - 1 : R - Y, t)) : 0), H ? t + _ : t;
		}
		function Tn(t) {
			for (null == t && (t = $), H && (t -= _); t < 0; ) t += R;
			return Math.floor(t % R);
		}
		function En() {
			var t = Tn(),
				t = Ve ? t : j || F ? Math.ceil(((t + 1) * Nt) / R - 1) : Math.floor(t / Y);
			return (t = !K && H && $ === Ce ? Nt - 1 : t);
		}
		function An() {
			return i.innerWidth || B.documentElement.clientWidth || B.body.clientWidth;
		}
		function Nn(t) {
			return 'top' === t ? 'afterbegin' : 'beforeend';
		}
		function Ln() {
			var t = V ? 2 * V - G : 0;
			return (
				(function t(e) {
					var n, i;
					if (null != e)
						return (
							(i = B.createElement('div')),
							e.appendChild(i),
							(n = (n = i.getBoundingClientRect()).right - n.left),
							i.remove(),
							n || t(e.parentNode)
						);
				})(vt) - t
			);
		}
		function Bn(t) {
			if (L[t]) return !0;
			if (S) for (var e in S) if (S[e][t]) return !0;
			return !1;
		}
		function nt(t, e) {
			if ((null == e && (e = mt), 'items' === t && j)) return Math.floor((Q + G) / (j + G)) || 1;
			var n = L[t];
			if (S) for (var i in S) e >= parseInt(i) && t in S[i] && (n = S[i][t]);
			return (
				'slideBy' === t && 'page' === n && (n = nt('items')),
				(n = H || ('slideBy' !== t && 'items' !== t) ? n : Math.floor(n))
			);
		}
		function Sn(t, e, n, i, a) {
			var o,
				r = '';
			return (
				void 0 !== t
					? ((o = t),
						e && (o -= e),
						(r = O
							? 'margin: 0 ' + o + 'px 0 ' + t + 'px;'
							: 'margin: ' + t + 'px 0 ' + o + 'px 0;'))
					: e &&
						!n &&
						((t = '-' + e + 'px'), (r = 'margin: 0 ' + (O ? t + ' 0 0' : '0 ' + t + ' 0') + ';')),
				!H && a && d && i && (r += Rn(i)),
				r
			);
		}
		function Hn(t, e, n) {
			return t
				? (t + e) * Z + 'px'
				: h
					? h + '(' + 100 * Z + '% / ' + n + ')'
					: (100 * Z) / n + '%';
		}
		function On(t, e, n) {
			return (
				(e =
					'width:' +
					(e = t
						? t + e + 'px'
						: (H || (n = Math.floor(n)),
							(t = H ? Z : n),
							h ? h + '(100% / ' + t + ')' : 100 / t + '%'))),
				'inner' !== lt ? e + ';' : e + ' !important;'
			);
		}
		function Dn(t) {
			return !1 !== t
				? (O ? 'padding-' : 'margin-') + (O ? 'right' : 'bottom') + ': ' + t + 'px;'
				: '';
		}
		function kn(t, e) {
			t = t.substring(0, t.length - e).toLowerCase();
			return (t = t && '-' + t + '-');
		}
		function Rn(t) {
			return kn(d, 18) + 'transition-duration:' + t / 1e3 + 's;';
		}
		function In(t) {
			return kn(x, 17) + 'animation-duration:' + t / 1e3 + 's;';
		}
		function Pn() {
			var t;
			Bn('autoHeight') || F || !O
				? (ea((t = D.querySelectorAll('img')), function (t) {
						var e = t.src;
						ce ||
							(e && e.indexOf('data:image') < 0
								? ((t.src = ''), ha(t, Ue), ia(t, 'loading'), (t.src = e))
								: ti(t));
					}),
					Qi(function () {
						ai(sa(t), function () {
							gt = !0;
						});
					}),
					Bn('autoHeight') && (t = ni($, Math.min($ + Y - 1, Z - 1))),
					ce
						? zn()
						: Qi(function () {
								ai(sa(t), zn);
							}))
				: (H && xi(), qn(), Fn());
		}
		function zn() {
			var i;
			(F && 1 < R
				? ((i = K ? $ : R - 1),
					function t() {
						var e = k[i].getBoundingClientRect().left,
							n = k[i - 1].getBoundingClientRect().right;
						Math.abs(e - n) <= 1
							? Wn()
							: setTimeout(function () {
									t();
								}, 16);
					})
				: Wn)();
		}
		function Wn() {
			(O && !F) || (li(), F ? ((ve = yi()), He && (Oe = Gn()), (Ce = xe()), wn(Be || Oe)) : ji()),
				H && xi(),
				qn(),
				Fn();
		}
		function qn() {
			var t, e;
			if (
				(si(),
				r.insertAdjacentHTML(
					'afterbegin',
					'<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">' +
						_n() +
						'</span>  of ' +
						R +
						'</div>'
				),
				(xt = r.querySelector('.tns-liveregion .current')),
				Ge &&
					((t = J ? 'stop' : 'start'),
					q
						? ua(q, { 'data-action': t })
						: L.autoplayButtonOutput &&
							(r.insertAdjacentHTML(
								Nn(L.autoplayPosition),
								'<button type="button" data-action="' +
									t +
									'">' +
									jt[0] +
									t +
									jt[1] +
									ue[0] +
									'</button>'
							),
							(q = r.querySelector('[data-action]'))),
					q && ha(q, { click: Oi }),
					J) &&
					(Si(), le && ha(D, Ie), se) &&
					ha(D, Pe),
				je)
			) {
				if (W)
					ua(W, { 'aria-label': 'Carousel Pagination' }),
						ea((Et = W.children), function (t, e) {
							ua(t, {
								'data-nav': e,
								tabindex: '-1',
								'aria-label': Dt + (e + 1),
								'aria-controls': et
							});
						});
				else {
					for (var n = '', i = Ve ? '' : 'style="display:none"', a = 0; a < R; a++)
						n +=
							'<button type="button" data-nav="' +
							a +
							'" tabindex="-1" aria-controls="' +
							et +
							'" ' +
							i +
							' aria-label="' +
							Dt +
							(a + 1) +
							'"></button>';
					r.insertAdjacentHTML(
						Nn(L.navPosition),
						(n = '<div class="tns-nav" aria-label="Carousel Pagination">' + n + '</div>')
					),
						(W = r.querySelector('.tns-nav')),
						(Et = W.children);
				}
				Gi(),
					d &&
						((t = d.substring(0, d.length - 18).toLowerCase()),
						(e = 'transition: all ' + Zt / 1e3 + 's'),
						$i(U, '[aria-controls^=' + et + '-item]', (e = t ? '-' + t + '-' + e : e), ta(U))),
					ua(Et[St], { 'aria-label': Dt + (St + 1) + kt }),
					la(Et[St], 'tabindex'),
					ia(Et[St], Ot),
					ha(W, Re);
			}
			Fe &&
				(I ||
					(P && z) ||
					(r.insertAdjacentHTML(
						Nn(L.controlsPosition),
						'<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button type="button" data-controls="prev" tabindex="-1" aria-controls="' +
							et +
							'">' +
							ne[0] +
							'</button><button type="button" data-controls="next" tabindex="-1" aria-controls="' +
							et +
							'">' +
							ne[1] +
							'</button></div>'
					),
					(I = r.querySelector('.tns-controls'))),
				(P && z) || ((P = I.children[0]), (z = I.children[1])),
				L.controlsContainer && ua(I, { 'aria-label': 'Carousel Navigation', tabindex: '0' }),
				(L.controlsContainer || (L.prevButton && L.nextButton)) &&
					ua([P, z], { 'aria-controls': et, tabindex: '-1' }),
				(L.controlsContainer || (L.prevButton && L.nextButton)) &&
					(ua(P, { 'data-controls': 'prev' }), ua(z, { 'data-controls': 'next' })),
				(bt = di(P)),
				(wt = di(z)),
				vi(),
				I ? ha(I, ke) : (ha(P, ke), ha(z, ke))),
				Xn();
		}
		function Fn() {
			var t;
			H && w && (((t = {})[w] = Ti), ha(D, t)),
				ae && ha(D, We, L.preventScrollOnTouch),
				oe && ha(D, qe),
				_t && ha(B, ze),
				'inner' === lt
					? tt.on('outerResized', function () {
							Vn(), tt.emit('innerLoaded', it());
						})
					: (S || j || F || te || !O) && ha(i, { resize: jn }),
				te && ('outer' === lt ? tt.on('innerLoaded', ii) : Be || ii()),
				$n(),
				Be ? Jn() : Oe && Kn(),
				tt.on('indexChanged', oi),
				'inner' === lt && tt.emit('innerLoaded', it()),
				'function' == typeof Ne && Ne(it()),
				(yt = !0);
		}
		function jn(t) {
			Qi(function () {
				Vn(ki(t));
			});
		}
		function Vn(t) {
			if (yt) {
				'outer' === lt && tt.emit('outerResized', it(t)), (mt = An());
				var e,
					n = ft,
					i = !1;
				S && (Qn(), (e = n !== ft)) && tt.emit('newBreakpointStart', it(t));
				var a,
					o,
					r,
					u,
					l,
					s,
					c,
					d,
					n = Y,
					f = Be,
					p = Oe,
					v = _t,
					h = ee,
					m = ie,
					y = ae,
					g = oe,
					x = J,
					b = le,
					w = se,
					C = $;
				if (
					(e && ((o = j), (r = te), (u = ne), (l = X), (s = ue), at || ((c = G), (d = V))),
					(_t = nt('arrowKeys')),
					(ee = nt('controls')),
					(ie = nt('nav')),
					(ae = nt('touch')),
					(X = nt('center')),
					(oe = nt('mouseDrag')),
					(J = nt('autoplay')),
					(le = nt('autoplayHoverPause')),
					(se = nt('autoplayResetOnVisibility')),
					e &&
						((Be = nt('disable')),
						(j = nt('fixedWidth')),
						(Zt = nt('speed')),
						(te = nt('autoHeight')),
						(ne = nt('controlsText')),
						(ue = nt('autoplayText')),
						(re = nt('autoplayTimeout')),
						at || ((V = nt('edgePadding')), (G = nt('gutter')))),
					wn(Be),
					(Q = Ln()),
					(O && !F) || Be || (li(), O) || (ji(), (i = !0)),
					(j || F) && ((ve = yi()), (Ce = xe())),
					(e || j) &&
						((Y = nt('items')), (Jt = nt('slideBy')), (a = Y !== n)) &&
						(j || F || (Ce = xe()), xn()),
					e &&
						Be !== f &&
						(Be
							? Jn
							: function () {
									if (Se) {
										if (((U.disabled = !1), (D.className += Le), xi(), K))
											for (var t = _; t--; ) H && da(k[t]), da(k[Z - t - 1]);
										if (!H)
											for (var e = $, n = $ + R; e < n; e++) {
												var i = k[e],
													a = e < $ + Y ? ot : ut;
												(i.style.left = (100 * (e - $)) / Y + '%'), ia(i, a);
											}
										Yn(), (Se = !1);
									}
								})(),
					He && (e || j || F) && (Oe = Gn()) !== p)
				)
					if (Oe) bi(gi(Mn(0))), Kn();
					else {
						if (De) {
							if ((V && at && (pt.style.margin = ''), _))
								for (var M = 'tns-transparent', T = _; T--; ) H && aa(k[T], M), aa(k[Z - T - 1], M);
							Yn(), (De = !1);
						}
						i = !0;
					}
				if (
					(wn(Be || Oe),
					J || (le = se = !1),
					_t !== v && (_t ? ha : ma)(B, ze),
					ee !== h &&
						(ee ? (I ? da(I) : (P && da(P), z && da(z))) : I ? ca(I) : (P && ca(P), z && ca(z))),
					ie !== m && (ie ? (da(W), Gi()) : ca(W)),
					ae !== y && (ae ? ha(D, We, L.preventScrollOnTouch) : ma(D, We)),
					oe !== g && (oe ? ha : ma)(D, qe),
					J !== x && (J ? (q && da(q), It || zt || Si()) : (q && ca(q), It && Hi())),
					le !== b && (le ? ha : ma)(D, Ie),
					se !== w && (se ? ha : ma)(B, Pe),
					e
						? ((j === o && X === l) || (i = !0),
							te === r || te || (pt.style.height = ''),
							ee && ne !== u && ((P.innerHTML = ne[0]), (z.innerHTML = ne[1])),
							q &&
								ue !== s &&
								((n = J ? 1 : 0),
								(p = (f = q.innerHTML).length - s[n].length),
								f.substring(p) === s[n]) &&
								(q.innerHTML = f.substring(0, p) + ue[n]))
						: X && (j || F) && (i = !0),
					(a || (j && !F)) && ((Nt = Vi()), Gi()),
					(v = $ !== C)
						? (tt.emit('indexChanged', it()), (i = !0))
						: a
							? v || oi()
							: (j || F) && ($n(), si(), Un()),
					a && !H)
				) {
					for (var E = $ + Math.min(R, Y), A = Z; A--; ) {
						var N = k[A];
						$ <= A && A < E
							? (ia(N, 'tns-moving'),
								(N.style.left = (100 * (A - $)) / Y + '%'),
								ia(N, ot),
								aa(N, ut))
							: N.style.left && ((N.style.left = ''), ia(N, ut), aa(N, ot)),
							aa(N, rt);
					}
					setTimeout(function () {
						ea(k, function (t) {
							aa(t, 'tns-moving');
						});
					}, 300);
				}
				Be ||
					Oe ||
					(e &&
						!at &&
						((V === d && G === c) || (pt.style.cssText = Sn(V, G, j, Zt, te)), O) &&
						(H && (D.style.width = Hn(j, G, Y)),
						(h = On(j, G, Y) + Dn(G)),
						(y = ta((m = U)) - 1),
						'deleteRule' in m ? m.deleteRule(y) : m.removeRule(y),
						$i(U, '#' + et + ' > .tns-item', h, ta(U))),
					te && ii(),
					i && (xi(), (be = $))),
					e && tt.emit('newBreakpointEnd', it(t));
			}
		}
		function Gn() {
			var t, e;
			return j || F
				? ((t = j ? (j + G) * R : u[R]),
					(e = V ? Q + 2 * V : Q + G),
					X && (e -= j ? (Q - j) / 2 : (Q - (u[$ + 1] - u[$] - G)) / 2),
					t <= e)
				: R <= (X ? Y - (Y - 1) / 2 : Y);
		}
		function Qn() {
			for (var t in ((ft = 0), S)) (t = parseInt(t)) <= mt && (ft = t);
		}
		function Xn() {
			!J && q && ca(q), !ie && W && ca(W), ee || (I ? ca(I) : (P && ca(P), z && ca(z)));
		}
		function Yn() {
			J && q && da(q), ie && W && da(W), ee && (I ? da(I) : (P && da(P), z && da(z)));
		}
		function Kn() {
			if (!De) {
				if ((V && (pt.style.margin = '0px'), _))
					for (var t = 'tns-transparent', e = _; e--; ) H && ia(k[e], t), ia(k[Z - e - 1], t);
				Xn(), (De = !0);
			}
		}
		function Jn() {
			if (!Se) {
				if (
					((U.disabled = !0),
					(D.className = D.className.replace(Le.substring(1), '')),
					la(D, ['style']),
					K)
				)
					for (var t = _; t--; ) H && ca(k[t]), ca(k[Z - t - 1]);
				if (((O && H) || la(pt, ['style']), !H))
					for (var e = $, n = $ + R; e < n; e++) {
						var i = k[e];
						la(i, ['style']), aa(i, ot), aa(i, ut);
					}
				Xn(), (Se = !0);
			}
		}
		function Un() {
			var t = _n();
			xt.innerHTML !== t && (xt.innerHTML = t);
		}
		function _n() {
			var t = Zn(),
				e = t[0] + 1,
				t = t[1] + 1;
			return e === t ? e + '' : e + ' to ' + t;
		}
		function Zn(t) {
			null == t && (t = gi());
			var n,
				i,
				a,
				o = $;
			return (
				X || V
					? (F || j) && ((n = -(parseFloat(t) + V)), (i = n + Q + 2 * V))
					: F && ((n = u[$]), (i = n + Q)),
				F
					? u.forEach(function (t, e) {
							e < Z && ((X || V) && t <= n + 0.5 && (o = e), 0.5 <= i - t) && (a = e);
						})
					: ((a = j
							? ((t = j + G),
								X || V ? ((o = Math.floor(n / t)), Math.ceil(i / t - 1)) : o + Math.ceil(Q / t) - 1)
							: X || V
								? ((t = Y - 1),
									(a = X ? ((o -= t / 2), $ + t / 2) : $ + t),
									V && ((o -= t = (V * Y) / Q), (a += t)),
									(o = Math.floor(o)),
									Math.ceil(a))
								: o + Y - 1),
						(o = Math.max(o, 0)),
						(a = Math.min(a, Z - 1))),
				[o, a]
			);
		}
		function $n() {
			var t;
			ce &&
				!Be &&
				((t = Zn()).push(de),
				ni.apply(null, t).forEach(function (t) {
					var e;
					na(t, Je) ||
						(((e = {})[w] = function (t) {
							t.stopPropagation();
						}),
						ha(t, e),
						ha(t, Ue),
						(t.src = ra(t, 'data-src')),
						(e = ra(t, 'data-srcset')) && (t.srcset = e),
						ia(t, 'loading'));
				}));
		}
		function ti(t) {
			ia(t, 'loaded'), ei(t);
		}
		function ei(t) {
			ia(t, Je), aa(t, 'loading'), ma(t, Ue);
		}
		function ni(t, e, n) {
			var i = [];
			for (n = n || 'img'; t <= e; )
				ea(k[t].querySelectorAll(n), function (t) {
					i.push(t);
				}),
					t++;
			return i;
		}
		function ii() {
			var t = ni.apply(null, Zn());
			Qi(function () {
				ai(t, ui);
			});
		}
		function ai(n, t) {
			!gt &&
			(n.forEach(function (t, e) {
				!ce && t.complete && ei(t), na(t, Je) && n.splice(e, 1);
			}),
			n.length)
				? Qi(function () {
						ai(n, t);
					})
				: t();
		}
		function oi() {
			var t, e;
			$n(),
				si(),
				Un(),
				vi(),
				ie &&
					((St = 0 <= Bt ? Bt : En()), (Bt = -1), St !== Ht) &&
					((t = Et[Ht]),
					(e = Et[St]),
					ua(t, { tabindex: '-1', 'aria-label': Dt + (Ht + 1) }),
					aa(t, Ot),
					ua(e, { 'aria-label': Dt + (St + 1) + kt }),
					la(e, 'tabindex'),
					ia(e, Ot),
					(Ht = St));
		}
		function ri(t, e) {
			for (var n = [], i = t, a = Math.min(t + e, Z); i < a; i++) n.push(k[i].offsetHeight);
			return Math.max.apply(null, n);
		}
		function ui() {
			var t = te ? ri($, Y) : ri(_, R),
				e = dt || pt;
			e.style.height !== t && (e.style.height = t + 'px');
		}
		function li() {
			u = [0];
			var n = O ? 'left' : 'top',
				i = O ? 'right' : 'bottom',
				a = k[0].getBoundingClientRect()[n];
			ea(k, function (t, e) {
				e && u.push(t.getBoundingClientRect()[n] - a),
					e === Z - 1 && u.push(t.getBoundingClientRect()[i] - a);
			});
		}
		function si() {
			var t = Zn(),
				n = t[0],
				i = t[1];
			ea(k, function (t, e) {
				n <= e && e <= i
					? oa(t, 'aria-hidden') && (la(t, ['aria-hidden', 'tabindex']), ia(t, Ye))
					: oa(t, 'aria-hidden') || (ua(t, { 'aria-hidden': 'true', tabindex: '-1' }), aa(t, Ye));
			});
		}
		function ci(t) {
			return t.nodeName.toLowerCase();
		}
		function di(t) {
			return 'button' === ci(t);
		}
		function fi(t) {
			return 'true' === t.getAttribute('aria-disabled');
		}
		function pi(t, e, n) {
			t ? (e.disabled = n) : e.setAttribute('aria-disabled', n.toString());
		}
		function vi() {
			var t, e, n, i;
			!ee ||
				$t ||
				K ||
				((t = bt ? P.disabled : fi(P)),
				(e = wt ? z.disabled : fi(z)),
				(i = !$t && Ce <= $),
				(n = $ <= we) && !t && pi(bt, P, !0),
				!n && t && pi(bt, P, !1),
				i && !e && pi(wt, z, !0),
				!i && e && pi(wt, z, !1));
		}
		function hi(t, e) {
			d && (t.style[d] = e);
		}
		function mi(t) {
			return (
				null == t && (t = $),
				F ? (Q - (V ? G : 0) - (u[t + 1] - u[t] - G)) / 2 : j ? (Q - j) / 2 : (Y - 1) / 2
			);
		}
		function yi() {
			var t = Q + (V ? G : 0) - (j ? (j + G) * Z : u[Z]);
			return (t =
				0 < (t = X && !K ? (j ? -(j + G) * (Z - 1) - mi() : mi(Z - 1) - u[Z - 1]) : t) ? 0 : t);
		}
		function gi(t) {
			var e, n;
			return (
				null == t && (t = $),
				O && !F
					? j
						? ((e = -(j + G) * t), X && (e += mi()))
						: ((n = m ? Z : Y), X && (t -= mi()), (e = (100 * -t) / n))
					: ((e = -u[t]), X && F && (e += mi())),
				(e = pe ? Math.max(e, ve) : e) + (!O || F || j ? 'px' : '%')
			);
		}
		function xi(t) {
			hi(D, '0s'), bi(t);
		}
		function bi(t) {
			null == t && (t = gi()), (D.style[me] = ye + t + ge);
		}
		function wi(t, e, n, i) {
			var a = t + Y;
			K || (a = Math.min(a, Z));
			for (var o = t; o < a; o++) {
				var r = k[o];
				i || (r.style.left = (100 * (o - $)) / Y + '%'),
					A && g && (r.style[g] = r.style[b] = (A * (o - t)) / 1e3 + 's'),
					aa(r, e),
					ia(r, n),
					i && fe.push(r);
			}
		}
		function Ci(t, e) {
			he && xn(),
				($ === be && !e) ||
					(tt.emit('indexChanged', it()),
					tt.emit('transitionStart', it()),
					te && ii(),
					It && t && 0 <= ['click', 'keydown'].indexOf(t.type) && Hi(),
					(Ae = !0),
					bn());
		}
		function Mi(t) {
			return t.toLowerCase().replace(/-/g, '');
		}
		function Ti(t) {
			if (H || Ae) {
				if ((tt.emit('transitionEnd', it(t)), !H && 0 < fe.length))
					for (var e = 0; e < fe.length; e++) {
						var n = fe[e];
						(n.style.left = ''),
							b && g && ((n.style[b] = ''), (n.style[g] = '')),
							aa(n, rt),
							ia(n, ut);
					}
				(!t ||
					(!H && t.target.parentNode === D) ||
					(t.target === D && Mi(t.propertyName) === Mi(me))) &&
					(he || ((t = $), xn(), $ !== t && (tt.emit('indexChanged', it()), xi())),
					'inner' === lt && tt.emit('innerLoaded', it()),
					(Ae = !1),
					(be = $));
			}
		}
		function Ei(t, e) {
			if (!Oe)
				if ('prev' === t) Ai(e, -1);
				else if ('next' === t) Ai(e, 1);
				else {
					if (Ae) {
						if (Me) return;
						Ti();
					}
					var n = Tn(),
						i = 0;
					'first' === t
						? (i = -n)
						: 'last' === t
							? (i = H ? R - Y - n : R - 1 - n)
							: ('number' != typeof t && (t = parseInt(t)),
								isNaN(t) || (i = (t = e ? t : Math.max(0, Math.min(R - 1, t))) - n)),
						!H &&
							i &&
							Math.abs(i) < Y &&
							((t = 0 < i ? 1 : -1), (i += we <= $ + i - R ? R * t : 2 * R * t * -1)),
						($ += i),
						H && K && ($ < we && ($ += R), Ce < $) && ($ -= R),
						Tn($) !== Tn(be) && Ci(e);
				}
		}
		function Ai(t, e) {
			if (Ae) {
				if (Me) return;
				Ti();
			}
			var n;
			if (!e) {
				for (var i = Ri((t = ki(t))); i !== I && [P, z].indexOf(i) < 0; ) i = i.parentNode;
				var a = [P, z].indexOf(i);
				0 <= a && ((n = !0), (e = 0 === a ? -1 : 1));
			}
			if ($t) {
				if ($ === we && -1 === e) return void Ei('last', t);
				if ($ === Ce && 1 === e) return void Ei('first', t);
			}
			e &&
				(($ += Jt * e), F && ($ = Math.floor($)), Ci(n || (t && 'keydown' === t.type) ? t : null));
		}
		function Ni() {
			(Rt = setInterval(function () {
				Ai(null, qt);
			}, re)),
				(It = !0);
		}
		function Li() {
			clearInterval(Rt), (It = !1);
		}
		function Bi(t, e) {
			ua(q, { 'data-action': t }), (q.innerHTML = jt[0] + t + jt[1] + e);
		}
		function Si() {
			Ni(), q && Bi('stop', ue[1]);
		}
		function Hi() {
			Li(), q && Bi('start', ue[0]);
		}
		function Oi() {
			zt = It ? (Hi(), !0) : (Si(), !1);
		}
		function Di(t) {
			t.focus();
		}
		function ki(t) {
			return Ii((t = t || i.event)) ? t.changedTouches[0] : t;
		}
		function Ri(t) {
			return t.target || i.event.srcElement;
		}
		function Ii(t) {
			return 0 <= t.type.indexOf('touch');
		}
		function Pi(t) {
			t.preventDefault ? t.preventDefault() : (t.returnValue = !1);
		}
		function zi() {
			return (
				(e = Xt.y - Qt.y),
				(n = Xt.x - Qt.x),
				(e = Math.atan2(e, n) * (180 / Math.PI)),
				(n = !1),
				90 - (t = Te) <= (e = Math.abs(90 - Math.abs(e)))
					? (n = 'horizontal')
					: e <= t && (n = 'vertical'),
				n === L.axis
			);
			var t, e, n;
		}
		function Wi(t) {
			if (Ae) {
				if (Me) return;
				Ti();
			}
			J && It && Li(), (Yt = !0), Gt && (Xi(Gt), (Gt = null));
			var e = ki(t);
			tt.emit(Ii(t) ? 'touchStart' : 'dragStart', it(t)),
				!Ii(t) && 0 <= ['img', 'a'].indexOf(ci(Ri(t))) && Pi(t),
				(Xt.x = Qt.x = e.clientX),
				(Xt.y = Qt.y = e.clientY),
				H && ((Vt = parseFloat(D.style[me].replace(ye, ''))), hi(D, '0s'));
		}
		function qi(t) {
			var e;
			Yt &&
				((e = ki(t)),
				(Xt.x = e.clientX),
				(Xt.y = e.clientY),
				H
					? (Gt =
							Gt ||
							Qi(function () {
								!(function t(e) {
									if (!Ee) return (Yt = !1);
									if (
										(Xi(Gt),
										Yt &&
											(Gt = Qi(function () {
												t(e);
											})),
										(Ee = '?' === Ee ? zi() : Ee))
									) {
										!_e && Ii(e) && (_e = !0);
										try {
											e.type && tt.emit(Ii(e) ? 'touchMove' : 'dragMove', it(e));
										} catch (t) {}
										var n = Vt,
											i = Kt(Xt, Qt);
										(n =
											!O || j || F
												? n + i + 'px'
												: n + (m ? (i * Y * 100) / ((Q + G) * Z) : (100 * i) / (Q + G)) + '%'),
											(D.style[me] = ye + n + ge);
									}
								})(t);
							}))
					: (Ee = '?' === Ee ? zi() : Ee) && (_e = !0),
				'boolean' != typeof t.cancelable || t.cancelable) &&
				_e &&
				t.preventDefault();
		}
		function Fi(i) {
			var t, a, n;
			Yt &&
				(Gt && (Xi(Gt), (Gt = null)),
				H && hi(D, ''),
				(Yt = !1),
				(t = ki(i)),
				(Xt.x = t.clientX),
				(Xt.y = t.clientY),
				(a = Kt(Xt, Qt)),
				Math.abs(a)) &&
				(Ii(i) ||
					ha((n = Ri(i)), {
						click: function t(e) {
							Pi(e), ma(n, { click: t });
						}
					}),
				H
					? (Gt = Qi(function () {
							if (O && !F) {
								var t = (-a * Y) / (Q + G),
									t = 0 < a ? Math.floor(t) : Math.ceil(t);
								$ += t;
							} else {
								var e = -(Vt + a);
								if (e <= 0) $ = we;
								else if (e >= u[Z - 1]) $ = Ce;
								else for (var n = 0; n < Z && e >= u[n]; ) e > u[($ = n)] && a < 0 && ($ += 1), n++;
							}
							Ci(i, a), tt.emit(Ii(i) ? 'touchEnd' : 'dragEnd', it(i));
						}))
					: Ee && Ai(i, 0 < a ? -1 : 1)),
				'auto' === L.preventScrollOnTouch && (_e = !1),
				Te && (Ee = '?'),
				J && !It && Ni();
		}
		function ji() {
			(dt || pt).style.height = u[$ + Y] - u[$] + 'px';
		}
		function Vi() {
			var t = j ? ((j + G) * R) / Q : R / Y;
			return Math.min(Math.ceil(t), R);
		}
		function Gi() {
			if (ie && !Ve && Nt !== Lt) {
				var t = Lt,
					e = Nt,
					n = da;
				for (Nt < Lt && ((t = Nt), (e = Lt), (n = ca)); t < e; ) n(Et[t]), t++;
				Lt = Nt;
			}
		}
		function it(t) {
			return {
				container: D,
				slideItems: k,
				navContainer: W,
				navItems: Et,
				controlsContainer: I,
				hasControls: Fe,
				prevButton: P,
				nextButton: z,
				items: Y,
				slideBy: Jt,
				cloneCount: _,
				slideCount: R,
				slideCountNew: Z,
				index: $,
				indexCached: be,
				displayIndex: Cn(),
				navCurrentIndex: St,
				navCurrentIndexCached: Ht,
				pages: Nt,
				pagesCached: Lt,
				sheet: U,
				isOn: yt,
				event: t || {}
			};
		}
		M && console.warn('No slides found in', L.container);
	}
	return ga;
})();
