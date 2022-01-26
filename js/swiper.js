$(document).ready(function(){


	//mainSwiper
	var mainSwiper = mainSwiper = new Swiper('.swiper-container', {
		direction: 'horizontal',
		speed: 1500,
		mousewheel: true,
		simulateTouch: 0,
		loop: true,
		autoplay: {
			delay: 5000,
			disableOnInteraction: true,
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		keyboard: {
			enabled: true,
			onlyInViewport: false,
		},
		on: {
			init: function() {
				$('#section-1').find('.btn_arrow').addClass('active start');
			}
		}
	});


	mainSwiper.on('touchStart', function(e){
		if (!$(e.target).is('.swiper-play-stop a')){
			mainSwiper.autoplay.stop();
			$('.swiper-slide').find('.btn_arrow').removeClass('active start');
			if($('.swiper-play-stop a').hasClass('stop')){
				$('.swiper-slide-active').find('.btn_arrow').addClass('active');
				$('.swiper-play-stop a').removeClass('stop').addClass('play');
			}
		}
	});


	mainSwiper.on('slideChangeTransitionStart', function(e){
		if(mainSwiper.realIndex == 2){
			$('.swiper-pagination-wrap').addClass('gray');
		}else{
			$('.swiper-pagination-wrap').removeClass('gray');
		}

		if(mainSwiper.realIndex == 4){
			$('.swiper-pagination-wrap').hide();
		}else{
			$('.swiper-pagination-wrap').show();
		}

		$('.swiper-slide').find('.btn_arrow').removeClass('active start');
		if($('.swiper-play-stop a').hasClass('stop')){
			$('.swiper-slide-active').find('.btn_arrow').addClass('active');
		}
	});

	mainSwiper.on('slideChangeTransitionEnd', function(e){
		$('.swiper-slide-active').focus();
	});

	
	// $('.btn_arrow a').on('keyup', function(e){
	// 	var keyCode = e.keyCode || e.which;
	// 	var dataIndex = $(this).data('index');
	// 	if(keyCode == 9 && !e.shiftKey){
	// 		mainSwiper.slideTo(dataIndex);
	// 	}else if(keyCode == 9 && e.shiftKey){
	// 		mainSwiper.slideTo(dataIndex-1);
	// 	}
	// });

	$('.swiper-slide:eq(0)').on('focus', function(e){
		mainSwiper.slideTo(0);
	});

	//mainSwiper
	$('.swiper-play-stop a').on('click', function(e){
		if($(this).hasClass('stop')){
			$(this).removeClass('stop').addClass('play');
			mainSwiper.autoplay.stop();
		}else{
			$(this).removeClass('play').addClass('stop');
			mainSwiper.autoplay.start();
			$('.swiper-slide-active').find('.btn_arrow').addClass('active start');
		}
	});
	

	$('.swiper-pagination-bullet').on('click', function(e){
		$('.swiper-play-stop a').removeClass('stop').addClass('play');
		mainSwiper.autoplay.stop();
	});


	$('html, body').on('mousewheel DOMMouseScroll', function(e){
		$('.swiper-play-stop a').removeClass('stop').addClass('play');
	});

	$('html, body').on('keyup', function(e){
		var keyCode = e.keyCode || e.which;
		if(keyCode == 37 || keyCode == 39){
			$('.swiper-play-stop a').removeClass('stop').addClass('play');
		}
	});

	$(window).on('resize', function(){
		$('.swiper-play-stop a').removeClass('stop').addClass('play');
		mainSwiper.autoplay.stop();
	});

});

  