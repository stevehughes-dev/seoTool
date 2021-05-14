const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const dealerName = urlParams.get('dname');
const outPutHtml = `<p>Buy from ${dealerName}</p>`;

document.getElementById('outPut').innerHTML = outPutHtml;