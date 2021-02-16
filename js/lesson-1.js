$(document).ready(function (){
    //var which would trigger medal give 
    var complete1 = false;
    
    
    //code to check if thing is correct I guess
    
    
    
    
    
    //Finish lesson button.
    //Registers true for "complete" if all quizes done right 
    $("#complete").on("click",function(){
        console.log("test complete");
        complete1 = true;
        localStorage.setItem("complete1",JSON.stringify(complete1));
        
    })



});