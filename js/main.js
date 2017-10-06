$(document).ready(function(){
 //var declaration
 var tm = parseInt($("#counter").html());
 var counting;
 //display
 $("#counter").html(tm + ":00");
 //user add min
 $("#minusSessionTime").on("click",function(){
   if(tm > 1){
     tm -= 1;
     $("#counter").html(tm + ":00");
   }
 });
 //user add time
 $("#plusSessionTime").on("click",function(){
   tm += 1;
   $("#counter").html(tm + ":00");
 });
 //counter update  down by 1sec
 function timer(){
  tm -= 1;
  if(tm === 0){
    clearInterval(counting);
    //alert msg
    alert("Times up!");
  }

  //convert to minutes
  if(tm%60 >= 10 ){
    $("#counter").html(Math.floor(tm/60) +":"+ tm % 60);
  }else{
    $("#counter").html(Math.floor(tm/60)+":"+"0"+tm % 60)
  }
 }
 //start time
 $("#start").on("click",function(){
   counting = setInterval(timer,1000);
   tm *= 60;
 });
 //reset timer
 $("#reset").on("click",function(){
   clearInterval(counting);
   tm = 25;
  $("#counter").empty().html(tm + ":00");
 });
});
