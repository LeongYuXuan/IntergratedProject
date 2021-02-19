$(document).ready(function (){
    //hide all response messages 
    $(".response").hide();

    //hide all furthur content
    $(".plus").hide();
    $("#placeholder").hide();

    //var which would trigger medal give 
    var complete2 = true;
    
    
    //event listner to check if q1 is correct
    $("#q1").on("click",function(e){
        e.preventDefault();

        //Check if the correct ans is choosen
        if($('input[name="question1"]:checked').val() == "c" || $('input[name="question1"]:checked').val() == "b" ){
            console.log("correct");
            $("#yes-one").show();
        } else {
            console.log("wrong");
            $("#no-one").show();
            complete2 = false;
        }

        //disable form after input
        $("#quiz1 input").prop("disabled",true)

        //reveal next section's content up to next quiz
        $("#plus1").show();
        $("#plus2").show();
        
        
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
        if(a2 == true && b2 == true && c2 == false || d2 == true){
            console.log("correct");
            $("#yes-two").show();
        } else {
            console.log("wrong ;-;");
            $("#no-two").show();
            complete2 = false;
        };

        //disable form after input
        $("#quiz2 input").prop("disabled",true)

        //reveal finish button
        $("#placeholder").show();


        
    });


    
    //Finish lesson button.
    //Registers true for "complete" if all quizes done right 
    $("#complete").on("click",function(){
        console.log("test complete");

        //set local storage item if all quizes correct
        if (complete2 == true && localStorage.getItem("complete2") == null ){
            localStorage.setItem("complete2",JSON.stringify(complete2));
        }
    })




});