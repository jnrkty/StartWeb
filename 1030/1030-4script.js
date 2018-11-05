/**
 * 두개의 문자열을 입력받아서(prompt())
 * 두개 문자열중 글자가 더 긴 문자열을 보여주는 코드를 작성하시오 
 * 
 * 결과물 : 두개중 긴 문자열
 * 재료 : 결과물 2개, 문자열의 길이
 */
// msg1 = ""; //첫번째 문자열 
// msg2 = ""; //두번째 문자열
// result = ""; //긴 문자열
// msg1num = 0; //첫번째 문자열 길이
// msg2num = 0; //두번째 문자열 길이
// 위에선 하나하나쓰는거 밑에는 제대로 각잡고 하는거
msg1 = window.prompt("첫 문자열을 입력하세요", "");
msg2 = window.prompt("두번째 문자열을 입력하세요","");

msg1num = msg1.length;
msg2num = msg2.length;

if(msg1num < msg2num){
  result = msg2;

} else if(msg1num > msg2num){
	result = msg1;
		
} else{
	result = "두 문자열의 길이가 같다";
}
window.document.write(result);


/**
 * ----<수학 함수>----
 * 수학관련된 기능들을 모아놓은 수학함수를 활용하여 쉽게 값을 계산할 수 있다
 * 
 * Math.함수이름(함수의 매개변수들);
 * (메모장에 표로 정리해놓음^^ 참조할 것~)
 */
a = Math.abs(-1); //절대값을 구하는 함수 abs
console.log("a의 값 : ", a);

/**
 * random() 함수를 활용해서 임의의 수를 선택한다 (난수를 생성한다)
 * random() 함수는 0이상 1미만의 범위의 임의의 실수를 만든다. 주로 floor함수랑 같이 조합하여 임의의 정수를 만든다
 * 가정) 1에서 10까지의 정수로 된 난수가 필요하다
 *
 * Math.random() //0 ~ 0.9999 . . .
 * Math.random() * 10 //최대 범위값 = 10 -> 0 ~ 9.9999 . . .
 * (Math.random() * 10) + 1 //최소 범위값 = 1 -> 1 ~ 10.9999 . . .
 * Math.floor((Math.random() * 10) + 1) // random으로 마구잡이 생성하고 x10으로 0부터 생성. 후 floor로 소수점 버리기..0은 필요없으니까 +1
 *
 * <공식>
 * 정수n부터 m까지 임의의 정수를 선택하는 방법 (n < m)
 * 임의의정수 = Math.floor(Math.random()) * (m - n + 1)) + n
 */

/**
 * 2 ~ 12 사이의 임의의 수를 반환하는 dice()함수를 만들자
 */
//1에서 6까지만 나오는 주사위 함수
function dice(){
	return Math.floor(Math.random() * 6) + 1;
}
function twoDice(){
	return dice() + dice(); //위에서 받은 dice하나씩 넣어서 두개니까 최대 12까지 나올 수 있다는 뜻. 2~12
}
console.log("내가 던진 주사위 값은? : ", twoDice());
/**
 * 날짜나 시간을 다루려면 Date를 사용한다
 * 시간을 지정하지 않으면 현재 시간으로된 Date() 함수가 만들어진다
 * 
 * 날짜를 저장할 변수 = new Date();
 */
now = new Date();
window.document.write("<br>",now);

//(전부 표로 정리했음 메모장 참조!) 날짜를 저장할 변수.함수이름(); Date() 함수 결과물에서 시간을 가져올수있다
console.log(now.getFullYear());
console.log(now.getMonth() +1);
console.log(now.getDate());
console.log(now.getDay());

//시간을 가져오는 함수들
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());

//예시) 특정 날짜로부터 며칠이 지났는지 알아보기
day = new Date(2002,1,1,0,0,0); //지정 날짜
now = new Date(); //현재 날짜

//getTime()시간을 1970년 1월 1일부터 밀리초로 바꾸는 함수
day_mil = day.getTime(); //지정날짜가 1970년에서 얼마나 지났는지
now_mil = now.getTime(); //현재날짜가 1970년에서 얼마나 지났는지
console.log("2002년 1월 1일을 밀리초로 : " , day_mil);
console.log("오늘 날짜를 밀리초로 바꾸면 : " , now_mil);

dif = now_mil - day_mil; //오늘날짜와 2002년도 값의 차이를 구한다
console.log("2002년부터 오늘까지 : " , dif , "만큼 지났다");

dif_days = Math.ceil(dif / (24*60*60*1000)); //차이를 일 단위로 바꾼다 24시간. 60분. 60초. (1초는)1000밀리초. 소수점 나오니까 올림

window.document.write("며칠이 지났을까? : ", dif_days);


