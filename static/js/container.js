$(function(){
  var $win = $(window)
      $container = document.getElementsByClassName("container")[0],
      $sidebar = document.getElementsByClassName("sidebar")[0],
      $topicList = document.getElementsByClassName("topic_list")[0],
      $links = document.getElementsByClassName("links")[0],
      $sitemap = document.getElementsByClassName("sitemap")[0],
      $address = document.getElementsByClassName("address")[0];

      wideClass = 'container',
      narrowClass = 'container-narrow',
      value = 700, /* Size for Narrow version, Change here!*/
      oldBrowserWidth = value+1;
 
// console.log("start logging");
// console.log($win.width());
 function wideCSS(){
/*     $container.className=wideClass;
    $sidebar.className="sidebar";
    $topicList.className="topic_list";
    $links.className="links";
    $sitemap.className="sitemap";
    $address.className="address";
    console.log("width changed: wide");
*/
    location.reload();
 }

 function narrowCSS(){
    $container.className=narrowClass;
    $sidebar.className="sidebar-narrow";
    $links.className="links-narrow";
    $sitemap.className="sitemap-narrow";
    $address.className="address-narrow";
    $topicList.className="topic_list-narrow";
    //console.log("width changed: narrow");
    $(function(){

      $('.topic_list-narrow').css({
          "opacity" : "0"
      });

      $('.topic_list-narrow').not('.slick-initialized').slick({
        dots: true,
        respondTo: 'window',
        centerMode: true,
        //centerPadding: '20px',
        infinite: true,
        arrows: false,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        swipe: true,
        variableWidth: true
      });
      //console.log("slick loaded");
       //$('.slider').slick('slickGoTo', 0);

      $(".imgsize").css({
        "width" : "240px", //width cannot control by here
        "height" : "180px",
        //"border": "solid 5px orange"
      });

      $(".bannersize").css({
        "width": "240px",
        "height": "180px",
        "padding-bottom": "0",
        //"border": "solid 5px green"
      });

//      console.log($('.topic_list-narrow').slick('slickGetOption','autoplay'));

      $('.topic_list-narrow').css({
          "opacity" : 1,
          "transition": "opacity 2s ease-in",
          "-moz-transition": "opacity 2s ease-in",
          "-webkit-transition": "opacity 2s ease-in",
          "-o-transition": "opacity 2s ease-in"
      });
      $('.topic_list-narrow').slick('slickGoTo', 0);

    });

 }

 var browserWidth = $win.width();
 if( value < browserWidth ) { 
    if ( value >= oldBrowserWidth ){
      wideCSS();
    }
 }else{
    if (value <= oldBrowserWidth ){
      narrowCSS();
    }
 /*
    var calcWidth = Math.round(browserWidth*0.96);
    $topicList.width = String(calcWidth) + "px";
    console.log(calcWidth)
    */
 }
 oldBrowserWidth = browserWidth;

  $win.on('load resize', function() {
    var browserWidth = $win.width();
    if( value < browserWidth ) { 
       if ( value >= oldBrowserWidth ){
         wideCSS();
       }
    }else{
       if (value <= oldBrowserWidth ){
         narrowCSS();
       }
    }
    oldBrowserWidth = browserWidth;
  });
});

