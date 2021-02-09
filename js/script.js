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
        //get the data from this call and assign to vars
        let totalCase = response.cases;
        let nowCase = response.todayCases;
        let totalDeath = response.deaths;
        let nowDeath = response.todayDeaths;
        let totalReco = response.recovered;
        let nowReco = response.todayRecovered;
        //let percent =  Math.round((totalDeath / totalCase)) *100 ;

        //create big thing to append later
        //var addStat = '<p id = "now_Death"> Deaths today: ' + nowDeath + '</p>'
        //console.log(addStat)
        //$(".stat_box").append(addStat);

        //test function
        $(".total_case").append(totalCase);
        $(".now_case").append(nowCase);
        $(".total_death").append(totalDeath);
        $(".now_death").append(nowDeath);
        $(".total_reco").append(totalReco);
        $(".now_reco").append(nowReco);
        //$(".percent").append(percent);


      });
    }
  //calling the function
    getCountry("Singapore");



  })
 
  