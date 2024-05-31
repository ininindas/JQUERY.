$(function(){
    //직접선택자
    $('*').css('color','red') //전채선택자
    $('#title').css('color','green') // id 선택
    $('.sub_title').css(
        {
            color:'blue',
            border : `4px solid red`        
        }
    )                       // 여러게를 넣을땐 중괄호 후 들어감
    
    $('h3').css('fontSize', 40)  //px 생략할꺼면 꼭 띄워 쓰고 숫자만 아님 ''쓰고 문자열로 

    $('h1,#title').css('backgroundColor','#CCC') //그룹 선택자
    
    $('h1.logo').css('color','white')  //종속선택자

    //인접 관계 선택자
    $('h2').parent().css('border', '4px solid #ccc') //부모요소

    $('section h2').css('color','blue')  // 하위요소

    $('#list > li').css('border', '2px solid red') // 자식요소

    $('.section h2').prev().css({
        color : 'yellow',
        backgroundColor : 'lightgreen'
    })                              // 이전요소

    $('.section h2').next().css('color','blue')  //다음요소

    $('.section h3').prevAll().css('fontSize', 40) // 이전 전부
    
    $('.section h3').nextAll().css({
        fontSize: 20,
        color: 'orange'
    }) // 다음 전부

    $('.text_1').prevUntil('.title_1').css('border', '2px solid green')//~~전까지
    $('.text_1').nextUntil('.text_5').css('backgroundColor', '#666')//~후까지

    $('.section h3').siblings().css('color','red')//형제요소

    $('.sub_item_1').parents().css('border', '3px dotted green')//상위 요소 
    $('.sub_item_1').parents('#list').css('border', '5px solid blue')//상위 요소 중에 ()안에 뭐 너으면 선택적
    $('.sub_item_1').closest('ul').css('border','10px solid red')//가장 가까운 상위요소

})