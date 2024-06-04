//단독 이벤트 등록
$(".btn1").click(function(){
    $(this).next().text('hello')
})

// on 
// $('.btn2').on('click',function(){
//     $(this).next().text('jquery')
// })

$('.btn2').on(
    {
        'mouseover focus' : function(){
            $(this).next().text('안녕하세요')
        },
        'mouseleave blur' : function(){
            $(this).next().text('안녕히 가세요')
        }
    },
)

//강제 이벤트 발생
$(".btn1").click()  //뒤에 function이 없으면 이밴트 바로 발생
$('.btn2').trigger('mouseover')

//이밴트 제거
$('.btn2').off('mouseleave')