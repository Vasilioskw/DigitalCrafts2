
    var zip_code = "11040"
    var API_KEY = "629e1aba6d89a12cd97df23bbabf4b94"

function gettingstuff() {   
    
    fetch('https://api.openweathermap.org/data/2.5/weather?zip='+zip_code+'&appid='+API_KEY)
    .then((response) => {
    console.log(response)
    return response.json
    })
    // .then((json) => {
    // completed(json)
    
    // })



}
console.log(gettingstuff())



























// https://api.openweathermap.org/data/2.5/weather?zip=11040&appid=b26d0c2eefd88e3e401c206a3a7df949

// {"coord":{"lon":-73.6828,"lat":40.7294},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],"base":"stations","main":{"temp":283.02,"feels_like":278.63,"temp_min":282.04,"temp_max":286.15,"pressure":1020,"humidity":71},"visibility":10000,"wind":{"speed":4.63,"deg":210},"clouds":{"all":75},"dt":1615510113,"sys":{"type":1,"id":4582,"country":"US","sunrise":1615461157,"sunset":1615503415},"timezone":-18000,"id":0,"name":"New Hyde Park","cod":200}