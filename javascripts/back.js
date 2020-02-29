var cityEl = JSON.parse(localStorage.getItem("weatherSearch"))||[];

if (cityEl.length > 0 ){
  $("#pastCity").append(`<br> <h5> Previous Search: </h5> <ul>`)
  for (let i = 0 ; i < cityEl.length ; i ++){
    $("#pastCity").append(`<button class="pastSearch btn-dark"> ${cityEl[i]} </button>`)
  }
  $("#pastCity").append(`</ul>`)
}

var APIKey = "166a433c57516f51dfab1f7edaed8413";

$("#addon-wrapping").on("click", function (event) {
  event.preventDefault();


  var cityInt = $("#inputCity").val();
  city = $(`#inputCity`).text();

  console.log(cityInt);
  console.log(city);

  cityEl.push(cityInt)

  localStorage.setItem(`weatherSearch`, JSON.stringify(cityEl));

  var queryURL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityInt}&appid=` + APIKey + `&units=imperial`;

  console.log(queryURL);

  currentWeather(cityInt);

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {

    $("#cityName").append(cityInt);

    for (let i = 0; i < response.list.length; i = i + 8) {

      console.log(response.list[i]);

      $(".weatherResult").append(` <div class="weatherStuff card" style="width: 25rem;" id="weatherReport"> <div class="col-sm-5"> <h3> Date ${response.list[i].dt_txt.split(" ")[0]} </h3> <h3> The temputure ${response.list[i].main.temp} </h3> 
<h3>  ${response.list[i].weather[0].main} </h3> <img src= "https://openweathermap.org/img/wn/${response.list[i].weather[0].icon}.png" class="card-img-top" >
<h3> The wind speeed ${response.list[i].wind.speed} Mph </h3> <h3> The humidity ${response.list[i].main.humidity} % </h3> </div> </div>`)

    }


  });


  // var pastSearch = cityInt;

  // var data = localStorage.getItem(pastSearch);

  // $("#pastSearch").append(data);
});

function currentWeather(searchValue) {

  var currentW = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=${APIKey}&units=imperial`
 
  $.ajax({
    url: currentW,
    method: "GET"
  }).then(function (response) {

    console.log(response)
    var uvInex = `https://api.openweathermap.org/data/2.5/uvi?appid=${APIKey}&lat=${response.coord.lat}&lon=${response.coord.lon}`
    $.ajax({
      url: uvInex,
      method: "GET"
    }).then(function (result) {
      console.log(result)

$("#currentW").append(`<div class="card"> <p>${response.name}</p>
 <p>${response.main.temp}</p> <p>${response.weather[0].description}</p>
 <img src= "https://openweathermap.org/img/wn/${response.weather[0].icon}.png" class="card-img-top"> 
 <p> ${result.value} </p>`)


    })

  })

}

$("#pastCity").on('click', '.pastSearch', function(event){
  event.preventDefault();

  var cityInt = $(this).text();
  console.log (cityInt);
  
  var queryURL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityInt}&appid=` + APIKey + `&units=imperial`;

  console.log(queryURL);

  currentWeather(cityInt);

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {

    $("#cityName").append(cityInt);

    for (let i = 0; i < response.list.length; i = i + 8) {

      console.log(response.list[i]);

      $(".weatherResult").append(` <div class="weatherStuff card col-sm" style="width: 25rem;" id="weatherReport"> <h3> Date ${response.list[i].dt_txt.split(" ")[0]} </h3> <h3> The temputure ${response.list[i].main.temp} </h3> 
<h3>  ${response.list[i].weather[0].main} </h3> <img src= "https://openweathermap.org/img/wn/${response.list[i].weather[0].icon}.png" class="card-img-top" >
<h3> The wind speeed ${response.list[i].wind.speed} Mph </h3> <h3> The humidity ${response.list[i].main.humidity} % </h3> </div>`)

    }


  });


})
