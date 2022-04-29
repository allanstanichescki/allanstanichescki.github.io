



function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(geoSuccess);
    }
}

getLocation();

function geoSuccess(position) {
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    codeLatLng(lat, lng);
}

function codeLatLng(lat, lng) {
    let api = 'https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lng+'&appid=ac03c8cc73647cefc41327e8c5143f67&units=metric';
    axios.get(api)
    .then((res) => {
        document.querySelector('h1').innerHTML = res.data.main.temp.toString().slice(0, -3)+"º";
        document.querySelector('h2').innerHTML = res.data.name;
    });
}



