/**
 * 루프 중단하기
 * 
 * for문이나 while같은 반복문을 도중에 중단하는 방법이다
 * 이때 break문을 사용한다. 반복문 안에 break가 있으면 반복문 대괄호 부분의 마지막으로 코드의 실행 흐름이 이동한다
 * 
 * 기본형태)
 * while(조건){
 *  실행되는 부분1
 *  break;
 *  실행이 안되는 부분
 * }
 * 실행되는 부분2
 * 
 */

 b = 2;
 for(a=0; a<5; a++){
     //a는 0,1,2,3,4
     if(a == b){
         break;
     }
     window.document.write(b,'빼기',a,"=",b-a,"<br>");
 }

 /**
  * 반복실행을 다음 차례로 옮기기(반복 실행을 생략하기)
  * 
  * break문은 실행중인 루프 처리를 중단하지만 continue문은 현재 반복처리만 생략하고 다음번 반복처리를 수행한다
  * 
  * 기본형태)
  * while(조건){
  *  실행되는 부분1
  *  continue;
  *  실행이 안되는 부분
  * }
  * 실행되는 부분2
  */
 
window.document.write("continue를 활용한 뺄셈하기<br>");
b = 2;
for(a=0; a<5; a++){
    //a는 0,1,2,3,4
    if(b == a){
      continue;
    }
    window.document.write(b,'빼기',a,"=",b-a,"<br>");

}

/**
 * 선택문
 * 
 * 프로그램의 실행흐름에서 값에따라 선택사항이 많은 분기처리를 깔끔하게 처리를 해야할 경우를 간단하게 처리하기 위한 구문이다
 * 
 * switch문은 여러개의 case라는 선택사항에 따라 값이 맞는 것을 골라 처리한다
 * 선택사항 값이 맞지 않는 경우는 default 선택으로 넘어간다
 * 처리 후 break문을 활용하여 실행을 중지한다
 * 
 * 기본형태)
 * switch(변수이름){
 * 	case 변수값1 : 
 * 	 처리하고 싶은 내용
 * 	 break;
 * 	case 변수값2 :
 * 	 처리하고 싶은 내용
 *  break;
 * 	default :
 *   처리하고 싶은 내용
 * } 
 */
i = 10;
switch(i){
	case 10:
		window.document.write("변수값은 10이다<br>");
		break;
	case 20:
		window.document.write("변수값은 20이다<br>");
		break;
	default:
		window.document;write("변수값은 10,20이 아니다<br>");
}

//break문을 생략하는 경우
/**
 * 예시) 월마다 말일을 알려주는 프로그램을 작성할 때
 * 
 * 각 case 마다 같은 처리를 하는 경우는 break를 의도적으로 제외하여 코드를 작성하면 여러번 반복해서 작성하지 않아도 된다
 */
month = 1;
day = 30;

switch(month){
	case 1:
	case 3:
	case 5:
	case 7:
	case 8:
	case 10:
	case 12:
		day = 31;
		break;
	
	case 4:
	case 6:
	case 9:
	case 11:
		day = 30;
		break;
	
	case 2:
		day = 28;
		break;

	default:
		day = -1;
		break;
}
window.document.write(month, "월은", day, "<br>");

/**
 * 참고 : 웹페이지에서 사용자에게 값 입력받기
 * window.promt("메시지 내용", "기본값"); 코드를 사용하면 웹페이지에서 사용자에게 입력 받을 수 있는 대화상자가 나타난다
 * 변수에 사용자가 입력한 값이 저장된다 
 */
// mes = window.prompt("입력하는 대화상자", "안녕하세요")
// window.document.write(mes);

/**
 * 제비뽑기 프로그램 만들기
 */ 
num = window.prompt("숫자를 입력해 주세요(1~9)", "")
switch(num){
	case "7" :
		winodw.document.write("축하합니다 1등! 유럽 여행권에 당첨 되었습니다")
		break;
	case "2" :
	case "5" :
		window.document.write("축하합니다 2등! 100인치 TV에 당첨 되었습니다")
		break;
	case "4" :
	case "6" :
	case "9" :
		window.document.write("축하합니다 3등! 10만원 상품권에 당첨 되었습니다")
		break;
	default :
		window.document.write("티슈 드립니다<br>")
		break;
}

//함수

/**
 * 프로그램 안에서 반복해서 수행하는 계산이나 작업을 하나로 묶어 놓은 구조
 * 함수를 활용해서 이전에 작성했던 코드를 재사용할 수 있다
 * 함수 내의 코드에서 오류가 발생했을 경우 함수의 내용만 수정하면 함수가 적용된 모든 부분에 같이 적용된다
 * 
 * 주의점
 * 함수는 기능에 따라서 각자 다른 이름을 가진다
 * 함수 이름은 기능을 이해할 수 있도록 이름을 정해야한다
 * 
 * 함수는 기능에 따라서 필요한 재료(데이터)가 필요할 수 있다
 * 이를 매개변수라 한다. 함수를 만들 때 매개변수도 같이 표시한다
 * 참고로 매개변수가 필요하지 않은 경우 별도로 함수에 표시하지 않는다
 * 
 * 함수는 기능에 따라서 반환값(리턴값)이 있을 수도 없을 수도 있다
 * 반환값은 함수가 기능을 수행한 결과 값이다
 * 결과를 반환하는 코드(return)를 활용하여 함수의 결과 값을 도출한다
 * 예시) num = window.promt("안녕하세요", "");
 * window.prompt()함수의 반환값은 변수 num에 들어간다
 * 참고로 반환값이 없을 때는 결과를 반환하는 코드(return)를 작성하지 않아도 된다
 * 
 * 기본형태)
 * function 함수이름(매개변수1, 매개변수2, 매개변수3  . . . ){
 * 	함수가 처리하는 내용
 * 	return 결과값
 * }
 * 
 * 예시) 두 수를 더하는 함수
 * 
 * 함수 이름 조건 : 영문자, 언더바, 숫자, 달러기호를 쓸 수 있다
 *  단, 맨 처음 문자는 숫자가 올 수 없다. 대문자, 소문자를 구분한다
 */

function addNumber(number1, number2){
	window.document.write(number1, "<br>");
	window.document.write(number2, "<br>");
	sum = number1 + number2;
	return sum;
}

 /**
	* 함수 사용법
  */
 
result = addNumber(1,2);
window.document.write("결과값 : ", result)


/**
 * 국어 영어 수학 성적을 매개변수로 받아 평균을 반환하는 함수를 만들자
 */
/**
 * 결과물 : 평균
 * 재료 : 국어 영어 수학 점수
 */
result = 0;
korean = 90;
english = 60;
math = 50;
function getAverage(akorean, aenglish, amath){ //굳이 a붙여서 쓴건 매칭되는걸 보여주려고
	sum = akorean + aenglish + amath;
	return sum/3;
}

result = getAverage(korean, english, math);
window.document.write("평균값은 : ", result)
