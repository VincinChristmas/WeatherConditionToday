document.querySelector('button').addEventListener('click', getFact);

function getFact() {


fetch("https://api.open-meteo.com/v1/forecast?latitude=32.0617&longitude=118.7778&current=temperature_2m&hourly=temperature_2m&timezone=auto") 
.then(res => res.json())
.then(data => {
    console.log(data)
    document.querySelector('h2').innerText = `${data.current.temperature_2m} ${data.current_units.temperature_2m
    }`
    
})
.catch(err => {
    console.log(`error ${err}`)
});
}
