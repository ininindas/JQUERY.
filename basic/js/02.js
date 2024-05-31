// console.log($('li'));
$('li:first').css('border', '5px solid red') //첫번째 요소
$('li').first().css('border', '5px solid blue')// 똑같지만 명령어로 하는법

$('li:last').css('border', '5px solid red') //마지막 요소
$('li').last().css('border', '5px solid blue')// 똑같지만 명령어로 하는법

$('li:odd').css('border', '5px solid green')//인덱스가 홀수인 친구들 
$('li:even').css('border', '5px solid red')//인덱스가 홀수인 친구들 
//두친구들도 명령어 잇음

$('li:first-of-type').css('border', '5px solid blue') //한덩어리의(요소의) 첫번째
$('li:last-of-type').css('border', '5px solid blue') //한덩어리의(요소의) 마지막
$('li:nth-child(2)').css('fontSize', 30) // 요소무리(한덩어리)중 n번째
$('li:nth-child(3n)').css('backgroundColor','#ccc')// 숫자n을 쓰면 그 배수번째 친구들 잡힘

$('li:eq(1)').css('border','5px solid black') //인덱스의 요소를 잡는법 0부터 시작이니 1이면 2번째임
$('li:eq(8)').css('border','5px solid black') //인덱스의 요소를 잡는법 0부터 시작이니 8이면 9번째임
$('li:gt(5)').css('border','5px solid pink')  //인덱스 요소보다 큰 것들 전부 마찬가지로 0부터
$('li:lt(4)').css('border','5px solid pink')  //인덱스 요소보다 작은 것들 전부 마찬가지로 0부터
$('li').slice(7).css('border','10px solid #ccc') //인덱스 부터 전부 
