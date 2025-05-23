!(function (e, t) {
	'object' == typeof exports && 'undefined' != typeof module
		? (module.exports = t())
		: 'function' == typeof define && define.amd
			? define(t)
			: ((e = 'undefined' != typeof globalThis ? globalThis : e || self).flatpickr = t());
})(this, function () {
	'use strict';
	var me = function () {
		return (me =
			Object.assign ||
			function (e) {
				for (var t, n = 1, a = arguments.length; n < a; n++)
					for (var o in (t = arguments[n]))
						Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
				return e;
			}).apply(this, arguments);
	};
	function ge() {
		for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
		for (var a = Array(e), o = 0, t = 0; t < n; t++)
			for (var i = arguments[t], r = 0, l = i.length; r < l; r++, o++) a[o] = i[r];
		return a;
	}
	var pe = [
			'onChange',
			'onClose',
			'onDayCreate',
			'onDestroy',
			'onKeyDown',
			'onMonthChange',
			'onOpen',
			'onParseConfig',
			'onReady',
			'onValueUpdate',
			'onYearChange',
			'onPreCalendarPosition'
		],
		he = {
			_disable: [],
			allowInput: !1,
			allowInvalidPreload: !1,
			altFormat: 'F j, Y',
			altInput: !1,
			altInputClass: 'form-control input',
			animate: 'object' == typeof window && -1 === window.navigator.userAgent.indexOf('MSIE'),
			ariaDateFormat: 'F j, Y',
			autoFillDefaultTime: !0,
			clickOpens: !0,
			closeOnSelect: !0,
			conjunction: ', ',
			dateFormat: 'Y-m-d',
			defaultHour: 12,
			defaultMinute: 0,
			defaultSeconds: 0,
			disable: [],
			disableMobile: !1,
			enableSeconds: !1,
			enableTime: !1,
			errorHandler: function (e) {
				return 'undefined' != typeof console && console.warn(e);
			},
			getWeek: function (e) {
				var e = new Date(e.getTime()),
					t =
						(e.setHours(0, 0, 0, 0),
						e.setDate(e.getDate() + 3 - ((e.getDay() + 6) % 7)),
						new Date(e.getFullYear(), 0, 4));
				return (
					1 + Math.round(((e.getTime() - t.getTime()) / 864e5 - 3 + ((t.getDay() + 6) % 7)) / 7)
				);
			},
			hourIncrement: 1,
			ignoredFocusElements: [],
			inline: !1,
			locale: 'default',
			minuteIncrement: 5,
			mode: 'single',
			monthSelectorType: 'dropdown',
			nextArrow:
				"<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",
			noCalendar: !1,
			now: new Date(),
			onChange: [],
			onClose: [],
			onDayCreate: [],
			onDestroy: [],
			onKeyDown: [],
			onMonthChange: [],
			onOpen: [],
			onParseConfig: [],
			onReady: [],
			onValueUpdate: [],
			onYearChange: [],
			onPreCalendarPosition: [],
			plugins: [],
			position: 'auto',
			positionElement: void 0,
			prevArrow:
				"<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
			shorthandCurrentMonth: !1,
			showMonths: 1,
			static: !1,
			time_24hr: !1,
			weekNumbers: !1,
			wrap: !1
		},
		ve = {
			weekdays: {
				shorthand: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
				longhand: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
			},
			months: {
				shorthand: [
					'Jan',
					'Feb',
					'Mar',
					'Apr',
					'May',
					'Jun',
					'Jul',
					'Aug',
					'Sep',
					'Oct',
					'Nov',
					'Dec'
				],
				longhand: [
					'January',
					'February',
					'March',
					'April',
					'May',
					'June',
					'July',
					'August',
					'September',
					'October',
					'November',
					'December'
				]
			},
			daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
			firstDayOfWeek: 0,
			ordinal: function (e) {
				e %= 100;
				if (3 < e && e < 21) return 'th';
				switch (e % 10) {
					case 1:
						return 'st';
					case 2:
						return 'nd';
					case 3:
						return 'rd';
					default:
						return 'th';
				}
			},
			rangeSeparator: ' to ',
			weekAbbreviation: 'Wk',
			scrollTitle: 'Scroll to increment',
			toggleTitle: 'Click to toggle',
			amPM: ['AM', 'PM'],
			yearAriaLabel: 'Year',
			monthAriaLabel: 'Month',
			hourAriaLabel: 'Hour',
			minuteAriaLabel: 'Minute',
			time_24hr: !1
		},
		De = function (e, t) {
			return ('000' + e).slice(-1 * (t = void 0 === t ? 2 : t));
		},
		we = function (e) {
			return !0 === e ? 1 : 0;
		};
	function be(n, a) {
		var o;
		return function () {
			var e = this,
				t = arguments;
			clearTimeout(o),
				(o = setTimeout(function () {
					return n.apply(e, t);
				}, a));
		};
	}
	var Ce = function (e) {
		return e instanceof Array ? e : [e];
	};
	function Me(e, t, n) {
		if (!0 === n) return e.classList.add(t);
		e.classList.remove(t);
	}
	function ye(e, t, n) {
		e = window.document.createElement(e);
		return (n = n || ''), (e.className = t = t || ''), void 0 !== n && (e.textContent = n), e;
	}
	function xe(e) {
		for (; e.firstChild; ) e.removeChild(e.firstChild);
	}
	function Ee(e, t) {
		var n = ye('div', 'numInputWrapper'),
			a = ye('input', 'numInput ' + e),
			e = ye('span', 'arrowUp'),
			o = ye('span', 'arrowDown');
		if (
			(-1 === navigator.userAgent.indexOf('MSIE 9.0')
				? (a.type = 'number')
				: ((a.type = 'text'), (a.pattern = '\\d*')),
			void 0 !== t)
		)
			for (var i in t) a.setAttribute(i, t[i]);
		return n.appendChild(a), n.appendChild(e), n.appendChild(o), n;
	}
	function ke(t) {
		try {
			return 'function' == typeof t.composedPath ? t.composedPath()[0] : t.target;
		} catch (e) {
			return t.target;
		}
	}
	function e() {}
	var Te = function (e, t, n) {
			return n.months[t ? 'shorthand' : 'longhand'][e];
		},
		v = {
			D: e,
			F: function (e, t, n) {
				e.setMonth(n.months.longhand.indexOf(t));
			},
			G: function (e, t) {
				e.setHours((12 <= e.getHours() ? 12 : 0) + parseFloat(t));
			},
			H: function (e, t) {
				e.setHours(parseFloat(t));
			},
			J: function (e, t) {
				e.setDate(parseFloat(t));
			},
			K: function (e, t, n) {
				e.setHours((e.getHours() % 12) + 12 * we(new RegExp(n.amPM[1], 'i').test(t)));
			},
			M: function (e, t, n) {
				e.setMonth(n.months.shorthand.indexOf(t));
			},
			S: function (e, t) {
				e.setSeconds(parseFloat(t));
			},
			U: function (e, t) {
				return new Date(1e3 * parseFloat(t));
			},
			W: function (e, t, n) {
				(t = parseInt(t)), (e = new Date(e.getFullYear(), 0, 2 + 7 * (t - 1), 0, 0, 0, 0));
				return e.setDate(e.getDate() - e.getDay() + n.firstDayOfWeek), e;
			},
			Y: function (e, t) {
				e.setFullYear(parseFloat(t));
			},
			Z: function (e, t) {
				return new Date(t);
			},
			d: function (e, t) {
				e.setDate(parseFloat(t));
			},
			h: function (e, t) {
				e.setHours((12 <= e.getHours() ? 12 : 0) + parseFloat(t));
			},
			i: function (e, t) {
				e.setMinutes(parseFloat(t));
			},
			j: function (e, t) {
				e.setDate(parseFloat(t));
			},
			l: e,
			m: function (e, t) {
				e.setMonth(parseFloat(t) - 1);
			},
			n: function (e, t) {
				e.setMonth(parseFloat(t) - 1);
			},
			s: function (e, t) {
				e.setSeconds(parseFloat(t));
			},
			u: function (e, t) {
				return new Date(parseFloat(t));
			},
			w: e,
			y: function (e, t) {
				e.setFullYear(2e3 + parseFloat(t));
			}
		},
		Ie = {
			D: '',
			F: '',
			G: '(\\d\\d|\\d)',
			H: '(\\d\\d|\\d)',
			J: '(\\d\\d|\\d)\\w+',
			K: '',
			M: '',
			S: '(\\d\\d|\\d)',
			U: '(.+)',
			W: '(\\d\\d|\\d)',
			Y: '(\\d{4})',
			Z: '(.+)',
			d: '(\\d\\d|\\d)',
			h: '(\\d\\d|\\d)',
			i: '(\\d\\d|\\d)',
			j: '(\\d\\d|\\d)',
			l: '',
			m: '(\\d\\d|\\d)',
			n: '(\\d\\d|\\d)',
			s: '(\\d\\d|\\d)',
			u: '(.+)',
			w: '(\\d\\d|\\d)',
			y: '(\\d{2})'
		},
		l = {
			Z: function (e) {
				return e.toISOString();
			},
			D: function (e, t, n) {
				return t.weekdays.shorthand[l.w(e, t, n)];
			},
			F: function (e, t, n) {
				return Te(l.n(e, t, n) - 1, !1, t);
			},
			G: function (e, t, n) {
				return De(l.h(e, t, n));
			},
			H: function (e) {
				return De(e.getHours());
			},
			J: function (e, t) {
				return void 0 !== t.ordinal ? e.getDate() + t.ordinal(e.getDate()) : e.getDate();
			},
			K: function (e, t) {
				return t.amPM[we(11 < e.getHours())];
			},
			M: function (e, t) {
				return Te(e.getMonth(), !0, t);
			},
			S: function (e) {
				return De(e.getSeconds());
			},
			U: function (e) {
				return e.getTime() / 1e3;
			},
			W: function (e, t, n) {
				return n.getWeek(e);
			},
			Y: function (e) {
				return De(e.getFullYear(), 4);
			},
			d: function (e) {
				return De(e.getDate());
			},
			h: function (e) {
				return e.getHours() % 12 ? e.getHours() % 12 : 12;
			},
			i: function (e) {
				return De(e.getMinutes());
			},
			j: function (e) {
				return e.getDate();
			},
			l: function (e, t) {
				return t.weekdays.longhand[e.getDay()];
			},
			m: function (e) {
				return De(e.getMonth() + 1);
			},
			n: function (e) {
				return e.getMonth() + 1;
			},
			s: function (e) {
				return e.getSeconds();
			},
			u: function (e) {
				return e.getTime();
			},
			w: function (e) {
				return e.getDay();
			},
			y: function (e) {
				return String(e.getFullYear()).substring(2);
			}
		},
		Se = function (e) {
			var t = e.config,
				i = void 0 === t ? he : t,
				t = e.l10n,
				n = void 0 === t ? ve : t,
				t = e.isMobile,
				r = void 0 !== t && t;
			return function (a, e, t) {
				var o = t || n;
				return void 0 === i.formatDate || r
					? e
							.split('')
							.map(function (e, t, n) {
								return l[e] && '\\' !== n[t - 1] ? l[e](a, o, i) : '\\' !== e ? e : '';
							})
							.join('')
					: i.formatDate(a, e, o);
			};
		},
		_e = function (e) {
			var t = e.config,
				p = void 0 === t ? he : t,
				t = e.l10n,
				h = void 0 === t ? ve : t;
			return function (e, t, n, a) {
				if (0 === e || e) {
					var o,
						i = a || h,
						a = e;
					if (e instanceof Date) o = new Date(e.getTime());
					else if ('string' != typeof e && void 0 !== e.toFixed) o = new Date(e);
					else if ('string' == typeof e) {
						var r = t || (p || he).dateFormat,
							t = String(e).trim();
						if ('today' === t) (o = new Date()), (n = !0);
						else if (p && p.parseDate) o = p.parseDate(e, r);
						else if (/Z$/.test(t) || /GMT$/.test(t)) o = new Date(e);
						else {
							for (var l = void 0, c = [], s = 0, d = 0, u = ''; s < r.length; s++) {
								var f = r[s],
									m = '\\' === f,
									g = '\\' === r[s - 1] || m;
								Ie[f] && !g
									? ((u += Ie[f]),
										(g = new RegExp(u).exec(e)) &&
											((l = !0), c['Y' !== f ? 'push' : 'unshift']({ fn: v[f], val: g[++d] })))
									: m || (u += '.');
							}
							(o =
								p && p.noCalendar
									? new Date(new Date().setHours(0, 0, 0, 0))
									: new Date(new Date().getFullYear(), 0, 1, 0, 0, 0, 0)),
								c.forEach(function (e) {
									var t = e.fn,
										e = e.val;
									return (o = t(o, e, i) || o);
								}),
								(o = l ? o : void 0);
						}
					}
					if (o instanceof Date && !isNaN(o.getTime()))
						return !0 === n && o.setHours(0, 0, 0, 0), o;
					p.errorHandler(new Error('Invalid date provided: ' + a));
				}
			};
		};
	function Oe(e, t, n) {
		return !1 !== (n = void 0 === n ? !0 : n)
			? new Date(e.getTime()).setHours(0, 0, 0, 0) - new Date(t.getTime()).setHours(0, 0, 0, 0)
			: e.getTime() - t.getTime();
	}
	var Fe = function (e, t, n) {
			return 3600 * e + 60 * t + n;
		},
		Ae = 864e5;
	function Ne(e) {
		var t,
			n,
			a,
			o = e.defaultHour,
			i = e.defaultMinute,
			r = e.defaultSeconds;
		return (
			void 0 !== e.minDate &&
				((n = e.minDate.getHours()),
				(a = e.minDate.getMinutes()),
				(t = e.minDate.getSeconds()),
				(o = o < n ? n : o) === n && i < a && (i = a),
				o === n) &&
				i === a &&
				r < t &&
				(r = e.minDate.getSeconds()),
			void 0 !== e.maxDate &&
				((n = e.maxDate.getHours()),
				(a = e.maxDate.getMinutes()),
				(o = Math.min(o, n)) === n && (i = Math.min(a, i)),
				o === n) &&
				i === a &&
				(r = e.maxDate.getSeconds()),
			{ hours: o, minutes: i, seconds: r }
		);
	}
	function r(s, Y) {
		var p = { config: me(me({}, he), Pe.defaultConfig), l10n: ve };
		function j() {
			var e;
			return (
				(null == (e = p.calendarContainer) ? void 0 : e.getRootNode()).activeElement ||
				document.activeElement
			);
		}
		function H(e) {
			return e.bind(p);
		}
		function L() {
			var t = p.config;
			(!1 === t.weekNumbers && 1 === t.showMonths) ||
				(!0 !== t.noCalendar &&
					window.requestAnimationFrame(function () {
						var e;
						void 0 !== p.calendarContainer &&
							((p.calendarContainer.style.visibility = 'hidden'),
							(p.calendarContainer.style.display = 'block')),
							void 0 !== p.daysContainer &&
								((e = (p.days.offsetWidth + 1) * t.showMonths),
								(p.daysContainer.style.width = e + 'px'),
								(p.calendarContainer.style.width =
									e + (void 0 !== p.weekWrapper ? p.weekWrapper.offsetWidth : 0) + 'px'),
								p.calendarContainer.style.removeProperty('visibility'),
								p.calendarContainer.style.removeProperty('display'));
					}));
		}
		function d(e) {
			0 === p.selectedDates.length &&
				((a =
					void 0 === p.config.minDate || 0 <= Oe(new Date(), p.config.minDate)
						? new Date()
						: new Date(p.config.minDate.getTime())),
				(t = Ne(p.config)),
				a.setHours(t.hours, t.minutes, t.seconds, a.getMilliseconds()),
				(p.selectedDates = [a]),
				(p.latestSelectedDateObj = a)),
				void 0 !== e &&
					'blur' !== e.type &&
					((t = e).preventDefault(),
					(a = 'keydown' === t.type),
					(e = ke(t)),
					(o = e),
					void 0 !== p.amPM &&
						e === p.amPM &&
						(p.amPM.textContent = p.l10n.amPM[we(p.amPM.textContent === p.l10n.amPM[0])]),
					(e = parseFloat(o.getAttribute('min'))),
					(l = parseFloat(o.getAttribute('max'))),
					(i = parseFloat(o.getAttribute('step'))),
					(r = parseInt(o.value, 10)),
					(a = r + i * (t.delta || (a ? (38 === t.which ? 1 : -1) : 0))),
					void 0 !== o.value) &&
					2 === o.value.length &&
					((t = o === p.hourElement),
					(n = o === p.minuteElement),
					a < e
						? ((a = l + a + we(!t) + (we(t) && we(!p.amPM))), n && f(void 0, -1, p.hourElement))
						: l < a &&
							((a = o === p.hourElement ? a - l - we(!p.amPM) : e), n) &&
							f(void 0, 1, p.hourElement),
					p.amPM &&
						t &&
						(1 === i ? a + r === 23 : Math.abs(a - r) > i) &&
						(p.amPM.textContent = p.l10n.amPM[we(p.amPM.textContent === p.l10n.amPM[0])]),
					(o.value = De(a)));
			var t,
				n,
				a,
				o,
				i,
				r,
				l = p._input.value;
			u(), k(), p._input.value !== l && p._debouncedChange();
		}
		function u() {
			var e, t, n, a, o, i, r, l;
			void 0 !== p.hourElement &&
				void 0 !== p.minuteElement &&
				((n = (parseInt(p.hourElement.value.slice(-2), 10) || 0) % 24),
				(a = (parseInt(p.minuteElement.value, 10) || 0) % 60),
				(o = void 0 !== p.secondElement ? (parseInt(p.secondElement.value, 10) || 0) % 60 : 0),
				void 0 !== p.amPM &&
					((e = n), (t = p.amPM.textContent), (n = (e % 12) + 12 * we(t === p.l10n.amPM[1]))),
				(e =
					void 0 !== p.config.minTime ||
					(p.config.minDate &&
						p.minDateHasTime &&
						p.latestSelectedDateObj &&
						0 === Oe(p.latestSelectedDateObj, p.config.minDate, !0))),
				(t =
					void 0 !== p.config.maxTime ||
					(p.config.maxDate &&
						p.maxDateHasTime &&
						p.latestSelectedDateObj &&
						0 === Oe(p.latestSelectedDateObj, p.config.maxDate, !0))),
				void 0 !== p.config.maxTime &&
				void 0 !== p.config.minTime &&
				p.config.minTime > p.config.maxTime
					? ((r = Fe(
							p.config.minTime.getHours(),
							p.config.minTime.getMinutes(),
							p.config.minTime.getSeconds()
						)),
						Fe(
							p.config.maxTime.getHours(),
							p.config.maxTime.getMinutes(),
							p.config.maxTime.getSeconds()
						) < (i = Fe(n, a, o)) &&
							i < r &&
							((i = r),
							(n = (i = [
								(r = Math.floor(i / 3600)),
								(l = (i - 3600 * r) / 60),
								i - 3600 * r - 60 * l
							])[0]),
							(a = i[1]),
							(o = i[2])))
					: (t &&
							((r = void 0 !== p.config.maxTime ? p.config.maxTime : p.config.maxDate),
							(a =
								(n = Math.min(n, r.getHours())) === r.getHours()
									? Math.min(a, r.getMinutes())
									: a) === r.getMinutes()) &&
							(o = Math.min(o, r.getSeconds())),
						e &&
							((l = void 0 !== p.config.minTime ? p.config.minTime : p.config.minDate),
							(a =
								(n = Math.max(n, l.getHours())) === l.getHours() && a < l.getMinutes()
									? l.getMinutes()
									: a) === l.getMinutes()) &&
							(o = Math.max(o, l.getSeconds()))),
				c(n, a, o));
		}
		function a(e) {
			e = e || p.latestSelectedDateObj;
			e && e instanceof Date && c(e.getHours(), e.getMinutes(), e.getSeconds());
		}
		function c(e, t, n) {
			void 0 !== p.latestSelectedDateObj && p.latestSelectedDateObj.setHours(e % 24, t, n || 0, 0),
				p.hourElement &&
					p.minuteElement &&
					!p.isMobile &&
					((p.hourElement.value = De(
						p.config.time_24hr ? e : ((12 + e) % 12) + 12 * we(e % 12 == 0)
					)),
					(p.minuteElement.value = De(t)),
					void 0 !== p.amPM && (p.amPM.textContent = p.l10n.amPM[we(12 <= e)]),
					void 0 !== p.secondElement) &&
					(p.secondElement.value = De(n));
		}
		function R(e) {
			var t = ke(e),
				t = parseInt(t.value) + (e.delta || 0);
			(1 < t / 1e3 || ('Enter' === e.key && !/[^\d]/.test(t.toString()))) && w(t);
		}
		function l(t, n, a, o) {
			return n instanceof Array
				? n.forEach(function (e) {
						return l(t, e, a, o);
					})
				: t instanceof Array
					? t.forEach(function (e) {
							return l(e, n, a, o);
						})
					: (t.addEventListener(n, a, o),
						void p._handlers.push({
							remove: function () {
								return t.removeEventListener(n, a, o);
							}
						}));
		}
		function W() {
			x('onChange');
		}
		function o(e, t) {
			var n =
					void 0 !== e
						? p.parseDate(e)
						: p.latestSelectedDateObj ||
							(p.config.minDate && p.config.minDate > p.now
								? p.config.minDate
								: p.config.maxDate && p.config.maxDate < p.now
									? p.config.maxDate
									: p.now),
				a = p.currentYear,
				o = p.currentMonth;
			try {
				void 0 !== n && ((p.currentYear = n.getFullYear()), (p.currentMonth = n.getMonth()));
			} catch (e) {
				(e.message = 'Invalid date supplied: ' + n), p.config.errorHandler(e);
			}
			t && p.currentYear !== a && (x('onYearChange'), g()),
				!t || (p.currentYear === a && p.currentMonth === o) || x('onMonthChange'),
				p.redraw();
		}
		function B(e) {
			var t = ke(e);
			~t.className.indexOf('arrow') && f(e, t.classList.contains('arrowUp') ? 1 : -1);
		}
		function f(e, t, n) {
			(e = e && ke(e)),
				(n = n || (e && e.parentNode && e.parentNode.firstChild)),
				(e = le('increment'));
			(e.delta = t), n && n.dispatchEvent(e);
		}
		function m(e, t, n, a) {
			var o = b(t, !0),
				i = ye('span', e, t.getDate().toString());
			return (
				(i.dateObj = t),
				(i.$i = a),
				i.setAttribute('aria-label', p.formatDate(t, p.config.ariaDateFormat)),
				-1 === e.indexOf('hidden') &&
					0 === Oe(t, p.now) &&
					((p.todayDateElem = i).classList.add('today'), i.setAttribute('aria-current', 'date')),
				o
					? ((i.tabIndex = -1),
						ce(t) &&
							(i.classList.add('selected'), (p.selectedDateElem = i), 'range' === p.config.mode) &&
							(Me(i, 'startRange', p.selectedDates[0] && 0 === Oe(t, p.selectedDates[0], !0)),
							Me(i, 'endRange', p.selectedDates[1] && 0 === Oe(t, p.selectedDates[1], !0)),
							'nextMonthDay' === e) &&
							i.classList.add('inRange'))
					: i.classList.add('flatpickr-disabled'),
				'range' === p.config.mode &&
					((o = t), !('range' !== p.config.mode || p.selectedDates.length < 2)) &&
					0 <= Oe(o, p.selectedDates[0]) &&
					Oe(o, p.selectedDates[1]) <= 0 &&
					!ce(t) &&
					i.classList.add('inRange'),
				p.weekNumbers &&
					1 === p.config.showMonths &&
					'prevMonthDay' !== e &&
					a % 7 == 6 &&
					p.weekNumbers.insertAdjacentHTML(
						'beforeend',
						"<span class='flatpickr-day'>" + p.config.getWeek(t) + '</span>'
					),
				x('onDayCreate', i),
				i
			);
		}
		function J(e) {
			e.focus(), 'range' === p.config.mode && r(e);
		}
		function h(e) {
			for (
				var t = 0 < e ? 0 : p.config.showMonths - 1, n = 0 < e ? p.config.showMonths : -1, a = t;
				a != n;
				a += e
			)
				for (
					var o = p.daysContainer.children[a],
						i = 0 < e ? 0 : o.children.length - 1,
						r = 0 < e ? o.children.length : -1,
						l = i;
					l != r;
					l += e
				) {
					var c = o.children[l];
					if (-1 === c.className.indexOf('hidden') && b(c.dateObj)) return c;
				}
		}
		function v(e, t) {
			var n = j(),
				a = C(n || document.body),
				e =
					void 0 !== e
						? e
						: a
							? n
							: void 0 !== p.selectedDateElem && C(p.selectedDateElem)
								? p.selectedDateElem
								: void 0 !== p.todayDateElem && C(p.todayDateElem)
									? p.todayDateElem
									: h(0 < t ? 1 : -1);
			if (void 0 === e) p._input.focus();
			else if (a) {
				for (
					var o = e,
						i = t,
						r = -1 === o.className.indexOf('Month') ? o.dateObj.getMonth() : p.currentMonth,
						l = 0 < i ? p.config.showMonths : -1,
						c = 0 < i ? 1 : -1,
						s = r - p.currentMonth;
					s != l;
					s += c
				)
					for (
						var d = p.daysContainer.children[s],
							u = r - p.currentMonth === s ? o.$i + i : i < 0 ? d.children.length - 1 : 0,
							f = d.children.length,
							m = u;
						0 <= m && m < f && m != (0 < i ? f : -1);
						m += c
					) {
						var g = d.children[m];
						if (
							-1 === g.className.indexOf('hidden') &&
							b(g.dateObj) &&
							Math.abs(o.$i - m) >= Math.abs(i)
						)
							return void J(g);
					}
				p.changeMonth(c), v(h(c), 0);
			} else J(e);
		}
		function i() {
			if (void 0 !== p.daysContainer) {
				xe(p.daysContainer), p.weekNumbers && xe(p.weekNumbers);
				for (var e = document.createDocumentFragment(), t = 0; t < p.config.showMonths; t++) {
					var n = new Date(p.currentYear, p.currentMonth, 1);
					n.setMonth(p.currentMonth + t),
						e.appendChild(
							(function (e, t) {
								for (
									var n = (new Date(e, t, 1).getDay() - p.l10n.firstDayOfWeek + 7) % 7,
										a = p.utils.getDaysInMonth((t - 1 + 12) % 12, e),
										o = p.utils.getDaysInMonth(t, e),
										i = window.document.createDocumentFragment(),
										r = 1 < p.config.showMonths,
										l = r ? 'prevMonthDay hidden' : 'prevMonthDay',
										c = r ? 'nextMonthDay hidden' : 'nextMonthDay',
										s = a + 1 - n,
										d = 0;
									s <= a;
									s++, d++
								)
									i.appendChild(m('flatpickr-day ' + l, new Date(e, t - 1, s), 0, d));
								for (s = 1; s <= o; s++, d++)
									i.appendChild(m('flatpickr-day', new Date(e, t, s), 0, d));
								for (
									var u = o + 1;
									u <= 42 - n && (1 === p.config.showMonths || d % 7 != 0);
									u++, d++
								)
									i.appendChild(m('flatpickr-day ' + c, new Date(e, t + 1, u % o), 0, d));
								return (r = ye('div', 'dayContainer')).appendChild(i), r;
							})(n.getFullYear(), n.getMonth())
						);
				}
				p.daysContainer.appendChild(e),
					(p.days = p.daysContainer.firstChild),
					'range' === p.config.mode && 1 === p.selectedDates.length && r();
			}
		}
		function g() {
			if (!(1 < p.config.showMonths || 'dropdown' !== p.config.monthSelectorType)) {
				(p.monthsDropdownContainer.tabIndex = -1), (p.monthsDropdownContainer.innerHTML = '');
				for (var e = 0; e < 12; e++)
					(t = e),
						(void 0 !== p.config.minDate &&
							p.currentYear === p.config.minDate.getFullYear() &&
							t < p.config.minDate.getMonth()) ||
							(void 0 !== p.config.maxDate &&
								p.currentYear === p.config.maxDate.getFullYear() &&
								t > p.config.maxDate.getMonth()) ||
							(((t = ye('option', 'flatpickr-monthDropdown-month')).value = new Date(
								p.currentYear,
								e
							)
								.getMonth()
								.toString()),
							(t.textContent = Te(e, p.config.shorthandCurrentMonth, p.l10n)),
							(t.tabIndex = -1),
							p.currentMonth === e && (t.selected = !0),
							p.monthsDropdownContainer.appendChild(t));
			}
			var t;
		}
		function K() {
			xe(p.monthNav),
				p.monthNav.appendChild(p.prevMonthNav),
				p.config.showMonths && ((p.yearElements = []), (p.monthElements = []));
			for (var e, t, n, a, o, i = p.config.showMonths; i--; ) {
				(o = a = r = n = t = e = void 0),
					(e = ye('div', 'flatpickr-month')),
					(t = window.document.createDocumentFragment()),
					(n =
						1 < p.config.showMonths || 'static' === p.config.monthSelectorType
							? ye('span', 'cur-month')
							: ((p.monthsDropdownContainer = ye('select', 'flatpickr-monthDropdown-months')),
								p.monthsDropdownContainer.setAttribute('aria-label', p.l10n.monthAriaLabel),
								l(p.monthsDropdownContainer, 'change', function (e) {
									(e = ke(e)), (e = parseInt(e.value, 10));
									p.changeMonth(e - p.currentMonth), x('onMonthChange');
								}),
								g(),
								p.monthsDropdownContainer)),
					(r = Ee('cur-year', { tabindex: '-1' })),
					(a = r.getElementsByTagName('input')[0]).setAttribute('aria-label', p.l10n.yearAriaLabel),
					p.config.minDate && a.setAttribute('min', p.config.minDate.getFullYear().toString()),
					p.config.maxDate &&
						(a.setAttribute('max', p.config.maxDate.getFullYear().toString()),
						(a.disabled =
							!!p.config.minDate &&
							p.config.minDate.getFullYear() === p.config.maxDate.getFullYear())),
					(o = ye('div', 'flatpickr-current-month')).appendChild(n),
					o.appendChild(r),
					t.appendChild(o),
					e.appendChild(t);
				var r = { container: e, yearElement: a, monthElement: n };
				p.yearElements.push(r.yearElement),
					p.monthElements.push(r.monthElement),
					p.monthNav.appendChild(r.container);
			}
			p.monthNav.appendChild(p.nextMonthNav);
		}
		function U() {
			p.weekdayContainer
				? xe(p.weekdayContainer)
				: (p.weekdayContainer = ye('div', 'flatpickr-weekdays'));
			for (var e = p.config.showMonths; e--; ) {
				var t = ye('div', 'flatpickr-weekdaycontainer');
				p.weekdayContainer.appendChild(t);
			}
			return q(), p.weekdayContainer;
		}
		function q() {
			if (p.weekdayContainer) {
				var e = p.l10n.firstDayOfWeek,
					t = ge(p.l10n.weekdays.shorthand);
				0 < e && e < t.length && (t = ge(t.splice(e, t.length), t.splice(0, e)));
				for (var n = p.config.showMonths; n--; )
					p.weekdayContainer.children[n].innerHTML =
						"\n      <span class='flatpickr-weekday'>\n        " +
						t.join("</span><span class='flatpickr-weekday'>") +
						'\n      </span>\n      ';
			}
		}
		function $(e, t) {
			t = (t = void 0 === t ? !0 : t) ? e : e - p.currentMonth;
			(t < 0 && !0 === p._hidePrevMonthArrow) ||
				(0 < t && !0 === p._hideNextMonthArrow) ||
				((p.currentMonth += t),
				(p.currentMonth < 0 || 11 < p.currentMonth) &&
					((p.currentYear += 11 < p.currentMonth ? 1 : -1),
					(p.currentMonth = (p.currentMonth + 12) % 12),
					x('onYearChange'),
					g()),
				i(),
				x('onMonthChange'),
				E());
		}
		function D(e) {
			return p.calendarContainer.contains(e);
		}
		function V(e) {
			var t, n;
			p.isOpen &&
				!p.config.inline &&
				((n = D((t = ke(e)))),
				(n = !(
					t === p.input ||
					t === p.altInput ||
					p.element.contains(t) ||
					(e.path && e.path.indexOf && (~e.path.indexOf(p.input) || ~e.path.indexOf(p.altInput))) ||
					n ||
					D(e.relatedTarget)
				)),
				(e = !p.config.ignoredFocusElements.some(function (e) {
					return e.contains(t);
				})),
				n) &&
				e &&
				(p.config.allowInput &&
					p.setDate(
						p._input.value,
						!1,
						p.config.altInput ? p.config.altFormat : p.config.dateFormat
					),
				void 0 !== p.timeContainer &&
					void 0 !== p.minuteElement &&
					void 0 !== p.hourElement &&
					'' !== p.input.value &&
					void 0 !== p.input.value &&
					d(),
				p.close(),
				p.config) &&
				'range' === p.config.mode &&
				1 === p.selectedDates.length &&
				p.clear(!1);
		}
		function w(e) {
			var t;
			!e ||
				(p.config.minDate && e < p.config.minDate.getFullYear()) ||
				(p.config.maxDate && e > p.config.maxDate.getFullYear()) ||
				((t = p.currentYear !== e),
				(p.currentYear = e || p.currentYear),
				p.config.maxDate && p.currentYear === p.config.maxDate.getFullYear()
					? (p.currentMonth = Math.min(p.config.maxDate.getMonth(), p.currentMonth))
					: p.config.minDate &&
						p.currentYear === p.config.minDate.getFullYear() &&
						(p.currentMonth = Math.max(p.config.minDate.getMonth(), p.currentMonth)),
				t && (p.redraw(), x('onYearChange'), g()));
		}
		function b(e, t) {
			var n = p.parseDate(e, void 0, (t = void 0 === t ? !0 : t));
			if (
				(p.config.minDate &&
					n &&
					Oe(n, p.config.minDate, void 0 !== t ? t : !p.minDateHasTime) < 0) ||
				(p.config.maxDate && n && 0 < Oe(n, p.config.maxDate, void 0 !== t ? t : !p.maxDateHasTime))
			)
				return !1;
			if (!p.config.enable && 0 === p.config.disable.length) return !0;
			if (void 0 === n) return !1;
			for (
				var a,
					o = !!p.config.enable,
					i = null != (e = p.config.enable) ? e : p.config.disable,
					r = 0,
					l = void 0;
				r < i.length;
				r++
			) {
				if ('function' == typeof (l = i[r]) && l(n)) return o;
				if (l instanceof Date && void 0 !== n && l.getTime() === n.getTime()) return o;
				if ('string' == typeof l)
					return (a = p.parseDate(l, void 0, !0)) && a.getTime() === n.getTime() ? o : !o;
				if (
					'object' == typeof l &&
					void 0 !== n &&
					l.from &&
					l.to &&
					n.getTime() >= l.from.getTime() &&
					n.getTime() <= l.to.getTime()
				)
					return o;
			}
			return !o;
		}
		function C(e) {
			return (
				void 0 !== p.daysContainer &&
				-1 === e.className.indexOf('hidden') &&
				-1 === e.className.indexOf('flatpickr-disabled') &&
				p.daysContainer.contains(e)
			);
		}
		function z(e) {
			var t = e.target === p._input,
				n = p._input.value.trimEnd() !== se();
			!t ||
				!n ||
				(e.relatedTarget && D(e.relatedTarget)) ||
				p.setDate(
					p._input.value,
					!0,
					e.target === p.altInput ? p.config.altFormat : p.config.dateFormat
				);
		}
		function G(e) {
			var t = ke(e),
				n = p.config.wrap ? s.contains(t) : t === p._input,
				a = p.config.allowInput,
				o = p.isOpen && (!a || !n),
				i = p.config.inline && n && !a;
			if (13 === e.keyCode && n) {
				if (a)
					return (
						p.setDate(
							p._input.value,
							!0,
							t === p.altInput ? p.config.altFormat : p.config.dateFormat
						),
						p.close(),
						t.blur()
					);
				p.open();
			} else if (D(t) || o || i) {
				var r,
					l = !!p.timeContainer && p.timeContainer.contains(t);
				switch (e.keyCode) {
					case 13:
						l ? (e.preventDefault(), d(), ne()) : ae(e);
						break;
					case 27:
						e.preventDefault(), ne();
						break;
					case 8:
					case 46:
						n && !p.config.allowInput && (e.preventDefault(), p.clear());
						break;
					case 37:
					case 39:
						l || n
							? p.hourElement && p.hourElement.focus()
							: (e.preventDefault(),
								(c = j()),
								void 0 !== p.daysContainer &&
									(!1 === a || (c && C(c))) &&
									((c = 39 === e.keyCode ? 1 : -1),
									e.ctrlKey ? (e.stopPropagation(), $(c), v(h(1), 0)) : v(void 0, c)));
						break;
					case 38:
					case 40:
						e.preventDefault();
						var c = 40 === e.keyCode ? 1 : -1;
						(p.daysContainer && void 0 !== t.$i) || t === p.input || t === p.altInput
							? e.ctrlKey
								? (e.stopPropagation(), w(p.currentYear - c), v(h(1), 0))
								: l || v(void 0, 7 * c)
							: t === p.currentYearElement
								? w(p.currentYear - c)
								: p.config.enableTime &&
									(!l && p.hourElement && p.hourElement.focus(), d(e), p._debouncedChange());
						break;
					case 9:
						l
							? -1 !==
									(r = (c = [p.hourElement, p.minuteElement, p.secondElement, p.amPM]
										.concat(p.pluginElements)
										.filter(function (e) {
											return e;
										})).indexOf(t)) &&
								((c = c[r + (e.shiftKey ? -1 : 1)]), e.preventDefault(), (c || p._input).focus())
							: !p.config.noCalendar &&
								p.daysContainer &&
								p.daysContainer.contains(t) &&
								e.shiftKey &&
								(e.preventDefault(), p._input.focus());
				}
			}
			if (void 0 !== p.amPM && t === p.amPM)
				switch (e.key) {
					case p.l10n.amPM[0].charAt(0):
					case p.l10n.amPM[0].charAt(0).toLowerCase():
						(p.amPM.textContent = p.l10n.amPM[0]), u(), k();
						break;
					case p.l10n.amPM[1].charAt(0):
					case p.l10n.amPM[1].charAt(0).toLowerCase():
						(p.amPM.textContent = p.l10n.amPM[1]), u(), k();
				}
			(n || D(t)) && x('onKeyDown', e);
		}
		function r(o, e) {
			if (
				(void 0 === e && (e = 'flatpickr-day'),
				1 === p.selectedDates.length &&
					(!o || (o.classList.contains(e) && !o.classList.contains('flatpickr-disabled'))))
			) {
				for (
					var i = (o || p.days.firstElementChild).dateObj.getTime(),
						r = p.parseDate(p.selectedDates[0], void 0, !0).getTime(),
						t = Math.min(i, p.selectedDates[0].getTime()),
						n = Math.max(i, p.selectedDates[0].getTime()),
						l = !1,
						c = 0,
						s = 0,
						a = t;
					a < n;
					a += Ae
				)
					b(new Date(a), !0) ||
						((l = l || (t < a && a < n)),
						a < r && (!c || c < a) ? (c = a) : r < a && (!s || a < s) && (s = a));
				Array.from(
					p.rContainer.querySelectorAll('*:nth-child(-n+' + p.config.showMonths + ') > .' + e)
				).forEach(function (t) {
					var e,
						n = t.dateObj.getTime(),
						a = (0 < c && n < c) || (0 < s && s < n);
					a
						? (t.classList.add('notAllowed'),
							['inRange', 'startRange', 'endRange'].forEach(function (e) {
								t.classList.remove(e);
							}))
						: (l && !a) ||
							(['startRange', 'inRange', 'endRange', 'notAllowed'].forEach(function (e) {
								t.classList.remove(e);
							}),
							void 0 !== o &&
								(o.classList.add(i <= p.selectedDates[0].getTime() ? 'startRange' : 'endRange'),
								r < i && n === r
									? t.classList.add('startRange')
									: i < r && n === r && t.classList.add('endRange'),
								c <= n) &&
								(0 === s || n <= s) &&
								((a = r), (e = i), (n = n) > Math.min(a, e)) &&
								n < Math.max(a, e) &&
								t.classList.add('inRange'));
				});
			}
		}
		function Z() {
			!p.isOpen || p.config.static || p.config.inline || M();
		}
		function Q(n) {
			return function (e) {
				var e = (p.config['_' + n + 'Date'] = p.parseDate(e, p.config.dateFormat)),
					t = p.config['_' + ('min' === n ? 'max' : 'min') + 'Date'];
				void 0 !== e &&
					(p['min' === n ? 'minDateHasTime' : 'maxDateHasTime'] =
						0 < e.getHours() || 0 < e.getMinutes() || 0 < e.getSeconds()),
					p.selectedDates &&
						((p.selectedDates = p.selectedDates.filter(function (e) {
							return b(e);
						})),
						p.selectedDates.length || 'min' !== n || a(e),
						k()),
					p.daysContainer &&
						(te(),
						void 0 !== e
							? (p.currentYearElement[n] = e.getFullYear().toString())
							: p.currentYearElement.removeAttribute(n),
						(p.currentYearElement.disabled =
							!!t && void 0 !== e && t.getFullYear() === e.getFullYear()));
			};
		}
		function X() {
			return p.config.wrap ? s.querySelector('[data-input]') : s;
		}
		function ee() {
			'object' != typeof p.config.locale &&
				void 0 === Pe.l10ns[p.config.locale] &&
				p.config.errorHandler(new Error('flatpickr: invalid locale ' + p.config.locale)),
				(p.l10n = me(
					me({}, Pe.l10ns.default),
					'object' == typeof p.config.locale
						? p.config.locale
						: 'default' !== p.config.locale
							? Pe.l10ns[p.config.locale]
							: void 0
				)),
				(Ie.D = '(' + p.l10n.weekdays.shorthand.join('|') + ')'),
				(Ie.l = '(' + p.l10n.weekdays.longhand.join('|') + ')'),
				(Ie.M = '(' + p.l10n.months.shorthand.join('|') + ')'),
				(Ie.F = '(' + p.l10n.months.longhand.join('|') + ')'),
				(Ie.K =
					'(' +
					p.l10n.amPM[0] +
					'|' +
					p.l10n.amPM[1] +
					'|' +
					p.l10n.amPM[0].toLowerCase() +
					'|' +
					p.l10n.amPM[1].toLowerCase() +
					')'),
				void 0 === me(me({}, Y), JSON.parse(JSON.stringify(s.dataset || {}))).time_24hr &&
					void 0 === Pe.defaultConfig.time_24hr &&
					(p.config.time_24hr = p.l10n.time_24hr),
				(p.formatDate = Se(p)),
				(p.parseDate = _e({ config: p.config, l10n: p.l10n }));
		}
		function M(e) {
			var t, n, a, o, i, r, l;
			'function' != typeof p.config.position
				? void 0 !== p.calendarContainer &&
					(x('onPreCalendarPosition'),
					(r = e || p._positionElement),
					(n = Array.prototype.reduce.call(
						p.calendarContainer.children,
						function (e, t) {
							return e + t.offsetHeight;
						},
						0
					)),
					(l = p.calendarContainer.offsetWidth),
					(i = (a = p.config.position.split(' '))[0]),
					(a = 1 < a.length ? a[1] : null),
					(t = r.getBoundingClientRect()),
					(o = window.innerHeight - t.bottom),
					(i = 'above' === i || ('below' !== i && o < n && t.top > n)),
					(o = window.pageYOffset + t.top + (i ? -n - 2 : r.offsetHeight + 2)),
					Me(p.calendarContainer, 'arrowTop', !i),
					Me(p.calendarContainer, 'arrowBottom', i),
					p.config.inline ||
						((n = window.pageXOffset + t.left),
						(i = r = !1),
						'center' === a
							? ((n -= (l - t.width) / 2), (r = !0))
							: 'right' === a && ((n -= l - t.width), (i = !0)),
						Me(p.calendarContainer, 'arrowLeft', !r && !i),
						Me(p.calendarContainer, 'arrowCenter', r),
						Me(p.calendarContainer, 'arrowRight', i),
						(a = window.document.body.offsetWidth - (window.pageXOffset + t.right)),
						(r = n + l > window.document.body.offsetWidth),
						(i = a + l > window.document.body.offsetWidth),
						Me(p.calendarContainer, 'rightMost', r),
						p.config.static) ||
						((p.calendarContainer.style.top = o + 'px'),
						r
							? i
								? void 0 !==
										(o = (function () {
											for (var e, t = null, n = 0; n < document.styleSheets.length; n++) {
												var a = document.styleSheets[n];
												if (a.cssRules) {
													try {
														a.cssRules;
													} catch (t) {
														continue;
													}
													t = a;
													break;
												}
											}
											return null != t
												? t
												: ((e = document.createElement('style')),
													document.head.appendChild(e),
													e.sheet);
										})()) &&
									((r = window.document.body.offsetWidth),
									(i = Math.max(0, r / 2 - l / 2)),
									(r = o.cssRules.length),
									(l = '{left:' + t.left + 'px;right:auto;}'),
									Me(p.calendarContainer, 'rightMost', !1),
									Me(p.calendarContainer, 'centerMost', !0),
									o.insertRule(
										'.flatpickr-calendar.centerMost:before,.flatpickr-calendar.centerMost:after' +
											l,
										r
									),
									(p.calendarContainer.style.left = i + 'px'),
									(p.calendarContainer.style.right = 'auto'))
								: ((p.calendarContainer.style.left = 'auto'),
									(p.calendarContainer.style.right = a + 'px'))
							: ((p.calendarContainer.style.left = n + 'px'),
								(p.calendarContainer.style.right = 'auto'))))
				: p.config.position(p, e);
		}
		function te() {
			p.config.noCalendar || p.isMobile || (g(), E(), i());
		}
		function ne() {
			p._input.focus(),
				-1 !== window.navigator.userAgent.indexOf('MSIE') || void 0 !== navigator.msMaxTouchPoints
					? setTimeout(p.close, 0)
					: p.close();
		}
		function ae(e) {
			e.preventDefault(), e.stopPropagation();
			var t,
				n,
				a,
				e = (function e(t, n) {
					return n(t) ? t : t.parentNode ? e(t.parentNode, n) : void 0;
				})(ke(e), function (e) {
					return (
						e.classList &&
						e.classList.contains('flatpickr-day') &&
						!e.classList.contains('flatpickr-disabled') &&
						!e.classList.contains('notAllowed')
					);
				});
			void 0 !== e &&
				((e = e),
				(t =
					((n = p.latestSelectedDateObj = new Date(e.dateObj.getTime())).getMonth() <
						p.currentMonth ||
						n.getMonth() > p.currentMonth + p.config.showMonths - 1) &&
					'range' !== p.config.mode),
				(p.selectedDateElem = e),
				'single' === p.config.mode
					? (p.selectedDates = [n])
					: 'multiple' === p.config.mode
						? (a = ce(n))
							? p.selectedDates.splice(parseInt(a), 1)
							: p.selectedDates.push(n)
						: 'range' === p.config.mode &&
							(2 === p.selectedDates.length && p.clear(!1, !1),
							(p.latestSelectedDateObj = n),
							p.selectedDates.push(n),
							0 !== Oe(n, p.selectedDates[0], !0)) &&
							p.selectedDates.sort(function (e, t) {
								return e.getTime() - t.getTime();
							}),
				u(),
				t &&
					((a = p.currentYear !== n.getFullYear()),
					(p.currentYear = n.getFullYear()),
					(p.currentMonth = n.getMonth()),
					a && (x('onYearChange'), g()),
					x('onMonthChange')),
				E(),
				i(),
				k(),
				t || 'range' === p.config.mode || 1 !== p.config.showMonths
					? void 0 !== p.selectedDateElem &&
						void 0 === p.hourElement &&
						p.selectedDateElem &&
						p.selectedDateElem.focus()
					: J(e),
				void 0 !== p.hourElement && void 0 !== p.hourElement && p.hourElement.focus(),
				p.config.closeOnSelect &&
					((n = 'single' === p.config.mode && !p.config.enableTime),
					(a = 'range' === p.config.mode && 2 === p.selectedDates.length && !p.config.enableTime),
					n || a) &&
					ne(),
				W());
		}
		(p.parseDate = _e({ config: p.config, l10n: p.l10n })),
			(p._handlers = []),
			(p.pluginElements = []),
			(p.loadedPlugins = []),
			(p._bind = l),
			(p._setHoursFromDate = a),
			(p._positionCalendar = M),
			(p.changeMonth = $),
			(p.changeYear = w),
			(p.clear = function (e, t) {
				void 0 === e && (e = !0),
					void 0 === t && (t = !0),
					(p.input.value = ''),
					void 0 !== p.altInput && (p.altInput.value = ''),
					void 0 !== p.mobileInput && (p.mobileInput.value = ''),
					(p.selectedDates = []),
					!(p.latestSelectedDateObj = void 0) === t &&
						((p.currentYear = p._initialDate.getFullYear()),
						(p.currentMonth = p._initialDate.getMonth())),
					!0 === p.config.enableTime && c((t = Ne(p.config)).hours, t.minutes, t.seconds),
					p.redraw(),
					e && x('onChange');
			}),
			(p.close = function () {
				(p.isOpen = !1),
					p.isMobile ||
						(void 0 !== p.calendarContainer && p.calendarContainer.classList.remove('open'),
						void 0 !== p._input && p._input.classList.remove('active')),
					x('onClose');
			}),
			(p.onMouseOver = r),
			(p._createElement = ye),
			(p.createDay = m),
			(p.destroy = function () {
				void 0 !== p.config && x('onDestroy');
				for (var e = p._handlers.length; e--; ) p._handlers[e].remove();
				if (((p._handlers = []), p.mobileInput))
					p.mobileInput.parentNode && p.mobileInput.parentNode.removeChild(p.mobileInput),
						(p.mobileInput = void 0);
				else if (p.calendarContainer && p.calendarContainer.parentNode)
					if (p.config.static && p.calendarContainer.parentNode) {
						var t = p.calendarContainer.parentNode;
						if ((t.lastChild && t.removeChild(t.lastChild), t.parentNode)) {
							for (; t.firstChild; ) t.parentNode.insertBefore(t.firstChild, t);
							t.parentNode.removeChild(t);
						}
					} else p.calendarContainer.parentNode.removeChild(p.calendarContainer);
				p.altInput &&
					((p.input.type = 'text'),
					p.altInput.parentNode && p.altInput.parentNode.removeChild(p.altInput),
					delete p.altInput),
					p.input &&
						((p.input.type = p.input._type),
						p.input.classList.remove('flatpickr-input'),
						p.input.removeAttribute('readonly')),
					[
						'_showTimeInput',
						'latestSelectedDateObj',
						'_hideNextMonthArrow',
						'_hidePrevMonthArrow',
						'__hideNextMonthArrow',
						'__hidePrevMonthArrow',
						'isMobile',
						'isOpen',
						'selectedDateElem',
						'minDateHasTime',
						'maxDateHasTime',
						'days',
						'daysContainer',
						'_input',
						'_positionElement',
						'innerContainer',
						'rContainer',
						'monthNav',
						'todayDateElem',
						'calendarContainer',
						'weekdayContainer',
						'prevMonthNav',
						'nextMonthNav',
						'monthsDropdownContainer',
						'currentMonthElement',
						'currentYearElement',
						'navigationCurrentMonth',
						'selectedDateElem',
						'config'
					].forEach(function (e) {
						try {
							delete p[e];
						} catch (e) {}
					});
			}),
			(p.isEnabled = b),
			(p.jumpToDate = o),
			(p.updateValue = k),
			(p.open = function (e, t) {
				var n;
				void 0 === t && (t = p._positionElement),
					!0 === p.isMobile
						? (e && (e.preventDefault(), (n = ke(e))) && n.blur(),
							void 0 !== p.mobileInput && (p.mobileInput.focus(), p.mobileInput.click()),
							x('onOpen'))
						: p._input.disabled ||
							p.config.inline ||
							((n = p.isOpen),
							(p.isOpen = !0),
							n ||
								(p.calendarContainer.classList.add('open'),
								p._input.classList.add('active'),
								x('onOpen'),
								M(t)),
							!0 !== p.config.enableTime) ||
							!0 !== p.config.noCalendar ||
							!1 !== p.config.allowInput ||
							(void 0 !== e && p.timeContainer.contains(e.relatedTarget)) ||
							setTimeout(function () {
								return p.hourElement.select();
							}, 50);
			}),
			(p.redraw = te),
			(p.set = function (e, t) {
				if (null !== e && 'object' == typeof e)
					for (var n in (Object.assign(p.config, e), e))
						void 0 !== y[n] &&
							y[n].forEach(function (e) {
								return e();
							});
				else
					(p.config[e] = t),
						void 0 !== y[e]
							? y[e].forEach(function (e) {
									return e();
								})
							: -1 < pe.indexOf(e) && (p.config[e] = Ce(t));
				p.redraw(), k(!0);
			}),
			(p.setDate = function (e, t, n) {
				if (
					(void 0 === t && (t = !1),
					void 0 === n && (n = p.config.dateFormat),
					(0 !== e && !e) || (e instanceof Array && 0 === e.length))
				)
					return p.clear(t);
				oe(e, n),
					(p.latestSelectedDateObj = p.selectedDates[p.selectedDates.length - 1]),
					p.redraw(),
					o(void 0, t),
					a(),
					0 === p.selectedDates.length && p.clear(!1),
					k(t),
					t && x('onChange');
			}),
			(p.toggle = function (e) {
				if (!0 === p.isOpen) return p.close();
				p.open(e);
			});
		var y = {
			locale: [ee, q],
			showMonths: [K, L, U],
			minDate: [o],
			maxDate: [o],
			positionElement: [re],
			clickOpens: [
				function () {
					!0 === p.config.clickOpens
						? (l(p._input, 'focus', p.open), l(p._input, 'click', p.open))
						: (p._input.removeEventListener('focus', p.open),
							p._input.removeEventListener('click', p.open));
				}
			]
		};
		function oe(e, t) {
			var n = [];
			if (e instanceof Array)
				n = e.map(function (e) {
					return p.parseDate(e, t);
				});
			else if (e instanceof Date || 'number' == typeof e) n = [p.parseDate(e, t)];
			else if ('string' == typeof e)
				switch (p.config.mode) {
					case 'single':
					case 'time':
						n = [p.parseDate(e, t)];
						break;
					case 'multiple':
						n = e.split(p.config.conjunction).map(function (e) {
							return p.parseDate(e, t);
						});
						break;
					case 'range':
						n = e.split(p.l10n.rangeSeparator).map(function (e) {
							return p.parseDate(e, t);
						});
				}
			else p.config.errorHandler(new Error('Invalid date supplied: ' + JSON.stringify(e)));
			(p.selectedDates = p.config.allowInvalidPreload
				? n
				: n.filter(function (e) {
						return e instanceof Date && b(e, !1);
					})),
				'range' === p.config.mode &&
					p.selectedDates.sort(function (e, t) {
						return e.getTime() - t.getTime();
					});
		}
		function ie(e) {
			return e
				.slice()
				.map(function (e) {
					return 'string' == typeof e || 'number' == typeof e || e instanceof Date
						? p.parseDate(e, void 0, !0)
						: e && 'object' == typeof e && e.from && e.to
							? { from: p.parseDate(e.from, void 0), to: p.parseDate(e.to, void 0) }
							: e;
				})
				.filter(function (e) {
					return e;
				});
		}
		function re() {
			p._positionElement = p.config.positionElement || p._input;
		}
		function x(e, t) {
			if (void 0 !== p.config) {
				var n = p.config[e];
				if (void 0 !== n && 0 < n.length)
					for (var a = 0; n[a] && a < n.length; a++) n[a](p.selectedDates, p.input.value, p, t);
				'onChange' === e &&
					(p.input.dispatchEvent(le('change')), p.input.dispatchEvent(le('input')));
			}
		}
		function le(e) {
			var t = document.createEvent('Event');
			return t.initEvent(e, !0, !0), t;
		}
		function ce(e) {
			for (var t = 0; t < p.selectedDates.length; t++) {
				var n = p.selectedDates[t];
				if (n instanceof Date && 0 === Oe(n, e)) return '' + t;
			}
			return !1;
		}
		function E() {
			p.config.noCalendar ||
				p.isMobile ||
				!p.monthNav ||
				(p.yearElements.forEach(function (e, t) {
					var n = new Date(p.currentYear, p.currentMonth, 1);
					n.setMonth(p.currentMonth + t),
						1 < p.config.showMonths || 'static' === p.config.monthSelectorType
							? (p.monthElements[t].textContent =
									Te(n.getMonth(), p.config.shorthandCurrentMonth, p.l10n) + ' ')
							: (p.monthsDropdownContainer.value = n.getMonth().toString()),
						(e.value = n.getFullYear().toString());
				}),
				(p._hidePrevMonthArrow =
					void 0 !== p.config.minDate &&
					(p.currentYear === p.config.minDate.getFullYear()
						? p.currentMonth <= p.config.minDate.getMonth()
						: p.currentYear < p.config.minDate.getFullYear())),
				(p._hideNextMonthArrow =
					void 0 !== p.config.maxDate &&
					(p.currentYear === p.config.maxDate.getFullYear()
						? p.currentMonth + 1 > p.config.maxDate.getMonth()
						: p.currentYear > p.config.maxDate.getFullYear())));
		}
		function se(e) {
			var t = e || (p.config.altInput ? p.config.altFormat : p.config.dateFormat);
			return p.selectedDates
				.map(function (e) {
					return p.formatDate(e, t);
				})
				.filter(function (e, t, n) {
					return 'range' !== p.config.mode || p.config.enableTime || n.indexOf(e) === t;
				})
				.join('range' !== p.config.mode ? p.config.conjunction : p.l10n.rangeSeparator);
		}
		function k(e) {
			void 0 === e && (e = !0),
				void 0 !== p.mobileInput &&
					p.mobileFormatStr &&
					(p.mobileInput.value =
						void 0 !== p.latestSelectedDateObj
							? p.formatDate(p.latestSelectedDateObj, p.mobileFormatStr)
							: ''),
				(p.input.value = se(p.config.dateFormat)),
				void 0 !== p.altInput && (p.altInput.value = se(p.config.altFormat)),
				!1 !== e && x('onValueUpdate');
		}
		function de(e) {
			var e = ke(e),
				t = p.prevMonthNav.contains(e),
				n = p.nextMonthNav.contains(e);
			t || n
				? $(t ? -1 : 1)
				: 0 <= p.yearElements.indexOf(e)
					? e.select()
					: e.classList.contains('arrowUp')
						? p.changeYear(p.currentYear + 1)
						: e.classList.contains('arrowDown') && p.changeYear(p.currentYear - 1);
		}
		function ue(t) {
			return function (e) {
				p.config['min' === t ? '_minTime' : '_maxTime'] = p.parseDate(e, 'H:i:S');
			};
		}
		(p.element = p.input = s), (p.isOpen = !1);
		var e = [
				'wrap',
				'weekNumbers',
				'allowInput',
				'allowInvalidPreload',
				'clickOpens',
				'time_24hr',
				'enableTime',
				'noCalendar',
				'altInput',
				'shorthandCurrentMonth',
				'inline',
				'static',
				'enableSeconds',
				'disableMobile'
			],
			t = me(me({}, JSON.parse(JSON.stringify(s.dataset || {}))), Y),
			n = {},
			T =
				((p.config.parseDate = t.parseDate),
				(p.config.formatDate = t.formatDate),
				Object.defineProperty(p.config, 'enable', {
					get: function () {
						return p.config._enable;
					},
					set: function (e) {
						p.config._enable = ie(e);
					}
				}),
				Object.defineProperty(p.config, 'disable', {
					get: function () {
						return p.config._disable;
					},
					set: function (e) {
						p.config._disable = ie(e);
					}
				}),
				'time' === t.mode);
		t.dateFormat ||
			(!t.enableTime && !T) ||
			((N = Pe.defaultConfig.dateFormat || he.dateFormat),
			(n.dateFormat =
				t.noCalendar || T
					? 'H:i' + (t.enableSeconds ? ':S' : '')
					: N + ' H:i' + (t.enableSeconds ? ':S' : ''))),
			t.altInput &&
				(t.enableTime || T) &&
				!t.altFormat &&
				((N = Pe.defaultConfig.altFormat || he.altFormat),
				(n.altFormat =
					t.noCalendar || T
						? 'h:i' + (t.enableSeconds ? ':S K' : ' K')
						: N + ' h:i' + (t.enableSeconds ? ':S' : '') + ' K')),
			Object.defineProperty(p.config, 'minDate', {
				get: function () {
					return p.config._minDate;
				},
				set: Q('min')
			}),
			Object.defineProperty(p.config, 'maxDate', {
				get: function () {
					return p.config._maxDate;
				},
				set: Q('max')
			}),
			Object.defineProperty(p.config, 'minTime', {
				get: function () {
					return p.config._minTime;
				},
				set: ue('min')
			}),
			Object.defineProperty(p.config, 'maxTime', {
				get: function () {
					return p.config._maxTime;
				},
				set: ue('max')
			}),
			'time' === t.mode && ((p.config.noCalendar = !0), (p.config.enableTime = !0)),
			Object.assign(p.config, n, t);
		for (var I = 0; I < e.length; I++)
			p.config[e[I]] = !0 === p.config[e[I]] || 'true' === p.config[e[I]];
		for (
			pe
				.filter(function (e) {
					return void 0 !== p.config[e];
				})
				.forEach(function (e) {
					p.config[e] = Ce(p.config[e] || []).map(H);
				}),
				p.isMobile =
					!p.config.disableMobile &&
					!p.config.inline &&
					'single' === p.config.mode &&
					!p.config.disable.length &&
					!p.config.enable &&
					!p.config.weekNumbers &&
					/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
						navigator.userAgent
					),
				I = 0;
			I < p.config.plugins.length;
			I++
		) {
			var S,
				fe = p.config.plugins[I](p) || {};
			for (S in fe)
				-1 < pe.indexOf(S)
					? (p.config[S] = Ce(fe[S]).map(H).concat(p.config[S]))
					: void 0 === t[S] && (p.config[S] = fe[S]);
		}
		if (
			(t.altInputClass || (p.config.altInputClass = X().className + ' ' + p.config.altInputClass),
			x('onParseConfig'),
			ee(),
			(p.input = X()),
			p.input
				? ((p.input._type = p.input.type),
					(p.input.type = 'text'),
					p.input.classList.add('flatpickr-input'),
					(p._input = p.input),
					p.config.altInput &&
						((p.altInput = ye(p.input.nodeName, p.config.altInputClass)),
						(p._input = p.altInput),
						(p.altInput.placeholder = p.input.placeholder),
						(p.altInput.disabled = p.input.disabled),
						(p.altInput.required = p.input.required),
						(p.altInput.tabIndex = p.input.tabIndex),
						(p.altInput.type = 'text'),
						p.input.setAttribute('type', 'hidden'),
						!p.config.static) &&
						p.input.parentNode &&
						p.input.parentNode.insertBefore(p.altInput, p.input.nextSibling),
					p.config.allowInput || p._input.setAttribute('readonly', 'readonly'),
					re())
				: p.config.errorHandler(new Error('Invalid input element specified')),
			(p.selectedDates = []),
			(p.now = p.parseDate(p.config.now) || new Date()),
			(T =
				p.config.defaultDate ||
				(('INPUT' !== p.input.nodeName && 'TEXTAREA' !== p.input.nodeName) ||
				!p.input.placeholder ||
				p.input.value !== p.input.placeholder
					? p.input.value
					: null)) && oe(T, p.config.dateFormat),
			(p._initialDate =
				0 < p.selectedDates.length
					? p.selectedDates[0]
					: p.config.minDate && p.config.minDate.getTime() > p.now.getTime()
						? p.config.minDate
						: p.config.maxDate && p.config.maxDate.getTime() < p.now.getTime()
							? p.config.maxDate
							: p.now),
			(p.currentYear = p._initialDate.getFullYear()),
			(p.currentMonth = p._initialDate.getMonth()),
			0 < p.selectedDates.length && (p.latestSelectedDateObj = p.selectedDates[0]),
			void 0 !== p.config.minTime && (p.config.minTime = p.parseDate(p.config.minTime, 'H:i')),
			void 0 !== p.config.maxTime && (p.config.maxTime = p.parseDate(p.config.maxTime, 'H:i')),
			(p.minDateHasTime =
				!!p.config.minDate &&
				(0 < p.config.minDate.getHours() ||
					0 < p.config.minDate.getMinutes() ||
					0 < p.config.minDate.getSeconds())),
			(p.maxDateHasTime =
				!!p.config.maxDate &&
				(0 < p.config.maxDate.getHours() ||
					0 < p.config.maxDate.getMinutes() ||
					0 < p.config.maxDate.getSeconds())),
			(p.utils = {
				getDaysInMonth: function (e, t) {
					return (
						void 0 === e && (e = p.currentMonth),
						void 0 === t && (t = p.currentYear),
						1 === e && ((t % 4 == 0 && t % 100 != 0) || t % 400 == 0) ? 29 : p.l10n.daysInMonth[e]
					);
				}
			}),
			p.isMobile ||
				((N = window.document.createDocumentFragment()),
				(p.calendarContainer = ye('div', 'flatpickr-calendar')),
				(p.calendarContainer.tabIndex = -1),
				p.config.noCalendar ||
					(N.appendChild(
						((p.monthNav = ye('div', 'flatpickr-months')),
						(p.yearElements = []),
						(p.monthElements = []),
						(p.prevMonthNav = ye('span', 'flatpickr-prev-month')),
						(p.prevMonthNav.innerHTML = p.config.prevArrow),
						(p.nextMonthNav = ye('span', 'flatpickr-next-month')),
						(p.nextMonthNav.innerHTML = p.config.nextArrow),
						K(),
						Object.defineProperty(p, '_hidePrevMonthArrow', {
							get: function () {
								return p.__hidePrevMonthArrow;
							},
							set: function (e) {
								p.__hidePrevMonthArrow !== e &&
									(Me(p.prevMonthNav, 'flatpickr-disabled', e), (p.__hidePrevMonthArrow = e));
							}
						}),
						Object.defineProperty(p, '_hideNextMonthArrow', {
							get: function () {
								return p.__hideNextMonthArrow;
							},
							set: function (e) {
								p.__hideNextMonthArrow !== e &&
									(Me(p.nextMonthNav, 'flatpickr-disabled', e), (p.__hideNextMonthArrow = e));
							}
						}),
						(p.currentYearElement = p.yearElements[0]),
						E(),
						p.monthNav)
					),
					(p.innerContainer = ye('div', 'flatpickr-innerContainer')),
					p.config.weekNumbers &&
						(p.calendarContainer.classList.add('hasWeeks'),
						(F = ye('div', 'flatpickr-weekwrapper')).appendChild(
							ye('span', 'flatpickr-weekday', p.l10n.weekAbbreviation)
						),
						(O = ye('div', 'flatpickr-weeks')),
						F.appendChild(O),
						(O = (F = { weekWrapper: F, weekNumbers: O }).weekNumbers),
						p.innerContainer.appendChild((F = F.weekWrapper)),
						(p.weekNumbers = O),
						(p.weekWrapper = F)),
					(p.rContainer = ye('div', 'flatpickr-rContainer')),
					p.rContainer.appendChild(U()),
					p.daysContainer ||
						((p.daysContainer = ye('div', 'flatpickr-days')), (p.daysContainer.tabIndex = -1)),
					i(),
					p.rContainer.appendChild(p.daysContainer),
					p.innerContainer.appendChild(p.rContainer),
					N.appendChild(p.innerContainer)),
				p.config.enableTime &&
					N.appendChild(
						(p.calendarContainer.classList.add('hasTime'),
						p.config.noCalendar && p.calendarContainer.classList.add('noCalendar'),
						(O = Ne(p.config)),
						(p.timeContainer = ye('div', 'flatpickr-time')),
						(p.timeContainer.tabIndex = -1),
						(F = ye('span', 'flatpickr-time-separator', ':')),
						(A = Ee('flatpickr-hour', { 'aria-label': p.l10n.hourAriaLabel })),
						(p.hourElement = A.getElementsByTagName('input')[0]),
						(P = Ee('flatpickr-minute', { 'aria-label': p.l10n.minuteAriaLabel })),
						(p.minuteElement = P.getElementsByTagName('input')[0]),
						(p.hourElement.tabIndex = p.minuteElement.tabIndex = -1),
						(p.hourElement.value = De(
							p.latestSelectedDateObj
								? p.latestSelectedDateObj.getHours()
								: p.config.time_24hr
									? O.hours
									: (function (e) {
											switch (e % 24) {
												case 0:
												case 12:
													return 12;
												default:
													return e % 12;
											}
										})(O.hours)
						)),
						(p.minuteElement.value = De(
							p.latestSelectedDateObj ? p.latestSelectedDateObj.getMinutes() : O.minutes
						)),
						p.hourElement.setAttribute('step', p.config.hourIncrement.toString()),
						p.minuteElement.setAttribute('step', p.config.minuteIncrement.toString()),
						p.hourElement.setAttribute('min', p.config.time_24hr ? '0' : '1'),
						p.hourElement.setAttribute('max', p.config.time_24hr ? '23' : '12'),
						p.hourElement.setAttribute('maxlength', '2'),
						p.minuteElement.setAttribute('min', '0'),
						p.minuteElement.setAttribute('max', '59'),
						p.minuteElement.setAttribute('maxlength', '2'),
						p.timeContainer.appendChild(A),
						p.timeContainer.appendChild(F),
						p.timeContainer.appendChild(P),
						p.config.time_24hr && p.timeContainer.classList.add('time24hr'),
						p.config.enableSeconds &&
							(p.timeContainer.classList.add('hasSeconds'),
							(A = Ee('flatpickr-second')),
							(p.secondElement = A.getElementsByTagName('input')[0]),
							(p.secondElement.value = De(
								p.latestSelectedDateObj ? p.latestSelectedDateObj.getSeconds() : O.seconds
							)),
							p.secondElement.setAttribute('step', p.minuteElement.getAttribute('step')),
							p.secondElement.setAttribute('min', '0'),
							p.secondElement.setAttribute('max', '59'),
							p.secondElement.setAttribute('maxlength', '2'),
							p.timeContainer.appendChild(ye('span', 'flatpickr-time-separator', ':')),
							p.timeContainer.appendChild(A)),
						p.config.time_24hr ||
							((p.amPM = ye(
								'span',
								'flatpickr-am-pm',
								p.l10n.amPM[
									we(11 < (p.latestSelectedDateObj ? p.hourElement.value : p.config.defaultHour))
								]
							)),
							(p.amPM.title = p.l10n.toggleTitle),
							(p.amPM.tabIndex = -1),
							p.timeContainer.appendChild(p.amPM)),
						p.timeContainer)
					),
				Me(p.calendarContainer, 'rangeMode', 'range' === p.config.mode),
				Me(p.calendarContainer, 'animate', !0 === p.config.animate),
				Me(p.calendarContainer, 'multiMonth', 1 < p.config.showMonths),
				p.calendarContainer.appendChild(N),
				(P = void 0 !== p.config.appendTo && void 0 !== p.config.appendTo.nodeType),
				(p.config.inline || p.config.static) &&
					(p.calendarContainer.classList.add(p.config.inline ? 'inline' : 'static'),
					p.config.inline &&
						(!P && p.element.parentNode
							? p.element.parentNode.insertBefore(p.calendarContainer, p._input.nextSibling)
							: void 0 !== p.config.appendTo && p.config.appendTo.appendChild(p.calendarContainer)),
					p.config.static) &&
					((A = ye('div', 'flatpickr-wrapper')),
					p.element.parentNode && p.element.parentNode.insertBefore(A, p.element),
					A.appendChild(p.element),
					p.altInput && A.appendChild(p.altInput),
					A.appendChild(p.calendarContainer)),
				p.config.static ||
					p.config.inline ||
					(void 0 !== p.config.appendTo ? p.config.appendTo : window.document.body).appendChild(
						p.calendarContainer
					)),
			p.config.wrap &&
				['open', 'close', 'toggle', 'clear'].forEach(function (t) {
					Array.prototype.forEach.call(
						p.element.querySelectorAll('[data-' + t + ']'),
						function (e) {
							return l(e, 'click', p[t]);
						}
					);
				}),
			p.isMobile)
		) {
			var _ = p.config.enableTime ? (p.config.noCalendar ? 'time' : 'datetime-local') : 'date';
			(p.mobileInput = ye('input', p.input.className + ' flatpickr-mobile')),
				(p.mobileInput.tabIndex = 1),
				(p.mobileInput.type = _),
				(p.mobileInput.disabled = p.input.disabled),
				(p.mobileInput.required = p.input.required),
				(p.mobileInput.placeholder = p.input.placeholder),
				(p.mobileFormatStr =
					'datetime-local' == _ ? 'Y-m-d\\TH:i:S' : 'date' == _ ? 'Y-m-d' : 'H:i:S'),
				0 < p.selectedDates.length &&
					(p.mobileInput.defaultValue = p.mobileInput.value =
						p.formatDate(p.selectedDates[0], p.mobileFormatStr)),
				p.config.minDate && (p.mobileInput.min = p.formatDate(p.config.minDate, 'Y-m-d')),
				p.config.maxDate && (p.mobileInput.max = p.formatDate(p.config.maxDate, 'Y-m-d')),
				p.input.getAttribute('step') && (p.mobileInput.step = String(p.input.getAttribute('step'))),
				(p.input.type = 'hidden'),
				void 0 !== p.altInput && (p.altInput.type = 'hidden');
			try {
				p.input.parentNode && p.input.parentNode.insertBefore(p.mobileInput, p.input.nextSibling);
			} catch (_) {}
			l(p.mobileInput, 'change', function (e) {
				p.setDate(ke(e).value, !1, p.mobileFormatStr), x('onChange'), x('onClose');
			});
		} else {
			n = be(Z, 50);
			(p._debouncedChange = be(W, 300)),
				p.daysContainer &&
					!/iPhone|iPad|iPod/i.test(navigator.userAgent) &&
					l(p.daysContainer, 'mouseover', function (e) {
						'range' === p.config.mode && r(ke(e));
					}),
				l(p._input, 'keydown', G),
				void 0 !== p.calendarContainer && l(p.calendarContainer, 'keydown', G),
				p.config.inline || p.config.static || l(window, 'resize', n),
				void 0 !== window.ontouchstart
					? l(window.document, 'touchstart', V)
					: l(window.document, 'mousedown', V),
				l(window.document, 'focus', V, { capture: !0 }),
				!0 === p.config.clickOpens && (l(p._input, 'focus', p.open), l(p._input, 'click', p.open)),
				void 0 !== p.daysContainer &&
					(l(p.monthNav, 'click', de),
					l(p.monthNav, ['keyup', 'increment'], R),
					l(p.daysContainer, 'click', ae)),
				void 0 !== p.timeContainer &&
					void 0 !== p.minuteElement &&
					void 0 !== p.hourElement &&
					(l(p.timeContainer, ['increment'], d),
					l(p.timeContainer, 'blur', d, { capture: !0 }),
					l(p.timeContainer, 'click', B),
					l([p.hourElement, p.minuteElement], ['focus', 'click'], function (e) {
						return ke(e).select();
					}),
					void 0 !== p.secondElement &&
						l(p.secondElement, 'focus', function () {
							return p.secondElement && p.secondElement.select();
						}),
					void 0 !== p.amPM) &&
					l(p.amPM, 'click', function (e) {
						d(e);
					}),
				p.config.allowInput && l(p._input, 'blur', z);
		}
		(p.selectedDates.length || p.config.noCalendar) &&
			(p.config.enableTime && a(p.config.noCalendar ? p.latestSelectedDateObj : void 0), k(!1)),
			L();
		var O,
			F,
			A,
			N,
			P,
			T = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
		return !p.isMobile && T && M(), x('onReady'), p;
	}
	function n(e, t) {
		for (
			var n = Array.prototype.slice.call(e).filter(function (e) {
					return e instanceof HTMLElement;
				}),
				a = [],
				o = 0;
			o < n.length;
			o++
		) {
			var i = n[o];
			try {
				null === i.getAttribute('data-fp-omit') &&
					(void 0 !== i._flatpickr && (i._flatpickr.destroy(), (i._flatpickr = void 0)),
					(i._flatpickr = r(i, t || {})),
					a.push(i._flatpickr));
			} catch (e) {
				console.error(e);
			}
		}
		return 1 === a.length ? a[0] : a;
	}
	'function' != typeof Object.assign &&
		(Object.assign = function (n) {
			for (var e = [], t = 1; t < arguments.length; t++) e[t - 1] = arguments[t];
			if (!n) throw TypeError('Cannot convert undefined or null to object');
			for (var a = 0, o = e; a < o.length; a++)
				!(function (t) {
					t &&
						Object.keys(t).forEach(function (e) {
							return (n[e] = t[e]);
						});
				})(o[a]);
			return n;
		}),
		'undefined' != typeof HTMLElement &&
			'undefined' != typeof HTMLCollection &&
			'undefined' != typeof NodeList &&
			((HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr =
				function (e) {
					return n(this, e);
				}),
			(HTMLElement.prototype.flatpickr = function (e) {
				return n([this], e);
			}));
	var Pe = function (e, t) {
		return 'string' == typeof e
			? n(window.document.querySelectorAll(e), t)
			: e instanceof Node
				? n([e], t)
				: n(e, t);
	};
	return (
		(Pe.defaultConfig = {}),
		(Pe.l10ns = { en: me({}, ve), default: me({}, ve) }),
		(Pe.localize = function (e) {
			Pe.l10ns.default = me(me({}, Pe.l10ns.default), e);
		}),
		(Pe.setDefaults = function (e) {
			Pe.defaultConfig = me(me({}, Pe.defaultConfig), e);
		}),
		(Pe.parseDate = _e({})),
		(Pe.formatDate = Se({})),
		(Pe.compareDates = Oe),
		'undefined' != typeof jQuery &&
			void 0 !== jQuery.fn &&
			(jQuery.fn.flatpickr = function (e) {
				return n(this, e);
			}),
		(Date.prototype.fp_incr = function (e) {
			return new Date(
				this.getFullYear(),
				this.getMonth(),
				this.getDate() + ('string' == typeof e ? parseInt(e, 10) : e)
			);
		}),
		'undefined' != typeof window && (window.flatpickr = Pe),
		Pe
	);
});
