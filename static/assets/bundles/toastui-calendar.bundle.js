!(function (e, t) {
	'object' == typeof exports && 'object' == typeof module
		? (module.exports = t(require('tui-date-picker')))
		: 'function' == typeof define && define.amd
			? define(['tui-date-picker'], t)
			: 'object' == typeof exports
				? (exports.tui = t(require('tui-date-picker')))
				: ((e.tui = e.tui || {}), (e.tui.Calendar = t(e.tui.DatePicker)));
})(this, function (t) {
	return (
		(n = {
			7111: function (e, t, n) {
				var r = n(6733),
					o = n(9821),
					i = TypeError;
				e.exports = function (e) {
					if (r(e)) return e;
					throw i(o(e) + ' is not a function');
				};
			},
			8505: function (e, t, n) {
				var r = n(6733),
					o = String,
					i = TypeError;
				e.exports = function (e) {
					if ('object' == typeof e || r(e)) return e;
					throw i("Can't set " + o(e) + ' as a prototype');
				};
			},
			9736: function (e, t, n) {
				var r = n(95),
					o = n(2391),
					n = n(1787).f,
					i = r('unscopables'),
					a = Array.prototype;
				null == a[i] && n(a, i, { configurable: !0, value: o(null) }),
					(e.exports = function (e) {
						a[i][e] = !0;
					});
			},
			6637: function (e, t, n) {
				'use strict';
				var r = n(966).charAt;
				e.exports = function (e, t, n) {
					return t + (n ? r(e, t).length : 1);
				};
			},
			1176: function (e, t, n) {
				var r = n(5052),
					o = String,
					i = TypeError;
				e.exports = function (e) {
					if (r(e)) return e;
					throw i(o(e) + ' is not an object');
				};
			},
			9540: function (e, t, n) {
				function r(l) {
					return function (e, t, n) {
						var r,
							o = c(e),
							i = u(o),
							a = s(n, i);
						if (l && t != t) {
							for (; a < i; ) if ((r = o[a++]) != r) return !0;
						} else for (; a < i; a++) if ((l || a in o) && o[a] === t) return l || a || 0;
						return !l && -1;
					};
				}
				var c = n(905),
					s = n(3231),
					u = n(9646);
				e.exports = { includes: r(!0), indexOf: r(!1) };
			},
			7079: function (e, t, n) {
				var n = n(5968),
					r = n({}.toString),
					o = n(''.slice);
				e.exports = function (e) {
					return o(r(e), 8, -1);
				};
			},
			1589: function (e, t, n) {
				var r = n(1601),
					o = n(6733),
					i = n(7079),
					a = n(95)('toStringTag'),
					l = Object,
					c =
						'Arguments' ==
						i(
							(function () {
								return arguments;
							})()
						);
				e.exports = r
					? i
					: function (e) {
							var t;
							return void 0 === e
								? 'Undefined'
								: null === e
									? 'Null'
									: 'string' ==
										  typeof (t = (function (e, t) {
												try {
													return e[t];
												} catch (e) {}
										  })((e = l(e)), a))
										? t
										: c
											? i(e)
											: 'Object' == (t = i(e)) && o(e.callee)
												? 'Arguments'
												: t;
						};
			},
			1590: function (e, t, n) {
				var n = n(5968),
					r = Error,
					o = n(''.replace),
					n = String(r('zxcasd').stack),
					i = /\n\s*at [^:]*:[^\n]*/,
					a = i.test(n);
				e.exports = function (e, t) {
					if (a && 'string' == typeof e && !r.prepareStackTrace) for (; t--; ) e = o(e, i, '');
					return e;
				};
			},
			7081: function (e, t, n) {
				var c = n(8270),
					s = n(4826),
					u = n(7933),
					d = n(1787);
				e.exports = function (e, t, n) {
					for (var r = s(t), o = d.f, i = u.f, a = 0; a < r.length; a++) {
						var l = r[a];
						c(e, l) || (n && c(n, l)) || o(e, l, i(t, l));
					}
				};
			},
			7528: function (e, t, n) {
				n = n(4229);
				e.exports = !n(function () {
					function e() {}
					return (e.prototype.constructor = null), Object.getPrototypeOf(new e()) !== e.prototype;
				});
			},
			3723: function (e, t, n) {
				'use strict';
				function o() {
					return this;
				}
				var i = n(693).IteratorPrototype,
					a = n(2391),
					l = n(5358),
					c = n(4555),
					s = n(5495);
				e.exports = function (e, t, n, r) {
					t += ' Iterator';
					return (e.prototype = a(i, { next: l(+!r, n) })), c(e, t, !1, !0), (s[t] = o), e;
				};
			},
			5762: function (e, t, n) {
				var r = n(7400),
					o = n(1787),
					i = n(5358);
				e.exports = r
					? function (e, t, n) {
							return o.f(e, t, i(1, n));
						}
					: function (e, t, n) {
							return (e[t] = n), e;
						};
			},
			5358: function (e) {
				e.exports = function (e, t) {
					return { enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t };
				};
			},
			4768: function (e, t, n) {
				var a = n(6733),
					l = n(1787),
					c = n(6039),
					s = n(8400);
				e.exports = function (e, t, n, r) {
					var o = (r = r || {}).enumerable,
						i = void 0 !== r.name ? r.name : t;
					if ((a(n) && c(n, i, r), r.global)) o ? (e[t] = n) : s(t, n);
					else {
						try {
							r.unsafe ? e[t] && (o = !0) : delete e[t];
						} catch (e) {}
						o
							? (e[t] = n)
							: l.f(e, t, {
									value: n,
									enumerable: !1,
									configurable: !r.nonConfigurable,
									writable: !r.nonWritable
								});
					}
					return e;
				};
			},
			8400: function (e, t, n) {
				var r = n(9859),
					o = Object.defineProperty;
				e.exports = function (t, n) {
					try {
						o(r, t, { value: n, configurable: !0, writable: !0 });
					} catch (e) {
						r[t] = n;
					}
					return n;
				};
			},
			7675: function (e, t, n) {
				'use strict';
				function m() {
					return this;
				}
				var g = n(3103),
					v = n(266),
					y = n(4231),
					r = n(1805),
					w = n(6733),
					_ = n(3723),
					b = n(7567),
					D = n(6540),
					x = n(4555),
					k = n(5762),
					S = n(4768),
					o = n(95),
					C = n(5495),
					n = n(693),
					E = r.PROPER,
					I = r.CONFIGURABLE,
					M = n.IteratorPrototype,
					N = n.BUGGY_SAFARI_ITERATORS,
					T = o('iterator'),
					O = 'values',
					P = 'entries';
				e.exports = function (e, t, n, r, o, i, a) {
					_(n, t, r);
					function l(e) {
						if (e === o && f) return f;
						if (!N && e in d) return d[e];
						switch (e) {
							case 'keys':
							case O:
							case P:
								return function () {
									return new n(this, e);
								};
						}
						return function () {
							return new n(this);
						};
					}
					var c,
						s,
						r = t + ' Iterator',
						u = !1,
						d = e.prototype,
						p = d[T] || d['@@iterator'] || (o && d[o]),
						f = (!N && p) || l(o),
						h = ('Array' == t && d.entries) || p;
					if (
						(h &&
							(h = b(h.call(new e()))) !== Object.prototype &&
							h.next &&
							(y || b(h) === M || (D ? D(h, M) : w(h[T]) || S(h, T, m)), x(h, r, !0, !0), y) &&
							(C[r] = m),
						E &&
							o == O &&
							p &&
							p.name !== O &&
							(!y && I
								? k(d, 'name', O)
								: ((u = !0),
									(f = function () {
										return v(p, this);
									}))),
						o)
					)
						if (((c = { values: l(O), keys: i ? f : l('keys'), entries: l(P) }), a))
							for (s in c) (!N && !u && s in d) || S(d, s, c[s]);
						else g({ target: t, proto: !0, forced: N || u }, c);
					return (y && !a) || d[T] === f || S(d, T, f, { name: o }), (C[t] = f), c;
				};
			},
			7400: function (e, t, n) {
				n = n(4229);
				e.exports = !n(function () {
					return (
						7 !=
						Object.defineProperty({}, 1, {
							get: function () {
								return 7;
							}
						})[1]
					);
				});
			},
			2635: function (e, t, n) {
				var r = n(9859),
					n = n(5052),
					o = r.document,
					i = n(o) && n(o.createElement);
				e.exports = function (e) {
					return i ? o.createElement(e) : {};
				};
			},
			5694: function (e) {
				e.exports = {
					CSSRuleList: 0,
					CSSStyleDeclaration: 0,
					CSSValueList: 0,
					ClientRectList: 0,
					DOMRectList: 0,
					DOMStringList: 0,
					DOMTokenList: 1,
					DataTransferItemList: 0,
					FileList: 0,
					HTMLAllCollection: 0,
					HTMLCollection: 0,
					HTMLFormElement: 0,
					HTMLSelectElement: 0,
					MediaList: 0,
					MimeTypeArray: 0,
					NamedNodeMap: 0,
					NodeList: 1,
					PaintRequestList: 0,
					Plugin: 0,
					PluginArray: 0,
					SVGLengthList: 0,
					SVGNumberList: 0,
					SVGPathSegList: 0,
					SVGPointList: 0,
					SVGStringList: 0,
					SVGTransformList: 0,
					SourceBufferList: 0,
					StyleSheetList: 0,
					TextTrackCueList: 0,
					TextTrackList: 0,
					TouchList: 0
				};
			},
			8865: function (e, t, n) {
				(n = n(2635)('span').classList), (n = n && n.constructor && n.constructor.prototype);
				e.exports = n === Object.prototype ? void 0 : n;
			},
			598: function (e, t, n) {
				n = n(1333);
				e.exports = n('navigator', 'userAgent') || '';
			},
			6358: function (e, t, n) {
				var r,
					o,
					i = n(9859),
					n = n(598),
					a = i.process,
					i = i.Deno,
					a = (a && a.versions) || (i && i.version),
					i = a && a.v8;
				!(o = i ? (0 < (r = i.split('.'))[0] && r[0] < 4 ? 1 : +(r[0] + r[1])) : o) &&
					n &&
					(!(r = n.match(/Edge\/(\d+)/)) || 74 <= r[1]) &&
					(r = n.match(/Chrome\/(\d+)/)) &&
					(o = +r[1]),
					(e.exports = o);
			},
			3837: function (e) {
				e.exports = [
					'constructor',
					'hasOwnProperty',
					'isPrototypeOf',
					'propertyIsEnumerable',
					'toLocaleString',
					'toString',
					'valueOf'
				];
			},
			373: function (e, t, n) {
				var r = n(4229),
					o = n(5358);
				e.exports = !r(function () {
					var e = Error('a');
					return !('stack' in e) || (Object.defineProperty(e, 'stack', o(1, 7)), 7 !== e.stack);
				});
			},
			3103: function (e, t, n) {
				var s = n(9859),
					u = n(7933).f,
					d = n(5762),
					p = n(4768),
					f = n(8400),
					h = n(7081),
					m = n(6541);
				e.exports = function (e, t) {
					var n,
						r,
						o,
						i,
						a = e.target,
						l = e.global,
						c = e.stat;
					if ((n = l ? s : c ? s[a] || f(a, {}) : (s[a] || {}).prototype))
						for (r in t) {
							if (
								((o = t[r]),
								(i = e.dontCallGetSet ? (i = u(n, r)) && i.value : n[r]),
								!m(l ? r : a + (c ? '.' : '#') + r, e.forced) && void 0 !== i)
							) {
								if (typeof o == typeof i) continue;
								h(o, i);
							}
							(e.sham || (i && i.sham)) && d(o, 'sham', !0), p(n, r, o, e);
						}
				};
			},
			4229: function (e) {
				e.exports = function (e) {
					try {
						return !!e();
					} catch (e) {
						return !0;
					}
				};
			},
			4954: function (e, t, n) {
				'use strict';
				n(7950);
				var c = n(5968),
					s = n(4768),
					u = n(3466),
					d = n(4229),
					p = n(95),
					f = n(5762),
					h = p('species'),
					m = RegExp.prototype;
				e.exports = function (n, e, t, r) {
					var a,
						o = p(n),
						l = !d(function () {
							var e = {};
							return (
								(e[o] = function () {
									return 7;
								}),
								7 != ''[n](e)
							);
						}),
						i =
							l &&
							!d(function () {
								var e = !1,
									t = /a/;
								return (
									'split' === n &&
										(((t = {}).constructor = {}),
										(t.constructor[h] = function () {
											return t;
										}),
										(t.flags = ''),
										(t[o] = /./[o])),
									(t.exec = function () {
										return (e = !0), null;
									}),
									t[o](''),
									!e
								);
							});
					(l && i && !t) ||
						((a = c(/./[o])),
						(i = e(o, ''[n], function (e, t, n, r, o) {
							var e = c(e),
								i = t.exec;
							return i === u || i === m.exec
								? l && !o
									? { done: !0, value: a(t, n, r) }
									: { done: !0, value: e(n, t, r) }
								: { done: !1 };
						})),
						s(String.prototype, n, i[0]),
						s(m, o, i[1])),
						r && f(m[o], 'sham', !0);
				};
			},
			3171: function (e, t, n) {
				var n = n(7188),
					r = Function.prototype,
					o = r.apply,
					i = r.call;
				e.exports =
					('object' == typeof Reflect && Reflect.apply) ||
					(n
						? i.bind(o)
						: function () {
								return i.apply(o, arguments);
							});
			},
			7188: function (e, t, n) {
				n = n(4229);
				e.exports = !n(function () {
					var e = function () {}.bind();
					return 'function' != typeof e || e.hasOwnProperty('prototype');
				});
			},
			266: function (e, t, n) {
				var n = n(7188),
					r = Function.prototype.call;
				e.exports = n
					? r.bind(r)
					: function () {
							return r.apply(r, arguments);
						};
			},
			1805: function (e, t, n) {
				var r = n(7400),
					n = n(8270),
					o = Function.prototype,
					i = r && Object.getOwnPropertyDescriptor,
					n = n(o, 'name'),
					a = n && 'something' === function () {}.name,
					r = n && (!r || i(o, 'name').configurable);
				e.exports = { EXISTS: n, PROPER: a, CONFIGURABLE: r };
			},
			5968: function (e, t, n) {
				var n = n(7188),
					r = Function.prototype,
					o = r.bind,
					i = r.call,
					a = n && o.bind(i, i);
				e.exports = n
					? function (e) {
							return e && a(e);
						}
					: function (e) {
							return (
								e &&
								function () {
									return i.apply(e, arguments);
								}
							);
						};
			},
			1333: function (e, t, n) {
				var r = n(9859),
					o = n(6733);
				e.exports = function (e, t) {
					return arguments.length < 2 ? ((n = r[e]), o(n) ? n : void 0) : r[e] && r[e][t];
					var n;
				};
			},
			5300: function (e, t, n) {
				var r = n(7111);
				e.exports = function (e, t) {
					e = e[t];
					return null == e ? void 0 : r(e);
				};
			},
			17: function (e, t, n) {
				var r = n(5968),
					o = n(2991),
					p = Math.floor,
					f = r(''.charAt),
					h = r(''.replace),
					m = r(''.slice),
					g = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
					v = /\$([$&'`]|\d{1,2})/g;
				e.exports = function (i, a, l, c, s, e) {
					var u = l + i.length,
						d = c.length,
						t = v;
					return (
						void 0 !== s && ((s = o(s)), (t = g)),
						h(e, t, function (e, t) {
							var n;
							switch (f(t, 0)) {
								case '$':
									return '$';
								case '&':
									return i;
								case '`':
									return m(a, 0, l);
								case "'":
									return m(a, u);
								case '<':
									n = s[m(t, 1, -1)];
									break;
								default:
									var r,
										o = +t;
									if (0 == o) return e;
									if (d < o)
										return 0 !== (r = p(o / 10)) && r <= d
											? void 0 === c[r - 1]
												? f(t, 1)
												: c[r - 1] + f(t, 1)
											: e;
									n = c[o - 1];
							}
							return void 0 === n ? '' : n;
						})
					);
				};
			},
			9859: function (e, t, n) {
				function r(e) {
					return e && e.Math == Math && e;
				}
				e.exports =
					r('object' == typeof globalThis && globalThis) ||
					r('object' == typeof window && window) ||
					r('object' == typeof self && self) ||
					r('object' == typeof n.g && n.g) ||
					(function () {
						return this;
					})() ||
					Function('return this')();
			},
			8270: function (e, t, n) {
				var r = n(5968),
					o = n(2991),
					i = r({}.hasOwnProperty);
				e.exports =
					Object.hasOwn ||
					function (e, t) {
						return i(o(e), t);
					};
			},
			5977: function (e) {
				e.exports = {};
			},
			3777: function (e, t, n) {
				n = n(1333);
				e.exports = n('document', 'documentElement');
			},
			4394: function (e, t, n) {
				var r = n(7400),
					o = n(4229),
					i = n(2635);
				e.exports =
					!r &&
					!o(function () {
						return (
							7 !=
							Object.defineProperty(i('div'), 'a', {
								get: function () {
									return 7;
								}
							}).a
						);
					});
			},
			9337: function (e, t, n) {
				var r = n(5968),
					o = n(4229),
					i = n(7079),
					a = Object,
					l = r(''.split);
				e.exports = o(function () {
					return !a('z').propertyIsEnumerable(0);
				})
					? function (e) {
							return 'String' == i(e) ? l(e, '') : a(e);
						}
					: a;
			},
			835: function (e, t, n) {
				var r = n(6733),
					o = n(5052),
					i = n(6540);
				e.exports = function (e, t, n) {
					return (
						i &&
							r((t = t.constructor)) &&
							t !== n &&
							o((t = t.prototype)) &&
							t !== n.prototype &&
							i(e, t),
						e
					);
				};
			},
			8511: function (e, t, n) {
				var r = n(5968),
					o = n(6733),
					n = n(5353),
					i = r(Function.toString);
				o(n.inspectSource) ||
					(n.inspectSource = function (e) {
						return i(e);
					}),
					(e.exports = n.inspectSource);
			},
			9679: function (e, t, n) {
				var r = n(5052),
					o = n(5762);
				e.exports = function (e, t) {
					r(t) && 'cause' in t && o(e, 'cause', t.cause);
				};
			},
			6407: function (e, t, n) {
				var r,
					o,
					i,
					a,
					l,
					c,
					s,
					u,
					d = n(8694),
					p = n(9859),
					f = n(5968),
					h = n(5052),
					m = n(5762),
					g = n(8270),
					v = n(5353),
					y = n(4399),
					n = n(5977),
					w = 'Object already initialized',
					_ = p.TypeError,
					p = p.WeakMap;
				(s =
					d || v.state
						? ((r = v.state || (v.state = new p())),
							(o = f(r.get)),
							(i = f(r.has)),
							(a = f(r.set)),
							(l = function (e, t) {
								if (i(r, e)) throw new _(w);
								return (t.facade = e), a(r, e, t), t;
							}),
							(c = function (e) {
								return o(r, e) || {};
							}),
							function (e) {
								return i(r, e);
							})
						: ((n[(u = y('state'))] = !0),
							(l = function (e, t) {
								if (g(e, u)) throw new _(w);
								return (t.facade = e), m(e, u, t), t;
							}),
							(c = function (e) {
								return g(e, u) ? e[u] : {};
							}),
							function (e) {
								return g(e, u);
							})),
					(e.exports = {
						set: l,
						get: c,
						has: s,
						enforce: function (e) {
							return s(e) ? c(e) : l(e, {});
						},
						getterFor: function (t) {
							return function (e) {
								if (h(e) && (e = c(e)).type === t) return e;
								throw _('Incompatible receiver, ' + t + ' required');
							};
						}
					});
			},
			6733: function (e) {
				e.exports = function (e) {
					return 'function' == typeof e;
				};
			},
			6541: function (e, t, n) {
				function r(e, t) {
					return (e = c[l(e)]) == u || (e != s && (i(t) ? o(t) : !!t));
				}
				var o = n(4229),
					i = n(6733),
					a = /#|\.prototype\./,
					l = (r.normalize = function (e) {
						return String(e).replace(a, '.').toLowerCase();
					}),
					c = (r.data = {}),
					s = (r.NATIVE = 'N'),
					u = (r.POLYFILL = 'P');
				e.exports = r;
			},
			5052: function (e, t, n) {
				var r = n(6733);
				e.exports = function (e) {
					return 'object' == typeof e ? null !== e : r(e);
				};
			},
			4231: function (e) {
				e.exports = !1;
			},
			9395: function (e, t, n) {
				var r = n(1333),
					o = n(6733),
					i = n(1321),
					n = n(6969),
					a = Object;
				e.exports = n
					? function (e) {
							return 'symbol' == typeof e;
						}
					: function (e) {
							var t = r('Symbol');
							return o(t) && i(t.prototype, a(e));
						};
			},
			693: function (e, t, n) {
				'use strict';
				var r,
					o,
					i = n(4229),
					a = n(6733),
					l = n(2391),
					c = n(7567),
					s = n(4768),
					u = n(95),
					n = n(4231),
					d = u('iterator'),
					u = !1;
				[].keys &&
					('next' in (o = [].keys()) ? (c = c(c(o))) !== Object.prototype && (r = c) : (u = !0)),
					null == r ||
					i(function () {
						var e = {};
						return r[d].call(e) !== e;
					})
						? (r = {})
						: n && (r = l(r)),
					a(r[d]) ||
						s(r, d, function () {
							return this;
						}),
					(e.exports = { IteratorPrototype: r, BUGGY_SAFARI_ITERATORS: u });
			},
			5495: function (e) {
				e.exports = {};
			},
			9646: function (e, t, n) {
				var r = n(4237);
				e.exports = function (e) {
					return r(e.length);
				};
			},
			6039: function (e, t, n) {
				var r = n(4229),
					o = n(6733),
					i = n(8270),
					a = n(7400),
					l = n(1805).CONFIGURABLE,
					c = n(8511),
					n = n(6407),
					s = n.enforce,
					u = n.get,
					d = Object.defineProperty,
					p =
						a &&
						!r(function () {
							return 8 !== d(function () {}, 'length', { value: 8 }).length;
						}),
					f = String(String).split('String'),
					n = (e.exports = function (e, t, n) {
						'Symbol(' === String(t).slice(0, 7) &&
							(t = '[' + String(t).replace(/^Symbol\(([^)]*)\)/, '$1') + ']'),
							n && n.getter && (t = 'get ' + t),
							n && n.setter && (t = 'set ' + t),
							(!i(e, 'name') || (l && e.name !== t)) &&
								(a ? d(e, 'name', { value: t, configurable: !0 }) : (e.name = t)),
							p && n && i(n, 'arity') && e.length !== n.arity && d(e, 'length', { value: n.arity });
						try {
							n && i(n, 'constructor') && n.constructor
								? a && d(e, 'prototype', { writable: !1 })
								: e.prototype && (e.prototype = void 0);
						} catch (e) {}
						n = s(e);
						return i(n, 'source') || (n.source = f.join('string' == typeof t ? t : '')), e;
					});
				Function.prototype.toString = n(function () {
					return (o(this) && u(this).source) || c(this);
				}, 'toString');
			},
			917: function (e) {
				var t = Math.ceil,
					n = Math.floor;
				e.exports =
					Math.trunc ||
					function (e) {
						e = +e;
						return (0 < e ? n : t)(e);
					};
			},
			3839: function (e, t, n) {
				var r = n(6358),
					n = n(4229);
				e.exports =
					!!Object.getOwnPropertySymbols &&
					!n(function () {
						var e = Symbol();
						return !String(e) || !(Object(e) instanceof Symbol) || (!Symbol.sham && r && r < 41);
					});
			},
			8694: function (e, t, n) {
				var r = n(9859),
					o = n(6733),
					n = n(8511),
					r = r.WeakMap;
				e.exports = o(r) && /native code/.test(n(r));
			},
			635: function (e, t, n) {
				var r = n(3326);
				e.exports = function (e, t) {
					return void 0 === e ? (arguments.length < 2 ? '' : t) : r(e);
				};
			},
			2391: function (e, t, n) {
				function r() {}
				function o(e) {
					e.write(f('')), e.close();
					var t = e.parentWindow.Object;
					return (e = null), t;
				}
				var i,
					a = n(1176),
					l = n(219),
					c = n(3837),
					s = n(5977),
					u = n(3777),
					d = n(2635),
					p = n(4399)('IE_PROTO'),
					f = function (e) {
						return '<script>' + e + '</script>';
					},
					h = function () {
						try {
							i = new ActiveXObject('htmlfile');
						} catch (e) {}
						var e, t;
						h =
							'undefined' == typeof document || (document.domain && i)
								? o(i)
								: (((t = d('iframe')).style.display = 'none'),
									u.appendChild(t),
									(t.src = String('javascript:')),
									(e = t.contentWindow.document).open(),
									e.write(f('document.F=Object')),
									e.close(),
									e.F);
						for (var n = c.length; n--; ) delete h.prototype[c[n]];
						return h();
					};
				(s[p] = !0),
					(e.exports =
						Object.create ||
						function (e, t) {
							var n;
							return (
								null !== e
									? ((r.prototype = a(e)), (n = new r()), (r.prototype = null), (n[p] = e))
									: (n = h()),
								void 0 === t ? n : l.f(n, t)
							);
						});
			},
			219: function (e, t, n) {
				var r = n(7400),
					o = n(7137),
					l = n(1787),
					c = n(1176),
					s = n(905),
					u = n(5632);
				t.f =
					r && !o
						? Object.defineProperties
						: function (e, t) {
								c(e);
								for (var n, r = s(t), o = u(t), i = o.length, a = 0; a < i; )
									l.f(e, (n = o[a++]), r[n]);
								return e;
							};
			},
			1787: function (e, t, n) {
				var r = n(7400),
					o = n(4394),
					i = n(7137),
					a = n(1176),
					l = n(9310),
					c = TypeError,
					s = Object.defineProperty,
					u = Object.getOwnPropertyDescriptor;
				t.f = r
					? i
						? function (e, t, n) {
								var r;
								return (
									a(e),
									(t = l(t)),
									a(n),
									'function' == typeof e &&
										'prototype' === t &&
										'value' in n &&
										'writable' in n &&
										!n.writable &&
										(r = u(e, t)) &&
										r.writable &&
										((e[t] = n.value),
										(n = {
											configurable: ('configurable' in n ? n : r).configurable,
											enumerable: ('enumerable' in n ? n : r).enumerable,
											writable: !1
										})),
									s(e, t, n)
								);
							}
						: s
					: function (e, t, n) {
							if ((a(e), (t = l(t)), a(n), o))
								try {
									return s(e, t, n);
								} catch (e) {}
							if ('get' in n || 'set' in n) throw c('Accessors not supported');
							return 'value' in n && (e[t] = n.value), e;
						};
			},
			7933: function (e, t, n) {
				var r = n(7400),
					o = n(266),
					i = n(9195),
					a = n(5358),
					l = n(905),
					c = n(9310),
					s = n(8270),
					u = n(4394),
					d = Object.getOwnPropertyDescriptor;
				t.f = r
					? d
					: function (e, t) {
							if (((e = l(e)), (t = c(t)), u))
								try {
									return d(e, t);
								} catch (e) {}
							if (s(e, t)) return a(!o(i.f, e, t), e[t]);
						};
			},
			8151: function (e, t, n) {
				var r = n(140),
					o = n(3837).concat('length', 'prototype');
				t.f =
					Object.getOwnPropertyNames ||
					function (e) {
						return r(e, o);
					};
			},
			894: function (e, t) {
				t.f = Object.getOwnPropertySymbols;
			},
			7567: function (e, t, n) {
				var r = n(8270),
					o = n(6733),
					i = n(2991),
					a = n(4399),
					n = n(7528),
					l = a('IE_PROTO'),
					c = Object,
					s = c.prototype;
				e.exports = n
					? c.getPrototypeOf
					: function (e) {
							var t,
								e = i(e);
							return r(e, l)
								? e[l]
								: ((t = e.constructor),
									o(t) && e instanceof t ? t.prototype : e instanceof c ? s : null);
						};
			},
			1321: function (e, t, n) {
				n = n(5968);
				e.exports = n({}.isPrototypeOf);
			},
			140: function (e, t, n) {
				var r = n(5968),
					a = n(8270),
					l = n(905),
					c = n(9540).indexOf,
					s = n(5977),
					u = r([].push);
				e.exports = function (e, t) {
					var n,
						r = l(e),
						o = 0,
						i = [];
					for (n in r) !a(s, n) && a(r, n) && u(i, n);
					for (; t.length > o; ) !a(r, (n = t[o++])) || ~c(i, n) || u(i, n);
					return i;
				};
			},
			5632: function (e, t, n) {
				var r = n(140),
					o = n(3837);
				e.exports =
					Object.keys ||
					function (e) {
						return r(e, o);
					};
			},
			9195: function (e, t) {
				'use strict';
				var n = {}.propertyIsEnumerable,
					r = Object.getOwnPropertyDescriptor,
					o = r && !n.call({ 1: 2 }, 1);
				t.f = o
					? function (e) {
							e = r(this, e);
							return !!e && e.enumerable;
						}
					: n;
			},
			6540: function (e, t, n) {
				var o = n(5968),
					i = n(1176),
					a = n(8505);
				e.exports =
					Object.setPrototypeOf ||
					('__proto__' in {}
						? (function () {
								var n,
									r = !1,
									e = {};
								try {
									(n = o(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set))(
										e,
										[]
									),
										(r = e instanceof Array);
								} catch (n) {}
								return function (e, t) {
									return i(e), a(t), r ? n(e, t) : (e.__proto__ = t), e;
								};
							})()
						: void 0);
			},
			2914: function (e, t, n) {
				var o = n(266),
					i = n(6733),
					a = n(5052),
					l = TypeError;
				e.exports = function (e, t) {
					var n, r;
					if ('string' === t && i((n = e.toString)) && !a((r = o(n, e)))) return r;
					if (i((n = e.valueOf)) && !a((r = o(n, e)))) return r;
					if ('string' !== t && i((n = e.toString)) && !a((r = o(n, e)))) return r;
					throw l("Can't convert object to primitive value");
				};
			},
			4826: function (e, t, n) {
				var r = n(1333),
					o = n(5968),
					i = n(8151),
					a = n(894),
					l = n(1176),
					c = o([].concat);
				e.exports =
					r('Reflect', 'ownKeys') ||
					function (e) {
						var t = i.f(l(e)),
							n = a.f;
						return n ? c(t, n(e)) : t;
					};
			},
			6060: function (e, t, n) {
				var r = n(1787).f;
				e.exports = function (e, t, n) {
					n in e ||
						r(e, n, {
							configurable: !0,
							get: function () {
								return t[n];
							},
							set: function (e) {
								t[n] = e;
							}
						});
				};
			},
			8115: function (e, t, n) {
				var r = n(266),
					o = n(1176),
					i = n(6733),
					a = n(7079),
					l = n(3466),
					c = TypeError;
				e.exports = function (e, t) {
					var n = e.exec;
					if (i(n)) return null !== (n = r(n, e, t)) && o(n), n;
					if ('RegExp' === a(e)) return r(l, e, t);
					throw c('RegExp#exec called on incompatible receiver');
				};
			},
			3466: function (e, t, n) {
				'use strict';
				var h = n(266),
					r = n(5968),
					m = n(3326),
					g = n(895),
					o = n(5650),
					i = n(3036),
					v = n(2391),
					y = n(6407).get,
					a = n(2926),
					n = n(461),
					w = i('native-string-replace', String.prototype.replace),
					_ = RegExp.prototype.exec,
					b = _,
					D = r(''.charAt),
					x = r(''.indexOf),
					k = r(''.replace),
					S = r(''.slice),
					C =
						((i = /b*/g),
						h(_, (r = /a/), 'a'),
						h(_, i, 'a'),
						0 !== r.lastIndex || 0 !== i.lastIndex),
					E = o.BROKEN_CARET,
					I = void 0 !== /()??/.exec('')[1];
				(C || I || E || a || n) &&
					(b = function (e) {
						var t,
							n,
							r,
							o,
							i,
							a,
							l = this,
							c = y(l),
							e = m(e),
							s = c.raw;
						if (s)
							return (s.lastIndex = l.lastIndex), (d = h(b, s, e)), (l.lastIndex = s.lastIndex), d;
						var u = c.groups,
							s = E && l.sticky,
							d = h(g, l),
							c = l.source,
							p = 0,
							f = e;
						if (
							(s &&
								((d = k(d, 'y', '')),
								-1 === x(d, 'g') && (d += 'g'),
								(f = S(e, l.lastIndex)),
								0 < l.lastIndex &&
									(!l.multiline || (l.multiline && '\n' !== D(e, l.lastIndex - 1))) &&
									((c = '(?: ' + c + ')'), (f = ' ' + f), p++),
								(t = new RegExp('^(?:' + c + ')', d))),
							I && (t = new RegExp('^' + c + '$(?!\\s)', d)),
							C && (n = l.lastIndex),
							(r = h(_, s ? t : l, f)),
							s
								? r
									? ((r.input = S(r.input, p)),
										(r[0] = S(r[0], p)),
										(r.index = l.lastIndex),
										(l.lastIndex += r[0].length))
									: (l.lastIndex = 0)
								: C && r && (l.lastIndex = l.global ? r.index + r[0].length : n),
							I &&
								r &&
								1 < r.length &&
								h(w, r[0], t, function () {
									for (o = 1; o < arguments.length - 2; o++)
										void 0 === arguments[o] && (r[o] = void 0);
								}),
							r && u)
						)
							for (r.groups = i = v(null), o = 0; o < u.length; o++) i[(a = u[o])[0]] = r[a[1]];
						return r;
					}),
					(e.exports = b);
			},
			895: function (e, t, n) {
				'use strict';
				var r = n(1176);
				e.exports = function () {
					var e = r(this),
						t = '';
					return (
						e.hasIndices && (t += 'd'),
						e.global && (t += 'g'),
						e.ignoreCase && (t += 'i'),
						e.multiline && (t += 'm'),
						e.dotAll && (t += 's'),
						e.unicode && (t += 'u'),
						e.unicodeSets && (t += 'v'),
						e.sticky && (t += 'y'),
						t
					);
				};
			},
			5650: function (e, t, n) {
				var r = n(4229),
					o = n(9859).RegExp,
					n = r(function () {
						var e = o('a', 'y');
						return (e.lastIndex = 2), null != e.exec('abcd');
					}),
					i =
						n ||
						r(function () {
							return !o('a', 'y').sticky;
						}),
					r =
						n ||
						r(function () {
							var e = o('^r', 'gy');
							return (e.lastIndex = 2), null != e.exec('str');
						});
				e.exports = { BROKEN_CARET: r, MISSED_STICKY: i, UNSUPPORTED_Y: n };
			},
			2926: function (e, t, n) {
				var r = n(4229),
					o = n(9859).RegExp;
				e.exports = r(function () {
					var e = o('.', 's');
					return !(e.dotAll && e.exec('\n') && 's' === e.flags);
				});
			},
			461: function (e, t, n) {
				var r = n(4229),
					o = n(9859).RegExp;
				e.exports = r(function () {
					var e = o('(?<a>b)', 'g');
					return 'b' !== e.exec('b').groups.a || 'bc' !== 'b'.replace(e, '$<a>c');
				});
			},
			8885: function (e) {
				var t = TypeError;
				e.exports = function (e) {
					if (null == e) throw t("Can't call method on " + e);
					return e;
				};
			},
			4555: function (e, t, n) {
				var r = n(1787).f,
					o = n(8270),
					i = n(95)('toStringTag');
				e.exports = function (e, t, n) {
					(e = e && !n ? e.prototype : e) && !o(e, i) && r(e, i, { configurable: !0, value: t });
				};
			},
			4399: function (e, t, n) {
				var r = n(3036),
					o = n(1441),
					i = r('keys');
				e.exports = function (e) {
					return i[e] || (i[e] = o(e));
				};
			},
			5353: function (e, t, n) {
				var r = n(9859),
					n = n(8400),
					o = '__core-js_shared__',
					r = r[o] || n(o, {});
				e.exports = r;
			},
			3036: function (e, t, n) {
				var r = n(4231),
					o = n(5353);
				(e.exports = function (e, t) {
					return o[e] || (o[e] = void 0 !== t ? t : {});
				})('versions', []).push({
					version: '3.23.5',
					mode: r ? 'pure' : 'global',
					copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',
					license: 'https://github.com/zloirock/core-js/blob/v3.23.5/LICENSE',
					source: 'https://github.com/zloirock/core-js'
				});
			},
			966: function (e, t, n) {
				function r(o) {
					return function (e, t) {
						var n,
							e = a(l(e)),
							t = i(t),
							r = e.length;
						return t < 0 || r <= t
							? o
								? ''
								: void 0
							: (n = s(e, t)) < 55296 ||
								  56319 < n ||
								  t + 1 === r ||
								  (r = s(e, t + 1)) < 56320 ||
								  57343 < r
								? o
									? c(e, t)
									: n
								: o
									? u(e, t, t + 2)
									: r - 56320 + ((n - 55296) << 10) + 65536;
					};
				}
				var o = n(5968),
					i = n(3329),
					a = n(3326),
					l = n(8885),
					c = o(''.charAt),
					s = o(''.charCodeAt),
					u = o(''.slice);
				e.exports = { codeAt: r(!1), charAt: r(!0) };
			},
			3231: function (e, t, n) {
				var r = n(3329),
					o = Math.max,
					i = Math.min;
				e.exports = function (e, t) {
					e = r(e);
					return e < 0 ? o(e + t, 0) : i(e, t);
				};
			},
			905: function (e, t, n) {
				var r = n(9337),
					o = n(8885);
				e.exports = function (e) {
					return r(o(e));
				};
			},
			3329: function (e, t, n) {
				var r = n(917);
				e.exports = function (e) {
					e = +e;
					return e != e || 0 == e ? 0 : r(e);
				};
			},
			4237: function (e, t, n) {
				var r = n(3329),
					o = Math.min;
				e.exports = function (e) {
					return 0 < e ? o(r(e), 9007199254740991) : 0;
				};
			},
			2991: function (e, t, n) {
				var r = n(8885),
					o = Object;
				e.exports = function (e) {
					return o(r(e));
				};
			},
			2066: function (e, t, n) {
				var r = n(266),
					o = n(5052),
					i = n(9395),
					a = n(5300),
					l = n(2914),
					n = n(95),
					c = TypeError,
					s = n('toPrimitive');
				e.exports = function (e, t) {
					if (!o(e) || i(e)) return e;
					var n = a(e, s);
					if (n) {
						if (((n = r(n, e, (t = void 0 === t ? 'default' : t))), !o(n) || i(n))) return n;
						throw c("Can't convert object to primitive value");
					}
					return l(e, (t = void 0 === t ? 'number' : t));
				};
			},
			9310: function (e, t, n) {
				var r = n(2066),
					o = n(9395);
				e.exports = function (e) {
					e = r(e, 'string');
					return o(e) ? e : e + '';
				};
			},
			1601: function (e, t, n) {
				var r = {};
				(r[n(95)('toStringTag')] = 'z'), (e.exports = '[object z]' === String(r));
			},
			3326: function (e, t, n) {
				var r = n(1589),
					o = String;
				e.exports = function (e) {
					if ('Symbol' === r(e)) throw TypeError('Cannot convert a Symbol value to a string');
					return o(e);
				};
			},
			9821: function (e) {
				var t = String;
				e.exports = function (e) {
					try {
						return t(e);
					} catch (e) {
						return 'Object';
					}
				};
			},
			1441: function (e, t, n) {
				var n = n(5968),
					r = 0,
					o = Math.random(),
					i = n((1).toString);
				e.exports = function (e) {
					return 'Symbol(' + (void 0 === e ? '' : e) + ')_' + i(++r + o, 36);
				};
			},
			6969: function (e, t, n) {
				n = n(3839);
				e.exports = n && !Symbol.sham && 'symbol' == typeof Symbol.iterator;
			},
			7137: function (e, t, n) {
				var r = n(7400),
					n = n(4229);
				e.exports =
					r &&
					n(function () {
						return (
							42 !=
							Object.defineProperty(function () {}, 'prototype', { value: 42, writable: !1 })
								.prototype
						);
					});
			},
			95: function (e, t, n) {
				var r = n(9859),
					o = n(3036),
					i = n(8270),
					a = n(1441),
					l = n(3839),
					c = n(6969),
					s = o('wks'),
					u = r.Symbol,
					d = u && u.for,
					p = c ? u : (u && u.withoutSetter) || a;
				e.exports = function (e) {
					var t;
					return (
						(i(s, e) && (l || 'string' == typeof s[e])) ||
							((t = 'Symbol.' + e), l && i(u, e) ? (s[e] = u[e]) : (s[e] = (c && d ? d : p)(t))),
						s[e]
					);
				};
			},
			3949: function (e, t, n) {
				'use strict';
				var d = n(1333),
					p = n(8270),
					f = n(5762),
					h = n(1321),
					m = n(6540),
					g = n(7081),
					v = n(6060),
					y = n(835),
					w = n(635),
					_ = n(9679),
					b = n(1590),
					D = n(373),
					x = n(7400),
					k = n(4231);
				e.exports = function (e, t, n, r) {
					var o = 'stackTraceLimit',
						i = r ? 2 : 1,
						a = e.split('.'),
						l = a[a.length - 1],
						c = d.apply(null, a);
					if (c) {
						var s = c.prototype;
						if ((!k && p(s, 'cause') && delete s.cause, !n)) return c;
						var a = d('Error'),
							u = t(function (e, t) {
								(t = w(r ? t : e, void 0)), (e = r ? new c(e) : new c());
								return (
									void 0 !== t && f(e, 'message', t),
									D && f(e, 'stack', b(e.stack, 2)),
									this && h(s, this) && y(e, this, u),
									i < arguments.length && _(e, arguments[i]),
									e
								);
							});
						if (
							((u.prototype = s),
							'Error' !== l
								? m
									? m(u, a)
									: g(u, a, { name: !0 })
								: x && o in c && (v(u, c, o), v(u, c, 'prepareStackTrace')),
							g(u, c),
							!k)
						)
							try {
								s.name !== l && f(s, 'name', l), (s.constructor = u);
							} catch (e) {}
						return u;
					}
				};
			},
			9529: function (e, t, n) {
				'use strict';
				var r = n(3103),
					o = n(9540).includes,
					i = n(4229),
					n = n(9736);
				r(
					{
						target: 'Array',
						proto: !0,
						forced: i(function () {
							return !Array(1).includes();
						})
					},
					{
						includes: function (e) {
							return o(this, e, 1 < arguments.length ? arguments[1] : void 0);
						}
					}
				),
					n('includes');
			},
			5735: function (e, t, n) {
				'use strict';
				var r = n(905),
					o = n(9736),
					i = n(5495),
					a = n(6407),
					l = n(1787).f,
					c = n(7675),
					s = n(4231),
					n = n(7400),
					u = 'Array Iterator',
					d = a.set,
					p = a.getterFor(u),
					a =
						((e.exports = c(
							Array,
							'Array',
							function (e, t) {
								d(this, { type: u, target: r(e), index: 0, kind: t });
							},
							function () {
								var e = p(this),
									t = e.target,
									n = e.kind,
									r = e.index++;
								return !t || r >= t.length
									? { value: (e.target = void 0), done: !0 }
									: 'keys' == n
										? { value: r, done: !1 }
										: 'values' == n
											? { value: t[r], done: !1 }
											: { value: [r, t[r]], done: !1 };
							},
							'values'
						)),
						(i.Arguments = i.Array));
				if ((o('keys'), o('values'), o('entries'), !s && n && 'values' !== a.name))
					try {
						l(a, 'name', { value: 'values' });
					} catch (e) {}
			},
			3985: function (e, t, n) {
				n(9736)('flatMap');
			},
			7694: function (e, t, n) {
				n(9736)('flat');
			},
			1372: function (e, t, n) {
				function r(e, t) {
					var n = {};
					(n[e] = c(e, t, u)), i({ global: !0, constructor: !0, arity: 1, forced: u }, n);
				}
				function o(e, t) {
					var n;
					s &&
						s[e] &&
						(((n = {})[e] = c('WebAssembly.' + e, t, u)),
						i({ target: 'WebAssembly', stat: !0, constructor: !0, arity: 1, forced: u }, n));
				}
				var i = n(3103),
					a = n(9859),
					l = n(3171),
					c = n(3949),
					s = a.WebAssembly,
					u = 7 !== Error('e', { cause: 7 }).cause;
				r('Error', function (t) {
					return function (e) {
						return l(t, this, arguments);
					};
				}),
					r('EvalError', function (t) {
						return function (e) {
							return l(t, this, arguments);
						};
					}),
					r('RangeError', function (t) {
						return function (e) {
							return l(t, this, arguments);
						};
					}),
					r('ReferenceError', function (t) {
						return function (e) {
							return l(t, this, arguments);
						};
					}),
					r('SyntaxError', function (t) {
						return function (e) {
							return l(t, this, arguments);
						};
					}),
					r('TypeError', function (t) {
						return function (e) {
							return l(t, this, arguments);
						};
					}),
					r('URIError', function (t) {
						return function (e) {
							return l(t, this, arguments);
						};
					}),
					o('CompileError', function (t) {
						return function (e) {
							return l(t, this, arguments);
						};
					}),
					o('LinkError', function (t) {
						return function (e) {
							return l(t, this, arguments);
						};
					}),
					o('RuntimeError', function (t) {
						return function (e) {
							return l(t, this, arguments);
						};
					});
			},
			7950: function (e, t, n) {
				'use strict';
				var r = n(3103),
					n = n(3466);
				r({ target: 'RegExp', proto: !0, forced: /./.exec !== n }, { exec: n });
			},
			5940: function (e, t, n) {
				'use strict';
				var D = n(3171),
					o = n(266),
					r = n(5968),
					i = n(4954),
					a = n(4229),
					x = n(1176),
					k = n(6733),
					S = n(3329),
					C = n(4237),
					E = n(3326),
					l = n(8885),
					I = n(6637),
					c = n(5300),
					M = n(17),
					N = n(8115),
					s = n(95)('replace'),
					T = Math.max,
					O = Math.min,
					P = r([].concat),
					A = r([].push),
					R = r(''.indexOf),
					L = r(''.slice),
					n = '$0' === 'a'.replace(/./, '$0'),
					u = !!/./[s] && '' === /./[s]('a', '$0');
				i(
					'replace',
					function (e, w, _) {
						var b = u ? '$' : '$0';
						return [
							function (e, t) {
								var n = l(this),
									r = null == e ? void 0 : c(e, s);
								return r ? o(r, e, n, t) : o(w, E(n), e, t);
							},
							function (e, t) {
								var n = x(this),
									r = E(e);
								if ('string' == typeof t && -1 === R(t, b) && -1 === R(t, '$<')) {
									e = _(w, n, r, t);
									if (e.done) return e.value;
								}
								var o,
									i = k(t),
									a = (i || (t = E(t)), n.global);
								a && ((o = n.unicode), (n.lastIndex = 0));
								for (var l = []; ; ) {
									var c = N(n, r);
									if (null === c) break;
									if ((A(l, c), !a)) break;
									'' === E(c[0]) && (n.lastIndex = I(r, C(n.lastIndex), o));
								}
								for (var s, u = '', d = 0, p = 0; p < l.length; p++) {
									for (
										var f = E((c = l[p])[0]), h = T(O(S(c.index), r.length), 0), m = [], g = 1;
										g < c.length;
										g++
									)
										A(m, void 0 === (s = c[g]) ? s : String(s));
									var v = c.groups,
										y = i
											? ((y = P([f], m, h, r)), void 0 !== v && A(y, v), E(D(t, void 0, y)))
											: M(f, r, h, m, v, t);
									d <= h && ((u += L(r, d, h) + y), (d = h + f.length));
								}
								return u + L(r, d);
							}
						];
					},
					!!a(function () {
						var e = /./;
						return (
							(e.exec = function () {
								var e = [];
								return (e.groups = { a: '7' }), e;
							}),
							'7' !== ''.replace(e, '$<a>')
						);
					}) ||
						!n ||
						u
				);
			},
			6886: function (e, t, n) {
				function r(e, t) {
					if (e) {
						if (e[u] !== p)
							try {
								s(e, u, p);
							} catch (t) {
								e[u] = p;
							}
						if ((e[d] || s(e, d, t), a[t]))
							for (var n in c)
								if (e[n] !== c[n])
									try {
										s(e, n, c[n]);
									} catch (t) {
										e[n] = c[n];
									}
					}
				}
				var o,
					i = n(9859),
					a = n(5694),
					l = n(8865),
					c = n(5735),
					s = n(5762),
					n = n(95),
					u = n('iterator'),
					d = n('toStringTag'),
					p = c.values;
				for (o in a) r(i[o] && i[o].prototype, o);
				r(l, 'DOMTokenList');
			},
			5368: function (e) {
				e.exports = (function () {
					'use strict';
					function Re(e) {
						return (Re =
							'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
								? function (e) {
										return typeof e;
									}
								: function (e) {
										return e &&
											'function' == typeof Symbol &&
											e.constructor === Symbol &&
											e !== Symbol.prototype
											? 'symbol'
											: typeof e;
									})(e);
					}
					function o(e, t) {
						return (o =
							Object.setPrototypeOf ||
							function (e, t) {
								return (e.__proto__ = t), e;
							})(e, t);
					}
					function r(e, t, n) {
						return (r = (function () {
							if ('undefined' != typeof Reflect && Reflect.construct && !Reflect.construct.sham) {
								if ('function' == typeof Proxy) return 1;
								try {
									return (
										Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})),
										1
									);
								} catch (e) {}
							}
						})()
							? Reflect.construct
							: function (e, t, n) {
									var r = [null],
										t = (r.push.apply(r, t), new (Function.bind.apply(e, r))());
									return n && o(t, n.prototype), t;
								}).apply(null, arguments);
					}
					function Le(e) {
						return (
							(function (e) {
								if (Array.isArray(e)) return i(e);
							})(e) ||
							(function (e) {
								if (
									('undefined' != typeof Symbol && null != e[Symbol.iterator]) ||
									null != e['@@iterator']
								)
									return Array.from(e);
							})(e) ||
							(function (e, t) {
								{
									var n;
									if (e)
										return 'string' == typeof e
											? i(e, t)
											: 'Map' ===
														(n =
															'Object' === (n = Object.prototype.toString.call(e).slice(8, -1)) &&
															e.constructor
																? e.constructor.name
																: n) || 'Set' === n
												? Array.from(e)
												: 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
													? i(e, t)
													: void 0;
								}
							})(e) ||
							(function () {
								throw new TypeError(
									'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
								);
							})()
						);
					}
					function i(e, t) {
						(null == t || t > e.length) && (t = e.length);
						for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
						return r;
					}
					var a,
						l = Object.hasOwnProperty,
						c = Object.setPrototypeOf,
						s = Object.isFrozen,
						u = Object.getPrototypeOf,
						d = Object.getOwnPropertyDescriptor,
						He = Object.freeze,
						e = Object.seal,
						p = Object.create,
						t = 'undefined' != typeof Reflect && Reflect,
						f =
							(f = t.apply) ||
							function (e, t, n) {
								return e.apply(t, n);
							},
						He =
							He ||
							function (e) {
								return e;
							},
						e =
							e ||
							function (e) {
								return e;
							},
						h =
							(h = t.construct) ||
							function (e, t) {
								return r(e, Le(t));
							},
						nt = m(Array.prototype.forEach),
						Fe = m(Array.prototype.pop),
						ze = m(Array.prototype.push),
						Be = m(String.prototype.toLowerCase),
						rt = m(String.prototype.match),
						We = m(String.prototype.replace),
						ot = m(String.prototype.indexOf),
						it = m(String.prototype.trim),
						je = m(RegExp.prototype.test),
						Ge =
							((a = TypeError),
							function () {
								for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
									t[n] = arguments[n];
								return h(a, t);
							});
					function m(o) {
						return function (e) {
							for (var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), r = 1; r < t; r++)
								n[r - 1] = arguments[r];
							return f(o, e, n);
						};
					}
					function Ue(e, t) {
						c && c(e, null);
						for (var n = t.length; n--; ) {
							var r,
								o = t[n];
							'string' == typeof o && (r = Be(o)) !== o && (s(t) || (t[n] = r), (o = r)),
								(e[o] = !0);
						}
						return e;
					}
					function Ye(e) {
						var t,
							n = p(null);
						for (t in e) f(l, e, [t]) && (n[t] = e[t]);
						return n;
					}
					function Ve(e, t) {
						for (; null !== e; ) {
							var n = d(e, t);
							if (n) {
								if (n.get) return m(n.get);
								if ('function' == typeof n.value) return m(n.value);
							}
							e = u(e);
						}
						return function (e) {
							return console.warn('fallback value for', e), null;
						};
					}
					var $e = He([
							'a',
							'abbr',
							'acronym',
							'address',
							'area',
							'article',
							'aside',
							'audio',
							'b',
							'bdi',
							'bdo',
							'big',
							'blink',
							'blockquote',
							'body',
							'br',
							'button',
							'canvas',
							'caption',
							'center',
							'cite',
							'code',
							'col',
							'colgroup',
							'content',
							'data',
							'datalist',
							'dd',
							'decorator',
							'del',
							'details',
							'dfn',
							'dialog',
							'dir',
							'div',
							'dl',
							'dt',
							'element',
							'em',
							'fieldset',
							'figcaption',
							'figure',
							'font',
							'footer',
							'form',
							'h1',
							'h2',
							'h3',
							'h4',
							'h5',
							'h6',
							'head',
							'header',
							'hgroup',
							'hr',
							'html',
							'i',
							'img',
							'input',
							'ins',
							'kbd',
							'label',
							'legend',
							'li',
							'main',
							'map',
							'mark',
							'marquee',
							'menu',
							'menuitem',
							'meter',
							'nav',
							'nobr',
							'ol',
							'optgroup',
							'option',
							'output',
							'p',
							'picture',
							'pre',
							'progress',
							'q',
							'rp',
							'rt',
							'ruby',
							's',
							'samp',
							'section',
							'select',
							'shadow',
							'small',
							'source',
							'spacer',
							'span',
							'strike',
							'strong',
							'style',
							'sub',
							'summary',
							'sup',
							'table',
							'tbody',
							'td',
							'template',
							'textarea',
							'tfoot',
							'th',
							'thead',
							'time',
							'tr',
							'track',
							'tt',
							'u',
							'ul',
							'var',
							'video',
							'wbr'
						]),
						Xe = He([
							'svg',
							'a',
							'altglyph',
							'altglyphdef',
							'altglyphitem',
							'animatecolor',
							'animatemotion',
							'animatetransform',
							'circle',
							'clippath',
							'defs',
							'desc',
							'ellipse',
							'filter',
							'font',
							'g',
							'glyph',
							'glyphref',
							'hkern',
							'image',
							'line',
							'lineargradient',
							'marker',
							'mask',
							'metadata',
							'mpath',
							'path',
							'pattern',
							'polygon',
							'polyline',
							'radialgradient',
							'rect',
							'stop',
							'style',
							'switch',
							'symbol',
							'text',
							'textpath',
							'title',
							'tref',
							'tspan',
							'view',
							'vkern'
						]),
						qe = He([
							'feBlend',
							'feColorMatrix',
							'feComponentTransfer',
							'feComposite',
							'feConvolveMatrix',
							'feDiffuseLighting',
							'feDisplacementMap',
							'feDistantLight',
							'feFlood',
							'feFuncA',
							'feFuncB',
							'feFuncG',
							'feFuncR',
							'feGaussianBlur',
							'feImage',
							'feMerge',
							'feMergeNode',
							'feMorphology',
							'feOffset',
							'fePointLight',
							'feSpecularLighting',
							'feSpotLight',
							'feTile',
							'feTurbulence'
						]),
						at = He([
							'animate',
							'color-profile',
							'cursor',
							'discard',
							'fedropshadow',
							'font-face',
							'font-face-format',
							'font-face-name',
							'font-face-src',
							'font-face-uri',
							'foreignobject',
							'hatch',
							'hatchpath',
							'mesh',
							'meshgradient',
							'meshpatch',
							'meshrow',
							'missing-glyph',
							'script',
							'set',
							'solidcolor',
							'unknown',
							'use'
						]),
						Ke = He([
							'math',
							'menclose',
							'merror',
							'mfenced',
							'mfrac',
							'mglyph',
							'mi',
							'mlabeledtr',
							'mmultiscripts',
							'mn',
							'mo',
							'mover',
							'mpadded',
							'mphantom',
							'mroot',
							'mrow',
							'ms',
							'mspace',
							'msqrt',
							'mstyle',
							'msub',
							'msup',
							'msubsup',
							'mtable',
							'mtd',
							'mtext',
							'mtr',
							'munder',
							'munderover'
						]),
						lt = He([
							'maction',
							'maligngroup',
							'malignmark',
							'mlongdiv',
							'mscarries',
							'mscarry',
							'msgroup',
							'mstack',
							'msline',
							'msrow',
							'semantics',
							'annotation',
							'annotation-xml',
							'mprescripts',
							'none'
						]),
						Ze = He(['#text']),
						Je = He([
							'accept',
							'action',
							'align',
							'alt',
							'autocapitalize',
							'autocomplete',
							'autopictureinpicture',
							'autoplay',
							'background',
							'bgcolor',
							'border',
							'capture',
							'cellpadding',
							'cellspacing',
							'checked',
							'cite',
							'class',
							'clear',
							'color',
							'cols',
							'colspan',
							'controls',
							'controlslist',
							'coords',
							'crossorigin',
							'datetime',
							'decoding',
							'default',
							'dir',
							'disabled',
							'disablepictureinpicture',
							'disableremoteplayback',
							'download',
							'draggable',
							'enctype',
							'enterkeyhint',
							'face',
							'for',
							'headers',
							'height',
							'hidden',
							'high',
							'href',
							'hreflang',
							'id',
							'inputmode',
							'integrity',
							'ismap',
							'kind',
							'label',
							'lang',
							'list',
							'loading',
							'loop',
							'low',
							'max',
							'maxlength',
							'media',
							'method',
							'min',
							'minlength',
							'multiple',
							'muted',
							'name',
							'nonce',
							'noshade',
							'novalidate',
							'nowrap',
							'open',
							'optimum',
							'pattern',
							'placeholder',
							'playsinline',
							'poster',
							'preload',
							'pubdate',
							'radiogroup',
							'readonly',
							'rel',
							'required',
							'rev',
							'reversed',
							'role',
							'rows',
							'rowspan',
							'spellcheck',
							'scope',
							'selected',
							'shape',
							'size',
							'sizes',
							'span',
							'srclang',
							'start',
							'src',
							'srcset',
							'step',
							'style',
							'summary',
							'tabindex',
							'title',
							'translate',
							'type',
							'usemap',
							'valign',
							'value',
							'width',
							'xmlns',
							'slot'
						]),
						Qe = He([
							'accent-height',
							'accumulate',
							'additive',
							'alignment-baseline',
							'ascent',
							'attributename',
							'attributetype',
							'azimuth',
							'basefrequency',
							'baseline-shift',
							'begin',
							'bias',
							'by',
							'class',
							'clip',
							'clippathunits',
							'clip-path',
							'clip-rule',
							'color',
							'color-interpolation',
							'color-interpolation-filters',
							'color-profile',
							'color-rendering',
							'cx',
							'cy',
							'd',
							'dx',
							'dy',
							'diffuseconstant',
							'direction',
							'display',
							'divisor',
							'dur',
							'edgemode',
							'elevation',
							'end',
							'fill',
							'fill-opacity',
							'fill-rule',
							'filter',
							'filterunits',
							'flood-color',
							'flood-opacity',
							'font-family',
							'font-size',
							'font-size-adjust',
							'font-stretch',
							'font-style',
							'font-variant',
							'font-weight',
							'fx',
							'fy',
							'g1',
							'g2',
							'glyph-name',
							'glyphref',
							'gradientunits',
							'gradienttransform',
							'height',
							'href',
							'id',
							'image-rendering',
							'in',
							'in2',
							'k',
							'k1',
							'k2',
							'k3',
							'k4',
							'kerning',
							'keypoints',
							'keysplines',
							'keytimes',
							'lang',
							'lengthadjust',
							'letter-spacing',
							'kernelmatrix',
							'kernelunitlength',
							'lighting-color',
							'local',
							'marker-end',
							'marker-mid',
							'marker-start',
							'markerheight',
							'markerunits',
							'markerwidth',
							'maskcontentunits',
							'maskunits',
							'max',
							'mask',
							'media',
							'method',
							'mode',
							'min',
							'name',
							'numoctaves',
							'offset',
							'operator',
							'opacity',
							'order',
							'orient',
							'orientation',
							'origin',
							'overflow',
							'paint-order',
							'path',
							'pathlength',
							'patterncontentunits',
							'patterntransform',
							'patternunits',
							'points',
							'preservealpha',
							'preserveaspectratio',
							'primitiveunits',
							'r',
							'rx',
							'ry',
							'radius',
							'refx',
							'refy',
							'repeatcount',
							'repeatdur',
							'restart',
							'result',
							'rotate',
							'scale',
							'seed',
							'shape-rendering',
							'specularconstant',
							'specularexponent',
							'spreadmethod',
							'startoffset',
							'stddeviation',
							'stitchtiles',
							'stop-color',
							'stop-opacity',
							'stroke-dasharray',
							'stroke-dashoffset',
							'stroke-linecap',
							'stroke-linejoin',
							'stroke-miterlimit',
							'stroke-opacity',
							'stroke',
							'stroke-width',
							'style',
							'surfacescale',
							'systemlanguage',
							'tabindex',
							'targetx',
							'targety',
							'transform',
							'transform-origin',
							'text-anchor',
							'text-decoration',
							'text-rendering',
							'textlength',
							'type',
							'u1',
							'u2',
							'unicode',
							'values',
							'viewbox',
							'visibility',
							'version',
							'vert-adv-y',
							'vert-origin-x',
							'vert-origin-y',
							'width',
							'word-spacing',
							'wrap',
							'writing-mode',
							'xchannelselector',
							'ychannelselector',
							'x',
							'x1',
							'x2',
							'xmlns',
							'y',
							'y1',
							'y2',
							'z',
							'zoomandpan'
						]),
						et = He([
							'accent',
							'accentunder',
							'align',
							'bevelled',
							'close',
							'columnsalign',
							'columnlines',
							'columnspan',
							'denomalign',
							'depth',
							'dir',
							'display',
							'displaystyle',
							'encoding',
							'fence',
							'frame',
							'height',
							'href',
							'id',
							'largeop',
							'length',
							'linethickness',
							'lspace',
							'lquote',
							'mathbackground',
							'mathcolor',
							'mathsize',
							'mathvariant',
							'maxsize',
							'minsize',
							'movablelimits',
							'notation',
							'numalign',
							'open',
							'rowalign',
							'rowlines',
							'rowspacing',
							'rowspan',
							'rspace',
							'rquote',
							'scriptlevel',
							'scriptminsize',
							'scriptsizemultiplier',
							'selection',
							'separator',
							'separators',
							'stretchy',
							'subscriptshift',
							'supscriptshift',
							'symmetric',
							'voffset',
							'width',
							'xmlns'
						]),
						tt = He(['xlink:href', 'xml:id', 'xlink:title', 'xml:space', 'xmlns:xlink']),
						ct = e(/\{\{[\w\W]*|[\w\W]*\}\}/gm),
						st = e(/<%[\w\W]*|[\w\W]*%>/gm),
						ut = e(/^data-[\-\w.\u00B7-\uFFFF]/),
						dt = e(/^aria-[\-\w]+$/),
						pt = e(
							/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
						),
						ft = e(/^(?:\w+script|data):/i),
						ht = e(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
						mt = e(/^html$/i);
					return (function L(e) {
						var l =
								0 < arguments.length && void 0 !== e
									? e
									: 'undefined' == typeof window
										? null
										: window,
							s = function (e) {
								return L(e);
							};
						if (
							((s.version = '2.3.8'),
							(s.removed = []),
							l && l.document && 9 === l.document.nodeType)
						) {
							var c = l.document,
								o = l.document,
								H = l.DocumentFragment,
								e = l.HTMLTemplateElement,
								u = l.Node,
								F = l.Element,
								t = l.NodeFilter,
								z = void 0 === (n = l.NamedNodeMap) ? l.NamedNodeMap || l.MozNamedAttrMap : n,
								B = l.HTMLFormElement,
								W = l.DOMParser,
								n = l.trustedTypes,
								j = Ve((r = F.prototype), 'cloneNode'),
								G = Ve(r, 'nextSibling'),
								U = Ve(r, 'childNodes'),
								d = Ve(r, 'parentNode'),
								p =
									('function' == typeof e &&
										(r = o.createElement('template')).content &&
										r.content.ownerDocument &&
										(o = r.content.ownerDocument),
									(function (e, t) {
										if ('object' !== Re(e) || 'function' != typeof e.createPolicy) return null;
										var n = null,
											r = 'data-tt-policy-suffix',
											t =
												'dompurify' +
												((n =
													t.currentScript && t.currentScript.hasAttribute(r)
														? t.currentScript.getAttribute(r)
														: n)
													? '#' + n
													: '');
										try {
											return e.createPolicy(t, {
												createHTML: function (e) {
													return e;
												}
											});
										} catch (e) {
											return (
												console.warn('TrustedTypes policy ' + t + ' could not be created.'), null
											);
										}
									})(n, c)),
								Y = p ? p.createHTML('') : '',
								e = o,
								i = e.implementation,
								V = e.createNodeIterator,
								$ = e.createDocumentFragment,
								X = e.getElementsByTagName,
								q = c.importNode,
								r = {};
							try {
								r = Ye(o).documentMode ? o.documentMode : {};
							} catch (e) {}
							var a = {};
							s.isSupported =
								'function' == typeof d && i && void 0 !== i.createHTMLDocument && 9 !== r;
							var f,
								h,
								K,
								m = ct,
								g = st,
								Z = ut,
								J = dt,
								Q = ft,
								ee = ht,
								te = pt,
								v = null,
								ne = Ue({}, [].concat(Le($e), Le(Xe), Le(qe), Le(Ke), Le(Ze))),
								y = null,
								re = Ue({}, [].concat(Le(Je), Le(Qe), Le(et), Le(tt))),
								w = Object.seal(
									Object.create(null, {
										tagNameCheck: { writable: !0, configurable: !1, enumerable: !0, value: null },
										attributeNameCheck: {
											writable: !0,
											configurable: !1,
											enumerable: !0,
											value: null
										},
										allowCustomizedBuiltInElements: {
											writable: !0,
											configurable: !1,
											enumerable: !0,
											value: !1
										}
									})
								),
								_ = null,
								oe = null,
								ie = !0,
								ae = !0,
								le = !1,
								b = !1,
								D = !1,
								ce = !1,
								se = !1,
								x = !1,
								k = !1,
								S = !1,
								ue = !0,
								de = !0,
								C = !1,
								E = {},
								I = null,
								pe = Ue({}, [
									'annotation-xml',
									'audio',
									'colgroup',
									'desc',
									'foreignobject',
									'head',
									'iframe',
									'math',
									'mi',
									'mn',
									'mo',
									'ms',
									'mtext',
									'noembed',
									'noframes',
									'noscript',
									'plaintext',
									'script',
									'style',
									'svg',
									'template',
									'thead',
									'title',
									'video',
									'xmp'
								]),
								fe = null,
								he = Ue({}, ['audio', 'video', 'img', 'source', 'image', 'track']),
								me = null,
								ge = Ue({}, [
									'alt',
									'class',
									'for',
									'id',
									'label',
									'name',
									'pattern',
									'placeholder',
									'role',
									'summary',
									'title',
									'value',
									'style',
									'xmlns'
								]),
								ve = 'http://www.w3.org/1998/Math/MathML',
								ye = 'http://www.w3.org/2000/svg',
								M = 'http://www.w3.org/1999/xhtml',
								N = M,
								we = ['application/xhtml+xml', 'text/html'],
								T = null,
								_e = o.createElement('form'),
								be = function (e) {
									return e instanceof RegExp || e instanceof Function;
								},
								De = function (e) {
									(T && T === e) ||
										((e = Ye((e = e && 'object' === Re(e) ? e : {}))),
										(v = 'ALLOWED_TAGS' in e ? Ue({}, e.ALLOWED_TAGS) : ne),
										(y = 'ALLOWED_ATTR' in e ? Ue({}, e.ALLOWED_ATTR) : re),
										(me = 'ADD_URI_SAFE_ATTR' in e ? Ue(Ye(ge), e.ADD_URI_SAFE_ATTR) : ge),
										(fe = 'ADD_DATA_URI_TAGS' in e ? Ue(Ye(he), e.ADD_DATA_URI_TAGS) : he),
										(I = 'FORBID_CONTENTS' in e ? Ue({}, e.FORBID_CONTENTS) : pe),
										(_ = 'FORBID_TAGS' in e ? Ue({}, e.FORBID_TAGS) : {}),
										(oe = 'FORBID_ATTR' in e ? Ue({}, e.FORBID_ATTR) : {}),
										(E = 'USE_PROFILES' in e && e.USE_PROFILES),
										(ie = !1 !== e.ALLOW_ARIA_ATTR),
										(ae = !1 !== e.ALLOW_DATA_ATTR),
										(le = e.ALLOW_UNKNOWN_PROTOCOLS || !1),
										(b = e.SAFE_FOR_TEMPLATES || !1),
										(D = e.WHOLE_DOCUMENT || !1),
										(x = e.RETURN_DOM || !1),
										(k = e.RETURN_DOM_FRAGMENT || !1),
										(S = e.RETURN_TRUSTED_TYPE || !1),
										(se = e.FORCE_BODY || !1),
										(ue = !1 !== e.SANITIZE_DOM),
										(de = !1 !== e.KEEP_CONTENT),
										(C = e.IN_PLACE || !1),
										(te = e.ALLOWED_URI_REGEXP || te),
										(N = e.NAMESPACE || M),
										e.CUSTOM_ELEMENT_HANDLING &&
											be(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) &&
											(w.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),
										e.CUSTOM_ELEMENT_HANDLING &&
											be(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) &&
											(w.attributeNameCheck = e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),
										e.CUSTOM_ELEMENT_HANDLING &&
											'boolean' ==
												typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements &&
											(w.allowCustomizedBuiltInElements =
												e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),
										(f =
											-1 === we.indexOf(e.PARSER_MEDIA_TYPE) ? 'text/html' : e.PARSER_MEDIA_TYPE),
										(h =
											'application/xhtml+xml' === f
												? function (e) {
														return e;
													}
												: Be),
										b && (ae = !1),
										k && (x = !0),
										E &&
											((v = Ue({}, Le(Ze))),
											(y = []),
											!0 === E.html && (Ue(v, $e), Ue(y, Je)),
											!0 === E.svg && (Ue(v, Xe), Ue(y, Qe), Ue(y, tt)),
											!0 === E.svgFilters && (Ue(v, qe), Ue(y, Qe), Ue(y, tt)),
											!0 === E.mathMl) &&
											(Ue(v, Ke), Ue(y, et), Ue(y, tt)),
										e.ADD_TAGS && Ue((v = v === ne ? Ye(v) : v), e.ADD_TAGS),
										e.ADD_ATTR && Ue((y = y === re ? Ye(y) : y), e.ADD_ATTR),
										e.ADD_URI_SAFE_ATTR && Ue(me, e.ADD_URI_SAFE_ATTR),
										e.FORBID_CONTENTS && Ue((I = I === pe ? Ye(I) : I), e.FORBID_CONTENTS),
										de && (v['#text'] = !0),
										D && Ue(v, ['html', 'head', 'body']),
										v.table && (Ue(v, ['tbody']), delete _.tbody),
										He && He(e),
										(T = e));
								},
								xe = Ue({}, ['mi', 'mo', 'mn', 'ms', 'mtext']),
								ke = Ue({}, ['foreignobject', 'desc', 'title', 'annotation-xml']),
								Se = Ue({}, ['title', 'style', 'font', 'a', 'script']),
								O = Ue({}, Xe),
								Ce = (Ue(O, qe), Ue(O, at), Ue({}, Ke)),
								P =
									(Ue(Ce, lt),
									function (t) {
										ze(s.removed, { element: t });
										try {
											t.parentNode.removeChild(t);
										} catch (e) {
											try {
												t.outerHTML = Y;
											} catch (e) {
												t.remove();
											}
										}
									}),
								Ee = function (e, t) {
									try {
										ze(s.removed, { attribute: t.getAttributeNode(e), from: t });
									} catch (e) {
										ze(s.removed, { attribute: null, from: t });
									}
									if ((t.removeAttribute(e), 'is' === e && !y[e]))
										if (x || k)
											try {
												P(t);
											} catch (e) {}
										else
											try {
												t.setAttribute(e, '');
											} catch (e) {}
								},
								Ie = function (e) {
									se ? (e = '<remove></remove>' + e) : (n = (n = rt(e, /^[\r\n\t ]+/)) && n[0]),
										'application/xhtml+xml' === f &&
											(e =
												'<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' +
												e +
												'</body></html>');
									var t,
										n,
										r = p ? p.createHTML(e) : e;
									if (N === M)
										try {
											t = new W().parseFromString(r, f);
										} catch (e) {}
									if (!t || !t.documentElement) {
										t = i.createDocument(N, 'template', null);
										try {
											t.documentElement.innerHTML = K ? '' : r;
										} catch (e) {}
									}
									return (
										(r = t.body || t.documentElement),
										e && n && r.insertBefore(o.createTextNode(n), r.childNodes[0] || null),
										N === M ? X.call(t, D ? 'html' : 'body')[0] : D ? t.documentElement : r
									);
								},
								Me = function (e) {
									return V.call(
										e.ownerDocument || e,
										e,
										t.SHOW_ELEMENT | t.SHOW_COMMENT | t.SHOW_TEXT,
										null,
										!1
									);
								},
								A = function (e) {
									return 'object' === Re(u)
										? e instanceof u
										: e &&
												'object' === Re(e) &&
												'number' == typeof e.nodeType &&
												'string' == typeof e.nodeName;
								},
								R = function (e, t, n) {
									a[e] &&
										nt(a[e], function (e) {
											e.call(s, t, n, T);
										});
								},
								Ne = function (e) {
									if (
										(R('beforeSanitizeElements', e, null),
										(!((i = e) instanceof B) ||
											('string' == typeof i.nodeName &&
												'string' == typeof i.textContent &&
												'function' == typeof i.removeChild &&
												i.attributes instanceof z &&
												'function' == typeof i.removeAttribute &&
												'function' == typeof i.setAttribute &&
												'string' == typeof i.namespaceURI &&
												'function' == typeof i.insertBefore)) &&
											!je(/[\u0080-\uFFFF]/, e.nodeName))
									) {
										var t,
											n,
											r,
											o,
											i = h(e.nodeName);
										if (
											(R('uponSanitizeElement', e, { tagName: i, allowedTags: v }),
											(!e.hasChildNodes() ||
												A(e.firstElementChild) ||
												(A(e.content) && A(e.content.firstElementChild)) ||
												!je(/<[/\w]/g, e.innerHTML) ||
												!je(/<[/\w]/g, e.textContent)) &&
												('select' !== i || !je(/<template/i, e.innerHTML)))
										) {
											if (v[i] && !_[i])
												return (e instanceof F &&
													(((n = d((t = e))) && n.tagName) ||
														(n = { namespaceURI: M, tagName: 'template' }),
													(r = Be(t.tagName)),
													(o = Be(n.tagName)),
													t.namespaceURI === ye
														? n.namespaceURI === M
															? 'svg' !== r
															: n.namespaceURI === ve
																? 'svg' !== r || ('annotation-xml' !== o && !xe[o])
																: !Boolean(O[r])
														: t.namespaceURI === ve
															? n.namespaceURI === M
																? 'math' !== r
																: n.namespaceURI === ye
																	? 'math' !== r || !ke[o]
																	: !Boolean(Ce[r])
															: t.namespaceURI !== M ||
																(n.namespaceURI === ye && !ke[o]) ||
																(n.namespaceURI === ve && !xe[o]) ||
																Ce[r] ||
																(!Se[r] && O[r]))) ||
													(('noscript' === i || 'noembed' === i) &&
														je(/<\/no(script|embed)/i, e.innerHTML))
													? (P(e), !0)
													: (b &&
															3 === e.nodeType &&
															((t = e.textContent),
															(t = We(t, m, ' ')),
															(t = We(t, g, ' ')),
															e.textContent !== t) &&
															(ze(s.removed, { element: e.cloneNode() }), (e.textContent = t)),
														R('afterSanitizeElements', e, null),
														!1);
											if (!_[i] && Oe(i)) {
												if (w.tagNameCheck instanceof RegExp && je(w.tagNameCheck, i)) return !1;
												if (w.tagNameCheck instanceof Function && w.tagNameCheck(i)) return !1;
											}
											if (de && !I[i]) {
												var a = d(e) || e.parentNode,
													l = U(e) || e.childNodes;
												if (l && a)
													for (var c = l.length - 1; 0 <= c; --c) a.insertBefore(j(l[c], !0), G(e));
											}
										}
									}
									return P(e), !0;
								},
								Te = function (e, t, n) {
									if (ue && ('id' === t || 'name' === t) && (n in o || n in _e)) return !1;
									if ((!ae || oe[t] || !je(Z, t)) && (!ie || !je(J, t)))
										if (!y[t] || oe[t]) {
											if (
												!(
													(Oe(e) &&
														((w.tagNameCheck instanceof RegExp && je(w.tagNameCheck, e)) ||
															(w.tagNameCheck instanceof Function && w.tagNameCheck(e))) &&
														((w.attributeNameCheck instanceof RegExp &&
															je(w.attributeNameCheck, t)) ||
															(w.attributeNameCheck instanceof Function &&
																w.attributeNameCheck(t)))) ||
													('is' === t &&
														w.allowCustomizedBuiltInElements &&
														((w.tagNameCheck instanceof RegExp && je(w.tagNameCheck, n)) ||
															(w.tagNameCheck instanceof Function && w.tagNameCheck(n))))
												)
											)
												return !1;
										} else if (
											!me[t] &&
											!je(te, We(n, ee, '')) &&
											(('src' !== t && 'xlink:href' !== t && 'href' !== t) ||
												'script' === e ||
												0 !== ot(n, 'data:') ||
												!fe[e]) &&
											(!le || je(Q, We(n, ee, ''))) &&
											n
										)
											return !1;
									return !0;
								},
								Oe = function (e) {
									return 0 < e.indexOf('-');
								},
								Pe = function (e) {
									R('beforeSanitizeAttributes', e, null);
									var t = e.attributes;
									if (t) {
										for (
											var n = { attrName: '', attrValue: '', keepAttr: !0, allowedAttributes: y },
												r = t.length;
											r--;

										) {
											var o = (a = t[r]).name,
												i = a.namespaceURI,
												a = 'value' === o ? a.value : it(a.value),
												l = h(o);
											if (
												((n.attrName = l),
												(n.attrValue = a),
												(n.keepAttr = !0),
												(n.forceKeepAttr = void 0),
												R('uponSanitizeAttribute', e, n),
												(a = n.attrValue),
												!n.forceKeepAttr && (Ee(o, e), n.keepAttr))
											)
												if (je(/\/>/i, a)) Ee(o, e);
												else {
													b && ((a = We(a, m, ' ')), (a = We(a, g, ' ')));
													var c = h(e.nodeName);
													if (Te(c, l, a))
														try {
															i ? e.setAttributeNS(i, o, a) : e.setAttribute(o, a), Fe(s.removed);
														} catch (e) {}
												}
										}
										R('afterSanitizeAttributes', e, null);
									}
								},
								Ae = function e(t) {
									var n,
										r = Me(t);
									for (R('beforeSanitizeShadowDOM', t, null); (n = r.nextNode()); )
										R('uponSanitizeShadowNode', n, null),
											Ne(n) || (n.content instanceof H && e(n.content), Pe(n));
									R('afterSanitizeShadowDOM', t, null);
								};
							(s.sanitize = function (e, t) {
								var n, r, o, i;
								if ('string' != typeof (e = (K = !e) ? '\x3c!--\x3e' : e) && !A(e)) {
									if ('function' != typeof e.toString) throw Ge('toString is not a function');
									if ('string' != typeof (e = e.toString()))
										throw Ge('dirty is not a string, aborting');
								}
								if (!s.isSupported) {
									if ('object' === Re(l.toStaticHTML) || 'function' == typeof l.toStaticHTML) {
										if ('string' == typeof e) return l.toStaticHTML(e);
										if (A(e)) return l.toStaticHTML(e.outerHTML);
									}
									return e;
								}
								if ((ce || De(t), (s.removed = []), (C = 'string' != typeof e && C))) {
									if (e.nodeName) {
										t = h(e.nodeName);
										if (!v[t] || _[t])
											throw Ge('root node is forbidden and cannot be sanitized in-place');
									}
								} else if (e instanceof u)
									(1 === (t = (n = Ie('\x3c!----\x3e')).ownerDocument.importNode(e, !0)).nodeType &&
										'BODY' === t.nodeName) ||
									'HTML' === t.nodeName
										? (n = t)
										: n.appendChild(t);
								else {
									if (!x && !b && !D && -1 === e.indexOf('<')) return p && S ? p.createHTML(e) : e;
									if (!(n = Ie(e))) return x ? null : S ? Y : '';
								}
								n && se && P(n.firstChild);
								for (var a = Me(C ? e : n); (r = a.nextNode()); )
									(3 === r.nodeType && r === o) ||
										Ne(r) ||
										(r.content instanceof H && Ae(r.content), Pe(r), (o = r));
								if (((o = null), C)) return e;
								if (x) {
									if (k)
										for (i = $.call(n.ownerDocument); n.firstChild; ) i.appendChild(n.firstChild);
									else i = n;
									return (i = y.shadowroot ? q.call(c, i, !0) : i);
								}
								return (
									(t = D ? n.outerHTML : n.innerHTML),
									D &&
										v['!doctype'] &&
										n.ownerDocument &&
										n.ownerDocument.doctype &&
										n.ownerDocument.doctype.name &&
										je(mt, n.ownerDocument.doctype.name) &&
										(t = '<!DOCTYPE ' + n.ownerDocument.doctype.name + '>\n' + t),
									b && ((t = We(t, m, ' ')), (t = We(t, g, ' '))),
									p && S ? p.createHTML(t) : t
								);
							}),
								(s.setConfig = function (e) {
									De(e), (ce = !0);
								}),
								(s.clearConfig = function () {
									(T = null), (ce = !1);
								}),
								(s.isValidAttribute = function (e, t, n) {
									return T || De({}), (e = h(e)), (t = h(t)), Te(e, t, n);
								}),
								(s.addHook = function (e, t) {
									'function' == typeof t && ((a[e] = a[e] || []), ze(a[e], t));
								}),
								(s.removeHook = function (e) {
									if (a[e]) return Fe(a[e]);
								}),
								(s.removeHooks = function (e) {
									a[e] && (a[e] = []);
								}),
								(s.removeAllHooks = function () {
									a = {};
								});
						} else s.isSupported = !1;
						return s;
					})();
				})();
			},
			4304: function (e, t, n) {
				e.exports = window.DOMPurify || (window.DOMPurify = n(5368).default || n(5368));
			},
			7386: function (e, t, n) {
				'use strict';
				var i = n(3929);
				e.exports = function (e, t, n) {
					var r,
						o = [];
					for (
						i(t) && ((t = e || 0), (e = 0)), t *= r = (n = n || 1) < 0 ? -1 : 1;
						e * r < t;
						e += n
					)
						o.push(e);
					return o;
				};
			},
			1690: function (e, t, n) {
				'use strict';
				var r = n(7322),
					o = n(893),
					i = n(6956);
				e.exports = function (e, t, n) {
					(r(e) ? o : i)(e, t, n);
				};
			},
			893: function (e) {
				'use strict';
				e.exports = function (e, t, n) {
					var r = 0,
						o = e.length;
					for (n = n || null; r < o && !1 !== t.call(n, e[r], r, e); r += 1);
				};
			},
			6956: function (e) {
				'use strict';
				e.exports = function (e, t, n) {
					for (var r in ((n = n || null), e))
						if (e.hasOwnProperty(r) && !1 === t.call(n, e[r], r, e)) break;
				};
			},
			2278: function (e, t, n) {
				'use strict';
				var r = n(7969),
					o = n(7065),
					i = n(758),
					a = n(5758),
					l = n(7322),
					c = n(4294),
					s = n(1690),
					u = /\s+/g;
				function d() {
					(this.events = null), (this.contexts = null);
				}
				(d.mixin = function (e) {
					r(e.prototype, d.prototype);
				}),
					(d.prototype._getHandlerItem = function (e, t) {
						e = { handler: e };
						return t && (e.context = t), e;
					}),
					(d.prototype._safeEvent = function (e) {
						var t,
							n = (n = this.events) || (this.events = {});
						return e && ((t = n[e]) || (n[e] = t = []), (n = t)), n;
					}),
					(d.prototype._safeContext = function () {
						return this.contexts || (this.contexts = []);
					}),
					(d.prototype._indexOfContext = function (e) {
						for (var t = this._safeContext(), n = 0; t[n]; ) {
							if (e === t[n][0]) return n;
							n += 1;
						}
						return -1;
					}),
					(d.prototype._memorizeContext = function (e) {
						var t, n;
						o(e) &&
							((t = this._safeContext()),
							-1 < (n = this._indexOfContext(e)) ? (t[n][1] += 1) : t.push([e, 1]));
					}),
					(d.prototype._forgetContext = function (e) {
						var t;
						o(e) &&
							((t = this._safeContext()), -1 < (e = this._indexOfContext(e))) &&
							(--t[e][1], t[e][1] <= 0) &&
							t.splice(e, 1);
					}),
					(d.prototype._bindEvent = function (e, t, n) {
						e = this._safeEvent(e);
						this._memorizeContext(n), e.push(this._getHandlerItem(t, n));
					}),
					(d.prototype.on = function (e, t, n) {
						var r = this;
						i(e)
							? ((e = e.split(u)),
								s(e, function (e) {
									r._bindEvent(e, t, n);
								}))
							: a(e) &&
								((n = t),
								s(e, function (e, t) {
									r.on(t, e, n);
								}));
					}),
					(d.prototype.once = function (t, n, r) {
						var o = this;
						a(t)
							? ((r = n),
								s(t, function (e, t) {
									o.once(t, e, r);
								}))
							: this.on(
									t,
									function e() {
										n.apply(r, arguments), o.off(t, e, r);
									},
									r
								);
					}),
					(d.prototype._spliceMatches = function (e, t) {
						var n,
							r = 0;
						if (l(e))
							for (n = e.length; r < n; r += 1) !0 === t(e[r]) && (e.splice(r, 1), --n, --r);
					}),
					(d.prototype._matchHandler = function (n) {
						var r = this;
						return function (e) {
							var t = n === e.handler;
							return t && r._forgetContext(e.context), t;
						};
					}),
					(d.prototype._matchContext = function (n) {
						var r = this;
						return function (e) {
							var t = n === e.context;
							return t && r._forgetContext(e.context), t;
						};
					}),
					(d.prototype._matchHandlerAndContext = function (r, o) {
						var i = this;
						return function (e) {
							var t = r === e.handler,
								n = o === e.context,
								t = t && n;
							return t && i._forgetContext(e.context), t;
						};
					}),
					(d.prototype._offByEventName = function (e, t) {
						var n = this,
							r = c(t),
							o = n._matchHandler(t);
						(e = e.split(u)),
							s(e, function (e) {
								var t = n._safeEvent(e);
								r
									? n._spliceMatches(t, o)
									: (s(t, function (e) {
											n._forgetContext(e.context);
										}),
										(n.events[e] = []));
							});
					}),
					(d.prototype._offByHandler = function (e) {
						var t = this,
							n = this._matchHandler(e);
						s(this._safeEvent(), function (e) {
							t._spliceMatches(e, n);
						});
					}),
					(d.prototype._offByObject = function (e, t) {
						var n,
							r = this;
						this._indexOfContext(e) < 0
							? s(e, function (e, t) {
									r.off(t, e);
								})
							: i(t)
								? ((n = this._matchContext(e)), r._spliceMatches(this._safeEvent(t), n))
								: c(t)
									? ((n = this._matchHandlerAndContext(t, e)),
										s(this._safeEvent(), function (e) {
											r._spliceMatches(e, n);
										}))
									: ((n = this._matchContext(e)),
										s(this._safeEvent(), function (e) {
											r._spliceMatches(e, n);
										}));
					}),
					(d.prototype.off = function (e, t) {
						i(e)
							? this._offByEventName(e, t)
							: arguments.length
								? c(e)
									? this._offByHandler(e)
									: a(e) && this._offByObject(e, t)
								: ((this.events = {}), (this.contexts = []));
					}),
					(d.prototype.fire = function (e) {
						this.invoke.apply(this, arguments);
					}),
					(d.prototype.invoke = function (e) {
						var t, n, r, o;
						if (this.hasListener(e))
							for (
								t = this._safeEvent(e), n = Array.prototype.slice.call(arguments, 1), r = 0;
								t[r];

							) {
								if (!1 === (o = t[r]).handler.apply(o.context, n)) return !1;
								r += 1;
							}
						return !0;
					}),
					(d.prototype.hasListener = function (e) {
						return 0 < this.getListenerLength(e);
					}),
					(d.prototype.getListenerLength = function (e) {
						return this._safeEvent(e).length;
					}),
					(e.exports = d);
			},
			7969: function (e) {
				'use strict';
				e.exports = function (e, t) {
					for (
						var n, r, o = Object.prototype.hasOwnProperty, i = 1, a = arguments.length;
						i < a;
						i += 1
					)
						for (r in (n = arguments[i])) o.call(n, r) && (e[r] = n[r]);
					return e;
				};
			},
			4254: function (e, t, n) {
				'use strict';
				var o = n(6956);
				e.exports = function (e, t) {
					var n = document.createElement('img'),
						r = '';
					return (
						o(t, function (e, t) {
							r += '&' + t + '=' + e;
						}),
						(r = r.substring(1)),
						(n.src = e + '?' + r),
						(n.style.display = 'none'),
						document.body.appendChild(n),
						document.body.removeChild(n),
						n
					);
				};
			},
			1391: function (e, t, n) {
				'use strict';
				var i = n(3929),
					a = n(4254);
				e.exports = function (e, t) {
					var n = location.hostname,
						r = 'TOAST UI ' + e + ' for ' + n + ': Statistics',
						o = window.localStorage.getItem(r);
					(!i(window.tui) && !1 === window.tui.usageStatistics) ||
						((!o || ((o = o), 6048e5 < new Date().getTime() - o)) &&
							(window.localStorage.setItem(r, new Date().getTime()),
							setTimeout(function () {
								('interactive' !== document.readyState && 'complete' !== document.readyState) ||
									a('https://www.google-analytics.com/collect', {
										v: 1,
										t: 'event',
										tid: t,
										cid: n,
										dp: n,
										dh: e,
										el: e,
										ec: 'use'
									});
							}, 1e3)));
				};
			},
			7322: function (e) {
				'use strict';
				e.exports = function (e) {
					return e instanceof Array;
				};
			},
			1326: function (e) {
				'use strict';
				e.exports = function (e) {
					return 'boolean' == typeof e || e instanceof Boolean;
				};
			},
			7065: function (e, t, n) {
				'use strict';
				var r = n(3929),
					o = n(2934);
				e.exports = function (e) {
					return !r(e) && !o(e);
				};
			},
			4294: function (e) {
				'use strict';
				e.exports = function (e) {
					return e instanceof Function;
				};
			},
			2934: function (e) {
				'use strict';
				e.exports = function (e) {
					return null === e;
				};
			},
			321: function (e) {
				'use strict';
				e.exports = function (e) {
					return 'number' == typeof e || e instanceof Number;
				};
			},
			5758: function (e) {
				'use strict';
				e.exports = function (e) {
					return e === Object(e);
				};
			},
			758: function (e) {
				'use strict';
				e.exports = function (e) {
					return 'string' == typeof e || e instanceof String;
				};
			},
			3929: function (e) {
				'use strict';
				e.exports = function (e) {
					return void 0 === e;
				};
			},
			4268: function (e) {
				'use strict';
				e.exports = t;
			}
		}),
		(r = {}),
		(fc.n = function (e) {
			var t =
				e && e.__esModule
					? function () {
							return e.default;
						}
					: function () {
							return e;
						};
			return fc.d(t, { a: t }), t;
		}),
		(fc.d = function (e, t) {
			for (var n in t)
				fc.o(t, n) && !fc.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
		}),
		(fc.g = (function () {
			if ('object' == typeof globalThis) return globalThis;
			try {
				return this || new Function('return this')();
			} catch (e) {
				if ('object' == typeof window) return window;
			}
		})()),
		(fc.o = function (e, t) {
			return Object.prototype.hasOwnProperty.call(e, t);
		}),
		(hc = {}),
		(function () {
			'use strict';
			fc.d(hc, {
				default: function () {
					return pc;
				}
			});
			var x,
				H,
				d,
				p,
				S = {},
				_ = [],
				h = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
			function C(e, t) {
				for (var n in t) e[n] = t[n];
				return e;
			}
			function q(e) {
				var t = e.parentNode;
				t && t.removeChild(e);
			}
			function F(e, t, n) {
				var r,
					o,
					i,
					a = {};
				for (i in t) 'key' == i ? (r = t[i]) : 'ref' == i ? (o = t[i]) : (a[i] = t[i]);
				if (
					(2 < arguments.length && (a.children = 3 < arguments.length ? x.call(arguments, 2) : n),
					'function' == typeof e && null != e.defaultProps)
				)
					for (i in e.defaultProps) void 0 === a[i] && (a[i] = e.defaultProps[i]);
				return b(e, a, r, o, null);
			}
			function b(e, t, n, r, o) {
				e = {
					type: e,
					props: t,
					key: n,
					ref: r,
					__k: null,
					__: null,
					__b: 0,
					__e: null,
					__d: void 0,
					__c: null,
					__h: null,
					constructor: void 0,
					__v: null == o ? ++d : o
				};
				return null == o && null != H.vnode && H.vnode(e), e;
			}
			function K(e) {
				return e.children;
			}
			function Z(e, t) {
				(this.props = e), (this.context = t);
			}
			function J(e, t) {
				if (null == t) return e.__ ? J(e.__, e.__.__k.indexOf(e) + 1) : null;
				for (var n; t < e.__k.length; t++)
					if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
				return 'function' == typeof e.type ? J(e) : null;
			}
			function m(e) {
				((e.__d || ((e.__d = !0), !pe.push(e)) || g.__r++) && p === H.debounceRendering) ||
					((p = H.debounceRendering) || setTimeout)(g);
			}
			function g() {
				for (var e; (g.__r = pe.length); )
					(e = pe.sort(function (e, t) {
						return e.__v.__b - t.__v.__b;
					})),
						(pe = []),
						e.some(function (e) {
							var t, n, r, o, i;
							e.__d &&
								((o = (r = (e = e).__v).__e), (i = e.__P)) &&
								((t = []),
								((n = C({}, r)).__v = r.__v + 1),
								re(
									i,
									r,
									n,
									e.__n,
									void 0 !== i.ownerSVGElement,
									null != r.__h ? [o] : null,
									t,
									null == o ? J(r) : o,
									r.__h
								),
								oe(t, r),
								r.__e != o) &&
								(function e(t) {
									var n, r;
									if (null != (t = t.__) && null != t.__c) {
										for (t.__e = t.__c.base = null, n = 0; n < t.__k.length; n++)
											if (null != (r = t.__k[n]) && null != r.__e) {
												t.__e = t.__c.base = r.__e;
												break;
											}
										return e(t);
									}
								})(r);
						});
			}
			function Q(e, t, n, r, o, i, a, l, c, s) {
				var u,
					d,
					p,
					f,
					h,
					m,
					g,
					v = (r && r.__k) || _,
					y = v.length;
				for (n.__k = [], u = 0; u < t.length; u++)
					if (
						null !=
						(f = n.__k[u] =
							null == (f = t[u]) || 'boolean' == typeof f
								? null
								: 'string' == typeof f || 'number' == typeof f || 'bigint' == typeof f
									? b(null, f, null, null, f)
									: Array.isArray(f)
										? b(K, { children: f }, null, null, null)
										: 0 < f.__b
											? b(f.type, f.props, f.key, null, f.__v)
											: f)
					) {
						if (
							((f.__ = n),
							(f.__b = n.__b + 1),
							null === (p = v[u]) || (p && f.key == p.key && f.type === p.type))
						)
							v[u] = void 0;
						else
							for (d = 0; d < y; d++) {
								if ((p = v[d]) && f.key == p.key && f.type === p.type) {
									v[d] = void 0;
									break;
								}
								p = null;
							}
						re(e, f, (p = p || S), o, i, a, l, c, s),
							(h = f.__e),
							(d = f.ref) &&
								p.ref != d &&
								((g = g || []), p.ref && g.push(p.ref, null, f), g.push(d, f.__c || h, f)),
							null != h
								? (null == m && (m = h),
									'function' == typeof f.type && f.__k === p.__k
										? (f.__d = c =
												(function e(t, n, r) {
													for (var o, i = t.__k, a = 0; i && a < i.length; a++)
														(o = i[a]) &&
															((o.__ = t),
															(n =
																'function' == typeof o.type
																	? e(o, n, r)
																	: D(r, o, o, i, o.__e, n)));
													return n;
												})(f, c, e))
										: (c = D(e, f, p, v, h, c)),
									'function' == typeof n.type && (n.__d = c))
								: c && p.__e == c && c.parentNode != e && (c = J(p));
					}
				for (n.__e = m, u = y; u--; )
					null != v[u] &&
						('function' == typeof n.type &&
							null != v[u].__e &&
							v[u].__e == n.__d &&
							(n.__d = J(r, u + 1)),
						(function e(t, n, r) {
							var o, i;
							if (
								(H.unmount && H.unmount(t),
								!(o = t.ref) || (o.current && o.current !== t.__e) || ie(o, null, n),
								null != (o = t.__c))
							) {
								if (o.componentWillUnmount)
									try {
										o.componentWillUnmount();
									} catch (t) {
										H.__e(t, n);
									}
								o.base = o.__P = null;
							}
							if ((o = t.__k))
								for (i = 0; i < o.length; i++) o[i] && e(o[i], n, 'function' != typeof t.type);
							r || null == t.__e || q(t.__e), (t.__e = t.__d = void 0);
						})(v[u], v[u]));
				if (g) for (u = 0; u < g.length; u++) ie(g[u], g[++u], g[++u]);
			}
			function v(e, t) {
				return (
					(t = t || []),
					null != e &&
						'boolean' != typeof e &&
						(Array.isArray(e)
							? e.some(function (e) {
									v(e, t);
								})
							: t.push(e)),
					t
				);
			}
			function D(e, t, n, r, o, i) {
				var a, l, c;
				if (void 0 !== t.__d) (a = t.__d), (t.__d = void 0);
				else if (null == n || o != i || null == o.parentNode)
					e: if (null == i || i.parentNode !== e) e.appendChild(o), (a = null);
					else {
						for (l = i, c = 0; (l = l.nextSibling) && c < r.length; c += 2) if (l == o) break e;
						e.insertBefore(o, i), (a = i);
					}
				return void 0 !== a ? a : o.nextSibling;
			}
			function y(e, t, n) {
				'-' === t[0]
					? e.setProperty(t, n)
					: (e[t] = null == n ? '' : 'number' != typeof n || h.test(t) ? n : n + 'px');
			}
			function ee(e, t, n, r, o) {
				var i;
				e: if ('style' === t)
					if ('string' == typeof n) e.style.cssText = n;
					else {
						if (('string' == typeof r && (e.style.cssText = r = ''), r))
							for (t in r) (n && t in n) || y(e.style, t, '');
						if (n) for (t in n) (r && n[t] === r[t]) || y(e.style, t, n[t]);
					}
				else if ('o' === t[0] && 'n' === t[1])
					(i = t !== (t = t.replace(/Capture$/, ''))),
						(t = (t.toLowerCase() in e ? t.toLowerCase() : t).slice(2)),
						e.l || (e.l = {}),
						(e.l[t + i] = n)
							? r || e.addEventListener(t, i ? ne : te, i)
							: e.removeEventListener(t, i ? ne : te, i);
				else if ('dangerouslySetInnerHTML' !== t) {
					if (o) t = t.replace(/xlink(H|:h)/, 'h').replace(/sName$/, 's');
					else if (
						'href' !== t &&
						'list' !== t &&
						'form' !== t &&
						'tabIndex' !== t &&
						'download' !== t &&
						t in e
					)
						try {
							e[t] = null == n ? '' : n;
							break e;
						} catch (e) {}
					'function' != typeof n &&
						(null != n && (!1 !== n || ('a' === t[0] && 'r' === t[1]))
							? e.setAttribute(t, n)
							: e.removeAttribute(t));
				}
			}
			function te(e) {
				this.l[e.type + !1](H.event ? H.event(e) : e);
			}
			function ne(e) {
				this.l[e.type + !0](H.event ? H.event(e) : e);
			}
			function re(e, t, n, r, o, i, a, l, c) {
				var s,
					u,
					d,
					p,
					f,
					h,
					m,
					g,
					v,
					y,
					w,
					_,
					b,
					D = t.type;
				if (void 0 === t.constructor) {
					null != n.__h && ((c = n.__h), (l = t.__e = n.__e), (t.__h = null), (i = [l])),
						(s = H.__b) && s(t);
					try {
						e: if ('function' == typeof D) {
							if (
								((g = t.props),
								(v = (s = D.contextType) && r[s.__c]),
								(y = s ? (v ? v.props.value : s.__) : r),
								n.__c
									? (m = (u = t.__c = n.__c).__ = u.__E)
									: ('prototype' in D && D.prototype.render
											? (t.__c = u = new D(g, y))
											: ((t.__c = u = new Z(g, y)), (u.constructor = D), (u.render = ae)),
										v && v.sub(u),
										(u.props = g),
										u.state || (u.state = {}),
										(u.context = y),
										(u.__n = r),
										(d = u.__d = !0),
										(u.__h = [])),
								null == u.__s && (u.__s = u.state),
								null != D.getDerivedStateFromProps &&
									(u.__s == u.state && (u.__s = C({}, u.__s)),
									C(u.__s, D.getDerivedStateFromProps(g, u.__s))),
								(p = u.props),
								(f = u.state),
								d)
							)
								null == D.getDerivedStateFromProps &&
									null != u.componentWillMount &&
									u.componentWillMount(),
									null != u.componentDidMount && u.__h.push(u.componentDidMount);
							else {
								if (
									(null == D.getDerivedStateFromProps &&
										g !== p &&
										null != u.componentWillReceiveProps &&
										u.componentWillReceiveProps(g, y),
									(!u.__e &&
										null != u.shouldComponentUpdate &&
										!1 === u.shouldComponentUpdate(g, u.__s, y)) ||
										t.__v === n.__v)
								) {
									(u.props = g),
										(u.state = u.__s),
										t.__v !== n.__v && (u.__d = !1),
										((u.__v = t).__e = n.__e),
										(t.__k = n.__k),
										t.__k.forEach(function (e) {
											e && (e.__ = t);
										}),
										u.__h.length && a.push(u);
									break e;
								}
								null != u.componentWillUpdate && u.componentWillUpdate(g, u.__s, y),
									null != u.componentDidUpdate &&
										u.__h.push(function () {
											u.componentDidUpdate(p, f, h);
										});
							}
							if (
								((u.context = y),
								(u.props = g),
								(u.__v = t),
								(u.__P = e),
								(w = H.__r),
								(_ = 0),
								'prototype' in D && D.prototype.render)
							)
								(u.state = u.__s),
									(u.__d = !1),
									w && w(t),
									(s = u.render(u.props, u.state, u.context));
							else
								for (
									;
									(u.__d = !1),
										w && w(t),
										(s = u.render(u.props, u.state, u.context)),
										(u.state = u.__s),
										u.__d && ++_ < 25;

								);
							(u.state = u.__s),
								null != u.getChildContext && (r = C(C({}, r), u.getChildContext())),
								d || null == u.getSnapshotBeforeUpdate || (h = u.getSnapshotBeforeUpdate(p, f)),
								(b = null != s && s.type === K && null == s.key ? s.props.children : s),
								Q(e, Array.isArray(b) ? b : [b], t, n, r, o, i, a, l, c),
								(u.base = t.__e),
								(t.__h = null),
								u.__h.length && a.push(u),
								m && (u.__E = u.__ = null),
								(u.__e = !1);
						} else
							null == i && t.__v === n.__v
								? ((t.__k = n.__k), (t.__e = n.__e))
								: (t.__e = (function (e, t, n, r, o, i, a, l) {
										var c,
											s,
											u,
											d = n.props,
											p = t.props,
											f = t.type,
											h = 0;
										if (('svg' === f && (o = !0), null != i))
											for (; h < i.length; h++)
												if (
													(c = i[h]) &&
													'setAttribute' in c == !!f &&
													(f ? c.localName === f : 3 === c.nodeType)
												) {
													(e = c), (i[h] = null);
													break;
												}
										if (null == e) {
											if (null === f) return document.createTextNode(p);
											(e = o
												? document.createElementNS('http://www.w3.org/2000/svg', f)
												: document.createElement(f, p.is && p)),
												(i = null),
												(l = !1);
										}
										if (null === f) d === p || (l && e.data === p) || (e.data = p);
										else {
											if (
												((i = i && x.call(e.childNodes)),
												(s = (d = n.props || S).dangerouslySetInnerHTML),
												(u = p.dangerouslySetInnerHTML),
												!l)
											) {
												if (null != i)
													for (d = {}, h = 0; h < e.attributes.length; h++)
														d[e.attributes[h].name] = e.attributes[h].value;
												(!u && !s) ||
													(u && ((s && u.__html == s.__html) || u.__html === e.innerHTML)) ||
													(e.innerHTML = (u && u.__html) || '');
											}
											if (
												((function (e, t, n, r, o) {
													for (var i in n)
														'children' === i || 'key' === i || i in t || ee(e, i, null, n[i], r);
													for (i in t)
														(o && 'function' != typeof t[i]) ||
															'children' === i ||
															'key' === i ||
															'value' === i ||
															'checked' === i ||
															n[i] === t[i] ||
															ee(e, i, t[i], n[i], r);
												})(e, p, d, o, l),
												u)
											)
												t.__k = [];
											else if (
												((h = t.props.children),
												Q(
													e,
													Array.isArray(h) ? h : [h],
													t,
													n,
													r,
													o && 'foreignObject' !== f,
													i,
													a,
													i ? i[0] : n.__k && J(n, 0),
													l
												),
												null != i)
											)
												for (h = i.length; h--; ) null != i[h] && q(i[h]);
											l ||
												('value' in p &&
													void 0 !== (h = p.value) &&
													(h !== e.value ||
														('progress' === f && !h) ||
														('option' === f && h !== d.value)) &&
													ee(e, 'value', h, d.value, !1),
												'checked' in p &&
													void 0 !== (h = p.checked) &&
													h !== e.checked &&
													ee(e, 'checked', h, d.checked, !1));
										}
										return e;
									})(n.__e, t, n, r, o, i, a, c));
						(s = H.diffed) && s(t);
					} catch (e) {
						(t.__v = null),
							(!c && null == i) || ((t.__e = l), (t.__h = !!c), (i[i.indexOf(l)] = null)),
							H.__e(e, t, n);
					}
				}
			}
			function oe(e, t) {
				H.__c && H.__c(t, e),
					e.some(function (t) {
						try {
							(e = t.__h),
								(t.__h = []),
								e.some(function (e) {
									e.call(t);
								});
						} catch (e) {
							H.__e(e, t.__v);
						}
					});
			}
			function ie(e, t, n) {
				try {
					'function' == typeof e ? e(t) : (e.current = t);
				} catch (e) {
					H.__e(e, n);
				}
			}
			function ae(e, t, n) {
				return this.constructor(e, n);
			}
			function le(e, t, n) {
				var r, o, i;
				H.__ && H.__(e, t),
					(o = (r = 'function' == typeof n) ? null : (n && n.__k) || t.__k),
					(i = []),
					re(
						t,
						(e = ((!r && n) || t).__k = F(K, null, [e])),
						o || S,
						S,
						void 0 !== t.ownerSVGElement,
						!r && n ? [n] : !o && t.firstChild ? x.call(t.childNodes) : null,
						i,
						!r && n ? n : o ? o.__e : t.firstChild,
						r
					),
					oe(i, e);
			}
			function ce(e, r) {
				e = {
					__c: (r = '__cC' + fe++),
					__: e,
					Consumer: function (e, t) {
						return e.children(t);
					},
					Provider: function (e) {
						var n, t;
						return (
							this.getChildContext ||
								((n = []),
								(((t = {})[r] = this).getChildContext = function () {
									return t;
								}),
								(this.shouldComponentUpdate = function (e) {
									this.props.value !== e.value && n.some(m);
								}),
								(this.sub = function (e) {
									n.push(e);
									var t = e.componentWillUnmount;
									e.componentWillUnmount = function () {
										n.splice(n.indexOf(e), 1), t && t.call(e);
									};
								})),
							e.children
						);
					}
				};
				return (e.Provider.__ = e.Consumer.contextType = e);
			}
			(x = _.slice),
				(H = {
					__e: function (e, t, n, r) {
						for (var o, i, a; (t = t.__); )
							if ((o = t.__c) && !o.__)
								try {
									if (
										((i = o.constructor) &&
											null != i.getDerivedStateFromError &&
											(o.setState(i.getDerivedStateFromError(e)), (a = o.__d)),
										null != o.componentDidCatch && (o.componentDidCatch(e, r || {}), (a = o.__d)),
										a)
									)
										return (o.__E = o);
								} catch (t) {
									e = t;
								}
						throw e;
					}
				}),
				(d = 0),
				(Z.prototype.setState = function (e, t) {
					var n =
						null != this.__s && this.__s !== this.state ? this.__s : (this.__s = C({}, this.state));
					(e = 'function' == typeof e ? e(C({}, n), this.props) : e) && C(n, e),
						null != e && this.__v && (t && this.__h.push(t), m(this));
				}),
				(Z.prototype.forceUpdate = function (e) {
					this.__v && ((this.__e = !0), e && this.__h.push(e), m(this));
				}),
				(Z.prototype.render = K);
			var se,
				o,
				ue,
				de,
				pe = [],
				fe = (g.__r = 0),
				he = 0,
				me = [],
				ge = [],
				ve = H.__b,
				ye = H.__r,
				we = H.diffed,
				_e = H.__c,
				be = H.unmount;
			function De(e, t) {
				H.__h && H.__h(o, e, he || t), (he = 0);
				t = o.__H || (o.__H = { __: [], __h: [] });
				return e >= t.__.length && t.__.push({ __V: ge }), t.__[e];
			}
			function z(e) {
				return (he = 1), xe(Te, e);
			}
			function xe(e, t, n) {
				var r = De(se++, 2);
				return (
					(r.t = e),
					r.__c ||
						((r.__ = [
							n ? n(t) : Te(void 0, t),
							function (e) {
								e = r.t(r.__[0], e);
								r.__[0] !== e && ((r.__ = [e, r.__[1]]), r.__c.setState({}));
							}
						]),
						(r.__c = o)),
					r.__
				);
			}
			function B(e, t) {
				var n = De(se++, 3);
				!H.__s && Ne(n.__H, t) && ((n.__ = e), (n.u = t), o.__H.__h.push(n));
			}
			function ke(e, t) {
				var n = De(se++, 4);
				!H.__s && Ne(n.__H, t) && ((n.__ = e), (n.u = t), o.__h.push(n));
			}
			function W(e) {
				return (
					(he = 5),
					I(function () {
						return { current: e };
					}, [])
				);
			}
			function I(e, t) {
				var n = De(se++, 7);
				return Ne(n.__H, t) ? ((n.__V = e()), (n.u = t), (n.__h = e), n.__V) : n.__;
			}
			function N(e, t) {
				return (
					(he = 8),
					I(function () {
						return e;
					}, t)
				);
			}
			function Se(e) {
				var t = o.context[e.__c],
					n = De(se++, 9);
				return (n.c = e), t ? (null == n.__ && ((n.__ = !0), t.sub(o)), t.props.value) : e.__;
			}
			function Ce() {
				for (var t; (t = me.shift()); )
					if (t.__P)
						try {
							t.__H.__h.forEach(Ie), t.__H.__h.forEach(Me), (t.__H.__h = []);
						} catch (e) {
							(t.__H.__h = []), H.__e(e, t.__v);
						}
			}
			(H.__b = function (e) {
				(o = null), ve && ve(e);
			}),
				(H.__r = function (e) {
					ye && ye(e), (se = 0);
					e = (o = e.__c).__H;
					e &&
						(ue === o
							? ((e.__h = []),
								(o.__h = []),
								e.__.forEach(function (e) {
									(e.__V = ge), (e.u = void 0);
								}))
							: (e.__h.forEach(Ie), e.__h.forEach(Me), (e.__h = []))),
						(ue = o);
				}),
				(H.diffed = function (e) {
					we && we(e);
					e = e.__c;
					e &&
						e.__H &&
						(!e.__H.__h.length ||
							(1 !== me.push(e) && de === H.requestAnimationFrame) ||
							(
								(de = H.requestAnimationFrame) ||
								function (e) {
									function t() {
										clearTimeout(r), Ee && cancelAnimationFrame(n), setTimeout(e);
									}
									var n,
										r = setTimeout(t, 100);
									Ee && (n = requestAnimationFrame(t));
								}
							)(Ce),
						e.__H.__.forEach(function (e) {
							e.u && (e.__H = e.u), e.__V !== ge && (e.__ = e.__V), (e.u = void 0), (e.__V = ge);
						})),
						(ue = o = null);
				}),
				(H.__c = function (e, n) {
					n.some(function (t) {
						try {
							t.__h.forEach(Ie),
								(t.__h = t.__h.filter(function (e) {
									return !e.__ || Me(e);
								}));
						} catch (e) {
							n.some(function (e) {
								e.__h && (e.__h = []);
							}),
								(n = []),
								H.__e(e, t.__v);
						}
					}),
						_e && _e(e, n);
				}),
				(H.unmount = function (e) {
					be && be(e);
					var t,
						e = e.__c;
					e &&
						e.__H &&
						(e.__H.__.forEach(function (e) {
							try {
								Ie(e);
							} catch (e) {
								t = e;
							}
						}),
						t) &&
						H.__e(t, e.__v);
				});
			var Ee = 'function' == typeof requestAnimationFrame;
			function Ie(e) {
				var t = o,
					n = e.__c;
				'function' == typeof n && ((e.__c = void 0), n()), (o = t);
			}
			function Me(e) {
				var t = o;
				(e.__c = e.__()), (o = t);
			}
			function Ne(n, e) {
				return (
					!n ||
					n.length !== e.length ||
					e.some(function (e, t) {
						return e !== n[t];
					})
				);
			}
			function Te(e, t) {
				return 'function' == typeof t ? t(e) : t;
			}
			function Oe(e) {
				for (var t = arguments.length, n = Array(1 < t ? t - 1 : 0), r = 1; r < t; r++)
					n[r - 1] = arguments[r];
				throw Error(
					'[Immer] minified error nr: ' +
						e +
						(n.length
							? ' ' +
								n
									.map(function (e) {
										return "'" + e + "'";
									})
									.join(',')
							: '') +
						'. Find the full error at: https://bit.ly/3cXEKWf'
				);
			}
			function Pe(e) {
				return e && e[l];
			}
			function Ae(t) {
				return (
					t &&
					((function () {
						var e;
						if (t && 'object' == typeof t)
							return (
								null === (e = Object.getPrototypeOf(t)) ||
								(e = Object.hasOwnProperty.call(e, 'constructor') && e.constructor) === Object ||
								('function' == typeof e && Function.toString.call(e) === ht)
							);
					})() ||
						Array.isArray(t) ||
						t[ft] ||
						t.constructor[ft] ||
						ze(t) ||
						Be(t))
				);
			}
			function Re(n, r, t) {
				void 0 === t && (t = !1),
					0 === Le(n)
						? (t ? Object.keys : mt)(n).forEach(function (e) {
								(t && 'symbol' == typeof e) || r(e, n[e], n);
							})
						: n.forEach(function (e, t) {
								return r(t, e, n);
							});
			}
			function Le(e) {
				var t = e[l];
				return t ? (3 < t.i ? t.i - 4 : t.i) : Array.isArray(e) ? 1 : ze(e) ? 2 : Be(e) ? 3 : 0;
			}
			function He(e, t) {
				return 2 === Le(e) ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
			}
			function Fe(e, t, n) {
				var r = Le(e);
				2 === r ? e.set(t, n) : 3 === r ? (e.delete(t), e.add(n)) : (e[t] = n);
			}
			function ze(e) {
				return st && e instanceof Map;
			}
			function Be(e) {
				return ut && e instanceof Set;
			}
			function We(e) {
				return e.o || e.t;
			}
			function je(e) {
				if (Array.isArray(e)) return Array.prototype.slice.call(e);
				var t = gt(e);
				delete t[l];
				for (var n = mt(t), r = 0; r < n.length; r++) {
					var o = n[r],
						i = t[o];
					!1 === i.writable && ((i.writable = !0), (i.configurable = !0)),
						(i.get || i.set) &&
							(t[o] = { configurable: !0, writable: !0, enumerable: i.enumerable, value: e[o] });
				}
				return Object.create(Object.getPrototypeOf(e), t);
			}
			function Ge(e, t) {
				return (
					void 0 === t && (t = !1),
					Ye(e) ||
						Pe(e) ||
						!Ae(e) ||
						(1 < Le(e) && (e.set = e.add = e.clear = e.delete = Ue),
						Object.freeze(e),
						t &&
							Re(
								e,
								function (e, t) {
									return Ge(t, !0);
								},
								!0
							)),
					e
				);
			}
			function Ue() {
				Oe(2);
			}
			function Ye(e) {
				return null == e || 'object' != typeof e || Object.isFrozen(e);
			}
			function Ve(e) {
				var t = vt[e];
				return t || Oe(18, e), t;
			}
			function $e(e, t) {
				t && (Ve('Patches'), (e.u = []), (e.s = []), (e.v = t));
			}
			function Xe(e) {
				qe(e), e.p.forEach(Ze), (e.p = null);
			}
			function qe(e) {
				e === ct && (ct = e.l);
			}
			function Ke(e) {
				return (ct = { p: [], l: ct, h: e, m: !0, _: 0 });
			}
			function Ze(e) {
				e = e[l];
				0 === e.i || 1 === e.i ? e.j() : (e.O = !0);
			}
			function Je(e, t) {
				t._ = t.p.length;
				var n = t.p[0],
					r = void 0 !== e && e !== n;
				return (
					t.h.g || Ve('ES5').S(t, e, r),
					r
						? (n[l].P && (Xe(t), Oe(4)),
							Ae(e) && ((e = Qe(t, e)), t.l || tt(t, e)),
							t.u && Ve('Patches').M(n[l].t, e, t.u, t.s))
						: (e = Qe(t, n, [])),
					Xe(t),
					t.u && t.v(t.u, t.s),
					e !== pt ? e : void 0
				);
			}
			function Qe(n, r, o) {
				var i, a;
				return Ye(r)
					? r
					: (i = r[l])
						? i.A !== n
							? r
							: i.P
								? (i.I ||
										((i.I = !0),
										i.A._--,
										(a = 4 === i.i || 5 === i.i ? (i.o = je(i.k)) : i.o),
										Re(3 === i.i ? new Set(a) : a, function (e, t) {
											return et(n, i, a, e, t, o);
										}),
										tt(n, a, !1),
										o && n.u && Ve('Patches').R(i, o, n.u, n.s)),
									i.o)
								: (tt(n, i.t, !0), i.t)
						: (Re(
								r,
								function (e, t) {
									return et(n, i, r, e, t, o);
								},
								!0
							),
							r);
			}
			function et(e, t, n, r, o, i) {
				if (Pe(o)) {
					i = Qe(e, o, i && t && 3 !== t.i && !He(t.D, r) ? i.concat(r) : void 0);
					if ((Fe(n, r, i), !Pe(i))) return;
					e.m = !1;
				}
				!Ae(o) || Ye(o) || (!e.h.F && e._ < 1) || (Qe(e, o), t && t.A.l) || tt(e, o);
			}
			function tt(e, t, n) {
				void 0 === n && (n = !1), e.h.F && e.m && Ge(t, n);
			}
			function nt(e, t) {
				var n = e[l];
				return (n ? We(n) : e)[t];
			}
			function rt(e, t) {
				if (t in e)
					for (var n = Object.getPrototypeOf(e); n; ) {
						var r = Object.getOwnPropertyDescriptor(n, t);
						if (r) return r;
						n = Object.getPrototypeOf(n);
					}
			}
			function ot(e) {
				e.P || ((e.P = !0), e.l && ot(e.l));
			}
			function it(e) {
				e.o || (e.o = je(e.t));
			}
			function at(e, t, n) {
				var r,
					o,
					i = ze(t)
						? Ve('MapSet').N(t, n)
						: Be(t)
							? Ve('MapSet').T(t, n)
							: e.g
								? ((e = t),
									(r = n),
									(i = Array.isArray(e)),
									(r = {
										i: i ? 1 : 0,
										A: r ? r.A : ct,
										P: !1,
										I: !1,
										D: {},
										l: r,
										t: e,
										k: null,
										o: null,
										j: null,
										C: !1
									}),
									(e = r),
									(o = yt),
									i && ((e = [r]), (o = wt)),
									(i = Proxy.revocable(e, o)),
									(e = i.revoke),
									(o = i.proxy),
									(r.k = o),
									(r.j = e),
									o)
								: Ve('ES5').J(t, n);
				return (n ? n.A : ct).p.push(i), i;
			}
			function lt(e, t) {
				switch (t) {
					case 2:
						return new Map(e);
					case 3:
						return Array.from(e);
				}
				return je(e);
			}
			fc(6886), fc(9529);
			var ct,
				e = 'undefined' != typeof Symbol && 'symbol' == typeof Symbol('x'),
				st = 'undefined' != typeof Map,
				ut = 'undefined' != typeof Set,
				dt =
					'undefined' != typeof Proxy &&
					void 0 !== Proxy.revocable &&
					'undefined' != typeof Reflect,
				pt = e ? Symbol.for('immer-nothing') : (((_t = {})['immer-nothing'] = !0), _t),
				ft = e ? Symbol.for('immer-draftable') : '__$immer_draftable',
				l = e ? Symbol.for('immer-state') : '__$immer_state',
				ht = '' + Object.prototype.constructor,
				mt =
					'undefined' != typeof Reflect && Reflect.ownKeys
						? Reflect.ownKeys
						: void 0 !== Object.getOwnPropertySymbols
							? function (e) {
									return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
								}
							: Object.getOwnPropertyNames,
				gt =
					Object.getOwnPropertyDescriptors ||
					function (t) {
						var n = {};
						return (
							mt(t).forEach(function (e) {
								n[e] = Object.getOwnPropertyDescriptor(t, e);
							}),
							n
						);
					},
				vt = {},
				yt = {
					get: function (e, t) {
						var n, r;
						return t === l
							? e
							: He((n = We(e)), t)
								? ((r = n[t]),
									!e.I && Ae(r) && r === nt(e.t, t) ? (it(e), (e.o[t] = at(e.A.h, r, e))) : r)
								: ((r = e),
									(e = rt(n, t))
										? 'value' in e
											? e.value
											: null == (e = e.get)
												? void 0
												: e.call(r.k)
										: void 0);
					},
					has: function (e, t) {
						return t in We(e);
					},
					ownKeys: function (e) {
						return Reflect.ownKeys(We(e));
					},
					set: function (e, t, n) {
						var r = rt(We(e), t);
						if (null != r && r.set) return r.set.call(e.k, n), !0;
						if (!e.P) {
							var r = nt(We(e), t),
								o = null == r ? void 0 : r[l];
							if (o && o.t === n) return (e.o[t] = n), !(e.D[t] = !1);
							if (
								((o = n) === (r = r) ? 0 !== o || 1 / o == 1 / r : o != o && r != r) &&
								(void 0 !== n || He(e.t, t))
							)
								return !0;
							it(e), ot(e);
						}
						return (
							(e.o[t] === n && 'number' != typeof n && (void 0 !== n || t in e.o)) ||
							((e.o[t] = n), (e.D[t] = !0))
						);
					},
					deleteProperty: function (e, t) {
						return (
							void 0 !== nt(e.t, t) || t in e.t ? ((e.D[t] = !1), it(e), ot(e)) : delete e.D[t],
							e.o && delete e.o[t],
							!0
						);
					},
					getOwnPropertyDescriptor: function (e, t) {
						var n = We(e),
							r = Reflect.getOwnPropertyDescriptor(n, t);
						return (
							r && {
								writable: !0,
								configurable: 1 !== e.i || 'length' !== t,
								enumerable: r.enumerable,
								value: n[t]
							}
						);
					},
					defineProperty: function () {
						Oe(11);
					},
					getPrototypeOf: function (e) {
						return Object.getPrototypeOf(e.t);
					},
					setPrototypeOf: function () {
						Oe(12);
					}
				},
				wt = {};
			Re(yt, function (e, t) {
				wt[e] = function () {
					return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
				};
			}),
				(wt.deleteProperty = function (e, t) {
					return wt.set.call(this, e, t, void 0);
				}),
				(wt.set = function (e, t, n) {
					return yt.set.call(this, e[0], t, n, e[0]);
				}),
				((_t = Dt.prototype).createDraft = function (e) {
					Ae(e) || Oe(8),
						Pe(e) &&
							(Pe((t = e)) || Oe(22, t),
							(e = (function o(e) {
								if (!Ae(e)) return e;
								var i,
									a = e[l],
									t = Le(e);
								if (a) {
									if (!a.P && (a.i < 4 || !Ve('ES5').K(a))) return a.t;
									(a.I = !0), (i = lt(e, t)), (a.I = !1);
								} else i = lt(e, t);
								return (
									Re(i, function (e, t) {
										var n, r;
										(a && ((n = a.t), (r = e), (2 === Le(n) ? n.get(r) : n[r]) === t)) ||
											Fe(i, e, o(t));
									}),
									3 === t ? new Set(i) : i
								);
							})(t)));
					var t = Ke(this),
						e = at(this, e, void 0);
					return (e[l].C = !0), qe(t), e;
				}),
				(_t.finishDraft = function (e, t) {
					e = (e && e[l]).A;
					return $e(e, t), Je(void 0, e);
				}),
				(_t.setAutoFreeze = function (e) {
					this.F = e;
				}),
				(_t.setUseProxies = function (e) {
					e && !dt && Oe(20), (this.g = e);
				}),
				(_t.applyPatches = function (e, t) {
					for (var n = t.length - 1; 0 <= n; n--) {
						var r = t[n];
						if (0 === r.path.length && 'replace' === r.op) {
							e = r.value;
							break;
						}
					}
					-1 < n && (t = t.slice(n + 1));
					var o = Ve('Patches').$;
					return Pe(e)
						? o(e, t)
						: this.produce(e, function (e) {
								return o(e, t);
							});
				});
			var _t,
				e = new Dt(),
				t = e.produce,
				s =
					(e.produceWithPatches.bind(e),
					e.setAutoFreeze.bind(e),
					e.setUseProxies.bind(e),
					e.applyPatches.bind(e),
					e.createDraft.bind(e),
					e.finishDraft.bind(e),
					t),
				e = (fc(5940), fc(7386)),
				bt = fc.n(e);
			function Dt(e) {
				var s = this;
				(this.g = dt),
					(this.F = !0),
					(this.produce = function (e, i, t) {
						var a, l, n;
						if ('function' == typeof e && 'function' != typeof i)
							return (
								(a = i),
								(i = e),
								(l = s),
								function (e) {
									var t = this;
									void 0 === e && (e = a);
									for (var n = arguments.length, r = Array(1 < n ? n - 1 : 0), o = 1; o < n; o++)
										r[o - 1] = arguments[o];
									return l.produce(e, function (e) {
										return i.call.apply(i, [t, e].concat(r));
									});
								}
							);
						if (
							('function' != typeof i && Oe(6),
							void 0 !== t && 'function' != typeof t && Oe(7),
							Ae(e))
						) {
							var r = Ke(s),
								o = at(s, e, void 0),
								c = !0;
							try {
								(n = i(o)), (c = !1);
							} finally {
								(c ? Xe : qe)(r);
							}
							return 'undefined' != typeof Promise && n instanceof Promise
								? n.then(
										function (e) {
											return $e(r, t), Je(e, r);
										},
										function (e) {
											throw (Xe(r), e);
										}
									)
								: ($e(r, t), Je(n, r));
						}
						if (!e || 'object' != typeof e)
							return (
								(n = void 0 === (n = i(e)) ? e : n) === pt && (n = void 0),
								s.F && Ge(n, !0),
								t && ((o = []), (c = []), Ve('Patches').M(e, n, o, c), t(o, c)),
								n
							);
						Oe(21, e);
					}),
					(this.produceWithPatches = function (o, e) {
						var n, r;
						return 'function' == typeof o
							? function (e) {
									for (var t = arguments.length, n = Array(1 < t ? t - 1 : 0), r = 1; r < t; r++)
										n[r - 1] = arguments[r];
									return s.produceWithPatches(e, function (e) {
										return o.apply(void 0, [e].concat(n));
									});
								}
							: ((e = s.produce(o, e, function (e, t) {
									(n = e), (r = t);
								})),
								'undefined' != typeof Promise && e instanceof Promise
									? e.then(function (e) {
											return [e, n, r];
										})
									: [e, n, r]);
					}),
					'boolean' == typeof (null == e ? void 0 : e.useProxies) &&
						this.setUseProxies(e.useProxies),
					'boolean' == typeof (null == e ? void 0 : e.autoFreeze) &&
						this.setAutoFreeze(e.autoFreeze);
			}
			const xt = 24,
				kt = 72,
				St = {
					color: '#000',
					backgroundColor: '#a1b56c',
					dragBackgroundColor: '#a1b56c',
					borderColor: '#000'
				};
			var t = fc(758),
				w = fc.n(t);
			const Ct = 'toastui-calendar-';
			function O() {
				const n = [];
				for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
				return (
					t.forEach((t) => {
						t &&
							(w()(t)
								? n.push(t)
								: Object.keys(t).forEach((e) => {
										t[e] && n.push(e);
									}));
					}),
					n.map((e) => ''.concat(Ct).concat(e)).join(' ')
				);
			}
			function P(e) {
				return ''.concat(e, '%');
			}
			function Et(e) {
				return ''.concat(e, 'px');
			}
			function It(e) {
				var t = e.match(/(\d+)%/),
					e = e.match(/(-?)\s?(\d+)px/);
				return {
					percent: t ? parseInt(t[1], 10) : 0,
					px: e ? parseInt(''.concat(e[1]).concat(e[2]), 10) : 0
				};
			}
			function Mt(e, r) {
				const o = e.model.getColors();
				return Object.keys(St).reduce((e, t) => {
					var n;
					return (e[t] = null != (n = null != (n = o[t]) ? n : r[t]) ? n : St[t]), e;
				}, {});
			}
			fc(1372);
			const Nt =
				/^(-?(?:[1-9][0-9]*)?[0-9]{4})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9])T(2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9])(\.)?([0-9]+)?([+-]\d\d(?::?\d\d)?|\s*Z)?$/;
			function Tt() {
				throw new Error('This operation is not supported.');
			}
			class Ot {
				constructor() {
					for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
					var [r] = t;
					r instanceof Date
						? (this.d = new Date(r.getTime()))
						: w()(r) &&
							1 === t.length &&
							(this.d = (function (e) {
								var t = (function (e) {
									var t = Nt.exec(e);
									if (t) {
										const [, e, n, r, o, i, a, , l, c] = t;
										return {
											y: Number(e),
											M: Number(n) - 1,
											d: Number(r),
											h: Number(o),
											m: Number(i),
											s: Number(a),
											ms: Number(l) || 0,
											zoneInfo: c
										};
									}
									return null;
								})(e);
								if (!t || t.zoneInfo) return null;
								{
									const { y: e, M: n, d: r, h: o, m: i, s: a, ms: l } = t;
									return new Date(e, n, r, o, i, a, l);
								}
							})(r)),
						this.d || (this.d = new Date(...t));
				}
				setTimezoneOffset() {
					Tt();
				}
				setTimezoneName() {
					Tt();
				}
				clone() {
					return new Ot(this.d);
				}
				toDate() {
					return new Date(this.d.getTime());
				}
				toString() {
					return this.d.toString();
				}
			}
			[
				'getTime',
				'getTimezoneOffset',
				'getFullYear',
				'getMonth',
				'getDate',
				'getHours',
				'getMinutes',
				'getSeconds',
				'getMilliseconds',
				'getDay'
			].forEach((e) => {
				Ot.prototype[e] = function () {
					return this.d[e](...arguments);
				};
			}),
				[
					'setTime',
					'setFullYear',
					'setMonth',
					'setDate',
					'setHours',
					'setMinutes',
					'setSeconds',
					'setMilliseconds'
				].forEach((e) => {
					Ot.prototype[e] = function () {
						return this.d[e](...arguments);
					};
				});
			class Pt extends Ot {
				clone() {
					return new Pt(this.d);
				}
				getTimezoneOffset() {
					return 0;
				}
			}
			['FullYear', 'Month', 'Date', 'Hours', 'Minutes', 'Seconds', 'Milliseconds', 'Day'].forEach(
				(e) => {
					var t = 'get'.concat(e);
					Pt.prototype[t] = function () {
						return this.d['getUTC'.concat(e)](...arguments);
					};
				}
			),
				['FullYear', 'Month', 'Date', 'Hours', 'Minutes', 'Seconds', 'Milliseconds'].forEach(
					(e) => {
						var t = 'set'.concat(e);
						Pt.prototype[t] = function () {
							return this.d['setUTC'.concat(e)](...arguments);
						};
					}
				);
			const At = '@toast-ui/calendar: ';
			class Rt extends Error {
				constructor(e) {
					super(''.concat(At).concat('Invalid IANA Timezone Name', ' - ').concat(e)),
						(this.name = 'InvalidTimezoneNameError');
				}
			}
			class Lt extends Error {
				constructor(e) {
					super(''.concat(At).concat('Invalid DateTime Format', ' - ').concat(e)),
						(this.name = 'InvalidDateTimeFormatError');
				}
			}
			class Ht extends Error {
				constructor(e) {
					super(''.concat(At).concat('Invalid View Type', ' - ').concat(e)),
						(this.name = 'InvalidViewTypeError');
				}
			}
			var e = fc(3929),
				Ft = fc.n(e),
				t = fc(1326),
				zt = fc.n(t),
				e = fc(321),
				Bt = fc.n(e),
				t = fc(5758),
				Wt = fc.n(t);
			function A(e) {
				return Ft()(e) || null === e;
			}
			function j(e) {
				return !A(e);
			}
			function jt(e) {
				return 'function' == typeof e;
			}
			let Gt = Ot;
			function Ut() {
				for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
				return new Gt(...t);
			}
			function Yt(e, t) {
				t = 1 < arguments.length && void 0 !== t ? t : new E();
				if (
					!jt(
						null == (n = Intl) || null == (n = n.DateTimeFormat) || null == (n = n.prototype)
							? void 0
							: n.formatToParts
					)
				)
					return (
						(function (e) {
							for (var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), r = 1; r < t; r++)
								n[r - 1] = arguments[r];
							console.warn(''.concat(At).concat(e), ...n);
						})(
							'Intl.DateTimeFormat is not fully supported. So It will return the local timezone offset only.\nYou can use a polyfill to fix this issue.'
						),
						-t.toDate().getTimezoneOffset()
					);
				qt(e);
				var n = (function (e) {
					var [e, t, n, r, o, i] = e,
						t = t - 1;
					return new Date(Date.UTC(e, t, n, r % 24, o, i));
				})(
					(function (e, t) {
						t = (function (e) {
							var t;
							return (
								$t[e] ||
								((t = new Intl.DateTimeFormat('en-US', {
									timeZone: e,
									hourCycle: 'h23',
									hour12: !1,
									year: 'numeric',
									month: 'numeric',
									day: 'numeric',
									hour: 'numeric',
									minute: 'numeric',
									second: 'numeric'
								})),
								($t[e] = t))
							);
						})(t);
						return t.formatToParts(e.toDate()).reduce((e, t) => {
							var n = Kt[t.type];
							return j(n) && (e[n] = parseInt(t.value, 10)), e;
						}, []);
					})(t, e)
				);
				return Math.round((n.getTime() - t.getTime()) / 60 / 1e3);
			}
			function Vt(e, t) {
				t && qt(t);
				var n = new E(e.getFullYear(), 0, 1),
					r = new E(e.getFullYear(), 6, 1);
				return t
					? Math.max(-Yt(t, n), -Yt(t, r)) !== -Yt(t, e)
					: Math.max(n.getTimezoneOffset(), r.getTimezoneOffset()) !==
							e.toDate().getTimezoneOffset();
			}
			const $t = {},
				Xt = {};
			function qt(e) {
				if (!Xt[e])
					try {
						Intl.DateTimeFormat('en-US', { timeZone: e }), (Xt[e] = !0);
					} catch {
						throw new Rt(e);
					}
			}
			const Kt = { year: 0, month: 1, day: 2, hour: 3, minute: 4, second: 5 };
			function Zt(e) {
				return (-new Date().getTimezoneOffset() - e) * fn;
			}
			class E {
				constructor() {
					var e;
					(e = 'tzOffset') in this
						? Object.defineProperty(this, e, {
								value: null,
								enumerable: !0,
								configurable: !0,
								writable: !0
							})
						: (this[e] = null);
					for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
					n[0] instanceof E ? (this.d = Ut(n[0].getTime())) : (this.d = Ut(...n));
				}
				toString() {
					return this.d.toString();
				}
				addFullYear(e) {
					return this.setFullYear(this.getFullYear() + e), this;
				}
				addMonth(e) {
					return this.setMonth(this.getMonth() + e), this;
				}
				addDate(e) {
					return this.setDate(this.getDate() + e), this;
				}
				addHours(e) {
					return this.setHours(this.getHours() + e), this;
				}
				addMinutes(e) {
					return this.setMinutes(this.getMinutes() + e), this;
				}
				addSeconds(e) {
					return this.setSeconds(this.getSeconds() + e), this;
				}
				addMilliseconds(e) {
					return this.setMilliseconds(this.getMilliseconds() + e), this;
				}
				setWithRaw(e, t, n, r, o, i, a) {
					return this.setFullYear(e, t, n), this.setHours(r, o, i, a), this;
				}
				toDate() {
					return this.d.toDate();
				}
				valueOf() {
					return this.getTime();
				}
				getTimezoneOffset() {
					var e;
					return null != (e = this.tzOffset) ? e : this.d.getTimezoneOffset();
				}
				getTime() {
					return this.d.getTime();
				}
				getFullYear() {
					return this.d.getFullYear();
				}
				getMonth() {
					return this.d.getMonth();
				}
				getDate() {
					return this.d.getDate();
				}
				getHours() {
					return this.d.getHours();
				}
				getMinutes() {
					return this.d.getMinutes();
				}
				getSeconds() {
					return this.d.getSeconds();
				}
				getMilliseconds() {
					return this.d.getMilliseconds();
				}
				getDay() {
					return this.d.getDay();
				}
				setTime(e) {
					return this.d.setTime(e);
				}
				setFullYear(e) {
					var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : this.getMonth(),
						n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : this.getDate();
					return this.d.setFullYear(e, t, n);
				}
				setMonth(e) {
					var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : this.getDate();
					return this.d.setMonth(e, t);
				}
				setDate(e) {
					return this.d.setDate(e);
				}
				setHours(e) {
					var t =
							1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : this.getMinutes(),
						n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : this.getSeconds(),
						r =
							3 < arguments.length && void 0 !== arguments[3]
								? arguments[3]
								: this.getMilliseconds();
					return this.d.setHours(e, t, n, r);
				}
				setMinutes(e) {
					var t =
							1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : this.getSeconds(),
						n =
							2 < arguments.length && void 0 !== arguments[2]
								? arguments[2]
								: this.getMilliseconds();
					return this.d.setMinutes(e, t, n);
				}
				setSeconds(e) {
					var t =
						1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : this.getMilliseconds();
					return this.d.setSeconds(e, t);
				}
				setMilliseconds(e) {
					return this.d.setMilliseconds(e);
				}
				tz(e) {
					var t;
					return 'Local' === e
						? new E(this.getTime())
						: ((e = w()(e) ? Yt(e, this) : e),
							((t = new E(this.getTime() - Zt(e))).tzOffset = e),
							t);
				}
				local(e) {
					return j(e)
						? ((e = w()(e) ? Yt(e, this) : e), new E(this.getTime() + Zt(e)))
						: new E(this.getTime() + (j(this.tzOffset) ? Zt(this.tzOffset) : 0));
				}
			}
			function Jt(n, e) {
				let r = 1 < arguments.length && void 0 !== e ? e : {};
				return (
					Wt()(r) &&
						Object.keys(r).forEach((e) => {
							var t = e;
							Array.isArray(r[e]) || !Wt()(n[t]) || !Wt()(r[e]) || r[e] instanceof E
								? (n[t] = r[e])
								: (n[t] = Jt(n[t], r[e]));
						}),
					n
				);
			}
			function n(e, t, n) {
				t in e
					? Object.defineProperty(e, t, {
							value: n,
							enumerable: !0,
							configurable: !0,
							writable: !0
						})
					: (e[t] = n);
			}
			const Qt = [
				'top',
				'left',
				'width',
				'height',
				'exceedLeft',
				'exceedRight',
				'croppedStart',
				'croppedEnd',
				'goingDurationHeight',
				'modelDurationHeight',
				'comingDurationHeight',
				'duplicateEvents',
				'duplicateEventIndex',
				'duplicateStarts',
				'duplicateEnds',
				'duplicateLeft',
				'duplicateWidth',
				'collapse',
				'isMain'
			];
			class en {
				constructor(e) {
					n(this, 'top', 0),
						n(this, 'left', 0),
						n(this, 'width', 0),
						n(this, 'height', 0),
						n(this, 'exceedLeft', !1),
						n(this, 'exceedRight', !1),
						n(this, 'croppedStart', !1),
						n(this, 'croppedEnd', !1),
						n(this, 'goingDurationHeight', 0),
						n(this, 'modelDurationHeight', 100),
						n(this, 'comingDurationHeight', 0),
						n(this, 'duplicateEvents', []),
						n(this, 'duplicateEventIndex', -1),
						n(this, 'duplicateLeft', ''),
						n(this, 'duplicateWidth', ''),
						n(this, 'collapse', !1),
						n(this, 'isMain', !1),
						(this.model = e);
				}
				getUIProps() {
					return (function (n) {
						for (var e = arguments.length, t = new Array(1 < e ? e - 1 : 0), r = 1; r < e; r++)
							t[r - 1] = arguments[r];
						return t.reduce((e, t) => (n.hasOwnProperty(t) && (e[t] = n[t]), e), {});
					})(this, ...Qt);
				}
				setUIProps(e) {
					Object.assign(this, e);
				}
				getStarts() {
					return this.renderStarts || this.model.getStarts();
				}
				getEnds() {
					return this.renderEnds || this.model.getEnds();
				}
				cid() {
					return this.model.cid();
				}
				valueOf() {
					return this.model;
				}
				duration() {
					return this.model.duration();
				}
				collidesWith(e) {
					var t = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];
					const n = [];
					[this, e].forEach((e) => {
						e instanceof en && 0 < e.duplicateEvents.length
							? n.push({
									start: e.duplicateStarts,
									end: e.duplicateEnds,
									goingDuration: 0,
									comingDuration: 0
								})
							: n.push({
									start: e.getStarts(),
									end: e.getEnds(),
									goingDuration: e.valueOf().goingDuration,
									comingDuration: e.valueOf().comingDuration
								});
					});
					var [e, r] = n;
					return Pn({
						start: e.start.getTime(),
						end: e.end.getTime(),
						targetStart: r.start.getTime(),
						targetEnd: r.end.getTime(),
						goingDuration: e.goingDuration,
						comingDuration: e.comingDuration,
						targetGoingDuration: r.goingDuration,
						targetComingDuration: r.comingDuration,
						usingTravelTime: t
					});
				}
				clone() {
					var e = this.getUIProps(),
						t = new en(this.model);
					return (
						t.setUIProps(e),
						this.renderStarts && (t.renderStarts = new E(this.renderStarts)),
						this.renderEnds && (t.renderEnds = new E(this.renderEnds)),
						t
					);
				}
			}
			var tn = {
				event: {
					asc: function (e, t) {
						const n = e instanceof en ? e.model : e,
							r = t instanceof en ? t.model : t,
							o =
								(i = n.isAllday || n.hasMultiDates) !== (r.isAllday || r.hasMultiDates)
									? i
										? -1
										: 1
									: 0;
						var i;
						return (
							o ||
							wn(e.getStarts(), t.getStarts()) ||
							((i = e.duration()) < (e = t.duration()) ? 1 : e < i ? -1 : n.cid() - r.cid())
						);
					}
				},
				num: {
					asc: function (e, t) {
						return Number(e) - Number(t);
					}
				}
			};
			function nn(e) {
				return e[e.length - 1];
			}
			function rn(t, n) {
				for (let e = t.length - 1; 0 <= e; --e) if (n(t[e])) return e;
				return -1;
			}
			function on(e, t) {
				return 0 < e ? Array.from({ length: e }, () => (Array.isArray(t) ? t.slice() : t)) : [];
			}
			let an;
			((e = an = an || {})[(e.SUN = 0)] = 'SUN'),
				(e[(e.MON = 1)] = 'MON'),
				(e[(e.TUE = 2)] = 'TUE'),
				(e[(e.WED = 3)] = 'WED'),
				(e[(e.THU = 4)] = 'THU'),
				(e[(e.FRI = 5)] = 'FRI'),
				(e[(e.SAT = 6)] = 'SAT');
			const ln = /^(\d{4}[-|/]*\d{2}[-|/]*\d{2})\s?(\d{2}:\d{2}:\d{2})?$/,
				cn = {},
				sn = [24, 60, 60, 1e3];
			function i(e, t) {
				let n = '',
					r = 0;
				if (String(e).length > t) return String(e);
				for (; r < t - 1; r += 1) n += '0';
				return (n + e).slice(-1 * t);
			}
			function un(e) {
				let t = e.getHours();
				return 12 < (t = 0 === t ? 12 : t) && (t %= 12), t;
			}
			const dn = {
					YYYYMMDD: (e) => [e.getFullYear(), i(e.getMonth() + 1, 2), i(e.getDate(), 2)].join(''),
					YYYY: (e) => String(e.getFullYear()),
					MM: (e) => i(e.getMonth() + 1, 2),
					DD: (e) => i(e.getDate(), 2),
					'HH:mm': function (e) {
						var t = e.getHours(),
							e = e.getMinutes();
						return ''.concat(i(t, 2), ':').concat(i(e, 2));
					},
					'hh:mm': function (e) {
						var t = un(e),
							e = e.getMinutes();
						return ''.concat(i(t, 2), ':').concat(i(e, 2));
					},
					hh(e) {
						e = un(e);
						return String(e);
					},
					tt: (e) => (e.getHours() < 12 ? 'am' : 'pm')
				},
				pn = 864e5,
				fn = 6e4,
				hn = 20 * fn,
				mn = 18e5;
			function f(n, e) {
				let r = e;
				return (
					Object.entries(dn).forEach((e) => {
						var [e, t] = e;
						r = r.replace(e, t(n));
					}),
					r
				);
			}
			function gn(e, t) {
				var n,
					r = cn,
					o = e + t;
				return (
					r[o] ||
					((t = t),
					(t =
						(e = e) in (n = { date: 0, hour: 1, minute: 2, second: 3 }) && !isNaN(t)
							? [t].concat(sn.slice(n[e])).reduce((e, t) => e * t)
							: 0)
						? ((r[o] = t), r[o])
						: 0)
				);
			}
			function M(e) {
				e = e ? new E(e) : new E();
				return e.setHours(0, 0, 0, 0), e;
			}
			function vn(e, t, n) {
				var r = e.getTime(),
					o = t.getTime(),
					i = new E(e),
					a = [];
				let l = r;
				for (; l <= o && o >= i.getTime(); ) a.push(new E(i)), (l += n), i.addMilliseconds(n);
				return a;
			}
			function yn(e) {
				return new E(e);
			}
			function wn(e, t) {
				(e = e.getTime()), (t = t.getTime());
				return e < t ? -1 : t < e ? 1 : 0;
			}
			function _n(e, t) {
				return (
					(o = r = t),
					(n = e).getFullYear() === o.getFullYear() &&
						n.getMonth() === r.getMonth() &&
						e.getDate() === t.getDate()
				);
				var n, r, o;
			}
			function bn(e, t) {
				return 1 === wn(e, t) ? e : t;
			}
			function Dn(e, t) {
				return -1 === wn(e, t) ? e : t;
			}
			function xn(e, t) {
				let n = 1 < arguments.length && void 0 !== t ? t : -1;
				t = e.match(ln);
				let r, o, i;
				if (!t) throw new Lt(e);
				if (8 < e.length) {
					r = ~e.indexOf('/') ? '/' : '-';
					const n = t.splice(1);
					(o = n[0].split(r)), (i = n[1] ? n[1].split(':') : [0, 0, 0]);
				} else {
					const [e] = t;
					(o = [e.substr(0, 4), e.substr(4, 2), e.substr(6, 2)]), (i = [0, 0, 0]);
				}
				return new E().setWithRaw(
					Number(o[0]),
					Number(o[1]) + n,
					Number(o[2]),
					Number(i[0]),
					Number(i[1]),
					Number(i[2]),
					0
				);
			}
			function T(e) {
				e = e ? new E(e) : new E();
				return e.setHours(23, 59, 59, 999), e;
			}
			function kn(e) {
				return e === an.SUN || e === an.SAT;
			}
			function Sn(e) {
				return e === an.SUN;
			}
			function Cn(e) {
				return e === an.SAT;
			}
			function En(e) {
				e = new E(e);
				return e.setDate(1), e.setHours(0, 0, 0, 0), e;
			}
			function In(n, r, e, t) {
				const o = 100 / n,
					i = 5 < n ? 100 / (n - 1) : o;
				let a = 0;
				e = bt()(e, 7).concat(bt()(n)).slice(0, 7);
				r = !t && r;
				const l = e.map((e) => {
						let t = r ? i : o;
						e = { width: (t = 5 < n && r && kn(e) ? i / 2 : t), left: a };
						return (a += t), e;
					}),
					c = l['length'],
					s = on(c, on(c, 0));
				return (
					l.forEach((e, n) => {
						var r = e['width'];
						for (let t = 0; t <= n; t += 1) for (let e = n; e < c; e += 1) s[t][e] += r;
					}),
					(s[0][c - 1] = 100),
					{ rowStyleInfo: l, cellWidthMap: s.map((e) => e.map(P)) }
				);
			}
			function Mn(e, t) {
				var n = yn(e);
				return n.setMilliseconds(e.getMilliseconds() + t), n;
			}
			function R(e, t) {
				var n = yn(e);
				return n.setMinutes(e.getMinutes() + t), n;
			}
			function Nn(e, t) {
				e = yn(e);
				return e.setHours(...t.split(':').map(Number)), e;
			}
			function Tn(e, t) {
				var n = yn(e);
				return n.setDate(e.getDate() + t), n;
			}
			function On(e, t) {
				(e = new E(e.getFullYear(), e.getMonth(), e.getDate()).getTime()),
					(t = new E(t.getFullYear(), t.getMonth(), t.getDate()).getTime());
				return Math.round((e - t) / pn);
			}
			function Pn(e) {
				let {
					start: t,
					end: n,
					targetStart: r,
					targetEnd: o,
					goingDuration: i,
					comingDuration: a,
					targetGoingDuration: l,
					targetComingDuration: c,
					usingTravelTime: s
				} = e;
				return (
					Math.abs(n - t) < hn && (n += hn),
					Math.abs(n - t) < hn && (n += hn),
					s &&
						((t -= gn('minute', i)),
						(n += gn('minute', a)),
						(r -= gn('minute', l)),
						(o += gn('minute', c))),
					(e = t),
					(u = n),
					(d = r),
					(p = o),
					(e < d && d < u) || (e < p && p < u) || (d <= e && u <= p)
				);
				var u, d, p;
			}
			const An = (function () {
				const e = (function () {
					let e = 0;
					return { next: () => (e += 1) };
				})();
				return () => e.next();
			})();
			function Rn(e) {
				return e.__fe_id || (e.__fe_id = An()), e.__fe_id;
			}
			function r(e, t, n) {
				t in e
					? Object.defineProperty(e, t, {
							value: n,
							enumerable: !0,
							configurable: !0,
							writable: !0
						})
					: (e[t] = n);
			}
			class Ln {
				constructor() {
					var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
					r(this, 'id', ''),
						r(this, 'calendarId', ''),
						r(this, 'title', ''),
						r(this, 'body', ''),
						r(this, 'isAllday', !1),
						r(this, 'start', new E()),
						r(this, 'end', new E()),
						r(this, 'goingDuration', 0),
						r(this, 'comingDuration', 0),
						r(this, 'location', ''),
						r(this, 'attendees', []),
						r(this, 'category', 'time'),
						r(this, 'dueDateClass', ''),
						r(this, 'recurrenceRule', ''),
						r(this, 'state', 'Busy'),
						r(this, 'isVisible', !0),
						r(this, 'isPending', !1),
						r(this, 'isFocused', !1),
						r(this, 'isReadOnly', !1),
						r(this, 'isPrivate', !1),
						r(this, 'customStyle', {}),
						r(this, 'raw', null),
						r(this, 'hasMultiDates', !1),
						Rn(this),
						this.init(e);
				}
				init() {
					var {
						id: e = '',
						calendarId: t = '',
						title: n = '',
						body: r = '',
						isAllday: o = !1,
						start: i = new E(),
						end: a = new E(),
						goingDuration: l = 0,
						comingDuration: c = 0,
						location: s = '',
						attendees: u = [],
						category: d = 'time',
						dueDateClass: p = '',
						recurrenceRule: f = '',
						state: h = 'Busy',
						isVisible: m = !0,
						isPending: g = !1,
						isFocused: v = !1,
						isReadOnly: y = !1,
						isPrivate: w = !1,
						color: _,
						backgroundColor: b,
						dragBackgroundColor: D,
						borderColor: x,
						customStyle: k = {},
						raw: S = null
					} = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
					(this.id = e),
						(this.calendarId = t),
						(this.title = n),
						(this.body = r),
						(this.isAllday = 'allday' === d || o),
						(this.goingDuration = l),
						(this.comingDuration = c),
						(this.location = s),
						(this.attendees = u),
						(this.category = d),
						(this.dueDateClass = p),
						(this.recurrenceRule = f),
						(this.state = h),
						(this.isVisible = m),
						(this.isPending = g),
						(this.isFocused = v),
						(this.isReadOnly = y),
						(this.isPrivate = w),
						(this.color = _),
						(this.backgroundColor = b),
						(this.dragBackgroundColor = D),
						(this.borderColor = x),
						(this.customStyle = k),
						(this.raw = S),
						this.isAllday ? this.setAlldayPeriod(i, a) : this.setTimePeriod(i, a),
						('milestone' !== d && 'task' !== d) || (this.start = new E(this.end));
				}
				setAlldayPeriod(e, t) {
					(e = w()(e) ? xn(e.substring(0, 10)) : new E(e || Date.now())),
						(t = w()(t) ? xn(t.substring(0, 10)) : new E(t || this.start));
					(this.start = e),
						this.start.setHours(0, 0, 0),
						(this.end = t || new E(this.start)),
						this.end.setHours(23, 59, 59);
				}
				setTimePeriod(e, t) {
					(this.start = new E(e || Date.now())),
						(this.end = new E(t || this.start)),
						t || this.end.setMinutes(this.end.getMinutes() + 30),
						(this.hasMultiDates = this.end.getTime() - this.start.getTime() > pn);
				}
				getStarts() {
					return this.start;
				}
				getEnds() {
					return this.end;
				}
				cid() {
					return Rn(this);
				}
				equals(e) {
					return (
						this.id === e.id &&
						this.title === e.title &&
						this.body === e.body &&
						this.isAllday === e.isAllday &&
						0 === wn(this.getStarts(), e.getStarts()) &&
						0 === wn(this.getEnds(), e.getEnds()) &&
						this.color === e.color &&
						this.backgroundColor === e.backgroundColor &&
						this.dragBackgroundColor === e.dragBackgroundColor &&
						this.borderColor === e.borderColor
					);
				}
				duration() {
					var e = Number(this.getStarts()),
						t = Number(this.getEnds());
					return this.isAllday ? Number(T(t)) - Number(M(e)) : t - e;
				}
				valueOf() {
					return this;
				}
				collidesWith(e) {
					var t = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];
					return (
						(e = e instanceof en ? e.model : e),
						Pn({
							start: Number(this.getStarts()),
							end: Number(this.getEnds()),
							targetStart: Number(e.getStarts()),
							targetEnd: Number(e.getEnds()),
							goingDuration: this.goingDuration,
							comingDuration: this.comingDuration,
							targetGoingDuration: e.goingDuration,
							targetComingDuration: e.comingDuration,
							usingTravelTime: t
						})
					);
				}
				toEventObject() {
					return {
						id: this.id,
						calendarId: this.calendarId,
						__cid: this.cid(),
						title: this.title,
						body: this.body,
						isAllday: this.isAllday,
						start: this.start,
						end: this.end,
						goingDuration: this.goingDuration,
						comingDuration: this.comingDuration,
						location: this.location,
						attendees: this.attendees,
						category: this.category,
						dueDateClass: this.dueDateClass,
						recurrenceRule: this.recurrenceRule,
						state: this.state,
						isVisible: this.isVisible,
						isPending: this.isPending,
						isFocused: this.isFocused,
						isReadOnly: this.isReadOnly,
						isPrivate: this.isPrivate,
						color: this.color,
						backgroundColor: this.backgroundColor,
						dragBackgroundColor: this.dragBackgroundColor,
						borderColor: this.borderColor,
						customStyle: this.customStyle,
						raw: this.raw
					};
				}
				getColors() {
					return {
						color: this.color,
						backgroundColor: this.backgroundColor,
						dragBackgroundColor: this.dragBackgroundColor,
						borderColor: this.borderColor
					};
				}
			}
			function Hn(e) {
				var e = e['model'],
					{ category: e, isAllday: t, hasMultiDates: n } = e;
				return 'time' === e && !t && !n;
			}
			r(Ln, 'schema', { required: ['title'], dateRange: ['start', 'end'] });
			class Fn {
				constructor(e) {
					var t = 'internalMap',
						n = new Map();
					t in this
						? Object.defineProperty(this, t, {
								value: n,
								enumerable: !0,
								configurable: !0,
								writable: !0
							})
						: (this[t] = n),
						jt(e) && (this.getItemID = e);
				}
				static and() {
					for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
					const r = n['length'];
					return (t) => {
						for (let e = 0; e < r; e += 1) if (!n[e].call(null, t)) return !1;
						return !0;
					};
				}
				static or() {
					for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++) r[t] = arguments[t];
					const o = r['length'];
					return o
						? (t) => {
								let n = r[0].call(null, t);
								for (let e = 1; e < o; e += 1) n = n || r[e].call(null, t);
								return n;
							}
						: () => !1;
				}
				getItemID(e) {
					return null != (e = null == e ? void 0 : e._id) ? e : '';
				}
				getFirstItem() {
					return this.internalMap.values().next().value;
				}
				add() {
					for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
					return (
						t.forEach((e) => {
							var t = this.getItemID(e);
							this.internalMap.set(t, e);
						}),
						this
					);
				}
				remove() {
					const t = [];
					for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
					return (
						n.forEach((e) => {
							e = w()(e) || Bt()(e) ? e : this.getItemID(e);
							this.internalMap.has(e) &&
								(t.push(this.internalMap.get(e)), this.internalMap.delete(e));
						}),
						1 === t.length ? t[0] : t
					);
				}
				has(e) {
					e = w()(e) || Bt()(e) ? e : this.getItemID(e);
					return this.internalMap.has(e);
				}
				get(e) {
					var e = w()(e) || Bt()(e) ? e : this.getItemID(e);
					return null != (e = this.internalMap.get(e)) ? e : null;
				}
				doWhenHas(e, t) {
					e = this.internalMap.get(e);
					A(e) || t(e);
				}
				filter(t) {
					const n = new Fn();
					return (
						this.hasOwnProperty('getItemID') && (n.getItemID = this.getItemID),
						this.internalMap.forEach((e) => {
							!0 === t(e) && n.add(e);
						}),
						n
					);
				}
				groupBy(r) {
					const o = {};
					return (
						this.internalMap.forEach((e) => {
							var t;
							let n = jt(r) ? r(e) : e[r];
							jt(n) && (n = n.call(e)),
								null == o[(t = n)] && (o[t] = new Fn(this.getItemID)),
								o[n].add(e);
						}),
						o
					);
				}
				find(e) {
					let t = null;
					var n = this.internalMap.values();
					let r = n.next();
					for (; !1 === r.done; ) {
						if (e(r.value)) {
							t = r.value;
							break;
						}
						r = n.next();
					}
					return t;
				}
				sort(e) {
					return this.toArray().sort(e);
				}
				each(e) {
					var t = this.internalMap.entries();
					let n = t.next();
					for (; !1 === n.done; ) {
						var [r, o] = n.value;
						if (!1 === e(o, r)) break;
						n = t.next();
					}
				}
				clear() {
					this.internalMap.clear();
				}
				toArray() {
					return Array.from(this.internalMap.values());
				}
				get size() {
					return this.internalMap.size;
				}
			}
			function zn() {
				var e = new Fn((e) => e.cid());
				return arguments.length && e.add(...arguments), e;
			}
			function Bn(e, t) {
				return vn(M(e), T(t), pn);
			}
			function Wn(e) {
				var t,
					e = e['model'];
				return (t = e).isAllday || ('time' === t.category && Number(t.end) - Number(t.start) > pn)
					? 'allday'
					: e.category;
			}
			function jn(t, n) {
				Bn(n.getStarts(), n.getEnds()).forEach((e) => {
					e = f(e, 'YYYYMMDD');
					(t[e] = t[e] || []).push(n.cid());
				});
			}
			function Gn(e, t) {
				const n = t.cid();
				Object.values(e).forEach((e) => {
					var t = e.indexOf(n);
					~t && e.splice(t, 1);
				});
			}
			function Un(l) {
				return {
					createEvents: (t) =>
						l(
							s((e) => {
								!(function (n, e) {
									(1 < arguments.length && void 0 !== e ? e : []).map((e) => {
										return (
											(e = e), (t = t = n), (e = new Ln(e)), t.events.add(e), jn(t.idsOfDay, e), e
										);
										var t;
									});
								})(e.calendar, t);
							})
						),
					updateEvent: (e) => {
						let { event: i, eventData: a } = e;
						return l(
							s((e) => {
								var t, n, r, o;
								(e = e.calendar),
									(t = i.id),
									(n = i.calendarId),
									(r = a),
									(o = e.idsOfDay),
									(e = e.events.find((e) => e.id === t && e.calendarId === n)) &&
										(e.init({ ...e, ...r }), Gn(o, e), jn(o, e));
							})
						);
					},
					deleteEvent: (n) =>
						l(
							s((e) => {
								var t;
								(e = e.calendar), (t = n), Gn(e.idsOfDay, t), e.events.remove(t);
							})
						),
					clearEvents: () =>
						l(
							s((e) => {
								((e = e.calendar).idsOfDay = {}), e.events.clear();
							})
						),
					setCalendars: (t) =>
						l(
							s((e) => {
								e.calendar.calendars = t;
							})
						),
					setCalendarColor: (r, o) =>
						l(
							s((e) => {
								var t = e.calendar.calendars.map((e) => (e.id === r ? { ...e, ...o } : e)),
									n = zn(
										...e.calendar.events.toArray().map((e) => {
											var t;
											return (
												e.calendarId === r &&
													((e.color = null != (t = o.color) ? t : e.color),
													(e.backgroundColor =
														null != (t = o.backgroundColor) ? t : e.backgroundColor),
													(e.borderColor = null != (t = o.borderColor) ? t : e.borderColor),
													(e.dragBackgroundColor =
														null != (t = o.dragBackgroundColor) ? t : e.dragBackgroundColor)),
												e
											);
										})
									);
								(e.calendar.calendars = t), (e.calendar.events = n);
							})
						),
					setCalendarVisibility: (n, r) =>
						l(
							s((e) => {
								var t = e.calendar.events.toArray();
								e.calendar.events = zn(
									...t.map((e) => (n.includes(e.calendarId) && (e.isVisible = r), e))
								);
							})
						)
				};
			}
			let G;
			function Yn() {
				return {
					dnd: {
						draggingItemType: null,
						draggingState: G.IDLE,
						initX: null,
						initY: null,
						x: null,
						y: null,
						draggingEventUIModel: null
					}
				};
			}
			((t = G = G || {})[(t.IDLE = 0)] = 'IDLE'),
				(t[(t.INIT = 1)] = 'INIT'),
				(t[(t.DRAGGING = 2)] = 'DRAGGING'),
				(t[(t.CANCELED = 3)] = 'CANCELED');
			const Vn = 3;
			function $n(n, r, e) {
				return Object.keys(n).reduce((e, t) => (t === r ? e : e - n[t].height - Vn), e);
			}
			function Xn(e) {
				return e.charAt(0).toUpperCase() + e.slice(1);
			}
			const qn = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'],
				Kn = (e) => qn[e];
			function Zn(e, n) {
				return e.map((e) => {
					var t = e.getDay(),
						t = 0 < n.length ? n[t] : Xn(Kn(t));
					return {
						date: e.getDate(),
						day: e.getDay(),
						dayName: t,
						isToday: !0,
						renderDate: 'date',
						dateInstance: e
					};
				});
			}
			function Jn(e) {
				var t;
				return (
					!!e &&
					((t = {
						getDuplicateEvents: (t, e) =>
							e
								.filter(
									(e) => e.title === t.title && 0 === wn(e.start, t.start) && 0 === wn(e.end, t.end)
								)
								.sort((e, t) => (e.calendarId > t.calendarId ? 1 : -1)),
						getMainEvent: (e) => nn(e)
					}),
					zt()(e) ? t : { ...t, ...e })
				);
			}
			function Qn(e) {
				return zt()(e)
					? { enableDblClick: e, enableClick: e }
					: { enableDblClick: !0, enableClick: !0, ...e };
			}
			const er = (e) => !!e.isVisible;
			function tr(e) {
				var t,
					e = 0 < arguments.length && void 0 !== e ? e : {};
				return {
					options: {
						defaultView: null != (t = e.defaultView) ? t : 'week',
						useFormPopup: null != (t = e.useFormPopup) && t,
						useDetailPopup: null != (t = e.useDetailPopup) && t,
						isReadOnly: null != (t = e.isReadOnly) && t,
						week: (function (e) {
							return (
								(e = 0 < arguments.length && void 0 !== e ? e : {}),
								((e = {
									startDayOfWeek: an.SUN,
									dayNames: [],
									narrowWeekend: !1,
									workweek: !1,
									showNowIndicator: !0,
									showTimezoneCollapseButton: !1,
									timezonesCollapsed: !1,
									hourStart: 0,
									hourEnd: 24,
									eventView: !0,
									taskView: !0,
									collapseDuplicateEvents: !1,
									...e
								}).collapseDuplicateEvents = Jn(e.collapseDuplicateEvents)),
								e
							);
						})(e.week),
						month: (function (e) {
							return (
								(e = 0 < arguments.length && void 0 !== e ? e : {}),
								0 ===
									(e = {
										dayNames: [],
										visibleWeeksCount: 0,
										workweek: !1,
										narrowWeekend: !1,
										startDayOfWeek: an.SUN,
										isAlways6Weeks: !0,
										visibleEventCount: 6,
										...e
									}).dayNames.length && (e.dayNames = qn.slice()),
								e
							);
						})(e.month),
						gridSelection: Qn(e.gridSelection),
						usageStatistics: null == (t = e.usageStatistics) || t,
						eventFilter: null != (t = e.eventFilter) ? t : er,
						timezone: (function (e) {
							return { zones: [], ...(0 < arguments.length && void 0 !== e ? e : {}) };
						})(e.timezone)
					}
				};
			}
			let u;
			((e = u = u || {}).SeeMore = 'seeMore'), (e.Form = 'form'), (e.Detail = 'detail');
			const nr = () => {},
				rr = /^auto$|^$|%/;
			function or(e, t) {
				let n = e.style[t];
				return (
					(n && 'auto' !== n) ||
						!document.defaultView ||
						((e = document.defaultView.getComputedStyle(e, null)), (n = e ? e[t] : null)),
					'auto' === n ? null : n
				);
			}
			function ir(e) {
				return w()(e) ? rr.test(e) : null === e;
			}
			function ar(e) {
				const t = or(e, 'width'),
					n = or(e, 'height');
				if ((ir(t) || ir(n)) && e.getBoundingClientRect) {
					const { width: t, height: n } = e.getBoundingClientRect();
					return { width: t || e.offsetWidth, height: n || e.offsetHeight };
				}
				return { width: parseFloat(null != t ? t : '0'), height: parseFloat(null != n ? n : '0') };
			}
			t = ('undefined' == typeof Element ? nr : Element).prototype;
			function lr(e) {
				return e.replace(/<([^>]+)>/gi, '');
			}
			t.matches || t.webkitMatchesSelector || t.msMatchesSelector;
			const cr = {
				milestone: (e) =>
					F(
						K,
						null,
						F('span', { className: O('icon', 'ic-milestone') }),
						F('span', { style: { backgroundColor: e.backgroundColor } }, lr(e.title))
					),
				milestoneTitle: () => F('span', { className: O('left-content') }, 'Milestone'),
				task: (e) => '#'.concat(e.title),
				taskTitle: () => F('span', { className: O('left-content') }, 'Task'),
				alldayTitle: () => F('span', { className: O('left-content') }, 'All Day'),
				allday: (e) => lr(e.title),
				time(e) {
					var { start: e, title: t } = e;
					return e
						? F('span', null, F('strong', null, f(e, 'HH:mm')), ' ', F('span', null, lr(t)))
						: lr(t);
				},
				goingDuration(e) {
					var e = e['goingDuration'],
						t = Math.floor(e / 60),
						e = e % 60;
					return 'GoingTime '.concat(i(t, 2), ':').concat(i(e, 2));
				},
				comingDuration(e) {
					var e = e['comingDuration'],
						t = Math.floor(e / 60),
						e = e % 60;
					return 'ComingTime '.concat(i(t, 2), ':').concat(i(e, 2));
				},
				monthMoreTitleDate(e) {
					var { date: e, day: t } = e,
						n = O('more-title-date'),
						r = O('more-title-day'),
						t = Xn(Kn(t));
					return F(K, null, F('span', { className: n }, e), F('span', { className: r }, t));
				},
				monthMoreClose: () => '',
				monthGridHeader(e) {
					var t = parseInt(e.date.split('-')[2], 10);
					return F(
						'span',
						{ className: O('weekday-grid-date', { 'weekday-grid-date-decorator': e.isToday }) },
						t
					);
				},
				monthGridHeaderExceed: (e) =>
					F('span', { className: O('weekday-grid-more-events') }, e, ' more'),
				monthGridFooter: (e) => '',
				monthGridFooterExceed: (e) => '',
				monthDayName: (e) => e.label,
				weekDayName(e) {
					var t = O('day-name__date'),
						n = O('day-name__name');
					return F(
						K,
						null,
						F('span', { className: t }, e.date),
						'  ',
						F('span', { className: n }, e.dayName)
					);
				},
				weekGridFooterExceed: (e) => '+'.concat(e),
				collapseBtnTitle: () => F('span', { className: O('collapse-btn-icon') }),
				timezoneDisplayLabel(e) {
					let { displayLabel: t, timezoneOffset: n } = e;
					if (A(t) && j(n)) {
						const e = n < 0 ? '-' : '+',
							t = Math.abs(n / 60),
							r = Math.abs(n % 60);
						return 'GMT'.concat(e).concat(i(t, 2), ':').concat(i(r, 2));
					}
					return t;
				},
				timegridDisplayPrimaryTime(e) {
					e = e.time;
					return f(e, 'hh tt');
				},
				timegridDisplayTime(e) {
					e = e.time;
					return f(e, 'HH:mm');
				},
				timegridNowIndicatorLabel(e) {
					var { time: e, format: t = 'HH:mm' } = e;
					return f(e, t);
				},
				popupIsAllday: () => 'All day',
				popupStateFree: () => 'Free',
				popupStateBusy: () => 'Busy',
				titlePlaceholder: () => 'Subject',
				locationPlaceholder: () => 'Location',
				startDatePlaceholder: () => 'Start date',
				endDatePlaceholder: () => 'End date',
				popupSave: () => 'Save',
				popupUpdate: () => 'Update',
				popupEdit: () => 'Edit',
				popupDelete: () => 'Delete',
				popupDetailTitle(e) {
					e = e.title;
					return e;
				},
				popupDetailDate(e) {
					var { isAllday: e, start: t, end: n } = e,
						r = 'YYYY.MM.DD',
						o = 'hh:mm tt',
						i = ''.concat(r, ' ').concat(o),
						a = f(t, e ? r : o),
						o = _n(t, n) ? o : i;
					return e
						? ''.concat(a).concat(_n(t, n) ? '' : ' - '.concat(f(n, r)))
						: ''.concat(f(t, i), ' - ').concat(f(n, o));
				},
				popupDetailLocation(e) {
					e = e.location;
					return e;
				},
				popupDetailAttendees(e) {
					var { attendees: e = [] } = e;
					return e.join(', ');
				},
				popupDetailState(e) {
					e = e.state;
					return e || 'Busy';
				},
				popupDetailRecurrenceRule(e) {
					e = e.recurrenceRule;
					return e;
				},
				popupDetailBody(e) {
					e = e.body;
					return e;
				}
			};
			const sr = Ft()(window) || !window.navigator ? B : ke;
			function ur() {
				const f = ce(null);
				return {
					StoreProvider: function (e) {
						var { children: e, store: t } = e;
						return F(f.Provider, { value: t, children: e });
					},
					useStore: function (e) {
						let t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : Object.is;
						const n = Se(f);
						if (A(n)) throw new Error('StoreProvider is not found');
						const [, r] = xe((e) => e + 1, 0),
							o = n.getState(),
							i = W(o),
							a = W(e),
							l = W(t),
							c = W(!1),
							s = W();
						let u,
							d = (Ft()(s.current) && (s.current = e(o)), !1);
						(i.current === o && a.current === e && l.current === t && !c.current) ||
							((u = e(o)), (d = !t(s.current, u))),
							sr(() => {
								d && (s.current = u),
									(i.current = o),
									(a.current = e),
									(l.current = t),
									(c.current = !1);
							});
						const p = W(o);
						return (
							sr(() => {
								var e = () => {
										try {
											var e = n.getState(),
												t = a.current(e);
											l.current(s.current, t) || ((i.current = e), (s.current = u), r());
										} catch (e) {
											console.error(
												'[toastui-calendar] failed to update state',
												null == e ? void 0 : e.message
											),
												(c.current = !0),
												r();
										}
									},
									t = n.subscribe(e);
								return n.getState() !== p.current && e(), t;
							}, []),
							d ? u : s.current
						);
					},
					useInternalStore: () => {
						const e = Se(f);
						if (A(e)) throw new Error('StoreProvider is not found');
						return I(() => e, [e]);
					}
				};
			}
			function dr(e) {
				let a;
				const l = new Set(),
					t = (t) => {
						var e = t(a);
						if (e !== a) {
							const t = a;
							(a = { ...a, ...e }), l.forEach((e) => e(a, t));
						}
					},
					n = () => a,
					r = {
						setState: t,
						getState: n,
						subscribe: (n, r, e) => {
							let o = n;
							if (r) {
								let t = r(a);
								const i = null != e ? e : Object.is;
								o = () => {
									var e = r(a);
									if (!i(t, e)) {
										const a = t;
										(t = e), n(t, a);
									}
								};
							}
							return l.add(o), () => l.delete(o);
						},
						clearListeners: () => l.clear()
					};
				return (a = e(t, n, r)), r;
			}
			const pr = (c) => (e) => {
					return {
						...tr(c),
						...(function (e) {
							return (
								(e = 0 < arguments.length && void 0 !== e ? e : {}), { template: { ...cr, ...e } }
							);
						})(c.template),
						popup: { [u.SeeMore]: null, [u.Form]: null, [u.Detail]: null },
						layout: 500,
						weekViewLayout: { lastPanelType: null, dayGridRows: {}, selectedDuplicateEventCid: -1 },
						...(function (e) {
							return {
								calendar: {
									calendars: 0 < arguments.length && void 0 !== e ? e : [],
									events: zn(),
									idsOfDay: {}
								}
							};
						})(c.calendars),
						...(function (e) {
							var e = 0 < arguments.length && void 0 !== e ? e : 'week',
								t = new E();
							return t.setHours(0, 0, 0, 0), { view: { currentView: e, renderDate: t } };
						})(c.defaultView),
						...Yn(),
						gridSelection: {
							dayGridMonth: null,
							dayGridWeek: null,
							timeGrid: null,
							accumulated: { dayGridMonth: [] }
						},
						dispatch: {
							options: {
								setOptions: function () {
									let n = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
									return t(
										s((e) => {
											var t;
											n.gridSelection && (n.gridSelection = Qn(n.gridSelection)),
												null != (t = n.week) &&
													t.collapseDuplicateEvents &&
													(n.week.collapseDuplicateEvents = Jn(n.week.collapseDuplicateEvents)),
												Jt(e.options, n);
										})
									);
								}
							},
							popup: {
								showSeeMorePopup: (t) =>
									l(
										s((e) => {
											(e.popup[u.SeeMore] = t),
												(e.popup[u.Form] = null),
												(e.popup[u.Detail] = null);
										})
									),
								showFormPopup: (t) =>
									l(
										s((e) => {
											(e.popup[u.Form] = t),
												(e.popup[u.SeeMore] = null),
												(e.popup[u.Detail] = null);
										})
									),
								showDetailPopup: (t, n) =>
									l(
										s((e) => {
											(e.popup[u.Detail] = t),
												(e.popup[u.Form] = null),
												n || (e.popup[u.SeeMore] = null);
										})
									),
								hideSeeMorePopup: () =>
									l(
										s((e) => {
											e.popup[u.SeeMore] = null;
										})
									),
								hideFormPopup: () =>
									l(
										s((e) => {
											e.popup[u.Form] = null;
										})
									),
								hideDetailPopup: () =>
									l(
										s((e) => {
											e.popup[u.Detail] = null;
										})
									),
								hideAllPopup: () =>
									l(
										s((e) => {
											(e.popup[u.SeeMore] = null),
												(e.popup[u.Form] = null),
												(e.popup[u.Detail] = null);
										})
									)
							},
							weekViewLayout: {
								setLastPanelType: (t) => {
									a(
										s((e) => {
											(e.weekViewLayout.lastPanelType = t) &&
												(e.weekViewLayout.dayGridRows[t].height = $n(
													e.weekViewLayout.dayGridRows,
													t,
													e.layout
												));
										})
									);
								},
								updateLayoutHeight: (n) =>
									a(
										s((e) => {
											var t = e.weekViewLayout['lastPanelType'];
											(e.layout = n),
												t &&
													(e.weekViewLayout.dayGridRows[t].height = $n(
														e.weekViewLayout.dayGridRows,
														t,
														n
													));
										})
									),
								updateDayGridRowHeight: (e) => {
									let { rowName: n, height: r } = e;
									return a(
										s((e) => {
											var t = e.weekViewLayout['lastPanelType'];
											(e.weekViewLayout.dayGridRows[n] = { height: r }),
												t &&
													(e.weekViewLayout.dayGridRows[t].height = $n(
														e.weekViewLayout.dayGridRows,
														t,
														e.layout
													));
										})
									);
								},
								updateDayGridRowHeightByDiff: (e) => {
									let { rowName: r, diff: o } = e;
									return a(
										s((e) => {
											var t = e.weekViewLayout['lastPanelType'],
												n =
													null !=
													(n =
														null == (n = e.weekViewLayout.dayGridRows) || null == (n = n[r])
															? void 0
															: n.height)
														? n
														: kt;
											(e.weekViewLayout.dayGridRows[r] = { height: n + o }),
												t &&
													(e.weekViewLayout.dayGridRows[t].height = $n(
														e.weekViewLayout.dayGridRows,
														t,
														e.layout
													));
										})
									);
								},
								setSelectedDuplicateEventCid: (t) =>
									a(
										s((e) => {
											e.weekViewLayout.selectedDuplicateEventCid = null != t ? t : -1;
										})
									)
							},
							calendar: Un((a = l = t = e)),
							view: {
								changeView: (t) =>
									i(
										s((e) => {
											e.view.currentView = t;
										})
									),
								setRenderDate: (t) =>
									i(
										s((e) => {
											e.view.renderDate = M(t);
										})
									)
							},
							dnd: {
								initDrag: (t) => {
									o(
										s((e) => {
											e.dnd = { ...e.dnd, ...t, draggingState: G.INIT };
										})
									);
								},
								setDragging: (t) => {
									o(
										s((e) => {
											e.dnd = { ...e.dnd, ...t, draggingState: G.DRAGGING };
										})
									);
								},
								cancelDrag: () => {
									o(
										s((e) => {
											(e.dnd = Yn().dnd), (e.dnd.draggingState = G.CANCELED);
										})
									);
								},
								reset: () => {
									o(
										s((e) => {
											e.dnd = Yn().dnd;
										})
									);
								},
								setDraggingEventUIModel: (t) => {
									o(
										s((e) => {
											e.dnd.draggingEventUIModel =
												null != (e = null == t ? void 0 : t.clone()) ? e : null;
										})
									);
								}
							},
							gridSelection: {
								setGridSelection: (t, n) => {
									r(
										s((e) => {
											e.gridSelection[t] = n;
										})
									);
								},
								addGridSelection: (t, n) => {
									r(
										s((e) => {
											'dayGridMonth' === t &&
												n &&
												((e.gridSelection.accumulated[t] = [...e.gridSelection.accumulated[t], n]),
												(e.gridSelection.dayGridMonth = null));
										})
									);
								},
								clearAll: () =>
									r(
										s((e) => {
											e.gridSelection = {
												dayGridMonth: null,
												dayGridWeek: null,
												timeGrid: null,
												accumulated: { dayGridMonth: [] }
											};
										})
									)
							},
							template:
								((n = r = o = i = e),
								{
									setTemplate: (t) =>
										n(
											s((e) => {
												e.template = { ...e.template, ...t };
											})
										)
								})
						}
					};
					var n, r, o, i, a, l, t;
				},
				{ StoreProvider: fr, useStore: U, useInternalStore: hr } = ur();
			function Y(t) {
				return U(N((e) => (t ? e.dispatch[t] : e.dispatch), [t]));
			}
			function mr(t) {
				return (e) => e[t];
			}
			mr('popup');
			const gr = mr('calendar'),
				vr = mr('weekViewLayout'),
				yr = mr('template'),
				wr = mr('view'),
				_r = mr('options'),
				br = mr('dnd');
			var e = fc(4304),
				Dr = fc.n(e);
			const xr = 'data-target-temp';
			function V(e) {
				var { template: e, param: t, as: n = 'div' } = e,
					r = U(yr)[e];
				return A(r)
					? null
					: ((r = r(t)),
						w()(r)
							? F(n, {
									className: O('template-'.concat(e)),
									dangerouslySetInnerHTML: { __html: ((t = r), Dr().sanitize(t)) }
								})
							: (function (e, t, n) {
									var r,
										o,
										i,
										a = C({}, e.props);
									for (i in t) 'key' == i ? (r = t[i]) : 'ref' == i ? (o = t[i]) : (a[i] = t[i]);
									return (
										2 < arguments.length &&
											(a.children = 3 < arguments.length ? x.call(arguments, 2) : n),
										b(e.type, a, r || e.key, o || e.ref, null)
									);
								})(r, {
									className: ''
										.concat(null != (n = r.props.className) ? n : '', ' ')
										.concat(O('template-'.concat(e)))
								}));
			}
			const kr = ce(null),
				Sr = kr.Provider,
				$ = () => {
					var e = Se(kr);
					if (e) return e;
					throw new Error('useEventBus must be used within a EventBusProvider');
				},
				Cr = (e) => {
					return null !=
						(e =
							null == (e = e.options) ||
							null == (e = e.timezone) ||
							null == (e = e.zones) ||
							null == (e = e[0])
								? void 0
								: e.timezoneName)
						? e
						: 'Local';
				},
				Er = (e) => {
					return null == (e = e.options) || null == (e = e.timezone)
						? void 0
						: e.customOffsetCalculator;
				},
				Ir = (e) => {
					return null != (e = e.options.timezone.zones) ? e : [];
				};
			function Mr() {
				const n = U(Er),
					r = j(n);
				return N(
					function (e) {
						var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : new E();
						return t.tz(r ? n(e, t.getTime()) : e);
					},
					[n, r]
				);
			}
			function Nr() {
				const e = U(Cr),
					t = Mr(),
					n = N(() => t(e), [e, t]);
				return [e, n];
			}
			function Tr(e) {
				let { dayName: i, style: t, type: n, theme: a } = e;
				const r = $(),
					[, o] = Nr(),
					l = o(),
					c = i['day'],
					s = (
						'week' === n
							? function () {
									var { dayName: e, theme: t, today: n } = { dayName: i, theme: a, today: l },
										{ day: e, dateInstance: r } = e,
										o = _n(n, r),
										r = !o && r < n;
									return Sn(e)
										? t.common.holiday.color
										: r
											? null == (n = t.week)
												? void 0
												: n.pastDay.color
											: Cn(e)
												? t.common.saturday.color
												: o
													? null == (r = t.week)
														? void 0
														: r.today.color
													: t.common.dayName.color;
								}
							: function () {
									var { dayName: e, theme: t } = { dayName: i, theme: a },
										e = e['day'];
									return (Sn(e) ? t.common.holiday : Cn(e) ? t.common.saturday : t.common.dayName)
										.color;
								}
					)(),
					u = ''.concat(n, 'DayName');
				return F(
					'div',
					{ className: O('day-name-item', n), style: t },
					F(
						'span',
						{
							className: O({ ['holiday-'.concat(Kn(c))]: kn(c) }),
							style: { color: s },
							onClick: () => {
								'week' === n && r.fire('clickDayName', { date: f(i.dateInstance, 'YYYY-MM-DD') });
							},
							'data-testid': 'dayName-'.concat(n, '-').concat(Kn(c))
						},
						F(V, { template: u, param: i })
					)
				);
			}
			const Or = mr('common'),
				Pr = (mr('week'), mr('month')),
				Ar = (e) => e.week.dayGridLeft,
				Rr = (e) => e.week.timeGridLeft,
				Lr = (e) => e.month.moreView,
				Hr = (e) => e.month.gridCell,
				Fr = {
					border: '1px solid #e5e5e5',
					backgroundColor: 'white',
					holiday: { color: '#ff4040' },
					saturday: { color: '#333' },
					dayName: { color: '#333' },
					today: { color: '#fff' },
					gridSelection: { backgroundColor: 'rgba(81, 92, 230, 0.05)', border: '1px solid #515ce6' }
				},
				zr = {
					dayName: {
						borderLeft: 'none',
						borderTop: '1px solid #e5e5e5',
						borderBottom: '1px solid #e5e5e5',
						backgroundColor: 'inherit'
					},
					weekend: { backgroundColor: 'inherit' },
					today: { color: 'inherit', backgroundColor: 'rgba(81, 92, 230, 0.05)' },
					pastDay: { color: '#bbb' },
					panelResizer: { border: '1px solid #e5e5e5' },
					dayGrid: { borderRight: '1px solid #e5e5e5', backgroundColor: 'inherit' },
					dayGridLeft: {
						borderRight: '1px solid #e5e5e5',
						backgroundColor: 'inherit',
						width: '72px'
					},
					timeGrid: { borderRight: '1px solid #e5e5e5' },
					timeGridLeft: {
						backgroundColor: 'inherit',
						borderRight: '1px solid #e5e5e5',
						width: '72px'
					},
					timeGridLeftAdditionalTimezone: { backgroundColor: 'white' },
					timeGridHalfHourLine: { borderBottom: 'none' },
					timeGridHourLine: { borderBottom: '1px solid #e5e5e5' },
					nowIndicatorLabel: { color: '#515ce6' },
					nowIndicatorPast: { border: '1px dashed #515ce6' },
					nowIndicatorBullet: { backgroundColor: '#515ce6' },
					nowIndicatorToday: { border: '1px solid #515ce6' },
					nowIndicatorFuture: { border: 'none' },
					pastTime: { color: '#bbb' },
					futureTime: { color: '#333' },
					gridSelection: { color: '#515ce6' }
				},
				Br = {
					dayName: { borderLeft: 'none', backgroundColor: 'inherit' },
					holidayExceptThisMonth: { color: 'rgba(255, 64, 64, 0.4)' },
					dayExceptThisMonth: { color: 'rgba(51, 51, 51, 0.4)' },
					weekend: { backgroundColor: 'inherit' },
					moreView: {
						border: '1px solid #d5d5d5',
						boxShadow: '0 2px 6px 0 rgba(0, 0, 0, 0.1)',
						backgroundColor: 'white',
						width: null,
						height: null
					},
					gridCell: { headerHeight: 31, footerHeight: null },
					moreViewTitle: { backgroundColor: 'inherit' }
				};
			function Wr() {
				let t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
				return (e) => {
					return {
						...(function (e) {
							return (e = 0 < arguments.length && void 0 !== e ? e : {}), { common: Jt(Fr, e) };
						})(null == t ? void 0 : t.common),
						...(function (e) {
							return (e = 0 < arguments.length && void 0 !== e ? e : {}), { week: Jt(zr, e) };
						})(null == t ? void 0 : t.week),
						...(function (e) {
							return (e = 0 < arguments.length && void 0 !== e ? e : {}), { month: Jt(Br, e) };
						})(null == t ? void 0 : t.month),
						dispatch: {
							...((n = e),
							{
								setTheme: (t) => {
									n(
										s((e) => {
											(e.common = Jt(e.common, t.common)),
												(e.week = Jt(e.week, t.week)),
												(e.month = Jt(e.month, t.month));
										})
									);
								},
								setCommonTheme: (t) => {
									n(
										s((e) => {
											e.common = Jt(e.common, t);
										})
									);
								},
								setWeekTheme: (t) => {
									n(
										s((e) => {
											e.week = Jt(e.week, t);
										})
									);
								},
								setMonthTheme: (t) => {
									n(
										s((e) => {
											e.month = Jt(e.month, t);
										})
									);
								}
							})
						}
					};
					var n;
				};
			}
			const { StoreProvider: jr, useStore: L } = ur();
			function Gr() {
				return L(Pr);
			}
			function Ur(e) {
				return {
					common: {
						saturday: e.common.saturday,
						holiday: e.common.holiday,
						today: e.common.today,
						dayName: e.common.dayName
					},
					week: { pastDay: e.week.pastDay, today: e.week.today, dayName: e.week.dayName }
				};
			}
			function Yr(e) {
				return {
					common: {
						saturday: e.common.saturday,
						holiday: e.common.holiday,
						today: e.common.today,
						dayName: e.common.dayName
					},
					month: { dayName: e.month.dayName }
				};
			}
			function Vr(e) {
				let { dayNames: t, marginLeft: n = '0', rowStyleInfo: r, type: o = 'month' } = e;
				const i = L('month' === o ? Yr : Ur),
					{
						backgroundColor: a = 'white',
						borderLeft: l = null,
						...c
					} = null != (e = null == (e = i[o]) ? void 0 : e.dayName) ? e : {},
					{ borderTop: s = null, borderBottom: u = null } = c;
				return F(
					'div',
					{
						'data-testid': 'grid-header-'.concat(o),
						className: O('day-names', o),
						style: { backgroundColor: a, borderTop: s, borderBottom: u }
					},
					F(
						'div',
						{ className: O('day-name-container'), style: { marginLeft: n } },
						t.map((e, t) =>
							F(Tr, {
								type: o,
								key: 'dayNames-'.concat(e.day),
								dayName: e,
								style: { width: P(r[t].width), left: P(r[t].left), borderLeft: l },
								theme: i
							})
						)
					)
				);
			}
			fc(3985);
			let $r;
			function Xr(r, e) {
				let o = !(1 < arguments.length && void 0 !== e) || e;
				const i = [];
				let a;
				return (
					r.length &&
						((i[0] = [r[0].cid()]),
						r.slice(1).forEach((t, e) => {
							const n = (a = r.slice(0, e + 1).reverse()).find((e) => t.collidesWith(e, o));
							n
								? i
										.slice()
										.reverse()
										.some((e) => !!~e.indexOf(n.cid()) && (e.push(t.cid()), !0))
								: i.push([t.cid()]);
						})),
					i
				);
			}
			function qr(l, e, t) {
				let c = !(2 < arguments.length && void 0 !== t) || t;
				const n = [];
				return (
					e.forEach((e) => {
						const a = [[]];
						e.forEach((e) => {
							var t = l.get(e);
							let n,
								r,
								o = 0,
								i = !1;
							for (; !i; )
								-1 ===
								(r = (function (e, t) {
									let n = e['length'];
									for (; 0 < n; ) if ((--n, !Ft()(e[n][t]))) return n;
									return -1;
								})(a, o))
									? (a[0].push(t), (i = !0))
									: t.collidesWith(a[r][o], c) ||
										((n = r + 1), Ft()(a[n]) && (a[n] = []), (a[n][o] = t), (i = !0)),
									(o += 1);
						}),
							n.push(a);
					}),
					n
				);
			}
			function Kr(n, r) {
				return (e) => {
					var t = e.getStarts();
					return !(e.getEnds() < n || r < t);
				};
			}
			function Zr(e, t, n, o) {
				const i = vn(e, t, pn).map((e) => f(e, 'YYYYMMDD'));
				n.forEach((e) => {
					e.forEach((e) => {
						e.forEach((e, t) => {
							var n, r;
							e &&
								((n = f(e.getStarts(), 'YYYYMMDD')),
								(r = vn(M(e.getStarts()), T(e.getEnds()), pn).length),
								(e.top = t),
								(e.left = i.indexOf(n)),
								(e.width = r),
								null != o) &&
								o(e);
						});
					});
				});
			}
			function Jr(e, t, n) {
				return (
					n.getStarts() < e && ((n.exceedLeft = !0), (n.renderStarts = new E(e))),
					n.getEnds() > t && ((n.exceedRight = !0), (n.renderEnds = new E(t))),
					n
				);
			}
			function Qr(t, n, e) {
				e instanceof Fn ? e.each((e) => (Jr(t, n, e), !0)) : Jr(t, n, e);
			}
			function eo(e) {
				const t = new Fn((e) => e.cid());
				return (
					e.each(function (e) {
						t.add(new en(e));
					}),
					t
				);
			}
			function to(e) {
				e = e.model;
				return e.isAllday || e.hasMultiDates;
			}
			function no(e) {
				return !to(e);
			}
			function ro(e) {
				(e.top = e.top || 0), (e.top += 1);
			}
			function oo(e, t) {
				var n,
					r,
					{ start: t, end: o, andFilters: i = [], alldayFirstMode: a = !1 } = t,
					{ events: e, idsOfDay: l } = e,
					i = Fn.and(...[Kr(t, o)].concat(i)),
					e = eo(e.filter(i)),
					i =
						(e.each((e) => {
							var t = e['model'],
								n = t.getStarts(),
								r = t.getEnds();
							(t.hasMultiDates = !_n(n, r)),
								!t.isAllday && t.hasMultiDates && ((e.renderStarts = M(n)), (e.renderEnds = T(r)));
						}),
						(n = t),
						(r = o),
						e.each((e) => {
							(e.model.isAllday || e.model.hasMultiDates) && Qr(M(n), T(r), e);
						}),
						e.sort(tn.event.asc)),
					i = qr(e, Xr(i, !1), !1);
				return (
					Zr(t, o, i, ro),
					(a
						? function (r, e) {
								const o = e.filter(to),
									t = e.filter(no).sort(tn.event.asc),
									i = {};
								t.forEach((e) => {
									var t = f(e.getStarts(), 'YYYYMMDD');
									let n = i[t];
									Ft()(n) &&
										(n = i[t] =
											(function (e, t, n) {
												const r = [];
												return (
													e[t].forEach((e) => {
														n.doWhenHas(e, (e) => {
															r.push(e.top);
														});
													}),
													0 < r.length ? Math.max(...r) : 0
												);
											})(r, t, o)),
										(i[t] = e.top = n + 1);
								});
							}
						: function (r, e) {
								const o = e.filter(to),
									t = e.filter(no).sort(tn.event.asc),
									i = {};
								t.forEach((t) => {
									var e = f(t.getStarts(), 'YYYYMMDD');
									let n = i[e];
									if (
										(Ft()(n) &&
											((n = i[e] = []),
											r[e].forEach((e) => {
												o.doWhenHas(e, (e) => {
													n.push(e.top);
												});
											})),
										0 <= n.indexOf(t.top))
									) {
										const r = Math.max(...n) + 1;
										for (let e = 1; e <= r && ((t.top = e), !(n.indexOf(t.top) < 0)); e += 1);
									}
									n.push(t.top);
								});
							})(l, e),
					i
				);
			}
			function io(e, t) {
				const { start: n, end: r, uiModelTimeColl: o, hourStart: i, hourEnd: a } = t,
					l = (function (o, e, t, i) {
						const a = {};
						return (
							Bn(e, t).forEach((e) => {
								const t = f(e, 'YYYYMMDD'),
									n = o[t],
									r = (a[t] = new Fn((e) => e.cid()));
								n &&
									n.length &&
									n.forEach((e) => {
										i.doWhenHas(e, (e) => {
											r.add(e);
										});
									});
							}, {}),
							a
						);
					})(e, n, r, o),
					c = {},
					s =
						((d = a),
						0 === (u = i) && 24 === d
							? (e) => e.sort(tn.event.asc)
							: (e) => {
									return e
										.filter(
											((a = u),
											(l = d),
											(e) => {
												var t = e.getStarts(),
													e = e.getEnds(),
													n = t.getTime(),
													e = e.getTime(),
													r = t.getFullYear(),
													o = t.getMonth(),
													t = t.getDate(),
													i = new E(r, o, t).setHours(a),
													r = new E(r, o, t).setHours(l);
												return (
													(i <= n && n < r) ||
													(i < e && e <= r) ||
													(n < i && i < e) ||
													(r < e && n < r)
												);
											})
										)
										.sort(tn.event.asc);
									var a, l;
								});
				var u, d;
				return (
					Object.entries(l).forEach((e) => {
						var [e, t] = e,
							t = qr(t, Xr(s(t), !0), !0);
						c[e] = t;
					}),
					c
				);
			}
			function ao(e, t, n) {
				e = Math.max(e, ...t);
				return Math.min(e, ...n);
			}
			function lo(e, t, n) {
				return t <= e && e <= n;
			}
			((t = $r = $r || {}).header = 'header'), (t.footer = 'footer');
			const co = 22;
			function so(e, n) {
				e.forEach((e) => {
					e.forEach((e) => {
						e.forEach((e, t) => {
							n(e, t);
						});
					});
				});
			}
			function uo(t, n) {
				return (e) => {
					e = e.top;
					return e * n <= t;
				};
			}
			function po(e, t, n) {
				return e.filter(
					((r = t),
					(o = n),
					(e) => {
						e = e.top;
						return r < e * o;
					})
				).length;
				var r, o;
			}
			function fo(e, t, n) {
				const r = e.filter((e) => kn(e.getDay())).length,
					o = e.length,
					i = r === o,
					a = n / (t && !i ? 2 * o - r : o),
					l = e.map((e) => {
						e = e.getDay();
						return !t || i || kn(e) ? a : 2 * a;
					}),
					c = l.reduce((e, t, n) => (n ? [...e, e[n - 1] + l[n - 1]] : [0]), []);
				return { widthList: l, leftList: c };
			}
			function ho(e, r, o) {
				return e.reduce((e, t, n) => (r <= n && n <= o ? e + t : e), 0);
			}
			function mo(t, e) {
				return e.findIndex((e) => t >= M(e) && t <= T(e));
			}
			const go = (n, r, e, t) => {
				t = fo(e, t, 100).widthList;
				let o = 0,
					i = e.length - 1;
				return (
					e.forEach((e, t) => {
						e <= n && (o = t), e <= r && (i = t);
					}),
					{ width: ho(t, o, i), left: o ? ho(t, 0, o - 1) : 0 }
				);
			};
			function vo(e) {
				return e.flatMap((e) => e.flatMap((e) => e.filter((e) => !!e)));
			}
			const yo = (r, e, t) => {
				let { narrowWeekend: o, hourStart: p, hourEnd: f, weekStartDate: h, weekEndDate: m } = t;
				const i = (function (e) {
					const {
							start: r,
							end: o,
							panels: t,
							andFilters: n,
							options: i
						} = {
							start: h,
							end: m,
							panels: [
								{ name: 'milestone', type: 'daygrid', show: !0 },
								{ name: 'task', type: 'daygrid', show: !0 },
								{ name: 'allday', type: 'daygrid', show: !0 },
								{ name: 'time', type: 'timegrid', show: !0 }
							],
							andFilters: [],
							options: { hourStart: p, hourEnd: f }
						},
						{ events: a, idsOfDay: l } = e,
						c = null != (e = null == i ? void 0 : i.hourStart) ? e : 0,
						s = null != (e = null == i ? void 0 : i.hourEnd) ? e : 24,
						u = Fn.and(...[Kr(r, o)].concat(n)),
						d = eo(a.filter(u)).groupBy(Wn);
					return t.reduce(
						(e, t) => {
							var { name: t, type: n } = t;
							return A(d[t])
								? e
								: {
										...e,
										[t]:
											'daygrid' === n
												? (function (e, t, n) {
														if (!n || !n.size) return [];
														n.each((e) => {
															var t = e['model'];
															(t.hasMultiDates = !0),
																(e.renderStarts = M(t.getStarts())),
																(e.renderEnds = T(t.getEnds()));
														}),
															Qr(e, t, n);
														var r = n.sort(tn.event.asc),
															n = qr(n, Xr(r, !0), !0);
														return Zr(e, t, n), n;
													})(r, o, d[t])
												: io(l, {
														start: r,
														end: o,
														uiModelTimeColl: d[t],
														hourStart: c,
														hourEnd: s
													})
									};
						},
						{ milestone: [], task: [], allday: [], time: {} }
					);
				})(e);
				return Object.keys(i).reduce(
					(e, t) => {
						var n = i[t];
						return {
							...e,
							[t]: Array.isArray(n)
								? (function (e, r) {
										let o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2];
										return (
											so(e, (e) => {
												var t = e.getStarts(),
													n = e.getEnds(),
													{ width: t, left: n } = go(t, n, r, o);
												(e.width = t), (e.left = n), (e.top += 1);
											}),
											vo(e)
										);
									})(n, r, o)
								: Array.from(new Set(Object.values(n).reduce((e, t) => e.concat(...vo(t)), [])))
						};
					},
					{ milestone: [], allday: [], task: [], time: [] }
				);
			};
			function wo(e, t) {
				let {
					workweek: r = !1,
					visibleWeeksCount: n = 0,
					startDayOfWeek: o = 0,
					isAlways6Weeks: i = !0
				} = t;
				const a = new E(e),
					l = 0 < n,
					c = l ? a : En(a),
					s =
						((e = (t = c).getDay() - o + (c.getDay() < o ? 7 : 0)),
						(h = yn(t)).setDate(t.getDate() - e),
						h),
					u = s.getDay(),
					d =
						((t = En(a)).setMonth(t.getMonth() + 1),
						t.setDate(t.getDate() - 1),
						t.setHours(23, 59, 59, 999),
						t.getDate()),
					p = On(s, c),
					f = d + Math.abs(p);
				var h;
				let m = 6;
				return (
					l ? (m = n) : !1 === i && (m = Math.ceil(f / 7)),
					bt()(0, m).map((n) =>
						bt()(0, 7).reduce((e, t) => {
							t = 7 * n + t;
							if (!r || (r && !kn((t + u) % 7))) {
								const n = Tn(s, t);
								e.push(n);
							}
							return e;
						}, [])
					)
				);
			}
			function _o(e, t) {
				let { startDayOfWeek: n = an.SUN, workweek: r } = t;
				const o = M(e),
					i = o.getDay() - n;
				return (0 <= i ? bt()(-i, 7 - i) : bt()(-7 - i, -i)).reduce((e, t) => {
					t = Tn(o, t);
					return (r && kn(t.getDay())) || e.push(t), e;
				}, []);
			}
			function bo(e, o) {
				const t = (function (e, t) {
						const n = e.length,
							r = 5 < n && 1 < arguments.length && void 0 !== t && t,
							o = r ? 100 / (n - 1) : 100 / n;
						return e
							.map((e) => {
								var t = r && kn(e.getDay()) ? o / 2 : o;
								return { date: e, width: t };
							})
							.reduce((e, t, n) => {
								var r = e[n - 1];
								return e.push({ ...t, left: 0 === n ? 0 : r.left + r.width }), e;
							}, []);
					})(e, null != (e = o.narrowWeekend) && e),
					n = 2 * (o.hourEnd - o.hourStart),
					i = 100 / n;
				return {
					columns: t,
					rows: bt()(n).map((e, t) => {
						var n = t % 2 == 1,
							e = o.hourStart + Math.floor(e / 2),
							r = ''
								.concat(e, ':')
								.concat(n ? '30' : '00')
								.padStart(5, '0'),
							n = (n ? ''.concat(e + 1, ':00') : ''.concat(e, ':30')).padStart(5, '0');
						return { top: i * t, height: i, startTime: r, endTime: n };
					})
				};
			}
			function Do(e) {
				let {
					rowsCount: d,
					columnsCount: p,
					container: f,
					narrowWeekend: h = !1,
					startDayOfWeek: t = an.SUN
				} = e;
				if (A(f)) return () => null;
				const m = bt()(t, t + p).map((e) => e % 7),
					g = h ? m.filter((e) => kn(e)).length : 0;
				return function (a) {
					const { left: l, top: c, width: e, height: t } = f.getBoundingClientRect(),
						[n, r] = (function () {
							var { clientX: e, clientY: t } = a,
								{
									left: n,
									top: r,
									clientLeft: o,
									clientTop: i
								} = { left: l, top: c, clientLeft: f.clientLeft, clientTop: f.clientTop };
							return [e - n - o, t - r - i];
						})();
					if (n < 0 || r < 0 || n > e || t < r) return null;
					const o = h ? e / (p - g + 1) : e / p,
						i = m.map((e) => (h && kn(e) ? o / 2 : o)),
						s = [];
					return (
						i.forEach((e, t) => {
							0 === t ? s.push(0) : s.push(s[t - 1] + i[t - 1]);
						}),
						{
							columnIndex: rn(s, (e) => n >= e),
							rowIndex: ((u = d), ao(Math.floor((u * r) / t), [0], [u - 1]))
						}
					);
					var u;
				};
			}
			function xo(e) {
				return e.common.gridSelection;
			}
			function ko(e) {
				var { type: e, gridSelectionData: t, weekDates: n, narrowWeekend: r } = e,
					{ backgroundColor: o, border: i } = L(xo),
					{ startCellIndex: t, endCellIndex: a } = t,
					{ left: r, width: n } =
						((l = Math.min(t, a)),
						(t = Math.max(t, a)),
						(n = fo((a = n), r, 100).widthList),
						{
							left: l ? ho(n, 0, l - 1) : 0,
							width: ho(n, null != l ? l : 0, t < 0 ? a.length - 1 : t)
						}),
					l = { left: P(r), width: P(n), height: P(100), backgroundColor: o, border: i };
				return 0 < n ? F('div', { className: O(e, 'grid-selection'), style: l }) : null;
			}
			function So(e, t, n) {
				return {
					startColumnIndex: (n ? t : e).columnIndex,
					startRowIndex: (n ? t : e).rowIndex,
					endColumnIndex: (n ? e : t).columnIndex,
					endRowIndex: (n ? e : t).rowIndex
				};
			}
			const Co = {
					sortSelection: (e, t) =>
						So(
							e,
							t,
							e.columnIndex > t.columnIndex ||
								(e.columnIndex === t.columnIndex && e.rowIndex > t.rowIndex)
						),
					getDateFromCollection: (e, t) => {
						return [
							Nn(e.columns[t.startColumnIndex].date, e.rows[t.startRowIndex].startTime),
							Nn(e.columns[t.endColumnIndex].date, e.rows[t.endRowIndex].endTime)
						];
					},
					calculateSelection: function (e, t, n) {
						var r, o, i;
						return !A(e) &&
							(({ startColumnIndex: e, endColumnIndex: r, endRowIndex: o, startRowIndex: i } = e),
							lo(t, e, r))
							? ((i = {
									startRowIndex: i,
									endRowIndex: o,
									isSelectingMultipleColumns: e !== r,
									isStartingColumn: t === e
								}),
								e < t && t < r
									? ((i.startRowIndex = 0), (i.endRowIndex = n))
									: e !== r && (e === t ? (i.endRowIndex = n) : r === t && (i.startRowIndex = 0)),
								i)
							: null;
					}
				},
				Eo = {
					sortSelection: (e, t) =>
						So(
							e,
							t,
							e.rowIndex > t.rowIndex ||
								(e.rowIndex === t.rowIndex && e.columnIndex > t.columnIndex)
						),
					getDateFromCollection: (e, t) => {
						return [e[t.startRowIndex][t.startColumnIndex], e[t.endRowIndex][t.endColumnIndex]];
					},
					calculateSelection: function (e, t, n) {
						if (!(j(e) && j(t) && j(n))) return null;
						var { startRowIndex: e, startColumnIndex: r, endRowIndex: o, endColumnIndex: i } = e;
						if (!lo(t, Math.min(e, o), Math.max(e, o))) return null;
						let a = r,
							l = i;
						return e < t && (a = 0), t < o && (l = n - 1), { startCellIndex: a, endCellIndex: l };
					}
				},
				Io = {
					sortSelection: (e, t) => So(e, t, e.columnIndex > t.columnIndex),
					getDateFromCollection: (e, t) => {
						return [e[t.startColumnIndex], e[t.endColumnIndex]];
					},
					calculateSelection: function (e) {
						return j(e)
							? { startCellIndex: e.startColumnIndex, endCellIndex: e.endColumnIndex }
							: null;
					}
				};
			function Mo(e) {
				return Io.calculateSelection(e.gridSelection.dayGridWeek);
			}
			function No(e) {
				var { weekDates: e, narrowWeekend: t } = e,
					n = U(Mo);
				return A(n)
					? null
					: F(ko, { type: 'allday', gridSelectionData: n, weekDates: e, narrowWeekend: t });
			}
			function To(e, t) {
				for (var n in t) e[n] = t[n];
				return e;
			}
			function Oo(e, t) {
				for (var n in e) if ('__source' !== n && !(n in t)) return !0;
				for (var r in t) if ('__source' !== r && e[r] !== t[r]) return !0;
				return !1;
			}
			function Po(t, r) {
				function n(e) {
					var t = this.props.ref,
						n = t == e.ref;
					return (
						!n && t && (t.call ? t(null) : (t.current = null)),
						r ? !r(this.props, e) || !n : Oo(this.props, e)
					);
				}
				function e(e) {
					return (this.shouldComponentUpdate = n), F(t, e);
				}
				return (
					(e.displayName = 'Memo(' + (t.displayName || t.name) + ')'),
					(e.prototype.isReactComponent = !0),
					(e.__f = !0),
					e
				);
			}
			new Z().isPureReactComponent = !0;
			var Ao = H.__b,
				Ro =
					((H.__b = function (e) {
						e.type && e.type.__f && e.ref && ((e.props.ref = e.ref), (e.ref = null)), Ao && Ao(e);
					}),
					('undefined' != typeof Symbol && Symbol.for && Symbol.for('react.forward_ref')) || 3911);
			function Lo(n) {
				function e(e) {
					var t = To({}, e);
					return delete t.ref, n(t, e.ref || null);
				}
				return (
					(e.$$typeof = Ro),
					((e.render = e).prototype.isReactComponent = e.__f = !0),
					(e.displayName = 'ForwardRef(' + (n.displayName || n.name) + ')'),
					e
				);
			}
			var Ho = H.__e,
				Fo =
					((H.__e = function (e, t, n, r) {
						if (e.then)
							for (var o, i = t; (i = i.__); )
								if ((o = i.__c) && o.__c)
									return null == t.__e && ((t.__e = n.__e), (t.__k = n.__k)), o.__c(e, t);
						Ho(e, t, n, r);
					}),
					H.unmount);
			function zo(e) {
				var t = e.__.__c;
				return t && t.__a && t.__a(e);
			}
			(H.unmount = function (e) {
				var t = e.__c;
				t && t.__R && t.__R(), t && !0 === e.__h && (e.type = null), Fo && Fo(e);
			}),
				(new Z().__c = function (e, t) {
					function n() {
						a || ((a = !0), (r.__R = null), i ? i(l) : l());
					}
					var r = t.__c,
						o = this,
						i = (null == o.t && (o.t = []), o.t.push(r), zo(o.__v)),
						a = !1,
						l =
							((r.__R = n),
							function () {
								var e, t;
								if (!--o.__u)
									for (
										o.state.__a &&
											((e = o.state.__a),
											(o.__v.__k[0] = (function t(e, n, r) {
												return (
													e &&
														((e.__v = null),
														(e.__k =
															e.__k &&
															e.__k.map(function (e) {
																return t(e, n, r);
															})),
														e.__c) &&
														e.__c.__P === n &&
														(e.__e && r.insertBefore(e.__e, e.__d),
														(e.__c.__e = !0),
														(e.__c.__P = r)),
													e
												);
											})(e, e.__c.__P, e.__c.__O))),
											o.setState({ __a: (o.__b = null) });
										(t = o.t.pop());

									)
										t.forceUpdate();
							}),
						t = !0 === t.__h;
					o.__u++ || t || o.setState({ __a: (o.__b = o.__v.__k[0]) }), e.then(n, n);
				});
			function Bo(e, t, n) {
				if (
					(++n[1] === n[0] && e.o.delete(t),
					e.props.revealOrder && ('t' !== e.props.revealOrder[0] || !e.o.size))
				)
					for (n = e.u; n; ) {
						for (; 3 < n.length; ) n.pop()();
						if (n[1] < n[0]) break;
						e.u = n = n[2];
					}
			}
			function Wo(e) {
				return (
					(this.getChildContext = function () {
						return e.context;
					}),
					e.children
				);
			}
			function jo(e) {
				var n = this,
					t = e.i;
				(n.componentWillUnmount = function () {
					le(null, n.l), (n.l = null), (n.i = null);
				}),
					n.i && n.i !== t && n.componentWillUnmount(),
					e.__v
						? (n.l ||
								((n.i = t),
								(n.l = {
									nodeType: 1,
									parentNode: t,
									childNodes: [],
									appendChild: function (e) {
										this.childNodes.push(e), n.i.appendChild(e);
									},
									insertBefore: function (e, t) {
										this.childNodes.push(e), n.i.appendChild(e);
									},
									removeChild: function (e) {
										this.childNodes.splice(this.childNodes.indexOf(e) >>> 1, 1), n.i.removeChild(e);
									}
								})),
							le(F(Wo, { context: n.context }, e.__v), n.l))
						: n.l && n.componentWillUnmount();
			}
			function Go(e, t) {
				e = F(jo, { __v: e, i: t });
				return (e.containerInfo = t), e;
			}
			new Z().__a = function (n) {
				var r = this,
					o = zo(r.__v),
					i = r.o.get(n);
				return (
					i[0]++,
					function (e) {
						function t() {
							r.props.revealOrder ? (i.push(e), Bo(r, n, i)) : e();
						}
						o ? o(t) : t();
					}
				);
			};
			var Uo = ('undefined' != typeof Symbol && Symbol.for && Symbol.for('react.element')) || 60103,
				Yo =
					/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|shape|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
				Vo = 'undefined' != typeof document,
				$o =
					((Z.prototype.isReactComponent = {}),
					['componentWillMount', 'componentWillReceiveProps', 'componentWillUpdate'].forEach(
						function (t) {
							Object.defineProperty(Z.prototype, t, {
								configurable: !0,
								get: function () {
									return this['UNSAFE_' + t];
								},
								set: function (e) {
									Object.defineProperty(this, t, { configurable: !0, writable: !0, value: e });
								}
							});
						}
					),
					H.event);
			function Xo() {}
			function qo() {
				return this.cancelBubble;
			}
			function Ko() {
				return this.defaultPrevented;
			}
			H.event = function (e) {
				return (
					((e = $o ? $o(e) : e).persist = Xo),
					(e.isPropagationStopped = qo),
					(e.isDefaultPrevented = Ko),
					(e.nativeEvent = e)
				);
			};
			var Zo = {
					configurable: !0,
					get: function () {
						return this.class;
					}
				},
				Jo = H.vnode,
				Qo =
					((H.vnode = function (e) {
						var t,
							n = e.type,
							r = e.props,
							o = r;
						if ('string' == typeof n) {
							var i,
								a = -1 === n.indexOf('-'),
								o = {};
							for (i in r) {
								var l = r[i];
								(Vo && 'children' === i && 'noscript' === n) ||
									('value' === i && 'defaultValue' in r && null == l) ||
									('defaultValue' === i && 'value' in r && null == r.value
										? (i = 'value')
										: 'download' === i && !0 === l
											? (l = '')
											: /ondoubleclick/i.test(i)
												? (i = 'ondblclick')
												: /^onchange(textarea|input)/i.test(i + n) &&
													  ((t = r.type),
													  !(
															'undefined' != typeof Symbol && 'symbol' == typeof Symbol()
																? /fil|che|rad/i
																: /fil|che|ra/i
													  ).test(t))
													? (i = 'oninput')
													: /^onfocus$/i.test(i)
														? (i = 'onfocusin')
														: /^onblur$/i.test(i)
															? (i = 'onfocusout')
															: /^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(i)
																? (i = i.toLowerCase())
																: a && Yo.test(i)
																	? (i = i.replace(/[A-Z0-9]/, '-$&').toLowerCase())
																	: null === l && (l = void 0),
									/^oninput$/i.test(i) && ((i = i.toLowerCase()), o[i]) && (i = 'oninputCapture'),
									(o[i] = l));
							}
							'select' == n &&
								o.multiple &&
								Array.isArray(o.value) &&
								(o.value = v(r.children).forEach(function (e) {
									e.props.selected = -1 != o.value.indexOf(e.props.value);
								})),
								'select' == n &&
									null != o.defaultValue &&
									(o.value = v(r.children).forEach(function (e) {
										e.props.selected = o.multiple
											? -1 != o.defaultValue.indexOf(e.props.value)
											: o.defaultValue == e.props.value;
									})),
								(e.props = o),
								r.class != r.className &&
									((Zo.enumerable = 'className' in r),
									null != r.className && (o.class = r.className),
									Object.defineProperty(o, 'className', Zo));
						}
						(e.$$typeof = Uo), Jo && Jo(e);
					}),
					H.__r);
			function ei(e) {
				let { index: t, exceedCount: n, isClicked: r, onClickExceedCount: o } = e;
				e = { display: r ? 'none' : '' };
				return n && !r
					? F(
							'span',
							{ className: O('weekday-exceed-in-week'), onClick: () => o(t), style: e },
							F(V, { template: 'weekGridFooterExceed', param: n })
						)
					: null;
			}
			function ti(e) {
				var { isClicked: e, isClickedIndex: t, onClickCollapseButton: n } = e;
				return e && t
					? F(
							'span',
							{ className: O('weekday-exceed-in-week'), onClick: n },
							F(V, { template: 'collapseBtnTitle' })
						)
					: null;
			}
			function ni(e) {
				var {
						width: e,
						left: t,
						index: n,
						exceedCount: r,
						isClicked: o,
						onClickExceedCount: i,
						isClickedIndex: a,
						onClickCollapseButton: l,
						isLastCell: c
					} = e,
					{ borderRight: s, backgroundColor: u } = L(N((e) => e.week.dayGrid, [])),
					e = { width: e, left: t, borderRight: c ? 'none' : s, backgroundColor: u };
				return F(
					'div',
					{ className: O('panel-grid'), style: e },
					F(ei, { index: n, exceedCount: r, isClicked: o, onClickExceedCount: i }),
					F(ti, { isClickedIndex: a, isClicked: o, onClickCollapseButton: l })
				);
			}
			H.__r = function (e) {
				Qo && Qo(e), e.__c;
			};
			const ri = Po(function (e) {
				let {
					uiModels: c,
					weekDates: t,
					narrowWeekend: n,
					height: s,
					clickedIndex: u,
					isClickedCount: d,
					onClickExceedCount: p,
					onClickCollapseButton: f
				} = e;
				const { widthList: h, leftList: m } = fo(t, n, 100),
					g = t.length - 1;
				return F(
					K,
					null,
					t.map((e, t) => {
						var n,
							r = P(h[t]),
							o = P(m[t]),
							i = po(
								c.filter(
									((n = e),
									(e) => {
										var t = M(e.getStarts()),
											e = M(e.getEnds());
										return t <= n && n <= e;
									})
								),
								s,
								co + 2
							),
							a = t === u,
							l = t === g;
						return F(ni, {
							key: 'panel-grid-'.concat(e.getDate()),
							width: r,
							left: o,
							index: t,
							exceedCount: i,
							isClicked: d,
							onClickExceedCount: p,
							isClickedIndex: a,
							onClickCollapseButton: f,
							isLastCell: l
						});
					})
				);
			});
			function oi(e) {
				e = e.onMouseDown;
				return F(
					'span',
					{
						className: ''.concat(O('weekday-resize-handle'), ' ').concat(O('handle-y')),
						onMouseDown: e,
						'data-testid': 'horizontal-event-resize-icon'
					},
					F('i', { className: ''.concat(O('icon'), ' ').concat(O('ic-handle-y')) })
				);
			}
			fc(7694);
			const ii = ce(null),
				ai = ii.Provider,
				li = () => {
					var e = Se(ii);
					if (Ft()(e)) throw new Error('LayoutContainerProvider is not found');
					return e;
				},
				ci = (e, t) => 'event/'.concat(e, '/resize/').concat(t),
				si = (e, t) => 'event/'.concat(e, '/move/').concat(t),
				ui = (e) => 'gridSelection/'.concat(e);
			function di(t) {
				return U(N((e) => e.calendar.calendars.find((e) => e.id === t), [t]));
			}
			function pi(e) {
				const t = di(null != (e = null == e ? void 0 : e.calendarId) ? e : null);
				return I(
					() => ({
						color: null == t ? void 0 : t.color,
						borderColor: null == t ? void 0 : t.borderColor,
						backgroundColor: null == t ? void 0 : t.backgroundColor,
						dragBackgroundColor: null == t ? void 0 : t.dragBackgroundColor
					}),
					[t]
				);
			}
			let fi;
			(fi = fi || {}).ESCAPE = 'Escape';
			const hi = { [fi.ESCAPE]: 27 };
			function mi(e, t) {
				const n = hr(),
					r = W(e),
					o = W(t);
				B(() => {
					(r.current = e), (o.current = t);
				}, [e, t]),
					B(
						() =>
							n.subscribe(
								(e) => o.current(e),
								(e) => r.current(e)
							),
						[e, n]
					);
			}
			function gi(a, e) {
				let {
					onInit: t,
					onDragStart: l,
					onDrag: c,
					onMouseUp: n,
					onPressESCKey: r
				} = 1 < arguments.length && void 0 !== e ? e : {};
				const { initDrag: o, setDragging: s, cancelDrag: i, reset: u } = Y('dnd'),
					d = hr(),
					p = W(d.getState().dnd),
					[f, h] =
						(mi(br, (e) => {
							p.current = e;
						}),
						z(!1)),
					m = W(null),
					g = W(null),
					v = W(null),
					y = N(
						(e) => {
							0 === e.button &&
								(e.currentTarget &&
									(e.currentTarget.ondragstart = function () {
										return !1;
									}),
								e.preventDefault(),
								h(!0),
								o({ draggingItemType: a, initX: e.clientX, initY: e.clientY }),
								null != t) &&
								t(e, p.current);
						},
						[t, a, o]
					),
					w = N(
						(e) => {
							var t,
								{ initX: n, initY: r, draggingState: o, draggingItemType: i } = p.current;
							i !== a
								? (h(!1), u())
								: (!j(n) ||
										!j(r) ||
										((i = r), (r = e.clientX), (t = e.clientY), 3 <= Math.abs(n - r)) ||
										3 <= Math.abs(i - t)) &&
									(o <= G.INIT
										? (s({ x: e.clientX, y: e.clientY }), null != l && l(e, p.current))
										: (s({ x: e.clientX, y: e.clientY }), null != c && c(e, p.current)));
						},
						[a, c, l, s, u]
					),
					_ = N(
						(e) => {
							e.stopPropagation(), f && (null != n && n(e, p.current), h(!1), u());
						},
						[f, n, u]
					),
					b = N(
						(e) => {
							var t, n;
							(t = e),
								(n = fi.ESCAPE),
								(t.key ? t.key === n : t.keyCode === hi[n]) &&
									(h(!1), i(), null != r) &&
									r(e, p.current);
						},
						[r, i]
					);
				return (
					B(() => {
						(m.current = w), (g.current = _), (v.current = b);
					}, [b, w, _]),
					B(() => {
						const e = (e) => {
								var t;
								return null == (t = m.current) ? void 0 : t.call(m, e);
							},
							t = (e) => {
								var t;
								return null == (t = g.current) ? void 0 : t.call(g, e);
							},
							n = (e) => {
								var t;
								return null == (t = v.current) ? void 0 : t.call(v, e);
							};
						return f
							? (document.addEventListener('mousemove', e),
								document.addEventListener('mouseup', t),
								document.addEventListener('keydown', n),
								() => {
									document.removeEventListener('mousemove', e),
										document.removeEventListener('mouseup', t),
										document.removeEventListener('keydown', n);
								})
							: nr;
					}, [f, u]),
					y
				);
			}
			function vi(e, t) {
				return e ? t : void 0;
			}
			function yi(e) {
				return { vertical: e ? 5 : 2, horizontal: 8 };
			}
			const wi = {
				eventBody: O('weekday-event'),
				eventTitle: O('weekday-event-title'),
				eventDot: O('weekday-event-dot'),
				moveEvent: O('dragging--move-event'),
				resizeEvent: O('dragging--resize-horizontal-event')
			};
			function _i(e) {
				let {
					flat: u = !1,
					uiModel: d,
					eventHeight: p,
					headerHeight: f,
					resizingWidth: h = null,
					movingLeft: m = null
				} = e;
				const t = U(wr)['currentView'],
					{ useDetailPopup: n, isReadOnly: r } = U(_r),
					o = Y('dnd')['setDraggingEventUIModel'],
					i = Y('popup')['showDetailPopup'],
					a = li(),
					l = $(),
					s = pi(d.model),
					[g, c] = z(!1),
					v = W(null),
					{ isReadOnly: y, id: w, calendarId: _ } = d.model,
					b = !r && !y && A(h) && A(m),
					D = (e) => {
						o(d), null != a && a.classList.add(e);
					},
					x = (e) => {
						c(!1), null != a && a.classList.remove(e);
					},
					k =
						(mi(br, (e) => {
							var { draggingEventUIModel: e, draggingState: t } = e;
							t === G.DRAGGING && (null == e ? void 0 : e.cid()) === d.cid() && A(h) && A(m)
								? c(!0)
								: c(!1);
						}),
						B(() => {
							b && l.fire('afterRenderEvent', d.model.toEventObject());
						}, []),
						gi(ci('dayGrid', ''.concat(d.cid())), {
							onDragStart: () => D(wi.resizeEvent),
							onMouseUp: () => x(wi.resizeEvent),
							onPressESCKey: () => x(wi.resizeEvent)
						})),
					S = gi(si('dayGrid', ''.concat(d.cid())), {
						onDragStart: () => {
							b && D(wi.moveEvent);
						},
						onMouseUp: (e, t) => {
							(t = t.draggingState), x(wi.moveEvent), (t = t <= G.INIT);
							t &&
								n &&
								v.current &&
								i({ event: d.model, eventRect: v.current.getBoundingClientRect() }, u),
								t && l.fire('clickEvent', { event: d.model.toEventObject(), nativeEvent: e });
						},
						onPressESCKey: () => x(wi.moveEvent)
					}),
					C = !g && 'month' === t && 'time' === d.model.category && _n(d.model.start, d.model.end),
					E = !b || u || g || d.exceedRight,
					I = (function () {
						var {
								flat: e,
								uiModel: t,
								resizingWidth: n,
								movingLeft: r,
								eventHeight: o,
								headerHeight: i
							} = {
								uiModel: d,
								eventHeight: p,
								headerHeight: f,
								flat: u,
								movingLeft: m,
								resizingWidth: h
							},
							{ top: t, left: a, width: l, model: c } = t,
							s = yi(e),
							e = e
								? {}
								: {
										width: n || P(l),
										left: P(null != r ? r : a),
										top: (t - 1) * (o + s.vertical) + i,
										position: 'absolute'
									};
						return Object.assign(e, c.customStyle);
					})(),
					M = (function () {
						var {
								uiModel: e,
								flat: t,
								eventHeight: n,
								isDraggingTarget: r,
								calendarColor: o
							} = { uiModel: d, flat: u, eventHeight: p, isDraggingTarget: g, calendarColor: s },
							{ exceedLeft: i, exceedRight: a } = e,
							{ color: e, backgroundColor: o, dragBackgroundColor: l, borderColor: c } = Mt(e, o),
							o = {
								color: e,
								backgroundColor: r ? l : o,
								borderLeft: i ? 'none' : '3px solid '.concat(c),
								borderRadius:
									((e = (e = a) ? 0 : '2px'),
									''
										.concat((l = (l = i) ? 0 : '2px'), ' ')
										.concat(e, ' ')
										.concat(e, ' ')
										.concat(l)),
								overflow: 'hidden',
								height: n,
								lineHeight: Et(n),
								opacity: r ? 0.5 : 1
							},
							c = yi(t);
						return t
							? { marginTop: c.vertical, ...o }
							: { marginLeft: i ? 0 : c.horizontal, marginRight: a ? 0 : c.horizontal, ...o };
					})();
				return F(
					'div',
					{
						className: O('weekday-event-block', {
							'weekday-exceed-left': d.exceedLeft,
							'weekday-exceed-right': d.exceedRight
						}),
						style: I,
						'data-testid': vi(
							b,
							((e = d),
							(N = (e = e['model']).calendarId ? ''.concat(e.calendarId, '-') : ''),
							(T = e.id ? ''.concat(e.id, '-') : ''),
							''.concat(N).concat(T).concat(e.title))
						),
						'data-calendar-id': _,
						'data-event-id': w,
						ref: v
					},
					F(
						'div',
						{
							className: wi.eventBody,
							style: {
								...M,
								backgroundColor: C ? null : M.backgroundColor,
								borderLeft: C ? null : M.borderLeft
							},
							onMouseDown: (e) => {
								e.stopPropagation(), S(e);
							}
						},
						C
							? F('span', { className: wi.eventDot, style: { backgroundColor: M.backgroundColor } })
							: null,
						F(
							'span',
							{ className: wi.eventTitle },
							F(V, { template: d.model.category, param: d.model })
						),
						E
							? null
							: F(oi, {
									onMouseDown: (e) => {
										e.stopPropagation(), b && k(e);
									}
								})
					)
				);
				var N, T;
			}
			function bi(e, t) {
				const n = W(e);
				B(() => {
					n.current = e;
				}, [e]),
					B(() => {
						t && n.current();
					}, [t]);
			}
			function Di(t) {
				const [e, n] = z(null);
				return (
					mi(br, (e) => {
						j(e.x) && j(e.y) && (e = t({ clientX: e.x, clientY: e.y })) && n(e);
					}),
					[e, N(() => n(null), [])]
				);
			}
			function xi(a, l) {
				const [e, c] = z(!1),
					[t, s] = z(!1),
					[u, d] = z(null);
				return (
					mi(br, (e) => {
						var { draggingItemType: e, draggingEventUIModel: t, draggingState: n } = e,
							r =
								((r = a),
								(o = l),
								!A((e = e)) &&
								((i = e), new RegExp('^event/'.concat(r, '/').concat(o, '/\\d+$')).test(i))
									? nn(e.split('/'))
									: null),
							o = Number(r) === (null == t ? void 0 : t.cid()),
							i = n === G.IDLE,
							e = n === G.CANCELED;
						A(u) && o && d(t), j(u) && (i || e) && (c(!0), s(e));
					}),
					{
						isDraggingEnd: e,
						isDraggingCanceled: t,
						draggingEvent: u,
						clearDraggingEvent: () => {
							d(null), c(!1), s(!1);
						}
					}
				);
			}
			function ki(e) {
				var { rowStyleInfo: f, gridPositionFinder: h } = e,
					{ movingEvent: e, movingLeft: t } = (function () {
						let { rowStyleInfo: t, gridPositionFinder: e } = {
							rowStyleInfo: f,
							gridPositionFinder: h
						};
						const r = $(),
							{
								isDraggingEnd: n,
								isDraggingCanceled: o,
								draggingEvent: i,
								clearDraggingEvent: a
							} = xi('dayGrid', 'move'),
							l = W(null),
							[c, s] = Di(e),
							u = (null != c ? c : {})['columnIndex'],
							d = I(
								() =>
									A(i)
										? null
										: t.findIndex((e) => {
												e = e.left;
												return e === i.left;
											}),
								[t, i]
							),
							p = I(() => {
								var e;
								return A(u) || A(l.current) || A(d)
									? null
									: (e = d + u - l.current) < 0
										? -t[-e].left
										: t[e].left;
							}, [u, t, d]);
						return (
							B(() => {
								A(l.current) && j(u) && (l.current = u);
							}, [u]),
							bi(() => {
								var e, t, n;
								!o &&
									j(i) &&
									j(u) &&
									j(p) &&
									u !== l.current &&
									j(l.current) &&
									((e = u - l.current),
									(t = new E(i.model.getStarts())),
									(n = new E(i.model.getEnds())),
									t.addDate(e),
									n.addDate(e),
									r.fire('beforeUpdateEvent', {
										event: i.model.toEventObject(),
										changes: { start: t, end: n }
									})),
									a(),
									s(),
									(l.current = null);
							}, n),
							I(() => ({ movingEvent: i, movingLeft: p }), [p, i])
						);
					})();
				return A(e) ? null : F(_i, { uiModel: e, eventHeight: co, headerHeight: 0, movingLeft: t });
			}
			function Si(e) {
				var { weekDates: e, gridColWidthMap: t, gridPositionFinder: n } = e,
					{ resizingEvent: e, resizingWidth: t } = (function (e) {
						let { weekDates: n, gridColWidthMap: t, gridPositionFinder: r } = e;
						const o = $(),
							{
								isDraggingEnd: i,
								isDraggingCanceled: a,
								draggingEvent: l,
								clearDraggingEvent: c
							} = xi('dayGrid', 'resize'),
							[s, u] = Di(r),
							d = (null != s ? s : {})['columnIndex'],
							p = I(() => {
								return l
									? ((t = n), { start: mo((e = l).getStarts(), t), end: mo(e.getEnds(), t) })
									: { start: -1, end: -1 };
								var e, t;
							}, [n, l]),
							f = I(() => (-1 < p.start && j(d) ? t[p.start][d] : null), [d, t, p.start]);
						return (
							bi(() => {
								var e;
								!a &&
									j(l) &&
									j(d) &&
									p.start <= d &&
									p.end !== d &&
									((e = n[d]),
									o.fire('beforeUpdateEvent', {
										event: l.model.toEventObject(),
										changes: { end: e }
									})),
									u(),
									c();
							}, i),
							I(() => ({ resizingEvent: l, resizingWidth: f }), [f, l])
						);
					})({ weekDates: e, gridColWidthMap: t, gridPositionFinder: n });
				return A(e)
					? null
					: F(_i, { uiModel: e, eventHeight: co, headerHeight: 0, resizingWidth: t });
			}
			function Ci() {
				const [e, t] = z(null);
				return [
					e,
					N((e) => {
						e && t(e);
					}, [])
				];
			}
			function Ei(t, n) {
				const [e, r] = z(0),
					[o, i] = z(!1),
					a = Y('weekViewLayout')['updateDayGridRowHeight'];
				return {
					clickedIndex: e,
					isClickedCount: o,
					onClickExceedCount: N(
						(e) => {
							i(!0), r(e), a({ rowName: n, height: (t + 1) * co });
						},
						[n, t, a]
					),
					onClickCollapseButton: N(() => {
						i(!1), a({ rowName: n, height: kt });
					}, [n, a])
				};
			}
			function Ii(e) {
				let { onClick: l, onDblClick: t, delay: c = 300 } = e;
				const n = W(nr),
					s = (e) => {
						n.current = e;
					},
					u = () => {
						n.current();
					};
				return (
					B(() => u, []),
					[
						(e) => {
							u();
							{
								var r = l.bind(null, e),
									o = c,
									i = s;
								let n;
								const a = (e) => {
										if (e - (n = n || e) >= o) r(), i(nr);
										else {
											const t = requestAnimationFrame(a);
											i(() => cancelAnimationFrame(t));
										}
									},
									t = requestAnimationFrame(a);
								i(() => cancelAnimationFrame(t));
							}
						},
						(e) => {
							u(), t(e);
						}
					]
				);
			}
			const Mi = { dayGridMonth: 'month', dayGridWeek: 'allday', timeGrid: 'time' };
			function Ni(e) {
				let {
					type: i,
					selectionSorter: t,
					dateGetter: a,
					dateCollection: l,
					gridPositionFinder: n
				} = e;
				const { useFormPopup: c, gridSelection: r } = U(_r),
					{ enableDblClick: o, enableClick: s } = r,
					{ setGridSelection: u, addGridSelection: d, clearAll: p } = Y('gridSelection'),
					{ hideAllPopup: f, showFormPopup: h } = Y('popup'),
					m = $(),
					g = li(),
					[v, y] = z(null),
					[w, _] = z(null),
					b = W(!1),
					D = W(null),
					x =
						(mi(
							N((e) => e.gridSelection[i], [i]),
							(e) => {
								D.current = e;
							}
						),
						mi(br, (e) => {
							var { draggingState: e, draggingItemType: t } = e;
							b.current = t === x && e >= G.INIT;
						}),
						ui(i)),
					k = (e) => {
						e = n(e);
						j(w) && j(e) && u(i, t(w, e));
					},
					[S, C] = Ii({
						onClick: (e) => {
							s && E(e, !0);
						},
						onDblClick: (e) => {
							o && E(e, !0);
						},
						delay: 250
					}),
					E = (e, t) => {
						if ((t && k(e), j(D.current))) {
							[n, r] = [...a(l, D.current)];
							const [t, o] = n < r ? [n, r] : [r, n];
							if (c && j(v)) {
								const a = { top: (e.clientY + v.y) / 2, left: (e.clientX + v.x) / 2 };
								h({
									isCreationPopup: !0,
									title: '',
									location: '',
									start: t,
									end: o,
									isAllday: 'timeGrid' !== i,
									isPrivate: !1,
									popupArrowPointPosition: a,
									close: p
								});
							}
							(r = '.'.concat(O(Mi[i]), '.').concat(O('grid-selection'))),
								(r = Array.from(null != (n = null == g ? void 0 : g.querySelectorAll(r)) ? n : []));
							m.fire('selectDateTime', {
								start: t.toDate(),
								end: o.toDate(),
								isAllday: 'timeGrid' !== i,
								nativeEvent: e,
								gridSelectionElements: r
							});
						}
						var n, r;
					},
					I = N(() => {
						y(null), _(null), u(i, null);
					}, [u, i]),
					M = gi(x, {
						onInit: (e) => {
							c && (y({ x: e.clientX, y: e.clientY }), f());
							e = n(e);
							j(e) && _(e), c || d(i, D.current);
						},
						onDragStart: (e) => {
							k(e);
						},
						onDrag: (e) => {
							b.current && k(e);
						},
						onMouseUp: (e, t) => {
							var n,
								r,
								t = t['draggingState'],
								t = (e.stopPropagation(), t <= G.INIT);
							t
								? ((r = (n = e).detail <= 1), (s || (o && !r)) && (s ? (r ? S : C)(n) : E(n, !0)))
								: E(e, t);
						},
						onPressESCKey: I
					});
				return B(() => I, [I]), M;
			}
			function Ti(e) {
				let {
					events: t,
					weekDates: n,
					height: r = kt,
					options: o = {},
					rowStyleInfo: i,
					gridColWidthMap: a
				} = e;
				const l = U(_r)['isReadOnly'],
					c = L(Ar),
					[s, u] = Ci(),
					{ narrowWeekend: d = !1, startDayOfWeek: p = an.SUN } = o,
					f = I(
						() =>
							Math.max(
								0,
								...t.map((e) => {
									e = e.top;
									return e;
								})
							),
						[t]
					),
					h = I(
						() =>
							Do({
								container: s,
								rowsCount: 1,
								columnsCount: n.length,
								narrowWeekend: d,
								startDayOfWeek: p
							}),
						[s, n.length, d, p]
					),
					{
						clickedIndex: m,
						isClickedCount: g,
						onClickExceedCount: v,
						onClickCollapseButton: y
					} = Ei(f, 'allday'),
					w = I(
						() =>
							t.filter(uo(r, co + 2)).map((e) =>
								F(_i, {
									key: 'allday-DayEvent-'.concat(e.cid()),
									uiModel: e,
									eventHeight: co,
									headerHeight: 0
								})
							),
						[t, r]
					),
					_ = Ni({
						type: 'dayGridWeek',
						gridPositionFinder: h,
						dateCollection: n,
						selectionSorter: Io.sortSelection,
						dateGetter: Io.getDateFromCollection
					});
				return F(
					K,
					null,
					F(
						'div',
						{ className: O('panel-title'), style: c },
						F(V, { template: 'alldayTitle', param: 'alldayTitle' })
					),
					F(
						'div',
						{
							className: O('allday-panel'),
							ref: u,
							onMouseDown: (e) => {
								var t = e.target;
								!l && t.classList.contains(O('panel-grid')) && _(e);
							}
						},
						F(
							'div',
							{ className: O('panel-grid-wrapper') },
							F(ri, {
								uiModels: t,
								weekDates: n,
								narrowWeekend: d,
								height: r,
								clickedIndex: m,
								isClickedCount: g,
								onClickExceedCount: v,
								onClickCollapseButton: y
							})
						),
						F('div', { className: O('panel-allday-events') }, w),
						F(Si, { weekDates: n, gridPositionFinder: h, gridColWidthMap: a }),
						F(ki, { rowStyleInfo: i, gridPositionFinder: h }),
						F(No, { weekDates: n, narrowWeekend: d })
					)
				);
			}
			function Oi(e) {
				let { events: t, weekDates: n, category: r, height: o = kt, options: i = {} } = e;
				var e = L(Ar),
					a = I(
						() =>
							Math.max(
								0,
								...t.map((e) => {
									e = e.top;
									return e;
								})
							),
						[t]
					),
					{ narrowWeekend: l = !1 } = i,
					c = ''.concat(r, 'Title'),
					{
						clickedIndex: a,
						isClickedCount: s,
						onClickExceedCount: u,
						onClickCollapseButton: d
					} = Ei(a, r),
					p = I(
						() =>
							t.filter(uo(o, co + 2)).map((e) =>
								F(_i, {
									key: ''.concat(r, '-DayEvent-').concat(e.cid()),
									uiModel: e,
									eventHeight: co,
									headerHeight: 0
								})
							),
						[r, t, o]
					);
				return F(
					K,
					null,
					F('div', { className: O('panel-title'), style: e }, F(V, { template: c, param: r })),
					F(
						'div',
						{ className: O('allday-panel') },
						F(
							'div',
							{ className: O('panel-grid-wrapper') },
							F(ri, {
								uiModels: t,
								weekDates: n,
								narrowWeekend: l,
								height: o,
								clickedIndex: a,
								isClickedCount: s,
								onClickExceedCount: u,
								onClickCollapseButton: d
							})
						),
						F('div', { className: O('panel-'.concat(r, '-events')) }, p)
					)
				);
			}
			const c = {
				detailItem: O('detail-item'),
				detailItemIndent: O('detail-item', 'detail-item-indent'),
				detailItemSeparate: O('detail-item', 'detail-item-separate'),
				sectionDetail: O('popup-section', 'section-detail'),
				content: O('content'),
				locationIcon: O('icon', 'ic-location-b'),
				repeatIcon: O('icon', 'ic-repeat-b'),
				userIcon: O('icon', 'ic-user-b'),
				stateIcon: O('icon', 'ic-state-b'),
				calendarDotIcon: O('icon', 'calendar-dot')
			};
			function Pi(e) {
				var e = e['event'],
					{ location: t, recurrenceRule: n, attendees: r, state: o, calendarId: i, body: a } = e,
					i = di(i);
				return F(
					'div',
					{ className: c.sectionDetail },
					t &&
						F(
							'div',
							{ className: c.detailItem },
							F('span', { className: c.locationIcon }),
							F(
								'span',
								{ className: c.content },
								F(V, { template: 'popupDetailLocation', param: e, as: 'span' })
							)
						),
					n &&
						F(
							'div',
							{ className: c.detailItem },
							F('span', { className: c.repeatIcon }),
							F(
								'span',
								{ className: c.content },
								F(V, { template: 'popupDetailRecurrenceRule', param: e, as: 'span' })
							)
						),
					r &&
						F(
							'div',
							{ className: c.detailItemIndent },
							F('span', { className: c.userIcon }),
							F(
								'span',
								{ className: c.content },
								F(V, { template: 'popupDetailAttendees', param: e, as: 'span' })
							)
						),
					o &&
						F(
							'div',
							{ className: c.detailItem },
							F('span', { className: c.stateIcon }),
							F(
								'span',
								{ className: c.content },
								F(V, { template: 'popupDetailState', param: e, as: 'span' })
							)
						),
					i &&
						F(
							'div',
							{ className: c.detailItem },
							F('span', {
								className: c.calendarDotIcon,
								style: {
									backgroundColor: null != (t = null == i ? void 0 : i.backgroundColor) ? t : ''
								}
							}),
							F(
								'span',
								{ className: c.content },
								null != (n = null == i ? void 0 : i.name) ? n : ''
							)
						),
					a &&
						F(
							'div',
							{ className: c.detailItemSeparate },
							F(
								'span',
								{ className: c.content },
								F(V, { template: 'popupDetailBody', param: e, as: 'span' })
							)
						)
				);
			}
			const Ai = {
				sectionHeader: O('popup-section', 'section-header'),
				content: O('content'),
				eventTitle: O('event-title')
			};
			function Ri(e) {
				e = e.event;
				return F(
					'div',
					{ className: Ai.sectionHeader },
					F(
						'div',
						{ className: Ai.eventTitle },
						F(V, { template: 'popupDetailTitle', param: e, as: 'span' })
					),
					F(
						'div',
						{ className: Ai.content },
						F(V, { template: 'popupDetailDate', param: e, as: 'span' })
					)
				);
			}
			const Li = O('see-more-popup-slot'),
				Hi = O('event-form-popup-slot'),
				Fi = O('event-detail-popup-slot'),
				zi = ['isPrivate', 'isAllday', 'isPending', 'isFocused', 'isVisible', 'isReadOnly'];
			let Bi, Wi;
			((e = Bi = Bi || {}).right = 'right'),
				(e.left = 'left'),
				((t = Wi = Wi || {}).top = 'top'),
				(t.bottom = 'bottom');
			const ji = ce(null);
			function Gi(e) {
				var e = e['children'],
					[t, n] = Ci(),
					[r, o] = Ci(),
					[i, a] = Ci(),
					[l, c] = Ci(),
					t = { container: t, seeMorePopupSlot: r, formPopupSlot: i, detailPopupSlot: l };
				return F(
					ji.Provider,
					{ value: t },
					e,
					F(
						'div',
						{ ref: n, className: O('floating-layer') },
						F('div', { ref: o, className: Li }),
						F('div', { ref: a, className: Hi }),
						F('div', { ref: c, className: Fi })
					)
				);
			}
			const Ui = (e) => {
				var t = Se(ji);
				if (Ft()(t)) throw new Error('FloatingLayerProvider is not found');
				return null != (t = null == t ? void 0 : t[e]) ? t : null;
			};
			function Yi(e, t, n) {
				return e + n.height > t.top + t.height;
			}
			function Vi(e, t, n) {
				return e + n.width > t.left + t.width;
			}
			const $i = (e) => e.popup[u.Form],
				Xi = (e) => e.popup[u.Detail],
				qi = (e) => e.popup[u.SeeMore],
				X = {
					popupContainer: O('popup-container'),
					detailContainer: O('detail-container'),
					topLine: O('popup-top-line'),
					border: O('popup-arrow-border'),
					fill: O('popup-arrow-fill'),
					sectionButton: O('popup-section', 'section-button'),
					content: O('content'),
					editIcon: O('icon', 'ic-edit'),
					deleteIcon: O('icon', 'ic-delete'),
					editButton: O('edit-button'),
					deleteButton: O('delete-button'),
					verticalLine: O('vertical-line')
				};
			function Ki() {
				const e = U(_r)['useFormPopup'],
					t = U(Xi),
					{ event: n, eventRect: c } = null != t ? t : {},
					{ showFormPopup: r, hideDetailPopup: o } = Y('popup'),
					i = pi(n),
					s = li(),
					a = Ui('detailPopupSlot'),
					l = $(),
					u = W(null),
					[d, p] = z({}),
					[f, h] = z(0),
					[m, g] = z(Bi.left),
					v = I(() => O('popup-arrow', { right: m === Bi.right, left: m === Bi.left }), [m]);
				if (
					(ke(() => {
						if (u.current && c && s) {
							const n = s.getBoundingClientRect(),
								o = u.current.getBoundingClientRect(),
								[r, i] = (function (e, t) {
									let n = e.top + e.height / 2 - o.height / 2,
										r = e.left + e.width;
									return (
										Yi(n, t, o) && (n = t.top + t.height - o.height),
										Vi(r, t, o) && (r = e.left - o.width),
										[Math.max(n, t.top) + window.scrollY, Math.max(r, t.left) + window.scrollX]
									);
								})(c, n),
								{ top: a, direction: l } =
									((e = c),
									(t = o),
									{
										top: e.top + e.height / 2 + window.scrollY,
										direction: e.left + e.width + t.width > n.left + n.width ? Bi.right : Bi.left
									});
							p({ top: r, left: i }), h(a - r - 8), g(l);
						}
						var e, t;
					}, [c, s]),
					A(n) || A(c) || A(a))
				)
					return null;
				const {
						title: y = '',
						isAllday: w = !1,
						start: _ = new E(),
						end: b = new E(),
						location: D,
						state: x,
						isReadOnly: k,
						isPrivate: S
					} = n,
					C = { top: c.top + c.height / 2, left: c.left + c.width / 2 };
				return Go(
					F(
						'div',
						{ role: 'dialog', className: X.popupContainer, ref: u, style: d },
						F(
							'div',
							{ className: X.detailContainer },
							F(Ri, { event: n }),
							F(Pi, { event: n }),
							!k &&
								F(
									'div',
									{ className: X.sectionButton },
									F(
										'button',
										{
											type: 'button',
											className: X.editButton,
											onClick: () => {
												e
													? r({
															isCreationPopup: !1,
															event: n,
															title: y,
															location: D,
															start: _,
															end: b,
															isAllday: w,
															isPrivate: S,
															eventState: x,
															popupArrowPointPosition: C
														})
													: l.fire('beforeUpdateEvent', { event: n.toEventObject(), changes: {} });
											}
										},
										F('span', { className: X.editIcon }),
										F('span', { className: X.content }, F(V, { template: 'popupEdit', as: 'span' }))
									),
									F('div', { className: X.verticalLine }),
									F(
										'button',
										{
											type: 'button',
											className: X.deleteButton,
											onClick: () => {
												l.fire('beforeDeleteEvent', n.toEventObject()), o();
											}
										},
										F('span', { className: X.deleteIcon }),
										F(
											'span',
											{ className: X.content },
											F(V, { template: 'popupDelete', as: 'span' })
										)
									)
								)
						),
						F('div', { className: X.topLine, style: { backgroundColor: i.backgroundColor } }),
						F(
							'div',
							{ className: v },
							F('div', { className: X.border, style: { top: f } }, F('div', { className: X.fill }))
						)
					),
					a
				);
			}
			const Zi = {
				dropdownMenu: O('dropdown-menu'),
				dropdownMenuItem: O('dropdown-menu-item'),
				dotIcon: O('icon', 'dot'),
				content: O('content')
			};
			function Ji(e) {
				let { index: t, name: n, backgroundColor: r, onClick: o } = e;
				return F(
					'li',
					{ className: Zi.dropdownMenuItem, onClick: (e) => o(e, t) },
					F('span', { className: Zi.dotIcon, style: { backgroundColor: r } }),
					F('span', { className: Zi.content }, n)
				);
			}
			function Qi(e) {
				let { calendars: t, setOpened: n, onChangeIndex: r } = e;
				const o = (e, t) => {
					e.stopPropagation(), n(!1), r(t);
				};
				return F(
					'ul',
					{ className: Zi.dropdownMenu },
					t.map((e, t) => {
						var { name: e, backgroundColor: n = '000' } = e;
						return F(Ji, {
							key: 'dropdown-'.concat(e, '-').concat(t),
							index: t,
							name: e,
							backgroundColor: n,
							onClick: o
						});
					})
				);
			}
			function ea(e) {
				var { children: e, classNames: t = [], onClick: n = nr } = e;
				return F('div', { className: O('popup-section', ...t), onClick: n }, e);
			}
			function ta() {
				const [e, t] = z(!1);
				return { isOpened: e, setOpened: t, toggleDropdown: () => t((e) => !e) };
			}
			let k;
			((e = k = k || {}).init = 'init'),
				(e.setCalendarId = 'setCalendarId'),
				(e.setTitle = 'setTitle'),
				(e.setLocation = 'setLocation'),
				(e.setPrivate = 'setPrivate'),
				(e.setAllday = 'setAllday'),
				(e.setState = 'setState');
			const na = {
				title: '',
				location: '',
				isAllday: !(e.reset = 'reset'),
				isPrivate: !1,
				state: 'Busy'
			};
			function ra(e, t) {
				switch (t.type) {
					case k.init:
						return { ...na, ...t.event };
					case k.setCalendarId:
						return { ...e, calendarId: t.calendarId };
					case k.setTitle:
						return { ...e, title: t.title };
					case k.setLocation:
						return { ...e, location: t.location };
					case k.setPrivate:
						return { ...e, isPrivate: t.isPrivate };
					case k.setAllday:
						return { ...e, isAllday: t.isAllday };
					case k.setState:
						return { ...e, state: t.state };
					case k.reset:
						return { ...e, ...na };
					default:
						return e;
				}
			}
			const oa = {
				popupSection: ['dropdown-section', 'calendar-section'],
				popupSectionItem: O('popup-section-item', 'popup-button'),
				dotIcon: O('icon', 'dot'),
				content: O('content', 'event-calendar')
			};
			function ia(e) {
				let { calendars: t, selectedCalendarId: n, formStateDispatch: r } = e;
				var { isOpened: e, setOpened: o, toggleDropdown: i } = ta(),
					a = t.find((e) => e.id === n),
					{ backgroundColor: a = '', name: l = '' } = null != a ? a : {};
				return F(
					ea,
					{ onClick: i, classNames: oa.popupSection },
					F(
						'button',
						{ type: 'button', className: oa.popupSectionItem },
						F('span', { className: oa.dotIcon, style: { backgroundColor: a } }),
						F('span', { className: oa.content }, l),
						F('span', { className: O('icon', 'ic-dropdown-arrow', { open: e }) })
					),
					e &&
						F(Qi, {
							calendars: t,
							setOpened: o,
							onChangeIndex: (e) => r({ type: k.setCalendarId, calendarId: t[e].id })
						})
				);
			}
			const aa = {
				closeButton: O('popup-button', 'popup-close'),
				closeIcon: O('icon', 'ic-close')
			};
			function la(e) {
				let { type: t, close: n } = e;
				const r = Y('popup')['hideAllPopup'];
				return F(
					'button',
					{
						type: 'button',
						className: aa.closeButton,
						onClick: () => {
							r(), jt(n) && n();
						}
					},
					'moreEvents' === t
						? F(V, { template: 'monthMoreClose' })
						: F('i', { className: aa.closeIcon })
				);
			}
			const ca = { confirmButton: O('popup-button', 'popup-confirm') };
			function sa(e) {
				e = e.children;
				return F('button', { type: 'submit', className: ca.confirmButton }, F('span', null, e));
			}
			var t = fc(4268),
				ua = fc.n(t);
			function da(e) {
				var { template: e, model: t, defaultValue: n = '' } = e,
					e = U(yr)[e];
				if (A(e)) return n;
				let r = e(t);
				return (r = w()(r) ? r : n);
			}
			const pa = {
					datePickerContainer: O('datepicker-container'),
					datePicker: O('popup-section-item', 'popup-date-picker'),
					allday: O('popup-section-item', 'popup-section-allday'),
					dateIcon: O('icon', 'ic-date'),
					dateDash: O('popup-date-dash'),
					content: O('content')
				},
				fa = Lo(function (e, n) {
					let { start: r, end: o, isAllday: i = !1, formStateDispatch: t } = e;
					const a = U(_r)['usageStatistics'],
						l = W(null),
						c = W(null),
						s = W(null),
						u = W(null),
						d = da({ template: 'startDatePlaceholder', defaultValue: 'Start Date' }),
						p = da({ template: 'endDatePlaceholder', defaultValue: 'End Date' });
					return (
						B(() => {
							var e, t;
							l.current &&
								c.current &&
								s.current &&
								u.current &&
								((e = new E(r)),
								(t = new E(o)),
								i && (e.setHours(12, 0, 0), t.setHours(13, 0, 0)),
								(n.current = ua().createRangePicker({
									startpicker: { date: e.toDate(), input: c.current, container: l.current },
									endpicker: { date: t.toDate(), input: u.current, container: s.current },
									format: i ? 'yyyy-MM-dd' : 'yyyy-MM-dd HH:mm',
									timePicker: !i && { showMeridiem: !1, usageStatistics: a },
									usageStatistics: a
								})));
						}, [r, o, i, a, n]),
						F(
							ea,
							null,
							F(
								'div',
								{ className: pa.datePicker },
								F('span', { className: pa.dateIcon }),
								F('input', { name: 'start', className: pa.content, placeholder: d, ref: c }),
								F('div', { className: pa.datePickerContainer, ref: l })
							),
							F('span', { className: pa.dateDash }, '-'),
							F(
								'div',
								{ className: pa.datePicker },
								F('span', { className: pa.dateIcon }),
								F('input', { name: 'end', className: pa.content, placeholder: p, ref: u }),
								F('div', { className: pa.datePickerContainer, ref: s })
							),
							F(
								'div',
								{ className: pa.allday, onClick: () => t({ type: k.setAllday, isAllday: !i }) },
								F('span', {
									className: O('icon', { 'ic-checkbox-normal': !i, 'ic-checkbox-checked': i })
								}),
								F('span', { className: pa.content }, F(V, { template: 'popupIsAllday' })),
								F('input', {
									name: 'isAllday',
									type: 'checkbox',
									className: O('hidden-input'),
									value: i ? 'true' : 'false',
									checked: i
								})
							)
						)
					);
				}),
				ha = ['Busy', 'Free'],
				ma = {
					popupSectionItem: O('popup-section-item', 'dropdown-menu-item'),
					dropdownMenu: O('dropdown-menu'),
					icon: O('icon'),
					content: O('content')
				};
			function ga(e) {
				let { setOpened: r, setEventState: o } = e;
				return F(
					'ul',
					{ className: ma.dropdownMenu },
					ha.map((n) =>
						F(
							'li',
							{
								key: n,
								className: ma.popupSectionItem,
								onClick: (e) => {
									return (t = n), e.stopPropagation(), r(!1), void o(t);
									var t;
								}
							},
							F('span', { className: ma.icon }),
							F(
								'span',
								{ className: ma.content },
								F(V, 'Busy' === n ? { template: 'popupStateBusy' } : { template: 'popupStateFree' })
							)
						)
					)
				);
			}
			const va = {
				popupSection: ['dropdown-section', 'state-section'],
				popupSectionItem: O('popup-section-item', 'popup-button'),
				stateIcon: O('icon', 'ic-state'),
				arrowIcon: O('icon', 'ic-dropdown-arrow'),
				content: O('content', 'event-state')
			};
			function ya(e) {
				let { eventState: t = 'Busy', formStateDispatch: n } = e;
				var { isOpened: e, setOpened: r, toggleDropdown: o } = ta();
				return F(
					ea,
					{ onClick: o, classNames: va.popupSection },
					F(
						'button',
						{ type: 'button', className: va.popupSectionItem },
						F('span', { className: va.stateIcon }),
						F(
							'span',
							{ className: va.content },
							F(V, 'Busy' === t ? { template: 'popupStateBusy' } : { template: 'popupStateFree' })
						),
						F('span', { className: va.arrowIcon })
					),
					e && F(ga, { setOpened: r, setEventState: (e) => n({ type: k.setState, state: e }) })
				);
			}
			const wa = {
				popupSectionItem: O('popup-section-item', 'popup-section-location'),
				locationIcon: O('icon', 'ic-location'),
				content: O('content')
			};
			function _a(e) {
				let { location: t, formStateDispatch: n } = e;
				e = da({ template: 'locationPlaceholder', defaultValue: 'Location' });
				return F(
					ea,
					null,
					F(
						'div',
						{ className: wa.popupSectionItem },
						F('span', { className: wa.locationIcon }),
						F('input', {
							name: 'location',
							className: wa.content,
							placeholder: e,
							value: t,
							onChange: (e) => {
								n({ type: k.setLocation, location: e.currentTarget.value });
							}
						})
					)
				);
			}
			const ba = {
				popupSectionItem: O('popup-section-item', 'popup-section-title'),
				privateButton: O('popup-section-item', 'popup-section-private', 'popup-button'),
				titleIcon: O('icon', 'ic-title'),
				content: O('content')
			};
			function Da(e) {
				let { title: t, isPrivate: n = !1, formStateDispatch: r } = e;
				e = da({ template: 'titlePlaceholder', defaultValue: 'Subject' });
				return F(
					ea,
					null,
					F(
						'div',
						{ className: ba.popupSectionItem },
						F('span', { className: ba.titleIcon }),
						F('input', {
							name: 'title',
							className: ba.content,
							placeholder: e,
							value: t,
							onChange: (e) => {
								r({ type: k.setTitle, title: e.currentTarget.value });
							},
							required: !0
						})
					),
					F(
						'button',
						{
							type: 'button',
							className: ba.privateButton,
							onClick: () => r({ type: k.setPrivate, isPrivate: !n })
						},
						F('span', { className: O('icon', { 'ic-private': n, 'ic-public': !n }) }),
						F('input', {
							name: 'isPrivate',
							type: 'checkbox',
							className: O('hidden-input'),
							value: n ? 'true' : 'false',
							checked: n
						})
					)
				);
			}
			const xa = {
				popupContainer: O('popup-container'),
				formContainer: O('form-container'),
				popupArrowBorder: O('popup-arrow-border'),
				popupArrowFill: O('popup-arrow-fill')
			};
			function ka() {
				var e;
				const t = U(gr)['calendars'],
					i = Y('popup')['hideAllPopup'],
					n = U($i),
					{
						start: r,
						end: o,
						popupArrowPointPosition: a,
						close: l,
						isCreationPopup: c,
						event: s
					} = null != n ? n : {},
					u = $(),
					d = Ui('formPopupSlot'),
					[p, f] = xe(ra, { calendarId: null == (e = t[0]) ? void 0 : e.id, ...na }),
					h = W(null),
					m = W(null),
					[g, v] = z({}),
					[y, w] = z(0),
					[_, b] = z(Wi.bottom),
					D = li(),
					x = I(() => O('popup-arrow', { top: _ === Wi.top, bottom: _ === Wi.bottom }), [_]);
				return (
					ke(() => {
						var e, t, n, r;
						m.current &&
							a &&
							D &&
							((e = D.getBoundingClientRect()),
							(t = m.current.getBoundingClientRect()),
							({
								top: e,
								left: t,
								direction: n
							} = (function (e, t, n) {
								let r = e.top - n.height - 8,
									o = e.left - n.width / 2,
									i = Wi.bottom;
								return (
									r < t.top && ((i = Wi.top), (r = e.top + 8)),
									Yi(r, t, n) && (r = t.top + t.height - n.height),
									Vi(o, t, n) && (o = t.left + t.width - n.width),
									{
										top: r + window.scrollY,
										left: Math.max(o, t.left) + window.scrollX,
										direction: i
									}
								);
							})(a, e, t)),
							(r = a.left - t),
							v({ left: t, top: e }),
							w(r),
							b(n));
					}, [D, a]),
					B(() => {
						j(n) &&
							j(s) &&
							f({
								type: k.init,
								event: {
									title: n.title,
									location: n.location,
									isAllday: n.isAllday,
									isPrivate: n.isPrivate,
									calendarId: s.calendarId,
									state: n.eventState
								}
							});
					}, [t, s, f, n]),
					B(() => {
						A(n) && f({ type: k.reset });
					}, [f, n]),
					A(r) || A(o) || A(d)
						? null
						: Go(
								F(
									'div',
									{ role: 'dialog', className: xa.popupContainer, ref: m, style: g },
									F(
										'form',
										{
											onSubmit: (e) => {
												var r, t;
												e.preventDefault();
												const n = new FormData(e.target),
													o = { ...p };
												if (
													(n.forEach((e, t) => {
														o[t] = ((t = t), -1 !== zi.indexOf(t) ? 'true' === e : e);
													}),
													(o.start = new E(null == (e = h.current) ? void 0 : e.getStartDate())),
													(o.end = new E(null == (e = h.current) ? void 0 : e.getEndDate())),
													c)
												)
													u.fire('beforeCreateEvent', o);
												else if (s) {
													(r = s), (t = o);
													const e = Object.entries(t).reduce((e, t) => {
														var [t, n] = t;
														return (
															r[t] instanceof E
																? 0 !== wn(r[t], n) && (e[t] = n)
																: r[t] !== n && (e[t] = n),
															e
														);
													}, {});
													u.fire('beforeUpdateEvent', { event: s.toEventObject(), changes: e });
												}
												i();
											}
										},
										F(
											'div',
											{ className: xa.formContainer },
											null != t && t.length
												? F(ia, {
														selectedCalendarId: p.calendarId,
														calendars: t,
														formStateDispatch: f
													})
												: F(ea, null),
											F(Da, { title: p.title, isPrivate: p.isPrivate, formStateDispatch: f }),
											F(_a, { location: p.location, formStateDispatch: f }),
											F(fa, {
												start: r,
												end: o,
												isAllday: p.isAllday,
												formStateDispatch: f,
												ref: h
											}),
											F(ya, { eventState: p.state, formStateDispatch: f }),
											F(la, { type: 'form', close: l }),
											F(
												ea,
												null,
												F(
													sa,
													null,
													F(V, c ? { template: 'popupSave' } : { template: 'popupUpdate' })
												)
											)
										),
										F(
											'div',
											{ className: x },
											F(
												'div',
												{ className: xa.popupArrowBorder, style: { left: y } },
												F('div', { className: xa.popupArrowFill })
											)
										)
									)
								),
								d
							)
				);
			}
			function Sa(e) {
				return Object.values(e.popup).find((e) => j(e));
			}
			function Ca() {
				const t = U(Sa),
					n = Y('popup')['hideAllPopup'],
					e = j(t);
				return F('div', {
					className: O('popup-overlay'),
					style: { display: e ? 'block' : 'none' },
					onClick: (e) => {
						e.stopPropagation(), null != t && null != (e = t.close) && e.call(t), n();
					}
				});
			}
			const Ea = {
				container: O('see-more-container'),
				seeMore: O('see-more'),
				header: O('see-more-header'),
				list: O('month-more-list')
			};
			function Ia() {
				const e = U(qi),
					{ date: t, events: n = [], popupPosition: r } = null != e ? e : {},
					{ moreView: o, moreViewTitle: i } = Gr(),
					a = Ui('seeMorePopupSlot'),
					l = $(),
					c = W(null),
					s = A(t) || A(r) || A(a);
				var u, d, p;
				return (
					B(() => {
						!s &&
							c.current &&
							l.fire('clickMoreEventsBtn', { date: t.toDate(), target: c.current });
					}, [t, l, s]),
					s
						? null
						: ((u = {
								height: 44,
								marginBottom: 12,
								padding: '12px 17px 0',
								backgroundColor: i.backgroundColor
							}),
							(d = {
								ymd: f(t, 'YYYY-MM-DD'),
								day: t.getDay(),
								date: t.getDate().toString().padStart(2, '0')
							}),
							(p = { height: 'calc(100% - '.concat(68, 'px)') }),
							Go(
								F(
									'div',
									{ role: 'dialog', className: Ea.container, style: r, ref: c },
									F(
										'div',
										{ className: Ea.seeMore, style: o },
										F(
											'div',
											{ className: Ea.header, style: u },
											F(V, { template: 'monthMoreTitleDate', param: d }),
											F(la, { type: 'moreEvents' })
										),
										F(
											'div',
											{ className: Ea.list, style: p },
											n.map((e) =>
												F(_i, {
													key: 'see-more-event-item-'.concat(e.cid()),
													uiModel: e,
													eventHeight: xt,
													headerHeight: 44,
													flat: !0
												})
											)
										)
									)
								),
								a
							))
				);
			}
			function Ma(e) {
				let { children: t, width: n, height: r, className: o = '', autoAdjustPanels: i = !1 } = e;
				const a = L(Or)['backgroundColor'],
					[l, c] = Ci(),
					{ setLastPanelType: s, updateLayoutHeight: u } = Y('weekViewLayout'),
					d = I(() => ''.concat(O('layout'), ' ').concat(o), [o]);
				return (
					ke(() => {
						if (l) {
							const e = () => u(l.offsetHeight);
							return (
								e(),
								window.addEventListener('resize', e),
								() => window.removeEventListener('resize', e)
							);
						}
						return nr;
					}, [l, u]),
					ke(() => {
						var e;
						l &&
							i &&
							((e = (e = v(t))[e.length - 1]), w()(e) || Bt()(e) || A(e) || s(e.props.name));
					}, [t, s, i, l]),
					F(
						ai,
						{ value: l },
						F(
							'div',
							{
								ref: c,
								className: d,
								style: {
									...((e = n),
									(p = r),
									(f = { height: P(100) }),
									e && (f.width = e),
									p && (f.height = p),
									f),
									backgroundColor: a
								}
							},
							l ? t : null
						),
						F(ka, null),
						F(Ki, null),
						F(Ia, null),
						F(Ca, null)
					)
				);
				var p, f;
			}
			function Na(e) {
				let { name: t, height: n } = e;
				(e = n), (u = L(N((e) => e.week.panelResizer.border, [])));
				const r = { height: e, width: '100%', cursor: 'row-resize', borderTop: u, borderBottom: u },
					o = { ...r, display: 'none', border: 'none', backgroundColor: '#999' },
					[i, a] = z(o),
					l = W(null),
					c = Y('weekViewLayout')['updateDayGridRowHeightByDiff'],
					s = gi('panelResizer', {
						onDragStart: (e) => {
							l.current = { left: e.pageX, top: e.pageY };
						},
						onDrag: (e) => {
							if (l.current) {
								const t = e.pageY - l.current.top;
								a((e) => ({ ...e, top: t, display: null }));
							}
						},
						onMouseUp: (e) => {
							l.current &&
								((e = e.pageY - l.current.top),
								(l.current = null),
								a(o),
								c({ rowName: t, diff: e }));
						}
					});
				var u;
				return F(
					'div',
					{ style: { position: 'relative' } },
					F('div', { className: O('panel-resizer'), style: r, onMouseDown: s }),
					F('div', { className: O('panel-resizer-guide'), style: i })
				);
			}
			function Ta(e, t) {
				return t ? Math.min(t, e) : e;
			}
			const Oa = Lo(function (e, t) {
					let {
						name: n,
						initialWidth: d = kt,
						initialHeight: r = kt,
						overflowX: p,
						overflowY: f,
						maxExpandableWidth: h,
						maxExpandableHeight: m,
						minHeight: g,
						maxHeight: v,
						minWidth: y,
						maxWidth: w,
						resizerWidth: o = Vn,
						resizerHeight: i = Vn,
						resizable: a,
						children: l
					} = e;
					const c = Y('weekViewLayout')['updateDayGridRowHeight'],
						s = U(
							N(
								(e) => {
									return null != (e = e.weekViewLayout.dayGridRows[n]) ? e : {};
								},
								[n]
							)
						)['height'],
						_ = null != s ? s : r;
					ke(() => {
						c({ rowName: n, height: r });
					}, [r, n, c]);
					var e = (function () {
							var {
									initialHeight: e,
									initialWidth: t,
									overflowX: n,
									overflowY: r,
									maxExpandableWidth: o,
									maxExpandableHeight: i,
									minHeight: a,
									maxHeight: l,
									minWidth: c,
									maxWidth: s
								} = {
									initialWidth: d,
									initialHeight: _,
									overflowX: p,
									overflowY: f,
									maxExpandableWidth: h,
									maxExpandableHeight: m,
									minHeight: g,
									maxHeight: v,
									minWidth: y,
									maxWidth: w
								},
								u = {};
							return (
								t && ((u.width = Ta(t, o)), (u.height = '100%')),
								e && ((u.width = '100%'), (u.height = Ta(e, i))),
								n && (u.overflowX = 'auto'),
								r && (u.overflowY = 'auto'),
								{ ...u, minHeight: a, maxHeight: l, minWidth: c, maxWidth: s }
							);
						})(),
						u = I(() => (A(a) || zt()(a) ? !!a : a.includes(n)), [a, n]);
					return F(
						K,
						null,
						F('div', { className: O('panel', n), style: e, ref: t }, l),
						u ? F(Na, { name: n, width: o, height: i }) : null
					);
				}),
				Pa = 'timegrid',
				a = (e) => ''.concat(Pa, '-').concat(e),
				Aa = {
					second: 'HH:mm:ss',
					minute: 'HH:mm',
					hour: 'HH:mm',
					date: 'HH:mm',
					month: 'MM.DD',
					year: 'YYYY.MM.DD'
				},
				Ra = {
					time: O('event-time'),
					content: O('event-time-content'),
					travelTime: O('travel-time'),
					resizeHandleX: O('resize-handler-x'),
					moveEvent: O('dragging--move-event'),
					resizeEvent: O('dragging--resize-vertical-event')
				};
			function La(e) {
				var {
						uiModel: e,
						isDraggingTarget: t,
						hasNextStartTime: n,
						calendarColor: r,
						minHeight: o
					} = e,
					{
						top: i,
						left: a,
						height: l,
						width: c,
						duplicateLeft: s,
						duplicateWidth: u,
						goingDurationHeight: d,
						modelDurationHeight: p,
						comingDurationHeight: f,
						croppedStart: h,
						croppedEnd: m
					} = e,
					g = (function (e) {
						var { percent: t, px: n } = It(''.concat(e));
						return 0 < e || 0 < t || 0 < n ? 2 : 0;
					})(a),
					{ color: e, backgroundColor: r, borderColor: v, dragBackgroundColor: y } = Mt(e, r),
					u = {
						width:
							((u = u || c),
							(c = g),
							w()(u) ? u : 0 <= u ? 'calc('.concat(P(u), ' - ').concat(c, 'px)') : ''),
						height: 'calc('.concat(P(Math.max(l, o)), ' - ').concat(2, 'px)'),
						top: P(i),
						left: s || P(a),
						borderRadius: 2,
						borderLeft: '3px solid '.concat(v),
						marginLeft: g,
						color: e,
						backgroundColor: t ? y : r,
						opacity: t ? 0.5 : 1,
						zIndex: n ? 1 : 0
					},
					c = { height: P(d), borderBottom: '1px dashed '.concat('white') },
					l = { height: P(p) },
					o = { height: P(f), borderTop: '1px dashed '.concat('white') };
				return (
					h && ((u.borderTopLeftRadius = 0), (u.borderTopRightRadius = 0)),
					m && ((u.borderBottomLeftRadius = 0), (u.borderBottomRightRadius = 0)),
					{
						containerStyle: u,
						goingDurationStyle: c,
						modelDurationStyle: l,
						comingDurationStyle: o
					}
				);
			}
			function Ha(e) {
				let { uiModel: o, nextStartTime: t, isResizingGuide: n = !1, minHeight: r = 0 } = e;
				const { useDetailPopup: i, isReadOnly: a, week: l } = U(_r),
					c = pi(o.model),
					s = l['collapseDuplicateEvents'],
					u = li(),
					d = Y('popup')['showDetailPopup'],
					p = Y('dnd')['setDraggingEventUIModel'],
					f = Y('weekViewLayout')['setSelectedDuplicateEventCid'],
					h = $(),
					m = W(null),
					[g, v] = z(!1),
					{
						model: y,
						goingDurationHeight: w,
						modelDurationHeight: _,
						comingDurationHeight: b,
						croppedEnd: D
					} = o,
					{ id: x, calendarId: k, customStyle: S } = y,
					C = j(t),
					{
						containerStyle: E,
						goingDurationStyle: I,
						modelDurationStyle: M,
						comingDurationStyle: N
					} = La({
						uiModel: o,
						isDraggingTarget: g,
						hasNextStartTime: C,
						calendarColor: c,
						minHeight: r
					}),
					T = C || n,
					O =
						(mi(br, (e) => {
							var { draggingEventUIModel: e, draggingState: t } = e;
							t !== G.DRAGGING || (null == e ? void 0 : e.cid()) !== o.cid() || C || n
								? v(!1)
								: v(!0);
						}),
						B(() => {
							n || h.fire('afterRenderEvent', o.model.toEventObject());
						}, []),
						(e) => {
							p(o), null != u && u.classList.add(e);
						}),
					P = (e) => {
						v(!1), null != u && u.classList.remove(e);
					},
					A = gi(si('timeGrid', ''.concat(o.cid())), {
						onDragStart: () => {
							R && O(Ra.moveEvent);
						},
						onMouseUp: (e, t) => {
							(t = t.draggingState), P(Ra.moveEvent), (t = t <= G.INIT);
							if (t && s) {
								const e = 0 < o.duplicateEvents.length ? o.cid() : -1;
								f(e);
							}
							t &&
								i &&
								m.current &&
								d({ event: o.model, eventRect: m.current.getBoundingClientRect() }, !1),
								t && h.fire('clickEvent', { event: o.model.toEventObject(), nativeEvent: e });
						},
						onPressESCKey: () => P(Ra.moveEvent)
					}),
					L = gi(ci('timeGrid', ''.concat(o.cid())), {
						onDragStart: () => O(Ra.resizeEvent),
						onMouseUp: () => P(Ra.resizeEvent),
						onPressESCKey: () => P(Ra.resizeEvent)
					}),
					R = (function () {
						var {
								uiModel: e,
								isReadOnlyCalendar: t,
								isDraggingTarget: n,
								hasNextStartTime: r
							} = { uiModel: o, isReadOnlyCalendar: a, isDraggingTarget: g, hasNextStartTime: C },
							e = e['model'];
						return !(t || e.isReadOnly || n || r);
					})(),
					H = R && !D;
				return F(
					'div',
					{
						'data-testid': ''
							.concat(T ? 'guide-' : '', 'time-event-')
							.concat(y.title, '-')
							.concat(o.cid()),
						'data-calendar-id': k,
						'data-event-id': x,
						className: Ra.time,
						style: { ...E, ...S },
						onMouseDown: (e) => {
							e.stopPropagation(), A(e);
						},
						ref: m
					},
					w
						? F(
								'div',
								{ className: Ra.travelTime, style: I },
								F(V, { template: 'goingDuration', param: y })
							)
						: null,
					_
						? F(
								'div',
								{ className: Ra.content, style: M },
								F(V, { template: 'time', param: { ...y.toEventObject(), start: C ? t : y.start } })
							)
						: null,
					b
						? F(
								'div',
								{ className: Ra.travelTime, style: N },
								F(V, { template: 'comingDuration', param: y })
							)
						: null,
					H
						? F('div', {
								className: Ra.resizeHandleX,
								onMouseDown: (e) => {
									e.stopPropagation(), L(e);
								}
							})
						: null
				);
			}
			function Fa(e) {
				var { top: e, height: t, text: n } = e,
					{ backgroundColor: r, border: o } = L(N((e) => e.common.gridSelection, [])),
					i = L(N((e) => e.week.gridSelection.color, [])),
					r = { top: P(e), height: P(t), backgroundColor: r, border: o };
				return F(
					'div',
					{
						className: O('time', 'grid-selection'),
						style: r,
						'data-testid': 'time-grid-selection-'.concat(e, '-').concat(t)
					},
					0 < n.length
						? F('span', { className: O('grid-selection-label'), style: { color: i } }, n)
						: null
				);
			}
			function za(e) {
				let { columnIndex: t, timeGridRows: c } = e;
				const s = U(
						N((e) => Co.calculateSelection(e.gridSelection.timeGrid, t, c.length - 1), [t, c])
					),
					n = I(() => {
						if (!s) return null;
						var {
								startRowIndex: e,
								endRowIndex: t,
								isStartingColumn: n,
								isSelectingMultipleColumns: r
							} = s,
							{ top: e, startTime: o } = c[e],
							{ top: t, height: i, endTime: a } = c[t],
							t = t + i - e;
						let l = ''.concat(o, ' - ').concat(a);
						return { top: e, height: t, text: (l = r ? (n ? o : '') : l) };
					}, [s, c]);
				return A(n) ? null : F(Fa, n);
			}
			function Ba(e) {
				var { gridPositionFinder: c, totalUIModels: y, columnIndex: w, timeGridData: _ } = e,
					e = (function () {
						let {
							gridPositionFinder: e,
							totalUIModels: h,
							columnIndex: s,
							timeGridData: m
						} = { gridPositionFinder: c, totalUIModels: y, columnIndex: w, timeGridData: _ };
						const n = $(),
							{
								isDraggingEnd: t,
								isDraggingCanceled: r,
								draggingEvent: g,
								clearDraggingEvent: o
							} = xi('timeGrid', 'resize'),
							[u, i] = Di(e),
							[a, d] = z(null),
							l = N(() => {
								d(null), o(), i();
							}, [i, o]),
							p = I(() => {
								if (A(g)) return null;
								const { columns: o, rows: e } = m,
									t = h.map((e) => e.filter((e) => e.cid() === g.cid())),
									n = (n, r) => (e) => {
										var t = Nn(o[r].date, e.startTime),
											e = Nn(m.columns[r].date, e.endTime);
										return t <= n && n < e;
									},
									r = t.findIndex((e) => 0 < e.length),
									i = t[r][0],
									{ goingDuration: a = 0 } = i.model,
									l = R(i.getStarts(), -a),
									c = Math.max(e.findIndex(n(l, r)), 0),
									s = rn(t, (e) => 0 < e.length),
									u = t[s][0],
									{ comingDuration: d = 0 } = u.model,
									p = R(u.getStarts(), d);
								var f = e.findIndex(n(p, s));
								return {
									eventStartDateColumnIndex: r,
									eventStartDateRowIndex: c,
									eventEndDateColumnIndex: s,
									eventEndDateRowIndex: 0 <= f ? f : e.length - 1,
									resizeTargetUIModelColumns: t
								};
							}, [g, m, h]),
							f = j(p) && j(g) && j(u),
							v = I(() => (p ? m.rows[0].height : 0), [p, m.rows]);
						return (
							B(() => {
								if (f) {
									var {
										eventStartDateRowIndex: e,
										eventStartDateColumnIndex: t,
										eventEndDateColumnIndex: n
									} = p;
									if (s === n && t === n) {
										const r = g.clone(),
											{ height: o, goingDurationHeight: s, comingDurationHeight: i } = r,
											a = Math.max(
												v + (s * o) / 100 + (i * o) / 100,
												m.rows[u.rowIndex].top - m.rows[e].top + v
											),
											l = (s * o) / a,
											c = (i * o) / a;
										r.setUIProps({
											height: a,
											goingDurationHeight: l,
											comingDurationHeight: c,
											modelDurationHeight: 100 - (l + c)
										}),
											d(r);
									}
								}
							}, [p, f, s, u, g, m.rows, v]),
							B(() => {
								if (f) {
									var {
										resizeTargetUIModelColumns: t,
										eventStartDateColumnIndex: n,
										eventEndDateColumnIndex: e
									} = p;
									if ((s === n || s === e) && n !== e) {
										let e;
										s === n
											? (e = t[s][0].clone())
											: (e = g.clone()).setUIProps({ height: m.rows[u.rowIndex].top + v }),
											d(e);
									}
								}
							}, [p, f, s, u, g, m.rows, v]),
							bi(() => {
								var e, t;
								!r &&
									j(p) &&
									j(u) &&
									j(g) &&
									p.eventEndDateColumnIndex === s &&
									(({ comingDuration: e = 0 } = g.model),
									(e = R(Nn(m.columns[s].date, m.rows[u.rowIndex].endTime), -e)),
									(t = R(g.getStarts(), 30)),
									n.fire('beforeUpdateEvent', {
										event: g.model.toEventObject(),
										changes: { end: bn(t, e) }
									})),
									l();
							}, t),
							a
						);
					})();
				return A(e) ? null : F(Ha, { uiModel: e, isResizingGuide: !0 });
			}
			const Wa = { column: O('column'), backgrounds: O('background-events'), events: O('events') };
			function ja(e) {
				let { eventUIModels: t, minEventHeight: n } = e;
				return F(
					'div',
					{ className: Wa.events, style: { marginRight: 8 } },
					t.map((e) =>
						F(Ha, { key: ''.concat(e.valueOf(), '-').concat(e.cid()), uiModel: e, minHeight: n })
					)
				);
			}
			function Ga(e) {
				return {
					defaultBackgroundColor: e.week.dayGrid.backgroundColor,
					todayBackgroundColor: e.week.today.backgroundColor,
					weekendBackgroundColor: e.week.weekend.backgroundColor
				};
			}
			const Ua = Po(function (e) {
				var {
					columnDate: i,
					columnWidth: e,
					columnIndex: t,
					totalUIModels: n,
					gridPositionFinder: r,
					timeGridData: o,
					isLastColumn: a
				} = e;
				const l = o['rows'],
					c = L(N((e) => e.week.timeGrid.borderRight, [])),
					s = L(Ga),
					[, u] = Nr(),
					d = (function () {
						var {
								today: e,
								columnDate: t,
								defaultBackgroundColor: n,
								todayBackgroundColor: r,
								weekendBackgroundColor: o
							} = { today: u(), columnDate: i, ...s },
							e = _n(e, t),
							t = kn(t.getDay());
						return e ? r : t ? o : n;
					})(),
					p = { width: e, backgroundColor: d, borderRight: a ? 'none' : c },
					f = n[t],
					h = l[0].height;
				return F(
					'div',
					{ className: Wa.column, style: p, 'data-testid': 'timegrid-column-'.concat(i.getDay()) },
					F(ja, { eventUIModels: f, minEventHeight: h }),
					F(Ba, { gridPositionFinder: r, totalUIModels: n, columnIndex: t, timeGridData: o }),
					F(za, { columnIndex: t, timeGridRows: l })
				);
			});
			function Ya(e) {
				return {
					halfHourLineBorder: e.week.timeGridHalfHourLine.borderBottom,
					hourLineBorder: e.week.timeGridHourLine.borderBottom
				};
			}
			const Va = Po(function (e) {
				e = e.timeGridRows;
				const { halfHourLineBorder: n, hourLineBorder: r } = L(Ya);
				return F(
					'div',
					{ className: O('gridlines') },
					e.map((e, t) => {
						t = t % 2 == 0;
						return F('div', {
							key: 'gridline-'.concat(e.startTime, '-').concat(e.endTime),
							className: O('gridline-half'),
							style: { top: P(e.top), height: P(e.height), borderBottom: t ? n : r },
							'data-testid': 'gridline-'.concat(e.startTime, '-').concat(e.endTime)
						});
					})
				);
			});
			function $a(e, t) {
				(t = e.getHours() - t), (e = e.getMinutes());
				return 2 * t + Math.floor(e / 30);
			}
			const Xa = (e) => e.dnd.initX,
				qa = (e) => e.dnd.initY;
			function Ka(e) {
				var { gridPositionFinder: e, timeGridData: t } = e,
					{ movingEvent: e, nextStartTime: t } = (function (e) {
						let { gridPositionFinder: t, timeGridData: u } = e;
						const n = U(Xa),
							r = U(qa),
							o = $(),
							{
								isDraggingEnd: i,
								isDraggingCanceled: a,
								draggingEvent: l,
								clearDraggingEvent: c
							} = xi('timeGrid', 'move'),
							[d, s] = Di(t),
							p = W(null),
							f =
								(B(() => {
									j(n) && j(r) && (p.current = t({ clientX: n, clientY: r }));
								}, [t, n, r]),
								I(
									() =>
										A(p.current) || A(d)
											? null
											: {
													columnDiff: d.columnIndex - p.current.columnIndex,
													rowDiff: d.rowIndex - p.current.rowIndex
												},
									[d]
								)),
							h = I(() => (A(l) ? null : l.getStarts()), [l]),
							m = N(() => {
								s(), c(), (p.current = null);
							}, [s, c]),
							g = I(
								() => (A(f) || A(h) ? null : Mn(h, f.rowDiff * mn + f.columnDiff * pn)),
								[f, h]
							),
							v = I(() => {
								if (A(l) || A(d) || A(f)) return null;
								const s = l.clone(),
									{ top: e, height: t } = (function () {
										var {
												draggingEvent: e,
												columnDiff: t,
												rowDiff: n,
												timeGridDataRows: r,
												currentDate: o
											} = {
												draggingEvent: s,
												columnDiff: f.columnDiff,
												rowDiff: f.rowDiff,
												timeGridDataRows: u.rows,
												currentDate: u.columns[d.columnIndex].date
											},
											i = r[0].height,
											a = i * r.length,
											n = n * mn + t * pn,
											t = Number(r[0].startTime.split(':')[0]),
											{ goingDuration: l = 0, comingDuration: c = 0 } = e.model,
											l = R(e.getStarts(), -l),
											e = R(e.getEnds(), c),
											c = Mn(l, n),
											l = Mn(e, n),
											e = Math.max($a(c, t), 0),
											n = Math.min($a(l, t), r.length - 1),
											t =
												c.getFullYear() < o.getFullYear() ||
												c.getMonth() < o.getMonth() ||
												c.getDate() < o.getDate(),
											c =
												l.getFullYear() > o.getFullYear() ||
												l.getMonth() > o.getMonth() ||
												l.getDate() > o.getDate();
										return {
											top: t ? 0 : r[e].top,
											height: c ? a : Math.max(n - (t ? 0 : e), 1) * i
										};
									})();
								return (
									s.setUIProps({
										left: u.columns[d.columnIndex].left,
										width: u.columns[d.columnIndex].width,
										top: e,
										height: t
									}),
									s
								);
							}, [d, l, f, u.columns, u.rows]);
						return (
							bi(() => {
								var e;
								!a &&
									j(l) &&
									j(d) &&
									j(f) &&
									j(g) &&
									(0 !== f.rowDiff || 0 !== f.columnDiff) &&
									((e = l.duration()),
									(e = Mn(g, e)),
									o.fire('beforeUpdateEvent', {
										event: l.model.toEventObject(),
										changes: { start: g, end: e }
									})),
									m();
							}, i),
							{ movingEvent: v, nextStartTime: g }
						);
					})({ gridPositionFinder: e, timeGridData: t });
				return A(e) ? null : F(Ha, { uiModel: e, nextStartTime: t });
			}
			const Za = 'timegrid-now-indicator',
				Ja = 'timegrid-now-indicator-label',
				Qa = {
					line: O(a('now-indicator')),
					left: O(a('now-indicator-left')),
					marker: O(a('now-indicator-marker')),
					today: O(a('now-indicator-today')),
					right: O(a('now-indicator-right'))
				};
			function el(e) {
				return {
					pastBorder: e.week.nowIndicatorPast.border,
					todayBorder: e.week.nowIndicatorToday.border,
					futureBorder: e.week.nowIndicatorFuture.border,
					bulletBackgroundColor: e.week.nowIndicatorBullet.backgroundColor
				};
			}
			function tl(e) {
				var { top: e, columnWidth: t, columnCount: n, columnIndex: r } = e;
				const { pastBorder: o, todayBorder: i, futureBorder: a, bulletBackgroundColor: l } = L(el),
					c = li(),
					s = $(),
					u = W(null),
					d = { left: P(t * r), width: P(t * r) },
					p = { left: P(t * (r + 1)), width: P(t * (n - r + 1)) };
				return (
					B(() => {
						const e = (e) => {
							var t,
								n =
									null !=
									(t =
										null == c
											? void 0
											: c.querySelector('.'.concat(O('panel'), '.').concat(O('time'))))
										? t
										: null;
							if (n && u.current) {
								const t = n['offsetHeight'],
									r = u.current['offsetTop'],
									o = r - t / 2;
								n.scrollTo ? n.scrollTo({ top: o, behavior: e }) : (n.scrollTop = o);
							}
						};
						return s.on('scrollToNow', e), () => s.off('scrollToNow', e);
					}, [s, c]),
					B(() => {
						s.fire('scrollToNow', 'smooth');
					}, [s]),
					F(
						'div',
						{ ref: u, className: Qa.line, style: { top: P(e) }, 'data-testid': Za },
						F('div', { className: Qa.left, style: { width: d.width, borderTop: o } }),
						F('div', { className: Qa.marker, style: { left: d.left, backgroundColor: l } }),
						F('div', { className: Qa.today, style: { left: d.left, width: P(t), borderTop: i } }),
						F('div', { className: Qa.right, style: { left: p.left, borderTop: a } })
					)
				);
			}
			const nl = { now: a('current-time'), dayDifference: a('day-difference') };
			function rl(e) {
				let { unit: t, top: n, now: r, zonedNow: o } = e;
				var e = L(N((e) => e.week.nowIndicatorLabel.color, [])),
					i = I(() => On(o, r), [o, r]),
					a = { unit: t, time: o, format: Aa[t] };
				return F(
					'div',
					{ className: O(nl.now), style: { top: P(n), color: e }, 'data-testid': Ja },
					0 !== i &&
						F(
							'span',
							{ className: O(nl.dayDifference) },
							'['.concat(0 < i ? '+' : '-').concat(Math.abs(i), ']')
						),
					F(V, { template: 'timegridNowIndicatorLabel', param: a, as: 'span' })
				);
			}
			const ol = (e) => {
					return null != (e = e.options.month.visibleEventCount) ? e : 6;
				},
				il = (e) => e.options.week.showNowIndicator,
				al = (e) => {
					return null != (e = e.options.week.showTimezoneCollapseButton) && e;
				},
				ll = (e) => {
					return null != (e = e.options.week.timezonesCollapsed) && e;
				},
				cl = {
					timeColumn: a('time-column'),
					hourRows: a('hour-rows'),
					time: a('time'),
					timeLabel: a('time-label'),
					first: a('time-first'),
					last: a('time-last'),
					hidden: a('time-hidden')
				};
			function sl(e) {
				return {
					primaryTimezoneBackgroundColor: e.week.timeGridLeft.backgroundColor,
					subTimezoneBackgroundColor: e.week.timeGridLeftAdditionalTimezone.backgroundColor
				};
			}
			function ul(e) {
				return { pastTimeColor: e.week.pastTime.color, futureTimeColor: e.week.futureTime.color };
			}
			function dl(e) {
				let { rowsInfo: t, isPrimary: o, borderRight: n, width: r, nowIndicatorState: i } = e;
				const a = U(il),
					{ primaryTimezoneBackgroundColor: l, subTimezoneBackgroundColor: c } = L(sl),
					{ pastTimeColor: s, futureTimeColor: u } = L(ul),
					d = j(i) ? R(i.now, null != (e = t[0].diffFromPrimaryTimezone) ? e : 0) : null,
					p = o ? l : c;
				return F(
					'div',
					{
						role: 'rowgroup',
						className: O(cl.hourRows),
						style: { width: P(r), borderRight: n, backgroundColor: p }
					},
					t.map((e) => {
						var { date: e, top: t, className: n } = e,
							r = j(d) && e < d ? s : u;
						return F(
							'div',
							{ key: e.getTime(), className: n, style: { top: P(t), color: r }, role: 'row' },
							F(V, {
								template: 'timegridDisplay'.concat(o ? 'Primary' : '', 'Time'),
								param: { time: e },
								as: 'span'
							})
						);
					}),
					a && j(i) && j(d) && F(rl, { unit: 'hour', top: i.top, now: i.now, zonedNow: d })
				);
			}
			const pl = Po(function (e) {
				let { timeGridRows: n, nowIndicatorState: i } = e;
				const a = U(il),
					t = U(Ir),
					r = U(ll),
					o = Mr(),
					{ width: l, borderRight: c } = L(Rr),
					s = I(() => n.filter((e, t) => t % 2 == 0 || t === n.length - 1), [n]),
					u = N(
						(r, e, t) => {
							var n = 0 === e,
								e = e === s.length - 1,
								n = O(cl.time, {
									[cl.first]: n,
									[cl.last]: e,
									[cl.hidden]: (() => {
										var e,
											{ top: t, height: n } = r;
										return !(!a || A(i)) && t - n <= (e = i.top) && e <= t + n;
									})()
								});
							let o = Nn(new E(), e ? r.endTime : r.startTime);
							return {
								date: (o = j(t) ? R(o, t) : o),
								top: r.top,
								className: n,
								diffFromPrimaryTimezone: t
							};
						},
						[s, i, a]
					),
					[d, ...p] = t,
					f = 0 < p.length ? 100 / (p.length + 1) : 100,
					h = s.map((e, t) => u(e, t)),
					m = I(
						() =>
							0 === p.length
								? []
								: p.reverse().map((e) => {
										const t = e['timezoneName'],
											n = o(d.timezoneName).getTimezoneOffset(),
											r = o(t).getTimezoneOffset() - n;
										return s.map((e, t) => u(e, t, r));
									}),
						[u, p, d, s, o]
					);
				return F(
					'div',
					{
						className: O(cl.timeColumn),
						style: { width: l },
						'data-testid': 'timegrid-time-column'
					},
					!r &&
						m.map((e) =>
							F(dl, {
								key: e[0].diffFromPrimaryTimezone,
								rowsInfo: e,
								isPrimary: !1,
								borderRight: c,
								width: f,
								nowIndicatorState: i
							})
						),
					F(dl, {
						rowsInfo: h,
						isPrimary: !0,
						borderRight: c,
						width: r ? 100 : f,
						nowIndicatorState: i
					})
				);
			});
			function fl(e, t, n) {
				(t = t.getTime()), (n = n.getTime()), (e = ao(e.getTime(), [t], [n]) - t);
				return ao((100 * e) / (n - t), [0], [100]);
			}
			function hl(e, t, n, r) {
				e = fl(e, n, r);
				return { top: e, height: fl(t, n, r) - e };
			}
			function ml(r, o) {
				return (e) => {
					var { goingDuration: t = 0, comingDuration: n = 0 } = e.model,
						t = R(e.getStarts(), -t);
					return !(R(e.getEnds(), n) <= r || o <= t);
				};
			}
			function gl(t) {
				let {
					uiModel: n,
					columnIndex: r,
					baseWidth: o,
					startColumnTime: i,
					endColumnTime: a,
					isDuplicateEvent: e = !1
				} = t;
				if (!e && 0 < n.duplicateEvents.length)
					return n.duplicateEvents.forEach((e) => {
						gl({
							uiModel: e,
							columnIndex: r,
							baseWidth: o,
							startColumnTime: i,
							endColumnTime: a,
							isDuplicateEvent: !0
						});
					});
				var t = (function (e, t, n, r, o) {
						var { goingDuration: i = 0, comingDuration: a = 0 } = e.model,
							l = e.getStarts(),
							c = e.getEnds(),
							i = R(l, -i),
							a = R(c, a);
						return {
							baseWidth: n,
							columnIndex: t,
							modelStart: l,
							modelEnd: c,
							renderStart: bn(i, r),
							renderEnd: Dn(a, o),
							goingStart: i,
							comingEnd: a,
							startColumnTime: r,
							endColumnTime: o,
							duplicateEvents: e.duplicateEvents
						};
					})(n, r, o, i, a),
					l = n,
					{
						startColumnTime: c,
						endColumnTime: s,
						baseWidth: u,
						columnIndex: d,
						renderStart: p,
						renderEnd: f
					} = (c = t),
					h = l['duplicateEvents'],
					{ top: p, height: f } = hl(p, f, c, s),
					c = {
						top: p,
						left: u * d,
						width: u,
						height: Math.max(1, f),
						duplicateLeft: '',
						duplicateWidth: ''
					};
				0 < h.length &&
					((c.duplicateLeft = (function (e, t) {
						const { duplicateEvents: n, duplicateEventIndex: r } = e,
							o = n[r - 1];
						let i = t;
						if (o) {
							const { percent: e, px: t } = It(''.concat(o.duplicateLeft)),
								{ percent: n, px: r } = It(''.concat(o.duplicateWidth)),
								a = e + n,
								l = t + r + 2;
							i =
								0 !== a
									? 'calc('
											.concat(P(a), ' ')
											.concat(0 < l ? '+' : '-', ' ')
											.concat(Et(Math.abs(l)), ')')
									: Et(l);
						} else i = P(i);
						return i;
					})(l, c.left)),
					(c.duplicateWidth =
						((s = c.width),
						(p = l).collapse
							? ''.concat(9, 'px')
							: 'calc('
									.concat(P(s), ' - ')
									.concat(Et(11 * (p.duplicateEvents.length - 1) + 2), ')')))),
					l.setUIProps(c);
				{
					d = n;
					var m = t,
						{ renderStart: u, renderEnd: f, modelStart: h, modelEnd: s } = m,
						{ goingDuration: m = 0, comingDuration: p = 0 } = d.model;
					let e = 100;
					if (0 < m) {
						const m = hl(u, h, u, f)['height'];
						(d.goingDurationHeight = m), (e -= m);
					}
					if (0 < p) {
						const m = hl(s, f, u, f)['height'];
						(d.comingDurationHeight = m), (e -= m);
					}
					d.modelDurationHeight = e;
				}
				var l = n,
					{ goingStart: c, comingEnd: m, startColumnTime: h, endColumnTime: p } = t;
				c < h && (l.croppedStart = !0), p < m && (l.croppedEnd = !0);
			}
			const vl = { timegrid: O(Pa), scrollArea: O(a('scroll-area')) };
			function yl(e) {
				let { timeGridData: n, events: t } = e;
				const {
						isReadOnly: r,
						week: { narrowWeekend: o, startDayOfWeek: i, collapseDuplicateEvents: a }
					} = U(_r),
					l = U(il),
					c = U((e) => e.weekViewLayout.selectedDuplicateEventCid),
					[, s] = Nr(),
					u = (function () {
						const e = W(!0);
						return (
							B(
								() => () => {
									e.current = !1;
								},
								[]
							),
							N(() => e.current, [])
						);
					})(),
					d = L(Rr)['width'],
					[p, f] = z(null),
					{ columns: h, rows: m } = n,
					g = h.length - 1,
					v = I(
						() =>
							h
								.map((e) => {
									e = e.date;
									return t.filter(ml(M(e), T(e))).map((e) => e.clone());
								})
								.map((e, t) => {
									var r = Nn(h[t].date, m[0].startTime),
										o = Nn(h[t].date, nn(m).endTime),
										t = c,
										n = a;
									if (((e = e.filter(Hn).filter(ml(r, o)).sort(tn.event.asc)), n)) {
										var s = e,
											u = t;
										const { getDuplicateEvents: d, getMainEvent: p } = n,
											f = s.map((e) => e.model.toEventObject());
										s.forEach((e) => {
											if (!(e.collapse || 0 < e.duplicateEvents.length)) {
												e = d(e.model.toEventObject(), f);
												if (!(e.length <= 1)) {
													const o = p(e),
														i = e.map((t) => s.find((e) => e.cid() === t.__cid)),
														a = !!(-1 < u && e.find((e) => e.__cid === u)),
														l = e.reduce((e, t) => {
															var { start: t, goingDuration: n } = t;
															return Dn(e, R(t, -n));
														}, e[0].start),
														c = e.reduce((e, t) => {
															var { end: t, comingDuration: n } = t;
															return bn(e, R(t, n));
														}, e[0].end);
													i.forEach((e, t) => {
														var n = e.cid() === o.__cid,
															r = !((a && e.cid() === u) || (!a && n));
														e.setUIProps({
															duplicateEvents: i,
															duplicateEventIndex: t,
															collapse: r,
															isMain: n,
															duplicateStarts: l,
															duplicateEnds: c
														});
													});
												}
											}
										});
									}
									return (
										qr(zn(...(t = e.filter((e) => !e.collapse))), Xr(t, !0), !0).forEach((e) => {
											const t = Math.max(...e.map((e) => e.length)),
												n = Math.round(100 / t);
											e.forEach((e) => {
												e.forEach((e, t) => {
													gl({
														uiModel: e,
														columnIndex: t,
														baseWidth: n,
														startColumnTime: r,
														endColumnTime: o
													});
												});
											});
										}),
										e
									);
								}),
						[h, m, t, c, a]
					),
					y = I(() => {
						const t = s(),
							e = h.findIndex((e) => _n(e.date, t));
						return e < 0
							? null
							: {
									startTime: Nn(h[e].date, n.rows[0].startTime),
									endTime: Nn(h[e].date, nn(n.rows).endTime),
									currentDateIndex: e
								};
					}, [h, s, n.rows]),
					[w, _] = Ci(),
					b = I(
						() =>
							Do({
								rowsCount: m.length,
								columnsCount: h.length,
								container: w,
								narrowWeekend: o,
								startDayOfWeek: i
							}),
						[h.length, w, o, m.length, i]
					),
					D = Ni({
						type: 'timeGrid',
						gridPositionFinder: b,
						selectionSorter: Co.sortSelection,
						dateGetter: Co.getDateFromCollection,
						dateCollection: n
					}),
					x = N(() => {
						var e, t, n;
						j(y) &&
							(({ startTime: e, endTime: t } = y), e <= (n = s())) &&
							n <= t &&
							f({ top: fl(n, e, t), now: n });
					}, [y, s]);
				ke(() => {
					var e;
					u() &&
						(0 <= (null != (e = null == y ? void 0 : y.currentDateIndex) ? e : -1) ? x() : f(null));
				}, [y, u, x]);
				{
					var k = x,
						S = j(y) ? fn : null;
					const C = W(k);
					B(() => {
						C.current = k;
					}, [k]),
						B(() => {
							var e = null != S ? S : -1;
							if (0 < e) {
								const S = setInterval(() => C.current(), e);
								return () => clearInterval(S);
							}
						}, [S]);
				}
				return F(
					'div',
					{ className: vl.timegrid },
					F(
						'div',
						{ className: vl.scrollArea },
						F(pl, { timeGridRows: m, nowIndicatorState: p }),
						F(
							'div',
							{ className: O('columns'), style: { left: d }, ref: _, onMouseDown: vi(!r, D) },
							F(Va, { timeGridRows: m }),
							F(Ka, { gridPositionFinder: b, timeGridData: n }),
							h.map((e, t) =>
								F(Ua, {
									key: e.date.toString(),
									timeGridData: n,
									columnDate: e.date,
									columnWidth: P(e.width),
									columnIndex: t,
									totalUIModels: v,
									gridPositionFinder: b,
									isLastColumn: t === g
								})
							),
							l && j(y) && j(p)
								? F(tl, {
										top: p.top,
										columnWidth: h[0].width,
										columnCount: h.length,
										columnIndex: y.currentDateIndex
									})
								: null
						)
					)
				);
			}
			function wl(e) {
				let t = e['isCollapsed'];
				const n = $(),
					r = O('icon', { 'ic-arrow-right': t, 'ic-arrow-left': !t });
				return F(
					'button',
					{
						className: O(a('timezone-collapse-button')),
						'aria-expanded': !t,
						onClick: () => n.fire('clickTimezonesCollapseBtn', t)
					},
					F('span', { className: r, role: 'img' })
				);
			}
			function _l() {
				return (_l = Object.assign
					? Object.assign.bind()
					: function (e) {
							for (var t = 1; t < arguments.length; t++) {
								var n,
									r = arguments[t];
								for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
							}
							return e;
						}).apply(this, arguments);
			}
			function bl(e) {
				var { label: e, offset: t, tooltip: n, width: r = 100, left: o } = e;
				return F(
					'div',
					{
						title: n,
						className: O(a('timezone-label')),
						style: { width: P(r), height: P(100), left: P(o) },
						role: 'gridcell'
					},
					F(V, {
						template: 'timezoneDisplayLabel',
						param: { displayLabel: e, timezoneOffset: t },
						as: 'span'
					})
				);
			}
			function Dl(e) {
				e = e.top;
				const t = U(Ir),
					n = L(Rr)['width'],
					r = Mr(),
					{ showTimezoneCollapseButton: o, timezonesCollapsed: i } = (function () {
						const e = U(al),
							t = U(ll);
						return I(() => ({ showTimezoneCollapseButton: e, timezonesCollapsed: t }), [e, t]);
					})();
				if (t.length <= 1) return null;
				const a = t.map((e) => {
						var { displayLabel: e, timezoneName: t, tooltip: n } = e;
						return Ft()(e)
							? { label: null, offset: r(t).getTimezoneOffset(), tooltip: null != n ? n : t }
							: { label: e, offset: null, tooltip: null != n ? n : t };
					}),
					[l, ...c] = a,
					s = c.reverse(),
					u = 100 / (i ? 1 : t.length);
				return F(
					'div',
					{
						style: { top: e, width: n },
						role: 'columnheader',
						className: O('timezone-labels-slot')
					},
					!i &&
						s.map((e, t) => {
							var n;
							return F(
								bl,
								_l(
									{
										key: 'subTimezone-'.concat(null != (n = e.label) ? n : e.offset),
										width: u,
										left: u * t
									},
									e
								)
							);
						}),
					o && F(wl, { isCollapsed: i }),
					F(bl, _l({ width: u, left: u * s.length }, l))
				);
			}
			const xl = { MONTH: 'month', WEEK: 'week', DAY: 'day' },
				kl = ['milestone', 'task'],
				Sl = ['allday', 'time'];
			function Cl(e, t) {
				var n = [];
				return (
					!0 === e ? n.push(...kl) : Array.isArray(e) && n.push(...e),
					!0 === t ? n.push(...Sl) : Array.isArray(t) && n.push(...t),
					n
				);
			}
			function El(e) {
				for (var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), r = 1; r < t; r++)
					n[r - 1] = arguments[r];
				const o = I(() => e.events.filter(Fn.and(...n)), [e.events, n]),
					i = (function (t) {
						const i = U(Cr),
							a = Mr();
						return I(() => {
							if ('Local' === i) return t;
							const r = Vt(new E()),
								{ timedEvents: e = zn(), totalEvents: o = zn() } = t.groupBy((e) =>
									'time' === e.category ? 'timedEvents' : 'totalEvents'
								);
							return (
								e.each((e) => {
									e = e;
									e = Object.assign(Object.create(Object.getPrototypeOf(e)), e);
									let t = a(i, e.start),
										n = a(i, e.end);
									r
										? (Vt(t) || (t = t.addHours(1)), Vt(n) || (n = n.addHours(1)))
										: (Vt(t) && (t = t.addHours(-1)), Vt(n) && (n = n.addHours(-1))),
										(e.start = t),
										(e.end = n),
										o.add(e);
								}),
								o
							);
						}, [t, i, a]);
					})(o);
				return I(() => ({ ...e, events: i }), [e, i]);
			}
			function Il(a, l) {
				mi(br, (e) => {
					let { y: t, draggingItemType: n, draggingState: r } = e;
					if (
						j(a) &&
						((e = n), /^(event|gridSelection)\/timeGrid/.test(null != e ? e : '')) &&
						r === G.DRAGGING &&
						j(t)
					) {
						const { offsetTop: e, offsetHeight: n, scrollHeight: r } = a,
							o = Math.floor(r / l),
							i = e + n;
						if (t < e + o) {
							const l = t - (e + o);
							a.scrollTop = Math.max(0, a.scrollTop + l);
						} else if (i - o < t) {
							const l = t - (i - o);
							a.scrollTop = Math.min(n, a.scrollTop + l);
						}
					}
				});
			}
			function Ml(e) {
				return null == (e = e.weekViewLayout) || null == (e = e.dayGridRows) || null == (e = e.time)
					? void 0
					: e.height;
			}
			function Nl(e) {
				const t = U(Ml),
					[n, r] = z(null);
				return (
					ke(() => {
						j(t) && e && r(e.offsetTop);
					}, [t, e]),
					n
				);
			}
			function Tl(e) {
				let { rowIndex: t, weekDates: n, narrowWeekend: r } = e;
				e = U(
					N(
						(e) =>
							e.gridSelection.accumulated.dayGridMonth.map((e) =>
								Eo.calculateSelection(e, t, n.length)
							),
						[t, n]
					)
				);
				return F(
					'div',
					{ className: O('accumulated-grid-selection') },
					e.map((e) =>
						e
							? F(ko, { type: 'accumulated', gridSelectionData: e, weekDates: n, narrowWeekend: r })
							: null
					)
				);
			}
			function Ol(e) {
				let { type: t, number: n, onClickButton: r, className: o } = e;
				const i = Y('dnd')['reset'];
				return F(
					'button',
					{
						type: 'button',
						onMouseDown: (e) => {
							e.stopPropagation();
						},
						onClick: () => {
							i(), r();
						},
						className: o
					},
					F(V, {
						template: 'monthGrid'.concat(t === $r.header ? 'Header' : 'Footer', 'Exceed'),
						param: n
					})
				);
			}
			function Pl(e) {
				var { type: e = $r.header, exceedCount: t = 0, date: n, onClickExceedCount: r } = e,
					o = U(wr)['renderDate'],
					[, i] = Nr(),
					a = (function () {
						const e = L(Or),
							t = Gr();
						return I(() => ({ common: e, month: t }), [e, t]);
					})(),
					l = a.month.gridCell[''.concat(e, 'Height')],
					c = f(n, 'YYYYMMDD'),
					i = f(i(), 'YYYYMMDD'),
					s = c === i,
					i = {
						date: f(n, 'YYYY-MM-DD'),
						day: n.getDay(),
						hiddenEventCount: t,
						isOtherMonth: n.getMonth() !== o.getMonth(),
						isToday: c === i,
						month: n.getMonth(),
						ymd: c
					},
					c = {
						color: (function (e) {
							var { date: e, theme: t, renderDate: n, isToday: r } = e,
								o = e.getDay(),
								n = n.getMonth() === e.getMonth(),
								{
									common: { holiday: e, saturday: t, today: i, dayName: a },
									month: { dayExceptThisMonth: l, holidayExceptThisMonth: c }
								} = t;
							return (r ? i : Sn(o) ? (n ? e : c) : Cn(o) ? (n ? t : l) : n ? a : l).color;
						})({ date: n, theme: a, isToday: s, renderDate: o })
					},
					n = 'monthGrid'.concat(Xn(e));
				return A(l)
					? null
					: F(
							'div',
							{ className: O('grid-cell-'.concat(e)), style: { height: l } },
							F(
								'span',
								{ className: O('grid-cell-date'), style: c },
								F(V, { template: n, param: i })
							),
							t
								? F(Ol, {
										type: e,
										number: t,
										onClickButton: r,
										className: O('grid-cell-more-events')
									})
								: null
						);
			}
			function Al(a, l, t) {
				const { width: c, height: s } = L(Lr),
					[u, e] = Ci(),
					[n, r] = z(null);
				return (
					B(() => {
						var e;
						t &&
							l &&
							u &&
							((e = (function () {
								var {
										grid: e,
										offsetWidth: t,
										eventLength: n,
										layerSize: r
									} = {
										grid: l,
										offsetWidth: u.offsetWidth,
										eventLength: a,
										layerSize: { width: c, height: s }
									},
									e = ar(e).height + 10;
								let o = t + 10;
								var { width: t, height: r } = r;
								o = Math.max(o, 280);
								let i = 61;
								return (
									(i += n <= 10 ? 26 * n : 260),
									t && (o = t),
									r && (i = r),
									(isNaN(i) || i < e) && (i = e),
									{ width: o, height: i }
								);
							})()),
							(e = (function (e) {
								var { layoutContainer: e, cell: t, popupSize: n } = e,
									e = (function (e, t, n) {
										var { width: t, height: r, left: o, top: i } = t,
											{ width: e, height: a } = e,
											t = o + t,
											r = i + r;
										let l = n.left + n.width / 2 - e / 2,
											c = n['top'];
										var n = l + e > t,
											s = c + a > r;
										return (
											l < o && (l = o),
											n && (l = t - e),
											c < i && (c = i),
											{ top: (c = s ? r - a : c) + window.scrollY, left: l + window.scrollX }
										);
									})(n, e.getBoundingClientRect(), t.getBoundingClientRect());
								return { ...n, ...e };
							})({ cell: u, layoutContainer: t, popupSize: e })),
							r(e));
					}, [t, u, a, l, c, s]),
					{ popupPosition: n, containerRefCallback: e }
				);
			}
			function Rl(e) {
				return e.month.weekend.backgroundColor;
			}
			function Ll(e) {
				let { date: t, events: n = [], style: r, parentContainer: o, contentAreaHeight: i } = e;
				const a = li(),
					l = Y('popup')['showSeeMorePopup'],
					c = L(Rl),
					{ popupPosition: s, containerRefCallback: u } = Al(n.length, o, a),
					d = N(() => {
						s && l({ date: t, popupPosition: s, events: n });
					}, [t, n, s, l]),
					p = po(n, i, 26);
				return F(
					'div',
					{
						className: O('daygrid-cell'),
						style: { ...r, backgroundColor: kn(t.getDay()) ? c : 'inherit' },
						ref: u
					},
					F(Pl, { type: $r.header, exceedCount: p, date: t, onClickExceedCount: d }),
					F(Pl, { type: $r.footer, exceedCount: p, date: t, onClickExceedCount: d })
				);
			}
			const Hl = Po(function (e) {
				let { week: t, rowInfo: i, gridDateEventModelMap: a = {}, contentAreaHeight: l } = e;
				const [c, n] = Ci(),
					r = L(N((e) => e.common.border, []));
				return F(
					'div',
					{ className: O('weekday-grid'), style: { borderTop: r }, ref: n },
					t.map((e, t) => {
						var n = e.getDay(),
							{ width: t, left: r } = i[t],
							o = f(M(e), 'YYYYMMDD');
						return F(Ll, {
							key: 'daygrid-cell-'.concat(n),
							date: e,
							style: { width: P(t), left: P(r) },
							parentContainer: c,
							events: a[o],
							contentAreaHeight: l
						});
					})
				);
			});
			function Fl(e) {
				let { weekDates: t, narrowWeekend: n, rowIndex: r } = e;
				e = U(
					N((e) => Eo.calculateSelection(e.gridSelection.dayGridMonth, r, t.length), [r, t.length])
				);
				return A(e)
					? null
					: F(ko, { type: 'month', gridSelectionData: e, weekDates: t, narrowWeekend: n });
			}
			const zl = Po(function (e) {
				let { contentAreaHeight: t, eventHeight: n = co, events: r, name: o, className: i } = e;
				const a = L(Hr)['headerHeight'],
					l = r.filter(uo(t, n + 2)).map((e) =>
						F(_i, {
							key: ''.concat(o, '-DayEvent-').concat(e.cid()),
							uiModel: e,
							eventHeight: n,
							headerHeight: null != a ? a : 27
						})
					);
				return F('div', { className: i }, l);
			});
			function Bl(e) {
				var { dateMatrix: p, gridPositionFinder: f, rowInfo: h, rowIndex: m } = e,
					e = (function () {
						let {
							dateMatrix: r,
							rowInfo: n,
							gridPositionFinder: e,
							rowIndex: o
						} = { dateMatrix: p, rowInfo: h, gridPositionFinder: f, rowIndex: m };
						const i = $(),
							{
								isDraggingEnd: t,
								isDraggingCanceled: a,
								draggingEvent: l,
								clearDraggingEvent: c
							} = xi('dayGrid', 'move'),
							[s, u] = Di(e),
							d = I(() => {
								let e = null;
								var t;
								return (
									l &&
										(null == s ? void 0 : s.rowIndex) === o &&
										(((e = l).left =
											n[null != (t = null == s ? void 0 : s.columnIndex) ? t : 0].left),
										(e.width = n[null != (t = null == s ? void 0 : s.columnIndex) ? t : 0].width)),
									e
								);
							}, [l, null == s ? void 0 : s.rowIndex, null == s ? void 0 : s.columnIndex, o, n]);
						return (
							bi(() => {
								var e, t, n;
								!a &&
									j(d) &&
									j(s) &&
									((t = d.model.getStarts()),
									(e = d.duration()),
									(n = On(r[s.rowIndex][s.columnIndex], t) * pn),
									(t = new E(t.getTime() + n)),
									(n = new E(t.getTime() + e)),
									i.fire('beforeUpdateEvent', {
										event: d.model.toEventObject(),
										changes: { start: t, end: n }
									})),
									c(),
									u();
							}, t),
							d
						);
					})();
				return A(e)
					? null
					: F(_i, { uiModel: e, movingLeft: e.left, eventHeight: co, headerHeight: 30 });
			}
			function Wl(e, t) {
				return {
					startColumnIndex: Math.max(mo(e.getStarts(), t), 0),
					endColumnIndex: mo(e.getEnds(), t)
				};
			}
			function jl(e) {
				var t,
					{
						dateMatrix: v,
						cellWidthMap: y,
						gridPositionFinder: w,
						renderedUIModels: _,
						rowIndex: b
					} = e,
					e = (function () {
						let {
							dateMatrix: i,
							gridPositionFinder: e,
							renderedUIModels: a,
							cellWidthMap: o,
							rowIndex: l
						} = {
							dateMatrix: v,
							gridPositionFinder: w,
							cellWidthMap: y,
							renderedUIModels: _,
							rowIndex: b
						};
						const n = $(),
							{
								isDraggingEnd: t,
								isDraggingCanceled: r,
								draggingEvent: c,
								clearDraggingEvent: s
							} = xi('dayGrid', 'resize'),
							[u, d] = Di(e),
							[p, f] = z(null),
							h = N(() => {
								f(null), d(), s();
							}, [d, s]),
							m = I(() => {
								var e, t, n, r, o;
								return A(c)
									? null
									: ((t = (e = a.map((e) => {
											e = e.uiModels;
											return e.filter((e) => e.cid() === c.cid());
										})).findIndex((e) => 0 < e.length)),
										(n = rn(e, (e) => 0 < e.length)),
										(r = Wl(e[t][0], i[t])),
										(o = Wl(e[n][0], i[n])),
										{
											eventStartDateColumnIndex: r.startColumnIndex,
											eventStartDateRowIndex: t,
											eventEndDateColumnIndex: o.endColumnIndex,
											eventEndDateRowIndex: n,
											resizeTargetUIModelRows: e
										});
							}, [i, a, c]),
							g = j(m) && j(c) && j(u);
						return (
							B(() => {
								if (g && l === m.eventStartDateRowIndex) {
									var { eventStartDateRowIndex: t, eventStartDateColumnIndex: n } = m,
										r = m.resizeTargetUIModelRows[t][0].clone();
									let e;
									t === u.rowIndex
										? (e = o[n][Math.max(n, u.columnIndex)])
										: t > u.rowIndex
											? (e = o[n][n])
											: ((e = o[n][i[l].length - 1]), r.setUIProps({ exceedRight: !0 })),
										f([r, e]);
								}
							}, [m, g, o, u, i, l]),
							B(() => {
								var e;
								g &&
									m.eventStartDateRowIndex < l &&
									l < u.rowIndex &&
									((e = c.clone()).setUIProps({ left: 0, exceedLeft: !0, exceedRight: !0 }),
									f([e, '100%']));
							}, [m, g, u, c, l]),
							B(() => {
								var e;
								g &&
									m.eventStartDateRowIndex < u.rowIndex &&
									l === u.rowIndex &&
									((e = c.clone()).setUIProps({ left: 0, exceedLeft: !0 }),
									f([e, o[0][u.columnIndex]]));
							}, [m, g, o, u, c, l]),
							B(() => {
								g && l > m.eventStartDateRowIndex && l > u.rowIndex && f(null);
							}, [g, u, m, l]),
							bi(() => {
								var e, t;
								g &&
									(({ eventStartDateColumnIndex: t, eventStartDateRowIndex: e } = m), !r) &&
									((u.rowIndex === e && u.columnIndex >= t) || u.rowIndex > e) &&
									((t = i[u.rowIndex][u.columnIndex]),
									n.fire('beforeUpdateEvent', {
										event: c.model.toEventObject(),
										changes: { end: t }
									})),
									h();
							}, t),
							p
						);
					})();
				return A(e)
					? null
					: (([e, t] = e),
						F(
							'div',
							{ className: O('weekday-events') },
							F(_i, {
								key: 'resizing-event-'.concat(e.cid()),
								uiModel: e,
								eventHeight: xt,
								headerHeight: 30,
								resizingWidth: t
							})
						));
			}
			function Gl(e) {
				let { dateMatrix: o = [], rowInfo: i = [], cellWidthMap: a = [] } = e;
				const [t, n] = Ci(),
					r = U(gr),
					{ ref: l, cellContentAreaHeight: c } = (function (n) {
						const r = U(ol),
							{ headerHeight: o, footerHeight: i } = L(Hr),
							a = W(null),
							[e, l] = z(0);
						return (
							B(() => {
								var e, t;
								a.current &&
									((e = ar(a.current).height - (3 + (null != o ? o : 27)) - (null != i ? i : 0)),
									(t = r * (n + 2)),
									l(Math.min(e, t)));
							}, [i, o, n, r]),
							{ ref: a, cellContentAreaHeight: e }
						);
					})(xt),
					{ eventFilter: s, month: u, isReadOnly: d } = U(_r),
					{ narrowWeekend: p, startDayOfWeek: f } = u,
					h = 100 / o.length,
					m = I(
						() =>
							Do({
								container: t,
								rowsCount: o.length,
								columnsCount: o[0].length,
								narrowWeekend: p,
								startDayOfWeek: f
							}),
						[o, t, p, f]
					),
					g = El(r, s),
					v = I(
						() =>
							o.map((e) => {
								{
									var n = e,
										r = ((e = g), p);
									const o = e['idsOfDay'],
										t = oo(e, { start: n[0], end: T(n[n.length - 1]) }),
										i = [];
									return (
										so(t, (e) => {
											var t = e.model.cid();
											i[t] = (function (e, t, n) {
												var n = 2 < arguments.length && void 0 !== n && n,
													r = e.getStarts(),
													o = e.getEnds(),
													{ width: r, left: o } = go(r, o, t, n);
												return (e.width = r), (e.left = o), e;
											})(e, n, r);
										}),
										(e = Object.keys(o).reduce((e, t) => {
											var n = o[t];
											return (e[t] = n.map((e) => i[e]).filter((e) => !!e)), e;
										}, {})),
										{ uiModels: Object.values(i), gridDateEventModelMap: e }
									);
								}
							}),
						[g, o, p]
					);
				return F(
					'div',
					{
						ref: n,
						onMouseDown: vi(
							!d,
							Ni({
								type: 'dayGridMonth',
								gridPositionFinder: m,
								dateCollection: o,
								dateGetter: Eo.getDateFromCollection,
								selectionSorter: Eo.sortSelection
							})
						),
						className: O('month-daygrid')
					},
					o.map((e, t) => {
						var { uiModels: n, gridDateEventModelMap: r } = v[t];
						return F(
							'div',
							{
								key: 'dayGrid-events-'.concat(t),
								className: O('month-week-item'),
								style: { height: P(h) },
								ref: l
							},
							F(
								'div',
								{ className: O('weekday') },
								F(Hl, { gridDateEventModelMap: r, week: e, rowInfo: i, contentAreaHeight: c }),
								F(zl, {
									name: 'month',
									events: n,
									contentAreaHeight: c,
									eventHeight: xt,
									className: O('weekday-events')
								}),
								F(Fl, { weekDates: e, narrowWeekend: p, rowIndex: t }),
								F(Tl, { rowIndex: t, weekDates: e, narrowWeekend: p })
							),
							F(jl, {
								dateMatrix: o,
								gridPositionFinder: m,
								rowIndex: t,
								cellWidthMap: a,
								renderedUIModels: v
							}),
							F(Bl, { dateMatrix: o, gridPositionFinder: m, rowIndex: t, rowInfo: i })
						);
					})
				);
			}
			const Ul = {
				month: function () {
					const i = U(_r),
						e = U(wr)['renderDate'],
						t = (function () {
							const { dayNames: t, startDayOfWeek: n, workweek: r } = i.month,
								e = [...Array(7)].map((e, t) => (n + t) % 7),
								o = e.map((e) => ({ day: e, label: Xn(t[e]) }));
							return o.filter((e) => !r || !kn(e.day));
						})(),
						n = i.month,
						{ narrowWeekend: r, startDayOfWeek: o, workweek: a } = n,
						l = I(() => wo(e, n), [n, e]),
						{ rowStyleInfo: c, cellWidthMap: s } = I(
							() => In(t.length, r, o, a),
							[t.length, r, o, a]
						),
						u = c.map((e, t) => ({ ...e, date: l[0][t] }));
					return F(
						Ma,
						{ className: O('month') },
						F(Vr, { type: 'month', dayNames: t, options: n, rowStyleInfo: c }),
						F(Gl, { dateMatrix: l, rowInfo: u, cellWidthMap: s })
					);
				},
				week: function () {
					const {
							options: e,
							calendar: t,
							gridRowLayout: n,
							lastPanelType: r,
							renderDate: o
						} = (function () {
							const e = U(_r),
								t = U(gr),
								{ dayGridRows: n, lastPanelType: r } = U(vr),
								o = U(wr)['renderDate'];
							return I(
								() => ({
									options: e,
									calendar: t,
									gridRowLayout: n,
									lastPanelType: r,
									renderDate: o
								}),
								[t, n, r, e, o]
							);
						})(),
						i = L(N((e) => e.week.dayGridLeft.width, [])),
						a = U(Cr),
						[l, c] = Ci(),
						s = e.week,
						{
							narrowWeekend: u,
							startDayOfWeek: d,
							workweek: p,
							hourStart: f,
							hourEnd: h,
							eventView: m,
							taskView: g
						} = s,
						v = I(() => _o(o, s), [o, s]),
						y = Zn(v, null != (E = null == (E = e.week) ? void 0 : E.dayNames) ? E : []),
						{ rowStyleInfo: w, cellWidthMap: _ } = In(v.length, u, d, p),
						b = El(t, e.eventFilter),
						D = I(() => {
							var [e, t] = 'Local' === a ? [M(v[0]), T(nn(v))] : [M(Tn(v[0], -1)), T(Tn(nn(v), 1))];
							return yo(v, b, {
								narrowWeekend: u,
								hourStart: f,
								hourEnd: h,
								weekStartDate: e,
								weekEndDate: t
							});
						}, [b, h, f, u, a, v]),
						x = I(() => bo(v, { hourStart: f, hourEnd: h, narrowWeekend: u }), [h, f, u, v]),
						k = Cl(g, m),
						S = k.map((e) => {
							var t;
							return 'time' === e
								? null
								: ((e = e),
									F(
										Oa,
										{ name: e, key: e, resizable: e !== r },
										'allday' === e
											? F(Ti, {
													events: D[e],
													rowStyleInfo: w,
													gridColWidthMap: _,
													weekDates: v,
													height: null == (t = n[e]) ? void 0 : t.height,
													options: s
												})
											: F(Oi, {
													category: e,
													events: D[e],
													weekDates: v,
													height: null == (t = n[e]) ? void 0 : t.height,
													options: s,
													gridColWidthMap: _
												})
									));
						}),
						C = I(() => k.includes('time'), [k]);
					Il(l, x.rows.length);
					var E = Nl(l);
					return F(
						Ma,
						{ className: O('week-view'), autoAdjustPanels: !0 },
						F(
							Oa,
							{ name: 'week-view-day-names', initialHeight: 44 },
							F(Vr, { type: 'week', dayNames: y, marginLeft: i, options: s, rowStyleInfo: w })
						),
						S,
						C
							? F(
									Oa,
									{ name: 'time', autoSize: 1, ref: c },
									F(yl, { events: D.time, timeGridData: x }),
									F(Dl, { top: E })
								)
							: null
					);
				},
				day: function () {
					const {
							calendar: e,
							options: t,
							gridRowLayout: n,
							lastPanelType: r,
							renderDate: o
						} = (function () {
							const e = U(gr),
								t = U(_r),
								{ dayGridRows: n, lastPanelType: r } = U(vr),
								o = U(wr)['renderDate'];
							return I(
								() => ({
									calendar: e,
									options: t,
									gridRowLayout: n,
									lastPanelType: r,
									renderDate: o
								}),
								[e, t, n, r, o]
							);
						})(),
						i = U(Cr),
						a = L(N((e) => e.week.dayGridLeft.width, [])),
						[l, c] = Ci(),
						s = t.week,
						{
							narrowWeekend: u,
							startDayOfWeek: d,
							workweek: p,
							hourStart: f,
							hourEnd: h,
							eventView: m,
							taskView: g
						} = s,
						v = I(() => [o], [o]),
						y = Zn(v, null != (C = null == (C = t.week) ? void 0 : C.dayNames) ? C : []),
						{ rowStyleInfo: w, cellWidthMap: _ } = In(v.length, u, d, p),
						b = El(e, t.eventFilter),
						D = I(() => {
							var [e, t] = 'Local' === i ? [M(v[0]), T(v[0])] : [M(Tn(v[0], -1)), T(Tn(v[0], 1))];
							return yo(v, b, {
								narrowWeekend: u,
								hourStart: f,
								hourEnd: h,
								weekStartDate: e,
								weekEndDate: t
							});
						}, [b, v, h, f, u, i]),
						x = I(() => bo(v, { hourStart: f, hourEnd: h, narrowWeekend: u }), [v, h, f, u]),
						k = Cl(g, m),
						S = k.map((e) => {
							var t;
							return 'time' === e
								? null
								: ((e = e),
									F(
										Oa,
										{ key: e, name: e, resizable: e !== r },
										'allday' === e
											? F(Ti, {
													events: D[e],
													rowStyleInfo: w,
													gridColWidthMap: _,
													weekDates: v,
													height: null == (t = n[e]) ? void 0 : t.height,
													options: s
												})
											: F(Oi, {
													category: e,
													events: D[e],
													weekDates: v,
													height: null == (t = n[e]) ? void 0 : t.height,
													options: s,
													gridColWidthMap: _
												})
									));
						});
					Il(l, x.rows.length);
					var C = Nl(l);
					return F(
						Ma,
						{ className: O('day-view'), autoAdjustPanels: !0 },
						F(
							Oa,
							{ name: 'day-view-day-names', initialHeight: 43 },
							F(Vr, { type: 'week', dayNames: y, marginLeft: a, rowStyleInfo: w })
						),
						S,
						k.includes('time')
							? F(
									Oa,
									{ name: 'time', autoSize: 1, ref: c },
									F(yl, { events: D.time, timeGridData: x }),
									F(Dl, { top: C })
								)
							: null
					);
				}
			};
			function Yl() {
				const e = U(wr)['currentView'];
				return F(
					I(() => Ul[e] || (() => null), [e]),
					null
				);
			}
			var Vl = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i,
				$l = /[&<>"]/;
			function Xl(e) {
				e = String(e);
				return $l.test(e)
					? e
							.replace(/&/g, '&amp;')
							.replace(/</g, '&lt;')
							.replace(/>/g, '&gt;')
							.replace(/"/g, '&quot;')
					: e;
			}
			var ql = function (e, t) {
					return String(e).replace(/(\n+)/g, '$1' + (t || '\t'));
				},
				Kl = function (e, t, n) {
					return (
						String(e).length > (t || 40) ||
						(!n && -1 !== String(e).indexOf('\n')) ||
						-1 !== String(e).indexOf('<')
					);
				},
				Zl = {};
			function Jl(e) {
				var t,
					n = '';
				for (t in e) {
					var r = e[t];
					null != r &&
						'' !== r &&
						(n && (n += ' '),
						(n =
							(n +=
								'-' == t[0] ? t : Zl[t] || (Zl[t] = t.replace(/([A-Z])/g, '-$1').toLowerCase())) +
							': ' +
							r),
						'number' == typeof r && !1 === Vl.test(t) && (n += 'px'),
						(n += ';'));
				}
				return n || void 0;
			}
			function Ql(e, t) {
				for (var n in t) e[n] = t[n];
				return e;
			}
			function ec(e, t) {
				return Array.isArray(t) ? t.reduce(ec, e) : null != t && !1 !== t && e.push(t), e;
			}
			var tc = { shallow: !0 },
				nc = [],
				rc = /^(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)$/,
				oc = /[\s\n\\/='"\0<>]/;
			function ic() {
				this.__d = !0;
			}
			var ac = [];
			function lc(e, t, n) {
				(t = t || {}), (n = n || {});
				var r = H.__s,
					t =
						((H.__s = !0),
						(function e(t, n, r, o, i, a) {
							if (null == t || 'boolean' == typeof t) return '';
							if ('object' != typeof t) return Xl(t);
							var l = r.pretty,
								c = l && 'string' == typeof l ? l : '\t';
							if (Array.isArray(t)) {
								for (var s = '', u = 0; u < t.length; u++)
									l && 0 < u && (s += '\n'), (s += e(t[u], n, r, o, i, a));
								return s;
							}
							var d = t.type,
								p = t.props,
								f = !1;
							if ('function' == typeof d) {
								if (((f = !0), !r.shallow || (!o && !1 !== r.renderRootComponent))) {
									if (d === K)
										return (
											ec((v = []), t.props.children), e(v, n, r, !1 !== r.shallowHighOrder, i, a)
										);
									var h,
										m = (t.__c = {
											__v: t,
											context: n,
											props: t.props,
											setState: ic,
											forceUpdate: ic,
											__d: !0,
											__h: []
										}),
										g = (H.__b && H.__b(t), H.__r);
									if (d.prototype && 'function' == typeof d.prototype.render) {
										var v = d.contextType,
											y = v && n[v.__c],
											y = null != v ? (y ? y.props.value : v.__) : n;
										((m = t.__c = new d(p, y)).__v = t),
											(m._dirty = m.__d = !0),
											(m.props = p),
											null == m.state && (m.state = {}),
											null == m._nextState && null == m.__s && (m._nextState = m.__s = m.state),
											(m.context = y),
											d.getDerivedStateFromProps
												? (m.state = Ql(
														Ql({}, m.state),
														d.getDerivedStateFromProps(m.props, m.state)
													))
												: m.componentWillMount &&
													(m.componentWillMount(),
													(m.state =
														m._nextState !== m.state
															? m._nextState
															: m.__s !== m.state
																? m.__s
																: m.state)),
											g && g(t),
											(h = m.render(m.props, m.state, m.context));
									} else
										for (
											var v = d.contextType,
												y = v && n[v.__c],
												w = null != v ? (y ? y.props.value : v.__) : n,
												L = 0;
											m.__d && L++ < 25;

										)
											(m.__d = !1), g && g(t), (h = d.call(t.__c, p, w));
									return (
										m.getChildContext && (n = Ql(Ql({}, n), m.getChildContext())),
										H.diffed && H.diffed(t),
										e(h, n, r, !1 !== r.shallowHighOrder, i, a)
									);
								}
								d =
									(y = d).displayName ||
									(y !== Function && y.name) ||
									(function (e) {
										var t = (Function.prototype.toString.call(e).match(/^\s*function\s+([^( ]+)/) ||
											'')[1];
										if (!t) {
											for (var n = -1, r = nc.length; r--; )
												if (nc[r] === e) {
													n = r;
													break;
												}
											n < 0 && (n = nc.push(e) - 1), (t = 'UnnamedComponent' + n);
										}
										return t;
									})(y);
							}
							var _,
								b,
								D = '<' + d;
							if (p) {
								var x = Object.keys(p);
								r && !0 === r.sortAttributes && x.sort();
								for (var k = 0; k < x.length; k++) {
									var S = x[k],
										C = p[S];
									if ('children' !== S) {
										if (
											!oc.test(S) &&
											((r && r.allAttributes) ||
												('key' !== S && 'ref' !== S && '__self' !== S && '__source' !== S))
										) {
											if ('defaultValue' === S) S = 'value';
											else if ('defaultChecked' === S) S = 'checked';
											else if ('defaultSelected' === S) S = 'selected';
											else if ('className' === S) {
												if (void 0 !== p.class) continue;
												S = 'class';
											} else
												i &&
													/^xlink:?./.test(S) &&
													(S = S.toLowerCase().replace(/^xlink:?/, 'xlink:'));
											if ('htmlFor' === S) {
												if (p.for) continue;
												S = 'for';
											}
											'style' === S && C && 'object' == typeof C && (C = Jl(C)),
												'a' === S[0] && 'r' === S[1] && 'boolean' == typeof C && (C = String(C));
											var E = r.attributeHook && r.attributeHook(S, C, n, r, f);
											if (E || '' === E) D += E;
											else if ('dangerouslySetInnerHTML' === S) b = C && C.__html;
											else if ('textarea' === d && 'value' === S) _ = C;
											else if ((C || 0 === C || '' === C) && 'function' != typeof C)
												if ((!0 !== C && '' !== C) || ((C = S), r && r.xml)) {
													if ('value' === S) {
														if ('select' === d) {
															a = C;
															continue;
														}
														'option' === d && a == C && void 0 === p.selected && (D += ' selected');
													}
													D = D + ' ' + S + '="' + Xl(C) + '"';
												} else D = D + ' ' + S;
										}
									} else _ = C;
								}
							}
							l &&
								((v = D.replace(/\n\s*/, ' ')) === D || ~v.indexOf('\n')
									? l && ~D.indexOf('\n') && (D += '\n')
									: (D = v));
							if (((D += '>'), oc.test(d)))
								throw new Error(d + ' is not a valid HTML tag name in ' + D);
							var I,
								y = rc.test(d) || (r.voidElements && r.voidElements.test(d)),
								M = [];
							if (b) l && Kl(b) && (b = '\n' + c + ql(b, c)), (D += b);
							else if (null != _ && ec((I = []), _).length) {
								for (var N = l && ~D.indexOf('\n'), T = !1, O = 0; O < I.length; O++) {
									var P,
										A = I[O];
									null != A &&
										!1 !== A &&
										((A = e(A, n, r, !0, 'svg' === d || ('foreignObject' !== d && i), a)),
										l && !N && Kl(A) && (N = !0),
										A) &&
										(l
											? ((P = 0 < A.length && '<' != A[0]),
												T && P ? (M[M.length - 1] += A) : M.push(A),
												(T = P))
											: M.push(A));
								}
								if (l && N) for (var R = M.length; R--; ) M[R] = '\n' + c + ql(M[R], c);
							}
							if (M.length || b) D += M.join('');
							else if (r && r.xml) return D.substring(0, D.length - 1) + ' />';
							return (
								(D =
									!y || I || b
										? (l && ~D.indexOf('\n') && (D += '\n'), D + '</' + d + '>')
										: D.replace(/>$/, ' />')),
								D
							);
						})(e, t, n));
				return H.__c && H.__c(e, ac), (ac.length = 0), (H.__s = r), t;
			}
			(lc.render = lc).shallowRender = function (e, t) {
				return lc(e, t, tc);
			};
			var cc = lc,
				e = fc(1391),
				sc = fc.n(e);
			function uc(e) {
				var { theme: e, store: t, eventBus: n, children: r } = e;
				return F(Sr, { value: n }, F(jr, { store: e }, F(fr, { store: t }, F(Gi, null, r))));
			}
			t = fc(2278);
			class dc extends fc.n(t)() {
				on(e, t) {
					return super.on(e, t), this;
				}
				off(e, t) {
					return super.off(e, t), this;
				}
				fire(e) {
					for (var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), r = 1; r < t; r++)
						n[r - 1] = arguments[r];
					return super.fire(e, ...n), this;
				}
				once(e, t) {
					return super.once(e, t), this;
				}
			}
			var pc = class extends class {
				constructor(e) {
					var t,
						n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
					(this.container = w()(e)
						? null != (t = null == (t = document) ? void 0 : t.querySelector(e))
							? t
							: null
						: e),
						(this.theme = (function (e) {
							return dr(Wr(0 < arguments.length && void 0 !== e ? e : {}));
						})(n.theme)),
						(this.eventBus = new dc()),
						(this.store = (function (e) {
							return dr(pr(0 < arguments.length && void 0 !== e ? e : {}));
						})(n)),
						(this.renderRange = this.calculateRenderRange(M())),
						Dr().addHook('beforeSanitizeAttributes', (e) => {
							var t;
							'A' === e.tagName &&
								((t = e.getAttribute('target'))
									? e.setAttribute(xr, t)
									: e.setAttribute('target', '_self'));
						}),
						Dr().addHook('afterSanitizeAttributes', (e) => {
							'A' === e.tagName &&
								e.hasAttribute(xr) &&
								(e.setAttribute('target', e.getAttribute(xr)),
								e.removeAttribute(xr),
								'_blank' === e.getAttribute('target')) &&
								e.setAttribute('rel', 'noopener');
						}),
						!0 === this.getStoreState().options.usageStatistics &&
							sc()('calendar', 'UA-129951699-1');
				}
				getStoreState(e) {
					var t = this.store.getState();
					return e ? t[e] : t;
				}
				getStoreDispatchers(e) {
					var t = this.store.getState().dispatch;
					return e ? t[e] : t;
				}
				destroy() {
					var e;
					this.container && (e = this.container).__k && le(null, e),
						this.store.clearListeners(),
						this.theme.clearListeners(),
						this.eventBus.off(),
						Dr().removeAllHooks();
					for (const t in this) this.hasOwnProperty(t) && delete this[t];
				}
				calculateMonthRenderDate(e) {
					var { renderDate: e, offset: t, monthOptions: n } = e,
						e = new E(e),
						r = n['visibleWeeksCount'],
						r = wo(
							(e =
								0 < r
									? Tn(e, 7 * t * r)
									: (function (e, t) {
											var t = 1 < arguments.length && void 0 !== t ? t : 1,
												n = yn(e);
											if (0 !== t) {
												const e = n.getDate(),
													r = new E(n.getTime());
												if ((r.setMonth(n.getMonth() + t + 1, 0), e >= r.getDate())) return r;
												n.setFullYear(r.getFullYear(), r.getMonth(), e);
											}
											return n;
										})(e, t)),
							n
						),
						[[t]] = r;
					return { renderDate: e, renderRange: { start: t, end: nn(nn(r)) } };
				}
				calculateWeekRenderDate(e) {
					var { renderDate: e, offset: t, weekOptions: n } = e,
						e = new E(e),
						t = (e.addDate(7 * t), _o(e, n)),
						[n] = t;
					return { renderDate: e, renderRange: { start: n, end: nn(t) } };
				}
				calculateDayRenderDate(e) {
					var { renderDate: e, offset: t } = e,
						e = new E(e);
					return e.addDate(t), { renderDate: e, renderRange: { start: M(e), end: T(e) } };
				}
				move(t) {
					if (!A(t)) {
						var { currentView: n, renderDate: r } = this.getStoreState().view,
							o = this.getStoreState()['options'],
							i = this.getStoreDispatchers().view['setRenderDate'],
							a = new E(r);
						let e = { renderDate: a, renderRange: { start: new E(a), end: new E(a) } };
						'month' === n
							? (e = this.calculateMonthRenderDate({
									renderDate: r,
									offset: t,
									monthOptions: o.month
								}))
							: 'week' === n
								? (e = this.calculateWeekRenderDate({
										renderDate: r,
										offset: t,
										weekOptions: o.week
									}))
								: 'day' === n && (e = this.calculateDayRenderDate({ renderDate: r, offset: t })),
							i(e.renderDate),
							(this.renderRange = e.renderRange);
					}
				}
				createEvents(e) {
					var t = this.getStoreDispatchers('calendar')['createEvents'];
					t(e);
				}
				getEventModel(n, r) {
					var e = this.getStoreState('calendar')['events'];
					return e.find((e) => {
						var { id: e, calendarId: t } = e;
						return e === n && t === r;
					});
				}
				getEvent(e, t) {
					return null != (t = null == (e = this.getEventModel(e, t)) ? void 0 : e.toEventObject())
						? t
						: null;
				}
				updateEvent(e, t, n) {
					var r = this.getStoreDispatchers('calendar')['updateEvent'],
						e = this.getEventModel(e, t);
					e && r({ event: e, eventData: n });
				}
				deleteEvent(e, t) {
					var n = this.getStoreDispatchers('calendar')['deleteEvent'],
						e = this.getEventModel(e, t);
					e && n(e);
				}
				setCalendarVisibility(e, t) {
					var n = this.getStoreDispatchers('calendar')['setCalendarVisibility'];
					n(Array.isArray(e) ? e : [e], t);
				}
				render() {
					return (
						j(this.container) &&
							le(
								F(
									uc,
									{ theme: this.theme, store: this.store, eventBus: this.eventBus },
									this.getComponent()
								),
								this.container
							),
						this
					);
				}
				renderToString() {
					return cc(
						F(
							uc,
							{ theme: this.theme, store: this.store, eventBus: this.eventBus },
							this.getComponent()
						)
					);
				}
				clear() {
					var e = this.getStoreDispatchers('calendar')['clearEvents'];
					e();
				}
				scrollToNow() {
					this.eventBus.fire(
						'scrollToNow',
						0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 'auto'
					);
				}
				calculateRenderRange(e) {
					var t = this.getStoreState().view['currentView'],
						n = this.getStoreState()['options'],
						r = new E(e);
					let o = { start: new E(r), end: new E(r) };
					return (
						'month' === t
							? (o = this.calculateMonthRenderDate({
									renderDate: e,
									offset: 0,
									monthOptions: n.month
								}).renderRange)
							: 'week' === t
								? (o = this.calculateWeekRenderDate({
										renderDate: e,
										offset: 0,
										weekOptions: n.week
									}).renderRange)
								: 'day' === t &&
									(o = this.calculateDayRenderDate({ renderDate: e, offset: 0 }).renderRange),
						o
					);
				}
				today() {
					var e = this.getStoreDispatchers().view['setRenderDate'],
						t = new E();
					e(t), (this.renderRange = this.calculateRenderRange(t));
				}
				setDate(e) {
					var t = this.getStoreDispatchers('view')['setRenderDate'],
						e = new E(e);
					t(e), (this.renderRange = this.calculateRenderRange(e));
				}
				next() {
					this.move(1);
				}
				prev() {
					this.move(-1);
				}
				setCalendarColor(e, t) {
					var n = this.getStoreDispatchers().calendar['setCalendarColor'];
					n(e, t);
				}
				changeView(e) {
					var t = this.getStoreDispatchers('view')['changeView'];
					t(e), (this.renderRange = this.calculateRenderRange(this.getDate()));
				}
				getElement(e, t) {
					return this.getEvent(e, t) && this.container
						? this.container.querySelector(
								'[data-event-id="'.concat(e, '"][data-calendar-id="').concat(t, '"]')
							)
						: null;
				}
				setTheme(e) {
					var t = this.theme.getState().dispatch['setTheme'];
					t(e);
				}
				getOptions() {
					const { options: e, template: t } = this.getStoreState(),
						{ dispatch: n, ...r } = this.theme.getState();
					return { ...e, template: t, theme: r };
				}
				setOptions(e) {
					const { theme: t, template: n, ...r } = e,
						o = this.theme.getState().dispatch['setTheme'],
						{
							options: { setOptions: i },
							template: { setTemplate: a }
						} = this.getStoreDispatchers();
					j(t) && o(t), j(n) && a(n), i(r);
				}
				getDate() {
					var e = this.getStoreState().view['renderDate'];
					return e;
				}
				getDateRangeStart() {
					return this.renderRange.start;
				}
				getDateRangeEnd() {
					return this.renderRange.end;
				}
				getViewName() {
					var e = this.getStoreState('view')['currentView'];
					return e;
				}
				setCalendars(e) {
					var t = this.getStoreDispatchers().calendar['setCalendars'];
					t(e);
				}
				openFormPopup(e) {
					var t = this.getStoreDispatchers().popup['showFormPopup'],
						e = new Ln(e),
						{ title: n, location: r, start: o, end: i, isAllday: a, isPrivate: l, state: c } = e;
					t({
						isCreationPopup: !0,
						event: e,
						title: n,
						location: r,
						start: o,
						end: i,
						isAllday: a,
						isPrivate: l,
						eventState: c
					});
				}
				clearGridSelections() {
					var e = this.getStoreDispatchers().gridSelection['clearAll'];
					e();
				}
				fire(e) {
					for (var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), r = 1; r < t; r++)
						n[r - 1] = arguments[r];
					return this.eventBus.fire(e, ...n), this;
				}
				off(e, t) {
					return this.eventBus.off(e, t), this;
				}
				on(e, t) {
					return this.eventBus.on(e, t), this;
				}
				once(e, t) {
					return this.eventBus.once(e, t), this;
				}
			} {
				constructor(e) {
					var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
						{ defaultView: e = 'week' } = (super(e, t), t),
						n = e;
					if (!Object.values(xl).find((e) => e === n)) throw new Ht(e);
					this.render();
				}
				getComponent() {
					return F(Yl, null);
				}
			};
		})(),
		hc.default
	);
	function fc(e) {
		var t = r[e];
		return (
			void 0 !== t || ((t = r[e] = { exports: {} }), n[e].call(t.exports, t, t.exports, fc)),
			t.exports
		);
	}
	var n, r, hc;
});
