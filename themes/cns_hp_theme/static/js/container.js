$(function(){
  var $win = $(window)
      $container = document.getElementsByClassName("container")[0],
      $topicList = document.getElementsByClassName("topic_list")[0],
      wideClass = 'container',
      narrowClass = 'container-narrow',
      value = 700, /* Size for Narrow version, Change here!*/
      oldBrowserWidth = value;
      
  $win.on('load resize', function() {
    var browserWidth = $win.width();
    if( value < browserWidth ) { 
       if ( value >= oldBrowserWidth ){
         $container.className=wideClass;
         $topicList.className="topic_list";
        // console.log("hoge");
       }
    }else{
       if (value <= oldBrowserWidth ){
         $container.className=narrowClass;
         $topicList.className="topic_list-narrow";
       //  console.log("fuga");
       }
    }
    oldBrowserWidth = browserWidth;
  });
});

