$(document).ready(function(){
    // Get value on button click and show alert
    $("#look").click(function(){
        var userInput = $("#inputState").val();
        console.log(userInput)
    });
});
var APIKey = "166a433c57516f51dfab1f7edaed8413"

var queryURL = "http://api.openweathermap.org/data/2.5/forecast?id=524901"+ userInput + "&appid=" + APIKey;

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
