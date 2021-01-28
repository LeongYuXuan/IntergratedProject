//Start of evey js thing
$(document).ready(function () {
    //function to request info on sg cases 
    function getCountry(country) {
      //settings for the AJAX thing
      var settings = {
        "url": "https://disease.sh/v3/covid-19/countries/Singapore", 
        "method": "GET",
        "timeout": 0,
        "headers": {
          "Cookie": ""
        },
      };

      //running an AJAX request with the settings above
      $.ajax(settings).done(function (response) {
        //console.log(response);
        //get the data from this call and append to thing
        let totalCase = response.cases;
        let nowCase = response.todayCases;
        let totalDeath = response.deaths;
        let nowDeath = response.todayDeaths;
        let totalRecover = response.recovered;
        let nowRecover = response.todayRecovered;
        $("body").append(nowDeath);

      });
    }

    //calling the function
    getCountry("Singapore")
  })
 
  