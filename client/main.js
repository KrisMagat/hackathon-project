document.addEventListener('DOMContentLoaded', () => {

//get the quote from the source   
//make a get request from https://zenquotes.io/api/random/

const api_url ="https://api.goprogram.ai/inspiration";

async function getapi(url)
{
  const response = await fetch(url);
  var data = await response.json();
  document.getElementById('quote').innerText = data.quote;
  document.getElementById('author').innerText = data.author;
}

getapi(api_url);








})