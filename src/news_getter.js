var myHeaders = new Headers();
myHeaders.append("apikey", "nwvdSu5h5iT69T0RALnMV4h5XpUE7ayp");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

fetch("https://api.apilayer.com/financelayer/news?tickers=tickers&tags=tags&sources=sources&sort=sort&offset=offset&limit=limit&keywords=keywords&fallback=fallback&date=date", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));