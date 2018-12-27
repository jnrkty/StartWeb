$(document).ready(function(){
	var answer = randomArr();
	console.log(answer);
	
	//야구게임
	var arr = [];

	// if(strike == 0 && ball == 0)
	// 	console.log('3Out');
	// else if(strike == 3)
	// 	console.log('3S! 정답입니다');
	// else if(strike == 0)
	// 	console.log(ball+'B');
	// else if(ball == 0)
	// 	console.log(strike + 'S');
	// else
	// 	console.log(strike + 'S' + ball + 'B');

	function getStrike(arr1, arr2){
		var strike = 0;
		for(var i=0; i<arr1.length; i++){
			if(arr1[i] == arr2[i]){ //for문이 하나라서 0-0 1-1 2-2 이렇게만 비교된다
				strike++;	
			}
		}
		return strike;
	}
	function getBall(arr1, arr2){
		var ball = 0;
		for(var i=0; i<arr1.length; i++){
			for(var j=0; j<arr2.length; j++){ //for문이 두개라서 0-0 0-1 0-2 이런식으로 비교됨
				if(i != j){
					if(arr1[i] == arr2[j]) //위치는 다르지만 같은 값이 있다
					ball++;
				}
				// if(i != j && arr1[i] == arr2[j])
				// 	ball++;
			}
		}
		return ball;
	}
	var str = new String();
	for(var i=1; i<=9; i++){
		str += '<input type="text" class="box" value="'+i+'" readonly>';
	}
	var str2 = new String();
	for(var i=0; i<3; i++){
		str2 += '<input type="text" class="box" readonly>';
	}
	str2 += '<button type="button" id="selectbtn">확인</button>'
	str2 += '<button type="reset" id="reset">새게임</button>'
	$('#boxes').html(str);
	$('#input').html(str2);


	$('#boxes>.box').click(function(){
		var select = $('.red').length;

		function matchArr(){
			var cnt = 0;

			$('#input>.box').each(function(){
				if(arr.length > cnt){
					$(this).val(arr[cnt++]);
				} else {
					$(this).val('');
				}
			})
		}
		if(select < 3 || $(this).hasClass('red')){ //hasClass('A') : 해당 객체에 A라는 클래스가 있는지 
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
			alert('최대 3개 까지 선택 가능합니다');
		}
		});
		$('#selectbtn').click(function(){
			var strike = getStrike(answer, arr);
			var ball = getBall(answer, arr);
			if(arr.length !=3){
				alert('3개를 선택해야 합니다');
				return;
			}
			if((strike == 0 && ball == 0)){
				alert('3OUT');
			} else if(strike == 3){
				alert('3S! 정답입니다');
			} else if(strike == 0){
				alert(ball + 'B');
			} else if(ball == 0){
				alert(strike + 'S');
			} else {
				alert(strike + 'S' + ball + 'B');
			}
		})
		function randomArr(){
			var cnt = 0;
			var randomArr = [];
			while(cnt < 3){
				var tmp = random(1,9); //1에서 9
				if(randomArr.indexOf(tmp) == -1){ //예를들어 5가나왔을때 이게 실행되면 indexof로 못찾아서 -1.
					randomArr.push(tmp); //그 5를 tmp에 push해줌
					cnt++ //반복
				}
			}
			return randomArr;
		}
		function random(min, max){
			return parseInt(Math.random()*(max-min+1)+min);
		}
		$('#reset').click(function(){
			arr = [];
			$('.red').removeClass('red');
			answer = randomArr();
			console.log(answer)
			alert('새 게임을 시작합니다')
		})
})


