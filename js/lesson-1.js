$(document).ready(function (){
    //hide all response messages 
    $(".response").hide();

    //var which would trigger medal give 
    var complete1 = false;
    
    
    //event listner to check if q1 is correct
    $("#q1").on("click",function(e){
        e.preventDefault();
        console.log($('input[name="question1"]:checked').val());
        if($('input[name="question1"]:checked').val() == "Donkey"){
            console.log("correct");
        }
    });


    //event listner to check if q2 is correct
    $("#q1").on("click",function(e){
        e.preventDefault();
        console.log($('input[name="question2"]:checked').val());
        //if($('input[name="question1"]:checked').val() == "Donkey"){
            //console.log("correct");
        //}
    });

    
    //Finish lesson button.
    //Registers true for "complete" if all quizes done right 
    $("#complete").on("click",function(){
        console.log("test complete");
        complete1 = true;
        localStorage.setItem("complete1",JSON.stringify(complete1));
        
    })



});