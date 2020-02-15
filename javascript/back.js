$("#addon-wrapping").on("click", function(event){
  event.preventDefault();
  
  var cityInt = $("#inputCity").val();
  city = $(`#inputCity`).text();

  console.log(cityInt);
  console.log(city);

  localStorage.setItem(cityInt, city);  
  
  // localStorage.setItem( cityInt);
  
  var APIKey = "166a433c57516f51dfab1f7edaed8413"
  
  var queryURL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityInt}&appid=`+ APIKey;
  
  console.log(queryURL);
  
  $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {

$("#cityName").append(cityInt);

for (let i = 0 ; i < response.list.length ; i = i + 8){

  console.log(response.list[i]);

  var tempF = (response.list[i].main.temp - 273.15) * 1.80 + 32 ;
  $(".tempF").text("Temperature (Kelvin) " + tempF); 

$(".weatherResult").append(` <div class="weatherStuff card" style="width: 25rem;" > <h3> Date ${response.list[i].dt_txt.split(" ")[0]} </h3> <h3 class="tempF"> The temputure ${response.list[i].main.temp} </h3> 
<h3>  ${response.list[i].weather[0].main} </h3> <img src= "https://openweathermap.org/img/wn/${response.list[i].weather[0].icon}.png" class="card-img-top" >
<h3> The wind speeed ${response.list[i].wind.speed} Mph </h3> <h3> The humidity ${response.list[i].main.humidity} % </h3> </div>`)

}    


    });
    
    
    var pastSearch = cityInt;
  
    var data = localStorage.getItem(pastSearch);
   
   $("#pastSearch").append(data);
  });
  
  

  // var currentW = `http://api.openweathermap.org/data/2.5/weather?q=" + ${searchValue} + "&appid=7ba67ac190f85fdba2e2dc6b9d32e93c&units=imperial`

  // var uvInex = ` "http://api.openweathermap.org/data/2.5/uvi?appid=7ba67ac190f85fdba2e2dc6b9d32e93c&lat=" + ${lat} + "&lon=" + ${lon} `

//   $.ajax({
//     url: queryURL,
//     method: "GET"
//   }).then(function (response) {
// console.log(response)
//   })
