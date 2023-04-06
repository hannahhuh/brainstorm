// JavaScript Document
var _scrollTriggered = false;
var nighttime = false;
var header = false;
var paused = true;
var mobileNavOn = false;
var trayOpen = false;
var animating = false;
var wi = $(window).width();
var aboutOn = false;
var menuOn = false;
var mediaOn = false;

var orderOn = false;
var giveawayOn = false;
var carGone = false;
var navTop = null;
var clicked = null;
var fourthree = false;
var carLeft = false;
var mosherGone = false;
var timer;

$(document).ready(function () {
	if(document.URL.indexOf("#about") >= 0){giveawayOpen('about');}
	else if (document.URL.indexOf("#menu") >= 0){giveawayOpen('menu');}
	else if (document.URL.indexOf("#gallery") >= 0){giveawayOpen('gallery');}
	else if (document.URL.indexOf("#order") >= 0){giveawayOpen('order');}
	else if (document.URL.indexOf("#giveaway") >= 0){giveawayOpen('giveaway');}

	if( /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('.mobile').css('display','none');
		$('img.night-button').css('display','none');
		$('img.aspect').css('display','none');
		$('.arrow').css({'bottom':'2%','top':'auto','width':'50%'});
		mobileNav();
		mobileOverlay();
	}
	bottomMargin();
	openOverlay();
	shadow();
	aspectRatio();
	comingSoon();
	play();
	preorder();
	showRules();
	switchTrailers();
	night();
	grandBudapestTrigger();
	ogTrigger();
});

$(window).load(function(){
	albertChange();
	gopling();
	windows();
	wolfRun(); pinkyRun(); guntherRun();
	setInterval(function(){gbButton(); ogButton();}, 10000);
	setInterval(function(){gopling();}, 30000);
	setInterval(function(){wolfRun(); guntherRun(); pinkyRun();}, 20000);
	setInterval(function(){windows();}, 8000);
	//setTimeout(
//		function(){$('.mosher').addClass('disappear');
//		setTimeout(
//			function(){$('.giant').animate({'opacity':1});
//			setTimeout(
//				function(){$('.giant').animate({'top':'73%'});
//			}, 1000)
//		}, 2000)
//	}, 2000);
	if (document.URL.indexOf("#grand-budapest-hotel") >= 0){grandBudapest();}
	else {
		gifs();
		chopper();
		train();
		boat();
		_max();
		royal();
		darjeeling();
		tent();
		star();
		//funicular();
	}
	
	$(document).scroll(function () {
		if( /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent) ) {} else {x();}
		
		if ($('.car').visible(true) && !carLeft && grandBudapestOn){
			carGo();
		}
		
		if ($('.mosher').visible(true) && !mosherGone && grandBudapestOn){
			mosher();
		}
	});
});
	
$(window).resize(function() {
	var wi = $(window).width();
	console.log(grandBudapestOn)
	bottomMargin();
	night();
	gifs();
	shadow();
	_maxResize();
	openOverlay();
	if( /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent) ) 
		{mobileNav();} 
	else {
		if(fourthree) {fourbythree();} else {fullScreen();}
	}
});

/////////////////OVERLAY////////////////////

var giveawayOpen = function(e){
		var hi = $(window).innerHeight();
		var hi2 = $('.outer').height();
		var hi3 = hi-hi2;
		var hi6 = 615;
		var hi7 = hi-hi6;
		$('.overlay').css({'display':'block'});
		$('.overlay').css({'top':'0'});
		$('body').css({'overflow':'hidden'});
		$('.x').fadeIn().animate({'right':0});
		clicked = e;
		if (e == 'trailer'){
			$('.' + clicked + '2').css({'display':'block', 'top':hi7/2});
			$('.trailer2 iframe').attr({'src':'https://www.youtube.com/embed/Tw-B3O_F4AI?rel=0'});
			$('.trailer3 iframe').attr({'src':'https://www.youtube.com/embed/DRVKpRqcLO4?rel=0'});
			$('.arrow-r').css({'display':'block'});
			$('.trailer-credit').css({'display':'block'});
		} else {
			$('div.outer.' + e + '2').css({'display':'block', 'top':hi3/2});
		}
}

var switchTrailers = function(){
	$('.arrow-r').click(function(){
		$('.overlay').animate({'left':'-100%'});
		$('.trailer3').css('display','block')
		$('.trailer2').animate({'left':'-100%'}, function(){$('.trailer2').css('display','none');});
		$('.trailer3').animate({'left':'50%'});
		$(this).fadeOut();
		$('.arrow-l').fadeIn();
	});
	
	$('.arrow-l').click(function(){
		$('.overlay').animate({'left':'0'});
		$('.trailer2').css('display','block').animate({'left':'50%'});
		$('.trailer3').animate({'left':'200%'}, function(){$('.trailer3').css('display','none')});
		$(this).fadeOut();
		$('.arrow-r').fadeIn();
	});
}

