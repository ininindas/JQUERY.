$('#list a[target]').css('color', 'red')  // 타겟속성이 있는 a 요소
$('#list a[href^=https').css('border', '5px solid green') //href속성 https로시작하는 a를 찾는법 ^=
$('#list a[href$=net]').css('border', '5px solid blue') //href속성 net로끝나는 a를 찾는법 $=