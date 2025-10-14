// $('선택자').함수(function() {실행구문})

// jQuery 코드가 HTML이 모두 로드된 뒤에 실행되도록
$('document').ready(function(){
    // 페이지가 처음 로드되면 알아서 적용
    $('p').css({display:'none'});

    // 사용자가 버튼을 클릭하면 작동
    $('.show-btn').click(function(){
        // 실행구문 p 태그가 보이도록
        $('p').css({display:'block'});
    })
    $('.hidden-btn').click(function() {
        // 실행구문 p태그 숨기기
    $('p').css({display:'none'});
    })
})
