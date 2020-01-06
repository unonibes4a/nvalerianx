


function cambiotanaboventana(){
 // alert("tamaño de la ventana    "+ vw +"   "+vh);
  window.location.reload();
}
var vw=window.innerWidth;
var vh=window.innerHeight;
var vid = document.getElementById("idvideofondo");

function  getvwvh() { 
  
 vw=window.innerWidth;
 vh=window.innerHeight;
 }

$(document).ready(function(){
  $(window).on('resize', function(){
   
    cambiotanaboventana();  


});
 
  getvwvh();
  vid = document.getElementById("idvideofondo");
  iniciadeverdad ("");
setTimeout(function () {
 playVid();
  
},2000);

  });




  

  function iniciadeverdad () { 


    tamanosimg();
   }

var vbt=0.25;
   function  tamanosimg() {

    getvwvh();



    





//alert(vw+"  oks  "+vh);

     }

     
// maneja  video v1.mp4
function playVid() {
if(document.getElementById("idvideofondo")){

  try {
    vid = document.getElementById("idvideofondo");
    vid.play();
  // vid.loop=true;
 
  } catch (error) {
    alert(error);
  }
 
  

}
   
}

function pauseVid() {
    vid.pause();
}

function stopvid(){
  pauseVid();
vid.currentTime = 0;
 
} 




// fin   maneja  video v1.mp4
setInterval(function(){

  document.getElementById("idyo").value=vw+"  "+vh;
},2000);

   


setTimeout(function(){
  animacontrolfinal();
},1000);



function animacontrolfinal(){
  playVid();

  $("#xb1").animate({"left":"+="+String(vw*-0.46)},2000,function(){});
  $("#xb2").animate({"left":"+="+String(vw*-0.36)},2000,function(){});
  $("#xb3").animate({"left":"+="+String(vw*-0.46)},2000,function(){});
  $("#xb4").animate({"left":"+="+String(vw*0.34)},2000,function(){});
  $("#xb5").animate({"left":"+="+String(vw*0.24)},2000,function(){});
  $("#xb6").animate({"left":"+="+String(vw*0.34)},2000,function(){});
}

function animacontroliniciL(){
  $("#xb1").animate({"left":"+="+String(vw*0.46)},2000,function(){});
  $("#xb2").animate({"left":"+="+String(vw*0.36)},2000,function(){});
  $("#xb3").animate({"left":"+="+String(vw*0.46)},2000,function(){});
  $("#xb4").animate({"left":"+="+String(vw*-0.34)},2000,function(){});
  $("#xb5").animate({"left":"+="+String(vw*-0.24)},2000,function(){});
  $("#xb6").animate({"left":"+="+String(vw*-0.34)},2000,function(){});
}

document.getElementById('idvideofondo').addEventListener('ended',myHandler,false);
function myHandler(e) {
    // What you want to do after the event
    
}

var video =document.getElementById('idvideofondo');

video.onended = function(e) {
  /*Do things here!*/
  stopvid();
  animacontroliniciL();
};



function  detenervideov1(param) {  }