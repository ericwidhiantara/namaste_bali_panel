!(function (e, t) {
	'object' == typeof exports && 'object' == typeof module
		? (module.exports = t(
				require('prosemirror-inputrules'),
				require('prosemirror-keymap'),
				require('prosemirror-model'),
				require('prosemirror-state'),
				require('prosemirror-view')
			))
		: 'function' == typeof define && define.amd
			? define(
					[
						'prosemirror-inputrules',
						'prosemirror-keymap',
						'prosemirror-model',
						'prosemirror-state',
						'prosemirror-view'
					],
					t
				)
			: 'object' == typeof exports
				? (exports.toastui = t(
						require('prosemirror-inputrules'),
						require('prosemirror-keymap'),
						require('prosemirror-model'),
						require('prosemirror-state'),
						require('prosemirror-view')
					))
				: ((e.toastui = e.toastui || {}),
					(e.toastui.Editor = t(e[void 0], e[void 0], e[void 0], e[void 0], e[void 0])));
})(self, function (t, n, r, o, i) {
	return (
		(a = {
			368: function (e) {
				e.exports = (function () {
					'use strict';
					function r(e) {
						if (Array.isArray(e)) {
							for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
							return n;
						} else return Array.from(e);
					}
					var o = Object.hasOwnProperty,
						i = Object.setPrototypeOf,
						a = Object.isFrozen,
						s = Object.getPrototypeOf,
						l = Object.getOwnPropertyDescriptor,
						qe = Object.freeze,
						e = Object.seal,
						c = Object.create,
						t = typeof Reflect !== 'undefined' && Reflect,
						u = t.apply,
						p = t.construct;
					if (!u)
						u = function e(t, n, r) {
							return t.apply(n, r);
						};
					if (!qe)
						qe = function e(t) {
							return t;
						};
					if (!e)
						e = function e(t) {
							return t;
						};
					if (!p)
						p = function e(t, n) {
							return new (Function.prototype.bind.apply(t, [null].concat(r(n))))();
						};
					var je = d(Array.prototype.forEach),
						_e = d(Array.prototype.pop),
						ze = d(Array.prototype.push),
						Ue = d(String.prototype.toLowerCase),
						Ve = d(String.prototype.match),
						$e = d(String.prototype.replace),
						ct = d(String.prototype.indexOf),
						ut = d(String.prototype.trim),
						We = d(RegExp.prototype.test),
						Ge = n(TypeError);
					function d(o) {
						return function (e) {
							for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
								n[r - 1] = arguments[r];
							return u(o, e, n);
						};
					}
					function n(r) {
						return function () {
							for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
							return p(r, t);
						};
					}
					function Ze(e, t) {
						if (i) i(e, null);
						var n = t.length;
						while (n--) {
							var r = t[n];
							if (typeof r === 'string') {
								var o = Ue(r);
								if (o !== r) {
									if (!a(t)) t[n] = o;
									r = o;
								}
							}
							e[r] = true;
						}
						return e;
					}
					function Xe(e) {
						var t = c(null);
						var n = void 0;
						for (n in e) if (u(o, e, [n])) t[n] = e[n];
						return t;
					}
					function Ke(e, t) {
						while (e !== null) {
							var n = l(e, t);
							if (n) {
								if (n.get) return d(n.get);
								if (typeof n.value === 'function') return d(n.value);
							}
							e = s(e);
						}
						function r(e) {
							console.warn('fallback value for', e);
							return null;
						}
						return r;
					}
					var Qe = qe([
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
						Ye = qe([
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
						Je = qe([
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
						pt = qe([
							'animate',
							'color-profile',
							'cursor',
							'discard',
							'fedropshadow',
							'feimage',
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
						et = qe([
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
						dt = qe([
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
						tt = qe(['#text']),
						nt = qe([
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
						rt = qe([
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
						ot = qe([
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
						it = qe(['xlink:href', 'xml:id', 'xlink:title', 'xml:space', 'xmlns:xlink']),
						ft = e(/\{\{[\s\S]*|[\s\S]*\}\}/gm),
						ht = e(/<%[\s\S]*|[\s\S]*%>/gm),
						mt = e(/^data-[\-\w.\u00B7-\uFFFF]/),
						gt = e(/^aria-[\-\w]+$/),
						vt = e(
							/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
						),
						yt = e(/^(?:\w+script|data):/i),
						bt = e(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
						at =
							typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
								? function (e) {
										return typeof e;
									}
								: function (e) {
										return e &&
											typeof Symbol === 'function' &&
											e.constructor === Symbol &&
											e !== Symbol.prototype
											? 'symbol'
											: typeof e;
									};
					function st(e) {
						if (Array.isArray(e)) {
							for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
							return n;
						} else return Array.from(e);
					}
					var wt = function e() {
							return typeof window === 'undefined' ? null : window;
						},
						kt = function e(t, n) {
							if (
								(typeof t === 'undefined' ? 'undefined' : at(t)) !== 'object' ||
								typeof t.createPolicy !== 'function'
							)
								return null;
							var r = null;
							var o = 'data-tt-policy-suffix';
							if (n.currentScript && n.currentScript.hasAttribute(o))
								r = n.currentScript.getAttribute(o);
							var i = 'dompurify' + (r ? '#' + r : '');
							try {
								return t.createPolicy(i, {
									createHTML: function e(t) {
										return t;
									}
								});
							} catch (e) {
								console.warn('TrustedTypes policy ' + i + ' could not be created.');
								return null;
							}
						},
						f;
					function lt() {
						var c = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : wt();
						var d = function e(t) {
							return lt(t);
						};
						d.version = '2.3.3';
						d.removed = [];
						if (!c || !c.document || c.document.nodeType !== 9) {
							d.isSupported = false;
							return d;
						}
						var u = c.document;
						var s = c.document;
						var P = c.DocumentFragment,
							B = c.HTMLTemplateElement,
							p = c.Node,
							H = c.Element,
							n = c.NodeFilter,
							F = c.NamedNodeMap,
							q = F === undefined ? c.NamedNodeMap || c.MozNamedAttrMap : F,
							j = c.Text,
							_ = c.Comment,
							z = c.DOMParser,
							U = c.trustedTypes;
						var e = H.prototype;
						var V = Ke(e, 'cloneNode');
						var $ = Ke(e, 'nextSibling');
						var W = Ke(e, 'childNodes');
						var l = Ke(e, 'parentNode');
						if (typeof B === 'function') {
							var t = s.createElement('template');
							if (t.content && t.content.ownerDocument) s = t.content.ownerDocument;
						}
						var f = kt(U, u);
						var G = f && C ? f.createHTML('') : '';
						var r = s,
							h = r.implementation,
							Z = r.createNodeIterator,
							X = r.createDocumentFragment,
							K = r.getElementsByTagName;
						var Q = u.importNode;
						var Y = {};
						try {
							Y = Xe(s).documentMode ? s.documentMode : {};
						} catch (e) {}
						var o = {};
						d.isSupported =
							typeof l === 'function' &&
							h &&
							typeof h.createHTMLDocument !== 'undefined' &&
							Y !== 9;
						var m = ft,
							g = ht,
							J = mt,
							ee = gt,
							te = yt,
							ne = bt;
						var i = vt;
						var v = null;
						var re = Ze({}, [].concat(st(Qe), st(Ye), st(Je), st(et), st(tt)));
						var y = null;
						var oe = Ze({}, [].concat(st(nt), st(rt), st(ot), st(it)));
						var ie = null;
						var ae = null;
						var se = true;
						var le = true;
						var ce = false;
						var b = false;
						var w = false;
						var ue = false;
						var pe = false;
						var k = false;
						var x = false;
						var de = true;
						var C = false;
						var fe = true;
						var he = true;
						var T = false;
						var a = {};
						var E = null;
						var me = Ze({}, [
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
						]);
						var ge = null;
						var ve = Ze({}, ['audio', 'video', 'img', 'source', 'image', 'track']);
						var ye = null;
						var be = Ze({}, [
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
						]);
						var we = 'http://www.w3.org/1998/Math/MathML';
						var ke = 'http://www.w3.org/2000/svg';
						var L = 'http://www.w3.org/1999/xhtml';
						var M = L;
						var xe = false;
						var N = void 0;
						var Ce = ['application/xhtml+xml', 'text/html'];
						var Te = 'text/html';
						var A = void 0;
						var D = null;
						var Ee = s.createElement('form');
						var Le = function e(t) {
							if (D && D === t) return;
							if (!t || (typeof t === 'undefined' ? 'undefined' : at(t)) !== 'object') t = {};
							t = Xe(t);
							v = 'ALLOWED_TAGS' in t ? Ze({}, t.ALLOWED_TAGS) : re;
							y = 'ALLOWED_ATTR' in t ? Ze({}, t.ALLOWED_ATTR) : oe;
							ye = 'ADD_URI_SAFE_ATTR' in t ? Ze(Xe(be), t.ADD_URI_SAFE_ATTR) : be;
							ge = 'ADD_DATA_URI_TAGS' in t ? Ze(Xe(ve), t.ADD_DATA_URI_TAGS) : ve;
							E = 'FORBID_CONTENTS' in t ? Ze({}, t.FORBID_CONTENTS) : me;
							ie = 'FORBID_TAGS' in t ? Ze({}, t.FORBID_TAGS) : {};
							ae = 'FORBID_ATTR' in t ? Ze({}, t.FORBID_ATTR) : {};
							a = 'USE_PROFILES' in t ? t.USE_PROFILES : false;
							se = t.ALLOW_ARIA_ATTR !== false;
							le = t.ALLOW_DATA_ATTR !== false;
							ce = t.ALLOW_UNKNOWN_PROTOCOLS || false;
							b = t.SAFE_FOR_TEMPLATES || false;
							w = t.WHOLE_DOCUMENT || false;
							k = t.RETURN_DOM || false;
							x = t.RETURN_DOM_FRAGMENT || false;
							de = t.RETURN_DOM_IMPORT !== false;
							C = t.RETURN_TRUSTED_TYPE || false;
							pe = t.FORCE_BODY || false;
							fe = t.SANITIZE_DOM !== false;
							he = t.KEEP_CONTENT !== false;
							T = t.IN_PLACE || false;
							i = t.ALLOWED_URI_REGEXP || i;
							M = t.NAMESPACE || L;
							N = Ce.indexOf(t.PARSER_MEDIA_TYPE) === -1 ? (N = Te) : (N = t.PARSER_MEDIA_TYPE);
							A =
								N === 'application/xhtml+xml'
									? function (e) {
											return e;
										}
									: Ue;
							if (b) le = false;
							if (x) k = true;
							if (a) {
								v = Ze({}, [].concat(st(tt)));
								y = [];
								if (a.html === true) {
									Ze(v, Qe);
									Ze(y, nt);
								}
								if (a.svg === true) {
									Ze(v, Ye);
									Ze(y, rt);
									Ze(y, it);
								}
								if (a.svgFilters === true) {
									Ze(v, Je);
									Ze(y, rt);
									Ze(y, it);
								}
								if (a.mathMl === true) {
									Ze(v, et);
									Ze(y, ot);
									Ze(y, it);
								}
							}
							if (t.ADD_TAGS) {
								if (v === re) v = Xe(v);
								Ze(v, t.ADD_TAGS);
							}
							if (t.ADD_ATTR) {
								if (y === oe) y = Xe(y);
								Ze(y, t.ADD_ATTR);
							}
							if (t.ADD_URI_SAFE_ATTR) Ze(ye, t.ADD_URI_SAFE_ATTR);
							if (t.FORBID_CONTENTS) {
								if (E === me) E = Xe(E);
								Ze(E, t.FORBID_CONTENTS);
							}
							if (he) v['#text'] = true;
							if (w) Ze(v, ['html', 'head', 'body']);
							if (v.table) {
								Ze(v, ['tbody']);
								delete ie.tbody;
							}
							if (qe) qe(t);
							D = t;
						};
						var Me = Ze({}, ['mi', 'mo', 'mn', 'ms', 'mtext']);
						var Ne = Ze({}, ['foreignobject', 'desc', 'title', 'annotation-xml']);
						var S = Ze({}, Ye);
						Ze(S, Je);
						Ze(S, pt);
						var Ae = Ze({}, et);
						Ze(Ae, dt);
						var De = function e(t) {
							var n = l(t);
							if (!n || !n.tagName) n = { namespaceURI: L, tagName: 'template' };
							var r = Ue(t.tagName);
							var o = Ue(n.tagName);
							if (t.namespaceURI === ke) {
								if (n.namespaceURI === L) return r === 'svg';
								if (n.namespaceURI === we) return r === 'svg' && (o === 'annotation-xml' || Me[o]);
								return Boolean(S[r]);
							}
							if (t.namespaceURI === we) {
								if (n.namespaceURI === L) return r === 'math';
								if (n.namespaceURI === ke) return r === 'math' && Ne[o];
								return Boolean(Ae[r]);
							}
							if (t.namespaceURI === L) {
								if (n.namespaceURI === ke && !Ne[o]) return false;
								if (n.namespaceURI === we && !Me[o]) return false;
								var i = Ze({}, ['title', 'style', 'font', 'a', 'script']);
								return !Ae[r] && (i[r] || !S[r]);
							}
							return false;
						};
						var O = function e(t) {
							ze(d.removed, { element: t });
							try {
								t.parentNode.removeChild(t);
							} catch (e) {
								try {
									t.outerHTML = G;
								} catch (e) {
									t.remove();
								}
							}
						};
						var Se = function e(t, n) {
							try {
								ze(d.removed, { attribute: n.getAttributeNode(t), from: n });
							} catch (e) {
								ze(d.removed, { attribute: null, from: n });
							}
							n.removeAttribute(t);
							if (t === 'is' && !y[t])
								if (k || x)
									try {
										O(n);
									} catch (e) {}
								else
									try {
										n.setAttribute(t, '');
									} catch (e) {}
						};
						var Oe = function e(t) {
							var n = void 0;
							var r = void 0;
							if (pe) t = '<remove></remove>' + t;
							else {
								var o = Ve(t, /^[\r\n\t ]+/);
								r = o && o[0];
							}
							if (N === 'application/xhtml+xml')
								t =
									'<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' +
									t +
									'</body></html>';
							var i = f ? f.createHTML(t) : t;
							if (M === L)
								try {
									n = new z().parseFromString(i, N);
								} catch (e) {}
							if (!n || !n.documentElement) {
								n = h.createDocument(M, 'template', null);
								try {
									n.documentElement.innerHTML = xe ? '' : i;
								} catch (e) {}
							}
							var a = n.body || n.documentElement;
							if (t && r) a.insertBefore(s.createTextNode(r), a.childNodes[0] || null);
							if (M === L) return K.call(n, w ? 'html' : 'body')[0];
							return w ? n.documentElement : a;
						};
						var Ie = function e(t) {
							return Z.call(
								t.ownerDocument || t,
								t,
								n.SHOW_ELEMENT | n.SHOW_COMMENT | n.SHOW_TEXT,
								null,
								false
							);
						};
						var Re = function e(t) {
							if (t instanceof j || t instanceof _) return false;
							if (
								typeof t.nodeName !== 'string' ||
								typeof t.textContent !== 'string' ||
								typeof t.removeChild !== 'function' ||
								!(t.attributes instanceof q) ||
								typeof t.removeAttribute !== 'function' ||
								typeof t.setAttribute !== 'function' ||
								typeof t.namespaceURI !== 'string' ||
								typeof t.insertBefore !== 'function'
							)
								return true;
							return false;
						};
						var I = function e(t) {
							return (typeof p === 'undefined' ? 'undefined' : at(p)) === 'object'
								? t instanceof p
								: t &&
										(typeof t === 'undefined' ? 'undefined' : at(t)) === 'object' &&
										typeof t.nodeType === 'number' &&
										typeof t.nodeName === 'string';
						};
						var R = function e(t, n, r) {
							if (!o[t]) return;
							je(o[t], function (e) {
								e.call(d, n, r, D);
							});
						};
						var Pe = function e(t) {
							var n = void 0;
							R('beforeSanitizeElements', t, null);
							if (Re(t)) {
								O(t);
								return true;
							}
							if (Ve(t.nodeName, /[\u0080-\uFFFF]/)) {
								O(t);
								return true;
							}
							var r = A(t.nodeName);
							R('uponSanitizeElement', t, { tagName: r, allowedTags: v });
							if (
								!I(t.firstElementChild) &&
								(!I(t.content) || !I(t.content.firstElementChild)) &&
								We(/<[/\w]/g, t.innerHTML) &&
								We(/<[/\w]/g, t.textContent)
							) {
								O(t);
								return true;
							}
							if (r === 'select' && We(/<template/i, t.innerHTML)) {
								O(t);
								return true;
							}
							if (!v[r] || ie[r]) {
								if (he && !E[r]) {
									var o = l(t) || t.parentNode;
									var i = W(t) || t.childNodes;
									if (i && o) {
										var a = i.length;
										for (var s = a - 1; s >= 0; --s) o.insertBefore(V(i[s], true), $(t));
									}
								}
								O(t);
								return true;
							}
							if (t instanceof H && !De(t)) {
								O(t);
								return true;
							}
							if (
								(r === 'noscript' || r === 'noembed') &&
								We(/<\/no(script|embed)/i, t.innerHTML)
							) {
								O(t);
								return true;
							}
							if (b && t.nodeType === 3) {
								n = t.textContent;
								n = $e(n, m, ' ');
								n = $e(n, g, ' ');
								if (t.textContent !== n) {
									ze(d.removed, { element: t.cloneNode() });
									t.textContent = n;
								}
							}
							R('afterSanitizeElements', t, null);
							return false;
						};
						var Be = function e(t, n, r) {
							if (fe && (n === 'id' || n === 'name') && (r in s || r in Ee)) return false;
							if (le && !ae[n] && We(J, n));
							else if (se && We(ee, n));
							else if (!y[n] || ae[n]) return false;
							else if (ye[n]);
							else if (We(i, $e(r, ne, '')));
							else if (
								(n === 'src' || n === 'xlink:href' || n === 'href') &&
								t !== 'script' &&
								ct(r, 'data:') === 0 &&
								ge[t]
							);
							else if (ce && !We(te, $e(r, ne, '')));
							else if (!r);
							else return false;
							return true;
						};
						var He = function e(t) {
							var n = void 0;
							var r = void 0;
							var o = void 0;
							var i = void 0;
							R('beforeSanitizeAttributes', t, null);
							var a = t.attributes;
							if (!a) return;
							var s = { attrName: '', attrValue: '', keepAttr: true, allowedAttributes: y };
							i = a.length;
							while (i--) {
								n = a[i];
								var l = n,
									c = l.name,
									u = l.namespaceURI;
								r = ut(n.value);
								o = A(c);
								s.attrName = o;
								s.attrValue = r;
								s.keepAttr = true;
								s.forceKeepAttr = undefined;
								R('uponSanitizeAttribute', t, s);
								r = s.attrValue;
								if (s.forceKeepAttr) continue;
								Se(c, t);
								if (!s.keepAttr) continue;
								if (We(/\/>/i, r)) {
									Se(c, t);
									continue;
								}
								if (b) {
									r = $e(r, m, ' ');
									r = $e(r, g, ' ');
								}
								var p = A(t.nodeName);
								if (!Be(p, o, r)) continue;
								try {
									if (u) t.setAttributeNS(u, c, r);
									else t.setAttribute(c, r);
									_e(d.removed);
								} catch (e) {}
							}
							R('afterSanitizeAttributes', t, null);
						};
						var Fe = function e(t) {
							var n = void 0;
							var r = Ie(t);
							R('beforeSanitizeShadowDOM', t, null);
							while ((n = r.nextNode())) {
								R('uponSanitizeShadowNode', n, null);
								if (Pe(n)) continue;
								if (n.content instanceof P) e(n.content);
								He(n);
							}
							R('afterSanitizeShadowDOM', t, null);
						};
						d.sanitize = function (e, t) {
							var n = void 0;
							var r = void 0;
							var o = void 0;
							var i = void 0;
							var a = void 0;
							xe = !e;
							if (xe) e = '\x3c!--\x3e';
							if (typeof e !== 'string' && !I(e))
								if (typeof e.toString !== 'function') throw Ge('toString is not a function');
								else {
									e = e.toString();
									if (typeof e !== 'string') throw Ge('dirty is not a string, aborting');
								}
							if (!d.isSupported) {
								if (at(c.toStaticHTML) === 'object' || typeof c.toStaticHTML === 'function') {
									if (typeof e === 'string') return c.toStaticHTML(e);
									if (I(e)) return c.toStaticHTML(e.outerHTML);
								}
								return e;
							}
							if (!ue) Le(t);
							d.removed = [];
							if (typeof e === 'string') T = false;
							if (T);
							else if (e instanceof p) {
								n = Oe('\x3c!----\x3e');
								r = n.ownerDocument.importNode(e, true);
								if (r.nodeType === 1 && r.nodeName === 'BODY') n = r;
								else if (r.nodeName === 'HTML') n = r;
								else n.appendChild(r);
							} else {
								if (!k && !b && !w && e.indexOf('<') === -1) return f && C ? f.createHTML(e) : e;
								n = Oe(e);
								if (!n) return k ? null : G;
							}
							if (n && pe) O(n.firstChild);
							var s = Ie(T ? e : n);
							while ((o = s.nextNode())) {
								if (o.nodeType === 3 && o === i) continue;
								if (Pe(o)) continue;
								if (o.content instanceof P) Fe(o.content);
								He(o);
								i = o;
							}
							i = null;
							if (T) return e;
							if (k) {
								if (x) {
									a = X.call(n.ownerDocument);
									while (n.firstChild) a.appendChild(n.firstChild);
								} else a = n;
								if (de) a = Q.call(u, a, true);
								return a;
							}
							var l = w ? n.outerHTML : n.innerHTML;
							if (b) {
								l = $e(l, m, ' ');
								l = $e(l, g, ' ');
							}
							return f && C ? f.createHTML(l) : l;
						};
						d.setConfig = function (e) {
							Le(e);
							ue = true;
						};
						d.clearConfig = function () {
							D = null;
							ue = false;
						};
						d.isValidAttribute = function (e, t, n) {
							if (!D) Le({});
							var r = A(e);
							var o = A(t);
							return Be(r, o, n);
						};
						d.addHook = function (e, t) {
							if (typeof t !== 'function') return;
							o[e] = o[e] || [];
							ze(o[e], t);
						};
						d.removeHook = function (e) {
							if (o[e]) _e(o[e]);
						};
						d.removeHooks = function (e) {
							if (o[e]) o[e] = [];
						};
						d.removeAllHooks = function () {
							o = {};
						};
						return d;
					}
					return lt();
				})();
			},
			928: function (e, t, n) {
				'use strict';
				var i = n(322);
				e.exports = function (e, t, n) {
					var r, o;
					if (((n = n || 0), i(t))) {
						if (Array.prototype.indexOf) return Array.prototype.indexOf.call(t, e, n);
						for (o = t.length, r = n; 0 <= n && r < o; r += 1) if (t[r] === e) return r;
					}
					return -1;
				};
			},
			690: function (e, t, n) {
				'use strict';
				var r = n(322),
					o = n(893),
					i = n(956);
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
			956: function (e) {
				'use strict';
				e.exports = function (e, t, n) {
					for (var r in ((n = n || null), e))
						if (e.hasOwnProperty(r) && !1 === t.call(n, e[r], r, e)) break;
				};
			},
			990: function (e, t, n) {
				'use strict';
				var r = n(893);
				e.exports = function (t) {
					var n;
					try {
						n = Array.prototype.slice.call(t);
					} catch (e) {
						(n = []),
							r(t, function (e) {
								n.push(e);
							});
					}
					return n;
				};
			},
			755: function (e) {
				'use strict';
				var r = '_feEventKey';
				e.exports = function (e, t) {
					var n = e[r];
					return (e = (e = (n = n || (e[r] = {}))[t]) || (n[t] = []));
				};
			},
			349: function (e, t, n) {
				'use strict';
				var r = n(758),
					a = n(690),
					s = n(755);
				function o(n, r, o) {
					var i,
						e = s(n, r);
					o
						? (a(e, function (e, t) {
								return o !== e.handler || (l(n, r, e.wrappedHandler), (i = t), !1);
							}),
							e.splice(i, 1))
						: (a(e, function (e) {
								l(n, r, e.wrappedHandler);
							}),
							e.splice(0, e.length));
				}
				function l(e, t, n) {
					'removeEventListener' in e
						? e.removeEventListener(t, n)
						: 'detachEvent' in e && e.detachEvent('on' + t, n);
				}
				e.exports = function (n, e, t) {
					r(e)
						? a(e.split(/\s+/g), function (e) {
								o(n, e, t);
							})
						: a(e, function (e, t) {
								o(n, t, e);
							});
				};
			},
			348: function (e, t, n) {
				'use strict';
				var o = n(758),
					c = n(690),
					u = n(755);
				function i(t, e, n, r) {
					function o(e) {
						n.call(r || t, e || window.event);
					}
					var i, a, s, l;
					'addEventListener' in t
						? t.addEventListener(e, o)
						: 'attachEvent' in t && t.attachEvent('on' + e, o),
						(a = n),
						(s = o),
						(i = u((i = t), e)),
						(l = !1),
						c(i, function (e) {
							return e.handler !== a || !(l = !0);
						}),
						l || i.push({ handler: a, wrappedHandler: s });
				}
				e.exports = function (n, e, r, t) {
					o(e)
						? c(e.split(/\s+/g), function (e) {
								i(n, e, r, t);
							})
						: c(e, function (e, t) {
								i(n, t, e, r);
							});
				};
			},
			24: function (e, t, n) {
				'use strict';
				var r = n(322),
					o = n(929);
				e.exports = function (e, t) {
					(t = (t = r(t) ? t.join(' ') : t).replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')),
						o(e.className.baseVal) ? (e.className = t) : (e.className.baseVal = t);
				};
			},
			204: function (e, t, n) {
				'use strict';
				var o = n(690),
					i = n(928),
					a = n(902),
					s = n(24);
				e.exports = function (t) {
					var e = Array.prototype.slice.call(arguments, 1),
						n = t.classList,
						r = [];
					n
						? o(e, function (e) {
								t.classList.add(e);
							})
						: ((n = a(t)) && (e = [].concat(n.split(/\s+/), e)),
							o(e, function (e) {
								i(e, r) < 0 && r.push(e);
							}),
							s(t, r));
				};
			},
			522: function (e, t, n) {
				'use strict';
				var o = n(758),
					i = n(690);
				e.exports = function (e, t, n) {
					var r = e.style;
					o(t)
						? (r[t] = n)
						: i(t, function (e, t) {
								r[t] = e;
							});
				};
			},
			902: function (e, t, n) {
				'use strict';
				var r = n(929);
				e.exports = function (e) {
					return e && e.className
						? r(e.className.baseVal)
							? e.className
							: e.className.baseVal
						: '';
				};
			},
			714: function (e, t, n) {
				'use strict';
				var r = n(928),
					o = n(902);
				e.exports = function (e, t) {
					return e.classList ? e.classList.contains(t) : ((e = o(e).split(/\s+/)), -1 < r(t, e));
				};
			},
			471: function (e, t, n) {
				'use strict';
				var r = n(928),
					o = n(990),
					n = Element.prototype,
					i =
						n.matches ||
						n.webkitMatchesSelector ||
						n.mozMatchesSelector ||
						n.msMatchesSelector ||
						function (e) {
							var t = this.document || this.ownerDocument;
							return -1 < r(this, o(t.querySelectorAll(e)));
						};
				e.exports = function (e, t) {
					return i.call(e, t);
				};
			},
			462: function (e, t, n) {
				'use strict';
				var i = n(893),
					a = n(928),
					s = n(902),
					l = n(24);
				e.exports = function (e) {
					var t,
						n,
						r = Array.prototype.slice.call(arguments, 1),
						o = e.classList;
					o
						? i(r, function (e) {
								o.remove(e);
							})
						: ((t = s(e).split(/\s+/)),
							(n = []),
							i(t, function (e) {
								a(e, r) < 0 && n.push(e);
							}),
							l(e, n));
				};
			},
			969: function (e) {
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
			254: function (e, t, n) {
				'use strict';
				var o = n(956);
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
			391: function (e, t, n) {
				'use strict';
				var a = n(929),
					s = n(254),
					l = 6048e5;
				e.exports = function (e, t) {
					var n,
						r = location.hostname,
						o = 'TOAST UI ' + e + ' for ' + r + ': Statistics',
						i = window.localStorage.getItem(o);
					(!a(window.tui) && !1 === window.tui.usageStatistics) ||
						(i && ((i = i), (n = new Date().getTime()), !(l < n - i))) ||
						(window.localStorage.setItem(o, new Date().getTime()),
						setTimeout(function () {
							('interactive' !== document.readyState && 'complete' !== document.readyState) ||
								s('https://www.google-analytics.com/collect', {
									v: 1,
									t: 'event',
									tid: t,
									cid: r,
									dp: r,
									dh: e,
									el: e,
									ec: 'use'
								});
						}, 1e3));
				};
			},
			322: function (e) {
				'use strict';
				e.exports = function (e) {
					return e instanceof Array;
				};
			},
			65: function (e, t, n) {
				'use strict';
				var r = n(929),
					o = n(934);
				e.exports = function (e) {
					return !r(e) && !o(e);
				};
			},
			404: function (e, t, n) {
				'use strict';
				var r = n(790);
				e.exports = function (e) {
					return !r(e);
				};
			},
			294: function (e) {
				'use strict';
				e.exports = function (e) {
					return e instanceof Function;
				};
			},
			934: function (e) {
				'use strict';
				e.exports = function (e) {
					return null === e;
				};
			},
			758: function (e) {
				'use strict';
				e.exports = function (e) {
					return 'string' == typeof e || e instanceof String;
				};
			},
			790: function (e, t, n) {
				'use strict';
				var r = n(65);
				e.exports = function (e) {
					return r(e) && !1 !== e;
				};
			},
			929: function (e) {
				'use strict';
				e.exports = function (e) {
					return void 0 === e;
				};
			},
			479: function (e) {
				'use strict';
				e.exports = t;
			},
			481: function (e) {
				'use strict';
				e.exports = n;
			},
			43: function (e) {
				'use strict';
				e.exports = r;
			},
			814: function (e) {
				'use strict';
				e.exports = o;
			},
			311: function (e) {
				'use strict';
				e.exports = i;
			}
		}),
		(s = {}),
		($r.n = function (e) {
			var t =
				e && e.__esModule
					? function () {
							return e.default;
						}
					: function () {
							return e;
						};
			return $r.d(t, { a: t }), t;
		}),
		($r.d = function (e, t) {
			for (var n in t)
				$r.o(t, n) && !$r.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
		}),
		($r.g = (function () {
			if ('object' == typeof globalThis) return globalThis;
			try {
				return this || new Function('return this')();
			} catch (e) {
				if ('object' == typeof window) return window;
			}
		})()),
		($r.o = function (e, t) {
			return Object.prototype.hasOwnProperty.call(e, t);
		}),
		(Wr = {}),
		(function () {
			'use strict';
			$r.d(Wr, {
				default: function () {
					return Vr;
				}
			});
			var h = function () {
				return (h =
					Object.assign ||
					function (e) {
						for (var t, n = 1, r = arguments.length; n < r; n++)
							for (var o in (t = arguments[n]))
								Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
						return e;
					}).apply(this, arguments);
			};
			Object.create;
			function B(e, t, n) {
				if (n || 2 === arguments.length)
					for (var r, o = 0, i = t.length; o < i; o++)
						(!r && o in t) || ((r = r || Array.prototype.slice.call(t, 0, o))[o] = t[o]);
				return e.concat(r || Array.prototype.slice.call(t));
			}
			Object.create;
			var H = function (e, t) {
				return (H =
					Object.setPrototypeOf ||
					({ __proto__: [] } instanceof Array
						? function (e, t) {
								e.__proto__ = t;
							}
						: function (e, t) {
								for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
							}))(e, t);
			};
			function e(e, t) {
				if ('function' != typeof t && null !== t)
					throw new TypeError('Class extends value ' + String(t) + ' is not a constructor or null');
				function n() {
					this.constructor = e;
				}
				H(e, t),
					(e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()));
			}
			var s = function () {
				return (s =
					Object.assign ||
					function (e) {
						for (var t, n = 1, r = arguments.length; n < r; n++)
							for (var o in (t = arguments[n]))
								Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
						return e;
					}).apply(this, arguments);
			};
			function F(e, t, n) {
				if (n || 2 === arguments.length)
					for (var r, o = 0, i = t.length; o < i; o++)
						(!r && o in t) || ((r = r || Array.prototype.slice.call(t, 0, o))[o] = t[o]);
				return e.concat(r || Array.prototype.slice.call(t));
			}
			var t =
					'undefined' != typeof globalThis
						? globalThis
						: 'undefined' != typeof window
							? window
							: void 0 !== $r.g
								? $r.g
								: 'undefined' != typeof self
									? self
									: {},
				q = {};
			function l(e, t, n) {
				var r,
					o,
					i,
					a,
					s = '';
				for (
					'string' != typeof t && ((n = t), (t = l.defaultChars)),
						void 0 === n && (n = !0),
						a = (function (e) {
							var t,
								n,
								r = q[e];
							if (!r) {
								for (r = q[e] = [], t = 0; t < 128; t++)
									(n = String.fromCharCode(t)),
										/^[0-9a-z]$/i.test(n)
											? r.push(n)
											: r.push('%' + ('0' + t.toString(16).toUpperCase()).slice(-2));
								for (t = 0; t < e.length; t++) r[e.charCodeAt(t)] = e[t];
							}
							return r;
						})(t),
						r = 0,
						o = e.length;
					r < o;
					r++
				)
					(i = e.charCodeAt(r)),
						n && 37 === i && r + 2 < o && /^[0-9a-f]{2}$/i.test(e.slice(r + 1, r + 3))
							? ((s += e.slice(r, r + 3)), (r += 2))
							: i < 128
								? (s += a[i])
								: 55296 <= i && i <= 57343
									? 55296 <= i &&
										i <= 56319 &&
										r + 1 < o &&
										56320 <= (i = e.charCodeAt(r + 1)) &&
										i <= 57343
										? ((s += encodeURIComponent(e[r] + e[r + 1])), r++)
										: (s += '%EF%BF%BD')
									: (s += encodeURIComponent(e[r]));
				return s;
			}
			(l.defaultChars = ";/?:@&=+$,-_.!~*'()#"), (l.componentChars = "-_.!~*'()");
			var j = l,
				_ = {},
				n = {},
				r = {
					Aacute: 'Á',
					aacute: 'á',
					Abreve: 'Ă',
					abreve: 'ă',
					ac: '∾',
					acd: '∿',
					acE: '∾̳',
					Acirc: 'Â',
					acirc: 'â',
					acute: '´',
					Acy: 'А',
					acy: 'а',
					AElig: 'Æ',
					aelig: 'æ',
					af: '⁡',
					Afr: '𝔄',
					afr: '𝔞',
					Agrave: 'À',
					agrave: 'à',
					alefsym: 'ℵ',
					aleph: 'ℵ',
					Alpha: 'Α',
					alpha: 'α',
					Amacr: 'Ā',
					amacr: 'ā',
					amalg: '⨿',
					amp: '&',
					AMP: '&',
					andand: '⩕',
					And: '⩓',
					and: '∧',
					andd: '⩜',
					andslope: '⩘',
					andv: '⩚',
					ang: '∠',
					ange: '⦤',
					angle: '∠',
					angmsdaa: '⦨',
					angmsdab: '⦩',
					angmsdac: '⦪',
					angmsdad: '⦫',
					angmsdae: '⦬',
					angmsdaf: '⦭',
					angmsdag: '⦮',
					angmsdah: '⦯',
					angmsd: '∡',
					angrt: '∟',
					angrtvb: '⊾',
					angrtvbd: '⦝',
					angsph: '∢',
					angst: 'Å',
					angzarr: '⍼',
					Aogon: 'Ą',
					aogon: 'ą',
					Aopf: '𝔸',
					aopf: '𝕒',
					apacir: '⩯',
					ap: '≈',
					apE: '⩰',
					ape: '≊',
					apid: '≋',
					apos: "'",
					ApplyFunction: '⁡',
					approx: '≈',
					approxeq: '≊',
					Aring: 'Å',
					aring: 'å',
					Ascr: '𝒜',
					ascr: '𝒶',
					Assign: '≔',
					ast: '*',
					asymp: '≈',
					asympeq: '≍',
					Atilde: 'Ã',
					atilde: 'ã',
					Auml: 'Ä',
					auml: 'ä',
					awconint: '∳',
					awint: '⨑',
					backcong: '≌',
					backepsilon: '϶',
					backprime: '‵',
					backsim: '∽',
					backsimeq: '⋍',
					Backslash: '∖',
					Barv: '⫧',
					barvee: '⊽',
					barwed: '⌅',
					Barwed: '⌆',
					barwedge: '⌅',
					bbrk: '⎵',
					bbrktbrk: '⎶',
					bcong: '≌',
					Bcy: 'Б',
					bcy: 'б',
					bdquo: '„',
					becaus: '∵',
					because: '∵',
					Because: '∵',
					bemptyv: '⦰',
					bepsi: '϶',
					bernou: 'ℬ',
					Bernoullis: 'ℬ',
					Beta: 'Β',
					beta: 'β',
					beth: 'ℶ',
					between: '≬',
					Bfr: '𝔅',
					bfr: '𝔟',
					bigcap: '⋂',
					bigcirc: '◯',
					bigcup: '⋃',
					bigodot: '⨀',
					bigoplus: '⨁',
					bigotimes: '⨂',
					bigsqcup: '⨆',
					bigstar: '★',
					bigtriangledown: '▽',
					bigtriangleup: '△',
					biguplus: '⨄',
					bigvee: '⋁',
					bigwedge: '⋀',
					bkarow: '⤍',
					blacklozenge: '⧫',
					blacksquare: '▪',
					blacktriangle: '▴',
					blacktriangledown: '▾',
					blacktriangleleft: '◂',
					blacktriangleright: '▸',
					blank: '␣',
					blk12: '▒',
					blk14: '░',
					blk34: '▓',
					block: '█',
					bne: '=⃥',
					bnequiv: '≡⃥',
					bNot: '⫭',
					bnot: '⌐',
					Bopf: '𝔹',
					bopf: '𝕓',
					bot: '⊥',
					bottom: '⊥',
					bowtie: '⋈',
					boxbox: '⧉',
					boxdl: '┐',
					boxdL: '╕',
					boxDl: '╖',
					boxDL: '╗',
					boxdr: '┌',
					boxdR: '╒',
					boxDr: '╓',
					boxDR: '╔',
					boxh: '─',
					boxH: '═',
					boxhd: '┬',
					boxHd: '╤',
					boxhD: '╥',
					boxHD: '╦',
					boxhu: '┴',
					boxHu: '╧',
					boxhU: '╨',
					boxHU: '╩',
					boxminus: '⊟',
					boxplus: '⊞',
					boxtimes: '⊠',
					boxul: '┘',
					boxuL: '╛',
					boxUl: '╜',
					boxUL: '╝',
					boxur: '└',
					boxuR: '╘',
					boxUr: '╙',
					boxUR: '╚',
					boxv: '│',
					boxV: '║',
					boxvh: '┼',
					boxvH: '╪',
					boxVh: '╫',
					boxVH: '╬',
					boxvl: '┤',
					boxvL: '╡',
					boxVl: '╢',
					boxVL: '╣',
					boxvr: '├',
					boxvR: '╞',
					boxVr: '╟',
					boxVR: '╠',
					bprime: '‵',
					breve: '˘',
					Breve: '˘',
					brvbar: '¦',
					bscr: '𝒷',
					Bscr: 'ℬ',
					bsemi: '⁏',
					bsim: '∽',
					bsime: '⋍',
					bsolb: '⧅',
					bsol: '\\',
					bsolhsub: '⟈',
					bull: '•',
					bullet: '•',
					bump: '≎',
					bumpE: '⪮',
					bumpe: '≏',
					Bumpeq: '≎',
					bumpeq: '≏',
					Cacute: 'Ć',
					cacute: 'ć',
					capand: '⩄',
					capbrcup: '⩉',
					capcap: '⩋',
					cap: '∩',
					Cap: '⋒',
					capcup: '⩇',
					capdot: '⩀',
					CapitalDifferentialD: 'ⅅ',
					caps: '∩︀',
					caret: '⁁',
					caron: 'ˇ',
					Cayleys: 'ℭ',
					ccaps: '⩍',
					Ccaron: 'Č',
					ccaron: 'č',
					Ccedil: 'Ç',
					ccedil: 'ç',
					Ccirc: 'Ĉ',
					ccirc: 'ĉ',
					Cconint: '∰',
					ccups: '⩌',
					ccupssm: '⩐',
					Cdot: 'Ċ',
					cdot: 'ċ',
					cedil: '¸',
					Cedilla: '¸',
					cemptyv: '⦲',
					cent: '¢',
					centerdot: '·',
					CenterDot: '·',
					cfr: '𝔠',
					Cfr: 'ℭ',
					CHcy: 'Ч',
					chcy: 'ч',
					check: '✓',
					checkmark: '✓',
					Chi: 'Χ',
					chi: 'χ',
					circ: 'ˆ',
					circeq: '≗',
					circlearrowleft: '↺',
					circlearrowright: '↻',
					circledast: '⊛',
					circledcirc: '⊚',
					circleddash: '⊝',
					CircleDot: '⊙',
					circledR: '®',
					circledS: 'Ⓢ',
					CircleMinus: '⊖',
					CirclePlus: '⊕',
					CircleTimes: '⊗',
					cir: '○',
					cirE: '⧃',
					cire: '≗',
					cirfnint: '⨐',
					cirmid: '⫯',
					cirscir: '⧂',
					ClockwiseContourIntegral: '∲',
					CloseCurlyDoubleQuote: '”',
					CloseCurlyQuote: '’',
					clubs: '♣',
					clubsuit: '♣',
					colon: ':',
					Colon: '∷',
					Colone: '⩴',
					colone: '≔',
					coloneq: '≔',
					comma: ',',
					commat: '@',
					comp: '∁',
					compfn: '∘',
					complement: '∁',
					complexes: 'ℂ',
					cong: '≅',
					congdot: '⩭',
					Congruent: '≡',
					conint: '∮',
					Conint: '∯',
					ContourIntegral: '∮',
					copf: '𝕔',
					Copf: 'ℂ',
					coprod: '∐',
					Coproduct: '∐',
					copy: '©',
					COPY: '©',
					copysr: '℗',
					CounterClockwiseContourIntegral: '∳',
					crarr: '↵',
					cross: '✗',
					Cross: '⨯',
					Cscr: '𝒞',
					cscr: '𝒸',
					csub: '⫏',
					csube: '⫑',
					csup: '⫐',
					csupe: '⫒',
					ctdot: '⋯',
					cudarrl: '⤸',
					cudarrr: '⤵',
					cuepr: '⋞',
					cuesc: '⋟',
					cularr: '↶',
					cularrp: '⤽',
					cupbrcap: '⩈',
					cupcap: '⩆',
					CupCap: '≍',
					cup: '∪',
					Cup: '⋓',
					cupcup: '⩊',
					cupdot: '⊍',
					cupor: '⩅',
					cups: '∪︀',
					curarr: '↷',
					curarrm: '⤼',
					curlyeqprec: '⋞',
					curlyeqsucc: '⋟',
					curlyvee: '⋎',
					curlywedge: '⋏',
					curren: '¤',
					curvearrowleft: '↶',
					curvearrowright: '↷',
					cuvee: '⋎',
					cuwed: '⋏',
					cwconint: '∲',
					cwint: '∱',
					cylcty: '⌭',
					dagger: '†',
					Dagger: '‡',
					daleth: 'ℸ',
					darr: '↓',
					Darr: '↡',
					dArr: '⇓',
					dash: '‐',
					Dashv: '⫤',
					dashv: '⊣',
					dbkarow: '⤏',
					dblac: '˝',
					Dcaron: 'Ď',
					dcaron: 'ď',
					Dcy: 'Д',
					dcy: 'д',
					ddagger: '‡',
					ddarr: '⇊',
					DD: 'ⅅ',
					dd: 'ⅆ',
					DDotrahd: '⤑',
					ddotseq: '⩷',
					deg: '°',
					Del: '∇',
					Delta: 'Δ',
					delta: 'δ',
					demptyv: '⦱',
					dfisht: '⥿',
					Dfr: '𝔇',
					dfr: '𝔡',
					dHar: '⥥',
					dharl: '⇃',
					dharr: '⇂',
					DiacriticalAcute: '´',
					DiacriticalDot: '˙',
					DiacriticalDoubleAcute: '˝',
					DiacriticalGrave: '`',
					DiacriticalTilde: '˜',
					diam: '⋄',
					diamond: '⋄',
					Diamond: '⋄',
					diamondsuit: '♦',
					diams: '♦',
					die: '¨',
					DifferentialD: 'ⅆ',
					digamma: 'ϝ',
					disin: '⋲',
					div: '÷',
					divide: '÷',
					divideontimes: '⋇',
					divonx: '⋇',
					DJcy: 'Ђ',
					djcy: 'ђ',
					dlcorn: '⌞',
					dlcrop: '⌍',
					dollar: '$',
					Dopf: '𝔻',
					dopf: '𝕕',
					Dot: '¨',
					dot: '˙',
					DotDot: '⃜',
					doteq: '≐',
					doteqdot: '≑',
					DotEqual: '≐',
					dotminus: '∸',
					dotplus: '∔',
					dotsquare: '⊡',
					doublebarwedge: '⌆',
					DoubleContourIntegral: '∯',
					DoubleDot: '¨',
					DoubleDownArrow: '⇓',
					DoubleLeftArrow: '⇐',
					DoubleLeftRightArrow: '⇔',
					DoubleLeftTee: '⫤',
					DoubleLongLeftArrow: '⟸',
					DoubleLongLeftRightArrow: '⟺',
					DoubleLongRightArrow: '⟹',
					DoubleRightArrow: '⇒',
					DoubleRightTee: '⊨',
					DoubleUpArrow: '⇑',
					DoubleUpDownArrow: '⇕',
					DoubleVerticalBar: '∥',
					DownArrowBar: '⤓',
					downarrow: '↓',
					DownArrow: '↓',
					Downarrow: '⇓',
					DownArrowUpArrow: '⇵',
					DownBreve: '̑',
					downdownarrows: '⇊',
					downharpoonleft: '⇃',
					downharpoonright: '⇂',
					DownLeftRightVector: '⥐',
					DownLeftTeeVector: '⥞',
					DownLeftVectorBar: '⥖',
					DownLeftVector: '↽',
					DownRightTeeVector: '⥟',
					DownRightVectorBar: '⥗',
					DownRightVector: '⇁',
					DownTeeArrow: '↧',
					DownTee: '⊤',
					drbkarow: '⤐',
					drcorn: '⌟',
					drcrop: '⌌',
					Dscr: '𝒟',
					dscr: '𝒹',
					DScy: 'Ѕ',
					dscy: 'ѕ',
					dsol: '⧶',
					Dstrok: 'Đ',
					dstrok: 'đ',
					dtdot: '⋱',
					dtri: '▿',
					dtrif: '▾',
					duarr: '⇵',
					duhar: '⥯',
					dwangle: '⦦',
					DZcy: 'Џ',
					dzcy: 'џ',
					dzigrarr: '⟿',
					Eacute: 'É',
					eacute: 'é',
					easter: '⩮',
					Ecaron: 'Ě',
					ecaron: 'ě',
					Ecirc: 'Ê',
					ecirc: 'ê',
					ecir: '≖',
					ecolon: '≕',
					Ecy: 'Э',
					ecy: 'э',
					eDDot: '⩷',
					Edot: 'Ė',
					edot: 'ė',
					eDot: '≑',
					ee: 'ⅇ',
					efDot: '≒',
					Efr: '𝔈',
					efr: '𝔢',
					eg: '⪚',
					Egrave: 'È',
					egrave: 'è',
					egs: '⪖',
					egsdot: '⪘',
					el: '⪙',
					Element: '∈',
					elinters: '⏧',
					ell: 'ℓ',
					els: '⪕',
					elsdot: '⪗',
					Emacr: 'Ē',
					emacr: 'ē',
					empty: '∅',
					emptyset: '∅',
					EmptySmallSquare: '◻',
					emptyv: '∅',
					EmptyVerySmallSquare: '▫',
					emsp13: ' ',
					emsp14: ' ',
					emsp: ' ',
					ENG: 'Ŋ',
					eng: 'ŋ',
					ensp: ' ',
					Eogon: 'Ę',
					eogon: 'ę',
					Eopf: '𝔼',
					eopf: '𝕖',
					epar: '⋕',
					eparsl: '⧣',
					eplus: '⩱',
					epsi: 'ε',
					Epsilon: 'Ε',
					epsilon: 'ε',
					epsiv: 'ϵ',
					eqcirc: '≖',
					eqcolon: '≕',
					eqsim: '≂',
					eqslantgtr: '⪖',
					eqslantless: '⪕',
					Equal: '⩵',
					equals: '=',
					EqualTilde: '≂',
					equest: '≟',
					Equilibrium: '⇌',
					equiv: '≡',
					equivDD: '⩸',
					eqvparsl: '⧥',
					erarr: '⥱',
					erDot: '≓',
					escr: 'ℯ',
					Escr: 'ℰ',
					esdot: '≐',
					Esim: '⩳',
					esim: '≂',
					Eta: 'Η',
					eta: 'η',
					ETH: 'Ð',
					eth: 'ð',
					Euml: 'Ë',
					euml: 'ë',
					euro: '€',
					excl: '!',
					exist: '∃',
					Exists: '∃',
					expectation: 'ℰ',
					exponentiale: 'ⅇ',
					ExponentialE: 'ⅇ',
					fallingdotseq: '≒',
					Fcy: 'Ф',
					fcy: 'ф',
					female: '♀',
					ffilig: 'ﬃ',
					fflig: 'ﬀ',
					ffllig: 'ﬄ',
					Ffr: '𝔉',
					ffr: '𝔣',
					filig: 'ﬁ',
					FilledSmallSquare: '◼',
					FilledVerySmallSquare: '▪',
					fjlig: 'fj',
					flat: '♭',
					fllig: 'ﬂ',
					fltns: '▱',
					fnof: 'ƒ',
					Fopf: '𝔽',
					fopf: '𝕗',
					forall: '∀',
					ForAll: '∀',
					fork: '⋔',
					forkv: '⫙',
					Fouriertrf: 'ℱ',
					fpartint: '⨍',
					frac12: '½',
					frac13: '⅓',
					frac14: '¼',
					frac15: '⅕',
					frac16: '⅙',
					frac18: '⅛',
					frac23: '⅔',
					frac25: '⅖',
					frac34: '¾',
					frac35: '⅗',
					frac38: '⅜',
					frac45: '⅘',
					frac56: '⅚',
					frac58: '⅝',
					frac78: '⅞',
					frasl: '⁄',
					frown: '⌢',
					fscr: '𝒻',
					Fscr: 'ℱ',
					gacute: 'ǵ',
					Gamma: 'Γ',
					gamma: 'γ',
					Gammad: 'Ϝ',
					gammad: 'ϝ',
					gap: '⪆',
					Gbreve: 'Ğ',
					gbreve: 'ğ',
					Gcedil: 'Ģ',
					Gcirc: 'Ĝ',
					gcirc: 'ĝ',
					Gcy: 'Г',
					gcy: 'г',
					Gdot: 'Ġ',
					gdot: 'ġ',
					ge: '≥',
					gE: '≧',
					gEl: '⪌',
					gel: '⋛',
					geq: '≥',
					geqq: '≧',
					geqslant: '⩾',
					gescc: '⪩',
					ges: '⩾',
					gesdot: '⪀',
					gesdoto: '⪂',
					gesdotol: '⪄',
					gesl: '⋛︀',
					gesles: '⪔',
					Gfr: '𝔊',
					gfr: '𝔤',
					gg: '≫',
					Gg: '⋙',
					ggg: '⋙',
					gimel: 'ℷ',
					GJcy: 'Ѓ',
					gjcy: 'ѓ',
					gla: '⪥',
					gl: '≷',
					glE: '⪒',
					glj: '⪤',
					gnap: '⪊',
					gnapprox: '⪊',
					gne: '⪈',
					gnE: '≩',
					gneq: '⪈',
					gneqq: '≩',
					gnsim: '⋧',
					Gopf: '𝔾',
					gopf: '𝕘',
					grave: '`',
					GreaterEqual: '≥',
					GreaterEqualLess: '⋛',
					GreaterFullEqual: '≧',
					GreaterGreater: '⪢',
					GreaterLess: '≷',
					GreaterSlantEqual: '⩾',
					GreaterTilde: '≳',
					Gscr: '𝒢',
					gscr: 'ℊ',
					gsim: '≳',
					gsime: '⪎',
					gsiml: '⪐',
					gtcc: '⪧',
					gtcir: '⩺',
					gt: '>',
					GT: '>',
					Gt: '≫',
					gtdot: '⋗',
					gtlPar: '⦕',
					gtquest: '⩼',
					gtrapprox: '⪆',
					gtrarr: '⥸',
					gtrdot: '⋗',
					gtreqless: '⋛',
					gtreqqless: '⪌',
					gtrless: '≷',
					gtrsim: '≳',
					gvertneqq: '≩︀',
					gvnE: '≩︀',
					Hacek: 'ˇ',
					hairsp: ' ',
					half: '½',
					hamilt: 'ℋ',
					HARDcy: 'Ъ',
					hardcy: 'ъ',
					harrcir: '⥈',
					harr: '↔',
					hArr: '⇔',
					harrw: '↭',
					Hat: '^',
					hbar: 'ℏ',
					Hcirc: 'Ĥ',
					hcirc: 'ĥ',
					hearts: '♥',
					heartsuit: '♥',
					hellip: '…',
					hercon: '⊹',
					hfr: '𝔥',
					Hfr: 'ℌ',
					HilbertSpace: 'ℋ',
					hksearow: '⤥',
					hkswarow: '⤦',
					hoarr: '⇿',
					homtht: '∻',
					hookleftarrow: '↩',
					hookrightarrow: '↪',
					hopf: '𝕙',
					Hopf: 'ℍ',
					horbar: '―',
					HorizontalLine: '─',
					hscr: '𝒽',
					Hscr: 'ℋ',
					hslash: 'ℏ',
					Hstrok: 'Ħ',
					hstrok: 'ħ',
					HumpDownHump: '≎',
					HumpEqual: '≏',
					hybull: '⁃',
					hyphen: '‐',
					Iacute: 'Í',
					iacute: 'í',
					ic: '⁣',
					Icirc: 'Î',
					icirc: 'î',
					Icy: 'И',
					icy: 'и',
					Idot: 'İ',
					IEcy: 'Е',
					iecy: 'е',
					iexcl: '¡',
					iff: '⇔',
					ifr: '𝔦',
					Ifr: 'ℑ',
					Igrave: 'Ì',
					igrave: 'ì',
					ii: 'ⅈ',
					iiiint: '⨌',
					iiint: '∭',
					iinfin: '⧜',
					iiota: '℩',
					IJlig: 'Ĳ',
					ijlig: 'ĳ',
					Imacr: 'Ī',
					imacr: 'ī',
					image: 'ℑ',
					ImaginaryI: 'ⅈ',
					imagline: 'ℐ',
					imagpart: 'ℑ',
					imath: 'ı',
					Im: 'ℑ',
					imof: '⊷',
					imped: 'Ƶ',
					Implies: '⇒',
					incare: '℅',
					in: '∈',
					infin: '∞',
					infintie: '⧝',
					inodot: 'ı',
					intcal: '⊺',
					int: '∫',
					Int: '∬',
					integers: 'ℤ',
					Integral: '∫',
					intercal: '⊺',
					Intersection: '⋂',
					intlarhk: '⨗',
					intprod: '⨼',
					InvisibleComma: '⁣',
					InvisibleTimes: '⁢',
					IOcy: 'Ё',
					iocy: 'ё',
					Iogon: 'Į',
					iogon: 'į',
					Iopf: '𝕀',
					iopf: '𝕚',
					Iota: 'Ι',
					iota: 'ι',
					iprod: '⨼',
					iquest: '¿',
					iscr: '𝒾',
					Iscr: 'ℐ',
					isin: '∈',
					isindot: '⋵',
					isinE: '⋹',
					isins: '⋴',
					isinsv: '⋳',
					isinv: '∈',
					it: '⁢',
					Itilde: 'Ĩ',
					itilde: 'ĩ',
					Iukcy: 'І',
					iukcy: 'і',
					Iuml: 'Ï',
					iuml: 'ï',
					Jcirc: 'Ĵ',
					jcirc: 'ĵ',
					Jcy: 'Й',
					jcy: 'й',
					Jfr: '𝔍',
					jfr: '𝔧',
					jmath: 'ȷ',
					Jopf: '𝕁',
					jopf: '𝕛',
					Jscr: '𝒥',
					jscr: '𝒿',
					Jsercy: 'Ј',
					jsercy: 'ј',
					Jukcy: 'Є',
					jukcy: 'є',
					Kappa: 'Κ',
					kappa: 'κ',
					kappav: 'ϰ',
					Kcedil: 'Ķ',
					kcedil: 'ķ',
					Kcy: 'К',
					kcy: 'к',
					Kfr: '𝔎',
					kfr: '𝔨',
					kgreen: 'ĸ',
					KHcy: 'Х',
					khcy: 'х',
					KJcy: 'Ќ',
					kjcy: 'ќ',
					Kopf: '𝕂',
					kopf: '𝕜',
					Kscr: '𝒦',
					kscr: '𝓀',
					lAarr: '⇚',
					Lacute: 'Ĺ',
					lacute: 'ĺ',
					laemptyv: '⦴',
					lagran: 'ℒ',
					Lambda: 'Λ',
					lambda: 'λ',
					lang: '⟨',
					Lang: '⟪',
					langd: '⦑',
					langle: '⟨',
					lap: '⪅',
					Laplacetrf: 'ℒ',
					laquo: '«',
					larrb: '⇤',
					larrbfs: '⤟',
					larr: '←',
					Larr: '↞',
					lArr: '⇐',
					larrfs: '⤝',
					larrhk: '↩',
					larrlp: '↫',
					larrpl: '⤹',
					larrsim: '⥳',
					larrtl: '↢',
					latail: '⤙',
					lAtail: '⤛',
					lat: '⪫',
					late: '⪭',
					lates: '⪭︀',
					lbarr: '⤌',
					lBarr: '⤎',
					lbbrk: '❲',
					lbrace: '{',
					lbrack: '[',
					lbrke: '⦋',
					lbrksld: '⦏',
					lbrkslu: '⦍',
					Lcaron: 'Ľ',
					lcaron: 'ľ',
					Lcedil: 'Ļ',
					lcedil: 'ļ',
					lceil: '⌈',
					lcub: '{',
					Lcy: 'Л',
					lcy: 'л',
					ldca: '⤶',
					ldquo: '“',
					ldquor: '„',
					ldrdhar: '⥧',
					ldrushar: '⥋',
					ldsh: '↲',
					le: '≤',
					lE: '≦',
					LeftAngleBracket: '⟨',
					LeftArrowBar: '⇤',
					leftarrow: '←',
					LeftArrow: '←',
					Leftarrow: '⇐',
					LeftArrowRightArrow: '⇆',
					leftarrowtail: '↢',
					LeftCeiling: '⌈',
					LeftDoubleBracket: '⟦',
					LeftDownTeeVector: '⥡',
					LeftDownVectorBar: '⥙',
					LeftDownVector: '⇃',
					LeftFloor: '⌊',
					leftharpoondown: '↽',
					leftharpoonup: '↼',
					leftleftarrows: '⇇',
					leftrightarrow: '↔',
					LeftRightArrow: '↔',
					Leftrightarrow: '⇔',
					leftrightarrows: '⇆',
					leftrightharpoons: '⇋',
					leftrightsquigarrow: '↭',
					LeftRightVector: '⥎',
					LeftTeeArrow: '↤',
					LeftTee: '⊣',
					LeftTeeVector: '⥚',
					leftthreetimes: '⋋',
					LeftTriangleBar: '⧏',
					LeftTriangle: '⊲',
					LeftTriangleEqual: '⊴',
					LeftUpDownVector: '⥑',
					LeftUpTeeVector: '⥠',
					LeftUpVectorBar: '⥘',
					LeftUpVector: '↿',
					LeftVectorBar: '⥒',
					LeftVector: '↼',
					lEg: '⪋',
					leg: '⋚',
					leq: '≤',
					leqq: '≦',
					leqslant: '⩽',
					lescc: '⪨',
					les: '⩽',
					lesdot: '⩿',
					lesdoto: '⪁',
					lesdotor: '⪃',
					lesg: '⋚︀',
					lesges: '⪓',
					lessapprox: '⪅',
					lessdot: '⋖',
					lesseqgtr: '⋚',
					lesseqqgtr: '⪋',
					LessEqualGreater: '⋚',
					LessFullEqual: '≦',
					LessGreater: '≶',
					lessgtr: '≶',
					LessLess: '⪡',
					lesssim: '≲',
					LessSlantEqual: '⩽',
					LessTilde: '≲',
					lfisht: '⥼',
					lfloor: '⌊',
					Lfr: '𝔏',
					lfr: '𝔩',
					lg: '≶',
					lgE: '⪑',
					lHar: '⥢',
					lhard: '↽',
					lharu: '↼',
					lharul: '⥪',
					lhblk: '▄',
					LJcy: 'Љ',
					ljcy: 'љ',
					llarr: '⇇',
					ll: '≪',
					Ll: '⋘',
					llcorner: '⌞',
					Lleftarrow: '⇚',
					llhard: '⥫',
					lltri: '◺',
					Lmidot: 'Ŀ',
					lmidot: 'ŀ',
					lmoustache: '⎰',
					lmoust: '⎰',
					lnap: '⪉',
					lnapprox: '⪉',
					lne: '⪇',
					lnE: '≨',
					lneq: '⪇',
					lneqq: '≨',
					lnsim: '⋦',
					loang: '⟬',
					loarr: '⇽',
					lobrk: '⟦',
					longleftarrow: '⟵',
					LongLeftArrow: '⟵',
					Longleftarrow: '⟸',
					longleftrightarrow: '⟷',
					LongLeftRightArrow: '⟷',
					Longleftrightarrow: '⟺',
					longmapsto: '⟼',
					longrightarrow: '⟶',
					LongRightArrow: '⟶',
					Longrightarrow: '⟹',
					looparrowleft: '↫',
					looparrowright: '↬',
					lopar: '⦅',
					Lopf: '𝕃',
					lopf: '𝕝',
					loplus: '⨭',
					lotimes: '⨴',
					lowast: '∗',
					lowbar: '_',
					LowerLeftArrow: '↙',
					LowerRightArrow: '↘',
					loz: '◊',
					lozenge: '◊',
					lozf: '⧫',
					lpar: '(',
					lparlt: '⦓',
					lrarr: '⇆',
					lrcorner: '⌟',
					lrhar: '⇋',
					lrhard: '⥭',
					lrm: '‎',
					lrtri: '⊿',
					lsaquo: '‹',
					lscr: '𝓁',
					Lscr: 'ℒ',
					lsh: '↰',
					Lsh: '↰',
					lsim: '≲',
					lsime: '⪍',
					lsimg: '⪏',
					lsqb: '[',
					lsquo: '‘',
					lsquor: '‚',
					Lstrok: 'Ł',
					lstrok: 'ł',
					ltcc: '⪦',
					ltcir: '⩹',
					lt: '<',
					LT: '<',
					Lt: '≪',
					ltdot: '⋖',
					lthree: '⋋',
					ltimes: '⋉',
					ltlarr: '⥶',
					ltquest: '⩻',
					ltri: '◃',
					ltrie: '⊴',
					ltrif: '◂',
					ltrPar: '⦖',
					lurdshar: '⥊',
					luruhar: '⥦',
					lvertneqq: '≨︀',
					lvnE: '≨︀',
					macr: '¯',
					male: '♂',
					malt: '✠',
					maltese: '✠',
					Map: '⤅',
					map: '↦',
					mapsto: '↦',
					mapstodown: '↧',
					mapstoleft: '↤',
					mapstoup: '↥',
					marker: '▮',
					mcomma: '⨩',
					Mcy: 'М',
					mcy: 'м',
					mdash: '—',
					mDDot: '∺',
					measuredangle: '∡',
					MediumSpace: ' ',
					Mellintrf: 'ℳ',
					Mfr: '𝔐',
					mfr: '𝔪',
					mho: '℧',
					micro: 'µ',
					midast: '*',
					midcir: '⫰',
					mid: '∣',
					middot: '·',
					minusb: '⊟',
					minus: '−',
					minusd: '∸',
					minusdu: '⨪',
					MinusPlus: '∓',
					mlcp: '⫛',
					mldr: '…',
					mnplus: '∓',
					models: '⊧',
					Mopf: '𝕄',
					mopf: '𝕞',
					mp: '∓',
					mscr: '𝓂',
					Mscr: 'ℳ',
					mstpos: '∾',
					Mu: 'Μ',
					mu: 'μ',
					multimap: '⊸',
					mumap: '⊸',
					nabla: '∇',
					Nacute: 'Ń',
					nacute: 'ń',
					nang: '∠⃒',
					nap: '≉',
					napE: '⩰̸',
					napid: '≋̸',
					napos: 'ŉ',
					napprox: '≉',
					natural: '♮',
					naturals: 'ℕ',
					natur: '♮',
					nbsp: ' ',
					nbump: '≎̸',
					nbumpe: '≏̸',
					ncap: '⩃',
					Ncaron: 'Ň',
					ncaron: 'ň',
					Ncedil: 'Ņ',
					ncedil: 'ņ',
					ncong: '≇',
					ncongdot: '⩭̸',
					ncup: '⩂',
					Ncy: 'Н',
					ncy: 'н',
					ndash: '–',
					nearhk: '⤤',
					nearr: '↗',
					neArr: '⇗',
					nearrow: '↗',
					ne: '≠',
					nedot: '≐̸',
					NegativeMediumSpace: '​',
					NegativeThickSpace: '​',
					NegativeThinSpace: '​',
					NegativeVeryThinSpace: '​',
					nequiv: '≢',
					nesear: '⤨',
					nesim: '≂̸',
					NestedGreaterGreater: '≫',
					NestedLessLess: '≪',
					NewLine: '\n',
					nexist: '∄',
					nexists: '∄',
					Nfr: '𝔑',
					nfr: '𝔫',
					ngE: '≧̸',
					nge: '≱',
					ngeq: '≱',
					ngeqq: '≧̸',
					ngeqslant: '⩾̸',
					nges: '⩾̸',
					nGg: '⋙̸',
					ngsim: '≵',
					nGt: '≫⃒',
					ngt: '≯',
					ngtr: '≯',
					nGtv: '≫̸',
					nharr: '↮',
					nhArr: '⇎',
					nhpar: '⫲',
					ni: '∋',
					nis: '⋼',
					nisd: '⋺',
					niv: '∋',
					NJcy: 'Њ',
					njcy: 'њ',
					nlarr: '↚',
					nlArr: '⇍',
					nldr: '‥',
					nlE: '≦̸',
					nle: '≰',
					nleftarrow: '↚',
					nLeftarrow: '⇍',
					nleftrightarrow: '↮',
					nLeftrightarrow: '⇎',
					nleq: '≰',
					nleqq: '≦̸',
					nleqslant: '⩽̸',
					nles: '⩽̸',
					nless: '≮',
					nLl: '⋘̸',
					nlsim: '≴',
					nLt: '≪⃒',
					nlt: '≮',
					nltri: '⋪',
					nltrie: '⋬',
					nLtv: '≪̸',
					nmid: '∤',
					NoBreak: '⁠',
					NonBreakingSpace: ' ',
					nopf: '𝕟',
					Nopf: 'ℕ',
					Not: '⫬',
					not: '¬',
					NotCongruent: '≢',
					NotCupCap: '≭',
					NotDoubleVerticalBar: '∦',
					NotElement: '∉',
					NotEqual: '≠',
					NotEqualTilde: '≂̸',
					NotExists: '∄',
					NotGreater: '≯',
					NotGreaterEqual: '≱',
					NotGreaterFullEqual: '≧̸',
					NotGreaterGreater: '≫̸',
					NotGreaterLess: '≹',
					NotGreaterSlantEqual: '⩾̸',
					NotGreaterTilde: '≵',
					NotHumpDownHump: '≎̸',
					NotHumpEqual: '≏̸',
					notin: '∉',
					notindot: '⋵̸',
					notinE: '⋹̸',
					notinva: '∉',
					notinvb: '⋷',
					notinvc: '⋶',
					NotLeftTriangleBar: '⧏̸',
					NotLeftTriangle: '⋪',
					NotLeftTriangleEqual: '⋬',
					NotLess: '≮',
					NotLessEqual: '≰',
					NotLessGreater: '≸',
					NotLessLess: '≪̸',
					NotLessSlantEqual: '⩽̸',
					NotLessTilde: '≴',
					NotNestedGreaterGreater: '⪢̸',
					NotNestedLessLess: '⪡̸',
					notni: '∌',
					notniva: '∌',
					notnivb: '⋾',
					notnivc: '⋽',
					NotPrecedes: '⊀',
					NotPrecedesEqual: '⪯̸',
					NotPrecedesSlantEqual: '⋠',
					NotReverseElement: '∌',
					NotRightTriangleBar: '⧐̸',
					NotRightTriangle: '⋫',
					NotRightTriangleEqual: '⋭',
					NotSquareSubset: '⊏̸',
					NotSquareSubsetEqual: '⋢',
					NotSquareSuperset: '⊐̸',
					NotSquareSupersetEqual: '⋣',
					NotSubset: '⊂⃒',
					NotSubsetEqual: '⊈',
					NotSucceeds: '⊁',
					NotSucceedsEqual: '⪰̸',
					NotSucceedsSlantEqual: '⋡',
					NotSucceedsTilde: '≿̸',
					NotSuperset: '⊃⃒',
					NotSupersetEqual: '⊉',
					NotTilde: '≁',
					NotTildeEqual: '≄',
					NotTildeFullEqual: '≇',
					NotTildeTilde: '≉',
					NotVerticalBar: '∤',
					nparallel: '∦',
					npar: '∦',
					nparsl: '⫽⃥',
					npart: '∂̸',
					npolint: '⨔',
					npr: '⊀',
					nprcue: '⋠',
					nprec: '⊀',
					npreceq: '⪯̸',
					npre: '⪯̸',
					nrarrc: '⤳̸',
					nrarr: '↛',
					nrArr: '⇏',
					nrarrw: '↝̸',
					nrightarrow: '↛',
					nRightarrow: '⇏',
					nrtri: '⋫',
					nrtrie: '⋭',
					nsc: '⊁',
					nsccue: '⋡',
					nsce: '⪰̸',
					Nscr: '𝒩',
					nscr: '𝓃',
					nshortmid: '∤',
					nshortparallel: '∦',
					nsim: '≁',
					nsime: '≄',
					nsimeq: '≄',
					nsmid: '∤',
					nspar: '∦',
					nsqsube: '⋢',
					nsqsupe: '⋣',
					nsub: '⊄',
					nsubE: '⫅̸',
					nsube: '⊈',
					nsubset: '⊂⃒',
					nsubseteq: '⊈',
					nsubseteqq: '⫅̸',
					nsucc: '⊁',
					nsucceq: '⪰̸',
					nsup: '⊅',
					nsupE: '⫆̸',
					nsupe: '⊉',
					nsupset: '⊃⃒',
					nsupseteq: '⊉',
					nsupseteqq: '⫆̸',
					ntgl: '≹',
					Ntilde: 'Ñ',
					ntilde: 'ñ',
					ntlg: '≸',
					ntriangleleft: '⋪',
					ntrianglelefteq: '⋬',
					ntriangleright: '⋫',
					ntrianglerighteq: '⋭',
					Nu: 'Ν',
					nu: 'ν',
					num: '#',
					numero: '№',
					numsp: ' ',
					nvap: '≍⃒',
					nvdash: '⊬',
					nvDash: '⊭',
					nVdash: '⊮',
					nVDash: '⊯',
					nvge: '≥⃒',
					nvgt: '>⃒',
					nvHarr: '⤄',
					nvinfin: '⧞',
					nvlArr: '⤂',
					nvle: '≤⃒',
					nvlt: '<⃒',
					nvltrie: '⊴⃒',
					nvrArr: '⤃',
					nvrtrie: '⊵⃒',
					nvsim: '∼⃒',
					nwarhk: '⤣',
					nwarr: '↖',
					nwArr: '⇖',
					nwarrow: '↖',
					nwnear: '⤧',
					Oacute: 'Ó',
					oacute: 'ó',
					oast: '⊛',
					Ocirc: 'Ô',
					ocirc: 'ô',
					ocir: '⊚',
					Ocy: 'О',
					ocy: 'о',
					odash: '⊝',
					Odblac: 'Ő',
					odblac: 'ő',
					odiv: '⨸',
					odot: '⊙',
					odsold: '⦼',
					OElig: 'Œ',
					oelig: 'œ',
					ofcir: '⦿',
					Ofr: '𝔒',
					ofr: '𝔬',
					ogon: '˛',
					Ograve: 'Ò',
					ograve: 'ò',
					ogt: '⧁',
					ohbar: '⦵',
					ohm: 'Ω',
					oint: '∮',
					olarr: '↺',
					olcir: '⦾',
					olcross: '⦻',
					oline: '‾',
					olt: '⧀',
					Omacr: 'Ō',
					omacr: 'ō',
					Omega: 'Ω',
					omega: 'ω',
					Omicron: 'Ο',
					omicron: 'ο',
					omid: '⦶',
					ominus: '⊖',
					Oopf: '𝕆',
					oopf: '𝕠',
					opar: '⦷',
					OpenCurlyDoubleQuote: '“',
					OpenCurlyQuote: '‘',
					operp: '⦹',
					oplus: '⊕',
					orarr: '↻',
					Or: '⩔',
					or: '∨',
					ord: '⩝',
					order: 'ℴ',
					orderof: 'ℴ',
					ordf: 'ª',
					ordm: 'º',
					origof: '⊶',
					oror: '⩖',
					orslope: '⩗',
					orv: '⩛',
					oS: 'Ⓢ',
					Oscr: '𝒪',
					oscr: 'ℴ',
					Oslash: 'Ø',
					oslash: 'ø',
					osol: '⊘',
					Otilde: 'Õ',
					otilde: 'õ',
					otimesas: '⨶',
					Otimes: '⨷',
					otimes: '⊗',
					Ouml: 'Ö',
					ouml: 'ö',
					ovbar: '⌽',
					OverBar: '‾',
					OverBrace: '⏞',
					OverBracket: '⎴',
					OverParenthesis: '⏜',
					para: '¶',
					parallel: '∥',
					par: '∥',
					parsim: '⫳',
					parsl: '⫽',
					part: '∂',
					PartialD: '∂',
					Pcy: 'П',
					pcy: 'п',
					percnt: '%',
					period: '.',
					permil: '‰',
					perp: '⊥',
					pertenk: '‱',
					Pfr: '𝔓',
					pfr: '𝔭',
					Phi: 'Φ',
					phi: 'φ',
					phiv: 'ϕ',
					phmmat: 'ℳ',
					phone: '☎',
					Pi: 'Π',
					pi: 'π',
					pitchfork: '⋔',
					piv: 'ϖ',
					planck: 'ℏ',
					planckh: 'ℎ',
					plankv: 'ℏ',
					plusacir: '⨣',
					plusb: '⊞',
					pluscir: '⨢',
					plus: '+',
					plusdo: '∔',
					plusdu: '⨥',
					pluse: '⩲',
					PlusMinus: '±',
					plusmn: '±',
					plussim: '⨦',
					plustwo: '⨧',
					pm: '±',
					Poincareplane: 'ℌ',
					pointint: '⨕',
					popf: '𝕡',
					Popf: 'ℙ',
					pound: '£',
					prap: '⪷',
					Pr: '⪻',
					pr: '≺',
					prcue: '≼',
					precapprox: '⪷',
					prec: '≺',
					preccurlyeq: '≼',
					Precedes: '≺',
					PrecedesEqual: '⪯',
					PrecedesSlantEqual: '≼',
					PrecedesTilde: '≾',
					preceq: '⪯',
					precnapprox: '⪹',
					precneqq: '⪵',
					precnsim: '⋨',
					pre: '⪯',
					prE: '⪳',
					precsim: '≾',
					prime: '′',
					Prime: '″',
					primes: 'ℙ',
					prnap: '⪹',
					prnE: '⪵',
					prnsim: '⋨',
					prod: '∏',
					Product: '∏',
					profalar: '⌮',
					profline: '⌒',
					profsurf: '⌓',
					prop: '∝',
					Proportional: '∝',
					Proportion: '∷',
					propto: '∝',
					prsim: '≾',
					prurel: '⊰',
					Pscr: '𝒫',
					pscr: '𝓅',
					Psi: 'Ψ',
					psi: 'ψ',
					puncsp: ' ',
					Qfr: '𝔔',
					qfr: '𝔮',
					qint: '⨌',
					qopf: '𝕢',
					Qopf: 'ℚ',
					qprime: '⁗',
					Qscr: '𝒬',
					qscr: '𝓆',
					quaternions: 'ℍ',
					quatint: '⨖',
					quest: '?',
					questeq: '≟',
					quot: '"',
					QUOT: '"',
					rAarr: '⇛',
					race: '∽̱',
					Racute: 'Ŕ',
					racute: 'ŕ',
					radic: '√',
					raemptyv: '⦳',
					rang: '⟩',
					Rang: '⟫',
					rangd: '⦒',
					range: '⦥',
					rangle: '⟩',
					raquo: '»',
					rarrap: '⥵',
					rarrb: '⇥',
					rarrbfs: '⤠',
					rarrc: '⤳',
					rarr: '→',
					Rarr: '↠',
					rArr: '⇒',
					rarrfs: '⤞',
					rarrhk: '↪',
					rarrlp: '↬',
					rarrpl: '⥅',
					rarrsim: '⥴',
					Rarrtl: '⤖',
					rarrtl: '↣',
					rarrw: '↝',
					ratail: '⤚',
					rAtail: '⤜',
					ratio: '∶',
					rationals: 'ℚ',
					rbarr: '⤍',
					rBarr: '⤏',
					RBarr: '⤐',
					rbbrk: '❳',
					rbrace: '}',
					rbrack: ']',
					rbrke: '⦌',
					rbrksld: '⦎',
					rbrkslu: '⦐',
					Rcaron: 'Ř',
					rcaron: 'ř',
					Rcedil: 'Ŗ',
					rcedil: 'ŗ',
					rceil: '⌉',
					rcub: '}',
					Rcy: 'Р',
					rcy: 'р',
					rdca: '⤷',
					rdldhar: '⥩',
					rdquo: '”',
					rdquor: '”',
					rdsh: '↳',
					real: 'ℜ',
					realine: 'ℛ',
					realpart: 'ℜ',
					reals: 'ℝ',
					Re: 'ℜ',
					rect: '▭',
					reg: '®',
					REG: '®',
					ReverseElement: '∋',
					ReverseEquilibrium: '⇋',
					ReverseUpEquilibrium: '⥯',
					rfisht: '⥽',
					rfloor: '⌋',
					rfr: '𝔯',
					Rfr: 'ℜ',
					rHar: '⥤',
					rhard: '⇁',
					rharu: '⇀',
					rharul: '⥬',
					Rho: 'Ρ',
					rho: 'ρ',
					rhov: 'ϱ',
					RightAngleBracket: '⟩',
					RightArrowBar: '⇥',
					rightarrow: '→',
					RightArrow: '→',
					Rightarrow: '⇒',
					RightArrowLeftArrow: '⇄',
					rightarrowtail: '↣',
					RightCeiling: '⌉',
					RightDoubleBracket: '⟧',
					RightDownTeeVector: '⥝',
					RightDownVectorBar: '⥕',
					RightDownVector: '⇂',
					RightFloor: '⌋',
					rightharpoondown: '⇁',
					rightharpoonup: '⇀',
					rightleftarrows: '⇄',
					rightleftharpoons: '⇌',
					rightrightarrows: '⇉',
					rightsquigarrow: '↝',
					RightTeeArrow: '↦',
					RightTee: '⊢',
					RightTeeVector: '⥛',
					rightthreetimes: '⋌',
					RightTriangleBar: '⧐',
					RightTriangle: '⊳',
					RightTriangleEqual: '⊵',
					RightUpDownVector: '⥏',
					RightUpTeeVector: '⥜',
					RightUpVectorBar: '⥔',
					RightUpVector: '↾',
					RightVectorBar: '⥓',
					RightVector: '⇀',
					ring: '˚',
					risingdotseq: '≓',
					rlarr: '⇄',
					rlhar: '⇌',
					rlm: '‏',
					rmoustache: '⎱',
					rmoust: '⎱',
					rnmid: '⫮',
					roang: '⟭',
					roarr: '⇾',
					robrk: '⟧',
					ropar: '⦆',
					ropf: '𝕣',
					Ropf: 'ℝ',
					roplus: '⨮',
					rotimes: '⨵',
					RoundImplies: '⥰',
					rpar: ')',
					rpargt: '⦔',
					rppolint: '⨒',
					rrarr: '⇉',
					Rrightarrow: '⇛',
					rsaquo: '›',
					rscr: '𝓇',
					Rscr: 'ℛ',
					rsh: '↱',
					Rsh: '↱',
					rsqb: ']',
					rsquo: '’',
					rsquor: '’',
					rthree: '⋌',
					rtimes: '⋊',
					rtri: '▹',
					rtrie: '⊵',
					rtrif: '▸',
					rtriltri: '⧎',
					RuleDelayed: '⧴',
					ruluhar: '⥨',
					rx: '℞',
					Sacute: 'Ś',
					sacute: 'ś',
					sbquo: '‚',
					scap: '⪸',
					Scaron: 'Š',
					scaron: 'š',
					Sc: '⪼',
					sc: '≻',
					sccue: '≽',
					sce: '⪰',
					scE: '⪴',
					Scedil: 'Ş',
					scedil: 'ş',
					Scirc: 'Ŝ',
					scirc: 'ŝ',
					scnap: '⪺',
					scnE: '⪶',
					scnsim: '⋩',
					scpolint: '⨓',
					scsim: '≿',
					Scy: 'С',
					scy: 'с',
					sdotb: '⊡',
					sdot: '⋅',
					sdote: '⩦',
					searhk: '⤥',
					searr: '↘',
					seArr: '⇘',
					searrow: '↘',
					sect: '§',
					semi: ';',
					seswar: '⤩',
					setminus: '∖',
					setmn: '∖',
					sext: '✶',
					Sfr: '𝔖',
					sfr: '𝔰',
					sfrown: '⌢',
					sharp: '♯',
					SHCHcy: 'Щ',
					shchcy: 'щ',
					SHcy: 'Ш',
					shcy: 'ш',
					ShortDownArrow: '↓',
					ShortLeftArrow: '←',
					shortmid: '∣',
					shortparallel: '∥',
					ShortRightArrow: '→',
					ShortUpArrow: '↑',
					shy: '­',
					Sigma: 'Σ',
					sigma: 'σ',
					sigmaf: 'ς',
					sigmav: 'ς',
					sim: '∼',
					simdot: '⩪',
					sime: '≃',
					simeq: '≃',
					simg: '⪞',
					simgE: '⪠',
					siml: '⪝',
					simlE: '⪟',
					simne: '≆',
					simplus: '⨤',
					simrarr: '⥲',
					slarr: '←',
					SmallCircle: '∘',
					smallsetminus: '∖',
					smashp: '⨳',
					smeparsl: '⧤',
					smid: '∣',
					smile: '⌣',
					smt: '⪪',
					smte: '⪬',
					smtes: '⪬︀',
					SOFTcy: 'Ь',
					softcy: 'ь',
					solbar: '⌿',
					solb: '⧄',
					sol: '/',
					Sopf: '𝕊',
					sopf: '𝕤',
					spades: '♠',
					spadesuit: '♠',
					spar: '∥',
					sqcap: '⊓',
					sqcaps: '⊓︀',
					sqcup: '⊔',
					sqcups: '⊔︀',
					Sqrt: '√',
					sqsub: '⊏',
					sqsube: '⊑',
					sqsubset: '⊏',
					sqsubseteq: '⊑',
					sqsup: '⊐',
					sqsupe: '⊒',
					sqsupset: '⊐',
					sqsupseteq: '⊒',
					square: '□',
					Square: '□',
					SquareIntersection: '⊓',
					SquareSubset: '⊏',
					SquareSubsetEqual: '⊑',
					SquareSuperset: '⊐',
					SquareSupersetEqual: '⊒',
					SquareUnion: '⊔',
					squarf: '▪',
					squ: '□',
					squf: '▪',
					srarr: '→',
					Sscr: '𝒮',
					sscr: '𝓈',
					ssetmn: '∖',
					ssmile: '⌣',
					sstarf: '⋆',
					Star: '⋆',
					star: '☆',
					starf: '★',
					straightepsilon: 'ϵ',
					straightphi: 'ϕ',
					strns: '¯',
					sub: '⊂',
					Sub: '⋐',
					subdot: '⪽',
					subE: '⫅',
					sube: '⊆',
					subedot: '⫃',
					submult: '⫁',
					subnE: '⫋',
					subne: '⊊',
					subplus: '⪿',
					subrarr: '⥹',
					subset: '⊂',
					Subset: '⋐',
					subseteq: '⊆',
					subseteqq: '⫅',
					SubsetEqual: '⊆',
					subsetneq: '⊊',
					subsetneqq: '⫋',
					subsim: '⫇',
					subsub: '⫕',
					subsup: '⫓',
					succapprox: '⪸',
					succ: '≻',
					succcurlyeq: '≽',
					Succeeds: '≻',
					SucceedsEqual: '⪰',
					SucceedsSlantEqual: '≽',
					SucceedsTilde: '≿',
					succeq: '⪰',
					succnapprox: '⪺',
					succneqq: '⪶',
					succnsim: '⋩',
					succsim: '≿',
					SuchThat: '∋',
					sum: '∑',
					Sum: '∑',
					sung: '♪',
					sup1: '¹',
					sup2: '²',
					sup3: '³',
					sup: '⊃',
					Sup: '⋑',
					supdot: '⪾',
					supdsub: '⫘',
					supE: '⫆',
					supe: '⊇',
					supedot: '⫄',
					Superset: '⊃',
					SupersetEqual: '⊇',
					suphsol: '⟉',
					suphsub: '⫗',
					suplarr: '⥻',
					supmult: '⫂',
					supnE: '⫌',
					supne: '⊋',
					supplus: '⫀',
					supset: '⊃',
					Supset: '⋑',
					supseteq: '⊇',
					supseteqq: '⫆',
					supsetneq: '⊋',
					supsetneqq: '⫌',
					supsim: '⫈',
					supsub: '⫔',
					supsup: '⫖',
					swarhk: '⤦',
					swarr: '↙',
					swArr: '⇙',
					swarrow: '↙',
					swnwar: '⤪',
					szlig: 'ß',
					Tab: '\t',
					target: '⌖',
					Tau: 'Τ',
					tau: 'τ',
					tbrk: '⎴',
					Tcaron: 'Ť',
					tcaron: 'ť',
					Tcedil: 'Ţ',
					tcedil: 'ţ',
					Tcy: 'Т',
					tcy: 'т',
					tdot: '⃛',
					telrec: '⌕',
					Tfr: '𝔗',
					tfr: '𝔱',
					there4: '∴',
					therefore: '∴',
					Therefore: '∴',
					Theta: 'Θ',
					theta: 'θ',
					thetasym: 'ϑ',
					thetav: 'ϑ',
					thickapprox: '≈',
					thicksim: '∼',
					ThickSpace: '  ',
					ThinSpace: ' ',
					thinsp: ' ',
					thkap: '≈',
					thksim: '∼',
					THORN: 'Þ',
					thorn: 'þ',
					tilde: '˜',
					Tilde: '∼',
					TildeEqual: '≃',
					TildeFullEqual: '≅',
					TildeTilde: '≈',
					timesbar: '⨱',
					timesb: '⊠',
					times: '×',
					timesd: '⨰',
					tint: '∭',
					toea: '⤨',
					topbot: '⌶',
					topcir: '⫱',
					top: '⊤',
					Topf: '𝕋',
					topf: '𝕥',
					topfork: '⫚',
					tosa: '⤩',
					tprime: '‴',
					trade: '™',
					TRADE: '™',
					triangle: '▵',
					triangledown: '▿',
					triangleleft: '◃',
					trianglelefteq: '⊴',
					triangleq: '≜',
					triangleright: '▹',
					trianglerighteq: '⊵',
					tridot: '◬',
					trie: '≜',
					triminus: '⨺',
					TripleDot: '⃛',
					triplus: '⨹',
					trisb: '⧍',
					tritime: '⨻',
					trpezium: '⏢',
					Tscr: '𝒯',
					tscr: '𝓉',
					TScy: 'Ц',
					tscy: 'ц',
					TSHcy: 'Ћ',
					tshcy: 'ћ',
					Tstrok: 'Ŧ',
					tstrok: 'ŧ',
					twixt: '≬',
					twoheadleftarrow: '↞',
					twoheadrightarrow: '↠',
					Uacute: 'Ú',
					uacute: 'ú',
					uarr: '↑',
					Uarr: '↟',
					uArr: '⇑',
					Uarrocir: '⥉',
					Ubrcy: 'Ў',
					ubrcy: 'ў',
					Ubreve: 'Ŭ',
					ubreve: 'ŭ',
					Ucirc: 'Û',
					ucirc: 'û',
					Ucy: 'У',
					ucy: 'у',
					udarr: '⇅',
					Udblac: 'Ű',
					udblac: 'ű',
					udhar: '⥮',
					ufisht: '⥾',
					Ufr: '𝔘',
					ufr: '𝔲',
					Ugrave: 'Ù',
					ugrave: 'ù',
					uHar: '⥣',
					uharl: '↿',
					uharr: '↾',
					uhblk: '▀',
					ulcorn: '⌜',
					ulcorner: '⌜',
					ulcrop: '⌏',
					ultri: '◸',
					Umacr: 'Ū',
					umacr: 'ū',
					uml: '¨',
					UnderBar: '_',
					UnderBrace: '⏟',
					UnderBracket: '⎵',
					UnderParenthesis: '⏝',
					Union: '⋃',
					UnionPlus: '⊎',
					Uogon: 'Ų',
					uogon: 'ų',
					Uopf: '𝕌',
					uopf: '𝕦',
					UpArrowBar: '⤒',
					uparrow: '↑',
					UpArrow: '↑',
					Uparrow: '⇑',
					UpArrowDownArrow: '⇅',
					updownarrow: '↕',
					UpDownArrow: '↕',
					Updownarrow: '⇕',
					UpEquilibrium: '⥮',
					upharpoonleft: '↿',
					upharpoonright: '↾',
					uplus: '⊎',
					UpperLeftArrow: '↖',
					UpperRightArrow: '↗',
					upsi: 'υ',
					Upsi: 'ϒ',
					upsih: 'ϒ',
					Upsilon: 'Υ',
					upsilon: 'υ',
					UpTeeArrow: '↥',
					UpTee: '⊥',
					upuparrows: '⇈',
					urcorn: '⌝',
					urcorner: '⌝',
					urcrop: '⌎',
					Uring: 'Ů',
					uring: 'ů',
					urtri: '◹',
					Uscr: '𝒰',
					uscr: '𝓊',
					utdot: '⋰',
					Utilde: 'Ũ',
					utilde: 'ũ',
					utri: '▵',
					utrif: '▴',
					uuarr: '⇈',
					Uuml: 'Ü',
					uuml: 'ü',
					uwangle: '⦧',
					vangrt: '⦜',
					varepsilon: 'ϵ',
					varkappa: 'ϰ',
					varnothing: '∅',
					varphi: 'ϕ',
					varpi: 'ϖ',
					varpropto: '∝',
					varr: '↕',
					vArr: '⇕',
					varrho: 'ϱ',
					varsigma: 'ς',
					varsubsetneq: '⊊︀',
					varsubsetneqq: '⫋︀',
					varsupsetneq: '⊋︀',
					varsupsetneqq: '⫌︀',
					vartheta: 'ϑ',
					vartriangleleft: '⊲',
					vartriangleright: '⊳',
					vBar: '⫨',
					Vbar: '⫫',
					vBarv: '⫩',
					Vcy: 'В',
					vcy: 'в',
					vdash: '⊢',
					vDash: '⊨',
					Vdash: '⊩',
					VDash: '⊫',
					Vdashl: '⫦',
					veebar: '⊻',
					vee: '∨',
					Vee: '⋁',
					veeeq: '≚',
					vellip: '⋮',
					verbar: '|',
					Verbar: '‖',
					vert: '|',
					Vert: '‖',
					VerticalBar: '∣',
					VerticalLine: '|',
					VerticalSeparator: '❘',
					VerticalTilde: '≀',
					VeryThinSpace: ' ',
					Vfr: '𝔙',
					vfr: '𝔳',
					vltri: '⊲',
					vnsub: '⊂⃒',
					vnsup: '⊃⃒',
					Vopf: '𝕍',
					vopf: '𝕧',
					vprop: '∝',
					vrtri: '⊳',
					Vscr: '𝒱',
					vscr: '𝓋',
					vsubnE: '⫋︀',
					vsubne: '⊊︀',
					vsupnE: '⫌︀',
					vsupne: '⊋︀',
					Vvdash: '⊪',
					vzigzag: '⦚',
					Wcirc: 'Ŵ',
					wcirc: 'ŵ',
					wedbar: '⩟',
					wedge: '∧',
					Wedge: '⋀',
					wedgeq: '≙',
					weierp: '℘',
					Wfr: '𝔚',
					wfr: '𝔴',
					Wopf: '𝕎',
					wopf: '𝕨',
					wp: '℘',
					wr: '≀',
					wreath: '≀',
					Wscr: '𝒲',
					wscr: '𝓌',
					xcap: '⋂',
					xcirc: '◯',
					xcup: '⋃',
					xdtri: '▽',
					Xfr: '𝔛',
					xfr: '𝔵',
					xharr: '⟷',
					xhArr: '⟺',
					Xi: 'Ξ',
					xi: 'ξ',
					xlarr: '⟵',
					xlArr: '⟸',
					xmap: '⟼',
					xnis: '⋻',
					xodot: '⨀',
					Xopf: '𝕏',
					xopf: '𝕩',
					xoplus: '⨁',
					xotime: '⨂',
					xrarr: '⟶',
					xrArr: '⟹',
					Xscr: '𝒳',
					xscr: '𝓍',
					xsqcup: '⨆',
					xuplus: '⨄',
					xutri: '△',
					xvee: '⋁',
					xwedge: '⋀',
					Yacute: 'Ý',
					yacute: 'ý',
					YAcy: 'Я',
					yacy: 'я',
					Ycirc: 'Ŷ',
					ycirc: 'ŷ',
					Ycy: 'Ы',
					ycy: 'ы',
					yen: '¥',
					Yfr: '𝔜',
					yfr: '𝔶',
					YIcy: 'Ї',
					yicy: 'ї',
					Yopf: '𝕐',
					yopf: '𝕪',
					Yscr: '𝒴',
					yscr: '𝓎',
					YUcy: 'Ю',
					yucy: 'ю',
					yuml: 'ÿ',
					Yuml: 'Ÿ',
					Zacute: 'Ź',
					zacute: 'ź',
					Zcaron: 'Ž',
					zcaron: 'ž',
					Zcy: 'З',
					zcy: 'з',
					Zdot: 'Ż',
					zdot: 'ż',
					zeetrf: 'ℨ',
					ZeroWidthSpace: '​',
					Zeta: 'Ζ',
					zeta: 'ζ',
					zfr: '𝔷',
					Zfr: 'ℨ',
					ZHcy: 'Ж',
					zhcy: 'ж',
					zigrarr: '⇝',
					zopf: '𝕫',
					Zopf: 'ℤ',
					Zscr: '𝒵',
					zscr: '𝓏',
					zwj: '‍',
					zwnj: '‌'
				},
				o = {
					Aacute: 'Á',
					aacute: 'á',
					Acirc: 'Â',
					acirc: 'â',
					acute: '´',
					AElig: 'Æ',
					aelig: 'æ',
					Agrave: 'À',
					agrave: 'à',
					amp: '&',
					AMP: '&',
					Aring: 'Å',
					aring: 'å',
					Atilde: 'Ã',
					atilde: 'ã',
					Auml: 'Ä',
					auml: 'ä',
					brvbar: '¦',
					Ccedil: 'Ç',
					ccedil: 'ç',
					cedil: '¸',
					cent: '¢',
					copy: '©',
					COPY: '©',
					curren: '¤',
					deg: '°',
					divide: '÷',
					Eacute: 'É',
					eacute: 'é',
					Ecirc: 'Ê',
					ecirc: 'ê',
					Egrave: 'È',
					egrave: 'è',
					ETH: 'Ð',
					eth: 'ð',
					Euml: 'Ë',
					euml: 'ë',
					frac12: '½',
					frac14: '¼',
					frac34: '¾',
					gt: '>',
					GT: '>',
					Iacute: 'Í',
					iacute: 'í',
					Icirc: 'Î',
					icirc: 'î',
					iexcl: '¡',
					Igrave: 'Ì',
					igrave: 'ì',
					iquest: '¿',
					Iuml: 'Ï',
					iuml: 'ï',
					laquo: '«',
					lt: '<',
					LT: '<',
					macr: '¯',
					micro: 'µ',
					middot: '·',
					nbsp: ' ',
					not: '¬',
					Ntilde: 'Ñ',
					ntilde: 'ñ',
					Oacute: 'Ó',
					oacute: 'ó',
					Ocirc: 'Ô',
					ocirc: 'ô',
					Ograve: 'Ò',
					ograve: 'ò',
					ordf: 'ª',
					ordm: 'º',
					Oslash: 'Ø',
					oslash: 'ø',
					Otilde: 'Õ',
					otilde: 'õ',
					Ouml: 'Ö',
					ouml: 'ö',
					para: '¶',
					plusmn: '±',
					pound: '£',
					quot: '"',
					QUOT: '"',
					raquo: '»',
					reg: '®',
					REG: '®',
					sect: '§',
					shy: '­',
					sup1: '¹',
					sup2: '²',
					sup3: '³',
					szlig: 'ß',
					THORN: 'Þ',
					thorn: 'þ',
					times: '×',
					Uacute: 'Ú',
					uacute: 'ú',
					Ucirc: 'Û',
					ucirc: 'û',
					Ugrave: 'Ù',
					ugrave: 'ù',
					uml: '¨',
					Uuml: 'Ü',
					uuml: 'ü',
					Yacute: 'Ý',
					yacute: 'ý',
					yen: '¥',
					yuml: 'ÿ'
				},
				i = { amp: '&', apos: "'", gt: '>', lt: '<', quot: '"' },
				a = {},
				c =
					(t && t.__importDefault) ||
					function (e) {
						return e && e.__esModule ? e : { default: e };
					},
				z =
					(Object.defineProperty(a, '__esModule', { value: !0 }),
					c({
						0: 65533,
						128: 8364,
						130: 8218,
						131: 402,
						132: 8222,
						133: 8230,
						134: 8224,
						135: 8225,
						136: 710,
						137: 8240,
						138: 352,
						139: 8249,
						140: 338,
						142: 381,
						145: 8216,
						146: 8217,
						147: 8220,
						148: 8221,
						149: 8226,
						150: 8211,
						151: 8212,
						152: 732,
						153: 8482,
						154: 353,
						155: 8250,
						156: 339,
						158: 382,
						159: 376
					})),
				U =
					String.fromCodePoint ||
					function (e) {
						var t = '';
						return (
							65535 < e &&
								((e -= 65536),
								(t += String.fromCharCode(((e >>> 10) & 1023) | 55296)),
								(e = 56320 | (1023 & e))),
							(t += String.fromCharCode(e))
						);
					};
			a.default = function (e) {
				return (55296 <= e && e <= 57343) || 1114111 < e
					? '�'
					: (e in z.default && (e = z.default[e]), U(e));
			};
			var c =
					(t && t.__importDefault) ||
					function (e) {
						return e && e.__esModule ? e : { default: e };
					},
				V =
					(Object.defineProperty(n, '__esModule', { value: !0 }),
					(n.decodeHTML = n.decodeHTMLStrict = n.decodeXML = void 0),
					c(r)),
				$ = c(o),
				o = c(i),
				W = c(a),
				G = /&(?:[a-zA-Z0-9]+|#[xX][\da-fA-F]+|#\d+);/g;
			function Z(e) {
				var t = K(e);
				return function (e) {
					return String(e).replace(G, t);
				};
			}
			(n.decodeXML = Z(o.default)), (n.decodeHTMLStrict = Z(V.default));
			function X(e, t) {
				return e < t ? 1 : -1;
			}
			function K(n) {
				return function (e) {
					var t;
					return '#' === e.charAt(1)
						? 'X' === (t = e.charAt(2)) || 'x' === t
							? W.default(parseInt(e.substr(3), 16))
							: W.default(parseInt(e.substr(2), 10))
						: n[e.slice(1, -1)] || e;
				};
			}
			n.decodeHTML = (function () {
				for (
					var e = Object.keys($.default).sort(X), t = Object.keys(V.default).sort(X), n = 0, r = 0;
					n < t.length;
					n++
				)
					e[r] === t[n] ? ((t[n] += ';?'), r++) : (t[n] += ';');
				var o = new RegExp('&(?:' + t.join('|') + '|#[xX][\\da-fA-F]+;?|#\\d+;?)', 'g'),
					i = K(V.default);
				function a(e) {
					return ';' !== e.substr(-1) && (e += ';'), i(e);
				}
				return function (e) {
					return String(e).replace(o, a);
				};
			})();
			(c = {}),
				(a =
					(t && t.__importDefault) ||
					function (e) {
						return e && e.__esModule ? e : { default: e };
					});
			Object.defineProperty(c, '__esModule', { value: !0 }),
				(c.escapeUTF8 = c.escape = c.encodeNonAsciiHTML = c.encodeHTML = c.encodeXML = void 0);
			var o = ee(a(i).default),
				Q = te(o);
			c.encodeXML = ae(o);
			var Y,
				J,
				t = ee(a(r).default),
				i = te(t);
			function ee(n) {
				return Object.keys(n)
					.sort()
					.reduce(function (e, t) {
						return (e[n[t]] = '&' + t + ';'), e;
					}, {});
			}
			function te(e) {
				for (var t = [], n = [], r = 0, o = Object.keys(e); r < o.length; r++) {
					var i = o[r];
					1 === i.length ? t.push('\\' + i) : n.push(i);
				}
				t.sort();
				for (var a = 0; a < t.length - 1; a++) {
					for (var s = a; s < t.length - 1 && t[s].charCodeAt(1) + 1 === t[s + 1].charCodeAt(1); )
						s += 1;
					var l = 1 + s - a;
					l < 3 || t.splice(a, l, t[a] + '-' + t[s]);
				}
				return n.unshift('[' + t.join('') + ']'), new RegExp(n.join('|'), 'g');
			}
			(c.encodeHTML =
				((Y = t),
				(J = i),
				function (e) {
					return e
						.replace(J, function (e) {
							return Y[e];
						})
						.replace(ne, u);
				})),
				(c.encodeNonAsciiHTML = ae(t));
			var ne =
					/(?:[\x80-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g,
				re =
					null != String.prototype.codePointAt
						? function (e) {
								return e.codePointAt(0);
							}
						: function (e) {
								return 1024 * (e.charCodeAt(0) - 55296) + e.charCodeAt(1) - 56320 + 65536;
							};
			function u(e) {
				return '&#x' + (1 < e.length ? re(e) : e.charCodeAt(0)).toString(16).toUpperCase() + ';';
			}
			var p,
				oe,
				d,
				f,
				ie = new RegExp(Q.source + '|' + ne.source, 'g');
			function ae(t) {
				return function (e) {
					return e.replace(ie, function (e) {
						return t[e] || u(e);
					});
				};
			}
			(c.escape = function (e) {
				return e.replace(ie, u);
			}),
				(c.escapeUTF8 = function (e) {
					return e.replace(Q, u);
				}),
				(o = _),
				Object.defineProperty(o, '__esModule', { value: !0 }),
				(o.decodeXMLStrict =
					o.decodeHTML5Strict =
					o.decodeHTML4Strict =
					o.decodeHTML5 =
					o.decodeHTML4 =
					o.decodeHTMLStrict =
					o.decodeHTML =
					o.decodeXML =
					o.encodeHTML5 =
					o.encodeHTML4 =
					o.escapeUTF8 =
					o.escape =
					o.encodeNonAsciiHTML =
					o.encodeHTML =
					o.encodeXML =
					o.encode =
					o.decodeStrict =
					o.decode =
						void 0),
				(p = n),
				(oe = c),
				(o.decode = function (e, t) {
					return (!t || t <= 0 ? p.decodeXML : p.decodeHTML)(e);
				}),
				(o.decodeStrict = function (e, t) {
					return (!t || t <= 0 ? p.decodeXML : p.decodeHTMLStrict)(e);
				}),
				(o.encode = function (e, t) {
					return (!t || t <= 0 ? oe.encodeXML : oe.encodeHTML)(e);
				}),
				(d = c),
				Object.defineProperty(o, 'encodeXML', {
					enumerable: !0,
					get: function () {
						return d.encodeXML;
					}
				}),
				Object.defineProperty(o, 'encodeHTML', {
					enumerable: !0,
					get: function () {
						return d.encodeHTML;
					}
				}),
				Object.defineProperty(o, 'encodeNonAsciiHTML', {
					enumerable: !0,
					get: function () {
						return d.encodeNonAsciiHTML;
					}
				}),
				Object.defineProperty(o, 'escape', {
					enumerable: !0,
					get: function () {
						return d.escape;
					}
				}),
				Object.defineProperty(o, 'escapeUTF8', {
					enumerable: !0,
					get: function () {
						return d.escapeUTF8;
					}
				}),
				Object.defineProperty(o, 'encodeHTML4', {
					enumerable: !0,
					get: function () {
						return d.encodeHTML;
					}
				}),
				Object.defineProperty(o, 'encodeHTML5', {
					enumerable: !0,
					get: function () {
						return d.encodeHTML;
					}
				}),
				(f = n),
				Object.defineProperty(o, 'decodeXML', {
					enumerable: !0,
					get: function () {
						return f.decodeXML;
					}
				}),
				Object.defineProperty(o, 'decodeHTML', {
					enumerable: !0,
					get: function () {
						return f.decodeHTML;
					}
				}),
				Object.defineProperty(o, 'decodeHTMLStrict', {
					enumerable: !0,
					get: function () {
						return f.decodeHTMLStrict;
					}
				}),
				Object.defineProperty(o, 'decodeHTML4', {
					enumerable: !0,
					get: function () {
						return f.decodeHTML;
					}
				}),
				Object.defineProperty(o, 'decodeHTML5', {
					enumerable: !0,
					get: function () {
						return f.decodeHTML;
					}
				}),
				Object.defineProperty(o, 'decodeHTML4Strict', {
					enumerable: !0,
					get: function () {
						return f.decodeHTMLStrict;
					}
				}),
				Object.defineProperty(o, 'decodeHTML5Strict', {
					enumerable: !0,
					get: function () {
						return f.decodeHTMLStrict;
					}
				}),
				Object.defineProperty(o, 'decodeXMLStrict', {
					enumerable: !0,
					get: function () {
						return f.decodeXML;
					}
				});
			function se(e) {
				return e.charCodeAt(0) === le ? e.charAt(1) : _.decodeHTML(e);
			}
			var a = '&(?:#x[a-f0-9]{1,6}|#[0-9]{1,7}|[a-z][a-z0-9]{1,31});',
				le = 92,
				ce = /[\\&]/,
				r = '[!"#$%&\'()*+,./:;<=>?@[\\\\\\]^_`{|}~-]',
				ue = new RegExp('\\\\' + r + '|' + a, 'gi'),
				pe = new RegExp('[&<>"]', 'g');
			function m(e) {
				return ce.test(e) ? e.replace(ue, se) : e;
			}
			function de(t) {
				try {
					return j(t);
				} catch (e) {
					return t;
				}
			}
			function fe(e) {
				switch (e) {
					case '&':
						return '&amp;';
					case '<':
						return '&lt;';
					case '>':
						return '&gt;';
					case '"':
						return '&quot;';
					default:
						return e;
				}
			}
			function g(e) {
				return pe.test(e) ? e.replace(pe, fe) : e;
			}
			function he(e, t) {
				for (var n = [], r = 0; r < t; r++) n.push(e);
				return n.join('');
			}
			function me(e) {
				return !e || !/[^ \t]+/.test(e);
			}
			(ve.prototype.next = function () {
				var e,
					t = this.current,
					n = this.entering;
				return null === t
					? null
					: ((e = ye(t)),
						n && e
							? t.firstChild
								? ((this.current = t.firstChild), (this.entering = !0))
								: (this.entering = !1)
							: t === this.root
								? (this.current = null)
								: null === t.next
									? ((this.current = t.parent), (this.entering = !1))
									: ((this.current = t.next), (this.entering = !0)),
						{ entering: n, node: t });
			}),
				(ve.prototype.resumeAt = function (e, t) {
					(this.current = e), (this.entering = !0 === t);
				});
			var ge = ve;
			function ve(e) {
				(this.current = e), (this.root = e), (this.entering = !0);
			}
			function ye(e) {
				switch (e.type) {
					case 'document':
					case 'blockQuote':
					case 'list':
					case 'item':
					case 'paragraph':
					case 'heading':
					case 'emph':
					case 'strong':
					case 'strike':
					case 'link':
					case 'image':
					case 'table':
					case 'tableHead':
					case 'tableBody':
					case 'tableRow':
					case 'tableCell':
					case 'tableDelimRow':
					case 'customInline':
						return !0;
					default:
						return !1;
				}
			}
			var be = 1,
				we = {};
			function ke(e) {
				delete we[e];
			}
			(y.prototype.isContainer = function () {
				return ye(this);
			}),
				(y.prototype.unlink = function () {
					this.prev
						? (this.prev.next = this.next)
						: this.parent && (this.parent.firstChild = this.next),
						this.next
							? (this.next.prev = this.prev)
							: this.parent && (this.parent.lastChild = this.prev),
						(this.parent = null),
						(this.next = null),
						(this.prev = null);
				}),
				(y.prototype.replaceWith = function (e) {
					this.insertBefore(e), this.unlink();
				}),
				(y.prototype.insertAfter = function (e) {
					e.unlink(),
						(e.next = this.next),
						e.next && (e.next.prev = e),
						((e.prev = this).next = e),
						this.parent && ((e.parent = this.parent), e.next || (e.parent.lastChild = e));
				}),
				(y.prototype.insertBefore = function (e) {
					e.unlink(),
						(e.prev = this.prev),
						e.prev && (e.prev.next = e),
						(((e.next = this).prev = e).parent = this.parent),
						e.prev || (e.parent.firstChild = e);
				}),
				(y.prototype.appendChild = function (e) {
					e.unlink(),
						(e.parent = this).lastChild
							? ((this.lastChild.next = e).prev = this.lastChild)
							: (this.firstChild = e),
						(this.lastChild = e);
				}),
				(y.prototype.prependChild = function (e) {
					e.unlink(),
						(e.parent = this).firstChild
							? (((this.firstChild.prev = e).next = this.firstChild), (this.firstChild = e))
							: ((this.firstChild = e), (this.lastChild = e));
				}),
				(y.prototype.walker = function () {
					return new ge(this);
				});
			var v = y;
			function y(e, t) {
				(this.parent = null),
					(this.prev = null),
					(this.next = null),
					(this.firstChild = null),
					(this.lastChild = null),
					(this.literal = null),
					(this.id = 'document' === e ? -1 : be++),
					(this.type = e),
					(this.sourcepos = t),
					(we[this.id] = this);
			}
			e(Ce, (xe = v));
			var xe,
				b = Ce;
			function Ce(e, t) {
				t = xe.call(this, e, t) || this;
				return (
					(t.open = !0),
					(t.lineOffsets = null),
					(t.stringContent = null),
					(t.lastLineBlank = !1),
					(t.lastLineChecked = !1),
					(t.type = e),
					t
				);
			}
			e(Le, (Te = b));
			var Te,
				Ee = Le;
			function Le() {
				var e = (null !== Te && Te.apply(this, arguments)) || this;
				return (e.listData = null), e;
			}
			e(Ae, (Me = b));
			var Me,
				Ne = Ae;
			function Ae() {
				var e = (null !== Me && Me.apply(this, arguments)) || this;
				return (e.level = 0), (e.headingType = 'atx'), e;
			}
			e(Oe, (De = b));
			var De,
				Se = Oe;
			function Oe() {
				var e = (null !== De && De.apply(this, arguments)) || this;
				return (
					(e.isFenced = !1),
					(e.fenceChar = null),
					(e.fenceLength = 0),
					(e.fenceOffset = -1),
					(e.info = null),
					(e.infoPadding = 0),
					e
				);
			}
			e(Pe, (Ie = b));
			var Ie,
				Re = Pe;
			function Pe() {
				var e = (null !== Ie && Ie.apply(this, arguments)) || this;
				return (e.columns = []), e;
			}
			e(Fe, (Be = b));
			var Be,
				He = Fe;
			function Fe() {
				var e = (null !== Be && Be.apply(this, arguments)) || this;
				return (
					(e.startIdx = 0),
					(e.endIdx = 0),
					(e.paddingLeft = 0),
					(e.paddingRight = 0),
					(e.ignored = !1),
					e
				);
			}
			e(_e, (qe = b));
			var qe,
				je = _e;
			function _e() {
				var e = (null !== qe && qe.apply(this, arguments)) || this;
				return (e.title = ''), (e.dest = ''), (e.label = ''), e;
			}
			e(Ve, (ze = b));
			var ze,
				Ue = Ve;
			function Ve() {
				var e = (null !== ze && ze.apply(this, arguments)) || this;
				return (e.syntaxLength = 0), (e.offset = -1), (e.info = ''), e;
			}
			e(Ge, ($e = b));
			var $e,
				We = Ge;
			function Ge() {
				var e = (null !== $e && $e.apply(this, arguments)) || this;
				return (e.htmlBlockType = -1), e;
			}
			e(Ke, (Ze = v));
			var Ze,
				Xe = Ke;
			function Ke() {
				var e = (null !== Ze && Ze.apply(this, arguments)) || this;
				return (e.destination = null), (e.title = null), (e.extendedAutolink = !1), e;
			}
			e(Je, (Qe = v));
			var Qe,
				Ye = Je;
			function Je() {
				var e = (null !== Qe && Qe.apply(this, arguments)) || this;
				return (e.tickCount = 0), e;
			}
			e(nt, (et = v));
			var et,
				tt = nt;
			function nt() {
				var e = (null !== et && et.apply(this, arguments)) || this;
				return (e.info = ''), e;
			}
			function w(e, t) {
				switch (e) {
					case 'heading':
						return new Ne(e, t);
					case 'list':
					case 'item':
						return new Ee(e, t);
					case 'link':
					case 'image':
						return new Xe(e, t);
					case 'codeBlock':
						return new Se(e, t);
					case 'htmlBlock':
						return new We(e, t);
					case 'table':
						return new Re(e, t);
					case 'tableCell':
						return new He(e, t);
					case 'document':
					case 'paragraph':
					case 'blockQuote':
					case 'thematicBreak':
					case 'tableRow':
					case 'tableBody':
					case 'tableHead':
					case 'frontMatter':
						return new b(e, t);
					case 'code':
						return new Ye(e, t);
					case 'refDef':
						return new je(e, t);
					case 'customBlock':
						return new Ue(e, t);
					case 'customInline':
						return new tt(e, t);
					default:
						return new v(e, t);
				}
			}
			function rt(e) {
				return 'codeBlock' === e.type;
			}
			function ot(e) {
				return 'list' === e.type;
			}
			function k(e) {
				return 'refDef' === e.type;
			}
			function it(e) {
				return 'customBlock' === e.type;
			}
			function x(e, t) {
				t = w('text', t);
				return (t.literal = e), t;
			}
			var at,
				st,
				i = '[A-Za-z][A-Za-z0-9-]*',
				t =
					'<' +
					i +
					'(?:\\s+[a-zA-Z_:][a-zA-Z0-9:._-]*(?:\\s*=\\s*(?:[^"\'=<>`\\x00-\\x20]+|\'[^\']*\'|"[^"]*"))?)*\\s*/?>',
				c = '</' + i + '\\s*[>]',
				lt = new RegExp(
					'^(?:<[A-Za-z][A-Za-z0-9-]*(?:\\s+[a-zA-Z_:][a-zA-Z0-9:._-]*(?:\\s*=\\s*(?:[^"\'=<>`\\x00-\\x20]+|\'[^\']*\'|"[^"]*"))?)*\\s*/?>|</[A-Za-z][A-Za-z0-9-]*\\s*[>]|\x3c!----\x3e|\x3c!--(?:-?[^>-])(?:-?[^-])*--\x3e|[<][?].*?[?][>]|<![A-Z]+\\s+[^>]*>|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>)',
					'i'
				),
				ct = String.fromCodePoint
					? function (e) {
							try {
								return String.fromCodePoint(e);
							} catch (e) {
								if (e instanceof RangeError) return String.fromCharCode(65533);
								throw e;
							}
						}
					: ((at = String.fromCharCode),
						(st = Math.floor),
						function () {
							for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
							var n = [],
								r = -1,
								o = e.length;
							if (!o) return '';
							for (var i = ''; ++r < o; ) {
								var a = Number(e[r]);
								if (!isFinite(a) || a < 0 || 1114111 < a || st(a) !== a)
									return String.fromCharCode(65533);
								a <= 65535 ? n.push(a) : n.push(55296 + ((a -= 65536) >> 10), (a % 1024) + 56320),
									(r + 1 === o || 16384 < n.length) && ((i += at.apply(void 0, n)), (n.length = 0));
							}
							return i;
						}),
				ut = '(?:[w-]+.)*[A-Za-z0-9-]+.[A-Za-z0-9-]+',
				pt = '[^<\\s]*[^<?!.,:*_?~\\s]',
				dt = '[\\w.+-]+@(?:[\\w-]+\\.)+[\\w-]+';
			function ft(e) {
				for (var t, n = new RegExp('(www|https?://).' + ut + pt, 'g'), r = []; (t = n.exec(e)); ) {
					var o = (function (e) {
							var t = /\)+$/.exec(e);
							if (t) {
								for (var n = 0, r = 0, o = e; r < o.length; r++) {
									var i = o[r];
									'(' === i ? (n < 0 ? (n = 1) : (n += 1)) : ')' === i && --n;
								}
								if (n < 0) return (t = Math.min(-n, t[0].length)), e.substring(0, e.length - t);
							}
							return e;
						})(t[0]).replace(/&[A-Za-z0-9]+;$/, ''),
						i = 'www' === t[1] ? 'http://' : '';
					r.push({ text: o, range: [t.index, t.index + o.length - 1], url: i + o });
				}
				return r;
			}
			function ht(e) {
				return F(
					F([], ft(e)),
					(function (e) {
						for (var t, n = new RegExp(dt, 'g'), r = []; (t = n.exec(e)); ) {
							var o = t[0];
							/[_-]+$/.test(o) ||
								r.push({ text: o, range: [t.index, t.index + o.length - 1], url: 'mailto:' + o });
						}
						return r;
					})(e)
				).sort(function (e, t) {
					return e.range[0] - t.range[0];
				});
			}
			function mt(e, v) {
				var y;
				for ('boolean' == typeof v && (v = ht); (y = e.next()); )
					!(function () {
						var e = y.entering,
							t = y.node;
						if (e && 'text' === t.type && 'link' !== t.parent.type) {
							var n = t.literal,
								e = v(n);
							if (!e || !e.length) return;
							for (
								var r = 0,
									o = t.sourcepos[0],
									i = o[0],
									a = o[1],
									s = function (e, t) {
										return [
											[i, a + e],
											[i, a + t]
										];
									},
									l = [],
									c = 0,
									u = e;
								c < u.length;
								c++
							) {
								var p = u[c],
									d = p.range,
									f = p.url,
									p = p.text,
									h =
										(d[0] > r && l.push(x(n.substring(r, d[0]), s(r, d[0] - 1))),
										w('link', s.apply(void 0, d)));
								h.appendChild(x(p, s.apply(void 0, d))),
									(h.destination = f),
									(h.extendedAutolink = !0),
									l.push(h),
									(r = d[1] + 1);
							}
							r < n.length && l.push(x(n.substring(r), s(r, n.length - 1)));
							for (var m = 0, g = l; m < g.length; m++) t.insertBefore(g[m]);
							t.unlink();
						}
					})();
			}
			function gt(e) {
				return e[e.length - 1];
			}
			function vt(e) {
				return e
					.slice(1, e.length - 1)
					.trim()
					.replace(/[ \t\r\n]+/, ' ')
					.toLowerCase()
					.toUpperCase();
			}
			function yt(t, n) {
				Object.keys(t).forEach(function (e) {
					n(e, t[e]);
				});
			}
			function C(e) {
				return !Object.keys(e).length;
			}
			var n = '\\\\' + r,
				bt = new RegExp(
					/[!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E42\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC9\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDF3C-\uDF3E]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]/
				),
				wt = new RegExp(
					'^(?:"(' + n + '|[^"\\x00])*"|\'(' + n + "|[^'\\x00])*'|\\((" + n + '|[^()\\x00])*\\))'
				),
				kt = /^(?:<(?:[^<>\n\\\x00]|\\.)*>)/,
				xt = new RegExp('^' + r),
				Ct = new RegExp('^' + a, 'i'),
				Tt = /`+/,
				Et = /^`+/,
				Lt = /\.\.\./g,
				Mt = /--+/g,
				Nt =
					/^<([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)>/,
				At = /^<[A-Za-z][A-Za-z0-9.+-]{1,31}:[^<>\x00-\x20]*>/i,
				Dt = /^ *(?:\n *)?/,
				St = /^[ \t\n\x0b\x0c\x0d]/,
				Ot = /^\s/,
				It = / *$/,
				Rt = /^ */,
				Pt = /^ *(?:\n|$)/,
				Bt = /^\[(?:[^\\\[\]]|\\.){0,1000}\]/,
				Ht = /^[^\n`\[\]\\!<&*_'"~$]+/m,
				Ft =
					((T.prototype.sourcepos = function (e, t) {
						var n = this.linePosOffset + this.lineOffsets[this.lineIdx],
							r = this.lineStartNum + this.lineIdx,
							e = [r, e + n];
						return 'number' == typeof t ? [e, [r, t + n]] : e;
					}),
					(T.prototype.nextLine = function () {
						(this.lineIdx += 1), (this.linePosOffset = -this.pos);
					}),
					(T.prototype.match = function (e) {
						e = e.exec(this.subject.slice(this.pos));
						return null === e ? null : ((this.pos += e.index + e[0].length), e[0]);
					}),
					(T.prototype.peek = function () {
						return this.pos < this.subject.length ? this.subject.charCodeAt(this.pos) : -1;
					}),
					(T.prototype.spnl = function () {
						return this.match(Dt), !0;
					}),
					(T.prototype.parseBackticks = function (e) {
						var t = this.pos + 1,
							n = this.match(Et);
						if (null === n) return !1;
						for (var r, o, i, a, s = this.pos; null !== (r = this.match(Tt)); )
							if (r === n)
								return (
									(r = this.subject.slice(s, this.pos - n.length)),
									(o = this.sourcepos(t, this.pos)),
									1 < (i = r.split('\n')).length &&
										((a = gt(i)),
										(this.lineIdx += i.length - 1),
										(this.linePosOffset = -(this.pos - a.length - n.length)),
										(o[1] = this.sourcepos(this.pos)),
										(r = i.join(' '))),
									(a = w('code', o)),
									0 < r.length && null !== r.match(/[^ ]/) && ' ' == r[0] && ' ' == r[r.length - 1]
										? (a.literal = r.slice(1, r.length - 1))
										: (a.literal = r),
									(a.tickCount = n.length),
									e.appendChild(a),
									!0
								);
						return (this.pos = s), e.appendChild(x(n, this.sourcepos(t, this.pos - 1))), !0;
					}),
					(T.prototype.parseBackslash = function (e) {
						var t,
							n = this.subject,
							r = ((this.pos += 1), this.pos);
						return (
							10 === this.peek()
								? ((this.pos += 1),
									(t = w('linebreak', this.sourcepos(this.pos - 1, this.pos))),
									e.appendChild(t),
									this.nextLine())
								: xt.test(n.charAt(this.pos))
									? (e.appendChild(x(n.charAt(this.pos), this.sourcepos(r, this.pos))),
										(this.pos += 1))
									: e.appendChild(x('\\', this.sourcepos(r, r))),
							!0
						);
					}),
					(T.prototype.parseAutolink = function (e) {
						var t,
							n,
							r,
							o = this.pos + 1;
						return (t = this.match(Nt))
							? ((n = t.slice(1, t.length - 1)),
								((r = w('link', this.sourcepos(o, this.pos))).destination = de('mailto:' + n)),
								(r.title = ''),
								r.appendChild(x(n, this.sourcepos(o + 1, this.pos - 1))),
								e.appendChild(r),
								!0)
							: !!(t = this.match(At)) &&
									((n = t.slice(1, t.length - 1)),
									((r = w('link', this.sourcepos(o, this.pos))).destination = de(n)),
									(r.title = ''),
									r.appendChild(x(n, this.sourcepos(o + 1, this.pos - 1))),
									e.appendChild(r),
									!0);
					}),
					(T.prototype.parseHtmlTag = function (e) {
						var t = this.pos + 1,
							n = this.match(lt);
						return (
							null !== n &&
							(((t = w('htmlInline', this.sourcepos(t, this.pos))).literal = n),
							e.appendChild(t),
							!0)
						);
					}),
					(T.prototype.scanDelims = function (e) {
						var t,
							n,
							r,
							o,
							i,
							a,
							s,
							l = 0,
							c = this.pos;
						if (39 === e || 34 === e) l++, this.pos++;
						else for (; this.peek() === e; ) l++, this.pos++;
						return 0 === l || (l < 2 && (126 === e || 36 === e))
							? ((this.pos = c), null)
							: ((s = 0 === c ? '\n' : this.subject.charAt(c - 1)),
								(n = -1 === (n = this.peek()) ? '\n' : ct(n)),
								(t = Ot.test(n)),
								(n = bt.test(n)),
								(r = Ot.test(s)),
								(s = bt.test(s)),
								(o = !t && (!n || r || s)),
								(i = !r && (!s || t || n)),
								(s =
									95 === e
										? ((a = o && (!i || s)), i && (!o || n))
										: 39 === e || 34 === e
											? ((a = o && !i), i)
											: 36 === e
												? ((a = !t), !r)
												: ((a = o), i)),
								(this.pos = c),
								{ numdelims: l, canOpen: a, canClose: s });
					}),
					(T.prototype.handleDelim = function (e, t) {
						var n,
							r,
							o = this.scanDelims(e);
						return (
							!!o &&
							((n = o.numdelims),
							(r = this.pos + 1),
							(this.pos += n),
							(r = x(
								39 === e ? '’' : 34 === e ? '“' : this.subject.slice(r - 1, this.pos),
								this.sourcepos(r, this.pos)
							)),
							t.appendChild(r),
							(o.canOpen || o.canClose) &&
								(this.options.smart || (39 !== e && 34 !== e)) &&
								((this.delimiters = {
									cc: e,
									numdelims: n,
									origdelims: n,
									node: r,
									previous: this.delimiters,
									next: null,
									canOpen: o.canOpen,
									canClose: o.canClose
								}),
								this.delimiters.previous) &&
								(this.delimiters.previous.next = this.delimiters),
							!0)
						);
					}),
					(T.prototype.removeDelimiter = function (e) {
						null !== e.previous && (e.previous.next = e.next),
							null === e.next ? (this.delimiters = e.previous) : (e.next.previous = e.previous);
					}),
					(T.prototype.removeDelimitersBetween = function (e, t) {
						e.next !== t && ((e.next = t).previous = e);
					}),
					(T.prototype.processEmphasis = function (e) {
						((t = {})[95] = [e, e, e]),
							(t[42] = [e, e, e]),
							(t[39] = [e]),
							(t[34] = [e]),
							(t[126] = [e]),
							(t[36] = [e]);
						for (var t, n, r, o, i, a = t, s = this.delimiters; null !== s && s.previous !== e; )
							s = s.previous;
						for (; null !== s; ) {
							var l = s.cc,
								c = 95 === l || 42 === l;
							if (s.canClose) {
								for (
									n = s.previous, o = !1;
									null !== n && n !== e && n !== a[l][c ? s.origdelims % 3 : 0];

								) {
									if (
										((i =
											c &&
											(s.canOpen || n.canClose) &&
											s.origdelims % 3 != 0 &&
											(n.origdelims + s.origdelims) % 3 == 0),
										n.cc === s.cc && n.canOpen && !i)
									) {
										o = !0;
										break;
									}
									n = n.previous;
								}
								if (((r = s), c || 126 === l || 36 === l))
									if (o) {
										if (n) {
											for (
												var u,
													p = 2 <= s.numdelims && 2 <= n.numdelims ? 2 : 1,
													d = c ? 0 : 1,
													f = n.node,
													h = s.node,
													m = c ? (1 == p ? 'emph' : 'strong') : 'strike',
													g = w((m = 36 === l ? 'customInline' : m)),
													m = f.sourcepos[1],
													v = h.sourcepos[0],
													y =
														((g.sourcepos = [
															[m[0], m[1] - p + 1],
															[v[0], v[1] + p - 1]
														]),
														(f.sourcepos[1][1] -= p),
														(h.sourcepos[0][1] += p),
														(f.literal = f.literal.slice(p)),
														(h.literal = h.literal.slice(p)),
														(n.numdelims -= p),
														(s.numdelims -= p),
														f.next);
												y && y !== h;

											)
												(u = y.next), y.unlink(), g.appendChild(y), (y = u);
											36 === l &&
												((p = (v = (m = g.firstChild).literal || '').split(/\s/)[0]),
												(g.info = p),
												v.length <= p.length
													? m.unlink()
													: ((m.sourcepos[0][1] += p.length),
														(m.literal = v.replace(p + ' ', '')))),
												f.insertAfter(g),
												this.removeDelimitersBetween(n, s),
												n.numdelims <= d &&
													(0 === n.numdelims && f.unlink(), this.removeDelimiter(n)),
												s.numdelims <= d &&
													(0 === s.numdelims && h.unlink(),
													(m = s.next),
													this.removeDelimiter(s),
													(s = m));
										}
									} else s = s.next;
								else
									39 === l
										? ((s.node.literal = '’'), o && (n.node.literal = '‘'), (s = s.next))
										: 34 === l &&
											((s.node.literal = '”'), o && (n.node.literal = '“'), (s = s.next));
								o ||
									((a[l][c ? r.origdelims % 3 : 0] = r.previous), r.canOpen) ||
									this.removeDelimiter(r);
							} else s = s.next;
						}
						for (; null !== this.delimiters && this.delimiters !== e; )
							this.removeDelimiter(this.delimiters);
					}),
					(T.prototype.parseLinkTitle = function () {
						var e = this.match(wt);
						return null === e ? null : m(e.substr(1, e.length - 2));
					}),
					(T.prototype.parseLinkDestination = function () {
						var e = this.match(kt);
						if (null !== e) return de(m(e.substr(1, e.length - 2)));
						if (60 === this.peek()) return null;
						for (var t = this.pos, n = 0, r = void 0; -1 !== (r = this.peek()); )
							if (92 === r && xt.test(this.subject.charAt(this.pos + 1)))
								(this.pos += 1), -1 !== this.peek() && (this.pos += 1);
							else if (40 === r) (this.pos += 1), (n += 1);
							else if (41 === r) {
								if (n < 1) break;
								(this.pos += 1), --n;
							} else {
								if (null !== St.exec(ct(r))) break;
								this.pos += 1;
							}
						return (this.pos === t && 41 !== r) || 0 !== n
							? null
							: de(m((e = this.subject.substr(t, this.pos - t))));
					}),
					(T.prototype.parseLinkLabel = function () {
						var e = this.match(Bt);
						return null === e || 1001 < e.length ? 0 : e.length;
					}),
					(T.prototype.parseOpenBracket = function (e) {
						var t = this.pos,
							n = ((this.pos += 1), x('[', this.sourcepos(this.pos, this.pos)));
						return e.appendChild(n), this.addBracket(n, t, !1), !0;
					}),
					(T.prototype.parseBang = function (e) {
						var t,
							n = this.pos;
						return (
							(this.pos += 1),
							91 === this.peek()
								? ((this.pos += 1),
									(t = x('![', this.sourcepos(this.pos - 1, this.pos))),
									e.appendChild(t),
									this.addBracket(t, n + 1, !0))
								: ((t = x('!', this.sourcepos(this.pos, this.pos))), e.appendChild(t)),
							!0
						);
					}),
					(T.prototype.parseCloseBracket = function (e) {
						var t = null,
							n = null,
							r = !1,
							o = ((this.pos += 1), this.pos),
							i = this.brackets;
						if (null === i) e.appendChild(x(']', this.sourcepos(o, o)));
						else if (i.active) {
							var a,
								s,
								l = i.image,
								c = this.pos,
								u =
									(40 === this.peek() &&
										(this.pos++,
										this.spnl() &&
										null !== (t = this.parseLinkDestination()) &&
										this.spnl() &&
										(St.test(this.subject.charAt(this.pos - 1)) && (n = this.parseLinkTitle()),
										1) &&
										this.spnl() &&
										41 === this.peek()
											? ((this.pos += 1), (r = !0))
											: (this.pos = c)),
									'');
							if (
								(r ||
									((s = this.pos),
									2 < (a = this.parseLinkLabel())
										? (u = this.subject.slice(s, s + a))
										: i.bracketAfter || (u = this.subject.slice(i.index, o)),
									0 === a && (this.pos = c),
									u &&
										((u = vt(u)), (s = this.refMap[u])) &&
										((t = s.destination), (n = s.title), (r = !0))),
								r)
							) {
								for (
									var p,
										d = w(l ? 'image' : 'link'),
										f =
											((d.destination = t),
											(d.title = n || ''),
											(d.sourcepos = [i.startpos, this.sourcepos(this.pos)]),
											i.node.next);
									f;

								)
									(p = f.next), f.unlink(), d.appendChild(f), (f = p);
								if (
									(e.appendChild(d),
									this.processEmphasis(i.previousDelimiter),
									this.removeBracket(),
									i.node.unlink(),
									!l)
								)
									for (i = this.brackets; null !== i; )
										i.image || (i.active = !1), (i = i.previous);
							} else
								this.removeBracket(), (this.pos = o), e.appendChild(x(']', this.sourcepos(o, o)));
							this.options.referenceDefinition &&
								(this.refLinkCandidateMap[e.id] = { node: e, refLabel: u });
						} else e.appendChild(x(']', this.sourcepos(o, o))), this.removeBracket();
						return !0;
					}),
					(T.prototype.addBracket = function (e, t, n) {
						null !== this.brackets && (this.brackets.bracketAfter = !0),
							(this.brackets = {
								node: e,
								startpos: this.sourcepos(t + (n ? 0 : 1)),
								previous: this.brackets,
								previousDelimiter: this.delimiters,
								index: t,
								image: n,
								active: !0
							});
					}),
					(T.prototype.removeBracket = function () {
						this.brackets && (this.brackets = this.brackets.previous);
					}),
					(T.prototype.parseEntity = function (e) {
						var t,
							n = this.pos + 1;
						return (
							!!(t = this.match(Ct)) &&
							(e.appendChild(x(_.decodeHTML(t), this.sourcepos(n, this.pos))), !0)
						);
					}),
					(T.prototype.parseString = function (e) {
						var t,
							n,
							r = this.pos + 1;
						return (
							!!(t = this.match(Ht)) &&
							(this.options.smart
								? ((n = t.replace(Lt, '…').replace(Mt, function (e) {
										var t = 0,
											n = 0;
										return (
											e.length % 3 == 0
												? (n = e.length / 3)
												: e.length % 2 == 0
													? (t = e.length / 2)
													: (n =
															e.length % 3 == 2
																? ((t = 1), (e.length - 2) / 3)
																: ((t = 2), (e.length - 4) / 3)),
											he('—', n) + he('–', t)
										);
									})),
									e.appendChild(x(n, this.sourcepos(r, this.pos))))
								: ((n = x(t, this.sourcepos(r, this.pos))), e.appendChild(n)),
							!0)
						);
					}),
					(T.prototype.parseNewline = function (e) {
						this.pos += 1;
						var t,
							n,
							r = e.lastChild;
						return (
							r && 'text' === r.type && ' ' === r.literal[r.literal.length - 1]
								? ((t = ' ' === r.literal[r.literal.length - 2]),
									(n = r.literal.length),
									(r.literal = r.literal.replace(It, '')),
									(n = n - r.literal.length),
									(r.sourcepos[1][1] -= n),
									e.appendChild(
										w(t ? 'linebreak' : 'softbreak', this.sourcepos(this.pos - n, this.pos))
									))
								: e.appendChild(w('softbreak', this.sourcepos(this.pos, this.pos))),
							this.nextLine(),
							this.match(Rt),
							!0
						);
					}),
					(T.prototype.parseReference = function (e, t) {
						if (!this.options.referenceDefinition) return 0;
						(this.subject = e.stringContent), (this.pos = 0);
						var n = null,
							r = this.pos,
							o = this.parseLinkLabel();
						if (0 === o) return 0;
						o = this.subject.substr(0, o);
						if (58 !== this.peek()) return (this.pos = r), 0;
						this.pos++, this.spnl();
						var i,
							a,
							s = this.parseLinkDestination();
						return null === s ||
							((i = this.pos),
							this.spnl(),
							null === (n = this.pos !== i ? this.parseLinkTitle() : n) &&
								((n = ''), (this.pos = i)),
							(a = !0),
							!(a =
								null === this.match(Pt)
									? '' !== n && ((n = ''), (this.pos = i), null !== this.match(Pt))
									: a)) ||
							'' === (i = vt(o))
							? ((this.pos = r), 0)
							: ((a = this.getReferenceDefSourcepos(e)),
								(e.sourcepos[0][0] = a[1][0] + 1),
								((o = w('refDef', a)).title = n),
								(o.dest = s),
								(o.label = i),
								e.insertBefore(o),
								t[i] ? (this.refDefCandidateMap[o.id] = o) : (t[i] = Ln(o)),
								this.pos - r);
					}),
					(T.prototype.mergeTextNodes = function (e) {
						for (var t = []; (r = e.next()); ) {
							var n = r.entering,
								r = r.node;
							if (n && 'text' === r.type) t.push(r);
							else if (1 === t.length) t = [];
							else if (1 < t.length) {
								var o = t[0],
									n = t[t.length - 1];
								o.sourcepos && n.sourcepos && (o.sourcepos[1] = n.sourcepos[1]),
									(o.next = n.next),
									o.next && (o.next.prev = o);
								for (var i = 1; i < t.length; i += 1) (o.literal += t[i].literal), t[i].unlink();
								t = [];
							}
						}
					}),
					(T.prototype.getReferenceDefSourcepos = function (e) {
						for (
							var t = e.stringContent.split(/\n|\r\n/),
								n = !1,
								r = 0,
								o = { line: 0, ch: 0 },
								i = 0;
							i < t.length;
							i += 1
						) {
							var a = t[i];
							if (St.test(a)) break;
							if (/\:/.test(a) && 0 === r) {
								if (n) break;
								var s = a.indexOf(':') === a.length - 1 ? i + 1 : i,
									o = { line: s, ch: t[s].length },
									n = !0;
							}
							s = a.match(/'|"/g);
							if ((s && (r += s.length), 2 === r)) {
								o = { line: i, ch: a.length };
								break;
							}
						}
						return [
							[e.sourcepos[0][0], e.sourcepos[0][1]],
							[e.sourcepos[0][0] + o.line, o.ch]
						];
					}),
					(T.prototype.parseInline = function (e) {
						var t,
							n = !1,
							r = this.peek();
						if (-1 === r) return !1;
						switch (r) {
							case 10:
								n = this.parseNewline(e);
								break;
							case 92:
								n = this.parseBackslash(e);
								break;
							case 96:
								n = this.parseBackticks(e);
								break;
							case 42:
							case 95:
							case 126:
							case 36:
								n = this.handleDelim(r, e);
								break;
							case 39:
							case 34:
								n = !(null == (t = this.options) || !t.smart) && this.handleDelim(r, e);
								break;
							case 91:
								n = this.parseOpenBracket(e);
								break;
							case 33:
								n = this.parseBang(e);
								break;
							case 93:
								n = this.parseCloseBracket(e);
								break;
							case 60:
								n = this.parseAutolink(e) || this.parseHtmlTag(e);
								break;
							case 38:
								e.disabledEntityParse || (n = this.parseEntity(e));
								break;
							default:
								n = this.parseString(e);
						}
						return (
							n ||
								((this.pos += 1), e.appendChild(x(ct(r), this.sourcepos(this.pos, this.pos + 1)))),
							!0
						);
					}),
					(T.prototype.parse = function (e) {
						for (
							this.subject = e.stringContent.trim(),
								this.pos = 0,
								this.delimiters = null,
								this.brackets = null,
								this.lineOffsets = e.lineOffsets || [0],
								this.lineIdx = 0,
								this.linePosOffset = 0,
								this.lineStartNum = e.sourcepos[0][0],
								'heading' === e.type && (this.lineOffsets[0] += e.level + 1);
							this.parseInline(e);

						);
						(e.stringContent = null), this.processEmphasis(null), this.mergeTextNodes(e.walker());
						var t = this.options,
							n = t.extendedAutolinks,
							r = t.customParser;
						if ((n && mt(e.walker(), n), r && e.firstChild))
							for (var o = e.firstChild.walker(); (a = o.next()); ) {
								var i = a.node,
									a = a.entering;
								r[i.type] && r[i.type](i, { entering: a, options: this.options });
							}
					}),
					T);
			function T(e) {
				(this.subject = ''),
					(this.delimiters = null),
					(this.brackets = null),
					(this.pos = 0),
					(this.lineStartNum = 0),
					(this.lineIdx = 0),
					(this.lineOffsets = [0]),
					(this.linePosOffset = 0),
					(this.refMap = {}),
					(this.refLinkCandidateMap = {}),
					(this.refDefCandidateMap = {}),
					(this.options = e);
			}
			var qt = /^\[([ \txX])\][ \t]+/;
			var jt = 9,
				_t = 32,
				zt = /[^ \t\f\v\r\n]/,
				Ut = /^(?:`{3,}|~{3,})(?= *$)/;
			function Vt(e) {
				for (var t = e; t; ) {
					if (t.lastLineBlank) return 1;
					var n = t.type;
					if (t.lastLineChecked || ('list' !== n && 'item' !== n)) {
						t.lastLineChecked = !0;
						break;
					}
					(t.lastLineChecked = !0), (t = t.lastChild);
				}
			}
			function E(e, t) {
				return t < e.length ? e.charCodeAt(t) : -1;
			}
			function $t(e) {
				return !zt.test(e);
			}
			function L(e) {
				return e === _t || e === jt;
			}
			var Wt = /^\$\$$/,
				o = {
					continue: function () {
						return 1;
					},
					finalize: function () {},
					canContain: function () {
						return !1;
					},
					acceptsLines: !0
				},
				M = {
					document: {
						continue: function () {
							return 0;
						},
						finalize: function () {},
						canContain: function (e) {
							return 'item' !== e;
						},
						acceptsLines: !1
					},
					list: {
						continue: function () {
							return 0;
						},
						finalize: function (e, t) {
							for (var n = t.firstChild; n; ) {
								if (Vt(n) && n.next) {
									t.listData.tight = !1;
									break;
								}
								for (var r = n.firstChild; r; ) {
									if (Vt(r) && (n.next || r.next)) {
										t.listData.tight = !1;
										break;
									}
									r = r.next;
								}
								n = n.next;
							}
						},
						canContain: function (e) {
							return 'item' === e;
						},
						acceptsLines: !1
					},
					blockQuote: {
						continue: function (e) {
							var t = e.currentLine;
							return e.indented || 62 !== E(t, e.nextNonspace)
								? 1
								: (e.advanceNextNonspace(),
									e.advanceOffset(1, !1),
									L(E(t, e.offset)) && e.advanceOffset(1, !0),
									0);
						},
						finalize: function () {},
						canContain: function (e) {
							return 'item' !== e;
						},
						acceptsLines: !1
					},
					item: {
						continue: function (e, t) {
							if (e.blank) {
								if (null === t.firstChild) return 1;
								e.advanceNextNonspace();
							} else {
								if (!(e.indent >= t.listData.markerOffset + t.listData.padding)) return 1;
								e.advanceOffset(t.listData.markerOffset + t.listData.padding, !0);
							}
							return 0;
						},
						finalize: function (e, t) {
							var n, r, o;
							t.firstChild &&
								'paragraph' === t.firstChild.type &&
								(r = (n = t.firstChild).stringContent.match(qt)) &&
								((o = r[0].length),
								(n.stringContent = n.stringContent.substring(o - 1)),
								(n.sourcepos[0][1] += o),
								(n.lineOffsets[0] += o),
								(t.listData.task = !0),
								(t.listData.checked = /[xX]/.test(r[1])));
						},
						canContain: function (e) {
							return 'item' !== e;
						},
						acceptsLines: !1
					},
					heading: {
						continue: function () {
							return 1;
						},
						finalize: function () {},
						canContain: function () {
							return !1;
						},
						acceptsLines: !1
					},
					thematicBreak: {
						continue: function () {
							return 1;
						},
						finalize: function () {},
						canContain: function () {
							return !1;
						},
						acceptsLines: !1
					},
					codeBlock: {
						continue: function (e, t) {
							var n = e.currentLine,
								r = e.indent;
							if (t.isFenced) {
								var o =
									r <= 3 &&
									n.charAt(e.nextNonspace) === t.fenceChar &&
									n.slice(e.nextNonspace).match(Ut);
								if (o && o[0].length >= t.fenceLength)
									return (
										(e.lastLineLength = e.offset + r + o[0].length), e.finalize(t, e.lineNumber), 2
									);
								for (var i = t.fenceOffset; 0 < i && L(E(n, e.offset)); )
									e.advanceOffset(1, !0), i--;
							} else if (4 <= r) e.advanceOffset(4, !0);
							else {
								if (!e.blank) return 1;
								e.advanceNextNonspace();
							}
							return 0;
						},
						finalize: function (e, t) {
							var n, r, o;
							null !== t.stringContent &&
								(t.isFenced
									? ((o = (r = t.stringContent).indexOf('\n')),
										(n = r.slice(0, o)),
										(r = r.slice(o + 1)),
										(o = n.match(/^(\s*)(.*)/)),
										(t.infoPadding = o[1].length),
										(t.info = m(o[2].trim())),
										(t.literal = r))
									: (t.literal =
											null == (n = t.stringContent) ? void 0 : n.replace(/(\n *)+$/, '\n')),
								(t.stringContent = null));
						},
						canContain: function () {
							return !1;
						},
						acceptsLines: !0
					},
					htmlBlock: {
						continue: function (e, t) {
							return !e.blank || (6 !== t.htmlBlockType && 7 !== t.htmlBlockType) ? 0 : 1;
						},
						finalize: function (e, t) {
							var n;
							(t.literal =
								(null == (n = t.stringContent) ? void 0 : n.replace(/(\n *)+$/, '')) || null),
								(t.stringContent = null);
						},
						canContain: function () {
							return !1;
						},
						acceptsLines: !0
					},
					paragraph: {
						continue: function (e) {
							return e.blank ? 1 : 0;
						},
						finalize: function (e, t) {
							if (null !== t.stringContent) {
								for (
									var n, r = !1;
									91 === E(t.stringContent, 0) && (n = e.inlineParser.parseReference(t, e.refMap));

								)
									(t.stringContent = t.stringContent.slice(n)), (r = !0);
								r && $t(t.stringContent) && t.unlink();
							}
						},
						canContain: function () {
							return !1;
						},
						acceptsLines: !0
					},
					table: {
						continue: function () {
							return 0;
						},
						finalize: function () {},
						canContain: function (e) {
							return 'tableHead' === e || 'tableBody' === e;
						},
						acceptsLines: !1
					},
					tableBody: {
						continue: function () {
							return 0;
						},
						finalize: function () {},
						canContain: function (e) {
							return 'tableRow' === e;
						},
						acceptsLines: !1
					},
					tableHead: {
						continue: function () {
							return 1;
						},
						finalize: function () {},
						canContain: function (e) {
							return 'tableRow' === e || 'tableDelimRow' === e;
						},
						acceptsLines: !1
					},
					tableRow: {
						continue: function () {
							return 1;
						},
						finalize: function () {},
						canContain: function (e) {
							return 'tableCell' === e;
						},
						acceptsLines: !1
					},
					tableCell: {
						continue: function () {
							return 1;
						},
						finalize: function () {},
						canContain: function () {
							return !1;
						},
						acceptsLines: !1
					},
					tableDelimRow: {
						continue: function () {
							return 1;
						},
						finalize: function () {},
						canContain: function (e) {
							return 'tableDelimCell' === e;
						},
						acceptsLines: !1
					},
					tableDelimCell: {
						continue: function () {
							return 1;
						},
						finalize: function () {},
						canContain: function () {
							return !1;
						},
						acceptsLines: !1
					},
					refDef: o,
					customBlock: {
						continue: function (e, t) {
							var n = e.currentLine,
								r = n.match(Wt);
							if (r) return (e.lastLineLength = r[0].length), e.finalize(t, e.lineNumber), 2;
							for (var o = t.offset; 0 < o && L(E(n, e.offset)); ) e.advanceOffset(1, !0), o--;
							return 0;
						},
						finalize: function (e, t) {
							var n, r, o;
							null !== t.stringContent &&
								((o = (r = t.stringContent).indexOf('\n')),
								(n = r.slice(0, o)),
								(r = r.slice(o + 1)),
								(o = n.match(/^(\s*)(.*)/)),
								(t.info = m(o[2].trim())),
								(t.literal = r),
								(t.stringContent = null));
						},
						canContain: function () {
							return !1;
						},
						acceptsLines: !0
					},
					frontMatter: o
				};
			function Gt(e) {
				for (var t, n = 0, r = 0, o = [], i = 0; i < e.length; i += 1)
					'|' === e[i] &&
						'\\' !== e[i - 1] &&
						((t = e.substring(n, i)), 0 === n && me(t) ? (r = i + 1) : o.push(t), (n = i + 1));
				return n < e.length && (me((t = e.substring(n, e.length))) || o.push(t)), [r, o];
			}
			function Zt(e, t, n, r) {
				for (var o = [], i = 0, a = t; i < a.length; i++) {
					var s = a[i],
						l = s.match(/^[ \t]+/),
						l = l ? l[0].length : 0,
						c = void 0,
						u = void 0,
						p =
							((u =
								l === s.length
									? ((c = l = 0), '')
									: ((c = (p = s.match(/[ \t]+$/)) ? p[0].length : 0), s.slice(l, s.length - c))),
							r + l),
						d = w(e, [
							[n, r],
							[n, r + s.length - 1]
						]);
					(d.stringContent = u.replace(/\\\|/g, '|')),
						(d.startIdx = o.length),
						(d.endIdx = o.length),
						(d.lineOffsets = [p - 1]),
						(d.paddingLeft = l),
						(d.paddingRight = c),
						o.push(d),
						(r += s.length + 1);
				}
				return o;
			}
			function Xt(e) {
				var t = null,
					e = e.stringContent,
					n = e[0];
				return (
					':' === e[e.length - 1]
						? (t = ':' === n ? 'center' : 'right')
						: ':' === n && (t = 'left'),
					{ align: t }
				);
			}
			var Kt = /^(\$\$)(\s*[a-zA-Z])+/,
				Qt = /^(\$\$)(\s*[a-zA-Z])+.*(\$\$)/,
				Yt = /^`{3,}(?!.*`)|^~{3,}/,
				Jt = [
					/./,
					/^<(?:script|pre|style)(?:\s|>|$)/i,
					/^<!--/,
					/^<[?]/,
					/^<![A-Z]/,
					/^<!\[CDATA\[/,
					/^<[/]?(?:address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[123456]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul)(?:\s|[/]?[>]|$)/i,
					new RegExp('^(?:' + t + '|' + c + ')\\s*$', 'i')
				],
				en = /^(?:=+|-+)[ \t]*$/,
				tn = /^#{1,6}(?:[ \t]+|$)/,
				nn = /^(?:(?:\*[ \t]*){3,}|(?:_[ \t]*){3,}|(?:-[ \t]*){3,})[ \t]*$/,
				rn = /^[*+-]/,
				on = /^(\d{1,9})([.)])/;
			function an(e, t) {
				return e.options.disallowDeepHeading && ('blockQuote' === t.type || 'item' === t.type);
			}
			function sn(e, t) {
				var n = e.currentLine,
					r = e.lineNumber,
					o = e.indented;
				return 1 === r && !o && 'document' === t.type && cn.test(n)
					? (e.closeUnmatchedBlocks(),
						(e.addChild('frontMatter', e.nextNonspace).stringContent = n),
						e.advanceNextNonspace(),
						e.advanceOffset(n.length, !1),
						2)
					: 0;
			}
			var ln = [
					function (e) {
						return e.indented || 62 !== E(e.currentLine, e.nextNonspace)
							? 0
							: (e.advanceNextNonspace(),
								e.advanceOffset(1, !1),
								L(E(e.currentLine, e.offset)) && e.advanceOffset(1, !0),
								e.closeUnmatchedBlocks(),
								e.addChild('blockQuote', e.nextNonspace),
								1);
					},
					function (e, t) {
						var n;
						return e.indented || an(e, t) || !(t = e.currentLine.slice(e.nextNonspace).match(tn))
							? 0
							: (e.advanceNextNonspace(),
								e.advanceOffset(t[0].length, !1),
								e.closeUnmatchedBlocks(),
								((n = e.addChild('heading', e.nextNonspace)).level = t[0].trim().length),
								(n.headingType = 'atx'),
								(n.stringContent = e.currentLine
									.slice(e.offset)
									.replace(/^[ \t]*#+[ \t]*$/, '')
									.replace(/[ \t]+#+[ \t]*$/, '')),
								e.advanceOffset(e.currentLine.length - e.offset),
								2);
					},
					function (e) {
						var t, n, r;
						return !e.indented && (t = e.currentLine.slice(e.nextNonspace).match(Yt))
							? ((n = t[0].length),
								e.closeUnmatchedBlocks(),
								((r = e.addChild('codeBlock', e.nextNonspace)).isFenced = !0),
								(r.fenceLength = n),
								(r.fenceChar = t[0][0]),
								(r.fenceOffset = e.indent),
								e.advanceNextNonspace(),
								e.advanceOffset(n, !1),
								2)
							: 0;
					},
					function (e, t) {
						if (!e.indented && 60 === E(e.currentLine, e.nextNonspace))
							for (
								var n = e.currentLine.slice(e.nextNonspace),
									r = e.options.disallowedHtmlBlockTags,
									o = void 0,
									o = 1;
								o <= 7;
								o++
							) {
								var i = n.match(Jt[o]);
								if (i) {
									if (7 === o) {
										if ('paragraph' === t.type) return 0;
										if (0 < r.length)
											if (new RegExp('</?(?:' + r.join('|') + ')', 'i').test(i[0])) return 0;
									}
									return (
										e.closeUnmatchedBlocks(),
										(e.addChild('htmlBlock', e.offset).htmlBlockType = o),
										2
									);
								}
							}
						return 0;
					},
					function (e, t) {
						var n;
						if (
							null === t.stringContent ||
							e.indented ||
							'paragraph' !== t.type ||
							an(e, t.parent) ||
							!(n = e.currentLine.slice(e.nextNonspace).match(en))
						)
							return 0;
						e.closeUnmatchedBlocks();
						for (
							var r, o = void 0;
							91 === E(t.stringContent, 0) && (o = e.inlineParser.parseReference(t, e.refMap));

						)
							t.stringContent = t.stringContent.slice(o);
						return 0 < t.stringContent.length
							? (((r = w('heading', t.sourcepos)).level = '=' === n[0][0] ? 1 : 2),
								(r.headingType = 'setext'),
								(r.stringContent = t.stringContent),
								t.insertAfter(r),
								t.unlink(),
								(e.tip = r),
								e.advanceOffset(e.currentLine.length - e.offset, !1),
								2)
							: 0;
					},
					function (e) {
						return !e.indented && nn.test(e.currentLine.slice(e.nextNonspace))
							? (e.closeUnmatchedBlocks(),
								e.addChild('thematicBreak', e.nextNonspace),
								e.advanceOffset(e.currentLine.length - e.offset, !1),
								2)
							: 0;
					},
					function (e, t) {
						var n,
							r,
							o = t;
						return (e.indented && 'list' !== t.type) ||
							!(t = (function (e, t) {
								var n,
									r,
									o = e.currentLine.slice(e.nextNonspace),
									i = {
										type: 'bullet',
										tight: !0,
										bulletChar: '',
										start: 0,
										delimiter: '',
										padding: 0,
										markerOffset: e.indent,
										task: !1,
										checked: !1
									};
								if (4 <= e.indent) return null;
								if ((n = o.match(rn))) (i.type = 'bullet'), (i.bulletChar = n[0][0]);
								else {
									if (!(n = o.match(on)) || ('paragraph' === t.type && '1' !== n[1])) return null;
									(i.type = 'ordered'), (i.start = parseInt(n[1], 10)), (i.delimiter = n[2]);
								}
								if (
									-1 !== (r = E(e.currentLine, e.nextNonspace + n[0].length)) &&
									r !== jt &&
									r !== _t
								)
									return null;
								if (
									'paragraph' === t.type &&
									!e.currentLine.slice(e.nextNonspace + n[0].length).match(zt)
								)
									return null;
								e.advanceNextNonspace(), e.advanceOffset(n[0].length, !0);
								for (
									var a = e.column, o = e.offset;
									e.advanceOffset(1, !0),
										(r = E(e.currentLine, e.offset)),
										e.column - a < 5 && L(r);

								);
								var t = -1 === E(e.currentLine, e.offset),
									s = e.column - a;
								return (
									5 <= s || s < 1 || t
										? ((i.padding = n[0].length + 1),
											(e.column = a),
											(e.offset = o),
											L(E(e.currentLine, e.offset)) && e.advanceOffset(1, !0))
										: (i.padding = n[0].length + s),
									i
								);
							})(e, o))
							? 0
							: (e.closeUnmatchedBlocks(),
								('list' === e.tip.type &&
									((n = o.listData), (r = t), n.type === r.type) &&
									n.delimiter === r.delimiter &&
									n.bulletChar === r.bulletChar) ||
									((o = e.addChild('list', e.nextNonspace)).listData = t),
								((o = e.addChild('item', e.nextNonspace)).listData = t),
								1);
					},
					function (e) {
						return e.indented && 'paragraph' !== e.tip.type && !e.blank
							? (e.advanceOffset(4, !0),
								e.closeUnmatchedBlocks(),
								e.addChild('codeBlock', e.offset),
								2)
							: 0;
					},
					function (e, t) {
						var n,
							r,
							o,
							i,
							a,
							s,
							l,
							c,
							u,
							p,
							d,
							f,
							h,
							m = t.stringContent;
						return 'paragraph' !== t.type ||
							e.indented ||
							e.blank ||
							((n = m.length - 1),
							(h = m.lastIndexOf('\n', n - 1) + 1),
							(n = m.slice(h, n)),
							(p = e.currentLine.slice(e.nextNonspace)),
							(r = (o = Gt(n))[0]),
							(o = o[1]),
							(i = (a = Gt(p))[0]),
							(a = a[1]),
							(s = /^[ \t]*:?-+:?[ \t]*$/),
							!o.length) ||
							!a.length ||
							a.some(function (e) {
								return !s.test(e);
							}) ||
							(1 === a.length && 0 !== p.indexOf('|'))
							? 0
							: ((p = t.lineOffsets),
								((u = w('table', [
									[(l = e.lineNumber - 1), (c = gt(p) + 1)],
									[e.lineNumber, e.offset]
								])).columns = a.map(function () {
									return { align: null };
								})),
								t.insertAfter(u),
								1 === p.length
									? t.unlink()
									: ((t.stringContent = m.slice(0, h)),
										(m = m.lastIndexOf('\n', h - 2) + 1),
										(e.lastLineLength = p[p.length - 2] + (h - m - 1)),
										e.finalize(t, l - 1)),
								e.advanceOffset(e.currentLine.length - e.offset, !1),
								(p = w('tableHead', [
									[l, c],
									[e.lineNumber, e.offset]
								])),
								u.appendChild(p),
								(d = w('tableRow', [
									[l, c],
									[l, c + n.length - 1]
								])),
								(f = w('tableDelimRow', [
									[e.lineNumber, e.nextNonspace + 1],
									[e.lineNumber, e.offset]
								])),
								p.appendChild(d),
								p.appendChild(f),
								Zt('tableCell', o, l, c + r).forEach(function (e) {
									d.appendChild(e);
								}),
								(h = Zt('tableDelimCell', a, e.lineNumber, e.nextNonspace + 1 + i)).forEach(
									function (e) {
										f.appendChild(e);
									}
								),
								(u.columns = h.map(Xt)),
								(e.tip = u),
								2);
					},
					function (e, t) {
						var n, r, o;
						return ('table' !== t.type && 'tableBody' !== t.type) ||
							(!e.blank && -1 === e.currentLine.indexOf('|'))
							? 0
							: (e.advanceOffset(e.currentLine.length - e.offset, !1),
								e.blank
									? ('tableBody' === (o = t).type &&
											((o = t.parent), e.finalize(t, e.lineNumber - 1)),
										e.finalize(o, e.lineNumber - 1),
										0)
									: ('table' === (o = t).type &&
											((o = e.addChild('tableBody', e.nextNonspace)).stringContent = null),
										(n = w('tableRow', [
											[e.lineNumber, e.nextNonspace + 1],
											[e.lineNumber, e.currentLine.length]
										])),
										o.appendChild(n),
										(r = o.parent),
										(o = (t = Gt(e.currentLine.slice(e.nextNonspace)))[0]),
										Zt('tableCell', t[1], e.lineNumber, e.nextNonspace + 1 + o).forEach(
											function (e, t) {
												t >= r.columns.length && (e.ignored = !0), n.appendChild(e);
											}
										),
										2));
					},
					function (e) {
						var t, n;
						return e.indented || Qt.test(e.currentLine) || !(t = e.currentLine.match(Kt))
							? 0
							: ((t = t[1].length),
								e.closeUnmatchedBlocks(),
								((n = e.addChild('customBlock', e.nextNonspace)).syntaxLength = t),
								(n.offset = e.indent),
								e.advanceNextNonspace(),
								e.advanceOffset(t, !1),
								2);
					}
				],
				cn = /^(-{3}|\+{3}|;{3})$/,
				un = {
					continue: function (e, t) {
						var n = e.currentLine,
							r = n.match(cn);
						return 'frontMatter' === t.type && r
							? ((t.stringContent += n),
								(e.lastLineLength = r[0].length),
								e.finalize(t, e.lineNumber),
								2)
							: 0;
					},
					finalize: function (e, t) {
						null !== t.stringContent && ((t.literal = t.stringContent), (t.stringContent = null));
					},
					canContain: function () {
						return !1;
					},
					acceptsLines: !0
				},
				pn = [/./, /<\/(?:script|pre|style)>/i, /-->/, /\?>/, />/, /\]\]>/],
				dn = /^[#`~*+_=<>0-9-;$]/,
				fn = /\r\n|\n|\r/;
			function hn() {
				return w('document', [
					[1, 1],
					[0, 0]
				]);
			}
			var mn = {
					smart: !1,
					tagFilter: !1,
					extendedAutolinks: !1,
					disallowedHtmlBlockTags: [],
					referenceDefinition: !1,
					disallowDeepHeading: !1,
					customParser: null,
					frontMatter: !1
				},
				gn =
					((N.prototype.advanceOffset = function (e, t) {
						void 0 === t && (t = !1);
						for (var n, r, o, i = this.currentLine; 0 < e && (o = i[this.offset]); )
							'\t' === o
								? ((n = 4 - (this.column % 4)),
									t
										? ((this.partiallyConsumedTab = e < n),
											(this.column += r = e < n ? e : n),
											(this.offset += this.partiallyConsumedTab ? 0 : 1),
											(e -= r))
										: ((this.partiallyConsumedTab = !1),
											(this.column += n),
											(this.offset += 1),
											--e))
								: ((this.partiallyConsumedTab = !1), (this.offset += 1), (this.column += 1), --e);
					}),
					(N.prototype.advanceNextNonspace = function () {
						(this.offset = this.nextNonspace),
							(this.column = this.nextNonspaceColumn),
							(this.partiallyConsumedTab = !1);
					}),
					(N.prototype.findNextNonspace = function () {
						for (
							var e, t = this.currentLine, n = this.offset, r = this.column;
							'' !== (e = t.charAt(n));

						)
							if (' ' === e) n++, r++;
							else {
								if ('\t' !== e) break;
								n++, (r += 4 - (r % 4));
							}
						(this.blank = '\n' === e || '\r' === e || '' === e),
							(this.nextNonspace = n),
							(this.nextNonspaceColumn = r),
							(this.indent = this.nextNonspaceColumn - this.column),
							(this.indented = 4 <= this.indent);
					}),
					(N.prototype.addLine = function () {
						var e;
						this.partiallyConsumedTab &&
							((this.offset += 1),
							(e = 4 - (this.column % 4)),
							(this.tip.stringContent += he(' ', e))),
							this.tip.lineOffsets
								? this.tip.lineOffsets.push(this.offset)
								: (this.tip.lineOffsets = [this.offset]),
							(this.tip.stringContent += this.currentLine.slice(this.offset) + '\n');
					}),
					(N.prototype.addChild = function (e, t) {
						for (; !M[this.tip.type].canContain(e); ) this.finalize(this.tip, this.lineNumber - 1);
						t = w(e, [
							[this.lineNumber, t + 1],
							[0, 0]
						]);
						return (t.stringContent = ''), this.tip.appendChild(t), (this.tip = t);
					}),
					(N.prototype.closeUnmatchedBlocks = function () {
						if (!this.allClosed) {
							for (; this.oldtip !== this.lastMatchedContainer; ) {
								var e = this.oldtip.parent;
								this.finalize(this.oldtip, this.lineNumber - 1), (this.oldtip = e);
							}
							this.allClosed = !0;
						}
					}),
					(N.prototype.finalize = function (e, t) {
						var n = e.parent;
						(e.open = !1),
							(e.sourcepos[1] = [t, this.lastLineLength]),
							M[e.type].finalize(this, e),
							(this.tip = n);
					}),
					(N.prototype.processInlines = function (e) {
						var t = this.options.customParser,
							n = e.walker();
						for (
							this.inlineParser.refMap = this.refMap,
								this.inlineParser.refLinkCandidateMap = this.refLinkCandidateMap,
								this.inlineParser.refDefCandidateMap = this.refDefCandidateMap,
								this.inlineParser.options = this.options;
							(o = n.next());

						) {
							var r = o.node,
								o = o.entering,
								i = r.type;
							t && t[i] && t[i](r, { entering: o, options: this.options }),
								o ||
									('paragraph' !== i && 'heading' !== i && ('tableCell' !== i || r.ignored)) ||
									this.inlineParser.parse(r);
						}
					}),
					(N.prototype.incorporateLine = function (e) {
						for (
							var t,
								n = this.doc,
								r =
									((this.oldtip = this.tip),
									(this.offset = 0),
									(this.column = 0),
									(this.blank = !1),
									(this.partiallyConsumedTab = !1),
									(this.lineNumber += 1),
									-1 !== e.indexOf('\0') && (e = e.replace(/\0/g, '�')),
									(this.currentLine = e),
									!0);
							(t = n.lastChild) && t.open;

						) {
							switch (((n = t), this.findNextNonspace(), M[n.type].continue(this, n))) {
								case 0:
									break;
								case 1:
									r = !1;
									break;
								case 2:
									return void (this.lastLineLength = e.length);
								default:
									throw new Error('continue returned illegal value, must be 0, 1, or 2');
							}
							if (!r) {
								n = n.parent;
								break;
							}
						}
						this.allClosed = n === this.oldtip;
						for (
							var o =
									'paragraph' !== (this.lastMatchedContainer = n).type && M[n.type].acceptsLines,
								i = ln.length;
							!o;

						) {
							if (
								(this.findNextNonspace(),
								'table' !== n.type &&
									'tableBody' !== n.type &&
									'paragraph' !== n.type &&
									!this.indented &&
									!dn.test(e.slice(this.nextNonspace)))
							) {
								this.advanceNextNonspace();
								break;
							}
							for (var a = 0; a < i; ) {
								var s = ln[a](this, n);
								if (1 === s) {
									n = this.tip;
									break;
								}
								if (2 === s) {
									(n = this.tip), (o = !0);
									break;
								}
								a++;
							}
							if (a === i) {
								this.advanceNextNonspace();
								break;
							}
						}
						if (this.allClosed || this.blank || 'paragraph' !== this.tip.type) {
							this.closeUnmatchedBlocks(),
								this.blank && n.lastChild && (n.lastChild.lastLineBlank = !0);
							for (
								var l = n.type,
									c =
										this.blank &&
										!(
											'blockQuote' === l ||
											(rt(n) && n.isFenced) ||
											('item' === l && !n.firstChild && n.sourcepos[0][0] === this.lineNumber)
										),
									u = n;
								u;

							)
								(u.lastLineBlank = c), (u = u.parent);
							M[l].acceptsLines
								? (this.addLine(),
									'htmlBlock' === n.type &&
										1 <= n.htmlBlockType &&
										n.htmlBlockType <= 5 &&
										pn[n.htmlBlockType].test(this.currentLine.slice(this.offset)) &&
										((this.lastLineLength = e.length), this.finalize(n, this.lineNumber)))
								: this.offset < e.length &&
									!this.blank &&
									((n = this.addChild('paragraph', this.offset)),
									this.advanceNextNonspace(),
									this.addLine());
						} else this.addLine();
						this.lastLineLength = e.length;
					}),
					(N.prototype.parse = function (e, t) {
						(this.doc = hn()),
							(this.tip = this.doc),
							(this.lineNumber = 0),
							(this.lastLineLength = 0),
							(this.offset = 0),
							(this.column = 0),
							(this.lastMatchedContainer = this.doc),
							(this.currentLine = '');
						var n = e.split(fn),
							r = n.length;
						(this.lines = t || n),
							this.options.referenceDefinition && this.clearRefMaps(),
							10 === e.charCodeAt(e.length - 1) && --r;
						for (var o = 0; o < r; o++) this.incorporateLine(n[o]);
						for (; this.tip; ) this.finalize(this.tip, r);
						return this.processInlines(this.doc), this.doc;
					}),
					(N.prototype.partialParseStart = function (e, t) {
						(this.doc = hn()),
							(this.tip = this.doc),
							(this.lineNumber = e - 1),
							(this.lastLineLength = 0),
							(this.offset = 0),
							(this.column = 0),
							(this.lastMatchedContainer = this.doc),
							(this.currentLine = '');
						for (var n = t.length, r = 0; r < n; r++) this.incorporateLine(t[r]);
						return this.doc;
					}),
					(N.prototype.partialParseExtends = function (e) {
						for (var t = 0; t < e.length; t++) this.incorporateLine(e[t]);
					}),
					(N.prototype.partialParseFinish = function () {
						for (; this.tip; ) this.finalize(this.tip, this.lineNumber);
						this.processInlines(this.doc);
					}),
					(N.prototype.setRefMaps = function (e, t, n) {
						(this.refMap = e), (this.refLinkCandidateMap = t), (this.refDefCandidateMap = n);
					}),
					(N.prototype.clearRefMaps = function () {
						[this.refMap, this.refLinkCandidateMap, this.refDefCandidateMap].forEach(function (e) {
							var t;
							(t = e),
								Object.keys(t).forEach(function (e) {
									delete t[e];
								});
						});
					}),
					N);
			function N(e) {
				(this.options = s(s({}, mn), e)),
					(this.doc = hn()),
					(this.tip = this.doc),
					(this.oldtip = this.doc),
					(this.lineNumber = 0),
					(this.offset = 0),
					(this.column = 0),
					(this.nextNonspace = 0),
					(this.nextNonspaceColumn = 0),
					(this.indent = 0),
					(this.currentLine = ''),
					(this.indented = !1),
					(this.blank = !1),
					(this.partiallyConsumedTab = !1),
					(this.allClosed = !0),
					(this.lastMatchedContainer = this.doc),
					(this.refMap = {}),
					(this.refLinkCandidateMap = {}),
					(this.refDefCandidateMap = {}),
					(this.lastLineLength = 0),
					(this.lines = []),
					this.options.frontMatter && ((M.frontMatter = un), ln.unshift(sn)),
					(this.inlineParser = new Ft(this.options));
			}
			function vn(e, t) {
				return e[0] < t[0] ? 1 : e[0] > t[0] ? -1 : e[1] < t[1] ? 1 : e[1] > t[1] ? -1 : 0;
			}
			function yn(e, t) {
				for (var n = 0, r = t; n < r.length; n++) {
					var o = r[n];
					e.insertBefore(o);
				}
			}
			function bn(e, t) {
				var n = e[0];
				return e[1][0] < t ? 1 : n[0] > t ? -1 : 0;
			}
			function wn(e, t) {
				for (var n = e.firstChild; n; ) {
					var r = bn(n.sourcepos, t);
					if (0 === r) return n;
					if (-1 === r) return n.prev || n;
					n = n.next;
				}
				return e.lastChild;
			}
			function kn(e, t) {
				for (var n = e.firstChild, r = null; n; ) {
					var o = bn(n.sourcepos, t);
					if (0 === o) {
						if (n.sourcepos[0][0] === t || !n.firstChild) return n;
						n = (r = n).firstChild;
					} else {
						if (-1 === o) break;
						n = (r = n).next;
					}
				}
				if (r) {
					for (
						var i = (function (e) {
							for (; e.lastChild; ) e = e.lastChild;
							return e;
						})(r);
						i.parent &&
						'document' !== i.parent.type &&
						i.parent.sourcepos[0][0] === i.sourcepos[0][0];

					)
						i = i.parent;
					return i;
				}
				return null;
			}
			function xn(e, t) {
				for (var n, r, o = e, i = null; o; ) {
					(a = o.sourcepos), (n = t), (r = void 0), (r = a[0]);
					var a = 1 === vn(a[1], n) ? 1 : -1 === vn(r, n) ? -1 : 0;
					if (0 == a) {
						if (!o.firstChild) return o;
						o = (i = o).firstChild;
					} else {
						if (-1 == a) return i;
						if (!o.next) return i;
						o = o.next;
					}
				}
				return o;
			}
			function Cn(e) {
				return we[e] || null;
			}
			function Tn(e, t, n) {
				if ((void 0 === n && (n = null), t))
					for (var r = t.walker(); t && t !== n; ) {
						e(t);
						var o = r.next();
						if (!o) break;
						t = o.node;
					}
			}
			var En = /\r\n|\n|\r/;
			function Ln(e) {
				return {
					id: e.id,
					title: e.title,
					sourcepos: e.sourcepos,
					unlinked: !1,
					destination: e.dest
				};
			}
			(A.prototype.updateLineTexts = function (e, t, n) {
				var r = e[0],
					e = e[1],
					o = t[0],
					t = t[1],
					n = n.split(En),
					i = n.length,
					a = this.lineTexts[r - 1],
					s = this.lineTexts[o - 1],
					a =
						((n[0] = a.slice(0, e - 1) + n[0]), (n[i - 1] = n[i - 1] + s.slice(t - 1)), o - r + 1);
				return (e = this.lineTexts).splice.apply(e, F([r - 1, a], n)), i - a;
			}),
				(A.prototype.updateRootNodeState = function () {
					if (1 === this.lineTexts.length && '' === this.lineTexts[0])
						(this.root.lastLineBlank = !0),
							(this.root.sourcepos = [
								[1, 1],
								[1, 0]
							]);
					else {
						this.root.lastChild && (this.root.lastLineBlank = this.root.lastChild.lastLineBlank);
						for (var e = this.lineTexts, t = e.length - 1; '' === e[t]; ) --t;
						e.length - 2 > t && (t += 1), (this.root.sourcepos[1] = [t + 1, e[t].length]);
					}
				}),
				(A.prototype.replaceRangeNodes = function (e, t, n) {
					if (e) {
						yn(e, n);
						var r = e,
							o = t;
						if (r.parent === o.parent && r !== o) {
							for (var i = r.next; i && i !== o; ) {
								for (var a = i.next, s = 0, l = ['parent', 'prev', 'next']; s < l.length; s++) {
									var c = l[s];
									i[c] && (ke(i[c].id), (i[c] = null));
								}
								i = a;
							}
							(r.next = o.next), o.next ? (o.next.prev = r) : (r.parent.lastChild = r);
						}
						[e.id, t.id].forEach(ke), e.unlink();
					} else if (t) yn(t, n), ke(t.id), t.unlink();
					else for (var u = this.root, p = n, d = p.length - 1; 0 <= d; --d) u.prependChild(p[d]);
				}),
				(A.prototype.getNodeRange = function (e, t) {
					var e = wn(this.root, e[0]),
						n = wn(this.root, t[0]);
					return [e, (n = n && n.next && t[0] + 1 === n.next.sourcepos[0][0] ? n.next : n)];
				}),
				(A.prototype.trigger = function (e, t) {
					this.eventHandlerMap[e].forEach(function (e) {
						e(t);
					});
				}),
				(A.prototype.extendEndLine = function (e) {
					for (; '' === this.lineTexts[e]; ) e += 1;
					return e;
				}),
				(A.prototype.parseRange = function (e, t, n, r) {
					e &&
						e.prev &&
						((ot(e.prev) &&
							((o = this.lineTexts[n - 1]),
							((i = o.match(/^[ \t]+/)) && (2 <= i[0].length || /\t/.test(i[0]))) ||
								((i = i ? o.slice(i.length) : o), rn.test(i)) ||
								on.test(i))) ||
							('table' === e.prev.type &&
								!$t((o = this.lineTexts[n - 1])) &&
								-1 !== o.indexOf('|'))) &&
						(n = (e = e.prev).sourcepos[0][0]);
					for (
						var o,
							i = this.lineTexts.slice(n - 1, r),
							n = this.parser.partialParseStart(n, i),
							a = t ? t.next : this.root.firstChild,
							s = n.lastChild,
							l = s && rt(s) && s.open,
							c = s && it(s) && s.open,
							u = s && ot(s);
						((l || c) && a) || (u && a && ('list' === a.type || 2 <= a.sourcepos[0][1]));

					) {
						var p = this.extendEndLine(a.sourcepos[1][0]);
						this.parser.partialParseExtends(this.lineTexts.slice(r, p)),
							(e = e || t),
							(r = p),
							(a = (t = a).next);
					}
					return (
						this.parser.partialParseFinish(),
						{
							newNodes: (function (e) {
								for (var t = [], n = e.firstChild; n; ) t.push(n), (n = n.next);
								return t;
							})(n),
							extStartNode: e,
							extEndNode: t
						}
					);
				}),
				(A.prototype.getRemovedNodeRange = function (e, t) {
					return !e || k(e) || (t && k(t))
						? null
						: { id: [e.id, t.id], line: [e.sourcepos[0][0] - 1, t.sourcepos[1][0] - 1] };
				}),
				(A.prototype.markDeletedRefMap = function (e, t) {
					var n,
						r = this;
					C(this.refMap) ||
						((n = function (e) {
							var t;
							k(e) && (t = r.refMap[e.label]) && e.id === t.id && (t.unlinked = !0);
						}),
						e && Tn(n, e.parent, t),
						t && Tn(n, t));
				}),
				(A.prototype.replaceWithNewRefDefState = function (e) {
					var t,
						r = this;
					C(this.refMap) ||
						((t = function (e) {
							var t, n;
							k(e) && ((t = e.label), ((n = r.refMap[t]) && !n.unlinked) || (r.refMap[t] = Ln(e)));
						}),
						e.forEach(function (e) {
							Tn(t, e);
						}));
				}),
				(A.prototype.replaceWithRefDefCandidate = function () {
					var i = this;
					C(this.refDefCandidateMap) ||
						yt(this.refDefCandidateMap, function (e, t) {
							var n = t.label,
								r = t.sourcepos,
								o = i.refMap[n];
							(!o || o.unlinked || o.sourcepos[0][0] > r[0][0]) && (i.refMap[n] = Ln(t));
						});
				}),
				(A.prototype.getRangeWithRefDef = function (e, t, n, r, o) {
					var i, a;
					return (
						this.referenceDefinition &&
							!C(this.refMap) &&
							((i = wn(this.root, e - 1)),
							(a = wn(this.root, t + 1)),
							i && k(i) && i !== n && i !== r && (e = (n = i).sourcepos[0][0]),
							a) &&
							k(a) &&
							a !== n &&
							a !== r &&
							(t = this.extendEndLine((r = a).sourcepos[1][0] + o)),
						[n, r, e, t]
					);
				}),
				(A.prototype.parse = function (e, t, n) {
					void 0 === n && (n = 0);
					var r = this.getNodeRange(e, t),
						o = r[0],
						r = r[1],
						e = o ? Math.min(o.sourcepos[0][0], e[0]) : e[0],
						t = this.extendEndLine((r ? Math.max(r.sourcepos[1][0], t[0]) : t[0]) + n),
						e = this.parseRange.apply(this, this.getRangeWithRefDef(e, t, o, r, n)),
						t = e.newNodes,
						o = e.extStartNode,
						r = e.extEndNode,
						n = this.getRemovedNodeRange(o, r),
						e = r ? r.next : this.root.firstChild;
					return (
						this.referenceDefinition
							? (this.markDeletedRefMap(o, r),
								this.replaceRangeNodes(o, r, t),
								this.replaceWithNewRefDefState(t))
							: this.replaceRangeNodes(o, r, t),
						{ nodes: t, removedNodeRange: n, nextNode: e }
					);
				}),
				(A.prototype.parseRefLink = function () {
					var o = this,
						i = [];
					return (
						C(this.refMap) ||
							yt(this.refMap, function (r, e) {
								e.unlinked && delete o.refMap[r],
									yt(o.refLinkCandidateMap, function (e, t) {
										var n = t.node;
										t.refLabel === r && i.push(o.parse(n.sourcepos[0], n.sourcepos[1]));
									});
							}),
						i
					);
				}),
				(A.prototype.removeUnlinkedCandidate = function () {
					C(this.refDefCandidateMap) ||
						[this.refLinkCandidateMap, this.refDefCandidateMap].forEach(function (t) {
							yt(t, function (e) {
								!(function (e) {
									var t = Cn(e);
									if (!t) return 1;
									for (; t && 'document' !== t.type; ) {
										if (!t.parent && !t.prev && !t.next) return 1;
										t = t.parent;
									}
								})(e) || delete t[e];
							});
						});
				}),
				(A.prototype.editMarkdown = function (e, t, n) {
					var n = this.updateLineTexts(e, t, n),
						e = this.parse(e, t, n),
						t = (function (e) {
							for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
							var r = s({}, e);
							return (
								t.forEach(function (e) {
									delete r[e];
								}),
								r
							);
						})(e, 'nextNode'),
						e = e.nextNode,
						r = n;
					if (e && e.parent && 0 !== r) {
						var o,
							i = e.parent.walker();
						for (i.resumeAt(e, !0); (o = i.next()); ) {
							var a = o.node;
							o.entering && ((a.sourcepos[0][0] += r), (a.sourcepos[1][0] += r));
						}
					}
					this.updateRootNodeState();
					n = [t];
					return (
						this.referenceDefinition &&
							(this.removeUnlinkedCandidate(),
							this.replaceWithRefDefCandidate(),
							(n = n.concat(this.parseRefLink()))),
						this.trigger('change', n),
						n
					);
				}),
				(A.prototype.getLineTexts = function () {
					return this.lineTexts;
				}),
				(A.prototype.getRootNode = function () {
					return this.root;
				}),
				(A.prototype.findNodeAtPosition = function (e) {
					e = xn(this.root, e);
					return e && e !== this.root ? e : null;
				}),
				(A.prototype.findFirstNodeAtLine = function (e) {
					return kn(this.root, e);
				}),
				(A.prototype.on = function (e, t) {
					this.eventHandlerMap[e].push(t);
				}),
				(A.prototype.off = function (e, t) {
					(e = this.eventHandlerMap[e]), (t = e.indexOf(t));
					e.splice(t, 1);
				}),
				(A.prototype.findNodeById = Cn),
				(A.prototype.removeAllNode = function () {
					we = {};
				});
			var Mn = A;
			function A(e, t) {
				(this.refMap = {}),
					(this.refLinkCandidateMap = {}),
					(this.refDefCandidateMap = {}),
					(this.referenceDefinition = !(null == t || !t.referenceDefinition)),
					(this.parser = new gn(t)),
					this.parser.setRefMaps(this.refMap, this.refLinkCandidateMap, this.refDefCandidateMap),
					(this.eventHandlerMap = { change: [] }),
					(this.lineTexts = (e = e || '').split(En)),
					(this.root = this.parser.parse(e, this.lineTexts));
			}
			var Nn = new RegExp(
				'<(/?(?:' +
					[
						'title',
						'textarea',
						'style',
						'xmp',
						'iframe',
						'noembed',
						'noframes',
						'script',
						'plaintext'
					].join('|') +
					')[^>]*>)',
				'ig'
			);
			function An(e) {
				return Nn.test(e)
					? e.replace(Nn, function (e, t) {
							return '&lt;' + t;
						})
					: e;
			}
			var Dn = {
					heading: function (e, t) {
						return {
							type: t.entering ? 'openTag' : 'closeTag',
							tagName: 'h' + e.level,
							outerNewLine: !0
						};
					},
					text: function (e) {
						return { type: 'text', content: e.literal };
					},
					softbreak: function (e, t) {
						return { type: 'html', content: t.options.softbreak };
					},
					linebreak: function () {
						return { type: 'html', content: '<br />\n' };
					},
					emph: function (e, t) {
						return { type: t.entering ? 'openTag' : 'closeTag', tagName: 'em' };
					},
					strong: function (e, t) {
						return { type: t.entering ? 'openTag' : 'closeTag', tagName: 'strong' };
					},
					paragraph: function (e, t) {
						(t = t.entering), (e = null == (e = e.parent) ? void 0 : e.parent);
						return e && 'list' === e.type && e.listData.tight
							? null
							: { type: t ? 'openTag' : 'closeTag', tagName: 'p', outerNewLine: !0 };
					},
					thematicBreak: function () {
						return { type: 'openTag', tagName: 'hr', outerNewLine: !0, selfClose: !0 };
					},
					blockQuote: function (e, t) {
						return {
							type: t.entering ? 'openTag' : 'closeTag',
							tagName: 'blockquote',
							outerNewLine: !0,
							innerNewLine: !0
						};
					},
					list: function (e, t) {
						var t = t.entering,
							e = e.listData,
							n = e.type,
							e = e.start,
							n = 'bullet' === n ? 'ul' : 'ol',
							r = {};
						return (
							'ol' == n && null !== e && 1 !== e && (r.start = e.toString()),
							{ type: t ? 'openTag' : 'closeTag', tagName: n, attributes: r, outerNewLine: !0 }
						);
					},
					item: function (e, t) {
						return { type: t.entering ? 'openTag' : 'closeTag', tagName: 'li', outerNewLine: !0 };
					},
					htmlInline: function (e, t) {
						return { type: 'html', content: t.options.tagFilter ? An(e.literal) : e.literal };
					},
					htmlBlock: function (e, t) {
						(t = t.options), (e = t.tagFilter ? An(e.literal) : e.literal);
						return t.nodeId
							? [
									{ type: 'openTag', tagName: 'div', outerNewLine: !0 },
									{ type: 'html', content: e },
									{ type: 'closeTag', tagName: 'div', outerNewLine: !0 }
								]
							: { type: 'html', content: e, outerNewLine: !0 };
					},
					code: function (e) {
						return [
							{ type: 'openTag', tagName: 'code' },
							{ type: 'text', content: e.literal },
							{ type: 'closeTag', tagName: 'code' }
						];
					},
					codeBlock: function (e) {
						var t = e.info,
							t = t ? t.split(/\s+/) : [],
							n = [];
						return (
							0 < t.length && 0 < t[0].length && n.push('language-' + g(t[0])),
							[
								{ type: 'openTag', tagName: 'pre', outerNewLine: !0 },
								{ type: 'openTag', tagName: 'code', classNames: n },
								{ type: 'text', content: e.literal },
								{ type: 'closeTag', tagName: 'code' },
								{ type: 'closeTag', tagName: 'pre', outerNewLine: !0 }
							]
						);
					},
					link: function (e, t) {
						return t.entering
							? ((t = e.title),
								(e = e.destination),
								{
									type: 'openTag',
									tagName: 'a',
									attributes: s({ href: g(e) }, t && { title: g(t) })
								})
							: { type: 'closeTag', tagName: 'a' };
					},
					image: function (e, t) {
						var n = t.getChildrenText,
							t = t.skipChildren,
							r = e.title,
							o = e.destination;
						return (
							t(),
							{
								type: 'openTag',
								tagName: 'img',
								selfClose: !0,
								attributes: s({ src: g(o), alt: n(e) }, r && { title: g(r) })
							}
						);
					},
					customBlock: function (e, t, n) {
						var r = e.info.trim().toLowerCase(),
							n = n[r];
						if (n)
							try {
								return n(e, t);
							} catch (e) {
								console.warn(
									'[@toast-ui/editor] - The error occurred when ' +
										r +
										' block node was parsed in markdown renderer: ' +
										e
								);
							}
						return [
							{ type: 'openTag', tagName: 'div', outerNewLine: !0 },
							{ type: 'text', content: e.literal },
							{ type: 'closeTag', tagName: 'div', outerNewLine: !0 }
						];
					},
					frontMatter: function (e) {
						return [
							{
								type: 'openTag',
								tagName: 'div',
								outerNewLine: !0,
								attributes: { style: 'white-space: pre; display: none;' }
							},
							{ type: 'text', content: e.literal },
							{ type: 'closeTag', tagName: 'div', outerNewLine: !0 }
						];
					},
					customInline: function (e, t, n) {
						var r = e.info,
							o = e.firstChild,
							i = r.trim().toLowerCase(),
							n = n[i],
							a = t.entering;
						if (n)
							try {
								return n(e, t);
							} catch (e) {
								console.warn(
									'[@toast-ui/editor] - The error occurred when ' +
										i +
										' inline node was parsed in markdown renderer: ' +
										e
								);
							}
						return a
							? [
									{ type: 'openTag', tagName: 'span' },
									{ type: 'text', content: '$$' + r + (o ? ' ' : '') }
								]
							: [
									{ type: 'text', content: '$$' },
									{ type: 'closeTag', tagName: 'span' }
								];
					}
				},
				Sn = {
					strike: function (e, t) {
						return { type: t.entering ? 'openTag' : 'closeTag', tagName: 'del' };
					},
					item: function (e, t) {
						var t = t.entering,
							e = e.listData,
							n = e.checked,
							e = e.task;
						return t
							? ((t = { type: 'openTag', tagName: 'li', outerNewLine: !0 }),
								e
									? [
											t,
											{
												type: 'openTag',
												tagName: 'input',
												selfClose: !0,
												attributes: s(s({}, n && { checked: '' }), {
													disabled: '',
													type: 'checkbox'
												})
											},
											{ type: 'text', content: ' ' }
										]
									: t)
							: { type: 'closeTag', tagName: 'li', outerNewLine: !0 };
					},
					table: function (e, t) {
						return {
							type: t.entering ? 'openTag' : 'closeTag',
							tagName: 'table',
							outerNewLine: !0
						};
					},
					tableHead: function (e, t) {
						return {
							type: t.entering ? 'openTag' : 'closeTag',
							tagName: 'thead',
							outerNewLine: !0
						};
					},
					tableBody: function (e, t) {
						return {
							type: t.entering ? 'openTag' : 'closeTag',
							tagName: 'tbody',
							outerNewLine: !0
						};
					},
					tableRow: function (e, t) {
						if (t.entering) return { type: 'openTag', tagName: 'tr', outerNewLine: !0 };
						var n = [];
						if (e.lastChild)
							for (
								var r = e.parent.parent.columns.length, o = e.lastChild.endIdx + 1;
								o < r;
								o += 1
							)
								n.push(
									{ type: 'openTag', tagName: 'td', outerNewLine: !0 },
									{ type: 'closeTag', tagName: 'td', outerNewLine: !0 }
								);
						return n.push({ type: 'closeTag', tagName: 'tr', outerNewLine: !0 }), n;
					},
					tableCell: function (e, t) {
						var n,
							r,
							t = t.entering;
						return e.ignored
							? { type: 'text', content: '' }
							: ((n = 'tableHead' === (r = e.parent.parent).type ? 'th' : 'td'),
								(e =
									null != (r = r.parent.columns[e.startIdx]) && r.align
										? { align: r.align }
										: null),
								t
									? s({ type: 'openTag', tagName: n, outerNewLine: !0 }, e && { attributes: e })
									: { type: 'closeTag', tagName: n, outerNewLine: !0 });
					}
				},
				On = { softbreak: '\n', gfm: !1, tagFilter: !1, nodeId: !1 };
			function In(e) {
				for (var t = [], n = e.walker(); (r = n.next()); ) {
					var r = r.node;
					'text' === r.type && t.push(r.literal);
				}
				return t.join('');
			}
			(D.prototype.createConvertors = function () {
				var t,
					e,
					n,
					i = s({}, Dn);
				return (
					this.options.gfm && (i = s(s({}, i), Sn)),
					this.options.convertors &&
						((t = this.options.convertors),
						(e = Object.keys(t)),
						(n = s(s({}, Dn), Sn)),
						e.forEach(function (e) {
							var r = i[e],
								o = t[e],
								e = -1 === Object.keys(n).indexOf(e) ? e.toLowerCase() : e;
							i[e] = r
								? function (e, t, n) {
										return (
											(t.origin = function () {
												return r(e, t, n);
											}),
											o(e, t)
										);
									}
								: o;
						})),
					i
				);
			}),
				(D.prototype.getConvertors = function () {
					return this.convertors;
				}),
				(D.prototype.getOptions = function () {
					return this.options;
				}),
				(D.prototype.render = function (e) {
					for (
						var o = this, i = ((this.buffer = []), e.walker()), a = null, s = this;
						(a = i.next());

					)
						!(function () {
							var n = a.node,
								e = a.entering,
								t = s.convertors[n.type];
							if (!t) return;
							var r = !1,
								e = {
									entering: e,
									leaf: !ye(n),
									options: s.options,
									getChildrenText: In,
									skipChildren: function () {
										r = !0;
									}
								},
								t = it(n) || 'customInline' === n.type ? t(n, e, s.convertors) : t(n, e);
							t &&
								((Array.isArray(t) ? t : [t]).forEach(function (e, t) {
									'openTag' === e.type &&
										o.options.nodeId &&
										0 === t &&
										(e.attributes || (e.attributes = {}),
										(e.attributes['data-nodeid'] = String(n.id))),
										o.renderHTMLNode(e);
								}),
								r) &&
								(i.resumeAt(n, !1), i.next());
						})();
					return this.addNewLine(), this.buffer.join('');
				}),
				(D.prototype.renderHTMLNode = function (e) {
					switch (e.type) {
						case 'openTag':
						case 'closeTag':
							this.renderElementNode(e);
							break;
						case 'text':
							this.renderTextNode(e);
							break;
						case 'html':
							this.renderRawHtmlNode(e);
					}
				}),
				(D.prototype.generateOpenTagString = function (e) {
					var n = this,
						t = e.tagName,
						r = e.classNames,
						o = e.attributes;
					this.buffer.push('<' + t),
						r && 0 < r.length && this.buffer.push(' class="' + r.join(' ') + '"'),
						o &&
							Object.keys(o).forEach(function (e) {
								var t = o[e];
								n.buffer.push(' ' + e + '="' + t + '"');
							}),
						e.selfClose && this.buffer.push(' /'),
						this.buffer.push('>');
				}),
				(D.prototype.generateCloseTagString = function (e) {
					e = e.tagName;
					this.buffer.push('</' + e + '>');
				}),
				(D.prototype.addNewLine = function () {
					this.buffer.length && '\n' !== gt(gt(this.buffer)) && this.buffer.push('\n');
				}),
				(D.prototype.addOuterNewLine = function (e) {
					e.outerNewLine && this.addNewLine();
				}),
				(D.prototype.addInnerNewLine = function (e) {
					e.innerNewLine && this.addNewLine();
				}),
				(D.prototype.renderTextNode = function (e) {
					this.buffer.push(g(e.content));
				}),
				(D.prototype.renderRawHtmlNode = function (e) {
					this.addOuterNewLine(e), this.buffer.push(e.content), this.addOuterNewLine(e);
				}),
				(D.prototype.renderElementNode = function (e) {
					'openTag' === e.type
						? (this.addOuterNewLine(e),
							this.generateOpenTagString(e),
							e.selfClose ? this.addOuterNewLine(e) : this.addInnerNewLine(e))
						: (this.addInnerNewLine(e), this.generateCloseTagString(e), this.addOuterNewLine(e));
				});
			var Rn = D;
			function D(e) {
				(this.buffer = []),
					(this.options = s(s({}, On), e)),
					(this.convertors = this.createConvertors()),
					delete this.options.convertors;
			}
			var i = $r(956),
				Pn = $r.n(i),
				n = $r(969),
				Bn = $r.n(n),
				r = $r(348),
				Hn = $r.n(r),
				a = $r(349),
				Fn = $r.n(a),
				o = $r(204),
				qn = $r.n(o),
				t = $r(462),
				jn = $r.n(t),
				c = $r(522),
				_n = $r.n(c),
				i = $r(990),
				zn = $r.n(i),
				n = $r(322),
				Un = $r.n(n),
				r = $r(758),
				Vn = $r.n(r),
				a = $r(929),
				$n = $r.n(a),
				o = $r(714),
				Wn = $r.n(o),
				t = ($r(471), '[A-Za-z][A-Za-z0-9-]*'),
				Gn =
					'(?:\\s+[a-zA-Z_:][a-zA-Z0-9:._-]*(?:\\s*=\\s*(?:[^"\'=<>`\\x00-\\x20]+|\'[^\']*\'|"[^"]*"))?)',
				Zn = new RegExp(
					'^' +
						('(?:' + ('<(' + t + ')(' + Gn + ')*\\s*/?>') + '|</([A-Za-z][A-Za-z0-9-]*)\\s*[>])'),
					'i'
				);
			$r(934), $r(391), /Mac/.test(navigator.platform), new RegExp('[&<>"]', 'g');
			function Xn(e, t) {
				return -1 !== e.indexOf(t);
			}
			var Kn = ['rel', 'target', 'hreflang', 'type'];
			function Qn(e) {
				return 'object' == typeof e && null !== e;
			}
			function Yn(e, t) {
				var n = h({}, e);
				return (
					e &&
						t &&
						Object.keys(t).forEach(function (e) {
							Qn(n[e])
								? Array.isArray(t[e])
									? (n[e] = Jn(t[e]))
									: n.hasOwnProperty(e)
										? (n[e] = Yn(n[e], t[e]))
										: (n[e] = er(t[e]))
								: (n[e] = t[e]);
						}),
					n
				);
			}
			function Jn(e) {
				return e.map(function (e) {
					return Qn(e) ? (Array.isArray(e) ? Jn : er)(e) : e;
				});
			}
			function er(n) {
				var e = Object.keys(n);
				return e.length
					? e.reduce(function (e, t) {
							return Qn(n[t]) ? (e[t] = (Array.isArray(n[t]) ? Jn : er)(n[t])) : (e[t] = n[t]), e;
						}, {})
					: n;
			}
			function tr(e, t) {
				return t < e ? [t, e] : [e, t];
			}
			var nr = 'toastui-editor-';
			function rr() {
				for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
				for (var n = [], r = 0, o = e; r < o.length; r++) {
					var i = o[r],
						a = void 0;
					(a = Array.isArray(i) ? (i[0] ? i[1] : null) : i) && n.push(nr + a);
				}
				return n.join(' ');
			}
			function or(e) {
				e.parentNode && e.parentNode.removeChild(e);
			}
			function ir(e, t, n) {
				((n = $n()(n) ? !Wn()(e, t) : n) ? qn : jn)()(e, t);
			}
			var c = $r(294),
				ar = $r.n(c);
			var sr = {},
				lr = /\$\$widget\d+\s/;
			function cr(e) {
				var t,
					n = e.search(lr);
				return (
					-1 !== n &&
						((t = e.substring(n).replace(lr, '').replace('$$', '')),
						(e = e.substring(0, n)),
						(e += cr(t))),
					e
				);
			}
			function ur(e) {
				for (var t, n = '', r = e.walker(); (t = r.next()); ) {
					var o = t.node;
					t.entering &&
						(o !== e && 'text' !== o.type
							? ((n += (function (e) {
									var t = e.firstChild.literal;
									switch (e.type) {
										case 'emph':
											return '*' + t + '*';
										case 'strong':
											return '**' + t + '**';
										case 'strike':
											return '~~' + t + '~~';
										case 'code':
											return '`' + t + '`';
										case 'link':
										case 'image':
											var n = e.destination,
												r = e.title;
											return (
												('link' === e.type ? '' : '!') +
												'[' +
												t +
												'](' +
												n +
												(r ? ' "' + r + '"' : '') +
												')'
											);
										default:
											return null;
									}
								})(o)),
								r.resumeAt(e, !1),
								r.next())
							: 'text' === o.type && (n += o.literal));
				}
				return n;
			}
			var i = $r(368),
				pr = $r.n(i),
				dr = ['iframe', 'embed'],
				fr = [];
			function hr(e, t) {
				return pr().sanitize(
					e,
					h(
						{
							ADD_TAGS: fr,
							ADD_ATTR: ['rel', 'target', 'hreflang', 'type'],
							FORBID_TAGS: [
								'input',
								'script',
								'textarea',
								'form',
								'button',
								'select',
								'meta',
								'style',
								'link',
								'title',
								'object',
								'base'
							]
						},
						t
					)
				);
			}
			var mr = /^\s*<\s*\//,
				gr = {
					paragraph: function (e, t) {
						var n = t.entering,
							r = t.origin;
						return t.options.nodeId
							? { type: n ? 'openTag' : 'closeTag', outerNewLine: !0, tagName: 'p' }
							: r();
					},
					softbreak: function (e) {
						return {
							type: 'html',
							content:
								e.prev && 'htmlInline' === e.prev.type && /<br ?\/?>/.test(e.prev.literal)
									? '\n'
									: '<br>\n'
						};
					},
					item: function (e, t) {
						var n;
						return t.entering
							? ((t = {}),
								(n = []),
								e.listData.task &&
									((t['data-task'] = ''), n.push('task-list-item'), e.listData.checked) &&
									(n.push('checked'), (t['data-task-checked'] = '')),
								{ type: 'openTag', tagName: 'li', classNames: n, attributes: t, outerNewLine: !0 })
							: { type: 'closeTag', tagName: 'li', outerNewLine: !0 };
					},
					code: function (e) {
						return [
							{
								type: 'openTag',
								tagName: 'code',
								attributes: { 'data-backticks': String(e.tickCount) }
							},
							{ type: 'text', content: e.literal },
							{ type: 'closeTag', tagName: 'code' }
						];
					},
					codeBlock: function (e) {
						var t = e.fenceLength,
							n = e.info,
							n = n ? n.split(/\s+/) : [],
							r = [],
							o = {};
						return (
							3 < t && (o['data-backticks'] = t),
							0 < n.length &&
								0 < n[0].length &&
								((t = n[0]), r.push('lang-' + t), (o['data-language'] = t)),
							[
								{ type: 'openTag', tagName: 'pre', classNames: r },
								{ type: 'openTag', tagName: 'code', attributes: o },
								{ type: 'text', content: e.literal },
								{ type: 'closeTag', tagName: 'code' },
								{ type: 'closeTag', tagName: 'pre' }
							]
						);
					},
					customInline: function (e, t) {
						var n = t.origin,
							r = t.entering,
							t = t.skipChildren,
							o = e.info;
						return -1 !== o.indexOf('widget') && r
							? (t(),
								(r = ur(e)),
								(t = r),
								(r = (e = sr[(e = o)]).rule),
								(e = e.toDOM),
								(r = cr(t).match(r)),
								[
									{ type: 'openTag', tagName: 'span', classNames: ['tui-widget'] },
									{ type: 'html', content: e((t = r ? r[0] : t)).outerHTML },
									{ type: 'closeTag', tagName: 'span' }
								])
							: n();
					}
				};
			function vr(r, t) {
				var n = h({}, gr);
				return (
					r &&
						(n.link = function (e, t) {
							var n = t.entering,
								t = (0, t.origin)();
							return n && (t.attributes = h(h({}, t.attributes), r)), t;
						}),
					t &&
						Object.keys(t).forEach(function (e) {
							var r = n[e],
								s = t[e];
							r && ar()(s)
								? (n[e] = function (e, t) {
										var n = h({}, t);
										return (
											(n.origin = function () {
												return r(e, t);
											}),
											s(e, n)
										);
									})
								: Xn(['htmlBlock', 'htmlInline'], e) && !ar()(s)
									? (n[e] = function (e, t) {
											var n = e.literal.match(Zn);
											if (n) {
												var r,
													o = n[0],
													i = n[1],
													n = n[3],
													i = (i || n).toLowerCase(),
													n = s[i],
													a = e.literal
														.replace(
															new RegExp('(<\\s*' + i + '[^>]*>)|(</' + i + '\\s*[>])', 'ig'),
															''
														)
														.trim();
												if (n)
													return (
														((r = h({}, e)).attrs = (o = (o = (o = o).match(Zn)[0]).match(
															new RegExp(Gn, 'g')
														))
															? o.reduce(function (e, t) {
																	var t = t.trim().split('='),
																		n = t[0],
																		t = t.slice(1);
																	return (
																		t.length && (e[n] = t.join('=').replace(/'|"/g, '').trim()), e
																	);
																}, {})
															: {}),
														(r.childrenHTML = a),
														(r.type = i),
														(t.entering = !mr.test(e.literal)),
														n(r, t)
													);
											}
											return t.origin();
										})
									: (n[e] = s);
						}),
					n
				);
			}
			var yr = ['UL', 'OL', 'BLOCKQUOTE'];
			function br(e, t) {
				for (var n = t, r = null; n; ) {
					var o = n.firstElementChild;
					if (!o) break;
					(r = n),
						(n = (function e(t, n, r) {
							if (t && n > r + t.offsetTop) return e(t.nextElementSibling, n, r) || t;
							return null;
						})(
							o,
							e,
							(function (e, t) {
								for (
									var n = 0;
									e &&
									e !== t &&
									(Xn(yr, e.tagName) || (n += e.offsetTop), e.offsetParent !== t.offsetParent);

								)
									e = e.parentElement;
								return n;
							})(n, t)
						));
				}
				var i = n || r;
				return i === t ? null : i;
			}
			var wr = {};
			function kr(e) {
				e &&
					(delete wr[Number(e.getAttribute('data-nodeid'))],
					zn()(e.children).forEach(function (e) {
						kr(e);
					}));
			}
			var xr = rr('md-preview-highlight');
			function S(e, t) {
				var n = document.createElement('div'),
					n =
						((this.el = n),
						(this.eventEmitter = e),
						(this.isViewer = !!t.isViewer),
						(this.el.className = rr('md-preview')),
						t.linkAttributes),
					e = t.customHTMLRenderer,
					r = t.sanitizer,
					t = t.highlight,
					t = void 0 !== t && t;
				(this.renderer = new Rn({ gfm: !0, nodeId: !0, convertors: vr(n, e) })),
					(this.cursorNodeId = null),
					(this.sanitizer = r),
					this.initEvent(t),
					this.initContentSection(),
					this.isViewer && (this.previewContent.style.overflowWrap = 'break-word');
			}
			(S.prototype.initContentSection = function () {
				var e, t, n;
				(this.previewContent =
					((e = '<div class="' + rr('contents') + '"></div>'),
					(n = document.createElement('div')),
					Vn()(e) ? (n.innerHTML = e) : n.appendChild(e),
					(e = n.firstChild),
					t && t.appendChild(e),
					e)),
					this.isViewer || this.el.appendChild(this.previewContent);
			}),
				(S.prototype.toggleActive = function (e) {
					ir(this.el, 'active', e);
				}),
				(S.prototype.initEvent = function (e) {
					var n = this;
					this.eventEmitter.listen('updatePreview', this.update.bind(this)),
						this.isViewer ||
							(e &&
								(this.eventEmitter.listen('changeToolbarState', function (e) {
									var t = e.mdNode,
										e = e.cursorPos;
									n.updateCursorNode(t, e);
								}),
								this.eventEmitter.listen('blur', function () {
									n.removeHighlight();
								})),
							Hn()(this.el, 'scroll', function (e) {
								n.eventEmitter.emit('scroll', 'preview', br(e.target.scrollTop, n.previewContent));
							}),
							this.eventEmitter.listen('changePreviewTabPreview', function () {
								return n.toggleActive(!0);
							}),
							this.eventEmitter.listen('changePreviewTabWrite', function () {
								return n.toggleActive(!1);
							}));
				}),
				(S.prototype.removeHighlight = function () {
					var e;
					this.cursorNodeId && (e = this.getElementByNodeId(this.cursorNodeId)) && jn()(e, xr);
				}),
				(S.prototype.updateCursorNode = function (e, t) {
					e &&
						('tableRow' ===
						(e = (function (e, t, n) {
							for (e = (n = void 0 === n ? !0 : n) ? e : e.parent; e && 'document' !== e.type; ) {
								if (t(e)) return e;
								e = e.parent;
							}
							return null;
						})(e, function (e) {
							switch (e.type) {
								case 'code':
								case 'text':
								case 'emph':
								case 'strong':
								case 'strike':
								case 'link':
								case 'image':
								case 'htmlInline':
								case 'linebreak':
								case 'softbreak':
								case 'customInline':
									return !1;
								default:
									return !void 0;
							}
							return !0;
						})).type
							? (e = (function (e, t) {
									for (var n = e.firstChild; n && n.next && !(n.next.sourcepos[0][1] > t + 1); )
										n = n.next;
									return n;
								})(e, t[1]))
							: 'tableBody' === e.type && (e = null));
					var n,
						t = e ? e.id : null;
					this.cursorNodeId !== t &&
						((e = this.getElementByNodeId(this.cursorNodeId)),
						(n = this.getElementByNodeId(t)),
						e && jn()(e, xr),
						n && qn()(n, xr),
						(this.cursorNodeId = t));
				}),
				(S.prototype.getElementByNodeId = function (e) {
					return e ? this.previewContent.querySelector('[data-nodeid="' + e + '"]') : null;
				}),
				(S.prototype.update = function (e) {
					var t = this;
					e.forEach(function (e) {
						return t.replaceRangeNodes(e);
					}),
						this.eventEmitter.emit('afterPreviewRender', this);
				}),
				(S.prototype.replaceRangeNodes = function (e) {
					var t = this,
						n = e.nodes,
						e = e.removedNodeRange,
						r = this.previewContent,
						n = this.eventEmitter.emitReduce(
							'beforePreviewRender',
							this.sanitizer(
								n
									.map(function (e) {
										return t.renderer.render(e);
									})
									.join('')
							)
						);
					if (e) {
						var e = e.id,
							o = e[0],
							e = e[1],
							o = this.getElementByNodeId(o),
							i = this.getElementByNodeId(e);
						if (o) {
							o.insertAdjacentHTML('beforebegin', n);
							for (var a = o; a && a !== i; ) {
								var s = a.nextElementSibling;
								or(a), kr(a), (a = s);
							}
							null != a && a.parentNode && (or(a), kr(a));
						}
					} else r.insertAdjacentHTML('afterbegin', n);
				}),
				(S.prototype.getRenderer = function () {
					return this.renderer;
				}),
				(S.prototype.destroy = function () {
					Fn()(this.el, 'scroll'), (this.el = null);
				}),
				(S.prototype.getElement = function () {
					return this.el;
				}),
				(S.prototype.getHTML = function () {
					return this.previewContent.innerHTML
						.replace(/<img class="ProseMirror-separator" alt="">/g, '')
						.replace(/ class="ProseMirror-trailingBreak"/g, '');
				}),
				(S.prototype.setHTML = function (e) {
					this.previewContent.innerHTML = e;
				}),
				(S.prototype.setHeight = function (e) {
					_n()(this.el, { height: e + 'px' });
				}),
				(S.prototype.setMinHeight = function (e) {
					_n()(this.el, { minHeight: e + 'px' });
				});
			var Cr = S,
				Tr = $r(814),
				Er = $r(479),
				Lr = $r(311),
				Mr = $r(481),
				Nr = $r(43),
				n = $r(928),
				Ar = $r.n(n);
			function O() {
				(this.keys = []), (this.values = []);
			}
			(O.prototype.getKeyIndex = function (e) {
				return Ar()(e, this.keys);
			}),
				(O.prototype.get = function (e) {
					return this.values[this.getKeyIndex(e)];
				}),
				(O.prototype.set = function (e, t) {
					var n = this.getKeyIndex(e);
					return -1 < n ? (this.values[n] = t) : (this.keys.push(e), this.values.push(t)), this;
				}),
				(O.prototype.has = function (e) {
					return -1 < this.getKeyIndex(e);
				}),
				(O.prototype.delete = function (e) {
					e = this.getKeyIndex(e);
					return -1 < e && (this.keys.splice(e, 1), this.values.splice(e, 1), !0);
				}),
				(O.prototype.forEach = function (n, r) {
					var o = this;
					void 0 === r && (r = this),
						this.values.forEach(function (e, t) {
							e && o.keys[t] && n.call(r, e, o.keys[t], o);
						});
				}),
				(O.prototype.clear = function () {
					(this.keys = []), (this.values = []);
				});
			var Dr = O,
				Sr = 'en-US';
			function Or() {
				(this.code = Sr), (this.langs = new Dr());
			}
			(Or.prototype.setCode = function (e) {
				this.code = e || Sr;
			}),
				(Or.prototype.setLanguage = function (e, n) {
					var r = this;
					(e = [].concat(e)).forEach(function (e) {
						var t;
						r.langs.has(e) ? ((t = r.langs.get(e)), r.langs.set(e, Bn()(t, n))) : r.langs.set(e, n);
					});
				}),
				(Or.prototype.get = function (e, t) {
					t = t || this.code;
					var n = (this.langs.get(t) || this.langs.get(Sr))[e];
					if (n) return n;
					throw new Error('There is no text key "' + e + '" in ' + t);
				});
			var Ir = new Or();
			function Rr(e, t) {
				for (var n = e.depth; n; ) {
					var r = e.node(n);
					if (t(r, n)) return { node: r, depth: n, offset: 0 < n ? e.before(n) : 0 };
					--n;
				}
				return null;
			}
			var Pr = new Map(),
				Br =
					((I.create = function (e) {
						var t,
							n,
							r,
							o,
							i,
							a = Rr(e, function (e) {
								return 'table' === e.type.name;
							});
						return a
							? ((t = a.node),
								(r = a.depth),
								(a = a.offset),
								(null == (i = Pr.get(t)) ? void 0 : i.tableStartPos) === a + 1
									? i
									: ((n = []),
										(a = e.start(r)),
										(i = t.child(0)),
										(e = t.child(1)),
										(r = Hr(i, a)),
										(o = Hr(e, a + i.nodeSize)),
										i.forEach(function (e) {
											return n.push(e);
										}),
										e.forEach(function (e) {
											return n.push(e);
										}),
										(i = new I(t, n, a, r.concat(o))),
										Pr.set(t, i),
										i))
							: null;
					}),
					Object.defineProperty(I.prototype, 'totalRowCount', {
						get: function () {
							return this.rowInfo.length;
						},
						enumerable: !1,
						configurable: !0
					}),
					Object.defineProperty(I.prototype, 'totalColumnCount', {
						get: function () {
							return this.rowInfo[0].length;
						},
						enumerable: !1,
						configurable: !0
					}),
					Object.defineProperty(I.prototype, 'tableStartOffset', {
						get: function () {
							return this.tableStartPos;
						},
						enumerable: !1,
						configurable: !0
					}),
					Object.defineProperty(I.prototype, 'tableEndOffset', {
						get: function () {
							return this.tableStartPos + this.table.nodeSize - 1;
						},
						enumerable: !1,
						configurable: !0
					}),
					(I.prototype.getCellInfo = function (e, t) {
						return this.rowInfo[e][t];
					}),
					(I.prototype.posAt = function (e, t) {
						for (var n = 0, r = this.tableStartPos; ; n += 1) {
							var o = r + this.tableRows[n].nodeSize;
							if (n === e) {
								for (var i = t; i < this.totalColumnCount && this.rowInfo[n][i].offset < r; )
									i += 1;
								return i === this.totalColumnCount ? o : this.rowInfo[n][i].offset;
							}
							r = o;
						}
					}),
					(I.prototype.getNodeAndPos = function (e, t) {
						e = this.rowInfo[e][t];
						return { node: this.table.nodeAt(e.offset - this.tableStartOffset), pos: e.offset };
					}),
					(I.prototype.extendedRowspan = function (e, t) {
						return !1;
					}),
					(I.prototype.extendedColspan = function (e, t) {
						return !1;
					}),
					(I.prototype.getRowspanCount = function (e, t) {
						return 0;
					}),
					(I.prototype.getColspanCount = function (e, t) {
						return 0;
					}),
					(I.prototype.decreaseColspanCount = function (e, t) {
						return 0;
					}),
					(I.prototype.decreaseRowspanCount = function (e, t) {
						return 0;
					}),
					(I.prototype.getColspanStartInfo = function (e, t) {
						return null;
					}),
					(I.prototype.getRowspanStartInfo = function (e, t) {
						return null;
					}),
					(I.prototype.getCellStartOffset = function (e, t) {
						var n = this.rowInfo[e][t].offset;
						return this.extendedRowspan(e, t) ? this.posAt(e, t) : n;
					}),
					(I.prototype.getCellEndOffset = function (e, t) {
						var n = this.rowInfo[e][t],
							r = n.offset,
							n = n.nodeSize;
						return this.extendedRowspan(e, t) ? this.posAt(e, t) : r + n;
					}),
					(I.prototype.getCellIndex = function (e) {
						for (var t = 0; t < this.totalRowCount; t += 1)
							for (var n = this.rowInfo[t], r = 0; r < this.totalColumnCount; r += 1)
								if (n[r].offset + 1 > e.pos) return [t, r];
						return [0, 0];
					}),
					(I.prototype.getRectOffsets = function (e, t) {
						void 0 === t && (t = e), e.pos > t.pos && ((e = (n = [t, e])[0]), (t = n[1]));
						var n = this.getCellIndex(e),
							e = n[0],
							n = n[1],
							t = this.getCellIndex(t),
							r = t[0],
							t = t[1],
							o = tr(e, r),
							e = o[0],
							r = o[1],
							o = tr(n, t),
							n = o[0],
							t = o[1];
						return this.getSpannedOffsets({
							startRowIdx: e,
							startColIdx: n,
							endRowIdx: r,
							endColIdx: t
						});
					}),
					(I.prototype.getSpannedOffsets = function (e) {
						return e;
					}),
					I);
			function I(e, t, n, r) {
				(this.table = e), (this.tableRows = t), (this.tableStartPos = n), (this.rowInfo = r);
			}
			var Hr = function (e, i) {
				var t = [];
				return (
					e.forEach(function (e, r) {
						var o = { rowspanMap: {}, colspanMap: {}, length: 0 };
						e.forEach(function (e, t) {
							for (var e = e.nodeSize, n = 0; o[n]; ) n += 1;
							(o[n] = { offset: i + r + t + 2, nodeSize: e }), (o.length += 1);
						}),
							t.push(o);
					}),
					t
				);
			};
			function Fr(e, t) {
				return (
					(function t(n, r) {
						void 0 === r && (r = {}),
							Object.keys(r).forEach(function (e) {
								!n.hasOwnProperty(e) || 'object' != typeof n[e] || Array.isArray(r[e])
									? (n[e] = r[e])
									: t(n[e], r[e]);
							});
					})(Br.prototype, e),
					(Hr = t),
					Br
				);
			}
			function qr(e) {
				var t = e.plugins,
					p = e.eventEmitter,
					d = e.usageStatistics,
					f = e.instance;
				return (
					p.listen('mixinTableOffsetMapPrototype', Fr),
					(null != t ? t : []).reduce(
						function (e, t) {
							(n = (t = { plugin: t, eventEmitter: p, usageStatistics: d, instance: f }).plugin),
								(t = {
									eventEmitter: t.eventEmitter,
									usageStatistics: t.usageStatistics,
									instance: t.instance,
									pmState: {
										Plugin: Tr.Plugin,
										PluginKey: Tr.PluginKey,
										Selection: Tr.Selection,
										TextSelection: Tr.TextSelection
									},
									pmView: { Decoration: Lr.Decoration, DecorationSet: Lr.DecorationSet },
									pmModel: { Fragment: Nr.Fragment },
									pmRules: {
										InputRule: Er.InputRule,
										inputRules: Er.inputRules,
										undoInputRule: Er.undoInputRule
									},
									pmKeymap: { keymap: Mr.keymap },
									i18n: Ir
								});
							var n,
								r,
								o,
								i,
								a,
								s,
								l,
								c,
								u = Un()(n) ? (0, n[0])(t, void 0 === (u = n[1]) ? {} : u) : n(t);
							if (u)
								return (
									(n = u.markdownParsers),
									(t = u.toHTMLRenderers),
									(r = u.toMarkdownRenderers),
									(o = u.markdownPlugins),
									(i = u.wysiwygPlugins),
									(a = u.wysiwygNodeViews),
									(s = u.markdownCommands),
									(l = u.wysiwygCommands),
									(c = u.toolbarItems),
									t && (e.toHTMLRenderers = Yn(e.toHTMLRenderers, t)),
									r && (e.toMarkdownRenderers = Yn(e.toMarkdownRenderers, r)),
									o && (e.mdPlugins = e.mdPlugins.concat(o)),
									i && (e.wwPlugins = e.wwPlugins.concat(i)),
									a && (e.wwNodeViews = h(h({}, e.wwNodeViews), a)),
									s && (e.mdCommands = h(h({}, e.mdCommands), s)),
									l && (e.wwCommands = h(h({}, e.wwCommands), l)),
									c && (e.toolbarItems = e.toolbarItems.concat(c)),
									n && (e.markdownParsers = h(h({}, e.markdownParsers), n)),
									e
								);
							throw new Error('The return value of the executed plugin is empty.');
						},
						{
							toHTMLRenderers: {},
							toMarkdownRenderers: {},
							mdPlugins: [],
							wwPlugins: [],
							wwNodeViews: {},
							mdCommands: {},
							wwCommands: {},
							toolbarItems: [],
							markdownParsers: {}
						}
					)
				);
			}
			var r = $r(404),
				jr = $r.n(r),
				_r = [
					'afterPreviewRender',
					'updatePreview',
					'changeMode',
					'needChangeMode',
					'command',
					'changePreviewStyle',
					'changePreviewTabPreview',
					'changePreviewTabWrite',
					'scroll',
					'contextmenu',
					'show',
					'hide',
					'changeLanguage',
					'changeToolbarState',
					'toggleScrollSync',
					'mixinTableOffsetMapPrototype',
					'setFocusedNode',
					'removePopupWidget',
					'query',
					'openPopup',
					'closePopup',
					'addImageBlobHook',
					'beforePreviewRender',
					'beforeConvertWysiwygToMarkdown',
					'load',
					'loadUI',
					'change',
					'caretChange',
					'destroy',
					'focus',
					'blur',
					'keydown',
					'keyup'
				];
			function R() {
				var t = this;
				(this.events = new Dr()),
					(this.eventTypes = _r.reduce(function (e, t) {
						return h(h({}, e), { type: t });
					}, {})),
					(this.hold = !1),
					_r.forEach(function (e) {
						t.addEventType(e);
					});
			}
			(R.prototype.listen = function (e, t) {
				var e = this.getTypeInfo(e),
					n = this.events.get(e.type) || [];
				if (!this.hasEventType(e.type)) throw new Error('There is no event type ' + e.type);
				e.namespace && (t.namespace = e.namespace), n.push(t), this.events.set(e.type, n);
			}),
				(R.prototype.emit = function (e) {
					for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
					var e = this.getTypeInfo(e),
						e = this.events.get(e.type),
						r = [];
					return (
						!this.hold &&
							e &&
							e.forEach(function (e) {
								e = e.apply(void 0, t);
								$n()(e) || r.push(e);
							}),
						r
					);
				}),
				(R.prototype.emitReduce = function (e, t) {
					for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
					e = this.events.get(e);
					return (
						!this.hold &&
							e &&
							e.forEach(function (e) {
								e = e.apply(void 0, B([t], n));
								jr()(e) || (t = e);
							}),
						t
					);
				}),
				(R.prototype.getTypeInfo = function (e) {
					e = e.split('.');
					return { type: e[0], namespace: e[1] };
				}),
				(R.prototype.hasEventType = function (e) {
					return !$n()(this.eventTypes[this.getTypeInfo(e).type]);
				}),
				(R.prototype.addEventType = function (e) {
					if (this.hasEventType(e)) throw new Error('There is already have event type ' + e);
					this.eventTypes[e] = e;
				}),
				(R.prototype.removeEventHandler = function (e, t) {
					var n = this,
						e = this.getTypeInfo(e),
						r = e.type,
						o = e.namespace;
					r && t
						? this.removeEventHandlerWithHandler(r, t)
						: r && !o
							? this.events.delete(r)
							: !r && o
								? this.events.forEach(function (e, t) {
										n.removeEventHandlerWithTypeInfo(t, o);
									})
								: r && o && this.removeEventHandlerWithTypeInfo(r, o);
				}),
				(R.prototype.removeEventHandlerWithHandler = function (e, t) {
					var n,
						e = this.events.get(e);
					e && ((n = e.indexOf(t)), 0 <= e.indexOf(t)) && e.splice(n, 1);
				}),
				(R.prototype.removeEventHandlerWithTypeInfo = function (e, t) {
					var n = [],
						r = this.events.get(e);
					r &&
						(r.map(function (e) {
							return e.namespace !== t && n.push(e), null;
						}),
						this.events.set(e, n));
				}),
				(R.prototype.getEvents = function () {
					return this.events;
				}),
				(R.prototype.holdEventInvoke = function (e) {
					(this.hold = !0), e(), (this.hold = !1);
				});
			var zr = R;
			function Ur(t) {
				['htmlBlock', 'htmlInline'].forEach(function (e) {
					t[e] &&
						Object.keys(t[e]).forEach(function (e) {
							Xn(dr, (e = e)) && fr.push(e.toLowerCase());
						});
				});
			}
			function P(e) {
				var t,
					n,
					r = this,
					e =
						((this.options = Bn()(
							{
								linkAttributes: null,
								extendedAutolinks: !1,
								customHTMLRenderer: null,
								referenceDefinition: !1,
								customHTMLSanitizer: null,
								frontMatter: !1,
								usageStatistics: !0,
								theme: 'light'
							},
							e
						)),
						(this.eventEmitter = new zr()),
						(t = this.options.linkAttributes)
							? ((n = {}),
								Kn.forEach(function (e) {
									$n()(t[e]) || (n[e] = t[e]);
								}),
								n)
							: null),
					o =
						qr({
							plugins: this.options.plugins,
							eventEmitter: this.eventEmitter,
							usageStatistics: this.options.usageStatistics,
							instance: this
						}) || {},
					i = o.toHTMLRenderers,
					o = o.markdownParsers,
					a = this.options,
					s = a.customHTMLRenderer,
					l = a.extendedAutolinks,
					c = a.referenceDefinition,
					u = a.frontMatter,
					a = a.customHTMLSanitizer,
					e = {
						linkAttributes: e,
						customHTMLRenderer: h(h({}, i), s),
						extendedAutolinks: l,
						referenceDefinition: c,
						frontMatter: u,
						sanitizer: a || hr
					},
					i =
						(Ur(e.customHTMLRenderer),
						this.options.events &&
							Pn()(this.options.events, function (e, t) {
								r.on(t, e);
							}),
						this.options),
					s = i.el,
					a = i.initialValue,
					i = i.theme,
					p = s.innerHTML;
				'light' !== i && s.classList.add(rr(i)),
					(s.innerHTML = ''),
					(this.toastMark = new Mn('', {
						disallowedHtmlBlockTags: ['br', 'img'],
						extendedAutolinks: l,
						referenceDefinition: c,
						disallowDeepHeading: !0,
						frontMatter: u,
						customParser: o
					})),
					(this.preview = new Cr(this.eventEmitter, h(h({}, e), { isViewer: !0 }))),
					Hn()(this.preview.previewContent, 'mousedown', this.toggleTask.bind(this)),
					a ? this.setMarkdown(a) : p && this.preview.setHTML(p),
					s.appendChild(this.preview.previewContent),
					this.eventEmitter.emit('load', this);
			}
			(P.prototype.toggleTask = function (e) {
				var t,
					n,
					r,
					o,
					i,
					a = e.target,
					s = getComputedStyle(a, ':before');
				!a.hasAttribute('data-task-disabled') &&
					a.hasAttribute('data-task') &&
					((s = s),
					(t = e.offsetX),
					(n = e.offsetY),
					(r = parseInt(s.left, 10)),
					(o = parseInt(s.top, 10)),
					(i = parseInt(s.width, 10) + parseInt(s.paddingLeft, 10) + parseInt(s.paddingRight, 10)),
					(s = parseInt(s.height, 10) + parseInt(s.paddingTop, 10) + parseInt(s.paddingBottom, 10)),
					r <= t) &&
					t <= r + i &&
					o <= n &&
					n <= o + s &&
					(ir(a, 'checked'), this.eventEmitter.emit('change', { source: 'viewer', date: e }));
			}),
				(P.prototype.setMarkdown = function (e) {
					var t = this.toastMark.getLineTexts(),
						t = [t.length, t[t.length - 1].length + 1],
						t = this.toastMark.editMarkdown([1, 1], t, e || '');
					this.eventEmitter.emit('updatePreview', t);
				}),
				(P.prototype.on = function (e, t) {
					this.eventEmitter.listen(e, t);
				}),
				(P.prototype.off = function (e) {
					this.eventEmitter.removeEventHandler(e);
				}),
				(P.prototype.addHook = function (e, t) {
					this.eventEmitter.removeEventHandler(e), this.eventEmitter.listen(e, t);
				}),
				(P.prototype.destroy = function () {
					Fn()(this.preview.el, 'mousedown', this.toggleTask.bind(this)),
						this.preview.destroy(),
						this.eventEmitter.emit('destroy');
				}),
				(P.prototype.isViewer = function () {
					return !0;
				}),
				(P.prototype.isMarkdownMode = function () {
					return !1;
				}),
				(P.prototype.isWysiwygMode = function () {
					return !1;
				});
			var Vr = P;
		})(),
		Wr.default
	);
	function $r(e) {
		var t = s[e];
		return (
			void 0 !== t || ((t = s[e] = { exports: {} }), a[e].call(t.exports, t, t.exports, $r)),
			t.exports
		);
	}
	var a, s, Wr;
}),
	(function (e, t) {
		'object' == typeof exports && 'object' == typeof module
			? (module.exports = t(
					require('prosemirror-commands'),
					require('prosemirror-history'),
					require('prosemirror-inputrules'),
					require('prosemirror-keymap'),
					require('prosemirror-model'),
					require('prosemirror-state'),
					require('prosemirror-transform'),
					require('prosemirror-view')
				))
			: 'function' == typeof define && define.amd
				? define(
						[
							'prosemirror-commands',
							'prosemirror-history',
							'prosemirror-inputrules',
							'prosemirror-keymap',
							'prosemirror-model',
							'prosemirror-state',
							'prosemirror-transform',
							'prosemirror-view'
						],
						t
					)
				: 'object' == typeof exports
					? (exports.toastui = t(
							require('prosemirror-commands'),
							require('prosemirror-history'),
							require('prosemirror-inputrules'),
							require('prosemirror-keymap'),
							require('prosemirror-model'),
							require('prosemirror-state'),
							require('prosemirror-transform'),
							require('prosemirror-view')
						))
					: ((e.toastui = e.toastui || {}),
						(e.toastui.Editor = t(
							e[void 0],
							e[void 0],
							e[void 0],
							e[void 0],
							e[void 0],
							e[void 0],
							e[void 0],
							e[void 0]
						)));
	})(self, function (t, n, r, o, i, a, s, l) {
		return (
			(c = {
				368: function (e) {
					e.exports = (function () {
						'use strict';
						function r(e) {
							if (Array.isArray(e)) {
								for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
								return n;
							} else return Array.from(e);
						}
						var o = Object.hasOwnProperty,
							i = Object.setPrototypeOf,
							a = Object.isFrozen,
							s = Object.getPrototypeOf,
							l = Object.getOwnPropertyDescriptor,
							qe = Object.freeze,
							e = Object.seal,
							c = Object.create,
							t = typeof Reflect !== 'undefined' && Reflect,
							u = t.apply,
							p = t.construct;
						if (!u)
							u = function e(t, n, r) {
								return t.apply(n, r);
							};
						if (!qe)
							qe = function e(t) {
								return t;
							};
						if (!e)
							e = function e(t) {
								return t;
							};
						if (!p)
							p = function e(t, n) {
								return new (Function.prototype.bind.apply(t, [null].concat(r(n))))();
							};
						var je = d(Array.prototype.forEach),
							_e = d(Array.prototype.pop),
							ze = d(Array.prototype.push),
							Ue = d(String.prototype.toLowerCase),
							Ve = d(String.prototype.match),
							$e = d(String.prototype.replace),
							ct = d(String.prototype.indexOf),
							ut = d(String.prototype.trim),
							We = d(RegExp.prototype.test),
							Ge = n(TypeError);
						function d(o) {
							return function (e) {
								for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
									n[r - 1] = arguments[r];
								return u(o, e, n);
							};
						}
						function n(r) {
							return function () {
								for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
								return p(r, t);
							};
						}
						function Ze(e, t) {
							if (i) i(e, null);
							var n = t.length;
							while (n--) {
								var r = t[n];
								if (typeof r === 'string') {
									var o = Ue(r);
									if (o !== r) {
										if (!a(t)) t[n] = o;
										r = o;
									}
								}
								e[r] = true;
							}
							return e;
						}
						function Xe(e) {
							var t = c(null);
							var n = void 0;
							for (n in e) if (u(o, e, [n])) t[n] = e[n];
							return t;
						}
						function Ke(e, t) {
							while (e !== null) {
								var n = l(e, t);
								if (n) {
									if (n.get) return d(n.get);
									if (typeof n.value === 'function') return d(n.value);
								}
								e = s(e);
							}
							function r(e) {
								console.warn('fallback value for', e);
								return null;
							}
							return r;
						}
						var Qe = qe([
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
							Ye = qe([
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
							Je = qe([
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
							pt = qe([
								'animate',
								'color-profile',
								'cursor',
								'discard',
								'fedropshadow',
								'feimage',
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
							et = qe([
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
							dt = qe([
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
							tt = qe(['#text']),
							nt = qe([
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
							rt = qe([
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
							ot = qe([
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
							it = qe(['xlink:href', 'xml:id', 'xlink:title', 'xml:space', 'xmlns:xlink']),
							ft = e(/\{\{[\s\S]*|[\s\S]*\}\}/gm),
							ht = e(/<%[\s\S]*|[\s\S]*%>/gm),
							mt = e(/^data-[\-\w.\u00B7-\uFFFF]/),
							gt = e(/^aria-[\-\w]+$/),
							vt = e(
								/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
							),
							yt = e(/^(?:\w+script|data):/i),
							bt = e(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
							at =
								typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
									? function (e) {
											return typeof e;
										}
									: function (e) {
											return e &&
												typeof Symbol === 'function' &&
												e.constructor === Symbol &&
												e !== Symbol.prototype
												? 'symbol'
												: typeof e;
										};
						function st(e) {
							if (Array.isArray(e)) {
								for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
								return n;
							} else return Array.from(e);
						}
						var wt = function e() {
								return typeof window === 'undefined' ? null : window;
							},
							kt = function e(t, n) {
								if (
									(typeof t === 'undefined' ? 'undefined' : at(t)) !== 'object' ||
									typeof t.createPolicy !== 'function'
								)
									return null;
								var r = null;
								var o = 'data-tt-policy-suffix';
								if (n.currentScript && n.currentScript.hasAttribute(o))
									r = n.currentScript.getAttribute(o);
								var i = 'dompurify' + (r ? '#' + r : '');
								try {
									return t.createPolicy(i, {
										createHTML: function e(t) {
											return t;
										}
									});
								} catch (e) {
									console.warn('TrustedTypes policy ' + i + ' could not be created.');
									return null;
								}
							},
							f;
						function lt() {
							var c = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : wt();
							var d = function e(t) {
								return lt(t);
							};
							d.version = '2.3.3';
							d.removed = [];
							if (!c || !c.document || c.document.nodeType !== 9) {
								d.isSupported = false;
								return d;
							}
							var u = c.document;
							var s = c.document;
							var P = c.DocumentFragment,
								B = c.HTMLTemplateElement,
								p = c.Node,
								H = c.Element,
								n = c.NodeFilter,
								F = c.NamedNodeMap,
								q = F === undefined ? c.NamedNodeMap || c.MozNamedAttrMap : F,
								j = c.Text,
								_ = c.Comment,
								z = c.DOMParser,
								U = c.trustedTypes;
							var e = H.prototype;
							var V = Ke(e, 'cloneNode');
							var $ = Ke(e, 'nextSibling');
							var W = Ke(e, 'childNodes');
							var l = Ke(e, 'parentNode');
							if (typeof B === 'function') {
								var t = s.createElement('template');
								if (t.content && t.content.ownerDocument) s = t.content.ownerDocument;
							}
							var f = kt(U, u);
							var G = f && C ? f.createHTML('') : '';
							var r = s,
								h = r.implementation,
								Z = r.createNodeIterator,
								X = r.createDocumentFragment,
								K = r.getElementsByTagName;
							var Q = u.importNode;
							var Y = {};
							try {
								Y = Xe(s).documentMode ? s.documentMode : {};
							} catch (e) {}
							var o = {};
							d.isSupported =
								typeof l === 'function' &&
								h &&
								typeof h.createHTMLDocument !== 'undefined' &&
								Y !== 9;
							var m = ft,
								g = ht,
								J = mt,
								ee = gt,
								te = yt,
								ne = bt;
							var i = vt;
							var v = null;
							var re = Ze({}, [].concat(st(Qe), st(Ye), st(Je), st(et), st(tt)));
							var y = null;
							var oe = Ze({}, [].concat(st(nt), st(rt), st(ot), st(it)));
							var ie = null;
							var ae = null;
							var se = true;
							var le = true;
							var ce = false;
							var b = false;
							var w = false;
							var ue = false;
							var pe = false;
							var k = false;
							var x = false;
							var de = true;
							var C = false;
							var fe = true;
							var he = true;
							var T = false;
							var a = {};
							var E = null;
							var me = Ze({}, [
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
							]);
							var ge = null;
							var ve = Ze({}, ['audio', 'video', 'img', 'source', 'image', 'track']);
							var ye = null;
							var be = Ze({}, [
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
							]);
							var we = 'http://www.w3.org/1998/Math/MathML';
							var ke = 'http://www.w3.org/2000/svg';
							var L = 'http://www.w3.org/1999/xhtml';
							var M = L;
							var xe = false;
							var N = void 0;
							var Ce = ['application/xhtml+xml', 'text/html'];
							var Te = 'text/html';
							var A = void 0;
							var D = null;
							var Ee = s.createElement('form');
							var Le = function e(t) {
								if (D && D === t) return;
								if (!t || (typeof t === 'undefined' ? 'undefined' : at(t)) !== 'object') t = {};
								t = Xe(t);
								v = 'ALLOWED_TAGS' in t ? Ze({}, t.ALLOWED_TAGS) : re;
								y = 'ALLOWED_ATTR' in t ? Ze({}, t.ALLOWED_ATTR) : oe;
								ye = 'ADD_URI_SAFE_ATTR' in t ? Ze(Xe(be), t.ADD_URI_SAFE_ATTR) : be;
								ge = 'ADD_DATA_URI_TAGS' in t ? Ze(Xe(ve), t.ADD_DATA_URI_TAGS) : ve;
								E = 'FORBID_CONTENTS' in t ? Ze({}, t.FORBID_CONTENTS) : me;
								ie = 'FORBID_TAGS' in t ? Ze({}, t.FORBID_TAGS) : {};
								ae = 'FORBID_ATTR' in t ? Ze({}, t.FORBID_ATTR) : {};
								a = 'USE_PROFILES' in t ? t.USE_PROFILES : false;
								se = t.ALLOW_ARIA_ATTR !== false;
								le = t.ALLOW_DATA_ATTR !== false;
								ce = t.ALLOW_UNKNOWN_PROTOCOLS || false;
								b = t.SAFE_FOR_TEMPLATES || false;
								w = t.WHOLE_DOCUMENT || false;
								k = t.RETURN_DOM || false;
								x = t.RETURN_DOM_FRAGMENT || false;
								de = t.RETURN_DOM_IMPORT !== false;
								C = t.RETURN_TRUSTED_TYPE || false;
								pe = t.FORCE_BODY || false;
								fe = t.SANITIZE_DOM !== false;
								he = t.KEEP_CONTENT !== false;
								T = t.IN_PLACE || false;
								i = t.ALLOWED_URI_REGEXP || i;
								M = t.NAMESPACE || L;
								N = Ce.indexOf(t.PARSER_MEDIA_TYPE) === -1 ? (N = Te) : (N = t.PARSER_MEDIA_TYPE);
								A =
									N === 'application/xhtml+xml'
										? function (e) {
												return e;
											}
										: Ue;
								if (b) le = false;
								if (x) k = true;
								if (a) {
									v = Ze({}, [].concat(st(tt)));
									y = [];
									if (a.html === true) {
										Ze(v, Qe);
										Ze(y, nt);
									}
									if (a.svg === true) {
										Ze(v, Ye);
										Ze(y, rt);
										Ze(y, it);
									}
									if (a.svgFilters === true) {
										Ze(v, Je);
										Ze(y, rt);
										Ze(y, it);
									}
									if (a.mathMl === true) {
										Ze(v, et);
										Ze(y, ot);
										Ze(y, it);
									}
								}
								if (t.ADD_TAGS) {
									if (v === re) v = Xe(v);
									Ze(v, t.ADD_TAGS);
								}
								if (t.ADD_ATTR) {
									if (y === oe) y = Xe(y);
									Ze(y, t.ADD_ATTR);
								}
								if (t.ADD_URI_SAFE_ATTR) Ze(ye, t.ADD_URI_SAFE_ATTR);
								if (t.FORBID_CONTENTS) {
									if (E === me) E = Xe(E);
									Ze(E, t.FORBID_CONTENTS);
								}
								if (he) v['#text'] = true;
								if (w) Ze(v, ['html', 'head', 'body']);
								if (v.table) {
									Ze(v, ['tbody']);
									delete ie.tbody;
								}
								if (qe) qe(t);
								D = t;
							};
							var Me = Ze({}, ['mi', 'mo', 'mn', 'ms', 'mtext']);
							var Ne = Ze({}, ['foreignobject', 'desc', 'title', 'annotation-xml']);
							var S = Ze({}, Ye);
							Ze(S, Je);
							Ze(S, pt);
							var Ae = Ze({}, et);
							Ze(Ae, dt);
							var De = function e(t) {
								var n = l(t);
								if (!n || !n.tagName) n = { namespaceURI: L, tagName: 'template' };
								var r = Ue(t.tagName);
								var o = Ue(n.tagName);
								if (t.namespaceURI === ke) {
									if (n.namespaceURI === L) return r === 'svg';
									if (n.namespaceURI === we)
										return r === 'svg' && (o === 'annotation-xml' || Me[o]);
									return Boolean(S[r]);
								}
								if (t.namespaceURI === we) {
									if (n.namespaceURI === L) return r === 'math';
									if (n.namespaceURI === ke) return r === 'math' && Ne[o];
									return Boolean(Ae[r]);
								}
								if (t.namespaceURI === L) {
									if (n.namespaceURI === ke && !Ne[o]) return false;
									if (n.namespaceURI === we && !Me[o]) return false;
									var i = Ze({}, ['title', 'style', 'font', 'a', 'script']);
									return !Ae[r] && (i[r] || !S[r]);
								}
								return false;
							};
							var O = function e(t) {
								ze(d.removed, { element: t });
								try {
									t.parentNode.removeChild(t);
								} catch (e) {
									try {
										t.outerHTML = G;
									} catch (e) {
										t.remove();
									}
								}
							};
							var Se = function e(t, n) {
								try {
									ze(d.removed, { attribute: n.getAttributeNode(t), from: n });
								} catch (e) {
									ze(d.removed, { attribute: null, from: n });
								}
								n.removeAttribute(t);
								if (t === 'is' && !y[t])
									if (k || x)
										try {
											O(n);
										} catch (e) {}
									else
										try {
											n.setAttribute(t, '');
										} catch (e) {}
							};
							var Oe = function e(t) {
								var n = void 0;
								var r = void 0;
								if (pe) t = '<remove></remove>' + t;
								else {
									var o = Ve(t, /^[\r\n\t ]+/);
									r = o && o[0];
								}
								if (N === 'application/xhtml+xml')
									t =
										'<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' +
										t +
										'</body></html>';
								var i = f ? f.createHTML(t) : t;
								if (M === L)
									try {
										n = new z().parseFromString(i, N);
									} catch (e) {}
								if (!n || !n.documentElement) {
									n = h.createDocument(M, 'template', null);
									try {
										n.documentElement.innerHTML = xe ? '' : i;
									} catch (e) {}
								}
								var a = n.body || n.documentElement;
								if (t && r) a.insertBefore(s.createTextNode(r), a.childNodes[0] || null);
								if (M === L) return K.call(n, w ? 'html' : 'body')[0];
								return w ? n.documentElement : a;
							};
							var Ie = function e(t) {
								return Z.call(
									t.ownerDocument || t,
									t,
									n.SHOW_ELEMENT | n.SHOW_COMMENT | n.SHOW_TEXT,
									null,
									false
								);
							};
							var Re = function e(t) {
								if (t instanceof j || t instanceof _) return false;
								if (
									typeof t.nodeName !== 'string' ||
									typeof t.textContent !== 'string' ||
									typeof t.removeChild !== 'function' ||
									!(t.attributes instanceof q) ||
									typeof t.removeAttribute !== 'function' ||
									typeof t.setAttribute !== 'function' ||
									typeof t.namespaceURI !== 'string' ||
									typeof t.insertBefore !== 'function'
								)
									return true;
								return false;
							};
							var I = function e(t) {
								return (typeof p === 'undefined' ? 'undefined' : at(p)) === 'object'
									? t instanceof p
									: t &&
											(typeof t === 'undefined' ? 'undefined' : at(t)) === 'object' &&
											typeof t.nodeType === 'number' &&
											typeof t.nodeName === 'string';
							};
							var R = function e(t, n, r) {
								if (!o[t]) return;
								je(o[t], function (e) {
									e.call(d, n, r, D);
								});
							};
							var Pe = function e(t) {
								var n = void 0;
								R('beforeSanitizeElements', t, null);
								if (Re(t)) {
									O(t);
									return true;
								}
								if (Ve(t.nodeName, /[\u0080-\uFFFF]/)) {
									O(t);
									return true;
								}
								var r = A(t.nodeName);
								R('uponSanitizeElement', t, { tagName: r, allowedTags: v });
								if (
									!I(t.firstElementChild) &&
									(!I(t.content) || !I(t.content.firstElementChild)) &&
									We(/<[/\w]/g, t.innerHTML) &&
									We(/<[/\w]/g, t.textContent)
								) {
									O(t);
									return true;
								}
								if (r === 'select' && We(/<template/i, t.innerHTML)) {
									O(t);
									return true;
								}
								if (!v[r] || ie[r]) {
									if (he && !E[r]) {
										var o = l(t) || t.parentNode;
										var i = W(t) || t.childNodes;
										if (i && o) {
											var a = i.length;
											for (var s = a - 1; s >= 0; --s) o.insertBefore(V(i[s], true), $(t));
										}
									}
									O(t);
									return true;
								}
								if (t instanceof H && !De(t)) {
									O(t);
									return true;
								}
								if (
									(r === 'noscript' || r === 'noembed') &&
									We(/<\/no(script|embed)/i, t.innerHTML)
								) {
									O(t);
									return true;
								}
								if (b && t.nodeType === 3) {
									n = t.textContent;
									n = $e(n, m, ' ');
									n = $e(n, g, ' ');
									if (t.textContent !== n) {
										ze(d.removed, { element: t.cloneNode() });
										t.textContent = n;
									}
								}
								R('afterSanitizeElements', t, null);
								return false;
							};
							var Be = function e(t, n, r) {
								if (fe && (n === 'id' || n === 'name') && (r in s || r in Ee)) return false;
								if (le && !ae[n] && We(J, n));
								else if (se && We(ee, n));
								else if (!y[n] || ae[n]) return false;
								else if (ye[n]);
								else if (We(i, $e(r, ne, '')));
								else if (
									(n === 'src' || n === 'xlink:href' || n === 'href') &&
									t !== 'script' &&
									ct(r, 'data:') === 0 &&
									ge[t]
								);
								else if (ce && !We(te, $e(r, ne, '')));
								else if (!r);
								else return false;
								return true;
							};
							var He = function e(t) {
								var n = void 0;
								var r = void 0;
								var o = void 0;
								var i = void 0;
								R('beforeSanitizeAttributes', t, null);
								var a = t.attributes;
								if (!a) return;
								var s = { attrName: '', attrValue: '', keepAttr: true, allowedAttributes: y };
								i = a.length;
								while (i--) {
									n = a[i];
									var l = n,
										c = l.name,
										u = l.namespaceURI;
									r = ut(n.value);
									o = A(c);
									s.attrName = o;
									s.attrValue = r;
									s.keepAttr = true;
									s.forceKeepAttr = undefined;
									R('uponSanitizeAttribute', t, s);
									r = s.attrValue;
									if (s.forceKeepAttr) continue;
									Se(c, t);
									if (!s.keepAttr) continue;
									if (We(/\/>/i, r)) {
										Se(c, t);
										continue;
									}
									if (b) {
										r = $e(r, m, ' ');
										r = $e(r, g, ' ');
									}
									var p = A(t.nodeName);
									if (!Be(p, o, r)) continue;
									try {
										if (u) t.setAttributeNS(u, c, r);
										else t.setAttribute(c, r);
										_e(d.removed);
									} catch (e) {}
								}
								R('afterSanitizeAttributes', t, null);
							};
							var Fe = function e(t) {
								var n = void 0;
								var r = Ie(t);
								R('beforeSanitizeShadowDOM', t, null);
								while ((n = r.nextNode())) {
									R('uponSanitizeShadowNode', n, null);
									if (Pe(n)) continue;
									if (n.content instanceof P) e(n.content);
									He(n);
								}
								R('afterSanitizeShadowDOM', t, null);
							};
							d.sanitize = function (e, t) {
								var n = void 0;
								var r = void 0;
								var o = void 0;
								var i = void 0;
								var a = void 0;
								xe = !e;
								if (xe) e = '\x3c!--\x3e';
								if (typeof e !== 'string' && !I(e))
									if (typeof e.toString !== 'function') throw Ge('toString is not a function');
									else {
										e = e.toString();
										if (typeof e !== 'string') throw Ge('dirty is not a string, aborting');
									}
								if (!d.isSupported) {
									if (at(c.toStaticHTML) === 'object' || typeof c.toStaticHTML === 'function') {
										if (typeof e === 'string') return c.toStaticHTML(e);
										if (I(e)) return c.toStaticHTML(e.outerHTML);
									}
									return e;
								}
								if (!ue) Le(t);
								d.removed = [];
								if (typeof e === 'string') T = false;
								if (T);
								else if (e instanceof p) {
									n = Oe('\x3c!----\x3e');
									r = n.ownerDocument.importNode(e, true);
									if (r.nodeType === 1 && r.nodeName === 'BODY') n = r;
									else if (r.nodeName === 'HTML') n = r;
									else n.appendChild(r);
								} else {
									if (!k && !b && !w && e.indexOf('<') === -1) return f && C ? f.createHTML(e) : e;
									n = Oe(e);
									if (!n) return k ? null : G;
								}
								if (n && pe) O(n.firstChild);
								var s = Ie(T ? e : n);
								while ((o = s.nextNode())) {
									if (o.nodeType === 3 && o === i) continue;
									if (Pe(o)) continue;
									if (o.content instanceof P) Fe(o.content);
									He(o);
									i = o;
								}
								i = null;
								if (T) return e;
								if (k) {
									if (x) {
										a = X.call(n.ownerDocument);
										while (n.firstChild) a.appendChild(n.firstChild);
									} else a = n;
									if (de) a = Q.call(u, a, true);
									return a;
								}
								var l = w ? n.outerHTML : n.innerHTML;
								if (b) {
									l = $e(l, m, ' ');
									l = $e(l, g, ' ');
								}
								return f && C ? f.createHTML(l) : l;
							};
							d.setConfig = function (e) {
								Le(e);
								ue = true;
							};
							d.clearConfig = function () {
								D = null;
								ue = false;
							};
							d.isValidAttribute = function (e, t, n) {
								if (!D) Le({});
								var r = A(e);
								var o = A(t);
								return Be(r, o, n);
							};
							d.addHook = function (e, t) {
								if (typeof t !== 'function') return;
								o[e] = o[e] || [];
								ze(o[e], t);
							};
							d.removeHook = function (e) {
								if (o[e]) _e(o[e]);
							};
							d.removeHooks = function (e) {
								if (o[e]) o[e] = [];
							};
							d.removeAllHooks = function () {
								o = {};
							};
							return d;
						}
						return lt();
					})();
				},
				928: function (e, t, n) {
					'use strict';
					var i = n(322);
					e.exports = function (e, t, n) {
						var r, o;
						if (((n = n || 0), i(t))) {
							if (Array.prototype.indexOf) return Array.prototype.indexOf.call(t, e, n);
							for (o = t.length, r = n; 0 <= n && r < o; r += 1) if (t[r] === e) return r;
						}
						return -1;
					};
				},
				690: function (e, t, n) {
					'use strict';
					var r = n(322),
						o = n(893),
						i = n(956);
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
				956: function (e) {
					'use strict';
					e.exports = function (e, t, n) {
						for (var r in ((n = n || null), e))
							if (e.hasOwnProperty(r) && !1 === t.call(n, e[r], r, e)) break;
					};
				},
				990: function (e, t, n) {
					'use strict';
					var r = n(893);
					e.exports = function (t) {
						var n;
						try {
							n = Array.prototype.slice.call(t);
						} catch (e) {
							(n = []),
								r(t, function (e) {
									n.push(e);
								});
						}
						return n;
					};
				},
				755: function (e) {
					'use strict';
					var r = '_feEventKey';
					e.exports = function (e, t) {
						var n = e[r];
						return (e = (e = (n = n || (e[r] = {}))[t]) || (n[t] = []));
					};
				},
				349: function (e, t, n) {
					'use strict';
					var r = n(758),
						a = n(690),
						s = n(755);
					function o(n, r, o) {
						var i,
							e = s(n, r);
						o
							? (a(e, function (e, t) {
									return o !== e.handler || (l(n, r, e.wrappedHandler), (i = t), !1);
								}),
								e.splice(i, 1))
							: (a(e, function (e) {
									l(n, r, e.wrappedHandler);
								}),
								e.splice(0, e.length));
					}
					function l(e, t, n) {
						'removeEventListener' in e
							? e.removeEventListener(t, n)
							: 'detachEvent' in e && e.detachEvent('on' + t, n);
					}
					e.exports = function (n, e, t) {
						r(e)
							? a(e.split(/\s+/g), function (e) {
									o(n, e, t);
								})
							: a(e, function (e, t) {
									o(n, t, e);
								});
					};
				},
				348: function (e, t, n) {
					'use strict';
					var o = n(758),
						c = n(690),
						u = n(755);
					function i(t, e, n, r) {
						function o(e) {
							n.call(r || t, e || window.event);
						}
						var i, a, s, l;
						'addEventListener' in t
							? t.addEventListener(e, o)
							: 'attachEvent' in t && t.attachEvent('on' + e, o),
							(a = n),
							(s = o),
							(i = u((i = t), e)),
							(l = !1),
							c(i, function (e) {
								return e.handler !== a || !(l = !0);
							}),
							l || i.push({ handler: a, wrappedHandler: s });
					}
					e.exports = function (n, e, r, t) {
						o(e)
							? c(e.split(/\s+/g), function (e) {
									i(n, e, r, t);
								})
							: c(e, function (e, t) {
									i(n, t, e, r);
								});
					};
				},
				24: function (e, t, n) {
					'use strict';
					var r = n(322),
						o = n(929);
					e.exports = function (e, t) {
						(t = (t = r(t) ? t.join(' ') : t).replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')),
							o(e.className.baseVal) ? (e.className = t) : (e.className.baseVal = t);
					};
				},
				204: function (e, t, n) {
					'use strict';
					var o = n(690),
						i = n(928),
						a = n(902),
						s = n(24);
					e.exports = function (t) {
						var e = Array.prototype.slice.call(arguments, 1),
							n = t.classList,
							r = [];
						n
							? o(e, function (e) {
									t.classList.add(e);
								})
							: ((n = a(t)) && (e = [].concat(n.split(/\s+/), e)),
								o(e, function (e) {
									i(e, r) < 0 && r.push(e);
								}),
								s(t, r));
					};
				},
				522: function (e, t, n) {
					'use strict';
					var o = n(758),
						i = n(690);
					e.exports = function (e, t, n) {
						var r = e.style;
						o(t)
							? (r[t] = n)
							: i(t, function (e, t) {
									r[t] = e;
								});
					};
				},
				902: function (e, t, n) {
					'use strict';
					var r = n(929);
					e.exports = function (e) {
						return e && e.className
							? r(e.className.baseVal)
								? e.className
								: e.className.baseVal
							: '';
					};
				},
				714: function (e, t, n) {
					'use strict';
					var r = n(928),
						o = n(902);
					e.exports = function (e, t) {
						return e.classList ? e.classList.contains(t) : ((e = o(e).split(/\s+/)), -1 < r(t, e));
					};
				},
				471: function (e, t, n) {
					'use strict';
					var r = n(928),
						o = n(990),
						n = Element.prototype,
						i =
							n.matches ||
							n.webkitMatchesSelector ||
							n.mozMatchesSelector ||
							n.msMatchesSelector ||
							function (e) {
								var t = this.document || this.ownerDocument;
								return -1 < r(this, o(t.querySelectorAll(e)));
							};
					e.exports = function (e, t) {
						return i.call(e, t);
					};
				},
				462: function (e, t, n) {
					'use strict';
					var i = n(893),
						a = n(928),
						s = n(902),
						l = n(24);
					e.exports = function (e) {
						var t,
							n,
							r = Array.prototype.slice.call(arguments, 1),
							o = e.classList;
						o
							? i(r, function (e) {
									o.remove(e);
								})
							: ((t = s(e).split(/\s+/)),
								(n = []),
								i(t, function (e) {
									a(e, r) < 0 && n.push(e);
								}),
								l(e, n));
					};
				},
				969: function (e) {
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
				254: function (e, t, n) {
					'use strict';
					var o = n(956);
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
				391: function (e, t, n) {
					'use strict';
					var a = n(929),
						s = n(254),
						l = 6048e5;
					e.exports = function (e, t) {
						var n,
							r = location.hostname,
							o = 'TOAST UI ' + e + ' for ' + r + ': Statistics',
							i = window.localStorage.getItem(o);
						(!a(window.tui) && !1 === window.tui.usageStatistics) ||
							(i && ((i = i), (n = new Date().getTime()), !(l < n - i))) ||
							(window.localStorage.setItem(o, new Date().getTime()),
							setTimeout(function () {
								('interactive' !== document.readyState && 'complete' !== document.readyState) ||
									s('https://www.google-analytics.com/collect', {
										v: 1,
										t: 'event',
										tid: t,
										cid: r,
										dp: r,
										dh: e,
										el: e,
										ec: 'use'
									});
							}, 1e3));
					};
				},
				516: function (e) {
					'use strict';
					e.exports = function (e, t) {
						var n, r;
						return (
							(t = t || 0),
							function () {
								(r = Array.prototype.slice.call(arguments)),
									window.clearTimeout(n),
									(n = window.setTimeout(function () {
										e.apply(null, r);
									}, t));
							}
						);
					};
				},
				423: function (e, t, n) {
					'use strict';
					var c = n(516);
					e.exports = function (t, e) {
						function n(e) {
							t.apply(null, e), (r = null);
						}
						var r,
							o,
							i,
							a,
							s = !0;
						function l() {
							(a = Array.prototype.slice.call(arguments)),
								s
									? (n(a), (s = !1))
									: ((i = Number(new Date())), (r = r || i), o(a), e <= i - r && n(a));
						}
						return (
							(o = c(n, (e = e || 0))),
							(l.reset = function () {
								(s = !0), (r = null);
							}),
							l
						);
					};
				},
				322: function (e) {
					'use strict';
					e.exports = function (e) {
						return e instanceof Array;
					};
				},
				326: function (e) {
					'use strict';
					e.exports = function (e) {
						return 'boolean' == typeof e || e instanceof Boolean;
					};
				},
				65: function (e, t, n) {
					'use strict';
					var r = n(929),
						o = n(934);
					e.exports = function (e) {
						return !r(e) && !o(e);
					};
				},
				404: function (e, t, n) {
					'use strict';
					var r = n(790);
					e.exports = function (e) {
						return !r(e);
					};
				},
				294: function (e) {
					'use strict';
					e.exports = function (e) {
						return e instanceof Function;
					};
				},
				934: function (e) {
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
				73: function (e) {
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
				790: function (e, t, n) {
					'use strict';
					var r = n(65);
					e.exports = function (e) {
						return r(e) && !1 !== e;
					};
				},
				929: function (e) {
					'use strict';
					e.exports = function (e) {
						return void 0 === e;
					};
				},
				695: function (e) {
					'use strict';
					e.exports = t;
				},
				412: function (e) {
					'use strict';
					e.exports = n;
				},
				479: function (e) {
					'use strict';
					e.exports = r;
				},
				481: function (e) {
					'use strict';
					e.exports = o;
				},
				43: function (e) {
					'use strict';
					e.exports = i;
				},
				814: function (e) {
					'use strict';
					e.exports = a;
				},
				785: function (e) {
					'use strict';
					e.exports = s;
				},
				311: function (e) {
					'use strict';
					e.exports = l;
				}
			}),
			(u = {}),
			(ah.n = function (e) {
				var t =
					e && e.__esModule
						? function () {
								return e.default;
							}
						: function () {
								return e;
							};
				return ah.d(t, { a: t }), t;
			}),
			(ah.d = function (e, t) {
				for (var n in t)
					ah.o(t, n) && !ah.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
			}),
			(ah.g = (function () {
				if ('object' == typeof globalThis) return globalThis;
				try {
					return this || new Function('return this')();
				} catch (e) {
					if ('object' == typeof window) return window;
				}
			})()),
			(ah.o = function (e, t) {
				return Object.prototype.hasOwnProperty.call(e, t);
			}),
			(sh = {}),
			(function () {
				'use strict';
				ah.d(sh, {
					default: function () {
						return ih;
					}
				});
				var I = function (e, t) {
					return (I =
						Object.setPrototypeOf ||
						({ __proto__: [] } instanceof Array
							? function (e, t) {
									e.__proto__ = t;
								}
							: function (e, t) {
									for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
								}))(e, t);
				};
				function r(e, t) {
					if ('function' != typeof t && null !== t)
						throw new TypeError(
							'Class extends value ' + String(t) + ' is not a constructor or null'
						);
					function n() {
						this.constructor = e;
					}
					I(e, t),
						(e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()));
				}
				var x = function () {
					return (x =
						Object.assign ||
						function (e) {
							for (var t, n = 1, r = arguments.length; n < r; n++)
								for (var o in (t = arguments[n]))
									Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
							return e;
						}).apply(this, arguments);
				};
				Object.create;
				function R(e, t, n) {
					if (n || 2 === arguments.length)
						for (var r, o = 0, i = t.length; o < i; o++)
							(!r && o in t) || ((r = r || Array.prototype.slice.call(t, 0, o))[o] = t[o]);
					return e.concat(r || Array.prototype.slice.call(t));
				}
				function p(e, t) {
					return (
						Object.defineProperty ? Object.defineProperty(e, 'raw', { value: t }) : (e.raw = t), e
					);
				}
				Object.create;
				var X = ah(43),
					e = ah(956),
					P = ah.n(e),
					e = ah(969),
					B = ah.n(e),
					e = ah(522),
					H = ah.n(e),
					e = ah(204),
					F = ah.n(e),
					e = ah(462),
					q = ah.n(e),
					e = ah(758),
					j = ah.n(e),
					e = ah(321),
					_ = ah.n(e),
					e = ah(929),
					z = ah.n(e),
					e = ah(934),
					U = ah.n(e),
					e = ah(391),
					V = ah.n(e),
					$ = (/Mac/.test(navigator.platform), /[\u0020]+/g),
					W = /[>(){}[\]+-.!#|]/g,
					G =
						/<([a-zA-Z_][a-zA-Z0-9\-._]*)(\s|[^\\>])*\/?>|<(\/)([a-zA-Z_][a-zA-Z0-9\-._]*)\s*\/?>|<!--[^-]+-->|<([a-zA-Z_][a-zA-Z0-9\-.:/]*)>/g,
					Z = /\\[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~\\]/g,
					Y = /[*_~`]/g,
					J = /!\[.*\]\(.*\)/g,
					ee = /[[\]]/g,
					te = /(?:^|[^\\])\\(?!\\)/g,
					ne = new RegExp('[&<>"]', 'g');
				function re(e) {
					switch (e) {
						case '&':
							return '&amp;';
						case '<':
							return '&lt;';
						case '>':
							return '&gt;';
						case '"':
							return '&quot;';
						default:
							return e;
					}
				}
				function oe(e) {
					return ne.test(e) ? e.replace(ne, re) : e;
				}
				function C(e, t) {
					return -1 !== e.indexOf(t);
				}
				var ie = ['rel', 'target', 'hreflang', 'type'],
					ae = {
						codeblock: /(^ {4}[^\n]+\n*)+/,
						thematicBreak: /^ *((\* *){3,}|(- *){3,} *|(_ *){3,}) */,
						atxHeading: /^(#{1,6}) +[\s\S]+/,
						seTextheading: /^([^\n]+)\n *(=|-){2,} */,
						blockquote: /^( *>[^\n]+.*)+/,
						list: /^ *(\*+|-+|\d+\.) [\s\S]+/,
						def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? */,
						link: /!?\[.*\]\(.*\)/,
						reflink: /!?\[.*\]\s*\[([^\]]*)\]/,
						verticalBar: /\u007C/,
						fencedCodeblock: /^((`|~){3,})/
					};
				function se(t) {
					var n;
					return t
						? ((n = {}),
							ie.forEach(function (e) {
								z()(t[e]) || (n[e] = t[e]);
							}),
							n)
						: null;
				}
				function le(e, t) {
					for (var n = '', r = 0; r < t; r += 1) n += e;
					return n;
				}
				function ce(e) {
					for (var n = [], t = J.exec(e); t; )
						n.push([t.index, t.index + t[0].length]), (t = J.exec(e));
					return e.replace(ee, function (e, t) {
						return n.some(function (e) {
							return t > e[0] && t < e[1];
						})
							? e
							: '\\' + e;
					});
				}
				function ue(e) {
					function t(e) {
						return '\\' + e;
					}
					var n,
						r,
						e = e.replace($, ' ');
					return (
						Z.test(e) && (e = e.replace(Z, t)),
						(e = (e = te.test(e)
							? e.replace(te, function (e) {
									return e + '\\';
								})
							: e).replace(Y, t)),
						G.test(e) && (e = e.replace(G, t)),
						(n = e),
						(r = !1),
						P()(ae, function (e) {
							return !(r = e.test(n) ? !0 : r);
						}),
						(e = r ? e.replace(W, t) : e)
					);
				}
				function pe(e) {
					return U()(e) || z()(e);
				}
				function de(e, t) {
					if (null !== e || e !== t) {
						if ('object' != typeof e || 'object' != typeof t || pe(e) || pe(t)) return e === t;
						for (var n in e) if (e[n] !== t[n]) return;
						for (var n in t) if (!(n in e)) return;
					}
					return 1;
				}
				function K(e) {
					return e[e.length - 1];
				}
				function fe(e) {
					return 'object' == typeof e && null !== e;
				}
				function he(e, t) {
					var n = x({}, e);
					return (
						e &&
							t &&
							Object.keys(t).forEach(function (e) {
								fe(n[e])
									? Array.isArray(t[e])
										? (n[e] = me(t[e]))
										: n.hasOwnProperty(e)
											? (n[e] = he(n[e], t[e]))
											: (n[e] = ge(t[e]))
									: (n[e] = t[e]);
							}),
						n
					);
				}
				function me(e) {
					return e.map(function (e) {
						return fe(e) ? (Array.isArray(e) ? me : ge)(e) : e;
					});
				}
				function ge(n) {
					var e = Object.keys(n);
					return e.length
						? e.reduce(function (e, t) {
								return fe(n[t]) ? (e[t] = (Array.isArray(n[t]) ? me : ge)(n[t])) : (e[t] = n[t]), e;
							}, {})
						: n;
				}
				function ve(t, n) {
					return (
						void 0 === n && (n = {}),
						Object.keys(n).forEach(function (e) {
							!t.hasOwnProperty(e) || 'object' != typeof t[e] || Array.isArray(n[e])
								? (t[e] = n[e])
								: ve(t[e], n[e]);
						}),
						t
					);
				}
				function ye(e, t) {
					return t < e ? [t, e] : [e, t];
				}
				var be = ah(311),
					we = ah(785),
					e = ah(990),
					ke = ah.n(e),
					m = ah(814),
					xe = ah(481),
					s = ah(695),
					Ce = ah(479),
					Te = ah(412);
				function Ee(e, t) {
					var n = e.nodes.paragraph;
					return t ? n.create(null, j()(t) ? e.text(t) : t) : n.createAndFill();
				}
				function y(e, t, n) {
					return e.text(t, n);
				}
				function b(e, t, n) {
					void 0 === n && (n = t);
					var r = e.doc.content.size,
						r = 0 < r ? r - 1 : 1;
					return m.TextSelection.create(e.doc, Math.min(t, r), Math.min(n, r));
				}
				function Le(e, t, n) {
					t = t.pos;
					return e.replaceWith(t, t, Ee(n)), e.setSelection(b(e, t + 1));
				}
				function Me(e) {
					for (
						var t = e.state,
							n = e.from,
							r = e.startIndex,
							o = e.endIndex,
							i = e.createText,
							a = t.tr,
							s = t.doc,
							l = t.schema,
							c = r;
						c <= o;
						c += 1
					) {
						var u = s.child(c),
							p = u.nodeSize,
							d = u.textContent,
							u = u.content,
							d = i(d),
							d = d ? y(l, d) : X.Fragment.empty,
							f = a.mapping.map(n),
							u = f + u.size;
						a.replaceWith(f, u, d), (n += p);
					}
					return a;
				}
				function Ne(e, t, n, r) {
					n = n.length;
					e.split(t)
						.delete(t - n, t)
						.insert(e.mapping.map(t), r)
						.setSelection(b(e, e.mapping.map(t) - n));
				}
				function Ae(e) {
					return e.sourcepos[0][0];
				}
				function De(e) {
					return e.sourcepos[1][0];
				}
				function Se(e) {
					return e.sourcepos[0][1];
				}
				function Oe(e) {
					return e.sourcepos[1][1];
				}
				function Ie(e) {
					return e && ('item' === e.type || 'list' === e.type);
				}
				function Re(e) {
					return Ie(e) && 'ordered' === e.listData.type;
				}
				function Pe(e) {
					return e && ('tableCell' === e.type || 'tableDelimCell' === e.type);
				}
				function Be(e, t, n) {
					for (e = (n = void 0 === n ? !0 : n) ? e : e.parent; e && 'document' !== e.type; ) {
						if (t(e)) return e;
						e = e.parent;
					}
					return null;
				}
				function u(e, t) {
					return [e[0], e[1] + t];
				}
				function He(e, t) {
					return [e[0], t];
				}
				function Fe(e) {
					for (var t = [], n = e.walker(); (r = n.next()); ) {
						var r = r.node;
						'text' === r.type && t.push(r.literal);
					}
					return t.join('');
				}
				var qe = [],
					je = {},
					_e = /\$\$widget\d+\s/;
				function ze(e) {
					var t,
						n = e.search(_e);
					return (
						-1 !== n &&
							((t = e.substring(n).replace(_e, '').replace('$$', '')),
							(e = e.substring(0, n)),
							(e += ze(t))),
						e
					);
				}
				function Ue(e, t) {
					return '$$' + e + ' ' + t + '$$';
				}
				function Ve(e, t) {
					var e = je[e],
						n = e.rule,
						e = e.toDOM,
						n = ze(t).match(n);
					return e((t = n ? n[0] : t));
				}
				function $e(e, t, n, r) {
					return e.concat(We(t, n, r));
				}
				function We(e, t, n) {
					var r = [],
						o = (qe[(n = void 0 === n ? 0 : n)] || {}).rule,
						i = n + 1;
					if (((e = ze(e)), o && o.test(e))) {
						for (; -1 !== (s = e.search(o)); ) {
							var a = e.substring(0, s),
								a = (a && (r = $e(r, a, t, i)), (e = e.substring(s)).match(o)[0]),
								s = 'widget' + n;
							r.push(t.nodes.widget.create({ info: s }, t.text(Ue(s, a)))),
								(e = e.substring(a.length));
						}
						e && (r = $e(r, e, t, i));
					} else e && (r = n < qe.length - 1 ? $e(r, e, t, i) : [t.text(e)]);
					return r;
				}
				function Ge(e) {
					for (var t, n = '', r = e.walker(); (t = r.next()); ) {
						var o = t.node;
						t.entering &&
							(o !== e && 'text' !== o.type
								? ((n += (function (e) {
										var t = e.firstChild.literal;
										switch (e.type) {
											case 'emph':
												return '*' + t + '*';
											case 'strong':
												return '**' + t + '**';
											case 'strike':
												return '~~' + t + '~~';
											case 'code':
												return '`' + t + '`';
											case 'link':
											case 'image':
												var n = e.destination,
													r = e.title;
												return (
													('link' === e.type ? '' : '!') +
													'[' +
													t +
													'](' +
													n +
													(r ? ' "' + r + '"' : '') +
													')'
												);
											default:
												return null;
										}
									})(o)),
									r.resumeAt(e, !1),
									r.next())
								: 'text' === o.type && (n += o.literal));
					}
					return n;
				}
				function Ze() {
					return {
						deleteSelection: function () {
							return s.deleteSelection;
						},
						selectAll: function () {
							return s.selectAll;
						},
						undo: function () {
							return Te.undo;
						},
						redo: function () {
							return Te.redo;
						}
					};
				}
				var e = ah(322),
					Xe = ah.n(e),
					e = ah(714),
					Ke = ah.n(e),
					e = ah(471),
					Qe = ah.n(e),
					e = '[A-Za-z][A-Za-z0-9-]*',
					Ye =
						'(?:\\s+[a-zA-Z_:][a-zA-Z0-9:._-]*(?:\\s*=\\s*(?:[^"\'=<>`\\x00-\\x20]+|\'[^\']*\'|"[^"]*"))?)',
					Je = '<(' + e + ')(' + Ye + ')*\\s*/?>',
					et = '(?:' + Je + '|</([A-Za-z][A-Za-z0-9-]*)\\s*[>])',
					tt = new RegExp('^' + et, 'i'),
					nt = /<br\s*\/*>/i,
					rt = /<! ---->|<!--(?:-?[^>-])(?:-?[^-])*-->/,
					ot = '</p><p>';
				function it(e, t, n) {
					var r = parseInt(e.left, 10),
						o = parseInt(e.top, 10),
						i = parseInt(e.width, 10) + parseInt(e.paddingLeft, 10) + parseInt(e.paddingRight, 10),
						e = parseInt(e.height, 10) + parseInt(e.paddingTop, 10) + parseInt(e.paddingBottom, 10);
					return r <= t && t <= r + i && o <= n && n <= o + e;
				}
				var at = 'toastui-editor-';
				function d() {
					for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
					for (var n = [], r = 0, o = e; r < o.length; r++) {
						var i = o[r],
							a = void 0;
						(a = Array.isArray(i) ? (i[0] ? i[1] : null) : i) && n.push('' + at + a);
					}
					return n.join(' ');
				}
				function o() {
					for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
					return e
						.map(function (e) {
							return at + 'md-' + e;
						})
						.join(' ');
				}
				function st(e) {
					return e && e.nodeType === Node.ELEMENT_NODE;
				}
				function lt(e) {
					e.parentNode && e.parentNode.removeChild(e);
				}
				function ct(e, t, n) {
					((n = z()(n) ? !Ke()(e, t) : n) ? F : q)()(e, t);
				}
				function ut(e, t) {
					var n = document.createElement('div'),
						e = (j()(e) ? (n.innerHTML = e) : n.appendChild(e), n.firstChild);
					return t && t.appendChild(e), e;
				}
				function pt(e) {
					var n = window.getComputedStyle(e);
					return (
						['margin-left', 'margin-right'].reduce(function (e, t) {
							return e + parseInt(n.getPropertyValue(t), 10);
						}, 0) + e.offsetWidth
					);
				}
				function dt(e, t) {
					for (
						var n = j()(t)
							? function (e) {
									return Qe()(e, t);
								}
							: function (e) {
									return e === t;
								};
						e && e !== document;

					) {
						if (st(e) && n(e)) return e;
						e = e.parentNode;
					}
					return null;
				}
				function ft(e, t) {
					for (
						var n = 0, r = 0;
						e &&
						e !== t &&
						((n += e.offsetTop), (r += e.offsetLeft), e.offsetParent !== t.offsetParent);

					)
						e = e.offsetParent;
					return { offsetTop: n, offsetLeft: r };
				}
				function ht(t, n) {
					Object.keys(t).forEach(function (e) {
						pe(t[e]) ? n.removeAttribute(e) : n.setAttribute(e, t[e]);
					});
				}
				function mt(e) {
					return e
						.replace(/<img class="ProseMirror-separator" alt="">/g, '')
						.replace(/ class="ProseMirror-trailingBreak"/g, '');
				}
				var gt = new m.PluginKey('widget'),
					vt =
						((yt.prototype.update = function (e) {
							var t,
								n,
								r,
								o,
								i,
								a = gt.getState(e.state);
							this.removeWidget(),
								a &&
									((t = a.node),
									(n = a.style),
									(o = (a = e.coordsAtPos(a.pos)).top),
									(r = a.left),
									(a = a.bottom - o),
									(i = o - (o = this.rootEl.getBoundingClientRect()).top),
									H()(t, { opacity: '0' }),
									this.rootEl.appendChild(t),
									H()(t, {
										position: 'absolute',
										left: r - o.left + 5 + 'px',
										top: ('bottom' === n ? i + a - 5 : i - a) + 'px',
										opacity: '1'
									}),
									(this.popup = t),
									e.focus());
						}),
						(yt.prototype.destroy = function () {
							this.eventEmitter.removeEventHandler('blur', this.removeWidget);
						}),
						yt);
				function yt(e, t) {
					var n = this;
					(this.popup = null),
						(this.removeWidget = function () {
							n.popup && (n.rootEl.removeChild(n.popup), (n.popup = null));
						}),
						(this.rootEl = e.dom.parentElement),
						(this.eventEmitter = t),
						this.eventEmitter.listen('blur', this.removeWidget),
						this.eventEmitter.listen('loadUI', function () {
							n.rootEl = dt(e.dom.parentElement, '.' + d('defaultUI'));
						}),
						this.eventEmitter.listen('removePopupWidget', this.removeWidget);
				}
				var e = ah(893),
					bt = ah.n(e);
				function wt(n, r, e) {
					n.emit(
						'addImageBlobHook',
						r,
						function (e, t) {
							n.emit('command', 'addImage', { imageUrl: e, altText: t || r.name || 'image' });
						},
						e
					);
				}
				function kt(e) {
					e = ke()(e).filter(function (e) {
						return -1 !== e.type.indexOf('image');
					});
					if (1 === e.length) {
						e = e[0];
						if (e) return e.getAsFile();
					}
					return null;
				}
				function xt() {}
				Object.defineProperty(xt.prototype, 'type', {
					get: function () {
						return 'node';
					},
					enumerable: !1,
					configurable: !0
				}),
					(xt.prototype.setContext = function (e) {
						this.context = e;
					});
				e = xt;
				function Ct(e) {
					var t = document.createElement('span'),
						e = Ve(e.attrs.info, e.textContent);
					return (t.className = 'tui-widget'), t.appendChild(e), { dom: t };
				}
				function Tt(e) {
					return 'widget' === e.type.name;
				}
				r(Mt, (Et = e)),
					Object.defineProperty(Mt.prototype, 'name', {
						get: function () {
							return 'widget';
						},
						enumerable: !1,
						configurable: !0
					}),
					Object.defineProperty(Mt.prototype, 'schema', {
						get: function () {
							return {
								attrs: { info: { default: null } },
								group: 'inline',
								inline: !0,
								content: 'text*',
								selectable: !1,
								atom: !0,
								toDOM: function () {
									return ['span', { class: 'tui-widget' }, 0];
								},
								parseDOM: [
									{
										tag: 'span.tui-widget',
										getAttrs: function (e) {
											return { info: e.textContent.match(/\$\$(widget\d+)/)[1] };
										}
									}
								]
							};
						},
						enumerable: !1,
						configurable: !0
					});
				var Et,
					Lt = Mt;
				function Mt() {
					return (null !== Et && Et.apply(this, arguments)) || this;
				}
				function t(e) {
					(this.timer = null),
						(this.el = document.createElement('div')),
						(this.el.className = 'toastui-editor'),
						(this.eventEmitter = e),
						(this.placeholder = { text: '' });
				}
				(t.prototype.createState = function () {
					return m.EditorState.create({ schema: this.schema, plugins: this.createPlugins() });
				}),
					(t.prototype.initEvent = function () {
						var e = this.eventEmitter,
							t = this.view,
							n = this.editorType;
						t.dom.addEventListener('focus', function () {
							return e.emit('focus', n);
						}),
							t.dom.addEventListener('blur', function () {
								return e.emit('blur', n);
							});
					}),
					(t.prototype.emitChangeEvent = function (e) {
						this.eventEmitter.emit('caretChange', this.editorType),
							e.docChanged && this.eventEmitter.emit('change', this.editorType);
					}),
					Object.defineProperty(t.prototype, 'defaultPlugins', {
						get: function () {
							var r,
								t,
								n,
								e = this.createInputRules(),
								o = R(R([], this.keymaps), [
									(0, xe.keymap)(x({ 'Shift-Enter': s.baseKeymap.Enter }, s.baseKeymap)),
									(0, Te.history)(),
									((n = this.placeholder),
									new m.Plugin({
										props: {
											decorations: function (e) {
												var t,
													e = e.doc;
												return n.text &&
													1 === e.childCount &&
													e.firstChild.isTextblock &&
													0 === e.firstChild.content.size
													? ((t = document.createElement('span')),
														F()(t, 'placeholder'),
														n.className && F()(t, n.className),
														(t.textContent = n.text),
														be.DecorationSet.create(e, [be.Decoration.widget(1, t)]))
													: null;
											}
										}
									})),
									((t = this.eventEmitter),
									new m.Plugin({
										key: gt,
										state: {
											init: function () {
												return null;
											},
											apply: function (e) {
												return e.getMeta('widget');
											}
										},
										view: function (e) {
											return new vt(e, t);
										}
									})),
									((o = this.context),
									(r = o.eventEmitter),
									new m.Plugin({
										props: {
											handleDOMEvents: {
												drop: function (e, t) {
													var n = null == (n = t.dataTransfer) ? void 0 : n.files;
													return (
														n &&
															bt()(n, function (e) {
																return (
																	-1 === e.type.indexOf('image') ||
																	(t.preventDefault(), t.stopPropagation(), wt(r, e, t.type), !1)
																);
															}),
														!0
													);
												}
											}
										}
									}))
								]);
							return e ? o.concat(e) : o;
						},
						enumerable: !1,
						configurable: !0
					}),
					(t.prototype.createInputRules = function () {
						var e = qe.map(function (e) {
							var s = e.rule;
							return new Ce.InputRule(s, function (e, t, n, r) {
								var o = e.schema,
									i = e.tr,
									e = e.doc,
									t = t.input.match(new RegExp(s, 'g')),
									e = e.resolve(n),
									n = e.parent,
									a = 0;
								return (
									(n = Tt(n) ? e.node(e.depth - 1) : n).forEach(function (e) {
										return Tt(e) && (a += 1);
									}),
									t.length > a
										? ((n = We((e = K(t)), o)), i.replaceWith(r - e.length + 1, r, n))
										: null
								);
							});
						});
						return e.length ? (0, Ce.inputRules)({ rules: e }) : null;
					}),
					(t.prototype.clearTimer = function () {
						this.timer && (clearTimeout(this.timer), (this.timer = null));
					}),
					(t.prototype.createSchema = function () {
						return new X.Schema({ nodes: this.specs.nodes, marks: this.specs.marks });
					}),
					(t.prototype.createKeymaps = function (e) {
						var t = Ze(),
							n = t.undo,
							t = t.redo,
							r = this.specs.keymaps(e),
							n = { 'Mod-z': n(), 'Shift-Mod-z': t() };
						return e ? r.concat((0, xe.keymap)(n)) : r;
					}),
					(t.prototype.createCommands = function () {
						return this.specs.commands(this.view);
					}),
					(t.prototype.createPluginProps = function () {
						var t = this;
						return this.extraPlugins.map(function (e) {
							return e(t.eventEmitter);
						});
					}),
					(t.prototype.focus = function () {
						var e = this;
						this.clearTimer(),
							(this.timer = setTimeout(function () {
								e.view.focus(), e.view.dispatch(e.view.state.tr.scrollIntoView());
							}));
					}),
					(t.prototype.blur = function () {
						this.view.dom.blur();
					}),
					(t.prototype.destroy = function () {
						var t = this;
						this.clearTimer(),
							this.view.destroy(),
							Object.keys(this).forEach(function (e) {
								delete t[e];
							});
					}),
					(t.prototype.moveCursorToStart = function (e) {
						var t = this.view.state.tr;
						this.view.dispatch(t.setSelection(b(t, 1)).scrollIntoView()), e && this.focus();
					}),
					(t.prototype.moveCursorToEnd = function (e) {
						var t = this.view.state.tr;
						this.view.dispatch(t.setSelection(b(t, t.doc.content.size - 1)).scrollIntoView()),
							e && this.focus();
					}),
					(t.prototype.setScrollTop = function (e) {
						this.view.dom.scrollTop = e;
					}),
					(t.prototype.getScrollTop = function () {
						return this.view.dom.scrollTop;
					}),
					(t.prototype.setPlaceholder = function (e) {
						(this.placeholder.text = e), this.view.dispatch(this.view.state.tr.scrollIntoView());
					}),
					(t.prototype.setHeight = function (e) {
						H()(this.el, { height: e + 'px' });
					}),
					(t.prototype.setMinHeight = function (e) {
						H()(this.el, { minHeight: e + 'px' });
					}),
					(t.prototype.getElement = function () {
						return this.el;
					});
				var Nt = t,
					n = ah(294),
					At = ah.n(n),
					Dt = [
						'Enter',
						'Shift-Enter',
						'Mod-Enter',
						'Tab',
						'Shift-Tab',
						'Delete',
						'Backspace',
						'Mod-Delete',
						'Mod-Backspace',
						'ArrowUp',
						'ArrowDown',
						'ArrowLeft',
						'ArrowRight',
						'Mod-d',
						'Mod-D',
						'Alt-ArrowUp',
						'Alt-ArrowDown'
					];
				function St(e, t, n) {
					return e.focus(), t(n)(e.state, e.dispatch, e);
				}
				function Ot(e) {
					this.specs = e;
				}
				Object.defineProperty(Ot.prototype, 'nodes', {
					get: function () {
						return this.specs
							.filter(function (e) {
								return 'node' === e.type;
							})
							.reduce(function (e, t) {
								var n = t.name,
									t = t.schema;
								return x(x({}, e), (((e = {})[n] = t), e));
							}, {});
					},
					enumerable: !1,
					configurable: !0
				}),
					Object.defineProperty(Ot.prototype, 'marks', {
						get: function () {
							return this.specs
								.filter(function (e) {
									return 'mark' === e.type;
								})
								.reduce(function (e, t) {
									var n = t.name,
										t = t.schema;
									return x(x({}, e), (((e = {})[n] = t), e));
								}, {});
						},
						enumerable: !1,
						configurable: !0
					}),
					(Ot.prototype.commands = function (o, n) {
						var e = this.specs
								.filter(function (e) {
									return e.commands;
								})
								.reduce(function (e, t) {
									var n = {},
										r = t.commands();
									return (
										At()(r)
											? (n[t.name] = function (e) {
													return St(o, r, e);
												})
											: Object.keys(r).forEach(function (t) {
													n[t] = function (e) {
														return St(o, r[t], e);
													};
												}),
										x(x({}, e), n)
									);
								}, {}),
							r = Ze();
						return (
							Object.keys(r).forEach(function (t) {
								e[t] = function (e) {
									return St(o, r[t], e);
								};
							}),
							n &&
								Object.keys(n).forEach(function (t) {
									e[t] = function (e) {
										return St(o, n[t], e);
									};
								}),
							e
						);
					}),
					(Ot.prototype.keymaps = function (e) {
						return this.specs
							.filter(function (e) {
								return e.keymaps;
							})
							.map(function (e) {
								return e.keymaps();
							})
							.map(function (t) {
								return (
									e ||
										Object.keys(t).forEach(function (e) {
											C(Dt, e) || delete t[e];
										}),
									(0, xe.keymap)(t)
								);
							});
					}),
					(Ot.prototype.setContext = function (t) {
						this.specs.forEach(function (e) {
							e.setContext(t);
						});
					});
				var It = Ot;
				function Rt(e) {
					var t = e.from,
						n = e.to;
					return e instanceof m.AllSelection ? [t + 1, n - 1] : [t, n];
				}
				function Pt(e) {
					return e.index(0) + 1;
				}
				function Bt(e, n, r) {
					void 0 === r && (r = 1);
					var o = 0;
					return (
						e.forEach(function (e, t) {
							Tt(e) && t + 2 < n && (o += 2 * r);
						}),
						o
					);
				}
				function Ht(e, t, n) {
					var r = t === (n = void 0 === n ? t : n),
						o = e.resolve(t),
						i = Pt(o),
						a = i,
						o = o.start(1),
						s = o,
						r =
							(r ||
								((s = (r = e.resolve(n === e.content.size ? n - 1 : n)).start(1)),
								(a = Pt(r)),
								r.pos === e.content.size && (n = e.content.size - 2)),
							Math.max(t - o + 1, 1)),
						t = Math.max(n - s + 1, 1);
					return [
						[i, r + Bt(e.child(i - 1), r, -1)],
						[a, t + Bt(e.child(a - 1), t, -1)]
					];
				}
				function Ft(e, t) {
					for (var n = [], r = 0, o = 0; r < t; r += 1) {
						var i = e.child(r);
						(n[r] = o), (o += i.nodeSize);
					}
					return n;
				}
				function qt(e, t, n) {
					var r = Ft(e, n[0]),
						o = t[0] - 1,
						i = n[0] - 1,
						a = e.child(o),
						s = e.child(i),
						o = r[o],
						r = r[i];
					return (
						(o += t[1] + Bt(a, t[1] - 1)),
						(r += n[1] + Bt(s, n[1] - 1)),
						[o, Math.min(r, e.content.size)]
					);
				}
				function g(e) {
					var t = e.$from,
						n = e.$to,
						r = e.from,
						o = e.to,
						i = t.doc;
					return (
						e instanceof m.AllSelection && ((t = i.resolve(r + 1)), (n = i.resolve(o - 1))),
						0 === t.depth && (n = t = i.resolve(r - 1)),
						{
							startFromOffset: t.start(1),
							endFromOffset: n.start(1),
							startToOffset: t.end(1),
							endToOffset: n.end(1),
							startIndex: t.index(0),
							endIndex: n.index(0),
							from: t.pos,
							to: n.pos
						}
					);
				}
				function jt(e, t) {
					for (var n = 1, r = 1, o = 0, i = 0; o < e.childCount; o += 1) {
						var a = e.child(o).nodeSize,
							n = i + 1,
							r = i + a - 1;
						if (o === t) break;
						i += a;
					}
					return { startOffset: n, endOffset: r };
				}
				var _t = 'listItem',
					zt = 'link',
					Ut = 'code',
					Vt = 'meta',
					$t = 'delimiter',
					Wt = 'markedText',
					Gt = { strong: 2, emph: 1, strike: 2 };
				function T(e, t, n, r) {
					return { start: e, end: t, spec: { type: n, attrs: r } };
				}
				function Zt(e, t, n) {
					var e = e.type,
						r = u(t, Gt[e]),
						o = u(n, -Gt[e]);
					return [T(r, o, e), T(t, r, $t), T(o, n, $t)];
				}
				function Xt(e, t, n, r) {
					return [
						T(e, t, zt),
						T(He(e, n[1] + 1), He(t, r), zt, { desc: !0 }),
						T(He(t, r + 2), u(t, -1), zt, { url: !0 })
					];
				}
				function Kt(e, t, n, r) {
					var o = {
						start: t,
						end: n,
						spec: { attrs: { className: r + '-line-background', codeStart: t[0], codeEnd: n[0] } },
						lineBackground: !0
					};
					return 'item' !== e.type && 'blockQuote' !== e.type
						? [
								x(x({}, o), {
									end: t,
									spec: { attrs: { className: r + '-line-background start' } }
								}),
								x(x({}, o), { start: [Math.min(t[0] + 1, n[0]), t[1]] })
							]
						: null;
				}
				function Qt(e, t) {
					for (var n = []; e; ) {
						var r = e.type;
						('paragraph' !== r && 'codeBlock' !== r) ||
							n.push(T([Ae(e), Se(e) - 1], [De(e), Oe(e) + 1], t)),
							(e = e.next);
					}
					return n;
				}
				var Yt = {
						heading: function (e, t, n) {
							var r = e.level,
								e = e.headingType,
								o = [T(t, n, 'heading', { level: r })];
							return (
								o.push('atx' === e ? T(t, u(t, r), $t) : T(He(n, 0), n, 'heading', { seText: !0 })),
								o
							);
						},
						strong: Zt,
						emph: Zt,
						strike: Zt,
						link: function (e, t, n) {
							var r = e.lastChild,
								e = e.extendedAutolink,
								r = r ? Oe(r) + 1 : 2;
							return e ? [T(t, n, zt, { desc: !0 })] : Xt(t, n, t, r);
						},
						image: function (e, t, n) {
							var e = (e = e.lastChild) ? Oe(e) + 1 : 3,
								r = u(t, 1);
							return R([T(t, r, Vt)], Xt(t, n, r, e));
						},
						code: function (e, t, n) {
							var e = e.tickCount,
								r = u(t, e),
								e = u(n, -e);
							return [
								T(t, n, Ut),
								T(t, r, Ut, { start: !0 }),
								T(r, e, Ut, { marked: !0 }),
								T(e, n, Ut, { end: !0 })
							];
						},
						codeBlock: function (e, t, n, r) {
							var o = e.fenceOffset,
								i = e.fenceLength,
								a = e.fenceChar,
								s = e.info,
								l = e.infoPadding,
								e = e.parent,
								c = [T(He(t, 1), n, 'codeBlock')];
							return (
								a && c.push(T(t, u(t, o + i), $t)),
								s && c.push(T(u(t, i), u(t, i + l + s.length), Vt)),
								new RegExp('^(\\s{0,4})(' + a + '{' + i + ',})').test(r) &&
									c.push(T(He(n, 1), n, $t)),
								(o = Kt(e, t, n, 'code-block')) ? c.concat(o) : c
							);
						},
						blockQuote: function (e, t, n) {
							return (
								(t = e.parent && 'blockQuote' !== e.parent.type ? [T(t, n, 'blockQuote')] : []),
								e.firstChild &&
									((n = []),
									'paragraph' === e.firstChild.type
										? (n = (function (e) {
												for (var t = []; e; )
													t.push(T([Ae(e), Se(e)], [De(e), Oe(e) + 1], Wt)), (e = e.next);
												return t;
											})(e.firstChild.firstChild))
										: 'list' === e.firstChild.type && (n = Qt(e.firstChild, Wt)),
									(t = R(R([], t), n))),
								t
							);
						},
						item: function (e, t) {
							var n = (r = e.listData).padding,
								r = r.task,
								o = (function (e) {
									for (var t = 0; e.parent.parent && 'item' === e.parent.parent.type; )
										(e = e.parent.parent), (t += 1);
									return [_t, x(x({}, [{ odd: !0 }, { even: !0 }][t % 2]), { listStyle: !0 })];
								})(e),
								o = [T.apply(void 0, R([t, u(t, n)], o))];
							return (
								r &&
									(o.push(T(u(t, n), u(t, n + 3), 'taskDelimiter')),
									o.push(T(u(t, n + 1), u(t, n + 2), Vt))),
								o.concat(Qt(e.firstChild, Wt))
							);
						},
						customBlock: function (e, t, n) {
							var r = e.offset,
								o = e.syntaxLength,
								i = e.info,
								e = e.parent,
								r = r + o,
								a = [T(He(t, 1), n, 'customBlock')];
							return (
								a.push(T(t, u(t, r), $t)),
								i && a.push(T(u(t, r), u(t, o + i.length), Vt)),
								a.push(T(He(n, 1), n, $t)),
								(r = Kt(e, t, n, 'custom-block')) ? a.concat(r) : a
							);
						}
					},
					Jt = {
						thematicBreak: 'thematicBreak',
						table: 'table',
						tableCell: 'tableCell',
						htmlInline: 'html'
					};
				var en = {};
				function tn(e) {
					var r = e.schema,
						x = e.toastMark;
					return new m.Plugin({
						appendTransaction: function (e, t, n) {
							var y,
								o,
								i,
								a,
								m,
								g,
								v,
								b,
								w,
								e = e[0],
								k = n.tr;
							return (
								e.docChanged &&
									((y = []),
									e.getMeta('editResult').forEach(function (e) {
										var t,
											n,
											r,
											o,
											i = e.nodes,
											e = e.removedNodeRange;
										if (i.length) {
											y = y.concat(
												((f = i),
												(p = (p = k).doc),
												(d = f[0].sourcepos[0]),
												(f = K(f).sourcepos[1]),
												(h = [d[0], d[1]]),
												(m = [f[0], f[1] + 1]),
												(o = []),
												(function (e, t, n) {
													var r = [];
													en = {};
													for (var o = t[0] - 1; o < n[0]; o += 1) {
														var i = e.child(o),
															a = i.attrs.codeEnd,
															i = i.attrs.codeStart;
														if (i && a && !C(r, i)) {
															r.push(i), (a = Math.min(a, e.childCount));
															for (var a = i - 1, s = n[0], l = a; l < s; l += 1) en[l] = !0;
														}
													}
												})(p, d, f),
												o.push({ start: h, end: m }),
												o)
											);
											for (var a = 0, s = i; a < s.length; a++)
												for (var l = s[a].walker(), c = l.next(); c; ) {
													var u = c.node;
													c.entering &&
														(y = y.concat(
															((u = u),
															(r = n = void 0),
															(t = (t = x).getLineTexts()),
															(n = [Ae(u), Se(u)]),
															(r = [De(u), Oe(u) + 1]),
															null !=
															(u = (function (e, t, n, r) {
																var o = e.type;
																return At()(Yt[o])
																	? Yt[o](e, t, n, r)
																	: Jt[o]
																		? [T(t, n, Jt[o])]
																		: null;
															})(u, n, r, t[r[0] - 1]))
																? u
																: [])
														)),
														(c = l.next());
												}
										} else if (e)
											for (
												var p = k.doc.childCount - 1,
													d = e.line,
													f = d[0],
													h = d[1],
													m = Math.min(f, p),
													g = Math.min(h, p),
													v = m;
												v <= g;
												v += 1
											)
												en[v] = !0;
									}),
									(g = r),
									(n = y),
									(v = (m = k).doc),
									(b = g.nodes.paragraph),
									(w = Ft(v, v.childCount)),
									n.forEach(function (e) {
										var t = e.start,
											n = e.end,
											r = e.spec,
											e = e.lineBackground,
											o = Math.min(t[0], v.childCount) - 1,
											i = Math.min(n[0], v.childCount) - 1,
											a = v.child(o),
											s = v.child(i),
											l = w[o],
											c = w[i];
										if (((l += t[1] + Bt(a, t[1] - 1)), (c += n[1] + Bt(s, n[1] - 1)), r))
											if (e) {
												var a = m,
													u = v,
													t = b,
													s = { from: l, to: c, startIndex: o, endIndex: i },
													p = r.attrs;
												void 0 === p && (p = {});
												for (
													var n = s.startIndex, d = s.endIndex, e = s.from, s = s.to, f = !1, h = n;
													h <= d;
													h += 1
												)
													delete en[h],
														(f = (function (t, n, r) {
															return Object.keys(r).some(function (e) {
																return r[e] !== t.child(n).attrs[e];
															});
														})(u, h, p));
												f && a.setBlockType(e, s, t, p);
											} else m.addMark(l, c, g.mark(r.type, r.attrs));
										else m.removeMark(l, c);
									}),
									(o = m),
									(i = w),
									(a = b),
									Object.keys(en).forEach(function (e) {
										var t = Number(e),
											e = Math.min(Number(e) + 1, o.doc.childCount - 1),
											n = i[t],
											r = i[e] - 1;
										t === e && (r += 2), o.setBlockType(n, r, a);
									})),
								k.setMeta('widget', e.getMeta('widget'))
							);
						}
					});
				}
				var nn = [
					'taskList',
					'orderedList',
					'bulletList',
					'table',
					'strong',
					'emph',
					'strike',
					'heading',
					'thematicBreak',
					'blockQuote',
					'code',
					'codeBlock',
					'indent',
					'outdent'
				];
				function rn(e) {
					var n = { indent: { active: !1, disabled: !0 }, outdent: { active: !1, disabled: !0 } },
						r = !0,
						t = e,
						o = function (e) {
							t = (e = e).type;
							var t,
								e = Ie(e)
									? e.listData.task
										? 'taskList'
										: 'ordered' === e.listData.type
											? 'orderedList'
											: 'bulletList'
									: -1 !== t.indexOf('table')
										? 'table'
										: C(nn, t)
											? t
											: null;
							e &&
								('bulletList' === e || 'orderedList' === e
									? r &&
										((n[e] = { active: !0 }),
										(n.indent.disabled = !1),
										(n.outdent.disabled = !1),
										(r = !1))
									: (n[e] = { active: !0 }));
						},
						e = void 0;
					for (t = (e = void 0 === e ? !0 : e) ? t : t.parent; t && 'document' !== t.type; )
						o(t), (t = t.parent);
					return n;
				}
				r(sn, (on = e)),
					Object.defineProperty(sn.prototype, 'name', {
						get: function () {
							return 'doc';
						},
						enumerable: !1,
						configurable: !0
					}),
					Object.defineProperty(sn.prototype, 'schema', {
						get: function () {
							return { content: 'block+' };
						},
						enumerable: !1,
						configurable: !0
					});
				var on,
					an = sn;
				function sn() {
					return (null !== on && on.apply(this, arguments)) || this;
				}
				function ln() {}
				Object.defineProperty(ln.prototype, 'type', {
					get: function () {
						return 'mark';
					},
					enumerable: !1,
					configurable: !0
				}),
					(ln.prototype.setContext = function (e) {
						this.context = e;
					});
				n = ln;
				function cn(e, t) {
					return un(e, t - 1);
				}
				function un(e, t) {
					return e.child(t).textContent;
				}
				var pn,
					dn = /^\s*> ?/,
					fn =
						(r(hn, (pn = n)),
						Object.defineProperty(hn.prototype, 'name', {
							get: function () {
								return 'blockQuote';
							},
							enumerable: !1,
							configurable: !0
						}),
						Object.defineProperty(hn.prototype, 'schema', {
							get: function () {
								return {
									toDOM: function () {
										return ['span', { class: o('block-quote') }, 0];
									}
								};
							},
							enumerable: !1,
							configurable: !0
						}),
						(hn.prototype.createBlockQuoteText = function (e, t) {
							return t ? e.replace(dn, '').trim() : '> ' + e.trim();
						}),
						(hn.prototype.extendBlockQuote = function () {
							var c = this;
							return function (e, t) {
								var n = e.selection,
									r = e.doc,
									o = e.tr,
									e = e.schema,
									i = g(n),
									a = i.endFromOffset,
									s = i.endToOffset,
									l = i.endIndex,
									i = i.to,
									r = un(r, l);
								return (
									!!(dn.test(r) && a < i && n.empty) &&
									(!r.replace(dn, '').trim()
										? o.deleteRange(a, s).split(o.mapping.map(s))
										: Ne(o, s, (l = r.slice(i - a).trim()), y(e, c.createBlockQuoteText(l))),
									t(o),
									!0)
								);
							};
						}),
						(hn.prototype.commands = function () {
							var l = this;
							return function () {
								return function (e, t) {
									var n = e.selection,
										r = e.doc,
										n = g(n),
										o = n.startFromOffset,
										i = n.endToOffset,
										a = n.startIndex,
										n = n.endIndex,
										s = dn.test(un(r, a)),
										r = Me({
											state: e,
											startIndex: a,
											endIndex: n,
											from: o,
											createText: function (e) {
												return l.createBlockQuoteText(e, s);
											}
										});
									return t(r.setSelection(b(r, r.mapping.map(i)))), !0;
								};
							};
						}),
						(hn.prototype.keymaps = function () {
							var e = this.commands()();
							return { 'alt-q': e, 'alt-Q': e, Enter: this.extendBlockQuote() };
						}),
						hn);
				function hn() {
					return (null !== pn && pn.apply(this, arguments)) || this;
				}
				var mn = /(^\s*)([-*+] |[\d]+\. )/,
					gn = /(^\s*)([\d])+\.( \[[ xX]])? /,
					vn = /^(\s*)((\d+)([.)]\s(?:\[(?:x|\s)\]\s)?))(.*)/,
					yn = /(^\s*)([-*+]|[\d]+\.)( \[[ xX]])? /,
					bn = /^(\s*)([-*+]+(\s(?:\[(?:x|\s)\]\s)?))(.*)/,
					wn = /(^\s*)([-*+] |[\d]+\. )(\[[ xX]] )/,
					kn = /(^\s*)([-*+])( \[[ xX]]) /;
				function xn(e) {
					return gn.test(e) ? 'ordered' : 'bullet';
				}
				function Cn(e) {
					for (var t = 0; e && 'document' !== e.type; )
						'list' === e.type && (t += 1), (e = e.parent);
					return t;
				}
				function Tn(e, t, n, r) {
					for (var o = e.getLineTexts().length, i = [], a = t; r ? a < o : 1 < a; ) {
						var a = r ? a + 1 : a - 1,
							s = e.findFirstNodeAtLine(a),
							l = Cn(s);
						if (l === n) i.push({ line: a, depth: n, mdNode: s });
						else if (l < n) break;
					}
					return i;
				}
				function En(i, e, a, s) {
					void 0 === s && (s = 0);
					var l = Number.MAX_VALUE,
						c = 0;
					return {
						changedResults: e.map(function (e, t) {
							var n,
								r,
								e = e.line,
								o = ((l = Math.min(e - 1, l)), (c = Math.max(e - 1, c)), cn(i, e));
							return {
								text:
									'bullet' === a
										? ((n = o),
											mn.test(n)
												? ('bullet' === (r = xn(n)) && yn.test(n)
														? (n = n.replace(kn, '$1$2 '))
														: 'ordered' === r && (n = n.replace(gn, '$1* ')),
													n)
												: '* ' + n)
										: ((r = o),
											(n = t + 1 + s),
											mn.test(r)
												? ('bullet' === (o = xn(r)) || ('ordered' === o && yn.test(r))
														? (r = r.replace(yn, '$1' + n + '. '))
														: 'ordered' === o &&
															((o = vn.exec(r)[3]), Number(o) !== n) &&
															(r = r.replace(gn, '$1' + n + '. ')),
													r)
												: n + '. ' + r),
								line: e
							};
						}),
						firstIndex: l,
						lastIndex: c
					};
				}
				function Ln(e, t) {
					(r = (n = t).toastMark),
						(o = n.mdNode),
						(n = n.line),
						(i = Cn(o)),
						(a = Tn(r, n, i, !1).reverse()),
						(r = Tn(r, n, i, !0));
					var n,
						r,
						o,
						i,
						a = a.concat([{ line: n, depth: i, mdNode: o }]).concat(r);
					return En(t.doc, a, e);
				}
				var Mn = {
						bullet: function (e) {
							return Ln('bullet', e);
						},
						ordered: function (e) {
							return Ln('ordered', e);
						},
						task: function (e) {
							var t = e.mdNode,
								n = e.doc,
								e = e.line,
								n = cn(n, e);
							return (
								t.listData.task
									? (n = n.replace(wn, '$1$2'))
									: Ie(t) && (n = n.replace(mn, '$1$2[ ] ')),
								{ changedResults: [{ text: n, line: e }] }
							);
						}
					},
					Nn = {
						bullet: function (e) {
							var t = e.doc,
								e = e.line;
							return { changedResults: [{ text: '* ' + cn(t, e), line: e }] };
						},
						ordered: function (e) {
							for (
								var t = e.toastMark,
									n = e.doc,
									r = e.line,
									e = e.startLine,
									o = cn(n, r),
									i = 1,
									a = e,
									s = 0,
									l = e - 1;
								0 < l;
								--l
							) {
								var c = t.findFirstNodeAtLine(l),
									c = cn(n, l) && !!Be(c, Ie),
									u = vn.exec(cn(n, l));
								if (!u && !c) break;
								if (!u && c) s += 1;
								else {
									(c = u[1]), (u = u[3]);
									if (!c) {
										(i = Number(u)), (a = l);
										break;
									}
								}
							}
							return { changedResults: [{ text: i + r - a - s + '. ' + o, line: r }] };
						},
						task: function (e) {
							var t = e.doc,
								e = e.line;
							return { changedResults: [{ text: '* [ ] ' + cn(t, e), line: e }] };
						}
					},
					An = {
						bullet: function (e) {
							var t = e.line,
								e = cn(e.doc, t),
								t = bn.exec(e);
							return { listSyntax: '' + t[1] + t[2] };
						},
						ordered: function (e) {
							var t = e.toastMark,
								n = e.line,
								r = e.mdNode,
								o = e.doc,
								e = Cn(r),
								r = cn(o, n),
								r = vn.exec(r),
								i = r[1],
								a = r[3],
								r = r[4],
								a = Number(a) + 1,
								r = '' + i + a + r,
								t = Tn(t, n, e, !0).filter(function (e) {
									var t = vn.exec(cn(o, e.line));
									return t && t[1].length === i.length && !!Be(e.mdNode, Re);
								});
							return x({ listSyntax: r }, En(o, t, 'ordered', a));
						}
					};
				var Dn = /(^\s{1,4})(.*)/;
				function Sn(e, t, n) {
					return e < t || mn.test(n) || dn.test(n);
				}
				function On(e, t, n) {
					var n = n.$from,
						e = (n = 0 === n.depth ? e.resolve(n.pos - 1) : n).node(1),
						r = n.start(1),
						o = e.content.size;
					return e.rangeHasMark(0, o, t.marks.table) && n.pos - r !== o && n.pos !== r;
				}
				function In(e, t) {
					var n = t.from,
						r = t.to;
					if ('indent' === t.type) (n += 4), (r += 4 * (t.lineLen + 1));
					else {
						var o = t.spaceLenList;
						n -= o[0];
						for (var i = 0; i < o.length; i += 1) r -= o[i];
					}
					return b(e, n, r);
				}
				r(Bn, (Rn = e)),
					Object.defineProperty(Bn.prototype, 'name', {
						get: function () {
							return 'paragraph';
						},
						enumerable: !1,
						configurable: !0
					}),
					Object.defineProperty(Bn.prototype, 'schema', {
						get: function () {
							return {
								content: 'inline*',
								attrs: {
									className: { default: null },
									codeStart: { default: null },
									codeEnd: { default: null }
								},
								selectable: !1,
								group: 'block',
								parseDOM: [{ tag: 'div' }],
								toDOM: function (e) {
									e = e.attrs;
									return e.className ? ['div', { class: o(e.className) }, 0] : ['div', 0];
								}
							};
						},
						enumerable: !1,
						configurable: !0
					}),
					(Bn.prototype.reorderList = function (e, t) {
						for (
							var n,
								r = this.context,
								o = r.view,
								i = r.toastMark,
								r = r.schema,
								a = o.state,
								s = a.tr,
								l = a.selection,
								c = a.doc,
								u = i.findFirstNodeAtLine(e),
								p = u;
							u && (!Ie((n = u)) || 'ordered' === n.listData.type) && 'document' !== u.parent.type;

						)
							if (Re((u = u.parent))) {
								p = u;
								break;
							}
						p && (e = p.sourcepos[0][0]);
						for (
							var a = vn.exec(cn(c, e)),
								i = a[1],
								a = a[3],
								i = i.length,
								r = (function e(t, n, r, o, i) {
									for (var a = [], s = cn(t, r), l = vn.exec(s); l; ) {
										var c = l[1],
											u = l[4],
											p = l[5],
											d = c.length;
										if (
											(d === i
												? (a.push(y(n, '' + c + o + u + p)), (o += 1), (r += 1))
												: i < d && ((r = (c = e(t, n, r, 1, d)).line), (a = a.concat(c.nodes))),
											d < i || r > t.childCount)
										)
											break;
										(s = cn(t, r)), (l = vn.exec(s));
									}
									return { nodes: a, line: r };
								})(c, r, e, Number(a), i),
								a = r.line,
								d = r.nodes,
								f = ((t = Math.max(t, a - 1)), jt(c, e - 1).startOffset),
								h = e - 1;
							h <= t - 1;
							h += 1
						) {
							var m = c.child(h),
								g = m.nodeSize,
								m = m.content,
								v = s.mapping.map(f),
								m = v + m.size;
							s.replaceWith(v, m, d[h - e + 1]), (f += g);
						}
						i = b(s, l.from, l.to);
						o.dispatch(s.setSelection(i));
					}),
					(Bn.prototype.indent = function (u) {
						var p = this;
						return (
							void 0 === u && (u = !1),
							function () {
								return function (e, t) {
									var n = e.schema,
										r = e.selection,
										o = e.doc,
										i = g(r),
										a = i.from,
										s = i.to,
										l = i.startFromOffset,
										c = i.startIndex,
										i = i.endIndex;
									return !(
										(u && On(o, n, r)) ||
										((r = un(o, c)),
										(u && Sn(a, s, r)) || (!u && mn.test(r))
											? (t(
													(o = Me({
														state: e,
														from: l,
														startIndex: c,
														endIndex: i,
														createText: function (e) {
															return '    ' + e;
														}
													})).setSelection(
														In(o, { type: 'indent', from: a, to: s, lineLen: i - c })
													)
												),
												vn.test(r) && p.reorderList(c + 1, i + 1))
											: u && t(e.tr.insert(s, y(n, '    '))),
										0)
									);
								};
							}
						);
					}),
					(Bn.prototype.outdent = function (p) {
						var d = this;
						return (
							void 0 === p && (p = !1),
							function () {
								return function (e, t) {
									var n,
										r = e.selection,
										o = e.doc,
										i = e.schema,
										a = g(r),
										s = a.from,
										l = a.to,
										c = a.startFromOffset,
										u = a.startIndex,
										a = a.endIndex;
									return !(
										(p && On(o, i, r)) ||
										((i = un(o, u)),
										(p && Sn(s, l, i)) || (!p && mn.test(i))
											? ((n = []),
												t(
													(r = Me({
														state: e,
														from: c,
														startIndex: u,
														endIndex: a,
														createText: function (e) {
															var t = Dn.exec(e);
															return n.push(t ? t[1].length : 0), e.replace(Dn, '$2');
														}
													})).setSelection(
														In(r, { type: 'outdent', from: s, to: l, spaceLenList: n })
													)
												),
												vn.test(i) && d.reorderList(u + 1, a + 1))
											: p &&
												((r = (o = i.slice(0, l - c)).replace(/\s{1,4}$/, '')),
												(s = l - (o.length - r.length)),
												t(e.tr.delete(s, l))),
										0)
									);
								};
							}
						);
					}),
					(Bn.prototype.deleteLines = function () {
						var a = this;
						return function (e, t) {
							var n = a.context.view,
								r = g(e.selection),
								o = r.startFromOffset,
								i = r.endToOffset;
							return (0, s.chainCommands)(function () {
								return t(e.tr.deleteRange(o, i)), !0;
							}, s.joinForward)(e, t, n);
						};
					}),
					(Bn.prototype.moveDown = function () {
						return function (e, t) {
							var n = e.doc,
								r = e.tr,
								o = e.selection,
								e = e.schema,
								o = g(o),
								i = o.startFromOffset,
								a = o.endToOffset,
								o = o.endIndex;
							return (
								o < n.content.childCount - 1 &&
								((o = (n = n.child(o + 1)).nodeSize),
								(n = n.textContent),
								r
									.delete(a, a + o)
									.split(i)
									.insert(r.mapping.map(i) - 2, y(e, n)),
								t(r),
								!0)
							);
						};
					}),
					(Bn.prototype.moveUp = function () {
						return function (e, t) {
							var n = e.tr,
								r = e.doc,
								o = e.selection,
								e = e.schema,
								o = g(o),
								i = o.startFromOffset,
								a = o.endToOffset,
								o = o.startIndex;
							return (
								0 < o &&
								((o = (r = r.child(o - 1)).nodeSize),
								(r = r.textContent),
								n
									.delete(i - o, i)
									.split(n.mapping.map(a))
									.insert(n.mapping.map(a), y(e, r)),
								t(n),
								!0)
							);
						};
					}),
					(Bn.prototype.commands = function () {
						return { indent: this.indent(), outdent: this.outdent() };
					}),
					(Bn.prototype.keymaps = function () {
						return {
							Tab: this.indent(!0)(),
							'Shift-Tab': this.outdent(!0)(),
							'Mod-d': this.deleteLines(),
							'Mod-D': this.deleteLines(),
							'Alt-ArrowUp': this.moveUp(),
							'Alt-ArrowDown': this.moveDown()
						};
					});
				var Rn,
					Pn = Bn;
				function Bn() {
					return (null !== Rn && Rn.apply(this, arguments)) || this;
				}
				r(qn, (Hn = e)),
					Object.defineProperty(qn.prototype, 'name', {
						get: function () {
							return 'text';
						},
						enumerable: !1,
						configurable: !0
					}),
					Object.defineProperty(qn.prototype, 'schema', {
						get: function () {
							return { group: 'inline' };
						},
						enumerable: !1,
						configurable: !0
					});
				var Hn,
					Fn = qn;
				function qn() {
					return (null !== Hn && Hn.apply(this, arguments)) || this;
				}
				var jn,
					_n = /^#{1,6}\s/,
					zn =
						(r(Un, (jn = n)),
						Object.defineProperty(Un.prototype, 'name', {
							get: function () {
								return 'heading';
							},
							enumerable: !1,
							configurable: !0
						}),
						Object.defineProperty(Un.prototype, 'schema', {
							get: function () {
								return {
									attrs: { level: { default: 1 }, seText: { default: !1 } },
									toDOM: function (e) {
										var e = e.attrs,
											t = 'heading|heading' + e.level;
										return (
											e.seText && (t += '|delimiter|setext'),
											['span', { class: o.apply(void 0, t.split('|')) }, 0]
										);
									}
								};
							},
							enumerable: !1,
							configurable: !0
						}),
						(Un.prototype.createHeadingText = function (e, t, n) {
							for (var t = t.replace(n, '').trim(), r = ''; 0 < e; ) (r += '#'), --e;
							return r + ' ' + t;
						}),
						(Un.prototype.commands = function () {
							var s = this;
							return function (a) {
								return function (e, t) {
									var n = a.level,
										r = g(e.selection),
										o = r.startFromOffset,
										i = r.endToOffset,
										e = Me({
											state: e,
											from: o,
											startIndex: r.startIndex,
											endIndex: r.endIndex,
											createText: function (e) {
												var t = e.match(_n),
													t = t ? t[0] : '';
												return s.createHeadingText(n, e, t);
											}
										});
									return t(e.setSelection(b(e, e.mapping.map(i)))), !0;
								};
							};
						}),
						Un);
				function Un() {
					return (null !== jn && jn.apply(this, arguments)) || this;
				}
				r(Wn, (Vn = n)),
					Object.defineProperty(Wn.prototype, 'name', {
						get: function () {
							return 'codeBlock';
						},
						enumerable: !1,
						configurable: !0
					}),
					Object.defineProperty(Wn.prototype, 'schema', {
						get: function () {
							return {
								toDOM: function () {
									return ['span', { class: o('code-block') }, 0];
								}
							};
						},
						enumerable: !1,
						configurable: !0
					}),
					(Wn.prototype.commands = function () {
						return function () {
							return function (e, t) {
								var n = e.selection,
									r = e.schema,
									e = e.tr,
									n = g(n),
									o = n.startFromOffset,
									n = n.endToOffset,
									r = y(r, '```');
								return (
									e.insert(o, r).split(o + '```'.length),
									e.split(e.mapping.map(n)).insert(e.mapping.map(n), r),
									t(e.setSelection(b(e, e.mapping.map(n) - ('```'.length + 2)))),
									!0
								);
							};
						};
					}),
					(Wn.prototype.keepIndentation = function () {
						var u = this;
						return function (e, t) {
							var n = e.selection,
								r = e.tr,
								o = e.doc,
								e = e.schema,
								i = u.context.toastMark,
								n = g(n),
								a = n.startFromOffset,
								s = n.endToOffset,
								l = n.endIndex,
								c = n.from,
								n = n.to,
								o = un(o, l);
							if (c === n && o.trim()) {
								var c = o.match(/^\s+/),
									i = i.findFirstNodeAtLine(l + 1);
								if ((l = i) && 'codeBlock' === l.type && c)
									return (i = c[0]), Ne(r, s, (l = o.slice(n - a)), y(e, i + l)), t(r), !0;
							}
							return !1;
						};
					}),
					(Wn.prototype.keymaps = function () {
						var e = this.commands()();
						return { 'Shift-Mod-p': e, 'Shift-Mod-P': e, Enter: this.keepIndentation() };
					});
				var Vn,
					$n = Wn;
				function Wn() {
					return (null !== Vn && Vn.apply(this, arguments)) || this;
				}
				var Gn = /\||\s/g;
				function Zn(e, t) {
					for (var n = '|', r = 0; r < e; r += 1) n += t ? ' --- |' : '  |';
					return n;
				}
				r(Qn, (Xn = n)),
					Object.defineProperty(Qn.prototype, 'name', {
						get: function () {
							return 'table';
						},
						enumerable: !1,
						configurable: !0
					}),
					Object.defineProperty(Qn.prototype, 'schema', {
						get: function () {
							return {
								toDOM: function () {
									return ['span', { class: o('table') }, 0];
								}
							};
						},
						enumerable: !1,
						configurable: !0
					}),
					(Qn.prototype.extendTable = function () {
						var l = this;
						return function (e, t) {
							var n,
								r,
								o,
								i = e.selection,
								a = e.doc,
								s = e.tr,
								e = e.schema;
							return (
								!!i.empty &&
								((n = (i = g(i)).endFromOffset),
								(r = i.endToOffset),
								(o = i.endIndex),
								(i = i.to),
								(a = un(a, o)),
								!!(o = Be(l.context.toastMark.findNodeAtPosition([o + 1, i - n + 1]), function (e) {
									return (
										Pe(e) &&
										('tableDelimRow' === e.parent.type || 'tableBody' === e.parent.parent.type)
									);
								}))) &&
								((i = !a.replace(Gn, '').trim()),
								(a = Zn(o.parent.parent.parent.columns.length)),
								i
									? s.deleteRange(n, r).split(s.mapping.map(r))
									: s
											.split(r)
											.insert(s.mapping.map(r), y(e, a))
											.setSelection(b(s, s.mapping.map(r) - 2)),
								t(s),
								!0)
							);
						};
					}),
					(Qn.prototype.moveTableCell = function (c) {
						var u = this;
						return function (e, t) {
							var n,
								r,
								o,
								i,
								a = e.selection,
								e = e.tr,
								a = g(a),
								s = a.endFromOffset,
								l = a.endIndex,
								a = a.to,
								l = Be(u.context.toastMark.findNodeAtPosition([l + 1, a - s]), Pe);
							return (
								!!l &&
								((a = l.parent),
								(o = (n = c
									? { type: 'next', parentType: 'tableHead', childType: 'firstChild' }
									: { type: 'prev', parentType: 'tableBody', childType: 'lastChild' }).childType),
								(i = Oe(l)),
								l[(r = n.type)]
									? (i = Oe(l[r]) - 1)
									: ((l = a[r] || a.parent.type !== n.parentType ? a[r] : a.parent[r][o]),
										'next' === r
											? (i += (l ? Oe(l[o]) : 0) + 2)
											: 'prev' === r && (i = l ? -4 : 0)),
								t(e.setSelection(b(e, s + i))),
								!0)
							);
						};
					}),
					(Qn.prototype.addTable = function () {
						return function (s) {
							return function (e, t) {
								var n = e.selection,
									r = e.tr,
									o = e.schema,
									e = s.columnCount,
									i = s.rowCount,
									a = g(n).endToOffset,
									n = [Zn((n = e)), Zn(n, !0)],
									e = (function (e, t) {
										for (var n = [], r = 0; r < t; r += 1) n.push(Zn(e));
										return n;
									})(e, i - 1);
								return (
									R(R([], n), e).forEach(function (e) {
										r.split(r.mapping.map(a)).insert(r.mapping.map(a), y(o, e));
									}),
									t(r.setSelection(b(r, a + 4))),
									!0
								);
							};
						};
					}),
					(Qn.prototype.commands = function () {
						return { addTable: this.addTable() };
					}),
					(Qn.prototype.keymaps = function () {
						return {
							Enter: this.extendTable(),
							Tab: this.moveTableCell(!0),
							'Shift-Tab': this.moveTableCell(!1)
						};
					});
				var Xn,
					Kn = Qn;
				function Qn() {
					return (null !== Xn && Xn.apply(this, arguments)) || this;
				}
				r(er, (Yn = n)),
					Object.defineProperty(er.prototype, 'name', {
						get: function () {
							return 'thematicBreak';
						},
						enumerable: !1,
						configurable: !0
					}),
					Object.defineProperty(er.prototype, 'schema', {
						get: function () {
							return {
								toDOM: function () {
									return ['span', { class: o('thematic-break') }, 0];
								}
							};
						},
						enumerable: !1,
						configurable: !0
					}),
					(er.prototype.hr = function () {
						return function () {
							return function (e, t) {
								var n = e.selection,
									r = e.schema,
									e = e.tr,
									n = g(n),
									o = n.from,
									i = n.to,
									n = n.endToOffset,
									r = y(r, '***');
								return (
									e
										.split(o)
										.replaceWith(e.mapping.map(o), e.mapping.map(i), r)
										.split(e.mapping.map(i))
										.setSelection(b(e, e.mapping.map(n))),
									t(e),
									!0
								);
							};
						};
					}),
					(er.prototype.commands = function () {
						return { hr: this.hr() };
					}),
					(er.prototype.keymaps = function () {
						var e = this.hr()();
						return { 'Mod-l': e, 'Mod-L': e };
					});
				var Yn,
					Jn = er;
				function er() {
					return (null !== Yn && Yn.apply(this, arguments)) || this;
				}
				r(rr, (tr = n)),
					Object.defineProperty(rr.prototype, 'name', {
						get: function () {
							return 'listItem';
						},
						enumerable: !1,
						configurable: !0
					}),
					Object.defineProperty(rr.prototype, 'schema', {
						get: function () {
							return {
								attrs: { odd: { default: !1 }, even: { default: !1 }, listStyle: { default: !1 } },
								toDOM: function (e) {
									var e = e.attrs,
										t = e.odd,
										n = e.even,
										r = 'list-item';
									return (
										e.listStyle && (r += '|list-item-style'),
										t && (r += '|list-item-odd'),
										n && (r += '|list-item-even'),
										['span', { class: o.apply(void 0, r.split('|')) }, 0]
									);
								}
							};
						},
						enumerable: !1,
						configurable: !0
					}),
					(rr.prototype.extendList = function () {
						var d = this;
						return function (e, t) {
							var n = e.selection,
								r = e.doc,
								o = e.schema,
								e = e.tr,
								i = d.context.toastMark,
								a = g(n),
								s = a.to,
								l = a.startFromOffset,
								c = a.endFromOffset,
								u = a.endIndex,
								a = a.endToOffset,
								p = un(r, u);
							return !(
								!mn.test(p) ||
								n.from === l ||
								!n.empty ||
								(!p.replace(yn, '').trim()
									? e.deleteRange(c, a).split(e.mapping.map(a))
									: ((l = xn(p)),
										(n = i.findFirstNodeAtLine(u + 1)),
										(p = p.slice(s - c)),
										(l = (c = An[l]({ toastMark: i, mdNode: n, doc: r, line: u + 1 })).listSyntax),
										null != (i = c.changedResults) && i.length
											? (e.split(s),
												i.unshift({ text: l + p, line: u + 1 }),
												d.changeToListPerLine(e, i, {
													from: s,
													startLine: i[0].line,
													endLine: K(i).line
												}),
												(n = e.mapping.map(a) - p.length),
												e.setSelection(b(e, n)))
											: Ne(e, a, p, y(o, l + p))),
								t(e),
								0)
							);
						};
					}),
					(rr.prototype.toList = function (f) {
						var h = this;
						return function () {
							return function (e, t) {
								for (
									var n = e.doc,
										r = e.tr,
										e = e.selection,
										o = h.context.toastMark,
										e = g(e),
										i = e.startIndex + 1,
										a = e.endIndex + 1,
										s = e.endToOffset,
										l = [],
										c = i;
									c <= a;
									c += 1
								) {
									var u,
										p,
										d = o.findFirstNodeAtLine(c);
									if (
										d &&
										((u = c), (p = void 0), (p = d.type), u <= d.sourcepos[0][0]) &&
										('codeBlock' === p || 'heading' === p || p.match('table'))
									)
										break;
									-1 === l.indexOf(c) &&
										((u = (Ie(d) ? Mn : Nn)[f]({
											toastMark: o,
											mdNode: d,
											doc: n,
											line: c,
											startLine: i
										}).changedResults),
										(p = h.changeToListPerLine(r, u, {
											from: jt(n, u[0].line - 1).startOffset,
											startLine: u[0].line,
											endLine: K(u).line,
											indexDiff: 1
										})),
										(s = Math.max(p, s)),
										u) &&
										(l = l.concat(
											u.map(function (e) {
												return e.line;
											})
										));
								}
								return t(r.setSelection(b(r, r.mapping.map(s)))), !0;
							};
						};
					}),
					(rr.prototype.changeToListPerLine = function (a, s, e) {
						for (
							var l = e.from,
								t = e.startLine,
								n = e.endLine,
								e = e.indexDiff,
								c = void 0 === e ? 0 : e,
								u = 0,
								p = this,
								r = t - c;
							r <= n - c;
							r += 1
						)
							!(function (t) {
								var e = a.doc.child(t),
									n = e.nodeSize,
									e = e.content,
									r = a.mapping.map(l),
									o = r + e.size,
									i = s.filter(function (e) {
										return e.line - c === t;
									})[0];
								i &&
									(a.replaceWith(r, o, y(p.context.schema, i.text)), (u = Math.max(u, l + e.size))),
									(l += n);
							})(r);
						return u;
					}),
					(rr.prototype.toggleTask = function () {
						var h = this;
						return function (e, t) {
							for (
								var n = e.selection,
									r = e.tr,
									o = e.doc,
									i = e.schema,
									a = h.context.toastMark,
									e = g(n),
									n = e.startIndex,
									s = e.endIndex,
									l = null,
									c = n;
								c <= s;
								c += 1
							) {
								var u,
									p,
									d,
									f = a.findFirstNodeAtLine(c + 1);
								Ie(f) &&
									f.listData.task &&
									((p = (u = f.listData).checked),
									(u = u.padding),
									(p = p ? ' ' : 'x'),
									(d = jt(o, (f = f.sourcepos[0])[0] - 1).startOffset),
									(d += f[1] + u),
									(l = r.replaceWith(d, d + 1, i.text(p))));
							}
							return !!l && (t(l), !0);
						};
					}),
					(rr.prototype.commands = function () {
						return {
							bulletList: this.toList('bullet'),
							orderedList: this.toList('ordered'),
							taskList: this.toList('task')
						};
					}),
					(rr.prototype.keymaps = function () {
						var e = this.toList('bullet')(),
							t = this.toList('ordered')(),
							n = this.toList('task')(),
							r = this.toggleTask();
						return {
							'Mod-u': e,
							'Mod-U': e,
							'Mod-o': t,
							'Mod-O': t,
							'alt-t': n,
							'alt-T': n,
							'Shift-Ctrl-x': r,
							'Shift-Ctrl-X': r,
							Enter: this.extendList()
						};
					});
				var tr,
					nr = rr;
				function rr() {
					return (null !== tr && tr.apply(this, arguments)) || this;
				}
				function or(d, f) {
					return function () {
						return function (e, t) {
							var n = e.tr,
								e = e.selection,
								r = At()(d)
									? d
									: function (e) {
											return d.test(e);
										},
								o = f.length,
								i = n.doc,
								a = Rt(e),
								s = a[0],
								a = a[1],
								l = Math.max(s - o, 1),
								c = Math.min(a + o, i.content.size - 1),
								u = e.content(),
								u = u.content.textBetween(0, u.content.size, '\n'),
								p = i.textBetween(l, s, '\n'),
								i = i.textBetween(a, c, '\n'),
								u = '' + p + u + i;
							return (
								p && i && r(u)
									? n.delete(c - o, c).delete(l, l + o)
									: (n.insertText(f, a).insertText(f, s),
										(p = e.empty ? b(n, s + o) : b(n, s + o, a + o)),
										n.setSelection(p)),
								t(n),
								!0
							);
						};
					};
				}
				var ir,
					ar = /^(\*{2}|_{2}).*([\s\S]*)\1$/m,
					sr =
						(r(lr, (ir = n)),
						Object.defineProperty(lr.prototype, 'name', {
							get: function () {
								return 'strong';
							},
							enumerable: !1,
							configurable: !0
						}),
						Object.defineProperty(lr.prototype, 'schema', {
							get: function () {
								return {
									toDOM: function () {
										return ['span', { class: o('strong') }, 0];
									}
								};
							},
							enumerable: !1,
							configurable: !0
						}),
						(lr.prototype.bold = function () {
							return or(ar, '**');
						}),
						(lr.prototype.commands = function () {
							return { bold: this.bold() };
						}),
						(lr.prototype.keymaps = function () {
							var e = this.bold()();
							return { 'Mod-b': e, 'Mod-B': e };
						}),
						lr);
				function lr() {
					return (null !== ir && ir.apply(this, arguments)) || this;
				}
				var cr,
					ur = /^(~{2}).*([\s\S]*)\1$/m,
					pr =
						(r(dr, (cr = n)),
						Object.defineProperty(dr.prototype, 'name', {
							get: function () {
								return 'strike';
							},
							enumerable: !1,
							configurable: !0
						}),
						Object.defineProperty(dr.prototype, 'schema', {
							get: function () {
								return {
									toDOM: function () {
										return ['span', { class: o('strike') }, 0];
									}
								};
							},
							enumerable: !1,
							configurable: !0
						}),
						(dr.prototype.commands = function () {
							return or(ur, '~~');
						}),
						(dr.prototype.keymaps = function () {
							var e = this.commands()();
							return { 'Mod-s': e, 'Mod-S': e };
						}),
						dr);
				function dr() {
					return (null !== cr && cr.apply(this, arguments)) || this;
				}
				var fr,
					hr = /^(\*|_).*([\s\S]*)\1$/m,
					mr =
						(r(gr, (fr = n)),
						Object.defineProperty(gr.prototype, 'name', {
							get: function () {
								return 'emph';
							},
							enumerable: !1,
							configurable: !0
						}),
						Object.defineProperty(gr.prototype, 'schema', {
							get: function () {
								return {
									toDOM: function () {
										return ['span', { class: o('emph') }, 0];
									}
								};
							},
							enumerable: !1,
							configurable: !0
						}),
						(gr.prototype.italic = function () {
							return or(hr, '*');
						}),
						(gr.prototype.commands = function () {
							return { italic: this.italic() };
						}),
						(gr.prototype.keymaps = function () {
							var e = this.italic()();
							return { 'Mod-i': e, 'Mod-I': e };
						}),
						gr);
				function gr() {
					return (null !== fr && fr.apply(this, arguments)) || this;
				}
				var vr,
					yr = /^(`).*([\s\S]*)\1$/m,
					br =
						(r(wr, (vr = n)),
						Object.defineProperty(wr.prototype, 'name', {
							get: function () {
								return 'code';
							},
							enumerable: !1,
							configurable: !0
						}),
						Object.defineProperty(wr.prototype, 'schema', {
							get: function () {
								return {
									attrs: { start: { default: !1 }, end: { default: !1 }, marked: { default: !1 } },
									toDOM: function (e) {
										var e = e.attrs,
											t = 'code';
										return (
											e.start && (t += '|delimiter|start'),
											e.end && (t += '|delimiter|end'),
											e.marked && (t += '|marked-text'),
											['span', { class: o.apply(void 0, t.split('|')) }, 0]
										);
									}
								};
							},
							enumerable: !1,
							configurable: !0
						}),
						(wr.prototype.commands = function () {
							return or(yr, '`');
						}),
						(wr.prototype.keymaps = function () {
							var e = this.commands()();
							return { 'Shift-Mod-c': e, 'Shift-Mod-C': e };
						}),
						wr);
				function wr() {
					return (null !== vr && vr.apply(this, arguments)) || this;
				}
				r(Cr, (kr = n)),
					Object.defineProperty(Cr.prototype, 'name', {
						get: function () {
							return 'link';
						},
						enumerable: !1,
						configurable: !0
					}),
					Object.defineProperty(Cr.prototype, 'schema', {
						get: function () {
							return {
								attrs: { url: { default: !1 }, desc: { default: !1 } },
								toDOM: function (e) {
									var e = e.attrs,
										t = 'link';
									return (
										e.url && (t += '|link-url|marked-text'),
										e.desc && (t += '|link-desc|marked-text'),
										['span', { class: o.apply(void 0, t.split('|')) }, 0]
									);
								}
							};
						},
						enumerable: !1,
						configurable: !0
					}),
					(Cr.prototype.addLinkOrImage = function (p) {
						return function (u) {
							return function (e, t) {
								var n = e.selection,
									r = e.tr,
									e = e.schema,
									n = Rt(n),
									o = n[0],
									n = n[1],
									i = u.linkText,
									a = u.altText,
									s = u.linkUrl,
									l = u.imageUrl,
									c = '';
								return (
									'image' === p && ((i = a), (s = l), (c = '!')),
									(i = ce(i)),
									t(r.replaceWith(o, n, y(e, (c += '[' + i + '](' + s + ')')))),
									!0
								);
							};
						};
					}),
					(Cr.prototype.commands = function () {
						return { addImage: this.addLinkOrImage('image'), addLink: this.addLinkOrImage('link') };
					});
				var kr,
					xr = Cr;
				function Cr() {
					return (null !== kr && kr.apply(this, arguments)) || this;
				}
				r(Lr, (Tr = n)),
					Object.defineProperty(Lr.prototype, 'name', {
						get: function () {
							return 'taskDelimiter';
						},
						enumerable: !1,
						configurable: !0
					}),
					Object.defineProperty(Lr.prototype, 'schema', {
						get: function () {
							return {
								toDOM: function () {
									return ['span', { class: o('delimiter', 'list-item') }, 0];
								}
							};
						},
						enumerable: !1,
						configurable: !0
					});
				var Tr,
					Er = Lr;
				function Lr() {
					return (null !== Tr && Tr.apply(this, arguments)) || this;
				}
				r(Ar, (Mr = n)),
					Object.defineProperty(Ar.prototype, 'name', {
						get: function () {
							return 'delimiter';
						},
						enumerable: !1,
						configurable: !0
					}),
					Object.defineProperty(Ar.prototype, 'schema', {
						get: function () {
							return {
								toDOM: function () {
									return ['span', { class: o('delimiter') }, 0];
								}
							};
						},
						enumerable: !1,
						configurable: !0
					});
				var Mr,
					Nr = Ar;
				function Ar() {
					return (null !== Mr && Mr.apply(this, arguments)) || this;
				}
				r(Or, (Dr = n)),
					Object.defineProperty(Or.prototype, 'name', {
						get: function () {
							return 'meta';
						},
						enumerable: !1,
						configurable: !0
					}),
					Object.defineProperty(Or.prototype, 'schema', {
						get: function () {
							return {
								toDOM: function () {
									return ['span', { class: o('meta') }, 0];
								}
							};
						},
						enumerable: !1,
						configurable: !0
					});
				var Dr,
					Sr = Or;
				function Or() {
					return (null !== Dr && Dr.apply(this, arguments)) || this;
				}
				r(Pr, (Ir = n)),
					Object.defineProperty(Pr.prototype, 'name', {
						get: function () {
							return 'markedText';
						},
						enumerable: !1,
						configurable: !0
					}),
					Object.defineProperty(Pr.prototype, 'schema', {
						get: function () {
							return {
								toDOM: function () {
									return ['span', { class: o('marked-text') }, 0];
								}
							};
						},
						enumerable: !1,
						configurable: !0
					});
				var Ir,
					Rr = Pr;
				function Pr() {
					return (null !== Ir && Ir.apply(this, arguments)) || this;
				}
				r(Fr, (Br = n)),
					Object.defineProperty(Fr.prototype, 'name', {
						get: function () {
							return 'tableCell';
						},
						enumerable: !1,
						configurable: !0
					}),
					Object.defineProperty(Fr.prototype, 'schema', {
						get: function () {
							return {
								toDOM: function () {
									return ['span', { class: o('table-cell') }, 0];
								}
							};
						},
						enumerable: !1,
						configurable: !0
					});
				var Br,
					Hr = Fr;
				function Fr() {
					return (null !== Br && Br.apply(this, arguments)) || this;
				}
				r(_r, (qr = n)),
					Object.defineProperty(_r.prototype, 'name', {
						get: function () {
							return 'html';
						},
						enumerable: !1,
						configurable: !0
					}),
					Object.defineProperty(_r.prototype, 'schema', {
						get: function () {
							return {
								toDOM: function () {
									return ['span', { class: o('html') }, 0];
								}
							};
						},
						enumerable: !1,
						configurable: !0
					});
				var qr,
					jr = _r;
				function _r() {
					return (null !== qr && qr.apply(this, arguments)) || this;
				}
				r(Vr, (zr = n)),
					Object.defineProperty(Vr.prototype, 'name', {
						get: function () {
							return 'customBlock';
						},
						enumerable: !1,
						configurable: !0
					}),
					Object.defineProperty(Vr.prototype, 'schema', {
						get: function () {
							return {
								toDOM: function () {
									return ['span', { class: o('custom-block') }, 0];
								}
							};
						},
						enumerable: !1,
						configurable: !0
					}),
					(Vr.prototype.commands = function () {
						return function (s) {
							return function (e, t) {
								var n,
									r,
									o = e.selection,
									i = e.schema,
									e = e.tr,
									o = g(o),
									a = o.startFromOffset,
									o = o.endToOffset;
								return !(
									null == s ||
									!s.info ||
									((r = y(i, (n = '$$' + s.info))),
									(i = y(i, '$$')),
									e.insert(a, r).split(a + n.length),
									e.split(e.mapping.map(o)).insert(e.mapping.map(o), i),
									t(e.setSelection(b(e, e.mapping.map(o) - ('$$'.length + 2)))),
									0)
								);
							};
						};
					});
				var zr,
					Ur = Vr;
				function Vr() {
					return (null !== zr && zr.apply(this, arguments)) || this;
				}
				var $r = /x|backspace/i,
					Wr = /^\[(\s*)(x?)(\s*)\](?:\s+)/i;
				var Gr,
					Zr = /\r\n|\n|\r/;
				function i(e, t) {
					var n = Gr.call(this, e) || this,
						e = t.toastMark,
						r = t.useCommandShortcut,
						r = void 0 === r || r,
						t = t.mdPlugins,
						t = void 0 === t ? [] : t;
					return (
						(n.editorType = 'markdown'),
						n.el.classList.add('md-mode'),
						(n.toastMark = e),
						(n.extraPlugins = t),
						(n.specs = n.createSpecs()),
						(n.schema = n.createSchema()),
						(n.context = n.createContext()),
						(n.keymaps = n.createKeymaps(r)),
						(n.view = n.createView()),
						(n.commands = n.createCommands()),
						n.specs.setContext(x(x({}, n.context), { view: n.view })),
						n.createClipboard(),
						n.eventEmitter.listen('changePreviewTabWrite', function (e) {
							return n.toggleActive(!0, e);
						}),
						n.eventEmitter.listen('changePreviewTabPreview', function () {
							return n.toggleActive(!1);
						}),
						n.initEvent(),
						n
					);
				}
				r(i, (Gr = Nt)),
					(i.prototype.toggleActive = function (e, t) {
						ct(this.el, 'active', e), e ? t || this.focus() : this.blur();
					}),
					(i.prototype.createClipboard = function () {
						var n = this;
						(this.clipboard = document.createElement('textarea')),
							(this.clipboard.className = d('pseudo-clipboard')),
							this.clipboard.addEventListener('paste', function (e) {
								var t = e.clipboardData || window.clipboardData,
									t = t && t.items;
								t &&
									!ke()(t).some(function (e) {
										return 'string' === e.kind && 'text/rtf' === e.type;
									}) &&
									(t = kt(t)) &&
									(e.preventDefault(), wt(n.eventEmitter, t, e.type));
							}),
							this.clipboard.addEventListener('input', function (e) {
								var t = e.target.value;
								n.replaceSelection(t), e.preventDefault(), (e.target.value = '');
							}),
							this.el.insertBefore(this.clipboard, this.view.dom);
					}),
					(i.prototype.createContext = function () {
						return {
							toastMark: this.toastMark,
							schema: this.schema,
							eventEmitter: this.eventEmitter
						};
					}),
					(i.prototype.createSpecs = function () {
						return new It([
							new an(),
							new Pn(),
							new Lt(),
							new Fn(),
							new zn(),
							new fn(),
							new $n(),
							new Ur(),
							new Kn(),
							new Hr(),
							new Jn(),
							new nr(),
							new sr(),
							new pr(),
							new mr(),
							new br(),
							new xr(),
							new Nr(),
							new Er(),
							new Rr(),
							new Sr(),
							new jr()
						]);
					}),
					(i.prototype.createPlugins = function () {
						return R(
							[
								tn(this.context),
								((e = this.context),
								(o = e.toastMark),
								(i = e.eventEmitter),
								new m.Plugin({
									view: function () {
										return {
											update: function (e, t) {
												var e = e.state,
													n = e.doc,
													r = e.selection;
												(t && t.doc.eq(n) && t.selection.eq(r)) ||
													((r = (n = r.from) - (t = e.doc.resolve(n).start())),
													n === t && (r += 1),
													(t = [e.doc.content.findIndex(n).index + 1, r]),
													(n = rn((e = o.findNodeAtPosition(t)))),
													i.emit('changeToolbarState', {
														cursorPos: t,
														mdNode: e,
														toolbarState: n
													}),
													i.emit('setFocusedNode', e));
											}
										};
									}
								})),
								((e = this.context),
								(s = e.schema),
								(l = e.toastMark),
								new m.Plugin({
									props: {
										handleDOMEvents: {
											keyup: function (e, t) {
												var n,
													r,
													o = e.state,
													i = o.doc,
													a = o.tr,
													o = o.selection;
												return (
													o.empty &&
														$r.test(t.key) &&
														((o = (t = g(o)).startIndex),
														(r = t.startFromOffset),
														(t = t.from),
														null !=
															(t =
																null ==
																(o = Be(l.findNodeAtPosition([o + 1, t - r + 1]), function (e) {
																	return (
																		'paragraph' === e.type &&
																		'item' === (null == (e = e.parent) ? void 0 : e.type)
																	);
																}))
																	? void 0
																	: o.firstChild)) &&
														t.literal &&
														(t = (r = o.firstChild).literal.match(Wr)) &&
														((o = r.sourcepos[0]),
														(r = t[1]),
														(n = t[2]),
														(t = t[3]),
														(r = r.length + t.length),
														(t = jt(i, o[0] - 1).startOffset),
														(i = o[1] + t),
														n
															? (a.replaceWith(i, (r ? r + 1 : 0) + i, s.text(n)), e.dispatch(a))
															: r || (a.insertText(' ', i), e.dispatch(a))),
													!1
												);
											}
										}
									}
								}))
							],
							this.createPluginProps()
						).concat(this.defaultPlugins);
						var s, l, e, o, i;
					}),
					(i.prototype.createView = function () {
						var n = this;
						return new be.EditorView(this.el, {
							state: this.createState(),
							dispatchTransaction: function (e) {
								n.updateMarkdown(e);
								var t = n.view.state.applyTransaction(e).state;
								n.view.updateState(t), n.emitChangeEvent(e);
							},
							handleKeyDown: function (e, t) {
								return (
									(t.metaKey || t.ctrlKey) && 'V' === t.key.toUpperCase() && n.clipboard.focus(),
									n.eventEmitter.emit('keydown', n.editorType, t),
									!1
								);
							},
							handleDOMEvents: {
								copy: function (e, t) {
									return n.captureCopy(t);
								},
								cut: function (e, t) {
									return n.captureCopy(t, 'cut');
								},
								scroll: function () {
									return n.eventEmitter.emit('scroll', 'editor'), !0;
								},
								keyup: function (e, t) {
									return n.eventEmitter.emit('keyup', n.editorType, t), !1;
								}
							},
							nodeViews: { widget: Ct }
						});
					}),
					(i.prototype.createCommands = function () {
						return this.specs.commands(this.view);
					}),
					(i.prototype.captureCopy = function (e, t) {
						e.preventDefault();
						var n = this.view.state,
							r = n.selection,
							n = n.tr;
						return (
							r.empty ||
								((r = this.getChanged(r.content())),
								e.clipboardData
									? e.clipboardData.setData('text/plain', r)
									: window.clipboardData.setData('Text', r),
								'cut' === t &&
									this.view.dispatch(
										n.deleteSelection().scrollIntoView().setMeta('uiEvent', 'cut')
									)),
							!0
						);
					}),
					(i.prototype.updateMarkdown = function (r) {
						var o = this;
						r.docChanged &&
							r.steps.forEach(function (e, t) {
								var n;
								!e.slice ||
									e instanceof we.ReplaceAroundStep ||
									((n = (t = Ht(r.docs[t], (t = [e.from, e.to])[0], t[1]))[0]),
									(t = t[1]),
									(e = o.getChanged(e.slice)),
									n[0] === t[0] && n[1] === t[1] && '' === e && (e = '\n'),
									(n = o.toastMark.editMarkdown(n, t, e)),
									o.eventEmitter.emit('updatePreview', n),
									r.setMeta('editResult', n).scrollIntoView());
							});
					}),
					(i.prototype.getChanged = function (e) {
						var n = '',
							r = e.content.size;
						return (
							e.content.nodesBetween(0, r, function (e, t) {
								e.isText
									? (n += e.text.slice(Math.max(0, t) - t, r - t))
									: e.isBlock && 0 < t && (n += '\n');
							}),
							n
						);
					}),
					(i.prototype.setSelection = function (e, t) {
						var n = this.view.state.tr,
							e = qt(n.doc, e, (t = void 0 === t ? e : t)),
							t = e[0],
							e = e[1];
						this.view.dispatch(n.setSelection(b(n, t, e)).scrollIntoView());
					}),
					(i.prototype.replaceSelection = function (e, t, n) {
						var r = this.view.state,
							o = r.tr,
							i = r.schema,
							r = r.doc,
							e = e.split(Zr).map(function (e) {
								return Ee(i, We(e, i));
							}),
							e = new X.Slice(X.Fragment.from(e), 1, 1);
						this.focus(),
							(r =
								t && n
									? ((t = (r = qt(r, t, n))[0]), (n = r[1]), o.replaceRange(t, n, e))
									: o.replaceSelection(e)),
							this.view.dispatch(r.scrollIntoView());
					}),
					(i.prototype.deleteSelection = function (e, t) {
						var n = this.view.state,
							r = n.tr,
							n = n.doc;
						(n =
							e && t
								? ((e = (n = qt(n, e, t))[0]), (t = n[1]), r.deleteRange(e, t))
								: r.deleteSelection()),
							this.view.dispatch(n.scrollIntoView());
					}),
					(i.prototype.getSelectedText = function (e, t) {
						var n = this.view.state,
							r = n.doc,
							n = n.selection,
							o = n.from,
							n = n.to;
						return e && t && ((o = (e = qt(r, e, t))[0]), (n = e[1])), r.textBetween(o, n, '\n');
					}),
					(i.prototype.getSelection = function () {
						var e = this.view.state.selection,
							t = e.from,
							e = e.to;
						return Ht(this.view.state.tr.doc, t, e);
					}),
					(i.prototype.setMarkdown = function (e, t) {
						void 0 === t && (t = !0);
						var e = e.split(Zr),
							n = this.view.state,
							r = n.tr,
							o = n.doc,
							i = n.schema,
							n = e.map(function (e) {
								return Ee(i, We(e, i));
							});
						this.view.dispatch(r.replaceWith(0, o.content.size, n)), t && this.moveCursorToEnd(!0);
					}),
					(i.prototype.addWidget = function (e, t, n) {
						var r = this.view.state,
							o = r.tr,
							i = r.doc,
							r = r.selection,
							i = n ? qt(i, n, n)[0] : r.to;
						this.view.dispatch(o.setMeta('widget', { pos: i, node: e, style: t }));
					}),
					(i.prototype.replaceWithWidget = function (e, t, n) {
						var r = this.view.state,
							o = r.tr,
							i = r.schema,
							r = qt(r.doc, e, t),
							e = We(n, i);
						this.view.dispatch(o.replaceWith(r[0], r[1], e));
					}),
					(i.prototype.getRangeInfoOfNode = function (e) {
						var t = this.view.state,
							n = t.doc,
							t = t.selection,
							e = e || Ht(n, t.from)[0],
							n = this.toastMark.findNodeAtPosition(e);
						return (
							((n =
								'text' === n.type && 'paragraph' !== n.parent.type
									? n.parent
									: n).sourcepos[1][1] += 1),
							{ range: n.sourcepos, type: n.type }
						);
					}),
					(i.prototype.getMarkdown = function () {
						return this.toastMark.getLineTexts().map(ze).join('\n');
					}),
					(i.prototype.getToastMark = function () {
						return this.toastMark;
					});
				var Xr = i,
					Kr = ah(349),
					Qr = ah.n(Kr),
					Kr = ah(348),
					Yr = ah.n(Kr),
					Jr = function (e, t) {
						return (Jr =
							Object.setPrototypeOf ||
							({ __proto__: [] } instanceof Array
								? function (e, t) {
										e.__proto__ = t;
									}
								: function (e, t) {
										for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
									}))(e, t);
					};
				function eo(e, t) {
					if ('function' != typeof t && null !== t)
						throw new TypeError(
							'Class extends value ' + String(t) + ' is not a constructor or null'
						);
					function n() {
						this.constructor = e;
					}
					Jr(e, t),
						(e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()));
				}
				var to = function () {
					return (to =
						Object.assign ||
						function (e) {
							for (var t, n = 1, r = arguments.length; n < r; n++)
								for (var o in (t = arguments[n]))
									Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
							return e;
						}).apply(this, arguments);
				};
				function no(e, t, n) {
					if (n || 2 === arguments.length)
						for (var r, o = 0, i = t.length; o < i; o++)
							(!r && o in t) || ((r = r || Array.prototype.slice.call(t, 0, o))[o] = t[o]);
					return e.concat(r || Array.prototype.slice.call(t));
				}
				var Kr =
						'undefined' != typeof globalThis
							? globalThis
							: 'undefined' != typeof window
								? window
								: void 0 !== ah.g
									? ah.g
									: 'undefined' != typeof self
										? self
										: {},
					ro = {};
				function oo(e, t, n) {
					var r,
						o,
						i,
						a,
						s = '';
					for (
						'string' != typeof t && ((n = t), (t = oo.defaultChars)),
							void 0 === n && (n = !0),
							a = (function (e) {
								var t,
									n,
									r = ro[e];
								if (!r) {
									for (r = ro[e] = [], t = 0; t < 128; t++)
										(n = String.fromCharCode(t)),
											/^[0-9a-z]$/i.test(n)
												? r.push(n)
												: r.push('%' + ('0' + t.toString(16).toUpperCase()).slice(-2));
									for (t = 0; t < e.length; t++) r[e.charCodeAt(t)] = e[t];
								}
								return r;
							})(t),
							r = 0,
							o = e.length;
						r < o;
						r++
					)
						(i = e.charCodeAt(r)),
							n && 37 === i && r + 2 < o && /^[0-9a-f]{2}$/i.test(e.slice(r + 1, r + 3))
								? ((s += e.slice(r, r + 3)), (r += 2))
								: i < 128
									? (s += a[i])
									: 55296 <= i && i <= 57343
										? 55296 <= i &&
											i <= 56319 &&
											r + 1 < o &&
											56320 <= (i = e.charCodeAt(r + 1)) &&
											i <= 57343
											? ((s += encodeURIComponent(e[r] + e[r + 1])), r++)
											: (s += '%EF%BF%BD')
										: (s += encodeURIComponent(e[r]));
					return s;
				}
				(oo.defaultChars = ";/?:@&=+$,-_.!~*'()#"), (oo.componentChars = "-_.!~*'()");
				var io = oo,
					ao = {},
					so = {},
					lo = {
						Aacute: 'Á',
						aacute: 'á',
						Abreve: 'Ă',
						abreve: 'ă',
						ac: '∾',
						acd: '∿',
						acE: '∾̳',
						Acirc: 'Â',
						acirc: 'â',
						acute: '´',
						Acy: 'А',
						acy: 'а',
						AElig: 'Æ',
						aelig: 'æ',
						af: '⁡',
						Afr: '𝔄',
						afr: '𝔞',
						Agrave: 'À',
						agrave: 'à',
						alefsym: 'ℵ',
						aleph: 'ℵ',
						Alpha: 'Α',
						alpha: 'α',
						Amacr: 'Ā',
						amacr: 'ā',
						amalg: '⨿',
						amp: '&',
						AMP: '&',
						andand: '⩕',
						And: '⩓',
						and: '∧',
						andd: '⩜',
						andslope: '⩘',
						andv: '⩚',
						ang: '∠',
						ange: '⦤',
						angle: '∠',
						angmsdaa: '⦨',
						angmsdab: '⦩',
						angmsdac: '⦪',
						angmsdad: '⦫',
						angmsdae: '⦬',
						angmsdaf: '⦭',
						angmsdag: '⦮',
						angmsdah: '⦯',
						angmsd: '∡',
						angrt: '∟',
						angrtvb: '⊾',
						angrtvbd: '⦝',
						angsph: '∢',
						angst: 'Å',
						angzarr: '⍼',
						Aogon: 'Ą',
						aogon: 'ą',
						Aopf: '𝔸',
						aopf: '𝕒',
						apacir: '⩯',
						ap: '≈',
						apE: '⩰',
						ape: '≊',
						apid: '≋',
						apos: "'",
						ApplyFunction: '⁡',
						approx: '≈',
						approxeq: '≊',
						Aring: 'Å',
						aring: 'å',
						Ascr: '𝒜',
						ascr: '𝒶',
						Assign: '≔',
						ast: '*',
						asymp: '≈',
						asympeq: '≍',
						Atilde: 'Ã',
						atilde: 'ã',
						Auml: 'Ä',
						auml: 'ä',
						awconint: '∳',
						awint: '⨑',
						backcong: '≌',
						backepsilon: '϶',
						backprime: '‵',
						backsim: '∽',
						backsimeq: '⋍',
						Backslash: '∖',
						Barv: '⫧',
						barvee: '⊽',
						barwed: '⌅',
						Barwed: '⌆',
						barwedge: '⌅',
						bbrk: '⎵',
						bbrktbrk: '⎶',
						bcong: '≌',
						Bcy: 'Б',
						bcy: 'б',
						bdquo: '„',
						becaus: '∵',
						because: '∵',
						Because: '∵',
						bemptyv: '⦰',
						bepsi: '϶',
						bernou: 'ℬ',
						Bernoullis: 'ℬ',
						Beta: 'Β',
						beta: 'β',
						beth: 'ℶ',
						between: '≬',
						Bfr: '𝔅',
						bfr: '𝔟',
						bigcap: '⋂',
						bigcirc: '◯',
						bigcup: '⋃',
						bigodot: '⨀',
						bigoplus: '⨁',
						bigotimes: '⨂',
						bigsqcup: '⨆',
						bigstar: '★',
						bigtriangledown: '▽',
						bigtriangleup: '△',
						biguplus: '⨄',
						bigvee: '⋁',
						bigwedge: '⋀',
						bkarow: '⤍',
						blacklozenge: '⧫',
						blacksquare: '▪',
						blacktriangle: '▴',
						blacktriangledown: '▾',
						blacktriangleleft: '◂',
						blacktriangleright: '▸',
						blank: '␣',
						blk12: '▒',
						blk14: '░',
						blk34: '▓',
						block: '█',
						bne: '=⃥',
						bnequiv: '≡⃥',
						bNot: '⫭',
						bnot: '⌐',
						Bopf: '𝔹',
						bopf: '𝕓',
						bot: '⊥',
						bottom: '⊥',
						bowtie: '⋈',
						boxbox: '⧉',
						boxdl: '┐',
						boxdL: '╕',
						boxDl: '╖',
						boxDL: '╗',
						boxdr: '┌',
						boxdR: '╒',
						boxDr: '╓',
						boxDR: '╔',
						boxh: '─',
						boxH: '═',
						boxhd: '┬',
						boxHd: '╤',
						boxhD: '╥',
						boxHD: '╦',
						boxhu: '┴',
						boxHu: '╧',
						boxhU: '╨',
						boxHU: '╩',
						boxminus: '⊟',
						boxplus: '⊞',
						boxtimes: '⊠',
						boxul: '┘',
						boxuL: '╛',
						boxUl: '╜',
						boxUL: '╝',
						boxur: '└',
						boxuR: '╘',
						boxUr: '╙',
						boxUR: '╚',
						boxv: '│',
						boxV: '║',
						boxvh: '┼',
						boxvH: '╪',
						boxVh: '╫',
						boxVH: '╬',
						boxvl: '┤',
						boxvL: '╡',
						boxVl: '╢',
						boxVL: '╣',
						boxvr: '├',
						boxvR: '╞',
						boxVr: '╟',
						boxVR: '╠',
						bprime: '‵',
						breve: '˘',
						Breve: '˘',
						brvbar: '¦',
						bscr: '𝒷',
						Bscr: 'ℬ',
						bsemi: '⁏',
						bsim: '∽',
						bsime: '⋍',
						bsolb: '⧅',
						bsol: '\\',
						bsolhsub: '⟈',
						bull: '•',
						bullet: '•',
						bump: '≎',
						bumpE: '⪮',
						bumpe: '≏',
						Bumpeq: '≎',
						bumpeq: '≏',
						Cacute: 'Ć',
						cacute: 'ć',
						capand: '⩄',
						capbrcup: '⩉',
						capcap: '⩋',
						cap: '∩',
						Cap: '⋒',
						capcup: '⩇',
						capdot: '⩀',
						CapitalDifferentialD: 'ⅅ',
						caps: '∩︀',
						caret: '⁁',
						caron: 'ˇ',
						Cayleys: 'ℭ',
						ccaps: '⩍',
						Ccaron: 'Č',
						ccaron: 'č',
						Ccedil: 'Ç',
						ccedil: 'ç',
						Ccirc: 'Ĉ',
						ccirc: 'ĉ',
						Cconint: '∰',
						ccups: '⩌',
						ccupssm: '⩐',
						Cdot: 'Ċ',
						cdot: 'ċ',
						cedil: '¸',
						Cedilla: '¸',
						cemptyv: '⦲',
						cent: '¢',
						centerdot: '·',
						CenterDot: '·',
						cfr: '𝔠',
						Cfr: 'ℭ',
						CHcy: 'Ч',
						chcy: 'ч',
						check: '✓',
						checkmark: '✓',
						Chi: 'Χ',
						chi: 'χ',
						circ: 'ˆ',
						circeq: '≗',
						circlearrowleft: '↺',
						circlearrowright: '↻',
						circledast: '⊛',
						circledcirc: '⊚',
						circleddash: '⊝',
						CircleDot: '⊙',
						circledR: '®',
						circledS: 'Ⓢ',
						CircleMinus: '⊖',
						CirclePlus: '⊕',
						CircleTimes: '⊗',
						cir: '○',
						cirE: '⧃',
						cire: '≗',
						cirfnint: '⨐',
						cirmid: '⫯',
						cirscir: '⧂',
						ClockwiseContourIntegral: '∲',
						CloseCurlyDoubleQuote: '”',
						CloseCurlyQuote: '’',
						clubs: '♣',
						clubsuit: '♣',
						colon: ':',
						Colon: '∷',
						Colone: '⩴',
						colone: '≔',
						coloneq: '≔',
						comma: ',',
						commat: '@',
						comp: '∁',
						compfn: '∘',
						complement: '∁',
						complexes: 'ℂ',
						cong: '≅',
						congdot: '⩭',
						Congruent: '≡',
						conint: '∮',
						Conint: '∯',
						ContourIntegral: '∮',
						copf: '𝕔',
						Copf: 'ℂ',
						coprod: '∐',
						Coproduct: '∐',
						copy: '©',
						COPY: '©',
						copysr: '℗',
						CounterClockwiseContourIntegral: '∳',
						crarr: '↵',
						cross: '✗',
						Cross: '⨯',
						Cscr: '𝒞',
						cscr: '𝒸',
						csub: '⫏',
						csube: '⫑',
						csup: '⫐',
						csupe: '⫒',
						ctdot: '⋯',
						cudarrl: '⤸',
						cudarrr: '⤵',
						cuepr: '⋞',
						cuesc: '⋟',
						cularr: '↶',
						cularrp: '⤽',
						cupbrcap: '⩈',
						cupcap: '⩆',
						CupCap: '≍',
						cup: '∪',
						Cup: '⋓',
						cupcup: '⩊',
						cupdot: '⊍',
						cupor: '⩅',
						cups: '∪︀',
						curarr: '↷',
						curarrm: '⤼',
						curlyeqprec: '⋞',
						curlyeqsucc: '⋟',
						curlyvee: '⋎',
						curlywedge: '⋏',
						curren: '¤',
						curvearrowleft: '↶',
						curvearrowright: '↷',
						cuvee: '⋎',
						cuwed: '⋏',
						cwconint: '∲',
						cwint: '∱',
						cylcty: '⌭',
						dagger: '†',
						Dagger: '‡',
						daleth: 'ℸ',
						darr: '↓',
						Darr: '↡',
						dArr: '⇓',
						dash: '‐',
						Dashv: '⫤',
						dashv: '⊣',
						dbkarow: '⤏',
						dblac: '˝',
						Dcaron: 'Ď',
						dcaron: 'ď',
						Dcy: 'Д',
						dcy: 'д',
						ddagger: '‡',
						ddarr: '⇊',
						DD: 'ⅅ',
						dd: 'ⅆ',
						DDotrahd: '⤑',
						ddotseq: '⩷',
						deg: '°',
						Del: '∇',
						Delta: 'Δ',
						delta: 'δ',
						demptyv: '⦱',
						dfisht: '⥿',
						Dfr: '𝔇',
						dfr: '𝔡',
						dHar: '⥥',
						dharl: '⇃',
						dharr: '⇂',
						DiacriticalAcute: '´',
						DiacriticalDot: '˙',
						DiacriticalDoubleAcute: '˝',
						DiacriticalGrave: '`',
						DiacriticalTilde: '˜',
						diam: '⋄',
						diamond: '⋄',
						Diamond: '⋄',
						diamondsuit: '♦',
						diams: '♦',
						die: '¨',
						DifferentialD: 'ⅆ',
						digamma: 'ϝ',
						disin: '⋲',
						div: '÷',
						divide: '÷',
						divideontimes: '⋇',
						divonx: '⋇',
						DJcy: 'Ђ',
						djcy: 'ђ',
						dlcorn: '⌞',
						dlcrop: '⌍',
						dollar: '$',
						Dopf: '𝔻',
						dopf: '𝕕',
						Dot: '¨',
						dot: '˙',
						DotDot: '⃜',
						doteq: '≐',
						doteqdot: '≑',
						DotEqual: '≐',
						dotminus: '∸',
						dotplus: '∔',
						dotsquare: '⊡',
						doublebarwedge: '⌆',
						DoubleContourIntegral: '∯',
						DoubleDot: '¨',
						DoubleDownArrow: '⇓',
						DoubleLeftArrow: '⇐',
						DoubleLeftRightArrow: '⇔',
						DoubleLeftTee: '⫤',
						DoubleLongLeftArrow: '⟸',
						DoubleLongLeftRightArrow: '⟺',
						DoubleLongRightArrow: '⟹',
						DoubleRightArrow: '⇒',
						DoubleRightTee: '⊨',
						DoubleUpArrow: '⇑',
						DoubleUpDownArrow: '⇕',
						DoubleVerticalBar: '∥',
						DownArrowBar: '⤓',
						downarrow: '↓',
						DownArrow: '↓',
						Downarrow: '⇓',
						DownArrowUpArrow: '⇵',
						DownBreve: '̑',
						downdownarrows: '⇊',
						downharpoonleft: '⇃',
						downharpoonright: '⇂',
						DownLeftRightVector: '⥐',
						DownLeftTeeVector: '⥞',
						DownLeftVectorBar: '⥖',
						DownLeftVector: '↽',
						DownRightTeeVector: '⥟',
						DownRightVectorBar: '⥗',
						DownRightVector: '⇁',
						DownTeeArrow: '↧',
						DownTee: '⊤',
						drbkarow: '⤐',
						drcorn: '⌟',
						drcrop: '⌌',
						Dscr: '𝒟',
						dscr: '𝒹',
						DScy: 'Ѕ',
						dscy: 'ѕ',
						dsol: '⧶',
						Dstrok: 'Đ',
						dstrok: 'đ',
						dtdot: '⋱',
						dtri: '▿',
						dtrif: '▾',
						duarr: '⇵',
						duhar: '⥯',
						dwangle: '⦦',
						DZcy: 'Џ',
						dzcy: 'џ',
						dzigrarr: '⟿',
						Eacute: 'É',
						eacute: 'é',
						easter: '⩮',
						Ecaron: 'Ě',
						ecaron: 'ě',
						Ecirc: 'Ê',
						ecirc: 'ê',
						ecir: '≖',
						ecolon: '≕',
						Ecy: 'Э',
						ecy: 'э',
						eDDot: '⩷',
						Edot: 'Ė',
						edot: 'ė',
						eDot: '≑',
						ee: 'ⅇ',
						efDot: '≒',
						Efr: '𝔈',
						efr: '𝔢',
						eg: '⪚',
						Egrave: 'È',
						egrave: 'è',
						egs: '⪖',
						egsdot: '⪘',
						el: '⪙',
						Element: '∈',
						elinters: '⏧',
						ell: 'ℓ',
						els: '⪕',
						elsdot: '⪗',
						Emacr: 'Ē',
						emacr: 'ē',
						empty: '∅',
						emptyset: '∅',
						EmptySmallSquare: '◻',
						emptyv: '∅',
						EmptyVerySmallSquare: '▫',
						emsp13: ' ',
						emsp14: ' ',
						emsp: ' ',
						ENG: 'Ŋ',
						eng: 'ŋ',
						ensp: ' ',
						Eogon: 'Ę',
						eogon: 'ę',
						Eopf: '𝔼',
						eopf: '𝕖',
						epar: '⋕',
						eparsl: '⧣',
						eplus: '⩱',
						epsi: 'ε',
						Epsilon: 'Ε',
						epsilon: 'ε',
						epsiv: 'ϵ',
						eqcirc: '≖',
						eqcolon: '≕',
						eqsim: '≂',
						eqslantgtr: '⪖',
						eqslantless: '⪕',
						Equal: '⩵',
						equals: '=',
						EqualTilde: '≂',
						equest: '≟',
						Equilibrium: '⇌',
						equiv: '≡',
						equivDD: '⩸',
						eqvparsl: '⧥',
						erarr: '⥱',
						erDot: '≓',
						escr: 'ℯ',
						Escr: 'ℰ',
						esdot: '≐',
						Esim: '⩳',
						esim: '≂',
						Eta: 'Η',
						eta: 'η',
						ETH: 'Ð',
						eth: 'ð',
						Euml: 'Ë',
						euml: 'ë',
						euro: '€',
						excl: '!',
						exist: '∃',
						Exists: '∃',
						expectation: 'ℰ',
						exponentiale: 'ⅇ',
						ExponentialE: 'ⅇ',
						fallingdotseq: '≒',
						Fcy: 'Ф',
						fcy: 'ф',
						female: '♀',
						ffilig: 'ﬃ',
						fflig: 'ﬀ',
						ffllig: 'ﬄ',
						Ffr: '𝔉',
						ffr: '𝔣',
						filig: 'ﬁ',
						FilledSmallSquare: '◼',
						FilledVerySmallSquare: '▪',
						fjlig: 'fj',
						flat: '♭',
						fllig: 'ﬂ',
						fltns: '▱',
						fnof: 'ƒ',
						Fopf: '𝔽',
						fopf: '𝕗',
						forall: '∀',
						ForAll: '∀',
						fork: '⋔',
						forkv: '⫙',
						Fouriertrf: 'ℱ',
						fpartint: '⨍',
						frac12: '½',
						frac13: '⅓',
						frac14: '¼',
						frac15: '⅕',
						frac16: '⅙',
						frac18: '⅛',
						frac23: '⅔',
						frac25: '⅖',
						frac34: '¾',
						frac35: '⅗',
						frac38: '⅜',
						frac45: '⅘',
						frac56: '⅚',
						frac58: '⅝',
						frac78: '⅞',
						frasl: '⁄',
						frown: '⌢',
						fscr: '𝒻',
						Fscr: 'ℱ',
						gacute: 'ǵ',
						Gamma: 'Γ',
						gamma: 'γ',
						Gammad: 'Ϝ',
						gammad: 'ϝ',
						gap: '⪆',
						Gbreve: 'Ğ',
						gbreve: 'ğ',
						Gcedil: 'Ģ',
						Gcirc: 'Ĝ',
						gcirc: 'ĝ',
						Gcy: 'Г',
						gcy: 'г',
						Gdot: 'Ġ',
						gdot: 'ġ',
						ge: '≥',
						gE: '≧',
						gEl: '⪌',
						gel: '⋛',
						geq: '≥',
						geqq: '≧',
						geqslant: '⩾',
						gescc: '⪩',
						ges: '⩾',
						gesdot: '⪀',
						gesdoto: '⪂',
						gesdotol: '⪄',
						gesl: '⋛︀',
						gesles: '⪔',
						Gfr: '𝔊',
						gfr: '𝔤',
						gg: '≫',
						Gg: '⋙',
						ggg: '⋙',
						gimel: 'ℷ',
						GJcy: 'Ѓ',
						gjcy: 'ѓ',
						gla: '⪥',
						gl: '≷',
						glE: '⪒',
						glj: '⪤',
						gnap: '⪊',
						gnapprox: '⪊',
						gne: '⪈',
						gnE: '≩',
						gneq: '⪈',
						gneqq: '≩',
						gnsim: '⋧',
						Gopf: '𝔾',
						gopf: '𝕘',
						grave: '`',
						GreaterEqual: '≥',
						GreaterEqualLess: '⋛',
						GreaterFullEqual: '≧',
						GreaterGreater: '⪢',
						GreaterLess: '≷',
						GreaterSlantEqual: '⩾',
						GreaterTilde: '≳',
						Gscr: '𝒢',
						gscr: 'ℊ',
						gsim: '≳',
						gsime: '⪎',
						gsiml: '⪐',
						gtcc: '⪧',
						gtcir: '⩺',
						gt: '>',
						GT: '>',
						Gt: '≫',
						gtdot: '⋗',
						gtlPar: '⦕',
						gtquest: '⩼',
						gtrapprox: '⪆',
						gtrarr: '⥸',
						gtrdot: '⋗',
						gtreqless: '⋛',
						gtreqqless: '⪌',
						gtrless: '≷',
						gtrsim: '≳',
						gvertneqq: '≩︀',
						gvnE: '≩︀',
						Hacek: 'ˇ',
						hairsp: ' ',
						half: '½',
						hamilt: 'ℋ',
						HARDcy: 'Ъ',
						hardcy: 'ъ',
						harrcir: '⥈',
						harr: '↔',
						hArr: '⇔',
						harrw: '↭',
						Hat: '^',
						hbar: 'ℏ',
						Hcirc: 'Ĥ',
						hcirc: 'ĥ',
						hearts: '♥',
						heartsuit: '♥',
						hellip: '…',
						hercon: '⊹',
						hfr: '𝔥',
						Hfr: 'ℌ',
						HilbertSpace: 'ℋ',
						hksearow: '⤥',
						hkswarow: '⤦',
						hoarr: '⇿',
						homtht: '∻',
						hookleftarrow: '↩',
						hookrightarrow: '↪',
						hopf: '𝕙',
						Hopf: 'ℍ',
						horbar: '―',
						HorizontalLine: '─',
						hscr: '𝒽',
						Hscr: 'ℋ',
						hslash: 'ℏ',
						Hstrok: 'Ħ',
						hstrok: 'ħ',
						HumpDownHump: '≎',
						HumpEqual: '≏',
						hybull: '⁃',
						hyphen: '‐',
						Iacute: 'Í',
						iacute: 'í',
						ic: '⁣',
						Icirc: 'Î',
						icirc: 'î',
						Icy: 'И',
						icy: 'и',
						Idot: 'İ',
						IEcy: 'Е',
						iecy: 'е',
						iexcl: '¡',
						iff: '⇔',
						ifr: '𝔦',
						Ifr: 'ℑ',
						Igrave: 'Ì',
						igrave: 'ì',
						ii: 'ⅈ',
						iiiint: '⨌',
						iiint: '∭',
						iinfin: '⧜',
						iiota: '℩',
						IJlig: 'Ĳ',
						ijlig: 'ĳ',
						Imacr: 'Ī',
						imacr: 'ī',
						image: 'ℑ',
						ImaginaryI: 'ⅈ',
						imagline: 'ℐ',
						imagpart: 'ℑ',
						imath: 'ı',
						Im: 'ℑ',
						imof: '⊷',
						imped: 'Ƶ',
						Implies: '⇒',
						incare: '℅',
						in: '∈',
						infin: '∞',
						infintie: '⧝',
						inodot: 'ı',
						intcal: '⊺',
						int: '∫',
						Int: '∬',
						integers: 'ℤ',
						Integral: '∫',
						intercal: '⊺',
						Intersection: '⋂',
						intlarhk: '⨗',
						intprod: '⨼',
						InvisibleComma: '⁣',
						InvisibleTimes: '⁢',
						IOcy: 'Ё',
						iocy: 'ё',
						Iogon: 'Į',
						iogon: 'į',
						Iopf: '𝕀',
						iopf: '𝕚',
						Iota: 'Ι',
						iota: 'ι',
						iprod: '⨼',
						iquest: '¿',
						iscr: '𝒾',
						Iscr: 'ℐ',
						isin: '∈',
						isindot: '⋵',
						isinE: '⋹',
						isins: '⋴',
						isinsv: '⋳',
						isinv: '∈',
						it: '⁢',
						Itilde: 'Ĩ',
						itilde: 'ĩ',
						Iukcy: 'І',
						iukcy: 'і',
						Iuml: 'Ï',
						iuml: 'ï',
						Jcirc: 'Ĵ',
						jcirc: 'ĵ',
						Jcy: 'Й',
						jcy: 'й',
						Jfr: '𝔍',
						jfr: '𝔧',
						jmath: 'ȷ',
						Jopf: '𝕁',
						jopf: '𝕛',
						Jscr: '𝒥',
						jscr: '𝒿',
						Jsercy: 'Ј',
						jsercy: 'ј',
						Jukcy: 'Є',
						jukcy: 'є',
						Kappa: 'Κ',
						kappa: 'κ',
						kappav: 'ϰ',
						Kcedil: 'Ķ',
						kcedil: 'ķ',
						Kcy: 'К',
						kcy: 'к',
						Kfr: '𝔎',
						kfr: '𝔨',
						kgreen: 'ĸ',
						KHcy: 'Х',
						khcy: 'х',
						KJcy: 'Ќ',
						kjcy: 'ќ',
						Kopf: '𝕂',
						kopf: '𝕜',
						Kscr: '𝒦',
						kscr: '𝓀',
						lAarr: '⇚',
						Lacute: 'Ĺ',
						lacute: 'ĺ',
						laemptyv: '⦴',
						lagran: 'ℒ',
						Lambda: 'Λ',
						lambda: 'λ',
						lang: '⟨',
						Lang: '⟪',
						langd: '⦑',
						langle: '⟨',
						lap: '⪅',
						Laplacetrf: 'ℒ',
						laquo: '«',
						larrb: '⇤',
						larrbfs: '⤟',
						larr: '←',
						Larr: '↞',
						lArr: '⇐',
						larrfs: '⤝',
						larrhk: '↩',
						larrlp: '↫',
						larrpl: '⤹',
						larrsim: '⥳',
						larrtl: '↢',
						latail: '⤙',
						lAtail: '⤛',
						lat: '⪫',
						late: '⪭',
						lates: '⪭︀',
						lbarr: '⤌',
						lBarr: '⤎',
						lbbrk: '❲',
						lbrace: '{',
						lbrack: '[',
						lbrke: '⦋',
						lbrksld: '⦏',
						lbrkslu: '⦍',
						Lcaron: 'Ľ',
						lcaron: 'ľ',
						Lcedil: 'Ļ',
						lcedil: 'ļ',
						lceil: '⌈',
						lcub: '{',
						Lcy: 'Л',
						lcy: 'л',
						ldca: '⤶',
						ldquo: '“',
						ldquor: '„',
						ldrdhar: '⥧',
						ldrushar: '⥋',
						ldsh: '↲',
						le: '≤',
						lE: '≦',
						LeftAngleBracket: '⟨',
						LeftArrowBar: '⇤',
						leftarrow: '←',
						LeftArrow: '←',
						Leftarrow: '⇐',
						LeftArrowRightArrow: '⇆',
						leftarrowtail: '↢',
						LeftCeiling: '⌈',
						LeftDoubleBracket: '⟦',
						LeftDownTeeVector: '⥡',
						LeftDownVectorBar: '⥙',
						LeftDownVector: '⇃',
						LeftFloor: '⌊',
						leftharpoondown: '↽',
						leftharpoonup: '↼',
						leftleftarrows: '⇇',
						leftrightarrow: '↔',
						LeftRightArrow: '↔',
						Leftrightarrow: '⇔',
						leftrightarrows: '⇆',
						leftrightharpoons: '⇋',
						leftrightsquigarrow: '↭',
						LeftRightVector: '⥎',
						LeftTeeArrow: '↤',
						LeftTee: '⊣',
						LeftTeeVector: '⥚',
						leftthreetimes: '⋋',
						LeftTriangleBar: '⧏',
						LeftTriangle: '⊲',
						LeftTriangleEqual: '⊴',
						LeftUpDownVector: '⥑',
						LeftUpTeeVector: '⥠',
						LeftUpVectorBar: '⥘',
						LeftUpVector: '↿',
						LeftVectorBar: '⥒',
						LeftVector: '↼',
						lEg: '⪋',
						leg: '⋚',
						leq: '≤',
						leqq: '≦',
						leqslant: '⩽',
						lescc: '⪨',
						les: '⩽',
						lesdot: '⩿',
						lesdoto: '⪁',
						lesdotor: '⪃',
						lesg: '⋚︀',
						lesges: '⪓',
						lessapprox: '⪅',
						lessdot: '⋖',
						lesseqgtr: '⋚',
						lesseqqgtr: '⪋',
						LessEqualGreater: '⋚',
						LessFullEqual: '≦',
						LessGreater: '≶',
						lessgtr: '≶',
						LessLess: '⪡',
						lesssim: '≲',
						LessSlantEqual: '⩽',
						LessTilde: '≲',
						lfisht: '⥼',
						lfloor: '⌊',
						Lfr: '𝔏',
						lfr: '𝔩',
						lg: '≶',
						lgE: '⪑',
						lHar: '⥢',
						lhard: '↽',
						lharu: '↼',
						lharul: '⥪',
						lhblk: '▄',
						LJcy: 'Љ',
						ljcy: 'љ',
						llarr: '⇇',
						ll: '≪',
						Ll: '⋘',
						llcorner: '⌞',
						Lleftarrow: '⇚',
						llhard: '⥫',
						lltri: '◺',
						Lmidot: 'Ŀ',
						lmidot: 'ŀ',
						lmoustache: '⎰',
						lmoust: '⎰',
						lnap: '⪉',
						lnapprox: '⪉',
						lne: '⪇',
						lnE: '≨',
						lneq: '⪇',
						lneqq: '≨',
						lnsim: '⋦',
						loang: '⟬',
						loarr: '⇽',
						lobrk: '⟦',
						longleftarrow: '⟵',
						LongLeftArrow: '⟵',
						Longleftarrow: '⟸',
						longleftrightarrow: '⟷',
						LongLeftRightArrow: '⟷',
						Longleftrightarrow: '⟺',
						longmapsto: '⟼',
						longrightarrow: '⟶',
						LongRightArrow: '⟶',
						Longrightarrow: '⟹',
						looparrowleft: '↫',
						looparrowright: '↬',
						lopar: '⦅',
						Lopf: '𝕃',
						lopf: '𝕝',
						loplus: '⨭',
						lotimes: '⨴',
						lowast: '∗',
						lowbar: '_',
						LowerLeftArrow: '↙',
						LowerRightArrow: '↘',
						loz: '◊',
						lozenge: '◊',
						lozf: '⧫',
						lpar: '(',
						lparlt: '⦓',
						lrarr: '⇆',
						lrcorner: '⌟',
						lrhar: '⇋',
						lrhard: '⥭',
						lrm: '‎',
						lrtri: '⊿',
						lsaquo: '‹',
						lscr: '𝓁',
						Lscr: 'ℒ',
						lsh: '↰',
						Lsh: '↰',
						lsim: '≲',
						lsime: '⪍',
						lsimg: '⪏',
						lsqb: '[',
						lsquo: '‘',
						lsquor: '‚',
						Lstrok: 'Ł',
						lstrok: 'ł',
						ltcc: '⪦',
						ltcir: '⩹',
						lt: '<',
						LT: '<',
						Lt: '≪',
						ltdot: '⋖',
						lthree: '⋋',
						ltimes: '⋉',
						ltlarr: '⥶',
						ltquest: '⩻',
						ltri: '◃',
						ltrie: '⊴',
						ltrif: '◂',
						ltrPar: '⦖',
						lurdshar: '⥊',
						luruhar: '⥦',
						lvertneqq: '≨︀',
						lvnE: '≨︀',
						macr: '¯',
						male: '♂',
						malt: '✠',
						maltese: '✠',
						Map: '⤅',
						map: '↦',
						mapsto: '↦',
						mapstodown: '↧',
						mapstoleft: '↤',
						mapstoup: '↥',
						marker: '▮',
						mcomma: '⨩',
						Mcy: 'М',
						mcy: 'м',
						mdash: '—',
						mDDot: '∺',
						measuredangle: '∡',
						MediumSpace: ' ',
						Mellintrf: 'ℳ',
						Mfr: '𝔐',
						mfr: '𝔪',
						mho: '℧',
						micro: 'µ',
						midast: '*',
						midcir: '⫰',
						mid: '∣',
						middot: '·',
						minusb: '⊟',
						minus: '−',
						minusd: '∸',
						minusdu: '⨪',
						MinusPlus: '∓',
						mlcp: '⫛',
						mldr: '…',
						mnplus: '∓',
						models: '⊧',
						Mopf: '𝕄',
						mopf: '𝕞',
						mp: '∓',
						mscr: '𝓂',
						Mscr: 'ℳ',
						mstpos: '∾',
						Mu: 'Μ',
						mu: 'μ',
						multimap: '⊸',
						mumap: '⊸',
						nabla: '∇',
						Nacute: 'Ń',
						nacute: 'ń',
						nang: '∠⃒',
						nap: '≉',
						napE: '⩰̸',
						napid: '≋̸',
						napos: 'ŉ',
						napprox: '≉',
						natural: '♮',
						naturals: 'ℕ',
						natur: '♮',
						nbsp: ' ',
						nbump: '≎̸',
						nbumpe: '≏̸',
						ncap: '⩃',
						Ncaron: 'Ň',
						ncaron: 'ň',
						Ncedil: 'Ņ',
						ncedil: 'ņ',
						ncong: '≇',
						ncongdot: '⩭̸',
						ncup: '⩂',
						Ncy: 'Н',
						ncy: 'н',
						ndash: '–',
						nearhk: '⤤',
						nearr: '↗',
						neArr: '⇗',
						nearrow: '↗',
						ne: '≠',
						nedot: '≐̸',
						NegativeMediumSpace: '​',
						NegativeThickSpace: '​',
						NegativeThinSpace: '​',
						NegativeVeryThinSpace: '​',
						nequiv: '≢',
						nesear: '⤨',
						nesim: '≂̸',
						NestedGreaterGreater: '≫',
						NestedLessLess: '≪',
						NewLine: '\n',
						nexist: '∄',
						nexists: '∄',
						Nfr: '𝔑',
						nfr: '𝔫',
						ngE: '≧̸',
						nge: '≱',
						ngeq: '≱',
						ngeqq: '≧̸',
						ngeqslant: '⩾̸',
						nges: '⩾̸',
						nGg: '⋙̸',
						ngsim: '≵',
						nGt: '≫⃒',
						ngt: '≯',
						ngtr: '≯',
						nGtv: '≫̸',
						nharr: '↮',
						nhArr: '⇎',
						nhpar: '⫲',
						ni: '∋',
						nis: '⋼',
						nisd: '⋺',
						niv: '∋',
						NJcy: 'Њ',
						njcy: 'њ',
						nlarr: '↚',
						nlArr: '⇍',
						nldr: '‥',
						nlE: '≦̸',
						nle: '≰',
						nleftarrow: '↚',
						nLeftarrow: '⇍',
						nleftrightarrow: '↮',
						nLeftrightarrow: '⇎',
						nleq: '≰',
						nleqq: '≦̸',
						nleqslant: '⩽̸',
						nles: '⩽̸',
						nless: '≮',
						nLl: '⋘̸',
						nlsim: '≴',
						nLt: '≪⃒',
						nlt: '≮',
						nltri: '⋪',
						nltrie: '⋬',
						nLtv: '≪̸',
						nmid: '∤',
						NoBreak: '⁠',
						NonBreakingSpace: ' ',
						nopf: '𝕟',
						Nopf: 'ℕ',
						Not: '⫬',
						not: '¬',
						NotCongruent: '≢',
						NotCupCap: '≭',
						NotDoubleVerticalBar: '∦',
						NotElement: '∉',
						NotEqual: '≠',
						NotEqualTilde: '≂̸',
						NotExists: '∄',
						NotGreater: '≯',
						NotGreaterEqual: '≱',
						NotGreaterFullEqual: '≧̸',
						NotGreaterGreater: '≫̸',
						NotGreaterLess: '≹',
						NotGreaterSlantEqual: '⩾̸',
						NotGreaterTilde: '≵',
						NotHumpDownHump: '≎̸',
						NotHumpEqual: '≏̸',
						notin: '∉',
						notindot: '⋵̸',
						notinE: '⋹̸',
						notinva: '∉',
						notinvb: '⋷',
						notinvc: '⋶',
						NotLeftTriangleBar: '⧏̸',
						NotLeftTriangle: '⋪',
						NotLeftTriangleEqual: '⋬',
						NotLess: '≮',
						NotLessEqual: '≰',
						NotLessGreater: '≸',
						NotLessLess: '≪̸',
						NotLessSlantEqual: '⩽̸',
						NotLessTilde: '≴',
						NotNestedGreaterGreater: '⪢̸',
						NotNestedLessLess: '⪡̸',
						notni: '∌',
						notniva: '∌',
						notnivb: '⋾',
						notnivc: '⋽',
						NotPrecedes: '⊀',
						NotPrecedesEqual: '⪯̸',
						NotPrecedesSlantEqual: '⋠',
						NotReverseElement: '∌',
						NotRightTriangleBar: '⧐̸',
						NotRightTriangle: '⋫',
						NotRightTriangleEqual: '⋭',
						NotSquareSubset: '⊏̸',
						NotSquareSubsetEqual: '⋢',
						NotSquareSuperset: '⊐̸',
						NotSquareSupersetEqual: '⋣',
						NotSubset: '⊂⃒',
						NotSubsetEqual: '⊈',
						NotSucceeds: '⊁',
						NotSucceedsEqual: '⪰̸',
						NotSucceedsSlantEqual: '⋡',
						NotSucceedsTilde: '≿̸',
						NotSuperset: '⊃⃒',
						NotSupersetEqual: '⊉',
						NotTilde: '≁',
						NotTildeEqual: '≄',
						NotTildeFullEqual: '≇',
						NotTildeTilde: '≉',
						NotVerticalBar: '∤',
						nparallel: '∦',
						npar: '∦',
						nparsl: '⫽⃥',
						npart: '∂̸',
						npolint: '⨔',
						npr: '⊀',
						nprcue: '⋠',
						nprec: '⊀',
						npreceq: '⪯̸',
						npre: '⪯̸',
						nrarrc: '⤳̸',
						nrarr: '↛',
						nrArr: '⇏',
						nrarrw: '↝̸',
						nrightarrow: '↛',
						nRightarrow: '⇏',
						nrtri: '⋫',
						nrtrie: '⋭',
						nsc: '⊁',
						nsccue: '⋡',
						nsce: '⪰̸',
						Nscr: '𝒩',
						nscr: '𝓃',
						nshortmid: '∤',
						nshortparallel: '∦',
						nsim: '≁',
						nsime: '≄',
						nsimeq: '≄',
						nsmid: '∤',
						nspar: '∦',
						nsqsube: '⋢',
						nsqsupe: '⋣',
						nsub: '⊄',
						nsubE: '⫅̸',
						nsube: '⊈',
						nsubset: '⊂⃒',
						nsubseteq: '⊈',
						nsubseteqq: '⫅̸',
						nsucc: '⊁',
						nsucceq: '⪰̸',
						nsup: '⊅',
						nsupE: '⫆̸',
						nsupe: '⊉',
						nsupset: '⊃⃒',
						nsupseteq: '⊉',
						nsupseteqq: '⫆̸',
						ntgl: '≹',
						Ntilde: 'Ñ',
						ntilde: 'ñ',
						ntlg: '≸',
						ntriangleleft: '⋪',
						ntrianglelefteq: '⋬',
						ntriangleright: '⋫',
						ntrianglerighteq: '⋭',
						Nu: 'Ν',
						nu: 'ν',
						num: '#',
						numero: '№',
						numsp: ' ',
						nvap: '≍⃒',
						nvdash: '⊬',
						nvDash: '⊭',
						nVdash: '⊮',
						nVDash: '⊯',
						nvge: '≥⃒',
						nvgt: '>⃒',
						nvHarr: '⤄',
						nvinfin: '⧞',
						nvlArr: '⤂',
						nvle: '≤⃒',
						nvlt: '<⃒',
						nvltrie: '⊴⃒',
						nvrArr: '⤃',
						nvrtrie: '⊵⃒',
						nvsim: '∼⃒',
						nwarhk: '⤣',
						nwarr: '↖',
						nwArr: '⇖',
						nwarrow: '↖',
						nwnear: '⤧',
						Oacute: 'Ó',
						oacute: 'ó',
						oast: '⊛',
						Ocirc: 'Ô',
						ocirc: 'ô',
						ocir: '⊚',
						Ocy: 'О',
						ocy: 'о',
						odash: '⊝',
						Odblac: 'Ő',
						odblac: 'ő',
						odiv: '⨸',
						odot: '⊙',
						odsold: '⦼',
						OElig: 'Œ',
						oelig: 'œ',
						ofcir: '⦿',
						Ofr: '𝔒',
						ofr: '𝔬',
						ogon: '˛',
						Ograve: 'Ò',
						ograve: 'ò',
						ogt: '⧁',
						ohbar: '⦵',
						ohm: 'Ω',
						oint: '∮',
						olarr: '↺',
						olcir: '⦾',
						olcross: '⦻',
						oline: '‾',
						olt: '⧀',
						Omacr: 'Ō',
						omacr: 'ō',
						Omega: 'Ω',
						omega: 'ω',
						Omicron: 'Ο',
						omicron: 'ο',
						omid: '⦶',
						ominus: '⊖',
						Oopf: '𝕆',
						oopf: '𝕠',
						opar: '⦷',
						OpenCurlyDoubleQuote: '“',
						OpenCurlyQuote: '‘',
						operp: '⦹',
						oplus: '⊕',
						orarr: '↻',
						Or: '⩔',
						or: '∨',
						ord: '⩝',
						order: 'ℴ',
						orderof: 'ℴ',
						ordf: 'ª',
						ordm: 'º',
						origof: '⊶',
						oror: '⩖',
						orslope: '⩗',
						orv: '⩛',
						oS: 'Ⓢ',
						Oscr: '𝒪',
						oscr: 'ℴ',
						Oslash: 'Ø',
						oslash: 'ø',
						osol: '⊘',
						Otilde: 'Õ',
						otilde: 'õ',
						otimesas: '⨶',
						Otimes: '⨷',
						otimes: '⊗',
						Ouml: 'Ö',
						ouml: 'ö',
						ovbar: '⌽',
						OverBar: '‾',
						OverBrace: '⏞',
						OverBracket: '⎴',
						OverParenthesis: '⏜',
						para: '¶',
						parallel: '∥',
						par: '∥',
						parsim: '⫳',
						parsl: '⫽',
						part: '∂',
						PartialD: '∂',
						Pcy: 'П',
						pcy: 'п',
						percnt: '%',
						period: '.',
						permil: '‰',
						perp: '⊥',
						pertenk: '‱',
						Pfr: '𝔓',
						pfr: '𝔭',
						Phi: 'Φ',
						phi: 'φ',
						phiv: 'ϕ',
						phmmat: 'ℳ',
						phone: '☎',
						Pi: 'Π',
						pi: 'π',
						pitchfork: '⋔',
						piv: 'ϖ',
						planck: 'ℏ',
						planckh: 'ℎ',
						plankv: 'ℏ',
						plusacir: '⨣',
						plusb: '⊞',
						pluscir: '⨢',
						plus: '+',
						plusdo: '∔',
						plusdu: '⨥',
						pluse: '⩲',
						PlusMinus: '±',
						plusmn: '±',
						plussim: '⨦',
						plustwo: '⨧',
						pm: '±',
						Poincareplane: 'ℌ',
						pointint: '⨕',
						popf: '𝕡',
						Popf: 'ℙ',
						pound: '£',
						prap: '⪷',
						Pr: '⪻',
						pr: '≺',
						prcue: '≼',
						precapprox: '⪷',
						prec: '≺',
						preccurlyeq: '≼',
						Precedes: '≺',
						PrecedesEqual: '⪯',
						PrecedesSlantEqual: '≼',
						PrecedesTilde: '≾',
						preceq: '⪯',
						precnapprox: '⪹',
						precneqq: '⪵',
						precnsim: '⋨',
						pre: '⪯',
						prE: '⪳',
						precsim: '≾',
						prime: '′',
						Prime: '″',
						primes: 'ℙ',
						prnap: '⪹',
						prnE: '⪵',
						prnsim: '⋨',
						prod: '∏',
						Product: '∏',
						profalar: '⌮',
						profline: '⌒',
						profsurf: '⌓',
						prop: '∝',
						Proportional: '∝',
						Proportion: '∷',
						propto: '∝',
						prsim: '≾',
						prurel: '⊰',
						Pscr: '𝒫',
						pscr: '𝓅',
						Psi: 'Ψ',
						psi: 'ψ',
						puncsp: ' ',
						Qfr: '𝔔',
						qfr: '𝔮',
						qint: '⨌',
						qopf: '𝕢',
						Qopf: 'ℚ',
						qprime: '⁗',
						Qscr: '𝒬',
						qscr: '𝓆',
						quaternions: 'ℍ',
						quatint: '⨖',
						quest: '?',
						questeq: '≟',
						quot: '"',
						QUOT: '"',
						rAarr: '⇛',
						race: '∽̱',
						Racute: 'Ŕ',
						racute: 'ŕ',
						radic: '√',
						raemptyv: '⦳',
						rang: '⟩',
						Rang: '⟫',
						rangd: '⦒',
						range: '⦥',
						rangle: '⟩',
						raquo: '»',
						rarrap: '⥵',
						rarrb: '⇥',
						rarrbfs: '⤠',
						rarrc: '⤳',
						rarr: '→',
						Rarr: '↠',
						rArr: '⇒',
						rarrfs: '⤞',
						rarrhk: '↪',
						rarrlp: '↬',
						rarrpl: '⥅',
						rarrsim: '⥴',
						Rarrtl: '⤖',
						rarrtl: '↣',
						rarrw: '↝',
						ratail: '⤚',
						rAtail: '⤜',
						ratio: '∶',
						rationals: 'ℚ',
						rbarr: '⤍',
						rBarr: '⤏',
						RBarr: '⤐',
						rbbrk: '❳',
						rbrace: '}',
						rbrack: ']',
						rbrke: '⦌',
						rbrksld: '⦎',
						rbrkslu: '⦐',
						Rcaron: 'Ř',
						rcaron: 'ř',
						Rcedil: 'Ŗ',
						rcedil: 'ŗ',
						rceil: '⌉',
						rcub: '}',
						Rcy: 'Р',
						rcy: 'р',
						rdca: '⤷',
						rdldhar: '⥩',
						rdquo: '”',
						rdquor: '”',
						rdsh: '↳',
						real: 'ℜ',
						realine: 'ℛ',
						realpart: 'ℜ',
						reals: 'ℝ',
						Re: 'ℜ',
						rect: '▭',
						reg: '®',
						REG: '®',
						ReverseElement: '∋',
						ReverseEquilibrium: '⇋',
						ReverseUpEquilibrium: '⥯',
						rfisht: '⥽',
						rfloor: '⌋',
						rfr: '𝔯',
						Rfr: 'ℜ',
						rHar: '⥤',
						rhard: '⇁',
						rharu: '⇀',
						rharul: '⥬',
						Rho: 'Ρ',
						rho: 'ρ',
						rhov: 'ϱ',
						RightAngleBracket: '⟩',
						RightArrowBar: '⇥',
						rightarrow: '→',
						RightArrow: '→',
						Rightarrow: '⇒',
						RightArrowLeftArrow: '⇄',
						rightarrowtail: '↣',
						RightCeiling: '⌉',
						RightDoubleBracket: '⟧',
						RightDownTeeVector: '⥝',
						RightDownVectorBar: '⥕',
						RightDownVector: '⇂',
						RightFloor: '⌋',
						rightharpoondown: '⇁',
						rightharpoonup: '⇀',
						rightleftarrows: '⇄',
						rightleftharpoons: '⇌',
						rightrightarrows: '⇉',
						rightsquigarrow: '↝',
						RightTeeArrow: '↦',
						RightTee: '⊢',
						RightTeeVector: '⥛',
						rightthreetimes: '⋌',
						RightTriangleBar: '⧐',
						RightTriangle: '⊳',
						RightTriangleEqual: '⊵',
						RightUpDownVector: '⥏',
						RightUpTeeVector: '⥜',
						RightUpVectorBar: '⥔',
						RightUpVector: '↾',
						RightVectorBar: '⥓',
						RightVector: '⇀',
						ring: '˚',
						risingdotseq: '≓',
						rlarr: '⇄',
						rlhar: '⇌',
						rlm: '‏',
						rmoustache: '⎱',
						rmoust: '⎱',
						rnmid: '⫮',
						roang: '⟭',
						roarr: '⇾',
						robrk: '⟧',
						ropar: '⦆',
						ropf: '𝕣',
						Ropf: 'ℝ',
						roplus: '⨮',
						rotimes: '⨵',
						RoundImplies: '⥰',
						rpar: ')',
						rpargt: '⦔',
						rppolint: '⨒',
						rrarr: '⇉',
						Rrightarrow: '⇛',
						rsaquo: '›',
						rscr: '𝓇',
						Rscr: 'ℛ',
						rsh: '↱',
						Rsh: '↱',
						rsqb: ']',
						rsquo: '’',
						rsquor: '’',
						rthree: '⋌',
						rtimes: '⋊',
						rtri: '▹',
						rtrie: '⊵',
						rtrif: '▸',
						rtriltri: '⧎',
						RuleDelayed: '⧴',
						ruluhar: '⥨',
						rx: '℞',
						Sacute: 'Ś',
						sacute: 'ś',
						sbquo: '‚',
						scap: '⪸',
						Scaron: 'Š',
						scaron: 'š',
						Sc: '⪼',
						sc: '≻',
						sccue: '≽',
						sce: '⪰',
						scE: '⪴',
						Scedil: 'Ş',
						scedil: 'ş',
						Scirc: 'Ŝ',
						scirc: 'ŝ',
						scnap: '⪺',
						scnE: '⪶',
						scnsim: '⋩',
						scpolint: '⨓',
						scsim: '≿',
						Scy: 'С',
						scy: 'с',
						sdotb: '⊡',
						sdot: '⋅',
						sdote: '⩦',
						searhk: '⤥',
						searr: '↘',
						seArr: '⇘',
						searrow: '↘',
						sect: '§',
						semi: ';',
						seswar: '⤩',
						setminus: '∖',
						setmn: '∖',
						sext: '✶',
						Sfr: '𝔖',
						sfr: '𝔰',
						sfrown: '⌢',
						sharp: '♯',
						SHCHcy: 'Щ',
						shchcy: 'щ',
						SHcy: 'Ш',
						shcy: 'ш',
						ShortDownArrow: '↓',
						ShortLeftArrow: '←',
						shortmid: '∣',
						shortparallel: '∥',
						ShortRightArrow: '→',
						ShortUpArrow: '↑',
						shy: '­',
						Sigma: 'Σ',
						sigma: 'σ',
						sigmaf: 'ς',
						sigmav: 'ς',
						sim: '∼',
						simdot: '⩪',
						sime: '≃',
						simeq: '≃',
						simg: '⪞',
						simgE: '⪠',
						siml: '⪝',
						simlE: '⪟',
						simne: '≆',
						simplus: '⨤',
						simrarr: '⥲',
						slarr: '←',
						SmallCircle: '∘',
						smallsetminus: '∖',
						smashp: '⨳',
						smeparsl: '⧤',
						smid: '∣',
						smile: '⌣',
						smt: '⪪',
						smte: '⪬',
						smtes: '⪬︀',
						SOFTcy: 'Ь',
						softcy: 'ь',
						solbar: '⌿',
						solb: '⧄',
						sol: '/',
						Sopf: '𝕊',
						sopf: '𝕤',
						spades: '♠',
						spadesuit: '♠',
						spar: '∥',
						sqcap: '⊓',
						sqcaps: '⊓︀',
						sqcup: '⊔',
						sqcups: '⊔︀',
						Sqrt: '√',
						sqsub: '⊏',
						sqsube: '⊑',
						sqsubset: '⊏',
						sqsubseteq: '⊑',
						sqsup: '⊐',
						sqsupe: '⊒',
						sqsupset: '⊐',
						sqsupseteq: '⊒',
						square: '□',
						Square: '□',
						SquareIntersection: '⊓',
						SquareSubset: '⊏',
						SquareSubsetEqual: '⊑',
						SquareSuperset: '⊐',
						SquareSupersetEqual: '⊒',
						SquareUnion: '⊔',
						squarf: '▪',
						squ: '□',
						squf: '▪',
						srarr: '→',
						Sscr: '𝒮',
						sscr: '𝓈',
						ssetmn: '∖',
						ssmile: '⌣',
						sstarf: '⋆',
						Star: '⋆',
						star: '☆',
						starf: '★',
						straightepsilon: 'ϵ',
						straightphi: 'ϕ',
						strns: '¯',
						sub: '⊂',
						Sub: '⋐',
						subdot: '⪽',
						subE: '⫅',
						sube: '⊆',
						subedot: '⫃',
						submult: '⫁',
						subnE: '⫋',
						subne: '⊊',
						subplus: '⪿',
						subrarr: '⥹',
						subset: '⊂',
						Subset: '⋐',
						subseteq: '⊆',
						subseteqq: '⫅',
						SubsetEqual: '⊆',
						subsetneq: '⊊',
						subsetneqq: '⫋',
						subsim: '⫇',
						subsub: '⫕',
						subsup: '⫓',
						succapprox: '⪸',
						succ: '≻',
						succcurlyeq: '≽',
						Succeeds: '≻',
						SucceedsEqual: '⪰',
						SucceedsSlantEqual: '≽',
						SucceedsTilde: '≿',
						succeq: '⪰',
						succnapprox: '⪺',
						succneqq: '⪶',
						succnsim: '⋩',
						succsim: '≿',
						SuchThat: '∋',
						sum: '∑',
						Sum: '∑',
						sung: '♪',
						sup1: '¹',
						sup2: '²',
						sup3: '³',
						sup: '⊃',
						Sup: '⋑',
						supdot: '⪾',
						supdsub: '⫘',
						supE: '⫆',
						supe: '⊇',
						supedot: '⫄',
						Superset: '⊃',
						SupersetEqual: '⊇',
						suphsol: '⟉',
						suphsub: '⫗',
						suplarr: '⥻',
						supmult: '⫂',
						supnE: '⫌',
						supne: '⊋',
						supplus: '⫀',
						supset: '⊃',
						Supset: '⋑',
						supseteq: '⊇',
						supseteqq: '⫆',
						supsetneq: '⊋',
						supsetneqq: '⫌',
						supsim: '⫈',
						supsub: '⫔',
						supsup: '⫖',
						swarhk: '⤦',
						swarr: '↙',
						swArr: '⇙',
						swarrow: '↙',
						swnwar: '⤪',
						szlig: 'ß',
						Tab: '\t',
						target: '⌖',
						Tau: 'Τ',
						tau: 'τ',
						tbrk: '⎴',
						Tcaron: 'Ť',
						tcaron: 'ť',
						Tcedil: 'Ţ',
						tcedil: 'ţ',
						Tcy: 'Т',
						tcy: 'т',
						tdot: '⃛',
						telrec: '⌕',
						Tfr: '𝔗',
						tfr: '𝔱',
						there4: '∴',
						therefore: '∴',
						Therefore: '∴',
						Theta: 'Θ',
						theta: 'θ',
						thetasym: 'ϑ',
						thetav: 'ϑ',
						thickapprox: '≈',
						thicksim: '∼',
						ThickSpace: '  ',
						ThinSpace: ' ',
						thinsp: ' ',
						thkap: '≈',
						thksim: '∼',
						THORN: 'Þ',
						thorn: 'þ',
						tilde: '˜',
						Tilde: '∼',
						TildeEqual: '≃',
						TildeFullEqual: '≅',
						TildeTilde: '≈',
						timesbar: '⨱',
						timesb: '⊠',
						times: '×',
						timesd: '⨰',
						tint: '∭',
						toea: '⤨',
						topbot: '⌶',
						topcir: '⫱',
						top: '⊤',
						Topf: '𝕋',
						topf: '𝕥',
						topfork: '⫚',
						tosa: '⤩',
						tprime: '‴',
						trade: '™',
						TRADE: '™',
						triangle: '▵',
						triangledown: '▿',
						triangleleft: '◃',
						trianglelefteq: '⊴',
						triangleq: '≜',
						triangleright: '▹',
						trianglerighteq: '⊵',
						tridot: '◬',
						trie: '≜',
						triminus: '⨺',
						TripleDot: '⃛',
						triplus: '⨹',
						trisb: '⧍',
						tritime: '⨻',
						trpezium: '⏢',
						Tscr: '𝒯',
						tscr: '𝓉',
						TScy: 'Ц',
						tscy: 'ц',
						TSHcy: 'Ћ',
						tshcy: 'ћ',
						Tstrok: 'Ŧ',
						tstrok: 'ŧ',
						twixt: '≬',
						twoheadleftarrow: '↞',
						twoheadrightarrow: '↠',
						Uacute: 'Ú',
						uacute: 'ú',
						uarr: '↑',
						Uarr: '↟',
						uArr: '⇑',
						Uarrocir: '⥉',
						Ubrcy: 'Ў',
						ubrcy: 'ў',
						Ubreve: 'Ŭ',
						ubreve: 'ŭ',
						Ucirc: 'Û',
						ucirc: 'û',
						Ucy: 'У',
						ucy: 'у',
						udarr: '⇅',
						Udblac: 'Ű',
						udblac: 'ű',
						udhar: '⥮',
						ufisht: '⥾',
						Ufr: '𝔘',
						ufr: '𝔲',
						Ugrave: 'Ù',
						ugrave: 'ù',
						uHar: '⥣',
						uharl: '↿',
						uharr: '↾',
						uhblk: '▀',
						ulcorn: '⌜',
						ulcorner: '⌜',
						ulcrop: '⌏',
						ultri: '◸',
						Umacr: 'Ū',
						umacr: 'ū',
						uml: '¨',
						UnderBar: '_',
						UnderBrace: '⏟',
						UnderBracket: '⎵',
						UnderParenthesis: '⏝',
						Union: '⋃',
						UnionPlus: '⊎',
						Uogon: 'Ų',
						uogon: 'ų',
						Uopf: '𝕌',
						uopf: '𝕦',
						UpArrowBar: '⤒',
						uparrow: '↑',
						UpArrow: '↑',
						Uparrow: '⇑',
						UpArrowDownArrow: '⇅',
						updownarrow: '↕',
						UpDownArrow: '↕',
						Updownarrow: '⇕',
						UpEquilibrium: '⥮',
						upharpoonleft: '↿',
						upharpoonright: '↾',
						uplus: '⊎',
						UpperLeftArrow: '↖',
						UpperRightArrow: '↗',
						upsi: 'υ',
						Upsi: 'ϒ',
						upsih: 'ϒ',
						Upsilon: 'Υ',
						upsilon: 'υ',
						UpTeeArrow: '↥',
						UpTee: '⊥',
						upuparrows: '⇈',
						urcorn: '⌝',
						urcorner: '⌝',
						urcrop: '⌎',
						Uring: 'Ů',
						uring: 'ů',
						urtri: '◹',
						Uscr: '𝒰',
						uscr: '𝓊',
						utdot: '⋰',
						Utilde: 'Ũ',
						utilde: 'ũ',
						utri: '▵',
						utrif: '▴',
						uuarr: '⇈',
						Uuml: 'Ü',
						uuml: 'ü',
						uwangle: '⦧',
						vangrt: '⦜',
						varepsilon: 'ϵ',
						varkappa: 'ϰ',
						varnothing: '∅',
						varphi: 'ϕ',
						varpi: 'ϖ',
						varpropto: '∝',
						varr: '↕',
						vArr: '⇕',
						varrho: 'ϱ',
						varsigma: 'ς',
						varsubsetneq: '⊊︀',
						varsubsetneqq: '⫋︀',
						varsupsetneq: '⊋︀',
						varsupsetneqq: '⫌︀',
						vartheta: 'ϑ',
						vartriangleleft: '⊲',
						vartriangleright: '⊳',
						vBar: '⫨',
						Vbar: '⫫',
						vBarv: '⫩',
						Vcy: 'В',
						vcy: 'в',
						vdash: '⊢',
						vDash: '⊨',
						Vdash: '⊩',
						VDash: '⊫',
						Vdashl: '⫦',
						veebar: '⊻',
						vee: '∨',
						Vee: '⋁',
						veeeq: '≚',
						vellip: '⋮',
						verbar: '|',
						Verbar: '‖',
						vert: '|',
						Vert: '‖',
						VerticalBar: '∣',
						VerticalLine: '|',
						VerticalSeparator: '❘',
						VerticalTilde: '≀',
						VeryThinSpace: ' ',
						Vfr: '𝔙',
						vfr: '𝔳',
						vltri: '⊲',
						vnsub: '⊂⃒',
						vnsup: '⊃⃒',
						Vopf: '𝕍',
						vopf: '𝕧',
						vprop: '∝',
						vrtri: '⊳',
						Vscr: '𝒱',
						vscr: '𝓋',
						vsubnE: '⫋︀',
						vsubne: '⊊︀',
						vsupnE: '⫌︀',
						vsupne: '⊋︀',
						Vvdash: '⊪',
						vzigzag: '⦚',
						Wcirc: 'Ŵ',
						wcirc: 'ŵ',
						wedbar: '⩟',
						wedge: '∧',
						Wedge: '⋀',
						wedgeq: '≙',
						weierp: '℘',
						Wfr: '𝔚',
						wfr: '𝔴',
						Wopf: '𝕎',
						wopf: '𝕨',
						wp: '℘',
						wr: '≀',
						wreath: '≀',
						Wscr: '𝒲',
						wscr: '𝓌',
						xcap: '⋂',
						xcirc: '◯',
						xcup: '⋃',
						xdtri: '▽',
						Xfr: '𝔛',
						xfr: '𝔵',
						xharr: '⟷',
						xhArr: '⟺',
						Xi: 'Ξ',
						xi: 'ξ',
						xlarr: '⟵',
						xlArr: '⟸',
						xmap: '⟼',
						xnis: '⋻',
						xodot: '⨀',
						Xopf: '𝕏',
						xopf: '𝕩',
						xoplus: '⨁',
						xotime: '⨂',
						xrarr: '⟶',
						xrArr: '⟹',
						Xscr: '𝒳',
						xscr: '𝓍',
						xsqcup: '⨆',
						xuplus: '⨄',
						xutri: '△',
						xvee: '⋁',
						xwedge: '⋀',
						Yacute: 'Ý',
						yacute: 'ý',
						YAcy: 'Я',
						yacy: 'я',
						Ycirc: 'Ŷ',
						ycirc: 'ŷ',
						Ycy: 'Ы',
						ycy: 'ы',
						yen: '¥',
						Yfr: '𝔜',
						yfr: '𝔶',
						YIcy: 'Ї',
						yicy: 'ї',
						Yopf: '𝕐',
						yopf: '𝕪',
						Yscr: '𝒴',
						yscr: '𝓎',
						YUcy: 'Ю',
						yucy: 'ю',
						yuml: 'ÿ',
						Yuml: 'Ÿ',
						Zacute: 'Ź',
						zacute: 'ź',
						Zcaron: 'Ž',
						zcaron: 'ž',
						Zcy: 'З',
						zcy: 'з',
						Zdot: 'Ż',
						zdot: 'ż',
						zeetrf: 'ℨ',
						ZeroWidthSpace: '​',
						Zeta: 'Ζ',
						zeta: 'ζ',
						zfr: '𝔷',
						Zfr: 'ℨ',
						ZHcy: 'Ж',
						zhcy: 'ж',
						zigrarr: '⇝',
						zopf: '𝕫',
						Zopf: 'ℤ',
						Zscr: '𝒵',
						zscr: '𝓏',
						zwj: '‍',
						zwnj: '‌'
					},
					a = {
						Aacute: 'Á',
						aacute: 'á',
						Acirc: 'Â',
						acirc: 'â',
						acute: '´',
						AElig: 'Æ',
						aelig: 'æ',
						Agrave: 'À',
						agrave: 'à',
						amp: '&',
						AMP: '&',
						Aring: 'Å',
						aring: 'å',
						Atilde: 'Ã',
						atilde: 'ã',
						Auml: 'Ä',
						auml: 'ä',
						brvbar: '¦',
						Ccedil: 'Ç',
						ccedil: 'ç',
						cedil: '¸',
						cent: '¢',
						copy: '©',
						COPY: '©',
						curren: '¤',
						deg: '°',
						divide: '÷',
						Eacute: 'É',
						eacute: 'é',
						Ecirc: 'Ê',
						ecirc: 'ê',
						Egrave: 'È',
						egrave: 'è',
						ETH: 'Ð',
						eth: 'ð',
						Euml: 'Ë',
						euml: 'ë',
						frac12: '½',
						frac14: '¼',
						frac34: '¾',
						gt: '>',
						GT: '>',
						Iacute: 'Í',
						iacute: 'í',
						Icirc: 'Î',
						icirc: 'î',
						iexcl: '¡',
						Igrave: 'Ì',
						igrave: 'ì',
						iquest: '¿',
						Iuml: 'Ï',
						iuml: 'ï',
						laquo: '«',
						lt: '<',
						LT: '<',
						macr: '¯',
						micro: 'µ',
						middot: '·',
						nbsp: ' ',
						not: '¬',
						Ntilde: 'Ñ',
						ntilde: 'ñ',
						Oacute: 'Ó',
						oacute: 'ó',
						Ocirc: 'Ô',
						ocirc: 'ô',
						Ograve: 'Ò',
						ograve: 'ò',
						ordf: 'ª',
						ordm: 'º',
						Oslash: 'Ø',
						oslash: 'ø',
						Otilde: 'Õ',
						otilde: 'õ',
						Ouml: 'Ö',
						ouml: 'ö',
						para: '¶',
						plusmn: '±',
						pound: '£',
						quot: '"',
						QUOT: '"',
						raquo: '»',
						reg: '®',
						REG: '®',
						sect: '§',
						shy: '­',
						sup1: '¹',
						sup2: '²',
						sup3: '³',
						szlig: 'ß',
						THORN: 'Þ',
						thorn: 'þ',
						times: '×',
						Uacute: 'Ú',
						uacute: 'ú',
						Ucirc: 'Û',
						ucirc: 'û',
						Ugrave: 'Ù',
						ugrave: 'ù',
						uml: '¨',
						Uuml: 'Ü',
						uuml: 'ü',
						Yacute: 'Ý',
						yacute: 'ý',
						yen: '¥',
						yuml: 'ÿ'
					},
					co = { amp: '&', apos: "'", gt: '>', lt: '<', quot: '"' },
					uo = {},
					l =
						(Kr && Kr.__importDefault) ||
						function (e) {
							return e && e.__esModule ? e : { default: e };
						},
					po =
						(Object.defineProperty(uo, '__esModule', { value: !0 }),
						l({
							0: 65533,
							128: 8364,
							130: 8218,
							131: 402,
							132: 8222,
							133: 8230,
							134: 8224,
							135: 8225,
							136: 710,
							137: 8240,
							138: 352,
							139: 8249,
							140: 338,
							142: 381,
							145: 8216,
							146: 8217,
							147: 8220,
							148: 8221,
							149: 8226,
							150: 8211,
							151: 8212,
							152: 732,
							153: 8482,
							154: 353,
							155: 8250,
							156: 339,
							158: 382,
							159: 376
						})),
					fo =
						String.fromCodePoint ||
						function (e) {
							var t = '';
							return (
								65535 < e &&
									((e -= 65536),
									(t += String.fromCharCode(((e >>> 10) & 1023) | 55296)),
									(e = 56320 | (1023 & e))),
								(t += String.fromCharCode(e))
							);
						};
				uo.default = function (e) {
					return (55296 <= e && e <= 57343) || 1114111 < e
						? '�'
						: (e in po.default && (e = po.default[e]), fo(e));
				};
				var l =
						(Kr && Kr.__importDefault) ||
						function (e) {
							return e && e.__esModule ? e : { default: e };
						},
					ho =
						(Object.defineProperty(so, '__esModule', { value: !0 }),
						(so.decodeHTML = so.decodeHTMLStrict = so.decodeXML = void 0),
						l(lo)),
					mo = l(a),
					a = l(co),
					go = l(uo),
					vo = /&(?:[a-zA-Z0-9]+|#[xX][\da-fA-F]+|#\d+);/g;
				function yo(e) {
					var t = wo(e);
					return function (e) {
						return String(e).replace(vo, t);
					};
				}
				(so.decodeXML = yo(a.default)), (so.decodeHTMLStrict = yo(ho.default));
				function bo(e, t) {
					return e < t ? 1 : -1;
				}
				function wo(n) {
					return function (e) {
						var t;
						return '#' === e.charAt(1)
							? 'X' === (t = e.charAt(2)) || 'x' === t
								? go.default(parseInt(e.substr(3), 16))
								: go.default(parseInt(e.substr(2), 10))
							: n[e.slice(1, -1)] || e;
					};
				}
				so.decodeHTML = (function () {
					for (
						var e = Object.keys(mo.default).sort(bo),
							t = Object.keys(ho.default).sort(bo),
							n = 0,
							r = 0;
						n < t.length;
						n++
					)
						e[r] === t[n] ? ((t[n] += ';?'), r++) : (t[n] += ';');
					var o = new RegExp('&(?:' + t.join('|') + '|#[xX][\\da-fA-F]+;?|#\\d+;?)', 'g'),
						i = wo(ho.default);
					function a(e) {
						return ';' !== e.substr(-1) && (e += ';'), i(e);
					}
					return function (e) {
						return String(e).replace(o, a);
					};
				})();
				(l = {}),
					(uo =
						(Kr && Kr.__importDefault) ||
						function (e) {
							return e && e.__esModule ? e : { default: e };
						});
				Object.defineProperty(l, '__esModule', { value: !0 }),
					(l.escapeUTF8 = l.escape = l.encodeNonAsciiHTML = l.encodeHTML = l.encodeXML = void 0);
				var a = To(uo(co).default),
					ko = Eo(a);
				l.encodeXML = Ro(a);
				var xo,
					Co,
					Kr = To(uo(lo).default),
					co = Eo(Kr);
				function To(n) {
					return Object.keys(n)
						.sort()
						.reduce(function (e, t) {
							return (e[n[t]] = '&' + t + ';'), e;
						}, {});
				}
				function Eo(e) {
					for (var t = [], n = [], r = 0, o = Object.keys(e); r < o.length; r++) {
						var i = o[r];
						1 === i.length ? t.push('\\' + i) : n.push(i);
					}
					t.sort();
					for (var a = 0; a < t.length - 1; a++) {
						for (var s = a; s < t.length - 1 && t[s].charCodeAt(1) + 1 === t[s + 1].charCodeAt(1); )
							s += 1;
						var l = 1 + s - a;
						l < 3 || t.splice(a, l, t[a] + '-' + t[s]);
					}
					return n.unshift('[' + t.join('') + ']'), new RegExp(n.join('|'), 'g');
				}
				(l.encodeHTML =
					((xo = Kr),
					(Co = co),
					function (e) {
						return e
							.replace(Co, function (e) {
								return xo[e];
							})
							.replace(Lo, No);
					})),
					(l.encodeNonAsciiHTML = Ro(Kr));
				var Lo =
						/(?:[\x80-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g,
					Mo =
						null != String.prototype.codePointAt
							? function (e) {
									return e.codePointAt(0);
								}
							: function (e) {
									return 1024 * (e.charCodeAt(0) - 55296) + e.charCodeAt(1) - 56320 + 65536;
								};
				function No(e) {
					return '&#x' + (1 < e.length ? Mo(e) : e.charCodeAt(0)).toString(16).toUpperCase() + ';';
				}
				var Ao,
					Do,
					So,
					Oo,
					Io = new RegExp(ko.source + '|' + Lo.source, 'g');
				function Ro(t) {
					return function (e) {
						return e.replace(Io, function (e) {
							return t[e] || No(e);
						});
					};
				}
				(l.escape = function (e) {
					return e.replace(Io, No);
				}),
					(l.escapeUTF8 = function (e) {
						return e.replace(ko, No);
					}),
					(a = ao),
					Object.defineProperty(a, '__esModule', { value: !0 }),
					(a.decodeXMLStrict =
						a.decodeHTML5Strict =
						a.decodeHTML4Strict =
						a.decodeHTML5 =
						a.decodeHTML4 =
						a.decodeHTMLStrict =
						a.decodeHTML =
						a.decodeXML =
						a.encodeHTML5 =
						a.encodeHTML4 =
						a.escapeUTF8 =
						a.escape =
						a.encodeNonAsciiHTML =
						a.encodeHTML =
						a.encodeXML =
						a.encode =
						a.decodeStrict =
						a.decode =
							void 0),
					(Ao = so),
					(Do = l),
					(a.decode = function (e, t) {
						return (!t || t <= 0 ? Ao.decodeXML : Ao.decodeHTML)(e);
					}),
					(a.decodeStrict = function (e, t) {
						return (!t || t <= 0 ? Ao.decodeXML : Ao.decodeHTMLStrict)(e);
					}),
					(a.encode = function (e, t) {
						return (!t || t <= 0 ? Do.encodeXML : Do.encodeHTML)(e);
					}),
					(So = l),
					Object.defineProperty(a, 'encodeXML', {
						enumerable: !0,
						get: function () {
							return So.encodeXML;
						}
					}),
					Object.defineProperty(a, 'encodeHTML', {
						enumerable: !0,
						get: function () {
							return So.encodeHTML;
						}
					}),
					Object.defineProperty(a, 'encodeNonAsciiHTML', {
						enumerable: !0,
						get: function () {
							return So.encodeNonAsciiHTML;
						}
					}),
					Object.defineProperty(a, 'escape', {
						enumerable: !0,
						get: function () {
							return So.escape;
						}
					}),
					Object.defineProperty(a, 'escapeUTF8', {
						enumerable: !0,
						get: function () {
							return So.escapeUTF8;
						}
					}),
					Object.defineProperty(a, 'encodeHTML4', {
						enumerable: !0,
						get: function () {
							return So.encodeHTML;
						}
					}),
					Object.defineProperty(a, 'encodeHTML5', {
						enumerable: !0,
						get: function () {
							return So.encodeHTML;
						}
					}),
					(Oo = so),
					Object.defineProperty(a, 'decodeXML', {
						enumerable: !0,
						get: function () {
							return Oo.decodeXML;
						}
					}),
					Object.defineProperty(a, 'decodeHTML', {
						enumerable: !0,
						get: function () {
							return Oo.decodeHTML;
						}
					}),
					Object.defineProperty(a, 'decodeHTMLStrict', {
						enumerable: !0,
						get: function () {
							return Oo.decodeHTMLStrict;
						}
					}),
					Object.defineProperty(a, 'decodeHTML4', {
						enumerable: !0,
						get: function () {
							return Oo.decodeHTML;
						}
					}),
					Object.defineProperty(a, 'decodeHTML5', {
						enumerable: !0,
						get: function () {
							return Oo.decodeHTML;
						}
					}),
					Object.defineProperty(a, 'decodeHTML4Strict', {
						enumerable: !0,
						get: function () {
							return Oo.decodeHTMLStrict;
						}
					}),
					Object.defineProperty(a, 'decodeHTML5Strict', {
						enumerable: !0,
						get: function () {
							return Oo.decodeHTMLStrict;
						}
					}),
					Object.defineProperty(a, 'decodeXMLStrict', {
						enumerable: !0,
						get: function () {
							return Oo.decodeXML;
						}
					});
				function Po(e) {
					return e.charCodeAt(0) === Bo ? e.charAt(1) : ao.decodeHTML(e);
				}
				var uo = '&(?:#x[a-f0-9]{1,6}|#[0-9]{1,7}|[a-z][a-z0-9]{1,31});',
					Bo = 92,
					Ho = /[\\&]/,
					lo = '[!"#$%&\'()*+,./:;<=>?@[\\\\\\]^_`{|}~-]',
					Fo = new RegExp('\\\\' + lo + '|' + uo, 'gi'),
					qo = new RegExp('[&<>"]', 'g');
				function jo(e) {
					return Ho.test(e) ? e.replace(Fo, Po) : e;
				}
				function _o(t) {
					try {
						return io(t);
					} catch (e) {
						return t;
					}
				}
				function zo(e) {
					switch (e) {
						case '&':
							return '&amp;';
						case '<':
							return '&lt;';
						case '>':
							return '&gt;';
						case '"':
							return '&quot;';
						default:
							return e;
					}
				}
				function Uo(e) {
					return qo.test(e) ? e.replace(qo, zo) : e;
				}
				function Vo(e, t) {
					for (var n = [], r = 0; r < t; r++) n.push(e);
					return n.join('');
				}
				function $o(e) {
					return !e || !/[^ \t]+/.test(e);
				}
				(Go.prototype.next = function () {
					var e,
						t = this.current,
						n = this.entering;
					return null === t
						? null
						: ((e = Zo(t)),
							n && e
								? t.firstChild
									? ((this.current = t.firstChild), (this.entering = !0))
									: (this.entering = !1)
								: t === this.root
									? (this.current = null)
									: null === t.next
										? ((this.current = t.parent), (this.entering = !1))
										: ((this.current = t.next), (this.entering = !0)),
							{ entering: n, node: t });
				}),
					(Go.prototype.resumeAt = function (e, t) {
						(this.current = e), (this.entering = !0 === t);
					});
				var Wo = Go;
				function Go(e) {
					(this.current = e), (this.root = e), (this.entering = !0);
				}
				function Zo(e) {
					switch (e.type) {
						case 'document':
						case 'blockQuote':
						case 'list':
						case 'item':
						case 'paragraph':
						case 'heading':
						case 'emph':
						case 'strong':
						case 'strike':
						case 'link':
						case 'image':
						case 'table':
						case 'tableHead':
						case 'tableBody':
						case 'tableRow':
						case 'tableCell':
						case 'tableDelimRow':
						case 'customInline':
							return !0;
						default:
							return !1;
					}
				}
				var Xo = 1,
					Ko = {};
				function Qo(e) {
					delete Ko[e];
				}
				(Jo.prototype.isContainer = function () {
					return Zo(this);
				}),
					(Jo.prototype.unlink = function () {
						this.prev
							? (this.prev.next = this.next)
							: this.parent && (this.parent.firstChild = this.next),
							this.next
								? (this.next.prev = this.prev)
								: this.parent && (this.parent.lastChild = this.prev),
							(this.parent = null),
							(this.next = null),
							(this.prev = null);
					}),
					(Jo.prototype.replaceWith = function (e) {
						this.insertBefore(e), this.unlink();
					}),
					(Jo.prototype.insertAfter = function (e) {
						e.unlink(),
							(e.next = this.next),
							e.next && (e.next.prev = e),
							((e.prev = this).next = e),
							this.parent && ((e.parent = this.parent), e.next || (e.parent.lastChild = e));
					}),
					(Jo.prototype.insertBefore = function (e) {
						e.unlink(),
							(e.prev = this.prev),
							e.prev && (e.prev.next = e),
							(((e.next = this).prev = e).parent = this.parent),
							e.prev || (e.parent.firstChild = e);
					}),
					(Jo.prototype.appendChild = function (e) {
						e.unlink(),
							(e.parent = this).lastChild
								? ((this.lastChild.next = e).prev = this.lastChild)
								: (this.firstChild = e),
							(this.lastChild = e);
					}),
					(Jo.prototype.prependChild = function (e) {
						e.unlink(),
							(e.parent = this).firstChild
								? (((this.firstChild.prev = e).next = this.firstChild), (this.firstChild = e))
								: ((this.firstChild = e), (this.lastChild = e));
					}),
					(Jo.prototype.walker = function () {
						return new Wo(this);
					});
				var Yo = Jo;
				function Jo(e, t) {
					(this.parent = null),
						(this.prev = null),
						(this.next = null),
						(this.firstChild = null),
						(this.lastChild = null),
						(this.literal = null),
						(this.id = 'document' === e ? -1 : Xo++),
						(this.type = e),
						(this.sourcepos = t),
						(Ko[this.id] = this);
				}
				eo(ni, (ei = Yo));
				var ei,
					ti = ni;
				function ni(e, t) {
					t = ei.call(this, e, t) || this;
					return (
						(t.open = !0),
						(t.lineOffsets = null),
						(t.stringContent = null),
						(t.lastLineBlank = !1),
						(t.lastLineChecked = !1),
						(t.type = e),
						t
					);
				}
				eo(ii, (ri = ti));
				var ri,
					oi = ii;
				function ii() {
					var e = (null !== ri && ri.apply(this, arguments)) || this;
					return (e.listData = null), e;
				}
				eo(li, (ai = ti));
				var ai,
					si = li;
				function li() {
					var e = (null !== ai && ai.apply(this, arguments)) || this;
					return (e.level = 0), (e.headingType = 'atx'), e;
				}
				eo(pi, (ci = ti));
				var ci,
					ui = pi;
				function pi() {
					var e = (null !== ci && ci.apply(this, arguments)) || this;
					return (
						(e.isFenced = !1),
						(e.fenceChar = null),
						(e.fenceLength = 0),
						(e.fenceOffset = -1),
						(e.info = null),
						(e.infoPadding = 0),
						e
					);
				}
				eo(hi, (di = ti));
				var di,
					fi = hi;
				function hi() {
					var e = (null !== di && di.apply(this, arguments)) || this;
					return (e.columns = []), e;
				}
				eo(vi, (mi = ti));
				var mi,
					gi = vi;
				function vi() {
					var e = (null !== mi && mi.apply(this, arguments)) || this;
					return (
						(e.startIdx = 0),
						(e.endIdx = 0),
						(e.paddingLeft = 0),
						(e.paddingRight = 0),
						(e.ignored = !1),
						e
					);
				}
				eo(wi, (yi = ti));
				var yi,
					bi = wi;
				function wi() {
					var e = (null !== yi && yi.apply(this, arguments)) || this;
					return (e.title = ''), (e.dest = ''), (e.label = ''), e;
				}
				eo(Ci, (ki = ti));
				var ki,
					xi = Ci;
				function Ci() {
					var e = (null !== ki && ki.apply(this, arguments)) || this;
					return (e.syntaxLength = 0), (e.offset = -1), (e.info = ''), e;
				}
				eo(Li, (Ti = ti));
				var Ti,
					Ei = Li;
				function Li() {
					var e = (null !== Ti && Ti.apply(this, arguments)) || this;
					return (e.htmlBlockType = -1), e;
				}
				eo(Ai, (Mi = Yo));
				var Mi,
					Ni = Ai;
				function Ai() {
					var e = (null !== Mi && Mi.apply(this, arguments)) || this;
					return (e.destination = null), (e.title = null), (e.extendedAutolink = !1), e;
				}
				eo(Oi, (Di = Yo));
				var Di,
					Si = Oi;
				function Oi() {
					var e = (null !== Di && Di.apply(this, arguments)) || this;
					return (e.tickCount = 0), e;
				}
				eo(Pi, (Ii = Yo));
				var Ii,
					Ri = Pi;
				function Pi() {
					var e = (null !== Ii && Ii.apply(this, arguments)) || this;
					return (e.info = ''), e;
				}
				function w(e, t) {
					switch (e) {
						case 'heading':
							return new si(e, t);
						case 'list':
						case 'item':
							return new oi(e, t);
						case 'link':
						case 'image':
							return new Ni(e, t);
						case 'codeBlock':
							return new ui(e, t);
						case 'htmlBlock':
							return new Ei(e, t);
						case 'table':
							return new fi(e, t);
						case 'tableCell':
							return new gi(e, t);
						case 'document':
						case 'paragraph':
						case 'blockQuote':
						case 'thematicBreak':
						case 'tableRow':
						case 'tableBody':
						case 'tableHead':
						case 'frontMatter':
							return new ti(e, t);
						case 'code':
							return new Si(e, t);
						case 'refDef':
							return new bi(e, t);
						case 'customBlock':
							return new xi(e, t);
						case 'customInline':
							return new Ri(e, t);
						default:
							return new Yo(e, t);
					}
				}
				function Bi(e) {
					return 'codeBlock' === e.type;
				}
				function Hi(e) {
					return 'list' === e.type;
				}
				function Fi(e) {
					return 'refDef' === e.type;
				}
				function qi(e) {
					return 'customBlock' === e.type;
				}
				function k(e, t) {
					t = w('text', t);
					return (t.literal = e), t;
				}
				var ji,
					_i,
					co = '[A-Za-z][A-Za-z0-9-]*',
					Kr =
						'<' +
						co +
						'(?:\\s+[a-zA-Z_:][a-zA-Z0-9:._-]*(?:\\s*=\\s*(?:[^"\'=<>`\\x00-\\x20]+|\'[^\']*\'|"[^"]*"))?)*\\s*/?>',
					l = '</' + co + '\\s*[>]',
					zi = new RegExp(
						'^(?:<[A-Za-z][A-Za-z0-9-]*(?:\\s+[a-zA-Z_:][a-zA-Z0-9:._-]*(?:\\s*=\\s*(?:[^"\'=<>`\\x00-\\x20]+|\'[^\']*\'|"[^"]*"))?)*\\s*/?>|</[A-Za-z][A-Za-z0-9-]*\\s*[>]|\x3c!----\x3e|\x3c!--(?:-?[^>-])(?:-?[^-])*--\x3e|[<][?].*?[?][>]|<![A-Z]+\\s+[^>]*>|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>)',
						'i'
					),
					Ui = String.fromCodePoint
						? function (e) {
								try {
									return String.fromCodePoint(e);
								} catch (e) {
									if (e instanceof RangeError) return String.fromCharCode(65533);
									throw e;
								}
							}
						: ((ji = String.fromCharCode),
							(_i = Math.floor),
							function () {
								for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
								var n = [],
									r = -1,
									o = e.length;
								if (!o) return '';
								for (var i = ''; ++r < o; ) {
									var a = Number(e[r]);
									if (!isFinite(a) || a < 0 || 1114111 < a || _i(a) !== a)
										return String.fromCharCode(65533);
									a <= 65535 ? n.push(a) : n.push(55296 + ((a -= 65536) >> 10), (a % 1024) + 56320),
										(r + 1 === o || 16384 < n.length) &&
											((i += ji.apply(void 0, n)), (n.length = 0));
								}
								return i;
							}),
					Vi = '(?:[w-]+.)*[A-Za-z0-9-]+.[A-Za-z0-9-]+',
					$i = '[^<\\s]*[^<?!.,:*_?~\\s]',
					Wi = '[\\w.+-]+@(?:[\\w-]+\\.)+[\\w-]+';
				function Gi(e) {
					for (
						var t, n = new RegExp('(www|https?://).' + Vi + $i, 'g'), r = [];
						(t = n.exec(e));

					) {
						var o = (function (e) {
								var t = /\)+$/.exec(e);
								if (t) {
									for (var n = 0, r = 0, o = e; r < o.length; r++) {
										var i = o[r];
										'(' === i ? (n < 0 ? (n = 1) : (n += 1)) : ')' === i && --n;
									}
									if (n < 0) return (t = Math.min(-n, t[0].length)), e.substring(0, e.length - t);
								}
								return e;
							})(t[0]).replace(/&[A-Za-z0-9]+;$/, ''),
							i = 'www' === t[1] ? 'http://' : '';
						r.push({ text: o, range: [t.index, t.index + o.length - 1], url: i + o });
					}
					return r;
				}
				function Zi(e) {
					return no(
						no([], Gi(e)),
						(function (e) {
							for (var t, n = new RegExp(Wi, 'g'), r = []; (t = n.exec(e)); ) {
								var o = t[0];
								/[_-]+$/.test(o) ||
									r.push({ text: o, range: [t.index, t.index + o.length - 1], url: 'mailto:' + o });
							}
							return r;
						})(e)
					).sort(function (e, t) {
						return e.range[0] - t.range[0];
					});
				}
				function Xi(e, v) {
					var y;
					for ('boolean' == typeof v && (v = Zi); (y = e.next()); )
						!(function () {
							var e = y.entering,
								t = y.node;
							if (e && 'text' === t.type && 'link' !== t.parent.type) {
								var n = t.literal,
									e = v(n);
								if (!e || !e.length) return;
								for (
									var r = 0,
										o = t.sourcepos[0],
										i = o[0],
										a = o[1],
										s = function (e, t) {
											return [
												[i, a + e],
												[i, a + t]
											];
										},
										l = [],
										c = 0,
										u = e;
									c < u.length;
									c++
								) {
									var p = u[c],
										d = p.range,
										f = p.url,
										p = p.text,
										h =
											(d[0] > r && l.push(k(n.substring(r, d[0]), s(r, d[0] - 1))),
											w('link', s.apply(void 0, d)));
									h.appendChild(k(p, s.apply(void 0, d))),
										(h.destination = f),
										(h.extendedAutolink = !0),
										l.push(h),
										(r = d[1] + 1);
								}
								r < n.length && l.push(k(n.substring(r), s(r, n.length - 1)));
								for (var m = 0, g = l; m < g.length; m++) t.insertBefore(g[m]);
								t.unlink();
							}
						})();
				}
				function Ki(e) {
					return e[e.length - 1];
				}
				function Qi(e) {
					return e
						.slice(1, e.length - 1)
						.trim()
						.replace(/[ \t\r\n]+/, ' ')
						.toLowerCase()
						.toUpperCase();
				}
				function Yi(t, n) {
					Object.keys(t).forEach(function (e) {
						n(e, t[e]);
					});
				}
				function Ji(e) {
					return !Object.keys(e).length;
				}
				var so = '\\\\' + lo,
					ea = new RegExp(
						/[!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E42\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC9\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDF3C-\uDF3E]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]/
					),
					ta = new RegExp(
						'^(?:"(' +
							so +
							'|[^"\\x00])*"|\'(' +
							so +
							"|[^'\\x00])*'|\\((" +
							so +
							'|[^()\\x00])*\\))'
					),
					na = /^(?:<(?:[^<>\n\\\x00]|\\.)*>)/,
					ra = new RegExp('^' + lo),
					oa = new RegExp('^' + uo, 'i'),
					ia = /`+/,
					aa = /^`+/,
					sa = /\.\.\./g,
					la = /--+/g,
					ca =
						/^<([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)>/,
					ua = /^<[A-Za-z][A-Za-z0-9.+-]{1,31}:[^<>\x00-\x20]*>/i,
					pa = /^ *(?:\n *)?/,
					da = /^[ \t\n\x0b\x0c\x0d]/,
					fa = /^\s/,
					ha = / *$/,
					ma = /^ */,
					ga = /^ *(?:\n|$)/,
					va = /^\[(?:[^\\\[\]]|\\.){0,1000}\]/,
					ya = /^[^\n`\[\]\\!<&*_'"~$]+/m,
					ba =
						((c.prototype.sourcepos = function (e, t) {
							var n = this.linePosOffset + this.lineOffsets[this.lineIdx],
								r = this.lineStartNum + this.lineIdx,
								e = [r, e + n];
							return 'number' == typeof t ? [e, [r, t + n]] : e;
						}),
						(c.prototype.nextLine = function () {
							(this.lineIdx += 1), (this.linePosOffset = -this.pos);
						}),
						(c.prototype.match = function (e) {
							e = e.exec(this.subject.slice(this.pos));
							return null === e ? null : ((this.pos += e.index + e[0].length), e[0]);
						}),
						(c.prototype.peek = function () {
							return this.pos < this.subject.length ? this.subject.charCodeAt(this.pos) : -1;
						}),
						(c.prototype.spnl = function () {
							return this.match(pa), !0;
						}),
						(c.prototype.parseBackticks = function (e) {
							var t = this.pos + 1,
								n = this.match(aa);
							if (null === n) return !1;
							for (var r, o, i, a, s = this.pos; null !== (r = this.match(ia)); )
								if (r === n)
									return (
										(r = this.subject.slice(s, this.pos - n.length)),
										(o = this.sourcepos(t, this.pos)),
										1 < (i = r.split('\n')).length &&
											((a = Ki(i)),
											(this.lineIdx += i.length - 1),
											(this.linePosOffset = -(this.pos - a.length - n.length)),
											(o[1] = this.sourcepos(this.pos)),
											(r = i.join(' '))),
										(a = w('code', o)),
										0 < r.length &&
										null !== r.match(/[^ ]/) &&
										' ' == r[0] &&
										' ' == r[r.length - 1]
											? (a.literal = r.slice(1, r.length - 1))
											: (a.literal = r),
										(a.tickCount = n.length),
										e.appendChild(a),
										!0
									);
							return (this.pos = s), e.appendChild(k(n, this.sourcepos(t, this.pos - 1))), !0;
						}),
						(c.prototype.parseBackslash = function (e) {
							var t,
								n = this.subject,
								r = ((this.pos += 1), this.pos);
							return (
								10 === this.peek()
									? ((this.pos += 1),
										(t = w('linebreak', this.sourcepos(this.pos - 1, this.pos))),
										e.appendChild(t),
										this.nextLine())
									: ra.test(n.charAt(this.pos))
										? (e.appendChild(k(n.charAt(this.pos), this.sourcepos(r, this.pos))),
											(this.pos += 1))
										: e.appendChild(k('\\', this.sourcepos(r, r))),
								!0
							);
						}),
						(c.prototype.parseAutolink = function (e) {
							var t,
								n,
								r,
								o = this.pos + 1;
							return (t = this.match(ca))
								? ((n = t.slice(1, t.length - 1)),
									((r = w('link', this.sourcepos(o, this.pos))).destination = _o('mailto:' + n)),
									(r.title = ''),
									r.appendChild(k(n, this.sourcepos(o + 1, this.pos - 1))),
									e.appendChild(r),
									!0)
								: !!(t = this.match(ua)) &&
										((n = t.slice(1, t.length - 1)),
										((r = w('link', this.sourcepos(o, this.pos))).destination = _o(n)),
										(r.title = ''),
										r.appendChild(k(n, this.sourcepos(o + 1, this.pos - 1))),
										e.appendChild(r),
										!0);
						}),
						(c.prototype.parseHtmlTag = function (e) {
							var t = this.pos + 1,
								n = this.match(zi);
							return (
								null !== n &&
								(((t = w('htmlInline', this.sourcepos(t, this.pos))).literal = n),
								e.appendChild(t),
								!0)
							);
						}),
						(c.prototype.scanDelims = function (e) {
							var t,
								n,
								r,
								o,
								i,
								a,
								s,
								l = 0,
								c = this.pos;
							if (39 === e || 34 === e) l++, this.pos++;
							else for (; this.peek() === e; ) l++, this.pos++;
							return 0 === l || (l < 2 && (126 === e || 36 === e))
								? ((this.pos = c), null)
								: ((s = 0 === c ? '\n' : this.subject.charAt(c - 1)),
									(n = -1 === (n = this.peek()) ? '\n' : Ui(n)),
									(t = fa.test(n)),
									(n = ea.test(n)),
									(r = fa.test(s)),
									(s = ea.test(s)),
									(o = !t && (!n || r || s)),
									(i = !r && (!s || t || n)),
									(s =
										95 === e
											? ((a = o && (!i || s)), i && (!o || n))
											: 39 === e || 34 === e
												? ((a = o && !i), i)
												: 36 === e
													? ((a = !t), !r)
													: ((a = o), i)),
									(this.pos = c),
									{ numdelims: l, canOpen: a, canClose: s });
						}),
						(c.prototype.handleDelim = function (e, t) {
							var n,
								r,
								o = this.scanDelims(e);
							return (
								!!o &&
								((n = o.numdelims),
								(r = this.pos + 1),
								(this.pos += n),
								(r = k(
									39 === e ? '’' : 34 === e ? '“' : this.subject.slice(r - 1, this.pos),
									this.sourcepos(r, this.pos)
								)),
								t.appendChild(r),
								(o.canOpen || o.canClose) &&
									(this.options.smart || (39 !== e && 34 !== e)) &&
									((this.delimiters = {
										cc: e,
										numdelims: n,
										origdelims: n,
										node: r,
										previous: this.delimiters,
										next: null,
										canOpen: o.canOpen,
										canClose: o.canClose
									}),
									this.delimiters.previous) &&
									(this.delimiters.previous.next = this.delimiters),
								!0)
							);
						}),
						(c.prototype.removeDelimiter = function (e) {
							null !== e.previous && (e.previous.next = e.next),
								null === e.next ? (this.delimiters = e.previous) : (e.next.previous = e.previous);
						}),
						(c.prototype.removeDelimitersBetween = function (e, t) {
							e.next !== t && ((e.next = t).previous = e);
						}),
						(c.prototype.processEmphasis = function (e) {
							((t = {})[95] = [e, e, e]),
								(t[42] = [e, e, e]),
								(t[39] = [e]),
								(t[34] = [e]),
								(t[126] = [e]),
								(t[36] = [e]);
							for (var t, n, r, o, i, a = t, s = this.delimiters; null !== s && s.previous !== e; )
								s = s.previous;
							for (; null !== s; ) {
								var l = s.cc,
									c = 95 === l || 42 === l;
								if (s.canClose) {
									for (
										n = s.previous, o = !1;
										null !== n && n !== e && n !== a[l][c ? s.origdelims % 3 : 0];

									) {
										if (
											((i =
												c &&
												(s.canOpen || n.canClose) &&
												s.origdelims % 3 != 0 &&
												(n.origdelims + s.origdelims) % 3 == 0),
											n.cc === s.cc && n.canOpen && !i)
										) {
											o = !0;
											break;
										}
										n = n.previous;
									}
									if (((r = s), c || 126 === l || 36 === l))
										if (o) {
											if (n) {
												for (
													var u,
														p = 2 <= s.numdelims && 2 <= n.numdelims ? 2 : 1,
														d = c ? 0 : 1,
														f = n.node,
														h = s.node,
														m = c ? (1 == p ? 'emph' : 'strong') : 'strike',
														g = w((m = 36 === l ? 'customInline' : m)),
														m = f.sourcepos[1],
														v = h.sourcepos[0],
														y =
															((g.sourcepos = [
																[m[0], m[1] - p + 1],
																[v[0], v[1] + p - 1]
															]),
															(f.sourcepos[1][1] -= p),
															(h.sourcepos[0][1] += p),
															(f.literal = f.literal.slice(p)),
															(h.literal = h.literal.slice(p)),
															(n.numdelims -= p),
															(s.numdelims -= p),
															f.next);
													y && y !== h;

												)
													(u = y.next), y.unlink(), g.appendChild(y), (y = u);
												36 === l &&
													((p = (v = (m = g.firstChild).literal || '').split(/\s/)[0]),
													(g.info = p),
													v.length <= p.length
														? m.unlink()
														: ((m.sourcepos[0][1] += p.length),
															(m.literal = v.replace(p + ' ', '')))),
													f.insertAfter(g),
													this.removeDelimitersBetween(n, s),
													n.numdelims <= d &&
														(0 === n.numdelims && f.unlink(), this.removeDelimiter(n)),
													s.numdelims <= d &&
														(0 === s.numdelims && h.unlink(),
														(m = s.next),
														this.removeDelimiter(s),
														(s = m));
											}
										} else s = s.next;
									else
										39 === l
											? ((s.node.literal = '’'), o && (n.node.literal = '‘'), (s = s.next))
											: 34 === l &&
												((s.node.literal = '”'), o && (n.node.literal = '“'), (s = s.next));
									o ||
										((a[l][c ? r.origdelims % 3 : 0] = r.previous), r.canOpen) ||
										this.removeDelimiter(r);
								} else s = s.next;
							}
							for (; null !== this.delimiters && this.delimiters !== e; )
								this.removeDelimiter(this.delimiters);
						}),
						(c.prototype.parseLinkTitle = function () {
							var e = this.match(ta);
							return null === e ? null : jo(e.substr(1, e.length - 2));
						}),
						(c.prototype.parseLinkDestination = function () {
							var e = this.match(na);
							if (null !== e) return _o(jo(e.substr(1, e.length - 2)));
							if (60 === this.peek()) return null;
							for (var t = this.pos, n = 0, r = void 0; -1 !== (r = this.peek()); )
								if (92 === r && ra.test(this.subject.charAt(this.pos + 1)))
									(this.pos += 1), -1 !== this.peek() && (this.pos += 1);
								else if (40 === r) (this.pos += 1), (n += 1);
								else if (41 === r) {
									if (n < 1) break;
									(this.pos += 1), --n;
								} else {
									if (null !== da.exec(Ui(r))) break;
									this.pos += 1;
								}
							return (this.pos === t && 41 !== r) || 0 !== n
								? null
								: _o(jo((e = this.subject.substr(t, this.pos - t))));
						}),
						(c.prototype.parseLinkLabel = function () {
							var e = this.match(va);
							return null === e || 1001 < e.length ? 0 : e.length;
						}),
						(c.prototype.parseOpenBracket = function (e) {
							var t = this.pos,
								n = ((this.pos += 1), k('[', this.sourcepos(this.pos, this.pos)));
							return e.appendChild(n), this.addBracket(n, t, !1), !0;
						}),
						(c.prototype.parseBang = function (e) {
							var t,
								n = this.pos;
							return (
								(this.pos += 1),
								91 === this.peek()
									? ((this.pos += 1),
										(t = k('![', this.sourcepos(this.pos - 1, this.pos))),
										e.appendChild(t),
										this.addBracket(t, n + 1, !0))
									: ((t = k('!', this.sourcepos(this.pos, this.pos))), e.appendChild(t)),
								!0
							);
						}),
						(c.prototype.parseCloseBracket = function (e) {
							var t = null,
								n = null,
								r = !1,
								o = ((this.pos += 1), this.pos),
								i = this.brackets;
							if (null === i) e.appendChild(k(']', this.sourcepos(o, o)));
							else if (i.active) {
								var a,
									s,
									l = i.image,
									c = this.pos,
									u =
										(40 === this.peek() &&
											(this.pos++,
											this.spnl() &&
											null !== (t = this.parseLinkDestination()) &&
											this.spnl() &&
											(da.test(this.subject.charAt(this.pos - 1)) && (n = this.parseLinkTitle()),
											1) &&
											this.spnl() &&
											41 === this.peek()
												? ((this.pos += 1), (r = !0))
												: (this.pos = c)),
										'');
								if (
									(r ||
										((s = this.pos),
										2 < (a = this.parseLinkLabel())
											? (u = this.subject.slice(s, s + a))
											: i.bracketAfter || (u = this.subject.slice(i.index, o)),
										0 === a && (this.pos = c),
										u &&
											((u = Qi(u)), (s = this.refMap[u])) &&
											((t = s.destination), (n = s.title), (r = !0))),
									r)
								) {
									for (
										var p,
											d = w(l ? 'image' : 'link'),
											f =
												((d.destination = t),
												(d.title = n || ''),
												(d.sourcepos = [i.startpos, this.sourcepos(this.pos)]),
												i.node.next);
										f;

									)
										(p = f.next), f.unlink(), d.appendChild(f), (f = p);
									if (
										(e.appendChild(d),
										this.processEmphasis(i.previousDelimiter),
										this.removeBracket(),
										i.node.unlink(),
										!l)
									)
										for (i = this.brackets; null !== i; )
											i.image || (i.active = !1), (i = i.previous);
								} else
									this.removeBracket(), (this.pos = o), e.appendChild(k(']', this.sourcepos(o, o)));
								this.options.referenceDefinition &&
									(this.refLinkCandidateMap[e.id] = { node: e, refLabel: u });
							} else e.appendChild(k(']', this.sourcepos(o, o))), this.removeBracket();
							return !0;
						}),
						(c.prototype.addBracket = function (e, t, n) {
							null !== this.brackets && (this.brackets.bracketAfter = !0),
								(this.brackets = {
									node: e,
									startpos: this.sourcepos(t + (n ? 0 : 1)),
									previous: this.brackets,
									previousDelimiter: this.delimiters,
									index: t,
									image: n,
									active: !0
								});
						}),
						(c.prototype.removeBracket = function () {
							this.brackets && (this.brackets = this.brackets.previous);
						}),
						(c.prototype.parseEntity = function (e) {
							var t,
								n = this.pos + 1;
							return (
								!!(t = this.match(oa)) &&
								(e.appendChild(k(ao.decodeHTML(t), this.sourcepos(n, this.pos))), !0)
							);
						}),
						(c.prototype.parseString = function (e) {
							var t,
								n,
								r = this.pos + 1;
							return (
								!!(t = this.match(ya)) &&
								(this.options.smart
									? ((n = t.replace(sa, '…').replace(la, function (e) {
											var t = 0,
												n = 0;
											return (
												e.length % 3 == 0
													? (n = e.length / 3)
													: e.length % 2 == 0
														? (t = e.length / 2)
														: (n =
																e.length % 3 == 2
																	? ((t = 1), (e.length - 2) / 3)
																	: ((t = 2), (e.length - 4) / 3)),
												Vo('—', n) + Vo('–', t)
											);
										})),
										e.appendChild(k(n, this.sourcepos(r, this.pos))))
									: ((n = k(t, this.sourcepos(r, this.pos))), e.appendChild(n)),
								!0)
							);
						}),
						(c.prototype.parseNewline = function (e) {
							this.pos += 1;
							var t,
								n,
								r = e.lastChild;
							return (
								r && 'text' === r.type && ' ' === r.literal[r.literal.length - 1]
									? ((t = ' ' === r.literal[r.literal.length - 2]),
										(n = r.literal.length),
										(r.literal = r.literal.replace(ha, '')),
										(n = n - r.literal.length),
										(r.sourcepos[1][1] -= n),
										e.appendChild(
											w(t ? 'linebreak' : 'softbreak', this.sourcepos(this.pos - n, this.pos))
										))
									: e.appendChild(w('softbreak', this.sourcepos(this.pos, this.pos))),
								this.nextLine(),
								this.match(ma),
								!0
							);
						}),
						(c.prototype.parseReference = function (e, t) {
							if (!this.options.referenceDefinition) return 0;
							(this.subject = e.stringContent), (this.pos = 0);
							var n = null,
								r = this.pos,
								o = this.parseLinkLabel();
							if (0 === o) return 0;
							o = this.subject.substr(0, o);
							if (58 !== this.peek()) return (this.pos = r), 0;
							this.pos++, this.spnl();
							var i,
								a,
								s = this.parseLinkDestination();
							return null === s ||
								((i = this.pos),
								this.spnl(),
								null === (n = this.pos !== i ? this.parseLinkTitle() : n) &&
									((n = ''), (this.pos = i)),
								(a = !0),
								!(a =
									null === this.match(ga)
										? '' !== n && ((n = ''), (this.pos = i), null !== this.match(ga))
										: a)) ||
								'' === (i = Qi(o))
								? ((this.pos = r), 0)
								: ((a = this.getReferenceDefSourcepos(e)),
									(e.sourcepos[0][0] = a[1][0] + 1),
									((o = w('refDef', a)).title = n),
									(o.dest = s),
									(o.label = i),
									e.insertBefore(o),
									t[i] ? (this.refDefCandidateMap[o.id] = o) : (t[i] = us(o)),
									this.pos - r);
						}),
						(c.prototype.mergeTextNodes = function (e) {
							for (var t = []; (r = e.next()); ) {
								var n = r.entering,
									r = r.node;
								if (n && 'text' === r.type) t.push(r);
								else if (1 === t.length) t = [];
								else if (1 < t.length) {
									var o = t[0],
										n = t[t.length - 1];
									o.sourcepos && n.sourcepos && (o.sourcepos[1] = n.sourcepos[1]),
										(o.next = n.next),
										o.next && (o.next.prev = o);
									for (var i = 1; i < t.length; i += 1) (o.literal += t[i].literal), t[i].unlink();
									t = [];
								}
							}
						}),
						(c.prototype.getReferenceDefSourcepos = function (e) {
							for (
								var t = e.stringContent.split(/\n|\r\n/),
									n = !1,
									r = 0,
									o = { line: 0, ch: 0 },
									i = 0;
								i < t.length;
								i += 1
							) {
								var a = t[i];
								if (da.test(a)) break;
								if (/\:/.test(a) && 0 === r) {
									if (n) break;
									var s = a.indexOf(':') === a.length - 1 ? i + 1 : i,
										o = { line: s, ch: t[s].length },
										n = !0;
								}
								s = a.match(/'|"/g);
								if ((s && (r += s.length), 2 === r)) {
									o = { line: i, ch: a.length };
									break;
								}
							}
							return [
								[e.sourcepos[0][0], e.sourcepos[0][1]],
								[e.sourcepos[0][0] + o.line, o.ch]
							];
						}),
						(c.prototype.parseInline = function (e) {
							var t,
								n = !1,
								r = this.peek();
							if (-1 === r) return !1;
							switch (r) {
								case 10:
									n = this.parseNewline(e);
									break;
								case 92:
									n = this.parseBackslash(e);
									break;
								case 96:
									n = this.parseBackticks(e);
									break;
								case 42:
								case 95:
								case 126:
								case 36:
									n = this.handleDelim(r, e);
									break;
								case 39:
								case 34:
									n = !(null == (t = this.options) || !t.smart) && this.handleDelim(r, e);
									break;
								case 91:
									n = this.parseOpenBracket(e);
									break;
								case 33:
									n = this.parseBang(e);
									break;
								case 93:
									n = this.parseCloseBracket(e);
									break;
								case 60:
									n = this.parseAutolink(e) || this.parseHtmlTag(e);
									break;
								case 38:
									e.disabledEntityParse || (n = this.parseEntity(e));
									break;
								default:
									n = this.parseString(e);
							}
							return (
								n ||
									((this.pos += 1),
									e.appendChild(k(Ui(r), this.sourcepos(this.pos, this.pos + 1)))),
								!0
							);
						}),
						(c.prototype.parse = function (e) {
							for (
								this.subject = e.stringContent.trim(),
									this.pos = 0,
									this.delimiters = null,
									this.brackets = null,
									this.lineOffsets = e.lineOffsets || [0],
									this.lineIdx = 0,
									this.linePosOffset = 0,
									this.lineStartNum = e.sourcepos[0][0],
									'heading' === e.type && (this.lineOffsets[0] += e.level + 1);
								this.parseInline(e);

							);
							(e.stringContent = null), this.processEmphasis(null), this.mergeTextNodes(e.walker());
							var t = this.options,
								n = t.extendedAutolinks,
								r = t.customParser;
							if ((n && Xi(e.walker(), n), r && e.firstChild))
								for (var o = e.firstChild.walker(); (a = o.next()); ) {
									var i = a.node,
										a = a.entering;
									r[i.type] && r[i.type](i, { entering: a, options: this.options });
								}
						}),
						c);
				function c(e) {
					(this.subject = ''),
						(this.delimiters = null),
						(this.brackets = null),
						(this.pos = 0),
						(this.lineStartNum = 0),
						(this.lineIdx = 0),
						(this.lineOffsets = [0]),
						(this.linePosOffset = 0),
						(this.refMap = {}),
						(this.refLinkCandidateMap = {}),
						(this.refDefCandidateMap = {}),
						(this.options = e);
				}
				var wa = /^\[([ \txX])\][ \t]+/;
				var ka = 9,
					xa = 32,
					Ca = /[^ \t\f\v\r\n]/,
					Ta = /^(?:`{3,}|~{3,})(?= *$)/;
				function Ea(e) {
					for (var t = e; t; ) {
						if (t.lastLineBlank) return 1;
						var n = t.type;
						if (t.lastLineChecked || ('list' !== n && 'item' !== n)) {
							t.lastLineChecked = !0;
							break;
						}
						(t.lastLineChecked = !0), (t = t.lastChild);
					}
				}
				function La(e, t) {
					return t < e.length ? e.charCodeAt(t) : -1;
				}
				function Ma(e) {
					return !Ca.test(e);
				}
				function Na(e) {
					return e === xa || e === ka;
				}
				var Aa = /^\$\$$/,
					a = {
						continue: function () {
							return 1;
						},
						finalize: function () {},
						canContain: function () {
							return !1;
						},
						acceptsLines: !0
					},
					Da = {
						document: {
							continue: function () {
								return 0;
							},
							finalize: function () {},
							canContain: function (e) {
								return 'item' !== e;
							},
							acceptsLines: !1
						},
						list: {
							continue: function () {
								return 0;
							},
							finalize: function (e, t) {
								for (var n = t.firstChild; n; ) {
									if (Ea(n) && n.next) {
										t.listData.tight = !1;
										break;
									}
									for (var r = n.firstChild; r; ) {
										if (Ea(r) && (n.next || r.next)) {
											t.listData.tight = !1;
											break;
										}
										r = r.next;
									}
									n = n.next;
								}
							},
							canContain: function (e) {
								return 'item' === e;
							},
							acceptsLines: !1
						},
						blockQuote: {
							continue: function (e) {
								var t = e.currentLine;
								return e.indented || 62 !== La(t, e.nextNonspace)
									? 1
									: (e.advanceNextNonspace(),
										e.advanceOffset(1, !1),
										Na(La(t, e.offset)) && e.advanceOffset(1, !0),
										0);
							},
							finalize: function () {},
							canContain: function (e) {
								return 'item' !== e;
							},
							acceptsLines: !1
						},
						item: {
							continue: function (e, t) {
								if (e.blank) {
									if (null === t.firstChild) return 1;
									e.advanceNextNonspace();
								} else {
									if (!(e.indent >= t.listData.markerOffset + t.listData.padding)) return 1;
									e.advanceOffset(t.listData.markerOffset + t.listData.padding, !0);
								}
								return 0;
							},
							finalize: function (e, t) {
								var n, r, o;
								t.firstChild &&
									'paragraph' === t.firstChild.type &&
									(r = (n = t.firstChild).stringContent.match(wa)) &&
									((o = r[0].length),
									(n.stringContent = n.stringContent.substring(o - 1)),
									(n.sourcepos[0][1] += o),
									(n.lineOffsets[0] += o),
									(t.listData.task = !0),
									(t.listData.checked = /[xX]/.test(r[1])));
							},
							canContain: function (e) {
								return 'item' !== e;
							},
							acceptsLines: !1
						},
						heading: {
							continue: function () {
								return 1;
							},
							finalize: function () {},
							canContain: function () {
								return !1;
							},
							acceptsLines: !1
						},
						thematicBreak: {
							continue: function () {
								return 1;
							},
							finalize: function () {},
							canContain: function () {
								return !1;
							},
							acceptsLines: !1
						},
						codeBlock: {
							continue: function (e, t) {
								var n = e.currentLine,
									r = e.indent;
								if (t.isFenced) {
									var o =
										r <= 3 &&
										n.charAt(e.nextNonspace) === t.fenceChar &&
										n.slice(e.nextNonspace).match(Ta);
									if (o && o[0].length >= t.fenceLength)
										return (
											(e.lastLineLength = e.offset + r + o[0].length),
											e.finalize(t, e.lineNumber),
											2
										);
									for (var i = t.fenceOffset; 0 < i && Na(La(n, e.offset)); )
										e.advanceOffset(1, !0), i--;
								} else if (4 <= r) e.advanceOffset(4, !0);
								else {
									if (!e.blank) return 1;
									e.advanceNextNonspace();
								}
								return 0;
							},
							finalize: function (e, t) {
								var n, r, o;
								null !== t.stringContent &&
									(t.isFenced
										? ((o = (r = t.stringContent).indexOf('\n')),
											(n = r.slice(0, o)),
											(r = r.slice(o + 1)),
											(o = n.match(/^(\s*)(.*)/)),
											(t.infoPadding = o[1].length),
											(t.info = jo(o[2].trim())),
											(t.literal = r))
										: (t.literal =
												null == (n = t.stringContent) ? void 0 : n.replace(/(\n *)+$/, '\n')),
									(t.stringContent = null));
							},
							canContain: function () {
								return !1;
							},
							acceptsLines: !0
						},
						htmlBlock: {
							continue: function (e, t) {
								return !e.blank || (6 !== t.htmlBlockType && 7 !== t.htmlBlockType) ? 0 : 1;
							},
							finalize: function (e, t) {
								var n;
								(t.literal =
									(null == (n = t.stringContent) ? void 0 : n.replace(/(\n *)+$/, '')) || null),
									(t.stringContent = null);
							},
							canContain: function () {
								return !1;
							},
							acceptsLines: !0
						},
						paragraph: {
							continue: function (e) {
								return e.blank ? 1 : 0;
							},
							finalize: function (e, t) {
								if (null !== t.stringContent) {
									for (
										var n, r = !1;
										91 === La(t.stringContent, 0) &&
										(n = e.inlineParser.parseReference(t, e.refMap));

									)
										(t.stringContent = t.stringContent.slice(n)), (r = !0);
									r && Ma(t.stringContent) && t.unlink();
								}
							},
							canContain: function () {
								return !1;
							},
							acceptsLines: !0
						},
						table: {
							continue: function () {
								return 0;
							},
							finalize: function () {},
							canContain: function (e) {
								return 'tableHead' === e || 'tableBody' === e;
							},
							acceptsLines: !1
						},
						tableBody: {
							continue: function () {
								return 0;
							},
							finalize: function () {},
							canContain: function (e) {
								return 'tableRow' === e;
							},
							acceptsLines: !1
						},
						tableHead: {
							continue: function () {
								return 1;
							},
							finalize: function () {},
							canContain: function (e) {
								return 'tableRow' === e || 'tableDelimRow' === e;
							},
							acceptsLines: !1
						},
						tableRow: {
							continue: function () {
								return 1;
							},
							finalize: function () {},
							canContain: function (e) {
								return 'tableCell' === e;
							},
							acceptsLines: !1
						},
						tableCell: {
							continue: function () {
								return 1;
							},
							finalize: function () {},
							canContain: function () {
								return !1;
							},
							acceptsLines: !1
						},
						tableDelimRow: {
							continue: function () {
								return 1;
							},
							finalize: function () {},
							canContain: function (e) {
								return 'tableDelimCell' === e;
							},
							acceptsLines: !1
						},
						tableDelimCell: {
							continue: function () {
								return 1;
							},
							finalize: function () {},
							canContain: function () {
								return !1;
							},
							acceptsLines: !1
						},
						refDef: a,
						customBlock: {
							continue: function (e, t) {
								var n = e.currentLine,
									r = n.match(Aa);
								if (r) return (e.lastLineLength = r[0].length), e.finalize(t, e.lineNumber), 2;
								for (var o = t.offset; 0 < o && Na(La(n, e.offset)); ) e.advanceOffset(1, !0), o--;
								return 0;
							},
							finalize: function (e, t) {
								var n, r, o;
								null !== t.stringContent &&
									((o = (r = t.stringContent).indexOf('\n')),
									(n = r.slice(0, o)),
									(r = r.slice(o + 1)),
									(o = n.match(/^(\s*)(.*)/)),
									(t.info = jo(o[2].trim())),
									(t.literal = r),
									(t.stringContent = null));
							},
							canContain: function () {
								return !1;
							},
							acceptsLines: !0
						},
						frontMatter: a
					};
				function Sa(e) {
					for (var t, n = 0, r = 0, o = [], i = 0; i < e.length; i += 1)
						'|' === e[i] &&
							'\\' !== e[i - 1] &&
							((t = e.substring(n, i)), 0 === n && $o(t) ? (r = i + 1) : o.push(t), (n = i + 1));
					return n < e.length && ($o((t = e.substring(n, e.length))) || o.push(t)), [r, o];
				}
				function Oa(e, t, n, r) {
					for (var o = [], i = 0, a = t; i < a.length; i++) {
						var s = a[i],
							l = s.match(/^[ \t]+/),
							l = l ? l[0].length : 0,
							c = void 0,
							u = void 0,
							p =
								((u =
									l === s.length
										? ((c = l = 0), '')
										: ((c = (p = s.match(/[ \t]+$/)) ? p[0].length : 0), s.slice(l, s.length - c))),
								r + l),
							d = w(e, [
								[n, r],
								[n, r + s.length - 1]
							]);
						(d.stringContent = u.replace(/\\\|/g, '|')),
							(d.startIdx = o.length),
							(d.endIdx = o.length),
							(d.lineOffsets = [p - 1]),
							(d.paddingLeft = l),
							(d.paddingRight = c),
							o.push(d),
							(r += s.length + 1);
					}
					return o;
				}
				function Ia(e) {
					var t = null,
						e = e.stringContent,
						n = e[0];
					return (
						':' === e[e.length - 1]
							? (t = ':' === n ? 'center' : 'right')
							: ':' === n && (t = 'left'),
						{ align: t }
					);
				}
				var Ra = /^(\$\$)(\s*[a-zA-Z])+/,
					Pa = /^(\$\$)(\s*[a-zA-Z])+.*(\$\$)/,
					Ba = /^`{3,}(?!.*`)|^~{3,}/,
					Ha = [
						/./,
						/^<(?:script|pre|style)(?:\s|>|$)/i,
						/^<!--/,
						/^<[?]/,
						/^<![A-Z]/,
						/^<!\[CDATA\[/,
						/^<[/]?(?:address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[123456]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul)(?:\s|[/]?[>]|$)/i,
						new RegExp('^(?:' + Kr + '|' + l + ')\\s*$', 'i')
					],
					Fa = /^(?:=+|-+)[ \t]*$/,
					qa = /^#{1,6}(?:[ \t]+|$)/,
					ja = /^(?:(?:\*[ \t]*){3,}|(?:_[ \t]*){3,}|(?:-[ \t]*){3,})[ \t]*$/,
					_a = /^[*+-]/,
					za = /^(\d{1,9})([.)])/;
				function Ua(e, t) {
					return e.options.disallowDeepHeading && ('blockQuote' === t.type || 'item' === t.type);
				}
				function Va(e, t) {
					var n = e.currentLine,
						r = e.lineNumber,
						o = e.indented;
					return 1 === r && !o && 'document' === t.type && Wa.test(n)
						? (e.closeUnmatchedBlocks(),
							(e.addChild('frontMatter', e.nextNonspace).stringContent = n),
							e.advanceNextNonspace(),
							e.advanceOffset(n.length, !1),
							2)
						: 0;
				}
				var $a = [
						function (e) {
							return e.indented || 62 !== La(e.currentLine, e.nextNonspace)
								? 0
								: (e.advanceNextNonspace(),
									e.advanceOffset(1, !1),
									Na(La(e.currentLine, e.offset)) && e.advanceOffset(1, !0),
									e.closeUnmatchedBlocks(),
									e.addChild('blockQuote', e.nextNonspace),
									1);
						},
						function (e, t) {
							var n;
							return e.indented || Ua(e, t) || !(t = e.currentLine.slice(e.nextNonspace).match(qa))
								? 0
								: (e.advanceNextNonspace(),
									e.advanceOffset(t[0].length, !1),
									e.closeUnmatchedBlocks(),
									((n = e.addChild('heading', e.nextNonspace)).level = t[0].trim().length),
									(n.headingType = 'atx'),
									(n.stringContent = e.currentLine
										.slice(e.offset)
										.replace(/^[ \t]*#+[ \t]*$/, '')
										.replace(/[ \t]+#+[ \t]*$/, '')),
									e.advanceOffset(e.currentLine.length - e.offset),
									2);
						},
						function (e) {
							var t, n, r;
							return !e.indented && (t = e.currentLine.slice(e.nextNonspace).match(Ba))
								? ((n = t[0].length),
									e.closeUnmatchedBlocks(),
									((r = e.addChild('codeBlock', e.nextNonspace)).isFenced = !0),
									(r.fenceLength = n),
									(r.fenceChar = t[0][0]),
									(r.fenceOffset = e.indent),
									e.advanceNextNonspace(),
									e.advanceOffset(n, !1),
									2)
								: 0;
						},
						function (e, t) {
							if (!e.indented && 60 === La(e.currentLine, e.nextNonspace))
								for (
									var n = e.currentLine.slice(e.nextNonspace),
										r = e.options.disallowedHtmlBlockTags,
										o = void 0,
										o = 1;
									o <= 7;
									o++
								) {
									var i = n.match(Ha[o]);
									if (i) {
										if (7 === o) {
											if ('paragraph' === t.type) return 0;
											if (0 < r.length)
												if (new RegExp('</?(?:' + r.join('|') + ')', 'i').test(i[0])) return 0;
										}
										return (
											e.closeUnmatchedBlocks(),
											(e.addChild('htmlBlock', e.offset).htmlBlockType = o),
											2
										);
									}
								}
							return 0;
						},
						function (e, t) {
							var n;
							if (
								null === t.stringContent ||
								e.indented ||
								'paragraph' !== t.type ||
								Ua(e, t.parent) ||
								!(n = e.currentLine.slice(e.nextNonspace).match(Fa))
							)
								return 0;
							e.closeUnmatchedBlocks();
							for (
								var r, o = void 0;
								91 === La(t.stringContent, 0) && (o = e.inlineParser.parseReference(t, e.refMap));

							)
								t.stringContent = t.stringContent.slice(o);
							return 0 < t.stringContent.length
								? (((r = w('heading', t.sourcepos)).level = '=' === n[0][0] ? 1 : 2),
									(r.headingType = 'setext'),
									(r.stringContent = t.stringContent),
									t.insertAfter(r),
									t.unlink(),
									(e.tip = r),
									e.advanceOffset(e.currentLine.length - e.offset, !1),
									2)
								: 0;
						},
						function (e) {
							return !e.indented && ja.test(e.currentLine.slice(e.nextNonspace))
								? (e.closeUnmatchedBlocks(),
									e.addChild('thematicBreak', e.nextNonspace),
									e.advanceOffset(e.currentLine.length - e.offset, !1),
									2)
								: 0;
						},
						function (e, t) {
							var n,
								r,
								o = t;
							return (e.indented && 'list' !== t.type) ||
								!(t = (function (e, t) {
									var n,
										r,
										o = e.currentLine.slice(e.nextNonspace),
										i = {
											type: 'bullet',
											tight: !0,
											bulletChar: '',
											start: 0,
											delimiter: '',
											padding: 0,
											markerOffset: e.indent,
											task: !1,
											checked: !1
										};
									if (4 <= e.indent) return null;
									if ((n = o.match(_a))) (i.type = 'bullet'), (i.bulletChar = n[0][0]);
									else {
										if (!(n = o.match(za)) || ('paragraph' === t.type && '1' !== n[1])) return null;
										(i.type = 'ordered'), (i.start = parseInt(n[1], 10)), (i.delimiter = n[2]);
									}
									if (
										-1 !== (r = La(e.currentLine, e.nextNonspace + n[0].length)) &&
										r !== ka &&
										r !== xa
									)
										return null;
									if (
										'paragraph' === t.type &&
										!e.currentLine.slice(e.nextNonspace + n[0].length).match(Ca)
									)
										return null;
									e.advanceNextNonspace(), e.advanceOffset(n[0].length, !0);
									for (
										var a = e.column, o = e.offset;
										e.advanceOffset(1, !0),
											(r = La(e.currentLine, e.offset)),
											e.column - a < 5 && Na(r);

									);
									var t = -1 === La(e.currentLine, e.offset),
										s = e.column - a;
									return (
										5 <= s || s < 1 || t
											? ((i.padding = n[0].length + 1),
												(e.column = a),
												(e.offset = o),
												Na(La(e.currentLine, e.offset)) && e.advanceOffset(1, !0))
											: (i.padding = n[0].length + s),
										i
									);
								})(e, o))
								? 0
								: (e.closeUnmatchedBlocks(),
									('list' === e.tip.type &&
										((n = o.listData), (r = t), n.type === r.type) &&
										n.delimiter === r.delimiter &&
										n.bulletChar === r.bulletChar) ||
										((o = e.addChild('list', e.nextNonspace)).listData = t),
									((o = e.addChild('item', e.nextNonspace)).listData = t),
									1);
						},
						function (e) {
							return e.indented && 'paragraph' !== e.tip.type && !e.blank
								? (e.advanceOffset(4, !0),
									e.closeUnmatchedBlocks(),
									e.addChild('codeBlock', e.offset),
									2)
								: 0;
						},
						function (e, t) {
							var n,
								r,
								o,
								i,
								a,
								s,
								l,
								c,
								u,
								p,
								d,
								f,
								h,
								m = t.stringContent;
							return 'paragraph' !== t.type ||
								e.indented ||
								e.blank ||
								((n = m.length - 1),
								(h = m.lastIndexOf('\n', n - 1) + 1),
								(n = m.slice(h, n)),
								(p = e.currentLine.slice(e.nextNonspace)),
								(r = (o = Sa(n))[0]),
								(o = o[1]),
								(i = (a = Sa(p))[0]),
								(a = a[1]),
								(s = /^[ \t]*:?-+:?[ \t]*$/),
								!o.length) ||
								!a.length ||
								a.some(function (e) {
									return !s.test(e);
								}) ||
								(1 === a.length && 0 !== p.indexOf('|'))
								? 0
								: ((p = t.lineOffsets),
									((u = w('table', [
										[(l = e.lineNumber - 1), (c = Ki(p) + 1)],
										[e.lineNumber, e.offset]
									])).columns = a.map(function () {
										return { align: null };
									})),
									t.insertAfter(u),
									1 === p.length
										? t.unlink()
										: ((t.stringContent = m.slice(0, h)),
											(m = m.lastIndexOf('\n', h - 2) + 1),
											(e.lastLineLength = p[p.length - 2] + (h - m - 1)),
											e.finalize(t, l - 1)),
									e.advanceOffset(e.currentLine.length - e.offset, !1),
									(p = w('tableHead', [
										[l, c],
										[e.lineNumber, e.offset]
									])),
									u.appendChild(p),
									(d = w('tableRow', [
										[l, c],
										[l, c + n.length - 1]
									])),
									(f = w('tableDelimRow', [
										[e.lineNumber, e.nextNonspace + 1],
										[e.lineNumber, e.offset]
									])),
									p.appendChild(d),
									p.appendChild(f),
									Oa('tableCell', o, l, c + r).forEach(function (e) {
										d.appendChild(e);
									}),
									(h = Oa('tableDelimCell', a, e.lineNumber, e.nextNonspace + 1 + i)).forEach(
										function (e) {
											f.appendChild(e);
										}
									),
									(u.columns = h.map(Ia)),
									(e.tip = u),
									2);
						},
						function (e, t) {
							var n, r, o;
							return ('table' !== t.type && 'tableBody' !== t.type) ||
								(!e.blank && -1 === e.currentLine.indexOf('|'))
								? 0
								: (e.advanceOffset(e.currentLine.length - e.offset, !1),
									e.blank
										? ('tableBody' === (o = t).type &&
												((o = t.parent), e.finalize(t, e.lineNumber - 1)),
											e.finalize(o, e.lineNumber - 1),
											0)
										: ('table' === (o = t).type &&
												((o = e.addChild('tableBody', e.nextNonspace)).stringContent = null),
											(n = w('tableRow', [
												[e.lineNumber, e.nextNonspace + 1],
												[e.lineNumber, e.currentLine.length]
											])),
											o.appendChild(n),
											(r = o.parent),
											(o = (t = Sa(e.currentLine.slice(e.nextNonspace)))[0]),
											Oa('tableCell', t[1], e.lineNumber, e.nextNonspace + 1 + o).forEach(
												function (e, t) {
													t >= r.columns.length && (e.ignored = !0), n.appendChild(e);
												}
											),
											2));
						},
						function (e) {
							var t, n;
							return e.indented || Pa.test(e.currentLine) || !(t = e.currentLine.match(Ra))
								? 0
								: ((t = t[1].length),
									e.closeUnmatchedBlocks(),
									((n = e.addChild('customBlock', e.nextNonspace)).syntaxLength = t),
									(n.offset = e.indent),
									e.advanceNextNonspace(),
									e.advanceOffset(t, !1),
									2);
						}
					],
					Wa = /^(-{3}|\+{3}|;{3})$/,
					Ga = {
						continue: function (e, t) {
							var n = e.currentLine,
								r = n.match(Wa);
							return 'frontMatter' === t.type && r
								? ((t.stringContent += n),
									(e.lastLineLength = r[0].length),
									e.finalize(t, e.lineNumber),
									2)
								: 0;
						},
						finalize: function (e, t) {
							null !== t.stringContent && ((t.literal = t.stringContent), (t.stringContent = null));
						},
						canContain: function () {
							return !1;
						},
						acceptsLines: !0
					},
					Za = [/./, /<\/(?:script|pre|style)>/i, /-->/, /\?>/, />/, /\]\]>/],
					Xa = /^[#`~*+_=<>0-9-;$]/,
					Ka = /\r\n|\n|\r/;
				function Qa() {
					return w('document', [
						[1, 1],
						[0, 0]
					]);
				}
				var Ya = {
						smart: !1,
						tagFilter: !1,
						extendedAutolinks: !1,
						disallowedHtmlBlockTags: [],
						referenceDefinition: !1,
						disallowDeepHeading: !1,
						customParser: null,
						frontMatter: !1
					},
					Ja =
						((es.prototype.advanceOffset = function (e, t) {
							void 0 === t && (t = !1);
							for (var n, r, o, i = this.currentLine; 0 < e && (o = i[this.offset]); )
								'\t' === o
									? ((n = 4 - (this.column % 4)),
										t
											? ((this.partiallyConsumedTab = e < n),
												(this.column += r = e < n ? e : n),
												(this.offset += this.partiallyConsumedTab ? 0 : 1),
												(e -= r))
											: ((this.partiallyConsumedTab = !1),
												(this.column += n),
												(this.offset += 1),
												--e))
									: ((this.partiallyConsumedTab = !1), (this.offset += 1), (this.column += 1), --e);
						}),
						(es.prototype.advanceNextNonspace = function () {
							(this.offset = this.nextNonspace),
								(this.column = this.nextNonspaceColumn),
								(this.partiallyConsumedTab = !1);
						}),
						(es.prototype.findNextNonspace = function () {
							for (
								var e, t = this.currentLine, n = this.offset, r = this.column;
								'' !== (e = t.charAt(n));

							)
								if (' ' === e) n++, r++;
								else {
									if ('\t' !== e) break;
									n++, (r += 4 - (r % 4));
								}
							(this.blank = '\n' === e || '\r' === e || '' === e),
								(this.nextNonspace = n),
								(this.nextNonspaceColumn = r),
								(this.indent = this.nextNonspaceColumn - this.column),
								(this.indented = 4 <= this.indent);
						}),
						(es.prototype.addLine = function () {
							var e;
							this.partiallyConsumedTab &&
								((this.offset += 1),
								(e = 4 - (this.column % 4)),
								(this.tip.stringContent += Vo(' ', e))),
								this.tip.lineOffsets
									? this.tip.lineOffsets.push(this.offset)
									: (this.tip.lineOffsets = [this.offset]),
								(this.tip.stringContent += this.currentLine.slice(this.offset) + '\n');
						}),
						(es.prototype.addChild = function (e, t) {
							for (; !Da[this.tip.type].canContain(e); )
								this.finalize(this.tip, this.lineNumber - 1);
							t = w(e, [
								[this.lineNumber, t + 1],
								[0, 0]
							]);
							return (t.stringContent = ''), this.tip.appendChild(t), (this.tip = t);
						}),
						(es.prototype.closeUnmatchedBlocks = function () {
							if (!this.allClosed) {
								for (; this.oldtip !== this.lastMatchedContainer; ) {
									var e = this.oldtip.parent;
									this.finalize(this.oldtip, this.lineNumber - 1), (this.oldtip = e);
								}
								this.allClosed = !0;
							}
						}),
						(es.prototype.finalize = function (e, t) {
							var n = e.parent;
							(e.open = !1),
								(e.sourcepos[1] = [t, this.lastLineLength]),
								Da[e.type].finalize(this, e),
								(this.tip = n);
						}),
						(es.prototype.processInlines = function (e) {
							var t = this.options.customParser,
								n = e.walker();
							for (
								this.inlineParser.refMap = this.refMap,
									this.inlineParser.refLinkCandidateMap = this.refLinkCandidateMap,
									this.inlineParser.refDefCandidateMap = this.refDefCandidateMap,
									this.inlineParser.options = this.options;
								(o = n.next());

							) {
								var r = o.node,
									o = o.entering,
									i = r.type;
								t && t[i] && t[i](r, { entering: o, options: this.options }),
									o ||
										('paragraph' !== i && 'heading' !== i && ('tableCell' !== i || r.ignored)) ||
										this.inlineParser.parse(r);
							}
						}),
						(es.prototype.incorporateLine = function (e) {
							for (
								var t,
									n = this.doc,
									r =
										((this.oldtip = this.tip),
										(this.offset = 0),
										(this.column = 0),
										(this.blank = !1),
										(this.partiallyConsumedTab = !1),
										(this.lineNumber += 1),
										-1 !== e.indexOf('\0') && (e = e.replace(/\0/g, '�')),
										(this.currentLine = e),
										!0);
								(t = n.lastChild) && t.open;

							) {
								switch (((n = t), this.findNextNonspace(), Da[n.type].continue(this, n))) {
									case 0:
										break;
									case 1:
										r = !1;
										break;
									case 2:
										return void (this.lastLineLength = e.length);
									default:
										throw new Error('continue returned illegal value, must be 0, 1, or 2');
								}
								if (!r) {
									n = n.parent;
									break;
								}
							}
							this.allClosed = n === this.oldtip;
							for (
								var o =
										'paragraph' !== (this.lastMatchedContainer = n).type && Da[n.type].acceptsLines,
									i = $a.length;
								!o;

							) {
								if (
									(this.findNextNonspace(),
									'table' !== n.type &&
										'tableBody' !== n.type &&
										'paragraph' !== n.type &&
										!this.indented &&
										!Xa.test(e.slice(this.nextNonspace)))
								) {
									this.advanceNextNonspace();
									break;
								}
								for (var a = 0; a < i; ) {
									var s = $a[a](this, n);
									if (1 === s) {
										n = this.tip;
										break;
									}
									if (2 === s) {
										(n = this.tip), (o = !0);
										break;
									}
									a++;
								}
								if (a === i) {
									this.advanceNextNonspace();
									break;
								}
							}
							if (this.allClosed || this.blank || 'paragraph' !== this.tip.type) {
								this.closeUnmatchedBlocks(),
									this.blank && n.lastChild && (n.lastChild.lastLineBlank = !0);
								for (
									var l = n.type,
										c =
											this.blank &&
											!(
												'blockQuote' === l ||
												(Bi(n) && n.isFenced) ||
												('item' === l && !n.firstChild && n.sourcepos[0][0] === this.lineNumber)
											),
										u = n;
									u;

								)
									(u.lastLineBlank = c), (u = u.parent);
								Da[l].acceptsLines
									? (this.addLine(),
										'htmlBlock' === n.type &&
											1 <= n.htmlBlockType &&
											n.htmlBlockType <= 5 &&
											Za[n.htmlBlockType].test(this.currentLine.slice(this.offset)) &&
											((this.lastLineLength = e.length), this.finalize(n, this.lineNumber)))
									: this.offset < e.length &&
										!this.blank &&
										((n = this.addChild('paragraph', this.offset)),
										this.advanceNextNonspace(),
										this.addLine());
							} else this.addLine();
							this.lastLineLength = e.length;
						}),
						(es.prototype.parse = function (e, t) {
							(this.doc = Qa()),
								(this.tip = this.doc),
								(this.lineNumber = 0),
								(this.lastLineLength = 0),
								(this.offset = 0),
								(this.column = 0),
								(this.lastMatchedContainer = this.doc),
								(this.currentLine = '');
							var n = e.split(Ka),
								r = n.length;
							(this.lines = t || n),
								this.options.referenceDefinition && this.clearRefMaps(),
								10 === e.charCodeAt(e.length - 1) && --r;
							for (var o = 0; o < r; o++) this.incorporateLine(n[o]);
							for (; this.tip; ) this.finalize(this.tip, r);
							return this.processInlines(this.doc), this.doc;
						}),
						(es.prototype.partialParseStart = function (e, t) {
							(this.doc = Qa()),
								(this.tip = this.doc),
								(this.lineNumber = e - 1),
								(this.lastLineLength = 0),
								(this.offset = 0),
								(this.column = 0),
								(this.lastMatchedContainer = this.doc),
								(this.currentLine = '');
							for (var n = t.length, r = 0; r < n; r++) this.incorporateLine(t[r]);
							return this.doc;
						}),
						(es.prototype.partialParseExtends = function (e) {
							for (var t = 0; t < e.length; t++) this.incorporateLine(e[t]);
						}),
						(es.prototype.partialParseFinish = function () {
							for (; this.tip; ) this.finalize(this.tip, this.lineNumber);
							this.processInlines(this.doc);
						}),
						(es.prototype.setRefMaps = function (e, t, n) {
							(this.refMap = e), (this.refLinkCandidateMap = t), (this.refDefCandidateMap = n);
						}),
						(es.prototype.clearRefMaps = function () {
							[this.refMap, this.refLinkCandidateMap, this.refDefCandidateMap].forEach(
								function (e) {
									var t;
									(t = e),
										Object.keys(t).forEach(function (e) {
											delete t[e];
										});
								}
							);
						}),
						es);
				function es(e) {
					(this.options = to(to({}, Ya), e)),
						(this.doc = Qa()),
						(this.tip = this.doc),
						(this.oldtip = this.doc),
						(this.lineNumber = 0),
						(this.offset = 0),
						(this.column = 0),
						(this.nextNonspace = 0),
						(this.nextNonspaceColumn = 0),
						(this.indent = 0),
						(this.currentLine = ''),
						(this.indented = !1),
						(this.blank = !1),
						(this.partiallyConsumedTab = !1),
						(this.allClosed = !0),
						(this.lastMatchedContainer = this.doc),
						(this.refMap = {}),
						(this.refLinkCandidateMap = {}),
						(this.refDefCandidateMap = {}),
						(this.lastLineLength = 0),
						(this.lines = []),
						this.options.frontMatter && ((Da.frontMatter = Ga), $a.unshift(Va)),
						(this.inlineParser = new ba(this.options));
				}
				function ts(e, t) {
					return e[0] < t[0] ? 1 : e[0] > t[0] ? -1 : e[1] < t[1] ? 1 : e[1] > t[1] ? -1 : 0;
				}
				function ns(e, t) {
					for (var n = 0, r = t; n < r.length; n++) {
						var o = r[n];
						e.insertBefore(o);
					}
				}
				function rs(e, t) {
					var n = e[0];
					return e[1][0] < t ? 1 : n[0] > t ? -1 : 0;
				}
				function os(e, t) {
					for (var n = e.firstChild; n; ) {
						var r = rs(n.sourcepos, t);
						if (0 === r) return n;
						if (-1 === r) return n.prev || n;
						n = n.next;
					}
					return e.lastChild;
				}
				function is(e, t) {
					for (var n = e.firstChild, r = null; n; ) {
						var o = rs(n.sourcepos, t);
						if (0 === o) {
							if (n.sourcepos[0][0] === t || !n.firstChild) return n;
							n = (r = n).firstChild;
						} else {
							if (-1 === o) break;
							n = (r = n).next;
						}
					}
					if (r) {
						for (
							var i = (function (e) {
								for (; e.lastChild; ) e = e.lastChild;
								return e;
							})(r);
							i.parent &&
							'document' !== i.parent.type &&
							i.parent.sourcepos[0][0] === i.sourcepos[0][0];

						)
							i = i.parent;
						return i;
					}
					return null;
				}
				function as(e, t) {
					for (var n, r, o = e, i = null; o; ) {
						(a = o.sourcepos), (n = t), (r = void 0), (r = a[0]);
						var a = 1 === ts(a[1], n) ? 1 : -1 === ts(r, n) ? -1 : 0;
						if (0 == a) {
							if (!o.firstChild) return o;
							o = (i = o).firstChild;
						} else {
							if (-1 == a) return i;
							if (!o.next) return i;
							o = o.next;
						}
					}
					return o;
				}
				function ss(e) {
					return Ko[e] || null;
				}
				function ls(e, t, n) {
					if ((void 0 === n && (n = null), t))
						for (var r = t.walker(); t && t !== n; ) {
							e(t);
							var o = r.next();
							if (!o) break;
							t = o.node;
						}
				}
				var cs = /\r\n|\n|\r/;
				function us(e) {
					return {
						id: e.id,
						title: e.title,
						sourcepos: e.sourcepos,
						unlinked: !1,
						destination: e.dest
					};
				}
				(f.prototype.updateLineTexts = function (e, t, n) {
					var r = e[0],
						e = e[1],
						o = t[0],
						t = t[1],
						n = n.split(cs),
						i = n.length,
						a = this.lineTexts[r - 1],
						s = this.lineTexts[o - 1],
						a =
							((n[0] = a.slice(0, e - 1) + n[0]),
							(n[i - 1] = n[i - 1] + s.slice(t - 1)),
							o - r + 1);
					return (e = this.lineTexts).splice.apply(e, no([r - 1, a], n)), i - a;
				}),
					(f.prototype.updateRootNodeState = function () {
						if (1 === this.lineTexts.length && '' === this.lineTexts[0])
							(this.root.lastLineBlank = !0),
								(this.root.sourcepos = [
									[1, 1],
									[1, 0]
								]);
						else {
							this.root.lastChild && (this.root.lastLineBlank = this.root.lastChild.lastLineBlank);
							for (var e = this.lineTexts, t = e.length - 1; '' === e[t]; ) --t;
							e.length - 2 > t && (t += 1), (this.root.sourcepos[1] = [t + 1, e[t].length]);
						}
					}),
					(f.prototype.replaceRangeNodes = function (e, t, n) {
						if (e) {
							ns(e, n);
							var r = e,
								o = t;
							if (r.parent === o.parent && r !== o) {
								for (var i = r.next; i && i !== o; ) {
									for (var a = i.next, s = 0, l = ['parent', 'prev', 'next']; s < l.length; s++) {
										var c = l[s];
										i[c] && (Qo(i[c].id), (i[c] = null));
									}
									i = a;
								}
								(r.next = o.next), o.next ? (o.next.prev = r) : (r.parent.lastChild = r);
							}
							[e.id, t.id].forEach(Qo), e.unlink();
						} else if (t) ns(t, n), Qo(t.id), t.unlink();
						else for (var u = this.root, p = n, d = p.length - 1; 0 <= d; --d) u.prependChild(p[d]);
					}),
					(f.prototype.getNodeRange = function (e, t) {
						var e = os(this.root, e[0]),
							n = os(this.root, t[0]);
						return [e, (n = n && n.next && t[0] + 1 === n.next.sourcepos[0][0] ? n.next : n)];
					}),
					(f.prototype.trigger = function (e, t) {
						this.eventHandlerMap[e].forEach(function (e) {
							e(t);
						});
					}),
					(f.prototype.extendEndLine = function (e) {
						for (; '' === this.lineTexts[e]; ) e += 1;
						return e;
					}),
					(f.prototype.parseRange = function (e, t, n, r) {
						e &&
							e.prev &&
							((Hi(e.prev) &&
								((o = this.lineTexts[n - 1]),
								((i = o.match(/^[ \t]+/)) && (2 <= i[0].length || /\t/.test(i[0]))) ||
									((i = i ? o.slice(i.length) : o), _a.test(i)) ||
									za.test(i))) ||
								('table' === e.prev.type &&
									!Ma((o = this.lineTexts[n - 1])) &&
									-1 !== o.indexOf('|'))) &&
							(n = (e = e.prev).sourcepos[0][0]);
						for (
							var o,
								i = this.lineTexts.slice(n - 1, r),
								n = this.parser.partialParseStart(n, i),
								a = t ? t.next : this.root.firstChild,
								s = n.lastChild,
								l = s && Bi(s) && s.open,
								c = s && qi(s) && s.open,
								u = s && Hi(s);
							((l || c) && a) || (u && a && ('list' === a.type || 2 <= a.sourcepos[0][1]));

						) {
							var p = this.extendEndLine(a.sourcepos[1][0]);
							this.parser.partialParseExtends(this.lineTexts.slice(r, p)),
								(e = e || t),
								(r = p),
								(a = (t = a).next);
						}
						return (
							this.parser.partialParseFinish(),
							{
								newNodes: (function (e) {
									for (var t = [], n = e.firstChild; n; ) t.push(n), (n = n.next);
									return t;
								})(n),
								extStartNode: e,
								extEndNode: t
							}
						);
					}),
					(f.prototype.getRemovedNodeRange = function (e, t) {
						return !e || Fi(e) || (t && Fi(t))
							? null
							: { id: [e.id, t.id], line: [e.sourcepos[0][0] - 1, t.sourcepos[1][0] - 1] };
					}),
					(f.prototype.markDeletedRefMap = function (e, t) {
						var n,
							r = this;
						Ji(this.refMap) ||
							((n = function (e) {
								var t;
								Fi(e) && (t = r.refMap[e.label]) && e.id === t.id && (t.unlinked = !0);
							}),
							e && ls(n, e.parent, t),
							t && ls(n, t));
					}),
					(f.prototype.replaceWithNewRefDefState = function (e) {
						var t,
							r = this;
						Ji(this.refMap) ||
							((t = function (e) {
								var t, n;
								Fi(e) &&
									((t = e.label), ((n = r.refMap[t]) && !n.unlinked) || (r.refMap[t] = us(e)));
							}),
							e.forEach(function (e) {
								ls(t, e);
							}));
					}),
					(f.prototype.replaceWithRefDefCandidate = function () {
						var i = this;
						Ji(this.refDefCandidateMap) ||
							Yi(this.refDefCandidateMap, function (e, t) {
								var n = t.label,
									r = t.sourcepos,
									o = i.refMap[n];
								(!o || o.unlinked || o.sourcepos[0][0] > r[0][0]) && (i.refMap[n] = us(t));
							});
					}),
					(f.prototype.getRangeWithRefDef = function (e, t, n, r, o) {
						var i, a;
						return (
							this.referenceDefinition &&
								!Ji(this.refMap) &&
								((i = os(this.root, e - 1)),
								(a = os(this.root, t + 1)),
								i && Fi(i) && i !== n && i !== r && (e = (n = i).sourcepos[0][0]),
								a) &&
								Fi(a) &&
								a !== n &&
								a !== r &&
								(t = this.extendEndLine((r = a).sourcepos[1][0] + o)),
							[n, r, e, t]
						);
					}),
					(f.prototype.parse = function (e, t, n) {
						void 0 === n && (n = 0);
						var r = this.getNodeRange(e, t),
							o = r[0],
							r = r[1],
							e = o ? Math.min(o.sourcepos[0][0], e[0]) : e[0],
							t = this.extendEndLine((r ? Math.max(r.sourcepos[1][0], t[0]) : t[0]) + n),
							e = this.parseRange.apply(this, this.getRangeWithRefDef(e, t, o, r, n)),
							t = e.newNodes,
							o = e.extStartNode,
							r = e.extEndNode,
							n = this.getRemovedNodeRange(o, r),
							e = r ? r.next : this.root.firstChild;
						return (
							this.referenceDefinition
								? (this.markDeletedRefMap(o, r),
									this.replaceRangeNodes(o, r, t),
									this.replaceWithNewRefDefState(t))
								: this.replaceRangeNodes(o, r, t),
							{ nodes: t, removedNodeRange: n, nextNode: e }
						);
					}),
					(f.prototype.parseRefLink = function () {
						var o = this,
							i = [];
						return (
							Ji(this.refMap) ||
								Yi(this.refMap, function (r, e) {
									e.unlinked && delete o.refMap[r],
										Yi(o.refLinkCandidateMap, function (e, t) {
											var n = t.node;
											t.refLabel === r && i.push(o.parse(n.sourcepos[0], n.sourcepos[1]));
										});
								}),
							i
						);
					}),
					(f.prototype.removeUnlinkedCandidate = function () {
						Ji(this.refDefCandidateMap) ||
							[this.refLinkCandidateMap, this.refDefCandidateMap].forEach(function (t) {
								Yi(t, function (e) {
									!(function (e) {
										var t = ss(e);
										if (!t) return 1;
										for (; t && 'document' !== t.type; ) {
											if (!t.parent && !t.prev && !t.next) return 1;
											t = t.parent;
										}
									})(e) || delete t[e];
								});
							});
					}),
					(f.prototype.editMarkdown = function (e, t, n) {
						var n = this.updateLineTexts(e, t, n),
							e = this.parse(e, t, n),
							t = (function (e) {
								for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
								var r = to({}, e);
								return (
									t.forEach(function (e) {
										delete r[e];
									}),
									r
								);
							})(e, 'nextNode'),
							e = e.nextNode,
							r = n;
						if (e && e.parent && 0 !== r) {
							var o,
								i = e.parent.walker();
							for (i.resumeAt(e, !0); (o = i.next()); ) {
								var a = o.node;
								o.entering && ((a.sourcepos[0][0] += r), (a.sourcepos[1][0] += r));
							}
						}
						this.updateRootNodeState();
						n = [t];
						return (
							this.referenceDefinition &&
								(this.removeUnlinkedCandidate(),
								this.replaceWithRefDefCandidate(),
								(n = n.concat(this.parseRefLink()))),
							this.trigger('change', n),
							n
						);
					}),
					(f.prototype.getLineTexts = function () {
						return this.lineTexts;
					}),
					(f.prototype.getRootNode = function () {
						return this.root;
					}),
					(f.prototype.findNodeAtPosition = function (e) {
						e = as(this.root, e);
						return e && e !== this.root ? e : null;
					}),
					(f.prototype.findFirstNodeAtLine = function (e) {
						return is(this.root, e);
					}),
					(f.prototype.on = function (e, t) {
						this.eventHandlerMap[e].push(t);
					}),
					(f.prototype.off = function (e, t) {
						(e = this.eventHandlerMap[e]), (t = e.indexOf(t));
						e.splice(t, 1);
					}),
					(f.prototype.findNodeById = ss),
					(f.prototype.removeAllNode = function () {
						Ko = {};
					});
				var ps = f;
				function f(e, t) {
					(this.refMap = {}),
						(this.refLinkCandidateMap = {}),
						(this.refDefCandidateMap = {}),
						(this.referenceDefinition = !(null == t || !t.referenceDefinition)),
						(this.parser = new Ja(t)),
						this.parser.setRefMaps(this.refMap, this.refLinkCandidateMap, this.refDefCandidateMap),
						(this.eventHandlerMap = { change: [] }),
						(this.lineTexts = (e = e || '').split(cs)),
						(this.root = this.parser.parse(e, this.lineTexts));
				}
				var ds = new RegExp(
					'<(/?(?:' +
						[
							'title',
							'textarea',
							'style',
							'xmp',
							'iframe',
							'noembed',
							'noframes',
							'script',
							'plaintext'
						].join('|') +
						')[^>]*>)',
					'ig'
				);
				function fs(e) {
					return ds.test(e)
						? e.replace(ds, function (e, t) {
								return '&lt;' + t;
							})
						: e;
				}
				var hs = {
						heading: function (e, t) {
							return {
								type: t.entering ? 'openTag' : 'closeTag',
								tagName: 'h' + e.level,
								outerNewLine: !0
							};
						},
						text: function (e) {
							return { type: 'text', content: e.literal };
						},
						softbreak: function (e, t) {
							return { type: 'html', content: t.options.softbreak };
						},
						linebreak: function () {
							return { type: 'html', content: '<br />\n' };
						},
						emph: function (e, t) {
							return { type: t.entering ? 'openTag' : 'closeTag', tagName: 'em' };
						},
						strong: function (e, t) {
							return { type: t.entering ? 'openTag' : 'closeTag', tagName: 'strong' };
						},
						paragraph: function (e, t) {
							(t = t.entering), (e = null == (e = e.parent) ? void 0 : e.parent);
							return e && 'list' === e.type && e.listData.tight
								? null
								: { type: t ? 'openTag' : 'closeTag', tagName: 'p', outerNewLine: !0 };
						},
						thematicBreak: function () {
							return { type: 'openTag', tagName: 'hr', outerNewLine: !0, selfClose: !0 };
						},
						blockQuote: function (e, t) {
							return {
								type: t.entering ? 'openTag' : 'closeTag',
								tagName: 'blockquote',
								outerNewLine: !0,
								innerNewLine: !0
							};
						},
						list: function (e, t) {
							var t = t.entering,
								e = e.listData,
								n = e.type,
								e = e.start,
								n = 'bullet' === n ? 'ul' : 'ol',
								r = {};
							return (
								'ol' == n && null !== e && 1 !== e && (r.start = e.toString()),
								{ type: t ? 'openTag' : 'closeTag', tagName: n, attributes: r, outerNewLine: !0 }
							);
						},
						item: function (e, t) {
							return { type: t.entering ? 'openTag' : 'closeTag', tagName: 'li', outerNewLine: !0 };
						},
						htmlInline: function (e, t) {
							return { type: 'html', content: t.options.tagFilter ? fs(e.literal) : e.literal };
						},
						htmlBlock: function (e, t) {
							(t = t.options), (e = t.tagFilter ? fs(e.literal) : e.literal);
							return t.nodeId
								? [
										{ type: 'openTag', tagName: 'div', outerNewLine: !0 },
										{ type: 'html', content: e },
										{ type: 'closeTag', tagName: 'div', outerNewLine: !0 }
									]
								: { type: 'html', content: e, outerNewLine: !0 };
						},
						code: function (e) {
							return [
								{ type: 'openTag', tagName: 'code' },
								{ type: 'text', content: e.literal },
								{ type: 'closeTag', tagName: 'code' }
							];
						},
						codeBlock: function (e) {
							var t = e.info,
								t = t ? t.split(/\s+/) : [],
								n = [];
							return (
								0 < t.length && 0 < t[0].length && n.push('language-' + Uo(t[0])),
								[
									{ type: 'openTag', tagName: 'pre', outerNewLine: !0 },
									{ type: 'openTag', tagName: 'code', classNames: n },
									{ type: 'text', content: e.literal },
									{ type: 'closeTag', tagName: 'code' },
									{ type: 'closeTag', tagName: 'pre', outerNewLine: !0 }
								]
							);
						},
						link: function (e, t) {
							return t.entering
								? ((t = e.title),
									(e = e.destination),
									{
										type: 'openTag',
										tagName: 'a',
										attributes: to({ href: Uo(e) }, t && { title: Uo(t) })
									})
								: { type: 'closeTag', tagName: 'a' };
						},
						image: function (e, t) {
							var n = t.getChildrenText,
								t = t.skipChildren,
								r = e.title,
								o = e.destination;
							return (
								t(),
								{
									type: 'openTag',
									tagName: 'img',
									selfClose: !0,
									attributes: to({ src: Uo(o), alt: n(e) }, r && { title: Uo(r) })
								}
							);
						},
						customBlock: function (e, t, n) {
							var r = e.info.trim().toLowerCase(),
								n = n[r];
							if (n)
								try {
									return n(e, t);
								} catch (e) {
									console.warn(
										'[@toast-ui/editor] - The error occurred when ' +
											r +
											' block node was parsed in markdown renderer: ' +
											e
									);
								}
							return [
								{ type: 'openTag', tagName: 'div', outerNewLine: !0 },
								{ type: 'text', content: e.literal },
								{ type: 'closeTag', tagName: 'div', outerNewLine: !0 }
							];
						},
						frontMatter: function (e) {
							return [
								{
									type: 'openTag',
									tagName: 'div',
									outerNewLine: !0,
									attributes: { style: 'white-space: pre; display: none;' }
								},
								{ type: 'text', content: e.literal },
								{ type: 'closeTag', tagName: 'div', outerNewLine: !0 }
							];
						},
						customInline: function (e, t, n) {
							var r = e.info,
								o = e.firstChild,
								i = r.trim().toLowerCase(),
								n = n[i],
								a = t.entering;
							if (n)
								try {
									return n(e, t);
								} catch (e) {
									console.warn(
										'[@toast-ui/editor] - The error occurred when ' +
											i +
											' inline node was parsed in markdown renderer: ' +
											e
									);
								}
							return a
								? [
										{ type: 'openTag', tagName: 'span' },
										{ type: 'text', content: '$$' + r + (o ? ' ' : '') }
									]
								: [
										{ type: 'text', content: '$$' },
										{ type: 'closeTag', tagName: 'span' }
									];
						}
					},
					ms = {
						strike: function (e, t) {
							return { type: t.entering ? 'openTag' : 'closeTag', tagName: 'del' };
						},
						item: function (e, t) {
							var t = t.entering,
								e = e.listData,
								n = e.checked,
								e = e.task;
							return t
								? ((t = { type: 'openTag', tagName: 'li', outerNewLine: !0 }),
									e
										? [
												t,
												{
													type: 'openTag',
													tagName: 'input',
													selfClose: !0,
													attributes: to(to({}, n && { checked: '' }), {
														disabled: '',
														type: 'checkbox'
													})
												},
												{ type: 'text', content: ' ' }
											]
										: t)
								: { type: 'closeTag', tagName: 'li', outerNewLine: !0 };
						},
						table: function (e, t) {
							return {
								type: t.entering ? 'openTag' : 'closeTag',
								tagName: 'table',
								outerNewLine: !0
							};
						},
						tableHead: function (e, t) {
							return {
								type: t.entering ? 'openTag' : 'closeTag',
								tagName: 'thead',
								outerNewLine: !0
							};
						},
						tableBody: function (e, t) {
							return {
								type: t.entering ? 'openTag' : 'closeTag',
								tagName: 'tbody',
								outerNewLine: !0
							};
						},
						tableRow: function (e, t) {
							if (t.entering) return { type: 'openTag', tagName: 'tr', outerNewLine: !0 };
							var n = [];
							if (e.lastChild)
								for (
									var r = e.parent.parent.columns.length, o = e.lastChild.endIdx + 1;
									o < r;
									o += 1
								)
									n.push(
										{ type: 'openTag', tagName: 'td', outerNewLine: !0 },
										{ type: 'closeTag', tagName: 'td', outerNewLine: !0 }
									);
							return n.push({ type: 'closeTag', tagName: 'tr', outerNewLine: !0 }), n;
						},
						tableCell: function (e, t) {
							var n,
								r,
								t = t.entering;
							return e.ignored
								? { type: 'text', content: '' }
								: ((n = 'tableHead' === (r = e.parent.parent).type ? 'th' : 'td'),
									(e =
										null != (r = r.parent.columns[e.startIdx]) && r.align
											? { align: r.align }
											: null),
									t
										? to({ type: 'openTag', tagName: n, outerNewLine: !0 }, e && { attributes: e })
										: { type: 'closeTag', tagName: n, outerNewLine: !0 });
						}
					},
					gs = { softbreak: '\n', gfm: !1, tagFilter: !1, nodeId: !1 };
				function vs(e) {
					for (var t = [], n = e.walker(); (r = n.next()); ) {
						var r = r.node;
						'text' === r.type && t.push(r.literal);
					}
					return t.join('');
				}
				(bs.prototype.createConvertors = function () {
					var t,
						e,
						n,
						i = to({}, hs);
					return (
						this.options.gfm && (i = to(to({}, i), ms)),
						this.options.convertors &&
							((t = this.options.convertors),
							(e = Object.keys(t)),
							(n = to(to({}, hs), ms)),
							e.forEach(function (e) {
								var r = i[e],
									o = t[e],
									e = -1 === Object.keys(n).indexOf(e) ? e.toLowerCase() : e;
								i[e] = r
									? function (e, t, n) {
											return (
												(t.origin = function () {
													return r(e, t, n);
												}),
												o(e, t)
											);
										}
									: o;
							})),
						i
					);
				}),
					(bs.prototype.getConvertors = function () {
						return this.convertors;
					}),
					(bs.prototype.getOptions = function () {
						return this.options;
					}),
					(bs.prototype.render = function (e) {
						for (
							var o = this, i = ((this.buffer = []), e.walker()), a = null, s = this;
							(a = i.next());

						)
							!(function () {
								var n = a.node,
									e = a.entering,
									t = s.convertors[n.type];
								if (!t) return;
								var r = !1,
									e = {
										entering: e,
										leaf: !Zo(n),
										options: s.options,
										getChildrenText: vs,
										skipChildren: function () {
											r = !0;
										}
									},
									t = qi(n) || 'customInline' === n.type ? t(n, e, s.convertors) : t(n, e);
								t &&
									((Array.isArray(t) ? t : [t]).forEach(function (e, t) {
										'openTag' === e.type &&
											o.options.nodeId &&
											0 === t &&
											(e.attributes || (e.attributes = {}),
											(e.attributes['data-nodeid'] = String(n.id))),
											o.renderHTMLNode(e);
									}),
									r) &&
									(i.resumeAt(n, !1), i.next());
							})();
						return this.addNewLine(), this.buffer.join('');
					}),
					(bs.prototype.renderHTMLNode = function (e) {
						switch (e.type) {
							case 'openTag':
							case 'closeTag':
								this.renderElementNode(e);
								break;
							case 'text':
								this.renderTextNode(e);
								break;
							case 'html':
								this.renderRawHtmlNode(e);
						}
					}),
					(bs.prototype.generateOpenTagString = function (e) {
						var n = this,
							t = e.tagName,
							r = e.classNames,
							o = e.attributes;
						this.buffer.push('<' + t),
							r && 0 < r.length && this.buffer.push(' class="' + r.join(' ') + '"'),
							o &&
								Object.keys(o).forEach(function (e) {
									var t = o[e];
									n.buffer.push(' ' + e + '="' + t + '"');
								}),
							e.selfClose && this.buffer.push(' /'),
							this.buffer.push('>');
					}),
					(bs.prototype.generateCloseTagString = function (e) {
						e = e.tagName;
						this.buffer.push('</' + e + '>');
					}),
					(bs.prototype.addNewLine = function () {
						this.buffer.length && '\n' !== Ki(Ki(this.buffer)) && this.buffer.push('\n');
					}),
					(bs.prototype.addOuterNewLine = function (e) {
						e.outerNewLine && this.addNewLine();
					}),
					(bs.prototype.addInnerNewLine = function (e) {
						e.innerNewLine && this.addNewLine();
					}),
					(bs.prototype.renderTextNode = function (e) {
						this.buffer.push(Uo(e.content));
					}),
					(bs.prototype.renderRawHtmlNode = function (e) {
						this.addOuterNewLine(e), this.buffer.push(e.content), this.addOuterNewLine(e);
					}),
					(bs.prototype.renderElementNode = function (e) {
						'openTag' === e.type
							? (this.addOuterNewLine(e),
								this.generateOpenTagString(e),
								e.selfClose ? this.addOuterNewLine(e) : this.addInnerNewLine(e))
							: (this.addInnerNewLine(e), this.generateCloseTagString(e), this.addOuterNewLine(e));
					});
				var ys = bs;
				function bs(e) {
					(this.buffer = []),
						(this.options = to(to({}, gs), e)),
						(this.convertors = this.createConvertors()),
						delete this.options.convertors;
				}
				var co = ah(368),
					ws = ah.n(co),
					ks = ['iframe', 'embed'],
					xs = [];
				function Cs(e) {
					C(ks, e) && xs.push(e.toLowerCase());
				}
				function Ts(e, t) {
					return ws().sanitize(
						e,
						x(
							{
								ADD_TAGS: xs,
								ADD_ATTR: ['rel', 'target', 'hreflang', 'type'],
								FORBID_TAGS: [
									'input',
									'script',
									'textarea',
									'form',
									'button',
									'select',
									'meta',
									'style',
									'link',
									'title',
									'object',
									'base'
								]
							},
							t
						)
					);
				}
				function Es(e, t) {
					return e.literal
						.replace(new RegExp('(<\\s*' + t + '[^>]*>)|(</' + t + '\\s*[>])', 'ig'), '')
						.trim();
				}
				function Ls(e) {
					e = (e = e.match(tt)[0]).match(new RegExp(Ye, 'g'));
					return e
						? e.reduce(function (e, t) {
								var t = t.trim().split('='),
									n = t[0],
									t = t.slice(1);
								return t.length && (e[n] = t.join('=').replace(/'|"/g, '').trim()), e;
							}, {})
						: {};
				}
				function Ms(e) {
					return ke()(e.attributes).reduce(function (e, t) {
						return (e[t.nodeName] = t.nodeValue), e;
					}, {});
				}
				function Ns(e, t, n, r) {
					(n = n(r.getToDOMNode(t)(e).outerHTML)),
						(r = document.createElement('div')),
						(r.innerHTML = n),
						(e = Ms((t = r.firstChild)));
					return { dom: t, htmlAttrs: e };
				}
				var As = {
					htmlBlock: function (n, r, o) {
						return {
							atom: !0,
							content: 'block+',
							group: 'block',
							attrs: {
								htmlAttrs: { default: {} },
								childrenHTML: { default: '' },
								htmlBlock: { default: !0 }
							},
							parseDOM: [
								{
									tag: n,
									getAttrs: function (e) {
										return { htmlAttrs: Ms(e), childrenHTML: e.innerHTML };
									}
								}
							],
							toDOM: function (e) {
								var e = Ns(e, n, r, o),
									t = e.dom,
									e = e.htmlAttrs;
								return (
									(e.class = e.class ? e.class + ' html-block' : 'html-block'),
									R([n, e], ke()(t.childNodes))
								);
							}
						};
					},
					htmlInline: function (t, n, r) {
						return {
							attrs: { htmlAttrs: { default: {} }, htmlInline: { default: !0 } },
							parseDOM: [
								{
									tag: t,
									getAttrs: function (e) {
										return { htmlAttrs: Ms(e) };
									}
								}
							],
							toDOM: function (e) {
								e = Ns(e, t, n, r).htmlAttrs;
								return [t, e, 0];
							}
						};
					}
				};
				var Ds = /^\s*<\s*\//,
					Ss = {
						paragraph: function (e, t) {
							var n = t.entering,
								r = t.origin;
							return t.options.nodeId
								? { type: n ? 'openTag' : 'closeTag', outerNewLine: !0, tagName: 'p' }
								: r();
						},
						softbreak: function (e) {
							return {
								type: 'html',
								content:
									e.prev && 'htmlInline' === e.prev.type && /<br ?\/?>/.test(e.prev.literal)
										? '\n'
										: '<br>\n'
							};
						},
						item: function (e, t) {
							var n;
							return t.entering
								? ((t = {}),
									(n = []),
									e.listData.task &&
										((t['data-task'] = ''), n.push('task-list-item'), e.listData.checked) &&
										(n.push('checked'), (t['data-task-checked'] = '')),
									{
										type: 'openTag',
										tagName: 'li',
										classNames: n,
										attributes: t,
										outerNewLine: !0
									})
								: { type: 'closeTag', tagName: 'li', outerNewLine: !0 };
						},
						code: function (e) {
							return [
								{
									type: 'openTag',
									tagName: 'code',
									attributes: { 'data-backticks': String(e.tickCount) }
								},
								{ type: 'text', content: e.literal },
								{ type: 'closeTag', tagName: 'code' }
							];
						},
						codeBlock: function (e) {
							var t = e.fenceLength,
								n = e.info,
								n = n ? n.split(/\s+/) : [],
								r = [],
								o = {};
							return (
								3 < t && (o['data-backticks'] = t),
								0 < n.length &&
									0 < n[0].length &&
									((t = n[0]), r.push('lang-' + t), (o['data-language'] = t)),
								[
									{ type: 'openTag', tagName: 'pre', classNames: r },
									{ type: 'openTag', tagName: 'code', attributes: o },
									{ type: 'text', content: e.literal },
									{ type: 'closeTag', tagName: 'code' },
									{ type: 'closeTag', tagName: 'pre' }
								]
							);
						},
						customInline: function (e, t) {
							var n = t.origin,
								r = t.entering,
								t = t.skipChildren,
								o = e.info;
							return -1 !== o.indexOf('widget') && r
								? (t(),
									[
										{ type: 'openTag', tagName: 'span', classNames: ['tui-widget'] },
										{ type: 'html', content: Ve(o, Ge(e)).outerHTML },
										{ type: 'closeTag', tagName: 'span' }
									])
								: n();
						}
					};
				function Os(r, t) {
					var n = x({}, Ss);
					return (
						r &&
							(n.link = function (e, t) {
								var n = t.entering,
									t = (0, t.origin)();
								return n && (t.attributes = x(x({}, t.attributes), r)), t;
							}),
						t &&
							Object.keys(t).forEach(function (e) {
								var r = n[e],
									s = t[e];
								r && At()(s)
									? (n[e] = function (e, t) {
											var n = x({}, t);
											return (
												(n.origin = function () {
													return r(e, t);
												}),
												s(e, n)
											);
										})
									: C(['htmlBlock', 'htmlInline'], e) && !At()(s)
										? (n[e] = function (e, t) {
												var n = e.literal.match(tt);
												if (n) {
													var r,
														o = n[0],
														i = n[1],
														n = n[3],
														i = (i || n).toLowerCase(),
														n = s[i],
														a = Es(e, i);
													if (n)
														return (
															((r = x({}, e)).attrs = Ls(o)),
															(r.childrenHTML = a),
															(r.type = i),
															(t.entering = !Ds.test(e.literal)),
															n(r, t)
														);
												}
												return t.origin();
											})
										: (n[e] = s);
							}),
						n
					);
				}
				var Is = ['list', 'item', 'blockQuote'],
					Rs = ['UL', 'OL', 'BLOCKQUOTE'];
				function Ps(e, t, n) {
					var r = Ae(t) - 1,
						t = De(t) - 1,
						o = n[r].getBoundingClientRect(),
						i = n[t].offsetTop - n[r].offsetTop + n[t].clientHeight;
					return {
						height:
							i <= 0
								? n[r].clientHeight
								: i +
									(function (e, t, n) {
										var r = e.childCount - 1,
											o = 0;
										for (
											;
											n <= r &&
											(function (e, t) {
												return (
													!(e = e.child(t)).childCount ||
													(1 === e.childCount && (null == (t = e.firstChild.text) || !t.trim()))
												);
											})(e, n);

										)
											(o += t[n].clientHeight), (n += 1);
										return o;
									})(e, n, Math.min(1 + t, e.childCount - 1)),
						rect: o
					};
				}
				function Bs(e, t) {
					for (
						var n = 0;
						e &&
						e !== t &&
						(C(Rs, e.tagName) || (n += e.offsetTop), e.offsetParent !== t.offsetParent);

					)
						e = e.parentElement;
					return n;
				}
				function Hs(e, t) {
					for (var n = t, r = null; n; ) {
						var o = n.firstElementChild;
						if (!o) break;
						(r = n),
							(n = (function e(t, n, r) {
								if (t && n > r + t.offsetTop) return e(t.nextElementSibling, n, r) || t;
								return null;
							})(o, e, Bs(n, t)));
					}
					var i = n || r;
					return i === t ? null : i;
				}
				function Fs(e, t) {
					for (
						var n, r = e.querySelector('[data-nodeid="' + t.id + '"]');
						!r ||
						'strike' === (n = (n = t).type) ||
						'strong' === n ||
						'emph' === n ||
						'code' === n ||
						'link' === n ||
						'image' === n;

					)
						(t = t.parent), (r = e.querySelector('[data-nodeid="' + t.id + '"]'));
					for (
						var o = { mdNode: t, el: r }, i = o.mdNode, a = o.el;
						(C(Is, i.type) || 'table' === i.type) && i.firstChild;

					)
						(i = i.firstChild), (a = a.firstElementChild);
					return { mdNode: i, el: a };
				}
				var qs = {};
				function js(e) {
					e &&
						(delete qs[Number(e.getAttribute('data-nodeid'))],
						ke()(e.children).forEach(function (e) {
							js(e);
						}));
				}
				function _s(e, t, n) {
					var r = qs[(r = n)] && qs[r].height,
						o = qs[(o = n)] && qs[o].offsetTop,
						i = r || e.clientHeight,
						t = o || Bs(e, t) || e.offsetTop;
					return (
						r || ((e = i), (qs[(r = n)] = qs[r] || {}), (qs[r].height = e)),
						o || ((r = t), (qs[(e = n)] = qs[e] || {}), (qs[e].offsetTop = r)),
						{ nodeHeight: i, offsetTop: t }
					);
				}
				var zs = d('md-preview-highlight');
				function Us(e, t) {
					var n = document.createElement('div'),
						n =
							((this.el = n),
							(this.eventEmitter = e),
							(this.isViewer = !!t.isViewer),
							(this.el.className = d('md-preview')),
							t.linkAttributes),
						e = t.customHTMLRenderer,
						r = t.sanitizer,
						t = t.highlight,
						t = void 0 !== t && t;
					(this.renderer = new ys({ gfm: !0, nodeId: !0, convertors: Os(n, e) })),
						(this.cursorNodeId = null),
						(this.sanitizer = r),
						this.initEvent(t),
						this.initContentSection(),
						this.isViewer && (this.previewContent.style.overflowWrap = 'break-word');
				}
				(Us.prototype.initContentSection = function () {
					(this.previewContent = ut('<div class="' + d('contents') + '"></div>')),
						this.isViewer || this.el.appendChild(this.previewContent);
				}),
					(Us.prototype.toggleActive = function (e) {
						ct(this.el, 'active', e);
					}),
					(Us.prototype.initEvent = function (e) {
						var n = this;
						this.eventEmitter.listen('updatePreview', this.update.bind(this)),
							this.isViewer ||
								(e &&
									(this.eventEmitter.listen('changeToolbarState', function (e) {
										var t = e.mdNode,
											e = e.cursorPos;
										n.updateCursorNode(t, e);
									}),
									this.eventEmitter.listen('blur', function () {
										n.removeHighlight();
									})),
								Yr()(this.el, 'scroll', function (e) {
									n.eventEmitter.emit(
										'scroll',
										'preview',
										Hs(e.target.scrollTop, n.previewContent)
									);
								}),
								this.eventEmitter.listen('changePreviewTabPreview', function () {
									return n.toggleActive(!0);
								}),
								this.eventEmitter.listen('changePreviewTabWrite', function () {
									return n.toggleActive(!1);
								}));
					}),
					(Us.prototype.removeHighlight = function () {
						var e;
						this.cursorNodeId && (e = this.getElementByNodeId(this.cursorNodeId)) && q()(e, zs);
					}),
					(Us.prototype.updateCursorNode = function (e, t) {
						e &&
							('tableRow' ===
							(e = Be(e, function (e) {
								switch (e.type) {
									case 'code':
									case 'text':
									case 'emph':
									case 'strong':
									case 'strike':
									case 'link':
									case 'image':
									case 'htmlInline':
									case 'linebreak':
									case 'softbreak':
									case 'customInline':
										return !1;
									default:
										return !void 0;
								}
								return !0;
							})).type
								? (e = (function (e, t) {
										for (var n = e.firstChild; n && n.next && !(Se(n.next) > t + 1); ) n = n.next;
										return n;
									})(e, t[1]))
								: 'tableBody' === e.type && (e = null));
						var n,
							t = e ? e.id : null;
						this.cursorNodeId !== t &&
							((e = this.getElementByNodeId(this.cursorNodeId)),
							(n = this.getElementByNodeId(t)),
							e && q()(e, zs),
							n && F()(n, zs),
							(this.cursorNodeId = t));
					}),
					(Us.prototype.getElementByNodeId = function (e) {
						return e ? this.previewContent.querySelector('[data-nodeid="' + e + '"]') : null;
					}),
					(Us.prototype.update = function (e) {
						var t = this;
						e.forEach(function (e) {
							return t.replaceRangeNodes(e);
						}),
							this.eventEmitter.emit('afterPreviewRender', this);
					}),
					(Us.prototype.replaceRangeNodes = function (e) {
						var t = this,
							n = e.nodes,
							e = e.removedNodeRange,
							r = this.previewContent,
							n = this.eventEmitter.emitReduce(
								'beforePreviewRender',
								this.sanitizer(
									n
										.map(function (e) {
											return t.renderer.render(e);
										})
										.join('')
								)
							);
						if (e) {
							var e = e.id,
								o = e[0],
								e = e[1],
								o = this.getElementByNodeId(o),
								i = this.getElementByNodeId(e);
							if (o) {
								o.insertAdjacentHTML('beforebegin', n);
								for (var a = o; a && a !== i; ) {
									var s = a.nextElementSibling;
									lt(a), js(a), (a = s);
								}
								null != a && a.parentNode && (lt(a), js(a));
							}
						} else r.insertAdjacentHTML('afterbegin', n);
					}),
					(Us.prototype.getRenderer = function () {
						return this.renderer;
					}),
					(Us.prototype.destroy = function () {
						Qr()(this.el, 'scroll'), (this.el = null);
					}),
					(Us.prototype.getElement = function () {
						return this.el;
					}),
					(Us.prototype.getHTML = function () {
						return mt(this.previewContent.innerHTML);
					}),
					(Us.prototype.setHTML = function (e) {
						this.previewContent.innerHTML = e;
					}),
					(Us.prototype.setHeight = function (e) {
						H()(this.el, { height: e + 'px' });
					}),
					(Us.prototype.setMinHeight = function (e) {
						H()(this.el, { minHeight: e + 'px' });
					});
				var Vs = Us;
				function $s(e, t) {
					for (var n = e.depth; n; ) {
						var r = e.node(n);
						if (t(r, n)) return { node: r, depth: n, offset: 0 < n ? e.before(n) : 0 };
						--n;
					}
					return null;
				}
				function Ws(e) {
					return $s(e, function (e) {
						e = e.type;
						return 'listItem' === e.name || 'bulletList' === e.name || 'orderedList' === e.name;
					});
				}
				function Gs(e) {
					return !!$s(e, function (e) {
						e = e.type;
						return 'tableHeadCell' === e.name || 'tableBodyCell' === e.name;
					});
				}
				function Zs(e) {
					return $s(e, function (e) {
						return 'listItem' === e.type.name;
					});
				}
				function Xs(e) {
					return {
						tag: e,
						getAttrs: function (e) {
							e = e.getAttribute('data-raw-html');
							return x({}, e && { rawHTML: e });
						}
					};
				}
				function Ks(n) {
					return Object.keys(n).reduce(function (e, t) {
						return 'rawHTML' !== t && n[t] && (e[(t = 'className' === t ? 'class' : t)] = n[t]), e;
					}, {});
				}
				function Qs(e) {
					return {
						tag: e,
						getAttrs: function (r) {
							return ['rawHTML', 'colspan', 'rowspan', 'extended'].reduce(function (e, t) {
								var n = r.getAttribute('rawHTML' === t ? 'data-raw-html' : t);
								return n && (e[t] = C(['rawHTML', 'extended'], t) ? n : Number(n)), e;
							}, {});
						}
					};
				}
				function h() {
					return { htmlAttrs: { default: null }, classNames: { default: null } };
				}
				function v(e) {
					var t = e.htmlAttrs,
						e = e.classNames;
					return x(x({}, t), { class: e ? e.join(' ') : null });
				}
				function Ys(e, t, n, r) {
					(i = n), (a = (o = e).parent), (s = e.startIndex), (o = e.endIndex);
					var o,
						i,
						a =
							(e = a.contentMatchAt(s).findWrapping(i)) &&
							((i = e.length ? e[0] : i), a.canReplaceWith(s, o, i))
								? e
								: null,
						s = (function (e, t) {
							var n = e.parent,
								r = e.startIndex,
								o = e.endIndex,
								e = n.child(r);
							if ((e = t.contentMatch.findWrapping(e.type))) {
								for (
									var i = (e.length ? e[e.length - 1] : t).contentMatch, a = r;
									i && a < o;
									a += 1
								)
									i = i.matchType(n.child(a).type);
								if (i && i.validEnd) return e;
							}
							return null;
						})(t, n);
					return a && s
						? ((o = a.map(function (e) {
								return { type: e };
							})),
							(i = s.map(function (e) {
								return { type: e, attrs: r };
							})),
							o.concat({ type: n }).concat(i))
						: null;
				}
				function Js(e, t, n, r) {
					var o = t.$from,
						i = t.$to,
						a = t.depth,
						s = t,
						l = !1,
						c =
							(2 <= a &&
								o.node(a - 1).type.compatibleContent(n) &&
								0 === t.startIndex &&
								o.index(a - 1) &&
								((c = e.doc.resolve(t.start - 2)),
								(s = new X.NodeRange(c, c, a)),
								t.endIndex < t.parent.childCount &&
									(t = new X.NodeRange(o, e.doc.resolve(i.end(a)), a)),
								(l = !0)),
							Ys(s, t, n, r));
					if (c) {
						for (
							var u = e,
								o = t,
								p = c,
								i = l,
								d = n,
								a = o.start,
								s = o.end,
								f = o.startIndex,
								r = o.endIndex,
								h = o.parent,
								m = X.Fragment.empty,
								g = p.length - 1;
							0 <= g;
							--g
						)
							m = X.Fragment.from(p[g].type.create(p[g].attrs, m));
						u.step(
							new we.ReplaceAroundStep(a - (i ? 2 : 0), s, a, s, new X.Slice(m, 0, 0), p.length, !0)
						);
						for (var v = 0, g = 0; g < p.length; g += 1)
							if (p[g].type === d) {
								v = g + 1;
								break;
							}
						for (var y = p.length - v, b = a + p.length - (i ? 2 : 0), g = f, w = r; g < w; g += 1)
							g !== f && (0, we.canSplit)(u.doc, b, y) && (u.split(b, y), (b += 2 * y)),
								(b += h.child(g).nodeSize);
						return u;
					}
					return e;
				}
				function el(e, t) {
					for (var n = e.resolve(t); 'paragraph' !== n.node().type.name; ) n = e.resolve((t -= 2));
					return Zs(n);
				}
				function tl(o) {
					return function (e, t) {
						var n = e.selection,
							e = e.tr,
							r = n.$from,
							n = n.$to,
							n = r.blockRange(n);
						return (
							!!n &&
							(t(
								(Ws(r)
									? function (e, t, n) {
											var r = t.$from,
												t = t.$to,
												o = Zs(r),
												i = Zs(t);
											if (o && i)
												for (; i; ) {
													var a = i.offset,
														s = i.node,
														l = i.depth,
														s =
															(s.attrs.task && e.setNodeMarkup(a, null, { task: !1, checked: !1 }),
															e.doc.resolve(a));
													if (
														(s.parent.type !== n && ((s = s.before(l - 1)), e.setNodeMarkup(s, n)),
														a === o.offset)
													)
														break;
													i = el(e.doc, a);
												}
											return e;
										}
									: Js)(e, n, o)
							),
							!0)
						);
					};
				}
				function nl() {
					return function (e, t) {
						var n = e.selection,
							r = e.tr,
							e = e.schema,
							o = n.$from,
							n = n.$to,
							n = o.blockRange(n);
						return (
							!!n &&
							(t(
								Ws(o)
									? (function (e, t) {
											var n = t.$from,
												t = t.$to,
												r = Zs(n),
												o = Zs(t);
											if (r && o)
												for (; o; ) {
													var i = o.offset,
														a = { task: !o.node.attrs.task, checked: !1 };
													if ((e.setNodeMarkup(i, null, a), i === r.offset)) break;
													o = el(e.doc, i);
												}
											return e;
										})(r, n)
									: Js(r, n, e.nodes.bulletList, { task: !0 })
							),
							!0)
						);
					};
				}
				function rl(u) {
					return function (e, t) {
						var n,
							r,
							o,
							i,
							a,
							s,
							l = e.tr,
							e = e.selection,
							c = e.$from,
							e = e.$to,
							e = c.blockRange(e, function (e) {
								var t = e.childCount,
									e = e.firstChild;
								return !!t && e.type === u;
							});
						return (
							!!e &&
							(t(
								c.node(e.depth - 1).type === u
									? ((t = l),
										(c = u),
										(r = (n = e).$from),
										(o = n.$to),
										(i = n.end),
										(a = n.depth),
										(s = n.parent),
										(o = o.end(a)),
										i < o &&
											(t.step(
												new we.ReplaceAroundStep(
													i - 1,
													o,
													i,
													o,
													new X.Slice(X.Fragment.from(c.create(null, s.copy())), 1, 0),
													1,
													!0
												)
											),
											(n = new X.NodeRange(t.doc.resolve(r.pos), t.doc.resolve(o), a))),
										t.lift(n, (0, we.liftTarget)(n)),
										t)
									: (function (e, t) {
											for (
												var n = t.parent, r = t.end, o = t.endIndex - 1, i = t.startIndex;
												i < o;
												--o
											)
												(r -= n.child(o).nodeSize), e.delete(r - 1, r + 1);
											var a = e.doc.resolve(t.start),
												s = a.nodeAfter,
												l = 0 === t.startIndex,
												t = t.endIndex === n.childCount,
												c = a.node(-1),
												u = a.index(-1),
												c = c.canReplace(
													u + (l ? 0 : 1),
													u + 1,
													null == s
														? void 0
														: s.content.append(t ? X.Fragment.empty : X.Fragment.from(n))
												);
											return (
												s &&
													c &&
													((c = (u = a.pos) + s.nodeSize),
													e.step(
														new we.ReplaceAroundStep(
															u - (l ? 1 : 0),
															c + (t ? 1 : 0),
															u + 1,
															c - 1,
															new X.Slice(
																(l
																	? X.Fragment.empty
																	: X.Fragment.from(n.copy(X.Fragment.empty))
																).append(
																	t ? X.Fragment.empty : X.Fragment.from(n.copy(X.Fragment.empty))
																),
																l ? 0 : 1,
																t ? 0 : 1
															),
															l ? 0 : 1
														)
													)),
												e
											);
										})(l, e)
							),
							!0)
						);
					};
				}
				function ol() {
					return function () {
						return function (e, t) {
							var n,
								r,
								o = e.selection,
								i = e.schema,
								a = o.$from,
								o = o.$to;
							return !(
								!a.blockRange(o) ||
								!Ws(a) ||
								((r = i.nodes.listItem),
								(o = t),
								(i = (a = e).tr),
								(t = (a = a.selection).$from),
								(a = a.$to),
								!(
									(t = t.blockRange(a, function (e) {
										var t = e.childCount,
											e = e.firstChild;
										return !!t && e.type === r;
									})) && 0 < t.startIndex
								)) ||
								(e = (a = t.parent).child(t.startIndex - 1)).type !== r ||
								((n = (e = e.lastChild && e.lastChild.type === a.type)
									? X.Fragment.from(r.create())
									: null),
								(a = new X.Slice(
									X.Fragment.from(r.create(null, X.Fragment.from(a.type.create(null, n)))),
									e ? 3 : 1,
									0
								)),
								(n = t.start),
								(t = t.end),
								i.step(new we.ReplaceAroundStep(n - (e ? 3 : 1), t, n, t, a, 1, !0)),
								o(i),
								0)
							);
						};
					};
				}
				function il() {
					return {
						indent: ol(),
						outdent: function () {
							return function (e, t) {
								var n = e.selection,
									r = e.schema,
									o = n.$from,
									n = n.$to;
								return !(!o.blockRange(n) || !Ws(o)) && rl(r.nodes.listItem)(e, t);
							};
						}
					};
				}
				var al = new Map(),
					Q =
						((E.create = function (e) {
							var t,
								n,
								r,
								o,
								i,
								a = $s(e, function (e) {
									return 'table' === e.type.name;
								});
							return a
								? ((t = a.node),
									(r = a.depth),
									(a = a.offset),
									(null == (i = al.get(t)) ? void 0 : i.tableStartPos) === a + 1
										? i
										: ((n = []),
											(a = e.start(r)),
											(i = t.child(0)),
											(e = t.child(1)),
											(r = ll(i, a)),
											(o = ll(e, a + i.nodeSize)),
											i.forEach(function (e) {
												return n.push(e);
											}),
											e.forEach(function (e) {
												return n.push(e);
											}),
											(i = new E(t, n, a, r.concat(o))),
											al.set(t, i),
											i))
								: null;
						}),
						Object.defineProperty(E.prototype, 'totalRowCount', {
							get: function () {
								return this.rowInfo.length;
							},
							enumerable: !1,
							configurable: !0
						}),
						Object.defineProperty(E.prototype, 'totalColumnCount', {
							get: function () {
								return this.rowInfo[0].length;
							},
							enumerable: !1,
							configurable: !0
						}),
						Object.defineProperty(E.prototype, 'tableStartOffset', {
							get: function () {
								return this.tableStartPos;
							},
							enumerable: !1,
							configurable: !0
						}),
						Object.defineProperty(E.prototype, 'tableEndOffset', {
							get: function () {
								return this.tableStartPos + this.table.nodeSize - 1;
							},
							enumerable: !1,
							configurable: !0
						}),
						(E.prototype.getCellInfo = function (e, t) {
							return this.rowInfo[e][t];
						}),
						(E.prototype.posAt = function (e, t) {
							for (var n = 0, r = this.tableStartPos; ; n += 1) {
								var o = r + this.tableRows[n].nodeSize;
								if (n === e) {
									for (var i = t; i < this.totalColumnCount && this.rowInfo[n][i].offset < r; )
										i += 1;
									return i === this.totalColumnCount ? o : this.rowInfo[n][i].offset;
								}
								r = o;
							}
						}),
						(E.prototype.getNodeAndPos = function (e, t) {
							e = this.rowInfo[e][t];
							return { node: this.table.nodeAt(e.offset - this.tableStartOffset), pos: e.offset };
						}),
						(E.prototype.extendedRowspan = function (e, t) {
							return !1;
						}),
						(E.prototype.extendedColspan = function (e, t) {
							return !1;
						}),
						(E.prototype.getRowspanCount = function (e, t) {
							return 0;
						}),
						(E.prototype.getColspanCount = function (e, t) {
							return 0;
						}),
						(E.prototype.decreaseColspanCount = function (e, t) {
							return 0;
						}),
						(E.prototype.decreaseRowspanCount = function (e, t) {
							return 0;
						}),
						(E.prototype.getColspanStartInfo = function (e, t) {
							return null;
						}),
						(E.prototype.getRowspanStartInfo = function (e, t) {
							return null;
						}),
						(E.prototype.getCellStartOffset = function (e, t) {
							var n = this.rowInfo[e][t].offset;
							return this.extendedRowspan(e, t) ? this.posAt(e, t) : n;
						}),
						(E.prototype.getCellEndOffset = function (e, t) {
							var n = this.rowInfo[e][t],
								r = n.offset,
								n = n.nodeSize;
							return this.extendedRowspan(e, t) ? this.posAt(e, t) : r + n;
						}),
						(E.prototype.getCellIndex = function (e) {
							for (var t = 0; t < this.totalRowCount; t += 1)
								for (var n = this.rowInfo[t], r = 0; r < this.totalColumnCount; r += 1)
									if (n[r].offset + 1 > e.pos) return [t, r];
							return [0, 0];
						}),
						(E.prototype.getRectOffsets = function (e, t) {
							void 0 === t && (t = e), e.pos > t.pos && ((e = (n = [t, e])[0]), (t = n[1]));
							var n = this.getCellIndex(e),
								e = n[0],
								n = n[1],
								t = this.getCellIndex(t),
								r = t[0],
								t = t[1],
								o = ye(e, r),
								e = o[0],
								r = o[1],
								o = ye(n, t),
								n = o[0],
								t = o[1];
							return this.getSpannedOffsets({
								startRowIdx: e,
								startColIdx: n,
								endRowIdx: r,
								endColIdx: t
							});
						}),
						(E.prototype.getSpannedOffsets = function (e) {
							return e;
						}),
						E);
				function E(e, t, n, r) {
					(this.table = e), (this.tableRows = t), (this.tableStartPos = n), (this.rowInfo = r);
				}
				var sl,
					ll = function (e, i) {
						var t = [];
						return (
							e.forEach(function (e, r) {
								var o = { rowspanMap: {}, colspanMap: {}, length: 0 };
								e.forEach(function (e, t) {
									for (var e = e.nodeSize, n = 0; o[n]; ) n += 1;
									(o[n] = { offset: i + r + t + 2, nodeSize: e }), (o.length += 1);
								}),
									t.push(o);
							}),
							t
						);
					};
				function cl(e, t) {
					return ve(Q.prototype, e), (ll = t), Q;
				}
				function ul(e, t) {
					void 0 === t && (t = e);
					var n = this,
						r = e.node(0),
						o = Q.create(e),
						i = o.getRectOffsets(e, t),
						r = (function (e, t, n) {
							for (
								var r = n.startRowIdx,
									o = n.startColIdx,
									i = n.endRowIdx,
									a = n.endColIdx,
									s = [],
									l = r;
								l <= i;
								l += 1
							)
								for (var c = o; c <= a; c += 1) {
									var u = t.getCellInfo(l, c),
										p = u.offset,
										u = u.nodeSize;
									s.push(new m.SelectionRange(e.resolve(p + 1), e.resolve(p + u - 1)));
								}
							return s;
						})(r, o, i);
					return (
						((n = sl.call(this, r[0].$from, r[0].$to, r) || this).startCell = e),
						(n.endCell = t),
						(n.offsetMap = o),
						(n.isCellSelection = !0),
						(n.visible = !1),
						n
					);
				}
				r(ul, (sl = m.Selection)),
					(ul.prototype.map = function (e, t) {
						var n = this.startCell.pos,
							r = this.endCell.pos,
							n = e.resolve(t.map(n)),
							t = e.resolve(t.map(r)),
							r = Q.create(n);
						return this.offsetMap.totalColumnCount > r.totalColumnCount ||
							this.offsetMap.totalRowCount > r.totalRowCount
							? ((r = { tableBody: 1, tableRow: 2, tableCell: 3, paragraph: 4 }[
									t.parent.type.name
								]),
								(r = t.end(t.depth - r)),
								(r = Math.min(r - 4, t.pos)),
								m.TextSelection.create(e, r))
							: new ul(n, t);
					}),
					(ul.prototype.eq = function (e) {
						return (
							e instanceof ul &&
							e.startCell.pos === this.startCell.pos &&
							e.endCell.pos === this.endCell.pos
						);
					}),
					(ul.prototype.content = function () {
						for (
							var e,
								t = this.startCell.node(-2),
								n = this.startCell.start(-2),
								r = t.child(1).firstChild,
								o = t.child(0).type.create(),
								i = t.child(1).type.create(),
								a = Q.create(this.startCell),
								s = a.getRectOffsets(this.startCell, this.endCell),
								l = s.startRowIdx,
								c = s.startColIdx,
								u = s.endRowIdx,
								p = s.endColIdx,
								d = !1,
								f = l;
							f <= u;
							f += 1
						) {
							for (var h = [], m = c; m <= p; m += 1) {
								var g = a.getCellInfo(f, m).offset,
									g = t.nodeAt(g - n);
								g &&
									((d = 'tableHeadCell' === g.type.name),
									a.extendedRowspan(f, m) || a.extendedColspan(f, m)
										? h.push(g.type.create({ extended: !0 }))
										: h.push(g.copy(g.content)));
							}
							var v = r.copy(X.Fragment.from(h)),
								y = d ? o : i;
							y.content = y.content.append(X.Fragment.from(v));
						}
						return new X.Slice(
							((s = i),
							(l = []),
							(e = o).childCount && l.push(e),
							s.childCount && l.push(s),
							X.Fragment.from(l)),
							1,
							1
						);
					}),
					(ul.prototype.toJSON = function () {
						return JSON.stringify(this);
					});
				var pl = ul;
				function dl(e, t, n, r) {
					for (
						var o = n.nodes, i = o.tableRow, a = o.tableBodyCell, s = o.paragraph, l = [], c = 0;
						c < e;
						c += 1
					) {
						for (var u = [], p = 0; p < t; p += 1) {
							var d = r && r[c * t + p],
								d = s.create(null, d ? n.text(d) : []);
							u.push(a.create(null, d));
						}
						l.push(i.create(null, u));
					}
					return l;
				}
				function fl(e, t, n, r) {
					void 0 === r && (r = null);
					for (
						var n = n.nodes,
							o = n.tableHeadCell,
							i = n.tableBodyCell,
							a = n.paragraph,
							s = 0 === t ? o : i,
							l = [],
							c = 0;
						c < e;
						c += 1
					)
						l.push(s.create(r, a.create()));
					return l;
				}
				function hl(e, t) {
					for (; e && e !== t; ) {
						if ('TD' === e.nodeName || 'TH' === e.nodeName) return e;
						e = e.parentNode;
					}
					return null;
				}
				function ml(e) {
					return $s(e, function (e) {
						e = e.type;
						return 'tableHeadCell' === e.name || 'tableBodyCell' === e.name;
					});
				}
				function gl(e) {
					if (e instanceof m.TextSelection) {
						var t = e.$anchor,
							n = ml(t);
						if (n) return { anchor: (t = t.node(0).resolve(t.before(n.depth))), head: t };
					}
					return { anchor: e.startCell, head: e.endCell };
				}
				function vl(e) {
					var t;
					if (e.size) {
						var n = e.content,
							r = e.openStart,
							o = e.openEnd;
						if (1 !== n.childCount) return null;
						for (
							;
							1 === n.childCount &&
							((0 < r && 0 < o) || 'table' === (null == (t = n.firstChild) ? void 0 : t.type.name));

						)
							--r, --o, (n = n.firstChild.content);
						if ('tableHead' === n.firstChild.type.name || 'tableBody' === n.firstChild.type.name)
							return n;
					}
					return null;
				}
				function yl(e) {
					var t = e.startRowIdx,
						n = e.startColIdx;
					return { rowCount: e.endRowIdx - t + 1, columnCount: e.endColIdx - n + 1 };
				}
				var bl = new m.PluginKey('cellSelection');
				function wl(e) {
					(this.view = e),
						(this.handlers = {
							mousedown: this.handleMousedown.bind(this),
							mousemove: this.handleMousemove.bind(this),
							mouseup: this.handleMouseup.bind(this)
						}),
						(this.startCellPos = null),
						this.init();
				}
				(wl.prototype.init = function () {
					this.view.dom.addEventListener('mousedown', this.handlers.mousedown);
				}),
					(wl.prototype.handleMousedown = function (e) {
						var t = hl(e.target, this.view.dom);
						2 === e.button
							? e.preventDefault()
							: t && ((t = this.getCellPos(e)) && (this.startCellPos = t), this.bindEvent());
					}),
					(wl.prototype.handleMousemove = function (e) {
						var t,
							n = bl.getState(this.view.state),
							e = this.getCellPos(e),
							r = this.startCellPos;
						n ? (t = this.view.state.doc.resolve(n)) : r !== e && (t = r),
							t && r && e && this.setCellSelection(r, e);
					}),
					(wl.prototype.handleMouseup = function () {
						(this.startCellPos = null),
							this.unbindEvent(),
							null !== bl.getState(this.view.state) &&
								this.view.dispatch(this.view.state.tr.setMeta(bl, -1));
					}),
					(wl.prototype.bindEvent = function () {
						var e = this.view.dom;
						e.addEventListener('mousemove', this.handlers.mousemove),
							e.addEventListener('mouseup', this.handlers.mouseup);
					}),
					(wl.prototype.unbindEvent = function () {
						var e = this.view.dom;
						e.removeEventListener('mousemove', this.handlers.mousemove),
							e.removeEventListener('mouseup', this.handlers.mouseup);
					}),
					(wl.prototype.getCellPos = function (e) {
						var t = e.clientX,
							e = e.clientY,
							t = this.view.posAtCoords({ left: t, top: e });
						if (t) {
							var e = this.view.state.doc,
								t = e.resolve(t.pos),
								n = ml(t);
							if (n) return (t = t.before(n.depth)), e.resolve(t);
						}
						return null;
					}),
					(wl.prototype.setCellSelection = function (e, t) {
						var n = this.view.state,
							r = n.selection,
							n = n.tr,
							o = null === bl.getState(this.view.state),
							e = new pl(e, t);
						(!o && r.eq(e)) ||
							((r = n.setSelection(e)), o && r.setMeta(bl, t.pos), this.view.dispatch(r));
					}),
					(wl.prototype.destroy = function () {
						this.view.dom.removeEventListener('mousedown', this.handlers.mousedown);
					});
				var kl = wl,
					xl = d('cell-selected');
				function Cl(e) {
					var n,
						t = e.selection,
						e = e.doc;
					return t instanceof pl
						? ((n = []),
							t.ranges.forEach(function (e) {
								var t = e.$from,
									e = e.$to;
								n.push(be.Decoration.node(t.pos - 1, e.pos + 1, { class: xl }));
							}),
							be.DecorationSet.create(e, n))
						: null;
				}
				var so = ah(928),
					Tl = ah.n(so);
				function El() {
					(this.keys = []), (this.values = []);
				}
				(El.prototype.getKeyIndex = function (e) {
					return Tl()(e, this.keys);
				}),
					(El.prototype.get = function (e) {
						return this.values[this.getKeyIndex(e)];
					}),
					(El.prototype.set = function (e, t) {
						var n = this.getKeyIndex(e);
						return -1 < n ? (this.values[n] = t) : (this.keys.push(e), this.values.push(t)), this;
					}),
					(El.prototype.has = function (e) {
						return -1 < this.getKeyIndex(e);
					}),
					(El.prototype.delete = function (e) {
						e = this.getKeyIndex(e);
						return -1 < e && (this.keys.splice(e, 1), this.values.splice(e, 1), !0);
					}),
					(El.prototype.forEach = function (n, r) {
						var o = this;
						void 0 === r && (r = this),
							this.values.forEach(function (e, t) {
								e && o.keys[t] && n.call(r, e, o.keys[t], o);
							});
					}),
					(El.prototype.clear = function () {
						(this.keys = []), (this.values = []);
					});
				var Ll = El;
				function Ml() {
					(this.code = 'en-US'), (this.langs = new Ll());
				}
				(Ml.prototype.setCode = function (e) {
					this.code = e || 'en-US';
				}),
					(Ml.prototype.setLanguage = function (e, n) {
						var r = this;
						(e = [].concat(e)).forEach(function (e) {
							var t;
							r.langs.has(e)
								? ((t = r.langs.get(e)), r.langs.set(e, B()(t, n)))
								: r.langs.set(e, n);
						});
					}),
					(Ml.prototype.get = function (e, t) {
						t = t || this.code;
						var n = (this.langs.get(t) || this.langs.get('en-US'))[e];
						if (n) return n;
						throw new Error('There is no text key "' + e + '" in ' + t);
					});
				var L = new Ml(),
					Nl = [
						[
							{
								action: 'Add row to up',
								command: 'addRowToUp',
								disableInThead: !0,
								className: 'add-row-up'
							},
							{
								action: 'Add row to down',
								command: 'addRowToDown',
								disableInThead: !0,
								className: 'add-row-down'
							},
							{
								action: 'Remove row',
								command: 'removeRow',
								disableInThead: !0,
								className: 'remove-row'
							}
						],
						[
							{
								action: 'Add column to left',
								command: 'addColumnToLeft',
								className: 'add-column-left'
							},
							{
								action: 'Add column to right',
								command: 'addColumnToRight',
								className: 'add-column-right'
							},
							{ action: 'Remove column', command: 'removeColumn', className: 'remove-column' }
						],
						[
							{
								action: 'Align column to left',
								command: 'alignColumn',
								payload: { align: 'left' },
								className: 'align-column-left'
							},
							{
								action: 'Align column to center',
								command: 'alignColumn',
								payload: { align: 'center' },
								className: 'align-column-center'
							},
							{
								action: 'Align column to right',
								command: 'alignColumn',
								payload: { align: 'right' },
								className: 'align-column-right'
							}
						],
						[{ action: 'Remove table', command: 'removeTable', className: 'remove-table' }]
					];
				function Al(l) {
					return new m.Plugin({
						props: {
							handleDOMEvents: {
								contextmenu: function (e, t) {
									var n,
										r,
										o,
										i,
										a,
										s = hl(t.target, e.dom);
									return (
										!!s &&
										(t.preventDefault(),
										(n = t.clientX),
										(t = t.clientY),
										(r = (e = e.dom.parentNode.getBoundingClientRect()).left),
										(e = e.top),
										(o = 'TH' === s.nodeName),
										l.emit('contextmenu', {
											pos: { left: n - r + 10 + 'px', top: t - e + 30 + 'px' },
											menuGroups:
												((i = l),
												(a = o),
												Nl.map(function (e) {
													return e.map(function (e) {
														var t = e.action,
															n = e.command,
															r = e.payload,
															o = e.disableInThead,
															e = e.className;
														return {
															label: L.get(t),
															onClick: function () {
																i.emit('command', n, r);
															},
															disabled: a && !!o,
															className: e
														};
													});
												}).concat()),
											tableCell: s
										}),
										!0)
									);
								}
							}
						}
					});
				}
				var Dl = ['image', 'link', 'customBlock', 'frontMatter'],
					Sl = ['strong', 'strike', 'emph', 'code'],
					Ol = ['bulletList', 'orderedList', 'taskList'];
				function Il(e, t, u) {
					var p = e.$from,
						d = e.$to,
						n = e.from,
						e = e.to,
						f = { indent: { active: !1, disabled: !0 }, outdent: { active: !1, disabled: !0 } };
					return (
						t.nodesBetween(n, e, function (e, t, n) {
							n = n;
							var r,
								o,
								i,
								a,
								s,
								l,
								c,
								e =
									'listItem' === (r = (e = e).type.name)
										? e.attrs.task
											? 'taskList'
											: n.type.name
										: -1 !== r.indexOf('table')
											? 'table'
											: r;
							C(Dl, e) ||
								(C(Ol, e)
									? (((c = f)[(l = e)] = { active: !0 }),
										Ol.filter(function (e) {
											return e !== l;
										}).forEach(function (e) {
											c[e] && delete c[e];
										}),
										(f.indent.disabled = !1),
										(f.outdent.disabled = !1))
									: 'paragraph' === e || 'text' === e
										? ((o = p),
											(i = d),
											(a = u),
											(s = f),
											Sl.forEach(function (e) {
												var t = a.marks[e],
													n = o.marksAcross(i) || [];
												!t.isInSet(n) || (s[e] = { active: !0 });
											}))
										: (f[e] = { active: !0 }));
						}),
						f
					);
				}
				(Pl.prototype.renderToolArea = function () {
					var e = this,
						t = document.createElement('div'),
						n = document.createElement('span'),
						r = document.createElement('button');
					(t.className = 'tool'),
						(n.textContent = this.node.attrs.info),
						(n.className = 'info'),
						(r.type = 'button'),
						r.addEventListener('click', function () {
							return e.openEditor();
						}),
						t.appendChild(n),
						t.appendChild(r),
						this.wrapper.appendChild(t);
				}),
					(Pl.prototype.renderCustomBlock = function () {
						var e = this.toDOMAdaptor.getToDOMNode(this.node.attrs.info);
						if (e) {
							for (e = e(this.node); this.wrapper.hasChildNodes(); )
								this.wrapper.removeChild(this.wrapper.lastChild);
							e && this.wrapper.appendChild(e), this.renderToolArea();
						}
					}),
					(Pl.prototype.createInnerViewContainer = function () {
						(this.innerViewContainer = document.createElement('div')),
							(this.innerViewContainer.className = d('custom-block-editor')),
							(this.innerViewContainer.style.display = 'none');
					}),
					(Pl.prototype.closeEditor = function () {
						this.innerEditorView &&
							(this.innerEditorView.destroy(),
							(this.innerEditorView = null),
							(this.innerViewContainer.style.display = 'none')),
							(this.wrapper.style.display = 'block');
					}),
					(Pl.prototype.saveAndFinishEditing = function () {
						var e = this.editorView.state.selection.to,
							t = this.editorView.state;
						this.editorView.dispatch(t.tr.setSelection(b(t.tr, e))),
							this.editorView.focus(),
							this.renderCustomBlock(),
							this.closeEditor();
					}),
					(Pl.prototype.cancelEditing = function () {
						var e = (0, Te.undoDepth)(this.innerEditorView.state);
						for (this.canceled = !0; e--; )
							(0, Te.undo)(this.innerEditorView.state, this.innerEditorView.dispatch),
								(0, Te.undo)(this.editorView.state, this.editorView.dispatch);
						this.canceled = !1;
						var t = this.editorView.state.selection.to,
							n = this.editorView.state;
						this.editorView.dispatch(n.tr.setSelection(m.TextSelection.create(n.doc, t))),
							this.editorView.focus(),
							this.closeEditor();
					}),
					(Pl.prototype.dispatchInner = function (e) {
						var e = this.innerEditorView.state.applyTransaction(e),
							t = e.state,
							n = e.transactions;
						if ((this.innerEditorView.updateState(t), !this.canceled && At()(this.getPos))) {
							for (
								var r = this.editorView.state.tr, o = we.StepMap.offset(this.getPos() + 1), i = 0;
								i < n.length;
								i += 1
							)
								for (var a = n[i].steps, s = 0; s < a.length; s += 1) r.step(a[s].map(o));
							r.docChanged && this.editorView.dispatch(r);
						}
					}),
					(Pl.prototype.update = function (e) {
						return (
							!!e.sameMarkup(this.node) &&
							((this.node = e), this.innerEditorView || this.renderCustomBlock(), !0)
						);
					}),
					(Pl.prototype.stopEvent = function (e) {
						return (
							!!this.innerEditorView && !!e.target && this.innerEditorView.dom.contains(e.target)
						);
					}),
					(Pl.prototype.ignoreMutation = function () {
						return !0;
					}),
					(Pl.prototype.destroy = function () {
						this.dom.removeEventListener('dblclick', this.openEditor), this.closeEditor();
					});
				var Rl = Pl;
				function Pl(e, t, n, r) {
					var o = this;
					(this.openEditor = function () {
						if (o.innerEditorView) throw new Error('The editor is already opened.');
						(o.dom.draggable = !1),
							(o.wrapper.style.display = 'none'),
							(o.innerViewContainer.style.display = 'block'),
							(o.innerEditorView = new be.EditorView(o.innerViewContainer, {
								state: m.EditorState.create({
									doc: o.node,
									plugins: [
										(0, xe.keymap)({
											'Mod-z': function () {
												return (0, Te.undo)(o.innerEditorView.state, o.innerEditorView.dispatch);
											},
											'Shift-Mod-z': function () {
												return (0, Te.redo)(o.innerEditorView.state, o.innerEditorView.dispatch);
											},
											Tab: function (e, t) {
												return t(e.tr.insertText('\t')), !0;
											},
											Enter: s.newlineInCode,
											Escape: function () {
												return o.cancelEditing(), !0;
											},
											'Ctrl-Enter': function () {
												return o.saveAndFinishEditing(), !0;
											}
										}),
										(0, Te.history)()
									]
								}),
								dispatchTransaction: function (e) {
									return o.dispatchInner(e);
								},
								handleDOMEvents: {
									mousedown: function () {
										return o.editorView.hasFocus() && o.innerEditorView.focus(), !0;
									},
									blur: function () {
										return o.saveAndFinishEditing(), !0;
									}
								}
							})),
							o.innerEditorView.focus();
					}),
						(this.node = e),
						(this.editorView = t),
						(this.getPos = n),
						(this.toDOMAdaptor = r),
						(this.innerEditorView = null),
						(this.canceled = !1),
						(this.dom = document.createElement('div')),
						(this.dom.className = d('custom-block')),
						(this.wrapper = document.createElement('div')),
						(this.wrapper.className = d('custom-block-view')),
						this.createInnerViewContainer(),
						this.renderCustomBlock(),
						this.dom.appendChild(this.innerViewContainer),
						this.dom.appendChild(this.wrapper);
				}
				var Bl = 'image-link',
					Hl =
						((Fl.prototype.createElement = function () {
							var e,
								t = this.createImageElement(this.node);
							return this.imageLink
								? (((e = document.createElement('span')).className = Bl), e.appendChild(t), e)
								: t;
						}),
						(Fl.prototype.createImageElement = function (e) {
							var t = document.createElement('img'),
								n = e.attrs,
								r = n.imageUrl,
								n = n.altText,
								e = v(e.attrs);
							return (t.src = r), n && (t.alt = n), ht(e, t), t;
						}),
						(Fl.prototype.bindEvent = function () {
							this.imageLink && this.dom.addEventListener('mousedown', this.handleMousedown);
						}),
						(Fl.prototype.stopEvent = function () {
							return !0;
						}),
						(Fl.prototype.destroy = function () {
							this.imageLink && this.dom.removeEventListener('mousedown', this.handleMousedown);
						}),
						Fl);
				function Fl(e, t, n, r) {
					var o = this;
					(this.handleMousedown = function (e) {
						e.preventDefault();
						var t = e.target,
							n = e.offsetX,
							r = e.offsetY;
						o.imageLink &&
							At()(o.getPos) &&
							Ke()(t, Bl) &&
							((t = getComputedStyle(t, ':before')), e.stopPropagation(), it(t, n, r)) &&
							((e = o.view.state.tr),
							(t = o.getPos()),
							e.setSelection(b(e, t, t + 1)),
							o.view.dispatch(e),
							o.eventEmitter.emit('openPopup', 'link', o.imageLink.attrs));
					}),
						(this.node = e),
						(this.view = t),
						(this.getPos = n),
						(this.eventEmitter = r),
						(this.imageLink =
							null !=
							(t = e.marks.filter(function (e) {
								return 'link' === e.type.name;
							})[0])
								? t
								: null),
						(this.dom = this.createElement()),
						this.bindEvent();
				}
				(jl.prototype.createElement = function () {
					var e = this.node.attrs.language,
						t = document.createElement('div'),
						e =
							(t.setAttribute('data-language', e || 'text'),
							(t.className = 'toastui-editor-ww-code-block'),
							this.createCodeBlockElement()),
						n = e.firstChild;
					t.appendChild(e), (this.dom = t), (this.contentDOM = n);
				}),
					(jl.prototype.createCodeBlockElement = function () {
						var e = document.createElement('pre'),
							t = document.createElement('code'),
							n = this.node.attrs.language,
							r = v(this.node.attrs);
						return n && t.setAttribute('data-language', n), ht(r, e), e.appendChild(t), e;
					}),
					(jl.prototype.createLanguageEditor = function (e) {
						var t = this,
							n = e.top,
							e = e.right,
							r = document.createElement('span'),
							o =
								((r.className = 'toastui-editor-ww-code-block-language'),
								document.createElement('input')),
							i =
								((o.type = 'text'),
								(o.value = this.node.attrs.language),
								r.appendChild(o),
								this.view.dom.parentElement.appendChild(r),
								r.clientWidth);
						H()(r, { top: n + 10 + 'px', left: e - i - 10 + 'px', width: i + 'px' }),
							(this.input = o),
							this.input.addEventListener('blur', function () {
								return t.changeLanguage();
							}),
							this.input.addEventListener('keydown', this.handleKeydown),
							this.clearTimer(),
							(this.timer = setTimeout(function () {
								t.input.focus();
							}));
					}),
					(jl.prototype.bindDOMEvent = function () {
						this.dom && this.dom.addEventListener('click', this.handleMousedown);
					}),
					(jl.prototype.bindEvent = function () {
						var e = this;
						this.eventEmitter.listen('scroll', function () {
							e.input && e.reset();
						});
					}),
					(jl.prototype.changeLanguage = function () {
						var e, t, n;
						this.input &&
							At()(this.getPos) &&
							((e = this.input.value),
							this.reset(),
							(t = this.getPos()),
							(n = this.view.state.tr).setNodeMarkup(t, null, { language: e }),
							this.view.dispatch(n));
					}),
					(jl.prototype.reset = function () {
						var e;
						null != (e = this.input) &&
							e.parentElement &&
							((e = this.input.parentElement), (this.input = null), lt(e));
					}),
					(jl.prototype.clearTimer = function () {
						this.timer && (clearTimeout(this.timer), (this.timer = null));
					}),
					(jl.prototype.stopEvent = function () {
						return !0;
					}),
					(jl.prototype.update = function (e) {
						return !!e.sameMarkup(this.node) && ((this.node = e), !0);
					}),
					(jl.prototype.destroy = function () {
						this.reset(),
							this.clearTimer(),
							this.dom && this.dom.removeEventListener('click', this.handleMousedown);
					});
				var ql = jl;
				function jl(e, t, n, r) {
					var o = this;
					(this.contentDOM = null),
						(this.input = null),
						(this.timer = null),
						(this.handleMousedown = function (e) {
							var t,
								e = e.target;
							'none' !== getComputedStyle(e, ':after').backgroundImage &&
								At()(o.getPos) &&
								((t = (e = o.view.coordsAtPos(o.getPos())).top),
								(e = e.right),
								o.createLanguageEditor({ top: t, right: e }));
						}),
						(this.handleKeydown = function (e) {
							'Enter' === e.key && o.input && (e.preventDefault(), o.changeLanguage());
						}),
						(this.node = e),
						(this.view = t),
						(this.getPos = n),
						(this.eventEmitter = r),
						this.createElement(),
						this.bindDOMEvent(),
						this.bindEvent();
				}
				var _l = /MsoListParagraph/,
					zl = /style=(.|\n)*mso-/,
					Ul = /mso-list:(.*)/,
					Vl = /O:P/,
					$l = /^(n|u|l)/,
					Wl = 'p.MsoListParagraph';
				function Gl(e) {
					for (var t = [], n = document.createTreeWalker(e, 1, null, !1); n.nextNode(); ) {
						var r,
							o,
							i,
							a = n.currentNode;
						st(a) &&
							((i = a.outerHTML),
							(r = a.textContent),
							(o = zl.test(i)),
							(i = Ul.test(i)),
							o && !i && r
								? t.push([a, !0])
								: (Vl.test(a.nodeName) || (o && !r) || i) && t.push([a, !1]));
					}
					return (
						t.forEach(function (e) {
							var t = e[0];
							if (e[1]) {
								for (var n = t, r = []; n.firstChild; )
									r.push(n.firstChild), n.parentNode && n.parentNode.insertBefore(n.firstChild, n);
								lt(n);
							} else lt(t);
						}),
						e.innerHTML.trim()
					);
				}
				function Zl(e) {
					var a = [];
					return (
						e.forEach(function (e, t) {
							var n,
								r = a[t - 1],
								t =
									((t = t),
									(n = (e = e).getAttribute('style'))
										? ((n = n.match(Ul)[1].trim().split(' ')[1]),
											{
												id: t,
												level: parseInt(n.replace('level', ''), 10),
												prev: null,
												parent: null,
												children: [],
												unordered: $l.test(e.textContent || ''),
												contents: Gl(e)
											})
										: null);
							if (t) {
								if (r) {
									var o = t,
										i = r;
									if (i.level < o.level) i.children.push(o), (o.parent = i);
									else {
										for (; i && i.level !== o.level; ) i = i.parent;
										i &&
											((o.prev = i), (o.parent = i.parent), o.parent) &&
											o.parent.children.push(o);
									}
								}
								a.push(t);
							}
						}),
						a
					);
				}
				function Xl(e) {
					return (function r(e) {
						var t = e[0].unordered ? 'ul' : 'ol',
							o = document.createElement(t);
						return (
							e.forEach(function (e) {
								var t = e.children,
									e = e.contents,
									n = document.createElement('li');
								(n.innerHTML = e), o.appendChild(n), t.length && o.appendChild(r(t));
							}),
							o
						);
					})(
						Zl(e).filter(function (e) {
							return !e.parent;
						})
					);
				}
				function Kl(e) {
					var i = document.createElement('div'),
						a = ((i.innerHTML = e), []),
						t = ((e = i), (t = Wl), (e = ke()(e.querySelectorAll(t))).length ? e : []);
					return (
						t.forEach(function (e) {
							var t,
								n,
								r,
								o = (function (e) {
									for (; e && !st(e); ) e = e.nextSibling;
									return !e || !_l.test(e.className);
								})(e.nextSibling);
							a.push(e),
								o &&
									((o = Xl(a)),
									(r = e.nextSibling)
										? ((n = o), (r = r).parentNode && r.parentNode.insertBefore(n, r))
										: ((t = i),
											(n = o),
											(n = Xe()(n) ? ke()(n) : [n]).forEach(function (e) {
												t.appendChild(e);
											})),
									(a = [])),
								lt(e);
						}),
						(t.length ? '<p></p>' : '') + i.innerHTML
					);
				}
				var Ql = '\x3c!--StartFragment--\x3e',
					Yl = '\x3c!--EndFragment--\x3e';
				function Jl(e) {
					var t, n, r;
					return (
						(n = (t = e).indexOf(Ql)),
						(r = t.lastIndexOf(Yl)),
						(e = (t = -1 < n && -1 < r ? t.slice(n + Ql.length, r) : t).replace(/<br[^>]*>/g, ot)),
						(n = e),
						/<\/td>((?!<\/tr>)[\s\S])*$/i.test(n) && (n = '<tr>' + n + '</tr>'),
						(e = n = /<\/tr>((?!<\/table>)[\s\S])*$/i.test(n) ? '<table>' + n + '</table>' : n),
						(r = e),
						(e = zl.test(r) ? Kl(e) : e)
					);
				}
				function ec(e, t, n) {
					for (var r, o = [], i = e.childCount, a = 0; a < i; a += 1)
						e.child(a).attrs.extended ||
							((r = a < i ? n.create(e.child(a).attrs, e.child(a).content) : n.createAndFill()),
							o.push(r));
					return o;
				}
				function tc(e, t, n) {
					var n = n.nodes,
						r = n.tableRow,
						e = ec(e, 0, n.tableHeadCell);
					return r.create(null, e);
				}
				function nc(e, t, n) {
					var n = n.nodes,
						r = n.tableRow,
						e = ec(e, 0, n.tableBodyCell);
					return r.create(null, e);
				}
				function rc(e) {
					var t = [],
						n = [];
					return (
						'tableHead' === e.firstChild.type.name &&
							e.firstChild.forEach(function (e) {
								return t.push(e);
							}),
						'tableBody' === e.lastChild.type.name &&
							e.lastChild.forEach(function (e) {
								return n.push(e);
							}),
						R(R([], t), n)
					);
				}
				function oc(e, t, n) {
					var r = e.map(function (e) {
						return nc(e, 0, n);
					});
					return (
						e.length ||
							((e = (function (e, t) {
								for (
									var n = (t = t.nodes).tableRow, r = t.tableBodyCell, o = [], i = 0;
									i < e;
									i += 1
								) {
									var a = r.createAndFill();
									o.push(a);
								}
								return n.create({ dummyRowForPasting: !0 }, o);
							})(t, n)),
							r.push(e)),
						n.nodes.tableBody.create(null, r)
					);
				}
				function ic(e, t, n, r) {
					var o = e.reduce(function (e, t) {
						return e.childCount > t.childCount ? e : t;
					}).childCount;
					return n && r
						? t.nodes.table.create(null, [oc(e, o, t)])
						: ((n = e[0]),
							(r = e.slice(1)),
							(n = [((e = tc((e = n), 0, (n = t))), n.nodes.tableHead.create(null, e))]),
							r.length && n.push(oc(r, o, t)),
							t.nodes.table.create(null, n));
				}
				var ac = 4,
					sc = 2;
				function lc(e) {
					return e * ac;
				}
				function cc(e, t, n) {
					for (var r = t.startRowIdx, t = t.startColIdx, o = n.length, i = 0, a = 0; a < o; a += 1)
						!(function (e) {
							var t = n[e].childCount;
							n[e].forEach(function (e) {
								e = e.attrs.colspan;
								1 < e && (t += e - 1);
							}),
								(i = Math.max(i, t));
						})(a);
					var s = r + o - 1,
						l = t + i - 1;
					return {
						startRowIdx: r,
						startColIdx: t,
						endRowIdx: s,
						endColIdx: l,
						addedRowCount: Math.max(1 + s - e.totalRowCount, 0),
						addedColumnCount: Math.max(1 + l - e.totalColumnCount, 0)
					};
				}
				function uc(e, t) {
					var a,
						s,
						l,
						c,
						n,
						r,
						o = e.state,
						i = o.selection,
						u = o.schema,
						o = o.tr,
						i = gl(i),
						p = i.anchor,
						i = i.head;
					if (p && i) {
						var t = vl(t);
						if (!t) return !1;
						var d = Q.create(p),
							p = d.getRectOffsets(p, i),
							f =
								((i = p),
								(n = u),
								(r = []),
								(t = rc((t = t)))[0].childCount,
								(f = t.length),
								(i = 0 === i.startRowIdx),
								(t = t.slice(0, f)),
								i && (f = t.shift()) && ((i = tc(f, 0, n).content), r.push(i)),
								t.forEach(function (e) {
									e.attrs.dummyRowForPasting || ((e = nc(e, 0, n).content), r.push(e));
								}),
								r),
							i = cc(d, p, f),
							t = [];
						if (
							((p = i),
							(x = yl((x = d).getSpannedOffsets(p))),
							(h = x.rowCount),
							(x = x.columnCount),
							(p = yl(p)),
							(g = p.rowCount),
							(p = p.columnCount),
							h === g && x === p)
						) {
							for (
								var h = i,
									m = t,
									g = h.startRowIdx,
									v = h.startColIdx,
									y = h.endRowIdx,
									B = h.endColIdx,
									H = h.addedRowCount,
									F = h.addedColumnCount,
									b = g;
								b <= y - H;
								b += 1
							)
								m.push({ rowIdx: b, startColIdx: v, endColIdx: B - F });
							if (i.addedColumnCount)
								for (
									var w = o,
										q = u,
										k = d,
										x = i,
										j = t,
										_ = x.startRowIdx,
										z = x.startColIdx,
										U = x.endRowIdx,
										C = x.endColIdx,
										V = x.addedRowCount,
										T = x.addedColumnCount,
										$ = k.totalRowCount,
										E = 0,
										L = 0;
									L < $;
									L += 1
								) {
									var M = k.getCellInfo(L, C - T),
										N = M.offset,
										M = M.nodeSize,
										N = w.mapping.map(N + M),
										M = fl(T, L, q);
									w.insert(N, M),
										_ <= L &&
											L <= U - V &&
											((M = k.getCellInfo(L, C - T)),
											(M = w.mapping.map(M.offset)),
											(j[E] = {
												rowIdx: L,
												startColIdx: z,
												endColIdx: C,
												dummyOffsets: [M, N + T * ac]
											}),
											(E += 1));
								}
							if (i.addedRowCount) {
								var p = o,
									h = u,
									A = d,
									W = t,
									D = (g = i).addedRowCount,
									S = g.addedColumnCount,
									O = g.startColIdx,
									I = g.endColIdx,
									g = p.mapping.maps.length,
									x = A.tableEndOffset - 2,
									h = dl(D, A.totalColumnCount + S, h),
									R = x;
								p.insert(p.mapping.slice(g).map(R), h);
								for (var P = 0; P < D; P += 1) {
									var G = R + lc(I + 1) + 1,
										Z = R + lc(A.totalColumnCount + S) + sc;
									W.push({
										rowIdx: P + A.totalRowCount,
										startColIdx: O,
										endColIdx: I,
										dummyOffsets: [R + O * ac + 1, G]
									}),
										(R = Z);
								}
							}
							(s = f),
								(l = d),
								(c = (a = o).mapping.maps.length),
								t.forEach(function (e, t) {
									var n = e.rowIdx,
										r = e.startColIdx,
										o = e.endColIdx,
										e = e.dummyOffsets,
										i = a.mapping.slice(c),
										t = new X.Slice(s[t], 0, 0),
										r = e ? e[0] : l.getCellStartOffset(n, r),
										e = e ? e[1] : l.getCellEndOffset(n, o);
									a.replace(i.map(r), i.map(e), t);
								}),
								e.dispatch(o),
								(u = e),
								(i = t),
								(x = d.getCellInfo(0, 0).offset),
								(p = u.state),
								(g = p.tr),
								(p = p.doc),
								(x = Q.create(p.resolve(x))),
								(h = i[0]),
								(f = h.rowIdx),
								(h = h.startColIdx),
								(i = K(i)),
								(o = i.rowIdx),
								(i = i.endColIdx),
								(f = x.getCellInfo(f, h).offset),
								(h = x.getCellInfo(o, i).offset),
								u.dispatch(g.setSelection(new pl(p.resolve(f), p.resolve(h))));
						}
						return !0;
					}
					return !1;
				}
				r(fc, (pc = e)),
					Object.defineProperty(fc.prototype, 'name', {
						get: function () {
							return 'doc';
						},
						enumerable: !1,
						configurable: !0
					}),
					Object.defineProperty(fc.prototype, 'schema', {
						get: function () {
							return { content: 'block+' };
						},
						enumerable: !1,
						configurable: !0
					});
				var pc,
					dc = fc;
				function fc() {
					return (null !== pc && pc.apply(this, arguments)) || this;
				}
				r(gc, (hc = e)),
					Object.defineProperty(gc.prototype, 'name', {
						get: function () {
							return 'paragraph';
						},
						enumerable: !1,
						configurable: !0
					}),
					Object.defineProperty(gc.prototype, 'schema', {
						get: function () {
							return {
								content: 'inline*',
								group: 'block',
								attrs: x({}, h()),
								parseDOM: [{ tag: 'p' }],
								toDOM: function (e) {
									return ['p', v(e.attrs), 0];
								}
							};
						},
						enumerable: !1,
						configurable: !0
					});
				var hc,
					mc = gc;
				function gc() {
					return (null !== hc && hc.apply(this, arguments)) || this;
				}
				var vc,
					yc = /\s{1,4}$/,
					bc =
						(r(wc, (vc = e)),
						Object.defineProperty(wc.prototype, 'name', {
							get: function () {
								return 'text';
							},
							enumerable: !1,
							configurable: !0
						}),
						Object.defineProperty(wc.prototype, 'schema', {
							get: function () {
								return { group: 'inline' };
							},
							enumerable: !1,
							configurable: !0
						}),
						(wc.prototype.addSpaces = function () {
							return function (e, t) {
								var n = e.selection,
									e = e.tr,
									r = n.$from,
									n = n.$to;
								return !(
									!r.blockRange(n) ||
									Ws(r) ||
									Gs(r) ||
									(t(e.insertText('    ', r.pos, n.pos)), 0)
								);
							};
						}),
						(wc.prototype.removeSpaces = function () {
							return function (e, t) {
								var n = e.selection,
									e = e.tr,
									r = n.$from,
									o = n.$to,
									n = n.from;
								if (r.blockRange(o) && !Ws(r) && !Gs(r)) {
									var o = r.nodeBefore;
									if (o && o.isText)
										return (
											(o = (r = o.text).replace(yc, '')),
											(r = r.length - o.length),
											t(e.delete(n - r, n)),
											!0
										);
								}
								return !1;
							};
						}),
						(wc.prototype.keymaps = function () {
							return { Tab: this.addSpaces(), 'Shift-Tab': this.removeSpaces() };
						}),
						wc);
				function wc() {
					return (null !== vc && vc.apply(this, arguments)) || this;
				}
				r(Cc, (kc = e)),
					Object.defineProperty(Cc.prototype, 'name', {
						get: function () {
							return 'heading';
						},
						enumerable: !1,
						configurable: !0
					}),
					Object.defineProperty(Cc.prototype, 'levels', {
						get: function () {
							return [1, 2, 3, 4, 5, 6];
						},
						enumerable: !1,
						configurable: !0
					}),
					Object.defineProperty(Cc.prototype, 'schema', {
						get: function () {
							var e = this.levels.map(function (t) {
								return {
									tag: 'h' + t,
									getAttrs: function (e) {
										e = e.getAttribute('data-raw-html');
										return x({ level: t }, e && { rawHTML: e });
									}
								};
							});
							return {
								attrs: x(
									{
										level: { default: 1 },
										headingType: { default: 'atx' },
										rawHTML: { default: null }
									},
									h()
								),
								content: 'inline*',
								group: 'block',
								defining: !0,
								parseDOM: e,
								toDOM: function (e) {
									e = e.attrs;
									return ['h' + e.level, v(e), 0];
								}
							};
						},
						enumerable: !1,
						configurable: !0
					}),
					(Cc.prototype.commands = function () {
						return function (r) {
							return function (e, t) {
								var n = e.schema.nodes[r.level ? 'heading' : 'paragraph'];
								return (0, s.setBlockType)(n, r)(e, t);
							};
						};
					});
				var kc,
					xc = Cc;
				function Cc() {
					return (null !== kc && kc.apply(this, arguments)) || this;
				}
				r(Lc, (Tc = e)),
					Object.defineProperty(Lc.prototype, 'name', {
						get: function () {
							return 'codeBlock';
						},
						enumerable: !1,
						configurable: !0
					}),
					Object.defineProperty(Lc.prototype, 'schema', {
						get: function () {
							return {
								content: 'text*',
								group: 'block',
								attrs: x({ language: { default: null }, rawHTML: { default: null } }, h()),
								code: !0,
								defining: !0,
								marks: '',
								parseDOM: [
									{
										tag: 'pre',
										preserveWhitespace: 'full',
										getAttrs: function (e) {
											var t = e.getAttribute('data-raw-html'),
												e = e.firstElementChild;
											return x(
												{
													language: (null == e ? void 0 : e.getAttribute('data-language')) || null
												},
												t && { rawHTML: t }
											);
										}
									}
								],
								toDOM: function (e) {
									e = e.attrs;
									return [
										e.rawHTML || 'pre',
										['code', x({ 'data-language': e.language }, v(e)), 0]
									];
								}
							};
						},
						enumerable: !1,
						configurable: !0
					}),
					(Lc.prototype.commands = function () {
						return function () {
							return function (e, t) {
								return (0, s.setBlockType)(e.schema.nodes.codeBlock)(e, t);
							};
						};
					}),
					(Lc.prototype.moveCursor = function (l) {
						var c = this;
						return function (e, t) {
							var n,
								r = e.tr,
								o = e.doc,
								i = e.schema,
								e = e.selection.$from;
							if (c.context.view.endOfTextblock(l) && 'codeBlock' === e.node().type.name) {
								var a = e.parent.textContent.split('\n'),
									s = 'up' === l ? e.start() : e.end(),
									a = 'up' === l ? [s, a[0].length + s] : [s - K(a).length, s],
									s = o.resolve('up' === l ? e.before() : e.after()),
									o = 'up' === l ? s.nodeBefore : s.nodeAfter;
								if (((e = e.pos), (n = a[1]), a[0] <= e && e <= n && !o)) {
									a = Le(r, s, i);
									if (a) return t(a), !0;
								}
							}
							return !1;
						};
					}),
					(Lc.prototype.keymaps = function () {
						var e = this.commands()();
						return {
							'Shift-Mod-p': e,
							'Shift-Mod-P': e,
							ArrowUp: this.moveCursor('up'),
							ArrowDown: this.moveCursor('down')
						};
					});
				var Tc,
					Ec = Lc;
				function Lc() {
					return (null !== Tc && Tc.apply(this, arguments)) || this;
				}
				r(Ac, (Mc = e)),
					Object.defineProperty(Ac.prototype, 'name', {
						get: function () {
							return 'bulletList';
						},
						enumerable: !1,
						configurable: !0
					}),
					Object.defineProperty(Ac.prototype, 'schema', {
						get: function () {
							return {
								content: 'listItem+',
								group: 'block',
								attrs: x({ rawHTML: { default: null } }, h()),
								parseDOM: [Xs('ul')],
								toDOM: function (e) {
									return ['ul', v(e.attrs), 0];
								}
							};
						},
						enumerable: !1,
						configurable: !0
					}),
					(Ac.prototype.changeList = function () {
						return function (e, t) {
							return tl(e.schema.nodes.bulletList)(e, t);
						};
					}),
					(Ac.prototype.commands = function () {
						return { bulletList: this.changeList, taskList: nl };
					}),
					(Ac.prototype.keymaps = function () {
						var e = this.changeList(),
							t = il(),
							n = t.indent,
							t = t.outdent;
						return { 'Mod-u': e, 'Mod-U': e, Tab: n(), 'Shift-Tab': t() };
					});
				var Mc,
					Nc = Ac;
				function Ac() {
					return (null !== Mc && Mc.apply(this, arguments)) || this;
				}
				r(Oc, (Dc = e)),
					Object.defineProperty(Oc.prototype, 'name', {
						get: function () {
							return 'orderedList';
						},
						enumerable: !1,
						configurable: !0
					}),
					Object.defineProperty(Oc.prototype, 'schema', {
						get: function () {
							return {
								content: 'listItem+',
								group: 'block',
								attrs: x({ order: { default: 1 }, rawHTML: { default: null } }, h()),
								parseDOM: [
									{
										tag: 'ol',
										getAttrs: function (e) {
											var t = e.getAttribute('start'),
												n = e.getAttribute('data-raw-html');
											return x(
												{ order: e.hasAttribute('start') ? Number(t) : 1 },
												n && { rawHTML: n }
											);
										}
									}
								],
								toDOM: function (e) {
									e = e.attrs;
									return [e.rawHTML || 'ol', x({ start: 1 === e.order ? null : e.order }, v(e)), 0];
								}
							};
						},
						enumerable: !1,
						configurable: !0
					}),
					(Oc.prototype.commands = function () {
						return function () {
							return function (e, t) {
								return tl(e.schema.nodes.orderedList)(e, t);
							};
						};
					}),
					(Oc.prototype.keymaps = function () {
						var e = this.commands()(),
							t = il(),
							n = t.indent,
							t = t.outdent;
						return { 'Mod-o': e, 'Mod-O': e, Tab: n(), 'Shift-Tab': t() };
					});
				var Dc,
					Sc = Oc;
				function Oc() {
					return (null !== Dc && Dc.apply(this, arguments)) || this;
				}
				r(Pc, (Ic = e)),
					Object.defineProperty(Pc.prototype, 'name', {
						get: function () {
							return 'listItem';
						},
						enumerable: !1,
						configurable: !0
					}),
					Object.defineProperty(Pc.prototype, 'schema', {
						get: function () {
							return {
								content: 'paragraph block*',
								selectable: !1,
								attrs: {
									task: { default: !1 },
									checked: { default: !1 },
									rawHTML: { default: null }
								},
								defining: !0,
								parseDOM: [
									{
										tag: 'li',
										getAttrs: function (e) {
											var t = e.getAttribute('data-raw-html');
											return x(
												{
													task: e.hasAttribute('data-task'),
													checked: e.hasAttribute('data-task-checked')
												},
												t && { rawHTML: t }
											);
										}
									}
								],
								toDOM: function (e) {
									var t,
										e = e.attrs,
										n = e.task,
										r = e.checked;
									return n
										? ((t = ['task-list-item']),
											r && t.push('checked'),
											[
												e.rawHTML || 'li',
												x({ class: t.join(' '), 'data-task': n }, r && { 'data-task-checked': r }),
												0
											])
										: [e.rawHTML || 'li', 0];
								}
							};
						},
						enumerable: !1,
						configurable: !0
					}),
					(Pc.prototype.liftToPrevListItem = function () {
						return function (e, t) {
							var n = e.selection,
								r = e.tr,
								e = e.schema,
								o = n.$from,
								n = n.empty,
								e = e.nodes.listItem,
								i = o.parent,
								a = o.node(-1);
							if (n && !i.childCount && a.type === e) {
								if (1 <= o.index(-2)) return r.delete(o.start(-1) - 1, o.end(-1)), t(r), !0;
								if (o.node(-3).type === e) return r.delete(o.start(-2) - 1, o.end(-1)), t(r), !0;
							}
							return !1;
						};
					}),
					(Pc.prototype.keymaps = function () {
						return {
							Backspace: this.liftToPrevListItem(),
							Enter: function (e, t) {
								o = e.schema.nodes.listItem;
								var n = (e = e).tr,
									r = (e = e.selection).$from,
									e = e.$to;
								if (r.depth < 2 || !r.sameParent(e)) return !1;
								var o,
									i = r.node(-1);
								if (i.type !== o) return !1;
								if (0 !== r.parent.content.size || r.node(-1).childCount !== r.indexAfter(-1))
									return (
										(i = (a = e.pos === r.end() ? i.contentMatchAt(0).defaultType : null) && [
											null,
											{ type: a }
										]),
										n.delete(r.pos, e.pos),
										!!(0, we.canSplit)(n.doc, r.pos, 2, i) && (n.split(r.pos, 2, i), t(n), !0)
									);
								if (
									2 === r.depth ||
									r.node(-3).type !== o ||
									r.index(-2) !== r.node(-2).childCount - 1
								)
									return !1;
								for (
									var a = 0 < r.index(-1), s = X.Fragment.empty, l = r.depth - (a ? 1 : 2);
									l >= r.depth - 3;
									--l
								)
									s = X.Fragment.from(r.node(l).copy(s));
								return (
									(s = s.append(X.Fragment.from(o.createAndFill()))),
									n.replace(
										a ? r.before() : r.before(-1),
										r.after(-3),
										new X.Slice(s, a ? 3 : 2, 2)
									),
									n.setSelection(m.Selection.near(n.doc.resolve(r.pos + (a ? 3 : 2)))),
									t(n),
									!0
								);
							}
						};
					});
				var Ic,
					Rc = Pc;
				function Pc() {
					return (null !== Ic && Ic.apply(this, arguments)) || this;
				}
				r(Fc, (Bc = e)),
					Object.defineProperty(Fc.prototype, 'name', {
						get: function () {
							return 'blockQuote';
						},
						enumerable: !1,
						configurable: !0
					}),
					Object.defineProperty(Fc.prototype, 'schema', {
						get: function () {
							return {
								attrs: x({ rawHTML: { default: null } }, h()),
								content: 'block+',
								group: 'block',
								parseDOM: [Xs('blockquote')],
								toDOM: function (e) {
									return ['blockquote', v(e.attrs), 0];
								}
							};
						},
						enumerable: !1,
						configurable: !0
					}),
					(Fc.prototype.commands = function () {
						return function () {
							return function (e, t) {
								return (0, s.wrapIn)(e.schema.nodes.blockQuote)(e, t);
							};
						};
					}),
					(Fc.prototype.keymaps = function () {
						var e = this.commands()();
						return { 'Alt-q': e, 'Alt-Q': e };
					});
				var Bc,
					Hc = Fc;
				function Fc() {
					return (null !== Bc && Bc.apply(this, arguments)) || this;
				}
				var M,
					qc = {
						left: function (e, t) {
							var n = e[0],
								e = e[1],
								r = t.totalColumnCount,
								o = 0 === e;
							if (n === 0 && o) return null;
							--e, o && (--n, (e = r - 1));
							(o = t.getCellInfo(n, e)), (r = o.offset), (t = o.nodeSize);
							return r + t - 2;
						},
						right: function (e, t) {
							var n = e[0],
								e = e[1],
								r = t.totalRowCount,
								o = t.totalColumnCount,
								i = e === o - 1;
							if (n === r - 1 && i) return null;
							(r = e + 1), (e = t.getColspanStartInfo(n, e));
							1 < (null == e ? void 0 : e.count) && (r += e.count - 1);
							(!i && r !== o) || ((n += 1), (r = 0));
							return t.getCellInfo(n, r).offset + 2;
						},
						up: function (e, t) {
							var n = e[0],
								e = e[1];
							if (0 < n)
								return (t = t.getCellInfo(n - 1, e)), (n = t.offset), (e = t.nodeSize), n + e - 2;
							return null;
						},
						down: function (e, t) {
							var n = e[0],
								e = e[1],
								r = t.totalRowCount;
							if (n < r - 1)
								return (
									(r = n + 1),
									1 < (null == (n = t.getRowspanStartInfo(n, e)) ? void 0 : n.count) &&
										(r += n.count - 1),
									t.getCellInfo(r, e).offset + 2
								);
							return null;
						}
					};
				function jc(e, t, n, r, o) {
					if (e === M.RIGHT || e === M.DOWN) {
						if (
							o &&
							!(function (e) {
								for (
									var t, n, r, o = e.depth;
									o && 'tableBodyCell' !== (t = e.node(o)).type.name;

								) {
									if ('listItem' === t.type.name)
										return (
											(n = e.node(o - 1).lastChild === t),
											(r = 'paragraph' !== (null == (r = t.lastChild) ? void 0 : r.type.name)),
											n ? !r : void 0
										);
									--o;
								}
							})(n)
						)
							return !1;
						e = n.after(t);
						if (r.resolve(e).nodeAfter) return !1;
					}
					return !0;
				}
				function _c(e, t, n, r) {
					var o = t[0],
						t = t[1],
						i = o + 3,
						a = i <= t,
						o = a ? o + 1 : t,
						t = (function (e, t, n, r, o) {
							var i = t[0],
								a = t[1],
								t = t[2];
							if (e === M.LEFT || e === M.UP) {
								if (
									o &&
									((e = r),
									(i = (o = [i, a])[0]),
									(o = o[1]),
									(e = r.resolve(n.before(i - 1))),
									o !== i || e.nodeBefore)
								)
									return !1;
								a = n.before(t);
								if (r.resolve(a).nodeBefore) return !1;
							}
							return !0;
						})(e, [t, i, o], n, r, a),
						i = jc(e, o, n, r, a);
					return t && i;
				}
				function zc(e, t, n) {
					var r = n[0],
						n = n[1],
						n = t.getRowspanStartInfo(r, n),
						o = e === M.UP && 0 === r,
						e =
							e === M.DOWN &&
							(1 < (null == n ? void 0 : n.count) ? r + n.count - 1 : r) === t.totalRowCount - 1;
					return o || e;
				}
				function Uc(e, t, n, r) {
					void 0 === r && (r = !1);
					t = e.doc.resolve(t.tableEndOffset);
					return r || !t.nodeAfter ? Le(e, t, n) : e.setSelection(m.Selection.near(t, 1));
				}
				function Vc(e, t, n, r) {
					n = (0, qc[e])(n, r);
					return n
						? ((r = e === M.RIGHT || e === M.DOWN ? 1 : -1),
							t.setSelection(m.Selection.near(t.doc.resolve(n), r)))
						: null;
				}
				((lo = M = M || {}).LEFT = 'left'),
					(lo.RIGHT = 'right'),
					(lo.UP = 'up'),
					(lo.DOWN = 'down');
				r(N, ($c = e)),
					Object.defineProperty(N.prototype, 'name', {
						get: function () {
							return 'table';
						},
						enumerable: !1,
						configurable: !0
					}),
					Object.defineProperty(N.prototype, 'schema', {
						get: function () {
							return {
								content: 'tableHead{1} tableBody{1}',
								group: 'block',
								attrs: x({ rawHTML: { default: null } }, h()),
								parseDOM: [Xs('table')],
								toDOM: function (e) {
									return ['table', v(e.attrs), 0];
								}
							};
						},
						enumerable: !1,
						configurable: !0
					}),
					(N.prototype.addTable = function () {
						return function (c) {
							return (
								void 0 === c && (c = { rowCount: 2, columnCount: 1, data: [] }),
								function (e, t) {
									var n = c.rowCount,
										r = c.columnCount,
										o = c.data,
										i = e.schema,
										a = e.selection,
										e = e.tr,
										s = a.from,
										l = a.to,
										a = a.$from;
									return (
										s === l &&
										!Gs(a) &&
										((l = (s = i.nodes).tableHead),
										(a = s.tableBody),
										(s = null == o ? void 0 : o.slice(0, r)),
										(o = null == o ? void 0 : o.slice(r, o.length)),
										(s = (function (e, t, n) {
											for (
												var r = t.nodes,
													o = r.tableRow,
													i = r.tableHeadCell,
													a = r.paragraph,
													s = [],
													l = 0;
												l < e;
												l += 1
											) {
												var c = n && n[l],
													c = a.create(null, c ? t.text(c) : []);
												s.push(i.create(null, c));
											}
											return [o.create(null, s)];
										})(r, i, s)),
										(n = dl(n - 1, r, i, o)),
										(r = i.nodes.table.create(null, [l.create(null, s), a.create(null, n)])),
										t(e.replaceSelectionWith(r)),
										!0)
									);
								}
							);
						};
					}),
					(N.prototype.removeTable = function () {
						return function () {
							return function (e, t) {
								var n,
									r = e.selection,
									e = e.tr,
									r = Q.create(r.$anchor);
								return (
									!!r &&
									((n = r.tableStartOffset),
									(r = r.tableEndOffset),
									(r = b(e.delete((n = n - 1), r), n)),
									t(e.setSelection(r)),
									!0)
								);
							};
						};
					}),
					(N.prototype.addColumn = function (p) {
						return function () {
							return function (e, t) {
								var n = e.selection,
									r = e.tr,
									o = e.schema,
									e = gl(n),
									n = e.anchor,
									e = e.head;
								if (n && e) {
									for (
										var i = Q.create(n),
											n = i.getRectOffsets(n, e),
											a = p === M.LEFT ? n.startColIdx : n.endColIdx + 1,
											s = yl(n).columnCount,
											l = i.totalRowCount,
											c = 0;
										c < l;
										c += 1
									) {
										var u = fl(s, c, o);
										r.insert(r.mapping.map(i.posAt(c, a)), u);
									}
									return t(r), !0;
								}
								return !1;
							};
						};
					}),
					(N.prototype.removeColumn = function () {
						return function () {
							return function (e, t) {
								var n = e.selection,
									r = e.tr,
									e = gl(n),
									n = e.anchor,
									e = e.head;
								if (n && e) {
									var o = Q.create(n),
										n = o.getRectOffsets(n, e),
										e = o.totalColumnCount,
										i = o.totalRowCount;
									if (yl(n).columnCount === e) return !1;
									for (
										var a = n.startColIdx, s = n.endColIdx, l = r.mapping.maps.length, c = 0;
										c < i;
										c += 1
									)
										for (var u = s; a <= u; --u) {
											var p = o.getCellInfo(c, u),
												d = p.offset,
												p = p.nodeSize,
												d = r.mapping.slice(l).map(d);
											r.delete(d, d + p);
										}
									return t(r), !0;
								}
								return !1;
							};
						};
					}),
					(N.prototype.addRow = function (g) {
						return function () {
							return function (e, t) {
								var n,
									r,
									o = e.selection,
									i = e.schema,
									e = e.tr,
									o = gl(o),
									a = o.anchor,
									o = o.head;
								if (a && o) {
									var s = Q.create(a),
										l = s.totalColumnCount,
										a = s.getRectOffsets(a, o),
										c = yl(a).rowCount,
										a =
											((o = s),
											(a = a),
											(n =
												(n = g) === M.UP
													? ((d = a.startRowIdx), (r = 0), -1)
													: ((d = a.endRowIdx),
														(r = o.totalColumnCount - 1),
														o.getCellInfo(d, r).nodeSize + 1)),
											{ targetRowIdx: d, insertColIdx: r, nodeSize: n }),
										u = a.targetRowIdx,
										o = a.nodeSize;
									if (!(0 === u)) {
										for (
											var p = [], d = e.mapping.map(s.posAt(u, a.insertColIdx)) + o, f = [], h = 0;
											h < l;
											h += 1
										)
											f = f.concat(fl(1, u, i));
										for (var m = 0; m < c; m += 1) p.push(i.nodes.tableRow.create(null, f));
										return t(e.insert(d, p)), !0;
									}
								}
								return !1;
							};
						};
					}),
					(N.prototype.removeRow = function () {
						return function () {
							return function (e, t) {
								var n,
									r,
									o,
									i = e.selection,
									a = e.tr,
									e = gl(i),
									i = e.anchor,
									e = e.head;
								if (i && e) {
									var s = Q.create(i),
										l = s.totalRowCount,
										c = s.totalColumnCount,
										i = s.getRectOffsets(i, e),
										e = yl(i).rowCount,
										u = i.startRowIdx,
										i = i.endRowIdx;
									if (e === l - 1 || 0 === u) return !1;
									for (var p = i; u <= p; --p) {
										(d = p),
											(r = c),
											(o = void 0),
											(o = (n = s).getCellInfo(d, 0).offset),
											(n = n.getCellInfo(d, r - 1));
										var d = { from: o, to: n.offset + n.nodeSize };
										a.delete(d.from - 1, d.to + 1);
									}
									return t(a), !0;
								}
								return !1;
							};
						};
					}),
					(N.prototype.alignColumn = function () {
						return function (h) {
							return (
								void 0 === h && (h = { align: 'center' }),
								function (e, t) {
									var n,
										r = h.align,
										o = e.selection,
										i = e.tr,
										e = gl(o),
										o = e.anchor,
										e = e.head;
									if (o && e) {
										for (
											var a = Q.create(o),
												s = a.totalRowCount,
												o = a.getRectOffsets(o, e),
												l = o.startColIdx,
												c = o.endColIdx,
												u = 0;
											u < s;
											u += 1
										)
											for (var p, d, f = l; f <= c; f += 1)
												a.extendedRowspan(u, f) ||
													a.extendedColspan(u, f) ||
													((p = a.getNodeAndPos(u, f)),
													(d = p.node),
													(p = p.pos),
													(n = { align: r }),
													(d = x(x({}, d.attrs), n)),
													i.setNodeMarkup(p, null, d));
										return t(i), !0;
									}
									return !1;
								}
							);
						};
					}),
					(N.prototype.moveToCell = function (a) {
						return function (e, t) {
							var n = e.selection,
								r = e.tr,
								e = e.schema,
								n = gl(n),
								o = n.anchor,
								n = n.head;
							if (o && n) {
								var n = Q.create(o),
									o = n.getCellIndex(o),
									i = void 0;
								if ((i = zc(a, n, o) ? Uc(r, n, e) : Vc(a, r, o, n))) return t(i), !0;
							}
							return !1;
						};
					}),
					(N.prototype.moveInCell = function (p) {
						var d = this;
						return function (e, t) {
							var n = e.selection,
								r = e.tr,
								o = e.doc,
								e = e.schema,
								i = n.$from;
							if (d.context.view.endOfTextblock(p)) {
								var a,
									s,
									l,
									c = $s(i, function (e) {
										e = e.type;
										return 'tableHeadCell' === e.name || 'tableBodyCell' === e.name;
									});
								if (c) {
									var u = $s(i, function (e) {
											return 'paragraph' === e.type.name;
										}),
										c = c.depth;
									if (u && _c(p, [c, u.depth], i, o)) {
										(u = gl(n).anchor), (o = Q.create(u)), (n = o.getCellIndex(u)), (u = void 0);
										if (
											(!(function (e, t, n) {
												var r,
													o,
													i = n[0],
													n = n[1];
												if (e !== M.UP && e !== M.DOWN)
													return (
														(r = t.tableStartOffset),
														(o = t.tableEndOffset),
														(i = (t = t.getCellInfo(i, n)).offset),
														(n = t.nodeSize),
														(e === M.LEFT ? r : o) === (e === M.LEFT ? i - 2 : i + n + 3)
													);
											})(p, o, n)
												? zc(p, o, n)
													? p === M.UP
														? ((s = o),
															(a = e),
															(u = (s = (l = r).doc.resolve(s.tableStartOffset - 1)).nodeBefore
																? l.setSelection(m.Selection.near(s, -1))
																: Le(l, s, a)))
														: p === M.DOWN && (u = Uc(r, o, e))
													: (u = Vc(p, r, n, o))
												: ((l = i),
													(l = (s = r).doc.resolve(i.before(c - 3))),
													(u = s.setSelection(new m.NodeSelection(l)))),
											u)
										)
											return t(u), !0;
									}
								}
							}
							return !1;
						};
					}),
					(N.prototype.deleteCells = function () {
						return function (e, t) {
							var n = e.schema,
								r = e.selection,
								o = e.tr,
								e = gl(r),
								i = e.anchor,
								e = e.head,
								r = r instanceof m.TextSelection;
							if (i && e && !r) {
								for (
									var a = Q.create(i),
										r = a.getRectOffsets(i, e),
										i = r.startRowIdx,
										s = r.startColIdx,
										l = r.endRowIdx,
										c = r.endColIdx,
										u = i;
									u <= l;
									u += 1
								)
									for (var p, d, f, h = s; h <= c; h += 1)
										a.extendedRowspan(u, h) ||
											a.extendedColspan(u, h) ||
											((p = (d = a.getNodeAndPos(u, h)).node),
											(d = d.pos),
											(f = fl(1, u, n, p.attrs)),
											o.replaceWith(o.mapping.map(d), o.mapping.map(d + p.nodeSize), f));
								return t(o), !0;
							}
							return !1;
						};
					}),
					(N.prototype.exitTable = function () {
						return function (e, t) {
							var n = e.selection,
								r = e.tr,
								e = e.schema,
								o = n.$from,
								i = $s(o, function (e) {
									e = e.type;
									return 'tableHeadCell' === e.name || 'tableBodyCell' === e.name;
								});
							if (
								i &&
								$s(o, function (e) {
									return 'paragraph' === e.type.name;
								})
							)
								return (i = gl(n).anchor), t(Uc(r, Q.create(i), e, !0)), !0;
							return !1;
						};
					}),
					(N.prototype.commands = function () {
						return {
							addTable: this.addTable(),
							removeTable: this.removeTable(),
							addColumnToLeft: this.addColumn(M.LEFT),
							addColumnToRight: this.addColumn(M.RIGHT),
							removeColumn: this.removeColumn(),
							addRowToUp: this.addRow(M.UP),
							addRowToDown: this.addRow(M.DOWN),
							removeRow: this.removeRow(),
							alignColumn: this.alignColumn()
						};
					}),
					(N.prototype.keymaps = function () {
						var e = this.deleteCells();
						return {
							Tab: this.moveToCell(M.RIGHT),
							'Shift-Tab': this.moveToCell(M.LEFT),
							ArrowUp: this.moveInCell(M.UP),
							ArrowDown: this.moveInCell(M.DOWN),
							ArrowLeft: this.moveInCell(M.LEFT),
							ArrowRight: this.moveInCell(M.RIGHT),
							Backspace: e,
							'Mod-Backspace': e,
							Delete: e,
							'Mod-Delete': e,
							'Mod-Enter': this.exitTable()
						};
					});
				var $c,
					Wc = N;
				function N() {
					return (null !== $c && $c.apply(this, arguments)) || this;
				}
				r(Xc, (Gc = e)),
					Object.defineProperty(Xc.prototype, 'name', {
						get: function () {
							return 'tableHead';
						},
						enumerable: !1,
						configurable: !0
					}),
					Object.defineProperty(Xc.prototype, 'schema', {
						get: function () {
							return {
								content: 'tableRow{1}',
								attrs: x({ rawHTML: { default: null } }, h()),
								parseDOM: [Xs('thead')],
								toDOM: function (e) {
									return ['thead', v(e.attrs), 0];
								}
							};
						},
						enumerable: !1,
						configurable: !0
					});
				var Gc,
					Zc = Xc;
				function Xc() {
					return (null !== Gc && Gc.apply(this, arguments)) || this;
				}
				r(Yc, (Kc = e)),
					Object.defineProperty(Yc.prototype, 'name', {
						get: function () {
							return 'tableBody';
						},
						enumerable: !1,
						configurable: !0
					}),
					Object.defineProperty(Yc.prototype, 'schema', {
						get: function () {
							return {
								content: 'tableRow+',
								attrs: x({ rawHTML: { default: null } }, h()),
								parseDOM: [
									{
										tag: 'tbody',
										getAttrs: function (e) {
											var t = e.querySelectorAll('tr')[0].children.length,
												e = e.getAttribute('data-raw-html');
											return !!t && x({}, e && { rawHTML: e });
										}
									}
								],
								toDOM: function (e) {
									return ['tbody', v(e.attrs), 0];
								}
							};
						},
						enumerable: !1,
						configurable: !0
					});
				var Kc,
					Qc = Yc;
				function Yc() {
					return (null !== Kc && Kc.apply(this, arguments)) || this;
				}
				r(tu, (Jc = e)),
					Object.defineProperty(tu.prototype, 'name', {
						get: function () {
							return 'tableRow';
						},
						enumerable: !1,
						configurable: !0
					}),
					Object.defineProperty(tu.prototype, 'schema', {
						get: function () {
							return {
								content: '(tableHeadCell | tableBodyCell)*',
								attrs: x({ rawHTML: { default: null } }, h()),
								parseDOM: [
									{
										tag: 'tr',
										getAttrs: function (e) {
											var t = e.children.length,
												e = e.getAttribute('data-raw-html');
											return !!t && x({}, e && { rawHTML: e });
										}
									}
								],
								toDOM: function (e) {
									return ['tr', v(e.attrs), 0];
								}
							};
						},
						enumerable: !1,
						configurable: !0
					});
				var Jc,
					eu = tu;
				function tu() {
					return (null !== Jc && Jc.apply(this, arguments)) || this;
				}
				r(ou, (nu = e)),
					Object.defineProperty(ou.prototype, 'name', {
						get: function () {
							return 'tableHeadCell';
						},
						enumerable: !1,
						configurable: !0
					}),
					Object.defineProperty(ou.prototype, 'schema', {
						get: function () {
							return {
								content: 'paragraph+',
								attrs: x(
									{
										align: { default: null },
										className: { default: null },
										rawHTML: { default: null },
										colspan: { default: null },
										extended: { default: null }
									},
									h()
								),
								isolating: !0,
								parseDOM: [Qs('th')],
								toDOM: function (e) {
									var e = e.attrs,
										t = Ks(e);
									return ['th', x(x({}, t), v(e)), 0];
								}
							};
						},
						enumerable: !1,
						configurable: !0
					});
				var nu,
					ru = ou;
				function ou() {
					return (null !== nu && nu.apply(this, arguments)) || this;
				}
				r(su, (iu = e)),
					Object.defineProperty(su.prototype, 'name', {
						get: function () {
							return 'tableBodyCell';
						},
						enumerable: !1,
						configurable: !0
					}),
					Object.defineProperty(su.prototype, 'schema', {
						get: function () {
							return {
								content: '(paragraph | bulletList | orderedList)+',
								attrs: {
									align: { default: null },
									className: { default: null },
									rawHTML: { default: null },
									colspan: { default: null },
									rowspan: { default: null },
									extended: { default: null }
								},
								isolating: !0,
								parseDOM: [Qs('td')],
								toDOM: function (e) {
									return ['td', Ks(e.attrs), 0];
								}
							};
						},
						enumerable: !1,
						configurable: !0
					});
				var iu,
					au = su;
				function su() {
					return (null !== iu && iu.apply(this, arguments)) || this;
				}
				r(uu, (lu = e)),
					Object.defineProperty(uu.prototype, 'name', {
						get: function () {
							return 'image';
						},
						enumerable: !1,
						configurable: !0
					}),
					Object.defineProperty(uu.prototype, 'schema', {
						get: function () {
							return {
								inline: !0,
								attrs: x(
									{
										imageUrl: { default: '' },
										altText: { default: null },
										rawHTML: { default: null }
									},
									h()
								),
								group: 'inline',
								selectable: !1,
								parseDOM: [
									{
										tag: 'img[src]',
										getAttrs: function (e) {
											var e = Ts(e, { RETURN_DOM_FRAGMENT: !0 }).firstChild,
												t = e.getAttribute('src') || '',
												n = e.getAttribute('data-raw-html'),
												e = e.getAttribute('alt');
											return x({ imageUrl: t, altText: e }, n && { rawHTML: n });
										}
									}
								],
								toDOM: function (e) {
									e = e.attrs;
									return [
										e.rawHTML || 'img',
										x(x({ src: oe(e.imageUrl) }, e.altText && { alt: e.altText }), v(e))
									];
								}
							};
						},
						enumerable: !1,
						configurable: !0
					}),
					(uu.prototype.addImage = function () {
						return function (i) {
							return function (e, t) {
								var n = e.schema,
									e = e.tr,
									r = i.imageUrl,
									o = i.altText;
								return (
									!!r &&
									((n = n.nodes.image.createAndFill(x({ imageUrl: r }, o && { altText: o }))),
									t(e.replaceSelectionWith(n).scrollIntoView()),
									!0)
								);
							};
						};
					}),
					(uu.prototype.commands = function () {
						return { addImage: this.addImage() };
					});
				var lu,
					cu = uu;
				function uu() {
					return (null !== lu && lu.apply(this, arguments)) || this;
				}
				r(fu, (pu = e)),
					Object.defineProperty(fu.prototype, 'name', {
						get: function () {
							return 'thematicBreak';
						},
						enumerable: !1,
						configurable: !0
					}),
					Object.defineProperty(fu.prototype, 'schema', {
						get: function () {
							return {
								attrs: x({ rawHTML: { default: null } }, h()),
								group: 'block',
								parseDOM: [{ tag: 'hr' }],
								selectable: !1,
								toDOM: function (e) {
									e = e.attrs;
									return ['div', v(e), [e.rawHTML || 'hr']];
								}
							};
						},
						enumerable: !1,
						configurable: !0
					}),
					(fu.prototype.hr = function () {
						var s = this;
						return function () {
							return function (e, t) {
								var n,
									r,
									o,
									i = e.selection,
									a = i.$from;
								return (
									a === i.$to &&
									((i = e.doc),
									(r = (n = e.schema.nodes).thematicBreak),
									(n = n.paragraph),
									(r = [r.create()]),
									(o = a.node(1)),
									(o = i.child(i.childCount - 1) === o),
									(i = i.resolve(a.after(1))),
									(a = (null == (a = a.nodeAfter) ? void 0 : a.type.name) === s.name),
									(o || a) && r.push(n.create()),
									t(e.tr.insert(i.pos, r).scrollIntoView()),
									!0)
								);
							};
						};
					}),
					(fu.prototype.commands = function () {
						return { hr: this.hr() };
					}),
					(fu.prototype.keymaps = function () {
						var e = this.hr()();
						return { 'Mod-l': e, 'Mod-L': e };
					});
				var pu,
					du = fu;
				function fu() {
					return (null !== pu && pu.apply(this, arguments)) || this;
				}
				r(gu, (hu = n)),
					Object.defineProperty(gu.prototype, 'name', {
						get: function () {
							return 'strong';
						},
						enumerable: !1,
						configurable: !0
					}),
					Object.defineProperty(gu.prototype, 'schema', {
						get: function () {
							var e = ['b', 'strong'].map(function (e) {
								return {
									tag: e,
									getAttrs: function (e) {
										e = e.getAttribute('data-raw-html');
										return x({}, e && { rawHTML: e });
									}
								};
							});
							return {
								attrs: x({ rawHTML: { default: null } }, h()),
								parseDOM: e,
								toDOM: function (e) {
									e = e.attrs;
									return [e.rawHTML || 'strong', v(e)];
								}
							};
						},
						enumerable: !1,
						configurable: !0
					}),
					(gu.prototype.bold = function () {
						return function () {
							return function (e, t) {
								return (0, s.toggleMark)(e.schema.marks.strong)(e, t);
							};
						};
					}),
					(gu.prototype.commands = function () {
						return { bold: this.bold() };
					}),
					(gu.prototype.keymaps = function () {
						var e = this.bold()();
						return { 'Mod-b': e, 'Mod-B': e };
					});
				var hu,
					mu = gu;
				function gu() {
					return (null !== hu && hu.apply(this, arguments)) || this;
				}
				r(bu, (vu = n)),
					Object.defineProperty(bu.prototype, 'name', {
						get: function () {
							return 'emph';
						},
						enumerable: !1,
						configurable: !0
					}),
					Object.defineProperty(bu.prototype, 'schema', {
						get: function () {
							var e = ['i', 'em'].map(function (e) {
								return {
									tag: e,
									getAttrs: function (e) {
										e = e.getAttribute('data-raw-html');
										return x({}, e && { rawHTML: e });
									}
								};
							});
							return {
								attrs: x({ rawHTML: { default: null } }, h()),
								parseDOM: e,
								toDOM: function (e) {
									e = e.attrs;
									return [e.rawHTML || 'em', v(e)];
								}
							};
						},
						enumerable: !1,
						configurable: !0
					}),
					(bu.prototype.italic = function () {
						return function () {
							return function (e, t) {
								return (0, s.toggleMark)(e.schema.marks.emph)(e, t);
							};
						};
					}),
					(bu.prototype.commands = function () {
						return { italic: this.italic() };
					}),
					(bu.prototype.keymaps = function () {
						var e = this.italic()();
						return { 'Mod-i': e, 'Mod-I': e };
					});
				var vu,
					yu = bu;
				function bu() {
					return (null !== vu && vu.apply(this, arguments)) || this;
				}
				r(xu, (wu = n)),
					Object.defineProperty(xu.prototype, 'name', {
						get: function () {
							return 'strike';
						},
						enumerable: !1,
						configurable: !0
					}),
					Object.defineProperty(xu.prototype, 'schema', {
						get: function () {
							var e = ['s', 'del'].map(function (e) {
								return {
									tag: e,
									getAttrs: function (e) {
										e = e.getAttribute('data-raw-html');
										return x({}, e && { rawHTML: e });
									}
								};
							});
							return {
								attrs: x({ rawHTML: { default: null } }, h()),
								parseDOM: e,
								toDOM: function (e) {
									e = e.attrs;
									return [e.rawHTML || 'del', v(e)];
								}
							};
						},
						enumerable: !1,
						configurable: !0
					}),
					(xu.prototype.commands = function () {
						return function () {
							return function (e, t) {
								return (0, s.toggleMark)(e.schema.marks.strike)(e, t);
							};
						};
					}),
					(xu.prototype.keymaps = function () {
						var e = this.commands()();
						return { 'Mod-s': e, 'Mod-S': e };
					});
				var wu,
					ku = xu;
				function xu() {
					return (null !== wu && wu.apply(this, arguments)) || this;
				}
				r(Eu, (Cu = n)),
					Object.defineProperty(Eu.prototype, 'name', {
						get: function () {
							return 'link';
						},
						enumerable: !1,
						configurable: !0
					}),
					Object.defineProperty(Eu.prototype, 'schema', {
						get: function () {
							var t = this;
							return {
								attrs: x(
									{
										linkUrl: { default: '' },
										title: { default: null },
										rawHTML: { default: null }
									},
									h()
								),
								inclusive: !1,
								parseDOM: [
									{
										tag: 'a[href]',
										getAttrs: function (e) {
											var e = Ts(e, { RETURN_DOM_FRAGMENT: !0 }).firstChild,
												t = e.getAttribute('href') || '',
												n = e.getAttribute('title') || '',
												e = e.getAttribute('data-raw-html');
											return x({ linkUrl: t, title: n }, e && { rawHTML: e });
										}
									}
								],
								toDOM: function (e) {
									e = e.attrs;
									return [e.rawHTML || 'a', x(x({ href: oe(e.linkUrl) }, t.linkAttributes), v(e))];
								}
							};
						},
						enumerable: !1,
						configurable: !0
					}),
					(Eu.prototype.addLink = function () {
						return function (l) {
							return function (e, t) {
								var n = l.linkUrl,
									r = l.linkText,
									r = void 0 === r ? '' : r,
									o = e.schema,
									i = e.tr,
									e = e.selection,
									a = e.empty,
									s = e.from,
									e = e.to;
								return (
									!!(s && e && n) &&
									((n = o.mark('link', { linkUrl: n })),
									a && r ? ((a = y(o, r, n)), i.replaceRangeWith(s, e, a)) : i.addMark(s, e, n),
									t(i.scrollIntoView()),
									!0)
								);
							};
						};
					}),
					(Eu.prototype.toggleLink = function () {
						return function (n) {
							return function (e, t) {
								return (0, s.toggleMark)(e.schema.marks.link, n)(e, t);
							};
						};
					}),
					(Eu.prototype.commands = function () {
						return { addLink: this.addLink(), toggleLink: this.toggleLink() };
					});
				var Cu,
					Tu = Eu;
				function Eu(e) {
					var t = Cu.call(this) || this;
					return (t.linkAttributes = e), t;
				}
				r(Nu, (Lu = n)),
					Object.defineProperty(Nu.prototype, 'name', {
						get: function () {
							return 'code';
						},
						enumerable: !1,
						configurable: !0
					}),
					Object.defineProperty(Nu.prototype, 'schema', {
						get: function () {
							return {
								attrs: x({ rawHTML: { default: null } }, h()),
								parseDOM: [
									{
										tag: 'code',
										getAttrs: function (e) {
											e = e.getAttribute('data-raw-html');
											return x({}, e && { rawHTML: e });
										}
									}
								],
								toDOM: function (e) {
									e = e.attrs;
									return [e.rawHTML || 'code', v(e)];
								}
							};
						},
						enumerable: !1,
						configurable: !0
					}),
					(Nu.prototype.commands = function () {
						return function () {
							return function (e, t) {
								return (0, s.toggleMark)(e.schema.marks.code)(e, t);
							};
						};
					}),
					(Nu.prototype.keymaps = function () {
						var e = this.commands()();
						return { 'Shift-Mod-c': e, 'Shift-Mod-C': e };
					});
				var Lu,
					Mu = Nu;
				function Nu() {
					return (null !== Lu && Lu.apply(this, arguments)) || this;
				}
				r(Su, (Au = e)),
					Object.defineProperty(Su.prototype, 'name', {
						get: function () {
							return 'customBlock';
						},
						enumerable: !1,
						configurable: !0
					}),
					Object.defineProperty(Su.prototype, 'schema', {
						get: function () {
							return {
								content: 'text*',
								group: 'block',
								attrs: { info: { default: null } },
								atom: !0,
								code: !0,
								defining: !0,
								parseDOM: [
									{
										tag: 'div[data-custom-info]',
										getAttrs: function (e) {
											return { info: e.getAttribute('data-custom-info') };
										}
									}
								],
								toDOM: function (e) {
									return ['div', { 'data-custom-info': e.attrs.info || null }, 0];
								}
							};
						},
						enumerable: !1,
						configurable: !0
					}),
					(Su.prototype.commands = function () {
						return function (n) {
							return function (e, t) {
								return (
									!(null == n || !n.info) &&
									(0, s.setBlockType)(e.schema.nodes.customBlock, n)(e, t)
								);
							};
						};
					});
				var Au,
					Du = Su;
				function Su() {
					return (null !== Au && Au.apply(this, arguments)) || this;
				}
				r(Ru, (Ou = e)),
					Object.defineProperty(Ru.prototype, 'name', {
						get: function () {
							return 'frontMatter';
						},
						enumerable: !1,
						configurable: !0
					}),
					Object.defineProperty(Ru.prototype, 'schema', {
						get: function () {
							return {
								content: 'text*',
								group: 'block',
								code: !0,
								defining: !0,
								parseDOM: [{ preserveWhitespace: 'full', tag: 'div[data-front-matter]' }],
								toDOM: function () {
									return ['div', { 'data-front-matter': 'true' }, 0];
								}
							};
						},
						enumerable: !1,
						configurable: !0
					}),
					(Ru.prototype.commands = function () {
						return function () {
							return function (e, t, n) {
								var r = e.selection.$from;
								return (
									!(!n.endOfTextblock('down') || 'frontMatter' !== r.node().type.name) &&
									(0, s.exitCode)(e, t)
								);
							};
						};
					}),
					(Ru.prototype.keymaps = function () {
						return { Enter: this.commands()() };
					});
				var Ou,
					Iu = Ru;
				function Ru() {
					return (null !== Ou && Ou.apply(this, arguments)) || this;
				}
				r(Hu, (Pu = e)),
					Object.defineProperty(Hu.prototype, 'name', {
						get: function () {
							return 'htmlComment';
						},
						enumerable: !1,
						configurable: !0
					}),
					Object.defineProperty(Hu.prototype, 'schema', {
						get: function () {
							return {
								content: 'text*',
								group: 'block',
								code: !0,
								defining: !0,
								parseDOM: [{ preserveWhitespace: 'full', tag: 'div[data-html-comment]' }],
								toDOM: function () {
									return ['div', { 'data-html-comment': 'true' }, 0];
								}
							};
						},
						enumerable: !1,
						configurable: !0
					}),
					(Hu.prototype.commands = function () {
						return function () {
							return function (e, t, n) {
								var r = e.selection.$from;
								return (
									!(!n.endOfTextblock('down') || 'htmlComment' !== r.node().type.name) &&
									(0, s.exitCode)(e, t)
								);
							};
						};
					}),
					(Hu.prototype.keymaps = function () {
						return { Enter: this.commands()() };
					});
				var Pu,
					Bu = Hu;
				function Hu() {
					return (null !== Pu && Pu.apply(this, arguments)) || this;
				}
				var Fu,
					qu = d('contents');
				function A(e, t) {
					var e = Fu.call(this, e) || this,
						n = t.toDOMAdaptor,
						r = t.htmlSchemaMap,
						r = void 0 === r ? {} : r,
						o = t.linkAttributes,
						o = void 0 === o ? {} : o,
						i = t.useCommandShortcut,
						i = void 0 === i || i,
						a = t.wwPlugins,
						a = void 0 === a ? [] : a,
						t = t.wwNodeViews,
						t = void 0 === t ? {} : t;
					return (
						(e.editorType = 'wysiwyg'),
						e.el.classList.add('ww-mode'),
						(e.toDOMAdaptor = n),
						(e.linkAttributes = o),
						(e.extraPlugins = a),
						(e.pluginNodeViews = t),
						(e.specs = e.createSpecs()),
						(e.schema = e.createSchema(r)),
						(e.context = e.createContext()),
						(e.keymaps = e.createKeymaps(i)),
						(e.view = e.createView()),
						(e.commands = e.createCommands()),
						e.specs.setContext(x(x({}, e.context), { view: e.view })),
						e.initEvent(),
						e
					);
				}
				r(A, (Fu = Nt)),
					(A.prototype.createSpecs = function () {
						return (
							(e = this.linkAttributes),
							new It([
								new dc(),
								new mc(),
								new bc(),
								new xc(),
								new Ec(),
								new Nc(),
								new Sc(),
								new Rc(),
								new Hc(),
								new Wc(),
								new Zc(),
								new Qc(),
								new eu(),
								new ru(),
								new au(),
								new cu(),
								new du(),
								new mu(),
								new yu(),
								new ku(),
								new Tu(e),
								new Mu(),
								new Du(),
								new Iu(),
								new Lt(),
								new Bu()
							])
						);
						var e;
					}),
					(A.prototype.createContext = function () {
						return { schema: this.schema, eventEmitter: this.eventEmitter };
					}),
					(A.prototype.createSchema = function (e) {
						return new X.Schema({
							nodes: x(x({}, this.specs.nodes), e.nodes),
							marks: x(x({}, this.specs.marks), e.marks)
						});
					}),
					(A.prototype.createPlugins = function () {
						return R(
							[
								new m.Plugin({
									key: bl,
									state: {
										init: function () {
											return null;
										},
										apply: function (e, t) {
											var n = e.getMeta(bl);
											return n
												? -1 === n
													? null
													: n
												: U()(t) || !e.docChanged
													? t
													: ((e = (n = e.mapping.mapResult(t)).deleted), (t = n.pos), e ? null : t);
										}
									},
									props: {
										decorations: Cl,
										createSelectionBetween: function (e) {
											e = e.state;
											return U()(bl.getState(e)) ? null : e.selection;
										}
									},
									view: function (e) {
										return new kl(e);
									}
								}),
								Al(this.eventEmitter),
								new m.Plugin({
									props: {
										handleDOMEvents: {
											mousedown: function (e, t) {
												var n = t.clientX,
													r = t.clientY,
													n = e.posAtCoords({ left: n, top: r });
												if (n) {
													var r = e.state,
														o = r.doc,
														r = r.tr,
														o = o.resolve(n.pos),
														n = Zs(o),
														i = t.target,
														i = getComputedStyle(i, ':before'),
														a = t.offsetX,
														s = t.offsetY;
													if (!n || !it(i, a, s)) return !1;
													t.preventDefault();
													(i = o.before(n.depth)), (a = n.node.attrs);
													return (
														r.setNodeMarkup(i, null, x(x({}, a), { checked: !a.checked })),
														e.dispatch(r),
														!0
													);
												}
												return !1;
											}
										}
									}
								}),
								((r = this.eventEmitter),
								new m.Plugin({
									view: function () {
										return {
											update: function (e) {
												var e = e.state,
													t = e.selection,
													n = e.doc,
													e = e.schema;
												r.emit('changeToolbarState', { toolbarState: Il(t, n, e) });
											}
										};
									}
								}))
							],
							this.createPluginProps()
						).concat(this.defaultPlugins);
						var r;
					}),
					(A.prototype.createPluginNodeViews = function () {
						var o = this.eventEmitter,
							i = this.pluginNodeViews,
							e = {};
						return (
							i &&
								Object.keys(i).forEach(function (r) {
									e[r] = function (e, t, n) {
										return i[r](e, t, n, o);
									};
								}),
							e
						);
					}),
					(A.prototype.createView = function () {
						var a = this,
							r = this.toDOMAdaptor,
							o = this.eventEmitter;
						return new be.EditorView(this.el, {
							state: this.createState(),
							attributes: { class: qu },
							nodeViews: x(
								{
									customBlock: function (e, t, n) {
										return new Rl(e, t, n, r);
									},
									image: function (e, t, n) {
										return new Hl(e, t, n, o);
									},
									codeBlock: function (e, t, n) {
										return new ql(e, t, n, o);
									},
									widget: Ct
								},
								this.createPluginNodeViews()
							),
							dispatchTransaction: function (e) {
								var t = a.view.state.applyTransaction(e).state;
								a.view.updateState(t),
									a.emitChangeEvent(e.scrollIntoView()),
									a.eventEmitter.emit('setFocusedNode', t.selection.$from.node(1));
							},
							transformPastedHTML: Jl,
							transformPasted: function (e) {
								return (
									(e = e),
									(r = a.schema),
									(o = Gs(a.view.state.selection.$from)),
									(i = []),
									(t = e.content),
									(n = e.openStart),
									(e = e.openEnd),
									t.forEach(function (e) {
										var t, n;
										'table' === e.type.name
											? (t = vl(new X.Slice(X.Fragment.from(e), 0, 0))) &&
												((n = rc(t)),
												(t = 'tableBody' === t.firstChild.type.name),
												(n = ic(n, r, t, o)),
												i.push(n))
											: i.push(e);
									}),
									new X.Slice(X.Fragment.from(i), n, e)
								);
								var r, o, i, t, n;
							},
							handlePaste: function (e, t, n) {
								return uc(e, n);
							},
							handleKeyDown: function (e, t) {
								return a.eventEmitter.emit('keydown', a.editorType, t), !1;
							},
							handleDOMEvents: {
								paste: function (e, t) {
									var n = t.clipboardData || window.clipboardData,
										n = null == n ? void 0 : n.items;
									return (
										n &&
											!ke()(n).some(function (e) {
												return 'string' === e.kind && 'text/rtf' === e.type;
											}) &&
											(n = kt(n)) &&
											(t.preventDefault(), wt(a.eventEmitter, n, t.type)),
										!1
									);
								},
								keyup: function (e, t) {
									return a.eventEmitter.emit('keyup', a.editorType, t), !1;
								},
								scroll: function () {
									return a.eventEmitter.emit('scroll', 'editor'), !0;
								}
							}
						});
					}),
					(A.prototype.createCommands = function () {
						return this.specs.commands(this.view, il());
					}),
					(A.prototype.getHTML = function () {
						return mt(this.view.dom.innerHTML);
					}),
					(A.prototype.getModel = function () {
						return this.view.state.doc;
					}),
					(A.prototype.getSelection = function () {
						var e = this.view.state.selection;
						return [e.from, e.to];
					}),
					(A.prototype.getSchema = function () {
						return this.view.state.schema;
					}),
					(A.prototype.replaceSelection = function (e, t, n) {
						var r = this.view.state,
							o = r.schema,
							r = r.tr,
							e = e.split('\n').map(function (e) {
								return Ee(o, We(e, o));
							}),
							e = new X.Slice(X.Fragment.from(e), 1, 1),
							t = _()(t) && _()(n) ? r.replaceRange(t, n, e) : r.replaceSelection(e);
						this.view.dispatch(t), this.focus();
					}),
					(A.prototype.deleteSelection = function (e, t) {
						var n = this.view.state.tr,
							e = _()(e) && _()(t) ? n.deleteRange(e, t) : n.deleteSelection();
						this.view.dispatch(e.scrollIntoView());
					}),
					(A.prototype.getSelectedText = function (e, t) {
						var n = this.view.state,
							r = n.doc,
							n = n.selection,
							o = n.from,
							n = n.to;
						return _()(e) && _()(t) && ((o = e), (n = t)), r.textBetween(o, n, '\n');
					}),
					(A.prototype.setModel = function (e, t) {
						void 0 === t && (t = !1);
						var n = this.view.state,
							r = n.tr,
							n = n.doc;
						this.view.dispatch(r.replaceWith(0, n.content.size, e)), t && this.moveCursorToEnd(!0);
					}),
					(A.prototype.setSelection = function (e, t) {
						var n = this.view.state.tr,
							e = b(n, e, (t = void 0 === t ? e : t));
						this.view.dispatch(n.setSelection(e).scrollIntoView());
					}),
					(A.prototype.addWidget = function (e, t, n) {
						var r = this.view,
							o = r.dispatch,
							r = r.state;
						o(r.tr.setMeta('widget', { pos: null != n ? n : r.selection.to, node: e, style: t }));
					}),
					(A.prototype.replaceWithWidget = function (e, t, n) {
						var r = this.view.state,
							o = r.tr,
							n = We(n, r.schema);
						this.view.dispatch(o.replaceWith(e, t, n));
					}),
					(A.prototype.getRangeInfoOfNode = function (e) {
						var i,
							t = this.view.state,
							n = t.doc,
							t = t.selection,
							a = e ? n.resolve(e) : t.$from,
							n = a.marks(),
							e = a.node(),
							s = a.start(),
							l = a.end(),
							t = e.type.name;
						return (
							(!n.length && 'paragraph' !== t) ||
								((i = n[n.length - 1]),
								(t = i ? i.type.name : 'text'),
								e.forEach(function (e, t) {
									var n = e.isText,
										r = e.nodeSize,
										e = e.marks,
										o = a.pos - s;
									n && t <= o && o <= t + r && (!(n = e).length || C(n, i)) && (l = (s += t) + r);
								})),
							{ range: [s, l], type: t }
						);
					});
				var ju = A,
					uo = ah(404),
					_u = ah.n(uo),
					zu = [
						'afterPreviewRender',
						'updatePreview',
						'changeMode',
						'needChangeMode',
						'command',
						'changePreviewStyle',
						'changePreviewTabPreview',
						'changePreviewTabWrite',
						'scroll',
						'contextmenu',
						'show',
						'hide',
						'changeLanguage',
						'changeToolbarState',
						'toggleScrollSync',
						'mixinTableOffsetMapPrototype',
						'setFocusedNode',
						'removePopupWidget',
						'query',
						'openPopup',
						'closePopup',
						'addImageBlobHook',
						'beforePreviewRender',
						'beforeConvertWysiwygToMarkdown',
						'load',
						'loadUI',
						'change',
						'caretChange',
						'destroy',
						'focus',
						'blur',
						'keydown',
						'keyup'
					];
				function Uu() {
					var t = this;
					(this.events = new Ll()),
						(this.eventTypes = zu.reduce(function (e, t) {
							return x(x({}, e), { type: t });
						}, {})),
						(this.hold = !1),
						zu.forEach(function (e) {
							t.addEventType(e);
						});
				}
				(Uu.prototype.listen = function (e, t) {
					var e = this.getTypeInfo(e),
						n = this.events.get(e.type) || [];
					if (!this.hasEventType(e.type)) throw new Error('There is no event type ' + e.type);
					e.namespace && (t.namespace = e.namespace), n.push(t), this.events.set(e.type, n);
				}),
					(Uu.prototype.emit = function (e) {
						for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
						var e = this.getTypeInfo(e),
							e = this.events.get(e.type),
							r = [];
						return (
							!this.hold &&
								e &&
								e.forEach(function (e) {
									e = e.apply(void 0, t);
									z()(e) || r.push(e);
								}),
							r
						);
					}),
					(Uu.prototype.emitReduce = function (e, t) {
						for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
						e = this.events.get(e);
						return (
							!this.hold &&
								e &&
								e.forEach(function (e) {
									e = e.apply(void 0, R([t], n));
									_u()(e) || (t = e);
								}),
							t
						);
					}),
					(Uu.prototype.getTypeInfo = function (e) {
						e = e.split('.');
						return { type: e[0], namespace: e[1] };
					}),
					(Uu.prototype.hasEventType = function (e) {
						return !z()(this.eventTypes[this.getTypeInfo(e).type]);
					}),
					(Uu.prototype.addEventType = function (e) {
						if (this.hasEventType(e)) throw new Error('There is already have event type ' + e);
						this.eventTypes[e] = e;
					}),
					(Uu.prototype.removeEventHandler = function (e, t) {
						var n = this,
							e = this.getTypeInfo(e),
							r = e.type,
							o = e.namespace;
						r && t
							? this.removeEventHandlerWithHandler(r, t)
							: r && !o
								? this.events.delete(r)
								: !r && o
									? this.events.forEach(function (e, t) {
											n.removeEventHandlerWithTypeInfo(t, o);
										})
									: r && o && this.removeEventHandlerWithTypeInfo(r, o);
					}),
					(Uu.prototype.removeEventHandlerWithHandler = function (e, t) {
						var n,
							e = this.events.get(e);
						e && ((n = e.indexOf(t)), 0 <= e.indexOf(t)) && e.splice(n, 1);
					}),
					(Uu.prototype.removeEventHandlerWithTypeInfo = function (e, t) {
						var n = [],
							r = this.events.get(e);
						r &&
							(r.map(function (e) {
								return e.namespace !== t && n.push(e), null;
							}),
							this.events.set(e, n));
					}),
					(Uu.prototype.getEvents = function () {
						return this.events;
					}),
					(Uu.prototype.holdEventInvoke = function (e) {
						(this.hold = !0), e(), (this.hold = !1);
					});
				var Vu = Uu;
				function $u(e, t, n, r) {
					(this.eventEmitter = e),
						(this.mdCommands = t),
						(this.wwCommands = n),
						(this.getEditorType = r),
						this.initEvent();
				}
				($u.prototype.initEvent = function () {
					var n = this;
					this.eventEmitter.listen('command', function (e, t) {
						n.exec(e, t);
					});
				}),
					($u.prototype.addCommand = function (e, t, n) {
						'markdown' === e ? (this.mdCommands[t] = n) : (this.wwCommands[t] = n);
					}),
					($u.prototype.deleteCommand = function (e, t) {
						'markdown' === e ? delete this.mdCommands[t] : delete this.wwCommands[t];
					}),
					($u.prototype.exec = function (e, t) {
						('markdown' === this.getEditorType() ? this.mdCommands : this.wwCommands)[e](t);
					});
				var Wu = $u;
				function Gu(e) {
					return '\n' === e[e.length - 1] ? e.slice(0, e.length - 1) : e;
				}
				function Zu(e, t) {
					var n,
						e = e.schema,
						r = t.literal.match(tt);
					return !(
						!r ||
						((n = r[1]), (r = r[3]), (n = (n || r).toLowerCase()), 'htmlInline' !== t.type) ||
						(!e.marks[n] && !e.nodes[n])
					);
				}
				function Xu(e) {
					return C(['text', 'strong', 'emph', 'strike', 'image', 'link', 'code'], e.type);
				}
				function Ku(e) {
					return 'softbreak' === (null == e ? void 0 : e.type);
				}
				function Qu(e) {
					var t = e.type,
						e = e.literal,
						t = 'htmlInline' === t && e.match(tt);
					if (t) {
						(e = t[1]), (t = t[3]), (e = e || t);
						if (e) return C(['ul', 'ol', 'li'], e.toLowerCase());
					}
				}
				function Yu(e) {
					for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
					var r = document.createElement('div'),
						o = ((r.innerHTML = Ts(e)), r.firstChild);
					return t.map(function (e) {
						return o.getAttribute(e) || '';
					});
				}
				(Ju = {
					'b, strong': function (e, t, n) {
						var r = e.schema.marks.strong;
						n ? e.openMark(r.create({ rawHTML: n })) : e.closeMark(r);
					},
					'i, em': function (e, t, n) {
						var r = e.schema.marks.emph;
						n ? e.openMark(r.create({ rawHTML: n })) : e.closeMark(r);
					},
					's, del': function (e, t, n) {
						var r = e.schema.marks.strike;
						n ? e.openMark(r.create({ rawHTML: n })) : e.closeMark(r);
					},
					code: function (e, t, n) {
						var r = e.schema.marks.code;
						n ? e.openMark(r.create({ rawHTML: n })) : e.closeMark(r);
					},
					a: function (e, t, n) {
						var t = t.literal,
							r = e.schema.marks.link;
						n
							? ((t = Yu(t, 'href')[0]), e.openMark(r.create({ linkUrl: t, rawHTML: n })))
							: e.closeMark(r);
					},
					img: function (e, t, n) {
						var r,
							o,
							t = t.literal;
						n &&
							((r = (t = Yu(t, 'src', 'alt'))[0]),
							(t = t[1]),
							(o = e.schema.nodes.image),
							e.addNode(o, x({ rawHTML: n, imageUrl: r }, t && { altText: t })));
					},
					hr: function (e, t, n) {
						e.addNode(e.schema.nodes.thematicBreak, { rawHTML: n });
					},
					br: function (e, t) {
						var n = e.schema.nodes.paragraph,
							r = t.parent,
							o = t.prev,
							t = t.next;
						'paragraph' === (null == r ? void 0 : r.type)
							? (Ku(o) && e.openNode(n),
								Ku(t) ? e.closeNode() : t && (e.closeNode(), e.openNode(n)))
							: 'tableCell' === (null == r ? void 0 : r.type) &&
								(o && (Xu(o) || Zu(e, o)) && e.closeNode(), t) &&
								(Xu(t) || Zu(e, t)) &&
								e.openNode(n);
					},
					pre: function (e, t, n) {
						var r = document.createElement('div'),
							t =
								((r.innerHTML = t.literal),
								null == (r = null == (t = r.firstChild) ? void 0 : t.firstChild)
									? void 0
									: r.textContent);
						e.openNode(e.schema.nodes.codeBlock, { rawHTML: n }), e.addText(Gu(t)), e.closeNode();
					},
					'ul, ol': function (e, t, n) {
						var r, o, i;
						'tableCell' === t.parent.type &&
							((i = (o = e.schema.nodes).bulletList),
							(r = o.orderedList),
							(o = o.paragraph),
							(i = 'ul' === n ? i : r),
							n
								? (t.prev && !Qu(t.prev) && e.closeNode(), e.openNode(i, { rawHTML: n }))
								: (e.closeNode(), t.next && !Qu(t.next) && e.openNode(o)));
					},
					li: function (e, t, n) {
						var r, o, i;
						'tableCell' === (null == (o = t.parent) ? void 0 : o.type) &&
							((r = (o = e.schema.nodes).listItem),
							(o = o.paragraph),
							n
								? ((i = (i = t).literal),
									(i = { task: /data-task/.test(i), checked: /data-task-checked/.test(i) }),
									t.prev && !Qu(t.prev) && e.closeNode(),
									e.openNode(r, x({ rawHTML: n }, i)),
									t.next && !Qu(t.next) && e.openNode(o))
								: (t.prev && !Qu(t.prev) && e.closeNode(), e.closeNode()));
					}
				}),
					(ep = {}),
					Object.keys(Ju).forEach(function (t) {
						t.split(', ').forEach(function (e) {
							e = e.toLowerCase();
							ep[e] = Ju[t];
						});
					});
				var Ju,
					ep,
					tp = ep;
				function np(e) {
					return 'htmlInline' === e.type && nt.test(e.literal);
				}
				var rp = {
					text: function (e, t) {
						e.addText(t.literal || '');
					},
					paragraph: function (e, t, n, r) {
						n.entering
							? ((n = e.schema.nodes.paragraph),
								'paragraph' === (null == (t = t.prev) ? void 0 : t.type) &&
									(e.openNode(n, r), e.closeNode()),
								e.openNode(n, r))
							: e.closeNode();
					},
					heading: function (e, t, n, r) {
						n.entering
							? ((n = t.level),
								(t = t.headingType),
								e.openNode(e.schema.nodes.heading, x({ level: n, headingType: t }, r)))
							: e.closeNode();
					},
					codeBlock: function (e, t, n) {
						var r = e.schema.nodes.codeBlock,
							o = t.info,
							t = t.literal;
						e.openNode(r, x({ language: o }, n)), e.addText(Gu(t || '')), e.closeNode();
					},
					list: function (e, t, n, r) {
						var o, i;
						n.entering
							? ((o = (n = e.schema.nodes).bulletList),
								(n = n.orderedList),
								(i = (t = t.listData).type),
								(t = t.start),
								'bullet' === i ? e.openNode(o, r) : e.openNode(n, x({ order: t }, r)))
							: e.closeNode();
					},
					item: function (e, t, n, r) {
						var n = n.entering,
							o = e.schema.nodes.listItem,
							t = t.listData,
							i = t.task,
							t = t.checked;
						n
							? ((n = x(x(x({}, i && { task: i }), t && { checked: t }), r)), e.openNode(o, n))
							: e.closeNode();
					},
					blockQuote: function (e, t, n, r) {
						n.entering ? e.openNode(e.schema.nodes.blockQuote, r) : e.closeNode();
					},
					image: function (e, t, n, r) {
						var o = n.entering,
							n = n.skipChildren,
							i = e.schema.nodes.image,
							a = t.destination,
							t = t.firstChild;
						o && n && n(), e.addNode(i, x(x({ imageUrl: a }, t && { altText: t.literal }), r));
					},
					thematicBreak: function (e, t, n, r) {
						e.addNode(e.schema.nodes.thematicBreak, r);
					},
					strong: function (e, t, n, r) {
						var n = n.entering,
							o = e.schema.marks.strong;
						n ? e.openMark(o.create(r)) : e.closeMark(o);
					},
					emph: function (e, t, n, r) {
						var n = n.entering,
							o = e.schema.marks.emph;
						n ? e.openMark(o.create(r)) : e.closeMark(o);
					},
					link: function (e, t, n, r) {
						var n = n.entering,
							o = e.schema.marks.link,
							i = t.destination,
							t = t.title;
						n ? ((n = x({ linkUrl: i, title: t }, r)), e.openMark(o.create(n))) : e.closeMark(o);
					},
					softbreak: function (e, t) {
						var n;
						'paragraph' === t.parent.type &&
							((n = t.prev), (t = t.next), n && !np(n) && e.closeNode(), t) &&
							!np(t) &&
							e.openNode(e.schema.nodes.paragraph);
					},
					table: function (e, t, n, r) {
						n.entering ? e.openNode(e.schema.nodes.table, r) : e.closeNode();
					},
					tableHead: function (e, t, n, r) {
						n.entering ? e.openNode(e.schema.nodes.tableHead, r) : e.closeNode();
					},
					tableBody: function (e, t, n, r) {
						n.entering ? e.openNode(e.schema.nodes.tableBody, r) : e.closeNode();
					},
					tableRow: function (e, t, n, r) {
						n.entering ? e.openNode(e.schema.nodes.tableRow, r) : e.closeNode();
					},
					tableCell: function (t, e, n) {
						var r,
							o,
							i,
							a,
							n = n.entering;
						e.ignored ||
							((r = function (e) {
								return e && (Xu(e) || Zu(t, e));
							}),
							n
								? ((o = (n = t.schema.nodes).tableHeadCell),
									(i = n.tableBodyCell),
									(n = n.paragraph),
									(o = 'tableHead' === (a = e.parent.parent).type ? o : i),
									(i = (a.parent.columns[e.startIdx] || {}).align),
									(a = x({}, e.attrs)),
									i && (a.align = i),
									t.openNode(o, a),
									r(e.firstChild) && t.openNode(n))
								: (r(e.lastChild) && t.closeNode(), t.closeNode()));
					},
					strike: function (e, t, n, r) {
						var n = n.entering,
							o = e.schema.marks.strike;
						n ? e.openMark(o.create(r)) : e.closeMark(o);
					},
					code: function (e, t, n, r) {
						var o = e.schema.marks.code;
						e.openMark(o.create(r)), e.addText(Gu(t.literal || '')), e.closeMark(o);
					},
					customBlock: function (e, t) {
						var n = e.schema.nodes,
							r = n.customBlock,
							n = n.paragraph,
							o = t.info,
							i = t.literal;
						e.openNode(r, { info: o }),
							e.addText(Gu(i || '')),
							e.closeNode(),
							t.next || (e.openNode(n), e.closeNode());
					},
					frontMatter: function (e, t) {
						e.openNode(e.schema.nodes.frontMatter), e.addText(t.literal), e.closeNode();
					},
					htmlInline: function (e, t) {
						var n = t.literal,
							r = n.match(tt),
							o = r[1],
							r = r[3],
							r = (o || r).toLowerCase(),
							i = e.schema.marks[r],
							n = Ts(n);
						null != i && i.spec.attrs.htmlInline
							? o
								? ((n = Ls(n)), e.openMark(i.create({ htmlAttrs: n })))
								: e.closeMark(i)
							: (n = tp[r]) && n(e, t, o);
					},
					htmlBlock: function (e, t) {
						var n,
							r,
							o,
							i = t.literal,
							a = document.createElement('div');
						rt.test(i)
							? (e.openNode(e.schema.nodes.htmlComment), e.addText(t.literal), e.closeNode())
							: ((n = (r = i.match(tt))[1]),
								(r = r[3]),
								(n = (n || r).toLowerCase()),
								(r = e.schema.nodes[n]),
								(i = Ts(i)),
								null != r && r.spec.attrs.htmlBlock
									? ((o = Ls(i)), (t = Es(t, n)), e.addNode(r, { htmlAttrs: o, childrenHTML: t }))
									: ((a.innerHTML = i),
										(function n(e) {
											ke()(e.childNodes).forEach(function (e) {
												var t;
												st(e) &&
													((t = e.nodeName.toLowerCase()),
													e.setAttribute('data-raw-html', t),
													e.childNodes) &&
													n(e);
											});
										})(a),
										e.convertByDOMParser(a)));
					},
					customInline: function (e, t, n) {
						var r = n.entering,
							n = n.skipChildren,
							o = t.info,
							i = t.firstChild,
							a = e.schema;
						-1 !== o.indexOf('widget') && r
							? ((t = Ge(t)), n(), e.addNode(a.nodes.widget, { info: o }, [a.text(Ue(o, t))]))
							: ((n = '$$'), r && (n += i ? o + ' ' : o), e.addText(n));
					}
				};
				function op(e, t) {
					(this.schema = e),
						(this.convertors = t),
						(this.stack = [{ type: this.schema.topNodeType, attrs: null, content: [] }]),
						(this.marks = X.Mark.none);
				}
				(op.prototype.top = function () {
					return K(this.stack);
				}),
					(op.prototype.push = function (e) {
						this.stack.length && this.top().content.push(e);
					}),
					(op.prototype.addText = function (e) {
						var t, n, r;
						e &&
							((n = K((t = this.top().content))),
							(e = this.schema.text(e, this.marks)),
							(n =
								n &&
								((r = e), !!((n = n).isText && r.isText && X.Mark.sameSet(n.marks, r.marks))) &&
								n.withText(n.text + r.text))
								? (t[t.length - 1] = n)
								: t.push(e));
					}),
					(op.prototype.openMark = function (e) {
						this.marks = e.addToSet(this.marks);
					}),
					(op.prototype.closeMark = function (e) {
						this.marks = e.removeFromSet(this.marks);
					}),
					(op.prototype.addNode = function (e, t, n) {
						e = e.createAndFill(t, n, this.marks);
						return e ? (this.push(e), e) : null;
					}),
					(op.prototype.openNode = function (e, t) {
						this.stack.push({ type: e, attrs: t, content: [] });
					}),
					(op.prototype.closeNode = function () {
						this.marks.length && (this.marks = X.Mark.none);
						var e = this.stack.pop(),
							t = e.type,
							n = e.attrs,
							e = e.content;
						return this.addNode(t, n, e);
					}),
					(op.prototype.convertByDOMParser = function (e) {
						var t = this;
						X.DOMParser.fromSchema(this.schema)
							.parse(e)
							.content.forEach(function (e) {
								return t.push(e);
							});
					}),
					(op.prototype.closeUnmatchedHTMLInline = function (e, t) {
						var n;
						if (!t && 'htmlInline' !== e.type)
							for (var r = this.stack.length - 1; 0 <= r; --r) {
								var o = this.stack[r];
								if (null == (n = o.attrs) || !n.rawHTML) break;
								o.content.length ? this.closeNode() : this.stack.pop();
							}
					}),
					(op.prototype.convert = function (e, i) {
						for (
							var a = e.walker(),
								s = a.next(),
								t = function () {
									var e,
										t = s.node,
										n = s.entering,
										r = l.convertors[t.type],
										o = !1;
									r &&
										((e = {
											entering: n,
											leaf: !(function (e) {
												switch (e.type) {
													case 'document':
													case 'blockQuote':
													case 'list':
													case 'item':
													case 'paragraph':
													case 'heading':
													case 'emph':
													case 'strong':
													case 'strike':
													case 'link':
													case 'image':
													case 'table':
													case 'tableHead':
													case 'tableBody':
													case 'tableRow':
													case 'tableCell':
													case 'tableDelimRow':
													case 'customInline':
														return 1;
													default:
														return;
												}
											})(t),
											getChildrenText: Fe,
											options: { gfm: !0, nodeId: !1, tagFilter: !1, softbreak: '\n' },
											skipChildren: function () {
												o = !0;
											}
										}),
										l.closeUnmatchedHTMLInline(t, n),
										r(l, t, e),
										(null == i ? void 0 : i.node) === t) &&
										((n =
											l.stack.reduce(function (e, t) {
												return (
													e +
													t.content.reduce(function (e, t) {
														return e + t.nodeSize;
													}, 0)
												);
											}, 0) + 1),
										i.setMappedPos(n)),
										o && (a.resumeAt(t, !1), a.next()),
										(s = a.next());
								},
								l = this;
							s;

						)
							t();
					}),
					(op.prototype.convertNode = function (e, t) {
						return this.convert(e, t), this.stack.length ? this.closeNode() : null;
					});
				var ip = op;
				var ap = {
					text: function (e, t) {
						var t = t.node,
							n = null != (n = t.text) ? n : '';
						(t.marks || []).some(function (e) {
							return 'link' === e.type.name;
						})
							? e.text(ce(n), !1)
							: e.text(n);
					},
					paragraph: function (e, t) {
						var n,
							r,
							o,
							i = t.node,
							a = t.parent,
							t = t.index,
							t = void 0 === t ? 0 : t;
						e.stopNewline
							? e.convertInline(i)
							: ((r = (r = !(n = 0 === t) && a.child(t - 1)) && 0 === r.childCount),
								(t = (t = t < a.childCount - 1 && a.child(t + 1)) && 'paragraph' === t.type.name),
								(o = 0 === i.childCount) && r
									? e.write('<br>\n')
									: !o || r || n
										? (e.convertInline(i), t ? e.write('\n') : e.closeBlock(i))
										: ('listItem' === (null == a ? void 0 : a.type.name) &&
												((o = e.getDelim()), e.setDelim(''), e.write('<br>'), e.setDelim(o)),
											e.write('\n')));
					},
					heading: function (e, t, n) {
						(t = t.node), (n = n.delim);
						'atx' === t.attrs.headingType
							? (e.write(n + ' '), e.convertInline(t))
							: (e.convertInline(t), e.ensureNewLine(), e.write(n)),
							e.closeBlock(t);
					},
					codeBlock: function (e, t, n) {
						var t = t.node,
							r = n.delim,
							n = n.text,
							o = r[0],
							r = r[1];
						e.write(o),
							e.ensureNewLine(),
							e.text(n, !1),
							e.ensureNewLine(),
							e.write(r),
							e.closeBlock(t);
					},
					blockQuote: function (e, t, n) {
						var r = t.node,
							t = t.parent,
							n = n.delim;
						(null == t ? void 0 : t.type.name) === r.type.name && e.flushClose(1),
							e.wrapBlock(n, null, r, function () {
								return e.convertNode(r);
							});
					},
					bulletList: function (e, t, n) {
						var t = t.node,
							r = n.delim;
						e.convertList(t, le(' ', 4), function () {
							return r + ' ';
						});
					},
					orderedList: function (e, t) {
						var t = t.node,
							n = t.attrs.order || 1;
						e.convertList(t, le(' ', 4), function (e) {
							return String(n + e) + '. ';
						});
					},
					listItem: function (e, t) {
						var t = t.node,
							n = t.attrs,
							r = n.task,
							n = n.checked;
						r && e.write('[' + (n ? 'x' : ' ') + '] '), e.convertNode(t);
					},
					image: function (e, t, n) {
						n = n.attrs;
						e.write(
							'![' +
								(null == n ? void 0 : n.altText) +
								'](' +
								(null == n ? void 0 : n.imageUrl) +
								')'
						);
					},
					thematicBreak: function (e, t, n) {
						(t = t.node), (n = n.delim);
						e.write(n), e.closeBlock(t);
					},
					table: function (e, t) {
						t = t.node;
						e.convertNode(t), e.closeBlock(t);
					},
					tableHead: function (e, t, n) {
						var t = t.node,
							n = n.delim,
							r = t.firstChild,
							o = (e.convertNode(t), null != n ? n : '');
						!n &&
							r &&
							r.forEach(function (e) {
								var t,
									n,
									r = e.textContent,
									e = e.attrs,
									e =
										((r = r),
										(e = e.align),
										(r = r.length),
										(n = t = ''),
										'left' === e
											? ((t = ':'), --r)
											: 'right' === e
												? ((n = ':'), --r)
												: 'center' === e && ((n = t = ':'), (r -= 2)),
										'' + t + le('-', Math.max(r, 3)) + n);
								o += '| ' + e + ' ';
							}),
							e.write(o + '|'),
							e.ensureNewLine();
					},
					tableBody: function (e, t) {
						t = t.node;
						e.convertNode(t);
					},
					tableRow: function (e, t) {
						t = t.node;
						e.convertNode(t), e.write('|'), e.ensureNewLine();
					},
					tableHeadCell: function (e, t, n) {
						(t = t.node), (n = n.delim);
						e.write(void 0 === n ? '| ' : n), e.convertTableCell(t), e.write(' ');
					},
					tableBodyCell: function (e, t, n) {
						(t = t.node), (n = n.delim);
						e.write(void 0 === n ? '| ' : n), e.convertTableCell(t), e.write(' ');
					},
					customBlock: function (e, t, n) {
						var t = t.node,
							r = n.delim,
							n = n.text,
							o = r[0],
							r = r[1];
						e.write(o),
							e.ensureNewLine(),
							e.text(n, !1),
							e.ensureNewLine(),
							e.write(r),
							e.closeBlock(t);
					},
					frontMatter: function (e, t, n) {
						(t = t.node), (n = n.text);
						e.text(n, !1), e.closeBlock(t);
					},
					widget: function (e, t, n) {
						n = n.text;
						e.write(n);
					},
					html: function (e, t, n) {
						(t = t.node), (n = n.text);
						e.write(n), t.attrs.htmlBlock && e.closeBlock(t);
					},
					htmlComment: function (e, t, n) {
						(t = t.node), (n = n.text);
						e.write(n), e.closeBlock(t);
					}
				};
				function sp(e, t) {
					var n = e.text,
						r = /`+/g,
						o = 0;
					if (e.isText && n)
						for (var i = r.exec(n); i; ) (o = Math.max(o, i[0].length)), (i = r.exec(n));
					for (var a = 0 < o && 0 < t ? ' `' : '`', s = 0; s < o; s += 1) a += '`';
					return 0 < o && t < 0 && (a += ' '), a;
				}
				function lp(e) {
					return e ? ['<' + e + '>', '</' + e + '>'] : null;
				}
				function cp(e) {
					return e ? '<' + e + '>' : null;
				}
				function up(e) {
					return e ? '</' + e + '>' : null;
				}
				var pp = {
						heading: function (e) {
							var e = e.node.attrs,
								t = e.level,
								n = le('#', t);
							return {
								delim: (n = 'setext' === e.headingType ? (1 === t ? '===' : '---') : n),
								rawHTML: lp(e.rawHTML)
							};
						},
						codeBlock: function (e) {
							var e = e.node,
								t = e.attrs,
								e = e.textContent;
							return {
								delim: ['```' + (t.language || ''), '```'],
								rawHTML: lp(t.rawHTML),
								text: e
							};
						},
						blockQuote: function (e) {
							return { delim: '> ', rawHTML: lp(e.node.attrs.rawHTML) };
						},
						bulletList: function (e, t) {
							(e = e.node), (t = t.inTable), (e = e.attrs.rawHTML);
							return { delim: '*', rawHTML: lp((e = t ? e || 'ul' : e)) };
						},
						orderedList: function (e, t) {
							(e = e.node), (t = t.inTable), (e = e.attrs.rawHTML);
							return { rawHTML: lp((e = t ? e || 'ol' : e)) };
						},
						listItem: function (e, t) {
							var e = e.node,
								t = t.inTable,
								n = e.attrs,
								r = n.task,
								n = n.checked,
								e = e.attrs.rawHTML;
							return {
								rawHTML: (e = t ? e || 'li' : e)
									? [
											'<' +
												e +
												(r ? ' class="task-list-item' + (n ? ' checked' : '') + '"' : '') +
												(r ? ' data-task' + (n ? ' data-task-checked' : '') : '') +
												'>',
											'</' + e + '>'
										]
									: null
							};
						},
						table: function (e) {
							return { rawHTML: lp(e.node.attrs.rawHTML) };
						},
						tableHead: function (e) {
							return { rawHTML: lp(e.node.attrs.rawHTML) };
						},
						tableBody: function (e) {
							return { rawHTML: lp(e.node.attrs.rawHTML) };
						},
						tableRow: function (e) {
							return { rawHTML: lp(e.node.attrs.rawHTML) };
						},
						tableHeadCell: function (e) {
							return { rawHTML: lp(e.node.attrs.rawHTML) };
						},
						tableBodyCell: function (e) {
							return { rawHTML: lp(e.node.attrs.rawHTML) };
						},
						image: function (e) {
							var e = e.node.attrs,
								t = e.rawHTML,
								n = e.altText,
								e = e.imageUrl.replace(/&amp;/g, '&'),
								r = n ? ' alt="' + oe(n) + '"' : '';
							return {
								rawHTML: t ? '<' + t + ' src="' + oe(e) + '"' + r + '>' : null,
								attrs: { altText: ce(n || ''), imageUrl: e }
							};
						},
						thematicBreak: function (e) {
							return { delim: '***', rawHTML: cp(e.node.attrs.rawHTML) };
						},
						customBlock: function (e) {
							var e = e.node,
								t = e.attrs,
								e = e.textContent;
							return { delim: ['$$' + t.info, '$$'], text: e };
						},
						frontMatter: function (e) {
							return { text: e.node.textContent };
						},
						widget: function (e) {
							return { text: e.node.textContent };
						},
						strong: function (e, t) {
							(e = e.node), (t = t.entering), (e = e.attrs.rawHTML);
							return { delim: '**', rawHTML: (t ? cp : up)(e) };
						},
						emph: function (e, t) {
							(e = e.node), (t = t.entering), (e = e.attrs.rawHTML);
							return { delim: '*', rawHTML: (t ? cp : up)(e) };
						},
						strike: function (e, t) {
							(e = e.node), (t = t.entering), (e = e.attrs.rawHTML);
							return { delim: '~~', rawHTML: (t ? cp : up)(e) };
						},
						link: function (e, t) {
							var e = e.node,
								t = t.entering,
								e = e.attrs,
								n = e.title,
								r = e.rawHTML,
								e = e.linkUrl.replace(/&amp;/g, '&'),
								o = n ? ' title="' + oe(n) + '"' : '';
							return t
								? { delim: '[', rawHTML: r ? '<' + r + ' href="' + oe(e) + '"' + o + '>' : null }
								: {
										delim:
											'](' +
											e +
											(n
												? ' ' +
													((t = ce(n)),
													(o =
														-1 === t.indexOf('"') ? '""' : -1 === t.indexOf("'") ? "''" : '()')[0] +
														t +
														o[1])
												: '') +
											')',
										rawHTML: up(r)
									};
						},
						code: function (e, t) {
							var n = e.node,
								r = e.parent,
								e = e.index,
								e = void 0 === e ? 0 : e,
								t = t.entering;
							return {
								delim: t ? sp(r.child(e), -1) : sp(r.child(e - 1), 1),
								rawHTML: (t ? cp : up)(n.attrs.rawHTML)
							};
						},
						htmlComment: function (e) {
							return { text: e.node.textContent };
						},
						html: function (e, t) {
							var e = e.node,
								t = t.entering,
								n = e.type.name,
								r = e.attrs.htmlAttrs,
								o = '<' + n,
								n = '</' + n + '>';
							return (
								Object.keys(r).forEach(function (e) {
									o += ' ' + e + '="' + r[e].replace(/"/g, "'") + '"';
								}),
								(o += '>'),
								e.attrs.htmlInline
									? { rawHTML: t ? o : n }
									: { text: '' + o + e.attrs.childrenHTML + n }
							);
						}
					},
					dp = {
						strong: { mixable: !0, removedEnclosingWhitespace: !0 },
						emph: { mixable: !0, removedEnclosingWhitespace: !0 },
						strike: { mixable: !0, removedEnclosingWhitespace: !0 },
						code: { escape: !1 },
						link: null,
						html: null
					};
				function fp(p) {
					var e = {};
					return (
						Object.keys(ap).forEach(function (u) {
							e[u] = function (e, t) {
								var n, r, o, i, a, s, l, c;
								ap[u] &&
									((l = p[u]),
									(l = l ? l(t, { inTable: e.inTable }) : {}),
									(n = u),
									(t = (e = { state: e, nodeInfo: t, params: l }).state),
									(l = e.nodeInfo),
									(c = (e = e.params).rawHTML)
										? -1 < Tl()(n, ['heading', 'codeBlock'])
											? ((o = t),
												(i = l.node),
												(s = (a = c)[0]),
												(a = c[1]),
												o.write(s),
												o.convertInline(i),
												o.write(a))
											: -1 < Tl()(n, ['image', 'thematicBreak'])
												? t.write(c)
												: ((s = t),
													(i = c),
													(a = (o = l).node),
													(o = o.parent),
													(r = c[0]),
													(i = c[1]),
													(s.stopNewline = !0),
													s.write(r),
													s.convertNode(a),
													s.write(i),
													'doc' === (null == o ? void 0 : o.type.name) &&
														(s.closeBlock(a), (s.stopNewline = !1)))
										: ap[n](t, l, e));
							};
						}),
						e
					);
				}
				function hp(t) {
					Object.keys(t).forEach(function (e) {
						var n = pp[e],
							r = t[e];
						(pp[e] = n
							? function (e, t) {
									return (
										(t.origin = function () {
											return n(e, t);
										}),
										r(e, t)
									);
								}
							: r),
							delete t[e];
					});
					var i,
						e,
						n = fp(pp);
					return (
						(i = pp),
						(e = {}),
						Object.keys(dp).forEach(function (o) {
							e[o] = function (e, t) {
								var n = dp[o],
									r = i[o],
									r = r && e && !z()(t) ? r(e, { entering: t }) : {};
								return x(x({}, r), n);
							};
						}),
						{ nodeTypeConvertors: n, markTypeConvertors: e }
					);
				}
				function D(e) {
					var t = e.nodeTypeConvertors,
						e = e.markTypeConvertors;
					(this.nodeTypeConvertors = t),
						(this.markTypeConvertors = e),
						(this.delim = ''),
						(this.result = ''),
						(this.closed = !1),
						(this.tightList = !1),
						(this.stopNewline = !1),
						(this.inTable = !1);
				}
				(D.prototype.getMarkConvertor = function (e) {
					e = e.attrs.htmlInline ? 'html' : e.type.name;
					return this.markTypeConvertors[e];
				}),
					(D.prototype.isInBlank = function () {
						return /(^|\n)$/.test(this.result);
					}),
					(D.prototype.markText = function (e, t, n, r) {
						var o = this.getMarkConvertor(e);
						return o
							? ((e = (o = o({ node: e, parent: n, index: r }, t)).delim), o.rawHTML || e)
							: '';
					}),
					(D.prototype.setDelim = function (e) {
						this.delim = e;
					}),
					(D.prototype.getDelim = function () {
						return this.delim;
					}),
					(D.prototype.flushClose = function (e) {
						if (!this.stopNewline && this.closed) {
							if ((this.isInBlank() || (this.result += '\n'), 1 < (e = e || 2))) {
								var t = this.delim,
									n = /\s+$/.exec(t);
								n && (t = t.slice(0, t.length - n[0].length));
								for (var r = 1; r < e; r += 1) this.result += t + '\n';
							}
							this.closed = !1;
						}
					}),
					(D.prototype.wrapBlock = function (e, t, n, r) {
						var o = this.getDelim();
						this.write(t || e),
							this.setDelim(this.getDelim() + e),
							r(),
							this.setDelim(o),
							this.closeBlock(n);
					}),
					(D.prototype.ensureNewLine = function () {
						this.isInBlank() || (this.result += '\n');
					}),
					(D.prototype.write = function (e) {
						void 0 === e && (e = ''),
							this.flushClose(),
							this.delim && this.isInBlank() && (this.result += this.delim),
							e && (this.result += e);
					}),
					(D.prototype.closeBlock = function (e) {
						this.closed = e;
					}),
					(D.prototype.text = function (e, t) {
						void 0 === t && (t = !0);
						for (var n = e.split('\n'), r = 0; r < n.length; r += 1)
							this.write(),
								(this.result += t ? ue(n[r]) : n[r]),
								r !== n.length - 1 && (this.result += '\n');
					}),
					(D.prototype.convertBlock = function (e, t, n) {
						var r = e.type.name,
							r = this.nodeTypeConvertors[r],
							t = { node: e, parent: t, index: n };
						e.attrs.htmlBlock ? this.nodeTypeConvertors.html(this, t) : r && r(this, t);
					}),
					(D.prototype.convertInline = function (m) {
						function e(e, t, n) {
							var r = e ? e.marks : [],
								o = y;
							(y = ''),
								e &&
									e.isText &&
									r.some(function (e) {
										(e = g.getMarkConvertor(e)), (e = e && e());
										return e && e.removedEnclosingWhitespace;
									}) &&
									e &&
									e.text &&
									((i = (s = /^(\s*)(.*?)(\s*)$/m.exec(e.text))[1]),
									(u = s[2]),
									(s = s[3]),
									(o += i),
									(y = s),
									(!i && !s) || (e = u ? e.withText(u) : null) || (r = v));
							for (
								var i = r.length && K(r),
									a = (s = i && g.getMarkConvertor(i)) && s(),
									s = a && !1 === a.escape,
									l = r.length - (s ? 1 : 0),
									c = 0;
								c < l;
								c += 1
							) {
								var u = r[c];
								if (a && !a.mixable) break;
								for (var p = 0; p < v.length; p += 1) {
									var d = v[p];
									if (a && !a.mixable) break;
									if (u.eq(d)) {
										p < c
											? (r = r
													.slice(0, p)
													.concat(u)
													.concat(r.slice(p, c))
													.concat(r.slice(c + 1, l)))
											: c < p &&
												(r = r
													.slice(0, c)
													.concat(r.slice(c + 1, p))
													.concat(u)
													.concat(r.slice(p, l)));
										break;
									}
								}
							}
							for (var f = 0; f < Math.min(v.length, l) && r[f].eq(v[f]); ) f += 1;
							for (; f < v.length; ) {
								var h = v.pop();
								h && g.text(g.markText(h, !1, m, n), !1);
							}
							if ((o && g.text(o), e)) {
								for (; v.length < l; ) {
									u = r[v.length];
									v.push(u), g.text(g.markText(u, !0, m, n), !1);
								}
								s && e.isText
									? g.text(g.markText(i, !0, m, n) + e.text + g.markText(i, !1, m, n + 1), !1)
									: g.convertBlock(e, m, n);
							}
						}
						var g = this,
							v = [],
							y = '';
						m.forEach(e), e(null, 0, m.childCount);
					}),
					(D.prototype.convertList = function (r, o, i) {
						var a = this,
							s =
								(this.closed && this.closed.type === r.type
									? this.flushClose(3)
									: this.tightList && this.flushClose(1),
								null == (e = r.attrs.tight) || e),
							e = this.tightList;
						(this.tightList = s),
							r.forEach(function (e, t, n) {
								n && s && a.flushClose(1),
									a.wrapBlock(o, i(n), r, function () {
										return a.convertBlock(e, r, n);
									});
							}),
							(this.tightList = e);
					}),
					(D.prototype.convertTableCell = function (r) {
						var o = this;
						(this.stopNewline = !0),
							(this.inTable = !0),
							r.forEach(function (e, t, n) {
								C(['bulletList', 'orderedList'], e.type.name)
									? (o.convertBlock(e, r, n), (o.closed = !1))
									: (o.convertInline(e),
										n < r.childCount - 1 &&
											'paragraph' === r.child(n + 1).type.name &&
											o.write('<br>'));
							}),
							(this.stopNewline = !1),
							(this.inTable = !1);
					}),
					(D.prototype.convertNode = function (r, o) {
						var i = this;
						return (
							r.forEach(function (e, t, n) {
								i.convertBlock(e, r, n),
									(null == o ? void 0 : o.node) === e &&
										((n = i.result.split('\n')), o.setMappedPos([n.length, K(n).length + 1]));
							}),
							this.result
						);
					});
				var mp = D;
				function gp(e, t, n, r) {
					var s,
						o,
						l,
						i = this;
					(this.setMappedPos = function (e) {
						i.mappedPosWhenConverting = e;
					}),
						(this.schema = e),
						(this.eventEmitter = r),
						(this.focusedNode = null),
						(this.mappedPosWhenConverting = null),
						(this.toWwConvertors =
							((s = n),
							(e = Object.keys(s)),
							(o = x({}, rp)),
							(l = new ys({ gfm: !0, nodeId: !0, convertors: s }).getConvertors()),
							e.forEach(function (i) {
								var a = rp[i];
								a &&
									!C(['htmlBlock', 'htmlInline'], i) &&
									(o[i] = function (e, t, n) {
										n.origin = function () {
											return l[i](t, n, l);
										};
										var r,
											o = s[i](t, n);
										o &&
											(r = {
												htmlAttrs: (o = Array.isArray(o) ? o[0] : o).attributes,
												classNames: o.classNames
											}),
											a(e, t, n, r);
									});
							}),
							o)),
						(this.toMdConvertors = hp(t || {})),
						this.eventEmitter.listen('setFocusedNode', function (e) {
							return (i.focusedNode = e);
						});
				}
				(gp.prototype.getMappedPos = function () {
					return this.mappedPosWhenConverting;
				}),
					(gp.prototype.getInfoForPosSync = function () {
						return { node: this.focusedNode, setMappedPos: this.setMappedPos };
					}),
					(gp.prototype.toWysiwygModel = function (e) {
						return new ip(this.schema, this.toWwConvertors).convertNode(
							e,
							this.getInfoForPosSync()
						);
					}),
					(gp.prototype.toMarkdownText = function (e) {
						e = new mp(this.toMdConvertors).convertNode(e, this.getInfoForPosSync());
						return this.eventEmitter.emitReduce('beforeConvertWysiwygToMarkdown', e);
					});
				var vp = gp;
				function yp(e) {
					var t = e.plugins,
						p = e.eventEmitter,
						d = e.usageStatistics,
						f = e.instance;
					return (
						p.listen('mixinTableOffsetMapPrototype', cl),
						(null != t ? t : []).reduce(
							function (e, t) {
								(n = (t = { plugin: t, eventEmitter: p, usageStatistics: d, instance: f }).plugin),
									(t = {
										eventEmitter: t.eventEmitter,
										usageStatistics: t.usageStatistics,
										instance: t.instance,
										pmState: {
											Plugin: m.Plugin,
											PluginKey: m.PluginKey,
											Selection: m.Selection,
											TextSelection: m.TextSelection
										},
										pmView: { Decoration: be.Decoration, DecorationSet: be.DecorationSet },
										pmModel: { Fragment: X.Fragment },
										pmRules: {
											InputRule: Ce.InputRule,
											inputRules: Ce.inputRules,
											undoInputRule: Ce.undoInputRule
										},
										pmKeymap: { keymap: xe.keymap },
										i18n: L
									});
								var n,
									r,
									o,
									i,
									a,
									s,
									l,
									c,
									u = Xe()(n) ? (0, n[0])(t, void 0 === (u = n[1]) ? {} : u) : n(t);
								if (u)
									return (
										(n = u.markdownParsers),
										(t = u.toHTMLRenderers),
										(r = u.toMarkdownRenderers),
										(o = u.markdownPlugins),
										(i = u.wysiwygPlugins),
										(a = u.wysiwygNodeViews),
										(s = u.markdownCommands),
										(l = u.wysiwygCommands),
										(c = u.toolbarItems),
										t && (e.toHTMLRenderers = he(e.toHTMLRenderers, t)),
										r && (e.toMarkdownRenderers = he(e.toMarkdownRenderers, r)),
										o && (e.mdPlugins = e.mdPlugins.concat(o)),
										i && (e.wwPlugins = e.wwPlugins.concat(i)),
										a && (e.wwNodeViews = x(x({}, e.wwNodeViews), a)),
										s && (e.mdCommands = x(x({}, e.mdCommands), s)),
										l && (e.wwCommands = x(x({}, e.wwCommands), l)),
										c && (e.toolbarItems = e.toolbarItems.concat(c)),
										n && (e.markdownParsers = x(x({}, e.markdownParsers), n)),
										e
									);
								throw new Error('The return value of the executed plugin is empty.');
							},
							{
								toHTMLRenderers: {},
								toMarkdownRenderers: {},
								mdPlugins: [],
								wwPlugins: [],
								wwNodeViews: {},
								mdCommands: {},
								wwCommands: {},
								toolbarItems: [],
								markdownParsers: {}
							}
						)
					);
				}
				function bp(e) {
					var t,
						n = this,
						e =
							((this.options = B()(
								{
									linkAttributes: null,
									extendedAutolinks: !1,
									customHTMLRenderer: null,
									referenceDefinition: !1,
									customHTMLSanitizer: null,
									frontMatter: !1,
									usageStatistics: !0,
									theme: 'light'
								},
								e
							)),
							(this.eventEmitter = new Vu()),
							se(this.options.linkAttributes)),
						r =
							yp({
								plugins: this.options.plugins,
								eventEmitter: this.eventEmitter,
								usageStatistics: this.options.usageStatistics,
								instance: this
							}) || {},
						o = r.toHTMLRenderers,
						r = r.markdownParsers,
						i = this.options,
						a = i.customHTMLRenderer,
						s = i.extendedAutolinks,
						l = i.referenceDefinition,
						c = i.frontMatter,
						i = i.customHTMLSanitizer,
						e = {
							linkAttributes: e,
							customHTMLRenderer: x(x({}, o), a),
							extendedAutolinks: s,
							referenceDefinition: l,
							frontMatter: c,
							sanitizer: i || Ts
						},
						o =
							((t = e.customHTMLRenderer),
							['htmlBlock', 'htmlInline'].forEach(function (e) {
								t[e] && Object.keys(t[e]).forEach(Cs);
							}),
							this.options.events &&
								P()(this.options.events, function (e, t) {
									n.on(t, e);
								}),
							this.options),
						a = o.el,
						i = o.initialValue,
						o = o.theme,
						u = a.innerHTML;
					'light' !== o && a.classList.add(d(o)),
						(a.innerHTML = ''),
						(this.toastMark = new ps('', {
							disallowedHtmlBlockTags: ['br', 'img'],
							extendedAutolinks: s,
							referenceDefinition: l,
							disallowDeepHeading: !0,
							frontMatter: c,
							customParser: r
						})),
						(this.preview = new Vs(this.eventEmitter, x(x({}, e), { isViewer: !0 }))),
						Yr()(this.preview.previewContent, 'mousedown', this.toggleTask.bind(this)),
						i ? this.setMarkdown(i) : u && this.preview.setHTML(u),
						a.appendChild(this.preview.previewContent),
						this.eventEmitter.emit('load', this);
				}
				(bp.prototype.toggleTask = function (e) {
					var t = e.target,
						n = getComputedStyle(t, ':before');
					!t.hasAttribute('data-task-disabled') &&
						t.hasAttribute('data-task') &&
						it(n, e.offsetX, e.offsetY) &&
						(ct(t, 'checked'), this.eventEmitter.emit('change', { source: 'viewer', date: e }));
				}),
					(bp.prototype.setMarkdown = function (e) {
						var t = this.toastMark.getLineTexts(),
							t = [t.length, K(t).length + 1],
							t = this.toastMark.editMarkdown([1, 1], t, e || '');
						this.eventEmitter.emit('updatePreview', t);
					}),
					(bp.prototype.on = function (e, t) {
						this.eventEmitter.listen(e, t);
					}),
					(bp.prototype.off = function (e) {
						this.eventEmitter.removeEventHandler(e);
					}),
					(bp.prototype.addHook = function (e, t) {
						this.eventEmitter.removeEventHandler(e), this.eventEmitter.listen(e, t);
					}),
					(bp.prototype.destroy = function () {
						Qr()(this.preview.el, 'mousedown', this.toggleTask.bind(this)),
							this.preview.destroy(),
							this.eventEmitter.emit('destroy');
					}),
					(bp.prototype.isViewer = function () {
						return !0;
					}),
					(bp.prototype.isMarkdownMode = function () {
						return !1;
					}),
					(bp.prototype.isWysiwygMode = function () {
						return !1;
					});
				var wp = bp;
				function kp(e) {
					return e instanceof X.Node;
				}
				function xp(e) {
					return C(
						[
							'document',
							'blockQuote',
							'bulletList',
							'orderedList',
							'listItem',
							'paragraph',
							'heading',
							'emph',
							'strong',
							'strike',
							'link',
							'image',
							'table',
							'tableHead',
							'tableBody',
							'tableRow',
							'tableHeadCell',
							'tableBodyCell'
						],
						e
					);
				}
				var Cp = {
						openTag: function (e, t) {
							var n = e.tagName,
								r = e.classNames,
								e = e.attributes,
								n = document.createElement(n),
								o = {};
							r && (n.className = r.join(' ')), ht((o = e ? x(x({}, o), e) : o), n), t.push(n);
						},
						closeTag: function (e, t) {
							var n;
							1 < t.length && ((n = t.pop()), K(t).appendChild(n));
						},
						html: function (e, t) {
							K(t).insertAdjacentHTML('beforeend', e.content);
						},
						text: function (e, t) {
							e = document.createTextNode(e.content);
							K(t).appendChild(e);
						}
					},
					Tp =
						((Ep.prototype.generateTokens = function (e) {
							(n = (r = e).attrs),
								(t = {
									type: (o = r.type.name),
									wysiwygNode: !0,
									literal: !xp(o) && kp(r) ? r.textContent : null
								}),
								(n = {
									heading: { level: n.level },
									link: { destination: n.linkUrl, title: n.title },
									image: { destination: n.imageUrl },
									codeBlock: { info: n.language },
									bulletList: { type: 'list', listData: { type: 'bullet' } },
									orderedList: { type: 'list', listData: { type: 'ordered', start: n.order } },
									listItem: { type: 'item', listData: { task: n.task, checked: n.checked } },
									tableHeadCell: { type: 'tableCell', cellType: 'head', align: n.align },
									tableBodyCell: { type: 'tableCell', cellType: 'body', align: n.align },
									customBlock: { info: n.info }
								}[o]),
								(o = x(x({}, t), n)),
								(n = (t = r.attrs).htmlAttrs),
								(r = t.childrenHTML);
							var t = n ? x(x({}, o), { attrs: n, childrenHTML: r }) : o,
								n = {
									entering: !0,
									leaf: !!kp(e) && e.isLeaf,
									options: this.renderer.getOptions(),
									getChildrenText: function () {
										return kp(e) ? e.textContent : '';
									},
									skipChildren: function () {
										return !1;
									}
								},
								r = this.convertors[e.type.name],
								o = r(t, n, this.convertors),
								o = Xe()(o) ? o : [o];
							return (
								(xp(e.type.name) || e.attrs.htmlInline) &&
									((n.entering = !1),
									o.push({ type: 'text', content: kp(e) ? e.textContent : '' }),
									(o = o.concat(r(t, n, this.convertors)))),
								o
							);
						}),
						(Ep.prototype.toDOMNode = function (e) {
							var e = this.generateTokens(e),
								t = [];
							return (
								e.forEach(function (e) {
									return Cp[e.type](e, t);
								}),
								t[0]
							);
						}),
						(Ep.prototype.getToDOMNode = function (e) {
							return C(this.customConvertorKeys, e) ? this.toDOMNode.bind(this) : null;
						}),
						Ep);
				function Ep(e, t) {
					var e = Os(e, t),
						n = x(x({}, t.htmlBlock), t.htmlInline);
					(this.customConvertorKeys = Object.keys(t).concat(Object.keys(n))),
						(this.renderer = new ys({ gfm: !0, convertors: x(x({}, e), n) })),
						(this.convertors = this.renderer.getConvertors());
				}
				var Lp = 15,
					Mp = null,
					Np = null;
				function Ap(e, t) {
					var n = t.syncScrollTop,
						r = t.releaseEventBlock;
					Np && clearTimeout(Np),
						n(e),
						(Np = setTimeout(function () {
							r();
						}, Lp));
				}
				function Dp(t, n, r) {
					function o() {
						var e = (Date.now() - a) / 100;
						Mp && clearTimeout(Mp),
							(Mp =
								e < 1
									? ((e = t + i * Math.cos(((1 - e) * Math.PI) / 2)),
										Ap(Math.ceil(e), r),
										setTimeout(o, 1))
									: (Ap(n, r), null));
					}
					var i = n - t,
						a = Date.now();
					o();
				}
				(Op.prototype.addScrollSyncEvent = function () {
					var n = this;
					this.eventEmitter.listen('afterPreviewRender', function () {
						n.clearTimer(),
							(n.timer = setTimeout(function () {
								n.syncPreviewScrollTop(!0);
							}, 200));
					}),
						this.eventEmitter.listen('scroll', function (e, t) {
							n.active &&
								('editor' === e && 'editor' !== n.blockedScroll
									? n.syncPreviewScrollTop()
									: 'preview' === e && 'preview' !== n.blockedScroll && n.syncEditorScrollTop(t));
						}),
						this.eventEmitter.listen('toggleScrollSync', function (e) {
							n.active = e;
						});
				}),
					(Op.prototype.getMdNodeAtPos = function (e, t) {
						e = e.content.findIndex(t.pos).index;
						return this.toastMark.findFirstNodeAtLine(e + 1);
					}),
					(Op.prototype.getScrollTopByCaretPos = function () {
						var e = this.mdEditor.getSelection(),
							e = this.toastMark.findFirstNodeAtLine(e[0][0]),
							t = this.previewEl.clientHeight,
							e = Fs(this.previewRoot, e).el,
							n = (Bs(e, this.previewRoot) || e.offsetTop) + e.clientHeight - 0.5 * t;
						return (
							(this.latestEditorScrollTop = null),
							e.getBoundingClientRect().top - this.previewEl.getBoundingClientRect().top < t
								? null
								: n
						);
					}),
					(Op.prototype.syncPreviewScrollTop = function (e) {
						void 0 === e && (e = !1);
						var t = this.editorView,
							n = this.previewEl,
							r = this.previewRoot,
							o = t.dom.getBoundingClientRect(),
							i = o.left,
							o = o.top,
							i = t.posAtCoords({ left: i, top: o }),
							a = t.state.doc,
							i = this.getMdNodeAtPos(a, i);
						if (i && 'htmlBlock' !== (s = (s = i).type) && 'htmlInline' !== s) {
							var s = n.scrollTop,
								t = t.dom,
								l = t.scrollTop,
								c = t.scrollHeight,
								u = t.clientHeight,
								t = t.children,
								c = c - l <= u + 18,
								u = c ? n.scrollHeight : 0;
							if (l && !c) {
								if (e) {
									n = this.getScrollTopByCaretPos();
									if (!n) return;
									u = n;
								} else
									(c = Fs(this.previewRoot, i)),
										(e = c.el),
										(n = Ps(a, c.mdNode, t)),
										(i = n.height),
										(a = n.rect),
										(u =
											(Bs(e, r) || e.offsetTop) +
											e.clientHeight * (o > a.top ? Math.min((o - a.top) / i, 1) : 0));
								(u = this.getResolvedScrollTop('editor', l, u, s)),
									(this.latestEditorScrollTop = l);
							}
							u !== s && this.run('editor', u, s);
						}
					}),
					(Op.prototype.syncEditorScrollTop = function (e) {
						var t = this.toastMark,
							n = this.editorView,
							r = this.previewRoot,
							o = this.previewEl,
							i = n.dom,
							n = n.state,
							a = o.scrollTop,
							s = o.clientHeight,
							o = o.scrollHeight - a <= s,
							s = i.scrollTop,
							l = o ? i.scrollHeight : 0;
						if (a && e && !o) {
							if (
								!(e = (function (e, t) {
									for (; !e.getAttribute('data-nodeid') && e.parentElement !== t; )
										e = e.parentElement;
									return e;
								})(e, r)).getAttribute('data-nodeid')
							)
								return;
							(o = i.children),
								(i = Number(e.getAttribute('data-nodeid'))),
								(e = Fs(this.previewRoot, t.findNodeById(i))),
								(t = e.mdNode),
								(e = e.el),
								(l = o[Ae(t) - 1].offsetTop),
								(n = Ps(n.doc, t, o).height),
								(t = _s(e, r, i)),
								(o = t.nodeHeight),
								(e = t.offsetTop);
							(l += ((r = n), Math.min((a - e) / o, 1) * r)),
								(l = this.getResolvedScrollTop('preview', a, l, s)),
								(this.latestPreviewScrollTop = a);
						}
						l !== s && this.run('preview', l, s);
					}),
					(Op.prototype.getResolvedScrollTop = function (e, t, n, r) {
						e = 'editor' === e ? this.latestEditorScrollTop : this.latestPreviewScrollTop;
						return null === e ? n : e < t ? Math.max(n, r) : Math.min(n, r);
					}),
					(Op.prototype.run = function (e, t, n) {
						var r,
							o = this;
						'editor' === e
							? ((r = this.previewEl), (this.blockedScroll = 'preview'))
							: ((r = this.editorView.dom), (this.blockedScroll = 'editor')),
							Dp(n, t, {
								syncScrollTop: function (e) {
									return (r.scrollTop = e);
								},
								releaseEventBlock: function () {
									return (o.blockedScroll = null);
								}
							});
					}),
					(Op.prototype.clearTimer = function () {
						this.timer && (clearTimeout(this.timer), (this.timer = null));
					}),
					(Op.prototype.destroy = function () {
						this.clearTimer(),
							this.eventEmitter.removeEventHandler('scroll'),
							this.eventEmitter.removeEventHandler('afterPreviewRender');
					});
				var Sp = Op;
				function Op(e, t, n) {
					(this.latestEditorScrollTop = null),
						(this.latestPreviewScrollTop = null),
						(this.blockedScroll = null),
						(this.active = !0),
						(this.timer = null);
					var r = t.previewContent,
						t = t.el;
					(this.previewRoot = r),
						(this.previewEl = t),
						(this.mdEditor = e),
						(this.editorView = e.view),
						(this.toastMark = e.getToastMark()),
						(this.eventEmitter = n),
						this.addScrollSyncEvent();
				}
				var Ip = {
					getPopupInitialValues: function (e, t) {
						return 'link' === t.popupName ? { linkText: e.getSelectedText() } : {};
					}
				};
				function S(e) {
					var t,
						r,
						o,
						i,
						n,
						a = this,
						e =
							((this.initialHTML = e.el.innerHTML),
							(e.el.innerHTML = ''),
							(this.options = B()(
								{
									previewStyle: 'tab',
									previewHighlight: !0,
									initialEditType: 'markdown',
									height: '300px',
									minHeight: '200px',
									language: 'en-US',
									useCommandShortcut: !0,
									usageStatistics: !0,
									toolbarItems: [
										['heading', 'bold', 'italic', 'strike'],
										['hr', 'quote'],
										['ul', 'ol', 'task', 'indent', 'outdent'],
										['table', 'image', 'link'],
										['code', 'codeblock'],
										['scrollSync']
									],
									hideModeSwitch: !1,
									linkAttributes: null,
									extendedAutolinks: !1,
									customHTMLRenderer: null,
									customMarkdownRenderer: null,
									referenceDefinition: !1,
									customHTMLSanitizer: null,
									frontMatter: !1,
									widgetRules: [],
									theme: 'light',
									autofocus: !0
								},
								e
							)),
							this.options),
						s = e.customHTMLRenderer,
						l = e.extendedAutolinks,
						c = e.referenceDefinition,
						u = e.frontMatter,
						p = e.customMarkdownRenderer,
						d = e.useCommandShortcut,
						f = e.initialEditType,
						h = e.widgetRules,
						e = e.customHTMLSanitizer,
						f =
							((this.mode = f || 'markdown'),
							(this.mdPreviewStyle = this.options.previewStyle),
							(this.i18n = L),
							this.i18n.setCode(this.options.language),
							(this.eventEmitter = new Vu()),
							(qe = h).forEach(function (e, t) {
								je['widget' + t] = e;
							}),
							se(this.options.linkAttributes)),
						h =
							((this.pluginInfo = yp({
								plugins: this.options.plugins,
								eventEmitter: this.eventEmitter,
								usageStatistics: this.options.usageStatistics,
								instance: this
							})),
							this.pluginInfo),
						m = h.toHTMLRenderers,
						g = h.toMarkdownRenderers,
						v = h.mdPlugins,
						y = h.wwPlugins,
						b = h.wwNodeViews,
						w = h.mdCommands,
						k = h.wwCommands,
						h = h.markdownParsers,
						m = {
							linkAttributes: f,
							customHTMLRenderer: he(m, s),
							extendedAutolinks: l,
							referenceDefinition: c,
							frontMatter: u,
							sanitizer: e || Ts
						},
						s = new Tp(f, m.customHTMLRenderer),
						e =
							((t = m.customHTMLRenderer),
							(r = m.sanitizer),
							(o = s),
							(i = { nodes: {}, marks: {} }),
							['htmlBlock', 'htmlInline'].forEach(function (n) {
								t[n] &&
									Object.keys(t[n]).forEach(function (e) {
										var t = 'htmlBlock' === n ? 'nodes' : 'marks';
										Cs(e), (i[t][e] = As[n](e, r, o));
									});
							}),
							i);
					(this.toastMark = new ps('', {
						disallowedHtmlBlockTags: ['br', 'img'],
						extendedAutolinks: l,
						referenceDefinition: c,
						disallowDeepHeading: !0,
						frontMatter: u,
						customParser: h
					})),
						(this.mdEditor = new Xr(this.eventEmitter, {
							toastMark: this.toastMark,
							useCommandShortcut: d,
							mdPlugins: v
						})),
						(this.preview = new Vs(
							this.eventEmitter,
							x(x({}, m), { isViewer: !1, highlight: this.options.previewHighlight })
						)),
						(this.wwEditor = new ju(this.eventEmitter, {
							toDOMAdaptor: s,
							useCommandShortcut: d,
							htmlSchemaMap: e,
							linkAttributes: f,
							wwPlugins: y,
							wwNodeViews: b
						})),
						(this.convertor = new vp(
							this.wwEditor.getSchema(),
							x(x({}, g), p),
							Os(f, m.customHTMLRenderer),
							this.eventEmitter
						)),
						this.setMinHeight(this.options.minHeight),
						this.setHeight(this.options.height),
						this.setMarkdown(this.options.initialValue, !1),
						this.options.placeholder && this.setPlaceholder(this.options.placeholder),
						this.options.initialValue || this.setHTML(this.initialHTML, !1),
						(this.commandManager = new Wu(
							this.eventEmitter,
							this.mdEditor.commands,
							this.wwEditor.commands,
							function () {
								return a.mode;
							}
						)),
						this.options.usageStatistics && V()('editor', 'UA-129966929-1'),
						(this.scrollSync = new Sp(this.mdEditor, this.preview, this.eventEmitter)),
						this.addInitEvent(),
						this.addInitCommand(w, k),
						(n = this).eventEmitter.listen('query', function (e, t) {
							return Ip[e](n, t);
						}),
						this.options.hooks &&
							P()(this.options.hooks, function (e, t) {
								return a.addHook(t, e);
							}),
						this.options.events &&
							P()(this.options.events, function (e, t) {
								return a.on(t, e);
							}),
						this.eventEmitter.emit('load', this),
						this.moveCursorToStart(this.options.autofocus);
				}
				(S.prototype.addInitEvent = function () {
					var t = this;
					this.on('needChangeMode', this.changeMode.bind(this)),
						this.on('loadUI', function () {
							var e;
							'auto' !== t.height &&
								((e = Math.min(parseInt(t.minHeight, 10), parseInt(t.height, 10) - 75) + 'px'),
								t.setMinHeight(e));
						}),
						this.eventEmitter.listen('addImageBlobHook', function (e, t) {
							var n = new FileReader();
							(n.onload = function (e) {
								e = e.target;
								return t(e.result);
							}),
								n.readAsDataURL(e);
						});
				}),
					(S.prototype.addInitCommand = function (e, t) {
						function n(t, n) {
							Object.keys(n).forEach(function (e) {
								r.addCommand(t, e, n[e]);
							});
						}
						var r = this;
						this.addCommand('markdown', 'toggleScrollSync', function (e) {
							return r.eventEmitter.emit('toggleScrollSync', e.active), !0;
						}),
							n('markdown', e),
							n('wysiwyg', t);
					}),
					(S.prototype.getCurrentModeEditor = function () {
						return this.isMarkdownMode() ? this.mdEditor : this.wwEditor;
					}),
					(S.factory = function (e) {
						return new (e.viewer ? wp : S)(e);
					}),
					(S.setLanguage = function (e, t) {
						L.setLanguage(e, t);
					}),
					(S.prototype.changePreviewStyle = function (e) {
						this.mdPreviewStyle !== e &&
							((this.mdPreviewStyle = e), this.eventEmitter.emit('changePreviewStyle', e));
					}),
					(S.prototype.exec = function (e, t) {
						this.commandManager.exec(e, t);
					}),
					(S.prototype.addCommand = function (n, e, r) {
						var o = this;
						this.commandManager.addCommand(n, e, function (e) {
							var t = ('markdown' === n ? o.mdEditor : o.wwEditor).view;
							r((e = void 0 === e ? {} : e), t.state, t.dispatch, t);
						});
					}),
					(S.prototype.on = function (e, t) {
						this.eventEmitter.listen(e, t);
					}),
					(S.prototype.off = function (e) {
						this.eventEmitter.removeEventHandler(e);
					}),
					(S.prototype.addHook = function (e, t) {
						this.eventEmitter.removeEventHandler(e), this.eventEmitter.listen(e, t);
					}),
					(S.prototype.removeHook = function (e) {
						this.eventEmitter.removeEventHandler(e);
					}),
					(S.prototype.focus = function () {
						this.getCurrentModeEditor().focus();
					}),
					(S.prototype.blur = function () {
						this.getCurrentModeEditor().blur();
					}),
					(S.prototype.moveCursorToEnd = function (e) {
						void 0 === e && (e = !0), this.getCurrentModeEditor().moveCursorToEnd(e);
					}),
					(S.prototype.moveCursorToStart = function (e) {
						void 0 === e && (e = !0), this.getCurrentModeEditor().moveCursorToStart(e);
					}),
					(S.prototype.setMarkdown = function (e, t) {
						this.mdEditor.setMarkdown((e = void 0 === e ? '' : e), (t = void 0 === t ? !0 : t)),
							this.isWysiwygMode() &&
								((e = this.toastMark.getRootNode()),
								(e = this.convertor.toWysiwygModel(e)),
								this.wwEditor.setModel(e, t));
					}),
					(S.prototype.setHTML = function (e, t) {
						void 0 === e && (e = ''), void 0 === t && (t = !0);
						var n,
							r,
							o = document.createElement('div'),
							e =
								((o.innerHTML =
									((n = (e = e).replace(/<p><br\s*\/*><\/p>/gi, '<p></p>')),
									(e = new RegExp(et, 'ig')),
									null != (r = n.match(e)) &&
										r.forEach(function (e, t) {
											nt.test(e) &&
												((e = ot),
												t &&
													(t = r[t - 1].match(Je)) &&
													!/br/i.test(t[1]) &&
													(e = '</' + (t = t[1]) + '><' + t + '>'),
												(n = n.replace(nt, e)));
										}),
									n)),
								X.DOMParser.fromSchema(this.wwEditor.schema).parse(o));
						this.isMarkdownMode()
							? this.mdEditor.setMarkdown(this.convertor.toMarkdownText(e), t)
							: this.wwEditor.setModel(e, t);
					}),
					(S.prototype.getMarkdown = function () {
						return this.isMarkdownMode()
							? this.mdEditor.getMarkdown()
							: this.convertor.toMarkdownText(this.wwEditor.getModel());
					}),
					(S.prototype.getHTML = function () {
						var e,
							t = this,
							n =
								(this.eventEmitter.holdEventInvoke(function () {
									var e;
									t.isMarkdownMode() &&
										((e = t.toastMark.getRootNode()),
										(e = t.convertor.toWysiwygModel(e)),
										t.wwEditor.setModel(e));
								}),
								mt(this.wwEditor.view.dom.innerHTML));
						return this.placeholder
							? ((e = new RegExp(
									'<span class="placeholder[^>]+>' + this.placeholder + '</span>',
									'i'
								)),
								n.replace(e, ''))
							: n;
					}),
					(S.prototype.insertText = function (e) {
						this.getCurrentModeEditor().replaceSelection(e);
					}),
					(S.prototype.setSelection = function (e, t) {
						this.getCurrentModeEditor().setSelection(e, t);
					}),
					(S.prototype.replaceSelection = function (e, t, n) {
						this.getCurrentModeEditor().replaceSelection(e, t, n);
					}),
					(S.prototype.deleteSelection = function (e, t) {
						this.getCurrentModeEditor().deleteSelection(e, t);
					}),
					(S.prototype.getSelectedText = function (e, t) {
						return this.getCurrentModeEditor().getSelectedText(e, t);
					}),
					(S.prototype.getRangeInfoOfNode = function (e) {
						return this.getCurrentModeEditor().getRangeInfoOfNode(e);
					}),
					(S.prototype.addWidget = function (e, t, n) {
						this.getCurrentModeEditor().addWidget(e, t, n);
					}),
					(S.prototype.replaceWithWidget = function (e, t, n) {
						this.getCurrentModeEditor().replaceWithWidget(e, t, n);
					}),
					(S.prototype.setHeight = function (e) {
						var t = this.options.el;
						j()(e) &&
							(('auto' === e ? F : q)()(t, 'auto-height'), this.setMinHeight(this.getMinHeight())),
							H()(t, { height: e }),
							(this.height = e);
					}),
					(S.prototype.getHeight = function () {
						return this.height;
					}),
					(S.prototype.setMinHeight = function (e) {
						var t;
						e !== this.minHeight &&
							('auto' !== (t = this.height || this.options.height) &&
								this.options.el.querySelector('.' + d('main')) &&
								(e = Math.min(parseInt(e, 10), parseInt(t, 10) - 75) + 'px'),
							(t = parseInt(e, 10)),
							(this.minHeight = e),
							this.wwEditor.setMinHeight(t),
							this.mdEditor.setMinHeight(t),
							this.preview.setMinHeight(t));
					}),
					(S.prototype.getMinHeight = function () {
						return this.minHeight;
					}),
					(S.prototype.isMarkdownMode = function () {
						return 'markdown' === this.mode;
					}),
					(S.prototype.isWysiwygMode = function () {
						return 'wysiwyg' === this.mode;
					}),
					(S.prototype.isViewer = function () {
						return !1;
					}),
					(S.prototype.getCurrentPreviewStyle = function () {
						return this.mdPreviewStyle;
					}),
					(S.prototype.changeMode = function (e, t) {
						var n;
						this.mode === e ||
							((this.mode = e),
							this.isWysiwygMode()
								? ((n = this.toastMark.getRootNode()),
									(n = this.convertor.toWysiwygModel(n)),
									this.wwEditor.setModel(n))
								: ((n = this.wwEditor.getModel()),
									this.mdEditor.setMarkdown(this.convertor.toMarkdownText(n), !t)),
							this.eventEmitter.emit('removePopupWidget'),
							this.eventEmitter.emit('changeMode', e),
							t) ||
							((n = this.convertor.getMappedPos()),
							this.focus(),
							this.isWysiwygMode() && _()(n)
								? this.wwEditor.setSelection(n)
								: Array.isArray(n) && this.mdEditor.setSelection(n));
					}),
					(S.prototype.destroy = function () {
						var n = this;
						this.wwEditor.destroy(),
							this.mdEditor.destroy(),
							this.preview.destroy(),
							this.scrollSync.destroy(),
							this.eventEmitter.emit('destroy'),
							this.eventEmitter.getEvents().forEach(function (e, t) {
								return n.off(t);
							});
					}),
					(S.prototype.hide = function () {
						this.eventEmitter.emit('hide');
					}),
					(S.prototype.show = function () {
						this.eventEmitter.emit('show');
					}),
					(S.prototype.setScrollTop = function (e) {
						this.getCurrentModeEditor().setScrollTop(e);
					}),
					(S.prototype.getScrollTop = function () {
						return this.getCurrentModeEditor().getScrollTop();
					}),
					(S.prototype.reset = function () {
						this.wwEditor.setModel([]), this.mdEditor.setMarkdown('');
					}),
					(S.prototype.getSelection = function () {
						return this.getCurrentModeEditor().getSelection();
					}),
					(S.prototype.setPlaceholder = function (e) {
						(this.placeholder = e),
							this.mdEditor.setPlaceholder(e),
							this.wwEditor.setPlaceholder(e);
					}),
					(S.prototype.getEditorElements = function () {
						return {
							mdEditor: this.mdEditor.getElement(),
							mdPreview: this.preview.getElement(),
							wwEditor: this.wwEditor.getElement()
						};
					}),
					(S.prototype.convertPosToMatchEditorMode = function (e, t, n) {
						void 0 === t && (t = e), void 0 === n && (n = this.mode);
						var r = this.mdEditor.view.state.doc,
							o = Array.isArray(e),
							i = Array.isArray(t),
							a = e,
							s = t;
						if (o !== i) throw new Error('Types of arguments must be same');
						return (
							'markdown' !== n || o || i
								? 'wysiwyg' === n && o && i && ((a = (n = qt(r, e, t))[0]), (s = n[1]))
								: ((a = (o = Ht(r, e, t))[0]), (s = o[1])),
							[a, s]
						);
					});
				a = S;
				var Kr = ah(326),
					Rp = ah.n(Kr),
					Pp =
						((Bp.prototype.walk = function () {
							var e = this.entering,
								t = this.current;
							return t
								? (e
										? t.firstChild
											? ((this.current = t.firstChild), (this.entering = !0))
											: (this.entering = !1)
										: t === this.root
											? (this.current = null)
											: t.next
												? ((this.current = t.next), (this.entering = !0))
												: ((this.current = t.parent), (this.entering = !1)),
									{ vnode: t, entering: e })
								: null;
						}),
						Bp);
				function Bp(e) {
					(this.current = e), (this.root = e), (this.entering = !0);
				}
				(Fp.prototype.walker = function () {
					return new Pp(this);
				}),
					(Fp.removalNodes = []);
				var Hp = Fp;
				function Fp(e, t, n) {
					(this.parent = null),
						(this.old = null),
						(this.firstChild = null),
						(this.next = null),
						(this.skip = !1),
						(this.type = e),
						(this.props = t),
						(this.children = n),
						(this.props.children = n),
						t.ref && ((this.ref = t.ref), delete t.ref),
						t.key && ((this.key = t.key), delete t.key);
				}
				function qp(e, t) {
					var n = e;
					Rp()(e) || null == e
						? (n = null)
						: (j()(e) || _()(e)) &&
							((e = String(e)), (n = new Hp('TEXT_NODE', { nodeValue: e }, []))),
						n && t.push(n);
				}
				var O = function (e) {
						for (
							var t,
								n,
								r = arguments,
								o = 1,
								i = '',
								a = '',
								s = [0],
								l = function (e) {
									1 === o && (e || (i = i.replace(/^\s*\n\s*|\s*\n\s*$/g, '')))
										? s.push(e ? r[e] : i)
										: 3 === o && (e || i)
											? ((s[1] = e ? r[e] : i), (o = 2))
											: 2 === o && '...' === i && e
												? (s[2] = ve(s[2] || {}, r[e]))
												: 2 === o && i && !e
													? ((s[2] = s[2] || {})[i] = !0)
													: 5 <= o &&
														(5 === o
															? (((s[2] = s[2] || {})[n] = e ? (i ? i + r[e] : r[e]) : i), (o = 6))
															: (e || i) && (s[2][n] += e ? i + r[e] : i)),
										(i = '');
								},
								c = 0;
							c < e.length;
							c++
						) {
							c && (1 === o && l(), l(c));
							for (var u = 0; u < e[c].length; u++)
								(t = e[c][u]),
									1 === o
										? '<' === t
											? (l(), (s = [s, '', null]), (o = 3))
											: (i += t)
										: 4 === o
											? (i = '--' === i && '>' === t ? ((o = 1), '') : t + i[0])
											: a
												? t === a
													? (a = '')
													: (i += t)
												: '"' === t || "'" === t
													? (a = t)
													: '>' === t
														? (l(), (o = 1))
														: o &&
															('=' === t
																? ((o = 5), (n = i), (i = ''))
																: '/' === t && (o < 5 || '>' === e[c][u + 1])
																	? (l(),
																		3 === o && (s = s[0]),
																		(s = (o = s)[0]).push(this.apply(null, o.slice(1))),
																		(o = 0))
																	: ' ' === t || '\t' === t || '\n' === t || '\r' === t
																		? (l(), (o = 2))
																		: (i += t)),
									3 === o && '!--' === i && ((o = 4), (s = s[0]));
						}
						return l(), 2 < s.length ? s.slice(1) : s[1];
					}.bind(function (e, t) {
						for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
						var o = [];
						return (
							n.forEach(function (e) {
								Array.isArray(e)
									? e.forEach(function (e) {
											qp(e, o);
										})
									: qp(e, o);
							}),
							new Hp(e, t || {}, o)
						);
					}),
					l = ah(73),
					jp = ah.n(l);
				function _p(n, r, o) {
					Object.keys(r).forEach(function (e) {
						var t;
						/^on/.test(e)
							? (o[e] && r[e] === o[e]) ||
								((t = e.slice(2).toLowerCase()), n.removeEventListener(t, r[e]))
							: 'children' === e ||
								o[e] ||
								(null == (t = n) ? void 0 : t.nodeType) === Node.TEXT_NODE ||
								n.removeAttribute(e);
					}),
						Up(n, r, o, function (e) {
							return !de(r[e], o[e]);
						});
				}
				var zp = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;
				function Up(o, i, a, s) {
					Object.keys(a).forEach(function (e) {
						var n, t, r;
						(s && !s(e)) ||
							(/^on/.test(e)
								? ((t = e.slice(2).toLowerCase()), o.addEventListener(t, a[e]))
								: 'nodeValue' === e
									? (o[e] = a[e])
									: 'style' === e && jp()(a[e])
										? ((n = o),
											(t = i[e]),
											(r = a[e]),
											t &&
												Object.keys(t).forEach(function (e) {
													n.style[e] = '';
												}),
											Object.keys(r).forEach(function (e) {
												var t = r[e];
												n.style[e] = _()(t) && !zp.test(e) ? t + 'px' : t;
											}))
										: 'children' !== e &&
											(!1 === a[e] ? o.removeAttribute(e) : o.setAttribute(e, a[e])));
					});
				}
				function Vp(e) {
					if ((Hp.removalNodes.forEach(Wp), e))
						for (var t, n, r = e.walker(); (t = r.walk()); )
							(e = t.vnode),
								t.entering
									? Wp(e)
									: At()(e.type) &&
										((t = e.component), !e.old && t.mounted && t.mounted(), e.old) &&
										t.updated &&
										((n = t.prevProps || {}), t.updated(n));
				}
				function $p(e) {
					for (var t = e.parent; !t.node; ) t = t.parent;
					return t.node;
				}
				function Wp(e) {
					if (e && e.parent) {
						if (
							(e.node &&
								((n = $p(e)),
								'A' === e.effect
									? n.appendChild(e.node)
									: 'U' === e.effect && _p(e.node, e.old.props, e.props)),
							'D' === e.effect)
						)
							for (var t, n, r = e.walker(); (t = r.walk()); )
								(e = t.vnode),
									t.entering ||
										(At()(e.type)
											? (t = e.component).beforeDestroy && t.beforeDestroy()
											: (function e(t, n) {
													t.node ? n.removeChild(t.node) : e(t.firstChild, n);
												})(e, (n = $p(e))));
						e.ref && (e.component ? e.ref(e.component) : e.node && e.ref(e.node));
					}
				}
				function Gp(e) {
					for (var t, n, r, o, i = e; e && !e.skip; )
						if (
							(At()(e.type)
								? ((t = e.type),
									(o = r = void 0),
									(r = (n = e).props),
									(((n = (o = n.component)
										? ((o.prevProps = o.props), (o.props = n.props), o)
										: new t(r)).vnode = e).component = n),
									(e.props.children = e.children = [n.render()]))
								: e.node ||
									(e.node =
										((o = void 0),
										'TEXT_NODE' === (t = e).type
											? (o = document.createTextNode(t.props.nodeValue))
											: Up((o = document.createElement(t.type)), {}, t.props),
										o)),
							Zp(e),
							e.firstChild)
						)
							e = e.firstChild;
						else {
							for (; e && e.parent && !e.next && (e = e.parent) !== i; );
							e = e.next;
						}
				}
				function Zp(o) {
					var e = o.children,
						i = o.old ? o.old.firstChild : null,
						a = null,
						t =
							(e.forEach(function (e, t) {
								r = e;
								var n,
									r = (n = i) && r && r.type === n.type && (!r.key || r.key === n.key);
								r &&
									((e.old = i),
									(e.parent = o),
									(e.node = i.node),
									(e.component = i.component),
									(e.effect = 'U')),
									e && !r && ((e.old = null), (e.parent = o), (e.node = null), (e.effect = 'A')),
									i && !r && (Hp.removalNodes.push(i), (i.effect = 'D')),
									(i = i && i.next),
									0 === t ? (o.firstChild = e) : e && (a.next = e),
									(a = e);
							}),
							K(e));
					if (!e.length) for (; i; ) Hp.removalNodes.push(i), (i.effect = 'D'), (i = i.next);
					for (; i && t; )
						i && t.old !== i && (Hp.removalNodes.push(i), (i.effect = 'D'), (i = i.next));
				}
				function Xp(e, t) {
					var n = new Hp(e.tagName.toLowerCase(), {}, [t]);
					return (
						(n.node = e),
						(Hp.removalNodes = []),
						Gp(n),
						Vp(n),
						function () {
							var e;
							((e = n.firstChild).effect = 'D'),
								(Hp.removalNodes = [e]),
								Vp(),
								(Hp.removalNodes = []);
						}
					);
				}
				Qp.prototype.setState = function (e) {
					var e = x(x({}, this.state), e);
					de(this.state, e) ||
						((this.state = e),
						((e = (e = this).vnode).effect = 'U'),
						(e.old = e).next && (e.next.skip = !0),
						(Hp.removalNodes = []),
						Gp(e),
						Vp(e),
						e.next && (e.next.skip = !1));
				};
				var Kp = Qp;
				function Qp(e) {
					(this.props = e), (this.state = {}), (this.refs = {});
				}
				r(td, (Yp = Kp)),
					(td.prototype.show = function () {
						this.setState({ hide: !1 });
					}),
					(td.prototype.hide = function () {
						this.setState({ hide: !0 });
					}),
					(td.prototype.render = function () {
						var e = this.props,
							t = e.editorType,
							n = e.eventEmitter;
						return O(
							(Jp =
								Jp ||
								p(
									[
										'\n      <div class="',
										'" style="display: ',
										'">\n        <div\n          class="tab-item',
										'"\n          onClick=',
										'\n        >\n          ',
										'\n        </div>\n        <div\n          class="tab-item',
										'"\n          onClick=',
										'\n        >\n          ',
										'\n        </div>\n      </div>\n    '
									],
									[
										'\n      <div class="',
										'" style="display: ',
										'">\n        <div\n          class="tab-item',
										'"\n          onClick=',
										'\n        >\n          ',
										'\n        </div>\n        <div\n          class="tab-item',
										'"\n          onClick=',
										'\n        >\n          ',
										'\n        </div>\n      </div>\n    '
									]
								)),
							d('mode-switch'),
							this.state.hide ? 'none' : 'block',
							'markdown' === t ? ' active' : '',
							function () {
								n.emit('needChangeMode', 'markdown');
							},
							L.get('Markdown'),
							'wysiwyg' === t ? ' active' : '',
							function () {
								n.emit('needChangeMode', 'wysiwyg');
							},
							L.get('WYSIWYG')
						);
					});
				var Yp,
					Jp,
					ed = td;
				function td(e) {
					e = Yp.call(this, e) || this;
					return (e.state = { hide: !1 }), e;
				}
				var co = ah(423),
					nd = ah.n(co),
					rd =
						'undefined' != typeof Map
							? Map
							: (Object.defineProperty(od.prototype, 'size', {
									get: function () {
										return this.__entries__.length;
									},
									enumerable: !0,
									configurable: !0
								}),
								(od.prototype.get = function (e) {
									(e = id(this.__entries__, e)), (e = this.__entries__[e]);
									return e && e[1];
								}),
								(od.prototype.set = function (e, t) {
									var n = id(this.__entries__, e);
									~n ? (this.__entries__[n][1] = t) : this.__entries__.push([e, t]);
								}),
								(od.prototype.delete = function (e) {
									var t = this.__entries__,
										e = id(t, e);
									~e && t.splice(e, 1);
								}),
								(od.prototype.has = function (e) {
									return !!~id(this.__entries__, e);
								}),
								(od.prototype.clear = function () {
									this.__entries__.splice(0);
								}),
								(od.prototype.forEach = function (e, t) {
									void 0 === t && (t = null);
									for (var n = 0, r = this.__entries__; n < r.length; n++) {
										var o = r[n];
										e.call(t, o[1], o[0]);
									}
								}),
								od);
				function od() {
					this.__entries__ = [];
				}
				function id(e, n) {
					var r = -1;
					return (
						e.some(function (e, t) {
							return e[0] === n && ((r = t), !0);
						}),
						r
					);
				}
				var ad =
						'undefined' != typeof window &&
						'undefined' != typeof document &&
						window.document === document,
					sd =
						void 0 !== ah.g && ah.g.Math === Math
							? ah.g
							: 'undefined' != typeof self && self.Math === Math
								? self
								: 'undefined' != typeof window && window.Math === Math
									? window
									: Function('return this')(),
					ld =
						'function' == typeof requestAnimationFrame
							? requestAnimationFrame.bind(sd)
							: function (e) {
									return setTimeout(function () {
										return e(Date.now());
									}, 1e3 / 60);
								},
					cd = 2;
				var ud = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'],
					pd = 'undefined' != typeof MutationObserver,
					dd =
						((fd.prototype.addObserver = function (e) {
							~this.observers_.indexOf(e) || this.observers_.push(e),
								this.connected_ || this.connect_();
						}),
						(fd.prototype.removeObserver = function (e) {
							var t = this.observers_,
								e = t.indexOf(e);
							~e && t.splice(e, 1), !t.length && this.connected_ && this.disconnect_();
						}),
						(fd.prototype.refresh = function () {
							this.updateObservers_() && this.refresh();
						}),
						(fd.prototype.updateObservers_ = function () {
							var e = this.observers_.filter(function (e) {
								return e.gatherActive(), e.hasActive();
							});
							return (
								e.forEach(function (e) {
									return e.broadcastActive();
								}),
								0 < e.length
							);
						}),
						(fd.prototype.connect_ = function () {
							ad &&
								!this.connected_ &&
								(document.addEventListener('transitionend', this.onTransitionEnd_),
								window.addEventListener('resize', this.refresh),
								pd
									? ((this.mutationsObserver_ = new MutationObserver(this.refresh)),
										this.mutationsObserver_.observe(document, {
											attributes: !0,
											childList: !0,
											characterData: !0,
											subtree: !0
										}))
									: (document.addEventListener('DOMSubtreeModified', this.refresh),
										(this.mutationEventsAdded_ = !0)),
								(this.connected_ = !0));
						}),
						(fd.prototype.disconnect_ = function () {
							ad &&
								this.connected_ &&
								(document.removeEventListener('transitionend', this.onTransitionEnd_),
								window.removeEventListener('resize', this.refresh),
								this.mutationsObserver_ && this.mutationsObserver_.disconnect(),
								this.mutationEventsAdded_ &&
									document.removeEventListener('DOMSubtreeModified', this.refresh),
								(this.mutationsObserver_ = null),
								(this.mutationEventsAdded_ = !1),
								(this.connected_ = !1));
						}),
						(fd.prototype.onTransitionEnd_ = function (e) {
							var e = e.propertyName,
								t = void 0 === e ? '' : e;
							ud.some(function (e) {
								return !!~t.indexOf(e);
							}) && this.refresh();
						}),
						(fd.getInstance = function () {
							return this.instance_ || (this.instance_ = new fd()), this.instance_;
						}),
						(fd.instance_ = null),
						fd);
				function fd() {
					function e() {
						i && ((i = !1), r()), a && n();
					}
					function t() {
						ld(e);
					}
					function n() {
						var e = Date.now();
						if (i) {
							if (e - s < cd) return;
							a = !0;
						} else (a = !(i = !0)), setTimeout(t, o);
						s = e;
					}
					var r, o, i, a, s;
					(this.connected_ = !1),
						(this.mutationEventsAdded_ = !1),
						(this.mutationsObserver_ = null),
						(this.observers_ = []),
						(this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)),
						(this.refresh = ((r = this.refresh.bind(this)), (a = i = !(o = 20)), (s = 0), n));
				}
				var hd = function (e, t) {
						for (var n = 0, r = Object.keys(t); n < r.length; n++) {
							var o = r[n];
							Object.defineProperty(e, o, {
								value: t[o],
								enumerable: !1,
								writable: !1,
								configurable: !0
							});
						}
						return e;
					},
					md = function (e) {
						return (e && e.ownerDocument && e.ownerDocument.defaultView) || sd;
					},
					gd = xd(0, 0, 0, 0);
				function vd(e) {
					return parseFloat(e) || 0;
				}
				function yd(n) {
					for (var e = [], t = 1; t < arguments.length; t++) e[t - 1] = arguments[t];
					return e.reduce(function (e, t) {
						return e + vd(n['border-' + t + '-width']);
					}, 0);
				}
				function bd(e) {
					var t,
						n,
						r,
						o,
						i,
						a,
						s = e.clientWidth,
						l = e.clientHeight;
					return s || l
						? ((n =
								(t = (function (e) {
									for (
										var t = {}, n = 0, r = ['top', 'right', 'bottom', 'left'];
										n < r.length;
										n++
									) {
										var o = r[n],
											i = e['padding-' + o];
										t[o] = vd(i);
									}
									return t;
								})((a = md(e).getComputedStyle(e)))).left + t.right),
							(r = t.top + t.bottom),
							(o = vd(a.width)),
							(i = vd(a.height)),
							'border-box' === a.boxSizing &&
								(Math.round(o + n) !== s && (o -= yd(a, 'left', 'right') + n),
								Math.round(i + r) !== l) &&
								(i -= yd(a, 'top', 'bottom') + r),
							e !== md(e).document.documentElement &&
								((a = Math.round(o + n) - s),
								(e = Math.round(i + r) - l),
								1 !== Math.abs(a) && (o -= a),
								1 !== Math.abs(e)) &&
								(i -= e),
							xd(t.left, t.top, o, i))
						: gd;
				}
				var wd =
					'undefined' != typeof SVGGraphicsElement
						? function (e) {
								return e instanceof md(e).SVGGraphicsElement;
							}
						: function (e) {
								return e instanceof md(e).SVGElement && 'function' == typeof e.getBBox;
							};
				function kd(e) {
					var t;
					return ad ? (wd(e) ? xd(0, 0, (t = (t = e).getBBox()).width, t.height) : bd(e)) : gd;
				}
				function xd(e, t, n, r) {
					return { x: e, y: t, width: n, height: r };
				}
				(Td.prototype.isActive = function () {
					var e = kd(this.target);
					return (
						(this.contentRect_ = e).width !== this.broadcastWidth ||
						e.height !== this.broadcastHeight
					);
				}),
					(Td.prototype.broadcastRect = function () {
						var e = this.contentRect_;
						return (this.broadcastWidth = e.width), (this.broadcastHeight = e.height), e;
					});
				var Cd = Td;
				function Td(e) {
					(this.broadcastWidth = 0),
						(this.broadcastHeight = 0),
						(this.contentRect_ = xd(0, 0, 0, 0)),
						(this.target = e);
				}
				var Ed = function (e, t) {
						(n = (t = t).x),
							(r = t.y),
							(i = t.width),
							(t = t.height),
							(o = 'undefined' != typeof DOMRectReadOnly ? DOMRectReadOnly : Object),
							(o = Object.create(o.prototype)),
							hd(o, {
								x: n,
								y: r,
								width: i,
								height: t,
								top: r,
								right: n + i,
								bottom: t + r,
								left: n
							});
						var n,
							r,
							o,
							i = o;
						hd(this, { target: e, contentRect: i });
					},
					Ld =
						((Md.prototype.observe = function (e) {
							if (!arguments.length)
								throw new TypeError('1 argument required, but only 0 present.');
							if ('undefined' != typeof Element && Element instanceof Object) {
								if (!(e instanceof md(e).Element))
									throw new TypeError('parameter 1 is not of type "Element".');
								var t = this.observations_;
								t.has(e) ||
									(t.set(e, new Cd(e)),
									this.controller_.addObserver(this),
									this.controller_.refresh());
							}
						}),
						(Md.prototype.unobserve = function (e) {
							if (!arguments.length)
								throw new TypeError('1 argument required, but only 0 present.');
							if ('undefined' != typeof Element && Element instanceof Object) {
								if (!(e instanceof md(e).Element))
									throw new TypeError('parameter 1 is not of type "Element".');
								var t = this.observations_;
								t.has(e) && (t.delete(e), t.size || this.controller_.removeObserver(this));
							}
						}),
						(Md.prototype.disconnect = function () {
							this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
						}),
						(Md.prototype.gatherActive = function () {
							var t = this;
							this.clearActive(),
								this.observations_.forEach(function (e) {
									e.isActive() && t.activeObservations_.push(e);
								});
						}),
						(Md.prototype.broadcastActive = function () {
							var e, t;
							this.hasActive() &&
								((e = this.callbackCtx_),
								(t = this.activeObservations_.map(function (e) {
									return new Ed(e.target, e.broadcastRect());
								})),
								this.callback_.call(e, t, e),
								this.clearActive());
						}),
						(Md.prototype.clearActive = function () {
							this.activeObservations_.splice(0);
						}),
						(Md.prototype.hasActive = function () {
							return 0 < this.activeObservations_.length;
						}),
						Md);
				function Md(e, t, n) {
					if (
						((this.activeObservations_ = []),
						(this.observations_ = new rd()),
						'function' != typeof e)
					)
						throw new TypeError('The callback provided as parameter 1 is not a function.');
					(this.callback_ = e), (this.controller_ = t), (this.callbackCtx_ = n);
				}
				var Nd = new ('undefined' != typeof WeakMap ? WeakMap : rd)(),
					Ad = function e(t) {
						if (!(this instanceof e)) throw new TypeError('Cannot call a class as a function.');
						if (!arguments.length) throw new TypeError('1 argument required, but only 0 present.');
						var n = dd.getInstance(),
							t = new Ld(t, n, this);
						Nd.set(this, t);
					};
				['observe', 'unobserve', 'disconnect'].forEach(function (t) {
					Ad.prototype[t] = function () {
						var e;
						return (e = Nd.get(this))[t].apply(e, arguments);
					};
				});
				var Dd,
					Sd,
					Od,
					Id = void 0 !== sd.ResizeObserver ? sd.ResizeObserver : Ad,
					Rd =
						(r(Pd, (Dd = Kp)),
						(Pd.prototype.execCommand = function (e) {
							e = dt(e.target, 'li');
							this.props.execCommand('heading', { level: Number(e.getAttribute('data-level')) });
						}),
						(Pd.prototype.render = function () {
							var t = this;
							return O(
								(Od =
									Od ||
									p(
										[
											'\n      <ul\n        onClick=',
											'\n        aria-role="menu"\n        aria-label="',
											'"\n      >\n        ',
											'\n        <li data-type="Paragraph" aria-role="menuitem">\n          <div>',
											'</div>\n        </li>\n      </ul>\n    '
										],
										[
											'\n      <ul\n        onClick=',
											'\n        aria-role="menu"\n        aria-label="',
											'"\n      >\n        ',
											'\n        <li data-type="Paragraph" aria-role="menuitem">\n          <div>',
											'</div>\n        </li>\n      </ul>\n    '
										]
									)),
								function (e) {
									return t.execCommand(e);
								},
								L.get('Headings'),
								[1, 2, 3, 4, 5, 6].map(function (e) {
									return O(
										(Sd =
											Sd ||
											p(
												[
													'\n              <li data-level="',
													'" data-type="Heading" aria-role="menuitem">\n                <',
													'>',
													' ',
													'</$>\n              </li>\n            '
												],
												[
													'\n              <li data-level="',
													'" data-type="Heading" aria-role="menuitem">\n                <',
													'>',
													' ',
													'</$>\n              </li>\n            '
												]
											)),
										e,
										'h' + e,
										L.get('Heading'),
										e
									);
								}),
								L.get('Paragraph')
							);
						}),
						Pd);
				function Pd() {
					return (null !== Dd && Dd.apply(this, arguments)) || this;
				}
				r(jd, (Bd = Kp)),
					(jd.prototype.toggleTab = function (e, t) {
						this.props.onClick(e, t);
					}),
					(jd.prototype.render = function () {
						var r = this;
						return O(
							(Fd =
								Fd ||
								p(
									[
										'\n      <div class="',
										'" aria-role="tabpanel">\n        ',
										'\n      </div>\n    '
									],
									[
										'\n      <div class="',
										'" aria-role="tabpanel">\n        ',
										'\n      </div>\n    '
									]
								)),
							d('tabs'),
							this.props.tabs.map(function (e) {
								var t = e.name,
									e = e.text,
									n = r.props.activeTab === t;
								return O(
									(Hd =
										Hd ||
										p(
											[
												'\n            <div\n              class="tab-item',
												'"\n              onClick=',
												'\n              aria-role="tab"\n              aria-label="',
												'"\n              aria-selected="',
												'"\n              tabindex="',
												'"\n            >\n              ',
												'\n            </div>\n          '
											],
											[
												'\n            <div\n              class="tab-item',
												'"\n              onClick=',
												'\n              aria-role="tab"\n              aria-label="',
												'"\n              aria-selected="',
												'"\n              tabindex="',
												'"\n            >\n              ',
												'\n            </div>\n          '
											]
										)),
									n ? ' active' : '',
									function (e) {
										return r.toggleTab(e, t);
									},
									L.get(e),
									n ? 'true' : 'false',
									n ? '0' : '-1',
									L.get(e)
								);
							})
						);
					});
				var Bd,
					Hd,
					Fd,
					qd = jd;
				function jd() {
					return (null !== Bd && Bd.apply(this, arguments)) || this;
				}
				r(Vd, (_d = Kp)),
					(Vd.prototype.emitAddImageBlob = function () {
						var n = this,
							e = this.refs.file.files,
							r = this.refs.altText,
							t = ' wrong';
						null != e &&
							e.length &&
							((t = ''),
							(e = e.item(0)),
							this.props.eventEmitter.emit(
								'addImageBlobHook',
								e,
								function (e, t) {
									return n.props.execCommand('addImage', { imageUrl: e, altText: t || r.value });
								},
								'ui'
							)),
							this.setState({ fileNameElClassName: t });
					}),
					(Vd.prototype.emitAddImage = function () {
						var e = this.refs.url,
							t = this.refs.altText,
							n = e.value,
							t = t.value || 'image';
						q()(e, 'wrong'),
							n.length
								? n && this.props.execCommand('addImage', { imageUrl: n, altText: t })
								: F()(e, 'wrong');
					}),
					(Vd.prototype.preventSelectStart = function (e) {
						e.preventDefault();
					}),
					(Vd.prototype.updated = function () {
						this.props.show || this.initialize();
					}),
					(Vd.prototype.render = function () {
						var t = this,
							e = this.state,
							n = e.activeTab,
							r = e.file,
							e = e.fileNameElClassName;
						return O(
							(zd =
								zd ||
								p(
									[
										'\n      <div aria-label="',
										'">\n        <',
										' tabs=',
										' activeTab=',
										' onClick=',
										' />\n        <div style="display:',
										'">\n          <label for="toastuiImageUrlInput">',
										'</label>\n          <input\n            id="toastuiImageUrlInput"\n            type="text"\n            ref=',
										'\n          />\n        </div>\n        <div style="display:',
										';position: relative;">\n          <label for="toastuiImageFileInput">',
										'</label>\n          <span\n            class="',
										'',
										'"\n            onClick=',
										'\n            onSelectstart=',
										'\n          >\n            ',
										'\n          </span>\n          <button\n            type="button"\n            class="',
										'"\n            onClick=',
										'\n          >\n            ',
										'\n          </button>\n          <input\n            id="toastuiImageFileInput"\n            type="file"\n            accept="image/*"\n            onChange=',
										'\n            ref=',
										'\n          />\n        </div>\n        <label for="toastuiAltTextInput">',
										'</label>\n        <input\n          id="toastuiAltTextInput"\n          type="text"\n          ref=',
										'\n        />\n        <div class="',
										'">\n          <button type="button" class="',
										'" onClick=',
										'>\n            ',
										'\n          </button>\n          <button type="button" class="',
										'" onClick=',
										'>\n            ',
										'\n          </button>\n        </div>\n      </div>\n    '
									],
									[
										'\n      <div aria-label="',
										'">\n        <',
										' tabs=',
										' activeTab=',
										' onClick=',
										' />\n        <div style="display:',
										'">\n          <label for="toastuiImageUrlInput">',
										'</label>\n          <input\n            id="toastuiImageUrlInput"\n            type="text"\n            ref=',
										'\n          />\n        </div>\n        <div style="display:',
										';position: relative;">\n          <label for="toastuiImageFileInput">',
										'</label>\n          <span\n            class="',
										'',
										'"\n            onClick=',
										'\n            onSelectstart=',
										'\n          >\n            ',
										'\n          </span>\n          <button\n            type="button"\n            class="',
										'"\n            onClick=',
										'\n          >\n            ',
										'\n          </button>\n          <input\n            id="toastuiImageFileInput"\n            type="file"\n            accept="image/*"\n            onChange=',
										'\n            ref=',
										'\n          />\n        </div>\n        <label for="toastuiAltTextInput">',
										'</label>\n        <input\n          id="toastuiAltTextInput"\n          type="text"\n          ref=',
										'\n        />\n        <div class="',
										'">\n          <button type="button" class="',
										'" onClick=',
										'>\n            ',
										'\n          </button>\n          <button type="button" class="',
										'" onClick=',
										'>\n            ',
										'\n          </button>\n        </div>\n      </div>\n    '
									]
								)),
							L.get('Insert image'),
							qd,
							this.tabs,
							n,
							this.toggleTab,
							'url' === n ? 'block' : 'none',
							L.get('Image URL'),
							function (e) {
								return (t.refs.url = e);
							},
							'file' === n ? 'block' : 'none',
							L.get('Select image file'),
							d('file-name'),
							r ? ' has-file' : e,
							this.showFileSelectBox,
							this.preventSelectStart,
							r ? r.name : L.get('No file'),
							d('file-select-button'),
							this.showFileSelectBox,
							L.get('Choose a file'),
							this.changeFile,
							function (e) {
								return (t.refs.file = e);
							},
							L.get('Description'),
							function (e) {
								return (t.refs.altText = e);
							},
							d('button-container'),
							d('close-button'),
							this.props.hidePopup,
							L.get('Cancel'),
							d('ok-button'),
							this.execCommand,
							L.get('OK')
						);
					});
				var _d,
					zd,
					Ud = Vd;
				function Vd(e) {
					var n = _d.call(this, e) || this;
					return (
						(n.initialize = function (e) {
							void 0 === e && (e = 'file');
							var t = n.refs.url;
							(t.value = ''),
								(n.refs.altText.value = ''),
								(n.refs.file.value = ''),
								q()(t, 'wrong'),
								n.setState({ activeTab: e, file: null, fileNameElClassName: '' });
						}),
						(n.execCommand = function () {
							'file' === n.state.activeTab ? n.emitAddImageBlob() : n.emitAddImage();
						}),
						(n.toggleTab = function (e, t) {
							t !== n.state.activeTab && n.initialize(t);
						}),
						(n.showFileSelectBox = function () {
							n.refs.file.click();
						}),
						(n.changeFile = function (e) {
							e = e.target.files;
							null != e && e.length && n.setState({ file: e[0] });
						}),
						(n.state = { activeTab: 'file', file: null, fileNameElClassName: '' }),
						(n.tabs = [
							{ name: 'file', text: 'File' },
							{ name: 'url', text: 'URL' }
						]),
						n
					);
				}
				r(Zd, ($d = Kp)),
					(Zd.prototype.initialize = function () {
						var e = this.props.initialValues,
							t = e.linkUrl,
							e = e.linkText,
							n = this.refs.url,
							r = this.refs.text;
						q()(n, 'wrong'),
							q()(r, 'wrong', 'disabled'),
							r.removeAttribute('disabled'),
							t && (F()(r, 'disabled'), r.setAttribute('disabled', 'disabled')),
							(n.value = t || ''),
							(r.value = e || '');
					}),
					(Zd.prototype.mounted = function () {
						this.initialize();
					}),
					(Zd.prototype.updated = function (e) {
						!e.show && this.props.show && this.initialize();
					}),
					(Zd.prototype.render = function () {
						var t = this;
						return O(
							(Wd =
								Wd ||
								p(
									[
										'\n      <div aria-label="',
										'">\n        <label for="toastuiLinkUrlInput">',
										'</label>\n        <input\n          id="toastuiLinkUrlInput"\n          type="text"\n          ref=',
										'\n        />\n        <label for="toastuiLinkTextInput">',
										'</label>\n        <input\n          id="toastuiLinkTextInput"\n          type="text"\n          ref=',
										'\n        />\n        <div class="',
										'">\n          <button type="button" class="',
										'" onClick=',
										'>\n            ',
										'\n          </button>\n          <button type="button" class="',
										'" onClick=',
										'>\n            ',
										'\n          </button>\n        </div>\n      </div>\n    '
									],
									[
										'\n      <div aria-label="',
										'">\n        <label for="toastuiLinkUrlInput">',
										'</label>\n        <input\n          id="toastuiLinkUrlInput"\n          type="text"\n          ref=',
										'\n        />\n        <label for="toastuiLinkTextInput">',
										'</label>\n        <input\n          id="toastuiLinkTextInput"\n          type="text"\n          ref=',
										'\n        />\n        <div class="',
										'">\n          <button type="button" class="',
										'" onClick=',
										'>\n            ',
										'\n          </button>\n          <button type="button" class="',
										'" onClick=',
										'>\n            ',
										'\n          </button>\n        </div>\n      </div>\n    '
									]
								)),
							L.get('Insert link'),
							L.get('URL'),
							function (e) {
								return (t.refs.url = e);
							},
							L.get('Link text'),
							function (e) {
								return (t.refs.text = e);
							},
							d('button-container'),
							d('close-button'),
							this.props.hidePopup,
							L.get('Cancel'),
							d('ok-button'),
							this.execCommand,
							L.get('OK')
						);
					});
				var $d,
					Wd,
					Gd = Zd;
				function Zd() {
					var n = (null !== $d && $d.apply(this, arguments)) || this;
					return (
						(n.execCommand = function () {
							var e = n.refs.url,
								t = n.refs.text;
							q()(e, 'wrong'),
								q()(t, 'wrong'),
								e.value.length < 1
									? F()(e, 'wrong')
									: z()(n.props.initialValues.linkUrl) && t.value.length < 1
										? F()(t, 'wrong')
										: n.props.execCommand('addLink', { linkUrl: e.value, linkText: t.value });
						}),
						n
					);
				}
				r(tf, (Xd = Kp)),
					(tf.prototype.getDescription = function () {
						return -1 === this.state.colIdx
							? ''
							: this.state.colIdx + 1 + ' x ' + (this.state.rowIdx + 1);
					}),
					(tf.prototype.getBoundByRange = function (e, t) {
						return { width: 20 * (e + 1), height: 20 * (t + 1) };
					}),
					(tf.prototype.getRangeByOffset = function (e, t) {
						return { colIdx: Math.floor(e / 20), rowIdx: Math.floor(t / 20) };
					}),
					(tf.prototype.getTableRange = function () {
						var e = this.state,
							t = e.colIdx,
							e = e.rowIdx,
							n = Math.max(t, 5),
							r = Math.max(e, 5);
						return (
							5 <= t && n < 9 && (n += 1),
							5 <= e && r < 14 && (r += 1),
							{ colIdx: n + 1, rowIdx: r + 1 }
						);
					}),
					(tf.prototype.getSelectionAreaBound = function () {
						var e = this.getBoundByRange(this.state.colIdx, this.state.rowIdx),
							t = e.width,
							e = e.height;
						return t || e ? { width: t - 1, height: e - 1, display: 'block' } : { display: 'none' };
					}),
					(tf.prototype.getSelectionRangeByOffset = function (e, t) {
						e = this.getRangeByOffset(e, t);
						return (
							(e.rowIdx = Math.min(Math.max(e.rowIdx, 1), 14)),
							(e.colIdx = Math.min(Math.max(e.colIdx, 1), 9)),
							e
						);
					}),
					(tf.prototype.updated = function () {
						var e, t;
						this.props.show
							? -1 === this.state.colIdx &&
								-1 === this.state.rowIdx &&
								((e = (t = this.refs.tableEl.getBoundingClientRect()).left),
								(t = t.top),
								(this.offsetRect = { left: window.pageXOffset + e, top: window.pageYOffset + t }))
							: this.setState({ colIdx: -1, rowIdx: -1 });
					}),
					(tf.prototype.createTableArea = function (e) {
						for (var t = e.colIdx, n = e.rowIdx, r = [], o = 0; o < n; o += 1) {
							for (var i = [], a = 0; a < t; a += 1) {
								var s = d('table-cell') + (0 < o ? '' : ' header');
								i.push(
									O((Kd = Kd || p(['<div class="', '"></div>'], ['<div class="', '"></div>'])), s)
								);
							}
							r.push(
								O(
									(Qd =
										Qd || p(['<div class="', '">', '</div>'], ['<div class="', '">', '</div>'])),
									d('table-row'),
									i
								)
							);
						}
						return O(
							(Yd = Yd || p(['<div class="', '">', '</div>'], ['<div class="', '">', '</div>'])),
							d('table'),
							r
						);
					}),
					(tf.prototype.render = function () {
						var t = this,
							e = this.getTableRange(),
							n = this.getSelectionAreaBound();
						return O(
							(Jd =
								Jd ||
								p(
									[
										'\n      <div aria-label="',
										'">\n        <div\n          class="',
										'"\n          ref=',
										'\n          onMousemove=',
										'\n          onClick=',
										'\n        >\n          ',
										'\n          <div class="',
										'" style=',
										'></div>\n        </div>\n        <p class="',
										'">',
										'</p>\n      </div>\n    '
									],
									[
										'\n      <div aria-label="',
										'">\n        <div\n          class="',
										'"\n          ref=',
										'\n          onMousemove=',
										'\n          onClick=',
										'\n        >\n          ',
										'\n          <div class="',
										'" style=',
										'></div>\n        </div>\n        <p class="',
										'">',
										'</p>\n      </div>\n    '
									]
								)),
							L.get('Insert table'),
							d('table-selection'),
							function (e) {
								return (t.refs.tableEl = e);
							},
							this.extendSelectionRange,
							this.execCommand,
							this.createTableArea(e),
							d('table-selection-layer'),
							n,
							d('table-description'),
							this.getDescription()
						);
					});
				var Xd,
					Kd,
					Qd,
					Yd,
					Jd,
					ef = tf;
				function tf(e) {
					var n = Xd.call(this, e) || this;
					return (
						(n.extendSelectionRange = function (e) {
							var t = e.pageX,
								e = e.pageY,
								t = t - n.offsetRect.left,
								e = e - n.offsetRect.top,
								t = n.getSelectionRangeByOffset(t, e);
							n.setState(x({}, t));
						}),
						(n.execCommand = function () {
							n.props.execCommand('addTable', {
								rowCount: n.state.rowIdx + 1,
								columnCount: n.state.colIdx + 1
							});
						}),
						(n.state = { rowIdx: -1, colIdx: -1 }),
						n
					);
				}
				r(pf, (nf = Kp)),
					(pf.prototype.mounted = function () {
						this.refs.el.appendChild(this.props.body);
					}),
					(pf.prototype.updated = function (e) {
						this.refs.el.replaceChild(this.props.body, e.body);
					}),
					(pf.prototype.render = function () {
						var t = this;
						return O(
							(rf = rf || p(['<div ref=', '></div>'], ['<div ref=', '></div>'])),
							function (e) {
								return (t.refs.el = e);
							}
						);
					});
				var nf,
					rf,
					of,
					af,
					sf,
					lf,
					cf,
					uf = pf;
				function pf() {
					return (null !== nf && nf.apply(this, arguments)) || this;
				}
				function df(e) {
					if (j()(e)) {
						var t;
						switch (e) {
							case 'heading':
								t = {
									name: 'heading',
									className: 'heading',
									tooltip: L.get('Headings'),
									state: 'heading'
								};
								break;
							case 'bold':
								t = {
									name: 'bold',
									className: 'bold',
									command: 'bold',
									tooltip: L.get('Bold'),
									state: 'strong'
								};
								break;
							case 'italic':
								t = {
									name: 'italic',
									className: 'italic',
									command: 'italic',
									tooltip: L.get('Italic'),
									state: 'emph'
								};
								break;
							case 'strike':
								t = {
									name: 'strike',
									className: 'strike',
									command: 'strike',
									tooltip: L.get('Strike'),
									state: 'strike'
								};
								break;
							case 'hr':
								t = {
									name: 'hr',
									className: 'hrline',
									command: 'hr',
									tooltip: L.get('Line'),
									state: 'thematicBreak'
								};
								break;
							case 'quote':
								t = {
									name: 'quote',
									className: 'quote',
									command: 'blockQuote',
									tooltip: L.get('Blockquote'),
									state: 'blockQuote'
								};
								break;
							case 'ul':
								t = {
									name: 'ul',
									className: 'bullet-list',
									command: 'bulletList',
									tooltip: L.get('Unordered list'),
									state: 'bulletList'
								};
								break;
							case 'ol':
								t = {
									name: 'ol',
									className: 'ordered-list',
									command: 'orderedList',
									tooltip: L.get('Ordered list'),
									state: 'orderedList'
								};
								break;
							case 'task':
								t = {
									name: 'task',
									className: 'task-list',
									command: 'taskList',
									tooltip: L.get('Task'),
									state: 'taskList'
								};
								break;
							case 'table':
								t = {
									name: 'table',
									className: 'table',
									tooltip: L.get('Insert table'),
									state: 'table'
								};
								break;
							case 'image':
								t = { name: 'image', className: 'image', tooltip: L.get('Insert image') };
								break;
							case 'link':
								t = { name: 'link', className: 'link', tooltip: L.get('Insert link') };
								break;
							case 'code':
								t = {
									name: 'code',
									className: 'code',
									command: 'code',
									tooltip: L.get('Code'),
									state: 'code'
								};
								break;
							case 'codeblock':
								t = {
									name: 'codeblock',
									className: 'codeblock',
									command: 'codeBlock',
									tooltip: L.get('Insert CodeBlock'),
									state: 'codeBlock'
								};
								break;
							case 'indent':
								t = {
									name: 'indent',
									className: 'indent',
									command: 'indent',
									tooltip: L.get('Indent'),
									state: 'indent'
								};
								break;
							case 'outdent':
								t = {
									name: 'outdent',
									className: 'outdent',
									command: 'outdent',
									tooltip: L.get('Outdent'),
									state: 'outdent'
								};
								break;
							case 'scrollSync':
								t = (function () {
									var n = document.createElement('label'),
										e = document.createElement('input'),
										t = document.createElement('span');
									(n.className = 'scroll-sync active'),
										(e.type = 'checkbox'),
										(e.checked = !0),
										(t.className = 'switch');
									return (
										n.appendChild(e),
										n.appendChild(t),
										{
											name: 'scrollSync',
											el: n,
											onMounted: function (t) {
												return e.addEventListener('change', function (e) {
													e = e.target.checked;
													(e ? F : q)()(n, 'active'), t('toggleScrollSync', { active: e });
												});
											}
										}
									);
								})();
								break;
							case 'more':
								t = { name: 'more', className: 'more', tooltip: L.get('More') };
						}
						return 'scrollSync' !== t.name && (t.className += ' ' + d('toolbar-icons')), t;
					}
					return e;
				}
				function ff(e, t) {
					var n = t.el,
						r = t.pos,
						o = t.popup,
						i = t.initialValues;
					switch (e) {
						case 'heading':
							return {
								render: function (e) {
									return O((of = of || p(['<', ' ...', ' />'], ['<', ' ...', ' />'])), Rd, e);
								},
								className: d('popup-add-heading'),
								fromEl: n,
								pos: r
							};
						case 'link':
							return {
								render: function (e) {
									return O((af = af || p(['<', ' ...', ' />'], ['<', ' ...', ' />'])), Gd, e);
								},
								className: d('popup-add-link'),
								fromEl: n,
								pos: r,
								initialValues: i
							};
						case 'image':
							return {
								render: function (e) {
									return O((sf = sf || p(['<', ' ...', ' />'], ['<', ' ...', ' />'])), Ud, e);
								},
								className: d('popup-add-image'),
								fromEl: n,
								pos: r
							};
						case 'table':
							return {
								render: function (e) {
									return O((lf = lf || p(['<', ' ...', ' />'], ['<', ' ...', ' />'])), ef, e);
								},
								className: d('popup-add-table'),
								fromEl: n,
								pos: r
							};
						case 'customPopupBody':
							return o
								? x(
										{
											render: function (e) {
												return O(
													(cf =
														cf ||
														p(['<', ' ...', ' body=', ' />'], ['<', ' ...', ' body=', ' />'])),
													uf,
													e,
													o.body
												);
											},
											fromEl: n,
											pos: r
										},
										o
									)
								: null;
						default:
							return null;
					}
				}
				function hf(e) {
					e.hidden =
						e.length ===
						e.filter(function (e) {
							return e.hidden;
						}).length;
				}
				function mf(e, n) {
					return e.reduce(function (e, t) {
						e.push(
							t.map(function (e) {
								return ((e = df(e)).hidden = 'scrollSync' === e.name && n), e;
							})
						);
						t = e[(e.length || 1) - 1];
						return t && hf(t), e;
					}, []);
				}
				r(bf, (gf = Kp)),
					(bf.prototype.mounted = function () {
						document.addEventListener('mousedown', this.handleMousedown),
							this.props.eventEmitter.listen('closePopup', this.props.hidePopup);
					}),
					(bf.prototype.beforeDestroy = function () {
						document.removeEventListener('mousedown', this.handleMousedown);
					}),
					(bf.prototype.updated = function (e) {
						var t = this.props,
							n = t.show,
							t = t.info;
						n &&
							t.pos &&
							e.show !== n &&
							((e = x({}, t.pos)),
							(n = this.refs.el.offsetWidth),
							(t = dt(this.refs.el, '.' + d('toolbar')).offsetWidth),
							e.left + n >= t && (e.left = t - n - 20),
							de(this.state.popupPos, e) || this.setState({ popupPos: e }));
					}),
					(bf.prototype.render = function () {
						var t = this,
							e = this.props,
							n = e.info,
							r = e.show,
							o = e.hidePopup,
							i = e.eventEmitter,
							e = e.execCommand,
							n = n || {},
							a = n.className,
							a = void 0 === a ? '' : a,
							s = n.style,
							l = n.render,
							n = n.initialValues,
							n = void 0 === n ? {} : n,
							s = x(x({ display: r ? 'block' : 'none' }, s), this.state.popupPos);
						return O(
							(vf =
								vf ||
								p(
									[
										'\n      <div\n        class="',
										' ',
										'"\n        style=',
										'\n        ref=',
										'\n        aria-role="dialog"\n      >\n        <div class="',
										'">\n          ',
										'\n        </div>\n      </div>\n    '
									],
									[
										'\n      <div\n        class="',
										' ',
										'"\n        style=',
										'\n        ref=',
										'\n        aria-role="dialog"\n      >\n        <div class="',
										'">\n          ',
										'\n        </div>\n      </div>\n    '
									]
								)),
							d('popup'),
							a,
							s,
							function (e) {
								return (t.refs.el = e);
							},
							d('popup-body'),
							l && l({ eventEmitter: i, show: r, hidePopup: o, execCommand: e, initialValues: n })
						);
					});
				var gf,
					vf,
					yf = bf;
				function bf() {
					var t = (null !== gf && gf.apply(this, arguments)) || this;
					return (
						(t.handleMousedown = function (e) {
							dt(e.target, '.' + d('popup')) ||
								dt(e.target, t.props.info.fromEl) ||
								t.props.hidePopup();
						}),
						t
					);
				}
				var wf;
				function kf(e) {
					return (
						r(t, (n = Kp)),
						(t.prototype.addEvent = function () {
							var n = this,
								e = this.props,
								r = e.item,
								e = e.eventEmitter;
							r.state &&
								e.listen('changeToolbarState', function (e) {
									var e = null != (e = e.toolbarState[r.state]) ? e : {},
										t = e.active,
										e = e.disabled;
									n.setState({ active: !!t, disabled: null != e ? e : n.props.disabled });
								});
						}),
						(t.prototype.getBound = function (e) {
							var t = ft(e, dt(e, '.' + d('toolbar'))),
								n = t.offsetLeft,
								t = t.offsetTop;
							return { left: n, top: e.offsetHeight + t };
						}),
						(t.prototype.render = function () {
							return O(
								(wf =
									wf ||
									p(
										[
											'\n        <',
											'\n          ...',
											'\n          active=',
											'\n          showTooltip=',
											'\n          hideTooltip=',
											'\n          getBound=',
											'\n          disabled=',
											'\n        />\n      '
										],
										[
											'\n        <',
											'\n          ...',
											'\n          active=',
											'\n          showTooltip=',
											'\n          hideTooltip=',
											'\n          getBound=',
											'\n          disabled=',
											'\n        />\n      '
										]
									)),
								e,
								this.props,
								this.state.active,
								this.showTooltip,
								this.hideTooltip,
								this.getBound,
								this.state.disabled || this.props.disabled
							);
						}),
						t
					);
					function t(e) {
						var r = n.call(this, e) || this;
						return (
							(r.showTooltip = function (e) {
								var t,
									n = r.props.item.tooltip;
								!r.props.disabled &&
									n &&
									((t = (e = r.getBound(e)).left + 6 + 'px'),
									(e = e.top + 6 + 'px'),
									H()(r.props.tooltipRef.current, { display: 'block', left: t, top: e }),
									(r.props.tooltipRef.current.querySelector('.text').textContent = n));
							}),
							(r.hideTooltip = function () {
								H()(r.props.tooltipRef.current, 'display', 'none');
							}),
							(r.state = { active: !1, disabled: e.disabled }),
							r.addEvent(),
							r
						);
					}
					var n;
				}
				var xf;
				function Cf() {
					var s = (null !== xf && xf.apply(this, arguments)) || this;
					return (
						(s.showTooltip = function () {
							s.props.showTooltip(s.refs.el);
						}),
						(s.execCommand = function () {
							var e = s.props,
								t = e.item,
								n = e.execCommand,
								r = e.setPopupInfo,
								o = e.getBound,
								e = e.eventEmitter,
								i = t.command,
								a = t.name,
								t = t.popup;
							i
								? n(i)
								: ((i = e.emit('query', 'getPopupInitialValues', {
										popupName: (n = t ? 'customPopupBody' : a)
									})[0]),
									(e = ff(n, { el: s.refs.el, pos: o(s.refs.el), popup: t, initialValues: i })) &&
										r(e));
						}),
						s
					);
				}
				r(Cf, (xf = Kp)),
					(Cf.prototype.mounted = function () {
						this.setItemWidth();
					}),
					(Cf.prototype.updated = function (e) {
						e.item.name !== this.props.item.name && this.setItemWidth();
					}),
					(Cf.prototype.setItemWidth = function () {
						var e = this.props,
							t = e.setItemWidth,
							e = e.item;
						t && t(e.name, pt(this.refs.el) + (e.hidden ? 80 : 0));
					}),
					(Cf.prototype.render = function () {
						var t = this,
							e = this.props,
							n = e.hideTooltip,
							r = e.disabled,
							o = e.item,
							e = e.active,
							i = x({ display: o.hidden ? 'none' : null }, o.style),
							e = (o.className || '') + (e ? ' active' : '');
						return O(
							(Tf =
								Tf ||
								p(
									[
										'\n      <button\n        ref=',
										'\n        type="button"\n        style=',
										'\n        class=',
										'\n        onClick=',
										'\n        onMouseover=',
										'\n        onMouseout=',
										'\n        disabled=',
										'\n        aria-label=',
										'\n      >\n        ',
										'\n      </button>\n    '
									],
									[
										'\n      <button\n        ref=',
										'\n        type="button"\n        style=',
										'\n        class=',
										'\n        onClick=',
										'\n        onMouseover=',
										'\n        onMouseout=',
										'\n        disabled=',
										'\n        aria-label=',
										'\n      >\n        ',
										'\n      </button>\n    '
									]
								)),
							function (e) {
								return (t.refs.el = e);
							},
							i,
							e,
							this.execCommand,
							this.showTooltip,
							n,
							!!r,
							o.text || o.tooltip || '',
							o.text || ''
						);
					});
				var Tf,
					Ef,
					Lf = kf(Cf);
				function Mf() {
					var t = (null !== Ef && Ef.apply(this, arguments)) || this;
					return (
						(t.showTooltip = function () {
							t.props.showTooltip(t.refs.el);
						}),
						(t.showPopup = function () {
							var e = ff('customPopupBody', {
								el: t.refs.el,
								pos: t.props.getBound(t.refs.el),
								popup: t.props.item.popup
							});
							e && t.props.setPopupInfo(e);
						}),
						t
					);
				}
				r(Mf, (Ef = Kp)),
					(Mf.prototype.mounted = function () {
						var e = this.props,
							t = e.setItemWidth,
							e = e.item;
						this.refs.el.appendChild(e.el),
							t && t(e.name, pt(this.refs.el)),
							e.onMounted && e.onMounted(this.props.execCommand);
					}),
					(Mf.prototype.updated = function (e) {
						var t = this.props,
							n = t.item,
							r = t.active,
							t = t.disabled;
						(e.active === r && e.disabled === t) ||
							(null != (e = n.onUpdated) && e.call(n, { active: r, disabled: t }));
					}),
					(Mf.prototype.render = function () {
						function e(e) {
							return r ? null : e;
						}
						var t = this,
							n = this.props,
							r = n.disabled,
							n = { display: n.item.hidden ? 'none' : 'inline-block' };
						return O(
							(Nf =
								Nf ||
								p(
									[
										'\n      <div\n        ref=',
										'\n        style=',
										'\n        class=',
										'\n        onClick=',
										'\n        onMouseover=',
										'\n        onMouseout=',
										'\n      ></div>\n    '
									],
									[
										'\n      <div\n        ref=',
										'\n        style=',
										'\n        class=',
										'\n        onClick=',
										'\n        onMouseover=',
										'\n        onMouseout=',
										'\n      ></div>\n    '
									]
								)),
							function (e) {
								return (t.refs.el = e);
							},
							n,
							d('toolbar-item-wrapper'),
							e(this.showPopup),
							e(this.showTooltip),
							e(this.props.hideTooltip)
						);
					});
				var Nf,
					Af,
					Df,
					Sf,
					Of = kf(Mf),
					If =
						(r(Rf, (Af = Kp)),
						(Rf.prototype.render = function () {
							var n = this,
								e = this.props,
								t = e.group,
								e = e.hiddenDivider,
								r = t.hidden ? { display: 'none' } : null,
								e = e ? { display: 'none' } : null;
							return O(
								(Sf =
									Sf ||
									p(
										[
											'\n      <div class="',
											'" style=',
											'>\n        ',
											'\n        <div class="',
											'" style=',
											'></div>\n      </div>\n    '
										],
										[
											'\n      <div class="',
											'" style=',
											'>\n        ',
											'\n        <div class="',
											'" style=',
											'></div>\n      </div>\n    '
										]
									)),
								d('toolbar-group'),
								r,
								t.map(function (e) {
									var t = e.el ? Of : Lf;
									return O(
										(Df =
											Df ||
											p(
												['<', ' key=', ' ...', ' item=', ' />'],
												['<', ' key=', ' ...', ' item=', ' />']
											)),
										t,
										e.name,
										n.props,
										e
									);
								}),
								d('toolbar-divider'),
								e
							);
						}),
						Rf);
				function Rf() {
					return (null !== Af && Af.apply(this, arguments)) || this;
				}
				var Pf;
				function Bf(e) {
					var t = Pf.call(this, e) || this;
					return (
						(t.handleClickDocument = function (e) {
							e = e.target;
							dt(e, '.' + d('dropdown-toolbar')) ||
								dt(e, '.more') ||
								t.setState({ showDropdown: !1, dropdownPos: null });
						}),
						(t.showTooltip = function () {
							t.props.showTooltip(t.refs.el);
						}),
						(t.state = { showDropdown: !1, dropdownPos: null }),
						t
					);
				}
				r(Bf, (Pf = Kp)),
					(Bf.prototype.getBound = function () {
						var e = this.props.getBound(this.refs.el);
						return (e.top += 4), x(x({}, e), { left: null, right: 10 });
					}),
					(Bf.prototype.mounted = function () {
						document.addEventListener('click', this.handleClickDocument);
					}),
					(Bf.prototype.updated = function () {
						this.state.showDropdown &&
							!this.state.dropdownPos &&
							this.setState({ dropdownPos: this.getBound() });
					}),
					(Bf.prototype.beforeDestroy = function () {
						document.removeEventListener('click', this.handleClickDocument);
					}),
					(Bf.prototype.render = function () {
						var n = this,
							e = this.state,
							t = e.showDropdown,
							e = e.dropdownPos,
							r = this.props,
							o = r.disabled,
							i = r.item,
							a = r.items,
							r = r.hideTooltip,
							s = a.filter(function (e) {
								return !e.hidden;
							}),
							a = s.length ? null : { display: 'none' },
							t = t ? null : { display: 'none' };
						return O(
							(Ff =
								Ff ||
								p(
									[
										'\n      <div class="',
										'" style=',
										'>\n        <button\n          ref=',
										'\n          type="button"\n          class=',
										'\n          onClick=',
										'\n          onMouseover=',
										'\n          onMouseout=',
										'\n          disabled=',
										'\n        ></button>\n        <div\n          class="',
										'"\n          style=',
										'\n          ref=',
										'\n        >\n          ',
										'\n        </div>\n      </div>\n    '
									],
									[
										'\n      <div class="',
										'" style=',
										'>\n        <button\n          ref=',
										'\n          type="button"\n          class=',
										'\n          onClick=',
										'\n          onMouseover=',
										'\n          onMouseout=',
										'\n          disabled=',
										'\n        ></button>\n        <div\n          class="',
										'"\n          style=',
										'\n          ref=',
										'\n        >\n          ',
										'\n        </div>\n      </div>\n    '
									]
								)),
							d('toolbar-group'),
							a,
							function (e) {
								return (n.refs.el = e);
							},
							i.className,
							function () {
								return n.setState({ showDropdown: !0 });
							},
							this.showTooltip,
							r,
							o,
							d('dropdown-toolbar'),
							x(x({}, t), e),
							function (e) {
								return (n.refs.dropdownEl = e);
							},
							s.length
								? s.map(function (e, t) {
										return O(
											(Hf =
												Hf ||
												p(
													[
														'\n                  <',
														'\n                    group=',
														'\n                    hiddenDivider=',
														'\n                    ...',
														'\n                  />\n                '
													],
													[
														'\n                  <',
														'\n                    group=',
														'\n                    hiddenDivider=',
														'\n                    ...',
														'\n                  />\n                '
													]
												)),
											If,
											e,
											t === s.length - 1 || (null == (e = s[t + 1]) ? void 0 : e.hidden),
											n.props
										);
									})
								: null
						);
					});
				var Hf,
					Ff,
					qf,
					jf,
					_f,
					zf = kf(Bf),
					Uf =
						(r(Vf, (qf = Kp)),
						(Vf.prototype.insertToolbarItem = function (e, t) {
							var n = e.groupIndex,
								e = e.itemIndex,
								n = this.initialItems[n];
							(t = df(t)),
								n ? n.splice(e, 0, t) : this.initialItems.push([t]),
								this.setState(this.classifyToolbarItems());
						}),
						(Vf.prototype.removeToolbarItem = function (o) {
							var i = this;
							bt()(this.initialItems, function (n) {
								var r = !1;
								return (
									bt()(n, function (e, t) {
										return (
											e.name !== o ||
											((r = !0), n.splice(t, 1), i.setState(i.classifyToolbarItems()), !1)
										);
									}),
									!r
								);
							});
						}),
						(Vf.prototype.addEvent = function () {
							var e = this,
								t = this.props.eventEmitter;
							(this.handleResize = nd()(function () {
								e.setState({ items: e.initialItems, dropdownItems: [] }),
									e.setState(e.classifyToolbarItems());
							}, 200)),
								t.listen('openPopup', this.openPopup);
						}),
						(Vf.prototype.appendTooltipToRoot = function () {
							var e =
								'<div class="' +
								d('tooltip') +
								'" style="display:none">\n        <div class="arrow"></div>\n        <span class="text"></span>\n      </div>';
							this.tooltipRef.current = ut(e, this.refs.el);
						}),
						(Vf.prototype.hiddenScrollSync = function () {
							return 'wysiwyg' === this.props.editorType || 'tab' === this.props.previewStyle;
						}),
						(Vf.prototype.movePrevItemToDropdownToolbar = function (e, t, n, r) {
							function o(e) {
								(e = e.pop()) && r.push(e);
							}
							1 < e ? o(n) : (e = K(t)) && o(e);
						}),
						(Vf.prototype.classifyToolbarItems = function () {
							var o = this,
								i = 0,
								a = this.refs.el.clientWidth,
								e = this.refs.el.querySelector('.' + d('toolbar-divider')),
								s = e ? pt(e) : 0,
								l = [],
								c = [],
								u = !1;
							return (
								this.initialItems.forEach(function (e, t) {
									var n = [],
										r = [];
									e.forEach(function (e, t) {
										e.hidden ||
											((i += o.itemWidthMap[e.name]),
											(a - 50 < i
												? (u || (o.movePrevItemToDropdownToolbar(t, l, n, r), (u = !0)), r)
												: n
											).push(e));
									}),
										n.length && (hf(n), l.push(n)),
										r.length && (hf(r), c.push(r)),
										t < o.state.items.length - 1 && (i += s);
								}),
								{ items: l, dropdownItems: c }
							);
						}),
						(Vf.prototype.mounted = function () {
							'tab' === this.props.previewStyle &&
								this.props.eventEmitter.emit('changePreviewTabWrite', !0),
								this.setState(this.classifyToolbarItems()),
								this.appendTooltipToRoot(),
								this.resizeObserver.observe(this.refs.el);
						}),
						(Vf.prototype.updated = function (e) {
							var t,
								n = this.props,
								r = n.editorType,
								o = n.previewStyle,
								n = n.eventEmitter,
								i = o !== e.previewStyle,
								e = r !== e.editorType;
							(i || e) &&
								((e = this.initialItems),
								(t = this.hiddenScrollSync()),
								e.forEach(function (e) {
									e.forEach(function (e) {
										return (e.hidden = 'scrollSync' === e.name && t);
									}),
										hf(e);
								}),
								(e = this.classifyToolbarItems()),
								(i || ('tab' === o && 'markdown' === r)) &&
									(n.emit('changePreviewTabWrite'), (e.activeTab = 'write')),
								this.setState(e));
						}),
						(Vf.prototype.beforeDestroy = function () {
							window.removeEventListener('resize', this.handleResize),
								this.resizeObserver.disconnect(),
								lt(this.tooltipRef.current);
						}),
						(Vf.prototype.render = function () {
							var n = this,
								e = this.props,
								t = e.previewStyle,
								r = e.eventEmitter,
								e = e.editorType,
								o = this.state,
								i = o.popupInfo,
								a = o.showPopup,
								s = o.activeTab,
								l = o.items,
								o = o.dropdownItems,
								c = {
									eventEmitter: r,
									tooltipRef: this.tooltipRef,
									disabled: 'markdown' === e && 'tab' === t && 'preview' === s,
									execCommand: this.execCommand,
									setPopupInfo: this.setPopupInfo
								},
								u = 'tab' === t ? { borderTopLeftRadius: 0 } : null;
							return O(
								(_f =
									_f ||
									p(
										[
											'\n      <div class="',
											'">\n        <div\n          class="',
											'"\n          style="display: ',
											'"\n        >\n          <',
											' tabs=',
											' activeTab=',
											' onClick=',
											' />\n        </div>\n        <div\n          class="',
											'"\n          ref=',
											'\n          style=',
											'\n        >\n          ',
											'\n          <',
											'\n            item=',
											'\n            items=',
											'\n            ...',
											'\n          />\n        </div>\n        <',
											'\n          info=',
											'\n          show=',
											'\n          eventEmitter=',
											'\n          hidePopup=',
											'\n          execCommand=',
											'\n        />\n      </div>\n    '
										],
										[
											'\n      <div class="',
											'">\n        <div\n          class="',
											'"\n          style="display: ',
											'"\n        >\n          <',
											' tabs=',
											' activeTab=',
											' onClick=',
											' />\n        </div>\n        <div\n          class="',
											'"\n          ref=',
											'\n          style=',
											'\n        >\n          ',
											'\n          <',
											'\n            item=',
											'\n            items=',
											'\n            ...',
											'\n          />\n        </div>\n        <',
											'\n          info=',
											'\n          show=',
											'\n          eventEmitter=',
											'\n          hidePopup=',
											'\n          execCommand=',
											'\n        />\n      </div>\n    '
										]
									)),
								d('toolbar'),
								d('md-tab-container'),
								'wysiwyg' === e || 'vertical' === t ? 'none' : 'block',
								qd,
								this.tabs,
								s,
								this.toggleTab,
								d('defaultUI-toolbar'),
								function (e) {
									return (n.refs.el = e);
								},
								u,
								l.map(function (e, t) {
									return O(
										(jf =
											jf ||
											p(
												[
													'\n              <',
													'\n                group=',
													'\n                hiddenDivider=',
													'\n                setItemWidth=',
													'\n                ...',
													'\n              />\n            '
												],
												[
													'\n              <',
													'\n                group=',
													'\n                hiddenDivider=',
													'\n                setItemWidth=',
													'\n                ...',
													'\n              />\n            '
												]
											)),
										If,
										e,
										t === l.length - 1 || (null == (e = l[t + 1]) ? void 0 : e.hidden),
										n.setItemWidth,
										c
									);
								}),
								zf,
								df('more'),
								o,
								c,
								yf,
								i,
								a,
								r,
								this.hidePopup,
								this.execCommand
							);
						}),
						Vf);
				function Vf(e) {
					var i = qf.call(this, e) || this;
					return (
						(i.toggleTab = function (e, t) {
							var n = i.props.eventEmitter;
							i.state.activeTab !== t &&
								(n.emit('write' === t ? 'changePreviewTabWrite' : 'changePreviewTabPreview'),
								i.setState({ activeTab: t }));
						}),
						(i.setItemWidth = function (e, t) {
							i.itemWidthMap[e] = t;
						}),
						(i.setPopupInfo = function (e) {
							i.setState({ showPopup: !0, popupInfo: e });
						}),
						(i.openPopup = function (e, t) {
							void 0 === t && (t = {});
							var n,
								r,
								o = i.refs.el.querySelector('.' + d('toolbar-group') + ' .' + e);
							o &&
								((n = (r = ft(o, dt(o, '.' + d('toolbar')))).offsetLeft),
								(r = r.offsetTop),
								(e = ff(e, {
									el: o,
									pos: { left: n, top: o.offsetHeight + r },
									initialValues: t
								}))) &&
								i.setPopupInfo(e);
						}),
						(i.hidePopup = function () {
							i.state.showPopup && i.setState({ showPopup: !1 });
						}),
						(i.execCommand = function (e, t) {
							i.props.eventEmitter.emit('command', e, t), i.hidePopup();
						}),
						(i.tabs = [
							{ name: 'write', text: 'Write' },
							{ name: 'preview', text: 'Preview' }
						]),
						(i.itemWidthMap = {}),
						(i.initialItems = mf(e.toolbarItems || [], i.hiddenScrollSync())),
						(i.state = {
							items: i.initialItems,
							dropdownItems: [],
							showPopup: !1,
							popupInfo: {},
							activeTab: 'write'
						}),
						(i.tooltipRef = { current: null }),
						(i.resizeObserver = new Id(function () {
							return i.handleResize();
						})),
						i.addEvent(),
						i
					);
				}
				r(Kf, ($f = Kp)),
					(Kf.prototype.addEvent = function () {
						var n = this;
						this.props.eventEmitter.listen('contextmenu', function (e) {
							var t = e.pos,
								e = e.menuGroups;
							n.setState({ pos: t, menuGroups: e });
						});
					}),
					(Kf.prototype.mounted = function () {
						document.addEventListener('click', this.handleClickDocument);
					}),
					(Kf.prototype.beforeDestroy = function () {
						document.removeEventListener('click', this.handleClickDocument);
					}),
					(Kf.prototype.getMenuGroupElements = function () {
						var a = this,
							e = this.state,
							t = e.pos,
							e = e.menuGroups;
						return t
							? e.reduce(function (e, t) {
									var i = [];
									return (
										t.forEach(function (e) {
											var t = e.label,
												n = e.className,
												n = void 0 !== n && n,
												r = e.disabled,
												o = e.onClick;
											i.push(
												O(
													(Wf =
														Wf ||
														p(
															[
																'\n                <li\n                  onClick=',
																'\n                  class="menu-item',
																'"\n                  aria-role="menuitem"\n                >\n                  <span class="',
																'">',
																'</span>\n                </li>\n              '
															],
															[
																'\n                <li\n                  onClick=',
																'\n                  class="menu-item',
																'"\n                  aria-role="menuitem"\n                >\n                  <span class="',
																'">',
																'</span>\n                </li>\n              '
															]
														)),
													function () {
														r || (o(), a.setState({ pos: null }));
													},
													r ? ' disabled' : '',
													n,
													t
												)
											);
										}),
										e.push(
											O(
												(Gf =
													Gf ||
													p(
														['<ul class="menu-group">\n              ', '\n            </ul>'],
														['<ul class="menu-group">\n              ', '\n            </ul>']
													)),
												i
											)
										),
										e
									);
								}, [])
							: [];
					}),
					(Kf.prototype.render = function () {
						var e = x({ display: this.state.pos ? 'block' : 'none' }, this.state.pos);
						return O(
							(Zf =
								Zf ||
								p(
									['<div class="', '" style=', ' aria-role="menu">\n      ', '\n    </div>'],
									['<div class="', '" style=', ' aria-role="menu">\n      ', '\n    </div>']
								)),
							d('context-menu'),
							e,
							this.getMenuGroupElements()
						);
					});
				var $f,
					Wf,
					Gf,
					Zf,
					Xf = Kf;
				function Kf(e) {
					var t = $f.call(this, e) || this;
					return (
						(t.handleClickDocument = function (e) {
							dt(e.target, '.' + d('context-menu')) || t.setState({ pos: null });
						}),
						(t.state = { pos: null, menuGroups: [] }),
						t.addEvent(),
						t
					);
				}
				r(nh, (Qf = Kp)),
					(nh.prototype.mounted = function () {
						var e = this.props.slots,
							t = e.wwEditor,
							n = e.mdEditor,
							e = e.mdPreview;
						this.refs.wwContainer.appendChild(t),
							this.refs.mdContainer.insertAdjacentElement('afterbegin', n),
							this.refs.mdContainer.appendChild(e);
					}),
					(nh.prototype.insertToolbarItem = function (e, t) {
						this.toolbar.insertToolbarItem(e, t);
					}),
					(nh.prototype.removeToolbarItem = function (e) {
						this.toolbar.removeToolbarItem(e);
					}),
					(nh.prototype.render = function () {
						var t = this,
							e = this.props,
							n = e.eventEmitter,
							r = e.hideModeSwitch,
							o = e.toolbarItems,
							e = e.theme,
							i = this.state,
							a = i.hide,
							s = i.previewStyle,
							i = i.editorType,
							a = a ? ' hidden' : '',
							l = d('markdown' === i ? 'md-mode' : 'ww-mode'),
							c = d('md') + '-' + s + '-style',
							e = d(['light' !== e, e + ' ']);
						return O(
							(Jf =
								Jf ||
								p(
									[
										'\n      <div\n        class="',
										'',
										'',
										'"\n        ref=',
										'\n      >\n        <',
										'\n          ref=',
										'\n          eventEmitter=',
										'\n          previewStyle=',
										'\n          toolbarItems=',
										'\n          editorType=',
										'\n        />\n        <div\n          class="',
										' ',
										'"\n          ref=',
										'\n        >\n          <div class="',
										'">\n            <div\n              class="',
										' ',
										'"\n              ref=',
										'\n            >\n              <div class="',
										'"></div>\n            </div>\n            <div\n              class="',
										'"\n              ref=',
										'\n            />\n          </div>\n        </div>\n        ',
										'\n        <',
										' eventEmitter=',
										' />\n      </div>\n    '
									],
									[
										'\n      <div\n        class="',
										'',
										'',
										'"\n        ref=',
										'\n      >\n        <',
										'\n          ref=',
										'\n          eventEmitter=',
										'\n          previewStyle=',
										'\n          toolbarItems=',
										'\n          editorType=',
										'\n        />\n        <div\n          class="',
										' ',
										'"\n          ref=',
										'\n        >\n          <div class="',
										'">\n            <div\n              class="',
										' ',
										'"\n              ref=',
										'\n            >\n              <div class="',
										'"></div>\n            </div>\n            <div\n              class="',
										'"\n              ref=',
										'\n            />\n          </div>\n        </div>\n        ',
										'\n        <',
										' eventEmitter=',
										' />\n      </div>\n    '
									]
								)),
							e,
							d('defaultUI'),
							a,
							function (e) {
								return (t.refs.el = e);
							},
							Uf,
							function (e) {
								return (t.toolbar = e);
							},
							n,
							s,
							o,
							i,
							d('main'),
							l,
							function (e) {
								return (t.refs.editorSection = e);
							},
							d('main-container'),
							d('md-container'),
							c,
							function (e) {
								return (t.refs.mdContainer = e);
							},
							d('md-splitter'),
							d('ww-container'),
							function (e) {
								return (t.refs.wwContainer = e);
							},
							!r &&
								O(
									(Yf =
										Yf ||
										p(
											['<', ' eventEmitter=', ' editorType=', ' />'],
											['<', ' eventEmitter=', ' editorType=', ' />']
										)),
									ed,
									n,
									i
								),
							Xf,
							n
						);
					}),
					(nh.prototype.addEvent = function () {
						var e = this.props.eventEmitter;
						e.listen('hide', this.hide),
							e.listen('show', this.show),
							e.listen('changeMode', this.changeMode),
							e.listen('changePreviewStyle', this.changePreviewStyle);
					});
				var Qf,
					Yf,
					Jf,
					eh,
					th = nh;
				function nh(e) {
					var t = Qf.call(this, e) || this,
						n =
							((t.changeMode = function (e) {
								e !== t.state.editorType && t.setState({ editorType: e });
							}),
							(t.changePreviewStyle = function (e) {
								e !== t.state.previewStyle && t.setState({ previewStyle: e });
							}),
							(t.hide = function () {
								t.setState({ hide: !0 });
							}),
							(t.show = function () {
								t.setState({ hide: !1 });
							}),
							e.editorType),
						e = e.previewStyle;
					return (t.state = { editorType: n, previewStyle: e, hide: !1 }), t.addEvent(), t;
				}
				function rh(e) {
					var t,
						r = eh.call(this, e) || this,
						e = Xp(
							r.options.el,
							O(
								(oh =
									oh ||
									p(
										[
											'\n        <',
											'\n          ref=',
											'\n          eventEmitter=',
											'\n          slots=',
											'\n          hideModeSwitch=',
											'\n          toolbarItems=',
											'\n          previewStyle=',
											'\n          editorType=',
											'\n          theme=',
											'\n        />\n      '
										],
										[
											'\n        <',
											'\n          ref=',
											'\n          eventEmitter=',
											'\n          slots=',
											'\n          hideModeSwitch=',
											'\n          toolbarItems=',
											'\n          previewStyle=',
											'\n          editorType=',
											'\n          theme=',
											'\n        />\n      '
										]
									)),
								th,
								function (e) {
									return (t = e);
								},
								r.eventEmitter,
								r.getEditorElements(),
								r.options.hideModeSwitch,
								r.options.toolbarItems,
								r.options.previewStyle,
								r.options.initialEditType,
								r.options.theme
							)
						);
					return (
						r.setMinHeight(r.options.minHeight),
						r.setHeight(r.options.height),
						(r.defaultUI = {
							insertToolbarItem: t.insertToolbarItem.bind(t),
							removeToolbarItem: t.removeToolbarItem.bind(t),
							destroy: e
						}),
						null != (e = r.pluginInfo.toolbarItems) &&
							e.forEach(function (e) {
								var t = e.groupIndex,
									n = e.itemIndex,
									e = e.item;
								r.defaultUI.insertToolbarItem({ groupIndex: t, itemIndex: n }, e);
							}),
						r.eventEmitter.emit('loadUI', r),
						r
					);
				}
				r(rh, (eh = a)),
					(rh.factory = function (e) {
						return new (e.viewer ? wp : rh)(e);
					}),
					(rh.prototype.insertToolbarItem = function (e, t) {
						this.defaultUI.insertToolbarItem(e, t);
					}),
					(rh.prototype.removeToolbarItem = function (e) {
						this.defaultUI.removeToolbarItem(e);
					}),
					(rh.prototype.destroy = function () {
						eh.prototype.destroy.call(this), this.defaultUI.destroy();
					});
				var oh,
					so = rh,
					ih =
						(a.setLanguage(['en', 'en-US'], {
							Markdown: 'Markdown',
							WYSIWYG: 'WYSIWYG',
							Write: 'Write',
							Preview: 'Preview',
							Headings: 'Headings',
							Paragraph: 'Paragraph',
							Bold: 'Bold',
							Italic: 'Italic',
							Strike: 'Strike',
							Code: 'Inline code',
							Line: 'Line',
							Blockquote: 'Blockquote',
							'Unordered list': 'Unordered list',
							'Ordered list': 'Ordered list',
							Task: 'Task',
							Indent: 'Indent',
							Outdent: 'Outdent',
							'Insert link': 'Insert link',
							'Insert CodeBlock': 'Insert codeBlock',
							'Insert table': 'Insert table',
							'Insert image': 'Insert image',
							Heading: 'Heading',
							'Image URL': 'Image URL',
							'Select image file': 'Select image file',
							'Choose a file': 'Choose a file',
							'No file': 'No file',
							Description: 'Description',
							OK: 'OK',
							More: 'More',
							Cancel: 'Cancel',
							File: 'File',
							URL: 'URL',
							'Link text': 'Link text',
							'Add row to up': 'Add row to up',
							'Add row to down': 'Add row to down',
							'Add column to left': 'Add column to left',
							'Add column to right': 'Add column to right',
							'Remove row': 'Remove row',
							'Remove column': 'Remove column',
							'Align column to left': 'Align column to left',
							'Align column to center': 'Align column to center',
							'Align column to right': 'Align column to right',
							'Remove table': 'Remove table',
							'Would you like to paste as table?': 'Would you like to paste as table?',
							'Text color': 'Text color',
							'Auto scroll enabled': 'Auto scroll enabled',
							'Auto scroll disabled': 'Auto scroll disabled',
							'Choose language': 'Choose language'
						}),
						so);
			})(),
			sh.default
		);
		function ah(e) {
			var t = u[e];
			return (
				void 0 !== t || ((t = u[e] = { exports: {} }), c[e].call(t.exports, t, t.exports, ah)),
				t.exports
			);
		}
		var c, u, sh;
	});
