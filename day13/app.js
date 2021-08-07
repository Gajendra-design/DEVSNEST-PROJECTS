const weatherForm = document.querySelector('form');
const weathercard = document.querySelector('.card');
const details = document.querySelector('.details');
const icon = document.querySelector('.icon img');
const backround = document.querySelector('.backround')

const updatedUI = (data) => {
    if (weathercard.classList.contains('visibility')) {
        weathercard.classList.remove('visibility');
    }

    const iconimg = `icons/${data.weatherDeti.WeatherIcon}.svg`
    icon.setAttribute('src', iconimg);
    details.innerHTML =
        `
             <h5 class="city-name">${data.cityDeti.LocalizedName}</h5>
             <div class="weather-condition">${data.weatherDeti.WeatherText}</div>
            <div class="temprature">
                <span>${data.weatherDeti.Temperature.Metric.Value}</span>
                <span>&deg;C</span>
            </div>
        `
    if (data.weatherDeti.IsDayTime) {
        backround.setAttribute('src', 'icons/haze.jpg');
    }
    else {
        backround.setAttribute('src', 'icons/stormy.jpg');
    }
}

const apiInfo = async (city) => {
    const cityDeti = await getcity(city);
    const weatherDeti = await weatherinfo(cityDeti.Key);
    return { cityDeti, weatherDeti };
}

weatherForm.addEventListener('submit', e => {
    e.preventDefault();
    const cityName = weatherForm.city.value.trim();
    weatherForm.reset();
    apiInfo(cityName)
        .then(data => updatedUI(data))
        .catch(err => console.log(err));
})