$('#list a[target]').css('color', 'red')  // 타겟속성이 있는 a 요소
$('#list a[href^=https').css('border', '5px solid green') //href속성 https로시작하는 a를 찾는법 ^=
$('#list a[href$=net]').css('border', '5px solid blue') //href속성 net로끝나는 a를 찾는법 $=
$('#list a[href*=google]').css('border', '5px solid red') //href속성 google가있는 a를 찾는법 *=
$('li:hidden').css('display', 'block') //숨겨진거 찾기

$('input:text').css('background', 'red') // input타입이 text인 요소
$('input:password').css('background', 'green') // input타입이 password인 요소

var v1 = $('#f3 :selected').val()
console.log(v1);

var v2 = $("#f4 :checked").val()
console.log(v2)

var v3 = $("#f5 :checked").val()
console.log(v3);

$('li:contains("구글")').css('background', 'orange') //("")택스트를 포함한 요서 ''시작이면""  ""시작이면''

$('#f2').contents().filter('input').css('background', 'blue') //선택한 요소 전채를 반환

$('li a').has('span').css('border', '10px solid green') // li a 중에서 span을 가진 요소
$('li').not(':first').css('border', '4px solid aqua')  // 첫번째 요소가 아닌 전채요소 

$('form section').filter('#f5').css('background', 'red') //필터로 거르기
$('form').find('#f4').css('background', 'pink') //form안에서 요소찾기

//is() 메서드 :물어보는 메서드 답은 참 거짓으로 나옴

console.log($('#list li').eq(3).is(':visible'));
console.log($('#list li').eq(3).is(':hidden'));
console.log($('#chk').is(':checked'));
console.log($('#chk2').is(':checked'));