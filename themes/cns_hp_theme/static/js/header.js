$(function(){
  var $win = $(window),
      $main = $('main'),
      $header = $('header'),
      headerPos = $header.offset().top,
      fixedClass = 'is-fixed';

  $('.menu-trigger').on('click',function(){
    if($(this).hasClass('active')){
      $(this).removeClass('active');
      $('.humberger-menu').slideUp();
    } else {
      $(this).addClass('active');
      $('.humberger-menu').slideDown();
    }
  });
  $main.on('click',function(){
    if($('.menu-trigger').hasClass('active')){
      $('.menu-trigger').removeClass('active');
      $('.humberger-menu').slideUp();
    }
  });

  $win.on('load scroll', function() {
    var value = $(this).scrollTop();
    if ( value > headerPos ) {
      $header.addClass(fixedClass);
    } else {
      $header.removeClass(fixedClass);
    }
    if ( value > headerPos/2 && value <= headerPos ) {
      var trans = (value-headerPos/2)/(headerPos-headerPos/2)*0.5+0.5;
      $header.css('background-color', 'rgba(0, 0, 0,' + trans + ')');
    } else {
      $header.css('background-color', '');
    }
  });
});

