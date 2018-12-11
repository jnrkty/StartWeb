
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
	$('.rank-left').click(function(){
		$('.rank-lists').first().css('display','block');
		$('.rank-lists').last().css('display','none');
		$(this).css('background-color','#ffff');
		$('.rank-right').css('background-color','#f9fafc');
	});
	$('.rank-right').click(function(){
		$('.rank-lists').last().css('display','block');
		$('.rank-lists').first().css('display','none');
		$(this).css('background-color','#ffff');
		$('.rank-left').css('background-color','#f9fafc');
	});

	$('.rank-lists').first().css('display','block');
	$('.rank-lists').last().css('display','none');

	var selectedMenuCnt = 0; //사용자가 지정한 메뉴 갯수
	var menuArr = ["dici","newsi","stocki","dealeri","mapi","moviei","musici","booki","webtooni"];
	$('.menu-setting').click(function(){ 
		var cnt = 0;
		$('.item2-1').each(function(){ //빈박스 다섯개만 보여주기
			$(this).prop('class','item2-1');
			cnt++;
			if(cnt > 5){
				$(this).addClass('display-none');
			}
		});
		$('.menu-close').click(function(){
			var i = 0;
			if(selectedMenuCnt == 0){ //빈박스 다섯개 없애서 원래대로 돌리는 코드
				$('.item2-1').each(function(){
					$(this).prop('class','item2-1 back-img');
					$(this).addClass(menuArr[i++]);
				})
			}

		});
	
		
	// 	('display','none');
	// 	$('.menu-plus').css('display','inline-block');
	// 	$('.checkbox').css('display','block');
	// });
	// $('input[type="checkbox"]').click(function(){
	// 	var arr = new Array();
	// 	$('input[class="text"]').each(function(){
	// 		var text = $(this).val();
	// 		$(this).val('');
	// 		if(text != ''){
	// 			arr.push(text);
	// 		}
	// 	});
	// 	var check = $(this);
	// 	var find = arr.indexOf(check.val());
	// 	if(find<0 && arr.length == 5){ //체크한게 배열에 없고 꽉찼을 때 체크한거무조건 비활성화
	// 		console.log('꽉차서 비활성화');
	// 		check.prop('checked',''); 
	// 	} else if(find<0 && arr.length != 5) { //체크한게 배열에 없고 꽉차지 않았으면 체크한거 추가
	// 		console.log('배열에없어서 추가');
	// 		arr.push(check.val());
	// 		check.prop('checked','checked')
	// 	} else{ //체크한게 배열에 있으면 배열에서 해당 문자열을 제거
	// 		console.log('체크한게 배열에있어서 제거');
	// 		arr.splice(find,1);
	// 	}
	// 	for(var i=0; i<arr.length; i++){
	// 		$('input[class="text"]').eq(i).val(arr[i]);
	// 	}

	});
});

