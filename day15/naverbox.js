
$(document).ready(function(){
	$('.auto-search').click(function(){
		$('#auto-box').toggleClass('display-block');
		$('.auto-down').toggleClass('display-block-down');
	})

	$('.item4').click(function(){
		//접기 또는 더보기 버튼을 클릭하면 메뉴에 있는 배열을 임시 배열에 저장한다
		selectedmenu = menuArr2.slice();
		menu();
		closeSubmenu();
		initcheck();
		displaymenu();
		checkboxmenu();
	});
	// $('.menu-close').click(function(){
	// 	menu();
	// });
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
	var menuArr = ["dici","newsi","stocki","dealeri","mapi","moviei","musici","booki","webtooni"]; //기본메뉴
	$('.menu-setting').click(function(){
		createcheck(); 
		var cnt = 0;
		$('.item2-1').each(function(){ 
			//기본 코드에 item2-1과 back-img의 각 아이콘 클래스가 없는데 back-img와 아이콘 클래스를 제거하기 위해 prop함수의 class를 덮어쓰기한다
			if(menuArr2.length <= cnt){
				$(this).prop('class','item2-1');
				if(cnt > 4){
					$(this).addClass('display-none');
				}
			} 
			cnt++;
		});
		$('.sub-menu-div input[type=checkbox]').each(function(){
			$(this).removeClass('display-none');
		});
			$('.all-service').addClass('display-none');
			$(this).addClass('display-none');
			$('.ok').removeClass('display-none');
			$('.init').removeClass('display-none');
			$('.cancel').removeClass('display-none');
		});
	$('.menu-close').click(function(){
		selectedmenu = [];
		menu();
		checkboxmenu();
		closeSubmenu();
		initcheck();
	});

	$('.cancel').click(function(){
		initcheck();
		checkboxmenu();
		selectedmenu = menuArr2.slice();
		$('.all-service').removeClass('display-none');
		$('.menu-setting').removeClass('display-none');
		$('.ok').addClass('display-none');
		$('.init').addClass('display-none');
		$('.cancel').addClass('display-none');
		var i = 0;
		if(menuArr2.length == 0){
			$('.item2-1').each(function(){
				$(this).prop('class','item2-1 back-img');
				$(this).addClass(menuArr[i++]);
			});
		} else {
			$('.item2-1').each(function(){
				if(menuArr2.length > i){
				$(this).prop('class','item2-1 back-img');
				$(this).addClass(menuArr2[i++]);
				} else {
					$(this).prop('class','item2-1 display-none')
				}
			});	
		}

		$('.sub-menu-div input[type=checkbox]').each(function(){
			$(this).addClass('display-none');
		});
	});
	/* 메뉴설정에서 선택한 메뉴들을 저장하는 배열 */
	var selectedmenu = [];
	/* 실제 네이버에서 뿌려줄 메뉴 */
	var menuArr2 = [];
	$('.sub-menu-div input[type="checkbox"]').click(function(){
		//클릭한 체크박스의 value를 가져옴
		var check = $(this);
		//배열에 해당 체크박스의 value가 있는지를 확인
		var isContain = selectedmenu.indexOf(check.val());
		var maxSize = 5;
		//체크박스의 value가 배열에 없고(못찾았고-1) 배열의 길이가 maxSize이면(input 5개가 다 꽉찼으면) 해당(남은) 체크박스의 체크를 무조건 비활성화
		if(isContain<0 && selectedmenu.length == maxSize){
			check.prop('checked','');
		}
		//길이가 maxSize가 아니면(input5개가 꽉찬게 아니면) 해당 배열에 추가를 하고 해당 checkbox의 체크를 활성화 한다
		else if(isContain<0 && selectedmenu.length != maxSize){
			selectedmenu.push(check.val());
			check.prop('checked','checked');
		}
		//체크박스의 value가 배열에 있으면 배열에서 해당 문자열을 제거
		else{
			selectedmenu.splice(isContain,1); //체크한걸 제거한다(한개)
		}
		var cnt = 0;
		$('.item2-1').each(function(){
			if(cnt < selectedmenu.length){
			$(this).prop('class','item2-1 back-img');
			$(this).addClass(selectedmenu[cnt++]);
			}
			else{
				$(this).prop('class','item2-1');
				if(cnt > 4)
					$(this).addClass('display-none');
				cnt++;
			}
		})
	});
	$('.ok').click(function(){
		menuArr2 = selectedmenu.slice();
		menu();
		closeSubmenu();
		initcheck();
	});
	$('.init').click(function(){
		menuArr2 = [];
		selectedmenu = [];
		alert('초기 설정으로 돌아갑니다');
		closeSubmenu();
		menu();
		checkboxmenu();
		initcheck();
	});
	function menu(){
		$('.sub-menu-background').toggleClass('display-block');
		$('.sub-menu').toggleClass('display-block');
		$('.item4').toggleClass('item4-1');
	}
	//menuArr2에서 저장된 값들만 체크가 되도록 하는 함수
	function checkboxmenu(){
		$('.sub-menu-div input[type=checkbox]').each(function(){
			$(this).prop('checked','');
			for(var i=0; i<menuArr2.length; i++){
				if($(this).val() == menuArr2[i]){
					$(this).prop('checked','checked');
				}
			}
		});
	}
	function closeSubmenu(){
		displaymenu();
	
		$('.sub-menu-div input[type=checkbox]').each(function(){
			$(this).addClass('display-none');
		});
		$('.all-service').removeClass('display-none');
		$('.menu-setting').removeClass('display-none');
		$('.ok').addClass('display-none');
		$('.init').addClass('display-none');
		$('.cancel').addClass('display-none');
	}
	function initcheck(){
		$('.sub-menu-div label').each(function(){
			$(this).prop('for','');
		})
	}
	function createcheck(){
		var i = 0;
		var checkbox = $('.sub-menu-div input[type=checkbox]');
		$('.sub-menu-div label').each(function(){
			$(this).prop('for',checkbox.eq(i++).prop('id'));
		})
	}
	function displaymenu(){
		var i = 0;
		if(menuArr2.length == 0){
			$('.item2-1').each(function(){
				$(this).prop('class','item2-1 back-img');
				$(this).addClass(menuArr[i++]);
			});
		} else {
			$('.item2-1').each(function(){
				if(menuArr2.length > i){
				$(this).prop('class','item2-1 back-img');
				$(this).addClass(menuArr2[i++]);
				} else {
					$(this).prop('class','item2-1 display-none')
				}
			});
		}
	}
	// $('.menu-setting').click(function(){ 
	// 	var cnt = 0;
	// 	$('.item2-1').each(function(){ //빈박스 다섯개만 보여주기
	// 	
	// 		$(this).prop('class','item2-1');
	// 		cnt++;
	// 		if(cnt > 5){
	// 			$(this).addClass('display-none');
	// 		}
	// 	});
	// 	$('.menu-close').click(function(){
	// 		var i = 0;
	// 		if(selectedMenuCnt == 0){ //빈박스 다섯개 없애서 원래대로 돌리는 코드
	// 			$('.item2-1').each(function(){
	// 				$(this).prop('class','item2-1 back-img');
	// 				$(this).addClass(menuArr[i++]);
	// 			})
	// 		}

	// 	});
	// 	/* 메뉴설정에서 선택한 메뉴들을 저장하는 배열 */
	// 	var selectedmenu = [];
	// 	/* 실제 네이버에서 뿌려줄 메뉴 */
	// 	var menuArr2 = [];
	// 	$('.sub-menu-div input[type="checkbox"]').click(function(){
	
	// 		//클릭한 체크박스의 value를 가져옴
	// 		var check = $(this);
	// 		//배열에 해당 체크박스의 value가 있는지를 확인
	// 		var isContain = selectedmenu.indexOf(check.val());
	// 		var maxSize = 5;
	// 		//체크박스의 value가 배열에 없고(못찾았고-1) 배열의 길이가 maxSize이면(input 5개가 다 꽉찼으면) 해당(남은) 체크박스의 체크를 무조건 비활성화
	// 		if(isContain<0 && selectedmenu.length == maxSize){
	// 			check.prop('checked','');
	// 		}
	// 		//길이가 maxSize가 아니면(input5개가 꽉찬게 아니면) 해당 배열에 추가를 하고 해당 checkbox의 체크를 활성화 한다
	// 		else if(isContain<0 && selectedmenu.length != maxSize){
	// 			selectedmenu.push(check.val());
	// 			check.prop('checked','checked');
	// 		}
	// 		//체크박스의 value가 배열에 있으면 배열에서 해당 문자열을 제거
	// 		else{
	// 			selectedmenu.splice(isContain,1); //체크한걸 제거한다(한개)
	// 		}
	// 		var cnt = 0;
	// 		$('.item2-1').each(function(){
	// 			if(cnt < selectedmenu.length){
	// 			$(this).prop('class','item2-1 back-img');
	// 			$(this).addClass(selectedmenu[cnt++]);
	// 			}
	// 			else{
	// 				$(this).prop('class','item2-1');
	// 				if(cnt > 4)
	// 					$(this).addClass('display-none');
	// 				cnt++;
	// 			}
	// 		})
	// 	});
	// });
});

