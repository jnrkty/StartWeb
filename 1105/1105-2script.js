//구구단 2~4단까지 출력하기
for(i=2; i<5; i++){
	for(j=1; j<10; j++){
		window.document.write(i, "*", j, "=", i*j);
		window.document.write("<br>");
	}
}

//오늘 날짜만 출력하기(시간필요x)
now = new Date();
window.document.write(now.getFullYear());
window.document.write(now.getMonth()+1);
window.document.write(now.getDate());
window.document.write(now.getDay());

num = [];
num[0] = [28, 38, 62];
num[1] = [36, 81, 65];
num[2] = [47, 46, 46];

sum1 = 0;
sum2 = 0;
sum3 = 0;

for(i=0; i<3; i++){ //i : 0 1 2
	sum1 = sum1 + num[i][0];
	sum2 = sum2 + num[i][1];
	sum3 = sum3 + num[i][2];
}
window.document.write("<br>", sum1,"/",sum2,"/",sum3,"<br>");

/**
 * ----<오브젝트(object)형>----
 * 사용자가 기본 자료형(number, string, boolean)을 조합해서 만든 사용자 정의 형태 자료형
 * 
 * 오브젝트 이름 = {자료이름 : 데이터값, 자료이름 : 데이터값}
 */
a = {name : "배철수", score : 100};
b = {name : "홍길동", score : 40};
/**
 * 오브젝트에 저장된 값을 읽어오려면?
 * 오브젝트 이름.자료이름 -> 데이터값 리턴
 */
window.document.write(a.name,"<br>");
/**
 * 경우에 따라서 데이터값은 숫자, 문자, 배열, 함수
 */
person = {
	name : "손흥민",
	number : 7,
	id : 3123,
	family : ["아버지", "어머니", "형"],
	say_hello : function() {
			return "good morning!";
	}
}
window.document.write("<br>", person.name);
window.document.write("<br>", person.number);
window.document.write("<br>", person.id);
window.document.write("<br>", person.family);
window.document.write("<br>", person.say_hello());



// 오브젝트 안에 오브젝트를 넣을 수 있다.
player = {
	son : {
	 name : "손흥민",
	 number : 7,
	 id : 3123,
	 family : ["아버지", "어머니", "형"],
	 say_hello : function() {
			 return "good morning!";
	 }
},
	park : {
	 name : "박지성",
	 number : 13,
	 id : 3123,
	 family : ["아버지", "어머니", "형"],
	 say_hello : function() {
			 return "good job!";
	 } 
	}    
}
window.document.write("<br>", player.park.name,"<br>");

// 배열에 오브젝트를 넣을 수 있다.
korean = [];
son = {
name : "손흥민",
number : 7,
id : 3123,
family : ["아버지", "어머니", "형"],
say_hello : function() {
	 return "good morning!";
	}
};

park = {
name : "박지성",
number : 13,
id : 3123,
family : ["아버지", "어머니", "형"],
say_hello : function() {
	 return "good job!";
	} 
};

korean.push(son);
korean.push(park);

console.log(korean);
window.document.write(korean[0].name);
window.document.write(korean[0].number);
window.document.write(korean[0].id);
window.document.write(korean[0].family);
window.document.write(korean[0].say_hello());