//$(document).ready(function(){
//	$('.popup-trigger-inner').on('click', function(){
//		$(this).toggleClass('trigger-active');
//	});
//	$('.login').on('click', function(){
//		$('.screen_first .popup').addClass('active-popup');
//	});
//
//	$('.screen__video').on('click', function(){
//		this.paused?this.play():this.pause();
//		$('.screen__video-wrapper').toggleClass('active');
//	});
//
////	$('.screen__video').on('click', function(){
////		$(this).get(0).play();
////	});
//
//
//
//
//	$('body').on('click', function(e) {
//		var target = e.target;
//		if (!$('.screen_first .popup, .login').is(target) && $(target).parents('.popup').length < 1 && !$(target).hasClass('registration')) {
//			$('.popup').removeClass('active-popup');
//		}
//	});
//
//	$('.registration').on('click', function(){
//		$('.screen_eighth .popup').addClass('active-popup');
//		$(this).toggleClass('active-reg');
//	});
//
//});
//
//window.onload = function() {
//	'use strict';
//
//	$('#load').remove();
//
//	var
//			screen = 0,
//			container = $('.main-content'),
//			sections = $('.screen'),
//			inscroll = false,
//			pagination = $('.pagination__item'),
//			menuToggle = $('.screen__hamburger'),
//			nav = $('.navigation'),
//			navClose = nav.find('.close-btn'),
//			menuItems = $('.menu__item'),
//			menuLink = menuItems.find('.menu__item-link');
//
//	// Работа с анимацией
//
//	var
//			section1 = sections.filter('.screen_first'),
//			section2 = sections.filter('.screen_second'),
//			section3 = sections.filter('.screen_third'),
//			section4 = sections.filter('.screen_fourth'),
//			section5 = sections.filter('.screen_fifth'),
//			section6 = sections.filter('.screen_sixth'),
//			section7 = sections.filter('.screen_seventh'),
//			section8 = sections.filter('.screen_eighth'),
//			animLetter1 = section1.find('.animate-text'),
//			animLetter2 = section2.find('.animate-text'),
//			animLetter3 = section3.find('.animate-text'),
//			animLetter4 = section4.find('.animate-text'),
//			animLetter5 = section5.find('.animate-text'),
//			animLetter6 = section6.find('.animate-text'),
//			animLetter7 = section7.find('.animate-text'),
//			animLetter8 = section8.find('.animate-text'),
//			animOpacity1 = section1.find('.animation__opacity'),
//			animOpacity2 = section2.find('.animation__opacity'),
//			animOpacity3 = section3.find('.animation__opacity'),
//			animOpacity4 = section4.find('.animation__opacity'),
//			animOpacity5 = section5.find('.animation__opacity'),
//			animOpacity8 = section8.find('.animation__opacity'),
//			animFlag1 = section1.find('.flag'),
//			animFeature = section6.find('.features__image'),
//			animList = section7.find('.list__item'),
//			animSuperhero = section8.find('#animation__superhero'),
//			screenMask1 = section1.find('#screen__mask-1'),
//			screenMask2 = section1.find('#screen__mask-2'),
//			screenMask3 = section1.find('#screen__mask-3'),
//			screenMask4 = section1.find('#screen__mask-4'),
//			animMask1 = section1.find('#animation__mask_cyclist-1'),
//			animMask2 = section1.find('#animation__mask_cyclist-2'),
//			animMask3 = section1.find('#animation__mask_cyclist-3'),
//			animMask4 = section1.find('#animation__mask_cyclist-4'),
//			animCyclist1 = animMask1.find('.animation__cyclist'),
//			animCyclist2 = animMask2.find('.animation__cyclist'),
//			animCyclist3 = animMask3.find('.animation__cyclist'),
//			animCyclist4 = animMask4.find('.animation__cyclist'),
//			animMain = section1.find('#animation__main'),
//			animBallon = section1.find('#animation__ballon'),
//			animRise = section1.find('.animation__rise'),
//			animSurfer = section1.find('#animation__surfer'),
//			animCloud1 = section1.find('#animation__cloud-left'),
//			animCloud2 = section1.find('#animation__cloud-right1'),
//			animCloud3 = section1.find('#animation__cloud-right2'),
//			bgVideoWrapper5 = section5.find('#sec5-video-bg'),
//			bgVideo5 = bgVideoWrapper5.find('.screen__video'),
//			videoPlayer = section5.find('.player'),
//			timeouts = [],
//			timer = 0;
//
//	sections.first().addClass('active');
//	pagination.first().addClass('active');
//	menuItems.first().addClass('active');
//	animate();
//	bgVideo5.get(0).pause();
//
//	videoPlayer.on('click', function(e) {
//
//		e.preventDefault();
//
//
//		var
//				target = $(event.target);
//
//		console.log(target);
//
//		if ( target.is('.player__start-btn') || target.is('.player__desc') ) {
//
//			bgVideo5.get(0).currentTime = 0;
//			bgVideo5.get(0).muted = false;
//
//
//		}
//
//
//	});
//
//	animFlag1.on('click', function(e) {
//
//		e.preventDefault();
//
//		screen = animFlag1.data('link');
//		toggleActiveClass(menuItems);
//		toggleActiveClass(pagination);
//
//		var
//				position = (-screen * 100) + '%';
//
//		container.css('top', position);
//		container.on('transitionend webkitTransitionEnd oTransitionEnd', function () {
//			inscroll = false;
//		});
//
//		removeTriggers();
//		section5.addClass('active').siblings('.screen').removeClass('active');
//		toggleActiveClass(menuItems);
//		toggleActiveClass(pagination);
//		animate();
//	});
//
//	menuToggle.on('click', function(e) {
//
//		e.preventDefault();
//
//		menuToggle.addClass('hamburger-menu_hidden');
//		nav.addClass('active');
//
//	});
//
//	navClose.on('click', function(e) {
//
//		e.preventDefault();
//
//		menuToggle.removeClass('hamburger-menu_hidden');
//		nav.removeClass('active');
//
//	});
//
//	pagination.on('click', function(e) {
//
//		e.preventDefault();
//
//		removeTriggers();
//		navigation( $(this) );
//		toggleActiveClass(menuItems);
//		animate();
//	});
//
//	menuLink.on('click', function(e) {
//
//		e.preventDefault();
//
//		var
//				$this = $(this),
//				menuItem = $this.parent();
//
//		removeTriggers();
//		navigation(menuItem);
//		toggleActiveClass(pagination);
//		animate();
//	});
//
//	$(window).on('DOMMouseScroll mousewheel wheel keydown', function(e, direction) {
//
//		var
//				activeSection = sections.filter('.active');
//
//		if (!inscroll) {
//
//			if (e.deltaY > 0 || e.which === 38) {
//
//				if (activeSection.prev('.screen').length) {
//					inscroll = true;
//					screen--;
//					removeTriggers();
//					activeSection.prev('.screen').addClass('active').siblings('.screen').removeClass('active');
//					animate();
//
//					toggleActiveClass(menuItems);
//					toggleActiveClass(pagination);
//				}
//
//			} else if (e.deltaY < 0 || e.which === 40) {
//
//				if (activeSection.next('.screen').length) {
//					inscroll = true;
//					screen++;
//					removeTriggers();
//					activeSection.next('.screen').addClass('active').siblings('.screen').removeClass('active');
//					animate();
//
//					toggleActiveClass(menuItems);
//					toggleActiveClass(pagination);
//				}
//
//			}
//
//		}
//
//		var
//				position = (-screen * 100) + '%';
//
//		container.css('top', position);
//		container.on('transitionend webkitTransitionEnd oTransitionEnd', function () {
//				inscroll = false;
//		});
//
//	});
//
//	function toggleActiveClass(elem) {
//
//		elem.each(function() {
//
//			var
//					activeSection = sections.filter('.active'),
//					$this = $(this);
//
//			if ( $this.data('link') === activeSection.data('link') ) {
//				$this.addClass('active').siblings().removeClass('active');
//			}
//
//		});
//
//	}
//
//	function navigation(btn) {
//
//		var
//				position = 0,
//				btnNumber = btn.data('link');
//
//		screen = btnNumber;
//		position = (-screen * 100) + '%';
//
//		removeTriggers();
//		btn.addClass('active').siblings().removeClass('active');
//		sections.eq(btnNumber).addClass('active').siblings('.screen').removeClass('active');
//
//		container.css('top', position);
//		container.on('transitionend webkitTransitionEnd oTransitionEnd', function () {
//				inscroll = false;
//		});
//
//	}
//
//	function removeTriggers() {
//
//		for (var i = 0; i < timeouts.length; i++) {
//			clearTimeout(timeouts[i]);
//		}
//
//		timeouts = [];
//
//		var
//				activeSection = sections.filter('.active'),
//				triggers = activeSection.find('.trigger');
//
//		triggers.removeClass('trigger');
//
//	}
//
//	function animate() {
//
//		if (!bgVideo5.get(0).paused) {
//			bgVideo5.get(0).pause();
//
//		}
//
//		if (!bgVideo5.get(0).muted) {
//			bgVideo5.get(0).muted = true;
//		}
//
//		if ( bgVideoWrapper5.hasClass('active') ) {
//			bgVideoWrapper5.removeClass('active');
//		}
//
//		if ( pagination.hasClass('pagination__item_theme_light') ) {
//			pagination.removeClass('pagination__item_theme_light')
//		}
//
//		if( section1.hasClass('active') ) {
//
//			addTrigger(screenMask1, 0);
//			addTrigger(screenMask2, 0);
//			addTrigger(animMain, 200),
//			addTrigger(screenMask3, 0);
//			addTrigger(screenMask4, 0);
//			addTrigger(animBallon, 500);
//			addTrigger(animCloud1, 200);
//			addTrigger(animCloud2, 100);
//			addTrigger(animCloud3, 0);
//			addTrigger(animSurfer, 300);
//
//			animRise.each(function() {
//
//				var
//						$this = $(this);
//
//				addTrigger($this, 200);
//
//			});
//
//			animLetter1.each(function() {
//
//				var
//						$this = $(this);
//
//				addTrigger($this, 100);
//
//			});
//
//
//			animOpacity1.each(function() {
//
//				var
//						$this = $(this);
//
//				addTrigger($this, 1000);
//
//			});
//
//			addTrigger(animFlag1, 0);
//			addTrigger(animCyclist1, 1300);
//			addTrigger(animCyclist2, 2200);
//			addTrigger(animCyclist3, 2000);
//			addTrigger(animCyclist4, 0);
//
//		}
//
//		if( section2.hasClass('active') ) {
//
//			animLetter2.each(function() {
//
//				var
//						$this = $(this);
//
//				addTrigger($this, 100);
//
//			});
//
//			animOpacity2.each(function() {
//
//				var
//						$this = $(this);
//
//				addTrigger($this, 1000);
//
//			});
//
//		}
//
//		if( section3.hasClass('active') ) {
//
//			animLetter3.each(function() {
//
//				var
//						$this = $(this);
//
//				addTrigger($this, 100);
//
//			});
//
//			animOpacity3.each(function() {
//
//				var
//						$this = $(this);
//
//				addTrigger($this, 500);
//
//			});
//
//		}
//
//		if( section4.hasClass('active') ) {
//
//			animLetter4.each(function() {
//
//				var
//						$this = $(this);
//
//				addTrigger($this, 100);
//
//			});
//
//			animOpacity4.each(function() {
//
//				var
//						$this = $(this);
//
//				addTrigger($this, 1000);
//
//			});
//
//		}
//
//		if( section5.hasClass('active') ) {
//
//			pagination.addClass('pagination__item_theme_light');
//
//			setTimeout(function() {
//
//				bgVideo5.get(0).currentTime = 0;
//				bgVideo5.get(0).play();
//
//			}, 500);
//
//			animLetter5.each(function() {
//
//				var
//						$this = $(this);
//
//				addTrigger($this, 100);
//
//			});
//
//			animOpacity5.each(function() {
//
//				var
//						$this = $(this);
//
//				addTrigger($this, 1000);
//
//			});
//
//		}
//
//		if( section6.hasClass('active') ) {
//
//			animLetter6.each(function() {
//
//				var
//						$this = $(this);
//
//				addTrigger($this, 100);
//
//			});
//
//			animFeature.each(function() {
//
//				var
//						$this = $(this);
//
//				addTrigger($this, 300);
//
//			});
//
//		}
//
//		if( section7.hasClass('active') ) {
//
//			animLetter7.each(function() {
//
//				var
//						$this = $(this);
//
//				addTrigger($this, 100);
//
//			});
//
//			animList.each(function() {
//
//				var
//						$this = $(this);
//
//				addTrigger($this, 400);
//
//			});
//
//		}
//
//		if( section8.hasClass('active') ) {
//
//			animLetter8.each(function() {
//
//				var
//						$this = $(this);
//
//				addTrigger($this, 100);
//
//			});
//
//			addTrigger(animSuperhero, 3000);
//
//			animOpacity8.each(function() {
//
//				var
//						$this = $(this);
//
//				addTrigger($this, 1000);
//
//			});
//
//		}
//
//		timer = 1000;
//
//	}
//
//	function addTrigger(elem, timerIncrease) {
//
//		timeouts.push( setTimeout(function() {
//			elem.addClass('trigger');
//		}, timer) );
//
//		timer += timerIncrease;
//
//	}
//
//	container.on('change', function() {
//
//	});
//
//};
