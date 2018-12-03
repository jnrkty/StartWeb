/* 화면에 글이 출력되어있는 상태에서 버튼을 클릭하면 사라지도록 처리 */

$(document).ready(function () {
	$('#btn1').click(function(){
	//css를 이용하여 display를 none으로 만드는 방법
		$('p').css('display', 'none');
	});
	//addClass를 이용하는 방법
	$('#btn2').click(function(){
		$('p').addClass('display-none');
	})
	//hide()를 이용하는 방법
	$('#btn3').click(function(){
		$('p').hide();
	})

/* 화면에 글이 출력되어있는 상태에서 버튼을 클릭하면 사라지고, 사라진 상태에서 버튼을 클릭하면 글이 다시 출력되도록 처리 */
$('#btn4').click(function(){
	$('p').toggleClass('display-none');
});

$('#btn1-2').click(function(){
	var display = $('p').css('display');
	if(display == 'block')
		$('p').css('display', 'none');
		else
		$('p').css('display', 'block');
})

$('#btn2-2').click(function(){
	var className = $('p').attr('class');
	console.log(className);
	//indexOf는 문자열에 매개변수 문자열이 있는지 없는지 알려주는 함수로
	//있으면 매개변수 문자열의 첫글자가 있는 위치를 알려주고 없으면 -1을 알려준다 (배열은 0부터 시작하는데 -1이면 없다는뜻임)
	if(className == undefined || className.indexOf('display-none') < 0 ){
		$('p').addClass('display-none');
	} else {
		$('p').removeClass('display-none');
	}

});

});
