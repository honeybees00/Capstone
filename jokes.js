//Reset data variable inside .than function test access the data
//then((response) => response.json())
.then(function(result){
    console.log(result);
    Ocean-city-WeatherData = result;
    console.log(Ocean-city-WeatherData);
    console.log(Ocean-city-WeatherData.current.temperature);
})

.then(function(result){
    console.log(result);
})
