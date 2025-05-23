!(function (t, e) {
	'object' == typeof exports && 'undefined' != typeof module
		? (module.exports = e())
		: 'function' == typeof define && define.amd
			? define(e)
			: ((t = 'undefined' != typeof globalThis ? globalThis : t || self).Tagify = e());
})(this, function () {
	'use strict';
	function e(e, t) {
		var i,
			s = Object.keys(e);
		return (
			Object.getOwnPropertySymbols &&
				((i = Object.getOwnPropertySymbols(e)),
				t &&
					(i = i.filter(function (t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable;
					})),
				s.push.apply(s, i)),
			s
		);
	}
	function a(s) {
		for (var t = 1; t < arguments.length; t++) {
			var a = null != arguments[t] ? arguments[t] : {};
			t % 2
				? e(Object(a), !0).forEach(function (t) {
						var e, i;
						(e = s),
							(t = a[(i = t)]),
							(i = (function () {
								var t = (function (t, e) {
									if ('object' != typeof t || null === t) return t;
									var i = t[Symbol.toPrimitive];
									if (void 0 === i) return String(t);
									i = i.call(t, e);
									if ('object' != typeof i) return i;
									throw new TypeError('@@toPrimitive must return a primitive value.');
								})(i, 'string');
								return 'symbol' == typeof t ? t : String(t);
							})()) in e
								? Object.defineProperty(e, i, {
										value: t,
										enumerable: !0,
										configurable: !0,
										writable: !0
									})
								: (e[i] = t);
					})
				: Object.getOwnPropertyDescriptors
					? Object.defineProperties(s, Object.getOwnPropertyDescriptors(a))
					: e(Object(a)).forEach(function (t) {
							Object.defineProperty(s, t, Object.getOwnPropertyDescriptor(a, t));
						});
		}
		return s;
	}
	const o = (t, e, i, s) => (
			(t = '' + t),
			(e = '' + e),
			s && ((t = t.trim()), (e = e.trim())),
			i ? t == e : t.toLowerCase() == e.toLowerCase()
		),
		i = (t, e) => t && Array.isArray(t) && t.map((t) => r(t, e));
	function r(t, e) {
		var i,
			s = {};
		for (i in t) e.indexOf(i) < 0 && (s[i] = t[i]);
		return s;
	}
	function p(t) {
		var e = document.createElement('div');
		t.replace(/\&#?[0-9a-z]+;/gi, function (t) {
			return (e.innerHTML = t), e.innerText;
		});
	}
	function s(t) {
		return new DOMParser().parseFromString(t.trim(), 'text/html').body.firstElementChild;
	}
	function c(t, e) {
		for (e = e || 'previous'; (t = t[e + 'Sibling']); ) if (3 == t.nodeType) return t;
	}
	function n(t) {
		return 'string' == typeof t
			? t
					.replace(/&/g, '&amp;')
					.replace(/</g, '&lt;')
					.replace(/>/g, '&gt;')
					.replace(/"/g, '&quot;')
					.replace(/`|'/g, '&#039;')
			: t;
	}
	function u(t) {
		var e = Object.prototype.toString.call(t).split(' ')[1].slice(0, -1);
		return (
			t === Object(t) &&
			'Array' != e &&
			'Function' != e &&
			'RegExp' != e &&
			'HTMLUnknownElement' != e
		);
	}
	function g(t, e, i) {
		function s(t, e) {
			for (var i in e)
				if (e.hasOwnProperty(i)) {
					if (u(e[i])) {
						u(t[i]) ? s(t[i], e[i]) : (t[i] = Object.assign({}, e[i]));
						continue;
					}
					if (Array.isArray(e[i])) {
						t[i] = Object.assign([], e[i]);
						continue;
					}
					t[i] = e[i];
				}
		}
		return s((t = t instanceof Object ? t : {}), e), i && s(t, i), t;
	}
	function l() {
		var t,
			e = [],
			i = {};
		for (t of arguments)
			for (var s of t)
				u(s) ? i[s.value] || (e.push(s), (i[s.value] = 1)) : e.includes(s) || e.push(s);
		return e;
	}
	function m(t) {
		return String.prototype.normalize
			? 'string' == typeof t
				? t.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
				: void 0
			: t;
	}
	var v = () => /(?=.*chrome)(?=.*android)/i.test(navigator.userAgent);
	function d() {
		return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (t) =>
			(t ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (t / 4)))).toString(16)
		);
	}
	function h(t) {
		return t && t.classList && t.classList.contains(this.settings.classNames.tag);
	}
	function f(t, e) {
		var i = window.getSelection();
		return (
			(e = e || i.getRangeAt(0)),
			'string' == typeof t && (t = document.createTextNode(t)),
			e && (e.deleteContents(), e.insertNode(t)),
			t
		);
	}
	function T(t, e, i) {
		return t
			? (e && (t.__tagifyTagData = i ? e : g({}, t.__tagifyTagData || {}, e)), t.__tagifyTagData)
			: (console.warn("tag element doesn't exist", t, e), e);
	}
	function w(t) {
		var e, i;
		t &&
			t.parentNode &&
			((t = t), (i = (e = window.getSelection()).getRangeAt(0)), e.rangeCount) &&
			(i.setStartAfter(t), i.collapse(!0), e.removeAllRanges(), e.addRange(i));
	}
	function b(t, i) {
		t.forEach((t) => {
			var e;
			(!T(t.previousSibling) && t.previousSibling) ||
				((e = document.createTextNode('​')), t.before(e), i && w(e));
		});
	}
	var y = {
		delimiters: ',',
		pattern: null,
		tagTextProp: 'value',
		maxTags: 1 / 0,
		callbacks: {},
		addTagOnBlur: !0,
		onChangeAfterBlur: !0,
		duplicates: !1,
		whitelist: [],
		blacklist: [],
		enforceWhitelist: !1,
		userInput: !0,
		keepInvalidTags: !1,
		createInvalidTags: !0,
		mixTagsAllowedAfter: /,|\.|\:|\s/,
		mixTagsInterpolator: ['[[', ']]'],
		backspace: !0,
		skipInvalid: !1,
		pasteAsTags: !0,
		editTags: { clicks: 2, keepInvalid: !0 },
		transformTag: () => {},
		trim: !0,
		a11y: { focusableTags: !1 },
		mixMode: { insertAfterTag: ' ' },
		autoComplete: { enabled: !0, rightKey: !1 },
		classNames: {
			namespace: 'tagify',
			mixMode: 'tagify--mix',
			selectMode: 'tagify--select',
			input: 'tagify__input',
			focus: 'tagify--focus',
			tagNoAnimation: 'tagify--noAnim',
			tagInvalid: 'tagify--invalid',
			tagNotAllowed: 'tagify--notAllowed',
			scopeLoading: 'tagify--loading',
			hasMaxTags: 'tagify--hasMaxTags',
			hasNoTags: 'tagify--noTags',
			empty: 'tagify--empty',
			inputInvalid: 'tagify__input--invalid',
			dropdown: 'tagify__dropdown',
			dropdownWrapper: 'tagify__dropdown__wrapper',
			dropdownHeader: 'tagify__dropdown__header',
			dropdownFooter: 'tagify__dropdown__footer',
			dropdownItem: 'tagify__dropdown__item',
			dropdownItemActive: 'tagify__dropdown__item--active',
			dropdownItemHidden: 'tagify__dropdown__item--hidden',
			dropdownInital: 'tagify__dropdown--initial',
			tag: 'tagify__tag',
			tagText: 'tagify__tag-text',
			tagX: 'tagify__tag__removeBtn',
			tagLoading: 'tagify__tag--loading',
			tagEditing: 'tagify__tag--editable',
			tagFlash: 'tagify__tag--flash',
			tagHide: 'tagify__tag--hide'
		},
		dropdown: {
			classname: '',
			enabled: 2,
			maxItems: 10,
			searchKeys: ['value', 'searchBy'],
			fuzzySearch: !0,
			caseSensitive: !1,
			accentedSearch: !0,
			includeSelectedTags: !1,
			highlightFirst: !1,
			closeOnSelect: !0,
			clearOnSelect: !0,
			position: 'all',
			appendTarget: null
		},
		hooks: {
			beforeRemoveTag: () => Promise.resolve(),
			beforePaste: () => Promise.resolve(),
			suggestionClick: () => Promise.resolve()
		}
	};
	const x = '@yaireo/tagify/';
	var O,
		D = {
			empty: 'empty',
			exceed: 'number of tags exceeded',
			pattern: 'pattern mismatch',
			duplicate: 'already exists',
			notAllowed: 'not allowed'
		},
		t = {
			customBinding() {
				this.customEventsList.forEach((t) => {
					this.on(t, this.settings.callbacks[t]);
				});
			},
			binding() {
				var t,
					e = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0],
					i = this.events.callbacks,
					s = e ? 'addEventListener' : 'removeEventListener';
				if (!this.state.mainEvents || !e) {
					for (var a in ((this.state.mainEvents = e) &&
						!this.listeners.main &&
						(this.events.bindGlobal.call(this), this.settings.isJQueryPlugin) &&
						jQuery(this.DOM.originalInput).on(
							'tagify.removeAllTags',
							this.removeAllTags.bind(this)
						),
					(t = this.listeners.main =
						this.listeners.main || {
							focus: ['input', i.onFocusBlur.bind(this)],
							keydown: ['input', i.onKeydown.bind(this)],
							click: ['scope', i.onClickScope.bind(this)],
							dblclick: ['scope', i.onDoubleClickScope.bind(this)],
							paste: ['input', i.onPaste.bind(this)],
							drop: ['input', i.onDrop.bind(this)],
							compositionstart: ['input', i.onCompositionStart.bind(this)],
							compositionend: ['input', i.onCompositionEnd.bind(this)]
						})))
						this.DOM[t[a][0]][s](a, t[a][1]);
					clearInterval(this.listeners.main.originalInputValueObserverInterval),
						(this.listeners.main.originalInputValueObserverInterval = setInterval(
							i.observeOriginalInputValue.bind(this),
							500
						));
					e =
						this.listeners.main.inputMutationObserver ||
						new MutationObserver(i.onInputDOMChange.bind(this));
					e.disconnect(),
						'mix' == this.settings.mode && e.observe(this.DOM.input, { childList: !0 });
				}
			},
			bindGlobal(t) {
				var e,
					i = this.events.callbacks,
					s = t ? 'removeEventListener' : 'addEventListener';
				if (this.listeners && (t || !this.listeners.global))
					for (e of ((this.listeners.global = this.listeners.global || [
						{
							type: this.isIE ? 'keydown' : 'input',
							target: this.DOM.input,
							cb: i[this.isIE ? 'onInputIE' : 'onInput'].bind(this)
						},
						{ type: 'keydown', target: window, cb: i.onWindowKeyDown.bind(this) },
						{ type: 'blur', target: this.DOM.input, cb: i.onFocusBlur.bind(this) },
						{ type: 'click', target: document, cb: i.onClickAnywhere.bind(this) }
					]),
					this.listeners.global))
						e.target[s](e.type, e.cb);
			},
			unbindGlobal() {
				this.events.bindGlobal.call(this, !0);
			},
			callbacks: {
				onFocusBlur(t) {
					var e = this.settings,
						i = t.target ? this.trim(t.target.textContent) : '',
						s = this.value?.[0]?.[e.tagTextProp],
						a = t.type,
						n = 0 <= e.dropdown.enabled,
						o = { relatedTarget: t.relatedTarget },
						r = this.state.actions.selectOption && (n || !e.dropdown.closeOnSelect),
						n = this.state.actions.addNew && n,
						l =
							t.relatedTarget &&
							h.call(this, t.relatedTarget) &&
							this.DOM.scope.contains(t.relatedTarget);
					if ('blur' == a) {
						if (t.relatedTarget === this.DOM.scope)
							return this.dropdown.hide(), void this.DOM.input.focus();
						this.postUpdate(), e.onChangeAfterBlur && this.triggerChangeEvent();
					}
					r ||
						n ||
						((this.state.hasFocus = 'focus' == a && +new Date()),
						this.toggleFocusClass(this.state.hasFocus),
						'mix' != e.mode
							? 'focus' == a
								? (this.trigger('focus', o),
									(0 !== e.dropdown.enabled && e.userInput) ||
										this.dropdown.show(this.value.length ? '' : void 0))
								: ('blur' == a &&
										(this.trigger('blur', o),
										this.loading(!1),
										(i =
											'select' == e.mode && (l && (this.removeTags(), (i = '')), s === i)
												? ''
												: i)) &&
										!this.state.actions.selectOption &&
										e.addTagOnBlur &&
										this.addTags(i, !0),
									this.DOM.input.removeAttribute('style'),
									this.dropdown.hide())
							: 'focus' == a
								? this.trigger('focus', o)
								: 'blur' == t.type &&
									(this.trigger('blur', o),
									this.loading(!1),
									this.dropdown.hide(),
									(this.state.dropdown.visible = void 0),
									this.setStateSelection()));
				},
				onCompositionStart(t) {
					this.state.composing = !0;
				},
				onCompositionEnd(t) {
					this.state.composing = !1;
				},
				onWindowKeyDown(t) {
					var e,
						i = document.activeElement,
						s = h.call(this, i) && this.DOM.scope.contains(document.activeElement),
						a = s && i.hasAttribute('readonly');
					if (s && !a)
						switch (((e = i.nextElementSibling), t.key)) {
							case 'Backspace':
								this.settings.readonly || (this.removeTags(i), (e || this.DOM.input).focus());
								break;
							case 'Enter':
								setTimeout(this.editTag.bind(this), 0, i);
						}
				},
				onKeydown(t) {
					var e = this.settings;
					if (!this.state.composing && e.userInput) {
						'select' == e.mode &&
							e.enforceWhitelist &&
							this.value.length &&
							'Tab' != t.key &&
							t.preventDefault();
						var i = this.trim(t.target.textContent);
						if ((this.trigger('keydown', { event: t }), 'mix' == e.mode)) {
							switch (t.key) {
								case 'Left':
								case 'ArrowLeft':
									this.state.actions.ArrowLeft = !0;
									break;
								case 'Delete':
								case 'Backspace':
									if (this.state.editing) return;
									var s = document.getSelection(),
										a = 'Delete' == t.key && s.anchorOffset == (s.anchorNode.length || 0),
										n = s.anchorNode.previousSibling,
										n =
											1 == s.anchorNode.nodeType ||
											(!s.anchorOffset && n && 1 == n.nodeType && s.anchorNode.previousSibling);
									p(this.DOM.input.innerHTML);
									var o,
										r,
										l,
										d = this.getTagElms(),
										h =
											1 === s.anchorNode.length &&
											s.anchorNode.nodeValue == String.fromCharCode(8203);
									if ('edit' == e.backspace && n)
										return (
											(o = 1 == s.anchorNode.nodeType ? null : s.anchorNode.previousElementSibling),
											setTimeout(this.editTag.bind(this), 0, o),
											void t.preventDefault()
										);
									if (v() && n instanceof Element)
										return (
											(l = c(n)),
											n.hasAttribute('readonly') || n.remove(),
											this.DOM.input.focus(),
											void setTimeout(() => {
												w(l), this.DOM.input.click();
											})
										);
									if ('BR' == s.anchorNode.nodeName) return;
									if (
										((a || n) && 1 == s.anchorNode.nodeType
											? (r =
													0 == s.anchorOffset
														? a
															? d[0]
															: null
														: d[Math.min(d.length, s.anchorOffset) - 1])
											: a
												? (r = s.anchorNode.nextElementSibling)
												: n instanceof Element && (r = n),
										3 == s.anchorNode.nodeType &&
											!s.anchorNode.nodeValue &&
											s.anchorNode.previousElementSibling &&
											t.preventDefault(),
										(n || a) && !e.backspace)
									)
										return void t.preventDefault();
									if (
										'Range' != s.type &&
										!s.anchorOffset &&
										s.anchorNode == this.DOM.input &&
										'Delete' != t.key
									)
										return void t.preventDefault();
									if ('Range' != s.type && r && r.hasAttribute('readonly')) return void w(c(r));
									'Delete' == t.key &&
										h &&
										T(s.anchorNode.nextSibling) &&
										this.removeTags(s.anchorNode.nextSibling),
										clearTimeout(O),
										(O = setTimeout(() => {
											var t = document.getSelection();
											p(this.DOM.input.innerHTML),
												a || t.anchorNode.previousSibling,
												(this.value = [].map
													.call(d, (t, e) => {
														var i = T(t);
														if (t.parentNode || i.readonly) return i;
														this.trigger('remove', { tag: t, index: e, data: i });
													})
													.filter((t) => t));
										}, 20));
							}
							return !0;
						}
						switch (t.key) {
							case 'Backspace':
								'select' == e.mode && e.enforceWhitelist && this.value.length
									? this.removeTags()
									: (this.state.dropdown.visible && 'manual' != e.dropdown.position) ||
										('' != t.target.textContent && 8203 != i.charCodeAt(0)) ||
										(!0 === e.backspace
											? this.removeTags()
											: 'edit' == e.backspace && setTimeout(this.editTag.bind(this), 0));
								break;
							case 'Esc':
							case 'Escape':
								this.state.dropdown.visible || t.target.blur();
								break;
							case 'Down':
							case 'ArrowDown':
								this.state.dropdown.visible || this.dropdown.show();
								break;
							case 'ArrowRight':
								var g = this.state.inputSuggestion || this.state.ddItemData;
								if (g && e.autoComplete.rightKey) return void this.addTags([g], !0);
								break;
							case 'Tab':
								g = 'select' == e.mode;
								if (!i || g) return !0;
								t.preventDefault();
							case 'Enter':
								if (this.state.dropdown.visible && 'manual' != e.dropdown.position) return;
								t.preventDefault(),
									setTimeout(() => {
										this.state.dropdown.visible ||
											this.state.actions.selectOption ||
											this.addTags(i, !0);
									});
						}
					}
				},
				onInput(t) {
					this.postUpdate();
					var e = this.settings;
					if ('mix' == e.mode) return this.events.callbacks.onMixTagsInput.call(this, t);
					var t = this.input.normalize.call(this),
						i = t.length >= e.dropdown.enabled,
						s = { value: t, inputElm: this.DOM.input },
						a = this.validateTag({ value: t });
					'select' == e.mode && this.toggleScopeValidation(a),
						(s.isValid = a),
						this.state.inputText != t &&
							(this.input.set.call(this, t, !1),
							-1 != t.search(e.delimiters)
								? this.addTags(t) && this.input.set.call(this)
								: 0 <= e.dropdown.enabled && this.dropdown[i ? 'show' : 'hide'](t),
							this.trigger('input', s));
				},
				onMixTagsInput(t) {
					var e,
						i,
						s,
						a,
						n = this.settings,
						o = this.value.length,
						r = this.getTagElms(),
						l = document.createDocumentFragment(),
						d = window.getSelection().getRangeAt(0),
						h = [].map.call(r, (t) => T(t).value);
					if (
						('deleteContentBackward' == t.inputType &&
							v() &&
							this.events.callbacks.onKeydown.call(this, { target: t.target, key: 'Backspace' }),
						b(this.getTagElms()),
						this.value.slice().forEach((t) => {
							t.readonly && !h.includes(t.value) && l.appendChild(this.createTagElem(t));
						}),
						l.childNodes.length && (d.insertNode(l), this.setRangeAtStartEnd(!1, l.lastChild)),
						r.length != o)
					)
						(this.value = [].map.call(this.getTagElms(), (t) => T(t))),
							this.update({ withoutChangeEvent: !0 });
					else {
						if (this.hasMaxTags()) return !0;
						if (
							window.getSelection &&
							0 < (r = window.getSelection()).rangeCount &&
							3 == r.anchorNode.nodeType
						) {
							if (
								((d = r.getRangeAt(0).cloneRange()).collapse(!0),
								d.setStart(r.focusNode, 0),
								(d = (o = d.toString().slice(0, d.endOffset)).split(n.pattern).length - 1),
								(i = (e = o.match(n.pattern)) ? o.slice(o.lastIndexOf(e[e.length - 1])) : i))
							) {
								if (
									((this.state.actions.ArrowLeft = !1),
									(this.state.tag = {
										prefix: i.match(n.pattern)[0],
										value: i.replace(n.pattern, '')
									}),
									(this.state.tag.baseOffset = r.baseOffset - this.state.tag.value.length),
									(o = this.state.tag.value.match(n.delimiters)))
								)
									return (
										(this.state.tag.value = this.state.tag.value.replace(n.delimiters, '')),
										(this.state.tag.delimiters = o[0]),
										this.addTags(this.state.tag.value, n.dropdown.clearOnSelect),
										void this.dropdown.hide()
									);
								s = this.state.tag.value.length >= n.dropdown.enabled;
								try {
									(a =
										(a = this.state.flaggedTags[this.state.tag.baseOffset]).prefix ==
											this.state.tag.prefix && a.value[0] == this.state.tag.value[0]),
										this.state.flaggedTags[this.state.tag.baseOffset] &&
											!this.state.tag.value &&
											delete this.state.flaggedTags[this.state.tag.baseOffset];
								} catch (t) {}
								(a || d < this.state.mixMode.matchedPatternCount) && (s = !1);
							} else this.state.flaggedTags = {};
							this.state.mixMode.matchedPatternCount = d;
						}
						setTimeout(() => {
							this.update({ withoutChangeEvent: !0 }),
								this.trigger(
									'input',
									g({}, this.state.tag, { textContent: this.DOM.input.textContent })
								),
								this.state.tag && this.dropdown[s ? 'show' : 'hide'](this.state.tag.value);
						}, 10);
					}
				},
				onInputIE(t) {
					var e = this;
					setTimeout(function () {
						e.events.callbacks.onInput.call(e, t);
					});
				},
				observeOriginalInputValue() {
					this.DOM.originalInput.parentNode || this.destroy(),
						this.DOM.originalInput.value != this.DOM.originalInput.tagifyValue &&
							this.loadOriginalValues();
				},
				onClickAnywhere(t) {
					t.target == this.DOM.scope ||
						this.DOM.scope.contains(t.target) ||
						(this.toggleFocusClass(!1), (this.state.hasFocus = !1));
				},
				onClickScope(t) {
					var e = this.settings,
						i = t.target.closest('.' + e.classNames.tag),
						s = +new Date() - this.state.hasFocus;
					if (t.target != this.DOM.scope) {
						if (!t.target.classList.contains(e.classNames.tagX))
							return i
								? (this.trigger('click', {
										tag: i,
										index: this.getNodeIndex(i),
										data: T(i),
										event: t
									}),
									void (
										(1 !== e.editTags && 1 !== e.editTags.clicks) ||
										this.events.callbacks.onDoubleClickScope.call(this, t)
									))
								: void (t.target == this.DOM.input &&
									('mix' == e.mode && this.fixFirefoxLastTagNoCaret(), 500 < s)
										? this.state.dropdown.visible
											? this.dropdown.hide()
											: 0 === e.dropdown.enabled &&
												'mix' != e.mode &&
												this.dropdown.show(this.value.length ? '' : void 0)
										: 'select' != e.mode ||
											0 !== e.dropdown.enabled ||
											this.state.dropdown.visible ||
											this.dropdown.show());
						this.removeTags(t.target.parentNode);
					} else this.DOM.input.focus();
				},
				onPaste(e) {
					e.preventDefault();
					var t,
						i,
						s = this.settings;
					if (('select' == s.mode && s.enforceWhitelist) || !s.userInput) return !1;
					s.readonly ||
						((t = e.clipboardData || window.clipboardData),
						(i = t.getData('Text')),
						s.hooks
							.beforePaste(e, { tagify: this, pastedText: i, clipboardData: t })
							.then((t) => {
								(t = void 0 === t ? i : t) &&
									(this.injectAtCaret(t, window.getSelection().getRangeAt(0)),
									'mix' == this.settings.mode
										? this.events.callbacks.onMixTagsInput.call(this, e)
										: this.settings.pasteAsTags
											? this.addTags(this.state.inputText + t, !0)
											: (this.state.inputText = t));
							})
							.catch((t) => t));
				},
				onDrop(t) {
					t.preventDefault();
				},
				onEditTagInput(t, e) {
					var i = t.closest('.' + this.settings.classNames.tag),
						s = this.getNodeIndex(i),
						a = T(i),
						n = this.input.normalize.call(this, t),
						o = { [this.settings.tagTextProp]: n, __tagId: a.__tagId },
						r = this.validateTag(o);
					this.editTagChangeDetected(g(a, o)) || !0 !== t.originalIsValid || (r = !0),
						i.classList.toggle(this.settings.classNames.tagInvalid, !0 !== r),
						(a.__isValid = r),
						(i.title = !0 === r ? a.title || a.value : r),
						n.length >= this.settings.dropdown.enabled &&
							(this.state.editing && (this.state.editing.value = n), this.dropdown.show(n)),
						this.trigger('edit:input', {
							tag: i,
							index: s,
							data: g({}, this.value[s], { newValue: n }),
							event: e
						});
				},
				onEditTagPaste(t, e) {
					var i = (e.clipboardData || window.clipboardData).getData('Text'),
						e = (e.preventDefault(), f(i));
					this.setRangeAtStartEnd(!1, e);
				},
				onEditTagFocus(t) {
					this.state.editing = { scope: t, input: t.querySelector('[contenteditable]') };
				},
				onEditTagBlur(t) {
					if ((this.state.hasFocus || this.toggleFocusClass(), this.DOM.scope.contains(t))) {
						var e = this.settings,
							i = t.closest('.' + e.classNames.tag),
							s = T(i),
							t = this.input.normalize.call(this, t),
							a = { [e.tagTextProp]: t, __tagId: s.__tagId },
							n = s.__originalData,
							s = this.editTagChangeDetected(g(s, a)),
							a = this.validateTag(a);
						if (t)
							if (s) {
								if (
									((s = this.hasMaxTags()),
									(t = g({}, n, { [e.tagTextProp]: this.trim(t), __isValid: a })),
									e.transformTag.call(this, t, n),
									!0 !== (a = (!s || !0 === n.__isValid) && this.validateTag(t)))
								) {
									if (
										(this.trigger('invalid', { data: t, tag: i, message: a }),
										e.editTags.keepInvalid)
									)
										return;
									e.keepInvalidTags ? (t.__isValid = a) : (t = n);
								} else
									e.keepInvalidTags && (delete t.title, delete t['aria-invalid'], delete t.class);
								this.onEditTagDone(i, t);
							} else this.onEditTagDone(i, n);
						else this.onEditTagDone(i);
					}
				},
				onEditTagkeydown(t, e) {
					if (!this.state.composing)
						switch ((this.trigger('edit:keydown', { event: t }), t.key)) {
							case 'Esc':
							case 'Escape':
								e.parentNode.replaceChild(e.__tagifyTagData.__originalHTML, e),
									(this.state.editing = !1);
							case 'Enter':
							case 'Tab':
								t.preventDefault(), t.target.blur();
						}
				},
				onDoubleClickScope(t) {
					var e,
						t = t.target.closest('.' + this.settings.classNames.tag),
						i = T(t),
						s = this.settings;
					t &&
						s.userInput &&
						!1 !== i.editable &&
						((i = t.classList.contains(this.settings.classNames.tagEditing)),
						(e = t.hasAttribute('readonly')),
						'select' == s.mode ||
							s.readonly ||
							i ||
							e ||
							!this.settings.editTags ||
							this.editTag(t),
						this.toggleFocusClass(!0),
						this.trigger('dblclick', { tag: t, index: this.getNodeIndex(t), data: T(t) }));
				},
				onInputDOMChange(t) {
					t.forEach((t) => {
						t.addedNodes.forEach((i) => {
							if ('<div><br></div>' == i.outerHTML) i.replaceWith(document.createElement('br'));
							else if (1 == i.nodeType && i.querySelector(this.settings.classNames.tagSelector)) {
								let t = document.createTextNode('');
								3 == i.childNodes[0].nodeType &&
									'BR' != i.previousSibling.nodeName &&
									(t = document.createTextNode('\n')),
									i.replaceWith(t, ...[...i.childNodes].slice(0, -1)),
									w(t);
							} else if (h.call(this, i))
								if (
									(3 != i.previousSibling?.nodeType ||
										i.previousSibling.textContent ||
										i.previousSibling.remove(),
									i.previousSibling && 'BR' == i.previousSibling.nodeName)
								) {
									i.previousSibling.replaceWith('\n​');
									let t = i.nextSibling,
										e = '';
									for (; t; ) (e += t.textContent), (t = t.nextSibling);
									e.trim() && w(i.previousSibling);
								} else (i.previousSibling && !T(i.previousSibling)) || i.before('​');
						}),
							t.removedNodes.forEach((t) => {
								t &&
									'BR' == t.nodeName &&
									h.call(this, e) &&
									(this.removeTags(e), this.fixFirefoxLastTagNoCaret());
							});
					});
					var e = this.DOM.input.lastChild;
					e && '' == e.nodeValue && e.remove(),
						(e && 'BR' == e.nodeName) || this.DOM.input.appendChild(document.createElement('br'));
				}
			}
		};
	function M(t, e) {
		if (!t) {
			console.warn('Tagify:', 'input element not found', t);
			const e = new Proxy(this, { get: () => () => e });
			return e;
		}
		if (t.__tagify)
			return (
				console.warn(
					'Tagify: ',
					'input element is already Tagified - Same instance is returned.',
					t
				),
				t.__tagify
			);
		var s, a, n, o, r;
		function i(e, t, i) {
			i && t.split(/\s+/g).forEach((t) => r[e + 'EventListener'].call(r, t, i));
		}
		g(
			this,
			((o = this),
			(r = document.createTextNode('')),
			{
				off(t, e) {
					return i('remove', t, e), this;
				},
				on(t, e) {
					return e && 'function' == typeof e && i('add', t, e), this;
				},
				trigger(t, e, i) {
					var s;
					if (((i = i || { cloneData: !0 }), t))
						if (o.settings.isJQueryPlugin)
							'remove' == t && (t = 'removeTag'),
								jQuery(o.DOM.originalInput).triggerHandler(t, [e]);
						else {
							try {
								var a = 'object' == typeof e ? e : { value: e };
								if (
									(((a = i.cloneData ? g({}, a) : a).tagify = this),
									e.event && (a.event = this.cloneEvent(e.event)),
									e instanceof Object)
								)
									for (var n in e) e[n] instanceof HTMLElement && (a[n] = e[n]);
								s = new CustomEvent(t, { detail: a });
							} catch (t) {
								console.warn(t);
							}
							r.dispatchEvent(s);
						}
				}
			})
		),
			(this.isFirefox =
				/firefox|fxios/i.test(navigator.userAgent) && !/seamonkey/i.test(navigator.userAgent)),
			(this.isIE = window.document.documentMode),
			(e = e || {}),
			(this.getPersistedData =
				((s = e.id),
				(t) => {
					let e,
						i = '/' + t;
					if (1 == localStorage.getItem(x + s + '/v', 1))
						try {
							e = JSON.parse(localStorage[x + s + i]);
						} catch (t) {}
					return e;
				})),
			(this.setPersistedData = (n = e.id)
				? (localStorage.setItem(x + n + '/v', 1),
					(t, e) => {
						var i = '/' + e,
							s = JSON.stringify(t);
						t && e && (localStorage.setItem(x + n + i, s), dispatchEvent(new Event('storage')));
					})
				: () => {}),
			(this.clearPersistedData =
				((a = e.id),
				(t) => {
					var e = x + '/' + a + '/';
					if (t) localStorage.removeItem(e + t);
					else for (var i in localStorage) i.includes(e) && localStorage.removeItem(i);
				})),
			this.applySettings(t, e),
			(this.state = {
				inputText: '',
				editing: !1,
				composing: !1,
				actions: {},
				mixMode: {},
				dropdown: {},
				flaggedTags: {}
			}),
			(this.value = []),
			(this.listeners = {}),
			(this.DOM = {}),
			this.build(t),
			function () {
				for (var t in ((this.dropdown = {}), this._dropdown))
					this.dropdown[t] =
						'function' == typeof this._dropdown[t]
							? this._dropdown[t].bind(this)
							: this._dropdown[t];
				this.dropdown.refs();
			}.call(this),
			this.getCSSVars(),
			this.loadOriginalValues(),
			this.events.customBinding.call(this),
			this.events.binding.call(this),
			t.autofocus && this.DOM.input.focus(),
			(t.__tagify = this);
	}
	return (
		((M.prototype = {
			_dropdown: {
				refs() {
					(this.DOM.dropdown = this.parseTemplate('dropdown', [this.settings])),
						(this.DOM.dropdown.content = this.DOM.dropdown.querySelector(
							"[data-selector='tagify-suggestions-wrapper']"
						));
				},
				getHeaderRef() {
					return this.DOM.dropdown.querySelector("[data-selector='tagify-suggestions-header']");
				},
				getFooterRef() {
					return this.DOM.dropdown.querySelector("[data-selector='tagify-suggestions-footer']");
				},
				getAllSuggestionsRefs() {
					return [
						...this.DOM.dropdown.content.querySelectorAll(
							this.settings.classNames.dropdownItemSelector
						)
					];
				},
				show(t) {
					var e,
						i = this.settings,
						s = 'mix' == i.mode && !i.enforceWhitelist,
						a = !i.whitelist || !i.whitelist.length,
						n = 'manual' == i.dropdown.position;
					if (
						((t = void 0 === t ? this.state.inputText : t),
						!(
							(a && !s && !i.templates.dropdownItemNoMatch) ||
							!1 === i.dropdown.enable ||
							this.state.isLoading ||
							this.settings.readonly
						))
					) {
						if (
							(clearTimeout(this.dropdownHide__bindEventsTimeout),
							(this.suggestedListItems = this.dropdown.filterListItems(t)),
							!(e =
								t &&
								!this.suggestedListItems.length &&
								(this.trigger('dropdown:noMatch', t), i.templates.dropdownItemNoMatch)
									? i.templates.dropdownItemNoMatch.call(this, { value: t })
									: e))
						) {
							if (this.suggestedListItems.length)
								t &&
									s &&
									!this.state.editing.scope &&
									!o(this.suggestedListItems[0].value, t) &&
									this.suggestedListItems.unshift({ value: t });
							else {
								if (!t || !s || this.state.editing.scope)
									return this.input.autocomplete.suggest.call(this), void this.dropdown.hide();
								this.suggestedListItems = [{ value: t }];
							}
							(s = '' + (u((a = this.suggestedListItems[0])) ? a.value : a)),
								i.autoComplete &&
									s &&
									0 == s.indexOf(t) &&
									this.input.autocomplete.suggest.call(this, a);
						}
						this.dropdown.fill(e),
							i.dropdown.highlightFirst &&
								this.dropdown.highlightOption(
									this.DOM.dropdown.content.querySelector(i.classNames.dropdownItemSelector)
								),
							this.state.dropdown.visible || setTimeout(this.dropdown.events.binding.bind(this)),
							(this.state.dropdown.visible = t || !0),
							(this.state.dropdown.query = t),
							this.setStateSelection(),
							n ||
								setTimeout(() => {
									this.dropdown.position(), this.dropdown.render();
								}),
							setTimeout(() => {
								this.trigger('dropdown:show', this.DOM.dropdown);
							});
					}
				},
				hide(t) {
					var e = this.DOM,
						i = e.scope,
						e = e.dropdown,
						t = 'manual' == this.settings.dropdown.position && !t;
					if (e && document.body.contains(e) && !t)
						return (
							window.removeEventListener('resize', this.dropdown.position),
							this.dropdown.events.binding.call(this, !1),
							i.setAttribute('aria-expanded', !1),
							e.parentNode.removeChild(e),
							setTimeout(() => {
								this.state.dropdown.visible = !1;
							}, 100),
							(this.state.dropdown.query =
								this.state.ddItemData =
								this.state.ddItemElm =
								this.state.selection =
									null),
							this.state.tag &&
								this.state.tag.value.length &&
								(this.state.flaggedTags[this.state.tag.baseOffset] = this.state.tag),
							this.trigger('dropdown:hide', e),
							this
						);
				},
				toggle(t) {
					this.dropdown[this.state.dropdown.visible && !t ? 'hide' : 'show']();
				},
				render() {
					((e = this.DOM.dropdown.cloneNode(!0)).style.cssText =
						'position:fixed; top:-9999px; opacity:0'),
						document.body.appendChild(e),
						(t = e.clientHeight),
						e.parentNode.removeChild(e);
					var t,
						e = t,
						i = this.settings;
					return (
						'number' == typeof i.dropdown.enabled &&
							0 <= i.dropdown.enabled &&
							(this.DOM.scope.setAttribute('aria-expanded', !0),
							document.body.contains(this.DOM.dropdown) ||
								(this.DOM.dropdown.classList.add(i.classNames.dropdownInital),
								this.dropdown.position(e),
								i.dropdown.appendTarget.appendChild(this.DOM.dropdown),
								setTimeout(() => this.DOM.dropdown.classList.remove(i.classNames.dropdownInital)))),
						this
					);
				},
				fill(t) {
					t = 'string' == typeof t ? t : this.dropdown.createListHTML(t || this.suggestedListItems);
					t = this.settings.templates.dropdownContent.call(this, t);
					this.DOM.dropdown.content.innerHTML = t
						? t
								.replace(/\>[\r\n ]+\</g, '><')
								.split(/>\s+</)
								.join('><')
								.trim()
						: '';
				},
				fillHeaderFooter() {
					var t = this.dropdown.filterListItems(this.state.dropdown.query),
						e = this.parseTemplate('dropdownHeader', [t]),
						t = this.parseTemplate('dropdownFooter', [t]),
						i = this.dropdown.getHeaderRef(),
						s = this.dropdown.getFooterRef();
					e && i?.parentNode.replaceChild(e, i), t && s?.parentNode.replaceChild(t, s);
				},
				refilter(t) {
					(t = t || this.state.dropdown.query || ''),
						(this.suggestedListItems = this.dropdown.filterListItems(t)),
						this.dropdown.fill(),
						this.suggestedListItems.length || this.dropdown.hide(),
						this.trigger('dropdown:updated', this.DOM.dropdown);
				},
				position(t) {
					var e,
						i,
						s,
						a,
						n,
						o,
						r,
						l,
						d,
						h,
						g,
						p,
						c,
						u = this.settings.dropdown;
					'manual' != u.position &&
						((n = this.DOM.dropdown),
						(o = u.placeAbove),
						(l = (r = u.appendTarget === document.body)
							? window.pageYOffset
							: u.appendTarget.scrollTop),
						(h = (d =
							document.fullscreenElement ||
							document.webkitFullscreenElement ||
							document.documentElement).clientHeight),
						(g = 480 < Math.max(d.clientWidth || 0, window.innerWidth || 0) ? u.position : 'all'),
						(c = this.DOM['input' == g ? 'input' : 'scope']),
						(t = t || n.clientHeight),
						this.state.dropdown.visible) &&
						((c =
							'text' == g
								? ((s = (e = (function () {
										var t = document.getSelection();
										if (t.rangeCount) {
											var e,
												t = t.getRangeAt(0),
												i = t.startContainer,
												t = t.startOffset;
											if (0 < t)
												return (
													(e = document.createRange()).setStart(i, t - 1),
													e.setEnd(i, t),
													{
														left: (t = e.getBoundingClientRect()).right,
														top: t.top,
														bottom: t.bottom
													}
												);
											if (i.getBoundingClientRect) return i.getBoundingClientRect();
										}
										return { left: -9999, top: -9999 };
									})()).bottom),
									(i = e.top),
									(a = e.left),
									'auto')
								: ((p = (function (t) {
										for (var e = 0, i = 0; t && t != d; )
											(e += t.offsetLeft || 0), (i += t.offsetTop || 0), (t = t.parentNode);
										return { left: e, top: i };
									})(u.appendTarget)),
									(i = (e = c.getBoundingClientRect()).top - p.top),
									(s = e.bottom - 1 - p.top),
									(a = e.left - p.left),
									e.width + 'px')),
						r ||
							((i += p =
								(function () {
									for (var t = 0, e = u.appendTarget.parentNode; e; )
										(t += e.scrollTop || 0), (e = e.parentNode);
									return t;
								})()),
							(s += p)),
						(i = Math.floor(i)),
						(s = Math.ceil(s)),
						(o = void 0 === o ? h - e.bottom < t : o),
						(n.style.cssText =
							'left:' +
							(a + window.pageXOffset) +
							'px; width:' +
							c +
							';' +
							(o ? 'top: ' + (i + l) + 'px' : 'top: ' + (s + l) + 'px')),
						n.setAttribute('placement', o ? 'top' : 'bottom'),
						n.setAttribute('position', g));
				},
				events: {
					binding() {
						var t = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0],
							e = this.dropdown.events.callbacks,
							e = (this.listeners.dropdown = this.listeners.dropdown || {
								position: this.dropdown.position.bind(this, null),
								onKeyDown: e.onKeyDown.bind(this),
								onMouseOver: e.onMouseOver.bind(this),
								onMouseLeave: e.onMouseLeave.bind(this),
								onClick: e.onClick.bind(this),
								onScroll: e.onScroll.bind(this)
							}),
							t = t ? 'addEventListener' : 'removeEventListener';
						'manual' != this.settings.dropdown.position &&
							(document[t]('scroll', e.position, !0),
							window[t]('resize', e.position),
							window[t]('keydown', e.onKeyDown)),
							this.DOM.dropdown[t]('mouseover', e.onMouseOver),
							this.DOM.dropdown[t]('mouseleave', e.onMouseLeave),
							this.DOM.dropdown[t]('mousedown', e.onClick),
							this.DOM.dropdown.content[t]('scroll', e.onScroll);
					},
					callbacks: {
						onKeyDown(t) {
							if (this.state.hasFocus && !this.state.composing) {
								var e = this.DOM.dropdown.querySelector(
										this.settings.classNames.dropdownItemActiveSelector
									),
									i = this.dropdown.getSuggestionDataByNode(e);
								switch (t.key) {
									case 'ArrowDown':
									case 'ArrowUp':
									case 'Down':
									case 'Up':
										t.preventDefault();
										var s = this.dropdown.getAllSuggestionsRefs(),
											a = 'ArrowUp' == t.key || 'Up' == t.key;
										((e = e && this.dropdown.getNextOrPrevOption(e, !a)) &&
											e.matches(this.settings.classNames.dropdownItemSelector)) ||
											(e = s[a ? s.length - 1 : 0]),
											this.dropdown.highlightOption(e, !0);
										break;
									case 'Escape':
									case 'Esc':
										this.dropdown.hide();
										break;
									case 'ArrowRight':
										if (this.state.actions.ArrowLeft) return;
									case 'Tab':
										return 'mix' == this.settings.mode ||
											!e ||
											this.settings.autoComplete.rightKey ||
											this.state.editing
											? !0
											: (t.preventDefault(),
												(s = this.dropdown.getMappedValue(i)),
												this.input.autocomplete.set.call(this, s),
												!1);
									case 'Enter':
										t.preventDefault(),
											this.settings.hooks
												.suggestionClick(t, { tagify: this, tagData: i, suggestionElm: e })
												.then(() => {
													e
														? (this.dropdown.selectOption(e),
															(e = this.dropdown.getNextOrPrevOption(e, !a)),
															this.dropdown.highlightOption(e))
														: (this.dropdown.hide(),
															'mix' != this.settings.mode &&
																this.addTags(this.state.inputText.trim(), !0));
												})
												.catch((t) => t);
										break;
									case 'Backspace':
										if ('mix' != this.settings.mode && !this.state.editing.scope) {
											const t = this.input.raw.call(this);
											('' != t && 8203 != t.charCodeAt(0)) ||
												(!0 === this.settings.backspace
													? this.removeTags()
													: 'edit' == this.settings.backspace &&
														setTimeout(this.editTag.bind(this), 0));
										}
								}
							}
						},
						onMouseOver(t) {
							t = t.target.closest(this.settings.classNames.dropdownItemSelector);
							t && this.dropdown.highlightOption(t);
						},
						onMouseLeave(t) {
							this.dropdown.highlightOption();
						},
						onClick(t) {
							var e, i;
							0 == t.button &&
								t.target != this.DOM.dropdown &&
								t.target != this.DOM.dropdown.content &&
								((e = t.target.closest(this.settings.classNames.dropdownItemSelector)),
								(i = this.dropdown.getSuggestionDataByNode(e)),
								(this.state.actions.selectOption = !0),
								setTimeout(() => (this.state.actions.selectOption = !1), 50),
								this.settings.hooks
									.suggestionClick(t, { tagify: this, tagData: i, suggestionElm: e })
									.then(() => {
										e ? this.dropdown.selectOption(e, t) : this.dropdown.hide();
									})
									.catch((t) => console.warn(t)));
						},
						onScroll(t) {
							(t = t.target),
								(t = (t.scrollTop / (t.scrollHeight - t.parentNode.clientHeight)) * 100);
							this.trigger('dropdown:scroll', { percentage: Math.round(t) });
						}
					}
				},
				getSuggestionDataByNode(t) {
					var e = t && t.getAttribute('value');
					return this.suggestedListItems.find((t) => t.value == e) || null;
				},
				getNextOrPrevOption(e) {
					var t = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1],
						i = this.dropdown.getAllSuggestionsRefs(),
						s = i.findIndex((t) => t === e);
					return t ? i[s + 1] : i[s - 1];
				},
				highlightOption(t, e) {
					var i,
						s = this.settings.classNames.dropdownItemActive;
					this.state.ddItemElm &&
						(this.state.ddItemElm.classList.remove(s),
						this.state.ddItemElm.removeAttribute('aria-selected')),
						t
							? ((i = this.dropdown.getSuggestionDataByNode(t)),
								(this.state.ddItemData = i),
								(this.state.ddItemElm = t).classList.add(s),
								t.setAttribute('aria-selected', !0),
								e &&
									(t.parentNode.scrollTop =
										t.clientHeight + t.offsetTop - t.parentNode.clientHeight),
								this.settings.autoComplete &&
									(this.input.autocomplete.suggest.call(this, i), this.dropdown.position()))
							: ((this.state.ddItemData = null),
								(this.state.ddItemElm = null),
								this.input.autocomplete.suggest.call(this));
				},
				selectOption(t, e) {
					var i,
						s,
						a,
						n = this.settings.dropdown,
						o = n.clearOnSelect,
						n = n.closeOnSelect;
					t
						? ((e = e || {}),
							(s = 'noMatch' == (i = t.getAttribute('value'))),
							(a = this.suggestedListItems.find((t) => (t.value ?? t) == i)),
							this.trigger('dropdown:select', { data: a, elm: t, event: e }),
							i && (a || s)
								? (this.state.editing
										? this.onEditTagDone(null, g({ __isValid: !0 }, this.normalizeTags([a])[0]))
										: this['mix' == this.settings.mode ? 'addMixTags' : 'addTags'](
												[a || this.input.raw.call(this)],
												o
											),
									this.DOM.input.parentNode &&
										(setTimeout(() => {
											this.DOM.input.focus(), this.toggleFocusClass(!0);
										}),
										n && setTimeout(this.dropdown.hide.bind(this)),
										t.addEventListener(
											'transitionend',
											() => {
												this.dropdown.fillHeaderFooter(), setTimeout(() => t.remove(), 100);
											},
											{ once: !0 }
										),
										t.classList.add(this.settings.classNames.dropdownItemHidden)))
								: n && setTimeout(this.dropdown.hide.bind(this)))
						: (this.addTags(this.state.inputText, !0), n && this.dropdown.hide());
				},
				selectAll(t) {
					(this.suggestedListItems.length = 0),
						this.dropdown.hide(),
						this.dropdown.filterListItems('');
					var e = this.dropdown.filterListItems('');
					return t || (e = this.state.dropdown.suggestions), this.addTags(e, !0), this;
				},
				filterListItems(t, i) {
					var s,
						e = this.settings,
						a = e.dropdown,
						n = ((i = i || {}), []),
						o = [],
						r = e.whitelist,
						l = 0 <= a.maxItems ? a.maxItems : 1 / 0,
						d = a.searchKeys,
						h = 0;
					if (
						!(t =
							'select' == e.mode && this.value.length && this.value[0][e.tagTextProp] == t
								? ''
								: t) ||
						!d.length
					)
						return (
							(n = a.includeSelectedTags
								? r
								: r.filter((t) => !this.isTagDuplicate(u(t) ? t.value : t))),
							(this.state.dropdown.suggestions = n).slice(0, l)
						);
					for (s = a.caseSensitive ? '' + t : ('' + t).toLowerCase(); h < r.length; h++) {
						let t, e;
						var g = r[h] instanceof Object ? r[h] : { value: r[h] },
							p = Object.keys(g).some((t) => d.includes(t)) ? d : ['value'],
							c =
								a.fuzzySearch && !i.exact
									? ((c = p
											.reduce((t, e) => t + ' ' + (g[e] || ''), '')
											.toLowerCase()
											.trim()),
										a.accentedSearch && ((c = m(c)), (s = m(s))),
										(t = 0 == c.indexOf(s)),
										(e = c === s),
										(function (e, t) {
											return t
												.toLowerCase()
												.split(' ')
												.every((t) => e.includes(t.toLowerCase()));
										})(c, s))
									: ((t = !0),
										p.some((t) => {
											t = '' + (g[t] || '');
											return (
												a.accentedSearch && ((t = m(t)), (s = m(s))),
												a.caseSensitive || (t = t.toLowerCase()),
												(e = t === s),
												i.exact ? t === s : 0 == t.indexOf(s)
											);
										})),
							p = !a.includeSelectedTags && this.isTagDuplicate(u(g) ? g.value : g);
						c &&
							!p &&
							(e && t ? o.push(g) : 'startsWith' == a.sortby && t ? n.unshift(g) : n.push(g));
					}
					return (
						(this.state.dropdown.suggestions = o.concat(n)),
						'function' == typeof a.sortby ? a.sortby(o.concat(n), s) : o.concat(n).slice(0, l)
					);
				},
				getMappedValue(t) {
					var e = this.settings.dropdown.mapValueTo;
					return e ? ('function' == typeof e ? e(t) : t[e] || t.value) : t.value;
				},
				createListHTML(t) {
					return g([], t)
						.map((t, e) => {
							var i =
								'string' ==
								typeof (i = this.dropdown.getMappedValue(
									(t = 'string' != typeof t && 'number' != typeof t ? t : { value: t })
								))
									? n(i)
									: i;
							return this.settings.templates.dropdownItem.apply(this, [
								a(a({}, t), {}, { mappedValue: i }),
								this
							]);
						})
						.join('');
				}
			},
			getSetTagData: T,
			helpers: {
				sameStr: o,
				removeCollectionProp: i,
				omit: r,
				isObject: u,
				parseHTML: s,
				escapeHTML: n,
				extend: g,
				concatWithoutDups: l,
				getUID: d,
				isNodeTag: h
			},
			customEventsList: [
				'change',
				'add',
				'remove',
				'invalid',
				'input',
				'click',
				'keydown',
				'focus',
				'blur',
				'edit:input',
				'edit:beforeUpdate',
				'edit:updated',
				'edit:start',
				'edit:keydown',
				'dropdown:show',
				'dropdown:hide',
				'dropdown:select',
				'dropdown:updated',
				'dropdown:noMatch',
				'dropdown:scroll'
			],
			dataProps: ['__isValid', '__removed', '__originalData', '__originalHTML', '__tagId'],
			trim(t) {
				return this.settings.trim && t && 'string' == typeof t ? t.trim() : t;
			},
			parseHTML: s,
			templates: {
				wrapper: (
					t,
					e
				) => `<tags class="${e.classNames.namespace} ${e.mode ? '' + e.classNames[e.mode + 'Mode'] : ''} ${t.className}"
                    ${e.readonly ? 'readonly' : ''}
                    ${e.disabled ? 'disabled' : ''}
                    ${e.required ? 'required' : ''}
                    ${'select' === e.mode ? "spellcheck='false'" : ''}
                    tabIndex="-1">
            <span ${!e.readonly && e.userInput ? 'contenteditable' : ''} tabIndex="0" data-placeholder="${e.placeholder || '&#8203;'}" aria-placeholder="${e.placeholder || ''}"
                class="${e.classNames.input}"
                role="textbox"
                aria-autocomplete="both"
                aria-multiline="${'mix' == e.mode}"></span>
                &#8203;
        </tags>`,
				tag(t, e) {
					e = e.settings;
					return `<tag title="${t.title || t.value}"
                    contenteditable='false'
                    spellcheck='false'
                    tabIndex="${e.a11y.focusableTags ? 0 : -1}"
                    class="${e.classNames.tag} ${t.class || ''}"
                    ${this.getAttributes(t)}>
            <x title='' class="${e.classNames.tagX}" role='button' aria-label='remove tag'></x>
            <div>
                <span class="${e.classNames.tagText}">${t[e.tagTextProp] || t.value}</span>
            </div>
        </tag>`;
				},
				dropdown(t) {
					var e = t.dropdown,
						i = 'manual' == e.position,
						s = '' + t.classNames.dropdown;
					return `<div class="${i ? '' : s} ${e.classname}" role="listbox" aria-labelledby="dropdown">
                    <div data-selector='tagify-suggestions-wrapper' class="${t.classNames.dropdownWrapper}"></div>
                </div>`;
				},
				dropdownContent(t) {
					var e = this.settings,
						i = this.state.dropdown.suggestions;
					return `
            ${e.templates.dropdownHeader.call(this, i)}
            ${t}
            ${e.templates.dropdownFooter.call(this, i)}
        `;
				},
				dropdownItem(t) {
					return `<div ${this.getAttributes(t)}
                    class='${this.settings.classNames.dropdownItem} ${t.class || ''}'
                    tabindex="0"
                    role="option">${t.mappedValue || t.value}</div>`;
				},
				dropdownHeader(t) {
					return `<header data-selector='tagify-suggestions-header' class="${this.settings.classNames.dropdownHeader}"></header>`;
				},
				dropdownFooter(t) {
					t = t.length - this.settings.dropdown.maxItems;
					return 0 < t
						? `<footer data-selector='tagify-suggestions-footer' class="${this.settings.classNames.dropdownFooter}">
                ${t} more items. Refine your search.
            </footer>`
						: '';
				},
				dropdownItemNoMatch: null
			},
			parseTemplate(t, e) {
				return s((t = this.settings.templates[t] || t).apply(this, e));
			},
			set whitelist(t) {
				var e = t && Array.isArray(t);
				(this.settings.whitelist = e ? t : []), this.setPersistedData(e ? t : [], 'whitelist');
			},
			get whitelist() {
				return this.settings.whitelist;
			},
			generateClassSelectors(e) {
				for (var i in e) {
					let t = i;
					Object.defineProperty(e, t + 'Selector', {
						get() {
							return '.' + this[t].split(' ')[0];
						}
					});
				}
			},
			applySettings(i, t) {
				y.templates = this.templates;
				var e = g({}, y, 'mix' == t.mode ? { dropdown: { position: 'text' } } : {}),
					s = (this.settings = g({}, e, t));
				if (
					((s.disabled = i.hasAttribute('disabled')),
					(s.readonly = s.readonly || i.hasAttribute('readonly')),
					(s.placeholder = n(i.getAttribute('placeholder') || s.placeholder || '')),
					(s.required = i.hasAttribute('required')),
					this.generateClassSelectors(s.classNames),
					void 0 === s.dropdown.includeSelectedTags &&
						(s.dropdown.includeSelectedTags = s.duplicates),
					this.isIE && (s.autoComplete = !1),
					['whitelist', 'blacklist'].forEach((t) => {
						var e = i.getAttribute('data-' + t);
						e && (e = e.split(s.delimiters)) instanceof Array && (s[t] = e);
					}),
					'autoComplete' in t &&
						!u(t.autoComplete) &&
						((s.autoComplete = y.autoComplete), (s.autoComplete.enabled = t.autoComplete)),
					'mix' == s.mode &&
						((s.pattern = s.pattern || /@/),
						(s.autoComplete.rightKey = !0),
						(s.delimiters = t.delimiters || null),
						s.tagTextProp) &&
						!s.dropdown.searchKeys.includes(s.tagTextProp) &&
						s.dropdown.searchKeys.push(s.tagTextProp),
					i.pattern)
				)
					try {
						s.pattern = new RegExp(i.pattern);
					} catch (i) {}
				if (s.delimiters) {
					s._delimiters = s.delimiters;
					try {
						s.delimiters = new RegExp(this.settings.delimiters, 'g');
					} catch (i) {}
				}
				s.disabled && (s.userInput = !1),
					(this.TEXTS = a(a({}, D), s.texts || {})),
					(('select' != s.mode || t.dropdown?.enabled) && s.userInput) || (s.dropdown.enabled = 0),
					(s.dropdown.appendTarget = t.dropdown?.appendTarget || document.body);
				e = this.getPersistedData('whitelist');
				Array.isArray(e) && (this.whitelist = Array.isArray(s.whitelist) ? l(s.whitelist, e) : e);
			},
			getAttributes(t) {
				var e,
					i = this.getCustomAttributes(t),
					s = '';
				for (e in i) s += ' ' + e + (void 0 !== t[e] ? `="${i[e]}"` : '');
				return s;
			},
			getCustomAttributes(t) {
				if (!u(t)) return '';
				var e,
					i = {};
				for (e in t)
					'__' != e.slice(0, 2) &&
						'class' != e &&
						t.hasOwnProperty(e) &&
						void 0 !== t[e] &&
						(i[e] = n(t[e]));
				return i;
			},
			setStateSelection() {
				var t = window.getSelection(),
					t = {
						anchorOffset: t.anchorOffset,
						anchorNode: t.anchorNode,
						range: t.getRangeAt && t.rangeCount && t.getRangeAt(0)
					};
				return (this.state.selection = t);
			},
			getCSSVars() {
				var t,
					e = getComputedStyle(this.DOM.scope, null);
				this.CSSVars = {
					tagHideTransition:
						((e = e.getPropertyValue('--tag-hide-transition')),
						(e = e
							? ((t = (e = e.trim().split(' ')[0])
									.split(/\d+/g)
									.filter((t) => t)
									.pop()
									.trim()),
								{
									value: +e
										.split(t)
										.filter((t) => t)[0]
										.trim(),
									unit: t
								})
							: {}),
						(t = e.value),
						's' == e.unit ? 1e3 * t : t)
				};
			},
			build(t) {
				var e = this.DOM;
				this.settings.mixMode.integrated
					? ((e.originalInput = null), (e.scope = t), (e.input = t))
					: ((e.originalInput = t),
						(e.originalInput_tabIndex = t.tabIndex),
						(e.scope = this.parseTemplate('wrapper', [t, this.settings])),
						(e.input = e.scope.querySelector(this.settings.classNames.inputSelector)),
						t.parentNode.insertBefore(e.scope, t),
						(t.tabIndex = -1));
			},
			destroy() {
				this.events.unbindGlobal.call(this),
					this.DOM.scope.parentNode.removeChild(this.DOM.scope),
					(this.DOM.originalInput.tabIndex = this.DOM.originalInput_tabIndex),
					delete this.DOM.originalInput.__tagify,
					this.dropdown.hide(!0),
					clearTimeout(this.dropdownHide__bindEventsTimeout),
					clearInterval(this.listeners.main.originalInputValueObserverInterval);
			},
			loadOriginalValues(t) {
				var e,
					i = this.settings;
				if (((this.state.blockChangeEvent = !0), void 0 === t)) {
					const e = this.getPersistedData('value');
					t =
						e && !this.DOM.originalInput.value
							? e
							: i.mixMode.integrated
								? this.DOM.input.textContent
								: this.DOM.originalInput.value;
				}
				if ((this.removeAllTags(), t))
					if ('mix' == i.mode)
						this.parseMixTags(t),
							((e = this.DOM.input.lastChild) && 'BR' == e.tagName) ||
								this.DOM.input.insertAdjacentHTML('beforeend', '<br>');
					else {
						try {
							JSON.parse(t) instanceof Array && (t = JSON.parse(t));
						} catch (t) {}
						this.addTags(t, !0).forEach((t) => t && t.classList.add(i.classNames.tagNoAnimation));
					}
				else this.postUpdate();
				this.state.lastOriginalValueReported = i.mixMode.integrated
					? ''
					: this.DOM.originalInput.value;
			},
			cloneEvent(t) {
				var e,
					i = {};
				for (e in t) 'path' != e && (i[e] = t[e]);
				return i;
			},
			loading(t) {
				return (
					(this.state.isLoading = t),
					this.DOM.scope.classList[t ? 'add' : 'remove'](this.settings.classNames.scopeLoading),
					this
				);
			},
			tagLoading(t, e) {
				return t && t.classList[e ? 'add' : 'remove'](this.settings.classNames.tagLoading), this;
			},
			toggleClass(t, e) {
				'string' == typeof t && this.DOM.scope.classList.toggle(t, e);
			},
			toggleScopeValidation(t) {
				var e = !0 === t || void 0 === t;
				!this.settings.required && t && t === this.TEXTS.empty && (e = !0),
					this.toggleClass(this.settings.classNames.tagInvalid, !e),
					(this.DOM.scope.title = e ? '' : t);
			},
			toggleFocusClass(t) {
				this.toggleClass(this.settings.classNames.focus, !!t);
			},
			triggerChangeEvent: function () {
				var t, e, i;
				this.settings.mixMode.integrated ||
					((t = this.DOM.originalInput),
					(e = this.state.lastOriginalValueReported !== t.value),
					(i = new CustomEvent('change', { bubbles: !0 })),
					e &&
						((this.state.lastOriginalValueReported = t.value),
						(i.simulated = !0),
						t._valueTracker && t._valueTracker.setValue(Math.random()),
						t.dispatchEvent(i),
						this.trigger('change', this.state.lastOriginalValueReported),
						(t.value = this.state.lastOriginalValueReported)));
			},
			events: t,
			fixFirefoxLastTagNoCaret() {},
			setRangeAtStartEnd(e, i) {
				if (i) {
					(e = 'number' == typeof e ? e : !!e), (i = i.lastChild || i);
					var s = document.getSelection();
					if (s.focusNode instanceof Element && !this.DOM.input.contains(s.focusNode)) return !0;
					try {
						1 <= s.rangeCount &&
							['Start', 'End'].forEach((t) => s.getRangeAt(0)['set' + t](i, e || i.length));
					} catch (e) {}
				}
			},
			insertAfterTag(t, e) {
				if (((e = e || this.settings.mixMode.insertAfterTag), t && t.parentNode && e))
					return (
						(e = 'string' == typeof e ? document.createTextNode(e) : e),
						t.parentNode.insertBefore(e, t.nextSibling),
						e
					);
			},
			editTagChangeDetected(t) {
				var e,
					i = t.__originalData;
				for (e in i) if (!this.dataProps.includes(e) && t[e] != i[e]) return !0;
				return !1;
			},
			getTagTextNode(t) {
				return t.querySelector(this.settings.classNames.tagTextSelector);
			},
			setTagTextNode(t, e) {
				this.getTagTextNode(t).innerHTML = n(e);
			},
			editTag(e, t) {
				(e = e || this.getLastTag()), (t = t || {}), this.dropdown.hide();
				var i = this.settings,
					s = this.getTagTextNode(e),
					a = this.getNodeIndex(e),
					n = T(e),
					o = this.events.callbacks,
					r = this,
					l = !0;
				if (s) {
					if (!(n instanceof Object && 'editable' in n) || n.editable)
						return (
							(n = T(e, { __originalData: g({}, n), __originalHTML: e.cloneNode(!0) })),
							T(n.__originalHTML, n.__originalData),
							s.setAttribute('contenteditable', !0),
							e.classList.add(i.classNames.tagEditing),
							s.addEventListener('focus', o.onEditTagFocus.bind(this, e)),
							s.addEventListener('blur', function () {
								setTimeout(() => o.onEditTagBlur.call(r, r.getTagTextNode(e)));
							}),
							s.addEventListener('input', o.onEditTagInput.bind(this, s)),
							s.addEventListener('paste', o.onEditTagPaste.bind(this, s)),
							s.addEventListener('keydown', (t) => o.onEditTagkeydown.call(this, t, e)),
							s.addEventListener('compositionstart', o.onCompositionStart.bind(this)),
							s.addEventListener('compositionend', o.onCompositionEnd.bind(this)),
							t.skipValidation || (l = this.editTagToggleValidity(e)),
							(s.originalIsValid = l),
							this.trigger('edit:start', { tag: e, index: a, data: n, isValid: l }),
							s.focus(),
							this.setRangeAtStartEnd(!1, s),
							this
						);
				} else console.warn('Cannot find element in Tag template: .', i.classNames.tagTextSelector);
			},
			editTagToggleValidity(t, e) {
				var i;
				if ((e = e || T(t)))
					return (
						(i = !('__isValid' in e) || !0 === e.__isValid) || this.removeTagsFromValue(t),
						this.update(),
						t.classList.toggle(this.settings.classNames.tagNotAllowed, !i),
						(e.__isValid = i),
						e.__isValid
					);
				console.warn('tag has no data: ', t, e);
			},
			onEditTagDone(t, e) {
				e = e || {};
				var i = {
					tag: (t = t || this.state.editing.scope),
					index: this.getNodeIndex(t),
					previousData: T(t),
					data: e
				};
				this.trigger('edit:beforeUpdate', i, { cloneData: !1 }),
					(this.state.editing = !1),
					delete e.__originalData,
					delete e.__originalHTML,
					t && e[this.settings.tagTextProp]
						? ((t = this.replaceTag(t, e)),
							this.editTagToggleValidity(t, e),
							this.settings.a11y.focusableTags ? t.focus() : w(t))
						: t && this.removeTags(t),
					this.trigger('edit:updated', i),
					this.dropdown.hide(),
					this.settings.keepInvalidTags && this.reCheckInvalidTags();
			},
			replaceTag(t, e) {
				(e = e && e.value ? e : t.__tagifyTagData).__isValid &&
					1 != e.__isValid &&
					g(e, this.getInvalidTagAttrs(e, e.__isValid));
				e = this.createTagElem(e);
				return t.parentNode.replaceChild(e, t), this.updateValueByDOMTags(), e;
			},
			updateValueByDOMTags() {
				(this.value.length = 0),
					[].forEach.call(this.getTagElms(), (t) => {
						t.classList.contains(this.settings.classNames.tagNotAllowed.split(' ')[0]) ||
							this.value.push(T(t));
					}),
					this.update();
			},
			injectAtCaret(t, e) {
				return (
					!(e = e || this.state.selection?.range) && t
						? this.appendMixTags(t)
						: (f(t, e), this.setRangeAtStartEnd(!1, t), this.updateValueByDOMTags(), this.update()),
					this
				);
			},
			input: {
				set() {
					var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : '',
						e = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1],
						i = this.settings.dropdown.closeOnSelect;
					(this.state.inputText = t),
						e && (this.DOM.input.innerHTML = n('' + t)),
						!t && i && this.dropdown.hide.bind(this),
						this.input.autocomplete.suggest.call(this),
						this.input.validate.call(this);
				},
				raw() {
					return this.DOM.input.textContent;
				},
				validate() {
					var t = !this.state.inputText || !0 === this.validateTag({ value: this.state.inputText });
					return this.DOM.input.classList.toggle(this.settings.classNames.inputInvalid, !t), t;
				},
				normalize(t) {
					var e = t || this.DOM.input,
						i = [];
					e.childNodes.forEach((t) => 3 == t.nodeType && i.push(t.nodeValue)), (i = i.join('\n'));
					try {
						i = i.replace(/(?:\r\n|\r|\n)/g, this.settings.delimiters.source.charAt(0));
					} catch (t) {}
					return (i = i.replace(/\s/g, ' ')), this.trim(i);
				},
				autocomplete: {
					suggest(t) {
						var e, i, s;
						this.settings.autoComplete.enabled &&
							('string' == typeof (t = t || { value: '' }) && (t = { value: t }),
							'number' != typeof (e = this.dropdown.getMappedValue(t))) &&
							((i = e.substr(0, this.state.inputText.length).toLowerCase()),
							(s = e.substring(this.state.inputText.length)),
							e && this.state.inputText && i == this.state.inputText.toLowerCase()
								? (this.DOM.input.setAttribute('data-suggest', s), (this.state.inputSuggestion = t))
								: (this.DOM.input.removeAttribute('data-suggest'),
									delete this.state.inputSuggestion));
					},
					set(t) {
						var e = this.DOM.input.getAttribute('data-suggest'),
							t = t || (e ? this.state.inputText + e : null);
						return (
							!!t &&
							('mix' == this.settings.mode
								? this.replaceTextWithNode(document.createTextNode(this.state.tag.prefix + t))
								: (this.input.set.call(this, t), this.setRangeAtStartEnd(!1, this.DOM.input)),
							this.input.autocomplete.suggest.call(this),
							this.dropdown.hide(),
							!0)
						);
					}
				}
			},
			getTagIdx(e) {
				return this.value.findIndex((t) => t.__tagId == (e || {}).__tagId);
			},
			getNodeIndex(t) {
				var e = 0;
				if (t) for (; (t = t.previousElementSibling); ) e++;
				return e;
			},
			getTagElms() {
				for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
				var s = '.' + [...this.settings.classNames.tag.split(' '), ...e].join('.');
				return [].slice.call(this.DOM.scope.querySelectorAll(s));
			},
			getLastTag() {
				var t = this.DOM.scope.querySelectorAll(
					`${this.settings.classNames.tagSelector}:not(.${this.settings.classNames.tagHide}):not([readonly])`
				);
				return t[t.length - 1];
			},
			isTagDuplicate(t, e, i) {
				var s,
					a = 0;
				if ('select' == this.settings.mode) return !1;
				for (s of this.value) o(this.trim('' + t), s.value, e) && i != s.__tagId && a++;
				return a;
			},
			getTagIndexByValue(i) {
				var s = [],
					a = this.settings.dropdown.caseSensitive;
				return (
					this.getTagElms().forEach((t, e) => {
						t.__tagifyTagData && o(this.trim(t.__tagifyTagData.value), i, a) && s.push(e);
					}),
					s
				);
			},
			getTagElmByValue(t) {
				t = this.getTagIndexByValue(t)[0];
				return this.getTagElms()[t];
			},
			flashTag(t) {
				t &&
					(t.classList.add(this.settings.classNames.tagFlash),
					setTimeout(() => {
						t.classList.remove(this.settings.classNames.tagFlash);
					}, 100));
			},
			isTagBlacklisted(e) {
				return (
					(e = this.trim(e.toLowerCase())),
					this.settings.blacklist.filter((t) => ('' + t).toLowerCase() == e).length
				);
			},
			isTagWhitelisted(t) {
				return !!this.getWhitelistItem(t);
			},
			getWhitelistItem(i, s, t) {
				s = s || 'value';
				var a,
					n = this.settings;
				return (
					(t = t || n.whitelist).some((t) => {
						var e = 'string' == typeof t ? t : t[s] || t.value;
						if (o(e, i, n.dropdown.caseSensitive, n.trim))
							return (a = 'string' == typeof t ? { value: t } : t), !0;
					}),
					(a =
						a || 'value' != s || 'value' == n.tagTextProp
							? a
							: this.getWhitelistItem(i, n.tagTextProp, t))
				);
			},
			validateTag(t) {
				var e = this.settings,
					i = 'value' in t ? 'value' : e.tagTextProp,
					s = this.trim(t[i] + '');
				return (t[i] + '').trim()
					? 'mix' != e.mode && e.pattern && e.pattern instanceof RegExp && !e.pattern.test(s)
						? this.TEXTS.pattern
						: !e.duplicates && this.isTagDuplicate(s, e.dropdown.caseSensitive, t.__tagId)
							? this.TEXTS.duplicate
							: this.isTagBlacklisted(s) || (e.enforceWhitelist && !this.isTagWhitelisted(s))
								? this.TEXTS.notAllowed
								: !e.validate || e.validate(t)
					: this.TEXTS.empty;
			},
			getInvalidTagAttrs(t, e) {
				return {
					'aria-invalid': !0,
					class: (`${t.class || ''} ` + this.settings.classNames.tagNotAllowed).trim(),
					title: e
				};
			},
			hasMaxTags() {
				return this.value.length >= this.settings.maxTags && this.TEXTS.exceed;
			},
			setReadonly(t, e) {
				var i = this.settings;
				document.activeElement.blur(),
					(i[e || 'readonly'] = t),
					this.DOM.scope[(t ? 'set' : 'remove') + 'Attribute'](e || 'readonly', !0),
					(this.settings.userInput = !0),
					this.setContentEditable(!t);
			},
			setContentEditable(t) {
				this.settings.userInput &&
					((this.DOM.input.contentEditable = t), (this.DOM.input.tabIndex = t ? 0 : -1));
			},
			setDisabled(t) {
				this.setReadonly(t, 'disabled');
			},
			normalizeTags(t) {
				var e = this.settings,
					i = e.whitelist,
					s = e.delimiters,
					a = e.mode,
					n = e.tagTextProp,
					o = [],
					e = !!i && i[0] instanceof Object,
					i = Array.isArray(t),
					r = i && t[0].value,
					l = (t) =>
						(t + '')
							.split(s)
							.filter((t) => t)
							.map((t) => ({ [n]: this.trim(t), value: this.trim(t) }));
				if ('string' == typeof (t = 'number' == typeof t ? t.toString() : t)) {
					if (!t.trim()) return [];
					t = l(t);
				} else i && (t = [].concat(...t.map((t) => (null != t.value ? t : l(t)))));
				return (t =
					e &&
					!r &&
					(t.forEach((t) => {
						var e = o.map((t) => t.value),
							i = this.dropdown.filterListItems.call(this, t[n], { exact: !0 }),
							i =
								1 <
								(i = this.settings.duplicates ? i : i.filter((t) => !e.includes(t.value))).length
									? this.getWhitelistItem(t[n], n, i)
									: i[0];
						i && i instanceof Object
							? o.push(i)
							: 'mix' != a && (null == t.value && (t.value = t[n]), o.push(t));
					}),
					o.length)
						? o
						: t);
			},
			parseMixTags(t) {
				var e = this.settings,
					o = e.mixTagsInterpolator,
					r = e.duplicates,
					l = e.transformTag,
					d = e.enforceWhitelist,
					h = e.maxTags,
					g = e.tagTextProp,
					p = [],
					e =
						((t = t
							.split(o[0])
							.map((t, e) => {
								var i,
									s = t.split(o[1]),
									a = s[0],
									n = p.length == h;
								try {
									if (a == +a) throw Error;
									i = JSON.parse(a);
								} catch (t) {
									i = this.normalizeTags(a)[0] || { value: a };
								}
								if (
									(l.call(this, i),
									n ||
										!(1 < s.length) ||
										(d && !this.isTagWhitelisted(i.value)) ||
										(!r && this.isTagDuplicate(i.value)))
								) {
									if (t) return e ? o[0] + t : t;
								} else
									(i[(a = i[g] ? g : 'value')] = this.trim(i[a])),
										(n = this.createTagElem(i)),
										p.push(i),
										n.classList.add(this.settings.classNames.tagNoAnimation),
										(s[0] = n.outerHTML),
										this.value.push(i);
								return s.join('');
							})
							.join('')),
						(this.DOM.input.innerHTML = t),
						this.DOM.input.appendChild(document.createTextNode('')),
						this.DOM.input.normalize(),
						this.getTagElms());
				return (
					e.forEach((t, e) => T(t, p[e])),
					this.update({ withoutChangeEvent: !0 }),
					b(e, this.state.hasFocus),
					t
				);
			},
			replaceTextWithNode(t, e) {
				var i, s, a;
				if (this.state.tag || e)
					return (
						(e = e || this.state.tag.prefix + this.state.tag.value),
						(s = (i = this.state.selection || window.getSelection()).anchorNode),
						(a = this.state.tag.delimiters ? this.state.tag.delimiters.length : 0),
						s.splitText(i.anchorOffset - a),
						-1 != (i = s.nodeValue.lastIndexOf(e)) &&
							((a = s.splitText(i)), t) &&
							s.parentNode.replaceChild(t, a),
						!0
					);
			},
			selectTag(t, e) {
				var i = this.settings;
				if (!i.enforceWhitelist || this.isTagWhitelisted(e.value))
					return (
						this.input.set.call(this, e[i.tagTextProp] || e.value, !0),
						this.state.actions.selectOption &&
							setTimeout(() => this.setRangeAtStartEnd(!1, this.DOM.input)),
						(i = this.getLastTag()) ? this.replaceTag(i, e) : this.appendTag(t),
						(this.value[0] = e),
						this.update(),
						this.trigger('add', { tag: t, data: e }),
						[t]
					);
			},
			addEmptyTag(t) {
				var t = g({ value: '' }, t || {}),
					e = this.createTagElem(t);
				T(e, t), this.appendTag(e), this.editTag(e, { skipValidation: !0 });
			},
			addTags(t, e, a) {
				var n = [],
					o = this.settings,
					r = [],
					l = document.createDocumentFragment();
				if (((a = a || o.skipInvalid), t && 0 != t.length)) {
					switch (((t = this.normalizeTags(t)), o.mode)) {
						case 'mix':
							return this.addMixTags(t);
						case 'select':
							(e = !1), this.removeAllTags();
					}
					this.DOM.input.removeAttribute('style'),
						t.forEach((t) => {
							var e,
								i = {},
								s = Object.assign({}, t, { value: t.value + '' });
							if (
								((t = Object.assign({}, s)),
								o.transformTag.call(this, t),
								(t.__isValid = this.hasMaxTags() || this.validateTag(t)),
								!0 !== t.__isValid)
							) {
								if (a) return;
								if (
									(g(i, this.getInvalidTagAttrs(t, t.__isValid), { __preInvalidData: s }),
									t.__isValid == this.TEXTS.duplicate &&
										this.flashTag(this.getTagElmByValue(t.value)),
									!o.createInvalidTags)
								)
									return void r.push(t.value);
							}
							if (
								('readonly' in t && (t.readonly ? (i['aria-readonly'] = !0) : delete t.readonly),
								(e = this.createTagElem(t, i)),
								n.push(e),
								'select' == o.mode)
							)
								return this.selectTag(e, t);
							l.appendChild(e),
								t.__isValid && !0 === t.__isValid
									? (this.value.push(t),
										this.trigger('add', { tag: e, index: this.value.length - 1, data: t }))
									: (this.trigger('invalid', {
											data: t,
											index: this.value.length,
											tag: e,
											message: t.__isValid
										}),
										o.keepInvalidTags || setTimeout(() => this.removeTags(e, !0), 1e3)),
								this.dropdown.position();
						}),
						this.appendTag(l),
						this.update(),
						t.length &&
							e &&
							(this.input.set.call(this, o.createInvalidTags ? '' : r.join(o._delimiters)),
							this.setRangeAtStartEnd(!1, this.DOM.input)),
						o.dropdown.enabled && this.dropdown.refilter();
				}
				return n;
			},
			addMixTags(t) {
				var e;
				return (t = this.normalizeTags(t))[0].prefix || this.state.tag
					? this.prefixedTextToTag(t[0])
					: ((e = document.createDocumentFragment()),
						t.forEach((t) => {
							t = this.createTagElem(t);
							e.appendChild(t);
						}),
						this.appendMixTags(e),
						e);
			},
			appendMixTags(t) {
				var e = !!this.state.selection;
				e
					? this.injectAtCaret(t)
					: (this.DOM.input.focus(),
						(e = this.setStateSelection()).range.setStart(this.DOM.input, e.range.endOffset),
						e.range.setEnd(this.DOM.input, e.range.endOffset),
						this.DOM.input.appendChild(t),
						this.updateValueByDOMTags(),
						this.update());
			},
			prefixedTextToTag(t) {
				var e,
					i = this.settings,
					s = this.state.tag.delimiters;
				return (
					i.transformTag.call(this, t),
					(t.prefix =
						t.prefix || this.state.tag
							? this.state.tag.prefix
							: (i.pattern.source || i.pattern)[0]),
					(e = this.createTagElem(t)),
					this.replaceTextWithNode(e) || this.DOM.input.appendChild(e),
					setTimeout(() => e.classList.add(this.settings.classNames.tagNoAnimation), 300),
					this.value.push(t),
					this.update(),
					s || ((i = this.insertAfterTag(e) || e), setTimeout(w, 0, i)),
					(this.state.tag = null),
					this.trigger('add', g({}, { tag: e }, { data: t })),
					e
				);
			},
			appendTag(t) {
				var e = this.DOM,
					i = e.input;
				e.scope.insertBefore(t, i);
			},
			createTagElem(t, e) {
				t.__tagId = d();
				for (
					var i,
						e = g({}, t, a({ value: n(t.value + '') }, e)),
						s =
							((e = this.parseTemplate('tag', [e, this])),
							document.createNodeIterator(e, NodeFilter.SHOW_TEXT, null, !1));
					(i = s.nextNode());

				)
					i.textContent.trim() || i.parentNode.removeChild(i);
				return T(e, t), e;
			},
			reCheckInvalidTags() {
				var o = this.settings;
				this.getTagElms(o.classNames.tagNotAllowed).forEach((t, e) => {
					var i = T(t),
						s = this.hasMaxTags(),
						a = this.validateTag(i),
						n = !0 === a && !s;
					if (('select' == o.mode && this.toggleScopeValidation(a), n))
						return (i = i.__preInvalidData || { value: i.value }), this.replaceTag(t, i);
					t.title = s || a;
				});
			},
			removeTags(t, i, s) {
				var a,
					n = this.settings;
				if (
					((t =
						t && t instanceof HTMLElement
							? [t]
							: t instanceof Array
								? t
								: t
									? [t]
									: [this.getLastTag()]),
					(a = t.reduce((t, e) => {
						var i = T((e = e && 'string' == typeof e ? this.getTagElmByValue(e) : e));
						return (
							e &&
								i &&
								!i.readonly &&
								t.push({ node: e, idx: this.getTagIdx(i), data: T(e, { __removed: !0 }) }),
							t
						);
					}, [])),
					(s = 'number' == typeof s ? s : this.CSSVars.tagHideTransition),
					'select' == n.mode && ((s = 0), this.input.set.call(this)),
					1 == a.length &&
						'select' != n.mode &&
						a[0].node.classList.contains(n.classNames.tagNotAllowed) &&
						(i = !0),
					a.length)
				)
					return n.hooks
						.beforeRemoveTag(a, { tagify: this })
						.then(() => {
							function e(t) {
								t.node.parentNode &&
									(t.node.parentNode.removeChild(t.node),
									i
										? n.keepInvalidTags && this.trigger('remove', { tag: t.node, index: t.idx })
										: (this.trigger('remove', { tag: t.node, index: t.idx, data: t.data }),
											this.dropdown.refilter(),
											this.dropdown.position(),
											this.DOM.input.normalize(),
											n.keepInvalidTags && this.reCheckInvalidTags()));
							}
							s && 10 < s && 1 == a.length
								? function (t) {
										(t.node.style.width = parseFloat(window.getComputedStyle(t.node).width) + 'px'),
											document.body.clientTop,
											t.node.classList.add(n.classNames.tagHide),
											setTimeout(e.bind(this), s, t);
									}.call(this, a[0])
								: a.forEach(e.bind(this)),
								i ||
									(this.removeTagsFromValue(a.map((t) => t.node)),
									this.update(),
									'select' == n.mode && this.setContentEditable(!0));
						})
						.catch((t) => {});
			},
			removeTagsFromDOM() {
				[].slice.call(this.getTagElms()).forEach((t) => t.parentNode.removeChild(t));
			},
			removeTagsFromValue(t) {
				(t = Array.isArray(t) ? t : [t]).forEach((t) => {
					(t = T(t)), (t = this.getTagIdx(t));
					-1 < t && this.value.splice(t, 1);
				});
			},
			removeAllTags(t) {
				(t = t || {}),
					(this.value = []),
					'mix' == this.settings.mode ? (this.DOM.input.innerHTML = '') : this.removeTagsFromDOM(),
					this.dropdown.refilter(),
					this.dropdown.position(),
					this.state.dropdown.visible &&
						setTimeout(() => {
							this.DOM.input.focus();
						}),
					'select' == this.settings.mode &&
						(this.input.set.call(this), this.setContentEditable(!0)),
					this.update(t);
			},
			postUpdate() {
				this.state.blockChangeEvent = !1;
				var t = this.settings,
					e = t.classNames,
					i =
						'mix' == t.mode
							? t.mixMode.integrated
								? this.DOM.input.textContent
								: this.DOM.originalInput.value.trim()
							: this.value.length + this.input.raw.call(this).length;
				this.toggleClass(e.hasMaxTags, this.value.length >= t.maxTags),
					this.toggleClass(e.hasNoTags, !this.value.length),
					this.toggleClass(e.empty, !i),
					'select' == t.mode && this.toggleScopeValidation(this.value?.[0]?.__isValid);
			},
			setOriginalInputValue(t) {
				var e = this.DOM.originalInput;
				this.settings.mixMode.integrated ||
					((e.value = t), (e.tagifyValue = e.value), this.setPersistedData(t, 'value'));
			},
			update(e) {
				clearTimeout(this.debouncedUpdateTimeout),
					(this.debouncedUpdateTimeout = setTimeout(
						function () {
							var t = this.getInputValue();
							this.setOriginalInputValue(t),
								(this.settings.onChangeAfterBlur && (e || {}).withoutChangeEvent) ||
									this.state.blockChangeEvent ||
									this.triggerChangeEvent(),
								this.postUpdate();
						}.bind(this),
						100
					));
			},
			getInputValue() {
				var t = this.getCleanValue();
				return 'mix' == this.settings.mode
					? this.getMixedTagsAsString(t)
					: t.length
						? this.settings.originalInputValueFormat
							? this.settings.originalInputValueFormat(t)
							: JSON.stringify(t)
						: '';
			},
			getCleanValue(t) {
				return i(t || this.value, this.dataProps);
			},
			getMixedTagsAsString() {
				var s = '',
					a = this,
					t = this.settings,
					n = t.originalInputValueFormat || JSON.stringify,
					o = t.mixTagsInterpolator;
				return (
					(function i(t) {
						t.childNodes.forEach((t) => {
							var e;
							1 == t.nodeType
								? ((e = T(t)),
									'BR' == t.tagName && (s += '\r\n'),
									e && h.call(a, t)
										? e.__removed || (s += o[0] + n(r(e, a.dataProps)) + o[1])
										: t.getAttribute('style') || ['B', 'I', 'U'].includes(t.tagName)
											? (s += t.textContent)
											: ('DIV' != t.tagName && 'P' != t.tagName) || ((s += '\r\n'), i(t)))
								: (s += t.textContent);
						});
					})(this.DOM.input),
					s
				);
			}
		}).removeTag = M.prototype.removeTags),
		M
	);
});
