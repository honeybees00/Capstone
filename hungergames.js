const axios = require("axios");

// Get all tributes
axios
  .get("https://hungergamesapi.com/tributes")
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });

// Create a new tribute
axios
  .post("https://hungergamesapi.com/tributes", {
    name: "New Tribute",
    district: 7,
    age: 17,
  })
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });
