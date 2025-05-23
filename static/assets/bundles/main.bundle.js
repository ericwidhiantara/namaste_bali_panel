const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]'),
	tooltipList = [...tooltipTriggerList].map((e) => new bootstrap.Tooltip(e)),
	popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]'),
	popoverList = [...popoverTriggerList].map((e) => new bootstrap.Popover(e)),
	pure = new PureCounter();
var calendar;
new PureCounter(),
	$(function () {
		'use strict';
		document.documentElement;
		$('.sidebar-toggle').on('click', function () {
			$('body').toggleClass('sidebar-hide');
		}),
			$('.rightbar-toggle').on('click', function () {
				$('body').toggleClass('rightbar-hide');
			}),
			$('.choose-skin li').on('click', function () {
				var e = $('body'),
					t = $(this);
				$('.choose-skin li.active').data('theme');
				$('.choose-skin li').removeClass('active'),
					t.addClass('active'),
					e.attr('data-bvite', 'theme-' + t.data('theme'));
			});
		const t = 'div.card',
			o =
				($('.card-fullscreen').on('click', function (e) {
					return $(this).closest(t).toggleClass('fullscreen'), e.preventDefault(), !1;
				}),
				$('[data-toggle="card-remove"]').on('click', function (e) {
					return $(this).closest(t).remove(), e.preventDefault(), !1;
				}),
				document.querySelector('.boxlayout-toggle input[type="checkbox"]'));
		function e(e) {
			e = $(e);
			'none' === e.attr('data-bs-theme')
				? e.attr('data-bs-theme', 'dark')
				: e.attr('data-bs-theme', 'none');
		}
		o.addEventListener('click', () => {
			var e = document.querySelector('main'),
				t = document.querySelector('body');
			o.checked
				? (e.classList.add('container'),
					e.classList.remove('container-fluid'),
					t.classList.add('box-layout', 'rightbar-hide'))
				: (e.classList.add('container-fluid'),
					e.classList.remove('container'),
					t.classList.remove('box-layout', 'rightbar-hide'));
		}),
			$('.monochrome-toggle input:checkbox').on('click', function () {
				$(this).is(':checked')
					? $('body').addClass('monochrome')
					: $('body').removeClass('monochrome');
			}),
			$('.card-toggle-one input:checkbox').on('click', function () {
				$(this).is(':checked')
					? $('.card-main-one').addClass('show')
					: $('.card-main-one').removeClass('show');
			}),
			$('.card-toggle-two input:checkbox').on('click', function () {
				$(this).is(':checked')
					? $('.card-main-two').addClass('show')
					: $('.card-main-two').removeClass('show');
			}),
			$('.card-toggle-three input:checkbox').on('click', function () {
				$(this).is(':checked')
					? $('.card-main-three').addClass('show')
					: $('.card-main-three').removeClass('show');
			}),
			$('.card-toggle-four input:checkbox').on('click', function () {
				$(this).is(':checked')
					? $('.card-main-four').addClass('show')
					: $('.card-main-four').removeClass('show');
			}),
			$('.table-toggle-one input:checkbox').on('click', function () {
				$(this).is(':checked')
					? $('.table-main-one').addClass('show')
					: $('.table-main-one').removeClass('show');
			}),
			$('.table-toggle-two input:checkbox').on('click', function () {
				$(this).is(':checked')
					? $('.table-main-two').addClass('show')
					: $('.table-main-two').removeClass('show');
			}),
			$('.table-toggle-three input:checkbox').on('click', function () {
				$(this).is(':checked')
					? $('.table-main-three').addClass('show')
					: $('.table-main-three').removeClass('show');
			}),
			$('.table-toggle-four input:checkbox').on('click', function () {
				$(this).is(':checked')
					? $('.table-main-four').addClass('show')
					: $('.table-main-four').removeClass('show');
			}),
			$('.table-toggle-five input:checkbox').on('click', function () {
				$(this).is(':checked')
					? $('.table-main-five').addClass('show')
					: $('.table-main-five').removeClass('show');
			}),
			$('.table-toggle-six input:checkbox').on('click', function () {
				$(this).is(':checked')
					? $('.table-main-six').addClass('show')
					: $('.table-main-six').removeClass('show');
			}),
			$('.gradient-active input:checkbox').on('click', function () {
				$(this).is(':checked') ? $('body').addClass('gradient') : $('body').removeClass('gradient');
			}),
			$('.radius-toggle input:checkbox').on('click', function () {
				$(this).is(':checked') ? $('body').addClass('radius-0') : $('body').removeClass('radius-0');
			}),
			$('.brand-toggle input:checkbox').on('click', function () {
				e('.brand');
			}),
			$('.sidebar-toggle input:checkbox').on('click', function () {
				e('.sidebar');
			}),
			$('.header-toggle input:checkbox').on('click', function () {
				e('header');
			}),
			$('.pheader-toggle input:checkbox').on('click', function () {
				e('.page-header');
			}),
			$('.rightbar-toggle input:checkbox').on('click', function () {
				e('.rightbar');
			}),
			$('.layout-option input:radio').on('click', function () {
				var e = $("[name='" + this.name + "']")
					.map(function () {
						return this.value;
					})
					.get()
					.join(' ');
				console.log(e), $('body').removeClass(e).addClass(this.value);
			}),
			$('.svg-stroke input:radio').on('click', function () {
				var e = $("[name='" + this.name + "']")
					.map(function () {
						return this.value;
					})
					.get()
					.join(' ');
				console.log(e), $('body').removeClass(e).addClass(this.value);
			}),
			$('.border-toggle input:checkbox').on('click', function () {
				$('body').toggleClass('layout-border');
			}),
			$('.svg-icon-color input:checkbox').on('click', function () {
				$('.menu-list').toggleClass('icon-color');
			}),
			$('.cb-shadow input:checkbox').on('click', function () {
				$('.card').toggleClass('shadow-active');
			}),
			$('.password-meter .form-control').on('input', function () {
				var e = 0,
					t = $(this).val(),
					o = new RegExp('[A-Z]'),
					a = new RegExp('[a-z]'),
					n = new RegExp('[0-9]'),
					c = new RegExp('^(?=.*?[#?!@$%^&*-]).{1,}$');
				7 < t.length && e++,
					0 < t.length && t.match(o) && e++,
					0 < t.length && t.match(a) && e++,
					0 < t.length && t.match(n) && e++,
					0 < t.length && t.match(c) && e++,
					($('.password-meter .progress-bar')[0].style.width = 20 * e + '%');
			}),
			$('.image-input .form-control').on('change', function () {
				var e = URL.createObjectURL(this.files[0]);
				$(this).parent().parent().children('.avatar-wrapper')[0].style.background =
					'url(' + e + ') no-repeat';
			}),
			$('.select-all.form-check-input').on('change', function () {
				var t = $(this).is(':checked'),
					e = $(this).parent().parent().parent().parent().parent().find('.row-selectable');
				0 < e.length &&
					e.each(function (e) {
						$(this).find('.form-check-input')[0].checked = t;
					});
			});
	}),
	(() => {
		'use strict';
		function o(e) {
			'auto' === e && window.matchMedia('(prefers-color-scheme: dark)').matches
				? document.documentElement.setAttribute('data-bs-theme', 'dark')
				: document.documentElement.setAttribute('data-bs-theme', e);
		}
		const e = localStorage.getItem('theme'),
			t = () => e || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'),
			a =
				(o(t()),
				(e) => {
					var t = document.querySelector('.theme-icon-active use'),
						e = document.querySelector(`[data-bs-theme-value="${e}"]`),
						o = e.querySelector('svg use').getAttribute('href');
					document.querySelectorAll('[data-bs-theme-value]').forEach((e) => {
						e.classList.remove('active');
					}),
						e.classList.add('active'),
						t.setAttribute('href', o);
				});
		window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
			('light' === e && 'dark' === e) || o(t());
		}),
			window.addEventListener('DOMContentLoaded', () => {
				a(t()),
					document.querySelectorAll('[data-bs-theme-value]').forEach((t) => {
						t.addEventListener('click', () => {
							var e = t.getAttribute('data-bs-theme-value');
							localStorage.setItem('theme', e), o(e), a(e);
						});
					});
			});
	})(),
	(window.initApexChart = function (e, t) {
		return e ? new ApexCharts(e, t).render() : null;
	}),
	initApexChart(document.querySelector('#Apex_TaskAssignin'), {
		chart: { height: 240, type: 'bar', toolbar: { show: !1 } },
		colors: ['var(--theme-color1)', 'var(--theme-color2)', 'var(--theme-color4)'],
		plotOptions: { bar: { horizontal: !1, columnWidth: '80%', endingShape: 'rounded' } },
		dataLabels: { enabled: !1 },
		stroke: { show: !0, width: 2, colors: ['transparent'] },
		series: [
			{ name: 'Pending', data: [44, 55, 57, 56, 61, 58, 63, 60, 66] },
			{ name: 'In Progress', data: [76, 85, 101, 98, 87, 105, 91, 114, 94] },
			{ name: 'Completed', data: [35, 41, 36, 26, 45, 48, 52, 53, 41] }
		],
		xaxis: { categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'] },
		fill: { opacity: 1 }
	}),
	document.getElementById('calendar') &&
		(calendar = new tui.Calendar('#calendar', {
			defaultView: 'month',
			taskView: !0,
			template: {
				monthDayname: function (e) {
					return '<span class="calendar-week-dayname-name">' + e.label + '</span>';
				}
			}
		}));
