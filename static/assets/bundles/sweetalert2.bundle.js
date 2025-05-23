!(function (e, t) {
	'object' == typeof exports && 'undefined' != typeof module
		? (module.exports = t())
		: 'function' == typeof define && define.amd
			? define(t)
			: ((e = 'undefined' != typeof globalThis ? globalThis : e || self).Sweetalert2 = t());
})(this, function () {
	'use strict';
	function t(e, t) {
		return (t = q((e = e), t, 'get')).get ? t.get.call(e) : t.value;
	}
	function I(e, t, o) {
		var a = e,
			e = q(e, t, 'set'),
			t = o;
		if (e.set) e.set.call(a, t);
		else {
			if (!e.writable) throw new TypeError('attempted to set read only private field');
			e.value = t;
		}
	}
	function q(e, t, o) {
		if (t.has(e)) return t.get(e);
		throw new TypeError('attempted to ' + o + ' private field on non-instance');
	}
	function D(e) {
		var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
		const o = oe();
		o &&
			i(o) &&
			(t && ((o.style.transition = 'none'), (o.style.width = '100%')),
			setTimeout(() => {
				(o.style.transition = 'width '.concat(e / 1e3, 's linear')), (o.style.width = '0%');
			}, 10));
	}
	const C = {},
		V = (a) =>
			new Promise((e) => {
				if (!a) return e();
				var t = window.scrollX,
					o = window.scrollY;
				(C.restoreFocusTimeout = setTimeout(() => {
					C.previousActiveElement instanceof HTMLElement
						? (C.previousActiveElement.focus(), (C.previousActiveElement = null))
						: document.body && document.body.focus(),
						e();
				}, 100)),
					window.scrollTo(t, o);
			}),
		N = 'swal2-',
		A = [
			'container',
			'shown',
			'height-auto',
			'iosfix',
			'popup',
			'modal',
			'no-backdrop',
			'no-transition',
			'toast',
			'toast-shown',
			'show',
			'hide',
			'close',
			'title',
			'html-container',
			'actions',
			'confirm',
			'deny',
			'cancel',
			'default-outline',
			'footer',
			'icon',
			'icon-content',
			'image',
			'input',
			'file',
			'range',
			'select',
			'radio',
			'checkbox',
			'label',
			'textarea',
			'inputerror',
			'input-label',
			'validation-message',
			'progress-steps',
			'active-progress-step',
			'progress-step',
			'progress-step-line',
			'loader',
			'loading',
			'styled',
			'top',
			'top-start',
			'top-end',
			'top-left',
			'top-right',
			'center',
			'center-start',
			'center-end',
			'center-left',
			'center-right',
			'bottom',
			'bottom-start',
			'bottom-end',
			'bottom-left',
			'bottom-right',
			'grow-row',
			'grow-column',
			'grow-fullscreen',
			'rtl',
			'timer-progress-bar',
			'timer-progress-bar-container',
			'scrollbar-measure',
			'icon-success',
			'icon-warning',
			'icon-info',
			'icon-question',
			'icon-error'
		].reduce((e, t) => ((e[t] = N + t), e), {}),
		F = ['success', 'warning', 'info', 'question', 'error'].reduce(
			(e, t) => ((e[t] = N + t), e),
			{}
		),
		_ = 'SweetAlert2:',
		R = (e) => e.charAt(0).toUpperCase() + e.slice(1),
		u = (e) => {
			console.warn(''.concat(_, ' ').concat('object' == typeof e ? e.join(' ') : e));
		},
		B = (e) => {
			console.error(''.concat(_, ' ').concat(e));
		},
		U = [],
		$ = (e) => ('function' == typeof e ? e() : e),
		Y = (e) => e && 'function' == typeof e.toPromise,
		E = (e) => (Y(e) ? e.toPromise() : Promise.resolve(e)),
		Z = (e) => e && Promise.resolve(e) === e,
		T = () => document.body.querySelector('.'.concat(A.container)),
		o = (e) => {
			var t = T();
			return t ? t.querySelector(e) : null;
		},
		e = (e) => o('.'.concat(e)),
		P = () => e(A.popup),
		W = () => e(A.icon),
		K = () => e(A.title),
		X = () => e(A['html-container']),
		J = () => e(A.image),
		G = () => e(A['progress-steps']),
		Q = () => e(A['validation-message']),
		L = () => o('.'.concat(A.actions, ' .').concat(A.confirm)),
		p = () => o('.'.concat(A.actions, ' .').concat(A.cancel)),
		m = () => o('.'.concat(A.actions, ' .').concat(A.deny)),
		h = () => o('.'.concat(A.loader)),
		ee = () => e(A.actions),
		te = () => e(A.footer),
		oe = () => e(A['timer-progress-bar']),
		ae = () => e(A.close),
		ne = () => {
			var e,
				t = P();
			return t
				? ((e = t.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')),
					(e = Array.from(e).sort((e, t) => {
						(e = parseInt(e.getAttribute('tabindex') || '0')),
							(t = parseInt(t.getAttribute('tabindex') || '0'));
						return t < e ? 1 : e < t ? -1 : 0;
					})),
					(t = t.querySelectorAll(
						'\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex="0"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n'
					)),
					(t = Array.from(t).filter((e) => '-1' !== e.getAttribute('tabindex'))),
					[...new Set(e.concat(t))].filter((e) => i(e)))
				: [];
		},
		se = () =>
			n(document.body, A.shown) &&
			!n(document.body, A['toast-shown']) &&
			!n(document.body, A['no-backdrop']),
		ie = () => {
			var e = P();
			return !!e && n(e, A.toast);
		},
		g = (t, e) => {
			var o;
			(t.textContent = ''),
				e &&
					((o = (e = new DOMParser().parseFromString(e, 'text/html')).querySelector('head')) &&
						Array.from(o.childNodes).forEach((e) => {
							t.appendChild(e);
						}),
					(o = e.querySelector('body'))) &&
					Array.from(o.childNodes).forEach((e) => {
						e instanceof HTMLVideoElement || e instanceof HTMLAudioElement
							? t.appendChild(e.cloneNode(!0))
							: t.appendChild(e);
					});
		},
		n = (t, e) => {
			if (!e) return !1;
			var o = e.split(/\s+/);
			for (let e = 0; e < o.length; e++) if (!t.classList.contains(o[e])) return !1;
			return !0;
		},
		f = (e, t, o) => {
			var a, n;
			(a = e),
				(n = t),
				Array.from(a.classList).forEach((e) => {
					Object.values(A).includes(e) ||
						Object.values(F).includes(e) ||
						Object.values(n.showClass || {}).includes(e) ||
						a.classList.remove(e);
				}),
				t.customClass &&
					t.customClass[o] &&
					('string' == typeof t.customClass[o] || t.customClass[o].forEach
						? b(e, t.customClass[o])
						: u(
								'Invalid type of customClass.'
									.concat(o, '! Expected string or iterable object, got "')
									.concat(typeof t.customClass[o], '"')
							));
		},
		re = (e, t) => {
			if (!t) return null;
			switch (t) {
				case 'select':
				case 'textarea':
				case 'file':
					return e.querySelector('.'.concat(A.popup, ' > .').concat(A[t]));
				case 'checkbox':
					return e.querySelector('.'.concat(A.popup, ' > .').concat(A.checkbox, ' input'));
				case 'radio':
					return (
						e.querySelector('.'.concat(A.popup, ' > .').concat(A.radio, ' input:checked')) ||
						e.querySelector('.'.concat(A.popup, ' > .').concat(A.radio, ' input:first-child'))
					);
				case 'range':
					return e.querySelector('.'.concat(A.popup, ' > .').concat(A.range, ' input'));
				default:
					return e.querySelector('.'.concat(A.popup, ' > .').concat(A.input));
			}
		},
		le = (e) => {
			var t;
			e.focus(), 'file' !== e.type && ((t = e.value), (e.value = ''), (e.value = t));
		},
		ce = (e, t, o) => {
			e &&
				t &&
				(t = 'string' == typeof t ? t.split(/\s+/).filter(Boolean) : t).forEach((t) => {
					Array.isArray(e)
						? e.forEach((e) => {
								o ? e.classList.add(t) : e.classList.remove(t);
							})
						: o
							? e.classList.add(t)
							: e.classList.remove(t);
				});
		},
		b = (e, t) => {
			ce(e, t, !0);
		},
		S = (e, t) => {
			ce(e, t, !1);
		},
		w = (e, t) => {
			var o = Array.from(e.children);
			for (let e = 0; e < o.length; e++) {
				var a = o[e];
				if (a instanceof HTMLElement && n(a, t)) return a;
			}
		},
		d = (e, t, o) => {
			(o = o === ''.concat(parseInt(o)) ? parseInt(o) : o) || 0 === parseInt(o)
				? (e.style[t] = 'number' == typeof o ? ''.concat(o, 'px') : o)
				: e.style.removeProperty(t);
		},
		j = function (e) {
			e &&
				(e.style.display = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 'flex');
		},
		O = (e) => {
			e && (e.style.display = 'none');
		},
		de = function (e) {
			let t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 'block';
			e &&
				new MutationObserver(() => {
					we(e, e.innerHTML, t);
				}).observe(e, { childList: !0, subtree: !0 });
		},
		ue = (e, t, o, a) => {
			e = e.querySelector(t);
			e && (e.style[o] = a);
		},
		we = function (e, t) {
			t ? j(e, 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 'flex') : O(e);
		},
		i = (e) => !(!e || !(e.offsetWidth || e.offsetHeight || e.getClientRects().length)),
		pe = (e) => !!(e.scrollHeight > e.clientHeight),
		me = (e) => {
			var e = window.getComputedStyle(e),
				t = parseFloat(e.getPropertyValue('animation-duration') || '0'),
				e = parseFloat(e.getPropertyValue('transition-duration') || '0');
			return 0 < t || 0 < e;
		},
		he = () => 'undefined' == typeof window || 'undefined' == typeof document,
		ge = '\n <div aria-labelledby="'
			.concat(A.title, '" aria-describedby="')
			.concat(A['html-container'], '" class="')
			.concat(A.popup, '" tabindex="-1">\n   <button type="button" class="')
			.concat(A.close, '"></button>\n   <ul class="')
			.concat(A['progress-steps'], '"></ul>\n   <div class="')
			.concat(A.icon, '"></div>\n   <img class="')
			.concat(A.image, '" />\n   <h2 class="')
			.concat(A.title, '" id="')
			.concat(A.title, '"></h2>\n   <div class="')
			.concat(A['html-container'], '" id="')
			.concat(A['html-container'], '"></div>\n   <input class="')
			.concat(A.input, '" id="')
			.concat(A.input, '" />\n   <input type="file" class="')
			.concat(A.file, '" />\n   <div class="')
			.concat(
				A.range,
				'">\n     <input type="range" />\n     <output></output>\n   </div>\n   <select class="'
			)
			.concat(A.select, '" id="')
			.concat(A.select, '"></select>\n   <div class="')
			.concat(A.radio, '"></div>\n   <label class="')
			.concat(A.checkbox, '">\n     <input type="checkbox" id="')
			.concat(A.checkbox, '" />\n     <span class="')
			.concat(A.label, '"></span>\n   </label>\n   <textarea class="')
			.concat(A.textarea, '" id="')
			.concat(A.textarea, '"></textarea>\n   <div class="')
			.concat(A['validation-message'], '" id="')
			.concat(A['validation-message'], '"></div>\n   <div class="')
			.concat(A.actions, '">\n     <div class="')
			.concat(A.loader, '"></div>\n     <button type="button" class="')
			.concat(A.confirm, '"></button>\n     <button type="button" class="')
			.concat(A.deny, '"></button>\n     <button type="button" class="')
			.concat(A.cancel, '"></button>\n   </div>\n   <div class="')
			.concat(A.footer, '"></div>\n   <div class="')
			.concat(A['timer-progress-bar-container'], '">\n     <div class="')
			.concat(A['timer-progress-bar'], '"></div>\n   </div>\n </div>\n')
			.replace(/(^|\n)\s*/g, ''),
		v = () => {
			C.currentInstance.resetValidationMessage();
		},
		fe = (e, t) => {
			var o, a;
			e instanceof HTMLElement
				? t.appendChild(e)
				: 'object' == typeof e
					? ((a = t), (o = e).jquery ? be(a, o) : g(a, o.toString()))
					: e && g(t, e);
		},
		be = (t, o) => {
			if (((t.textContent = ''), 0 in o))
				for (let e = 0; e in o; e++) t.appendChild(o[e].cloneNode(!0));
			else t.appendChild(o.cloneNode(!0));
		},
		l =
			!he() &&
			(void 0 !== (zt = document.createElement('div')).style.webkitAnimation
				? 'webkitAnimationEnd'
				: void 0 !== zt.style.animation && 'animationend'),
		ve = (e, t) => {
			var o,
				a,
				n,
				s,
				i,
				r,
				l,
				c,
				d,
				u = ee(),
				w = h();
			u &&
				w &&
				((t.showConfirmButton || t.showDenyButton || t.showCancelButton ? j : O)(u),
				f(u, t, 'actions'),
				(u = u),
				(o = w),
				(a = t),
				(l = L()),
				(c = m()),
				(d = p()),
				l &&
					c &&
					d &&
					(ye(l, 'confirm', a),
					ye(c, 'deny', a),
					ye(d, 'cancel', a),
					(n = l),
					(s = c),
					(i = d),
					(r = a).buttonsStyling
						? (b([n, s, i], A.styled),
							r.confirmButtonColor &&
								((n.style.backgroundColor = r.confirmButtonColor), b(n, A['default-outline'])),
							r.denyButtonColor &&
								((s.style.backgroundColor = r.denyButtonColor), b(s, A['default-outline'])),
							r.cancelButtonColor &&
								((i.style.backgroundColor = r.cancelButtonColor), b(i, A['default-outline'])))
						: S([n, s, i], A.styled),
					a.reverseButtons) &&
					(a.toast
						? (u.insertBefore(d, l), u.insertBefore(c, l))
						: (u.insertBefore(d, o), u.insertBefore(c, o), u.insertBefore(l, o))),
				g(w, t.loaderHtml || ''),
				f(w, t, 'loader'));
		};
	function ye(e, t, o) {
		var a = R(t);
		we(e, o['show'.concat(a, 'Button')], 'inline-block'),
			g(e, o[''.concat(t, 'ButtonText')] || ''),
			e.setAttribute('aria-label', o[''.concat(t, 'ButtonAriaLabel')] || ''),
			(e.className = A[t]),
			f(e, o, ''.concat(t, 'Button'));
	}
	const xe = (e, t) => {
		var o,
			a,
			n = T();
		n &&
			((o = n),
			'string' == typeof (a = t.backdrop)
				? (o.style.background = a)
				: a || b([document.documentElement, document.body], A['no-backdrop']),
			(o = n),
			(a = t.position) &&
				(a in A
					? b(o, A[a])
					: (u('The "position" parameter is not valid, defaulting to "center"'), b(o, A.center))),
			(a = n),
			(o = t.grow) && b(a, A['grow-'.concat(o)]),
			f(n, t, 'container'));
	};
	var M = { innerParams: new WeakMap(), domCache: new WeakMap() };
	const ke = ['input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea'],
		Ce = (e, t) => {
			(e.placeholder && !t.inputPlaceholder) || (e.placeholder = t.inputPlaceholder);
		},
		Ae = (e, t, o) => {
			var a, n;
			o.inputLabel &&
				((a = document.createElement('label')),
				(n = A['input-label']),
				a.setAttribute('for', e.id),
				(a.className = n),
				'object' == typeof o.customClass && b(a, o.customClass.inputLabel),
				(a.innerText = o.inputLabel),
				t.insertAdjacentElement('beforebegin', a));
		},
		Be = (e) => w(P(), A[e] || A.input),
		Ee = (e, t) => {
			['string', 'number'].includes(typeof t)
				? (e.value = ''.concat(t))
				: Z(t) ||
					u(
						'Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(
							typeof t,
							'"'
						)
					);
		},
		r = {},
		Te =
			((r.text =
				r.email =
				r.password =
				r.number =
				r.tel =
				r.url =
				r.search =
				r.date =
				r['datetime-local'] =
				r.time =
				r.week =
				r.month =
					(e, t) => (Ee(e, t.inputValue), Ae(e, e, t), Ce(e, t), (e.type = t.input), e)),
			(r.file = (e, t) => (Ae(e, e, t), Ce(e, t), e)),
			(r.range = (e, t) => {
				var o = e.querySelector('input'),
					a = e.querySelector('output');
				return Ee(o, t.inputValue), (o.type = t.input), Ee(a, t.inputValue), Ae(o, e, t), e;
			}),
			(r.select = (e, t) => {
				var o;
				return (
					(e.textContent = ''),
					t.inputPlaceholder &&
						((o = document.createElement('option')),
						g(o, t.inputPlaceholder),
						(o.value = ''),
						(o.disabled = !0),
						(o.selected = !0),
						e.appendChild(o)),
					Ae(e, e, t),
					e
				);
			}),
			(r.radio = (e) => ((e.textContent = ''), e)),
			(r.checkbox = (e, t) => {
				var o = re(P(), 'checkbox'),
					e = ((o.value = '1'), (o.checked = Boolean(t.inputValue)), e.querySelector('span'));
				return g(e, t.inputPlaceholder), o;
			}),
			(r.textarea = (o, a) => (
				Ee(o, a.inputValue),
				Ce(o, a),
				Ae(o, o, a),
				setTimeout(() => {
					if ('MutationObserver' in window) {
						const t = parseInt(window.getComputedStyle(P()).width);
						new MutationObserver(() => {
							var e;
							document.body.contains(o) &&
								((e =
									o.offsetWidth +
									((e = o),
									parseInt(window.getComputedStyle(e).marginLeft) +
										parseInt(window.getComputedStyle(e).marginRight))) > t
									? (P().style.width = ''.concat(e, 'px'))
									: d(P(), 'width', a.width));
						}).observe(o, { attributes: !0, attributeFilter: ['style'] });
					}
				}),
				o
			)),
			(e, t) => {
				var o = X();
				if (o) {
					de(o),
						f(o, t, 'htmlContainer'),
						t.html
							? (fe(t.html, o), j(o, 'block'))
							: t.text
								? ((o.textContent = t.text), j(o, 'block'))
								: O(o);
					{
						var o = e,
							a = t;
						const n = P();
						if (n) {
							const s = M.innerParams.get(o),
								i = !s || a.input !== s.input;
							ke.forEach((e) => {
								var t = w(n, A[e]);
								t &&
									(((e, t) => {
										var o = re(P(), e);
										if (o) {
											var a = o;
											for (let e = 0; e < a.attributes.length; e++) {
												var n = a.attributes[e].name;
												['id', 'type', 'value', 'style'].includes(n) || a.removeAttribute(n);
											}
											for (const e in t) o.setAttribute(e, t[e]);
										}
									})(e, a.inputAttributes),
									(t.className = A[e]),
									i) &&
									O(t);
							}),
								a.input &&
									(i &&
										((e) => {
											if (e.input)
												if (r[e.input]) {
													const t = Be(e.input),
														o = r[e.input](t, e);
													j(t),
														e.inputAutoFocus &&
															setTimeout(() => {
																le(o);
															});
												} else
													B(
														'Unexpected type of input! Expected '
															.concat(Object.keys(r).join(' | '), ', got "')
															.concat(e.input, '"')
													);
										})(a),
									(o = a),
									(e = Be(o.input)),
									'object' == typeof o.customClass) &&
									b(e, o.customClass.input);
						}
					}
				}
			}),
		Pe = (e, t) => {
			for (var [o, a] of Object.entries(F)) t.icon !== o && S(e, a);
			b(e, t.icon && F[t.icon]);
			var n = e,
				s = t;
			if (s.iconColor) {
				(n.style.color = s.iconColor), (n.style.borderColor = s.iconColor);
				for (const c of [
					'.swal2-success-line-tip',
					'.swal2-success-line-long',
					'.swal2-x-mark-line-left',
					'.swal2-x-mark-line-right'
				])
					ue(n, c, 'backgroundColor', s.iconColor);
				ue(n, '.swal2-success-ring', 'borderColor', s.iconColor);
			}
			{
				var i = P();
				if (i) {
					var r = window.getComputedStyle(i).getPropertyValue('background-color'),
						l = i.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix');
					for (let e = 0; e < l.length; e++) l[e].style.backgroundColor = r;
				}
			}
			f(e, t, 'icon');
		},
		Le = (o, a) => {
			if (a.icon || a.iconHtml) {
				let e = o.innerHTML,
					t = '';
				a.iconHtml
					? (t = Se(a.iconHtml))
					: 'success' === a.icon
						? ((t =
								'\n  <div class="swal2-success-circular-line-left"></div>\n  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n  <div class="swal2-success-circular-line-right"></div>\n'),
							(e = e.replace(/ style=".*?"/g, '')))
						: 'error' === a.icon
							? (t =
									'\n  <span class="swal2-x-mark">\n    <span class="swal2-x-mark-line-left"></span>\n    <span class="swal2-x-mark-line-right"></span>\n  </span>\n')
							: a.icon && (t = Se({ question: '?', warning: '!', info: 'i' }[a.icon])),
					e.trim() !== t.trim() && g(o, t);
			}
		},
		Se = (e) => '<div class="'.concat(A['icon-content'], '">').concat(e, '</div>'),
		je = (e, t) => {
			var o = t.showClass || {};
			(e.className = ''.concat(A.popup, ' ').concat(i(e) ? o.popup : '')),
				t.toast
					? (b([document.documentElement, document.body], A['toast-shown']), b(e, A.toast))
					: b(e, A.modal),
				f(e, t, 'popup'),
				'string' == typeof t.customClass && b(e, t.customClass),
				t.icon && b(e, A['icon-'.concat(t.icon)]);
		},
		Oe = (e) => {
			var t = document.createElement('li');
			return b(t, A['progress-step']), g(t, e), t;
		},
		Me = (e) => {
			var t = document.createElement('li');
			return (
				b(t, A['progress-step-line']),
				e.progressStepsDistance && d(t, 'width', e.progressStepsDistance),
				t
			);
		},
		ze = (e, t) => {
			var o = t,
				a = T(),
				n = P();
			if (a && n) {
				if (o.toast) {
					d(a, 'width', o.width), (n.style.width = '100%');
					const i = h();
					i && n.insertBefore(i, W());
				} else d(n, 'width', o.width);
				d(n, 'padding', o.padding),
					o.color && (n.style.color = o.color),
					o.background && (n.style.background = o.background),
					O(Q()),
					je(n, o);
			}
			xe(0, t);
			{
				var s = t;
				const r = G();
				if (r) {
					const { progressSteps: l, currentProgressStep: c } = s;
					l && 0 !== l.length && void 0 !== c
						? (j(r),
							(r.textContent = ''),
							c >= l.length &&
								u(
									'Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)'
								),
							l.forEach((e, t) => {
								e = Oe(e);
								if (
									(r.appendChild(e), t === c && b(e, A['active-progress-step']), t !== l.length - 1)
								) {
									const e = Me(s);
									r.appendChild(e);
								}
							}))
						: O(r);
				}
			}
			(a = t),
				(n = M.innerParams.get(e)),
				(o = W()) &&
					(n && a.icon === n.icon
						? (Le(o, a), Pe(o, a))
						: a.icon || a.iconHtml
							? a.icon && -1 === Object.keys(F).indexOf(a.icon)
								? (B(
										'Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(
											a.icon,
											'"'
										)
									),
									O(o))
								: (j(o), Le(o, a), Pe(o, a), b(o, a.showClass && a.showClass.icon))
							: O(o)),
				(n = t),
				(a = J()) &&
					(n.imageUrl
						? (j(a, ''),
							a.setAttribute('src', n.imageUrl),
							a.setAttribute('alt', n.imageAlt || ''),
							d(a, 'width', n.imageWidth),
							d(a, 'height', n.imageHeight),
							(a.className = A.image),
							f(a, n, 'image'))
						: O(a)),
				(o = t),
				(n = K()) &&
					(de(n),
					we(n, o.title || o.titleText, 'block'),
					o.title && fe(o.title, n),
					o.titleText && (n.innerText = o.titleText),
					f(n, o, 'title')),
				(a = t),
				(n = ae()) &&
					(g(n, a.closeButtonHtml || ''),
					f(n, a, 'closeButton'),
					we(n, a.showCloseButton),
					n.setAttribute('aria-label', a.closeButtonAriaLabel || '')),
				Te(e, t),
				ve(0, t),
				(o = t),
				(n = te()) &&
					(de(n), we(n, o.footer, 'block'), o.footer && fe(o.footer, n), f(n, o, 'footer'));
			a = P();
			'function' == typeof t.didRender && a && t.didRender(a);
		},
		He = () => {
			var e;
			return null == (e = L()) ? void 0 : e.click();
		},
		z = Object.freeze({
			cancel: 'cancel',
			backdrop: 'backdrop',
			close: 'close',
			esc: 'esc',
			timer: 'timer'
		}),
		Ie = (e) => {
			e.keydownTarget &&
				e.keydownHandlerAdded &&
				(e.keydownTarget.removeEventListener('keydown', e.keydownHandler, {
					capture: e.keydownListenerCapture
				}),
				(e.keydownHandlerAdded = !1));
		},
		qe = (e, t) => {
			var o = ne();
			o.length
				? ((e += t) === o.length ? (e = 0) : -1 === e && (e = o.length - 1), o[e].focus())
				: null != (t = P()) && t.focus();
		},
		De = ['ArrowRight', 'ArrowDown'],
		Ve = ['ArrowLeft', 'ArrowUp'],
		Ne = (e, t) => {
			var o;
			$(t.allowEnterKey) &&
				((o = re(P(), t.input)), e.target) &&
				o &&
				e.target instanceof HTMLElement &&
				e.target.outerHTML === o.outerHTML &&
				(['textarea', 'file'].includes(t.input) || (He(), e.preventDefault()));
		},
		Fe = (e) => {
			var t = e.target,
				o = ne();
			let a = -1;
			for (let e = 0; e < o.length; e++)
				if (t === o[e]) {
					a = e;
					break;
				}
			e.shiftKey ? qe(a, -1) : qe(a, 1), e.stopPropagation(), e.preventDefault();
		},
		_e = (e) => {
			var o = ee(),
				t = L(),
				a = m(),
				n = p();
			if (o && t && a && n) {
				t = [t, a, n];
				if (
					!(document.activeElement instanceof HTMLElement) ||
					t.includes(document.activeElement)
				) {
					var s = De.includes(e) ? 'nextElementSibling' : 'previousElementSibling';
					let t = document.activeElement;
					if (t) {
						for (let e = 0; e < o.children.length; e++) {
							if (!(t = t[s])) return;
							if (t instanceof HTMLButtonElement && i(t)) break;
						}
						t instanceof HTMLButtonElement && t.focus();
					}
				}
			}
		},
		Re = (e, t, o) => {
			$(t.allowEscapeKey) && (e.preventDefault(), o(z.esc));
		};
	var Ue = { swalPromiseResolve: new WeakMap(), swalPromiseReject: new WeakMap() };
	const $e = () => {
			Array.from(document.body.children).forEach((e) => {
				e.hasAttribute('data-previous-aria-hidden')
					? (e.setAttribute('aria-hidden', e.getAttribute('data-previous-aria-hidden') || ''),
						e.removeAttribute('data-previous-aria-hidden'))
					: e.removeAttribute('aria-hidden');
			});
		},
		Ye = 'undefined' != typeof window && !!window.GestureEvent,
		Ze = () => {
			var e = T();
			if (e) {
				let t;
				(e.ontouchstart = (e) => {
					t = ((e) => {
						const t = e.target,
							o = T(),
							a = X();
						return (
							!(!o || !a) &&
							!We(e) &&
							!Ke(e) &&
							(t === o ||
								(!pe(o) &&
									t instanceof HTMLElement &&
									'INPUT' !== t.tagName &&
									'TEXTAREA' !== t.tagName &&
									(!pe(a) || !a.contains(t))))
						);
					})(e);
				}),
					(e.ontouchmove = (e) => {
						t && (e.preventDefault(), e.stopPropagation());
					});
			}
		},
		We = (e) => e.touches && e.touches.length && 'stylus' === e.touches[0].touchType,
		Ke = (e) => e.touches && 1 < e.touches.length;
	let s = null;
	function Xe(e, t, o, a) {
		ie() ? et(e, a) : (V(o).then(() => et(e, a)), Ie(C)),
			Ye
				? (t.setAttribute('style', 'display:none !important'),
					t.removeAttribute('class'),
					(t.innerHTML = ''))
				: t.remove(),
			se() &&
				(null !== s && ((document.body.style.paddingRight = ''.concat(s, 'px')), (s = null)),
				n(document.body, A.iosfix) &&
					((o = parseInt(document.body.style.top, 10)),
					S(document.body, A.iosfix),
					(document.body.style.top = ''),
					(document.body.scrollTop = -1 * o)),
				$e()),
			S(
				[document.documentElement, document.body],
				[A.shown, A['height-auto'], A['no-backdrop'], A['toast-shown']]
			);
	}
	function a(e) {
		e =
			void 0 === (t = e)
				? { isConfirmed: !1, isDenied: !1, isDismissed: !0 }
				: Object.assign({ isConfirmed: !1, isDenied: !1, isDismissed: !1 }, t);
		var t = Ue.swalPromiseResolve.get(this),
			o = ((e) => {
				const t = P();
				if (!t) return !1;
				const o = M.innerParams.get(e);
				if (!o || n(t, o.hideClass.popup)) return !1;
				S(t, o.showClass.popup), b(t, o.hideClass.popup);
				const a = T();
				return S(a, o.showClass.backdrop), b(a, o.hideClass.backdrop), Qe(e, t, o), !0;
			})(this);
		this.isAwaitingPromise ? e.isDismissed || (Ge(this), t(e)) : o && t(e);
	}
	function Je(e) {
		var t = Ue.swalPromiseReject.get(this);
		Ge(this), t && t(e);
	}
	const Ge = (e) => {
			e.isAwaitingPromise && (delete e.isAwaitingPromise, M.innerParams.get(e) || e._destroy());
		},
		Qe = (e, t, o) => {
			var a,
				n,
				s,
				i = T(),
				r = l && me(t);
			'function' == typeof o.willClose && o.willClose(t),
				r
					? ((r = e),
						(a = t),
						(t = i),
						(n = o.returnFocus),
						(s = o.didClose),
						l &&
							((C.swalCloseEventFinishedCallback = Xe.bind(null, r, t, n, s)),
							a.addEventListener(l, function (e) {
								e.target === a &&
									(C.swalCloseEventFinishedCallback(), delete C.swalCloseEventFinishedCallback);
							})))
					: Xe(e, i, o.returnFocus, o.didClose);
		},
		et = (e, t) => {
			setTimeout(() => {
				'function' == typeof t && t.bind(e.params)(), e._destroy && e._destroy();
			});
		},
		H = (e) => {
			var t = P();
			if ((t || new ro(), (t = P()))) {
				var o = h();
				if (ie()) O(W());
				else {
					var a = t;
					const n = ee(),
						s = h();
					n &&
						s &&
						(!e && i(L()) && (e = L()),
						j(n),
						e &&
							(O(e), s.setAttribute('data-button-to-replace', e.className), n.insertBefore(s, e)),
						b([a, n], A.loading));
				}
				j(o),
					t.setAttribute('data-loading', 'true'),
					t.setAttribute('aria-busy', 'true'),
					t.focus();
			}
		},
		tt = (e) => (e.checked ? 1 : 0),
		ot = (e) => (e.checked ? e.value : null),
		at = (e) =>
			e.files && e.files.length
				? null !== e.getAttribute('multiple')
					? e.files
					: e.files[0]
				: null,
		nt = (t, l) => {
			const c = P();
			if (c) {
				const o = (e) => {
					if ('select' === l.input) {
						var t = c,
							o = st(e),
							n = l;
						const a = w(t, A.select);
						if (a) {
							const i = (e, t, o) => {
								var a = document.createElement('option');
								(a.value = o), g(a, t), (a.selected = it(o, n.inputValue)), e.appendChild(a);
							};
							o.forEach((t) => {
								var e = t[0],
									o = t[1];
								if (Array.isArray(o)) {
									const t = document.createElement('optgroup');
									(t.label = e),
										(t.disabled = !1),
										a.appendChild(t),
										o.forEach((e) => i(t, e[1], e[0]));
								} else i(a, o, e);
							}),
								a.focus();
						}
					} else if ('radio' === l.input) {
						var t = c,
							o = st(e),
							s = l;
						const r = w(t, A.radio);
						r &&
							(o.forEach((e) => {
								var t = e[0],
									e = e[1],
									o = document.createElement('input'),
									a = document.createElement('label'),
									t =
										((o.type = 'radio'),
										(o.name = A.radio),
										(o.value = t),
										it(t, s.inputValue) && (o.checked = !0),
										document.createElement('span'));
								g(t, e),
									(t.className = A.label),
									a.appendChild(o),
									a.appendChild(t),
									r.appendChild(a);
							}),
							(t = r.querySelectorAll('input')).length) &&
							t[0].focus();
					}
				};
				Y(l.inputOptions) || Z(l.inputOptions)
					? (H(L()),
						E(l.inputOptions).then((e) => {
							t.hideLoading(), o(e);
						}))
					: 'object' == typeof l.inputOptions
						? o(l.inputOptions)
						: B(
								'Unexpected type of inputOptions! Expected object, Map or Promise, got '.concat(
									typeof l.inputOptions
								)
							);
			}
		},
		st = (o) => {
			const a = [];
			return (
				o instanceof Map
					? o.forEach((e, t) => {
							let o = e;
							'object' == typeof o && (o = st(o)), a.push([t, o]);
						})
					: Object.keys(o).forEach((e) => {
							let t = o[e];
							'object' == typeof t && (t = st(t)), a.push([e, t]);
						}),
				a
			);
		},
		it = (e, t) => !!t && t.toString() === e.toString(),
		rt = (o, e) => {
			var t,
				a,
				n = M.innerParams.get(o);
			n.input
				? ((t = o.getInput()),
					(a = ((e) => {
						var t = o.getInput();
						if (!t) return null;
						switch (e.input) {
							case 'checkbox':
								return tt(t);
							case 'radio':
								return ot(t);
							case 'file':
								return at(t);
							default:
								return e.inputAutoTrim ? t.value.trim() : t.value;
						}
					})(n)),
					n.inputValidator
						? lt(o, a, e)
						: t && !t.checkValidity()
							? (o.enableButtons(), o.showValidationMessage(n.validationMessage))
							: ('deny' === e ? ct : wt)(o, a))
				: B('The "input" parameter is needed to be set when using returnInputValueOn'.concat(R(e)));
		},
		lt = (t, o, a) => {
			const e = M.innerParams.get(t);
			t.disableInput(),
				Promise.resolve()
					.then(() => E(e.inputValidator(o, e.validationMessage)))
					.then((e) => {
						t.enableButtons(),
							t.enableInput(),
							e ? t.showValidationMessage(e) : ('deny' === a ? ct : wt)(t, o);
					});
		},
		ct = (t, o) => {
			const e = M.innerParams.get(t || void 0);
			e.showLoaderOnDeny && H(m()),
				e.preDeny
					? ((t.isAwaitingPromise = !0),
						Promise.resolve()
							.then(() => E(e.preDeny(o, e.validationMessage)))
							.then((e) => {
								!1 === e
									? (t.hideLoading(), Ge(t))
									: t.close({ isDenied: !0, value: void 0 === e ? o : e });
							})
							.catch((e) => ut(t || void 0, e)))
					: t.close({ isDenied: !0, value: o });
		},
		dt = (e, t) => {
			e.close({ isConfirmed: !0, value: t });
		},
		ut = (e, t) => {
			e.rejectPromise(t);
		},
		wt = (t, o) => {
			const e = M.innerParams.get(t || void 0);
			e.showLoaderOnConfirm && H(),
				e.preConfirm
					? (t.resetValidationMessage(),
						(t.isAwaitingPromise = !0),
						Promise.resolve()
							.then(() => E(e.preConfirm(o, e.validationMessage)))
							.then((e) => {
								i(Q()) || !1 === e ? (t.hideLoading(), Ge(t)) : dt(t, void 0 === e ? o : e);
							})
							.catch((e) => ut(t || void 0, e)))
					: dt(t, o);
		};
	function pt() {
		var e = M.innerParams.get(this);
		if (e) {
			var t = M.domCache.get(this);
			if ((O(t.loader), ie())) e.icon && j(W());
			else {
				e = t;
				const o = e.popup.getElementsByClassName(e.loader.getAttribute('data-button-to-replace'));
				o.length ? j(o[0], 'inline-block') : i(L()) || i(m()) || i(p()) || O(e.actions);
			}
			S([t.popup, t.actions], A.loading),
				t.popup.removeAttribute('aria-busy'),
				t.popup.removeAttribute('data-loading'),
				(t.confirmButton.disabled = !1),
				(t.denyButton.disabled = !1),
				(t.cancelButton.disabled = !1);
		}
	}
	function mt() {
		var e = M.innerParams.get(this),
			t = M.domCache.get(this);
		return t ? re(t.popup, e.input) : null;
	}
	function ht(e, t, o) {
		const a = M.domCache.get(e);
		t.forEach((e) => {
			a[e].disabled = o;
		});
	}
	function gt(t, o) {
		var e = P();
		if (e && t)
			if ('radio' === t.type) {
				const t = e.querySelectorAll('[name="'.concat(A.radio, '"]'));
				for (let e = 0; e < t.length; e++) t[e].disabled = o;
			} else t.disabled = o;
	}
	function ft() {
		ht(this, ['confirmButton', 'denyButton', 'cancelButton'], !1);
	}
	function bt() {
		ht(this, ['confirmButton', 'denyButton', 'cancelButton'], !0);
	}
	function vt() {
		gt(this.getInput(), !1);
	}
	function yt() {
		gt(this.getInput(), !0);
	}
	function xt(e) {
		var t = M.domCache.get(this),
			o = M.innerParams.get(this),
			e =
				(g(t.validationMessage, e),
				(t.validationMessage.className = A['validation-message']),
				o.customClass &&
					o.customClass.validationMessage &&
					b(t.validationMessage, o.customClass.validationMessage),
				j(t.validationMessage),
				this.getInput());
		e &&
			(e.setAttribute('aria-invalid', 'true'),
			e.setAttribute('aria-describedby', A['validation-message']),
			le(e),
			b(e, A.inputerror));
	}
	function kt() {
		var e = M.domCache.get(this),
			e = (e.validationMessage && O(e.validationMessage), this.getInput());
		e &&
			(e.removeAttribute('aria-invalid'),
			e.removeAttribute('aria-describedby'),
			S(e, A.inputerror));
	}
	const c = {
			title: '',
			titleText: '',
			text: '',
			html: '',
			footer: '',
			icon: void 0,
			iconColor: void 0,
			iconHtml: void 0,
			template: void 0,
			toast: !1,
			showClass: { popup: 'swal2-show', backdrop: 'swal2-backdrop-show', icon: 'swal2-icon-show' },
			hideClass: { popup: 'swal2-hide', backdrop: 'swal2-backdrop-hide', icon: 'swal2-icon-hide' },
			customClass: {},
			target: 'body',
			color: void 0,
			backdrop: !0,
			heightAuto: !0,
			allowOutsideClick: !0,
			allowEscapeKey: !0,
			allowEnterKey: !0,
			stopKeydownPropagation: !0,
			keydownListenerCapture: !1,
			showConfirmButton: !0,
			showDenyButton: !1,
			showCancelButton: !1,
			preConfirm: void 0,
			preDeny: void 0,
			confirmButtonText: 'OK',
			confirmButtonAriaLabel: '',
			confirmButtonColor: void 0,
			denyButtonText: 'No',
			denyButtonAriaLabel: '',
			denyButtonColor: void 0,
			cancelButtonText: 'Cancel',
			cancelButtonAriaLabel: '',
			cancelButtonColor: void 0,
			buttonsStyling: !0,
			reverseButtons: !1,
			focusConfirm: !0,
			focusDeny: !1,
			focusCancel: !1,
			returnFocus: !0,
			showCloseButton: !1,
			closeButtonHtml: '&times;',
			closeButtonAriaLabel: 'Close this dialog',
			loaderHtml: '',
			showLoaderOnConfirm: !1,
			showLoaderOnDeny: !1,
			imageUrl: void 0,
			imageWidth: void 0,
			imageHeight: void 0,
			imageAlt: '',
			timer: void 0,
			timerProgressBar: !1,
			width: void 0,
			padding: void 0,
			background: void 0,
			input: void 0,
			inputPlaceholder: '',
			inputLabel: '',
			inputValue: '',
			inputOptions: {},
			inputAutoFocus: !0,
			inputAutoTrim: !0,
			inputAttributes: {},
			inputValidator: void 0,
			returnInputValueOnDeny: !1,
			validationMessage: void 0,
			grow: !1,
			position: 'center',
			progressSteps: [],
			currentProgressStep: void 0,
			progressStepsDistance: void 0,
			willOpen: void 0,
			didOpen: void 0,
			didRender: void 0,
			willClose: void 0,
			didClose: void 0,
			didDestroy: void 0,
			scrollbarPadding: !0
		},
		Ct = [
			'allowEscapeKey',
			'allowOutsideClick',
			'background',
			'buttonsStyling',
			'cancelButtonAriaLabel',
			'cancelButtonColor',
			'cancelButtonText',
			'closeButtonAriaLabel',
			'closeButtonHtml',
			'color',
			'confirmButtonAriaLabel',
			'confirmButtonColor',
			'confirmButtonText',
			'currentProgressStep',
			'customClass',
			'denyButtonAriaLabel',
			'denyButtonColor',
			'denyButtonText',
			'didClose',
			'didDestroy',
			'footer',
			'hideClass',
			'html',
			'icon',
			'iconColor',
			'iconHtml',
			'imageAlt',
			'imageHeight',
			'imageUrl',
			'imageWidth',
			'preConfirm',
			'preDeny',
			'progressSteps',
			'returnFocus',
			'reverseButtons',
			'showCancelButton',
			'showCloseButton',
			'showConfirmButton',
			'showDenyButton',
			'text',
			'title',
			'titleText',
			'willClose'
		],
		At = {},
		Bt = [
			'allowOutsideClick',
			'allowEnterKey',
			'backdrop',
			'focusConfirm',
			'focusDeny',
			'focusCancel',
			'returnFocus',
			'heightAuto',
			'keydownListenerCapture'
		],
		Et = (e) => Object.prototype.hasOwnProperty.call(c, e),
		Tt = (e) => -1 !== Ct.indexOf(e),
		Pt = (e) => At[e],
		Lt = (e) => {
			var t = Pt(e);
			t &&
				((t = t),
				(e = '"'
					.concat(
						(e = e),
						'" is deprecated and will be removed in the next major release. Please use "'
					)
					.concat(t, '" instead.')),
				U.includes(e) || (U.push(e), u(e)));
		};
	function St(e) {
		var t = P(),
			o = M.innerParams.get(this);
		!t || n(t, o.hideClass.popup)
			? u(
					"You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup."
				)
			: ((t = ((t) => {
					const o = {};
					return (
						Object.keys(t).forEach((e) => {
							Tt(e) ? (o[e] = t[e]) : u('Invalid parameter to update: '.concat(e));
						}),
						o
					);
				})(e)),
				(o = Object.assign({}, o, t)),
				ze(this, o),
				M.innerParams.set(this, o),
				Object.defineProperties(this, {
					params: { value: Object.assign({}, this.params, e), writable: !1, enumerable: !0 }
				}));
	}
	function jt() {
		var e = M.domCache.get(this),
			t = M.innerParams.get(this);
		t
			? (e.popup &&
					C.swalCloseEventFinishedCallback &&
					(C.swalCloseEventFinishedCallback(), delete C.swalCloseEventFinishedCallback),
				'function' == typeof t.didDestroy && t.didDestroy(),
				(e = this),
				Ot(e),
				delete e.params,
				delete C.keydownHandler,
				delete C.keydownTarget,
				delete C.currentInstance)
			: Ot(this);
	}
	const Ot = (e) => {
			e.isAwaitingPromise
				? (Mt(M, e), (e.isAwaitingPromise = !0))
				: (Mt(Ue, e),
					Mt(M, e),
					delete e.isAwaitingPromise,
					delete e.disableButtons,
					delete e.enableButtons,
					delete e.getInput,
					delete e.disableInput,
					delete e.enableInput,
					delete e.hideLoading,
					delete e.disableLoading,
					delete e.showValidationMessage,
					delete e.resetValidationMessage,
					delete e.close,
					delete e.closePopup,
					delete e.closeModal,
					delete e.closeToast,
					delete e.rejectPromise,
					delete e.update,
					delete e._destroy);
		},
		Mt = (e, t) => {
			for (const o in e) e[o].delete(t);
		};
	var zt = Object.freeze({
		__proto__: null,
		_destroy: jt,
		close: a,
		closeModal: a,
		closePopup: a,
		closeToast: a,
		disableButtons: bt,
		disableInput: yt,
		disableLoading: pt,
		enableButtons: ft,
		enableInput: vt,
		getInput: mt,
		handleAwaitingPromise: Ge,
		hideLoading: pt,
		rejectPromise: Je,
		resetValidationMessage: kt,
		showValidationMessage: xt,
		update: St
	});
	const Ht = (e) =>
		!!(e.showConfirmButton || e.showDenyButton || e.showCancelButton || e.showCloseButton);
	let It = !1;
	const qt = (e) => e instanceof Element || ('object' == typeof e && e.jquery),
		Dt = () => {
			if (C.timeout)
				return (
					(t = oe()) &&
						((e = parseInt(window.getComputedStyle(t).width)),
						t.style.removeProperty('transition'),
						(t.style.width = '100%'),
						(e = (e / parseInt(window.getComputedStyle(t).width)) * 100),
						(t.style.width = ''.concat(e, '%'))),
					C.timeout.stop()
				);
			var e, t;
		},
		Vt = () => {
			var e;
			if (C.timeout) return (e = C.timeout.start()), D(e), e;
		};
	let Nt = !1;
	const Ft = {},
		_t = (t) => {
			for (let e = t.target; e && e !== document; e = e.parentNode)
				for (const t in Ft) {
					var o = e.getAttribute(t);
					if (o) return void Ft[t].fire({ template: o });
				}
		};
	var Rt = Object.freeze({
		__proto__: null,
		argsToParams: (o) => {
			const a = {};
			return (
				'object' != typeof o[0] || qt(o[0])
					? ['title', 'html', 'icon'].forEach((e, t) => {
							t = o[t];
							'string' == typeof t || qt(t)
								? (a[e] = t)
								: void 0 !== t &&
									B(
										'Unexpected type of '
											.concat(e, '! Expected "string" or "Element", got ')
											.concat(typeof t)
									);
						})
					: Object.assign(a, o[0]),
				a
			);
		},
		bindClickHandler: function () {
			(Ft[0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 'data-swal-template'] =
				this),
				Nt || (document.body.addEventListener('click', _t), (Nt = !0));
		},
		clickCancel: () => {
			var e;
			return null == (e = p()) ? void 0 : e.click();
		},
		clickConfirm: He,
		clickDeny: () => {
			var e;
			return null == (e = m()) ? void 0 : e.click();
		},
		enableLoading: H,
		fire: function () {
			for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++) t[o] = arguments[o];
			return new this(...t);
		},
		getActions: ee,
		getCancelButton: p,
		getCloseButton: ae,
		getConfirmButton: L,
		getContainer: T,
		getDenyButton: m,
		getFocusableElements: ne,
		getFooter: te,
		getHtmlContainer: X,
		getIcon: W,
		getIconContent: () => e(A['icon-content']),
		getImage: J,
		getInputLabel: () => e(A['input-label']),
		getLoader: h,
		getPopup: P,
		getProgressSteps: G,
		getTimerLeft: () => C.timeout && C.timeout.getTimerLeft(),
		getTimerProgressBar: oe,
		getTitle: K,
		getValidationMessage: Q,
		increaseTimer: (e) => {
			if (C.timeout) return (e = C.timeout.increase(e)), D(e, !0), e;
		},
		isDeprecatedParameter: Pt,
		isLoading: () => {
			var e = P();
			return !!e && e.hasAttribute('data-loading');
		},
		isTimerRunning: () => !(!C.timeout || !C.timeout.isRunning()),
		isUpdatableParameter: Tt,
		isValidParameter: Et,
		isVisible: () => i(P()),
		mixin: function (o) {
			return class extends this {
				_main(e, t) {
					return super._main(e, Object.assign({}, o, t));
				}
			};
		},
		resumeTimer: Vt,
		showLoading: H,
		stopTimer: Dt,
		toggleTimer: () => {
			var e = C.timeout;
			return e && (e.running ? Dt : Vt)();
		}
	});
	class Ut {
		constructor(e, t) {
			(this.callback = e), (this.remaining = t), (this.running = !1), this.start();
		}
		start() {
			return (
				this.running ||
					((this.running = !0),
					(this.started = new Date()),
					(this.id = setTimeout(this.callback, this.remaining))),
				this.remaining
			);
		}
		stop() {
			return (
				this.started &&
					this.running &&
					((this.running = !1),
					clearTimeout(this.id),
					(this.remaining -= new Date().getTime() - this.started.getTime())),
				this.remaining
			);
		}
		increase(e) {
			var t = this.running;
			return t && this.stop(), (this.remaining += e), t && this.start(), this.remaining;
		}
		getTimerLeft() {
			return this.running && (this.stop(), this.start()), this.remaining;
		}
		isRunning() {
			return this.running;
		}
	}
	const $t = ['swal-title', 'swal-html', 'swal-footer'],
		y = (t, o) => {
			Array.from(t.attributes).forEach((e) => {
				-1 === o.indexOf(e.name) &&
					u([
						'Unrecognized attribute "'
							.concat(e.name, '" on <')
							.concat(t.tagName.toLowerCase(), '>.'),
						''.concat(
							o.length
								? 'Allowed attributes are: '.concat(o.join(', '))
								: 'To set the value, use HTML within the element.'
						)
					]);
			});
		},
		Yt = (e) => {
			var t = P();
			e.target === t &&
				l &&
				((e = T()), t.removeEventListener(l, Yt), (e.style.overflowY = 'auto'));
		},
		Zt = (e, t) => {
			l && me(t)
				? ((e.style.overflowY = 'hidden'), t.addEventListener(l, Yt))
				: (e.style.overflowY = 'auto');
		},
		Wt = (e, t, o) => {
			var a;
			Ye &&
				!n(document.body, A.iosfix) &&
				((a = document.body.scrollTop),
				(document.body.style.top = ''.concat(-1 * a, 'px')),
				b(document.body, A.iosfix),
				Ze()),
				t &&
					'hidden' !== o &&
					((a = o), null === s) &&
					(document.body.scrollHeight > window.innerHeight || 'scroll' === a) &&
					((s = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'))),
					(document.body.style.paddingRight = ''.concat(
						s +
							(((a = document.createElement('div')).className = A['scrollbar-measure']),
							document.body.appendChild(a),
							(t = a.getBoundingClientRect().width - a.clientWidth),
							document.body.removeChild(a),
							t),
						'px'
					))),
				setTimeout(() => {
					e.scrollTop = 0;
				});
		},
		Kt = (e, t, o) => {
			b(e, o.showClass.backdrop),
				t.style.setProperty('opacity', '0', 'important'),
				j(t, 'grid'),
				setTimeout(() => {
					b(t, o.showClass.popup), t.style.removeProperty('opacity');
				}, 10),
				b([document.documentElement, document.body], A.shown),
				o.heightAuto &&
					o.backdrop &&
					!o.toast &&
					b([document.documentElement, document.body], A['height-auto']);
		};
	var Xt = (e, t) =>
			/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(e)
				? Promise.resolve()
				: Promise.resolve(t || 'Invalid email address'),
		Jt = (e, t) =>
			/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(
				e
			)
				? Promise.resolve()
				: Promise.resolve(t || 'Invalid URL');
	function Gt(e) {
		(t = e).inputValidator ||
			('email' === t.input && (t.inputValidator = Xt),
			'url' === t.input && (t.inputValidator = Jt)),
			e.showLoaderOnConfirm &&
				!e.preConfirm &&
				u(
					'showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request'
				),
			((t = e).target &&
				('string' != typeof t.target || document.querySelector(t.target)) &&
				('string' == typeof t.target || t.target.appendChild)) ||
				(u('Target parameter is not valid, defaulting to "body"'), (t.target = 'body')),
			'string' == typeof e.title && (e.title = e.title.split('\n').join('<br />'));
		var t = e,
			e =
				!!(e = T()) &&
				(e.remove(),
				S(
					[document.documentElement, document.body],
					[A['no-backdrop'], A['toast-shown'], A['has-column']]
				),
				!0);
		if (he()) B('SweetAlert2 requires document to initialize');
		else {
			var o = document.createElement('div'),
				e =
					((o.className = A.container),
					e && b(o, A['no-transition']),
					g(o, ge),
					'string' == typeof (e = t.target) ? document.querySelector(e) : e);
			e.appendChild(o),
				(o = t),
				(t = P()).setAttribute('role', o.toast ? 'alert' : 'dialog'),
				t.setAttribute('aria-live', o.toast ? 'polite' : 'assertive'),
				o.toast || t.setAttribute('aria-modal', 'true'),
				'rtl' === window.getComputedStyle(e).direction && b(T(), A.rtl);
			{
				const a = P(),
					n = w(a, A.input),
					s = w(a, A.file),
					i = a.querySelector('.'.concat(A.range, ' input')),
					r = a.querySelector('.'.concat(A.range, ' output')),
					l = w(a, A.select),
					c = a.querySelector('.'.concat(A.checkbox, ' input')),
					d = w(a, A.textarea);
				(n.oninput = v),
					(s.onchange = v),
					(l.onchange = v),
					(c.onchange = v),
					(d.oninput = v),
					(i.oninput = () => {
						v(), (r.value = i.value);
					}),
					(i.onchange = () => {
						v(), (r.value = i.value);
					});
			}
		}
	}
	let x;
	var Qt = new WeakMap();
	class k {
		constructor() {
			var e = this,
				t = Qt,
				o = { writable: !0, value: void 0 };
			if (t.has(e))
				throw new TypeError('Cannot initialize the same private elements twice on an object');
			if ((t.set(e, o), 'undefined' != typeof window)) {
				x = this;
				for (var a = arguments.length, n = new Array(a), s = 0; s < a; s++) n[s] = arguments[s];
				t = Object.freeze(this.constructor.argsToParams(n));
				(this.params = t), (this.isAwaitingPromise = !1), I(this, Qt, this._main(x.params));
			}
		}
		_main(e) {
			var t,
				o = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
				a = Object.assign({}, o, e);
			!1 === a.backdrop &&
				a.allowOutsideClick &&
				u('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
			for (const n in a)
				(t = n),
					Et(t) || u('Unknown parameter "'.concat(t, '"')),
					a.toast &&
						((t = n),
						Bt.includes(t) && u('The parameter "'.concat(t, '" is incompatible with toasts'))),
					Lt(n);
			C.currentInstance && (C.currentInstance._destroy(), se()) && $e(), (C.currentInstance = x);
			(e = to(e, o)),
				Gt(e),
				Object.freeze(e),
				C.timeout && (C.timeout.stop(), delete C.timeout),
				clearTimeout(C.restoreFocusTimeout),
				(o = oo(x));
			return ze(x, e), M.innerParams.set(x, e), eo(x, o, e);
		}
		then(e) {
			return t(this, Qt).then(e);
		}
		finally(e) {
			return t(this, Qt).finally(e);
		}
	}
	const eo = (y, x, k) =>
			new Promise((e, t) => {
				const o = (e) => {
					y.close({ isDismissed: !0, dismiss: e });
				};
				Ue.swalPromiseResolve.set(y, e),
					Ue.swalPromiseReject.set(y, t),
					(x.confirmButton.onclick = () => {
						var e, t;
						(e = y),
							(t = M.innerParams.get(e)),
							e.disableButtons(),
							t.input ? rt(e, 'confirm') : wt(e, !0);
					}),
					(x.denyButton.onclick = () => {
						var e, t;
						(e = y),
							(t = M.innerParams.get(e)),
							e.disableButtons(),
							t.returnInputValueOnDeny ? rt(e, 'deny') : ct(e, !1);
					}),
					(x.cancelButton.onclick = () => {
						var e, t;
						(e = y), (t = o), e.disableButtons(), t(z.cancel);
					}),
					(x.closeButton.onclick = () => {
						o(z.close);
					}),
					(e = x),
					(t = o),
					(s = k).toast
						? ((u = s),
							(w = t),
							(e.popup.onclick = () => {
								(u && (Ht(u) || u.timer || u.input)) || w(z.close);
							}))
						: (((d = e).popup.onmousedown = () => {
								d.container.onmouseup = function (e) {
									(d.container.onmouseup = () => {}), e.target === d.container && (It = !0);
								};
							}),
							((c = e).container.onmousedown = () => {
								c.popup.onmouseup = function (e) {
									(c.popup.onmouseup = () => {}),
										(e.target === c.popup ||
											(e.target instanceof HTMLElement && c.popup.contains(e.target))) &&
											(It = !0);
								};
							}),
							(i = s),
							(l = t),
							((r = e).container.onclick = (e) => {
								It
									? (It = !1)
									: e.target === r.container && $(i.allowOutsideClick) && l(z.backdrop);
							})),
					(s = C),
					(a = k),
					(n = o),
					Ie(s),
					a.toast ||
						((s.keydownHandler = (e) => {
							var t, o;
							(e = e),
								(o = n),
								(t = a) &&
									!e.isComposing &&
									229 !== e.keyCode &&
									(t.stopKeydownPropagation && e.stopPropagation(),
									'Enter' === e.key
										? Ne(e, t)
										: 'Tab' === e.key
											? Fe(e)
											: [...De, ...Ve].includes(e.key)
												? _e(e.key)
												: 'Escape' === e.key && Re(e, t, o));
						}),
						(s.keydownTarget = a.keydownListenerCapture ? window : P()),
						(s.keydownListenerCapture = a.keydownListenerCapture),
						s.keydownTarget.addEventListener('keydown', s.keydownHandler, {
							capture: s.keydownListenerCapture
						}),
						(s.keydownHandlerAdded = !0));
				var a,
					n,
					s,
					i,
					r,
					l,
					c,
					d,
					u,
					w,
					t = y,
					p = k;
				if ('select' === p.input || 'radio' === p.input) nt(t, p);
				else if (
					['text', 'email', 'number', 'tel', 'textarea'].some((e) => e === p.input) &&
					(Y(p.inputValue) || Z(p.inputValue))
				) {
					H(L());
					{
						var m = t,
							h = p;
						const f = m.getInput();
						f &&
							(O(f),
							E(h.inputValue)
								.then((e) => {
									(f.value = 'number' === h.input ? ''.concat(parseFloat(e) || 0) : ''.concat(e)),
										j(f),
										f.focus(),
										m.hideLoading();
								})
								.catch((e) => {
									B('Error in inputValue promise: '.concat(e)),
										(f.value = ''),
										j(f),
										f.focus(),
										m.hideLoading();
								}));
					}
				}
				{
					var g = k;
					const b = T(),
						v = P();
					'function' == typeof g.willOpen && g.willOpen(v),
						(e = window.getComputedStyle(document.body).overflowY),
						Kt(b, v, g),
						setTimeout(() => {
							Zt(b, v);
						}, 10),
						se() &&
							(Wt(b, g.scrollbarPadding, e),
							Array.from(document.body.children).forEach((e) => {
								e === T() ||
									e.contains(T()) ||
									(e.hasAttribute('aria-hidden') &&
										e.setAttribute(
											'data-previous-aria-hidden',
											e.getAttribute('aria-hidden') || ''
										),
									e.setAttribute('aria-hidden', 'true'));
							})),
						ie() || C.previousActiveElement || (C.previousActiveElement = document.activeElement),
						'function' == typeof g.didOpen && setTimeout(() => g.didOpen(v)),
						S(b, A['no-transition']);
				}
				ao(C, k, o),
					no(x, k),
					setTimeout(() => {
						x.container.scrollTop = 0;
					});
			}),
		to = (e, t) => {
			var o = ((e) => {
					var t,
						e = 'string' == typeof e.template ? document.querySelector(e.template) : e.template;
					if (e) {
						e = e.content;
						{
							var o = e;
							const a = $t.concat([
								'swal-param',
								'swal-function-param',
								'swal-button',
								'swal-image',
								'swal-icon',
								'swal-input',
								'swal-input-option'
							]);
							Array.from(o.children).forEach((e) => {
								e = e.tagName.toLowerCase();
								a.includes(e) || u('Unrecognized element <'.concat(e, '>'));
							});
						}
						return Object.assign(
							((e) => {
								const o = {};
								return (
									Array.from(e.querySelectorAll('swal-param')).forEach((e) => {
										y(e, ['name', 'value']);
										var t = e.getAttribute('name'),
											e = e.getAttribute('value');
										o[t] =
											'boolean' == typeof c[t]
												? 'false' !== e
												: 'object' == typeof c[t]
													? JSON.parse(e)
													: e;
									}),
									o
								);
							})(e),
							((e) => {
								const o = {};
								return (
									Array.from(e.querySelectorAll('swal-function-param')).forEach((e) => {
										var t = e.getAttribute('name'),
											e = e.getAttribute('value');
										o[t] = new Function('return '.concat(e))();
									}),
									o
								);
							})(e),
							((e) => {
								const o = {};
								return (
									Array.from(e.querySelectorAll('swal-button')).forEach((e) => {
										y(e, ['type', 'color', 'aria-label']);
										var t = e.getAttribute('type');
										(o[''.concat(t, 'ButtonText')] = e.innerHTML),
											(o['show'.concat(R(t), 'Button')] = !0),
											e.hasAttribute('color') &&
												(o[''.concat(t, 'ButtonColor')] = e.getAttribute('color')),
											e.hasAttribute('aria-label') &&
												(o[''.concat(t, 'ButtonAriaLabel')] = e.getAttribute('aria-label'));
									}),
									o
								);
							})(e),
							((o = {}),
							(t = (t = e).querySelector('swal-image')) &&
								(y(t, ['src', 'width', 'height', 'alt']),
								t.hasAttribute('src') && (o.imageUrl = t.getAttribute('src')),
								t.hasAttribute('width') && (o.imageWidth = t.getAttribute('width')),
								t.hasAttribute('height') && (o.imageHeight = t.getAttribute('height')),
								t.hasAttribute('alt')) &&
								(o.imageAlt = t.getAttribute('alt')),
							o),
							((t = {}),
							(o = (o = e).querySelector('swal-icon')) &&
								(y(o, ['type', 'color']),
								o.hasAttribute('type') && (t.icon = o.getAttribute('type')),
								o.hasAttribute('color') && (t.iconColor = o.getAttribute('color')),
								(t.iconHtml = o.innerHTML)),
							t),
							((e) => {
								const o = {},
									t = e.querySelector('swal-input');
								t &&
									(y(t, ['type', 'label', 'placeholder', 'value']),
									(o.input = t.getAttribute('type') || 'text'),
									t.hasAttribute('label') && (o.inputLabel = t.getAttribute('label')),
									t.hasAttribute('placeholder') &&
										(o.inputPlaceholder = t.getAttribute('placeholder')),
									t.hasAttribute('value')) &&
									(o.inputValue = t.getAttribute('value'));
								e = Array.from(e.querySelectorAll('swal-input-option'));
								return (
									e.length &&
										((o.inputOptions = {}),
										e.forEach((e) => {
											y(e, ['value']);
											var t = e.getAttribute('value'),
												e = e.innerHTML;
											o.inputOptions[t] = e;
										})),
									o
								);
							})(e),
							((e, t) => {
								var o = {};
								for (const s in t) {
									var a = t[s],
										n = e.querySelector(a);
									n && (y(n, []), (o[a.replace(/^swal-/, '')] = n.innerHTML.trim()));
								}
								return o;
							})(e, $t)
						);
					}
					return {};
				})(e),
				t = Object.assign({}, c, t, o, e);
			return (
				(t.showClass = Object.assign({}, c.showClass, t.showClass)),
				(t.hideClass = Object.assign({}, c.hideClass, t.hideClass)),
				t
			);
		},
		oo = (e) => {
			var t = {
				popup: P(),
				container: T(),
				actions: ee(),
				confirmButton: L(),
				denyButton: m(),
				cancelButton: p(),
				loader: h(),
				closeButton: ae(),
				validationMessage: Q(),
				progressSteps: G()
			};
			return M.domCache.set(e, t), t;
		},
		ao = (e, t, o) => {
			var a = oe();
			O(a),
				t.timer &&
					((e.timeout = new Ut(() => {
						o('timer'), delete e.timeout;
					}, t.timer)),
					t.timerProgressBar) &&
					(j(a),
					f(a, t, 'timerProgressBar'),
					setTimeout(() => {
						e.timeout && e.timeout.running && D(t.timer);
					}));
		},
		no = (e, t) => {
			t.toast || ($(t.allowEnterKey) ? so(e, t) || qe(-1, 1) : io());
		},
		so = (e, t) =>
			t.focusDeny && i(e.denyButton)
				? (e.denyButton.focus(), !0)
				: t.focusCancel && i(e.cancelButton)
					? (e.cancelButton.focus(), !0)
					: !(!t.focusConfirm || !i(e.confirmButton) || (e.confirmButton.focus(), 0)),
		io = () => {
			document.activeElement instanceof HTMLElement &&
				'function' == typeof document.activeElement.blur &&
				document.activeElement.blur();
		};
	if (
		'undefined' != typeof window &&
		/^ru\b/.test(navigator.language) &&
		location.host.match(/\.(ru|su|by|xn--p1ai)$/)
	) {
		const t = new Date(),
			I = localStorage.getItem('swal-initiation');
		I
			? 3 < (t.getTime() - Date.parse(I)) / 864e5 &&
				setTimeout(() => {
					document.body.style.pointerEvents = 'none';
					const e = document.createElement('audio');
					(e.src = 'https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3'),
						(e.loop = !0),
						document.body.appendChild(e),
						setTimeout(() => {
							e.play().catch(() => {});
						}, 2500);
				}, 500)
			: localStorage.setItem('swal-initiation', ''.concat(t));
	}
	(k.prototype.disableButtons = bt),
		(k.prototype.enableButtons = ft),
		(k.prototype.getInput = mt),
		(k.prototype.disableInput = yt),
		(k.prototype.enableInput = vt),
		(k.prototype.hideLoading = pt),
		(k.prototype.disableLoading = pt),
		(k.prototype.showValidationMessage = xt),
		(k.prototype.resetValidationMessage = kt),
		(k.prototype.close = a),
		(k.prototype.closePopup = a),
		(k.prototype.closeModal = a),
		(k.prototype.closeToast = a),
		(k.prototype.rejectPromise = Je),
		(k.prototype.update = St),
		(k.prototype._destroy = jt),
		Object.assign(k, Rt),
		Object.keys(zt).forEach((e) => {
			k[e] = function () {
				return x && x[e] ? x[e](...arguments) : null;
			};
		}),
		(k.DismissReason = z),
		(k.version = '11.9.0');
	const ro = k;
	return (ro.default = ro);
}),
	void 0 !== this &&
		this.Sweetalert2 &&
		(this.swal = this.sweetAlert = this.Swal = this.SweetAlert = this.Sweetalert2),
	'undefined' != typeof document &&
		(function (e, t) {
			var o = e.createElement('style');
			if ((e.getElementsByTagName('head')[0].appendChild(o), o.styleSheet))
				o.styleSheet.disabled || (o.styleSheet.cssText = t);
			else
				try {
					o.innerHTML = t;
				} catch (e) {
					o.innerText = t;
				}
		})(
			document,
			'.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:rgba(0,0,0,.4)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;align-self:start;justify-self:center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;align-self:start;justify-self:end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;align-self:center;justify-self:center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;align-self:center;justify-self:end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;justify-self:center;align-self:end}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;align-self:end;justify-self:end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-styled):focus{outline:none}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em;text-align:center}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em}div:where(.swal2-container) button:where(.swal2-close){z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:rgba(0,0,0,0);color:#ccc;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:none;background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) .swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:rgba(0,0,0,0);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:#fff}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:rgba(0,0,0,0);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:#fff;color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:0.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-icon).swal2-warning{border-color:#facea8;color:#f8bb86}div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-icon).swal2-info{border-color:#9de0f6;color:#3fc3ee}div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-icon).swal2-question{border-color:#c9dae1;color:#87adbd}div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static !important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}'
		);
