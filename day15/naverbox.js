
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

	$('.api-list>li').hover(function(){
		// $('.api-list>li>a').toggleClass('display-none');
		$(this).children('a').toggleClass('display-none');
		// $('.api-list>li>div').toggleClass('display-block');
		$(this).children('div').toggleClass('display-block');
	});

	//box5-bottmom가 7개. 그중 선택할 박스 번호가 index
	var index = 1;
	function displayBox5(i){
		//6개를 일단 다 안보이게 하고 = 기존에 보였던 박스를 안보이게 하기 위해
		$('.box5-bottom').removeClass('display-block');
		//선택한 i번째를 보여준다
		$('.box5-bottom').eq(i-1).addClass('display-block');
		$('.box5-item2>b').text(i);
		$('.location').removeClass('display-inline-block');
		$('.location').eq(i-1).addClass('display-inline-block');
	}
	displayBox5(index);

	$('.box5-next').click(function(){
		index++; //박스가 7개이기 때문에 8번째로 가려고 하면 첫번째로 보내준다
		if(index > 7){ //7페이지에서 또 누르면 1로 돌아가야해서
			index = 1;
		}
		displayBox5(index);
	});

	$('.box5-prev').click(function(){
		index--; 
		if(index <= 0){
			index = 7;
		}
		displayBox5(index);
	});
	$('.rank-hover1').css('display','none');
	$('.rank-hover2').css('display','none');
	$('.rank-btn1').click(function(){
		$('.rank-hover1').css('display','block');
		var rank = $('.rank-hover').attr('id');
		var num = gethover(rank, 'rank-hover');
		displayContent(num);
	})
	function displayContent(index){
		('.rank-hover1').css('display','none');
		$('#rank-hover-1'+index).css('display','block');
	}

	$('.rank-btn2').click(function(){
		$('.rank-hover2').css('display','block');
	})

	function gethover(rank, hover){

	}
	displayContent(1);
});