var openOverlay = function(){
		var hi = $(window).innerHeight();
		var hi2 = $('.outer').height();
		var hi3 = hi-hi2;
		var hi4 = 360;
		var hi5 = hi-hi4;
		var hi6 = 615;
		var hi7 = hi-hi6;
		$('.nav a.open').click(function(e){
			clicked = $(this).attr('class');
			clicked = clicked.replace(' open','');
			$('.overlay').css({'display':'block'});
			$('.overlay').stop().animate({'top':'0'}, 400, 'easeInOutSine', function(){
				$('.buttons').css('right','70px');
				$('.x').fadeIn().animate({'right':0});
			});
			$('body').css({'overflow':'hidden'});
			if(trayOpen){
				animating = true;
				$('#preorder').animate({'bottom':-hi}, 600, 'easeInCubic', function(){$('#preorder').css({'display':'none'});animating=false});
				trayOpen = false;
			}
			if(clicked == 'trailer'){
				$('div.' + clicked + 's').css({'display':'block'});	$('div.' + clicked + 's').animate({'top':hi7/2}, 600, 'easeOutSine', function(){$('.arrow-r').css({'display':'block'}); $('.trailer-credit').css({'display':'block'});});
				$('.trailer2 iframe').attr({'src':'https://www.youtube.com/embed/Tw-B3O_F4AI?rel=0'});
				$('.trailer3 iframe').attr({'src':'https://www.youtube.com/embed/DRVKpRqcLO4?rel=0'});
			} else {
				$('div.outer.' + clicked + '2').css({'display':'block'});	$('div.outer.' + clicked + '2').animate({'top':hi3/2}, 600, 'easeOutSine');
			}
		});
		
		$('a.close').click(function(){
			$('.overlay').stop().animate({'top':'-2000px'}, 600, 'easeInQuad', function(){
				$('.overlay').css({'top':'2000px','display':'none'});
			});
			$('.x').animate({'right':'-10%'}).fadeOut();
			$('.buttons').css('right','12px');
			$('body').css({'overflow':'visible'});
			$('.arrow').css({'display':'none'});
			$('.trailer-credit').css({'display':'none'});
			if(grandBudapestOn) {
				$(this).attr('href','#grand-budapest-hotel');
			} else {
				$(this).attr('href','#');
			}
			if(clicked == 'trailer'){
				$('div.' + clicked + 's').animate({'top':'-2000px'}, 600, 'easeInSine', function(){
					$('div.' + clicked + 's').css({'display':'none','top':'2000px'});
					$('.overlay').css({'left':'0'});
					$('.trailer2').css({'left':'50%'});
					$('.trailer3').css({'left':'200%'});
				});
				$('.trailer3 iframe').attr({'src':''});
				$('.trailer2 iframe').attr({'src':''});
			} else {
				$('div.outer.' + clicked + '2').animate({'top':'-2000px'}, 600, 'easeInSine', function(){
					$('div.outer.' + clicked + '2').css({'display':'none','top':'2000px'});
				});
			}
		});
}

var shadow = function () {
	var outerHeight = $('.outer').height();
	if(outerHeight < 530){
		$('.inner2').css({'-webkit-box-shadow' : 'inset 0px -15px 15px rgba(50, 50, 50, 0.1)', '-moz-box-shadow' : 'inset 0px -15px 15px rgba(50, 50, 50, 0.1)', 'box-shadow' : 'inset 0px -15px 15px rgba(50, 50, 50, 0.1)'});
	} else {
		$('.inner2').css({'-webkit-box-shadow' : 'none', '-moz-box-shadow' : 'none', 'box-shadow' : 'none'});
	}
}

var comingSoon = function() {
	$('.comingsoon').click(function(){
		$('p.comingsoon').animate({'opacity':'1', 'margin-top':'1em'}, 600).delay(200);
		$('p.comingsoon').animate({'opacity':'0'}, 600, function(){$('p.comingsoon').css({'margin-top':'0'});});
	});
}

/////////////////SCROLL FUNCTIONS////////////////////

var titleTop = $('#awwwards').offset().top;
var x = function() {
		var wi = $(window).width(); 
		var scrollTop = $(window).scrollTop();
		if (!grandBudapestOn) {navTop = '14%'; navSpread = '0 2em'} else {navTop = '13%'; navSpread = '0 1em'};
		
		if (!header && scrollTop > titleTop) {
			$('.header-background').animate({'height': '65px', 'border-bottom-width':'30px'});
			$('.header-title').css('display','block');
			$('.title').css('display','none'); $('.subtitle').css('display','none');
			$('.nav').css({'position':'fixed', 'top':'70px'});
			$('.date').animate({'opacity':'0'}, 100);
			header = true;
		} else if (header && scrollTop < titleTop){
			$('.header-background').animate({'height': '0px', 'border-bottom-width':'2px'});
			$('.header-title').css('display','none');
			$('.title').css('display','block'); $('.subtitle').css('display','block');
			$('.nav').css({'position':'absolute', 'top':navTop});
			$('.date').animate({'opacity':'1'}, 100);
			header = false;
		}
}

/////////////MOBILE/////////////

