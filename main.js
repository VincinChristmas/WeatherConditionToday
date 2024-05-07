document.querySelector('button').addEventListener('click', getFact);

function getFact() {


fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m") 
.then(res => res.json())
.then(data => {
    console.log(data)
    document.querySelector('h2').innerText = data.current.temperature_2m;
})
.catch(err => {
    console.log(`error ${err}`)
});
}
