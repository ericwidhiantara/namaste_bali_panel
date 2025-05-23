!(function (t, e) {
	if ('object' == typeof exports && 'object' == typeof module)
		module.exports = e(require('jQuery'));
	else if ('function' == typeof define && define.amd) define(['jQuery'], e);
	else {
		var o,
			n = 'object' == typeof exports ? e(require('jQuery')) : e(t.jQuery);
		for (o in n) ('object' == typeof exports ? exports : t)[o] = n[o];
	}
})(self, function (fo) {
	return (() => {
		'use strict';
		var H = {
				9770: (t, e, o) => {
					var n = o(1145),
						o = o.n(n);
					(o().summernote = o().summernote || { lang: {} }),
						o().extend(o().summernote.lang, {
							'en-US': {
								font: {
									bold: 'Bold',
									italic: 'Italic',
									underline: 'Underline',
									clear: 'Remove Font Style',
									height: 'Line Height',
									name: 'Font Family',
									strikethrough: 'Strikethrough',
									subscript: 'Subscript',
									superscript: 'Superscript',
									size: 'Font Size',
									sizeunit: 'Font Size Unit'
								},
								image: {
									image: 'Picture',
									insert: 'Insert Image',
									resizeFull: 'Resize full',
									resizeHalf: 'Resize half',
									resizeQuarter: 'Resize quarter',
									resizeNone: 'Original size',
									floatLeft: 'Float Left',
									floatRight: 'Float Right',
									floatNone: 'Remove float',
									shapeRounded: 'Shape: Rounded',
									shapeCircle: 'Shape: Circle',
									shapeThumbnail: 'Shape: Thumbnail',
									shapeNone: 'Shape: None',
									dragImageHere: 'Drag image or text here',
									dropImage: 'Drop image or Text',
									selectFromFiles: 'Select from files',
									maximumFileSize: 'Maximum file size',
									maximumFileSizeError: 'Maximum file size exceeded.',
									url: 'Image URL',
									remove: 'Remove Image',
									original: 'Original'
								},
								video: {
									video: 'Video',
									videoLink: 'Video Link',
									insert: 'Insert Video',
									url: 'Video URL',
									providers:
										'(YouTube, Google Drive, Vimeo, Vine, Instagram, DailyMotion, Youku, Peertube)'
								},
								link: {
									link: 'Link',
									insert: 'Insert Link',
									unlink: 'Unlink',
									edit: 'Edit',
									textToDisplay: 'Text to display',
									url: 'To what URL should this link go?',
									openInNewWindow: 'Open in new window',
									useProtocol: 'Use default protocol'
								},
								table: {
									table: 'Table',
									addRowAbove: 'Add row above',
									addRowBelow: 'Add row below',
									addColLeft: 'Add column left',
									addColRight: 'Add column right',
									delRow: 'Delete row',
									delCol: 'Delete column',
									delTable: 'Delete table'
								},
								hr: { insert: 'Insert Horizontal Rule' },
								style: {
									style: 'Style',
									p: 'Normal',
									blockquote: 'Quote',
									pre: 'Code',
									h1: 'Header 1',
									h2: 'Header 2',
									h3: 'Header 3',
									h4: 'Header 4',
									h5: 'Header 5',
									h6: 'Header 6'
								},
								lists: { unordered: 'Unordered list', ordered: 'Ordered list' },
								options: { help: 'Help', fullscreen: 'Full Screen', codeview: 'Code View' },
								paragraph: {
									paragraph: 'Paragraph',
									outdent: 'Outdent',
									indent: 'Indent',
									left: 'Align left',
									center: 'Align center',
									right: 'Align right',
									justify: 'Justify full'
								},
								color: {
									recent: 'Recent Color',
									more: 'More Color',
									background: 'Background Color',
									foreground: 'Text Color',
									transparent: 'Transparent',
									setTransparent: 'Set transparent',
									reset: 'Reset',
									resetToDefault: 'Reset to default',
									cpSelect: 'Select'
								},
								shortcut: {
									shortcuts: 'Keyboard shortcuts',
									close: 'Close',
									textFormatting: 'Text formatting',
									action: 'Action',
									paragraphFormatting: 'Paragraph formatting',
									documentStyle: 'Document Style',
									extraKeys: 'Extra keys'
								},
								help: {
									escape: 'Escape',
									insertParagraph: 'Insert Paragraph',
									undo: 'Undo the last command',
									redo: 'Redo the last command',
									tab: 'Tab',
									untab: 'Untab',
									bold: 'Set a bold style',
									italic: 'Set a italic style',
									underline: 'Set a underline style',
									strikethrough: 'Set a strikethrough style',
									removeFormat: 'Clean a style',
									justifyLeft: 'Set left align',
									justifyCenter: 'Set center align',
									justifyRight: 'Set right align',
									justifyFull: 'Set full align',
									insertUnorderedList: 'Toggle unordered list',
									insertOrderedList: 'Toggle ordered list',
									outdent: 'Outdent on current paragraph',
									indent: 'Indent on current paragraph',
									formatPara: "Change current block's format as a paragraph(P tag)",
									formatH1: "Change current block's format as H1",
									formatH2: "Change current block's format as H2",
									formatH3: "Change current block's format as H3",
									formatH4: "Change current block's format as H4",
									formatH5: "Change current block's format as H5",
									formatH6: "Change current block's format as H6",
									insertHorizontalRule: 'Insert horizontal rule',
									'linkDialog.show': 'Show Link Dialog'
								},
								history: { undo: 'Undo', redo: 'Redo' },
								specialChar: {
									specialChar: 'SPECIAL CHARACTERS',
									select: 'Select Special characters'
								},
								output: { noSelection: 'No Selection Made!' }
							}
						});
				},
				1145: (t) => {
					t.exports = fo;
				}
			},
			z = {};
		function n(t) {
			var e = z[t];
			return void 0 !== e || ((e = z[t] = { exports: {} }), H[t](e, e.exports, n)), e.exports;
		}
		(n.n = (t) => {
			var e = t && t.__esModule ? () => t.default : () => t;
			return n.d(e, { a: e }), e;
		}),
			(n.d = (t, e) => {
				for (var o in e)
					n.o(e, o) && !n.o(t, o) && Object.defineProperty(t, o, { enumerable: !0, get: e[o] });
			}),
			(n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
			(n.r = (t) => {
				'undefined' != typeof Symbol &&
					Symbol.toStringTag &&
					Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
					Object.defineProperty(t, '__esModule', { value: !0 });
			});
		var B = {};
		{
			n.r(B);
			var t = n(1145),
				w = n.n(t),
				M = (n(9770), ['sans-serif', 'serif', 'monospace', 'cursive', 'fantasy']);
			function O(t) {
				return -1 === w().inArray(t.toLowerCase(), M) ? "'".concat(t, "'") : t;
			}
			var t = navigator.userAgent,
				e,
				o =
					((e = /MSIE|Trident/i.test(t)) &&
						((o = /MSIE (\d+[.]\d+)/.exec(t)) && (T = parseFloat(o[1])),
						(o = /Trident\/.*rv:([0-9]{1,}[.0-9]{0,})/.exec(t))) &&
						(T = parseFloat(o[1])),
					/Edge\/\d+/.test(t)),
				i =
					'ontouchstart' in window ||
					0 < navigator.MaxTouchPoints ||
					0 < navigator.msMaxTouchPoints,
				U = e ? 'DOMCharacterDataModified DOMSubtreeModified DOMNodeInserted' : 'input';
			const P = {
				isMac: -1 < navigator.appVersion.indexOf('Mac'),
				isMSIE: e,
				isEdge: o,
				isFF: !o && /firefox/i.test(t),
				isPhantom: /PhantomJS/i.test(t),
				isWebkit: !o && /webkit/i.test(t),
				isChrome: !o && /chrome/i.test(t),
				isSafari: !o && /safari/i.test(t) && !/chrome/i.test(t),
				browserVersion: T,
				isSupportTouch: i,
				isFontInstalled: function (t) {
					var e = 'Comic Sans MS' === t ? 'Courier New' : 'Comic Sans MS',
						o = 'mmmmmmmmmmwwwww',
						n = document.createElement('canvas').getContext('2d'),
						i = ((n.font = "200px '" + e + "'"), n.measureText(o).width);
					return (n.font = '200px ' + O(t) + ', "' + e + '"'), i !== n.measureText(o).width;
				},
				isW3CRangeSupport: !!document.createRange,
				inputEventName: U,
				genericFontFamilies: M,
				validFontName: O
			};
			var j = 0;
			const R = {
				eq: function (e) {
					return function (t) {
						return e === t;
					};
				},
				eq2: function (t, e) {
					return t === e;
				},
				peq2: function (o) {
					return function (t, e) {
						return t[o] === e[o];
					};
				},
				ok: function () {
					return !0;
				},
				fail: function () {
					return !1;
				},
				self: function (t) {
					return t;
				},
				not: function (t) {
					return function () {
						return !t.apply(t, arguments);
					};
				},
				and: function (e, o) {
					return function (t) {
						return e(t) && o(t);
					};
				},
				invoke: function (t, e) {
					return function () {
						return t[e].apply(t, arguments);
					};
				},
				resetUniqueId: function () {
					j = 0;
				},
				uniqueId: function (t) {
					var e = ++j + '';
					return t ? t + e : e;
				},
				rect2bnd: function (t) {
					var e = w()(document);
					return {
						top: t.top + e.scrollTop(),
						left: t.left + e.scrollLeft(),
						width: t.right - t.left,
						height: t.bottom - t.top
					};
				},
				invertObject: function (t) {
					var e,
						o = {};
					for (e in t) Object.prototype.hasOwnProperty.call(t, e) && (o[t[e]] = e);
					return o;
				},
				namespaceToCamel: function (t, e) {
					return (
						(e = e || '') +
						t
							.split('.')
							.map(function (t) {
								return t.substring(0, 1).toUpperCase() + t.substring(1);
							})
							.join('')
					);
				},
				debounce: function (n, i, r) {
					var a;
					return function () {
						var t = this,
							e = arguments,
							o = r && !a;
						clearTimeout(a),
							(a = setTimeout(function () {
								(a = null), r || n.apply(t, e);
							}, i)),
							o && n.apply(t, e);
					};
				},
				isValidUrl: function (t) {
					return /[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi.test(
						t
					);
				}
			};
			function W(t) {
				return t[0];
			}
			function K(t) {
				return t[t.length - 1];
			}
			function V(t) {
				return t.slice(1);
			}
			function q(t, e) {
				if (t && t.length && e) {
					if (t.indexOf) return -1 !== t.indexOf(e);
					if (t.contains) return t.contains(e);
				}
				return !1;
			}
			const L = {
				head: W,
				last: K,
				initial: function (t) {
					return t.slice(0, t.length - 1);
				},
				tail: V,
				prev: function (t, e) {
					return !(t && t.length && e) || -1 === (e = t.indexOf(e)) ? null : t[e - 1];
				},
				next: function (t, e) {
					return !(t && t.length && e) || -1 === (e = t.indexOf(e)) ? null : t[e + 1];
				},
				find: function (t, e) {
					for (var o = 0, n = t.length; o < n; o++) {
						var i = t[o];
						if (e(i)) return i;
					}
				},
				contains: q,
				all: function (t, e) {
					for (var o = 0, n = t.length; o < n; o++) if (!e(t[o])) return !1;
					return !0;
				},
				sum: function (t, o) {
					return (
						(o = o || R.self),
						t.reduce(function (t, e) {
							return t + o(e);
						}, 0)
					);
				},
				from: function (t) {
					for (var e = [], o = t.length, n = -1; ++n < o; ) e[n] = t[n];
					return e;
				},
				isEmpty: function (t) {
					return !t || !t.length;
				},
				clusterBy: function (t, n) {
					return t.length
						? V(t).reduce(
								function (t, e) {
									var o = K(t);
									return n(K(o), e) ? (o[o.length] = e) : (t[t.length] = [e]), t;
								},
								[[t[0]]]
							)
						: [];
				},
				compact: function (t) {
					for (var e = [], o = 0, n = t.length; o < n; o++) t[o] && e.push(t[o]);
					return e;
				},
				unique: function (t) {
					for (var e = [], o = 0, n = t.length; o < n; o++) q(e, t[o]) || e.push(t[o]);
					return e;
				}
			};
			var _ = String.fromCharCode(160);
			function r(t) {
				return t && w()(t).hasClass('note-editable');
			}
			function a(e) {
				return (
					(e = e.toUpperCase()),
					function (t) {
						return t && t.nodeName.toUpperCase() === e;
					}
				);
			}
			function s(t) {
				return t && 3 === t.nodeType;
			}
			function l(t) {
				return (
					t &&
					/^BR|^IMG|^HR|^IFRAME|^BUTTON|^INPUT|^AUDIO|^VIDEO|^EMBED/.test(t.nodeName.toUpperCase())
				);
			}
			function c(t) {
				return !r(t) && t && /^DIV|^P|^LI|^H[1-7]/.test(t.nodeName.toUpperCase());
			}
			var e = a('PRE'),
				G = a('LI'),
				Y = a('TABLE'),
				Z = a('DATA');
			function u(t) {
				return !(et(t) || Q(t) || X(t) || c(t) || Y(t) || tt(t) || Z(t));
			}
			function Q(t) {
				return t && /^UL|^OL/.test(t.nodeName.toUpperCase());
			}
			var X = a('HR');
			function J(t) {
				return t && /^TD|^TH/.test(t.nodeName.toUpperCase());
			}
			var tt = a('BLOCKQUOTE');
			function et(t) {
				return J(t) || tt(t) || r(t);
			}
			var o = a('A'),
				t = a('BODY'),
				d = P.isMSIE && P.browserVersion < 11 ? '&nbsp;' : '<br>';
			function h(t) {
				return s(t) ? t.nodeValue.length : t ? t.childNodes.length : 0;
			}
			function f(t) {
				var e = h(t);
				return (
					0 === e ||
					(!s(t) && 1 === e && t.innerHTML === d) ||
					!(!L.all(t.childNodes, s) || '' !== t.innerHTML)
				);
			}
			function ot(t) {
				l(t) || h(t) || (t.innerHTML = d);
			}
			function p(t, e) {
				for (; t; ) {
					if (e(t)) return t;
					if (r(t)) break;
					t = t.parentNode;
				}
				return null;
			}
			function m(t, e) {
				e = e || R.fail;
				var o = [];
				return (
					p(t, function (t) {
						return r(t) || o.push(t), e(t);
					}),
					o
				);
			}
			function nt(t, e) {
				e = e || R.fail;
				for (var o = []; t && !e(t); ) o.push(t), (t = t.nextSibling);
				return o;
			}
			function it(t, e) {
				var o = e.nextSibling,
					e = e.parentNode;
				return o ? e.insertBefore(t, o) : e.appendChild(t), t;
			}
			function rt(o, t) {
				return (
					w().each(t, function (t, e) {
						o.appendChild(e);
					}),
					o
				);
			}
			function v(t) {
				return 0 === t.offset;
			}
			function g(t) {
				return t.offset === h(t.node);
			}
			function at(t) {
				return v(t) || g(t);
			}
			function st(t, e) {
				for (; t && t !== e; ) {
					if (0 !== b(t)) return !1;
					t = t.parentNode;
				}
				return !0;
			}
			function lt(t, e) {
				if (!e) return !1;
				for (; t && t !== e; ) {
					if (b(t) !== h(t.parentNode) - 1) return !1;
					t = t.parentNode;
				}
				return !0;
			}
			function b(t) {
				for (var e = 0; (t = t.previousSibling); ) e += 1;
				return e;
			}
			function y(t) {
				return !!(t && t.childNodes && t.childNodes.length);
			}
			function ct(t, e) {
				var o, n;
				if (0 === t.offset) {
					if (r(t.node)) return null;
					(o = t.node.parentNode), (n = b(t.node));
				} else
					n = y(t.node)
						? h((o = t.node.childNodes[t.offset - 1]))
						: ((o = t.node), e ? 0 : t.offset - 1);
				return { node: o, offset: n };
			}
			function ut(t, e) {
				var o;
				if (h(t.node) === t.offset) {
					if (r(t.node)) return null;
					var n = (function t(e) {
							if (e.nextSibling && e.parent === e.nextSibling.parent)
								return s(e.nextSibling) ? e.nextSibling : t(e.nextSibling);
						})(t.node),
						n = n ? ((o = n), 0) : ((o = t.node.parentNode), b(t.node) + 1);
				} else
					n = y(t.node)
						? ((o = t.node.childNodes[t.offset]), 0)
						: ((o = t.node), e ? h(t.node) : t.offset + 1);
				return { node: o, offset: n };
			}
			function dt(t, e) {
				var o,
					n = 0;
				if (f(t.node))
					return null === t.node ? null : { node: (o = t.node.nextSibling), offset: (n = 0) };
				if (h(t.node) === t.offset) {
					if (r(t.node)) return null;
					(o = t.node.parentNode), (n = b(t.node) + 1), r(o) && ((o = t.node.nextSibling), (n = 0));
				} else if (y(t.node)) {
					if (((n = 0), f((o = t.node.childNodes[t.offset]))))
						return f(t.node.nextSibling) ? null : { node: t.node.nextSibling, offset: n };
				} else if (((o = t.node), (n = e ? h(t.node) : t.offset + 1), f(o))) return null;
				return { node: o, offset: n };
			}
			function ht(t, e) {
				return t.node === e.node && t.offset === e.offset;
			}
			function ft(t, e) {
				var o,
					n = e && e.isSkipPaddingBlankHTML,
					i = e && e.isNotSplitEdgePoint,
					e = e && e.isDiscardEmptySplits;
				if ((e && (n = !0), at(t) && (s(t.node) || i))) {
					if (v(t)) return t.node;
					if (g(t)) return t.node.nextSibling;
				}
				return s(t.node)
					? t.node.splitText(t.offset)
					: ((i = t.node.childNodes[t.offset]),
						rt((o = it(t.node.cloneNode(!1), t.node)), nt(i)),
						n || (ot(t.node), ot(o)),
						e && (f(t.node) && k(t.node), f(o)) ? (k(o), t.node.nextSibling) : o);
			}
			function pt(t, o, n) {
				t = m(o.node, R.eq(t));
				return t.length
					? 1 === t.length
						? ft(o, n)
						: t.reduce(function (t, e) {
								return t === o.node && (t = ft(o, n)), ft({ node: e, offset: t ? b(t) : h(e) }, n);
							})
					: null;
			}
			function mt(t) {
				return document.createElement(t);
			}
			function k(t, e) {
				if (t && t.parentNode) {
					if (t.removeNode) return t.removeNode(e);
					var o = t.parentNode;
					if (!e) {
						for (var n = [], i = 0, r = t.childNodes.length; i < r; i++) n.push(t.childNodes[i]);
						for (var a = 0, s = n.length; a < s; a++) o.insertBefore(n[a], t);
					}
					o.removeChild(t);
				}
			}
			var vt = a('TEXTAREA');
			function gt(t, e) {
				t = vt(t[0]) ? t.val() : t.html();
				return e ? t.replace(/[\n\r]/g, '') : t;
			}
			const A = {
				NBSP_CHAR: _,
				ZERO_WIDTH_NBSP_CHAR: '\ufeff',
				blank: d,
				emptyPara: '<p>'.concat(d, '</p>'),
				makePredByNodeName: a,
				isEditable: r,
				isControlSizing: function (t) {
					return t && w()(t).hasClass('note-control-sizing');
				},
				isText: s,
				isElement: function (t) {
					return t && 1 === t.nodeType;
				},
				isVoid: l,
				isPara: c,
				isPurePara: function (t) {
					return c(t) && !G(t);
				},
				isHeading: function (t) {
					return t && /^H[1-7]/.test(t.nodeName.toUpperCase());
				},
				isInline: u,
				isBlock: R.not(u),
				isBodyInline: function (t) {
					return u(t) && !p(t, c);
				},
				isBody: t,
				isParaInline: function (t) {
					return u(t) && !!p(t, c);
				},
				isPre: e,
				isList: Q,
				isTable: Y,
				isData: Z,
				isCell: J,
				isBlockquote: tt,
				isBodyContainer: et,
				isAnchor: o,
				isDiv: a('DIV'),
				isLi: G,
				isBR: a('BR'),
				isSpan: a('SPAN'),
				isB: a('B'),
				isU: a('U'),
				isS: a('S'),
				isI: a('I'),
				isImg: a('IMG'),
				isTextarea: vt,
				deepestChildIsEmpty: function (t) {
					do {
						if (null === t.firstElementChild || '' === t.firstElementChild.innerHTML) break;
					} while ((t = t.firstElementChild));
					return f(t);
				},
				isEmpty: f,
				isEmptyAnchor: R.and(o, f),
				isClosestSibling: function (t, e) {
					return t.nextSibling === e || t.previousSibling === e;
				},
				withClosestSiblings: function (t, e) {
					e = e || R.ok;
					var o = [];
					return (
						t.previousSibling && e(t.previousSibling) && o.push(t.previousSibling),
						o.push(t),
						t.nextSibling && e(t.nextSibling) && o.push(t.nextSibling),
						o
					);
				},
				nodeLength: h,
				isLeftEdgePoint: v,
				isRightEdgePoint: g,
				isEdgePoint: at,
				isLeftEdgeOf: st,
				isRightEdgeOf: lt,
				isLeftEdgePointOf: function (t, e) {
					return v(t) && st(t.node, e);
				},
				isRightEdgePointOf: function (t, e) {
					return g(t) && lt(t.node, e);
				},
				prevPoint: ct,
				nextPoint: ut,
				nextPointWithEmptyNode: dt,
				isSamePoint: ht,
				isVisiblePoint: function (t) {
					var e;
					return !(
						!s(t.node) &&
						y(t.node) &&
						!f(t.node) &&
						((e = t.node.childNodes[t.offset - 1]),
						(t = t.node.childNodes[t.offset]),
						(e && !l(e)) || (t && !l(t))) &&
						!Y(t)
					);
				},
				prevPointUntil: function (t, e) {
					for (; t; ) {
						if (e(t)) return t;
						t = ct(t);
					}
					return null;
				},
				nextPointUntil: function (t, e) {
					for (; t; ) {
						if (e(t)) return t;
						t = ut(t);
					}
					return null;
				},
				isCharPoint: function (t) {
					return !!s(t.node) && (t = t.node.nodeValue.charAt(t.offset - 1)) && ' ' !== t && t !== _;
				},
				isSpacePoint: function (t) {
					return !!s(t.node) && (' ' === (t = t.node.nodeValue.charAt(t.offset - 1)) || t === _);
				},
				walkPoint: function (t, e, o, n) {
					for (var i = t; i && (o(i), !ht(i, e)); )
						i = dt(i, n && t.node !== i.node && e.node !== i.node);
				},
				ancestor: p,
				singleChildAncestor: function (t, e) {
					for (t = t.parentNode; t && 1 === h(t); ) {
						if (e(t)) return t;
						if (r(t)) break;
						t = t.parentNode;
					}
					return null;
				},
				listAncestor: m,
				lastAncestor: function (t, e) {
					t = m(t);
					return L.last(t.filter(e));
				},
				listNext: nt,
				listPrev: function (t, e) {
					e = e || R.fail;
					for (var o = []; t && !e(t); ) o.push(t), (t = t.previousSibling);
					return o;
				},
				listDescendant: function (i, r) {
					var a = [];
					return (
						(r = r || R.ok),
						(function t(e) {
							i !== e && r(e) && a.push(e);
							for (var o = 0, n = e.childNodes.length; o < n; o++) t(e.childNodes[o]);
						})(i),
						a
					);
				},
				commonAncestor: function (t, e) {
					for (var o = m(t), n = e; n; n = n.parentNode) if (-1 < o.indexOf(n)) return n;
					return null;
				},
				wrap: function (t, e) {
					var o = t.parentNode,
						e = w()('<' + e + '>')[0];
					return o.insertBefore(e, t), e.appendChild(t), e;
				},
				insertAfter: it,
				appendChildNodes: rt,
				position: b,
				hasChildren: y,
				makeOffsetPath: function (t, e) {
					return m(e, R.eq(t)).map(b).reverse();
				},
				fromOffsetPath: function (t, e) {
					for (var o = t, n = 0, i = e.length; n < i; n++)
						o =
							o.childNodes.length <= e[n]
								? o.childNodes[o.childNodes.length - 1]
								: o.childNodes[e[n]];
					return o;
				},
				splitTree: pt,
				splitPoint: function (t, e) {
					var o,
						n = e ? c : et,
						i = m(t.node, n),
						r = L.last(i) || t.node,
						n = n(r) ? ((o = i[i.length - 2]), r) : (o = r).parentNode,
						i = o && pt(o, t, { isSkipPaddingBlankHTML: e, isNotSplitEdgePoint: e });
					return {
						rightNode: (i = i || n !== t.node ? i : t.node.childNodes[t.offset]),
						container: n
					};
				},
				create: mt,
				createText: function (t) {
					return document.createTextNode(t);
				},
				remove: k,
				removeWhile: function (t, e) {
					for (; t && !r(t) && e(t); ) {
						var o = t.parentNode;
						k(t), (t = o);
					}
				},
				replace: function (t, e) {
					return t.nodeName.toUpperCase() === e.toUpperCase()
						? t
						: ((e = mt(e)),
							t.style.cssText && (e.style.cssText = t.style.cssText),
							rt(e, L.from(t.childNodes)),
							it(e, t),
							k(t),
							e);
				},
				html: function (t, e) {
					t = gt(t);
					return (t = e
						? (t = t.replace(/<(\/?)(\b(?!!)[^>\s]*)(.*?)(\s*\/?>)/g, function (t, e, o) {
								o = o.toUpperCase();
								(e = /^DIV|^TD|^TH|^P|^LI|^H[1-7]/.test(o) && !!e),
									(o = /^BLOCKQUOTE|^TABLE|^TBODY|^TR|^HR|^UL|^OL/.test(o));
								return t + (e || o ? '\n' : '');
							})).trim()
						: t);
				},
				value: gt,
				posFromPlaceholder: function (t) {
					var t = w()(t),
						e = t.offset(),
						t = t.outerHeight(!0);
					return { left: e.left, top: e.top + t };
				},
				attachEvents: function (e, o) {
					Object.keys(o).forEach(function (t) {
						e.on(t, o[t]);
					});
				},
				detachEvents: function (e, o) {
					Object.keys(o).forEach(function (t) {
						e.off(t, o[t]);
					});
				},
				isCustomStyleTag: function (t) {
					return t && !s(t) && L.contains(t.classList, 'note-styletag');
				}
			};
			function bt(t, e) {
				for (var o = 0; o < e.length; o++) {
					var n = e[o];
					(n.enumerable = n.enumerable || !1),
						(n.configurable = !0),
						'value' in n && (n.writable = !0),
						Object.defineProperty(t, n.key, n);
				}
			}
			bt(kt.prototype, [
				{
					key: 'initialize',
					value: function () {
						return (
							(this.layoutInfo = this.ui.createLayout(this.$note)),
							this._initialize(),
							this.$note.hide(),
							this
						);
					}
				},
				{
					key: 'destroy',
					value: function () {
						this._destroy(),
							this.$note.removeData('summernote'),
							this.ui.removeLayout(this.$note, this.layoutInfo);
					}
				},
				{
					key: 'reset',
					value: function () {
						var t = this.isDisabled();
						this.code(A.emptyPara), this._destroy(), this._initialize(), t && this.disable();
					}
				},
				{
					key: '_initialize',
					value: function () {
						var e = this,
							o =
								((this.options.id = R.uniqueId(w().now())),
								(this.options.container = this.options.container || this.layoutInfo.editor),
								w().extend({}, this.options.buttons)),
							n =
								(Object.keys(o).forEach(function (t) {
									e.memo('button.' + t, o[t]);
								}),
								w().extend({}, this.options.modules, w().summernote.plugins || {}));
						Object.keys(n).forEach(function (t) {
							e.module(t, n[t], !0);
						}),
							Object.keys(this.modules).forEach(function (t) {
								e.initializeModule(t);
							});
					}
				},
				{
					key: '_destroy',
					value: function () {
						var e = this;
						Object.keys(this.modules)
							.reverse()
							.forEach(function (t) {
								e.removeModule(t);
							}),
							Object.keys(this.memos).forEach(function (t) {
								e.removeMemo(t);
							}),
							this.triggerEvent('destroy', this);
					}
				},
				{
					key: 'code',
					value: function (t) {
						var e = this.invoke('codeview.isActivated');
						if (void 0 === t)
							return (
								this.invoke('codeview.sync'),
								e ? this.layoutInfo.codable.val() : this.layoutInfo.editable.html()
							);
						e ? this.invoke('codeview.sync', t) : this.layoutInfo.editable.html(t),
							this.$note.val(t),
							this.triggerEvent('change', t, this.layoutInfo.editable);
					}
				},
				{
					key: 'isDisabled',
					value: function () {
						return 'false' === this.layoutInfo.editable.attr('contenteditable');
					}
				},
				{
					key: 'enable',
					value: function () {
						this.layoutInfo.editable.attr('contenteditable', !0),
							this.invoke('toolbar.activate', !0),
							this.triggerEvent('disable', !1),
							(this.options.editing = !0);
					}
				},
				{
					key: 'disable',
					value: function () {
						this.invoke('codeview.isActivated') && this.invoke('codeview.deactivate'),
							this.layoutInfo.editable.attr('contenteditable', !1),
							(this.options.editing = !1),
							this.invoke('toolbar.deactivate', !0),
							this.triggerEvent('disable', !0);
					}
				},
				{
					key: 'triggerEvent',
					value: function () {
						var t = L.head(arguments),
							e = L.tail(L.from(arguments)),
							o = this.options.callbacks[R.namespaceToCamel(t, 'on')];
						o && o.apply(this.$note[0], e), this.$note.trigger('summernote.' + t, e);
					}
				},
				{
					key: 'initializeModule',
					value: function (t) {
						t = this.modules[t];
						(t.shouldInitialize = t.shouldInitialize || R.ok),
							t.shouldInitialize() &&
								(t.initialize && t.initialize(), t.events) &&
								A.attachEvents(this.$note, t.events);
					}
				},
				{
					key: 'module',
					value: function (t, e, o) {
						if (1 === arguments.length) return this.modules[t];
						(this.modules[t] = new e(this)), o || this.initializeModule(t);
					}
				},
				{
					key: 'removeModule',
					value: function (t) {
						var e = this.modules[t];
						e.shouldInitialize() &&
							(e.events && A.detachEvents(this.$note, e.events), e.destroy) &&
							e.destroy(),
							delete this.modules[t];
					}
				},
				{
					key: 'memo',
					value: function (t, e) {
						if (1 === arguments.length) return this.memos[t];
						this.memos[t] = e;
					}
				},
				{
					key: 'removeMemo',
					value: function (t) {
						this.memos[t] && this.memos[t].destroy && this.memos[t].destroy(), delete this.memos[t];
					}
				},
				{
					key: 'createInvokeHandlerAndUpdateState',
					value: function (e, o) {
						var n = this;
						return function (t) {
							n.createInvokeHandler(e, o)(t), n.invoke('buttons.updateCurrentStyle');
						};
					}
				},
				{
					key: 'createInvokeHandler',
					value: function (e, o) {
						var n = this;
						return function (t) {
							t.preventDefault();
							t = w()(t.target);
							n.invoke(e, o || t.closest('[data-value]').data('value'), t);
						};
					}
				},
				{
					key: 'invoke',
					value: function () {
						var t = L.head(arguments),
							e = L.tail(L.from(arguments)),
							t = t.split('.'),
							o = 1 < t.length,
							n = o && L.head(t),
							o = o ? L.last(t) : L.head(t),
							t = this.modules[n || 'editor'];
						return !n && this[o]
							? this[o].apply(this, e)
							: t && t[o] && t.shouldInitialize()
								? t[o].apply(t, e)
								: void 0;
					}
				}
			]);
			var yt = kt;
			function kt(t, e) {
				if (!(this instanceof kt)) throw new TypeError('Cannot call a class as a function');
				(this.$note = t),
					(this.memos = {}),
					(this.modules = {}),
					(this.layoutInfo = {}),
					(this.options = w().extend(!0, {}, e)),
					(w().summernote.ui = w().summernote.ui_template(this.options)),
					(this.ui = w().summernote.ui),
					this.initialize();
			}
			function wt(t, e) {
				for (var o = 0; o < e.length; o++) {
					var n = e[o];
					(n.enumerable = n.enumerable || !1),
						(n.configurable = !0),
						'value' in n && (n.writable = !0),
						Object.defineProperty(t, n.key, n);
				}
			}
			function Ct(t, e) {
				for (
					var o,
						n = t.parentElement(),
						i = document.body.createTextRange(),
						r = L.from(n.childNodes),
						a = 0;
					a < r.length;
					a++
				)
					if (!A.isText(r[a])) {
						if ((i.moveToElementText(r[a]), 0 <= i.compareEndPoints('StartToStart', t))) break;
						o = r[a];
					}
				if (0 !== a && A.isText(r[a - 1])) {
					var s = document.body.createTextRange(),
						l = null,
						c =
							(s.moveToElementText(o || n),
							s.collapse(!o),
							(l = o ? o.nextSibling : n.firstChild),
							t.duplicate());
					c.setEndPoint('StartToStart', s);
					for (
						var u = c.text.replace(/[\r\n]/g, '').length;
						u > l.nodeValue.length && l.nextSibling;

					)
						(u -= l.nodeValue.length), (l = l.nextSibling);
					l.nodeValue,
						e &&
							l.nextSibling &&
							A.isText(l.nextSibling) &&
							u === l.nodeValue.length &&
							((u -= l.nodeValue.length), (l = l.nextSibling)),
						(n = l),
						(a = u);
				}
				return { cont: n, offset: a };
			}
			function xt(t) {
				var e = document.body.createTextRange(),
					t = (function t(e, o) {
						if (A.isText(e)) {
							var n = A.listPrev(e, R.not(A.isText)),
								i = L.last(n).previousSibling,
								r = i || e.parentNode;
							(o += L.sum(L.tail(n), A.nodeLength)), (n = !i);
						} else {
							if (((r = e.childNodes[o] || e), A.isText(r))) return t(r, 0);
							(o = 0), (n = !1);
						}
						return { node: r, collapseToStart: n, offset: o };
					})(t.node, t.offset);
				return (
					e.moveToElementText(t.node),
					e.collapse(t.collapseToStart),
					e.moveStart('character', t.offset),
					e
				);
			}
			w().fn.extend({
				summernote: function () {
					var t = w().type(L.head(arguments)),
						e = 'string' === t,
						t = 'object' === t,
						n = w().extend({}, w().summernote.options, t ? L.head(arguments) : {}),
						t =
							((n.langInfo = w().extend(
								!0,
								{},
								w().summernote.lang['en-US'],
								w().summernote.lang[n.lang]
							)),
							(n.icons = w().extend(!0, {}, w().summernote.options.icons, n.icons)),
							(n.tooltip = 'auto' === n.tooltip ? !P.isSupportTouch : n.tooltip),
							this.each(function (t, e) {
								var o,
									e = w()(e);
								e.data('summernote') ||
									((o = new yt(e, n)),
									e.data('summernote', o),
									e.data('summernote').triggerEvent('init', o.layoutInfo));
							}),
							this.first());
					if (t.length) {
						t = t.data('summernote');
						if (e) return t.invoke.apply(t, L.from(arguments));
						n.focus && t.invoke('editor.focus');
					}
					return this;
				}
			}),
				wt(x.prototype, [
					{
						key: 'nativeRange',
						value: function () {
							var t;
							return (
								P.isW3CRangeSupport
									? ((t = document.createRange()).setStart(this.sc, this.so),
										t.setEnd(this.ec, this.eo))
									: (t = xt({ node: this.sc, offset: this.so })).setEndPoint(
											'EndToEnd',
											xt({ node: this.ec, offset: this.eo })
										),
								t
							);
						}
					},
					{
						key: 'getPoints',
						value: function () {
							return { sc: this.sc, so: this.so, ec: this.ec, eo: this.eo };
						}
					},
					{
						key: 'getStartPoint',
						value: function () {
							return { node: this.sc, offset: this.so };
						}
					},
					{
						key: 'getEndPoint',
						value: function () {
							return { node: this.ec, offset: this.eo };
						}
					},
					{
						key: 'select',
						value: function () {
							var t,
								e = this.nativeRange();
							return (
								P.isW3CRangeSupport
									? (0 < (t = document.getSelection()).rangeCount && t.removeAllRanges(),
										t.addRange(e))
									: e.select(),
								this
							);
						}
					},
					{
						key: 'scrollIntoView',
						value: function (t) {
							var e = w()(t).height();
							return (
								t.scrollTop + e < this.sc.offsetTop &&
									(t.scrollTop += Math.abs(t.scrollTop + e - this.sc.offsetTop)),
								this
							);
						}
					},
					{
						key: 'normalize',
						value: function () {
							function t(t, e) {
								if (!t) return t;
								if (
									A.isVisiblePoint(t) &&
									(!A.isEdgePoint(t) ||
										(A.isRightEdgePoint(t) && !e) ||
										(A.isLeftEdgePoint(t) && e) ||
										(A.isRightEdgePoint(t) && e && A.isVoid(t.node.nextSibling)) ||
										(A.isLeftEdgePoint(t) && !e && A.isVoid(t.node.previousSibling)) ||
										(A.isBlock(t.node) && A.isEmpty(t.node)))
								)
									return t;
								var o,
									n = A.ancestor(t.node, A.isBlock),
									i = !1,
									r =
										(i ||
											((r = A.prevPoint(t) || { node: null }),
											(i = (A.isLeftEdgePointOf(t, n) || A.isVoid(r.node)) && !e)),
										!1);
								if (
									(r ||
										((o = A.nextPoint(t) || { node: null }),
										(r = (A.isRightEdgePointOf(t, n) || A.isVoid(o.node)) && e)),
									i || r)
								) {
									if (A.isVisiblePoint(t)) return t;
									e = !e;
								}
								return (
									(e
										? A.nextPointUntil(A.nextPoint(t), A.isVisiblePoint)
										: A.prevPointUntil(A.prevPoint(t), A.isVisiblePoint)) || t
								);
							}
							var e = t(this.getEndPoint(), !1),
								o = this.isCollapsed() ? e : t(this.getStartPoint(), !0);
							return new x(o.node, o.offset, e.node, e.offset);
						}
					},
					{
						key: 'nodes',
						value: function (o, t) {
							o = o || R.ok;
							var n = t && t.includeAncestor,
								i = t && t.fullyContains,
								t = this.getStartPoint(),
								e = this.getEndPoint(),
								r = [],
								a = [];
							return (
								A.walkPoint(
									t,
									e,
									function (t) {
										var e;
										A.isEditable(t.node) ||
											(i
												? (A.isLeftEdgePoint(t) && a.push(t.node),
													A.isRightEdgePoint(t) && L.contains(a, t.node) && (e = t.node))
												: (e = n ? A.ancestor(t.node, o) : t.node),
											e && o(e) && r.push(e));
									},
									!0
								),
								L.unique(r)
							);
						}
					},
					{
						key: 'commonAncestor',
						value: function () {
							return A.commonAncestor(this.sc, this.ec);
						}
					},
					{
						key: 'expand',
						value: function (t) {
							var e,
								o = A.ancestor(this.sc, t),
								t = A.ancestor(this.ec, t);
							return o || t
								? ((e = this.getPoints()),
									o && ((e.sc = o), (e.so = 0)),
									t && ((e.ec = t), (e.eo = A.nodeLength(t))),
									new x(e.sc, e.so, e.ec, e.eo))
								: new x(this.sc, this.so, this.ec, this.eo);
						}
					},
					{
						key: 'collapse',
						value: function (t) {
							return t
								? new x(this.sc, this.so, this.sc, this.so)
								: new x(this.ec, this.eo, this.ec, this.eo);
						}
					},
					{
						key: 'splitText',
						value: function () {
							var t = this.sc === this.ec,
								e = this.getPoints();
							return (
								A.isText(this.ec) &&
									!A.isEdgePoint(this.getEndPoint()) &&
									this.ec.splitText(this.eo),
								A.isText(this.sc) &&
									!A.isEdgePoint(this.getStartPoint()) &&
									((e.sc = this.sc.splitText(this.so)), (e.so = 0), t) &&
									((e.ec = e.sc), (e.eo = this.eo - this.so)),
								new x(e.sc, e.so, e.ec, e.eo)
							);
						}
					},
					{
						key: 'deleteContents',
						value: function () {
							var t, e, n, i;
							return this.isCollapsed()
								? this
								: ((t = this.splitText()),
									(e = t.nodes(null, { fullyContains: !0 })),
									(n = A.prevPointUntil(t.getStartPoint(), function (t) {
										return !L.contains(e, t.node);
									})),
									(i = []),
									w().each(e, function (t, e) {
										var o = e.parentNode;
										n.node !== o && 1 === A.nodeLength(o) && i.push(o), A.remove(e, !1);
									}),
									w().each(i, function (t, e) {
										A.remove(e, !1);
									}),
									new x(n.node, n.offset, n.node, n.offset).normalize());
						}
					},
					{
						key: 'makeIsOn',
						value: function (e) {
							return function () {
								var t = A.ancestor(this.sc, e);
								return !!t && t === A.ancestor(this.ec, e);
							};
						}
					},
					{
						key: 'isLeftEdgeOf',
						value: function (t) {
							return (
								!!A.isLeftEdgePoint(this.getStartPoint()) &&
								(t = A.ancestor(this.sc, t)) &&
								A.isLeftEdgeOf(this.sc, t)
							);
						}
					},
					{
						key: 'isCollapsed',
						value: function () {
							return this.sc === this.ec && this.so === this.eo;
						}
					},
					{
						key: 'wrapBodyInlineWithPara',
						value: function () {
							var t, e, o;
							return A.isBodyContainer(this.sc) && A.isEmpty(this.sc)
								? ((this.sc.innerHTML = A.emptyPara),
									new x(this.sc.firstChild, 0, this.sc.firstChild, 0))
								: ((o = this.normalize()),
									A.isParaInline(this.sc) || A.isPara(this.sc)
										? o
										: (A.isInline(o.sc)
												? ((e = A.listAncestor(o.sc, R.not(A.isInline))),
													(t = L.last(e)),
													A.isInline(t) || (t = e[e.length - 2] || o.sc.childNodes[o.so]))
												: (t = o.sc.childNodes[0 < o.so ? o.so - 1 : 0]),
											t &&
												(e = (e = A.listPrev(t, A.isParaInline).reverse()).concat(
													A.listNext(t.nextSibling, A.isParaInline)
												)).length &&
												((o = A.wrap(L.head(e), 'p')), A.appendChildNodes(o, L.tail(e))),
											this.normalize()));
						}
					},
					{
						key: 'insertNode',
						value: function (t) {
							var e = this,
								e =
									((A.isText(t) || A.isInline(t)) &&
										(e = this.wrapBodyInlineWithPara().deleteContents()),
									A.splitPoint(e.getStartPoint(), A.isInline(t)));
							return (
								e.rightNode
									? (e.rightNode.parentNode.insertBefore(t, e.rightNode),
										A.isEmpty(e.rightNode) &&
											A.isPara(t) &&
											e.rightNode.parentNode.removeChild(e.rightNode))
									: e.container.appendChild(t),
								t
							);
						}
					},
					{
						key: 'pasteHTML',
						value: function (t) {
							t = w().trim(t);
							var t = w()('<div></div>').html(t)[0],
								t = L.from(t.childNodes),
								e = this,
								o = !1;
							return (
								0 <= e.so && ((t = t.reverse()), (o = !0)),
								(t = t.map(function (t) {
									return e.insertNode(t);
								})),
								(t = o ? t.reverse() : t)
							);
						}
					},
					{
						key: 'toString',
						value: function () {
							var t = this.nativeRange();
							return P.isW3CRangeSupport ? t.toString() : t.text;
						}
					},
					{
						key: 'getWordRange',
						value: function (t) {
							var e,
								o = this.getEndPoint();
							return A.isCharPoint(o)
								? ((e = A.prevPointUntil(o, function (t) {
										return !A.isCharPoint(t);
									})),
									t &&
										(o = A.nextPointUntil(o, function (t) {
											return !A.isCharPoint(t);
										})),
									new x(e.node, e.offset, o.node, o.offset))
								: this;
						}
					},
					{
						key: 'getWordsRange',
						value: function (t) {
							function e(t) {
								return !A.isCharPoint(t) && !A.isSpacePoint(t);
							}
							var o,
								n = this.getEndPoint();
							return e(n)
								? this
								: ((o = A.prevPointUntil(n, e)),
									t && (n = A.nextPointUntil(n, e)),
									new x(o.node, o.offset, n.node, n.offset));
						}
					},
					{
						key: 'getWordsMatchRange',
						value: function (e) {
							var o = this.getEndPoint(),
								t = A.prevPointUntil(o, function (t) {
									return (
										(!A.isCharPoint(t) && !A.isSpacePoint(t)) ||
										((t = new x(t.node, t.offset, o.node, o.offset)),
										(t = e.exec(t.toString())) && 0 === t.index)
									);
								}),
								t = new x(t.node, t.offset, o.node, o.offset),
								n = t.toString(),
								i = e.exec(n);
							return i && i[0].length === n.length ? t : null;
						}
					},
					{
						key: 'bookmark',
						value: function (t) {
							return {
								s: { path: A.makeOffsetPath(t, this.sc), offset: this.so },
								e: { path: A.makeOffsetPath(t, this.ec), offset: this.eo }
							};
						}
					},
					{
						key: 'paraBookmark',
						value: function (t) {
							return {
								s: { path: L.tail(A.makeOffsetPath(L.head(t), this.sc)), offset: this.so },
								e: { path: L.tail(A.makeOffsetPath(L.last(t), this.ec)), offset: this.eo }
							};
						}
					},
					{
						key: 'getClientRects',
						value: function () {
							return this.nativeRange().getClientRects();
						}
					}
				]);
			var C = x;
			function x(t, e, o, n) {
				if (!(this instanceof x)) throw new TypeError('Cannot call a class as a function');
				(this.sc = t),
					(this.so = e),
					(this.ec = o),
					(this.eo = n),
					(this.isOnEditable = this.makeIsOn(A.isEditable)),
					(this.isOnList = this.makeIsOn(A.isList)),
					(this.isOnAnchor = this.makeIsOn(A.isAnchor)),
					(this.isOnCell = this.makeIsOn(A.isCell)),
					(this.isOnData = this.makeIsOn(A.isData));
			}
			const F = {
				create: function (t, e, o, n) {
					return 4 === arguments.length
						? new C(t, e, o, n)
						: 2 === arguments.length
							? new C(t, e, (o = t), (n = e))
							: (o = this.createFromSelection()) || 1 !== arguments.length
								? o
								: ((e = t),
									A.isEditable(e) && (e = e.lastChild),
									this.createFromBodyElement(e, A.emptyPara === t.innerHTML));
				},
				createFromBodyElement: function (t) {
					var e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
					return this.createFromNode(t).collapse(e);
				},
				createFromSelection: function () {
					if (P.isW3CRangeSupport) {
						var t = document.getSelection();
						if (!t || 0 === t.rangeCount) return null;
						if (A.isBody(t.anchorNode)) return null;
						var t = t.getRangeAt(0),
							e = t.startContainer,
							o = t.startOffset,
							n = t.endContainer,
							t = t.endOffset;
					} else {
						var i = document.selection.createRange(),
							r = i.duplicate(),
							i = (r.collapse(!1), i.collapse(!0), Ct(i, !0)),
							r = Ct(r, !1);
						(e = (i =
							A.isText(i.node) &&
							A.isLeftEdgePoint(i) &&
							A.isTextNode(r.node) &&
							A.isRightEdgePoint(r) &&
							r.node.nextSibling === i.node
								? r
								: i).cont),
							(o = i.offset),
							(n = r.cont),
							(t = r.offset);
					}
					return new C(e, o, n, t);
				},
				createFromNode: function (t) {
					var e = t,
						o = 0,
						n = A.nodeLength(t);
					return (
						A.isVoid(e) && ((o = A.listPrev(e).length - 1), (e = e.parentNode)),
						A.isBR(t)
							? ((n = A.listPrev(t).length - 1), (t = t.parentNode))
							: A.isVoid(t) && ((n = A.listPrev(t).length), (t = t.parentNode)),
						this.create(e, o, t, n)
					);
				},
				createFromNodeBefore: function (t) {
					return this.createFromNode(t).collapse(!0);
				},
				createFromNodeAfter: function (t) {
					return this.createFromNode(t).collapse();
				},
				createFromBookmark: function (t, e) {
					var o = A.fromOffsetPath(t, e.s.path),
						n = e.s.offset,
						t = A.fromOffsetPath(t, e.e.path),
						e = e.e.offset;
					return new C(o, n, t, e);
				},
				createFromParaBookmark: function (t, e) {
					var o = t.s.offset,
						n = t.e.offset,
						i = A.fromOffsetPath(L.head(e), t.s.path),
						e = A.fromOffsetPath(L.last(e), t.e.path);
					return new C(i, o, e, n);
				}
			};
			var S = {
				BACKSPACE: 8,
				TAB: 9,
				ENTER: 13,
				ESCAPE: 27,
				SPACE: 32,
				DELETE: 46,
				LEFT: 37,
				UP: 38,
				RIGHT: 39,
				DOWN: 40,
				NUM0: 48,
				NUM1: 49,
				NUM2: 50,
				NUM3: 51,
				NUM4: 52,
				NUM5: 53,
				NUM6: 54,
				NUM7: 55,
				NUM8: 56,
				B: 66,
				E: 69,
				I: 73,
				J: 74,
				K: 75,
				L: 76,
				R: 82,
				S: 83,
				U: 85,
				V: 86,
				Y: 89,
				Z: 90,
				SLASH: 191,
				LEFTBRACKET: 219,
				BACKSLASH: 220,
				RIGHTBRACKET: 221,
				HOME: 36,
				END: 35,
				PAGEUP: 33,
				PAGEDOWN: 34
			};
			const D = {
				isEdit: function (t) {
					return L.contains([S.BACKSPACE, S.TAB, S.ENTER, S.SPACE, S.DELETE], t);
				},
				isMove: function (t) {
					return L.contains([S.LEFT, S.UP, S.RIGHT, S.DOWN], t);
				},
				isNavigation: function (t) {
					return L.contains([S.HOME, S.END, S.PAGEUP, S.PAGEDOWN], t);
				},
				nameFromCode: R.invertObject(S),
				code: S
			};
			function St(t, e) {
				for (var o = 0; o < e.length; o++) {
					var n = e[o];
					(n.enumerable = n.enumerable || !1),
						(n.configurable = !0),
						'value' in n && (n.writable = !0),
						Object.defineProperty(t, n.key, n);
				}
			}
			St(Et.prototype, [
				{
					key: 'makeSnapshot',
					value: function () {
						var t = F.create(this.editable);
						return {
							contents: this.$editable.html(),
							bookmark:
								t && t.isOnEditable()
									? t.bookmark(this.editable)
									: { s: { path: [], offset: 0 }, e: { path: [], offset: 0 } }
						};
					}
				},
				{
					key: 'applySnapshot',
					value: function (t) {
						null !== t.contents && this.$editable.html(t.contents),
							null !== t.bookmark && F.createFromBookmark(this.editable, t.bookmark).select();
					}
				},
				{
					key: 'rewind',
					value: function () {
						this.$editable.html() !== this.stack[this.stackOffset].contents && this.recordUndo(),
							(this.stackOffset = 0),
							this.applySnapshot(this.stack[this.stackOffset]);
					}
				},
				{
					key: 'commit',
					value: function () {
						(this.stack = []), (this.stackOffset = -1), this.recordUndo();
					}
				},
				{
					key: 'reset',
					value: function () {
						(this.stack = []), (this.stackOffset = -1), this.$editable.html(''), this.recordUndo();
					}
				},
				{
					key: 'undo',
					value: function () {
						this.$editable.html() !== this.stack[this.stackOffset].contents && this.recordUndo(),
							0 < this.stackOffset &&
								(this.stackOffset--, this.applySnapshot(this.stack[this.stackOffset]));
					}
				},
				{
					key: 'redo',
					value: function () {
						this.stack.length - 1 > this.stackOffset &&
							(this.stackOffset++, this.applySnapshot(this.stack[this.stackOffset]));
					}
				},
				{
					key: 'recordUndo',
					value: function () {
						this.stackOffset++,
							this.stack.length > this.stackOffset &&
								(this.stack = this.stack.slice(0, this.stackOffset)),
							this.stack.push(this.makeSnapshot()),
							this.stack.length > this.context.options.historyLimit &&
								(this.stack.shift(), --this.stackOffset);
					}
				}
			]);
			var Tt = Et;
			function Et(t) {
				if (!(this instanceof Et)) throw new TypeError('Cannot call a class as a function');
				(this.stack = []),
					(this.stackOffset = -1),
					(this.context = t),
					(this.$editable = t.layoutInfo.editable),
					(this.editable = this.$editable[0]);
			}
			function It(t, e) {
				for (var o = 0; o < e.length; o++) {
					var n = e[o];
					(n.enumerable = n.enumerable || !1),
						(n.configurable = !0),
						'value' in n && (n.writable = !0),
						Object.defineProperty(t, n.key, n);
				}
			}
			It(Nt.prototype, [
				{
					key: 'jQueryCSS',
					value: function (o, t) {
						var n = {};
						return (
							w().each(t, function (t, e) {
								n[e] = o.css(e);
							}),
							n
						);
					}
				},
				{
					key: 'fromNode',
					value: function (t) {
						var e =
								this.jQueryCSS(t, [
									'font-family',
									'font-size',
									'text-align',
									'list-style-type',
									'line-height'
								]) || {},
							t = t[0].style.fontSize || e['font-size'];
						return (
							(e['font-size'] = parseInt(t, 10)), (e['font-size-unit'] = t.match(/[a-z%]+$/)), e
						);
					}
				},
				{
					key: 'stylePara',
					value: function (t, o) {
						w().each(t.nodes(A.isPara, { includeAncestor: !0 }), function (t, e) {
							w()(e).css(o);
						});
					}
				},
				{
					key: 'styleNodes',
					value: function (t, e) {
						t = t.splitText();
						var o,
							n,
							i,
							r = (e && e.nodeName) || 'SPAN',
							a = !(!e || !e.expandClosestSibling),
							e = !(!e || !e.onlyPartialContains);
						return t.isCollapsed()
							? [t.insertNode(A.create(r))]
							: ((i = A.makePredByNodeName(r)),
								(o = t.nodes(A.isText, { fullyContains: !0 }).map(function (t) {
									return A.singleChildAncestor(t, i) || A.wrap(t, r);
								})),
								a
									? (e &&
											((n = t.nodes()),
											(i = R.and(i, function (t) {
												return L.contains(n, t);
											}))),
										o.map(function (t) {
											var t = A.withClosestSiblings(t, i),
												o = L.head(t),
												e = L.tail(t);
											return (
												w().each(e, function (t, e) {
													A.appendChildNodes(o, e.childNodes), A.remove(e);
												}),
												L.head(t)
											);
										}))
									: o);
					}
				},
				{
					key: 'current',
					value: function (t) {
						var e = w()(A.isElement(t.sc) ? t.sc : t.sc.parentNode),
							e = this.fromNode(e);
						try {
							e = w().extend(e, {
								'font-bold': document.queryCommandState('bold') ? 'bold' : 'normal',
								'font-italic': document.queryCommandState('italic') ? 'italic' : 'normal',
								'font-underline': document.queryCommandState('underline') ? 'underline' : 'normal',
								'font-subscript': document.queryCommandState('subscript') ? 'subscript' : 'normal',
								'font-superscript': document.queryCommandState('superscript')
									? 'superscript'
									: 'normal',
								'font-strikethrough': document.queryCommandState('strikethrough')
									? 'strikethrough'
									: 'normal',
								'font-family': document.queryCommandValue('fontname') || e['font-family']
							});
						} catch (t) {}
						t.isOnList()
							? ((o =
									-1 <
									['circle', 'disc', 'disc-leading-zero', 'square'].indexOf(e['list-style-type'])),
								(e['list-style'] = o ? 'unordered' : 'ordered'))
							: (e['list-style'] = 'none');
						var o = A.ancestor(t.sc, A.isPara);
						return (
							o && o.style['line-height']
								? (e['line-height'] = o.style.lineHeight)
								: ((o = parseInt(e['line-height'], 10) / parseInt(e['font-size'], 10)),
									(e['line-height'] = o.toFixed(1))),
							(e.anchor = t.isOnAnchor() && A.ancestor(t.sc, A.isAnchor)),
							(e.ancestors = A.listAncestor(t.sc, A.isEditable)),
							(e.range = t),
							e
						);
					}
				}
			]);
			var $t = Nt;
			function Nt() {
				if (!(this instanceof Nt)) throw new TypeError('Cannot call a class as a function');
			}
			function Pt(t, e) {
				for (var o = 0; o < e.length; o++) {
					var n = e[o];
					(n.enumerable = n.enumerable || !1),
						(n.configurable = !0),
						'value' in n && (n.writable = !0),
						Object.defineProperty(t, n.key, n);
				}
			}
			Pt(Lt.prototype, [
				{
					key: 'insertOrderedList',
					value: function (t) {
						this.toggleList('OL', t);
					}
				},
				{
					key: 'insertUnorderedList',
					value: function (t) {
						this.toggleList('UL', t);
					}
				},
				{
					key: 'indent',
					value: function (t) {
						var i = this,
							t = F.create(t).wrapBodyInlineWithPara(),
							e = t.nodes(A.isPara, { includeAncestor: !0 }),
							e = L.clusterBy(e, R.peq2('parentNode'));
						w().each(e, function (t, e) {
							var o,
								n = L.head(e);
							A.isLi(n)
								? (o = i.findList(n.previousSibling))
									? e.map(function (t) {
											return o.appendChild(t);
										})
									: (i.wrapList(e, n.parentNode.nodeName),
										e
											.map(function (t) {
												return t.parentNode;
											})
											.map(function (t) {
												return i.appendToPrevious(t);
											}))
								: w().each(e, function (t, e) {
										w()(e).css('marginLeft', function (t, e) {
											return (parseInt(e, 10) || 0) + 25;
										});
									});
						}),
							t.select();
					}
				},
				{
					key: 'outdent',
					value: function (t) {
						var n = this,
							t = F.create(t).wrapBodyInlineWithPara(),
							e = t.nodes(A.isPara, { includeAncestor: !0 }),
							e = L.clusterBy(e, R.peq2('parentNode'));
						w().each(e, function (t, e) {
							var o = L.head(e);
							A.isLi(o)
								? n.releaseList([e])
								: w().each(e, function (t, e) {
										w()(e).css('marginLeft', function (t, e) {
											return 25 < (e = parseInt(e, 10) || 0) ? e - 25 : '';
										});
									});
						}),
							t.select();
					}
				},
				{
					key: 'toggleList',
					value: function (o, t) {
						var n,
							i = this,
							t = F.create(t).wrapBodyInlineWithPara(),
							e = t.nodes(A.isPara, { includeAncestor: !0 }),
							r = t.paraBookmark(e),
							a = L.clusterBy(e, R.peq2('parentNode'));
						L.find(e, A.isPurePara)
							? ((n = []),
								w().each(a, function (t, e) {
									n = n.concat(i.wrapList(e, o));
								}),
								(e = n))
							: (t = t.nodes(A.isList, { includeAncestor: !0 }).filter(function (t) {
										return !w().nodeName(t, o);
								  })).length
								? w().each(t, function (t, e) {
										A.replace(e, o);
									})
								: (e = this.releaseList(a, !0)),
							F.createFromParaBookmark(r, e).select();
					}
				},
				{
					key: 'wrapList',
					value: function (t, e) {
						var o = L.head(t),
							n = L.last(t),
							o = A.isList(o.previousSibling) && o.previousSibling,
							i = A.isList(n.nextSibling) && n.nextSibling,
							o = o || A.insertAfter(A.create(e || 'UL'), n);
						return (
							(t = t.map(function (t) {
								return A.isPurePara(t) ? A.replace(t, 'LI') : t;
							})),
							A.appendChildNodes(o, t),
							i && (A.appendChildNodes(o, L.from(i.childNodes)), A.remove(i)),
							t
						);
					}
				},
				{
					key: 'releaseList',
					value: function (t, a) {
						var s = this,
							l = [];
						return (
							w().each(t, function (t, e) {
								var o = L.head(e),
									n = L.last(e),
									i = a ? A.lastAncestor(o, A.isList) : o.parentNode,
									r = i.parentNode;
								'LI' === i.parentNode.nodeName
									? (e.map(function (t) {
											var e = s.findNextSiblings(t);
											r.nextSibling
												? r.parentNode.insertBefore(t, r.nextSibling)
												: r.parentNode.appendChild(t),
												e.length && (s.wrapList(e, i.nodeName), t.appendChild(e[0].parentNode));
										}),
										0 === i.children.length && r.removeChild(i),
										0 === r.childNodes.length && r.parentNode.removeChild(r))
									: ((n =
											1 < i.childNodes.length
												? A.splitTree(
														i,
														{ node: n.parentNode, offset: A.position(n) + 1 },
														{ isSkipPaddingBlankHTML: !0 }
													)
												: null),
										(o = A.splitTree(
											i,
											{ node: o.parentNode, offset: A.position(o) },
											{ isSkipPaddingBlankHTML: !0 }
										)),
										(e = a ? A.listDescendant(o, A.isLi) : L.from(o.childNodes).filter(A.isLi)),
										(!a && A.isList(i.parentNode)) ||
											(e = e.map(function (t) {
												return A.replace(t, 'P');
											})),
										w().each(L.from(e).reverse(), function (t, e) {
											A.insertAfter(e, i);
										}),
										(o = L.compact([i, o, n])),
										w().each(o, function (t, e) {
											e = [e].concat(A.listDescendant(e, A.isList));
											w().each(e.reverse(), function (t, e) {
												A.nodeLength(e) || A.remove(e, !0);
											});
										})),
									(l = l.concat(e));
							}),
							l
						);
					}
				},
				{
					key: 'appendToPrevious',
					value: function (t) {
						return t.previousSibling
							? A.appendChildNodes(t.previousSibling, [t])
							: this.wrapList([t], 'LI');
					}
				},
				{
					key: 'findList',
					value: function (t) {
						return t
							? L.find(t.children, function (t) {
									return -1 < ['OL', 'UL'].indexOf(t.nodeName);
								})
							: null;
					}
				},
				{
					key: 'findNextSiblings',
					value: function (t) {
						for (var e = []; t.nextSibling; ) e.push(t.nextSibling), (t = t.nextSibling);
						return e;
					}
				}
			]);
			var Rt = Lt;
			function Lt() {
				if (!(this instanceof Lt)) throw new TypeError('Cannot call a class as a function');
			}
			function At(t, e) {
				for (var o = 0; o < e.length; o++) {
					var n = e[o];
					(n.enumerable = n.enumerable || !1),
						(n.configurable = !0),
						'value' in n && (n.writable = !0),
						Object.defineProperty(t, n.key, n);
				}
			}
			At(Dt.prototype, [
				{
					key: 'insertTab',
					value: function (t, e) {
						var o = A.createText(new Array(e + 1).join(A.NBSP_CHAR));
						(t = t.deleteContents()).insertNode(o, !0), (t = F.create(o, e)).select();
					}
				},
				{
					key: 'insertParagraph',
					value: function (t, e) {
						e = (e = (e = e || F.create(t)).deleteContents()).wrapBodyInlineWithPara();
						var o = A.ancestor(e.sc, A.isPara);
						if (o) {
							if (A.isLi(o) && (A.isEmpty(o) || A.deepestChildIsEmpty(o)))
								return void this.bullet.toggleList(o.parentNode.nodeName);
							var n,
								i,
								r = null;
							1 === this.options.blockquoteBreakingLevel
								? (r = A.ancestor(o, A.isBlockquote))
								: 2 === this.options.blockquoteBreakingLevel &&
									(r = A.lastAncestor(o, A.isBlockquote)),
								r
									? ((n = w()(A.emptyPara)[0]),
										A.isRightEdgePoint(e.getStartPoint()) &&
											A.isBR(e.sc.nextSibling) &&
											w()(e.sc.nextSibling).remove(),
										(i = A.splitTree(r, e.getStartPoint(), { isDiscardEmptySplits: !0 }))
											? i.parentNode.insertBefore(n, i)
											: A.insertAfter(n, r))
									: ((n = A.splitTree(o, e.getStartPoint())),
										(i = (i = A.listDescendant(o, A.isEmptyAnchor)).concat(
											A.listDescendant(n, A.isEmptyAnchor)
										)),
										w().each(i, function (t, e) {
											A.remove(e);
										}),
										(A.isHeading(n) || A.isPre(n) || A.isCustomStyleTag(n)) &&
											A.isEmpty(n) &&
											(n = A.replace(n, 'p')));
						} else {
							r = e.sc.childNodes[e.so];
							(n = w()(A.emptyPara)[0]), r ? e.sc.insertBefore(n, r) : e.sc.appendChild(n);
						}
						F.create(n, 0).normalize().select().scrollIntoView(t);
					}
				}
			]);
			var Ft = Dt;
			function Dt(t) {
				if (!(this instanceof Dt)) throw new TypeError('Cannot call a class as a function');
				(this.bullet = new Rt()), (this.options = t.options);
			}
			function Ht(t, e) {
				for (var o = 0; o < e.length; o++) {
					var n = e[o];
					(n.enumerable = n.enumerable || !1),
						(n.configurable = !0),
						'value' in n && (n.writable = !0),
						Object.defineProperty(t, n.key, n);
				}
			}
			function E(t, c, u, e) {
				var d = { colPos: 0, rowPos: 0 },
					h = [],
					f = [];
				function o(t, e, o, n, i, r, a) {
					o = { baseRow: o, baseCell: n, isRowSpan: i, isColSpan: r, isVirtual: a };
					h[t] || (h[t] = []), (h[t][e] = o);
				}
				function n(t, e) {
					if (!h[t]) return e;
					if (!h[t][e]) return e;
					for (var o = e; h[t][o]; ) if (!h[t][++o]) return o;
				}
				function i(t, e, o, n) {
					t === d.rowPos && d.colPos >= o.cellIndex && o.cellIndex <= e && !n && d.colPos++;
				}
				(this.getActionList = function () {
					for (
						var t = c === E.where.Row ? d.rowPos : -1,
							e = c === E.where.Column ? d.colPos : -1,
							o = 0,
							n = !0;
						n;

					) {
						var i = 0 <= t ? t : o,
							r = 0 <= e ? e : o,
							a = h[i];
						if (!a) return (n = !1), f;
						var s = a[r];
						if (!s) return (n = !1), f;
						var l = E.resultAction.Ignore;
						switch (u) {
							case E.requestAction.Add:
								l = (function (t) {
									switch (c) {
										case E.where.Column:
											if (t.isColSpan) return E.resultAction.SumSpanCount;
											if (t.isRowSpan && t.isVirtual) return E.resultAction.Ignore;
											break;
										case E.where.Row:
											if (t.isRowSpan) return E.resultAction.SumSpanCount;
											if (t.isColSpan && t.isVirtual) return E.resultAction.Ignore;
									}
									return E.resultAction.AddCell;
								})(s);
								break;
							case E.requestAction.Delete:
								l = (function (t) {
									switch (c) {
										case E.where.Column:
											if (t.isColSpan) return E.resultAction.SubtractSpanCount;
											break;
										case E.where.Row:
											if (!t.isVirtual && t.isRowSpan) return E.resultAction.AddCell;
											if (t.isRowSpan) return E.resultAction.SubtractSpanCount;
									}
									return E.resultAction.RemoveCell;
								})(s);
						}
						f.push(
							((a = l),
							{ baseCell: s.baseCell, action: a, virtualTable: { rowIndex: i, cellIndex: r } })
						),
							o++;
					}
					return f;
				}),
					t &&
						t.tagName &&
						('td' === t.tagName.toLowerCase() || 'th' === t.tagName.toLowerCase()) &&
						((d.colPos = t.cellIndex), t.parentElement) &&
						t.parentElement.tagName &&
						'tr' === t.parentElement.tagName.toLowerCase() &&
						(d.rowPos = t.parentElement.rowIndex);
				for (var r = e.rows, a = 0; a < r.length; a++)
					for (var s = r[a].cells, l = 0; l < s.length; l++) {
						p = void 0;
						m = void 0;
						v = void 0;
						g = void 0;
						b = void 0;
						y = void 0;
						k = void 0;
						w = void 0;
						C = void 0;
						x = void 0;
						S = void 0;
						T = void 0;
						var p = r[a];
						var m = s[l];
						var v = n(p.rowIndex, m.cellIndex),
							g = 1 < m.colSpan,
							b = 1 < m.rowSpan,
							y = p.rowIndex === d.rowPos && m.cellIndex === d.colPos,
							k =
								(o(p.rowIndex, v, p, m, b, g, !1),
								m.attributes.rowSpan ? parseInt(m.attributes.rowSpan.value, 10) : 0);
						if (1 < k)
							for (var w = 1; w < k; w++) {
								var C = p.rowIndex + w;
								i(C, v, m, y), o(C, v, p, m, !0, g, !0);
							}
						var x = m.attributes.colSpan ? parseInt(m.attributes.colSpan.value, 10) : 0;
						if (1 < x)
							for (var S = 1; S < x; S++) {
								var T = n(p.rowIndex, v + S);
								i(p.rowIndex, T, m, y), o(p.rowIndex, T, p, m, b, !0, !0);
							}
					}
			}
			(E.where = { Row: 0, Column: 1 }),
				(E.requestAction = { Add: 0, Delete: 1 }),
				(E.resultAction = {
					Ignore: 0,
					SubtractSpanCount: 1,
					RemoveCell: 2,
					AddCell: 3,
					SumSpanCount: 4
				}),
				Ht(Bt.prototype, [
					{
						key: 'tab',
						value: function (t, e) {
							var t = A.ancestor(t.commonAncestor(), A.isCell),
								o = A.ancestor(t, A.isTable),
								o = A.listDescendant(o, A.isCell),
								e = L[e ? 'prev' : 'next'](o, t);
							e && F.create(e, 0).select();
						}
					},
					{
						key: 'addRow',
						value: function (t, e) {
							for (
								var t = A.ancestor(t.commonAncestor(), A.isCell),
									o = w()(t).closest('tr'),
									n = this.recoverAttributes(o),
									i = w()('<tr' + n + '></tr>'),
									r = new E(
										t,
										E.where.Row,
										E.requestAction.Add,
										w()(o).closest('table')[0]
									).getActionList(),
									a = 0;
								a < r.length;
								a++
							) {
								var s,
									l = r[a],
									c = this.recoverAttributes(l.baseCell);
								switch (l.action) {
									case E.resultAction.AddCell:
										i.append('<td' + c + '>' + A.blank + '</td>');
										break;
									case E.resultAction.SumSpanCount:
										'top' === e &&
										(l.baseCell.parent ? l.baseCell.closest('tr').rowIndex : 0) <= o[0].rowIndex
											? ((s = w()('<div></div>')
													.append(w()('<td' + c + '>' + A.blank + '</td>').removeAttr('rowspan'))
													.html()),
												i.append(s))
											: ((s = parseInt(l.baseCell.rowSpan, 10)),
												s++,
												l.baseCell.setAttribute('rowSpan', s));
								}
							}
							'top' === e
								? o.before(i)
								: 1 < t.rowSpan
									? ((n = o[0].rowIndex + (t.rowSpan - 2)),
										w()(w()(o).parent().find('tr')[n]).after(w()(i)))
									: o.after(i);
						}
					},
					{
						key: 'addCol',
						value: function (t, e) {
							var t = A.ancestor(t.commonAncestor(), A.isCell),
								o = w()(t).closest('tr');
							w()(o).siblings().push(o);
							for (
								var n = new E(
										t,
										E.where.Column,
										E.requestAction.Add,
										w()(o).closest('table')[0]
									).getActionList(),
									i = 0;
								i < n.length;
								i++
							) {
								var r,
									a = n[i],
									s = this.recoverAttributes(a.baseCell);
								switch (a.action) {
									case E.resultAction.AddCell:
										'right' === e
											? w()(a.baseCell).after('<td' + s + '>' + A.blank + '</td>')
											: w()(a.baseCell).before('<td' + s + '>' + A.blank + '</td>');
										break;
									case E.resultAction.SumSpanCount:
										'right' === e
											? ((r = parseInt(a.baseCell.colSpan, 10)),
												r++,
												a.baseCell.setAttribute('colSpan', r))
											: w()(a.baseCell).before('<td' + s + '>' + A.blank + '</td>');
								}
							}
						}
					},
					{
						key: 'recoverAttributes',
						value: function (t) {
							var e = '';
							if (t)
								for (var o = t.attributes || [], n = 0; n < o.length; n++)
									'id' !== o[n].name.toLowerCase() &&
										o[n].specified &&
										(e += ' ' + o[n].name + "='" + o[n].value + "'");
							return e;
						}
					},
					{
						key: 'deleteRow',
						value: function (t) {
							for (
								var t = A.ancestor(t.commonAncestor(), A.isCell),
									e = w()(t).closest('tr'),
									o = e.children('td, th').index(w()(t)),
									n = e[0].rowIndex,
									i = new E(
										t,
										E.where.Row,
										E.requestAction.Delete,
										w()(e).closest('table')[0]
									).getActionList(),
									r = 0;
								r < i.length;
								r++
							)
								if (i[r]) {
									var a = i[r].baseCell,
										s = i[r].virtualTable,
										l = a.rowSpan && 1 < a.rowSpan,
										c = l ? parseInt(a.rowSpan, 10) : 0;
									switch (i[r].action) {
										case E.resultAction.Ignore:
											continue;
										case E.resultAction.AddCell:
											var u = e.next('tr')[0];
											if (!u) continue;
											var d = e[0].cells[o];
											l &&
												(2 < c
													? (c--,
														u.insertBefore(d, u.cells[o]),
														u.cells[o].setAttribute('rowSpan', c),
														(u.cells[o].innerHTML = ''))
													: 2 === c &&
														(u.insertBefore(d, u.cells[o]),
														u.cells[o].removeAttribute('rowSpan'),
														(u.cells[o].innerHTML = '')));
											continue;
										case E.resultAction.SubtractSpanCount:
											l &&
												(2 < c
													? (c--,
														a.setAttribute('rowSpan', c),
														s.rowIndex !== n && a.cellIndex === o && (a.innerHTML = ''))
													: 2 === c &&
														(a.removeAttribute('rowSpan'), s.rowIndex !== n) &&
														a.cellIndex === o &&
														(a.innerHTML = ''));
											continue;
										case E.resultAction.RemoveCell:
											continue;
									}
								}
							e.remove();
						}
					},
					{
						key: 'deleteCol',
						value: function (t) {
							for (
								var t = A.ancestor(t.commonAncestor(), A.isCell),
									e = w()(t).closest('tr'),
									o = e.children('td, th').index(w()(t)),
									n = new E(
										t,
										E.where.Column,
										E.requestAction.Delete,
										w()(e).closest('table')[0]
									).getActionList(),
									i = 0;
								i < n.length;
								i++
							)
								if (n[i])
									switch (n[i].action) {
										case E.resultAction.Ignore:
											continue;
										case E.resultAction.SubtractSpanCount:
											var r,
												a = n[i].baseCell;
											a.colSpan &&
												1 < a.colSpan &&
												(2 < (r = a.colSpan ? parseInt(a.colSpan, 10) : 0)
													? (r--,
														a.setAttribute('colSpan', r),
														a.cellIndex === o && (a.innerHTML = ''))
													: 2 === r &&
														(a.removeAttribute('colSpan'), a.cellIndex === o) &&
														(a.innerHTML = ''));
											continue;
										case E.resultAction.RemoveCell:
											A.remove(n[i].baseCell, !0);
											continue;
									}
						}
					},
					{
						key: 'createTable',
						value: function (t, e, o) {
							for (var n = [], i = 0; i < t; i++) n.push('<td>' + A.blank + '</td>');
							for (var r = n.join(''), a = [], s = 0; s < e; s++) a.push('<tr>' + r + '</tr>');
							var l = a.join(''),
								l = w()('<table>' + l + '</table>');
							return o && o.tableClassName && l.addClass(o.tableClassName), l[0];
						}
					},
					{
						key: 'deleteTable',
						value: function (t) {
							t = A.ancestor(t.commonAncestor(), A.isCell);
							w()(t).closest('table').remove();
						}
					}
				]);
			var zt = Bt;
			function Bt() {
				if (!(this instanceof Bt)) throw new TypeError('Cannot call a class as a function');
			}
			function Mt(t, e) {
				for (var o = 0; o < e.length; o++) {
					var n = e[o];
					(n.enumerable = n.enumerable || !1),
						(n.configurable = !0),
						'value' in n && (n.writable = !0),
						Object.defineProperty(t, n.key, n);
				}
			}
			Mt(Ot.prototype, [
				{
					key: 'initialize',
					value: function () {
						var e = this;
						this.$editable
							.on('keydown', function (t) {
								if (
									(t.keyCode === D.code.ENTER && e.context.triggerEvent('enter', t),
									e.context.triggerEvent('keydown', t),
									(e.snapshot = e.history.makeSnapshot()),
									(e.hasKeyShortCut = !1),
									t.isDefaultPrevented() ||
										(e.options.shortcuts
											? (e.hasKeyShortCut = e.handleKeyMap(t))
											: e.preventDefaultEditableShortCuts(t)),
									e.isLimited(1, t))
								) {
									t = e.getLastRange();
									if (t.eo - t.so == 0) return !1;
								}
								e.setLastRange(),
									e.options.recordEveryKeystroke &&
										!1 === e.hasKeyShortCut &&
										e.history.recordUndo();
							})
							.on('keyup', function (t) {
								e.setLastRange(), e.context.triggerEvent('keyup', t);
							})
							.on('focus', function (t) {
								e.setLastRange(), e.context.triggerEvent('focus', t);
							})
							.on('blur', function (t) {
								e.context.triggerEvent('blur', t);
							})
							.on('mousedown', function (t) {
								e.context.triggerEvent('mousedown', t);
							})
							.on('mouseup', function (t) {
								e.setLastRange(), e.history.recordUndo(), e.context.triggerEvent('mouseup', t);
							})
							.on('scroll', function (t) {
								e.context.triggerEvent('scroll', t);
							})
							.on('paste', function (t) {
								e.setLastRange(), e.context.triggerEvent('paste', t);
							})
							.on('input', function () {
								e.isLimited(0) && e.snapshot && e.history.applySnapshot(e.snapshot);
							}),
							this.$editable.attr('spellcheck', this.options.spellCheck),
							this.$editable.attr('autocorrect', this.options.spellCheck),
							this.options.disableGrammar && this.$editable.attr('data-gramm', !1),
							this.$editable.html(A.html(this.$note) || A.emptyPara),
							this.$editable.on(
								P.inputEventName,
								R.debounce(function () {
									e.context.triggerEvent('change', e.$editable.html(), e.$editable);
								}, 10)
							),
							this.$editable
								.on('focusin', function (t) {
									e.context.triggerEvent('focusin', t);
								})
								.on('focusout', function (t) {
									e.context.triggerEvent('focusout', t);
								}),
							this.options.airMode
								? this.options.overrideContextMenu &&
									this.$editor.on('contextmenu', function (t) {
										return e.context.triggerEvent('contextmenu', t), !1;
									})
								: (this.options.width && this.$editor.outerWidth(this.options.width),
									this.options.height && this.$editable.outerHeight(this.options.height),
									this.options.maxHeight &&
										this.$editable.css('max-height', this.options.maxHeight),
									this.options.minHeight &&
										this.$editable.css('min-height', this.options.minHeight)),
							this.history.recordUndo(),
							this.setLastRange();
					}
				},
				{
					key: 'destroy',
					value: function () {
						this.$editable.off();
					}
				},
				{
					key: 'handleKeyMap',
					value: function (t) {
						var e = this.options.keyMap[P.isMac ? 'mac' : 'pc'],
							o = [],
							n =
								(t.metaKey && o.push('CMD'),
								t.ctrlKey && !t.altKey && o.push('CTRL'),
								t.shiftKey && o.push('SHIFT'),
								D.nameFromCode[t.keyCode]),
							e = (n && o.push(n), e[o.join('+')]);
						if ('TAB' !== n || this.options.tabDisable)
							if (e) {
								if (!1 !== this.context.invoke(e)) return t.preventDefault(), !0;
							} else D.isEdit(t.keyCode) && this.afterCommand();
						else this.afterCommand();
						return !1;
					}
				},
				{
					key: 'preventDefaultEditableShortCuts',
					value: function (t) {
						(t.ctrlKey || t.metaKey) && L.contains([66, 73, 85], t.keyCode) && t.preventDefault();
					}
				},
				{
					key: 'isLimited',
					value: function (t, e) {
						return (
							(t = t || 0),
							(void 0 === e ||
								!(
									D.isMove(e.keyCode) ||
									D.isNavigation(e.keyCode) ||
									e.ctrlKey ||
									e.metaKey ||
									L.contains([D.code.BACKSPACE, D.code.DELETE], e.keyCode)
								)) &&
								0 < this.options.maxTextLength &&
								this.$editable.text().length + t > this.options.maxTextLength
						);
					}
				},
				{
					key: 'createRange',
					value: function () {
						return this.focus(), this.setLastRange(), this.getLastRange();
					}
				},
				{
					key: 'createRangeFromList',
					value: function (t) {
						var e = F.createFromNodeBefore(L.head(t)).getStartPoint(),
							t = F.createFromNodeAfter(L.last(t)).getEndPoint();
						return F.create(e.node, e.offset, t.node, t.offset);
					}
				},
				{
					key: 'setLastRange',
					value: function (t) {
						t
							? (this.lastRange = t)
							: ((this.lastRange = F.create(this.editable)),
								0 === w()(this.lastRange.sc).closest('.note-editable').length &&
									(this.lastRange = F.createFromBodyElement(this.editable)));
					}
				},
				{
					key: 'getLastRange',
					value: function () {
						return this.lastRange || this.setLastRange(), this.lastRange;
					}
				},
				{
					key: 'saveRange',
					value: function (t) {
						t && this.getLastRange().collapse().select();
					}
				},
				{
					key: 'restoreRange',
					value: function () {
						this.lastRange && (this.lastRange.select(), this.focus());
					}
				},
				{
					key: 'saveTarget',
					value: function (t) {
						this.$editable.data('target', t);
					}
				},
				{
					key: 'clearTarget',
					value: function () {
						this.$editable.removeData('target');
					}
				},
				{
					key: 'restoreTarget',
					value: function () {
						return this.$editable.data('target');
					}
				},
				{
					key: 'currentStyle',
					value: function () {
						var t = F.create();
						return (t = t && t.normalize())
							? this.style.current(t)
							: this.style.fromNode(this.$editable);
					}
				},
				{
					key: 'styleFromNode',
					value: function (t) {
						return this.style.fromNode(t);
					}
				},
				{
					key: 'undo',
					value: function () {
						this.context.triggerEvent('before.command', this.$editable.html()),
							this.history.undo(),
							this.context.triggerEvent('change', this.$editable.html(), this.$editable);
					}
				},
				{
					key: 'commit',
					value: function () {
						this.context.triggerEvent('before.command', this.$editable.html()),
							this.history.commit(),
							this.context.triggerEvent('change', this.$editable.html(), this.$editable);
					}
				},
				{
					key: 'redo',
					value: function () {
						this.context.triggerEvent('before.command', this.$editable.html()),
							this.history.redo(),
							this.context.triggerEvent('change', this.$editable.html(), this.$editable);
					}
				},
				{
					key: 'beforeCommand',
					value: function () {
						this.context.triggerEvent('before.command', this.$editable.html()),
							document.execCommand('styleWithCSS', !1, this.options.styleWithCSS),
							this.focus();
					}
				},
				{
					key: 'afterCommand',
					value: function (t) {
						this.normalizeContent(),
							this.history.recordUndo(),
							t || this.context.triggerEvent('change', this.$editable.html(), this.$editable);
					}
				},
				{
					key: 'tab',
					value: function () {
						var t = this.getLastRange();
						if (t.isCollapsed() && t.isOnCell()) this.table.tab(t);
						else {
							if (0 === this.options.tabSize) return !1;
							this.isLimited(this.options.tabSize) ||
								(this.beforeCommand(),
								this.typing.insertTab(t, this.options.tabSize),
								this.afterCommand());
						}
					}
				},
				{
					key: 'untab',
					value: function () {
						var t = this.getLastRange();
						if (t.isCollapsed() && t.isOnCell()) this.table.tab(t, !0);
						else if (0 === this.options.tabSize) return !1;
					}
				},
				{
					key: 'wrapCommand',
					value: function (t) {
						return function () {
							this.beforeCommand(), t.apply(this, arguments), this.afterCommand();
						};
					}
				},
				{
					key: 'insertImage',
					value: function (t, e) {
						var o = this,
							n = t;
						return w()
							.Deferred(function (t) {
								var e = w()('<img>');
								e.one('load', function () {
									e.off('error abort'), t.resolve(e);
								})
									.one('error abort', function () {
										e.off('load').detach(), t.reject(e);
									})
									.css({ display: 'none' })
									.appendTo(document.body)
									.attr('src', n);
							})
							.promise()
							.then(function (t) {
								o.beforeCommand(),
									'function' == typeof e
										? e(t)
										: ('string' == typeof e && t.attr('data-filename', e),
											t.css('width', Math.min(o.$editable.width(), t.width()))),
									t.show(),
									o.getLastRange().insertNode(t[0]),
									o.setLastRange(F.createFromNodeAfter(t[0]).select()),
									o.afterCommand();
							})
							.fail(function (t) {
								o.context.triggerEvent('image.upload.error', t);
							});
					}
				},
				{
					key: 'insertImagesAsDataURL',
					value: function (t) {
						var i = this;
						w().each(t, function (t, e) {
							var o,
								n = e.name;
							i.options.maximumImageFileSize && i.options.maximumImageFileSize < e.size
								? i.context.triggerEvent('image.upload.error', i.lang.image.maximumFileSizeError)
								: ((o = e),
									w()
										.Deferred(function (e) {
											w()
												.extend(new FileReader(), {
													onload: function (t) {
														t = t.target.result;
														e.resolve(t);
													},
													onerror: function (t) {
														e.reject(t);
													}
												})
												.readAsDataURL(o);
										})
										.promise()
										.then(function (t) {
											return i.insertImage(t, n);
										})
										.fail(function () {
											i.context.triggerEvent('image.upload.error');
										}));
						});
					}
				},
				{
					key: 'insertImagesOrCallback',
					value: function (t) {
						this.options.callbacks.onImageUpload
							? this.context.triggerEvent('image.upload', t)
							: this.insertImagesAsDataURL(t);
					}
				},
				{
					key: 'getSelectedText',
					value: function () {
						var t = this.getLastRange();
						return (t = t.isOnAnchor()
							? F.createFromNode(A.ancestor(t.sc, A.isAnchor))
							: t).toString();
					}
				},
				{
					key: 'onFormatBlock',
					value: function (t, e) {
						var o;
						document.execCommand('FormatBlock', !1, P.isMSIE ? '<' + t + '>' : t),
							e &&
								e.length &&
								(e = e[0].tagName.toUpperCase() !== t.toUpperCase() ? e.find(t) : e) &&
								e.length &&
								((o = this.createRange()),
								(o = w()([o.sc, o.ec]).closest(t)).removeClass(),
								(t = e[0].className || '')) &&
								o.addClass(t);
					}
				},
				{
					key: 'formatPara',
					value: function () {
						this.formatBlock('P');
					}
				},
				{
					key: 'fontStyling',
					value: function (t, e) {
						var o,
							n,
							i = this.getLastRange();
						'' !== i
							? ((o = this.style.styleNodes(i)),
								this.$editor.find('.note-status-output').html(''),
								w()(o).css(t, e),
								i.isCollapsed()
									? (t = L.head(o)) &&
										!A.nodeLength(t) &&
										((t.innerHTML = A.ZERO_WIDTH_NBSP_CHAR),
										F.createFromNode(t.firstChild).select(),
										this.setLastRange(),
										this.$editable.data('bogus', t))
									: this.setLastRange(this.createRangeFromList(o).select()))
							: ((n = w().now()),
								this.$editor
									.find('.note-status-output')
									.html(
										'<div id="note-status-output-' +
											n +
											'" class="alert alert-info">' +
											this.lang.output.noSelection +
											'</div>'
									),
								setTimeout(function () {
									w()('#note-status-output-' + n).remove();
								}, 5e3));
					}
				},
				{
					key: 'unlink',
					value: function () {
						var t,
							e = this.getLastRange();
						e.isOnAnchor() &&
							((t = A.ancestor(e.sc, A.isAnchor)),
							(e = F.createFromNode(t)).select(),
							this.setLastRange(),
							this.beforeCommand(),
							document.execCommand('unlink'),
							this.afterCommand());
					}
				},
				{
					key: 'getLinkInfo',
					value: function () {
						var t = this.getLastRange().expand(A.isAnchor),
							e = w()(L.head(t.nodes(A.isAnchor))),
							t = { range: t, text: t.toString(), url: e.length ? e.attr('href') : '' };
						return e.length && (t.isNewWindow = '_blank' === e.attr('target')), t;
					}
				},
				{
					key: 'addRow',
					value: function (t) {
						var e = this.getLastRange(this.$editable);
						e.isCollapsed() &&
							e.isOnCell() &&
							(this.beforeCommand(), this.table.addRow(e, t), this.afterCommand());
					}
				},
				{
					key: 'addCol',
					value: function (t) {
						var e = this.getLastRange(this.$editable);
						e.isCollapsed() &&
							e.isOnCell() &&
							(this.beforeCommand(), this.table.addCol(e, t), this.afterCommand());
					}
				},
				{
					key: 'deleteRow',
					value: function () {
						var t = this.getLastRange(this.$editable);
						t.isCollapsed() &&
							t.isOnCell() &&
							(this.beforeCommand(), this.table.deleteRow(t), this.afterCommand());
					}
				},
				{
					key: 'deleteCol',
					value: function () {
						var t = this.getLastRange(this.$editable);
						t.isCollapsed() &&
							t.isOnCell() &&
							(this.beforeCommand(), this.table.deleteCol(t), this.afterCommand());
					}
				},
				{
					key: 'deleteTable',
					value: function () {
						var t = this.getLastRange(this.$editable);
						t.isCollapsed() &&
							t.isOnCell() &&
							(this.beforeCommand(), this.table.deleteTable(t), this.afterCommand());
					}
				},
				{
					key: 'resizeTo',
					value: function (t, e, o) {
						var n;
						(o = o
							? {
									width: (o = t.y / t.x) < (n = e.data('ratio')) ? t.x : t.y / n,
									height: o < n ? t.x * n : t.y
								}
							: { width: t.x, height: t.y }),
							e.css(o);
					}
				},
				{
					key: 'hasFocus',
					value: function () {
						return this.$editable.is(':focus');
					}
				},
				{
					key: 'focus',
					value: function () {
						this.hasFocus() || this.$editable.focus();
					}
				},
				{
					key: 'isEmpty',
					value: function () {
						return A.isEmpty(this.$editable[0]) || A.emptyPara === this.$editable.html();
					}
				},
				{
					key: 'empty',
					value: function () {
						this.context.invoke('code', A.emptyPara);
					}
				},
				{
					key: 'normalizeContent',
					value: function () {
						this.$editable[0].normalize();
					}
				}
			]);
			var T = Ot;
			function Ot(t) {
				var a = this;
				if (!(this instanceof Ot)) throw new TypeError('Cannot call a class as a function');
				(this.context = t),
					(this.$note = t.layoutInfo.note),
					(this.$editor = t.layoutInfo.editor),
					(this.$editable = t.layoutInfo.editable),
					(this.options = t.options),
					(this.lang = this.options.langInfo),
					(this.editable = this.$editable[0]),
					(this.lastRange = null),
					(this.snapshot = null),
					(this.style = new $t()),
					(this.table = new zt()),
					(this.typing = new Ft(t)),
					(this.bullet = new Rt()),
					(this.history = new Tt(t)),
					this.context.memo('help.escape', this.lang.help.escape),
					this.context.memo('help.undo', this.lang.help.undo),
					this.context.memo('help.redo', this.lang.help.redo),
					this.context.memo('help.tab', this.lang.help.tab),
					this.context.memo('help.untab', this.lang.help.untab),
					this.context.memo('help.insertParagraph', this.lang.help.insertParagraph),
					this.context.memo('help.insertOrderedList', this.lang.help.insertOrderedList),
					this.context.memo('help.insertUnorderedList', this.lang.help.insertUnorderedList),
					this.context.memo('help.indent', this.lang.help.indent),
					this.context.memo('help.outdent', this.lang.help.outdent),
					this.context.memo('help.formatPara', this.lang.help.formatPara),
					this.context.memo('help.insertHorizontalRule', this.lang.help.insertHorizontalRule),
					this.context.memo('help.fontName', this.lang.help.fontName);
				for (
					var e = [
							'bold',
							'italic',
							'underline',
							'strikethrough',
							'superscript',
							'subscript',
							'justifyLeft',
							'justifyCenter',
							'justifyRight',
							'justifyFull',
							'formatBlock',
							'removeFormat',
							'backColor'
						],
						o = 0,
						n = e.length;
					o < n;
					o++
				)
					(this[e[o]] = (function (e) {
						return function (t) {
							a.beforeCommand(), document.execCommand(e, !1, t), a.afterCommand(!0);
						};
					})(e[o])),
						this.context.memo('help.' + e[o], this.lang.help[e[o]]);
				(this.fontName = this.wrapCommand(function (t) {
					return a.fontStyling('font-family', P.validFontName(t));
				})),
					(this.fontSize = this.wrapCommand(function (t) {
						var e = a.currentStyle()['font-size-unit'];
						return a.fontStyling('font-size', t + e);
					})),
					(this.fontSizeUnit = this.wrapCommand(function (t) {
						var e = a.currentStyle()['font-size'];
						return a.fontStyling('font-size', e + t);
					}));
				for (var i = 1; i <= 6; i++)
					(this['formatH' + i] = (function (t) {
						return function () {
							a.formatBlock('H' + t);
						};
					})(i)),
						this.context.memo('help.formatH' + i, this.lang.help['formatH' + i]);
				(this.insertParagraph = this.wrapCommand(function () {
					a.typing.insertParagraph(a.editable);
				})),
					(this.insertOrderedList = this.wrapCommand(function () {
						a.bullet.insertOrderedList(a.editable);
					})),
					(this.insertUnorderedList = this.wrapCommand(function () {
						a.bullet.insertUnorderedList(a.editable);
					})),
					(this.indent = this.wrapCommand(function () {
						a.bullet.indent(a.editable);
					})),
					(this.outdent = this.wrapCommand(function () {
						a.bullet.outdent(a.editable);
					})),
					(this.insertNode = this.wrapCommand(function (t) {
						a.isLimited(w()(t).text().length) ||
							(a.getLastRange().insertNode(t), a.setLastRange(F.createFromNodeAfter(t).select()));
					})),
					(this.insertText = this.wrapCommand(function (t) {
						a.isLimited(t.length) ||
							((t = a.getLastRange().insertNode(A.createText(t))),
							a.setLastRange(F.create(t, A.nodeLength(t)).select()));
					})),
					(this.pasteHTML = this.wrapCommand(function (t) {
						a.isLimited(t.length) ||
							((t = a.context.invoke('codeview.purify', t)),
							(t = a.getLastRange().pasteHTML(t)),
							a.setLastRange(F.createFromNodeAfter(L.last(t)).select()));
					})),
					(this.formatBlock = this.wrapCommand(function (t, e) {
						var o = a.options.callbacks.onApplyCustomStyle;
						o ? o.call(a, e, a.context, a.onFormatBlock) : a.onFormatBlock(t, e);
					})),
					(this.insertHorizontalRule = this.wrapCommand(function () {
						var t = a.getLastRange().insertNode(A.create('HR'));
						t.nextSibling && a.setLastRange(F.create(t.nextSibling, 0).normalize().select());
					})),
					(this.lineHeight = this.wrapCommand(function (t) {
						a.style.stylePara(a.getLastRange(), { lineHeight: t });
					})),
					(this.createLink = this.wrapCommand(function (t) {
						var o = t.url,
							e = t.text,
							n = t.isNewWindow,
							i = t.checkProtocol,
							t = t.range || a.getLastRange(),
							r = e.length - t.toString().length;
						(0 < r && a.isLimited(r)) ||
							((r = t.toString() !== e),
							'string' == typeof o && (o = o.trim()),
							a.options.onCreateLink
								? (o = a.options.onCreateLink(o))
								: i &&
									(o = /^([A-Za-z][A-Za-z0-9+-.]*\:|#|\/)/.test(o)
										? o
										: a.options.defaultProtocol + o),
							(i = []),
							r
								? ((r = (t = t.deleteContents()).insertNode(w()('<A>' + e + '</A>')[0])), i.push(r))
								: (i = a.style.styleNodes(t, {
										nodeName: 'A',
										expandClosestSibling: !0,
										onlyPartialContains: !0
									})),
							w().each(i, function (t, e) {
								w()(e).attr('href', o),
									n ? w()(e).attr('target', '_blank') : w()(e).removeAttr('target');
							}),
							a.setLastRange(a.createRangeFromList(i).select()));
					})),
					(this.color = this.wrapCommand(function (t) {
						var e = t.foreColor,
							t = t.backColor;
						e && document.execCommand('foreColor', !1, e),
							t && document.execCommand('backColor', !1, t);
					})),
					(this.foreColor = this.wrapCommand(function (t) {
						document.execCommand('foreColor', !1, t);
					})),
					(this.insertTable = this.wrapCommand(function (t) {
						t = t.split('x');
						a.getLastRange()
							.deleteContents()
							.insertNode(a.table.createTable(t[0], t[1], a.options));
					})),
					(this.removeMedia = this.wrapCommand(function () {
						var t = w()(a.restoreTarget()).parent();
						t.closest('figure').length
							? t.closest('figure').remove()
							: (t = w()(a.restoreTarget()).detach()),
							a.context.triggerEvent('media.delete', t, a.$editable);
					})),
					(this.floatMe = this.wrapCommand(function (t) {
						var e = w()(a.restoreTarget());
						e.toggleClass('note-float-left', 'left' === t),
							e.toggleClass('note-float-right', 'right' === t),
							e.css('float', 'none' === t ? '' : t);
					})),
					(this.resize = this.wrapCommand(function (t) {
						var e = w()(a.restoreTarget());
						0 === (t = parseFloat(t))
							? e.css('width', '')
							: e.css({ width: 100 * t + '%', height: '' });
					}));
			}
			function Ut(t, e) {
				for (var o = 0; o < e.length; o++) {
					var n = e[o];
					(n.enumerable = n.enumerable || !1),
						(n.configurable = !0),
						'value' in n && (n.writable = !0),
						Object.defineProperty(t, n.key, n);
				}
			}
			function jt(t) {
				if (!(this instanceof jt)) throw new TypeError('Cannot call a class as a function');
				(this.context = t), (this.$editable = t.layoutInfo.editable);
			}
			function Wt(t, e) {
				for (var o = 0; o < e.length; o++) {
					var n = e[o];
					(n.enumerable = n.enumerable || !1),
						(n.configurable = !0),
						'value' in n && (n.writable = !0),
						Object.defineProperty(t, n.key, n);
				}
			}
			function Kt(t) {
				if (!(this instanceof Kt)) throw new TypeError('Cannot call a class as a function');
				(this.context = t),
					(this.$eventListener = w()(document)),
					(this.$editor = t.layoutInfo.editor),
					(this.$editable = t.layoutInfo.editable),
					(this.options = t.options),
					(this.lang = this.options.langInfo),
					(this.documentEventHandlers = {}),
					(this.$dropzone = w()(
						[
							'<div class="note-dropzone">',
							'<div class="note-dropzone-message"></div>',
							'</div>'
						].join('')
					).prependTo(this.$editor));
			}
			function Vt(t, e) {
				(null == e || e > t.length) && (e = t.length);
				for (var o = 0, n = new Array(e); o < e; o++) n[o] = t[o];
				return n;
			}
			function qt(t, e) {
				for (var o = 0; o < e.length; o++) {
					var n = e[o];
					(n.enumerable = n.enumerable || !1),
						(n.configurable = !0),
						'value' in n && (n.writable = !0),
						Object.defineProperty(t, n.key, n);
				}
			}
			function _t(t) {
				if (!(this instanceof _t)) throw new TypeError('Cannot call a class as a function');
				(this.context = t),
					(this.$editor = t.layoutInfo.editor),
					(this.$editable = t.layoutInfo.editable),
					(this.$codable = t.layoutInfo.codable),
					(this.options = t.options),
					(this.CodeMirrorConstructor = window.CodeMirror),
					this.options.codemirror.CodeMirrorConstructor &&
						(this.CodeMirrorConstructor = this.options.codemirror.CodeMirrorConstructor);
			}
			function Gt(t, e) {
				for (var o = 0; o < e.length; o++) {
					var n = e[o];
					(n.enumerable = n.enumerable || !1),
						(n.configurable = !0),
						'value' in n && (n.writable = !0),
						Object.defineProperty(t, n.key, n);
				}
			}
			function Yt(t) {
				if (!(this instanceof Yt)) throw new TypeError('Cannot call a class as a function');
				(this.$document = w()(document)),
					(this.$statusbar = t.layoutInfo.statusbar),
					(this.$editable = t.layoutInfo.editable),
					(this.$codable = t.layoutInfo.codable),
					(this.options = t.options);
			}
			function Zt(t, e) {
				for (var o = 0; o < e.length; o++) {
					var n = e[o];
					(n.enumerable = n.enumerable || !1),
						(n.configurable = !0),
						'value' in n && (n.writable = !0),
						Object.defineProperty(t, n.key, n);
				}
			}
			function Qt(t) {
				var e = this;
				if (!(this instanceof Qt)) throw new TypeError('Cannot call a class as a function');
				(this.context = t),
					(this.$editor = t.layoutInfo.editor),
					(this.$toolbar = t.layoutInfo.toolbar),
					(this.$editable = t.layoutInfo.editable),
					(this.$codable = t.layoutInfo.codable),
					(this.$window = w()(window)),
					(this.$scrollbar = w()('html, body')),
					(this.scrollbarClassName = 'note-fullscreen-body'),
					(this.onResize = function () {
						e.resizeTo({ h: e.$window.height() - e.$toolbar.outerHeight() });
					});
			}
			function Xt(t, e) {
				for (var o = 0; o < e.length; o++) {
					var n = e[o];
					(n.enumerable = n.enumerable || !1),
						(n.configurable = !0),
						'value' in n && (n.writable = !0),
						Object.defineProperty(t, n.key, n);
				}
			}
			Ut(jt.prototype, [
				{
					key: 'initialize',
					value: function () {
						this.$editable.on('paste', this.pasteByEvent.bind(this));
					}
				},
				{
					key: 'pasteByEvent',
					value: function (t) {
						var e,
							o = this,
							n = t.originalEvent.clipboardData;
						n && n.items && n.items.length
							? 'file' === (e = 1 < n.items.length ? n.items[1] : L.head(n.items)).kind &&
								-1 !== e.type.indexOf('image/')
								? (this.context.invoke('editor.insertImagesOrCallback', [e.getAsFile()]),
									t.preventDefault())
								: 'string' === e.kind &&
									this.context.invoke('editor.isLimited', n.getData('Text').length) &&
									t.preventDefault()
							: window.clipboardData &&
								((e = window.clipboardData.getData('text')),
								this.context.invoke('editor.isLimited', e.length)) &&
								t.preventDefault(),
							setTimeout(function () {
								o.context.invoke('editor.afterCommand');
							}, 10);
					}
				}
			]),
				(i = jt),
				Wt(Kt.prototype, [
					{
						key: 'initialize',
						value: function () {
							this.options.disableDragAndDrop
								? ((this.documentEventHandlers.onDrop = function (t) {
										t.preventDefault();
									}),
									(this.$eventListener = this.$dropzone),
									this.$eventListener.on('drop', this.documentEventHandlers.onDrop))
								: this.attachDragAndDropEvent();
						}
					},
					{
						key: 'attachDragAndDropEvent',
						value: function () {
							var i = this,
								n = w()(),
								r = this.$dropzone.find('.note-dropzone-message');
							(this.documentEventHandlers.onDragenter = function (t) {
								var e = i.context.invoke('codeview.isActivated'),
									o = 0 < i.$editor.width() && 0 < i.$editor.height();
								e ||
									n.length ||
									!o ||
									(i.$editor.addClass('dragover'),
									i.$dropzone.width(i.$editor.width()),
									i.$dropzone.height(i.$editor.height()),
									r.text(i.lang.image.dragImageHere)),
									(n = n.add(t.target));
							}),
								(this.documentEventHandlers.onDragleave = function (t) {
									((n = n.not(t.target)).length && 'BODY' !== t.target.nodeName) ||
										((n = w()()), i.$editor.removeClass('dragover'));
								}),
								(this.documentEventHandlers.onDrop = function () {
									(n = w()()), i.$editor.removeClass('dragover');
								}),
								this.$eventListener
									.on('dragenter', this.documentEventHandlers.onDragenter)
									.on('dragleave', this.documentEventHandlers.onDragleave)
									.on('drop', this.documentEventHandlers.onDrop),
								this.$dropzone
									.on('dragenter', function () {
										i.$dropzone.addClass('hover'), r.text(i.lang.image.dropImage);
									})
									.on('dragleave', function () {
										i.$dropzone.removeClass('hover'), r.text(i.lang.image.dragImageHere);
									}),
								this.$dropzone
									.on('drop', function (t) {
										var n = t.originalEvent.dataTransfer;
										t.preventDefault(),
											n && n.files && n.files.length
												? (i.$editable.focus(),
													i.context.invoke('editor.insertImagesOrCallback', n.files))
												: w().each(n.types, function (t, e) {
														var o;
														-1 < e.toLowerCase().indexOf('_moz_') ||
															((o = n.getData(e)),
															-1 < e.toLowerCase().indexOf('text')
																? i.context.invoke('editor.pasteHTML', o)
																: w()(o).each(function (t, e) {
																		i.context.invoke('editor.insertNode', e);
																	}));
													});
									})
									.on('dragover', !1);
						}
					},
					{
						key: 'destroy',
						value: function () {
							var e = this;
							Object.keys(this.documentEventHandlers).forEach(function (t) {
								e.$eventListener.off(t.substr(2).toLowerCase(), e.documentEventHandlers[t]);
							}),
								(this.documentEventHandlers = {});
						}
					}
				]),
				(U = Kt),
				qt(_t.prototype, [
					{
						key: 'sync',
						value: function (t) {
							var e = this.isActivated(),
								o = this.CodeMirrorConstructor;
							e &&
								(t
									? o
										? this.$codable.data('cmEditor').getDoc().setValue(t)
										: this.$codable.val(t)
									: o && this.$codable.data('cmEditor').save());
						}
					},
					{
						key: 'initialize',
						value: function () {
							var e = this;
							this.$codable.on('keyup', function (t) {
								t.keyCode === D.code.ESCAPE && e.deactivate();
							});
						}
					},
					{
						key: 'isActivated',
						value: function () {
							return this.$editor.hasClass('codeview');
						}
					},
					{
						key: 'toggle',
						value: function () {
							this.isActivated() ? this.deactivate() : this.activate(),
								this.context.triggerEvent('codeview.toggled');
						}
					},
					{
						key: 'purify',
						value: function (t) {
							var i;
							return (
								this.options.codeviewFilter &&
									((t = t.replace(this.options.codeviewFilterRegex, '')),
									this.options.codeviewIframeFilter) &&
									((i = this.options.codeviewIframeWhitelistSrc.concat(
										this.options.codeviewIframeWhitelistSrcBase
									)),
									(t = t.replace(/(<iframe.*?>.*?(?:<\/iframe>)?)/gi, function (t) {
										if (!/<.+src(?==?('|"|\s)?)[\s\S]+src(?=('|"|\s)?)[^>]*?>/i.test(t)) {
											var e,
												o = (function (t, e) {
													var o,
														n,
														i,
														r,
														a =
															('undefined' != typeof Symbol && t[Symbol.iterator]) ||
															t['@@iterator'];
													if (a)
														return (
															(i = !(n = !0)),
															{
																s: function () {
																	a = a.call(t);
																},
																n: function () {
																	var t = a.next();
																	return (n = t.done), t;
																},
																e: function (t) {
																	(i = !0), (o = t);
																},
																f: function () {
																	try {
																		n || null == a.return || a.return();
																	} finally {
																		if (i) throw o;
																	}
																}
															}
														);
													if (
														Array.isArray(t) ||
														(a = (function (t) {
															var e;
															if (t)
																return 'string' == typeof t
																	? Vt(t, void 0)
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
																			? Vt(t, void 0)
																			: void 0;
														})(t)) ||
														(e && t && 'number' == typeof t.length)
													)
														return (
															a && (t = a),
															(r = 0),
															{
																s: (e = function () {}),
																n: function () {
																	return r >= t.length ? { done: !0 } : { done: !1, value: t[r++] };
																},
																e: function (t) {
																	throw t;
																},
																f: e
															}
														);
													throw new TypeError(
														'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
													);
												})(i);
											try {
												for (o.s(); !(e = o.n()).done; ) {
													var n = e.value;
													if (
														new RegExp(
															'src="(https?:)?//' +
																n.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&') +
																'/(.+)"'
														).test(t)
													)
														return t;
												}
											} catch (t) {
												o.e(t);
											} finally {
												o.f();
											}
										}
										return '';
									}))),
								t
							);
						}
					},
					{
						key: 'activate',
						value: function () {
							var e,
								o,
								n = this,
								t = this.CodeMirrorConstructor;
							this.$codable.val(A.html(this.$editable, this.options.prettifyHtml)),
								this.$codable.height(this.$editable.height()),
								this.context.invoke('toolbar.updateCodeview', !0),
								this.context.invoke('airPopover.updateCodeview', !0),
								this.$editor.addClass('codeview'),
								this.$codable.focus(),
								t
									? ((e = t.fromTextArea(this.$codable[0], this.options.codemirror)),
										this.options.codemirror.tern &&
											((o = new t.TernServer(this.options.codemirror.tern)),
											(e.ternServer = o),
											e.on('cursorActivity', function (t) {
												o.updateArgHints(t);
											})),
										e.on('blur', function (t) {
											n.context.triggerEvent('blur.codeview', e.getValue(), t);
										}),
										e.on('change', function () {
											n.context.triggerEvent('change.codeview', e.getValue(), e);
										}),
										e.setSize(null, this.$editable.outerHeight()),
										this.$codable.data('cmEditor', e))
									: (this.$codable.on('blur', function (t) {
											n.context.triggerEvent('blur.codeview', n.$codable.val(), t);
										}),
										this.$codable.on('input', function () {
											n.context.triggerEvent('change.codeview', n.$codable.val(), n.$codable);
										}));
						}
					},
					{
						key: 'deactivate',
						value: function () {
							this.CodeMirrorConstructor &&
								((t = this.$codable.data('cmEditor')),
								this.$codable.val(t.getValue()),
								t.toTextArea());
							var t = this.purify(A.value(this.$codable, this.options.prettifyHtml) || A.emptyPara),
								e = this.$editable.html() !== t;
							this.$editable.html(t),
								this.$editable.height(this.options.height ? this.$codable.height() : 'auto'),
								this.$editor.removeClass('codeview'),
								e && this.context.triggerEvent('change', this.$editable.html(), this.$editable),
								this.$editable.focus(),
								this.context.invoke('toolbar.updateCodeview', !1),
								this.context.invoke('airPopover.updateCodeview', !1);
						}
					},
					{
						key: 'destroy',
						value: function () {
							this.isActivated() && this.deactivate();
						}
					}
				]),
				(t = _t),
				Gt(Yt.prototype, [
					{
						key: 'initialize',
						value: function () {
							var i = this;
							this.options.airMode || this.options.disableResizeEditor
								? this.destroy()
								: this.$statusbar.on('mousedown', function (t) {
										t.preventDefault(), t.stopPropagation();
										function e(t) {
											var e = t.clientY - (24 + o),
												t = t.clientY - (24 + n),
												e = 0 < i.options.minheight ? Math.max(e, i.options.minheight) : e;
											(e = 0 < i.options.maxHeight ? Math.min(e, i.options.maxHeight) : e),
												(t = 0 < i.options.minheight ? Math.max(t, i.options.minheight) : t),
												(t = 0 < i.options.maxHeight ? Math.min(t, i.options.maxHeight) : t),
												i.$editable.height(e),
												i.$codable.height(t);
										}
										var o = i.$editable.offset().top - i.$document.scrollTop(),
											n = i.$codable.offset().top - i.$document.scrollTop();
										i.$document.on('mousemove', e).one('mouseup', function () {
											i.$document.off('mousemove', e);
										});
									});
						}
					},
					{
						key: 'destroy',
						value: function () {
							this.$statusbar.off(), this.$statusbar.addClass('locked');
						}
					}
				]),
				(e = Yt),
				Zt(Qt.prototype, [
					{
						key: 'resizeTo',
						value: function (t) {
							this.$editable.css('height', t.h),
								this.$codable.css('height', t.h),
								this.$codable.data('cmeditor') && this.$codable.data('cmeditor').setsize(null, t.h);
						}
					},
					{
						key: 'toggle',
						value: function () {
							this.$editor.toggleClass('fullscreen');
							var t = this.isFullscreen();
							this.$scrollbar.toggleClass(this.scrollbarClassName, t),
								t
									? (this.$editable.data('orgHeight', this.$editable.css('height')),
										this.$editable.data('orgMaxHeight', this.$editable.css('maxHeight')),
										this.$editable.css('maxHeight', ''),
										this.$window.on('resize', this.onResize).trigger('resize'))
									: (this.$window.off('resize', this.onResize),
										this.resizeTo({ h: this.$editable.data('orgHeight') }),
										this.$editable.css('maxHeight', this.$editable.css('orgMaxHeight'))),
								this.context.invoke('toolbar.updateFullscreen', t);
						}
					},
					{
						key: 'isFullscreen',
						value: function () {
							return this.$editor.hasClass('fullscreen');
						}
					},
					{
						key: 'destroy',
						value: function () {
							this.$scrollbar.removeClass(this.scrollbarClassName);
						}
					}
				]),
				(o = Qt),
				Xt(te.prototype, [
					{
						key: 'initialize',
						value: function () {
							var r = this;
							(this.$handle = w()(
								[
									'<div class="note-handle">',
									'<div class="note-control-selection">',
									'<div class="note-control-selection-bg"></div>',
									'<div class="note-control-holder note-control-nw"></div>',
									'<div class="note-control-holder note-control-ne"></div>',
									'<div class="note-control-holder note-control-sw"></div>',
									'<div class="',
									this.options.disableResizeImage ? 'note-control-holder' : 'note-control-sizing',
									' note-control-se"></div>',
									this.options.disableResizeImage
										? ''
										: '<div class="note-control-selection-info"></div>',
									'</div>',
									'</div>'
								].join('')
							).prependTo(this.$editingArea)),
								this.$handle.on('mousedown', function (t) {
									var e, o, n, i;
									A.isControlSizing(t.target) &&
										(t.preventDefault(),
										t.stopPropagation(),
										(e = r.$handle.find('.note-control-selection').data('target')),
										(o = e.offset()),
										(n = r.$document.scrollTop()),
										r.$document
											.on(
												'mousemove',
												(i = function (t) {
													r.context.invoke(
														'editor.resizeTo',
														{ x: t.clientX - o.left, y: t.clientY - (o.top - n) },
														e,
														!t.shiftKey
													),
														r.update(e[0], t);
												})
											)
											.one('mouseup', function (t) {
												t.preventDefault(),
													r.$document.off('mousemove', i),
													r.context.invoke('editor.afterCommand');
											}),
										e.data('ratio') || e.data('ratio', e.height() / e.width()));
								}),
								this.$handle.on('wheel', function (t) {
									t.preventDefault(), r.update();
								});
						}
					},
					{
						key: 'destroy',
						value: function () {
							this.$handle.remove();
						}
					},
					{
						key: 'update',
						value: function (t, e) {
							var o, n, i, r;
							return (
								!this.context.isDisabled() &&
								((o = A.isImg(t)),
								(n = this.$handle.find('.note-control-selection')),
								this.context.invoke('imagePopover.update', t, e),
								o
									? ((r = {
											left: (r = (e = w()(t)).position()).left + parseInt(e.css('marginLeft'), 10),
											top: r.top + parseInt(e.css('marginTop'), 10)
										}),
										(i = { w: e.outerWidth(!1), h: e.outerHeight(!1) }),
										n
											.css({ display: 'block', left: r.left, top: r.top, width: i.w, height: i.h })
											.data('target', e),
										((r = new Image()).src = e.attr('src')),
										(e =
											i.w +
											'x' +
											i.h +
											' (' +
											this.lang.image.original +
											': ' +
											r.width +
											'x' +
											r.height +
											')'),
										n.find('.note-control-selection-info').text(e),
										this.context.invoke('editor.saveTarget', t))
									: this.hide(),
								o)
							);
						}
					},
					{
						key: 'hide',
						value: function () {
							this.context.invoke('editor.clearTarget'), this.$handle.children().hide();
						}
					}
				]);
			var Jt = te;
			function te(t) {
				var o = this;
				if (!(this instanceof te)) throw new TypeError('Cannot call a class as a function');
				(this.context = t),
					(this.$document = w()(document)),
					(this.$editingArea = t.layoutInfo.editingArea),
					(this.options = t.options),
					(this.lang = this.options.langInfo),
					(this.events = {
						'summernote.mousedown': function (t, e) {
							o.update(e.target, e) && e.preventDefault();
						},
						'summernote.keyup summernote.scroll summernote.change summernote.dialog.shown':
							function () {
								o.update();
							},
						'summernote.disable summernote.blur': function () {
							o.hide();
						},
						'summernote.codeview.toggled': function () {
							o.update();
						}
					});
			}
			function ee(t, e) {
				for (var o = 0; o < e.length; o++) {
					var n = e[o];
					(n.enumerable = n.enumerable || !1),
						(n.configurable = !0),
						'value' in n && (n.writable = !0),
						Object.defineProperty(t, n.key, n);
				}
			}
			var oe =
					/^([A-Za-z][A-Za-z0-9+-.]*\:[\/]{2}|tel:|mailto:[A-Z0-9._%+-]+@|xmpp:[A-Z0-9._%+-]+@)?(www\.)?(.+)$/i,
				ne =
					(ee(ie.prototype, [
						{
							key: 'initialize',
							value: function () {
								this.lastWordRange = null;
							}
						},
						{
							key: 'destroy',
							value: function () {
								this.lastWordRange = null;
							}
						},
						{
							key: 'replace',
							value: function () {
								var t, e;
								this.lastWordRange &&
									(t = (e = this.lastWordRange.toString()).match(oe)) &&
									(t[1] || t[2]) &&
									((t = t[1] ? e : 'http://' + e),
									(e = this.options.showDomainOnlyForAutolink
										? e
												.replace(
													/^(?:https?:\/\/)?(?:tel?:?)?(?:mailto?:?)?(?:xmpp?:?)?(?:www\.)?/i,
													''
												)
												.split('/')[0]
										: e),
									(e = w()('<a></a>').html(e).attr('href', t)[0]),
									this.context.options.linkTargetBlank && w()(e).attr('target', '_blank'),
									this.lastWordRange.insertNode(e),
									(this.lastWordRange = null),
									this.context.invoke('editor.focus'));
							}
						},
						{
							key: 'handleKeydown',
							value: function (t) {
								L.contains([D.code.ENTER, D.code.SPACE], t.keyCode) &&
									((t = this.context.invoke('editor.createRange').getWordRange()),
									(this.lastWordRange = t));
							}
						},
						{
							key: 'handleKeyup',
							value: function (t) {
								L.contains([D.code.ENTER, D.code.SPACE], t.keyCode) && this.replace();
							}
						}
					]),
					ie);
			function ie(t) {
				var o = this;
				if (!(this instanceof ie)) throw new TypeError('Cannot call a class as a function');
				(this.context = t),
					(this.options = t.options),
					(this.events = {
						'summernote.keyup': function (t, e) {
							e.isDefaultPrevented() || o.handleKeyup(e);
						},
						'summernote.keydown': function (t, e) {
							o.handleKeydown(e);
						}
					});
			}
			function re(t, e) {
				for (var o = 0; o < e.length; o++) {
					var n = e[o];
					(n.enumerable = n.enumerable || !1),
						(n.configurable = !0),
						'value' in n && (n.writable = !0),
						Object.defineProperty(t, n.key, n);
				}
			}
			re(se.prototype, [
				{
					key: 'shouldInitialize',
					value: function () {
						return A.isTextarea(this.$note[0]);
					}
				}
			]);
			var ae = se;
			function se(t) {
				var e = this;
				if (!(this instanceof se)) throw new TypeError('Cannot call a class as a function');
				(this.$note = t.layoutInfo.note),
					(this.events = {
						'summernote.change': function () {
							e.$note.val(t.invoke('code'));
						}
					});
			}
			function le(t, e) {
				for (var o = 0; o < e.length; o++) {
					var n = e[o];
					(n.enumerable = n.enumerable || !1),
						(n.configurable = !0),
						'value' in n && (n.writable = !0),
						Object.defineProperty(t, n.key, n);
				}
			}
			le(ue.prototype, [
				{
					key: 'shouldInitialize',
					value: function () {
						return !!this.options.match;
					}
				},
				{
					key: 'initialize',
					value: function () {
						this.lastWord = null;
					}
				},
				{
					key: 'destroy',
					value: function () {
						this.lastWord = null;
					}
				},
				{
					key: 'replace',
					value: function () {
						var o, t;
						this.lastWord &&
							((t = (o = this).lastWord.toString()),
							this.options.match(t, function (t) {
								var e;
								t &&
									((e = ''),
									'string' == typeof t
										? (e = A.createText(t))
										: t instanceof jQuery
											? (e = t[0])
											: t instanceof Node && (e = t),
									e) &&
									(o.lastWord.insertNode(e), (o.lastWord = null), o.context.invoke('editor.focus'));
							}));
					}
				},
				{
					key: 'handleKeydown',
					value: function (t) {
						var e;
						(this.previousKeydownCode && L.contains(this.keys, this.previousKeydownCode)) ||
							(L.contains(this.keys, t.keyCode) &&
								((e = this.context.invoke('editor.createRange').getWordRange()),
								(this.lastWord = e))),
							(this.previousKeydownCode = t.keyCode);
					}
				},
				{
					key: 'handleKeyup',
					value: function (t) {
						L.contains(this.keys, t.keyCode) && this.replace();
					}
				}
			]);
			var ce = ue;
			function ue(t) {
				var o = this;
				if (!(this instanceof ue)) throw new TypeError('Cannot call a class as a function');
				(this.context = t),
					(this.options = t.options.replace || {}),
					(this.keys = [
						D.code.ENTER,
						D.code.SPACE,
						D.code.PERIOD,
						D.code.COMMA,
						D.code.SEMICOLON,
						D.code.SLASH
					]),
					(this.previousKeydownCode = null),
					(this.events = {
						'summernote.keyup': function (t, e) {
							e.isDefaultPrevented() || o.handleKeyup(e);
						},
						'summernote.keydown': function (t, e) {
							o.handleKeydown(e);
						}
					});
			}
			function de(t, e) {
				for (var o = 0; o < e.length; o++) {
					var n = e[o];
					(n.enumerable = n.enumerable || !1),
						(n.configurable = !0),
						'value' in n && (n.writable = !0),
						Object.defineProperty(t, n.key, n);
				}
			}
			de(fe.prototype, [
				{
					key: 'shouldInitialize',
					value: function () {
						return !!this.options.placeholder;
					}
				},
				{
					key: 'initialize',
					value: function () {
						var t = this;
						(this.$placeholder = w()('<div class="note-placeholder"></div>')),
							this.$placeholder
								.on('click', function () {
									t.context.invoke('focus');
								})
								.html(this.options.placeholder)
								.prependTo(this.$editingArea),
							this.update();
					}
				},
				{
					key: 'destroy',
					value: function () {
						this.$placeholder.remove();
					}
				},
				{
					key: 'update',
					value: function () {
						var t =
							!this.context.invoke('codeview.isActivated') && this.context.invoke('editor.isEmpty');
						this.$placeholder.toggle(t);
					}
				}
			]);
			var he = fe;
			function fe(t) {
				var e = this;
				if (!(this instanceof fe)) throw new TypeError('Cannot call a class as a function');
				(this.context = t),
					(this.$editingArea = t.layoutInfo.editingArea),
					(this.options = t.options),
					!0 === this.options.inheritPlaceholder &&
						(this.options.placeholder =
							this.context.$note.attr('placeholder') || this.options.placeholder),
					(this.events = {
						'summernote.init summernote.change': function () {
							e.update();
						},
						'summernote.codeview.toggled': function () {
							e.update();
						}
					});
			}
			function pe(t, e) {
				for (var o = 0; o < e.length; o++) {
					var n = e[o];
					(n.enumerable = n.enumerable || !1),
						(n.configurable = !0),
						'value' in n && (n.writable = !0),
						Object.defineProperty(t, n.key, n);
				}
			}
			pe(ve.prototype, [
				{
					key: 'representShortcut',
					value: function (t) {
						t = this.invertedKeyMap[t];
						return this.options.shortcuts && t
							? ' (' +
									(t = P.isMac ? t.replace('CMD', '⌘').replace('SHIFT', '⇧') : t)
										.replace('BACKSLASH', '\\')
										.replace('SLASH', '/')
										.replace('LEFTBRACKET', '[')
										.replace('RIGHTBRACKET', ']') +
									')'
							: '';
					}
				},
				{
					key: 'button',
					value: function (t) {
						return (
							!this.options.tooltip && t.tooltip && delete t.tooltip,
							(t.container = this.options.container),
							this.ui.button(t)
						);
					}
				},
				{
					key: 'initialize',
					value: function () {
						this.addToolbarButtons(),
							this.addImagePopoverButtons(),
							this.addLinkPopoverButtons(),
							this.addTablePopoverButtons(),
							(this.fontInstalledMap = {});
					}
				},
				{
					key: 'destroy',
					value: function () {
						delete this.fontInstalledMap;
					}
				},
				{
					key: 'isFontInstalled',
					value: function (t) {
						return (
							Object.prototype.hasOwnProperty.call(this.fontInstalledMap, t) ||
								(this.fontInstalledMap[t] =
									P.isFontInstalled(t) || L.contains(this.options.fontNamesIgnoreCheck, t)),
							this.fontInstalledMap[t]
						);
					}
				},
				{
					key: 'isFontDeservedToAdd',
					value: function (t) {
						return (
							'' !== (t = t.toLowerCase()) &&
							this.isFontInstalled(t) &&
							-1 === P.genericFontFamilies.indexOf(t)
						);
					}
				},
				{
					key: 'colorPalette',
					value: function (s, t, o, n) {
						var l = this;
						return this.ui
							.buttonGroup({
								className: 'note-color ' + s,
								children: [
									this.button({
										className: 'note-current-color-button',
										contents: this.ui.icon(this.options.icons.font + ' note-recent-color'),
										tooltip: t,
										click: function (t) {
											t = w()(t.currentTarget);
											o && n
												? l.context.invoke('editor.color', {
														backColor: t.attr('data-backColor'),
														foreColor: t.attr('data-foreColor')
													})
												: o
													? l.context.invoke('editor.color', {
															backColor: t.attr('data-backColor')
														})
													: n &&
														l.context.invoke('editor.color', {
															foreColor: t.attr('data-foreColor')
														});
										},
										callback: function (t) {
											var e = t.find('.note-recent-color');
											o &&
												(e.css('background-color', l.options.colorButton.backColor),
												t.attr('data-backColor', l.options.colorButton.backColor)),
												n
													? (e.css('color', l.options.colorButton.foreColor),
														t.attr('data-foreColor', l.options.colorButton.foreColor))
													: e.css('color', 'transparent');
										}
									}),
									this.button({
										className: 'dropdown-toggle',
										contents: this.ui.dropdownButtonContents('', this.options),
										tooltip: this.lang.color.more,
										data: { toggle: 'dropdown' }
									}),
									this.ui.dropdown({
										items:
											(o
												? [
														'<div class="note-palette">',
														'<div class="note-palette-title">' +
															this.lang.color.background +
															'</div>',
														'<div>',
														'<button type="button" class="note-color-reset btn btn-light btn-default" data-event="backColor" data-value="transparent">',
														this.lang.color.transparent,
														'</button>',
														'</div>',
														'<div class="note-holder" data-event="backColor">\x3c!-- back colors --\x3e</div>',
														'<div>',
														'<button type="button" class="note-color-select btn btn-light btn-default" data-event="openPalette" data-value="backColorPicker-' +
															this.options.id +
															'">',
														this.lang.color.cpSelect,
														'</button>',
														'<input type="color" id="backColorPicker-' +
															this.options.id +
															'" class="note-btn note-color-select-btn" value="' +
															this.options.colorButton.backColor +
															'" data-event="backColorPalette-' +
															this.options.id +
															'">',
														'</div>',
														'<div class="note-holder-custom" id="backColorPalette-' +
															this.options.id +
															'" data-event="backColor"></div>',
														'</div>'
													].join('')
												: '') +
											(n
												? [
														'<div class="note-palette">',
														'<div class="note-palette-title">' +
															this.lang.color.foreground +
															'</div>',
														'<div>',
														'<button type="button" class="note-color-reset btn btn-light btn-default" data-event="removeFormat" data-value="foreColor">',
														this.lang.color.resetToDefault,
														'</button>',
														'</div>',
														'<div class="note-holder" data-event="foreColor">\x3c!-- fore colors --\x3e</div>',
														'<div>',
														'<button type="button" class="note-color-select btn btn-light btn-default" data-event="openPalette" data-value="foreColorPicker-' +
															this.options.id +
															'">',
														this.lang.color.cpSelect,
														'</button>',
														'<input type="color" id="foreColorPicker-' +
															this.options.id +
															'" class="note-btn note-color-select-btn" value="' +
															this.options.colorButton.foreColor +
															'" data-event="foreColorPalette-' +
															this.options.id +
															'">',
														'</div>',
														'<div class="note-holder-custom" id="foreColorPalette-' +
															this.options.id +
															'" data-event="foreColor"></div>',
														'</div>'
													].join('')
												: ''),
										callback: function (o) {
											o.find('.note-holder').each(function (t, e) {
												e = w()(e);
												e.append(
													l.ui
														.palette({
															colors: l.options.colors,
															colorsName: l.options.colorsName,
															eventName: e.data('event'),
															container: l.options.container,
															tooltip: l.options.tooltip
														})
														.render()
												);
											});
											var n = [
												[
													'#FFFFFF',
													'#FFFFFF',
													'#FFFFFF',
													'#FFFFFF',
													'#FFFFFF',
													'#FFFFFF',
													'#FFFFFF',
													'#FFFFFF'
												]
											];
											o.find('.note-holder-custom').each(function (t, e) {
												e = w()(e);
												e.append(
													l.ui
														.palette({
															colors: n,
															colorsName: n,
															eventName: e.data('event'),
															container: l.options.container,
															tooltip: l.options.tooltip
														})
														.render()
												);
											}),
												o.find('input[type=color]').each(function (t, e) {
													w()(e).change(function () {
														var t = o
																.find('#' + w()(this).data('event'))
																.find('.note-color-btn')
																.first(),
															e = this.value.toUpperCase();
														t
															.css('background-color', e)
															.attr('aria-label', e)
															.attr('data-value', e)
															.attr('data-original-title', e),
															t.click();
													});
												});
										},
										click: function (t) {
											t.stopPropagation();
											var e,
												o,
												n,
												i = w()('.' + s).find('.note-dropdown-menu'),
												t = w()(t.target),
												r = t.data('event'),
												a = t.attr('data-value');
											'openPalette' === r
												? ((e = i.find('#' + a)),
													(n = (i = w()(i.find('#' + e.data('event')).find('.note-color-row')[0]))
														.find('.note-color-btn')
														.last()
														.detach()),
													(o = e.val()),
													n
														.css('background-color', o)
														.attr('aria-label', o)
														.attr('data-value', o)
														.attr('data-original-title', o),
													i.prepend(n),
													e.click())
												: (L.contains(['backColor', 'foreColor'], r) &&
														((o = 'backColor' === r ? 'background-color' : 'color'),
														(i = t.closest('.note-color').find('.note-recent-color')),
														(n = t.closest('.note-color').find('.note-current-color-button')),
														i.css(o, a),
														n.attr('data-' + r, a)),
													l.context.invoke('editor.' + r, a));
										}
									})
								]
							})
							.render();
					}
				},
				{
					key: 'addToolbarButtons',
					value: function () {
						var n = this;
						this.context.memo('button.style', function () {
							return n.ui
								.buttonGroup([
									n.button({
										className: 'dropdown-toggle',
										contents: n.ui.dropdownButtonContents(
											n.ui.icon(n.options.icons.magic),
											n.options
										),
										tooltip: n.lang.style.style,
										data: { toggle: 'dropdown' }
									}),
									n.ui.dropdown({
										className: 'dropdown-style',
										items: n.options.styleTags,
										title: n.lang.style.style,
										template: function (t) {
											var e = (t =
													'string' == typeof t
														? {
																tag: t,
																title: Object.prototype.hasOwnProperty.call(n.lang.style, t)
																	? n.lang.style[t]
																	: t
															}
														: t).tag,
												o = t.title;
											return (
												'<' +
												e +
												(t.style ? ' style="' + t.style + '" ' : '') +
												(t.className ? ' class="' + t.className + '"' : '') +
												'>' +
												o +
												'</' +
												e +
												'>'
											);
										},
										click: n.context.createInvokeHandler('editor.formatBlock')
									})
								])
								.render();
						});
						for (var t = 0, e = this.options.styleTags.length; t < e; t++)
							!(function (t) {
								var e = n.options.styleTags[t];
								n.context.memo('button.style.' + e, function () {
									return n
										.button({
											className: 'note-btn-style-' + e,
											contents: '<div data-value="' + e + '">' + e.toUpperCase() + '</div>',
											tooltip: n.lang.style[e],
											click: n.context.createInvokeHandler('editor.formatBlock')
										})
										.render();
								});
							})(t);
						this.context.memo('button.bold', function () {
							return n
								.button({
									className: 'note-btn-bold',
									contents: n.ui.icon(n.options.icons.bold),
									tooltip: n.lang.font.bold + n.representShortcut('bold'),
									click: n.context.createInvokeHandlerAndUpdateState('editor.bold')
								})
								.render();
						}),
							this.context.memo('button.italic', function () {
								return n
									.button({
										className: 'note-btn-italic',
										contents: n.ui.icon(n.options.icons.italic),
										tooltip: n.lang.font.italic + n.representShortcut('italic'),
										click: n.context.createInvokeHandlerAndUpdateState('editor.italic')
									})
									.render();
							}),
							this.context.memo('button.underline', function () {
								return n
									.button({
										className: 'note-btn-underline',
										contents: n.ui.icon(n.options.icons.underline),
										tooltip: n.lang.font.underline + n.representShortcut('underline'),
										click: n.context.createInvokeHandlerAndUpdateState('editor.underline')
									})
									.render();
							}),
							this.context.memo('button.clear', function () {
								return n
									.button({
										contents: n.ui.icon(n.options.icons.eraser),
										tooltip: n.lang.font.clear + n.representShortcut('removeFormat'),
										click: n.context.createInvokeHandler('editor.removeFormat')
									})
									.render();
							}),
							this.context.memo('button.strikethrough', function () {
								return n
									.button({
										className: 'note-btn-strikethrough',
										contents: n.ui.icon(n.options.icons.strikethrough),
										tooltip: n.lang.font.strikethrough + n.representShortcut('strikethrough'),
										click: n.context.createInvokeHandlerAndUpdateState('editor.strikethrough')
									})
									.render();
							}),
							this.context.memo('button.superscript', function () {
								return n
									.button({
										className: 'note-btn-superscript',
										contents: n.ui.icon(n.options.icons.superscript),
										tooltip: n.lang.font.superscript,
										click: n.context.createInvokeHandlerAndUpdateState('editor.superscript')
									})
									.render();
							}),
							this.context.memo('button.subscript', function () {
								return n
									.button({
										className: 'note-btn-subscript',
										contents: n.ui.icon(n.options.icons.subscript),
										tooltip: n.lang.font.subscript,
										click: n.context.createInvokeHandlerAndUpdateState('editor.subscript')
									})
									.render();
							}),
							this.context.memo('button.fontname', function () {
								var t = n.context.invoke('editor.currentStyle');
								return (
									n.options.addDefaultFonts &&
										w().each(t['font-family'].split(','), function (t, e) {
											(e = e.trim().replace(/['"]+/g, '')),
												n.isFontDeservedToAdd(e) &&
													-1 === n.options.fontNames.indexOf(e) &&
													n.options.fontNames.push(e);
										}),
									n.ui
										.buttonGroup([
											n.button({
												className: 'dropdown-toggle',
												contents: n.ui.dropdownButtonContents(
													'<span class="note-current-fontname"></span>',
													n.options
												),
												tooltip: n.lang.font.name,
												data: { toggle: 'dropdown' }
											}),
											n.ui.dropdownCheck({
												className: 'dropdown-fontname',
												checkClassName: n.options.icons.menuCheck,
												items: n.options.fontNames.filter(n.isFontInstalled.bind(n)),
												title: n.lang.font.name,
												template: function (t) {
													return (
														'<span style="font-family: ' + P.validFontName(t) + '">' + t + '</span>'
													);
												},
												click: n.context.createInvokeHandlerAndUpdateState('editor.fontName')
											})
										])
										.render()
								);
							}),
							this.context.memo('button.fontsize', function () {
								return n.ui
									.buttonGroup([
										n.button({
											className: 'dropdown-toggle',
											contents: n.ui.dropdownButtonContents(
												'<span class="note-current-fontsize"></span>',
												n.options
											),
											tooltip: n.lang.font.size,
											data: { toggle: 'dropdown' }
										}),
										n.ui.dropdownCheck({
											className: 'dropdown-fontsize',
											checkClassName: n.options.icons.menuCheck,
											items: n.options.fontSizes,
											title: n.lang.font.size,
											click: n.context.createInvokeHandlerAndUpdateState('editor.fontSize')
										})
									])
									.render();
							}),
							this.context.memo('button.fontsizeunit', function () {
								return n.ui
									.buttonGroup([
										n.button({
											className: 'dropdown-toggle',
											contents: n.ui.dropdownButtonContents(
												'<span class="note-current-fontsizeunit"></span>',
												n.options
											),
											tooltip: n.lang.font.sizeunit,
											data: { toggle: 'dropdown' }
										}),
										n.ui.dropdownCheck({
											className: 'dropdown-fontsizeunit',
											checkClassName: n.options.icons.menuCheck,
											items: n.options.fontSizeUnits,
											title: n.lang.font.sizeunit,
											click: n.context.createInvokeHandlerAndUpdateState('editor.fontSizeUnit')
										})
									])
									.render();
							}),
							this.context.memo('button.color', function () {
								return n.colorPalette('note-color-all', n.lang.color.recent, !0, !0);
							}),
							this.context.memo('button.forecolor', function () {
								return n.colorPalette('note-color-fore', n.lang.color.foreground, !1, !0);
							}),
							this.context.memo('button.backcolor', function () {
								return n.colorPalette('note-color-back', n.lang.color.background, !0, !1);
							}),
							this.context.memo('button.ul', function () {
								return n
									.button({
										contents: n.ui.icon(n.options.icons.unorderedlist),
										tooltip: n.lang.lists.unordered + n.representShortcut('insertUnorderedList'),
										click: n.context.createInvokeHandler('editor.insertUnorderedList')
									})
									.render();
							}),
							this.context.memo('button.ol', function () {
								return n
									.button({
										contents: n.ui.icon(n.options.icons.orderedlist),
										tooltip: n.lang.lists.ordered + n.representShortcut('insertOrderedList'),
										click: n.context.createInvokeHandler('editor.insertOrderedList')
									})
									.render();
							});
						var o = this.button({
								contents: this.ui.icon(this.options.icons.alignLeft),
								tooltip: this.lang.paragraph.left + this.representShortcut('justifyLeft'),
								click: this.context.createInvokeHandler('editor.justifyLeft')
							}),
							i = this.button({
								contents: this.ui.icon(this.options.icons.alignCenter),
								tooltip: this.lang.paragraph.center + this.representShortcut('justifyCenter'),
								click: this.context.createInvokeHandler('editor.justifyCenter')
							}),
							r = this.button({
								contents: this.ui.icon(this.options.icons.alignRight),
								tooltip: this.lang.paragraph.right + this.representShortcut('justifyRight'),
								click: this.context.createInvokeHandler('editor.justifyRight')
							}),
							a = this.button({
								contents: this.ui.icon(this.options.icons.alignJustify),
								tooltip: this.lang.paragraph.justify + this.representShortcut('justifyFull'),
								click: this.context.createInvokeHandler('editor.justifyFull')
							}),
							s = this.button({
								contents: this.ui.icon(this.options.icons.outdent),
								tooltip: this.lang.paragraph.outdent + this.representShortcut('outdent'),
								click: this.context.createInvokeHandler('editor.outdent')
							}),
							l = this.button({
								contents: this.ui.icon(this.options.icons.indent),
								tooltip: this.lang.paragraph.indent + this.representShortcut('indent'),
								click: this.context.createInvokeHandler('editor.indent')
							});
						this.context.memo('button.justifyLeft', R.invoke(o, 'render')),
							this.context.memo('button.justifyCenter', R.invoke(i, 'render')),
							this.context.memo('button.justifyRight', R.invoke(r, 'render')),
							this.context.memo('button.justifyFull', R.invoke(a, 'render')),
							this.context.memo('button.outdent', R.invoke(s, 'render')),
							this.context.memo('button.indent', R.invoke(l, 'render')),
							this.context.memo('button.paragraph', function () {
								return n.ui
									.buttonGroup([
										n.button({
											className: 'dropdown-toggle',
											contents: n.ui.dropdownButtonContents(
												n.ui.icon(n.options.icons.alignLeft),
												n.options
											),
											tooltip: n.lang.paragraph.paragraph,
											data: { toggle: 'dropdown' }
										}),
										n.ui.dropdown([
											n.ui.buttonGroup({ className: 'note-align', children: [o, i, r, a] }),
											n.ui.buttonGroup({ className: 'note-list', children: [s, l] })
										])
									])
									.render();
							}),
							this.context.memo('button.height', function () {
								return n.ui
									.buttonGroup([
										n.button({
											className: 'dropdown-toggle',
											contents: n.ui.dropdownButtonContents(
												n.ui.icon(n.options.icons.textHeight),
												n.options
											),
											tooltip: n.lang.font.height,
											data: { toggle: 'dropdown' }
										}),
										n.ui.dropdownCheck({
											items: n.options.lineHeights,
											checkClassName: n.options.icons.menuCheck,
											className: 'dropdown-line-height',
											title: n.lang.font.height,
											click: n.context.createInvokeHandler('editor.lineHeight')
										})
									])
									.render();
							}),
							this.context.memo('button.table', function () {
								return n.ui
									.buttonGroup(
										[
											n.button({
												className: 'dropdown-toggle',
												contents: n.ui.dropdownButtonContents(
													n.ui.icon(n.options.icons.table),
													n.options
												),
												tooltip: n.lang.table.table,
												data: { toggle: 'dropdown' }
											}),
											n.ui.dropdown({
												title: n.lang.table.table,
												className: 'note-table',
												items: [
													'<div class="note-dimension-picker">',
													'<div class="note-dimension-picker-mousecatcher" data-event="insertTable" data-value="1x1"></div>',
													'<div class="note-dimension-picker-highlighted"></div>',
													'<div class="note-dimension-picker-unhighlighted"></div>',
													'</div>',
													'<div class="note-dimension-display">1 x 1</div>'
												].join('')
											})
										],
										{
											callback: function (t) {
												t.find('.note-dimension-picker-mousecatcher')
													.css({
														width: n.options.insertTableMaxSize.col + 'em',
														height: n.options.insertTableMaxSize.row + 'em'
													})
													.mouseup(n.context.createInvokeHandler('editor.insertTable'))
													.on('mousemove', n.tableMoveHandler.bind(n));
											}
										}
									)
									.render();
							}),
							this.context.memo('button.link', function () {
								return n
									.button({
										contents: n.ui.icon(n.options.icons.link),
										tooltip: n.lang.link.link + n.representShortcut('linkDialog.show'),
										click: n.context.createInvokeHandler('linkDialog.show')
									})
									.render();
							}),
							this.context.memo('button.picture', function () {
								return n
									.button({
										contents: n.ui.icon(n.options.icons.picture),
										tooltip: n.lang.image.image,
										click: n.context.createInvokeHandler('imageDialog.show')
									})
									.render();
							}),
							this.context.memo('button.video', function () {
								return n
									.button({
										contents: n.ui.icon(n.options.icons.video),
										tooltip: n.lang.video.video,
										click: n.context.createInvokeHandler('videoDialog.show')
									})
									.render();
							}),
							this.context.memo('button.hr', function () {
								return n
									.button({
										contents: n.ui.icon(n.options.icons.minus),
										tooltip: n.lang.hr.insert + n.representShortcut('insertHorizontalRule'),
										click: n.context.createInvokeHandler('editor.insertHorizontalRule')
									})
									.render();
							}),
							this.context.memo('button.fullscreen', function () {
								return n
									.button({
										className: 'btn-fullscreen note-codeview-keep',
										contents: n.ui.icon(n.options.icons.arrowsAlt),
										tooltip: n.lang.options.fullscreen,
										click: n.context.createInvokeHandler('fullscreen.toggle')
									})
									.render();
							}),
							this.context.memo('button.codeview', function () {
								return n
									.button({
										className: 'btn-codeview note-codeview-keep',
										contents: n.ui.icon(n.options.icons.code),
										tooltip: n.lang.options.codeview,
										click: n.context.createInvokeHandler('codeview.toggle')
									})
									.render();
							}),
							this.context.memo('button.redo', function () {
								return n
									.button({
										contents: n.ui.icon(n.options.icons.redo),
										tooltip: n.lang.history.redo + n.representShortcut('redo'),
										click: n.context.createInvokeHandler('editor.redo')
									})
									.render();
							}),
							this.context.memo('button.undo', function () {
								return n
									.button({
										contents: n.ui.icon(n.options.icons.undo),
										tooltip: n.lang.history.undo + n.representShortcut('undo'),
										click: n.context.createInvokeHandler('editor.undo')
									})
									.render();
							}),
							this.context.memo('button.help', function () {
								return n
									.button({
										contents: n.ui.icon(n.options.icons.question),
										tooltip: n.lang.options.help,
										click: n.context.createInvokeHandler('helpDialog.show')
									})
									.render();
							});
					}
				},
				{
					key: 'addImagePopoverButtons',
					value: function () {
						var t = this;
						this.context.memo('button.resizeFull', function () {
							return t
								.button({
									contents: '<span class="note-fontsize-10">100%</span>',
									tooltip: t.lang.image.resizeFull,
									click: t.context.createInvokeHandler('editor.resize', '1')
								})
								.render();
						}),
							this.context.memo('button.resizeHalf', function () {
								return t
									.button({
										contents: '<span class="note-fontsize-10">50%</span>',
										tooltip: t.lang.image.resizeHalf,
										click: t.context.createInvokeHandler('editor.resize', '0.5')
									})
									.render();
							}),
							this.context.memo('button.resizeQuarter', function () {
								return t
									.button({
										contents: '<span class="note-fontsize-10">25%</span>',
										tooltip: t.lang.image.resizeQuarter,
										click: t.context.createInvokeHandler('editor.resize', '0.25')
									})
									.render();
							}),
							this.context.memo('button.resizeNone', function () {
								return t
									.button({
										contents: t.ui.icon(t.options.icons.rollback),
										tooltip: t.lang.image.resizeNone,
										click: t.context.createInvokeHandler('editor.resize', '0')
									})
									.render();
							}),
							this.context.memo('button.floatLeft', function () {
								return t
									.button({
										contents: t.ui.icon(t.options.icons.floatLeft),
										tooltip: t.lang.image.floatLeft,
										click: t.context.createInvokeHandler('editor.floatMe', 'left')
									})
									.render();
							}),
							this.context.memo('button.floatRight', function () {
								return t
									.button({
										contents: t.ui.icon(t.options.icons.floatRight),
										tooltip: t.lang.image.floatRight,
										click: t.context.createInvokeHandler('editor.floatMe', 'right')
									})
									.render();
							}),
							this.context.memo('button.floatNone', function () {
								return t
									.button({
										contents: t.ui.icon(t.options.icons.rollback),
										tooltip: t.lang.image.floatNone,
										click: t.context.createInvokeHandler('editor.floatMe', 'none')
									})
									.render();
							}),
							this.context.memo('button.removeMedia', function () {
								return t
									.button({
										contents: t.ui.icon(t.options.icons.trash),
										tooltip: t.lang.image.remove,
										click: t.context.createInvokeHandler('editor.removeMedia')
									})
									.render();
							});
					}
				},
				{
					key: 'addLinkPopoverButtons',
					value: function () {
						var t = this;
						this.context.memo('button.linkDialogShow', function () {
							return t
								.button({
									contents: t.ui.icon(t.options.icons.link),
									tooltip: t.lang.link.edit,
									click: t.context.createInvokeHandler('linkDialog.show')
								})
								.render();
						}),
							this.context.memo('button.unlink', function () {
								return t
									.button({
										contents: t.ui.icon(t.options.icons.unlink),
										tooltip: t.lang.link.unlink,
										click: t.context.createInvokeHandler('editor.unlink')
									})
									.render();
							});
					}
				},
				{
					key: 'addTablePopoverButtons',
					value: function () {
						var t = this;
						this.context.memo('button.addRowUp', function () {
							return t
								.button({
									className: 'btn-md',
									contents: t.ui.icon(t.options.icons.rowAbove),
									tooltip: t.lang.table.addRowAbove,
									click: t.context.createInvokeHandler('editor.addRow', 'top')
								})
								.render();
						}),
							this.context.memo('button.addRowDown', function () {
								return t
									.button({
										className: 'btn-md',
										contents: t.ui.icon(t.options.icons.rowBelow),
										tooltip: t.lang.table.addRowBelow,
										click: t.context.createInvokeHandler('editor.addRow', 'bottom')
									})
									.render();
							}),
							this.context.memo('button.addColLeft', function () {
								return t
									.button({
										className: 'btn-md',
										contents: t.ui.icon(t.options.icons.colBefore),
										tooltip: t.lang.table.addColLeft,
										click: t.context.createInvokeHandler('editor.addCol', 'left')
									})
									.render();
							}),
							this.context.memo('button.addColRight', function () {
								return t
									.button({
										className: 'btn-md',
										contents: t.ui.icon(t.options.icons.colAfter),
										tooltip: t.lang.table.addColRight,
										click: t.context.createInvokeHandler('editor.addCol', 'right')
									})
									.render();
							}),
							this.context.memo('button.deleteRow', function () {
								return t
									.button({
										className: 'btn-md',
										contents: t.ui.icon(t.options.icons.rowRemove),
										tooltip: t.lang.table.delRow,
										click: t.context.createInvokeHandler('editor.deleteRow')
									})
									.render();
							}),
							this.context.memo('button.deleteCol', function () {
								return t
									.button({
										className: 'btn-md',
										contents: t.ui.icon(t.options.icons.colRemove),
										tooltip: t.lang.table.delCol,
										click: t.context.createInvokeHandler('editor.deleteCol')
									})
									.render();
							}),
							this.context.memo('button.deleteTable', function () {
								return t
									.button({
										className: 'btn-md',
										contents: t.ui.icon(t.options.icons.trash),
										tooltip: t.lang.table.delTable,
										click: t.context.createInvokeHandler('editor.deleteTable')
									})
									.render();
							});
					}
				},
				{
					key: 'build',
					value: function (t, e) {
						for (var o = 0, n = e.length; o < n; o++) {
							for (
								var i = e[o],
									r = Array.isArray(i) ? i[0] : i,
									a = Array.isArray(i) ? (1 === i.length ? [i[0]] : i[1]) : [i],
									s = this.ui.buttonGroup({ className: 'note-' + r }).render(),
									l = 0,
									c = a.length;
								l < c;
								l++
							) {
								var u = this.context.memo('button.' + a[l]);
								u && s.append('function' == typeof u ? u(this.context) : u);
							}
							s.appendTo(t);
						}
					}
				},
				{
					key: 'updateCurrentStyle',
					value: function (t) {
						var e,
							n,
							i,
							r,
							a,
							t = t || this.$toolbar,
							o = this.context.invoke('editor.currentStyle');
						this.updateBtnStates(t, {
							'.note-btn-bold': function () {
								return 'bold' === o['font-bold'];
							},
							'.note-btn-italic': function () {
								return 'italic' === o['font-italic'];
							},
							'.note-btn-underline': function () {
								return 'underline' === o['font-underline'];
							},
							'.note-btn-subscript': function () {
								return 'subscript' === o['font-subscript'];
							},
							'.note-btn-superscript': function () {
								return 'superscript' === o['font-superscript'];
							},
							'.note-btn-strikethrough': function () {
								return 'strikethrough' === o['font-strikethrough'];
							}
						}),
							o['font-family'] &&
								((e = o['font-family'].split(',').map(function (t) {
									return t
										.replace(/[\'\"]/g, '')
										.replace(/\s+$/, '')
										.replace(/^\s+/, '');
								})),
								(n = L.find(e, this.isFontInstalled.bind(this))),
								t.find('.dropdown-fontname a').each(function (t, e) {
									var e = w()(e),
										o = e.data('value') + '' == n + '';
									e.toggleClass('checked', o);
								}),
								t.find('.note-current-fontname').text(n).css('font-family', n)),
							o['font-size'] &&
								((i = o['font-size']),
								t.find('.dropdown-fontsize a').each(function (t, e) {
									var e = w()(e),
										o = e.data('value') + '' == i + '';
									e.toggleClass('checked', o);
								}),
								t.find('.note-current-fontsize').text(i),
								(r = o['font-size-unit']),
								t.find('.dropdown-fontsizeunit a').each(function (t, e) {
									var e = w()(e),
										o = e.data('value') + '' == r + '';
									e.toggleClass('checked', o);
								}),
								t.find('.note-current-fontsizeunit').text(r)),
							o['line-height'] &&
								((a = o['line-height']),
								t.find('.dropdown-line-height a').each(function (t, e) {
									var o = w()(e),
										e = w()(e).data('value') + '' == a + '';
									o.toggleClass('checked', e);
								}),
								t.find('.note-current-line-height').text(a));
					}
				},
				{
					key: 'updateBtnStates',
					value: function (o, t) {
						var n = this;
						w().each(t, function (t, e) {
							n.ui.toggleBtnActive(o.find(t), e());
						});
					}
				},
				{
					key: 'tableMoveHandler',
					value: function (t) {
						var e = w()(t.target.parentNode),
							o = e.next(),
							n = e.find('.note-dimension-picker-mousecatcher'),
							i = e.find('.note-dimension-picker-highlighted'),
							e = e.find('.note-dimension-picker-unhighlighted'),
							t =
								((r =
									void 0 === t.offsetX
										? ((r = w()(t.target).offset()), { x: t.pageX - r.left, y: t.pageY - r.top })
										: { x: t.offsetX, y: t.offsetY }),
								Math.ceil(r.x / 18) || 1),
							r = Math.ceil(r.y / 18) || 1;
						i.css({ width: t + 'em', height: r + 'em' }),
							n.data('value', t + 'x' + r),
							3 < t && t < this.options.insertTableMaxSize.col && e.css({ width: t + 1 + 'em' }),
							3 < r && r < this.options.insertTableMaxSize.row && e.css({ height: r + 1 + 'em' }),
							o.html(t + ' x ' + r);
					}
				}
			]);
			var me = ve;
			function ve(t) {
				if (!(this instanceof ve)) throw new TypeError('Cannot call a class as a function');
				(this.ui = w().summernote.ui),
					(this.context = t),
					(this.$toolbar = t.layoutInfo.toolbar),
					(this.options = t.options),
					(this.lang = this.options.langInfo),
					(this.invertedKeyMap = R.invertObject(this.options.keyMap[P.isMac ? 'mac' : 'pc']));
			}
			function ge(t, e) {
				for (var o = 0; o < e.length; o++) {
					var n = e[o];
					(n.enumerable = n.enumerable || !1),
						(n.configurable = !0),
						'value' in n && (n.writable = !0),
						Object.defineProperty(t, n.key, n);
				}
			}
			ge(ye.prototype, [
				{
					key: 'shouldInitialize',
					value: function () {
						return !this.options.airMode;
					}
				},
				{
					key: 'initialize',
					value: function () {
						var t = this;
						(this.options.toolbar = this.options.toolbar || []),
							this.options.toolbar.length
								? this.context.invoke('buttons.build', this.$toolbar, this.options.toolbar)
								: this.$toolbar.hide(),
							this.options.toolbarContainer &&
								this.$toolbar.appendTo(this.options.toolbarContainer),
							this.changeContainer(!1),
							this.$note.on('summernote.keyup summernote.mouseup summernote.change', function () {
								t.context.invoke('buttons.updateCurrentStyle');
							}),
							this.context.invoke('buttons.updateCurrentStyle'),
							this.options.followingToolbar && this.$window.on('scroll resize', this.followScroll);
					}
				},
				{
					key: 'destroy',
					value: function () {
						this.$toolbar.children().remove(),
							this.options.followingToolbar && this.$window.off('scroll resize', this.followScroll);
					}
				},
				{
					key: 'followScroll',
					value: function () {
						if (this.$editor.hasClass('fullscreen')) return !1;
						var t = this.$editor.outerHeight(),
							e = this.$editor.width(),
							o = this.$toolbar.height(),
							n = this.$statusbar.height(),
							i = 0,
							r =
								(this.options.otherStaticBar &&
									(i = w()(this.options.otherStaticBar).outerHeight()),
								this.$document.scrollTop()),
							a = this.$editor.offset().top,
							s = a - i,
							a = a + t - i - o - n;
						!this.isFollowing && s < r && r < a - o
							? ((this.isFollowing = !0),
								this.$editable.css({ marginTop: this.$toolbar.outerHeight() }),
								this.$toolbar.css({ position: 'fixed', top: i, width: e, zIndex: 1e3 }))
							: this.isFollowing &&
								(r < s || a < r) &&
								((this.isFollowing = !1),
								this.$toolbar.css({ position: 'relative', top: 0, width: '100%', zIndex: 'auto' }),
								this.$editable.css({ marginTop: '' }));
					}
				},
				{
					key: 'changeContainer',
					value: function (t) {
						t
							? this.$toolbar.prependTo(this.$editor)
							: this.options.toolbarContainer &&
								this.$toolbar.appendTo(this.options.toolbarContainer),
							this.options.followingToolbar && this.followScroll();
					}
				},
				{
					key: 'updateFullscreen',
					value: function (t) {
						this.ui.toggleBtnActive(this.$toolbar.find('.btn-fullscreen'), t),
							this.changeContainer(t);
					}
				},
				{
					key: 'updateCodeview',
					value: function (t) {
						this.ui.toggleBtnActive(this.$toolbar.find('.btn-codeview'), t),
							t ? this.deactivate() : this.activate();
					}
				},
				{
					key: 'activate',
					value: function (t) {
						var e = this.$toolbar.find('button');
						t || (e = e.not('.note-codeview-keep')), this.ui.toggleBtn(e, !0);
					}
				},
				{
					key: 'deactivate',
					value: function (t) {
						var e = this.$toolbar.find('button');
						t || (e = e.not('.note-codeview-keep')), this.ui.toggleBtn(e, !1);
					}
				}
			]);
			var be = ye;
			function ye(t) {
				if (!(this instanceof ye)) throw new TypeError('Cannot call a class as a function');
				(this.context = t),
					(this.$window = w()(window)),
					(this.$document = w()(document)),
					(this.ui = w().summernote.ui),
					(this.$note = t.layoutInfo.note),
					(this.$editor = t.layoutInfo.editor),
					(this.$toolbar = t.layoutInfo.toolbar),
					(this.$editable = t.layoutInfo.editable),
					(this.$statusbar = t.layoutInfo.statusbar),
					(this.options = t.options),
					(this.isFollowing = !1),
					(this.followScroll = this.followScroll.bind(this));
			}
			function ke(t, e) {
				for (var o = 0; o < e.length; o++) {
					var n = e[o];
					(n.enumerable = n.enumerable || !1),
						(n.configurable = !0),
						'value' in n && (n.writable = !0),
						Object.defineProperty(t, n.key, n);
				}
			}
			ke(Ce.prototype, [
				{
					key: 'initialize',
					value: function () {
						var t = this.options.dialogsInBody ? this.$body : this.options.container,
							e = [
								'<div class="form-group note-form-group">',
								'<label for="note-dialog-link-txt-'
									.concat(this.options.id, '" class="note-form-label">')
									.concat(this.lang.link.textToDisplay, '</label>'),
								'<input id="note-dialog-link-txt-'.concat(
									this.options.id,
									'" class="note-link-text form-control note-form-control note-input" type="text"/>'
								),
								'</div>',
								'<div class="form-group note-form-group">',
								'<label for="note-dialog-link-url-'
									.concat(this.options.id, '" class="note-form-label">')
									.concat(this.lang.link.url, '</label>'),
								'<input id="note-dialog-link-url-'.concat(
									this.options.id,
									'" class="note-link-url form-control note-form-control note-input" type="text" value="http://"/>'
								),
								'</div>',
								this.options.disableLinkTarget
									? ''
									: w()('<div></div>')
											.append(
												this.ui
													.checkbox({
														className: 'sn-checkbox-open-in-new-window',
														text: this.lang.link.openInNewWindow,
														checked: !0
													})
													.render()
											)
											.html(),
								w()('<div></div>')
									.append(
										this.ui
											.checkbox({
												className: 'sn-checkbox-use-protocol',
												text: this.lang.link.useProtocol,
												checked: !0
											})
											.render()
									)
									.html()
							].join(''),
							o = '<input type="button" href="#" class="'
								.concat('btn btn-primary note-btn note-btn-primary note-link-btn', '" value="')
								.concat(this.lang.link.insert, '" disabled>');
						this.$dialog = this.ui
							.dialog({
								className: 'link-dialog',
								title: this.lang.link.insert,
								fade: this.options.dialogsFade,
								body: e,
								footer: o
							})
							.render()
							.appendTo(t);
					}
				},
				{
					key: 'destroy',
					value: function () {
						this.ui.hideDialog(this.$dialog), this.$dialog.remove();
					}
				},
				{
					key: 'bindEnterKey',
					value: function (t, e) {
						t.on('keypress', function (t) {
							t.keyCode === D.code.ENTER && (t.preventDefault(), e.trigger('click'));
						});
					}
				},
				{
					key: 'toggleLinkBtn',
					value: function (t, e, o) {
						this.ui.toggleBtn(t, e.val() && o.val());
					}
				},
				{
					key: 'showLinkDialog',
					value: function (s) {
						var l = this;
						return w()
							.Deferred(function (e) {
								var o = l.$dialog.find('.note-link-text'),
									n = l.$dialog.find('.note-link-url'),
									i = l.$dialog.find('.note-link-btn'),
									r = l.$dialog.find('.sn-checkbox-open-in-new-window input[type=checkbox]'),
									a = l.$dialog.find('.sn-checkbox-use-protocol input[type=checkbox]');
								l.ui.onDialogShown(l.$dialog, function () {
									l.context.triggerEvent('dialog.shown'),
										!s.url && R.isValidUrl(s.text) && (s.url = s.text),
										o
											.on('input paste propertychange', function () {
												(s.text = o.val()), l.toggleLinkBtn(i, o, n);
											})
											.val(s.text),
										n
											.on('input paste propertychange', function () {
												s.text || o.val(n.val()), l.toggleLinkBtn(i, o, n);
											})
											.val(s.url),
										P.isSupportTouch || n.trigger('focus'),
										l.toggleLinkBtn(i, o, n),
										l.bindEnterKey(n, i),
										l.bindEnterKey(o, i);
									var t =
											void 0 !== s.isNewWindow ? s.isNewWindow : l.context.options.linkTargetBlank,
										t = (r.prop('checked', t), !s.url && l.context.options.useProtocol);
									a.prop('checked', t),
										i.one('click', function (t) {
											t.preventDefault(),
												e.resolve({
													range: s.range,
													url: n.val(),
													text: o.val(),
													isNewWindow: r.is(':checked'),
													checkProtocol: a.is(':checked')
												}),
												l.ui.hideDialog(l.$dialog);
										});
								}),
									l.ui.onDialogHidden(l.$dialog, function () {
										o.off(), n.off(), i.off(), 'pending' === e.state() && e.reject();
									}),
									l.ui.showDialog(l.$dialog);
							})
							.promise();
					}
				},
				{
					key: 'show',
					value: function () {
						var e = this,
							t = this.context.invoke('editor.getLinkInfo');
						this.context.invoke('editor.saveRange'),
							this.showLinkDialog(t)
								.then(function (t) {
									e.context.invoke('editor.restoreRange'), e.context.invoke('editor.createLink', t);
								})
								.fail(function () {
									e.context.invoke('editor.restoreRange');
								});
					}
				}
			]);
			var we = Ce;
			function Ce(t) {
				if (!(this instanceof Ce)) throw new TypeError('Cannot call a class as a function');
				(this.context = t),
					(this.ui = w().summernote.ui),
					(this.$body = w()(document.body)),
					(this.$editor = t.layoutInfo.editor),
					(this.options = t.options),
					(this.lang = this.options.langInfo),
					t.memo('help.linkDialog.show', this.options.langInfo.help['linkDialog.show']);
			}
			function xe(t, e) {
				for (var o = 0; o < e.length; o++) {
					var n = e[o];
					(n.enumerable = n.enumerable || !1),
						(n.configurable = !0),
						'value' in n && (n.writable = !0),
						Object.defineProperty(t, n.key, n);
				}
			}
			xe(Te.prototype, [
				{
					key: 'shouldInitialize',
					value: function () {
						return !L.isEmpty(this.options.popover.link);
					}
				},
				{
					key: 'initialize',
					value: function () {
						this.$popover = this.ui
							.popover({
								className: 'note-link-popover',
								callback: function (t) {
									t.find('.popover-content,.note-popover-content').prepend(
										'<span><a target="_blank"></a>&nbsp;</span>'
									);
								}
							})
							.render()
							.appendTo(this.options.container);
						var t = this.$popover.find('.popover-content,.note-popover-content');
						this.context.invoke('buttons.build', t, this.options.popover.link),
							this.$popover.on('mousedown', function (t) {
								t.preventDefault();
							});
					}
				},
				{
					key: 'destroy',
					value: function () {
						this.$popover.remove();
					}
				},
				{
					key: 'update',
					value: function () {
						var t, e;
						this.context.invoke('editor.hasFocus') &&
						(e = this.context.invoke('editor.getLastRange')).isCollapsed() &&
						e.isOnAnchor()
							? ((e = A.ancestor(e.sc, A.isAnchor)),
								(t = w()(e).attr('href')),
								this.$popover.find('a').attr('href', t).text(t),
								(t = A.posFromPlaceholder(e)),
								(e = w()(this.options.container).offset()),
								(t.top -= e.top),
								(t.left -= e.left),
								this.$popover.css({ display: 'block', left: t.left, top: t.top }))
							: this.hide();
					}
				},
				{
					key: 'hide',
					value: function () {
						this.$popover.hide();
					}
				}
			]);
			var Se = Te;
			function Te(t) {
				var o = this;
				if (!(this instanceof Te)) throw new TypeError('Cannot call a class as a function');
				(this.context = t),
					(this.ui = w().summernote.ui),
					(this.options = t.options),
					(this.events = {
						'summernote.keyup summernote.mouseup summernote.change summernote.scroll': function () {
							o.update();
						},
						'summernote.disable summernote.dialog.shown': function () {
							o.hide();
						},
						'summernote.blur': function (t, e) {
							(e.originalEvent &&
								e.originalEvent.relatedTarget &&
								o.$popover[0].contains(e.originalEvent.relatedTarget)) ||
								o.hide();
						}
					});
			}
			function Ee(t, e) {
				for (var o = 0; o < e.length; o++) {
					var n = e[o];
					(n.enumerable = n.enumerable || !1),
						(n.configurable = !0),
						'value' in n && (n.writable = !0),
						Object.defineProperty(t, n.key, n);
				}
			}
			Ee($e.prototype, [
				{
					key: 'initialize',
					value: function () {
						var t = '',
							e =
								(this.options.maximumImageFileSize &&
									((e = Math.floor(Math.log(this.options.maximumImageFileSize) / Math.log(1024))),
									(e =
										+(this.options.maximumImageFileSize / Math.pow(1024, e)).toFixed(2) +
										' ' +
										' KMGTP'[e] +
										'B'),
									(t = '<small>'.concat(this.lang.image.maximumFileSize + ' : ' + e, '</small>'))),
								this.options.dialogsInBody ? this.$body : this.options.container),
							t = [
								'<div class="form-group note-form-group note-group-select-from-files">',
								'<label for="note-dialog-image-file-' +
									this.options.id +
									'" class="note-form-label">' +
									this.lang.image.selectFromFiles +
									'</label>',
								'<input id="note-dialog-image-file-' +
									this.options.id +
									'" class="note-image-input form-control-file note-form-control note-input" ',
								' type="file" name="files" accept="' +
									this.options.acceptImageFileTypes +
									'" multiple="multiple"/>',
								t,
								'</div>',
								'<div class="form-group note-group-image-url">',
								'<label for="note-dialog-image-url-' +
									this.options.id +
									'" class="note-form-label">' +
									this.lang.image.url +
									'</label>',
								'<input id="note-dialog-image-url-' +
									this.options.id +
									'" class="note-image-url form-control note-form-control note-input" type="text"/>',
								'</div>'
							].join(''),
							o = '<input type="button" href="#" class="'
								.concat('btn btn-primary note-btn note-btn-primary note-image-btn', '" value="')
								.concat(this.lang.image.insert, '" disabled>');
						this.$dialog = this.ui
							.dialog({
								title: this.lang.image.insert,
								fade: this.options.dialogsFade,
								body: t,
								footer: o
							})
							.render()
							.appendTo(e);
					}
				},
				{
					key: 'destroy',
					value: function () {
						this.ui.hideDialog(this.$dialog), this.$dialog.remove();
					}
				},
				{
					key: 'bindEnterKey',
					value: function (t, e) {
						t.on('keypress', function (t) {
							t.keyCode === D.code.ENTER && (t.preventDefault(), e.trigger('click'));
						});
					}
				},
				{
					key: 'show',
					value: function () {
						var e = this;
						this.context.invoke('editor.saveRange'),
							this.showImageDialog()
								.then(function (t) {
									e.ui.hideDialog(e.$dialog),
										e.context.invoke('editor.restoreRange'),
										'string' == typeof t
											? e.options.callbacks.onImageLinkInsert
												? e.context.triggerEvent('image.link.insert', t)
												: e.context.invoke('editor.insertImage', t)
											: e.context.invoke('editor.insertImagesOrCallback', t);
								})
								.fail(function () {
									e.context.invoke('editor.restoreRange');
								});
					}
				},
				{
					key: 'showImageDialog',
					value: function () {
						var i = this;
						return w().Deferred(function (e) {
							var t = i.$dialog.find('.note-image-input'),
								o = i.$dialog.find('.note-image-url'),
								n = i.$dialog.find('.note-image-btn');
							i.ui.onDialogShown(i.$dialog, function () {
								i.context.triggerEvent('dialog.shown'),
									t.replaceWith(
										t
											.clone()
											.on('change', function (t) {
												e.resolve(t.target.files || t.target.value);
											})
											.val('')
									),
									o
										.on('input paste propertychange', function () {
											i.ui.toggleBtn(n, o.val());
										})
										.val(''),
									P.isSupportTouch || o.trigger('focus'),
									n.click(function (t) {
										t.preventDefault(), e.resolve(o.val());
									}),
									i.bindEnterKey(o, n);
							}),
								i.ui.onDialogHidden(i.$dialog, function () {
									t.off(), o.off(), n.off(), 'pending' === e.state() && e.reject();
								}),
								i.ui.showDialog(i.$dialog);
						});
					}
				}
			]);
			var Ie = $e;
			function $e(t) {
				if (!(this instanceof $e)) throw new TypeError('Cannot call a class as a function');
				(this.context = t),
					(this.ui = w().summernote.ui),
					(this.$body = w()(document.body)),
					(this.$editor = t.layoutInfo.editor),
					(this.options = t.options),
					(this.lang = this.options.langInfo);
			}
			function Ne(t, e) {
				for (var o = 0; o < e.length; o++) {
					var n = e[o];
					(n.enumerable = n.enumerable || !1),
						(n.configurable = !0),
						'value' in n && (n.writable = !0),
						Object.defineProperty(t, n.key, n);
				}
			}
			Ne(Re.prototype, [
				{
					key: 'shouldInitialize',
					value: function () {
						return !L.isEmpty(this.options.popover.image);
					}
				},
				{
					key: 'initialize',
					value: function () {
						this.$popover = this.ui
							.popover({ className: 'note-image-popover' })
							.render()
							.appendTo(this.options.container);
						var t = this.$popover.find('.popover-content,.note-popover-content');
						this.context.invoke('buttons.build', t, this.options.popover.image),
							this.$popover.on('mousedown', function (t) {
								t.preventDefault();
							});
					}
				},
				{
					key: 'destroy',
					value: function () {
						this.$popover.remove();
					}
				},
				{
					key: 'update',
					value: function (t, e) {
						var o, n;
						A.isImg(t)
							? ((t = w()(t).offset()),
								(o = w()(this.options.container).offset()),
								(n = {}),
								this.options.popatmouse ? ((n.left = e.pageX - 20), (n.top = e.pageY)) : (n = t),
								(n.top -= o.top),
								(n.left -= o.left),
								this.$popover.css({ display: 'block', left: n.left, top: n.top }))
							: this.hide();
					}
				},
				{
					key: 'hide',
					value: function () {
						this.$popover.hide();
					}
				}
			]);
			var Pe = Re;
			function Re(t) {
				var o = this;
				if (!(this instanceof Re)) throw new TypeError('Cannot call a class as a function');
				(this.context = t),
					(this.ui = w().summernote.ui),
					(this.editable = t.layoutInfo.editable[0]),
					(this.options = t.options),
					(this.events = {
						'summernote.disable summernote.dialog.shown': function () {
							o.hide();
						},
						'summernote.blur': function (t, e) {
							(e.originalEvent &&
								e.originalEvent.relatedTarget &&
								o.$popover[0].contains(e.originalEvent.relatedTarget)) ||
								o.hide();
						}
					});
			}
			function Le(t, e) {
				for (var o = 0; o < e.length; o++) {
					var n = e[o];
					(n.enumerable = n.enumerable || !1),
						(n.configurable = !0),
						'value' in n && (n.writable = !0),
						Object.defineProperty(t, n.key, n);
				}
			}
			Le(Fe.prototype, [
				{
					key: 'shouldInitialize',
					value: function () {
						return !L.isEmpty(this.options.popover.table);
					}
				},
				{
					key: 'initialize',
					value: function () {
						this.$popover = this.ui
							.popover({ className: 'note-table-popover' })
							.render()
							.appendTo(this.options.container);
						var t = this.$popover.find('.popover-content,.note-popover-content');
						this.context.invoke('buttons.build', t, this.options.popover.table),
							P.isFF && document.execCommand('enableInlineTableEditing', !1, !1),
							this.$popover.on('mousedown', function (t) {
								t.preventDefault();
							});
					}
				},
				{
					key: 'destroy',
					value: function () {
						this.$popover.remove();
					}
				},
				{
					key: 'update',
					value: function (t) {
						var e, o;
						return (
							!this.context.isDisabled() &&
							((e = A.isCell(t) || A.isCell(null == t ? void 0 : t.parentElement))
								? ((t = A.posFromPlaceholder(t)),
									(o = w()(this.options.container).offset()),
									(t.top -= o.top),
									(t.left -= o.left),
									this.$popover.css({ display: 'block', left: t.left, top: t.top }))
								: this.hide(),
							e)
						);
					}
				},
				{
					key: 'hide',
					value: function () {
						this.$popover.hide();
					}
				}
			]);
			var Ae = Fe;
			function Fe(t) {
				var o = this;
				if (!(this instanceof Fe)) throw new TypeError('Cannot call a class as a function');
				(this.context = t),
					(this.ui = w().summernote.ui),
					(this.options = t.options),
					(this.events = {
						'summernote.mousedown': function (t, e) {
							o.update(e.target);
						},
						'summernote.keyup summernote.scroll summernote.change': function () {
							o.update();
						},
						'summernote.disable summernote.dialog.shown': function () {
							o.hide();
						},
						'summernote.blur': function (t, e) {
							(e.originalEvent &&
								e.originalEvent.relatedTarget &&
								o.$popover[0].contains(e.originalEvent.relatedTarget)) ||
								o.hide();
						}
					});
			}
			function De(t, e) {
				for (var o = 0; o < e.length; o++) {
					var n = e[o];
					(n.enumerable = n.enumerable || !1),
						(n.configurable = !0),
						'value' in n && (n.writable = !0),
						Object.defineProperty(t, n.key, n);
				}
			}
			De(ze.prototype, [
				{
					key: 'initialize',
					value: function () {
						var t = this.options.dialogsInBody ? this.$body : this.options.container,
							e = [
								'<div class="form-group note-form-group row-fluid">',
								'<label for="note-dialog-video-url-'
									.concat(this.options.id, '" class="note-form-label">')
									.concat(this.lang.video.url, ' <small class="text-muted">')
									.concat(this.lang.video.providers, '</small></label>'),
								'<input id="note-dialog-video-url-'.concat(
									this.options.id,
									'" class="note-video-url form-control note-form-control note-input" type="text"/>'
								),
								'</div>'
							].join(''),
							o = '<input type="button" href="#" class="'
								.concat('btn btn-primary note-btn note-btn-primary note-video-btn', '" value="')
								.concat(this.lang.video.insert, '" disabled>');
						this.$dialog = this.ui
							.dialog({
								title: this.lang.video.insert,
								fade: this.options.dialogsFade,
								body: e,
								footer: o
							})
							.render()
							.appendTo(t);
					}
				},
				{
					key: 'destroy',
					value: function () {
						this.ui.hideDialog(this.$dialog), this.$dialog.remove();
					}
				},
				{
					key: 'bindEnterKey',
					value: function (t, e) {
						t.on('keypress', function (t) {
							t.keyCode === D.code.ENTER && (t.preventDefault(), e.trigger('click'));
						});
					}
				},
				{
					key: 'createVideoNode',
					value: function (t) {
						var e = t.match(
								/\/\/(?:(?:www|m)\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w|-]{11})(?:(?:[\?&]t=)(\S+))?$/
							),
							o = t.match(/(?:\.|\/\/)drive\.google\.com\/file\/d\/(.[a-zA-Z0-9_-]*)\/view/),
							n = t.match(/(?:www\.|\/\/)instagram\.com\/p\/(.[a-zA-Z0-9_-]*)/),
							i = t.match(/\/\/vine\.co\/v\/([a-zA-Z0-9]+)/),
							r = t.match(/\/\/(player\.)?vimeo\.com\/([a-z]*\/)*(\d+)[?]?.*/),
							a = t.match(/.+dailymotion.com\/(video|hub)\/([^_]+)[^#]*(#video=([^_&]+))?/),
							s = t.match(/\/\/v\.youku\.com\/v_show\/id_(\w+)=*\.html/),
							l = t.match(
								/\/\/(.*)\/videos\/watch\/([^?]*)(?:\?(?:start=(\w*))?(?:&stop=(\w*))?(?:&loop=([10]))?(?:&autoplay=([10]))?(?:&muted=([10]))?)?/
							),
							c = t.match(/\/\/v\.qq\.com.*?vid=(.+)/),
							u = t.match(/\/\/v\.qq\.com\/x?\/?(page|cover).*?\/([^\/]+)\.html\??.*/),
							d = t.match(/^.+.(mp4|m4v)$/),
							h = t.match(/^.+.(ogg|ogv)$/),
							f = t.match(/^.+.(webm)$/),
							p = t.match(/(?:www\.|\/\/)facebook\.com\/([^\/]+)\/videos\/([0-9]+)/);
						if (e && 11 === e[1].length) {
							var m = e[1],
								v = 0;
							if (void 0 !== e[2]) {
								var g = e[2].match(/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/);
								if (g)
									for (var b = [3600, 60, 1], y = 0, k = b.length; y < k; y++)
										v += void 0 !== g[y + 1] ? b[y] * parseInt(g[y + 1], 10) : 0;
							}
							m = w()('<iframe>')
								.attr('frameborder', 0)
								.attr('src', '//www.youtube.com/embed/' + m + (0 < v ? '?start=' + v : ''))
								.attr('width', '640')
								.attr('height', '360');
						} else if (o && o[0].length)
							m = w()('<iframe>')
								.attr('frameborder', 0)
								.attr('src', 'https://drive.google.com/file/d/' + o[1] + '/preview')
								.attr('width', '640')
								.attr('height', '480');
						else if (n && n[0].length)
							m = w()('<iframe>')
								.attr('frameborder', 0)
								.attr('src', 'https://instagram.com/p/' + n[1] + '/embed/')
								.attr('width', '612')
								.attr('height', '710')
								.attr('scrolling', 'no')
								.attr('allowtransparency', 'true');
						else if (i && i[0].length)
							m = w()('<iframe>')
								.attr('frameborder', 0)
								.attr('src', i[0] + '/embed/simple')
								.attr('width', '600')
								.attr('height', '600')
								.attr('class', 'vine-embed');
						else if (r && r[3].length)
							m = w()('<iframe webkitallowfullscreen mozallowfullscreen allowfullscreen>')
								.attr('frameborder', 0)
								.attr('src', '//player.vimeo.com/video/' + r[3])
								.attr('width', '640')
								.attr('height', '360');
						else if (a && a[2].length)
							m = w()('<iframe>')
								.attr('frameborder', 0)
								.attr('src', '//www.dailymotion.com/embed/video/' + a[2])
								.attr('width', '640')
								.attr('height', '360');
						else if (s && s[1].length)
							m = w()('<iframe webkitallowfullscreen mozallowfullscreen allowfullscreen>')
								.attr('frameborder', 0)
								.attr('height', '498')
								.attr('width', '510')
								.attr('src', '//player.youku.com/embed/' + s[1]);
						else if (l && l[0].length) {
							(e = 0),
								(o = ('undefined' !== l[2] && (e = l[2]), 0)),
								(n = ('undefined' !== l[3] && (o = l[3]), 0)),
								(i = ('undefined' !== l[4] && (n = l[4]), 0)),
								(r = ('undefined' !== l[5] && (i = l[5]), 0));
							'undefined' !== l[6] && (r = l[6]),
								(m = w()(
									'<iframe allowfullscreen sandbox="allow-same-origin allow-scripts allow-popups">'
								)
									.attr('frameborder', 0)
									.attr(
										'src',
										'//' +
											l[1] +
											'/videos/embed/' +
											l[2] +
											'?loop=' +
											n +
											'&autoplay=' +
											i +
											'&muted=' +
											r +
											(0 < e ? '&start=' + e : '') +
											(0 < o ? '&end=' + v : '')
									)
									.attr('width', '560')
									.attr('height', '315'));
						} else if ((c && c[1].length) || (u && u[2].length))
							(a = c && c[1].length ? c[1] : u[2]),
								(m = w()('<iframe webkitallowfullscreen mozallowfullscreen allowfullscreen>')
									.attr('frameborder', 0)
									.attr('height', '310')
									.attr('width', '500')
									.attr('src', 'https://v.qq.com/txp/iframe/player.html?vid=' + a + '&amp;auto=0'));
						else if (d || h || f)
							m = w()('<video controls>').attr('src', t).attr('width', '640').attr('height', '360');
						else {
							if (!p || !p[0].length) return !1;
							m = w()('<iframe>')
								.attr('frameborder', 0)
								.attr(
									'src',
									'https://www.facebook.com/plugins/video.php?href=' +
										encodeURIComponent(p[0]) +
										'&show_text=0&width=560'
								)
								.attr('width', '560')
								.attr('height', '301')
								.attr('scrolling', 'no')
								.attr('allowtransparency', 'true');
						}
						return m.addClass('note-video-clip'), m[0];
					}
				},
				{
					key: 'show',
					value: function () {
						var e = this,
							t = this.context.invoke('editor.getSelectedText');
						this.context.invoke('editor.saveRange'),
							this.showVideoDialog(t)
								.then(function (t) {
									e.ui.hideDialog(e.$dialog), e.context.invoke('editor.restoreRange');
									t = e.createVideoNode(t);
									t && e.context.invoke('editor.insertNode', t);
								})
								.fail(function () {
									e.context.invoke('editor.restoreRange');
								});
					}
				},
				{
					key: 'showVideoDialog',
					value: function () {
						var n = this;
						return w().Deferred(function (e) {
							var o = n.$dialog.find('.note-video-url'),
								t = n.$dialog.find('.note-video-btn');
							n.ui.onDialogShown(n.$dialog, function () {
								n.context.triggerEvent('dialog.shown'),
									o.on('input paste propertychange', function () {
										n.ui.toggleBtn(t, o.val());
									}),
									P.isSupportTouch || o.trigger('focus'),
									t.click(function (t) {
										t.preventDefault(), e.resolve(o.val());
									}),
									n.bindEnterKey(o, t);
							}),
								n.ui.onDialogHidden(n.$dialog, function () {
									o.off(), t.off(), 'pending' === e.state() && e.reject();
								}),
								n.ui.showDialog(n.$dialog);
						});
					}
				}
			]);
			var He = ze;
			function ze(t) {
				if (!(this instanceof ze)) throw new TypeError('Cannot call a class as a function');
				(this.context = t),
					(this.ui = w().summernote.ui),
					(this.$body = w()(document.body)),
					(this.$editor = t.layoutInfo.editor),
					(this.options = t.options),
					(this.lang = this.options.langInfo);
			}
			function Be(t, e) {
				for (var o = 0; o < e.length; o++) {
					var n = e[o];
					(n.enumerable = n.enumerable || !1),
						(n.configurable = !0),
						'value' in n && (n.writable = !0),
						Object.defineProperty(t, n.key, n);
				}
			}
			Be(Oe.prototype, [
				{
					key: 'initialize',
					value: function () {
						var t = this.options.dialogsInBody ? this.$body : this.options.container,
							e = [
								'<p class="text-center">',
								'<a href="http://summernote.org/" target="_blank" rel="noopener noreferrer">Summernote 0.8.20</a> · ',
								'<a href="https://github.com/summernote/summernote" target="_blank" rel="noopener noreferrer">Project</a> · ',
								'<a href="https://github.com/summernote/summernote/issues" target="_blank" rel="noopener noreferrer">Issues</a>',
								'</p>'
							].join('');
						this.$dialog = this.ui
							.dialog({
								title: this.lang.options.help,
								fade: this.options.dialogsFade,
								body: this.createShortcutList(),
								footer: e,
								callback: function (t) {
									t.find('.modal-body,.note-modal-body').css({
										'max-height': 300,
										overflow: 'scroll'
									});
								}
							})
							.render()
							.appendTo(t);
					}
				},
				{
					key: 'destroy',
					value: function () {
						this.ui.hideDialog(this.$dialog), this.$dialog.remove();
					}
				},
				{
					key: 'createShortcutList',
					value: function () {
						var n = this,
							i = this.options.keyMap[P.isMac ? 'mac' : 'pc'];
						return Object.keys(i)
							.map(function (t) {
								var e = i[t],
									o = w()('<div><div class="help-list-item"></div></div>');
								return (
									o
										.append(
											w()('<label><kbd>' + t + '</kdb></label>').css({
												width: 180,
												'margin-right': 10
											})
										)
										.append(w()('<span></span>').html(n.context.memo('help.' + e) || e)),
									o.html()
								);
							})
							.join('');
					}
				},
				{
					key: 'showHelpDialog',
					value: function () {
						var e = this;
						return w()
							.Deferred(function (t) {
								e.ui.onDialogShown(e.$dialog, function () {
									e.context.triggerEvent('dialog.shown'), t.resolve();
								}),
									e.ui.showDialog(e.$dialog);
							})
							.promise();
					}
				},
				{
					key: 'show',
					value: function () {
						var t = this;
						this.context.invoke('editor.saveRange'),
							this.showHelpDialog().then(function () {
								t.context.invoke('editor.restoreRange');
							});
					}
				}
			]);
			var Me = Oe;
			function Oe(t) {
				if (!(this instanceof Oe)) throw new TypeError('Cannot call a class as a function');
				(this.context = t),
					(this.ui = w().summernote.ui),
					(this.$body = w()(document.body)),
					(this.$editor = t.layoutInfo.editor),
					(this.options = t.options),
					(this.lang = this.options.langInfo);
			}
			function Ue(t, e) {
				for (var o = 0; o < e.length; o++) {
					var n = e[o];
					(n.enumerable = n.enumerable || !1),
						(n.configurable = !0),
						'value' in n && (n.writable = !0),
						Object.defineProperty(t, n.key, n);
				}
			}
			Ue(We.prototype, [
				{
					key: 'shouldInitialize',
					value: function () {
						return this.options.airMode && !L.isEmpty(this.options.popover.air);
					}
				},
				{
					key: 'initialize',
					value: function () {
						var t = this,
							e =
								((this.$popover = this.ui
									.popover({ className: 'note-air-popover' })
									.render()
									.appendTo(this.options.container)),
								this.$popover.find('.popover-content'));
						this.context.invoke('buttons.build', e, this.options.popover.air),
							this.$popover.on('mousedown', function () {
								t.hidable = !1;
							}),
							this.$popover.on('mouseup', function () {
								t.hidable = !0;
							});
					}
				},
				{
					key: 'destroy',
					value: function () {
						this.$popover.remove();
					}
				},
				{
					key: 'update',
					value: function (t) {
						var e = this.context.invoke('editor.currentStyle');
						!e.range || (e.range.isCollapsed() && !t)
							? this.hide()
							: ((e = { left: this.pageX, top: this.pageY }),
								(t = w()(this.options.container).offset()),
								(e.top -= t.top),
								(e.left -= t.left),
								this.$popover.css({
									display: 'block',
									left: Math.max(e.left, 0) + -5,
									top: e.top + 5
								}),
								this.context.invoke('buttons.updateCurrentStyle', this.$popover));
					}
				},
				{
					key: 'updateCodeview',
					value: function (t) {
						this.ui.toggleBtnActive(this.$popover.find('.btn-codeview'), t), t && this.hide();
					}
				},
				{
					key: 'hide',
					value: function () {
						this.hidable && this.$popover.hide();
					}
				}
			]);
			var je = We;
			function We(t) {
				var o = this;
				if (!(this instanceof We)) throw new TypeError('Cannot call a class as a function');
				(this.context = t),
					(this.ui = w().summernote.ui),
					(this.options = t.options),
					(this.hidable = !0),
					(this.onContextmenu = !1),
					(this.pageX = null),
					(this.pageY = null),
					(this.events = {
						'summernote.contextmenu': function (t) {
							o.options.editing &&
								(t.preventDefault(), t.stopPropagation(), (o.onContextmenu = !0), o.update(!0));
						},
						'summernote.mousedown': function (t, e) {
							(o.pageX = e.pageX), (o.pageY = e.pageY);
						},
						'summernote.keyup summernote.mouseup summernote.scroll': function (t, e) {
							o.options.editing &&
								!o.onContextmenu &&
								((o.pageX = e.pageX), (o.pageY = e.pageY), o.update()),
								(o.onContextmenu = !1);
						},
						'summernote.disable summernote.change summernote.dialog.shown summernote.blur':
							function () {
								o.hide();
							},
						'summernote.focusout': function () {
							o.$popover.is(':active,:focus') || o.hide();
						}
					});
			}
			function Ke(t, e) {
				for (var o = 0; o < e.length; o++) {
					var n = e[o];
					(n.enumerable = n.enumerable || !1),
						(n.configurable = !0),
						'value' in n && (n.writable = !0),
						Object.defineProperty(t, n.key, n);
				}
			}
			Ke(qe.prototype, [
				{
					key: 'shouldInitialize',
					value: function () {
						return 0 < this.hints.length;
					}
				},
				{
					key: 'initialize',
					value: function () {
						var e = this;
						(this.lastWordRange = null),
							(this.matchingWord = null),
							(this.$popover = this.ui
								.popover({ className: 'note-hint-popover', hideArrow: !0, direction: '' })
								.render()
								.appendTo(this.options.container)),
							this.$popover.hide(),
							(this.$content = this.$popover.find('.popover-content,.note-popover-content')),
							this.$content.on('click', '.note-hint-item', function (t) {
								e.$content.find('.active').removeClass('active'),
									w()(t.currentTarget).addClass('active'),
									e.replace();
							}),
							this.$popover.on('mousedown', function (t) {
								t.preventDefault();
							});
					}
				},
				{
					key: 'destroy',
					value: function () {
						this.$popover.remove();
					}
				},
				{
					key: 'selectItem',
					value: function (t) {
						this.$content.find('.active').removeClass('active'),
							t.addClass('active'),
							(this.$content[0].scrollTop = t[0].offsetTop - this.$content.innerHeight() / 2);
					}
				},
				{
					key: 'moveDown',
					value: function () {
						var t = this.$content.find('.note-hint-item.active'),
							e = t.next();
						e.length
							? this.selectItem(e)
							: ((e = t.parent().next()).length ||
									(e = this.$content.find('.note-hint-group').first()),
								this.selectItem(e.find('.note-hint-item').first()));
					}
				},
				{
					key: 'moveUp',
					value: function () {
						var t = this.$content.find('.note-hint-item.active'),
							e = t.prev();
						e.length
							? this.selectItem(e)
							: ((e = t.parent().prev()).length ||
									(e = this.$content.find('.note-hint-group').last()),
								this.selectItem(e.find('.note-hint-item').last()));
					}
				},
				{
					key: 'replace',
					value: function () {
						var t,
							e = this.$content.find('.note-hint-item.active');
						e.length &&
							((e = this.nodeFromItem(e)),
							null !== this.matchingWord && 0 === this.matchingWord.length
								? (this.lastWordRange.so = this.lastWordRange.eo)
								: null !== this.matchingWord &&
									0 < this.matchingWord.length &&
									!this.lastWordRange.isCollapsed() &&
									0 <
										(t =
											this.lastWordRange.eo - this.lastWordRange.so - this.matchingWord.length) &&
									(this.lastWordRange.so += t),
							this.lastWordRange.insertNode(e),
							('next' === this.options.hintSelect
								? ((t = document.createTextNode('')), w()(e).after(t), F.createFromNodeBefore(t))
								: F.createFromNodeAfter(e)
							).select(),
							(this.lastWordRange = null),
							this.hide(),
							this.context.invoke('editor.focus'),
							this.context.triggerEvent('change', this.$editable.html(), this.$editable));
					}
				},
				{
					key: 'nodeFromItem',
					value: function (t) {
						var e = this.hints[t.data('index')],
							t = t.data('item'),
							e = e.content ? e.content(t) : t;
						return (e = 'string' == typeof e ? A.createText(e) : e);
					}
				},
				{
					key: 'createItemTemplates',
					value: function (o, t) {
						var n = this.hints[o];
						return t.map(function (t) {
							var e = w()('<div class="note-hint-item"></div>');
							return (
								e.append(n.template ? n.template(t) : t + ''), e.data({ index: o, item: t }), e
							);
						});
					}
				},
				{
					key: 'handleKeydown',
					value: function (t) {
						this.$popover.is(':visible') &&
							(t.keyCode === D.code.ENTER
								? (t.preventDefault(), this.replace())
								: t.keyCode === D.code.UP
									? (t.preventDefault(), this.moveUp())
									: t.keyCode === D.code.DOWN && (t.preventDefault(), this.moveDown()));
					}
				},
				{
					key: 'searchKeyword',
					value: function (t, e, o) {
						t = this.hints[t];
						t && t.match.test(e) && t.search
							? ((e = t.match.exec(e)), (this.matchingWord = e[0]), t.search(e[1], o))
							: o();
					}
				},
				{
					key: 'createGroup',
					value: function (e, t) {
						var o = this,
							n = w()('<div class="note-hint-group note-hint-group-' + e + '"></div>');
						return (
							this.searchKeyword(e, t, function (t) {
								(t = t || []).length && (n.html(o.createItemTemplates(e, t)), o.show());
							}),
							n
						);
					}
				},
				{
					key: 'handleKeyup',
					value: function (t) {
						var o = this;
						if (!L.contains([D.code.ENTER, D.code.UP, D.code.DOWN], t.keyCode)) {
							var e,
								n,
								i,
								r = this.context.invoke('editor.getLastRange');
							if ('words' === this.options.hintMode) {
								if (
									((e = r.getWordsRange(r)),
									(n = e.toString()),
									this.hints.forEach(function (t) {
										if (t.match.test(n)) return (e = r.getWordsMatchRange(t.match)), !1;
									}),
									!e)
								)
									return void this.hide();
							} else e = r.getWordRange();
							(n = e.toString()),
								this.hints.length && n
									? (this.$content.empty(),
										(t = R.rect2bnd(L.last(e.getClientRects()))),
										(i = w()(this.options.container).offset()),
										t &&
											((t.top -= i.top),
											(t.left -= i.left),
											this.$popover.hide(),
											(this.lastWordRange = e),
											this.hints.forEach(function (t, e) {
												t.match.test(n) && o.createGroup(e, n).appendTo(o.$content);
											}),
											this.$content.find('.note-hint-item:first').addClass('active'),
											'top' === this.direction
												? this.$popover.css({
														left: t.left,
														top: t.top - this.$popover.outerHeight() - 5
													})
												: this.$popover.css({ left: t.left, top: t.top + t.height + 5 })))
									: this.hide();
						}
					}
				},
				{
					key: 'show',
					value: function () {
						this.$popover.show();
					}
				},
				{
					key: 'hide',
					value: function () {
						this.$popover.hide();
					}
				}
			]);
			var Ve = qe;
			function qe(t) {
				var o = this;
				if (!(this instanceof qe)) throw new TypeError('Cannot call a class as a function');
				(this.context = t),
					(this.ui = w().summernote.ui),
					(this.$editable = t.layoutInfo.editable),
					(this.options = t.options),
					(this.hint = this.options.hint || []),
					(this.direction = this.options.hintDirection || 'bottom'),
					(this.hints = Array.isArray(this.hint) ? this.hint : [this.hint]),
					(this.events = {
						'summernote.keyup': function (t, e) {
							e.isDefaultPrevented() || o.handleKeyup(e);
						},
						'summernote.keydown': function (t, e) {
							o.handleKeydown(e);
						},
						'summernote.disable summernote.dialog.shown summernote.blur': function () {
							o.hide();
						}
					});
			}
			function _e(t) {
				return (_e =
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
			function Ge(t, e) {
				for (var o = 0; o < e.length; o++) {
					var n = e[o];
					(n.enumerable = n.enumerable || !1),
						(n.configurable = !0),
						'value' in n && (n.writable = !0),
						Object.defineProperty(t, n.key, n);
				}
			}
			(w().summernote = w().extend(w().summernote, {
				version: '0.8.20',
				plugins: {},
				dom: A,
				range: F,
				lists: L,
				options: {
					langInfo: w().summernote.lang['en-US'],
					editing: !0,
					modules: {
						editor: T,
						clipboard: i,
						dropzone: U,
						codeview: t,
						statusbar: e,
						fullscreen: o,
						handle: Jt,
						hintPopover: Ve,
						autoLink: ne,
						autoSync: ae,
						autoReplace: ce,
						placeholder: he,
						buttons: me,
						toolbar: be,
						linkDialog: we,
						linkPopover: Se,
						imageDialog: Ie,
						imagePopover: Pe,
						tablePopover: Ae,
						videoDialog: He,
						helpDialog: Me,
						airPopover: je
					},
					buttons: {},
					lang: 'en-US',
					followingToolbar: !1,
					toolbarPosition: 'top',
					otherStaticBar: '',
					codeviewKeepButton: !1,
					toolbar: [
						['style', ['style']],
						['font', ['bold', 'underline', 'clear']],
						['fontname', ['fontname']],
						['color', ['color']],
						['para', ['ul', 'ol', 'paragraph']],
						['table', ['table']],
						['insert', ['link', 'picture', 'video']],
						['view', ['fullscreen', 'codeview', 'help']]
					],
					popatmouse: !0,
					popover: {
						image: [
							['resize', ['resizeFull', 'resizeHalf', 'resizeQuarter', 'resizeNone']],
							['float', ['floatLeft', 'floatRight', 'floatNone']],
							['remove', ['removeMedia']]
						],
						link: [['link', ['linkDialogShow', 'unlink']]],
						table: [
							['add', ['addRowDown', 'addRowUp', 'addColLeft', 'addColRight']],
							['delete', ['deleteRow', 'deleteCol', 'deleteTable']]
						],
						air: [
							['color', ['color']],
							['font', ['bold', 'underline', 'clear']],
							['para', ['ul', 'paragraph']],
							['table', ['table']],
							['insert', ['link', 'picture']],
							['view', ['fullscreen', 'codeview']]
						]
					},
					airMode: !1,
					overrideContextMenu: !1,
					width: null,
					height: null,
					linkTargetBlank: !0,
					useProtocol: !0,
					defaultProtocol: 'http://',
					focus: !1,
					tabDisabled: !1,
					tabSize: 4,
					styleWithCSS: !1,
					shortcuts: !0,
					textareaAutoSync: !0,
					tooltip: 'auto',
					container: null,
					maxTextLength: 0,
					blockquoteBreakingLevel: 2,
					spellCheck: !0,
					disableGrammar: !1,
					placeholder: null,
					inheritPlaceholder: !1,
					recordEveryKeystroke: !1,
					historyLimit: 200,
					showDomainOnlyForAutolink: !1,
					hintMode: 'word',
					hintSelect: 'after',
					hintDirection: 'bottom',
					styleTags: ['p', 'blockquote', 'pre', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
					fontNames: [
						'Arial',
						'Arial Black',
						'Comic Sans MS',
						'Courier New',
						'Helvetica Neue',
						'Helvetica',
						'Impact',
						'Lucida Grande',
						'Tahoma',
						'Times New Roman',
						'Verdana'
					],
					fontNamesIgnoreCheck: [],
					addDefaultFonts: !0,
					fontSizes: ['8', '9', '10', '11', '12', '14', '18', '24', '36'],
					fontSizeUnits: ['px', 'pt'],
					colors: [
						[
							'#000000',
							'#424242',
							'#636363',
							'#9C9C94',
							'#CEC6CE',
							'#EFEFEF',
							'#F7F7F7',
							'#FFFFFF'
						],
						[
							'#FF0000',
							'#FF9C00',
							'#FFFF00',
							'#00FF00',
							'#00FFFF',
							'#0000FF',
							'#9C00FF',
							'#FF00FF'
						],
						[
							'#F7C6CE',
							'#FFE7CE',
							'#FFEFC6',
							'#D6EFD6',
							'#CEDEE7',
							'#CEE7F7',
							'#D6D6E7',
							'#E7D6DE'
						],
						[
							'#E79C9C',
							'#FFC69C',
							'#FFE79C',
							'#B5D6A5',
							'#A5C6CE',
							'#9CC6EF',
							'#B5A5D6',
							'#D6A5BD'
						],
						[
							'#E76363',
							'#F7AD6B',
							'#FFD663',
							'#94BD7B',
							'#73A5AD',
							'#6BADDE',
							'#8C7BC6',
							'#C67BA5'
						],
						[
							'#CE0000',
							'#E79439',
							'#EFC631',
							'#6BA54A',
							'#4A7B8C',
							'#3984C6',
							'#634AA5',
							'#A54A7B'
						],
						[
							'#9C0000',
							'#B56308',
							'#BD9400',
							'#397B21',
							'#104A5A',
							'#085294',
							'#311873',
							'#731842'
						],
						['#630000', '#7B3900', '#846300', '#295218', '#083139', '#003163', '#21104A', '#4A1031']
					],
					colorsName: [
						[
							'Black',
							'Tundora',
							'Dove Gray',
							'Star Dust',
							'Pale Slate',
							'Gallery',
							'Alabaster',
							'White'
						],
						['Red', 'Orange Peel', 'Yellow', 'Green', 'Cyan', 'Blue', 'Electric Violet', 'Magenta'],
						[
							'Azalea',
							'Karry',
							'Egg White',
							'Zanah',
							'Botticelli',
							'Tropical Blue',
							'Mischka',
							'Twilight'
						],
						[
							'Tonys Pink',
							'Peach Orange',
							'Cream Brulee',
							'Sprout',
							'Casper',
							'Perano',
							'Cold Purple',
							'Careys Pink'
						],
						[
							'Mandy',
							'Rajah',
							'Dandelion',
							'Olivine',
							'Gulf Stream',
							'Viking',
							'Blue Marguerite',
							'Puce'
						],
						[
							'Guardsman Red',
							'Fire Bush',
							'Golden Dream',
							'Chelsea Cucumber',
							'Smalt Blue',
							'Boston Blue',
							'Butterfly Bush',
							'Cadillac'
						],
						[
							'Sangria',
							'Mai Tai',
							'Buddha Gold',
							'Forest Green',
							'Eden',
							'Venice Blue',
							'Meteorite',
							'Claret'
						],
						[
							'Rosewood',
							'Cinnamon',
							'Olive',
							'Parsley',
							'Tiber',
							'Midnight Blue',
							'Valentino',
							'Loulou'
						]
					],
					colorButton: { foreColor: '#000000', backColor: '#FFFF00' },
					lineHeights: ['1.0', '1.2', '1.4', '1.5', '1.6', '1.8', '2.0', '3.0'],
					tableClassName: 'table table-bordered',
					insertTableMaxSize: { col: 10, row: 10 },
					dialogsInBody: !1,
					dialogsFade: !1,
					maximumImageFileSize: null,
					acceptImageFileTypes: 'image/*',
					callbacks: {
						onBeforeCommand: null,
						onBlur: null,
						onBlurCodeview: null,
						onChange: null,
						onChangeCodeview: null,
						onDialogShown: null,
						onEnter: null,
						onFocus: null,
						onImageLinkInsert: null,
						onImageUpload: null,
						onImageUploadError: null,
						onInit: null,
						onKeydown: null,
						onKeyup: null,
						onMousedown: null,
						onMouseup: null,
						onPaste: null,
						onScroll: null
					},
					codemirror: { mode: 'text/html', htmlMode: !0, lineNumbers: !0 },
					codeviewFilter: !0,
					codeviewFilterRegex:
						/<\/*(?:applet|b(?:ase|gsound|link)|embed|frame(?:set)?|ilayer|l(?:ayer|ink)|meta|object|s(?:cript|tyle)|t(?:itle|extarea)|xml)[^>]*?>/gi,
					codeviewIframeFilter: !0,
					codeviewIframeWhitelistSrc: [],
					codeviewIframeWhitelistSrcBase: [
						'www.youtube.com',
						'www.youtube-nocookie.com',
						'www.facebook.com',
						'vine.co',
						'instagram.com',
						'player.vimeo.com',
						'www.dailymotion.com',
						'player.youku.com',
						'jumpingbean.tv',
						'v.qq.com'
					],
					keyMap: {
						pc: {
							ESC: 'escape',
							ENTER: 'insertParagraph',
							'CTRL+Z': 'undo',
							'CTRL+Y': 'redo',
							TAB: 'tab',
							'SHIFT+TAB': 'untab',
							'CTRL+B': 'bold',
							'CTRL+I': 'italic',
							'CTRL+U': 'underline',
							'CTRL+SHIFT+S': 'strikethrough',
							'CTRL+BACKSLASH': 'removeFormat',
							'CTRL+SHIFT+L': 'justifyLeft',
							'CTRL+SHIFT+E': 'justifyCenter',
							'CTRL+SHIFT+R': 'justifyRight',
							'CTRL+SHIFT+J': 'justifyFull',
							'CTRL+SHIFT+NUM7': 'insertUnorderedList',
							'CTRL+SHIFT+NUM8': 'insertOrderedList',
							'CTRL+LEFTBRACKET': 'outdent',
							'CTRL+RIGHTBRACKET': 'indent',
							'CTRL+NUM0': 'formatPara',
							'CTRL+NUM1': 'formatH1',
							'CTRL+NUM2': 'formatH2',
							'CTRL+NUM3': 'formatH3',
							'CTRL+NUM4': 'formatH4',
							'CTRL+NUM5': 'formatH5',
							'CTRL+NUM6': 'formatH6',
							'CTRL+ENTER': 'insertHorizontalRule',
							'CTRL+K': 'linkDialog.show'
						},
						mac: {
							ESC: 'escape',
							ENTER: 'insertParagraph',
							'CMD+Z': 'undo',
							'CMD+SHIFT+Z': 'redo',
							TAB: 'tab',
							'SHIFT+TAB': 'untab',
							'CMD+B': 'bold',
							'CMD+I': 'italic',
							'CMD+U': 'underline',
							'CMD+SHIFT+S': 'strikethrough',
							'CMD+BACKSLASH': 'removeFormat',
							'CMD+SHIFT+L': 'justifyLeft',
							'CMD+SHIFT+E': 'justifyCenter',
							'CMD+SHIFT+R': 'justifyRight',
							'CMD+SHIFT+J': 'justifyFull',
							'CMD+SHIFT+NUM7': 'insertUnorderedList',
							'CMD+SHIFT+NUM8': 'insertOrderedList',
							'CMD+LEFTBRACKET': 'outdent',
							'CMD+RIGHTBRACKET': 'indent',
							'CMD+NUM0': 'formatPara',
							'CMD+NUM1': 'formatH1',
							'CMD+NUM2': 'formatH2',
							'CMD+NUM3': 'formatH3',
							'CMD+NUM4': 'formatH4',
							'CMD+NUM5': 'formatH5',
							'CMD+NUM6': 'formatH6',
							'CMD+ENTER': 'insertHorizontalRule',
							'CMD+K': 'linkDialog.show'
						}
					},
					icons: {
						align: 'note-icon-align',
						alignCenter: 'note-icon-align-center',
						alignJustify: 'note-icon-align-justify',
						alignLeft: 'note-icon-align-left',
						alignRight: 'note-icon-align-right',
						rowBelow: 'note-icon-row-below',
						colBefore: 'note-icon-col-before',
						colAfter: 'note-icon-col-after',
						rowAbove: 'note-icon-row-above',
						rowRemove: 'note-icon-row-remove',
						colRemove: 'note-icon-col-remove',
						indent: 'note-icon-align-indent',
						outdent: 'note-icon-align-outdent',
						arrowsAlt: 'note-icon-arrows-alt',
						bold: 'note-icon-bold',
						caret: 'note-icon-caret',
						circle: 'note-icon-circle',
						close: 'note-icon-close',
						code: 'note-icon-code',
						eraser: 'note-icon-eraser',
						floatLeft: 'note-icon-float-left',
						floatRight: 'note-icon-float-right',
						font: 'note-icon-font',
						frame: 'note-icon-frame',
						italic: 'note-icon-italic',
						link: 'note-icon-link',
						unlink: 'note-icon-chain-broken',
						magic: 'note-icon-magic',
						menuCheck: 'note-icon-menu-check',
						minus: 'note-icon-minus',
						orderedlist: 'note-icon-orderedlist',
						pencil: 'note-icon-pencil',
						picture: 'note-icon-picture',
						question: 'note-icon-question',
						redo: 'note-icon-redo',
						rollback: 'note-icon-rollback',
						square: 'note-icon-square',
						strikethrough: 'note-icon-strikethrough',
						subscript: 'note-icon-subscript',
						superscript: 'note-icon-superscript',
						table: 'note-icon-table',
						textHeight: 'note-icon-text-height',
						trash: 'note-icon-trash',
						underline: 'note-icon-underline',
						undo: 'note-icon-undo',
						unorderedlist: 'note-icon-unorderedlist',
						video: 'note-icon-video'
					}
				}
			})),
				Ge(Ze.prototype, [
					{
						key: 'render',
						value: function (t) {
							var e,
								o = w()(this.markup);
							return (
								this.options && this.options.contents && o.html(this.options.contents),
								this.options && this.options.className && o.addClass(this.options.className),
								this.options &&
									this.options.data &&
									w().each(this.options.data, function (t, e) {
										o.attr('data-' + t, e);
									}),
								this.options && this.options.click && o.on('click', this.options.click),
								this.children &&
									((e = o.find('.note-children-container')),
									this.children.forEach(function (t) {
										t.render(e.length ? e : o);
									})),
								this.callback && this.callback(o, this.options),
								this.options && this.options.callback && this.options.callback(o),
								t && t.append(o),
								o
							);
						}
					}
				]);
			var Ye = Ze;
			function Ze(t, e, o, n) {
				if (!(this instanceof Ze)) throw new TypeError('Cannot call a class as a function');
				(this.markup = t), (this.children = e), (this.options = o), (this.callback = n);
			}
			function I(o, n) {
				return function () {
					var t = 'object' === _e(arguments[1]) ? arguments[1] : arguments[0],
						e = Array.isArray(arguments[0]) ? arguments[0] : [];
					return t && t.children && (e = t.children), new Ye(o, e, t, n);
				};
			}
			function Qe(t) {
				return (Qe =
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
			function Xe(t, e) {
				return t + ' ' + ho(e.icons.caret, 'span');
			}
			var Je = I('<div class="note-editor note-frame panel panel-default"></div>'),
				to = I('<div class="panel-heading note-toolbar" role="toolbar"></div>'),
				$ = I('<div class="note-editing-area"></div>'),
				N = I('<textarea class="note-codable" aria-multiline="true"></textarea>'),
				eo = I(
					'<div class="note-editable" contentEditable="true" role="textbox" aria-multiline="true"></div>'
				),
				oo = I(
					[
						'<output class="note-status-output" role="status" aria-live="polite"></output>',
						'<div class="note-statusbar" role="status">',
						'<div class="note-resizebar" aria-label="Resize">',
						'<div class="note-icon-bar"></div>',
						'<div class="note-icon-bar"></div>',
						'<div class="note-icon-bar"></div>',
						'</div>',
						'</div>'
					].join('')
				),
				no = I('<div class="note-editor note-airframe"></div>'),
				io = I(
					[
						'<div class="note-editable" contentEditable="true" role="textbox" aria-multiline="true"></div>',
						'<output class="note-status-output" role="status" aria-live="polite"></output>'
					].join('')
				),
				ro = I('<div class="note-btn-group btn-group"></div>'),
				ao = I('<ul class="note-dropdown-menu dropdown-menu"></ul>', function (t, n) {
					var e = Array.isArray(n.items)
						? n.items
								.map(function (t) {
									var e = 'string' == typeof t ? t : t.value || '',
										o = n.template ? n.template(t) : t,
										t = 'object' === Qe(t) ? t.option : void 0;
									return (
										'<li aria-label="' +
										e +
										'"><a href="#" data-value="' +
										e +
										'"' +
										(void 0 !== t ? ' data-option="' + t + '"' : '') +
										'>' +
										o +
										'</a></li>'
									);
								})
								.join('')
						: n.items;
					t.html(e).attr({ 'aria-label': n.title }),
						n && n.codeviewKeepButton && t.addClass('note-codeview-keep');
				}),
				so = I('<ul class="note-dropdown-menu dropdown-menu note-check"></ul>', function (t, n) {
					var e = Array.isArray(n.items)
						? n.items
								.map(function (t) {
									var e = 'string' == typeof t ? t : t.value || '',
										o = n.template ? n.template(t) : t;
									return (
										'<li aria-label="' +
										t +
										'"><a href="#" data-value="' +
										e +
										'">' +
										ho(n.checkClassName) +
										' ' +
										o +
										'</a></li>'
									);
								})
								.join('')
						: n.items;
					t.html(e).attr({ 'aria-label': n.title }),
						n && n.codeviewKeepButton && t.addClass('note-codeview-keep');
				}),
				lo = I(
					'<div class="modal note-modal" aria-hidden="false" tabindex="-1" role="dialog"></div>',
					function (t, e) {
						e.fade && t.addClass('fade'),
							t.attr({ 'aria-label': e.title }),
							t.html(
								[
									'<div class="modal-dialog">',
									'<div class="modal-content">',
									e.title
										? '<div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close" aria-hidden="true">&times;</button><h4 class="modal-title">' +
											e.title +
											'</h4></div>'
										: '',
									'<div class="modal-body">' + e.body + '</div>',
									e.footer ? '<div class="modal-footer">' + e.footer + '</div>' : '',
									'</div>',
									'</div>'
								].join('')
							);
					}
				),
				co = I(
					[
						'<div class="note-popover popover in">',
						'<div class="arrow"></div>',
						'<div class="popover-content note-children-container"></div>',
						'</div>'
					].join(''),
					function (t, e) {
						var o = void 0 !== e.direction ? e.direction : 'bottom';
						t.addClass(o), e.hideArrow && t.find('.arrow').hide();
					}
				),
				uo = I('<div class="checkbox"></div>', function (t, e) {
					t.html(
						[
							'<label' + (e.id ? ' for="note-' + e.id + '"' : '') + '>',
							'<input type="checkbox"' + (e.id ? ' id="note-' + e.id + '"' : ''),
							e.checked ? ' checked' : '',
							' aria-checked="' + (e.checked ? 'true' : 'false') + '"/>',
							e.text || '',
							'</label>'
						].join('')
					);
				}),
				ho = function (t, e) {
					return t.match(/^</) ? t : '<' + (e = e || 'i') + ' class="' + t + '"></' + e + '>';
				};
			w().summernote = w().extend(w().summernote, {
				ui_template: function (f) {
					return {
						editor: Je,
						toolbar: to,
						editingArea: $,
						codable: N,
						editable: eo,
						statusbar: oo,
						airEditor: no,
						airEditable: io,
						buttonGroup: ro,
						dropdown: ao,
						dropdownButtonContents: Xe,
						dropdownCheck: so,
						dialog: lo,
						popover: co,
						checkbox: uo,
						icon: ho,
						options: f,
						palette: function (t, e) {
							return I('<div class="note-color-palette"></div>', function (t, e) {
								for (var o = [], n = 0, i = e.colors.length; n < i; n++) {
									for (
										var r = e.eventName,
											a = e.colors[n],
											s = e.colorsName[n],
											l = [],
											c = 0,
											u = a.length;
										c < u;
										c++
									) {
										var d = a[c],
											h = s[c];
										l.push(
											[
												'<button type="button" class="note-color-btn"',
												'style="background-color:',
												d,
												'" ',
												'data-event="',
												r,
												'" ',
												'data-value="',
												d,
												'" ',
												'title="',
												h,
												'" ',
												'aria-label="',
												h,
												'" ',
												'data-toggle="button" tabindex="-1"></button>'
											].join('')
										);
									}
									o.push('<div class="note-color-row">' + l.join('') + '</div>');
								}
								t.html(o.join('')),
									e.tooltip &&
										t.find('.note-color-btn').tooltip({
											container: e.container || f.container,
											trigger: 'hover',
											placement: 'bottom'
										});
							})(t, e);
						},
						button: function (t, e) {
							return I(
								'<button type="button" class="note-btn btn btn-default btn-sm" tabindex="-1"></button>',
								function (t, e) {
									e &&
										e.tooltip &&
										t
											.attr({ title: e.tooltip, 'aria-label': e.tooltip })
											.tooltip({
												container: e.container || f.container,
												trigger: 'hover',
												placement: 'bottom'
											})
											.on('click', function (t) {
												w()(t.currentTarget).tooltip('hide');
											}),
										e && e.codeviewButton && t.addClass('note-codeview-keep');
								}
							)(t, e);
						},
						toggleBtn: function (t, e) {
							t.toggleClass('disabled', !e), t.attr('disabled', !e);
						},
						toggleBtnActive: function (t, e) {
							t.toggleClass('active', e);
						},
						onDialogShown: function (t, e) {
							t.one('shown.bs.modal', e);
						},
						onDialogHidden: function (t, e) {
							t.one('hidden.bs.modal', e);
						},
						showDialog: function (t) {
							t.modal('show');
						},
						hideDialog: function (t) {
							t.modal('hide');
						},
						createLayout: function (t) {
							var e = (
								f.airMode
									? no([$([N(), io()])])
									: 'bottom' === f.toolbarPosition
										? Je([$([N(), eo()]), to(), oo()])
										: Je([to(), $([N(), eo()]), oo()])
							).render();
							return (
								e.insertAfter(t),
								{
									note: t,
									editor: e,
									toolbar: e.find('.note-toolbar'),
									editingArea: e.find('.note-editing-area'),
									editable: e.find('.note-editable'),
									codable: e.find('.note-codable'),
									statusbar: e.find('.note-statusbar')
								}
							);
						},
						removeLayout: function (t, e) {
							t.html(e.editable.html()), e.editor.remove(), t.show();
						}
					};
				},
				interface: 'bs3'
			});
		}
		return B;
	})();
});
