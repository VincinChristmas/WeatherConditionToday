//document.querySelector('button').addEventListener('click', getFact);

function getWeather(){


fetch("https://api.open-meteo.com/v1/forecast?latitude=32.0617&longitude=118.7778&current=temperature_2m&hourly=temperature_2m&timezone=auto") 
.then(res => res.json())
.then(data => {
    console.log(data)
    let temperatures = data.hourly.temperature_2m
    let lowestTemperatures = []
    let highestTemperatures = []

    
    function findLowestTemperature(tempArray) {
        return Math.min(...tempArray);
      }

    function findHighestTemperature(tempArray) {
        return Math.max(...tempArray)
    }

      for (let i = 0; i < temperatures.length; i += 24) {
        let current24Hours = temperatures.slice(i, i + 24)
        let lowestTemp = findLowestTemperature(current24Hours)
        lowestTemperatures.push(` ${lowestTemp}${data.current_units.temperature_2m} `)
      }
    document.querySelector('.lowOne').innerText = `${lowestTemperatures[0]}`
    document.querySelector('.lowTwo').innerText = `${lowestTemperatures[1]}`
    document.querySelector('.lowThree').innerText = `${lowestTemperatures[2]}`
    document.querySelector('.lowFour').innerText = `${lowestTemperatures[3]}`
    document.querySelector('.lowFive').innerText = `${lowestTemperatures[4]}`
    document.querySelector('.lowSix').innerText = `${lowestTemperatures[5]}`
    document.querySelector('.lowSeven').innerText = `${lowestTemperatures[6]}`

    


    for (let i = 0; i < temperatures.length; i += 24) {
        let current24Hours = temperatures.slice(i, i + 24)
        let highestTemp = findHighestTemperature(current24Hours)
        highestTemperatures.push(` ${highestTemp}${data.current_units.temperature_2m} `)
      }
      document.querySelector('.highOne').innerText = `${highestTemperatures[0]}`
      document.querySelector('.highTwo').innerText = `${highestTemperatures[1]}`
      document.querySelector('.highThree').innerText = `${highestTemperatures[2]}`
      document.querySelector('.highFour').innerText = `${highestTemperatures[3]}`
      document.querySelector('.highFive').innerText = `${highestTemperatures[4]}`
      document.querySelector('.highSix').innerText = `${highestTemperatures[5]}`
      document.querySelector('.highSeven').innerText = `${highestTemperatures[6]}`
  
    
})
.catch(err => {
    console.log(`error ${err}`)
});
}

getWeather()
