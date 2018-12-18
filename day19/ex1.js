$(document).ready(function(){
	$('#checkbox1').click(function(){
		/* 
		prop('속성','값') 해당 객체의 속성을 값으로 설정
		prop('속성') 해당 객체의 속성 값을 가져옴
		css('속성','값') 해당 객체의 css의 속성을 값으로 설정
		css('속성') 해당 객체의 css속성의 값을 가져옴
		text('값') 해당 객체의 텍스트 값을 설정
		text() 해당 객체의 텍스트 값을 가져옴
		val('값') 해당 객체의 value값을 설정
		val() 해당 객체의 value값을 가져옴
		*/

		//내용의 체크박스 누르면 게시판 체크박스 전체 체크, 해제하면 전체 해제
		if($(this).is(':checked')){
			$('.checkbox2').each(function(){
				$(this).prop('checked','checked');	
			})
		} else {
			$('.checkbox2').each(function(){
				$(this).prop('checked','');	
			})
		} //방법1

		if($(this).prop('checked')){
			$('.checkbox2').each(function(){
				$(this).prop('checked','checked');	
			})
		} else {
			$('.checkbox2').each(function(){
				$(this).prop('checked','');	
			})
		} //방법2
		
		$('input[type=checkbox]').prop('checked',$(this).prop('checked')); //방법3
		
		var checked = $(this).prop('checked');
		$('input[type=checkbox]').each(function(){
			$(this).prop('chekced',checked);
		}) //방법4
	})
})