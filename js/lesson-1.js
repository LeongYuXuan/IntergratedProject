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
    $("#q2").on("click",function(e){
        e.preventDefault();

        //check which checkboxes are checked
        var a2 = $('#a2').prop('checked');
        var b2 = $('#b2').prop('checked');
        var c2 = $('#c2').prop('checked');
        var d2 = $('#d2').prop('checked');
        
        //if statement to see if correct checkboxes are selected
        if(a2 == true && b2 == true && c2 == true && d2 == true){
            console.log("correct");
        } else {
            console.log('wrong ;-;');
        };
        
        


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