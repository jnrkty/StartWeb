//input에서 값 두개 입력받고 버튼으로 출력하는 문제 (sum, sum2 sum3 sum4 네가지 방법)


function sum(){
	var sum = 0;
	var input = document.getElementsByTagName('input');
	for(var i=0; i<2; i++){
		//각 input 태그에 있는 값을 가져옴
		var strNum = input[i].value;
		//가져온 값을 정수로 변환
		var num = parseInt(strNum);
		//sum에 정수를 누적
		sum += num;
	}

	window.alert(sum);
}

function sum2(){
	var strNum1 = document.getElementById('num1').value;
	var strNum2 = document.getElementById('num2').value;
	var num1 = parseInt(strNum1);
	var num2 = parseInt(strNum2);
	alert(num1 + num2);
}

function sum3(){
	var sum = 0;
	var input = document.querySelectorAll('input');
	for(var i=0; i<2; i++){
		//각 input 태그에 있는 값을 가져옴
		var strNum = input[i].value;
		//가져온 값을 정수로 변환
		var num = parseInt(strNum);
		//sum에 정수를 누적
		sum += num;
	}
	window.alert(sum);
}

function sum4(){
	var strNum1 = document.querySelector('input#num1').value;
	var strNum2 = document.getElementById('input#num2').value;
	var num1 = parseInt(strNum1);
	var num2 = parseInt(strNum2);
	alert(num1 + num2);
}
