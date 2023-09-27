// 리소스 로딩 후 진행
window.onload = function () {
  // header scroll
  $(window).scroll(function(){
      if($(document).scrollTop() > 0) {
        $('#header').addClass('scrolled');
    } else {
        $('#header').removeClass('scrolled');
    }
  });

  // career tabmenu
  $(document).ready(function(){
    $('.tab-menu a').click(function(e){
      e.preventDefault();
      $(this).addClass('active').parent().siblings().find('a').removeClass('active');
      $($(this).attr('href')).addClass('active').siblings().removeClass('active');
    });
  });

  //project more
};