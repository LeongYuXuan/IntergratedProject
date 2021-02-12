$(document).ready(function (){
    var complete1 = false;
    //Send back to  lesson page with new thing
    $("#complete").on("click",function(){
        console.log("test complete");
        complete1 = true;
        localStorage.setItem("complete1",JSON.stringify(complete1));
        
    })



});