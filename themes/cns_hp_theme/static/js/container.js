$(function(){
  var $win = $(window)
      $container = document.getElementsByClassName("container")[0],
      $topicList = document.getElementsByClassName("topic_list")[0],
      $sidebar = document.getElementsByClassName("sidebar")[0],
      $links = document.getElementsByClassName("links")[0];



      wideClass = 'container',
      narrowClass = 'container-narrow',
      value = 700, /* Size for Narrow version, Change here!*/

      oldBrowserWidth = value+1;
      console.log("start logging");
      console.log($win.width());
      function wideCSS(){
         $topicList.className="topic_list";
         $sidebar.className="sidebar";
         $links.className="links";
         console.log();
         $container.className=wideClass;
         console.log("width changed: wide");
         location.reload();
      }

      function narrowCSS(){
         $container.className=narrowClass;
         $topicList.className="topic_list-narrow";
         $sidebar.className="sidebar-narrow";
         $links.className="links-narrow";
         console.log("width changed: narrow");
         $(function(){
           $('.topic_list-narrow').not('.slick-initialized').slick({
             dots: true,
             respondTo: 'window',
             centerPadding: '20px',
             infinite: true,
             slidesToShow: 1,
             autoplay: true,
             autoplaySpeed: 4000,
             centerMode: true,
           });
           console.log("slick loaded");
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

