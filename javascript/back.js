
$(".look").on("click", function(event){
  event.preventDefault();
  
  var weatherInt = $(".inputGroupSelect01").val();
  var stateInt =  $(".inputState").text();
  var cityInt = $(".inputCity").text();

  console.log(stateInt);
  console.log(cityInt)
  
  localStorage.setItem(stateInt, cityInt, weatherInt );
  
  });


var APIKey = "166a433c57516f51dfab1f7edaed8413"

var queryURL = `api.openweathermap.org/data/2.5/forecast/daily?q= ${cityInt}, &cnt= ${weatherInt} &appid=` + APIKey;

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {

    console.log(response)

    console.log(response.sys.country);

    console.log(response.wind);

    console.log(response.main.humidity);

    console.log(response.main.temp);

    const cityEl = $(`.city`).text(`City Name: ${response.name}`);

      const windEl = $(`.wind`).text(`Wind Speed: ${response.wind.speed}`);

      const weatherEl = $(`.humidity`).text(`Humidity: ${response.main.humidity}`);

      const heatEl = $(`.temp`).text(`Temputure: ${response.main.temp}`)

      F = (K - 273.15) * 1.80 + 32;

      
  console.log(cityEl);
  console.log(windEl);
  console.log(weatherEl);
  console.log(heatEl);
  });
