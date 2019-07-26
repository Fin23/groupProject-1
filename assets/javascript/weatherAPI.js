
//global vars:

var apiKeyWeather = "ceadcca8ca5e342714bb807e7930ebbd";
var temp = "";
var weather = "";

$(document).ready(function () {
    function weatherCheck() {

        //Only takes in city parameter
        var queryURLWeather = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + ",US&units=imperial&appid=" + apiKeyWeather;

        // Perfoming an AJAX GET request to our queryURL
        $.ajax({
            url: queryURLWeather,
            method: "GET"
        })
            .then(function (response) {
                console.log(response);

                //The two viable components to use in free version of API
                temp = response.list[0].main.temp;
                weather = response.list[0].weather[0].main;

                //testing purposes
                $("#tempArea").text(temp + " degrees F");

                //example of changing stuff in the DOM
                if (weather === "Clear") {
                    //below example changes img dource for a lil weather icon
                    //$("#SOMETHING").style.backgroundColor = "yellow";
                    $("#weatherIcon").src = "http://openweathermap.org/img/wn/01d@2x.png";
                }
                else if (weather === "Rain") {
                    //$("#SOMETHING").style.backgroundColor = "blue";
                    $("#weatherIcon").src = "http://openweathermap.org/img/wn/09d@2x.png";
                }
                else if (weather === "Drizzle") {
                    //$("#SOMETHING").style.backgroundColor = "blue";
                    $("#weatherIcon").src = "http://openweathermap.org/img/wn/10d@2x.png";
                }
                else if (weather === "Snow") {
                    //$("#SOMETHING").style.backgroundColor = "white";
                    $("#weatherIcon").src = "http://openweathermap.org/img/wn/13d@2x.png";
                }
                else if (weather === "Clouds") {
                    //$("#SOMETHING").style.backgroundColor = "gray";
                    $("#weatherIcon").src = "http://openweathermap.org/img/wn/03d@2x.png";
                }

            });

    }

});