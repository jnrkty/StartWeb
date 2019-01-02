$(document).ready(function(){
	$('.ham-menu').click(function(){
		$('.sidebar').animate({right:'0'},1000);
	})
	$('.sidebar-close').click(function(){
		$('.sidebar').animate({right: '-200px'},1000);
	})
})