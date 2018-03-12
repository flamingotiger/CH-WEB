$(function(){
  $('.subNavList').click(function(){
    $(this).addClass('on');
    $(this).siblings().removeClass('on');
  });
});
var windowWidth = $(window).width();
$(window).resize(function(){
  windowWidth = $(window).width();
  $(window).scroll(function(){
  var scrTop = $(window).scrollTop();
  if( scrTop >= 128 ){
    //css변경
    //websize
    if(windowWidth > 768){
      $('.logo').children('.logoIcon').addClass('off');
      $('.header').addClass('on');
      $('.tennisBall').addClass('on');
      $('.headerInner').addClass('on');
      $('.logo').addClass('on');
      $('.logo').children('.tennisBall').css('top','10px');
      $('.subNavList').addClass('subOn');
    }
  }else if( scrTop < 128){
    //원래상태로
    if(windowWidth > 768){
      $('.logo').children('.logoIcon').removeClass('off');
    $('.header').removeClass('on');
    $('.tennisBall').removeClass('on');
    $('.headerInner').removeClass('on');
    $('.logo').removeClass('on');
    $('.subNavList').removeClass('subOn');
    $('.logo').children('.tennisBall').css('top','44px');
    }
    }
  });
});
