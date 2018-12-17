$(document).ready(function (){
	$('input[type="checkbox"]').click(function(){
		//input창에 입력된 문자열들을 받아와서 빈 문자열이 아니면 배열에 저장
		var arr = new Array();
		$('input[type=text]').each(function(){
			var text = $(this).val();
			$(this).val(''); //이걸 안해주면 '책 웹툰' 일때 책을 체크 해제하면 '웹툰 웹툰' 하고 남아버린다. 빈칸을 만들어서 채워줘야한다는 뜻
			if(text != '') //위에 일단 빈칸으로 해둔거 이 코드로인해 빈칸이아니면 배열로 덮어씌워짐
				arr.push(text);
		})
		//클릭한 체크박스의 value를 가져옴
		var check = $(this);
		//배열에 해당 체크박스의 value가 있는지를 확인
		var isContain = arr.indexOf(check.val());
		//체크박스의 value가 배열에 없고(못찾았고-1) 배열의 길이가 2이면(input 두개가 다 꽉찼으면) 해당(남은) 체크박스의 체크를 무조건 비활성화
		if(isContain<0 && arr.length == 2){
			check.prop('checked','');
		}
		//길이가 2가 아니면(input두개가 꽉찬게 아니면) 해당 배열에 추가를 하고 해당 checkbox의 체크를 활성화 한다
		else if(isContain<0 && arr.length != 2){
			arr.push(check.val());
			check.prop('checked','checked');
		}
		//체크박스의 value가 배열에 있으면 배열에서 해당 문자열을 제거
		else{
			arr.splice(isContain,1); //체크한걸 제거한다(한개)
		}
		//배열에 있는 문자열을 input창에 하나씩 뿌려줌
		for(var i=0; i<arr.length; i++){ 
			$('input[type=text]').eq(i).val(arr[i]); //i 0부터 뿌림. 한개남았으면 그게 0. 
		}

	});
});