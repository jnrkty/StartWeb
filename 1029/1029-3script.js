
//변수의 인식 범위(scope)
/**
 * 함수 밖에서도 사용할 수 있는 변수(글로벌변수, 전역변수) 와
 * 함수 안에서만 사용할 수 있는 변수(로컬변수, 지역변수)를 구분해서 활용할 수 있다
 */
/**
 * 로컬변수
 * 
 * 로컬 변수는 그 변수를 선언한 함수 내에서만 사용할 수 잇는 함수이며,
 * 그 범위는 함수를 감싸고 있는 중괄호{} 의 시작부터 끝까지 이다
 * 함수 안에서 만들 수 있으며, 변수명 앞에 var 키워드를 붙여 만들 수 있다
 * 
 * 기본형태)
 * function myFunction(){
 *  var num1 = 1; //지역변수
 *  num2 = 2; //전역변수
 * }
 */


window.document.write("지역변수 예시<br>");
a = 1;
function showNumber(){
  var a; //지역변수
  a = 2;
  window.document.write(a,"<br>");
}
showNumber();
window.document.write(a);

/**
 * 지역변수는 중괄호로 묶인 부분만 활용할 수 있으므로 함수 밖에서는 활용할 수 없다
 * 예시에서 변수의 이름이 같지만 변수를 참조하는 위치
 * (함수 밖/안)에 따라 값이 다르게 처리 된다
 */

//글로벌 변수
/**
 * 함수의 외부에서 만들고 사용한 변수를 글로벌변수, 전역변수 라고 한다
 * 글로벌변수는 함수의 안이나 밖에서 참조, 변경할 수 있다
 * 
 * var을 붙이지 않는다
 */

num1 = 1;
function showNumber2(){
	var num1 = 3; //지역변수
}
showNumber2();
window.document.write("<br>전역변수 : ",num1);

/**
 * 지역변수, 전역변수의 활용
 * 지역변수는 함수 내에서 임시 값을 저장하는 용도(임시 저장장소)
 * 전역변수는 함수 밖에서 활용한다.
 * 전역변수 값이 필요하면 매개변수로 전역변수값을 받는다
 * -> 실수로 전역변수 값을 잘못 대입하면 코드 전체의 전역변수 값이 변경될 수 있으므로 주의해야 한다
 */

 /**
 * 가위 바위 보 게임 만들기
 * 
 * 결과물 : 이겼는지 졌는지 비겼는지 나타낼 메시지
 * 재료 : 3가지 상황중 1개(어느 버튼을 눌렀는가)
 * 				(매개변수값 예시 가위버튼 : 0, 바위버튼 : 1, 보버튼 : 2)
 */

//사용자가 누른 버튼에 대해 게임을 시작함
alert("가위바위보를 합시다");
function myChoice(select){
	switch(select){
		case 0 :
			alert("가위를 선택했습니다");
			break;
		case 1 :
			alert("바위를 선택했습니다");
			break;
		case 2:
			alert("보를 선택했습니다");
			break;
	}
	var result = myGame(select); //function의 myGame에 user_select와 대입시킴. 지역변수
	alert(result); //결과 출력
}

//사용자의 선택과 컴퓨터의 선택을 비교함
function myGame(user_select){
	//Math.floor() : 소수점 이하를 버리는 함수
	//Math.random() : 0이상 1미만의 실수 중에서 1개를 선택하는 함수
	var cpu_select = Math.floor(Math.random()*3);

if(user_select == cpu_select){ //사용자와 컴퓨터가 비기는 경우
	return "비겼습니다";
	} else if (user_select == 0 && cpu_select == 2){ //사용자가 이기는 경우(가위로)
		return "이겼습니다";
	 } else if(user_select == 1 && cpu_select == 0){ //사용자가 이기는 경우(바위로)
		return "이겼습니다";
	} else if(user_select == 2 && cpu_select == 1){ //사용자가 이기는 경우(보로)
		return "이겼습니다";
	} 
	else{ //사용자가 지는 경우
		return "졌습니다";
	}
}
