$(function(){
  var $win = $(window)
      $container = document.getElementsByClassName("container")[0],
      $topicList = document.getElementsByClassName("topic_list")[0],
      $sidebar = document.getElementsByClassName("sidebar")[0],
      $links = document.getElementsByClassName("links")[0];



      wideClass = 'container',
      narrowClass = 'container-narrow',
      value = 700, /* Size for Narrow version, Change here!*/
      oldBrowserWidth = value;
      console.log("start logging");
    
      function wideCSS(){
         $container.className=wideClass;
         $topicList.className="topic_list";
         $sidebar.className="sidebar";
         $links.className="links";
         console.log("width changed: wide");
      }

      function narrowCSS(){
         $container.className=narrowClass;
         $topicList.className="topic_list-narrow";
         $sidebar.className="sidebar-narrow";
         $links.className="links-narrow";
         console.log("width changed: narrow");
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

