const inputBox = document.querySelector('.input-box');
const searchbtn = document.getElementById('searchbtn');
const weather_img =  document.querySelector('.weatherImage');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');
const error = document.querySelector('.error')
const weather_body =   document.querySelector(".weather-body");


async function checkWeather(city){
    const api_key = "88020bbae8030cd8eb5ec61321a6852c"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response => response.json());


    if (weather_data.cod === `404`) {
        error.style.display = "flex";
        weather_body.style.display = "none";
        console.log("error");
        return;
    }
    error.style.display = "none";
    weather_body.style.display = "flex";

    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed}km/hr`;


    switch (weather_data.weather[0].main) {
        case 'Clouds':
            weather_img.src ="cloud.png";
            break;
        case 'Clear':
            weather_img.src ="clear.png";
            break;
        case 'Rain':
            weather_img.src = "rain.png";
            break;
        case 'Mist':
            weather_img.src = "mist.png";
            break;
        case 'Snow':
            weather_img.src = "snow.png";
            break;  
    }

}
searchbtn.addEventListener('click',()=>{
    checkWeather(inputBox.value);
})


