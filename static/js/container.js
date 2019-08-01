$(function(){
  var $win = $(window)
      $container = document.getElementsByClassName("container")[0],
      $topicList = document.getElementsByClassName("topic_list")[0],
      $topics = document.getElementsByClassName("topic"),
      wideClass = 'container',
      narrowClass = 'container-narrow',
      value = 700, /* Size for Narrow version, Change here!*/
      oldBrowserWidth = value;
      console.log("start logging");
    
      function changeTopicsCSS(name){
        for (var i=0; i<$topics.length; i++){
            $topics[i].className = name;
          }
      }

      var browserWidth = $win.width();
      if( value < browserWidth ) { 
         if ( value >= oldBrowserWidth ){
           $container.className=wideClass;
           $topicList.className="topic_list";
           console.log("initial width: wide");
         }
      }else{
         if (value <= oldBrowserWidth ){
           $container.className=narrowClass;
           $topicList.className="topic_list-narrow";
           console.log("initial width: narrow");
         }
      }
      oldBrowserWidth = browserWidth;

  $win.on('load resize', function() {
    var browserWidth = $win.width();
    if( value < browserWidth ) { 
       if ( value >= oldBrowserWidth ){
         $container.className=wideClass;
         $topicList.className="topic_list";
         console.log("width changed: wide");
       }
    }else{
       if (value <= oldBrowserWidth ){
         $container.className=narrowClass;
         $topicList.className="topic_list-narrow";
         console.log("width changed: narrow");
       }
    }
    oldBrowserWidth = browserWidth;
  });
});

