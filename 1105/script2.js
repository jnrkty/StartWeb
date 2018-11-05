// Object 오브젝트 형
/**
 * 사용자가 기본자료형(number, string, boolean)을 조합해서 만든
 * 사용자 정의 형태 자료형.
 */

 /**
  * 오브젝트 이름 = { 자료이름 : 데이터값}
  */

  a = { name : "배철수", score : 100};
  b = { name : "홍길동", score : 40};

  /**
   * 오브젝트에 저장된 값을 읽어오려면 ?
   * 
   * 오브젝트 이름.자료이름 -> 데이터값 리턴
   */

   window.document.write(a.score, "<br>");

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

window.document.write("<br>", player.park.name);



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
//window.document.write(korean);



