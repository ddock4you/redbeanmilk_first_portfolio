$(function(){
    $window_width = $(window).width();
    $window_height = $(window).height();

    // slide 텍스트 애니메이션 효과
    $(".slide_area_title").hide().fadeIn(1000);
    $(".slide_area_text").hide().fadeIn(500);

    //슬라이드 화면 높이 설정(pc에만 적용)
    if($window_width > 1025){

      $(".slide_area ul").css({"height":$window_height});
    }
    console.log($window_width);

    $(window).on("resize", function(){
      $window_width = $(window).width();

      if($window_width < 481){
        $(".slide_area ul").css({"height":"200px"});
      }

      else if($window_width < 769){
        $(".slide_area ul").css({"height":"300px"});
      }

      else if($window_width < 1025){
        $(".slide_area ul").css({"height":"500px"});
      }
      else{
        $(".slide_area ul").css({"height":$window_height});
      }
    });

    //슬라이딩 윈도우
    $(".slide_area ul").prepend($(".slide_area ul li:last"));
    $(".slide_area ul").css({"marginLeft":"-100%"});

    $(".next").on("click focusin", function(){
      $(".slide_area ul").stop().animate({"marginLeft":"-=100%"},1000,"swing",function(){
        $(this).append($(".slide_area ul li:first")).css({"marginLeft":"-100%"});
        clearInterval(autoClicks);
      });
    });
    $(".prev").on("click focusin", function(){
      $(".slide_area ul").stop().animate({"marginLeft":"+=100%"},1000,"swing",function(){
        $(this).prepend($(".slide_area ul li:last")).css({"marginLeft":"-100%"});
        clearInterval(autoClicks);
      });
    });
    var autoClicks = setInterval(function(){ $(".slide_area ul").stop().animate({"marginLeft":"-=100%"},1000,"swing",function(){
      $(this).append($(".slide_area ul li:first")).css({"marginLeft":"-100%"});}); },3000);

    // li 이미지 생성
      var i = $(".slide_area ul li").index();
      for(i;i<4;i++){
        $(".slide_area ul li:eq("+i+")").css({"background-image":"url(img/special/spe"+special_name_no+"/"+i+".jpg)"});
      }
  });
