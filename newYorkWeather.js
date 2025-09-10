const requestOptions = {
  method: "GET",
  redirect: "follow",
};

fetch(
  "https://api.open-meteo.com/v1/forecast?latitude=40.71&longitude=-74.01&current_weather=true",
  requestOptions
)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
