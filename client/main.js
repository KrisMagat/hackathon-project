document.addEventListener('DOMContentLoaded', () => {

//get the quote from the source   
//make a get request from https://zenquotes.io/api/random/
// fetch('https://zenquotes.io/api/random', {
//     mode: 'no-cors',
//     headers: {
//       'Access-Control-Allow-Origin':'*',
//     credentials: 'include'
//     }})
// .then((data) => {
//     console.log(data); 
//     data.json();
// })
// .then((data) => {
//   console.log(data[0].h)
//   let quote = document.getElementById('#quote');
//   quote.innerHTML = data[0].h;
  
//   });

//display elements from the source into our div's




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