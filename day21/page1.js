$(document).ready(function(){
	$('.ham-menu').click(function(){
		$('.sidebar').animate({right:'0'},1000);
	})
	$('.sidebar-close').click(function(){
		$('.sidebar').animate({right: '-200px'},1000);
	})
	var swiper = new Swiper('.contents.swiper-container', {
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
	var titleswiper = new Swiper('.title.swiper-container', {
		slidesPerView: 'auto',
		centeredSlides: true,
		spaceBetween: 30,
		clickable: true,
		slideToClickedSlide: true
	});
	swiper.controller.control = titleswiper; /* contents swiper-container에 title swiper-container연결 */
	titleswiper.controller.control = swiper; /* title swiper-container에 contents swiper-container연결 */
	$('.carousel').carousel('pause');

	/* 다음지도 실행 스크립트 */
	new daum.roughmap.Lander({
		"timestamp" : "1546583886170",
		"key" : "rn75",
		"mapWidth" : "200",
		"mapHeight" : "300"
	}).render();
	
	// navigation: {
		// 	nextEl: '.swiper-button-next',
		// 	prevEl: '.swiper-button-prev',

	// var swiperbar = new Swiper('.swiper-container-bar', {
	// 	slidesPerView: 'auto',
	// 	centeredSlides: true,
	// 	spaceBetween: 30,
	// 	pagination: {
	// 		el: '.swiper-pagination',
	// 		clickable: true,
	// 	},
	// });
});