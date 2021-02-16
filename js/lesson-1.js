$(document).ready(function (){
    //hide all response messages 
    $(".response").hide();

    //var which would trigger medal give 
    var complete1 = false;
    
    
    //code to check if thing is correct I guess
    
    
    $("#q2").on("click",function(){
        if ($(".question2 input[name = 'animal']:checked").val() == "donkey")
        console.log(correct)

    });
    
    //Finish lesson button.
    //Registers true for "complete" if all quizes done right 
    $("#complete").on("click",function(){
        console.log("test complete");
        complete1 = true;
        localStorage.setItem("complete1",JSON.stringify(complete1));
        
    })



});