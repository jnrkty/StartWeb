$(document).ready(function(){
	var pointCnt = 0;
	var op = "+"; //눌린 연산자를 저장하는 변수. +로 기본
	var isPushOp = false; //연산자가 눌린적이 있는지 없는지 확인하는 변수
	var input = $('input');
	var num1 = 0;

  $('.num').click(function(){
		var val = $(this).text();
		//연산자가 눌린 다음에 숫자를 누른 경우
		if(isPushOp){ //true일때
			input.val('0');
			isPushOp = false;
		}
		if(val == "."){
			//점이 처음 눌린게 아니면 작업을 종료하여 점이 input창에 안찍히도록 한다
			if(pointCnt != 0) return;
			//점이 처음 눌리면 횟수를 1로 만든다
			pointCnt++;
		}
		//눌린 키와 input창에 있는 값을 이어 붙여서 출력
		if(input.val() == "0")
			input.val(val);
		else
			$('input').val(input.val() + val);
	})

	$('.op').click(function(){
		var tmp = parseFloat(input.val()); //parseFloat : 문자열을 실수로 바꾸는 함수
		if(isPushOp == false || op == '='){ //연산자 누르고 또 연산자를 눌렀을 때. || '=' 일때는 true여도 실행해라.
			switch(op){
				case "+": num1 = num1 + tmp; break;
				case "X": num1 = num1 * tmp; break;
				case "-": num1 = num1 - tmp; break;
				case "=": num1 = tmp; break;
			}
			op = $(this).text();
			input.val(num1);
		}
		isPushOp = true;
		console.log(num1);
	})
})

//숫자 처음 입력했으면 기본값이기때문에 isPushOp가 false. 그래서 연산자 눌렀을 때 30행이 실행됨.
//그러면 40행에 의해 바로 true로 바뀜. 계산할 숫자를 눌러야하니까 숫자를 누르는데, true인 상태이기 때문에 11행 실행.
//계산숫자 누르자마자 false로 원래대로 다시 바꿔줌. 이때 연산자 누르면 또 30행 실행. 계속계속 계산할 수 있음.
// = 을 누르면 바로 +같은거 해서 새로운 계산 해주고 싶은데 30행은 false여야만 실행된다. 그래서 || op == "="을 붙여서 true지만 =일때도 실행시켜준다