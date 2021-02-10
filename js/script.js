//Start of evey js thing
$(document).ready(function () {

  //Hide warning messages 
  $(".warn").hide();





    //function to request info on sg cases 
    function getCountry(country) {
      //settings for the AJAX thing
      var settings = {
        "url": "https://disease.sh/v3/covid-19/countries/" +country, 
        "method": "GET",
        "timeout": 0,
        "headers": {
          "Cookie": ""
        },
      };

      //running an AJAX request with the settings above
      $.ajax(settings).done(function (response) {
        //console.log(response);
        //get the data from this call and assign to vars
        let totalCase = response.cases;
        let nowCase = response.todayCases;
        let totalDeath = response.deaths;
        let nowDeath = response.todayDeaths;
        let totalReco = response.recovered;
        let nowReco = response.todayRecovered;


        //Replace whatever is in them with new content
        $(".total_case").html(totalCase);
        $(".now_case").html(nowCase);
        $(".total_death").html(totalDeath);
        $(".now_death").html(nowDeath);
        $(".total_reco").html(totalReco);
        $(".now_reco").html(nowReco);

      });
    }
    //calling the function
    getCountry("Singapore");

    //function to change things after clicking dropdown or something
    $("#change-cont").on("change",function(e){
      //get the name and value of the selection
      let txtName = $('#change-cont option:selected').text();
      let value = $('#change-cont option:selected').val();
      //call function but now with different name
      getCountry(value);
      //change header name
      $("#cont-name").html(txtName);
    });

  })
 
  