var mobileNav = function (){
	var wi = $(window).width();
	var hi = $(window).innerHeight();
	$('.header').css({'background-color':'#487391','z-index':'9999'});
	$('.header.gb-style').css({'background-color':'#602e66'});
	$('#awwwwards').css({'display':'none'});
	$('img.mobile-nav').css({'display':'block'});
	$('#mobile-nav ul').css({'display':'block'});
	$('html, body').css({'background-color':'#FFF'});
	$('.mask').css('width','70%');
	$('.title h2').css('font-size','24px');
	if (hi>wi) {
		$('#mobile-nav').css('top',370);
		$('#mobile-header').css('display','block');
		$('.header').css({'height':'120px','top':'250px'});
		$('img.mobile-nav').css({'top':'250px', 'padding':'40px'});
		$('#background').css('margin-top','370px');
		$('.title').css({'top':'80px', 'z-index':'9999', 'position':'fixed'});
		$('.title.gb-style').css({'top':'90px'});
		$('.title h1').css('color','#f4ea84');
		$('.title h2').css('color','#487391');
		$('.title h1.gb-style').css({'color':'#ec6cb2'});
		$('.title h2.gb-style').css('color','#ec6cb2');
		$('.buttons img').css({'width':'80px', 'margin-top':'8px', 'margin-right': '35px'});
		$('.x').css('top','269px');
	} else {
		$('#mobile-nav').css('top',80);
		$('#mobile-header').css('display','none');
		$('.header').css({'top' :'0px', 'height':'80px'});
		$('img.mobile-nav').css({'top':0, 'padding':'20px'});
		$('.title').css({'top':'150px', 'position':'absolute', 'z-index':'99'});
		$('#background').css('margin-top','0');
		$('.buttons img').css({'width':'60px', 'margin-top':'0px', 'margin-right': '25px'});
		$('.x').css('top','10px');
	}
	
	$('.mobile-nav').click(function(){
		if(!mobileNavOn){
			$('#mobile-nav').slideDown({duration:200, complete: function(){mobileNavOn = true;}});
		} else {
			$('#mobile-nav').slideUp({duration:200, complete: function(){mobileNavOn = false;}});
		}
	});
}

var mobileOverlay = function() {
		var wi = $(window).width();
		var hi = $(document).height();
		var hi2 = $(window).innerHeight();
		var hi3 = 615;
		var hi4 = hi2-hi3
		$('body').css({'height':hi2});
		$('#awwwards').css({'top':'250px'});
		$('#content h2').css({'font-size':'72px','margin-top':'150px'});
		$('h4').css({'font-size':'48px'});
		$('#content p').css({'font-size':'36px','line-height':'48px','padding':'0 100px'});
		$('div.outer.author2 p').css({'padding':'0 40px'});
		$('.essays2 h3').css('text-align','center');
		$('.instagram').css({'width':'80%','padding':'0 100px'});
		$('#content h3').css({'font-size':'48px', 'padding':'0 100px'});
		$('.outer').css({'width':wi,'margin-left':0,'left':0,'background-color':'white','border':'none'});
		$('.inner').css({'width':wi,'height':hi,'border':'none'});
		$('.inner2').css({'width':wi,'height':hi,'padding-bottom':'300px', 'border':'none'});
		$('.columns').css({'display':'none'});
		$('.nocolumns').css({'display':'inline', 'width':wi*.9});
		
		var d = null;
		$('#mobile-nav ul li').click(function(){
			$('.openOverlay').animate({'top':'-2000px'}, 300, 'easeInSine', function(){
					$(this).css({'display':'none','top':'2000px'});
			});
			$('.openOverlay').removeClass('openOverlay');
			$('#mobile-nav').slideUp({duration:200, complete: function(){mobileNavOn = false;}});
			d = $(this).attr('class');
			$('.buttons').css('display','none');
			$('.x').fadeIn().animate({'right':0});
			if(d == 'trailer'){
				$('div.' + d + 's').css({'display':'block'}).stop().animate({'top':hi4/2}, 600, 'easeOutSine', function(){$('.arrow-r').css({'display':'block'}); $('div.' + d + 's').addClass('openOverlay');});
				$('.trailer2 iframe').attr({'src':'https://www.youtube.com/embed/Tw-B3O_F4AI?rel=0'});
				$('.trailer3 iframe').attr({'src':'https://www.youtube.com/embed/DRVKpRqcLO4?rel=0'});
			} else {
				$('div.outer.' + d + '2').css({'display':'block', 'height':hi, 'position':'absolute'}).stop().animate({'top':'370px'}, 600, 'easeOutSine', function(){
					$('div.outer.' + d + '2').addClass('openOverlay');
				});
			}
		});
		
		var mobileClose = $('a.close').click(function(){
			$('.buttons').css('display','block');
			$('.openOverlay').animate({'top':'-2000px'}, 300, 'easeInSine', function(){
					$(this).css({'display':'none','top':'2000px'});
					$(this).removeClass('openOverlay');
			});
		});
}


/////////////BROWSERS/////////////

var doc = document.documentElement;
doc.setAttribute('data-useragent', navigator.userAgent);
