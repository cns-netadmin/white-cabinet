$(function(){
  var $win = $(window)
      $container = document.getElementsByClassName("container")[0],
      wideClass = 'container',
      narrowClass = 'container-narrow',
      value = 700, /* Size for Narrow version, Change here!*/
      oldBrowserWidth = value;
      
  $win.on('load resize', function() {
    var browserWidth = $win.width();
    if( value < browserWidth ) { 
       if ( value >= oldBrowserWidth ){
         $container.className=wideClass;
        // console.log("hoge");
       }
    }else{
       if (value <= oldBrowserWidth ){
         $container.className=narrowClass;
       //  console.log("fuga");
       }
    }
    oldBrowserWidth = browserWidth;
  });
});

