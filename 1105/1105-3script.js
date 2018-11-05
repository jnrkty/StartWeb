/**
 * 자동차 오브젝트 만들고 활용하기
 */
/**
 * ----<스마트폰을 대상으로 정하고 오브젝트 만들기>----
 * 대상의 상태 : 스마트폰 전원, 스마트폰 통화중 -> 데이터로 표현가능
 * 대상의 행동 : 전화를 건다, 문자메시지를 보낸다, 사진을 찍는다 -> 함수로 표현가능
 */
 smartphone = {
	 on_off : "on",
	 calling : "is calling",
	 call_func : function(){
		 return "전화중입니다";
	 },
	 sms : function(){
		return "문자를 보냅니다"
	 },
	 photo : function(){
		 return "사진을 찍습니다"
	 }
 }

window.document.write("지금 켜져 있나요? ", smartphone.on_off,"<br>");
window.document.write("전화중 인가요? ", smartphone.call_func(),"<br>");


car1 = {
	type : 1,
	company : "기아",
	name : "소울",
	color : "빨강",
	power : "가솔린",
	start : function(){
		return "붕붕~";
	}
};

car2 = {
	type : 2,
	company : "현대",
	name : "코나",
	color : "은색",
	voltage : "10v",
	power : "전기",
	start : function(){
		return "위잉위잉~";
	}
};

car3 = {
	type : 1,
	company : "쌍용",
	name : "타볼리",
	color : "검정",
	power : "디젤",
	start : function(){
		return "우와아앙~";
	}
};

cars = [car1, car2, car3];
for(i=0; i<cars.length; i++){ // 0, 1, 2
	if(cars[i].type == 2){
	window.document.write(cars[i].voltage,"<br>");
	}
	window.document.write(cars[i].company,"<br>");
	window.document.write(cars[i].name,"<br>");
	window.document.write(cars[i].color,"<br>");
	window.document.write(cars[i].power,"<br>");
	window.document.write(cars[i].start(),"<br>");
	window.document.write("<br>");
}
