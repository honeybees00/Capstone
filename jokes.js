//Reset data variable inside .than function test access the data
//then((response) => response.json())
const requestOptions = {
  method: "GET",
  redirect: "follow",
};

fetch("https://api.chucknorris.io/jokes/random", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
