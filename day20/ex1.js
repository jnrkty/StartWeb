$(document).ready(function(){
	/*
	html() : 해당 객체의 html 코드를 가져옴
	html(xx) : 해당 객체에 html 코드를 입력
	*/
	var str = new String();
	for(var i=1; i<=45; i++){
		str += '<input type="text" class="box" value="'+i+'" readonly>'; //i앞뒤로 +붙은건 앞뒤 문자열을 이어준다는 뜻. 외우셈그냥
	}
	console.log(str);
	var str2 = new String();
	for(var i=0; i<6; i++){
		str2 += '<input type="text" class="box" readonly>';
	}
	str2 += '<button id="reset" type="reset">리셋</button>'
	$('#boxes').html(str);
	$('#input').html(str2);

	var arr = [];
	$('#boxes>.box').click(function(){

		var selectedCnt = $('.red').length;

		function matchArr(){
			var cnt = 0;
			arr.sort(function(a,b){
				return a-b;
			});

			$('#input>.box').each(function(){
				if(arr.length > cnt){
					$(this).val(arr[cnt++]);
				} else {
					$(this).val('');
				}
			})
			// for(cnt =0; cnt <6; cnt++){
			// 	if(cnt < arr.length)
			// 	$('#input>.box').eq(cnt).val(arr[cnt]);
			// }
		}
		//$(this).prop('class').indexof('red') != -1 
		if(selectedCnt < 6 || $(this).hasClass('red')){ //hasClass('A') : 해당 객체에 A라는 클래스가 있는지 
			//is는 있는지 없는지만 확인. has는 객체정보를 가져옴
			//클릭했을 때 클릭한 개체의 value가 없으면 배열에 저장. 있으면 배열에서 제거
			if($(this).hasClass('red')){
				arr.splice(arr.indexOf($(this).val()),1);
			} else {
				arr.push($(this).val());
			}
			matchArr();
			$(this).toggleClass('red');
		}else{
			alert('최대 6개 까지 선택 가능합니다');
		}
		});
		$('#reset').click(function(){
			arr = [];
			$('.red').removeClass('red');
		})
});