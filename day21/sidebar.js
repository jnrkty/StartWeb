$(document).ready(function(){
	$('.ham-menu').click(function(){
		$('.sidebar').animate({right:'0'},1000);
	})
	$('.sidebar-close').click(function(){
		$('.sidebar').animate({right: '-200px'},1000);
	})
	// $('.fade-in').fadeIn( 2000, function() {
	// 	$(this).text('짠');
	// 	$( this ).css( 'color', 'red' );
	// });
})