

/**
 * 결과물 : 1~10까지 더한값
 * 재료(매개변수 : 기능을 실행하는데 필요한 데이터) : 덧셈할 수, 반복하는 횟수
 */

/**
 * for문을 활용하여 1에서 10까지 덧셈하는 프로그램을 작성하자
 */
// sum = 0; //덧셈을 한 결과를 저장하는 변수
// num = 1; //더하는 수
// times = 1; //반복하는 횟수(10회 반복)

// for(times=1; times<=10; times++){
// 	sum = sum + num;
// 	num = num + 1;
// 	window.document.write("더한 값 : ",num, "<br>");
// 	window.document.write("더한 횟수 : ", times, "<br>");
// }
// // window.document.write("결과 : ",sum, "<br>");

// /**
//  * while문을 활용하여 1에서 10까지 덧셈하는 프로그램을 작성하자
//  */
// sum = 0; //덧셈을 한 결과를 저장하는 변수
// num = 1; //더하는 수
// times = 1; //반복하는 횟수(10회 반복)

// while(times<=10){
// 	window.document.write("더한 값 : ",num, "<br>");
// 	window.document.write("더한 횟수 : ", times, "<br>");
// 	sum = sum + num;
// 	num = num + 1;
// 	times = times + 1;
// }
// window.document.write("결과 : ",sum, "<br>");


sum = 0; //덧셈을 한 결과를 저장하는 변수
num = 1; //더하는 수
times = 1; //반복하는 횟수(10회 반복)
//반복을 실행하기 전
	window.document.write("더한 값 : ",num,"<br>");
	window.document.write("더한 횟수 : ",times,"<br>");
	window.document.write("더한 결과물 : ",sum,"<br>");

do{
	// window.document.write("더한 값 : ",num, "<br>");
	// window.document.write("더한 횟수 : ", times, "<br>");
	sum = sum + num;
	num = num + 1;
	times = times + 1;
} while(times <= 10);
window.document.write("결과 : ",sum, "<br>");





