$(document).ready(function (){
    var complete1 = false;
    //Send back to  lesson page with new thing
    $("#lesson-1").on("click",function(){
        complete1 = true;
        localStorage.setItem("complete1",JSON.stringify(complete1));
        window.location.replace("lesson-1.html");
    })



});