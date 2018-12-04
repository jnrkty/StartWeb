
$(document).ready(function(){
	$('.auto-search').click(function(){
		$('#auto-box').toggleClass('display-block');
		$('.auto-down').toggleClass('display-block-down');
	})

	$('.item4').click(function(){
		$(this).toggleClass('item4-1');
		$('.sub-menu').toggleClass('display-block');
		$('.sub-menu-background').toggleClass('display-block');
	});
	$('.menu-close').click(function(){
		menu();
	});
	function menu(){
		$('.sub-menu-background').toggleClass('display-block');
		$('.sub-menu').toggleClass('display-block');
		$('.item4').toggleClass('item4-1');
	}
	$('.item5').hover(function(){
		$('.rank-box').toggleClass('display-block');
	});
	
	//div는 ul태그를 감싸는 객체의 선택자명
	//h는 marginTop의 높이
	//time은 이둉하는데 걸리는 시간
	function ticker(div,h,time){
		timer = setTimeout(function(){ /* setTimeout은 일정시간이 지난뒤에 실행하라는 콜백함수 */
			$(div+ ' li:first').animate({marginTop: h}, time, function(){ //time은 애니메이션 올라가는 속도
				//여기서 this는 item5클래스 안에 있는 ul태그의 첫번째 li태그
				//detach는 해당 객체를 제거한 후 해당 객체를 리턴한다
				$(this).detach().appendTo(div + '>ul').removeAttr('style'); //li:first의 css를 삭제. 다시반복되니까 2번이 first가됨
			});
			ticker(div,h,time); //ticker함수 실행. setTimeout안에있으니까 계속계속 반복. 이게없으면 한번 실행되고 맒
		}, 2000); //2초마다 바뀜
	};
	ticker('.item5','-20px',400); //ticker함수 실행 (div, h, time)
	ticker('.news-content','-20px',600);
});