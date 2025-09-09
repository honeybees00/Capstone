var weatherData = {};
google-translate everyone needs this///
const myHeaders = new Headers();
myHeaders.append(
"Cookie",
"NID=525=FGb0U2zxcn_GMRzSv3m9DacOGRp6aNbn7_LTXlkyHYtl4_LdHcCKKlEr1V1n_cgK5DfRF3M2cp9VuSkW-NK7jiWHmiTQPApa_ZWXOKlmPCEcsDLjowhkGyLLMHqMsNGQbgUZ-JH40lptP3I9CHS66yYTNFyJror_ceD3K8Pe4yrAmK3NTwXV15NktBaWHsqkQFx-kg"
);

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};

fetch(
"https://translate.google.com/?sl=en&tl=zh-TW&text=hello&op=translate",
  requestOptions;
)
.then((response) => response.text())
then((result) => console.log(result))
.catch((error) => console.error(error));

jokes//
const requestOptions = {
  method: "GET",
 redirect: "follow",
  };

  fetch("https://api.chucknorris.io/jokes/", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
 .catch((error) => console.error(error));

updateatherCard//
 function updateWeatherCard() {
   setText("temp", newOrleansWeather.current.temperature);
   setText("windSpeed", newOrleansWeather.current.windSpeed);
  }
onEvent  ("fetchNewOrleansWeather") function(){
 .then(function(result){
console.log(result);
})

}
