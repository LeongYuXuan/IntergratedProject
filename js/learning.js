$(document).ready(function (){
    //function to replace blank imgs with medal if complete
    if (JSON.parse(localStorage.getItem("complete1")) == true){
        $("#m1 img").attr('src',"../image/circuit-breaker.png")
    }

    //function to send user to lesson 1 page
    $("#lesson-1").on("click",function(){
        window.location.replace("lesson-1.html");
    })



});