$(document).ready(function (){
    //functions to replace blank imgs with medal if complete

    //What is Covid-19?
    if (JSON.parse(localStorage.getItem("complete1")) == true){
        $("#m1 img").attr('src',"../image/what-cov.png")
    }

    //Safety Precautions
    if (JSON.parse(localStorage.getItem("complete1")) == true){
        $("#m1 img").attr('src',"../image/safety-precautions.png")
    }

    //SG Circuit Breaker precautions
    if (JSON.parse(localStorage.getItem("complete1")) == true){
        $("#m1 img").attr('src',"../image/circuit-breaker.png")
    }

    //What is Covid-19? Extra
    if (JSON.parse(localStorage.getItem("complete1")) == true){
        $("#m1 img").attr('src',"../image/what-cov-ex.png")
    }

    //How it became pandemic
    if (JSON.parse(localStorage.getItem("complete1")) == true){
        $("#m1 img").attr('src',"../image/covid-world.png")
    }

    //Damages by covid
    if (JSON.parse(localStorage.getItem("complete1")) == true){
        $("#m1 img").attr('src',"../image/effect-covid")
    }





    
    
    //Event listener for buttons

    //event listener to send user to lesson 1
    $("#lesson-1").on("click",function(){
        window.location.replace("lesson-1.html");
    })

    //event listener to send user to lesson 2 
    $("#lesson-2").on("click",function(){
        window.location.replace("lesson-2.html");
    })

    //event listener to send user to lesson 3
    $("#lesson-3").on("click",function(){
        window.location.replace("lesson-3.html");
    })

    //event listener to send user to lesson 3
    $("#lesson-4").on("click",function(){
        window.location.replace("lesson-4.html");
    })

    //event listener to send user to lesson 3
    $("#lesson-5").on("click",function(){
        window.location.replace("lesson-5.html");
    })

    //event listener to send user to lesson 3
    $("#lesson-6").on("click",function(){
        window.location.replace("lesson-6.html");
    })


});