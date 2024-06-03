//each
let books = [
   {title: 'html'},
   {title: 'css'},
   {title: 'javascript'}
]

$(books).each(function(index, item){
    // console.log(index + ':' + item.title);

})

$.each(books, function(idx, item){
    // console.log(idx + ':' + item.title);
})

$('#menu li').each(function(idx, item){
    console.log(idx + ':' + $(item).text());
})

var menu = $('#menu li')

$.each(menu, function(idx, item){
    console.log(idx + ':' + $(item).text());
})

//map  => 새로운 배열로 리턴
let user = [
    {name: '김대리', city: '서울'},
    {name: '박대리', city: '부산'},
    {name: '이대리', city: '인천'},
    {name: '최대리', city: '제주'},
]

let count = [1, 2, 3, 4, 5]
let count2 = {name: 'Alice'}

let newUser = $.map(user, function(item){
    if(item.city === '서울') return item
    
})

console.log(newUser);

let c = $.inArray(3,count)
console.log(c);
console.log($.isArray(count));
console.log($.isArray(count2));

let d = $.merge(user,count)
console.log(d);


//index
let i = $('#menu1 li').first().index()
console.log(i);
