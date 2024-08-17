function getNext7DaysOfWeek() {
  const today = new Date();
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const result = [];

  for (let i = 0; i < 7; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    result.push(daysOfWeek[date.getDay()]);
  }
document.querySelector('.day1').innerText = `${result[0]}`
document.querySelector('.day2').innerText = `${result[1]}`
document.querySelector('.day3').innerText = `${result[2]}`
document.querySelector('.day4').innerText = `${result[3]}`
document.querySelector('.day5').innerText = `${result[4]}`
document.querySelector('.day6').innerText = `${result[5]}`
document.querySelector('.day7').innerText = `${result[6]}`

}

getNext7DaysOfWeek()



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
