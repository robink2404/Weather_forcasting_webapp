//const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2677c25192mshdf885a80c1c3511p1981dajsnd75d3f3acf2a',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city)=>{
    cityname.innerHTML=city

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city,options) 
.then(response => response.json())
.then(response => {
    console.log(response)
    
       //cloud_pct.innerHTML= response.cloud_pct,
       temp.innerHTML= response.temp,
       feels_like.innerHTML=  response.feels_like,
       humidity.innerHTML=  response.humidity,
       min_temp.innerHTML=  response.min_temp,
       max_temp.innerHTML=  response.max_temp,
       wind_speed.innerHTML=  response.wind_speed,
       wind_degrees.innerHTML=  response.wind_degrees,
       sunrise.innerHTML=  response.sunrise,
       sunset.innerHTML=  response.sunset
      
})
.catch(err => console.error(err));
}

submiting.addEventListener("click",(e)=>{
    e.preventDefault()
    getWeather(city.value)
})
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai',options) 
.then(response => response.json())
.then(response => {
    console.log(response)
    
       
       mtemp.innerHTML= response.temp,

       mhumidity.innerHTML=  response.humidity,
      
       mwind_speed.innerHTML=  response.wind_speed

      
})
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Paris',options) 
.then(response => response.json())
.then(response => {
    console.log(response)
    
       
       ptemp.innerHTML= response.temp,

       phumidity.innerHTML=  response.humidity,
      
       pwind_speed.innerHTML=  response.wind_speed

      
})
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Tokyo',options) 
.then(response => response.json())
.then(response => {
    console.log(response)
    
       
       ttemp.innerHTML= response.temp,

       thumidity.innerHTML=  response.humidity,
      
       twind_speed.innerHTML=  response.wind_speed

      
})
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=London',options) 
.then(response => response.json())
.then(response => {
    console.log(response)
    
       
       ltemp.innerHTML= response.temp,

       lhumidity.innerHTML=  response.humidity,
      
       lwind_speed.innerHTML=  response.wind_speed

      
})
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Beijing',options) 
.then(response => response.json())
.then(response => {
    console.log(response)
    
       
       btemp.innerHTML= response.temp,

       bhumidity.innerHTML=  response.humidity,
      
       bwind_speed.innerHTML=  response.wind_speed

      
})
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=New York',options) 
.then(response => response.json())
.then(response => {
    console.log(response)
    
       
       ntemp.innerHTML= response.temp,

    nhumidity.innerHTML=  response.humidity,
      
       nwind_speed.innerHTML=  response.wind_speed

      
})


.catch(err => console.error(err));
getWeather("Delhi")
