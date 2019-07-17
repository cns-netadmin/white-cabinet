$(function(){
var page
var lastPage =parseInt($(".top_figure img").length-1);
var random = Math.round( Math.random()*lastPage );
var nextPage

page=random
  if(page === lastPage){
               nextPage = 0;
  }else{
               nextPage = page+1;
};

  $(".top_figure img").css("z-index","-3");
  $(".top_figure img").eq(nextPage).css("z-index","-1");

function changePage(){
  $(".top_figure img").css("z-index","-3");
  $(".top_figure img").eq(page).css("z-index","-1");
  $(".top_figure img").eq(nextPage).css("z-index","-2");
  $(".top_figure img").css("display","block");
  $(".top_figure img").eq(page).fadeOut(2500);
};

function countUp(){
if(page === lastPage){
 page = 0;
 nextPage = 1;
 changePage();
 }else if(nextPage===lastPage){
 page ++;
 nextPage = 0;
 changePage();
 }else{
 page ++;
 nextPage = page+1;
 changePage();
 } 
};

var Timer;
function startTimer(){
Timer =setInterval(function(){
 countUp();
 },5000);
};

function stopTimer(){
clearInterval(Timer);
};

startTimer();
});
