$(function(){
  var $win = $(window),
      $main = $('main'),
      $belt = $('.black-belt'),
      beltHeight = $belt.outerHeight(),
      beltPos = $belt.offset().top,
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

  $win.on('load scroll', function() {
    var value = $(this).scrollTop();
    if ( value > beltPos ) {
      $belt.addClass(fixedClass);
      $main.css('margin-top', beltHeight);
    } else {
      $belt.removeClass(fixedClass);
      $main.css('margin-top', '');
    }
    if ( value > beltPos/2 && value <= beltPos ) {
      var trans = (value-beltPos/2)/(beltPos-beltPos/2)*0.5+0.5;
      $belt.css('background-color', 'rgba(0, 0, 0,' + trans + ')');
    } else {
      $belt.css('background-color', '');
    }
  });
});

