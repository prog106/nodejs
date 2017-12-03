$(document).ready(function() {
    $(document).on('click', '.control nav a', function(event) {
        history.pushState(null, null, event.target.href);
        $('article').load(event.target.href+' article>.content'); // 페이지의 article element 를 가져옴
        event.preventDefault(); // 기본 동작을 차단한다. a 태그일 경우 실행은 안됨
    });
    $(window).on('popstate', function(event) { // 뒤로가기 버튼 클릭시 실행 popstate
        $('article').load(location.href+' article>.content');
    });
    var audio = new Audio('etc.mp3');
    //audio.play();
    $(document).on('click', '.control .player .play', function(event) {
        audio.play();
    });
    $(document).on('click', '.control .player .pause', function(event) {
        audio.pause();
    });
});
