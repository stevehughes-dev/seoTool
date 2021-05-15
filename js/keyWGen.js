const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const dealerName = urlParams.get('dname');
const dealerCity = urlParams.get('dcity');

const outPutHtml = `<p>Buy from ${dealerName} located in the heart of ${dealerCity}</p>`;

document.getElementById('outPut').innerHTML = outPutHtml;

// Print list of states to dropdown