// before(), inserBefore(), after(), inserAfter
$('.wrap p:eq(1)').before('<p>Before</p>')
$('<p>inserBefore</p>').insertBefore('.wrap p:eq(0)')
$('.wrap p:eq(4)').after('<p>after</p>')
$('<p>inserAfter</p>').insertAfter('.wrap p:last')

//append() , appendTO(), prepend() prependTO
$('.list').append('<li>리스트 2</li>')
$('<li>리스트 3</li>').appendTo('.list')
$('.list').prepend('<li>리스트 0</li>')

// clone() , emty() , remove()
var cloneList = $('.list').children().clone()
console.log(cloneList);

$('.list2').append(cloneList)
$('.list2').empty()  //싹다 날림
$('.list').remove()  // 공간은 남겨둠


//relaceAll() replaceWith()
$('h1').replaceWith('<h3>replaceWith</h3>')
$('<p>relaceAll</p>').replaceAll('.box div')


// unwrap(), wrap(), wrapAll(), wrapInner()
$('span').unwrap()// 부모 요소를  제거
$('.p1').wrap('<div></div>') // 선택한 요소를 div로 감싼다
$('.p3').wrapAll('<div></div>')// 요소전부를 div로 감싼다
$('.box3 ul li').wrapInner('<h3></h3>')// 요소의 자식요소를 h3로 감싼다
