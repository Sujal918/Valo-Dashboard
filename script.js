// script.js

const playerName = "TenZ";
const tagline = "NA1";
const region = "na";

const url = `https://api.henrikdev.xyz/valorant/v1/account/${playerName}/${tagline}`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    // Handle the response
    console.log(data);
    document.getElementById("result").innerText =
      `Name: ${data.data.name}#${data.data.tag}\nRegion: ${data.data.region}`;
  })
  .catch(error => {
    console.error("API error:", error);
    document.getElementById("result").innerText = "Something went wrong.";
  });