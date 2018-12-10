$(document).ready(function(){
	$('.tabmenu').first().css('border-bottom-color','white');
	$('.tabmenu').click(function(){
		$('.tabmenu').css('border-bottom-color','black');
		$(this).css('border-bottom-color','white');
		var id = $(this).attr('id'); //menu1
		var num = getNumber(id, 'menu'); //menu1, menu
		displayContent(num);
	});
	//주어진 매개변수의 숫자에 맞는 박스를 보여주는 함수
	function displayContent(index){
		$('.content').css('display','none');
		$('#content'+index).css('display','block');
	}
	function getNumber(tabmenu,idx){ //위에 getNumber랑 순서같게.... menu1, menu가됨
		//menu1 menu
		var index = tabmenu.indexOf(idx); //id가 존재하니까 문자열의 시작위치를 반환. 0임.
		var length = idx.length; //전체길이가 4임
		return tabmenu.substr(index+length); //ex)menu1 이면 menu'1'에서 '1'까지. 1.임 
	}
	displayContent(1);
});