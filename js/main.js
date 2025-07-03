

let input = document.querySelector('input')
let weathercity = document.querySelector('.weathercity')


let handlebtn=()=>{


   fetch (`http://api.openweathermap.org/geo/1.0/direct?q=${input.value}&limit=2&appid=f921b0d5d82c2356163bcab823b1b23f`)

.then(res => res.json())
.then ((data)=>{

    
    
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${data[0].lat}&lon=${data[0].lon}&appid=f921b0d5d82c2356163bcab823b1b23f`)
    // console.log(data)

.then(res => res.json())
.then((data)=>{


    weathercity.innerHTML=Math.floor(data.main.temp -273.15 )

})






})




}
